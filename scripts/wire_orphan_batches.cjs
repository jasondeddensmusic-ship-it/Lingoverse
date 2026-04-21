#!/usr/bin/env node
// Wire up orphan batch/temp imports: append unused import bindings to the
// unit file's `lessons:[...]` array so they actually ship.
//
// Usage:
//   node scripts/wire_orphan_batches.cjs <lang-v2>           (dry-run, reports)
//   node scripts/wire_orphan_batches.cjs <lang-v2> --apply   (writes changes)
//
// Strategy:
//   1. For each unit-NN.js in the language folder:
//      a. Parse import lines, collect bound names → imported file paths
//      b. Search the rest of the file for references to those names
//      c. Unused import = dead wiring
//   2. Append unused names to the lessons array before the closing `]`
//      (keeping the import statement unchanged)
//   3. Per-file reporting; optional --apply flag.

'use strict';
const fs = require('fs');
const path = require('path');

const langArg = process.argv[2];
const apply = process.argv.includes('--apply');
if (!langArg) {
  console.error('Usage: node scripts/wire_orphan_batches.cjs <lang-v2> [--apply]');
  process.exit(1);
}
const dir = path.join('src', 'data', langArg);
if (!fs.existsSync(dir)) {
  console.error(`Not found: ${dir}`);
  process.exit(1);
}

const unitFiles = fs.readdirSync(dir)
  .filter(f => /^unit-\d+\.js$/.test(f))
  .sort();

let totalDead = 0;
let totalTouchedUnits = 0;
const results = [];

for (const unitFile of unitFiles) {
  const fullPath = path.join(dir, unitFile);
  let content = fs.readFileSync(fullPath, 'utf8');

  // Extract imports: match both `import NAME from './path';` patterns, possibly on same line.
  // Restrict to batch/temp files (files starting with _batch or _temp).
  const importRe = /import\s+([A-Za-z_][A-Za-z_0-9]*)\s+from\s+['"]\.\/(_batch[^'"]+|_temp[^'"]+)['"]\s*;?/g;
  const imports = [];
  let m;
  while ((m = importRe.exec(content)) !== null) {
    imports.push({ name: m[1], file: m[2], start: m.index, end: m.index + m[0].length });
  }
  if (imports.length === 0) continue;

  // Check which imports are USED elsewhere in the file.
  // "Used" = the name appears as a standalone identifier outside its own import statement.
  const unused = [];
  for (const imp of imports) {
    // Strip out all the import statements first
    let rest = content.slice(0, imp.start) + content.slice(imp.end);
    // Remove every import statement
    rest = rest.replace(importRe, '');
    // Search for the name as an identifier (word-boundary)
    const nameRe = new RegExp(`\\b${imp.name}\\b`, 'g');
    if (!nameRe.test(rest)) {
      unused.push(imp);
    }
  }

  if (unused.length === 0) {
    results.push({ file: unitFile, imports: imports.length, unused: 0, wired: 0 });
    continue;
  }

  // Found unused imports. Locate the lessons array close.
  // Strategy: find the last `]` that immediately precedes `  ]\n}` or similar
  // unit-object close. Works for both `]}]};` compact and `]\n  ]\n};` pretty formats.
  const lessonsStart = content.search(/lessons:\s*\[/);
  if (lessonsStart === -1) {
    results.push({ file: unitFile, imports: imports.length, unused: unused.length, wired: 0, error: 'no lessons:[ found' });
    continue;
  }
  // Find the unit-object close: `]\n  ]\n}` or `]}]};`
  // Most robust: find the LAST `]` before `};` (or `;} export default` etc.) in the file.
  // The unit object typically ends with: `... ]  \n}]}]};` or `... ]\n  ]\n};`
  // We want the OUTER-most `]` of the lessons array. Search from end backward.
  let closeBracket = -1;
  {
    // Find the final `}` of the unit definition (just before `export default`).
    const exportMatch = content.match(/\n\s*export\s+default\s+/);
    const exportIdx = exportMatch ? content.indexOf(exportMatch[0]) : content.length;
    const unitClose = content.lastIndexOf('}', exportIdx);
    if (unitClose === -1) {
      results.push({ file: unitFile, imports: imports.length, unused: unused.length, wired: 0, error: 'unit close not found' });
      continue;
    }
    // Last `]` before unitClose — that's the closing ] of the lessons array
    closeBracket = content.lastIndexOf(']', unitClose);
    if (closeBracket === -1 || closeBracket < lessonsStart) {
      results.push({ file: unitFile, imports: imports.length, unused: unused.length, wired: 0, error: 'lessons close bracket not located' });
      continue;
    }
  }

  // Append the unused imports before the closing ].
  // Find whether there's already a trailing comma or not at position closeBracket - 1 (skipping whitespace).
  let tail = closeBracket - 1;
  while (tail > lessonsStart && /\s/.test(content[tail])) tail--;
  const lastNonWhitespace = content[tail];
  const needsLeadingComma = lastNonWhitespace !== ',' && lastNonWhitespace !== '[';

  const insertion = (needsLeadingComma ? ',' : '') + '\n  ' + unused.map(i => i.name).join(',\n  ') + '\n';
  const newContent = content.slice(0, closeBracket) + insertion + content.slice(closeBracket);

  results.push({ file: unitFile, imports: imports.length, unused: unused.length, wired: unused.length, names: unused.map(i => i.name) });
  totalDead += unused.length;
  totalTouchedUnits++;

  if (apply) {
    fs.writeFileSync(fullPath, newContent, 'utf8');
  }
}

// Report
console.log(`\n=== Orphan-import wire-up report: ${langArg} ===`);
console.log(`Unit files scanned: ${unitFiles.length}`);
console.log(`Units with orphan imports: ${totalTouchedUnits}`);
console.log(`Total orphan imports to wire: ${totalDead}`);
if (apply) console.log(`Mode: APPLIED to disk.`);
else console.log(`Mode: DRY-RUN. Re-run with --apply to write changes.`);

for (const r of results) {
  if (r.unused === 0) continue;
  if (r.error) {
    console.log(`  ${r.file}: ERROR (${r.error}) — imports=${r.imports} unused=${r.unused}`);
  } else {
    console.log(`  ${r.file}: imports=${r.imports} unused=${r.unused} → wiring: ${r.names.join(', ')}`);
  }
}
