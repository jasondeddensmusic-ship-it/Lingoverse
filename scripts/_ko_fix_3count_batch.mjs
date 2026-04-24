#!/usr/bin/env node
// Fix Korean 3-count 'Use 하다 (accessory verb)' generic on accessories.

import fs from 'node:fs';

const apply = process.argv.includes('--apply');

const CASES = [
  {trg: '목도리', prefix: 'Use 하다 (accessory verb)', fact: "Scarf / muffler. Native Korean (목 = neck). Accessories use 하다 as wearing verb: 목도리를 하다 (wear a scarf)."},
  {trg: '벨트 / 허리띠', prefix: 'Use 하다 (accessory verb)', fact: "Belt. 벨트 English loan; 허리띠 native Korean (허리 = waist + 띠 = band). Accessories use 하다: 벨트를 하다."},
  {trg: '넥타이', prefix: 'Use 하다 (accessory verb)', fact: "Necktie / tie. English loanword. Accessory uses 하다: 넥타이를 하다 (wear a tie). Business attire vocabulary."},
];

let total = 0;
const LANG_ROOT = 'src/data/korean-v2';
for (const file of fs.readdirSync(LANG_ROOT)) {
  if (!file.endsWith('.js')) continue;
  const p = `${LANG_ROOT}/${file}`;
  let text = fs.readFileSync(p, 'utf8');
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
    console.log(`${p}: ${count}`);
    total += count;
    if (apply) fs.writeFileSync(p, text);
  }
}
console.log(`\nTotal: ${total}`);
if (!apply) console.log('Dry run.');
