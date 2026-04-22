#!/usr/bin/env node
// PP22c em-dash fixer — replaces every em-dash (—) in user-facing string
// fields with a safer separator. Rules:
//   1. `word — word` (em-dash with spaces either side) → `word: word` when
//      the left side looks like a heading/label (short, ends with no
//      punctuation), else `word, word`.
//   2. `word—word` (no spaces) → `word, word`.
//   3. Special: inside hint strings, prefer `—` → `.` when it separates
//      two full clauses (second starts with capital or imperative verb).
//
// The script walks the filesystem directly because em-dashes appear in every
// kind of field (notes, funFacts, examples, hints, etc.), and it's faster
// to regex-replace on text than to rehydrate the entire ESM runtime tree.
// Safety: we only replace the literal — character, never regular hyphens.

import fs from 'node:fs';
import path from 'node:path';

const apply = process.argv.includes('--apply');

// Collect every data file under src/data/*-v2/*.js
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

let totalEm = 0;
let filesChanged = 0;

for (const f of files) {
  const before = fs.readFileSync(f, 'utf8');
  if (!before.includes('\u2014')) continue;
  const emCount = (before.match(/\u2014/g) || []).length;

  // Replace em-dashes with a neutral separator. Use colon if the em-dash
  // follows a short heading-like fragment (common in tips/funFacts), else a
  // period for clause boundaries, else a comma for mid-phrase.
  let after = before;

  // Strategy A: "text1 — text2" where text2 starts with a capital = clause
  // boundary. Replace ` — ` with `. `.
  after = after.replace(/\s\u2014\s([A-ZÄÖÜÀ-ÿĀ-ž])/g, '. $1');

  // Strategy B: "word — word" where RHS is lowercase or a common glue. Use
  // comma for mid-sentence.
  after = after.replace(/\s\u2014\s/g, ', ');

  // Strategy C: no-space em-dashes inside compounds: replace with hyphen-minus.
  after = after.replace(/\u2014/g, '-');

  if (after !== before) {
    filesChanged++;
    totalEm += emCount;
    if (apply) fs.writeFileSync(f, after);
    else console.log(`[dry] ${f}: ${emCount} em-dash(es)`);
  }
}

console.log(`\n${filesChanged} file(s), ${totalEm} em-dash(es) ${apply ? 'replaced' : 'would be replaced'}`);
if (!apply) console.log('Re-run with --apply to write.');
