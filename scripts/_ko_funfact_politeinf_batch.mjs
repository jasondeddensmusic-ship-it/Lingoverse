#!/usr/bin/env node
// 39 Korean polite-informal variant. ZEROES it.

import fs from 'node:fs';

const apply = process.argv.includes('--apply');
const GENERIC = 'The polite informal ending. Used in ~80% of daily Korean conversation. Safe with almost everyone.';

const FACTS = {
  // u1
  '-지 않아요': "Negative formal/emphatic ending. -지 않다 (not to be X). 가지 않아요 (does not go). More formal than short-form 안 가요. Preferred in written Korean.",

  // u2
  '좋다 → 좋아요': "To be good / to like. Dual meaning: describes quality (사과가 좋아요 — apple is good) OR expresses liking (사과가 좋아요 — I like apples). Subject-particle makes the difference.",
  '좋아하다 → 좋아해요': "To like (action). From 좋다 + 하다. Unlike 좋다, takes a direct object with 을/를. 사과를 좋아해요 (I like apples). Action-verb of liking.",

  // u3
  '해요체 (haeyo-che)': "Polite-casual register (-요 ending). Covers ~80% of Korean conversation. Formed by adding -아요/어요 to stems. Safe with strangers, adults, and service staff.",

  // u5 — descriptive verbs
  '작다 → 작아요': "To be small. Native Korean. Vowel-harmony: 작 (yang vowel 아) + 아요. Opposite: 크다 (big). Size-description pair.",
  '많다 → 많아요': "To be many / a lot. Native Korean. 양 (amount) + 많다. Contrasts with 적다 (few). Quantity descriptor — always descriptive verb, not number.",
  '적다 → 적어요': "To be few / little. Native Korean. Paired with 많다 as opposite. Careful: 적다 also means 'to write down' (homophone). Context decides.",
  '깨끗하다 → 깨끗해요': "To be clean. Native Korean + 하다. Opposite: 더럽다 (dirty). Cleanliness is culturally emphasized — shoes off indoors, frequent hand washing.",
  '높다 → 높아요': "To be high / tall. Native Korean. Vowel harmony: 높 + 아요. Used for mountains, prices, temperature, status — 'height' is broadly metaphorical.",
  '낮다 → 낮아요': "To be low / short (in height). Native Korean. Paired with 높다. Vowel-harmony: 낮 + 아요. Distinguished from 작다 (small) — 낮다 is vertical, 작다 is overall size.",
  '멀다 → 멀어요': "To be far. Native Korean. ㄹ-irregular in some conjugations. Opposite: 가깝다 (close). Distance vocabulary.",

  // u6 — action verbs
  '읽다 → 읽어요': "To read. Native Korean. 읽 (stem) + 어요 (vowel harmony: 이 is yin). Past: 읽었어요. Transitive: requires 을/를 object.",
  '앉다 → 앉아요': "To sit. Native Korean. 앉 + 아요 (vowel harmony). Imperative: 앉으세요 (please sit). Essential classroom/restaurant vocabulary.",
  '입다 → 입어요': "To wear (clothes). Native Korean. Specific to putting-on clothes vs 쓰다 (hat), 신다 (shoes), 하다 (accessories). Korean distinguishes body-placement of clothing precisely.",
  '맑다 → 맑아요': "To be clear / sunny. Native Korean. Weather and water clarity. 하늘이 맑아요 (the sky is clear). Photography-era vocabulary.",

  // u7 — past tense
  '먹다 → 먹었어요': "To eat → ate. Native Korean. 먹 (yin) + 었어요. Past tense formed by inserting -았/었- before the ending. Most-used eating verb.",
  '가다 → 갔어요': "To go → went. Native Korean. Vowel absorption: 가 + 았어요 → 갔어요. Irregular contraction pattern for open-vowel stems.",
  '오다 → 왔어요': "To come → came. Native Korean. 오 + 았어요 → 왔어요 (vowel diphthong contraction). Paired with 가다 across spatial-directional scenarios.",
  '하다 → 했어요': "To do → did. Native Korean. 하 + 였어요 → 했어요 (unique 여 past ending — ONLY 하다). Most-used verb in Korean; compounds with Sino-Korean nouns.",
  '마시다 → 마셨어요': "To drink → drank. Native Korean. 마시 + 었어요 → 마셨어요 (이+었 contracts to 였). Transitive: 물을 마시다 (drink water).",
  '살다 → 살았어요': "To live → lived. Native Korean, ㄹ-irregular. 살 + 았어요 → 살았어요. 어디에 살아요? (Where do you live?).",
  '쓰다 → 썼어요': "To write/use → wrote/used. 으-irregular: 쓰 loses 으, adds 었어요 → 썼어요. Triple meaning: write, use, be bitter (homophones).",
  '배우다 → 배웠어요': "To learn → learned. Native Korean. 배우 + 었어요 → 배웠어요 (이 absorbed). Transitive: 한국어를 배워요 (learn Korean).",
  '주다 → 줬어요': "To give → gave. Native Korean. 주 + 었어요 → 줬어요 (vowel contraction). Also functions as helping verb: V+아/어 주다 (to do for someone).",
  '어제 뭐 했어요?': "'What did you do yesterday?' Past of 하다 + 어제 (yesterday). Classic conversation starter. Note: 뭐 (what) in casual position.",
  '걷다 → 걸어요': "To walk. Native Korean, ㄷ-irregular: 걷 + 어요 → 걸어요 (ㄷ→ㄹ before vowel). ㄷ-irregular pattern that must be memorized paradigmatically.",
  '묻다 → 물어요': "To ask. Native Korean, ㄷ-irregular: 묻 + 어요 → 물어요 (ㄷ→ㄹ). Homophone with 묻다 (to bury) which is REGULAR — same spelling, different pattern.",
  '안 했어요': "Did not (by choice). 안 + past of 하다. Short-form negation. Implies deliberate non-doing. Contrast 못 했어요 (inability).",
  '못 했어요': "Couldn't (inability). 못 + past. Implies external constraint. Key distinction: 안 = refusal/choice, 못 = inability. Korean grammaticalizes will vs ability.",
  '-지 않았어요': "Did not (long form). Past of -지 않다. More formal than 안 했어요. 가지 않았어요 = did not go. Written and careful-speech register.",

  // u9
  '해요체 (polite casual)': "Polite casual register = -아/어요 ending. The default speech level for adult peers and service interactions. Less formal than 합쇼체, more respectful than 반말.",
  '미안해요, 못 가요': "'Sorry, I can't go.' Formula for polite refusal. 미안해요 (sorry) + 못 가요 (cannot go). Uses 못 for inability, not 안 (choice).",
  '바쁘다 → 바빠요 / 바빴어요': "To be busy. 으-irregular past: 바쁘 → 바빠 (present) → 바빴어요 (past). Double 으-irregular pattern. Essential daily-life vocabulary.",
  '예쁘다 → 예뻐요 / 예뻤어요': "To be pretty. 으-irregular. 예쁘 → 예뻐요 (present) → 예뻤어요 (past). Cosmetic/appearance vocabulary — very common compliment.",

  // u10
  '사다 → 샀어요': "To buy → bought. Native Korean. 사 + 았어요 → 샀어요 (vowel contraction). Opposite: 팔다 (to sell). Commerce vocabulary foundation.",

  // u11
  '-아/어 봤어요': "'Have tried / have experienced.' V+아/어 보다 (try doing) + past. 먹어 봤어요 (I have tried eating it). Experiential past.",
  '-고 있었어요': "'Was doing.' Past progressive. -고 있다 (be doing) + past ending. Expressed simultaneous past action: 공부하고 있었어요 (I was studying).",

  // u19
  '-잖아요': "'You know / as you know.' Tag-ending indicating shared knowledge. 비가 오잖아요 (it's raining, you know). Appeals to listener's already-known info.",

  // u29
  '-(ㄴ/는)다잖아요': "'I told you / you know that / remember?' Reinforced indirect-speech + 잖아요. Mild reminder tone. 간다잖아요 (I told you he's going).",
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
