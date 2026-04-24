#!/usr/bin/env node
// 36 Spanish cards u1-u4 using 'Masculine noun. Spanish words ending in -o are usually masculine' filler.
// u1: professions. u2: family. u3: days, seasons, basic noun. u4: food & drinks.

import fs from 'node:fs';

const apply = process.argv.includes('--apply');
const GENERIC = 'Masculine noun. Spanish words ending in -o are usually masculine.';

const FACTS = {
  'el señor': "From Latin 'senior' (older one). Still carries the 'elder respect' connotation. Formal address for a man, roughly equivalent to 'Mr.' or 'sir.' Paired with 'señora' (Mrs/ma'am).",
  'el estudiante / la estudiante': "One of Spanish's gender-neutral-by-article nouns. 'El estudiante' or 'la estudiante' — same form, different article. Latin root: studere (to apply oneself), also giving English 'student.'",
  'el profesor / la profesora': "Unlike 'estudiante,' 'profesor' takes a full feminine suffix: 'profesora.' Agreement: 'el profesor' (male), 'la profesora' (female). One of the common gendered profession pairs.",
  'el médico / la médica': "The feminine 'la médica' is newer (late 20th century). Older usage was 'la mujer médico' or just 'el médico' for both. RAE officially accepts 'la médica' now.",
  'el padre': "From Latin 'pater,' shared root with English 'father,' 'paternal,' 'patriarch.' Also religious: 'Padre Juan' = Father John (priest). Spanish religious vocabulary heavily overlaps with family vocabulary.",
  'el hermano': "From Latin 'germanus' (having the same parents). Dropped the g- in Spanish. Cognate with English 'germane' and 'German.' 'Hermanos' (brothers) also covers mixed-gender siblings.",
  'el hijo': "From Latin 'filius.' The h is silent. The 'f' dropped early in Spanish evolution — one of the language's signature phonological shifts. Contrast Italian 'figlio' and French 'fils.'",
  'el abuelo': "From Latin 'avus' + diminutive '-olus' → 'abuelo.' Affectionate form 'abuelito' is ubiquitous. The diminutive inheritance makes grandparent words inherently warm.",
  'el tío': "From Greek 'theios' (uncle) via Late Latin. Also Spanish slang for 'dude' or 'guy' in Spain: '¡Qué tío!' (what a guy!). Double usage marks Madrid/Spain speech.",
  'el primo': "From Latin 'primus' (first), in the sense of 'prima consobrina' (first cousin). Literally 'the first one' in the extended family. Family ranking embedded in etymology.",
  'el pelo': "From Latin 'pilus' (hair). Same root as English 'pilose' (hairy) and 'depilate.' 'Pelo' covers both head hair and body hair; 'cabello' is specifically head hair, more formal.",
  'el lunes': "Monday. From Latin 'dies Lunae' — day of the Moon. All Spanish days Mon-Fri come from Roman planetary/god names. Saturday and Sunday come from Hebrew/Christian traditions instead.",
  'el martes': "Tuesday. From Latin 'dies Martis' — day of Mars. All Spanish weekday names end in -es (invariable plural). Compare 'el martes' (Tuesday) vs 'los martes' (on Tuesdays).",
  'el miércoles': "Wednesday. From Latin 'dies Mercurii' — day of Mercury. Note the complex spelling with accent. The -oles ending preserves Mercurii phonology.",
  'el jueves': "Thursday. From Latin 'dies Iovis' — day of Jupiter (Jove). The Spanish j comes from Latin 'I' used consonantally. Most Romance languages preserve this.",
  'el viernes': "Friday. From Latin 'dies Veneris' — day of Venus. Modern Spanish drops the final -s in informal speech occasionally: 'el vierne.'",
  'el sábado': "Saturday. From Hebrew 'shabbat' via Latin 'sabbatum.' Unlike Mon-Fri, Saturday's name comes from the Jewish sabbath, not a Roman god. Christian influence preserved this.",
  'el domingo': "Sunday. From Latin 'dies Dominicus' — day of the Lord. Also Christian tradition. Spanish Sunday has religious resonance; 'domingo' as name is still popular.",
  'el tres de enero': "Date format: 'el + number + de + month.' No article before month. '_el_ tres de enero' (the third of January). Spanish always leads with the day, not the month.",
  'el verano': "Summer. From Vulgar Latin 'veranum' (spring-like), originally meaning the tail end of spring. Semantic shift to summer. 'Verano' connotations: heat, vacation, long days.",
  'el otoño': "Autumn / fall. From Latin 'autumnus.' Spanish kept the Latin root; English borrowed 'autumn' directly. 'Otoño' carries a slightly melancholic, literary feel in Spanish poetry.",
  'el invierno': "Winter. From Latin 'hibernus.' Same root as English 'hibernate' (sleep through winter). Spanish winters vary enormously by region: snow in Picos de Europa, mild in Canarias.",
  'el libro': "Book. From Latin 'liber,' which originally meant the inner bark of trees (where early writing was done). Cognate with English 'library.'",
  'el plátano': "Banana/plantain. Spanish uses 'plátano' for both sweet bananas and starchy cooking plantains; Latin America distinguishes: banana vs plátano. From Greek 'platys' (broad/flat leaf).",
  'el limón': "Lemon/lime. From Arabic 'laymūn.' In Spain and most of Latin America, 'limón' usually means the yellow lemon. Mexico and parts of Central America use 'limón' for green lime.",
  'el ajo': "Garlic. From Latin 'allium.' Same root as English 'allium' (the plant genus). Spanish cuisine uses ajo constantly: gambas al ajillo, sopa de ajo, alioli (garlic sauce).",
  'el agua': "Water. A grammatical curiosity: 'agua' is feminine but uses 'el' in singular (el agua, not 'la agua') because of the stressed 'a' at start. In plural reverts: las aguas. One of Spanish's quirkier rules.",
  'el café': "Coffee. From Arabic 'qahwah' via Turkish/Italian. Spanish café culture is foundational — 'tomar un café' is a social ritual, not just a beverage. Accent on é preserves the French 'café' pronunciation.",
  'el té': "Tea. Accent distinguishes 'té' (tea) from 'te' (pronoun, you). Latin America drinks more tea than Spain does. Spain strongly prefers coffee; tea is often perceived as English/British.",
  'el zumo': "Juice (Spain). Latin America says 'jugo.' Same word, different regions. 'Zumo' from Greek via Arabic. The word choice instantly marks Spanish vs Latin American speech.",
  'el pan': "Bread. From Latin 'panis.' Core food word; also figurative: 'pan de cada día' (daily bread, everyday thing), 'ser pan comido' (to be a piece of cake, literally 'bread eaten').",
  'el arroz': "Rice. From Arabic 'al-ruz.' Islamic trade brought rice to Spain. Paella valenciana and countless regional dishes descend from that introduction. 'Arroz' with accent-free z sound.",
  'el pollo': "Chicken. From Latin 'pullus' (young animal). Originally any young animal; Spanish narrowed it to chicken. Also slang for 'a kid/young person' in some LATAM countries.",
  'el pescado': "Fish (as food). From 'pescar' (to fish). Compare 'el pez' (living fish). Spanish makes this distinction: pez swims, pescado is served. English has one word for both.",
  'el desayuno': "Breakfast. From 'des-' (un-) + 'ayuno' (fast). Parallel to English 'break + fast.' Both languages inherited the same metaphor from Latin: unfasting after the overnight fast.",
  'el huevo': "Egg. From Latin 'ovum.' The h is silent, a leftover from Latin. 'Huevo' is the basic word; 'yema' is yolk, 'clara' is white. Spanish cuisine has many egg idioms.",
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
