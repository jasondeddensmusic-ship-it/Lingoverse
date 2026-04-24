#!/usr/bin/env node
// French u6-u9 fem -tion/-sion/-ure variant (20 cards).

import fs from 'node:fs';

const apply = process.argv.includes('--apply');
const GENERIC = 'Feminine noun. Words ending in -tion, -sion, -ure are usually feminine.';

const FACTS = {
  'la cuisine': "Kitchen / cuisine. Same Latin root ('coquina') as English 'cuisine.' Dual use: the room AND the style of cooking. 'Haute cuisine' for high cooking.",
  'la chambre': "Bedroom. From Latin 'camera.' Same root as English 'chamber.' 'Camera' in Romance languages still means 'room.'",
  'la salle de bains': "Bathroom. Literally 'hall of baths.' Always 'bains' (plural) — fossilized from the plural-bathing ritual.",
  'une maison': "A house. From Latin 'mansio.' Same root as English 'mansion' — originally just 'dwelling.' Feminine despite ending in consonant (no -e).",
  'une pièce': "A room / piece. Dual use: room AND coin/play/piece. Originally 'a piece of something,' later extended to rooms (pieces of a house).",
  'la boulangerie': "Bakery. From 'boulanger' (baker) + -ie (place suffix). Same -ie pattern as English 'pastry-ry.' Ubiquitous French storefront.",
  'la gare': "Train station. Italian origin (from 'guardia,' a guardhouse). Dutch borrowed the same word from French. Transport essential.",
  'la poste': "Post office. From Italian 'posta' (position). Same root as English 'post.' Also: 'la poste' is the postal service itself.",
  'la banque': "Bank. From Italian 'banca.' Medieval Italian bankers worked at banche (benches) in piazzas — bench became bank. Same root as 'banquet.'",
  'la voiture': "Car. -ure ending = feminine. From 'voiturer' (to transport). Originally any transport; now specifically automobile.",
  'la rue': "Street. From Latin 'ruga' (wrinkle/crease). Streets were seen as creases in the urban fabric. Very short French word.",
  'la place': "Square / place. From Latin 'platea' (broad street). Same root as English 'plaza' (borrowed from Spanish). 'La Place de la Concorde.'",
  'une chemise': "A shirt. From Late Latin 'camisia.' English 'chemise' borrowed intact from French. Now means different things in English (a type of dress).",
  'une robe': "A dress. From Germanic 'roub' (booty, stolen goods). Clothing vocabulary often had this 'plunder' etymology. Ironic politeness evolution.",
  'une jupe': "A skirt. From Arabic 'jubba' (a long garment). Came through Italian and Old French. Arab fashion influence on medieval Europe.",
  'la couleur': "Color. From Latin 'color.' -eur ending. Same root as English 'color.' 'La couleur' is also an adjective category.",
  'une veste': "A jacket. From Latin 'vestis' (clothing). Same root as English 'vest.' In French, more like a jacket than an undershirt.",
  'une écharpe': "A scarf. From Old French 'escharpe' (sling, band). Also means 'sash' in formal contexts.",
  'une ceinture': "A belt. From Latin 'cinctura' (a girding). -ure ending. Same root as English 'cincture' (archaic belt).",
  'la semaine dernière': "Last week. 'Semaine' from Latin 'septimana' (seven-day). 'Dernière' feminine agreement. Standard past time reference.",
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
