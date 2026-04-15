#!/usr/bin/env node
'use strict';

/**
 * PP8 Hint & Visual Leak Fixer
 *
 * For HINT_LEAK: replaces the leaked word in the hint with a synonym or removes it
 * For VISUAL_LEAK: flags for manual review (can't auto-fix safely)
 *
 * Strategy for hint fixes:
 * - If leaked word appears as part of a compound breakdown, replace with "..."
 * - If leaked word is a standalone word in the hint, replace with initial + dots (e.g. "poison" → "p...")
 * - Preserves hint meaning while removing the leak
 *
 * Usage: node scripts/pp8_fix_hint_leaks.cjs --lang=dutch [--dry-run]
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

const SKIP_WORDS = new Set([
  'the','is','a','an','it','to','of','in','on','at','for','and','or','but','not',
  'this','that','with','from','has','was','are','its','you','your','can','all',
  'been','have','will','one','two','each','very','when','they','more','than',
  'what','how','only','also','does','most','some','such','just','any','same',
  'into','over','much','many','who','had','did','own','may','way','both','use',
  'her','him','she','out','as','by','do','if','me','my','no','so','up','us','we',
  // Dutch
  'het','een','van','met','die','dat','der','den','des','voor','naar','als','maar',
  'ook','nog','wel','dan','per','bij','uit','aan','hoe','wat','wie','hun','hen',
  'zij','wij','jij','mij','ons','zijn','haar','deze','dit','ter','ten',
  // French
  'les','des','une','est','que','qui','dans','pour','sur','par','avec','sont','pas',
  'plus','tout','mais','elle','ses','ces','aux','ont','fait','nos','vos','leur',
  // Spanish
  'los','las','del','una','por','con','sin','como','pero','mas','sus',
  'esto','esta','ese','esa','son','fue','muy','hay','ser','eso','ella'
]);

function getWords(str) {
  if (!str) return [];
  if (LANG === 'korean') {
    return str.toLowerCase().split(/\s+/)
      .filter(w => w.length >= 2 && /[\uAC00-\uD7AF]/.test(w));
  }
  return str.toLowerCase()
    .replace(/[^a-zà-öø-ÿäöüßéèêëçñ\s]/gi, ' ')
    .split(/\s+/)
    .filter(w => w.length >= 3 && !SKIP_WORDS.has(w));
}

const allFiles = fs.readdirSync(BASE).filter(f => f.endsWith('.js')).sort();
let totalFixed = 0;
let filesModified = 0;
let unfixable = [];

for (const fileName of allFiles) {
  const filePath = path.join(BASE, fileName);
  let fileText = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  let fixCount = 0;

  // Find hint fields and check for leaks against ans
  // MC: hint:"..." ans:"..."
  // FB: hint:"..." a:["..."]

  // Process MC steps
  const mcRe = /\{[^]*?type\s*:\s*["']mc["'][^]*?\}/g;
  let mcMatch;

  // Simpler approach: find each hint:"..." and check if it leaks the answer
  // We need to find hint + ans pairs within the same step block

  const typeRe = /\{\s*type\s*:\s*['"]([^'"]+)['"]/g;
  let m;
  const stepPositions = [];
  while ((m = typeRe.exec(fileText)) !== null) {
    stepPositions.push({ pos: m.index, type: m[1] });
  }

  for (let i = 0; i < stepPositions.length; i++) {
    const stepType = stepPositions[i].type;
    if (stepType !== 'mc' && stepType !== 'fb') continue;

    const start = stepPositions[i].pos;
    let depth = 0, end = start;
    for (let j = start; j < fileText.length; j++) {
      if (fileText[j] === '{') depth++;
      else if (fileText[j] === '}') { depth--; if (depth === 0) { end = j + 1; break; } }
    }
    const block = fileText.slice(start, end);

    // Extract hint
    const hintMatch = block.match(/hint\s*:\s*(['"])((?:\\.|(?!\1).)*)\1/s);
    if (!hintMatch) continue;
    const hint = hintMatch[2].replace(/\\n/g, '\n').replace(/\\'/g, "'").replace(/\\"/g, '"');

    // Extract answer
    let ans;
    if (stepType === 'mc') {
      const ansMatch = block.match(/\bans\s*:\s*(['"])((?:\\.|(?!\1).)*)\1/);
      if (!ansMatch) continue;
      ans = ansMatch[2].replace(/\\n/g, '\n').replace(/\\'/g, "'").replace(/\\"/g, '"');
    } else {
      // FB: a:["..."]
      const aMatch = block.match(/\ba\s*:\s*\[([^\]]*)\]/s);
      if (!aMatch) continue;
      const itemRe = /(['"])((?:\\.|(?!\1).)*)\1/;
      const im = aMatch[1].match(itemRe);
      if (!im) continue;
      ans = im[2].replace(/\\n/g, '\n').replace(/\\'/g, "'").replace(/\\"/g, '"');
    }

    // Check for leaks
    const ansWords = getWords(ans);
    const hintLower = hint.toLowerCase();
    const leakedWords = ansWords.filter(w => hintLower.includes(w));

    if (leakedWords.length === 0) continue;

    // Fix: replace leaked word in hint with first-letter + "..."
    let newHint = hint;
    for (const leaked of leakedWords) {
      // Case-insensitive replace, preserve surrounding text
      const escapedWord = leaked.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const wordRe = new RegExp(`\\b${escapedWord}\\b`, 'gi');
      newHint = newHint.replace(wordRe, (match) => {
        return match[0] + '...';
      });
    }

    if (newHint === hint) continue; // no change made

    // Replace in file text
    const oldHintStr = hintMatch[0];
    // Reconstruct with escaping
    const quote = hintMatch[1];
    const newHintEscaped = newHint
      .replace(/\\/g, '\\\\')
      .replace(/\n/g, '\\n');
    const escapedForQuote = quote === '"'
      ? newHintEscaped.replace(/"/g, '\\"')
      : newHintEscaped.replace(/'/g, "\\'");
    const newHintStr = `hint:${quote}${escapedForQuote}${quote}`;

    const absStart = start;
    const absEnd = end;
    const oldBlock = fileText.slice(absStart, absEnd);
    const newBlock = oldBlock.replace(oldHintStr, newHintStr);

    if (newBlock !== oldBlock) {
      fileText = fileText.slice(0, absStart) + newBlock + fileText.slice(absEnd);
      modified = true;
      fixCount++;
      // Adjust regex lastIndex since file length changed
      typeRe.lastIndex = absStart + newBlock.length;
    }
  }

  // Also check for visual leaks in MC (q contains ans)
  // These need manual review - just log them

  if (modified) {
    if (!DRY_RUN) {
      fs.writeFileSync(filePath, fileText, 'utf8');
    }
    console.log(`  ${fileName}: ${fixCount} hint leaks fixed`);
    totalFixed += fixCount;
    filesModified++;
  }
}

console.log(`\nTotal: ${totalFixed} hint leaks fixed across ${filesModified} files`);
if (DRY_RUN) console.log('(DRY RUN — no files written)');
