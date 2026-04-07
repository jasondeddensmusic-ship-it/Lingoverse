#!/usr/bin/env node
/**
 * Validation Script: PP52 + PP64 + PP61
 * Checks all 36 German v2 unit files.
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const BASE_DIR = path.resolve(__dirname, '../src/data/german-v2');

// ─── Loader ───────────────────────────────────────────────────────────────────
function loadUnit(filePath) {
  const src = fs.readFileSync(filePath, 'utf8');
  // Strip ES module export default and replace with assignment
  let code = src
    .replace(/^\s*export\s+default\s+/, 'module.exports = ')
    .replace(/^\s*export\s+const\s+(\w+)\s*=/, 'const $1 = module.exports =');

  // Use a sandboxed require-like approach
  const mod = { exports: {} };
  try {
    const fn = new Function('module', 'exports', 'require', code);
    fn(mod, mod.exports, () => ({}));
  } catch (e) {
    // Try eval approach
    try {
      // Remove export keywords and evaluate
      code = src
        .replace(/export\s+default\s+/, 'var __unit = ')
        .replace(/export\s+const\s+\w+\s*=\s*/, 'var __unit = ');
      eval(code);
      return eval('__unit');
    } catch (e2) {
      console.error(`Failed to load ${filePath}: ${e2.message}`);
      return null;
    }
  }
  return mod.exports;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
