#!/usr/bin/env node
// 29 Spanish idiom cards in u29 with 'verbs encode subject' filler.
// All are rich Spanish idioms deserving cultural/etymological facts.

import fs from 'node:fs';

const apply = process.argv.includes('--apply');
const GENERIC = 'Spanish verbs encode the subject in their ending, so pronouns are often dropped.';

const FACTS = {
  'meter la pata': "Literally 'to put the leg (pata) in.' 'Pata' is an animal leg; for humans you'd say 'pierna.' So you're not just stepping wrong, you're stepping like an awkward animal.",
  'tomar el pelo': "Literally 'to take the hair.' Origin disputed: possibly from old haircutters who teased customers, or from hair as a symbol of self — pulling someone's hair = toying with them.",
  'costar un ojo de la cara': "Literally 'to cost an eye of the face.' Variants: 'un riñón' (a kidney), 'un brazo y una pierna.' Spanish body-part price idioms are especially vivid.",
  'no tener pelos en la lengua': "Literally 'to not have hair on the tongue.' Hair would impede speech; no hair = uninhibited talk. Speaking one's mind frankly.",
  'estar hasta las narices': "Literally 'to be up to the noses.' Plural 'narices' in Spain. The fed-up water is rising past your nose, so you can barely breathe. Spain prefers 'narices'; LATAM often 'las narices' or 'hasta la coronilla.'",
  'estar en las nubes': "Literally 'to be in the clouds.' Universal idiom — same image in English, French (être dans les nuages), Italian. Maybe the oldest Indo-European mental-absence metaphor.",
  'ir al grano': "Literally 'to go to the grain/kernel.' 'Grano' is the edible part of wheat; going 'al grano' means skipping the husk to reach the essential. Same metaphor as English 'cut to the chase.'",
  'echar una mano': "Literally 'to throw a hand.' The throwing implies offering it freely, not attached. A hand offered from across a distance. Very common — more casual than 'ayudar.'",
  'dar en el clavo': "Literally 'to give (hit) on the nail.' Universal image: exactly hitting the nail head you aimed for. Mirrors English 'hit the nail on the head' word-for-word.",
  'no dar pie con bola': "Literally 'to not give foot with ball.' Soccer origin: a player missing every kick. Even more than 'to get it wrong' — total inability to do anything right.",
  'ponerse rojo': "Literally 'to put oneself red.' Reflexive 'ponerse' + color = to turn a color (embarrass/blush). Same with 'ponerse pálido' (turn pale), 'ponerse verde' (turn green with envy).",
  'verlo todo negro': "Literally 'to see everything black.' Pessimism idiom. Pair with 'verlo todo de color de rosa' (optimism, rose-colored). Spanish color-vision idioms come in opposite pairs.",
  'quedarse en blanco': "Literally 'to stay in white / go blank.' The mind becomes a blank page. Common in exam anxiety: 'me quedé en blanco' — my mind went blank. Different from 'estar en blanco' (no content).",
  'dar luz verde': "Literally 'to give green light.' Traffic-light metaphor, same in English. Modern idiom (20th c.) from the rise of traffic systems. Used in business and media: 'el jefe dio luz verde al proyecto.'",
  'verlo todo de color de rosa': "Literally 'to see everything in pink color.' Rose-tinted glasses image. French 'voir la vie en rose' (made famous by Edith Piaf) shares the metaphor across Romance languages.",
  'ser pan comido': "Literally 'to be (already) eaten bread.' The hard part is done; the bread is already bread, ready. Often paired with 'es pan comido' to describe a trivial task.",
  'ser uña y carne': "Literally 'to be fingernail and flesh.' Describes an inseparable pair — you can't pry the nail from the flesh without hurt. Deep friendship or bond.",
  'llover sobre mojado': "Literally 'to rain on what's already wet.' Bad news piling on more bad news. English 'when it rains it pours' is the same sentiment with different imagery.",
  'estar como pez en el agua': "Literally 'to be like a fish in water.' Universal across languages (English 'like a fish to water' uses the same metaphor). One's natural element.",
  'tirar la toalla': "Literally 'to throw the towel.' Boxing image: the corner throwing the towel into the ring signals surrender. Spanish borrowed the boxing metaphor intact in the 20th century.",
  'caer bien / caer mal': "Literally 'to fall well / badly.' 'Me cae bien' means I instinctively like him/her. Different from 'gustar' (which implies attraction or preference). First-impression chemistry.",
  'dar igual': "Literally 'to give equal.' 'Me da igual' — it's the same to me. Stronger than simple indifference; implies 'I genuinely have no preference.' Key Spanish phrase for low-stakes decisions.",
  'quedarse de piedra': "Literally 'to stay of stone.' Shock petrifies you — you become stone. Contrast 'quedarse helado' (icy) and 'quedarse boquiabierto' (open-mouthed). Spanish has many shock metaphors.",
  'estar hecho polvo': "Literally 'to be made dust.' Total exhaustion reduces you to powder. Strong intensifier — more than 'cansado.' 'Estoy hecho polvo' = I'm wrecked.",
  'morirse de ganas': "Literally 'to die of desire.' Hyperbolic longing. 'Me muero de ganas de verte' — I'm dying to see you. 'Ganas' is a tricky word: urges, desire, appetite.",
  'hacer la vista gorda': "Literally 'to make the gaze fat/thick.' A thick/fat gaze can't see details — deliberate overlooking. English 'turn a blind eye' uses different imagery for the same willful ignorance.",
  'no tener ni pies ni cabeza': "Literally 'to have neither feet nor head.' A body without endpoints is nonsense. Describes statements, plans, or arguments that are completely incoherent.",
  'poner el dedo en la llaga': "Literally 'to put the finger in the wound.' Touching a physical wound or exposing emotional truth. Same imagery as English 'hit a nerve' but more graphic.",
  'dar gato por liebre': "Literally 'to give cat for hare.' Medieval innkeepers were rumored to serve cheap cat meat pretending it was hare. Classic swindle metaphor.",
};

let total = 0;
const LANG_ROOT = 'src/data/spanish-v2';
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
