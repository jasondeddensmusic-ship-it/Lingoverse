#!/usr/bin/env node
// Fix Dutch 3-4 count duplicate facts across different trgs.

import fs from 'node:fs';

const apply = process.argv.includes('--apply');

const CASES = [
  {trg: 'goedemiddag', prefix: 'Dutch loves building words', fact: "Good afternoon. Compound: goede + middag (midday). Used roughly 12-6 PM."},
  {trg: 'goedenavond', prefix: 'Dutch loves building words', fact: "Good evening. Compound: goeden + avond. Used after 6 PM. Extra -n preserves older inflection."},
  {trg: 'alsjeblieft', prefix: 'Dutch loves building words', fact: "Please / here you go (informal). From 'als je blieft' (if it pleases you). Compressed phrase."},
  {trg: 'alstublieft', prefix: 'Dutch loves building words', fact: "Please / here you go (formal). 'Als u blieft' (formal equivalent). Compressed phrase."},
  {trg: 'een', prefix: 'Dutch numbers follow Germanic patterns', fact: "One / a. Dual use: number (één, with accent) and indefinite article (een, no accent)."},
  {trg: 'hoe oud ben je?', prefix: 'Dutch numbers follow Germanic patterns', fact: "How old are you? (informal). 'Hoe oud' (how old) + 'ben je' (are you). Ben from zijn (to be)."},
  {trg: 'dertig', prefix: 'Dutch numbers follow Germanic patterns', fact: "Thirty. 'Der-' (irregular stem) + '-tig' (tens suffix). Same -tig pattern from veertig on."},
  {trg: 'tachtig', prefix: 'Dutch numbers follow Germanic patterns', fact: "Eighty. 'Tach-' (IRREGULAR stem, not 'acht-') + '-tig.' Unique among -tig numbers."},
  {trg: 'het eens zijn met', prefix: 'In my opinion', fact: "To agree with. Literally 'to be one of mind with.' 'Eens' = agreed. Opposite: het oneens zijn met (disagree)."},
  {trg: 'ik ben van mening dat', prefix: 'In my opinion', fact: "'I am of the opinion that.' Formal opinion opener. Literally 'I am of opinion that.' Triggers verb-final word order in the clause."},
];

let total = 0;
const LANG_ROOT = 'src/data/dutch-v2';
for (const file of fs.readdirSync(LANG_ROOT)) {
  if (!file.endsWith('.js')) continue;
  const p = `${LANG_ROOT}/${file}`;
  let text = fs.readFileSync(p, 'utf8');
  let count = 0;
  for (const {trg, prefix, fact} of CASES) {
    const escTrg = trg.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const escPrefix = prefix.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const re = new RegExp(`(\\{type:"teach",trg:"${escTrg}"[\\s\\S]*?funFact:")${escPrefix}[^"]*(")`, 'g');
    if (!re.test(text)) continue;
    re.lastIndex = 0;
    text = text.replace(re, (_, pre, post) => { count++; return pre + fact + post; });
  }
  if (count > 0) {
    console.log(`${p}: ${count}`);
    total += count;
    if (apply) fs.writeFileSync(p, text);
  }
}
console.log(`\nTotal: ${total}`);
if (!apply) console.log('Dry run.');
