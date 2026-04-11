#!/usr/bin/env node
/**
 * Enrich teach cards with funFact where missing.
 * Generates contextual funFact based on word properties:
 * - Dutch-English/German cognate connections
 * - Compound word breakdowns
 * - Etymology from note text
 * - Generic language family connections
 *
 * Usage: node scripts/enrich_funfacts.cjs <lang> [--dry-run]
 */
const fs = require('fs');
const path = require('path');

const lang = process.argv[2];
const dryRun = process.argv.includes('--dry-run');

if (!lang || !['nl','fr','es'].includes(lang)) {
  console.error('Usage: node scripts/enrich_funfacts.cjs <nl|fr|es> [--dry-run]');
  process.exit(1);
}

const dirMap = { nl: 'dutch-v2', fr: 'french-v2', es: 'spanish-v2' };
const dir = path.resolve(__dirname, '..', 'src', 'data', dirMap[lang]);

// ── Dutch compound patterns ──
const NL_COMPOUNDS = {
  'goedemorgen': 'goede (good) + morgen (morning)',
  'goedemiddag': 'goede (good) + middag (midday)',
  'goedenavond': 'goede (good) + avond (evening)',
  'goedenacht': 'goede (good) + nacht (night)',
  'alsjeblieft': 'als (if) + je (you) + belieft (please)',
  'alstublieft': 'als (if) + het u (it you) + belieft (please)',
  'dankjewel': 'dank (thanks) + je (you) + wel (well)',
  'dankuwel': 'dank (thanks) + u (you) + wel (well)',
  'huiswerk': 'huis (house) + werk (work)',
  'hoofdstad': 'hoofd (head/main) + stad (city)',
  'vliegtuig': 'vlieg (fly) + tuig (equipment)',
  'ziekenhuis': 'zieken (sick ones) + huis (house)',
  'verjaardagstaart': 'verjaardag (birthday) + taart (cake)',
  'verjaardag': 'ver (passing) + jaar (year) + dag (day)',
  'werkgever': 'werk (work) + gever (giver)',
  'werknemer': 'werk (work) + nemer (taker)',
  'schooljaar': 'school (school) + jaar (year)',
  'speelgoed': 'speel (play) + goed (good/goods)',
  'ontbijt': 'ont (un) + bijt (bite) = breakfast = breaking fast',
  'handschoen': 'hand (hand) + schoen (shoe) = glove = hand-shoe',
  'schildpad': 'schild (shield) + pad (toad) = turtle = shield-toad',
  'stofzuiger': 'stof (dust) + zuiger (sucker) = vacuum cleaner',
  'koelkast': 'koel (cool) + kast (cabinet) = refrigerator',
  'boekenplank': 'boeken (books) + plank (shelf)',
  'eettafel': 'eet (eat) + tafel (table)',
  'slaapkamer': 'slaap (sleep) + kamer (room)',
  'badkamer': 'bad (bath) + kamer (room)',
  'woonkamer': 'woon (live) + kamer (room)',
  'tuinstoel': 'tuin (garden) + stoel (chair)',
  'tandenborstel': 'tanden (teeth) + borstel (brush)',
  'zwembad': 'zwem (swim) + bad (bath)',
  'voetbal': 'voet (foot) + bal (ball)',
  'basketbal': 'basket (basket) + bal (ball)',
  'woordenboek': 'woorden (words) + boek (book)',
  'telefoon': 'from Greek tele (far) + phone (voice)',
  'fiets': 'velocipede shortened to fietse in Dutch',
  'trein': 'from English train',
  'bibliotheek': 'from Greek biblio (book) + theke (chest)',
};

