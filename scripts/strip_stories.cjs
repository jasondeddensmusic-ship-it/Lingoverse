#!/usr/bin/env node
'use strict';

/**
 * Strip all story steps from German v2 unit files.
 * Saves extracted stories to a backup file for future reimplementation.
 *
 * Usage:
 *   node scripts/strip_stories.cjs              # EN units
 *   node scripts/strip_stories.cjs --ar         # AR units
 *   node scripts/strip_stories.cjs --dry-run    # preview only
 */

const fs = require('fs');
const path = require('path');

const isAR = process.argv.includes('--ar');
const DRY_RUN = process.argv.includes('--dry-run');

const BASE = path.join(__dirname, '..', 'src', 'data', isAR ? 'german-v2-ar' : 'german-v2');
const BACKUP_FILE = path.join(__dirname, '..', 'src', 'data', isAR ? 'stories-backup-ar.js' : 'stories-backup.js');

let totalRemoved = 0;
let filesModified = 0;
const allStories = {}; // unitNum -> [{lessonId, story}]

for (let u = 1; u <= 36; u++) {
  const num = String(u).padStart(2, '0');
  const filePath = path.join(BASE, `unit-${num}.js`);

  if (!fs.existsSync(filePath)) {
    continue;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;

  // Find and remove story step objects
  // Pattern: {type:"story",...},  (possibly spanning multiple lines)
  // We need to match the full object including nested braces

  const stories = [];
  let modified = true;

  while (modified) {
    modified = false;
    const storyStart = content.indexOf('{type:"story"');
    if (storyStart === -1) break;

    // Find matching closing brace
    let depth = 0;
    let inString = false;
    let strChar = '';
    let endPos = -1;

    for (let i = storyStart; i < content.length; i++) {
      const ch = content[i];
      if (inString) {
        if (ch === '\\') { i++; continue; }
        if (ch === strChar) inString = false;
        continue;
      }
      if (ch === '"' || ch === "'") { inString = true; strChar = ch; continue; }
      if (ch === '{') depth++;
      else if (ch === '}') {
        depth--;
        if (depth === 0) { endPos = i; break; }
      }
    }

    if (endPos === -1) break;

    // Extract the story object text
    const storyText = content.slice(storyStart, endPos + 1);
    stories.push(storyText);

    // Remove the story + trailing comma and whitespace
    let removeEnd = endPos + 1;
    // Skip trailing comma
    if (content[removeEnd] === ',') removeEnd++;
    // Skip trailing newline
    if (content[removeEnd] === '\n') removeEnd++;

    // Check if there's leading whitespace/newline to clean
    let removeStart = storyStart;
    // Remove leading newline if the previous character is a newline or comma
    if (removeStart > 0 && content[removeStart - 1] === '\n') {
      // Don't remove the newline before — just the story line
    }

    content = content.slice(0, removeStart) + content.slice(removeEnd);
    modified = true;
    totalRemoved++;
  }

  if (stories.length > 0) {
    allStories[`unit_${num}`] = stories;
    filesModified++;

    if (!DRY_RUN) {
      fs.writeFileSync(filePath, content, 'utf8');
    }

    console.log(`U${num}: removed ${stories.length} story steps`);
  }
}

// Write backup file
if (!DRY_RUN && totalRemoved > 0) {
  let backup = `// Story steps backup — extracted ${new Date().toISOString().split('T')[0]}\n`;
  backup += `// These story steps were stripped from German v2 ${isAR ? 'AR ' : ''}units for future reimplementation.\n`;
  backup += `// To restore: re-insert each story at its original position in the lesson's steps array.\n\n`;
  backup += `export const STORIES_BACKUP = {\n`;

  for (const [unitKey, stories] of Object.entries(allStories)) {
    backup += `  ${unitKey}: [\n`;
    for (const story of stories) {
      backup += `    ${story},\n`;
    }
    backup += `  ],\n`;
  }

  backup += `};\n`;

  fs.writeFileSync(BACKUP_FILE, backup, 'utf8');
  console.log(`\nBackup saved to: ${BACKUP_FILE}`);
}

console.log(`\n=== Story Stripping Results ===`);
console.log(`Stories removed: ${totalRemoved}`);
console.log(`Files modified: ${filesModified}`);
console.log(`Mode: ${DRY_RUN ? 'DRY RUN' : 'LIVE'}`);
console.log(`Target: ${isAR ? 'AR' : 'EN'} units`);
