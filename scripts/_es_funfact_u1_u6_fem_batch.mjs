#!/usr/bin/env node
// 36 Spanish cards u1-u6 using 'Feminine noun -a' filler.

import fs from 'node:fs';

const apply = process.argv.includes('--apply');
const GENERIC = 'Feminine noun. Spanish words ending in -a are usually feminine.';

const FACTS = {
  'la señora': "Female counterpart of 'el señor.' From Latin 'senior' + feminine -a. Used for married/older women. 'Señorita' is for unmarried/young women — though this distinction is fading in modern Spanish.",
  'la madre': "From Latin 'mater.' Shared root with English 'mother,' 'maternal,' 'matrix.' Silent h? No — 'madre' has no h. The Latin -t- became -d- in Spanish intervocalic position.",
  'la hermana': "Female sibling. From Latin 'germana' (sister), feminine of germanus (brother). Spanish dropped the initial g- for both 'hermano' and 'hermana.'",
  'la hija': "From Latin 'filia' — silent h as in 'hijo,' because Latin 'f' dropped in Spanish. Contrast Italian 'figlia' (kept f) and French 'fille' (lost it).",
  'la abuela': "From Latin 'avia' + diminutive -ola. Affectionate by construction. 'Abuelita' doubles the diminutive for extra warmth. Grandmother-love is linguistically baked in.",
  'la tía': "From Greek 'theia' (aunt) via Late Latin. Spain also uses 'tía' as slang for 'girl, chick': '¿Qué tal, tía?' (What's up, girl?). Spain-only usage.",
  'la prima': "Female cousin. From Latin 'prima consobrina' (literally 'first female cousin'). Spanish elided the longer phrase to just 'prima.' 'Primo hermano' is 'first cousin,' 'primo segundo' is 'second cousin.'",
  'la primavera': "Spring. Literally 'first truth' (prima + vera). Some etymologists trace it to 'primus' + 'ver' (first of spring). Either way, spring is the 'first' of the growing seasons.",
  'la manzana': "Apple. From Arabic 'manzana' or Latin 'mala matiana' (Matian apple, named for a Roman writer). Same word also means 'city block' in Spanish — the blocks look like apple sections.",
  'la naranja': "Orange (fruit). From Arabic 'nāranj' via Persian 'nārang' from Sanskrit 'nāraṅga.' Islamic trade brought the fruit and the name to Spain. Same journey for many food words.",
  'la fresa': "Strawberry. From French 'fraise.' Spain also uses 'frutilla' in some regions. 'Fresa' also means 'strawberry-blonde' as an adjective.",
  'la uva': "Grape. From Latin 'uva.' Almost always used in plural — you rarely eat one grape. Famous New Year tradition: eat 12 grapes at midnight (one for each strike).",
  'la verdura': "Vegetable. From Latin 'viridis' (green). 'Verde' (green) is the same root. 'Verduras' covers all green vegetables; 'vegetales' is a broader anglicism.",
  'la lechuga': "Lettuce. From Latin 'lactuca,' from 'lac' (milk) — named because it oozes milky sap when cut. English 'lettuce' shares the root. All milk-vegetable.",
  'la cebolla': "Onion. From Latin 'cepulla' (small onion). Related to English 'chive' (same Indo-European root). Cooking base across the Spanish-speaking world.",
  'la leche': "Milk. From Latin 'lac/lactis.' Spanish modified to 'leche.' Same root as English 'lactose,' 'lactation.' Also slang for 'really great' or 'damn' (positive or negative) in Spain.",
  'la cerveza': "Beer. From Latin 'cervisia' (beer, Gaulish origin). Spanish kept the Latin word; Portuguese 'cerveja' and French 'cervoise' share it. English went a different way with 'beer.'",
  'la carne': "Meat/flesh. From Latin 'caro/carnis.' Same root as English 'carnivore,' 'carnal,' 'carnival' (originally 'farewell to meat' before Lent).",
  'la tostada': "Toast. From Latin 'tostus' (toasted). Spanish 'tostada' is a breakfast staple — toasted bread with olive oil and tomato in Spain, or fried tortilla in Mexico.",
  'la mermelada': "Jam. From Portuguese 'marmelada' (quince jam), from 'marmelo' (quince). Originally only quince, now any fruit preserve. English 'marmalade' narrowed to citrus only.",
  'la carta': "Menu (restaurant). Originally 'letter.' The menu is a 'letter' — listing what the restaurant writes to you. Spanish keeps both senses: carta = letter OR menu, context decides.",
  'la cuenta': "Bill/check. From Latin 'computa' (counted things). Same root as 'computer.' 'La cuenta, por favor' is universal Spanish restaurant closing phrase.",
  'la sopa': "Soup. From Germanic 'suppa' (soaked bread), borrowed via Vulgar Latin. Sopas were originally bread soaked in broth before the broth became primary.",
  'la rodilla': "Knee. From Latin 'rotella' (little wheel), diminutive of 'rota' (wheel). Knees do rotate. English 'rota' and 'rotary' share this root.",
  'la espalda': "Back. From Latin 'spatula' (flat blade, shoulder blade). English 'spatula' has the kitchen meaning; Spanish 'espalda' refers to the whole back.",
  'la muneca': "Wrist (also doll). Written 'muñeca' with ñ. The wrist and a doll are etymologically the same word — possibly because early dolls had jointed wrists. Two meanings, one word.",
  'la casa': "House. From Latin 'casa' (hut). Spanish kept the humble original; English got fancy with 'house' from Germanic 'hus.' Romance languages all use casa or derivatives.",
  'la cocina': "Kitchen. From Latin 'coquina' (kitchen), from 'coquere' (to cook). English 'cuisine' and 'cookie' share the root. Also means 'cuisine/cooking': 'cocina española.'",
  'la mesa': "Table. From Latin 'mensa.' Same root as English 'mesa' (flat-topped plateau). Also the name of a famous Arizona suburb. Spanish mesa = table; geographic 'mesa' is the same word.",
  'la silla': "Chair. From Latin 'sella' (saddle, seat). Same root as English 'saddle' and 'sell.' The pronunciation 'see-ya' with the ll-as-y sound is standard Spanish.",
  'la cama': "Bed. From Late Latin 'cama' (bed on the ground). Related to English 'camp' — where you bed down. Spanish kept the Latin word; Portuguese shares 'cama.'",
  'la nevera': "Fridge. From 'nieve' (snow). The 'snow-maker.' Most Spanish fridges-as-noun come from this snow/cold metaphor. Latin America often uses 'refrigerador' or 'heladera' (ice-maker).",
  'la ventana': "Window. From Latin 'ventus' (wind) + -ana. Literally 'wind-thing' — a window is where wind gets in. Italian 'finestra' (from finis, end) took a different metaphor.",
  'la puerta': "Door. From Latin 'porta.' Same root as English 'port, portal, portable.' A door is a portable closure. Also: 'la puerta' is the entry point, 'la portería' is the reception desk.",
  'la lámpara': "Lamp. From Latin 'lampada,' from Greek 'lampas' (torch). Same root as English 'lamp, lampadary.' The Greek → Latin → Spanish lineage is clear.",
  'la alfombra': "Rug/carpet. From Arabic 'al-ḥamrah' (the red one), named because early Spanish rugs came from Alhambra (the red palace) in Granada. Islamic Spain legacy.",
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
