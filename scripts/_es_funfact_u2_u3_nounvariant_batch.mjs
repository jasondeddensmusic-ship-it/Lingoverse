#!/usr/bin/env node
// 52 Spanish cards u2-u3 using the 'Spanish nouns are either masculine or feminine' filler.
// u2: pronouns, numbers, appearance words. u3: numbers, months, colors.

import fs from 'node:fs';

const apply = process.argv.includes('--apply');
const GENERIC = 'Spanish nouns are either masculine or feminine. The ending usually gives it away.';

const FACTS = {
  'mis': "Plural of 'mi.' All Spanish possessive determiners pluralize: mi/mis, tu/tus, su/sus. 'Mis hijos' (my children), 'tus libros' (your books). The plural agrees with the thing possessed, not with you.",
  'uno': "Apocopes to 'un' before masculine nouns: 'un libro' not 'uno libro.' But stays 'uno' when counting: 'uno, dos, tres.' Feminine is always 'una.'",
  'dos': "Invariable — no gender. 'Dos libros, dos casas.' Same for most Spanish numbers except 'uno' (uno/una) and the hundreds (doscientos/doscientas).",
  'tres': "Invariable. Note the accent rule: 'tres' has no accent but 'trés' would be wrong. Spanish single-syllable words don't take accents except for homographs (más, té, sé).",
  'cuatro': "Never pluralizes. Spanish number words rarely take -s endings. The exception: millions ('millones') and a handful of others.",
  'cinco': "One of the oldest Indo-European number words. Spanish 'cinco' from Latin 'quinque.' English 'five' shares the PIE root through Germanic. Every Romance language has a form: cinco, cinque, cinq.",
  'seis': "Invariable. 'Seis' shares roots with English 'six' via Latin 'sex.' Spanish dropped the -s from single-syllable pronunciation but kept it written — the 'seis' ending is just how it's spelled.",
  'siete': "From Latin 'septem.' The p→t shift is standard in Spanish (like séptimo keeping the p in ordinals). 'Siete' in daily speech, 'séptimo' in ordinal contexts.",
  'ocho': "From Latin 'octo.' The cl- or ct- Latin clusters typically became ch- in Spanish: octo → ocho, lacte → leche, factum → hecho.",
  'nueve': "Latin 'novem.' The v→b/v phonological blur in Spanish means 'nueve' and related words (noveno, noventa) keep the v in writing.",
  'diez': "From Latin 'decem.' The m→z transition is typical of final Latin consonants in Spanish. Contrast with Italian 'dieci.' Different Romance paths.",
  'alto': "Adjective in masculine form. 'Alto/alta/altos/altas.' Also doubles as an adverb meaning 'loudly': 'habla alto' (speak loudly). Different from 'con alta voz' (in a high voice).",
  'alta': "Feminine form of alto. Used with feminine nouns: 'una montaña alta.' Spanish adjectives always agree in gender AND number with the noun.",
  'grande': "Invariable by gender (only changes for number: grandes). Apocopes to 'gran' before any singular noun: 'un gran libro' (not 'un grande libro'). 'Un libro grande' (after noun) stays full.",
  'pequeño': "Pequeño/pequeña/pequeños/pequeñas. One of the few adjectives with a standard ñ. The ñ sound (ny) has no clean English equivalent.",
  'viejo': "Viejo/vieja. From Latin 'vetulus.' Can be slightly insensitive for people; 'mayor' is more polite for elderly. 'Mi vieja' is affectionate slang for mom in Argentina.",
  'los ojos': "Always plural 'los ojos' when talking about both eyes. Spanish uses 'los ojos' where English would just say 'eyes.' The article is mandatory with body parts.",
  'moreno': "Moreno/morena. Also spelled 'moreno/a' in common ways. Refers to dark-haired or tanned. Regional: in some LATAM countries, 'moreno' may mean black/Afro-descended.",
  'rubio': "Rubio/rubia. From Latin 'rubius' (red). In Spanish this shifted to 'blond/fair.' Note: Cuban cigars 'rubios' have a similar root — lighter-colored tobacco.",
  'negro': "As a color, 'negro/negra.' From Latin 'niger.' In Spanish, 'negro' is the standard color word without the loaded history of English 'Negro' as a racial term.",
  'marrón': "From French 'marron' (chestnut). Never invariable — 'marrón/marrones.' Unlike English 'brown,' 'marrón' keeps a slightly softer, reddish connotation, as with chestnut.",
  'once': "Unique word, no pattern. Latin 'undecim.' Spanish compressed this irregularly. 11 is the only number in Spanish with a contracted-looking form that doesn't follow the 16-19 'dieci-' pattern.",
  'doce': "From Latin 'duodecim.' Shortened like 'once.' Note: the 'z' sound before 'e' is typical Spanish spelling; never 'dose.'",
  'trece': "Like 'once' and 'doce,' an ancient unique word. From Latin 'tredecim.' 'Trece' is considered unlucky in some Spanish cultures (similar to English 13), especially 'martes 13' (Tuesday the 13th).",
  'catorce': "14. Latin 'quattuordecim.' Spanish abbreviated heavily. The 'ce' ending family (trece, catorce, quince) runs 13-15.",
  'quince': "15. Famous for the 'quinceañera' celebration — a girl's 15th birthday, especially in Mexico and Central America. Equivalent to sweet 16 in US culture.",
  'dieciséis': "First of the compound 16-19 numbers. Formed as 'dieci + séis' (ten + six). Note the accent on the é, preserved from the original 'seis.'",
  'veintiuno': "21. The 20s fuse into one word: veintiuno, veintidós, veintitrés. Apocope before masculine: 'veintiún libros' (not 'veintiuno libros').",
  'treinta': "30. From Latin 'triginta.' All Spanish tens 30-90 end in -enta/-inta. Treinta y uno, y dos, etc. use 'y' (and) to connect — a switch from the 20s fusion rule.",
  'cuarenta': "40. From Latin 'quadraginta.' Pattern: -inta, -enta for tens. Curious: '-inta' for treinta, '-enta' for the others.",
  'cincuenta': "50. From Latin 'quinquaginta.' Shorter than the Latin original — Spanish compressed many number words over the centuries.",
  'sesenta': "60. Latin 'sexaginta' → Spanish 'sesenta.' The x→s sound shift is consistent in Spanish number words (cf. 'sexto' = sixth, 'seis' = six).",
  'enero': "January. From Latin 'Ianuarius,' named for Janus, the two-faced Roman god of beginnings. Month names stay lowercase in Spanish, unlike English.",
  'marzo': "March. Named for Mars, the Roman god of war. All Spanish months from Roman calendar. Marzo starts spring in Spain.",
  'junio': "June. Named for Juno, Roman goddess. Start of summer. Famous Spanish phrase: 'En junio, a beber y a correr' (in June, drink and run — enjoy summer).",
  'julio': "July. Named for Julius Caesar, the first month-renaming in Roman history (46 BCE). Shared form across most European languages.",
  'agosto': "August. Named for Augustus, Rome's first emperor. In Spain, 'agosto' is vacation month. 'Hacer agosto' idiomatically means 'to make a killing' (earn a lot).",
  'octubre': "October. Literally 'eighth month' (octō), a vestige of the old Roman calendar that started in March. When January and February were added, octubre became the 10th month but kept its name.",
  'diciembre': "December. Literally 'tenth month' (decem) for the same reason. Spanish kept the old Roman naming even after the calendar was reformed.",
  'rojo': "Red. From Latin 'russus.' Four-form adjective: rojo/roja/rojos/rojas. Cultural: 'rojo' carries Spanish Civil War connotations (Republican left) that linger in political language.",
  'azul': "Blue. From Arabic 'lāzaward' (lapis lazuli). Four centuries of Moorish rule in Spain left color words, mathematics, and architecture. 'Azul' is invariable by gender.",
  'verde': "Green. From Latin 'viridis.' Invariable by gender (only plural: verdes). Also slang for inexperienced ('está muy verde' = he's still green).",
  'amarillo': "Yellow. From Arabic 'al-anbarî' (amber-colored). Another Arabic borrowing. Four-form adjective: amarillo/a/os/as.",
  'blanco': "White. From Germanic 'blank' (shining), via the Goths. Spanish color words come from three sources: Latin, Arabic, Germanic. 'Blanco' is Germanic.",
  'gris': "Gray. From Germanic 'gris' via Old French 'gris' (meaning gray) and Germanic gris. Invariable by gender (grises is plural). Shares root with English 'gray' via Old Germanic.",
  'naranja': "Orange (color). Same word as the fruit. Spanish adjective is often invariable: 'paredes naranja' (orange walls). Normal four-form 'naranjado' exists but sounds stilted.",
  'rosa': "Pink. Same word as the flower. Invariable as an adjective: 'vestidos rosa' (pink dresses). Also: 'ver todo de color rosa' (see everything rose-colored).",
  'morado': "Purple. From 'mora' (blackberry), because the color of crushed blackberries matches. Four-form: morado/a/os/as. The fruit origin is transparent to native speakers.",
  'de la mañana': "'In the morning (AM).' Time-of-day phrase. 'A las nueve de la mañana' = 9 AM. Also: de la tarde (PM afternoon), de la noche (PM evening). No 12-hour AM/PM explicit — Spanish says the period.",
  'violeta': "Violet/purple. Invariable color-adjective (like naranja, rosa). Often used in poetic or fashion contexts, where 'morado' is more everyday.",
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