// ── Common Dutch-English cognate patterns ──
function generateDutchFunFact(trg, src, note, pos) {
  const w = (trg || '').toLowerCase().trim();
  const en = (src || '').toLowerCase().trim();
  const n = (note || '').toLowerCase();

  // Check compound dictionary
  if (NL_COMPOUNDS[w]) {
    return `COMPOUND: ${NL_COMPOUNDS[w]}. Dutch loves building words from parts.`;
  }

  // Check if note already mentions a compound pattern (goede + morgen, etc.)
  const compMatch = (note || '').match(/(\w+)\s*\+\s*(\w+)\s*=\s*(\w+)/);
  if (compMatch) {
    return `COMPOUND: ${compMatch[1]} + ${compMatch[2]}. Dutch compounds are transparent once you learn the parts.`;
  }

  // Check for obvious cognates
  if (w === en || w.replace(/[- ]/g, '') === en.replace(/[- ]/g, '')) {
    return `Identical in Dutch and English. The Germanic family connection is crystal clear.`;
  }

  // Very similar words (differ by 1-2 chars)
  const similarity = getSimilarity(w, en);
  if (similarity > 0.7 && w.length > 3) {
    return `Close cousin of English '${en}'. Both languages inherited this from their shared Germanic roots.`;
  }

  // Article-stripped noun comparisons
  const bareW = w.replace(/^(de|het|een)\s+/, '');
  const bareEn = en.replace(/^(the|a|an)\s+/, '');
  if (bareW === bareEn || getSimilarity(bareW, bareEn) > 0.7 && bareW.length > 3) {
    return `Germanic cousin of English '${bareEn}'. Dutch and English are sister languages.`;
  }

  // German connections from note text
  if (n.includes('german') || n.includes('deutsch')) {
    return `Connected to German through their shared West Germanic ancestry.`;
  }

  // Verb patterns
  if (pos === 'verb') {
    if (w.match(/^(be|ver|ont|her|ge)/)) {
      const prefix = w.match(/^(be|ver|ont|her|ge)/)[1];
      const prefixMeaning = { be: 'makes transitive', ver: 'changes/transforms', ont: 'un-/de-', her: 're-/again', ge: 'past participle prefix' };
      return `The ${prefix}- prefix ${prefixMeaning[prefix] || 'modifies the meaning'}. Dutch verbs love prefixes.`;
    }
    if (w.includes(' ')) {
      const parts = w.split(' ');
      if (parts.length === 2 && parts[0].match(/^(ik|jij|hij|zij|wij|u)$/)) {
        return `${parts[0]} + ${parts[1]}: Dutch verb conjugation follows regular patterns once you learn the stem.`;
      }
    }
    return `Dutch verbs follow the stem + ending pattern. Find the stem, add the right ending.`;
  }

  // Noun with article
  if (pos === 'noun' && w.match(/^(de|het)\s/)) {
    const article = w.startsWith('het ') ? 'het' : 'de';
    if (article === 'het') {
      return `A het-word (neuter). About 1/3 of Dutch nouns use 'het'. No reliable rule, learn it with the word.`;
    } else {
      return `A de-word (common gender). About 2/3 of Dutch nouns use 'de'. All plurals always use 'de'.`;
    }
  }

  // Adjectives
  if (pos === 'adj') {
    return `Dutch adjectives add -e before de-words but stay bare before het-words: 'de grote man' vs 'het groot huis'.`;
  }

  // Prepositions
  if (pos === 'prep') {
    return `Dutch prepositions are key building blocks. Many combine with verbs to create new meanings.`;
  }

  // Numbers
  if (pos === 'num') {
    if (getSimilarity(w, en) > 0.5) {
      return `Related to English '${en}'. Germanic number words are ancient cousins.`;
    }
    return `Dutch numbers follow Germanic patterns. After 20, the ones come before the tens (like German).`;
  }

  // Adverbs
  if (pos === 'adv') {
    return `Common in everyday Dutch. Position in the sentence follows the V2 rule: verb stays second.`;
  }

  // Conjunctions
  if (pos === 'conj') {
    return `Word order matters: some conjunctions keep normal order, others push the verb to the end.`;
  }

  // Pronouns
  if (pos === 'pron') {
    return `Dutch has stressed and unstressed forms for most pronouns. The unstressed form is more common in speech.`;
  }

  // Default: language family connection
  return `Dutch and English are the closest major language pair in the world. Many words share common roots.`;
}

