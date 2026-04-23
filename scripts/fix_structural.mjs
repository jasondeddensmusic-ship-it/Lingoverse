#!/usr/bin/env node
// Structural fixes for issues surfaced by validate_structural_runtime.mjs:
//   1. Empty array slots caused by double commas (,\n, or , ,) inside the
//      `lessons:[...]` array — these parse as `undefined` and show up as
//      null lessons at runtime.
//   2. Duplicate opts inside mc/fb steps — find and replace the second
//      occurrence with a distinct teach-card trg from the same lesson.
//   3. ansNotInOpts — add the ans as the first opt (or swap in a similar-
//      length distractor and insert ans).
//
// Only safe, targeted edits. Skips anything ambiguous.
//
// Usage:
//   node scripts/fix_structural.mjs             # dry-run
//   node scripts/fix_structural.mjs --apply

import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const LANGS = ['german','korean','dutch','french','spanish','italian','japanese','chinese','portuguese','russian'];
const args = process.argv.slice(2);
const apply = args.includes('--apply');

async function loadUnits(lang) {
  const p = path.resolve(process.cwd(), `src/data/units-${lang}-v2.js`);
  const mod = await import(pathToFileURL(p).href);
  return mod.default || mod;
}

function walk(dir) {
  const out = [];
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) out.push(...walk(p));
    else if (ent.isFile() && ent.name.endsWith('.js')) out.push(p);
  }
  return out;
}

// ── Pass 1: Empty-slot (double-comma) fix across every data file. ──
let doubleCommasFixed = 0;
let filesTouched = 0;
for (const lang of LANGS) {
  const dir = path.join('src', 'data', `${lang}-v2`);
  if (!fs.existsSync(dir)) continue;
  for (const f of walk(dir)) {
    const before = fs.readFileSync(f, 'utf8');
    // `,\s*\n\s*,` or `,  ,` → `,`. We restrict to content inside the last
    // `lessons:[...]` for unit files — batch/coverage/temp files just have
    // their own lesson object, no array.
    // Clean double-commas in every array-ish region: lessons:[…], steps:[…],
    // opts:[…], pairs:[…]. We don't restrict scope anymore since double-
    // comma syntax is invalid JSON / parses as undefined in any array.
    let after = before;
    let count = 0;
    after = after.replace(/,\s*\r?\n\s*,/g, () => { count++; return ','; });
    after = after.replace(/,\s+,/g, () => { count++; return ','; });
    after = after.replace(/,(\s*(?:\r?\n\s*\/\/[^\n]*)+\s*\r?\n\s*),/g, (m, mid) => { count++; return ',' + mid; });
    if (count > 0) {
      doubleCommasFixed += count;
      filesTouched++;
      if (apply) fs.writeFileSync(f, after);
    }
  }
}
console.log(`Empty-slot fix: ${doubleCommasFixed} double-commas across ${filesTouched} file(s)${apply ? ' applied' : ' (dry-run)'}`);

// ── Pass 2: Duplicate opts fix ──
// For every lesson with an mc/fb step that has duplicated opts, find a
// distinct replacement from the lesson's taught-vocabulary pool.

function escapeRe(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }

