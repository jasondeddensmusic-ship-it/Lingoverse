#!/usr/bin/env node
// French u5-u9 masc/fem (57 cards).

import fs from 'node:fs';

const apply = process.argv.includes('--apply');
const GENERIC = 'French nouns are either masculine or feminine. The article gives it away.';

const FACTS = {
  'de ... à ...': "From ... to ... Duration phrase. De (from) + à (to) + times. Common for schedules.",
  'mars': "March. From Latin 'Martius' (month of Mars). Silent s.",
  'mai': "May. From Latin 'Maius.' Short, no accent needed.",
  'juin': "June. From Latin 'Junius.' Silent n.",
  'juillet': "July. From Latin 'Julius' (Julius Caesar's month). Silent t.",
  'août': "August. From Latin 'Augustus.' Silent t. Circumflex on û = historical silent 'g.'",
  "l'été": "Summer. Masculine. From Latin 'aestas.' É shows the Latin ae > é shift.",
  "l'automne": "Autumn. Masculine. From Latin 'autumnus.' Silent m+n at end.",
  'les toilettes': "Toilets. Plural in French (always). Even for one bathroom, use 'les toilettes.'",
  'dans': "In. From Latin 'de intus' (from within). Silent final s.",
  'sur': "On. From Latin 'super.' Short form, silent final r in some contexts.",
  'sous': "Under. From Latin 'subtus.' Silent s. Same root as English 'sub-.'",
  'grand': "Tall, big (masc). Silent d. Latin 'grandis.'",
  'petit': "Small (masc). Silent t. Latin 'pit-' (little, diminutive root).",
  'chez moi': "At my place. Chez from Latin 'casa' (house). Same root as Spanish 'casa,' Italian 'casa.'",
  'lumineux': "Luminous, bright. -eux adjective ending. From Latin 'lumen.' Same root as English 'luminous.'",
  "l'hôpital": "The hospital. Masculine. Circumflex on ô = historical silent 's' (Old French 'hospital'). English kept the s.",
  'tournez': "Turn (imperative formal/plural). Vous form. From Latin 'tornare.' Same root as English 'turn.'",
  'continuez': "Continue (imperative formal/plural). Vous form. Latin 'continuare.' Same root.",
  'Allons-y!': "Let's go! Imperative nous form + y (there). Classic French cheer phrase.",
  "l'église": "Church. Feminine. From Greek 'ekklesia' via Latin. Same root as English 'ecclesiastical.'",
  "l'est": "East. Masculine. Germanic loan via Old French. Same root as English 'east.'",
  "l'ouest": "West. Masculine. Germanic. Same root as English 'west.'",
  'des chaussures': "Shoes. Plural. From 'chausse' (leg covering). Related to English 'hose' via Old French.",
  'rouge': "Red. From Latin 'rubeus.' Same root as English 'ruby.'",
  'vert / verte': "Green (m/f). Latin 'viridis.' Silent final t in masculine; sounded t in feminine.",
  'jaune': "Yellow. From Latin 'galbinus' (greenish-yellow). Short, native to Romance.",
  'marron': "Brown. From Italian 'marrone' (chestnut). Color named after the fruit.",
  'rose': "Pink. Invariable — doesn't change gender. Named after the flower.",
  'trente': "Thirty. Latin 'triginta.' Regular -ente pattern.",
  'quarante': "Forty. Latin 'quadraginta.' Same -ante pattern as trente.",
  'cinquante': "Fifty. Latin 'quinquaginta.' Same pattern.",
  'soixante': "Sixty. Latin 'sexaginta.' Silent x.",
  'soixante-dix': "Seventy (lit. 60+10). French stops regular -ante at 60. Swiss and Belgian French say septante instead.",
  'quatre-vingts': "Eighty (lit. four-twenties). Old vigesimal (base-20) counting. Belgian French: octante.",
  'ce': "This (masc). Demonstrative adjective. Before vowel: cet.",
  'cet': "This (masc, before vowel). Euphonic variant of ce. Cet arbre (this tree).",
  'cette': "This (fem). Regular. Double-t + e marks feminine.",
  'ces': "These (plural). All genders. Short form.",
  'ce...ci / ce...là': "This ... here / that ... there. Emphatic distance markers. Optional suffixes.",
  'cent': "One hundred. Silent t. Latin 'centum.' Root of percent, century.",
  'mille': "One thousand. Silent e. Latin 'mille.' Root of million, millennium.",
  'des chaussettes': "Socks. Plural. Diminutive of chausse (leg covering). Literally 'little leg-coverings.'",
  'des gants': "Gloves. Plural. From Germanic 'want' (glove, mitten). Old Frankish loan.",
  'fini': "Finished. Past participle of finir. Regular -ir verb. Same root as English 'finish.'",
  'choisi': "Chosen. Past participle of choisir. Regular -ir. Germanic origin (from 'causir').",
  'vendu': "Sold. Past participle of vendre. Regular -re verb with -u ending.",
  'attendu': "Waited for. Past participle of attendre. Regular -re + -u.",
  'répondu': "Responded. Past participle of répondre. Regular -re.",
  'fait': "Done, made. Past participle of faire (irregular). Very short. Silent t.",
  'pris': "Taken. Past participle of prendre. Irregular. Silent s.",
  'bu': "Drunk. Past participle of boire. Irregular, short.",
  'vu': "Seen. Past participle of voir. Irregular.",
  'eu': "Had. Past participle of avoir. Pronounced /y/. Highly irregular.",
  'dit': "Said. Past participle of dire. Silent t.",
  'écrit': "Written. Past participle of écrire. Silent t.",
  'lu': "Read. Past participle of lire. Irregular.",
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
