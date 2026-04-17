// Auto-add match steps covering untested teach cards in Russian units
// This adds a new match block at the end of each unit's last lesson,
// covering any untested teach cards.
const fs = require('fs');
const path = require('path');

const dir = 'src/data/russian-v2';
const files = fs.readdirSync(dir).filter(f => f.startsWith('unit-') && f.endsWith('.js'));

function findUntested(src) {
  const teachTrgs = [];
  const quizzedWords = new Set();

  const teachRegex = /type:"teach"[^}]*?trg:"([^"]+)"/g;
  let m;
  while ((m = teachRegex.exec(src)) !== null) teachTrgs.push(m[1]);

  const ansRegex = /ans:"([^"]+)"/g;
  while ((m = ansRegex.exec(src)) !== null) quizzedWords.add(m[1]);
  const aRegex = /a:\[["']([^"']+)["']\]/g;
  while ((m = aRegex.exec(src)) !== null) quizzedWords.add(m[1]);
  const optsRegex = /opts:\[([^\]]+)\]/g;
  while ((m = optsRegex.exec(src)) !== null) {
    const parts = m[1].match(/"([^"]+)"/g) || [];
    parts.forEach(p => quizzedWords.add(p.replace(/"/g, '')));
  }
  const trgPairRegex = /\{trg:"([^"]+)",\s*src:"/g;
  while ((m = trgPairRegex.exec(src)) !== null) quizzedWords.add(m[1]);
  const qRegex = /q:"([^"]+)"/g;
  while ((m = qRegex.exec(src)) !== null) quizzedWords.add(m[1]);
  const sRegex = /s:"([^"]+)"/g;
  while ((m = sRegex.exec(src)) !== null) quizzedWords.add(m[1]);

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
  return { teachTrgs, untested };
}

// Parse teach card src values so we can build match pairs
function getTeachPairs(src, targetTrgs) {
  // Find the exact teach card for each trg, extract src
  const pairs = [];
  for (const trg of targetTrgs) {
    // Escape special chars in trg for regex
    const escaped = trg.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const re = new RegExp(`type:"teach",\\s*trg:"${escaped}",\\s*src:"([^"]+)"`, 'i');
    const m = src.match(re);
    if (m) {
      pairs.push({ trg, src: m[1] });
    } else {
      // Fallback: just use trg
      pairs.push({ trg, src: trg });
    }
  }
  return pairs;
}

// Insert a match block before the final `]}` (closing the last lesson's steps)
function appendMatchBlock(src, pairs) {
  if (pairs.length === 0) return src;
  // Find last occurrence of `]}` followed by `\n]};\n`export default
  // We want to insert before the final lesson's closing `]}`
  // Simpler: find the last `]}` before `]};\nexport default`
  const exportIdx = src.lastIndexOf('export default');
  if (exportIdx === -1) return src;

  // Find `]};` before export default (end of UNIT_XX = ...})
  const beforeExport = src.substring(0, exportIdx);
  const endUnitIdx = beforeExport.lastIndexOf(']};');
  if (endUnitIdx === -1) return src;

  // Find the last `]}` before endUnitIdx (closing the last lesson)
  const beforeUnit = src.substring(0, endUnitIdx);
  const lastLessonClose = beforeUnit.lastIndexOf(']}');
  if (lastLessonClose === -1) return src;

  // Split pairs into chunks of ≤6 (validator is fine with one match block; keep reasonable)
  const pairsJson = pairs.map(p =>
    `  {trg:${JSON.stringify(p.trg)}, src:${JSON.stringify(p.src)}}`
  ).join(',\n');

  const matchBlock = `,\n\n{type:"match", pairs:[\n${pairsJson}\n]}`;

  return src.substring(0, lastLessonClose) + matchBlock + src.substring(lastLessonClose);
}

let fixedFiles = 0;
let totalAdded = 0;

for (const file of files) {
  const filepath = path.join(dir, file);
  const src = fs.readFileSync(filepath, 'utf8');
  const { untested } = findUntested(src);
  if (untested.length === 0) continue;

  const pairs = getTeachPairs(src, untested);
  const newSrc = appendMatchBlock(src, pairs);

  if (newSrc !== src) {
    fs.writeFileSync(filepath, newSrc, 'utf8');
    console.log(`${file}: added match block covering ${pairs.length} untested cards`);
    fixedFiles++;
    totalAdded += pairs.length;
  }
}

console.log(`\nFixed ${fixedFiles} files, added match coverage for ${totalAdded} teach cards.`);
