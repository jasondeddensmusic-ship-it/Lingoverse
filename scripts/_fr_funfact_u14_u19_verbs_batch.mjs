#!/usr/bin/env node
// French u14-u19 verbs (54 cards).

import fs from 'node:fs';

const apply = process.argv.includes('--apply');
const GENERIC = 'French verbs change form for each person. The spoken forms are often simpler than the written ones.';

const FACTS = {
  'Je vais manger.': "I am going to eat. Near future: aller + infinitive. Spoken-French default future.",
  'Nous allons voyager.': "We are going to travel. Same near-future structure with nous.",
  'Il va pleuvoir.': "It is going to rain. Weather + near-future. Pleuvoir irregular.",
  'je parlerai': "I will speak. Simple future. -er verb adds -erai to infinitive. More formal/written than aller+inf.",
  'nous finirons': "We will finish. -ir verb future. Nous adds -ons to future stem.",
  'il prendra': "He will take. Irregular future of prendre. Stem: prendr- + a.",
  'je serai': "I will be. Irregular future of être. Stem ser- (not êtr-).",
  "Je vais t'appeler ce soir.": "I will call you tonight. Object pronoun t' before infinitive in near-future.",
  'Ce week-end, je vais me reposer.': "This weekend, I am going to rest. Reflexive verb in near-future. Me reposer.",
  'Je te promets que je reviendrai.': "I promise you I will come back. Present + future. Reviendrai irregular future of revenir.",
  'mieux': "Better (adverb). Irregular comparative of bien. Adverb form contrasts with meilleur (adjective).",
  'plus vite que': "Faster than. Plus + adverb + que = comparative of superiority. Vite invariable.",
  'moins souvent que': "Less often than. Moins + adverb + que = comparative of inferiority.",
  'je voudrais': "I would like. Conditional of vouloir. Softer than 'je veux.' Polite request formula.",
  'je serais': "I would be. Conditional of être. Used in hypotheticals.",
  'je devrais': "I should. Conditional of devoir. Moral/obligation advice.",
  "J'aimerais vivre à la campagne.": "I would like to live in the countryside. Conditional aimerais + infinitive.",
  'Tu devrais te reposer.': "You should rest. Conditional + reflexive. Advice structure.",
  'Il faudrait': "One should / it would be necessary. Impersonal conditional of falloir. Polite suggestion.",
  'Il a dit qu\u2019il viendrait.': "He said he would come. Reported speech: past tense + conditional (future-in-past).",
  'Ce serait possible de changer de table?': "Would it be possible to change tables? Polite conditional question. Restaurant vocabulary.",
  'Il faut que': "It is necessary that. Triggers subjunctive. Il faut que + subjunctive verb.",
  'Je veux que': "I want that. Triggers subjunctive. Desire + que + subjunctive.",
  'Je suis content que': "I am happy that. Emotion + que + subjunctive. Emotions trigger subjunctive.",
  'Il faut que je fasse attention.': "I have to pay attention. Il faut que + subjunctive fasse (from faire).",
  'Il faut que nous partions.': "We have to leave. Subjunctive of partir.",
  'Je suis surpris qu\u2019il soit là.': "I am surprised he is here. Subjunctive soit (from être).",
  'Je pense qu\u2019il a raison.': "I think he is right. Affirmative opinion = indicative.",
  'Je ne pense pas qu\u2019il ait raison.': "I do not think he is right. NEGATIVE opinion = subjunctive. Ait = subjunctive of avoir.",
  'L\u2019homme qui parle est mon professeur.': "The man who is speaking is my teacher. Relative pronoun qui (subject).",
  'Le livre que je lis est intéressant.': "The book that I am reading is interesting. Relative que (object).",
  "Ce qui m'intéresse, c'est...": "What interests me is... Ce qui + verb = 'that which.' Abstract relative.",
  'Je ne sais pas ce que tu veux.': "I do not know what you want. Ce que = 'that which' as object.",
  'Tu avais fini': "You had finished. Pluperfect: imparfait of avoir + past participle.",
  'Il avait compris': "He had understood. Pluperfect. Irregular past participle compris.",
  'Nous avions choisi': "We had chosen. Pluperfect. Regular past participle of choisir.",
  'Vous aviez lu': "You had read. Pluperfect with irregular participle lu (from lire).",
  'Ils avaient pris': "They had taken. Pluperfect with prix. Four verb-tense layers at once.",
  'Il était parti': "He had left. Pluperfect with être + motion verb. Participle agrees: parti (masc sing).",
  'Elle était venue': "She had come. Pluperfect with être + feminine agreement: venue.",
  'Nous étions arrivés': "We had arrived. Pluperfect with plural agreement: arrivés.",
  'Elles étaient tombées': "They (fem) had fallen. Full feminine-plural agreement: tombées.",
  'Elle a compris parce qu\u2019elle avait étudié.': "She understood because she had studied. Passé composé + pluperfect: cause-before-effect.",
  'Nous avons pris un taxi parce que le bus était parti.': "We took a taxi because the bus had left. Same structure.",
  'Ils ont découvert qu\u2019on avait volé leur voiture.': "They discovered that someone had stolen their car. Subordinate pluperfect.",
  'Si elle était venue, elle aurait aimé.': "If she had come, she would have liked it. Si + pluperfect + past conditional. Type 3 conditional.",
  'Il a dit qu\u2019il avait vu le film.': "He said he had seen the film. Reported speech with pluperfect in subordinate.",
  'Elle m\u2019a dit qu\u2019elle était allée à Paris.': "She told me she had gone to Paris. Pluperfect + gender agreement.",
  'Ils ont expliqué qu\u2019ils avaient perdu les clés.': "They explained they had lost the keys. Reported pluperfect.",
  'Tu m\u2019as dit que tu avais fini.': "You told me you had finished. Past reporting of a completed anterior event.",
  'déjà': "Already. From dé + jà (from Latin iam). Adverb of completion.",
  'avant de + infinitif': "Before + infinitive. Avant de manger (before eating). Prep + de + inf structure.",
  'toujours': "Always, still. Dual meaning: permanent (always) or continuation (still). Context decides.",
  'Il pleuvait quand je suis sorti. J\u2019avais oublié mon parapluie.': "It was raining when I went out. I had forgotten my umbrella. Three tenses: imparfait + passé composé + pluperfect.",
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
