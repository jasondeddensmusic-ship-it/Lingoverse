#!/usr/bin/env node
// Dutch closest-pair tail u24-u29 (~47 cards).

import fs from 'node:fs';

const apply = process.argv.includes('--apply');
const GENERIC = 'Dutch and English are the closest major language pair in the world. Many words share common roots.';

const FACTS = {
  'waarvan': "Of which / whose. Pronominal adverb: waar + van. Same pattern as waarmee/waarop. Formal relative.",
  'derhalve': "Therefore (formal). Archaic. Literally 'there-through-half.' Legal and academic register. Rare in speech.",
  'desalniettemin': "Nevertheless. Formal. Multi-morpheme compound: des-al-niet-te-min. One of Dutch's longest formal connectors.",
  'het hoger beroepsonderwijs': "Higher professional education (HBO). Het-word. Dutch tertiary-education tier. HBO is between vocational and university-level.",
  'Zou je misschien even...': "Could you maybe just... Ultra-polite request. Stacks zou (would) + misschien (maybe) + even (just). Triple softener.",
  'ter kennisgeving': "For information / noted. Fixed formal phrase. Ter = to the. Kennisgeving = notification. Business-memo footer.",
  'Naar aanleiding van...': "Following up on... / Regarding... Business letter opener. Used to reference prior correspondence or events.",
  'In afwachting van uw reactie': "Awaiting your response. Business letter closing. Ter kennisgeving / in afwachting are set-piece formulas.",
  'Hierbij stuur ik u...': "Hereby I send you... Email/letter enclosure-formula. Hierbij = with this.",
  'ofschoon': "Although, albeit (formal). Older form of hoewel. Stark written register.",
  'hoe...hoe': "The more...the more. Correlative structure. Hoe meer, hoe beter (the more, the better).",
  'des te': "All the more (formal). Archaic genitive des + te. Comparative intensifier. Formal writing.",
  'daarnaast': "Moreover, in addition. Compound: daar (there) + naast (next to). Literally 'next to that.' Essay connector.",
  'tot slot': "Finally, in conclusion. Tot (to/until) + slot (end/lock). Essay-ending formula.",
  'samenvattend': "In summary. Present participle of samenvatten (summarize). Used as sentence adverb.",
  'concluderend': "In conclusion. Present participle of concluderen. Latin-root formal.",
  'enerzijds...anderzijds': "On the one hand...on the other hand. Formal debate/essay vocabulary. Ener + zijde (side), ander + zijde.",
  'wellicht': "Perhaps / possibly. Native Dutch. Cognate with English 'well-lit' — wel + licht. Formal.",
  'mogelijkerwijs': "Possibly (formal). From mogelijk (possible) + -erwijs (-ly). Written register.",
  'overigens': "By the way / incidentally. Compound: over (over) + ig + -ens. Topic-shift connector.",
  'trouwens': "By the way / anyway. Native Dutch. More casual than overigens. Conversational topic-shift.",
  'inderdaad': "Indeed / that's right. Compound: in + der + daad (deed). Literally 'in the deed.' Agreement marker.",
  'wat mij betreft': "As far as I'm concerned. Literally 'what concerns me.' Formal opinion structure.",
  'mijns inziens': "In my view / in my judgment. Archaic genitive mijns + inziens (of my judgment). Very formal.",
  'daar heb je een punt': "You have a point there. Fixed phrase. Same as English idiom.",
  'dat klopt deels': "That's partly true. Kloppen = to be correct (also: to knock). Partial-agreement marker.",
  'wat ik bedoel is': "What I mean is. Clarification structure. Bedoelen = to mean.",
  'laat ik het zo zeggen': "Let me put it this way. Imperative laten + zo (so/thus) + zeggen.",
  'maar goed': "Anyway / but well / moving on. Casual topic-shift, similar to English 'anyway.' Conversational.",
  'tenslotte': "After all. Also: finally. Dual-use connector. Context decides meaning.",
  'al met al': "All in all / all things considered. Reduplicated al (all). Summary formula.",
  'hoe dan ook': "In any case / no matter what. Fixed phrase. Three-word dismissive of specifics.",
  'per saldo': "On balance / when all is said and done. Latin/Italian loan. Financial-accounting metaphor.",
  'met wie spreek ik?': "Who am I speaking with? Phone-etiquette formula. Same as English structurally.",
  'kunt u dat herhalen?': "Could you repeat that? Polite formal request. Kunnen + herhalen.",
  'oost west, thuis best': "East west, home is best. Dutch proverb equivalent to 'there's no place like home.' Uses reduplicated structure.",
  'wie niet waagt, wie niet wint': "Nothing ventured, nothing gained. Literally 'who doesn't dare, doesn't win.' Same moral as English.",
  'alle begin is moeilijk': "Every beginning is difficult. Dutch folk wisdom. Encourages persistence through early struggle.",
  'eenmaal is geenmaal': "Once doesn't count / one time is no time. Dutch proverb about repetition establishing habit.",
  'weliswaar...maar': "Admittedly...but / granted...but. Concessive structure. Weliswaar concedes, maar contrasts.",
  'men zou kunnen stellen': "One could argue. Formal academic hedge. Men = impersonal one. Stellen = to pose (thesis).",
  'niettemin': "Nevertheless / nonetheless. Compound: niet (not) + te (to) + min (less). Literally 'not-to-less.' Formal.",
  'desondanks': "Despite that / in spite of that. Formal concession. Similar to niettemin but more emphatic.",
  'daar komt bij dat': "On top of that / moreover. Compound phrase. Intensifies an already-stated point.",
  'in zekere zin': "In a sense / in a way. Hedged claim. Zeker (certain) + zin (sense). Nuance-marker.",
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
