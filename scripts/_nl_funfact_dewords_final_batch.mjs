#!/usr/bin/env node
// Dutch de-words final 19 cards.

import fs from 'node:fs';

const apply = process.argv.includes('--apply');
const GENERIC = "A de-word (common gender). About 2/3 of Dutch nouns use 'de'. All plurals always use 'de'.";

const FACTS = {
  'de basisschool': "Primary school. Compound: basis (base/foundation) + school. Ages 4-12 in Netherlands.",
  'de middelbare school': "Secondary school. Literally 'middle school.' Ages 12-18. Multiple tracks (VMBO/HAVO/VWO).",
  'de maatregel': "Measure / policy. Compound: maat (measure) + regel (rule). Government policy vocabulary.",
  'de Nieuwjaarsduik': "New Year's Dive. Annual Dutch tradition: thousands dive into the North Sea on Jan 1. Scheveningen is the most famous location.",
  'de vervuiling': "Pollution. From vervuilen (to pollute). Ver- + vuil (dirty) + -ing. Environmental vocabulary.",
  'de zonnebril': "Sunglasses. Compound: zon (sun) + -nen + bril (glasses). Always singular in Dutch (contrasts with English plural).",
  'de helft': "Half. From Germanic 'halba.' Cognate with English 'half.' Feminine despite Germanic neuter origins.",
  'de uitzending': "Broadcast. From uitzenden (to broadcast). Uit (out) + zenden (to send) + -ing. Media vocabulary.",
  'de spijt': "Regret. Native Dutch. Short, potent emotion word. 'Hij heeft spijt' (he regrets it).",
  'de teleurstelling': "Disappointment. From teleurstellen (to disappoint). Tel (count) + eur (away) + stellen. Literally 'to misplace' expectations.",
  'de nuchterheid': "Sobriety / level-headedness. From nuchter + -heid (abstract suffix). Cultural-value word.",
  'de beste stuurlui staan aan wal': "The best sailors stand on shore. Dutch proverb equivalent to 'armchair critic.' Shore-bound people always know better than the sailors.",
  'de vergelijking': "Comparison. From vergelijken. Ver- + gelijk (equal) + -ing. Academic writing vocabulary.",
  'de overdrijving': "Exaggeration. From overdrijven. Over (over) + drijven (to drive). Literally 'over-driving.' Rhetorical term.",
  'de spanning': "Suspense / tension. From spannen (to stretch/tense). Literary and emotional usage.",
  'de ontknoping': "Denouement / resolution. From ontknopen (to untie). Literary-narrative climax term.",
  'de klimaatverandering': "Climate change. Compound: klimaat + s + verandering (change). Modern environmental vocabulary.",
  'de toets': "Test / touch. Dual use: academic test AND a key on keyboard. From 'toetsen' (to touch/test).",
  'de vaardigheid': "Skill / competence. From vaardig (skilled) + -heid. Abstract noun. Educational and HR vocabulary.",
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
