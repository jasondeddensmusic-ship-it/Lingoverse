#!/usr/bin/env node
// 13 Spanish cards u16-u17 in 'masc/fem' variant.

import fs from 'node:fs';

const apply = process.argv.includes('--apply');
const GENERIC = 'Spanish nouns are either masculine or feminine. The ending usually gives it away.';

const FACTS = {
  'Le gustaría': "Third-person / formal 'usted.' 'Le' is indirect object (to him/her/you-formal). Same verb construction as me/te/nos/les gustaría. Polite invitation: '¿Le gustaría un café?'",
  'hablarías': "Conditional of hablar, tú form. Regular conditional: infinitive + -ías. Like future, Spanish conditional endings attach to the full infinitive, not the stem.",
  'hablaríamos': "Nosotros conditional. Note the accent on í — obligatory because otherwise stress would fall on the wrong syllable. Spanish conditional always carries the accent.",
  'hablarían': "Ellos/ustedes conditional. 'Hablarían' — they/you-all would speak. Ending -ían with accent distinguishes from imperfect (which is also -ían for -er/-ir, but with different verb stem).",
  'tendría': "Irregular conditional: tener shifts to 'tendr-' stem (same d-insertion as future). 'Tendría tiempo' — I would have time. Used often in polite or hypothetical contexts.",
  'haría': "Irregular conditional: hacer → 'har-' stem. 'Haría cualquier cosa' — I would do anything. Conditional of hacer is one of the most high-frequency irregulars in Spanish.",
  'diría': "Irregular conditional: decir → 'dir-' stem. '¿Qué diría si supiera?' (What would he say if he knew?). Common in reported speech and hypotheticals.",
  'podría': "Irregular conditional: poder → 'podr-' stem. 'Podría ayudarte' — I could help you. Softens requests and suggestions. Like English 'could,' not 'can.'",
  'pondría': "Irregular conditional: poner → 'pondr-' stem. D-insertion family. 'Lo pondría aquí' — I would put it here. Architectural/placement discussions use it constantly.",
  'sabría': "Irregular conditional: saber → 'sabr-' stem (e-drop). 'Sabría qué hacer' — I would know what to do. The e-drop family: haber, poder, saber, querer, caber.",
  'querría': "Irregular conditional: querer → 'querr-' stem. Double-r is rare. 'Querría otro café' — I would like another coffee. Softer alternative to 'quiero.'",
  'Debería': "Conditional of deber. 'I should.' Same force as English 'should' — obligation softened by the conditional mood. 'Debería llamarla' — I should call her.",
  'Ojalá': "Spanish's most beloved subjunctive trigger. From Arabic 'wa-sha-Allah' (may God will it). Used with present subjunctive for wishes about future, imperfect subjunctive for wishes about present/hypothetical.",
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
