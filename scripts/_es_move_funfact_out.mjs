#!/usr/bin/env node
// Move funFact from inside deepDive out to the teach-card level.
// Pattern: `        ,funFact:"..."}},` → `        },funFact:"..."},`
// Only matches 2-closing-brace variant to stay conservative.

import fs from 'node:fs';
import path from 'node:path';

const apply = process.argv.includes('--apply');
const dir = path.join('src', 'data', 'spanish-v2');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.js')).map(f => path.join(dir, f));

// Matches: <whitespace>,funFact:"..."}}, where `"..."` is a non-greedy string (no unescaped quotes).
const RE = /(\n\s*),funFact:("(?:\\.|[^"\\])*")\}\}(,?)/g;

let filesChanged = 0, totalReplacements = 0;
for (const f of files) {
  const text = fs.readFileSync(f, 'utf8');
  let count = 0;
  const next = text.replace(RE, (m, ws, quoted, trailComma) => {
    count++;
    return `${ws}},funFact:${quoted}}${trailComma}`;
  });
  if (count > 0) {
    filesChanged++;
    totalReplacements += count;
    console.log(`${f}: ${count} replacement(s)`);
    if (apply) fs.writeFileSync(f, next);
  }
}
console.log(`\nFiles changed: ${filesChanged}  Total replacements: ${totalReplacements}`);
if (!apply) console.log('Dry run. Re-run with --apply.');
