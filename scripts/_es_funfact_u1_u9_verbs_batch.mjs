#!/usr/bin/env node
// 38 Spanish cards u1-u9 using 'verbs encode subject' filler.

import fs from 'node:fs';

const apply = process.argv.includes('--apply');
const GENERIC = 'Spanish verbs encode the subject in their ending, so pronouns are often dropped.';

const FACTS = {
  'Yo': "Subject pronoun 'I.' Spanish often drops 'yo' because the verb ending already indicates the subject: 'hablo' (I speak) alone suffices. Use 'yo' only for emphasis or contrast.",
  'Él / Ella': "Third-person subject pronouns. Él (he) and ella (she). Like 'yo,' usually dropped in Spanish. Kept when contrasting: 'Yo estudio; él trabaja.' Also for clarification in ambiguous third-person.",
  'es': "From 'ser' (to be). Irregular 3rd-person singular. Ser = identity, origin, time, profession. Contrast 'está' (from estar) = location, state, feeling. Learning Spanish = learning which to use.",
  'tener hambre': "Literally 'to have hunger.' Spanish frames physical states as possessions: tener hambre (hungry), tener sed (thirsty), tener miedo (afraid). English uses 'be'; Spanish uses 'have.'",
  'tener sed': "'To have thirst.' Part of the tener-family for physical sensations. Also: tener frío (cold), tener calor (hot). Never 'estar frío' for feeling cold — that describes an object being cold to touch.",
  'despertarse': "Reflexive from 'despertar' (to wake someone). Without the reflexive 'se,' it means to wake someone up. With 'se,' you wake yourself up. Reflexive marks self-action.",
  'levantarse': "Reflexive from 'levantar' (to lift, raise). 'Levantarse' = to lift oneself up, i.e. get up from bed. The reflexive transforms transitive verbs into self-directed ones.",
  'ducharse': "Reflexive from 'ducha' (shower). Parallel to English 'to shower (oneself).' Spanish makes the reflexive explicit; English has absorbed it implicitly.",
  'vestirse': "Reflexive + e→i stem change. 'Me visto' (I dress myself). Without the reflexive: 'vestir a alguien' (to dress someone else). Spanish distinguishes; English blurs.",
  'lavarse': "Reflexive from 'lavar' (to wash). Body-part construction: 'me lavo las manos' (I wash my hands) — NOT 'mis manos.' The article replaces the possessive for body parts.",
  'peinarse': "Reflexive from 'peinar' (to comb). Always with body-part article: 'me peino el pelo' (I comb my hair). 'Mi pelo' would sound off in standard Spanish.",
  'acostarse': "Reflexive + o→ue stem change. 'Me acuesto' (I lie down / go to bed). From 'costa' (side/edge) — originally 'to put oneself on one's side.'",
  'sentarse': "Reflexive + e→ie stem change. 'Me siento' (I sit down). Don't confuse with 'sentirse' (to feel): 'me siento triste' (I feel sad). Spelled identically in yo form — context decides.",
  'cepillarse los dientes': "Full body-care phrase. 'Cepillarse' (brush oneself) + 'los dientes' (the teeth). Again: definite article with body parts, not possessive.",
  'antes de': "Preposition + infinitive. 'Antes de comer' (before eating). Never 'antes de comiendo.' Spanish prefers infinitive after prepositions where English uses -ing.",
  'después de': "Same pattern. 'Después de comer' (after eating). 'Después de comer, salimos' — after eating, we went out. Infinitive, not gerund.",
  'tarde': "Adverb 'late.' Invariable. 'Llego tarde' (I arrive late). Don't confuse with 'la tarde' (afternoon, noun) — same spelling, different category.",
  'siempre / nunca': "Frequency adverbs. Note: with 'nunca' before the verb, no 'no' needed. 'Nunca voy' = 'I never go.' Double negative 'no voy nunca' is also correct (emphatic).",
  'ir al parque': "Ir + a + place. 'Al' is mandatory contraction of a + el. 'Voy a el parque' is wrong; always 'voy al parque.' Spanish permits no leading preposition stranding.",
  'lavar los platos': "Idiom. 'Lavar los platos' (wash the dishes). Transitive use, no reflexive. Compare 'lavarse' (to wash oneself). Both use 'lavar' root.",
  'hacer la cama': "Literally 'to make the bed.' Same metaphor as English. Spanish 'hacer' covers many English 'make/do' functions. Idiomatic daily-chore phrase.",
  'tener que + infinitivo': "Obligation structure. 'Tengo que irme' — I have to leave. Alternative to 'debo irme' (I must leave). 'Tener que' is more everyday; 'deber' more formal.",
  'a la derecha': "'To the right.' Direction preposition 'a' + la + derecha. Contrast: 'de la derecha' (from the right), 'por la derecha' (along the right).",
  'a la izquierda': "'To the left.' Mirror of 'a la derecha.' Interestingly, 'izquierda' from Basque 'ezker' — one of Spanish's few Basque loanwords.",
  'gira': "Imperative of 'girar' (to turn). Informal tú command. 'Gira a la derecha' — turn right. Driving instructions use these commands heavily.",
  'al norte de': "Compound preposition. 'Al norte de Madrid' — to the north of Madrid. Cardinal directions all take 'al + direction + de + place.'",
  'al sur de': "Same pattern. 'Al sur de España' — to the south of Spain. Often used for regions: al sur de Andalucía (southern Andalusia).",
  'probarse': "Reflexive of 'probar' (to try). 'Probarse' specifically means to try on (clothes). Without reflexive: 'probar la comida' (to taste food). Very different senses.",
  'pagar en efectivo': "'En efectivo' = in cash. 'Efectivo' literally means 'effective' — cash being immediately effective payment. Compare 'con tarjeta' (with card).",
  'pagar con tarjeta': "Pay by card. 'Con' = with (instrumental). Spanish distinguishes between method (con) and form (en): con tarjeta, en efectivo. Small but systematic.",
  'comí': "Preterite of 'comer,' yo form. Note the accent on í — marks stress and distinguishes from imperfect 'comía' (with different accent). Accents carry tense information.",
  'aprendimos': "Nosotros preterite of aprender. Regular -er. Note: present 'aprendemos' and preterite 'aprendimos' differ only by one vowel (e vs i). Subtle contrast.",
  'viví': "Preterite of vivir, yo form. Regular -ir. The accent on final í is what marks preterite vs present (vivo = I live, viví = I lived).",
  'después': "Adverb meaning 'afterwards.' Also prepositional: 'después de' + infinitive. Used throughout narrative: 'comí, después caminé, después leí.'",
  'caminé': "Preterite of caminar, yo form. Regular -ar. Contrast with English 'walked' which uses same form for all subjects; Spanish uses 6 different forms per tense.",
  '¿Dónde comiste?': "Question with preterite. 'Dónde' keeps its accent in questions. 'Comiste' is tú form of comer preterite. Classic conversation starter for retrospect.",
  'nadé': "Preterite of nadar (to swim). Regular -ar. From Latin 'natare,' same root as English 'natatorium' (swimming pool). Rare Latin preservation.",
  'visité': "Preterite of visitar. Regular -ar. From Latin 'visitare' (to go see). Same root as English 'visit, vision, visual.' Straightforward Latin inheritance.",
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
