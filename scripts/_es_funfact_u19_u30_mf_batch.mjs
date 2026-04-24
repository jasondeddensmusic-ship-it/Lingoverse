#!/usr/bin/env node
// 38 Spanish cards u4 residual + u19-u30 using 'masc or fem' generic filler.
// Most are relative pronouns, participles, formal register phrases, or connectors.

import fs from 'node:fs';

const apply = process.argv.includes('--apply');
const GENERIC = 'Spanish nouns are either masculine or feminine. The ending usually gives it away.';

const FACTS = {
  // u4 residual
  'caliente': "Hot (temperature). From Latin 'calentem.' Refers to temperature, NOT spicy. For spicy use 'picante.' Invariable for gender but agrees in number: calientes.",

  // u19 — relative pronouns
  'los amigos de quienes te hablé': "'De quienes' = 'about whom,' relative pronoun after preposition. Spanish NEVER strands prepositions; unlike English, 'the friends whom I told you about' must keep 'de' attached to 'quienes.'",
  'las que son más caras': "'Las que' = 'the ones that' (feminine plural). Las/los/la/lo + que structures the 'the ones that' construction. Gender and number agree with the antecedent.",
  'los que quieran venir': "'Los que + subjunctive' describes a hypothetical group. 'Quieran' is present subjunctive of 'querer.' Used for indefinite or non-existent antecedents (PP subjunctive trigger).",
  'cuyo / cuya / cuyos / cuyas': "Possessive relative: 'whose.' Agrees with the thing possessed, NOT the possessor: 'el hombre cuya hija' (the man whose daughter). Sounds formal; spoken Spanish often avoids it via 'de quien.'",

  // u20 — past participles
  'hablado': "Past participle of hablar, regular -ar. Forms compound tenses with haber: 'he hablado' (I have spoken). Also used as adjective: 'un idioma hablado' (a spoken language).",
  'comido': "Past participle of comer, regular -er. Used in compound tenses: 'hemos comido' (we have eaten). Adjectival use: 'la manzana comida' (the eaten apple) agrees in gender/number.",
  'vivido': "Past participle of vivir, regular -ir. 'Hemos vivido' (we have lived). -ido endings for both -er and -ir verbs; only -ar uses -ado.",
  'hecho': "Irregular past participle of hacer. 'He hecho la tarea' (I have done the homework). Also noun 'el hecho' (the fact). Latin 'factum' — same root as English 'fact.'",
  'dicho': "Irregular past participle of decir. 'He dicho' (I have said). Also noun 'el dicho' (saying, proverb). 'Lo dicho' = 'as said.' Latin 'dictum.'",
  'escrito': "Irregular past participle of escribir. 'He escrito' (I have written). Also adjective: 'el examen escrito' (the written exam).",
  'visto': "Irregular past participle of ver. 'He visto' (I have seen). Idiom: 'por lo visto' (apparently, by what is seen).",
  'puesto': "Irregular past participle of poner. 'Me he puesto el abrigo' (I have put on my coat). Also noun: 'el puesto' (job/position, also market stall).",
  'abierto': "Irregular past participle of abrir. 'La tienda está abierta' (the store is open). Adjective use agrees: abierto/abierta. Common on storefront signs.",
  'roto': "Irregular past participle of romper. 'El vaso está roto' (the glass is broken). Adjective use agrees: roto/rota. One of nine famous irregulars.",
  'de repente': "'Suddenly.' Adverbial phrase. Paired with preterite: 'de repente llegó' (suddenly he arrived). Interruption marker in narrative, shifting imperfect setting to preterite action.",
  'los ahorros': "Savings. From 'ahorrar' (to save money). Always plural when referring to saved money. Arabic origin: from 'hurr' (free) via 'ahorrar' (to free funds from spending).",

  // u21 — passive voice
  'Los documentos fueron firmados': "Passive voice. 'Fueron' (preterite of ser) + 'firmados' (participle of firmar). Participle agrees with subject: documentos → firmados (masc. pl.). Formal register.",
  'Las ventanas fueron abiertas': "Passive, feminine plural. 'Abiertas' agrees with 'ventanas.' Spanish passive ALWAYS gender-agrees the participle. Tripping point for English learners.",
  'las fuentes': "The sources / the fountains. 'Fuente' has dual meanings: fountain (water) or source (information). In news context: 'fuentes oficiales' = official sources. From Latin 'fontem.'",

  // u23 — connectors
  'de modo que': "'So that' / 'in such a way that.' Result connector. Takes indicative when stating fact, subjunctive for purpose: 'explicó de modo que entendieron' (indicative, they did understand) vs 'explica de modo que entiendan' (subjunctive, so they will).",

  // u24 — formal letter
  'Estimado/a': "'Dear' for formal letters. Masculine 'Estimado' for a man, 'Estimada' for a woman. From 'estimar' (to esteem). More formal than English 'Dear' — reserved for business/official.",
  'Le escribo para': "'I am writing to you...' Formal letter opener. 'Le' = indirect object pronoun, formal usted. Paired with an infinitive of purpose: 'Le escribo para solicitar.'",
  'Atentamente': "'Sincerely' / 'Attentively.' Standard formal closing. Adverb from 'atento.' More formal than 'Saludos.' Equivalent to English 'Yours sincerely.'",
  'Cordialmente': "'Cordially.' Slightly warmer than 'Atentamente,' still formal. From 'cordial' (heartfelt, Latin 'cor' = heart). Usable in business emails where Atentamente feels stiff.",
  'Tengo habilidades en': "'I have skills in...' CV/cover letter phrase. 'Habilidades' from 'habil' (skilled). Followed by area: en programación, en ventas. Direct translation of resume-speak.",

  // u27 — neuter
  'lo difícil': "'The difficult thing.' Neuter article 'lo' + adjective = abstract noun. 'Lo difícil es empezar' (the difficult thing is to start). Spanish distinguishes gendered (el/la) from neuter (lo) abstracts.",
  'lo interesante': "'The interesting thing.' Same neuter pattern. Only three Spanish articles are neuter: lo, and relative pronoun 'lo que.' Used for abstracts, not concrete objects.",
  'de acuerdo con': "'According to' / 'in agreement with.' Formal prepositional phrase. 'De acuerdo con el informe' — according to the report. Citation introducer in academic/news Spanish.",

  // u28 — formal connectors
  'ademas': "'Additionally.' Formal connector. Often accented as 'además' (missing accent here in corpus). Adds supporting information. Synonym of 'también' but more formal.",
  'asimismo': "'Likewise' / 'similarly.' Formal connector combining 'así' (thus) + 'mismo' (same). Strong written register. Rarely used in speech.",
  'incluso': "'Even' / 'including.' Emphasizer. 'Incluso los niños entienden' — even the children understand. Different from 'inclusive' which means 'inclusive' as in 'inclusive of.'",
  'tampoco': "'Neither' / 'not either.' Negative parallel to 'también.' 'No voy, tampoco mi hermano' — I am not going, neither is my brother. Key structural negation word.",
  'concretamente': "'Specifically.' Formal clarifier. From 'concreto' + -mente. Used in writing to narrow a claim: 'concretamente, esto significa...' Academic register.",
  'previamente': "'Previously' / 'beforehand.' Formal time adverb. From 'previo.' Synonym of 'antes' but more formal. Used in written instructions and reports.",
  'posteriormente': "'Subsequently' / 'afterwards.' Formal counterpart to 'previamente.' From 'posterior.' 'Posteriormente se decidió' — subsequently it was decided. Passive-voice-friendly.",

  // u30 — formal letter close
  'Le saluda atentamente': "'Attentively yours.' Ultra-formal Spanish letter close. Literally 'he/she greets you attentively,' using third person impersonal. Found on official and business correspondence.",
  'las palabras clave': "Keywords. Note 'clave' stays singular despite 'palabras' being plural — acts like a compound noun. Same fixed behavior: 'los puntos clave,' 'los factores clave.'",
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
