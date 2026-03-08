#!/usr/bin/env node
/**
 * LINGOVERSE JSON SCHEMA VALIDATOR
 * Run after any content edit to catch structural issues.
 * 
 * Usage: node validate.js [path_to_data_dir]
 */

const fs = require('fs');
const path = require('path');

const DATA_DIR = process.argv[2] || path.join(__dirname, 'output', 'data');

let errors = 0;
let warnings = 0;
let filesChecked = 0;

function error(file, msg) {
  console.log(`  ❌ ERROR: ${msg}`);
  errors++;
}

function warn(file, msg) {
  console.log(`  ⚠️  WARN: ${msg}`);
  warnings++;
}

function ok(msg) {
  console.log(`  ✅ ${msg}`);
}

// ── VALIDATE UNIT FILES ──────────────────────────────────────────────

function validateUnit(filePath) {
  const fileName = path.basename(filePath);
  const langDir = path.basename(path.dirname(filePath));
  
  let data;
  try {
    data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (e) {
    error(fileName, `Invalid JSON: ${e.message}`);
    return;
  }
  
  filesChecked++;
  
  // Schema check
  if (!data._schema) warn(fileName, 'Missing _schema field');
  if (!data.unit) { error(fileName, 'Missing unit metadata'); return; }
  if (!data.lessons) { error(fileName, 'Missing lessons array'); return; }
  
  const u = data.unit;
  if (!u.n) error(fileName, 'unit.n (number) is missing');
  if (!u.lang) error(fileName, 'unit.lang is missing');
  if (!u.title) error(fileName, 'unit.title is missing');
  
  // Validate lessons
  const seenIds = new Set();
  
  for (let li = 0; li < data.lessons.length; li++) {
    const lesson = data.lessons[li];
    const lRef = `${langDir}/${fileName} lesson[${li}]`;
    
    if (!lesson.id) {
      error(lRef, 'Lesson missing id');
      continue;
    }
    
    if (seenIds.has(lesson.id)) {
      error(lRef, `Duplicate lesson id: ${lesson.id}`);
    }
    seenIds.add(lesson.id);
    
    if (!lesson.title) warn(lRef, `${lesson.id}: missing title`);
    if (!lesson.steps || !Array.isArray(lesson.steps)) {
      error(lRef, `${lesson.id}: missing or invalid steps array`);
      continue;
    }
    
    if (lesson.steps.length < 5) {
      warn(lRef, `${lesson.id}: only ${lesson.steps.length} steps (minimum should be ~10)`);
    }
    
    // Validate steps
    let teachStreak = 0;
    
    for (let si = 0; si < lesson.steps.length; si++) {
      const step = lesson.steps[si];
      const sRef = `${lesson.id} step[${si}]`;
      
      if (!step.type) {
        error(sRef, 'Step missing type');
        continue;
      }
      
      // Type-specific validation
      switch (step.type) {
        case 'teach':
          teachStreak++;
          if (!step.kind) warn(sRef, 'teach step missing kind field');
          if (!step.en && !step.note) warn(sRef, 'teach step has no en or note');
          break;
          
        case 'mc':
          teachStreak = 0;
          if (!step.q) error(sRef, 'MC missing question (q)');
          if (!step.opts || !Array.isArray(step.opts)) error(sRef, 'MC missing options array (opts)');
          else {
            if (step.opts.length < 2) error(sRef, 'MC needs at least 2 options');
            if (step.opts.length > 6) warn(sRef, `MC has ${step.opts.length} options (usually 3-4)`);
            const ansStr = String(step.ans || '');
            if (!step.opts.map(String).includes(ansStr)) {
              error(sRef, `MC answer "${ansStr.substring(0,30)}" not found in opts`);
            }
          }
          if (!step.ans) error(sRef, 'MC missing answer (ans)');
          break;
          
        case 'fb':
          teachStreak = 0;
          if (!step.s) error(sRef, 'FB missing sentence (s)');
          if (!step.a) error(sRef, 'FB missing answer (a)');
          if (step.opts && Array.isArray(step.opts)) {
            const ansStr = String(step.a || '');
            if (!step.opts.map(String).includes(ansStr)) {
              error(sRef, `FB answer "${ansStr.substring(0,30)}" not found in opts`);
            }
          }
          if (step.s && typeof step.s === 'string' && !step.s.includes('___')) {
            warn(sRef, 'FB sentence missing ___ blank placeholder');
          }
          break;
          
        case 'match':
          teachStreak = 0;
          if (!step.pairs || !Array.isArray(step.pairs)) {
            error(sRef, 'Match missing pairs array');
          } else {
            if (step.pairs.length < 2) error(sRef, 'Match needs at least 2 pairs');
            for (let pi = 0; pi < step.pairs.length; pi++) {
              const pair = step.pairs[pi];
              if (!pair.nl && !pair.en && !pair.ko) {
                warn(sRef, `Match pair[${pi}] missing content`);
              }
            }
          }
          break;
          
        case 'tip':
          teachStreak = 0;
          if (!step.title) warn(sRef, 'Tip missing title');
          if (!step.text) error(sRef, 'Tip missing text');
          break;
          
        case 'intro':
          teachStreak = 0;
          if (!step.title) warn(sRef, 'Intro missing title');
          break;
          
        case 'verb_table':
          teachStreak = 0;
          if (!step.groups) warn(sRef, 'verb_table missing groups');
          break;
          
        case 'conj':
          teachStreak = 0;
          break;
          
        case 'drag_fill':
          teachStreak = 0;
          break;
          
        default:
          warn(sRef, `Unknown step type: "${step.type}"`);
      }
      
      // Teach streak warning (from density audit)
      if (teachStreak > 4) {
        warn(sRef, `Teach streak of ${teachStreak} cards in a row (max recommended: 3)`);
      }
    }
  }
}

// ── VALIDATE DICTIONARY ──────────────────────────────────────────────

function validateDictionary(filePath) {
  let data;
  try {
    data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (e) {
    error(path.basename(filePath), `Invalid JSON: ${e.message}`);
    return;
  }
  
  filesChecked++;
  
  if (!data.entries) { error('dictionary.json', 'Missing entries'); return; }
  
  let count = 0;
  for (const [key, entry] of Object.entries(data.entries)) {
    count++;
    if (!entry.base) warn('dictionary.json', `${key}: missing base translation`);
    if (!entry.uses || !Array.isArray(entry.uses)) {
      warn('dictionary.json', `${key}: missing uses array`);
    }
  }
  
  ok(`${count} dictionary entries checked`);
}

// ── VALIDATE SEEDS ───────────────────────────────────────────────────

function validateSeeds(filePath) {
  let data;
  try {
    data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (e) {
    error(path.basename(filePath), `Invalid JSON: ${e.message}`);
    return;
  }
  
  filesChecked++;
  
  if (!data.seeds || !Array.isArray(data.seeds)) {
    error('seeds.json', 'Missing seeds array');
    return;
  }
  
  const seenConcepts = new Set();
  for (const seed of data.seeds) {
    if (!seed.concept) error('seeds.json', 'Seed missing concept');
    if (!seed.first_exposure) error('seeds.json', `${seed.concept}: missing first_exposure`);
    if (!seed.status) warn('seeds.json', `${seed.concept}: missing status`);
    
    if (seenConcepts.has(seed.concept)) {
      error('seeds.json', `Duplicate concept: ${seed.concept}`);
    }
    seenConcepts.add(seed.concept);
  }
  
  ok(`${data.seeds.length} seeds checked`);
}

// ── CROSS-VALIDATION ─────────────────────────────────────────────────

function crossValidate() {
  console.log('\n── CROSS-VALIDATION ──');
  
  // Collect all lesson IDs across all unit files
  const allIds = new Set();
  const langDirs = ['korean', 'dutch_v2', 'dutch_legacy', 'german', 'arabic'];
  
  for (const lang of langDirs) {
    const dir = path.join(DATA_DIR, lang);
    if (!fs.existsSync(dir)) continue;
    const files = fs.readdirSync(dir).filter(f => f.startsWith('unit_'));
    
    for (const f of files) {
      const data = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8'));
      for (const lesson of data.lessons) {
        if (allIds.has(lesson.id)) {
          error('cross', `Duplicate lesson ID across files: ${lesson.id}`);
        }
        allIds.add(lesson.id);
      }
    }
  }
  
  ok(`${allIds.size} unique lesson IDs across all languages`);
  
  // Validate seeds reference real lesson IDs
  const seedsPath = path.join(DATA_DIR, 'korean', 'seeds.json');
  if (fs.existsSync(seedsPath)) {
    const seeds = JSON.parse(fs.readFileSync(seedsPath, 'utf8'));
    for (const seed of seeds.seeds) {
      // Check first_exposure references
      const refs = (seed.first_exposure || '').split(/\s*\+\s*/);
      for (const ref of refs) {
        if (ref === '——') continue; // placeholder for "not yet planted"
        if (!allIds.has(ref)) {
          warn('seeds', `Seed "${seed.concept}" references unknown lesson: ${ref}`);
        }
      }
      // Check harvest references
      if (seed.harvest_lesson && seed.harvest_lesson !== 'always') {
        // Handle ranges like "kou18l5-7"
        const harvest = seed.harvest_lesson.split('-')[0];
        // Only check if it looks like a lesson ID
        if (harvest.match(/^kou\d+l\d+/) && !allIds.has(seed.harvest_lesson) && !allIds.has(harvest)) {
          // It might be a future lesson (B1) not yet written
          // Just warn, don't error
          warn('seeds', `Seed "${seed.concept}" harvest "${seed.harvest_lesson}" not found (may be future B1 lesson)`);
        }
      }
    }
    ok('Seed references checked');
  }
}

// ── MAIN ─────────────────────────────────────────────────────────────

function main() {
  console.log('═══════════════════════════════════════════════');
  console.log(' LINGOVERSE SCHEMA VALIDATOR');
  console.log('═══════════════════════════════════════════════');
  console.log(`Data directory: ${DATA_DIR}`);
  console.log('');
  
  // Validate all unit files
  const langDirs = ['korean', 'dutch_v2', 'dutch_legacy', 'german', 'arabic'];
  
  for (const lang of langDirs) {
    const dir = path.join(DATA_DIR, lang);
    if (!fs.existsSync(dir)) { console.log(`${lang}/: not found, skipping`); continue; }
    
    console.log(`── ${lang.toUpperCase()} ──`);
    const unitFiles = fs.readdirSync(dir).filter(f => f.startsWith('unit_') && f.endsWith('.json'));
    
    for (const f of unitFiles.sort()) {
      validateUnit(path.join(dir, f));
    }
    
    // Dictionary
    const dictPath = path.join(dir, 'dictionary.json');
    if (fs.existsSync(dictPath)) {
      validateDictionary(dictPath);
    }
    
    // Seeds
    const seedsPath = path.join(dir, 'seeds.json');
    if (fs.existsSync(seedsPath)) {
      validateSeeds(seedsPath);
    }
    
    ok(`${unitFiles.length} unit files checked`);
    console.log('');
  }
  
  // Validate shared data
  console.log('── SHARED ──');
  const sharedDir = path.join(DATA_DIR, 'shared');
  if (fs.existsSync(sharedDir)) {
    const sharedFiles = fs.readdirSync(sharedDir).filter(f => f.endsWith('.json'));
    for (const f of sharedFiles) {
      try {
        JSON.parse(fs.readFileSync(path.join(sharedDir, f), 'utf8'));
        filesChecked++;
      } catch (e) {
        error(f, `Invalid JSON: ${e.message}`);
      }
    }
    ok(`${sharedFiles.length} shared files valid JSON`);
  }
  console.log('');
  
  // Validate foundations
  console.log('── FOUNDATIONS ──');
  const fkDir = path.join(DATA_DIR, 'foundations');
  if (fs.existsSync(fkDir)) {
    const fkFiles = fs.readdirSync(fkDir).filter(f => f.endsWith('.json'));
    for (const f of fkFiles) {
      try {
        JSON.parse(fs.readFileSync(path.join(fkDir, f), 'utf8'));
        filesChecked++;
      } catch (e) {
        error(f, `Invalid JSON: ${e.message}`);
      }
    }
    ok(`${fkFiles.length} foundations files valid JSON`);
  }
  console.log('');
  
  // Cross-validation
  crossValidate();
  
  // Summary
  console.log('');
  console.log('═══════════════════════════════════════════════');
  console.log(` FILES CHECKED: ${filesChecked}`);
  console.log(` ERRORS: ${errors}`);
  console.log(` WARNINGS: ${warnings}`);
  console.log(` RESULT: ${errors === 0 ? '✅ PASS' : '❌ FAIL'}`);
  console.log('═══════════════════════════════════════════════');
  
  process.exit(errors > 0 ? 1 : 0);
}

main();
