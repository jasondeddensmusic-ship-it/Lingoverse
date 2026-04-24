#!/usr/bin/env node
// French u1-u3 '30% of English' variant (40 cards).

import fs from 'node:fs';

const apply = process.argv.includes('--apply');
const GENERIC = 'French gave English roughly 30% of its vocabulary. Many formal English words have French origins.';

const FACTS = {
  // u1 — greetings
  'Bonsoir': "Good evening. 'Bon' (good) + 'soir' (evening). Used from ~6pm onwards. Replaces 'bonjour.' Sharper cutoff than English greetings.",
  'Salut': "Hi / Hey (casual). Same Latin root as English 'salute' (greeting). In French, also means 'bye' — dual-purpose intimate greeting.",
  'Bonne nuit': "Good night. 'Bonne' (good) + 'nuit' (night). Used ONLY before bed. Not a general farewell like English 'good night.'",
  'À bientôt': "See you soon. 'À' (at/to) + 'bientôt' (soon). Short future — within a day or so.",
  'À demain': "See you tomorrow. 'À' + 'demain' (tomorrow). Specific-day farewell. From Latin 'de mane' (from the morning).",
  'À plus tard': "See you later. 'Plus tard' = later. Often shortened in texting to 'A+' or 'à plus.' Modern casual.",
  'Bonne journée': "Have a nice day. 'Journée' = a whole day as experienced. Contrast 'jour' (day as a unit of time). The 'journée/jour' distinction is unique.",
  'Bonne soirée': "Have a nice evening. 'Soirée' = evening as an event (party, outing). Different from 'soir' (evening as a time slot).",
  'Comment allez-vous?': "How are you? (formal). Literally 'how are-you going.' French uses 'aller' (to go) for well-being. Inversion of verb+subject marks formality.",
  'Ça va?': "How's it going? (casual). Literally 'that goes?' Short, ubiquitous. Reply: 'Ça va' (it goes = I'm fine).",
  'Très bien': "Very well. 'Très' (very, from Latin 'trans' = across/beyond) + 'bien' (well). English 'very' comes from Old French 'verai' (true).",
  'Comme ci, comme ça': "So-so. Literally 'like this, like that.' Same phrase used in many Romance languages. Expressively non-committal.",
  'Pas mal': "Not bad. 'Pas' (not) + 'mal' (bad). Understated French positive — often means 'actually quite good.'",
  'S\'il vous plaît': "Please (formal). Literally 'if it pleases you.' Same structure as Italian 'per favore.' Formal — 's'il te plaît' is casual.",
  'De rien': "You're welcome. Literally 'of nothing.' Same as Spanish 'de nada.' Downplays the favor — French dismissive courtesy.",
  'Excusez-moi': "Excuse me (formal). 'Excusez' (excuse, imperative plural) + 'moi' (me). Used to get attention or apologize lightly.",
  'Comment vous appelez-vous?': "What is your name? (formal). Literally 'how do you call yourself.' Reflexive self-naming — different from English 'what is.'",
  'Enchanté / Enchantée': "Nice to meet you. Literally 'enchanted.' Feminine form adds -e. The magic/spell etymology survives in formal politeness.",
  'Moi, c\'est...': "'Me, I'm...' (casual intro). Dislocated pronoun 'moi' (me) before the copula. Very colloquial, relaxed French.",
  'L\'addition, s\'il vous plaît': "'The check, please.' Restaurant essential. 'Addition' = 'the adding up' of items. French treats the bill as the 'sum.'",
  'Oui': "Yes. From Latin 'hoc illud' (that's it). Contrasts with 'si' (yes in contradiction) and 'oui-da' (archaic emphatic yes).",
  'Non': "No. From Latin 'non.' Shorter, sharper than English 'no.' French negatives often come in pairs: 'ne...pas.'",

  // u2
  'français / française': "French (m/f). Adjective agrees with noun gender. Note lowercase: adjective, not nationality-noun. 'Un Français' (a French person, capital) vs 'parle français' (speaks French, lowercase).",
  'anglais / anglaise': "English (m/f). Same gender-agreement. 'Les Anglais' (the English, capital), 'je parle anglais' (I speak English, lowercase). Nationality + language distinction.",
  'américain / américaine': "American (m/f). Note: when 'américain' is the ethnicity noun it's capitalized; as adjective/language it's lowercase.",
  'treize, quatorze, quinze, seize': "13, 14, 15, 16. All derived from Latin 'decem + ' + number (tredecim, quattuordecim). The -ze ending preserves 'decim' (ten) compressed.",
  'dix-sept, dix-huit, dix-neuf': "17, 18, 19. Compound: 'dix' (10) + unit. Unlike 13-16 which are merged, 17-19 are transparent compounds. Mixed system.",
  'J\'ai ... ans': "'I am ... years old.' Literally 'I have ... years.' French uses 'avoir' for age; English uses 'to be.' Romance-language pattern.",
  'D\'où venez-vous?': "Where do you come from? (formal). 'D'' (from) + 'où' (where) + 'venez' (come) + 'vous' (you formal). Inversion marks formality.",
  'Quel âge avez-vous?': "How old are you? (formal). Literally 'what age have-you.' Uses 'avoir' again for age. The 'quel' (what/which) agrees with gender.",
  'Quelle est votre profession?': "What is your profession? (formal). 'Quelle' feminine to agree with 'profession' (feminine). Gender agreement is mandatory on interrogatives.",

  // u3
  'son / sa / ses': "His, her, its (m/f/plural). Dutch/English distinguishes his/her by OWNER gender. French distinguishes by OBJECT gender. 'sa voiture' = his/her car (feminine object).",
  'votre / vos': "Your (formal/plural). 'Votre' singular, 'vos' plural. Doesn't vary by gender — formal politeness trumps gender marking.",
  'gentil / gentille': "Nice, kind (m/f). From Old French 'gentil' (noble). Same root as English 'gentle.' Adjectives doubling consonant + -e for feminine.",
  'l\'oncle / la tante': "The uncle / the aunt. Same Latin-root pair as English aunt/uncle via Old French. 'Tante' also means 'aunt' colloquially across France.",
  'J\'ai ... frères et ... soeurs': "'I have ... brothers and ... sisters.' Uses 'avoir' for family. Note: no accent on 'soeurs' in some spellings; modern standard is 'sœurs' with ligature.",
  'Il/Elle s\'appelle...': "His/Her name is... Reflexive 'se' (himself/herself). Literally 'he/she calls himself/herself.' Systematic reflexive self-naming.",
  'Il/Elle a ... ans': "He/She is ... years old. Same 'avoir' + age pattern, third-person. Consistent across pronouns.",
  'bon / bonne': "Good (m/f). The feminine doubles the n: bon → bonne. Sound-preservation rule: without the doubled n, the pronunciation would change.",
  'le nez': "Nose. From Latin 'nasus.' Same root as English 'nasal.' Silent final -z is French spelling conservatism.",
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
