#!/usr/bin/env node
// 23 Korean cards u26-u30 using particles filler. Final Korean particles batch.

import fs from 'node:fs';

const apply = process.argv.includes('--apply');
const GENERIC = 'Korean particles attach after nouns to mark their role. No equivalent in English.';

const FACTS = {
  // u26
  '-곤 하다': "'Used to' (habitual past). 가곤 했어요 (I used to go). Marks repeated past actions that no longer hold. Literary slightly more than -(으)ㄹ 때 patterns.",
  '-(는)구나 / -군요': "'Oh, I see! / So that is how it is!' Realization ending. 군요 polite, 구나 casual. Used when learning new information. Very common in Korean dramas.",
  '-고 나니(까)': "'After doing, I found that...' Discovery-after-completion. 끝내고 나니까 마음이 편했어요 (after finishing, I felt at peace). Past discovery frame.",
  '-고 나면': "'After finishing doing, then...' Conditional-after-completion. 숙제를 하고 나면 놀 수 있어요 (after doing homework, you can play). Future conditional of completion.",
  '-는 대로': "'As soon as / the way.' Dual meaning: immediacy (도착하는 대로 알려줘 — let me know as soon as you arrive) OR manner (하고 싶은 대로 — the way you want).",
  '-고 보면': "'Once you look at it / actually.' Reflective-discovery. 생각해 보면 (when you think about it). Invites reconsideration from a new angle.",

  // u27 — literary/emphatic
  '-은/는커녕': "'Let alone / far from / not even.' Strong negation with escalation. 한국어는커녕 영어도 못해요 (let alone Korean, I can't even speak English). Dramatic negation.",
  'V-기는커녕': "Verb-form of -커녕. 공부하기는커녕 잠만 잤어요 (far from studying, I only slept). Attaches to -기 nominalization. Emphasizes contrary action.",
  '-(으)ㄴ/는들': "'Even if / what good is it' (literary). Concessive questioning. 노력한들 어쩌겠어요 (even if I try, what good will it do?). Literary resignation.",
  '-(ㄴ/는)다니 / -(이)라니': "'I can't believe... / How could...!' Exclamation of disbelief. 벌써 결혼하다니! (you're getting married already, I can't believe it!). Surprise marker.",
  '-(ㄴ/는)다더니': "'They said X, but (unexpected twist).' Reported speech with ironic twist. 온다더니 안 왔어요 (they said they'd come but didn't). Hearsay + contradiction.",

  // u28
  '-치고': "'For a / considering (that it is).' Concessive comparison. 초보치고 잘해요 (for a beginner, you do well). Offers a qualified evaluation.",
  '-(으)ㄹ 겸': "'For the dual purpose of / partly to.' Multi-purpose connector. 운동도 할 겸 친구도 만날 겸 (both to exercise and to meet friends). Lists parallel motives.",
  '-듯(이)': "'As if / as though / like.' Simile connector. 눈이 물 흐르듯이 내렸어요 (snow fell as if it were water flowing). Literary metaphor connector.",

  // u29
  '-(으)ㄴ 채(로)': "'While still / with (state maintained).' State-preservation ending. 옷을 입은 채로 잤어요 (I slept with clothes still on). Holds a prior state through an action.",
  '-(으)ㅁ': "(Formal written nominalization.) Turns a verb into a noun: 배우다 → 배움 (learning). Used in notebooks, headlines, legal documents. Stark, telegraphic register.",
  '-(이)야말로': "'Truly / indeed / IS the real.' Emphatic identification. 네가 야말로 천재야 (you are the real genius). Assertive singling-out.",
  '-(으)ㄴ/는 한': "'As long as / so long as.' Conditional continuation. 살아 있는 한 (as long as I'm alive). Expresses sustained condition.",
  '-(으)ㄴ/는 이상': "'Since / now that (committed, no going back).' Once-done commitment frame. 약속한 이상 지켜야 해요 (since we promised, we must keep it). Committal logic.",
  '-(이)나 할 것 없이': "'Regardless of A or B / whether A or B.' Inclusive connector. 남녀노소 할 것 없이 (regardless of age or gender). Fixed idiomatic phrase.",
  '-니?': "Casual question ending (intimate). 어디 가니? (where are you going?). Used with close friends, family, and kids. Never with strangers or superiors.",

  // u30
  '-는 수가 있다': "'It can happen that / there are cases where.' Possibility ending. 그런 수도 있어요 (that can happen). Acknowledges rare but real possibilities.",
  '-고 들다': "'To begin to / to start (entering a state).' Ingressive aspectual ending. 따지고 들다 (start arguing, getting into it). Marks entry into intense activity.",
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
