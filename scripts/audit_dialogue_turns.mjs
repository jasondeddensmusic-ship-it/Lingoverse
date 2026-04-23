#!/usr/bin/env node
// Audit teach-card `example` dialogues by turn count.
// A "turn" is an A:/B: (or A./B. or A)/B)) speaker tag line.
//   - 1-turn examples  : just a sentence (no dialogue structure)
//   - 2-turn examples  : A: ... / B: ... (baseline)
//   - 3+ turn examples : A: ... / B: ... / A: ... (pedagogically richer)
//
// Output: per-language totals + top lessons needing scaling.

import { pathToFileURL } from 'node:url';
import path from 'node:path';

const LANGS = ['german','korean','dutch','french','spanish','italian','japanese','chinese','portuguese','russian'];
const args = process.argv.slice(2);
const only = args.filter(a => !a.startsWith('-')).filter(a => LANGS.includes(a));
const targets = only.length ? only : LANGS;
const verbose = args.includes('--verbose');

async function loadUnits(lang) {
  const p = path.resolve(process.cwd(), `src/data/units-${lang}-v2.js`);
  return (await import(pathToFileURL(p).href)).default;
}

function countTurns(example) {
  if (!example) return 0;
  const s = String(example);
  // Match speaker tags at start of line or after \n: "A:" / "B:" / "C:" / "A." / "A)"
  const tags = s.match(/(^|\n)\s*[A-Z][:.)）]/g);
  return tags ? tags.length : 0;
}

for (const lang of targets) {
  const units = await loadUnits(lang);
  let t0 = 0, t1 = 0, t2 = 0, t3 = 0, noExample = 0, total = 0;
  const byLesson = {};
  for (const u of units) {
    for (const l of u.lessons || []) {
      for (const s of l.steps || []) {
        if (!s || s.type !== 'teach') continue;
        total++;
        if (!s.example) { noExample++; continue; }
        const n = countTurns(s.example);
        if (n === 0) t0++;
        else if (n === 1) t1++;
        else if (n === 2) t2++;
        else t3++;
        if (n > 0 && n < 3) {
          (byLesson[l.id] ||= []).push({ trg: s.trg || s.nl, turns: n });
        }
      }
    }
  }
  const underScaled = t1 + t2;
  console.log(`\n[${lang}] total=${total} noEx=${noExample} turn0=${t0} turn1=${t1} turn2=${t2} turn3+=${t3}  UNDER-SCALED(1-2 turns)=${underScaled}`);
  if (verbose) {
    const lessonSorted = Object.entries(byLesson).sort((a,b)=>b[1].length - a[1].length).slice(0, 10);
    for (const [id, cards] of lessonSorted) {
      console.log(`  ${id}: ${cards.length} cards (${cards.slice(0,3).map(c=>c.trg).join(', ')}${cards.length>3?', ...':''})`);
    }
  }
}
