#!/usr/bin/env node
'use strict';

/**
 * PP64 Validator — Teach-Then-Test Completeness
 *
 * For each unit (01–36):
 *   1. Walk all lessons in order.
 *   2. Collect teach cards (trg, src, lesson index).
 *   3. For each teach card, check if it's tested in the SAME or ANY LATER lesson.
 *
 * Matching strategy (most lenient that avoids false positives):
 *   A) Exact word match (whole-word, case-insensitive)
 *   B) Stem match (first ≥4 chars)
 *   C) Root word match for compounds (≥5 chars removed prefix)
 *   D) src translation in English quiz text (hints, sSrc, mc q/opts)
 *
 * Exempt: function words, articles, pronouns, short words (≤3 chars).
 */

const fs   = require('fs');
const path = require('path');
const vm   = require('vm');

const BASE = path.join(__dirname, '..', 'src', 'data', 'german-v2');
const OUT  = path.join(__dirname, '_pp64_results_v2.txt');

// ─── Exempt list ─────────────────────────────────────────────────────────────
const EXEMPT = new Set([
  // Articles
  'der','die','das','den','dem','des','ein','eine','einen','einem','einer','eines',
  // Pronouns
  'ich','du','er','sie','es','wir','ihr','mich','dich','sich','uns','euch',
  'mir','dir','ihm','ihnen','man',
  // Conjunctions / particles
  'und','oder','aber','denn','doch','auch','noch','schon','mal','ja','nein',
  'oh','so','da','wo','ab','ob','nun','halt','bloß','eben','wohl',
  // Short prepositions
  'zu','in','an','auf','um','am','im','vom','zum','zur','bei','mit','von',
  'aus','nach','seit','bis','für','über','unter','vor','hinter','neben','zwischen',
  // Common adverbs that appear everywhere
  'sehr','nicht','kein','keine','keinen','keinem','keiner',
  // Formal address forms that aren't vocab
  'sie',
]);

// ─── Load unit file ───────────────────────────────────────────────────────────
function loadUnit(n) {
  const pad = String(n).padStart(2, '0');
  const filePath = path.join(BASE, `unit-${pad}.js`);
  if (!fs.existsSync(filePath)) return null;

  let src = fs.readFileSync(filePath, 'utf8');

  // Strip export default / export statement to get CommonJS
  src = src.replace(/^export\s+default\s+/m, 'module.exports = ');

  // Fallback: find UNIT_N = { ... } and append module.exports
  if (!src.includes('module.exports')) {
    const m = src.match(/^(?:const\s+)?(UNIT_\d+)\s*=/m);
    if (m) src += `\nmodule.exports = ${m[1]};`;
  }

  const mod = { exports: {} };
  const ctx = vm.createContext({ module: mod, exports: mod.exports, require });
  try {
    vm.runInContext(src, ctx);
  } catch (e) {
    console.error(`Error loading unit ${n}: ${e.message}`);
    return null;
  }
  return mod.exports;
}

