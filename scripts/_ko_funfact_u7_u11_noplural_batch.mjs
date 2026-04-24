#!/usr/bin/env node
// 35 Korean u7-u11 no-plural. Body parts, clothing, daily life.

import fs from 'node:fs';

const apply = process.argv.includes('--apply');
const GENERIC = "Korean nouns don't have plural forms or articles. Context and particles do the job.";

const FACTS = {
  // u7
  '재미있었어요': "'It was fun/interesting.' Past of 재미있다 (to be fun). 재미 (fun, noun) + 있다 (to have/exist). Literally 'there was fun.' Korean expresses fun as possession.",
  '같이': "Together. Native Korean adverb. Contrasts with 혼자 (alone). Also functions as 'like' in comparison: 어린이같이 (like a child). Context disambiguates.",

  // u8 — body parts + health
  '입': "Mouth. Native Korean, one syllable. Used in idioms: 입이 가볍다 (light-mouthed = gossipy), 입이 짧다 (short-mouthed = picky eater).",
  '귀': "Ear. Native Korean. Idiom: 귀가 얇다 (thin-eared = easily swayed). 귀에 익다 (become familiar to the ear).",
  '어깨': "Shoulder. Native Korean. Culturally significant: 어깨가 무겁다 (shoulders are heavy = carrying responsibility). Korean bow-culture often references shoulder posture.",
  '등': "Back (body). Native Korean. Homophone with 등 (et cetera / and such). Context distinguishes. Idiom: 등을 돌리다 (to turn one's back = to betray or reject).",
  '얼굴': "Face. Native Korean. In social culture: 얼굴이 두껍다 (thick-faced = shameless), 얼굴 마담 (face-landlady = prominent public figure). Face carries social meaning.",
  '무릎': "Knee. Native Korean. 무릎을 꿇다 (to kneel) is culturally potent — used in apologies, prayers, or formal deference to elders.",
  '가슴': "Chest / breast. Native Korean. Emotional locus: 가슴이 아프다 (my heart aches, literally 'chest hurts'). Koreans express heartbreak as chest pain.",
  '기침': "Cough. Native Korean. 기침하다 (to cough). Cold-related vocabulary cluster: 기침, 콧물 (runny nose), 열 (fever), 목이 아프다 (sore throat).",
  '약': "Medicine. Sino-Korean 藥. Compounds: 약국 (pharmacy), 한약 (traditional Korean medicine), 감기약 (cold medicine). Rich pharmaceutical vocabulary.",
  '증상': "Symptoms. Sino-Korean 症狀. Medical term, used when describing what you feel to a doctor. Formal register — spoken Korean often substitutes 몸이 안 좋다 (body feels off).",
  '부터': "From (starting point). Particle that attaches directly to nouns. 월요일부터 (from Monday), 지금부터 (from now). Pairs with 까지 (until): 1시부터 2시까지.",
  '새': "Bird (again in u8). Note: in this unit it appears in animal-category context. 새 has MANY homophones: 새 (new), 새 (bird), 새 (between — archaic). Context-only disambiguation.",
  '소': "Cow. Native Korean. Central in Korean agriculture and cuisine. Beef (소고기) is high-status food. Cow-related idioms: 소 잃고 외양간 고친다 (fix the stable after losing the cow).",

  // u9
  '다음 주': "Next week. 다음 (next) + 주 (week, Sino-Korean 週). Compare: 이번 주 (this week), 지난 주 (last week). Systematic time reference.",
  '다음 달': "Next month. 다음 (next) + 달 (month, native Korean). Korean uses native 달 for 'month' in 이번 달/다음 달, but Sino-Korean 월 in month names (1월, 2월).",
  '곧': "Soon. Native Korean adverb. One syllable, punchy. 곧 올 거예요 (I'll be there soon). Indicates imminence.",
  '표': "Ticket. Sino-Korean 票. Also means 'vote' and 'list.' Compounds: 버스표 (bus ticket), 기차표 (train ticket), 투표 (to vote).",

  // u10
  '방': "Room. Sino-Korean 房. Compound suffix: 노래방 (karaoke room), PC방 (internet cafe), 찜질방 (sauna/jjimjilbang). Productive in modern Korean culture.",
  '얼마예요?': "'How much is it?' Note: identical word as u4 but re-used in transport/purchase context. Korean vocabulary builds through recycling across situations.",
  '배달': "Delivery. Sino-Korean 配達. Korea is famous for delivery culture: food arrives in 30 min, supermarkets deliver, even fresh rice cakes get delivered. 배달 is daily life.",
  '세탁소': "Laundromat / dry cleaners. Sino-Korean 洗濯所 (washing place). -소 is a place suffix. Small neighborhood businesses, often family-run.",
  '벌써': "Already (time flew). Surprise at how fast time passed. 벌써 밤이에요 (it's already night). Emotional shading differs from 이미 (neutral already).",
  '이미': "Already (completed). Neutral completion marker. 이미 했어요 (I've already done it). Matter-of-fact, no emotional shading.",
  '옷': "Clothes / clothing. Native Korean, one syllable. Collective noun — covers all clothing. Compound: 옷장 (closet), 옷가게 (clothing store).",
  '치마': "Skirt. Native Korean. Korean traditional skirt: 한복 치마 with multi-layer silk, worn with 저고리 (jacket). Fashion vocabulary mixes native + English loans.",
  '바지': "Pants / trousers. Native Korean. 청바지 (jeans, literally 'blue pants'), 반바지 (shorts, literally 'half pants'). Productive compound element.",
  '-기': "Verb becomes noun. Nominalization suffix attached to verb stems: 가기 (going), 먹기 (eating). Creates noun-phrases from verbs — one of Korean's core grammar tools.",
  '바람': "Wind (in u10 context). Weather. Idiom recycled from u6: native Korean. Weather conditions: 바람이 불다 (wind blows), 바람이 세다 (wind is strong).",
  '구름': "Cloud. Native Korean. Poetically significant in Korean literature. Weather vocab: 구름이 끼다 (clouds gather), 구름 한 점 없다 (not a single cloud).",
  '강': "River. Sino-Korean 江. Korea's major rivers: 한강 (Han River), 낙동강, 대동강. 강 appears in place names throughout the peninsula.",
  '꽃': "Flower. Native Korean. Compound suffix: 벚꽃 (cherry blossom), 진달래꽃 (azalea). Cherry blossom season (3-4월) is a cultural festival.",

  // u11
  '짐': "Luggage / baggage. Native Korean. Also figurative: 마음의 짐 (burden on the mind). Short, native, emotionally versatile.",
  '표': "Ticket (in u11 transport context). Same as u9, reinforced. 편도표 (one-way ticket), 왕복표 (round-trip ticket).",
  '바다': "Sea / ocean (u11 travel context). Reinforces u6. 바다가 보여요 (I can see the sea). Korean beaches: 해운대, 경포대, 강문.",
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