function stripPunctuation(str) {
  return (str || '').replace(/[.,!?;:"'()\[\]{}\-]/g, ' ').replace(/\s+/g, ' ').trim().toLowerCase();
}

function wordTokens(str) {
  return stripPunctuation(str).split(' ').filter(Boolean);
}

function containsWord(haystack, needle) {
  const h = stripPunctuation(haystack);
  const n = stripPunctuation(needle).toLowerCase();
  if (!n) return false;
  // Check exact match or root match (first 4+ chars)
  return h.includes(n) || (n.length >= 4 && h.split(' ').some(w => w.startsWith(n.substring(0, 4))));
}

// German metalanguage detection
const GERMAN_INDICATORS = [
  // Common German words that shouldn't appear in English hints
  /\b(der|die|das|ein|eine|einen|einem|einer|eines)\b/i,
  /\b(ist|sind|war|waren|hat|haben|wird|werden)\b/i,
  /\b(und|oder|aber|auch|nicht|kein|keine)\b/i,
  /\b(mit|von|zu|für|in|an|auf|bei|nach|vor|über|unter)\b/i,
];

const ENGLISH_INDICATORS = [
  /\b(the|a|an|is|are|was|were|has|have|will|would|can|could|should)\b/i,
  /\b(and|or|but|also|not|no|with|from|to|for|in|on|at|by|after|before|over|under)\b/i,
  /\b(use|used|means|refers|indicates|shows|describes|comes|forms|takes|adds|makes)\b/i,
  /\b(this|that|these|those|it|its|they|their|you|your|we|our)\b/i,
];

function isLikelyGerman(text) {
  if (!text || text.length < 10) return false;
  const germanHits = GERMAN_INDICATORS.filter(r => r.test(text)).length;
  const englishHits = ENGLISH_INDICATORS.filter(r => r.test(text)).length;
  // If more German indicators than English, flag it
  return germanHits > englishHits && germanHits >= 2;
}

// ─── Main Validation ──────────────────────────────────────────────────────────
const pp52Violations = [];
const pp64Violations = [];
const pp61Violations = [];

let totalUnits = 0;
let totalLessons = 0;
let totalTeachCards = 0;
let totalQuizSteps = 0;

for (let unitNum = 1; unitNum <= 36; unitNum++) {
  const fileName = `unit-${String(unitNum).padStart(2, '0')}.js`;
  const filePath = path.join(BASE_DIR, fileName);

  if (!fs.existsSync(filePath)) {
    console.warn(`Missing: ${fileName}`);
    continue;
  }

  const src = fs.readFileSync(filePath, 'utf8');

  // Extract unit data by parsing the JS manually
  // Use a regex-based approach to find the unit object
  let unitData = null;
  try {
    // Replace export default with a variable assignment
    const modifiedSrc = src
      .replace(/export\s+default\s+/, 'var __UNIT_DATA = ')
      .replace(/export\s+const\s+\w+\s*=\s*/, 'var __UNIT_DATA = ');

    // Use Function constructor to evaluate in isolated scope
    const fn = new Function(`
      ${modifiedSrc}
      return typeof __UNIT_DATA !== 'undefined' ? __UNIT_DATA : null;
    `);
    unitData = fn();
  } catch (e) {
    console.error(`ERROR loading ${fileName}: ${e.message}`);
    continue;
  }

  if (!unitData) {
    console.error(`No data from ${fileName}`);
    continue;
  }

  totalUnits++;
  const lessons = unitData.lessons || [];

  for (const lesson of lessons) {
    totalLessons++;
    const steps = lesson.steps || [];
    const lessonId = lesson.id || '?';
    const unitId = `U${unitNum}`;

    // Collect teach cards in order (for PP52 — must be PRIOR)
    const teachTrgSet = new Set(); // accumulates as we scan
    const allTeachTrg = []; // ordered list

    // First pass: collect all teach trg values
    for (const step of steps) {
      if (step.type === 'teach') {
        const trg = (step.trg || step.nl || '').trim();
        if (trg) allTeachTrg.push(trg);
      }
    }

    totalTeachCards += allTeachTrg.length;

    // Collect all quiz answer words
    const quizAnswers = []; // {word, stepType, context}

    for (const step of steps) {
      if (step.type === 'mc') {
        totalQuizSteps++;
        const ans = (step.ans || '').trim();
        if (ans) quizAnswers.push({ word: ans, stepType: 'mc', step });
        // Check opts for PP61 hint
        if (step.hint) {
          if (isLikelyGerman(step.hint)) {
            pp61Violations.push({
              unit: unitId, lesson: lessonId,
              field: 'mc.hint',
              text: step.hint.substring(0, 100)
            });
          }
        }
      } else if (step.type === 'fb') {
        totalQuizSteps++;
        const aRaw = Array.isArray(step.a) ? step.a[0] : (step.a || '');
        const a = typeof aRaw === 'string' ? aRaw : String(aRaw || '');
        if (a) quizAnswers.push({ word: a.trim(), stepType: 'fb', step });
        if (step.hint) {
          if (isLikelyGerman(step.hint)) {
            pp61Violations.push({
              unit: unitId, lesson: lessonId,
              field: 'fb.hint',
              text: step.hint.substring(0, 100)
            });
          }
        }
      }
    }

    // PP52 check: for each quiz answer, was it taught before?
    // Build a "teach set up to each quiz" dynamically
    let seenTeach = new Set();

    for (const step of steps) {
      if (step.type === 'teach') {
        const trg = (step.trg || step.nl || '').trim().toLowerCase();
        if (trg) seenTeach.add(trg);
        // Also add common forms (simple root)
        if (trg.length >= 4) seenTeach.add(trg.substring(0, 4));
      } else if (step.type === 'mc' || step.type === 'fb') {
        let answerWord;
        if (step.type === 'mc') {
          answerWord = (step.ans || '').trim().toLowerCase();
        } else {
          const fbA = Array.isArray(step.a) ? step.a[0] : (step.a || '');
          answerWord = String(fbA || '').trim().toLowerCase();
        }

        if (!answerWord) continue;

        // Check if this answer word was taught
        const isTaught =
          seenTeach.has(answerWord) ||
          seenTeach.has(answerWord.substring(0, Math.min(4, answerWord.length))) ||
          // Also check if any seenTeach word contains the answer
          [...seenTeach].some(t => t.includes(answerWord) || answerWord.includes(t)) ||
          // Also check opts for mc — if any opt matches, skip (might be distractor)
          false;

        if (!isTaught && answerWord.length >= 3) {
          // Extra check: search all opts to see if it's a multi-choice where ALL opts might be from prior lessons
          // Only flag if the answer is definitely not in any teach card
          const inAllTeach = allTeachTrg.some(t =>
            t.toLowerCase().includes(answerWord) ||
            answerWord.includes(t.toLowerCase().substring(0, Math.min(4, t.length)))
          );

          if (!inAllTeach) {
            pp52Violations.push({
              unit: unitId, lesson: lessonId,
              type: step.type,
              answer: answerWord,
              context: (step.q || step.s || '').substring(0, 60)
            });
          }
        }
      }
    }

    // PP64 check: every teach card must be tested somewhere in lesson
    // Collect all quiz content in lesson
    const allQuizContent = [];
    for (const step of steps) {
      if (step.type === 'mc') {
        allQuizContent.push(step.q || '', step.ans || '', ...(step.opts || []));
      } else if (step.type === 'fb') {
        allQuizContent.push(step.s || '', step.a || '', ...(step.opts || []));
      } else if (step.type === 'match') {
        (step.pairs || []).forEach(p => {
          allQuizContent.push(p.trg || '', p.src || '');
        });
      } else if (step.type === 'drag_fill') {
        allQuizContent.push(step.s || '', ...(step.pool || []));
        if (step.blanks) allQuizContent.push(...Object.values(step.blanks));
      }
    }
    const allQuizStr = allQuizContent.join(' ').toLowerCase();

    for (const trg of allTeachTrg) {
      const trgLower = trg.toLowerCase();
      // Check if the trg word appears in any quiz content
      const isTested = allQuizStr.includes(trgLower) ||
        (trgLower.length >= 4 && allQuizStr.includes(trgLower.substring(0, 4)));

      if (!isTested) {
        pp64Violations.push({
          unit: unitId, lesson: lessonId,
          untestedWord: trg
        });
      }
    }

    // PP61 check: teach card notes, funFact; intro desc/goals; tip text/deepDive
    for (const step of steps) {
      if (step.type === 'teach') {
        if (step.note && isLikelyGerman(step.note)) {
          pp61Violations.push({
            unit: unitId, lesson: lessonId,
            field: 'teach.note',
            text: step.note.substring(0, 100)
          });
        }
        if (step.funFact && isLikelyGerman(step.funFact)) {
          pp61Violations.push({
            unit: unitId, lesson: lessonId,
            field: 'teach.funFact',
            text: step.funFact.substring(0, 100)
          });
        }
      } else if (step.type === 'intro') {
        if (step.desc && isLikelyGerman(step.desc)) {
          pp61Violations.push({
            unit: unitId, lesson: lessonId,
            field: 'intro.desc',
            text: step.desc.substring(0, 100)
          });
        }
        if (Array.isArray(step.goals)) {
          for (const g of step.goals) {
            if (isLikelyGerman(g)) {
              pp61Violations.push({
                unit: unitId, lesson: lessonId,
                field: 'intro.goal',
                text: g.substring(0, 100)
              });
            }
          }
        }
      } else if (step.type === 'tip') {
        if (step.text && isLikelyGerman(step.text)) {
          pp61Violations.push({
            unit: unitId, lesson: lessonId,
            field: 'tip.text',
            text: step.text.substring(0, 100)
          });
        }
        if (step.deepDive && isLikelyGerman(step.deepDive)) {
          pp61Violations.push({
            unit: unitId, lesson: lessonId,
            field: 'tip.deepDive',
            text: step.deepDive.substring(0, 100)
          });
        }
      }
    }
  }

  process.stdout.write(`\rScanned ${unitNum}/36 units...`);
}

// ─── Report ───────────────────────────────────────────────────────────────────
console.log('\n\n═══════════════════════════════════════════════════════════');
console.log('VALIDATION REPORT: PP52 + PP64 + PP61');
console.log('═══════════════════════════════════════════════════════════');
console.log(`Units scanned: ${totalUnits}/36`);
console.log(`Lessons scanned: ${totalLessons}`);
console.log(`Teach cards: ${totalTeachCards}`);
console.log(`Quiz steps (mc+fb): ${totalQuizSteps}`);
console.log('');

// PP52
console.log('─── PP52: Teach-before-use ─────────────────────────────────');
// Filter out likely false positives (very short words, common function words)
const FUNCTION_WORDS = new Set(['ich', 'du', 'er', 'sie', 'es', 'wir', 'ihr', 'ja', 'nein', 'nicht', 'und', 'oder', 'aber', 'ist', 'bin', 'hat', 'haben', 'sein', 'der', 'die', 'das', 'ein', 'eine', 'auf', 'in', 'an', 'zu', 'von', 'mit', 'für', 'bei', 'nach', 'bitte', 'danke', 'noch', 'auch', 'so', 'wie', 'was', 'wo', 'wer', 'wenn', 'dass', 'ob']);
const filteredPP52 = pp52Violations.filter(v =>
  v.answer.length >= 3 && !FUNCTION_WORDS.has(v.answer)
);
if (filteredPP52.length === 0) {
  console.log('✓ No violations found');
} else {
  console.log(`${filteredPP52.length} potential violations:`);
  // Group by unit
  const byUnit = {};
  for (const v of filteredPP52) {
    if (!byUnit[v.unit]) byUnit[v.unit] = [];
    byUnit[v.unit].push(v);
  }
  for (const [unit, vs] of Object.entries(byUnit)) {
    console.log(`  ${unit}: ${vs.length} items`);
    vs.slice(0, 5).forEach(v => {
      console.log(`    [${v.lesson}] ${v.type} ans="${v.answer}" ctx="${v.context}"`);
    });
    if (vs.length > 5) console.log(`    ... and ${vs.length - 5} more`);
  }
}

// PP64
console.log('\n─── PP64: Teach-then-test ──────────────────────────────────');
// Filter out single-char words and very common words
const filteredPP64 = pp64Violations.filter(v => v.untestedWord.length >= 3);
if (filteredPP64.length === 0) {
  console.log('✓ No violations found');
} else {
  console.log(`${filteredPP64.length} untested teach cards:`);
  const byUnit64 = {};
  for (const v of filteredPP64) {
    if (!byUnit64[v.unit]) byUnit64[v.unit] = [];
    byUnit64[v.unit].push(v);
  }
  for (const [unit, vs] of Object.entries(byUnit64)) {
    console.log(`  ${unit}: ${vs.length} items`);
    vs.slice(0, 5).forEach(v => {
      console.log(`    [${v.lesson}] trg="${v.untestedWord}"`);
    });
    if (vs.length > 5) console.log(`    ... and ${vs.length - 5} more`);
  }
}

// PP61
console.log('\n─── PP61: Metalanguage in English ──────────────────────────');
if (pp61Violations.length === 0) {
  console.log('✓ No violations found');
} else {
  console.log(`${pp61Violations.length} potential violations:`);
  const byUnit61 = {};
  for (const v of pp61Violations) {
    if (!byUnit61[v.unit]) byUnit61[v.unit] = [];
    byUnit61[v.unit].push(v);
  }
  for (const [unit, vs] of Object.entries(byUnit61)) {
    console.log(`  ${unit}: ${vs.length} items`);
    vs.slice(0, 5).forEach(v => {
      console.log(`    [${v.lesson}] ${v.field}: "${v.text}"`);
    });
    if (vs.length > 5) console.log(`    ... and ${vs.length - 5} more`);
  }
}

console.log('\n═══════════════════════════════════════════════════════════');
const totalIssues = filteredPP52.length + filteredPP64.length + pp61Violations.length;
if (totalIssues === 0) {
  console.log('ALL CHECKS PASS — Zero violations');
} else {
  console.log(`TOTAL ISSUES: ${totalIssues} (PP52: ${filteredPP52.length}, PP64: ${filteredPP64.length}, PP61: ${pp61Violations.length})`);
}
console.log('═══════════════════════════════════════════════════════════\n');
