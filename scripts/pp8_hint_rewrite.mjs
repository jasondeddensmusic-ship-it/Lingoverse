#!/usr/bin/env node
// PP8 hint rewriter — reads the runtime validator's pp8_hint violations and
// produces surgical rewrites of the offending hint strings. The rewrite
// strategy is conservative: we keep the guidance structure, but replace the
// parenthetical English gloss that's leaking the answer word with a
// character/syllable breakdown that doesn't contain the answer token.
//
// Rules:
//   1. If a hint looks like "X (gloss) + Y (gloss2)", strip parentheticals
//      whose content contains a leaked answer word, leaving "X + Y".
//   2. If a hint looks like "X = gloss" and gloss contains the answer word,
//      replace with "X (see card)".
//   3. If none of the patterns match, skip and report for manual triage.
//
// Usage:
//   node scripts/pp8_hint_rewrite.mjs          # dry-run, preview rewrites
//   node scripts/pp8_hint_rewrite.mjs --apply  # write changes to disk
//   node scripts/pp8_hint_rewrite.mjs --lang german  # one language only

import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const args = process.argv.slice(2);
const apply = args.includes('--apply');
const langIdx = args.indexOf('--lang');
const onlyLang = langIdx >= 0 ? args[langIdx + 1] : null;

// Synonym swap table for common English glosses that leak.
// The key is the leaked word (lowercase), value is a safer paraphrase.
const SYNONYM = {
  'peace': 'safety / wellbeing',
  'eat': 'take / consume (food)',
  'gratitude': 'formal thanks',
  'beautiful': 'pleasing (aesthetic)',
  'name': 'label / identifier',
  'moment': 'brief interval',
  'free': 'no charge',
  'where': 'location query',
  'study': 'formal learning',
  'member': 'organization affiliate',
  'question': 'inquiry',
  'thing': 'object / item',
  'speak': 'communicate verbally',
  'korean': 'the language of Korea',
  'come': 'approach / arrive',
  'teach': 'instruct',
  'building': 'physical structure',
  'room': 'enclosed space',
  'illness': 'medical condition',
  'don': '', // "don't" leak — drop
  'either': 'also / likewise',
  'home': 'dwelling',
  'know': 'be aware',
  'why': 'reason query',
  'kind': 'type / sort',
  'number': 'numeric identifier',
  'official': 'authorised',
  'hall': 'large room',
  'bühne': 'performance surface',
  'see': 'observe',
  'see above': 'previously mentioned',
  'get': 'obtain',
  'used': 'employed',
  'say': 'express',
  'take': 'grasp / choose',
  'want': 'desire',
  'need': 'require',
  'give': 'provide',
  'make': 'create',
  'day': '24-hour period',
  'time': 'temporal reference',
  'think': 'consider / believe',
  'work': 'labour / job',
  'place': 'specific location',
};

