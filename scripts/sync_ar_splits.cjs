#!/usr/bin/env node
/**
 * sync_ar_splits.cjs
 *
 * Syncs Arabic-source German v2 unit files with English-source files
 * by applying the same lesson splits (b-suffix lessons).
 *
 * EN units have 566 lessons (369 original + ~189 splits).
 * AR units have 370 lessons (no splits yet).
 * This script creates matching splits in AR files.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const EN_DIR = path.join(ROOT, 'src/data/german-v2');
const AR_DIR = path.join(ROOT, 'src/data/german-v2-ar');

// ── Hint translation map (EN → AR) ──
const HINT_MAP = [
  [/^Think about/i, 'فكّر في'],
  [/^Consider/i, 'فكّر في'],
  [/^Which word fits/i, 'أي كلمة تناسب'],
  [/^The opposite of/i, 'عكس'],
  [/^A word meaning/i, 'كلمة تعني'],
  [/^A common word for/i, 'كلمة شائعة تعني'],
  [/^What does this word mean/i, 'ماذا تعني هذه الكلمة'],
  [/^This word means/i, 'هذه الكلمة تعني'],
  [/^Remember the meaning/i, 'تذكّر المعنى'],
  [/^Recall what/i, 'تذكّر ماذا'],
  [/^Which option/i, 'أي خيار'],
  [/^What is the correct/i, 'ما هو الصحيح'],
  [/^This is a basic/i, 'هذه كلمة أساسية'],
  [/^A greeting/i, 'تحية'],
  [/^Related to/i, 'مرتبط بـ'],
  [/^Not a/i, 'ليس'],
  [/^Look at the/i, 'انظر إلى'],
  [/^Focus on/i, 'ركّز على'],
  [/^This verb means/i, 'هذا الفعل يعني'],
  [/^A short word/i, 'كلمة قصيرة'],
  [/^An important/i, 'كلمة مهمة'],
  [/^This noun/i, 'هذا الاسم'],
  [/^This adjective/i, 'هذه الصفة'],
  [/^How would you say/i, 'كيف تقول'],
  [/^What word completes/i, 'أي كلمة تكمل'],
  [/^Fill in the blank/i, 'أكمل الفراغ'],
  [/^Choose the right/i, 'اختر الصحيح'],
  [/^Pick the correct/i, 'اختر الصحيح'],
];

function translateHint(enHint) {
  if (!enHint) return enHint;
  for (const [pattern, arPrefix] of HINT_MAP) {
    if (pattern.test(enHint)) {
      // Replace the English prefix, keep the rest (which may include German words)
      const rest = enHint.replace(pattern, '').trim();
      // If rest starts with punctuation, skip it
      const cleanRest = rest.replace(/^[.,;:\s]+/, '').trim();
      if (cleanRest) {
        return arPrefix + ' ' + cleanRest;
      }
      return arPrefix;
    }
  }
  // Fallback: return a generic Arabic hint
  return 'فكّر في معنى الكلمة.';
}

function translateSrc(enSrc) {
  if (!enSrc) return enSrc;
  // sSrc fields in quizzes are typically the German sentence translation
  // For PP64 quizzes like "Was bedeutet X?" the sSrc is "What does X mean?"
  // We translate common patterns
  const m = enSrc.match(/^What does ['"](.+)['"] mean\??$/i);
  if (m) return `ماذا تعني '${m[1]}'؟`;
  const m2 = enSrc.match(/^How do you say ['"](.+)['"] in German\??$/i);
  if (m2) return `كيف تقول '${m2[1]}' بالألمانية؟`;
  // Generic fallback - keep as-is if it has German content
  return enSrc;
}

// ── Step signature for matching ──
function stepSig(step) {
  // Create a signature from the German-side content (which is identical in EN and AR)
  if (step.trg) return step.type + '|trg:' + step.trg.substring(0, 40);
  if (step.q) {
    // q might be in English (EN) or Arabic (AR) - use German words if present
    // Try to extract German quoted words
    const quoted = step.q.match(/'([^']+)'/);
    if (quoted) return step.type + '|q_w:' + quoted[1];
    return step.type + '|q:' + step.q.substring(0, 30);
  }
  if (step.s) {
    // s field is the German sentence (same in both)
    return step.type + '|s:' + step.s.substring(0, 40);
  }
  if (step.pairs) return step.type + '|match:' + step.pairs[0]?.trg?.substring(0, 20);
  if (step.title) return step.type + '|t:' + step.title.substring(0, 30);
  if (step.groups) return step.type + '|vt:' + step.title?.substring(0, 30);
  if (step.desc) return step.type + '|d:' + step.desc.substring(0, 30);
  return step.type + '|?';
}

// Looser matching: just type + German trg/s content
function stepMatchKey(step) {
  if (step.trg) return step.type + '|' + step.trg;
  if (step.s) return step.type + '|' + step.s;
  // For mc/match, try to match on the German word in the question
  if (step.q) {
    const quoted = step.q.match(/'([^']+)'/);
    if (quoted) return step.type + '|qw:' + quoted[1];
  }
  if (step.pairs) return step.type + '|pairs:' + step.pairs.map(p => p.trg).join(',');
  if (step.title && step.type === 'verb_table') return step.type + '|' + step.title;
  if (step.title && step.type === 'tip') return step.type + '|' + step.title;
  if (step.type === 'intro') return 'intro';
  return null;
}

// ── Parse unit file ──
function parseUnit(filePath) {
  let code = fs.readFileSync(filePath, 'utf8');
  // Remove comments
  code = code.replace(/^\/\/.*$/gm, '');
  // Remove export default
  code = code.replace(/export\s+default\s+\w+;?\s*/g, '');
  // Remove const UNIT_XX = (anywhere in the string, not just start)
  code = code.replace(/const\s+\w+\s*=\s*\n?/g, '');
  // Remove trailing semicolons
  code = code.trim().replace(/;\s*$/, '');
  // Eval the object
  try {
    return eval('(' + code + ')');
  } catch (e) {
    console.error('Parse error in', filePath, e.message);
    // Show context around error
    console.error('  First 300 chars:', code.substring(0, 300));
    return null;
  }
}

