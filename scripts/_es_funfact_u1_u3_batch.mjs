#!/usr/bin/env node
// Batch replacement for the 57 Spanish cards in units 1-3 using the
// 'Spanish is the fourth most spoken language worldwide' filler.
// Each card gets word-specific etymology, cultural, or usage content.

import fs from 'node:fs';

const apply = process.argv.includes('--apply');
const GENERIC = 'Spanish is the fourth most spoken language worldwide, with 500+ million native speakers.';

const FACTS = {
  // Unit 1
  'Hola': "Borrowed from Arabic during Spain's medieval period, though Latin 'salve' was the earlier standard greeting. The h is silent in modern Spanish, so 'hola' sounds like 'ola' (wave).",
  'Buenos días': "Always plural 'días,' never 'buen día,' in Spain and most Latin America. Costa Rica and Paraguay use the singular 'buen día.' A small but instant regional tell.",
  'Buenas tardes': "The cutoff from 'buenos días' is loose — mostly after lunch, roughly 2-3 pm. In Spain, lunch ends late, so 'buenas tardes' starts later than in Latin America.",
  'Buenas noches': "Used both at first meeting in the evening AND when saying goodnight before sleep. Context disambiguates. English separates these into 'good evening' and 'goodnight.'",
  'Adiós': "Literally 'to God' (a + Dios), from Late Latin 'a Deo.' Same root as French 'adieu' and Italian 'addio.' Once a prayer-laden farewell, now just 'bye.'",
  'Hasta luego': "Literally 'until later.' The default Spanish sign-off, like English 'see you.' Universal across Spain and Latin America regardless of when you'll actually see the person.",
  'Hasta mañana': "Note: 'mañana' here means tomorrow, not morning. Same word, two senses. 'La mañana' = the morning; 'mañana' alone = tomorrow.",
  'Hasta pronto': "Literally 'until soon.' Slightly warmer than 'hasta luego' — implies you actually want to see the person soon. Common on postcards and emails.",
  'Nos vemos': "Literally 'we see each other.' The reflexive 'nos' makes it mutual. Casual, shared expectation. Often paired: 'Nos vemos mañana.'",
  'Chao': "Borrowed from Italian 'ciao' via Latin American Italian immigration. Now universal informal 'bye' across Spanish-speaking countries, especially popular with young speakers.",
  '¡Que te vaya bien!': "Literally 'may it go well for you.' Subjunctive mood expresses a wish. The 'te' shifts to 'le' for formal/plural. A standard send-off when parting ways.",
  '¿Cómo estás?': "Uses 'estar' (state) not 'ser' (identity). '¿Cómo eres?' would be asking what kind of person you are — a very different question.",
  '¿Cómo está usted?': "'Usted' comes from the old 'vuestra merced' (your grace), which got compressed over centuries. That's why usted takes third-person verbs — historically you're addressing the grace itself.",
  '¿Qué tal?': "Literally 'what such.' The shortest, most casual version of 'how's it going.' Answer ranges from 'bien' to a whole story about your day.",
  'Muy bien': "In Spanish, 'muy' (very) modifies adjectives and adverbs but NEVER nouns. You can't say 'muy amigo' — you use 'mucho amigo' for nouns and 'muy' for modifying qualities.",
  'Así así': "Direct parallel with English 'so-so' and Italian 'così così.' Spanish borrowed the reduplication from Italian; many Romance languages share this exact form.",
  'Regular': "Not a cognate trap: Spanish 'regular' as an adjective means okay, mediocre, or so-so. English 'regular' means normal. Never confuse '¿cómo estás? Regular' (I'm okay) with 'I'm normal.'",
  'Por favor': "Literally 'by favor,' from the Latin sense of doing someone a favor. Usage note: Spanish speakers often skip 'por favor' with close friends and family, where it might sound too formal.",
  'Gracias': "From Latin 'gratias agere' (to give thanks). Same root as English 'grateful,' 'gratitude,' and religious 'grace.' The '-s' is plural because you give thanks_es_, not a thank.",
  'Muchas gracias': "Note the feminine 'muchas,' not 'muchos' — because 'gracias' is feminine plural. 'Muchísimas gracias' (thanks a million) uses the superlative -ísimo suffix for extra emphasis.",
  'De nada': "Literally 'of nothing' or 'it was nothing.' Spanish has many alternatives: 'no hay de qué,' 'por nada,' 'para servirte.' All convey the same modest dismissal.",
  'Perdón': "Shortened from 'perdóneme' (forgive me). Used for accidental bumps and interruptions. 'Lo siento' (I feel it) is for deeper apologies.",
  'Lo siento': "Literally 'I feel it.' Shows emotional involvement, so used for serious apologies and condolences. 'Lo siento mucho' (I feel it much) intensifies. Not used for 'excuse me' bumps.",
  'Con permiso': "Literally 'with permission.' Used when crossing in front of someone or leaving a room. Unique to Spanish: English just says 'excuse me' in both contexts.",
  'No pasa nada': "Literally 'nothing passes/happens.' The default Spanish 'no worries.' Slightly more dismissive than English 'it's fine' — implies truly unconcerned.",
  'Me llamo...': "Literally 'I call myself.' Reflexive because you're naming yourself. Compare 'yo me llamo' to the equally valid but more direct 'mi nombre es' (my name is).",
  '¿Cómo te llamas?': "The reflexive 'te' (yourself) tells you this is informal. For formal, it becomes 'se' (¿Cómo se llama usted?). The reflexive pronoun marks the register.",
  '¿Cómo se llama usted?': "'Usted' takes third-person reflexive 'se' — the same form used for he/she. That's why the verb-plus-pronoun pattern matches: se llama = he/she/you(formal) is called.",
  'Mucho gusto': "Literally 'much pleasure.' The full form is 'tengo mucho gusto en conocerte' (I have much pleasure in knowing you), universally shortened. Men can also say 'un placer.'",
  'Encantado / Encantada': "Literally 'enchanted.' The masculine/feminine agreement refers to the speaker (you), not the person being greeted. Men say 'encantado,' women 'encantada.'",
  '¿Y tú?': "The 'y' softens the deflection. Just saying '¿tú?' would sound blunt. Spanish conversational norms strongly favor this reciprocal follow-up.",
  'Soy / Eres / Es': "These are forms of 'ser,' one of two Spanish verbs for 'to be.' Ser handles identity, origin, time, profession. The other, 'estar,' handles state and location.",
  '¿De dónde eres?': "Uses 'ser' because origin is treated as identity (permanent). English 'where are you from' feels locational; Spanish treats origin as deeper than location.",
  'Soy de...': "Note the preposition 'de' (from). Spanish rarely drops this preposition — you can't say just 'soy España,' always 'soy de España.'",
  'español / española': "Lowercase when used as nationality or language, unlike English 'Spanish' which is always capitalized. Same rule applies to all Spanish nationality words.",
  'mexicano / mexicana': "In Mexico, locals often use 'mexicano' as both nationality and to mean 'of the people/common.' The x preserves the old pronunciation (closer to 'sh'), though modern pronunciation is /x/.",
  'inglés / inglesa': "Spanish doesn't distinguish English, British, or Scottish as sharply as English does. 'Inglés' often covers the whole UK in casual speech.",
  'francés / francesa': "Notice the accent on the é — without it, 'francés' would be stressed on the first syllable. Spanish written accents always mark stress that breaks the default pattern.",

  // Unit 2
  'mi': "Written without an accent. 'Mi' = possessive 'my.' 'Mí' (with accent) = prepositional 'me,' as in 'para mí' (for me). The accent makes the difference.",
  'tu': "Same accent rule as 'mi.' 'Tu' (no accent) = your. 'Tú' (with accent) = you. Spanish uses diacritics to disambiguate high-frequency homophones like these.",
  'su': "A shapeshifter — 'su' covers his, her, its, your (formal), and their. Context alone disambiguates. Spanish leans on context rather than distinct pronouns.",
  'se llama': "Reflexive verb from 'llamar' (to call). Literally 'calls himself/herself.' The same 'se' is used for formal 'usted se llama' (your name is).",
  'tengo': "From 'tener.' Used for age (tengo 25 años), hunger (tengo hambre), and physical sensations where English uses 'to be.' A high-frequency cultural translation trap.",
  'tienes': "'Tener' is irregular in the 'yo' form (tengo) but regular elsewhere: tienes, tiene, tenemos, tienen. The 'ie' diphthong appears when stressed.",
  'tiene': "Used for many expressions: tiene hambre (is hungry), tiene sed (is thirsty), tiene miedo (is afraid). Spanish treats these as possessions, not states.",
  'tengo ... años': "Literally 'I have ... years.' Spanish frames age as a possession. English 'I am X years old' uses to be; Spanish always uses tener. A core difference.",
  '¿Cuántos años tienes?': "Literally 'how many years do you have.' This plural 'años' stays plural even for one year: 'tengo un año' keeps 'años' if asking how many. A quick translation trap.",

  // Unit 3
  '¿Cuándo es tu cumpleaños?': "'Cumpleaños' literally means 'year completions' (cumplir + años). It joins the fixed plural club alongside 'gracias' and 'vacaciones.' Always plural, even for one birthday.",
  '¿De qué color es?': "Uses 'ser' because color is identity. 'Está rojo' (is red, estar) would imply the redness is a temporary state, like blushing or a mood.",
  '¿Qué hora es?': "Time uses singular 'es' for one o'clock ('es la una') and plural 'son' for every other hour ('son las dos'). The verb agrees with the count of hours.",
  'Es la una': "The only singular-verb time in Spanish. Every other hour takes 'son' + 'las' + number. A subtle grammar rule that trips up beginners.",
  'y media': "Literally 'and half.' Unlike English 'half past,' Spanish has no 'past' — just the hour plus 'y media.' The feminine 'media' agrees with the implied 'hora.'",
  'y cuarto': "Literally 'and quarter.' Masculine agreement because the implied noun is 'minuto' or simply an abstract quarter. Opposite of 'media' (feminine).",
  'rojo / roja': "Adjectives ending in -o have four forms: rojo, roja, rojos, rojas. The color agrees with the noun it describes. 'Una camisa roja' but 'un coche rojo.'",
  'blanco / blanca': "From Germanic 'blank' (shining, white), borrowed through the Goths. Same root as English 'blank' and 'blanket.' Spanish shares the Germanic layer for basic color words.",
  'negro / negra': "From Latin 'niger.' Same root as English 'Negro' (historical), 'nigrescent,' and 'Niger' (country name). In Spanish, 'negro' is the standard color word, unfreighted with the English connotations.",
  'amarillo / amarilla': "From Arabic 'al-anbarî' (amber-colored), dating to the Islamic period in Spain. Arabic loanwords for colors are relatively rare; this is one of the most common.",
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
