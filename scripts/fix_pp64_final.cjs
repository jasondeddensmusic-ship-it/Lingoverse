// Final PP64 fix: use exact validator logic to find untested, then add match block
const fs = require('fs');
const path = require('path');

function extractStepBlocks(fileText) {
  const blocks = [];
  const typeRe = /\{\s*type\s*:\s*['"]([^'"]+)['"]/g;
  let m;
  const positions = [];
  while ((m = typeRe.exec(fileText)) !== null) positions.push({ pos: m.index, type: m[1] });
  for (let i = 0; i < positions.length; i++) {
    const start = positions[i].pos;
    let depth = 0, end = start;
    for (let j = start; j < fileText.length; j++) {
      if (fileText[j] === '{') depth++;
      else if (fileText[j] === '}') { depth--; if (depth === 0) { end = j + 1; break; } }
    }
    blocks.push({ type: positions[i].type, text: fileText.slice(start, end) });
  }
  return blocks;
}
function extractLessons(fileText) {
  const lessons = [];
  const lessonRe = /\{\s*id\s*:\s*['"]([^'"]+)['"]/g;
  let m;
  const positions = [];
  while ((m = lessonRe.exec(fileText)) !== null) positions.push({ pos: m.index, id: m[1] });
  for (let i = 0; i < positions.length; i++) {
    const start = positions[i].pos;
    const end = i + 1 < positions.length ? positions[i + 1].pos : fileText.length;
    lessons.push({ id: positions[i].id, text: fileText.slice(start, end) });
  }
  return lessons;
}
function extractField(text, field) {
  const re = new RegExp(field + `\\s*:\\s*['"]([^'"]*)['"]`);
  const m = text.match(re);
  return m ? m[1] : null;
}
function extractOpts(text) {
  const m = text.match(/opts\s*:\s*\[([\s\S]*?)\]/);
  if (!m) return [];
  return (m[1].match(/['"]([^'"]+)['"]/g) || []).map(s => s.slice(1, -1));
}
function extractA(text) {
  const m = text.match(/a\s*:\s*\[([\s\S]*?)\]/);
  if (!m) return [];
  return (m[1].match(/['"]([^'"]+)['"]/g) || []).map(s => s.slice(1, -1));
}

function findUntested(content) {
  const lessons = extractLessons(content);
  const teachTrgs = new Set();
  const quizzedWords = new Set();
  const teachPairs = {}; // trg -> src
  for (const lesson of lessons) {
    const steps = extractStepBlocks(lesson.text);
    for (const step of steps) {
      if (step.type === 'teach') {
        const trg = extractField(step.text, 'trg');
        const src = extractField(step.text, 'src');
        if (trg) { teachTrgs.add(trg); teachPairs[trg] = src || trg; }
      }
      if (step.type === 'mc') {
        extractOpts(step.text).forEach(o => quizzedWords.add(o));
        const ans = extractField(step.text, 'ans');
        if (ans) quizzedWords.add(ans);
      }
      if (step.type === 'fb') {
        extractA(step.text).forEach(w => quizzedWords.add(w));
      }
      if (step.type === 'match') {
        const pairsText = step.text.match(/pairs\s*:\s*\[([\s\S]*?)\]/);
        if (pairsText) {
          const trgRe = /trg\s*:\s*['"]([^'"]*)['"]/g;
          let pm;
          while ((pm = trgRe.exec(pairsText[1])) !== null) quizzedWords.add(pm[1]);
        }
      }
    }
  }
  const untested = [];
  for (const trg of teachTrgs) {
    const bare = trg.toLowerCase().trim();
    let tested = false;
    for (const q of quizzedWords) {
      if (q.toLowerCase().includes(bare) || bare.includes(q.toLowerCase())) { tested = true; break; }
    }
    if (!tested) untested.push({ trg, src: teachPairs[trg] });
  }
  return untested;
}

function appendMatchBlock(src, pairs) {
  if (pairs.length === 0) return src;
  const exportIdx = src.lastIndexOf('export default');
  if (exportIdx === -1) return src;
  const beforeExport = src.substring(0, exportIdx);
  const endUnitIdx = beforeExport.lastIndexOf(']};');
  if (endUnitIdx === -1) return src;
  const beforeUnit = src.substring(0, endUnitIdx);
  const lastLessonClose = beforeUnit.lastIndexOf(']}');
  if (lastLessonClose === -1) return src;

  const pairsJson = pairs.map(p =>
    `  {trg:${JSON.stringify(p.trg)}, src:${JSON.stringify(p.src)}}`
  ).join(',\n');
  const matchBlock = `,\n\n{type:"match", pairs:[\n${pairsJson}\n]}`;
  return src.substring(0, lastLessonClose) + matchBlock + src.substring(lastLessonClose);
}

const dir = 'src/data/russian-v2';
const files = fs.readdirSync(dir).filter(f => f.startsWith('unit-') && f.endsWith('.js'));
let totalAdded = 0;

for (const file of files) {
  const fp = path.join(dir, file);
  const src = fs.readFileSync(fp, 'utf8');
  const untested = findUntested(src);
  if (untested.length === 0) continue;
  const newSrc = appendMatchBlock(src, untested);
  if (newSrc !== src) {
    fs.writeFileSync(fp, newSrc, 'utf8');
    console.log(`${file}: +${untested.length}`);
    totalAdded += untested.length;
  }
}
console.log(`Total added: ${totalAdded}`);
