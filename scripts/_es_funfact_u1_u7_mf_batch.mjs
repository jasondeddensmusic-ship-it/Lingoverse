#!/usr/bin/env node
// 18 Spanish cards u1-u7 using 'masc or fem' generic filler.
// Most of these are NOT nouns (adverbs, imperatives, verbs) so the filler was always wrong.

import fs from 'node:fs';

const apply = process.argv.includes('--apply');
const GENERIC = 'Spanish nouns are either masculine or feminine. The ending usually gives it away.';

const FACTS = {
  // u1
  'Soy...': "From 'ser' (to be), yo form. Used for identity: 'Soy Ana,' 'Soy profesora.' Contrast 'estoy' (from estar) for location and state. The ser/estar split is Spanish's most famous grammar trap.",
  'estadounidense': "From Spanish for USA: 'Estados Unidos.' Often preferred over 'americano' (which technically means anyone from the Americas). Politically correct across the Spanish-speaking world.",

  // u4
  'quiero': "From 'querer' (to want / to love). Stem change: e→ie in yo/tu/el/ella/ellos forms. Also means 'I love' romantically. 'Te quiero' = I love you (gentler than 'te amo').",
  'de primero / de segundo': "'For the first course / for the second course.' Restaurant ordering formula. 'De' marks the menu section. Spanish meals traditionally have primero (soup/salad), segundo (main), and postre (dessert).",
  'dulce': "Sweet. Invariable for gender: el postre dulce, la fruta dulce. From Latin 'dulcis.' Same root as English 'dulcet.' Plural takes -s: dulces.",
  'salado': "Salty. From 'sal' (salt). In Latin America, 'salado' also means 'unlucky' — an extension of 'salt as bad omen.' Context decides: food vs luck.",
  'picante': "Spicy hot. From 'picar' (to sting, prick). Literally 'stinging.' Different from 'caliente' (temperature hot). Crucial distinction when ordering food.",

  // u5
  'temprano': "Early. Adverb (invariable). From Latin 'temporaneus' (timely). 'Me levanto temprano' — I wake up early. Opposite: 'tarde' (late).",
  'triste': "Sad. Invariable for gender: el hombre triste, la mujer triste. From Latin 'tristis.' Same root as English 'tristful.' Plural: tristes.",

  // u6
  'hay': "'There is / there are.' Impersonal form of 'haber.' Invariable: 'hay una silla,' 'hay diez sillas.' Never changes number. Completely separate from 'tiene' (has, as possession).",
  'cerca': "Near. Adverb. From Latin 'circa' (around). Pairs with 'de' for distance: 'cerca de la plaza' (near the plaza). Same root as English 'circa.'",
  'lejos': "Far. Adverb (invariable). From Latin 'laxus' (slack, loose) — the idea of being 'loosely separated.' Opposite of 'cerca.' Also pairs with 'de': 'lejos de aqui.'",
  'entre': "Between. Preposition. From Latin 'inter.' Same root as English 'inter-' prefix. Followed by two or more items: 'entre tu y yo' (between you and me). No article.",

  // u7
  'sigue': "Imperative of 'seguir' (to follow). Informal tu command. 'Sigue recto' — go straight. Stem change: e→i in all forms except nosotros/vosotros. Common street-direction verb.",
  'cruza': "Imperative of 'cruzar' (to cross). 'Cruza la calle' — cross the street. Regular -ar. Note spelling change: cruza → cruce in formal usted command (preserving the c-sound).",
  'toma': "Imperative of 'tomar' (to take). Tomar covers many senses: take, drink, get. 'Toma el autobus' — take the bus. Latin 'tomar' from 'autumare' (to claim).",
  'ven': "Imperative of 'venir' (to come). One of nine irregular tu commands (along with di, haz, pon, sal, se, ten, ve, ven). Latin 'venire' — same root as English 'venue,' 'advent,' 'convene.'",
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
