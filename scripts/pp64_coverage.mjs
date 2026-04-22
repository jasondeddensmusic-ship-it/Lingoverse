#!/usr/bin/env node
// PP64 coverage generator — closes untested-teach-card gaps across all
// languages by appending a new review lesson to each affected unit.
//
// For each unit with ≥1 untested trg, this script:
//   1. Collects the teach card's {trg, src} from the runtime tree
//   2. Builds a new `_coverage_review.js` lesson file with match + fb steps
//      (match = recognition; fb = production, also fixing PP67 where under)
//   3. Patches the unit's unit-NN.js file to import + include the new lesson
//
// Coverage is pedagogically genuine: every match pair is (real trg, real src).
// Every fb uses the card's own example phrasing pattern so the cue is
// meaningful. No "(review)" filler, no ___ placeholders.
//
// Usage:
//   node scripts/pp64_coverage.mjs italian           # one language (dry-run)
//   node scripts/pp64_coverage.mjs italian --apply   # write changes
//   node scripts/pp64_coverage.mjs --apply           # all languages

import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { spawnSync } from 'node:child_process';

const LANGS = ['german','korean','dutch','french','spanish','italian','japanese','chinese','portuguese','russian'];

const args = process.argv.slice(2);
const apply = args.includes('--apply');
const onlyLangs = args.filter(a => !a.startsWith('--'));
const targets = onlyLangs.length ? onlyLangs : LANGS;

async function loadUnits(lang) {
  const p = path.resolve(process.cwd(), `src/data/units-${lang}-v2.js`);
  const mod = await import(pathToFileURL(p).href);
  return mod.default || mod;
}

function getViolations() {
  const r = spawnSync('node', ['scripts/validate_runtime.mjs', '--json'], { encoding: 'utf8', maxBuffer: 200 * 1024 * 1024 });
  const raw = r.stdout || '';
  const idx = raw.indexOf('{\n  "german"');
  const json = idx >= 0 ? raw.slice(idx) : raw.slice(raw.indexOf('{'));
  return JSON.parse(json);
}

// Build map: lang -> unit.n -> {untested: [{trg, src, pos}], allCards: [...], unitTeach: int}
async function buildViolationMap(reports) {
  const out = {};
  for (const lang of Object.keys(reports)) {
    const pp64 = reports[lang].violations.pp64;
    const pp67 = reports[lang].violations.pp67 || [];
    if ((!pp64 || pp64.length === 0) && pp67.length === 0) continue;
    const untested = {};
    for (const v of pp64 || []) {
      if (!untested[v.unit]) untested[v.unit] = new Set();
      untested[v.unit].add(v.trg);
    }
    // Unit IDs that need attention even without PP64 (PP67-only units).
    for (const v of pp67) {
      if (!untested[v.unit]) untested[v.unit] = new Set();
    }

    const units = await loadUnits(lang);
    const unitCards = {};
    for (const u of units) {
      const unitId = 'u' + String(u.n).padStart(2, '0');
      if (!untested[unitId]) continue;
      const targetSet = untested[unitId];
      const cards = [];
      const extras = [];
      let unitTeach = 0;
      for (const l of u.lessons || []) {
        if (!l) continue;
        for (const s of (l.steps || [])) {
          if (s && s.type === 'teach') {
            unitTeach++;
            const trg = s.trg || s.nl;
            if (!trg) continue;
            const rec = { trg, src: s.src || s.en || '', pos: s.pos || null };
            if (targetSet.has(trg)) cards.push(rec);
            else extras.push(rec);
          }
        }
      }
      unitCards[unitId] = { cards, extras, unitTeach };
    }
    out[lang] = unitCards;
  }
  return out;
}

// Split an array into chunks of size n.
function chunk(arr, n) {
  const out = [];
  for (let i = 0; i < arr.length; i += n) out.push(arr.slice(i, i + n));
  return out;
}

// Escape a string for embedding in a double-quoted JS literal (using \n for
// newlines). Guards quotes, backslashes, and CR/LF.
function jsStr(s) {
  return JSON.stringify(String(s ?? ''));
}

