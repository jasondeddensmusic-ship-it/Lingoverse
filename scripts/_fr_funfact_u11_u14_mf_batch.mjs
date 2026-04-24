#!/usr/bin/env node
// French u11-u14 mf (18 cards).

import fs from 'node:fs';

const apply = process.argv.includes('--apply');
const GENERIC = 'French nouns are either masculine or feminine. The article gives it away.';

const FACTS = {
  "j'étais": "I was. Imperfect of être. Contracted j' before vowel. Irregular imperfect stem: ét-.",
  "d'habitude": "Usually. Literally 'of habit.' Common frequency marker.",
  "c'était": "It was. Contracted ce + était. Imperfect copula. Background description.",
  "l'animal": "The animal. Masculine. Plural: les animaux (-aux).",
  "l'oiseau": "The bird. Masculine. Plural: oiseaux (-eau→-eaux).",
  "l'ours": "The bear. Masculine. Silent final s. Same root as Latin 'ursus.'",
  "l'animal de compagnie": "The pet. Literally 'companion animal.' French formal term for pet.",
  'soudain': "Suddenly. Adverb. From Latin 'subitaneus.' Narrative interruption.",
  'la': "The (feminine). Short feminine article. Elides to l' before vowel.",
  'les': "The (plural). All genders. Pronounced 'lay.'",
  'J\u2019en ai trois.': "I have three of them. Partitive 'en' replaces quantified noun.",
  "l'ordonnance": "The prescription. Feminine. From 'ordonner' (to order). Medical formal vocabulary.",
  "l'allergie": "The allergy. Feminine. -ie ending. From Greek 'allos-ergon' (other-reaction).",
  "j'aurai": "I will have. Simple future of avoir. Irregular stem aur-.",
  "j'irai": "I will go. Simple future of aller. Irregular stem ir-.",
  "l'orage": "The storm. Masculine (-age). Latin 'aura' root. Weather vocabulary.",
  "l'arc-en-ciel": "The rainbow. Masculine. Literally 'arc in sky.' Transparent compound.",
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
