#!/usr/bin/env node
// French u18-u30 fem (40 cards).

import fs from 'node:fs';

const apply = process.argv.includes('--apply');
const GENERIC = 'Feminine noun. Words ending in -tion, -sion, -ure are usually feminine.';

const FACTS = {
  'La voiture qui est rouge est à moi.': "The car that is red is mine. Relative pronoun qui (subject). Voiture is feminine, adjective rouge invariable.",
  "La personne qu'il a rencontrée": "The person (whom) he met. Relative que (object) + past participle agrees with preceding direct object: rencontrée (fem sing).",
  "La ville où j'habite": "The city where I live. Relative pronoun où = where. Ville is feminine.",
  "La femme que j'ai rencontrée hier, qui travaille à la banque, est très sympa.": "The woman I met yesterday, who works at the bank, is very nice. Two relative clauses stacked with que + qui.",
  'la connaissance': "The knowledge. From 'connaître' + -ance. Feminine abstract noun. -ance endings reliably feminine.",
  'La lettre est écrite par Marie': "The letter is written by Marie. Passive voice. 'Être' + past participle agrees with subject: écrite (fem sing).",
  'La chanson est chantée par tout le monde': "The song is sung by everyone. Passive + par (by). Chantée agrees with chanson (fem).",
  'La décision est prise par le directeur': "The decision is made by the director. Passive with prise (fem past participle of prendre).",
  'La maison était entourée de fleurs': "The house was surrounded by flowers. Imperfect passive. Entourée agrees with maison.",
  'la loi': "The law. Feminine. From Latin 'lex/legis.' Same root as English 'legal.'",
  'une histoire intéressante': "An interesting story. Adjective agreement: intéressante feminine.",
  'une rue passante': "A busy street. Passant(e) means 'busy with passersby.' Present participle as adjective.",
  'la publicité': "The advertisement. Feminine. From Latin 'publicus.' Abstract -ité feminine suffix.",
  'la candidature': "The application. -ure = feminine. From 'candidat' (candidate) + -ure. Latin 'candidus' (white).",
  'la lettre de motivation': "The cover letter. Compound noun phrase. Motivation = motivation. Job-application essentials.",
  'la réunion': "The meeting. From 'réunir' (to reunite). -ion = feminine. Business essential.",
  'la pause déjeuner': "The lunch break. Compound: pause + déjeuner. Italian loan 'pause.' Working-day routine.",
  'la date limite': "The deadline. Compound: date + limite. Literally 'limit date.'",
  'la salle de réunion': "The meeting room. Compound: salle (hall) + de + réunion.",
  'la grandeur': "The greatness / grandeur. -eur feminine abstract suffix. From grand + -eur.",
  'la douceur': "The softness / gentleness. -eur fem. From doux/douce + -eur. Sensory abstract noun.",
  'la tristesse': "The sadness. -esse feminine suffix. From triste + -esse. Emotional abstract noun.",
  'la richesse': "The wealth / richness. -esse fem. From riche + -esse. Abstract noun.",
  'La suppression de postes': "The elimination of positions. Suppression -ion fem. HR vocabulary. Compound noun phrase.",
  'une problématique': "A research question. -ique fem. Academic French terminology.",
  'La mise en oeuvre': "The implementation. Mise (fem past participle of mettre) + en + oeuvre (work). Fixed phrase.",
  'La prise en compte': "The consideration / taking into account. Prise (past participle of prendre) + en + compte. Fixed phrase.",
  'La remise en question': "The questioning / calling into question. Remise + en + question. Academic-criticism phrase.",
  'la thèse': "The thesis / argument. From Greek. Same root as English 'thesis.' Feminine.",
  'la synthèse': "The synthesis / resolution. Greek 'synthesis.' Essay-writing structure.",
  'une comparaison': "A simile. -aison fem. From comparer + -aison. Rhetorical device.",
  'une litote': "A litotes / understatement. Greek rhetorical term. Feminine.",
  'une hyperbole': "A hyperbole / exaggeration. Greek 'hyperbole' (excess). Rhetorical device.",
  'la reformulation': "Reformulation / rephrasing. -tion fem. Academic writing tool.",
  'une émission de radio': "A radio broadcast. Émission from émettre + -tion. Media vocabulary.",
  'une formule de politesse': "A closing formula / polite sign-off. Formal letter ending.",
  'la citoyenneté': "Citizenship. -té abstract fem suffix. From citoyen (citizen). Civics vocabulary.",
  "la simulation d'examen": "Exam simulation. -tion fem. Academic preparation vocabulary.",
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
