#!/usr/bin/env node
// Dutch compounds u3-u12 (~48 cards).

import fs from 'node:fs';

const apply = process.argv.includes('--apply');
const GENERIC = 'Dutch compounds are transparent once you learn the parts.';

const FACTS = {
  'er is geen': "'There isn't any.' 'Er' (there, expletive) + 'is' (is) + 'geen' (none). Dutch combines existence + negation + indefiniteness in one fixed pattern.",
  'eenentwintig': "Twenty-one. Compound: 'een' (one) + 'en' (and) + 'twintig' (twenty). Dutch inverts: 'one-and-twenty.' Same as German. Non-intuitive for English speakers.",
  'zij leert': "She learns. 'Zij' (she) + 'leert' (3rd-person singular of leren). Dutch verb ending -t for 3rd-person singular, regular pattern.",
  'vandaag': "Today. Compound: 'van' (of/from) + 'daag' (day). Literally 'of-day.' Opposed to 'gisteren' (yesterday) and 'morgen' (tomorrow).",
  'hij doet': "He does. 'Hij' + 'doet' (3rd-person of doen). Irregular: doen → doet. Base verb for many Dutch constructions.",
  'meestal': "Usually / mostly. Compound: 'meest' (most) + 'al' (already/all). Literally 'most-already.' Common frequency adverb.",
  'plannen maken': "Make plans. Idiomatic: 'plannen' (plans) + 'maken' (make). Same structure as English 'make plans.' Verbal phrase.",
  'hij drinkt': "He drinks. 3rd-person conjugation of 'drinken.' Stem: drink- → drinkt (adds -t). Cognate with English 'drink.'",
  'jij wilt': "You want. Irregular modal verb 'willen.' Jij form: 'wilt.' Unlike regular verbs where jij takes -t, modals have their own paradigms.",
  'het broodje': "Bread roll / sandwich. Het-word (diminutive of 'brood'). Everyday Dutch lunch item. The diminutive marks it as a single-serving roll, not a loaf.",
  'het biertje': "Little beer (a beer, affectionate). Het-word (diminutive). Cultural warmth: ordering one beer often as 'een biertje' rather than 'een bier' — more cozy.",
  'het taartje': "Little cake / pastry. Het-word (diminutive of 'taart'). Dutch bakeries sell individual 'taartjes' alongside big 'taarten.'",
  'hoeveel': "How many / how much. Compound: 'hoe' (how) + 'veel' (much/many). Literally 'how much.' One word, both counted and uncounted.",
  'opruimen': "To tidy up. Separable: 'op' (up) + 'ruimen' (to clear). Literally 'clear up.' 'Ruim je kamer op' (tidy your room).",
  'openmaken': "To open. Separable: 'open' + 'maken.' Literally 'make open.' Parallel to 'dichtmaken' (close). Transparent compound.",
  'gekookt': "Cooked (past participle). Regular -t ending from 'koken' (to cook). Cognate structure with English 'cooked.'",
  'gestopt': "Stopped. Regular -t participle from 'stoppen.' Consonant cluster 'pt' follows standard Dutch past-participle pattern.",
  'gewoond': "Lived / dwelled. Regular -d participle from 'wonen.' Unlike English 'lived,' Dutch retains the -n in the stem.",
  'gespeeld': "Played. Regular -d participle from 'spelen.' Cognate with English 'played' (both from same Germanic root).",
  'betaald': "Paid. Regular -d participle from 'betalen.' 'Be-' prefix is productive in Dutch for making verbs (betalen, bepalen, beginnen).",
  'gebruikt': "Used. Regular -t participle from 'gebruiken.' Note prefix 'ge-' added even though 'gebruiken' itself starts with 'ge-' — both ge-'s appear.",
  'overmorgen': "Day after tomorrow. Compound: 'over' (over/across) + 'morgen' (tomorrow). Literally 'across-tomorrow.' Parallel to 'eergisteren.'",
  'vanochtend': "This morning. Compound: 'van' (of) + 'ochtend' (morning). Pattern: 'van' + time-of-day = today's version. Parallel: vanavond, vannacht.",
  'vanavond': "This evening. Same 'van' + time pattern. Compound transparently 'of-evening.'",
  'gezellig': "Cosy / sociable (u7 context). Reinforces u5. Here appears in dialog/narrative context.",
  'daarna': "After that / then. Compound: 'daar' (there) + 'na' (after). Literally 'there-after.' Sequential-narrative connector.",
  'de huisarts': "Family doctor / GP. Compound: 'huis' (house) + 'arts' (doctor). Literally 'house-doctor.' Dutch healthcare: the huisarts is the entry point.",
  'de afspraak': "Appointment. Compound: 'af' (off/away) + 'spraak' (speech). Literally 'agreed-upon-speech.' A 'spoken agreement' become an appointment.",
  'ik ga zwemmen': "'I'm going to swim.' 'Ga' (from gaan, to go) + infinitive. Future/intent construction. Same pattern as English 'going to.'",
  'binnenkort': "Soon / shortly. Compound: 'binnen' (within) + 'kort' (short). Literally 'within short-time.' Future-near time adverb.",
  'de vrijmarkt': "Flea market. Compound: 'vrij' (free) + 'markt' (market). Literally 'free-market.' Especially famous on King's Day (Koningsdag) when anyone can sell.",
  'werkte': "Worked (simple past). From 'werken' + -te ending. Regular verbs take -te (after voiceless consonants) or -de (after voiced).",
  'werkten': "Worked (plural past). Plural of 'werkte' adds -n. Dutch simple past has consistent singular/plural distinction.",
  'fietste': "Biked (past). From 'fietsen.' Past tense of the iconic Dutch verb.",
  'woonde': "Lived (past). From 'wonen.' -de ending after the voiced 'n' sound. Phonological rule.",
  'woonden': "Lived (plural past). Plural of 'woonde.' Regular -n extension.",
  'leerde': "Learned (past). From 'leren.' Same -de pattern after voiced consonant.",
  'speelde': "Played (past). From 'spelen.' Regular weak verb. Past-tense cognate with English 'played.'",
  'kookte': "Cooked (past). From 'koken.' -te after voiceless 'k' sound. Phonological rule for weak-verb past.",
  'daarna': "After that (u10 context). Reinforces u7 learning. Sequential connector.",
  'de werkgever': "Employer. Compound: 'werk' (work) + 'gever' (giver). Literally 'work-giver.' Transparent construction. Opposite: 'werknemer' (work-taker = employee).",
  'de rekening': "Bill / invoice / account. From 'rekenen' (to calculate) + '-ing' (abstract suffix). Literally 'calculation.' Both a financial bill and a bank account.",
  'de handtekening': "Signature. Compound: 'hand' (hand) + 'tekening' (drawing, from tekenen). Literally 'hand-drawing.' Poetic way to name a signature.",
  'het rijbewijs': "Driver's license. Compound: 'rij' (drive, from rijden) + 'bewijs' (proof). Literally 'drive-proof.' Transparent Dutch bureaucratic noun.",
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
