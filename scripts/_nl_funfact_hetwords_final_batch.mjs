#!/usr/bin/env node
// Dutch het-words final 24 cards.

import fs from 'node:fs';

const apply = process.argv.includes('--apply');
const GENERIC = "A het-word (neuter). About 1/3 of Dutch nouns use 'het'. No reliable rule, learn it with the word.";

const FACTS = {
  'het lijkt me': "It seems to me. Impersonal phrase. Lijken (to seem) + me (dative). Opinion softener.",
  'het poldermodel': "The polder model. Dutch political-economic consensus culture. Named after centuries of cooperative water-management.",
  'het cijfer': "Grade / digit. From Arabic 'sifr' (zero/empty) via medieval Latin. Same root as English 'zero' and 'cipher.'",
  'het onderzoek': "Research / investigation. Compound: onder (under) + zoek (search). Literally 'under-search.' Academic vocab.",
  'het broodje': "Bread roll (u20 context). Het-word because diminutive. Diminutives always take het.",
  'het biertje': "Little beer (u20 context). Diminutive. Same rule: -je → het.",
  'het bloempje': "Little flower. Diminutive of bloem. Shows the double-p before -je.",
  'het ringetje': "Little ring. Diminutive of ring. -etje after consonant cluster.",
  'het raampje': "Little window. Diminutive of raam.",
  'het standpunt': "Viewpoint / stance. Compound: stand (stance) + punt (point). Debate-and-opinion vocabulary.",
  'het argument': "Argument. Latin loan. Same root as English 'argument.' Logic and debate vocab.",
  'het betoog': "The argument / plea. From 'betogen' (to argue). Slightly more formal than argument.",
  'het berouw': "Remorse. From 'berouwen' (to cause regret). Emotional-spiritual weight.",
  'het zij zo': "So be it. Fixed archaic phrase. Subjunctive-like. Resignation marker.",
  'het moge duidelijk zijn': "Let it be clear. Archaic imperative with moge (may). Formal-ceremonial register.",
  'het gedicht': "Poem. From 'dichten' (to compose poetry). Ge- + dicht (dense/close). Literary term.",
  'het is waar dat...echter': "'It is true that...however.' Concessive structure. Used in essays to concede a point.",
  'het tegenargument': "Counter-argument. Compound: tegen (against) + argument. Debate vocabulary.",
  'het staat vast dat': "'It is certain that.' Vast staan = to stand fast/certain. Assertion marker.",
  'het is onmiskenbaar': "It is unmistakable. From onmiskenbaar: on (not) + miskennen (to mistake) + -baar. Emphatic agreement.",
  'het lijdt geen twijfel dat': "There is no doubt that. Lijden = to suffer/endure. Literally 'endures no doubt.' Certainty statement.",
  'het betoog': "The argument (u29 reinforced). Formal academic vocabulary.",
  'het hangt ervan af': "It depends. Hangen (to hang) + van (on/of). Literally 'it hangs on it.' Conditional-agreement formula.",
  'het is genuanceerder dan dat': "It is more nuanced than that. Comparative of genuanceerd + dan. Academic hedging.",
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
