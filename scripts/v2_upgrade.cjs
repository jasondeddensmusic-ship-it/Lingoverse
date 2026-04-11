#!/usr/bin/env node
/**
 * V2 Upgrade Script — Transforms V1 language units to V2 format
 *
 * Usage: node scripts/v2_upgrade.cjs <lang> [--dry-run]
 *   lang: nl, fr, es
 *
 * Steps:
 * 1. Reads monolith units file
 * 2. Filters to valid units (has n, lessons, steps)
 * 3. For each teach card:
 *    - Renames nl→trg, en→src, exampleEn→exampleSrc
 *    - Assigns pos from kind field + word patterns
 *    - Assigns gender (language-specific)
 *    - Converts cognate objects to funFact text
 *    - Adds board:true to lessons
 *    - Adds srcLang:"en" to units
 * 4. Splits into per-unit files: src/data/{lang}-v2/unit-NN.js
 * 5. Creates level wrapper files and main re-export
 */
const fs = require('fs');
const path = require('path');

const lang = process.argv[2];
const dryRun = process.argv.includes('--dry-run');

if (!lang || !['nl','fr','es'].includes(lang)) {
  console.error('Usage: node scripts/v2_upgrade.cjs <nl|fr|es> [--dry-run]');
  process.exit(1);
}

// ── Config per language ──
const LANG_CONFIG = {
  nl: {
    file: 'units-dutch.js',
    langCode: 'nl',
    langName: 'Dutch',
    genderSystem: 'de_het', // de-words = common (c), het-words = neuter (n)
    outDir: 'dutch-v2',
    levelDistribution: { A1: [1,6], A2: [7,10], B1: [11,20], B2: [21,30] }
  },
  fr: {
    file: 'units-french.js',
    langCode: 'fr',
    langName: 'French',
    genderSystem: 'm_f', // masculine/feminine
    outDir: 'french-v2',
    levelDistribution: { A1: [1,8], A2: [9,16], B1: [17,24], B2: [25,30] }
  },
  es: {
    file: 'units-spanish.js',
    langCode: 'es',
    langName: 'Spanish',
    genderSystem: 'm_f',
    outDir: 'spanish-v2',
    levelDistribution: { A1: [1,8], A2: [9,16], B1: [17,24], B2: [25,30] }
  }
};

const config = LANG_CONFIG[lang];
const srcDir = path.resolve(__dirname, '..', 'src', 'data');

// ── Load units ──
console.log(`Loading ${config.file}...`);
// We'll parse the file directly since require may have issues with ESM
const filePath = path.join(srcDir, config.file);

// For parsing, we'll use a dynamic import approach
// But first let's check file size
const fileSize = fs.statSync(filePath).size;
console.log(`File size: ${(fileSize/1024/1024).toFixed(2)} MB`);

