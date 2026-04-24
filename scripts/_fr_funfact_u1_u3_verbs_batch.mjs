#!/usr/bin/env node
// French u1-u3 verb-conjugation variant (17 cards).

import fs from 'node:fs';

const apply = process.argv.includes('--apply');
const GENERIC = 'French verbs change form for each person. The spoken forms are often simpler than the written ones.';

const FACTS = {
  // u1
  'Je m\'appelle...': "'My name is...' Literally 'I call myself.' Uses reflexive 's'' (shortened 'se' before vowel). Self-naming through reflexive — same as Spanish 'me llamo,' German 'ich heiße.'",
  'Je voudrais...': "'I would like...' Conditional of 'vouloir' (to want). Softer than 'je veux' (I want). Essential for polite requests: ordering food, asking favors.",

  // u2 — être and avoir
  'Je suis...': "'I am...' From Latin 'sum.' One of the most irregular verbs — like English 'I am.' Identity and origin marker: 'Je suis français' (I am French).",
  'Je parle...': "'I speak...' Regular -er verb 'parler.' Stem 'parl-' + 'e' ending. From Latin 'parabolare' (to speak in parables) — same root as English 'parable.'",
  'je suis': "I am. Full être paradigm starts here. 'Être' is irregular from Latin 'esse' + 'stare' (mixed-origin verb). Compare Spanish 'ser' (similar mix).",
  'tu es': "You are (informal). Second-person singular. 'Tu' is informal/intimate. Silent 's' in 'es' — French often drops final consonants in speech.",
  'il est / elle est': "He is / she is. Third-person singular. 'Est' from Latin 'est.' Silent 't' at end — liaison only before vowels: 'il est ici' → 'il-est-t-ici.'",
  'nous sommes': "We are. First-person plural. Note: 'sommes' with double m — one of few French verbs with this spelling. Liaison: 'nous-z-avons.'",
  'vous êtes': "You are (formal/plural). Covers both formal-singular and plural. Circumflex on 'ê' from older 's' (Old French 'vous estes').",
  'ils sont / elles sont': "They are (m/f). Silent final 't' — 'ils sont' pronounced 'eel-so(n).' Mixed-gender group uses masculine 'ils' by default.",
  'tu as': "You have (informal). Irregular 'avoir' paradigm. 'As' from Latin 'habes' via heavy reduction. French reduced Latin more than most Romance languages.",
  'il a / elle a': "He has / she has. Short, from Latin 'habet.' One of the most drastically reduced Romance forms. 'Il a' sounds like 'ee-la.'",
  'nous avons': "We have. 'Avons' from Latin 'habemus.' The 'h-' is silent in both French and Latin here. Liaison: 'nous-z-avons.'",
  'vous avez': "You have (formal/plural). 'Avez' from Latin 'habetis.' Liaison: 'vous-z-avez.' Essential for formal conversations.",
  'ils ont / elles ont': "They have. 'Ont' from Latin 'habent.' Major reduction. Silent final 't.' 'Ils ont-t-acheté' (they bought) uses liaison.",
  'Je viens de...': "'I come from...' From 'venir' (to come). Self-introduction origin formula. 'Venir de' + place = 'come from.' Useful with city/country names.",

  // u3
  'Nous sommes ... dans la famille': "'There are ... of us in the family.' Literally 'we are ... in the family.' French uses 'être' for existence-in-a-group, different from English 'there are.'",
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
