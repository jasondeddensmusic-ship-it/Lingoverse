#!/usr/bin/env node
// 24 Spanish cards u18-u30 using 'verbs encode subject' filler.

import fs from 'node:fs';

const apply = process.argv.includes('--apply');
const GENERIC = 'Spanish verbs encode the subject in their ending, so pronouns are often dropped.';

const FACTS = {
  // u18 — commands
  'oiga': "Polite 'Excuse me' (literally 'listen,' usted form of oír). Used to get attention in formal contexts. Informal equivalent: 'oye.' One of Spanish's core politeness markers.",

  // u19 — idioms / relatives
  'confiar en': "To trust (in). 'Confiar' requires 'en' before its object: 'confío en ti' (I trust you). English drops the preposition; Spanish insists on it. Productive pattern with other verbs.",
  'no entiendo lo que dices': "'I don't understand what you are saying.' 'Lo que' = 'what' as a relative pronoun (invariable). Used to link abstract content: 'dime lo que piensas' (tell me what you think).",
  'lo que más me gusta': "'What I like most.' Structure: lo que + más/menos + gustar. Common way to express preferences. 'Lo que mas me gusta es leer' (what I like most is to read).",

  // u20 — grammar vocab
  'el participio pasado': "Past participle. Grammar term. Used in compound tenses (he hablado) and as adjective (hablado). Regular: -ado for -ar, -ido for -er/-ir. Nine major irregulars.",
  'el préstamo': "Loan (word or money). From 'prestar' (to lend). In linguistics: 'prestamos del ingles' (loans from English). Also financial: banco loans. Same word, two domains.",

  // u21 — passive / se
  'Se habla español': "Impersonal 'se' + 3rd-person verb = 'Spanish is spoken' / 'We speak Spanish.' Common on store signs. The 'se' avoids specifying who speaks.",
  'Se venden casas': "'Houses for sale.' Passive 'se' + plural verb agrees with plural subject. 'Se venden,' not 'se vende,' because 'casas' is plural. Real-estate sign staple.",
  'Se necesitan profesores': "'Teachers needed.' Same plural passive-se pattern. Classified-ad vocabulary. Spanish employers use this construction heavily for job postings.",
  'Se dice que': "'It is said that' / 'They say.' Impersonal-se opener for hearsay or general knowledge. 'Se dice que va a llover' (it is said it will rain).",

  // u22 — gerund / progressive
  'el gerundio': "The gerund. Formed by adding -ando (-ar verbs) or -iendo (-er/-ir). Used with estar for progressive: 'estoy hablando.' Spanish gerund is NEVER used as noun (unlike English '-ing').",
  'Estamos estudiando': "Present progressive. 'Estar' + gerund = ongoing action. Limited use in Spanish — unlike English, simple present covers both 'I study' and 'I am studying.' Progressive only for vivid immediacy.",
  'Siguen hablando': "'They continue talking.' 'Seguir' + gerund = 'keep doing.' One of several verbs (seguir, ir, venir, andar) that take the gerund for continuous or progressing actions.",

  // u24 — work vocabulary
  'el trabajo': "Work / job. From 'trabajar' (to work, from Latin 'tripaliare' — to torture). Job word with literal torture etymology, shared with French 'travail.'",
  'la entrevista': "Interview. From 'entre' (between) + 'vista' (sight). Literally 'between-sight' — the idea of two people looking at each other. Used for both job and press interviews.",
  'conciliar trabajo y vida personal': "'To balance work and personal life.' 'Conciliar' = to reconcile. Modern Spanish social-policy vocabulary. Spain coined 'conciliación laboral' for work-life balance policy.",

  // u25 — subjunctive triggers
  'para que pudiera': "'So that he/she could.' 'Para que' + imperfect subjunctive. 'Pudiera' = imperfect subjunctive of poder. Used for past purpose: 'vino para que pudiera hablar' (he came so I could speak).",

  // u27 — abstracts
  'la posibilidad de': "The possibility of. Followed by infinitive: 'la posibilidad de viajar.' Or by 'que' + subjunctive: 'la posibilidad de que venga.' Triggers subjunctive after 'que' because possibility is uncertain.",

  // u30 — academic / study skills
  'inferir del contexto': "'To infer from context.' Academic reading skill. 'Inferir' from Latin 'inferre' (to bring in). Used in language-learning pedagogy for guessing word meaning.",
  'apoyar con evidencia': "'To support with evidence.' Essay-writing phrase. 'Apoyar' = to support (physically or argumentatively). Cognate with English 'appoggiatura' (musical support).",
  'tomar apuntes': "To take notes. 'Apuntes' (plural) from 'apuntar' (to point, jot down). Literally 'to take the jot-downs.' Academic essential vocabulary.",
  'captar el sentido general': "'To grasp the general meaning.' Reading skill. 'Captar' from Latin 'captare' (to catch). Same root as English 'capture.' Cognitive-capture metaphor.",
  'de haberlo sabido': "'If I had known.' Perfect infinitive construction — 'de' + infinitive form of haber + participle. Literary shorthand for 'si lo hubiera sabido' (conditional perfect).",
  'seguir aprendiendo': "'To keep learning.' Seguir + gerund pattern. Motto-worthy phrase for the final unit — continued learning beyond B2. Imperative form: '¡sigue aprendiendo!'",
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
