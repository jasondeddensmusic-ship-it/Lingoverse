#!/usr/bin/env node
// French u4-u7 verb-conjugation variant (17 cards).

import fs from 'node:fs';

const apply = process.argv.includes('--apply');
const GENERIC = 'French verbs change form for each person. The spoken forms are often simpler than the written ones.';

const FACTS = {
  'Je voudrais un/une...': "'I would like a...' Conditional of 'vouloir' + indefinite article. Gender of article matches the noun. Polite restaurant/shopping formula.",
  'Il y a...': "'There is / there are.' Invariable phrase. 'Il y a' = impersonal 'there.' Same for singular and plural: 'il y a un livre' AND 'il y a des livres.'",
  'Il est ... heure(s)': "'It is ... o'clock.' 'Il' impersonal + 'est' + number + 'heure(s).' Singular 'heure' for 1; plural 'heures' for 2+. 'Il est une heure' (1pm).",
  'faire (du sport / la cuisine)': "'To do (sport / cooking).' Irregular verb 'faire.' Takes partitive 'du/de la' for activities. 'Faire du sport' = do sports (regularly).",
  'souvent / parfois / rarement': "Often / sometimes / rarely. Frequency adverbs. 'Souvent' = often (Latin 'subinde'), 'parfois' = sometimes (par + fois = 'by times').",
  'avoir peur': "'To be afraid.' Literally 'to have fear.' Uses 'avoir' where English uses 'to be.' Classic French idiom-structure: peur, faim, soif, chaud all use 'avoir.'",
  'ennuyé / ennuyée': "Bored (m/f). Past participle used as adjective. Agrees with subject gender. 'Je suis ennuyé' (m) / 'Je suis ennuyée' (f).",
  'il y a': "There is / there are. Same as Il y a above; here in u6 context. The 'y' is a pronoun meaning 'there.' Fossilized into 'il y a.'",
  "il n'y a pas de": "There is no / there are no. Negation of il y a. Ne...pas negator. De replaces un/une/des in negatives. Il n'y a pas de livre (there is no book).",
  'je vais au travail': "'I'm going to work.' 'Je vais' (I go) + 'au travail' (to the work). 'Au' = à + le. Contraction mandatory.",
  'venir de': "'To come from.' Pair with 'aller à' (to go to). Origin/destination structure. Also: 'venir de + infinitive' = just did something.",
  'à gauche': "To the left. 'À' (to/at) + 'gauche' (left). 'Gauche' also means 'clumsy' metaphorically — left-handedness historically carried cultural weight.",
  'à droite': "To the right. 'À' + 'droite' (right). 'Droit' (with no e) means 'straight' or 'law/right.' Agreement difference: droit vs droite.",
  'Regarde!': "Look! (informal). Imperative of 'regarder.' Tu form drops the -s: regardes → regarde. Silent final 'e' in spoken French.",
  'Ne tourne pas!': "Don't turn! (informal). Negative imperative. 'Ne...pas' frames the command. Tu form of 'tourner.' Same pattern for all negative tu commands.",
  'au nord de': "To the north of. 'Au' = à + le. 'Nord' masculine. 'Au nord de Paris' = north of Paris. Cardinal directions all take 'au + direction + de.'",
  "au sud de / à l'est de / à l'ouest de": "To the south / east / west of. Same pattern with gender-appropriate elision. Est and ouest elide à le to à l. Sud keeps au sud.",
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
