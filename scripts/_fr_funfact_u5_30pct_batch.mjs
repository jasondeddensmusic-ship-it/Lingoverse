#!/usr/bin/env node
// French u5 30% variant (20 cards).

import fs from 'node:fs';

const apply = process.argv.includes('--apply');
const GENERIC = 'French gave English roughly 30% of its vocabulary. Many formal English words have French origins.';

const FACTS = {
  '... et demie / ... et quart / ... moins le quart': "Half past / quarter past / quarter to. Time idioms. 'Et demie' (and half), 'et quart' (and quarter), 'moins le quart' (minus the quarter). Systematic clock vocabulary.",
  'à ... heure(s)': "At ... o'clock. 'À' (at) + hour. Singular 'heure' for 1; plural 'heures' for 2+. Position question: 'à quelle heure?' (at what time?).",
  'tôt / tard': "Early / late. 'Tôt' from Latin 'tosto' (cooked/hot, metaphor for 'ready soon'). 'Tard' from Latin 'tarde' — same root as English 'tardy.'",
  "D'abord... puis... ensuite... enfin": "First... then... next... finally. Narrative connectors. D'abord = at first. Enfin = at last, from 'en' + 'fin' (at end).",
  'lundi, mardi, mercredi': "Monday, Tuesday, Wednesday. Latin roots: lunae-dies (moon-day), martis-dies (Mars-day), mercurii-dies (Mercury-day). Pagan planetary gods.",
  'jeudi, vendredi': "Thursday, Friday. From Latin Jovis-dies (Jupiter-day), Veneris-dies (Venus-day). English Thursday/Friday use Germanic equivalents (Thor/Frigg).",
  'samedi, dimanche': "Saturday, Sunday. 'Samedi' from Latin 'sabbati-dies' (sabbath day, Hebrew origin). 'Dimanche' from 'dies dominicus' (Lord's day, Christian).",
  'ne ... pas': "Not. Two-part negation framing the verb. 'Je ne sais pas' (I don't know). 'Pas' originally meant 'step' (from Latin 'passus') — intensifier that became the main negator.",
  'ne ... pas de': "Not any (negation + partitive). After 'pas,' partitive articles 'un/une/du/de la/des' reduce to just 'de.' 'Je n'ai pas de livre' (I don't have a/any book).",
  "Ce n'est pas...": "It is not... Ce + negation + est. The c' is elided from ce before est. Negated equivalent of c'est.",
  'tous les jours': "Every day. 'Tous les' (all the, masc. pl.) + 'jours' (days). Regular frequency phrase.",
  'fâché / fâchée': "Angry (m/f). From 'se fâcher' (to get angry). Past participle used as adjective. English 'fashion' shares a distant related root (both from 'facere' = to make).",
  'content / contente': "Pleased / happy (m/f). From Latin 'contentus' (satisfied). Same root as English 'content' (satisfied). Feminine adds -e and sounds the final 't.'",
  'nerveux / nerveuse': "Nervous (m/f). -eux/-euse adjective pair — productive French pattern: heureux/heureuse, sérieux/sérieuse. Derived from 'nerf' (nerve).",
  'fier / fière': "Proud (m/f). From Latin 'ferus' (wild, fierce). English 'fierce' is the same root. Pride and fierceness were originally one concept.",
  'surpris / surprise': "Surprised (m/f). Past participle of 'surprendre.' English 'surprise' borrowed from French. Feminine adds -e; pronunciation changes due to -e.",
  'inquiet / inquiète': "Worried (m/f). From Latin 'inquietus' (not-at-rest). 'In-' (not) + 'quiet.' Same root as English 'inquiet' (archaic).",
  'excité / excitée': "Excited (m/f). From 'exciter' (to excite). Note: French 'excité' can have sexual connotation in some contexts — use 'enthousiasmé' for neutral 'excited.'",
  'gêné / gênée': "Embarrassed (m/f). From 'gêner' (to bother/embarrass). English 'gene' is unrelated — 'gêne' comes from Old French for 'torture.' Ironic modern softening.",
  'seul / seule': "Lonely / alone (m/f). From Latin 'solus' (alone). Same root as English 'sole,' 'solo,' 'solitary.' Very productive.",
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
