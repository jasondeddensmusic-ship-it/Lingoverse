#!/usr/bin/env node
// French u15-u22 masc/fem (48 cards).

import fs from 'node:fs';

const apply = process.argv.includes('--apply');
const GENERIC = 'French nouns are either masculine or feminine. The article gives it away.';

const FACTS = {
  'plus de livres que': "More books than. Plus de + noun + que + noun. Quantity comparison.",
  'autant de temps que': "As much time as. Autant de + noun + que. Equality comparison.",
  "C'est le meilleur café du quartier.": "It's the best café in the neighborhood. Superlative: le meilleur (irregular comparative of bon).",
  'plutôt': "Rather / instead. From plus (more) + tôt (early). Literally 'more-early.' Preference marker.",
  "l'avion": "The airplane. Masculine. From Latin 'avis' (bird). Early aviation etymology.",
  "l'arrêt de bus": "The bus stop. Arrêt masculine. From 'arrêter' (to stop).",
  "l'aéroport": "The airport. Compound: aéro + port. Masculine because of port.",
  "l'arrivée": "The arrival. -ée fem. From arriver + -ée (past participle fem).",
  "j'aimerais": "I would like. Conditional of aimer. Polite softener.",
  'pourriez-vous': "Could you (formal). Conditional of pouvoir. Polite inversion question.",
  "l'ordinateur": "The computer. Masculine. French coinage (not loan from English computer). From ordonner (to put in order).",
  "l'internet": "The internet. Masculine. English loan. Usage: 'sur internet' or 'sur Internet.'",
  "l'écran": "The screen. Masculine. From Old French 'escran.'",
  "l'application": "The app. -ation fem. From Latin 'applicatio.'",
  "l'occasion": "The opportunity. -ion fem. Latin 'occasio.' Same root as English 'occasion.'",
  "l'échec": "The failure. Masculine. From 'échec' (chess). Originally 'check' in chess. Metaphoric extension.",
  "l'objectif": "The goal / objective. Masculine. -if ending typically masculine.",
  'Les résultats sont annoncés par le professeur': "The results are announced by the teacher. Passive: être + past participle + par.",
  "Les invités avaient été prévenus à l'avance": "The guests had been warned in advance. Pluperfect passive: avoir été + participle.",
  'Les billets sont vendus en ligne': "The tickets are sold online. Passive with plural subject. Vendus agrees.",
  "L'école sera rénovée l'année prochaine": "The school will be renovated next year. Future passive. Rénovée agrees with école (fem).",
  "l'impôt": "The tax. Masculine. From imposer (to impose). Latin 'impositum.'",
  'les économies': "The savings. Plural. Les économies = money savings. Économie = economy/frugality.",
  'les intérêts': "The interest (financial). Plural in this sense. Latin 'interesse.'",
  "l'amende": "The fine / penalty. Feminine. From Latin 'emenda' (amendment). Traffic-ticket vocabulary.",
  'mangeant': "Eating (present participle). -ant ending. From manger. Used in gerund constructions.",
  'faisant': "Doing / making (present participle). From faire. Irregular stem fais-.",
  'étant': "Being (present participle, irregular). From être. Unique -ant form.",
  'ayant': "Having (present participle, irregular). From avoir. Literary/formal.",
  'sachant': "Knowing (present participle, irregular). From savoir. Literary use common.",
  'Les enfants chantent en jouant': "The children sing while playing. En + -ant gerund.",
  'des enfants obéissants': "Obedient children. Present participle used as adjective. Agrees: obéissants (masc pl).",
  "après s'être réveillé": "After waking up. Past infinitive: après + être (or avoir) + past participle.",
  "l'émission": "The broadcast / TV show. -ssion fem. From 'émettre' (to emit).",
  'les informations': "The news. Plural in this sense. Les infos (short). Media vocabulary.",
  'les réseaux sociaux': "Social media. Compound: réseau + social. Plural + gender agreement.",
  "l'événement": "The event. Masculine (-ment). From 'événir' archaic.",
  "l'information": "The information / piece of news. Singular. -tion fem.",
  'En raison de': "Due to / on account of. Formal causal phrase. En + raison (reason) + de.",
  'A cause de': "Because of (often negative cause). Contrast with grâce à (positive cause).",
  'Alors': "So / then (consequence). Native French connector. Discourse marker.",
  'Pourtant': "Yet / nevertheless. Concessive connector. Strong contrast.",
  'En depit de': "In spite of / despite (formal). Missing accent should be dépit.",
  'De meme que': "Just as / in the same way as. Missing accent 'même.' Similarity marker.",
  "D'abord": "First / first of all. Narrative opener. D' elided + abord (approach).",
  'Enfin': "Finally / lastly. From en + fin (end). Literally 'in end.' Narrative closer.",
  'De plus': "Moreover / furthermore. De + plus (more). Additive connector.",
  "D'ailleurs": "Besides / by the way. Topic-shift marker. D' + ailleurs (elsewhere). Literally 'from elsewhere.'",
};

let total = 0;
const LANG_ROOT = 'src/data/french-v2';
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
