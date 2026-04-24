#!/usr/bin/env node
// Dutch u24-u30 stem+ending tail (~31 cards).

import fs from 'node:fs';

const apply = process.argv.includes('--apply');
const GENERIC = 'Dutch verbs follow the stem + ending pattern. Find the stem, add the right ending.';

const FACTS = {
  'aantonen': "To demonstrate / show (evidence). Separable: 'aan' (at/on) + 'tonen' (to show). Formal academic verb for proving a point with evidence.",
  'de te lezen tekst': "The text to be read. Passive-infinitive construction. 'Te + infinitive' marks obligation/future: 'te lezen' = to-be-read. Scholarly noun phrase.",
  'Het is de methode die telt.': "'It is the method that counts.' Cleft construction. 'Het is... die...' pattern emphasizes the subject. Same as English 'It is X that Y.'",
  'hetgeen': "Which / that which (formal). Archaic relative. Literally 'the-what.' Found in legal and high-register writing, replacing 'wat' for abstract antecedents.",
  'daarentegen': "On the other hand / in contrast. Compound: 'daar' (there) + 'entegen' (against). 'Against that.' Formal contrast connector.",
  'ik ben van mening dat': "'I am of the opinion that.' Formal opinion opener. Literally 'I am of opinion that.' Triggers verb-final word order in the clause.",
  'ik betwijfel of': "'I doubt whether.' From 'twijfelen' (to doubt) + 'be-' (intensifier). 'Of' (whether) introduces uncertainty. Formal academic hedging.",
  'ik ben het daar niet mee eens': "'I don't agree with that.' Complex negation: 'niet' + 'mee eens' (in agreement with). 'Daar mee' = with that. Dismantles the phrase carefully.",
  'om eerlijk te zijn': "'To be honest.' Infinitive of purpose: 'om' + 'te' + infinitive. 'Eerlijk' (honest) + 'zijn' (to be). Common conversational opener.",
  'mag ik u doorverbinden?': "'May I connect you?' Customer-service phone formula. 'Doorverbinden' (to transfer) — 'door' (through) + 'verbinden' (to connect).",
  'ik bel u terug': "'I'll call you back.' Separable verb 'terugbellen.' In main clause, 'terug' splits off to the end. 'Ik bel u terug' — literal 'I call you back.'",
  'wie het laatst lacht, lacht het best': "He who laughs last, laughs best. Dutch proverb. Same moral as English version. Classic folk wisdom about timing in conflict.",
  'de appel valt niet ver van de boom': "The apple doesn't fall far from the tree. Identical to English idiom. Both languages inherited it from common Germanic folk wisdom.",
  'de kat uit de boom kijken': "'To wait and see / to see which way the wind blows.' Literally 'to look the cat out of the tree.' Dutch cat-idiom for cautious waiting.",
  'zoals het klokje thuis tikt, tikt het nergens': "There's no place like home. Literally 'as the clock ticks at home, it ticks nowhere.' Dutch-specific — not inherited from English.",
  'met de deur in huis vallen': "To be very direct / cut to the chase. Literally 'to fall into the house with the door.' Dutch directness as a cultural virtue.",
  'iets onder de knie krijgen': "To master something / get the hang of it. Literally 'to get something under the knee.' Bodily metaphor for gaining control.",
  'op het puntje van je tong liggen': "To be on the tip of your tongue. Identical imagery to English. The tongue-tip metaphor for near-retrieval is universal.",
  'ergens de vinger op leggen': "To put your finger on it / pinpoint. Same metaphor as English. Finger = precise identification. Shared Germanic idiom.",
  'door de zure appel heen bijten': "To bite the bullet. Literally 'to bite through the sour apple.' Dutch uses apple; English uses bullet. Both mean enduring something unpleasant.",
  'van een mug een olifant maken': "To make a mountain out of a molehill. Literally 'to make an elephant out of a mosquito.' Dutch uses insect-to-elephant; English uses mole-to-mountain.",
  'met de noorderzon vertrekken': "To vanish into thin air. Literally 'to leave with the northern sun.' Evocative — the northern sun is mythic, hidden. Poetic Dutch idiom.",
  'iets door de vingers zien': "To turn a blind eye to something. Literally 'to see something through the fingers.' Fingers as filter — deliberately selective vision.",
  'het is niet alles goud wat er blinkt': "All that glitters is not gold. Identical moral to English. Dutch phrasing preserves the 'glitter' (blinken) imagery.",
  'aanbevelen': "To recommend. Separable: 'aan' (to/at) + 'bevelen' (to command). Literally 'to command toward.' Softer than 'commanding' — authoritative endorsement.",
  'onderbouwen': "To support / substantiate (an argument). Compound: 'onder' (under) + 'bouwen' (to build). Literally 'build-under.' Same metaphor as English 'underpin.'",
  'weerleggen': "To refute / counter. Compound: 'weer' (again/counter) + 'leggen' (to lay). Literally 'to lay-against.' Academic argumentation term.",
  'ondanks dat': "Despite the fact that. 'Ondanks' (despite) + 'dat' (that). Formal concession. Triggers verb-final. More formal than 'hoewel.'",
  'zakken': "To fail (an exam). Native Dutch. Also means 'to sag/drop.' Metaphorically: a failed test 'drops' you. 'Gezakt voor het examen' (failed the exam).",
  'voorbereiden': "To prepare. Separable: 'voor' (for/ahead) + 'bereiden' (to prepare). 'Bereiden' alone = prepare food; 'voorbereiden' = prepare for an event.",
  'oefenen': "To practise. Native Dutch. Cognate with German 'üben.' Regular weak verb. Essential for describing language learning.",
};

let total = 0;
const LANG_ROOT = 'src/data/dutch-v2';
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
