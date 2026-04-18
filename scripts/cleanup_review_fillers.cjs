#!/usr/bin/env node
/**
 * Replace every `{trg:"X",src:"(review)"}` match-pair filler with the real
 * translation looked up from the teach card with `trg: "X"` in the same file
 * (or the same language corpus if not found locally).
 *
 * Usage:
 *   node scripts/cleanup_review_fillers.cjs            # dry run
 *   node scripts/cleanup_review_fillers.cjs --apply
 *
 * PP66 (no filler coverage) enforces zero `"(review)"` after this cleanup.
 */

const fs = require('fs');
const path = require('path');

const apply = process.argv.includes('--apply');
const DATA_ROOT = path.join(__dirname, '..', 'src', 'data');

// Find all .js files with "(review)" in them
function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(p, files);
    else if (entry.isFile() && p.endsWith('.js')) files.push(p);
  }
  return files;
}

// For each file, build a lookup of trg → src from all teach cards in this file + its sibling files in the same lang-v2 folder.
function buildTrgSrcMap(files) {
  const map = new Map(); // lower(trg) → src
  const teachRe = /type\s*:\s*['"]teach['"][^}]*?trg\s*:\s*(['"])((?:\\.|(?!\1).)*)\1[^}]*?(?:src|en)\s*:\s*(['"])((?:\\.|(?!\3).)*)\3/g;
  for (const f of files) {
    const c = fs.readFileSync(f, 'utf8');
    let m;
    while ((m = teachRe.exec(c)) !== null) {
      const trg = m[2];
      const src = m[4];
      const key = trg.toLowerCase().trim();
      if (!map.has(key)) map.set(key, src);
    }
  }
  return map;
}

const allFiles = walk(DATA_ROOT);
const dirtyFiles = allFiles.filter(f => fs.readFileSync(f, 'utf8').includes('"(review)"'));
if (dirtyFiles.length === 0) {
  console.log('No "(review)" filler found. Clean.');
  process.exit(0);
}

// Group files by language dir so each file looks up trg→src within its language
const byLang = {};
for (const f of allFiles) {
  const parts = f.replace(DATA_ROOT, '').split(/[\\/]/).filter(Boolean);
  const lang = parts[0];
  if (!lang.endsWith('-v2')) continue;
  byLang[lang] = byLang[lang] || [];
  byLang[lang].push(f);
}

let totalPatches = 0;
let filesPatched = 0;

for (const dirty of dirtyFiles) {
  const parts = dirty.replace(DATA_ROOT, '').split(/[\\/]/).filter(Boolean);
  const lang = parts[0];
  if (!lang.endsWith('-v2')) {
    console.log(`SKIP (non-v2): ${dirty}`);
    continue;
  }
  const langFiles = byLang[lang] || [];
  const trgSrc = buildTrgSrcMap(langFiles);

  let content = fs.readFileSync(dirty, 'utf8');
  let patches = 0;
  // Pattern: {trg:"X",src:"(review)"} possibly with whitespace
  const pairRe = /\{\s*trg\s*:\s*(['"])((?:\\.|(?!\1).)*)\1\s*,\s*src\s*:\s*(['"])\(review\)\3\s*\}/g;
  content = content.replace(pairRe, (whole, q1, trg) => {
    const realSrc = trgSrc.get(trg.toLowerCase().trim());
    if (!realSrc) {
      console.log(`  [${path.basename(dirty)}] no src found for trg="${trg}" — leaving as (review)`);
      return whole;
    }
    patches++;
    const esc = realSrc.replace(/"/g, '\\"');
    return `{trg:"${trg}",src:"${esc}"}`;
  });

  if (patches > 0) {
    console.log(`${dirty.replace(DATA_ROOT, '.')}: ${patches} patched`);
    totalPatches += patches;
    filesPatched++;
    if (apply) fs.writeFileSync(dirty, content);
  }
}

console.log(`\nTotal: ${totalPatches} filler pairs across ${filesPatched} files`);
if (!apply) console.log('Dry run. Add --apply to write.');
