#!/usr/bin/env node
/**
 * LINGOVERSE COMBINE SCRIPT
 * Combines engine JSX + JSON data files into a single monolith JSX.
 * The Claude agent runs this each session before giving files to the user.
 * 
 * Usage: node combine.js
 * Output: lingoverse.jsx (combined, ready for Claude preview)
 */

const fs = require('fs');
const path = require('path');

const ENGINE = path.join(__dirname, 'output', 'engine', 'lingoverse_engine.jsx');
const DATA_DIR = path.join(__dirname, 'output', 'data');
const OUTPUT = path.join(__dirname, 'output', 'lingoverse.jsx');

function main() {
  console.log('═══ LINGOVERSE COMBINE ═══');
  
  let engine = fs.readFileSync(ENGINE, 'utf8');
  
  // ── Load all unit data and rebuild UNITS array ──
  const langDirs = [
    { dir: 'dutch_v2', order: 1 },
    { dir: 'dutch_legacy', order: 2 },
    { dir: 'german', order: 3 },
    { dir: 'arabic', order: 4 },
    { dir: 'korean', order: 5 },
  ];
  
  const allUnits = [];
  for (const { dir } of langDirs) {
    const fullDir = path.join(DATA_DIR, dir);
    const files = fs.readdirSync(fullDir)
      .filter(f => f.startsWith('unit_') && f.endsWith('.json'))
      .sort();
    
    for (const f of files) {
      const data = JSON.parse(fs.readFileSync(path.join(fullDir, f), 'utf8'));
      // Reconstruct the unit object as it appears in the original JSX
      const unit = { ...data.unit, lessons: data.lessons };
      allUnits.push(unit);
    }
    console.log(`  ${dir}: ${files.length} units loaded`);
  }
  
  // ── Load shared data ──
  const shared = {};
  const sharedFiles = {
    'VOCAB_DB': 'shared/vocab_db.json',
    'VOCAB': 'shared/vocab.json',
    'GRAMMAR': 'shared/grammar.json',
    'MEANINGS': 'shared/meanings.json',
    'CHAT_STARTERS': 'shared/chat_starters.json',
    'AI_RESP': 'shared/ai_responses.json',
  };
  
  for (const [constName, file] of Object.entries(sharedFiles)) {
    const filePath = path.join(DATA_DIR, file);
    if (fs.existsSync(filePath)) {
      const raw = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      shared[constName] = raw.data;
      console.log(`  ${constName}: loaded`);
    }
  }
  
  // ── Load foundations data ──
  const fkFiles = {
    'FK_SCHEMA_MAP': 'foundations/schema_map.json',
    'FK_MODULE_TYPES': 'foundations/module_types.json',
    'FK_LEARNING_FLOWS': 'foundations/learning_flows.json',
    'FOUNDATIONS_BY_LANG': 'foundations/content_by_lang.json',
    'FK_PLAYTHROUGH': 'foundations/playthrough.json',
    'FK_GATE_QUIZ': 'foundations/gate_quiz.json',
    'FK_PRACTICE_TYPES': 'foundations/practice_types.json',
  };
  
  for (const [constName, file] of Object.entries(fkFiles)) {
    const filePath = path.join(DATA_DIR, file);
    if (fs.existsSync(filePath)) {
      const raw = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      shared[constName] = raw.data;
      console.log(`  ${constName}: loaded`);
    }
  }
  
  // ── Load Korean dictionary ──
  const dictPath = path.join(DATA_DIR, 'korean', 'dictionary.json');
  if (fs.existsSync(dictPath)) {
    const raw = JSON.parse(fs.readFileSync(dictPath, 'utf8'));
    shared['KOREAN_DICT'] = raw.entries;
    console.log(`  KOREAN_DICT: ${Object.keys(raw.entries).length} entries loaded`);
  }
  
  // ── Replace placeholders in engine ──
  // For UNITS — special case, it's an array
  const unitsJson = JSON.stringify(allUnits, null, 2);
  engine = engine.replace(
    /\/\/ ═+\n\/\/ DATA: UNITS\n\/\/ Source:.*\n\/\/ ═+\nconst UNITS = \[\]; \/\/ ← populated from JSON/,
    `const UNITS = ${unitsJson}`
  );
  
  // For all other constants
  for (const [constName, data] of Object.entries(shared)) {
    const jsonStr = JSON.stringify(data, null, 2);
    const isArray = Array.isArray(data);
    const stub = isArray ? '[]' : '{}';
    
    const pattern = new RegExp(
      `\\/\\/ ═+\\n\\/\\/ DATA: ${constName}\\n\\/\\/ Source:.*\\n\\/\\/ ═+\\nconst ${constName} = ${stub.replace(/[[\]{}]/g, '\\$&')}; \\/\\/ ← populated from JSON`
    );
    
    const replacement = `const ${constName} = ${jsonStr}`;
    
    if (pattern.test(engine)) {
      engine = engine.replace(pattern, replacement);
    } else {
      console.warn(`  ⚠️  Could not find placeholder for ${constName}`);
    }
  }
  
  // ── Write combined file ──
  fs.writeFileSync(OUTPUT, engine, 'utf8');
  
  const lineCount = engine.split('\n').length;
  console.log('');
  console.log(`Combined file written: ${lineCount} lines`);
  console.log(`Output: ${OUTPUT}`);
}

main();
