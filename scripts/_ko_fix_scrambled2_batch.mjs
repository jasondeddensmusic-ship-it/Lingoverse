#!/usr/bin/env node
// Fix 2 more Korean scramble residue cards.

import fs from 'node:fs';

const apply = process.argv.includes('--apply');

const CASES = [
  {trg: '색 / 색깔', prefix: 'Bird. One syllable', fact: "Color. 색 is Sino-Korean (色), 색깔 is the native Korean compound form. Both work; 색깔 is more casual, 색 is more technical/formal."},
  {trg: '꽃', prefix: 'Sea / ocean. Native Korean', fact: "Flower. Native Korean. Compound suffix: 벚꽃 (cherry blossom), 진달래꽃 (azalea). Cherry blossom season (3-4월) is a cultural festival."},
];

let total = 0;
const LANG_ROOT = 'src/data/korean-v2';
for (const file of fs.readdirSync(LANG_ROOT)) {
  if (!file.endsWith('.js')) continue;
  const path = `${LANG_ROOT}/${file}`;
  let text = fs.readFileSync(path, 'utf8');
  let count = 0;
  for (const {trg, prefix, fact} of CASES) {
    const escTrg = trg.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const escPrefix = prefix.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const re = new RegExp(`(\\{type:"teach",(?:kind:"[^"]*",)?nl:"${escTrg}"[\\s\\S]*?funFact:")${escPrefix}[^"]*(")`, 'g');
    if (!re.test(text)) continue;
    re.lastIndex = 0;
    text = text.replace(re, (_, pre, post) => { count++; return pre + fact + post; });
  }
  if (count > 0) {
    console.log(`${path}: ${count}`);
    total += count;
    if (apply) fs.writeFileSync(path, text);
  }
}
console.log(`\nTotal: ${total}`);
if (!apply) console.log('Dry run.');
