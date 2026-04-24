#!/usr/bin/env node
// 10 Spanish cards u27+u28+u30 using 'Feminine -a' generic filler.
// FINAL variant — this zeroes the Spanish boring funFact audit.

import fs from 'node:fs';

const apply = process.argv.includes('--apply');
const GENERIC = 'Feminine noun. Spanish words ending in -a are usually feminine.';

const FACTS = {
  // u27
  'la necesidad de': "The need for / to. Followed by infinitive ('la necesidad de hablar') or subjunctive clause ('la necesidad de que venga'). Abstract nouns of necessity reliably trigger subjunctive after 'que.'",
  'la investigación': "Research / investigation. From Latin 'investigatio' (tracking down). Dual use: police investigation and academic research. 'Hacer investigación' — to do research.",
  'la evaluación': "Evaluation / assessment. From Latin 'valere' (to be worth). Same root as English 'value,' 'evaluate,' 'valid.' In schools, 'evaluación' = grading period.",

  // u28
  'la tesis': "Thesis. From Greek 'thesis' (position, proposition). Invariable in plural: la tesis / las tesis. Same root as English 'thesis,' 'synthesis,' 'hypothesis.'",

  // u30 — academic
  'la tesis del autor': "The author's thesis. 'Del' = de + el contraction (mandatory). Essay-analysis vocabulary: identifying an author's main claim. Academic reading skill.",
  'la carta formal': "Formal letter. 'Carta' from Latin 'charta' (paper). Same root as English 'chart,' 'card,' 'cartography.' Writing-convention vocabulary.",
  'la idea principal': "Main idea. 'Principal' — adjective invariable in gender (la idea principal, el punto principal). From Latin 'principalis.' Core reading-comprehension concept.",
  'la intención del hablante': "Speaker's intention. 'Hablante' (speaker) from 'hablar.' Ending -ante is invariable: el/la hablante. Literary analysis term for identifying communicative purpose.",
  'la fluidez': "Fluency. From 'fluido' (fluid) + -ez (abstract-noun suffix). Same root as English 'fluency.' CEFR vocabulary — hallmark of advanced language learning.",
  'la inmersión lingüística': "Language immersion. 'Inmersión' from Latin 'immergere' (to dip into). Language-teaching method pioneered in Canadian French-immersion programs; term now global.",
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