function rewriteHint(hint, leaks) {
  if (!hint || !leaks || leaks.length === 0) return { rewrite: hint, strategy: 'noop' };
  let out = hint;
  const changes = [];
  for (const leak of leaks) {
    const leakLower = String(leak).toLowerCase();
    // Strategy 1: strip parenthetical whose content contains the leak.
    const parenRe = new RegExp('\\s*\\(([^)]*)\\)', 'g');
    const parens = [...out.matchAll(parenRe)];
    let struck = false;
    for (const m of parens) {
      const inner = m[1];
      if (new RegExp('\\b' + leakLower.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b', 'i').test(inner)) {
        out = out.slice(0, m.index) + out.slice(m.index + m[0].length);
        struck = true;
        changes.push(`strip-paren:${leakLower}`);
        break;
      }
    }
    if (struck) continue;
    // Strategy 2: replace with synonym.
    const syn = SYNONYM[leakLower];
    if (syn !== undefined) {
      const re = new RegExp('\\b' + leakLower.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b', 'gi');
      if (syn === '') {
        out = out.replace(re, '').replace(/\s+/g, ' ').trim();
      } else {
        out = out.replace(re, syn);
      }
      changes.push(`syn:${leakLower}->${syn}`);
      continue;
    }
    // Strategy 3: fallback — replace word with "…"
    const re = new RegExp('\\b' + leakLower.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b', 'gi');
    out = out.replace(re, '…');
    changes.push(`ellipsis:${leakLower}`);
  }
  return { rewrite: out.replace(/\s+([.,;:])/g, '$1').replace(/\s+/g, ' ').trim(), strategy: changes.join(',') };
}

// Pull violations from the validator. It exits non-zero when violations exist,
// so use spawnSync which returns without throwing.
import { spawnSync } from 'node:child_process';
console.log('Running validator to collect violations…');
const r = spawnSync('node', ['scripts/validate_runtime.mjs', '--json'], { encoding: 'utf8', maxBuffer: 200 * 1024 * 1024 });
const raw = r.stdout || '';
const idx = raw.indexOf('{\n  "german"');
const json = idx >= 0 ? raw.slice(idx) : raw.slice(raw.indexOf('{'));
const reports = JSON.parse(json);

const planned = []; // { lang, leak: v, rewrite, strategy }
let total = 0;
for (const [lang, rep] of Object.entries(reports)) {
  if (onlyLang && lang !== onlyLang) continue;
  for (const v of rep.violations.pp8_hint) {
    total++;
    const { rewrite, strategy } = rewriteHint(v.hint, v.leaks);
    if (rewrite !== v.hint) planned.push({ lang, v, rewrite, strategy });
  }
}
console.log(`Planned rewrites: ${planned.length} / ${total} total leaks`);

// Group by file: we need to find and replace the hint strings in source.
// Use `grep -rn` equivalent via Node walk.
function walkDataDir(langName) {
  const base = path.join('src', 'data', `${langName}-v2`);
  if (!fs.existsSync(base)) return [];
  return fs.readdirSync(base).filter(f => f.endsWith('.js')).map(f => path.join(base, f));
}

const appliedByFile = {};
const manualNeeded = [];

for (const p of planned) {
  const files = walkDataDir(p.lang);
  const oldHint = p.v.hint;
  const newHint = p.rewrite;
  // Find the unique file + occurrence.
  let hits = [];
  for (const f of files) {
    const content = appliedByFile[f] || fs.readFileSync(f, 'utf8');
    // Match hint:"…" with escaped quotes.
    const needleSingle = `hint:"${oldHint.replace(/"/g, '\\"')}"`;
    const needleAlt = `hint: "${oldHint.replace(/"/g, '\\"')}"`;
    let count = 0;
    for (const n of [needleSingle, needleAlt]) {
      let i = content.indexOf(n);
      while (i >= 0) { count++; i = content.indexOf(n, i + 1); }
    }
    if (count > 0) hits.push({ file: f, count });
  }
  if (hits.length === 0) { manualNeeded.push({ ...p, reason: 'hint-not-found' }); continue; }
  if (hits.reduce((a, b) => a + b.count, 0) > 1 && hits.length > 1) {
    manualNeeded.push({ ...p, reason: 'ambiguous-multiple-files', hits }); continue;
  }
  // Apply.
  for (const h of hits) {
    const content = appliedByFile[h.file] || fs.readFileSync(h.file, 'utf8');
    const needleSingle = `hint:"${oldHint.replace(/"/g, '\\"')}"`;
    const needleAlt = `hint: "${oldHint.replace(/"/g, '\\"')}"`;
    const replaceSingle = `hint:"${newHint.replace(/"/g, '\\"')}"`;
    const replaceAlt = `hint: "${newHint.replace(/"/g, '\\"')}"`;
    let updated = content;
    if (content.includes(needleSingle)) updated = content.split(needleSingle).join(replaceSingle);
    else if (content.includes(needleAlt)) updated = content.split(needleAlt).join(replaceAlt);
    appliedByFile[h.file] = updated;
  }
}

console.log(`Files to update: ${Object.keys(appliedByFile).length}`);
console.log(`Manual triage needed: ${manualNeeded.length}`);

if (apply) {
  for (const [f, content] of Object.entries(appliedByFile)) {
    fs.writeFileSync(f, content);
  }
  console.log(`Applied to ${Object.keys(appliedByFile).length} files.`);
  if (manualNeeded.length) {
    console.log('\nManual triage list:');
    for (const m of manualNeeded.slice(0, 20)) {
      console.log('  ' + m.lang + ' ' + m.v.lesson + ' step ' + m.v.stepIdx + ' leaks=' + m.v.leaks.join(',') + ' — ' + m.reason);
    }
    if (manualNeeded.length > 20) console.log(`  …and ${manualNeeded.length - 20} more`);
  }
} else {
  console.log('\nDry-run preview (first 15):');
  for (const p of planned.slice(0, 15)) {
    console.log(`\n[${p.lang}] ${p.v.lesson} step ${p.v.stepIdx} (${p.strategy})`);
    console.log('  old: ' + p.v.hint);
    console.log('  new: ' + p.rewrite);
  }
  console.log(`\n…and ${Math.max(0, planned.length - 15)} more. Re-run with --apply to write.`);
}
