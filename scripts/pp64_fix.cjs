// PP64 fix: for each unit file, find untested teach trgs and add them to an
// existing match step. If no match step exists in that unit, append a new
// review match step as the last step of the last lesson.
//
// Usage:
//   node scripts/pp64_fix.cjs <lang-dir>              # dry-run: report only
//   node scripts/pp64_fix.cjs <lang-dir> --apply      # actually write changes
//   node scripts/pp64_fix.cjs <lang-dir> --include-batch [--apply]
//
// Strategy:
//   1. Parse teach trgs per unit.
//   2. Parse quizzed words (mc/fb/match/drag_fill).
//   3. Untested = teach trgs not covered.
//   4. If the unit has match steps, find the LAST match step and add untested
//      trgs as new {trg:"X", src:"(taught)"} pairs. Cap at ~12 pairs/match
//      since UI beyond that is unwieldy; spill into new match pairs.
//   5. For each new pair, attempt to recover the English src from the matching
//      teach card's `src` or `en` field to keep the match pedagogical.

const fs = require('fs');
const path = require('path');

const langDir = process.argv[2];
const apply = process.argv.includes('--apply');
const includeBatch = process.argv.includes('--include-batch');
if (!langDir) { console.error('Usage: node scripts/pp64_fix.cjs <lang-dir> [--apply] [--include-batch]'); process.exit(1); }
const BASE = path.join(__dirname, '..', 'src', 'data', langDir);
if (!fs.existsSync(BASE)) { console.error(`Dir not found: ${BASE}`); process.exit(1); }

const files = fs.readdirSync(BASE).filter(f => {
  if (/^unit-\d+\.js$/.test(f)) return true;
  if (includeBatch && /^_batch\d+_u\d+_L\d+\.js$/.test(f)) return true;
  return false;
}).sort();

