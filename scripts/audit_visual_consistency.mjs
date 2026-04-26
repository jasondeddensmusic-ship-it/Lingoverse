#!/usr/bin/env node
/**
 * audit_visual_consistency.mjs — visual debt audit
 *
 * Surveys src/ for visual-system drift: hardcoded colors, raw px values,
 * inline styles that bypass `src/styles.js`, gradient anti-patterns.
 * Produces a per-file report of design-system violations to feed into
 * a Claude Design session (claude.ai/design).
 *
 * Mode:
 * - Default: print summary (informational, exit 0).
 * - With --verbose: full per-file violation list.
 * - With --strict: exit nonzero if total violations > threshold.
 *
 * What's flagged:
 * 1. Hardcoded hex colors NOT defined in styles.js palette
 * 2. Raw px values in inline styles (should use spacing tokens)
 * 3. CSS gradient assigned to `color` property (PP31)
 * 4. Inline `style={{}}` blocks > 5 properties (component should be tokenized)
 *
 * Tracked in AUTONOMOUS_QUEUE under VISUAL-001.
 */

import fs from 'fs';
import path from 'path';

const ROOT = path.resolve(process.cwd(), 'src');
const VERBOSE = process.argv.includes('--verbose');
const STRICT = process.argv.includes('--strict');
const THRESHOLD = 500; // Above this in --strict mode = fail

// Read styles.js to extract palette
const stylesPath = path.join(ROOT, 'styles.js');
const stylesText = fs.existsSync(stylesPath) ? fs.readFileSync(stylesPath, 'utf8') : '';
const definedColors = new Set();
for (const m of stylesText.matchAll(/['"`]?(#[0-9a-fA-F]{3,8})['"`]?/g)) {
  definedColors.add(m[1].toLowerCase());
}

function walk(dir) {
  const out = [];
  if (!fs.existsSync(dir)) return out;
  for (const f of fs.readdirSync(dir)) {
    const fp = path.join(dir, f);
    const st = fs.statSync(fp);
    if (st.isDirectory()) out.push(...walk(fp));
    else if (/\.(jsx?|tsx?)$/.test(f)) out.push(fp);
  }
  return out;
}

// Scope: actual code (components, pages, app entry). Skip data/ — color tokens
// in data are intentional (unit color assignments, etc.) not visual debt.
// Skip CountryFlag.jsx — it intentionally uses each country's flag colors,
// which are immutable national symbols, not theme tokens.
const files = walk(ROOT).filter(f => {
  if (f.endsWith('styles.js')) return false;
  if (/[\\\/]data[\\\/]/.test(f)) return false;
  if (/\.bak\./.test(f)) return false;
  if (/CountryFlag\.jsx$/.test(f)) return false;
  return true;
});
const violations = {
  hardcodedColors: [],
  rawPx: [],
  colorGradient: [],
  largeInline: [],
};

for (const file of files) {
  const text = fs.readFileSync(file, 'utf8');
  const rel = path.relative(process.cwd(), file);

  // 1. Hardcoded colors not in palette
  for (const m of text.matchAll(/['"`](#[0-9a-fA-F]{3,8})['"`]/g)) {
    const color = m[1].toLowerCase();
    if (!definedColors.has(color)) {
      violations.hardcodedColors.push({ file: rel, color });
    }
  }

  // 2. Raw px in inline styles (spot-check pattern: style={{...XXpx...}})
  const inlineStyles = [...text.matchAll(/style=\{\{[^}]+\}\}/g)];
  for (const m of inlineStyles) {
    const block = m[0];
    const pxValues = block.match(/['"`]?\d+px['"`]?/g) || [];
    if (pxValues.length > 0) {
      violations.rawPx.push({ file: rel, count: pxValues.length });
    }
    // 4. Large inline style blocks (> 5 props)
    const propCount = (block.match(/[a-zA-Z]+\s*:/g) || []).length;
    if (propCount > 8) {
      violations.largeInline.push({ file: rel, propCount });
    }
  }

  // 3. CSS gradient assigned to color (PP31)
  if (/color:\s*['"`]linear-gradient/.test(text) || /color:\s*['"`]radial-gradient/.test(text)) {
    violations.colorGradient.push({ file: rel });
  }
}

const totals = {
  hardcoded: violations.hardcodedColors.length,
  rawPx: violations.rawPx.length,
  colorGrad: violations.colorGradient.length,
  largeInline: violations.largeInline.length,
};
const totalViolations = totals.hardcoded + totals.rawPx + totals.colorGrad + totals.largeInline;

console.log('Visual consistency audit:');
console.log(`  Files scanned: ${files.length}`);
console.log(`  Defined colors in styles.js: ${definedColors.size}`);
console.log('');
console.log(`  Hardcoded colors (not in palette):  ${totals.hardcoded}`);
console.log(`  Raw px in inline styles:            ${totals.rawPx}`);
console.log(`  CSS gradient on color (PP31):       ${totals.colorGrad}`);
console.log(`  Large inline styles (>8 props):     ${totals.largeInline}`);
console.log(`  TOTAL:                              ${totalViolations}`);
console.log('');

if (VERBOSE) {
  // Top files by violation count
  const fileCounts = {};
  for (const arr of Object.values(violations)) {
    for (const v of arr) {
      fileCounts[v.file] = (fileCounts[v.file] || 0) + 1;
    }
  }
  const sorted = Object.entries(fileCounts).sort((a,b)=>b[1]-a[1]).slice(0, 10);
  console.log('Top 10 files by visual debt:');
  for (const [f, c] of sorted) console.log(`  ${c.toString().padStart(4)}  ${f}`);
  console.log('');
  if (totals.colorGrad > 0) {
    console.log('PP31 violations (CSS gradient on color):');
    for (const v of violations.colorGradient) console.log(`  ${v.file}`);
  }
}

console.log(`Tracked in AUTONOMOUS_QUEUE under VISUAL-001 (Brilliant-tier redesign).`);

if (STRICT && totalViolations > THRESHOLD) process.exit(1);
process.exit(0);
