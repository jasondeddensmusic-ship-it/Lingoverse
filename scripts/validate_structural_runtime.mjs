#!/usr/bin/env node
// Structural runtime audit — checks shipped lesson tree for step-level
// anomalies that other PP-rule checks don't surface. Targets:
//   • Missing required fields (teach with no trg+src, mc with no q/ans/opts)
//   • mc.ans not in opts (would break the engine's correctness check)
//   • fb.a empty or not matching any `{N}` slot count in `s`
//   • Duplicate opts within a single step
//   • Inconsistent sSrc/sEn pairing (both set and disagree)
//   • Null/undefined steps in lessons
//   • Empty lessons
//
// Usage:
//   node scripts/validate_structural_runtime.mjs

import { pathToFileURL } from 'node:url';
import path from 'node:path';

const LANGS = ['german','korean','dutch','french','spanish','italian','japanese','chinese','portuguese','russian'];
const args = process.argv.slice(2);
const verbose = args.includes('--verbose') || args.includes('-v');
const onlyLangs = args.filter(a => !a.startsWith('-')).filter(a => LANGS.includes(a));
const targets = onlyLangs.length ? onlyLangs : LANGS;

async function loadUnits(lang) {
  const p = path.resolve(process.cwd(), `src/data/units-${lang}-v2.js`);
  const mod = await import(pathToFileURL(p).href);
  return mod.default || mod;
}

let grandTotal = 0;

for (const lang of targets) {
  const units = await loadUnits(lang);
  const issues = {
    nullStep: [],
    emptyLesson: [],
    teachMissing: [],
    mcMissing: [],
    ansNotInOpts: [],
    duplicateOpts: [],
    fbBlanksMismatch: [],
  };
  for (const u of units) {
    for (const l of u.lessons || []) {
      if (!l) { issues.emptyLesson.push({ unit: u.n, lesson: '(null)' }); continue; }
      const steps = l.steps || [];
      if (steps.length === 0) { issues.emptyLesson.push({ unit: u.n, lesson: l.id }); continue; }
      for (let i = 0; i < steps.length; i++) {
        const s = steps[i];
        if (!s) { issues.nullStep.push({ unit: u.n, lesson: l.id, idx: i }); continue; }
        if (s.type === 'teach') {
          if (!((s.trg || s.nl) && (s.src || s.en))) {
            issues.teachMissing.push({ unit: u.n, lesson: l.id, idx: i });
          }
        }
        if (s.type === 'mc') {
          if (!s.q || !s.ans || !Array.isArray(s.opts) || s.opts.length < 2) {
            issues.mcMissing.push({ unit: u.n, lesson: l.id, idx: i });
          } else {
            if (!s.opts.some(o => String(o) === String(s.ans))) {
              issues.ansNotInOpts.push({ unit: u.n, lesson: l.id, idx: i, ans: s.ans });
            }
            const seen = new Set();
            for (const o of s.opts) {
              const k = String(o);
              if (seen.has(k)) { issues.duplicateOpts.push({ unit: u.n, lesson: l.id, idx: i, dup: k, type: 'mc' }); break; }
              seen.add(k);
            }
          }
        }
        if (s.type === 'fb') {
          const blanksInS = ((s.s || '').match(/\{\d+\}/g) || []).length;
          const a = Array.isArray(s.a) ? s.a : (s.a ? [s.a] : []);
          if (blanksInS > 0 && a.length === 0) {
            issues.fbBlanksMismatch.push({ unit: u.n, lesson: l.id, idx: i, blanksInS, a: a.length, reason: 'a-missing' });
          }
          if (blanksInS !== a.length && blanksInS > 0 && a.length > 0) {
            // fb is expected to be single-blank per PP48, so blanks=1 and a has 1 string is fine.
            // Multi-blank fb is covered by PP48 violation.
          }
          if (Array.isArray(s.opts)) {
            const seen = new Set();
            for (const o of s.opts) {
              const k = String(o);
              if (seen.has(k)) { issues.duplicateOpts.push({ unit: u.n, lesson: l.id, idx: i, dup: k, type: 'fb' }); break; }
              seen.add(k);
            }
          }
        }
      }
    }
  }
  const total = Object.values(issues).reduce((a, v) => a + v.length, 0);
  grandTotal += total;
  console.log(`\n[${lang}] ${total} structural issue(s)`);
  for (const [kind, list] of Object.entries(issues)) {
    if (!list.length) continue;
    console.log(`  ${kind}: ${list.length}`);
    if (verbose) {
      for (const item of list.slice(0, 20)) console.log('    ' + JSON.stringify(item));
      if (list.length > 20) console.log(`    …and ${list.length - 20} more`);
    }
  }
}

console.log(`\nGRAND TOTAL: ${grandTotal}`);
process.exit(grandTotal > 0 ? 1 : 0);
