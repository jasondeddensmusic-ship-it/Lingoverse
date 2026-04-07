#!/usr/bin/env node
/**
 * FINAL Validation Script: PP52 + PP64 + PP61
 *
 * PP52: Quiz answers must trace to a teach card in THIS lesson OR ANY PRIOR lesson in the unit.
 *       Checks only German-word answers (not English translations).
 *       Strips articles before matching.
 *
 * PP64: Every teach card trg must appear in at least one quiz step
 *       in the SAME lesson or any LATER lesson in the unit.
 *
 * PP61: Metalanguage (hint, note, funFact, intro, tip) must be English.
 *       Strict threshold: text must be PRIMARILY German (4+ unique German function words,
 *       at least 2x more than English markers), not just containing German examples.
 */

'use strict';
const fs = require('fs');
const path = require('path');

const BASE_DIR = path.resolve(__dirname, '../src/data/german-v2');

// ─── Normalization ────────────────────────────────────────────────────────────
const ARTICLE_RE = /^(der|die|das|ein|eine|einen|einem|einer|eines|dem|den|des)\s+/i;

function stripArticle(str) {
  return str.trim().replace(ARTICLE_RE, '').trim();
}

function normWord(str) {
  return stripArticle(str)
    .toLowerCase()
    .replace(/[.,!?;:"'()\[\]{}\-\/]/g, '')
    .trim();
}

// ─── German vs English detection ─────────────────────────────────────────────
// Returns true if str looks like a German word (not an English translation)
function looksGerman(str) {
  if (!str || str.length < 2) return false;
  // Umlauts = German
  if (/[äöüß]/.test(str)) return true;
  // Obvious English sentence starters / common English words
  const englishStart = /^(the |a |an |i |he |she |it |we |they |yes |no |not |good |bad |hello |goodbye |thank |please |excuse |sorry |true |false |where |when |what |which |who |how |both |neither |all |none |this |that |here |there |now |then |very |even |only |just |formal |informal |polite |masculine |feminine |neuter |singular |plural |accusative |dative |nominative |genitive )/i;
  if (englishStart.test(str + ' ')) return false;
  // Multi-word English answers (contain English function words)
  if (/\b(the |a |an |is |are |was |were |has |have |will |would |can |could |should |and |or |but |with |from |for )\b/i.test(str)) return false;
  // German-typical endings
  if (/ung\b|keit\b|heit\b|lich\b|isch\b|ieren\b|schaft\b|tum\b|nis\b/.test(str.toLowerCase())) return true;
  // Starts with capital, looks like German noun (common German patterns)
  if (/^[A-ZÄÖÜ][a-zäöüß]{3,}/.test(str) && !/^[A-Z][a-z]+(ing|ed|er|est|ly|ness|tion|ment|ance|ence|ive|ous|ful|less|able|ible)\b/.test(str)) {
    // Likely German if 5+ chars and doesn't have English morphology
    return str.length >= 5;
  }
  return false;
}

// ─── PP61 primary-German detection ───────────────────────────────────────────
function isPrimarilyGerman(text) {
  if (!text || typeof text !== 'string' || text.length < 20) return false;
  const t = text.toLowerCase();

  const gMarkers = [
    'der ', 'die ', 'das ', 'den ', 'dem ', 'des ',
    'ein ', 'eine ', 'einen ', 'einem ', 'einer ',
    ' ist ', ' sind ', ' war ', ' waren ', ' hat ', ' haben ', ' wird ', ' werden ',
    ' und ', ' oder ', ' aber ', ' auch ', ' nicht ', ' kein ', ' keine ',
    ' mit ', ' von ', ' zu ', ' für ', ' bei ', ' nach ', ' über ', ' unter ',
    ' ich ', ' du ', ' er ', ' sie ', ' es ', ' wir ', ' ihr ',
    ' wenn ', ' dass ', ' weil ', ' obwohl ', ' damit ', ' jedoch ',
  ].filter(w => t.includes(w));

  const eMarkers = [
    ' the ', ' a ', ' an ', ' is ', ' are ', ' was ', ' were ',
    ' has ', ' have ', ' will ', ' would ', ' can ', ' could ', ' should ',
    ' and ', ' or ', ' but ', ' also ', ' not ', ' no ',
    ' with ', ' from ', ' to ', ' for ', ' in ', ' on ', ' at ', ' by ',
    ' after ', ' before ', ' over ', ' under ',
    ' use ', ' used ', ' means ', ' refers ', ' indicates ',
    ' this ', ' that ', ' these ', ' those ',
    ' it ', ' its ', ' they ', ' their ', ' you ', ' we ',
    ' noun ', ' verb ', ' adverb ', ' plural ', ' singular ',
    ' german ', ' english ', ' word ', ' form ', ' case ', ' tense ', ' mood ',
    ' takes ', ' adds ', ' makes ', ' becomes ', ' shows ', ' note ',
    ' remember ', ' tip ', ' when ', ' always ', ' never ', ' always ',
    ' first ', ' second ', ' third ', ' often ', ' usually ',
  ].filter(w => t.includes(w));

  // Strictly: 4+ German markers AND at least 2x German vs English
  return gMarkers.length >= 4 && gMarkers.length > eMarkers.length * 2;
}

// ─── Load unit ────────────────────────────────────────────────────────────────
function loadUnit(filePath) {
  const src = fs.readFileSync(filePath, 'utf8');
  try {
    const modifiedSrc = src.replace(/export\s+default\s+/, 'var __UNIT_DATA = ')
                           .replace(/export\s+const\s+\w+\s*=\s*/, 'var __UNIT_DATA = ');
    const fn = new Function(modifiedSrc + '; return typeof __UNIT_DATA !== "undefined" ? __UNIT_DATA : null;');
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

  // ─── Pre-build unit-level teach catalogue (for PP52 cross-lesson) ──────────
  // unitTeachByLesson[i] = Set of normalized trg values taught up to and including lesson i
  const cumulativeTeach = []; // cumulativeTeach[i] = Set of all normed trg in lessons 0..i
  let runningTeachSet = new Set();
  // Also store per-lesson teach sets for PP64
  const lessonTeachSets = [];

  for (let li = 0; li < lessons.length; li++) {
    const steps = lessons[li].steps || [];
    const thisLessonNorms = new Set();
    for (const step of steps) {
      if (step.type === 'teach') {
        const trg = (step.trg || step.nl || '').trim();
        if (trg) {
          const norm = normWord(trg);
          if (norm) {
            runningTeachSet.add(norm);
            thisLessonNorms.add(norm);
            // Add component words for multi-word phrases
            norm.split(/\s+/).forEach(w => { if (w.length >= 3) runningTeachSet.add(w); });
          }
        }
      }
    }
    cumulativeTeach.push(new Set(runningTeachSet)); // snapshot up to lesson i
    lessonTeachSets.push(thisLessonNorms);
  }

  // ─── Pre-build unit-level quiz content (for PP64 cross-lesson) ─────────────
  // quizFromLesson[i] = string of all quiz content from lessons i..end
  const quizFromLesson = []; // quizFromLesson[i] = quiz content in lessons[i..end]
  // Build suffix arrays
  const lessonQuizContent = [];
  for (let li = 0; li < lessons.length; li++) {
    const steps = lessons[li].steps || [];
    const parts = [];
    for (const step of steps) {
      if (step.type === 'mc') {
        parts.push(step.q || '', step.ans || '', ...(step.opts || []));
      } else if (step.type === 'fb') {
        parts.push(step.s || '');
        const raw = Array.isArray(step.a) ? step.a : [step.a];
        parts.push(...raw.map(x => String(x || '')));
        parts.push(...(step.opts || []));
      } else if (step.type === 'match') {
        (step.pairs || []).forEach(p => parts.push(p.trg || '', p.src || ''));
      } else if (step.type === 'drag_fill') {
        parts.push(step.s || '', ...(step.pool || []));
        if (step.blanks && typeof step.blanks === 'object') {
          parts.push(...Object.values(step.blanks));
        }
      }
    }
    lessonQuizContent.push(parts.join(' ').toLowerCase());
  }
  // Build suffix: quizFromLesson[i] = all quiz from lesson i onwards
  for (let i = 0; i < lessons.length; i++) {
    quizFromLesson.push(lessonQuizContent.slice(i).join(' '));
  }

  // ─── Per-lesson checks ─────────────────────────────────────────────────────
  for (let li = 0; li < lessons.length; li++) {
    const lesson = lessons[li];
    stats.lessons++;
    const steps = lesson.steps || [];
    const lessonId = lesson.id || `L${li+1}`;
    const unitId = `U${unitNum}`;

    // The cumulative teach set available at the START of this lesson (lessons 0..li)
    const availableTeach = cumulativeTeach[li]; // includes this lesson's teach cards too

    // PP52: Check each quiz answer
    for (const step of steps) {
      if (step.type !== 'mc' && step.type !== 'fb') continue;
      stats.quizSteps++;

      let answerRaw = '';
      if (step.type === 'mc') {
        answerRaw = String(step.ans || '').trim();
      } else {
        const raw = Array.isArray(step.a) ? step.a[0] : step.a;
        answerRaw = String(raw || '').trim();
      }

      if (!answerRaw || answerRaw.length < 2) continue;
      if (!looksGerman(answerRaw)) continue;

      const ansNorm = normWord(answerRaw);
      if (!ansNorm || ansNorm.length < 2) continue;

      // Check in unit's cumulative teach set (all lessons up to + including this one)
      let taught = availableTeach.has(ansNorm);

      // Stem match (first 5 chars) for inflected forms
      if (!taught && ansNorm.length >= 6) {
        const stem = ansNorm.substring(0, 5);
        taught = [...availableTeach].some(t => t.length >= 5 && (t.startsWith(stem) || ansNorm.startsWith(t.substring(0, 5))));
      }

      // Multi-word: check if any significant word was taught
      if (!taught && ansNorm.includes(' ')) {
        const words = ansNorm.split(/\s+/).filter(w => w.length >= 4);
        taught = words.some(w => {
          if (availableTeach.has(w)) return true;
          if (w.length >= 6) {
            const ws = w.substring(0, 5);
            return [...availableTeach].some(t => t.length >= 5 && t.startsWith(ws));
          }
          return false;
        });
      }

      if (!taught) {
        const ctx = (step.q || step.s || '').substring(0, 70);
        pp52Violations.push({ unit: unitId, lesson: lessonId, type: step.type, answer: answerRaw, ctx });
      }
    }

    // PP64: Check each teach card is quizzed in this or a later lesson
    for (const step of steps) {
      if (step.type !== 'teach') continue;
      const trg = (step.trg || step.nl || '').trim();
      if (!trg || trg.length < 3) { stats.teachCards++; continue; }
      stats.teachCards++;

      const norm = normWord(trg);
      if (!norm || norm.length < 2) continue;

      // Check in quiz content from this lesson onwards (suffix)
      const quizSuffix = quizFromLesson[li];
      const tested = quizSuffix.includes(norm) ||
        (norm.length >= 6 && quizSuffix.includes(norm.substring(0, 5))) ||
        // Also check without article (the teach card might use article but quiz uses bare noun)
        quizSuffix.includes(normWord(stripArticle(trg)));

      if (!tested) {
        pp64Violations.push({ unit: unitId, lesson: lessonId, trg });
      }
    }

    // PP61: Check metalanguage fields
    for (const step of steps) {
      if (step.type === 'mc' || step.type === 'fb') {
        if (step.hint && isPrimarilyGerman(step.hint)) {
          pp61Violations.push({ unit: unitId, lesson: lessonId, field: `${step.type}.hint`, text: step.hint.substring(0, 130) });
        }
      }
      if (step.type === 'teach') {
        if (step.note && isPrimarilyGerman(step.note)) {
          pp61Violations.push({ unit: unitId, lesson: lessonId, field: 'teach.note', text: step.note.substring(0, 130) });
        }
        if (step.funFact && isPrimarilyGerman(step.funFact)) {
          pp61Violations.push({ unit: unitId, lesson: lessonId, field: 'teach.funFact', text: step.funFact.substring(0, 130) });
        }
      }
      if (step.type === 'intro') {
        if (step.desc && isPrimarilyGerman(step.desc)) {
          pp61Violations.push({ unit: unitId, lesson: lessonId, field: 'intro.desc', text: step.desc.substring(0, 130) });
        }
        (step.goals || []).forEach((g, i) => {
          if (typeof g === 'string' && isPrimarilyGerman(g)) {
            pp61Violations.push({ unit: unitId, lesson: lessonId, field: `intro.goal[${i}]`, text: g.substring(0, 130) });
          }
        });
      }
      if (step.type === 'tip') {
        if (step.text && isPrimarilyGerman(step.text)) {
          pp61Violations.push({ unit: unitId, lesson: lessonId, field: 'tip.text', text: step.text.substring(0, 130) });
        }
        if (step.deepDive && isPrimarilyGerman(step.deepDive)) {
          pp61Violations.push({ unit: unitId, lesson: lessonId, field: 'tip.deepDive', text: step.deepDive.substring(0, 130) });
        }
      }
    }
  }

  process.stdout.write(`\rScanned ${unitNum}/36...`);
}

// ─── Report ───────────────────────────────────────────────────────────────────
console.log('\n\n═══════════════════════════════════════════════════════════════════');
console.log('VALIDATION REPORT (FINAL): PP52 + PP64 + PP61');
console.log('═══════════════════════════════════════════════════════════════════');
console.log(`Units: ${stats.units}/36 | Lessons: ${stats.lessons} | Teach cards: ${stats.teachCards} | Quiz steps (mc+fb): ${stats.quizSteps}`);
console.log('');
console.log('NOTE: PP52 checks cumulative teach set (all prior lessons in unit).');
console.log('NOTE: PP64 checks quiz coverage in same + later lessons within unit.');
console.log('NOTE: PP61 requires 4+ German function words AND 2x more German than English.');
console.log('');

function sortedByUnit(obj) {
  return Object.entries(obj).sort((a, b) => {
    const na = parseInt(a[0].replace('U', ''));
    const nb = parseInt(b[0].replace('U', ''));
    return na - nb;
  });
}

// PP52
console.log('── PP52: Teach-before-use ──────────────────────────────────────────');
if (pp52Violations.length === 0) {
  console.log('  PASS — Zero violations');
} else {
  const byUnit = {};
  for (const v of pp52Violations) {
    if (!byUnit[v.unit]) byUnit[v.unit] = [];
    byUnit[v.unit].push(v);
  }
  console.log(`  ${pp52Violations.length} items across ${Object.keys(byUnit).length} units:`);
  for (const [unit, vs] of sortedByUnit(byUnit)) {
    console.log(`  ${unit} (${vs.length}):`);
    vs.forEach(v => console.log(`    [${v.lesson}] ${v.type} ans="${v.answer}"  |  "${v.ctx}"`));
  }
}

// PP64
console.log('\n── PP64: Teach-then-test ───────────────────────────────────────────');
if (pp64Violations.length === 0) {
  console.log('  PASS — Zero violations');
} else {
  const byUnit = {};
  for (const v of pp64Violations) {
    if (!byUnit[v.unit]) byUnit[v.unit] = [];
    byUnit[v.unit].push(v);
  }
  console.log(`  ${pp64Violations.length} untested teach cards across ${Object.keys(byUnit).length} units:`);
  for (const [unit, vs] of sortedByUnit(byUnit)) {
    console.log(`  ${unit} (${vs.length}):`);
    vs.slice(0, 12).forEach(v => console.log(`    [${v.lesson}] "${v.trg}"`));
    if (vs.length > 12) console.log(`    ... and ${vs.length - 12} more`);
  }
}

// PP61
console.log('\n── PP61: Metalanguage in English ───────────────────────────────────');
if (pp61Violations.length === 0) {
  console.log('  PASS — Zero violations');
} else {
  const byUnit = {};
  for (const v of pp61Violations) {
    if (!byUnit[v.unit]) byUnit[v.unit] = [];
    byUnit[v.unit].push(v);
  }
  console.log(`  ${pp61Violations.length} items across ${Object.keys(byUnit).length} units:`);
  for (const [unit, vs] of sortedByUnit(byUnit)) {
    console.log(`  ${unit} (${vs.length}):`);
    vs.forEach(v => console.log(`    [${v.lesson}] ${v.field}: "${v.text}"`));
  }
}

// Summary
console.log('\n═══════════════════════════════════════════════════════════════════');
const total = pp52Violations.length + pp64Violations.length + pp61Violations.length;
if (total === 0) {
  console.log('ALL CHECKS PASS — Zero violations');
} else {
  console.log(`TOTAL: ${total}  |  PP52: ${pp52Violations.length}  |  PP64: ${pp64Violations.length}  |  PP61: ${pp61Violations.length}`);
}
console.log('═══════════════════════════════════════════════════════════════════\n');
