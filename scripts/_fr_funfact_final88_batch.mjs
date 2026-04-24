#!/usr/bin/env node
// French FINAL 88 cards across 6 remaining variants. ZEROES French audit.

import fs from 'node:fs';

const apply = process.argv.includes('--apply');

const FACTS = [
  // adjectives agree variant (20)
  ['jeune', 'French adjectives agree in gender', "Young. Invariable for gender (same form m/f). Plural adds -s. Age adjective."],
  ['Il/Elle est...', 'French adjectives agree in gender', "He/She is... Subject + être structure. Adjective must agree with subject gender."],
  ['C\'est + adjective (reactions)', 'French adjectives agree in gender', "It is + adjective (for general reactions). Always masculine: c'est bon/beau/cher."],
  ['heureux / heureuse', 'French adjectives agree in gender', "Happy (m/f). -eux/-euse pattern. Feminine adds -se."],
  ['triste', 'French adjectives agree in gender', "Sad. Invariable for gender. Plural: tristes."],
  ['fatigué / fatiguée', 'French adjectives agree in gender', "Tired (m/f). Past participle used as adjective. Feminine adds -e."],
  ['orange', 'French adjectives agree in gender', "Orange. INVARIABLE — colors from fruits don't agree. Exception to gender-agreement."],
  ['trop grand / trop petit', 'French adjectives agree in gender', "Too big / too small. Trop (too) + adjective. Agrees with noun."],
  ['malade', 'French adjectives agree in gender', "Sick / ill. Invariable for gender. Plural: malades."],
  ['plus grand que', 'French adjectives agree in gender', "Bigger than. Comparative of superiority. Plus + adj + que."],
  ['moins cher que', 'French adjectives agree in gender', "Cheaper than. Comparative of inferiority. Moins + adj + que."],
  ['aussi rapide que', 'French adjectives agree in gender', "As fast as. Equality comparative. Aussi + adj + que."],
  ['meilleur(e)', 'French adjectives agree in gender', "Better. IRREGULAR comparative of bon. Feminine: meilleure. Not 'plus bon.'"],
  ['confiant(e)', 'French adjectives agree in gender', "Confident. -ant/-ante. Present participle as adjective."],
  ['déçu(e)', 'French adjectives agree in gender', "Disappointed. Past participle of décevoir. Agrees with subject."],
  ['impressionné(e)', 'French adjectives agree in gender', "Impressed. Past participle of impressionner. Agrees."],
  ['anxieux / anxieuse', 'French adjectives agree in gender', "Anxious. -eux/-euse pattern. Same as heureux/heureuse."],
  ['tendu(e)', 'French adjectives agree in gender', "Tense / stressed. Past participle of tendre. Agrees."],
  ['jaloux / jalouse', 'French adjectives agree in gender', "Jealous. -oux/-ouse irregular pattern. Rare ending."],
  ['reconnaissant(e)', 'French adjectives agree in gender', "Grateful. -ant/-ante pattern. Present participle as adjective."],

  // nouns masc/fem variant (20)
  ["J'en ai trois.", 'French nouns are either masculine or feminine', "I have three (of them). Partitive en + number. Quantifier pronoun."],
  ["l'examen", 'French nouns are either masculine or feminine', "The exam. Masculine. Latin 'examen.' Academic context."],
  ["l'inscription", 'French nouns are either masculine or feminine', "The enrollment. -ion feminine. From inscrire (to register)."],
  ["l'emploi (m.)", 'French nouns are either masculine or feminine', "The job. Masculine. From employer. Same root as English 'employ.'"],
  ['Cordialement', 'French nouns are either masculine or feminine', "Kind regards. Formal letter closing. Adverb from cordial + -ment."],
  ['les congés payés', 'French nouns are either masculine or feminine', "Paid vacation. French labor-law institution. 5 weeks guaranteed."],
  ['les RTT', 'French nouns are either masculine or feminine', "Extra days off (réduction du temps de travail). French 35-hour-workweek compensation days."],
  ['les 35 heures', 'French nouns are either masculine or feminine', "The 35-hour workweek. French-specific labor law since 2000."],
  ["Bien qu'il pleuve, nous sortirons quand même", 'French nouns are either masculine or feminine', "Although it's raining, we'll go out anyway. Bien que + subjunctive."],
  ['quel que soit / quelle que soit', 'French nouns are either masculine or feminine', "Whatever may be. Quel + que + subjunctive. Concessive structure."],
  ["d'abord", 'French nouns are either masculine or feminine', "First / firstly. Reinforcement of essay connector."],
  ['enfin', 'French nouns are either masculine or feminine', "Finally / lastly. Essay closing."],
  ['de plus', 'French nouns are either masculine or feminine', "Moreover / furthermore. Additive connector."],
  ['cependant', 'French nouns are either masculine or feminine', "However / nevertheless. Formal contrastive connector."],
  ['néanmoins', 'French nouns are either masculine or feminine', "Nevertheless. From Latin 'nihil-minus' (none-less). Formal."],
  ['toutefois', 'French nouns are either masculine or feminine', "However / yet. Compound: tout + e + fois. Contrastive."],
  ["d'où", 'French nouns are either masculine or feminine', "Hence / from which. From 'de où' (from where). Logical connector."],
  ["l'antithèse", 'French nouns are either masculine or feminine', "The antithesis / counter-argument. Greek rhetorical term. Essay structure."],
  ['néanmoins', 'French nouns are either masculine or feminine', "Nevertheless (reinforced in u29). Formal essay vocabulary."],
  ['de surcroît', 'French nouns are either masculine or feminine', "Moreover. Formal. From sur (on) + croître (to grow). Literally 'by excess.'"],

  // -re verb (12)
  ['prendre', 'A -re verb, the smallest of the three regular verb groups', "To take / to have (food/drink). Irregular stem pren-."],
  ["l'armoire", 'A -re verb, the smallest of the three regular verb groups', "The wardrobe. NOT a verb — feminine noun. From Latin 'armarium' (storage)."],
  ["l'étagère", 'A -re verb, the smallest of the three regular verb groups', "The shelf. NOT a verb — feminine. From étage (floor/tier)."],
  ['derrière', 'A -re verb, the smallest of the three regular verb groups', "Behind. NOT a verb — preposition. From de + arrière."],
  ['entre', 'A -re verb, the smallest of the three regular verb groups', "Between. NOT a verb — preposition. From Latin 'inter.'"],
  ['descendre', 'A -re verb, the smallest of the three regular verb groups', "To go down. Regular -re. Takes être when intransitive (motion)."],
  ['naître', 'A -re verb, the smallest of the three regular verb groups', "To be born. Irregular. Takes être: Je suis né(e)."],
  ["l'arbre", 'A -re verb, the smallest of the three regular verb groups', "The tree (m). NOT a verb — masculine noun from Latin 'arbor.'"],
  ["Il a gagné de l'argent en vendant sa voiture", 'A -re verb, the smallest of the three regular verb groups', "He earned money by selling his car. Gerund en vendant."],
  ['Malgre', 'A -re verb, the smallest of the three regular verb groups', "Despite. Missing accent (should be 'malgré'). Concessive preposition."],
  ['résoudre', 'A -re verb, the smallest of the three regular verb groups', "To solve / resolve. Irregular -re. Past: résolu."],
  ['Je vous serais reconnaissant de bien vouloir me répondre', 'A -re verb, the smallest of the three regular verb groups', "I would be grateful if you would reply. Ultra-formal business request."],

  // 30% variant (11)
  ["Si tu veux, je t'aiderai.", 'French gave English roughly 30%', "If you want, I'll help. Type-1 conditional reinforced."],
  ["Ce dont j'ai besoin, c'est du repos", 'French gave English roughly 30%', "What I need is rest. Ce dont + avoir besoin de construction."],
  ['Si nous avions pris le train, nous serions arrivés à l\u2019heure', 'French gave English roughly 30%', "Type-3 conditional. If we had taken... we would have arrived."],
  ['Si j\u2019avais accepté ce poste, je vivrais à Lyon maintenant', 'French gave English roughly 30%', "Mixed conditional: pluperfect + present conditional."],
  ['Si j\u2019étais plus courageux, j\u2019aurais parlé', 'French gave English roughly 30%', "Mixed: imperfect + past conditional."],
  ['Si tu n\u2019avais pas raté le train, tu ne m\u2019aurais jamais rencontré', 'French gave English roughly 30%', "Complex Type-3 with negations."],
  ['Selon des témoins, l\u2019accident aurait été causé par le verglas', 'French gave English roughly 30%', "Journalistic conditional: alleged cause."],
  ['L\u2019habit ne fait pas le moine', 'French gave English roughly 30%', "Don't judge a book by its cover. Classic French proverb."],
  ['c\u2019est la cerise sur le gâteau', 'French gave English roughly 30%', "The icing on the cake. Shared with English idiom."],
  ['L\u2019essentiel est invisible pour les yeux.', 'French gave English roughly 30%', "What is essential is invisible to the eyes. Saint-Exupéry, Le Petit Prince."],
  ['On ne voit bien qu\u2019avec le c\u0153ur.', 'French gave English roughly 30%', "One sees clearly only with the heart. Saint-Exupéry."],

  // conjunctions+mood (10)
  ['comme', 'French conjunctions affect the mood', "Like / as. Multi-use: comparison, simile, cause. Context decides mood."],
  ['Puisque', 'French conjunctions affect the mood', "Since / given that. Known-reason. Takes indicative."],
  ['Car', 'French conjunctions affect the mood', "For / because (formal, written). Never starts a sentence. Takes indicative."],
  ['Comme', 'French conjunctions affect the mood', "As / since (cause). Sentence-initial causal. Takes indicative."],
  ['Donc', 'French conjunctions affect the mood', "So / therefore. Result connector. Takes indicative."],
  ['Cependant', 'French conjunctions affect the mood', "However / nevertheless. Contrast. Takes indicative."],
  ['Comme', 'French conjunctions affect the mood', "Like / as (comparison). Takes indicative."],
  ['car', 'French conjunctions affect the mood', "Because / for. Reinforced."],
  ['puisque', 'French conjunctions affect the mood', "Since / given that. Reinforced."],
  ['quoique', 'French conjunctions affect the mood', "Although / though. Triggers subjunctive."],

  // -ir verb (9)
  ['venir', 'A -ir verb', "To come. IRREGULAR -ir. Takes être. Past: venu."],
  ['sortir', 'A -ir verb', "To go out. Irregular. Takes être. Past: sorti."],
  ["l'éclair", 'A -ir verb', "The lightning (m). NOT a verb — masculine noun. Also: éclair pastry!"],
  ['Ils ont dit qu\u2019ils ne pouvaient pas venir', 'A -ir verb', "They said they couldn't come. Past reporting + imperfect."],
  ['Il demande si tu viens ce soir', 'A -ir verb', "He asks if you're coming tonight. Si = yes/no indirect question."],
  ['avant de partir', 'A -ir verb', "Before leaving. Avant de + infinitive. Same-subject timing structure."],
  ['Je doute qu\u2019il puisse venir', 'A -ir verb', "I doubt he can come. Doubt + subjunctive. Puisse = subjunctive of pouvoir."],
  ['Tu aurais dû prévenir', 'A -ir verb', "You should have warned. Past conditional + infinitive. Reproach."],
  ['soutenir', 'A -ir verb', "To support / argue. Compound of tenir. Academic/essay vocabulary."],

  // adverbs -ment (6)
  ['souvent', 'French adverbs often end in -ment', "Often. INVARIABLE adverb. From Latin 'subinde.' Doesn't end in -ment."],
  ['jamais', 'French adverbs often end in -ment', "Never. INVARIABLE. Negative frequency. Always with ne... jamais."],
  ['Ensuite', 'French adverbs often end in -ment', "Then / next. Sequential connector. Narrative ordering."],
  ['Puis', 'French adverbs often end in -ment', "Then / and then. Shorter than ensuite. Casual sequential."],
  ['ensuite', 'French adverbs often end in -ment', "Then / next. Reinforced."],
  ['puis', 'French adverbs often end in -ment', "Then / afterwards. Reinforced."],
];

let total = 0;
const LANG_ROOT = 'src/data/french-v2';
for (const file of fs.readdirSync(LANG_ROOT)) {
  if (!file.endsWith('.js')) continue;
  const path = `${LANG_ROOT}/${file}`;
  let text = fs.readFileSync(path, 'utf8');
  let count = 0;
  for (const [trg, genericPrefix, newFact] of FACTS) {
    const escTrg = trg.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const escPrefix = genericPrefix.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const re = new RegExp(`(\\{type:"teach",trg:"${escTrg}"[\\s\\S]*?funFact:")${escPrefix}(?:[^"\\\\]|\\\\.)*"`, 'g');
    if (!re.test(text)) continue;
    re.lastIndex = 0;
    text = text.replace(re, (_, pre) => { count++; return pre + newFact + '"'; });
  }
  if (count > 0) {
    console.log(`${path}: ${count}`);
    total += count;
    if (apply) fs.writeFileSync(path, text);
  }
}
console.log(`\nTotal: ${total}`);
if (!apply) console.log('Dry run.');
