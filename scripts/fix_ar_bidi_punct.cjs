#!/usr/bin/env node
/**
 * Fix bidirectional punctuation in German v2 Arabic-source unit files.
 */
const fs = require('fs');
const path = require('path');

const dir = path.resolve(__dirname, '..', 'src', 'data', 'german-v2-ar');
const files = fs.readdirSync(dir).filter(f => /^unit-\d+\.js$/.test(f)).sort();

let totalFixes = 0;
const allChanges = [];

function fixBidiPunctInString(str, filename) {
  let fixes = 0;
  let result = str;

  result = result.replace(/\?(\.{0,3})([A-Za-z\u00C0-\u024F](?:[^\u0600-\u06FF"\\!?]*[A-Za-z\u00C0-\u024F0-9).\u00DF])?)/g,
    (m, dots, latin) => {
      const fixed = dots + latin + '?';
      if (fixed !== m) {
        fixes++;
        allChanges.push({ file: filename, from: m, to: fixed });
      }
      return fixed;
    });

  result = result.replace(/!([A-Za-z\u00C0-\u024F](?:[^\u0600-\u06FF"\\!?]*[A-Za-z\u00C0-\u024F0-9).\u00DF])?)/g,
    (m, latin) => {
      const fixed = latin + '!';
      if (fixed !== m) {
        fixes++;
        allChanges.push({ file: filename, from: m, to: fixed });
      }
      return fixed;
    });

  const before = result;
  result = result.replace(/([!?])\1+/g, '$1');
  if (result !== before) {
    fixes++;
    allChanges.push({ file: filename, from: '(double punctuation)', to: '(collapsed)' });
  }

  totalFixes += fixes;
  return result;
}

for (const file of files) {
  const filePath = path.join(dir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  const changesBefore = allChanges.length;

  const fixed = content.replace(/"((?:[^"\\]|\\.)*)"/g, (fullMatch, inner) => {
    if (!/[\u0600-\u06FF]/.test(inner)) return fullMatch;
    const fixedInner = fixBidiPunctInString(inner, file);
    if (fixedInner !== inner) return '"' + fixedInner + '"';
    return fullMatch;
  });

  const fileFixes = allChanges.length - changesBefore;
  if (fixed !== content) {
    fs.writeFileSync(filePath, fixed);
    console.log(`${file}: ${fileFixes} fixes`);
  }
}

console.log(`\nTotal: ${totalFixes} fixes across ${files.length} files`);
for (const c of allChanges) {
  console.log(`  ${c.file}: "${c.from}" → "${c.to}"`);
}
