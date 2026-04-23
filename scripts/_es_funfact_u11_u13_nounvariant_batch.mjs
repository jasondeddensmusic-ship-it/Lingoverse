#!/usr/bin/env node
// 22 Spanish cards u11-u13 in 'masc/fem' variant.
// u11: imperfect verb forms. u12: narrative markers. u13: direct-object pronouns.

import fs from 'node:fs';

const apply = process.argv.includes('--apply');
const GENERIC = 'Spanish nouns are either masculine or feminine. The ending usually gives it away.';

const FACTS = {
  'de pequeño/a': "'De pequeño/a' = 'as a child, when little.' Gender agrees with the speaker. Classic imperfect-triggering phrase: 'de pequeño jugaba mucho' (when little, I played a lot).",
  'hablaba': "Imperfect of hablar, yo form. -aba ending for -ar verbs. Note: yo and él/ella share the same form (both 'hablaba'). Context or subject pronoun disambiguates.",
  'jugaba': "Imperfect of jugar. Despite being a u→ue stem-changing verb in present (juego), imperfect stays regular (jugaba). Stem changes live only in the present tense.",
  'estudiaba': "Imperfect of estudiar. All three -ar imperfect forms written exactly as the infinitive + -aba ending. One of Spanish's cleanest tenses.",
  'comía': "Imperfect of comer. -er/-ir verbs take -ía (with accent). Accent on the í is obligatory — marks stress and distinguishes from the preterite.",
  'vivía': "Imperfect of vivir. Same -ía ending as comía. -er and -ir verbs share the imperfect endings, while -ar has its own set.",
  'leía': "Imperfect of leer. Double vowel: 'le' + 'ía' → 'leía.' Spanish phonology preserves both vowels; it doesn't contract them as English would.",
  'tenía': "Imperfect of tener. Regular in imperfect despite being irregular elsewhere (tengo, tuve). Very high-frequency for past states: 'tenía hambre' (I was hungry).",
  'escribía': "Imperfect of escribir. -ir verb with regular imperfect. Note the accent on í preserves the pronunciation stress across all yo/tú/él/ella forms.",
  'era': "Imperfect of ser. Highly irregular (doesn't follow -ía pattern). Forms: era, eras, era, éramos, erais, eran. Also one of the few with a plural nosotros accent: éramos.",
  'veía': "Imperfect of ver. Interestingly, keeps the e from the Old Spanish infinitive 'veer.' Forms look like a regular -er imperfect. Never loses the accent.",
  'hacía calor': "Weather + imperfect. Spanish uses 'hacer' (make) for weather: 'hacía calor' (it was hot). Never 'estaba caliente' (that would mean the thing is hot to the touch).",
  'los fines de semana': "Habitual past marker. 'Los fines de semana' (on weekends) triggers imperfect for repeated habit. Contrast with 'el fin de semana pasado' (last weekend, specific → preterite).",
  'De pequeno viajaba mucho.': "Classic imperfect-with-childhood. 'De pequeño' (written de pequeño with ñ) + imperfect for 'as a child, I used to.' Universal Spanish childhood-memoir opener.",
  'De repente': "'Suddenly.' Narrative pivot marker. Often introduces a preterite interruption into imperfect background: 'estaba tranquilo cuando, de repente, sonó el teléfono.'",
  'Entonces': "'Then, so.' Multi-use: sequential ('entonces fuimos a casa'), causal ('si no viene, entonces cancelamos'), filler ('entonces... ¿qué hacemos?'). The accent distinguishes from 'entonces' without accent.",
  'lo': "Direct-object pronoun for masculine singular things or men. 'Lo veo' = I see it/him. Also the neuter pronoun for abstractions: 'lo importante es esto.'",
  'la': "Direct-object pronoun for feminine singular things or women. 'La veo' = I see it/her. Note: same form as the feminine definite article, distinguished by position.",
  'los': "Direct-object pronoun for masculine plural. 'Los veo' = I see them (all male or mixed gender). Default masculine in mixed groups.",
  'las': "Direct-object pronoun for feminine plural. 'Las veo' = I see them (all female). Strict gender agreement — mixing with masculine requires 'los.'",
  'estar + gerundio + pronombre': "Pronoun placement: attach to the gerund OR put before estar. 'Estoy haciéndolo' OR 'Lo estoy haciendo' — both correct. When attached, add accent to preserve stress.",
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
