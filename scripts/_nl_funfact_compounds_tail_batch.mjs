#!/usr/bin/env node
// Dutch compounds tail u7-u30 (~25 cards).

import fs from 'node:fs';

const apply = process.argv.includes('--apply');
const GENERIC = 'Dutch compounds are transparent once you learn the parts.';

const FACTS = {
  '\'s middags': "In the afternoon. Archaic genitive 's (of the) + 'middag' (midday). Parallel to 's ochtends, 's avonds. Time-of-day fossil expressions.",
  '\'s avonds': "In the evening. Same genitive-'s structure. 'Avond' from native Germanic. Evening vocabulary.",
  'het avondeten': "Dinner / evening meal. Compound: 'avond' (evening) + 'eten' (food/eating). Literal 'evening-eating.' Main meal in Dutch culture.",
  'erover': "About it. Pronominal adverb: 'er' + 'over.' For inanimates. 'Ik praat erover' (I talk about it). Can't use 'over het' — must use 'erover.'",
  'eraan': "At/to it. 'Er' + 'aan.' Prepositional-adverbial fusion. 'Ik denk eraan' (I think about it).",
  'erop': "On it. 'Er' + 'op.' Same pronominal-adverb pattern. 'De tafel erop' (the table on it).",
  'ervoor': "For it. 'Er' + 'voor.' 'Ik ben ervoor' (I'm in favor of it). Political-opinion usage.",
  'waarover': "About what / which. Question-word pronominal adverb. 'Waar' + 'over.' For inanimate questions.",
  'waaraan': "At what / to what. Same pattern. 'Waaraan denk je?' (what are you thinking about?).",
  'waarop': "On what / which. Same structure. 'De dag waarop' (the day on which). Formal relative.",
  'waardoor': "By what / through which. Pronominal adverb: 'waar' + 'door.' 'Waardoor ben je hier?' (how did you get here? — through what).",
  'het huurcontract': "The rental contract. Compound: 'huur' (rent) + 'contract.' Straightforward. Always het because of 'contract.'",
  'werkend': "Working (participle/adjective). Present participle of 'werken' + '-d.' 'Een werkend moeder' (a working mother). Regular pattern.",
  'groeiend': "Growing (participle). From 'groeien' (to grow). Same -d pattern. 'Een groeiend probleem' (a growing problem).",
  'komend': "Coming / upcoming. From 'komen.' 'De komende week' (the coming week) — future reference.",
  'lopend': "Walking / current. Dual meaning: 'a walking person' AND 'current/ongoing matter.' Context disambiguates.",
  'de fietsenstalling': "Bike shelter / bike parking. Compound: 'fietsen' (bikes, plural) + 'stalling' (storage, from 'stallen'). Essential Dutch urban infrastructure.",
  'het koffiezetapparaat': "Coffee machine. Compound: 'koffie' (coffee) + 'zet' (make) + 'apparaat' (device). Literally 'coffee-making device.' Classic Dutch compound length.",
  'ik had moeten': "I should have. Pluperfect modal. 'Had' + 'moeten' (must, infinitive). Modal verbs don't take past participle — they use infinitive in this construction.",
  'ik had kunnen': "I could have. Same pluperfect modal structure. 'Kunnen' (can, infinitive). Expresses past ability not realized.",
  'ik had beter kunnen': "I'd better have. Adds 'beter' (better) for ought-to flavor. Regret/advisory structure.",
  'ik had willen': "I wanted to / would have wanted. 'Willen' (want, infinitive). Past-tense counterfactual desire.",
  'het slaaptekort': "Sleep deficit. Compound: 'slaap' (sleep) + 'tekort' (deficit). Modern health vocabulary.",
  'de sleutelwoorden': "The keywords. Compound: 'sleutel' (key) + 'woorden' (words). Plural takes 'de.' Essay/research vocabulary.",
  'de tijdsdruk': "Time pressure. Compound: 'tijd' (time) + 's' (genitive) + 'druk' (pressure). Modern workplace vocabulary.",
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
