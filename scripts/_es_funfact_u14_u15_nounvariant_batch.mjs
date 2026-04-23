#!/usr/bin/env node
// 37 Spanish cards u14-u15 in 'Spanish nouns are masc/fem' variant.
// u14: simple future verb forms. u15: comparisons + adjectives.

import fs from 'node:fs';

const apply = process.argv.includes('--apply');
const GENERIC = 'Spanish nouns are either masculine or feminine. The ending usually gives it away.';

const FACTS = {
  // u14 simple future
  'hablarás': "Second-person simple future. Spanish future tense adds endings to the full infinitive: habl(ar) + ás. All verbs share the same endings: -é, -ás, -á, -emos, -án.",
  'hablará': "Third-person singular future. Also covers usted. The accent on á marks stress — without it, 'hablara' would be imperfect subjunctive. Accents matter.",
  'hablaremos': "Nosotros future. Note: no accent on hablaremos (stress on 'emos'). Spanish stress rules: if stress falls on penultimate syllable ending in vowel/n/s, no written accent.",
  'hablarán': "They/ustedes future. Accent on á because stress falls on last syllable with n-ending. The accent preserves the pronunciation rule.",
  'trabajaré': "Yo future of trabajar. Regular. The é carries the first-person-future marker. Compare to trabajé (preterite, different accent placement).",
  'comerás': "Second-person future of comer. Regular pattern with -er/-ir verbs: same endings as -ar. Only the infinitive root differs.",
  'vivirán': "They future of vivir. Again identical ending pattern. Spanish consolidated future endings across all three verb classes, making future one of the cleanest tenses.",
  'tendré': "Irregular future: tener shifts to 'tendr-' stem with d-insertion. Same pattern for poner, salir, venir, valer. The 'd' separates difficult consonant clusters (tendré, not tenré).",
  'pondré': "Irregular 'pondr-' stem from poner. Same d-insertion rule. Pondré, pondrás, pondrá, etc. All high-frequency verbs with consonantal stems undergo this change.",
  'saldré': "Irregular 'saldr-' stem from salir. D-insertion. Also: valdré (valer), valdría in conditional. The d-insertion group is closed (about 6 verbs).",
  'vendré': "Irregular 'vendr-' stem from venir. D-insertion. Notable that these d-inserted futures look cognate with English future-modifier 'will' patterns in some romance parallels.",
  'haré': "Hacer irregular future: 'har-' stem (drops c). Also har- in conditional. Contrast with hará (present future 3rd-singular) vs hacía (imperfect 3rd-singular).",
  'diré': "Decir irregular future: 'dir-' stem. Loss of 'e' from infinitive. Same pattern in conditional (diría). Shared with hacer and querer in irregularity type.",
  'sabré': "Saber irregular future: 'sabr-' stem. Drops the -e- from infinitive. Like haber (habré), caber (cabré). All lose the unstressed -e-.",
  'podré': "Poder irregular future: 'podr-' stem. Similar drop of -e-. Conditional: podría. High-frequency, so locked-in irregular since medieval Spanish.",
  'querré': "Querer irregular future: 'querr-' stem. Double-r is rare in Spanish; only querer preserves the rr in future/conditional. Note: two rs pronounced as trilled r.",
  'Nevará': "Nevar (to snow) irregular — stem-changes e→ie in present (nieva) but is regular in future (nevará). Weather verbs often skip the diphthong in non-present tenses.",

  // u15 comparisons
  'más...que': "'More than' structure. Note: 'que' (not 'de') except before numbers: 'más de diez.' A common learner mistake is using 'más que' with numbers. 'Más que nunca' is 'more than ever.'",
  'bonito': "Bonito/bonita/bonitos/bonitas. Four-form adjective. Diminutive-like feel ('pretty, nice') — not as strong as 'hermoso' (beautiful). Daily use: más bonito que, bonito día.",
  'comodo': "Written 'cómodo' with accent. Four-form adjective. 'Cómodo' also means 'comfortable' in a personality sense — a lazy, easygoing person. Context disambiguates.",
  'mejor': "'Better.' Irregular comparative of bueno. Invariable by gender: 'un libro mejor' and 'una película mejor.' Number does change: mejores.",
  'peor': "'Worse.' Irregular comparative of malo. Same invariable-by-gender rule. Peor is used both literally and colloquially: 'lo peor' (the worst part).",
  'mayor': "'Older' for people, 'larger' for abstract/size. Note: 'más grande' for physical size. 'Mayor' preserves Latin comparative root. Plural: mayores.",
  'menor': "'Younger' or 'smaller.' Opposite of mayor. 'Menor de edad' = minor (under 18). 'Menor de diez' (less than ten, with numbers).",
  'inteligente': "-ente adjective. Invariable by gender. 'Una persona inteligente' / 'un hombre inteligente' — same form. All adjectives ending in -e or consonant share this property.",
  'tanto...como': "'As much/many as.' 'Tanto' agrees in gender and number: tanto, tanta, tantos, tantas. 'Tanto dinero como yo' (as much money as I have).",
  'tanta...como': "Feminine of tanto. 'Tanta paciencia como tú' (as much patience as you). Agreement is critical: 'tanta' wrong gender = instantly wrong.",
  'tantos...como': "Masculine plural. 'Tantos amigos como yo' (as many friends as I have). Learners often forget the plural.",
  'tantas...como': "Feminine plural. 'Tantas ideas como ella' (as many ideas as she has). Full four-form agreement with the counted noun.",
  '-e adjectives': "Adjectives ending in -e have only two forms (singular + plural). 'Grande/grandes, inteligente/inteligentes, fuerte/fuertes.' No gender change.",
  '-consonant adjectives': "Same as -e adjectives: two forms only. 'Feliz/felices, capaz/capaces, joven/jóvenes.' No gender change; only number.",
  'Me gusta más...que': "Preference comparison. 'Me gusta más el café que el té.' The 'que' joins the compared items. Common polite way to express preferences.",
  'Prefiero...a': "'Prefiero A a B' (I prefer A to B). The preposition is 'a' (to), not 'que' (than). One of the most-confused structures — English uses 'over' or 'to.'",
  'tranquilo': "Tranquilo/a/os/as. From Latin 'tranquillus.' Also everyday reassurance: '¡tranquilo!' (relax!). Spanish speakers say 'tranquilo' where English uses 'chill' or 'no worries.'",
  'barato': "Barato/a/os/as. From Arabic 'baraṭa' (trick/bargain). Islamic trade legacy in Spanish commerce words: barato, alquiler, cero.",
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
