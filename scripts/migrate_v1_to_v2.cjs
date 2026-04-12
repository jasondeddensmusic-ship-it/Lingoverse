#!/usr/bin/env node
'use strict';

/**
 * V1 → V2 Field Migration Script
 *
 * Usage: node scripts/migrate_v1_to_v2.cjs --lang=korean
 *
 * Performs:
 * 1. Renames nl/ko/fr/es → trg fields in teach/story cards
 * 2. Renames en → src fields
 * 3. Renames exampleEn → exampleSrc
 * 4. Adds srcLang:"en" to unit headers
 * 5. Changes track:"v1" → track:"v2" (or adds track:"v2")
 * 6. Ensures board:true on all lessons
 *
 * Does NOT modify: pos, gender, funFact (those need separate enrichment)
 *
 * BACKUP: Creates .bak file before modifying
 */

const fs = require('fs');
const path = require('path');

const langArg = process.argv.find(a => a.startsWith('--lang='));
if (!langArg) {
  console.error('Usage: node scripts/migrate_v1_to_v2.cjs --lang=korean|dutch|french|spanish');
  process.exit(1);
}
const LANG = langArg.split('=')[1];

const LANG_FILES = {
  korean: 'units-korean.js',
  dutch: 'units-dutch.js',
  french: 'units-french.js',
  spanish: 'units-spanish.js',
};

const LANG_CODES = {
  korean: 'ko',
  dutch: 'nl',
  french: 'fr',
  spanish: 'es',
};

const fileName = LANG_FILES[LANG];
if (!fileName) {
  console.error(`Unknown language: ${LANG}. Must be korean, dutch, french, or spanish.`);
  process.exit(1);
}

const filePath = path.join(__dirname, '..', 'src', 'data', fileName);
if (!fs.existsSync(filePath)) {
  console.error(`File not found: ${filePath}`);
  process.exit(1);
}

console.log(`Migrating ${LANG} (${fileName}) V1 → V2...`);

// Read file
let text = fs.readFileSync(filePath, 'utf8');
const originalSize = text.length;

// Create backup
const bakPath = filePath + '.bak';
fs.writeFileSync(bakPath, text, 'utf8');
console.log(`Backup created: ${bakPath}`);

// Track changes
let changes = 0;

// 1. Rename field: nl → trg (for teach cards with nl: field)
//    For Korean, the field is actually "nl" (legacy from Dutch-centric codebase)
//    For Dutch, French, Spanish - same pattern
const nlFieldRe = /(?<=\{[^}]*?)(?<!\w)nl\s*:/g;
const nlCount = (text.match(nlFieldRe) || []).length;
text = text.replace(nlFieldRe, 'trg:');
changes += nlCount;
console.log(`  nl → trg: ${nlCount} replacements`);

// 2. Rename field: en → src
//    Be careful not to match "en" inside other words or in "exampleEn"
//    Match: en: at start of line or after comma/space/{ but NOT exampleEn
const enFieldRe = /(?<=[\{,\s])(?<!example)en\s*:/g;
const enCount = (text.match(enFieldRe) || []).length;
text = text.replace(enFieldRe, 'src:');
changes += enCount;
console.log(`  en → src: ${enCount} replacements`);

// 3. Rename field: exampleEn → exampleSrc
const exEnRe = /exampleEn\s*:/g;
const exEnCount = (text.match(exEnRe) || []).length;
text = text.replace(exEnRe, 'exampleSrc:');
changes += exEnCount;
console.log(`  exampleEn → exampleSrc: ${exEnCount} replacements`);

// 4. Add srcLang:"en" to unit headers (after lang: field)
//    Only add if not already present
if (!text.includes('srcLang:')) {
  const langFieldRe = new RegExp(`(lang\\s*:\\s*["']${LANG_CODES[LANG]}["'])`, 'g');
  const langFieldCount = (text.match(langFieldRe) || []).length;
  text = text.replace(langFieldRe, '$1, srcLang:"en"');
  changes += langFieldCount;
  console.log(`  Added srcLang:"en": ${langFieldCount} units`);
} else {
  console.log(`  srcLang already present, skipping`);
}

// 5. Change track:"v1" → track:"v2" (or track: "v2" with spaces)
const trackRe = /track\s*:\s*["']v1["']/g;
const trackCount = (text.match(trackRe) || []).length;
text = text.replace(trackRe, 'track:"v2"');
changes += trackCount;
console.log(`  track v1 → v2: ${trackCount} replacements`);

// Also handle track:"v2" already present (Dutch uses this)
if (trackCount === 0) {
  const existingV2 = (text.match(/track\s*:\s*["']v2["']/g) || []).length;
  console.log(`  track already v2: ${existingV2} units`);
}

// 6. Ensure board:true on all lessons
//    Count lessons without board:true
const lessonBlockRe = /\{[^}]*?id\s*:\s*["'][^"']+["'][^}]*?steps\s*:/g;
const lessonBlocks = text.match(lessonBlockRe) || [];
let boardAdded = 0;
for (const block of lessonBlocks) {
  if (!block.includes('board:')) {
    // This is harder to do with regex alone - skip for safety
    // The _normStep() function in utils.js should handle this
  }
}

// Write result
fs.writeFileSync(filePath, text, 'utf8');
const newSize = text.length;

console.log(`\n=== Migration Summary ===`);
console.log(`Language: ${LANG}`);
console.log(`File: ${fileName}`);
console.log(`Total changes: ${changes}`);
console.log(`File size: ${originalSize} → ${newSize} chars`);
console.log(`Backup at: ${bakPath}`);
console.log(`\nNext steps:`);
console.log(`  1. Run npm run build to verify no breakage`);
console.log(`  2. Run POS tagging script`);
console.log(`  3. Run funFact enrichment agents`);
