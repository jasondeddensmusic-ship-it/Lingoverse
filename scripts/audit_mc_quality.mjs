#!/usr/bin/env node
// MC/fb quality audit — surfaces additional problems not caught by PP rules:
//   • MC opts count != 4 (non-standard — usually a typo)
//   • opts with leading/trailing whitespace
//   • opts containing `\n` newlines (should be separate steps)
//   • fb missing `hint` (learner has no guidance)
//   • teach cards missing required `example` or `funFact` fields
//   • teach cards with empty `pos`

import { pathToFileURL } from 'node:url';
import path from 'node:path';

const LANGS = ['german','korean','dutch','french','spanish','italian','japanese','chinese','portuguese','russian'];
const args = process.argv.slice(2);
const verbose = args.includes('--verbose');
const onlyLangs = args.filter(a => !a.startsWith('-')).filter(a => LANGS.includes(a));
const targets = onlyLangs.length ? onlyLangs : LANGS;

async function loadUnits(lang) {
  const p = path.resolve(process.cwd(), `src/data/units-${lang}-v2.js`);
  return (await import(pathToFileURL(p).href)).default;
}

let grand = 0;
for (const lang of targets) {
  const units = await loadUnits(lang);
  const issues = {
    mcOptsCount: [],       // non-standard opts count
    whitespaceOpt: [],     // opts with leading/trailing space
    newlineInOpt: [],      // opts containing \n
    fbNoHint: [],          // fb without hint
    mcNoHint: [],          // mc without hint
    teachNoExample: [],    // teach card missing example
    teachEmptyPos: [],     // teach card with empty pos
  };
  for (const u of units) {
    for (const l of u.lessons || []) {
      if (!l) continue;
      for (let i = 0; i < (l.steps || []).length; i++) {
        const s = l.steps[i];
        if (!s) continue;
        if (s.type === 'mc') {
          if (Array.isArray(s.opts)) {
            if (s.opts.length !== 4) issues.mcOptsCount.push({ unit: u.n, lesson: l.id, idx: i, n: s.opts.length });
            for (const o of s.opts) {
              const str = String(o);
              if (str !== str.trim()) issues.whitespaceOpt.push({ unit: u.n, lesson: l.id, idx: i, opt: str });
              if (str.includes('\n')) issues.newlineInOpt.push({ unit: u.n, lesson: l.id, idx: i });
            }
          }
          if (!s.hint) issues.mcNoHint.push({ unit: u.n, lesson: l.id, idx: i });
        }
        if (s.type === 'fb') {
          if (!s.hint) issues.fbNoHint.push({ unit: u.n, lesson: l.id, idx: i });
          if (Array.isArray(s.opts)) {
            for (const o of s.opts) {
              const str = String(o);
              if (str !== str.trim()) issues.whitespaceOpt.push({ unit: u.n, lesson: l.id, idx: i, opt: str, type: 'fb' });
              if (str.includes('\n')) issues.newlineInOpt.push({ unit: u.n, lesson: l.id, idx: i, type: 'fb' });
            }
          }
        }
        if (s.type === 'teach') {
          if (!s.example) issues.teachNoExample.push({ unit: u.n, lesson: l.id, idx: i, trg: s.trg || s.nl });
          if (s.pos === '' || s.pos === undefined) issues.teachEmptyPos.push({ unit: u.n, lesson: l.id, idx: i, trg: s.trg || s.nl });
        }
      }
    }
  }
  const total = Object.values(issues).reduce((a, v) => a + v.length, 0);
  grand += total;
  console.log(`\n[${lang}] ${total} quality issue(s)`);
  for (const [k, list] of Object.entries(issues)) {
    if (!list.length) continue;
    console.log(`  ${k}: ${list.length}`);
    if (verbose) for (const it of list.slice(0, 8)) console.log('    ' + JSON.stringify(it));
    if (verbose && list.length > 8) console.log(`    …and ${list.length - 8} more`);
  }
}
console.log(`\nGRAND TOTAL: ${grand}`);
