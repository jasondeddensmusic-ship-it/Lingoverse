#!/usr/bin/env node
// 34 Spanish cards u11+u13+u14+u15+u16 using 'verbs encode subject' filler.

import fs from 'node:fs';

const apply = process.argv.includes('--apply');
const GENERIC = 'Spanish verbs encode the subject in their ending, so pronouns are often dropped.';

const FACTS = {
  // u11 — imperfect tense
  'caminaba': "Imperfect of caminar, yo/él/ella form (identical). Used for habitual past ('I used to walk') or ongoing past ('I was walking'). Contrast preterite 'caminé' for completed single action.",
  'iba': "Imperfect of ir (to go). One of three irregular imperfects (iba, era, veía). 'Iba al colegio' — I used to go to school. Background action in narrative.",

  // u13 — object pronouns + health
  '¿Lo quieres?': "'Do you want it?' 'Lo' is the masculine direct object pronoun. Placed BEFORE the conjugated verb. Contrast English 'want it' (after) with Spanish 'lo quieres' (before).",
  'me': "First-person reflexive/object pronoun. 'Me' = 'myself' (reflexive), 'me' (direct object), 'to/for me' (indirect object). One form, three roles — context resolves.",
  'nos': "First-person plural pronoun. Covers reflexive ('ourselves'), direct object ('us'), and indirect object ('to/for us'). Parallel to 'me' but plural.",
  'No me olvides': "'Do not forget me.' Negative tú command of olvidar. With negative commands, object pronouns go BEFORE: 'no me olvides.' With positive commands, pronouns attach AFTER: '¡olvídame!'",
  'le': "Third-person indirect object pronoun. 'Le doy el libro' (I give the book to him/her). Becomes 'se' when combined with 'lo/la': 'se lo doy' (I give it to him/her).",
  'les': "Plural of 'le.' 'Les hablo' — I speak to them. Like 'le,' changes to 'se' before 'lo/la/los/las': 'se las envío' (I send them to them).",
  'me / te / nos (indirect)': "Indirect object trio: me (to me), te (to you), nos (to us). Same form as direct objects for first and second persons — only third-person has distinct direct (lo/la) vs indirect (le).",
  'pronombre + verbo conjugado': "Structure rule: pronoun BEFORE conjugated verb. 'Lo quiero,' never 'quiero lo.' This reversed order (vs English) is one of Spanish's first major syntactic challenges.",
  'verbo + infinitivo + pronombre': "Alternative placement: 'Voy a verlo' (I'm going to see it). With infinitive constructions, pronoun can EITHER go before the first verb ('lo voy a ver') OR attach to the infinitive. Both correct.",
  'la tos': "Cough. From Latin 'tussis.' Feminine despite ending in -s consonant. Verb: 'toser' (to cough). 'Tengo tos' (I have a cough) — health framed as possession.",

  // u14 — simple future
  'hablaré': "Simple future, yo form of hablar. All regular verbs add -é, -ás, -á, -emos, -éis, -án to the INFINITIVE (not stem). Unique feature: Spanish future endings attach to the full infinitive.",
  'compraré': "Simple future of comprar, yo form. Accent on final é marks future. Distinguishes from preterite 'compré' — note different accent positions signal different tenses.",
  'comeré': "Simple future of comer. -er verbs use same endings as -ar verbs in future (unlike present where -ar and -er differ). Future is a great equalizer across conjugations.",
  'viviré': "Simple future of vivir. Note: all three conjugation groups (-ar, -er, -ir) share the same future endings. Makes future one of Spanish's easier tenses.",
  'aprenderé': "Future of aprender. Regular -er. The entire infinitive 'aprender' acts as the stem: aprender + é. No modification needed. Contrast with irregular futures (tendré, haré).",
  'escribiré': "Future of escribir. Regular -ir. All regular futures preserve the full infinitive. Irregular futures (hacer→haré, tener→tendré, poder→podré) shorten the stem.",
  'No tendré tiempo': "'I will not have time.' 'Tendré' is irregular future of tener (tendre, tendras, tendra...). Irregular futures compress the infinitive: tener → tendré, not 'teneré.'",
  'Te llamaré mañana': "Future promise. 'Te' (you) + 'llamaré' (I will call) + 'mañana' (tomorrow). Spanish simple future can express both intention and objective future.",
  '¿Me ayudarás?': "'Will you help me?' Tú future of ayudar. Soft request, same as English 'will you help me.' More polite form: '¿Podrías ayudarme?' (could you help me?).",

  // u15 — adverbs / transport
  'rápido': "Fast. Functions as both adjective ('un coche rápido' — fast car) AND adverb ('camina rápido' — walks fast). Spanish allows many adjectives to do double-duty as adverbs.",
  'hacer transbordo': "To transfer (between trains/buses). 'Trans' (across) + 'bordo' (ship's side). Originally maritime: 'transferring ship-to-ship.' Now used for all public-transport connections.",

  // u16 — conditional tense
  'Me gustaría': "'I would like.' Conditional of gustar. Polite alternative to 'quiero.' Very common for ordering and requesting. 'Me gustaría un café' — I would like a coffee.",
  'hablaría': "Conditional of hablar, yo form. All conditionals add -ía, -ías, -ía, -íamos, -íais, -ían to the infinitive. Same shape as future's stem behavior.",
  'comería': "Conditional of comer. -ería for -er verbs. Used for hypotheticals: 'comería más si tuviera hambre' (I would eat more if I were hungry).",
  'viviría': "Conditional of vivir. -iría. Used for dreams, hypotheticals: 'viviría en Madrid' (I would live in Madrid). Pairs with 'si' (if) clauses + subjunctive.",
  '¿Le importaría...?': "Polite request: 'Would it matter to you if...?' Conditional of importar + usted. Very formal. Equivalent to English 'Would you mind if...?' Useful at service counters.",
  '¿Me podría decir...?': "'Could you tell me...?' Conditional of poder + infinitive. Softer than '¿Me puede decir...?' (present tense). Conditional adds polite distance.",
  'Querría vivir en la playa': "'I would like to live at the beach.' Conditional of querer (querría) = even more polite than 'quisiera' or 'me gustaría.' Highest-register 'I would like.'",
  'Yo que tú': "'If I were you.' Idiomatic. Literally 'I that you.' Followed by conditional: 'Yo que tú, iría' (If I were you, I'd go). Advice-giving formula.",
  'Yo no haría eso': "'I wouldn't do that.' Conditional 'haría' of hacer. 'Yo' is optional but here emphatic — contrasts with an implied other. Another advice-or-contrast structure.",
  'Yo cambiaría de estrategia': "'I would change strategy.' 'Cambiar de' + noun — 'cambiar de trabajo/casa/coche.' The 'de' is idiomatic for changing among categories.",
  'Lo mejor sería': "'The best thing would be.' Neuter 'lo' + superlative + conditional of ser. 'Lo mejor sería esperar' — the best would be to wait. Advice structure.",
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
