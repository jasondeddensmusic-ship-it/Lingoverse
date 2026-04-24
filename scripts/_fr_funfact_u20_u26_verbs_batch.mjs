#!/usr/bin/env node
// French u20-u26 verbs (64 cards).

import fs from 'node:fs';

const apply = process.argv.includes('--apply');
const GENERIC = 'French verbs change form for each person. The spoken forms are often simpler than the written ones.';

const FACTS = {
  'On parle français ici': "French is spoken here. Impersonal on. Sign-vocabulary.",
  'Ça se voit': "It shows. Reflexive passive. Se voir = to be seen. Common idiom.",
  "Elle s'est fait voler son sac": "Her bag got stolen. Causative se faire + infinitive = to have something done to oneself.",
  "Il dit qu'il est fatigué": "He says he is tired. Reported speech. Qu' elided.",
  "Elle dit qu'elle aime le chocolat": "She says she likes chocolate. Reported speech with opinion.",
  'Ils disent que le film est excellent': "They say the film is excellent. Plural reporting.",
  "Elle dit que son frère habite à Lyon": "She says her brother lives in Lyon. Geographic reporting.",
  "Il dit de fermer la porte": "He says to close the door. Reported command: dire de + infinitive.",
  "Il a dit qu'il était fatigué": "He said he was tired. Past reporting + imperfect in subordinate.",
  "Elle a dit qu'elle avait fini": "She said she had finished. Past reporting + pluperfect.",
  "Il a dit qu'il viendrait demain": "He said he would come tomorrow. Past reporting + conditional (future-in-past).",
  "Elle a dit qu'elle avait toujours voulu visiter Paris": "She said she had always wanted to visit Paris. Complex past reporting.",
  'Elle demande ce que tu fais': "She asks what you are doing. Indirect question with ce que.",
  'Je ne sais pas ce qui se passe': "I don't know what is happening. Ce qui (subject) indirect question.",
  'Il veut savoir combien ça coûte': "He wants to know how much it costs. Indirect question with combien.",
  'Je me demande pourquoi il est parti': "I wonder why he left. Se demander + pourquoi.",
  "Il m'a demandé ce que je voulais": "He asked me what I wanted. Past indirect question.",
  'parlant': "Speaking (present participle). -ant form. Used in gerunds and adjectives.",
  'finissant': "Finishing. -ant of finir (-issant for -ir verbs).",
  'prenant': "Taking. -ant of prendre. Irregular stem pren-.",
  'en parlant': "While speaking / by speaking. Gerund: en + -ant. Simultaneity or means.",
  'Il lit en mangeant': "He reads while eating. Classic gerund example.",
  'Elle téléphone en marchant': "She phones while walking. Simultaneous actions.",
  'Je regarde les nouvelles en prenant mon café': "I watch the news while having my coffee. Gerund.",
  "Il s'est endormi en regardant la télé": "He fell asleep while watching TV. Passé composé + gerund.",
  'Elle a réussi en travaillant dur': "She succeeded by working hard. Gerund = means.",
  'Elle travaille tout en écoutant de la musique': "She works while listening to music. Tout en + gerund = emphatic simultaneity.",
  "Il parle tout en sachant qu'il a tort": "He speaks even knowing he's wrong. Tout en + gerund = concessive.",
  'Elle sourit tout en ayant peur': "She smiles even while being afraid. Same concessive gerund.",
  'une personne intéressant tout le monde': "A person interesting everyone. Present participle as relative clause replacement.",
  'les enfants obéissant à leurs parents': "Children obeying their parents. Invariable -ant in participle use.",
  'après avoir mangé': "After eating. Past infinitive: après + auxiliary + past participle.",
  'après être arrivé': "After arriving. Past infinitive with être (motion verb). Agreement possible.",
  'Afin de + infinitif': "In order to. Formal purpose + infinitive. More formal than pour.",
  "Je vous prie d'agréer mes salutations distinguées": "Please accept my distinguished greetings. Ultra-formal letter closing.",
  'avoir hâte de': "To look forward to. Hâte = haste/eagerness. Native French idiom.",
  'Il faut que tu saches la vérité': "You must know the truth. Il faut que + subjunctive. Saches = subjunctive of savoir.",
  "que je sois allé(e)": "That I have gone. Past subjunctive of aller. Être-auxiliary + participle.",
  "Je suis content qu'il soit venu.": "I'm happy he came. Emotion + past subjunctive.",
  "Je suis content qu'il vienne.": "I'm happy he is coming. Emotion + present subjunctive.",
  "Je doute qu'elle ait terminé.": "I doubt she finished. Doubt + past subjunctive.",
  "Je doute qu'elle termine à temps.": "I doubt she'll finish on time. Doubt + present subjunctive.",
  "Il est possible qu'ils soient déjà partis.": "It's possible they have already left. Possibility + past subjunctive.",
  "Je doute qu'il ait compris.": "I doubt he understood. Past subjunctive.",
  "Je regrette qu'elle soit partie.": "I regret that she left. Regret + past subjunctive.",
  "Je suis furieux qu'on m'ait menti.": "I'm furious someone lied to me. Strong emotion + past subj.",
  "Il est injuste qu'on l'ait renvoyé.": "It's unjust he was fired. Judgment + past subj.",
  "Je suis content d'avoir réussi.": "I'm happy to have succeeded. Same-subject = past infinitive, not subjunctive.",
  "Elle regrette d'être partie.": "She regrets leaving. Same-subject past infinitive.",
  "Je doute qu'il ait compris, mais j'espère qu'il réussira.": "I doubt he understood, but I hope he'll succeed. Subjunctive + indicative (espérer takes indicative).",
  'Tu aurais fini': "You would have finished. Past conditional. Auxiliary conditional + participle.",
  'Il aurait compris': "He would have understood. Past conditional with irregular participle.",
  'Je serais parti(e)': "I would have left. Past conditional with être + agreement.",
  'Elle serait venue': "She would have come. Past conditional être + feminine agreement.",
  "J'aurais dû": "I should have. Past conditional of devoir. Regret marker.",
  "J'aurais voulu être artiste": "I would have liked to be an artist. Past conditional of vouloir + inf.",
  "Si elle était venue, on se serait amusés": "If she had come, we would have had fun. Type-3 conditional.",
  "Tu aurais pu m'appeler!": "You could have called me! Past conditional of pouvoir. Reproach.",
  'Vous auriez dû nous prévenir!': "You should have warned us! Past conditional. Formal reproach.",
  'Il aurait fallu réagir plus vite': "One should have reacted faster. Past conditional impersonal.",
  'Il aurait démissionné': "He allegedly resigned. Past conditional = journalistic unverified claim.",
  "Je voudrais vs J'aurais voulu": "Present conditional vs past conditional. Current desire vs past missed desire.",
  "Si j'avais le temps vs Si j'avais eu le temps": "If I had time (now) vs if I had had time (past). Type-2 vs Type-3.",
  "Il devrait vs Il aurait dû": "He should (now) vs he should have. Present conditional vs past conditional.",
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
