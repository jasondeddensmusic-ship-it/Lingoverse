#!/usr/bin/env node
// 37 Spanish cards in units 16-17.
// u16: conditional + hypothetical si-clauses
// u17: subjunctive triggers

import fs from 'node:fs';

const apply = process.argv.includes('--apply');
const GENERIC = 'Spanish is the fourth most spoken language worldwide, with 500+ million native speakers.';

const FACTS = {
  // u16 conditional
  'Me gustaría comer': "Conditional of 'gustar.' Literally 'it would be pleasing to me to eat.' Much more polite than direct 'quiero.' Standard restaurant-ordering phrase.",
  'Te gustaría': "The 'te' is indirect object (to you), not subject. Gustar inverts subject and object: the thing you like is actually the grammatical subject, hence 'me gusta la pizza' = 'pizza pleases me.'",
  'Nos gustaría': "First-person plural. 'Nos' indirect object. Native speakers default to conditional 'gustaría' for hypothetical desires (we'd like to travel) and present 'gusta' for real preferences (we like coffee).",
  'Les gustaría': "Third-person plural OR formal plural 'you all.' Context disambiguates. 'Les' covers both, unlike English which splits into 'they' and 'y'all.'",
  '¿Podría ayudarme?': "Conditional of 'poder' (podr-). The politeness shift from 'puedes ayudarme' (can you) to 'podrías ayudarme' (could you) is identical to English. One of the cleaner parallel constructions.",
  '¿Sería posible...?': "Conditional of 'ser' (ser-). Used in formal requests to soften. 'Es posible' is neutral; 'sería posible' signals delicacy. Classic phone customer-service opener.",
  '¿Tendría tiempo?': "Conditional of 'tener' (tendr- with d-insertion). Similar to asking 'would you have a moment' in English. Both languages add tentativeness through the conditional mood.",
  'Me vendría bien': "Literally 'it would come to me well.' Idiomatic 'it would suit me.' The verb 'venir' here means 'to come' in a metaphorical sense — a fit or match.",
  'Si tuviera dinero, viajaría': "Classic second-conditional structure: si + imperfect subjunctive, then conditional. 'If I had money (hypothetical), I would travel.' A contrary-to-fact statement about the present.",
  'Si pudiera, estudiaría': "Same second-conditional. 'Pudiera' is the imperfect subjunctive of poder. The -iera ending marks hypotheticals. Alternative -iese form is equally correct but less common in speech.",
  'Si viviera en España, hablaría español': "The counter-factual: I don't live in Spain, so I don't speak Spanish. Spanish forces you to grammatically encode the hypothesis, unlike English which uses the same 'if I lived.'",
  'Si fuera posible': "'Fuera' is imperfect subjunctive of ser AND ir. Ambiguity: context clarifies. In 'si fuera posible' (if it were possible), it's clearly ser.",
  'Si supiera la respuesta': "Supiera is imperfect subjunctive of saber. The switch to subjunctive stem su- rather than sab- marks irregular conjugation. Saber/poder/querer all shift stems in this mood.",
  'Si no lloviera, saldríamos': "Negative second-conditional. 'Lloviera' = imperfect subjunctive of llover. 'Saldríamos' = conditional of salir, with d-insertion (sal-dr-íamos).",
  'Me gustaría ser médico': "Aspirational conditional. Common career-talk phrase. Note: ser médico not 'ser un médico' — professions drop the indefinite article in Spanish after ser.",
  'Tendría una casa grande': "'Tendría' = conditional of tener (tendr-). Aspirational/hypothetical house. Indefinite 'una' because it's an unspecified big house, not a particular one.",
  'Trabajaría desde casa': "'Trabajaría' is conditional of trabajar. Regular -ar conditional: root + -aría, -arías, -aría, -aríamos, -arían. 'Desde casa' drops the article — a fixed expression.",
  'Sería feliz': "'Sería' = conditional of ser (ser-). With 'feliz' (happy) it expresses hypothetical emotional state. The 'z' in feliz pluralizes to -ces: feliz → felices.",
  '¿No sería mejor...?': "Conditional used for softened suggestions. The 'no' tags on a negative-polarity question. Spanish suggestions chain easily: '¿No sería mejor si...?' is a natural bridge into hypotheticals.",
  'En un mundo ideal, todos hablaríamos español': "Set-up + conditional. 'En un mundo ideal' establishes a hypothetical frame. Also works: 'Idealmente...' — both signal upcoming conditional statements.",

  // u17 subjunctive triggers
  'Quiero que': "The most common subjunctive trigger. English uses the infinitive ('I want you to speak'); Spanish demands a que-clause with subjunctive ('quiero que hables'). No way around it in Spanish.",
  'Espero que': "Hope-expression trigger. Pairs with subjunctive. 'Espero que vengas' (I hope you come). In restaurant Spanish, closing a sale: 'Espero que le haya gustado.'",
  'Es necesario que': "Impersonal necessity expression. All 'es + adjective + que' triggers subjunctive: es necesario, es importante, es posible. The impersonal 'es' doesn't refer to a specific subject.",
  'No creo que': "Negated belief → subjunctive. 'Creo que' (without 'no') takes indicative. This asymmetry surprises English speakers: 'I think he's here' vs 'I don't think he's here' both feel alike in English.",
  'Necesito que': "Active form of 'es necesario que.' More personal. 'Necesito que vengas' (I need you to come) vs 'es necesario que vengas' (it's necessary that you come). Same subjunctive effect.",
  'Pido que': "Request verb. 'Pedir' triggers subjunctive in its complement. Also: solicitar, demandar, rogar. All 'asking' verbs force subjunctive: 'Pido que me escuches' (I ask that you listen to me).",
  'Prefiero que': "Preference verb + subjunctive. 'Prefiero que comas en casa' (I prefer that you eat at home). Preferir, gustar-que-subj, detestar-que-subj — all emotion/preference verbs force subjunctive.",
  'Me alegra que': "Emotion expression. 'Alegrar' (to make happy) + reflexive 'me.' Literally 'it makes me happy that.' All positive/negative emotions + que take subjunctive.",
  'Me molesta que': "'Molestar' (to bother) in third-person. 'It bothers me that.' Same grammatical structure as 'me alegra que' — emotion + que + subjunctive.",
  'Me sorprende que': "'Sorprender' (to surprise). 'Me sorprende que llegues tarde' (it surprises me that you arrive late). Indirect expressing: the surprise comes TO the speaker (me).",
  'Es triste que': "Impersonal emotion + que + subjunctive. Similar to es necesario que. 'Es triste que no vengas' (it's sad that you're not coming).",
  'Dudo que': "Doubt verb + subjunctive. 'Dudar' contrasts with 'saber' (know): saber takes indicative (certainty), dudar takes subjunctive (uncertainty). Grammatical mood maps to epistemic stance.",
  'No es verdad que': "Negated truth-claim + subjunctive. 'Es verdad que viene' (indicative — asserting truth) vs 'no es verdad que venga' (subjunctive — denying truth).",
  'Es imposible que': "Impossibility = hypothetical = subjunctive. Same rule as 'es posible que' + subjunctive. Impersonal + adjective + que = always subjunctive.",
  'Es importante que': "Impersonal valuation. All impersonal 'es + adjective + que' triggers subjunctive, even for positive/neutral adjectives. Importance, necessity, naturalness — all force subjunctive.",
  'Es mejor que': "Comparative opinion. 'Mejor' is the irregular comparative of 'bueno.' Subjunctive because opinion-expression, not fact-assertion. 'Es mejor que vengas' (it's better that you come).",
  'Es posible que': "Possibility = uncertain future = subjunctive. Contrast with 'es seguro que' (it's certain) which takes indicative. Grammatical mood reflects epistemic certainty.",
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
