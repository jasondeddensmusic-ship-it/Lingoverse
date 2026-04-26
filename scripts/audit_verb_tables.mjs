#!/usr/bin/env node
/**
 * audit_verb_tables.mjs — verb_table coverage per language
 *
 * Surfaced in 2026-04-26 owner audit: Italian/Japanese/Chinese/Portuguese/Russian
 * have ~0 verb_table steps. Conjugation paradigms are the spine of Romance/Slavic
 * verb learning. This audit measures coverage and warns (does not fail) when a
 * language is below the recommended floor.
 *
 * Mode:
 * - Default: print report, exit 0 (informational).
 * - With --strict: exit nonzero if any language below minimum.
 *
 * Minimums (from audit recommendation):
 * - German: 10  (already 101 — gold standard)
 * - Romance (FR/ES/IT/PT): 30
 * - Russian: 50  (six cases × multiple aspects)
 * - Japanese: 30  (te-form, masu-stem, plain, polite past)
 * - Chinese: 5  (less paradigm-heavy)
 * - Korean: 30  (agglutinative, many endings)
 * - Dutch: 10  (already 101 — gold standard)
 *
 * Exit 0 = report (default).
 * Exit 1 = strict mode + violations.
 */

import fs from 'fs';
import path from 'path';

const ROOT = path.resolve(process.cwd(), 'src/data');
const STRICT = process.argv.includes('--strict');

const MINIMUMS = {
  german: 10, dutch: 10,
  french: 30, spanish: 30, italian: 30, portuguese: 30,
  russian: 50,
  japanese: 30,
  chinese: 5,
  korean: 30,
};

const LANGS = Object.keys(MINIMUMS);

function walk(dir) {
  const out = [];
  if (!fs.existsSync(dir)) return out;
  for (const f of fs.readdirSync(dir)) {
    const fp = path.join(dir, f);
    const st = fs.statSync(fp);
    if (st.isDirectory()) out.push(...walk(fp));
    else if (f.endsWith('.js') && !fp.includes('.bak')) out.push(fp);
  }
  return out;
}

const counts = {};
for (const lang of LANGS) {
  const dir = path.join(ROOT, lang + '-v2');
  if (!fs.existsSync(dir)) continue;
  let count = 0;
  for (const file of walk(dir)) {
    const text = fs.readFileSync(file, 'utf8');
    const m = text.match(/type:"verb_table"/g);
    if (m) count += m.length;
  }
  counts[lang] = count;
}

console.log('Verb table coverage per language:');
console.log('Language       | Count  | Minimum | Status');
console.log('---------------|--------|---------|--------');
let belowMinimum = 0;
for (const lang of LANGS) {
  const count = counts[lang] || 0;
  const min = MINIMUMS[lang];
  const ok = count >= min;
  if (!ok) belowMinimum++;
  const status = ok ? 'OK' : 'BELOW MIN';
  console.log(`${lang.padEnd(14)} | ${String(count).padStart(6)} | ${String(min).padStart(7)} | ${status}`);
}
console.log('');

if (belowMinimum === 0) {
  console.log('audit_verb_tables: PASS — all languages meet verb_table minimum');
  process.exit(0);
}

console.log(`audit_verb_tables: ${belowMinimum} language(s) below minimum verb_table coverage`);
console.log('Tracked in AUTONOMOUS_QUEUE under LANG-QUALITY-001.');
process.exit(STRICT ? 1 : 0);
