#!/usr/bin/env node
// Dutch u13-u18 stem+ending variant (~41 cards).

import fs from 'node:fs';

const apply = process.argv.includes('--apply');
const GENERIC = 'Dutch verbs follow the stem + ending pattern. Find the stem, add the right ending.';

const FACTS = {
  // u13 — opinion/conjunctions
  'vinden': "To find / to think. Native Germanic. Cognate with English 'find.' Dutch uses 'vinden' for opinion: 'ik vind het leuk' (I find it nice = I think it's nice).",
  'denken': "To think (rationally). Cognate with English 'think' (Proto-Germanic 'thankjan'). Used for rational thought; 'vinden' is for subjective judgment.",
  'menen': "To hold the opinion / to mean. Native Germanic. Cognate with English 'mean' and German 'meinen.' Slightly more formal — intentional stance.",
  'het oneens zijn met': "To disagree with. Literally 'to be not-of-one-mind with.' 'Eens' (agreed) + 'on-' (not) = 'disagreed.' Transparent construction.",
  'hoewel': "Although / even though. Compound: 'hoe' (how) + 'wel' (well). Literally 'how-well.' Concessive conjunction.",
  'terwijl': "While / whereas. Native Dutch. Dual use: temporal (at the same time) and contrastive (whereas). Context decides.",
  'doordat': "Because (of the fact that). Factual causation. Compound: 'door' (through) + 'dat' (that). Stronger than 'omdat' for objective reasons.",
  'zodat': "So that / in order that. Compound: 'zo' (so) + 'dat' (that). Purpose connector. Triggers verb-final word order.",
  'tenzij': "Unless. From Middle Dutch 'ten ware si' (if it were not). Compact negative conditional.",
  'bovendien': "Moreover / besides. Compound: 'boven' (above) + 'dien' (archaic pronoun). Literally 'above that.' Additive connector.",

  // u14 — er-constructions
  'er staat': "There stands / there is (standing). Uses 'staan' for vertical inanimate existence. A lamp, a building, a chair — all 'staat.'",
  'er hangt': "There hangs / there is (hanging). Uses 'hangen' for suspended objects. A painting, a lamp from ceiling — all 'hangt.' Granular spatial description.",

  // u15 — purpose/infinitive/causatives
  'slagen': "To pass (an exam) / succeed. Native Germanic. 'Geslaagd zijn' (have succeeded/passed). Also: 'slagen in' (succeed in).",
  'afstuderen': "To graduate. Separable: 'af' (off/complete) + 'studeren' (to study). Literally 'to study-off' = complete studies. Academic vocabulary.",
  'om te': "In order to. Purpose marker. 'Om' + 'te' + infinitive. 'Om te leren' (in order to learn). Dutch requires 'om' where English drops it.",
  'zonder te': "Without (doing). Same structure as 'om te.' 'Zonder te vragen' (without asking). Systematic infinitive-clause connector.",
  'in plaats van te': "Instead of (doing). Fixed phrase. 'In plaats van' = 'in place of' + 'te' + infinitive.",
  'proberen te': "To try to. 'Proberen' + 'te' + infinitive. 'Ik probeer te leren' (I try to learn). Always with 'te' in Dutch — contrast English 'try learning' (no 'to').",
  'zitten te': "To be (doing) / sit and (do). Progressive-like construction. 'Ik zit te lezen' (I'm reading). Used for ongoing seated activity.",
  'staan te': "To be (doing) / stand and (do). Same progressive pattern, but standing. 'Hij staat te praten' (he's standing and talking).",
  'liggen te': "To be (doing) / lie and (do). Same progressive pattern, but lying. Dutch distinguishes body-position during actions.",
  'laten + infinitive': "To let / to have (something done). Causative. 'Ik laat de auto repareren' (I have the car repaired). Productive causative structure.",
  'laten vallen': "To drop (let fall). Literally 'let fall.' Causative compound. Same structure in English: 'let drop.' Transparent.",
  'laten zien': "To show (let see). Causative: 'let + see.' Very common in Dutch. Dutch often uses this where English uses the direct verb 'show.'",
  'had willen komen': "Had wanted to come. Pluperfect modal stack: 'had' + 'willen' + 'komen.' Three layers: past + modal + main verb. Complex but transparent.",
  'moet worden gemaakt': "Must be made. Passive modal: 'moet' (must) + 'worden' (become, passive aux) + 'gemaakt' (made, participle). Formal bureaucratic register.",

  // u17
  'huren': "To rent. Native Germanic. Cognate with English 'hire' (older meaning). Housing-market essential.",
  'kopen': "To buy. Cognate with English 'cheap' (originally 'to buy cheaply'). Same Germanic root, different modern meanings.",
  'opzeggen': "To cancel / give notice. Separable: 'op' (up) + 'zeggen' (to say). Literally 'say up' = announce termination. Housing/contract vocabulary.",
  'inrichten': "To furnish / set up. Separable: 'in' + 'richten' (to direct/aim). Literally 'direct inward' = arrange interior. Home-setup verb.",
  'inmiddels': "Meanwhile / by now. Compound: 'in' + 'midden' (middle) + 'els' (suffix). Literally 'in-middle-ly.' Time-bridging connector.",
  'aan wie': "To whom. 'Aan' (to) + 'wie' (who). Dative question. Dutch doesn't strand prepositions (unlike English), so 'aan' stays with 'wie.'",
  'overbieden': "To outbid. Separable: 'over' (over) + 'bieden' (to bid). Transparent compound. Real-estate vocabulary.",

  // u18 — reporting verbs
  'zeggen': "To say. Cognate with English 'say' and German 'sagen.' Most basic Germanic reporting verb.",
  'vragen': "To ask. Native Germanic. Cognate with English 'frain' (archaic 'ask') and German 'fragen.' Dutch preserved the verb where English replaced it with 'ask.'",
  'uitleggen': "To explain. Separable: 'uit' (out) + 'leggen' (to lay). Literally 'lay out.' Same metaphor as English 'explain' (ex-plain = flatten out).",
  'waarschuwen': "To warn. Compound: 'waar' (true/real) + 'schuwen' (to shun). Literally 'to make-shun-truly.' Native Germanic cognate relationship to English 'warn.'",
  'melden': "To report / notify. Cognate with English 'meld' (different modern meaning). Formal-register reporting verb.",
  'roddelen': "To gossip. Native Dutch. Onomatopoeic or descriptive origin — the 'roddel' (gossip) from the sound of chatter. Informal.",
  'blijken': "To turn out / to appear. Native Germanic. 'Het blijkt dat...' (it turns out that...). Evidential connector in narrative.",
};

let total = 0;
const LANG_ROOT = 'src/data/dutch-v2';
for (const file of fs.readdirSync(LANG_ROOT)) {
  if (!file.endsWith('.js')) continue;
  const path = `${LANG_ROOT}/${file}`;
  let text = fs.readFileSync(path, 'utf8');
  let count = 0;
  for (const [trg, newFact] of Object.entries(FACTS)) {
    const escTrg = trg.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const re = new RegExp(`(\\{type:"teach",trg:"${escTrg}"[\\s\\S]*?funFact:")${GENERIC.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(")`, 'g');
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
