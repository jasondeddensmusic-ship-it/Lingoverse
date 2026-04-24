#!/usr/bin/env node
// Korean same-verb-form variant, u4-u13 (~44 cards).

import fs from 'node:fs';

const apply = process.argv.includes('--apply');
// Generic has embedded double-quotes in the source file (escaped as \").
// We match the full funFact:"..." string content by regex, allowing for the escaping.
const GENERIC_FILE_FORM = 'Korean verbs don\'t change for person or number. \\"I go\\" and \\"they go\\" use the same verb form.';

const FACTS = {
  // u4 — food
  '밥': "Rice / meal. Native Korean. Literal and metaphorical: '밥 먹었어요?' (have you eaten?) is a greeting equivalent to 'how are you?' In Korea, rice equals nourishment equals wellbeing.",
  '맛있다': "To be delicious. Compound: 맛 (taste) + 있다 (to have/exist). Literally 'to have taste.' Opposite: 맛없다 (lacks taste = not tasty). Productive pattern.",
  '쓰다 → 써요': "To be bitter. Homophone with 쓰다 (to write/use). Three different 쓰다 verbs depending on context. This one describes flavor: 약이 써요 (medicine is bitter).",
  '짜다 → 짜요': "To be salty. Also means 'to squeeze' in different context. Taste vocabulary: 짜다 (salty), 달다 (sweet), 시다 (sour), 쓰다 (bitter), 맵다 (spicy).",
  '음식': "Food (general). Sino-Korean 飮食. Covers all food. Contrast 한식 (Korean food), 양식 (Western food), 일식 (Japanese food), 중식 (Chinese food) — organized by cultural origin.",
  '새콤하다 → 새콤해요': "To be tangy / sour-sweet. Native Korean sensory adjective with onomatopoeic quality. Describes citrusy foods: lemon, kimchi, yogurt. Taste-descriptive is rich in Korean.",

  // u5 — family / emotions
  '할아버지': "Grandfather. Native Korean. Respectful — always in honorific. 할아버지께서 (the honorific subject marker 께서 used with elders). Family vocabulary has strict honorific rules.",
  '새': "New (modifier). Native Korean. Prenominal modifier: 새 옷 (new clothes), 새 차 (new car). Different from 새로운 (new, full adjective form) which takes a verb ending.",
  '재미있다': "To be fun / interesting. 재미 (fun) + 있다 (to exist/have). Opposite: 재미없다. This pattern 'X+있다/없다' is productive: 관심있다 (interested), 문제없다 (no problem).",
  '불편하다 → 불편해요': "To be uncomfortable. Sino-Korean 不便 (not-convenient) + 하다. 하다 verbs are Korean's main verb-creation mechanism — attach 하다 to a Sino-Korean noun to make a verb.",
  '높다 → 높아요': "To be high / tall. Native Korean. Vowel-harmony rule: stem vowel 오 pairs with 아 ending → 높아요. Vowel harmony governs most Korean conjugation.",
  '아주': "Very / really. Native Korean adverb. Strong intensifier — stronger than 정말 (really), less than 정말 정말 (really really). Register-neutral.",
  '놀라다 → 놀라요': "To be surprised. Native Korean. Regular conjugation: 놀라 + 아요 → 놀라요 (vowel absorption). Emotional verb used often in casual conversation.",
  '신나다 → 신나요': "To be excited / thrilled. Native Korean. 신 (spirit) + 나다 (to come out). Literally 'spirit coming out' — an energetic, joyful excitement. Cultural metaphor of animated spirit.",
  '자랑스럽다 → 자랑스러워요': "To be proud. ㅂ-irregular. 자랑 (pride) + 스럽다 (adjective-making suffix). -스럽다 creates descriptive verbs from nouns: 사랑스럽다 (loveable), 자연스럽다 (natural).",
  '부끄럽다 → 부끄러워요': "To be embarrassed / shy. Native Korean, ㅂ-irregular. Culturally important — Korean culture's strong concern with social face makes this emotion frequently discussed.",

  // u6 — transport
  '지하철': "Subway. Sino-Korean 地下鐵 (underground-iron). Literally 'underground iron (road).' Seoul subway (서울 지하철) is one of the world's most extensive and punctual.",
  '에': "To / at (destination or static location). Multi-purpose particle. Three jobs: destination (가요 → 에), static location (있다 → 에), time (에). 'One particle, three jobs' isn't unusual.",
  '왼쪽': "Left (in u6 transport context). Reinforces previous learning. Direction vocabulary crucial for navigation Korean.",
  '돌다 / 돌아가다': "To turn. 돌다 (to rotate) — simple turn. 돌아가다 (to go back, to go around) — compound with 가다. Context decides which to use.",

  // u7 — past tense practice
  '어제': "Yesterday. Native Korean. Always pairs with past tense. 어제 먹었어요 (I ate yesterday). Time adverbs forcefully dictate tense — Korean doesn't allow 'yesterday I eat.'",
  '운동하다 → 운동했어요': "To exercise → exercised. 운동 (exercise, noun) + 하다 (to do). The 하다 verb becomes 했어요 in past. One of Korean's most productive verb-forming patterns.",
  '쉬다 → 쉬었어요': "To rest → rested. Native Korean verb. 쉬 + 었어요 → 쉬었어요. The 어 past marker follows yang/yin vowel-harmony rules: 쉬 is yin, takes 어.",

  // u8 — body / health
  '머리': "Head. Also 'hair.' Same word for the whole top-of-body unit. 머리카락 specifically means individual hair strand. Head and hair conceptually unified in Korean.",
  '열이 나다': "To have a fever. Literally 'fever comes out.' Korean frames many bodily conditions as emergent events: 기침이 나다 (cough comes), 땀이 나다 (sweat comes).",

  // u10 — daily routines
  '일어나다 → 일어났어요': "To wake up / get up. 일어 (rise) + 나다 (come out). Separable verb, compound structure. Past: 일어났어요.",
  '씻다 → 씻었어요': "To wash (oneself). Native Korean. Past: 씻었어요. General 'wash' — more specific: 손을 씻다 (wash hands), 얼굴을 씻다 (wash face).",
  '출근하다 → 출근해요': "To go to work. Sino-Korean 出勤 (going to duty) + 하다. Opposite: 퇴근하다 (to leave work). Central vocabulary for Korean work life.",
  '-기 전에': "Before doing. -기 nominalization + 전에 (before). 자기 전에 (before sleeping). Transforms verbs into timing anchors.",
  '이에요/예요 → 이야/야': "Am/is → am/is (casual). The casual-form copula. 학생이에요 (polite) → 학생이야 (casual). Drops the polite 요 ending. Intimate register.",
  '시작하다 → 시작해요': "To start / to begin. Sino-Korean 始作 (begin-make) + 하다. Opposite: 끝나다 (to finish). Many time-framing verbs are Sino-Korean compounds.",
  '나가다 → 나가요': "To go out / to exit. 나 (out) + 가다 (to go). Compound verb. Opposite: 들어오다 (to come in). Directional-verb compounds build systematically.",

  // u11 — colors
  '여행': "Travel / trip. Sino-Korean 旅行. Compounds: 여행가다 (to go travel), 배낭여행 (backpacking), 신혼여행 (honeymoon). Korean travel vocab is rich.",
  '빨갛다': "To be red. ㅎ-irregular. 빨갛 + 아요 → 빨개요 (irregular contraction). Color words are descriptive verbs in Korean, not adjectives like English.",
  '까맣다': "To be black. ㅎ-irregular. 까맣 + 아요 → 까매요. One of Korean's 5 core ㅎ-irregular color verbs. Same conjugation pattern across colors.",
  '하얗다': "To be white. ㅎ-irregular. 하얗 + 아요 → 하얘요. Culturally: white is traditionally associated with mourning in Korea. Cultural-color mapping differs from Western norms.",
  '파랗다': "To be blue. ㅎ-irregular. 파랗 + 아요 → 파래요. Note: 파랗다 covers both blue and green historically. Korean split blue/green only recently: 초록 (green) + 파랑 (blue).",

  // u12 — hobbies
  '취미': "Hobby. Sino-Korean 趣味 (taste-flavor). Combined characters suggest refined enjoyment. 취미가 뭐예요? (what's your hobby?) is standard conversation-opener.",
  '즐기다': "To enjoy. Native Korean. 운동을 즐기다 (to enjoy exercise). Transitive verb requiring direct object with 을/를.",
  '붓다': "To swell, to pour. ㅅ-irregular: 붓 + 어요 → 부어요 (ㅅ drops). Dual meaning: body swelling (무릎이 붓다) or pouring liquid (물을 붓다). Context disambiguates.",
  '잇다': "To connect, to continue. ㅅ-irregular: 잇 + 어요 → 이어요. Foundational verb for continuity — networks, relationships, narratives all use 잇다.",

  // u13
  '그런데': "But, by the way, however. Conjunction. Starts a sentence, introduces contrast or topic-shift. Common: 그런데 (and then / but) vs 그래서 (so / therefore). Different functions.",
  '부르다': "To call, to sing. Native Korean, 르-irregular: 부르 + 어요 → 불러요. Dual meaning: 이름을 부르다 (call a name), 노래를 부르다 (sing a song).",
  '자르다': "To cut. Native Korean, 르-irregular: 자르 + 아요 → 잘라요. Transitive: 머리를 자르다 (cut hair), 종이를 자르다 (cut paper).",
  '마르다': "To be dry, to be parched. Native Korean, 르-irregular: 마르 + 아요 → 말라요. 목이 마르다 (to be thirsty, literally 'throat is dry'). Physical and metaphorical dryness.",
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
