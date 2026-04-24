#!/usr/bin/env node
// French u8-u12 30% variant (41 cards).

import fs from 'node:fs';

const apply = process.argv.includes('--apply');
const GENERIC = 'French gave English roughly 30% of its vocabulary. Many formal English words have French origins.';

const FACTS = {
  'bleu / bleue': "Blue (m/f). Feminine adds -e. From Germanic 'blao' via Old French. Germanic root, unlike most French words.",
  'noir / noire': "Black (m/f). From Latin 'niger.' Same root as English 'negro.' Silent final r.",
  'blanc / blanche': "White (m/f). Germanic origin. 'Blanche' irregular feminine (adds -che). Related to English 'blank.'",
  'gris / grise': "Gray (m/f). Germanic. Same root as English 'gray.' -e feminization.",
  'violet / violette': "Purple (m/f). From 'violette' (violet flower). Double-t in feminine. Color named after flower.",
  'Combien ça coûte?': "How much does it cost? Informal. 'Combien' (how much) + 'ça' (that) + 'coûte' (costs). Shopping essential.",
  "C'est trop cher": "It is too expensive. C'est + trop (too) + cher (expensive). Classic negotiation phrase.",
  'Quelle taille?': "What size? 'Quelle' (what, fem) + 'taille' (size). Clothing-shopping vocabulary.",
  'Ça vous va?': "Does it suit you? 'Ça' (that) + 'vous va' (suits you). Polite fitting-room phrase.",
  'Ça fait combien?': "How much does that come to? Alternative to Combien ça coûte? Used at checkout.",
  'on a dîné': "We ate dinner. 'On' impersonal = 'we' colloquially. Passé composé. Dîner historically meant 'break the fast.'",
  'hier': "Yesterday. From Latin 'heri.' Same root as archaic English 'yesterday.' Time anchor for past.",
  'ce matin': "This morning. 'Ce' (this) + 'matin' (morning). Cette vs ce: agrees with masculine 'matin.'",
  'Est-ce que tu as mangé?': "Have you eaten? Question marker 'est-ce que' + tu + past tense. Common conversational opener.",
  "Qu'est-ce que tu as fait?": "What did you do? 'Qu'est-ce que' = what is it that. Multi-part question structure.",
  "Où est-ce que tu as dormi?": "Where did you sleep? Où (where) + est-ce que + past. Travel-conversation essential.",
  "Quand est-ce que tu as commencé?": "When did you start? Time-question structure. Commencer irregular (é before a/o).",
  'D\u2019abord... puis... enfin...': "First... then... finally... Narrative connectors. Note: unicode ' not ASCII.",
  "Ce week-end, j'ai...": "This weekend, I... Casual narrative opener. 'Week-end' is English loan kept as-is in French.",
  "j'avais faim": "I was hungry. Imperfect + faim (hunger). French uses avoir for hunger: avoir faim.",
  'on allait toujours': "We always used to go. Imperfect of aller + toujours (always). Habitual past.",
  "j'avais dix ans": "I was ten years old. Imperfect + age pattern. Avoir + X ans is the age formula.",
  "il/elle s'appelait": "His/her name was. Imperfect of reflexive s'appeler. Background-past description.",
  "Pendant qu'il pleuvait, j'ai lu un livre.": "While it was raining, I read a book. Pendant que + imperfect + passé composé. Classic narrative pair.",
  "Quand j'étais jeune...": "When I was young... Imperfect opener. Same as u11 example — reinforces pattern.",
  'tout à coup': "Suddenly. Fixed phrase. Literally 'all at blow.' Narrative interruption marker.",
  'chaque jour': "Every day. Chaque (each) + jour (day). Invariable chaque.",
  "J'avais faim.": "I was hungry. Reinforces imperfect + hunger pattern.",
  "C'était un beau jour d'été.": "It was a beautiful summer day. Imperfect + setting description. Classic narrative opener.",
  "Tout le monde s'amusait.": "Everyone was having fun. Imperfect of s'amuser. 'Tout le monde' = everyone.",
  'Finalement, tout s\u2019est bien terminé.': "Finally, everything ended well. Passé composé + reflexive. Narrative closer.",
  "Pendant que nous mangions, il a commencé à neiger.": "While we were eating, it started to snow. Imperfect + passé composé. Complete scene.",
  "J'ai pris un taxi parce que j'étais en retard.": "I took a taxi because I was late. Passé composé + imperfect. Action + reason.",
  "J'avais peur.": "I was afraid. Avoir peur (to have fear) + imperfect = background emotional state.",
  "J'ai su la vérité.": "I learned the truth. Passé composé of savoir (to know) = to find out, learn. Different from imperfect savais (I knew).",
  "J'ai habité à Paris pendant cinq ans.": "I lived in Paris for five years. Passé composé with pendant (for) + duration. Completed event.",
  'Tous les étés, nous allions à la mer.': "Every summer, we would go to the sea. Imperfect + tous les + plural. Habitual recurrence.",
  "l'infirmier / l'infirmière": "Nurse (m/f). Article l' elided before vowel. Masculine -ier/-ière pattern.",
  "l'ingénieur / l'ingénieure": "Engineer (m/f). Recent feminization: ingénieure is modern addition to cover women.",
  "l'avocat / l'avocate": "Lawyer / avocado. Dual meaning! Context decides. Feminine avocate is unambiguous (no avocat-feminine of fruit).",
  'le/la journaliste': "Journalist. -iste endings invariable in gender. Only article changes. French profession vocabulary.",
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
