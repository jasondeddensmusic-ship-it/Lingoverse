#!/usr/bin/env node
'use strict';
const fs = require('fs');
const path = require('path');
const BASE = path.join(__dirname, '..', 'src', 'data', 'japanese-v2');

const SKIP_WORDS = new Set(['the','is','a','an','it','to','of','in','on','at','for','and','or','but','not','this','that','with','from','has','was','are','its','you','your','can','all','been','have','will','one','two','each','very','when','they','more','than','what','how','only','also','does','most','some','such','just','any','same','into','over','much','many','who','had','did','own','may','way','both','use','her','him','she','out','as','by','do','if','me','my','no','so','up','us','we']);

function getWords(str) {
  return str.toLowerCase().replace(/[^a-zà-öø-ÿäöüßéèêëçñ\s]/gi, ' ').split(/\s+/).filter(w => w.length >= 3 && !SKIP_WORDS.has(w));
}

function extractField(objText, fieldName) {
  const re = new RegExp(fieldName + '\\s*:\\s*([\'"])((?:\\\\.|(?!\\1).)*)\\1', 's');
  const m = objText.match(re);
  if (!m) return null;
  return m[2].replace(/\\n/g, '\n').replace(/\\'/g, "'").replace(/\\"/g, '"');
}

const tempFiles = fs.readdirSync(BASE).filter(f => (f.startsWith('_temp') || f.startsWith('_batch')) && f.endsWith('.js')).sort();

for (const tf of tempFiles) {
  const fileText = fs.readFileSync(path.join(BASE, tf), 'utf8');
  const typeRe = /\{\s*type\s*:\s*['"]([^'"]+)['"]/g;
  let m;
  const positions = [];
  while ((m = typeRe.exec(fileText)) !== null) {
    positions.push({ pos: m.index, type: m[1] });
  }
  for (let i = 0; i < positions.length; i++) {
    if (positions[i].type !== 'mc') continue;
    const start = positions[i].pos;
    let depth = 0, end = start;
    for (let j = start; j < fileText.length; j++) {
      if (fileText[j] === '{') depth++;
      else if (fileText[j] === '}') { depth--; if (depth === 0) { end = j+1; break; } }
    }
    const block = fileText.slice(start, end);
    const hint = extractField(block, 'hint');
    const ans = extractField(block, 'ans');
    const q = extractField(block, 'q');
    if (!ans) continue;
    if (hint) {
      const words = getWords(ans);
      const hintLower = hint.toLowerCase();
      const leaks = words.filter(w => hintLower.includes(w));
      if (leaks.length > 0) {
        console.log(`HINT_LEAK in ${tf}`);
        console.log(`  hint: ${hint.slice(0,80)}`);
        console.log(`  leaks: [${leaks.join(', ')}]`);
        console.log(`  ans: ${ans.slice(0,50)}`);
        console.log();
      }
    }
    if (q && q.toLowerCase().includes(ans.toLowerCase())) {
      console.log(`VISUAL_LEAK in ${tf}`);
      console.log(`  q: ${q.slice(0,80)}`);
      console.log(`  ans: ${ans.slice(0,50)}`);
      console.log();
    }
  }
}