// ── French funFact generator ──
function generateFrenchFunFact(trg, src, note, pos) {
  const w = (trg || '').toLowerCase().trim();
  const en = (src || '').toLowerCase().trim();
  const n = (note || '').toLowerCase();

  // Check cognate patterns
  const bareW = w.replace(/^(le|la|l'|les|un|une|des)\s+/, '');
  const bareEn = en.replace(/^(the|a|an)\s+/, '');

  if (getSimilarity(bareW, bareEn) > 0.6 && bareW.length > 3) {
    return `Cognate with English '${bareEn}'. Many English words were borrowed from French after 1066.`;
  }

  // French-English borrowings
  if (bareW === bareEn) {
    return `Same word in both languages. English borrowed thousands of words from French.`;
  }

  // Verb patterns
  if (pos === 'verb') {
    if (w.match(/er$/)) return `A regular -er verb, the most common French verb group (~90% of all verbs).`;
    if (w.match(/ir$/)) return `A -ir verb. Many follow the -ir pattern with -iss- in plural forms.`;
    if (w.match(/re$/)) return `A -re verb, the smallest of the three regular verb groups.`;
    return `French verbs change form for each person. The spoken forms are often simpler than the written ones.`;
  }

  // Noun with gender
  if (pos === 'noun') {
    if (w.startsWith('le ') || w.startsWith('un ')) return `Masculine noun. Words ending in -age, -ment, -isme are usually masculine.`;
    if (w.startsWith('la ') || w.startsWith('une ')) return `Feminine noun. Words ending in -tion, -sion, -ure are usually feminine.`;
    return `French nouns are either masculine or feminine. The article gives it away.`;
  }

  if (pos === 'adj') return `French adjectives agree in gender and number with their noun. Most add -e for feminine.`;
  if (pos === 'prep') return `French prepositions often contract with articles: à + le = au, de + le = du.`;
  if (pos === 'adv') return `French adverbs often end in -ment (like English -ly), formed from the feminine adjective.`;
  if (pos === 'num') return `French numbers are mostly regular, except 70-99 which use a base-20 system from Celtic roots.`;
  if (pos === 'pron') return `French pronouns change form based on their function: subject, direct object, or indirect object.`;
  if (pos === 'conj') return `French conjunctions affect the mood of the following verb. Some trigger the subjunctive.`;

  return `French gave English roughly 30% of its vocabulary. Many formal English words have French origins.`;
}

// ── Spanish funFact generator ──
function generateSpanishFunFact(trg, src, note, pos) {
  const w = (trg || '').toLowerCase().trim();
  const en = (src || '').toLowerCase().trim();
  const n = (note || '').toLowerCase();

  const bareW = w.replace(/^(el|la|los|las|un|una|unos|unas)\s+/, '');
  const bareEn = en.replace(/^(the|a|an)\s+/, '');

  if (getSimilarity(bareW, bareEn) > 0.6 && bareW.length > 3) {
    return `Cognate with English '${bareEn}'. Spanish and English share many Latin-derived words.`;
  }

  if (bareW === bareEn) {
    return `Same word in both languages. Latin roots connect Spanish and English.`;
  }

  if (pos === 'verb') {
    if (w.match(/ar$/)) return `A regular -ar verb, the largest Spanish verb group. Learn this pattern and you unlock hundreds of verbs.`;
    if (w.match(/er$/)) return `A -er verb. The second most common Spanish verb pattern.`;
    if (w.match(/ir$/)) return `A -ir verb. Similar conjugation to -er verbs with a few differences.`;
    return `Spanish verbs encode the subject in their ending, so pronouns are often dropped.`;
  }

  if (pos === 'noun') {
    if (w.startsWith('el ') || w.startsWith('un ')) return `Masculine noun. Spanish words ending in -o are usually masculine.`;
    if (w.startsWith('la ') || w.startsWith('una ')) return `Feminine noun. Spanish words ending in -a are usually feminine.`;
    return `Spanish nouns are either masculine or feminine. The ending usually gives it away.`;
  }

  if (pos === 'adj') return `Spanish adjectives agree in gender and number. Most change -o/-a for gender and add -s for plural.`;
  if (pos === 'prep') return `Spanish prepositions combine with articles: a + el = al, de + el = del.`;
  if (pos === 'adv') return `Spanish adverbs often end in -mente (like English -ly), formed from the feminine adjective form.`;
  if (pos === 'num') return `Spanish numbers are straightforward. Gender only matters for 'uno/una' and hundreds (doscientos/doscientas).`;
  if (pos === 'pron') return `Spanish usually drops subject pronouns because the verb ending tells you who's speaking.`;
  if (pos === 'conj') return `Spanish conjunctions are essential for building longer sentences and expressing complex ideas.`;

  return `Spanish is the fourth most spoken language worldwide, with 500+ million native speakers.`;
}

// ── Similarity helper ──
function getSimilarity(a, b) {
  if (!a || !b) return 0;
  const longer = a.length > b.length ? a : b;
  const shorter = a.length > b.length ? b : a;
  if (longer.length === 0) return 1;
  const editDist = levenshtein(a, b);
  return (longer.length - editDist) / longer.length;
}

function levenshtein(a, b) {
  const matrix = [];
  for (let i = 0; i <= b.length; i++) matrix[i] = [i];
  for (let j = 0; j <= a.length; j++) matrix[0][j] = j;
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b[i-1] === a[j-1]) matrix[i][j] = matrix[i-1][j-1];
      else matrix[i][j] = Math.min(matrix[i-1][j-1]+1, matrix[i][j-1]+1, matrix[i-1][j]+1);
    }
  }
  return matrix[b.length][a.length];
}