// ─── Normalise a string for matching ─────────────────────────────────────────
function normalise(s) {
  if (!s || typeof s !== 'string') return '';
  return s.toLowerCase().replace(/[.,!?;:'"()[\]{}<>\/\\]/g, ' ').replace(/\s+/g, ' ').trim();
}

// ─── Extract all text tokens from quiz content ────────────────────────────────
function quizText(step) {
  const parts = [];
  const add = (v) => { if (v && typeof v === 'string') parts.push(v); };

  switch (step.type) {
    case 'mc':
      add(step.q);
      add(step.ans);
      if (Array.isArray(step.opts)) step.opts.forEach(add);
      add(step.hint);
      add(step.sSrc);
      break;
    case 'fb':
      add(step.s);
      // a can be a string or an array
      if (Array.isArray(step.a)) step.a.forEach(add);
      else if (typeof step.a === 'string') add(step.a);
      if (Array.isArray(step.opts)) step.opts.forEach(add);
      add(step.hint);
      add(step.sSrc);
      break;
    case 'match':
      if (Array.isArray(step.pairs)) {
        step.pairs.forEach(p => { add(p.trg); add(p.src); });
      }
      break;
    case 'drag_fill':
      add(step.s);
      if (step.blanks && typeof step.blanks === 'object') {
        Object.values(step.blanks).forEach(add);
      }
      if (Array.isArray(step.pool)) step.pool.forEach(add);
      add(step.hint);
      add(step.sSrc);
      break;
    case 'tr':
      add(step.mk);
      break;
    default:
      break;
  }

  return normalise(parts.join(' '));
}

const QUIZ_TYPES = new Set(['mc','fb','match','drag_fill','tr']);

// ─── Get canonical word(s) from a trg string ─────────────────────────────────
// Returns {words: string[], stems: string[], roots: string[]}
function canonical(trg) {
  const norm = normalise(trg);
  // Split on whitespace and articles: "der Bahnhof" → ["der","bahnhof"]
  const tokens = norm.split(/\s+/).filter(t => t.length > 0);

  // Content tokens: skip articles/short function words for stem/root matching
  // Allow 3-char words like Weg, Bus, Tee, Eis, Zoo — these are real nouns
  const contentTokens = tokens.filter(t => t.length >= 3 && !EXEMPT.has(t));

  const stems  = contentTokens.map(t => t.slice(0, Math.max(4, Math.floor(t.length * 0.65))));

  // Root words: remove common German prefixes (ver-, be-, ge-, er-, ent-, hin-, her-, vor-, nach-, auf-, aus-)
  const PREFIXES = ['ver','be','ge','er','ent','hin','her','vor','nach','auf','aus','ab','un','über','um','ein','an'];
  const roots = [];
  for (const t of contentTokens) {
    if (t.length >= 6) {
      for (const pref of PREFIXES) {
        if (t.startsWith(pref) && t.length - pref.length >= 4) {
          roots.push(t.slice(pref.length));
          break;
        }
      }
    }
  }

  return { words: tokens, contentTokens, stems, roots };
}

// ─── Check if a teach card is tested in a block of quiz text ─────────────────
function isTested(teachCard, quizCorpus, quizEnCorpus) {
  const trgRaw = teachCard.trg || '';
  const srcRaw = teachCard.src || '';

  // Skip exempt: whole trg is a known function word
  const trgLower = normalise(trgRaw);
  if (EXEMPT.has(trgLower)) return { tested: true, reason: 'exempt' };

  // Skip very short words (≤3 chars) — they appear in everything
  const trgStripped = trgLower.replace(/\s+/g, '');
  if (trgStripped.length <= 3) return { tested: true, reason: 'exempt-short' };

  // Skip phrases like "Ich bin..." (verb phrases with ellipsis are not discrete vocab)
  if (trgRaw.includes('...')) return { tested: true, reason: 'exempt-ellipsis' };

  // Skip question phrases as vocab (these are taught as constructs, tested differently)
  // e.g. "Wie heißen Sie?" - we still check, but mark with low confidence

  const { words, contentTokens, stems, roots } = canonical(trgRaw);

  // A: Exact whole-word match for each content token
  for (const tok of contentTokens) {
    if (tok.length >= 3) {
      const re = new RegExp(`\\b${tok}`, 'i');
      if (re.test(quizCorpus)) return { tested: true, reason: `exact:${tok}` };
    }
  }

  // Also try the full phrase (for multi-word units like "ein bisschen")
  if (contentTokens.length > 1) {
    const phrase = contentTokens.join('\\s+');
    const re = new RegExp(phrase, 'i');
    if (re.test(quizCorpus)) return { tested: true, reason: `phrase:${trgLower}` };
  }

  // B: Stem match (first ≥3 chars, at least 65% of word)
  for (const stem of stems) {
    if (stem.length >= 3) {
      const re = new RegExp(`\\b${stem}`, 'i');
      if (re.test(quizCorpus)) return { tested: true, reason: `stem:${stem}` };
    }
  }

  // C: Root word match (compound prefix removed)
  for (const root of roots) {
    if (root.length >= 4) {
      const re = new RegExp(`\\b${root}`, 'i');
      if (re.test(quizCorpus)) return { tested: true, reason: `root:${root}` };
    }
  }

  // D: Source translation match in English quiz content
  if (srcRaw) {
    const srcTokens = normalise(srcRaw).split(/\s+/).filter(t => t.length >= 4 && !EXEMPT.has(t));
    for (const tok of srcTokens) {
      const re = new RegExp(`\\b${tok}`, 'i');
      if (re.test(quizEnCorpus)) return { tested: true, reason: `src:${tok}` };
    }
  }

  return { tested: false, reason: 'none' };
}

// ─── Process one unit ─────────────────────────────────────────────────────────
function processUnit(unit) {
  const lessons = unit.lessons || [];
  const results = [];

  // Pre-build quiz corpus per lesson index (cumulative from lesson i onwards)
  // We'll build it as we scan: teach cards in lesson i can be tested in lesson i..last
  // So we need the full quiz corpus for lessons i..N for each teach card.

  // First pass: collect quiz text per lesson
  const lessonQuizDe = []; // German text
  const lessonQuizEn = []; // English text (sSrc, hints, opts)

  for (const lesson of lessons) {
    const steps = lesson.steps || [];
    const deParts = [];
    const enParts = [];

    for (const step of steps) {
      if (!QUIZ_TYPES.has(step.type)) continue;
      // German quiz text
      const qt = quizText(step);
      deParts.push(qt);
      // English-only fields
      const enParts2 = [];
      if (step.hint) enParts2.push(normalise(step.hint));
      if (step.sSrc) enParts2.push(normalise(step.sSrc));
      if (step.type === 'mc') {
        if (step.q) enParts2.push(normalise(step.q));
        if (Array.isArray(step.opts)) step.opts.forEach(o => enParts2.push(normalise(o)));
      }
      enParts.push(enParts2.join(' '));
    }

    lessonQuizDe.push(deParts.join(' '));
    lessonQuizEn.push(enParts.join(' '));
  }

  // Build cumulative suffix corpus: lessons[i..end]
  const cumDe = [];
  const cumEn = [];
  for (let i = lessons.length - 1; i >= 0; i--) {
    cumDe[i] = (lessonQuizDe[i] || '') + ' ' + (cumDe[i + 1] || '');
    cumEn[i] = (lessonQuizEn[i] || '') + ' ' + (cumEn[i + 1] || '');
  }

  // Second pass: for each teach card, check against cumulative quiz from that lesson onwards
  for (let li = 0; li < lessons.length; li++) {
    const lesson = lessons[li];
    const steps  = lesson.steps || [];

    for (const step of steps) {
      if (step.type !== 'teach') continue;

      const trg = step.trg || '';
      if (!trg) continue;

      const result = isTested(step, cumDe[li] || '', cumEn[li] || '');

      results.push({
        lessonId: lesson.id,
        lessonIdx: li,
        trg,
        src: step.src || '',
        tested: result.tested,
        reason: result.reason,
      });
    }
  }

  return results;
}

// ─── Main ─────────────────────────────────────────────────────────────────────
function main() {
  const lines = [];
  const log   = (s) => { lines.push(s); process.stdout.write(s + '\n'); };

  let grandTotal   = 0;
  let grandTested  = 0;
  let grandUntested = 0;

  for (let n = 1; n <= 36; n++) {
    const unit = loadUnit(n);
    if (!unit) { log(`=== UNIT ${String(n).padStart(2,'0')} === (LOAD ERROR)`); continue; }

    const pad = String(n).padStart(2, '0');
    log(`\n=== UNIT ${pad} ===`);

    const results  = processUnit(unit);
    const total    = results.length;
    const tested   = results.filter(r => r.tested).length;
    const untested = total - tested;
    const pct      = total > 0 ? ((tested / total) * 100).toFixed(1) : '0.0';

    log(`Teach: ${total} | Tested: ${tested} | Untested: ${untested} | Coverage: ${pct}%`);

    const fails = results.filter(r => !r.tested);
    for (const f of fails) {
      log(`  Untested [${f.lessonId}]: "${f.trg}" (src: "${f.src}")`);
    }

    grandTotal    += total;
    grandTested   += tested;
    grandUntested += untested;
  }

  log(`\n${'─'.repeat(60)}`);
  const grandPct = grandTotal > 0 ? ((grandTested / grandTotal) * 100).toFixed(1) : '0.0';
  log(`GRAND TOTAL: ${grandTotal} teach | ${grandTested} tested | ${grandUntested} untested | ${grandPct}% coverage`);

  fs.writeFileSync(OUT, lines.join('\n'), 'utf8');
  console.log(`\nResults saved to ${OUT}`);
}

main();
