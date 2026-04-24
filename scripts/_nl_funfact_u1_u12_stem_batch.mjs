#!/usr/bin/env node
// Dutch u1-u12 'stem + ending' variant — 88 cards.

import fs from 'node:fs';

const apply = process.argv.includes('--apply');
const GENERIC = 'Dutch verbs follow the stem + ending pattern. Find the stem, add the right ending.';

const FACTS = {
  // u1
  'jullie zijn': "'You (plural) are.' 'Jullie' (you plural) + 'zijn' (to be). Dutch retains a plural 'you' that English lost. Covers all informal plural address.",
  'misschien': "Maybe / perhaps. Compound: 'mis' (maybe/wrong) + 'schien' (can). Literally 'can-be.' German cognate: 'vielleicht' from a similar 'perhaps-it-may' construction.",
  'hoe heet je?': "'What's your name?' Literally 'how are you called?' Dutch asks the 'how' of naming; English asks the 'what.' Both approaches common across Germanic languages.",
  'ik kom uit...': "'I come from...' 'Uit' = out-of/from. Origin formula. Contrast German 'aus' — Dutch 'uit' is cognate with English 'out' more transparently.",
  'ik spreek een beetje Nederlands': "'I speak a little Dutch.' 'Een beetje' (a little bit). 'Beetje' is the diminutive of 'beet' (bit). Dutch diminutives with -je are everywhere.",
  'ik ben niet...': "'I am not...' 'Niet' = not (for definite negation). 'Ik ben niet moe' (I'm not tired). Opposite of 'geen' (no, for indefinites).",
  'ik heb geen...': "'I don't have any...' 'Geen' negates indefinite nouns. 'Ik heb geen auto' (I don't have a car). This geen/niet distinction is a classic Dutch learning hurdle.",

  // u2
  'komen': "To come. Dutch stem 'kom-' (strong verb). Cognate with English 'come,' German 'kommen.' Conjugates: ik kom, jij komt, hij komt, wij komen.",
  'spreken': "To speak. Native Germanic. Cognate with English 'speak,' German 'sprechen.' Stem 'spreek-' (e → ee in ik/jij/hij forms).",
  'wonen': "To live / dwell. Native Germanic. Cognate with archaic English 'wone' (to dwell). Means 'to reside' — not 'live' in the biological sense (which is 'leven').",
  'Zijn vs Hebben': "Be vs have. Dutch uses BOTH as auxiliary verbs for perfect tense — 'hebben' for most verbs, 'zijn' for motion/change verbs. Similar to German and French.",
  'ik ben ... jaar': "'I am ... years old.' Literally 'I am ... year.' 'Jaar' stays singular in this formula even for multiple years. Idiomatic.",

  // u3
  'dertien': "Thirteen. Irregular: 'der-' not 'drie-.' Reflects older Germanic form. 13-19 all end in -tien (teen).",
  'veertien': "Fourteen. 'Veer-' not 'vier-' (four). Classical Germanic vowel shift. 14-19 mostly similar patterns.",
  'vijftien': "Fifteen. 'Vijf' (five) + 'tien' (ten). Regular compound. The f sound remains unvoiced — Dutch preserves older phonetics.",
  'voor': "For / in front of / before. Multi-use preposition. Cognate with English 'for' and 'fore.' One word covers time-before, space-before, and benefit.",
  'soms': "Sometimes. Native Germanic. Note: -s genitive fossilized into an adverb. Similar to English 's' in 'nights' (archaic, meaning 'by night').",

  // u4
  'roken': "To smoke. Stem: 'rook-.' Cognate with English 'reek' (same root, different meaning now) and 'smoke.' Conjugates regularly.",
  'hoeven': "Have to / need to. Used in negative ('hoeft niet' = don't need to). Cognate with English 'behoove' (archaic). Semantic fossil.",
  'je hoeft niet': "'You don't have to.' Fixed phrase with 'hoeven.' Note 'hoeven' in Dutch is almost exclusively used in negative contexts — affirmative uses 'moeten.'",
  'broden': "Breads (plural). Regular -en plural of 'brood.' Dutch bread culture: wit brood, bruin brood, volkoren, roggebrood. Bread vocabulary is rich.",
  'boterhammen': "Sandwiches. Compound: 'boter' (butter) + 'ham' (slice/portion) + 'en' (plural). Literally 'butter-hams.' Classic Dutch lunch.",
  'de winkel': "The shop. Native Dutch. Also means 'corner' in older usage. Shops in Dutch cities are often called 'winkel' specifically if small/neighborhood.",

  // u5 — reflexives + household
  'ik was me': "'I wash myself.' 'Me' is reflexive. Dutch reflexives: me, je, zich, ons. Used with many grooming verbs: douchen, wassen, aankleden.",
  'zich scheren': "To shave (oneself). Native reflexive. 'Zich' is the 3rd-person reflexive, invariable. In infinitive forms, 'zich' is the default reflexive marker.",
  'zich douchen': "To shower (oneself). Again reflexive with 'zich' in dictionary form. Showering is reflexive by convention — you do it TO yourself.",
  'wakker worden': "To wake up. 'Wakker' (awake) + 'worden' (become). Dutch expresses state-changes via 'worden' (to become). Transparent compound.",
  'schoonmaken': "To clean. Compound: 'schoon' (clean) + 'maken' (make). Literally 'make clean.' Separable verb — splits in main clauses: 'Ik maak het huis schoon.'",
  'stofzuigen': "To vacuum. Compound: 'stof' (dust) + 'zuigen' (to suck). Literally 'dust-suck.' One of Dutch's clearest transparent compounds.",
  'dichtdoen': "To close. Separable: 'dicht' (closed/shut) + 'doen' (to do). 'Ik doe de deur dicht.' Also: 'open doen' (to open).",
  'binnenkomen': "To come in. Separable: 'binnen' (inside) + 'komen' (to come). Same structure as English 'come in' but written as one word in dictionary form.",
  'zitten': "To sit. Native Germanic. Cognate with English 'sit.' Conjugates: zit, zit, zit, zitten. Also used for 'to be in a situation' metaphorically.",
  'opgewonden': "Excited. Past participle of 'opwinden' (to wind up), used as adjective. Compound: 'op' (up) + 'winden' (to wind). Literally 'wound up.'",

  // u6 — transport
  'de fiets': "The bike. Native Dutch (etymology disputed). The Netherlands has more bikes than people. Bike culture is central — every Dutch adult's word.",
  'fietsen': "To bike / bike (plural). Verb form AND plural of fiets. Context disambiguates. 'Ik fiets' (I bike).",
  'naar': "To (direction). Preposition for destination. 'Ik ga naar huis' (I go home). Cognate with German 'nach.'",
  'instappen': "To board / get on. Separable: 'in' + 'stappen' (to step). Transit vocabulary: instappen (board), uitstappen (alight), overstappen (transfer).",
  'uitstappen': "To get off / alight. 'Uit' (out) + 'stappen' (step). Mirror of 'instappen.' Public-transit essential.",
  'overstappen': "To transfer (between vehicles). 'Over' (over/across) + 'stappen' (step). Metaphor: step across to another line.",
  'aankomen': "To arrive. 'Aan' (on/at) + 'komen' (come). Literally 'come on/at.' Mirror of 'vertrekken' (to depart).",
  'even': "Briefly / just. Softener particle. 'Kijk even' (just look briefly). Untranslatable softener — Dutch sprinkles it everywhere for politeness.",
  'halen': "To get / fetch. Native Germanic. Cognate with archaic English 'hale' (to pull). 'Ik haal je op' (I'll pick you up).",
  'zoeken': "To search / look for. Cognate with English 'seek.' One of the most ancient verbs — stable across all Germanic languages.",
  'misschien': "Maybe / perhaps (u6 context). Reinforces u1. Appears in travel-planning scenarios.",

  // u7
  'eergisteren': "The day before yesterday. Compound: 'eer' (before) + 'gisteren' (yesterday). Parallel: overmorgen (day after tomorrow). Transparent Dutch time compounds.",

  // u8 — imperatives
  'kom!': "Come! Imperative. Dutch imperatives use the stem form (drop -en). 'Kom' from 'komen.' No politeness marker needed for informal.",
  'ga!': "Go! Imperative of 'gaan.' Irregular — short form. Parallel to English 'go!' Same intensity.",
  'wacht!': "Wait! Imperative of 'wachten.' Regular stem: wacht-. 'Even wachten' (wait a moment) softer.",
  'kijk!': "Look! Imperative of 'kijken.' Stem: kijk-. 'Kijk eens' (have a look) softer.",
  'neem': "Take. Imperative of 'nemen.' Regular stem: neem- (e → ee). Used in service contexts: 'neem er een' (take one).",
  'de hoest': "The cough. De-word (common gender). From 'hoesten' (to cough). Noun derived from verb — transparent pattern.",

  // u9 — conjunctions
  'koken': "To cook. Loanword from Latin 'coquere' via Germanic. Cognate with English 'cook.' Regular conjugation.",
  'wandelen': "To walk (leisurely). Native Germanic. Cognate with English 'wander' (broader) and German 'wandern.' Specifically leisurely walking.",
  'zal ik': "Shall I. 'Zal' (will, future auxiliary) + 'ik.' Used for offers: 'Zal ik helpen?' (Shall I help?). Softer than 'ik ga helpen' (I will help).",
  'omdat': "Because (subordinating). Introduces a reason clause. Word order flips — verb goes to end: 'Ik ga niet omdat ik moe ben' (I'm not going because I'm tired).",
  'dat': "That (subordinating conjunction). Like English 'that' introducing subordinate clauses. Forces verb to clause-end in Dutch.",
  'als': "If / when / as. Multi-purpose conditional and temporal. 'Als ik tijd heb' (if/when I have time). Context decides exact meaning.",
  'wanneer': "When (question). Also used as subordinator in some contexts. More formal than 'als' for temporal meaning.",
  'om... te...': "In order to... Split structure: 'om' (around/to) + infinitive + 'te' (to). 'Om te lezen' (in order to read). Purpose marker.",
  'vieren': "To celebrate. Native Germanic. Cognate with German 'feiern.' 'Vier je verjaardag' (celebrate your birthday).",
  'overstappen': "To transfer (u9 context). Reinforces u6.",

  // u10 — modal past
  'kon / konden': "Could (modal past). 'Kon' singular, 'konden' plural. From 'kunnen' (can). Irregular past. Dutch modal verbs have irregular past forms (like English).",
  'moest / moesten': "Had to (modal past). From 'moeten' (must). Same pattern: singular/plural distinction. Dutch modals preserve old strong-verb paradigms.",
  'mocht / mochten': "Was allowed to (modal past). From 'mogen' (may). Note: 'mocht' also means 'liked' in some contexts — homograph with 'mocht' from 'mogen.'",
  'scheen': "Seemed / shone. Past of 'schijnen.' Irregular (strong verb). Dual meaning — 'seemed' (appeared) and 'shone' (of light). Context disambiguates.",
  'vroeg': "Asked (past). Past of 'vragen' (to ask). Irregular. Also homograph with 'vroeg' (early) — same spelling, different word.",
  'de oplader': "The charger. Compound: 'op' (up) + 'laden' (to load) + '-er' (agent). Literally 'up-loader.' Modern word for device charger.",
  'zoeken': "To search (u10 context). Reinforces u6.",

  // u11 — narrative past
  'het overleg': "The meeting / consultation. From 'overleggen' (to consult). Het-word. Central in Dutch workplace vocabulary — business culture emphasizes 'overleg.'",
  'daarom': "Therefore / that's why. Pronoun-adverb: 'daar' (there) + 'om' (about). 'Daarom ben ik hier' (that's why I'm here). Conclusion marker.",
  'was gegaan': "Had gone (pluperfect). 'Was' (past of zijn) + 'gegaan' (past participle). Full pluperfect structure. Shows deeper past.",
  'toen': "Then / when (past). Used in past narratives. 'Toen ik jong was' (when I was young). Only for past — never present or future.",
  'voordat': "Before (conjunction). Subordinating. 'Voordat ik ga' (before I go). Triggers verb-final word order. 'Voor' + 'dat' fused.",
  'nadat': "After (conjunction). Mirror of 'voordat.' 'Nadat ik ging' (after I went). Also triggers verb-final word order.",
  'zodra': "As soon as. Compound: 'zo' (so) + 'dra' (soon, archaic). 'Zodra je klaar bent' (as soon as you're ready).",
  'totdat': "Until. Compound: 'tot' (to/until) + 'dat' (that). Subordinating conjunction. 'Totdat ik slaap' (until I sleep).",
  'solliciteren': "To apply (for a job). From French 'solliciter.' Borrowed in 17th-18th century from French commercial vocabulary. Classic loanword.",
  'het voorstel': "The proposal / suggestion. Compound: 'voor' (before) + 'stel' (placement, from stellen). Literally 'what's placed forward.'",
  'het besluit': "The decision. From 'besluiten' (to decide). Het-word. Compound: 'be-' (intensifier) + 'sluiten' (to close). A decision 'closes' the matter.",
  'ik denk dat': "'I think that.' Formula for opinion. Triggers verb-to-end: 'Ik denk dat het goed is.' Classic Dutch subordinate structure.",
  'volgens mij': "In my opinion. Literally 'according to me.' 'Volgens' = according to. Everyday opinion marker.",

  // u12 — money/admin
  'pinnen': "To pay by debit card. From 'pin' (PIN code). Modern Dutch verb — uniquely Dutch, you don't 'pin' in German or English. Signals advanced card-payment culture.",
  'overmaken': "To transfer (money). Separable: 'over' (over) + 'maken' (to make). Banking term. 'Ik maak geld over' (I transfer money).",
  'zou je... willen': "'Would you... want.' Polite request. Conditional 'zou' + 'willen.' Very polite: 'Zou je dit willen doen?' (Would you want to do this?).",
  'ik zou willen dat': "'I would like/wish that.' Dutch conditional for wishes. 'Ik zou willen dat het beter was' (I wish it were better). Triggers verb-final in the dat-clause.",
  'ruilen': "To exchange / trade. Native Germanic. Everyday retail word: 'Kan ik dit ruilen?' (Can I exchange this?).",
  'terugbrengen': "To bring back / return. Separable: 'terug' (back) + 'brengen' (to bring). Retail context: returning merchandise.",
  'inschrijven': "To register / enroll. Separable: 'in' (in) + 'schrijven' (to write). Literally 'write in.' Bureaucratic-admin vocabulary.",
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