// ── Serialize a step to JS ──
function serializeValue(val, indent = 0) {
  if (val === null) return 'null';
  if (val === undefined) return 'undefined';
  if (typeof val === 'boolean') return val.toString();
  if (typeof val === 'number') return val.toString();
  if (typeof val === 'string') {
    // Use double quotes, escape internal quotes and backslashes
    const escaped = val
      .replace(/\\/g, '\\\\')
      .replace(/"/g, '\\"')
      .replace(/\n/g, '\\n')
      .replace(/\r/g, '\\r')
      .replace(/\t/g, '\\t');
    return '"' + escaped + '"';
  }
  if (Array.isArray(val)) {
    if (val.length === 0) return '[]';
    const items = val.map(v => serializeValue(v, indent));
    const oneLine = '[' + items.join(',') + ']';
    if (oneLine.length < 120) return oneLine;
    const pad = ' '.repeat(indent + 4);
    return '[\n' + items.map(v => pad + v).join(',\n') + '\n' + ' '.repeat(indent) + ']';
  }
  if (typeof val === 'object') {
    const entries = Object.entries(val);
    if (entries.length === 0) return '{}';
    const parts = entries.map(([k, v]) => {
      const key = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(k) ? k : serializeValue(k);
      return key + ':' + serializeValue(v, indent);
    });
    return '{' + parts.join(',') + '}';
  }
  return String(val);
}

function serializeStep(step) {
  return serializeValue(step);
}

function serializeLesson(lesson) {
  const parts = [];
  parts.push('id:' + serializeValue(lesson.id));
  parts.push('title:' + serializeValue(lesson.title));
  parts.push('icon:' + serializeValue(lesson.icon));
  parts.push('xp:' + lesson.xp);
  parts.push('board:' + lesson.board);
  parts.push('steps:[\n' + lesson.steps.map(s => '        ' + serializeStep(s)).join(',\n') + '\n      ]');
  return '{' + parts.join(',') + '}';
}

function serializeUnit(unit) {
  const header = [];
  header.push('n:' + unit.n);
  header.push('lang:' + serializeValue(unit.lang));
  header.push('srcLang:' + serializeValue(unit.srcLang));
  header.push('track:' + serializeValue(unit.track));
  header.push('title:' + serializeValue(unit.title));
  header.push('sub:' + serializeValue(unit.sub));
  header.push('icon:' + serializeValue(unit.icon));
  header.push('level:' + serializeValue(unit.level));
  header.push('color:' + serializeValue(unit.color));

  const lessonStrs = unit.lessons.map((l, i) => {
    const comment = `\n// ─── L${i + 1}: ${l.title} ───\n`;
    return comment + '    ' + serializeLesson(l);
  });

  const varName = 'UNIT_' + String(unit.n).padStart(2, '0') + '_AR';
  let out = `// German v2 Unit ${unit.n} — Arabic source language (srcLang:"ar")\n`;
  out += `// Auto-generated by sync_ar_splits.cjs\n`;
  out += `const ${varName} = {${header.join(',')},lessons:[`;
  out += lessonStrs.join(',');
  out += `\n  ]};\n\nexport default ${varName};\n`;
  return out;
}

// ── Main sync logic ──
function syncUnit(unitNum) {
  const pad = String(unitNum).padStart(2, '0');
  const enPath = path.join(EN_DIR, 'unit-' + pad + '.js');
  const arPath = path.join(AR_DIR, 'unit-' + pad + '.js');

  const enUnit = parseUnit(enPath);
  const arUnit = parseUnit(arPath);
  if (!enUnit || !arUnit) {
    console.error('  SKIP unit', unitNum, '- parse failed');
    return { added: 0, enCount: 0, arCount: 0 };
  }

  // Find all b-suffix lesson IDs in EN
  const bLessonIds = enUnit.lessons
    .filter(l => l.id.endsWith('b'))
    .map(l => l.id);

  if (bLessonIds.length === 0) {
    return { added: 0, enCount: enUnit.lessons.length, arCount: arUnit.lessons.length };
  }

  // Build AR lesson map by ID
  const arLessonMap = new Map();
  arUnit.lessons.forEach(l => arLessonMap.set(l.id, l));

  // Process each b-lesson
  const newArLessons = [];
  const splitOriginals = new Map(); // original lesson ID -> split point

  for (const bId of bLessonIds) {
    const origId = bId.slice(0, -1); // Remove 'b' suffix
    const enOrig = enUnit.lessons.find(l => l.id === origId);
    const enB = enUnit.lessons.find(l => l.id === bId);
    const arOrig = arLessonMap.get(origId);

    if (!enOrig || !enB || !arOrig) {
      console.error('  WARN: Missing lesson for', bId, '- enOrig:', !!enOrig, 'enB:', !!enB, 'arOrig:', !!arOrig);
      continue;
    }

    // Find the split point: match EN original steps to AR original steps
    // The EN original (after split) has fewer steps than AR original
    // We need to find where the EN original ends in the AR step list

    // Strategy: match steps sequentially by their German content
    const enOrigSteps = enOrig.steps;
    const enBSteps = enB.steps;
    const arOrigSteps = arOrig.steps;

    // Find the split point by matching the LAST step of EN original to AR
    // The EN original's last step should match somewhere in the AR original
    let splitPoint = -1;

    // Build match keys for EN original steps (skip intro since both have it)
    const enOrigKeys = enOrigSteps.map(s => stepMatchKey(s));

    // Try sequential matching
    let arIdx = 0;
    let lastMatchedArIdx = -1;
    for (let enIdx = 0; enIdx < enOrigKeys.length; enIdx++) {
      const enKey = enOrigKeys[enIdx];
      if (!enKey) continue;

      // Find this step in AR starting from current position
      let found = false;
      for (let j = arIdx; j < arOrigSteps.length; j++) {
        const arKey = stepMatchKey(arOrigSteps[j]);
        if (enKey === arKey || (enKey === 'intro' && arKey === 'intro')) {
          lastMatchedArIdx = j;
          arIdx = j + 1;
          found = true;
          break;
        }
      }
      if (!found) {
        // Step exists in EN original but not in AR - might be a newly added step
        // This is fine, we just skip it
      }
    }

    // Split point is right after the last matched AR step
    splitPoint = lastMatchedArIdx + 1;

    if (splitPoint <= 0 || splitPoint >= arOrigSteps.length) {
      // Fallback: use EN step count as split point
      // The EN original step count is the split point minus any added quiz steps
      splitPoint = Math.min(enOrigSteps.length, arOrigSteps.length);
      console.error('  WARN: Fuzzy split for', bId, '-> using step count', splitPoint);
    }

    splitOriginals.set(origId, splitPoint);

    // Now find new quiz steps in EN b-lesson (steps not in AR original)
    // EN b-lesson = intro + remaining AR steps + new PP64 quizzes
    const enBNonIntro = enBSteps.filter(s => s.type !== 'intro');
    const arRemaining = arOrigSteps.slice(splitPoint);

    // Build keys for AR remaining steps
    const arRemainingKeys = arRemaining.map(s => stepMatchKey(s));

    // Find EN b-steps that don't match any AR remaining step (= new quizzes)
    const newQuizSteps = [];
    for (const enStep of enBNonIntro) {
      const enKey = stepMatchKey(enStep);
      if (!enKey) continue;
      if (!arRemainingKeys.includes(enKey)) {
        // This is a new step added in EN - translate and add to AR
        const arStep = { ...enStep };
        // Translate English fields to Arabic
        if (arStep.hint) arStep.hint = translateHint(arStep.hint);
        if (arStep.sSrc) arStep.sSrc = translateSrc(arStep.sSrc);
        if (arStep.src && arStep.type === 'teach') {
          // Keep src as-is for teach cards (would need proper translation)
          // Actually these new steps are quizzes, not teach cards
        }
        newQuizSteps.push(arStep);
      }
    }

    // Create the AR b-lesson
    const arBLesson = {
      id: bId,
      title: enB.title, // Keep the German title with "Teil 2"
      icon: enB.icon || enOrig.icon || arOrig.icon,
      xp: 15,
      board: true,
      steps: [
        // Intro step
        {
          type: 'intro',
          title: enB.steps[0]?.title || arOrig.title + ' (continued)',
          desc: 'تابع التدرّب على المفردات من هذا الموضوع.',
          goals: ['مراجعة وممارسة الكلمات الأساسية']
        },
        // Remaining AR steps
        ...arRemaining,
        // New PP64 quiz steps
        ...newQuizSteps
      ]
    };

    newArLessons.push({ bId, origId, lesson: arBLesson, splitPoint });
  }

  // Now rebuild the AR unit with splits applied
  const rebuiltLessons = [];
  for (const arLesson of arUnit.lessons) {
    if (splitOriginals.has(arLesson.id)) {
      // Trim the original lesson to the split point
      const sp = splitOriginals.get(arLesson.id);
      const trimmed = { ...arLesson, steps: arLesson.steps.slice(0, sp) };
      rebuiltLessons.push(trimmed);

      // Insert the b-lesson right after
      const bData = newArLessons.find(n => n.origId === arLesson.id);
      if (bData) {
        rebuiltLessons.push(bData.lesson);
      }
    } else {
      rebuiltLessons.push(arLesson);
    }
  }

  // Update the unit
  arUnit.lessons = rebuiltLessons;

  // Write the file
  const output = serializeUnit(arUnit);
  fs.writeFileSync(arPath, output, 'utf8');

  return {
    added: newArLessons.length,
    enCount: enUnit.lessons.length,
    arCount: rebuiltLessons.length
  };
}

// ── Run ──
console.log('=== Sync AR splits ===\n');

let totalEN = 0, totalAR = 0, totalAdded = 0;
const issues = [];

for (let i = 1; i <= 36; i++) {
  const result = syncUnit(i);
  totalEN += result.enCount;
  totalAR += result.arCount;
  totalAdded += result.added;

  if (result.enCount !== result.arCount) {
    issues.push(`Unit ${i}: EN=${result.enCount} AR=${result.arCount} (diff=${result.enCount - result.arCount})`);
  }

  console.log(`Unit ${String(i).padStart(2)}: EN=${result.enCount} AR=${result.arCount} splits=${result.added}${result.enCount !== result.arCount ? ' *** MISMATCH ***' : ''}`);
}

console.log('\n=== Summary ===');
console.log('Total EN lessons:', totalEN);
console.log('Total AR lessons:', totalAR);
console.log('Splits added:', totalAdded);

if (issues.length) {
  console.log('\n*** MISMATCHES ***');
  issues.forEach(i => console.log('  ' + i));
}

console.log('\nDone.');
