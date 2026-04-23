#!/usr/bin/env node
// Merge or remove match steps that have fewer than 2 pairs. A 1-pair match
// can't actually match anything — it's a rendering bug. Strategy:
//   1. If the same lesson has another match step with <6 pairs, merge the
//      orphan pair into it.
//   2. Otherwise, delete the orphan match step.

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

// Find a match step block and return {start, end, text, pairs[]} or null.
// Uses a string-aware brace matcher.
function findMatchBlocks(text) {
  const blocks = [];
  const re = /\{\s*type\s*:\s*['"]match['"]/g;
  let m;
  while ((m = re.exec(text)) !== null) {
    const start = m.index;
    let i = start + 1;
    let depth = 1;
    while (i < text.length && depth > 0) {
      const ch = text[i];
      if (ch === '"' || ch === "'") {
        const q = ch; i++;
        while (i < text.length && text[i] !== q) { if (text[i] === '\\') i += 2; else i++; }
        i++; continue;
      }
      if (ch === '{' || ch === '[') depth++;
      else if (ch === '}' || ch === ']') depth--;
      if (depth === 0) break;
      i++;
    }
    if (depth !== 0) continue;
    const end = i + 1;
    const blockText = text.slice(start, end);
    // Count pairs: count occurrences of `{trg:` or `{"trg":` or `{nl:`.
    const pairCount = (blockText.match(/\{\s*(?:trg|nl)\s*:/g) || []).length;
    blocks.push({ start, end, text: blockText, pairCount });
  }
  return blocks;
}

let removed = 0, merged = 0, filesTouched = 0;

const DATA_ROOT = path.join('src', 'data');
const dirs = fs.readdirSync(DATA_ROOT).filter(f => /-v2$/.test(f)).map(f => path.join(DATA_ROOT, f));

for (const dir of dirs) {
  for (const f of walk(dir)) {
    let text = fs.readFileSync(f, 'utf8');
    const blocks = findMatchBlocks(text);
    if (blocks.length === 0) continue;
    const orphans = blocks.filter(b => b.pairCount < 2);
    if (orphans.length === 0) continue;

    // Process orphans in reverse so indices stay valid.
    orphans.sort((a, b) => b.start - a.start);
    let changed = false;

    for (const orphan of orphans) {
      // Look for ANOTHER match step in the same file (same lesson — we
      // don't track lesson scope here, but most orphans are end-of-lesson
      // and nearest-same-match in text is the right target).
      const host = blocks.find(b =>
        b !== orphan && b.pairCount >= 2 && b.pairCount < 6 &&
        Math.abs(b.start - orphan.start) < 5000 // within ~5KB text distance
      );
      if (host) {
        // Extract the orphan's pair literal.
        const pairMatch = orphan.text.match(/\{[^{}]*(?:trg|nl)\s*:[^{}]*\}/);
        if (!pairMatch) continue;
        const orphanPair = pairMatch[0];
        // Insert into host's pairs array just before the closing ].
        const hostBracketClose = text.lastIndexOf(']', host.end - 1);
        if (hostBracketClose < 0 || hostBracketClose < host.start) continue;
        const needsComma = !text.slice(host.start, hostBracketClose).trim().endsWith(',');
        text = text.slice(0, hostBracketClose) + (needsComma ? ',' : '') + orphanPair + text.slice(hostBracketClose);
        // Now remove the orphan. Also remove the leading comma if any.
        // Find the comma right before orphan.start (skipping whitespace).
        // Note: since we inserted into host which is ABOVE orphan, orphan's
        // offsets have shifted. We look them up again.
        const updatedBlocks = findMatchBlocks(text).filter(b => b.pairCount < 2);
        if (updatedBlocks.length === 0) { changed = true; merged++; continue; }
        const newOrphan = updatedBlocks[0];
        // Find leading comma.
        let removeStart = newOrphan.start;
        let j = removeStart - 1;
        while (j >= 0 && /\s/.test(text[j])) j--;
        if (j >= 0 && text[j] === ',') removeStart = j;
        text = text.slice(0, removeStart) + text.slice(newOrphan.end);
        changed = true;
        merged++;
      } else {
        // No host; just remove the orphan and its leading comma.
        let removeStart = orphan.start;
        let j = removeStart - 1;
        while (j >= 0 && /\s/.test(text[j])) j--;
        if (j >= 0 && text[j] === ',') removeStart = j;
        text = text.slice(0, removeStart) + text.slice(orphan.end);
        changed = true;
        removed++;
      }
    }
    if (changed) {
      filesTouched++;
      if (apply) fs.writeFileSync(f, text);
    }
  }
}

console.log(`Files touched: ${filesTouched}`);
console.log(`Orphan matches merged into host: ${merged}`);
console.log(`Orphan matches removed (no host): ${removed}`);
if (!apply) console.log('Dry-run. Re-run with --apply to write.');
