#!/usr/bin/env node
// 27 Spanish cards u7-u13 feminine -a filler.

import fs from 'node:fs';

const apply = process.argv.includes('--apply');
const GENERIC = 'Feminine noun. Spanish words ending in -a are usually feminine.';

const FACTS = {
  'la iglesia': "Church. From Greek 'ekklesia' (assembly) via Latin. Same root as English 'ecclesiastical.' Every Spanish town has 'la iglesia' in the main plaza.",
  'la calle': "Street. From Latin 'callis' (path). Calles in Spanish cities tend to be named after dates ('Calle de Mayo'), people, or trades ('Calle de los Zapateros').",
  'la primera calle': "'Primera' apocopes to 'primer' before masculine nouns (el primer libro) but stays 'primera' before feminine (la primera calle). Small but regular rule.",
  'la parada': "Stop (transport). From 'parar' (to stop). Literally 'the stopping.' Spanish -ada endings often form nouns from verbs: jugar → jugada, llamar → llamada.",
  'la camisa': "Shirt. From Late Latin 'camisia' (linen shirt), originally from Celtic/Germanic. Same root as French 'chemise' and English 'chemise.' Common undergarment word.",
  'la falda': "Skirt. From Germanic 'falda' (fold). Same root as 'falda' in Italian and 'Falte' (fold) in German. Germanic words for clothing survived in Spanish.",
  'la chaqueta': "Jacket. From French 'jaquette,' from 'Jacques' (Jack, common name). Originally a simple peasant coat named for its typical wearer. Spanish adapted the French word.",
  'la camiseta': "T-shirt. Diminutive of 'camisa' — literally 'little shirt.' Spanish uses diminutives to indicate smaller or more casual versions of nouns (cuchara → cucharita).",
  'la bufanda': "Scarf. From Italian 'buffo' (puff, cheek puff). Shared root with English 'buffoon' (one who puffs cheeks). Spanish borrowed the Italian term for winter neckwear.",
  'la ropa interior': "Underwear. Literally 'interior clothing.' Spanish compounds with 'interior/exterior': ropa interior (underwear), ropa exterior (outerwear). Systematic naming.",
  'la talla': "Size. From Germanic 'tallia' (a cutting). Same root as English 'tailor' — someone who cuts cloth to size. 'Talla' in Spanish also means 'carving' (art).",
  'la camisa blanca': "Pattern demonstration: noun + color adjective order. Spanish color-adjective AFTER the noun, unlike English. 'La blanca camisa' would sound poetic/archaic.",
  'la falda roja': "Same order rule. Color adjective always agrees in gender: falda roja (feminine), coche rojo (masculine). Never mix.",
  'la semana pasada': "Last week. 'Pasada' = past, feminine. Agrees with 'semana' (week, feminine). Contrast 'el mes pasado' (masculine). Position after noun is standard for 'past/next.'",
  'la playa': "Beach. From Latin 'plaga' (flat area). Same root as English 'plagiarism' (through a different metaphorical path). Spanish costs have some of the most famous playas: La Concha, Las Canteras.",
  'la mascota': "Pet/mascot. From Occitan 'mascoto' (little mask/spell), via French 'mascotte.' Originally a magical charm; extended to sports mascots and beloved pets.",
  'la vaca': "Cow. From Latin 'vacca.' Same root as English 'vaccine' (from cowpox) — Jenner's discovery was named for 'vaccinia,' cow disease. Cows at the root of immunology.",
  'la gallina': "Hen. From Latin 'gallina,' feminine of 'gallus' (rooster). English 'gallinaceous' (related to fowl) is the same root. Old Gaulish territory was named 'Gallia' (Gaul), from a related root meaning 'rooster' (the symbol).",
  'la oveja': "Sheep. From Latin 'ovicula' (little sheep), diminutive of 'ovis.' English 'ovine' (sheep-like) is the same root. Spanish often inherited the Latin diminutive as the main word.",
  'Una vez viajé a Barcelona.': "'Una vez' (once) + preterite = specific past event. Pairs naturally with preterite, never imperfect. 'Una vez viajé...' opens a single completed experience.",
  'La calle estaba oscura, pero caminé hasta casa.': "Imperfect 'estaba oscura' (background scene) + preterite 'caminé' (punctual action). Classic Spanish past-tense pairing: set scene in imperfect, pivot to preterite for main event.",
  'la fiebre': "Fever. From Latin 'febris.' Same root as English 'febrile.' 'Tener fiebre' (to have a fever) uses tener, where English uses to-be. Spanish frames symptoms as possessions.",
  'la farmacia': "Pharmacy. From Greek 'pharmakia' (medicine, also poison — the same word!). In Spain, farmacias sell drugs but also doubly as informal advice centers.",
  'la receta': "Prescription / recipe. One word, two meanings: medical prescription OR cooking recipe. Both are 'instructions you follow precisely.' Context disambiguates.",
  'la inyección': "Injection. From Latin 'iniectio' (a throwing in). Note Spanish -ción ending corresponds to English -tion — one of the most reliable cognate patterns for vocabulary.",
  'la alergia': "Allergy. From Greek 'allos' (other) + 'ergon' (work) — an 'other-reaction.' Coined in 1906 by Austrian pediatrician Pirquet. Modern medical term, quickly borrowed into Spanish.",
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
