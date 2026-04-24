#!/usr/bin/env node
// French -er verb variant (54 cards). ZEROES variant.

import fs from 'node:fs';

const apply = process.argv.includes('--apply');
const GENERIC = 'A regular -er verb, the most common French verb group (~90% of all verbs).';

const FACTS = {
  'le déjeuner': "Lunch. From 'dé-' + 'jeûner' (to fast). Originally 'breakfast' — the meal that breaks the night-fast. Shifted meaning over centuries.",
  'aimer': "To like / to love. Latin 'amare.' Same root as English 'amorous.' Dual-strength verb: 'j'aime' spans from 'I like' to 'I love.'",
  'adorer': "To love / adore. Latin 'adorare' (to pray to). Originally religious, secularized. Stronger than aimer.",
  'préférer': "To prefer. Latin 'praeferre.' Note: é→è before silent -e (je préfère). Stem-change verb.",
  'détester': "To hate / detest. Latin 'detestari.' Strong negative — stronger than 'ne pas aimer.'",
  'parler': "To speak. From 'parabolare' (to speak in parables). Same root as English 'parable.' Group-1 model verb.",
  'habiter': "To live (somewhere). Latin 'habitare' (to dwell). Same root as English 'habitat.' Silent h-.",
  'travailler': "To work. Latin 'tripaliare' (torture). Dark etymology — work = torture instrument. Shared with Spanish trabajar.",
  'manger': "To eat. Latin 'manducare' (to chew). Same root as English 'mandible.' Keeps 'e' before 'a' (nous mangeons).",
  'regarder': "To watch / look at. Germanic origin. Re- + garder (to keep). Literally 'to look at again.'",
  'se lever': "To get up. Se + lever (to raise). Reflexive — raise-oneself. Related to English 'levitate.'",
  'se coucher': "To go to bed. Se + coucher (to lay). Reflexive. Related to English 'couch.'",
  'se réveiller': "To wake up. Se + réveiller (from réveil = awakening). Reflexive.",
  'se laver': "To wash oneself. Se + laver (from Latin 'lavare'). Same root as 'lavatory.'",
  'aller': "To go. IRREGULAR — not a regular -er verb despite the ending. One of most irregular French verbs.",
  'rentrer': "To come home / return. Re- + entrer (to enter). Literally 'to re-enter.' Takes être.",
  'janvier': "January. From Latin 'Januarius' (month of Janus, god of beginnings).",
  'février': "February. From Latin 'Februarius' (month of purification festival Februa).",
  "l'hiver": "Winter. Masculine. From Latin 'hibernum' (winter quarter). Same root as 'hibernation.'",
  'faire visiter': "To show around / give a tour. Causative: faire + infinitive. Make-someone-visit.",
  'déménager': "To move (house). Dé- + ménager (household). Literally 'to un-household.' Moving-day vocabulary.",
  'chercher': "To look for. From Latin 'circare' (to go around). Same root as 'circle.'",
  'porter': "To wear / to carry. Latin 'portare' (to carry). Same root as English 'portable.'",
  'essayer': "To try on. Old French 'essai' (attempt). Same root as English 'essay.' Y→i before mute e.",
  'payer': "To pay. From Latin 'pacare' (to pacify). Payment = pacification of creditor.",
  'avant-hier': "Day before yesterday. Compound: avant (before) + hier (yesterday). Self-explanatory.",
  'entrer': "To enter. Latin 'intrare.' Takes être as auxiliary when intransitive (motion).",
  'monter': "To go up. Latin 'montare' (climbing a mount). Takes être when intransitive.",
  'tomber': "To fall. Medieval Latin onomatopoeic. Takes être — motion-verb rule.",
  'retourner': "To go back / return. Re- + tourner (to turn). Literally 'to re-turn.' Takes être.",
  'dépenser': "To spend (money). Dé- + penser (to weigh). Literally 'to weigh out.' Same Latin root as 'dispense.'",
  'oublier': "To forget. Latin 'oblitare' (to blot out). Same root as English 'oblivion' and 'obliterate.'",
  'changer': "To transfer / change. Latin 'cambiare' (to exchange). Same root as English 'change' (via Old French).",
  'télécharger': "To download. Modern compound: télé (far) + charger (to load). 'Load from afar.'",
  'sans parler': "Without speaking. Sans (without) + infinitive. Gerund-equivalent when subjects match.",
  'postuler': "To apply (for a job). Latin 'postulare' (to demand). Same root as English 'postulate.'",
  'embaucher': "To hire. From old 'bauche' (timber frame). Originally construction term.",
  'gérer': "To manage / handle. Latin 'gerere' (to carry/bear). Same root as 'gerund,' 'gestation.'",
  'planifier': "To plan / schedule. From 'plan' + -ifier. Productive French verb-forming suffix.",
  'organiser': "To organize. Latin 'organum' (tool). Same root as English 'organ,' 'organism.'",
  'collaborer': "To collaborate. Latin 'collaborare' (to work together). Same cognate.",
  'diriger': "To lead / manage. Latin 'dirigere' (to direct). Same root as English 'direct.'",
  'regretter': "To regret. Old French 'regreter.' Same word as English 'regret' (borrowed from French).",
  'affirmer': "To state / assert. Latin 'affirmare.' Same root as English 'affirm.'",
  'réfuter': "To refute. Latin 'refutare.' Same root as English 'refute.'",
  'nuancer': "To nuance / qualify. From 'nuance.' Verb form. Delicate argumentation.",
  'avancer': "To put forward / advance. Latin 'abante' (from before). Rhetorical use in arguments.",
  'repérer': "To spot / identify. From 'repère' (landmark). Nautical-origin word.",
  'synthétiser': "To synthesize / summarize. Greek 'synthesis.' Academic-writing vocabulary.",
  "J'aurais aimé voyager": "I would have liked to travel. Past conditional of aimer + infinitive. Regret.",
  "avoir d'autres chats à fouetter": "To have other fish to fry. Literally 'to have other cats to whip.' Dark French equivalent of English idiom.",
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
