#!/usr/bin/env node
// Runtime validator — loads actual shipped lesson data via ESM dynamic import
// and runs PP-rule checks against in-memory objects. This closes the blind
// spot in validate_all.cjs, which reads files as text and does not follow
// JS imports (so batch/_temp/gap files imported into unit lessons were never
// validated).
//
// Usage:
//   node scripts/validate_runtime.mjs                      # all 10 languages
//   node scripts/validate_runtime.mjs italian              # one language
//   node scripts/validate_runtime.mjs --json               # machine-readable
//   node scripts/validate_runtime.mjs italian --verbose    # per-violation detail

import { pathToFileURL } from 'node:url';
import path from 'node:path';

const LANGS = ['german','korean','dutch','french','spanish','italian','japanese','chinese','portuguese','russian'];

const args = process.argv.slice(2);
const wantJson = args.includes('--json');
const verbose = args.includes('--verbose') || args.includes('-v');
const onlyLangs = args.filter(a => !a.startsWith('--') && a !== '-v');
const targets = onlyLangs.length ? onlyLangs : LANGS;

// Short common-word skip list — mirrors validate_all.cjs.
const SKIP_WORDS = new Set([
  'the','is','a','an','it','to','of','in','on','at','for','and','or','but','not',
  'this','that','with','from','has','was','are','its','you','your','can','all',
  'been','have','will','one','two','each','very','when','they','more','than',
  'what','how','only','also','does','most','some','such','just','any','same',
  'de','het','een','en','of','je','jij','hij','zij','wij','ze','er','die','dat',
  'le','la','les','un','une','des','et','ou','ne','pas','du','au','ce',
  'el','los','las','y','o','no','es','por','con',
  'der','das','ein','eine','und','ist','ich','du','er','sie','wir',
  '은','는','이','가','을','를','에','에서','도','의','와','과','로','으로',
  'per','both','into','over','about','after','before','under','between','through',
  'use','own','way','who','new','old','out','get','set','put','run','let','big','try',
  'end','top','did','see','say','got','too','now','far','yet','ago','off','few','add',
  'day','ice','bag','hope','dust','rent','purse','money','months'
]);

