#!/usr/bin/env node
/**
 * LINGOVERSE EXTRACTION SCRIPT
 * Parses the monolith JSX file and outputs separated JSON files.
 * Run once, then archive.
 * 
 * Usage: node extract.js
 */

const fs = require('fs');
const path = require('path');

const SRC = path.join(__dirname, 'lingoverse.jsx');
const OUT = path.join(__dirname, 'output', 'data');

// ─── UTILITIES ───────────────────────────────────────────────────────

/** Read the full source file */
function readSource() {
  return fs.readFileSync(SRC, 'utf8').replace(/\r\n/g, '\n');
}

/**
 * Extract a JS value (object or array) starting from a const declaration.
 * Tracks bracket/brace depth to find the correct closing delimiter.
 */
function extractConst(src, name) {
  // Match: const NAME = { or const NAME = [
  const patterns = [
    new RegExp(`const\\s+${name}\\s*=\\s*\\[`, 'm'),
    new RegExp(`const\\s+${name}\\s*=\\s*\\{`, 'm'),
  ];
  
  let match = null;
  let opener = '';
  for (const pat of patterns) {
    match = pat.exec(src);
    if (match) {
      opener = match[0].endsWith('[') ? '[' : '{';
      break;
    }
  }
  
  if (!match) {
    console.error(`  ✗ Could not find const ${name}`);
    return null;
  }
  
  const startIdx = match.index + match[0].length - 1; // position of [ or {
  const closer = opener === '[' ? ']' : '}';
  
  let depth = 1;
  let i = startIdx + 1;
  let inString = false;
  let stringChar = '';
  let escaped = false;
  
  while (i < src.length && depth > 0) {
    const ch = src[i];
    
    if (escaped) {
      escaped = false;
      i++;
      continue;
    }
    
    if (ch === '\\') {
      escaped = true;
      i++;
      continue;
    }
    
    if (inString) {
      if (ch === stringChar) {
        inString = false;
      }
      i++;
      continue;
    }
    
    // Check for template literals
    if (ch === '`' || ch === '"' || ch === "'") {
      inString = true;
      stringChar = ch;
      i++;
      continue;
    }
    
    // Check for single-line comments
    if (ch === '/' && i + 1 < src.length) {
      if (src[i + 1] === '/') {
        // Skip to end of line
        while (i < src.length && src[i] !== '\n') i++;
        continue;
      }
      if (src[i + 1] === '*') {
        // Skip block comment
        i += 2;
        while (i < src.length - 1 && !(src[i] === '*' && src[i + 1] === '/')) i++;
        i += 2;
        continue;
      }
    }
    
    if (ch === '[' || ch === '{' || ch === '(') depth++;
    if (ch === ']' || ch === '}' || ch === ')') depth--;
    
    i++;
  }
  
  const raw = src.substring(startIdx, i);
  return raw;
}

/**
 * Safely evaluate a JS object/array literal string.
 * Strips comments and uses Function() constructor.
 */
function safeEval(jsStr, name) {
  try {
    // Strip single-line comments (but not inside strings)
    let cleaned = jsStr;
    
    // The Function constructor can handle trailing commas and JS syntax
    const fn = new Function(`return (${cleaned})`);
    return fn();
  } catch (e) {
    console.error(`  ✗ Failed to eval ${name}: ${e.message}`);
    // Try to show where the error is
    const lines = jsStr.split('\n');
    console.error(`    Total lines: ${lines.length}`);
    console.error(`    First 3 lines: ${lines.slice(0, 3).join(' | ')}`);
    console.error(`    Last 3 lines: ${lines.slice(-3).join(' | ')}`);
    return null;
  }
}

/**
 * Infer `kind` for a teach step based on its content.
 */
function inferKind(step) {
  if (step.type !== 'teach') return undefined;
  
  const nl = step.nl || '';
  const note = (step.note || '').toLowerCase();
  const en = (step.en || '').toLowerCase();
  
  // No target-language text = info card
  if (!nl || nl.trim() === '') return 'info';
  
  // Check for grammar indicators in note/en
  const grammarSignals = [
    'particle', 'marker', 'conjugat', 'ending', 'suffix', 'prefix',
    'tense', 'politeness', 'honorific', 'speech level', 'negation',
    'connector', 'irregular', 'contraction', '(topic', '(subject',
    '(object', 'copula', 'am / is', 'am/is', 'not / is not',
    'verb ending', 'grammar', '는 / 은', '을 / 를', '이 / 가',
    '에 vs', '(으)', 'conditional', 'imperative',
  ];
  const hasGrammar = grammarSignals.some(s => note.includes(s) || en.includes(s));
  
  // Multi-word = phrase (check for spaces in the nl field)
  const hasSpace = nl.trim().includes(' ');
  
  if (hasGrammar) return 'grammar';
  if (hasSpace) return 'phrase';
  return 'word';
}

