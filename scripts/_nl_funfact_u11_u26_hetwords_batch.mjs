#!/usr/bin/env node
// Dutch het-words u11-u26 (~25 cards).

import fs from 'node:fs';

const apply = process.argv.includes('--apply');
const GENERIC = "A het-word (neuter). About 1/3 of Dutch nouns use 'het'. No reliable rule, learn it with the word.";

const FACTS = {
  'het beroep': "Profession. Het-word. From 'beroepen' (to call upon, appoint). Literally 'the calling.' Same root as English 'be-call.'",
  'het gesprek': "Conversation. Het-word. Compound: 'ge-' (prefix) + 'sprek' (from spreken). Literally 'a speaking-together.'",
  'het overleg': "Meeting / consultation. Het-word. From 'overleggen' (to consult). Important in Dutch workplace culture — decisions emerge from 'overleg.'",
  'het zou kunnen dat': "'It could be that.' Conditional phrase. 'Het' impersonal + 'zou kunnen' + 'dat.' Formal hedging construction.",
  'het BSN-nummer': "The Burgerservicenummer (citizen service number). Het-word. Dutch-specific — civic registration ID. Required for healthcare, banking, employment.",
  'het uittreksel': "Extract / transcript (from government). Het-word. Compound: 'uit' (out) + 'trekken' (to pull) + -sel. Literally 'pulled-out piece.' Bureaucratic term.",
  'het bewijs': "Evidence / proof. Het-word. From 'bewijzen' (to prove). 'Be-' + 'wijzen' (to point). Literally 'pointed-out.' Legal vocabulary.",
  'het te verwachten resultaat': "The expected result. Passive infinitive: 'te verwachten' = to be expected. Formal academic/business register.",
  'Het was gisteren dat...': "'It was yesterday that...' Cleft construction. 'Het was... dat...' emphasizes the time. Mirror of English 'It was X that Y.'",
  'het wetenschappelijk onderwijs': "Scientific / academic education. Compound: 'wetenschap' (science) + '-elijk' + 'onderwijs' (education). Dutch higher-ed classification.",
  'het tentamen': "Exam (partial/module test). Het-word. From Latin 'tentamen' (trial). Dutch university exam vocabulary. Different from 'examen' (final).",
  'het verslag': "Report. Het-word. From 'verslaan' (to defeat/report on). Media term: news-report. Also: beating in sports.",
  'het beleid': "Policy. Het-word. From 'beleiden' (to lead/manage). Essentially 'management decisions.' Government and corporate vocabulary.",
  'het voorstel': "Proposal. Het-word. Compound: 'voor' (forward) + 'stel' (position). Literally 'what-is-placed-forward.' Meeting/legislative term.",
  'het besluit': "Decision. Het-word. From 'besluiten' (to decide). 'Be-' + 'sluiten' (to close). Decisions 'close' the matter.",
  'het actiepunt': "Action item. Het-word. Compound: 'actie' + 'punt' (point). Meeting-minutes vocabulary.",
  'het draagvlak': "Support / buy-in. Het-word. Compound: 'dragen' (to carry/support) + 'vlak' (surface). Literally 'carrying-surface.' Dutch political-org metaphor.",
  'het onderwijs': "Education. Het-word. Compound: 'onder' (under) + 'wijs' (wise) + 'en' (verb). Literally 'under-wising' = teaching. Pedagogical root.",
  'het vraagstuk': "Problem / issue. Het-word. Compound: 'vraag' (question) + 'stuk' (piece). Literally 'question-piece.' Academic/policy framing.",
  'het gevolg': "Consequence. Het-word. Compound: 'ge-' (prefix) + 'volg' (from volgen). Literally 'the following.' Causality vocabulary.",
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
