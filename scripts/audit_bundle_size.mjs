#!/usr/bin/env node
/**
 * audit_bundle_size.mjs — track Vite output chunk sizes against budgets.
 *
 * Why this exists (Rule I — validator-first engineering):
 * The main `index-*.js` chunk is currently ~47 MB (15 MB gzipped). It
 * contains all 39,038 teach cards + dictionaries inlined. A single
 * accidental import in shared code could double that. Without a
 * regression gate, slow growth goes unnoticed until users complain
 * about page load times.
 *
 * What this checks:
 * - Reads `dist/assets/*.js` after `npm run build`
 * - Compares each chunk against its budget (BUDGETS map below)
 * - Default budgets match current baseline + 15% slack
 *
 * Budgets are conservative: locked-in baselines that ALLOW small
 * growth but block doubling. Tighten over time as code-splitting
 * lands.
 *
 * Mode:
 * - default: print summary (informational, exit 0)
 * - --strict: exit 1 if any chunk over budget
 *
 * Tracked in AUTONOMOUS_QUEUE under VISUAL-PERF.
 */

import fs from 'fs';
import path from 'path';

const STRICT = process.argv.includes('--strict');

// Budgets in KB, matched to chunk-name prefix (since Vite hashes filenames).
// Numbers reflect 2026-04-26 baseline + 15% slack. Tighten when code-splits land.
// Phase 1 lazy-load (PR #677, 2026-04-26): each language's units module
// is now a separate chunk. Active-lang download dropped from 47 MB → ~8 MB
// for German users. Budgets below reflect post-split + 15% slack.
const BUDGETS = {
  'index': 4_300,              // was 55,000 — DRAMATIC drop. Only app shell + utils.
  'CefrReferencePage': 3_700,  // currently ~3,224 KB
  'GrammarPage': 1_080,        // currently ~937 KB
  'dictionary': 580,           // currently ~506 KB
  'LearnPage': 440,            // currently ~381 KB
  'Onboarding': 110,           // currently ~95 KB
  'IdiomsPage': 110,           // currently ~96 KB
  'VocabularyPage': 90,        // currently ~78 KB
  'Profile': 30,               // currently ~25 KB
  'Flashcards': 22,            // currently ~18 KB
  'Quiz': 14,                  // currently ~12 KB
  'Chat': 12,                  // currently ~10 KB
  'AuthScreen': 11,            // currently ~9 KB
  'Home': 10,                  // currently ~8 KB
  // Lazy-loaded language chunks (Phase 1 split). Tighten as content grows.
  'units-japanese-v2': 7_500,    // currently ~6,486 KB (largest lang)
  'units-german-v2-ar': 6_300,   // currently ~5,453 KB
  'units-korean-v2': 6_300,      // currently ~5,423 KB
  'units-dutch-v2': 5_800,       // currently ~5,054 KB
  'units-german-v2': 5_650,      // currently ~4,908 KB
  'units-italian-v2': 5_300,     // currently ~4,608 KB
  'units-spanish-v2': 5_300,     // currently ~4,576 KB
  'units-french-v2': 5_100,      // currently ~4,425 KB
  'units-chinese-v2': 1_420,     // currently ~1,235 KB
  'units-portuguese-v2': 905,    // currently ~787 KB
  'units-russian-v2': 740,       // currently ~641 KB
};

const distDir = path.resolve(process.cwd(), 'dist/assets');
if (!fs.existsSync(distDir)) {
  console.log('No dist/assets/ — run `npm run build` first.');
  process.exit(0);
}

const chunks = fs.readdirSync(distDir).filter(f => f.endsWith('.js'));
const violations = [];
const checked = [];

for (const file of chunks) {
  const sizeBytes = fs.statSync(path.join(distDir, file)).size;
  const sizeKB = Math.round(sizeBytes / 1024);
  // Match against budget by prefix (chunk hash differs every build)
  const key = Object.keys(BUDGETS).find(k => file.startsWith(k + '-') || file === k + '.js');
  if (!key) continue;
  checked.push({ file, sizeKB, budget: BUDGETS[key], key });
  if (sizeKB > BUDGETS[key]) {
    violations.push({ file, sizeKB, budget: BUDGETS[key], over: sizeKB - BUDGETS[key] });
  }
}

console.log('Bundle size audit (vs 2026-04-26 baselines):\n');
console.log(`  ${'Chunk'.padEnd(24)} ${'KB'.padStart(8)} ${'Budget'.padStart(8)} ${'Status'}`);
console.log('  ' + '-'.repeat(60));
for (const c of checked.sort((a,b) => b.sizeKB - a.sizeKB)) {
  const pct = Math.round((c.sizeKB / c.budget) * 100);
  const status = c.sizeKB > c.budget ? `❌ +${c.sizeKB - c.budget}` : `✅ ${pct}%`;
  console.log(`  ${c.key.padEnd(24)} ${c.sizeKB.toString().padStart(8)} ${c.budget.toString().padStart(8)} ${status}`);
}
console.log('');
console.log(`  Chunks checked: ${checked.length} / ${chunks.length} JS files in dist/`);

if (violations.length > 0) {
  console.log(`\n  ${violations.length} chunk(s) over budget:`);
  for (const v of violations) {
    console.log(`    ${v.file}: ${v.sizeKB} KB (budget ${v.budget} KB, +${v.over} KB)`);
  }
  if (STRICT) {
    console.log('\n  STRICT mode: failing CI.');
    process.exit(1);
  }
}

console.log('\n  Tracked in AUTONOMOUS_QUEUE under VISUAL-PERF.');
process.exit(0);
