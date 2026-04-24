#!/usr/bin/env node
// 30 Spanish cards u10 (irregular preterite forms — 'verbs encode subject' filler).

import fs from 'node:fs';

const apply = process.argv.includes('--apply');
const GENERIC = 'Spanish verbs encode the subject in their ending, so pronouns are often dropped.';

const FACTS = {
  'fui': "Shared between ser AND ir in preterite. 'Fui profesor' (I was a teacher, ser) vs 'fui al parque' (I went to the park, ir). One of Spanish's most used ambiguous forms.",
  'fuiste': "Same ser/ir ambiguity as 'fui.' '¿Fuiste tú?' can mean 'Was it you?' (ser) or 'Did you go?' (ir). Context or continuation disambiguates.",
  'fue': "Third-person preterite of ser/ir. '¿Cómo fue?' (How was it? / How did it go?). No accent, unlike the Portuguese cognate 'fôi.' Spanish dropped the Latin accent mark.",
  'fuimos': "First-person plural of ser/ir. 'Fuimos al cine' (we went) / 'fuimos los mejores' (we were). Invariable structure; ambiguity resolved by context.",
  'fueron': "Third-person plural of ser/ir. 'Fueron los ganadores' (they were the winners) / 'fueron a la fiesta' (they went to the party). Two of Spanish's highest-frequency verbs share this form.",
  'tuve': "Preterite of tener, yo form. Irregular stem: 'tuv-'. Spanish irregular preterites lack accents on yo/él forms (contrast regular: hablé, habló WITH accents).",
  'tuviste': "Tú preterite of tener. '¿Tuviste tiempo?' — Did you have time? Common question opener when reviewing someone's day.",
  'tuvo': "Él/ella/usted preterite. 'Tuvo suerte' — he/she had luck. Tener + nouns captures many English 'to be' expressions (tener suerte, tener hambre).",
  'hice': "Preterite of hacer, yo form. Irregular 'hic-' stem, and '-e' ending (not the typical '-é'). '¿Qué hice yo?' — what did I do? Maps to English 'did' + verb.",
  'hizo': "Third-person preterite of hacer. Note the z (not c) — Spanish phonology: 'c' before 'o/u' sounds like k, so the spelling shifts to z for /θ/ sound.",
  'estuve': "Irregular preterite of estar, yo form. Stem 'estuv-'. Used for completed past states or locations: 'estuve en Madrid.' Contrast imperfect 'estaba' (ongoing past).",
  'estuvo': "Third-person. 'Estuvo increíble' — it was incredible. Estuvo for a finished experience; era/fue for identity-based. ESTAR for state, SER for essence.",
  'estuvimos': "First-person plural. 'Estuvimos ahí dos horas' — we were there two hours. Estuvimos marks the entire finished duration.",
  'pude': "Preterite of poder, yo form. Stem 'pud-'. 'No pude llamar' — I couldn't call (at a specific moment). Contrast 'no podía llamar' (imperfect: couldn't as an ongoing state).",
  'pudo': "Third-person. 'Pudo ganar' — he managed to win / he could win. Spanish preterite of poder often implies 'managed to' success, distinct from the imperfect 'podía' (was able in general).",
  'puse': "Preterite of poner, yo form. 'Lo puse en la mesa' — I put it on the table. Stem 'pus-' with -e ending. Small family of preterites with this pattern.",
  'puso': "Third-person. 'Puso la música' — he turned on / put on the music. Very broad semantic range: put, place, set, become, turn on.",
  'supe': "Preterite of saber, yo form. Spanish has two senses: 'supe' often means 'I found out' (the starting moment of knowing). Contrast 'sabía' (imperfect) = I knew all along.",
  'supo': "Third-person. 'Supo la verdad' — he found out the truth. Preterite of saber marks the transition into knowing, not the continuous state.",
  'dije': "Preterite of decir, yo form. Stem 'dij-'. 'Le dije la verdad' — I told him the truth. Spanish reports speech with preterite frequently, especially for specific moments.",
  'dijo': "Third-person. 'Dijo que no' — he said no. Note: subsequent reported speech typically shifts to indirect: 'dijo que no venía' (he said he wasn't coming, with imperfect).",
  'dijeron': "Third-person plural. 'Dijeron la verdad' — they told the truth. Pattern: decir in preterite takes -eron (not -ieron) because of the 'j' phonological rule.",
  'quise': "Preterite of querer, yo form. Stem 'quis-'. Can also mean 'I tried to' — a special sense: 'quise abrir la puerta' (I tried to open the door / I wanted to but...).",
  'quiso': "Third-person. Often conveys attempt: 'quiso decir' (he tried to say / he meant). Preterite of querer is rich with interpretive nuance.",
  'vine': "Preterite of venir, yo form. Stem 'vin-'. 'Vine a verte' — I came to see you. Short, high-frequency, irregular.",
  'vino': "Third-person. 'Vino ayer' — he came yesterday. Note: 'vino' also means 'wine' (different noun). Context disambiguates, though homographs like this are a fun learner trap.",
  'di': "Preterite of dar, yo form. Just 'di' — minimal, irregular. 'Le di un regalo' — I gave him a gift. Spanish has a handful of these tiny irregular preterites (vi, fui, di, hui).",
  'dio': "Third-person. 'Dio un discurso' — he gave a speech. Also used idiomatically: 'le dio igual' (it was the same to him / he didn't care).",
  'traje': "Preterite of traer, yo form. Stem 'traj-'. Like decir, takes -eron not -ieron in third-plural (trajeron). The 'j' absorbs the 'i' in Spanish phonology.",
  'trajo': "Third-person. 'Trajo una tarta' — he brought a cake. The 'j' + 'o' combination is distinctive for this verb family.",
};

let total = 0;
const LANG_ROOT = 'src/data/spanish-v2';
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
