#!/usr/bin/env node
// Restore stripped Italian accents in italian-v2 batch files.
// Only unambiguous substitutions (word-boundary match).
// Skip: e/è, a/à, o/ò (these are semantically ambiguous single-letter words).

'use strict';
const fs = require('fs');
const path = require('path');

function globSync(pattern) {
  // pattern: 'src/data/italian-v2/_batch*.js'
  const dir = path.dirname(pattern);
  const prefix = path.basename(pattern).split('*')[0];
  const suffix = path.basename(pattern).split('*')[1] || '';
  return fs.readdirSync(dir)
    .filter(f => f.startsWith(prefix) && f.endsWith(suffix))
    .map(f => path.join(dir, f));
}

// Each entry: [pattern (no accent), replacement (with accent)]
// All entries are unambiguous Italian words — only one valid spelling exists with the accent.
const SUBSTITUTIONS = [
  // Conjunctions and question words
  ['perche', 'perché'],
  ['finche', 'finché'],
  ['benche', 'benché'],
  ['poiche', 'poiché'],
  ['nonche', 'nonché'],
  ['sicche', 'sicché'],
  ['affinche', 'affinché'],
  // Adverbs
  ['cosi', 'così'],
  ['piu', 'più'],
  ['gia', 'già'],
  ['cioe', 'cioè'],
  // Verb forms (3rd person singular)
  ['puo', 'può'],
  // Nouns ending in -tà/-à (common pattern: abstract nouns)
  ['citta', 'città'],
  ['universita', 'università'],
  ['liberta', 'libertà'],
  ['realta', 'realtà'],
  ['qualita', 'qualità'],
  ['quantita', 'quantità'],
  ['meta', 'metà'],
  ['novita', 'novità'],
  ['facolta', 'facoltà'],
  ['specialita', 'specialità'],
  ['varieta', 'varietà'],
  ['societa', 'società'],
  ['attivita', 'attività'],
  ['possibilita', 'possibilità'],
  ['necessita', 'necessità'],
  ['felicita', 'felicità'],
  ['difficolta', 'difficoltà'],
  ['identita', 'identità'],
  ['nazionalita', 'nazionalità'],
  ['eta', 'età'],
  // Common standalone nouns
  ['caffe', 'caffè'],
  // Days of the week
  ['lunedi', 'lunedì'],
  ['martedi', 'martedì'],
  ['mercoledi', 'mercoledì'],
  ['giovedi', 'giovedì'],
  ['venerdi', 'venerdì'],
];

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;
  let changes = [];

  for (const [stripped, accented] of SUBSTITUTIONS) {
    // Word-boundary regex. \b handles Unicode imperfectly, so use explicit boundaries.
    // Match: (start-of-line | non-letter) + stripped + (end-of-line | non-letter)
    const re = new RegExp(`([^a-zA-ZÀ-ÿ])${stripped}([^a-zA-ZÀ-ÿ])`, 'g');
    let count = 0;
    content = content.replace(re, (_m, before, after) => {
      count++;
      return `${before}${accented}${after}`;
    });
    if (count > 0) changes.push(`${stripped}→${accented}: ${count}`);
  }

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    return { file: filePath, changes };
  }
  return null;
}

const files = globSync('src/data/italian-v2/_batch*.js');
const results = [];
let totalChanges = 0;

for (const f of files) {
  const result = processFile(f);
  if (result) {
    results.push(result);
    totalChanges += result.changes.reduce((sum, c) => {
      const n = parseInt(c.split(': ')[1], 10);
      return sum + (isNaN(n) ? 0 : n);
    }, 0);
  }
}

console.log(`Processed ${files.length} files.`);
console.log(`Files modified: ${results.length}`);
console.log(`Total substitutions: ${totalChanges}`);
if (process.argv.includes('--verbose')) {
  for (const r of results) {
    console.log(`\n${r.file}:`);
    for (const c of r.changes) console.log(`  ${c}`);
  }
}
