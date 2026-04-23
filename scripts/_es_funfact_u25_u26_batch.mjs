#!/usr/bin/env node
// 48 Spanish cards u25-u26 (imperfect subjunctive + past conditional + third-conditional).

import fs from 'node:fs';

const apply = process.argv.includes('--apply');
const GENERIC = 'Spanish is the fourth most spoken language worldwide, with 500+ million native speakers.';

const FACTS = {
  'Si tuviera dinero, viajaría.': "Second conditional: si + imperfect subjunctive, main conditional. Hypothetical present. 'Tuviera' can also be 'tuviese' — both forms are correct.",
  'Si pudiera, lo haría.': "Classic second conditional. The -iera ending on pudiera marks imperfect subjunctive of poder. Simple, high-frequency: Spanish conditional songs and movies love this phrase.",
  'Si fuera posible, cambiaría de trabajo.': "'Fuera' covers ser AND ir in imperfect subjunctive. Context makes ser clear here ('if it were possible'). 'Cambiaría de trabajo' uses de, not el, after cambiar.",
  'Si estuviera en tu lugar': "Formal hypothesis. Contrast with idiomatic 'yo en tu lugar' (elliptical, no verb). 'Si estuviera en tu lugar' is explicit and formal.",
  'antes de que llegara': "Subjunctive after 'antes de que' even in past reference. Imperfect subjunctive llegara harmonizes with past context. Never indicative after 'antes de que.'",
  'como si fuera': "'Como si' always takes imperfect or pluperfect subjunctive. 'Como si fuera experto' (as if he were an expert). Evokes English 'as if' followed by past.",
  'sin que supiera': "'Sin que' always triggers subjunctive. 'Supiera' is imperfect subjunctive of saber with the irregular sup- stem.",
  'a menos que viniera': "'A menos que' always subjunctive. 'Viniera' imperfect subjunctive of venir. Past-time version of 'a menos que venga' (unless he comes).",
  'Ojalá pudiera': "'Ojalá' + imperfect subjunctive = wish about the present (unrealistic). 'Ojalá pudiera' — I wish I could. Unreachable hope.",
  'Ojalá fuera más fácil': "'Fuera' here is clearly ser. 'I wish it were easier.' Unrealized wish about current state.",
  'Ojalá estuviera aquí': "Estar imperfect subjunctive 'estuviera.' Wish about absence. 'Ojalá estuviera aquí' — I wish he/she were here. Classic longing phrase.",
  'Ojalá no tuviera que trabajar': "Tener que + infinitive in subjunctive: 'no tuviera que trabajar.' Subjunctive expresses hypothetical non-work. Strong longing register.",
  'Si hubiera sabido': "Third conditional: si + pluperfect subjunctive. Contrary-to-past-fact. 'Si hubiera sabido' — if only I had known (but I didn't).",
  'Si no fuera por ti': "Set phrase. 'If it weren't for you.' Can continue: 'si no fuera por ti, no estaría aquí.' Expresses gratitude or consequence-avoidance.",
  'Si pudiera volver atrás': "Hypothetical of poder. 'Volver atrás' (go back in time). Romantic or regretful register.",
  'Me gustaría que fuera diferente': "Conditional wish clause requiring subjunctive. 'Fuera' for the hypothetical state. Common therapy-speak: 'quisiera que fuera diferente.'",
  'Habría sido mejor si': "Past conditional (habría sido) + third-conditional si-clause. Typical regret structure. 'Habría sido mejor si hubiera...' — would have been better if I had...",
  'habría hablado': "Past conditional (conditional perfect). 'Habría + past participle.' Expresses would-have-done. 'Habría hablado' — I would have spoken.",
  'habrías comido': "Second-person past conditional. 'Habrías comido' — you would have eaten. Pairs with a third-conditional si-clause.",
  'habría vivido': "Third-person past conditional. 'Habría vivido' — he would have lived. The 'habría' auxiliary stays invariable; only the subject controls agreement.",
  'habríamos viajado': "First-person plural past conditional. Accent on í of habríamos marks the correct stress. 'Habríamos viajado' — we would have traveled.",
  'habrían llegado': "Third-person plural past conditional. 'Habrían llegado' — they would have arrived. Conditional perfect is invariable in past participle form (no gender/number agreement).",
  'hubiera hablado': "Pluperfect subjunctive (yo). Used in third-conditional si-clauses and after wishes. 'Si hubiera hablado' — if I had spoken.",
  'hubieras comido': "Second-person pluperfect subjunctive. 'Hubieras comido' — you had eaten (in a subjunctive clause). Paired with habrías in third conditional.",
  'hubiera vivido': "'Hubiera' = imperfect subjunctive of haber. Plus past participle = pluperfect subjunctive. 'Hubiera vivido' — he had lived (hypothetically).",
  'hubiéramos sabido': "Nosotros pluperfect subjunctive. Accent on hubiéramos. 'Hubiéramos sabido' — we had known. Note: alternative -iese form (hubiésemos) is equally valid.",
  'hubieran venido': "Third-person plural pluperfect subjunctive. 'Hubieran venido' — they had come. Wait, not that they had come in past reality, but that they had come in a hypothetical.",
  'Si hubiera estudiado, habría aprobado.': "Classic third conditional. Si + pluperfect subjunctive, past conditional. Perfect regret sentence: 'if I had studied, I would have passed.'",
  'Si hubiera llovido, no habríamos ido a la playa.': "Negative past conditional. Both clauses are counter-factual. 'No habríamos ido' — we wouldn't have gone.",
  'Si hubieras llegado antes, habrías conocido a mi hermana.': "Second-person third conditional with personal 'a' before 'mi hermana' (conocer requires personal 'a').",
  'Si no hubiera perdido el tren, habría llegado a la reunión.': "Double counter-factual: didn't lose the train, would have arrived. Third conditional with 'no hubiera' negation.",
  'Ojalá hubiera estudiado más.': "Pluperfect ojalá = past regret. 'Ojalá hubiera estudiado' — I wish I had studied (but I didn't). The full regret flavor.",
  'Ojalá no hubiera dicho eso.': "Negative past regret. 'Ojalá no hubiera dicho eso' — I wish I hadn't said that. Every language has this emotional payload; Spanish packs it into one word ('ojalá').",
  'Ojalá hubiera ido a la universidad.': "Life-path regret. The pluperfect subjunctive maps neatly to English 'I wish I had + past participle.'",
  'Ojalá hubiéramos viajado juntos.': "Nosotros pluperfect subjunctive. 'Ojalá hubiéramos viajado juntos' — I wish we had traveled together. Touching nostalgia register.",
  'Ojalá hubiera sabido antes.': "The ubiquitous 'I wish I had known.' Spanish compresses it beautifully: 'ojalá hubiera sabido.' Four words total in Spanish, five in English.",
  'Podrías haber llamado.': "Modal + haber + participle. Past hypothetical ability. 'Podrías haber llamado' — you could have called. The 'haber' forms the perfect infinitive.",
  'Deberías haber venido.': "Should-have structure. 'Deberías haber + past participle.' Common reproach or regret.",
  'Podría haber sido peor.': "Consolatory phrase. 'Could have been worse.' Spanish uses 'podría haber' + participle exactly parallel to English 'could have.'",
  'No deberías haber dicho eso.': "Negative deber + haber + participle. 'You shouldn't have said that.' Criticism of past action.",
  'Tendría que haber preguntado.': "'Tener que' in conditional + haber + participle. 'I should/would have had to ask.' Slightly stronger obligation feel than 'debería haber.'",
  '¿Qué habría pasado si...?': "Question opener for hypothetical past. 'Pasar' here means 'to happen.' Triggers a third-conditional reflection: 'si + pluperfect subjunctive.'",
  'Todo habría sido diferente.': "Past conditional of ser. 'Everything would have been different.' Famous trope in fiction and self-reflection.",
  'Si no hubiera existido el internet, la vida habría sido muy distinta.': "Complex third conditional involving abstract hypothesis about a historical absence. 'Distinta' = different (synonym of 'diferente').",
  'Nunca habría imaginado este resultado.': "'Nunca' + past conditional. Strong past hypothetical surprise. 'I never would have imagined this outcome.' Very common reaction phrase.",
  'Si tengo tiempo, iré al gimnasio.': "First conditional: si + indicative present + future. Real possibility. 'Si tengo tiempo' — if I have time (and I might).",
  'Si tuviera tiempo, iría al gimnasio.': "Second conditional: si + imperfect subjunctive + conditional. Hypothetical present. 'Si tuviera tiempo' — if I had time (but I don't).",
  'Si hubiera tenido tiempo, habría ido al gimnasio.': "Third conditional: si + pluperfect subjunctive + past conditional. Contrary to past fact. 'Si hubiera tenido' — if I had had (but I didn't).",
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
