#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');

const BASE = path.join(__dirname, '..', 'src', 'data', 'german-v2');

// ─── helpers ─────────────────────────────────────────────────────────────────

function readUnit(n) {
  const file = path.join(BASE, `unit-${String(n).padStart(2,'0')}.js`);
  return fs.readFileSync(file, 'utf8');
}

// Extract the outer unit-level field (single-line, like  level:"A1.1",)
function extractUnitField(text, field) {
  // Match field at the top of the exported object (not inside nested objects)
  // We look for the pattern at the start of the export block
  const re = new RegExp(`(?<![\\w])${field}\\s*:\\s*"([^"]+)"`, 'g');
  const matches = [...text.matchAll(re)];
  if (matches.length === 0) return null;
  return matches[0][1];
}

// Extract all step objects (as raw text chunks) using a simple brace counter
function extractSteps(text) {
  const steps = [];
  // Find all occurrences of {type:"..." or {type: '...'
  const typeRe = /\{\s*type\s*:\s*["'](teach|mc|fb|story|tip|verb_table|match|drag_fill|tr|intro)["']/g;
  let m;
  while ((m = typeRe.exec(text)) !== null) {
    // Walk forward from m.index to collect the full object
    let depth = 0;
    let start = m.index;
    let i = start;
    let obj = '';
    while (i < text.length) {
      const ch = text[i];
      if (ch === '{') depth++;
      else if (ch === '}') {
        depth--;
        if (depth === 0) {
          obj = text.slice(start, i + 1);
          break;
        }
      }
      i++;
    }
    if (obj) steps.push({ raw: obj, offset: start });
  }
  return steps;
}

function getField(raw, field) {
  // Match field:"value" or field:'value' or field:null or field:true/false
  const re = new RegExp(`(?<![\\w])${field}\\s*:\\s*(?:"([^"]*?)"|'([^']*?)'|(null|true|false|[\\w.-]+))`, 'g');
  const m = re.exec(raw);
  if (!m) return undefined;
  if (m[1] !== undefined) return m[1];
  if (m[2] !== undefined) return m[2];
  return m[3];
}

function getType(raw) { return getField(raw, 'type'); }

// ─── Rule checks ─────────────────────────────────────────────────────────────

const VALID_POS = new Set([
  'verb','noun','adj','adv','prep','conj','pron','num','intj','part','aux',
  // extended sub-types found in the data
  'aux_verb','modal_verb','conjunction_coord','conjunction_sub',
  'pronoun_dat','pronoun_refl','pronoun_rel','pronoun_dem','pronoun_indef',
  'article','det','phrase','abbr','suffix','prefix','particle','modal'
]);

const CEFR_LABELS = /\b(A1|A2|B1|B2|C1|C2)\b/;

const violations = {
  pp49: [],
  pp59_missing_pos: [],
  pp59_invalid_pos: [],
  pp59_missing_gender: [],
  pp51: [],
  sublevel: [],
};

// Expected CEFR distribution
const EXPECTED = {
  1:'A1', 2:'A1', 3:'A1', 4:'A1', 5:'A1', 6:'A1',
  7:'A2', 8:'A2', 9:'A2', 10:'A2', 11:'A2', 12:'A2',
  13:'B1', 14:'B1', 15:'B1', 16:'B1', 17:'B1', 18:'B1',
  19:'B1', 20:'B1', 21:'B1', 22:'B1', 23:'B1', 24:'B1',
  25:'B2', 26:'B2', 27:'B2', 28:'B2', 29:'B2', 30:'B2',
  31:'B2', 32:'B2', 33:'B2', 34:'B2', 35:'B2', 36:'B2',
};

// Track sub-levels per CEFR band for consistency check
const subLevelsByBand = { A1:[], A2:[], B1:[], B2:[] };

for (let n = 1; n <= 36; n++) {
  const text = readUnit(n);
  const steps = extractSteps(text);
  const unitLabel = `unit-${String(n).padStart(2,'0')}`;

  // ── PP51 + sub-level ──────────────────────────────────────────────────────
  const levelStr = extractUnitField(text, 'level');
  if (!levelStr) {
    violations.pp51.push(`${unitLabel}: no level field found`);
  } else {
    const band = levelStr.split('.')[0]; // "A1", "B2", etc.
    const expected = EXPECTED[n];
    if (band !== expected) {
      violations.pp51.push(`${unitLabel}: level="${levelStr}" band="${band}" expected="${expected}"`);
    }
    if (subLevelsByBand[band]) {
      subLevelsByBand[band].push({ unit: n, level: levelStr });
    }
  }

  // ── Step-level checks ─────────────────────────────────────────────────────
  for (const { raw } of steps) {
    const type = getType(raw);

    // PP49 — CEFR labels in mc.q or fb.s
    if (type === 'mc') {
      const q = getField(raw, 'q');
      if (q && CEFR_LABELS.test(q)) {
        violations.pp49.push(`${unitLabel} mc q: "${q.slice(0,80)}"`);
      }
    }
    if (type === 'fb') {
      const s = getField(raw, 's');
      if (s && CEFR_LABELS.test(s)) {
        violations.pp49.push(`${unitLabel} fb s: "${s.slice(0,80)}"`);
      }
    }

    // PP59 — pos + gender on every teach card
    if (type === 'teach') {
      const pos = getField(raw, 'pos');
      const gender = getField(raw, 'gender');
      const trg = getField(raw, 'trg') || getField(raw, 'nl') || '(unknown)';

      if (pos === undefined || pos === null) {
        violations.pp59_missing_pos.push(`${unitLabel}: trg="${trg.slice(0,30)}" — pos missing`);
      } else if (!VALID_POS.has(pos)) {
        violations.pp59_invalid_pos.push(`${unitLabel}: trg="${trg.slice(0,30)}" pos="${pos}" — invalid`);
      }

      if (gender === undefined) {
        violations.pp59_missing_gender.push(`${unitLabel}: trg="${trg.slice(0,30)}" — gender field absent`);
      }
      // gender:null is VALID for non-nouns, so we only flag truly missing (undefined)
    }
  }
}

// ── Sub-level sequence check ─────────────────────────────────────────────────
for (const [band, entries] of Object.entries(subLevelsByBand)) {
  entries.sort((a, b) => a.unit - b.unit);
  for (let i = 0; i < entries.length; i++) {
    const { unit, level } = entries[i];
    const parts = level.split('.');
    const subNum = parseInt(parts[1], 10);
    const expectedSub = i + 1;
    if (subNum !== expectedSub) {
      violations.sublevel.push(
        `unit-${String(unit).padStart(2,'0')}: level="${level}" — expected ${band}.${expectedSub} (position ${i+1} in ${band})`
      );
    }
  }
}

// ─── Report ──────────────────────────────────────────────────────────────────

let totalViolations = 0;

function section(title, items) {
  console.log(`\n${'='.repeat(60)}`);
  console.log(`${title} — ${items.length === 0 ? 'PASS' : `${items.length} VIOLATION(S)`}`);
  console.log('='.repeat(60));
  if (items.length === 0) {
    console.log('  (none)');
  } else {
    items.forEach(v => console.log('  ' + v));
    totalViolations += items.length;
  }
}

console.log('VerumLingua German v2 — 4-Rule Validation');
console.log(`Units checked: 36 (unit-01 through unit-36)`);
console.log(`Date: ${new Date().toISOString().split('T')[0]}`);

section('PP49 — CEFR labels in mc/fb questions', violations.pp49);
section('PP59 — Missing pos field on teach cards', violations.pp59_missing_pos);
section('PP59 — Invalid pos value on teach cards', violations.pp59_invalid_pos);
section('PP59 — Missing gender field on teach cards', violations.pp59_missing_gender);
section('PP51 — CEFR distribution (band mismatch)', violations.pp51);
section('Sub-level sequence consistency', violations.sublevel);

console.log(`\n${'='.repeat(60)}`);
console.log(`TOTAL VIOLATIONS: ${totalViolations}`);
if (totalViolations === 0) {
  console.log('ALL CHECKS PASS');
} else {
  console.log('ACTION REQUIRED — see details above');
}
console.log('='.repeat(60));
