#!/usr/bin/env node
// 34 Dutch cards u1-u3 using 'closest language pair' filler.

import fs from 'node:fs';

const apply = process.argv.includes('--apply');
const GENERIC = 'Dutch and English are the closest major language pair in the world. Many words share common roots.';

const FACTS = {
  // u1 — greetings + core words
  'doei': "Bye (casual). From Dutch 'dag' originally. Exclusively Dutch — no German or English equivalent. Instantly marks you as a Dutch speaker.",
  'tot later': "See you later. Literally 'till later.' Same construction as German 'bis später.' Dutch also uses tot ziens (formal), tot straks (in a bit).",
  'hoe': "How. Direct cognate with English 'how,' same Germanic root. Dutch question words start with w: wie (who), wat (what), waar (where), wanneer (when), waarom (why). Only hoe breaks the pattern.",
  'wanneer': "When. Native Dutch question word, older form survives from Middle Dutch 'wanneer.' Compare German 'wann' — Dutch preserved the longer form.",
  'waarom': "Why. Compound: waar (where) + om (about/around). Literally 'around where.' Dutch builds 'why' as 'about where' — unique angle on causation.",
  'ja': "Yes. Germanic root shared with English 'yea' (archaic), German 'ja.' Common across all West Germanic languages.",
  'nee': "No. Germanic root. Short form of older 'neen.' English 'no' and German 'nein' share the same origin.",
  'dank je': "Thank you (informal). 'Dank' (thanks) + 'je' (informal you). Dutch has the same tu/vous split as French but through je/u instead.",
  'dank u': "Thank you (formal). 'Dank' + 'u' (formal you). Use with strangers, superiors, older people. Modern Dutch is informalizing: je is increasingly used with strangers.",
  'vijf': "Five. Germanic cognate with English 'five,' German 'fünf.' Dutch preserved the f-sound (via 'vijf'); German shifted it.",
  'aangenaam': "Nice to meet you. Literally 'pleasant.' Short for 'aangenaam kennis te maken' (pleasant to make acquaintance). Formal greeting, shortened for efficiency.",
  'waar kom je vandaan?': "Where are you from? Literally 'where come you from-there?' The 'vandaan' is a classic Dutch compound: van + daan. Inseparable to the phrase.",
  'dat is geen probleem': "That's no problem. Note 'geen' (no, used with indefinite nouns) vs 'niet' (not, used with definites). Dutch has this split; English does not.",

  // u2 — countries + demonstratives + existence
  'Frankrijk': "France. Germanic compound: Frank (Franks) + rijk (kingdom/realm). Literally 'kingdom of the Franks.' Compare German Frankreich, identical compound structure.",
  'Nederlands': "Dutch (language). From 'neder' (low) + 'land' (land) + '-s' (language marker). Same root as 'Netherlands.' Dutch and Low German are historically one continuum.",
  'Frans': "French. Noun referring to the language. Just 'Frans' without article. Dutch language names follow: Frans, Duits, Engels, Spaans, Italiaans.",
  'Duits': "German. From 'duiden' (people) — same Germanic root as German's own 'Deutsch.' Both words mean 'of the people.' Ancient tribal-identity term.",
  'Vijf sleutelvragen': "Five key questions. 'Sleutel' (key) + 'vragen' (questions). Dutch loves compound nouns — read left to right: key-questions.",
  'er is': "There is. The 'er' is Dutch's expletive subject, similar to English 'there.' Always 'er' — never omitted. Required in existence constructions.",
  'er zijn': "There are. Plural of 'er is.' Dutch, like English, uses the same 'there' for both singular and plural existence — only the verb changes.",
  'er zijn geen': "There are no. Negation of 'er zijn' uses 'geen' because the negated noun is indefinite. 'Er zijn geen appels' — there are no apples.",
  'dit': "This (het-words, nearby). Four-way split: dit/dat (het-words), deze/die (de-words/plurals). English has just 'this/that' — Dutch tracks gender AND distance.",
  'dat': "That (het-words, far away). Same split as 'dit.' Both are neuter-referring. For de-words, use 'die' not 'dat.' Agreement with noun-gender.",
  'deze': "This / these (de-words, plurals, nearby). Used with common-gender nouns and all plurals. Covers more ground than English 'this' because it handles plurals too.",
  'die': "That / those (de-words, plurals, far away). Also used as relative pronoun (who/which) for de-words. Dual role: demonstrative and relative.",

  // u3 — numbers + time + months
  'veertig': "Forty. Note 'veer-' (from vier = four) + tig (tens-suffix). Irregular vowel change. Pattern: 40-90 use -tig endings: veertig, vijftig, zestig, zeventig, tachtig, negentig.",
  'negentig': "Ninety. 'Negen' (nine) + 'tig.' Last of the -tig numbers. 100 breaks the pattern: 'honderd' (native Germanic).",
  'hoe laat': "What time (literally 'how late'). Dutch asks 'how late is it?' where English asks 'what time.' Same structure as German 'wie spät.'",
  '\'s ochtends': "In the morning. The 's is remnant of older genitive 'des' — 'of the morning.' Classic Dutch time expression. Parallel: 's avonds (of the evening), 's middags (of the afternoon).",
  '\'s middags': "In the afternoon. Same genitive 's construction. 'Middag' is native Dutch for midday/afternoon. Covers 12 PM to ~6 PM.",
  '\'s avonds': "In the evening. Same construction. Evening (avond) is the period from sunset to bedtime in Dutch cultural framing.",
  'half': "Half (past). Used in Dutch time-telling DIFFERENTLY than English: half tien means '9:30' (half TO ten), not '10:30.' Major source of tourist confusion.",
  'mei': "May. From Latin 'Maius' via Old French. All Dutch months come from Latin. Short month names: mei, juni, juli — simpler than English forms.",
  'vroeg': "Early. Germanic root shared with English 'early' (via different vowel paths). Antonym: laat (late). 'Te vroeg' = too early.",
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
