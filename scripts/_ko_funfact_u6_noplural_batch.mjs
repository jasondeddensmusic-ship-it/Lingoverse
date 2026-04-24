#!/usr/bin/env node
// 23 Korean u6 no-plural filler — directions, locations, nature, frequency.

import fs from 'node:fs';

const apply = process.argv.includes('--apply');
const GENERIC = "Korean nouns don't have plural forms or articles. Context and particles do the job.";

const FACTS = {
  '왼쪽': "Left. 왼 (left) + 쪽 (side). 왼 from Old Korean for 'incorrect/weak' (in contrast to 오른 = right/correct). Left-handedness historically carried superstition.",
  '오른쪽': "Right. 오른 (right) + 쪽 (side). Connected to 옳다 (to be right/correct). Korean equates the right side with correctness — same metaphor across many languages.",
  '유턴': "U-turn. English loan, written in hangul. Pronounced 유턴 (yu-teon). Driving vocabulary in Korea is heavily English-borrowed: 핸들 (handle/steering), 백미러 (rear-view mirror).",
  '근처': "Nearby / in the vicinity. Sino-Korean 近處. Compound: 근 (near) + 처 (place). Standard location word, neutral register. More casual: 가까이.",
  '역': "Station (subway/train). Sino-Korean 驛. Appears in station names: 서울역, 홍대입구역. Always suffixed to the station name.",
  '위': "Above / on top of. Native Korean. Takes 에 for location: 책상 위에 (on the desk). Positional nouns always take locative 에.",
  '옆': "Beside / next to. Native Korean. 나 옆에 (beside me). One syllable — compact, unique to Korean.",
  '밖': "Outside. Native Korean. 집 밖에 (outside the house). Also means 'besides / other than' in compound expressions: 그것밖에 없어요 (there's nothing besides that).",
  '아래 / 밑': "Below / under. Two synonyms with subtle differences. 아래 is more literal/spatial (under the desk), 밑 can be figurative (under pressure, under someone's leadership).",
  '앞': "Front / in front of. Native Korean. 학교 앞에서 (in front of the school). Also metaphorical: 앞으로 (from now on, forward).",
  '뒤': "Behind / back. Native Korean. Paired with 앞 for spatial contrast. 뒤에서 말하다 (to speak behind someone's back) — universal metaphor.",
  '바람': "Wind. Native Korean. Also means 'wish/hope' in different context: 바람이 있다 (to have a wish). Two homophones distinguished by context.",
  '산': "Mountain. Sino-Korean 山. Korea is ~70% mountainous. Mountains are central to Korean identity: 설악산, 지리산, 한라산. Most have stories and hiking trails.",
  '바다': "Sea / ocean. Native Korean. Contrast Sino-Korean 해양 (oceanography). Korea has 3 coastlines: East Sea, Yellow Sea, South Sea — each with distinct character.",
  '동 / 동쪽': "East. 동 is Sino-Korean 東; 동쪽 adds native 쪽 (direction). Used in place names: 동대문 (East Great Gate), 동해 (East Sea).",
  '서 / 서쪽': "West. Sino-Korean 西. Seen in: 서울 (capital, literally 'western capital' in old name), 서대문, 서해 (West/Yellow Sea).",
  '남 / 남쪽': "South. Sino-Korean 南. 남대문 (South Great Gate), 남한 (South Korea), 남해 (South Sea). Also appears in names (Nam Junhyuk, 남 as surname).",
  '북 / 북쪽': "North. Sino-Korean 北. 북한 (North Korea), 북대문. Note: in 서울, 북 appears in district names. Compass points carry cultural weight beyond geography.",
  '가끔': "Sometimes. Native Korean frequency adverb. Middle of the scale: 항상 (always) > 자주 (often) > 가끔 (sometimes) > 별로 (not really) > 전혀 (never).",
  '별로': "Not really / not particularly. Negative intensifier, only used with negative verbs: 별로 안 좋아요 (not particularly good). Cannot be used affirmatively.",
  '전혀': "Not at all / absolutely not. Strong negative intensifier. 전혀 모르겠어요 (I have no idea at all). Always paired with negative verbs.",
  '혼자': "Alone. Native Korean adverb. 혼자 가요 (I go alone). Contrast with 같이 (together). Cultural importance: collectivism means solo activities often noted.",
  '얼마나': "How much / how long. Question word. Different from 얼마 (how much, for prices). 얼마나 is for degree, duration, extent: 얼마나 기다렸어요? (how long did you wait?).",
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
