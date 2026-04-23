#!/usr/bin/env node
// Scrub em-dashes and extract stem/stemSrc from cluttered placement-quiz
// questions. Pattern detected:
//   q: "'<target>' (<translation>) — <meta question>"
//   q: "'<target>' (<translation>), <meta question>"   // already split
//   q: "'<target>' — <meta>"                           // no translation
//   q: "'<target>' means:"                             // standalone
// Converts to: { stem, stemSrc?, q } with em-dashes replaced.

import fs from 'node:fs';
import path from 'node:path';

const apply = process.argv.includes('--apply');
const LANGS = ['de','es','fr','it','ja','ko','nl','pt','ru'];

// Match a q-line in source. Captures:
//   1: before the q: value
//   2: the raw q string (without quotes)
//   3: the rest of the object entry up to ans
const Q_LINE = /(\{\s*id:"[^"]+",\s*level:"[^"]+",\s*)q:"((?:[^"\\]|\\.)*)"(,\s*opts:)/g;

// Parse a single q-text and split into stem/stemSrc/q.
function splitQ(raw) {
  // Unescape: our source strings use backslashes for quotes.
  const text = raw.replace(/\\'/g, "'").replace(/\\"/g, '"');
  // Em-dash split pattern: anything-em-dash-spacestuff
  // First look for: '<stem>' (<src>) — <meta>
  let m = text.match(/^'([^']+)'\s*\(([^()]*)\)\s*[—–]\s*(.+)$/);
  if (m) return { stem: m[1], stemSrc: m[2], q: capitalize(m[3].trim()) };
  // '<stem>' — <meta>
  m = text.match(/^'([^']+)'\s*[—–]\s*(.+)$/);
  if (m) return { stem: m[1], stemSrc: null, q: capitalize(m[2].trim()) };
  // '<stem>' (<src>) <meta>      (no em-dash; already okay)
  // '<stem>' means: ...
  m = text.match(/^'([^']+)'\s*means:?\s*$/i);
  if (m) return { stem: m[1], stemSrc: null, q: `What does this mean?` };
  m = text.match(/^'([^']+)'\s+means:?\s*(.+)?$/);
  if (m) return { stem: m[1], stemSrc: null, q: `What does this mean?` };
  // No match, but scrub any em-dashes in place.
  if (/[—–]/.test(text)) {
    return { stem: null, stemSrc: null, q: text.replace(/\s*[—–]\s*/g, ' ') };
  }
  return null; // no change needed
}

function capitalize(s) {
  if (!s) return s;
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function escStr(s) {
  return s.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
}

let totalChanges = 0;
for (const lang of LANGS) {
  const file = path.join('src/data/placement-questions', `${lang}.js`);
  if (!fs.existsSync(file)) continue;
  const src = fs.readFileSync(file, 'utf8');
  let changes = 0;
  const out = src.replace(Q_LINE, (whole, pre, q, post) => {
    const split = splitQ(q);
    if (!split) return whole;
    changes++;
    const parts = [pre];
    if (split.stem) parts.push(`stem:"${escStr(split.stem)}", `);
    if (split.stemSrc) parts.push(`stemSrc:"${escStr(split.stemSrc)}", `);
    parts.push(`q:"${escStr(split.q)}"`);
    parts.push(post);
    return parts.join('');
  });
  if (changes > 0) {
    console.log(`${file}: ${changes} change(s)`);
    totalChanges += changes;
    if (apply) fs.writeFileSync(file, out);
  }
}
console.log(`\nTotal: ${totalChanges}`);
if (!apply) console.log('Dry run. Re-run with --apply.');
