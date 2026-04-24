#!/usr/bin/env node
// 26 Spanish cards u13 (health) + u14 (weather/nature + future) + u15 (comparatives/transport) + u16 (tech).

import fs from 'node:fs';

const apply = process.argv.includes('--apply');
const GENERIC = 'Masculine noun. Spanish words ending in -o are usually masculine.';

const FACTS = {
  // u13 — health
  'el resfriado': "Common cold. From 'resfriarse' (to get chilled). Spanish often frames illness as result of temperature: 'enfriarse' / 'resfriarse.' A Hispanic folk-medicine idea.",
  'el dolor de cabeza': "Headache. Literally 'pain of head.' Spanish uses 'de' where English uses a compound: dolor de estomago, dolor de muelas, dolor de espalda. Systematic body-pain naming.",
  'el dolor de estómago': "Stomachache. Accent on ó marks stress. Used with 'tener': 'tengo dolor de estomago.' Alternative: 'me duele el estomago' (me pron + doler + article + body part).",
  'el medicamento': "Medicine / medication. From Latin 'medicamentum.' More formal than 'la medicina' (which can mean medicine OR the field of medicine). Prescription labels use 'medicamento.'",

  // u14 — future / weather / nature
  'El próximo año viajaré': "'Viajare' is simple future, yo form. Regular verbs add -é, -ás, -á, -emos, -éis, -án to the infinitive. Pairs naturally with 'proximo ano,' 'manana,' 'la semana que viene.'",
  'el mes que viene': "Next month. Literally 'the month that comes.' Spanish idiomatic future reference using 'que viene.' Parallel: 'la semana que viene,' 'el año que viene.'",
  'el viento': "Wind. From Latin 'ventus.' Same root as English 'vent,' 'ventilation,' 'advent.' Idiom: 'hacer viento' (to make wind) — weather Spanish uses 'hacer' for atmospheric conditions.",
  'el trueno': "Thunder. From Latin 'tonitrus.' Onomatopoeic roots survive across languages: thunder, Donner (German), tonnerre (French). Same family.",
  'el relámpago': "Lightning. From 'relampaguear' (to flash). The -ago ending is rare — it amplifies: 'relampago' = big flash. Note accent on á.",
  'el arco iris': "Rainbow. Literally 'arc of Iris' — Greek goddess of rainbows. Note: 'arco iris' is invariable in the plural (los arco iris). Uses Greek mythology directly.",
  'el río': "River. From Latin 'rivus' (stream). Same root as English 'river' and 'rivulet.' Accent on í mandatory. The Rio Grande = 'the great river.'",
  'el mar': "Sea. From Latin 'mare.' Sometimes feminine in poetry and sailors' speech ('la mar' = the poetic sea). Mostly masculine in modern usage. Dual-gender curiosity.",
  'el lago': "Lake. From Latin 'lacus.' Same root as English 'lake' and 'lagoon.' In Latin America, many lakes carry indigenous names (Titicaca, Atitlán).",
  'el bosque': "Forest. From Germanic 'bosk' (small wood), via Old Provençal. Non-Latin Spanish word. Related to English 'bush.' Spanish also uses 'selva' (jungle) and 'monte' (mountain/forest).",
  'el árbol': "Tree. From Latin 'arbor.' Same root as English 'arboreal' and 'Arbor Day.' Note accent on á. Plural: arboles.",

  // u15 — comparatives / transport
  'el más...de': "'The most...of.' Superlative structure. 'El mas alto de la clase' — the tallest in the class. 'De' = 'of/in' for the reference group. English uses 'in,' Spanish uses 'de.'",
  'el mejor...de': "'The best...of.' Irregular superlative — 'mejor' replaces 'mas bueno.' Pair with peor: 'el peor dia de mi vida' (the worst day of my life).",
  'el peor': "The worst. Irregular comparative/superlative of 'malo.' Functions both as 'worse' (comparative) and 'the worst' (with article, superlative).",
  'el metro': "Subway / meter. Dual meaning: transit system (short for metropolitano) and length unit. Most Spanish cities use 'metro' for subway; Mexico uses 'Metro' as a brand name.",
  'el avión': "Airplane. From French 'avion,' coined from Latin 'avis' (bird). Note accent on ó. Plural: aviones. Latin America sometimes uses 'aeroplano' formally.",
  'el aeropuerto': "Airport. Compound: 'aero' (air) + 'puerto' (port). Parallel to 'puerto' (seaport). Spanish productively compounds the two domains.",
  'el billete': "Ticket. From French 'billet.' In Spain = ticket AND banknote. In Latin America, 'boleto' often replaces 'billete' for tickets; 'billete' stays for money.",

  // u16 — tech
  'el ordenador': "Computer (Spain). Uses French-influenced 'ordenateur' root, not Anglo-American 'computer.' Latin America uses 'la computadora.' Instant regional marker.",
  'el teléfono móvil': "Mobile phone. In Spain: 'el movil' (short form). Latin America: 'el celular.' Full form 'telefono movil' is formal/dictionary usage.",
  'el correo electrónico': "Email. Literally 'electronic mail.' Spain and Latin America both use this; often shortened to 'el correo' in context, or English 'e-mail' informally.",
  'el cargador': "Charger. From 'cargar' (to charge, load). Multi-use: phone charger, truck loader, weapon magazine. Context disambiguates. Productive -dor agent suffix.",
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
