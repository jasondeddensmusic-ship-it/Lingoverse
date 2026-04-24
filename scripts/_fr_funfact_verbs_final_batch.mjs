#!/usr/bin/env node
// French verbs FINAL 46 cards. ZEROES variant.

import fs from 'node:fs';

const apply = process.argv.includes('--apply');
const GENERIC = 'French verbs change form for each person. The spoken forms are often simpler than the written ones.';

const FACTS = {
  "Il a dit qu'il viendrait.": "He said he would come. Past reporting + conditional. Future-in-past.",
  "Je suis surpris qu'il soit là.": "I'm surprised he's here. Emotion + subjunctive (soit from être).",
  "Je pense qu'il a raison.": "I think he's right. Affirmative opinion = indicative.",
  "Je ne pense pas qu'il ait raison.": "I don't think he's right. NEGATIVE opinion = subjunctive.",
  "L'homme qui parle est mon professeur.": "The man who speaks is my teacher. Relative qui (subject).",
  "Elle a compris parce qu'elle avait étudié.": "She understood because she had studied. Passé composé + pluperfect.",
  "Ils ont découvert qu'on avait volé leur voiture.": "They discovered their car had been stolen. On = impersonal passive.",
  "Il a dit qu'il avait vu le film.": "He said he had seen the film. Past reported speech.",
  "Elle m'a dit qu'elle était allée à Paris.": "She told me she had gone to Paris. Être-auxiliary pluperfect with agreement.",
  "Ils ont expliqué qu'ils avaient perdu les clés.": "They explained they had lost the keys. Complex past reporting.",
  "Tu m'as dit que tu avais fini.": "You told me you had finished. Past reporting.",
  "Il pleuvait quand je suis sorti. J'avais oublié mon parapluie.": "It was raining when I went out. I had forgotten my umbrella. Imperfect + passé composé + pluperfect.",
  'La décision du gouvernement': "The government's decision. Genitive-compound. Political vocabulary.",
  'Il convient de': "It is appropriate to. Impersonal construction. Formal recommendation.",
  "Il s'avère que": "It turns out that. S'avérer (reflexive). Formal revelation.",
  'Il est à noter que': "It should be noted that. Formal caveat.",
  'Il importe de': "It is important to. Il importe = it matters. Formal register.",
  'Il est nécessaire de': "It is necessary to. Impersonal + infinitive.",
  'Il est essentiel que': "It is essential that. Triggers subjunctive.",
  'Il apparaît que': "It appears that. Impersonal apparaître. Formal.",
  'Il est souhaitable que': "It is desirable that. Subjunctive trigger.",
  'malgré': "Despite / in spite of. From 'mal' + 'gré' (will). Literally 'bad-will.'",
  'poser la problématique': "To state the central question. Academic-essay vocabulary.",
  'annoncer le plan': "To outline the structure. French essay convention: announce plan at start.",
  'il me semble que': "It seems to me that. Impersonal + me + subordinate. Indicative.",
  'je suis convaincu que': "I am convinced that. Strong opinion + indicative.",
  "Petit à petit, l'oiseau fait son nid": "Little by little, the bird builds its nest. Patience proverb.",
  "Il ne faut pas vendre la peau de l'ours avant de l'avoir tué": "Don't count your chickens. Literally 'don't sell the bear's skin before killing it.' French bear-metaphor.",
  'avoir la pêche': "To be full of energy (lit. to have the peach). Colloquial.",
  'raconter des salades': "To tell lies (lit. to tell salads). Colorful French idiom.",
  'tomber dans les pommes': "To faint (lit. to fall into the apples). Origin: 'pâmer' (to swoon) misheard as 'pommes.'",
  'mettre son grain de sel': "To put in one's two cents (lit. to add one's grain of salt).",
  'avoir le bras long': "To have connections (lit. to have a long arm). Political-influence idiom.",
  'coûter les yeux de la tête': "To cost an arm and a leg (lit. eyes of the head). Expense idiom.",
  "avoir le cœur sur la main": "To be very generous (lit. to have heart on hand). Generosity idiom.",
  "casser les pieds à quelqu'un": "To annoy someone (lit. to break someone's feet). Irritation idiom.",
  "avoir la tête dans les nuages": "To have head in clouds. Same as English. Daydreamer idiom.",
  "poser un lapin à quelqu'un": "To stand someone up (lit. to put down a rabbit). 19th-century French idiom.",
  'avoir une faim de loup': "To be ravenously hungry (lit. to have a wolf's hunger).",
  'être une poule mouillée': "To be a coward (lit. to be a wet chicken). Distinctively French.",
  'Je pense, donc je suis.': "I think, therefore I am. Descartes' Cogito, ergo sum.",
  "dégager l'idée principale": "To identify the main idea. Academic reading skill.",
  'prendre la parole': "To take the floor / to speak up. Literally 'take the word.' Presentation vocab.",
  'nuancer son propos': "To nuance one's point. Academic discussion vocab.",
  "l'inversion stylistique": "Stylistic inversion. Literary term. Subject-verb inversion for effect.",
  'gérer son temps': "To manage one's time. Modern productivity vocab.",
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
