#!/usr/bin/env node
// French final 82 30%-variant cards. ZEROES variant.

import fs from 'node:fs';

const apply = process.argv.includes('--apply');
const GENERIC = 'French gave English roughly 30% of its vocabulary. Many formal English words have French origins.';

const FACTS = {
  'du (= de + le)': "Some (masculine). Mandatory contraction of de + le. Never 'de le.' Partitive article.",
  "Qu'est-ce que vous désirez?": "What would you like? Formal restaurant waiter. Qu'est-ce que = what (direct object).",
  'Comme entrée / Comme plat / Comme dessert': "For starter / main / dessert. 'Comme' = as/for in menu context.",
  'Moi aussi / Moi non plus': "Me too / Me neither. Affirmative vs negative agreement. Non plus for negatives.",
  "est-ce qu'il y a": "Is there / are there. Formal yes/no question using est-ce que.",
  'à côté de': "Next to / beside. À (at) + côté (side) + de. Position preposition.",
  'en face de': "Across from / facing. En (in) + face (face) + de. Formal-style spatial preposition.",
  'chez toi': "At your place. Chez = 'at the home of.' Unique French preposition. No English equivalent.",
  'chez + name': "At someone's place. Chez + person's name. Chez Paul = at Paul's.",
  'Bienvenue chez moi!': "Welcome to my place! Common hospitality phrase.",
  'Combien de pièces?': "How many rooms? Combien de + noun. Quantity question.",
  'à pied': "On foot / walking. À + pied. Fixed phrase. Means of transport.",
  'Où est...?': "Where is...? Basic location question.",
  'tout droit': "Straight ahead. Tout (totally) + droit (straight/right). Navigation.",
  'Prenez la première rue': "Take the first street. Formal imperative + ordinal. Navigation direction.",
  "C'est loin?": "Is it far? C'est + loin. Basic distance question.",
  'Pour aller à...?': "How do I get to...? Pour + infinitive + à + place. Travel formula.",
  "C'est tout près": "It's very close. Tout près = very close. Tout intensifies.",
  "D'abord... puis... enfin...": "First... then... finally... Narrative sequence connectors.",
  "Finalement, tout s'est bien terminé.": "Finally, everything ended well. Narrative closer with reflexive verb.",
  'le': "Him / it (masculine). Direct object pronoun. Placed before verb.",
  "J'y suis, j'y reste.": "I'm here, I'm staying. Fixed phrase. Y pronoun = there.",
  'Ça te dit?': "Does that appeal to you? Colloquial. Ça + te (you) + dit (says).",
  "Quand j'arriverai, je t'appellerai.": "When I arrive, I'll call you. Both verbs in future after 'quand' (contrast with English).",
  "Dès que tu seras prêt, on partira.": "As soon as you're ready, we'll leave. Dès que + future + future.",
  "Dans dix ans, je vivrai à l'étranger.": "In ten years, I'll live abroad. Dans + duration = in (future time).",
  'Si tu veux, je t\u2019aiderai.': "If you want, I'll help you. Type-1 conditional: si + present + future.",
  "Si j'avais de l'argent, j'achèterais une maison.": "If I had money, I'd buy a house. Type-2: si + imperfect + conditional.",
  "Si j'étais toi, je partirais.": "If I were you, I'd leave. Same Type-2 conditional. Advice-giving.",
  'Ça serait formidable!': "That would be wonderful! Conditional of être. Hypothetical reaction.",
  "On m'a dit que ce serait facile.": "They told me it would be easy. Reported speech + conditional (future-in-past).",
  'Ça me ferait plaisir.': "That would make me happy. Polite acceptance phrase.",
  'que je parle': "That I speak (subjunctive). Present subjunctive of parler. Same form as indicative for -er.",
  'que tu finisses': "That you finish (subj.). Present subjunctive of finir. Adds -isses.",
  'que je sois': "That I be (subj.). Irregular subjunctive of être. Highly irregular stem.",
  "que j'aie": "That I have (subj.). Irregular subjunctive of avoir. Unique form.",
  'que je fasse': "That I do/make (subj.). Irregular subjunctive of faire. Stem fass-.",
  "J'aimerais que tu viennes.": "I would like you to come. Conditional + subjunctive.",
  "J'ai peur que": "I'm afraid that. Triggers subjunctive. Fear + subj.",
  "J'ai peur qu'il pleuve.": "I'm afraid it might rain. Pleuve = subjunctive of pleuvoir.",
  "L'homme dont la femme est médecin": "The man whose wife is a doctor. Dont = of whom/whose. Relative pronoun for de-objects.",
  "J'avais mangé": "I had eaten. Pluperfect with avoir. J' elided.",
  "J'étais allé": "I had gone (masculine). Pluperfect with être. Agreement: no -e.",
  "J'étais allée": "I had gone (feminine). Feminine agreement: allée.",
  "Quand je suis arrivé, il avait déjà mangé.": "When I arrived, he had already eaten. Passé composé + pluperfect.",
  "Si j'avais su, je serais venu.": "If I had known, I would have come. Type-3 conditional.",
  "Si nous avions étudié, nous aurions réussi.": "If we had studied, we would have passed. Type-3.",
  "Si tu avais pris le métro, tu serais arrivé à l'heure.": "If you had taken the metro, you would have arrived on time. Type-3 with être-agreement.",
  'pas encore': "Not yet. Pas + encore. Standard negative-time adverbial.",
  "Trois personnes ont été blessées dans l'accident": "Three people were injured in the accident. Passive with plural + fem agreement.",
  'Ce tableau a été peint en 1889': "This painting was painted in 1889. Passive. Peint = past participle of peindre.",
  'On a volé mon vélo': "My bike was stolen. Active with on = passive meaning in French.",
  'Ce vin se boit frais': "This wine is drunk chilled. Reflexive passive (se + transitive verb).",
  'en mangeant': "While eating / by eating. Gerund reinforced.",
  'en faisant': "While doing / by doing. Gerund.",
  'en écoutant': "While listening / by listening. Gerund.",
  'en lisant': "While reading / by reading. Gerund.",
  'en souriant': "While smiling. Souriant = present participle of sourire.",
  "J'ai appris en pratiquant": "I learned by practicing. Gerund = means.",
  'En courant, il est tombé': "While running, he fell. Gerund = simultaneity with event.",
  'On économise en achetant en solde': "You save money by buying on sale. Gerund + en solde (on sale).",
  'En étudiant régulièrement, tu progresseras': "By studying regularly, you'll progress. Gerund + future.",
  'Tout en souriant, elle pleurait': "While smiling, she was crying. Tout en = contrast.",
  'Tout en étant fatigué, il a continué': "Even though tired, he continued. Concessive tout en.",
  'En voyageant, on découvre de nouvelles cultures': "By traveling, you discover new cultures. General-truth gerund.",
  "Tout en reconnaissant ses qualités, je trouve qu'il manque d'expérience": "While acknowledging his qualities, I find he lacks experience. Formal essay structure.",
  'Ce dont j\u2019ai besoin, c\u2019est du repos': "What I need is rest. Ce dont structure for de-verbs (avoir besoin de).",
  'Quand je suis arrivé, elle avait déjà mangé': "When I arrived, she had already eaten. Passé composé + pluperfect.",
  'Tout en travaillant, elle écoutait de la musique': "While working, she was listening to music. Tout en gerund.",
  'Veuillez trouver ci-joint mon CV': "Please find attached my CV. Business formula reinforced.",
  'Si nous avions pris le train, nous serions arrivés à l\u2019heure': "Type-3 conditional with both clauses showing être-agreement.",
  'Si j\u2019avais accepté ce poste, je vivrais à Lyon maintenant': "Mixed conditional: pluperfect si + present conditional.",
  'Si j\u2019étais plus courageux, j\u2019aurais parlé': "Mixed: imperfect si + past conditional.",
  'Si tu n\u2019avais pas raté le train, tu ne m\u2019aurais jamais rencontré': "Complex Type-3 conditional with negations.",
  'Selon des témoins, l\u2019accident aurait été causé par le verglas': "Journalistic conditional. Formal-news register.",
  'L\u2019habit ne fait pas le moine': "Don't judge a book by its cover. Proverb about appearances.",
  'c\u2019est la cerise sur le gâteau': "The icing on the cake. Identical to English idiom.",
  "en l'occurrence": "In this case / as it happens. Formal legal-academic.",
  'L\u2019essentiel est invisible pour les yeux.': "What is essential is invisible to the eyes. Le Petit Prince quote.",
  'On ne voit bien qu\u2019avec le cœur.': "One sees clearly only with the heart. Le Petit Prince continuation.",
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
