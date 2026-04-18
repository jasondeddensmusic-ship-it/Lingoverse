#!/usr/bin/env node
'use strict';
/**
 * PP64 diagnostic: finds exactly which teach cards in which unit files are untested.
 * Usage: node scripts/pp64_find_untested.cjs <lang-dir> [--include-batch]
 */
const fs = require('fs');
const path = require('path');

const langDir = process.argv[2];
const includeBatch = process.argv.includes('--include-batch');

if (!langDir) {
  console.error('Usage: node scripts/pp64_find_untested.cjs <lang-dir> [--include-batch]');
  process.exit(1);
}

const BASE = path.join(__dirname, '..', 'src', 'data', langDir);
if (!fs.existsSync(BASE)) {
  console.error(`Directory not found: ${BASE}`);
  process.exit(1);
}

const files = fs.readdirSync(BASE).filter(f => {
  if (/^unit-\d+\.js$/.test(f)) return true;
  if (includeBatch && /^_batch\d+_u\d+_L\d+\.js$/.test(f)) return true;
  return false;
}).sort();

console.log(`PP64 diagnostic for ${langDir}: ${files.length} files\n`);

function extractField(objText, fieldName) {
  const re = new RegExp(fieldName + '\\s*:\\s*([\'"])((?:\\\\.|(?!\\1).)*)\\1', 's');
  const m = objText.match(re);
  if (!m) return null;
  return m[2].replace(/\\n/g, '\n').replace(/\\'/g, "'").replace(/\\"/g, '"').replace(/\\\\/g, '\\');
}

function extractOpts(objText) {
  const re = /opts\s*:\s*\[([^\]]*)\]/s;
  const m = objText.match(re);
  if (!m) return [];
  const inner = m[1];
  const opts = [];
  const itemRe = /(['"])((?:\\.|(?!\1).)*)\1/g;
  let im;
  while ((im = itemRe.exec(inner)) !== null) {
    opts.push(im[2].replace(/\\n/g, '\n').replace(/\\'/g, "'").replace(/\\"/g, '"'));
  }
  return opts;
}

function extractA(objText) {
  const arrRe = /\ba\s*:\s*\[([^\]]*)\]/s;
  const m = objText.match(arrRe);
  if (m) {
    const inner = m[1];
    const items = [];
    const itemRe = /(['"])((?:\\.|(?!\1).)*)\1/g;
    let im;
    while ((im = itemRe.exec(inner)) !== null) {
      items.push(im[2].replace(/\\n/g, '\n').replace(/\\'/g, "'").replace(/\\"/g, '"'));
    }
    return items;
  }
  const strRe = /\ba\s*:\s*(['"])((?:\\.|(?!\1).)*)\1/;
  const sm = objText.match(strRe);
  if (sm) {
    return [sm[2].replace(/\\n/g, '\n').replace(/\\'/g, "'").replace(/\\"/g, '"')];
  }
  return [];
}

function extractStepBlocks(fileText) {
  const blocks = [];
  const typeRe = /\{\s*type\s*:\s*['"]([^'"]+)['"]/g;
  let m;
  const positions = [];
  while ((m = typeRe.exec(fileText)) !== null) {
    positions.push({ pos: m.index, type: m[1] });
  }
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
  while ((m = lessonRe.exec(fileText)) !== null) {
    positions.push({ pos: m.index, id: m[1] });
  }
  for (let i = 0; i < positions.length; i++) {
    const start = positions[i].pos;
    const end = i + 1 < positions.length ? positions[i + 1].pos : fileText.length;
    lessons.push({ id: positions[i].id, text: fileText.slice(start, end) });
  }
  return lessons;
}

const results = []; // { file, trg, src }

for (const file of files) {
  const filePath = path.join(BASE, file);
  const content = fs.readFileSync(filePath, 'utf8');
  const lessons = extractLessons(content);

  const teachTrgs = new Set(); // Set of {trg, src} objects keyed by trg
  const teachMap = new Map(); // trg -> src
  const quizzedWords = new Set();

  for (const lesson of lessons) {
    const steps = extractStepBlocks(lesson.text);

    for (const step of steps) {
      if (step.type === 'teach') {
        const trg = extractField(step.text, 'trg') || extractField(step.text, 'nl');
        const src = extractField(step.text, 'src') || extractField(step.text, 'en');
        if (trg) {
          teachTrgs.add(trg);
          if (!teachMap.has(trg)) teachMap.set(trg, src || '');
        }
      }

      if (step.type === 'mc') {
        const opts = extractOpts(step.text);
        const ans = extractField(step.text, 'ans');
        if (opts.length > 0) opts.forEach(o => quizzedWords.add(o));
        if (ans) quizzedWords.add(ans);
      }

      if (step.type === 'fb') {
        const a = extractA(step.text);
        if (a.length > 0) a.forEach(w => quizzedWords.add(w));
      }

      if (step.type === 'match') {
        const pairsText = step.text.match(/pairs\s*:\s*\[([\s\S]*?)\]/);
        if (pairsText) {
          const trgRe = /trg\s*:\s*['"]([^'"]*)['"]/g;
          let pm;
          while ((pm = trgRe.exec(pairsText[1])) !== null) {
            quizzedWords.add(pm[1]);
          }
          const nlRe = /nl\s*:\s*['"]([^'"]*)['"]/g;
          while ((pm = nlRe.exec(pairsText[1])) !== null) {
            quizzedWords.add(pm[1]);
          }
        }
      }
    }
  }

  // PP64 check
  for (const trg of teachTrgs) {
    const bare = trg.toLowerCase().replace(/^(de|het|een|le|la|l'|les|un|une|el|los|las|der|die|das|ein|eine)\s+/i, '').trim();
    let tested = false;
    for (const q of quizzedWords) {
      if (q.toLowerCase().includes(bare) || bare.includes(q.toLowerCase())) {
        tested = true;
        break;
      }
    }
    if (!tested) {
      results.push({ file, trg, src: teachMap.get(trg) || '' });
    }
  }
}

console.log(`Total untested teach cards: ${results.length}\n`);
for (const r of results) {
  console.log(`${r.file}\t${r.trg}\t${r.src}`);
}
