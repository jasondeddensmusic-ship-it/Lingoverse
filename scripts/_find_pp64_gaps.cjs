#!/usr/bin/env node
// Find which teach cards have no quiz coverage (PP64).
// Usage: node scripts/_find_pp64_gaps.cjs <lang-v2>

'use strict';
const fs = require('fs');
const path = require('path');

const lang = process.argv[2] || 'german-v2';
const dir = path.join('src', 'data', lang);
if (!fs.existsSync(dir)) {
  console.error(`Missing: ${dir}`);
  process.exit(1);
}

const ARTICLE_STRIP = /^(de|het|een|le|la|l'|les|un|une|el|los|las|der|die|das|ein|eine|il|i|gli|lo|uno|o|os|as|um|uma)\s+/i;
function normalize(s) {
  return String(s).toLowerCase().replace(ARTICLE_STRIP, '').replace(/[!?.,;:]/g, '').trim();
}

// Crude extraction: per-unit file. Collect all teach trgs + all quiz opts/ans/pairs per unit.
const files = fs.readdirSync(dir).filter(f => f.startsWith('unit-') && f.endsWith('.js'));
const allGaps = [];

for (const f of files) {
  const content = fs.readFileSync(path.join(dir, f), 'utf8');
  // Extract teach trgs for this unit
  const teachTrgs = [];
  const teachMatcher = /type:\s*["']teach["'][^}]*?trg:\s*["']([^"']+)["']/g;
  let m;
  while ((m = teachMatcher.exec(content)) !== null) {
    teachTrgs.push(m[1]);
  }
  // Extract all "quizzed" strings in this unit: mc ans, mc opts, fb a, fb opts, match trg.
  const quizzed = new Set();
  // fb/mc ans
  const ansMatcher = /\bans:\s*["']([^"']+)["']/g;
  while ((m = ansMatcher.exec(content)) !== null) quizzed.add(m[1]);
  const aMatcher = /\ba:\s*["']([^"']+)["']/g;
  while ((m = aMatcher.exec(content)) !== null) quizzed.add(m[1]);
  const aArrMatcher = /\ba:\s*\[["']([^"']+)["']\]/g;
  while ((m = aArrMatcher.exec(content)) !== null) quizzed.add(m[1]);
  // opts arrays
  const optsMatcher = /opts:\s*\[([^\]]+)\]/g;
  while ((m = optsMatcher.exec(content)) !== null) {
    const items = m[1].match(/["']([^"']+)["']/g) || [];
    for (const it of items) quizzed.add(it.slice(1, -1));
  }
  // match pairs
  const matchMatcher = /pairs:\s*\[([^\]]+)\]/g;
  while ((m = matchMatcher.exec(content)) !== null) {
    const trgItems = (m[1].match(/trg:\s*["']([^"']+)["']/g) || [])
      .map(x => x.match(/["']([^"']+)["']/)[1]);
    for (const it of trgItems) quizzed.add(it);
  }
  // drag_fill blanks values
  const blanksMatcher = /blanks:\s*\{([^}]+)\}/g;
  while ((m = blanksMatcher.exec(content)) !== null) {
    const vals = (m[1].match(/["']\d+["']:\s*["']([^"']+)["']/g) || [])
      .map(x => x.match(/["']\d+["']:\s*["']([^"']+)["']/)[1]);
    for (const it of vals) quizzed.add(it);
  }

  // Normalize
  const quizzedSet = new Set([...quizzed].map(normalize));
  for (const trg of teachTrgs) {
    const bare = normalize(trg);
    if (!bare) continue;
    let found = false;
    for (const q of quizzedSet) {
      if (q.includes(bare) || bare.includes(q)) { found = true; break; }
    }
    if (!found) {
      allGaps.push({ file: f, trg });
    }
  }
}

console.log(`PP64 gaps in ${lang}: ${allGaps.length}`);
for (const g of allGaps) {
  console.log(`  ${g.file}: ${g.trg}`);
}
