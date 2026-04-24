#!/usr/bin/env node
// 23 Spanish cards u11 (animals/family story) + u12 (professions) using masculine -o filler.

import fs from 'node:fs';

const apply = process.argv.includes('--apply');
const GENERIC = 'Masculine noun. Spanish words ending in -o are usually masculine.';

const FACTS = {
  // u11 — family memory / pets / animals
  'el abuelo contaba historias': "'Contaba' is imperfect of contar, used for habitual past actions — the grandfather 'used to tell' stories repeatedly. Preterite 'contó' would mean one specific time.",
  'el perro': "Dog. From Pre-Roman Iberian origin — one of the few Spanish words NOT from Latin. Latin 'canis' survives only in formal Spanish 'can' (rare). 'Perro' replaced it centuries ago.",
  'el gato': "Cat. From Latin 'cattus.' Same root as English 'cat' and French 'chat.' Spanish idiom: 'dar gato por liebre' (to give cat for hare) = to deceive.",
  'el pájaro': "Bird. From Latin 'passer' (sparrow), narrowed then broadened to all birds. 'Pajaro' meant sparrow in Roman Spain; folk speech extended it.",
  'el pez': "Fish (live). 'El pez' = swimming fish. 'El pescado' = caught/cooked fish. Spanish distinguishes what English lumps together. From Latin 'piscis' (same root as 'Pisces').",
  'el conejo': "Rabbit. From Latin 'cuniculus.' Same root as the scientific name. Spain's name possibly comes from Phoenician 'i-shapan-im' (land of rabbits) — later Latinized to Hispania.",
  'el caballo': "Horse. From Latin 'caballus' (working horse), not 'equus' (noble horse). Spanish chose the workhorse term — same root as English 'cavalier' and 'chivalry.'",
  'el cerdo': "Pig. From Latin 'cirrus' (curly, referring to curly tail). Same animal has multiple Spanish names: cerdo, puerco, chancho (LATAM), marrano, cochino — each with register shade.",
  'el león': "Lion. From Latin 'leonem.' Accent on ó marks stress. León is also a Spanish city and the name of a medieval kingdom — heraldic lion on its coat of arms.",
  'el oso': "Bear. From Latin 'ursus.' Same root as English 'ursine.' Idiom: 'hacer el oso' (to make the bear) = to embarrass oneself.",
  'el zoológico': "Zoo. From Greek 'zoo' (animal) + 'logos' (study) + -ico (relating to). Spanish preserves the longer form; colloquially 'el zoo' is also fine.",

  // u12 — professions / career vocabulary
  'El lunes pasado estudié todo el día.': "'El lunes pasado' uses 'el' as day marker. 'Estudie' preterite — completed action. 'Todo el dia' — all day. Pattern: time + preterite + duration.",
  'El restaurante estaba lleno de gente.': "'Estaba' (imperfect of estar) — background state. 'Lleno de gente' — full of people. Imperfect describes scenes; preterite narrates events within them.",
  'Un día': "'One day' — preterite narrative opener. 'Un dia llegó un extraño' (one day a stranger arrived). Sets up a specific past event.",
  'el enfermero / la enfermera': "Nurse. From 'enfermo' (sick) + -ero (one who handles). Literally 'one who handles the sick.' Professions ending in -o/-a pair masc/fem forms.",
  'el policía / la policía': "Police officer. One of few professions where the article alone distinguishes gender — 'policia' stays identical. Same root as English 'police,' from Greek 'politeia.'",
  'el bombero / la bombera': "Firefighter. From 'bomba' (pump) + -ero. Literally 'the pump-operator' — named after fire pumps. Same root as English 'bomb,' but unrelated semantically.",
  'el cocinero / la cocinera': "Cook. From 'cocina' (kitchen) + -ero. The profession suffix -ero is highly productive: panadero, carnicero, librero, zapatero.",
  'el ingeniero / la ingeniera': "Engineer. From Latin 'ingenium' (ingenuity, clever device). Same root as English 'engine' and 'ingenuity.' Engineers were originally 'ingenious-device makers.'",
  'el abogado / la abogada': "Lawyer. From Latin 'advocatus' (one called to help). Same root as English 'advocate.' Still means 'one who speaks for another' in court.",
  'el conductor / la conductora': "Driver. From Latin 'conducere' (to lead together). In Spain = also bus/train driver. In Latin America often = also TV presenter (who 'conducts' a show).",
  'el farmacéutico / la farmacéutica': "Pharmacist. From Greek 'pharmakia.' Note accent on é — mandatory in Spanish. The adjective 'farmacéutico' also means 'pharmaceutical.'",
  'el cantante / la cantante': "Singer. From 'cantar' (to sing). Note: -ante endings are invariable in gender (like 'estudiante,' 'paciente'). Only the article changes.",
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