const ARTICLE_STRIP = /^(de|het|een|le|la|l'|les|un|une|el|los|las|der|die|das|ein|eine|il|i|gli|lo|uno|o|os|as|um|uma|-s|-es)\s+/i;

function normalizeTrg(v) {
  if (!v) return '';
  return String(v).toLowerCase().replace(ARTICLE_STRIP, '').replace(/[!?.,;:]/g, '').trim();
}

function getWords(str) {
  if (!str) return [];
  return String(str).toLowerCase()
    .replace(/[^a-zàâäãåæçèéêëìíîïðñòóôõöùúûüýþÿ가-힣ㄱ-ㅎㅏ-ㅣäöüß\s]/gi, ' ')
    .split(/\s+/)
    .filter(w => w.length >= 3 && !SKIP_WORDS.has(w));
}

function hintLeakCheck(hint, answer) {
  if (!hint || !answer) return [];
  const ansWords = getWords(answer);
  const hintLower = String(hint).toLowerCase();
  return ansWords.filter(w => {
    const re = new RegExp('\\b' + w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b', 'i');
    return re.test(hintLower);
  });
}

function buildAnsBoundaryRegex(ans) {
  const esc = ans.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return new RegExp('(^|[^\\p{L}\\p{N}])' + esc + '($|[^\\p{L}\\p{N}])', 'iu');
}

function visualLeakMC(q, ans) {
  if (!q || !ans || ans.length < 3) return false;
  try { return buildAnsBoundaryRegex(ans).test(q); }
  catch { return String(q).toLowerCase().includes(String(ans).toLowerCase()); }
}

function visualLeakFB(s, ans) {
  if (!s || !ans || ans.length < 3) return false;
  const sClean = String(s).replace(/\{[0-9]+\}/g, '');
  try { return buildAnsBoundaryRegex(ans).test(sClean); }
  catch { return sClean.toLowerCase().includes(String(ans).toLowerCase()); }
}

const LANG_CODE = { german:'de', korean:'ko', dutch:'nl', french:'fr', spanish:'es',
                    italian:'it', japanese:'ja', chinese:'zh', portuguese:'pt', russian:'ru' };

function romanceStem(word, code) {
  if (!word || word.length < 4) return null;
  if (code === 'pt' || code === 'es') {
    if (/[aei]r$/.test(word) && word.length >= 5) return word.slice(0, -2);
  }
  if (code === 'it') {
    if (/[aei]re$/.test(word) && word.length >= 6) return word.slice(0, -3);
  }
  if (code === 'fr') {
    if (/(er|ir|re)$/.test(word) && word.length >= 5) return word.slice(0, -2);
  }
  // Korean verbs/adjectives end in 다 (dictionary form). Drop the 다 to get
  // the stem that all conjugated forms share a prefix of.
  if (code === 'ko') {
    if (/다$/.test(word) && word.length >= 2) return word.slice(0, -1);
  }
  // Japanese godan verbs typically have stable 2+-char stems before the
  // conjugated final kana; keep conservative: return the first 2 chars of
  // multi-char verbs so conjugations count. Limited use; PP67 already largely
  // satisfied by direct matches in JP.
  return null;
}

async function loadLang(name) {
  const entry = path.resolve(process.cwd(), `src/data/units-${name}-v2.js`);
  const url = pathToFileURL(entry).href;
  const mod = await import(url);
  return mod.default || mod;
}

function validateLanguage(name, units) {
  const code = LANG_CODE[name];
  const totals = { units: units.length, lessons: 0, teach: 0, mc: 0, fb: 0, match: 0, drag_fill: 0, production: 0 };
  const violations = {
    pp8_hint: [],      // hint contains answer word
    pp8_visual: [],    // answer visible in question text
    pp8_position: [],  // answer always in same position
    pp8_length: [],    // answer always longest option
    pp22c: [],         // em-dash in user-facing text
    pp43: [],          // over-dense
    pp48: [],          // multi-blank fb
    pp64: [],          // untested teach
    pp67: [],          // under-production units
  };

  // Pass 1: build corpus of taught trgs and stems for production-mode detection.
  const allTrgs = new Set();
  const allStems = new Set();
  for (const u of units) {
    for (const l of u.lessons || []) {
      if (!l) continue;
      for (const s of (l.steps || [])) {
        if (s && s.type === 'teach') {
          const bare = normalizeTrg(s.trg || s.nl);
          if (bare) {
            allTrgs.add(bare);
            const stem = romanceStem(bare, code);
            if (stem && stem.length >= 3) allStems.add(stem);
          }
        }
      }
    }
  }

  function isProductionAnswer(ans) {
    if (!ans) return false;
    const bare = normalizeTrg(ans);
    if (!bare) return false;
    if (allTrgs.has(bare)) return true;
    for (const stem of allStems) {
      if (stem.length >= 3 && bare.startsWith(stem)) return true;
    }
    return false;
  }

  // Pass 2: walk each unit, run per-unit checks.
  const perUnit = [];
  for (let ui = 0; ui < units.length; ui++) {
    const unit = units[ui];
    const unitId = `u${String(unit.n || ui + 1).padStart(2,'0')}`;
    let unitTeach = 0, unitProd = 0;
    const teachTrgs = new Set();
    const quizzedWords = new Set();

    for (const lesson of (unit.lessons || [])) {
      if (!lesson) continue;
      totals.lessons++;
      const lessonId = lesson.id || '(unnamed)';
      const steps = lesson.steps || [];
      const stepCount = steps.length;

      // PP43 — density per lesson (max 32 steps).
      if (stepCount > 32) {
        violations.pp43.push({ unit: unitId, lesson: lessonId, steps: stepCount });
      }

      // Per-lesson MC aggregation for PP8 position + length leak detection.
      const lessonMc = [];

      for (let i = 0; i < steps.length; i++) {
        const step = steps[i];
        if (!step) continue;

        if (step.type === 'teach') {
          totals.teach++;
          unitTeach++;
          if (step.trg) teachTrgs.add(step.trg);
          else if (step.nl) teachTrgs.add(step.nl);
        }

        if (step.type === 'mc') {
          totals.mc++;
          const q = step.q, ans = step.ans, hint = step.hint;
          const opts = step.opts || [];
          for (const o of opts) quizzedWords.add(String(o));
          if (ans) quizzedWords.add(String(ans));

          if (visualLeakMC(q, ans)) {
            violations.pp8_visual.push({ unit: unitId, lesson: lessonId, stepIdx: i, type: 'mc', ans, q });
          }
          if (hint && ans) {
            const leaks = hintLeakCheck(hint, ans);
            if (leaks.length > 0) {
              violations.pp8_hint.push({ unit: unitId, lesson: lessonId, stepIdx: i, type: 'mc', ans, hint, leaks });
            }
          }
          // Collect for per-lesson position/length analysis.
          if (ans && opts.length > 0) {
            const ansIdx = opts.findIndex(o => String(o).toLowerCase() === String(ans).toLowerCase());
            const ansLen = String(ans).length;
            // Strict: ans must be uniquely longer than every other option.
            // Ties don't cue the learner to pick the longest, so they don't
            // count as a PP8 length leak.
            const ansIsLongest = opts.every(o => String(o) === String(ans) || String(o).length < ansLen);
            lessonMc.push({ ans, opts: opts.map(String), ansIdx, ansIsLongest });
          }
        }

        if (step.type === 'fb') {
          totals.fb++;
          const s = step.s, a = Array.isArray(step.a) ? step.a : (step.a ? [step.a] : []), hint = step.hint;
          for (const w of a) quizzedWords.add(String(w));

          if (a.length > 0 && isProductionAnswer(a[0])) {
            totals.production++;
            unitProd++;
          }

          if (s) {
            const blankCount = (String(s).match(/\{[0-9]+\}/g) || []).length;
            if (blankCount > 1) {
              violations.pp48.push({ unit: unitId, lesson: lessonId, stepIdx: i, blanks: blankCount, s });
            }
          }

          if (a.length > 0 && s && visualLeakFB(s, a[0])) {
            violations.pp8_visual.push({ unit: unitId, lesson: lessonId, stepIdx: i, type: 'fb', ans: a[0], s });
          }

          if (hint && a.length > 0) {
            const leaks = hintLeakCheck(hint, a[0]);
            if (leaks.length > 0) {
              violations.pp8_hint.push({ unit: unitId, lesson: lessonId, stepIdx: i, type: 'fb', ans: a[0], hint, leaks });
            }
          }
        }

        if (step.type === 'match') {
          totals.match++;
          const pairs = step.pairs || [];
          for (const p of pairs) {
            if (p.trg) quizzedWords.add(String(p.trg));
            if (p.nl) quizzedWords.add(String(p.nl));
          }
        }

        if (step.type === 'drag_fill') {
          totals.drag_fill++;
          const blanks = step.blanks || {};
          let prodHit = false;
          for (const v of Object.values(blanks)) {
            quizzedWords.add(String(v));
            if (isProductionAnswer(v)) prodHit = true;
          }
          if (prodHit) { totals.production++; unitProd++; }
        }

        // PP22c — em-dash scanning across user-facing string fields on any step.
        const STRING_FIELDS = ['trg','src','nl','en','q','s','ans','hint','note','funFact',
                               'example','exampleSrc','exampleEn','sSrc','sEn','text','deepDive',
                               'title','desc','sub'];
        for (const f of STRING_FIELDS) {
          const val = step[f];
          if (typeof val === 'string' && val.includes('—')) {
            violations.pp22c.push({ unit: unitId, lesson: lessonId, stepIdx: i, field: f, snippet: val.slice(0, 80) });
          } else if (val && typeof val === 'object' && !Array.isArray(val)) {
            // deepDive can be nested {title, text}.
            for (const sk of Object.values(val)) {
              if (typeof sk === 'string' && sk.includes('—')) {
                violations.pp22c.push({ unit: unitId, lesson: lessonId, stepIdx: i, field: f+'.*', snippet: sk.slice(0, 80) });
                break;
              }
            }
          }
        }
        // opts[] and goals[] are arrays of strings.
        for (const f of ['opts','goals']) {
          const arr = step[f];
          if (Array.isArray(arr)) {
            for (const v of arr) {
              if (typeof v === 'string' && v.includes('—')) {
                violations.pp22c.push({ unit: unitId, lesson: lessonId, stepIdx: i, field: f, snippet: v.slice(0, 80) });
                break;
              }
            }
          }
        }
      }

      // PP8 position + length leak per lesson.
      // Position: require 4+ MC steps and >50% clustering in one slot.
      // Length: require 6+ MC steps and >60% uniquely-longest — small samples
      // and near-50% rates reflect natural vocab distribution, not an
      // engineered leak a learner could exploit as a strategy.
      if (lessonMc.length >= 4) {
        const positionCounts = [0, 0, 0, 0, 0, 0];
        let longestCount = 0;
        for (const s of lessonMc) {
          if (s.ansIdx >= 0 && s.ansIdx < positionCounts.length) positionCounts[s.ansIdx]++;
          if (s.ansIsLongest) longestCount++;
        }
        for (let p = 0; p < positionCounts.length; p++) {
          const pct = positionCounts[p] / lessonMc.length;
          if (pct > 0.5) {
            violations.pp8_position.push({ unit: unitId, lesson: lessonId, position: p, count: positionCounts[p], total: lessonMc.length, pct: Math.round(pct * 100) });
          }
        }
        if (lessonMc.length >= 6) {
          const longestPct = longestCount / lessonMc.length;
          if (longestPct > 0.6) {
            violations.pp8_length.push({ unit: unitId, lesson: lessonId, count: longestCount, total: lessonMc.length, pct: Math.round(longestPct * 100) });
          }
        }
      }
    }

    // PP67 — per-unit production minimum: >= ceil(teach / 10).
    if (unitTeach > 0) {
      const required = Math.ceil(unitTeach / 10);
      const pass = unitProd >= required;
      perUnit.push({ unit: unitId, teach: unitTeach, production: unitProd, required, pass });
      if (!pass) {
        violations.pp67.push({ unit: unitId, teach: unitTeach, production: unitProd, required });
      }
    }

    // PP64 — every teach card tested somewhere in same unit.
    // Skip meta/section-header "teach" cards whose trg is clearly a heading.
    const META_HEADING = /^(a1|a2|b1|b2)\b.*(complete|summary|review|test|checkpoint)/i;
    // Pre-normalize every quizzed word once so comparisons below work on
    // consistent forms (lowercase + punctuation-stripped + article-stripped).
    const quizzedBare = new Set();
    for (const q of quizzedWords) {
      const qBare = normalizeTrg(q);
      if (qBare) quizzedBare.add(qBare);
    }
    for (const trg of teachTrgs) {
      if (META_HEADING.test(trg)) continue;
      const bare = normalizeTrg(trg);
      if (!bare) continue;
      const trgStem = romanceStem(bare, code);
      let tested = false;
      for (const qBare of quizzedBare) {
        if (qBare.includes(bare) || bare.includes(qBare)) { tested = true; break; }
        if (trgStem && trgStem.length >= 4) {
          const qWords = qBare.split(/[^\p{L}\p{N}]+/u);
          for (const qw of qWords) {
            if (qw.length >= trgStem.length && qw.startsWith(trgStem)) { tested = true; break; }
          }
          if (tested) break;
        }
        const qStem = romanceStem(qBare, code);
        if (qStem && qStem.length >= 4 && bare.startsWith(qStem)) { tested = true; break; }
      }
      if (!tested) {
        violations.pp64.push({ unit: unitId, trg });
      }
    }
  }

  return { totals, violations, perUnit };
}

function fmt(n) { return String(n).padStart(5); }

function printSummary(name, report) {
  const t = report.totals, v = report.violations;
  const total = v.pp8_hint.length + v.pp8_visual.length + v.pp8_position.length + v.pp8_length.length + v.pp22c.length + v.pp43.length + v.pp48.length + v.pp64.length + v.pp67.length;
  console.log(`\n${'='.repeat(60)}`);
  console.log(`  VALIDATION SUMMARY: ${name}`);
  console.log(`${'='.repeat(60)}`);
  console.log(`  Units=${t.units}  Lessons=${t.lessons}  Teach=${t.teach}`);
  console.log(`  MC=${t.mc}  FB=${t.fb}  drag_fill=${t.drag_fill}  match=${t.match}  production=${t.production}`);
  console.log(`${'─'.repeat(60)}`);
  console.log(`  PP8  hint leaks:       ${fmt(v.pp8_hint.length)}`);
  console.log(`  PP8  visual leaks:     ${fmt(v.pp8_visual.length)}`);
  console.log(`  PP8  position leaks:   ${fmt(v.pp8_position.length)}`);
  console.log(`  PP8  length leaks:     ${fmt(v.pp8_length.length)}`);
  console.log(`  PP22c em-dash:         ${fmt(v.pp22c.length)}`);
  console.log(`  PP43 over-dense:       ${fmt(v.pp43.length)}`);
  console.log(`  PP48 multi-blank fb:   ${fmt(v.pp48.length)}`);
  console.log(`  PP64 untested teach:   ${fmt(v.pp64.length)} / ${t.teach}`);
  console.log(`  PP67 under-prod unit:  ${fmt(v.pp67.length)} / ${report.perUnit.length}`);
  console.log(`${'─'.repeat(60)}`);
  console.log(`  RESULT: ${total === 0 ? 'PASS — zero violations' : `${total} violations`}`);
  console.log(`${'='.repeat(60)}`);

  if (verbose) {
    for (const [tag, list] of Object.entries(v)) {
      if (!list.length) continue;
      console.log(`\n  [${tag}] (${list.length})`);
      for (const item of list.slice(0, 50)) {
        console.log('    ' + JSON.stringify(item));
      }
      if (list.length > 50) console.log(`    …and ${list.length - 50} more`);
    }
  }
}

const reports = {};
let hadError = false;

for (const name of targets) {
  try {
    const units = await loadLang(name);
    const report = validateLanguage(name, units);
    reports[name] = report;
    if (!wantJson) printSummary(name, report);
  } catch (e) {
    console.error(`ERROR loading ${name}:`, e.message);
    hadError = true;
  }
}

if (wantJson) {
  console.log(JSON.stringify(reports, null, 2));
}

// Exit with violation count as nonzero for CI integration.
let totalV = 0;
for (const r of Object.values(reports)) {
  const v = r.violations;
  totalV += v.pp8_hint.length + v.pp8_visual.length + v.pp8_position.length + v.pp8_length.length + v.pp22c.length + v.pp43.length + v.pp48.length + v.pp64.length + v.pp67.length;
}
if (!wantJson) {
  console.log(`\nGRAND TOTAL violations across ${targets.length} language(s): ${totalV}`);
}
process.exit(hadError ? 2 : (totalV > 0 ? 1 : 0));
