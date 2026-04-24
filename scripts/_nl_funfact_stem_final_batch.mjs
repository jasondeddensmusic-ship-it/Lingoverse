#!/usr/bin/env node
// Dutch stem+ending FINAL 4 cards. ZEROES variant.

import fs from 'node:fs';

const apply = process.argv.includes('--apply');
const GENERIC = 'Dutch verbs follow the stem + ending pattern. Find the stem, add the right ending.';

const FACTS = {
  'oliebollen': "Dutch doughnuts (New Year's treat). Compound: olie (oil) + bol (ball) + -en (plural). Literally 'oil-balls.' Deep-fried at street stands on December 31.",
  'willen dat': "To want that / to wish that. Willen (to want) + dat (that). Triggers verb-final in the that-clause. Common with subjunctive-like wishes.",
  'was ik maar': "If only I were / I wish I were. Counterfactual subjunctive. Was is subjunctive, ik subject, maar emphatic. Wistful wish.",
  'mits': "Provided that, on condition that. Formal conditional. 'Mits' is archaic-feeling Dutch, cognate with English 'midst.' Legal and academic register.",
};

let total = 0;
const LANG_ROOT = 'src/data/dutch-v2';
for (const file of fs.readdirSync(LANG_ROOT)) {
  if (!file.endsWith('.js')) continue;
  const path = `${LANG_ROOT}/${file}`;
  let text = fs.readFileSync(path, 'utf8');
  let count = 0;
  for (const [trg, newFact] of Object.entries(FACTS)) {
    const escTrg = trg.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const re = new RegExp(`(\\{type:"teach",trg:"${escTrg}"[\\s\\S]*?funFact:")${GENERIC.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(")`, 'g');
    if (!re.test(text)) continue;
    re.lastIndex = 0;
    text = text.replace(re, (_, pre, post) => { count++; return pre + newFact + post; });
  }
  if (count > 0) {
    console.log(`${path}: ${count}`);
    total += count;
    if (apply) fs.writeFileSync(path, text);
  }
}
console.log(`\nTotal: ${total}`);
if (!apply) console.log('Dry run.');
