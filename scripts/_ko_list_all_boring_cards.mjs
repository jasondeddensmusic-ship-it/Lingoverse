#!/usr/bin/env node
// Lists all remaining Korean boring cards grouped by fact.
import fs from 'node:fs';
const counts = new Map();
const cards = new Map();
for (const f of fs.readdirSync('src/data/korean-v2')) {
  if (!f.endsWith('.js')) continue;
  const text = fs.readFileSync('src/data/korean-v2/' + f, 'utf8');
  const re = /\{type:"teach",(?:kind:"[^"]*",)?nl:"([^"]+)",en:"([^"]+)"[\s\S]*?funFact:"((?:[^"\\]|\\.)*)"/g;
  let m;
  while ((m = re.exec(text)) !== null) {
    counts.set(m[3], (counts.get(m[3]) || 0) + 1);
    if (!cards.has(m[3])) cards.set(m[3], []);
    cards.get(m[3]).push({ file: f, nl: m[1], en: m[2] });
  }
}
const boring = [...counts.entries()].filter(([, n]) => n >= 5).sort((a, b) => b[1] - a[1]);
for (const [fact, n] of boring) {
  console.log(`\n===== ${n}x "${fact.slice(0, 80)}..." =====`);
  for (const c of cards.get(fact)) {
    console.log(`  [${c.file}] ${c.nl} = ${c.en}`);
  }
}
