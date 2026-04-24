#!/usr/bin/env node
// French masc final 46 cards.

import fs from 'node:fs';

const apply = process.argv.includes('--apply');
const GENERIC = 'Masculine noun. Words ending in -age, -ment, -isme are usually masculine.';

const FACTS = {
  'le téléphone / le portable': "Phone / cell phone. Portable short for 'téléphone portable.' French coinage.",
  "le courriel / l'e-mail": "Email. Courriel (Québec coinage: courrier + électronique). E-mail used in France.",
  'le mot de passe': "Password. Compound: mot (word) + de + passe (pass). Literal. Security vocab.",
  'le diplôme': "Diploma / degree. From Greek 'diploma' (folded document). Education vocabulary.",
  'le devoir': "Homework / duty. Dual meaning. From devoir (to have to). Obligation + school task.",
  'le professeur': "Professor / teacher. Masculine traditional form. Feminine added: professeure (new norm).",
  'le cours': "The class / lecture. From Latin 'cursus' (course). Same root as English 'course.'",
  "Le film dont je parle": "The film I'm talking about. Dont = de-based relative (parler de).",
  "Le jour où je t'ai rencontré": "The day when I met you. Où = relative of time or place.",
  'le changement': "The change. -ment masculine. From changer + -ment. Abstract noun.",
  'Le livre est lu par les étudiants': "The book is read by the students. Passive + par + plural agent.",
  'Le pont est construit par les ouvriers': "The bridge is built by the workers. Construction passive.",
  'Le voleur a été arrêté par la police': "The thief was arrested by the police. Passé composé passive.",
  'Le projet sera terminé demain': "The project will be finished tomorrow. Future passive.",
  'le prêt': "The loan. From prêter (to lend). Banking vocabulary.",
  'le salaire': "The salary / wages. From Latin 'salarium' (salt money — Roman soldier payment).",
  'le reçu': "The receipt. Past participle of recevoir used as noun. 'Received paper.'",
  'le journal': "The newspaper. From 'jour' (day) + -nal. Literally 'daily.' Same root as English 'journal.'",
  'le poste': "The position / role. Dual use: job position AND radio station. Same word.",
  'le patron / la patronne': "The boss. Feminine doubles n. From Latin 'patronus' (protector). Same root as English 'patron.'",
  'le CV': "The CV / resume. Abbreviation of curriculum vitae. Used identically in French.",
  'le dossier': "File / folder / case. From dos (back). Folders originally had an index on the back.",
  'le délai': "The deadline / timeframe. From Latin 'dilatus.' Administrative-term.",
  'le planning': "The schedule / plan. English loan. French keeps the -ing ending.",
  "le comité d'entreprise": "The works council / staff committee. French labor-law institution. Employee representation body.",
  'Le projet a été approuvé par le directeur': "The project was approved by the director. Passé composé passive.",
  'le courriel': "The email (u24 reinforces). Québec coinage now standard.",
  'le chef': "The boss. From Latin 'caput' (head). Same root as English 'chief.'",
  'Le suspect aurait fui le pays': "The suspect allegedly fled. Journalistic conditional = unconfirmed claim.",
  'un corpus': "A corpus / body of work. Latin 'corpus' (body). Academic/linguistics term.",
  'un document authentique': "An authentic document. Academic classification of primary sources.",
  'un argument': "An argument / point. Same root as English. Debate vocabulary.",
  'un mot-clé': "A keyword. Compound with hyphen. Mot (word) + clé (key).",
  'le locuteur': "The speaker. From Latin 'locutor' (speaker). Linguistic term.",
  'un essai argumentatif': "An argumentative essay. Compound: essai (essay) + argumentatif. Academic writing.",
  'le développement': "The body / development. Essay-structure term. -ment masculine.",
  'un exposé': "A presentation / oral exposé. From 'exposer' (to expose). Academic presentation.",
  'le subjonctif': "The subjunctive mood. From Latin 'subjunctivus.' Grammar term.",
  'le conditionnel passé': "The past conditional. Compound grammar term.",
  'le marché du travail': "The job market. Compound: marché (market) + du + travail.",
  'le réchauffement climatique': "Climate change. Compound: réchauffement (warming) + climatique. Environmental vocab.",
  'le patrimoine culturel': "Cultural heritage. Patrimoine from 'patrimonium' (inheritance). Same root as English 'patrimony.'",
  'le subjonctif plus-que-parfait': "The pluperfect subjunctive. Rare literary tense. Academic grammar.",
  'le passé simple': "The literary past tense. Narrative tense used in written French, not spoken.",
  'le ne explétif': "The expletive ne. Non-negative ne used after verbs of fear, doubt, comparison. Formal French.",
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
