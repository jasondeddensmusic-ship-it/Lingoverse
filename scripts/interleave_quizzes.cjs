#!/usr/bin/env node
'use strict';

/**
 * Interleave match quiz steps into lessons with 6+ consecutive teach cards.
 * Inserts a match step (4 pairs from recent teach cards) after every 5th
 * consecutive teach card. Respects PP43 (max 32 steps per lesson).
 *
 * Match steps have zero PP8 risk (no hints) and are pedagogically sound.
 */

const fs = require('fs');
const path = require('path');

const BASE = path.join(__dirname, '..', 'src', 'data', 'german-v2');
const MAX_STEPS = 32;
const RUN_THRESHOLD = 6;
const GROUP_SIZE = 5;        // Insert match after every 5th consecutive teach
const DRY_RUN = process.argv.includes('--dry-run');

let totalInserted = 0;
let filesModified = 0;
let lessonsModified = 0;
let skippedNoRoom = 0;

for (let u = 1; u <= 36; u++) {
  const num = String(u).padStart(2, '0');
  const filePath = path.join(BASE, `unit-${num}.js`);
  let content = fs.readFileSync(filePath, 'utf8');

  // We'll collect all insertions first, then apply from end to start
  const insertions = []; // { charPos, matchText }

  // Find all step objects with their character positions
  const stepRegex = /\{type:"(teach|story|mc|fb|match|drag_fill|tr|intro|tip|verb_table)"/g;
  let m;
  const allSteps = [];
  while ((m = stepRegex.exec(content)) !== null) {
    allSteps.push({ type: m[1], charPos: m.index });
  }

  // Find lesson boundaries
  const lessonRegex = /id:"([^"]+)"[^}]*?steps:\s*\[/g;
  const lessons = [];
  while ((m = lessonRegex.exec(content)) !== null) {
    lessons.push({ id: m[1], charStart: m.index + m[0].length });
  }

  for (let li = 0; li < lessons.length; li++) {
    const lesson = lessons[li];
    const nextCharStart = li + 1 < lessons.length ? lessons[li + 1].charStart : content.length;

    // Get steps in this lesson
    const lessonSteps = allSteps.filter(s => s.charPos >= lesson.charStart && s.charPos < nextCharStart);
    const stepCount = lessonSteps.length;

    // Find runs of consecutive teach cards
    const runs = [];
    let runStart = -1;
    for (let si = 0; si < lessonSteps.length; si++) {
      if (lessonSteps[si].type === 'teach') {
        if (runStart === -1) runStart = si;
      } else {
        if (runStart !== -1) {
          const len = si - runStart;
          if (len >= RUN_THRESHOLD) {
            runs.push({ start: runStart, len });
          }
        }
        runStart = -1;
      }
    }
    if (runStart !== -1) {
      const len = lessonSteps.length - runStart;
      if (len >= RUN_THRESHOLD) {
        runs.push({ start: runStart, len });
      }
    }

    if (runs.length === 0) continue;

    // Calculate insertions needed
    let totalNeeded = 0;
    for (const run of runs) totalNeeded += Math.floor(run.len / GROUP_SIZE);

    // Check headroom
    const headroom = MAX_STEPS - stepCount;
    if (headroom <= 0) { skippedNoRoom++; continue; }

    let budget = Math.min(totalNeeded, headroom);
    if (budget <= 0) { skippedNoRoom++; continue; }

    let lessonDidInsert = false;

    for (const run of runs) {
      if (budget <= 0) break;

      // Extract trg/src from teach cards in this run
      const teachCards = [];
      for (let si = run.start; si < run.start + run.len; si++) {
        const stepCharPos = lessonSteps[si].charPos;
        const nextCharPos = si + 1 < lessonSteps.length ? lessonSteps[si + 1].charPos : nextCharStart;
        const stepText = content.slice(stepCharPos, nextCharPos);

        const trgM = stepText.match(/trg:\s*"((?:\\"|[^"])*)"/);
        const srcM = stepText.match(/src:\s*"((?:\\"|[^"])*)"/);
        if (trgM && srcM) {
          teachCards.push({ trg: trgM[1], src: srcM[1], lessonStepIdx: si });
        }
      }

      if (teachCards.length < RUN_THRESHOLD) continue;

      // Determine insertion points: after every GROUP_SIZE teach cards
      // For a run of 15: insert after card 4, 9, 14 (0-indexed)
      for (let g = GROUP_SIZE - 1; g < teachCards.length && budget > 0; g += GROUP_SIZE) {
        // Collect pairs: last 4 teach cards up to position g
        const pairStart = Math.max(0, g - 3);
        const pairs = teachCards.slice(pairStart, g + 1);
        if (pairs.length < 2) continue;

        // Generate match step
        const pairsStr = pairs.map(p => `{trg:"${p.trg}",src:"${p.src}"}`).join(',');
        const matchStep = `\n{type:"match",pairs:[${pairsStr}]},`;

        // Find insertion point: after the closing } of the teach card at position g
        const teachStepIdx = teachCards[g].lessonStepIdx;
        const teachCharPos = lessonSteps[teachStepIdx].charPos;
        const nextStepCharPos = teachStepIdx + 1 < lessonSteps.length
          ? lessonSteps[teachStepIdx + 1].charPos
          : nextCharStart;
        const stepSlice = content.slice(teachCharPos, nextStepCharPos);

        // Find the closing } of this step object (brace matching)
        let depth = 0;
        let closingBrace = -1;
        let inString = false;
        let strChar = '';
        for (let ci = 0; ci < stepSlice.length; ci++) {
          const ch = stepSlice[ci];
          if (inString) {
            if (ch === '\\') { ci++; continue; }
            if (ch === strChar) inString = false;
            continue;
          }
          if (ch === '"' || ch === "'") { inString = true; strChar = ch; continue; }
          if (ch === '{') depth++;
          else if (ch === '}') {
            depth--;
            if (depth === 0) { closingBrace = ci; break; }
          }
        }

        if (closingBrace === -1) continue;

        // Insert after the closing brace, handling comma presence
        let insertAt = teachCharPos + closingBrace + 1;
        const hasComma = content[insertAt] === ',';
        if (hasComma) insertAt++; // skip existing comma

        // If no comma after }, prefix with one to maintain valid array syntax
        const textToInsert = hasComma ? matchStep : ',' + matchStep;

        insertions.push({ charPos: insertAt, text: textToInsert });
        budget--;
        lessonDidInsert = true;
        totalInserted++;
      }
    }

    if (lessonDidInsert) lessonsModified++;
  }

  if (insertions.length > 0) {
    // Apply insertions from end to start to preserve positions
    insertions.sort((a, b) => b.charPos - a.charPos);
    for (const ins of insertions) {
      content = content.slice(0, ins.charPos) + ins.text + content.slice(ins.charPos);
    }
    filesModified++;
    if (!DRY_RUN) {
      fs.writeFileSync(filePath, content, 'utf8');
    }
  }
}

console.log('=== Quiz Interleaving Results ===');
console.log(`Match steps inserted: ${totalInserted}`);
console.log(`Lessons modified: ${lessonsModified}`);
console.log(`Files modified: ${filesModified}`);
console.log(`Skipped (no headroom): ${skippedNoRoom}`);
console.log(`Mode: ${DRY_RUN ? 'DRY RUN' : 'LIVE'}`);
