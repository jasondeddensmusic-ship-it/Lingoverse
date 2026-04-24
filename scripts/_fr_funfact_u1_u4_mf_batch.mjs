#!/usr/bin/env node
// French u1-u4 masc/fem variant (~31 cards).

import fs from 'node:fs';

const apply = process.argv.includes('--apply');
const GENERIC = 'French nouns are either masculine or feminine. The article gives it away.';

const FACTS = {
  'Monsieur': "Sir / Mr. From 'mon' (my) + 'sieur' (lord, from Latin 'senior'). Literally 'my lord.' Formal address to men. Pronunciation: 'muh-SYUH,' silent 'r.'",
  'Madame': "Ma'am / Mrs. 'Ma' (my) + 'dame' (lady, from Latin 'domina'). Parallel to 'Monsieur.' Used for adult women regardless of marital status (modern usage).",
  'allemand / allemande': "German (m/f). Adjective agrees with gender. Feminine adds -e. From 'Allemagne' (Germany), named after the Alemanni Germanic tribe.",
  'l\'anglais': "English (the language). Masculine, article 'le' elides before vowel → 'l\\''. All languages are masculine in French: le français, l'anglais, l'espagnol.",
  'l\'espagnol': "Spanish (the language). Same masculine + elision pattern. Named after 'Espagne' (Spain). Mediterranean language family in French geography.",
  'l\'allemand': "German (the language). Masculine. Note elision of 'le' before vowel. German starts with 'a-' in French, unlike German's own 'Deutsch.'",
  'deux': "Two. From Latin 'duos.' Final 'x' silent in 'deux' alone but pronounced as /z/ in liaison: 'deux amis' sounds 'duh-zami.'",
  'trois': "Three. From Latin 'tres.' Silent final 's' except in liaison: 'trois amis' = 'twa-zami.' Classic French number.",
  'quatre, cinq, six': "4, 5, 6. All from Latin (quattuor, quinque, sex). 'Six' has an interesting quirk: final 'x' is silent, /s/, or /z/ depending on what follows.",
  'sept, huit, neuf, dix': "7, 8, 9, 10. All Latin-derived (septem, octo, novem, decem). 'Huit' keeps silent 'h-' that came with the Latin 'octo.'",
  'vingt': "Twenty. From Latin 'viginti.' The French reduced viginti to vingt dramatically. Silent final 't' and 'g.' Pronounced 'van(g).'",
  'j\'ai': "I have. Elision of 'je' before 'ai' (have). 'Je ai' becomes 'j'ai.' Elision is mandatory in French — never 'je ai.'",
  'mon / ma / mes': "My (m/f/plural). Possessive agrees with possessed noun, not the speaker. 'Mon livre' (my book, masc), 'ma voiture' (my car, fem), 'mes enfants' (my children).",
  'ton / ta / tes': "Your (m/f/plural, informal). Same gender-match rule as 'mon/ma/mes.' Informal register — use 'votre/vos' for formal/plural.",
  'mon amie (not ma amie)': "'My friend' (feminine, before vowel). Special rule: use MASCULINE possessive 'mon' (not 'ma') before feminine nouns starting with vowel. Phonetic rule overrides gender.",
  'grand / grande': "Tall, big (m/f). Masculine 'grand' with silent 'd'; feminine 'grande' pronounces the 'd' thanks to the -e. Final-consonant rule.",
  'petit / petite': "Small, short (m/f). Same pattern: masculine silent 't,' feminine pronounces 't' because 'e' triggers it. French grammar through phonology.",
  'sympa': "Nice, cool (informal). Short for 'sympathique.' Invariable (no gender change). Colloquial — very common adjective among friends.",
  'C\'est...': "'This is / It is / He is.' 'C'' is elision of 'ce' (this) + 'est' (is). Versatile — covers many English 'this/it/he/she is' contexts.",
  'intelligent / intelligente': "Intelligent, smart (m/f). Masculine 'intelligent' silent 't'; feminine 'intelligente' sounds the 't.' Same pattern as all adjective pairs.",
  'amusant / amusante': "Funny, entertaining (m/f). From 'amuser' (to amuse). Same silent-t / sounded-t pattern across all ing-form-like adjectives.",
  'beau / belle': "Beautiful, handsome (m/f). Irregular pair. Also 'bel' before vowel: 'un bel homme' (a handsome man). Three forms — masc, fem, masc-before-vowel.",
  'vieux / vieille': "Old (m/f). Irregular. Also 'vieil' before vowel: 'un vieil ami' (an old friend). Same three-form pattern as 'beau/bel/belle.'",
  'nouveau / nouvelle': "New (m/f). Irregular. Also 'nouvel' before vowel: 'un nouvel ami' (a new friend). 'Nouveau' drops to 'nouvel' to preserve the vowel-avoiding liaison.",
  'l\'estomac': "Stomach. Masculine. 'Le' elides to 'l\\''. Final 'c' silent. From Latin 'stomachus.' Same root as English 'stomach.'",
  'l\'épaule': "Shoulder. Feminine. 'La' elides before vowel. From Latin 'spatula' (broad blade) — shoulders were seen as flat 'blades.'",
  'de la': "Some (feminine). Partitive article. 'De la soupe' (some soup). Used with uncountable feminine nouns.",
  'de l\'': "Some (before vowels). Partitive, elided. 'De l'eau' (some water). Gender is invisible here because of the elision, but 'eau' is feminine.",
  'des': "Some (plural). Plural partitive. 'Des livres' (some books). All plural partitives take 'des' regardless of gender.",
  'les légumes': "The vegetables. Plural. 'Les' is gender-neutral for all plurals (like Dutch 'de' for plurals). Singular: 'le légume' (masc).",
  'l\'eau': "The water. Feminine. 'La' elides before 'eau.' Liaison + elision in one word. From Latin 'aqua.'",
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
