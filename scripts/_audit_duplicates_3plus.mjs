#!/usr/bin/env node
// Count funFacts with 3-4 occurrences (just below boring threshold) per language.

import { pathToFileURL } from 'node:url';
import path from 'node:path';

const LANGS = ['german','korean','dutch','french','spanish','italian','japanese','chinese','portuguese','russian'];

for (const lang of LANGS) {
  const mod = await import(pathToFileURL(path.resolve(`src/data/units-${lang}-v2.js`)).href);
  const units = mod.default || [];
  const counts = new Map();
  for (const u of units) for (const l of u.lessons || []) for (const s of l.steps || []) {
    if (!s || s.type !== 'teach' || !s.funFact) continue;
    const key = s.funFact.trim();
    counts.set(key, (counts.get(key) || 0) + 1);
  }
  const mid = [...counts.entries()].filter(([, n]) => n >= 3 && n < 5);
  const midTotal = mid.reduce((a, [, n]) => a + n, 0);
  console.log(`[${lang}] ${midTotal} cards in ${mid.length} variants (3-4 occurrences each)`);
}
