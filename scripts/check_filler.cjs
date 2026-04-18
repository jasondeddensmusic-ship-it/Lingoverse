#!/usr/bin/env node
// PP66 guard — fail if any filler placeholder exists in user-facing fields of
// src/data recursively. Run as a pre-commit / pre-push check.
//
// Usage:
//   node scripts/check_filler.cjs
//
// Exit codes:
//   0 = clean
//   1 = filler found

const fs = require('fs');
const path = require('path');

const FILLERS = [
  '"(review)"',
  '"(taught)"',
  '"(TBD)"',
  '"(see above)"',
  '"(review pair)"'
];

const DATA_ROOT = path.join(__dirname, '..', 'src', 'data');
function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(p, files);
    else if (entry.isFile() && p.endsWith('.js')) files.push(p);
  }
  return files;
}

let violations = 0;
for (const f of walk(DATA_ROOT)) {
  const content = fs.readFileSync(f, 'utf8');
  for (const filler of FILLERS) {
    let idx = 0;
    while ((idx = content.indexOf(filler, idx)) !== -1) {
      // Find line number
      const line = content.slice(0, idx).split('\n').length;
      console.log(`${f}:${line} contains filler ${filler}`);
      violations++;
      idx++;
    }
  }
}

if (violations > 0) {
  console.error(`\nPP66 VIOLATION: ${violations} filler occurrence(s) found. Rewrite with real translations.`);
  process.exit(1);
}
console.log('PP66 PASS: no filler placeholders in src/data/');
process.exit(0);
