#!/usr/bin/env node
// 26 Spanish cards in unit 18 (irregular present subjunctive).

import fs from 'node:fs';

const apply = process.argv.includes('--apply');
const GENERIC = 'Spanish is the fourth most spoken language worldwide, with 500+ million native speakers.';

const FACTS = {
  'sea': "Ser has fully irregular subjunctive: sea, seas, sea, seamos, sean. Formed from a separate Latin root (sim, sis, sit from Classical Latin) rather than the usual ser stem. A true fossil irregularity.",
  'seas': "Second-person singular. Common imperative-like negative: '¡No seas así!' (don't be like that). Subjunctive doubles as the negative imperative.",
  'este': "Estar subjunctive: esté, estés, esté, estemos, estén. Every form carries a written accent mark on the stressed syllable to distinguish from the demonstrative 'este' (this).",
  'vaya': "Ir subjunctive is wildly irregular: vaya, vayas, vaya, vayamos, vayan. No resemblance to the infinitive. Also commonly used alone as an interjection of surprise: '¡Vaya!' (wow).",
  'haya': "Haber subjunctive. Used both as 'may there be' (existential) and as the auxiliary for the present perfect subjunctive (haya comido = may have eaten). Foundational for compound subjunctives.",
  'sepa': "Saber subjunctive takes the stem sep- instead of sab-. Similar shift in conditional/future (sabré/sabría). One of six verbs with irregular subjunctive stems: saber, haber, ser, ir, dar, estar.",
  'vea': "Ver subjunctive. Unlike ver's imperfect (veía), the subjunctive is regular: vea, veas, vea, veamos, vean. The yo form 'veo' → drop o → add a: vea.",
  'quiera': "Querer subjunctive with e→ie stem change: quiera, quieras, quiera, queramos, quieran. Stress shift: nosotros doesn't diphthongize (queramos, not quiéramos).",
  'pueda': "Poder subjunctive with o→ue stem change: pueda, puedas, pueda, podamos, puedan. Nosotros drops the diphthong: podamos, not puédamos. Same stress rule as quiera.",
  'piense': "Pensar subjunctive: piense, pienses, piense, pensemos, piensen. The e→ie stem change affects all stressed syllables. Spanish stem-changes are always in the singular + third-plural.",
  'pida': "Pedir subjunctive: pida, pidas, pida, pidamos, pidan. The e→i change extends to ALL forms, including nosotros (pidamos). -ir verbs with e→i change differ from -ar/-er.",
  'duerma': "Dormir subjunctive: duerma, duermas, duerma, durmamos, duerman. Nosotros undergoes additional o→u: durmamos (not duermamos OR dormamos). Unique double-shift for -ir verbs.",
  'sienta': "Sentir subjunctive with e→ie and e→i in nosotros: sienta, sientas, sienta, sintamos, sientan. Classic -ir e→ie/e→i dual shift. Also seen in preferir, mentir.",
  'prefiera': "Preferir subjunctive: prefiera, prefieras, prefiera, prefiramos, prefieran. Same dual shift as sienta. Verbs in this family: preferir, sentir, mentir, sugerir, divertir.",
  'tenga': "Tener subjunctive takes the 'yo' stem from indicative: tengo → tenga. The 'g' insertion carries into all subjunctive forms: tenga, tengas, tengamos. Matches the pattern in saldr-, vendr- futures.",
  'venga': "Venir subjunctive: venga, vengas, vengamos. Same -g- insertion rule from the yo indicative 'vengo.' Saldr/vendr/tendr pattern reappears across subjunctive AND future.",
  'diga': "Decir subjunctive: diga, digas, diga, digamos, digan. Irregular because yo indicative is 'digo' with g. Note also: the stem 'dic-' of other decir forms never appears here.",
  'haga': "Hacer subjunctive: haga, hagas, haga, hagamos, hagan. Same -g- rule from the yo indicative 'hago.' Also used in set phrases: 'que te haga provecho' (may it serve you well, at meals).",
  'ponga': "Poner subjunctive: ponga, pongas, ponga, pongamos, pongan. Same -g- pattern. Very common in commands: 'póngalo aquí' (put it here, formal command uses subjunctive form).",
  'salga': "Salir subjunctive: salga, salgas, salga, salgamos, salgan. -g- pattern. Pair with the future (saldré) and conditional (saldría) which use the d-insertion for the same irregularity.",
  'Te recomiendo que vayas': "Recomendar + que triggers subjunctive. The recommendation verb belongs to the same family as sugerir, aconsejar, proponer. All require subjunctive in the que-clause.",
  'Te sugiero que hagas': "Sugerir triggers subjunctive. 'Hagas' is the subjunctive of hacer. Spanish grammar puts advice-giving verbs squarely in the subjunctive camp because the suggested action is not yet factual.",
  'Ojala que tengas': "'Ojalá' literally means 'may Allah grant' from Arabic wa-sha-Allah. Islamic Spain left this phrase as one of Spanish's most used subjunctive triggers. 'Ojalá' alone can trigger subjunctive without 'que.'",
  'No creo que sea': "Negated belief + subjunctive. Note: positive 'creo que es' takes indicative. The belief asymmetry is foundational for B1 subjunctive mastery.",
  'Dudo que tenga': "Doubt + subjunctive. 'Dudar' is a classic subjunctive trigger. Conversely, 'no dudo que' (with 'no' = affirming) takes indicative. Double-negation flips the mood choice.",
  'Es probable que venga': "Probability phrases take subjunctive. 'Es probable,' 'es posible,' 'es dudoso' all trigger it. But 'es seguro que' and 'es cierto que' stay indicative (certainty flips to indicative).",
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
    // Require '{type:"teach"' near the trg to avoid matching match-pair entries.
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