/**
 * Write JSON file with pretty formatting.
 */
function writeJSON(filePath, data) {
  const dir = path.dirname(filePath);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf8');
}

// ─── MAIN EXTRACTION ─────────────────────────────────────────────────

function main() {
  console.log('═══════════════════════════════════════════════');
  console.log(' LINGOVERSE EXTRACTION');
  console.log('═══════════════════════════════════════════════');
  console.log('');
  
  const src = readSource();
  console.log(`Source file: ${src.length.toLocaleString()} characters, ${src.split('\n').length.toLocaleString()} lines`);
  console.log('');
  
  // ── STEP 1: Extract UNITS array ──────────────────────────────────
  console.log('Step 1: Extracting UNITS array...');
  const unitsRaw = extractConst(src, 'UNITS');
  if (!unitsRaw) { process.exit(1); }
  console.log(`  Raw extracted: ${unitsRaw.length.toLocaleString()} chars`);
  
  const units = safeEval(unitsRaw, 'UNITS');
  if (!units) { process.exit(1); }
  console.log(`  Parsed: ${units.length} units total`);
  
  // ── STEP 2: Split units by language/track ────────────────────────
  console.log('');
  console.log('Step 2: Splitting by language...');
  
  const langGroups = {};
  for (const unit of units) {
    const lang = unit.lang;
    const track = unit.track || 'v1';
    let key;
    
    if (lang === 'nl' && track === 'v2') key = 'dutch_v2';
    else if (lang === 'nl' && track === 'legacy') key = 'dutch_legacy';
    else if (lang === 'ko') key = 'korean';
    else if (lang === 'de') key = 'german';
    else if (lang === 'ar') key = 'arabic';
    else key = `${lang}_${track}`;
    
    if (!langGroups[key]) langGroups[key] = [];
    langGroups[key].push(unit);
  }
  
  for (const [key, group] of Object.entries(langGroups)) {
    const lessonCount = group.reduce((sum, u) => sum + (u.lessons ? u.lessons.length : 0), 0);
    console.log(`  ${key}: ${group.length} units, ${lessonCount} lessons`);
  }
  
  // ── STEP 3: Add `kind` to teach cards + normalize IDs ───────────
  console.log('');
  console.log('Step 3: Adding `kind` field to teach cards...');
  
  let kindStats = { word: 0, grammar: 0, phrase: 0, info: 0, culture: 0 };
  let idFixes = 0;
  
  for (const [langKey, group] of Object.entries(langGroups)) {
    for (const unit of group) {
      if (!unit.lessons) continue;
      for (const lesson of unit.lessons) {
        // ID normalization for German and Arabic
        if (langKey === 'german' && lesson.id && !lesson.id.startsWith('de')) {
          const oldId = lesson.id;
          lesson.id = 'de' + lesson.id;
          idFixes++;
        }
        // Arabic: ar_u1l1 → aru1l1
        if (langKey === 'arabic' && lesson.id && lesson.id.includes('_')) {
          const oldId = lesson.id;
          lesson.id = lesson.id.replace(/_/g, '');
          idFixes++;
        }
        
        if (!lesson.steps) continue;
        for (const step of lesson.steps) {
          const kind = inferKind(step);
          if (kind) {
            step.kind = kind;
            kindStats[kind]++;
          }
        }
      }
    }
  }
  
  console.log(`  Kind distribution: ${JSON.stringify(kindStats)}`);
  console.log(`  ID fixes: ${idFixes}`);
  
  // ── STEP 4: Write unit JSON files ────────────────────────────────
  console.log('');
  console.log('Step 4: Writing unit JSON files...');
  
  let totalFiles = 0;
  
  for (const [langKey, group] of Object.entries(langGroups)) {
    for (const unit of group) {
      const unitNum = String(unit.n).padStart(2, '0');
      const filePath = path.join(OUT, langKey, `unit_${unitNum}.json`);
      
      const unitData = {
        _schema: 'lingoverse_unit_v1',
        _extracted: new Date().toISOString().split('T')[0],
        unit: {
          n: unit.n,
          lang: unit.lang,
          track: unit.track || undefined,
          title: unit.title,
          sub: unit.sub || unit.desc || undefined,
          icon: unit.icon || undefined,
          level: unit.level || undefined,
          color: unit.color || undefined,
          objectives: unit.objectives || undefined,
        },
        lessons: (unit.lessons || []).map(lesson => ({
          id: lesson.id,
          title: lesson.title,
          icon: lesson.icon || undefined,
          xp: lesson.xp || undefined,
          board: lesson.board || undefined,
          steps: lesson.steps || [],
        })),
      };
      
      // Clean undefined values
      const cleaned = JSON.parse(JSON.stringify(unitData));
      writeJSON(filePath, cleaned);
      totalFiles++;
    }
    console.log(`  ${langKey}/: ${group.length} files written`);
  }
  
  // ── STEP 5: Extract KOREAN_DICT ──────────────────────────────────
  console.log('');
  console.log('Step 5: Extracting KOREAN_DICT...');
  
  const dictRaw = extractConst(src, 'KOREAN_DICT');
  if (dictRaw) {
    const dict = safeEval(dictRaw, 'KOREAN_DICT');
    if (dict) {
      const dictPath = path.join(OUT, 'korean', 'dictionary.json');
      writeJSON(dictPath, {
        _schema: 'lingoverse_dictionary_v1',
        _extracted: new Date().toISOString().split('T')[0],
        lang: 'ko',
        entries: dict,
      });
      console.log(`  dictionary.json: ${Object.keys(dict).length} entries`);
      totalFiles++;
    }
  }
  
  // ── STEP 6: Extract Korean seeds from comment block ──────────────
  console.log('');
  console.log('Step 6: Extracting Korean seed registry...');
  
  const seedRegex = /\/\/\s*([\w_]+)\s*→\s*(\S+)\s*(?:\(([^)]*)\))?\s*→\s*(\S+)\s*(?:\(([^)]*)\))?\s*(.*)/g;
  const seedBlock = src.substring(
    src.indexOf('// KOREAN SEED REGISTRY'),
    src.indexOf('// ════════════════', src.indexOf('// KOREAN SEED REGISTRY') + 30)
  );
  
  const seeds = [];
  let seedMatch;
  const seedLines = seedBlock.split('\n');
  for (const line of seedLines) {
    const m = line.match(/\/\/\s*([\w_]+)\s*→\s*(\S+)\s*(?:\(([^)]*)\))?\s*→\s*(\S+)?\s*(?:\(([^)]*)\))?\s*(.*)/);
    if (m && m[1] !== 'concept') {
      const seed = {
        concept: m[1],
        first_exposure: m[2],
        first_note: m[3] || undefined,
        harvest_lesson: m[4] || undefined,
        harvest_note: m[5] || undefined,
      };
      // Check for status markers
      const rest = (m[6] || '') + (m[5] || '');
      if (rest.includes('✅harvested') || rest.includes('✅written')) seed.status = 'planted_and_harvested';
      else if (rest.includes('✅planted')) seed.status = 'planted';
      else if (m[3] && m[3].includes('JRTF')) seed.status = 'planted_jrtf';
      else if (m[3] && m[3].includes('planted')) seed.status = 'planted';
      else seed.status = 'active';
      
      // Clean undefined
      seeds.push(JSON.parse(JSON.stringify(seed)));
    }
  }
  
  if (seeds.length > 0) {
    writeJSON(path.join(OUT, 'korean', 'seeds.json'), {
      _schema: 'lingoverse_seeds_v1',
      _extracted: new Date().toISOString().split('T')[0],
      lang: 'ko',
      seeds: seeds,
    });
    console.log(`  seeds.json: ${seeds.length} seed entries`);
    totalFiles++;
  }
  
  // ── STEP 7: Extract shared data constants ────────────────────────
  console.log('');
  console.log('Step 7: Extracting shared data...');
  
  const sharedExtractions = [
    { name: 'VOCAB', file: 'vocab.json', schema: 'lingoverse_vocab_v1' },
    { name: 'VOCAB_DB', file: 'vocab_db.json', schema: 'lingoverse_vocab_db_v1' },
    { name: 'GRAMMAR', file: 'grammar.json', schema: 'lingoverse_grammar_v1' },
    { name: 'MEANINGS', file: 'meanings.json', schema: 'lingoverse_meanings_v1' },
    { name: 'CHAT_STARTERS', file: 'chat_starters.json', schema: 'lingoverse_chat_v1' },
    { name: 'AI_RESP', file: 'ai_responses.json', schema: 'lingoverse_ai_resp_v1' },
  ];
  
  for (const { name, file, schema } of sharedExtractions) {
    const raw = extractConst(src, name);
    if (!raw) continue;
    const data = safeEval(raw, name);
    if (!data) continue;
    
    writeJSON(path.join(OUT, 'shared', file), {
      _schema: schema,
      _extracted: new Date().toISOString().split('T')[0],
      data: data,
    });
    
    const count = Array.isArray(data) ? data.length : Object.keys(data).length;
    console.log(`  ${file}: ${count} entries`);
    totalFiles++;
  }
  
  // ── STEP 8: Extract Foundations data ──────────────────────────────
  console.log('');
  console.log('Step 8: Extracting Foundations data...');
  
  const fkExtractions = [
    { name: 'FOUNDATIONS_BY_LANG', file: 'content_by_lang.json' },
    { name: 'FK_PLAYTHROUGH', file: 'playthrough.json' },
    { name: 'FK_GATE_QUIZ', file: 'gate_quiz.json' },
    { name: 'FK_SCHEMA_MAP', file: 'schema_map.json' },
    { name: 'FK_MODULE_TYPES', file: 'module_types.json' },
    { name: 'FK_PRACTICE_TYPES', file: 'practice_types.json' },
    { name: 'FK_LEARNING_FLOWS', file: 'learning_flows.json' },
  ];
  
  for (const { name, file } of fkExtractions) {
    const raw = extractConst(src, name);
    if (!raw) continue;
    const data = safeEval(raw, name);
    if (!data) continue;
    
    writeJSON(path.join(OUT, 'foundations', file), {
      _schema: `lingoverse_fk_v1`,
      _extracted: new Date().toISOString().split('T')[0],
      data: data,
    });
    
    const count = Array.isArray(data) ? data.length : Object.keys(data).length;
    console.log(`  ${file}: ${count} entries`);
    totalFiles++;
  }
  
  // ── DONE ─────────────────────────────────────────────────────────
  console.log('');
  console.log('═══════════════════════════════════════════════');
  console.log(` EXTRACTION COMPLETE: ${totalFiles} files written`);
  console.log('═══════════════════════════════════════════════');
  
  // ── VALIDATION SUMMARY ───────────────────────────────────────────
  console.log('');
  console.log('VALIDATION CHECKS:');
  
  // Check Korean lesson count
  const koreanUnits = langGroups['korean'] || [];
  const koreanLessons = koreanUnits.reduce((sum, u) => sum + (u.lessons ? u.lessons.length : 0), 0);
  console.log(`  Korean lessons: ${koreanLessons} (expected: 96) ${koreanLessons === 96 ? '✅' : '❌'}`);
  
  // Check Dutch v2 lesson count
  const dutchV2 = langGroups['dutch_v2'] || [];
  const dutchV2Lessons = dutchV2.reduce((sum, u) => sum + (u.lessons ? u.lessons.length : 0), 0);
  console.log(`  Dutch v2 lessons: ${dutchV2Lessons} (expected: 164) ${dutchV2Lessons === 164 ? '✅' : '❌'}`);
  
  // Check for duplicate lesson IDs
  const allIds = [];
  for (const group of Object.values(langGroups)) {
    for (const unit of group) {
      if (!unit.lessons) continue;
      for (const lesson of unit.lessons) {
        if (lesson.id) allIds.push(lesson.id);
      }
    }
  }
  const dupeIds = allIds.filter((id, i) => allIds.indexOf(id) !== i);
  if (dupeIds.length > 0) {
    console.log(`  Duplicate IDs: ❌ ${dupeIds.join(', ')}`);
  } else {
    console.log(`  Duplicate IDs: none ✅`);
  }
  
  // Check all teach cards have kind
  let teachWithoutKind = 0;
  let totalTeach = 0;
  for (const group of Object.values(langGroups)) {
    for (const unit of group) {
      if (!unit.lessons) continue;
      for (const lesson of unit.lessons) {
        if (!lesson.steps) continue;
        for (const step of lesson.steps) {
          if (step.type === 'teach') {
            totalTeach++;
            if (!step.kind) teachWithoutKind++;
          }
        }
      }
    }
  }
  console.log(`  Teach cards with kind: ${totalTeach - teachWithoutKind}/${totalTeach} ${teachWithoutKind === 0 ? '✅' : '❌ ' + teachWithoutKind + ' missing'}`);
  
  console.log('');
}

main();
