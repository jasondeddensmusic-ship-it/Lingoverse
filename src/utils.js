// ━━━━━━━━━━ UTILITIES ━━━━━━━━━━
// Extracted from verumlingua.jsx for modularity

import { LEVEL_XP } from './data/vocabulary.js';
import { LANGUAGES, LANG_META } from './data/metadata.js';
import { FOUNDATIONS_BY_LANG, FK_PLAYTHROUGH } from './data/foundations.js';
import dutchUnits from './data/units-dutch.js';
import koreanUnits from './data/units-korean.js';
import germanUnits from './data/units-german.js';
import germanV2Units from './data/units-german-v2.js';
import frenchUnits from './data/units-french.js';
import spanishUnits from './data/units-spanish.js';
import otherUnits from './data/units-other.js';
import { UNITS_GERMAN_V2_AR } from './data/units-german-v2-ar.js';

const __devWarnings=[];

// ── Content Integrity Auditor ──
// CONTENT INTEGRITY AUDITOR (Dev Mode)
// Manifesto Principle 11: runs on load, prints warnings.
// Checks: anti-leak compliance, TK usage, FK/MK mapping.
// ══════════════════════════════════════════════════════════════════
const __contentWarnings = [];
try{
if (typeof console !== "undefined") {
  // ── Anti-Leak Auditor: scan all FK_PLAYTHROUGH MC questions ──
  const _auditAntiLeak = (langCode, stages) => {
    (stages || []).forEach(stage => {
      (stage.lessons || []).forEach(lesson => {
        (lesson.steps || []).forEach((step, si) => {
          if (step.type !== "mc") return;
          const q = step.q || "";
          const ans = step.ans || "";
          const opts = step.opts || [];
          const hint = step.hint || "";

          // Rule A: target-script jamo/blocks in question for visual-property questions
          const jamoInQ = q.match(/[ㄱ-ㅎㅏ-ㅣ]/g) || [];
          const hangulInQ = q.match(/[가-힣]/g) || [];
          const visualWords = ["pointing","family","vertical","horizontal","difference","apart","shape","legs","stroke"];
          const isVisualQ = visualWords.some(w => q.toLowerCase().includes(w));
          if (jamoInQ.length > 0 && isVisualQ) {
            const msg = `ANTI-LEAK [${langCode}/${lesson.id}/step${si}]: jamo in visual-property question "${q.substring(0,50)}..."`;
            console.warn(`[ContentAudit] ${msg}`);
            __contentWarnings.push(msg);
          }

          // Rule B: answer appears standalone in question (multi-char only)
          if (ans.length > 2) {
            const escaped = ans.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
            const re = new RegExp(`(?<![a-zA-Z가-힣ㄱ-ㅎㅏ-ㅣ])${escaped}(?![a-zA-Z가-힣ㄱ-ㅎㅏ-ㅣ])`);
            if (re.test(q)) {
              const msg = `ANTI-LEAK [${langCode}/${lesson.id}/step${si}]: answer "${ans.substring(0,30)}" standalone in question`;
              console.warn(`[ContentAudit] ${msg}`);
              __contentWarnings.push(msg);
            }
          }

          // Rule C: hint contains answer standalone
          if (hint && ans.length > 2) {
            const escaped = ans.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
            const re = new RegExp(`(?<![a-zA-Z가-힣ㄱ-ㅎㅏ-ㅣ])${escaped}(?![a-zA-Z가-힣ㄱ-ㅎㅏ-ㅣ])`);
            if (re.test(hint)) {
              const msg = `ANTI-LEAK [${langCode}/${lesson.id}/step${si}]: answer in hint "${hint.substring(0,40)}"`;
              console.warn(`[ContentAudit] ${msg}`);
              __contentWarnings.push(msg);
            }
          }

          // Rule D: answer significantly longer than distractors
          const otherLens = opts.filter(o => o !== ans).map(o => o.length);
          if (otherLens.length > 0) {
            const avg = otherLens.reduce((a, b) => a + b, 0) / otherLens.length;
            if (ans.length > avg * 2.5 && ans.length > 20) {
              const msg = `ANTI-LEAK [${langCode}/${lesson.id}/step${si}]: answer much longer than distractors`;
              console.warn(`[ContentAudit] ${msg}`);
              __contentWarnings.push(msg);
            }
          }
        });
      });
    });
  };

  // Run auditor on all languages with playthrough content
  Object.entries(FK_PLAYTHROUGH).forEach(([lc, data]) => {
    if (data.stages && data.stages.length > 0) {
      _auditAntiLeak(lc, data.stages);
    }
  });

  // ── Boot-time Content Integrity Validator (Manifesto P8+P11) ──
  // Scans ALL FK_PLAYTHROUGH lessons and ALL UNITS lessons at startup.
  // Findings are logged to console. Runtime wiring in LessonEngine auto-flags them.
  const _bootValidatorFindings = [];
  Object.entries(FK_PLAYTHROUGH).forEach(([lc, data]) => {
    (data.stages || []).forEach(stage => {
      (stage.lessons || []).forEach(lesson => {
        const findings = validateLessonForLeaks(lesson, { mode: "foundations", lang: lc, lessonId: lesson.id });
        findings.forEach(f => _bootValidatorFindings.push(f));
      });
    });
  });
  // NOTE: UNITS lessons are validated at runtime via LessonEngine useEffect wiring,
  // not at boot time, because UNITS is declared later in the file.
  if (_bootValidatorFindings.length > 0) {
    console.warn(`[ContentValidator] Boot scan: ${_bootValidatorFindings.length} finding(s) across all content`);
    _bootValidatorFindings.forEach(f => console.warn(`  [${f.severity}] ${f.lessonId}/step${f.stepIndex}: ${f.shortTitle} — ${f.explanation.substring(0,80)}`));
  } else {
    console.log("[ContentValidator] Boot scan: 0 findings ✅");
  }

  // ── MK/TK Linter: flag new FK_PLAYTHROUGH steps with raw English ──
  // (informational only — does not block)
  const _tkLinter = (langCode, stages) => {
    (stages || []).forEach(stage => {
      (stage.lessons || []).forEach(lesson => {
        (lesson.steps || []).forEach((step, si) => {
          // For MC: check if q contains common English instructional patterns
          if (step.type === "mc" && step.q) {
            const rawEnglish = /^(Which|What|How|Read|The |In |Does )/;
            if (rawEnglish.test(step.q)) {
              // This is informational — future content should use TK keys
              // Not flagged as error for grandfathered content
            }
          }
        });
      });
    });
  };

  // Run TK linter (silent for now — will be activated for new content)
  Object.entries(FK_PLAYTHROUGH).forEach(([lc, data]) => {
    if (data.stages && data.stages.length > 0) {
      _tkLinter(lc, data.stages);
    }
  });

  if (__contentWarnings.length > 0) {
    console.warn(`[ContentAudit] ${__contentWarnings.length} warning(s) found. Run __contentWarnings in console for details.`);
  }

  // ── LANGUAGE-AGNOSTIC AUDIT (Manifesto P14) ──
  // Scans shared UI component source for hardcoded language-specific terms.
  // This runs as a DEV-ONLY check. Terms in data constants are fine;
  // terms in function components that render for ALL languages are bugs.
  const _LANG_SPECIFIC_TERMS = [
    "Hangul","hangul","Jamo","jamo","Batchim","batchim",
    "Kanji","kanji","Hiragana","hiragana","Katakana","katakana",
    "Pinyin","pinyin","Cyrillic","cyrillic","Kana","kana","Hanzi","hanzi",
  ];
  // NOTE: Terms like "Dutch","German","Arabic" etc. are NOT flagged here because
  // they legitimately appear in per-language lesson data (UNITS content).
  // The above list targets SCRIPT-SYSTEM terms that should never appear in
  // shared UI components. Full audit (including language names in shared components)
  // must be run manually before each batch ships.
  // _LANG_AGNOSTIC_AUDIT_REMINDER: Before shipping ANY batch, grep shared components
  // (FoundationsGateQuiz, FoundationsPlaythrough, UnitMap, Home, LearnPage, LessonEngine)
  // for hardcoded language/script names. If found → pull from per-language data or make generic.
}
}catch(e){console.warn("[LingoVerse] Content auditor skipped:",e.message);}

