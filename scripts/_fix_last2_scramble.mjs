#!/usr/bin/env node
// Last 2 cross-trg scramble cases.

import fs from 'node:fs';

const apply = process.argv.includes('--apply');

const cases = [
  {root: 'src/data/dutch-v2', trg: 'ik zou het op prijs stellen als', prefix: "'I am of the opinion that", fact: "'I would appreciate it if.' Ultra-polite formal request. Conditional zou + op prijs stellen (to value) + als (if). Business-letter register."},
  {root: 'src/data/french-v2', trg: 'le zoo', prefix: 'Same word in both languages', fact: "The zoo. Short for 'jardin zoologique.' English borrowed the same abbreviation. Animal-park vocabulary."},
];

let total = 0;
for (const {root, trg, prefix, fact} of cases) {
  for (const file of fs.readdirSync(root)) {
    if (!file.endsWith('.js')) continue;
    const p = `${root}/${file}`;
    let text = fs.readFileSync(p, 'utf8');
    const escTrg = trg.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const escPrefix = prefix.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const re = new RegExp(`(\\{type:"teach",(?:kind:"[^"]*",)?(?:trg|nl):"${escTrg}"[\\s\\S]*?funFact:")${escPrefix}[^"]*(")`, 'g');
    if (!re.test(text)) continue;
    re.lastIndex = 0;
    let count = 0;
    text = text.replace(re, (_, pre, post) => { count++; return pre + fact + post; });
    if (count > 0) {
      console.log(`${p}: ${count}`);
      total += count;
      if (apply) fs.writeFileSync(p, text);
    }
  }
}
console.log(`\nTotal: ${total}`);
if (!apply) console.log('Dry run.');
