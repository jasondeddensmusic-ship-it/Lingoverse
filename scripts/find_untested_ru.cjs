// Identify which teach cards in russian-v2 are not tested by any quiz step
const fs = require('fs');
const path = require('path');

const dir = 'src/data/russian-v2';
const files = fs.readdirSync(dir).filter(f => f.startsWith('unit-') && f.endsWith('.js'));

// Aggregate teach trgs and quizzed words across all units
const untestedByUnit = {};

for (const file of files) {
  const src = fs.readFileSync(path.join(dir, file), 'utf8');
  const teachTrgs = [];
  const quizzedWords = new Set();

  // Extract teach card trgs
  const teachRegex = /type:"teach"[^}]*?trg:"([^"]+)"/g;
  let m;
  while ((m = teachRegex.exec(src)) !== null) {
    teachTrgs.push(m[1]);
  }

  // Extract all strings from mc opts, mc ans, fb a, fb opts, match pairs, drag_fill pool
  // Just scan for known patterns
  const ansRegex = /ans:"([^"]+)"/g;
  while ((m = ansRegex.exec(src)) !== null) {
    quizzedWords.add(m[1]);
  }
  const aRegex = /a:\[["']([^"']+)["']\]/g;
  while ((m = aRegex.exec(src)) !== null) {
    quizzedWords.add(m[1]);
  }
  const optsRegex = /opts:\[([^\]]+)\]/g;
  while ((m = optsRegex.exec(src)) !== null) {
    const parts = m[1].match(/"([^"]+)"/g) || [];
    parts.forEach(p => quizzedWords.add(p.replace(/"/g, '')));
  }
  const trgPairRegex = /\{trg:"([^"]+)",\s*src:"/g;
  while ((m = trgPairRegex.exec(src)) !== null) {
    quizzedWords.add(m[1]);
  }
  // Questions too
  const qRegex = /q:"([^"]+)"/g;
  while ((m = qRegex.exec(src)) !== null) {
    quizzedWords.add(m[1]);
  }
  // fb sentences (the {1} blank context counts)
  const sRegex = /s:"([^"]+)"/g;
  while ((m = sRegex.exec(src)) !== null) {
    quizzedWords.add(m[1]);
  }

  // Check each teach trg
  const untested = [];
  for (const trg of teachTrgs) {
    const bare = trg.toLowerCase().trim();
    let tested = false;
    for (const q of quizzedWords) {
      if (q.toLowerCase().includes(bare) || bare.includes(q.toLowerCase())) {
        tested = true;
        break;
      }
    }
    if (!tested) untested.push(trg);
  }

  if (untested.length > 0) {
    untestedByUnit[file] = untested;
  }
}

console.log('UNTESTED TEACH CARDS BY UNIT:');
let total = 0;
for (const [file, items] of Object.entries(untestedByUnit)) {
  console.log(`\n${file}: ${items.length} untested`);
  items.forEach(i => console.log(`  - ${i}`));
  total += items.length;
}
console.log(`\nTOTAL UNTESTED: ${total}`);
