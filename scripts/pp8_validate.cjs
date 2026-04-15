#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');

// Accept --lang parameter (default: german)
const langArg = process.argv.find(a => a.startsWith('--lang='));
const LANG = langArg ? langArg.split('=')[1] : 'german';
const BASE = path.join(__dirname, '..', 'src', 'data', `${LANG}-v2`);

if (!fs.existsSync(BASE)) {
  console.error(`ERROR: Directory not found: ${BASE}`);
  process.exit(1);
}

// Auto-detect unit count from directory AND temp lesson files
const unitFiles = fs.readdirSync(BASE).filter(f => /^unit-\d+\.js$/.test(f)).sort();
const tempFiles = fs.readdirSync(BASE).filter(f => f.startsWith('_temp') && f.endsWith('.js')).sort();
const UNIT_COUNT = unitFiles.length;
if (UNIT_COUNT === 0) {
  console.error(`ERROR: No unit files found in ${BASE}`);
  process.exit(1);
}
console.log(`PP8 Validator — ${LANG} v2 (${UNIT_COUNT} units, ${tempFiles.length} temp lessons)\n`);

const SKIP_WORDS = new Set([
  // English
  'the','is','a','an','it','to','of','in','on','at','for','and','or','but','not',
  'this','that','with','from','has','was','are','its','you','your','can','all',
  'been','have','will','one','two','each','very','when','they','more','than',
  'what','how','only','also','does','most','some','such','just','any','same',
  'into','over','much','many','who','had','did','own','may','way','both','use',
  'her','him','she','out','as','by','do','if','me','my','no','so','up','us','we',
  // Dutch function words
  'het','een','van','met','die','dat','der','den','des','voor','naar','als','maar',
  'ook','nog','wel','dan','per','bij','uit','aan','hoe','wat','wie','hun','hen',
  'zij','wij','jij','mij','ons','zijn','haar','deze','dit','die','dat','ter','ten',
  // French function words
  'les','des','une','est','que','qui','dans','pour','sur','par','avec','sont','pas',
  'plus','tout','mais','elle','ses','ces','aux','ont','fait','nos','vos','leur',
  // Spanish function words
  'los','las','del','una','por','con','sin','que','como','pero','mas','sus',
  'sus','esto','esta','ese','esa','son','fue','muy','hay','ser','eso','ella',
  // Korean function words (romanized patterns common in hints)
  '이다','것','수','있다','하다','되다','않다'
]);

