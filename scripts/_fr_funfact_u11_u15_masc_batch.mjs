#!/usr/bin/env node
// French u11-u15 masc (31 cards).

import fs from 'node:fs';

const apply = process.argv.includes('--apply');
const GENERIC = 'Masculine noun. Words ending in -age, -ment, -isme are usually masculine.';

const FACTS = {
  'un jour': "One day. Invariable noun + article. 'Un' masculine indefinite. Latin 'diurnum.'",
  'le chien': "The dog. Masculine. Feminine: la chienne (doubled consonant). Latin 'canis.'",
  'le lapin': "The rabbit. Masculine. Feminine: la lapine. From Old French 'lapereau' (young rabbit).",
  'le cheval': "The horse. Masculine. Plural: chevaux. Latin 'caballus' (workhorse), not equus.",
  'le cochon': "The pig. Masculine. Also a child's nickname. From Old French 'cochon.'",
  'le mouton': "The sheep / mutton. Masculine. English 'mutton' is the Norman-French loan.",
  'le médecin / la médecin': "Doctor (m/f). Older form kept 'le' for both; modern form: 'la médecin' feminine.",
  'le professeur / la professeure': "Professor/teacher (m/f). Feminine added 'e' in 2000s. Old form invariable.",
  'le policier / la policière': "Police officer (m/f). Feminine adds -ière. Gender-paired profession.",
  'le pompier / la pompière': "Firefighter (m/f). From 'pompe' (pump). Emergency vocabulary.",
  'le cuisinier / la cuisinière': "Cook (m/f). From 'cuisine' + -ier. Same Latin root as English 'kitchen.'",
  'le chauffeur / la chauffeuse': "Driver (m/f). From 'chauffer' (to heat). Originally 'stoker' of steam cars.",
  'le pharmacien / la pharmacienne': "Pharmacist (m/f). Greek 'pharmakon' (drug/poison). Feminine doubles n.",
  'le chanteur / la chanteuse': "Singer (m/f). From 'chanter' (to sing). -eur/-euse pattern for agent nouns.",
  'le rhume': "The cold (illness). Masculine. From Latin 'rheuma' (flow). Same root as rheumatism.",
  'le mal de tête': "Headache. Compound: mal (pain) + de + tête (head). Literal.",
  'le mal de ventre': "Stomachache. Same mal + de structure. Ventre = belly (Latin 'venter').",
  'le médicament': "Medication. Masculine (-ment). From Latin 'medicamentum.'",
  'Un jour, je voyagerai autour du monde.': "One day, I will travel around the world. Simple future + autour de (around).",
  'le vent': "The wind. Latin 'ventus.' Same root as English 'vent.'",
  'le nuage': "The cloud. Masculine (-age). From Latin 'nubes.'",
  'le brouillard': "Fog. From 'brouiller' (to blur). The -ard suffix often pejorative.",
  'le tonnerre': "Thunder. Latin 'tonitrus.' Same root as English 'thunder' via Germanic.",
  'le lac': "The lake. Latin 'lacus.' Same root as English 'lake.'",
  'le plus grand': "The biggest. Superlative structure: le/la/les + plus + adjective.",
  'le livre le plus intéressant': "The most interesting book. Superlative with noun: definite article REPEATED.",
  'Le métro est plus rapide que le bus.': "The metro is faster than the bus. Plus + adj + que. Comparative.",
  'le même / la même': "The same (m/f). Invariable, only article changes. 'Le même jour' (the same day).",
  'le bateau': "The boat. Masculine. Plural: bateaux (-x). Anglo-Saxon origin.",
  'le billet': "The ticket (u15). Reinforces u7. Dual meaning: ticket + banknote.",
  'le départ': "The departure. Masculine. From partir (to leave). Paired with arrivée (fem).",
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
