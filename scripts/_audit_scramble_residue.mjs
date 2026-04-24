#!/usr/bin/env node
// Detect scramble-bug residue: teach cards where funFact starts with a specific
// word/phrase that doesn't match the trg.
// Works by collecting distinct fact-prefixes and checking for mismatches.

import fs from 'node:fs';
import path from 'node:path';

const LANGS = [
  { dir: 'spanish-v2', field: 'trg' },
  { dir: 'korean-v2', field: 'nl' },
  { dir: 'dutch-v2', field: 'trg' },
  { dir: 'french-v2', field: 'trg' },
  { dir: 'italian-v2', field: 'trg' },
];

for (const { dir, field } of LANGS) {
  console.log(`\n=== ${dir} (${field}) ===`);
  const root = `src/data/${dir}`;
  const factToCards = new Map();  // fact -> [{trg, file}]
  for (const f of fs.readdirSync(root)) {
    if (!f.endsWith('.js')) continue;
    const text = fs.readFileSync(path.join(root, f), 'utf8');
    const fieldPat = field === 'trg' ? 'trg' : '(?:trg|nl)';
    const re = new RegExp(`\\{type:"teach",(?:kind:"[^"]*",)?${fieldPat}:"([^"]+)"[\\s\\S]*?funFact:"((?:[^"\\\\]|\\\\.)*)"`, 'g');
    let m;
    while ((m = re.exec(text)) !== null) {
      if (!factToCards.has(m[2])) factToCards.set(m[2], []);
      factToCards.get(m[2]).push({ trg: m[1], file: f });
    }
  }
  // Flag facts used on multiple distinct trgs AND start with a noun-like identifier
  let hits = 0;
  for (const [fact, cards] of factToCards) {
    const uniqueTrgs = new Set(cards.map(c => c.trg));
    if (uniqueTrgs.size < 2) continue;
    // Fact starts with "Word." or "Word /" pattern = specific word-fact
    const firstWord = fact.slice(0, 30);
    if (!/^[A-Z][a-z]+ ?[\/.]/.test(fact)) continue;
    const expectedWord = firstWord.split(/[\/.,\s]/)[0].toLowerCase();
    // Check trgs don't contain the expected word in any form — just flag distinct trgs
    if (uniqueTrgs.size >= 2) {
      hits++;
      if (hits <= 5) {
        console.log(`  ${fact.slice(0, 60)}...`);
        for (const c of cards.slice(0, 4)) console.log(`    [${c.file}] ${c.trg}`);
      }
    }
  }
  console.log(`  Total: ${hits} suspicious facts on multiple trgs`);
}
