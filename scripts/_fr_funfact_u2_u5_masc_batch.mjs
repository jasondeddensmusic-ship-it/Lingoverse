#!/usr/bin/env node
// French u2-u5 masc -age/ment/isme variant (24 cards).

import fs from 'node:fs';

const apply = process.argv.includes('--apply');
const GENERIC = 'Masculine noun. Words ending in -age, -ment, -isme are usually masculine.';

const FACTS = {
  'le français': "French (the language). Masculine, as all languages in French. Named after 'France.' The adjective 'français' uses the same spelling, lowercase.",
  'un peu': "A little. Masculine 'un' + 'peu' (little, invariable). Used with uncountable: 'un peu de sucre' (a little sugar). Essential quantity modifier.",
  'un / une': "One (m/f). Also indefinite article (a/an). Dual use. 'Un' for masculine, 'une' for feminine. Unlike English, indefinite article has gender.",
  'le père': "The father. From Latin 'pater.' Same root as English 'paternal.' 'Pater' survives across Romance: French 'père,' Spanish 'padre,' Italian 'padre.'",
  'le frère': "The brother. From Latin 'frater.' Same root as English 'fraternal.' French dropped the 't' (pater→père, frater→frère) — systematic Latin → French sound shift.",
  'le fils / la fille': "The son / the daughter. 'Fils' (silent final 's'). From Latin 'filius/filia' — same Latin roots as English 'filial.' Systematic Romance heritage.",
  'le mari / la femme': "The husband / the wife. 'Mari' from Latin 'maritus.' 'Femme' from Latin 'femina' (female). Dual-use: femme means both 'wife' and 'woman.'",
  'le grand-père': "The grandfather. Compound: 'grand' (great) + 'père' (father). Literally 'great-father.' Same structure as Spanish abuelo ← Latin 'avus magnus.'",
  'le cousin / la cousine': "The cousin (m/f). From Latin 'consobrinus' heavily shortened. Feminine adds -e. English 'cousin' preserves the medieval French form.",
  'le visage': "Face. Masculine (-age ending). From 'vis' (face, Old French) + -age. Same root as English 'visage.' Formal register — daily French uses 'la figure.'",
  'le doigt': "Finger. From Latin 'digitus.' Same root as English 'digit.' Silent final 't' and 'g' — classic French silent-letter conservatism.",
  'le cou': "Neck. From Latin 'collum.' Very short word in French. Compare Italian 'collo,' Spanish 'cuello' — French most reduced.",
  'le genou': "Knee. Irregular plural: 'les genoux' (with -x, not -s). One of seven French nouns taking -x plural: bijou, caillou, chou, genou, hibou, joujou, pou.",
  'le thé': "Tea. From Chinese 'ch'a' via Malay 'teh' via Dutch 'thee.' Acute accent on 'é' because of the single syllable stress.",
  'le beurre': "Butter. From Latin 'butyrum.' Double 'r' because of the sound environment. English 'butter' shares the root.",
  'le fromage': "Cheese. Masculine (-age). From Latin 'caseus forma' (cheese form). The 'forma' part won in French, losing 'caseus.' English 'cheese' kept the other half.",
  'le pain': "Bread. From Latin 'panis.' Same root as Spanish 'pan,' Italian 'pane.' Silent final 'n' in French. Central to French cuisine: baguette, pain de mie, pain complet.",
  'le petit déjeuner': "Breakfast. Literally 'small breakfast.' 'Déjeuner' originally meant 'to break fast.' French later moved déjeuner to mean lunch, making breakfast 'le petit déjeuner.'",
  'le poisson': "Fish. From Latin 'piscis.' Double 's' reflects the double consonant. Related to Spanish 'pescado,' Italian 'pesce.' Same Pisces root.",
  "le jus d'orange": "Orange juice. 'Jus' (juice) + 'd' (of, elided) + 'orange.' 'Orange' originally from Arabic 'naranj' via Persian. Came to Europe through Arab trade.",
  'le lait': "Milk. From Latin 'lac/lactis.' Same root as English 'lactose,' 'lactation.' Short French form; Spanish 'leche,' Italian 'latte' kept more.",
  'le vin': "Wine. From Latin 'vinum.' Short because of French's tendency to reduce. Same root as English 'vino,' 'vintage.' Central to French culture and language.",
  'le matin / le soir': "In the morning / in the evening. 'Matin' from Latin 'matutinus' (of the morning). 'Soir' from Latin 'sero' (late). Day-phase vocabulary.",
  'le printemps': "Spring (season). Compound: 'prin' (first) + 'temps' (time). Literally 'first-time/season.' Indicates the year's beginning.",
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
