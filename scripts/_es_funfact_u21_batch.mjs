#!/usr/bin/env node
// 16 Spanish cards in unit 21 (passive voice + se-impersonal).

import fs from 'node:fs';

const apply = process.argv.includes('--apply');
const GENERIC = 'Spanish is the fourth most spoken language worldwide, with 500+ million native speakers.';

const FACTS = {
  'fue construido': "Passive voice: ser + past participle. The participle agrees with the subject. 'Fue construido' (masculine) vs 'fue construida' (feminine). Newspapers use this construction constantly.",
  'fue escrito por': "'Por' introduces the agent (the person who did the action). Literally 'was written by.' Parallels English exactly. Spanish distinguishes passive agents with 'por' vs other prepositions.",
  'es conocido': "Present passive: ser + past participle. 'Es conocido por su arte' — he is known for his art. Contrast with 'está conocido' which would be wrong; ser for identity, not estar.",
  'fue descubierto por': "'Descubierto' is the irregular past participle of descubrir. Same pattern as abrir → abierto. The -brir / -vrir family forms irregular -ierto participles.",
  'fue creado': "Regular -ar participle: creado. Contrast with hecho (hacer, irregular), visto (ver, irregular), dicho (decir, irregular). Most participles are regular; only a small family is irregular.",
  'fue publicado': "Spanish passive is more common in formal writing and news than in casual speech. Spoken Spanish often prefers 'se publicó' or an active construction like 'lo publicaron.'",
  'fueron inaugurados': "Plural passive. The participle 'inaugurados' agrees in number AND gender. 'Fueron inauguradas' for feminine plural subjects. Newspapers love ceremonial verbs: inaugurar, estrenar, presentar.",
  'Se aceptan tarjetas': "Impersonal 'se' with plural agreement. The verb 'aceptan' agrees with the plural thing accepted, not with the implicit subject. 'Se acepta tarjeta' (singular) would also work.",
  'Se busca': "Classic 'wanted' sign construction. 'Se busca camarero' — waiter wanted. Equivalent to English classifieds' 'wanted.' Verb stays singular when followed by a noun phrase.",
  'Se cree que': "Impersonal 'se' + belief verb. Translates as 'it is believed that.' The 'se' substitutes for a generic 'people' subject. Common in news and academic Spanish.",
  'Se sabe que': "Similar to 'se cree que' but asserts truth (not belief). 'Se sabe que la Tierra es redonda' — it is known that the Earth is round. Indicative, because the claim is factual.",
  'Se espera que': "Impersonal + subjunctive trigger. 'Esperar que + subj' because hope/expectation is not yet fact. 'Se espera que llegue' — it is expected that (he) arrives.",
  'fue anunciado por el gobierno': "Government/official passive. Newspapers are full of '(algo) fue anunciado por (institución).' The 'por + institution' agent is especially common in political reporting.",
  'fueron detenidos': "Plural masculine passive. 'Fueron detenidos' covers both 'were arrested' and 'were detained,' a distinction Spanish doesn't always mark as sharply as English.",
  'se ha confirmado que': "Passive perfect with 'se.' The compound tense (ha + confirmado) adds a sense of recent confirmation. Common in breaking-news headlines.",
  'Se inauguró el museo': "Preterite of se-passive. Literally 'the museum was inaugurated.' Spanish alternates this with the ser-passive ('fue inaugurado'); both are grammatically correct, with se-passive being more common in speech.",
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
