#!/usr/bin/env node
// 34 Korean set-phrases variant. ZEROES it.

import fs from 'node:fs';

const apply = process.argv.includes('--apply');
const GENERIC = 'Set phrases are the fastest way to sound natural. Koreans use fixed expressions constantly.';

const FACTS = {
  // u3
  '칠, 팔, 구, 십': "7, 8, 9, 10 (Sino-Korean). Used for time, money, phone numbers, most counted nouns. Native Korean counterparts (일곱, 여덟, 아홉, 열) used with specific counters.",
  '몇 시예요?': "'What time is it?' 몇 = how many (with counters) + 시 (hour, Sino-Korean 時). Uses native Korean numbers for hours: 한 시 (1 o'clock), not 일 시.",
  '오전 / 오후': "AM / PM. Sino-Korean 午前 (before noon) / 午後 (after noon). Note: comes BEFORE the time expression in Korean: 오전 10시, not 10시 오전.",
  '무슨 요일이에요?': "'What day is it?' 무슨 (what/which) + 요일 (day of week). 요일 from Sino-Korean 曜日. Days: 월요일 (Mon), 화요일 (Tue), 수요일 (Wed), 목요일 (Thu), 금요일 (Fri), 토요일 (Sat), 일요일 (Sun).",

  // u4
  '주세요': "'Please give me.' V+아/어 주세요 is a formula: add to any verb stem to make polite request. 도와주세요 (please help), 기다려 주세요 (please wait).",
  '여기요! / 저기요!': "'Excuse me!' (getting staff attention). 여기 (here) / 저기 (over there) + 요 (polite marker). Restaurant and shop staple — calling a waiter without being rude.",
  '좀 더': "'A little more.' 좀 (a little, softener) + 더 (more). 좀 more informal than 조금 (a little, neutral). Very common request-softener.",

  // u5
  '제 / 내': "My (formal / casual). 제 for polite speech, 내 for casual. Both = my. 제 이름은 (my name is, polite), 내 친구 (my friend, casual). Register-matched pronouns.",
  '새': "New (modifier, u5 context). Prenominal modifier form. 새 + noun: 새 책 (new book), 새 친구 (new friend). Note: full form 새로운 takes full adjective syntax.",
  '큰 집': "Big house. Modifier form 큰 (big) derived from 크다. Korean descriptive verbs modify nouns by ending in -ㄴ/은: 크다 → 큰, 작다 → 작은.",
  '작은 강아지': "Small puppy. 작다 → 작은. Stem ending in consonant takes 은; vowel stems take ㄴ directly. 강아지 (puppy) diminutive of 개 (dog).",
  '예쁜 꽃': "Pretty flower. 예쁘다 → 예쁜 (irregular — 으 drops). Modifier forms of 으-irregular verbs contract: 바쁘다 → 바쁜, 기쁘다 → 기쁜.",
  '맛있는 음식': "Delicious food. 맛있다 → 맛있는 (use -는 modifier because 맛있다 contains 있다, which uses -는 form). 있다/없다 take -는 for modifying, unlike other descriptive verbs.",

  // u6
  '어디에 있어요?': "'Where is it?' 어디 (where) + 에 (location particle) + 있어요 (to be, for location). Contrast 이에요/예요 (to be, identity). Korean splits location and identity into separate copula verbs.",
  '안 vs 못': "Won't (choice) vs can't (inability). Fundamental negation distinction. 안 해요 (not doing by choice) vs 못 해요 (unable to do). Korean grammaticalizes intent vs ability.",
  '그런데 / 근데': "But / by the way. 그런데 full form, 근데 casual contraction. Sentence-starting connector — introduces contrast or topic shift.",
  '그러면 / 그럼': "Then / in that case. 그러면 full, 그럼 casual. Conditional-result connector. 비가 오면 그럼 집에 있어요 (if it rains, then I stay home).",

  // u7
  '좋아하는 것': "Thing (I) like. 좋아하다 → 좋아하는 (action-verb present modifier ending in -는). 것 (thing) is the most abstract noun in Korean, used for any 'thing.'",

  // u8
  '수영할 수 있어요': "'I can swim.' -(으)ㄹ 수 있다 (can do) pattern. 수 (way, means) + 있다 (exist). Literally 'there exists a way to swim.' Classic Korean ability structure.",
  '운전할 수 있어요': "'I can drive.' Same -(으)ㄹ 수 있다 pattern. Negative: 운전할 수 없어요 (I can't drive). Swap 있다 for 없다 to negate ability.",
  '걱정하지 마세요': "'Don't worry.' -지 마세요 is polite negative command. 걱정하다 (to worry) + -지 마세요. Reassurance formula, used often in Korean hospitality.",
  '늦지 마세요': "'Don't be late.' Same -지 마세요 pattern. 늦다 (to be late). Common farewell: 늦지 마세요, 내일 봐요 (don't be late, see you tomorrow).",
  '얼마나 걸려요?': "'How long does it take?' 얼마나 (how much/how long) + 걸리다 (to take time). Transportation-standard question: 지하철로 얼마나 걸려요? (how long by subway?).",

  // u9
  '감사합니다 / 고마워요': "Thank you (formal / casual polite). 감사합니다 Sino-Korean 感謝, formal. 고마워요 native Korean, casual-polite. Register-match with speaker relationship.",
  '시간 있어요?': "'Do you have time?' 시간 (time) + 있다 (to have/exist). Literally 'is there time?' Common way to ask if someone is free for an activity.",
  '밥을 먹고 나서': "'After eating.' -고 나서 (after doing). 먹다 + 고 나서. Pattern: V+고 나서 means 'having finished V-ing.' Sequential narration structure.",

  // u11
  '체크인한 후에': "'After checking in.' -(으)ㄴ 후에 (after doing). 체크인하다 → 체크인한 후에. 후 (Sino-Korean 後, 'after') + 에 (time particle).",
  '방이 있어요?': "'Do you have a room?' 방 (room) + 이 (subject particle) + 있다 (to exist). Hotel formula. Response: 네, 있어요 (yes we do) or 아니요, 없어요 (no we don't).",
  '체크인/체크아웃': "Check-in / check-out. English loanwords in Korean script. Hotel-industry vocabulary is heavily English-borrowed — true globally since hospitality standardized early.",
  '길을 잃었어요': "'I'm lost.' Literally 'I lost the road.' 길 (road) + 을 + 잃다 (to lose). Korean expresses lost-ness as having lost the path — active-voice, not passive.",
  '여기서 얼마나 걸려요?': "'How long does it take from here?' 여기 (here) + 서 (from-contracted 에서). Travel-essential phrase — taxis, public transit, directions.",
  '와이파이가 안 돼요': "'The WiFi doesn't work.' 와이파이 (WiFi, English loan) + 안 되다 (to not function). 되다 = 'to become/work/function' — central copula for 'working' state.",

  // u12
  '등산한 적이 있어요': "'I have gone hiking before.' -(으)ㄴ 적이 있다 experience pattern. 등산 (hiking, Sino-Korean 登山) + 하다 + 적이 있다. Hiking is culturally central in Korea.",

  // u14
  '건강하려면': "'If you want to be healthy.' 건강하다 (to be healthy) + -(으)려면 (if you want to). Pattern: advisory-conditional. Common in health articles.",
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
