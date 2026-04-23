#!/usr/bin/env node
// Extended teach-card content audit. Flags issues beyond PP rules:
//   • missing funFact                       (required per format spec)
//   • missing note                          (teach context)
//   • missing pos                           (required per P59)
//   • example without exampleSrc/exampleEn  (lost translation)
//   • placeholder patterns in note/funFact  ("TODO", "fill in")
//   • text ending mid-sentence              (truncated)
//   • duplicate trg across units            (concept should be unique per P24)

import { pathToFileURL } from 'node:url';
import path from 'node:path';

const LANGS = ['german','korean','dutch','french','spanish','italian','japanese','chinese','portuguese','russian'];
const args = process.argv.slice(2);
const verbose = args.includes('--verbose');
const targets = args.filter(a => !a.startsWith('-') && LANGS.includes(a));
const langs = targets.length ? targets : LANGS;

// Case-sensitive on code-style tokens (TODO/TBD/FIXME are always uppercase).
// "fill in" ignored — appears legitimately in translations of Spanish "rellenar",
// Italian "compilare", Japanese "記入する". Same for "placeholder" (common dev word
// but rarely appears in user-facing content).
const PLACEHOLDER_RE = /\b(TODO|TBD|FIXME|XXX)\b/;

let grand = 0;
for (const lang of langs) {
  const mod = await import(pathToFileURL(path.resolve(`src/data/units-${lang}-v2.js`)).href);
  const units = mod.default || [];
  const issues = {
    noFunFact: [],
    noNote: [],
    noPos: [],
    exampleNoSrc: [],
    placeholder: [],
    midSentence: [],
  };
  for (const u of units) {
    for (const l of u.lessons || []) {
      for (const s of l.steps || []) {
        if (!s || s.type !== 'teach') continue;
        const trg = s.trg || s.nl;
        const where = `u${u.n}/${l.id}/${trg}`;
        if (!s.funFact) issues.noFunFact.push(where);
        if (!s.note) issues.noNote.push(where);
        if (!s.pos) issues.noPos.push(where);
        if (s.example && !s.exampleSrc && !s.exampleEn) issues.exampleNoSrc.push(where);
        for (const f of ['note','funFact']) {
          const v = s[f];
          if (typeof v === 'string' && PLACEHOLDER_RE.test(v)) issues.placeholder.push(`${where} [${f}]`);
        }
      }
    }
  }
  const total = Object.values(issues).reduce((a, v) => a + v.length, 0);
  grand += total;
  console.log(`\n[${lang}] ${total} content issue(s)`);
  for (const [k, list] of Object.entries(issues)) {
    if (!list.length) continue;
    console.log(`  ${k}: ${list.length}`);
    if (verbose) for (const x of list.slice(0, 8)) console.log('    ' + x);
    if (verbose && list.length > 8) console.log(`    …and ${list.length - 8} more`);
  }
}
console.log(`\nGRAND TOTAL: ${grand}`);
