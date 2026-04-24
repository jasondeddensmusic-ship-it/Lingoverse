#!/usr/bin/env node
// Dutch de-words u9-u13 (~38 cards).

import fs from 'node:fs';

const apply = process.argv.includes('--apply');
const GENERIC = "A de-word (common gender). About 2/3 of Dutch nouns use 'de'. All plurals always use 'de'.";

const FACTS = {
  'de arts / de dokter': "Doctor. 'Arts' native Dutch, 'dokter' Latin loan via French. Both common. 'Arts' more formal in Netherlands; 'dokter' colloquial. Dual-register healthcare word.",
  'de leraar / de lerares': "Teacher (male/female). -aar masculine, -ares feminine. From 'leren' (to teach/learn). Gendered agent-suffixes are mostly historical; modern Dutch is informalizing.",
  'de verpleegkundige': "Nurse. Formal term. From 'verplegen' (to nurse) + 'kundig' (skilled) + 'e.' Literally 'nursing-skilled person.' More formal than 'verpleegster.'",
  'de politieagent': "Police officer. Compound: 'politie' (police) + 'agent.' From French 'agent.' Dutch combines French borrowings with native compounds.",
  'de brandweerman': "Firefighter (male). Compound: 'brand' (fire) + 'weer' (defense) + 'man.' Literally 'fire-defense-man.' Feminine: brandweervrouw.",
  'de ingenieur': "Engineer. French loan, pronounced close to the French. -eur endings mark French borrowing. Spelled and sounded as in French.",
  'de advocaat': "Lawyer / avocado. Homograph! Also means the yellow Dutch liqueur. All from Latin 'advocatus.' Context disambiguates (courtroom / kitchen / bar).",
  'de chauffeur': "Driver / chauffeur. French loan. From 'chauffer' (to heat — originally meaning 'stoker' of early steam cars). Retained full French sound.",
  'de zanger / de zangeres': "Singer (male/female). -er/-eres pair. From 'zingen' (to sing). Common music vocabulary.",
  'de apotheker': "Pharmacist. Same Greek 'apothēca' root as 'apotheek' (pharmacy). Agent suffix -er. Matches the 'de apotheek' de-word pattern.",
  'de metro': "Subway. Loan from French/English 'metro,' short for 'metropolitan.' Only in Amsterdam and Rotterdam — Netherlands has limited metro networks.",
  'de fiets': "Bike. Appeared in this position as an essential reinforcement. Dutch bikes per capita are the highest in the world.",
  'de halte': "Stop (bus/tram). From 'halten' (to halt). Cognate with English 'halt' and German 'Halt.' Public transport essential.",
  'de luchthaven': "Airport. Compound: 'lucht' (air) + 'haven' (harbor). Literally 'air-harbor.' Poetic — airports as harbors for flying ships.",
  'de wolk': "Cloud. Native Germanic. Cognate with English 'welkin' (archaic sky) and German 'Wolke.' Short, old word.",
  'de regenboog': "Rainbow. Compound: 'regen' (rain) + 'boog' (bow). Exact same structure as English 'rainbow.' Parallel Germanic imagery.",
  'de telefoon': "Telephone. From Greek 'tele' (far) + 'phone' (sound). Same compound as English. 20th-century tech-vocabulary.",
  'de foto': "Photo. Short for 'fotografie.' Feminine because 'fotografie' is feminine. Dutch preserves the full word's gender in abbreviations.",
  'de baas': "Boss. Native Germanic. Cognate with English 'boss' (actually via Dutch!). English borrowed 'baas' in colonial period. Role-reversal loanword.",
  'de arts': "Doctor (reinforced). Short native form. Used when specifying medical profession: huisarts (GP), tandarts (dentist), kinderarts (pediatrician).",
  'de vergadering': "Meeting. From 'vergaderen' (to gather) + -ing (abstract noun). 'Vergader-' is native Germanic root. Business Dutch essential.",
  'de afspraak': "Appointment. Compound: 'af' (off/complete) + 'spraak' (speech). Literally 'spoken-off' agreement. Dual use: dating, medical, business.",
  'de opleiding': "Education / training. From 'opleiden' (to educate/train). 'Op' (up) + 'leiden' (to lead). Literally 'leading-up.' Formal term for higher education.",
  'de borrel': "Drinks / office drinks. Native Dutch. Specifically a social drinking event — workplace or neighborhood gathering over drinks. Dutch cultural institution.",
  'de vakantiedag': "Vacation day. Compound: 'vakantie' (vacation) + 'dag' (day). Formal employment vocabulary. Dutch law requires minimum vakantiedagen per year.",
  'de werksfeer': "Work atmosphere. Compound: 'werk' (work) + 'sfeer' (atmosphere/sphere). Literally 'work-sphere.' HR buzzword.",
  'de bankpas': "Debit card. Compound: 'bank' + 'pas' (pass/card). Dutch pays for most transactions with bankpas, not credit card. Culturally-specific.",
  'de lening': "Loan. From 'lenen' (to lend). -ing abstract. Banking vocabulary.",
  'de huur': "Rent. From 'huren' (to rent). Short native form. Main housing vocabulary.",
  'de verzekering': "Insurance. From 'verzekeren' (to insure). Compound: 'ver-' (intensifier) + 'zeker' (sure) + -ing. Literally 'making-sure.'",
  'de belasting': "Tax. From 'belasten' (to burden/tax). Literally 'the burdening.' Same metaphor as English 'burden' of taxation.",
  'de klacht': "Complaint. From 'klagen' (to complain). Native Germanic. Legal/customer-service vocabulary.",
  'de bon': "Receipt / voucher. French loan 'bon' (good, as in 'a good-for-X'). Short — single syllable. Shopping essential.",
  'de gemeente': "Municipality. Native Dutch. From 'gemeen' (common). Literally 'the common (entity).' Local-government word.",
  'de fooi': "Tip (gratuity). Native Dutch. Etymology debated. Service-vocabulary, though Dutch tipping culture is modest.",
  'de Tikkie': "Tikkie (payment request app). Dutch-specific. From 'tik' (tap/click) + diminutive. Named the popular Dutch app for split-bill payments.",
  'de reden': "Reason. Native Germanic. Cognate with English 'reason' (via Old French) and German 'Reden.' Basic logic vocabulary.",
  'de oplossing': "Solution. From 'oplossen' (to dissolve/solve). 'Op' (up) + 'lossen' (to release). Literally 'loosing-up.' Problem-solving vocabulary.",
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
