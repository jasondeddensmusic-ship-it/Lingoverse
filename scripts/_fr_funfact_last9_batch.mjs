#!/usr/bin/env node
// FRENCH LAST 9 cards. ZEROES French audit. ASCII apostrophe keys.

import fs from 'node:fs';

const apply = process.argv.includes('--apply');
const GENERIC = 'French gave English roughly 30% of its vocabulary. Many formal English words have French origins.';

const FACTS = {
  "Si nous avions pris le train, nous serions arriv\u00e9s \u00e0 l'heure": "Type-3 conditional: pluperfect + past conditional with agreement.",
  "Si j'avais accept\u00e9 ce poste, je vivrais \u00e0 Lyon maintenant": "Mixed conditional: pluperfect + present conditional.",
  "Si j'\u00e9tais plus courageux, j'aurais parl\u00e9": "Mixed conditional: imperfect + past conditional.",
  "Si tu n'avais pas rat\u00e9 le train, tu ne m'aurais jamais rencontr\u00e9": "Complex Type-3 with negation.",
  "Selon des t\u00e9moins, l'accident aurait \u00e9t\u00e9 caus\u00e9 par le verglas": "Journalistic conditional: unconfirmed claim.",
  "L'habit ne fait pas le moine": "Don't judge a book by its cover. Classic French proverb.",
  "c'est la cerise sur le g\u00e2teau": "The icing on the cake. Shared English idiom.",
  "L'essentiel est invisible pour les yeux.": "What is essential is invisible to the eyes. Le Petit Prince, Saint-Exup\u00e9ry.",
  "On ne voit bien qu'avec le c\u0153ur.": "One sees clearly only with the heart. Le Petit Prince continuation.",
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
