#!/usr/bin/env node
// 32 Spanish cards u14-u24 feminine -a filler (weather, tech, news, work).

import fs from 'node:fs';

const apply = process.argv.includes('--apply');
const GENERIC = 'Feminine noun. Spanish words ending in -a are usually feminine.';

const FACTS = {
  'la nube': "Cloud. From Latin 'nubes.' Also used in tech: 'la nube' = the cloud (cloud computing). Same metaphorical extension as English — the cloud computing metaphor translates exactly.",
  'la niebla': "Fog. From Latin 'nebula.' Same root as English 'nebulous' and the astronomical 'nebula.' Galicia and Asturias in northern Spain are famous for persistent niebla.",
  'la tormenta': "Storm. From Latin 'tormentum' (torment, twisting). Storms twist — hence the shared root with English 'torment' and 'torture.' The metaphor: weather as torture.",
  'la parada de autobús': "Bus stop. 'Parada' from 'parar' (to stop). Compound with 'de autobús' keeps it clear — just 'parada' could mean any kind of stop.",
  'la línea': "Line / route. From Latin 'linea' (string, thread). Same root as English 'line.' Accent on í — Spanish preserves the stress from Latin 'linea.'",
  'la salida': "Exit / departure. From 'salir' (to leave, go out). '-ida' is a common noun-from-verb suffix: llegada, entrada, parada. Used for exits on signs and departures at airports.",
  'la llegada': "Arrival. From 'llegar' (to arrive). Pair with 'la salida' (departure/exit). Airport screens use these two words universally across Spanish-speaking countries.",
  'la computadora': "Computer (Latin America). Spain uses 'el ordenador' (masculine). Regional split. Mexico, Colombia, Argentina say 'computadora'; Spain says 'ordenador.' Instant regional marker.",
  'la contraseña': "Password. Literally 'counter-sign' (contra + seña). Originally military: a counter-sign verifying you were on the right side. Now ubiquitous in IT contexts.",
  'la pantalla': "Screen. From Latin 'pantex' (belly/stomach) + -alla. Originally meant a lampshade ('a shield for the flame'), now extended to display screens.",
  'la aplicación': "App/application. From Latin 'applicatio.' Spanish -ción reliably maps to English -tion. Pronunciation 'ap-li-ka-SYON' with stress on the final syllable.",
  'la foto': "Photo. Short for 'fotografía.' Feminine because fotografía is feminine. Spanish keeps the gender of the full word even when abbreviated: la moto (motocicleta), la uni (universidad).",
  'la chica que vive aquí': "Relative clause with indicative. The girl is known/specific, so 'vive' stays indicative. If she were hypothetical ('busco una chica que viva aquí'), the verb would be subjunctive.",
  'la película': "Movie / film. From Latin 'pellicula' (little skin). Early cinema used celluloid film — a 'little skin.' The diminutive survived as the word for movies.",
  'la persona con quien hablé': "Relative clause with 'con quien.' Spanish doesn't allow 'preposition-stranding': you can't say 'la persona que hablé con.' The preposition stays up front.",
  'la ciudad donde nací': "'Donde' (where) as a relative adverb. Links place to action. Spanish 'donde' is invariable; it doesn't inflect. Pairs with preterite or imperfect depending on context.",
  'la razón por la que': "'Por la que' — preposition + article + relative. Used for abstract reasons. 'La razón por la que vine' = the reason for which I came / why I came. Formal register.",
  'la multa': "Fine/penalty. From Latin 'multa' (penalty). Traffic fines are 'multas de tráfico.' Also: 'multar' (to fine), an active verb derived from the noun.",
  'la ley': "Law. From Latin 'lex/legis.' Same root as 'legal,' 'legislate,' 'legitimate.' In Spanish 'ley' keeps a single syllable; the Latin stem 'leg-' shows in derived words (ley → legal).",
  'La carta fue enviada': "Passive past. 'Enviada' agrees with 'carta' (feminine). Spanish passive always gender-agrees the participle — a rule that trips up learners transitioning from English.",
  'la noticia': "News item. Plural 'noticias' = the news. Singular 'noticia' = one specific piece of news. Spanish distinguishes: English 'news' is uncountable, Spanish 'noticias' counts.",
  'la medida': "Measure / policy. From 'medir' (to measure). Multiple senses: physical measure (talla, medida), abstract policy (medidas sanitarias = health policies).",
  'la empresa': "Company. From Italian 'impresa' (enterprise, undertaking). Borrowed in the Renaissance, when Italian commerce dominated the Mediterranean. Same root as English 'enterprise.'",
  'la oficina': "Office. From Latin 'officina' (workshop, place of duties). Original sense preserved in 'oficio' (trade, craft). Modern offices inherit the workshop connotation.",
  'la reunión': "Meeting. From Latin 'reunio' (a reunion, gathering). English 'reunion' is the same word with narrower meaning (family reunion). Spanish covers all meetings.",
  'la carta de presentación': "Cover letter. 'Carta' = letter, 'de presentación' = of introduction. Formal job-application document. Standard format with specific Spanish register conventions.",
  'la jornada laboral': "Working day. 'Jornada' from 'día' — originally 'a day's journey.' Spanish labor law uses 'jornada' for work shift or workday.",
  'la sobremesa laboral': "Post-meal chat at work. 'Sobremesa' (literally 'over-table') is Spanish cultural institution: lingering after a meal to chat. Extended to workplace breaks.",
  'la solicitud': "Application (job). From Latin 'sollicitudo' (concern, solicitude). The act of seeking/requesting something. 'Solicitar' (to request, apply for).",
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
