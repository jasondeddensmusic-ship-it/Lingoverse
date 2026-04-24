#!/usr/bin/env node
// French u26-u30 30% variant (40 cards).

import fs from 'node:fs';

const apply = process.argv.includes('--apply');
const GENERIC = 'French gave English roughly 30% of its vocabulary. Many formal English words have French origins.';

const FACTS = {
  // u26 — past conditional
  "J'aurais parlé": "I would have spoken. Past conditional: aurais (conditional of avoir) + participle.",
  "J'aurais préféré rester": "I would have preferred to stay. Past conditional + infinitive. Regret marker.",
  "Si j'avais su, j'aurais agi autrement": "If I had known, I would have acted differently. Type-3 conditional: si + pluperfect, then past conditional.",
  'Si nous avions pris le train, nous serions arrivés à l\u2019heure': "If we had taken the train, we would have arrived on time. Same Type-3 structure.",
  'On aurait pu éviter cette erreur': "One could have avoided this mistake. Past conditional of pouvoir. Missed-opportunity regret.",
  'Si j\u2019avais accepté ce poste, je vivrais à Lyon maintenant': "Mixed conditional: if I had accepted that position, I would now live in Lyon. Pluperfect + present conditional.",
  'Si j\u2019étais plus courageux, j\u2019aurais parlé': "Mixed conditional: if I were braver, I would have spoken. Imperfect + past conditional.",
  'Si tu n\u2019avais pas raté le train, tu ne m\u2019aurais jamais rencontré': "If you had not missed the train, you would never have met me. Complex conditional.",
  "L'entreprise aurait perdu des millions": "The company would have lost millions. News-style conditional = reported unverified claim.",
  'Selon des témoins, l\u2019accident aurait été causé par le verglas': "According to witnesses, the accident would have been caused by ice. Journalistic conditional.",
  "l'organisation (f.)": "The organization. Feminine -tion. Cognate with English.",
  "l'amélioration (f.)": "Improvement. -tion feminine. From améliorer (to improve).",
  "L'augmentation des prix": "Price increase. Compound noun phrase. Economics.",
  'Force est de constater': "It must be acknowledged. Literary formal. Force (force) + est (is) + de + infinitive.",
  'On constate que': "It can be observed that / we note that. On impersonal. Formal academic-style.",
  'en premier lieu': "In the first place. Lieu = place. Essay-ordering.",
  'en outre': "Moreover / furthermore. Formal additive. Reinforces u22.",
  'par ailleurs': "Furthermore / besides. Alternative to en outre. Essay tool.",
  'en revanche': "On the other hand / however. Revanche = revenge/return. Contrast marker.",
  'en effet': "Indeed / in fact. Reinforcing statement. 'En effet' = a confirmation.",
  "c'est pourquoi": "That's why. Reinforced.",
  'par conséquent': "Consequently. With missing accent (should be 'conséquent'). Formal result.",
  'même si + indicatif': "Even if + indicative. Unlike bien que + subj, même si takes indicative.",
  'certes... mais': "Admittedly... but. Concessive structure. Certes = certainly (concession).",
  'à mon avis': "In my opinion. Avis = opinion. Common phrase.",
  'selon moi': "According to me / in my opinion. Selon = according to.",
  'force est de constater que': "It must be acknowledged that. Formal introducer. Reinforces u27 entry.",
  'Qui vivra verra': "Who lives, will see. Fixed proverb: 'time will tell.' Future tense ellipsis.",
  'Mieux vaut tard que jamais': "Better late than never. Direct French-English mirror.",
  'L\u2019habit ne fait pas le moine': "Clothes don't make the monk. Don't judge by appearances. Proverb.",
  'c\u2019est la cerise sur le gâteau': "The cherry on the cake. Identical to English idiom.",
  'quand les poules auront des dents': "When hens have teeth. Equivalent to English 'when pigs fly.' Never.",
  'nonobstant': "Notwithstanding. Archaic formal. Legal and literary.",
  'en l\u2019occurrence': "In this case / in this instance. Legal-academic formal.",
  'au demeurant': "Moreover / besides (archaic). Formal-literary only.",
  'L\u2019essentiel est invisible pour les yeux.': "The essential is invisible to the eye. From Le Petit Prince by Saint-Exupéry.",
  "L'enfer, c'est les autres.": "Hell is other people. Quote from Sartre's 'Huis Clos.' French cultural touchstone.",
  'On ne voit bien qu\u2019avec le cœur.': "One sees clearly only with the heart. Also from Le Petit Prince.",
  'la prise de notes': "Note-taking. Compound: prise (taking) + de + notes. Academic vocabulary.",
  'une lettre formelle': "A formal letter. Adjective agreement: formelle (feminine). Business/official register.",
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