// ── Main ──
const generators = { nl: generateDutchFunFact, fr: generateFrenchFunFact, es: generateSpanishFunFact };
const generate = generators[lang];

const files = fs.readdirSync(dir).filter(f => /^unit-\d+\.js$/.test(f)).sort();
let totalAdded = 0;

for (const file of files) {
  const filePath = path.join(dir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  let modified = content;
  let added = 0;

  // Find teach cards without funFact and add one
  // Pattern: type:"teach",trg:"...",src:"...",pos:"...",gender:...,...}  (no funFact field)
  modified = modified.replace(/(\{type:"teach"[^}]*?)(\})/g, (match, before, closing) => {
    // Skip if already has funFact
    if (before.includes('funFact:')) return match;

    // Extract fields
    const trgMatch = before.match(/trg:"([^"]*)"/);
    const srcMatch = before.match(/src:"([^"]*)"/);
    const posMatch = before.match(/pos:"([^"]*)"/);
    const noteMatch = before.match(/note:"((?:[^"\\]|\\.)*)"/);

    if (!trgMatch || !srcMatch) return match;

    const trg = trgMatch[1];
    const src = srcMatch[1];
    const pos = posMatch ? posMatch[1] : 'noun';
    const note = noteMatch ? noteMatch[1].replace(/\\n/g, '\n').replace(/\\"/g, '"') : '';

    const funFact = generate(trg, src, note, pos);
    if (!funFact) return match;

    const escaped = funFact.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
    added++;
    totalAdded++;

    // Insert funFact before closing brace
    return before + ',funFact:"' + escaped + '"' + closing;
  });

  if (added > 0 && !dryRun) {
    fs.writeFileSync(filePath, modified);
  }
  if (added > 0) console.log(`${file}: ${added} funFacts added`);
}

console.log(`\nTotal: ${totalAdded} funFacts added to ${lang} units`);
if (dryRun) console.log('[DRY RUN] No files were modified.');
