#!/usr/bin/env node
// Dutch ver- prefix variant (17 cards).

import fs from 'node:fs';

const apply = process.argv.includes('--apply');
const GENERIC = 'The ver- prefix changes/transforms. Dutch verbs love prefixes.';

const FACTS = {
  'verkopen': "To sell. 'Ver-' + 'kopen' (to buy). The ver- prefix inverts/intensifies: kopen→verkopen mirrors buy→sell. Cognate with German 'verkaufen.'",
  'verveeld': "Bored. Past participle of 'vervelen' (to bore). 'Ver-' intensifies 'vele' (much). Literally 'over-lotted' = bored.",
  'verlegen': "Shy / embarrassed. From 'verleggen' (to displace). 'Ver-' + 'leggen' (to lay). Literally 'mis-laid' — a fitting metaphor for embarrassment.",
  'vertrekken': "To depart / to leave. 'Ver-' + 'trekken' (to pull). Literally 'to pull away.' Cognate with German 'wegziehen.'",
  'verkocht': "Sold. Past participle of 'verkopen.' Native Germanic. Common sales-sign: 'Verkocht' on a sold-sign.",
  'vertrokken': "Departed. Past participle of 'vertrekken.' Irregular participle. Transit-board vocabulary.",
  'verdrietig': "To be sad. From 'verdriet' (sadness). 'Ver-' + 'drietig.' Sadness expressed as an intensified state.",
  'verkouden': "Having a cold. From 'koud' (cold) + 'ver-.' Literally 'over-cold' = suffering from cold. 'Ik ben verkouden' (I have a cold).",
  'vergeten te': "To forget to. 'Vergeten' + 'te' + infinitive. Irregular past: 'vergeten' (forgotten). Strong verb.",
  'verboden': "Forbidden / prohibited. Past participle of 'verbieden' (to forbid). Common on signs: 'Roken verboden' (smoking forbidden).",
  'verhuizen': "To move (house). 'Ver-' + 'huizen' (to house). Literally 'to re-house.' Moving-day vocabulary.",
  'vertellen': "To tell. 'Ver-' + 'tellen' (to count/relate). The -ver intensifies to 'narrate fully.' Cognate with German 'erzählen.'",
  'verklaren': "To declare / state. 'Ver-' + 'klaar' (clear). Literally 'to make clear.' Formal explanation verb.",
  'veranderen': "To change. 'Ver-' + 'ander' (other). Literally 'to make other.' Transparent compound for transformation.",
  'verbeteren': "To improve. 'Ver-' + 'beter' (better) + 'en.' Literally 'to make better.' Productive ver- pattern.",
  'veronderstellen': "To assume / to suppose. 'Ver-' + 'onder-stellen' (to place under). Academic reasoning vocabulary.",
};

let total = 0;
const LANG_ROOT = 'src/data/dutch-v2';
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
