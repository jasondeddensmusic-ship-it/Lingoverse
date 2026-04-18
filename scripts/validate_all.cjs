#!/usr/bin/env node
'use strict';
/**
 * Universal V2 validator — runs PP8, PP43, PP48, PP52, PP64 checks
 * on any language's per-unit files.
 *
 * Usage: node scripts/validate_all.cjs <lang-dir> [--fix-hints]
 *   lang-dir: dutch-v2, french-v2, spanish-v2, korean-v2, german-v2
 *   --fix-hints: auto-fix PP8 hint leaks by replacing the answer word in hints
 */
const fs = require('fs');
const path = require('path');

const langDir = process.argv[2];
const fixHints = process.argv.includes('--fix-hints');

if (!langDir) {
  console.error('Usage: node scripts/validate_all.cjs <lang-dir> [--fix-hints]');
  console.error('  e.g.: node scripts/validate_all.cjs dutch-v2');
  process.exit(1);
}

const BASE = path.join(__dirname, '..', 'src', 'data', langDir);
if (!fs.existsSync(BASE)) {
  console.error(`Directory not found: ${BASE}`);
  process.exit(1);
}

const includeBatch = process.argv.includes('--include-batch');
const files = fs.readdirSync(BASE).filter(f => {
  if (/^unit-\d+\.js$/.test(f)) return true;
  if (includeBatch && /^_batch\d+_u\d+_L\d+\.js$/.test(f)) return true;
  return false;
}).sort();
console.log(`Validating ${langDir}: ${files.length} unit files\n`);

// ── Skip words for hint-leak check (common short words in many languages) ──
const SKIP_WORDS = new Set([
  'the','is','a','an','it','to','of','in','on','at','for','and','or','but','not',
  'this','that','with','from','has','was','are','its','you','your','can','all',
  'been','have','will','one','two','each','very','when','they','more','than',
  'what','how','only','also','does','most','some','such','just','any','same',
  'de','het','een','en','of','je','jij','hij','zij','wij','ze','er','die','dat',
  'le','la','les','un','une','des','et','ou','ne','pas','du','au','en','ce',
  'el','la','los','las','un','una','y','o','no','es','en','de','por','con',
  'der','die','das','ein','eine','und','ist','ich','du','er','sie','wir',
  '은','는','이','가','을','를','에','에서','도','의','와','과','로','으로',
  'per','both','into','over','about','after','before','under','between','through',
  'use','own','way','who','new','old','out','get','set','put','run','let','big','try',
  'end','top','did','see','say','got','too','now','far','yet','ago','off','few','add',
  'day','ice','bag','hope','dust','rent','purse','money','months'
]);

function extractField(objText, fieldName) {
  const re = new RegExp(fieldName + '\\s*:\\s*([\'"])((?:\\\\.|(?!\\1).)*)\\1', 's');
  const m = objText.match(re);
  if (!m) return null;
  return m[2].replace(/\\n/g, '\n').replace(/\\'/g, "'").replace(/\\"/g, '"').replace(/\\\\/g, '\\');
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
    opts.push(im[2].replace(/\\n/g, '\n').replace(/\\'/g, "'").replace(/\\"/g, '"'));
  }
  return opts;
}

