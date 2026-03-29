#!/usr/bin/env node
/**
 * Arabic Marker Translator
 * Processes existing [AR]-marked unit files using the shared arabic-dictionary.
 *
 * Usage:
 *   node scripts/translate-ar-markers.cjs 1        # Translate unit 1
 *   node scripts/translate-ar-markers.cjs 1-6      # Translate units 1-6
 *   node scripts/translate-ar-markers.cjs all       # Translate all units
 *   node scripts/translate-ar-markers.cjs 1 --dry   # Dry run (no write)
 *
 * Architecture:
 *   arabic-dictionary.cjs   ← Shared translation data (single source of truth)
 *   translate-ar-markers.cjs ← THIS FILE (applies translations to [AR] markers)
 *   generate-arabic-units.cjs ← Generator (clones English→Arabic with [AR] markers)
 */
const fs = require('fs');
const path = require('path');
const dict = require('./arabic-dictionary.cjs');
const glob = require('path');

// Load batch translation files (scripts/batches/*.cjs)
const batchDir = path.join(__dirname, 'batches');
let batches = {};
if (fs.existsSync(batchDir)) {
  for (const f of fs.readdirSync(batchDir).filter(f => f.endsWith('.cjs'))) {
    try { Object.assign(batches, require(path.join(batchDir, f))); } catch(e) { console.error(`  Batch ${f}: ${e.message}`); }
  }
  console.log(`  Loaded ${Object.keys(batches).length} batch translations from ${fs.readdirSync(batchDir).filter(f=>f.endsWith('.cjs')).length} files`);
}

const args = process.argv.slice(2);
const dryRun = args.includes('--dry');
const rangeArg = args.find(a => a !== '--dry') || '1';

// Parse unit range
let units = [];
if (rangeArg === 'all') {
  units = Array.from({length: 36}, (_, i) => i + 1);
} else if (rangeArg.includes('-')) {
  const [start, end] = rangeArg.split('-').map(Number);
  units = Array.from({length: end - start + 1}, (_, i) => start + i);
} else {
  units = [parseInt(rangeArg)];
}

// Merge ALL dictionary maps + batches into one flat lookup
// Priority: batches > STORIES > WORDS > NOTES > FUNFACTS > EXAMPLES > HINTS > INTROS > QUIZZES > TIPS
const ALL_TRANSLATIONS = {};
for (const map of [dict.TIPS, dict.QUIZZES, dict.INTROS, dict.HINTS, dict.EXAMPLES, dict.FUNFACTS, dict.NOTES, dict.WORDS, dict.STORIES]) {
  Object.assign(ALL_TRANSLATIONS, map);
}
Object.assign(ALL_TRANSLATIONS, batches);

// Also add versions with \\n for keys that have \n (file stores \\n literally)
const extraKeys = {};
for (const [k, v] of Object.entries(ALL_TRANSLATIONS)) {
  if (k.includes('\n')) {
    extraKeys[k.replace(/\n/g, '\\n')] = v.replace(/\n/g, '\\n');
  }
}
Object.assign(ALL_TRANSLATIONS, extraKeys);

// Fix double [AR] markers: "[AR] [AR] X" → should match "[AR] X" after removing first [AR]
// We'll handle this in the replacement loop

// Sort by key length descending to match longer strings first
const sortedKeys = Object.keys(ALL_TRANSLATIONS).sort((a, b) => b.length - a.length);

let totalBefore = 0;
let totalAfter = 0;
let totalReplaced = 0;

for (const unitNum of units) {
  const pad = String(unitNum).padStart(2, '0');
  const unitFile = path.join(__dirname, '..', 'src', 'data', 'german-v2-ar', `unit-${pad}.js`);

  if (!fs.existsSync(unitFile)) {
    console.log(`  Unit ${unitNum}: file not found, skipping`);
    continue;
  }

  let content = fs.readFileSync(unitFile, 'utf8');

  // Normalize Unicode to NFC (some files have NFD decomposed ü/ö)
  content = content.normalize('NFC');

  // Fix double [AR] markers from generator bug: "[AR] [AR] X" → "[AR] X"
  const dblCount = (content.match(/\[AR\] \[AR\]/g) || []).length;
  if (dblCount > 0) {
    content = content.replace(/\[AR\] \[AR\]/g, '[AR]');
  }

  const beforeCount = (content.match(/\[AR\]/g) || []).length;
  let replaced = 0;

  // Apply translations: replace "[AR] English" with "Arabic"
  // Use string-based replacement (not regex) to avoid escaping issues with \\n
  for (const eng of sortedKeys) {
    const marker = `[AR] ${eng}`;
    if (!content.includes(marker)) continue;
    // PP39: Ensure \n stays as literal \n in JS strings, never actual newlines
    const safeValue = ALL_TRANSLATIONS[eng].replace(/\n/g, '\\n');
    // Count occurrences
    let count = 0;
    let idx = content.indexOf(marker);
    while (idx !== -1) { count++; idx = content.indexOf(marker, idx + 1); }
    // Replace all occurrences
    while (content.includes(marker)) {
      content = content.replace(marker, safeValue);
    }
    replaced += count;
  }

  const afterCount = (content.match(/\[AR\]/g) || []).length;
  const coverage = beforeCount > 0 ? ((beforeCount - afterCount) / beforeCount * 100).toFixed(1) : '100.0';

  if (!dryRun && replaced > 0) {
    fs.writeFileSync(unitFile, content);
  }

  console.log(`  Unit ${pad}: ${beforeCount} → ${afterCount} [AR] markers (${replaced} replaced, ${coverage}% coverage)${dryRun ? ' [DRY RUN]' : ''}`);

  totalBefore += beforeCount;
  totalAfter += afterCount;
  totalReplaced += replaced;
}

console.log(`\n  TOTAL: ${totalBefore} → ${totalAfter} [AR] markers (${totalReplaced} replaced, ${totalBefore > 0 ? ((totalBefore - totalAfter) / totalBefore * 100).toFixed(1) : '100.0'}% coverage)`);
if (dryRun) console.log('  [DRY RUN — no files written]');
