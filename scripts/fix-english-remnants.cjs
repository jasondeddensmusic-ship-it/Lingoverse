#!/usr/bin/env node
/**
 * English Remnant Fixer
 * Replaces English strings in match pairs, quiz questions, verb tables, and quiz options
 * with Arabic translations from batch files.
 *
 * Usage:
 *   node scripts/fix-english-remnants.cjs 1        # Fix unit 1
 *   node scripts/fix-english-remnants.cjs 1-6      # Fix units 1-6
 *   node scripts/fix-english-remnants.cjs all       # Fix all units
 *   node scripts/fix-english-remnants.cjs 1 --dry   # Dry run
 */
const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const dryRun = args.includes('--dry');
const rangeArg = args.find(a => a !== '--dry') || '1';

let units = [];
if (rangeArg === 'all') {
  units = Array.from({length: 6}, (_, i) => i + 1);
} else if (rangeArg.includes('-')) {
  const [start, end] = rangeArg.split('-').map(Number);
  units = Array.from({length: end - start + 1}, (_, i) => start + i);
} else {
  units = [parseInt(rangeArg)];
}

// Load all english-fix batch files
const batchDir = path.join(__dirname, 'batches');
const allTranslations = {};
if (fs.existsSync(batchDir)) {
  for (const f of fs.readdirSync(batchDir).filter(f => f.includes('english-fix') && f.endsWith('.cjs'))) {
    try {
      Object.assign(allTranslations, require(path.join(batchDir, f)));
    } catch(e) {
      console.error(`  Batch ${f}: ${e.message}`);
    }
  }
  console.log(`  Loaded ${Object.keys(allTranslations).length} English->Arabic translations`);
}

if (Object.keys(allTranslations).length === 0) {
  console.log('  No translations loaded. Exiting.');
  process.exit(1);
}

// Sort keys by length descending (match longer strings first)
const sortedKeys = Object.keys(allTranslations).sort((a, b) => b.length - a.length);

let totalReplaced = 0;

for (const unitNum of units) {
  const pad = String(unitNum).padStart(2, '0');
  const unitFile = path.join(__dirname, '..', 'src', 'data', 'german-v2-ar', `unit-${pad}.js`);

  if (!fs.existsSync(unitFile)) {
    console.log(`  Unit ${unitNum}: file not found, skipping`);
    continue;
  }

  let content = fs.readFileSync(unitFile, 'utf8');
  let replaced = 0;

  // For each English key, find and replace exact matches in string values
  // We need to be careful to only replace inside string values, not in German fields
  for (const eng of sortedKeys) {
    const arabic = allTranslations[eng].replace(/"/g, "'"); // Safety: no double quotes in values

    // Strategy: replace "English" with "Arabic" but only when it appears as a complete string value
    // Pattern 1: src:"English" (match pairs, verb tables)
    const srcMarker = `src:"${eng}"`;
    if (content.includes(srcMarker)) {
      const count = content.split(srcMarker).length - 1;
      content = content.split(srcMarker).join(`src:"${arabic}"`);
      replaced += count;
    }

    // Pattern 2: q:"English question" (quiz questions)
    const qMarker = `q:"${eng}"`;
    if (content.includes(qMarker)) {
      const count = content.split(qMarker).length - 1;
      content = content.split(qMarker).join(`q:"${arabic}"`);
      replaced += count;
    }

    // Pattern 3: Inside opts arrays - "English option"
    // Only replace if it's inside an opts array context
    // We'll do a simpler approach: replace the exact quoted string
    // But be careful not to replace German trg values
    const optMarker = `"${eng}"`;
    // Only replace in opts context - check if it appears after opts:[
    // Simple heuristic: if the string appears and it's > 5 chars English, replace it
    // But skip if it's a German word (trg field)
    // We'll rely on the batch files only containing actual English strings
    if (eng.length > 5 && /^[A-Z]/.test(eng)) {
      let idx = content.indexOf(optMarker);
      while (idx !== -1) {
        // Check context: is this inside an opts array or q field?
        const before = content.substring(Math.max(0, idx - 100), idx);
        if (before.includes('opts:[') || before.includes(',"')) {
          // Check it's not a trg or field name
          if (!before.endsWith('trg:') && !before.endsWith('title:') && !before.endsWith('speaker:')) {
            content = content.substring(0, idx) + `"${arabic}"` + content.substring(idx + optMarker.length);
            replaced++;
          }
        }
        idx = content.indexOf(optMarker, idx + arabic.length + 2);
      }
    }
  }

  if (!dryRun && replaced > 0) {
    fs.writeFileSync(unitFile, content);
  }

  console.log(`  Unit ${pad}: ${replaced} replacements${dryRun ? ' [DRY RUN]' : ''}`);
  totalReplaced += replaced;
}

console.log(`\n  TOTAL: ${totalReplaced} replacements${dryRun ? ' [DRY RUN]' : ''}`);
