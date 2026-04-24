#!/usr/bin/env node
// 32 Spanish cards u8 (shopping/clothing/numbers/colors) + u9 (preterite).
// Replaces the 'Spanish nouns are either masculine or feminine' generic filler.

import fs from 'node:fs';

const apply = process.argv.includes('--apply');
const GENERIC = 'Spanish nouns are either masculine or feminine. The ending usually gives it away.';

const FACTS = {
  // u8 — shopping / clothing / numbers / colors
  'los zapatos': "Shoes. From Basque 'zapata,' one of the few Basque loanwords in everyday Spanish. Plural always masculine, even for a pair of women's shoes. Regional synonym in Mexico: 'los zapatos.'",
  'los vaqueros': "Jeans. Literally 'cowboys,' from 'vaca' (cow). Named because denim was originally cowboy workwear. Spain favors 'vaqueros'; Latin America often says 'jeans' or 'pantalones de mezclilla.'",
  'las zapatillas': "Sneakers. Diminutive of 'zapatos.' In Spain, 'zapatillas' = sneakers; in much of Latin America, same word means slippers. Dialect marker that can surprise shoppers.",
  'los calcetines': "Socks. From Latin 'calceus' (shoe). Related to 'calzado' (footwear). The suffix -ines is diminutive: 'little shoe-things' for the feet. Singular: el calcetin.",
  '¿Tiene...?': "Formal 'Do you have...?' Uses 'tiene' (usted form), not 'tienes' (tu). Shop etiquette in Spain and most of Latin America defaults to usted with strangers. Argentina uses 'tenes' (vos form).",
  'caro': "Expensive. Latin 'carus' meant both 'dear' and 'expensive' — the same semantic link as English 'dear' (beloved / costly). Opposite: 'barato.' Agrees in gender and number.",
  'doscientos': "Two hundred. Compound of 'dos' + 'cientos.' Agrees in gender: doscientas mujeres, doscientos hombres. Rule starts at 200 and continues through 900 (trescientos, cuatrocientos...).",
  'trescientos': "Three hundred. Same gender-agreement rule as doscientos. Note spelling: 'tres' + 'cientos,' not 'trescientos' as a single root. Spanish keeps the two parts visible.",
  'quinientos': "Five hundred. Irregular — NOT 'cincocientos.' Descends from Latin 'quingenti.' Only 500, 700 (setecientos), and 900 (novecientos) break the usual pattern.",
  'mil': "One thousand. Invariable, never takes an article: 'mil personas' (a thousand people), never 'un mil.' Only pluralizes as 'miles' for 'thousands of' (miles de personas).",
  'los zapatos marrones': "Demonstrates plural agreement. Noun 'zapatos' (plural masc) forces adjective 'marrones' (plural). Color-adjective position: always AFTER the noun in Spanish.",
  'claro': "Light (color) or clear. From Latin 'clarus' (bright, famous). Also used as an interjection: '¡Claro!' = 'Of course!' Context decides: colors vs exclamation vs adjective of clarity.",
  'oscuro': "Dark. From Latin 'obscurus.' Same root as English 'obscure.' As a color modifier: 'azul oscuro' (dark blue). Adjective pair with 'claro': azul claro / azul oscuro.",

  // u9 — preterite
  'anoche': "Last night. Compound: 'a' + 'noche.' Always pairs with preterite (completed past), not imperfect. 'Anoche fui al cine' never 'anoche iba al cine.'",
  'hablé': "Preterite of hablar, yo form. Regular -ar ending. Accent on final e marks preterite vs present (hablo = I speak, hable = present subjunctive, hable = I spoke). Accents carry tense.",
  'trabajé': "Preterite of trabajar. From 'tripaliare' (Latin: to torture with the tripalium, a three-stake device). 'Work' literally evolved from 'torture' — a glum etymology shared with French 'travailler.'",
  'compró': "Preterite of comprar, el/ella form. Note accent on final o — marks third-person preterite. Without accent 'compro' = I buy (present).",
  'cocinaron': "Ellos preterite of cocinar. From Latin 'coquinare,' same root as English 'cook' and 'kitchen.' The -aron ending is the regular third-person plural preterite for -ar verbs.",
  'estudiaste': "Tu preterite of estudiar. From Latin 'studere' (to be eager, devote oneself to). Study started as eagerness, then focused on learning. Same root as English 'studious.'",
  'bebió': "Preterite of beber, el/ella form. Note: -er verb, third-person preterite ending is -io with accent. Without accent 'bebio' would violate Spanish stress rules.",
  'leí': "Preterite of leer, yo form. Accent on i because the ending would otherwise merge into a diphthong (leii vs lei-i). Spanish accents enforce syllable separation.",
  'vendieron': "Ellos preterite of vender. Regular -er. Note: the stem 'vend-' is Latin 'vendere,' same root as English 'vending,' 'vendor.'",
  'escribió': "Preterite of escribir, el/ella form. From Latin 'scribere.' Same root as English 'script,' 'scripture,' 'inscribe.' Irregular in past participle: 'escrito,' not 'escribido.'",
  'recibí': "Preterite of recibir, yo form. From Latin 'recipere' (to take back). Same root as English 'recipe,' 'receive,' 'receipt.' The final-vowel accent is the yo-preterite signal.",
  'decidimos': "Nosotros preterite of decidir. BUT also nosotros present! Spanish -ir verbs collapse the two in nosotros form. Context distinguishes: 'ayer decidimos' = yesterday we decided.",
  'salieron': "Ellos preterite of salir. From Latin 'salire' (to leap). Originally 'to jump out,' now softened to 'go out.' Same root as English 'salient' and 'sally.'",
  'primero': "First. Ordinal number. Apocopes to 'primer' before masculine singular: 'el primer dia' (the first day). But 'la primera vez' (the first time) keeps full form.",
  'finalmente': "Finally. Adverb. Formed by adding -mente to the feminine adjective 'final' (which happens to be the same masc/fem). The Spanish adverb suffix -mente = English -ly.",
  'llegué': "Preterite of llegar, yo form. Spelling change: g→gu before e to preserve hard-g sound. Same rule in 'pagar' (pagué), 'jugar' (jugué). Phonological spelling consistency.",
  '¿Cuándo?': "When? Accent required for question word: Cuándo. Without accent, 'cuando' = relative adverb ('cuando llegué' = when I arrived). Accent flips the word into a question.",
  'las vacaciones': "Vacation(s). ALWAYS plural in Spanish, never singular. From Latin 'vacationes' (exemptions). A Spanish speaker takes 'unas vacaciones' (some vacations) even for a single trip.",
  'pasé': "Preterite of pasar, yo form. 'Pasar' covers pass, spend (time), happen: 'pasé una semana' (I spent a week). Accent on final e marks yo-preterite, distinguishing from 'pase' (present subjunctive).",
};

let total = 0;
const LANG_ROOT = 'src/data/spanish-v2';
for (const file of fs.readdirSync(LANG_ROOT)) {
  if (!file.endsWith('.js')) continue;
  const path = `${LANG_ROOT}/${file}`;
  let text = fs.readFileSync(path, 'utf8');
  let count = 0;
  for (const [trg, newFact] of Object.entries(FACTS)) {
    const escTrg = trg.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    // MANDATORY: anchor with {type:"teach"  — prevents match-pair scramble bug
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
