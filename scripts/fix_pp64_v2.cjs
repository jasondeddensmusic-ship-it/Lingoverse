// More robust PP64 fix that handles different file formats
// Finds the last lesson's steps:[...] array and inserts a match block before the closing ]
const fs = require('fs');
const path = require('path');

const langDir = process.argv[2];
if (!langDir) { console.error('usage: node fix_pp64_v2.cjs <lang-v2>'); process.exit(1); }

// Same helpers as validator
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
    blocks.push({ type: positions[i].type, text: fileText.slice(start, end), start, end });
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
    lessons.push({ id: positions[i].id, text: fileText.slice(start, end), start, end });
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

function analyzeUnit(content) {
  const lessons = extractLessons(content);
  const teachTrgs = new Set();
  const teachPairs = {};
  const quizzedWords = new Set();
  let lastStepEnd = 0;
  for (const lesson of lessons) {
    const steps = extractStepBlocks(lesson.text);
    for (const step of steps) {
      const absEnd = lesson.start + step.end;
      if (absEnd > lastStepEnd) lastStepEnd = absEnd;
      if (step.type === 'teach') {
        const trg = extractField(step.text, 'trg') || extractField(step.text, 'nl');
        const src = extractField(step.text, 'src') || extractField(step.text, 'en');
        if (trg) { teachTrgs.add(trg); teachPairs[trg] = src || trg; }
      }
      if (step.type === 'mc') {
        extractOpts(step.text).forEach(o => quizzedWords.add(o));
        const ans = extractField(step.text, 'ans');
        if (ans) quizzedWords.add(ans);
      }
      if (step.type === 'fb') extractA(step.text).forEach(w => quizzedWords.add(w));
      if (step.type === 'match') {
        const pairsText = step.text.match(/pairs\s*:\s*\[([\s\S]*?)\]/);
        if (pairsText) {
          const trgRe = /trg\s*:\s*['"]([^'"]*)['"]/g;
          let pm;
          while ((pm = trgRe.exec(pairsText[1])) !== null) quizzedWords.add(pm[1]);
          const nlRe = /nl\s*:\s*['"]([^'"]*)['"]/g;
          while ((pm = nlRe.exec(pairsText[1])) !== null) quizzedWords.add(pm[1]);
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
  return { untested, lastStepEnd };
}

// Insert match block immediately after the last step
function insertAfterLastStep(src, pairs, insertAt) {
  if (pairs.length === 0) return src;
  const chunks = [];
  for (let i = 0; i < pairs.length; i += 6) chunks.push(pairs.slice(i, i + 6));
  let matchBlocks = '';
  for (const chunk of chunks) {
    const pairsJson = chunk.map(p =>
      `  {trg:${JSON.stringify(p.trg)}, src:${JSON.stringify(p.src)}}`
    ).join(',\n');
    matchBlocks += `,\n{type:"match", pairs:[\n${pairsJson}\n]}`;
  }
  return src.slice(0, insertAt) + matchBlocks + src.slice(insertAt);
}

const dir = `src/data/${langDir}`;
const files = fs.readdirSync(dir).filter(f => f.startsWith('unit-') && f.endsWith('.js'));
let totalAdded = 0;

for (const file of files) {
  const fp = path.join(dir, file);
  const src = fs.readFileSync(fp, 'utf8');
  const { untested, lastStepEnd } = analyzeUnit(src);
  if (untested.length === 0) continue;
  if (lastStepEnd === 0) {
    console.log(`${file}: SKIP (no steps found)`);
    continue;
  }
  const newSrc = insertAfterLastStep(src, untested, lastStepEnd);
  fs.writeFileSync(fp, newSrc, 'utf8');
  console.log(`${file}: +${untested.length}`);
  totalAdded += untested.length;
}
console.log(`Total added: ${totalAdded}`);
