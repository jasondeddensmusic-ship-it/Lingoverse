/**
 * apply_match_translations.cjs
 *
 * Reads _arabic_match_translations.json and applies Arabic translations
 * to match pair src values in all 36 AR unit files.
 * Only replaces src values that are currently in English (no Arabic chars).
 */
const fs = require('fs');
const path = require('path');

const TRANSLATIONS = require('./_arabic_match_translations.json');
const DIR = path.join(__dirname, '..', 'src', 'data', 'german-v2-ar');

let totalReplaced = 0;
let totalSkipped = 0;
let missingTranslations = new Set();

for (let i = 1; i <= 36; i++) {
  const filename = `unit-${String(i).padStart(2, '0')}.js`;
  const filepath = path.join(DIR, filename);
  let raw = fs.readFileSync(filepath, 'utf8');
  let fileReplaced = 0;

  // Match {trg:"...",src:"..."} patterns where src has no Arabic
  const updated = raw.replace(
    /(\{trg:"[^"]+",\s*src:")([^"]+)(")/g,
    (match, prefix, srcVal, suffix) => {
      // Skip if already has Arabic
      if (/[\u0600-\u06FF]/.test(srcVal)) return match;

      const translation = TRANSLATIONS[srcVal];
      if (translation) {
        fileReplaced++;
        totalReplaced++;
        return prefix + translation + suffix;
      } else {
        missingTranslations.add(srcVal);
        totalSkipped++;
        return match;
      }
    }
  );

  if (fileReplaced > 0) {
    fs.writeFileSync(filepath, updated, 'utf8');
    console.log(`  ${filename}: ${fileReplaced} replacements`);
  }
}

console.log(`\nTotal replacements: ${totalReplaced}`);
console.log(`Skipped (no translation): ${totalSkipped}`);

if (missingTranslations.size > 0) {
  console.log(`\nMissing translations (${missingTranslations.size}):`);
  [...missingTranslations].sort().forEach(v => console.log(`  - ${v}`));
}

// Verify: count remaining English src values
let remaining = 0;
for (let i = 1; i <= 36; i++) {
  const f = path.join(DIR, `unit-${String(i).padStart(2, '0')}.js`);
  const raw = fs.readFileSync(f, 'utf8');
  const matches = [...raw.matchAll(/\{trg:"[^"]+",\s*src:"([^"]+)"\}/g)];
  for (const m of matches) {
    if (!/[\u0600-\u06FF]/.test(m[1])) remaining++;
  }
}
console.log(`\nRemaining English src values in match pairs: ${remaining}`);
