#!/usr/bin/env node
// 32 Spanish cards u5-u9 masculine -o filler.

import fs from 'node:fs';

const apply = process.argv.includes('--apply');
const GENERIC = 'Masculine noun. Spanish words ending in -o are usually masculine.';

const FACTS = {
  'el fin de semana': "Weekend. Literally 'end of the week.' Plural: los fines de semana. Note: 'fin' stays singular; 'semana' stays singular. Just 'fines' pluralizes.",
  'el cuello': "Neck. From Latin 'collum.' Same root as English 'collar' and 'collateral.' 'El cuello' also means a shirt collar — dual meaning through metonymy.",
  'el hombro': "Shoulder. From Latin 'umerus' (shoulder). English 'humerus' (the upper arm bone) shares the root. Spanish dropped the u.",
  'el pecho': "Chest. From Latin 'pectus.' Same root as English 'pectoral.' Also the breast (in compounds: pecho de pollo = chicken breast).",
  'el corazon': "Heart (written 'corazón'). From Latin 'cor' + augmentative -azón. Same Latin root as English 'cordial' and 'cardiac' (via Greek kardia). Spanish favors the augmentative form.",
  'el codo': "Elbow. From Latin 'cubitus.' Spanish idiom: 'hablar por los codos' (talk through the elbows) = to talk a lot. Creative body-part idioms abound.",
  'el salón': "Living room / lounge. From French 'salon.' Borrowed during Spain's long French cultural exchange (17th-18th c.). Also: hair salon, events hall. Multi-purpose term.",
  'el dormitorio': "Bedroom. From Latin 'dormitorium' (sleeping place), from 'dormire' (to sleep). Same root as English 'dormitory.' Direct descendance; no major shift.",
  'el baño': "Bathroom. From Latin 'balneum.' Spanish ñ from Latin n+y absorbed. Multi-use: bathroom, bath, swim (darse un baño).",
  'el sofá': "Sofa. From Arabic 'suffah' (bench). Islamic Spain legacy — many furniture words came through Arabic. Accent on á because stress on final syllable.",
  'el armario': "Wardrobe / closet. From Latin 'armarium' (weapon storage). Originally stored weapons; semantically shifted to clothes storage. Cognate with English 'armory.'",
  'el escritorio': "Desk. From 'escribir' (to write) + -orio (place suffix). Literally 'writing place.' Spanish productive -orio suffix: auditorio, laboratorio, observatorio.",
  'el banco': "Bank (financial + bench). Same word, two meanings: financial bank or park bench. Etymologically one: medieval Italian bankers worked at benches (banche) in piazzas.",
  'el parque': "Park. From French 'parc,' ultimately Germanic. Same root as English 'park' and 'parking.' Urban green space concept spread from French city planning.",
  'el autobús': "Bus. Shortened from Latin 'omnibus' (for all). 'Auto-' was added, then dropped in English. Spanish kept the 'auto-' part: auto-bus = self-moving bus-for-all.",
  'el tren': "Train. From French 'train' (line of wagons). Late loanword (19th c. with railway expansion). Short, foreign-feeling in Spanish.",
  'el barco': "Boat / ship. From Vulgar Latin 'barcus' (small vessel). Also root of English 'bark' (ship) and 'barge.' Old Mediterranean maritime vocabulary.",
  'el sur': "South. From Germanic 'sunthra-' via Old French. Same root as English 'south.' Spanish cardinal directions (norte, sur, este, oeste) are all loanwords.",
  'el este': "East. From Germanic 'austra-' (dawn) via Old French. Same root as English 'east.' Across Romance languages these cardinal direction words are remarkably consistent.",
  'el oeste': "West. From Germanic 'west-' via Old French. English 'west' is the same word. Medieval Spanish still used 'poniente' (setting sun) for west.",
  'el semáforo': "Traffic light. From Greek 'sema' (sign) + 'phoros' (bearer). Coined in the 19th century for modern traffic control. Spanish borrowed the neologism intact.",
  'el pantalón': "Pants. From French 'pantalon.' Named after 'Pantalone,' a character in commedia dell'arte who wore long trousers. Direct costume-history etymology.",
  'el vestido': "Dress. From 'vestir' (to dress) + -ido. Past participle used as noun. Spanish commonly nominalizes participles: vestido, comido, dormido.",
  'el abrigo': "Coat. From 'abrigar' (to shelter). Literally 'the sheltering thing.' Heavier than 'chaqueta' (jacket). Winter essential across Spanish-speaking cold climates.",
  'el sombrero': "Hat. From 'sombra' (shade) + -ero (maker/holder). Literally 'shade-maker.' Originally a hat with wide brim for shade; now any hat.",
  'el traje': "Suit. From 'traer' (to bring) + -aje. Originally 'brought garment.' Now specifically a formal suit. Also: traje de baño (swimsuit), traje de novia (wedding dress).",
  'el cinturón': "Belt. From 'cinta' (ribbon) + -ón (augmentative). Literally 'big ribbon.' Also used metaphorically: 'apretarse el cinturón' (tighten the belt, tighten spending).",
  'el pantalón negro': "Demonstrates adjective-noun agreement: masculine pantalón → masculine negro. Number agreement too: 'los pantalones negros.' Both parts must match.",
  'el probador': "Fitting room. From 'probar' (to try) + -dor (place/agent). Literally 'the trying-place.' Spanish -dor suffix is productive: comedor (dining room), mirador (viewpoint).",
  'el mes pasado': "Last month. Masculine adjective-agreement: 'mes' (masculine) + 'pasado' (masculine form). Contrast 'la semana pasada' (feminine).",
  'el año pasado': "Last year. Same masculine pattern. 'Año' is masculine despite ending in -o; 'año' preserves the Spanish year-word from Latin 'annus.'",
  'el fin de semana pasado': "Last weekend. The adjective agrees with 'fin' (masculine), not with 'semana.' Spanish compound nouns take gender from the head noun.",
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
