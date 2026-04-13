#!/usr/bin/env node
// scripts/split_korean_units.cjs — Split units-korean.js into per-unit files
// Run: node scripts/split_korean_units.cjs

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const SRC = path.join(ROOT, 'src', 'data');
const INPUT = path.join(SRC, 'units-korean.js');
const OUT_DIR = path.join(SRC, 'korean-v2');

// Level mapping
const LEVEL_MAP = {
  a1: [1, 2, 3, 4, 5, 6],
  a2: [7, 8, 9, 10],
  b1: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
  b2: [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
};

// ─── Read source ─────────────────────────────────────────────
const src = fs.readFileSync(INPUT, 'utf8');
console.log(`Read ${INPUT} (${src.length} chars, ${src.split('\n').length} lines)`);

// ─── Find unit start positions ───────────────────────────────
// Each unit starts with {n:NUMBER,lang:"ko"
const unitPattern = /\{n:(\d+),lang:"ko"/g;
const unitStarts = [];
let m;
while ((m = unitPattern.exec(src)) !== null) {
  unitStarts.push({ n: parseInt(m[1], 10), pos: m.index });
}
console.log(`Found ${unitStarts.length} unit start markers`);

if (unitStarts.length !== 30) {
  console.error(`ERROR: Expected 30 units, found ${unitStarts.length}`);
  process.exit(1);
}

// ─── Extract unit text using brace-depth state machine ───────
// Handles strings (single/double/template), escapes, comments
function extractObject(text, startIdx) {
  let i = startIdx;
  if (text[i] !== '{') throw new Error(`Expected '{' at pos ${i}, got '${text[i]}'`);

  let depth = 0;
  let inSingle = false;
  let inDouble = false;
  let inTemplate = false;
  let inLineComment = false;
  let inBlockComment = false;

  while (i < text.length) {
    const ch = text[i];
    const next = i + 1 < text.length ? text[i + 1] : '';

    // Handle line comment
    if (inLineComment) {
      if (ch === '\n') inLineComment = false;
      i++;
      continue;
    }

    // Handle block comment
    if (inBlockComment) {
      if (ch === '*' && next === '/') {
        inBlockComment = false;
        i += 2;
        continue;
      }
      i++;
      continue;
    }

    // Handle string states
    if (inSingle) {
      if (ch === '\\') { i += 2; continue; } // skip escaped char
      if (ch === "'") inSingle = false;
      i++;
      continue;
    }
    if (inDouble) {
      if (ch === '\\') { i += 2; continue; }
      if (ch === '"') inDouble = false;
      i++;
      continue;
    }
    if (inTemplate) {
      if (ch === '\\') { i += 2; continue; }
      if (ch === '`') inTemplate = false;
      i++;
      continue;
    }

    // Not in any string or comment — check for openers
    if (ch === '/' && next === '/') { inLineComment = true; i += 2; continue; }
    if (ch === '/' && next === '*') { inBlockComment = true; i += 2; continue; }
    if (ch === "'") { inSingle = true; i++; continue; }
    if (ch === '"') { inDouble = true; i++; continue; }
    if (ch === '`') { inTemplate = true; i++; continue; }

    // Brace counting
    if (ch === '{') depth++;
    if (ch === '}') {
      depth--;
      if (depth === 0) {
        return text.slice(startIdx, i + 1);
      }
    }
    i++;
  }

  throw new Error(`Unbalanced braces starting at pos ${startIdx}. Depth=${depth}`);
}

// ─── Extract all units ───────────────────────────────────────
const units = [];
for (const { n, pos } of unitStarts) {
  const obj = extractObject(src, pos);
  units.push({ n, text: obj });
}

// ─── Extract title from each unit ────────────────────────────
function extractTitle(unitText) {
  const m2 = unitText.match(/title:"([^"]+)"/);
  return m2 ? m2[1] : `Unit ${unitText.match(/n:(\d+)/)[1]}`;
}

// ─── Create output directory ─────────────────────────────────
if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  console.log(`Created ${OUT_DIR}`);
}

