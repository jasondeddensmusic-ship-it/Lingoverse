#!/usr/bin/env node
import fs from 'node:fs';
const counts = new Map();
const cards = new Map();
for (const f of fs.readdirSync('src/data/french-v2')) {
  if (!f.endsWith('.js')) continue;
  const text = fs.readFileSync('src/data/french-v2/' + f, 'utf8');
  const re = /\{type:"teach",trg:"([^"]+)",src:"([^"]+)"[\s\S]*?funFact:"((?:[^"\\]|\\.)*)"/g;
  let m;
  while ((m = re.exec(text)) !== null) {
    counts.set(m[3], (counts.get(m[3]) || 0) + 1);
    if (!cards.has(m[3])) cards.set(m[3], []);
    cards.get(m[3]).push({ file: f, trg: m[1], src: m[2] });
  }
}
const boring = [...counts.entries()].filter(([, n]) => n >= 5).sort((a, b) => b[1] - a[1]);
for (const [fact, n] of boring) {
  console.log(`\n===== ${n}x "${fact.slice(0, 70)}..." =====`);
  for (const c of cards.get(fact)) console.log(`  [${c.file}] ${c.trg} = ${c.src}`);
}
