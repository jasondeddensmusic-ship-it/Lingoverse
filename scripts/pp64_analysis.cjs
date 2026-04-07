#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const BASE = path.join(__dirname, '..', 'src', 'data', 'german-v2');

// Load a unit file and extract the exported unit object
function loadUnit(n) {
  const pad = String(n).padStart(2, '0');
  const filePath = path.join(BASE, `unit-${pad}.js`);
  const src = fs.readFileSync(filePath, 'utf8');

  // Strip export statements and wrap for CommonJS
  let code = src
    .replace(/^export\s+default\s+/m, 'module.exports = ');

  // If no export default found, try to find the UNIT_N = {...} pattern and export it
  if (!code.includes('module.exports')) {
    const match = code.match(/^(?:const\s+)?(UNIT_\d+)\s*=/m);
    if (match) {
      const varName = match[1];
      code = code + `\nmodule.exports = ${varName};`;
    }
  }

  const mod = { exports: {} };
  const ctx = vm.createContext({ module: mod, exports: mod.exports, require });
  try {
    vm.runInContext(code, ctx);
  } catch(e) {
    console.error(`Error loading unit ${n}: ${e.message}`);
    return null;
  }
  return mod.exports;
}

// Extract all words that appear in quiz steps (considered "tested")
function getQuizWords(steps) {
  const words = new Set();

  for (const step of steps) {
    if (!step || !step.type) continue;

    const addWord = (w) => {
      if (w && typeof w === 'string') {
        const trimmed = w.trim();
        words.add(trimmed);
        // Also add without trailing punctuation
        words.add(trimmed.replace(/[.,!?;:'"]+$/, '').trim());
        // Add lowercase
        words.add(trimmed.toLowerCase());
      }
    };

    if (step.type === 'mc') {
      addWord(step.ans);
      if (step.q) addWord(step.q);
      if (Array.isArray(step.opts)) step.opts.forEach(addWord);
    }

    if (step.type === 'fb') {
      // ans can be string or array
      if (typeof step.a === 'string') addWord(step.a);
      else if (Array.isArray(step.a)) step.a.forEach(addWord);
      if (step.s) addWord(step.s);
      if (Array.isArray(step.opts)) step.opts.forEach(addWord);
    }

    if (step.type === 'match') {
      if (Array.isArray(step.pairs)) {
        step.pairs.forEach(p => {
          if (p) {
            addWord(p.trg);
            addWord(p.src);
          }
        });
      }
    }

    if (step.type === 'drag_fill') {
      if (step.blanks && typeof step.blanks === 'object') {
        Object.values(step.blanks).forEach(addWord);
      }
      if (Array.isArray(step.pool)) step.pool.forEach(addWord);
      if (step.s) addWord(step.s);
    }

    if (step.type === 'tr') {
      if (step.mk) addWord(step.mk);
    }
  }

  return words;
}

// Check if a teach word is "covered" by a set of quiz words
function isCovered(trgWord, quizWords) {
  if (!trgWord) return false;
  const t = trgWord.trim().toLowerCase();

  for (const qw of quizWords) {
    if (!qw) continue;
    const q = qw.toLowerCase();
    // Direct match
    if (q === t) return true;
    // qw contains the teach word (for phrases)
    if (q.includes(t) && t.length > 2) return true;
    // teach word contains qw (e.g. "der Hund" matched by "Hund")
    if (t.includes(q) && q.length > 3) return true;
  }
  return false;
}

// Guess semantic theme from a group of teach card trg words
function guessTheme(words) {
  if (!words.length) return 'mixed';
  return words.slice(0, 4).join(', ') + (words.length > 4 ? '...' : '');
}

// Find natural break point in a lesson's steps
function findBreakPoint(steps) {
  const target = Math.floor(steps.length / 2);

  // Look for tip/story/quiz boundary near the middle
  for (let offset = 0; offset <= 10; offset++) {
    for (const delta of [offset, -offset]) {
      const idx = target + delta;
      if (idx <= 2 || idx >= steps.length - 2) continue;
      const s = steps[idx];
      if (!s) continue;
      // After a tip or story is a natural break
      if (s.type === 'tip' || s.type === 'story' || s.type === 'mc' || s.type === 'match' || s.type === 'fb') {
        const beforeTeach = steps.slice(0, idx + 1).filter(x => x && x.type === 'teach').length;
        const afterTeach = steps.slice(idx + 1).filter(x => x && x.type === 'teach').length;
        if (beforeTeach >= 2 && afterTeach >= 2) {
          return { breakAfter: idx, beforeTeach, afterTeach };
        }
      }
    }
  }

  // Fallback: break at midpoint
  const beforeTeach = steps.slice(0, target+1).filter(x => x && x.type === 'teach').length;
  const afterTeach = steps.slice(target+1).filter(x => x && x.type === 'teach').length;
  return { breakAfter: target, beforeTeach, afterTeach };
}

// Main analysis
const results = [];
let totalUntested = 0;
let totalSplitCandidates = 0;
let totalNewLessons = 0;

const output = [];

for (let unitNum = 1; unitNum <= 36; unitNum++) {
  const unit = loadUnit(unitNum);
  if (!unit || !unit.lessons) {
    output.push(`\n=== UNIT ${String(unitNum).padStart(2,'0')} === [FAILED TO LOAD]`);
    continue;
  }

  const lessons = unit.lessons;
  let unitHasOutput = false;

  for (let li = 0; li < lessons.length; li++) {
    const lesson = lessons[li];
    if (!lesson || !lesson.steps) continue;

    const steps = lesson.steps;
    const stepCount = steps.length;

    // Collect teach cards in this lesson
    const teachCards = steps
      .map((s, i) => ({ step: s, idx: i }))
      .filter(({ step }) => step && step.type === 'teach');

    if (teachCards.length === 0) continue;

    // Collect quiz words from this lesson AND all later lessons in the unit
    const laterSteps = [];
    for (let k = li; k < lessons.length; k++) {
      if (lessons[k] && lessons[k].steps) {
        laterSteps.push(...lessons[k].steps);
      }
    }
    const quizWords = getQuizWords(laterSteps);

    // Find untested teach cards
    const untestedCards = teachCards.filter(({ step }) => !isCovered(step.trg, quizWords));
    const untestedWords = untestedCards.map(({ step }) => step.trg);

    totalUntested += untestedCards.length;

    const isSplitCandidate = untestedCards.length >= 3 && stepCount >= 28;

    if (isSplitCandidate) {
      totalSplitCandidates++;
      totalNewLessons++;
    }

    // Only output lessons with untested cards
    if (untestedCards.length > 0) {
      if (!unitHasOutput) {
        output.push(`\n=== UNIT ${String(unitNum).padStart(2,'0')}: ${unit.title} ===`);
        unitHasOutput = true;
      }

      const line = `LESSON ${lesson.id} — "${lesson.title}" (${stepCount} steps, ${teachCards.length} teaches, ${untestedCards.length} untested)`;
      output.push(`  ${line}`);
      output.push(`    Untested: [${untestedWords.join(', ')}]`);
      output.push(`    SPLIT CANDIDATE: ${isSplitCandidate ? 'YES' : 'No'}`);

      if (isSplitCandidate) {
        const bp = findBreakPoint(steps);
        const breakStep = steps[bp.breakAfter];
        const afterWord = breakStep ? (breakStep.trg || breakStep.type) : '?';

        const clusterA = steps.slice(0, bp.breakAfter + 1).filter(s => s && s.type === 'teach').map(s => s.trg);
        const clusterB = steps.slice(bp.breakAfter + 1).filter(s => s && s.type === 'teach').map(s => s.trg);

        output.push(`    If yes: Natural break after step index ${bp.breakAfter} (after ${breakStep ? breakStep.type : '?'} "${afterWord}")`);
        output.push(`      Cluster A (steps 0-${bp.breakAfter}): [${guessTheme(clusterA)}] (${clusterA.length} teaches)`);
        output.push(`      Cluster B (steps ${bp.breakAfter+1}-${stepCount-1}): [${guessTheme(clusterB)}] (${clusterB.length} teaches)`);
      }
    }

    results.push({
      unit: unitNum,
      unitTitle: unit.title,
      lessonId: lesson.id,
      lessonTitle: lesson.title,
      stepCount,
      teachCount: teachCards.length,
      untestedCount: untestedCards.length,
      untestedWords,
      isSplitCandidate,
    });
  }
}

output.push('\n' + '='.repeat(60));
output.push('GRAND TOTALS');
output.push('='.repeat(60));
output.push(`Total untested teach cards:    ${totalUntested}`);
output.push(`Total split candidate lessons: ${totalSplitCandidates}`);
output.push(`Total new lessons if split:    ${totalNewLessons}`);

// Compact split candidates summary
output.push('\n--- SPLIT CANDIDATES SUMMARY ---');
const splitCandidates = results.filter(r => r.isSplitCandidate);
if (splitCandidates.length === 0) {
  output.push('  (none)');
} else {
  splitCandidates.forEach(r => {
    output.push(`  U${String(r.unit).padStart(2,'0')} ${r.lessonId} "${r.lessonTitle}" — ${r.stepCount} steps, ${r.untestedCount} untested`);
    output.push(`    [${r.untestedWords.join(', ')}]`);
  });
}

// Lessons with untested but NOT split candidates
output.push('\n--- LESSONS WITH UNTESTED (not at capacity, can add quizzes directly) ---');
const notFull = results.filter(r => r.untestedCount > 0 && !r.isSplitCandidate);
if (notFull.length === 0) {
  output.push('  (none)');
} else {
  // Group by unit
  const byUnit = {};
  notFull.forEach(r => {
    if (!byUnit[r.unit]) byUnit[r.unit] = [];
    byUnit[r.unit].push(r);
  });
  Object.keys(byUnit).sort((a,b) => +a - +b).forEach(u => {
    output.push(`  Unit ${String(u).padStart(2,'0')} (${byUnit[u][0].unitTitle}):`);
    byUnit[u].forEach(r => {
      const room = 32 - r.stepCount;
      output.push(`    ${r.lessonId} "${r.lessonTitle}" — ${r.stepCount} steps (${room} room), ${r.untestedCount} untested: [${r.untestedWords.join(', ')}]`);
    });
  });
}

const outText = output.join('\n');
const outPath = path.join(__dirname, '_pp64_results.txt');
fs.writeFileSync(outPath, outText, 'utf8');
console.log(outText);
console.log(`\nResults also written to ${outPath}`);