// ══════════════════════════════════════════════════════════════════════════════
// CONTENT INTEGRITY VALIDATOR (ENFORCED) — Manifesto Principle 8 + 11
// ══════════════════════════════════════════════════════════════════════════════
//
// WHAT ARE LEAKS?
//   A "leak" is any test question (MC, match, etc.) where the learner can
//   determine the correct answer WITHOUT actually knowing the material, by
//   exploiting visual, structural, or textual patterns in the question itself.
//
// WHAT IS AUTOMATICALLY CHECKED?
//   1. VISUAL GIVEAWAY — question asks about a visual property (dots, shape,
//      stroke direction) while showing the target character in the prompt.
//      The learner can just LOOK at the character instead of recalling it.
//   2. CHOICE GIVEAWAY — the correct answer is the only option in a different
//      script/style (e.g. only Arabic among Latin, only Hangul among Latin).
//   3. COPY-PASTE GIVEAWAY — the prompt contains the exact answer string when
//      the question tests recall/recognition.
//   4. LENGTH GIVEAWAY — the correct answer is dramatically longer/shorter
//      than all distractors, making it statistically obvious.
//   5. HINT CONTAINS ANSWER — hint text contains the answer verbatim.
//   6. TEACH BEFORE TEST — quiz tests a non-Latin character not introduced
//      in a preceding teach step within the same lesson.
//   7. MISSING KIND — Foundations letter teach steps without kind:"letter".
//   8. P32 DEMONSTRATIVE PRONOUN — catches "deze/die is de [thing]" errors.
//      Dutch requires dit/dat for things in pronoun position.
//   9. P32 DEMONSTRATIVE DISAMBIGUATION — catches near/far demonstrative
//      exercises (deze vs die) that lack hier/daar in the sentence.
//  10. P34 VOCABULARY GATE — catches Dutch exercise words not found in any
//      teach card within the same lesson (warns, since prior lessons may
//      have taught the word).
//
// HOW TO RESOLVE A FLAGGED ITEM:
//   • Visual giveaway → flip the question: show the character, ask for the
//     sound/name in romanization. Or remove the character from the question.
//   • Choice giveaway → make all options use the same script.
//   • Copy-paste giveaway → rephrase the question to not include the answer.
//   • Length giveaway → pad distractors or shorten the answer.
//
// PRINCIPLE: The no-leak rule is NON-NEGOTIABLE across ALL content:
//   Foundations Playthrough + Units + Gate Quizzes.
// ══════════════════════════════════════════════════════════════════════════════

