#!/usr/bin/env node
// Dutch u4-u8 closest-pair variant (61 cards).

import fs from 'node:fs';

const apply = process.argv.includes('--apply');
const GENERIC = 'Dutch and English are the closest major language pair in the world. Many words share common roots.';

const FACTS = {
  // u4 — shopping/possessives
  'op tijd': "On time. 'Op' (on) + 'tijd' (time). Same structure as English. Dutch temporal prepositions map closely to English — shared Germanic logic of time as surface.",
  'jouw': "Your (informal). Possessive for 'jij' (you informal). Written with -w; pronounced like English 'your.' Parallel to zijn (his), haar (her).",
  'zijn': "His / its. Same spelling as 'zijn' (to be) — homograph, different function. Context disambiguates. Dutch has many such homographs.",
  'uw': "Your (formal). Short, efficient form — goes with 'u' (formal you). Mostly written, less spoken in modern casual Dutch.",
  'appels': "Apples. Plural of 'appel.' Regular -s plural. Dutch plural rules: -en (most nouns), -s (words ending in vowels or certain consonants). 'Appel' takes -s.",
  'goedkoop': "Cheap / inexpensive. Compound: 'goed' (good) + 'koop' (purchase). Literally 'good-buy.' Transparent compound — Dutch speakers see the parts.",

  // u5 — possessives + colors + emotions
  'ons': "Our (with het-words). 'Ons boek' (our book). Gender-matched possessive, like Dutch articles themselves.",
  'onze': "Our (with de-words / plurals). 'Onze tafel' (our table). Dutch distinguishes the 'our' form by noun gender — one of the rare cases where possessives agree.",
  'jullie': "Your (plural). One of Dutch's few distinctively plural pronouns. English lost the 'ye/you-all' distinction; Dutch kept 'jullie.'",
  'mooi': "Beautiful / nice. Native Dutch adjective. Cognate with German 'mühe' originally — semantic drift. Now the go-to compliment: mooi!, zo mooi!",
  'elke': "Every / each. Invariable before nouns. 'Elke dag' (every day). Sister word: 'ieder' (every, more formal). Interchangeable in most contexts.",
  'gefeliciteerd': "Congratulations / happy birthday. Past participle of 'feliciteren' (from Latin 'felicitas'). Dutch loans Romance vocabulary extensively for formal expressions.",
  'op bezoek': "Visiting / on a visit. Literally 'on visit.' Fixed expression — 'bezoek' is the native Dutch word for a visit (not English 'visit,' which Dutch does also use).",
  'lekker': "Tasty / nice / delicious. Quintessentially Dutch — used FAR more broadly than English 'tasty.' A warm shower, nice weather, good sleep are all 'lekker.'",
  'gezellig': "Cosy / sociable / pleasant (untranslatable). Cultural-core Dutch word. Describes togetherness, warm atmosphere, social conviviality. No English equivalent.",
  'rood': "Red. Native Germanic, cognate with English 'red' (both from Proto-Germanic 'raudaz'). One of the most stable color words across Germanic languages.",
  'blauw': "Blue. Cognate with English 'blue,' German 'blau.' The 'au' diphthong is preserved across North Sea Germanic.",
  'geel': "Yellow. Cognate with English 'yellow' (both from Proto-Germanic 'gelwaz'). The -l vs -low reflects later sound shifts.",
  'wit': "White. Cognate with English 'white,' German 'weiß.' 'Wit' preserves older form — 'white' added a silent letter through spelling conservatism.",
  'zwart': "Black. Cognate with German 'schwarz.' Different word from English 'black' (which came via Old English from a word meaning 'burnt').",
  'bruin': "Brown. Cognate with English 'brown,' German 'braun.' Widely shared color term across all Germanic languages.",
  'roze': "Pink. Loan from French 'rose.' Dutch borrowed the word, not the native Germanic options. Flower-origin color naming crosses languages.",
  'paars': "Purple. Native Dutch, not from Latin. Unique color word within the Germanic family — makes Dutch instantly identifiable.",
  'grijs': "Grey. Cognate with English 'grey/gray,' German 'grau.' Spelling and vowel variation reflects ancient Germanic dialect split.",
  'zenuwachtig': "Nervous. Compound: 'zenuw' (nerve) + 'achtig' (-ish). Literally 'nerve-ish.' The -achtig suffix is highly productive in Dutch.",
  'trots': "Proud. Native Dutch. Cognate with English 'trot' via a different semantic path. Emotion-describing adjective.",
  'verrast': "Surprised. Past participle of 'verrassen.' The ver- prefix is cognate with English 'for-' but more productive in Dutch.",
  'bezorgd': "Worried. Past participle of 'bezorgen' (to deliver/cause). State-of-mind expressed as a result — a common Dutch adjective-through-participle pattern.",
  'eenzaam': "Lonely. Compound: 'een' (one) + 'zaam' (together-ness). Literally 'one-some.' Dutch compound creates the feeling of solo-ness.",

  // u6 — directions/travel
  'rechtdoor': "Straight ahead. Compound: 'recht' (straight) + 'door' (through). Literally 'straight through.' Dutch prefers transparent compounds for spatial expressions.",
  'dichtbij': "Nearby / close. Compound: 'dicht' (close) + 'bij' (by). 'Dicht' here means 'close together.' Common in street directions.",
  'terug': "Back. Native Germanic, cognate with English 'to-rug' (archaic). Essential in 'terug gaan' (go back), 'terug komen' (come back).",
  'verdwaald': "Lost. Past participle of 'verdwalen' (to get lost). The 'ver-' prefix here means 'astray' — same root as 'afdwalen' (wander off).",
  'veel plezier': "Have fun / enjoy. 'Veel' (much) + 'plezier' (pleasure). Plezier is borrowed from French 'plaisir.' Said when parting before activities.",
  'noord': "North. Cognate with English 'north.' Directional vocab is identical across Germanic. Note: written 'noord' with double o (long vowel marker).",
  'zuid': "South. Cognate with English 'south' — both from Proto-Germanic 'sunthra.' Dutch spelling reflects the original unvoiced consonant.",
  'oost': "East. Cognate with English 'east' (Proto-Germanic 'austra-'). Interestingly linked to 'easter' (the festival) via the direction of sunrise.",
  'west': "West. Identical to English. One of the most stable words across Germanic languages. Same spelling in Dutch, English, German.",

  // u7 — past tense setup
  'gegaan': "Gone. Past participle of 'gaan' (to go). Irregular. Doubled g (ge- + gaan). Perfect: 'ik ben gegaan' (I have gone) — uses zijn, not hebben.",
  'geweest': "Been. Past participle of 'zijn' (to be). Irregular. 'Ik ben geweest' (I have been). Different participle from 'gegaan.'",
  'gedaan': "Done / did. Past participle of 'doen' (to do). Irregular. 'Ik heb gedaan' (I have done). Uses hebben, unlike motion verbs.",
  'vorige week': "Last week. 'Vorige' (last/previous) + 'week.' Time-anchor for past-tense narration. Contrast 'deze week' (this week).",
  'deze week': "This week. 'Deze' (this, de-word) + 'week' (a de-word). Gender-matched demonstrative. Basic time-anchoring vocabulary.",
  'rustig': "Quiet / calm / peaceful. Native Dutch. Cognate with English 'rusty' only through accident — rustig derives from 'rust' (rest). Describes environment or temperament.",
  'gewandeld': "Walked / went for a walk. Past participle of 'wandelen' (to stroll). Regular -d ending. 'Wandelen' has implications of leisurely walking.",
  'eerst': "First. Cognate with English 'first' (Proto-Germanic 'furistaz'). Superlative of 'vroeg' (early) in a sense.",
  'en toen': "And then. Conjunction 'en' (and) + 'toen' (then, past). Used specifically in past narratives. For future: 'en dan' (and then).",
  '\'s morgens': "In the morning. Same genitive construction as 's ochtends — 's (of the) + morgen (morning) + s (genitive ending). Slightly more poetic register.",

  // u8 — comparisons
  'lekker': "Nice / well / tasty (u8 context). Reinforces u5 learning. Here broader: 'lekker geslapen' (slept well), 'lekker eten' (tasty food).",
  'blij': "Happy / glad. Native Dutch. Short, positive adjective. 'Blij zijn' (to be happy). Opposite: verdrietig (sad).",
  'boos': "Angry / mad. Native Dutch. Compare English 'boisterous' (same root). 'Boos zijn op' (to be angry at someone).",
  'bang': "Afraid / scared. Native Germanic. Cognate with archaic English 'bang' (blow/hit) — the startle root.",
  'groter': "Bigger / taller. Comparative of 'groot' (big). -er is Dutch's comparative suffix, same as English.",
  'kleiner': "Smaller. Comparative of 'klein' (small). Regular -er ending. 'Ik ben kleiner dan jij' (I'm smaller than you).",
  'mooier': "More beautiful / prettier. Comparative of 'mooi.' Dutch adds -r to adjectives ending in unstressed syllables.",
  'duurder': "More expensive. Comparative of 'duur' (expensive). Note: 'duur' is the adjective; 'duurder' adds -der because of the preceding long vowel.",
  'meer': "More. Irregular — not built from 'veel' (much). Cognate with English 'more' (Proto-Germanic 'maizon'). Foundational comparison word.",
  'minder': "Less / fewer. Paired with 'meer.' Dutch does NOT split into 'less/fewer' like English does — one word covers both counted and uncounted.",
  'beterschap': "Get well soon. 'Beter' (better) + '-schap' (abstract noun suffix = -ship). Literally 'better-ship.' Formal well-wishing.",
  'sterkte': "Be strong / good luck (with difficulty). 'Sterk' (strong) + '-te' (abstract noun = -ness). Used when facing hardship, not for casual good luck.",
  'helaas': "Unfortunately. Composed of 'he' (alas) + 'laas' (sad, archaic). Native Germanic archaism preserved.",
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
