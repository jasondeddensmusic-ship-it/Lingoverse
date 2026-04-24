#!/usr/bin/env node
// 8 Korean tail same-verb-form. Variant ZEROES.

import fs from 'node:fs';

const apply = process.argv.includes('--apply');
const GENERIC_FILE_FORM = 'Korean verbs don\'t change for person or number. \\"I go\\" and \\"they go\\" use the same verb form.';

const FACTS = {
  '드리다': "To give (humble). Humble form of 주다. Used when giving TO someone deserving respect. 선물을 드리다 (to give a gift, to someone above you). Essential in honorific speech.",
  '기쁘다': "To be happy, glad. 으-irregular: 기쁘 + 어요 → 기뻐요. Pair with 슬프다 (sad) — both 으-irregulars. Emotional descriptive verbs often pair systematically.",
  '뉴스': "News. English loanword. Written in hangul with sound-approximation. 뉴스를 보다 (to watch news). Spoken media vocabulary is heavily English-borrowed.",
  '웃기다': "To make laugh. Causative of 웃다 (to laugh). The -기- causative suffix: 웃다 → 웃기다. Common pattern: 입다 → 입히다 (to make wear), 먹다 → 먹이다 (to feed).",
  '요리하다': "To cook. Sino-Korean 料理 (ingredients-manage) + 하다. 요리 also means 'cuisine.' One of the most productive 하다 verbs in Korean.",
  '관계': "Relationship, relation. Sino-Korean 關係 (connection-relation). 관계있다 (to be related), 관계없다 (irrelevant). Used in business, personal, legal contexts.",
  '사귀다': "To date, to go out with. Native Korean. 사귀는 사이 (dating couple). Implies a committed relationship, not just casual meeting. Cultural marker of relationship-status.",
  '속담': "Proverb / saying. Sino-Korean 俗談 (common-talk). Korean has thousands of proverbs, many four-character Sino-Korean phrases: 호랑이도 제 말 하면 온다 (speak of the tiger and it appears).",
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
    const re = new RegExp(`(\\{type:"teach",(?:kind:"[^"]*",)?nl:"${escTrg}"[\\s\\S]*?funFact:")${GENERIC_FILE_FORM.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(")`, 'g');
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
