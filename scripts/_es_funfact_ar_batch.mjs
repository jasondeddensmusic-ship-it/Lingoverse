#!/usr/bin/env node
// Batch replacement for the 30 Spanish cards using the
// "A regular -ar verb, the largest Spanish verb group..." filler.
// Each card gets a unique etymology / usage / cultural fact.

import fs from 'node:fs';

const apply = process.argv.includes('--apply');
const GENERIC = 'A regular -ar verb, the largest Spanish verb group. Learn this pattern and you unlock hundreds of verbs.';

const FACTS = {
  'desayunar': "From 'des-' (un-) + 'ayunar' (to fast). Literally 'to unfast' — mirrors English 'breakfast' = break + fast. The shared metaphor is ancient: Romans already described the morning meal this way.",
  'hablar': "From Late Latin 'fabulari' (to tell stories), cousin of English 'fable.' Spanish lost the f, softened b→b, and kept a verb that covers casual chat, lectures, and phone calls alike.",
  'estudiar': "From Latin 'studere' (to apply oneself zealously). Same root as English 'student,' 'studio,' 'studious.' The verb covers school study, examining a problem, and scrutinizing a painting.",
  'trabajar': "Etymologically grim: from Vulgar Latin 'tripaliare' (to torture with a three-stake instrument). Modern Spanish smoothed that to mean 'to work,' though the old pain is still visible in English 'travail.'",
  'comprar': "From Latin 'comparare' (to make ready, equal up). The shopping sense emerged in Late Latin. Same root as English 'compare' — buying meant matching price to value.",
  'escuchar': "From Latin 'auscultare' (to listen attentively), also the source of medical 'auscultation.' Spanish lost the initial vowel, kept the intensive sense.",
  'descansar': "From 'des-' + 'cansar' (to tire). Literally 'to un-tire.' Spanish has the opposite construction too: 'cansarse' (to get tired). Both verbs anchor the rest/fatigue axis.",
  'jugar': "One of the few -ar verbs with a u→ue stem change: juego, juegas, juega. From Latin 'iocare' (to joke, play), same root as English 'joke' and 'jocular.' Games and jokes share an origin.",
  'pasear': "From 'paso' (step), related to English 'pace.' The reflexive 'pasearse' means to stroll; the transitive 'pasear al perro' means to walk the dog. A daily ritual in Spanish culture.",
  'limpiar': "From Latin 'limpidare' (to make clear, pure). Same root as English 'limpid.' Spanish uses 'limpiar' for physical cleaning and metaphorical cleaning of reputations alike.",
  'cocinar': "From 'cocina' (kitchen), itself from Latin 'coquina.' Same root as English 'cuisine' and 'cook.' The verb is transitive: 'cocinar pasta' (to cook pasta), but intransitively 'cocinar bien' means to be a good cook.",
  'Me gustaría viajar': "Conditional of gustar, literally 'it would be pleasing to me to travel.' Spanish often uses the conditional + infinitive for polite wishes, where English would use 'I would like to.'",
  'Soñaría con viajar': "'Soñar con + infinitive' is the standard pattern for dreams (of / about). Conditional 'soñaría' signals a hypothetical dream, often used in aspirational or wistful contexts.",
  'Yo en tu lugar': "Set phrase for giving advice: 'If I were you.' No subjunctive needed because it's a fixed expression; just drop the verb entirely. Spanish loves these elliptical idioms.",
  'Podrías intentar': "Conditional 'podrías' (could/might) + infinitive softens a suggestion. Spanish speakers prefer this indirect framing over the blunt 'deberías' (you should) when giving advice.",
  'buscar': "From Vulgar Latin 'buscare' (to seek in the woods). The original forest-search sense survives in English 'bosk' and 'bush.' In Spanish, now used for web search, looking for keys, or pursuing dreams.",
  'descargar': "Originally nautical — 'to unload a ship' (descargar un barco). The software download sense piggybacks on that metaphor: data pouring out of the cloud like cargo coming off a vessel.",
  'importar': "A double-duty verb. Transitive means to import goods (importar mercancías). Intransitive means to matter (no me importa = I don't care). Context, not form, disambiguates the two senses.",
  'informar': "From Latin 'informare' (to give form to). Spanish journalists 'informan' (report) the news. The reflexive 'informarse' means to inform oneself, i.e. do research before forming an opinion.",
  'denunciar': "More forceful than inglés 'to denounce.' In Spanish, 'denunciar' also covers filing a police report. Citizens 'denuncian' crimes at the comisaría; activists 'denuncian' injustice publicly.",
  'contratar': "From 'contrato' (contract). Sense split with English: Spanish 'contratar' means to hire (a person) or to contract (a service). Hiring an employee is 'contratar a alguien.'",
  'tutear': "A verb meaning 'to use tú.' Asking '¿Podemos tutearnos?' (can we use tú with each other?) is a real social moment in Spanish, marking a shift from formal to familiar.",
  'para empezar': "'Empezar' is stem-changing (e→ie in stressed forms). 'Para empezar' is a frozen infinitive phrase used as a discourse marker: 'To begin with, ...' — common in essays and debate.",
  'para terminar': "'Terminar' is fully regular, unlike English 'terminate' which feels technical. In Spanish, 'terminar' is everyday for ending anything: a meal, a relationship, a phone call, a presentation.",
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
    const re = new RegExp(`(trg:"${escTrg}"[\\s\\S]*?funFact:")${GENERIC.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(")`, 'g');
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
