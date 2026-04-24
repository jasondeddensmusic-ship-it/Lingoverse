#!/usr/bin/env node
// French u8-u11 verb-conjugation (~47 cards).

import fs from 'node:fs';

const apply = process.argv.includes('--apply');
const GENERIC = 'French verbs change form for each person. The spoken forms are often simpler than the written ones.';

const FACTS = {
  'Je le/la prends': "I take it. Le masc / la fem object pronoun placed BEFORE the verb (unlike English). Prendre is irregular.",
  "j'ai mangé": "I ate. Passé composé. Avoir + past participle mangé. French present-perfect serves for simple past too.",
  'tu as parlé': "You spoke. Passé composé with avoir. Regular -er: parl- + -é. Most French verbs use avoir as auxiliary.",
  'il a regardé': "He watched. Same pattern. Regarder is regular -er. Film/TV vocab.",
  'nous avons travaillé': "We worked. Nous avons + participle. Double-consonant travaillé keeps the original stem.",
  'ils ont écouté': "They listened. Ils + ont + écouté. Liaison: ils-ont-écouté sounds continuous.",
  'vous avez voyagé': "You traveled. Voyager keeps e before a (voyageons, not voyagons) to preserve soft g.",
  'elles ont dansé': "They (fem) danced. Feminine plural elles.",
  'il y a + time': "Ago. Il y a + duration = X ago. Il y a trois jours = three days ago. Different sense than il y a = there is.",
  "je n'ai pas mangé": "I did not eat. Negation wraps auxiliary: ne + ai + pas. Participle stays after.",
  "il n'a pas compris": "He did not understand. Irregular past participle compris (from comprendre).",
  "nous n'avons pas vu": "We did not see. Irregular vu (past participle of voir). Short form.",
  'je suis allé(e)': "I went. Aller is one of few verbs using être, not avoir. Participle agrees: allé (m) / allée (f).",
  'elle est arrivée': "She arrived. Arriver uses être. Feminine subject: arrivée with double -e.",
  'il est parti': "He left. Partir is être-auxiliary. Motion verbs generally take être.",
  'nous sommes restés': "We stayed. Rester takes être. Plural: restés (m pl) or restées (f pl).",
  'elle est sortie': "She went out. Sortir être-auxiliary. Feminine agreement: -ie.",
  'ils sont partis': "They left. Masc plural: partis. Ils is masculine default.",
  'elles sont venues': "They (fem) came. Venir être-aux. Fem plural: venues.",
  'je me suis levé(e)': "I got up. Reflexive verbs ALL use être. Me + suis + levé(e).",
  "elle s'est couchée": "She went to bed. Reflexive + être. Participle agrees: couchée for feminine.",
  'ils se sont réveillés': "They woke up. Reflexive + être. Masc plural agreement: réveillés.",
  'je suis resté(e) à la maison': "I stayed at home. Full sentence with être-aux. Agreement in parentheses.",
  'je mangeais': "I was eating / used to eat. Imperfect. -ais for je/tu. Ongoing/habitual past.",
  'il faisait beau': "The weather was nice. Classic imperfect for weather/background.",
  'nous habitions': "We lived / were living. Imperfect -ions for nous. Background-past setting.",
  'tu avais': "You had. Irregular imperfect of avoir. Stem av- + -ais.",
  'elle finissait': "She was finishing. Imperfect of finir (-ir). -issait in 3rd person.",
  'ils vendaient': "They were selling. Imperfect of vendre (-re). -aient for 3rd plural.",
  'il faisait froid': "It was cold. Weather + imperfect. Faire is versatile.",
  'elle était contente': "She was happy. Être + imperfect + feminine agreement.",
  'il y avait': "There was / there were. Imperfect of il y a. Background existence.",
  "Quand j'étais petit(e)...": "When I was small. Imperfect opener for childhood. Gender in parens.",
  'Je dormais quand le téléphone a sonné.': "I was sleeping when the phone rang. Imperfect (background) + passé composé (event).",
  'Elle était fatiguée.': "She was tired. Imperfect + feminine agreement. State not event.",
  'Il a commencé à pleuvoir.': "It started to rain. Passé composé = specific moment. Contrast il pleuvait.",
  'Je cuisinais quand il est rentré.': "I was cooking when he came home. Same pattern. Core French narrative.",
  "Elle était contente parce qu'elle a réussi.": "She was happy because she succeeded. Mixes imperfect + passé composé.",
  'lui': "To him/her. Indirect object pronoun. Placed before verb. Works for both genders.",
  'leur': "To them. Indirect object pronoun, plural. Does NOT change for gender.",
  'y': "There / to it. Pronominal adverb replacing a place. J'y vais = I'm going there.",
  'en': "Some / of it. Partitive pronoun. J'en veux = I want some of it.",
  'Je vais le faire.': "I'm going to do it. Near-future: aller + infinitive. Le between vais and faire.",
  'Donne-le-moi!': "Give it to me. Imperative with double pronoun. Hyphenated in positive imperatives.",
  'Il me le donne.': "He gives it to me. Double pronoun. Me (indirect) + le (direct) before verb.",
  'Je le lui ai dit.': "I told it to him/her. Passé composé with both pronouns.",
  "Je m'en occupe.": "I'll take care of it. Reflexive s'occuper + en. Common in service context.",
  'la toux': "The cough. Feminine. Silent final x. From Latin tussis.",
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
