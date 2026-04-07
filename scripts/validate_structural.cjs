#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');

const BASE = path.join(__dirname, '..', 'src', 'data', 'german-v2');

// ── helpers ────────────────────────────────────────────────────────────────

function readUnit(n) {
  const file = path.join(BASE, `unit-${String(n).padStart(2,'0')}.js`);
  return { file, src: fs.readFileSync(file, 'utf8') };
}

// Convert ES module export to CJS, then eval
function loadUnit(file, src) {
  const cjs = src
    .replace(/^export\s+default\s+/m, 'module.exports = ')
    .replace(/^import\s+.*?[\r\n]/gm, '');
  const m = { exports: {} };
  try {
    new Function('module', 'exports', 'require', cjs)(m, m.exports, () => ({}));
    return m.exports;
  } catch(e) {
    return null;
  }
}

// ── accumulators ───────────────────────────────────────────────────────────

const pp43Violations = [];
const pp48Violations = [];
const pp22cViolations = [];
const boardViolations = [];

const EM_DASH = '\u2014';

// ── per-step checker ───────────────────────────────────────────────────────

function checkStep(step, unitN, lessonId, stepIdx) {
  if (!step || typeof step !== 'object') return;

  // PP48 — fb single blank
  if (step.type === 'fb') {
    const s = step.s || '';
    if (/\{[2-9]\}/.test(s)) {
      pp48Violations.push({ unit: unitN, lesson: lessonId, stepIdx, s });
    }
  }

  // PP22c — em-dash in any string field (recursive)
  function scanValue(val, fieldPath) {
    if (typeof val === 'string') {
      if (val.includes(EM_DASH)) {
        pp22cViolations.push({ unit: unitN, lesson: lessonId, stepIdx, field: fieldPath, text: val.slice(0, 120) });
      }
    } else if (Array.isArray(val)) {
      val.forEach((v, i) => scanValue(v, `${fieldPath}[${i}]`));
    } else if (val && typeof val === 'object') {
      Object.keys(val).forEach(k => scanValue(val[k], `${fieldPath}.${k}`));
    }
  }

  // scan all fields in the step
  Object.keys(step).forEach(k => scanValue(step[k], k));
}

// ── main loop ──────────────────────────────────────────────────────────────

let unitsLoaded = 0;
let unitsFailedEval = 0;

for (let n = 1; n <= 36; n++) {
  const { file, src } = readUnit(n);
  const unit = loadUnit(file, src);

  if (!unit || !unit.lessons) {
    unitsFailedEval++;
    console.warn(`  ⚠ unit-${String(n).padStart(2,'0')}: eval failed — using regex fallback for PP22c`);
    // regex fallback: scan raw source for em-dashes
    const lines = src.split('\n');
    lines.forEach((line, li) => {
      if (line.includes(EM_DASH)) {
        pp22cViolations.push({ unit: n, lesson: '(regex)', stepIdx: li+1, field: 'raw-line', text: line.trim().slice(0,120) });
      }
    });
    continue;
  }

  unitsLoaded++;
  const lessons = unit.lessons;

  lessons.forEach((lesson, li) => {
    const lessonId = lesson.id || `lesson[${li}]`;

    // board:true
    if (lesson.board !== true) {
      boardViolations.push({ unit: n, lesson: lessonId, board: lesson.board });
    }

    const steps = lesson.steps || [];

    // PP43 density
    if (steps.length > 32) {
      pp43Violations.push({ unit: n, lesson: lessonId, count: steps.length });
    }

    steps.forEach((step, si) => checkStep(step, n, lessonId, si));
  });
}

// ── report ─────────────────────────────────────────────────────────────────

console.log('\n═══════════════════════════════════════════════════════════');
console.log('  VerumLingua — Structural Validation (Units 1–36)');
console.log(`  Units successfully loaded: ${unitsLoaded}/36`);
if (unitsFailedEval > 0) console.log(`  Units using regex fallback: ${unitsFailedEval}`);
console.log('═══════════════════════════════════════════════════════════\n');

// PP43
console.log('── PP43  Density (max 32 steps/lesson) ─────────────────────');
if (pp43Violations.length === 0) {
  console.log('  PASS — zero lessons exceed 32 steps');
} else {
  console.log(`  FAIL — ${pp43Violations.length} violation(s):`);
  pp43Violations.forEach(v => console.log(`    Unit ${String(v.unit).padStart(2,'0')} | ${v.lesson} | ${v.count} steps`));
}

// PP48
console.log('\n── PP48  fb single-blank only ──────────────────────────────');
if (pp48Violations.length === 0) {
  console.log('  PASS — no fb steps with {2}+ blanks');
} else {
  console.log(`  FAIL — ${pp48Violations.length} violation(s):`);
  pp48Violations.forEach(v => console.log(`    Unit ${String(v.unit).padStart(2,'0')} | ${v.lesson} | step[${v.stepIdx}] s="${v.s.slice(0,80)}"`));
}

// PP22c
console.log('\n── PP22c  No em-dashes (—) ─────────────────────────────────');
if (pp22cViolations.length === 0) {
  console.log('  PASS — no em-dashes found');
} else {
  console.log(`  FAIL — ${pp22cViolations.length} occurrence(s):`);
  pp22cViolations.slice(0, 40).forEach(v =>
    console.log(`    Unit ${String(v.unit).padStart(2,'0')} | ${v.lesson} | step[${v.stepIdx}] .${v.field}: "${v.text}"`)
  );
  if (pp22cViolations.length > 40) console.log(`    ... and ${pp22cViolations.length - 40} more`);
}

// board:true
console.log('\n── board:true on all lessons ───────────────────────────────');
if (boardViolations.length === 0) {
  console.log('  PASS — all lessons have board:true');
} else {
  console.log(`  FAIL — ${boardViolations.length} violation(s):`);
  boardViolations.forEach(v => console.log(`    Unit ${String(v.unit).padStart(2,'0')} | ${v.lesson} | board=${JSON.stringify(v.board)}`));
}

// summary
const pp43Pass  = pp43Violations.length  === 0;
const pp48Pass  = pp48Violations.length  === 0;
const pp22cPass = pp22cViolations.length === 0;
const boardPass = boardViolations.length === 0;
const overall   = pp43Pass && pp48Pass && pp22cPass && boardPass;

console.log('\n═══════════════════════════════════════════════════════════');
console.log(`  Overall: ${overall ? 'ALL PASS ✓' : 'VIOLATIONS FOUND ✗'}`);
console.log(`  PP43  density:  ${pp43Pass  ? 'PASS' : `FAIL (${pp43Violations.length})`}`);
console.log(`  PP48  fb blank: ${pp48Pass  ? 'PASS' : `FAIL (${pp48Violations.length})`}`);
console.log(`  PP22c em-dash:  ${pp22cPass ? 'PASS' : `FAIL (${pp22cViolations.length})`}`);
console.log(`  board:true:     ${boardPass ? 'PASS' : `FAIL (${boardViolations.length})`}`);
console.log('═══════════════════════════════════════════════════════════\n');

process.exit(overall ? 0 : 1);
