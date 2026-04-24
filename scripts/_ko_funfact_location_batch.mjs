#!/usr/bin/env node
// 25 Korean location-or-time variant. ZEROES it.

import fs from 'node:fs';

const apply = process.argv.includes('--apply');
const GENERIC = 'Marks location or time. One particle, two jobs. Context tells you which.';

const FACTS = {
  // u1 — copula
  '이에요 / 예요': "Polite copula 'am/is/are.' 이에요 after consonant-ending noun (학생이에요), 예요 after vowel (의사예요). Phonological split — most Korean particles pair this way.",
  '아니에요': "Negative copula. 아니다 + -에요. 학생이 아니에요 (I'm not a student). Always requires 이/가 subject-particle on the negated noun — stricter than English.",
  '아니요, 아니에요': "'No, it's not.' 아니요 (no response) + 아니에요 (not to be). Both derive from 아니다. Doubling for formal politeness in answer.",

  // u9 — reason + time
  '나중에': "Later / sometime later. Native Korean adverb. Contrast with 이따가 (a little later, same day). 나중에 is vaguer — 'at some later point.'",
  '때문에': "Because of / due to (noun). Follows noun. 비 때문에 (because of rain). Neutral reason-marker. Related to 때 (time) — 'at the time of.'",
  '-기 때문에': "'Because of (doing).' Attaches to verb via nominalizer -기. 비가 오기 때문에 (because it's raining). More formal than -아/어서.",

  // u10 — timing structures
  '-기 전에': "'Before doing.' -기 nominalization + 전 (before) + 에 (at). 자기 전에 (before sleeping). Systematic time-framing structure.",
  '-(으)ㄴ 후에': "'After doing.' -(으)ㄴ past-modifier + 후 (after) + 에 (at). 먹은 후에 (after eating). Mirror of 전에 structure.",
  '이에요/예요 → 이야/야': "Casual copula (u10 context). 학생이야 (I'm a student, casual). Drops polite -요. Reserved for close friends, family younger than you, pets.",

  // u11
  '-(으)ㄴ 후에': "After doing (u11 context). Reinforces u10 learning. 체크인한 후에 (after checking in) — common in travel scenarios.",

  // u17 — advanced particles
  'N밖에 + negative': "'Nothing but / only' (emphatic). Noun + 밖에 + negative verb. 물밖에 없어요 (there's nothing but water). ALWAYS paired with negative — a fixed rule.",
  '-(으)ㄹ 수밖에 없다': "'Can't help but / have no choice but to.' Forced-action pattern. 울 수밖에 없었어요 (I couldn't help but cry). Expresses unavoidability.",
  '에 의해(서)': "By (passive agent). Formal passive marker. 책이 작가에 의해서 쓰였어요 (the book was written by the author). Sino-Korean 依 (depend on) origin.",

  // u21
  '-기에': "Because (literary/formal). -기 + 에. 추웠기에 집에 있었어요 (because it was cold, I stayed home). Stark, written register. Rare in speech.",

  // u22
  '-(으)ㄴ/는 반면(에)': "On the other hand, whereas. 반면 = 反面 (opposite-side). 공부는 잘하는 반면에 운동은 못해요 (she's good at studying, on the other hand not good at sports). Contrastive connector.",

  // u23
  '-에 의해(서)': "By (passive agent marker, u23 context). Formal. Differs from -에게 (by, person) and -로 (by, instrument). Advanced passive-voice formation.",
  '-에 따라(서)': "Depending on / according to. 날씨에 따라서 다르다 (depends on weather). Variable-dependence marker. 따르다 = to follow.",

  // u25 — reason shades
  '-는 바람에': "Because of (unexpected, usually negative). 늦는 바람에 버스를 놓쳤어요 (because I was late, I missed the bus). 바람 here means 'unexpected gust/event.'",
  '-(으)ㄴ/는 탓에': "Because of (blame, negative). 탓 = 'fault.' 비가 오는 탓에 (because of the damn rain). Assigns blame. Stronger negative valence than 때문에.",
  '-는 덕분에': "Thanks to (gratitude, positive). 덕 = 'virtue.' 선생님 덕분에 합격했어요 (thanks to my teacher, I passed). Opposite of 탓 — gratitude instead of blame.",
  '-는 통에': "Because of (chaotic/disruptive situation). 아이가 우는 통에 잠을 못 잤어요 (because of the kid crying, I couldn't sleep). Implies disruption.",

  // u28
  '-기에(는)': "For the purpose of / too much to (not suitable). 먹기에는 너무 많아요 (it's too much to eat). Evaluative — something exceeds a purpose.",
  '-(으)ㄴ/는 김에': "While at it / since (already doing). 나간 김에 빵도 샀어요 (since I was out, I also bought bread). Opportunistic piggyback connector.",

  // u29
  '-는 길에': "On the way to/from. 길 (road) + 에. 집에 오는 길에 마트에 들렀어요 (on my way home, I stopped at the store). Literal and idiomatic path.",

  // u30
  '-는 사이(에)': "While / during the time that. 사이 = 'interval.' 자는 사이에 전화가 왔어요 (while I was sleeping, a call came). Interval-framing connector.",
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
