#!/usr/bin/env node
// Fix 3 Korean cards that got scrambled with 그래서's funFact.

import fs from 'node:fs';

const apply = process.argv.includes('--apply');

// The polluted generic (only 그래서 should have this).
const POLLUTED_PREFIX = "So / therefore. Sentence-connecting conjunction";

const FACTS = {
  '어제': "Yesterday (reinforced u10-13 context). Native Korean. Always pairs with past tense in Korean. Time adverb that triggers preterite morphology.",
  '그런데': "But, by the way, however. Conjunction. Starts a sentence, introduces contrast or topic-shift. Different function from 그래서 (result-marker).",
  '문을 열자마자': "'As soon as I opened the door.' -자마자 ending = as soon as / the moment. Triggers immediate-past action pattern.",
};

let total = 0;
const LANG_ROOT = 'src/data/korean-v2';
for (const file of fs.readdirSync(LANG_ROOT)) {
  if (!file.endsWith('.js')) continue;
  const path = `${LANG_ROOT}/${file}`;
  let text = fs.readFileSync(path, 'utf8');
  let count = 0;
  for (const [trg, newFact] of Object.entries(FACTS)) {
    const escTrg = trg.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const escPrefix = POLLUTED_PREFIX.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const re = new RegExp(`(\\{type:"teach",(?:kind:"[^"]*",)?nl:"${escTrg}"[\\s\\S]*?funFact:")${escPrefix}[^"]*(")`, 'g');
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
