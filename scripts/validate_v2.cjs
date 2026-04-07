#!/usr/bin/env node
/**
 * Validation Script v2: PP52 + PP64 + PP61 (improved accuracy)
 *
 * PP52: Every quiz ANSWER must trace to a prior teach card's TRG field.
 *   - mc ans (if German) must appear in a prior teach card trg
 *   - fb a[0] (if German) must appear in a prior teach card trg
 *   - We SKIP English-only answers (translation quizzes are valid by design)
 *
 * PP64: Every teach card's trg must appear in at least one quiz step
 *   in the same or later lesson within the same unit.
 *
 * PP61: hint, note, funFact, intro desc/goals, tip text/deepDive must be English.
 *   We check for PRIMARILY German text (multiple German function words, no English).
 */

'use strict';
const fs = require('fs');
const path = require('path');

const BASE_DIR = path.resolve(__dirname, '../src/data/german-v2');

// ─── German detection (for answer words) ─────────────────────────────────────
// A word/string is "German" if it contains umlauts OR matches known German patterns
function looksGerman(str) {
  if (!str) return false;
  const s = str.toLowerCase();
  // Umlauts = German
  if (/[äöüß]/.test(s)) return true;
  // Multi-word: if any word has uppercase (German nouns capitalize) — for single answer words
  if (/^[A-Z][a-z]/.test(str) && !/^(The|A|An|I|He|She|It|We|They|Yes|No|Good|Bad|Hello|Bye|Thank|Please|Excuse|Sorry)/.test(str)) {
    return true;
  }
  return false;
}

// ─── PP61 metalanguage check ──────────────────────────────────────────────────
// Returns true if the text looks primarily German (not English)
function isGermanText(text) {
  if (!text || typeof text !== 'string' || text.length < 15) return false;
  const t = text.toLowerCase();

  // Count German function word hits
  const germanWords = ['der ', 'die ', 'das ', 'den ', 'dem ', 'des ',
    'ein ', 'eine ', 'einen ', 'einem ', 'einer ', 'eines ',
    'ist ', 'sind ', 'war ', 'waren ', 'hat ', 'haben ', 'wird ', 'werden ',
    'und ', 'oder ', 'aber ', 'auch ', 'nicht ', 'kein ', 'keine ',
    'mit ', 'von ', 'zu ', 'für ', 'bei ', 'nach ', 'über ', 'unter ',
    'ich ', 'du ', 'er ', 'sie ', 'es ', 'wir ', 'ihr '];
  const englishWords = ['the ', 'a ', ' an ', ' is ', ' are ', ' was ', ' were ',
    ' has ', ' have ', ' will ', ' would ', ' can ', ' could ', ' should ',
    'and ', 'or ', 'but ', 'also ', 'not ', 'no ', 'with ', 'from ', 'to ',
    'for ', 'in ', 'on ', 'at ', 'by ', 'after ', 'before ', 'over ',
    'use ', 'used ', 'means ', 'refers ', 'indicates ', 'this ', 'that ',
    'these ', 'those ', 'it ', 'its ', 'they ', 'their ', 'you ', 'we ',
    'noun ', 'verb ', 'adj ', 'plural ', 'singular ', 'german ', 'english '];

  let gCount = germanWords.filter(w => t.includes(w)).length;
  let eCount = englishWords.filter(w => t.includes(w)).length;

  // Must have substantially more German than English to flag
  return gCount >= 3 && gCount > eCount * 1.5;
}

// ─── Load unit ────────────────────────────────────────────────────────────────
function loadUnit(filePath) {
  const src = fs.readFileSync(filePath, 'utf8');
  try {
    const modifiedSrc = src.replace(/export\s+default\s+/, 'var __UNIT_DATA = ')
                           .replace(/export\s+const\s+\w+\s*=\s*/, 'var __UNIT_DATA = ');
    const fn = new Function(`
      ${modifiedSrc}
      return typeof __UNIT_DATA !== 'undefined' ? __UNIT_DATA : null;
    `);
    return fn();
  } catch (e) {
    console.error(`ERROR loading ${path.basename(filePath)}: ${e.message}`);
    return null;
  }
}

// ─── Main ─────────────────────────────────────────────────────────────────────
const pp52Violations = [];
const pp64Violations = [];
const pp61Violations = [];
const stats = { units: 0, lessons: 0, teachCards: 0, quizSteps: 0 };

