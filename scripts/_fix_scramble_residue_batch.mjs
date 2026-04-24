#!/usr/bin/env node
// Fix clear scramble residue cases across Korean + Dutch.

import fs from 'node:fs';

const apply = process.argv.includes('--apply');

// Korean fixes (nl: field)
const KO_CASES = [
  {trg: 'Review Summary', prefix: 'Age. Crucial in Korean', fact: "End-of-unit consolidation. Korean curriculum emphasizes systematic review of each grammatical structure before advancing."},
  {trg: '얼마나', prefix: 'Why. Question word', fact: "How much / how long. Question word for degree, duration, extent: 얼마나 기다렸어요? (how long did you wait?). Different from 얼마 (how much for prices)."},
];

// Dutch fixes (trg: field)
const NL_CASES = [
  {trg: 'binnenkomen', prefix: 'For / in front of', fact: "To come in. Separable: 'binnen' (inside) + 'komen' (to come). Parallels English 'come in' written as one word in dictionary form."},
  {trg: 'zei', prefix: 'Early. Germanic root', fact: "Said (past of zeggen). Irregular strong verb. Core reporting-verb past tense."},
  {trg: 'gewandeld', prefix: 'Cosy / sociable / pleasant', fact: "Walked / went for a walk. Past participle of 'wandelen.' Regular -d ending. 'Wandelen' implies leisurely walking."},
  {trg: 'en toen', prefix: 'First. Cognate with English', fact: "And then. Conjunction 'en' (and) + 'toen' (then, past). Used specifically in past narratives. For future: 'en dan.'"},
  {trg: 'daarna', prefix: 'First. Cognate with English', fact: "After that / then. Compound: 'daar' (there) + 'na' (after). Literally 'there-after.' Sequential-narrative connector."},
  {trg: 'naarmate', prefix: 'Although / even though', fact: "As / in proportion as. Correlative conjunction. 'Naarmate het kouder wordt' (as it gets colder). Triggers verb-final."},
];

let total = 0;

for (const [root, field, CASES] of [['src/data/korean-v2', 'nl', KO_CASES], ['src/data/dutch-v2', 'trg', NL_CASES]]) {
  for (const file of fs.readdirSync(root)) {
    if (!file.endsWith('.js')) continue;
    const p = `${root}/${file}`;
    let text = fs.readFileSync(p, 'utf8');
    let count = 0;
    for (const {trg, prefix, fact} of CASES) {
      const escTrg = trg.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const escPrefix = prefix.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const fieldPat = field === 'trg' ? 'trg' : '(?:trg|nl)';
      const re = new RegExp(`(\\{type:"teach",(?:kind:"[^"]*",)?${fieldPat}:"${escTrg}"[\\s\\S]*?funFact:")${escPrefix}[^"]*(")`, 'g');
      if (!re.test(text)) continue;
      re.lastIndex = 0;
      text = text.replace(re, (_, pre, post) => { count++; return pre + fact + post; });
    }
    if (count > 0) {
      console.log(`${p}: ${count}`);
      total += count;
      if (apply) fs.writeFileSync(p, text);
    }
  }
}

console.log(`\nTotal: ${total}`);
if (!apply) console.log('Dry run.');
