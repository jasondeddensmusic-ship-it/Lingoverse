#!/usr/bin/env node
// Quick scrubber: replace all em-dashes (—, –) in Spanish teach-card
// funFacts with a sensible punctuation fallback. Idempotent. Used
// after batch funFact insertions to catch em-dashes I accidentally
// wrote into content strings.

import fs from 'node:fs';
import path from 'node:path';

const apply = process.argv.includes('--apply');
const LANG_ROOT = 'src/data/spanish-v2';

let total = 0;
for (const file of fs.readdirSync(LANG_ROOT)) {
  if (!file.endsWith('.js')) continue;
  const p = path.join(LANG_ROOT, file);
  let text = fs.readFileSync(p, 'utf8');
  const before = text;
  // Replace " — " and " – " with "; " first (most common pattern, clause separator).
  text = text.replace(/ [—–] /g, '; ');
  // Leftover em-dashes that weren't space-bounded: replace with comma.
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
