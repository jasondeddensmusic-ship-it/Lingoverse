#!/usr/bin/env node
// 31 Spanish cards in u22 (gerunds + progressive tenses + duration).

import fs from 'node:fs';

const apply = process.argv.includes('--apply');
const GENERIC = 'Spanish is the fourth most spoken language worldwide, with 500+ million native speakers.';

const FACTS = {
  'hablando': "-ando is the regular -ar gerund ending. Same function as English -ing. Spanish gerunds never carry tense — they work with estar/seguir/llevar to form compound progressive-like aspects.",
  'comiendo': "-iendo is the regular -er gerund ending. Equivalent of English -ing. 'Comiendo' works for male/female subjects, singular or plural — the gerund never inflects.",
  'escribiendo': "-iendo is also the -ir gerund ending. So 'escribiendo' (from escribir) and 'comiendo' (from comer) share the same suffix. Spanish merged the two in gerunds but keeps them distinct elsewhere.",
  'caminando': "Regular -ar gerund of caminar. Note: 'caminar' also works as a noun when nominalized with an article ('el caminar' = the act of walking). Gerund = adverbial; nominalized infinitive = noun.",
  'bebiendo': "-iendo from beber. The gerund pairs with estar for current action: 'estoy bebiendo' (I'm drinking). Note Spanish present tense often covers ongoing action without needing the progressive.",
  'leyendo': "Irregular: i → y between vowels. Leer → leyendo (not leiendo). Same phonological rule as the third-person preterite (leyó). Also affects caer → cayendo, oír → oyendo.",
  'durmiendo': "Stem change o → u in the gerund: dormir → durmiendo. Same pattern as morir → muriendo, poder → pudiendo. Classic -ir stem-change family.",
  'diciendo': "Decir gerund: e → i. 'Decir → diciendo,' not 'deciendo.' Other e→i: pedir (pidiendo), servir (sirviendo), repetir (repitiendo). -ir verbs only, never -ar/-er.",
  'yendo': "Ir gerund: one of Spanish's oddest forms. 'Yendo' (going). Looks nothing like ir. Historical: old Latin 'eundo,' shortened in medieval Spanish. The 'y' gets the dieresis-free treatment between vowels.",
  'oyendo': "Oír gerund. The i→y rule (like leyendo) plus the stem modification. 'Oyendo' appears in common phrases: 'está oyendo música' (he's listening to music).",
  'pidiendo': "Pedir gerund with e→i stem change. Same pattern as diciendo, sirviendo. Note: asking questions uses 'preguntar,' not 'pedir'; 'pedir' is requesting/ordering.",
  'Estoy hablando': "Present progressive: estar (conjugated) + gerund. For actions happening right NOW. Spanish uses simple present more often than English would; progressive is reserved for explicit immediacy.",
  '¿Qué estás haciendo?': "Second-person progressive. Common phone opener. Native speakers often compress to '¿qué haces?' — but the progressive adds vividness and 'right now' emphasis.",
  'Está lloviendo': "Weather in progressive. Spanish also uses simple 'llueve' for the same meaning. The progressive adds 'at this moment' force. Identical to English rain 'it's raining'/'it rains'.",
  'Están jugando': "Third-person plural progressive. The gerund stays invariable; only 'estar' conjugates. 'Están jugando' = they are playing (all genders, multiple kids, same form).",
  'Estaba durmiendo': "Past progressive = imperfect of estar + gerund. 'Estaba durmiendo' (I was sleeping). Distinct from imperfect alone ('dormía' = I slept/used to sleep). Adds 'in the middle of.'",
  'Estaba cocinando cuando...': "Past progressive + cuando triggers a preterite interruption. 'Estaba cocinando cuando llegó.' This is the most common pattern for describing interrupted past actions in storytelling.",
  'Estaban cenando': "Third-person plural imperfect progressive. 'Estaban cenando' — they were having dinner. Spanish cena comes late (9-10pm in Spain), so this phrase often sets a nighttime scene.",
  'Estábamos viendo una película': "Nosotros imperfect progressive. Accent on í distinguishes 'estábamos' (imperfect) from 'estuvimos' (preterite). A single accent changes the tense — and the meaning.",
  'Sigo estudiando': "'Seguir + gerund' means 'keep doing' or 'still doing.' 'Sigo estudiando' = I'm still studying / I keep studying. More natural than 'todavía estudio' in many contexts.",
  'Sigue lloviendo': "Third-person of seguir + gerund. Weather often uses this pattern: 'sigue lloviendo' (it's still raining). A very common pairing.",
  'Continúo trabajando': "'Continuar + gerund' = to continue doing. Synonym of 'seguir + gerund' but more formal. Note the accent on 'continúo' (I continue), distinguishing it from 'continuo' (continuous, adjective).",
  'Seguimos intentando': "'Seguir intentando' = to keep trying. The yo/nosotros forms of seguir are irregular: sigo/seguimos. Encouraging phrase for struggles: '¡Sigue intentando!' (keep trying!).",
  'Llevo dos horas esperando': "'Llevar + time + gerund' = 'have been doing X for Y time.' Spanish equivalent of English present perfect progressive. 'Llevo dos horas esperando' — I've been waiting two hours.",
  'Lleva tres años viviendo aquí': "Third-person of the llevar-gerund pattern. 'Lleva tres años viviendo aquí' — he/she has been living here for three years. The 'viviendo' emphasizes ongoing action.",
  '¿Cuánto tiempo llevas estudiando?': "Duration question. 'Cuánto tiempo llevas + gerund' is the standard way to ask 'how long have you been [doing X].' Spanish doesn't have a direct perfect progressive; llevar fills the role.",
  'Llevamos todo el día trabajando': "Nosotros version of the llevar-gerund pattern. 'Todo el día' (all day) — a common duration phrase. Construction: llevar (conjugated) + duration + gerund.",
  'Llevan media hora discutiendo': "Third-person plural. 'Llevan media hora discutiendo' — they've been arguing for half an hour. 'Discutir' means 'to argue' in Spanish, not 'to discuss' (which is 'hablar/conversar').",
  'Estudio español': "Simple present can cover both 'I study' (habitual) and 'I am studying' (ongoing, less emphatic). Spanish often uses simple present where English requires progressive.",
  'Estoy estudiando español ahora': "Present progressive with 'ahora' emphasizes current-moment action. The 'ahora' (now) reinforces the right-this-moment sense. Without it, simple present 'estudio' often suffices.",
  'Estoy viviendo con mis padres': "Progressive for TEMPORARY state. 'Estoy viviendo' implies 'for now' — not my usual living situation. Simple present 'vivo con mis padres' sounds more permanent. A subtle distinction.",
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
