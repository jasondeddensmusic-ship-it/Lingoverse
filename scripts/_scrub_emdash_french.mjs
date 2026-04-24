#!/usr/bin/env node
// Em-dash scrubber for French teach-card funFacts.

import fs from 'node:fs';
import path from 'node:path';

const apply = process.argv.includes('--apply');
const LANG_ROOT = 'src/data/french-v2';

let total = 0;
for (const file of fs.readdirSync(LANG_ROOT)) {
  if (!file.endsWith('.js')) continue;
  const p = path.join(LANG_ROOT, file);
  let text = fs.readFileSync(p, 'utf8');
  const before = text;
  text = text.replace(/ [—–] /g, '; ');
  text = text.replace(/[—–]/g, ',');
  if (text !== before) {
    const count = (before.match(/[—–]/g) || []).length;
    console.log(`${p}: ${count} em-dash(es)`);
    total += count;
    if (apply) fs.writeFileSync(p, text);
  }
}
console.log(`\nTotal: ${total}`);
if (!apply) console.log('Dry run.');
