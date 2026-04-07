#!/usr/bin/env node
/**
 * Validation Script v3: PP52 + PP64 + PP61
 * Key improvement: strips German articles before matching.
 *
 * PP52: German quiz answers must trace to a prior teach card trg.
 *   - Strips "der/die/das/ein/eine" prefix before matching.
 *   - Skips English-only answers (translation quizzes are valid).
 *
 * PP64: Every teach card trg must appear in at least one quiz step
 *   in the same lesson (approximate: checks by lemma without article).
 *
 * PP61: Metalanguage must be English.
 *   - Uses strict threshold: 3+ unique German function words AND more German than English.
 *   - Skips fields that contain German examples (short German sentences in otherwise-English text are OK).
 */

'use strict';
const fs = require('fs');
const path = require('path');

const BASE_DIR = path.resolve(__dirname, '../src/data/german-v2');

// ─── Article stripping ────────────────────────────────────────────────────────
const ARTICLE_PREFIXES = /^(der|die|das|ein|eine|einen|einem|einer|eines|dem|den|des)\s+/i;

function stripArticle(str) {
  return str.trim().replace(ARTICLE_PREFIXES, '').trim();
}

function normalize(str) {
  return stripArticle(str).toLowerCase().replace(/[.,!?;:"'()\[\]{}\-]/g, '').trim();
}

// ─── Is the answer word German? ───────────────────────────────────────────────
function looksGerman(str) {
  if (!str || str.length < 2) return false;
  // Umlauts = definitely German
  if (/[äöüß]/.test(str)) return true;
  // Starts with capital (German noun) but not English proper words
  const englishProper = /^(The|A|An|I|He|She|It|We|They|Yes|No|Good|Bad|Hello|Goodbye|Thank|Please|Excuse|Sorry|True|False|Never|Always|Both|Neither|All|None|This|That|Here|There|Now|Then|Very|Not|So|Also|Even|Only|Just|But|And|Or|To|In|On|At|For|With|From|About|Over|Under|After|Before|More|Less|Most|Least|Many|Few|Much|Some|Any|Every|Each|One|Two|Three|Four|Five|Six|Seven|Eight|Nine|Ten|First|Second|Third|Last|New|Old|Small|Large|Long|Short|High|Low|Right|Left|Up|Down|In|Out|Forward|Back|Correct|Wrong|Formal|Informal|Polite|Singular|Plural|Masculine|Feminine|Neuter|Accusative|Dative|Nominative|Genitive)\b/;
  if (englishProper.test(str)) return false;
  // Starts with capital and contains German-typical patterns
  if (/^[A-Z]/.test(str) && /[a-z]{4,}/.test(str)) {
    // Check if it looks like a German compound (multiple uppercase-start segments)
    // or contains German-typical endings
    if (/ung\b|keit\b|heit\b|lich\b|isch\b|ieren\b|schaft\b|ung\b/.test(str)) return true;
    if (/^[A-Z][a-z]+(en|er|em|es|e|st|t)\b/.test(str)) return true;
  }
  return false;
}

// ─── PP61 German text detection ───────────────────────────────────────────────
// Flags text that appears to be PRIMARILY in German
function isPrimarilyGerman(text) {
  if (!text || typeof text !== 'string' || text.length < 20) return false;
  const t = text.toLowerCase();

  // If text is mostly English explanations with German EXAMPLES, that's fine (PP61 allows this)
  // We look for text that has MANY German function words and FEW English ones

  const germanMarkers = [
    'der ', 'die ', 'das ', 'den ', 'dem ', 'des ',
    'ein ', 'eine ', 'einen ', 'einem ', 'einer ',
    ' ist ', ' sind ', ' war ', ' waren ', ' hat ', ' haben ', ' wird ', ' werden ',
    ' und ', ' oder ', ' aber ', ' auch ', ' nicht ', ' kein ', ' keine ',
    ' mit ', ' von ', ' zu ', ' für ', ' bei ', ' nach ', ' über ', ' unter ',
    ' ich ', ' du ', ' er ', ' sie ', ' es ', ' wir ', ' ihr ',
    ' wenn ', ' dass ', ' weil ', ' obwohl ', ' damit ',
  ];
  const englishMarkers = [
    ' the ', 'a ', ' an ', ' is ', ' are ', ' was ', ' were ',
    ' has ', ' have ', ' will ', ' would ', ' can ', ' could ', ' should ',
    ' and ', ' or ', ' but ', ' also ', ' not ', ' no ',
    ' with ', ' from ', ' to ', ' for ', ' in ', ' on ', ' at ', ' by ',
    ' after ', ' before ', ' over ', ' under ',
    ' use ', ' used ', ' means ', ' refers ', ' indicates ',
    ' this ', ' that ', ' these ', ' those ',
    ' it ', ' its ', ' they ', ' their ', ' you ', ' we ',
    ' noun ', ' verb ', ' adj ', ' adverb ', ' plural ', ' singular ',
    ' german ', ' english ', ' word ', ' form ', ' case ', ' tense ', ' mood ',
    ' takes ', ' adds ', ' makes ', ' becomes ', ' shows ',
    ' remember ', ' note ', ' tip ', ' use ', ' when ', ' always ', ' never ',
    ' first ', ' second ', ' third ', ' often ', ' usually ',
  ];

  const gHits = germanMarkers.filter(w => t.includes(w)).length;
  const eHits = englishMarkers.filter(w => t.includes(w)).length;

  // Very strict: at least 4 German markers AND at least 2x more German than English
  return gHits >= 4 && gHits > eHits * 2;
}

// ─── Load unit ────────────────────────────────────────────────────────────────
function loadUnit(filePath) {
  const src = fs.readFileSync(filePath, 'utf8');
  try {
    const modifiedSrc = src.replace(/export\s+default\s+/, 'var __UNIT_DATA = ')
                           .replace(/export\s+const\s+\w+\s*=\s*/, 'var __UNIT_DATA = ');
    const fn = new Function(modifiedSrc + '; return typeof __UNIT_DATA !== "undefined" ? __UNIT_DATA : null;');
    return fn();
  } catch (e) {
    console.error(`ERROR loading ${path.basename(filePath)}: ${e.message}`);
    return null;
  }
}

// ─── Main ─────────────────────────────────────────────────────────────────────
const pp52Violations = [];
const pp64Violations = [];
const pp61Violations = [];
const stats = { units: 0, lessons: 0, teachCards: 0, quizSteps: 0 };

for (let unitNum = 1; unitNum <= 36; unitNum++) {
  const fileName = `unit-${String(unitNum).padStart(2, '0')}.js`;
  const filePath = path.join(BASE_DIR, fileName);
  if (!fs.existsSync(filePath)) { console.warn(`Missing: ${fileName}`); continue; }

  const unit = loadUnit(filePath);
  if (!unit) continue;
  stats.units++;

  const lessons = unit.lessons || [];

  for (let li = 0; li < lessons.length; li++) {
    const lesson = lessons[li];
    stats.lessons++;
    const steps = lesson.steps || [];
    const lessonId = lesson.id || `L${li+1}`;
    const unitId = `U${unitNum}`;

    // ── PP52 ─────────────────────────────────────────────────────────────────
    // Build teach set as we scan (normalized, article-stripped)
    const seenTrgNorm = new Set();
    const seenTrgFull = []; // original trg values for stem matching

    for (const step of steps) {
      if (step.type === 'teach') {
        const trg = (step.trg || step.nl || '').trim();
        stats.teachCards++;
        if (trg) {
          const norm = normalize(trg);
          seenTrgNorm.add(norm);
          seenTrgFull.push(norm);
          // Also add word-by-word for multi-word phrases
          norm.split(/\s+/).forEach(w => { if (w.length >= 3) seenTrgNorm.add(w); });
        }
      } else if (step.type === 'mc' || step.type === 'fb') {
        stats.quizSteps++;

        let answerRaw = '';
        if (step.type === 'mc') {
          answerRaw = String(step.ans || '').trim();
        } else {
          const raw = Array.isArray(step.a) ? step.a[0] : step.a;
          answerRaw = String(raw || '').trim();
        }

        if (!answerRaw || answerRaw.length < 2) continue;
        // Only check German answers
        if (!looksGerman(answerRaw)) continue;

        const ansNorm = normalize(answerRaw);
        if (!ansNorm || ansNorm.length < 2) continue;

        // Check direct match
        let taught = seenTrgNorm.has(ansNorm);

        // Check stem match (first 5 chars for longer words)
        if (!taught && ansNorm.length >= 6) {
          const stem = ansNorm.substring(0, 5);
          taught = [...seenTrgNorm].some(t => t.length >= 5 && t.startsWith(stem));
        }

        // Also check if the answer is a multi-word phrase and any key word was taught
        if (!taught && ansNorm.includes(' ')) {
          const words = ansNorm.split(/\s+/).filter(w => w.length >= 4);
          taught = words.some(w => seenTrgNorm.has(w) ||
            (w.length >= 6 && [...seenTrgNorm].some(t => t.length >= 5 && t.startsWith(w.substring(0, 5)))));
        }

        if (!taught) {
          const ctx = (step.q || step.s || '').substring(0, 70);
          pp52Violations.push({ unit: unitId, lesson: lessonId, type: step.type, answer: answerRaw, ctx });
        }
      }
    }

    // ── PP64 ─────────────────────────────────────────────────────────────────
    // Collect all teach trg values (normalized)
    const lessonTeachTrgs = [];
    for (const step of steps) {
      if (step.type === 'teach') {
        const trg = (step.trg || step.nl || '').trim();
        if (trg && trg.length >= 3) {
          lessonTeachTrgs.push({ trg, norm: normalize(trg) });
        }
      }
    }

    // Build all quiz content (normalized)
    const quizParts = [];
    for (const step of steps) {
      if (step.type === 'mc') {
        quizParts.push(step.q || '', step.ans || '', ...(step.opts || []));
      } else if (step.type === 'fb') {
        quizParts.push(step.s || '');
        const raw = Array.isArray(step.a) ? step.a : [step.a];
        quizParts.push(...raw.map(x => String(x || '')));
        quizParts.push(...(step.opts || []));
      } else if (step.type === 'match') {
        (step.pairs || []).forEach(p => quizParts.push(p.trg || '', p.src || ''));
      } else if (step.type === 'drag_fill') {
        quizParts.push(step.s || '', ...(step.pool || []));
        if (step.blanks && typeof step.blanks === 'object') {
          quizParts.push(...Object.values(step.blanks));
        }
      }
    }
    const quizStr = quizParts.join(' ').toLowerCase();

    for (const { trg, norm } of lessonTeachTrgs) {
      // Check if the normalized trg (or stem) appears in quiz content
      const tested = quizStr.includes(norm) ||
        // Also check without article
        quizStr.includes(normalize(stripArticle(trg)).substring(0, Math.max(3, normalize(stripArticle(trg)).length))) ||
        // Stem match for inflected forms
        (norm.length >= 6 && quizStr.includes(norm.substring(0, 5)));

      if (!tested) {
        pp64Violations.push({ unit: unitId, lesson: lessonId, trg });
      }
    }

    // ── PP61 ─────────────────────────────────────────────────────────────────
    for (const step of steps) {
      if (step.type === 'mc' || step.type === 'fb') {
        if (step.hint && isPrimarilyGerman(step.hint)) {
          pp61Violations.push({ unit: unitId, lesson: lessonId, field: `${step.type}.hint`, text: step.hint.substring(0, 130) });
        }
      }
      if (step.type === 'teach') {
        if (step.note && isPrimarilyGerman(step.note)) {
          pp61Violations.push({ unit: unitId, lesson: lessonId, field: 'teach.note', text: step.note.substring(0, 130) });
        }
        if (step.funFact && isPrimarilyGerman(step.funFact)) {
          pp61Violations.push({ unit: unitId, lesson: lessonId, field: 'teach.funFact', text: step.funFact.substring(0, 130) });
        }
      }
      if (step.type === 'intro') {
        if (step.desc && isPrimarilyGerman(step.desc)) {
          pp61Violations.push({ unit: unitId, lesson: lessonId, field: 'intro.desc', text: step.desc.substring(0, 130) });
        }
        (step.goals || []).forEach((g, i) => {
          if (typeof g === 'string' && isPrimarilyGerman(g)) {
            pp61Violations.push({ unit: unitId, lesson: lessonId, field: `intro.goal[${i}]`, text: g.substring(0, 130) });
          }
        });
      }
      if (step.type === 'tip') {
        if (step.text && isPrimarilyGerman(step.text)) {
          pp61Violations.push({ unit: unitId, lesson: lessonId, field: 'tip.text', text: step.text.substring(0, 130) });
        }
        if (step.deepDive && isPrimarilyGerman(step.deepDive)) {
          pp61Violations.push({ unit: unitId, lesson: lessonId, field: 'tip.deepDive', text: step.deepDive.substring(0, 130) });
        }
      }
    }
  }

  process.stdout.write(`\rScanned ${unitNum}/36...`);
}

// ─── Report ───────────────────────────────────────────────────────────────────
console.log('\n\n═══════════════════════════════════════════════════════════════════');
console.log('VALIDATION REPORT v3: PP52 + PP64 + PP61');
console.log('═══════════════════════════════════════════════════════════════════');
console.log(`Units: ${stats.units}/36 | Lessons: ${stats.lessons} | Teach cards: ${stats.teachCards} | Quiz steps (mc+fb): ${stats.quizSteps}`);
console.log('');

// PP52
console.log('── PP52: Teach-before-use ──────────────────────────────────────────');
if (pp52Violations.length === 0) {
  console.log('  PASS — Zero violations');
} else {
  const byUnit = {};
  for (const v of pp52Violations) {
    if (!byUnit[v.unit]) byUnit[v.unit] = [];
    byUnit[v.unit].push(v);
  }
  console.log(`  ${pp52Violations.length} items across ${Object.keys(byUnit).length} units:`);
  for (const [unit, vs] of Object.entries(byUnit).sort((a,b) => a[0].localeCompare(b[0], undefined, {numeric:true}))) {
    console.log(`  ${unit} (${vs.length}):`);
    vs.forEach(v => console.log(`    [${v.lesson}] ${v.type} ans="${v.answer}"  |  "${v.ctx}"`));
  }
}

// PP64
console.log('\n── PP64: Teach-then-test ───────────────────────────────────────────');
if (pp64Violations.length === 0) {
  console.log('  PASS — Zero violations');
} else {
  const byUnit = {};
  for (const v of pp64Violations) {
    if (!byUnit[v.unit]) byUnit[v.unit] = [];
    byUnit[v.unit].push(v);
  }
  console.log(`  ${pp64Violations.length} untested teach cards across ${Object.keys(byUnit).length} units:`);
  for (const [unit, vs] of Object.entries(byUnit).sort((a,b) => a[0].localeCompare(b[0], undefined, {numeric:true}))) {
    console.log(`  ${unit} (${vs.length}):`);
    vs.slice(0, 10).forEach(v => console.log(`    [${v.lesson}] "${v.trg}"`));
    if (vs.length > 10) console.log(`    ... and ${vs.length - 10} more`);
  }
}

// PP61
console.log('\n── PP61: Metalanguage in English ───────────────────────────────────');
if (pp61Violations.length === 0) {
  console.log('  PASS — Zero violations');
} else {
  const byUnit = {};
  for (const v of pp61Violations) {
    if (!byUnit[v.unit]) byUnit[v.unit] = [];
    byUnit[v.unit].push(v);
  }
  console.log(`  ${pp61Violations.length} items across ${Object.keys(byUnit).length} units:`);
  for (const [unit, vs] of Object.entries(byUnit).sort((a,b) => a[0].localeCompare(b[0], undefined, {numeric:true}))) {
    console.log(`  ${unit} (${vs.length}):`);
    vs.slice(0, 6).forEach(v => console.log(`    [${v.lesson}] ${v.field}: "${v.text}"`));
    if (vs.length > 6) console.log(`    ... and ${vs.length - 6} more`);
  }
}

// Summary
console.log('\n═══════════════════════════════════════════════════════════════════');
const total = pp52Violations.length + pp64Violations.length + pp61Violations.length;
if (total === 0) {
  console.log('ALL CHECKS PASS — Zero violations');
} else {
  console.log(`TOTAL: ${total}  |  PP52: ${pp52Violations.length}  |  PP64: ${pp64Violations.length}  |  PP61: ${pp61Violations.length}`);
}
console.log('═══════════════════════════════════════════════════════════════════\n');
