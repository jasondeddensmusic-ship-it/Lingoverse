#!/usr/bin/env node
// 30 Spanish cards in units 13-14 using the 'fourth most spoken' filler.
// u13: personal 'a', object pronouns, double pronouns
// u14: ir a + infinitive future, simple future tense, conjecture uses

import fs from 'node:fs';

const apply = process.argv.includes('--apply');
const GENERIC = 'Spanish is the fourth most spoken language worldwide, with 500+ million native speakers.';

const FACTS = {
  // u13 personal 'a' + object pronouns
  "a personal": "Spanish requires 'a' before a human or personalized direct object. 'Veo a María' (I see María) but 'veo la casa' (I see the house). Forgetting the personal 'a' marks you as a learner.",
  "Conozco a tu madre": "'Conocer' (to know a person) always takes personal 'a.' 'Saber' (to know a fact) doesn't. Spanish splits what English fuses: 'I know her' vs 'I know math.'",
  "Llamo a Pedro": "The personal 'a' is obligatory here. 'Llamo Pedro' without 'a' is an error. Exception: with indefinite persons ('busco empleado'), the 'a' is sometimes dropped.",
  "¿A quién esperas?": "Question word starts with 'a' because esperar takes the personal 'a.' English fronts 'who,' Spanish fronts 'a quién.' Preposition never strands in Spanish.",
  "¿Me puedes ayudar?": "'Ayudar' takes a direct object 'me.' Mexican Spanish often uses indirect 'le' instead: 'le ayudo' vs Spain's 'lo/la ayudo.' A minor leísmo variant.",
  "Estoy haciéndolo": "Present progressive with attached direct object pronoun. Accent on -ie- preserved: haciendo → haciéndolo. Spanish attaches pronouns to gerunds, infinitives, and positive commands.",
  "se lo": "'Se' replaces 'le/les' when followed by 'lo/la/los/las.' Avoids the awkward 'le lo.' 'Le doy el libro' becomes 'se lo doy' — not 'le lo doy.' Unique Spanish phonological rule.",
  "se la": "Same se-for-le rule, with feminine 'la.' 'Le doy la carta' → 'se la doy.' The 'se' is ambiguous (him/her/them); context clarifies.",
  "me lo / te lo": "Double object pronouns: indirect (me/te) + direct (lo). Always in that order: indirect first, direct second. 'Me lo das' (you give it to me), never 'lo me das.'",
  "Se lo digo": "Classic double-pronoun compression: 'I tell it to him/her.' 'Se' covers the indirect object; 'lo' is the thing told. Essential for fluid Spanish.",
  "¿Me lo puede envolver?": "Formal usted form ('puede') + double pronouns. Typical shop interaction. 'Envolver' = to wrap; shops default to formal register with customers.",
  "¿Se lo enseño?": "'Enseñar' means both 'to teach' and 'to show.' Context distinguishes. In a shop, 'enseñar' almost always means 'to show.'",
  "Te lo devuelvo mañana": "'Devolver' = to return (something). Different from 'volver' = to return (to come back). Spanish distinguishes the two senses English collapses into 'return.'",
  "Se lo regalo": "'Regalar' is to give as a gift, distinct from 'dar' (give generally). Christmas morning conversations are full of 'te lo regalo' + the gift.",
  "enfermo / enferma": "Adjective pair. Always 'estar enfermo' (temporary state) not 'ser enfermo' (would mean sickly as identity). Classic ser/estar distinction.",

  // u14 future
  "Voy a estudiar": "Periphrastic future: ir + a + infinitive. Spanish's go-to future in speech. English parallel: 'I'm going to study.' Both structures use motion verbs for upcoming events.",
  "Vas a comer": "Second-person 'you' form. The 'a' here is not the personal 'a'; it's part of the periphrasis. Spanish prepositions often do double duty.",
  "Va a llover": "Weather forecasts use this structure. Impersonal 'va' with no explicit subject. English 'it's going to rain' uses dummy 'it'; Spanish just uses the verb.",
  "Vamos a viajar": "Same form covers 'we're going to travel' AND 'let's travel.' Intonation and context distinguish. In speech, rising intonation leans toward 'let's.'",
  "Van a salir": "Third-person plural 'they/you(pl)' future. Like English 'they're going to,' but Spanish skips the subject pronoun unless emphasizing.",
  "¿Qué vas a hacer?": "The go-to casual plan question. English 'what are you going to do' maps word-for-word, making this a painless construction for beginners.",
  "No querrán salir": "Simple future of 'querer' (irregular: querr- stem). Unlike English, Spanish simple future carries a conjecture sense: 'they won't want to go out' OR 'they probably don't want to.'",
  "Mañana lloverá": "Simple future (llover → lloverá). More formal than periphrastic 'va a llover,' favored in weather reports and written forecasts.",
  "Hará calor": "Weather expressions use 'hacer' where English uses 'to be' (it will be hot). Spanish: 'hará calor.' Also: hará frío, hará sol, hará viento. Weather is always a 'doing.'",
  "Hará frío": "Same pattern. 'Hará frío' (it will be cold). The fixed hacer-for-weather is older than modern Spanish; Italian preserves similar logic with 'fa caldo.'",
  "Serán las tres": "Future for conjecture, not actual prediction. 'Serán las tres' = 'it must be (around) three o'clock.' Classic Spanish use of future to express guesses about the present.",
  "¿Dónde estará?": "Another conjecture future. 'Where could it be?' The future tense in Spanish handles uncertainty about the present, unlike English which uses 'must be' or 'could be.'",
  "Nunca lo haré otra vez": "Simple future of hacer (haré). 'Nunca' before the verb doubles the negation with 'no'-less syntax: 'nunca lo haré' needs no explicit 'no.'",
  "Siempre te ayudaré": "Future promise with 'siempre.' Spanish allows simple future freely for sincere promises, oaths, and predictions. In English, speakers often use 'will' or 'I promise to.'",
  "Todo saldrá bien": "Simple future of 'salir' (irregular: saldr- stem). Reassuring phrase: 'everything will turn out fine.' The 'd' inserted in saldr-, vendr-, tendr- is a consistent irregular pattern.",
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
    const re = new RegExp(`(trg:"${escTrg}"[\\s\\S]*?funFact:")${GENERIC.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(")`, 'g');
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
