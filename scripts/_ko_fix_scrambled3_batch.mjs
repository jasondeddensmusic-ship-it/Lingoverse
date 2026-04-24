#!/usr/bin/env node
// Fix 3 more Korean scramble residue cards.

import fs from 'node:fs';

const apply = process.argv.includes('--apply');

const CASES = [
  {trg: '타다', prefix: 'Subway. Sino-Korean', fact: "To ride / take (transport). Native Korean verb. 버스를 타다 (take the bus), 택시를 타다 (take a taxi). Core transit vocabulary."},
  {trg: '강', prefix: 'Mountain. Sino-Korean', fact: "River. Sino-Korean 江. Korea's major rivers: 한강 (Han River), 낙동강 (Nakdong). 강 appears in place names throughout the peninsula."},
  {trg: '노랗다', prefix: 'Subway. Sino-Korean', fact: "To be yellow. ㅎ-irregular color verb. 노랗 + 아요 → 노래요. Irregular contraction like 빨갛다→빨개요."},
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
