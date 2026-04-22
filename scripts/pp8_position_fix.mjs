#!/usr/bin/env node
// PP8 position-leak fixer — cycles the correct answer's position across the
// MC steps within each lesson (positions 0, 1, 2, 3, 0, 1, 2, 3, …) so no
// single index clusters. The options set is preserved; only the rotation
// changes.
//
// Two-pass:
//   1. Load runtime lesson tree via ESM to get an ordered MC-step list per
//      lesson, including each step's (ans, opts).
//   2. Walk each source file, matching MC blocks and mapping each by its
//      (trimmed ans + lesson ordinal) into a target position.
//
// Falls back to rewriting only when the MC step is unambiguously identified
// and rotation changes anything.
//
// Mechanism: operate on file text with a conservative regex that finds the
// smallest MC step block `{type:"mc", … opts:[…] … ans:"…" …}`, parses its
// opts array and ans literal, computes target position, and rewrites the
// opts literal in place.
//
// Safety:
//   • Never changes the set of options (only their order).
//   • Never changes the answer.
//   • Skips blocks where opts cannot be parsed cleanly or where ans isn't
//     one of the opts (logs, doesn't mutate).

import fs from 'node:fs';
import path from 'node:path';

const apply = process.argv.includes('--apply');

function walk(dir) {
  const out = [];
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) out.push(...walk(p));
    else if (ent.isFile() && ent.name.endsWith('.js')) out.push(p);
  }
  return out;
}

const DATA_ROOT = path.join('src', 'data');
const langDirs = fs.readdirSync(DATA_ROOT)
  .filter(f => /-v2$/.test(f))
  .map(f => path.join(DATA_ROOT, f));
const files = langDirs.flatMap(walk);

// Parse a JS-literal opts/options array given the surrounding source text.
// Returns { items: string[], rawLiteral: string, start: number, end: number } or null.
function parseOptsAt(src, openIdx) {
  if (src[openIdx] !== '[') return null;
  let i = openIdx + 1;
  const items = [];
  let depth = 1;
  let current = null;
  let currentStart = -1;
  while (i < src.length && depth > 0) {
    const ch = src[i];
    if (ch === '"' || ch === "'") {
      const quote = ch;
      currentStart = i;
      i++;
      while (i < src.length && src[i] !== quote) {
        if (src[i] === '\\') i += 2; else i++;
      }
      const literal = src.slice(currentStart, i + 1);
      items.push({ literal, raw: src.slice(currentStart + 1, i) });
      i++;
      continue;
    }
    if (ch === '[' || ch === '{') depth++;
    else if (ch === ']' || ch === '}') depth--;
    if (depth === 0) break;
    i++;
  }
  if (depth !== 0) return null;
  const closeIdx = i;
  return { items, rawLiteral: src.slice(openIdx, closeIdx + 1), start: openIdx, end: closeIdx };
}

// Decode a JS double-quoted string literal into its value, conservatively.
function decodeDQ(literal) {
  // literal starts and ends with " or '. Strip quotes.
  const q = literal[0];
  if (literal[literal.length - 1] !== q) return literal;
  let s = literal.slice(1, -1);
  s = s.replace(/\\n/g, '\n').replace(/\\t/g, '\t').replace(/\\r/g, '\r');
  s = s.replace(/\\(.)/g, '$1');
  return s;
}

// FNV-ish hash of a string — kept for fallback only.
function hashStr(s) {
  let h = 7;
  for (const ch of s) h = ((h * 31 + ch.charCodeAt(0)) >>> 0);
  return h >>> 0;
}

// Track a per-lesson counter so every MC step within a lesson gets a
// distinct position (cycling through 0..len-1). Lessons are bounded by the
// `id:"…"` keys in the source text.
function detectLessonSpans(src) {
  const spans = [];
  const re = /\bid\s*:\s*['"]([^'"]+)['"]/g;
  let m;
  while ((m = re.exec(src)) !== null) {
    spans.push({ id: m[1], pos: m.index });
  }
  // A lesson spans from its id position to the next lesson's id position
  // (or end-of-file).
  const out = [];
  for (let i = 0; i < spans.length; i++) {
    out.push({ id: spans[i].id, start: spans[i].pos, end: i + 1 < spans.length ? spans[i + 1].pos : src.length });
  }
  return out;
}

function lessonAt(spans, pos) {
  for (const s of spans) if (pos >= s.start && pos < s.end) return s.id;
  return '(none)';
}

let filesChanged = 0, stepsRotated = 0, stepsSkipped = 0;