// ── Kind to POS mapping ──
function kindToPos(kind, word, note, enTranslation) {
  if (!kind) return 'noun'; // default
  const k = kind.toLowerCase();
  if (k === 'verb' || k === 'verbs') return 'verb';
  if (k === 'adj' || k === 'adjective') return 'adj';
  if (k === 'adv' || k === 'adverb') return 'adv';
  if (k === 'prep' || k === 'preposition') return 'prep';
  if (k === 'conj' || k === 'conjunction') return 'conj';
  if (k === 'pron' || k === 'pronoun') return 'pron';
  if (k === 'num' || k === 'number') return 'num';
  if (k === 'intj' || k === 'interjection') return 'intj';
  if (k === 'part' || k === 'particle') return 'part';
  if (k === 'aux') return 'aux';

  const w = (word || '').toLowerCase().trim();
  const n = (note || '').toLowerCase();
  const en = (enTranslation || '').toLowerCase();

  // ── Check interjections FIRST before verb heuristics ──
  // (prevents "goedemorgen" = "good morning" from matching -en verb rule)
  if (en.match(/^(hello|hi|hey|goodbye|bye|sorry|please|thank|welcome|cheers|wow|yes|no|okay|oh|good morning|good afternoon|good evening|good night|see you|how are you|nice to meet|thank you|excuse me|i'm sorry|you're welcome|no problem|of course|come in|have fun|bon voyage|buen viaje)/i)) return 'intj';
  if (n.includes('greeting') || n.includes('farewell') || n.includes('exclamation') || n.includes('apolog')) return 'intj';

  // ── VERBS (high priority — many verbs disguised as "word"/"phrase") ──
  // Note mentions verb/conjugation/stam/infinitive
  if (n.includes('verb') || n.includes('conjugat') || n.includes('infinitive') || n.includes('stam')) return 'verb';
  // Dutch: bare verbs (eten, doen, gaan, staan, willen, kunnen, mogen, etc.)
  if (lang === 'nl' && !w.includes(' ') && w.match(/[a-z]en$/) && !w.match(/^(de|het|een)$/)) return 'verb';
  // Dutch: conjugated forms like "ik werk", "hij is", "wij zijn", "jij bent"
  if (lang === 'nl' && w.match(/^(ik|jij|hij|zij|wij|jullie|u)\s/)) return 'verb';
  // French verbs: -er, -ir, -re endings (bare infinitive)
  if (lang === 'fr' && !w.includes(' ') && w.match(/(er|ir|re|oir)$/)) return 'verb';
  // French conjugated: je suis, tu es, il est, etc.
  if (lang === 'fr' && w.match(/^(je|tu|il|elle|nous|vous|ils|elles|j')\s/)) return 'verb';
  // Spanish verbs: -ar, -er, -ir endings
  if (lang === 'es' && !w.includes(' ') && w.match(/(ar|er|ir)$/)) return 'verb';
  // Spanish conjugated
  if (lang === 'es' && w.match(/^(yo|tú|él|ella|usted|nosotros|vosotros|ellos|ellas|ustedes)\s/)) return 'verb';
  // English translation starts with "to " → verb
  if (en.match(/^to\s/)) return 'verb';

  // ── NOUNS (with article) ──
  if (w.match(/^(de|het|een)\s/) && lang === 'nl') return 'noun';
  if (w.match(/^(le|la|l'|les|un|une|des)\s/) && lang === 'fr') return 'noun';
  if (w.match(/^(el|la|los|las|un|una|unos|unas)\s/) && lang === 'es') return 'noun';
  if (n.includes('-word') || n.includes('noun') || n.includes('plural:')) return 'noun';

  // ── PRONOUNS ──
  if (n.includes('pronoun') || n.includes('subject pronoun') || n.includes('object pronoun')) return 'pron';
  // Dutch pronoun words
  const nlPronouns = ['ik','jij','je','hij','zij','ze','het','wij','we','jullie','u','dit','dat','deze','die','zich','mij','me','hem','haar','ons','hen','hun','wie','wat','waar','iets','niets','iemand','niemand','alles','veel','weinig','elk','elke','alle','zelf'];
  const frPronouns = ['je','tu','il','elle','nous','vous','ils','elles','on','me','te','se','le','la','les','lui','leur','moi','toi','soi','ce','ceci','cela','qui','que','dont','où'];
  const esPronouns = ['yo','tú','él','ella','usted','nosotros','nosotras','vosotros','vosotras','ellos','ellas','ustedes','me','te','se','nos','os','lo','la','le','los','las','les'];
  const pronounList = lang === 'nl' ? nlPronouns : lang === 'fr' ? frPronouns : esPronouns;
  if (!w.includes(' ') && pronounList.includes(w)) return 'pron';

  // ── CONJUNCTIONS ──
  if (n.includes('conjunction') || n.includes('connector') || n.includes('links') && n.includes('contrasts')) return 'conj';
  const conjWords = {nl: ['en','maar','of','want','dus','als','dat','omdat','hoewel','terwijl','toen','voordat','nadat','totdat','zodra','tenzij','ofwel','noch','zowel'],
                     fr: ['et','mais','ou','donc','car','ni','or','que','si','comme','quand','lorsque','puisque','parce','bien','quoique','pendant'],
                     es: ['y','e','o','u','pero','sino','porque','pues','aunque','cuando','mientras','ni','que','como','si']};
  if (!w.includes(' ') && (conjWords[lang]||[]).includes(w)) return 'conj';

  // ── PREPOSITIONS ──
  if (n.includes('preposition')) return 'prep';
  const prepWords = {nl: ['in','op','aan','bij','met','van','voor','naar','tot','uit','over','door','onder','boven','tussen','achter','naast','zonder','tegen','langs','rond','om','sinds','tijdens','via','per','na'],
                     fr: ['à','de','en','dans','sur','sous','avec','sans','pour','par','vers','chez','entre','devant','derrière','pendant','depuis','contre','après','avant','selon','malgré'],
                     es: ['a','de','en','con','sin','por','para','sobre','bajo','entre','hacia','hasta','desde','según','contra','durante','ante','tras']};
  if (!w.includes(' ') && (prepWords[lang]||[]).includes(w)) return 'prep';

  // ── ADJECTIVES ──
  if (n.includes('adjective') || n.includes('adj')) return 'adj';
  // English translations that are clearly adjectives
  if (en.match(/^(big|small|good|bad|new|old|young|tall|short|long|fast|slow|hot|cold|warm|cool|happy|sad|nice|beautiful|ugly|easy|hard|difficult|important|interesting|boring|cheap|expensive|free|busy|tired|hungry|thirsty|sick|healthy|clean|dirty|wet|dry|full|empty|open|closed|dark|light|quiet|loud|strong|weak|rich|poor|safe|dangerous|ready|possible|different|same|certain|true|false|whole|simple|complex)$/)) return 'adj';

  // ── ADVERBS ──
  if (n.includes('adverb')) return 'adv';
  const advWords = {nl: ['niet','ook','al','nog','nu','dan','hier','daar','er','wel','heel','erg','zeer','altijd','nooit','soms','vaak','al','toch','zeker','misschien','graag','liever','meestal','eigenlijk','natuurlijk','precies','ongeveer','bijna','pas','net','steeds','telkens','ooit'],
                    fr: ['ne','pas','très','bien','mal','aussi','encore','déjà','jamais','toujours','souvent','parfois','ici','là','maintenant','puis','ensuite','vraiment','trop','assez','peu','beaucoup','plus','moins'],
                    es: ['no','muy','bien','mal','también','ya','aún','todavía','nunca','siempre','aquí','allí','ahora','luego','después','antes','bastante','demasiado','poco','mucho','más','menos']};
  if (!w.includes(' ') && (advWords[lang]||[]).includes(w)) return 'adv';

  // ── NUMBERS ──
  if (n.includes('number') || n.includes('counting') || n.includes('memorize') && en.match(/^(one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|thirteen|fourteen|fifteen|sixteen|seventeen|eighteen|nineteen|twenty|thirty|forty|fifty|sixty|seventy|eighty|ninety|hundred|thousand|first|second|third|\d)/i)) return 'num';

  // ── INTERJECTIONS (additional word lists) ──
  const intjWords = {nl: ['hallo','hoi','hey','dag','doei','dank','sorry','alsjeblieft','pardon','ja','nee','oké','welkom','proost','gefeliciteerd'],
                     fr: ['bonjour','salut','merci','pardon','excusez','oui','non','bienvenue','bravo','bonsoir','coucou','félicitations'],
                     es: ['hola','adiós','gracias','perdón','disculpa','sí','no','bienvenido','bienvenida','felicidades','salud','vale','bueno']};
  if (!w.includes(' ') && (intjWords[lang]||[]).includes(w)) return 'intj';

  // ── PARTICLES ──
  if (n.includes('particle')) return 'part';

  // ── Multi-word phrases ──
  // Greetings/farewells as phrases
  if (en.match(/(good morning|good afternoon|good evening|good night|see you|goodbye|how are you|nice to meet|thank you|excuse me|i'm sorry|you're welcome|no problem|of course|come in|have fun|bon voyage|buen viaje)/i)) return 'intj';

  // Grammar constructs (e.g., "Zijn vs Hebben")
  if (w.includes(' vs ') || w.includes(' vs. ')) return 'verb';
  if (k === 'grammar' && n.includes('stam')) return 'verb';
  if (k === 'grammar') return 'part'; // grammar items default to particle

  // ── Fallback: if it has no article and no spaces → try to guess ──
  if (!w.includes(' ')) {
    // Single word without article in a language with articles → likely not a noun
    // Could be adj, adv, or other. Default to noun as safest.
    return 'noun';
  }

  // Multi-word with article → noun
  if (w.match(/^(de|het|een|le|la|l'|un|une|el|los|las)\s/)) return 'noun';

  // Multi-word phrase → likely interjection/expression
  return 'intj';
}

// ── Gender extraction ──
function extractGender(word, note, lang) {
  const w = (word || '').toLowerCase().trim();
  const n = (note || '').toLowerCase();

  if (lang === 'nl') {
    // Dutch: de-words = common gender (c), het-words = neuter (n)
    if (w.startsWith('het ')) return 'n';
    if (w.startsWith('de ')) return 'c';
    if (n.includes("het-word") || n.includes("'het'")) return 'n';
    if (n.includes("de-word") || n.includes("'de'")) return 'c';
    return null;
  }

  if (lang === 'fr') {
    if (w.startsWith('le ') || w.startsWith("l'")) {
      // Could be m or f with l' elision
      if (w.startsWith('le ')) return 'm';
      if (n.includes('masculine') || n.includes('masc')) return 'm';
      if (n.includes('feminine') || n.includes('fem')) return 'f';
      return 'm'; // l' defaults to m unless noted
    }
    if (w.startsWith('la ')) return 'f';
    if (w.startsWith('un ')) return 'm';
    if (w.startsWith('une ')) return 'f';
    if (w.startsWith('les ') || w.startsWith('des ')) return 'pl';
    if (n.includes('masculine')) return 'm';
    if (n.includes('feminine') || n.includes('fem')) return 'f';
    return null;
  }

  if (lang === 'es') {
    if (w.startsWith('el ')) return 'm';
    if (w.startsWith('la ')) return 'f';
    if (w.startsWith('un ')) return 'm';
    if (w.startsWith('una ')) return 'f';
    if (w.startsWith('los ') || w.startsWith('las ')) return 'pl';
    if (n.includes('masculine') || n.includes('masc')) return 'm';
    if (n.includes('feminine') || n.includes('fem')) return 'f';
    return null;
  }

  return null;
}

// ── Cognate to funFact ──
function cognatesToFunFact(cognate, word, existingFunFact) {
  if (existingFunFact) return existingFunFact;
  if (!cognate || !cognate.words || cognate.words.length === 0) return null;

  const family = cognate.family || 'indoeuropean';
  const cousins = cognate.words.map(w => `${w.lang} '${w.word}'`).join(', ');

  const familyNames = {
    germanic: 'Germanic',
    romance: 'Romance',
    indoeuropean: 'Indo-European',
    borrowed: 'borrowed',
    turkic: 'Turkic'
  };

  const familyName = familyNames[family] || family;

  if (family === 'borrowed') {
    return `A borrowed word — related to ${cousins}.`;
  }

  return `${familyName} cousin of ${cousins}.`;
}

// ── Transform a single step ──
function transformStep(step) {
  if (step.type !== 'teach') return step;

  const s = { ...step };

  // Field renames
  if (s.nl !== undefined && s.trg === undefined) {
    s.trg = s.nl;
    delete s.nl;
  }
  if (s.en !== undefined && s.src === undefined) {
    s.src = s.en;
    delete s.en;
  }
  if (s.exampleEn !== undefined && s.exampleSrc === undefined) {
    s.exampleSrc = s.exampleEn;
    delete s.exampleEn;
  }

  // Assign POS
  if (!s.pos) {
    s.pos = kindToPos(s.kind, s.trg, s.note, s.src);
  }

  // Assign gender (only for nouns)
  if (s.gender === undefined) {
    if (s.pos === 'noun') {
      s.gender = extractGender(s.trg, s.note, lang);
    } else {
      s.gender = null;
    }
  }

  // Convert cognate to funFact
  if (s.cognate && !s.funFact) {
    s.funFact = cognatesToFunFact(s.cognate, s.trg, s.funFact);
  }

  // Remove V1-only fields
  delete s.kind;
  delete s.cognate;
  delete s.fRef;
  // Keep: phonetic, also, deepDive, board, article

  return s;
}

// ── Transform quiz steps (rename nl/en in pairs, etc.) ──
function transformQuizStep(step) {
  const s = { ...step };

  // Match pairs: nl→trg, en→src
  if (s.pairs) {
    s.pairs = s.pairs.map(p => {
      const np = { ...p };
      if (np.nl !== undefined && np.trg === undefined) { np.trg = np.nl; delete np.nl; }
      if (np.en !== undefined && np.src === undefined) { np.src = np.en; delete np.en; }
      return np;
    });
  }

  // FB: sEn→sSrc
  if (s.sEn !== undefined && s.sSrc === undefined) {
    s.sSrc = s.sEn;
    delete s.sEn;
  }

  // MC: qEn→qSrc
  if (s.qEn !== undefined && s.qSrc === undefined) {
    s.qSrc = s.qEn;
    delete s.qEn;
  }

  // Verb table rows
  if (s.groups) {
    s.groups = s.groups.map(g => ({
      ...g,
      rows: (g.rows || []).map(r => {
        const nr = { ...r };
        if (nr.en !== undefined && nr.src === undefined) { nr.src = nr.en; delete nr.en; }
        return nr;
      })
    }));
  }

  return s;
}

// ── Serialize a step to JS ──
function serializeValue(val, indent = 0) {
  if (val === null) return 'null';
  if (val === undefined) return 'undefined';
  if (typeof val === 'boolean') return val.toString();
  if (typeof val === 'number') return val.toString();
  if (typeof val === 'string') {
    // Use double quotes, escape inner quotes and backslashes
    const escaped = val
      .replace(/\\/g, '\\\\')
      .replace(/"/g, '\\"')
      .replace(/\n/g, '\\n');
    return `"${escaped}"`;
  }
  if (Array.isArray(val)) {
    if (val.length === 0) return '[]';
    // Simple arrays of strings: inline
    if (val.every(v => typeof v === 'string') && val.length <= 6) {
      return '[' + val.map(v => serializeValue(v)).join(',') + ']';
    }
    // Arrays of objects: each on own line
    const items = val.map(v => serializeValue(v, indent + 2));
    if (items.every(i => i.length < 120) && items.join(',').length < 200) {
      return '[' + items.join(',') + ']';
    }
    const pad = ' '.repeat(indent + 2);
    return '[\n' + items.map(i => pad + i).join(',\n') + '\n' + ' '.repeat(indent) + ']';
  }
  if (typeof val === 'object') {
    const entries = Object.entries(val).filter(([k, v]) => v !== undefined);
    if (entries.length === 0) return '{}';
    const parts = entries.map(([k, v]) => {
      const key = k.match(/^[a-zA-Z_$][a-zA-Z0-9_$]*$/) ? k : `"${k}"`;
      return `${key}:${serializeValue(v, indent + 2)}`;
    });
    const inline = '{' + parts.join(',') + '}';
    if (inline.length < 140) return inline;
    const pad = ' '.repeat(indent + 2);
    return '{\n' + parts.map(p => pad + p).join(',\n') + '\n' + ' '.repeat(indent) + '}';
  }
  return String(val);
}

function serializeStep(step, indent = 8) {
  const pad = ' '.repeat(indent);
  // Order fields logically
  const fieldOrder = [
    'type', 'title', 'desc', 'goals', // intro
    'speaker', 'mood', 'art', // story
    'trg', 'src', 'pos', 'gender', 'phonetic', 'also', // teach core
    'note', 'example', 'exampleSrc', 'funFact', // teach content
    'deepDive', // teach extra
    'text', // tip
    'groups', // verb_table
    'q', 'opts', 'ans', 'hint', 'qSrc', // mc
    's', 'a', 'sSrc', // fb
    'blanks', 'pool', // drag_fill
    'pairs', // match
    'mk', 'dir', // tr
    'board', 'xp', 'id', 'icon', 'label'
  ];

  const orderedEntries = [];
  const stepKeys = Object.keys(step);

  // Add in order
  for (const key of fieldOrder) {
    if (step[key] !== undefined) {
      orderedEntries.push([key, step[key]]);
    }
  }
  // Add any remaining keys not in fieldOrder
  for (const key of stepKeys) {
    if (!fieldOrder.includes(key) && step[key] !== undefined) {
      orderedEntries.push([key, step[key]]);
    }
  }

  const parts = orderedEntries.map(([k, v]) => {
    const key = k.match(/^[a-zA-Z_$][a-zA-Z0-9_$]*$/) ? k : `"${k}"`;
    return `${key}:${serializeValue(v, indent)}`;
  });

  const inline = pad + '{' + parts.join(',') + '}';
  if (inline.length < 160) return inline;
  return pad + '{' + parts.join(',') + '}';
}

function serializeUnit(unit, unitNum) {
  const u = unit;
  const pad = '  ';

  let out = `// Unit ${unitNum} — ${u.title}\n`;
  out += `// ${u.sub || ''}\n\n`;
  out += `export default `;
  out += `{n:${u.n},lang:"${u.lang}",srcLang:"${u.srcLang || 'en'}",track:"v2",title:${serializeValue(u.title)},sub:${serializeValue(u.sub || '')},icon:${serializeValue(u.icon || '📚')},level:${serializeValue(u.level)},color:${serializeValue(u.color || '#7B5EE8')},lessons:[\n`;

  for (let li = 0; li < u.lessons.length; li++) {
    const lesson = u.lessons[li];
    out += `${pad}{id:${serializeValue(lesson.id)},title:${serializeValue(lesson.title)},icon:${serializeValue(lesson.icon || '📖')},xp:${lesson.xp || 15},board:true,steps:[\n`;

    for (let si = 0; si < lesson.steps.length; si++) {
      const step = lesson.steps[si];
      out += serializeStep(step) + (si < lesson.steps.length - 1 ? ',\n' : '\n');
    }

    out += `${pad}]}` + (li < u.lessons.length - 1 ? ',\n' : '\n');
  }

  out += `]};\n`;
  return out;
}

// ── Main execution ──
async function main() {
  // Dynamic import for ESM module
  const tempFile = path.join(__dirname, '_temp_import.mjs');
  fs.writeFileSync(tempFile, `
    import units from '../src/data/${config.file}';
    import { writeFileSync } from 'fs';
    writeFileSync('${path.join(__dirname, '_temp_units.json').replace(/\\/g, '/')}', JSON.stringify(units));
  `);

  console.log('Importing units via ESM...');
  const { execSync } = require('child_process');
  try {
    execSync(`node --experimental-vm-modules "${tempFile}"`, {
      cwd: path.resolve(__dirname, '..'),
      stdio: 'pipe'
    });
  } catch(e) {
    // Try alternative: just require with createRequire
    console.log('ESM import failed, trying alternative...');
    // Write a CJS wrapper
    const cjsTemp = path.join(__dirname, '_temp_loader.cjs');
    fs.writeFileSync(cjsTemp, `
      const { register } = require('module');
      const { pathToFileURL } = require('url');
      // Simple approach: read file, extract data
      const content = require('fs').readFileSync('${filePath.replace(/\\/g, '/')}', 'utf8');
      // Strip export default and trailing semicolons
      let data = content.replace(/^export\\s+default\\s+/m, 'module.exports = ');
      require('fs').writeFileSync('${path.join(__dirname, '_temp_cjs.cjs').replace(/\\/g, '/')}', data);
    `);
    try {
      execSync(`node "${cjsTemp}"`, { cwd: path.resolve(__dirname, '..'), stdio: 'pipe' });
      // Now we need to handle imports in the file
    } catch(e2) {
      console.log('Alternative also failed. Using regex parse approach.');
    }
  }

  // Clean approach: use esbuild or just parse directly
  // Let's use the node eval approach
  console.log('Using eval-based loader...');

  const rawContent = fs.readFileSync(filePath, 'utf8');

  // Transform to be evaluable
  let evalContent = rawContent;
  // Remove import statements
  evalContent = evalContent.replace(/^import\s+.*$/gm, '');
  // Replace export default with assignment
  evalContent = evalContent.replace(/export\s+default\s+/, 'var __units__ = ');
  // Wrap in function to avoid global pollution
  const evalScript = `(function() { ${evalContent}; return __units__; })()`;

  let units;
  try {
    units = eval(evalScript);
  } catch(e) {
    console.error('Failed to parse units file:', e.message);
    console.log('Trying with Function constructor...');
    try {
      const fn = new Function(evalContent + '; return __units__;');
      units = fn();
    } catch(e2) {
      console.error('Also failed:', e2.message);
      process.exit(1);
    }
  }

  console.log(`Loaded ${units.length} raw entries`);

  // Filter valid units
  const validUnits = units.filter(u => u && u.n !== undefined && u.lessons && u.lessons.length > 0);
  console.log(`Valid units: ${validUnits.length}`);

  // ── Transform all steps ──
  let teachCount = 0, cogMigrated = 0, posAssigned = 0, genderAssigned = 0;

  for (const unit of validUnits) {
    unit.srcLang = unit.srcLang || 'en';
    unit.track = 'v2';

    for (const lesson of unit.lessons) {
      lesson.board = true;

      for (let i = 0; i < lesson.steps.length; i++) {
        const step = lesson.steps[i];

        if (step.type === 'teach') {
          const transformed = transformStep(step);
          lesson.steps[i] = transformed;
          teachCount++;
          if (step.cognate) cogMigrated++;
          if (!step.pos) posAssigned++;
          if (!step.gender && transformed.gender) genderAssigned++;
        } else if (['mc','fb','drag_fill','match','verb_table','tr'].includes(step.type)) {
          lesson.steps[i] = transformQuizStep(step);
        }
      }
    }
  }

  console.log(`\nTransformed ${teachCount} teach cards:`);
  console.log(`  Cognates → funFact: ${cogMigrated}`);
  console.log(`  POS assigned: ${posAssigned}`);
  console.log(`  Gender assigned: ${genderAssigned}`);

  if (dryRun) {
    console.log('\n[DRY RUN] Would create files but stopping here.');
    // Show a sample
    if (validUnits.length > 0) {
      const sample = validUnits[0].lessons[0].steps.find(s => s.type === 'teach');
      if (sample) {
        console.log('\nSample transformed teach card:');
        console.log(JSON.stringify(sample, null, 2));
      }
    }
    return;
  }

  // ── Create output directory ──
  const outDir = path.join(srcDir, config.outDir);
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  // ── Write per-unit files ──
  for (const unit of validUnits) {
    const num = String(unit.n).padStart(2, '0');
    const unitFile = path.join(outDir, `unit-${num}.js`);
    const content = serializeUnit(unit, unit.n);
    fs.writeFileSync(unitFile, content);
    console.log(`  Written: unit-${num}.js (${unit.lessons.length} lessons)`);
  }

  // ── Write per-level wrapper files ──
  const levels = config.levelDistribution;
  for (const [level, [start, end]] of Object.entries(levels)) {
    const levelUnits = validUnits.filter(u => u.n >= start && u.n <= end);
    const levelFile = path.join(srcDir, `units-${config.outDir}-${level.toLowerCase()}.js`);

    let imports = '';
    let exports = 'export default [';
    const names = [];

    for (const u of levelUnits) {
      const num = String(u.n).padStart(2, '0');
      const varName = `UNIT_${u.n}`;
      imports += `import ${varName} from './${config.outDir}/unit-${num}.js';\n`;
      names.push(varName);
    }

    exports += names.join(', ') + '];\n';

    fs.writeFileSync(levelFile, imports + '\n' + exports);
    console.log(`  Written: units-${config.outDir}-${level.toLowerCase()}.js (${levelUnits.length} units)`);
  }

  // ── Write main re-export ──
  const mainFile = path.join(srcDir, `units-${config.outDir}.js`);
  let mainContent = '';
  const levelNames = [];
  for (const level of Object.keys(levels)) {
    const varName = `${config.langName.toUpperCase()}_V2_${level}`;
    mainContent += `import ${varName} from './units-${config.outDir}-${level.toLowerCase()}.js';\n`;
    levelNames.push(`...${varName}`);
  }
  mainContent += `\nexport default [${levelNames.join(', ')}];\n`;
  fs.writeFileSync(mainFile, mainContent);
  console.log(`  Written: units-${config.outDir}.js (main re-export)`);

  // ── Summary ──
  console.log(`\n✓ ${config.langName} V2 upgrade complete!`);
  console.log(`  ${validUnits.length} units → src/data/${config.outDir}/`);
  console.log(`  ${teachCount} teach cards transformed`);
  console.log(`  Next: Run agents to enrich funFact + compounds, then wire into utils.js`);

  // Cleanup temp files
  try {
    fs.unlinkSync(path.join(__dirname, '_temp_import.mjs'));
    fs.unlinkSync(path.join(__dirname, '_temp_loader.cjs'));
    fs.unlinkSync(path.join(__dirname, '_temp_cjs.cjs'));
    fs.unlinkSync(path.join(__dirname, '_temp_units.json'));
  } catch(e) {}
}

main().catch(e => {
  console.error('Fatal error:', e);
  process.exit(1);
});
