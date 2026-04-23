#!/usr/bin/env node
// 56 Spanish cards in units 8-12 using the 'fourth most spoken' filler.
// Focus: shopping (u8), past actions (u9-10), imperfect vs preterite (u11-12).

import fs from 'node:fs';

const apply = process.argv.includes('--apply');
const GENERIC = 'Spanish is the fourth most spoken language worldwide, with 500+ million native speakers.';

const FACTS = {
  // u8 shopping
  '¿Cuánto cuesta?': "Uses 'cuánto' (how much, singular) for one item. Plural items use 'cuántan cuestan.' The verb agrees with the thing being priced, not with the buyer.",
  'Me lo llevo': "Literally 'I carry it (with) me.' Spanish shops use 'llevar' (to carry/take) where English uses 'take.' The reflexive 'me' plus direct object 'lo' makes it shop-ready.",
  'Me queda bien': "'Quedar' shifts meaning heavily with pronouns. 'Me queda' = fits me. 'Nos queda' = we have left (time/money). One of the trickiest polysemy verbs.",
  'este / esta': "'Este' points to what's near the speaker. Has four forms: este, esta, estos, estas. The neuter 'esto' refers to abstract concepts ('esto es raro').",
  'ese / esa': "'Ese' points to what's near the listener. Three spatial demonstratives: este (near me), ese (near you), aquel (far from both). English collapses this into just 'this/that.'",
  'aquel / aquella': "'Aquel' points to what's far from both speaker and listener, often also distant in time ('en aquella época' = in those days). Adds temporal distance English can't mark concisely.",
  'estos / estas': "Plural of este/esta. Keeps gender agreement. For mixed groups, masculine wins ('estos libros y mesas' — masculine estos).",
  'esos / esas': "Plural of ese/esa. Note: the neuter forms (esto, eso, aquello) never have plurals. Only the gendered forms pluralize.",
  '¿Tiene otra talla?': "Formal 'tiene' (usted form). Clerks always get addressed as usted in Spain. 'Otra' is feminine because 'talla' (size) is feminine.",

  // u9 preterite
  'ayer': "Adverb meaning yesterday. Strong preterite-tense trigger: hearing 'ayer' primes the listener for a preterite verb. 'Ayer comí' sounds natural; 'ayer comía' only in specific habit contexts.",
  '¿Qué hiciste?': "Preterite tú form of hacer. Hacer is irregular: hice, hiciste, hizo, hicimos, hicieron. The -c- changes to -z- before -o in 'hizo' for phonetic reasons.",
  '¿Qué pasó?': "Pasar here means 'to happen,' not 'to pass.' Context-dependent: 'pasar por la tienda' (to go by the shop) vs '¿qué pasó?' (what happened). Spanish pasar is as versatile as English 'to pass.'",
  '¿Con quién?': "Preposition 'con' (with) + question word 'quién' (who). Spanish can't split prepositions: 'who did you go with' must become '¿con quién fuiste?' with 'con' up front.",
  '¿Cómo fue?': "'Fue' is the preterite of ser AND of ir. Same form. Context determines: 'fue divertido' (it was fun, ser) vs 'fue a casa' (he went home, ir). One of Spanish's most beloved ambiguities.",

  // u10 narrative connectors
  'primero... luego... después': "Standard narrative sequencers. 'Primero' starts, 'luego' continues, 'después' wraps up. Very common in cooking instructions, directions, and storytelling.",

  // u11 imperfect
  'cuando era niño': "'Era' is imperfect of ser. For describing past identity/characteristics. 'Cuando era niño' is the classic imperfect trigger for childhood stories.",
  'en aquella época': "'En aquella' + time is a fixed imperfect trigger. 'Aquella' adds temporal distance, signalling the period is finished. Common in reminiscences.",
  'todos los días': "Habitual past phrase. Triggers imperfect automatically: 'todos los días comía pan' (I used to eat bread every day). For single events, Spanish would use preterite.",
  'cada verano': "'Cada' + time = repeated pattern, imperfect trigger. Same rule as 'todos los días' but for broader units. 'Cada verano íbamos a la playa.'",
  'había mucha gente': "'Había' is imperfect of 'haber' (there was/were). Always invariable: 'había una persona' and 'había muchas personas' — same form regardless of number.",
  'estaba contento/a': "Imperfect of estar for past ongoing states. 'Estaba' vs 'estuve' is a classic mini-test: imperfect for the feeling, preterite for when it started.",
  'tenía diez años': "Spanish age in the past uses imperfect: 'tenía X años.' Preterite 'tuve X años' would mean you only had that age for a moment, which is impossible — so Spanish only uses imperfect here.",
  'era grande': "'Era' imperfect of ser. For permanent-feeling past descriptions. 'Fue grande' (preterite) would imply a specific event ('the meeting was big').",
  'normalmente': "Normalmente + verb naturally pairs with imperfect when talking about habits. Ending -mente is Spanish's adverb-builder, like English -ly. From Latin 'mente' (mind).",
  'a menudo': "Literally 'at often.' Invariable adverb phrase meaning 'often.' Strong imperfect trigger in past contexts. Unlike 'normalmente,' this one doesn't come from -mente.",
  'cada mañana': "Like 'cada verano,' this is habitual. Imperfect trigger. Note: 'mañana' means morning here, not tomorrow. Context and article ('la mañana') disambiguate.",
  'mi abuela cocinaba': "Classic imperfect usage: past habit/routine. Cocinaba captures 'used to cook' repeatedly, not a single event. The -aba ending marks imperfect for -ar verbs.",
  'jugábamos en el parque': "First-person plural imperfect of jugar. Imperfect -ábamos (not preterite -amos) because 'used to play.' Accent on á distinguishes the two tenses.",
  'íbamos a la playa cada verano': "'Íbamos' is imperfect of ir (irregular). Combined with 'cada verano' for a classic habitual childhood scene. Both ir and ser have irregular imperfects: iba, era.",
  'vivíamos en un pueblo pequeño': "Vivir imperfect: vivía, vivías, vivía, vivíamos, vivíais, vivían. The -ía ending is the -er/-ir imperfect marker, always carrying a written accent.",

  // u12 preterite vs imperfect
  'Ayer comí paella.': "'Ayer' + preterite = completed single event. Classic contrast: 'ayer comí' (a specific yesterday) vs 'antes comía' (used to eat, habitual).",
  'Siempre comía paella los viernes.': "'Siempre' + imperfect = habit, often translated 'used to.' Spanish learners get drilled on this: 'siempre' triggers imperfect; 'ayer' triggers preterite.",
  'Todos los lunes estudiaba en la biblioteca.': "'Todos los + day' signals repeated weekly action. Imperfect captures the routine. Anglophones often default to preterite and get marked wrong on exams.",
  'Ayer compré un libro.': "Completed one-time action. Preterite 'compré' wraps up the event. English past simple covers both this and the imperfect 'compraba' — Spanish makes you choose.",
  'Siempre compraba libros en esa tienda.': "Imperfect for past habit. The pairing with 'siempre' (always) forces imperfect. Never 'compré' here — that would mean I bought them once and stopped.",
  'Anoche llamé a mi madre.': "Preterite + specific time marker. 'Anoche' (last night) is a sharp moment. Compare with 'antes' (before), which opens an imperfect window.",
  'Antes llamaba a mi madre cada domingo.': "'Antes' + 'cada' is double imperfect: former habit + repeated frequency. Impossible to render naturally in English past simple alone.",
  'A menudo': "A menudo works both in general statements (present) and past habits (imperfect). In past: 'a menudo estudiaba' (often studied). Cannot pair with preterite.",
  'Estaba durmiendo cuando sonó el teléfono.': "Canonical imperfect-+ preterite contrast. Background (imperfect) gets interrupted by foreground (preterite). The 'cuando' + preterite formula is everywhere in Spanish narratives.",
  'Caminaba por la calle cuando empezó a llover.': "Same pattern: caminaba (background imperfect, ongoing walk) + empezó (preterite, sudden rain). Rain interrupts walk.",
  'Cocinaba la cena cuando llegó mi hermano.': "Cooking was ongoing (imperfect); brother arriving was the interruption (preterite). Spanish forces you to mark which is which; English relies on context.",
  'Mientras estudiaba, sonó la alarma.': "'Mientras' (while) strongly triggers imperfect. It signals parallel ongoing action. The interrupting event is preterite: sonó.",
  'Mientras dormían, alguien tocó la puerta.': "Third-person plural imperfect + preterite intrusion. Same 'mientras' rule. Without 'mientras,' Spanish speakers may still mark the contrast through the tense pair alone.",
  'Hacía frío y llovía.': "Weather descriptions = imperfect. 'Hacía frío' (it was cold), 'llovía' (it was raining). Both set the scene. Preterite 'hizo frío y llovió' would be for a specific day event.",
  'Tomé el autobús.': "Preterite of tomar. 'Tomé' is the yo preterite. Like comí, bebí, salí, it uses the -í ending for -ar verbs in preterite (vs -aba in imperfect).",
  'Era de noche y no había nadie.': "Setting the scene with imperfect: 'era' (was), 'había' (there was/were). Classic storytelling opener. 'Fue de noche' would sound wrong here.",
  'Había una vez': "Spanish version of 'Once upon a time.' Uses imperfect 'había' (there was). Universal folktale opener, recognizable to every Spanish speaker.",
  'Mientras tanto': "Literally 'while so much.' Spanish narrative connector meaning 'meanwhile.' The 'tanto' intensifies. Strong imperfect trigger since it marks parallel action.",
  'En ese momento': "Deixis pointing to a specific moment in narrated time. Often signals preterite ('en ese momento llegó él') but can set up imperfect for ongoing states.",
  'Estaba nervioso antes del examen.': "Imperfect for emotional state ('estaba'), not 'estuve.' Spanish treats ongoing emotions as imperfect-territory. 'Antes del examen' locates the state in past time.",
  'Me enfadé cuando vi la cuenta.': "Double preterite: both the getting-angry and the seeing-the-bill are completed events. 'Me enfadé' marks the transition moment; imperfect would describe the ongoing anger.",
  'Tenía miedo de la oscuridad.': "Imperfect because fear was an ongoing childhood state. 'Tuve miedo' would mean one sudden scare. 'Tenía' sustains the fear across time.",
  'Me sorprendí mucho con la noticia.': "Preterite 'me sorprendí' = the moment of being surprised. Imperfect 'me sorprendía' would mean 'I was getting surprised (over and over).' The preterite fits a single news event.",
  'Me asusté cuando oí el trueno.': "Double preterite in a single event: scare moment + thunder sound. 'Cuando' here is not introducing a background scene — both verbs are punctual.",
  'Cuando era pequeño, vivía en un pueblo. Un día, mi familia se mudó a la ciudad.': "Classic story structure: imperfect sets the backdrop (era, vivía), then preterite delivers the pivotal event (se mudó). 'Un día' is a preterite signal par excellence.",
  'el/la periodista': "Ending in -ista = same form for masculine and feminine. Only the article changes: 'el periodista' (he), 'la periodista' (she). Shared with pianista, dentista, turista.",
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