// ─── Write per-unit files ────────────────────────────────────
const fileSizes = [];
for (const { n, text } of units) {
  const title = extractTitle(text);
  const nn = String(n).padStart(2, '0');

  // Apply transformations
  let modified = text;

  // Change track:"v1" to track:"v2"
  modified = modified.replace(/track:"v1"/, 'track:"v2"');

  // Add srcLang:"en" after lang:"ko" if not present
  if (!modified.includes('srcLang:')) {
    modified = modified.replace(/lang:"ko",/, 'lang:"ko",srcLang:"en",');
  }

  const content = [
    `// Korean V2 Unit ${n} \u2014 ${title}`,
    `// Level: ${text.match(/level:"([^"]+)"/)?.[1] || 'unknown'}`,
    '',
    `const UNIT_${n} =`,
    `${modified};`,
    '',
    `export default UNIT_${n};`,
    '',
  ].join('\n');

  const outPath = path.join(OUT_DIR, `unit-${nn}.js`);
  fs.writeFileSync(outPath, content, 'utf8');
  const size = Buffer.byteLength(content, 'utf8');
  fileSizes.push({ n, nn, title, size });
}

// ─── Write per-level wrapper files ───────────────────────────
for (const [level, unitNums] of Object.entries(LEVEL_MAP)) {
  const levelUpper = level.toUpperCase();
  const imports = unitNums.map(n => {
    const nn = String(n).padStart(2, '0');
    return `import UNIT_${n} from './korean-v2/unit-${nn}.js';`;
  }).join('\n');

  const arrayItems = unitNums.map(n => `  UNIT_${n},`).join('\n');

  const content = [
    `// Korean V2 ${levelUpper} Units (${unitNums[0]}-${unitNums[unitNums.length - 1]})`,
    `// Re-exports from per-unit files`,
    '',
    imports,
    '',
    `const KOREAN_V2_${levelUpper} = [`,
    arrayItems,
    `];`,
    '',
    `export default KOREAN_V2_${levelUpper};`,
    '',
  ].join('\n');

  const outPath = path.join(SRC, `units-korean-v2-${level}.js`);
  fs.writeFileSync(outPath, content, 'utf8');
  console.log(`Wrote ${outPath} (${unitNums.length} units)`);
}

// ─── Write main wrapper file ─────────────────────────────────
const mainWrapper = [
  `// src/data/units-korean-v2.js - Korean Rehaul (v2 curriculum)`,
  `// Re-exports from per-level split files for maintainability`,
  '',
  `import KOREAN_V2_A1 from './units-korean-v2-a1.js';`,
  `import KOREAN_V2_A2 from './units-korean-v2-a2.js';`,
  `import KOREAN_V2_B1 from './units-korean-v2-b1.js';`,
  `import KOREAN_V2_B2 from './units-korean-v2-b2.js';`,
  '',
  `export default [`,
  `  ...KOREAN_V2_A1,`,
  `  ...KOREAN_V2_A2,`,
  `  ...KOREAN_V2_B1,`,
  `  ...KOREAN_V2_B2,`,
  `];`,
  '',
].join('\n');

const mainPath = path.join(SRC, 'units-korean-v2.js');
fs.writeFileSync(mainPath, mainWrapper, 'utf8');
console.log(`Wrote ${mainPath}`);

// ─── Summary ─────────────────────────────────────────────────
console.log('\n═══════════════════════════════════════════════════');
console.log(`Split ${units.length} Korean units into per-unit files`);
console.log('═══════════════════════════════════════════════════');

let totalSize = 0;
for (const { n, nn, title, size } of fileSizes) {
  const kb = (size / 1024).toFixed(1);
  console.log(`  unit-${nn}.js  ${kb.padStart(6)} KB  ${title}`);
  totalSize += size;
}
console.log('───────────────────────────────────────────────────');
console.log(`  Total: ${(totalSize / 1024).toFixed(1)} KB across ${fileSizes.length} files`);
console.log('');
console.log('Wrapper files:');
for (const [level, unitNums] of Object.entries(LEVEL_MAP)) {
  console.log(`  units-korean-v2-${level}.js  (units ${unitNums[0]}-${unitNums[unitNums.length - 1]})`);
}
console.log(`  units-korean-v2.js  (main re-export)`);
console.log('\nOriginal units-korean.js is UNTOUCHED.');
console.log('Done!');
