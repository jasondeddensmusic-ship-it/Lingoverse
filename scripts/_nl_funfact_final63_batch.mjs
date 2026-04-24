#!/usr/bin/env node
// Dutch final 63 boring cards across 8 variants. ZEROES Dutch audit.

import fs from 'node:fs';

const apply = process.argv.includes('--apply');

const FACTS = [
  // V2 word-order variant
  ['graag', 'Common in everyday Dutch. Position in the sentence', "Gladly / please. Native Dutch adverb. 'Ik doe het graag' (I gladly do it). Used to soften requests and express pleasure."],
  ['ook', 'Common in everyday Dutch. Position in the sentence', "Also / too. Cognate with English 'eke' (archaic 'also'). Placed right after the verb."],
  ['nooit', 'Common in everyday Dutch. Position in the sentence', "Never. Cognate with German 'nie' via Middle Dutch 'nooit.' Negative frequency adverb."],
  ['er', 'Common in everyday Dutch. Position in the sentence', "There (unstressed) / it. Dutch's most versatile particle: expletive, locative, partitive, pronominal."],
  ['dan', 'Common in everyday Dutch. Position in the sentence', "Than. Comparative particle. 'Groter dan jij' (bigger than you). Cognate with English 'than.'"],
  ['nog', 'Common in everyday Dutch. Position in the sentence', "Still / yet. Cognate with German 'noch.' 'Nog niet' = not yet."],
  ['al', 'Common in everyday Dutch. Position in the sentence', "Already. Cognate with English 'already' stripped down. 'Al klaar?' (already done?)."],
  ['net', 'Common in everyday Dutch. Position in the sentence', "Just (a moment ago). 'Ik kwam net aan' (I just arrived). Different from English 'just' (only)."],
  ['daar', 'Common in everyday Dutch. Position in the sentence', "There (stressed / emphatic). Contrasted with unstressed 'er.' Physical or abstract 'there.'"],
  ['ongeveer', 'Common in everyday Dutch. Position in the sentence', "Approximately. Compound: on (un-) + gever (giver). Numerical hedge."],
  ['eigenlijk', 'Common in everyday Dutch. Position in the sentence', "Actually / to be honest. From 'eigen' (own). Literally 'own-ly.' Revelation marker."],

  // Germanic-shared variant
  ['wij hebben', 'Connected to German through their shared West Germanic', "We have. Cognate with German 'wir haben' — nearly identical. West Germanic sister languages."],
  ['maart', 'Connected to German through their shared West Germanic', "March. Same root as German 'März' and English 'March.' All from Latin 'Martius.'"],
  ['hij wast zich', 'Connected to German through their shared West Germanic', "He washes himself. Mirror of German 'er wäscht sich.' Same reflexive structure."],
  ['gegeten', 'Connected to German through their shared West Germanic', "Eaten. Same ge-participle pattern as German 'gegessen.' West Germanic hallmark."],
  ['gedronken', 'Connected to German through their shared West Germanic', "Drunk. Cognate with German 'getrunken.' Strong-verb ablaut preserved across centuries."],
  ['geschreven', 'Connected to German through their shared West Germanic', "Written. Same as German 'geschrieben' structurally (ij/ie vowel split)."],
  ['gelezen', 'Connected to German through their shared West Germanic', "Read (past). Same as German 'gelesen.' Minor vowel variance."],
  ['gezien', 'Connected to German through their shared West Germanic', "Seen. Same as German 'gesehen' (with medial 'h' lost in Dutch)."],
  ['genomen', 'Connected to German through their shared West Germanic', "Taken. Same as German 'genommen.' Double-consonant variance."],
  ['gesproken', 'Connected to German through their shared West Germanic', "Spoken. Same as German 'gesprochen' (without ch). Strong verb."],

  // be- prefix
  ['betalen', 'The be- prefix makes transitive. Dutch verbs love prefixes', "To pay. Be- + talen (archaic to count). Transitive — takes direct object."],
  ['bespreken', 'The be- prefix makes transitive. Dutch verbs love prefixes', "To discuss. Be- + spreken (to speak). Transitive: 'bespreken we het?' (shall we discuss it?)."],
  ['beloven te', 'The be- prefix makes transitive. Dutch verbs love prefixes', "To promise to. Be- + loven (to praise). The prefix shifts to obligation."],
  ['beweren', 'The be- prefix makes transitive. Dutch verbs love prefixes', "To claim / assert. Be- + waren (to warrant). Academic argumentation."],
  ['besparen', 'The be- prefix makes transitive. Dutch verbs love prefixes', "To save (money/energy). Be- + sparen (to save). Be- here narrows to economical saving."],
  ['beschrijven', 'The be- prefix makes transitive. Dutch verbs love prefixes', "To describe. Be- + schrijven (to write). Literally 'to write-around.'"],
  ['beargumenteren', 'The be- prefix makes transitive. Dutch verbs love prefixes', "To argue / support. Be- + argumenteren. Formal academic."],
  ['bewijzen', 'The be- prefix makes transitive. Dutch verbs love prefixes', "To prove. Be- + wijzen (to point). Literally 'to point-toward.'"],
  ['beter laat dan nooit', 'The be- prefix makes transitive. Dutch verbs love prefixes', "Better late than never. Proverb. Direct mirror of English."],

  // word-order variant
  ['en', 'Word order matters: some conjunctions keep normal order', "And. Coordinating conjunction. Keeps normal word order. Cognate with English 'and.'"],
  ['of', 'Word order matters: some conjunctions keep normal order', "Or. Coordinating. Keeps normal order. Cognate with English 'or.'"],
  ['steeds meer', 'Word order matters: some conjunctions keep normal order', "Increasingly / more and more. 'Steeds' (always) + 'meer' (more). Progressive-comparative."],
  ['met betrekking tot', 'Word order matters: some conjunctions keep normal order', "With regard to / regarding. Formal. 'Betrekking' (relation) from betrekken (to concern)."],
  ['ten eerste', 'Word order matters: some conjunctions keep normal order', "First of all / firstly. Archaic genitive. Essay connector."],
  ['daarnaast', 'Word order matters: some conjunctions keep normal order', "In addition / besides. Compound: daar (there) + naast (next). Essay-level 'moreover.'"],
  ['hoewel', 'Word order matters: some conjunctions keep normal order', "Although. Subordinating — pushes verb to end. Hoe (how) + wel (well)."],

  // pronoun variant
  ['wie', 'Dutch has stressed and unstressed forms for most pronouns', "Who. Native Germanic. Cognate with English 'who' and German 'wer.'"],
  ['wat', 'Dutch has stressed and unstressed forms for most pronouns', "What. Cognate with English 'what' and German 'was.'"],
  ['waar', 'Dutch has stressed and unstressed forms for most pronouns', "Where. Cognate with English 'where' and German 'wo.' Dutch preserves the r."],
  ['haar', 'Dutch has stressed and unstressed forms for most pronouns', "Her. Object pronoun. Stressed. Unstressed: d'r (colloquial)."],
  ['iets', 'Dutch has stressed and unstressed forms for most pronouns', "Something. Indefinite pronoun. Cognate with German 'etwas.'"],

  // Identical Germanic variant
  ['Amsterdam', 'Identical in Dutch and English. The Germanic family', "Amsterdam. Literally 'dam on the Amstel (river).' City-name etymology preserved in English."],
  ['april', 'Identical in Dutch and English. The Germanic family', "April. From Latin 'Aprilis.' All Germanic languages kept the Roman month names."],
  ['september', 'Identical in Dutch and English. The Germanic family', "September. From Latin 'septem' (seven) — originally the 7th month of the Roman calendar."],
  ['november', 'Identical in Dutch and English. The Germanic family', "November. From Latin 'novem' (nine). Originally 9th month before Julian calendar reform."],
  ['december', 'Identical in Dutch and English. The Germanic family', "December. From Latin 'decem' (ten). Originally 10th month. Position-names preserved."],
  ['parttime', 'Identical in Dutch and English. The Germanic family', "Part-time. English loanword used as-is in Dutch. Modern-employment vocabulary."],

  // prepositions
  ['om', 'Dutch prepositions are key building blocks', "At (time). 'Om 3 uur' (at 3 o'clock). Different from English 'at' structurally."],
  ['over', 'Dutch prepositions are key building blocks', "Past (time). 'Tien over drie' (ten past three). Also: about, across."],
  ['op', 'Dutch prepositions are key building blocks', "On (with days). 'Op maandag' (on Monday). Narrower than English 'on.'"],
  ['met', 'Dutch prepositions are key building blocks', "With / by (transport). Instrumental preposition. 'Met de bus' (by bus)."],
  ['tot', 'Dutch prepositions are key building blocks', "Until / to. Endpoint preposition. Pairs with 'van ... tot' (from ... to)."],
  ['door', 'Dutch prepositions are key building blocks', "By (agent in passive). 'Gemaakt door' (made by). Also: through (physical)."],

  // adjective agreement
  ['jarig', 'Dutch adjectives add -e before de-words but stay bare', "Having one's birthday. Adjective form of 'jaar' (year). 'Jarig zijn' (to have a birthday)."],
  ['leuk', 'Dutch adjectives add -e before de-words but stay bare', "Fun / nice / cool. One of Dutch's most-used adjectives. Adjective-gender rule applies."],
  ['druk', 'Dutch adjectives add -e before de-words but stay bare', "Busy. Invariable adverb but takes -e as adjective. 'Een drukke dag' (a busy day)."],
  ['nodig', 'Dutch adjectives add -e before de-words but stay bare', "Necessary / needed. Takes -e before de-words. 'Ik heb het nodig' (I need it)."],
  ['kapot', 'Dutch adjectives add -e before de-words but stay bare', "Broken / out of order. Slang intensifier: 'ik ben kapot' (I'm exhausted). Native Dutch."],
  ['desbetreffend', 'Dutch adjectives add -e before de-words but stay bare', "In question / relevant. Formal. Compound: des (of the) + betreffend (concerning)."],
];

let total = 0;
const LANG_ROOT = 'src/data/dutch-v2';
for (const file of fs.readdirSync(LANG_ROOT)) {
  if (!file.endsWith('.js')) continue;
  const path = `${LANG_ROOT}/${file}`;
  let text = fs.readFileSync(path, 'utf8');
  let count = 0;
  for (const [trg, genericPrefix, newFact] of FACTS) {
    const escTrg = trg.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const escPrefix = genericPrefix.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const re = new RegExp(`(\\{type:"teach",trg:"${escTrg}"[\\s\\S]*?funFact:")${escPrefix}(?:[^"\\\\]|\\\\.)*"`, 'g');
    if (!re.test(text)) continue;
    re.lastIndex = 0;
    text = text.replace(re, (_, pre) => { count++; return pre + newFact + '"'; });
  }
  if (count > 0) {
    console.log(`${path}: ${count}`);
    total += count;
    if (apply) fs.writeFileSync(path, text);
  }
}
console.log(`\nTotal: ${total}`);
if (!apply) console.log('Dry run.');
