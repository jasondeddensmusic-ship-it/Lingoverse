#!/usr/bin/env node
// 41 Spanish cards in units 5-7 using the 'fourth most spoken' filler.
// All funFacts single-quoted and em-dash-free.

import fs from 'node:fs';

const apply = process.argv.includes('--apply');
const GENERIC = 'Spanish is the fourth most spoken language worldwide, with 500+ million native speakers.';

const FACTS = {
  // Unit 5
  'luego / después': "Both mean 'then/later.' 'Luego' is slightly quicker in feel, 'después' has more distance. In narration, Spanish speakers chain both: 'primero, luego, después, finalmente.'",
  '¿a qué hora?': "Literally 'at what hour.' Spanish time questions always use 'hora' (not 'tiempo,' which means weather or abstract time). '¿Qué hora es?' asks the clock; '¿a qué hora?' asks when something happens.",
  'a las + hora': "Preposition 'a' + article 'las' + number. Plural 'las' because the implied noun is 'horas.' Singular only for one o'clock ('a la una').",
  'contento / contenta': "Milder than 'feliz' (happy). 'Contento' is situational contentment; 'feliz' is deeper happiness. Use 'estar contento' (state), not 'ser.'",
  'enfadado / enfadada': "Spain's standard word for angry. Latin America usually says 'enojado/a.' Both work everywhere, but using 'enfadado' in Mexico or 'enojado' in Madrid marks you as an outsider.",
  'nervioso / nerviosa': "Uses estar ('estoy nervioso'), not ser. With 'ser,' it means habitually anxious as a personality trait. Tenso distinction matters for register.",
  'asustado / asustada': "Past participle of 'asustar' (to scare). The active verb is transitive: 'me asusta' (it scares me). 'Estar asustado' is the resulting state.",
  'preocupado / preocupada': "Literally 'pre-occupied' — mentally occupied in advance by something. Same Latin root as English, but Spanish kept the worry sense while English split off to mean busy.",
  'sorprendido / sorprendida': "Past participle of 'sorprender' (to surprise). Like other emotion adjectives, uses estar because it describes a current state, not a permanent trait.",
  'aburrido / aburrida': "Classic ser/estar trap. 'Ser aburrido' = to be boring (a boring person). 'Estar aburrido' = to be bored (right now). Swap them and you insult yourself or someone else.",
  'emocionado / emocionada': "False friend alert: means 'excited,' not 'emotional.' For emotional in the English sense, Spanish uses 'sensible' or 'conmovido.'",
  'orgulloso / orgullosa': "Takes the preposition 'de': 'orgulloso de mi hija' (proud of my daughter). Unlike English, can also mean arrogant depending on context.",
  'solo / sola': "Adjective meaning alone, lonely, or single. The adverb 'sólo' (only) used to carry an accent but RAE dropped it in 2010. Context now disambiguates.",
  'avergonzado / avergonzada': "From 'vergüenza' (shame). Long word, common typo. Uses estar for embarrassed. Never ser — 'ser avergonzado' would mean shameful as a personality.",
  'la nariz': "Irregular plural: 'las narices.' Fun idiom: 'estar hasta las narices' = to be fed up (literally 'to be up to the noses'). One of many body-part expressions Spanish loves.",

  // Unit 6
  'está / están': "Both are 'estar' — one singular, one plural. Use for location ALWAYS: 'El libro está en la mesa.' Not 'es,' which would imply identity (the book IS the table).",
  'sobre / encima de': "'Sobre' alone means 'on' (sobre la mesa). 'Encima de' adds 'top of.' For books on shelves, both work. For abstract 'about a topic,' only 'sobre': 'un libro sobre historia.'",
  'debajo de': "Always paired with 'de' when there's an object: 'debajo de la mesa.' Standalone 'debajo' is rare. Spanish locational prepositions are mostly compound like this.",
  'al lado de': "Literally 'at the side of.' 'Al' is the contraction of 'a + el,' obligatory. 'A el lado de' is grammatically wrong; Spanish always contracts here.",

  // Unit 7
  '¿Dónde está...?': "Uses estar, not ser, because location is a state, not identity. '¿Dónde es la fiesta?' is a rare exception — events use ser for the place they take place.",
  '¿Cómo llego a...?': "Literally 'how do I arrive at.' Present tense functions as future for travel plans. English 'how do I get to' uses similar present-for-future logic.",
  'perdone': "Formal command (usted) of 'perdonar.' Said when stopping a stranger on the street. Informal equivalent: 'perdona.' The -e/-a switch marks register.",
  'disculpe': "Formal command of 'disculpar.' Slightly less apologetic than 'perdone' — more 'excuse me.' Waiter-calling is almost always 'disculpe' in restaurants.",
  'por aquí': "'Por' implies through or around, not a point destination. 'Por aquí' = 'around here' or 'this way.' 'Aquí' alone is just 'here' — a precise spot.",
  'todo recto': "'Recto' means straight, not right. 'Derecho' is right (direction). Tourists often mix these. 'Siga todo recto' = keep going straight; 'a la derecha' = to the right.",
  'en la esquina': "'Esquina' is the outside corner of a street/building. 'Rincón' is the inside corner (of a room). Spanish distinguishes what English fuses into one word.",
  'al final de': "Literally 'at the final of.' Covers English 'at the end of' for both physical (street) and temporal (year). 'Al principio de' is the matching opposite.",
  'voy a': "'Ir' + a + infinitive = Spanish future. 'Voy a comer' = I'm going to eat. No separate future tense needed for most near-future actions.",
  'vas a': "Same ir+a+infinitive future. The yo/tú forms are irregular: 'voy/vas' diverge from the expected '*iro/iras.' Ir is the most irregular verb in Spanish.",
  'va a': "Shared form for él, ella, and usted. Context or subject pronoun disambiguates. 'Él va a comer' vs 'usted va a comer' — same verb, different listener.",
  'vamos a': "Also means 'let's' + infinitive! '¡Vamos a bailar!' can be 'we are going to dance' OR 'let's dance.' Tone and context separate the two senses.",
  'van a': "Forms the plural near-future: 'ellos van a venir.' Also the third-person plural of ir in the present: 'ellos van al parque' (they go to the park).",
  'vengo de': "'Venir' + de signals origin. 'Vengo de Londres' = I come from London (origin now) OR I just came from London (recent motion). Tense-ambiguous by design.",
  'vienes de': "Note the stem change: ven + go becomes viene for tú. All 'venir' conjugations show this e→ie pattern except nosotros (venimos) and vosotros (venís).",
  'viene de': "Third-person singular. Frequently used for etymology: 'Viene del latín' = it comes from Latin. Standard academic Spanish opener.",
  'venimos de': "Nosotros form keeps the e (no diphthong): venimos, venís. The 'ie' only appears in stressed positions. Predictable for all e→ie stem-changing verbs.",
  'América del Norte': "Preferred over 'Norteamérica' in formal Spanish writing. The 'de + cardinal direction' pattern is universal: América del Sur, Europa del Este, Asia del Sureste.",
  'Europa del Este': "Cold War era framing. Since 1991, younger speakers sometimes prefer 'Europa Central y Oriental' for accuracy. The old term persists in news.",
  '¿Está lejos?': "'Lejos' is an adverb meaning 'far' — distance from a reference point. Pairs with 'cerca' (near). Both are invariable: no gender agreement.",
  'a pie': "Literally 'on foot.' The 'a' preposition covers manner of transport: a pie (walking), a caballo (on horseback), a mano (by hand). 'En' is for vehicles: en coche, en tren.",
  'está muy cerca': "'Cerca' without 'de' is adverbial ('close by'). 'Cerca de' is prepositional ('close to something'). A tiny but crucial distinction that English collapses.",
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
