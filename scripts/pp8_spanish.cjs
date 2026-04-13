#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');

const BASE = path.join(__dirname, '..', 'src', 'data', 'spanish-v2');

const SKIP_WORDS = new Set([
  'the','is','a','an','it','to','of','in','on','at','for','and','or','but','not',
  'this','that','with','from','has','was','are','its','you','your','can','all',
  'been','have','will','one','two','each','very','when','they','more','than',
  'what','how','only','also','does','most','some','such','just','any','same',
  'into','over','much','many','who','had','did','own','may','way','both','use',
  'her','him','she','out','as','by','do','if','me','my','no','so','up','us','we',
  'el','la','los','las','un','una','de','en','y','o','que','se','su','por','con',
  'para','es','son','del','al','le','lo','si','te','nos','les'
]);

function extractField(objText, fieldName) {
  // Try single quotes
  const re2 = new RegExp(fieldName + "\\s*:\\s*'((?:[^'\\\\]|\\\\.)*)'");
  // Try double quotes
  const re3 = new RegExp(fieldName + '\\s*:\\s*"((?:[^"\\\\]|\\\\.)*)"');
  let m = objText.match(re2) || objText.match(re3);
  if (!m) return null;
  return m[1]
    .replace(/\\n/g, '\n')
    .replace(/\\'/g, "'")
    .replace(/\\"/g, '"')
    .replace(/\\\\/g, '\\');
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
    opts.push(im[2]
      .replace(/\\n/g, '\n')
      .replace(/\\'/g, "'")
      .replace(/\\"/g, '"'));
  }
  return opts;
}

function extractAns(objText) {
  // Try string ans field
  const re2 = /\bans\s*:\s*'((?:[^'\\]|\\.)*)'/;
  const re3 = /\bans\s*:\s*"((?:[^"\\]|\\.)*)"/;
  let m = objText.match(re2) || objText.match(re3);
  if (m) return m[1].replace(/\\'/g, "'").replace(/\\"/g, '"');
  // Try numeric index
  const am = objText.match(/\bans\s*:\s*(\d+)/);
  if (am) {
    const opts = extractOpts(objText);
    const idx = parseInt(am[1]);
    return opts[idx] || null;
  }
  return null;
}

function extractFbAns(objText) {
  // fb ans is usually a: 'word'
  const re2 = /\ba\s*:\s*'((?:[^'\\]|\\.)*)'/;
  const re3 = /\ba\s*:\s*"((?:[^"\\]|\\.)*)"/;
  let m = objText.match(re2) || objText.match(re3);
  if (m) return m[1].replace(/\\'/g, "'").replace(/\\"/g, '"');
  return null;
}

function hasLeak(hint, ans) {
  if (!hint || !ans) return false;
  const hintLower = hint.toLowerCase();
  const ansLower = ans.toLowerCase();
  const ansWords = ansLower.split(/[\s,;.!?()\[\]{}'"]+/).filter(w => w.length > 3 && !SKIP_WORDS.has(w));
  for (const aw of ansWords) {
    if (hintLower.includes(aw)) return true;
  }
  return false;
}

function parseBlocks(src, typeStr) {
  const lines = src.split('\n');
  let blocks = [];
  let inBlock = false;
  let buffer = '';
  let depth = 0;
  let lineStart = 0;

  for (let li = 0; li < lines.length; li++) {
    const line = lines[li];

    if (!inBlock) {
      const typeRe = new RegExp("type\\s*:\\s*['\"]" + typeStr + "['\"]");
      if (typeRe.test(line)) {
        inBlock = true;
        buffer = line;
        depth = 0;
        for (const ch of line) {
          if (ch === '{') depth++;
          else if (ch === '}') depth--;
        }
        lineStart = li;
        if (depth <= 0) {
          blocks.push({ text: buffer, line: lineStart + 1 });
          inBlock = false;
          buffer = '';
          depth = 0;
        }
        continue;
      }
    } else {
      buffer += '\n' + line;
      for (const ch of line) {
        if (ch === '{') depth++;
        else if (ch === '}') depth--;
      }
      if (depth <= 0) {
        blocks.push({ text: buffer, line: lineStart + 1 });
        inBlock = false;
        buffer = '';
        depth = 0;
      }
    }
  }
  return blocks;
}

let totalViolations = 0;
const allViolations = [];

const files = fs.readdirSync(BASE).filter(f => /^unit-\d+\.js$/.test(f)).sort();

for (const fname of files) {
  const unitNum = fname.replace('unit-', '').replace('.js', '');
  const filePath = path.join(BASE, fname);
  const src = fs.readFileSync(filePath, 'utf8');

  const violations = [];

  // Check mc blocks
  const mcBlocks = parseBlocks(src, 'mc');
  for (const block of mcBlocks) {
    const hint = extractField(block.text, 'hint');
    const ans = extractAns(block.text);
    if (hasLeak(hint, ans)) {
      const q = extractField(block.text, 'q') || '';
      violations.push({
        line: block.line,
        type: 'HINT_LEAK (mc)',
        q: q.slice(0, 70),
        ans: (ans || '').slice(0, 50),
        hint: (hint || '').slice(0, 100)
      });
    }
  }

  // Check fb blocks
  const fbBlocks = parseBlocks(src, 'fb');
  for (const block of fbBlocks) {
    const hint = extractField(block.text, 'hint');
    const ans = extractFbAns(block.text);
    if (hasLeak(hint, ans)) {
      const s = extractField(block.text, 's') || '';
      violations.push({
        line: block.line,
        type: 'HINT_LEAK (fb)',
        q: s.slice(0, 70),
        ans: (ans || '').slice(0, 50),
        hint: (hint || '').slice(0, 100)
      });
    }
  }

  if (violations.length > 0) {
    console.log(`Unit ${unitNum}: ${violations.length} violation(s)`);
    for (const v of violations) {
      console.log(`  Line ~${v.line} | ${v.type}`);
      console.log(`    Q/S: ${v.q}`);
      console.log(`    ANS: ${v.ans}`);
      console.log(`    HINT: ${v.hint}`);
    }
    totalViolations += violations.length;
    allViolations.push(...violations.map(v => ({ ...v, unit: unitNum })));
  } else {
    console.log(`Unit ${unitNum}: PASS`);
  }
}

console.log('\n========================================');
console.log('TOTAL VIOLATIONS:', totalViolations);
if (totalViolations === 0) console.log('ALL PASS -- ZERO VIOLATIONS');
