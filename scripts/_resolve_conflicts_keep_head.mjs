#!/usr/bin/env node
// Resolve git merge conflicts by keeping HEAD sections (my richer funFacts).
// Removes '<<<<<<< HEAD' ... '=======' ... '>>>>>>> origin/main' blocks,
// preserving the HEAD half.

import fs from 'node:fs';

const files = process.argv.slice(2);
if (!files.length) {
  console.error('Usage: _resolve_conflicts_keep_head.mjs <file1> [<file2> ...]');
  process.exit(1);
}

for (const f of files) {
  let text = fs.readFileSync(f, 'utf8');
  const before = text;
  // Match: <<<<<<< HEAD\n(HEAD)\n=======\n(origin)\n>>>>>>> origin/main\n
  text = text.replace(/<<<<<<< HEAD\n([\s\S]*?)=======\n[\s\S]*?>>>>>>> [^\n]+\n/g, '$1');
  if (text !== before) {
    fs.writeFileSync(f, text);
    console.log(`${f}: resolved`);
  } else {
    console.log(`${f}: no changes`);
  }
}
