#!/usr/bin/env node
// Dutch u15-u23 closest-pair variant (54 cards).

import fs from 'node:fs';

const apply = process.argv.includes('--apply');
const GENERIC = 'Dutch and English are the closest major language pair in the world. Many words share common roots.';

const FACTS = {
  'laten we': "Let's. Imperative of 'laten' + 'we.' 'Laten we gaan' (let's go). Mirror of English 'let's.' Hortative construction.",
  'levenslang leren': "Lifelong learning. Compound: 'leven' (life) + 's' (genitive) + 'lang' (long) + 'leren' (learn). Corporate/academic buzzword.",
  'geopend': "Opened. Past participle of 'openen.' Note: 'ge-' prefix + 'opend.' Shop-sign vocabulary: 'Geopend' (open) / 'Gesloten' (closed).",
  'er wordt gerookt': "There is smoking / people smoke. Impersonal passive with 'er.' Agentless — 'smoking happens.' Unique Dutch construction.",
  'er werd gedanst': "There was dancing. Past impersonal passive. 'Werd' (past of worden) + 'gedanst' (participle). Scene-setting in narratives.",
  'door wie': "By whom. 'Door' (by, agent-marker) + 'wie' (who). Passive-agent question. 'Door wie is het gedaan?' (by whom was it done?).",
  'waarin': "In which. Pronominal adverb: 'waar' (what) + 'in.' For inanimate referents. Animate version: 'in wie' (in whom).",
  'waarop': "On which. 'Waar' + 'op.' Same pattern. 'De tafel waarop het staat' (the table on which it sits). Formal alternative to 'waar het op staat.'",
  'waarover': "About which. 'Waar' + 'over.' Relative/interrogative. 'De film waarover we praatten' (the film we talked about).",
  'met wie': "With whom. 'Met' (with) + 'wie' (who). For animate. Dutch doesn't strand prepositions — 'met' stays with 'wie.'",
  'voor wie': "For whom. 'Voor' (for) + 'wie.' Same animate-preposition rule. Contrast 'waarvoor' for inanimates.",
  'blijkbaar': "Apparently / evidently. From 'blijken' (to turn out) + 'baar' (-able). Literally 'turn-out-able.' Epistemic marker.",
  'schijnbaar': "Apparently / seemingly. From 'schijnen' (to seem) + 'baar.' Subtly different from 'blijkbaar' — schijnbaar implies it might be false.",
  'kennelijk': "Apparently / evidently. From 'kennen' (to know) + 'elijk' (-ly). Literally 'knowably.' Most formal of the three 'apparently' synonyms.",
  'volgens': "According to. Native Germanic. Takes a name or source: 'volgens mij' (according to me), 'volgens de krant' (according to the newspaper).",
  'naar aanleiding van': "With regard to / further to. Formal phrase. 'Aanleiding' (cause/occasion). Business-letter register.",
  'groetjes': "Regards / love (informal closing). Diminutive of 'groet' (greeting) + plural. Warm casual letter/email closing.",
  'Sinterklaas': "Saint Nicholas (Dutch tradition). December 5th. Origin of Santa Claus via New Amsterdam (New York). Dutch settlers brought Sinterklaas to America.",
  'Koningsdag': "King's Day. April 27. National celebration with street markets (vrijmarkt). Formerly Queen's Day (Koninginnedag) until 2013.",
  'Bevrijdingsdag': "Liberation Day. May 5. Commemorates 1945 liberation from Nazi occupation. Preceded by Remembrance Day (Dodenherdenking) May 4.",
  'duurzaam': "Sustainable. From 'duur' (duration) + 'zaam' (-able). Literally 'duration-able.' Environmental and corporate vocabulary.",
  'nuchter': "Sober / down-to-earth / pragmatic. Literally 'sober' (not drunk). Extended culturally: Dutch 'nuchtere' approach = practical, no-nonsense.",
  'Zou u zo vriendelijk willen zijn om...': "'Would you be so kind as to...' Ultra-formal request. Triple conditional: 'zou' + 'willen' + 'zijn' + 'om.' Business formality.",
  'hierbij': "Hereby / with this. Compound: 'hier' (here) + 'bij' (with/at). Formal written register. 'Hierbij verklaar ik' (hereby I declare).",
  'gelieve': "Please (very formal). Imperative: 'please be pleased to.' Ancient politeness. 'Gelieve te betalen' (please pay).",
  'vervolgens': "Subsequently / then. From 'vervolgen' (to continue). Connective for sequence in formal writing.",
  'ten slotte': "Finally / lastly. Archaic genitive: 'ten' (to the) + 'slotte' (end). Essay-ending connector. Pair with 'ten eerste' (firstly).",
  'een derde': "A third. Fraction. 'Een' (a/one) + 'derde' (third). Regular ordinal + 'e' = fractional noun.",
  'geachte': "Dear (formal). From 'achten' (to esteem) + 'ge-' (past participle). Literally 'esteemed.' Used in business letters: 'Geachte heer/mevrouw.'",
  'hoogachtend': "Yours faithfully. Literally 'high-esteeming.' Present participle of 'hoogachten.' Formal letter closing.",
  'van belang': "Of importance. 'Van' (of) + 'belang' (importance). Fixed phrase. 'Het is van belang' (it's important).",
  'naar mijn mening': "In my opinion. 'Naar' (according to) + 'mijn mening' (my opinion). Formal alternative to 'volgens mij.'",
  'naar aanleiding van': "In connection with / following. Formal duplicate of u18 entry. Context: business letters referring to previous events.",
  'betrouwbaar': "Reliable / trustworthy. From 'betrouwen' (to trust) + 'baar.' Literally 'trust-able.' Evaluation adjective.",
  'aldus': "Thus spoke / so said (formal attribution). Latin 'aliud' origin. News/journalism: 'Aldus de minister' (thus said the minister).",
  'naar verluidt': "Reportedly / according to reports. Legal/news register. 'Verluidt' archaic: 'is heard.' Used in official and press contexts.",
  'stel dat': "Suppose that / what if. Imperative of 'stellen' (to put/set) + 'dat.' Hypothetical opener. 'Stel dat ik win' (suppose I win).",
  'aangenomen dat': "Assuming that / given that. Past participle of 'aannemen' + 'dat.' Formal conditional. Academic/legal register.",
  'in het geval dat': "In case / in the event that. Full formal phrase. 'Geval' (case). Longer, more formal than 'als.'",
  'gesteld dat': "Given that / supposing that. Past participle of 'stellen' + 'dat.' Academic hypothetical.",
  'wat als': "What if. 'Wat' (what) + 'als' (if). Direct counterfactual question.",
  'denkbeeldig': "Imaginary / hypothetical. From 'denken' (think) + 'beeld' (image) + -ig. Literally 'think-image-y.' Philosophy vocabulary.",
  'jammer genoeg': "Unfortunately / regrettably. 'Jammer' (a pity) + 'genoeg' (enough). 'Unfortunately enough.' Narrative softener.",
  'hopelijk': "Hopefully. From 'hopen' (to hope) + -elijk (-ly). Literally 'hope-ly.' Wishful sentence starter.",
  'als het maar kon': "If only it were possible. Conditional with 'maar.' Counterfactual wish. 'Als het maar kon, zou ik...' (if only it were possible, I would...).",
  'moge': "May (formal wish). Formal subjunctive. 'Moge het lang duren' (may it long endure). Written register.",
  'als het ware': "As it were / so to speak. Fixed phrase with subjunctive 'ware' (were). Literary hedge.",
  'ware het niet dat': "Were it not that / if it weren't for. Formal subjunctive. 'Ware' is old subjunctive of 'zijn.' Scholarly register.",
  'leve': "Long live. Subjunctive of 'leven' (to live). Used in toasts: 'Leve de koning!' (long live the king).",
  'stel je voor dat': "Imagine that. Imperative 'stel je voor' (imagine). More conversational than 'stel dat.' Storytelling opener.",
  'had ik maar': "If only I had. Past conditional. 'Had' (had) + 'ik' + 'maar' (only). Regret marker.",
  'nuchter': "Sober / level-headed (u23 context). Reinforces u19.",
  'doe maar gewoon': "Just act normal. Dutch cultural mandate. 'Doe maar gewoon, dan doe je al gek genoeg' (act normal, that's crazy enough). Anti-showoff ethos.",
  'niet lullen maar poetsen': "Don't talk, just do it. Rotterdam motto. 'Lullen' (to talk, vulgar) + 'poetsen' (to clean/polish, meaning 'work'). Blue-collar pragmatism.",
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