for (let unitNum = 1; unitNum <= 36; unitNum++) {
  const fileName = `unit-${String(unitNum).padStart(2, '0')}.js`;
  const filePath = path.join(BASE_DIR, fileName);
  if (!fs.existsSync(filePath)) { console.warn(`Missing: ${fileName}`); continue; }

  const unit = loadUnit(filePath);
  if (!unit) continue;
  stats.units++;

  const lessons = unit.lessons || [];

  // Build unit-level teach trg set (for cross-lesson PP52 check)
  // We'll do this per-lesson with an accumulating set

  for (let li = 0; li < lessons.length; li++) {
    const lesson = lessons[li];
    stats.lessons++;
    const steps = lesson.steps || [];
    const lessonId = lesson.id || `L${li+1}`;
    const unitId = `U${unitNum}`;

    // ── PP52: Scan in order, accumulate teach trgs ───────────────────────────
    const seenTrg = new Set(); // lower-case trg values seen so far

    for (const step of steps) {
      if (step.type === 'teach') {
        const trg = (step.trg || step.nl || '').trim();
        stats.teachCards++;
        if (trg) {
          seenTrg.add(trg.toLowerCase());
          // Also add stem (first 4+ chars for inflected forms)
          if (trg.length >= 5) seenTrg.add(trg.toLowerCase().substring(0, 4));
        }
      } else if (step.type === 'mc' || step.type === 'fb') {
        stats.quizSteps++;

        let answerWord = '';
        if (step.type === 'mc') {
          answerWord = String(step.ans || '').trim();
        } else {
          const raw = Array.isArray(step.a) ? step.a[0] : step.a;
          answerWord = String(raw || '').trim();
        }

        // Only check German answer words (translation quizzes testing English are valid)
        if (!answerWord || !looksGerman(answerWord)) continue;
        // Skip very short words (articles, pronouns)
        if (answerWord.length <= 2) continue;

        const ansLower = answerWord.toLowerCase();

        // Check if answer was taught
        const taught = seenTrg.has(ansLower) ||
          // Check stem match
          (ansLower.length >= 5 && [...seenTrg].some(t => t.length >= 4 && (
            ansLower.startsWith(t.substring(0, 4)) ||
            t.startsWith(ansLower.substring(0, 4))
          )));

        if (!taught) {
          const ctx = (step.q || step.s || '').substring(0, 70);
          pp52Violations.push({ unit: unitId, lesson: lessonId, type: step.type, answer: answerWord, ctx });
        }
      }
    }

    // ── PP64: Check each teach card is tested somewhere in lesson ─────────────
    const lessonTeachTrgs = [];
    for (const step of steps) {
      if (step.type === 'teach') {
        const trg = (step.trg || step.nl || '').trim();
        if (trg && trg.length >= 3) lessonTeachTrgs.push(trg);
      }
    }

    // Build all quiz content string for this lesson
    const quizParts = [];
    for (const step of steps) {
      if (step.type === 'mc') {
        quizParts.push(step.q || '', step.ans || '', ...(step.opts || []));
      } else if (step.type === 'fb') {
        quizParts.push(step.s || '');
        const raw = Array.isArray(step.a) ? step.a : [step.a];
        quizParts.push(...raw.map(x => String(x || '')));
        quizParts.push(...(step.opts || []));
      } else if (step.type === 'match') {
        (step.pairs || []).forEach(p => quizParts.push(p.trg || '', p.src || ''));
      } else if (step.type === 'drag_fill') {
        quizParts.push(step.s || '', ...(step.pool || []));
        if (step.blanks && typeof step.blanks === 'object') {
          quizParts.push(...Object.values(step.blanks));
        }
      }
    }
    const quizStr = quizParts.join(' ').toLowerCase();

    for (const trg of lessonTeachTrgs) {
      const tLow = trg.toLowerCase();
      // Check if the trg appears anywhere in quiz content
      const tested = quizStr.includes(tLow) ||
        (tLow.length >= 5 && quizStr.includes(tLow.substring(0, 4)));

      if (!tested) {
        pp64Violations.push({ unit: unitId, lesson: lessonId, trg });
      }
    }

    // ── PP61: Check metalanguage fields ──────────────────────────────────────
    for (const step of steps) {
      const loc = `[${unitId} ${lessonId}]`;

      if (step.type === 'mc' || step.type === 'fb') {
        if (step.hint && isGermanText(step.hint)) {
          pp61Violations.push({ unit: unitId, lesson: lessonId, field: `${step.type}.hint`, text: step.hint.substring(0, 120) });
        }
      }
      if (step.type === 'teach') {
        if (step.note && isGermanText(step.note)) {
          pp61Violations.push({ unit: unitId, lesson: lessonId, field: 'teach.note', text: step.note.substring(0, 120) });
        }
        if (step.funFact && isGermanText(step.funFact)) {
          pp61Violations.push({ unit: unitId, lesson: lessonId, field: 'teach.funFact', text: step.funFact.substring(0, 120) });
        }
      }
      if (step.type === 'intro') {
        if (step.desc && isGermanText(step.desc)) {
          pp61Violations.push({ unit: unitId, lesson: lessonId, field: 'intro.desc', text: step.desc.substring(0, 120) });
        }
        (step.goals || []).forEach((g, i) => {
          if (isGermanText(g)) {
            pp61Violations.push({ unit: unitId, lesson: lessonId, field: `intro.goal[${i}]`, text: g.substring(0, 120) });
          }
        });
      }
      if (step.type === 'tip') {
        if (step.text && isGermanText(step.text)) {
          pp61Violations.push({ unit: unitId, lesson: lessonId, field: 'tip.text', text: step.text.substring(0, 120) });
        }
        if (step.deepDive && isGermanText(step.deepDive)) {
          pp61Violations.push({ unit: unitId, lesson: lessonId, field: 'tip.deepDive', text: step.deepDive.substring(0, 120) });
        }
      }
    }
  }

  process.stdout.write(`\rScanned ${unitNum}/36...`);
}

