#!/usr/bin/env node
// 18 Spanish cards u19 (relatives) + u20 (finance) + u21 (news/passive).

import fs from 'node:fs';

const apply = process.argv.includes('--apply');
const GENERIC = 'Masculine noun. Spanish words ending in -o are usually masculine.';

const FACTS = {
  // u19 — relative clauses
  'el libro que compré': "Relative 'que' + indicative preterite. Specific known book, so indicative 'compre.' If hypothetical ('un libro que compre'), subjunctive would apply. Specificity triggers mood.",
  'el restaurante que te recomendé': "Relative clause with indirect object 'te.' Indicative because the recommendation is a completed fact. 'Recomende' is yo preterite of recomendar.",
  'el lugar donde trabajamos': "Relative 'donde' (where) introduces a place clause. Invariable. Pairs with indicative for known/actual places. Alternative: 'en el que' ('in which').",
  'el barrio': "Neighborhood. From Arabic 'barri' (outside), one of many Arabic loanwords in Spanish architecture terms (alcazar, almohada, alfombra). Barrio specifically marks urban districts.",
  'el que llegue primero': "'The one who arrives first.' Relative 'el que' + subjunctive 'llegue' — hypothetical/future event. Pattern: 'el que/la que/los que/las que + subjunctive' = whoever.",
  'el edificio en el cual trabajo': "'En el cual' (in which) = formal alternative to 'donde' or 'en el que.' 'El/la/los/las + cual' forms are formal register, mostly written.",
  'el hombre cuya casa': "'Cuyo/cuya' = 'whose.' Agrees with thing possessed, NOT owner. Here 'cuya' (fem sing) agrees with 'casa,' not 'hombre.' Rare in speech; common in writing.",

  // u20 — finance
  'el seguro': "Insurance. From 'seguro' (safe, sure). Dual meaning: the noun 'insurance' and the adjective 'safe/sure.' Context decides: 'un seguro caro' (expensive insurance) vs 'estoy seguro' (I am sure).",
  'el impuesto': "Tax. From 'imponer' (to impose). Participle of 'imponer' used as noun: literally 'the imposed thing.' Parallel to English 'imposition' but Spanish made it a noun for 'tax.'",
  'el alquiler': "Rent. From Arabic 'al-kira' (the rent) via 'alquilar' (to rent). The 'al-' prefix on many Spanish words betrays Arabic origin (alfombra, almohada, aceite, azucar).",
  'el interés': "Interest. From Latin 'interesse' (to be between). Same root as English 'interest.' In Spanish, both financial interest and curiosity. Plural: intereses.",
  'el recibo': "Receipt. From 'recibir' (to receive). Invoice documentation. Parallel to English 'receipt' via Latin 'recipere.' Everyday financial-paperwork vocabulary.",
  'el sueldo': "Salary. From Latin 'solidus' (gold coin). Soldiers were paid in solidi — hence also root of 'soldier' and 'solid.' Money-for-service ancient etymology.",

  // u21 — news / passive
  'el periódico': "Newspaper. From Greek 'periodikos' (circular, recurring). Literally 'the periodical.' Same root as English 'periodic.' Daily cycle gave birth to the word.",
  'el titular': "Headline. From 'titular' (to title). Same form serves as verb and noun. Accent on final á. Journalism-specific vocabulary.",
  'el portavoz': "Spokesperson. Compound: 'portar' (to carry) + 'voz' (voice). Literally 'voice-carrier.' Same structure as French 'porte-parole.' Compound noun.",
  'El arquitecto diseñó el edificio': "Active voice. 'Arquitecto' is the agent (doer). 'Diseñó' preterite. Natural Spanish word order: agent-verb-object. Passive voice is less used in Spanish than in English.",
  'El edificio fue diseñado por el arquitecto': "Passive voice. 'Fue diseñado' (ser + participle) + 'por' (by) + agent. Participle 'diseñado' agrees with subject 'edificio' (masc. sing.). Formal register.",
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
