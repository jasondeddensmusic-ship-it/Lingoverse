#!/usr/bin/env node
// 32 Korean cards u21-u25 using particles filler. Advanced grammar endings.

import fs from 'node:fs';

const apply = process.argv.includes('--apply');
const GENERIC = 'Korean particles attach after nouns to mark their role. No equivalent in English.';

const FACTS = {
  // u21 — formal / written
  '-(으)며': "'And / while' (written, formal). Multi-use connector: lists parallel actions OR marks simultaneity. Common in news, essays, and formal presentations.",
  '뛰어나다': "To be outstanding / excellent. Descriptive verb. Compound of 뛰다 (to run/jump) + 나다 (to come out). Literally 'to jump out beyond.' Vivid Korean metaphor for excellence.",
  '-(으)므로': "'Because / since' (formal, written). Reasoning connective used in academic and legal texts. Stronger and more precise than -(으)니까. Feels too formal in speech.",
  '-고자': "'In order to / with the intention of' (formal). Used in reports, speeches, and academic writing. 연구하고자 한다 (intends to research). Never in casual speech.",
  '-(으)로서': "'As a (role/capacity).' Marks role or function. 학생으로서 (as a student). Distinct from -(으)로써 which marks means. Learners confuse these constantly.",
  '-을/를 통해(서)': "'Through / via' (formal). Indicates a medium or channel. 뉴스를 통해서 알았어요 (I learned through the news). Used in formal explanations.",
  '-을/를 비롯한': "'Including / starting with' (formal). Introduces an exemplary list. 한국을 비롯한 아시아 국가들 (Asian countries, including Korea). Academic register.",
  '-ㄴ/는 한편': "'While at the same time / on the other hand' (formal). Compound conjunction. Marks contrast or parallel action. Editorial and essay vocabulary.",

  // u22 — emphatic / concessive
  '-기는 하다': "'It IS (X), but...' Concessive admission. 좋기는 한데 비싸요 (it's good, but expensive). Qualifies a statement with a 'but.' Very natural in Korean speech.",
  '-기는(요)': "'Oh no / not at all' (modest dismissal). Reply used to deflect praise. A: 한국어 잘하네요. B: 잘하기는요. Speech act of modesty; learning this is a politeness milestone.",
  '-ㄴ/는다고 해서': "'Just because X does not mean Y.' Negation of causation. 돈이 많다고 해서 행복한 건 아니에요 (just because you have money doesn't mean you're happy). Rhetorical frame.",
  '-죠 / -지요': "Tag question / shared knowledge ending. 맞죠? (right?), 좋지요. (it's good, right?). Seeks agreement. 죠 is the contracted, more colloquial form.",
  '-고 말고(요)': "'Of course! Absolutely!' Emphatic agreement. 아름답고 말고요 (of course it's beautiful). Reduplication intensifies. Very warm, positive register.",
  '-(으)ㄴ/는걸(요)': "'...though / but you know.' Mild assertion or mild protest. 벌써 먹었는걸요 (but I already ate, you know). Softens disagreement.",
  '-(ㄴ/는)다거나': "'Or / listing possible scenarios.' Enumerative conditional. 비가 오거나 눈이 오거나 (whether it rains or snows). Lists alternatives.",
  '-ㄴ/는다고 치다': "'Suppose / let's assume that.' Hypothetical frame. 그렇다고 치자 (let's assume so). Used to set up thought experiments and debates.",

  // u23 — evidentials / reporting
  '-(으)로 인해(서)': "'Due to / because of' (formal). Causal connector. 사고로 인해서 (due to the accident). News and legal register. Never casual speech.",
  '것으로 나타났다': "'It was found/shown that.' Research reporting formula. 효과적인 것으로 나타났다 (was shown to be effective). Academic/news fixed phrase.",
  '-다시피': "'As (you know/see/heard).' Shared-knowledge connector. 아시다시피 (as you know). Speaker appeals to listener's existing knowledge before new info.",
  '-(으)ㄴ/는 걸 보니(까)': "'Judging by / seeing that.' Inferential connective. 우는 걸 보니까 슬픈가 봐요 (seeing her cry, she must be sad). Observational reasoning.",
  '-더라(고요)': "'I saw/experienced that' (firsthand report). Evidential past. Marks info the speaker personally witnessed. Not usable for self — only for observed others.",
  '-(ㄴ/는)다더라': "'I heard that / apparently' (hearsay). Third-hand information ending. Korean has rich evidential grammar — what you saw vs what you heard is marked.",
  '-(ㄴ/는)다면서(요)?': "'I heard that...? Is it true?' Hearsay confirmation. 결혼한다면서요? (I heard you're getting married. True?). Seeks confirmation of something heard.",

  // u24 — counterfactuals / worry
  '-(으)ㄹ걸 (그랬다)': "'I should have...' Regret. 공부할 걸 그랬어요 (I should have studied). Always past-tense feeling, even when structurally present. Expresses hindsight regret.",
  '-(으)ㄹ 텐데': "'It would probably... / I expect that...' Probable anticipation. 비가 올 텐데 우산을 가져가세요 (it will probably rain, take an umbrella). Pragmatic planning.",
  '-(으)ㄹ 테니(까)': "'Since I will... / because it will be...' Speaker's commitment as reason. 제가 할 테니까 걱정하지 마세요 (I'll do it, so don't worry). Reassurance pattern.",
  '-(으)ㄹ까 봐': "'Worried/afraid that might...' Apprehension ending. 늦을까 봐 일찍 왔어요 (I came early because I was worried I'd be late). Expresses preemptive concern.",
  '-고 말다': "'Ended up doing' (unintended result). 울고 말았어요 (I ended up crying). Marks an undesired or unavoidable outcome. Emotional register.",
  '-(으)려다가': "'Was about to but then...' Abandoned intention. 가려다가 안 갔어요 (I was about to go but didn't). Narrates changed plans.",

  // u25 — discourse particles
  '-느라(고)': "'Was busy doing X (so couldn't Y).' Causal excuse connective. 공부하느라고 못 갔어요 (I couldn't go because I was busy studying). Negative-outcome framing.",
  '-거든(요)': "'The thing is... / because, you see.' Explanatory ending. Provides background reason to the listener. 피곤하거든요 (the thing is, I'm tired). Soft explanation marker.",
  '-다가는': "'If you keep doing that...' Warning-of-consequence connective. 그렇게 먹다가는 살쪄요 (if you keep eating like that, you'll gain weight). Proverbial warning.",
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
