#!/usr/bin/env node
// 24 Spanish cards in u23 (concessive + cause + consequence + conditional connectors).

import fs from 'node:fs';

const apply = process.argv.includes('--apply');
const GENERIC = 'Spanish is the fourth most spoken language worldwide, with 500+ million native speakers.';

const FACTS = {
  'aunque llueve': "'Aunque' + indicative = factual concession. 'Aunque llueve' asserts that it IS raining and we're acknowledging it. Swap to 'aunque llueva' (subjunctive) for hypothetical rain.",
  'aunque estoy cansado': "Indicative after aunque = stating the tiredness is real. 'Aunque esté cansado' would be hypothetical or downplaying. Mood choice here is a register-rich decision.",
  'aunque no tengo tiempo': "Same rule: indicative 'tengo' asserts I do not have time. 'Aunque no tenga tiempo' (subjunctive) would leave it hypothetical or polite hedging.",
  'aunque no me gusta': "Expressing a real dislike using indicative. Spanish treats the like/dislike assertion as factual here, not hypothetical.",
  'aunque ya lo sabia': "'Ya' + pluperfect under aunque. Indicative for known fact. The speaker asserts prior knowledge as real, not speculative.",
  'aunque llueva': "Aunque + subjunctive = hypothetical. 'Aunque llueva' (even if it rains) — the rain may or may not happen. A subtle but important distinction from the indicative 'aunque llueve.'",
  'aunque no quiera': "Subjunctive after aunque signals hypothetical non-desire or concession for unknown situation. 'Aunque no quiera' — even if he doesn't want to, regardless.",
  'aunque me cueste': "'Costar' (to cost/be hard) + subjunctive under aunque. Classic phrase of resolve: 'aunque me cueste la vida' = even at the cost of my life.",
  'aunque no lo creas': "Set phrase meaning 'believe it or not.' Always subjunctive. Common rhetorical device in storytelling, introducing a surprising claim.",
  'no obstante': "Formal connector meaning 'nevertheless' or 'notwithstanding.' Used in written Spanish and formal speech. Literally 'not obstructing' — from Latin non obstante. Not typically spoken casually.",
  'en cambio': "Contrast marker: 'on the other hand,' 'instead.' Weaker than 'por el contrario.' Used constantly in essays and comparison speech: 'Yo prefiero café; en cambio, ella prefiere té.'",
  'mientras que': "'Mientras' alone means 'while'; adding 'que' shifts meaning to 'whereas.' 'Mientras estudio' (while I study) vs 'mientras que yo estudio' (whereas I study). A subtle but crucial shift.",
  'por el contrario': "Strongest contrast marker: 'on the contrary.' Used to reject a previous statement outright. 'Por el contrario, lo hice' — on the contrary, I did do it.",
  'puesto que': "Cause connector, slightly formal. 'Since' or 'given that.' 'Puesto que llueve, nos quedamos' — since it's raining, we'll stay. Pairs with indicative because the cause is factual.",
  'ya que': "Causal: 'since,' 'seeing that.' More common in speech than 'puesto que.' 'Ya que estás aquí, quédate.' — since you're here, stay.",
  'dado que': "Most formal cause connector: 'given that.' Academic and professional. 'Dado que la situación ha cambiado, debemos actuar.' Used in legal and business writing.",
  'asi que': "Spelled 'así que' with accent. Means 'so,' 'therefore.' The most common spoken consequence connector. 'Tengo hambre, así que voy a comer.'",
  'por consiguiente': "Formal 'consequently.' Used in written argumentation. 'El equipo no vino; por consiguiente, se canceló la reunión.' Stylistically higher register than 'así que.'",
  'a menos que': "Subjunctive trigger meaning 'unless.' Always subjunctive. 'Vamos, a menos que llueva' — we'll go, unless it rains. Part of the always-subjunctive conjunction family.",
  'con tal de que': "'Provided that,' 'as long as.' Always subjunctive. 'Te ayudo con tal de que me pagues' — I'll help you provided you pay me.",
  'siempre que': "Two meanings: 'as long as' (conditional, subjunctive) OR 'every time that' (frequency, indicative). Context disambiguates. 'Siempre que vengo' (every time I come) vs 'siempre que vengas' (as long as you come).",
  'por un lado...por otro lado': "Two-sided argument structure. 'Por un lado, es caro; por otro lado, es de buena calidad.' Standard essay and debate structure. 'Lado' means side.",
  'en primer lugar...en segundo lugar': "Enumeration markers. First, secondly. More formal than 'primero... luego... después.' Common in academic writing and structured speeches.",
  'en resumen': "'In summary.' Wraps up an argument. 'En resumen, los datos confirman la hipótesis' — in summary, the data confirm the hypothesis. Synonyms: en conclusión, en definitiva.",
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