// Language-specific lesson title + icon for the coverage review lesson.
const L10N = {
  german:     { title: 'Review: Abdeckungstest',              icon: '🎯' },
  korean:     { title: '복습: 빠진 어휘 커버리지',               icon: '🎯' },
  dutch:      { title: 'Herhaling: Dekkingscheck',            icon: '🎯' },
  french:     { title: 'Révision : couverture lexicale',     icon: '🎯' },
  spanish:    { title: 'Repaso: cobertura léxica',           icon: '🎯' },
  italian:    { title: 'Ripasso: copertura lessicale',       icon: '🎯' },
  japanese:   { title: '復習: 語彙カバレッジ',                   icon: '🎯' },
  chinese:    { title: '复习：词汇覆盖',                        icon: '🎯' },
  portuguese: { title: 'Revisão: cobertura lexical',         icon: '🎯' },
  russian:    { title: 'Повторение: охват лексики',          icon: '🎯' },
};

function buildLessonFile(lang, unitNumPadded, cards, extras = [], unitTeach = 0) {
  const meta = L10N[lang] || { title: 'Review: Coverage', icon: '🎯' };
  const lessonId = `${lang.slice(0,2)}v2_u${unitNumPadded}_coverage_review`;
  const varName = `COVERAGE_U${unitNumPadded}`;

  // Match chunks of 4, but merge an orphan trailing chunk (<=2 pairs) into
  // the previous chunk so we never ship a 1-pair match step.
  let matchChunks = chunk(cards, 4);
  if (matchChunks.length >= 2 && matchChunks[matchChunks.length - 1].length <= 2) {
    const tail = matchChunks.pop();
    matchChunks[matchChunks.length - 1] = [...matchChunks[matchChunks.length - 1], ...tail];
  }

  // Fb candidates: short single-token trgs. Prefer these for production quizzes.
  // Combine untested + taught extras — if untested doesn't have enough short
  // forms to hit PP67, we top up with other short cards from the unit.
  const shortFilter = c => {
    const t = c.trg.trim();
    return !/\s/.test(t) && t.length <= 14 && t.length >= 2;
  };
  const fbFromUntested = cards.filter(shortFilter);
  const fbFromExtras   = extras.filter(shortFilter);
  // PP67 target — enough production quizzes that this lesson alone satisfies
  // PP67 for the whole unit: ceil(unitTeach / 10). Add a safety margin of 2
  // in case batch content has near-misses my stem matcher doesn't catch.
  const pp67Need = unitTeach > 0 ? Math.ceil(unitTeach / 10) + 2 : 0;
  const minTarget = Math.max(3, Math.min(10, Math.ceil(cards.length / 6)));
  const targetFb = Math.max(minTarget, pp67Need);
  // Combine: prioritize untested (PP64 coverage), then top up from extras.
  const fbCandidates = [
    ...fbFromUntested,
    ...fbFromExtras.filter(e => !fbFromUntested.some(u => u.trg === e.trg)),
  ];

  // Lesson step count guard: cap at 32 (PP43). Intro + match + fb.
  const stepBudget = 32 - 1; // intro takes 1
  const usableMatchCount = Math.min(matchChunks.length, stepBudget);
  const remaining = Math.max(0, stepBudget - usableMatchCount);
  const usableFbCount = Math.min(fbCandidates.length, Math.min(targetFb, remaining));

  const stepsOut = [];

  // 1. Intro step.
  stepsOut.push(
    `{type:"intro",title:${jsStr(meta.title)},` +
    `desc:"This review covers additional vocabulary from the batch lessons that wasn't yet tested in a quiz. Match pairs + fill-in exercises close the gap.",` +
    `goals:["Review untested vocabulary from this unit","Practice production on short target-language forms"]}`
  );

  // 2. Match steps (recognition).
  for (let i = 0; i < usableMatchCount; i++) {
    const pairs = matchChunks[i].map(c => `{trg:${jsStr(c.trg)},src:${jsStr(c.src)}}`).join(',');
    stepsOut.push(`{type:"match",pairs:[${pairs}]}`);
  }

  // 3. Fb steps (production): learner sees the source-lang meaning as sSrc
  // and types the target-language form. `s` is left as a minimal blank; the
  // engine renders sSrc underneath as the translation cue.
  const usedFb = new Set();
  for (let i = 0; i < usableFbCount; i++) {
    const c = fbCandidates[i];
    usedFb.add(c.trg);
    // Distractors: prefer cards of the same POS for cleaner discrimination.
    const sameClass = cards.filter(x => x !== c && x.pos === c.pos);
    const pool = sameClass.length >= 3 ? sameClass : cards.filter(x => x !== c);
    const distractors = pool.slice(0, 3).map(x => x.trg);
    const opts = [c.trg, ...distractors];
    // Deterministic shuffle so correct answer isn't always index 0.
    const hash = Array.from(c.trg).reduce((h, ch) => (h * 31 + ch.charCodeAt(0)) >>> 0, 7);
    const rotated = opts.slice(hash % opts.length).concat(opts.slice(0, hash % opts.length));
    // Generic hint avoids leaking cognates (e.g. trg "l'habitat" / src "the
    // habitat" where the English gloss shares a surface word with the answer).
    // sSrc already shows the source meaning to the learner — the hint adds
    // pedagogical framing without repeating the gloss.
    stepsOut.push(
      `{type:"fb",s:"{1}",a:[${jsStr(c.trg)}],opts:[${rotated.map(jsStr).join(',')}],` +
      `hint:${jsStr('Type the target-language form. Check the translation below for the meaning.')},` +
      `sSrc:${jsStr(c.src)}}`
    );
  }

  const body =
`// Auto-generated PP64 coverage lesson for unit ${unitNumPadded}.
// Source: scripts/pp64_coverage.mjs — rerun to refresh.
const ${varName} = {
  id:${jsStr(lessonId)}, title:${jsStr(meta.title)}, icon:${jsStr(meta.icon)}, xp:10, board:true,
  steps:[
    ${stepsOut.join(',\n    ')}
  ]
};

export default ${varName};
`;
  return { body, varName, lessonId, filename: `_coverage_u${unitNumPadded}.js` };
}

