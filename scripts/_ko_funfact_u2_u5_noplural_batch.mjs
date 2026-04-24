#!/usr/bin/env node
// 22 Korean cards u2-u5 using no-plural filler.

import fs from 'node:fs';

const apply = process.argv.includes('--apply');
const GENERIC = "Korean nouns don't have plural forms or articles. Context and particles do the job.";

const FACTS = {
  // u2
  '정말요?': "'Really?' Casual-polite. 정말 (truly) + 요 (polite marker). Used for mild surprise. Stronger: 진짜요? (seriously?). Korean has rich intensifiers — tone matters.",
  '왜': "Why. Question word. Often doubles as exclamation 'Why?!' in emotional speech. Intonation distinguishes: rising tone = question, flat = mild confusion, sharp = reproach.",

  // u3
  '백': "100 in Sino-Korean (百). Counting above 100 always uses Sino-Korean, never native Korean numbers. 200 = 이백, 500 = 오백, 1000 = 천. Sino-Korean dominates math and money.",
  '새': "Bird. One syllable, native Korean. Different from 새 meaning 'new' — homophones distinguished only by context and article placement.",
  '분': "Minute(s). From Sino-Korean 分. Also means 'portion' in compounds. Time-counting ALWAYS uses Sino-Korean numbers: 오 분 (5 minutes), never 다섯 분.",
  '원': "Won, Korean currency (₩). Sino-Korean 圓. Also means 'circle, perfect.' Used for all money amounts with Sino-Korean numbers: 천 원 (1,000 won), 만 원 (10,000 won).",
  '거스름돈': "Change (money back). Compound: 거스르다 (to oppose/go against) + 돈 (money). Literally 'money going against the flow' — money coming back to you after payment.",
  '축하해요': "'Congratulations!' From 축하하다 (to congratulate). Sino-Korean root 祝賀. Used for birthdays, achievements, milestones. More formal: 축하합니다.",
  '이월': "February. Sino-Korean: 二月 (second month). All Korean months are Sino-Korean 1-12 + 월. Number + 월 = month. Simple system.",
  '삼월': "March. 三月 (third month). Note 삼 (three, Sino-Korean) not 셋 (three, native). Native Korean numbers don't appear in month names.",
  '오월': "May. 五月. May is celebrated in Korea as 가정의 달 (Month of the Family) — full of family holidays: Children's Day, Parents' Day, Teachers' Day.",
  '칠월': "July. 七月. Rainy season in Korea (장마). Many Korean summer vocab tied to this month: 더위 (heat), 장마 (monsoon rain), 에어컨 (air conditioner).",
  '팔월': "August. 八月. 광복절 (Liberation Day, Aug 15) — independence from Japanese colonization in 1945. Cultural anchor date.",
  '십일월': "November. 十一月. Compound: 십 (10) + 일 (1) + 월 (month). Korean transparently builds 'eleventh month' from its components.",
  '십이월': "December. 十二月. Korean winter is sharp: 동지 (winter solstice) falls in late December. Tradition: eat 팥죽 (red bean porridge) to ward off evil spirits.",

  // u4
  '찌개': "Stew. Thicker than 국 (soup), less liquid. Shared from one communal pot with long spoons. Common: 김치찌개 (kimchi stew), 된장찌개 (soybean paste stew), 순두부찌개 (soft tofu stew).",
  '신선해요': "'It's fresh.' From 신선하다 (to be fresh). Sino-Korean 新鮮. Used in cooking, air quality, and metaphorically for ideas: 신선한 아이디어 (a fresh idea).",
  '얼마예요?': "'How much?' 얼마 (how much) + 이에요 (is). Standard shopping question. Alternative: 얼마입니까? (formal). Most essential market vocabulary.",

  // u5
  '남편': "Husband. From Sino-Korean 男便 (male side). Contrasts with 아내 (native Korean for wife) or 와이프 (loanword). Marriage vocabulary mixes Sino-Korean and native sources.",
  '색 / 색깔': "Color. 색 is Sino-Korean (色), 색깔 is the native Korean compound-like form. Both work; 색깔 is more casual, 색 is more technical/formal.",
  '초록색 / 초록': "Green. 초록 is Sino-Korean 草綠 (grass-green). Color words in Korean mix: some are native (빨간 — red), some Sino-Korean (초록), some descriptive (하늘색 — sky-blue).",
  '보라색': "Purple. Native Korean 보라 + 색 (color). Purple is culturally associated with royalty and artistic temperament — 보라 color code goes back to Goryeo/Joseon court robes.",
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