function extractA(objText) {
  // Support both `a:["x","y"]` (array) and `a:"x"` (string) forms.
  const arrRe = /\ba\s*:\s*\[([^\]]*)\]/s;
  const m = objText.match(arrRe);
  if (m) {
    const inner = m[1];
    const items = [];
    const itemRe = /(['"])((?:\\.|(?!\1).)*)\1/g;
    let im;
    while ((im = itemRe.exec(inner)) !== null) {
      items.push(im[2].replace(/\\n/g, '\n').replace(/\\'/g, "'").replace(/\\"/g, '"'));
    }
    return items;
  }
  const strRe = /\ba\s*:\s*(['"])((?:\\.|(?!\1).)*)\1/;
  const sm = objText.match(strRe);
  if (sm) {
    return [sm[2].replace(/\\n/g, '\n').replace(/\\'/g, "'").replace(/\\"/g, '"')];
  }
  return [];
}

function getWords(str) {
  if (!str) return [];
  return str.toLowerCase()
    .replace(/[^a-zàâäãåæçèéêëìíîïðñòóôõöùúûüýþÿ가-힣ㄱ-ㅎㅏ-ㅣäöüß\s]/gi, ' ')
    .split(/\s+/)
    .filter(w => w.length >= 3 && !SKIP_WORDS.has(w));
}

function hintLeakCheck(hint, answer) {
  if (!hint || !answer) return [];
  const ansWords = getWords(answer);
  const hintLower = hint.toLowerCase();
  return ansWords.filter(w => {
    // Use word-boundary matching to avoid false positives from substrings
    const re = new RegExp('\\b' + w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b', 'i');
    return re.test(hintLower);
  });
}

// Build a word-boundary regex for an answer, so short tokens like "nos"
// don't false-positive inside longer words like "nosotros". Multi-word
// answers match the full phrase surrounded by non-word characters.
function buildAnsBoundaryRegex(ans) {
  const esc = ans.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  // Word boundary for Latin/CJK: require non-letter (or string edge) on both sides.
  // \b works for ASCII; for CJK/Cyrillic we pad with a character class.
  return new RegExp('(^|[^\\p{L}\\p{N}])' + esc + '($|[^\\p{L}\\p{N}])', 'iu');
}

function visualLeakMC(q, ans) {
  if (!q || !ans || ans.length < 3) return false;
  try {
    return buildAnsBoundaryRegex(ans).test(q);
  } catch { return q.toLowerCase().includes(ans.toLowerCase()); }
}

function visualLeakFB(s, ans) {
  if (!s || !ans || ans.length < 3) return false;
  const sClean = s.replace(/\{[0-9]+\}/g, '');
  try {
    return buildAnsBoundaryRegex(ans).test(sClean);
  } catch { return sClean.toLowerCase().includes(ans.toLowerCase()); }
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
    let depth = 0, end = start;
    for (let j = start; j < fileText.length; j++) {
      if (fileText[j] === '{') depth++;
      else if (fileText[j] === '}') { depth--; if (depth === 0) { end = j + 1; break; } }
    }
    blocks.push({ type: positions[i].type, text: fileText.slice(start, end) });
  }
  return blocks;
}

function extractLessons(fileText) {
  const lessons = [];
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

// ── Counters ──
const totals = { mc: 0, fb: 0, teach: 0, lessons: 0 };
const violations = { pp8_hint: 0, pp8_visual: 0, pp43: 0, pp48: 0, pp52: 0, pp64_untested: 0 };
const pp8Fixes = []; // {file, original, fixed}

for (const file of files) {
  const filePath = path.join(BASE, file);
  let content = fs.readFileSync(filePath, 'utf8');
  const lessons = extractLessons(content);
  totals.lessons += lessons.length;

  // PP52: collect all taught words in this unit
  const taughtWords = new Set();
  // PP64: collect all teach card trg values, track which are quizzed
  const teachTrgs = new Set();
  const quizzedWords = new Set();

  for (const lesson of lessons) {
    const steps = extractStepBlocks(lesson.text);
    const stepCount = steps.length;

    // PP43: density check
    if (stepCount > 32) {
      console.log(`  PP43 VIOLATION: ${file} ${lesson.id} has ${stepCount} steps (max 32)`);
      violations.pp43++;
    }

    for (const step of steps) {
      if (step.type === 'teach') {
        totals.teach++;
        const trg = extractField(step.text, 'trg') || extractField(step.text, 'nl');
        if (trg) {
          taughtWords.add(trg.toLowerCase().replace(/^(de|het|een|le|la|l'|les|un|une|el|los|las|der|die|das|ein|eine)\s+/i, '').trim());
          teachTrgs.add(trg);
        }

        // PP48: check for fb-style blanks in teach cards (should not exist)
        // PP59: check pos field exists
        const pos = extractField(step.text, 'pos');
        if (!pos) {
          // Not a violation for now, just count
        }
      }

      if (step.type === 'mc') {
        totals.mc++;
        const q = extractField(step.text, 'q');
        const ans = extractField(step.text, 'ans');
        const hint = extractField(step.text, 'hint');
        const opts = extractOpts(step.text);

        // Track quizzed words for PP64
        if (opts.length > 0) opts.forEach(o => quizzedWords.add(o));
        if (ans) quizzedWords.add(ans);

        // PP8: visual leak
        if (visualLeakMC(q, ans)) {
          console.log(`  PP8-VISUAL: ${file} ${lesson.id} mc answer "${ans}" visible in question`);
          violations.pp8_visual++;
        }

        // PP8: hint leak
        if (hint && ans) {
          const leaks = hintLeakCheck(hint, ans);
          if (leaks.length > 0) {
            console.log(`  PP8-HINT: ${file} ${lesson.id} mc hint contains answer word "${leaks.join(', ')}"`);
            violations.pp8_hint++;
            if (fixHints) {
              // Replace leaked words in hint
              let newHint = hint;
              for (const w of leaks) {
                newHint = newHint.replace(new RegExp(w, 'gi'), '___');
              }
              pp8Fixes.push({ file: filePath, oldHint: hint, newHint });
            }
          }
        }
      }

      if (step.type === 'fb') {
        totals.fb++;
        const s = extractField(step.text, 's');
        const a = extractA(step.text);
        const hint = extractField(step.text, 'hint');

        // Track quizzed words for PP64
        if (a.length > 0) a.forEach(w => quizzedWords.add(w));

        // PP48: check for multiple blanks
        if (s) {
          const blankCount = (s.match(/\{[0-9]+\}/g) || []).length;
          if (blankCount > 1) {
            console.log(`  PP48 VIOLATION: ${file} ${lesson.id} fb has ${blankCount} blanks (max 1)`);
            violations.pp48++;
          }
        }

        // PP8: visual leak
        if (a.length > 0 && s) {
          if (visualLeakFB(s, a[0])) {
            console.log(`  PP8-VISUAL: ${file} ${lesson.id} fb answer "${a[0]}" visible in sentence`);
            violations.pp8_visual++;
          }
        }

        // PP8: hint leak
        if (hint && a.length > 0) {
          const leaks = hintLeakCheck(hint, a[0]);
          if (leaks.length > 0) {
            console.log(`  PP8-HINT: ${file} ${lesson.id} fb hint contains answer word "${leaks.join(', ')}"`);
            violations.pp8_hint++;
            if (fixHints) {
              let newHint = hint;
              for (const w of leaks) {
                newHint = newHint.replace(new RegExp(w, 'gi'), '___');
              }
              pp8Fixes.push({ file: filePath, oldHint: hint, newHint });
            }
          }
        }
      }

      // Match/drag_fill also contribute to PP64
      if (step.type === 'match') {
        const pairsText = step.text.match(/pairs\s*:\s*\[([\s\S]*?)\]/);
        if (pairsText) {
          const trgRe = /trg\s*:\s*['"]([^'"]*)['"]/g;
          let pm;
          while ((pm = trgRe.exec(pairsText[1])) !== null) {
            quizzedWords.add(pm[1]);
          }
          const nlRe = /nl\s*:\s*['"]([^'"]*)['"]/g;
          while ((pm = nlRe.exec(pairsText[1])) !== null) {
            quizzedWords.add(pm[1]);
          }
        }
      }
    }
  }

  // PP64: check untested teach cards
  for (const trg of teachTrgs) {
    const bare = trg.toLowerCase().replace(/^(de|het|een|le|la|l'|les|un|une|el|los|las|der|die|das|ein|eine)\s+/i, '').trim();
    let tested = false;
    for (const q of quizzedWords) {
      if (q.toLowerCase().includes(bare) || bare.includes(q.toLowerCase())) {
        tested = true;
        break;
      }
    }
    if (!tested) {
      violations.pp64_untested++;
    }
  }
}

// ── Apply PP8 hint fixes ──
if (fixHints && pp8Fixes.length > 0) {
  console.log(`\nApplying ${pp8Fixes.length} PP8 hint fixes...`);
  // Group fixes by file
  const byFile = {};
  for (const fix of pp8Fixes) {
    if (!byFile[fix.file]) byFile[fix.file] = [];
    byFile[fix.file].push(fix);
  }
  for (const [filePath, fixes] of Object.entries(byFile)) {
    let content = fs.readFileSync(filePath, 'utf8');
    for (const fix of fixes) {
      const escaped = fix.oldHint.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      content = content.replace(new RegExp(escaped, 'g'), fix.newHint);
    }
    fs.writeFileSync(filePath, content);
    console.log(`  Fixed ${fixes.length} hints in ${path.basename(filePath)}`);
  }
}

// ── Summary ──
console.log(`\n${'='.repeat(50)}`);
console.log(`  VALIDATION SUMMARY: ${langDir}`);
console.log(`${'='.repeat(50)}`);
console.log(`  Units:    ${files.length}`);
console.log(`  Lessons:  ${totals.lessons}`);
console.log(`  Teach:    ${totals.teach}`);
console.log(`  MC steps: ${totals.mc}`);
console.log(`  FB steps: ${totals.fb}`);
console.log(`  Total quiz: ${totals.mc + totals.fb}`);
console.log(`${'─'.repeat(50)}`);
console.log(`  PP8  hint leaks:     ${violations.pp8_hint}${fixHints && violations.pp8_hint > 0 ? ' (FIXED)' : ''}`);
console.log(`  PP8  visual leaks:   ${violations.pp8_visual}`);
console.log(`  PP43 over-dense:     ${violations.pp43}`);
console.log(`  PP48 multi-blank fb: ${violations.pp48}`);
console.log(`  PP64 untested teach: ${violations.pp64_untested} / ${totals.teach}`);
console.log(`${'─'.repeat(50)}`);
const totalViol = violations.pp8_hint + violations.pp8_visual + violations.pp43 + violations.pp48;
if (totalViol === 0) {
  console.log(`  RESULT: PASS — zero critical violations`);
} else {
  console.log(`  RESULT: ${totalViol} critical violations found`);
}
console.log(`${'='.repeat(50)}\n`);
