#!/usr/bin/env node
// Trim trailing/leading whitespace from opts arrays in every source file.
// These are silent render bugs — the extra space is displayed to the user.

import fs from 'node:fs';
import path from 'node:path';

const apply = process.argv.includes('--apply');

function walk(dir) {
  const out = [];
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) out.push(...walk(p));
    else if (ent.isFile() && ent.name.endsWith('.js')) out.push(p);
  }
  return out;
}

const DATA_ROOT = path.join('src', 'data');
const dirs = fs.readdirSync(DATA_ROOT).filter(f => /-v2$/.test(f)).map(f => path.join(DATA_ROOT, f));
const files = dirs.flatMap(walk);

let touched = 0, trimmed = 0;
for (const f of files) {
  let text = fs.readFileSync(f, 'utf8');
  // Match string literals inside double or single quotes. Leading or trailing
  // whitespace INSIDE the quotes is the target.
  const re = /(["'])((?:\\.|(?!\1).)*)\1/g;
  let changed = false;
  const updated = text.replace(re, (match, q, inner) => {
    const trimmedInner = inner.replace(/^\s+|\s+$/g, '');
    if (trimmedInner === inner) return match;
    // Only trim if leading/trailing whitespace is spaces (not escape seq).
    // Avoid trimming multi-line strings (with \n).
    if (/\\n/.test(inner)) return match;
    if (trimmedInner.length === 0) return match;
    trimmed++;
    changed = true;
    return `${q}${trimmedInner}${q}`;
  });
  if (changed) {
    touched++;
    if (apply) fs.writeFileSync(f, updated);
  }
}

console.log(`Files touched: ${touched}, strings trimmed: ${trimmed}`);
if (!apply) console.log('Re-run with --apply to write.');