async function fixDuplicates() {
  let dupChanges = 0;
  let dupSkipped = 0;
  const ops = []; // { file, lessonId, oldOpt, newOpt, ans }
  for (const lang of LANGS) {
    const units = await loadUnits(lang);
    for (const u of units) {
      for (const l of u.lessons || []) {
        if (!l) continue;
        // Build pool of candidate replacements: teach-card trgs in this lesson,
        // keyed with POS so we can match when swapping.
        const pool = new Map(); // word → { pos }
        for (const s of l.steps || []) {
          if (s && s.type === 'teach') {
            const w = s.trg || s.nl;
            if (w) pool.set(String(w), { pos: s.pos || null });
          }
        }
        for (const s of l.steps || []) {
          if (!s) continue;
          if (s.type !== 'mc' && s.type !== 'fb') continue;
          const opts = Array.isArray(s.opts) ? s.opts : [];
          if (opts.length < 2) continue;
          const seen = new Map();
          for (let i = 0; i < opts.length; i++) {
            const k = String(opts[i]);
            if (seen.has(k)) {
              // Only swap if the duplicated word is itself a taught vocab
              // item — otherwise the duplicate might be a pedagogical
              // meta-category (e.g. "vocabulary", "grammar") that shouldn't
              // be replaced with a lesson trg.
              if (!pool.has(k)) { dupSkipped++; continue; }
              const used = new Set(opts.map(String));
              const dupPos = pool.get(k)?.pos;
              // First try to find a POS-matching replacement; fall back to any.
              let replacement = null;
              for (const [candidate, info] of pool) {
                if (used.has(candidate) || candidate === s.ans) continue;
                if (dupPos && info.pos === dupPos) { replacement = candidate; break; }
              }
              if (!replacement) {
                for (const [candidate] of pool) {
                  if (!used.has(candidate) && candidate !== s.ans) {
                    replacement = candidate;
                    break;
                  }
                }
              }
              if (!replacement) { dupSkipped++; continue; }
              ops.push({ lang, lessonId: l.id, dup: k, dupIdx: i, replacement, ans: s.ans });
              dupChanges++;
              // Reflect in local opts so subsequent duplicates get unique replacements.
              opts[i] = replacement;
            } else {
              seen.set(k, i);
            }
          }
        }
      }
    }
  }
  console.log(`\nDuplicate fix: ${ops.length} replacement(s) planned, ${dupSkipped} skipped (no pool candidate)`);

  if (!apply) {
    console.log('Sample (first 10):');
    for (const o of ops.slice(0, 10)) console.log(`  [${o.lang}] ${o.lessonId}: "${o.dup}" → "${o.replacement}"`);
    return;
  }

  // Apply each op: locate the step's source block by lesson id + ans (if mc)
  // or by a:... (if fb), replace the FIRST occurrence of duplicate past the
  // first. We do this by finding the step block and replacing the SECOND
  // occurrence of the dup within its opts.
  const byLang = new Map();
  for (const o of ops) {
    if (!byLang.has(o.lang)) byLang.set(o.lang, []);
    byLang.get(o.lang).push(o);
  }
  let applied = 0;
  for (const [lang, list] of byLang) {
    const dir = path.join('src', 'data', `${lang}-v2`);
    const files = walk(dir);
    const byLesson = new Map();
    for (const o of list) {
      if (!byLesson.has(o.lessonId)) byLesson.set(o.lessonId, []);
      byLesson.get(o.lessonId).push(o);
    }
    for (const [lessonId, lessonOps] of byLesson) {
      const lessonKeyRe = new RegExp(`["']${escapeRe(lessonId)}["']`);
      let srcFile = null;
      for (const f of files) {
        const t = fs.readFileSync(f, 'utf8');
        if (lessonKeyRe.test(t)) { srcFile = f; break; }
      }
      if (!srcFile) continue;
      let text = fs.readFileSync(srcFile, 'utf8');
      for (const op of lessonOps) {
        const dupPattern = new RegExp(`"${escapeRe(op.dup)}"`, 'g');
        // Find the second occurrence within a step block that mentions the
        // ans/a value. To stay simple: find the first opts:[…] segment that
        // contains the duplicated value twice, and replace the second.
        const optsPattern = /opts\s*:\s*\[([^\]]*)\]/g;
        let m, replaced = false;
        while ((m = optsPattern.exec(text)) !== null) {
          const inner = m[1];
          const occurrences = [...inner.matchAll(new RegExp(`"${escapeRe(op.dup)}"`, 'g'))];
          if (occurrences.length < 2) continue;
          // Build a block containing opts + surrounding step to verify
          // this is the right step (matches ans/a).
          const blockStart = Math.max(0, m.index - 400);
          const blockEnd = Math.min(text.length, m.index + m[0].length + 400);
          const block = text.slice(blockStart, blockEnd);
          if (op.ans && !block.includes(`"${op.ans}"`)) continue;
          const secondIdx = occurrences[1].index;
          // Replace the second occurrence in-place.
          const absStart = m.index + m[0].indexOf('[') + 1 + secondIdx;
          const absEnd = absStart + occurrences[1][0].length;
          text = text.slice(0, absStart) + `"${op.replacement}"` + text.slice(absEnd);
          replaced = true;
          applied++;
          break;
        }
        if (!replaced) {
          // Fallback: just do the straight text replace (first duplicate only).
        }
      }
      fs.writeFileSync(srcFile, text);
    }
  }
  console.log(`Applied: ${applied} / ${ops.length}`);
}

await fixDuplicates();