function validateLessonForLeaks(lesson, { mode, lang, lessonId }) {
  const findings = [];
  const steps = lesson.steps || [];
  
  // Script detection helpers
  const hasArabic = (s) => /[\u0600-\u06FF]/.test(s);
  const hasHangul = (s) => /[\uAC00-\uD7AF\u3130-\u318F]/.test(s);
  const hasCJK = (s) => /[\u4E00-\u9FFF\u3040-\u309F\u30A0-\u30FF]/.test(s);
  const hasNonLatin = (s) => /[^\u0000-\u007F]/.test(s);
  const visualWords = ["dot","dots","shape","teeth","bowl","cup","loop","flat","tall","hook",
    "swoop","vertical","horizontal","stroke","pointing","family","legs","apart"];

  steps.forEach((step, si) => {
    if (!["mc","match","identify"].includes(step.type)) return;
    
    const q = step.q || "";
    const ans = step.ans || "";
    const opts = step.opts || [];
    const hint = step.hint || "";

    // ── RULE 1: Visual giveaway ──
    // Question asks about visual property AND shows target-script characters
    const isVisualQ = visualWords.some(w => q.toLowerCase().includes(w));
    const qHasTargetScript = hasArabic(q) || hasHangul(q) || hasCJK(q);
    if (isVisualQ && qHasTargetScript) {
      // Check if the answer is one of the script characters shown in options
      const optsHaveScript = opts.some(o => hasArabic(o) || hasHangul(o) || hasCJK(o));
      if (optsHaveScript) {
        findings.push({
          lessonId, stepIndex: si, stepId: step.id || null,
          severity: "error",
          shortTitle: "Visual giveaway",
          explanation: `Question asks about visual property ("${visualWords.find(w=>q.toLowerCase().includes(w))}") while showing target-script characters in prompt AND options contain script characters. Learner can see the answer.`,
          suggestedFix: "Flip the question: show the character, ask for the sound/name in romanization. Remove visual-property keywords from the question."
        });
      }
    }

    // ── RULE 2: Choice giveaway — only one option in a different script ──
    if (opts.length >= 3) {
      const scriptCounts = { arabic: 0, hangul: 0, cjk: 0, latin: 0 };
      opts.forEach(o => {
        if (hasArabic(o)) scriptCounts.arabic++;
        else if (hasHangul(o)) scriptCounts.hangul++;
        else if (hasCJK(o)) scriptCounts.cjk++;
        else scriptCounts.latin++;
      });
      for (const [script, count] of Object.entries(scriptCounts)) {
        if (count === 1 && script !== "latin") {
          // The lone non-Latin option — check if it's the answer
          const loneOpt = opts.find(o => {
            if (script === "arabic") return hasArabic(o);
            if (script === "hangul") return hasHangul(o);
            if (script === "cjk") return hasCJK(o);
            return false;
          });
          if (loneOpt === ans) {
            findings.push({
              lessonId, stepIndex: si, stepId: step.id || null,
              severity: "warn",
              shortTitle: "Choice giveaway (lone script)",
              explanation: `The correct answer "${ans}" is the only option in ${script} script among ${opts.length} options. Learner can guess by script alone.`,
              suggestedFix: "Make all options use the same script, or add more options in the same script."
            });
          }
        }
      }
    }

    // ── RULE 3: Copy-paste giveaway — answer appears in question ──
    if (ans.length > 2 && step.type === "mc") {
      const escaped = ans.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const re = new RegExp(`(?<![a-zA-Z\\u0600-\\u06FF\\uAC00-\\uD7AF])${escaped}(?![a-zA-Z\\u0600-\\u06FF\\uAC00-\\uD7AF])`);
      if (re.test(q)) {
        findings.push({
          lessonId, stepIndex: si, stepId: step.id || null,
          severity: "warn",
          shortTitle: "Copy-paste giveaway",
          explanation: `The answer "${ans.substring(0,30)}" appears verbatim in the question text.`,
          suggestedFix: "Rephrase the question to describe the concept without using the exact answer string."
        });
      }
    }

    // ── RULE 4: Length giveaway — answer dramatically longer than distractors ──
    if (opts.length >= 3) {
      const otherLens = opts.filter(o => o !== ans).map(o => o.length);
      if (otherLens.length > 0) {
        const avg = otherLens.reduce((a, b) => a + b, 0) / otherLens.length;
        if (ans.length > avg * 2.5 && ans.length > 20) {
          findings.push({
            lessonId, stepIndex: si, stepId: step.id || null,
            severity: "warn",
            shortTitle: "Length giveaway",
            explanation: `Answer (${ans.length} chars) is ${(ans.length/avg).toFixed(1)}x longer than average distractor (${avg.toFixed(0)} chars).`,
            suggestedFix: "Pad distractors to similar length, or shorten the correct answer."
          });
        }
      }
    }

    // ── RULE 5: Hint contains answer (when hints are shown) ──
    if (hint && ans.length > 2) {
      const escaped = ans.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const re = new RegExp(escaped, "i");
      if (re.test(hint)) {
        findings.push({
          lessonId, stepIndex: si, stepId: step.id || null,
          severity: "warn",
          shortTitle: "Hint contains answer",
          explanation: `The hint "${hint.substring(0,40)}..." contains the answer "${ans.substring(0,20)}".`,
          suggestedFix: "Rewrite the hint to guide thinking without revealing the answer."
        });
      }
    }

    // ── RULE 6: Teach before test ──
    // If a quiz answer is a single non-Latin character not introduced in ANY
    // preceding step (teach nl, forms glyphs, MC options, intro desc), flag it.
    if (step.type === "mc" && si > 0) {
      const exposedChars = new Set();
      for (let prev = 0; prev < si; prev++) {
        const ps = steps[prev];
        // Collect from teach nl and example fields
        if (ps.nl) for (const ch of ps.nl) { if (/[^\u0000-\u007F]/.test(ch)) exposedChars.add(ch); }
        if (ps.example) for (const ch of ps.example) { if (/[^\u0000-\u007F]/.test(ch)) exposedChars.add(ch); }
        if (ps.note) for (const ch of ps.note) { if (/[^\u0000-\u007F]/.test(ch)) exposedChars.add(ch); }
        // Collect from diagram forms
        if (ps.forms) ps.forms.forEach(f => { for (const ch of (f.glyph||"")) if (/[^\u0000-\u007F]/.test(ch)) exposedChars.add(ch); });
        // Collect from MC questions and options (learner has seen these characters)
        if (ps.q) for (const ch of ps.q) { if (/[^\u0000-\u007F]/.test(ch)) exposedChars.add(ch); }
        if (ps.opts) ps.opts.forEach(o => { for (const ch of o) if (/[^\u0000-\u007F]/.test(ch)) exposedChars.add(ch); });
        // Collect from intro desc
        if (ps.desc) for (const ch of ps.desc) { if (/[^\u0000-\u007F]/.test(ch)) exposedChars.add(ch); }
      }
      // Also count chars in the CURRENT question (learner sees q before answering)
      if (q) for (const ch of q) { if (/[^\u0000-\u007F]/.test(ch)) exposedChars.add(ch); }
      // Only flag single-char answers that are completely new
      if (exposedChars.size > 0 && ans.length <= 2) {
        const newChars = [];
        for (const ch of ans) {
          if (/[^\u0000-\u007F\u0020-\u002F\u003A-\u0040]/.test(ch) && !exposedChars.has(ch)) {
            newChars.push(ch);
          }
        }
        if (newChars.length > 0) {
          findings.push({
            lessonId, stepIndex: si, stepId: step.id || null,
            severity: "warn",
            shortTitle: "Teach before test",
            explanation: `Quiz answer "${ans}" contains character(s) [${newChars.join(",")}] not seen in any preceding step.`,
            suggestedFix: "Insert a teach step before this test step that introduces the tested character."
          });
        }
      }
    }
  });

  // ── RULE 7: Missing kind on Foundations letter teach (warn) ──
  // In Foundations mode, teach steps with a single non-Latin character (1-2 chars)
  // should have kind:"letter" so the renderer shows the letter card, not vocab card.
  if (mode === "foundations") {
    steps.forEach((step, si) => {
      if (step.type !== "teach") return;
      if (step.kind) return; // already tagged
      const nl = (step.nl || "").trim();
      if (nl.length >= 1 && nl.length <= 2 && hasNonLatin(nl)) {
        findings.push({
          lessonId, stepIndex: si, stepId: step.id || null,
          severity: "warn",
          shortTitle: "Missing kind on letter teach",
          explanation: `Teach step for "${nl}" is a single non-Latin character but has no kind:"letter" field. It will render as a vocab card instead of a letter card.`,
          suggestedFix: "Add kind:\"letter\" to this teach step."
        });
      }
    });
  }

  // ── RULE 8: P32 — Demonstrative pronoun error (deze/die is de [thing]) ──
  // "Deze is de school" is WRONG DUTCH. Pronouns pointing at things = dit/dat only.
  steps.forEach((step, si) => {
    if (!step.blanks && !step.ans) return;
    // Check drag_fill blanks
    if (step.type === "drag_fill" && step.blanks) {
      const sentence = (step.s || "").toLowerCase();
      Object.entries(step.blanks).forEach(([k, v]) => {
        const val = v.toLowerCase();
        if ((val === "deze" || val === "die") && /is\s+(de|het)\s+\w/.test(sentence)) {
          findings.push({
            lessonId, stepIndex: si, stepId: step.id || null,
            severity: "error",
            shortTitle: "P32: Demonstrative pronoun error",
            explanation: `Blank ${k} expects "${v}" in a pronoun position ("... is de/het [thing]"). Dutch requires dit/dat for things, never deze/die.`,
            suggestedFix: "Change expected answer to dit/dat, or restructure as adjective use (deze/die + noun)."
          });
        }
      });
    }
    // Check FB answers
    if (step.type === "fb" && step.a) {
      const answers = Array.isArray(step.a) ? step.a : [step.a];
      const sentence = (step.s || "").toLowerCase();
      answers.forEach(a => {
        const val = a.toLowerCase();
        if ((val === "deze" || val === "die") && /is\s+(de|het)\s+\w/.test(sentence)) {
          findings.push({
            lessonId, stepIndex: si, stepId: step.id || null,
            severity: "error",
            shortTitle: "P32: Demonstrative pronoun error",
            explanation: `Answer "${a}" in pronoun position with "is de/het [thing]". Dutch requires dit/dat for things.`,
            suggestedFix: "Change answer to dit/dat, or restructure sentence."
          });
        }
      });
    }
  });

  // ── RULE 9: P32 — Near/far demonstrative without hier/daar ──
  // If an exercise tests deze vs die or dit vs dat, the sentence MUST contain hier or daar.
  steps.forEach((step, si) => {
    if (!["mc", "fb", "drag_fill"].includes(step.type)) return;
    const sentence = (step.s || step.q || "").toLowerCase();
    const allAnswers = [];
    if (step.ans) allAnswers.push(step.ans.toLowerCase());
    if (step.a) (Array.isArray(step.a) ? step.a : [step.a]).forEach(a => allAnswers.push(a.toLowerCase()));
    if (step.blanks) Object.values(step.blanks).forEach(v => allAnswers.push(v.toLowerCase()));
    const opts = (step.opts || []).map(o => o.toLowerCase());
    // Check if this is a demonstrative exercise (answer or options include demonstratives)
    const demonstratives = ["dit", "dat", "deze", "die"];
    const hasDemAnswer = allAnswers.some(a => demonstratives.includes(a));
    const hasDemOpts = opts.filter(o => demonstratives.includes(o)).length >= 2;
    if (hasDemAnswer && hasDemOpts) {
      // This is a demonstrative discrimination exercise
      const hasHierDaar = /\bhier\b|\bdaar\b/.test(sentence);
      if (!hasHierDaar) {
        // Check if it's a pronoun pattern (dit/dat is...) which doesn't need hier/daar
        const isPronounPattern = /\bis\b/.test(sentence) && allAnswers.some(a => a === "dit" || a === "dat");
        if (!isPronounPattern) {
          findings.push({
            lessonId, stepIndex: si, stepId: step.id || null,
            severity: "error",
            shortTitle: "P32: Demonstrative without hier/daar",
            explanation: `Demonstrative exercise (answer: ${allAnswers.join("/")}) has no hier/daar in sentence. Both deze and die could be correct without near/far context.`,
            suggestedFix: "Add hier or daar to the sentence to disambiguate near vs far."
          });
        }
      }
    }
  });

  // ── RULE 10: P34 — Vocabulary gate (Dutch exercises only) ──
  // Every Dutch word in exercise sentences should have been taught (teach card) before.
  if (lang === "nl" && mode === "units") {
    const taughtWords = new Set();
    steps.forEach((step, si) => {
      // Collect taught words from teach cards
      if (step.type === "teach" && step.nl) {
        // Split multi-word entries (e.g. "de man" -> "de", "man")
        step.nl.toLowerCase().split(/\s+/).forEach(w => taughtWords.add(w.replace(/[.,!?]/g, "")));
      }
      // Check exercise sentences for untaught words
      if (["fb", "drag_fill"].includes(step.type) && step.s) {
        const exerciseWords = step.s.toLowerCase()
          .replace(/\{[0-9]+\}/g, "") // Remove drag_fill placeholders
          .replace(/_{3,}/g, "")       // Remove FB blanks
          .split(/\s+/)
          .map(w => w.replace(/[.,!?'"]/g, ""))
          .filter(w => w.length > 0);
        // Common grammar words that don't need explicit teach cards
        const exempt = new Set(["en","in","is","zijn","het","de","een","van",
          "op","aan","er","je","jij","ik","hij","zij","wij","we","u","ze",
          "maar","of","met","naar","voor","om","als","dat","dit","wat","wie",
          "hoe","waar","ja","nee","ook","al","nog","wel","nu","dan","heel",
          "erg","te","uit","tot","bij","per","niet","geen"]);
        exerciseWords.forEach(w => {
          if (!exempt.has(w) && !taughtWords.has(w) && w.length > 1) {
            findings.push({
              lessonId, stepIndex: si, stepId: step.id || null,
              severity: "warn",
              shortTitle: "P34: Possibly untaught word",
              explanation: `Word "${w}" in exercise sentence not found in any teach card in this lesson. May need a teach card or may have been taught in a prior lesson.`,
              suggestedFix: "Verify this word was taught in a prior lesson, or add a teach card for it."
            });
          }
        });
      }
    });
  }

  return findings;
}


// ── Small Helpers ──
const shuffle = a=>[...a].sort(()=>Math.random()-.5);
const pick = a=>a[Math.floor(Math.random()*a.length)];
const clamp = (v,l,h)=>Math.max(l,Math.min(h,v));
const getLevel = xp=>{for(let i=LEVEL_XP.length-1;i>=0;i--)if(xp>=LEVEL_XP[i])return i+1;return 1;};
const cap = s=>s?s.charAt(0).toUpperCase()+s.slice(1):s;
const xpNext = xp=>LEVEL_XP[getLevel(xp)]||12000;
const xpCurr = xp=>LEVEL_XP[getLevel(xp)-1]||0;


// ── Unit Assembly & Normalization ──
const _RAW_UNITS = [...dutchUnits, ...koreanUnits, ...germanUnits, ...germanV2Units, ...UNITS_GERMAN_V2_AR, ...frenchUnits, ...spanishUnits, ...otherUnits].filter(u=>u&&u.lang);
// ── FIELD NORMALIZATION: support both legacy nl/en AND new trg/src ──
// After migration, old field names can be removed. Until then, both coexist.
function _normStep(st){
  if(!st)return st;
  // Mark cards originally written in trg/src format (before normalization adds aliases)
  if(st.trg!==undefined&&st.nl===undefined&&st.pos!==undefined)st._origTrg=true;
  if(st.trg===undefined&&st.nl!==undefined)st.trg=st.nl;
  if(st.src===undefined&&st.en!==undefined)st.src=st.en;
  if(st.nl===undefined&&st.trg!==undefined)st.nl=st.trg;
  if(st.en===undefined&&st.src!==undefined)st.en=st.src;
  if(st.exampleSrc===undefined&&st.exampleEn!==undefined)st.exampleSrc=st.exampleEn;
  if(st.exampleEn===undefined&&st.exampleSrc!==undefined)st.exampleEn=st.exampleSrc;
  if(st.sSrc===undefined&&st.sEn!==undefined)st.sSrc=st.sEn;
  if(st.sEn===undefined&&st.sSrc!==undefined)st.sEn=st.sSrc;
  if(st.qSrc===undefined&&st.qEn!==undefined)st.qSrc=st.qEn;
  if(st.qEn===undefined&&st.qSrc!==undefined)st.qEn=st.qSrc;
  if(st.pairs)st.pairs.forEach(p=>{
    if(p.trg===undefined&&p.nl!==undefined)p.trg=p.nl;
    if(p.src===undefined&&p.en!==undefined)p.src=p.en;
    if(p.nl===undefined&&p.trg!==undefined)p.nl=p.trg;
    if(p.en===undefined&&p.src!==undefined)p.en=p.src;
  });
  // verb_table rows: normalize en↔src on row objects
  if(st.groups)st.groups.forEach(g=>{
    if(g.rows)g.rows.forEach(r=>{
      if(!Array.isArray(r)){
        if(r.src===undefined&&r.en!==undefined)r.src=r.en;
        if(r.en===undefined&&r.src!==undefined)r.en=r.src;
      }
    });
  });
  return st;
}
const UNITS=_RAW_UNITS.map(u=>{
  if(!u||!u.lessons)return u;
  u.lessons.forEach(l=>{if(l.steps)l.steps.forEach(_normStep);});
  if(!u.srcLang)u.srcLang="en";
  return u;
});

// ── Korean Romanization & Search ──
// ── CURRICULUM SEARCH (D113) ──
// Korean romanization tables (Revised Romanization of Korean)
const _INITS=['g','kk','n','d','tt','r','m','b','pp','s','ss','','j','jj','ch','k','t','p','h'];
const _MEDS=['a','ae','ya','yae','eo','e','yeo','ye','o','wa','wae','oe','yo','u','wo','we','wi','yu','eu','ui','i'];
const _FINS=['','g','kk','gs','n','nj','nh','d','l','lg','lm','lb','ls','lt','lp','lh','m','b','bs','s','ss','ng','j','ch','k','t','p','h'];
function _romSyl(ch){
  const code=ch.charCodeAt(0)-0xAC00;
  if(code<0||code>11171)return ch;
  const fin=code%28;const med=Math.floor(code/28)%21;const ini=Math.floor(code/28/21);
  return _INITS[ini]+_MEDS[med]+_FINS[fin];
}
function _romanize(text){
  return[...(text||'')].map(ch=>{const c=ch.charCodeAt(0);return c>=0xAC00&&c<=0xD7A3?_romSyl(ch):ch;}).join('');
}
// Normalize search string: strip diacritics + collapse Korean romanization variants
function _normS(s){
  return s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase()
    .replace(/oo/g,'u')                       // yoong→yung (oo=u variant), before yeong rules
    .replace(/young/g,'yeong')                // common English spelling of 영
    .replace(/yung/g,'yeong')                 // yung→yeong (user: yung=영 variant); also catches yoong after oo→u
    .replace(/yong(?=[^aeiou]|$)/g,'yeong')   // yong→yeong when not before vowel
    .replace(/eu/g,'eo').replace(/uh(?=[^a-z]|$)/g,'eo');
}
// Find verbatim hit in text (after normalization / romanization). Returns {pre,match,post} or null.
function _findHit(rawText,normQ){
  if(!rawText||!normQ)return null;
  // Try direct normalized match first (covers Latin, diacritics, Korean hangul typed directly)
  const normT=_normS(rawText);
  let idx=normT.indexOf(normQ);
  if(idx!==-1){
    return{pre:rawText.slice(0,idx),match:rawText.slice(idx,idx+normQ.length),post:rawText.slice(idx+normQ.length)};
  }
  // Try romanized Korean match — map normQ back to syllable positions
  const romT=_normS(_romanize(rawText));
  idx=romT.indexOf(normQ);
  if(idx!==-1){
    // Map character position in romT back to rawText syllables (approx: 1 syllable = 1 char in rawText)
    // Build a char→rawIndex map
    let romIdx=0;const map=[];
    for(let ri=0;ri<rawText.length;ri++){
      const c=rawText.charCodeAt(ri);
      const chunk=c>=0xAC00&&c<=0xD7A3?_romSyl(rawText[ri]):_normS(rawText[ri]);
      for(let ci=0;ci<chunk.length;ci++){map.push(ri);}romIdx+=chunk.length;
    }
    const rawStart=map[idx]??0;
    const rawEnd=(map[idx+normQ.length-1]??map[map.length-1]??0)+1;
    return{pre:rawText.slice(0,rawStart),match:rawText.slice(rawStart,rawEnd),post:rawText.slice(rawEnd)};
  }
  return null;
}
// Searches all units for the active language. Returns up to 80 results.
function searchUnits(query,lang){
  if(!query)return[];
  const raw=query.trim();
  const normQ=_normS(raw);
  const nonLatin=/[\u1100-\u11FF\uAC00-\uD7AF\u4E00-\u9FFF\u3040-\u30FF\u0600-\u06FF\u0400-\u04FF]/.test(raw);
  if(normQ.length<(nonLatin?1:2))return[];
  const results=[];
  const langUnits=UNITS.filter(u=>u.lang===lang);
  const PRIO=['nl','en','example','exampleEn','q','text','s','note','title','desc'];
  for(const unit of langUnits){
    for(const lesson of(unit.lessons||[])){
      for(let si=0;si<(lesson.steps||[]).length;si++){
        const s=lesson.steps[si];
        let hitText=null;
        for(const field of PRIO){
          const val=s[field];
          if(typeof val==='string'&&_findHit(val,normQ)){hitText=val;break;}
        }
        // Also check opts, pairs, a arrays
        if(!hitText){
          const extras=[
            ...(s.opts||[]),
            ...(s.pairs||[]).flatMap(p=>[p.nl,p.en]),
            ...(Array.isArray(s.a)?s.a:[s.a||''])
          ].filter(t=>typeof t==='string');
          hitText=extras.find(t=>_findHit(t,normQ))||null;
        }
        if(hitText){
          results.push({unit,lesson,si,step:s,hitText,normQ});
          if(results.length>=80)return results;
        }
      }
    }
  }
  return results;
}

// ── DEV GUARD (deferred): Check UNITS lang codes against LANGUAGES + FK coverage ──
try{
if(typeof window!=="undefined"&&window.__lingoDevGuardLangCodes){
  const _lc=window.__lingoDevGuardLangCodes;
  const _unitLangs=new Set(UNITS.map(u=>u.lang));
  _unitLangs.forEach(lc=>{
    if(!_lc.has(lc)){
      const msg=`UNITS has lang "${lc}" not in LANGUAGES — users cannot select it`;
      console.warn(`[LingoVerse] ${msg}`);
      __devWarnings.push(msg);
    }
    if(!FOUNDATIONS_BY_LANG[lc]){
      const msg=`UNITS has lang "${lc}" but no FOUNDATIONS_BY_LANG entry`;
      console.warn(`[LingoVerse] ${msg}`);
      __devWarnings.push(msg);
    }
  });
  delete window.__lingoDevGuardLangCodes;
}
}catch(e){}


export { shuffle, pick, clamp, getLevel, cap, xpNext, xpCurr };
export { _normStep, UNITS, _RAW_UNITS };
export { _romanize, _normS, _findHit, searchUnits };
export { __contentWarnings, validateLessonForLeaks };
export { __devWarnings };
