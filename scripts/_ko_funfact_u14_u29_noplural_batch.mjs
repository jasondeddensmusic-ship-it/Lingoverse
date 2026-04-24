#!/usr/bin/env node
// 5 Korean cards tail of no-plural variant. ZEROES variant.

import fs from 'node:fs';

const apply = process.argv.includes('--apply');
const GENERIC = "Korean nouns don't have plural forms or articles. Context and particles do the job.";

const FACTS = {
  '1차': "'First round' (of socializing). Korean social culture has multiple 차 (rounds): 1차 (dinner), 2차 (drinks), 3차 (karaoke). Colleagues often cycle through all three rounds on a night out.",
  '가을': "Autumn / fall. Native Korean. Korea's most-celebrated season culturally: 추석 (Mid-Autumn festival), foliage tourism. Idiom: 가을 하늘 (autumn sky) symbolizes clarity and high emotion.",
  '겨울': "Winter. Native Korean. Korean winters are sharp and dry. Food vocabulary: 김장 (kimchi-making season, late November), 겨울 옷 (winter clothes). Central to Korean calendar.",
  '커녕': "Far from / let alone. Particle attaching to nouns or to verb-기 forms. 돈커녕 시간도 없어요 (let alone money, I don't even have time). Emphatic negation escalation.",
  '비격식': "Informal / casual register. Sino-Korean 非格式 (non-formal). Linguistics/grammar meta-term. Distinguishes 격식체 (formal speech) from 비격식체 (casual). Explicitly taught in Korean grammar.",
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
    const re = new RegExp(`(\\{type:"teach",(?:kind:"[^"]*",)?nl:"${escTrg}"[\\s\\S]*?funFact:")${GENERIC.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(")`, 'g');
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
