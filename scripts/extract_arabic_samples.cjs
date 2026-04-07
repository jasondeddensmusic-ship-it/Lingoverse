#!/usr/bin/env node
/**
 * Extract Arabic metalanguage samples for native speaker review.
 * Outputs a readable text file grouped by field type.
 *
 * Usage: node scripts/extract_arabic_samples.cjs [unit numbers...]
 * Default: units 1 and 32 (recommended review targets)
 * Example: node scripts/extract_arabic_samples.cjs 1 5 32
 */

const fs = require('fs');
const path = require('path');

const units = process.argv.slice(2).map(Number).filter(n => n > 0 && n <= 36);
const targetUnits = units.length ? units : [1, 32];

const arDir = path.join(__dirname, '..', 'src', 'data', 'german-v2-ar');
const outFile = path.join(__dirname, '..', 'docs', 'arabic-review-samples.txt');

const lines = [];
const push = (s) => lines.push(s);

push('='.repeat(80));
push('ARABIC METALANGUAGE REVIEW — Native Speaker Feedback Sheet');
push('='.repeat(80));
push('');
push('Instructions for reviewer:');
push('- For each entry, mark: OK / UNNATURAL / WRONG / UNCLEAR');
push('- If UNNATURAL or WRONG, write your suggested Arabic replacement');
push('- Focus on: register (too formal?), clarity, cultural bridges');
push('- The German (trg) and example fields are CORRECT — only review Arabic text');
push('');

let totalTeach = 0;
let totalTips = 0;
let totalQuiz = 0;

for (const unitNum of targetUnits) {
  const pad = String(unitNum).padStart(2, '0');
  const filePath = path.join(arDir, `unit-${pad}.js`);

  if (!fs.existsSync(filePath)) {
    push(`[SKIP] Unit ${unitNum} — file not found`);
    continue;
  }

  const raw = fs.readFileSync(filePath, 'utf8');

  push('');
  push('#'.repeat(80));
  push(`# UNIT ${unitNum}`);
  push('#'.repeat(80));

  // Extract teach cards
  const teachRegex = /\{type:"teach",trg:"([^"]*)",src:"([^"]*)".*?note:"([^"]*)".*?example:"([^"]*)".*?exampleSrc:"([^"]*)".*?funFact:"([^"]*)"/g;
  let match;
  let teachCount = 0;

  push('');
  push('--- TEACH CARDS (note / funFact / exampleSrc) ---');
  push('');

  // Simpler approach: find teach cards by splitting on type:"teach"
  const teachBlocks = raw.split('{type:"teach"').slice(1);

  for (const block of teachBlocks) {
    teachCount++;
    totalTeach++;

    // Extract fields with multiline-safe regex
    const trg = block.match(/trg:"([^"]*)"/)?.[1] || '?';
    const src = block.match(/src:"([^"]*)"/)?.[1] || '?';
    const note = block.match(/note:"((?:[^"\\]|\\.)*)"/)?.[1] || '';
    const funFact = block.match(/funFact:"((?:[^"\\]|\\.)*)"/)?.[1] || '';
    const exampleSrc = block.match(/exampleSrc:"((?:[^"\\]|\\.)*)"/)?.[1] || '';

    push(`[T${teachCount}] ${trg} = ${src}`);
    if (note) {
      push(`  note: ${note.replace(/\\n/g, '\n        ')}`);
      push(`  [ ] OK  [ ] UNNATURAL  [ ] WRONG  Suggestion: ___`);
    }
    if (funFact) {
      push(`  funFact: ${funFact.replace(/\\n/g, '\n           ')}`);
      push(`  [ ] OK  [ ] UNNATURAL  [ ] WRONG  Suggestion: ___`);
    }
    if (exampleSrc) {
      push(`  exampleSrc: ${exampleSrc.replace(/\\n/g, '\n              ')}`);
      push(`  [ ] OK  [ ] UNNATURAL  [ ] WRONG  Suggestion: ___`);
    }
    push('');
  }

  // Extract tips
  const tipBlocks = raw.split('{type:"tip"').slice(1);
  if (tipBlocks.length) {
    push('--- TIP CARDS (text / deepDive) ---');
    push('');
    let tipCount = 0;
    for (const block of tipBlocks) {
      tipCount++;
      totalTips++;
      const title = block.match(/title:"([^"]*)"/)?.[1] || '?';
      const text = block.match(/text:"((?:[^"\\]|\\.)*)"/)?.[1] || '';

      push(`[TIP${tipCount}] ${title}`);
      if (text) {
        push(`  text: ${text.replace(/\\n/g, '\n        ').substring(0, 500)}`);
        push(`  [ ] OK  [ ] UNNATURAL  [ ] WRONG  Suggestion: ___`);
      }
      push('');
    }
  }

  // Extract quiz hints (mc/fb)
  const quizHints = [];
  const mcBlocks = raw.split('{type:"mc"').slice(1);
  for (const block of mcBlocks) {
    const q = block.match(/q:"((?:[^"\\]|\\.)*)"/)?.[1] || '';
    const hint = block.match(/hint:"((?:[^"\\]|\\.)*)"/)?.[1] || '';
    if (q || hint) quizHints.push({ type: 'mc', q, hint });
  }
  const fbBlocks = raw.split('{type:"fb"').slice(1);
  for (const block of fbBlocks) {
    const hint = block.match(/hint:"((?:[^"\\]|\\.)*)"/)?.[1] || '';
    const sSrc = block.match(/sSrc:"((?:[^"\\]|\\.)*)"/)?.[1] || '';
    if (hint || sSrc) quizHints.push({ type: 'fb', hint, sSrc });
  }

  if (quizHints.length) {
    push('--- QUIZ HINTS & QUESTIONS ---');
    push('');
    for (let i = 0; i < quizHints.length; i++) {
      totalQuiz++;
      const qh = quizHints[i];
      push(`[Q${i+1}] (${qh.type})`);
      if (qh.q) push(`  q: ${qh.q}`);
      if (qh.hint) push(`  hint: ${qh.hint}`);
      if (qh.sSrc) push(`  sSrc: ${qh.sSrc}`);
      push(`  [ ] OK  [ ] UNNATURAL  [ ] WRONG  Suggestion: ___`);
      push('');
    }
  }

  push(`--- Unit ${unitNum} totals: ${teachCount} teach, ${tipBlocks.length} tips, ${quizHints.length} quizzes ---`);
}

push('');
push('='.repeat(80));
push(`TOTALS: ${totalTeach} teach cards, ${totalTips} tips, ${totalQuiz} quizzes`);
push(`Units sampled: ${targetUnits.join(', ')}`);
push('='.repeat(80));

fs.writeFileSync(outFile, lines.join('\n'), 'utf8');
console.log(`Written to ${outFile}`);
console.log(`${totalTeach} teach cards, ${totalTips} tips, ${totalQuiz} quizzes extracted`);
