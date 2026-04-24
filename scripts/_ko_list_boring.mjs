#!/usr/bin/env node
import fs from 'node:fs';
const counts = new Map();
const cards = new Map(); // text -> [{file, nl}]
for (const f of fs.readdirSync('src/data/korean-v2')) {
  if (!f.endsWith('.js')) continue;
  const text = fs.readFileSync('src/data/korean-v2/' + f, 'utf8');
  const re = /\{type:"teach",(?:kind:"[^"]*",)?nl:"([^"]+)"[\s\S]*?funFact:"((?:[^"\\]|\\.)*)"/g;
  let m;
  while ((m = re.exec(text)) !== null) {
    const fact = m[2];
    counts.set(fact, (counts.get(fact) || 0) + 1);
    if (!cards.has(fact)) cards.set(fact, []);
    cards.get(fact).push({ file: f, nl: m[1] });
  }
}
const boring = [...counts.entries()].filter(([, n]) => n >= 5).sort((a, b) => b[1] - a[1]);
for (const [t, n] of boring) {
  console.log(`${n}x  ${t.slice(0, 100)}`);
}
