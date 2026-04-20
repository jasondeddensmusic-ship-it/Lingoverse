#!/usr/bin/env node
// Restore stripped Italian accents in italian-v2 batch files.
// Only unambiguous substitutions (word-boundary match).
// Skip: e/è, a/à, o/ò single letters (semantically ambiguous).

'use strict';
const fs = require('fs');
const path = require('path');

function globSync(pattern) {
  const dir = path.dirname(pattern);
  const prefix = path.basename(pattern).split('*')[0];
  const suffix = path.basename(pattern).split('*')[1] || '';
  return fs.readdirSync(dir)
    .filter(f => f.startsWith(prefix) && f.endsWith(suffix))
    .map(f => path.join(dir, f));
}

// Word-level substitutions: [stripped, accented]
const WORD_SUBSTITUTIONS = [
  // Conjunctions and question words
  ['perche', 'perché'],
  ['finche', 'finché'],
  ['benche', 'benché'],
  ['poiche', 'poiché'],
  ['nonche', 'nonché'],
  ['sicche', 'sicché'],
  ['affinche', 'affinché'],
  ['pero', 'però'],
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

// Phrase-level substitutions for è (is) vs e (and).
// Only unambiguous contexts where "is" is the only sensible reading.
const PHRASE_SUBSTITUTIONS = [
  ['non e ', 'non è '],
  ['non e,', 'non è,'],
  ['non e.', 'non è.'],
  ['non e!', 'non è!'],
  ['non e?', 'non è?'],
  ['cio e ', 'ciò è '],
  ['questo e ', 'questo è '],
  ['questa e ', 'questa è '],
  ['quello e ', 'quello è '],
  ['quella e ', 'quella è '],
  ['lui e ', 'lui è '],
  ['lei e ', 'lei è '],
  ['che e ', 'che è '],
  // Question-word constructions — "e" after these can only be "is"
  ['qual e ', "qual è "],
  ['qual e,', "qual è,"],
  ['qual e.', "qual è."],
  ['qual e?', "qual è?"],
  ['quale e ', "quale è "],
  ['quali e ', "quali è "],
  // Existence: c'e → c'è (there is)
  ["c'e ", "c'è "],
  ["c'e,", "c'è,"],
  ["c'e.", "c'è."],
  ["c'e!", "c'è!"],
  ["c'e?", "c'è?"],
  // dov'e / com'e (where/how is)
  ["dov'e ", "dov'è "],
  ["dov'e?", "dov'è?"],
  ["com'e ", "com'è "],
  ["com'e?", "com'è?"],
];

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;
  const changes = [];

  for (const [stripped, accented] of WORD_SUBSTITUTIONS) {
    const re = new RegExp(`([^a-zA-ZÀ-ÿ])${stripped}([^a-zA-ZÀ-ÿ])`, 'g');
    let count = 0;
    content = content.replace(re, (_m, before, after) => {
      count++;
      return `${before}${accented}${after}`;
    });
    if (count > 0) changes.push(`${stripped}→${accented}: ${count}`);
  }

  for (const [before, after] of PHRASE_SUBSTITUTIONS) {
    let count = 0;
    const parts = content.split(before);
    if (parts.length > 1) {
      count = parts.length - 1;
      content = parts.join(after);
      changes.push(`"${before}"→"${after}": ${count}`);
    }
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
