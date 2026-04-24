#!/usr/bin/env node
// 14 Korean cards u14-u20 using particles filler. Grammar endings.

import fs from 'node:fs';

const apply = process.argv.includes('--apply');
const GENERIC = 'Korean particles attach after nouns to mark their role. No equivalent in English.';

const FACTS = {
  // u14
  '-(으)려고': "'In order to / intending to.' Subjective intention ending. 공부하려고 해요 (I intend to study). The speaker's plan — not a guarantee. Contrast with -(으)러 which goes with motion verbs only.",
  '-(으)려면': "Conditional purpose: 'if you want to / in order to.' Combines -(으)려고 + -면. 합격하려면 (if you want to pass). Used in instructional or advisory contexts.",

  // u15
  '-게': "Adverb-making suffix (-ly in English). Attaches to descriptive verbs: 빨리 → 빠르게 (quickly), 크게 (loudly, greatly). Productive suffix that turns adjectives into adverbs.",

  // u16 — indirect speech
  '-냐고 하다': "Indirect question: 'asked whether, asked if.' 가냐고 했어요 (he asked if I'm going). One of Korean's four indirect-speech endings: -다/-냐/-자/-라.",
  '-(으)라고 하다': "Indirect command: 'told to / ordered to.' 오라고 했어요 (he told me to come). Reports someone's command to another person. Part of the 4-way indirect speech system.",
  '-자고 하다': "Indirect suggestion: 'suggested / proposed.' 먹자고 했어요 (he suggested we eat). Reports a proposal. Fourth member of the indirect speech set (statement/question/command/suggestion).",
  '-(으)시-': "Honorific verb marker. Inserted between stem and ending: 하다 → 하시다 (plain → honorific). Used for subjects deserving respect (elders, teachers, bosses). Korean's most visible politeness grammar.",

  // u17
  '-다가': "'While doing (then switched to).' Ending that marks interruption of one action by another. 먹다가 나갔어요 (I was eating then went out). Distinct from -(으)면서 which is simultaneous.",

  // u18
  '-기 위해서': "'In order to' (formal). Used for formal/written contexts. 건강을 지키기 위해서 운동해요 (I exercise in order to maintain health). Contrast informal -(으)려고.",

  // u19
  '-ㄴ/은 지': "'Since (time duration).' 만난 지 3년이에요 (it's been 3 years since we met). -ㄴ after vowel stems, -은 after consonant. Always paired with duration + 되다 or ~이다.",
  '-(으)ㄹ수록': "'The more... the more...' Correlative ending. 공부할수록 재미있어요 (the more I study, the more fun it is). Expresses proportional change. Literary but not rare.",

  // u20
  '-(으)ㄹ 뻔하다': "'Almost did / nearly happened.' Counterfactual near-miss. 넘어질 뻔했어요 (I almost fell). Always in past tense. Marks a narrowly avoided event.",
  '-(으)ㅂ시다': "'Let's' (formal). -(으)ㅂ시다 formal vs 자 casual. 갑시다 (let's go, formal). Actually often avoided in real speech with superiors — used with equals or subordinates.",
  '-(ㄴ/는)다': "Plain/narrative ending (writing form). Used in books, newspapers, diaries, thought-quotations. 간다 (goes), 먹는다 (eats). Sounds declarative and literary when spoken aloud.",
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
