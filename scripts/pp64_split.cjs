#!/usr/bin/env node
/**
 * pp64_split.cjs — Automatically split over-dense German v2 lessons
 * and add quiz steps for untested teach cards.
 *
 * Reads _pp64_results.txt for split candidates, then modifies unit files.
 * Run: node scripts/pp64_split.cjs [--dry-run] [--unit NN]
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const RESULTS_FILE = path.join(__dirname, '_pp64_results.txt');
const UNITS_DIR = path.join(ROOT, 'src', 'data', 'german-v2');

const DRY_RUN = process.argv.includes('--dry-run');
const UNIT_FILTER = (() => {
  const idx = process.argv.indexOf('--unit');
  return idx >= 0 ? parseInt(process.argv[idx + 1], 10) : null;
})();

// ─── Phase 1: Parse the analysis file ───

function parseResultsFile() {
  const text = fs.readFileSync(RESULTS_FILE, 'utf8');
  const lines = text.split('\n');

  const splits = []; // { unitNum, lessonId, breakIndex, untestedTrgs[], title }
  let currentUnit = null;
  let currentLesson = null;
  let currentTitle = '';
  let currentUntested = [];
  let isSplitCandidate = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Match unit header: === UNIT 01: ... ===
    const unitMatch = line.match(/^=== UNIT (\d+):/);
    if (unitMatch) {
      currentUnit = parseInt(unitMatch[1], 10);
      continue;
    }

    // Match lesson line: LESSON deu_rXXlY — "Title" (NN steps, ...)
    const lessonMatch = line.match(/LESSON (deu_r\d+l\d+)\s.*?"(.+?)"\s*\((\d+) steps/);
    if (lessonMatch) {
      currentLesson = lessonMatch[1];
      currentTitle = lessonMatch[2];
      currentUntested = [];
      isSplitCandidate = false;
      continue;
    }

    // Match untested line
    const untestedMatch = line.match(/Untested:\s*\[(.+)\]/);
    if (untestedMatch) {
      currentUntested = untestedMatch[1].split(',').map(s => s.trim());
      continue;
    }

    // Match split candidate line
    if (line.includes('SPLIT CANDIDATE: YES')) {
      isSplitCandidate = true;
      continue;
    }

    // Match break index
    const breakMatch = line.match(/Natural break after step index (\d+)/);
    if (breakMatch && isSplitCandidate && currentLesson && currentUnit !== null) {
      const breakIndex = parseInt(breakMatch[1], 10);

      // Now look for Cluster B untested words on the next lines
      // Cluster B line looks like: Cluster B (steps X-Y): [...] (N teaches)
      let clusterBUntested = [];
      // The untested words for Cluster B are the ones from the overall untested list
      // that appear in steps after the break point. We'll use all untested words
      // since the script will verify which teach cards are in Cluster B at runtime.

      splits.push({
        unitNum: currentUnit,
        lessonId: currentLesson,
        title: currentTitle,
        breakIndex: breakIndex,
        untestedTrgs: currentUntested
      });

      currentLesson = null;
      isSplitCandidate = false;
      continue;
    }
  }

  return splits;
}

// ─── Phase 2: JavaScript parser for unit files ───

/**
 * Parse a JS unit file to find lessons and their step arrays.
 * We use bracket counting rather than eval/AST for safety.
 */
