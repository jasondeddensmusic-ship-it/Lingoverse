#!/usr/bin/env node
// French u22-u25 30% variant (45 cards).

import fs from 'node:fs';

const apply = process.argv.includes('--apply');
const GENERIC = 'French gave English roughly 30% of its vocabulary. Many formal English words have French origins.';

const FACTS = {
  // u22 — connectors + subjunctive triggers
  'Grace a': "Thanks to (missing accent should be 'Grâce à'). Gratitude-marker preposition.",
  'Par consequent': "Consequently. Par (by) + conséquent. Formal result-marker.",
  "C'est pourquoi": "That's why. Fixed phrase. Result-indicator.",
  'Si bien que': "So much that / so that. Result connector. Takes indicative.",
  'Bien que + subjonctif': "Although + subjunctive. Bien que always triggers subjunctive. Concessive.",
  'Pour que + subjonctif': "In order that + subjunctive. Purpose clause. Subjunctive mandatory.",
  'Afin que + subjonctif': "So that + subjunctive. More formal than 'pour que.' Same purpose meaning.",
  'Pour + infinitif': "In order to + infinitive. Used when subjects match. Simpler than 'pour que.'",
  'A condition que + subjonctif': "Provided that + subjunctive. Conditional connector.",
  'Pourvu que + subjonctif': "Provided that / as long as + subjunctive. Similar to à condition que.",
  'A moins que + subjonctif': "Unless + subjunctive. Negative conditional. Requires 'ne' expletive in formal French.",
  'Tandis que': "Whereas / while. Contrast connector. Takes indicative.",
  'Alors que': "Whereas / while (contrast). Duplicates tandis que. Context varies.",
  'Autant que': "As much as. Comparison. Takes indicative or subjunctive.",
  'En outre': "Moreover / furthermore. Formal additive connector.",

  // u23 — business vocab
  "l'entreprise (f.)": "Company / enterprise. Fem. Same Latin root as English 'enterprise.' Business vocabulary.",
  'le/la collègue': "Colleague. Same for both genders; article differentiates. Cognate with English 'colleague.'",
  "l'entretien (m.)": "Interview / maintenance. Dual use: job interview AND car/building maintenance.",
  'Madame, Monsieur,': "Dear Madam/Sir, Formal letter opening. Comma mandatory.",
  'Veuillez trouver ci-joint': "Please find enclosed. Imperative veuillez (from vouloir) = polite 'please.' Business formula.",
  'Suite à notre conversation': "Following our conversation. Suite à + noun. Letter opener referencing prior contact.",
  'Pourquoi ce poste vous intéresse-t-il?': "Why does this position interest you? Interview question. Inverted with -t- euphonic.",
  'Quelles sont vos qualités?': "What are your strengths? Quelles (fem pl) agrees with qualités.",
  'Parlez-moi de votre expérience.': "Tell me about your experience. Imperative formal. Standard interview prompt.",
  'Quand pouvez-vous commencer?': "When can you start? Inverted polite question.",
  'Avez-vous des questions?': "Do you have questions? Standard interview-ender.",

  // u25 — subjunctive past
  "que j'aie mangé": "That I have eaten. Past subjunctive: subjunctive of avoir + participle. Used with doubt/emotion triggers.",
  'que tu aies fini': "That you have finished. Second-person past subjunctive.",
  "qu'il ait compris": "That he has understood. Third-person past subjunctive.",
  "qu'elle soit partie": "That she has left. Être-auxiliary past subjunctive. Agreement: partie (fem).",
  'avant que + subjonctif': "Before + subjunctive. Always triggers subjunctive. Temporal.",
  'bien que + subjonctif': "Although + subjunctive. Reinforces u22. Concessive.",
  'pour que + subjonctif': "Purpose + subjunctive. Reinforces.",
  'sans que + subjonctif': "Without + subjunctive. Also takes ne expletive in formal register.",
  'à condition que + subjonctif': "Provided + subjunctive. Reinforces u22.",
  "J'ai peur qu'il ait oublié.": "I'm afraid he has forgotten. Fear + past subjunctive.",
  'avant de + infinitif': "Before + infinitive. Used when subjects match (otherwise avant que + subj).",
  'après avoir / après être + participe passé': "After + past infinitive. Matched-subject structure. Complex but systematic.",
  'quoi que': "Whatever. Pronoun + subjunctive. Quoi que tu fasses (whatever you do).",
  'où que': "Wherever. Où que tu ailles (wherever you go). Same subjunctive trigger.",
  'qui que': "Whoever. Qui que ce soit (whoever it may be). Formal.",
  'quoique + subjonctif': "Although. ONE word (not two). Synonym of 'bien que.' Both take subjunctive.",
  "Bien qu'il ait échoué, je veux qu'il réessaie.": "Although he failed, I want him to try again. Stacked subjunctive clauses.",
  "Pour qu'il réussisse, il faut qu'il ait travaillé sérieusement.": "For him to succeed, he must have worked seriously. Two subjunctive clauses stacked.",
  "Quoiqu'elle soit fatiguée, il faut qu'elle ait terminé avant minuit.": "Although she is tired, she must have finished before midnight. Complex subjunctive stacking.",
};

let total = 0;
const LANG_ROOT = 'src/data/french-v2';
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
