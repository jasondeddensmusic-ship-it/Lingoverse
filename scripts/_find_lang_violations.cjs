#!/usr/bin/env node
'use strict';
const fs = require('fs');
const path = require('path');
const LANG = process.argv[2] || 'french';
const BASE = path.join(__dirname, '..', 'src', 'data', `${LANG}-v2`);

const SKIP_WORDS = new Set(['the','is','a','an','it','to','of','in','on','at','for','and','or','but','not','this','that','with','from','has','was','are','its','you','your','can','all','been','have','will','one','two','each','very','when','they','more','than','what','how','only','also','does','most','some','such','just','any','same','into','over','much','many','who','had','did','own','may','way','both','use','her','him','she','out','as','by','do','if','me','my','no','so','up','us','we','les','des','une','est','que','qui','dans','pour','sur','par','avec','sont','pas','plus','tout','mais','elle','ses','ces','aux','ont','fait','nos','vos','leur','los','las','del','una','por','con','sin','pero','mas','sus','esto','esta','ese','esa','son','fue','muy','hay','ser','eso','ella']);

function getWords(str) {
  return str.toLowerCase()
    .replace(/[^a-zà-öø-ÿäöüßéèêëçñ\s]/gi, ' ')
    .split(/\s+/)
    .filter(w => w.length >= 3 && !SKIP_WORDS.has(w));
}

function extractField(objText, fieldName) {
  const re = new RegExp(fieldName + '\\s*:\\s*([\'"])((?:\\\\.|(?!\\1).)*)\\1', 's');
  const m = objText.match(re);
  if (!m) return null;
  return m[2].replace(/\\n/g, '\n').replace(/\\'/g, "'").replace(/\\"/g, '"');
}

function extractA(objText) {
  const re = /\ba\s*:\s*\[([^\]]*)\]/s;
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

const tempFiles = fs.readdirSync(BASE).filter(f => (f.startsWith('_temp') || f.startsWith('_batch')) && f.endsWith('.js')).sort();

let totalHint = 0, totalVisual = 0;

for (const tf of tempFiles) {
  const fileText = fs.readFileSync(path.join(BASE, tf), 'utf8');
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
      else if (fileText[j] === '}') { depth--; if (depth === 0) { end = j+1; break; } }
    }
    const block = fileText.slice(start, end);
    const type = positions[i].type;
    const hint = extractField(block, 'hint');
    const ans = extractField(block, 'ans');
    const q = extractField(block, 'q');
    const s = extractField(block, 's');
    const aArr = extractA(block);

    if (type === 'mc') {
      if (hint && ans) {
        const words = getWords(ans);
        const hintLower = hint.toLowerCase();
        const leaks = words.filter(w => hintLower.includes(w));
        if (leaks.length > 0) {
          totalHint++;
          console.log(`HINT_LEAK_MC in ${tf} (ans="${ans.slice(0,40)}")`);
          console.log(`  hint: ${hint.slice(0,80)}`);
          console.log(`  leaks: [${leaks.join(', ')}]`);
        }
      }
      if (q && ans && q.toLowerCase().includes(ans.toLowerCase())) {
        totalVisual++;
        console.log(`VISUAL_LEAK_MC in ${tf}`);
        console.log(`  q: ${q.slice(0,80)}`);
        console.log(`  ans: ${ans.slice(0,40)}`);
      }
    }
    if (type === 'fb') {
      const fbAns = aArr[0] || null;
      if (hint && fbAns) {
        const words = getWords(fbAns);
        const hintLower = hint.toLowerCase();
        const leaks = words.filter(w => hintLower.includes(w));
        if (leaks.length > 0) {
          totalHint++;
          console.log(`HINT_LEAK_FB in ${tf} (a="${fbAns.slice(0,40)}")`);
          console.log(`  hint: ${hint.slice(0,80)}`);
          console.log(`  leaks: [${leaks.join(', ')}]`);
        }
      }
      if (s && fbAns && fbAns.length >= 3) {
        const sClean = s.replace(/\{[0-9]+\}/g, '').toLowerCase();
        if (sClean.includes(fbAns.toLowerCase())) {
          totalVisual++;
          console.log(`VISUAL_LEAK_FB in ${tf}`);
          console.log(`  s: ${s.slice(0,80)}`);
          console.log(`  ans: ${fbAns.slice(0,40)}`);
        }
      }
    }
  }
}
console.log(`\nTotal HINT leaks: ${totalHint}, VISUAL leaks: ${totalVisual}`);
