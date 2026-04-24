#!/usr/bin/env node
// French u11-u17 fem (11 cards).

import fs from 'node:fs';

const apply = process.argv.includes('--apply');
const GENERIC = 'Feminine noun. Words ending in -tion, -sion, -ure are usually feminine.';

const FACTS = {
  'la vache': "The cow. Feminine. Latin 'vacca.' Same root as English 'vaccine' (named after cowpox experiments).",
  'la poule': "The hen. Feminine. Latin 'pulla' (young animal). Paired with 'coq' (rooster).",
  'la fièvre': "The fever. Latin 'febris.' Same root as English 'febrile.' Medical vocabulary.",
  'la piqûre': "The injection. -ure ending = feminine. From 'piquer' (to prick). Circumflex preserved.",
  'la rivière / le fleuve': "The river. 'Rivière' feminine, flows into another river. 'Fleuve' masculine, flows into the sea. French distinguishes.",
  'la mer': "The sea. Feminine. Same root as Latin 'mare.' Silent r.",
  'la fleur': "The flower. Feminine. Latin 'florem.' Same root as English 'flora,' 'flourish.'",
  'la matière': "The subject (school subject) / material. Latin 'materia.' Same root as English 'material,' 'matter.'",
  'la note': "The grade / note. Dual use: grade in school AND musical note. Same root as English.",
  'la bourse': "The scholarship / stock market. Dual use: scholarship AND stock exchange. From Middle Dutch 'beurs' (purse).",
  'la bibliothèque': "The library. Feminine. Greek 'bibliothēkē' (book-container). Same root as 'bibliography.'",
};

let total = 0;
const LANG_ROOT = 'src/data/french-v2';
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