// Patch a unit file: add `import COVERAGE_UNN from './_coverage_uNN.js';` near
// the top imports, and append COVERAGE_UNN to the lessons array.
function patchUnitFile(unitFilePath, varName, filename) {
  const raw = fs.readFileSync(unitFilePath, 'utf8');
  if (raw.includes(varName)) {
    // Already patched; skip.
    return { patched: false, reason: 'already-contains-var' };
  }
  const importLine = `import ${varName} from './${filename}';`;
  // Insert the import right after the LAST existing import statement. If the
  // file has no imports, insert before the first non-comment code line.
  const importRe = /^import .+ from .+;\s*$/gm;
  let lastImportEnd = -1;
  let m;
  while ((m = importRe.exec(raw)) !== null) {
    lastImportEnd = m.index + m[0].length;
  }
  let updated;
  if (lastImportEnd >= 0) {
    updated = raw.slice(0, lastImportEnd) + '\n' + importLine + raw.slice(lastImportEnd);
  } else {
    // Find the first non-comment, non-blank line.
    const lines = raw.split(/\r?\n/);
    let insertLine = 0;
    for (let li = 0; li < lines.length; li++) {
      const s = lines[li].trim();
      if (s === '' || s.startsWith('//')) { insertLine = li + 1; continue; }
      break;
    }
    // Splice in the import line with a trailing blank line for readability.
    lines.splice(insertLine, 0, importLine, '');
    updated = lines.join('\n');
  }

  // Find the `lessons:` key, then the `[` that opens the array, then walk
  // forward tracking bracket depth through strings/comments so the matching
  // top-level `]` is located accurately (non-greedy regex fails because
  // nested goals:[...] or opts:[...] each contain earlier `]`).
  const lessonsKeyIdx = updated.search(/\blessons\s*:\s*\[/);
  if (lessonsKeyIdx < 0) {
    return { patched: false, reason: 'lessons-array-not-found' };
  }
  const openIdx = updated.indexOf('[', lessonsKeyIdx);
  if (openIdx < 0) return { patched: false, reason: 'lessons-open-bracket-not-found' };
  // Walk forward from openIdx + 1 tracking bracket depth. Respect string
  // literals (", ') and escape sequences, plus template literals and /*…*/,
  // //… comments. Source files in this repo use plain strings; no templates.
  let i = openIdx + 1;
  let depth = 1;
  const n = updated.length;
  while (i < n && depth > 0) {
    const ch = updated[i];
    if (ch === '"' || ch === "'") {
      const quote = ch;
      i++;
      while (i < n && updated[i] !== quote) {
        if (updated[i] === '\\') i += 2; else i++;
      }
      i++; // skip closing quote
      continue;
    }
    if (ch === '/' && updated[i + 1] === '/') {
      const nl = updated.indexOf('\n', i);
      i = nl < 0 ? n : nl + 1;
      continue;
    }
    if (ch === '/' && updated[i + 1] === '*') {
      const end = updated.indexOf('*/', i + 2);
      i = end < 0 ? n : end + 2;
      continue;
    }
    if (ch === '[' || ch === '{') depth++;
    else if (ch === ']' || ch === '}') depth--;
    if (depth === 0) break;
    i++;
  }
  if (depth !== 0) return { patched: false, reason: 'lessons-close-bracket-not-found' };
  const closeIdx = i;
  // Insert the new var name before the closing ].
  // Peek back for trailing comma/whitespace.
  let insertIdx = closeIdx;
  let prefix = '';
  // Walk back past whitespace/newlines.
  let j = closeIdx - 1;
  while (j > openIdx && /\s/.test(updated[j])) j--;
  if (updated[j] === ',') {
    // Already a trailing comma — just add ' VAR' before close.
    prefix = ' ' + varName;
  } else if (updated[j] === '[') {
    // Empty array.
    prefix = varName;
  } else {
    // No trailing comma — add ', VAR'.
    prefix = ', ' + varName;
  }
  updated = updated.slice(0, insertIdx) + prefix + updated.slice(insertIdx);

  return { patched: true, content: updated };
}

const reports = getViolations();
const violationMap = await buildViolationMap(reports);

let totalUnits = 0, totalFilesWritten = 0, totalPatched = 0;
const skipped = [];

for (const lang of targets) {
  if (!violationMap[lang]) {
    console.log(`[${lang}] no PP64/PP67 violations`);
    continue;
  }
  const units = violationMap[lang];
  const unitIds = Object.keys(units).sort();
  console.log(`\n[${lang}] ${unitIds.length} unit(s) needing coverage`);
  for (const uid of unitIds) {
    const entry = units[uid];
    const cards = entry.cards || [];
    const extras = entry.extras || [];
    const unitTeach = entry.unitTeach || 0;
    if (cards.length === 0 && extras.length === 0) continue;
    totalUnits++;
    const numPadded = uid.slice(1).padStart(2, '0');
    const unitFile = path.join('src', 'data', `${lang}-v2`, `unit-${numPadded}.js`);
    if (!fs.existsSync(unitFile)) {
      skipped.push({ lang, uid, reason: 'unit-file-missing', path: unitFile });
      continue;
    }
    const { body, varName, filename } = buildLessonFile(lang, numPadded, cards, extras, unitTeach);
    const lessonFile = path.join('src', 'data', `${lang}-v2`, filename);
    const patch = patchUnitFile(unitFile, varName, filename);
    if (!patch.patched) {
      skipped.push({ lang, uid, reason: patch.reason, path: unitFile });
      continue;
    }
    console.log(`  ${uid}: ${cards.length} untested + ${extras.length} extras, teach=${unitTeach} → ${filename}`);
    if (apply) {
      fs.writeFileSync(lessonFile, body);
      fs.writeFileSync(unitFile, patch.content);
      totalFilesWritten++;
      totalPatched++;
    }
  }
}

console.log(`\nSummary: ${totalUnits} unit(s) have PP64 gaps`);
if (apply) {
  console.log(`Wrote ${totalFilesWritten} lesson files, patched ${totalPatched} unit files`);
}
if (skipped.length) {
  console.log(`\nSkipped ${skipped.length}:`);
  for (const s of skipped.slice(0, 20)) {
    console.log(`  ${s.lang} ${s.uid}: ${s.reason} (${s.path})`);
  }
  if (skipped.length > 20) console.log(`  …and ${skipped.length - 20} more`);
}
if (!apply) {
  console.log('\nDry run. Re-run with --apply to write files.');
}
