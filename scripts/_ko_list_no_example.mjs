#!/usr/bin/env node
// List all Korean teach cards that still lack an `example` field,
// grouped by lesson id. Output JSON-ish for easy consumption.

import { pathToFileURL } from 'node:url';
import path from 'node:path';

const mod = await import(pathToFileURL(path.resolve('src/data/units-korean-v2.js')).href);
const units = mod.UNITS_KOREAN_V2 || mod.default || [];

const byLesson = {};
let total = 0;
for (const u of units) {
  for (const l of u.lessons || []) {
    for (const s of l.steps || []) {
      if (!s || s.type !== 'teach') continue;
      if (s.example) continue;
      const trg = s.trg || s.nl;
      const src = s.src || s.en;
      const pos = s.pos || '';
      if (!trg) continue;
      (byLesson[l.id] ||= []).push({ trg, src, pos });
      total++;
    }
  }
}

console.log(`Total teach-no-example: ${total}`);
console.log('---');
for (const [id, cards] of Object.entries(byLesson)) {
  console.log(`\n${id} (${cards.length}):`);
  for (const c of cards) console.log(`  ${c.trg}  [${c.pos}]  ${c.src}`);
}