function findStepsArrayBounds(text, startFrom) {
  // Find "steps:[" starting from startFrom
  const stepsIdx = text.indexOf('steps:[', startFrom);
  if (stepsIdx === -1) return null;

  const openBracket = stepsIdx + 6; // position of '['
  let depth = 1;
  let i = openBracket + 1;
  let inString = false;
  let stringChar = '';
  let escaped = false;

  while (i < text.length && depth > 0) {
    const ch = text[i];

    if (escaped) {
      escaped = false;
      i++;
      continue;
    }

    if (ch === '\\' && inString) {
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

    if (ch === '"' || ch === "'" || ch === '`') {
      inString = true;
      stringChar = ch;
      i++;
      continue;
    }

    if (ch === '[') depth++;
    if (ch === ']') depth--;
    i++;
  }

  // i is now one past the closing ']'
  return { start: openBracket, end: i - 1 }; // start='[', end=']'
}

/**
 * Find all step objects within a steps array string.
 * Returns an array of { start, end } positions relative to the array content.
 */
function findStepBoundaries(stepsContent) {
  // stepsContent is the text between [ and ] (exclusive)
  const steps = [];
  let depth = 0;
  let stepStart = -1;
  let inString = false;
  let stringChar = '';
  let escaped = false;

  for (let i = 0; i < stepsContent.length; i++) {
    const ch = stepsContent[i];

    if (escaped) {
      escaped = false;
      continue;
    }

    if (ch === '\\' && inString) {
      escaped = true;
      continue;
    }

    if (inString) {
      if (ch === stringChar) inString = false;
      continue;
    }

    if (ch === '"' || ch === "'" || ch === '`') {
      inString = true;
      stringChar = ch;
      continue;
    }

    if (ch === '{') {
      if (depth === 0) stepStart = i;
      depth++;
    } else if (ch === '}') {
      depth--;
      if (depth === 0 && stepStart >= 0) {
        steps.push({ start: stepStart, end: i + 1 });
        stepStart = -1;
      }
    }
  }

  return steps;
}

/**
 * Find the closing boundary of a lesson object.
 * Starting from the position after the lesson's steps array closing ']',
 * find the matching '}' that closes the lesson and any trailing '}' for the lesson.
 */
function findLessonEnd(text, afterStepsClose) {
  // After the steps array ']', there should be a '}' to close the lesson, possibly with ']}'
  // Pattern: ...steps:[...]\n]}   or   ...steps:[...]}\n]}
  // We need to find the '}' that closes the lesson object
  let i = afterStepsClose + 1; // after ']'

  // Skip whitespace and newlines
  while (i < text.length && /\s/.test(text[i])) i++;

  // The next char should be '}' closing the lesson
  if (text[i] === '}') {
    return i; // position of the closing '}'
  }

  // If there's a ']' followed by '}', that's the steps + lesson close
  // Actually the structure is: steps:[...]} so after ']' we expect '}'
  return i;
}

/**
 * Extract teach card trg values from a step object text.
 */
function extractTrgFromStep(stepText) {
  // Match trg:"..." or trg:'...'
  const match = stepText.match(/trg\s*:\s*"([^"]*?)"/);
  if (match) return match[1];
  const match2 = stepText.match(/trg\s*:\s*'([^']*?)'/);
  if (match2) return match2[1];
  return null;
}

/**
 * Extract src from a step object text.
 */
function extractSrcFromStep(stepText) {
  // Be careful: exampleSrc also has src in it. We need the standalone src field.
  // Match src:"..." that is NOT preceded by "example"
  const matches = [];
  const regex = /(?<![a-zA-Z])src\s*:\s*"([^"]*?)"/g;
  let m;
  while ((m = regex.exec(stepText)) !== null) {
    // Check it's not exampleSrc
    const before = stepText.substring(Math.max(0, m.index - 10), m.index);
    if (!before.includes('example') && !before.includes('Example')) {
      matches.push(m[1]);
    }
  }
  return matches[0] || null;
}

/**
 * Extract example from a step.
 */
function extractExampleFromStep(stepText) {
  const match = stepText.match(/(?<![a-zA-Z])example\s*:\s*"([^"]*?)"/);
  return match ? match[1] : null;
}

/**
 * Extract exampleSrc from a step.
 */
function extractExampleSrcFromStep(stepText) {
  const match = stepText.match(/exampleSrc\s*:\s*"([^"]*?)"/);
  return match ? match[1] : null;
}

/**
 * Check if a step is a teach step.
 */
