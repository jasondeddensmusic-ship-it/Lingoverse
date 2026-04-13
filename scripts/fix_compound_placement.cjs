#!/usr/bin/env node
/**
 * Move COMPOUND breakdowns from funFact to note field.
 * The LessonEngine compound bubble renderer parses st.note for "COMPOUND:" patterns,
 * NOT st.funFact. This script extracts the COMPOUND line from funFact and prepends
 * it to the note field.
 */
const fs = require('fs');
const path = require('path');

const dirs = [
  path.resolve(__dirname, '..', 'src', 'data', 'german-v2'),
  path.resolve(__dirname, '..', 'src', 'data', 'dutch-v2'),
];

let totalMoved = 0;

for (const dir of dirs) {
  const files = fs.readdirSync(dir).filter(f => /^unit-\d+\.js$/.test(f)).sort();

  for (const file of files) {
    const filePath = path.join(dir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    let modified = content;
    let count = 0;

    // Match teach cards that have COMPOUND in funFact
    // We need to:
    // 1. Extract the "COMPOUND: X (y) + Z (w)." part from funFact
    // 2. Prepend it to note (with \n separator)
    // 3. Remove it from funFact

    modified = modified.replace(/(note:")((?:[^"\\]|\\.)*?)(",(?:[^}]*?)funFact:")(COMPOUND:[^.]*\.)\s*((?:[^"\\]|\\.)*?")/g,
      (match, noteStart, noteContent, middle, compoundPart, restFunFact) => {
        count++;
        totalMoved++;
        // Prepend compound to note
        const newNote = compoundPart + '\\n' + noteContent;
        // Remove compound from funFact
        return noteStart + newNote + middle + restFunFact;
      });

    if (count > 0) {
      fs.writeFileSync(filePath, modified);
      console.log(`${path.basename(dir)}/${file}: ${count} COMPOUND lines moved to note`);
    }
  }
}

console.log(`\nTotal: ${totalMoved} COMPOUND lines moved from funFact to note`);
