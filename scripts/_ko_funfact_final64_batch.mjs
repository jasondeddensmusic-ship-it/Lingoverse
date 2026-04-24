#!/usr/bin/env node
// 64 Korean final cards. ZEROES ALL Korean boring funFacts.
// Each card has a DIFFERENT generic, so we match by (trg, generic-prefix) pair.

import fs from 'node:fs';

const apply = process.argv.includes('--apply');

// Maps trg → {generic prefix to match, new fact}
const FACTS = [
  // verb-endings variant
  ['이름이 뭐예요?', 'Korean verb endings change meaning', "'What is your name?' 이름 (name) + 이 (subject particle) + 뭐 (what) + 예요 (is). Name-asking is one of the first Korean phrases — and culturally tied to honorifics: asking older vs younger person differs."],
  ['-는 중이다', 'Korean verb endings change meaning', "'In the middle of doing.' -는 중 (in the middle) + 이다 (to be). Progressive emphasis. 공부하는 중이에요 (I'm in the middle of studying) — more formal than -고 있어요."],
  ['-는 편이다', 'Korean verb endings change meaning', "'Tend to, on the... side.' Hedged characterization. 한국어가 쉬운 편이에요 (Korean is on the easier side, for me). Softer than flat declaration."],
  ['-(으)ㄴ/는 모양이다', 'Korean verb endings change meaning', "'It seems / it appears that.' 모양 = shape/form. Evidence-based inference from visual signs. 우는 모양이에요 (it appears they're crying)."],
  ['-(으)려던 참이다', 'Korean verb endings change meaning', "'Was just about to (timely coincidence).' 참 = moment. 나가려던 참이에요 (I was just about to leave). Perfect-timing marker."],
  ['-기/게 마련이다', 'Korean verb endings change meaning', "'It's bound to / inevitable.' 마련 = preparation/inevitability. 사람은 실수하기 마련이에요 (people are bound to make mistakes). Philosophical truism connector."],
  ['-기 십상이다', 'Korean verb endings change meaning', "'Tend to (negative outcome likely).' 십상 = 8-out-of-10 chance. 늦기 십상이에요 (you're likely to be late). Negative probability marker."],
  ['-(으)ㄴ/는 법이다', 'Korean verb endings change meaning', "'It's natural/expected that.' 법 = law/rule. 사는 게 그런 법이에요 (that's how life goes). Wisdom-formula for generalizations."],
  ['-(으)ㄴ/는 셈이다', 'Korean verb endings change meaning', "'It amounts to / practically.' 셈 = counting. 거의 끝난 셈이에요 (practically finished). Approximation-to-completion marker."],
  ['-(으)ㄴ/는 편이다', 'Korean verb endings change meaning', "'Tends to be / is on the X side.' Same as -는 편이다 earlier; also accepts past/present modifiers. 예쁜 편이에요 (she's on the pretty side)."],
  ['-(으)ㄹ 지경이다', 'Korean verb endings change meaning', "'To be on the verge of / at the point of (dire).' 지경 = extreme situation. 울 지경이에요 (I'm on the verge of crying). Emotional extremity."],
  ['-(으)ㄹ 뿐이다', 'Korean verb endings change meaning', "'Merely / nothing but / only.' 뿐 = only. 친구일 뿐이에요 (we're only friends). Limiting — dismisses broader implications."],

  // "Try doing" variant
  ['아니요', '\\"Try doing.\\"', "'No.' One of the first Korean words a learner encounters. Used as a standalone response. Polite-casual; for casual: 아니. For formal: 아닙니다."],
  ['아빠 / 아버지', '\\"Try doing.\\"', "Dad / father. 아빠 is affectionate/casual (child's word), 아버지 is formal/respectful (adult's word). Register-matched. Adults use 아버지 when referring to their own father in formal contexts."],
  ['-아/어서 (sequence)', '\\"Try doing.\\"', "Sequential connector: 'and then.' Shares same ending with cause-and-effect -아/어서. The two uses are distinguished by context. Here, it's pure chronological sequencing."],
  ['아프다 → 아프면', '\\"Try doing.\\"', "If (you're) sick. 아프다 (to be sick) + -(으)면 (if). 으-irregular: 아프 + 면 = 아프면. Common health advice frame: 아프면 쉬세요 (if you're sick, rest)."],
  ['-아/어서 (cause)', '\\"Try doing.\\"', "Cause connector: 'because / so.' Same ending as sequence -아/어서 but cause reading. Key rule: cannot be used before imperatives — those need -(으)니까."],
  ['-아/어야 하다', '\\"Try doing.\\"', "'Must, have to.' Obligation. 해야 해요 (I have to do it). Central pattern for modal obligation. Past: 해야 했어요 (had to)."],
  ['-아/어지다', '\\"Try doing.\\"', "'Become / get' (state change). Adjective → process. 예뻐지다 (become pretty), 커지다 (become big). Transforms descriptive verbs into action verbs of becoming."],
  ['-아/어서 그런지', '\\"Try doing.\\"', "'Maybe because' (tentative cause). 그런지 = whether that's why. Speaker suggests but doesn't confirm a reason. Hedged causation."],
  ['-아/어 봤자', '\\"Try doing.\\"', "'Even if you try / it's no use trying.' Futility marker. 말해 봤자 소용없어요 (even if you tell them, it's no use). Resignation frame."],
  ['-아/어 대다', '\\"Try doing.\\"', "'To do repeatedly / excessively / keep doing.' 대다 = to apply/attach. 울어 대다 (to keep crying). Often negative connotation — annoying repetition."],
  ['-아/어다(가)', '\\"Try doing.\\"', "'Do X and then (bring/take to another place).' 사다가 주다 (buy and bring). Movement connector — do something then relocate the result."],

  // "also/too" variant
  ['도 with negatives', 'Means \\"also/too.\\"', "'Neither / don't have either.' 저도 없어요 (I don't have it either). 도 with negative verb: negative coordination. Classical usage across Korean."],
  ['-아/어도', 'Means \\"also/too.\\"', "'Even if / even though.' Concessive ending. 비가 와도 가요 (I'll go even if it rains). Combines action + concession."],
  ['-아/어도 되다', 'Means \\"also/too.\\"', "'May, it's OK to, allowed to.' -아/어도 + 되다. Permission marker. 들어가도 돼요? (may I enter?). Essential polite-request pattern."],
  ['-ㄴ/는다고 해도', 'Means \\"also/too.\\"', "'Even if (one says/it is the case that).' Reported + concessive. 간다고 해도 늦을 거예요 (even if he says he'll go, he'll be late). Complex concession."],
  ['-(이)라도', 'Means \\"also/too.\\"', "'At least / even if it's just.' 커피라도 드세요 (at least have some coffee). Fallback-option marker. Offers a minimal alternative."],
  ['-(으)ㄹ지라도', 'Means \\"also/too.\\"', "'Even if / even though' (formal concession). Literary register. Strong concession. 비가 올지라도 가겠습니다 (even if it rains, I will go)."],
  ['-아/어서라도', 'Means \\"also/too.\\"', "'Even if it means doing / by any means.' Emphatic means-determination. 돈을 빌려서라도 사야 해요 (I have to buy it even if I borrow money)."],
  ['-(으)ㄹ 정도(로)', 'Means \\"also/too.\\"', "'To the extent that / so much that.' 정도 = degree. 울 정도로 아팠어요 (it hurt so much I cried). Extremity-degree marker."],

  // "only/just" variant
  ['-만', 'Means \\"only/just.\\"', "'Only / just.' Particle attaching to any noun. 커피만 주세요 (just coffee please). Simple limiter — one of Korean's most productive particles."],
  ['만나다 → 만났어요', 'Means \\"only/just.\\"', "To meet → met. Native Korean. 만나 + 았어요 → 만났어요 (vowel contraction). Common in past-tense narrations: 친구를 만났어요 (I met a friend)."],
  ['만나서 반갑습니다', 'Means \\"only/just.\\"', "'Nice to meet you.' Fixed phrase. 만나서 (meeting [you]) + 반갑다 (to be glad) + -습니다 (formal). Formal self-introduction closer."],
  ['-(으)ㄹ 뿐만 아니라', 'Means \\"only/just.\\"', "'Not only... but also.' Additive structure. 똑똑할 뿐만 아니라 친절해요 (not only smart but also kind). Formal enumeration connector."],
  ['-(으)니만큼', 'Means \\"only/just.\\"', "'Since / as much as' (proportional reason). Formal reasoning. 노력한 만큼 (to the extent that you tried). Proportional-reason marker."],
  ['-(으)ㄹ 만하다', 'Means \\"only/just.\\"', "'To be worth doing / worthy of / feasible.' 만하다 = worth/deserving. 볼 만하다 (worth seeing). Evaluative — recommending or qualifying."],
  ['-(으)ㄴ/는 만큼', 'Means \\"only/just.\\"', "'As much as / to the extent that / proportional to.' 공부한 만큼 (as much as you studied). Proportional connector. Key for comparative expressions."],
  ['-기만 하면 (되다)', 'Means \\"only/just.\\"', "'As long as you just / all you need to do is.' Minimal-condition. 말하기만 하면 돼요 (all you need to do is speak). Simplifying pattern."],

  // "two negation systems" variant
  ['안', 'Korean has two negation', "Pre-verb negation. Goes IMMEDIATELY before the verb: 안 가요 (don't go). For 하다-verbs: 공부 안 해요 (split). Short and casual — chosen in speech more than writing."],
  ['-지 못하다', 'Korean has two negation', "'Cannot' (formal long form). Inability negation, longer form. 가지 못해요 (cannot go). Vs short 못 가요. The long form is more formal and written-oriented."],
  ['-(으)면 안 되다', 'Korean has two negation', "'Must not, may not.' Prohibition structure. 들어가면 안 돼요 (you must not enter). Compound of conditional + negative 되다. Strong prohibition."],
  ['-던데(요)', 'Korean has two negation', "'I noticed/found that' (sharing observation). Past witnessed experience. 비가 오던데요 (I noticed it's raining). Evidential past-observation ending."],
  ['-(으)ㄹ까 말까', 'Korean has two negation', "'Whether to do or not' (indecision). 갈까 말까 (should I go or not). Rhetorical self-questioning. Expresses hesitation."],
  ['-길래', 'Korean has two negation', "'Because I noticed/discovered' (so I...). 비가 오길래 우산을 가져왔어요 (because I noticed it was raining, I brought an umbrella). Observational-reason connector."],
  ['-(으)나 마나', 'Korean has two negation', "'Whether you do it or not / no use doing.' 하나 마나 똑같아요 (it's the same whether you do it or not). Futility of doing."],

  // "comparison" variant (mostly 보다)
  ['보다 → 봤어요', 'Comparison particle:', "To see/watch → saw/watched. Native Korean verb. Homophone with 보다 (comparison particle, than). Context disambiguates. 영화를 봤어요 (I watched a movie)."],
  ['-아/어 보다', 'Comparison particle:', "'To try doing.' Auxiliary 보다 (to see/try). 먹어 보다 (try eating). Uses same 보다 root — the 'see-try' metaphor. Very productive pattern."],
  ['생각보다', 'Comparison particle:', "'More than expected.' 생각 (thought) + 보다 (than). Literally 'than thought.' Idiomatic: 생각보다 쉬워요 (easier than I thought). Common surprise marker."],
  ['생각보다 어렵더라고요', 'Comparison particle:', "'It was harder than expected (I found out).' 생각보다 + 어렵다 + -더라고요 (firsthand discovery). Evidential experience."],
  ['-보다', 'Comparison particle:', "'Than, compared to.' Comparative particle. 나보다 커요 (bigger than me). Korean comparatives use 보다, not a word like 'more.' Structure is different from English."],
  ['-나 보다', 'Comparison particle:', "'It seems / I guess' (evidence-based). 오는 것 같다보다 비가 오나 봐요 (I guess it's raining). Evidential inference from evidence."],
  ['-(ㄴ/는)다기보다', 'Comparison particle:', "'Rather than (saying it's) / more than.' 친구라기보다 가족이에요 (rather than a friend, they're family). Redirects a characterization."],

  // "used frequently" variant
  ['올해', 'Used frequently in everyday', "This year. Native Korean. Compound: 올 (this, archaic) + 해 (year). Contrast: 작년 (last year, Sino-Korean), 내년 (next year, Sino-Korean). Time-framing has mixed-origin vocab."],
  ['뭐', 'Used frequently in everyday', "What. Casual form of 무엇. 뭐 해요? (what are you doing?). Also used as placeholder hesitation: 뭐... 그냥... (well... just...). Versatile."],
  ['못', 'Used frequently in everyday', "'Can't' (inability). Pre-verb adverb. 못 가요 (can't go). Grammaticalizes inability vs 안 (choice). Same distinction as Romance-language 'pouvoir' vs modal rejection."],
  ['-지만', 'Used frequently in everyday', "'But / however.' Contrast ending attached to verb stem. 바쁘지만 가요 (I'm busy but I'll go). Soft-contrast within the same sentence."],
  ['그래서', 'Used frequently in everyday', "'So / therefore.' Sentence-initial connector. 비가 왔어요. 그래서 집에 있었어요 (It rained. So I stayed home). Result-marker at the start of the consequent clause."],
  ['아니면', 'Used frequently in everyday', "'Or / otherwise.' Connector for alternatives. 커피, 아니면 차 (coffee, or tea). Also: 'if not, then.' Essential for giving options."],

  // "Use 입다" variant (wearing)
  ['셔츠', 'Use 입다', "Shirt. English loanword. Worn on torso, so use 입다 (the torso verb). Korean has specific wearing verbs per body zone: 입다 (torso), 쓰다 (head), 신다 (feet), 하다 (accessories)."],
  ['코트', 'Use 입다', "Coat. English loanword. Torso-wearing, uses 입다. Korean winter fashion vocabulary is heavily English: 코트, 패딩 (padded jacket), 머플러 (scarf)."],
  ['재킷', 'Use 입다', "Jacket. English loanword. Torso-wearing (input), uses 입다. Related: 자켓 (alt spelling), 카디건 (cardigan)."],
  ['스웨터', 'Use 입다', "Sweater. English loanword. Uses 입다. Fashion loanwords common for Western-style garments; native Korean terms more common for traditional (한복, 저고리)."],
  ['티셔츠', 'Use 입다', "T-shirt. English loanword. The T is written in hangul as 티. Casual attire. Uses 입다 (torso verb)."],
];

let total = 0;
const LANG_ROOT = 'src/data/korean-v2';
for (const file of fs.readdirSync(LANG_ROOT)) {
  if (!file.endsWith('.js')) continue;
  const path = `${LANG_ROOT}/${file}`;
  let text = fs.readFileSync(path, 'utf8');
  let count = 0;
  for (const [trg, genericPrefix, newFact] of FACTS) {
    const escTrg = trg.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const escPrefix = genericPrefix.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    // Match: {type:"teach"...nl:"<trg>"...funFact:"<prefix...rest>"
    // The funFact content may contain escaped quotes \"
    const re = new RegExp(`(\\{type:"teach",(?:kind:"[^"]*",)?nl:"${escTrg}"[\\s\\S]*?funFact:")(${escPrefix}(?:[^"\\\\]|\\\\.)*)"`, 'g');
    if (!re.test(text)) continue;
    re.lastIndex = 0;
    text = text.replace(re, (_, pre) => { count++; return pre + newFact + '"'; });
  }
  if (count > 0) {
    console.log(`${path}: ${count}`);
    total += count;
    if (apply) fs.writeFileSync(path, text);
  }
}
console.log(`\nTotal: ${total}`);
if (!apply) console.log('Dry run.');