function extractField(objText, fieldName) {
  const re = new RegExp(fieldName + '\\s*:\\s*([\'"])((?:\\\\.|(?!\\1).)*)\\1', 's');
  const m = objText.match(re);
  if (!m) return null;
  return m[2]
    .replace(/\\n/g, '\n')
    .replace(/\\'/g, "'")
    .replace(/\\"/g, '"')
    .replace(/\\\\/g, '\\');
}

function extractOpts(objText) {
  const re = /opts\s*:\s*\[([^\]]*)\]/s;
  const m = objText.match(re);
  if (!m) return [];
  const inner = m[1];
  const opts = [];
  const itemRe = /(['"])((?:\\.|(?!\1).)*)\1/g;
  let im;
  while ((im = itemRe.exec(inner)) !== null) {
    opts.push(im[2]
      .replace(/\\n/g, '\n')
      .replace(/\\'/g, "'")
      .replace(/\\"/g, '"'));
  }
  return opts;
}

function extractA(objText) {
  const re = /\ba\s*:\s*\[([^\]]*)\]/s;
  const m = objText.match(re);
  if (!m) return [];
  const inner = m[1];
  const items = [];
  const itemRe = /(['"])((?:\\.|(?!\1).)*)\1/g;
  let im;
  while ((im = itemRe.exec(inner)) !== null) {
    items.push(im[2]
      .replace(/\\n/g, '\n')
      .replace(/\\'/g, "'")
      .replace(/\\"/g, '"'));
  }
  return items;
}

function getWords(str) {
  if (!str) return [];
  // For Korean: split on spaces, keep Hangul; for Latin: keep letters + accented chars
  if (LANG === 'korean') {
    return str.toLowerCase()
      .split(/\s+/)
      .filter(w => w.length >= 2 && /[\uAC00-\uD7AF\u1100-\u11FF\u3130-\u318F]/.test(w));
  }
  return str.toLowerCase()
    .replace(/[^a-zà-öø-ÿäöüßéèêëçñ\s]/gi, ' ')
    .split(/\s+/)
    .filter(w => w.length >= 3 && !SKIP_WORDS.has(w));
}

function hintLeakCheck(hint, answer) {
  if (!hint || !answer) return [];
  const ansWords = getWords(answer);
  const hintLower = hint.toLowerCase();
  const leaks = [];
  for (const w of ansWords) {
    if (hintLower.includes(w)) {
      leaks.push(w);
    }
  }
  return leaks;
}

function visualLeakMC(q, ans) {
  if (!q || !ans) return false;
  return q.toLowerCase().includes(ans.toLowerCase());
}

function visualLeakFB(s, ans) {
  if (!s || !ans) return false;
  if (ans.length < 3) return false; // Skip very short answers (s, en, etc.) - false positives
  const sClean = s.replace(/\{[0-9]+\}/g, '').toLowerCase();
  return sClean.includes(ans.toLowerCase());
}

function extractStepBlocks(fileText) {
  const blocks = [];
  const typeRe = /\{\s*type\s*:\s*['"]([^'"]+)['"]/g;
  let m;
  const positions = [];
  while ((m = typeRe.exec(fileText)) !== null) {
    positions.push({ pos: m.index, type: m[1] });
  }

  for (let i = 0; i < positions.length; i++) {
    const start = positions[i].pos;
    let depth = 0;
    let end = start;
    for (let j = start; j < fileText.length; j++) {
      if (fileText[j] === '{') depth++;
      else if (fileText[j] === '}') {
        depth--;
        if (depth === 0) {
          end = j + 1;
          break;
        }
      }
    }
    blocks.push({ type: positions[i].type, text: fileText.slice(start, end) });
  }
  return blocks;
}

function extractLessons(fileText) {
  const lessons = [];
  // Match lesson objects by id field
  const lessonRe = /\{\s*id\s*:\s*['"]([^'"]+)['"]/g;
  let m;
  const positions = [];
  while ((m = lessonRe.exec(fileText)) !== null) {
    positions.push({ pos: m.index, id: m[1] });
  }

  for (let i = 0; i < positions.length; i++) {
    const start = positions[i].pos;
    const end = i + 1 < positions.length ? positions[i + 1].pos : fileText.length;
    lessons.push({ id: positions[i].id, text: fileText.slice(start, end) });
  }
  return lessons;
}

const allViolations = [];
const unitSummaries = [];

for (let u = 1; u <= UNIT_COUNT; u++) {
  const unitNum = String(u).padStart(2, '0');
  const filePath = path.join(BASE, `unit-${unitNum}.js`);

  if (!fs.existsSync(filePath)) {
    console.log(`MISSING: unit-${unitNum}.js`);
    continue;
  }

  const fileText = fs.readFileSync(filePath, 'utf8');
  const violations = [];

  // --- Position and Length leak: per-lesson analysis ---
  const lessons = extractLessons(fileText);

  for (const lesson of lessons) {
    const mcSteps = [];
    const stepBlocks = extractStepBlocks(lesson.text);

    for (const block of stepBlocks) {
      if (block.type !== 'mc') continue;
      const opts = extractOpts(block.text);
      const ans = extractField(block.text, 'ans');
      if (!ans || opts.length === 0) continue;
      const ansIdx = opts.findIndex(o => o.toLowerCase() === ans.toLowerCase());
      const ansIsLongest = opts.every(o => o.length <= ans.length);
      mcSteps.push({ ans, opts, ansIdx, ansIsLongest });
    }

    if (mcSteps.length < 4) continue; // need at least 4 to flag pattern

    // Position leak: any position >50%
    const positionCounts = [0, 0, 0, 0];
    for (const s of mcSteps) {
      if (s.ansIdx >= 0 && s.ansIdx < 4) positionCounts[s.ansIdx]++;
    }
    for (let p = 0; p < 4; p++) {
      const pct = positionCounts[p] / mcSteps.length;
      if (pct > 0.5) {
        violations.push({
          unit: unitNum, lesson: lesson.id, type: 'POSITION_LEAK',
          detail: `Position ${p} has ${positionCounts[p]}/${mcSteps.length} (${Math.round(pct*100)}%) answers`
        });
      }
    }

    // Length leak: ans is longest >50%
    const longestCount = mcSteps.filter(s => s.ansIsLongest).length;
    const longestPct = longestCount / mcSteps.length;
    if (longestPct > 0.5) {
      violations.push({
        unit: unitNum, lesson: lesson.id, type: 'LENGTH_LEAK',
        detail: `Answer is longest in ${longestCount}/${mcSteps.length} (${Math.round(longestPct*100)}%) mc steps`
      });
    }
  }

  // --- Per-step checks: hint leak and visual leak ---
  const allBlocks = extractStepBlocks(fileText);

  let mcCount = 0;
  let fbCount = 0;

  for (const block of allBlocks) {
    if (block.type === 'mc') {
      mcCount++;
      const hint = extractField(block.text, 'hint');
      const ans = extractField(block.text, 'ans');
      const q = extractField(block.text, 'q');

      if (hint && ans) {
        const leaks = hintLeakCheck(hint, ans);
        if (leaks.length > 0) {
          violations.push({
            unit: unitNum, type: 'HINT_LEAK_MC',
            detail: `hint="${hint.slice(0,70)}" leaks [${leaks.join(', ')}] from ans="${ans.slice(0,40)}"`
          });
        }
      }

      if (q && ans && visualLeakMC(q, ans)) {
        violations.push({
          unit: unitNum, type: 'VISUAL_LEAK_MC',
          detail: `q="${q.slice(0,70)}" contains ans="${ans.slice(0,40)}"`
        });
      }
    }

    if (block.type === 'fb') {
      fbCount++;
      const hint = extractField(block.text, 'hint');
      const s = extractField(block.text, 's');
      const aArr = extractA(block.text);
      const ans = aArr[0] || null;

      if (hint && ans) {
        const leaks = hintLeakCheck(hint, ans);
        if (leaks.length > 0) {
          violations.push({
            unit: unitNum, type: 'HINT_LEAK_FB',
            detail: `hint="${hint.slice(0,70)}" leaks [${leaks.join(', ')}] from a[0]="${ans.slice(0,40)}"`
          });
        }
      }

      if (s && ans && visualLeakFB(s, ans)) {
        violations.push({
          unit: unitNum, type: 'VISUAL_LEAK_FB',
          detail: `s="${s.slice(0,70)}" contains ans="${ans.slice(0,40)}"`
        });
      }
    }
  }

  const unitViolations = violations; // already unit-scoped
  unitSummaries.push({
    unit: unitNum,
    mcCount,
    fbCount,
    violations: unitViolations.length
  });

  allViolations.push(...violations);

  if (unitViolations.length > 0) {
    console.log(`\n=== UNIT ${unitNum}: ${unitViolations.length} VIOLATION(S) ===`);
    for (const v of unitViolations) {
      const lessonTag = v.lesson ? ` [${v.lesson}]` : '';
      console.log(`  [${v.type}]${lessonTag} ${v.detail}`);
    }
  } else {
    console.log(`Unit ${unitNum}: PASS (mc:${mcCount}, fb:${fbCount})`);
  }
}

// --- TEMP FILE SCANNING (V2 lesson files) ---
if (tempFiles.length > 0) {
  console.log(`\n--- Scanning ${tempFiles.length} temp lesson files ---`);
  let tempHintLeaks = 0, tempVisualLeaks = 0, tempMC = 0, tempFB = 0;

  for (const tf of tempFiles) {
    const filePath = path.join(BASE, tf);
    const fileText = fs.readFileSync(filePath, 'utf8');
    const allBlocks = extractStepBlocks(fileText);

    for (const block of allBlocks) {
      if (block.type === 'mc') {
        tempMC++;
        const hint = extractField(block.text, 'hint');
        const ans = extractField(block.text, 'ans');
        const q = extractField(block.text, 'q');

        if (hint && ans) {
          const leaks = hintLeakCheck(hint, ans);
          if (leaks.length > 0) {
            tempHintLeaks++;
            allViolations.push({
              unit: tf, type: 'HINT_LEAK_MC',
              detail: `hint="${hint.slice(0,60)}" leaks [${leaks.join(', ')}] from ans="${ans.slice(0,40)}"`
            });
          }
        }
        if (q && ans && visualLeakMC(q, ans)) {
          tempVisualLeaks++;
          allViolations.push({
            unit: tf, type: 'VISUAL_LEAK_MC',
            detail: `q="${q.slice(0,60)}" contains ans="${ans.slice(0,40)}"`
          });
        }
      }
      if (block.type === 'fb') {
        tempFB++;
        const hint = extractField(block.text, 'hint');
        const s = extractField(block.text, 's');
        const aArr = extractA(block.text);
        const ans = aArr[0] || null;

        if (hint && ans) {
          const leaks = hintLeakCheck(hint, ans);
          if (leaks.length > 0) {
            tempHintLeaks++;
            allViolations.push({
              unit: tf, type: 'HINT_LEAK_FB',
              detail: `hint="${hint.slice(0,60)}" leaks [${leaks.join(', ')}] from a[0]="${ans.slice(0,40)}"`
            });
          }
        }
        if (s && ans && visualLeakFB(s, ans)) {
          tempVisualLeaks++;
          allViolations.push({
            unit: tf, type: 'VISUAL_LEAK_FB',
            detail: `s="${s.slice(0,60)}" contains ans="${ans.slice(0,40)}"`
          });
        }
      }
    }
  }
  console.log(`Temp files: ${tempMC} mc, ${tempFB} fb. Hint leaks: ${tempHintLeaks}, Visual leaks: ${tempVisualLeaks}`);
}

console.log('\n========================================');
console.log('            PP8 GRAND SUMMARY');
console.log('========================================');
const totalMC = unitSummaries.reduce((s, u) => s + u.mcCount, 0);
const totalFB = unitSummaries.reduce((s, u) => s + u.fbCount, 0);
console.log(`Units checked : ${UNIT_COUNT} + ${tempFiles.length} temp files`);
console.log(`Total mc steps: ${totalMC}`);
console.log(`Total fb steps: ${totalFB}`);
console.log(`Total quiz    : ${totalMC + totalFB}`);
console.log(`Total violations: ${allViolations.length}`);

const byType = {};
for (const v of allViolations) {
  byType[v.type] = (byType[v.type] || 0) + 1;
}
if (Object.keys(byType).length > 0) {
  console.log('\nBreakdown by type:');
  for (const [type, count] of Object.entries(byType).sort((a,b) => b[1]-a[1])) {
    console.log(`  ${type}: ${count}`);
  }
}

const failingUnits = unitSummaries.filter(u => u.violations > 0);
if (failingUnits.length > 0) {
  console.log(`\nFailing units (${failingUnits.length}):`);
  for (const u of failingUnits) {
    console.log(`  Unit ${u.unit}: ${u.violations} violation(s)`);
  }
  console.log('\nRESULT: PP8 FAIL');
} else {
  console.log(`\nRESULT: ALL ${UNIT_COUNT} UNITS PASS PP8 -- ZERO VIOLATIONS`);
}
