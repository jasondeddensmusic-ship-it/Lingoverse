#!/usr/bin/env node
// Fix French 3-count generic residue on differentiable cards.

import fs from 'node:fs';

const apply = process.argv.includes('--apply');

const CASES = [
  {trg: 'onze, douze', prefix: 'French numbers are mostly regular', fact: "11, 12. From Latin 'undecim, duodecim.' Compact single-syllable forms, not 'dix-un/dix-deux.'"},
  {trg: 'Quelle heure est-il?', prefix: 'French numbers are mostly regular', fact: "What time is it? Quelle (fem) agrees with heure (fem). Standard time-question."},
  {trg: 'cent', prefix: 'French numbers are mostly regular', fact: "One hundred. Silent t. Latin 'centum.' Invariable when followed by another number: deux cents mais deux cent un."},
  {trg: 'deux cents', prefix: 'French numbers are mostly regular', fact: "Two hundred. Note -s on cents when it's the last number. deux cent un (201) drops the -s."},
  {trg: "C'est la raison pour laquelle je suis ici.", prefix: 'French prepositions often contract', fact: "That's the reason I'm here. Pour laquelle = for which (feminine agreement with raison). Formal relative."},
  {trg: 'Dans le cadre de', prefix: 'French prepositions often contract', fact: "Within the framework of / As part of. Cadre = frame. Business and academic formal register."},
];

let total = 0;
const LANG_ROOT = 'src/data/french-v2';
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
