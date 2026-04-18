#!/usr/bin/env node
'use strict';
/**
 * scripts/generate_queue.cjs — Queue snapshot generator.
 *
 * Scans validator + audit output across all 10 languages and writes a dated
 * snapshot to docs/audits/queue_snapshot_<YYYY-MM-DD>.md.
 *
 * Why a snapshot and not an in-place rewrite?
 *   AUTONOMOUS_QUEUE.md is a human-curated document with strategic priorities
 *   (P0 safety, P2 features, STOPS-ON blockers). Overwriting it risks losing
 *   manual intent. The snapshot is cheap to regenerate and can be referenced
 *   by the main queue ("see latest snapshot for validator-derived items").
 *
 * Usage:
 *   node scripts/generate_queue.cjs                     # writes dated snapshot
 *   node scripts/generate_queue.cjs --out <path>        # custom path
 *   node scripts/generate_queue.cjs --dry-run           # print to stdout only
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const LANGS = [
  'chinese-v2','dutch-v2','french-v2','german-v2','italian-v2',
  'japanese-v2','korean-v2','portuguese-v2','russian-v2','spanish-v2',
];

const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');
const outIdx = args.indexOf('--out');
const outArg = outIdx >= 0 ? args[outIdx + 1] : null;

function today() {
  const d = new Date();
  const p = n => String(n).padStart(2, '0');
  return `${d.getUTCFullYear()}-${p(d.getUTCMonth() + 1)}-${p(d.getUTCDate())}`;
}

function runValidator(lang) {
  try {
    const out = execSync(
      `node scripts/validate_all.cjs ${lang} --include-batch --json`,
      { cwd: path.join(__dirname, '..'), encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] }
    );
    const jsonLine = out.split('\n').find(l => l.startsWith('JSON_SUMMARY '));
    if (!jsonLine) return null;
    return JSON.parse(jsonLine.slice('JSON_SUMMARY '.length));
  } catch (e) {
    console.error(`validator failed for ${lang}: ${e.message}`);
    return null;
  }
}

function findPp63Baseline(lang) {
  // pp63_baseline_<lang>.md — leading count line reports the baseline.
  const p = path.join(__dirname, '..', 'docs', 'audits', `pp63_baseline_${lang}.md`);
  if (!fs.existsSync(p)) return null;
  const text = fs.readFileSync(p, 'utf8');
  // Look for the first "Untraceable words: N" or "total violations: N" style line.
  const patterns = [
    /Untraceable[^:]*:\s*\*?\*?\s*(\d+)/i,
    /Total\s+violations:\s*\*?\*?\s*(\d+)/i,
    /violation count[^:]*:\s*\*?\*?\s*(\d+)/i,
    /cards with untraced words:\s*\*?\*?\s*(\d+)/i,
  ];
  for (const re of patterns) {
    const m = text.match(re);
    if (m) return parseInt(m[1], 10);
  }
  return null;
}

// ── Collect state ──
const report = { date: today(), langs: {} };
for (const lang of LANGS) {
  const v = runValidator(lang);
  if (!v) { report.langs[lang] = { error: 'validator-failed' }; continue; }
  const pp63 = findPp63Baseline(lang);
  report.langs[lang] = {
    teach: v.totals.teach,
    production: v.totals.production,
    pp8_hint: v.violations.pp8_hint,
    pp8_visual: v.violations.pp8_visual,
    pp43: v.violations.pp43,
    pp48: v.violations.pp48,
    pp64: v.violations.pp64_untested,
    pp67_under: v.violations.pp67_under,
    pp67_total: v.perUnit?.length ?? 0,
    pp63_untraced: pp63,
  };
}

// ── Build queue items ──
const items = [];
for (const [lang, s] of Object.entries(report.langs)) {
  if (s.error) continue;
  if (s.pp8_hint > 0) items.push({
    id: `PP8-HINT-${lang.toUpperCase()}`, priority: 'P0',
    desc: `${s.pp8_hint} PP8 hint leaks remain in ${lang}. Run validate_all.cjs --fix-hints after manual hint rewrite review.`,
  });
  if (s.pp8_visual > 0) items.push({
    id: `PP8-VISUAL-${lang.toUpperCase()}`, priority: 'P0',
    desc: `${s.pp8_visual} PP8 visual leaks in ${lang}. Rewrite questions to avoid exposing answer word.`,
  });
  if (s.pp43 > 0) items.push({
    id: `PP43-SPLIT-${lang.toUpperCase()}`, priority: 'P1',
    desc: `${s.pp43} over-dense lessons (>32 steps) in ${lang}. Split by lesson-L-index.`,
  });
  if (s.pp48 > 0) items.push({
    id: `PP48-${lang.toUpperCase()}`, priority: 'P0',
    desc: `${s.pp48} multi-blank fb steps in ${lang}. Convert to drag_fill or split into single-blank fb.`,
  });
  if (s.pp64 > 0) items.push({
    id: `PP64-${lang.toUpperCase()}`, priority: 'P1',
    desc: `${s.pp64} untested teach cards in ${lang}. Add production-mode retrieval per teach card (no filler — Rule PP66).`,
  });
  if (s.pp67_under > 0) items.push({
    id: `PP67-REMEDIATION-${lang.toUpperCase()}`, priority: s.pp67_under > 20 ? 'P2' : 'P1',
    desc: `${s.pp67_under}/${s.pp67_total} units under production-mode minimum in ${lang}. Add fb/drag_fill with target-language answers using taught vocabulary.`,
  });
  if (s.pp63_untraced && s.pp63_untraced > 0) items.push({
    id: `PP63-${lang.toUpperCase()}`, priority: s.pp63_untraced > 1000 ? 'P2' : 'P1',
    desc: `${s.pp63_untraced} untraced example words in ${lang}. Either add teach cards or rewrite examples to use prior vocabulary.`,
  });
}

// Sort by priority then id.
const PRIO_RANK = { P0: 0, P1: 1, P2: 2, P3: 3 };
items.sort((a, b) => (PRIO_RANK[a.priority] - PRIO_RANK[b.priority]) || a.id.localeCompare(b.id));

// ── Render markdown ──
function fmtLangRow(lang, s) {
  if (s.error) return `| ${lang} | _validator failed_ | — | — | — | — | — | — |`;
  const status =
    (s.pp8_hint + s.pp8_visual + s.pp43 + s.pp48 === 0) ? 'PASS-critical' : 'FAIL-critical';
  return `| ${lang} | ${s.teach} | ${s.production} | ${s.pp8_hint} | ${s.pp8_visual} | ${s.pp43} | ${s.pp48} | ${s.pp64} | ${s.pp67_under}/${s.pp67_total} | ${s.pp63_untraced ?? '—'} | ${status} |`;
}

const md = [];
md.push(`# Autonomous Queue Snapshot — ${report.date}`);
md.push('');
md.push('> Auto-generated by `scripts/generate_queue.cjs`. Do not hand-edit this file — edit the generator or the validators it consumes.');
md.push('>');
md.push('> The canonical queue is `docs/AUTONOMOUS_QUEUE.md`. This snapshot reflects validator state at generation time and feeds queue updates.');
md.push('');
md.push('## Summary');
md.push('');
md.push('| Language | Teach | Prod | PP8-H | PP8-V | PP43 | PP48 | PP64 | PP67 under/total | PP63 untraced | Status |');
md.push('|----------|-------|------|-------|-------|------|------|------|-------------------|----------------|--------|');
for (const lang of LANGS) md.push(fmtLangRow(lang, report.langs[lang]));
md.push('');
md.push('## Derived queue items');
md.push('');
if (items.length === 0) {
  md.push('_No validator-derived items. Queue state is clean._');
} else {
  let currentPrio = '';
  for (const it of items) {
    if (it.priority !== currentPrio) {
      md.push('');
      md.push(`### ${it.priority}`);
      md.push('');
      currentPrio = it.priority;
    }
    md.push(`- **${it.id}** — ${it.desc}`);
  }
}
md.push('');
md.push('## Regenerate');
md.push('');
md.push('```');
md.push('node scripts/generate_queue.cjs');
md.push('```');
md.push('');

const outPath = outArg ||
  path.join(__dirname, '..', 'docs', 'audits', `queue_snapshot_${report.date}.md`);

if (dryRun) {
  process.stdout.write(md.join('\n'));
} else {
  fs.writeFileSync(outPath, md.join('\n'), 'utf8');
  console.log(`Wrote ${outPath}`);
  console.log(`Derived ${items.length} queue items across ${Object.keys(report.langs).length} languages.`);
}
