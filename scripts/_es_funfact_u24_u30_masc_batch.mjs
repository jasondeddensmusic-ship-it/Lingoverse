#!/usr/bin/env node
// 19 Spanish cards u24 (work) + u27 (abstracts) + u29 (proverb) + u30 (writing).

import fs from 'node:fs';

const apply = process.argv.includes('--apply');
const GENERIC = 'Masculine noun. Spanish words ending in -o are usually masculine.';

const FACTS = {
  // u24 — work
  'el empleo': "Employment / job. From 'emplear' (to employ). Noun form of the verb. Parallel to English 'employ/employment.' In Spain: 'el paro' = unemployment. In Latin America: 'el desempleo.'",
  'el jefe': "Boss. From French 'chef' (head). Same root as English 'chief.' Spanish kept the French spelling. Informally: 'el jefazo' (augmentative, big boss).",
  'el compañero': "Colleague / companion. From Latin 'cum' (with) + 'panis' (bread). Literally 'bread-sharer.' Same root as English 'company.' Bread-sharing etymology is universal.",
  'el puesto': "Position / post. Past participle of 'poner' (to put) used as noun. Also means market stall: 'un puesto de frutas' (fruit stall). Dual meaning via context.",
  'el currículum': "CV / resume. From Latin 'curriculum vitae' (course of life). Often just 'el curri' colloquially. Some regions use 'el CV.' Note accent on ú.",
  'el horario de trabajo': "Work schedule. 'Horario' from 'hora' (hour) + -ario (collection). Literally 'collection of hours.' Spanish productive -ario suffix: diccionario, horario, calendario.",
  'el ambiente laboral': "Work environment. 'Ambiente' from Latin 'ambiens' (surrounding). 'Laboral' adjective from 'labor.' Corporate Spanish heavily borrows -al adjective endings from Latin.",
  'el informe': "Report. From 'informar' (to inform). Noun from verb, shorter form. 'El informe anual' (annual report). Business Spanish staple.",
  'el plazo': "Deadline / term. From Latin 'placitum' (agreement). Originally the 'agreed-upon point' — now shifted to 'time limit.' 'A largo plazo' = long-term.",
  'el jefe / la jefa': "Boss, masc/fem forms. 'La jefa' is modern Spanish — older Spanish used 'la jefe' for female bosses. The feminine form gained standard acceptance in the 20th century.",

  // u27 — abstracts
  'el hecho de que': "'The fact that.' Triggers subjunctive when expressing opinion/emotion about the fact. 'Me alegra el hecho de que hayas venido' (I'm glad about the fact that you came). Subjunctive trigger.",
  'el desarrollo de': "'The development of.' From 'desarrollar' — literally 'to un-roll.' A Latin metaphor: rolling-out as development. Academic/policy vocabulary.",
  'el conocimiento': "Knowledge. From 'conocer' (to know) + -miento (result suffix). Contrast with 'saber' (knowing facts). 'Conocimiento' is the body of knowledge — deeper than 'saber.'",
  'el aprendizaje': "Learning. From 'aprender' (to learn) + -izaje. Suffix -aje is French-derived: viaje, mensaje, personaje. Refers to the process of learning, not single facts.",

  // u29 — proverb
  'El que mucho abarca, poco aprieta': "Spanish proverb: 'He who grabs much, holds little.' Warns against over-extending. 'Abarcar' = encompass, 'apretar' = grip tightly. Equivalent to English 'Jack of all trades, master of none.'",

  // u30 — writing / analysis
  'el argumento principal': "Main argument. 'Argumento' also means plot (of a story) AND argument (debate). Context decides: el argumento de la pelicula (plot) vs el argumento del ensayo (argument).",
  'el tono del texto': "Tone of the text. 'Tono' from Greek 'tonos.' Same root as English 'tone,' 'tonal.' Literary analysis vocabulary: tono formal, tono ironico, tono serio.",
  'el ensayo de opinión': "Opinion essay. 'Ensayo' = essay (also: rehearsal, trial). From French 'essai.' Academic Spanish writing form. Formal essay structure: introduction, thesis, arguments, conclusion.",
  'el dominio del idioma': "Language command / mastery. 'Dominio' from 'dominar' (to master). Same root as English 'dominion,' 'dominant.' CV vocabulary: 'dominio del ingles' = English proficiency.",
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
