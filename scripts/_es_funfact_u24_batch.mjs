#!/usr/bin/env node
// 17 Spanish cards in u24 (formal workplace + job interview + opinion phrases).

import fs from 'node:fs';

const apply = process.argv.includes('--apply');
const GENERIC = 'Spanish is the fourth most spoken language worldwide, with 500+ million native speakers.';

const FACTS = {
  'Le agradezco': "Formal thanks. 'Agradecer' takes a direct object for the thing thanked: 'le agradezco su atención' (I thank you for your attention). Warmer than 'gracias' in business emails.",
  'Quedo a su disposición': "Email signoff for formal letters. Literally 'I remain at your disposal.' Standard in Spanish business communication. The 'usted' form 'su' marks the respect.",
  'Me dirijo a usted para': "Email opener. 'Me dirijo' = 'I am addressing.' The reflexive verb softens the act of writing. Common preamble before stating the purpose: 'para solicitar información.'",
  'Cuento con experiencia en': "'Contar con' = 'to have' in the sense of relying on it. CV/interview phrase for qualifications. Different from 'tengo,' which is plain possession.",
  'Considero que puedo aportar': "Interview humility. 'Aportar' means 'to contribute.' The 'considero' softens the self-promotion. Spanish tends to phrase contributions tentatively.",
  'Quedo a la espera de su respuesta': "Signoff awaiting a reply. 'A la espera' is set phrase meaning 'waiting for.' Used at the end of emails. Literally 'I remain in the wait of your response.'",
  'Hábleme de usted': "Interview opener. Note the accent on 'Hábleme' (command form). Request for self-introduction: 'tell me about yourself.' Uses 'usted' form for formality.",
  '¿Por qué quiere este puesto?': "Interview classic. 'Puesto' = position (job). Contrast with 'trabajo' (job in general). 'Puesto' emphasizes the specific role.",
  'Mis fortalezas son': "Interview phrase. 'Fortalezas' = strengths. Spanish borrows the strength/weakness framing from English HR practice. 'Debilidades' is the pair for weaknesses.",
  'Me considero una persona': "Self-description opener. 'Una persona + adjective' is common in interviews: 'una persona responsable, creativa, puntual.' Allows several qualities in one phrase.",
  'Mi área de mejora es': "Polite way to frame a weakness. 'Área de mejora' literally 'area of improvement.' Softer than 'debilidad.' Modern HR Spanish prefers this formulation.",
  'Considero que': "Opinion opener. 'Considerar que' + indicative = express a considered view. Contrast with 'creer que' which is less formal. 'Considero' adds gravity.",
  'Desde mi punto de vista': "Literally 'from my point of view.' Formal opinion marker. Common in debates and written argumentation.",
  'Estoy de acuerdo': "Agreement phrase. Note: 'de acuerdo' is fixed — never 'en acuerdo.' Spanish idioms lock prepositions tightly. 'De acuerdo con tu propuesta' (I agree with your proposal).",
  'No estoy de acuerdo': "Disagreement. Direct but professional. Softer options: 'no estoy del todo de acuerdo' (I don't entirely agree). Spanish register loves softening negatives.",
  'Respeto su opinión, pero': "Formal turn-taking. Acknowledges the other view before pushing back. Classic debate move in Spanish meetings, where direct confrontation is avoided.",
  'el/la colega': "Gender-neutral via article alone. 'Colega' stays invariant — only 'el' or 'la' changes. Same pattern as 'el/la periodista, el/la artista, el/la turista.'",
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
