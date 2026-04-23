#!/usr/bin/env node
// 22 Spanish cards in units 19-20.
// u19: relative clauses, lo que
// u20: pluperfect, reported speech

import fs from 'node:fs';

const apply = process.argv.includes('--apply');
const GENERIC = 'Spanish is the fourth most spoken language worldwide, with 500+ million native speakers.';

const FACTS = {
  // u19
  'lo que quiero es paz': "'Lo que' nominalizes a whole clause. 'Lo que quiero' = 'what I want.' Combined with 'es' to restate: a common emphasis pattern. English mirrors: 'What I want is peace.'",
  'busco a alguien que hable español': "Indefinite antecedent + subjunctive. Because 'alguien' is unknown/nonexistent, 'hable' takes subjunctive. If the person were known (busco a la persona que habla), indicative.",
  'lo que habría hecho': "Past conditional: habría + past participle. Expresses what would have happened in an alternate past. 'What I would have done' — a perfect fit for third-conditional regret or hypothetical.",

  // u20 pluperfect
  'habia comido': "Pluperfect (pluscuamperfecto): había + past participle. Marks an action completed BEFORE another past action. 'Había comido cuando llegó' — I had eaten before he arrived.",
  'habias estudiado': "Second-person pluperfect. 'Habías estudiado antes del examen' — had you studied before the exam? The 'yo' and 'él' forms are identical (había); tú gets -s.",
  'habiamos llegado': "First-person plural pluperfect. Nosotros uses habíamos (with accent on í). 'Habíamos llegado temprano' — we had arrived early.",
  'habian terminado': "Third-person plural / ustedes pluperfect. Common in news reporting: 'los investigadores habían terminado el análisis' (the investigators had finished the analysis).",
  'todavia no': "Literally 'still not.' Used with pluperfect for 'had not yet' constructions. 'Todavía no había llegado' — he still hadn't arrived. Strong pluperfect trigger.",
  'cuando llegue': "Preterite of llegar. In pluperfect contexts, 'cuando + preterite' marks the moment relative to which the pluperfect action happened earlier. Always triggers hint at temporal layering.",

  // u20 reported speech / time clauses
  'antes de que': "Subjunctive trigger always. 'Antes de que + subjunctive': 'antes de que llegue' (before he arrives). Always, even when the event will definitely happen.",
  'despues de que': "Can take subjunctive OR indicative depending on whether the action is specific. Traditionally indicative (completed action), but modern usage often goes subjunctive by analogy with 'antes de que.'",
  'cuando ya habia': "'Cuando + pluperfect' marks the before-the-before: the earlier of two past moments. 'Cuando llegó, yo ya había comido' (by the time he arrived, I had already eaten).",
  'todavia no habia': "Negative pluperfect. Pairs with 'cuando' to mark non-completion at a past reference point. 'Todavía no había terminado cuando llegó' — hadn't finished yet when he arrived.",
  'dijo que': "Reported speech with indicative. The 'que' introduces indirect speech. Tense shifts apply: present→imperfect, preterite→pluperfect, future→conditional — called 'consecutio temporum.'",
  'me conto que': "Contar has broader meaning than English 'tell.' Covers count (números), story-telling (cuentos), relating events. In reported speech, always indicative: 'me contó que venía.'",
  'pregunto si': "Reported yes/no questions use 'si' + indicative. 'Preguntó si tenía dinero' — he asked whether I had money. No subjunctive because the asking happened as factual past event.",
  'pregunto que': "Reported wh-questions use 'que' + indicative. 'Preguntó qué quería' — he asked what I wanted. The 'qué' keeps its accent (mark of question word) even in indirect speech.",
  'presente a imperfecto': "Consecutio temporum rule 1: present tense becomes imperfect when the reporting verb is past. 'Digo que viene' (I say he's coming) → 'Dije que venía' (I said he was coming).",
  'indefinido a pluscuamperfecto': "Rule 2: preterite becomes pluperfect in past-anchored reported speech. 'Dice que llegó' → 'Dijo que había llegado.' The reported past is pushed one layer deeper.",
  'futuro a condicional': "Rule 3: future becomes conditional in past-anchored reported speech. 'Dice que vendrá' (he'll come) → 'Dijo que vendría' (he'd come). English uses 'would' similarly.",
  'Cuando era nino': "Imperfect 'era' sets the past backdrop for a narrative. Pairs naturally with pluperfect for 'había + done something before' layers. Classic storytelling construction.",
  'resulta que': "Discourse marker introducing surprise reveals in narratives. 'Resulta que era mi vecino' — it turns out he was my neighbor. Always takes indicative (the fact is now asserted).",
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
