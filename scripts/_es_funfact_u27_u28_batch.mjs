#!/usr/bin/env node
// 34 Spanish cards u27-u28 (academic/formal connectors + impersonals).

import fs from 'node:fs';

const apply = process.argv.includes('--apply');
const GENERIC = 'Spanish is the fourth most spoken language worldwide, with 500+ million native speakers.';

const FACTS = {
  'lo bueno': "'Lo + adjective' nominalizes to 'the ___ thing.' 'Lo bueno' = the good thing, 'lo malo' = the bad thing. Sergio Leone's film: 'el bueno, el malo y el feo' (literally 'the good, the bad, the ugly').",
  'lo esencial': "Formal register for 'what's essential.' More weighty than 'lo importante.' Academic writing defaults to 'lo esencial' for core points.",
  'en primer lugar': "First in a structured argument. Standard essay and debate opener. Pairs with 'en segundo lugar,' 'en tercer lugar.' More formal than the casual 'primero, luego.'",
  'cabe destacar que': "'Cabe + infinitive' is a formal impersonal pattern: 'it is fitting to.' 'Cabe destacar' = 'it is worth highlighting.' Very common in academic Spanish.",
  'a modo de conclusión': "Formal closer for essays and speeches. Literally 'by way of conclusion.' Signals the final section. Synonym: 'en conclusión.'",
  'resulta imprescindible': "'Resultar + adjective' = 'to prove (to be) adjective.' Here 'proves indispensable.' Formal academic register, stronger than 'es necesario.'",
  'se considera que': "Impersonal se-construction. Used to frame consensus or academic claim. Always followed by indicative (a factual claim, even if general).",
  'se ha demostrado que': "Passive present perfect. 'It has been demonstrated that.' Research-paper phrasing. Pairs with indicative in the following clause.",
  'se recomienda': "Impersonal advisory. Note: can be followed by infinitive (se recomienda consultar) OR by que + subjunctive (se recomienda que consulte). Both are standard.",
  'se observa que': "Academic observation marker. 'It is observed that.' Common in scientific writing. The 'se' creates distance; the observer fades into the background.",
  'es necesario que': "Impersonal necessity + subjunctive. 'Es necesario que vengas' — it is necessary that you come. Always subjunctive because the described action is hypothetical.",
  'conviene que': "'Convenir' (to be advisable) + que + subjunctive. Softer than 'es necesario.' 'Conviene que revises' — it's advisable that you review. Formal suggestion.",
  'cabe señalar que': "Another 'cabe + infinitive' set phrase. 'It should be pointed out that.' Academic turn-of-phrase. Synonym: 'vale la pena señalar que.'",
  'resulta evidente que': "'Resultar + adjective + que' = 'it proves adjective that.' 'Resulta evidente' = it is evident. More formal than 'es evidente.'",
  'es imprescindible que': "'Imprescindible' = essential/indispensable. With 'que' always takes subjunctive. Stronger than 'es necesario que.' Used in urgent recommendations.",
  'en lo que respecta a': "'Regarding / with regard to.' Formal opener for topic-shifts. Legal and academic texts favor this construction. More flexible than 'en cuanto a.'",
  'por ultimo': "Written 'por último' with accent. Final item in a sequence. Pairs with en primer lugar, en segundo lugar. Essential for structured arguments.",
  'en segundo lugar': "Second in a structured argument. After 'en primer lugar.' More formal than 'luego.' Essential for academic and business speeches.",
  'por un lado': "'On the one hand.' Sets up a contrast. Pairs with 'por otro lado.' The two halves don't have to be exact opposites; they can complement each other too.",
  'por otro lado': "'On the other hand.' Always follows a 'por un lado' setup. Spanish essay writing demands this balanced structure.",
  'por una parte': "Formal variant of 'por un lado.' Literally 'on one part.' Interchangeable but slightly more literary.",
  'por otra parte': "Matches 'por una parte.' Formal contrast connector. Common in academic and legal writing.",
  'sin embargo': "'However, nevertheless.' Literally 'without blockage' (from embargo). Formal register; connects contrasting clauses. One of the most-used Spanish connectors.",
  'es mas': "Written 'es más' with accent. 'What's more.' Intensifies a previous statement. More emphatic than 'además' (moreover).",
  'ni siquiera': "'Not even.' Negation intensifier. Note the unique 'ni' — 'not even' is more than simple 'no.' 'Ni siquiera lo sabía' — I didn't even know.",
  'es decir': "'That is to say, in other words.' Clarification marker. Very common in Spanish, far more than English equivalent. Native speakers string sentences together with 'es decir.'",
  'en otras palabras': "Literally 'in other words.' Direct parallel to English. Used in academic and formal speech for restating.",
  'como muestra': "'As an example / as proof.' 'Muestra' = sample/demonstration. Common in argumentative writing: 'como muestra el gráfico...' (as the graph shows).",
  'en definitiva': "'Ultimately, in the end, all in all.' Summary connector. Belongs to a family: en resumen, en conclusión, en suma. Each has slightly different weight.",
  'en suma': "'In sum, in short.' More formal than 'en resumen.' Mathematical feeling — adding up the argument. Academic preference.",
  'en aquel entonces': "'At that time, back then.' Nostalgic marker. 'Aquel' adds temporal distance. Common in memoirs and historical narrative.",
  'a continuacion': "Written 'a continuación' with accent. 'Next, following that.' Presentation and instruction marker. TV news uses it constantly: 'a continuación, las noticias deportivas.'",
  'mientras tanto': "'Meanwhile, in the meantime.' Parallel-action marker. Classic storytelling: 'Él hablaba. Mientras tanto, ella escribía.'",
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