const ARTICLE_RE = /^(de|het|een|le|la|l'|les|un|une|el|los|las|der|die|das|ein|eine)\s+/i;
function bare(s) { return s.toLowerCase().replace(ARTICLE_RE, '').trim(); }

function extractField(block, name) {
  const re = new RegExp('(?:^|[,{\\n\\s])' + name + '\\s*:\\s*(["\'])((?:[^"\'\\\\]|\\\\.)*)\\1');
  const m = block.match(re);
  return m ? m[2] : null;
}
function extractOpts(block) {
  const m = block.match(/opts\s*:\s*\[([\s\S]*?)\]/);
  if (!m) return [];
  const re = /(["'])((?:[^"'\\]|\\.)*)\1/g;
  const out = []; let x;
  while ((x = re.exec(m[1])) !== null) out.push(x[2]);
  return out;
}
function extractA(block) {
  const m = block.match(/a\s*:\s*(\[([\s\S]*?)\]|(["'])((?:[^"'\\]|\\.)*)\3)/);
  if (!m) return [];
  if (m[1].startsWith('[')) {
    const re = /(["'])((?:[^"'\\]|\\.)*)\1/g;
    const out = []; let x;
    while ((x = re.exec(m[2])) !== null) out.push(x[2]);
    return out;
  }
  return [m[4]];
}
function extractStepBlocks(text) {
  const blocks = [];
  const typeRe = /\{\s*type\s*:\s*['"]([^'"]+)['"]/g;
  const positions = []; let m;
  while ((m = typeRe.exec(text)) !== null) positions.push({ pos: m.index, type: m[1] });
  for (let i = 0; i < positions.length; i++) {
    const start = positions[i].pos;
    let depth = 0, end = start;
    for (let j = start; j < text.length; j++) {
      if (text[j] === '{') depth++;
      else if (text[j] === '}') { depth--; if (depth === 0) { end = j + 1; break; } }
    }
    blocks.push({ type: positions[i].type, text: text.slice(start, end), start, end });
  }
  return blocks;
}

let grandTotalUntested = 0;
let grandTotalFixed = 0;
const filesEdited = [];

for (const file of files) {
  const filePath = path.join(BASE, file);
  const original = fs.readFileSync(filePath, 'utf8');
  let content = original;

  const teachEntries = []; // { trg, src }
  const quizzedWords = new Set();
  const matchSteps = [];

  // Single pass over all steps in the whole file (unit-level scope, matching validator)
  const steps = extractStepBlocks(content);
  for (const step of steps) {
    if (step.type === 'teach') {
      const trg = extractField(step.text, 'trg') || extractField(step.text, 'nl');
      const src = extractField(step.text, 'src') || extractField(step.text, 'en') || '';
      if (trg) teachEntries.push({ trg, src });
    } else if (step.type === 'mc') {
      const opts = extractOpts(step.text);
      opts.forEach(o => quizzedWords.add(o));
      const ans = extractField(step.text, 'ans');
      if (ans) quizzedWords.add(ans);
    } else if (step.type === 'fb') {
      extractA(step.text).forEach(a => quizzedWords.add(a));
    } else if (step.type === 'match') {
      matchSteps.push(step);
      const pairsM = step.text.match(/pairs\s*:\s*\[([\s\S]*?)\]/);
      if (pairsM) {
        const trgRe = /trg\s*:\s*['"]([^'"]*)['"]/g; let pm;
        while ((pm = trgRe.exec(pairsM[1])) !== null) quizzedWords.add(pm[1]);
        const nlRe = /nl\s*:\s*['"]([^'"]*)['"]/g;
        while ((pm = nlRe.exec(pairsM[1])) !== null) quizzedWords.add(pm[1]);
      }
    } else if (step.type === 'drag_fill') {
      const blanksM = step.text.match(/blanks\s*:\s*\{([\s\S]*?)\}/);
      if (blanksM) {
        const re = /['"]([0-9]+)['"]\s*:\s*['"]([^'"]*)['"]/g; let bm;
        while ((bm = re.exec(blanksM[1])) !== null) quizzedWords.add(bm[2]);
      }
    }
  }

  // Untested: teach trgs not covered by any quizzed word (case-insensitive, bare-form containment either direction)
  const untested = [];
  for (const t of teachEntries) {
    const b = bare(t.trg);
    if (!b) continue;
    let tested = false;
    for (const q of quizzedWords) {
      const qlow = q.toLowerCase();
      if (qlow.includes(b) || b.includes(qlow)) { tested = true; break; }
    }
    if (!tested) untested.push(t);
  }

  if (untested.length === 0) { continue; }
  grandTotalUntested += untested.length;
  console.log(`${file}: ${untested.length} untested (${matchSteps.length} existing match steps)`);

  if (!apply) continue;

  // Plan: append NEW match steps of up to 6 pairs each. We put them AT THE
  // BEGINNING of the last lesson's final position? No — at the end of the last
  // lesson, before the closing `]}` of that lesson's steps array.
  // Simplest: append new match steps RIGHT BEFORE the very last `]}` of the
  // last top-level lesson. We locate the last lesson by finding the last
  // `{id:"..."` that sits inside the outer structure, then find its end.
  //
  // Safer: append new match steps as the last step(s) of the last lesson.
  // We implement by locating the last occurrence of `]}` that closes a
  // lesson (i.e., the steps-array closer) and inserting match JSON before it.

  // Chunk untested into groups of 6
  const chunks = [];
  for (let i = 0; i < untested.length; i += 6) chunks.push(untested.slice(i, i + 6));

  // Build match-step JSON strings
  const matchJsons = chunks.map(chunk => {
    const pairs = chunk.map(t => {
      const safeSrc = (t.src || '(review)').replace(/"/g, '\\"');
      const safeTrg = t.trg.replace(/"/g, '\\"');
      return `{trg:"${safeTrg}",src:"${safeSrc}"}`;
    }).join(',');
    return `{type:"match",pairs:[${pairs}]}`;
  });

  // Find the LAST lesson's closing `]}`. Strategy: find the last occurrence
  // of the pattern `]}\s*]}` -- the inner `]}` closes a lesson's steps array,
  // the outer `]}` closes the lessons array. We want to insert before the
  // inner `]}`.
  // Works for both compact `]}` and multi-line `]\n}` forms.
  //
  // We'll find the position of the last `id:"..."` (last lesson), then locate
  // its matching `]}`: after `steps:[`, walk to find the closing square that
  // matches. Use brace/bracket depth counting.

  const lastLessonIdMatch = [...content.matchAll(/\{\s*id\s*:\s*['"][^'"]+['"]/g)].pop();
  if (!lastLessonIdMatch) {
    console.log(`  SKIP: ${file} has no lesson id pattern`);
    continue;
  }
  const lessonStart = lastLessonIdMatch.index;
  // Walk from lessonStart, track `{` depth; when depth returns to 0, that's
  // the end of the lesson object.
  let depth = 0, lessonEnd = -1;
  for (let j = lessonStart; j < content.length; j++) {
    if (content[j] === '{') depth++;
    else if (content[j] === '}') { depth--; if (depth === 0) { lessonEnd = j; break; } }
  }
  if (lessonEnd === -1) { console.log(`  SKIP: ${file} unable to locate last lesson end`); continue; }

  // The last lesson ends with `...]}`. Insert our new match steps BEFORE the
  // final `]}`. Find the `]` that closes the steps array inside the lesson:
  // walk backward from lessonEnd to the first unmatched `]`.
  let rsquareIdx = -1;
  let rdepth = 0;
  for (let j = lessonEnd - 1; j > lessonStart; j--) {
    const ch = content[j];
    if (ch === ']') rdepth++;
    else if (ch === '[') { rdepth--; if (rdepth === 0) { rsquareIdx = j; break; } }
  }
  // Actually we want the `]` that closes the steps array, i.e. the outermost
  // `]` before `lessonEnd`. The FIRST `]` walking back from lessonEnd that
  // isn't inside a nested array. Simpler: find the position of the LAST `]`
  // between lessonStart and lessonEnd.
  const tail = content.slice(lessonStart, lessonEnd);
  const lastSquareOffset = tail.lastIndexOf(']');
  if (lastSquareOffset < 0) { console.log(`  SKIP: ${file} no ] before lesson end`); continue; }
  const insertPos = lessonStart + lastSquareOffset;
  // Check that the char right before is not itself `[` (empty array) and not
  // `,` (already at trailing comma); we want to insert `, <match...>` before the `]`.
  const before = content.slice(0, insertPos);
  const after = content.slice(insertPos);
  const needsComma = !/,\s*$/.test(before.trimEnd()) && !/\[\s*$/.test(before);
  const sep = needsComma ? ',' : '';
  const insertion = sep + matchJsons.join(',');
  content = before + insertion + after;

  fs.writeFileSync(filePath, content);
  filesEdited.push(file);
  grandTotalFixed += untested.length;
  console.log(`  FIXED: added ${chunks.length} match step(s) covering ${untested.length} teach cards`);
}

console.log(`\nSUMMARY: ${grandTotalUntested} untested across ${files.length} files`);
if (apply) console.log(`Edited ${filesEdited.length} files, fixed ${grandTotalFixed} untested teach cards`);
else console.log(`Dry run. Add --apply to write changes.`);
