#!/usr/bin/env node
// Dutch ge- prefix variant (16 cards).

import fs from 'node:fs';

const apply = process.argv.includes('--apply');
const GENERIC = 'The ge- prefix past participle prefix. Dutch verbs love prefixes.';

const FACTS = {
  'gewerkt': "Worked. Past participle. 'Ge-' + stem + '-t' (weak verb ending). Regular.",
  'gefietst': "Cycled. Past participle of fietsen. 'Ge-' + 'fiets' + '-t.' Very common.",
  'geleerd': "Learned / studied. Past participle of leren. Regular -d ending (after voiced consonant).",
  'gemaakt': "Made / done. Past participle of maken. Note: aa→aa preserved. Regular weak verb.",
  'gekomen': "Come / came. Past participle of komen. IRREGULAR strong verb (ablaut: o→o). Uses zijn as auxiliary.",
  'geworden': "Become. Past participle of worden. Strong verb (ablaut). Uses zijn aux. Also passive auxiliary.",
  'gebleven': "Stayed / remained. Past participle of blijven. Strong verb with ablaut ij→e.",
  'geleden': "Ago. Also past participle of lijden (to suffer). Dual use: 'three years ago' and 'suffered.'",
  'gelukkig': "Happy / fortunately. Despite starting with ge-, NOT a participle — it's an adjective from 'geluk' (luck/fortune). Cognate with English 'lucky.'",
  'geld opnemen': "To withdraw money. NOT a participle — 'geld' is 'money' (noun). Separable: op + nemen. Banking vocabulary.",
  'gelijk hebben': "To be right. 'Gelijk' (right/equal, noun) + 'hebben' (to have). Literally 'to have rightness.'",
  'gesloten': "Closed / shut. Past participle of sluiten. Strong verb (ui→o). Also used as adjective: 'De winkel is gesloten.'",
  'geschreven': "Written. Past participle of schrijven. Strong verb (ij→e). Same ablaut pattern as 'gebleven.'",
  'gebakken': "Baked / fried. Past participle of bakken. Strong verb (a→a). Also used attributively: 'gebakken vis.'",
  'gemiddeld': "On average / average. From 'middelen' (to average) + ge- + -d. Statistical vocabulary.",
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