// ─── Report ───────────────────────────────────────────────────────────────────
console.log('\n\n═══════════════════════════════════════════════════════════════════');
console.log('VALIDATION REPORT v2: PP52 + PP64 + PP61');
console.log('═══════════════════════════════════════════════════════════════════');
console.log(`Units: ${stats.units}/36 | Lessons: ${stats.lessons} | Teach cards: ${stats.teachCards} | Quiz steps: ${stats.quizSteps}`);
console.log('');

// ── PP52 ──────────────────────────────────────────────────────────────────────
console.log('── PP52: Teach-before-use (German quiz answers only) ───────────────');
if (pp52Violations.length === 0) {
  console.log('  PASS — Zero violations');
} else {
  // Group by unit
  const byUnit52 = {};
  for (const v of pp52Violations) {
    if (!byUnit52[v.unit]) byUnit52[v.unit] = [];
    byUnit52[v.unit].push(v);
  }
  console.log(`  ${pp52Violations.length} potential violations across ${Object.keys(byUnit52).length} units:`);
  for (const [unit, vs] of Object.entries(byUnit52).sort()) {
    console.log(`  ${unit} (${vs.length}):`);
    vs.forEach(v => {
      console.log(`    [${v.lesson}] ${v.type} ans="${v.answer}"  ctx="${v.ctx}"`);
    });
  }
}

// ── PP64 ──────────────────────────────────────────────────────────────────────
console.log('\n── PP64: Teach-then-test (untested teach cards) ────────────────────');
if (pp64Violations.length === 0) {
  console.log('  PASS — Zero violations');
} else {
  const byUnit64 = {};
  for (const v of pp64Violations) {
    if (!byUnit64[v.unit]) byUnit64[v.unit] = [];
    byUnit64[v.unit].push(v);
  }
  console.log(`  ${pp64Violations.length} untested teach cards across ${Object.keys(byUnit64).length} units:`);
  for (const [unit, vs] of Object.entries(byUnit64).sort()) {
    console.log(`  ${unit} (${vs.length}):`);
    vs.slice(0, 8).forEach(v => {
      console.log(`    [${v.lesson}] "${v.trg}"`);
    });
    if (vs.length > 8) console.log(`    ... and ${vs.length - 8} more`);
  }
}

// ── PP61 ──────────────────────────────────────────────────────────────────────
console.log('\n── PP61: Metalanguage in English ───────────────────────────────────');
if (pp61Violations.length === 0) {
  console.log('  PASS — Zero violations');
} else {
  const byUnit61 = {};
  for (const v of pp61Violations) {
    if (!byUnit61[v.unit]) byUnit61[v.unit] = [];
    byUnit61[v.unit].push(v);
  }
  console.log(`  ${pp61Violations.length} potential violations across ${Object.keys(byUnit61).length} units:`);
  for (const [unit, vs] of Object.entries(byUnit61).sort()) {
    console.log(`  ${unit} (${vs.length}):`);
    vs.slice(0, 5).forEach(v => {
      console.log(`    [${v.lesson}] ${v.field}: "${v.text}"`);
    });
    if (vs.length > 5) console.log(`    ... and ${vs.length - 5} more`);
  }
}

// ── Summary ───────────────────────────────────────────────────────────────────
console.log('\n═══════════════════════════════════════════════════════════════════');
const total = pp52Violations.length + pp64Violations.length + pp61Violations.length;
if (total === 0) {
  console.log('ALL CHECKS PASS — Zero violations');
} else {
  console.log(`TOTAL: ${total} items  |  PP52: ${pp52Violations.length}  |  PP64: ${pp64Violations.length}  |  PP61: ${pp61Violations.length}`);
  console.log('Note: PP52 and PP64 use approximate stem matching — some false positives expected.');
  console.log('Note: PP61 requires 3+ German function words AND more German than English — conservative threshold.');
}
console.log('═══════════════════════════════════════════════════════════════════\n');
