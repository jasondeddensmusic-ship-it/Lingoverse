#!/usr/bin/env node
// Dutch de-words u17-u26 (~32 cards).

import fs from 'node:fs';

const apply = process.argv.includes('--apply');
const GENERIC = "A de-word (common gender). About 2/3 of Dutch nouns use 'de'. All plurals always use 'de'.";

const FACTS = {
  'de makelaar': "Real estate agent. Native Dutch. From 'maken' (to make) + 'laar' (agent). Literally 'maker/arranger.' Key figure in Dutch housing market.",
  'de verhuisdoos': "Moving box. Compound: 'verhuis' (move) + 'doos' (box). Straightforward Dutch compound.",
  'de buurt': "Neighborhood. Native Germanic. Cognate with German 'Bezirk' (district) and archaic English 'borough.' Warm, small-scale community word.",
  'de wijk': "Neighborhood / district. Larger than 'buurt.' More formal — used in urban-planning contexts. Compare English 'ward' (in voting/district sense).",
  'de voorwaarden': "Terms / conditions (plural). From 'voor' (before) + 'waarden' (values/conditions). Legal and contract essential.",
  'de kosten': "Costs. Plural only. From Latin 'constare' (to cost). Same root as English 'cost.' Financial plural.",
  'de adreswijziging': "Change of address. Compound: 'adres' + 'wijziging' (change). Bureaucratic term. Must be registered with 'de gemeente.'",
  'de wachtlijst': "Waiting list. Compound: 'wacht' (wait) + 'lijst' (list). Dutch housing market famously has long wachtlijsten.",
  'de woningnood': "Housing shortage. Compound: 'woning' (dwelling) + 'nood' (emergency/need). Dutch-specific — widely-discussed social issue.",
  'de brief': "Letter (written). From Latin 'breve' (short). Same root as English 'brief.' Opposite of English 'letter' meaning.",
  'de aanhef': "Salutation / letter-opening. From 'aanheffen' (to raise/begin). Specifically the greeting at the top of a letter.",
  'de afsluiting': "Conclusion / closing. From 'afsluiten' (to close off). The closing remarks of a speech or letter.",
  'de stelling': "Thesis / proposition. From 'stellen' (to put/pose). Literally 'the posing.' Academic essay vocabulary.",
  'de inleiding': "Introduction. From 'inleiden' (to lead in). 'In' + 'leiden' + -ing. Literally 'leading-in.' Academic essay section.",
  'de samenvatting': "Summary. Compound: 'samen' (together) + 'vatten' (to grasp) + -ing. Literally 'grasping-together.' Academic writing tool.",
  'de te nemen maatregelen': "The measures to be taken. Passive infinitive: 'te nemen' = to be taken. Formal recommendations. Bureaucratic-report format.",
  'de studiefinanciering': "Student financing. Compound: 'studie' (study) + 'financiering.' Refers specifically to Dutch student loan/grant system (DUO).",
  'de scriptie': "Thesis (academic paper). From Latin 'scriptio' (writing). Same root as English 'script.' Master's thesis or graduation paper.",
  'de notulen': "Minutes (of a meeting). Plural only. From Latin 'notula' (little note). Business-meeting essential.",
  'de agenda': "Agenda. Latin 'agenda' (things to be done). Dual use: meeting agenda AND calendar book. Context decides.",
  'de afdeling': "Department. From 'afdelen' (to divide off). Corporate structure vocabulary. Parallels English 'department' functionally.",
  'de directie': "Management / board of directors. French loan via Latin 'directio.' The top layer of Dutch corporate structure.",
  'de begroting': "Budget (especially government/corporate). From 'begroten' (to estimate). The national budget is 'de Rijksbegroting.'",
  'de platte organisatie': "Flat organization. 'Platte' (flat) + 'organisatie.' Dutch corporate culture prides itself on 'platte' hierarchies — less deferential.",
  'de gezondheidszorg': "Healthcare. Compound: 'gezondheid' (health) + 's' (genitive) + 'zorg' (care). Literally 'health-care.' One of Dutch's most common compounds.",
  'de woningmarkt': "Housing market. Compound: 'woning' (dwelling) + 'markt' (market). Highly discussed in Dutch media due to housing crisis.",
  'de burger': "Citizen. Native Germanic. Cognate with English 'burgher' (older) and German 'Bürger.' NOT to be confused with the hamburger.",
  'de samenleving': "Society. Compound: 'samen' (together) + 'leven' (to live) + -ing. Literally 'together-living.' Warm, organic view of society.",
  'de oorzaak': "Cause. Compound: 'oor' (origin) + 'zaak' (matter/thing). Literally 'origin-thing.' Formal causal vocabulary.",
  'de identiteit': "Identity. Latin loan via French. Same root as English. Sociology and politics vocabulary.",
  'de inburgering': "Integration (of immigrants into Dutch society). From 'inburgeren' (to become a citizen). Dutch-specific legal concept — formal naturalization process.",
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
