#!/usr/bin/env node
// Replace the canonical Italian filler-distractor pattern
// ["la finestra","il tavolo","la bicicletta"] with three topic-appropriate
// Italian terms pulled from the same lesson's taught vocabulary.
//
// Why: these three were auto-inserted by an older "fill-in-distractors"
// pass. They're unrelated to the MC topic and make the quiz trivially
// solvable. Also contribute to PP8 length leaks (correct answer is always
// the topic-specific phrase, all 3 distractors are generic short nouns).

import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const apply = process.argv.includes('--apply');
const FILLERS = new Set(['la finestra', 'il tavolo', 'la bicicletta']);

const LANGS = ['italian'];

async function loadUnits(lang) {
  const p = path.resolve(process.cwd(), `src/data/units-${lang}-v2.js`);
  return (await import(pathToFileURL(p).href)).default;
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

// For each lesson: find filler-using MCs, replace fillers with taught trgs
// from same lesson (excluding the ans).
async function processLang(lang) {
  const units = await loadUnits(lang);
  const fixes = []; // { lessonId, mcAns, oldOpts, newOpts }
  for (const u of units) {
    for (const l of u.lessons || []) {
      if (!l) continue;
      // Pool: trgs from teach cards + match pairs in this lesson.
      const pool = [];
      for (const s of l.steps || []) {
        if (!s) continue;
        if (s.type === 'teach' && (s.trg || s.nl)) pool.push(String(s.trg || s.nl));
        if (s.type === 'match' && Array.isArray(s.pairs)) {
          for (const p of s.pairs) if (p.trg) pool.push(String(p.trg));
        }
      }
      const uniquePool = [...new Set(pool)];
      for (const s of l.steps || []) {
        if (!s || s.type !== 'mc' || !Array.isArray(s.opts)) continue;
        const fillerCount = s.opts.filter(o => FILLERS.has(String(o))).length;
        if (fillerCount < 2) continue; // only fix when 2+ fillers present
        const ans = String(s.ans || '');
        const alreadyUsed = new Set(s.opts.map(String));
        // Pick 3 replacements from pool, excluding ans + opts.
        const replacements = [];
        for (const w of uniquePool) {
          if (alreadyUsed.has(w)) continue;
          if (w === ans) continue;
          replacements.push(w);
          alreadyUsed.add(w);
          if (replacements.length >= 3) break;
        }
        if (replacements.length < fillerCount) continue;
        let newOpts = [...s.opts];
        let replIdx = 0;
        for (let i = 0; i < newOpts.length; i++) {
          if (FILLERS.has(String(newOpts[i]))) {
            newOpts[i] = replacements[replIdx++];
          }
        }
        fixes.push({ lessonId: l.id, mcAns: ans, oldOpts: s.opts.map(String), newOpts });
      }
    }
  }
  return fixes;
}

function jsStr(s) { return JSON.stringify(String(s ?? '')); }

for (const lang of LANGS) {
  const fixes = await processLang(lang);
  console.log(`[${lang}] ${fixes.length} MCs to fix`);
  if (!apply) {
    for (const f of fixes.slice(0, 5)) {
      console.log('  ', f.lessonId, 'ans:', f.mcAns);
      console.log('    old:', JSON.stringify(f.oldOpts));
      console.log('    new:', JSON.stringify(f.newOpts));
    }
    continue;
  }
  // Apply: for each fix, find source file + replace opts literal.
  const dir = path.join('src', 'data', `${lang}-v2`);
  const files = walk(dir);
  let applied = 0;
  for (const fix of fixes) {
    const lessonKey = `"${fix.lessonId}"`;
    let srcFile = null;
    for (const f of files) {
      const t = fs.readFileSync(f, 'utf8');
      if (t.includes(lessonKey)) { srcFile = f; break; }
    }
    if (!srcFile) continue;
    let text = fs.readFileSync(srcFile, 'utf8');
    // Build the old opts literal exactly as it would appear in source.
    const oldLiteral = '[' + fix.oldOpts.map(jsStr).join(',') + ']';
    const newLiteral = '[' + fix.newOpts.map(jsStr).join(',') + ']';
    if (text.includes(oldLiteral)) {
      text = text.replace(oldLiteral, newLiteral);
      fs.writeFileSync(srcFile, text);
      applied++;
    }
  }
  console.log(`  Applied: ${applied} / ${fixes.length}`);
}
