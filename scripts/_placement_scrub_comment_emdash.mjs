#!/usr/bin/env node
// Replace em-dashes inside `// ═══ Level — topic ═══` comment headers
// with a colon, for consistency with PP22c (even though the rule is for
// user-facing content, cleanup is cheap and avoids future false positives
// if the validator ever widens scope).

import fs from 'node:fs';
import path from 'node:path';

const apply = process.argv.includes('--apply');
const LANGS = ['de','es','fr','it','ja','ko','nl','pt','ru','zh'];

let total = 0;
for (const lang of LANGS) {
  const file = path.join('src/data/placement-questions', `${lang}.js`);
  if (!fs.existsSync(file)) continue;
  const src = fs.readFileSync(file, 'utf8');
  // Only modify lines starting with `//` and containing em-dash.
  const out = src.replace(/^(\s*\/\/[^\n]*?)[—–](.*)$/gm, (m, a, b) => {
    total++;
    return `${a}:${b}`;
  });
  if (out !== src) {
    console.log(`${file}: updated`);
    if (apply) fs.writeFileSync(file, out);
  }
}
console.log(`\nTotal comment em-dashes replaced: ${total}`);
if (!apply) console.log('Dry run.');
