#!/usr/bin/env node
// Audit teach-card funFacts for "boring" generic content that adds no learning
// value — e.g. "Masculine noun. Words ending in -o are usually masculine."
// We define "boring" as: funFact appears 5+ times across the corpus.

import { pathToFileURL } from 'node:url';
import path from 'node:path';

const LANGS = ['german','korean','dutch','french','spanish','italian','japanese','chinese','portuguese','russian'];
const targets = process.argv.slice(2).filter(x => LANGS.includes(x));
const langs = targets.length ? targets : LANGS;

for (const lang of langs) {
  const mod = await import(pathToFileURL(path.resolve(`src/data/units-${lang}-v2.js`)).href);
  const units = mod.default || [];
  const counts = new Map();
  for (const u of units) {
    for (const l of u.lessons || []) {
      for (const s of l.steps || []) {
        if (!s || s.type !== 'teach' || !s.funFact) continue;
        const key = s.funFact.trim();
        counts.set(key, (counts.get(key) || 0) + 1);
      }
    }
  }
  const boring = [...counts.entries()].filter(([, n]) => n >= 5).sort((a, b) => b[1] - a[1]);
  const boringTotal = boring.reduce((a, [, n]) => a + n, 0);
  console.log(`\n[${lang}] ${boringTotal} teach cards use a funFact reused 5+ times`);
  for (const [text, n] of boring.slice(0, 5)) {
    console.log(`  ${n}×  "${text.slice(0, 100)}${text.length > 100 ? '...' : ''}"`);
  }
  if (boring.length > 5) console.log(`  …and ${boring.length - 5} more variants`);
}
