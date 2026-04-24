#!/usr/bin/env node
// French u3-u4 fem -tion/-sion/-ure variant (11 cards).

import fs from 'node:fs';

const apply = process.argv.includes('--apply');
const GENERIC = 'Feminine noun. Words ending in -tion, -sion, -ure are usually feminine.';

const FACTS = {
  'la mère': "The mother. From Latin 'mater.' Silent final accent (è). French dropped the 't' (mater → mère), Spanish kept it (madre). Systematic sound-shift.",
  'la soeur': "The sister. From Latin 'soror.' Unique French diphthong 'oe.' Spanish 'hermana' and Italian 'sorella' kept more of the Latin.",
  'la grand-mère': "The grandmother. Feminine of 'grand-père.' Compound with hyphen. 'Grand' doesn't agree with gender here — fixed as prenominal.",
  'la bouche': "Mouth. From Latin 'bucca.' Same root as English 'buccal' (relating to the mouth). French often reduced to short forms.",
  'la dent': "Tooth. From Latin 'dens/dentis.' Same root as English 'dental,' 'dentist.' Silent final 't' in singular; pronounced in plural liaison.",
  'la baguette': "The baguette (French bread). Literally 'little stick.' Diminutive of 'bague' (ring) via metaphor. Became THE symbol of French bread culture.",
  'la confiture': "The jam. From Latin 'conficere' (to prepare). -ure ending signals feminine. Same root as English 'confiture' (which is borrowed from French).",
  'la viande': "The meat. From Latin 'vivenda' (that which keeps alive). Originally 'food in general' in Old French, narrowed to 'meat' specifically.",
  'la bière': "The beer. From Old German 'bior.' Germanic loan into French. Not Latin-derived, unlike most French nouns.",
  'la pomme': "The apple. From Latin 'pomum' (fruit, broadly). Narrowed in French to apple specifically. 'Pomme de terre' (apple of the earth) = potato.",
  'la carotte': "The carrot. From Latin 'carota' from Greek 'karoton.' Double 't' for phonetic stability. Same root as English 'carrot.'",
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
