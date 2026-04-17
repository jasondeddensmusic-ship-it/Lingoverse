// Strict validator-matching script: only counts mc opts/ans, fb a, match trg
const fs = require('fs');
const path = require('path');

const dir = 'src/data/russian-v2';
const files = fs.readdirSync(dir).filter(f => f.startsWith('unit-') && f.endsWith('.js'));

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

  // mc opts and ans ONLY
  // Find all mc blocks
  const mcBlocks = src.matchAll(/type:"mc"[\s\S]*?(?=type:"|$)/g);
  for (const mcm of mcBlocks) {
    const block = mcm[0];
    const optsM = block.match(/opts:\[([^\]]+)\]/);
    if (optsM) {
      const parts = optsM[1].match(/"([^"]+)"/g) || [];
      parts.forEach(p => quizzedWords.add(p.replace(/"/g, '')));
    }
    const ansM = block.match(/ans:"([^"]+)"/);
    if (ansM) quizzedWords.add(ansM[1]);
  }

  // fb answer only (a:[...])
  const fbBlocks = src.matchAll(/type:"fb"[\s\S]*?(?=type:"|$)/g);
  for (const fbm of fbBlocks) {
    const block = fbm[0];
    const aM = block.match(/a:\[["']([^"']+)["']\]/);
    if (aM) quizzedWords.add(aM[1]);
    const optsM = block.match(/opts:\[([^\]]+)\]/);
    if (optsM) {
      const parts = optsM[1].match(/"([^"]+)"/g) || [];
      parts.forEach(p => quizzedWords.add(p.replace(/"/g, '')));
    }
  }

  // match pairs trg only
  const matchBlocks = src.matchAll(/type:"match",\s*pairs:\s*\[([\s\S]*?)\]/g);
  for (const mm of matchBlocks) {
    const trgs = mm[1].matchAll(/trg:\s*['"]([^'"]+)['"]/g);
    for (const t of trgs) quizzedWords.add(t[1]);
  }

  // drag_fill pool
  const dragBlocks = src.matchAll(/type:"drag_fill"[\s\S]*?pool:\[([^\]]+)\]/g);
  for (const dm of dragBlocks) {
    const parts = dm[1].match(/"([^"]+)"/g) || [];
    parts.forEach(p => quizzedWords.add(p.replace(/"/g, '')));
  }

  // Check each teach trg (using validator's matching logic)
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

  if (untested.length > 0) untestedByUnit[file] = untested;
}

let total = 0;
for (const [file, items] of Object.entries(untestedByUnit)) {
  console.log(`\n${file}: ${items.length} untested`);
  items.forEach(i => console.log(`  - ${i}`));
  total += items.length;
}
console.log(`\nTOTAL: ${total}`);
