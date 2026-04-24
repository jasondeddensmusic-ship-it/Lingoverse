#!/usr/bin/env node
// Dutch het-words u3-u10 (~27 cards).

import fs from 'node:fs';

const apply = process.argv.includes('--apply');
const GENERIC = "A het-word (neuter). About 1/3 of Dutch nouns use 'het'. No reliable rule, learn it with the word.";

const FACTS = {
  'het is ... uur': "'It is ... o'clock.' 'Uur' (hour) is het-word. Time-telling formula. Literally 'it is ... hour.' 'Het is drie uur' (it's 3 o'clock).",
  'het kopje': "Little cup. Het-word — ALL diminutives (-je) are het-words. This is a rule: adding -je turns any noun into a het-word, regardless of original gender.",
  'het stukje': "Little piece. Het-word (diminutive). From 'stuk' (piece) + '-je.' Diminutive makes affectionate or small.",
  'het kaartje': "Little card / ticket. Het-word (diminutive). From 'kaart' (card/map). 'Kaartje' specifically means ticket: bus, cinema, event.",
  'het shirt': "Shirt. Het-word. English loanword. Modern Dutch borrows English fashion terms as het-words by default — neuter is the 'foreign/borrowed' gender.",
  'het noorden': "The north (region). Het-word. All Dutch cardinal directions as regions are het-words: het noorden, het zuiden, het oosten, het westen.",
  'het zuiden': "The south (region). Het-word. The suffix -en here marks the cardinal-direction region noun. Without -en: 'zuid' (prefix form).",
  'het oosten': "The east (region). Het-word. 'Het Midden-Oosten' (the Middle East). Part of the regional-direction system.",
  'het westen': "The west (region). Het-word. 'Het wilde Westen' (the Wild West). Regional noun — contrast 'het westen van Nederland' (the west of the Netherlands).",
  'het voltooid deelwoord': "The past participle. Het-word. Grammar term. Literally 'completed partial-word.' Dutch grammar metalanguage is transparent and native.",
  'het ontbijt': "Breakfast. Het-word. Compound: 'ont-' (intensive prefix) + 'bijten' (to bite). Literally 'biting-time.' Historical — the first bite after fasting.",
  'het meest': "The most. Het-word (neuter superlative). Used when the object/idea referred to is abstract. 'Het meest interessant' (the most interesting).",
  'het minst': "The least. Het-word. Mirror of 'het meest.' Neuter-abstract superlative.",
  'het konijn': "Rabbit. Het-word. Loanword from Latin 'cuniculus' (same root as Spanish 'conejo'). Compare to 'de haas' (the hare) which is de-word.",
  'het paard': "Horse. Het-word. Native Germanic. Contrast with English 'horse' (from different root). Dutch preserves older 'paard' ~ German 'Pferd.'",
  'het varken': "Pig. Het-word. Diminutive form of archaic 'var' (male pig). Always het because of the diminutive history.",
  'het huisdier': "Pet. Het-word. Compound: 'huis' (house) + 'dier' (animal). Literally 'house-animal.' Compound inherits 'dier' gender (het).",
  'het ziekenhuis': "Hospital. Het-word. Compound: 'zieken' (sick-plural) + 'huis' (house). Literally 'sick-people's house.' Compound inherits 'huis' gender.",
  'het recept': "Recipe / prescription. Het-word. From Latin 'receptum.' Dual meaning: cooking recipe AND medical prescription. Same word for both.",
  'het vliegtuig': "Airplane. Het-word. Compound: 'vlieg' (fly) + 'tuig' (gear/device). Literally 'flying-device.' Classic transparent Dutch compound.",
  'het verhaal': "Story. Het-word. Native Dutch. 'Een goed verhaal' (a good story). Central in Dutch literature vocabulary.",
  'het meer': "Lake. Het-word. Native Germanic. Cognate with English 'mere' (archaic 'lake') and 'sea' (distant relative). Different from 'de zee' (the sea).",
  'het bos': "Forest / woods. Het-word. Cognate with English 'bush' and German 'Busch.' Forest-types: loofbos (deciduous), naaldbos (conifer).",
  'het bericht': "Message / report. Het-word. From 'berichten' (to report). News and messaging word — texts, emails, official reports all 'bericht.'",
  'het wachtwoord': "Password. Het-word. Compound: 'wacht' (guard/watch) + 'woord' (word). Literally 'guard-word.' Security-sector vocabulary.",
  'het scherm': "Screen. Het-word. Native Dutch. Also means 'shield' in older usage — a screen once meant a protective barrier. Tech extended it to displays.",
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
