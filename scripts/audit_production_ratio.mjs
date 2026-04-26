#!/usr/bin/env node
/**
 * audit_production_ratio.mjs — production-vs-recognition balance per CEFR level
 *
 * Surfaced in 2026-04-26 owner audit: at B2 (where output hypothesis matters
 * most), German is 38% production, Korean 48%, Spanish 45%. Babbel/Busuu push
 * past 60% at B2.
 *
 * Production = fb + drag_fill (typing required, even with options)
 * Recognition = mc + match (no typing)
 *
 * Mode:
 * - Default: print report, exit 0 (informational).
 * - With --strict: exit nonzero if any (lang, level) has <40% production.
 *
 * Tracked in AUTONOMOUS_QUEUE under LANG-QUALITY-003.
 */

import fs from 'fs';
import path from 'path';

const ROOT = path.resolve(process.cwd(), 'src/data');
const STRICT = process.argv.includes('--strict');

const LANGS = ['dutch','german','french','spanish','italian','portuguese','korean','japanese','russian','chinese'];

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

// Determine CEFR level from filename: unit-NN.js → look at level prefix in unit
function inferLevelFromText(text) {
  const m = text.match(/level:"(A1|A1\.1|A1\.2|A2|A2\.1|A2\.2|B1|B1\.1|B1\.2|B2|B2\.1|B2\.2)"/);
  if (!m) return null;
  return m[1].split('.')[0]; // A1 / A2 / B1 / B2
}

const stats = {};
for (const lang of LANGS) {
  const dir = path.join(ROOT, lang + '-v2');
  if (!fs.existsSync(dir)) continue;
  stats[lang] = { A1:{p:0,r:0}, A2:{p:0,r:0}, B1:{p:0,r:0}, B2:{p:0,r:0} };
  for (const file of walk(dir)) {
    const text = fs.readFileSync(file, 'utf8');
    const level = inferLevelFromText(text);
    if (!level || !stats[lang][level]) continue;
    const p = (text.match(/type:"(fb|drag_fill)"/g) || []).length;
    const r = (text.match(/type:"(mc|match)"/g) || []).length;
    stats[lang][level].p += p;
    stats[lang][level].r += r;
  }
}

console.log('Production ratio per language × CEFR level:');
console.log('Lang        | A1 prod% | A2 prod% | B1 prod% | B2 prod%');
console.log('------------|----------|----------|----------|----------');
const violations = [];
for (const lang of LANGS) {
  const s = stats[lang];
  if (!s) continue;
  const ratios = ['A1','A2','B1','B2'].map(lvl => {
    const tot = s[lvl].p + s[lvl].r;
    return tot > 0 ? Math.round(100 * s[lvl].p / tot) : null;
  });
  const cells = ratios.map(r => r === null ? '   n/a' : `${String(r).padStart(4)}%`);
  console.log(`${lang.padEnd(12)}|  ${cells.join('   |  ')}`);
  // Strict mode: any non-null ratio under 40% is a violation
  ratios.forEach((r, i) => {
    if (r !== null && r < 40) violations.push({ lang, level: ['A1','A2','B1','B2'][i], ratio: r });
  });
}
console.log('');

if (violations.length === 0) {
  console.log('audit_production_ratio: PASS — every (lang, level) ≥40% production');
  process.exit(0);
}

console.log(`audit_production_ratio: ${violations.length} (lang, level) cell(s) below 40% production`);
for (const v of violations) console.log(`  ${v.lang} ${v.level}: ${v.ratio}%`);
console.log('Tracked in AUTONOMOUS_QUEUE under LANG-QUALITY-003.');
process.exit(STRICT ? 1 : 0);
