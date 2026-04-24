#!/usr/bin/env node
// Dutch closest-pair u9-u14 (27 cards).

import fs from 'node:fs';

const apply = process.argv.includes('--apply');
const GENERIC = 'Dutch and English are the closest major language pair in the world. Many words share common roots.';

const FACTS = {
  'volgende week': "Next week. 'Volgende' (following) from 'volgen' (to follow). Same root as English 'follow.' 'Volgende week' = 'the following week.'",
  'vroeger': "In the past / used to. Comparative of 'vroeg' (early). Literally 'earlier' — metaphorically extended to 'in earlier times.'",
  'wilde / wilden': "Wanted (past). Past tense of 'willen.' 'Wilde' (singular), 'wilden' (plural). Modal-verb past. Irregular, like English 'would.'",
  'leuk': "Fun / nice. Native Dutch. No clean English equivalent — covers fun, pleasant, enjoyable, nice. One of the most-used Dutch adjectives. Instant Dutch-ness.",
  'uiteindelijk': "Finally / in the end. Compound: 'uit' (out) + 'ein' (end) + 'delijk' (-ly). Literally 'out-end-ly.' Narrative resolution marker.",
  'de bliksem': "Lightning. De-word. Native Germanic. Cognate with English 'blink' — both from the flash concept. Storm vocabulary: bliksem + donder (thunder).",
  'had gedaan': "Had done. Pluperfect of 'doen.' 'Had' (past of hebben) + 'gedaan' (past participle). Same structure as English 'had done.'",
  'btw': "VAT (value added tax). Abbreviation: Belasting over Toegevoegde Waarde. Dutch consumer prices INCLUDE btw by default. Note: also used as internet slang for 'by the way' in English.",
  'zou kunnen': "Could / might. 'Zou' (would) + 'kunnen' (to be able). Conditional modal stack. 'Dat zou kunnen' (that could be) — classic Dutch hedge.",
  'als ik ... was/zou zijn': "'If I were...' Counterfactual conditional. Dutch uses 'was' or 'zou zijn' for were-clauses, similar to English irrealis 'were.'",
  'beschadigd': "Damaged. Past participle of 'beschadigen.' 'Be-' prefix (intensifier) + 'schade' (damage) + 'igen' (to make). Literally 'damage-made.' Insurance/retail vocab.",
  'zuinig': "Thrifty / frugal. Native Dutch. Stereotypical Dutch virtue — Dutch-ness famously involves frugality. 'Hollandse zuinigheid' is a cultural touchstone.",
  'volgens mij': "In my opinion. Literally 'according to me.' Everyday-opinion marker. Shorter and softer than 'ik vind' (I think/find).",
  'ten eerste': "Firstly. Archaic genitive: 'ten' (to the) + 'eerste' (first). Essay-writing connector. Parallel: ten tweede (secondly), ten derde (thirdly).",
  'echter': "However / but (formal). Stronger and more formal than 'maar' (but). Often at the start of a sentence in written Dutch. Contrast marker.",
  'aan de andere kant': "On the other hand. Literally 'on the other side.' Same structure as English. Essay/debate vocabulary.",
  'doe maar normaal': "'Just act normal / don't show off.' Quintessentially Dutch saying — cultural anti-boasting norm. 'Doe maar gewoon, dan doe je al gek genoeg.' (Act normal, that's crazy enough).",
  'er is / er zijn': "There is / there are. 'Er' (expletive there) + is/zijn. Dutch uses 'er' like English uses 'there' in 'there is.' Always required in existence constructions.",
  'er ligt': "There lies / there is (lying). Dutch distinguishes 'lying' vs 'sitting' vs 'standing' for inanimate existence. English collapses this — Dutch grammaticalizes it.",
  'er zit': "There sits / there is (sitting/inside). Used for things in containers or in seated positions. 'Er zit iets in' (there's something inside).",
  'er (locative)': "There (unstressed, locative). The 'er' marks location without specifying where. Pure existential space-holder. Fossilized from older 'daar' (there).",
  'ermee': "With it. Pronominal adverb. 'Er' + 'mee' (with). Used when the referent is inanimate. For animates: 'met hem/haar' (with him/her).",
  'er (partitive)': "'Of them / some' (partitive). Unique Dutch function: 'Ik heb er drie' (I have three of them). No direct English equivalent — Dutch counts using 'er.'",
  'er wordt': "(Impersonal passive: 'it is being...') Dutch impersonal passive. 'Er wordt gedanst' (there is dancing, people are dancing). English can't match this compactness.",
  'er wordt gefietst': "Cycling is done / people cycle. Impersonal passive with 'er.' Leaves agent unspecified — 'people in general' do this.",
  'er wordt gewerkt': "Work is being done. Same impersonal-passive pattern. Extremely common in Dutch signs and announcements.",
  'waarmee': "With what. Question-word pronominal adverb. 'Waar' (what) + 'mee' (with). Same pattern as 'ermee,' but for questions.",
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
