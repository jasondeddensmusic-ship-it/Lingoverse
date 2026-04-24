#!/usr/bin/env node
// Dutch de-words u2-u8 (~31 cards).

import fs from 'node:fs';

const apply = process.argv.includes('--apply');
const GENERIC = "A de-word (common gender). About 2/3 of Dutch nouns use 'de'. All plurals always use 'de'.";

const FACTS = {
  // u2
  'de leraar': "Teacher (male). De-word. Feminine: de lerares. Dutch distinguishes teacher-gender with suffixes: -aar (male), -ares (female).",
  'de vrouw': "Woman / wife. De-word. Cognate with German 'Frau,' English 'fairy' (distantly). Dual meaning: 'vrouw' = woman OR wife, context decides.",
  'de taal': "Language. De-word. Cognate with English 'tale' (originally = speech). 'Moedertaal' (mother tongue). Dutch has many compound language terms.",

  // u3
  'de lente': "Spring (season). De-word. Native Germanic. Cognate with English 'Lent' (pre-Easter period). Dutch seasons: lente, zomer, herfst, winter.",

  // u4
  'de boterham': "Sandwich. De-word. Compound: boter (butter) + ham (slice). Central to Dutch lunch: 'broodje' (bread roll) at work; 'boterham' at home.",

  // u5
  'de trap': "Stairs. De-word. Also means 'kick' in some contexts (homograph). 'Op de trap' (on the stairs), 'trap geven' (give a kick).",
  'de verjaardagskalender': "Birthday calendar. De-word. Famously Dutch: household fixture on the back of bathroom doors. Marks everyone's birthday year after year.",
  'de kaars': "Candle. De-word. Cognate with English 'Christ' via church Latin (candles were used in church). Cozy domestic Dutch object — gezelligheid enhancer.",
  'de kleur': "Color. De-word. French loan from 'couleur.' Many Dutch aesthetic words are French loans from 17th-18th c cultural exchange.",

  // u6
  'de kleding': "Clothing. De-word. Collective noun. From 'kleden' (to clothe) + -ing (abstract noun). Same suffix pattern as English -ing.",
  'de broek': "Pants. De-word. Cognate with English 'breeches' (via different sound path). Always singular in Dutch — unlike English 'pants' which is plural.",
  'de schoenen': "Shoes (plural). De-word (all plurals are de-). Singular 'de schoen.' Regular -en plural.",
  'de jurk': "Dress. De-word. Native Dutch. A jurk specifically is a woman's dress — not any garment.",
  'de jas': "Coat. De-word. Native Germanic. Cognate with English 'jacket' (different form). Essential in Dutch climate.",
  'de sokken': "Socks (plural). De-word. Singular: de sok. From English 'sock,' both from Latin 'soccus' (a light shoe).",
  'de trui': "Sweater. De-word. Native Dutch. 'Warme trui' (warm sweater). Common Dutch winter word.",
  'de sjaal': "Scarf. De-word. Loan from French 'châle' (shawl), ultimately from Persian. Indicates the item's Eastern origin.",
  'de handschoenen': "Gloves (plural). De-word. Compound: 'hand' + 'schoen.' Literally 'hand-shoes.' Transparent Dutch compound.",
  'de riem': "Belt. De-word. Native Germanic. Also means 'strap.' Related to 'rijm' (rhyme, connection/line) metaphorically — rhyme is a kind of belt.",
  'de rok': "Skirt. De-word. Native Dutch. Also means 'coat/robe' in older usage. Fashion-specific meaning has narrowed.",
  'de laarzen': "Boots (plural). De-word. Singular 'de laars.' The -zen plural reflects consonant-voicing: laars → laarzen (s → z + en).",
  'de windrichting': "Wind direction. De-word. Compound: wind + richting (direction). 'Richting' from 'richten' (to direct/aim).",

  // u8
  'de buik': "Belly / stomach. De-word. Native Germanic. Cognate with English 'bouk' (archaic body term). Also: 'buikpijn' (belly ache).",
  'de keel': "Throat. De-word. Native Germanic. Cognate with English 'keel' (ship part — same 'trough' metaphor). Sore throat: 'keelpijn.'",
  'de grootste': "The biggest. De-word + superlative. Article de + adjective+ste + noun formula. Always with 'de' when superlative.",
  'de mooiste': "The most beautiful. Superlative of 'mooi.' Regular -ste ending. Dutch superlatives always take 'de' with any noun gender.",
  'de kip': "Chicken. De-word. Dutch-specific — German says 'Huhn,' English 'chicken.' 'Kip' is onomatopoeic of bird sound.",
  'de koorts': "Fever. De-word. Cognate with English 'cold' (same Germanic root — fevers and colds share etymology as body-state shifts).",
  'de verkoudheid': "Cold (illness). De-word. Abstract noun from 'verkouden' (having a cold) + '-heid' suffix (abstractness). 'I have a cold': 'Ik ben verkouden.'",
  'de hoofdpijn': "Headache. De-word. Compound: 'hoofd' (head) + 'pijn' (pain). Transparent compound. Dutch makes medical terms accessible.",
  'de apotheek': "Pharmacy. De-word. Greek loan via Latin 'apothēca' (storehouse). Same root as English 'apothecary.'",
};

let total = 0;
const LANG_ROOT = 'src/data/dutch-v2';
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
