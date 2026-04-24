#!/usr/bin/env node
// 34 Korean cards u4-u7 using particles filler. Mostly verb conjugations + irregulars.

import fs from 'node:fs';

const apply = process.argv.includes('--apply');
const GENERIC = 'Korean particles attach after nouns to mark their role. No equivalent in English.';

const FACTS = {
  // u4 — shopping
  '과일': "Fruit. Sino-Korean word from 果 (fruit) + 實 (reality). Sino-Korean vocabulary makes up 60-70% of Korean and is written in hanja characters in formal texts.",
  '사다 → 사요': "To buy. Verb 사다 has a vowel-ending stem (사-), so it takes 아요 which contracts to 요. Contraction rule: vowel stem + 아/어 collapses.",
  '비싸다 → 비싸요': "Expensive. Descriptive verb (adjective). Korean adjectives conjugate like verbs — no separate 'to be.' 비싸요 literally 'is expensive.'",
  '싸다 → 싸요': "Cheap. Pair with 비싸다. Similar conjugation pattern. Both are descriptive verbs (형용사), a grammatical category Korean shares with Japanese but not English.",

  // u5 — descriptive verbs / irregular conjugations
  '크다 → 커요': "To be big. 으-irregular: the 으 in 크- drops when conjugated. 크 + 어요 → 커요. Common pattern in 쓰다, 크다, 뜨다 stems.",
  '귀엽다 → 귀여워요': "Cute. ㅂ-irregular: the ㅂ in 귀엽- changes to 우. 귀엽 + 어요 → 귀여워요. One of Korean's most common irregular patterns.",
  '나쁘다 → 나빠요': "Bad. 으-irregular like 크다. 나쁘 drops 으, adds 아요. Nuance: 나쁘다 = morally bad or unpleasant, not just generally bad.",
  '느리다 → 느려요': "Slow. Regular conjugation with 이 → 여 vowel contraction. 느리 + 어요 → 느려요. Contrast with 빠르다 (fast).",
  '빠르다 → 빨라요': "Fast. 르-irregular: 르 becomes ㄹ + 라. 빠르 + 아요 → 빨라요. Same pattern in 다르다, 모르다, 부르다.",
  '어렵다 → 어려워요': "Difficult. ㅂ-irregular. 어렵 + 어요 → 어려워요. Essential classroom vocabulary. Opposite: 쉽다 (easy).",
  '쉽다 → 쉬워요': "Easy. ㅂ-irregular. 쉽 + 어요 → 쉬워요. Same ㅂ→우 transformation. Pairs with 어렵다 (difficult) across the curriculum.",
  '바쁘다 → 바빠요': "Busy. 으-irregular. 바쁘 drops 으 and adds 아요. Describes being occupied with activity — schedule, workload, life circumstances.",
  '슬프다 → 슬퍼요': "Sad. 으-irregular. 슬프 + 어요 → 슬퍼요. Stronger than 우울하다 (depressed/gloomy). Used for active grief or sadness.",
  '다르다 → 달라요': "Different. 르-irregular like 빠르다. 다르 + 아요 → 달라요. Very common comparison word.",
  '가깝다 → 가까워요': "Close / near. ㅂ-irregular. 가깝 + 아요 → 가까워요. Opposite of 멀다 (far). Used for physical and abstract closeness.",
  '무섭다 → 무서워요': "Scary / scared. ㅂ-irregular. Dual use: a horror movie is 무서워요 (scary), and a person watching can also say 무서워요 (I'm scared). Context disambiguates.",
  '은 / 는': "TOPIC marker. 은 after consonant-ending nouns (책은), 는 after vowel-ending (저는). Marks what the sentence is ABOUT, distinct from the grammatical subject (이/가).",

  // u6 — conjunction particles / past tense setup
  '(이)랑': "'And / with' (casual). (이) appears after consonant-ending nouns (친구랑 / 책이랑). Casual equivalent of formal 와/과. Feels conversational and warm.",
  '과거 시제 미리보기': "Past tense preview. Korean past tense is formed with -았/었 infix inserted between stem and ending. Covered systematically in later units.",
  '쓰다 → 써요 (write/use)': "To write / to use (homophone). 으-irregular. Both senses use the same verb — context decides. 편지를 써요 (I write a letter) vs 컴퓨터를 써요 (I use the computer).",
  '주다 → 줘요': "To give. Regular verb, stem 주- + 어요 → 줘요. Important construction: 주다 also forms V+아/어 주다 meaning 'do for someone' — a politeness builder.",
  '자다 → 자요': "To sleep. Regular contraction: 자 + 아요 → 자요 (the 아 is absorbed). Informal: 자다가 (while sleeping), 잠을 자다 (to sleep sleep, a cognate object).",
  '날씨': "Weather. Native Korean word (not Sino-Korean). Contrast: 기후 (climate) is Sino-Korean from 氣候. 날씨 covers daily weather; 기후 covers long-term patterns.",
  '덥다 → 더워요': "Hot (weather). ㅂ-irregular. Distinction: 덥다 for weather/environment; 뜨겁다 for a hot object (coffee, stove).",
  '춥다 → 추워요': "Cold (weather). ㅂ-irregular. Parallel to 덥다. For a cold object, use 차갑다. Weather vs object distinction is Korean's way of handling temperature.",
  '흐리다 → 흐려요': "Cloudy / murky. Regular ㅣ + 어 → 여 contraction. Also used for cloudy water, cloudy mind. Metaphorically extends from weather.",
  'A1 Complete: Grammar Summary': "End of A1. Core grammar mastered: 요-form polite speech, 습니다 formal speech, basic particles (은/는, 이/가, 을/를, 에, 에서), descriptive verbs, simple negation.",

  // u7 — conjunctions + irregular patterns
  '그래서': "So / therefore. Sentence-connecting conjunction. Used at the START of a new sentence. Contrast 그래서 (result) with 그런데 (but/however). Discourse-level connector.",
  'ㄷ-불규칙': "ㄷ-irregular. The ㄷ batchim (final consonant) changes to ㄹ before a vowel ending. 듣다 (to listen) → 들어요. Affects a small but common set of verbs.",
  'ㅂ-불규칙': "ㅂ-irregular. The ㅂ changes to 우 before vowel endings. Largest irregular class in Korean. 쉽다 → 쉬워요, 춥다 → 추워요, 돕다 → 도와요.",
  '춥다 → 추워요': "Cold (weather), ㅂ-irregular. Past tense: 추웠어요. Future: 추울 거예요. Full conjugation paradigm of ㅂ-irregulars must be memorized together.",
  '어렵다 → 어려워요': "Difficult, ㅂ-irregular. Conjugation: 어려워요 (present), 어려웠어요 (past), 어려울 거예요 (future). Common in feedback: 한국어가 어려워요 (Korean is difficult).",
  '쉽다 → 쉬워요': "Easy, ㅂ-irregular. Conjugation: 쉬워요 (present), 쉬웠어요 (past). Same ㅂ→우 pattern. Paired with 어렵다 throughout curriculum.",
  '-고': "'And' / 'and then.' Sentence-connecting ending. Attaches to verb stem: 가고 (and go), 먹고 (and eat). Lists sequential or simultaneous actions. Very productive connector.",
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
