#!/usr/bin/env node
// Audit placement-quiz question banks for:
//   1. em-dashes (—, –) in user-facing q/stem/stemSrc/opts/ans fields (PP22c)
//   2. "cluttered q" pattern — the pre-2026-04-23 style that crammed
//      target-text + pinyin + translation + meta-question into a single q
//      string. Detect by: q field starts with a single-quoted target
//      sentence longer than 8 chars AND contains " — " or " — " inside.
//   3. ans not present in opts
// Exits with non-zero if any issues.

import { pathToFileURL } from 'node:url';
import path from 'node:path';
import fs from 'node:fs';

const BANK_DIR = 'src/data/placement-questions';
const files = fs.readdirSync(BANK_DIR)
  .filter(f => f.endsWith('.js') && f !== 'index.js')
  .map(f => path.join(BANK_DIR, f));

let total = 0;
for (const file of files) {
  const mod = await import(pathToFileURL(path.resolve(file)).href);
  const bank = mod.default || [];
  const lang = path.basename(file, '.js');
  const issues = { pp22c: [], cluttered: [], ansNotInOpts: [] };

  for (const q of bank) {
    // 1. PP22c
    const fields = { q: q.q, stem: q.stem, stemSrc: q.stemSrc, ans: q.ans };
    for (const [k, v] of Object.entries(fields)) {
      if (typeof v === 'string' && /[—–]/.test(v)) {
        issues.pp22c.push({ id: q.id, field: k, snippet: v.slice(0, 60) });
      }
    }
    if (Array.isArray(q.opts)) {
      for (const o of q.opts) {
        if (typeof o === 'string' && /[—–]/.test(o)) {
          issues.pp22c.push({ id: q.id, field: 'opts', snippet: o.slice(0, 60) });
        }
      }
    }

    // 2. Cluttered q: starts with quoted target + has em-dash or multiple ( )
    if (typeof q.q === 'string') {
      const looksLikeStem = /^['"\u2018\u2019].+['"\u2018\u2019]/.test(q.q);
      if (looksLikeStem && /\([^()]*\).*\(/.test(q.q)) {
        issues.cluttered.push({ id: q.id, snippet: q.q.slice(0, 60) });
      }
    }

    // 3. ans must be in opts
    if (Array.isArray(q.opts) && q.ans && !q.opts.includes(q.ans)) {
      issues.ansNotInOpts.push({ id: q.id, ans: q.ans, opts: q.opts });
    }
  }

  const count = issues.pp22c.length + issues.cluttered.length + issues.ansNotInOpts.length;
  total += count;
  console.log(`\n[${lang}] ${count} issue(s)`);
  for (const [k, list] of Object.entries(issues)) {
    if (!list.length) continue;
    console.log(`  ${k}: ${list.length}`);
    for (const it of list.slice(0, 5)) console.log(`    ${JSON.stringify(it)}`);
    if (list.length > 5) console.log(`    …and ${list.length - 5} more`);
  }
}

console.log(`\nGRAND TOTAL: ${total}`);
if (total > 0) process.exit(1);