function isTeachStep(stepText) {
  return /type\s*:\s*["']teach["']/.test(stepText);
}

/**
 * Extract the type of a step.
 */
function extractStepType(stepText) {
  const m = stepText.match(/type\s*:\s*["'](\w+)["']/);
  return m ? m[1] : null;
}

// ─── Quiz generation ───

function escapeForJS(str) {
  return str
    .replace(/\\/g, '\\\\')
    .replace(/"/g, '\\"')
    .replace(/\n/g, '\\n');
}

/**
 * Generate a quiz step (mc or fb) for an untested teach card.
 */
function generateQuiz(teachInfo, allTeachInfos, quizIndex) {
  const { trg, src, example, exampleSrc } = teachInfo;

  // Get wrong options from other teach cards in this lesson
  const otherSrcs = allTeachInfos
    .filter(t => t.trg !== trg && t.src)
    .map(t => t.src);
  const otherTrgs = allTeachInfos
    .filter(t => t.trg !== trg)
    .map(t => t.trg);

  // Shuffle and pick 3
  const shuffled = arr => [...arr].sort(() => Math.random() - 0.5);

  if (quizIndex % 2 === 0) {
    // MC quiz: "What does X mean?"
    const wrongOpts = shuffled(otherSrcs).slice(0, 3);
    while (wrongOpts.length < 3) {
      wrongOpts.push(`(option ${wrongOpts.length + 2})`);
    }
    const opts = shuffled([src, ...wrongOpts]);
    return `{type:"mc",q:"Was bedeutet '${escapeForJS(trg)}'?",opts:["${opts.map(escapeForJS).join('","')}"],ans:"${escapeForJS(src)}",hint:"Think about the meaning of this word in context."}`;
  } else {
    // FB quiz: fill in the blank
    // Create a simple sentence with blank
    const wrongOpts = shuffled(otherTrgs).slice(0, 3);
    while (wrongOpts.length < 3) {
      wrongOpts.push(`(option ${wrongOpts.length + 2})`);
    }
    const opts = shuffled([trg, ...wrongOpts]);

    // Try to use the example if available, replacing the trg word
    let sentence = '';
    let sentenceSrc = '';

    if (example) {
      // Take the first line of the example that contains the trg word
      const exLines = example.split('\\n');
      const exSrcLines = (exampleSrc || '').split('\\n');
      for (let li = 0; li < exLines.length; li++) {
        const line = exLines[li].replace(/^[AB]:\s*/, '');
        if (line.includes(trg) || line.toLowerCase().includes(trg.toLowerCase())) {
          sentence = line.replace(new RegExp(escapeRegExp(trg), 'i'), '{1}');
          sentenceSrc = li < exSrcLines.length ? exSrcLines[li].replace(/^[AB]:\s*/, '') : '';
          break;
        }
      }
    }

    if (!sentence) {
      // Fallback: simple sentence
      sentence = `Wie sagt man '${escapeForJS(src)}' auf Deutsch? {1}`;
      sentenceSrc = `How do you say '${escapeForJS(src)}' in German?`;
    }

    return `{type:"fb",s:"${escapeForJS(sentence)}",a:["${escapeForJS(trg)}"],opts:["${opts.map(escapeForJS).join('","')}"],hint:"Which word fits in this context?",sSrc:"${escapeForJS(sentenceSrc)}"}`;
  }
}

function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// ─── Main processing ───

function processUnit(unitNum, splitCandidates) {
  const unitFile = path.join(UNITS_DIR, `unit-${String(unitNum).padStart(2, '0')}.js`);
  if (!fs.existsSync(unitFile)) {
    console.error(`  ERROR: ${unitFile} not found`);
    return { splits: 0, errors: 1 };
  }

  let text = fs.readFileSync(unitFile, 'utf8');
  let totalSplits = 0;
  let totalErrors = 0;

  // Sort splits by their position in the file (reverse order so we can modify from end to start)
  const sortedCandidates = [...splitCandidates];

  // Process from last to first so offsets don't shift
  // First, find all lesson positions
  const lessonPositions = [];
  for (const cand of sortedCandidates) {
    const idPattern = `id:"${cand.lessonId}"`;
    const idIdx = text.indexOf(idPattern);
    if (idIdx === -1) {
      console.error(`  ERROR: Could not find lesson ${cand.lessonId} in unit-${String(unitNum).padStart(2, '0')}.js`);
      totalErrors++;
      continue;
    }
    lessonPositions.push({ ...cand, idIdx });
  }

  // Sort by position descending (process from end to start)
  lessonPositions.sort((a, b) => b.idIdx - a.idIdx);

  for (const cand of lessonPositions) {
    console.log(`  Splitting ${cand.lessonId} "${cand.title}" at step ${cand.breakIndex}...`);

    // Find the steps array for this lesson
    const stepsBounds = findStepsArrayBounds(text, cand.idIdx);
    if (!stepsBounds) {
      console.error(`    ERROR: Could not find steps array for ${cand.lessonId}`);
      totalErrors++;
      continue;
    }

    // Get the steps content (between [ and ])
    const stepsContent = text.substring(stepsBounds.start + 1, stepsBounds.end);

    // Find individual step boundaries
    const stepBounds = findStepBoundaries(stepsContent);
    if (stepBounds.length === 0) {
      console.error(`    ERROR: No steps found for ${cand.lessonId}`);
      totalErrors++;
      continue;
    }

    const breakAfter = cand.breakIndex; // 0-indexed, inclusive
    if (breakAfter >= stepBounds.length - 1) {
      console.error(`    ERROR: Break index ${breakAfter} is at/past end of ${stepBounds.length} steps for ${cand.lessonId}`);
      totalErrors++;
      continue;
    }

    // Extract step texts for each step
    const stepTexts = stepBounds.map(b => stepsContent.substring(b.start, b.end));

    // Split steps into two halves
    const firstHalfTexts = stepTexts.slice(0, breakAfter + 1);
    const secondHalfTexts = stepTexts.slice(breakAfter + 1);

    // Find teach cards in second half and determine which are untested
    const secondHalfTeachInfos = [];
    for (const st of secondHalfTexts) {
      if (isTeachStep(st)) {
        const trg = extractTrgFromStep(st);
        const src = extractSrcFromStep(st);
        const example = extractExampleFromStep(st);
        const exampleSrc = extractExampleSrcFromStep(st);
        if (trg) {
          secondHalfTeachInfos.push({ trg, src, example, exampleSrc });
        }
      }
    }

    // Determine which teach cards in second half are untested
    const untestedInSecondHalf = secondHalfTeachInfos.filter(t =>
      cand.untestedTrgs.some(u => u === t.trg || u.includes(t.trg) || t.trg.includes(u))
    );

    // Also collect ALL teach infos for wrong option generation
    const allTeachInfos = [];
    for (const st of stepTexts) {
      if (isTeachStep(st)) {
        const trg = extractTrgFromStep(st);
        const src = extractSrcFromStep(st);
        const example = extractExampleFromStep(st);
        const exampleSrc = extractExampleSrcFromStep(st);
        if (trg) allTeachInfos.push({ trg, src, example, exampleSrc });
      }
    }

    // Generate quiz steps for untested teach cards in second half
    const quizSteps = [];
    let quizIdx = 0;
    for (const teachInfo of untestedInSecondHalf) {
      if (!teachInfo.src) continue;
      const quiz = generateQuiz(teachInfo, allTeachInfos, quizIdx);
      quizSteps.push(quiz);
      quizIdx++;
    }

    // Build new lesson ID
    const newLessonId = cand.lessonId + 'b';

    // Find the lesson's title, icon from the original text (preserve raw text)
    const lessonHeaderArea = text.substring(cand.idIdx, stepsBounds.start);
    const iconMatch = lessonHeaderArea.match(/icon\s*:\s*("(?:[^"\\]|\\.)*?")/);
    const iconRaw = iconMatch ? iconMatch[1] : '"\\uD83D\\uDCDA"'; // raw string including quotes
    const titleMatch = lessonHeaderArea.match(/title\s*:\s*"((?:[^"\\]|\\.)*)"/);
    const rawTitle = titleMatch ? titleMatch[1] : escapeForJS(cand.title);

    // Build the intro step for the new lesson
    const introStep = `{type:"intro",title:"${rawTitle} (continued)",desc:"Continue practicing the vocabulary from this topic.",goals:["Review and practice key words"]}`;

    // Build the new lesson's steps: intro + second half steps + quiz steps
    // Cap quizzes to stay within 32-step limit
    const baseSize = 1 + secondHalfTexts.length; // intro + second half
    const maxQuizzes = Math.max(0, 32 - baseSize);
    const cappedQuizzes = quizSteps.slice(0, maxQuizzes);
    if (cappedQuizzes.length < quizSteps.length) {
      console.log(`    Capped quizzes from ${quizSteps.length} to ${cappedQuizzes.length} (32-step limit)`);
    }
    const newStepsArr = [introStep, ...secondHalfTexts, ...cappedQuizzes];

    // Check sizes
    const firstHalfSize = firstHalfTexts.length;
    const newLessonSize = newStepsArr.length;

    if (firstHalfSize > 32) {
      console.warn(`    WARNING: First half has ${firstHalfSize} steps (over 32) for ${cand.lessonId}`);
    }
    if (newLessonSize > 32) {
      console.warn(`    WARNING: New lesson has ${newLessonSize} steps (over 32) for ${newLessonId}`);
    }

    console.log(`    First half: ${firstHalfSize} steps, New lesson: ${newLessonSize} steps (${quizSteps.length} quizzes added)`);

    // Build the new lesson text
    const newLessonText = `,\n{id:"${newLessonId}",title:"${rawTitle} (Teil 2)",icon:${iconRaw},xp:15,board:true,steps:[\n${newStepsArr.join(',\n')}\n]}`;

    // Now modify the text:
    // 1. Replace the steps array content with just the first half
    const newFirstHalfSteps = firstHalfTexts.join(',\n');

    // Find the end of this lesson object: after steps:[], find the closing }
    // The lesson ends with steps:[...]}
    // After stepsBounds.end (the ']'), skip whitespace, then '}'
    let lessonEndPos = stepsBounds.end + 1; // after ']'
    while (lessonEndPos < text.length && /\s/.test(text[lessonEndPos])) lessonEndPos++;
    if (text[lessonEndPos] === '}') {
      lessonEndPos++; // include the '}'
    }

    // Replace: from stepsBounds.start to lessonEndPos with trimmed first half + lesson close + new lesson
    const before = text.substring(0, stepsBounds.start);
    const after = text.substring(lessonEndPos);

    text = before + '[\n' + newFirstHalfSteps + '\n]}' + newLessonText + after;

    totalSplits++;
  }

  if (!DRY_RUN && totalSplits > 0) {
    fs.writeFileSync(unitFile, text, 'utf8');
    console.log(`  Wrote ${unitFile} (${totalSplits} splits)`);
  }

  return { splits: totalSplits, errors: totalErrors };
}

// ─── Phase 3: Validation ───

function validateUnit(unitNum) {
  const unitFile = path.join(UNITS_DIR, `unit-${String(unitNum).padStart(2, '0')}.js`);
  if (!fs.existsSync(unitFile)) return null;

  const text = fs.readFileSync(unitFile, 'utf8');

  // Count lessons by finding all id:" patterns
  const lessonIds = [];
  const idRegex = /id:"(deu_r\d+l\d+\w*)"/g;
  let m;
  while ((m = idRegex.exec(text)) !== null) {
    lessonIds.push(m[1]);
  }

  // Count steps per lesson
  const results = [];
  for (const lid of lessonIds) {
    const idIdx = text.indexOf(`id:"${lid}"`);
    const stepsBounds = findStepsArrayBounds(text, idIdx);
    if (!stepsBounds) {
      results.push({ id: lid, steps: -1, error: 'no steps found' });
      continue;
    }
    const stepsContent = text.substring(stepsBounds.start + 1, stepsBounds.end);
    const stepBounds = findStepBoundaries(stepsContent);
    results.push({ id: lid, steps: stepBounds.length });
  }

  return results;
}

// ─── Main ───

function main() {
  console.log('PP64 Split Script');
  console.log('=================');
  if (DRY_RUN) console.log('DRY RUN MODE - no files will be modified\n');

  // Phase 1: Parse
  console.log('Phase 1: Parsing analysis file...');
  const splits = parseResultsFile();
  console.log(`  Found ${splits.length} split candidates\n`);

  // Group by unit
  const byUnit = {};
  for (const s of splits) {
    if (!byUnit[s.unitNum]) byUnit[s.unitNum] = [];
    byUnit[s.unitNum].push(s);
  }

  // Phase 2: Process
  console.log('Phase 2: Processing splits...');
  let totalSplits = 0;
  let totalErrors = 0;

  const unitNums = Object.keys(byUnit).map(Number).sort((a, b) => a - b);
  for (const unitNum of unitNums) {
    if (UNIT_FILTER !== null && unitNum !== UNIT_FILTER) continue;

    console.log(`\nUnit ${unitNum} (${byUnit[unitNum].length} splits):`);
    const result = processUnit(unitNum, byUnit[unitNum]);
    totalSplits += result.splits;
    totalErrors += result.errors;
  }

  console.log(`\n\nPhase 2 complete: ${totalSplits} splits performed, ${totalErrors} errors\n`);

  // Phase 3: Validation
  if (!DRY_RUN) {
    console.log('Phase 3: Validation...');
    let totalLessons = 0;
    let overDense = 0;

    for (let u = 1; u <= 36; u++) {
      const results = validateUnit(u);
      if (!results) continue;

      totalLessons += results.length;
      for (const r of results) {
        if (r.steps > 32) {
          console.warn(`  WARNING: ${r.id} has ${r.steps} steps (over 32)`);
          overDense++;
        }
        if (r.steps < 0) {
          console.error(`  ERROR: ${r.id} - ${r.error}`);
        }
      }
    }

    console.log(`\n  Total lessons: ${totalLessons}`);
    console.log(`  Lessons over 32 steps: ${overDense}`);
    console.log(`  Expected: ~${369 + totalSplits} lessons`);
  }
}

main();
