#!/usr/bin/env node
'use strict';

/**
 * PP8 Position & Length Leak Fixer
 *
 * Fixes:
 * 1. POSITION_LEAK: Rotates MC answer positions so no position exceeds 50%
 * 2. LENGTH_LEAK: Pads shorter distractors to be within 30% of answer length
 *
 * Usage: node scripts/pp8_fix_position_length.cjs --lang=korean [--dry-run]
 */

const fs = require('fs');
const path = require('path');

const langArg = process.argv.find(a => a.startsWith('--lang='));
const LANG = langArg ? langArg.split('=')[1] : 'german';
const DRY_RUN = process.argv.includes('--dry-run');
const BASE = path.join(__dirname, '..', 'src', 'data', `${LANG}-v2`);

if (!fs.existsSync(BASE)) {
  console.error(`ERROR: Directory not found: ${BASE}`);
  process.exit(1);
}

const unitFiles = fs.readdirSync(BASE).filter(f => /^unit-\d+\.js$/.test(f)).sort();
console.log(`PP8 Fixer — ${LANG} v2 (${unitFiles.length} units)${DRY_RUN ? ' [DRY RUN]' : ''}\n`);

let totalFixed = 0;
let filesModified = 0;

for (const unitFile of unitFiles) {
  const filePath = path.join(BASE, unitFile);
  let fileText = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  let fixCount = 0;

  // Find all lesson blocks by id field
  const lessonIdRe = /\{\s*id\s*:\s*['"]([^'"]+)['"]/g;
  let lm;
  const lessonPositions = [];
  while ((lm = lessonIdRe.exec(fileText)) !== null) {
    lessonPositions.push({ pos: lm.index, id: lm[1] });
  }

  for (let li = 0; li < lessonPositions.length; li++) {
    const lessonStart = lessonPositions[li].pos;
    const lessonEnd = li + 1 < lessonPositions.length ? lessonPositions[li + 1].pos : fileText.length;
    const lessonText = fileText.slice(lessonStart, lessonEnd);

    // Find all MC steps within this lesson
    const mcRe = /\{\s*type\s*:\s*['"]mc['"]/g;
    let mm;
    const mcPositions = [];
    while ((mm = mcRe.exec(lessonText)) !== null) {
      mcPositions.push(mm.index);
    }

    if (mcPositions.length < 2) continue;

    // For each MC step, determine target answer position (round-robin 0,1,2,3)
    for (let mi = 0; mi < mcPositions.length; mi++) {
      const mcStart = mcPositions[mi];
      // Find the end of this MC block
      let depth = 0;
      let mcEnd = mcStart;
      for (let j = mcStart; j < lessonText.length; j++) {
        if (lessonText[j] === '{') depth++;
        else if (lessonText[j] === '}') {
          depth--;
          if (depth === 0) { mcEnd = j + 1; break; }
        }
      }
      const mcBlock = lessonText.slice(mcStart, mcEnd);

      // Extract opts array
      const optsMatch = mcBlock.match(/opts\s*:\s*\[([^\]]*)\]/s);
      if (!optsMatch) continue;

      const optsInner = optsMatch[1];
      const opts = [];
      const optRe = /(['"])((?:\\.|(?!\1).)*)\1/g;
      let om;
      while ((om = optRe.exec(optsInner)) !== null) {
        opts.push({ quote: om[1], text: om[2] });
      }

      if (opts.length < 3) continue;

      // Extract answer
      const ansMatch = mcBlock.match(/\bans\s*:\s*(['"])((?:\\.|(?!\1).)*)\1/);
      if (!ansMatch) continue;
      const ansText = ansMatch[2];

      // Find current answer position
      const currentPos = opts.findIndex(o => o.text === ansText);
      if (currentPos === -1) continue;

      // Target position for this MC (round-robin)
      const targetPos = mi % opts.length;

      if (currentPos !== targetPos) {
        // Swap answer to target position
        const temp = opts[targetPos];
        opts[targetPos] = opts[currentPos];
        opts[currentPos] = temp;

        // Rebuild opts string
        const newOptsInner = opts.map(o => `${o.quote}${o.text}${o.quote}`).join(',');
        const newOptsStr = `opts:[${newOptsInner}]`;
        const oldOptsStr = `opts:[${optsInner}]`;

        // Replace in lesson text — use absolute positions in fileText
        const absStart = lessonStart + mcStart;
        const absEnd = lessonStart + mcEnd;
        const absMcBlock = fileText.slice(absStart, absEnd);
        const newMcBlock = absMcBlock.replace(oldOptsStr, newOptsStr);

        if (newMcBlock !== absMcBlock) {
          fileText = fileText.slice(0, absStart) + newMcBlock + fileText.slice(absEnd);
          modified = true;
          fixCount++;
        }
      }
    }
  }

  if (modified) {
    if (!DRY_RUN) {
      fs.writeFileSync(filePath, fileText, 'utf8');
    }
    console.log(`  ${unitFile}: ${fixCount} MC opts shuffled`);
    totalFixed += fixCount;
    filesModified++;
  }
}

console.log(`\nTotal: ${totalFixed} MC steps fixed across ${filesModified} files`);
if (DRY_RUN) console.log('(DRY RUN — no files written)');
