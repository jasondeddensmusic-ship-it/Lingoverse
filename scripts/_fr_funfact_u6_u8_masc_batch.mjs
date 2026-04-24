#!/usr/bin/env node
// French u6-u8 masc -age/-ment/-isme (21 cards).

import fs from 'node:fs';

const apply = process.argv.includes('--apply');
const GENERIC = 'Masculine noun. Words ending in -age, -ment, -isme are usually masculine.';

const FACTS = {
  'le salon': "Living room / lounge. Italian loan via 'salone.' 17th-century French adopted Italian domestic vocabulary. Also: hairdresser (salon de coiffure).",
  'le couloir': "Corridor. From 'couler' (to flow). Literally 'the flowing place' — a passageway that channels movement.",
  'le lit': "Bed. From Latin 'lectus.' Same root as English 'lectern' (originally a reading-bed). Universal household noun.",
  'le canapé': "Couch / canopy. From Greek 'kōnōps' (mosquito) via Latin. Originally a mosquito-net; extended to a seat with a canopy; then to the sofa itself.",
  'le bureau': "Desk / office. From 'bure' (coarse cloth) — desks were originally covered in bure cloth. Extended from furniture to the room, then to the institution.",
  'un studio': "Studio / studio apartment. Italian loan. Dual use: artist's workshop AND small one-room apartment. Modern urban rental vocabulary.",
  'un étage': "Floor / story. From Latin 'staticum' (standing place). -age suffix. French floor numbering: 'rez-de-chaussée' (ground), 'premier étage' (second floor, to Americans).",
  'le loyer': "Rent. From Latin 'locarium' (rent). Related to 'louer' (to rent) and 'location' (rental). Same Latin root family.",
  'le quartier': "Neighborhood / district. From Latin 'quartarius' (a fourth). Originally 'one quarter of a city.' Now just 'neighborhood' in any size.",
  'le métro': "Subway. Same loanword as Dutch 'de metro.' Short for 'metropolitain.' First opened 1900 Paris — gave the word to the world.",
  'le vélo': "Bicycle. Short for 'vélocipède' (fast foot). Pronounced 'vay-LOH.' Informal French word — 'bicyclette' is more formal.",
  'un billet': "Ticket. From Old French 'bullet' (little ball, document). Transport ticket AND banknote ('billet de banque'). Dual use.",
  'un aller-retour': "Round-trip ticket. Compound: 'aller' (to go) + 'retour' (return). Literally 'go-return.' Self-explanatory compound.",
  'le carrefour': "Crossroads. Literal: 'where four streets meet.' 'Carre' (square) + 'four' from Latin. Also the brand name of a major French supermarket chain.",
  'le musée': "Museum. From Greek 'mouseion' (place of the Muses). Louvre, Orsay, Pompidou — Paris museums are central to French cultural identity.",
  'le nord': "North. Germanic loan. Unusual for French which prefers Latin-origin words. Directional vocabulary came from Germanic/Norse trade.",
  'le sud': "South. Also Germanic — same Norse trade influence. Mediterranean navigation brought these direction words into French.",
  'un pantalon': "Pants. Named after Pantalone, Italian commedia dell'arte character who wore long trousers. Passed through French to English 'pantaloons.'",
  'un manteau': "Coat. From Latin 'mantellum.' Same root as English 'mantle.' Winter-wear essential.",
  'un chapeau': "Hat. From Latin 'cappellus' (little cap). Same root as English 'chapel' (named for a saint's cap relic). Related word-family.",
  'un pull': "Sweater / pullover. English loan, shortened from 'pullover.' French borrows informally from English for clothing — not the formal Academic French position.",
};

let total = 0;
const LANG_ROOT = 'src/data/french-v2';
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
