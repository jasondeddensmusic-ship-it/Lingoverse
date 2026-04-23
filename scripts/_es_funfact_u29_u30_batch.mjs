#!/usr/bin/env node
// 19 Spanish cards u29-u30 (refranes + formal register).

import fs from 'node:fs';

const apply = process.argv.includes('--apply');
const GENERIC = 'Spanish is the fourth most spoken language worldwide, with 500+ million native speakers.';

const FACTS = {
  'No hay mal que por bien no venga': "Literally 'there is no evil that doesn't come for a good.' Spanish refrán dating to the 17th century. Cervantes used variants in Don Quijote.",
  'Más vale tarde que nunca': "Direct cognate with English 'better late than never.' Both phrases date to medieval Latin ('potius sero quam nunquam'). One of Spanish's most-used refranes.",
  'En boca cerrada no entran moscas': "Literally 'flies don't enter a closed mouth.' Spanish wisdom about silence. Used often to hush someone who's oversharing or spreading gossip.",
  'A quien madruga, Dios le ayuda': "Literally 'God helps the one who gets up early.' Strong Catholic-era moral imprint on the refrán. Still used today, often shortened to 'a quien madruga...'.",
  'Dime con quién andas y te diré quién eres': "'Tell me whom you walk with, and I'll tell you who you are.' Variant of Cervantes and Aesop. Underscores Spanish cultural focus on company and reputation.",
  'Ojos que no ven, corazón que no siente': "Literally 'eyes that don't see, heart that doesn't feel.' Often used for long-distance relationships or deliberately avoiding bad news.",
  'Quien siembra vientos, recoge tempestades': "Literally 'who sows winds, reaps tempests.' Biblical root (Hosea 8:7). Warning about consequences. Found across Romance languages with slight variations.",
  'No por mucho madrugar amanece más temprano': "Literally 'not even by getting up a lot does dawn come earlier.' Patience proverb. Popularized in modern use; sometimes seen as counterpoint to 'a quien madruga.'",
  'Más vale prevenir que curar': "'Better to prevent than to cure.' Public-health-era proverb, seen on medical posters throughout the Spanish-speaking world. The structure 'más vale X que Y' is a classic refrán template.",
  'Estimado/a señor/a': "Formal letter/email opener. The masculine/feminine slashes allow a gender-neutral greeting. 'Estimado' (esteemed) is warmer than 'dear'; Spanish business tradition prefers it.",
  'en la actualidad': "'Currently, at present.' Academic and news register. Not equivalent to English 'actually' (false friend — 'actually' translates as 'en realidad').",
  'en esta imagen se puede observar': "Standard phrase for describing images in Spanish DELE exams. 'Se puede observar' = one/you can observe. The 'se puede + infinitive' pattern is a versatile impersonal.",
  'estoy de acuerdo con... pero': "Debate technique: agree first, then disagree. The 'pero' softens the incoming counterargument. Spanish debate culture values this diplomatic framing.",
  'por una parte... por otra parte': "Essay/oral-exam structure. Paired formal variant of 'por un lado... por otro lado.' Standard DELE written-task scaffolding.",
  'lo que quiero decir es que': "Clarification phrase. Literally 'what I want to say is that.' Spanish speakers use this to restart a thought or rephrase. Often comes after a tangent.",
  'como si + subjuntivo imperfecto': "'As if' always triggers imperfect subjunctive: 'habla como si supiera' (he speaks as if he knew). Never indicative. The subjunctive reinforces the counterfactual.",
  'hubiera + participio': "Pluperfect subjunctive. 'Hubiera + past participle' expresses a hypothetical past action. Core building block for ojalá regrets and third conditionals.",
  'por mucho que + subjuntivo': "'No matter how much' + subjunctive. 'Por mucho que grite, no te va a oír' (no matter how much you shout, he won't hear you). Concessive with subjunctive.",
  'a no ser que + subjuntivo': "'Unless' (formal) + always subjunctive. Synonym of 'a menos que.' Slightly more formal; academic Spanish favors 'a no ser que.'",
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
