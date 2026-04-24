#!/usr/bin/env node
// 26 Korean cards u8-u12 using particles filler. Mostly grammar endings.

import fs from 'node:fs';

const apply = process.argv.includes('--apply');
const GENERIC = 'Korean particles attach after nouns to mark their role. No equivalent in English.';

const FACTS = {
  // u8 — conditional
  '-(으)면': "Conditional ending: 'if / when.' (으) appears after consonant-ending stems: 먹으면 (if eat), 가면 (if go). Covers both 'if' and 'when' — context decides.",
  '덥다 → 더우면': "ㅂ-irregular plus conditional. 덥 loses ㅂ to 우, then adds 면: 더우 + 면 = 더우면. Two irregular patterns stacking together.",

  // u9 — politeness + casual + endings
  '언젠가': "Someday / at some time. Indefinite time expression. Contrast 어느 날 (one specific day) with 언젠가 (some unspecified day). Used in aspirational statements.",
  '합쇼체 (polite formal)': "Deferential-polite speech level. -ㅂ니다 after vowel stems, -습니다 after consonant stems. Used in news broadcasts, formal announcements, and military speech.",
  '반말 (casual)': "Casual / intimate speech level. Drop the -요 ending, use plain forms. Appropriate with close friends, family younger than you, and children. NEVER with strangers or superiors.",
  '-(으)ㄹ게요': "Promise ending: 'I will [for you].' Speaker-oriented commitment. 갈게요 (I'll go [as promised to you]). Subtly different from -(으)ㄹ 거예요 (neutral future).",
  '-(으)ㄹ래요': "Casual preference: 'I want to / would like to.' 갈래요? (want to go?), 먹을래요 (I'll eat / want to eat). Informal register, used among peers.",
  'ㄹ-불규칙': "ㄹ-irregular. ㄹ batchim drops before ㄴ, ㅂ, ㅅ endings. 살다 → 삽니다, 살 → 사세요. Affects 살다, 알다, 팔다, 만들다 — all daily verbs.",
  '살다 → 사는 / 삽니다': "Live. ㄹ-irregular demonstration. 사는 (present modifier, ㄹ drops before ㄴ), 삽니다 (formal, ㄹ drops before ㅂ). Must be memorized paradigmatically.",
  '으-불규칙': "으-irregular. 으 vowel drops before 아/어 endings. 쓰다 → 써요, 크다 → 커요, 바쁘다 → 바빠요. Follow vowel harmony: 아 after 아/오, 어 after other vowels.",
  '-고 싶어하다 (3rd person)': "Third-person desire ending. Korean distinguishes first-person 'I want' (-고 싶다) from third-person 'wants' (-고 싶어하다). Only Korean among major languages grammaticalizes this.",

  // u10 — time expressions + casual
  '-(으)ㄹ 때': "When (doing). Future-tense modifier (-(으)ㄹ) + 때 (time). 공부할 때 (when studying), 어릴 때 (when young). Covers specific or habitual time frames.",
  '나 / 너': "Casual I / you. 나 (I, casual form of 저), 너 (you, casual form of 당신/너희). 나 appears in close speech; in polite speech use 저. 너 is especially informal.",
  '-(으)니까': "Reason ending: 'because / since.' Subjective reason. Note: cannot be used before imperatives (commands) — those require -아/어서 structure. Common source of learner error.",
  '내일 먹을 음식': "The food I will eat tomorrow. Future-tense modifier (-(으)ㄹ) + noun. 먹다 → 먹을 음식. Korean modifiers carry tense — a feature rare in global languages.",

  // u11 — by / doing
  '-로/-으로 (교통수단)': "By (transport). -로 after vowel-ending nouns (버스로 = by bus), -으로 after consonants (지하철로 = by subway). Same particle for 'by means of' throughout Korean.",
  '-고 있다': "Progressive: 'is/am/are doing.' 먹고 있어요 (I'm eating). Contrast with simple present 먹어요 (I eat) — progressive emphasizes ongoing action.",
  '-(으)러 가다': "'Go (somewhere) to do.' Purpose-of-movement ending. 밥 먹으러 가요 (I'm going to eat). Used only with 가다/오다/다니다 as the main verb.",
  '-(으)러 오다': "'Come (somewhere) to do.' Mirror of -러 가다. 배우러 왔어요 (I came to learn). Speaker's perspective determines 가다 vs 오다 choice.",
  '-(으)ㄹ 줄 알다': "'Know how to.' Skill or ability. 수영할 줄 알아요 (I know how to swim). Contrast with -(으)ㄹ 수 있다 (can do), which is more about possibility.",
  '-(으)ㄹ 줄 모르다': "'Don't know how to.' Negative of 알다. 운전할 줄 몰라요 (I don't know how to drive). Skill-negation, not possibility-negation.",
  'ㅎ 불규칙': "ㅎ-irregular. ㅎ batchim + vowel ending → ㅎ drops. 빨갛다 → 빨개요 (it's red). Affects color descriptive verbs: 그렇다, 이렇다, 어떻다.",

  // u12 — experience + connectives
  '-(으)ㄴ 적이 있다': "'Have done before' (experience). Past modifier (-(으)ㄴ) + 적이 있다 (there is a case of). 가 본 적이 있어요 (I've been before). Emphasizes experiential past.",
  '-(으)ㄴ 적이 없다': "'Have never done.' Negative experience. 먹어 본 적이 없어요 (I've never eaten it). Pair with -(으)ㄴ 적이 있다 for affirmative/negative contrast.",
  '-(으)면서': "'While doing, at the same time.' Simultaneous action ending. 먹으면서 책을 읽어요 (I read while eating). Both verbs must share the same subject.",
  '-기로 하다': "'To decide to.' Decision ending. 공부하기로 했어요 (I decided to study). Past form 하기로 했어요 marks completed decision; present 하기로 해요 marks resolution.",
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