for (const f of files) {
  const before = fs.readFileSync(f, 'utf8');
  if (!before.includes('type:"mc"') && !before.includes("type:'mc'")) continue;

  const spans = detectLessonSpans(before);
  // Per-lesson MC counter.
  const lessonCounter = new Map();

  // Scan for MC blocks. Handle both unquoted keys (`{type:"mc"`) and
  // quoted keys (`{"type":"mc"`). Some unit files use JSON-style syntax.
  const openRe = /\{\s*["']?type["']?\s*:\s*['"]mc['"]/g;
  const replacements = []; // { from, to, newText }

  let m;
  while ((m = openRe.exec(before)) !== null) {
    const start = m.index;
    // Find matching `}`.
    let i = start + 1;
    let depth = 1;
    while (i < before.length && depth > 0) {
      const ch = before[i];
      if (ch === '"' || ch === "'") {
        const q = ch;
        i++;
        while (i < before.length && before[i] !== q) {
          if (before[i] === '\\') i += 2; else i++;
        }
        i++;
        continue;
      }
      if (ch === '{' || ch === '[') depth++;
      else if (ch === '}' || ch === ']') depth--;
      if (depth === 0) break;
      i++;
    }
    if (depth !== 0) continue;
    const endInc = i;
    const blockText = before.slice(start, endInc + 1);

    // Extract opts literal. Handle both `opts:` and `"opts":` key forms.
    const optsKeyRe = /["']?opts["']?\s*:\s*\[/g;
    const optsKeyMatch = optsKeyRe.exec(blockText);
    if (!optsKeyMatch) { stepsSkipped++; continue; }
    const optsBracket = optsKeyMatch.index + optsKeyMatch[0].length - 1; // index of `[`
    const opts = parseOptsAt(blockText, optsBracket);
    if (!opts || opts.items.length < 2) { stepsSkipped++; continue; }

    // Extract ans. Support both quoted-key `"ans":"x"` and unquoted `ans:"x"`.
    let ansVal = null;
    const ansStrRe = /["']?\bans["']?\s*:\s*(['"])((?:\\.|(?!\1).)*)\1/;
    const asm = blockText.match(ansStrRe);
    if (asm) {
      ansVal = asm[2].replace(/\\"/g, '"').replace(/\\'/g, "'").replace(/\\\\/g, '\\');
    } else {
      const ansArrRe = /["']?\bans["']?\s*:\s*\[\s*(['"])((?:\\.|(?!\1).)*)\1/;
      const aam = blockText.match(ansArrRe);
      if (aam) ansVal = aam[2].replace(/\\"/g, '"').replace(/\\'/g, "'").replace(/\\\\/g, '\\');
    }
    if (!ansVal) { stepsSkipped++; continue; }

    // Decode each option and find current index.
    const decoded = opts.items.map(it => decodeDQ(it.literal));
    let curIdx = decoded.findIndex(d => d === ansVal);
    if (curIdx < 0) {
      // Fallback: case-insensitive match.
      const ansLower = ansVal.toLowerCase();
      curIdx = decoded.findIndex(d => d.toLowerCase() === ansLower);
      if (curIdx < 0) { stepsSkipped++; continue; }
    }

    // Compute desired index = this MC's ordinal-within-lesson mod len.
    const lessonId = lessonAt(spans, start);
    const n = (lessonCounter.get(lessonId) || 0);
    lessonCounter.set(lessonId, n + 1);
    const target = n % decoded.length;
    if (curIdx === target) continue; // already at target

    // Rotate so ans lands at target.
    // rotation amount = (target - curIdx + len) % len
    const rot = (target - curIdx + decoded.length) % decoded.length;
    // New order: items[(len - rot) .. ] + items[0 .. (len - rot)]
    const len = decoded.length;
    const splitAt = (len - rot) % len;
    const newItems = opts.items.slice(splitAt).concat(opts.items.slice(0, splitAt));
    // Sanity: new index of ans should equal target.
    const newDecoded = newItems.map(it => decodeDQ(it.literal));
    if (newDecoded[target] !== ansVal && newDecoded[target].toLowerCase() !== ansVal.toLowerCase()) {
      stepsSkipped++;
      continue;
    }

    const newOptsLiteral = '[' + newItems.map(it => it.literal).join(',') + ']';
    // Replace the opts literal within blockText, then within before.
    const oldOptsLiteral = opts.rawLiteral;
    const newBlockText = blockText.slice(0, optsBracket) + newOptsLiteral + blockText.slice(optsBracket + oldOptsLiteral.length);
    replacements.push({ from: start, to: endInc + 1, newText: newBlockText });
    stepsRotated++;
  }

  if (replacements.length === 0) continue;
  // Apply replacements back-to-front so indices stay valid.
  replacements.sort((a, b) => b.from - a.from);
  let updated = before;
  for (const r of replacements) {
    updated = updated.slice(0, r.from) + r.newText + updated.slice(r.to);
  }
  filesChanged++;
  if (apply) fs.writeFileSync(f, updated);
}

console.log(`Files changed: ${filesChanged}`);
console.log(`MC steps rotated: ${stepsRotated}`);
console.log(`MC steps skipped (unparseable): ${stepsSkipped}`);
if (!apply) console.log('\nDry run. Re-run with --apply to write.');
