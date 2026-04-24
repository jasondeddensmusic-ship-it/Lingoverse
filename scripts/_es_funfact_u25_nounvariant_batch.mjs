#!/usr/bin/env node
// 17 Spanish cards u25 (imperfect subjunctive forms, masc/fem variant).

import fs from 'node:fs';

const apply = process.argv.includes('--apply');
const GENERIC = 'Spanish nouns are either masculine or feminine. The ending usually gives it away.';

const FACTS = {
  'hablara': "Imperfect subjunctive, yo form. -ar verb gets -ara. Spelled 'hablara' (no accent). Alt form: 'hablase' (interchangeable but less common in speech).",
  'hablaras': "Tú form of imperfect subjunctive. 'Hablaras' — you would speak (hypothetical). Used after si-clauses: 'si hablaras español...'.",
  'habláramos': "Nosotros form. Accent on á to preserve stress. The alternative -ásemos form exists (hablásemos). Latin American favors -ara; Spain uses both.",
  'hablaran': "Ellos/ustedes. 'Hablaran' — they would speak. Note: one 'r,' not double. Contrast with 'hablarán' (future with accent on á).",
  'trabajara': "-ar imperfect subjunctive. Yo form. 'Si trabajara más, ganaría más' — If I worked more, I would earn more. Core second-conditional structure.",
  'estudiara': "Yo form. 'Quería que estudiara' — he wanted me to study (past). Used when the main verb is past and triggers subjunctive.",
  'comiera': "-er verb imperfect subjunctive. Yo/él/ella share this form. 'Si comiera menos...' — if I ate less. Alt: comiese.",
  'viviera': "-ir verb same endings as -er in subjunctive. 'Si viviera en Madrid, hablaría español todos los días.' Classic hypothetical statement.",
  'escribiera': "-ir regular. 'Quería que escribiera la carta' (he wanted me to write the letter). Reported-speech past demands imperfect subjunctive.",
  'aprendiera': "Yo/él form. 'Era importante que aprendiera' (it was important that I learned). Past impersonal + subjunctive pattern.",
  'entendiera': "Yo/él form of entender. Note: stem-change e→ie stays ONLY in present. Imperfect subjunctive is regular: entendiera, not 'entiendiera.'",
  'fuera': "Irregular. Same form for ser AND ir in imperfect subjunctive. 'Fuera' covers both. 'Si fuera rico' (if I were rich), 'si fuera al cine' (if I went to the movies). Context clarifies.",
  'tuviera': "Irregular, tener. Stem: 'tuv-' + -iera. Very high frequency: 'si tuviera tiempo' (if I had time). Alt: tuviese.",
  'hiciera': "Irregular, hacer. Stem: 'hic-' + -iera. 'Si hiciera buen tiempo' (if the weather were good). Weather hypotheticals constantly.",
  'pudiera': "Irregular, poder. Stem: 'pud-' + -iera. 'Si pudiera volar' (if I could fly). Maps to English 'if I could' structure.",
  'dijera': "Irregular, decir. Stem: 'dij-' + -era (special rule: -era not -iera after 'j'). Same rule for traer → trajera, producir → produjera.",
  'supiera': "Irregular, saber. Stem: 'sup-' + -iera. 'Si supiera...' — if I knew... Regret or hypothetical. Shared irregularity with preterite (supe, supiste).",
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
