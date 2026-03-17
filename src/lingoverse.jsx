import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";

// ── Data module imports (extracted from this file for modularity) ──
import { VOCAB_DB, getVocab, toTeach, ICON_REG, LANGUAGES, BASE_LANGUAGES, CEFR_LEVELS, getCefrInfo, getCefrBandColor, FOUNDATION_KEYS, FOUNDATION_SCHEMA, FK_SCHEMA_MAP, FK_MODULE_TYPES, FK_PRACTICE_TYPES, FK_LEARNING_FLOWS, LANG_META, LANG_BLUEPRINT, CULTURE_PACKS, UNIT_TEMPLATES, MKG, p, SCRIPT_BLUEPRINTS } from './data/metadata.js';
import { FOUNDATIONS_BY_LANG, FK_PLAYTHROUGH, FK_GATE_QUIZ } from './data/foundations.js';
import { TEXT_KEYS, tk, UI, t, I18N, localize, OBJECTIVES, STANDARDS, LANG_FRAMEWORK, getUnitStandard, getObjectiveStandard, deriveUnitStandard, explainUnitLevel, VOCAB, LEXEMES, LEXEME_BY_WORD, getLexeme, GRAMMAR, CHAT_STARTERS, AI_RESP, MEANINGS, mkGet, LEVEL_XP, ACHS, ARTICLE_NONE, ARTICLE_SYSTEMS, LANG_FAMILIES, ARTICLE_COLORS, getArticle } from './data/vocabulary.js';
import dutchUnits from './data/units-dutch.js';
import koreanUnits from './data/units-korean.js';
import germanUnits from './data/units-german.js';
import frenchUnits from './data/units-french.js';
import spanishUnits from './data/units-spanish.js';
import otherUnits from './data/units-other.js';

// In-memory storage fallback (localStorage not available in sandbox)
const _memStore = {};

/*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
LINGOVERSE MANIFESTO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

⚡ RETROACTIVE POLISH TODO — DO NOT DELETE ⚡
After Korean B1 (U16) is complete and audited:
1. DUTCH UNITS (U1-U16): Apply new card design standards:
   - Nunito body / Quicksand headings (D41)
   - Compound glossy candy bubbles (D42)
   - Deep dive glossy candy bubbles (D47)
   - False friend lavender candy bubbles (D53)
   - Structured note cards with breathing room (D58)
   - Korean-only lines: centered, large, standalone
   - Empty lines: 12px spacers between logical sections
   - Replace ⚠️/⚡ emojis with AppIcon lightbulb
   - Remove all Georgia serif from teach card notes
2. DUTCH FOUNDATIONS: Same treatment for FK_PLAYTHROUGH.nl
3. KOREAN FOUNDATIONS: Same for FK_PLAYTHROUGH.ko
4. ARABIC UNITS: Same for any ar: UNITS
5. Full re-audit: run audit script, zero tolerance.
This is NOT optional. Every language gets the same polish.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Lingoverse is a self-sustaining multilingual AI learning ecosystem.

VISION AND ROADMAP:

The human building this is a polyglot. The platform will eventually
teach ANY language to ANY speaker. The build order is:

  1. Dutch (A1-A2) — first full course. Human speaks Dutch and
     reviews every lesson. This is where we prove the pipeline.
  2. Korean — second course. Foundations complete, units next.
     Human has Korean knowledge and can review.
  3. Languages the human speaks — German, French, Romanian,
     Spanish, Korean, Chinese. Built with human review as safety net.
  4. Languages the human does NOT speak — Japanese, Turkish,
     Arabic, Russian, and eventually any language. NO native speaker
     in the loop. The pipeline must guarantee quality alone.

WHY THIS MATTERS FOR EVERY AI SESSION:

Every pipeline rule (P8, P24, P26, P32, P34...) exists because
a human caught an error the AI missed. Every validator rule
automates a previously manual check. The goal is to make the
pipeline so airtight that content quality is guaranteed by PROCESS,
not by human review.

When you are unsure about grammar: FLAG IT, do not commit.
When you add a pipeline rule: think "Would this catch this bug
in Japanese, where no human reads the output?"
When you write a validator: think "Does this work for Korean,
Arabic, Chinese, not just Dutch?"

We are building the system that builds courses. Every decision
shapes the process that will eventually run WITHOUT a human
safety net. Treat every session accordingly.

Principles:

1) Foundations First Doctrine
   No language is considered usable until learners are:
   - Reading-ready
   - Writing-ready
   - Phonetics-ready
   - Script-ready
   - Pattern-ready

2) Universal Literacy Principle
   Every writing system must be represented as:
   - 2D grids
   - Form variants
   - Stroke/connection logic
   - Examples
   - Practice scaffolds

3) Meaning-Centric Architecture
   MK keys are the atomic unit.
   All content maps through meaning, not surface language.

4) Cultural Authenticity
   Each language must reflect real beginner life:
   food, politeness, routines, customs, risks.

5) Self-Improving System
   The platform must be able to generate,
   refine, and personalize curricula over time.

6) Personalized AI Curriculum Layer
   There must be a dedicated, isolated personalization system where:
   - The AI chatbot can generate personal courses
   - Interests, goals, weaknesses are tracked
   - Custom MK paths are created
   - Generated content is sandboxed
   - Core curriculum is never polluted

7) Public Beta Access
   The Personalized Curriculum Layer must be exposed as:
   "Personalized (Beta)" in the main navigation,
   placed next to "Learn" on the home screen.
   It must be clearly marked Experimental.
   It must never affect core courses.

8) Question Design: Anti-Leak System
   Every question MUST pass a No-Giveaway Audit:
   - VISUAL: answer must not appear standalone in question text
   - SCRIPT: target-script glyphs must not appear in question
     when the task is to identify that glyph
   - HINT: hints must GUIDE, never REVEAL the answer
   - PATTERN: answer must not be significantly longer than distractors
   - POSITION: answer must not always be in the same slot
   - SELF-ANSWER: showing a jamo/character in the question must
     not let the learner answer by LOOKING instead of RECALLING
   Question and answer must use DIFFERENT representations:
     question = sound/meaning/baseLang → answer = target script
     OR question = target script → answer = sound/romanization
   Before adding any question, ask:
   "Can this be answered without using the target skill?"
   If YES → REWRITE.

9) Text Key Discipline (TK System) — STATUS: DEFERRED
   Not currently implemented. All content uses hardcoded English
   strings. Will be implemented when multi-source-language UI
   is built (allowing non-English speakers as base language).
   - MK keys: vocabulary/meaning items (existing, active)
   - TK keys: instructional prompts, UI labels (not yet built)
   Current content with hardcoded English is acceptable for now.
   Do NOT block content creation waiting for TK implementation.

10) Audio Policy
   TWO SEPARATE AUDIO SYSTEMS exist:
   a) TTS/Pronunciation (AUDIO_ENABLED) — NOT yet operational.
      Until AUDIO_ENABLED = true:
      - No audio-only questions
      - No audio-dependent grading
      - Visual + written only
      - audio_id fields may exist as placeholders
      - SpeakerButton is gated behind AUDIO_ENABLED flag
   b) UI Sound Effects (UI_SOUNDS_ENABLED) — operational.
      Synthesized via Web Audio API, zero external files.
      Covers: navigation ticks, button clicks, page turns,
      correct/wrong chimes, celebration fanfare.
      Gated behind UI_SOUNDS_ENABLED flag (independent of TTS).

11) Content Integrity Auditor
   A dev-mode auditor runs on load and checks:
   - Anti-leak compliance for all MC questions
   - TK key usage in new content
   - FK/MK mapping completeness
   Auditor prints warnings only — never blocks.

12) Foundations Knowledge Design: Reference Library Doctrine
   Knowledge sections are REFERENCE material — what learners look up.
   They are NOT teaching sequences (Playthrough handles that).

   Rules:
   a) NO META-CONTENT: never explain "what decoding means" or
      "how this course works". Orientation = Playthrough intro steps.
   b) GRID-FIRST: every concept that can be a grid MUST be a grid.
      Text items only for concepts that genuinely cannot be tabulated.
   c) ONE SECTION = ONE LOOKUP TOPIC: organize by what learners
      search for ("vowels", "consonants", "spelling rules"),
      not by teaching phase numbers.
   d) CONSISTENT COLOR = CONSISTENT MEANING:
      - Color encodes semantic grouping (vowel family, rule type)
      - Same concept = same color across all grids in that language
      - Never use multiple colors for rows that mean the same thing
      - If rows have no semantic difference, use ONE color
   e) NO TEACHING TIPS in Knowledge: "common mistake" and
      "don't do X" belong in Playthrough. Knowledge = facts,
      maps, tables.
   f) AUDIO_ID on every item (null until TTS is live).

This manifesto must be referenced by future contributors.

13) Foundations Gate Doctrine
   No language unlocks A1+ course units until Foundations are either:
   - Passed via Gate Quiz, OR
   - Completed via Playthrough, OR
   - Explicitly bypassed by the learner ("Unlock anyway")
   The lock is VISUAL (gray overlay + message) but non-blocking
   until FOUNDATIONS_LOCK_ENABLED = true.
   The "Unlock anyway" option must ALWAYS be available —
   we inform, we don't imprison.

14) Language-Agnostic UI Doctrine
   Shared UI components (FoundationsGateQuiz, FoundationsPlaythrough,
   UnitMap, LessonEngine, etc.) must NEVER contain hardcoded
   language-specific terms (Hangul, Dutch, Arabic, Kanji, etc.).
   All rendered text in shared components must be either:
   a) Pulled from per-language data (FK_GATE_QUIZ[lang], FOUNDATIONS_BY_LANG[lang], etc.)
   b) Generic ("Foundations", "the writing system", "this language")
   Language-specific terms are ONLY allowed inside per-language data constants
   (UNITS, VOCAB, FK_PLAYTHROUGH, FK_GATE_QUIZ, FOUNDATIONS_BY_LANG, GRAMMAR_TOPICS, etc.).
   Every batch must pass the Language-Agnostic Audit before shipping.

15) Teacher's Board Design Doctrine
   Educational cards (letters, info, sound rules) must use the
   "teacher's board" aesthetic — clean, minimal, structured:
   a) Script characters displayed NAKED and BIG (no colored boxes,
      no keyboard-key styling, no gradient backgrounds)
   b) No emoji icons on structural/educational content
   c) Notes in clean white cards, not yellow text-wall boxes
   d) Info-dense content structured as rule ROWS, not paragraphs
   e) Referenced glyphs in notes rendered script-aware inline
   f) Example words shown per rule row with real pronunciation

16) Lesson Flow Navigation
   Lesson completion must offer three actions:
   a) OVERVIEW: return to lesson list (Escape shortcut)
   b) TRY AGAIN: replay the same lesson
   c) CONTINUE: advance to next lesson in sequence (⎵ Spacebar)
   Continue is only available when a next lesson exists.
   Arrow keys cycle focus across buttons; Spacebar/Enter activates.
   Backspace goes to previous step WITHIN a lesson, never quits.
   Escape quits the current context (lesson, or navigation level).
   Parent components (Playthrough, Units) compute next-lesson
   and pass onContinue callback. All state resets on lesson change.

17) Board-Style Lesson Engine Doctrine
   Course lessons (not Foundations) can opt into "board mode" via
   lesson.board=true. Board mode uses the Teacher's Board aesthetic
   for TEACH cards inside the LessonEngine:
   a) CLEAN CARD: white background, thin border, no gold "NEW WORD"
      frame, no decorative gradient bubbles, no emoji illustrations.
   b) WORD DISPLAY: big centered word, article as small uppercase
      label (not colored box), phonetic ALWAYS visible (no toggle).
   c) TRANSLATION: simple teal text below word (not gradient pill).
   d) NOTE: clean white card with gray border (not yellow "GOOD TO KNOW").
   e) FOUNDATIONS REF: optional fRef field renders purple badge
      linking to Foundations section (e.g., "📖 See Foundations: Vowels").
   f) VERB TABLES: conjugation data uses type:"verb_table" step with
      purple/green grid — pronoun groups, serif verb forms, teal English.
      Never dump conjugations as plain text in tip cards.
   Board mode does NOT affect quiz steps (mc, fb, match) — those
   keep the standard interactive renderers.
   g) INTRO STEP: white card with purple left accent, Georgia serif
      title, teal description, purple ▸ goal bullets, purple "Begin →"
      button. Matches teach card visual family, not gamified app style.

18) Translation-First Content Doctrine
   Every Dutch/German/target-language example in tips, deepDives,
   and info cards MUST include an English translation.
   a) BILINGUAL LINES: use "Dutch = English" or "Dutch → English"
      format. The tip renderer auto-styles these with purple (target)
      and green (translation) colors.
   b) NEVER leave a target-language sentence untranslated, even in
      deepDives or cultural context sections.
   c) CONVERSATION EXAMPLES: each line must have "= English" after it.
      Example: "A: Hallo! Hoe heet je? = Hi! What's your name?"
   d) BULLET EXAMPLES: bullets with bilingual content use the same
      "= English" format and get auto-styled.
   e) EXCEPTION: single vocabulary words already taught in the same
      lesson do not need inline translation (e.g., "goedemorgen"
      in a pattern explanation where it was just taught).
   RULE: If a learner encounters ANY target-language text they
   haven't been taught yet, it MUST have a translation beside it.

19) Polysemy & Cognate Doctrine
   Every teach card MUST surface the full picture of a word:
   a) POLYSEMY (also field): If a word has additional common
      meanings beyond the primary translation, they MUST be shown.
      Example: "dag" = hello/goodbye BUT ALSO "day" (de dag).
      "waar" = where BUT ALSO "true". "man" = man BUT ALSO "husband".
      Missing polysemy is a content defect — learners who encounter
      the word later in its other meaning will be confused.
   b) COGNATES (cognate field): If a word has a recognizable cousin
      in English, German, or another language the learner likely knows,
      it MUST be shown. Cognates are the #1 memory anchor for adult
      learners (elaborative encoding). Example: "huis" → "English
      'house', German 'Haus'".
   c) FALSE FRIENDS: If a word LOOKS like a cognate but means
      something different, this MUST be flagged. Example: Dutch "kind"
      = child, NOT English "kind" (= aardig).
   d) The board-style teach card renders these as:
      - ⚡ Also: warm amber badge (Von Restorff — distinctive, memorable)
      - 🔗 Cognate: purple link text (elaborative encoding hook)
   RULE: When adding vocabulary to ANY language, always ask:
   "Does this word mean anything else?" and "Does the learner already
   know a cousin of this word?" If yes → add also/cognate fields.

20) Interactive Exercise Doctrine
   ALL exercise types (mc, fb, match, conj, future types) MUST:
   a) KEYBOARD-FIRST: Full navigation via arrow keys + space/enter.
      Backspace goes to previous step. Mouse/tap is supplementary.
   b) PROGRESSIVE FEEDBACK: Visual feedback (lines, highlights,
      animations) appears DURING the exercise as the learner works,
      not just upon completion. Matched pairs draw solid lines live.
      A dashed "pending" line follows from selected item to cursor/focus,
      creating a drag-and-connect visual feel.
      Correct MC answers highlight immediately.
   c) FOCUS VISIBILITY: focused item ALWAYS has a visible ring/glow
      (purple #7B5EE8 for match, blue for MC/FB).
   d) DEV SKIP: Ctrl+S auto-answers any step correctly for testing.
      Shows correct answer. Spacebar then advances.
   e) CONSISTENT COLORS: purple for focus/selection, teal for correct,
      coral for wrong — across ALL exercise types.
   f) NO NEW EXERCISE TYPE ships without keyboard nav + visual feedback.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
*/

/*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CLAUDE'S FK DECISION FRAMEWORK
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

How I decide what a language's Foundations need.
Read this before adding or changing ANY FK content.

STEP 1: ASK "WHAT STOPS A BEGINNER FROM READING?"

   For each language, there is a specific wall that prevents
   a total beginner from reading even one sentence.

   - For Arabic: the wall is SCRIPT (RTL + joining + forms)
   - For Japanese: the wall is THREE SCRIPTS (kana are step 1,
     but kanji is the real wall — without kanji awareness,
     you cannot read a single real sentence)
   - For Chinese: the wall is PRONUNCIATION (tones + pinyin
     is the entire bridge — without finals, you literally
     cannot say half the syllables)
   - For Korean: the wall is ASSEMBLY (how letters become
     syllable blocks + batchim)
   - For Dutch/German: the wall is DECEPTIVE SIMILARITY
     (looks like English but sounds completely different —
     vowel length, digraphs, and spelling rules)
   - For Russian: the wall is FALSE FRIENDS (Cyrillic letters
     that look like Latin but make different sounds)
   - For French/Spanish/Romanian: the wall is ACCENT MARKS
     and SOUND RULES (which letter combos make which sounds)

   Whatever that wall is → that's what FK MUST cover.
   If FK doesn't break that wall, the learner is stuck.

STEP 2: ASK "WHAT DOES THE LEARNER ENCOUNTER FIRST?"

   Don't build FK for advanced features. Build it for what
   the learner will SEE in their first week.

   I got this wrong initially for Japanese. I had hiragana
   and katakana grids (good!) but no kanji section. The problem:
   the VERY FIRST sentence a learner sees (私はコーヒーを飲みます)
   contains kanji. If FK doesn't explain what those characters
   ARE, the learner hits a wall inside their first lesson.

   Similarly for Chinese: I had a grid for the 21 initial
   consonants, but no grid for the ~35 finals. A learner
   can see that 'b' = /p/ but then encounters '-iang' in
   their first word (liáng = 凉 = cool) and has no reference
   for what '-iang' sounds like.

   The test: open Unit 1, Lesson 1 for this language.
   Does FK prepare the learner for what they'll see there?
   If not, FK has a gap.

STEP 3: ASK "WHAT'S THE MINIMUM, NOT THE MAXIMUM?"

   FK is not a textbook. It's a launchpad.

   - Japanese kanji section doesn't teach 2,136 characters.
     It explains WHAT kanji is, shows ~15 basic radicals,
     explains on'yomi/kun'yomi, and shows how kanji + hiragana
     work together. That's enough to not be confused.

   - Chinese finals grid doesn't drill every combination.
     It shows the system: simple finals → compound finals →
     the -n/-ng trap. That's enough to use as a reference.

   The goal is: "after reading FK, I am NOT CONFUSED when
   I start Unit 1." Not: "after reading FK, I have mastered
   the writing system."

STEP 4: ASK "IS THERE A 2D GRID POSSIBLE?"

   The manifesto requires 2D grids for every writing system.
   Grids are powerful because they show STRUCTURE, not just
   individual items.

   - Hiragana/katakana: rows = consonant, cols = vowel → grid
   - Korean consonants/vowels: natural grid
   - Batchim: 7 output sounds × multiple input consonants → grid
   - Chinese initials: rows by place of articulation → grid
   - Chinese finals: rows by vowel series → grid
   - Kanji radicals: rows by category (nature/human/world) → grid
   - Arabic letter forms: rows by letter, cols by position → grid

   If data can be organized into rows and columns, MAKE A GRID.
   Grids are always better than lists for reference material.

STEP 5: COMPARE AGAINST THE STRONGEST FK

   Dutch has 6 sections and 24 items. That's the benchmark.
   Not every language needs that many — Dutch has genuinely
   complex orthography. But ask: does this language's FK
   feel PROPORTIONAL to its complexity?

   - Arabic (complex script) → 6 sections: proportional ✅
   - Japanese (3 scripts) → 3 sections: proportional ✅
   - Korean (assembly system) → 4 sections: proportional ✅
   - Chinese (tones + characters) → 3 sections: proportional ✅
   - French (Latin + accents) → 1 section: proportional ✅
   - Russian (new alphabet) → 1 section: borderline but ok ✅

STEP 6: ANTI-LEAK AUDIT (MANDATORY FOR PLAYTHROUGH)

   Every MC question in a Playthrough lesson MUST pass:

   A) REPRESENTATION SPLIT:
      Question and answer use DIFFERENT representations.
      ✅ "The vowel for 'ah' has its stroke pointing…" → Right
      ❌ "ㅏ has its stroke pointing…" → Right (ㅏ SHOWS the stroke)

   B) NO SELF-ANSWERING:
      The answer must not be visible in the question itself.
      ✅ "Read this syllable: 호" opts: ho/jo/so/go (must decode)
      ✅ "What sound does ㄱ make?" (must recognize the jamo)
      ❌ "Which consonant is in 나?" (answer visible in block)
      ❌ "ㅁ vs ㅇ — how do shapes differ?" (shapes ARE the answer)
      ❌ "What sound does the g/k consonant make?" (answer in text)

   C) NO HINT LEAKS:
      Hints are tap-to-reveal only. Even when revealed, they
      must not contain the answer text or narrow to 1 option.

   D) BALANCED DISTRACTORS:
      All options similar length. No "obviously right" option.

   Run: "Can this be answered without using the target skill?"
   If YES → REWRITE before shipping.

DECISION RECORD: Japanese Kanji Section (v0.27.0)

   OBSERVED: Japanese FK had hiragana + katakana but no kanji.
   TESTED: The "when to use which script" item mentions kanji
     and even shows an example sentence with kanji in it.
     But a learner had never been told what kanji IS.
   DECIDED: Add ja_kanji section with 4 items:
     1. What is kanji (concept + 5 pictographic examples)
     2. On'yomi vs kun'yomi (the two reading systems)
     3. Basic radicals grid (15 radicals in 3 categories)
     4. Kanji + hiragana relationship (okurigana)
   WHY THIS SCOPE: These 4 items answer the question
     "what are those characters I keep seeing?" without
     trying to teach kanji memorization (that's for lessons).

DECISION RECORD: Chinese Finals Section (v0.27.0)

   OBSERVED: Chinese FK had initials grid (21 consonants) but
     no finals grid. Tone sandhi item mentions finals in passing.
   TESTED: A learner sees 'liáng' in a lesson. They can look up
     'l' in the initials grid = /l/. But '-iang'? No reference.
   DECIDED: Add zh_finals section with 4 items:
     1. Simple finals grid (6 basic vowels)
     2. Compound finals grid (all ~35 combinations organized
        by vowel series: a-series, e-series, i-series, u-series, ü-series)
     3. The -n vs -ng trap (the #1 pronunciation mistake)
     4. Stroke order basics (the 4 rules)
   WHY THIS SCOPE: Initials without finals = half a phone book.
     The compound finals grid is the missing reference that
     makes pinyin actually usable as a pronunciation tool.

21) Playthrough-First Doctrine
   ASSUME USERS DO PLAYTHROUGH, NOT KNOWLEDGE.
   Knowledge is a reference library. Playthrough is the learning path.
   Therefore Playthrough must teach everything needed to pass the Gate Quiz.
   If a concept exists only in Knowledge but not in Playthrough, the
   default learner will never encounter it. Treat Playthrough as the
   primary delivery mechanism.

22) Diagram-First Doctrine (Script Languages)
   Every letter-teaching lesson in a non-Latin script Playthrough
   (Arabic, Korean, Japanese, Chinese) MUST start with a DIAGRAM CARD
   (step 0) before the intro/checklist slide. The diagram card shows:
   a) Big letter glyph(s) at readable size
   b) All positional forms in a grid (isolated/initial/medial/final)
   c) Connection behavior note (breaker vs connector)
   d) Micro-examples: the letter inside real word fragments
   The intro slide follows as step 1 with learning goals.
   This ensures the learner SEES the letter forms before being tested.

23) Sound-First Testing Doctrine (Script Languages)
   In script-language quizzes, questions must test DECODING ability:
   a) BEST: Show full assembled block → ask for romanization.
      "Read this syllable: 호" → ho/jo/so/go. The romanization
      is NOT visible in the block — you must decode it.
   b) OK: Show naked jamo → "What sound does ㄱ make?" Use
      sparingly, right after teach cards for initial recognition.
   c) NEVER show assembled block → ask to identify its PARTS.
      "Which consonant is in 나?" = answer visible in the block.
   d) NEVER make visual-comparison questions where both shapes
      are displayed. "ㅁ vs ㅇ — how do shapes differ?" = the
      shapes ARE the answer.
   e) NEVER make self-answering questions where the answer is
      in the question text itself.
   Anti-leak test: "Can this be answered by LOOKING at the question
   instead of KNOWING the answer?" If yes → rewrite.

36) Visual Density Doctrine — "Teacher's Board Energy" (P36)
   Every content element must pass: "Can this be read in ONE SCAN,
   or does the eye have to work?" The gold standard is the bilingual
   pair layout: Dutch bold/large on the left, English light/small on
   the right, arrow between. Whitespace is a feature, not waste.

   TEACH CARD NOTES:
   a) Max 2-3 RENDERED lines. The note box is a summary, not an essay.
   b) No unstructured prose paragraphs over ~100 chars. If you can't
      say it in ~100 chars, you're explaining too much for a note.
   c) STRUCTURE over prose: use \n for line breaks, • for bullets.
      The renderer supports these — use them.
   d) Bilingual pair format (Dutch = English) when showing examples
      inside notes. One pair per line. Never inline prose like
      "The word 'kom' means 'come' and 'woon' means 'live'."
   e) If a note needs a spelling/grammar explanation: put a 1-line
      summary in the note ("Short 'o' → one letter. See deepDive."),
      then put the full explanation in a deepDive on the PARENT tip
      or on the teach card itself (engine supports deepDive on tips).
   f) Cultural context: max 1 sentence. Detail → deepDive.

   NOTE CONTENT TRIAGE — where does information go?
   ┌──────────────────────────────┬──────────────────────────┐
   │ IN THE NOTE                  │ IN A DEEPDIVE            │
   ├──────────────────────────────┼──────────────────────────┤
   │ "What" — the core fact       │ "Why" — the explanation  │
   │ 1-line spelling summary      │ Full open/closed logic   │
   │ 1 cognate link               │ Cross-language history   │
   │ Usage in 1 sentence          │ Cultural context/stories │
   │ Common mistake warning       │ Grammar system reasoning │
   └──────────────────────────────┴──────────────────────────┘

   TIP TEXT:
   g) Prefer bilingual pair format wherever possible. The renderer
      auto-detects "Dutch = English" and "• Dutch = English" patterns
      and renders them as structured bold/light pairs. USE THIS.
   h) Max 2 prose sentences between any two bilingual pairs.
   i) Every tip must be SCANNABLE: a learner should be able to jump
      between Dutch lines without reading the English.
   j) If a tip has >5 bilingual pairs, consider splitting into
      two tips or using a verb_table.

   AUDIT TEST — apply to every card before shipping:
   "Screenshot this card on a phone. Can you read it without
   scrolling? Does the eye know where to land? Is there breathing
   room between ideas?" If no to any → restructure.

37) Function Word Doctrine (P37)
   SCOPE: Universal. Each language defines its own function word list.
   High-frequency function words (connectors, particles, basic
   adverbs) that appear in example sentences MUST have their own
   teach card at or before first use. The learner should never
   encounter a word in 3+ examples without knowing what it means.

   DUTCH function words (teach before first use):
   en (and), of (or), maar (but), ook (also/too),
   niet (not), ja (yes), nee (no), er (there)

   KOREAN function words (teach before first use):
   은/는 (topic), 이/가 (subject), 을/를 (object), 도 (also),
   안 (not), 네/아니요 (yes/no), 에 (at/to), 에서 (from/at)

   Each language must define its own list in LANG_BLUEPRINT.

   RULE: If a lesson uses a function word in an example and that
   word has no teach card in any prior lesson, add a teach card
   for it in THIS lesson before the first example that uses it.

   COGNATE EXCEPTION (P34/P37): A word is exempt from the teach-
   card requirement ONLY if ALL three conditions are met:
   a) Transparently cognate to the learner's source language
      (e.g., "in" = in, "taxi" = taxi)
   b) Appears only in example sentences, NOT in quiz answers
   c) Is a single word, not a phrase or compound
   If any condition fails: teach card required. When in doubt,
   add the teach card. Over-teaching is better than confusion.

38) Progressive Disclosure Doctrine (P38)
   Information that not every learner needs at every viewing must
   be hidden behind a tap/toggle, not displayed by default.

   PHONETICS:
   a) Latin-script languages (Dutch, German, French, Spanish, etc.):
      Phonetic field renders as a TOGGLE BUTTON, collapsed by
      default. Learners who want pronunciation tap to reveal.
      This removes one vertical layer from every teach card.
   b) Non-Latin-script languages (Korean, Arabic, Japanese, Chinese):
      Phonetics remain VISIBLE by default — romanization is
      essential for decoding unfamiliar scripts.
   c) The toggle uses the same interaction pattern as deepDive:
      small tappable element, expand/collapse animation.
   BOARD MODE CLARIFICATION: board:true lessons follow these same
   rules. P38 is the principle, board mode is the implementation.
   No conflict: Latin board cards = phonetic toggle, non-Latin
   board cards = phonetics always visible.

   COGNATES:
   d) Cognate field stays visible (it's a one-line encoding anchor,
      not clutter). But keep cognates SHORT: "English 'work',
      German 'Werk'" — never full sentences about etymology.

   fRef (FOUNDATIONS REFERENCE):
   e) The "See Foundations" badge stays visible as a link/reminder,
      but consider making it smaller or moving it to a less
      prominent position if visual density is still too high.

39) String Escape Verification (P39)
   All content strings (note, text, deepDive, desc) that use \n for
   line breaks MUST contain SINGLE-escaped \n (two bytes: 0x5C 0x6E),
   NOT double-escaped \\n (three bytes: 0x5C 0x5C 0x6E).

   Double-escaped \\n renders as LITERAL TEXT "\n" on screen instead
   of a line break. This is an invisible bug — character-count audits
   pass, the content looks correct in source, but the UI is broken.

   ROOT CAUSE: When using str_replace or file_create tools, writing
   \\n in the parameter produces \\n in the file (double-escaped).
   Writing \n produces \n (correct single escape).

   VALIDATION: After any bulk content insert, run a byte-level check:
     python3 -c "d=open('lingoverse.jsx','rb').read();
     print('BROKEN \\\\n:', d.count(b'\\\\\\\\n'))"
   Result MUST be 0.

   NEVER trust character-count audits alone. Always verify rendering.

   RENDERER FIX (D39b): All .split("\n") calls changed to
   .split(/\\n|\n/) — handles BOTH literal \n (two chars) and
   actual newline (one char). 7 call sites: note (×3), tip text,
   deepDive text (×2), example. This is a SAFETY NET. Data should
   still use correct single-escaped \n.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

RULES STATUS — Last updated March 2026
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  REWRITTEN:
  - P26: Was "No Rule Pre-Naming." Now "Core Constructs First
    Doctrine." Concepts are named when introduced, quiz discipline
    controls what gets tested. See new P26 above.

  DEFERRED:
  - Principle 9 (TK System): Not implemented. Hardcoded English
    strings are acceptable until multi-source-language UI is built.

  SCOPE-TAGGED (not all rules are universal):
  - P25 (Verb Spelling): Latin-script languages only.
  - P43 (Density Floor): Per-language targets in LANG_BLUEPRINT.
  - P37 (Function Words): Universal principle, language-specific
    word lists defined in LANG_BLUEPRINT.

  HIERARCHY (when rules conflict):
  - P18 (always translate) is the DEFAULT for all content.
  - P17a (reading comprehension) is an EXCEPTION to P18, applying
    only to dedicated reading/story exercise steps.
  - P43 (density floor) yields to pedagogy: if a topic needs
    fewer steps, use fewer. Never add filler.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

LANGUAGE CONTENT DECISION LOG
(What went wrong, what rule we adopted, how to apply generically)

DECISION 1 — Arabic: Diagram-First Intro Card
  PROBLEM: Arabic letter lessons started with text-only intro without
    showing actual letter forms. Users saw descriptions but not letters.
  FIX: Added diagram teach step (step 0) with forms[] grid at 32px.
  RULE: Manifesto P23. GENERIC: All script-language letter lessons.

DECISION 2 — Korean: No Full Sentences Before Script
  PROBLEM: Early Korean quizzes used full Hangul before all jamo taught.
  FIX: Restricted early phases to single blocks and CV pairs.
  RULE: Never show script the learner has not been taught yet.
  GENERIC: Track taught characters, never display untaught ones.

DECISION 3 — Anti-Leak Validator
  PROBLEM: Quizzes revealed answers through visual features, lone-script
    choices, copy-paste prompts, and hints containing answers.
  FIX: validateLessonForLeaks() with 6 rules + boot scan + runtime wiring.
  RULE: Manifesto P8. GENERIC: Run validator on every new batch.

DECISION 4 — RTL/LTR Mixing
  PROBLEM: Arabic mixed with English in same fields caused jumbled text.
  FIX: Separated script/Latin. Smart RTL detection in renderer.
  GENERIC: RTL languages must keep script and Latin in separate fields.

DECISION 5 — Glyph Readability
  PROBLEM: Arabic too small in quizzes and grids on mobile.
  FIX: 2x2 grid, fontSize:22+, question renderer splits at 36px.
  GENERIC: Target script = biggest element. English = helper text.

DECISION 6 — Korean: Anti-Leak Rewrite (Naked Jamo vs Assembled Blocks)
  PROBLEM: Korean Playthrough MC questions showed ASSEMBLED syllable
    blocks (e.g. "Which consonant is in 나?", "Read this block: 구").
    The learner could answer by LOOKING at the assembled block instead
    of KNOWING the sound. This violated P8 (Anti-Leak).
    ALSO: ㄱ vs ㄴ description was factually wrong ("angles down-right /
    up-right"). Correct: ㄱ goes RIGHT then DOWN, ㄴ goes DOWN then RIGHT.
  KEY DISTINCTION:
    ✅ Show FULL SYLLABLE BLOCK → ask for romanization = BEST TEST
       "Read this syllable: 호" opts: ho/jo/so/go (tests decoding)
    ✅ Showing NAKED JAMO (ㄱ, ㄴ) → "What sound does ㄱ make?" = OK
       (tests jamo recognition — use sparingly, right after teach card)
    ❌ Showing ASSEMBLED BLOCK → ask to identify its PARTS = LEAKED
       "Which consonant is in 나?" (answer is visually inside the block)
    ❌ Visual-comparison → "ㅁ vs ㅇ — how do shapes differ?" = LEAKED
       (answer is visible by looking at the two characters shown)
    ❌ Self-answering: "What sound does the g/k consonant make?" = ABSURD
  FIX: Rewrote all questions following the distinction above.
    Fixed ㄱ/ㄴ stroke direction description.
  RULE: Sound-First Testing Doctrine (Manifesto P21).
  GENERIC: Naked components in questions = OK.
    Assembled targets in questions = LEAKED. Self-answering = ABSURD.

DECISION 7 — LessonEngine: Full Keyboard Navigation
  PROBLEM: LessonEngine only supported spacebar-to-continue and
    limited arrow key navigation. MC options, matching pairs, and
    other interactive elements required mouse clicks. Lesson completion
    screen had no keyboard support and no way to continue to the next
    lesson without going back to the overview.
  FIX: Full keyboard navigation in LessonEngine:
    - Arrow keys (↑↓←→) navigate between MC options and matching pairs
    - Spacebar selects the focused option (acts as click)
    - Spacebar continues on teach/intro/tip/verb_table/result screens
    - In text-input (translate) questions ONLY: Enter submits,
      spacebar types normally (does NOT continue)
    - Backspace = go to previous step within lesson (NEVER quits)
    - Escape = quit lesson (replaced old ArrowLeft quit — see D17)
    - ↓ = open deepDive on tip/verb_table (first press only, then scrolls)
    - ↑ = close deepDive
    - Ctrl+S = dev skip (auto-answer, see D16)
    - Done screen: 3 buttons (Overview, Try Again, Continue)
      · Arrow keys cycle focus across available buttons
      · Spacebar/Enter activates focused button
      · Escape goes to Overview (shortcut)
      · Continue auto-focused when next lesson exists
      · Overview auto-focused when it's the last lesson
    - onContinue prop: LessonEngine receives next-lesson callback
      from parent (Foundations/Units). Null = last lesson in sequence.
    - Lesson state auto-resets on lessonId change (Continue flow)
  RULE: Every interactive element in LessonEngine must be keyboard-
    accessible. Spacebar = universal select/continue EXCEPT in text
    input fields where it must type a space character.
    Done screen must ALWAYS offer Overview + Try Again. Continue only
    when a next lesson exists in the sequence.
  GENERIC: All lesson renderers (Playthrough, Gate Quiz, Units) must
    support full keyboard navigation with consistent bindings.
    Parent components must compute next-lesson and pass onContinue.

DECISION 8 — Korean Playthrough: Phase Restructuring & Block Diagrams
  PROBLEM: 1) Aspirated (ㅋㅌㅍㅊ) and tense (ㄲㄸㅃㅆㅉ) consonants were
    crammed into one lesson. Tense/ssang consonants barely introduced.
    2) ㅎ incorrectly listed in [t] neutralization group. Reality: ㅎ as
    batchim causes ASPIRATION of the following consonant (batchim C + ㅎ
    initial → aspirated version: ㄱ+ㅎ→[ㅋ], ㄷ+ㅎ→[ㅌ], ㅂ+ㅎ→[ㅍ],
    ㅈ+ㅎ→[ㅊ]). Only neutralizes to [t] at utterance-final pause.
    3) Block structure was described in text, not shown visually.
    4) Phases 6-8 MC questions used wordy production style instead of
    "Read this syllable: X" → romanization pattern.
  FIX:
    a) Phase 6 → Block Architecture + Batchim (3 lessons: block layouts
       with visual diagrams, ㄴ/ㅁ batchim, ㄹ/ㅇ batchim)
    b) Phase 7 → Complex Vowels (all "Read this" drills)
    c) Phase 8 → Aspirated (2 lessons: ㅋ/ㅌ then ㅍ/ㅊ)
    d) Phase 9 → Tense/Ssang (2 lessons: ㄲ/ㄸ then ㅃ/ㅆ/ㅉ)
    e) Phase 10 → Sound Rules (7 finals, liaison, nasalization + 격음화)
    f) Added `diagram` property to teach cards with colored grid renderer
       showing CV, CVC, CVCC, combo-vowel block structures
    g) Removed ㅎ from [t] neutralization group in knowledge grid
    h) Added 격음화 (aspiration by ㅎ) as distinct sound rule
  RULE: Manifesto P5 (Separation of Concerns), P8 (Anti-Leak).
  GENERIC: Script-language playthroughs should space out related
    consonant types across phases rather than cramming them together.

DECISION 9 — Teach Card Kind System + Script Display Parity + TTS Locale
  PROBLEM: 1) All teach steps rendered as "New Word" cards — even single
    letters (ㄱ, ب) and structural concepts (CVC layout, batchim rules).
    This forced vocabulary-card UI (emoji icon, "In Context" section,
    article-colored bubble) onto non-vocabulary content.
    2) LessonEngine MC/FB renderers had no script-aware rendering — Arabic
    and Korean text appeared tiny at default font size with no RTL support.
    3) All SpeakerButton calls hardcoded lang="nl-NL".
    4) Info-dense cards (sound rules, neutralization groups) dumped all
    content into yellow text-wall notes — unreadable and unstructured.
  FIX:
    a) Added `kind` field: "letter" | "info" | "idiom" | "word" (default)
       - letter: "New Letter" banner, 52px script, no emoji, no "In Context"
       - info: Clean concept card, no gold frame, diagram-friendly layout
       - idiom: "New Expression" banner (reserved for future use)
    b) Tagged 67 letter + 11 info Foundations teach steps
    c) Script-aware MC/FB/goals: non-ASCII at 36px purple, RTL for Arabic
    d) Added ttsLocale to LANG_META, replaced all hardcoded "nl-NL"
    e) Validator Rule 7: warns on untagged single-char Foundations teach
    f) Info card rules renderer: structured "teacher's board" layout with
       big jamo, colored arrows, per-rule example words, subtle separators.
       Replaced yellow text-wall notes with clean grid rows. Result jamo
       shown in green text (no box) for visual clarity without heaviness.
    g) Full Korean info card audit (11 cards):
       - 6 cards converted to rules:[] format (block slots, decoding,
         7 final sounds, liaison, nasalization, aspiration)
       - 4 cards use diagram renderer (CV vertical/horizontal, CVC, CVCC)
       - 1 card is plain concept (□ syllable block intro)
       - ALL emoji icons removed from info cards
       - ALL notes shortened to one-line summaries
       - Space-separated jamo in from fields renders with / dividers
         (for groups like "ㄱ ㅋ ㄲ → [k]"); + separated renders with +
    h) Rules renderer handles two from-field patterns:
       - "ㄱ + ㅎ" (plus-separated) → big jamo with + signs between
       - "ㄱ ㅋ ㄲ" (space-separated) → slightly smaller jamo with / dividers
  RULE: Teach cards must match content type. Script = BIG. English = helper.
    Info-dense content must be structured as rows, not paragraphs.
    No emoji on educational structural content.
  GENERIC: Every Foundations language must tag teach steps with kind.
    Sound rules should use rules:[] format with real-word examples per row.

DECISION 10 — Letter Card Teacher's Board Style
  PROBLEM: Letter teach cards (ㄷ, ㅂ, ب, etc.) used the same styling
    as vocabulary word cards: article-color dark box wrapping the jamo
    (looked like a keyboard key), teal gradient pill for translation,
    yellow "GOOD TO KNOW" box with 💡 emoji for notes. Heavy, cluttered,
    and inconsistent with the clean teacher's board style on info cards.
  FIX:
    a) Removed article-color system from letter cards — jamo shown naked
       at 56px (isNew) / 48px (review) in purple (#7B5EE8), no dark box
    b) Translation (d/t) shown as green text, not teal gradient pill
    c) Yellow note box replaced with clean white card (white bg, gray
       border, no emoji icon, no "GOOD TO KNOW" header)
    d) Referenced jamo in notes (e.g. "ㄷ vs ㄱ") auto-rendered in
       purple 22px inline via non-ASCII regex split
    e) Syllable example combos (다 더 도 두 드 디) shown in purple
       22px with romanization underneath — visible on both isNew and
       review cards
    f) Word/idiom cards completely untouched — still get article-color
       box, teal pill, yellow note, emoji icon
  RULE: Letter cards = teacher pointing at character on board with a
    small note underneath. No keyboard-key boxes, no emoji clutter,
    no gradient pills. Script characters always displayed naked and big.
  GENERIC: All script-language letter cards must use teacher's board
    style. Referenced glyphs in notes must render script-aware inline.

DECISION 11 — UI Sound & Visual Effects System
  PROBLEM: LessonEngine had no audio or visual feedback. Navigating
    through cards, answering questions, and completing lessons all
    happened silently. The experience felt flat and unrewarding.
    Hover states across the platform were inconsistent — cards barely
    changed, top nav had no visual pop, buttons had different lift
    amounts. No unified hover language.
  FIX:
    a) Web Audio API synth engine (UISounds singleton) — zero external
       files, zero network requests, all sounds generated via
       OscillatorNode + noise buffers + gain envelopes
    b) Sound catalog:
       - tick: 15ms filtered noise burst (3500Hz bandpass) — focus
         changes AND global hover on all clickable elements
       - click: 25ms noise burst (2800Hz) — button activations, punchy
       - pageTurn: warm subtle pop (600Hz sine, 50ms) — advancing to next step
       - correct: gentle high chime (880→1100Hz sine) — dim but clear
         ascending pair, not aggressive
       - wrong: soft low double-bump (280→220Hz sine) — subtle
       - celebrate: ascending chime cascade (660→1320Hz) + sparkle
         burst finale — tone-based with noise burst accent
    c) CSS confetti: 35 particles with random colors, sizes, spin,
       fall duration. Pure CSS animation, no JS particle system.
       Fires once on done screen.
    d) UI_SOUNDS_ENABLED flag (separate from AUDIO_ENABLED/TTS)
    e) Global hover tick: mouseover listener on document, uses
       strict closest() with selector for real interactive elements
       (button, a, [role=button], .card, .btn, .ach-card, select,
       .topnav-item, .topnav-logo-wrap, .lang-card).
       No getComputedStyle — avoids inherited cursor:pointer spam.
       Fires UISounds.tick() ONCE per interactive area — child
       elements inside a button resolve to the button itself.
       mouseleave resets tracking so re-entering fires again.
    f) Wired into: goNext (click), checkAndNext (correct/wrong),
       done screen keyboard (tick on focus, click on activate),
       done screen buttons (click on mouse click), quiz option
       navigation (tick on arrow keys)
    g) Unified hover visual system:
       - .card: blue border + lift 2px + shadow (matches .lang-card)
       - .btn-*: all variants lift 2px + shadow (normalized)
       - .btn-outline: lift 2px (was 1px)
       - .topnav-item: gray outline box + subtle glow (NO lift, NO
         background change — distinguished from content buttons)
       - .topnav-logo-wrap: same outline treatment as nav items
       - .lang-card: unchanged (already the gold standard)
  RULE: UI sounds are SEPARATE from TTS/pronunciation audio (P10).
    UI_SOUNDS_ENABLED gates all UI feedback sounds independently.
    All sounds must be < 200ms, synthesized (no files), low volume.
    Confetti is purely visual — no performance-heavy particle systems.
    Global hover tick: strict closest() selector only, never
    getComputedStyle. ONE tick per interactive area via dedup.
    Top nav hover = outline box (structural). Content hover = lift +
    border pop (interactive). Two distinct visual languages.
  GENERIC: UI sound feedback should cover: navigation, selection,
    success, failure, celebration. All via Web Audio API synthesis.
    Every clickable element must have both tick AND visual hover
    feedback. Nav and content use different hover treatments.
    h) useFocusNav hook: global arrow-key navigation system.
       Scans container (or document.body) for interactive elements.
       Arrow keys navigate focus, Space/Enter activate, Backspace = back.
       .kb-focus CSS class applied to focused element with matching
       visual treatment (cards = blue border + lift, nav = outline).
       Mouse movement clears keyboard focus to avoid hover conflict.
       NO WRAP: when at last element and pressing ↓, returns null —
       arrow key is NOT preventDefault'd, letting browser scroll.
       Same at first element pressing ↑. This means arrow navigation
       flows naturally into page scrolling at boundaries.
       SELECTIVE BLOCKING: only blocked by data-kb-owner="lesson" and
       data-kb-owner="lesson-done" (LessonEngine has own arrow handling).
       Pages like LessonList (data-kb-owner="learn") and Foundations
       ("foundations") still get useFocusNav for button navigation.
       The GLOBAL BACKSPACE handler uses broader [data-kb-owner] check.

DECISION 12 — Dutch v2 Curriculum (Parallel to Legacy)
  PROBLEM: Original Dutch A1 content (23 legacy units) was organically grown,
    lacked systematic grammar spine, and had bloated unit count.
  FIX:
    a) 10 new v2 units (A1.1–A2.2) added to UNITS[] with track:"v2".
    b) 23 legacy units preserved in UNITS[] with track:"legacy".
    c) UnitMap auto-detects tracks and shows toggle ("New Course"/"Legacy").
    d) Both tracks use identical UnitMap rendering (CEFR grid, Foundations).
    e) v2 lessons use "v2u" prefix IDs to avoid progress key collisions.
    f) Full verb conjugations from Unit 1 (not seeded fragments).
    g) Default track: v2 (new course).
  RULE: Legacy content is PRESERVED, not deleted. Track toggle appears
    only when multiple tracks exist for a language. Other languages
    can adopt same pattern by adding track:"v2" to new units.

DECISION 13 — Board-Style Teach Cards & verb_table Step Type
  PROBLEM: Dutch v2 lessons initially used the standard LessonEngine teach
    card renderer — gold "NEW WORD" frames, gradient pills, decorative
    bubbles, phonetic behind toggle. This was designed for vocabulary
    drilling but felt cluttered for grammar-focused A1 lessons where
    the goal is clean comprehension, not gamification. Conjugation tables
    were dumped as plain text inside tip cards — no visual structure,
    no color coding, looked like a text file.
  FIX:
    a) New lesson flag: board:true triggers board-mode teach cards.
       Clean white card, big centered word, phonetic always visible,
       translation as simple teal text, notes in white cards (not yellow).
    b) New step type: "verb_table" with structured data:
       - groups[] with label (Singular/Third Person/Plural)
       - rows[] with pronoun, form, en fields
       - Purple (#7B5EE8) for pronouns, dark purple serif for verb forms,
         teal green (#2ECDA7) for English translations
       - Collapsible deepDive with same styling
    c) Article colors preserved as small uppercase label above word.
    d) Optional fRef field renders Foundations reference badge.
  RULE: Conjugation data MUST use verb_table, never plain text tips.
    Board mode is opt-in per lesson — legacy/other lessons unaffected.
    Manifesto P17. GENERIC: Any language with conjugation-heavy early
    lessons should use verb_table + board:true.

DECISION 14 — Translation-First Content & Bilingual Line Rendering
  PROBLEM: Tip cards and deepDives contained raw Dutch sentences without
    English translations. Examples like "Jij werkt hier." and
    "Hij woont in Utrecht." appeared as untranslated text — violating
    the core principle that learners should never see untaught material
    without support. Tip text renderer treated all lines as plain text
    with no visual distinction between Dutch and English.
  FIX:
    a) ALL Dutch examples in tips/deepDives now use "Dutch = English"
       or "Dutch → English" format.
    b) Tip and deepDive text renderers upgraded to detect nl = en
       patterns and render them with purple (#7B5EE8, serif font) for
       Dutch and green (#2ECDA7) for English — matching the verb_table
       color scheme from Korean Foundations.
    c) Bullet points with bilingual content also get styled.
    d) Conversation examples: "A: Hallo! Hoe heet je? = Hi! What's your name?"
  RULE: Manifesto P18. NEVER leave target-language text untranslated
    in tips or deepDives. The purple/green auto-styling only works if
    content authors use "=" or "→" between Dutch and English.
    GENERIC: Applies to ALL languages — German, Arabic, Korean tips
    should also follow this pattern going forward.

DECISION 15 — Polysemy, Cognates & Visual Engagement in Board Cards
  PROBLEM: Board-style teach cards (Decision 13) solved the clutter problem
    but swung too far toward minimalism. Cards were visually flat — white box,
    plain text, no visual anchors for memory. Worse, polysemy was ignored:
    "dag" was taught as "hello/goodbye" but its meaning "day" was omitted.
    "waar" = where but also "true". "man" = man but also "husband".
    Missing secondary meanings creates confusion when learners encounter them
    later. Adult polyglots rely heavily on cognate recognition for fast
    vocabulary acquisition, but no cognate links were shown.
  FIX:
    a) Board card redesigned with neuroscience-backed visual elements:
       - Left accent strip (purple for new, gray for review) — Von Restorff
         effect: distinctive border makes new words stand out in memory.
       - Serif font for target word — dual coding: different font activates
         additional visual processing, improves retention.
       - Subtle gradient backgrounds — provides warmth without clutter.
       - Note card with purple left border — visual grouping.
    b) New "also" field: ⚡ Also badge in warm amber for polysemy.
       Surfaces secondary meanings so learners get the full picture.
       Example: dag → "⚡ Also: 'de dag' = the day"
    c) New "cognate" field: 🔗 Cognate link in purple for memory anchors.
       Connects new word to known words in English/German/etc.
       Elaborative encoding — strongest predictor of long-term retention.
       Example: huis → "🔗 English 'house', German 'Haus'"
    d) False friends flagged: het kind → "German 'Kind' — NOT English 'kind'"
    e) Speaker button moved to top-right strip for cleaner card flow.
  RULE: Manifesto P19. EVERY teach card must be audited for polysemy and
    cognates. Missing a common secondary meaning is a content defect.
    GENERIC: Applies to ALL languages. German, Arabic, Korean teach cards
    should add also/cognate fields wherever applicable.

  RULE: Manifesto P20. SEMI-PERMANENT ENGINE. The LessonEngine is the
    rendering engine for all lesson content. All card types share one
    visual language: white cards, purple left accent (#7B5EE8), Georgia
    serif titles, purple buttons, purple labels. Do NOT create new
    card renderers or use blue gradients in lesson cards. The done
    screen uses purple Continue. GENERIC: All languages, all tracks.

  RULE: Manifesto P21. CONTENT FORMATTING. Never use em-dashes (—) in
    any content field. Use periods, colons, commas, or bullet points.
    Notes with multiple points must use \n• bullet structure. Tips
    must always have a title field. MC answers must be concise. Goal
    items use "Verb + object" format. Non-ASCII is auto-rendered at
    22px bold purple by the engine. GENERIC: All languages.

  RULE: Manifesto P22. NO BLUE IN BOARD CARDS. Board-style lesson
    cards (teach, info, tip, intro, mc, fb, match) use ONLY: purple
    #7B5EE8, teal #2ECDA7, gray, and white. NO var(--blue), NO
    rgba(74,143,231), NO gold/yellow gradients. Phonetic text is
    always gray var(--gray-400), no slashes, positioned below example.
    All Hangul/Arabic/CJK is always purple #7B5EE8. Letters render
    at 64px. GENERIC: All board:true content in all languages.

  RULE: Manifesto P23. SMART HIGHLIGHTING + SHARED RENDERERS.
    smartHl() is THE text renderer for all board card prose. Detects:
    non-ASCII → purple 22px bold; ALL-CAPS keywords (RIGHT, LEFT,
    TOP, BOTTOM, BELOW, ABOVE, UP, DOWN, HORIZONTAL, VERTICAL,
    ONLY, NEVER, ALWAYS, NOT, SILENT, INITIAL, INSIDE, ZERO, MUST)
    → teal bold; 'quoted sounds' (max 12 char, no spaces) → teal
    bold; phonetic tokens (ah, oh, oo, uh, ee, ng) → teal bold.
    Applied to: note, exampleEn, phonetic, tip text, deep dive,
    intro goals, MC/FB hints. MC question uses inline variant with
    32px Hangul + teal keywords. Intro desc uses Hangul-only purple
    within teal base. Arrow parsers use GRAY base, not forced
    purple/teal — smartHl handles all token coloring.
    renderDiagram() is THE diagram renderer for syllable block
    visuals. renderLetterExample() is THE example renderer for
    operator combos (C + V → syllable). All three are shared
    single-source functions (TDZ-safe, defined before card renderers).
    CONTENT RULE: Keywords describing block structure or direction
    = ALL-CAPS. Visual shape descriptions = lowercase. en field =
    sound/meaning ONLY, never shape/structure metadata. Letter cards
    that introduce spatial relationships get a diagram field.
    Info cards must spell out "consonant" and "vowel" as words.
    Never use [C], [V], CV as the primary title. Multi-line
    examples use \n, one combination per line.

  RULE: Manifesto P24. LESSON REDUNDANCY PREVENTION.
    Before writing ANY lesson content for a unit, verify that the
    grammar target or concept has NOT been fully taught in a prior
    unit. If it has: the new lesson MUST teach a NEW SKILL that uses
    the old concept as vehicle (e.g. discrimination, production,
    context-switching). The intro card must name the new skill
    explicitly. A lesson titled after an already-taught concept
    (e.g. "Hebben: Full Conjugation" when hebben was fully taught
    in a prior unit) is a P24 VIOLATION. Acceptable patterns:
    - "Zijn of Hebben?" (choice skill, not re-teach)
    - "Hebben in Context" (new usage, not re-conjugation)
    - "Unit X Review" (explicitly labelled review)
    Unacceptable patterns:
    - "Hebben: Full Conjugation" (duplicate of prior unit)
    - "All the Pronouns" (duplicate of prior unit)
    AUTOMATED CHECK: Before filling stub arrays, grep all prior
    unit teach cards for the same grammar target. If found as a
    full teach, the new lesson cannot re-teach it.
    GENERIC: All languages. Critical for languages the human
    reviewer does not personally speak.

  RULE: Manifesto P25. VERB SPELLING & FOUNDATIONS REFERENCE.
    SCOPE: Latin-script languages (Dutch, German, French, etc.).
    When teaching a new verb, the teach cards for the infinitive
    and ik-form MUST explain pronunciation and spelling differences
    using plain language (NOT IPA notation).
    Specifically:
    - Infinitive card: note the open syllable, link fRef
    - Ik-form card: explain WHY the vowel is spelled the way it is
      (doubled to stay long in closed syllable, or single because
      short). Use English comparisons ("like 'cot'", "long 'oh'").
    - If the spelling is surprising (e.g. "kom" not "koom", or
      "spreek" not "sprek"), the note MUST address this explicitly.
    - fRef buttons handle the Foundations link. Do NOT write
      "See Foundations" in the note text itself.
    NON-LATIN EQUIVALENT: For Korean, Arabic, Japanese, Chinese,
    etc., the equivalent is explaining form changes relevant to
    that script system (e.g., vowel harmony for Korean verbs,
    form variations for Arabic roots). Each language defines its
    own verb-teaching standards in LANG_BLUEPRINT.

  RULE: Manifesto P27. VISUAL CLEANLINESS.
    All user-facing text must be visually clean and human-readable.
    PROHIBITED in note, hint, tip, and desc fields:
    - IPA notation with slashes: /a/, /oh/, etc.
    - IPA symbols: no special unicode like open-o, schwa, length marks
    - Slashes as separators: "jij/u/hij" -> use commas: "jij, u, hij"
    - "See Foundations" text (the fRef button handles this)
    - Academic linguistic terminology without plain-language equivalent
    Use plain English comparisons instead:
    - "sounds like 'oh'" not "/o:/"
    - "short, like 'cot'" not "short /open-o/"
    - "a quick, lazy 'uh'" not "a schwa"
    Phonetic fields must use ASCII-only approximations (KOH-mun,
    SPRAY-kun) not IPA symbols.
    ENGINE: isScript detection must use narrow regex matching only
    actual non-Latin scripts (Korean, Arabic, CJK, Japanese), NOT
    Latin diacritics (e, u, c, etc.). Words like "Belgie" must
    render in black at normal size, not purple at 48px.
    GENERIC: All languages, all card types, all text fields.

  RULE: Manifesto P26. CORE CONSTRUCTS FIRST DOCTRINE.
    Every language has 5-8 core constructs: the fundamental building
    blocks that make the entire language "click." These MUST be taught
    (named, explained briefly) within the first 3 lessons. The learner
    should leave their first session knowing the SHAPE of the language.

    THREE PHASES:
    a) INTRODUCE (Lessons 1-3): Teach the construct. Name it. Explain
       it briefly. Quiz only vocabulary and phrases, NOT the system
       mechanics. Example: "This polite form is called 해요체. Korean
       has three speech levels: 해요체 (polite), 합니다체 (formal),
       반말 (casual)." The learner knows the concept exists and what
       it is called. They are not tested on speech level selection.
    b) USE (ongoing lessons): Every sentence uses the constructs.
       Quick callbacks reinforce understanding: "Remember, vowel
       harmony decides the ending." Constructs are PRESENT in all
       content but not TESTED as a system. The learner builds
       subconscious familiarity through repeated exposure.
    c) ELABORATE (dedicated unit): Full formal treatment. All rules,
       exceptions, conjugation tables, drills. NOW you quiz the system.
       This is where the learner already "knows" the pattern from
       months of exposure, and the formal lesson crystallizes it.

    WHAT CHANGED (formerly "No Rule Pre-Naming"):
    The old P26 tried to protect learners by HIDING grammar names.
    The new P26 protects learners by controlling what gets QUIZZED.
    Knowing what 해요체 is called is not a burden. Being tested on
    all its conjugation rules before you have practiced them IS.

    CORE CONSTRUCTS LISTS (defined in LANG_BLUEPRINT per language):
    - Korean: SOV word order, particles (은/는, 이/가, 을/를),
      speech levels (해요체/합니다체/반말), -요 polite marker,
      verb stems + -다 dictionary form, vowel harmony
    - Dutch: de/het articles, SVO word order, stam+t conjugation,
      verb inversion in questions, geen vs niet negation
    - German: 3 genders (der/die/das), case system (4 cases),
      verb-second in main clauses, separable verbs, modal verbs
    - Arabic: 3-letter root system, RTL script, gender in
      everything, verb forms/patterns, definiteness (al-)
    - Japanese: SOV, particles (は/が/を), 3 scripts exist,
      politeness levels (です/ます), no plurals/articles

    QUIZ DISCIPLINE: The distinction between phases is WHAT GETS
    QUIZZED, not what gets taught. In the Introduce phase, MC/FB
    questions test vocabulary ("What does 가다 mean?"), not system
    mechanics ("Which speech level is appropriate here?"). System
    mechanics are quizzed only in the Elaborate phase.

    GENERIC: Universal. Every language must define its Core Constructs
    List before writing Unit 1. This list drives curriculum generation.

  RULE: Manifesto P8 ENHANCEMENT. MC/FB OPTION SHUFFLE.
    The LessonEngine MUST shuffle MC and FB option arrays before
    rendering. This is an ENGINE-level guarantee that answer
    position never correlates with array order. Implementation:
    shuffleOpts(opts, stepIndex) uses a deterministic seed so
    order is stable within a session but varies per step.
    CONTENT authors must ALSO vary answer positions in the opts
    array as defense-in-depth (engine shuffle + content variation
    = belt AND suspenders). Target: roughly 25% each position
    across all quiz steps in a lesson.
    GENERIC: All MC/FB steps in all languages, all tracks.

DECISION 16 — Match Pairs: Live Lines, Keyboard Nav & Dev Skip
  PROBLEM: Match pairs exercise had no keyboard navigation (only mouse/tap),
    no visual feedback showing which pairs had been connected, and no way
    to skip through exercises during development testing.
  FIX:
    a) KEYBOARD NAV: Arrow keys navigate match items as flat list —
       ↑↓ within column, ←→ switch between NL/EN columns. Space selects.
       Purple (#7B5EE8) focus ring with glow, consistent with MC/FB.
    b) LIVE CONNECTING LINES: Purple solid SVG lines (#7B5EE8, 2.5px)
       appear IMMEDIATELY when each pair is matched — not just at the end.
       Each new line fades in (opacity 0→0.7 animation). PLUS: a lighter
       dashed "pending" line (#7B5EE8, 2px, opacity 0.3) stretches from
       the selected NL word to wherever the cursor/focus is on the EN side,
       creating a drag-and-connect feel. Pending line updates on hover
       (onMouseEnter) and keyboard focus (focusIdx). Lines are drawn
       by measuring DOM element positions via getBoundingClientRect.
       Matched items get purple border + bg.
    c) CTRL+S DEV SKIP: In any step type, Ctrl+S (or Cmd+S):
       - MC/FB: auto-selects correct answer, shows it, spacebar continues
       - Match: auto-completes ALL pairs, draws all lines at once
       - Teach/tip/intro/verb_table: advances to next step
       - If already answered: fires continue action
       This is a development-only shortcut for rapid content testing.
    d) linePositions state reset on step change AND lesson change.
    e) BACKSPACE BACKTRACKING: Pressing Backspace goes to previous step
       within a lesson (si-1). Resets all answer state (selOpt, matchDone,
       linePositions, focusIdx, etc.). Blocked in text inputs. Sound: pageTurn.
       Does nothing on step 0. This gives full forward+backward navigation.
    f) BOARD-STYLE INTRO: Intro step redesigned to match teach card
       visual language — white card with purple left accent (4px), top
       strip with lesson emoji + "LESSON" label, Georgia serif title,
       teal description, clean goal rows with purple ▸ bullets (not
       blue box + teal checkmarks), purple "Begin →" button.
  RULE: ALL interactive exercise types must support full keyboard
    navigation. Visual feedback (lines, animations) must appear
    progressively during the exercise, not just at completion.
    GENERIC: Any new exercise type (drag-drop, reorder, etc.) must
    follow this pattern: keyboard first, progressive visual feedback.

DECISION 17 — Lesson Engine Polish: Navigation, Resume & Visual Cohesion
  PROBLEM: Multiple UX papercuts discovered during testing:
    a) verb_table Continue button didn't respond to spacebar (missing
       from registration list)
    b) ArrowLeft was mapped to "quit lesson" — conflicted with option
       navigation on quiz steps and was unintuitive
    c) No way to resume a lesson after quitting mid-progress
    d) Intro step used gamified colored-pill style that clashed with
       the clean board-style teach cards
    e) DeepDive panels had no keyboard access (mouse-only toggle)
    f) Backspace on unit grid (Units 1-6 within a chapter band) went
       to home instead of back to chapter select
    g) Back button wasn't visible on non-quiz steps
  FIX:
    a) Added "verb_table" to spacebar continueRef registration list.
    b) QUIT REMAPPED TO ESCAPE: ArrowLeft no longer quits. Escape quits
       from lesson and done screen. Quit button shows "✕ Quit Esc".
       ArrowLeft is now free for option navigation only.
    c) LESSON RESUME: Progress (step index + score) saved to localStorage
       on every step change. On re-entering a lesson with saved progress,
       a board-style dialog shows % completion and offers "Start over" or
       "Continue →". Progress clears on lesson completion.
    d) BOARD-STYLE INTRO: lesson.board=true intros now use white card
       with purple left accent (4px), Georgia serif title, teal description,
       purple ▸ goal bullets, purple "Begin →" button. Legacy intro
       preserved for non-board lessons.
    e) DEEPDIVE KEYBOARD: ArrowDown opens deepDive (first press only —
       subsequent ↓ scrolls page normally). ArrowUp closes it. Small ↓
       hint shown next to chevron. Works on tip and verb_table steps.
    f) UNITMAP BACKSPACE HIERARCHY: Added capture-phase keyboard handler
       to UnitMap that intercepts Backspace/Escape when NOT at top level.
       Navigation priority: fkSection → fkMode → band → chapter select.
       At chapter select level, handler is not registered — global handler
       takes over and goes to home. This prevents "skipping" the chapters
       screen entirely.
    g) VISIBLE BACK BUTTONS: Every continue/advance point now shows a
       ← ⌫ back button (left of Continue) when si > 0. ContinueButton
       component accepts onBack + canGoBack props. Standalone buttons
       (intro, teach, verb_table, tip) also have inline back buttons.
       goBack() function centralizes all state resets (DRY).
  KEYBOARD MAP (complete):
    Space      → Continue / select focused option
    Backspace  → Previous step (within lesson) / back in navigation hierarchy
    Escape     → Quit lesson / back in navigation hierarchy
    ←→         → Navigate options (MC columns, match columns)
    ↑↓         → Navigate options (MC rows, match rows)
    ↓          → Open deepDive (first press; then scrolls)
    ↑          → Close deepDive
    Ctrl+S     → Dev skip (auto-answer + show correct)
    Enter      → Submit text input answer
  RULE: Backspace ALWAYS goes one level back in the current hierarchy,
    never skips levels. Escape quits the current context (lesson → unit
    map, unit map → chapters). ArrowLeft/Right are NEVER used for
    quit/back — only for option navigation.
    GENERIC: Any new screen or navigation level must register its own
    capture-phase Backspace handler if it has sub-levels. Global handler
    is the fallback for top-level pages only.

DECISION 18 — Quiz Visual Restyle & Article Color System
  PROBLEM: Quiz cards (MC, FB, translate) used generic .card class with
    blue/gold borders that clashed with the board-style teach cards.
    Question text was sans-serif while teach cards used Georgia serif.
    Focus rings were blue (MC) and gold (FB) — inconsistent.
    Dutch article colors (de=red, het=purple) caused purple to conflict
    with the UI's heavy purple accent use (focus, cognates, polysemy).
  FIX:
    a) QUIZ CARD RESTYLE: All quiz question cards now use board-style:
       - White card, rounded (20px), subtle border + shadow
       - Purple left accent (4px) for MC, gold for FB, purple/teal for translate
       - Georgia serif font for question text, 19px
       - Purple label text (MC) or gold (FB) instead of gray
       - Hint button hover turns purple, not blue
    b) QUIZ OPTIONS RESTYLE: .quiz-opt CSS updated:
       - Georgia serif font, 15px, fontWeight 600
       - 14px border-radius (not var(--radius-sm))
       - Purple hover state (not blue)
       - .quiz-letter: purple bg/text (rgba(123,94,232,0.08) + #7B5EE8)
       - Focus ring: purple #7B5EE8 for ALL exercise types (unified)
       - Disabled opacity 0.45 (softer than 0.5)
    c) FB OPTIONS: Same serif font, 14px border-radius, purple focus
    d) DUTCH ARTICLE COLORS CHANGED:
       - de (common) → BLUE (#4A8FE7) — calm, frequent, the "default"
       - het (neuter) → GOLD (#E8960A) — special, worth remembering
       - Rationale: purple was overloaded (focus, cognates, accents).
         Blue and gold are distinctive and don't conflict with any
         UI accent. Blue = common/default, Gold = notable exception.
       - German kept as-is (der=blue, die=red, das=purple — 3 genders
         need 3 colors, and purple is fine there since it's not the
         dominant UI accent in German content).
  COLOR ALLOCATION (complete system):
    Purple #7B5EE8 — UI accents: focus rings, selection, labels, cognate
                     links, polysemy badge glow, board card left accent
    Teal #2ECDA7   — English translations, correct answers, teal-light bg
    Gold #E8960A   — het article, low-score warning, "also" badge
    Blue #4A8FE7   — de article, translate quiz accent, general buttons
    Coral #F56565  — wrong answers only
    Gray           — disabled, muted, secondary text
  RULE: Quiz steps must visually match the teach cards in the same
    lesson — same fonts, accent colors, border treatment. Any new quiz
    type must use Georgia serif for question text and purple focus rings.
    Article colors must NEVER overlap with functional UI colors (focus,
    selection, correct/wrong).

DECISION 19 — Arrow Key Scrolling, Spacebar Parity & Keyboard Audit
  PROBLEM: Multiple keyboard bugs discovered during Unit 1 full playtest:
    a) Arrow keys couldn't scroll pages on teach/tip/verb_table steps
       because ArrowRight was intercepting as an advance key.
    b) Spacebar on FB steps skipped the question because "fb" was in
       the continueRef registration list (fb is a quiz step).
    c) FB blanks used 3 underscores (___) but renderer split on 5.
    d) STALE CLOSURE: `answered` was NOT in the keyboard handler's
       useEffect deps. After answering an MC/FB question, the handler
       still had the old answered=false, so arrows KEPT intercepting
       (preventDefault) even after answering — blocking scroll on
       the answer-feedback view.
    e) GLOBAL ARROW LEAK: useFocusNav only checked for
       data-kb-owner='lesson' — didn't check 'learn', 'foundations'.
       On LessonList and Foundations pages, the global handler
       intercepted ALL arrow keys and called preventDefault, making
       page scrolling impossible.
    f) SPACEBAR ≠ CLICK on teach cards: continueRef was set to plain
       goNext(), but the actual button calls learnWord(st.nl) + goNext().
       Result: pressing spacebar on teach cards skipped learnWord —
       words were never added to the learned set.
    g) KEYBOARD SELECT NO SOUNDS: The le-select handler (keyboard
       option selection) manually set state without calling
       checkAndNext(). Result: no correct/wrong sounds when selecting
       MC/FB options via keyboard (Space key on focused option).
  FIX:
    a) REMOVED ArrowRight-as-continue handler. Spacebar is the only
       advance key. Arrow keys scroll freely on non-quiz steps.
    b) REMOVED "fb" from continueRef registration list.
    c) FB renderer uses .split(/_{3,}/) — matches 3+ underscores.
    d) ADDED `answered` to keyboard handler deps:
       [si,focusIdx,done,answered,showDeepDive,showResume,dfSlots,dfPoolIdx]. Handler
       re-registers when answered changes, so arrow interception stops
       immediately after answering.
    e) SELECTIVE useFocusNav guard: only blocks on data-kb-owner="lesson"
       and "lesson-done" (which have their own arrow handling). Pages
       with "learn" or "foundations" now GET useFocusNav for button nav.
       Global Backspace handler still uses broad [data-kb-owner] check.
    e2) NO-WRAP useFocusNav: findInRows returns null at boundaries
       (last element ↓, first element ↑). When null, useFocusNav does
       NOT preventDefault — browser scrolls naturally. Arrow navigation
       flows into page scrolling at boundaries instead of wrapping.
    f) CREATED spaceAction function that mirrors button onClick:
       - teach steps: learnWord(st.nl) + setShowPhonetic(false) + goNext()
       - all other non-quiz steps: just goNext()
       continueRef is set to spaceAction, not plain goNext.
    g) le-select handler now calls checkAndNext(ok) instead of manually
       setting state. Correct/wrong sounds play on keyboard selection.
  STALE CLOSURE RULE: Every value read inside a useEffect's event handler
    must be either (a) in the dependency array, (b) read via a ref, or
    (c) accessed via a functional state updater. Forgetting `answered`
    caused arrows to stay captured after answering — always audit deps.
  SPACEBAR PARITY RULE: continueRef.current must do EXACTLY what the
    rendered button's onClick does. If the button calls learnWord,
    setShowPhonetic, or any side effect, spaceAction must too.
    Any new step type with a continue button must set continueRef
    to the full action, not just goNext.
  GLOBAL NAV RULE: useFocusNav is only blocked by data-kb-owner="lesson"
    and "lesson-done" (components with their own arrow handling). Pages
    with data-kb-owner="learn" or "foundations" still get useFocusNav for
    button navigation. The global Backspace handler uses the broader
    [data-kb-owner] check to avoid double-firing.
  NO-WRAP RULE: useFocusNav must NEVER wrap around. At the last element,
    pressing ↓ does NOT preventDefault — the browser scrolls naturally.
    At the first element, pressing ↑ does the same. This keeps arrow
    navigation flowing into page scrolling at boundaries, which feels
    natural. Only when there's a valid next element to focus should
    the arrow key be intercepted.

  f) A/B/C/D SHORTCUT KEYS: On MC and FB quiz steps, pressing A/B/C/D
     directly selects option 0/1/2/3 respectively (matching the visible
     letter badges on each option). Sets focusIdx AND dispatches
     le-select in one action — no need to arrow-navigate first.
     Only fires when !answered and option index < opts.length.
     ABCD RULE: Any quiz step with lettered option badges (A/B/C/D)
     must support direct keyboard selection via those letter keys.

  g) RESUME DIALOG KEYBOARD DEAD ZONE: The lesson resume dialog
     ("You were X% through this lesson") rendered before the main
     keyboard handler, which bailed with `if(showResume)return`.
     The dialog had no onKeyDown of its own — total dead zone.
     FIX: Resume dialog now has inline onKeyDown:
     - Space/Enter = Continue (resume from saved position)
     - Backspace = Start over (clear progress)
     - Escape = Quit lesson
     Dialog gets tabIndex={0} + auto-focus + data-kb-owner="lesson".
     Keyboard hint text shown below buttons.
     DIALOG KEYBOARD RULE: Every modal/dialog that interrupts the
     lesson flow MUST handle Space/Enter/Escape at minimum. The main
     keyboard handler's bail-out for that dialog state is acceptable
     ONLY if the dialog provides its own complete keyboard handling.

DECISION 20 — Foundations Playthrough Visual Parity
  PROBLEM: Foundations Playthrough used gold/amber (#D4890B) accent with
    different card structure: left-border cards, emoji icons, "→" arrows,
    no numbered badges, no Redo/Start buttons, no progress percentages.
    This created visual dissonance — Units looked polished while
    Foundations looked like a different app.
  FIX:
    a) COLOR: Entire Foundations Playthrough uses purple (#7B5EE8) accent.
       - Headers: purple gradient icon badge, purple progress bar
       - Stage cards: purple numbered badges, purple Start/Redo buttons
       - Lesson cards: purple numbered badges, purple Start/Redo buttons
       - LessonEngine unit.color: var(--purple-accent-text) (was #D4890B)
    b) STRUCTURE: Full parity with Units LessonList:
       - Stage list: identical card layout to unit lesson cards
         (numbered circle + title + subtitle + Start/Redo button)
       - Stage header: mirrors Unit header (icon badge + title + progress)
       - Lesson list within stage: identical to unit lesson cards
       - Completed state: teal border + teal checkmark badge + "Redo"
       - Not started: purple badge with number + "Start"
    c) SELECTOR CARDS: Playthrough and Gate Quiz tiles on Foundations
       landing page changed from gold to purple, matching Reference tile.
       All three tiles now use the same purple visual language.
    d) Gold/amber (#D4890B, #F5A623) ONLY remains in:
       - FK_KNOWLEDGE phonics grid cell colors (data, not UI)
       - CEFR band colors (C1 = amber — semantic, not branding)
       - het article color (#E8960A — distinct from UI purple)
       - Low quiz score indicator (functional warning, not branding)
       NOT in: FB cards (d13: now purple like all board cards).
  RULE: Foundations and Units must be visually indistinguishable in card
    structure. Same numbered badges, same button labels (Start/Redo),
    same progress display, same header layout. Only the accent color
    differs (purple vs unit.color). This applies to any future learning
    track added to the platform.

DECISION 21 — Board-Style Default, Backspace Hierarchy & Stage Grid
  ⚠️ CRITICAL — READ BEFORE ADDING ANY LESSON ⚠️
  a) BOARD-STYLE IS THE DEFAULT FOR ALL NEW CONTENT.
     Every lesson in Dutch v2, Dutch Foundations, and Korean Foundations
     MUST have board:true. This gives the Teacher's Board aesthetic:
     clean white card, serif title, structured layout, "Good to Know"
     tips, board-style intro with goals list.
     - Dutch v2 units: already had board:true ✓
     - Dutch FK_PLAYTHROUGH: 16 lessons — board:true added
     - Korean FK_PLAYTHROUGH: 25 lessons — board:true added
     EXEMPTION: Legacy Dutch units (track:"legacy" or no track) are
     intentionally kept as-is for comparison. They will be deleted
     eventually. Do NOT add board:true to legacy lessons.
     EXEMPTION: Arabic and other languages — will be updated when
     actively developed. Do not pre-emptively change them.
  b) BACKSPACE HIERARCHY FIX:
     UnitMap's capture-phase Backspace handler was intercepting
     Backspace when fkMode="playthrough" or "gatequiz", jumping the
     user all the way back to the Foundations selector instead of
     navigating within the FoundationsPlaythrough hierarchy.
     FIX: UnitMap capture handler now returns early (no listener
     attached) when fkMode="playthrough" or fkMode="gatequiz".
     FoundationsPlaythrough's own handler manages: stage→list→onBack.
     RULE: Components that own sub-navigation (FoundationsPlaythrough,
     FoundationsGateQuiz) must handle their own Backspace. Parent
     components must yield — never intercept Backspace meant for a
     child component with its own navigation hierarchy.
  c) STAGE GRID: FoundationsPlaythrough stage list now renders as a
     2-column square grid matching the unit band tiles in chapter view.
     Each tile: centered icon, numbered badge, title, lesson count,
     progress bar. Completed tiles turn teal. This replaces the old
     vertical list of horizontal cards.

DECISION 22 — LessonEngine Visual Parity & Content Formatting Rules
  STATUS: This LessonEngine is the SEMI-PERMANENT rendering engine.
    All lesson types (teach, tip, mc, fb, tr, match, verb_table,
    intro, conj) share one visual language. Do NOT create new
    renderers or deviate from this design system.

  a) BOARD TEACH CARD FIXES:
     - Continue button: btn-blue → purple #7B5EE8 (all 3 teach renderers)
     - Label: hardcoded "New Word" → uses teachLabel (word/letter/info/idiom)
     - Note renderer: plain text → hl() + line-break + bullet parsing
       Non-ASCII (Hangul/Arabic/CJK) renders 22px bold purple inline.
       Lines starting with "•" render as structured bullet points.
     - Done screen continue button: blue → purple #7B5EE8

  b) TIP CARD RESTYLE (D20 follow-up):
     - Blue gradient header → white card + purple left accent
     - Serif title + "GOOD TO KNOW" label
     - Text renderer: added hl() helper for non-ASCII enlargement
     - All bullet/arrow/bold parsing preserved with purple accents
     - Conjugation row borders: blue → purple
     - Deep dive: blue → purple border/button/tint

  c) EM-DASH PROHIBITION RULE:
     ⚠️ NEVER use em-dashes (—) in any content: notes, descs,
     tips, MC questions, MC answers, phonetic fields, goals.
     Em-dashes read as AI-generated prose. Replace with:
     - Period + new sentence for explanatory clauses
     - Colon for "X: explanation" patterns
     - Comma for light parentheticals
     - Bullet points (\n•) for lists embedded in prose
     This rule applies retroactively. All FK content (KO + NL)
     cleaned: 49 em-dashes replaced.
     Dutch v2 units: 93 em-dashes remain (next cleanup batch).

  d) ARROW REGEX HARDENING:
     Tip text renderer arrow regex (nl → en pair detection) now
     caps left side at ≤50 chars. Prevents prose with incidental
     → from being split into purple/teal translation pairs.

  d2) INFO CARD BOARD-STYLE PARITY:
     Info card (kind:"info") had blue gradient wrapper, blue "CONCEPT"
     label, GOLD/YELLOW note card, blue diagram wrapper. All replaced:
     - Card wrapper: white + purple left accent (matches all board cards)
     - Label: uses teachLabel (purple, uppercase)
     - nl display: 42px serif base, 48px for non-ASCII (was 22px)
     - Note (no rules): white + purple left accent + noteHl + bullet parsing
       (was gold gradient #FFF9EE with no highlighting)
     - Rules grid: purple left accent added
     - Diagram wrapper: white + purple left accent + purple label
     RULE: NO GOLD/YELLOW anywhere in lesson cards. All notes use
     white + purple left accent. Gold is ONLY for the "New Word" frame
     on legacy teach cards (which will be deleted).

  d3) SYLLABLE BLOCK DIAGRAMS REDESIGN:
     Old diagrams: tiny pastel pills floating in a CSS grid. Did not
     look like actual Hangul blocks.
     New diagrams: thick-bordered (3px #1F2937) block templates with
     internal 2px dividers, colored cells (C=red #FECACA, V=green
     #BBF7D0, batchim=blue #BFDBFE), 20px bold labels, and 44px
     Hangul example below with romanization.
     Block types: cv_v (side-by-side), cv_h (stacked), cvc (bottom
     span), cvcc (split bottom), cv_combo (tall vowel).
     These match the visual pattern of LearnKorean24-style block
     diagrams: a single bordered rectangle divided into cells that
     mirror how the actual syllable is laid out.

  d4) BOARD TEACH CARD NO-BLUE AUDIT:
     Board-style teach card had blue phonetic (var(--blue) with
     /slashes/ and blue background), positioned above translation.
     Letter display only 48px (too small for ㅡ ㅣ), not purple.
     Example text had no Hangul highlighting.
     FIXES:
     - Phonetic: moved BELOW example. Gray text, no slashes, no
       blue background. Shows as subtle annotation.
     - Letter display: 64px for letter kind. Non-ASCII always
       purple #7B5EE8.
     - Example text: exHl() helper, 26px purple Hangul inline.
     - "Also" badge: gold → purple tint.
     - Info card phonetic: same (below example, gray).
     RULE: Manifesto P22. NO BLUE in board-style lesson cards.
     Phonetic is gray. Hangul/Arabic always purple. Board card
     palette: purple (#7B5EE8), teal (#2ECDA7), gray, white ONLY.

  d5) SMART HIGHLIGHTING + DIAGRAMS + LEAK PREVENTION:
     A) smartHl() engine upgrade:
        - Added TEAL keywords: SILENT, INITIAL, INSIDE (joining
          RIGHT/LEFT/TOP/BOTTOM/etc.)
        - Added SOUND_VALS: bare phonetic tokens ah, oh, oo, uh, ee,
          ng → teal when they appear in text
        - Wired into: tip card text renderer (replaced internal hl),
          both deep dive renderers (board + legacy), note, exampleEn,
          phonetic in all board card types
     B) renderDiagram() extracted as shared function:
        - Was inline IIFE duplicated in info card + legacy teach card
        - Now single function defined alongside smartHl, called from:
          info card, board teach card, legacy teach card (3 call sites)
        - All diagram blocks: thick-bordered, proper syllable grid
     C) Letter cards get inline diagrams:
        - ㅣ → cv_v (vertical sits RIGHT of consonant)
        - ㅡ → cv_h (horizontal sits BELOW consonant)
        - ㅏ → cv_v (vertical family)
        - ㅓ → cv_v (vertical family)
        - ㅗ → cv_h (horizontal family)
        - ㅜ → cv_h (horizontal family)
     D) Content: 6 KO FK letter en fields cleaned (from d4+d5).
        Phonetic fields cleaned. Rule: en = sound/meaning ONLY.
     RULE: Manifesto P23. smartHl is THE text renderer for all
     board card prose. renderDiagram is THE diagram renderer for
     all syllable block visuals. renderLetterExample is THE
     example renderer for operator-separated combinations
     (consonant + vowel → syllable). All three are shared,
     single-source utilities defined before any early-return
     card renderer (TDZ-safe, per d10).

  d6) FK EXIT/RESUME PHASE TRACKING:
     FoundationsPlaythrough lost stage navigation on exit. User
     would always return to stage grid. Fixed: stage ID saved to
     user.progress.fkNav[lang]. On re-mount, restores selStage
     from saved state. selectStage()/clearStage() wrappers
     persist changes automatically. Lesson-level resume still
     handled by LessonEngine's localStorage progressKey (D18).

  d7) smartHl CRITICAL FIXES:
     A) APOSTROPHE BUG: Regex '(?:'[^']+') treated contractions
        as quote delimiters. "It's...Don't" matched entire span
        as teal. Fixed: '(?:'[a-zA-Z]{2,12}') — only short
        single-word tokens between real quotes.
     B) ARROW COLOR OVERRIDE: Arrow parsers in tip card + deep
        dives forced purple left / teal right on parent span.
        smartHl ran inside but parent color overrode. Fixed: both
        sides now use gray base (--gray-700 / --gray-500). Only
        smartHl tokens get color. Arrow = content structure, not
        color structure.
     C) Added ZERO, MUST to teal keyword list.
     D) Added null/type guard: if(!text||typeof text!=="string").

  d8) CONTENT ALL-CAPS STANDARDIZATION:
     43 title-case keywords in KO FK content replaced with
     ALL-CAPS. Affected fields: note, exampleEn, hint, desc,
     goals. Categories:
     - VERTICAL/HORIZONTAL (vowel family labels)
     - TOP/BOTTOM (block position keywords)
     - SILENT/INITIAL (ㅇ role keywords)
     - LEFT/RIGHT/UP/DOWN (stroke direction keywords)
     - BELOW/ABOVE (position keywords)
     KEPT lowercase: visual shape descriptions ("flat top",
     "bottom-left", "vertical legs"), MC answer choices
     ("bottom to top"), natural prepositions ("inside a block"),
     compound words ("vowel-initial"), titles/stage names.
     RULE: Keywords that describe BLOCK STRUCTURE or DIRECTION
     get ALL-CAPS. Words that describe LETTER APPEARANCE or
     natural English phrasing stay lowercase.

  d9) smartHl WIRED INTO ALL REMAINING RENDERERS:
     A) Intro card desc: Hangul highlighted purple within teal
        base. Keywords in desc don't need extra highlight since
        desc is already a styled callout.
     B) Intro card goals: basic non-ASCII highlighter replaced
        with smartHl. Keywords now teal, Hangul purple.
     C) MC card question: basic non-ASCII highlighter replaced
        with inline split that does: large Hangul (32px purple)
        + teal CAPS keywords. Preserves big-Hangul for quiz focus.
     D) MC + FB hints: wired through smartHl. Keywords now teal.
     RULE: Every user-facing text field that smartHl could improve
     must go through smartHl (or a variant with same logic). No
     plain {st.field} rendering for note/hint/desc/goals/exampleEn.

  d10) smartHl TDZ FIX:
     After d9 wired smartHl into intro card goals, the intro card
     renderer (early return) ran BEFORE smartHl was defined lower
     in the function body. Classic temporal dead zone. Fixed by
     moving smartHl + renderDiagram definitions to BEFORE the
     intro card renderer. Order now: smartHl → intro → info →
     board teach → tip → mc → fb → tr. ALL renderers below.
     RULE: Shared utility functions (smartHl, renderDiagram) MUST
     be defined at the TOP of LessonEngine's render path, before
     any early-return card renderer that might use them.

  d11) NAVIGATION TITLE: ICON DEDUP + SCRIPT-AWARE SIZING:
     Lesson titles like "ㄱ and ㄴ" with icon "ㄱ" rendered as
     "ㄱ ㄱ and ㄴ" (duplicate). All Hangul in navigation titles
     rendered at base font size (13-15px) in gray, same as Latin.
     Violated D5 (glyph readability) and P22 (all Hangul purple).
     FIX: renderNavTitle(icon, title, baseFontSize) utility:
     - Suppresses icon when non-ASCII AND title starts with it
     - Non-ASCII in title: fontSize * 1.3, fontWeight 800, purple
     - Latin text inherits parent container styling
     Wired into 6 locations: ProgressBar header, done screen,
     FK lesson list, Unit LessonList, stage header, stage grid.
     RULE: All navigation/list UI that displays lesson or stage
     titles MUST use renderNavTitle. Never raw {icon} {title}.

  d12) KO BLOCK LAYOUT INFO CARDS: TEACHER'S BOARD REWRITE:
     Phase 6 Block Layouts lesson had 4 info cards using math-like
     notation: "CV with VERTICAL vowel", "[C][V] side by side",
     "ㄱ + ㅏ → 가 | ㄴ + ㅓ → 너". The words "consonant" and
     "vowel" were buried in tiny italic exampleEn. Not teacher's
     board ready: too cluttered, no breathing room.
     FIX (content): All 4 cards rewritten:
     - nl: Spell out "Consonant + VERTICAL Vowel" (not "CV with...")
     - en: Position description promoted ("Consonant LEFT, Vowel RIGHT")
     - example: Multi-line (\n), one combo per line with romanization
       inline. No pipe separators, no formulas.
     - Removed: phonetic (redundant) and exampleEn (merged into en)
     FIX (engine): renderLetterExample moved to shared utility section
     alongside smartHl/renderDiagram (TDZ-safe). Info card example
     row now splits on \n and renders each line via renderLetterExample
     (proper operator styling: + → gray, non-ASCII → purple 22px).
     RULE: Info card content must spell out "consonant" and "vowel"
     as real words. Never use [C], [V], CV, CVC as the primary label.
     Abbreviations may appear in MC questions AFTER the concept card
     has introduced the full term. Multi-line examples split on \n
     with one combination per line, never piped (|) on one line.

  d13) FB CARD: GOLD → PURPLE (ON-BRAND):
     FB (fill-in-the-blank) cards used var(--gold) for border-left,
     label color, and blank underline. This clashed with the
     purple/teal aesthetic (D18, D20, P22). Gold was originally
     meant to differentiate FB from MC, but the distinction is
     structural (blank in sentence vs standalone question), not
     color-based. FIX: All 3 gold refs → #7B5EE8. FB now matches
     MC card styling: purple left border, purple label, purple
     blank underline. Answer text stays teal-dark.
     RULE: FB cards use the same purple/teal/gray/white palette
     as all other board-style cards. No gold accent in quiz UI.
     Gold remains ONLY for het-article pills and low-score warnings.

  d14) KO FK: SPELL OUT ABBREVIATIONS IN STUDENT-FACING TEXT:
     "CV", "CVC", "CVCC" appeared in intro card goals and phase
     descriptions BEFORE Phase 6 had formally introduced them.
     A learner seeing "Build CV blocks" in Phase 3 doesn't know
     what CV means yet. FIX: Replaced all pre-Phase-6 "CV blocks"
     with "blocks" (concept already known from Phase 0). Phase 6
     intro goals rewritten: "See 2 consonant + vowel layouts",
     "See the BOTTOM consonant (batchim)", "See the double BOTTOM
     consonant". Phase 6 intro desc now mentions both "consonant"
     and "vowel" explicitly. Post-Phase-6 usage (Phase 6 l2/l3
     goals saying "CVC blocks") is acceptable since the term has
     been taught.
     RULE: Technical abbreviations (CV, CVC, etc.) may only appear
     in student-facing text AFTER a concept card has introduced
     them with full English words. Before that, use plain language.

  d15) EM-DASH CLEANUP (D22c):
     Em-dashes prohibited in all content and UI. Cleaned:
     - NL v2 units: 80 em-dashes → 0 (context-aware replacement:
       titles → colon, explanatory → comma, new thought → period,
       examples → colon). 5 post-replacement casing fixes applied.
     - KO FK playthrough: 3 code comments → colon.
     - FK landing UI: 1 ("Language — Before You Start" → colon).
     - NL FK playthrough: was already 0.
     Remaining 1033 em-dashes are in legacy content, manifesto,
     decision log, and code comments (out of current scope).
     RULE: D22c. No em-dashes in any content field (note, desc,
     text, hint, exampleEn, also, title, deepDive) or UI string.
     Use period (new thought), comma (parenthetical), or colon
     (explanatory/example). Capitalize after periods.

  d16) FB HINT ANTI-LEAK + BUTTON UX (P8):
     P8: "hints must GUIDE, never REVEAL." Audited all 12 NL v2
     FB cards. Found 2 clear leaks:
     A) "Twee" hint "Ordering two sandwiches": "two" = direct
        translation of answer. ALSO question was ambiguous (any
        number fits). FIX: changed to counting sequence
        "Eén, ___, drie, vier..." with hint "Count in order".
        Now unambiguous AND hint guides without translating.
     B) "spreek" hint "To speak a little Dutch": "speak" =
        direct translation. FIX: hint → "What do you do with
        a language?" Guides to the concept, not the word.
     Borderline cases (kept): "Sorry" (identical in both
     languages, hint OK), "kom" (hint gives sentence meaning,
     student must still recall the Dutch verb).
     ENGINE: Hint button ("Need a hint?") stayed visible after
     hint was revealed, showing both button and text. FIX: added
     !showHint to button render condition in BOTH FB and MC
     renderers. Button disappears, hint text takes its place.
     RULE: P8. Every FB hint must pass this test: does the hint
     contain the English translation of the answer word? If yes,
     rewrite. Also: FB sentences must have exactly ONE correct
     answer. If multiple options are logically valid, restructure.

  d17) BACKSPACE FROM FK LANDING PAGE:
     UnitMap Backspace handler had no branch for chapterNav===
     "foundations" + fkMode==="select" (FK landing). Handler
     registered (atTop was false), but all branches missed:
     fkSection=null, fkMode==="select", chapterNav!=="band:*".
     Result: Backspace was silently swallowed (preventDefault
     ran, but no navigation). FIX: added branch:
     chapterNav==="foundations"&&fkMode==="select" → go to
     band grid (setChapterNav("select")), matching the
     "← Chapters" button behavior. Now all UnitMap hierarchy
     levels have proper Backspace/Escape navigation.
     RULE: Every UnitMap navigation state must have a
     corresponding Backspace/Escape branch. When adding a new
     chapterNav value or fkMode value, always add the matching
     handler branch and test the back-navigation chain.

  e) RESUME DIALOG KEYBOARD:
     Was a dead zone. Now handles Space/Enter (continue),
     Backspace (start over), Escape (quit). Shows hint text.

  VISUAL LANGUAGE RULES (semi-permanent):
     ALL lesson cards: white bg, border-radius 22px, border-left
     4px solid #7B5EE8, box-shadow 0 4px 20px rgba(0,0,0,0.05).
     ALL labels: 10px uppercase, letter-spacing 2, color #7B5EE8.
     ALL titles: Georgia serif, 800 weight.
     ALL continue buttons: #7B5EE8 bg, white text, 16px radius.
     ALL non-ASCII: 22px+ bold purple inline via split+map pattern.
     ALL nav titles: renderNavTitle(icon, title, fontSize) — dedup
     icon + script-aware sizing. Never raw {icon} {title}.
     ALL bullets: purple "•" + structured layout.
     NEVER: blue gradient headers, btn-blue in lessons, em-dashes.

DECISION 23 — Lesson Redundancy Prevention & NL V2 Unit 2 L1-L5
  PROBLEM: Unit 2 stubs included "Hebben: Full Conjugation" (L2) and
    "All the Pronouns" (L3) — both ALREADY fully taught in Unit 1
    (L5 hebben, L2 zijn + all pronouns). These were not labelled as
    review lessons: they duplicated Unit 1 titles word-for-word.
    A human reviewer caught this before implementation. In languages
    the reviewer does not speak, this class of bug would go undetected.
    This is a SYSTEMIC risk, not a one-off mistake.
  ROOT CAUSE: When stubbing lesson titles, no automated or procedural
    check verified whether the concept had already been fully taught
    in a prior unit. Copying concept names into new units felt like
    "reinforcement" but actually created fake lessons with no new skill.
  FIX (content): Replaced both redundant stubs:
    - L2 "Hebben: Full Conjugation" → "Landen en Talen" (teaches spreken,
      a genuinely new regular verb, + 4 language names)
    - L3 "All the Pronouns" → "Waar woon jij?" (teaches wonen,
      a genuinely new regular verb, + city vocab)
    - L4 "Zijn & Hebben Together" → "Zijn of Hebben?" (verb
      DISCRIMINATION drill. Intro explicitly states: "You already
      conjugate both perfectly. Now master CHOOSING.")
    - L5 "Hoe heet je? Waar woon je?" → "Alles over Jou" (combines
      all 5 identity patterns into fluent Q&A production)
    Unit subtitle updated: "Hebben, Pronouns & Identity" →
    "Komen, Spreken, Wonen & Identity"
  FIX (pedagogical arc): L1-L3 each teach ONE new regular verb
    (komen, spreken, wonen). By L3 a tip card shows all three
    side-by-side, making the stam+t pattern visible inductively.
    U3L2 "Regular Present Tense" then names the rule formally.
    This creates an inductive → deductive teaching progression
    that was impossible with the redundant stub plan.
  NEW MK ENTRIES: verb_come, lang_nl, lang_en, lang_fr, lang_de,
    noun_teacher, noun_student (7 new). Countries + verb_live +
    verb_speak + phrases already existed.
  VERSION: NL_V2_U2_v1.0

  RULE — LESSON REDUNDANCY PREVENTION (P24):
    Before writing ANY lesson content, verify:
    1. Has this concept been FULLY taught in a prior unit?
       (Check: were all conjugation forms / all rules introduced?)
    2. If yes: the new lesson MUST teach a NEW SKILL that uses the
       old concept as a vehicle. Name the new skill explicitly in
       the intro card. Never re-teach a concept under the same title.
    3. If the intent is DRILL / REVIEW: the lesson title and intro
       must state this clearly. Use titles like "Zijn of Hebben?"
       (choice skill), never "Zijn: Full Conjugation" (re-teach).
    4. AUTOMATED CHECK for AI sessions: before filling stub arrays,
       grep all prior unit teach cards for the same grammar target.
       If the concept appears as a full teach (with conjugation table
       or complete rule explanation), the new lesson cannot re-teach
       it. It must either (a) drill a new skill using it, or
       (b) extend it with genuinely new forms/exceptions.
    This rule applies to ALL languages. It is especially critical
    for languages the human reviewer does not personally speak,
    where redundancy cannot be caught by reading comprehension.
  GENERIC: Every lesson must pass the "what's NEW?" test. If the
    answer is "nothing, just more practice," it's a review lesson
    and must be titled and structured as one.

DECISION 24 — MC/FB Shuffle, Verb Spelling Notes, Gold-Standard Verb Cards
  PROBLEM: Three systemic issues found during U2 L1-L5 review:
    A) ANSWER POSITION LEAK (ENGINE): MC and FB renderers used
       st.opts.map() — displaying options in array order. All 18
       quiz steps in U2 L1-L5 had the answer at opts[0] (position A).
       A student who always picks A scores 100%. U1 had hand-varied
       positions (~40 varied, ~11 at A), but no engine safeguard.
    B) VERB SPELLING NOT EXPLAINED (CONTENT): Teach cards for
       'ik spreek', 'ik woon', 'ik kom' said "stam = X" without
       explaining WHY the spelling looks that way. No reference to
       the open/closed syllable spelling system taught in Foundations.
       spreken → spreek: double 'ee' because closed syllable needs
       two vowels to stay long /eː/.
       wonen → woon: double 'oo' for same reason.
       komen → kom: single 'o' because the vowel IS short /ɔ/, NOT
       'koom' (not long). NOT 'kommen' (infinitive has long vowel
       in open syllable, so no consonant doubling).
       No fRef on any verb card despite spelling being the core issue.
    C) RULE PRE-NAMING (CONTENT): L1-L3 cards said "stam", "stam+t",
       "regular verb pattern", "You're using regular conjugation",
       and "We'll name this rule in Unit 3". This spoiled U3L2's
       job (formally introducing the conjugation rule). Cards also
       crammed hij/zij into one card ("hij/zij komt") instead of
       separating zij (she) vs zij (they) like U1 does.
  FIX:
    A) ENGINE: Added shuffleOpts(opts, seed) deterministic shuffle.
       Seeded by step index (stable within session, varied per step).
       Wired into BOTH MC and FB renderers. No quiz step in any
       language can ever have a fixed answer position again.
    B) CONTENT: Rewrote all verb teach cards with spelling notes
       referencing open/closed syllable logic. Added fRef:"nl_spe_1"
       on infinitive and ik-form cards. Added fRef:"nl_vowels" on
       country/language cards with distinctive Dutch sounds (ui, etc).
    C) CONTENT: Rewrote L1-L3 to match U1 gold standard:
       - Structure: intro → infinitive → ik/jij/u/hij/zij(she)
         → verb_table (3 groups) → wij/zij(they) → vocab → tip → drills
       - Matching U1: singular forms BEFORE table, plural AFTER
       - wij and zij (they) get their own teach cards after table
       - zij (she) and zij (they) on separate cards + verb_table rows
       - u gets its own teach card in every verb lesson
       - ALL "stam", "regular", "pattern" language REMOVED
       - Verb_table notes describe THIS verb only, no cross-references
       - Notes are about pronunciation, spelling, and usage ONLY
       - Tips are cultural context, NOT grammar-system previews
       - Answer positions varied in content; engine shuffles on top
  NEW RULES:
    - P25: Verb Spelling & Foundations Reference
    - P26: No Rule Pre-Naming
    - P8 Enhancement: Engine-level MC/FB shuffle
  VERSION: NL_V2_U2_v2.0

DECISION 25 — Visual Cleanliness: IPA, Slashes, isScript, "See Foundations"
  PROBLEM: Four visual issues found during playthrough review:
    A) IPA NOTATION IN NOTES: Notes contained IPA symbols in slashes
       like /oh/, /open-o/, /eh/, /ay-length/. These are academic
       notation that looks AI-generated and clutters the card visually.
       Found in: komen, ik kom, spreken, ik spreek, wonen, ik woon,
       Nederland (schwa notation).
    B) SLASHES AS SEPARATORS: Verb table notes used "jij/u/hij/zij"
       with slashes. Renders as visual clutter on the card.
       Belgie note used "'Vlaams'/Flemish" with slash.
    C) isScript ENGINE BUG: The isScript regex used [^0000-007F]
       (any non-ASCII) to trigger purple color + 48px font. This
       caught Latin diacritics like the e-trema in "Belgie", rendering
       it purple and oversized while "Frankrijk" rendered normal black.
       Root cause: regex was too broad, designed for Korean/Arabic
       but catching European diacritics.
    D) "SEE FOUNDATIONS" TEXT: Multiple notes said "See Foundations"
       or "See Foundations: Syllable Logic" as plain text. Redundant
       because the fRef button already provides this link. Adds clutter.
  FIX:
    A) CONTENT: Rewrote all notes using plain English comparisons:
       "sounds like a long 'oh'" not "/oh/"
       "short, like 'cot'" not "short /open-o/"
       "a quick, lazy 'uh'" not "a schwa /schwa-symbol/"
    B) CONTENT: Slashes to commas in verb_table notes:
       "jij, u, hij, zij" not "jij/u/hij/zij"
       "'Vlaams' or Flemish" not "'Vlaams'/Flemish"
    C) ENGINE: isScript narrowed to explicit script ranges:
       Korean (3130-318F, AC00-D7AF), Arabic (0600-06FF),
       Japanese (3040-309F, 30A0-30FF), Chinese (4E00-9FFF).
       Latin diacritics now render black at normal size.
    D) CONTENT: All "See Foundations" text removed from notes.
       The fRef button handles linking.
    E) CONTENT: Phonetic field for "ik kom" changed from IPA
       "ik open-o-m" to ASCII "ik kom".
  NEW RULE:
    - P27: Visual Cleanliness (no IPA, no slashes, no "See
      Foundations" text, ASCII-only phonetics, narrow isScript)
  VERSION: NL_V2_U2_v2.1

DECISION 26 — Translation Grading Rethink: 3-Layer Matching
  PROBLEM: The tr step grader used exact string matching after basic
    normalization (lowercase, strip punctuation). This rejected valid
    translations any human teacher would accept. Example: "I am from
    Germany" rejected because MK only accepted "I come from Germany."
    ROOT CAUSE: norm() only stripped punctuation and converted number
    words. No contraction expansion, no semantic equivalence matching,
    no do-stripping for questions.
  FIX:
    A) LAYER 1 — norm() upgrades:
       - Contraction expansion (I'm→I am, he's→he is, don't→do not, etc.)
       - Do/does stripping from questions ("do you speak" → "you speak")
       - Whitespace collapse
       Protects "do not" / "does not" from stripping via placeholder.
    B) LAYER 2 — Equivalence map (TR_EQUIV):
       Phrase groups where any member can substitute for any other:
       ["come from","am from"], ["nice to meet you","pleased to meet you",
       "glad to meet you"], ["beautiful","pretty","lovely"], etc.
       If input contains one member, tries replacing with each alternative
       and rechecks against accepted answers.
    C) LAYER 3 — Expanded MK variants:
       Manually added structurally different phrasings that cannot be
       caught by word-swap (e.g. "I'm Thomas" vs "My name is Thomas").
       All U1 + U2 MK entries audited and expanded.
    D) FEEDBACK UX: When matched via equivalence (not exact), shows
       subtle "Closest: [primary phrasing]" to teach natural form
       without penalizing valid alternatives.
  RULE — TRANSLATION FLEXIBILITY (P28):
    1. Every MK entry used in tr steps must have 2+ accepted phrasings
       for the target language(s) in produce direction.
    2. norm() handles mechanical variations (contractions, punctuation).
    3. TR_EQUIV handles semantic variations (phrase swaps).
    4. Manual MK variants handle structural variations.
    5. When adding new tr content, always ask: "What else would a
       human teacher accept?" Add those variants.
  GENERIC: Translation grading across all languages uses the 3-layer
    system. New equivalence groups can be added to TR_EQUIV for any
    language pair.
  VERSION: NL_V2_U2_v3.0

DECISION 27 — Drag-Fill Step Type: Multi-Blank Sentence Completion
  PROBLEM: FB steps with two blanks (e.g. "Hij ___ leraar en hij ___
    in Brussel.") were visually broken. Both blanks showed the same
    answer (fbAnswers[0]) when revealed. The 4 options looked like 4
    separate answers, not 2-out-of-4. The learner clicked ONE option
    but TWO blanks filled, creating a confusing interaction model.
    ROOT CAUSE: FB renderer was designed for single-blank exercises.
    The a:[...] array format was overloaded: normally it means "either
    answer is acceptable for one blank", but for double-blanks it meant
    "first answer goes in first blank, second in second blank."
  FIX:
    A) New step type: drag_fill
       Data format:
         {type:"drag_fill", s:"Hij {1} leraar en hij {2} in Brussel.",
          blanks:{"1":"is","2":"woont"}, pool:["woont","komt","heeft","is"],
          hint:"Identity + residence"}
       - {1}, {2} in sentence mark numbered blank positions
       - blanks object maps slot number to correct answer
       - pool contains available word tiles (including distractors)
    B) Interaction model:
       - Sentence displays with numbered dashed purple underline slots
       - Word tiles appear below in shuffled pool
       - Click a pool tile → places in first empty slot
       - Click a filled slot → returns tile to pool
       - Check button appears when all slots are filled
       - Correct slots → teal, wrong slots → coral + correct answer shown
    C) Keyboard navigation:
       - Arrow keys cycle between pool tiles
       - Space/Enter places focused tile in next empty slot
       - Backspace removes last placed tile
    D) Migrated 2 double-blank FB steps from U2L5 to drag_fill
    E) Added drag_fill to: Ctrl+S dev skip, totalEx scoring counter,
       per-step state reset, goBack state reset
    F) REGRESSION FIX: Initial implementation of drag_fill in Ctrl+S
       handler accidentally deleted the goNext() fallthrough for
       teach/intro/tip/verb_table steps. Ctrl+S stopped working on
       all non-quiz steps. Root cause: str_replace removed the else
       block content instead of inserting before it. Fixed by restoring
       the "else { goNext(); }" fallthrough after the drag_fill branch.
  RULE — MULTI-BLANK EXERCISES (P29):
    1. Single-blank → use fb (existing). a:[...] means any is acceptable.
    2. Multi-blank → use drag_fill. blanks:{} maps each slot to its answer.
    3. Pool may contain distractors (more tiles than blanks).
    4. Never use fb for multi-blank sentences.
  GENERIC: drag_fill can serve word order, multi-gap, and reorder
    exercises in future units. Pool tiles are always shuffled via
    shuffleOpts for position randomization.
  VERSION: NL_V2_U2_v3.0

DECISION 28 — Three Regression Fixes (Hooks, Tip Logic, Article Colors)
  PROBLEM A — React Error #310 (Rules of Hooks):
    drag_fill renderer contained useMemo, useCallback, and useEffect
    INSIDE the conditional if(st.type==="drag_fill") block. React hooks
    must be called unconditionally at the top level of a component, in
    the same order every render. Conditional hooks cause Error #310 at
    runtime, crashing the entire lesson engine.
    ROOT CAUSE: Hooks were written inside the renderer for convenience
    without considering React's rules.
    FIX: Removed all three hooks from the drag_fill renderer block.
      - useMemo replaced with plain shuffleOpts() call (deterministic)
      - useCallback + useEffect for keyboard merged into the existing
        main keyboard handler (D7). Arrow keys, Space, Enter, Backspace
        all handled in the central handler now.
      - Added dfSlots and dfPoolIdx to the main handler useEffect deps.
    RULE — NO HOOKS IN CONDITIONAL RENDERERS (P30):
      React hooks (useState, useEffect, useMemo, useCallback, useRef)
      MUST NEVER appear inside if(st.type===) renderer blocks. All hooks
      live at the component top level. Renderer blocks may only contain:
      plain variables, arrow functions, JSX. If a renderer needs reactive
      behavior, wire it through the main keyboard handler or top-level
      effects. This rule is ABSOLUTE and applies to ALL future step types.

  PROBLEM B — L7 Tip Example Logic Error:
    The tip text said: "English sometimes drops it: 'There are three
    schools.'" But that English sentence DOES use "there are". The
    example contradicted the pedagogical point.
    FIX: Changed to: "English can skip 'there': 'A man is in the house.'
    Dutch always needs 'er': 'Er is een man in het huis.'" — an example
    where English genuinely omits "there".
    RULE — VERIFY EXAMPLES (extends P24):
      Every example sentence in tip/teach/deepDive must be logically
      accurate. If the tip claims English "drops" a word, the English
      example must actually lack that word. Always re-read examples
      from the learner's perspective before committing.

  PROBLEM C — Article Colors in Teach Card Headers:
    The teach card set nlColor to c.bg (a CSS gradient string like
    "linear-gradient(...)"), but assigned it to the CSS color property.
    Gradients are not valid for color — they only work with background.
    Result: article colors were silently failing on teach card words.
    FIX: Split word display: article portion ("de"/"het") renders in
    c.pillText (solid color: blue #3A6FBA or gold #D4880C), noun
    portion stays dark gray. Uses string split on first space.
    Non-article words and script words render unchanged.
    RULE — VALID CSS VALUES ONLY (P31):
      Never assign gradient strings to the CSS color property. Use
      solid hex/rgb colors for text. Gradients are only for background.
      When using ARTICLE_COLORS, use pillText for text color, bg only
      for background properties.
  VERSION: NL_V2_U2_v3.1

DECISION 29 — Demonstrative Grammar Fix, Drag-Fill UX, P32 Linguistic Gate
  PROBLEM A — Wrong Dutch in L8 Content:
    drag_fill exercise: "{1} is het huis en {2} is de school."
    Expected: Dit, deze. "Deze is de school" is WRONG DUTCH.
    When demonstratives are used as pronouns pointing at things,
    Dutch ALWAYS uses dit/dat. "Deze is..." is only valid when
    selecting among people or choosing from a group.
    ADDITIONALLY: Multiple exercises tested near/far axis (deze vs
    die, dit vs dat) but the sentences had no hier/daar context.
    Without hier/daar, both answers are valid. Hints cannot
    disambiguate because they are optional and hidden by default.
    ROOT CAUSE: Lesson conflated adjective use (deze/die + noun)
    with pronoun use (dit/dat is...). Flat rule "de→deze/die,
    het→dit/dat" is only correct for adjective position.

  FIX A — L8 Complete Rewrite:
    Two-phase pedagogy:
    1. Adjective use (before noun): de→deze/die, het→dit/dat
       ALL exercises include hier/daar in the sentence.
    2. Pronoun use (pointing at things): ALWAYS dit/dat
       Explicit "common mistake" tip teaches this.
    Every exercise now has exactly ONE correct answer from the
    sentence alone, with no reliance on hidden hints.

  FIX B — L10 Demonstrative Exercises:
    Added hier/daar to both demonstrative exercises.
    "___ huis is groot" → "___ huis hier is groot"
    "___ vrouw spreekt Frans" → "___ vrouw daar spreekt Frans"

  FIX C — MK Entry Update:
    Replaced u2_this_man_from_germany with u2_this_man_here_germany.
    NL: "Deze man hier komt uit Duitsland."
    Added hier for unambiguous context.

  PROBLEM D — Drag-Fill UX Unsatisfying:
    Click pool tile → always fills first empty slot left-to-right.
    No way to target a specific slot. No visual drag feedback.
    Feels mechanical. Users cannot choose WHERE to place a word.

  FIX D — Drag-Fill Three-Mode Interaction:
    1. CLICK-SLOT-THEN-TILE: Click empty slot to focus it (purple
       pulse). Then click a pool tile to place it there. If no slot
       focused, falls back to first empty.
    2. POINTER-EVENT DRAG: PointerDown on tile starts drag. Ghost
       tile follows cursor (fixed position, lifted visual with shadow
       and slight rotation). Empty slots highlight green on hover.
       Drop on slot places tile. Drop elsewhere cancels.
    3. KEYBOARD: Arrow keys cycle pool. Shift+Arrow cycles focused
       slot. Space/Enter places in focused slot (or first empty).
       Backspace removes last placed tile.
    New state: dfFocusSlot (selected slot), dfDrag (drag-in-progress).
    Ghost position tracked via ref (smooth, no re-renders during drag).
    All state at top level, NO hooks in renderer (P30 compliant).

  RULE — P32 LINGUISTIC ACCURACY GATE:
    Every Dutch sentence must pass native-speaker check.
    Every grammar rule must be complete (no dangerous oversimplification).
    Every exercise must have exactly ONE correct answer from the
    sentence alone. Near/far demonstrative exercises MUST include
    hier/daar. Pronoun exercises (dit/dat is...) must NEVER accept
    deze/die for things. "Deze is de school" is ALWAYS wrong.

  RULE — P33 DRAG-FILL UX STANDARDS:
    Drag-fill must support all three interaction modes (click-slot,
    drag-drop, keyboard). Pool tiles must be draggable via pointer
    events. Slots must be individually clickable to focus. Ghost tile
    must follow cursor smoothly. Slot hover feedback must be instant.
    IMPLEMENTATION: Drag uses window-level pointermove/pointerup
    listeners added on pointerdown, removed on pointerup. NO
    setPointerCapture (breaks event propagation). Ghost position
    updated via ref for smoothness. Slot rects cached at drag start.

  FIX E — hier/daar Never Taught (P34 Violation):
    L8 exercises used hier/daar for near/far disambiguation but
    these words had no teach cards. Learners encountered new
    vocabulary in exercises without any introduction.
    FIX: Added 2 teach cards for hier and daar at the start of L8,
    before the demonstrative teach cards. MK entries added:
    word_hier, word_daar. Cognate notes link to English/German.
    L8 now has 19 steps (was 17).

  FIX F — Drag Ghost Offset (3 iterations):
    Ghost tile was displaced from cursor during drag.
    Iteration 1: Removed setPointerCapture (broke event propagation).
      Added window-level pointermove/pointerup. Ghost still offset.
    Iteration 2: Stored initial clientX/clientY in React state so
      ghost renders at cursor on first frame. Still offset because
      position:fixed inside a CSS-transformed container (the .anim
      wrapper) doesn't map to viewport coordinates.
    Iteration 3 (FINAL): Ghost is a plain DOM element appended to
      document.body (outside React tree, immune to all transforms).
      Positioning uses delta-based tracking:
      - On pointerdown: create ghost at fixed left:0, top:0
      - Measure actual render position via getBoundingClientRect()
      - Compute baseX/baseY offset (where 0,0 actually renders)
      - Set initial transform: translate(cursorX - ghostW/2 - baseX, ...)
      - On pointermove: add cursor delta from start position
      - On pointerup: remove ghost from DOM, clean up listeners
      This approach is coordinate-system-proof: works regardless of
      CSS transforms, zoom, iframes, or container offsets. The ghost
      always tracks exactly under the cursor.
    RULE — P35 DOM ESCAPE HATCH:
      When React-rendered elements need viewport-accurate fixed
      positioning (drag ghosts, tooltips, overlays), and the component
      tree has CSS transforms that break position:fixed, create the
      element directly on document.body via DOM API. Use delta-based
      positioning (measure actual render offset, track cursor deltas)
      rather than assuming clientX/clientY maps to CSS left/top.
      Clean up the DOM element in the pointerup/cleanup handler.

  RULE — P34 VOCABULARY GATE:
    Every Dutch word in exercises, tips, or examples must have been
    taught in a teach card (this lesson or earlier). No untaught
    words in exercises. If context words are needed (hier, daar,
    niet, ook), they must get their own teach cards first.
  VERSION: NL_V2_U2_v3.3

DECISION 30 — U3 Numbers & Time: Infrastructure, L1-L2 Content & Audit Fixes
  CONTEXT: U3 "Numbers & Time" is the first new unit after U1-U2 completion.
  8 lessons planned (Numbers, Verbs, Clock, Days, Months, Adverbs, Review).
  Built in 5 batches with review gates after Batch 1 and Batch 2.

  BATCH 1 — INFRASTRUCTURE:
    A) Added board:true,steps:[] to all 64 lesson stubs (U3-U10). D21 compliance.
    B) Added 84 new MK keys: 19 numbers (11-100), 9 clock terms, 7 days,
       12 months, 4 seasons, 4 verbs, 4 adverbs, 2 adjectives, 2 phrases,
       16 sentence keys, 5 carried-forward keys.
    C) Cleaned 9 pre-existing duplicate MK keys (4 days, 4 seasons, 1 ar_water).
       U3 versions are authoritative (all 7 days, all 4 seasons with articles).

  BATCH 2 — L1 (Numbers 11-100) + L2 (Regular Present Tense):
    L1: 25 steps. Teens (elf/twaalf irregular, then -tien pattern), reversal
    (eenentwintig), tens (dertig-negentig, tachtig irregular), honderd.
    L2: 20 steps. THE stam+t naming lesson. "Pattern Revealed" table shows
    komen/spreken/wonen side-by-side, then names "de stam" as concept.
    Two new verbs: werken (clean stam), leren (long-vowel stam, meta-verb).

  VERB DISTRIBUTION DECISIONS (U3-wide):
    4 verbs across 3 lessons with breathing room:
    - L2: werken + leren (stam+t naming, 2 verbs + rule = heavy but focused)
    - L5: doen (unusual stam "doe", natural context "Wat doe je op maandag?")
    - L7: maken + doen/maken discrimination (mirrors U2 zijn/hebben pattern)
    - L3, L4, L6: no new verbs (breathing room)
    - L8: review all 4 (no new content)
    Combined with U1-U2's 3 verbs (komen, spreken, wonen), learner exits
    U3 with 7 regular verbs and the named stam+t rule.

  7 DESIGN DECISIONS RESOLVED:
    1. Verbs: werken, leren, doen, maken (all 4 kept, leren retained for
       polyglot relevance — "learning the verb 'to learn'" is meta-useful)
    2. "De stam": teach card (testable concept, deserves own moment)
    3. "Half": standalone teach card + rule in note (L4)
    4. Inversion: silent exposure in L5, no system naming until U9
    5. koud/warm: add as teach cards in L6 (P34 compliance + forward-useful)
    6. te laat: teach as paired phrases op tijd / te laat in L7
    7. Build order: infrastructure → L1+L2 gated → L3-L8 rapid

  AUDIT FIXES (6 bugs found during human review):
    FIX A — Trema (ë) Never Taught:
      L1 used drieëntwintig in tips and drag_fill but trema concept was
      untaught anywhere in Foundations or prior units. P34 violation.
      FIX: Added trema tip after eenentwintig card, before Big Reversal.
      Uses België/Italië as "you already know this" anchors from U2.
      Removed redundant deepDive from Big Reversal tip.

    FIX B — Contradictory DeepDive ("ik kom" vs "ik koom"):
      DeepDive said "Same logic: wo-nen → woon" but komen (short vowel)
      and wonen (long vowel) are OPPOSITE cases. "Same logic" was wrong.
      FIX: Rewrote as two explicitly contrasting categories:
      SHORT-VOWEL (komen→kom, werken→werk: just remove -en)
      LONG-VOWEL (wonen→woon, leren→leer: double to preserve length)
      No "same logic" — they are different and now presented as such.

    FIX C — "het" Missing from Verb Tables:
      Pattern Revealed table and Werken table omitted "het" as pronoun.
      U1's hebben/zijn tables include het as separate row.
      FIX: Added {pronoun:"het",form:"werkt",en:"it works"} to Werken
      table Third Person group. Added "het" to Pattern Revealed label
      and Stam+t Rule tip pronoun list. 4 occurrences total in L2.

    FIX D — Pattern Revealed Table Structure:
      Three groups with 1 row each produced ugly render. Labels like
      "jij/u/hij/zij (+ t)" were a hack, not the designed table format.
      FIX: Restructured to Singular (3 rows) / Third Person (1 row) /
      Plural (3 rows), matching U1 hebben/zijn table pattern exactly.

    FIX E — Untaught Vocabulary in Examples:
      12 teach card examples across L1-L2 used untaught words:
      ongeluksgetal, minuten, lopen, Mijn oma, procent, zeker,
      honderdéénentwintig, maanden, dagen, april, op maandag.
      FIX: Replaced all with U1-U2 vocabulary (pronouns, zijn/hebben,
      er zijn, numbers, kinderen, studenten, Amsterdam, school, Nederlands).
      Also differentiated adjacent examples to avoid duplicate sentences.

    FIX F — Combined Teach Card Split:
      "veertig, vijftig, zestig, zeventig" crammed 4 numbers into 1 card.
      Broke one-concept-per-card pattern from U1.
      FIX: veertig gets own card (vowel shift note). 50/60/70 grouped
      in tip (predictable, no surprises). Tachtig/negentig stay individual
      (irregular / return-to-pattern deserve their own moments).

  FIX G — "en" = "and" Never Explicitly Taught:
    The word "en" (and) appears throughout U1-U2 in phrases ("En jij?",
    "En met jou?", "Frans en Nederlands") but was never given a teach
    card or explicit translation. L1 eenentwintig note uses "en" as
    structural particle without connecting it to prior knowledge.
    FIX: Added bridge in eenentwintig note: "The 'en' is the same word
    you know from 'En jij?' — it means 'and'." Connects numbers to
    known vocabulary rather than introducing opaque particles.
    NOTE: "en" still lacks a standalone teach card. Consider adding one
    in a future connector/conjunction lesson or as part of U4 pre-work.

  P8 STATUS: MC answer positions {0:1, 1:2, 2:1, 3:2}. One false positive
    ("stam of werken?" → "werk" — substring is the exercise's purpose).
  P26 STATUS: L1 clean (no grammar-system language). L2 uses "stam" 29×
    as intended (this IS the naming lesson).
  P34 STATUS: All examples use taught vocabulary. All distractors use
    taught forms (fixed maakt→komt, driehonderd→negentig).

  VERSION: NL_V2_U3_v1.0

DECISION 31 — Visual Density Rework: Engine Changes, Pipeline Rules, Content Migration
  CONTEXT: Human screenshots of U3 L1-L2 revealed systemic visual clutter.
  Phonetics on every card, paragraph notes, always-visible cognate lines.
  Full audit of all 28 lessons (369 steps) confirmed: 99% had phonetics,
  91% of notes were unstructured paragraphs, 0% used \n or bullets.

  PHASE 1 — PIPELINE RULES (standard before code):
    P36 — Visual Density Gate:
      Notes max ~100 chars unstructured or use \n/bullets. "What" in note,
      "Why" in deepDive. Triage table: note=fact, deepDive=explanation.
      Tips use bilingual pair format. Screenshot test on every card.
    P37 — Function Word Gate:
      en/of/maar/ook/niet/ja/nee/er must have teach cards before first use.
      No function word in 3+ examples without being taught.
    P38 — Progressive Disclosure:
      Phonetics hidden by default (Latin scripts), toggle to reveal.
      Non-Latin scripts keep phonetics visible. Cognates collapsible.
    All three rules added to manifesto (items 36-38), pipeline checklist
    (pre-build 0e/0f, teach step requirements, tip step requirements,
    final audit), and HANDOFF.md P-rule table.

  PHASE 2 — ENGINE CHANGES:
    A) Phonetic Toggle (P38):
      Board-mode teach card: removed always-visible phonetic line from
      example section. Added ghost "Abc" button (serif, no border, no bg)
      to top-right strip next to speaker button. Gray when inactive,
      purple when active. Phonetic reveals below translation, right-shifted
      (marginLeft:40), italic, soft purple — "whispered aside" aesthetic.
      Non-Latin scripts: phonetic remains always visible (unchanged).
      showPhonetic state already existed. 7 reset points confirmed.

    B) Cognate Popup (Word Family):
      Replaced permanent cognate line (🔗 emoji + text) with collapsible
      "Word family" popup. Ghost trigger button, chevron rotates on toggle.
      New showCognate state added, 7 reset points.

    C) Cognate Object Format:
      Migrated cognate field from free-text string to structured object:
        cognate: {words: [{lang:"English",word:"twelve"},{lang:"German",word:"zwölf"}], family:"germanic"}
      Popup renders: language names left-aligned gray, words right-aligned
      purple bold, family note below with bold headline + academic detail.
      Renderer handles both old string format (fallback) and new object.

    D) LANG_FAMILIES Constants:
      5 reusable family descriptions: germanic, romance, indoeuropean,
      borrowed, turkic. Bold casual headline + academic detail paragraph.
      Defined once, recycled across all cognate cards. Future languages
      just pick the right family key.

    E) Content Migration:
      40/40 cognate cards migrated from string to object format.
      38 tagged family:"germanic", 2 tagged family:"borrowed" (sorry, student).
      Zero old-format strings remaining.
      2 sample notes rewritten (twaalf, eenentwintig) as proof-of-concept:
        twaalf: 88 chars paragraph → 112 chars, 3 structured lines
        eenentwintig: 252 chars paragraph → 130 chars, 3 structured lines

  PHASE 3 — CONTENT MIGRATION (all 3 workstreams):
    Workstream 1 — P36 Note Rewrite:
      U1: 65 notes rewritten, 0 unstructured paragraphs remain.
      U2: 50 notes rewritten, 6 deepDives added (spelling explanations
          for komen/spreken/wonen ik-forms split from note to deepDive).
      U3: 4 notes rewritten, 1 deepDive added (leren).
      Total: 119 notes restructured. 150 Dutch notes, 0 unstructured.
    Workstream 2 — P36 Tip Rewrite:
      U1-U3 tips already used bilingual pair format. No changes needed.
    Workstream 3 — P37 Function Word Cards:
      Added "en" (and) teach card in U1 L10, before first "En jij?" tip.
      Added "ook" (also/too) teach card in U2 L3, before "Spreekt u ook Frans?"
      "of" and "maar" not used as Dutch words in U1-U3 yet — deferred.

  RULES ADDED: P36, P37, P38 (manifesto + pipeline + HANDOFF)
  VERSION: NL_V2_U3_v1.2

DECISION 32 — Dark Mode + U1-U2 Jargon Audit
  DARK MODE:
    Toggle: Ctrl+N keyboard shortcut + floating top-right button (grey,
    minimalist ☽/☀, no color). State in React, class "dark" on :root.
    Palette: Soft dark #1E1E2E base, muted purples. CSS variable approach:
    :root.dark overrides ALL --gray-*, --white, --shadow-* variables.
    Custom vars: --gold-bg, --purple-bg, --purple-flat, --purple-border,
    --example-bg switch gradients automatically. All 42+ hardcoded
    background:"white" → background:"var(--white)". Remaining inline
    gradients use dk? ternary in components with const dk=classList check.

  JARGON AUDIT (24 fixes across U1-U2):
    - "infinitive" → "full form" (8 notes)
    - "conjugation" → "every form of" (7 goals/desc)
    - "diminutive" → "words ending in -je" (2 tip/mc)
    - "devoiced" → "b → p, d → t, g → k" (1 note)
    - "schwa" → "quick lazy uh sound" (1 note)
    - "closed syllable" → plain description (1 note)
    - Forward refs: twee/drie before L7 → used taught vocab (4 fixes)
    - één gap: added deepDive to "een" number card teaching accent marks
    - MC quiz: untaught mooi/stad → taught man/niet (1 fix)

DECISION 33-36 — Candy Gloss Visual Overhaul (Sessions 33-36)
  GLOBAL AESTHETIC: iOS 2011 candy gloss treatment. All interactive
  elements get 5-stop vertical gradients, curved shine overlays (pseudo
  ::before or inline span), inset highlight/lowlight shadows, hover
  brightness(1.1). Cards get .card::before shine overlay.

  HOME TILES: 7-stop purple gradient (#C0AEF8→#4A2BA6), white text,
  44% height shine overlay, inset shadows top/bottom. Same both modes.

  BAND CARDS: Level badge = candy button (52px, 16px radius, 5-stop
  gradient with band color, inset shadows, shine overlay, text shadow).
  Cards get color-tinted bottom gradient (light mode), thicker borders
  (2.5px), progress bars with glow. No top-left icon (removed as clutter).

  FOUNDATIONS TILE: Icon box = 5-stop purple candy gradient with shine.
  Topics badge = candy pill (purple gradient, white text, inset shadows).

  TAB BUTTONS (Chapters/All Units, New/Legacy): Active = continue-button
  purple gradient with shine span. Inactive = transparent. Container =
  recessed dark background. letterSpacing 0.3, fontWeight 800.

  CARD SHADOWS: Max blur 12px globally. Dark mode card::before shine
  reduced to 0.08 opacity (was 0.14) to prevent bright glow on completed.

  LIGHT MODE BG: #E6ECFA (Session 36 revert from white).

  RULES:
    P39: All interactive elements must have candy gloss treatment (gradient,
         shine overlay, inset shadows). No flat buttons.
    P40: Card shine (.card::before) max 0.5 opacity light, 0.08 dark.
    P41: No nested template literals in JSX. Use const variable + string
         concatenation for complex border/background expressions.

DECISION 37 — Dark Mode Race Fix + Continue Button
  DARK MODE TOGGLE: useEffect (not useLayoutEffect, not bare render).
  Inline dk checks: always const dk=...contains("dark") at component top.
  No inline classList checks in style objects (stale value risk).

  CONTINUE BUTTON: Forward button uses SAME opaque 7-stop purple gradient
  both modes (#C0AEF8→#4A2BA6). Teal correct button stays opaque both
  modes. No semi-transparent dark-mode variants. Shine: 44% height,
  0.45 peak opacity. Hover: brightness(1.1) both modes.

DECISION 38 — Custom SVG Icon Library
  BrandIcon component: hand-crafted vector icons replacing Windows emoji.
  6 band icons (A1 sprout, A2 leaves, B1 books, B2 target, C1 star,
  C2 crown), 10 unit icons, 7 lesson-type icons. All use app palette
  gradients (purples, teals, golds). Emoji fallback for unmapped icons.
  HOME TILES: Keep original emoji (user preference). SVG icons used in
  band cards, unit views, lesson screens, foundations only.

DECISION 39 — Korean A1.1 Curriculum (U1-U3, 30 lessons)
  First Korean units embedded. P26 spiral: SOV shown U1, named U3.
  Particles 은/는 shown U1, 이/가 U2, formally named later (U5).
  preview protocol: 모르다 flagged U2 with "just remember 몰라요."
  Compound decomposition from lesson 1 (안녕하세요 = 안녕+하+세요).
  Konglish cognate blitz U1-L3 (20 free words). False friends U1-L8.
  Cultural anchor: 나이 (age determines everything) in U1-L9.

DECISION 40 — Em Dash Purge (Leak Prevention)
  58 em dashes removed from Korean data. Replaced with periods,
  colons, commas. RULE: No em dashes in lesson data fields.

DECISION 41 — Font System: Quicksand Headings, Nunito Body
  Georgia/serif purged from lesson engine (15 instances). Quicksand
  for display headings. Nunito for all body/question/note text.
  Only exception: "Abc/로마" phonetic toggle label keeps Georgia.

DECISION 42 — Compound Bubble: Glossy Candy Style
  Standalone lavender bubble with candy gloss arc, white-glass pills.
  Note section separate below with purple left bar. Multi-line parser
  captures parts on lines following prefix (SINO-KOREAN COMPOUND:\n).
  Empty prefix lines return null.

DECISION 43 — Hanja Removal from Primary View
  66 CJK chars removed from A1 pills/notes. Pills show Korean + English
  only. CJK appears ONLY in optional deep dives for polyglot learners.
  RULE: No CJK in A1 primary content.

DECISION 44 — Sino-Korean Introduction + Hangul History Deep Dive
  Tip card "Sino-Korean: Your Secret Weapon" in U1-L6 before first
  compound. Deep dive: King Sejong, 1443, Chinese→Hangul transition.
  RULE: Every new concept type needs intro tip before first instance.

DECISION 45 — Enter Key as Continue Trigger
  Enter + Space both continue/select on all card types. Text input
  exception preserved. RULE: Both keys always work.

DECISION 46 — Arrow Parser Collision Fix
  31 "=" definition patterns in Korean notes replaced with ":".
  Prevents tip/note renderers from treating "Korean = meaning" as
  arrow-format lines. RULE: Never use "=" between term and definition.

DECISION 47 — Deep Dive Glossy Candy Treatment (Global)
  Deep dive dropdown content uses same candy bubble aesthetic as
  compound pills. Applies to ALL languages. Gloss arc, lavender
  gradient, semi-transparent background, dark mode adaptive.

DECISION 48 — Romanization Behind Toggle (Non-Latin)
  Korean phonetic/romanization hidden by default, shown via toggle.
  Same "Abc/로마" button for all script types. No auto-display.
  RULE: Romanization is a crutch. Always behind toggle.

DECISION 49 — Optional Hanja Toggle on Compound Bubble
  Small 漢字 button in compound header. Hidden by default. When
  tapped, shows the Chinese character below each Korean pill.
  Data: hanja:"韓+國" field on teach cards. 14 cards in U1-U3.
  Serves polyglot accelerator without intimidating beginners.
  RULE: Hanja is OPTIONAL, TOGGLE-ONLY, never in primary view.

DECISION 50 — Deep Dive Romanization for CJK
  学生 (Chinese) and がくせい (Japanese) in deep dives must include
  romanization: 学生 (xuesheng, Chinese), がくせい (gakusei, Japanese).
  Learners cannot be assumed to read ANY non-Latin script.
  RULE: Every non-Latin word in ANY context must have romanization.

DECISION 51 — Quiz Option Font Fix (CSS Global)
  .quiz-opt CSS class still used Georgia serif. Changed to Nunito.
  This is the CSS-level fix that complements D41's inline fixes.
  RULE: No Georgia anywhere in lesson engine — CSS or inline.

DECISION 52 — Continue Button Auto-Focus on Lesson Complete
  Done screen now auto-focuses Continue button (doneFocus=0) when
  onContinue exists. Space/Enter immediately triggers continue
  without needing arrow keys first. Mouse movement still clears.

DECISION 53 — False Friend Glossy Lavender Bubble
  Notes starting with "⚠️ FALSE FRIEND:" or "⚠️ NOT REAL" now
  render as glossy candy bubble with SAME lavender tint as compound
  and deep dive. One consistent visual language for all special
  content blocks. ⚠️ emoji replaced with AppIcon lightbulb.
  RULE: All special note blocks (compound, deep dive, false friend)
  use identical lavender candy bubble. No amber, no deviation.

DECISION 54 — Hanja Readability Fix
  Hanja text in compound toggle was 13px/500/0.45 opacity — nearly
  invisible. Changed to 15px/700/0.6 opacity with 2px letter-spacing.
  RULE: Every visible element must be READABLE. Subtle ≠ invisible.

DECISION 55 — noteHl Single-Char Quote Fix
  Quoted word regex caught 'I' as a 1-char word, highlighting it
  teal. Changed minimum from 1 to 2 chars: '[a-zA-Z]{2,12}'.
  RULE: Teal highlighting for quoted words requires 2+ characters.

DECISION 56 — Done Screen Spacebar Stale Closure Fix
  doneFocus was captured in the keyboard handler's closure at
  registration time, missing the async setState to 0. Handler
  read stale -1 and ignored Space/Enter. Fix: doneFocusRef tracks
  latest value via useEffect sync. Handler reads ref, not state.
  RULE: Event handlers in useEffect must use refs for state that
  changes between registration and execution.

DECISION 57 — Full A1.1 Pedagogical Audit (81→0 issues)
  Automated audit checks: double spaces, lowercase after period,
  equals in notes, em dashes, Korean in hints (>4 chars), long
  lines (>85ch), MC answer leaks, FB leaks, block count claims,
  missing intro steps. Found 81 issues from sloppy em dash cleanup
  (". you" instead of ". You"), leftover "=" definition patterns,
  Korean-heavy hints that could leak answers. ALL fixed.
  Final pass: 0 issues, 220 steps validated.
  RULE: Run audit script before EVERY commit. Zero tolerance.

DECISION 58 — Structured Card Design Standard (THE Standard)
  All special content blocks (compound, deep dive, false friend,
  warning, preview) use the SAME visual system:
  a) Glossy lavender candy bubble with gloss arc
  b) AppIcon lightbulb header (no raw emojis)
  c) Korean-only lines: CENTERED, 22px bold purple, standalone
  d) Translation lines after Korean: centered, small italic gray
  e) Empty lines (\\n\\n): 12px breathing room between sections
  f) NOT/warning lines: teal accent
  g) Regular English: 15px Nunito, left-aligned
  h) Definitions use COLONS, never equals signs
  i) Hints in English only (max 4 Korean chars)
  j) Notes max 85 chars per line
  This applies to ALL languages. After Korean B1, retroactive
  polish pass on Dutch, foundations, and Arabic content.
  RULE: This is THE default for all future content.

DECISION 59 — Korean A1 Density Upgrade + P42 Foundation Tips
  PROBLEM: Korean A1 lessons averaged 6.9 steps/lesson (target: 20-25).
  63% of lessons had fewer than 8 steps. Learners spent 2-3 min/lesson
  instead of 8-12. Additionally, 22 core concepts were USED before
  being TAUGHT. The P26 spiral (show→name) works for SOV and particles,
  but foundational "how Korean works" knowledge had NO introduction.

  FIX (two-part):
  A) DENSITY: Every Korean lesson expanded to 20-25 steps using this mix:
     1 intro, 4-6 teach cards, 1-2 tip cards (with deep dives),
     6-8 MC (spaced, varied angles), 2-3 FB, 2-3 match,
     optional drag_fill (only if confirmed supported), 1 checkpoint MC.

  B) P42 "HOW KOREAN WORKS" TIP CARDS inserted at key moments:
     U1-L1: "How Korean Is Different" (SOV, no articles, context-heavy)
     U1-L1: "Korean Verbs End in -다" (dictionary form, stems, -요)
     U1-L2: "You're Speaking Politely (해요체)" (speech levels, -요)
     U1-L6: "Korean Names: Family Name First" (naming culture, titles)
     U2-L2: "How Korean Verbs Get Endings" (vowel harmony, -아/어요)
     U2-L5: "Korean Is a Contextual Language" (subject dropping, no he/she)
     U3-L4: "Why Korean Needs Counters" (counter system, categories)

  Each tip: short ADHD-friendly main text + nerdy deepDive dropdown.
  These slot into EXISTING lessons (no new lessons created).
  All content follows D58 structured card standards.

  IMPLEMENTATION: Batch per lesson, additive only, regression-safe.
  Batch 1 complete: kou1l1 expanded 8→22 steps. Validated:
  teach-before-test PASS, anti-leak PASS, rendering PASS.
  Remaining batches: kou1l2 through kou1l10, then U2-U6.

  PIPELINE ADDITIONS:
  P42: Every Korean lesson must have P42 tip cards where specified
       in the rewrite plan. Tips use deepDive field for nerd detail.
  P43: DENSITY FLOOR. Each language defines its own density target
       in LANG_BLUEPRINT. Korean: 20-25 steps. Dutch: 25-35 steps.
       If a topic genuinely needs fewer steps, use fewer (pedagogy
       over count). If it needs more, use more. The floor is a
       guideline, not a padding mandate. Never add filler steps.

DECISION 60 — Quiz Question Cards: Compound Glossy Bubble Style
  MC and FB question cards now render with the same lavender gradient,
  gloss arc shine, and shadow as compound word cards. Answer options
  remain flat .quiz-opt with CSS hover/glow/lift effects.
  RULE: Question = glossy bubble. Answers = flat interactive buttons.

DECISION 61 — Example Sentences: Standalone Compound Bubbles
  ALL example sentences (494 cards) now render as standalone compound-
  style bubbles BELOW the teach card, never inside it. Dialogue A/B
  examples get alternating left/right offset with chat-tail corners.
  Both board-mode and standard renderers updated.
  RULE: No example sentence inside the teach card body.

DECISION 62 — Korean-First Auto-Split in Notes
  When a note line STARTS with Korean, followed by = or : then English,
  the renderer splits: Korean large/purple above, English small/gray below.
  Does NOT fire when Korean appears inside English prose (prevents orphans
  like "가세요 (" / "please go)" that broke in earlier greedy version).
  RULE: Split only fires on ^[Korean] lines, never mid-sentence Korean.

DECISION 63 — Jamo Inline Sizing
  Single jamo chars (ㅂ ㅓ ㅗ) in koreanHl: 13px/600w (was 15px/800w).
  Prevents billboard rendering of notation jamo inside English text.
  Full syllable blocks keep 18px/700w.

DECISION 64 — Operator Sizing in Word Card Display
  /, →, +, = in teach card nl field: 40% of Korean font size, gray-300.
  이에요 / 예요 now shows the slash as a tiny connector, not the focal point.

DECISION 65 — Korean Quiz Option Rendering
  word-break: keep-all on all Korean quiz options (MC, FB, board mode).
  Single-column layout when any option contains Korean. Font capped at
  20/17/14px by char count. Prevents syllable splitting across lines.

DECISION 66 — Korean Word Pills in Tips
  Pure Korean word lines (3+ words, all Hangul, space-separated) in tips
  auto-render as individual glossy compound-style pills in flex-wrap grid.
  커피  택시  버스  호텔 → 4 separate glossy pills centered on screen.

DECISION 67 — P8 Hint Leak Purge (CRITICAL)
  282 hints contained the answer (e.g. "Vowel → 예요" where ans=예요).
  ALL rewritten to skill-guiding questions ("Vowel or consonant?").
  PIPELINE ADDITION — P44: HINT ANTI-LEAK GATE.
  Before writing ANY hint: "Can the learner determine the answer from
  ONLY the hint text?" If yes → rewrite. Hints teach the SKILL to
  find the answer, never reveal the answer itself.

DECISION 68 — Tip Density: Max 4 Visible Lines
  All 110 Korean tips trimmed to max 4 visible lines. Overflow content
  moved to deepDive (tap to expand). ADHD/dyslexia first: the visible
  card shows ONE takeaway, deepDive holds the reference material.
  RULE: Tips max 4 visible lines. Everything else in deepDive.

DECISION 69 — Match Pairs Drag-and-Drop + Quiz Sound Fix
  A) DRAG-AND-DROP: Matching pairs now support both click and drag.
     Pointer events (mouse+touch) on match items start a drag that draws
     a live dashed line to the cursor. Releasing over the opposite column
     triggers the match. Click-to-select still works alongside.
     touchAction:none prevents scroll during drag on mobile.
  B) QUIZ ANSWER SOUND: UISounds.tick() was inaudible (15ms vol 0.06)
     because correct/wrong chime fired 1ms later. Fixed:
     - Answer clicks use UISounds.click() (louder: 25ms vol 0.1)
     - checkAndNext delays correct/wrong chime by 150ms
     - Both MC and FB answers have click sound + hover glow + press scale
DECISION 70 — P45: DeepDive Is EXPLANATION, Never Continuation (CRITICAL)
  PROBLEM CAUGHT: The "Three Patterns You've Seen" tip (L19089) shows
  pattern ① in the visible card and hides patterns ② and ③ in the
  deepDive titled "More Detail". This means the deepDive is literally
  just "the rest of the answer" — not deeper explanation.

  THIS IS A FUNDAMENTAL STRUCTURAL VIOLATION. If you have 3 things
  to show, SHOW ALL 3 in the visible card as examples. The deepDive
  is for WHY it works, not for items 2 and 3.

  PIPELINE ADDITION — P45: DEEPDIVE CONTENT GATE.
  The deepDive must ALWAYS contain EXPLANATION, never CONTINUATION.
  Test: "If I delete the deepDive, does the visible card still show
  the complete picture?" If no → the deepDive has stolen content
  that belongs in the visible card.

  CORRECT STRUCTURE (the "Three Patterns" card should be):
  ─── VISIBLE CARD ───
  Title: The Three Patterns You've Seen
  Text:
    Every verb you've used fits one of these:

    가다 → 가요
    먹다 → 먹어요
    하다 → 해요

    The vowel in the stem decides: bright (ㅏ ㅗ) → -아요,
    dark (everything else) → -어요. 하다 is always 해요.

  ─── DEEPDIVE ───
  Title: Light & Dark Vowels
  Text:
    Korean vowels split into two families:
    Bright (양성): ㅏ ㅗ — these take -아요
    Dark (음성): ㅓ ㅜ ㅡ ㅣ — these take -어요

    가다: stem 가 has ㅏ (bright) → 가 + 아요 → merges to 가요
    먹다: stem 먹 has ㅓ (dark) → 먹 + 어요 → 먹어요
    오다: stem 오 has ㅗ (bright) → 오 + 아요 → contracts to 와요

    This is called vowel harmony (모음조화).
    Full lesson in Unit 2 with all the contraction rules.

  KEY PRINCIPLES:
  1. ALL examples visible upfront — 3 lines, pattern obvious, no math
  2. No +, =, or formula notation — just 가다 → 가요
  3. Light/dark vowel concept MENTIONED in visible card (1 sentence)
  4. DeepDive EXPLAINS the why with etymology and more examples
  5. Formula-free: "bright vowels take -아요" not "VOWEL STEM + 요"

  THIS APPLIES TO ALL 90 TIPS WITH "More Detail" DEEPDIVES.
  Batch S (for next agent): audit every tip, ensure deepDive is
  explanation not continuation. ~90 cards, each needs judgment.

  WORST OFFENDERS (deepDive literally has the remaining numbered items):
  L19089: Three Patterns — ① visible, ②③ in deepDive
  L19420: Contraction Patterns — ①② visible, ③④ in deepDive
  L20440: 5 Irregular Families — ① visible, ②③④⑤ in deepDive
  L20686: Past Tense Formula — visible text, ②③ in deepDive

DECISION 71 — P34 Teach-Before-Test: Full Curriculum Audit Required
  FOUND: drag_fill at L19154 (kou1l2b) uses 거기에서, 밥을, 공부도
  in a quiz where NONE of those structures have been taught yet.
  도: 7 lessons late. 거기에서: full unit late. 을/를: THREE units late.
  공부하다: never has own teach card. Hint also leaks answer (공부해요).
  RULE: P34 — every word/particle in quiz CONTEXT must be pre-taught.
  Not just the blank answers — the SURROUNDING SENTENCE too.
  BATCH T for next agent: full P34 audit on all quiz cards, U1-U3 first.

DECISION 72 — Korean TOPIK/TTMIK Standards Audit (2026-03-14)
  Multi-agent audit against TOPIK I + TTMIK L1-6 found gaps.
  Initial report claimed ~40 missing patterns. Code verification
  found 7 false positives (죄송, 한테, 그리고, 니까, ㄹ게요, 기전에,
  거나 all already taught). Corrected gap: ~20-25 patterns.
  RULE: All future gap audits MUST verify against actual code,
  not just CLAUDE.md/docs claims. Search units-korean.js directly.
  See docs/KOREAN_TOPIK_TTMIK_AUDIT.md + KOREAN_CURRICULUM_GAP_PLAN.md.

DECISION 73 — -(으)ㄹ까요/-(으)ㄹ래요 Highest A2 Gap
  Suggestion (-(으)ㄹ까요?) and casual preference (-(으)ㄹ래요) are
  both absent despite being high-frequency TOPIK/TTMIK patterns.
  Seed in U4 examples, formal harvest lesson in U9.
  These reveal Korean's suggestion vs preference distinction.

DECISION 74 — Code-Verified Gap List Replaces Assumed Gaps
  Seven patterns assumed missing were actually present. Future
  content audits MUST grep the actual data files. GENERIC: This
  applies to ALL languages, not just Korean. Before claiming a
  gap, verify: does a teach card exist? Is it just in examples?

DECISION 75 — Question Words Need Standalone Teach Cards
  누구/왜/어떻게 appear in examples but lack formal teach cards
  in U2 (Identity). Function words (P37) need teach cards.
  These are A1 survival words. Add to U2L3-L5.

DECISION 76 — Seed Registry Expansion (12 → 26)
  14 new seeds documented with plant locations + harvest targets.
  Seeds may appear in teach card examples/notes only (not quizzes)
  per P34. Every seed gets a seed registry entry before planting.

DECISION 77 — B1 Density Violation: 63% Below P43 Floor
  Audit: 59/93 B1 lessons under 15 steps. U20 avg 10.9 (worst).
  P43 target is 20-25. The "cognitively heavier" justification is
  insufficient when sentences don't layer multiple constructs.
  FIX: B1 density uplift. No lesson under 15 steps. Target 18-20.
  U20 (capstone) must be strongest unit, not weakest.

DECISION 78 — P46: B1+ Multi-Construct Sentence Density
  NEW PIPELINE RULE. Every B1+ lesson must:
  (a) Use 2+ previously-taught constructs in teach card examples
  (b) Have 50%+ quiz sentences layering current + previous grammar
  (c) End with a comprehensive multi-pattern final question (3+ constructs)
  (d) Meet minimum 15 steps, target 18-22
  GENERIC: Applies to ALL languages at B1+, not just Korean.

DECISION 79 — P8 Safeguards for Contrast Lessons
  Contrast lessons (A vs B grammar) carry inherent P8 leak risk.
  RULES: (a) MC stems use Korean sentences, not English meta-descriptions
  (b) FB preferred for grammar discrimination (sentence with blank)
  (c) Hints reference decision frameworks, never grammar rules
  (d) Distractors must be 3+ plausible Korean forms, never English glosses

DECISION 80 — Code-First Verification Protocol (2026-03-14)
  TOPIK/TTMIK audit agents produced 25% false positives (10/40) by
  comparing reference lists against CLAUDE.md descriptions instead of
  grep-ing actual code. Owner feedback: "I could find that with Ctrl+F."
  RULE: ALL content audits MUST verify against actual data files
  (units-korean.js, units-dutch.js, etc.) using grep/search, NEVER
  rely solely on doc descriptions. For each claimed gap: provide
  search terms used, grep results, and confidence level.
  APPLIES TO: All languages. All future audit sessions.

DECISION 81 — Agent Deployment Standards (2026-03-14)
  Sub-agents must receive: exact file paths, exact search terms with
  multiple variants (hangul + romanized + English), clear output format
  with raw evidence. Agents return evidence, main session interprets.
  TOKEN RULE: Do not deploy agents for tasks a single grep can answer.
  A human with Ctrl+F must not be faster than your agent.
  VERIFICATION: Any audit producing a gap list requires a second pass
  (agent or main session) verifying every item against actual code.
  False positives must be logged with the search terms that would have
  caught them.

DECISION 82 — Documentation Hierarchy (2026-03-14)
  Three tiers established in CLAUDE.md:
  Tier 1 (authoritative): CLAUDE.md, MASTER_BIBLE, POLYGLOT_PIPELINE
  Tier 2 (active reference): B1_DESIGN, GAP_PLAN, QUALITY_AUDIT
  Tier 3 (historical, DO NOT use for active decisions): TOPIK_AUDIT
  (25% false positives), DENSITY_AUDIT (superseded)
  RULE: Never treat Tier 3 docs as current truth. They are preserved
  for audit trail only. Always check the correction notices at top.

DECISION 83 — Onboarding: Skip "I speak" + Flag Icon Grid (2026-03-15)
  PROBLEM: "I speak" language selection screen was unnecessary since
  English is the only source language. "I want to learn" used a dropdown
  that didn't match the Profile screen's flag icon card UI.
  FIX: (a) Removed step 1 ("I speak") entirely, hardcoded baseSel="en".
  Splash now goes directly to target language picker.
  (b) Replaced dropdown target picker with flag icon grid using the
  same .lang-card CSS class and CountryFlag component as Profile screen.
  RULE: Re-add "I speak" screen when Arabic is implemented as a second
  source language. Until then, English is hardcoded.

DECISION 84 — Korean/English Translation Separation (2026-03-15)
  PROBLEM: fb/mc/drag_fill exercises showed English translations inline
  with Korean text. koreanHl() and smartHl() applied random purple/green
  coloring to English words mixed in with Korean.
  FIX: (a) splitKoEn() helper splits st.s/st.q on newline: first line
  is Korean (rendered via koreanHl), rest is English (rendered plain).
  (b) renderEnglishBelow() shows translation visible by default for
  all quiz types (fb, mc, drag_fill). Learners need context.
  (c) {1} format normalized to ___ in fb renderer for Korean content.
  (d) ~450+ inline English translations in units-korean.js moved to
  \n-separated second line across all 20 units.
  RULE: All quiz renderers must separate Korean and English before
  applying highlighting. English translations are never highlighted.

DECISION 85 — Streamlined Onboarding: Single Screen (2026-03-15)
  PROBLEM: New users had to click through 3 screens (splash → language
  picker → auth/sign-in) before reaching the app. Too much friction.
  FIX: (a) Removed splash screen entirely. Onboarding opens directly
  on the flag icon grid language picker. (b) Removed auth screen.
  Onboard auto-creates a guest profile (Learner, beginner, 15min goal).
  Users go from cold start to learning in ONE click.
  RULE: Re-add auth when user accounts are implemented server-side.
  Until then, all state is local (localStorage).


═══════════════════════════════════════════════════════════════════════
LINGOVERSE CONTENT PIPELINE — Mandatory Checklist for New Content
═══════════════════════════════════════════════════════════════════════

Every new language, unit, or lesson MUST follow this pipeline.
Future AI sessions: READ THIS BEFORE WRITING ANY CONTENT.

─── ADDING A NEW LANGUAGE ───
  0. Blueprint: Create LANG_META + LANG_BLUEPRINT entry
  1. Foundations Knowledge: FOUNDATIONS_BY_LANG grids (P12)
  2. Foundations Playthrough: FK_PLAYTHROUGH learning path (P20)
  3. Gate Quiz: FK_GATE_QUIZ 5-task pass/fail (P13)
  4. A1 Units: UNITS[] with track:"v2" if parallel to legacy
  5. Validate: run Content Integrity Validator → 0 errors
  6. Update: add to Decision Log what was new/broke

─── ADDING A NEW UNIT ───
  1. Add unit object to UNITS[] with correct lang, level, track
  2. Each lesson needs: id, title, icon, xp, board:true (MANDATORY for all new content — D21)
  3. Follow step type pipeline below for all lessons

─── ADDING A LESSON (step-by-step) ───
  0. P24 REDUNDANCY CHECK (MANDATORY FIRST STEP):
     □ Grep ALL prior unit teach cards for the same grammar target
     □ If concept was fully taught before → this lesson CANNOT re-teach
     □ Must teach a NEW skill, explicitly named in intro card
     □ Review/drill lessons must be titled as such, never as re-teach
  0b. P26 CORE CONSTRUCTS CHECK:
     □ If this is Unit 1-3: does this lesson introduce any core
       constructs from the language's Core Constructs List? If yes,
       name and briefly explain them. Quiz only vocab/phrases.
     □ If this is a later unit: are core constructs being USED
       (present in sentences, brief callbacks)? Good.
     □ If this is the Elaborate unit for a construct: full formal
       treatment with drills and system quizzes. Check the Core
       Constructs Map for timing.
  0c. P32 LINGUISTIC ACCURACY GATE (MANDATORY):
     □ Every Dutch sentence: would a native speaker say exactly this?
       If uncertain, flag it and do not commit.
     □ Every grammar rule: is this complete, or does it oversimplify
       in a way that produces wrong patterns? If exceptions affect
       exercises, teach the exceptions or avoid triggering them.
     □ Every exercise: is there exactly ONE correct answer based ONLY
       on the sentence? If near/far disambiguation is needed, add
       hier/daar to the sentence. Hints cannot disambiguate.
     □ Demonstratives: pronoun use (dit/dat is...) and adjective use
       (deze/die + noun) are separate rules. Never create exercises
       where "deze is de [thing]" or "die is het [thing]" is expected.
       Near/far exercises MUST include hier/daar in the sentence.
     □ Translation exercises: verify the target sentence is idiomatic
       Dutch, not a word-for-word calque from English.
  0d. P34 VOCABULARY GATE (MANDATORY):
     □ Every Dutch word that appears in exercises, tips, or examples
       must have been introduced in a teach card — either in this
       lesson or a prior one. No exceptions.
     □ If a lesson needs a new word for context (hier, daar, niet,
       ook, etc.), that word MUST get its own teach card first.
     □ Audit: grep all Dutch words in exercises, verify each has a
       teach card somewhere in current or prior lessons.
  0e. P37 FUNCTION WORD GATE (MANDATORY):
     □ Any function word (en, of, maar, ook, niet, ja, nee, er) used
       in example sentences must have its own teach card at or before
       first use. Check: does this lesson introduce a function word
       in examples without teaching it? If yes → add teach card.
  0f. P36 VISUAL DENSITY CHECK (after writing content):
     □ Every teach card note: ≤3 rendered lines, no prose paragraphs
       >100 chars. Uses \n and • for structure. "What" in note,
       "Why" in deepDive. Apply the triage table from manifesto P36.
     □ Every tip text: bilingual pair format (Dutch = English) where
       possible. Max 2 prose sentences between pairs. Scannable.
     □ Screenshot test: "Can I read this card on a phone without
       scrolling? Does the eye know where to land?"
  1. INTRO step: title, desc, goals[] (3-5 bullet points)
     Board mode renders this as: white card, purple accent, serif title,
     teal desc, purple ▸ bullets, purple "Begin →" button.
  2. TEACH steps (board:true lessons):
     □ nl, en, phonetic — REQUIRED
     □ example + exampleEn — REQUIRED (never untranslated: P18)
     □ note — REQUIRED. Must follow P36 Visual Density rules:
       - Max ~100 chars unstructured, or use \n/• for structure
       - "What" in note, "Why" in deepDive
       - Spelling explanations: 1-line summary → deepDive for full
       - Cultural notes: 1 sentence max
     □ also — CHECK: does this word have other common meanings? (P19)
     □ cognate — CHECK: English/German/other cousin? (P19)
       Keep SHORT: "English 'work', German 'Werk'" — no sentences.
     □ fRef — CHECK: link to Foundations section if relevant?
     □ P25 (verbs): infinitive + ik-form cards explain spelling
       via open/closed syllable logic. fRef present.
     □ P27: No IPA notation, no slashes as separators, no "See
       Foundations" text, ASCII-only phonetics, plain English only.
     □ P38: Phonetics hidden by default (toggle button) for Latin
       scripts. Visible by default for non-Latin scripts only.
  3. VERB_TABLE steps (for conjugation):
     □ groups[] with label (Singular/Third Person/Plural)
     □ rows[] with pronoun, form, en
     □ note (summary), optional deepDive
  4. TIP steps:
     □ title with emoji
     □ text with ALL Dutch translated (use "= English" format: P18)
     □ P36: Use bilingual pair format (Dutch = English) wherever
       possible — the renderer auto-formats these beautifully.
       Max 2 prose sentences between pairs. Tips must be SCANNABLE.
     □ deepDive optional (same translation rules)
     □ If showing verb forms → use verb_table, NOT plain text
  5. QUIZ steps (mc, fb, match, drag_fill, tr):
     □ Run P8 anti-leak check:
       - Answer not visible in question
       - Answer not significantly longer than distractors
       - Answer position varies across opts arrays (~25% each)
       - Engine shuffleOpts handles runtime; content varies as backup
       - Hints do not contain English translation of answer word
     □ hint field on MC/FB
     □ match pairs: 4 items, shuffled, nl+en pairs
     □ P28 (translation flexibility): tr steps must have 2+ MK variants
       covering natural English phrasing (contractions, synonyms).
       TR_EQUIV handles mechanical swaps; MK variants handle structural.
     □ P29 (multi-blank): NEVER use fb for multi-blank sentences.
       Use drag_fill instead. Every drag_fill needs blanks + pool.
  6. FINAL AUDIT:
     □ P24: Every lesson passes "what's NEW?" test
     □ P25: Verb teach cards explain spelling, have fRef
     □ P26: Core constructs introduced (if U1-3), used (if later), or
       elaborated (if dedicated unit). Check Core Constructs Map.
     □ P27: Visual cleanliness (no IPA, no slashes, no "See
       Foundations", ASCII phonetics, plain English comparisons)
     □ P28: All tr steps have 2+ MK variants
     □ P29: Zero double-blank fb steps (use drag_fill)
     □ P30: ZERO hooks inside if(st.type===) renderer blocks.
       Check: grep useMemo/useCallback/useEffect/useState/useRef
       between if(st.type=== and the next return(. Must find NONE.
     □ P31: No gradient strings in CSS color property. Article colors
       use pillText (solid) for text, bg (gradient) only for background.
     □ P32: Linguistic accuracy gate passed:
       - Every Dutch sentence is native-speaker quality
       - Every exercise has exactly ONE correct answer from sentence alone
       - Near/far demonstratives have hier/daar in sentence
       - No "deze/die is de [thing]" pronoun errors
     □ P33: All drag_fill steps support click-slot, drag-drop, keyboard
     □ P34: Every Dutch word in exercises has been taught (teach card)
       in this lesson or a prior one. No untaught vocabulary.
     □ P36: Visual density gate:
       - Every note: ≤3 rendered lines, structured (\n, •), no paragraphs
       - Every tip: bilingual pairs, scannable, ≤2 prose sentences between
       - Screenshot test: readable on phone without scrolling
     □ P37: Function word gate:
       - en, of, maar, ook, niet, ja, nee, er have teach cards before use
       - No function word appears in 3+ examples without a teach card
     □ P38: Progressive disclosure:
       - Phonetics hidden by default (Latin scripts), toggle to reveal
       - Cognates short (no full sentences about etymology)
     □ Tip/teach examples are logically accurate (P24 extended):
       if text claims English "drops" a word, the example must lack it.
     □ Brackets balanced
     □ No untranslated Dutch in tips/deepDives
     □ Every teach card has also/cognate where applicable
     □ Anti-leak validator passes
     □ All keyboard nav works (Ctrl+S skip, Backspace back, ↓ deepDive, Esc quit)
     □ Backspace hierarchy: step → lesson list → unit grid → chapters → home
     □ Escape quits current context cleanly

─── STEP TYPE REFERENCE ───
  intro     → {type:"intro", title, desc, goals:[]}
  teach     → {type:"teach",kind:"info", nl, en, phonetic, example, exampleEn,
               note, also?, cognate?, fRef?, kind?}
  verb_table→ {type:"verb_table", title, label, groups:[], note?,
               deepDive?}
  tip       → {type:"tip", title, text, deepDive?}
  mc        → {type:"mc", q, opts:[], ans, hint?}
  fb        → {type:"fb", s, a, opts:[], hint?}
              s uses ___ or _____ for the blank (renderer matches 3+)
  match     → {type:"match", pairs:[{nl,en}]}
  drag_fill → {type:"drag_fill", s:"Text {1} with {2} blanks.",
               blanks:{"1":"answer1","2":"answer2"},
               pool:["answer1","answer2","distractor1","distractor2"],
               hint?}
  tr        → {type:"tr", mk:"mk_key", dir:"produce"|"comprehend"}
              mk must have 2+ variants in en[] (P28)

─── ENGINE RULES ───
  P30: NO HOOKS IN CONDITIONAL RENDERERS. All React hooks (useState,
       useEffect, useMemo, useCallback, useRef) must be at the component
       top level, NEVER inside if(st.type===) blocks. Renderer blocks
       may only contain plain variables, arrow functions, and JSX.
  P31: Never assign CSS gradient strings to the 'color' property.
       Use ARTICLE_COLORS.pillText for text, .bg only for background.
  P32: LINGUISTIC ACCURACY GATE. Every exercise must have exactly ONE
       correct answer from the sentence alone. Near/far demonstratives
       require hier/daar. "Deze/die is de [thing]" is always wrong.
  P33: DRAG-FILL UX. Must support: click-slot-then-tile, pointer-event
       drag-and-drop, and full keyboard nav. dfFocusSlot tracks selected
       slot. Ghost tile follows cursor via ref (no hooks in renderer).
  P34: VOCABULARY GATE. Every Dutch word in exercises, tips, or examples
       must have been taught in a teach card (this lesson or earlier).
       No untaught words in exercises. If new context words are needed,
       add teach cards for them first.
  P35: DOM ESCAPE HATCH. When fixed-position elements (drag ghosts,
       overlays) are inside CSS-transformed containers, create them on
       document.body via DOM API. Use delta-based positioning (measure
       actual render offset via getBoundingClientRect, track cursor
       deltas). Clean up in pointerup/cleanup handler.
  P42: KOREAN FOUNDATION TIPS (D59). "How Korean Works" tip cards must
       be inserted at specified locations in the Korean curriculum per
       the rewrite plan. Each tip has main text (ADHD-friendly bullets)
       and deepDive (nerd detail, collapsible). These are NOT new lessons,
       they slot into existing lessons at the right pedagogical moment.
       No concept may appear in exercises without a prior teach or tip.
  P43: LESSON DENSITY FLOOR (D59). Each language defines its density
       target in LANG_BLUEPRINT. Korean target: 20-25 steps. Dutch
       target: 25-35 steps. Recommended step-type mix per lesson:
       1 intro, 4-6 teach, 1-2 tip (with deepDive), 6-8 MC (varied
       angles), 2-3 FB, 2-3 match. Optional 1 drag_fill (confirmed
       supported). Every quiz tests a concept from a prior teach/tip
       in the SAME lesson or earlier. Pedagogy over count: if a topic
       needs fewer steps, use fewer. Never add filler steps to hit
       the target.

─── CONTENT FORMATTING RULES (D22) ───
  ⚠️ MANDATORY FOR ALL NEW AND EXISTING CONTENT:
  1. NEVER use em-dashes (—). Replace with: period, colon, comma, or \n•
  2. Notes with multiple points: use \n• bullet structure, not prose
  3. Non-ASCII text (Hangul, Arabic, CJK) is auto-highlighted by renderer
     at 22px bold purple. Write content knowing this will happen.
  4. Tips MUST have a title field. No title-less tips.
  5. MC answers: keep concise. No em-dashes, no long clauses.
  6. Descriptions: one clear sentence. If it needs a clause, use a colon.
  7. Phonetic fields: no parenthetical em-dashes. Use commas.
  8. Goals: "Verb + object" format. No em-dash explanations.

═══════════════════════════════════════════════════════════════════════
DUTCH V2 CURRICULUM SPINE — Grammar Progression A1.1 to A2.2
═══════════════════════════════════════════════════════════════════════

This table is the CANONICAL reference for what each unit teaches.
Future AI sessions MUST consult this before writing ANY unit content.

─── COMPLETED ───

  U1 "First Contact" (A1.1) — 10 lessons, 165 steps
     Grammar: zijn (full conjugation), hebben (full conjugation),
              subject pronouns (ik/jij/u/hij/zij/wij/jullie/zij),
              de/het articles, basic word order (SVO)
     Verbs:   zijn, hebben, heten
     Vocab:   greetings, goodbyes, countries, numbers 1-10, formality
     Pattern: Verb forms shown inductively (no rule naming)

  U2 "Who Am I?" (A1.1) — 10 lessons, 159 steps
     Grammar: regular present tense (komen/spreken/wonen, pattern
              visible but NOT NAMED), er zijn (there is/are),
              negation (niet/geen), demonstratives (dit/dat/deze/die
              with hier/daar for near/far), verb discrimination
              (zijn vs hebben in context)
     Verbs:   komen, spreken, wonen
     Vocab:   languages, cities, countries, hier/daar, school/huis,
              man/vrouw/kind, teacher/student
     Pattern: 3 regular verbs side-by-side by L3 tip. Stam+t visible
              but never named. U3L2 will formally name it.

─── STUBS (lesson titles exist, content not yet written) ───

  U3 "Numbers & Time" (A1.1) — 8 lessons
     Grammar: REGULAR PRESENT TENSE (formal naming: "stam+t rule"),
              telling time (heel/half/kwart), frequency adverbs
     Verbs:   new regular verbs for drill (TBD)
     Vocab:   numbers 11-100, clock vocabulary (uur, half, kwart,
              over, voor), days (maandag-zondag), months, seasons,
              altijd/vaak/soms/nooit
     P26 KEY: U3L2 "Regular Present Tense" is the ELABORATE lesson.
              U1-U2 introduce and use stam+t (named, shown). U3L2
              is where full drills and system quizzes begin.
     NOTES:   L1 (numbers) is pure vocabulary. L2 is the aha-moment
              where the pattern from U1-U2 gets its name. L7-L8
              are frequency adverbs and review.

  U4 "Eating & Drinking" (A1.2) — 8 lessons
     Grammar: modal verbs (kunnen/willen/moeten + infinitive),
              modal word order (modal...verb at end), plurals
              (-en/-s rules), diminutives (-je/-tje/-pje/-etje)
     Verbs:   kunnen, willen, moeten, eten, drinken
     Vocab:   food (brood, kaas, ei, vis, vlees, groente, fruit),
              drinks (koffie, thee, water, bier, wijn), diminutives
              (broodje, kopje, taartje), prices, first adjectives
              (lekker, groot, klein, warm, koud), graag/liever/
              het liefst
     P26 KEY: Modal word order shown here but the term "verb-final"
              or "subordinate clause" must NOT be used until U9.
     NOTES:   Diminutives are culturally essential (broodje kroket,
              kopje koffie). Price numbers bridge from U3.

  U5 "My Family & Home" (A1.2) — 8 lessons
     Grammar: possessive pronouns (mijn/jouw/zijn/haar/ons/hun/jullie),
              adjective agreement (de-word: +e, het-word: no -e with
              een, +e with het/demonstrative), separable verbs intro
     Verbs:   first separable verbs (opruimen, aankleden, opstaan)
     Vocab:   family (vader, moeder, broer, zus, oma, opa, kind,
              baby), rooms (keuken, badkamer, slaapkamer, woonkamer,
              tuin), household objects, descriptive adjectives
              (groot, klein, oud, nieuw, mooi, lelijk)
     P26 KEY: Separable verbs introduced here but the formal rule
              ("prefix goes to end of clause") is shown, not named
              as a system. U6 extends with gaan + separable.
     NOTES:   Adjective agreement is the hardest A1 grammar point.
              Needs clear, step-by-step build-up with many drills.

  U6 "Getting Around" (A1.2) — 8 lessons
     Grammar: prepositions (in/op/naar/bij/met/van), gaan (full
              conjugation), word order with modals (Ik wil naar...
              gaan), direction prepositions (links/rechts/rechtdoor/
              naast/tegenover)
     Verbs:   gaan, fietsen, rijden, lopen
     Vocab:   transport (fiets, trein, bus, tram, auto, vliegtuig),
              locations (station, halte, luchthaven, centrum, markt),
              directions, transactional phrases (een kaartje,
              enkele reis, retour, welk perron)
     P26 KEY: "Word order with modals" is shown in practice. The
              formal V2/verb-final terminology waits until U9.
     NOTES:   Culture lesson on Dutch cycling is a reward/break.
              Transactional dialogue uses real NS/GVB vocabulary.

  U7 "My Day" (A2.1) — 8 lessons
     Grammar: reflexive verbs (zich wassen, zich aankleden, zich
              voelen), PERFECT TENSE (hebben/zijn + past participle,
              ge-...-d/ge-...-t, strong verbs), separable verbs in
              perfect tense (opgestaan, aangekleed)
     Verbs:   zich wassen, zich voelen, reflexive versions of known
              verbs, first irregular past participles (gegaan,
              geweest, gehad, gedaan, gezien, gegeten)
     Vocab:   daily routine (ochtend, middag, avond, nacht, ontbijt,
              lunch, avondeten), time markers (eerst, dan, daarna,
              ten slotte)
     P26 KEY: Perfect tense formally introduced HERE. Prior units
              must not use "voltooid deelwoord" or past participle
              terminology. The helper verb choice (zijn vs hebben)
              is the key discrimination skill.
     NOTES:   This is the biggest grammar leap in the course.
              L3-L6 need heavy scaffolding. Mini-dialogue at end
              ties all new grammar into a natural narrative.

  U8 "Health & Feelings" (A2.1) — 8 lessons
     Grammar: imperative (doe! kom! wees!), comparatives (-er),
              superlatives (-st/meest), adjective endings deep dive
              (completing the system from U5), polite requests
              (mag ik/zou ik/kunt u)
     Verbs:   doen, voelen, pijn doen
     Vocab:   body parts (hoofd, oog, oor, neus, mond, hand, voet,
              arm, been, buik, rug), feelings (blij, verdrietig, boos,
              moe, ziek, bang), medical (dokter, apotheek, recept,
              pijn, koorts)
     P26 KEY: Comparatives/superlatives formally named here.
              Prior adjective content (U4 lekker, U5 groot) must
              not preview the -er/-st system.
     NOTES:   Imperative is simple but culturally loaded (Dutch
              directness). Polite forms contrast with imperative.

  U9 "Free Time & Plans" (A2.1) — 8 lessons
     Grammar: future (gaan + infinitive), suggestions (zullen we),
              SUBORDINATE CLAUSES (omdat/dat/als/wanneer/of + verb
              final), verb-final word order formally named
     Verbs:   zullen, houden van, vinden
     Vocab:   hobbies (voetbal, zwemmen, lezen, koken, muziek,
              schilderen, reizen), weather (regen, zon, wind, warm,
              koud, bewolkt), social (uitnodigen, afspreken, afzeggen)
     P26 KEY: SUBORDINATE CLAUSE WORD ORDER formally named HERE.
              This is the second-biggest grammar milestone after
              perfect tense. U4/U6 showed modal word order in
              practice but must not name the V-final rule.
     NOTES:   "omdat ik van voetbal houd" is the prototypical
              example. Culture lesson on gezelligheid as reward.

  U10 "Past & Stories" (A2.2) — 8 lessons
     Grammar: simple past tense (was/had, regular -te/-de, t-kofschip
              rule for past tense, irregular simple past), narrative
              production, reading comprehension, full grammar review
     Verbs:   all irregular simple past forms (was, had, ging, kwam,
              zag, at, dronk, schreef, las, sliep)
     Vocab:   narrative markers (toen, gisteren, vorige week, vroeger,
              opeens, plotseling), story vocabulary
     P26 KEY: t-kofschip formally named HERE for past tense
              (not the same as present tense stam+t from U3).
              Simple past -te vs -de depends on final consonant
              of the stam. This is the final major grammar rule.
     NOTES:   Capstone unit. L5-L6 are reading/writing production.
              L7 is a full grammar drill across all 10 units.
              L8 is a celebration/completion step.

═══════════════════════════════════════════════════════════════════════
P26 CORE CONSTRUCTS MAP — Introduce / Use / Elaborate Per Language
═══════════════════════════════════════════════════════════════════════

  DUTCH:
  ┌───────────────────────────┬──────────────┬──────────────┐
  │ Core Construct            │ Introduced   │ Elaborated   │
  ├───────────────────────────┼──────────────┼──────────────┤
  │ de/het articles           │ U1 L1        │ U5 L3        │
  │ SVO word order            │ U1 L2        │ U9 (V2 rule) │
  │ stam+t conjugation        │ U1 L4        │ U3 L2        │
  │ Verb inversion (questions)│ U1 L6        │ U9 L4        │
  │ geen vs niet negation     │ U2 L3        │ U4 L5        │
  │ Perfect tense (ge-...-d/t)│ U7 (brief)   │ U7 L3        │
  │ t-kofschip                │ U7 (mention) │ U10 L2       │
  └───────────────────────────┴──────────────┴──────────────┘

  KOREAN:
  ┌───────────────────────────┬──────────────┬──────────────┐
  │ Core Construct            │ Introduced   │ Elaborated   │
  ├───────────────────────────┼──────────────┼──────────────┤
  │ SOV word order            │ U1 L1        │ U3           │
  │ Particles (은/는,이/가,을/를)│ U1 L1       │ U2-U4        │
  │ Speech levels (해요/합니다/반말)│ U1 L1     │ U4           │
  │ -요 polite marker         │ U1 L1        │ U2           │
  │ Verb stems + -다          │ U1 L2        │ U2 L2        │
  │ Vowel harmony             │ U1 L3        │ U3 L4        │
  └───────────────────────────┴──────────────┴──────────────┘

  HOW TO USE: Before writing Unit 1, check the Core Constructs List.
  ALL constructs must appear (named, briefly explained) in the
  Introduce column. Quiz vocabulary/phrases only — NOT the system.
  The Elaborate column is where full drills and system tests begin.
  Between Introduce and Elaborate: USE the constructs in every
  sentence, with brief callbacks, but do not test system mechanics.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
*/

/*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DUTCH V2 CURRICULUM ROADMAP — A1.1 → A2.2
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

WHY THIS ROADMAP EXISTS:

  This is the master plan for the Dutch course — 10 units,
  ~80 lessons, A1.1 through A2.2. Every AI session that writes
  content for LingoVerse must read this before coding a single
  step. This roadmap encodes:

  1) The PEDAGOGICAL SEQUENCE — what grammar and vocab comes
     when, and WHY in that order.
  2) The CULTURAL SPINE — each unit is anchored to a real Dutch
     life experience. We don't teach grammar in a vacuum; we
     teach it because the learner NEEDS it for that situation.
  3) The POLYGLOT REASONING — the human behind LingoVerse speaks
     English, Dutch, German, Romanian, Spanish, French, Korean,
     and Chinese. That means every pedagogical decision is
     filtered through: "How would I explain this to an adult
     who already knows how languages work?"

HOW THE SEQUENCE WAS DECIDED:

  The curriculum follows the "Survival Spiral" principle:
  each unit gives the learner a new real-life capability.

  Unit 1: You can GREET and IDENTIFY (exist in Dutch)
  Unit 2: You can INTRODUCE yourself (have an identity)
  Unit 3: You can SCHEDULE and COUNT (navigate time/numbers)
  Unit 4: You can EAT AND ORDER (survive daily life)
  Unit 5: You can TALK ABOUT PEOPLE (your world)
  Unit 6: You can GET AROUND (navigate space)
  Unit 7: You can DESCRIBE YOUR DAY (narrate present)
  Unit 8: You can EXPRESS FEELINGS (inner life)
  Unit 9: You can MAKE PLANS (narrate future)
  Unit 10: You can TELL STORIES (narrate past)

  This mirrors what polyglots know intuitively: you learn a
  language in the order you NEED it, not in the order a
  textbook organizes grammar categories.

GRAMMAR PROGRESSION — DETAILED:

  Why possessives moved to Unit 4 (from Unit 5):
    You literally cannot order food without them. "Mijn koffie,"
    "jouw broodje," "zijn rekening." In real Dutch cafe
    conversation, possessives appear in the first 30 seconds.
    Delaying them to Unit 5 would mean 3 units of being unable
    to say "my" — unacceptable for adult learners.

  Why reflexive verbs moved to Unit 5 (from Unit 7):
    Morning routines are family life. "Ik was me," "ik kleed me
    aan," "ik voel me goed" — you can't describe a morning
    without them. Dutch uses reflexives MORE than English
    (voelen → zich voelen). Adult learners from German/French/
    Spanish/Romanian already know reflexive verbs conceptually,
    so the cognitive load is low. Delaying them to Unit 7 would
    create an artificial gap where learners can't describe
    daily routines despite knowing present tense.

  Why modals are split across Unit 4 (not crammed into one):
    Dutch has 4 core modals: willen, kunnen, mogen, moeten.
    Plus hoeven (negative obligation). Teaching all 5 at once
    is a classic textbook mistake. We split them by NEED:
    - L2: willen (ordering — you WANT things)
    - L3: kunnen + mogen (ability vs permission — real contrast)
    - L4: moeten + hoeven (obligation — real contrast)
    Each pair has a natural contrastive relationship that makes
    them easier to learn together than separately.

  Why 't kofschip lands in Unit 7 (not Unit 4):
    Students encounter 't kofschip when forming past participles
    (ge-...-t vs ge-...-d). You need it for the perfect tense,
    which requires several prerequisites: present tense mastery
    (Unit 3), modal verbs (Unit 4), separable verbs (Unit 5/6).
    Introducing it earlier would be teaching a rule for a tense
    they haven't encountered yet.

  Why subordinate clauses are Unit 9 (not earlier):
    Dutch subordinate clauses send the verb to the END:
    "Ik ga niet, omdat ik moet werken." This is the hardest
    word-order rule in Dutch and the #1 error even at B1.
    By Unit 9, learners have internalized V2 word order (6 units
    of practice) and are ready to learn the exception. Doing it
    earlier would create confusion about where verbs go.

══════════════════════════════════════════════════════════════
UNIT-BY-UNIT SCOPE — APPROVED CURRICULUM
══════════════════════════════════════════════════════════════

UNIT 1: FIRST CONTACT (A1.1) — ✅ COMPLETE (10/10 lessons)
  Grammar: zijn, hebben, de/het/een, niet/geen, W-vragen
  Cultural: first greetings, Dutch directness in saying hello

UNIT 2: WHO AM I? (A1.1) — ✅ COMPLETE (10/10 lessons)
  Grammar: komen/spreken/wonen, er is/zijn, dit/dat/deze/die
  Cultural: nationalities, "Waar kom je vandaan?"

UNIT 3: NUMBERS & TIME (A1.1) — 🔶 6/8 COMPLETE
  Grammar: regular present tense (-t rule), numbers, time
  Cultural: Dutch time-telling (half drie = 2:30, NOT 3:30!)
  TODO: L7 (Altijd/Soms/Nooit), L8 (Review)

UNIT 4: ETEN & DRINKEN (A1.2) — ❌ 0/8 — NEXT TO BUILD
  Grammar: modal verbs (willen → kunnen/mogen → moeten/hoeven),
           possessives (mijn/jouw), plurals (-en/-s),
           diminutives (-je system)
  Cultural: boterham lunch, terrasje, borrel, Albert Cuyp markt
  Lessons:
    L1: "De Boterham" — Dutch lunch culture, food nouns + articles
        WHY FIRST: cultural shock entry, high-frequency nouns
    L2: "Ik wil graag..." — willen conjugation, ordering at cafe
        WHY HERE: most useful survival sentence in Dutch
    L3: "Kunnen & Mogen" — ability vs permission contrast
        WHY PAIRED: learners confuse can/may, Dutch makes it explicit
    L4: "Moeten & Hoeven" — obligation + negative obligation
        WHY PAIRED: moeten/hoeven is the must/needn't contrast
    L5: "Mijn Koffie, Jouw Broodje" — possessives (mijn/jouw/zijn/haar)
        WHY HERE: you can't order food socially without "my/your"
    L6: "Twee Broodjes, Drie Biertjes" — plurals + diminutives
        WHY COMBINED: food is where you encounter both constantly,
        diminutives signal warmth (biertje > bier)
    L7: "Op de Markt" — numbers for prices, shopping vocabulary
        WHY HERE: bridges Unit 3 numbers into real transactions
    L8: "Borrel! — Unit 4 Review" — vrijdagmiddagborrel scenario
        WHY THIS FRAME: borrel IS Dutch social culture, uses all U4

UNIT 5: MIJN FAMILIE & THUIS (A1.2) — ❌ 0/8
  Grammar: possessives full paradigm (ons/jullie/hun),
           reflexive verbs (zich wassen, zich voelen, zich aankleden),
           adjective agreement (-e rule full system)
  Cultural: verjaardagskalender, Dutch birthday circle ritual,
           "Gefeliciteerd met je moeder!", rijtjeshuizen,
           steep stairs, big windows no curtains, "doe maar normaal"
  Lessons:
    L1: "Mijn Familie" — family vocabulary, possessives expanded
    L2: "Ons Huis" — rooms/objects, ons/jullie/hun possessives
    L3: "Elke Ochtend" — reflexive verbs in morning routines
        WHY HERE: "ik was me, ik kleed me aan" = daily life
    L4: "De Grote Rode Fiets" — adjective agreement (-e rule)
        WHY HERE: describing things around the house is natural
    L5: "Schoonmaken & Opruimen" — separable verbs at home
        WHY HERE: housework verbs are ALL separable in Dutch
    L6: "Gefeliciteerd!" — Dutch birthday culture
        WHY HERE: the birthday circle is THE cultural experience
    L7: "Buren & Bezoek" — mini-dialogue, neighbors visiting
    L8: "Unit 5 Review" — family gathering scenario

UNIT 6: ONDERWEG (A1.2) — ❌ 0/8
  Grammar: prepositions (in/op/aan/bij/naar/uit/met/voor),
           more separable verbs (instappen/uitstappen/overstappen),
           "er" as locative placeholder
  Cultural: the fiets as identity, OV-chipkaart, NS trains
           (and complaining about them), cycling infrastructure,
           "even" (just quickly — "ik ga even naar de winkel")
  Lessons:
    L1: "De Fiets" — cycling vocab, basic prepositions
    L2: "Links, Rechts, Rechtdoor" — directions, naar/van
    L3: "Met de Trein" — transport, separable verbs (in/uit/overstappen)
    L4: "Waar is het Station?" — asking directions, "er" introduction
    L5: "Op, In, Aan, Bij" — preposition deep dive with location
    L6: "Even naar de Winkel" — quick errands, "even" culture
    L7: "Verdwaald!" — mini-dialogue: being lost, asking for help
    L8: "Unit 6 Review" — journey scenario across Amsterdam

UNIT 7: MIJN DAG (A2.1) — ❌ 0/8
  Grammar: perfect tense (hebben/zijn + voltooid deelwoord),
           't kofschip rule for -t/-d past participles,
           time expressions (vanochtend, gisteren, net)
  Cultural: Dutch daily rhythm, part-time work culture,
           avondeten at 6pm sharp, "dropping" (the candy),
           the agenda obsession, "Hoe was je weekend?"
  Lessons:
    L1: "Wat Heb Je Gedaan?" — perfect tense with hebben
    L2: "'t Kofschip" — the rule for -t vs -d endings
    L3: "Ik Ben Gegaan" — perfect tense with zijn (movement/change)
    L4: "Onregelmatige Deelwoorden" — irregular past participles
    L5: "Gisteren, Vandaag, Morgen" — time expressions + practice
    L6: "Hoe Was Je Weekend?" — conversational past tense
    L7: "Een Typische Nederlandse Dag" — reading comprehension
    L8: "Unit 7 Review" — narrate your yesterday

UNIT 8: GEZONDHEID & GEVOEL (A2.1) — ❌ 0/8
  Grammar: imperative, comparatives/superlatives (groot/groter/
           grootst, goed/beter/best), "er" with comparisons
  Cultural: the huisarts as gatekeeper ("neem maar een
           paracetamolletje"), Dutch directness about health,
           "Hoe gaat het? — Goed!" (always goed, even when not),
           the apotheek system
  Lessons:
    L1: "Mijn Hoofd, Mijn Buik" — body vocabulary
    L2: "Ik Voel Me..." — feelings/emotions, reflexive review
    L3: "Bij de Huisarts" — doctor visit dialogue, imperative
    L4: "Doe Dit, Doe Dat" — imperative forms and usage
    L5: "Groter, Beter, Mooier" — comparative adjectives
    L6: "De Beste, De Grootste" — superlatives
    L7: "Hoe Gaat Het Echt?" — emotional honesty dialogue
    L8: "Unit 8 Review" — health scenario

UNIT 9: VRIJE TIJD & PLANNEN (A2.1) — ❌ 0/8
  Grammar: future tense (gaan + infinitief, zullen),
           subordinate clauses (omdat, dat, als, wanneer →
           verb to end), om...te construction
  Cultural: Koningsdag, schaatsen, voetbal, the Dutch love
           of "planning" everything, festivals, "gezellig"
           in full force, the concept of "uitwaaien"
  Lessons:
    L1: "Wat Doe Je Graag?" — hobbies vocabulary
    L2: "Ik Ga Zwemmen" — future with gaan + infinitief
    L3: "Zal Ik...?" — zullen for suggestions/polite future
    L4: "Omdat Het Leuk Is" — subordinate clauses with omdat/dat
    L5: "Als Het Mooi Weer Is..." — conditional with als/wanneer
    L6: "Om Te..." — purpose clauses (om...te + infinitief)
    L7: "Koningsdag!" — cultural festival scenario
    L8: "Unit 9 Review" — planning a weekend together

UNIT 10: VROEGER & VERHALEN (A2.2) — ❌ 0/8
  Grammar: simple past / imperfectum (regular: -te/-de via
           't kofschip; irregular: common strong verbs),
           perfect vs imperfectum usage difference,
           relative clauses (die/dat)
  Cultural: a short Dutch story to read, "vroeger" nostalgia,
           Dutch Golden Age in 3 sentences, writing about
           your own week, course completion celebration
  Lessons:
    L1: "Vroeger..." — imperfectum of zijn/hebben (was/had)
    L2: "Ik Werkte, Ik Fietste" — regular imperfectum (-te/-de)
    L3: "Ik Ging, Ik Kwam" — irregular imperfectum (strong verbs)
    L4: "Heb Gedaan vs Deed" — perfect vs imperfectum usage
    L5: "De Man Die..." — relative clauses with die/dat
    L6: "Een Kort Verhaal" — reading: short Dutch story
    L7: "Mijn Week" — writing exercise: narrate your week
    L8: "🎉 A1–A2 Klaar!" — celebration, course completion

══════════════════════════════════════════════════════════════
CONTENT PIPELINE RULES FOR ALL DUTCH LESSONS
══════════════════════════════════════════════════════════════

When filling lesson steps, every AI session MUST:

  P1) READ THE MANIFESTO (Principles 1-20) before writing.
  P2) READ THIS ROADMAP for grammar/cultural scope of the unit.
  P3) TEACH BEFORE TESTING — every lesson starts with teach/tip
      cards BEFORE any exercise steps.
  P4) ANTI-LEAK — every MC question must pass the anti-leak
      audit (Manifesto Principle 8). Different representations
      for question vs answer.
  P5) TRANSLATION-FIRST — every Dutch sentence in tips, intros,
      deepDives gets "= English" translation (Decision 18).
  P6) POLYSEMY & COGNATES — every teach card checks: does this
      word mean anything else? Does the learner know a cousin?
      (Manifesto Principle 19).
  P7) BOARD STYLE — all v2 lessons use board:true. Teach cards
      follow the clean board aesthetic (Decision 17).
  P8) CULTURAL ANCHORING — every lesson must have at least one
      cultural note or real-life scenario. Grammar in a vacuum
      is forbidden.
  P9) STEP DENSITY — match Units 1-2 density: ~25-35 steps per
      lesson. More if the subject needs more explanation. NEVER
      sacrifice pedagogy for step count.
  P10) INTRO STEP  -  every lesson starts with type:"intro" that
       sets the scene and lists learning goals.
  P11) VERB TABLES  -  conjugation data uses type:"verb_table",
       never plain text in tips (Decision 17f).
  P12) MK KEYS — vocabulary items reference MK keys where they
       exist. New vocab gets new MK entries.
  P13) CTRL+S — all step types must be skippable via Ctrl+S
       dev shortcut. If adding a new step type, it MUST support
       Ctrl+S (Manifesto Principle 20d).
  P14) SUBJECT OVER COUNT — if a lesson's subject genuinely
       needs 40 steps to teach properly, use 40 steps. If it
       only needs 20, use 20. The pedagogical needs of the
       subject ALWAYS override step-count targets.
  P15) NO TWO-CORRECT MC — Every MC must have exactly ONE
       defensible correct answer. Before finalizing, check:
       could a grammar-aware student argue for another option?
       If yes, replace that option. Fronted adverbs, alternative
       word orders, and valid colloquial forms must NEVER appear
       as "wrong" answers.
  P16) FORWARD REFERENCE BAN — No exercise may test vocabulary
       or grammar from a LATER step in the same lesson or a
       later lesson. Every answer in every exercise must use
       ONLY material from teach/tip cards that appeared BEFORE
       that exercise in the step sequence, or from prior lessons.
  P17a) READING COMPREHENSION PROTECTION — In DEDICATED reading/
       story exercises (where comprehension testing is the explicit
       goal), translations should be hidden behind toggleable
       reveals, comprehension questions asked first, or post-story
       vocabulary cards provided. The student must TRY to read
       before seeing the English.
       NOTE: P17a is an EXCEPTION to P18 (Translation-First).
       P18 is the default for all content. P17a applies ONLY to
       exercise steps explicitly designed as reading comprehension.
       All other tips, deepDives, teach cards, and examples: P18
       (always translate) takes precedence.
  P18) CROSS-REFERENCE ANCHORING — When revisiting a concept
       taught in a prior lesson, ALWAYS reference where it was
       taught: "Like we learned in L3..." or "Remember from
       Unit 4...". Never re-introduce as if new. This creates
       an authentic, connected learning experience.
  P19) CONTRADICTION PREVENTION — Before writing "English
       doesn't have X", verify. If English HAS the equivalent
       (e.g., "may" for "mogen"), acknowledge it and explain
       the USAGE difference. Never claim a distinction doesn't
       exist in English when it does. Frame as: "English is
       losing this distinction" or "English CAN but rarely
       DOES distinguish."
  P20) GOAL-CONTENT ALIGNMENT — Intro goals must match EXACT
       content delivered. If you teach 6 adverbs, say 6. If
       you teach 5 possessives, say 5. Count before writing
       the intro. Audit after writing the lesson.
  P21) TEACH-BEFORE-TEST — No word may appear as an exercise
       answer until it has a teach card BEFORE that exercise
       in the step sequence. If "woonde" is an answer, there
       must be a teach card for "woonde" earlier in the lesson.
  P22) ETYMOLOGY RICHNESS — Every teach card must explore the
       word's full life: all meanings (polysemy), the root
       word it derives from, related forms, and cultural
       context. "Kopje" isn't just "small cup" — it's kop
       (head) + -je, also means "small head" and "heading."
       This depth is what separates LingoVerse from AI slop.
       If a cognate is marked "archaic", explain what that
       means and why the word disappeared in English but
       survived in Dutch.
  P23) ANTI-LEAK: ARTICLE HIDING — MC questions about gender
       (de/het) must NEVER include the article in the answer
       options. Options must show the BARE NOUN only. The
       student must KNOW the article, not read it off the
       option. E.g., "Which is a het-word?" → options: "kaas",
       "brood", "melk", "koffie" — NOT "het brood".
  P24) COGNATE ACCURACY — Latin/international-origin words get
       family:"international", not family:"germanic". Check
       etymology before tagging. Germanic = shared Proto-
       Germanic root. International = Latin/Greek/Arabic/etc.

══════════════════════════════════════════════════════════════
DECISION LOG — SESSION 34 (POST-AUDIT FIXES)
══════════════════════════════════════════════════════════════

  D-34a) leven/reizen v/z trap: The imperfectum follows the SAME
         v/z rule as participles. Check the INFINITIVE consonant,
         not the stam surface form. leven → leefDE (v→-de),
         reizen → reisDE (z→-de). Fixed in U10 L2.
  D-34b) MC anti-leak for articles: Answer options must show
         bare nouns without articles when testing de/het knowledge.
         Rule P23 added. Fixed in U4 L1.
  D-34c) "Altijd werk ik" is valid Dutch: MC questions must not
         include grammatically valid alternatives as wrong answers.
         Rule P15 added. Fixed in U3 L8.
  D-34d) Forward reference "woonde" in U10 L1: Exercise used
         vocabulary from L2. Rule P16/P21 added. Fixed.
  D-34e) Story translations shown inline: Kills reading
         comprehension. Rule P17a added. Fixed in U10 L6.
  D-34f) "want" used without teaching: Added teach card in U10 L6.
  D-34g) Kunnen/Mogen intro: English DOES have "may." Rewritten
         to acknowledge the distinction exists but is collapsing
         in modern English. Rule P19 added.
  D-34h) Goal-content count mismatches: U3 L7 said 5, taught 6.
         U4 L5 said 6, taught 5. Rule P20 added. Both fixed.
  D-34i) U10 L8 missing tr exercises: Added 3. Every review
         lesson must have translation exercises.
  D-34j) "wou" is valid spoken Dutch: Replaced as distractor.
  D-34k) "kopje" etymology enriched: kop = head, kopje = small
         head + small cup + text heading. Rule P22 standard.
  D-34l) "jij wil" colloquial emphasis: Updated to reflect that
         spoken Dutch overwhelmingly uses "jij wil" over "jij wilt".

══════════════════════════════════════════════════════════════
BUILD STATUS TRACKER
══════════════════════════════════════════════════════════════

  Unit 1: ✅ COMPLETE (10/10) — shipped
  Unit 2: ✅ COMPLETE (10/10) — shipped
  Unit 3: ✅ COMPLETE (8/8) — shipped
  Unit 4: ✅ COMPLETE (8/8) — shipped
  Unit 5: ✅ COMPLETE (8/8) — shipped
  Unit 6: ✅ COMPLETE (8/8) — shipped
  Unit 7: ✅ COMPLETE (8/8) — shipped
  Unit 8: ✅ COMPLETE (8/8) — shipped
  Unit 9: ✅ COMPLETE (8/8) — shipped
  Unit 10: ✅ COMPLETE (8/8) — shipped

  Foundations Knowledge: ✅ COMPLETE
  Foundations Playthrough: ✅ COMPLETE (22 lessons)
  Foundations Gate Quiz: ✅ COMPLETE

  Last updated: ALL 80 LESSONS COMPLETE — A1.1 → A2.2 curriculum shipped

  B1 CURRICULUM STATUS:
  Unit 11: ✅ COMPLETE (8/8) — Op het Werk (B1.1)
  Unit 12: ✅ COMPLETE (8/8) — Geld & Zaken (B1.1)
  Unit 13: ✅ COMPLETE (8/8) — Wat Vind Jij? (B1.1)
  Unit 14: ✅ COMPLETE (8/8) — Het Kleine Woordje 'Er' (B1.1)
  Unit 15: ✅ COMPLETE (8/8) — Opleiding & Toekomst (B1.1)
  Unit 16: ✅ COMPLETE (8/8) — Het Wordt Gedaan (B1.2)
  Unit 17: ✅ COMPLETE (8/8) — Een Nieuw Huis (B1.2)
  Unit 18: ✅ COMPLETE (8/8) — Hij Zei Dat... (B1.2)
  Unit 19: ✅ COMPLETE (8/8) — Nederland & De Wereld (B1.2)
  Unit 20: ✅ COMPLETE (8/8) — B1 Klaar! (B1.2)

DECISION LOG — SESSION 35 (CANDY GLOSS UI OVERHAUL + CEFR GAP PATCHING)
══════════════════════════════════════════════════════════════

  CEFR A1-A2 AUDIT: 37/37 structures now explicitly taught.
    Gap 1: "Hoe oud ben je?" added to U2 L5
    Gap 2: "maar" (but) added to U1 L8
    Gap 3: "dus" (so/therefore) added to U9 L4
    Gap 4: "hoe lang" (how long) added to U7 L5

  PREFERRED STYLE — iOS 2011 CANDY GLOSS:
    Every interactive element gets the candy treatment:
    - 5-stop gradient (top highlight → base → dark base)
    - Curved shine overlay: absolute div, 38-42% height,
      border-radius "0 0 50% 50%", rgba(255,255,255,0.45→0.06)
    - Inset highlights: top rgba(255,255,255,0.35-0.45),
      bottom rgba(0,0,0,0.12-0.15)
    - Hover: scale(1.05-1.08) + brightness(1.1-1.15)
    - Dark mode: triple-layer ambient glow (cigarette machine backlit)
    - fontWeight:800, letterSpacing:0.3

  D-35a) NavArrow: GLOBAL COMPONENT (not inside LessonEngine).
         Moved outside to prevent re-creation on each render.
         Used everywhere: lesson nav, chapter back, unit back,
         foundations back, stage back. All "← Text" buttons
         replaced with glossy arrow-only square buttons.

  D-35b) ScoreCircle: GLOBAL COMPONENT (not inside LessonEngine).
         Root cause of triple-animation: defined inside LessonEngine
         = new component type on each render = unmount+remount.
         Now defined once globally. Duration: 700ms. Cubic ease-out.
         Upgraded: strokeWidth 5→8, added glow ring (14px wide,
         blurred), highlight ring, text glow. On-brand.

  D-35c) Done screen buttons: Full candy treatment with doneFocus
         visual glow. Keyboard nav uses capture phase + stopPropagation.
         Arrow order matches visual layout: [1,2,0] = Overview→
         TryAgain→Continue. Focused button: scale(1.08), glow outline.

  D-35d) Tick sound restored on quiz clicks: UISounds.tick() added
         to MC, FB, and foundations quiz option onClick handlers.
         Was lost during a refactor.

  D-35e) .chat-input CSS redesigned: white bg, 2.5px border,
         16px corners, purple focus ring, dark mode purple tint.
         All 3 usages styled: translation, chat, vocab search.

  D-35f) Translation exercise: source sentence and input area each
         wrapped in separate cards with shine overlays. Check button
         is full candy with hover scale. Label headers added.

  D-35g) Global hover glow boost:
         .btn:hover — added purple ambient glow + brightness filter
         .card:hover — added purple glow layers + brightness(1.08)
         .quiz-opt:hover — doubled glow radius, added brightness
         All modes (light + dark) boosted.

  D-35h) Lesson list glossification:
         Unit header: shine overlay, icon with candy gradient + inset
         Lesson rows: shine overlay, number badges = candy gradient
         (purple for pending, teal for done), Start/Redo buttons
         have shine overlay spans (matches Begin button factory).

  PIPELINE RULE ADDITIONS:
    P24: Every interactive element must have the candy gloss treatment
         (gradient, shine overlay, inset shadows, hover glow).
    P25: All back navigation uses NavArrow component (no text labels).
    P26: Components that animate must live OUTSIDE their parent to
         avoid remount-on-rerender bugs.
    P27: Quiz option clicks must play UISounds.tick() before
         checkAndNext(). Keyboard already does via le-select.

  D-36) GLOSSY CANDY UI OVERHAUL (Session 43+):
    a) CEFR Cards: 2x2 grid, 80px glossy badge, saturated purple gradient
       backgrounds (#EAE2FF→#C8BCFF light, deep purple dark), glass
       highlight overlay, progress bar inside card. No per-band colors —
       all unified system purple.
    b) All headers (Nederlands, Band, Unit, Foundations) use identical
       full-purple gradient: #C0AEF8→#7B5EE8→#4A2BA6. White text,
       white progress bars, frosted glass icon badges, white chevrons.
       All clickable → GlossyPopup with info/stats.
    c) GlossyPopup component: centered modal, candy-gloss bg, glass
       highlight, animated popIn, close via Esc/Backspace/backdrop-click,
       glossy X button. Used by: stats, band info, unit info, foundations.
    d) Lesson cards: 2×2 grid matching unit cards. L1/L2/L3 badge
       (56px), title underneath. Whole card is button.
    e) Foundations page: purple gradient header with info popup,
       Reference/PlayThrough/GateQuiz cards get glossy treatment
       with glass highlights + hover effects.
    f) Dark mode: all card opacities bumped to 0.94-0.98.
       Much more solid/opaque/glossy.
    g) kb-focus CSS: purple glow selection (outline: 3px solid
       rgba(123,94,232,0.5), scale(1.03), brightness(1.1),
       box-shadow glow). Matches done-screen button energy.
       All clickable elements get role="button" for useFocusNav.
    h) Header style toggle (A/B) preserved inside UnitMap.
    i) Color depth ladder: CEFR (darkest) → Units → Lessons (same).
       All use saturated gradients, not washed pastels.
    j) Tick sounds: UISounds.tick() on card nav, UISounds.click()
       on popup triggers and confirmations.

  D-37) B1 CURRICULUM: Units 12-20 complete (80 total B1 lessons).
        Verified no duplicates. All units have board:true.

  PIPELINE RULE ADDITIONS:
    P28: All clickable tiles must have role="button" for keyboard nav.
    P29: All section headers (band, unit, foundations) are clickable
         and open GlossyPopup with relevant info.
    P30: Icon system change planned — emoji icons will be replaced
         with custom glossy 3D cartoon PNGs (base64-embedded).
         60 icons identified across 4 tiers. ChatGPT generates art,
         Claude implements as base64 icon registry.

  STYLE PREFERENCES (User-directed):
    S1: Ghost-pale light mode backgrounds (#F8F5FF→#EDE8FF) with
        saturated purple candy badges. Dark mode stays deep/opaque.
    S2: On hover: background warms to #EDE8FF→#C8BCFF (CSS :hover).
        Purple glow ring outline on both hover and kb-focus.
    S3: Mouse clears keyboard selection immediately. No lingering.
        Arrow keys and mouse don't co-select. Clean handoff.
    S4: All headers use full purple gradient with white text.
        Clickable → GlossyPopup with info.
    S5: 2×2 grid for all card views (CEFR, units, lessons, stages).
    S6: Font change planned: Quicksand (headings) + Nunito (body).
        Rounded, warm, inviting, soft.
    S7: No emoji icons in UI chrome. Custom art only. Emoji OK in
        lesson content (teach cards, tips, cultural notes).
    S8: Custom icons use warm golden glow + subtle dark edge outline:
        drop-shadow(0 0 2px rgba(247,183,51,0.3))
        drop-shadow(0 1px 2px rgba(200,160,40,0.15))
        drop-shadow(0 0 0.5px rgba(60,40,20,0.25))
    S9: Icon sizes: nav=28px, stats=20px, hero=72px, profile=36px,
        hints=20px, headers=22px, home tiles=44px.
    S10: Home tiles (.home-tile) and ghost tiles (.ghost-tile) share
         hover glow CSS. No [role=button]:hover generic rule.
    S11: Mouse clears kb selection immediately. No estafette. No linger.
    S12: Profile page: purple gradient header, ghost-tile stat cards,
         achievements + manifesto as GlossyPopup, no flagged reports.
    S13: Flashcards renamed to Personal Curriculum (brain icon).
         Shows "Coming Soon" page when entered.

  D-39) ICON SYSTEM IMPLEMENTATION (Session 44b):
    a) ICON_REG: 63 base64 PNG icons at 128×128px, embedded as
       data URIs. Total ~2.2MB. Generated from ChatGPT DALL-E artwork.
    b) AppIcon component: renders <img> with golden glow + dark edge.
       Size prop controls display size. Used 47 times across UI.
    c) All UI chrome emoji replaced: trophy, star, avatar, lightbulb,
       key, brain, robot, building_blocks, construction, trash_bin,
       padlock, crown, globe, lightning_bolt, flame, books_stack,
       checkmark_green, abc_blocks, clipboard, chat_bubbles, hand_wave.
    d) Home screen tiles: 6 categories with 44px custom icons.
       Learn Path→books_stack, Vocabulary→abc_blocks, Grammar→clipboard,
       Idioms→chat_bubbles, Curriculum→brain (new), Quiz→checkmark_green.
    e) Profile page redesigned: purple gradient header, AppIcon avatar,
       ghost-tile stat cards, GlossyPopup for achievements/manifesto.
    f) Background removal: gentle threshold (>248), preserving original
       artwork quality. Golden glow masks any remaining white fringe.
    g) Nav bar icons: house, abc_blocks, checkmark_green, robot,
       books_stack, avatar — all at 28px.
    h) Done screen: trophy(72px)/star(72px)/hand_wave(72px) replacing
       emoji. Quiz results same icons.

  D-40) HOVER/SELECTION SYSTEM FINAL (Session 44b):
    a) .ghost-tile:hover and .home-tile:hover share identical CSS glow.
    b) No [role=button]:hover rule — avoids fighting with purple headers.
    c) Mouse movement clears kb-focus immediately (no estafette).
    d) Done screen: doneFocus starts at -1, arrows activate, mouse clears.

  PIPELINE RULE ADDITIONS:
    P31: Arrow Right/Left must advance teach steps in lesson engine.
         Only blocked during active quiz answering.
    P32: .kb-focus CSS must use !important on transform, filter,
         and box-shadow to override inline hover handlers.
    P33: All AppIcon instances must use ICON_REG lookup. Unknown
         names return null gracefully.
    P34: Home tiles need .home-tile class for hover glow.
    P35: Curriculum page is placeholder ("Coming Soon") until
         AI-powered personal path system is built.

══════════════════════════════════════════════════════════════

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
*/


/* ═══════════════════════════════════════════════════════════════════════
   T E X T - T O - S P E E C H   U T I L I T Y
   ═══════════════════════════════════════════════════════════════════════ */

/**
 * Get the preferred voice for a given language
 * @param {string} lang - Language code (e.g., "nl-NL", "en-US")
 * @returns {SpeechSynthesisVoice|null} Best available voice or null
 */
function getPreferredVoice(lang) {
  const voices = speechSynthesis.getVoices();
  
  if (lang === "nl-NL") {
    // First: Try to find a voice with nl-NL AND Dutch/Nederlands in name
    const dutchVoice = voices.find(v =>
      v.lang === "nl-NL" &&
      (v.name.toLowerCase().includes("dutch") ||
       v.name.toLowerCase().includes("nederlands") ||
       v.name.toLowerCase().includes("nl-"))
    );
    if (dutchVoice) return dutchVoice;
    
    // Second: Any nl-NL voice
    const nlVoice = voices.find(v => v.lang === "nl-NL");
    if (nlVoice) return nlVoice;
    
    // Third: nl-BE (Belgian Dutch) as fallback
    const belgianVoice = voices.find(v => v.lang === "nl-BE");
    if (belgianVoice) return belgianVoice;
    
    return null;
  }
  
  if (lang === "en-US") {
    // Find en-US voice
    return voices.find(v => v.lang === "en-US") || 
           voices.find(v => v.lang.startsWith("en")) || 
           null;
  }
  
  // Generic fallback for other languages
  return voices.find(v => v.lang === lang) || 
         voices.find(v => v.lang.startsWith(lang.split('-')[0])) || 
         null;
}

/**
 * Play text using browser Web Speech API with best available voice
 * @param {string} text - Text to speak
 * @param {string} lang - Language code (e.g., "nl-NL", "en-US")
 * @param {Function} onNoVoice - Optional callback when no native voice found
 * Usage: playAudio("Hallo!", "nl-NL", () => showToast("Install Dutch voice"))
 */
function playAudio(text, lang = "nl-NL", onNoVoice = null) {
  if (!text) return;
  
  // Check if browser supports speech synthesis
  if (!window.speechSynthesis) {
    console.warn("Text-to-speech not supported in this browser");
    return;
  }

  // Function to actually speak
  const speak = () => {
    try {
      // Cancel any ongoing speech
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = lang;
      utterance.rate = 0.9; // Slightly slower for language learning
      utterance.pitch = 1.0;
      
      // Get preferred voice for this language
      const preferredVoice = getPreferredVoice(lang);
      
      if (preferredVoice) {
        utterance.voice = preferredVoice;
        console.log(`Using voice: ${preferredVoice.name} (${preferredVoice.lang})`);
      } else {
        console.warn(`No native voice found for ${lang}`);
        // Call warning callback if provided
        if (onNoVoice) {
          onNoVoice();
        }
      }
      
      // Error handling
      utterance.onerror = (event) => {
        console.warn("Speech synthesis error:", event.error);
      };

      window.speechSynthesis.speak(utterance);
    } catch (error) {
      console.warn("Failed to play audio:", error);
    }
  };

  // Ensure voices are loaded (some browsers load them asynchronously)
  const voices = speechSynthesis.getVoices();
  if (voices.length > 0) {
    speak();
  } else {
    // Wait for voices to load
    speechSynthesis.addEventListener('voiceschanged', speak, { once: true });
  }
}

/**
 * Speaker icon button for TTS playback
 * @param {string} text - Text to speak
 * @param {string} lang - Language code
 * @param {number} size - Icon size (default: 16)
 * @param {Function} showToast - Optional toast notification function
 */
function SpeakerButton({ text, lang = "nl-NL", size = 16, showToast = null }) {
  const [hasWarned, setHasWarned] = useState(false);
  // Gated behind AUDIO_ENABLED (Manifesto Principle 10)
  if (!AUDIO_ENABLED) return null;
  
  const handleClick = (e) => {
    e.stopPropagation();
    
    // Warning callback for missing voice
    const onNoVoice = () => {
      if (!hasWarned && showToast) {
        showToast("Install Dutch voice for better audio", "🔊");
        setHasWarned(true);
      }
    };
    
    playAudio(text, lang, onNoVoice);
  };
  
  return (
    <button
      onClick={handleClick}
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        fontSize: size,
        padding: 4,
        lineHeight: 1,
        opacity: 0.6,
        transition: "opacity 0.2s",
      }}
      onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
      onMouseLeave={(e) => e.currentTarget.style.opacity = 0.6}
      title="Play audio"
    >
      🔊
    </button>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   L I N G O V E R S E  v2  —  Complete Redesign
   
   Palette (neuroscience-backed):
     Primary:  Warm Blue #4A8FE7  — focus, memory, trust
     Accent:   Amber Gold #F5A623 — dopamine, reward, motivation
     Success:  Soft Teal #2ECDA7  — positive reinforcement
     Danger:   Coral Red #F56565
     
   Light theme, clean Duolingo-inspired layout, premium feel
   Fonts: DM Sans (headings) + Source Sans 3 (body)
   ═══════════════════════════════════════════════════════════════════════ */

// ━━━━━━━━━━ DATA ━━━━━━━━━━
/*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
LINGOVERSE LANGUAGE INTEGRATION PIPELINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This pipeline defines how Lingoverse learns to build languages.
Follow this pipeline for EVERY new language. No shortcuts.

PIPELINE STEP 0 — Register language (discoverability)

- Add language to LANGUAGES array with:
  code, name, native, greeting, welcomeBack, rtl, flag mapping.
- Ensure onboarding + profile pickers show it.
- Any UNITS.lang must have a LANGUAGES entry.
- If missing: fail batch and fix.

PIPELINE STEP 1 — Language meta + framework mapping

Create LANG_META[code]:

- scriptType: latin|arabic|hangul|kana|hanzi|cyrillic|mixed
- framework: CEFR|HSK|JLPT|TOPIK|custom
- levelMap: mapping into A1–C2 (or dual labels)
- specialRules: RTL, vowel length, diacritics, consonant doubling, tones, etc.

Must exist before FK or units.

PIPELINE STEP 2 — Foundations (FK) completeness

Implement FOUNDATIONS_BY_LANG[code]:

modules: [{id,title,level:"Pre-A1",type:"grid|cards|examples|practice",items}]

2D GRID REQUIRED:

- Latin: alphabet + phonics + digraphs
  (Dutch: aa/ee/oo/uu/ij/ou/oe/ui/eu + lak/lakken rules)
- German: umlauts/ß + vowel length
- Arabic: all letter forms + non-connectors + harakat/shadda/tanwin
- Korean: Hangul assembly
- Japanese: full Hiragana + Katakana
- Chinese: pinyin + tones + radicals
- Russian: Cyrillic + soft/hard signs

FK must make beginners reading/writing ready.

PIPELINE STEP 3 — Culture pack

Add CULTURE_PACKS[code]:

food[], customs[], places[], beginnerSituations[],
politenessNotes[], tabooOrPitfalls[].

Units must use this.

PIPELINE STEP 4 — Unit templates (Units 1–5 A1 survival)

Use UNIT_TEMPLATES:

U1 greetings
U2 numbers/time
U3 food
U4 directions
U5 daily life

Consistent lesson patterns.
Culture from CULTURE_PACKS.
MK keys for all translations.

PIPELINE STEP 5 — MK + MKG pedagogy layer

Extend MK with MKG keys for:

- explanations
- grammar notes
- culture notes
- hints

Add p(key, baseLang) helper.

No embedded English strings.

PIPELINE STEP 6 — QA gates

Must pass:

- Build OK
- Language in pickers
- FK renders
- Units run
- Progress saves
- MK/MKG resolves
- Flag/report works
- No regressions

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
*/
// DISCOVERABILITY RULE: If a course exists in UNITS with lang:'xx', then 'xx'
// MUST be registered in LANGUAGES (target language picker), in any profile
// language list, and in CountryFlag/flag system. LANGUAGES is the single source
// of truth for what appears in onboarding + profile. Do not add languages to
// UNITS without also adding them to LANGUAGES.
// ══════════════════════════════════════════════════════════════════
function AppIcon({name,size=24,style={}}){const src=ICON_REG[name];if(!src)return null;return <img src={src} alt={name} width={size} height={size} style={{display:"inline-block",verticalAlign:"middle",objectFit:"contain",filter:"drop-shadow(0 0 2px rgba(247,183,51,0.3)) drop-shadow(0 1px 2px rgba(200,160,40,0.15)) drop-shadow(0 0 0.5px rgba(60,40,20,0.25))",...style}}/>;};




// Foundations Gate: check if user has completed/bypassed Foundations (Manifesto P13)
// This checks COMPLETION status only. FOUNDATIONS_LOCK_ENABLED controls click-blocking separately.
const isFoundationsUnlocked=(user,lang)=>{
  const p=user.progress||{};
  if(p.foundationsUnlocked?.[lang]) return true; // Manual bypass ("Unlock anyway")
  if(p.gateQuiz?.[lang]?.passed) return true; // Gate quiz passed
  // Check if all playthrough lessons complete
  const pt=FK_PLAYTHROUGH[lang];
  if(pt&&pt.stages&&pt.stages.length>0){
    const allDone=pt.stages.every(stage=>
      stage.lessons.every(lesson=>p.fkPlay?.[lang]?.[lesson.id])
    );
    if(allDone) return true;
  }
  return false;
};
const getUserCefr=(user,lang)=>{
  const units=UNITS.filter(u=>u.lang===lang).filter(u=>{
    const key=`${lang}_u${u.n}`;
    return user.cu&&user.cu[key];
  });
  if(!units.length)return{level:"A1.1",band:"A1",label:"Beginner",progress:0};
  const highest=units.reduce((best,u)=>{
    const idx=CEFR_LEVELS.findIndex(l=>l.id===u.level);
    return idx>best.idx?{idx,level:u.level}:best;
  },{idx:-1,level:"A1.1"});
  const info=getCefrInfo(highest.level);
  const totalInBand=CEFR_LEVELS.filter(l=>l.band===info.band).length;
  const posInBand=CEFR_LEVELS.filter(l=>l.band===info.band).findIndex(l=>l.id===info.id)+1;
  return{...info,progress:Math.round((posInBand/totalInBand)*100)};
};





// ── FK Progress Tracking (parallel to lesson progress) ──
// Existing: user.progress.foundation[`${lang}:foundation:${secId}:${itemIdx}`] = true
// New: fkModuleProgress adds richer tracking per module type.
//
// Schema: user.progress.fkModules[`${lang}:${secId}:${itemIdx}`] = {
//   read: true,          // info was viewed / marked "I got it"
//   practiced: true,     // practice block was completed (if applicable)
//   score: 0.8,          // optional: accuracy on practice (0-1)
//   timestamp: 16...     // when last completed
// }
//
// Helper: getFkModuleProgress(lang, secId, itemIdx) returns the record or null.
// Helper: setFkModuleProgress(lang, secId, itemIdx, update) merges into record.
// These are additive — the existing isFkDone/markFk system continues to work unchanged.

function getFkModuleProgress(user, lang, secId, itemIdx) {
  const key = `${lang}:${secId}:${itemIdx}`;
  return user?.progress?.fkModules?.[key] || null;
}

function setFkModuleProgress(setUser, lang, secId, itemIdx, update) {
  if (!setUser) return;
  const key = `${lang}:${secId}:${itemIdx}`;
  setUser(u => {
    const fkMods = {...((u.progress || {}).fkModules || {})};
    fkMods[key] = {...(fkMods[key] || {}), ...update, timestamp: Date.now()};
    return {...u, progress: {...(u.progress || {}), fkModules: fkMods}};
  });
}









// Scans UNITS and FOUNDATIONS_BY_LANG for lang codes not in LANGUAGES.
// Also validates FK sections against FOUNDATION_SCHEMA.
// Fires once on load. Console warnings + stores warnings for optional on-screen display.
const __devWarnings=[];
try{
if(typeof console!=="undefined"){
  const _langCodes=new Set(LANGUAGES.map(l=>l.code));
  // Check FOUNDATIONS_BY_LANG lang codes
  Object.keys(FOUNDATIONS_BY_LANG).forEach(lc=>{
    if(!_langCodes.has(lc)){
      const msg=`FOUNDATIONS_BY_LANG has lang "${lc}" not in LANGUAGES`;
      console.warn(`[LingoVerse] ${msg}`);
      __devWarnings.push(msg);
    }
  });
  // Check FK schema completeness for languages with foundations
  Object.keys(FOUNDATIONS_BY_LANG).forEach(lc=>{
    const schema=FOUNDATION_SCHEMA[FK_SCHEMA_MAP[lc]];
    if(!schema)return;
    const sectionIds=(FOUNDATIONS_BY_LANG[lc].sections||[]).map(s=>s.id);
    const hasGrid=(FOUNDATIONS_BY_LANG[lc].sections||[]).some(s=>
      (s.items||[]).some(it=>it.grid)
    );
    if(!hasGrid){
      const msg=`FK "${lc}" has no 2D grid — schema requires alphabet_grid`;
      console.warn(`[LingoVerse] ${msg}`);
      __devWarnings.push(msg);
    }
  });
  // Check FK_PLAYTHROUGH coverage — every LANGUAGES entry must have an entry
  _langCodes.forEach(lc=>{
    if(!FK_PLAYTHROUGH[lc]){
      const msg=`FK_PLAYTHROUGH missing for "${lc}" — every language in LANGUAGES must have an FK_PLAYTHROUGH entry (even placeholder)`;
      console.warn(`[LingoVerse] ${msg}`);
      __devWarnings.push(msg);
    }
  });
  // Deferred UNITS check — attached after UNITS is defined
  window.__lingoDevGuardLangCodes=_langCodes;
}
}catch(e){console.warn("[LingoVerse] Dev guard skipped:",e.message);}

// ══════════════════════════════════════════════════════════════════
// FEATURE FLAGS
// ══════════════════════════════════════════════════════════════════
const AUDIO_ENABLED = false; // Gate all audio playback. Set true when TTS is ready.
const FOUNDATIONS_LOCK_ENABLED = false; // Gate unit locking behind Foundations. Set true to enforce. Manifesto P13.
const UI_SOUNDS_ENABLED = true; // Gate UI sound effects (clicks, chimes, confetti). Separate from TTS.

// ══════════════════════════════════════════════════════════════════
// UI SOUND ENGINE — Web Audio API synth (zero external files)
// ══════════════════════════════════════════════════════════════════
const UISounds=(()=>{
  let ctx=null;
  const getCtx=()=>{
    if(!ctx||ctx.state==="closed") ctx=new (window.AudioContext||window.webkitAudioContext)();
    if(ctx.state==="suspended") ctx.resume();
    return ctx;
  };
  const ok=()=>UI_SOUNDS_ENABLED&&typeof window!=="undefined"&&!!(window.AudioContext||window.webkitAudioContext);

  // ── Noise buffer (shared, for swoosh/tick sounds) ──
  let noiseBuf=null;
  const getNoise=()=>{
    const c=getCtx();
    if(noiseBuf&&noiseBuf.sampleRate===c.sampleRate) return noiseBuf;
    const len=c.sampleRate*0.2;
    noiseBuf=c.createBuffer(1,len,c.sampleRate);
    const d=noiseBuf.getChannelData(0);
    for(let i=0;i<len;i++) d[i]=Math.random()*2-1;
    return noiseBuf;
  };

  // ── Tone: sine/triangle oscillator with gain envelope ──
  const tone=(freq,dur,{type="sine",vol=0.12,attack=0.005,decay=null,detune=0}={})=>{
    if(!ok())return;
    const c=getCtx(),t=c.currentTime;
    const o=c.createOscillator();
    const g=c.createGain();
    o.type=type;o.frequency.value=freq;o.detune.value=detune;
    g.gain.setValueAtTime(0,t);
    g.gain.linearRampToValueAtTime(vol,t+attack);
    g.gain.linearRampToValueAtTime(0,t+(decay||dur));
    o.connect(g);g.connect(c.destination);
    o.start(t);o.stop(t+dur+0.01);
  };

  // ── Noise burst: filtered white noise with envelope ──
  const noiseBurst=(dur,{freq=2000,Q=1.5,vol=0.08,attack=0.002}={})=>{
    if(!ok())return;
    const c=getCtx(),t=c.currentTime;
    const src=c.createBufferSource();
    src.buffer=getNoise();
    const bp=c.createBiquadFilter();
    bp.type="bandpass";bp.frequency.value=freq;bp.Q.value=Q;
    const g=c.createGain();
    g.gain.setValueAtTime(0,t);
    g.gain.linearRampToValueAtTime(vol,t+attack);
    g.gain.linearRampToValueAtTime(0,t+dur);
    src.connect(bp);bp.connect(g);g.connect(c.destination);
    src.start(t);src.stop(t+dur+0.01);
  };

  return{
    // Subtle tick — PS4-inspired, for focus changes & hover
    tick:()=>noiseBurst(0.015,{freq:3500,Q:2.5,vol:0.06,attack:0.001}),

    // Button click — punchy noise pop
    click:()=>noiseBurst(0.025,{freq:2800,Q:2,vol:0.1,attack:0.001}),

    // Page turn / continue — warm subtle pop
    pageTurn:()=>{tone(600,0.05,{vol:0.09,decay:0.035});},

    // Correct answer — gentle high chime (two bright tones, dim but clear)
    correct:()=>{
      tone(880,0.12,{type:"sine",vol:0.07,decay:0.10});
      setTimeout(()=>tone(1100,0.18,{type:"sine",vol:0.09,decay:0.15}),80);
    },

    // Wrong answer — soft low double-bump
    wrong:()=>{
      tone(280,0.12,{type:"sine",vol:0.1,decay:0.10});
      setTimeout(()=>tone(220,0.18,{type:"sine",vol:0.08,decay:0.15}),70);
    },

    // Celebration — ascending chime cascade + final sparkle
    celebrate:()=>{
      tone(660,0.15,{type:"sine",vol:0.06,decay:0.12});
      setTimeout(()=>tone(880,0.15,{type:"sine",vol:0.07,decay:0.12}),100);
      setTimeout(()=>tone(1100,0.15,{type:"sine",vol:0.08,decay:0.12}),200);
      setTimeout(()=>tone(1320,0.2,{type:"sine",vol:0.09,decay:0.18}),300);
      setTimeout(()=>noiseBurst(0.03,{freq:4500,Q:2,vol:0.1,attack:0.001}),420);
    },
  };
})();

// ══════════════════════════════════════════════════════════════════
// useFocusNav — Global arrow-key navigation hook (Decision 11)
// Scans a container for focusable elements, applies .kb-focus class.
// Arrow keys cycle, Space/Enter activate, Backspace goes back.
// Mouse movement clears keyboard focus to avoid hover conflicts.
// ══════════════════════════════════════════════════════════════════
const KB_FOCUS_SEL="button:not(:disabled),.card[style*=cursor],.card[onclick],.lang-card,.topnav-item,.topnav-logo-wrap,.btn,.ach-card,a[href],select,[role=button]";

function useFocusNav(containerRef,onBack,{selector=KB_FOCUS_SEL,enabled=true}={}){
  const [kbIdx,setKbIdx]=useState(-1);
  const kbActive=useRef(false);
  const kbIdxRef=useRef(-1); // mirror for post-render apply

  // Apply .kb-focus AFTER React re-render (so React can't strip it)
  useEffect(()=>{
    document.querySelectorAll(".kb-focus").forEach(el=>el.classList.remove("kb-focus"));
    if(kbIdx<0)return;
    const root=containerRef?.current||document.body;
    const els=Array.from(root.querySelectorAll(selector)).filter(el=>{
      const r=el.getBoundingClientRect();
      return r.width>0&&r.height>0;
    });
    if(kbIdx>=0&&kbIdx<els.length){
      els[kbIdx].classList.add("kb-focus");
      const r=els[kbIdx].getBoundingClientRect();
      if(r.top<70||r.bottom>window.innerHeight)
        els[kbIdx].scrollIntoView?.({block:"nearest",behavior:"smooth"});
    }
  },[kbIdx]);

  useEffect(()=>{
    if(!enabled)return;
    const getEls=()=>{
      const root=containerRef?.current||document.body;
      return Array.from(root.querySelectorAll(selector)).filter(el=>{
        const r=el.getBoundingClientRect();
        return r.width>0&&r.height>0;
      });
    };

    // Group elements into visual rows by Y center (±20px = same row)
    const getRows=(els)=>{
      const items=els.map((el,i)=>{
        const r=el.getBoundingClientRect();
        return{i,cx:r.left+r.width/2,cy:r.top+r.height/2};
      });
      // Sort by Y then X
      items.sort((a,b)=>a.cy-b.cy||a.cx-b.cx);
      const rows=[];
      let curRow=[items[0]];
      for(let k=1;k<items.length;k++){
        if(Math.abs(items[k].cy-curRow[0].cy)<25){
          curRow.push(items[k]);
        }else{
          curRow.sort((a,b)=>a.cx-b.cx);
          rows.push(curRow);
          curRow=[items[k]];
        }
      }
      if(curRow.length)rows.push(curRow.sort((a,b)=>a.cx-b.cx));
      return rows;
    };

    const findInRows=(els,curIdx,dir)=>{
      if(!els.length)return null;
      const rows=getRows(els);
      // Find which row/col current element is in
      let curR=-1,curC=-1;
      for(let r=0;r<rows.length;r++){
        for(let c=0;c<rows[r].length;c++){
          if(rows[r][c].i===curIdx){curR=r;curC=c;break;}
        }
        if(curR>=0)break;
      }
      if(curR<0)return null;

      if(dir==="right"){
        if(curC<rows[curR].length-1)return rows[curR][curC+1].i;
        if(curR<rows.length-1)return rows[curR+1][0].i;
        return null; // at boundary — let browser scroll
      }
      if(dir==="left"){
        if(curC>0)return rows[curR][curC-1].i;
        if(curR>0)return rows[curR-1][rows[curR-1].length-1].i;
        return null;
      }
      if(dir==="down"){
        if(curR>=rows.length-1)return null; // at last row — scroll
        const nextR=curR+1;
        const cx=rows[curR][curC].cx;
        let best=0,bestDx=Infinity;
        for(let c=0;c<rows[nextR].length;c++){
          const dx=Math.abs(rows[nextR][c].cx-cx);
          if(dx<bestDx){bestDx=dx;best=c;}
        }
        return rows[nextR][best].i;
      }
      if(dir==="up"){
        if(curR<=0)return null; // at first row — scroll
        const prevR=curR-1;
        const cx=rows[curR][curC].cx;
        let best=0,bestDx=Infinity;
        for(let c=0;c<rows[prevR].length;c++){
          const dx=Math.abs(rows[prevR][c].cx-cx);
          if(dx<bestDx){bestDx=dx;best=c;}
        }
        return rows[prevR][best].i;
      }
      return null;
    };

    const keyHandler=(e)=>{
      if(e.defaultPrevented)return;
      // Only block on pages with their own arrow handling (lesson engine)
      if(document.querySelector("[data-kb-owner='lesson'],[data-kb-owner='lesson-done']"))return;
      const tag=document.activeElement?.tagName;
      if(tag==="INPUT"||tag==="TEXTAREA"||tag==="SELECT")return;
      const els=getEls();
      if(!els.length)return;

      const dirMap={ArrowDown:"down",ArrowUp:"up",ArrowLeft:"left",ArrowRight:"right"};
      const dir=dirMap[e.code];
      if(dir){
        kbActive.current=true;
        setKbIdx(prev=>{
          let next;
          if(prev<0||prev>=els.length){
            // First press: pick starting element
            if(dir==="up"||dir==="left"){
              next=els.length-1;
            }else{
              next=els.findIndex(el=>el.getBoundingClientRect().top>70);
              if(next<0)next=0;
            }
          }else{
            next=findInRows(els,prev,dir);
          }
          if(next===null){
            // At boundary — DON'T preventDefault, let browser scroll
            return prev;
          }
          e.preventDefault();
          UISounds.tick();
          return next;
        });
        return;
      }
      if(e.code==="Space"||e.code==="Enter"){
        if(!kbActive.current)return;
        const els2=getEls();
        setKbIdx(cur=>{
          if(cur>=0&&cur<els2.length){
            e.preventDefault();UISounds.click();
            els2[cur].click();
          }
          return cur;
        });
        return;
      }
    };

    // Mouse moves → immediately clear keyboard selection
    const mouseHandler=()=>{
      if(kbActive.current){
        kbActive.current=false;
        setKbIdx(-1);
        document.querySelectorAll(".kb-focus").forEach(el=>el.classList.remove("kb-focus"));
      }
    };

    window.addEventListener("keydown",keyHandler);
    window.addEventListener("mousemove",mouseHandler,{passive:true});
    return ()=>{
      window.removeEventListener("keydown",keyHandler);
      window.removeEventListener("mousemove",mouseHandler);
      document.querySelectorAll(".kb-focus").forEach(el=>el.classList.remove("kb-focus"));
    };
  },[enabled,onBack]);

  useEffect(()=>()=>{setKbIdx(-1);document.querySelectorAll(".kb-focus").forEach(el=>el.classList.remove("kb-focus"));},[]);

  return kbIdx;
}


// ══════════════════════════════════════════════════════════════════
// AUDIO PLACEHOLDER SCHEMA (documented, not yet active)
// ══════════════════════════════════════════════════════════════════
/*
AUDIO PLACEHOLDER SCHEMA — for future TTS/recording integration

Teach steps may include:
  { type:"teach", nl:"가", en:"ga", audio_id:"ko_ga_01", ... }

MC steps may include:
  { type:"mc", q:"...", audio_id:"ko_q_p1_01", ... }

audio_id format: {lang}_{type}_{phase}_{number}
  e.g., ko_teach_p1_01, ko_mc_p3_05

When AUDIO_ENABLED=true:
  - SpeakerButton renders and plays audio_id
  - "Listen and choose" steps become available
  - Audio-only questions may be added

Until then: audio_id fields are IGNORED by all renderers.
*/

// ══════════════════════════════════════════════════════════════════
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














const shuffle = a=>[...a].sort(()=>Math.random()-.5);
const pick = a=>a[Math.floor(Math.random()*a.length)];
const clamp = (v,l,h)=>Math.max(l,Math.min(h,v));
const getLevel = xp=>{for(let i=LEVEL_XP.length-1;i>=0;i--)if(xp>=LEVEL_XP[i])return i+1;return 1;};
const cap = s=>s?s.charAt(0).toUpperCase()+s.slice(1):s;
const xpNext = xp=>LEVEL_XP[getLevel(xp)]||12000;
const xpCurr = xp=>LEVEL_XP[getLevel(xp)-1]||0;



// ━━━━━━━━━━ NEW DESIGN SYSTEM ━━━━━━━━━━
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;0,9..40,800&family=Source+Sans+3:wght@400;500;600;700&family=Quicksand:wght@500;600;700;800&family=Nunito:wght@400;500;600;700;800&display=swap');

:root {
  --blue: #4A8FE7;
  --blue-light: #E8F1FC;
  --blue-pale: #F3F8FF;
  --blue-dark: #3A6FBA;
  --gold: #F5A623;
  --gold-light: #FFF5E0;
  --gold-dark: #D4880C;
  --teal: #2ECDA7;
  --teal-light: #E4F9F3;
  --teal-dark: #0D7D5C;
  --teal-text: #0D7D5C;
  --coral: #F56565;
  --coral-light: #FEE8E8;
  --bg: #E6ECFA;
  --white: #FFFFFF;
  --gray-50: #F7F8FC;
  --gray-100: #EEEEF5;
  --gray-200: #DDDDE8;
  --gray-300: #C4C4D4;
  --gray-400: #9696AD;
  --gray-500: #6B6B84;
  --gray-600: #4A4A62;
  --gray-700: #2D2D3F;
  --gray-800: #1A1A2B;
  --radius: 16px;
  --radius-sm: 10px;
  --radius-lg: 22px;
  --shadow-sm: 0 2px 6px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.08);
  --shadow: 0 4px 12px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.04);
  --shadow-lg: 0 10px 30px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04);
  --shadow-blue: 0 4px 16px rgba(74,143,231,0.25);
  --shadow-gold: 0 4px 16px rgba(245,166,35,0.25);
  --shadow-teal: 0 4px 16px rgba(46,205,167,0.25);
  --gold-bg: linear-gradient(135deg, #FFF9EE, #FFF5E0);
  --gold-bg-light: linear-gradient(145deg, #FFF9EE, #FFFBF4);
  --purple-bg: linear-gradient(135deg, #F8F6FF, #F0EBFF);
  --purple-flat: #F8F6FF;
  --purple-border: #E8E0FF;
  --example-bg: linear-gradient(180deg, var(--gray-50), white);
  --purple-accent: #7050D8;
  --purple-accent-text: #7050D8;
  /* ── GLASS SYSTEM (auto light/dark) ── */
  --card-bg: linear-gradient(180deg, #FFFFFF 0%, #FAFAFE 50%, #F5F4FA 100%);
  --card-border: rgba(220,215,235,0.5);
  --card-shadow: 0 3px 10px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.03), inset 0 2px 0 rgba(255,255,255,0.9), inset 0 -2px 0 rgba(0,0,0,0.03);
  --card-shadow-hover: 0 8px 22px rgba(0,0,0,0.08), 0 0 16px rgba(123,94,232,0.06), inset 0 2px 0 rgba(255,255,255,0.95), inset 0 -2px 0 rgba(0,0,0,0.04);
  --panel-bg: linear-gradient(180deg, #fff, #f5f6fa);
  --glass-blur: none;
}

/* ── DARK MODE ── */
:root.dark {
  --bg: #16162B;
  --white: rgba(32,34,62,0.65);
  --gray-50: rgba(40,42,72,0.6);
  --gray-100: #2E2E50;
  --gray-200: #3E3E62;
  --gray-300: #68689A;
  --gray-400: #B8B8D4;
  --gray-500: #D0D0E0;
  --gray-600: #E4E4F0;
  --gray-700: #F0F0F8;
  --gray-800: #FFFFFF;
  --blue: #6AABF5;
  --blue-light: #1E2848;
  --blue-pale: #1A2240;
  --blue-dark: #8AC0FA;
  --gold: #F5C040;
  --gold-light: #2E2818;
  --gold-dark: #F5D060;
  --teal: #50E0C0;
  --teal-light: #1A3028;
  --teal-dark: #70F0D8;
  --teal-text: #5EEAC8;
  --coral: #F58888;
  --coral-light: #301A1A;
  --shadow-sm: 0 2px 6px rgba(0,0,0,0.35), 0 1px 2px rgba(0,0,0,0.25);
  --shadow: 0 6px 20px rgba(0,0,0,0.4), 0 2px 6px rgba(0,0,0,0.25);
  --shadow-lg: 0 14px 42px rgba(0,0,0,0.5), 0 6px 16px rgba(0,0,0,0.3);
  --shadow-blue: 0 6px 24px rgba(106,171,245,0.3);
  --shadow-gold: 0 6px 24px rgba(245,192,64,0.3);
  --shadow-teal: 0 6px 24px rgba(80,224,192,0.3);
  --gold-bg: linear-gradient(135deg, rgba(50,42,20,0.7), rgba(44,38,14,0.7));
  --gold-bg-light: linear-gradient(145deg, rgba(50,42,20,0.7), rgba(44,38,18,0.7));
  --purple-bg: linear-gradient(135deg, rgba(50,38,85,0.8), rgba(40,32,70,0.75));
  --purple-flat: rgba(40,32,70,0.7);
  --purple-border: #4E4280;
  --example-bg: var(--gray-50);
  --purple-accent: #A890FF;
  --purple-accent-text: #C8B8FF;
  /* ── GLOSSY HELPERS ── */
  --glass-bg: rgba(32,34,62,0.5);
  --glass-border: rgba(255,255,255,0.1);
  --glass-highlight: rgba(255,255,255,0.14);
  --glass-lowlight: rgba(0,0,0,0.18);
  --candy-highlight: rgba(255,255,255,0.35);
  --candy-lowlight: rgba(0,0,0,0.2);
  /* ── GLASS SYSTEM (auto light/dark) ── */
  --card-bg: linear-gradient(180deg, rgba(45,40,75,0.7) 0%, rgba(32,28,58,0.65) 50%, rgba(26,24,50,0.6) 100%);
  --card-border: rgba(160,140,240,0.18);
  --card-shadow: 0 3px 12px rgba(0,0,0,0.3), 0 0 12px rgba(140,120,220,0.1), inset 0 1px 0 rgba(255,255,255,0.12), inset 0 -2px 0 rgba(0,0,0,0.18);
  --card-shadow-hover: 0 6px 20px rgba(0,0,0,0.35), 0 0 24px rgba(140,120,220,0.2), 0 0 8px rgba(160,140,240,0.1), inset 0 2px 0 rgba(255,255,255,0.18), inset 0 -2px 0 rgba(0,0,0,0.15);
  --panel-bg: rgba(28,30,55,0.55);
  --glass-blur: blur(22px) saturate(1.3);
}
:root.dark body, :root.dark #root {
  background: radial-gradient(ellipse at 50% 0%, #1E1E3A 0%, #16162B 50%, #121228 100%);
  background-attachment: fixed;
  color: var(--gray-700);
}

/* ━━━━━━ GLASS CARDS — frosted translucent panels with top sheen ━━━━━━ */
:root.dark .topnav {
  background: rgba(28,28,52,0.78);
  backdrop-filter: blur(24px) saturate(1.3); -webkit-backdrop-filter: blur(24px) saturate(1.3);
  border-color: var(--glass-border);
  box-shadow:
    0 4px 24px rgba(0,0,0,0.35),
    inset 0 1px 0 var(--glass-highlight),
    inset 0 -1px 0 var(--glass-lowlight);
}
:root.dark .card::before {
  background: linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.015) 50%, transparent 100%);
}
:root.dark .quiz-opt::before,
:root.dark .lang-card::before,
:root.dark .fc-front::before {
  background: linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.02) 50%, transparent 100%);
}
:root.dark .card:hover {
  border-color: rgba(168,136,255,0.5);
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0,0,0,0.35), 0 0 32px rgba(168,136,255,0.28), 0 0 10px rgba(160,140,240,0.14), inset 0 2px 0 rgba(255,255,255,0.2), inset 0 -2px 0 rgba(0,0,0,0.15) !important;
  filter: brightness(1.12);
}
:root.dark .lang-card.active {
  background: rgba(30,28,60,0.7);
  border-color: rgba(168,136,255,0.4);
  box-shadow: 0 6px 24px rgba(123,94,232,0.2), inset 0 1px 0 rgba(255,255,255,0.15);
}
:root.dark .lang-card .name { color: var(--gray-800); }
:root.dark .xpbar { background: rgba(255,255,255,0.07); box-shadow: inset 0 1px 3px rgba(0,0,0,0.3); border-radius: 20px; }
:root.dark .xpbar-fill { box-shadow: 0 0 14px rgba(168,136,255,0.5), 0 0 4px rgba(168,136,255,0.3); }
:root.dark h1,:root.dark h2,:root.dark h3,:root.dark h4,:root.dark h5,:root.dark .hd { color: var(--gray-800); }
:root.dark .badge-gold { background: rgba(245,192,64,0.14); border: 1px solid rgba(245,192,64,0.2); box-shadow: inset 0 1px 0 rgba(255,255,255,0.06); }
:root.dark .badge-blue { background: rgba(106,171,245,0.14); border: 1px solid rgba(106,171,245,0.2); box-shadow: inset 0 1px 0 rgba(255,255,255,0.06); }
:root.dark .badge-teal { background: rgba(80,224,192,0.14); border: 1px solid rgba(80,224,192,0.2); box-shadow: inset 0 1px 0 rgba(255,255,255,0.06); }
:root.dark .badge-coral { background: rgba(245,136,136,0.14); border: 1px solid rgba(245,136,136,0.2); box-shadow: inset 0 1px 0 rgba(255,255,255,0.06); }
:root.dark .stat-xp { background: var(--gold-light); }
:root.dark .stat-streak { background: var(--coral-light); }
:root.dark .stat-level { background: var(--blue-light); }

/* ━━━━━━ GLASS INPUTS — recessed with inner shadow ━━━━━━ */
:root.dark input, :root.dark textarea, :root.dark select {
  background: rgba(24,26,50,0.7);
  backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
  color: var(--gray-800);
  border-color: rgba(255,255,255,0.1);
  box-shadow: inset 0 2px 6px rgba(0,0,0,0.3), inset 0 0 0 1px rgba(255,255,255,0.03);
  border-radius: 12px;
}
:root.dark input::placeholder, :root.dark textarea::placeholder { color: var(--gray-400); }
:root.dark input:focus, :root.dark textarea:focus {
  background: rgba(28,30,54,0.8);
  border-color: rgba(106,171,245,0.45);
  box-shadow: inset 0 2px 6px rgba(0,0,0,0.25), 0 0 20px rgba(106,171,245,0.15);
}

/* ━━━━━━ GLASS FLASHCARDS & PANELS ━━━━━━ */
:root.dark .fc-front, :root.dark .fc-back {
  background: var(--glass-bg);
  backdrop-filter: blur(20px) saturate(1.2); -webkit-backdrop-filter: blur(20px) saturate(1.2);
  border: 1.5px solid var(--glass-border);
  box-shadow:
    0 10px 36px rgba(0,0,0,0.35),
    inset 0 1px 0 var(--glass-highlight),
    inset 0 -1px 0 var(--glass-lowlight);
}
:root.dark .ach-card::before {
  background: linear-gradient(180deg, rgba(255,255,255,0.06) 0%, transparent 100%);
}
:root.dark .chat-msg {
  background: rgba(32,34,62,0.45);
  border: 1px solid rgba(255,255,255,0.06);
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.06);
}
:root.dark .chat-starter {
  background: rgba(32,34,62,0.4);
  border: 1.5px solid rgba(255,255,255,0.08);
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.06);
}
:root.dark .chat-starter:hover {
  background: rgba(42,44,78,0.6);
  border-color: rgba(168,136,255,0.3);
  box-shadow: 0 0 20px rgba(123,94,232,0.12), inset 0 1px 0 rgba(255,255,255,0.1);
}
:root.dark code { background: rgba(255,255,255,0.07); color: var(--gray-700); border-radius: 6px; }

/* ━━━━━━ CANDY BUTTONS — 3D pillow + gloss stripe + bevel ━━━━━━ */
:root.dark .btn-primary, :root.dark .btn-blue, :root.dark .btn-purple {
  background: linear-gradient(180deg,
    rgba(255,255,255,0.22) 0%,
    rgba(140,100,240,0.95) 6%,
    #7B5EE8 45%,
    #5B3DBF 100%) !important;
  border: 1.5px solid rgba(200,180,255,0.3) !important;
  box-shadow:
    0 0 18px rgba(140,110,240,0.4),
    0 0 40px rgba(123,94,232,0.2),
    0 8px 24px rgba(123,94,232,0.5),
    0 3px 6px rgba(0,0,0,0.25),
    inset 0 2px 0 var(--candy-highlight),
    inset 0 -3px 0 var(--candy-lowlight) !important;
  text-shadow: 0 1px 3px rgba(0,0,0,0.3);
  color: white !important;
}
:root.dark .btn-primary:hover, :root.dark .btn-blue:hover, :root.dark .btn-purple:hover {
  box-shadow:
    0 0 24px rgba(160,130,255,0.6),
    0 0 50px rgba(140,110,240,0.35),
    0 0 80px rgba(123,94,232,0.15),
    0 10px 32px rgba(123,94,232,0.5),
    0 3px 6px rgba(0,0,0,0.25),
    inset 0 2px 0 rgba(255,255,255,0.4),
    inset 0 -3px 0 var(--candy-lowlight) !important;
  filter: brightness(1.2);
  border-color: rgba(200,180,255,0.45) !important;
}
:root.dark .btn-gold {
  background: linear-gradient(180deg,
    rgba(255,255,255,0.22) 0%,
    rgba(245,192,64,0.95) 6%,
    #F5A623 45%,
    #D4880C 100%) !important;
  border: 1.5px solid rgba(255,220,120,0.3) !important;
  box-shadow:
    0 0 18px rgba(245,180,50,0.4),
    0 0 40px rgba(245,166,35,0.2),
    0 8px 24px rgba(245,166,35,0.5),
    inset 0 2px 0 var(--candy-highlight),
    inset 0 -3px 0 var(--candy-lowlight) !important;
  text-shadow: 0 1px 3px rgba(0,0,0,0.25);
}
:root.dark .btn-teal {
  background: linear-gradient(180deg,
    rgba(255,255,255,0.22) 0%,
    rgba(80,224,192,0.95) 6%,
    #38D0AA 45%,
    #22A680 100%) !important;
  border: 1.5px solid rgba(120,240,210,0.3) !important;
  box-shadow:
    0 0 18px rgba(60,220,180,0.4),
    0 0 40px rgba(46,205,167,0.2),
    0 8px 24px rgba(46,205,167,0.45),
    inset 0 2px 0 var(--candy-highlight),
    inset 0 -3px 0 var(--candy-lowlight) !important;
  text-shadow: 0 1px 3px rgba(0,0,0,0.25);
}
:root.dark .btn-outline {
  background: var(--glass-bg) !important;
  backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
  border: 1.5px solid rgba(255,255,255,0.18) !important;
  color: var(--gray-700) !important;
  box-shadow:
    0 0 12px rgba(140,130,200,0.15),
    0 4px 12px rgba(0,0,0,0.25),
    inset 0 1px 0 rgba(255,255,255,0.12),
    inset 0 -2px 0 rgba(0,0,0,0.12) !important;
}
:root.dark .btn-outline:hover {
  border-color: rgba(106,171,245,0.5) !important;
  background: rgba(42,44,78,0.65) !important;
  color: var(--blue) !important;
  box-shadow:
    0 0 20px rgba(106,171,245,0.3),
    0 0 40px rgba(106,171,245,0.12),
    0 6px 20px rgba(106,171,245,0.2),
    inset 0 1px 0 rgba(255,255,255,0.18),
    inset 0 -2px 0 rgba(0,0,0,0.12) !important;
  filter: brightness(1.1);
}
:root.dark .btn-danger {
  background: linear-gradient(180deg,
    rgba(255,255,255,0.18) 0%,
    rgba(245,101,101,0.95) 6%,
    #E85D75 45%,
    #C04040 100%) !important;
  border: 1.5px solid rgba(255,140,140,0.3) !important;
  box-shadow:
    0 0 18px rgba(240,80,80,0.4),
    0 0 40px rgba(224,74,74,0.2),
    0 8px 24px rgba(224,74,74,0.45),
    inset 0 2px 0 rgba(255,255,255,0.28),
    inset 0 -3px 0 var(--candy-lowlight) !important;
}

/* ━━━━━━ PURPLE CANDY BUTTONS (for Continue, quizzes) ━━━━━━ */
:root.dark .btn-purple {
  background: linear-gradient(180deg,
    #C0AEF8 0%,
    #A488F0 15%,
    #8B6AE4 35%,
    #7B5EE8 50%,
    #6545C8 75%,
    #5840B8 90%,
    #4A2BA6 100%) !important;
  border: none !important;
  box-shadow:
    0 0 18px rgba(123,94,232,0.4),
    0 0 40px rgba(123,94,232,0.15),
    0 5px 16px rgba(85,53,181,0.5),
    inset 0 2px 0 rgba(255,255,255,0.35),
    inset 0 -3px 0 rgba(0,0,0,0.18) !important;
  text-shadow: 0 1px 3px rgba(0,0,0,0.3);
}
/* Text-shadow on ALL dark-mode buttons for that candy feel */
:root.dark .btn { text-shadow: 0 1px 2px rgba(0,0,0,0.3); transition: all 0.2s ease; }
:root.dark .btn:hover { transform: translateY(-2px); filter: brightness(1.2); box-shadow: 0 0 28px rgba(168,136,255,0.35), 0 0 56px rgba(123,94,232,0.12), 0 8px 24px rgba(0,0,0,0.3), inset 0 2px 0 rgba(255,255,255,0.2), inset 0 -3px 0 rgba(0,0,0,0.15) !important; }
:root.dark .btn:active { transform: translateY(1px); filter: brightness(0.9); }

/* ━━━━━━ GLOSSY TOPNAV ITEMS ━━━━━━ */
:root.dark .topnav-item {
  color: var(--gray-500);
  border: 2px solid transparent;
  box-shadow: none;
}
:root.dark .topnav-item:hover {
  color: var(--gray-800);
  background: rgba(255,255,255,0.05);
  border-color: rgba(255,255,255,0.08);
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.08);
}
:root.dark .topnav-item.active {
  color: var(--blue);
  background: rgba(106,171,245,0.12);
  border-color: rgba(106,171,245,0.25);
  box-shadow: 0 0 16px rgba(106,171,245,0.12), inset 0 1px 0 rgba(255,255,255,0.1);
}

/* ━━━━━━ ICON GLOW — colored halo on dark backgrounds ━━━━━━ */
:root.dark .dk-glow { filter: drop-shadow(0 0 10px rgba(168,136,255,0.6)) drop-shadow(0 0 20px rgba(106,171,245,0.2)); }
:root.dark .dk-glow-gold { filter: drop-shadow(0 0 10px rgba(245,192,64,0.6)) drop-shadow(0 0 20px rgba(245,192,64,0.25)); }
:root.dark .dk-glow-teal { filter: drop-shadow(0 0 10px rgba(80,224,192,0.6)) drop-shadow(0 0 20px rgba(80,224,192,0.25)); }
:root.dark .dk-glow-coral { filter: drop-shadow(0 0 10px rgba(245,136,136,0.6)) drop-shadow(0 0 20px rgba(245,136,136,0.25)); }
:root.dark .dk-glow-blue { filter: drop-shadow(0 0 10px rgba(106,171,245,0.6)) drop-shadow(0 0 20px rgba(106,171,245,0.25)); }

/* ━━━━━━ GLASS HELPER — apply to any element ━━━━━━ */
:root.dark .glass {
  background: var(--glass-bg) !important;
  backdrop-filter: blur(20px) saturate(1.2) !important; -webkit-backdrop-filter: blur(20px) saturate(1.2) !important;
  border: 1.5px solid var(--glass-border) !important;
  box-shadow: 0 6px 24px rgba(0,0,0,0.3),
    inset 0 1px 0 var(--glass-highlight),
    inset 0 -2px 0 var(--glass-lowlight) !important;
}

/* ━━━━━━ SHIMMER & GLOW ANIMATIONS ━━━━━━ */
@keyframes subtlePulse {
  0%, 100% { opacity: 0.85; }
  50% { opacity: 1; }
}
@keyframes softGlow {
  0%, 100% { box-shadow: 0 0 12px rgba(168,136,255,0.15); }
  50% { box-shadow: 0 0 20px rgba(168,136,255,0.3); }
}
:root.dark .xpbar-fill {
  animation: subtlePulse 3s ease-in-out infinite;
}
:root.dark .topnav {
  animation: none;
}
/* Subtle glow pulse on active lesson card border */
:root.dark [style*="borderLeft: 4px solid"],
:root.dark [style*="borderLeft:4px solid"] {
  position: relative;
}

* { margin: 0; padding: 0; box-sizing: border-box; }

/* ━━━━━━ UNIVERSAL GLOSS — applied via .gloss class in JSX ━━━━━━ */
.gloss {
  border: 2.5px solid rgba(180,160,230,0.35) !important;
  box-shadow: 0 3px 10px rgba(140,100,220,0.1), 0 1px 3px rgba(0,0,0,0.04), inset 0 2px 0 rgba(255,255,255,0.85), inset 0 -2px 0 rgba(140,100,220,0.07) !important;
  backdrop-filter: var(--glass-blur); -webkit-backdrop-filter: var(--glass-blur);
  position: relative; overflow: hidden;
}
.gloss::before {
  content: ''; position: absolute; top: 0; left: 5%; right: 5%; height: 40%;
  background: linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.1) 40%, transparent 100%);
  pointer-events: none; border-radius: 0 0 45% 45%; z-index: 1;
}
.gloss:hover {
  border-color: rgba(140,100,220,0.5) !important;
  box-shadow: 0 6px 18px rgba(140,100,220,0.15), 0 0 14px rgba(123,94,232,0.07), inset 0 2px 0 rgba(255,255,255,0.9), inset 0 -2px 0 rgba(140,100,220,0.09) !important;
}
:root.dark .gloss {
  border-color: rgba(160,140,240,0.18) !important;
  box-shadow: 0 3px 12px rgba(0,0,0,0.3), 0 0 12px rgba(140,120,220,0.1), inset 0 1px 0 rgba(255,255,255,0.12), inset 0 -2px 0 rgba(0,0,0,0.15) !important;
}
:root.dark .gloss:hover {
  border-color: rgba(168,136,255,0.4) !important;
  box-shadow: 0 6px 18px rgba(0,0,0,0.35), 0 0 28px rgba(168,136,255,0.22), inset 0 2px 0 rgba(255,255,255,0.16), inset 0 -2px 0 rgba(0,0,0,0.15) !important;
  filter: brightness(1.12);
}
:root.dark .gloss::before {
  background: linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.02) 40%, transparent 100%);
}
/* Buttons get extra candy depth */
.btn {
  box-shadow: 0 5px 16px rgba(0,0,0,0.12),
    inset 0 2px 1px rgba(255,255,255,0.4),
    inset 0 -3px 1px rgba(0,0,0,0.12) !important;
}
.btn:hover {
  box-shadow: 0 10px 28px rgba(0,0,0,0.16),
    0 0 24px rgba(123,94,232,0.15),
    inset 0 2px 1px rgba(255,255,255,0.5),
    inset 0 -3px 1px rgba(0,0,0,0.12) !important;
  transform: translateY(-2px);
  filter: brightness(1.08);
}
.btn:active {
  box-shadow: 0 1px 4px rgba(0,0,0,0.15),
    inset 0 3px 8px rgba(0,0,0,0.12) !important;
  transform: translateY(1px);
  filter: brightness(0.95);
}
body, #root {
  font-family: 'Source Sans 3', sans-serif;
  /* PAPYRUS-BG: linear-gradient(180deg, #EAE3D6 0%, #E2DACB 40%, #EAE3D6 100%) */
  background: linear-gradient(180deg, #E6ECFA 0%, #DDE6F8 40%, #E6ECFA 100%);
  background-attachment: fixed;
  color: var(--gray-700);
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
}
h1,h2,h3,h4,h5,.hd { font-family: 'DM Sans', sans-serif; color: var(--gray-800); }

/* ── NAV BAR (top, like Duolingo mobile) ── */
.topnav {
  position: fixed; top: 0; left: 0; right: 0; height: 64px; z-index: 100;
  background: rgba(255,255,255,0.78); border-bottom: 2px solid var(--card-border);
  display: flex; align-items: center; padding: 0 24px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.06), inset 0 -1px 0 rgba(0,0,0,0.04);
  backdrop-filter: blur(24px) saturate(1.4); -webkit-backdrop-filter: blur(24px) saturate(1.4);
}
.topnav-logo {
  font-family: 'DM Sans', sans-serif; font-weight: 800; font-size: 22px;
  background: linear-gradient(135deg, #7B5EE8, #A890FF);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  margin-right: 32px; cursor: pointer; letter-spacing: -0.5px;
}
.topnav-items { display: flex; gap: 4px; flex: 1; }
.topnav-item {
  display: flex; align-items: center; gap: 7px; padding: 8px 16px;
  border-radius: var(--radius-sm); cursor: pointer; font-weight: 600;
  font-size: 14px; color: var(--gray-400); transition: all 0.2s;
  font-family: 'DM Sans', sans-serif; border: 2px solid transparent;
}
.topnav-item:hover { color: var(--gray-600); border-color: var(--gray-300); box-shadow: 0 0 0 3px rgba(74,143,231,0.08); }
.topnav-item.active {
  color: var(--blue); background: var(--blue-light); border-color: var(--blue);
}
.topnav-item .icon { font-size: 18px; }
.topnav-logo-wrap { cursor: pointer; padding: 6px 12px; border-radius: var(--radius-sm); border: 2px solid transparent; transition: all 0.2s; flex: 0 0 auto; display: flex; align-items: center; }
.topnav-logo-wrap:hover { border-color: var(--gray-300); box-shadow: 0 0 0 3px rgba(123,94,232,0.1); }
.topnav-right { display: flex; align-items: center; gap: 12px; margin-left: auto; }
.topnav-stat {
  display: flex; align-items: center; gap: 5px; padding: 6px 12px;
  border-radius: 20px; font-weight: 700; font-size: 13px;
  font-family: 'DM Sans', sans-serif;
}
.stat-xp { background: var(--gold-light); color: var(--gold-dark); }
.stat-streak { background: var(--coral-light); color: var(--coral); }
.stat-level { background: var(--blue-light); color: var(--blue-dark); }

/* ── MAIN CONTENT ── */
.main { margin-top: 64px; padding: 32px; max-width: 860px; margin-left: auto; margin-right: auto; }

/* ── CARDS ── */
.card {
  background: var(--card-bg);
  border: 2px solid var(--card-border);
  border-radius: var(--radius); padding: 24px; transition: all 0.2s;
  box-shadow: var(--card-shadow) !important;
  backdrop-filter: var(--glass-blur); -webkit-backdrop-filter: var(--glass-blur);
  position: relative; overflow: hidden;
}
/* Gloss highlight stripe on cards — subtle candy shine */
.card::before {
  content: ''; position: absolute; top: 0; left: 5%; right: 5%; height: 40%;
  background: linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.1) 40%, rgba(255,255,255,0) 100%);
  pointer-events: none; border-radius: 0 0 45% 45%; z-index: 1;
}
.card:hover { border-color: rgba(180,160,230,0.35); transform: translateY(-3px); box-shadow: 0 8px 22px rgba(0,0,0,0.08), 0 0 16px rgba(123,94,232,0.06), inset 0 2px 0 rgba(255,255,255,0.95), inset 0 -2px 0 rgba(0,0,0,0.04) !important; filter: brightness(1.02); }
.card-blue { border-color: var(--blue); background: var(--blue-pale); }
.card-gold { border-color: var(--gold); background: var(--gold-light); }
.card-teal { border-color: var(--teal); background: var(--teal-light); }

/* ── BUTTONS ── */
.btn {
  font-family: 'DM Sans', sans-serif; font-weight: 700; font-size: 15px;
  padding: 12px 24px; border-radius: var(--radius-sm); border: none;
  cursor: pointer; transition: all 0.2s cubic-bezier(.4,0,.2,1); display: inline-flex;
  align-items: center; justify-content: center; gap: 8px; text-transform: none;
  position: relative; overflow: hidden;
}
.btn::after {
  content: ''; position: absolute; top: 0; left: 5%; right: 5%; height: 45%;
  background: linear-gradient(180deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.15) 40%, rgba(255,255,255,0) 100%);
  pointer-events: none; border-radius: 0 0 50% 50%;
}
.btn-blue, .btn-purple {
  background: linear-gradient(180deg, #B8A8FA 0%, #9B7AE8 20%, #7B5EE8 55%, #6545C8 85%, #5840B8 100%); color: white;
  box-shadow: 0 4px 16px rgba(123,94,232,0.4), 0 2px 4px rgba(0,0,0,0.1), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.15) !important;
  text-shadow: 0 1px 2px rgba(0,0,0,0.2);
}
.btn-blue:hover, .btn-purple:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(123,94,232,0.5), 0 2px 4px rgba(0,0,0,0.1), inset 0 2px 0 rgba(255,255,255,0.4), inset 0 -3px 0 rgba(0,0,0,0.15) !important; }
.btn-blue:active, .btn-purple:active { transform: translateY(1px); box-shadow: 0 1px 4px rgba(123,94,232,0.3), inset 0 3px 6px rgba(0,0,0,0.15) !important; }
.btn-gold {
  background: linear-gradient(180deg, #f7c84e 0%, var(--gold) 45%, #d08e10 100%); color: white;
  box-shadow: 0 4px 16px rgba(245,166,35,0.4), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.15) !important;
  text-shadow: 0 1px 2px rgba(0,0,0,0.2);
}
.btn-gold:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(245,166,35,0.5), inset 0 2px 0 rgba(255,255,255,0.4) !important; }
.btn-teal {
  background: linear-gradient(180deg, #58e8c8 0%, var(--teal) 45%, #1eaa88 100%); color: white;
  box-shadow: 0 4px 16px rgba(46,205,167,0.4), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.15) !important;
  text-shadow: 0 1px 2px rgba(0,0,0,0.2);
}
.btn-teal:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(46,205,167,0.5), inset 0 2px 0 rgba(255,255,255,0.4) !important; }
.btn-outline {
  background: linear-gradient(180deg, #fff 0%, #f5f6fa 100%); color: var(--gray-600);
  border: 2px solid var(--gray-200);
  box-shadow: 0 2px 8px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.9), inset 0 -2px 0 rgba(0,0,0,0.03) !important;
}
.btn-outline::after { display: none; }
.btn-outline:hover { border-color: var(--purple-accent); color: var(--purple-accent); background: linear-gradient(180deg, #fff 0%, #F8F6FF 100%); transform: translateY(-2px); box-shadow: 0 6px 16px rgba(123,94,232,0.12), inset 0 1px 0 rgba(255,255,255,0.9) !important; }
.btn-danger {
  background: linear-gradient(180deg, #f56868 0%, var(--coral) 45%, #b83838 100%); color: white;
  box-shadow: 0 4px 16px rgba(224,74,74,0.35), inset 0 2px 0 rgba(255,255,255,0.3), inset 0 -3px 0 rgba(0,0,0,0.15) !important;
}
.btn-danger:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(224,74,74,0.45), inset 0 2px 0 rgba(255,255,255,0.35) !important; }

/* ── KEYBOARD FOCUS (arrow key navigation) ── */
.kb-focus { outline: 3px solid rgba(200,180,255,0.5) !important; outline-offset: 3px !important; transform: translateY(-2px) scale(1.05) !important; filter: brightness(1.12) !important; box-shadow: 0 0 28px rgba(123,94,232,0.5), 0 0 48px rgba(123,94,232,0.15), 0 8px 24px rgba(123,94,232,0.3) !important; transition: all 0.15s !important; z-index: 5 !important; position: relative; }
.card.kb-focus { border-color: rgba(200,180,255,0.5) !important; transform: translateY(-2px) scale(1.05) !important; box-shadow: 0 0 28px rgba(123,94,232,0.5), 0 0 48px rgba(123,94,232,0.15), 0 8px 24px rgba(123,94,232,0.3) !important; filter: brightness(1.12) !important; }
.lang-card.kb-focus { border-color: rgba(200,180,255,0.5) !important; transform: translateY(-2px) scale(1.05) !important; box-shadow: 0 0 28px rgba(123,94,232,0.5), 0 0 48px rgba(123,94,232,0.15), 0 8px 24px rgba(123,94,232,0.3) !important; filter: brightness(1.12) !important; }
.btn.kb-focus { transform: translateY(-2px) scale(1.08) !important; box-shadow: 0 0 28px rgba(123,94,232,0.5), 0 0 48px rgba(123,94,232,0.2), 0 8px 24px rgba(123,94,232,0.35) !important; filter: brightness(1.15) !important; }
.topnav-item.kb-focus { outline: 3px solid rgba(200,180,255,0.5) !important; outline-offset: 3px !important; border-color: rgba(200,180,255,0.5) !important; box-shadow: 0 0 24px rgba(123,94,232,0.4) !important; color: var(--purple-accent) !important; filter: brightness(1.12) !important; }
.topnav-logo-wrap.kb-focus { outline: 3px solid rgba(200,180,255,0.5) !important; outline-offset: 3px !important; border-color: var(--purple-accent) !important; box-shadow: 0 0 24px rgba(123,94,232,0.4) !important; }
[role=button].kb-focus { outline: 3px solid rgba(200,180,255,0.5) !important; outline-offset: 3px !important; transform: translateY(-2px) scale(1.05) !important; filter: brightness(1.12) !important; box-shadow: 0 0 28px rgba(123,94,232,0.5), 0 0 48px rgba(123,94,232,0.15), 0 8px 24px rgba(123,94,232,0.3) !important; }
:root.dark .kb-focus { outline-color: rgba(200,180,255,0.6) !important; box-shadow: 0 0 32px rgba(150,120,255,0.6), 0 0 56px rgba(123,94,232,0.25), 0 8px 28px rgba(123,94,232,0.4) !important; }

/* Ghost tile warmth on hover/select — light mode only */
.ghost-tile { transition: transform 0.15s, box-shadow 0.15s, filter 0.15s, background 0.2s !important; }
:root:not(.dark) .ghost-tile.kb-focus, :root:not(.dark) .ghost-tile:hover {
  background: linear-gradient(180deg, #EDE8FF 0%, #DDD4FF 35%, #D0C6FF 65%, #C8BCFF 100%) !important;
}

/* ── Hover glow ring — ghost tiles and home tiles ── */
.ghost-tile:hover, .home-tile:hover {
  outline: 3px solid rgba(200,180,255,0.5); outline-offset: 3px;
  transform: translateY(-2px) scale(1.05) !important; filter: brightness(1.12) !important;
  box-shadow: 0 0 28px rgba(123,94,232,0.5), 0 0 48px rgba(123,94,232,0.15), 0 8px 24px rgba(123,94,232,0.3) !important;
  z-index: 5; position: relative;
}
:root.dark .ghost-tile:hover, :root.dark .home-tile:hover {
  outline-color: rgba(200,180,255,0.6);
  box-shadow: 0 0 32px rgba(150,120,255,0.6), 0 0 56px rgba(123,94,232,0.25), 0 8px 28px rgba(123,94,232,0.4) !important;
}

/* ── XP BAR ── */
.xpbar { height: 12px; background: var(--gray-100); border-radius: 12px; overflow: hidden; box-shadow: inset 0 3px 5px rgba(0,0,0,0.12), 0 1px 0 rgba(255,255,255,0.8); }
.xpbar-fill {
  height: 100%; border-radius: 12px;
  background: linear-gradient(180deg, #C0AEFA 0%, #B8A8FA 15%, #7B5EE8 50%, #5840B8 100%);
  transition: width 0.6s cubic-bezier(0.16,1,0.3,1);
  box-shadow: 0 0 14px rgba(123,94,232,0.5), inset 0 2px 0 rgba(255,255,255,0.5), inset 0 -1px 0 rgba(0,0,0,0.15);
  position: relative;
  overflow: hidden;
}
.xpbar-fill::after {
  content: ''; position: absolute; top: 0; left: 5%; right: 5%; height: 45%;
  border-radius: 0 0 50% 50%;
  background: linear-gradient(180deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.15) 60%, transparent 100%);
  pointer-events: none;
}

/* ── BADGES ── */
.badge {
  display: inline-flex; align-items: center; gap: 5px;
  padding: 4px 12px; border-radius: 20px; font-size: 12px;
  font-weight: 700; font-family: 'DM Sans', sans-serif;
}
.badge-gold { background: var(--gold-light); color: var(--gold-dark); }
.badge-blue { background: var(--blue-light); color: var(--blue-dark); }
.badge-teal { background: var(--teal-light); color: var(--teal-dark); }
.badge-coral { background: var(--coral-light); color: var(--coral); }

/* ── LANGUAGE CARDS ── */
.lang-card {
  background: var(--card-bg); border: 2px solid var(--card-border);
  border-radius: var(--radius); padding: 18px 14px; cursor: pointer;
  transition: all 0.2s; display: flex; flex-direction: column;
  align-items: center; gap: 6px; min-width: 100px;
  box-shadow: var(--card-shadow) !important;
  backdrop-filter: var(--glass-blur); -webkit-backdrop-filter: var(--glass-blur);
  position: relative; overflow: hidden;
}
.lang-card::before {
  content: ''; position: absolute; top: 0; left: 0; right: 0; height: 50%;
  background: linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 100%);
  pointer-events: none; border-radius: inherit; z-index: 1;
}
.lang-card:hover { border-color: rgba(123,94,232,0.3); transform: translateY(-3px); box-shadow: var(--card-shadow-hover) !important; }
.lang-card.active { border-color: rgba(123,94,232,0.45); background: linear-gradient(180deg, #f2eeff 0%, #e8e0ff 100%); box-shadow: 0 6px 20px rgba(123,94,232,0.2), inset 0 2px 1px rgba(255,255,255,0.8) !important; }
.lang-card .flag { font-size: 32px; }
.lang-card .name { font-family: 'DM Sans', sans-serif; font-weight: 700; font-size: 13px; color: var(--gray-700); }
.lang-card .native { font-size: 11px; color: var(--gray-400); }

/* ── FLASHCARD ── */
.fc-wrap { perspective: 1000px; width: 100%; max-width: 400px; height: 260px; margin: 0 auto; }
.fc-inner {
  width: 100%; height: 100%; position: relative;
  transition: transform 0.5s cubic-bezier(0.16,1,0.3,1);
  transform-style: preserve-3d; cursor: pointer;
}
.fc-inner.flipped { transform: rotateY(180deg); }
.fc-face {
  position: absolute; inset: 0; border-radius: var(--radius-lg);
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  backface-visibility: hidden; padding: 28px; border: 2px solid var(--gray-100);
}
.fc-front {
  background: var(--card-bg);
  box-shadow: 0 12px 44px rgba(0,0,0,0.1), var(--card-shadow) !important;
  backdrop-filter: var(--glass-blur); -webkit-backdrop-filter: var(--glass-blur);
  position: relative; overflow: hidden;
}
.fc-front::before {
  content: ''; position: absolute; top: 0; left: 0; right: 0; height: 50%;
  background: linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 100%);
  pointer-events: none; border-radius: inherit; z-index: 1;
}
.fc-back {
  background: linear-gradient(135deg, var(--teal-light), #c8f0e4);
  border-color: var(--teal); transform: rotateY(180deg);
  box-shadow: 0 12px 44px rgba(0,0,0,0.1), 0 4px 12px rgba(0,0,0,0.05),
    inset 0 2px 1px rgba(255,255,255,0.8), inset 0 -3px 1px rgba(0,0,0,0.04) !important;
}
.fc-word { font-family: 'DM Sans', sans-serif; font-size: 34px; font-weight: 800; color: var(--gray-800); margin-bottom: 6px; }
.fc-phonetic { color: var(--gray-400); font-size: 15px; }
.fc-cat { font-size: 11px; color: var(--blue); text-transform: uppercase; letter-spacing: 2px; font-weight: 700; font-family: 'DM Sans', sans-serif; margin-bottom: 8px; }
.fc-trans { font-family: 'DM Sans', sans-serif; font-size: 30px; font-weight: 800; color: var(--teal-dark); }
.fc-label { color: var(--gray-400); font-size: 13px; margin-top: 10px; }

/* ── QUIZ ── */
.quiz-opt {
  background: var(--card-bg); border: 2px solid var(--card-border);
  border-radius: 14px; padding: 14px 18px; cursor: pointer;
  transition: all 0.2s; font-size: 15px; font-weight: 600;
  display: flex; align-items: center; gap: 12px;
  font-family: 'Nunito', 'system-ui', sans-serif;
  box-shadow: var(--card-shadow) !important;
  backdrop-filter: var(--glass-blur); -webkit-backdrop-filter: var(--glass-blur);
  position: relative; overflow: hidden;
  word-break: keep-all;
}
.quiz-opt::before {
  content: ''; position: absolute; top: 0; left: 0; right: 0; height: 50%;
  background: linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 100%);
  pointer-events: none; border-radius: inherit; z-index: 1;
}
.quiz-opt:hover { border-color: rgba(123,94,232,0.4); background: linear-gradient(180deg, #f5f0ff 0%, #ede4ff 100%); transform: translateY(-2px); box-shadow: 0 8px 24px rgba(123,94,232,0.15), 0 0 20px rgba(123,94,232,0.08), var(--card-shadow-hover) !important; }
.quiz-opt.correct { border-color: var(--teal); background: var(--teal-light); color: var(--teal-dark); }
.quiz-opt.wrong { border-color: var(--coral); background: var(--coral-light); color: var(--coral); }
.quiz-opt.dis { pointer-events: none; opacity: 0.45; }
.quiz-letter {
  width: 30px; height: 30px; border-radius: 8px; background: rgba(123,94,232,0.08);
  display: flex; align-items: center; justify-content: center;
  font-weight: 800; font-size: 12px; color: var(--purple-accent-text); font-family: 'DM Sans', sans-serif;
  flex-shrink: 0; letter-spacing: 0.5px;
}
.quiz-opt.correct .quiz-letter { background: var(--teal); color: white; }
.quiz-opt.wrong .quiz-letter { background: var(--coral); color: white; }
/* Dark glass quiz options */
:root.dark .quiz-opt {
  background: linear-gradient(180deg, rgba(45,40,75,0.6) 0%, rgba(32,30,60,0.55) 100%);
  backdrop-filter: blur(16px) saturate(1.2); -webkit-backdrop-filter: blur(16px) saturate(1.2);
  border: 2px solid rgba(160,140,240,0.15);
  color: var(--gray-800);
  box-shadow:
    0 4px 16px rgba(0,0,0,0.25),
    0 0 8px rgba(140,120,220,0.06),
    inset 0 1px 0 rgba(255,255,255,0.14),
    inset 0 -2px 0 rgba(0,0,0,0.12) !important;
}
:root.dark .quiz-opt:hover {
  border-color: rgba(168,136,255,0.5);
  background: linear-gradient(180deg, rgba(60,48,100,0.7) 0%, rgba(45,38,80,0.65) 100%);
  box-shadow:
    0 0 28px rgba(168,136,255,0.3),
    0 0 48px rgba(123,94,232,0.1),
    0 8px 24px rgba(123,94,232,0.15),
    inset 0 1px 0 rgba(255,255,255,0.2),
    inset 0 -2px 0 rgba(0,0,0,0.12) !important;
  transform: translateY(-2px);
  filter: brightness(1.12);
}
:root.dark .quiz-opt.correct {
  border-color: var(--teal);
  background: rgba(80,224,192,0.15);
  color: var(--teal-dark);
  box-shadow: 0 0 20px rgba(80,224,192,0.25), 0 0 40px rgba(80,224,192,0.08), inset 0 1px 0 rgba(255,255,255,0.12);
}
:root.dark .quiz-opt.wrong {
  border-color: var(--coral);
  background: rgba(245,136,136,0.15);
  color: var(--coral);
  box-shadow: 0 0 20px rgba(245,136,136,0.2), inset 0 1px 0 rgba(255,255,255,0.08);
}
:root.dark .quiz-letter { background: rgba(168,136,255,0.25); color: var(--gray-700); }

/* ── CHAT ── */
.chat-wrap {
  display: flex; flex-direction: column; height: calc(100vh - 200px);
  max-height: 580px; background: var(--gray-50); border-radius: var(--radius-lg);
  border: 2px solid var(--gray-100); overflow: hidden;
}
.chat-msgs { flex: 1; overflow-y: auto; padding: 20px; display: flex; flex-direction: column; gap: 14px; }
.chat-bub {
  max-width: 78%; padding: 12px 16px; border-radius: 18px;
  font-size: 15px; line-height: 1.55; animation: fadeUp 0.3s ease;
}
.chat-bub.ai {
  background: var(--white); border: 1.5px solid var(--gray-100);
  align-self: flex-start; border-bottom-left-radius: 6px;
  box-shadow: var(--shadow-sm);
}
.chat-bub.user {
  background: var(--blue); color: white;
  align-self: flex-end; border-bottom-right-radius: 6px;
  box-shadow: var(--shadow-blue);
}
.chat-hint {
  background: var(--gold-light); border: 1.5px solid rgba(245,166,35,0.2);
  border-radius: var(--radius-sm); padding: 8px 12px; font-size: 13px;
  color: var(--gold-dark); margin-top: 4px; max-width: 78%;
}
.chat-nw {
  background: var(--blue-light); border: 1.5px solid rgba(74,143,231,0.2);
  border-radius: 8px; padding: 3px 10px; font-size: 11px; color: var(--blue-dark);
  font-weight: 700;
}
.chat-bar {
  display: flex; gap: 10px; padding: 14px 16px;
  border-top: 2px solid var(--gray-100); background: var(--white);
}
.chat-input {
  flex: 1; background: var(--white); border: 2.5px solid var(--gray-200);
  border-radius: 16px; padding: 14px 18px; color: var(--gray-700);
  font-size: 16px; font-family: 'Source Sans 3', sans-serif; outline: none;
  font-weight: 600; letter-spacing: 0.2px;
  box-shadow: inset 0 2px 6px rgba(0,0,0,0.04), 0 2px 8px rgba(0,0,0,0.03);
  transition: all 0.2s;
}
.chat-input:focus { border-color: var(--purple-accent); background: var(--white); box-shadow: inset 0 2px 6px rgba(0,0,0,0.03), 0 0 0 4px rgba(123,94,232,0.12), 0 2px 12px rgba(123,94,232,0.08); }
.chat-input::placeholder { color: var(--gray-300); font-weight: 500; }
.chat-input:disabled { opacity: 0.6; background: var(--gray-50); }
:root.dark .chat-input { background: rgba(40,38,65,0.8); border-color: rgba(140,120,220,0.2); color: #E8E4F0; box-shadow: inset 0 2px 8px rgba(0,0,0,0.2), 0 0 16px rgba(123,94,232,0.06); }
:root.dark .chat-input:focus { border-color: rgba(160,140,240,0.5); box-shadow: inset 0 2px 8px rgba(0,0,0,0.15), 0 0 0 4px rgba(123,94,232,0.15), 0 0 24px rgba(123,94,232,0.1); }
:root.dark .chat-input::placeholder { color: rgba(180,170,210,0.4); }
.chat-starter {
  background: var(--white); border: 2px solid var(--gray-200);
  border-radius: var(--radius-sm); padding: 10px 14px; cursor: pointer;
  transition: all 0.15s; font-size: 14px; color: var(--gray-500); text-align: left;
}
.chat-starter:hover { border-color: var(--blue); color: var(--blue); background: var(--blue-pale); }

/* ── GRAMMAR ── */
.gram-card {
  background: var(--white); border: 2px solid var(--gray-100);
  border-radius: var(--radius); padding: 20px; border-left: 4px solid var(--blue);
  transition: all 0.2s;
}
.gram-card:hover { box-shadow: var(--shadow); }

/* ── ACHIEVEMENT ── */
.ach-card {
  display: flex; align-items: center; gap: 14px; padding: 14px 18px;
  background: var(--card-bg); border: 2px solid var(--card-border);
  border-radius: var(--radius); transition: all 0.2s;
  box-shadow: var(--card-shadow);
  backdrop-filter: var(--glass-blur); -webkit-backdrop-filter: var(--glass-blur);
  position: relative; overflow: hidden;
}
.ach-card::before {
  content: ''; position: absolute; top: 0; left: 0; right: 0; height: 50%;
  background: linear-gradient(180deg, rgba(255,255,255,0.5) 0%, transparent 100%);
  pointer-events: none; border-radius: inherit; z-index: 1;
}
.ach-card.done { border-color: var(--gold); background: linear-gradient(180deg, #fffcf0, #fff8e0); }
.ach-card.lock { opacity: 0.4; }
.ach-icon { font-size: 28px; }

/* ── TOAST ── */
.toast {
  position: fixed; top: 80px; right: 24px; z-index: 999;
  background: var(--white); border: 2px solid var(--teal);
  border-radius: var(--radius); padding: 14px 22px;
  box-shadow: var(--shadow-lg); animation: slideIn 0.35s cubic-bezier(0.16,1,0.3,1);
  display: flex; align-items: center; gap: 10px;
}

/* ── ONBOARDING ── */
.ob-overlay {
  position: fixed; inset: 0; z-index: 200;
  background: linear-gradient(135deg, #F0EBFF, #E8E0FF, #F5F0FF);
  display: flex; align-items: center; justify-content: center;
  overflow-y: auto;
}
.ob-card {
  max-width: 540px; width: 92%; padding: 48px 36px; text-align: center;
  animation: fadeUp 0.4s ease; background: var(--card-bg); opacity: 0.98;
  backdrop-filter: var(--glass-blur); -webkit-backdrop-filter: var(--glass-blur);
  border-radius: 28px; box-shadow: var(--card-shadow);
  border: 2px solid var(--card-border);
  position: relative;
}
.ob-card input {
  font-family: 'DM Sans', sans-serif;
  transition: border-color 0.2s, box-shadow 0.2s;
}
.ob-card input:focus {
  border-color: var(--purple-accent) !important;
  box-shadow: 0 0 0 3px rgba(123,94,232,0.12);
  outline: none;
}
:root.dark .ob-overlay {
  background: linear-gradient(135deg, #1A1638, #1E1840, #16162B);
}

/* ── ANIMATIONS ── */
@keyframes fadeUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: none; } }
@keyframes slideIn { from { opacity: 0; transform: translateX(30px); } to { opacity: 1; transform: translateX(0); } }
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
@keyframes popIn { from { opacity: 0; transform: scale(0.9); } to { opacity: 1; transform: scale(1); } }
@keyframes pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.5; } }
@keyframes dfPulse { 0%,100% { box-shadow: 0 0 0 3px rgba(123,94,232,0.2); } 50% { box-shadow: 0 0 0 6px rgba(123,94,232,0.35); } }
@keyframes pop { 0%{transform:translateY(0) scale(1);opacity:1} 100%{transform:translateY(-70px) scale(1.15);opacity:0} }
@keyframes bounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-4px)} }
@keyframes bubblePop { from{opacity:0;transform:scale(0.82) translateY(8px)} to{opacity:1;transform:scale(1) translateY(0)} }
@keyframes confettiFall { 0%{transform:translateY(-10px) rotate(0deg) scale(1);opacity:1} 70%{opacity:1} 100%{transform:translateY(calc(100vh + 20px)) rotate(var(--confetti-spin,720deg)) scale(0.5);opacity:0} }
@keyframes confettiBurst { 0%{transform:translate(0,0) scale(0);opacity:0} 15%{transform:translate(var(--cx),var(--cy)) scale(1.2);opacity:1} 100%{transform:translate(var(--cx),calc(var(--cy) + 300px)) scale(0.3);opacity:0} }
.confetti-container{position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:9999;overflow:hidden}
.confetti-piece{position:absolute;width:10px;height:10px;border-radius:2px;animation:confettiFall var(--confetti-dur,2.5s) cubic-bezier(.2,.8,.3,1) forwards;animation-delay:var(--confetti-delay,0s);left:var(--confetti-x,50%);top:-10px;}
.anim { animation: fadeUp 0.35s ease both; }
.d1{animation-delay:.05s}.d2{animation-delay:.1s}.d3{animation-delay:.15s}.d4{animation-delay:.2s}

/* ── SCROLLBAR ── */
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: var(--gray-200); border-radius: 3px; }

/* ── RESPONSIVE ── */
@media (max-width: 700px) {
  .main { padding: 20px 16px; }
  .topnav { padding: 0 12px; }
  .topnav-item span:not(.icon) { display: none; }
  .topnav-item { padding: 8px 10px; }
}

/* ── CURRICULUM SEARCH FLOAT (D113) ── */
.sf-panel{position:fixed;right:14px;top:190px;z-index:9998;width:min(360px,calc(100vw - 28px));max-height:calc(100vh - 220px);display:flex;flex-direction:column;border-radius:20px;background:var(--card-bg);border:1.5px solid rgba(123,94,232,0.22);box-shadow:0 16px 48px rgba(123,94,232,0.18),0 4px 16px rgba(0,0,0,0.1),inset 0 2px 0 rgba(255,255,255,0.92),inset 0 -2px 0 rgba(0,0,0,0.04);overflow:hidden;}
:root.dark .sf-panel{border-color:rgba(160,140,255,0.3);box-shadow:0 16px 48px rgba(0,0,0,0.45),0 4px 16px rgba(123,94,232,0.32),inset 0 2px 0 rgba(255,255,255,0.12),inset 0 -2px 0 rgba(0,0,0,0.25);}
.sf-hdr{padding:11px 13px;display:flex;align-items:center;gap:9px;background:linear-gradient(180deg,rgba(255,255,255,0.97)0%,rgba(248,246,255,0.91)100%);border-bottom:1.5px solid rgba(123,94,232,0.1);border-radius:20px 20px 0 0;flex-shrink:0;}
:root.dark .sf-hdr{background:linear-gradient(180deg,rgba(48,42,92,0.99)0%,rgba(38,34,74,0.97)100%);border-bottom-color:rgba(160,140,255,0.15);}
.sf-inp{flex:1;border:none;outline:none;background:transparent;font-size:14px;font-family:'Nunito','DM Sans',system-ui,sans-serif;font-weight:600;color:var(--gray-800);caret-color:#7B5EE8;min-width:0;}
.sf-inp::placeholder{color:var(--gray-300);font-weight:500;}
.sf-clr{cursor:pointer;font-size:11px;color:var(--gray-400);flex-shrink:0;padding:2px 7px;border-radius:6px;background:var(--gray-100);font-weight:700;transition:background .12s;}
.sf-clr:hover{background:var(--gray-200);}:root.dark .sf-clr{background:rgba(255,255,255,0.09);}:root.dark .sf-clr:hover{background:rgba(255,255,255,0.16);}
.sf-cnt{padding:5px 13px;font-size:10px;font-weight:800;color:var(--gray-400);background:var(--gray-50);border-bottom:1px solid var(--gray-100);letter-spacing:.4px;text-transform:uppercase;flex-shrink:0;}
:root.dark .sf-cnt{background:rgba(22,20,48,0.7);border-bottom-color:rgba(255,255,255,0.06);}
.sf-list{overflow-y:auto;flex:1;}
.sf-row{display:flex;align-items:flex-start;gap:9px;padding:9px 13px;border-bottom:1px solid var(--gray-100);cursor:pointer;transition:background .12s;}
.sf-row:last-child{border-bottom:none;}
.sf-row:hover{background:linear-gradient(90deg,rgba(123,94,232,0.08)0%,transparent 100%);}
:root.dark .sf-row{border-bottom-color:rgba(255,255,255,0.06);}
:root.dark .sf-row:hover{background:linear-gradient(90deg,rgba(123,94,232,0.18)0%,transparent 100%);}
.sf-ico{font-size:17px;flex-shrink:0;width:28px;height:28px;border-radius:7px;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,rgba(123,94,232,0.11),rgba(123,94,232,0.05));}
.sf-body{flex:1;min-width:0;}
.sf-ttl{font-size:12px;font-weight:700;color:var(--gray-700);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
.sf-meta{font-size:10.5px;color:var(--gray-400);margin-top:2px;display:flex;align-items:center;gap:3px;flex-wrap:wrap;}
.sf-snip{font-size:11px;color:#7B5EE8;margin-top:3px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
:root.dark .sf-snip{color:#B09DF8;}
.sf-empty{padding:26px 13px;text-align:center;color:var(--gray-400);font-size:12.5px;font-weight:500;line-height:1.7;}
.stag{display:inline-block;padding:2px 7px;border-radius:14px;font-size:10px;font-weight:800;letter-spacing:.3px;}
.stag-cefr{background:linear-gradient(135deg,rgba(123,94,232,0.14),rgba(123,94,232,0.07));color:#7B5EE8;border:1px solid rgba(123,94,232,0.2);}
:root.dark .stag-cefr{background:rgba(123,94,232,0.24);color:#C0AEFF;border-color:rgba(123,94,232,0.34);}
.stag-type{background:linear-gradient(135deg,rgba(46,205,167,0.14),rgba(46,205,167,0.07));color:#0D7D5C;border:1px solid rgba(46,205,167,0.2);}
:root.dark .stag-type{background:rgba(46,205,167,0.18);color:#70DFC0;border-color:rgba(46,205,167,0.28);}
.stag-prev{background:rgba(245,166,35,0.12);color:#8a5800;border:1px solid rgba(245,166,35,0.25);font-size:9px;}
:root.dark .stag-prev{background:rgba(245,166,35,0.18);color:#F5C040;border-color:rgba(245,166,35,0.3);}
/* ── STEP PREVIEW MODAL ── */
.sp-ov{position:fixed;inset:0;background:rgba(0,0,0,0.52);z-index:10001;display:flex;align-items:center;justify-content:center;padding:20px;backdrop-filter:blur(7px);-webkit-backdrop-filter:blur(7px);}
.sp-wrap{width:min(460px,94vw);max-height:calc(100vh - 60px);display:flex;flex-direction:column;border-radius:24px;overflow:hidden;background:var(--card-bg);border:1.5px solid var(--card-border);box-shadow:0 24px 72px rgba(0,0,0,0.18),0 8px 24px rgba(123,94,232,0.14),inset 0 2px 0 rgba(255,255,255,0.92),inset 0 -2px 0 rgba(0,0,0,0.04);}
:root.dark .sp-wrap{box-shadow:0 24px 72px rgba(0,0,0,0.55),0 8px 24px rgba(123,94,232,0.28),inset 0 2px 0 rgba(255,255,255,0.12),inset 0 -2px 0 rgba(0,0,0,0.28);border-color:rgba(255,255,255,0.1);}
.sp-bar{padding:11px 14px;display:flex;align-items:center;gap:9px;background:linear-gradient(180deg,rgba(123,94,232,0.08)0%,rgba(123,94,232,0.03)100%);border-bottom:1.5px solid rgba(123,94,232,0.12);flex-shrink:0;}
:root.dark .sp-bar{background:linear-gradient(180deg,rgba(123,94,232,0.22)0%,rgba(123,94,232,0.1)100%);border-bottom-color:rgba(160,140,255,0.22);}
.sp-body{overflow-y:auto;flex:1;}
.sp-card{margin:14px;border-radius:16px;background:linear-gradient(180deg,#fff 0%,#fafafe 50%,#f5f4fb 100%);border:1.5px solid rgba(123,94,232,0.1);border-left:4px solid #7B5EE8;box-shadow:0 3px 12px rgba(0,0,0,0.06),inset 0 2px 0 rgba(255,255,255,0.9);}
:root.dark .sp-card{background:var(--card-bg);border-color:rgba(160,140,255,0.2);border-left-color:#7B5EE8;}
.sp-word{text-align:center;padding:22px 18px 4px;font-size:28px;font-weight:800;color:#7B5EE8;font-family:'Quicksand','DM Sans',system-ui,sans-serif;line-height:1.2;}
.sp-phon{text-align:center;font-size:13px;color:var(--gray-400);font-weight:600;padding:2px 14px 4px;}
.sp-trans{text-align:center;font-size:16px;font-weight:700;color:#2ECDA7;padding:0 14px 14px;}
.sp-kind{text-align:center;padding-bottom:8px;font-size:10.5px;color:var(--gray-400);font-weight:700;text-transform:uppercase;letter-spacing:.6px;}
.sp-ex{margin:0 12px 12px;background:rgba(123,94,232,0.05);border-radius:11px;padding:10px 12px;border-left:3px solid rgba(123,94,232,0.28);}
.sp-ex-tgt{font-size:14px;font-weight:700;color:var(--gray-700);margin-bottom:3px;}
.sp-ex-src{font-size:12.5px;color:#2ECDA7;font-weight:600;}
.sp-note{margin:0 12px 14px;font-size:12px;color:var(--gray-500);line-height:1.5;padding:9px 11px;background:var(--gray-50);border-radius:9px;}
.sp-q{padding:16px 16px 10px;font-size:14.5px;font-weight:700;color:var(--gray-700);line-height:1.4;}
.sp-opt{display:flex;align-items:center;gap:8px;margin:5px 12px;padding:10px 12px;border-radius:11px;font-size:13px;font-weight:600;border:1.5px solid var(--gray-200);color:var(--gray-600);background:var(--gray-50);}
.sp-opt.correct{background:linear-gradient(135deg,rgba(46,205,167,0.12),rgba(46,205,167,0.05));border-color:rgba(46,205,167,0.35);color:#0D7D5C;}
:root.dark .sp-opt{background:rgba(255,255,255,0.05);border-color:rgba(255,255,255,0.1);color:var(--gray-400);}
:root.dark .sp-opt.correct{background:rgba(46,205,167,0.18);border-color:rgba(46,205,167,0.32);color:#70DFC0;}
.sp-tip-ttl{padding:16px 16px 6px;font-size:15px;font-weight:800;color:#7B5EE8;}
.sp-tip-txt{padding:0 16px 16px;font-size:13px;color:var(--gray-600);line-height:1.65;white-space:pre-wrap;}
.sp-pair-row{display:flex;align-items:center;gap:10px;padding:8px 14px;border-bottom:1px solid var(--gray-100);}
.sp-pair-row:last-child{border-bottom:none;margin-bottom:8px;}
.sp-pair-tgt{font-size:14px;font-weight:700;color:#7B5EE8;flex:1;}
.sp-pair-src{font-size:13px;color:#2ECDA7;font-weight:600;flex:1;text-align:right;}
.sp-fb-sent{padding:16px 16px 8px;font-size:14.5px;font-weight:600;color:var(--gray-700);line-height:1.5;}
.sp-fb-ans{display:inline-block;background:linear-gradient(135deg,rgba(46,205,167,0.14),rgba(46,205,167,0.06));border:1.5px solid rgba(46,205,167,0.35);border-radius:7px;padding:1px 9px;color:#0D7D5C;font-weight:700;font-size:14px;margin:0 2px;}
:root.dark .sp-fb-ans{background:rgba(46,205,167,0.2);border-color:rgba(46,205,167,0.35);color:#70DFC0;}
.sp-intro-title{padding:20px 16px 6px;font-size:17px;font-weight:800;color:#7B5EE8;text-align:center;}
.sp-intro-desc{padding:0 16px 14px;font-size:13px;color:var(--gray-600);text-align:center;line-height:1.6;}
.sp-goal{display:flex;align-items:center;gap:8px;padding:5px 16px;font-size:13px;color:var(--gray-700);font-weight:600;}
.sp-xbtn{flex-shrink:0;background:none;border:1.5px solid var(--gray-200);border-radius:8px;width:28px;height:28px;cursor:pointer;display:flex;align-items:center;justify-content:center;color:var(--gray-400);font-size:12px;font-weight:700;transition:all .15s;}
.sp-xbtn:hover{background:var(--gray-100);color:var(--gray-600);}
:root.dark .sp-xbtn{border-color:rgba(255,255,255,0.15);}:root.dark .sp-xbtn:hover{background:rgba(255,255,255,0.1);}
@media(max-width:700px){.sf-panel{right:10px;top:186px;width:calc(100vw - 20px);}.sp-wrap{max-height:calc(100vh - 40px);}}
`;


// ━━━━━━━━━━ SMALL COMPONENTS ━━━━━━━━━━

function Toast({message,icon,onDone}){
  useEffect(()=>{const t=setTimeout(onDone,3000);return()=>clearTimeout(t)},[]);
  return <div className="toast"><span style={{fontSize:22}}>{icon}</span><span className="hd" style={{fontWeight:700,fontSize:14}}>{message}</span></div>;
}

function XpPop({amount,x,y}){
  return <div style={{position:"fixed",left:x,top:y,zIndex:9999,pointerEvents:"none",animation:"pop 1s ease forwards",fontFamily:"'DM Sans',sans-serif",fontWeight:800,fontSize:18,color:"var(--gold-dark)",textShadow:"0 0 8px rgba(245,166,35,0.4)"}}>+{amount} XP</div>;
}

function TopNav({page,setPage,user,baseLang="en"}){
  const lv = getLevel(user.xp);
  const items=[{id:"home",icon:"house",label:t("nav_home",baseLang)},{id:"flashcards",icon:"abc_blocks",label:t("flash_title",baseLang)},{id:"quiz",icon:"checkmark_green",label:t("nav_quiz",baseLang)},{id:"chat",icon:"robot",label:t("nav_chat",baseLang)},{id:"grammar",icon:"books_stack",label:t("grammar_title",baseLang)},{id:"profile",icon:"avatar",label:t("nav_profile",baseLang)}];
  return(
    <div className="topnav">
      <div className="topnav-logo" onClick={()=>setPage("home")}>LingoVerse</div>
      <div className="topnav-items">
        {items.map(i=>(
          <div key={i.id} className={`topnav-item ${page===i.id?"active":""}`} onClick={()=>setPage(i.id)}>
            <span className="icon">{ICON_REG[i.icon]?<AppIcon name={i.icon} size={28}/>:i.icon}</span><span>{i.label}</span>
          </div>
        ))}
      </div>
      <div className="topnav-right">
        <div className="topnav-stat stat-xp"><AppIcon name="lightning_bolt" size={20} style={{marginRight:3}}/>{user.xp}</div>
        <div className="topnav-stat stat-streak"><AppIcon name="flame" size={20} style={{marginRight:3}}/>{user.streak}</div>
        <div className="topnav-stat stat-level">Lv.{lv}</div>
      </div>
    </div>
  );
}

function LangSel({selected,onSelect}){
  return(
    <div style={{display:"flex",gap:10,flexWrap:"wrap",justifyContent:"center"}}>
      {LANGUAGES.map(l=>(
        <div key={l.code} className={`lang-card ${selected===l.code?"active":""}`} onClick={()=>onSelect(l.code)}>
          <CountryFlag code={l.code} size={32} variant="plain"/><div className="name">{l.name}</div><div className="native">{l.native}</div>
        </div>
      ))}
    </div>
  );
}

// ━━━━━━━━━━ BRAND SVG ICON LIBRARY ━━━━━━━━━━
// Hand-crafted vector illustrations. Not emoji. Not clipart. Branded.

function BrandIcon({name,size=32}){
  const s=size;
  const icons={
    // ── BAND ICONS (Chapter select) ──
    "band-a1":()=><svg width={s} height={s} viewBox="0 0 32 32" fill="none">
      <defs><linearGradient id="a1g" x1="16" y1="4" x2="16" y2="28" gradientUnits="userSpaceOnUse"><stop stopColor="#6DD5A0"/><stop offset="1" stopColor="#2BAF6A"/></linearGradient></defs>
      <ellipse cx="16" cy="27" rx="6" ry="2" fill="#2BAF6A" opacity=".18"/>
      <rect x="14.5" y="14" width="3" height="13" rx="1.5" fill="url(#a1g)"/>
      <ellipse cx="16" cy="12" rx="5.5" ry="6" fill="url(#a1g)"/>
      <ellipse cx="16" cy="11" rx="3.5" ry="4" fill="#9EECC4" opacity=".5"/>
      <path d="M12 18c-3-2-4.5-5-3-8" stroke="#2BAF6A" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
      <circle cx="9" cy="10" r="2.5" fill="url(#a1g)" opacity=".7"/>
    </svg>,

    "band-a2":()=><svg width={s} height={s} viewBox="0 0 32 32" fill="none">
      <defs><linearGradient id="a2g" x1="16" y1="2" x2="16" y2="30" gradientUnits="userSpaceOnUse"><stop stopColor="#50E0C0"/><stop offset="1" stopColor="#1A9B6E"/></linearGradient></defs>
      <ellipse cx="16" cy="28" rx="7" ry="2" fill="#1A9B6E" opacity=".18"/>
      <rect x="14.5" y="12" width="3" height="16" rx="1.5" fill="url(#a2g)"/>
      <ellipse cx="11" cy="10" rx="5" ry="5.5" fill="url(#a2g)"/>
      <ellipse cx="21" cy="10" rx="5" ry="5.5" fill="url(#a2g)"/>
      <ellipse cx="11" cy="9" rx="3" ry="3.5" fill="#9EECC4" opacity=".45"/>
      <ellipse cx="21" cy="9" rx="3" ry="3.5" fill="#9EECC4" opacity=".45"/>
      <path d="M8 20c-3-1.5-4-4.5-2.5-7" stroke="#1A9B6E" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
      <circle cx="5.5" cy="13" r="2" fill="url(#a2g)" opacity=".6"/>
      <path d="M24 20c3-1.5 4-4.5 2.5-7" stroke="#1A9B6E" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
      <circle cx="26.5" cy="13" r="2" fill="url(#a2g)" opacity=".6"/>
    </svg>,

    "band-b1":()=><svg width={s} height={s} viewBox="0 0 32 32" fill="none">
      <defs><linearGradient id="b1g" x1="16" y1="4" x2="16" y2="28" gradientUnits="userSpaceOnUse"><stop stopColor="#7C9CF0"/><stop offset="1" stopColor="#4A6BD6"/></linearGradient></defs>
      <rect x="7" y="18" width="18" height="5" rx="1" fill="#E8A44A" stroke="#D4933A" strokeWidth=".5"/>
      <rect x="6" y="12" width="18" height="5" rx="1" fill="url(#b1g)" stroke="#4A6BD6" strokeWidth=".5"/>
      <rect x="8" y="6" width="18" height="5" rx="1" fill="#7B5EE8" stroke="#6545C8" strokeWidth=".5"/>
      <rect x="8" y="13" width="3" height="3" rx=".5" fill="rgba(255,255,255,.3)"/>
      <rect x="7.5" y="7" width="3" height="3" rx=".5" fill="rgba(255,255,255,.3)"/>
      <rect x="9" y="19" width="3" height="3" rx=".5" fill="rgba(255,255,255,.3)"/>
      <line x1="13" y1="14.5" x2="22" y2="14.5" stroke="rgba(255,255,255,.25)" strokeWidth="1"/>
      <line x1="12.5" y1="8.5" x2="24" y2="8.5" stroke="rgba(255,255,255,.25)" strokeWidth="1"/>
      <line x1="14" y1="20.5" x2="23" y2="20.5" stroke="rgba(255,255,255,.25)" strokeWidth="1"/>
      <ellipse cx="16" cy="27" rx="8" ry="1.5" fill="#4A6BD6" opacity=".12"/>
    </svg>,

    "band-b2":()=><svg width={s} height={s} viewBox="0 0 32 32" fill="none">
      <defs><linearGradient id="b2g" x1="16" y1="3" x2="16" y2="29" gradientUnits="userSpaceOnUse"><stop stopColor="#F07070"/><stop offset="1" stopColor="#D03A3A"/></linearGradient></defs>
      <circle cx="16" cy="16" r="12" fill="url(#b2g)" opacity=".15"/>
      <circle cx="16" cy="16" r="9" fill="url(#b2g)" opacity=".25"/>
      <circle cx="16" cy="16" r="6" fill="url(#b2g)" opacity=".4"/>
      <circle cx="16" cy="16" r="3" fill="url(#b2g)"/>
      <circle cx="16" cy="16" r="1.2" fill="white"/>
      <path d="M16 2v4M16 26v4M2 16h4M26 16h4" stroke="#D03A3A" strokeWidth="1" strokeLinecap="round" opacity=".3"/>
    </svg>,

    "band-c1":()=><svg width={s} height={s} viewBox="0 0 32 32" fill="none">
      <defs><linearGradient id="c1g" x1="16" y1="1" x2="16" y2="24" gradientUnits="userSpaceOnUse"><stop stopColor="#FFD86B"/><stop offset="1" stopColor="#E8A020"/></linearGradient></defs>
      <path d="M16 2l3.7 7.5 8.3 1.2-6 5.8 1.4 8.3L16 21l-7.4 3.8 1.4-8.3-6-5.8 8.3-1.2z" fill="url(#c1g)" stroke="#D4900A" strokeWidth=".6"/>
      <path d="M16 5l2.4 5 5.5.8-4 3.8.9 5.5L16 17.5 11.2 20l.9-5.5-4-3.8 5.5-.8z" fill="rgba(255,255,255,.25)"/>
      <ellipse cx="16" cy="28" rx="7" ry="1.5" fill="#D4900A" opacity=".12"/>
    </svg>,

    "band-c2":()=><svg width={s} height={s} viewBox="0 0 32 32" fill="none">
      <defs><linearGradient id="c2g" x1="16" y1="4" x2="16" y2="24" gradientUnits="userSpaceOnUse"><stop stopColor="#FFD86B"/><stop offset=".5" stopColor="#E8A020"/><stop offset="1" stopColor="#C87A10"/></linearGradient></defs>
      <path d="M6 16l3-10h14l3 10c0 0-2 4-10 4s-10-4-10-4z" fill="url(#c2g)" stroke="#B87008" strokeWidth=".6"/>
      <path d="M6 16c0 0 2 4 10 4s10-4 10-4" stroke="#B87008" strokeWidth=".6" fill="none"/>
      <circle cx="9" cy="6" r="2.5" fill="url(#c2g)" stroke="#B87008" strokeWidth=".5"/>
      <circle cx="16" cy="4" r="2.5" fill="url(#c2g)" stroke="#B87008" strokeWidth=".5"/>
      <circle cx="23" cy="6" r="2.5" fill="url(#c2g)" stroke="#B87008" strokeWidth=".5"/>
      <rect x="9" y="13" width="3" height="3" rx="1" fill="#D03A3A" opacity=".7"/>
      <rect x="14.5" y="12" width="3" height="3" rx="1" fill="#4A8FE7" opacity=".7"/>
      <rect x="20" y="13" width="3" height="3" rx="1" fill="#2BAF6A" opacity=".7"/>
      <path d="M8 16.5c2 2.5 5 3.5 8 3.5s6-1 8-3.5" fill="rgba(255,255,255,.15)"/>
      <ellipse cx="16" cy="27" rx="8" ry="1.5" fill="#B87008" opacity=".12"/>
    </svg>,

    // ── UNIT ICONS ──
    "👋":()=><svg width={s} height={s} viewBox="0 0 32 32" fill="none">
      <defs><linearGradient id="wavg" x1="10" y1="4" x2="22" y2="28" gradientUnits="userSpaceOnUse"><stop stopColor="#FFD086"/><stop offset="1" stopColor="#E8A44A"/></linearGradient></defs>
      <path d="M20 6c1.1 0 2 .9 2 2v8l1-5c.3-1.1 1.4-1.7 2.4-1.4 1 .3 1.6 1.3 1.3 2.4l-2.5 10c-.8 3.2-3.6 5.5-7 5.5h-2.5c-4 0-7-3.2-7-7v-5c0-1.1.9-2 2-2s2 .9 2 2v3" stroke="#C87A10" strokeWidth="1.2" strokeLinecap="round" fill="url(#wavg)" opacity=".9"/>
      <path d="M14 14V7c0-1.1.9-2 2-2s2 .9 2 2v7M14 14V9c0-1.1-.9-2-2-2s-2 .9-2 2v8" stroke="#C87A10" strokeWidth="1.2" strokeLinecap="round" fill="url(#wavg)"/>
      <path d="M22 11l.5-2" stroke="#E8A44A" strokeWidth="2.5" strokeLinecap="round" opacity=".5"/>
      <circle cx="7" cy="6" r="1" fill="#E8A44A" opacity=".5"/>
      <circle cx="25" cy="4" r="1.2" fill="#E8A44A" opacity=".4"/>
      <path d="M5 10l-2-1M27 7l2-1" stroke="#E8A44A" strokeWidth="1" strokeLinecap="round" opacity=".35"/>
    </svg>,

    "🪪":()=><svg width={s} height={s} viewBox="0 0 32 32" fill="none">
      <defs><linearGradient id="idg" x1="4" y1="6" x2="28" y2="26" gradientUnits="userSpaceOnUse"><stop stopColor="#A78BFA"/><stop offset="1" stopColor="#7B5EE8"/></linearGradient></defs>
      <rect x="3" y="8" width="26" height="16" rx="3" fill="url(#idg)"/>
      <rect x="4" y="9" width="24" height="6" rx="1" fill="rgba(255,255,255,.12)"/>
      <circle cx="11" cy="19" r="3" fill="rgba(255,255,255,.25)"/>
      <circle cx="11" cy="18.5" r="1.5" fill="rgba(255,255,255,.4)"/>
      <rect x="17" y="17" width="9" height="1.5" rx=".75" fill="rgba(255,255,255,.3)"/>
      <rect x="17" y="20" width="6" height="1.5" rx=".75" fill="rgba(255,255,255,.2)"/>
    </svg>,

    "🔢":()=><svg width={s} height={s} viewBox="0 0 32 32" fill="none">
      <defs><linearGradient id="numg" x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse"><stop stopColor="#6AABF5"/><stop offset="1" stopColor="#4A8FE7"/></linearGradient></defs>
      <rect x="3" y="3" width="12" height="12" rx="3" fill="url(#numg)"/>
      <rect x="17" y="3" width="12" height="12" rx="3" fill="url(#numg)" opacity=".7"/>
      <rect x="3" y="17" width="12" height="12" rx="3" fill="url(#numg)" opacity=".7"/>
      <rect x="17" y="17" width="12" height="12" rx="3" fill="url(#numg)" opacity=".5"/>
      <text x="9" y="12.5" textAnchor="middle" fontSize="9" fontWeight="800" fill="white">1</text>
      <text x="23" y="12.5" textAnchor="middle" fontSize="9" fontWeight="800" fill="white">2</text>
      <text x="9" y="26.5" textAnchor="middle" fontSize="9" fontWeight="800" fill="white">3</text>
      <text x="23" y="26.5" textAnchor="middle" fontSize="9" fontWeight="800" fill="white">4</text>
    </svg>,

    "🍽️":()=><svg width={s} height={s} viewBox="0 0 32 32" fill="none">
      <defs><linearGradient id="fg" x1="16" y1="4" x2="16" y2="28" gradientUnits="userSpaceOnUse"><stop stopColor="#F5A0B0"/><stop offset="1" stopColor="#E06080"/></linearGradient></defs>
      <circle cx="16" cy="16" r="11" fill="url(#fg)" opacity=".15"/>
      <circle cx="16" cy="16" r="8" fill="url(#fg)" opacity=".25"/>
      <circle cx="16" cy="16" r="5" stroke="url(#fg)" strokeWidth="1" fill="none"/>
      <path d="M7 8v16M7 8c0-1 .5-3 1.5-3S10 7 10 8" stroke="#E06080" strokeWidth="1.3" strokeLinecap="round"/>
      <line x1="8.5" y1="8" x2="8.5" y2="14" stroke="#E06080" strokeWidth="1" strokeLinecap="round"/>
      <path d="M25 8v3c0 2-1 3.5-2.5 4v9" stroke="#E06080" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>,

    "👨‍👩‍👧‍👦":()=><svg width={s} height={s} viewBox="0 0 32 32" fill="none">
      <defs><linearGradient id="famg" x1="6" y1="6" x2="26" y2="28" gradientUnits="userSpaceOnUse"><stop stopColor="#A78BFA"/><stop offset="1" stopColor="#7B5EE8"/></linearGradient></defs>
      <circle cx="10" cy="10" r="3.5" fill="url(#famg)"/>
      <circle cx="10" cy="9.5" r="2" fill="rgba(255,255,255,.3)"/>
      <path d="M5 24v-3c0-3 2.2-5 5-5s5 2 5 5v3" fill="url(#famg)" opacity=".7"/>
      <circle cx="22" cy="10" r="3.5" fill="#50E0C0"/>
      <circle cx="22" cy="9.5" r="2" fill="rgba(255,255,255,.3)"/>
      <path d="M17 24v-3c0-3 2.2-5 5-5s5 2 5 5v3" fill="#50E0C0" opacity=".7"/>
      <circle cx="16" cy="17" r="2.5" fill="#F5C040"/>
      <circle cx="16" cy="16.7" r="1.5" fill="rgba(255,255,255,.3)"/>
      <path d="M12.5 28v-2c0-2 1.5-3.5 3.5-3.5s3.5 1.5 3.5 3.5v2" fill="#F5C040" opacity=".7"/>
    </svg>,

    "🚲":()=><svg width={s} height={s} viewBox="0 0 32 32" fill="none">
      <defs><linearGradient id="bikg" x1="4" y1="12" x2="28" y2="24" gradientUnits="userSpaceOnUse"><stop stopColor="#F5A623"/><stop offset="1" stopColor="#E08A10"/></linearGradient></defs>
      <circle cx="8" cy="22" r="5.5" stroke="url(#bikg)" strokeWidth="2" fill="none"/>
      <circle cx="24" cy="22" r="5.5" stroke="url(#bikg)" strokeWidth="2" fill="none"/>
      <path d="M8 22l6-10h4l2 4-4 6M20 16l4 6" stroke="url(#bikg)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="14" cy="12" r="1.5" fill="url(#bikg)"/>
      <path d="M12 12h5" stroke="url(#bikg)" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>,

    "⏰":()=><svg width={s} height={s} viewBox="0 0 32 32" fill="none">
      <defs><linearGradient id="clkg" x1="16" y1="3" x2="16" y2="29" gradientUnits="userSpaceOnUse"><stop stopColor="#6AABF5"/><stop offset="1" stopColor="#4A6BD6"/></linearGradient></defs>
      <circle cx="16" cy="17" r="12" fill="url(#clkg)" opacity=".15"/>
      <circle cx="16" cy="17" r="10" fill="url(#clkg)"/>
      <circle cx="16" cy="17" r="8.5" fill="rgba(255,255,255,.12)"/>
      <path d="M16 10v7l4.5 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="16" cy="17" r="1.2" fill="white"/>
      <path d="M12 4h8" stroke="#4A6BD6" strokeWidth="2" strokeLinecap="round"/>
      <path d="M16 4v2" stroke="#4A6BD6" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>,

    "🏥":()=><svg width={s} height={s} viewBox="0 0 32 32" fill="none">
      <defs><linearGradient id="medg" x1="16" y1="4" x2="16" y2="28" gradientUnits="userSpaceOnUse"><stop stopColor="#F07070"/><stop offset="1" stopColor="#D04040"/></linearGradient></defs>
      <rect x="6" y="6" width="20" height="20" rx="5" fill="url(#medg)"/>
      <rect x="7" y="7" width="18" height="9" rx="3" fill="rgba(255,255,255,.12)"/>
      <rect x="14" y="10" width="4" height="12" rx="1" fill="white"/>
      <rect x="10" y="14" width="12" height="4" rx="1" fill="white"/>
    </svg>,

    "⚽":()=><svg width={s} height={s} viewBox="0 0 32 32" fill="none">
      <defs><linearGradient id="spg" x1="8" y1="6" x2="24" y2="26" gradientUnits="userSpaceOnUse"><stop stopColor="#50E0C0"/><stop offset="1" stopColor="#2ECD9E"/></linearGradient></defs>
      <circle cx="16" cy="16" r="12" fill="url(#spg)"/>
      <circle cx="16" cy="16" r="10" fill="rgba(255,255,255,.12)"/>
      <path d="M16 6l3 5h5l1 5-3 4-5 1-5-1-3-4 1-5h5z" stroke="rgba(255,255,255,.4)" strokeWidth="1" fill="none"/>
      <path d="M16 6v5M24 11l-5 0M25 16l-3 4M21 25l-5 1M11 25l-3-4M7 16l1-5M8 11h5" stroke="rgba(255,255,255,.3)" strokeWidth=".8"/>
    </svg>,

    "📖":()=><svg width={s} height={s} viewBox="0 0 32 32" fill="none">
      <defs><linearGradient id="bkg" x1="4" y1="6" x2="28" y2="26" gradientUnits="userSpaceOnUse"><stop stopColor="#A78BFA"/><stop offset="1" stopColor="#7B5EE8"/></linearGradient></defs>
      <path d="M4 7c0-1 .8-2 2-2h8c1 0 2 .8 2 2v18l-1-1.5c-.5-.5-1-.5-1.5 0L12 25l-1.5-1.5c-.5-.5-1-.5-1.5 0L7.5 25 6 23.5c-.5-.5-1-.5-1.5 0L3 25V7z" fill="url(#bkg)" opacity=".85"/>
      <path d="M28 7c0-1-.8-2-2-2h-8c-1 0-2 .8-2 2v18l1-1.5c.5-.5 1-.5 1.5 0L20 25l1.5-1.5c.5-.5 1-.5 1.5 0l1.5 1.5 1.5-1.5c.5-.5 1-.5 1.5 0L29 25V7z" fill="url(#bkg)"/>
      <rect x="7" y="9" width="6" height="1" rx=".5" fill="rgba(255,255,255,.35)"/>
      <rect x="7" y="12" width="5" height="1" rx=".5" fill="rgba(255,255,255,.25)"/>
      <rect x="19" y="9" width="6" height="1" rx=".5" fill="rgba(255,255,255,.35)"/>
      <rect x="19" y="12" width="5" height="1" rx=".5" fill="rgba(255,255,255,.25)"/>
      <rect x="19" y="15" width="4" height="1" rx=".5" fill="rgba(255,255,255,.2)"/>
      <line x1="16" y1="7" x2="16" y2="23" stroke="rgba(255,255,255,.2)" strokeWidth="1"/>
    </svg>,

    // ── LESSON-TYPE ICONS ──
    "💬":()=><svg width={s} height={s} viewBox="0 0 32 32" fill="none">
      <defs><linearGradient id="chatg" x1="4" y1="4" x2="28" y2="24" gradientUnits="userSpaceOnUse"><stop stopColor="#6AABF5"/><stop offset="1" stopColor="#4A8FE7"/></linearGradient></defs>
      <path d="M6 6h20c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H12l-5 4v-4H6c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2z" fill="url(#chatg)"/>
      <rect x="9" y="11" width="8" height="1.5" rx=".75" fill="rgba(255,255,255,.4)"/>
      <rect x="9" y="14.5" width="5" height="1.5" rx=".75" fill="rgba(255,255,255,.25)"/>
    </svg>,

    "🏆":()=><svg width={s} height={s} viewBox="0 0 32 32" fill="none">
      <defs><linearGradient id="trg" x1="16" y1="2" x2="16" y2="28" gradientUnits="userSpaceOnUse"><stop stopColor="#FFD86B"/><stop offset="1" stopColor="#E8A020"/></linearGradient></defs>
      <path d="M10 4h12v10c0 4-2.5 7-6 7s-6-3-6-7V4z" fill="url(#trg)"/>
      <path d="M10 7H6c0 4 2 6 4 6.5M22 7h4c0 4-2 6-4 6.5" stroke="#D4900A" strokeWidth="1.2" fill="none"/>
      <rect x="13" y="21" width="6" height="3" rx="1" fill="url(#trg)"/>
      <rect x="10" y="24" width="12" height="3" rx="1.5" fill="url(#trg)" stroke="#D4900A" strokeWidth=".5"/>
      <path d="M11 5h10v4c0 1-1 2-2 2h-6c-1 0-2-1-2-2V5z" fill="rgba(255,255,255,.2)"/>
    </svg>,

    "📝":()=><svg width={s} height={s} viewBox="0 0 32 32" fill="none">
      <defs><linearGradient id="peng" x1="8" y1="4" x2="24" y2="28" gradientUnits="userSpaceOnUse"><stop stopColor="#50E0C0"/><stop offset="1" stopColor="#2ECD9E"/></linearGradient></defs>
      <rect x="7" y="4" width="18" height="24" rx="3" fill="url(#peng)"/>
      <rect x="8" y="5" width="16" height="10" rx="2" fill="rgba(255,255,255,.12)"/>
      <rect x="11" y="10" width="10" height="1.5" rx=".75" fill="rgba(255,255,255,.4)"/>
      <rect x="11" y="14" width="7" height="1.5" rx=".75" fill="rgba(255,255,255,.3)"/>
      <rect x="11" y="18" width="9" height="1.5" rx=".75" fill="rgba(255,255,255,.25)"/>
      <rect x="11" y="22" width="5" height="1.5" rx=".75" fill="rgba(255,255,255,.2)"/>
    </svg>,

    "🔄":()=><svg width={s} height={s} viewBox="0 0 32 32" fill="none">
      <defs><linearGradient id="refg" x1="6" y1="6" x2="26" y2="26" gradientUnits="userSpaceOnUse"><stop stopColor="#A78BFA"/><stop offset="1" stopColor="#7B5EE8"/></linearGradient></defs>
      <path d="M24 10A10 10 0 0 0 8 8" stroke="url(#refg)" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M8 22A10 10 0 0 0 24 24" stroke="url(#refg)" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M8 4v5h5" stroke="url(#refg)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M24 28v-5h-5" stroke="url(#refg)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>,

    "📚":()=><svg width={s} height={s} viewBox="0 0 32 32" fill="none">
      <defs><linearGradient id="bksg" x1="4" y1="6" x2="28" y2="26" gradientUnits="userSpaceOnUse"><stop stopColor="#7B5EE8"/><stop offset="1" stopColor="#5840B8"/></linearGradient></defs>
      <rect x="4" y="6" width="7" height="20" rx="1.5" fill="url(#bksg)" transform="rotate(-5 7 16)"/>
      <rect x="12" y="5" width="7" height="21" rx="1.5" fill="#4A8FE7"/>
      <rect x="20" y="6" width="7" height="20" rx="1.5" fill="#2ECD9E" transform="rotate(5 24 16)"/>
      <rect x="5.5" y="9" width="4" height="1" rx=".5" fill="rgba(255,255,255,.3)" transform="rotate(-5 7 9)"/>
      <rect x="13.5" y="8" width="4" height="1" rx=".5" fill="rgba(255,255,255,.3)"/>
      <rect x="21.5" y="9" width="4" height="1" rx=".5" fill="rgba(255,255,255,.3)" transform="rotate(5 24 9)"/>
    </svg>,

    "✅":()=><svg width={s} height={s} viewBox="0 0 32 32" fill="none">
      <defs><linearGradient id="chkg" x1="6" y1="6" x2="26" y2="26" gradientUnits="userSpaceOnUse"><stop stopColor="#50E0C0"/><stop offset="1" stopColor="#2ECD9E"/></linearGradient></defs>
      <rect x="4" y="4" width="24" height="24" rx="6" fill="url(#chkg)"/>
      <path d="M10 16l4 4 8-8" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>,

    "📅":()=><svg width={s} height={s} viewBox="0 0 32 32" fill="none">
      <defs><linearGradient id="calg" x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse"><stop stopColor="#F07070"/><stop offset="1" stopColor="#D04040"/></linearGradient></defs>
      <rect x="4" y="6" width="24" height="22" rx="4" fill="url(#calg)"/>
      <rect x="4" y="6" width="24" height="7" rx="4" fill="rgba(255,255,255,.15)"/>
      <rect x="9" y="3" width="2.5" height="5" rx="1.2" fill="url(#calg)" stroke="#D04040" strokeWidth=".5"/>
      <rect x="20.5" y="3" width="2.5" height="5" rx="1.2" fill="url(#calg)" stroke="#D04040" strokeWidth=".5"/>
      <rect x="8" y="16" width="4" height="3" rx="1" fill="rgba(255,255,255,.3)"/>
      <rect x="14" y="16" width="4" height="3" rx="1" fill="rgba(255,255,255,.2)"/>
      <rect x="20" y="16" width="4" height="3" rx="1" fill="rgba(255,255,255,.15)"/>
      <rect x="8" y="21" width="4" height="3" rx="1" fill="rgba(255,255,255,.15)"/>
      <rect x="14" y="21" width="4" height="3" rx="1" fill="rgba(255,255,255,.25)"/>
    </svg>,

    "🏠":()=><svg width={s} height={s} viewBox="0 0 32 32" fill="none">
      <defs><linearGradient id="hmg" x1="16" y1="3" x2="16" y2="28" gradientUnits="userSpaceOnUse"><stop stopColor="#F5A623"/><stop offset="1" stopColor="#E08A10"/></linearGradient></defs>
      <path d="M16 4L4 15h4v12h16V15h4L16 4z" fill="url(#hmg)"/>
      <path d="M16 4L4 15h4v-2L16 6l8 7v2h4L16 4z" fill="rgba(255,255,255,.2)"/>
      <rect x="13" y="19" width="6" height="8" rx="1" fill="rgba(255,255,255,.35)"/>
      <rect x="14" y="20" width="4" height="3" rx=".5" fill="rgba(255,255,255,.2)"/>
    </svg>,

    "🧭":()=><svg width={s} height={s} viewBox="0 0 32 32" fill="none">
      <defs><linearGradient id="compg" x1="6" y1="6" x2="26" y2="26" gradientUnits="userSpaceOnUse"><stop stopColor="#6AABF5"/><stop offset="1" stopColor="#4A6BD6"/></linearGradient></defs>
      <circle cx="16" cy="16" r="12" fill="url(#compg)"/>
      <circle cx="16" cy="16" r="10" fill="rgba(255,255,255,.1)"/>
      <path d="M16 6l1 6 5-3-3 5 6 1-6 1 3 5-5-3-1 6-1-6-5 3 3-5-6-1 6-1-3-5 5 3z" fill="white" opacity=".35"/>
      <path d="M14 14l-4 8 8-4z" fill="#D04040" opacity=".8"/>
      <path d="M18 18l4-8-8 4z" fill="white" opacity=".6"/>
      <circle cx="16" cy="16" r="1.5" fill="white"/>
    </svg>,
  };
  const render=icons[name];
  if(!render) return <span style={{fontSize:s,lineHeight:1}}>{name}</span>;
  return render();
}

// Helper: render icon — uses BrandIcon if available, emoji fallback
function renderBrandIcon(emoji,size){
  return <BrandIcon name={emoji} size={size}/>;
}

// ━━━━━━━━━━ HOME (redesigned — hub with 6 categories) ━━━━━━━━━━

function Home({user,setPage,lang,baseLang="en"}){
  const dk=document.documentElement.classList.contains("dark");
  const L=LANGUAGES.find(l=>l.code===lang);
  return(
    <div className="anim">
      {/* Welcome header — immersive in the target language */}
      <div style={{textAlign:"center",padding:"16px 0 32px"}}>
        <h1 className="hd" style={{fontSize:30,fontWeight:800,marginBottom:8,color:"var(--gray-800)"}}>{L?.welcomeBack||L?.greeting}</h1>
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:8}}>
          <span style={{fontSize:18,fontWeight:700,color:"var(--purple-accent-text)"}}>{L?.native}</span>
          <CountryFlag code={lang} size={24}/>
        </div>
      </div>

      {/* 6 Category buttons — continue-button purple */}
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:14,maxWidth:520,margin:"0 auto"}}>
        {[
          {p:"learn",icon:"books_stack",label:t("home_learn_path",baseLang),desc:"Structured lessons"},
          {p:"vocabulary",icon:"abc_blocks",label:t("vocab_title",baseLang),desc:"A1 – C2 dictionary"},
          {p:"grammar",icon:"clipboard",label:t("grammar_title",baseLang),desc:"A1 – C2 rules"},
          {p:"idioms",icon:"chat_bubbles",label:t("idioms_title",baseLang),desc:"A1 – C2 expressions"},
          {p:"curriculum",icon:"brain",label:"Curriculum",desc:"Personal path"},
          {p:"quiz",icon:"checkmark_green",label:t("home_quiz",baseLang),desc:"Test your knowledge"},
        ].map(c=>{
          const restShadow="0 5px 16px rgba(85,53,181,0.35), 0 2px 4px rgba(0,0,0,0.08), inset 0 2px 0 rgba(255,255,255,0.3), inset 0 -3px 0 rgba(0,0,0,0.18)";
          const hoverShadow="0 10px 28px rgba(85,53,181,0.45), 0 0 16px rgba(123,94,232,0.15), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.18)";
          return(
          <div key={c.p} role="button" className="home-tile" onClick={()=>setPage(c.p)} style={{borderRadius:24,padding:"24px 16px",textAlign:"center",cursor:"pointer",transition:"all .15s, transform 0.15s, box-shadow 0.15s, filter 0.15s",position:"relative",overflow:"hidden",background:"linear-gradient(180deg, #C0AEF8 0%, #A488F0 15%, #8B6AE4 35%, #7B5EE8 50%, #6545C8 75%, #5840B8 90%, #4A2BA6 100%)",border:"none",boxShadow:restShadow}}>
            {/* Candy shine — wide rounded pill */}
            <div style={{position:"absolute",top:0,left:"4%",right:"4%",height:"44%",borderRadius:"0 0 48% 48%",background:"linear-gradient(180deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.12) 55%, transparent 100%)",pointerEvents:"none",zIndex:1}}/>
            <div style={{marginBottom:8,position:"relative",zIndex:2}}><AppIcon name={c.icon} size={44}/></div>
            <div style={{fontSize:14,fontWeight:800,color:"#fff",marginBottom:2,position:"relative",zIndex:2,textShadow:"0 1px 3px rgba(0,0,0,0.25)"}}>{c.label}</div>
            <div style={{fontSize:11,color:"rgba(255,255,255,0.65)",fontWeight:500,position:"relative",zIndex:2}}>{c.desc}</div>
          </div>);
        })}
      </div>

      {/* Recent progress teaser */}
      <div style={{marginTop:28,textAlign:"center"}}>
        <div className="gloss" style={{display:"inline-flex",gap:16,background:"var(--card-bg)",borderRadius:16,padding:"12px 24px",backdropFilter:"var(--glass-blur)",WebkitBackdropFilter:"var(--glass-blur)"}}>
          <span style={{fontSize:13,color:"var(--gray-500)",display:"flex",alignItems:"center",gap:4}}><AppIcon name="lightning_bolt" size={16}/><strong style={{color:"var(--gray-800)"}}>{user.xp} XP</strong></span>
          <span style={{fontSize:13,color:"var(--gray-500)",display:"flex",alignItems:"center",gap:4}}><AppIcon name="flame" size={16}/><strong style={{color:"var(--gray-800)"}}>{user.streak} day</strong></span>
          <span style={{fontSize:13,color:"var(--gray-500)",display:"flex",alignItems:"center",gap:4}}><AppIcon name="brain" size={16}/><strong style={{color:"var(--gray-800)"}}>{user.wl} words</strong></span>
          {(()=>{const cefr=getUserCefr(user,lang);return <span style={{fontSize:13,color:"var(--gray-500)",display:"flex",alignItems:"center",gap:4}}><AppIcon name="star" size={16}/><strong style={{color:"var(--gray-800)"}}>{cefr.level}</strong></span>;})()}
        </div>
      </div>
    </div>
  );
}

// ━━━━━━━━━━ FLASHCARDS ━━━━━━━━━━

function Flashcards({lang,baseLang="en",user,showToast}){
  const allVocab=VOCAB[lang]||[];
  // Only show words the user has learned
  const learnedWords=allVocab.filter(w=>user.lw.has(w.word));
  const [mode,setMode]=useState("shuffle"); // shuffle, level, alpha
  const [deck,setDeck]=useState([]);
  const [idx,setIdx]=useState(0);
  const [flipped,setFlipped]=useState(false);

  useEffect(()=>{
    let sorted=[...learnedWords];
    if(mode==="shuffle") sorted=shuffle(sorted);
    else if(mode==="alpha") sorted.sort((a,b)=>a.word.localeCompare(b.word));
    else if(mode==="level") sorted.sort((a,b)=>(a.level||"A1").localeCompare(b.level||"A1"));
    setDeck(sorted);setIdx(0);setFlipped(false);
  },[mode,user.lw.size]);

  if(learnedWords.length===0) return(
    <div className="anim" style={{textAlign:"center",paddingTop:40}}>
      <div style={{fontSize:56,marginBottom:16}}>🗂️</div>
      <h2 className="hd" style={{fontSize:24,fontWeight:800,marginBottom:8}}>{t("fc_title",baseLang)}</h2>
      <p style={{color:"var(--gray-400)",fontSize:15,lineHeight:1.7,maxWidth:360,margin:"0 auto 24px"}}>{t("fc_empty_desc",baseLang)}</p>
      <div style={{display:"inline-block",background:"var(--blue-pale)",borderRadius:14,padding:"12px 20px",border:"1.5px solid var(--blue-light)"}}>
        <span style={{fontSize:13,color:"var(--blue)",fontWeight:600}}>📚 {allVocab.length} {t("fc_words_waiting",baseLang)}</span>
      </div>
    </div>
  );

  const card=deck[idx];
  if(!card) return null;

  return(
    <div className="anim">
      <div style={{textAlign:"center",marginBottom:20}}>
        <div style={{fontSize:36,marginBottom:6}}>🗂️</div>
        <h2 className="hd" style={{fontSize:24,fontWeight:800,marginBottom:4}}>{t("fc_title",baseLang)}</h2>
        <p style={{color:"var(--gray-400)",fontSize:13}}>{learnedWords.length} {t("fc_words_learned",baseLang)} · {t("fc_tap_flip",baseLang)}</p>
      </div>

      {/* Mode selector */}
      <div style={{display:"flex",justifyContent:"center",gap:6,marginBottom:20}}>
        {[{id:"shuffle",icon:"🔀",label:t("fc_shuffle",baseLang)},{id:"level",icon:"📊",label:t("fc_by_level",baseLang)},{id:"alpha",icon:"🔤",label:t("fc_a_z",baseLang)}].map(m=>(
          <button key={m.id} onClick={()=>setMode(m.id)} style={{padding:"7px 16px",borderRadius:16,border:`2px solid ${mode===m.id?"var(--blue)":"var(--gray-200)"}`,background:mode===m.id?"var(--blue)":"white",color:mode===m.id?"white":"var(--gray-500)",fontWeight:700,fontSize:12,cursor:"pointer",transition:"all .15s"}}>{m.icon} {m.label}</button>
        ))}
      </div>

      {/* Card counter */}
      <div style={{textAlign:"center",marginBottom:12,color:"var(--gray-400)",fontSize:13,fontWeight:600}}>
        {idx+1} / {deck.length}
        {card.level&&<span style={{marginLeft:8,padding:"2px 10px",borderRadius:8,background:"var(--blue-light)",fontSize:10,fontWeight:700,color:"var(--blue)"}}>{card.level}</span>}
      </div>

      {/* Flashcard */}
      <div className="fc-wrap" onClick={()=>setFlipped(!flipped)}>
        <div className={`fc-inner ${flipped?"flipped":""}`}>
          <div className="fc-face fc-front">
            <div className="fc-cat">{card.category||""}</div>
            <div className="fc-word">{cap(card.word)}</div>
            <div className="fc-phonetic">{card.phonetic}</div>
            <div style={{display:"flex",justifyContent:"center",marginTop:12}}>
              <SpeakerButton text={card.word} lang={LANG_META[lang]?.ttsLocale||"en-US"} size={20} showToast={showToast} />
            </div>
            <div className="fc-label">{t("fc_tap_reveal",baseLang)}</div>
          </div>
          <div className="fc-face fc-back">
            <div className="fc-cat" style={{color:"var(--teal-dark)"}}>{t("fc_translation",baseLang)}</div>
            <div className="fc-trans">{cap(card.translation)}</div>
            <div className="fc-label">{cap(card.word)} = {cap(card.translation)}</div>
          </div>
        </div>
      </div>

      {/* Navigation — simple, not quizzy */}
      <div style={{display:"flex",justifyContent:"center",gap:12,marginTop:24}}>
        <button className="btn btn-outline" style={{fontSize:14,padding:"10px 24px"}} onClick={()=>{setFlipped(false);setIdx(i=>i>0?i-1:deck.length-1);}}>{t("fc_previous",baseLang)}</button>
        <button className="btn btn-blue" style={{fontSize:14,padding:"10px 24px"}} onClick={()=>{setFlipped(false);setIdx(i=>(i+1)%deck.length);}}>{t("fc_next",baseLang)}</button>
      </div>

      {/* Reshuffle */}
      {mode==="shuffle"&&<div style={{textAlign:"center",marginTop:14}}>
        <button onClick={()=>{setDeck(shuffle([...learnedWords]));setIdx(0);setFlipped(false);}} style={{background:"none",border:"none",color:"var(--blue)",fontSize:13,fontWeight:700,cursor:"pointer"}}>🔀 {t("fc_reshuffle",baseLang)}</button>
      </div>}
    </div>
  );
}

// ━━━━━━━━━━ QUIZ YOURSELF — Two modes: Lesson Review + Vocab Challenge ━━━━━━━━━━

function Quiz({lang,baseLang="en",user,addXp,learnWord,onPerfect,showToast}){
  const dk=document.documentElement.classList.contains("dark");
  const vocab=VOCAB[lang]||[];
  const allUnits=UNITS.filter(u=>u.lang===lang);
  const [qMode,setQMode]=useState("lesson");
  const [qs,setQs]=useState([]);
  const [qi,setQi]=useState(0);
  const [selOpt,setSelOpt]=useState(null);
  const [answered,setAnswered]=useState(false);
  const [score,setScore]=useState(0);
  const [done,setDone]=useState(false);
  const [started,setStarted]=useState(false);
  const [focusIdx,setFocusIdx]=useState(-1);
  const [showHint,setShowHint]=useState(false);
  const continueRef=useRef(null);
  const glass={backdropFilter:"var(--glass-blur)",WebkitBackdropFilter:"var(--glass-blur)"};

  // ── Context-dependent question filter ──
  const isContextQ=(q)=>/\b(the story|in the story|the text|the passage|did it cost|what happened next)\b/i.test(q);

  // ── Harvest standalone quiz steps from completed lessons ──
  const harvestLessonQuestions=useCallback(()=>{
    const prog=user.progress?.lessons||{};
    const pool=[];
    for(const u of allUnits){
      for(const ls of (u.lessons||[])){
        const lk=`${lang}:${u.n}:${ls.id}`;
        if(!prog[lk]) continue;
        for(const st of (ls.steps||[])){
          // MC: only if self-contained (all 4 opts present, not context-dependent)
          if(st.type==="mc"&&st.q&&st.opts&&st.opts.length>=3&&st.ans&&!isContextQ(st.q)){
            pool.push({kind:"mc",q:st.q,opts:st.opts,ans:st.ans,hint:st.hint||"",src:`Unit ${u.n}, L${ls.id.replace(/.*l/,"")}`});
          }
          // Match pairs → "What does X mean?" with same-set distractors
          if(st.type==="match"&&st.pairs&&st.pairs.length>=3){
            for(const pair of st.pairs){
              const wrongs=st.pairs.filter(p=>p.en!==pair.en).map(p=>p.en);
              if(wrongs.length>=3){
                pool.push({kind:"mc",q:`What does "${pair.nl}" mean?`,opts:shuffle([pair.en,...shuffle(wrongs).slice(0,3)]),ans:pair.en,hint:"",src:`Unit ${u.n}, L${ls.id.replace(/.*l/,"")}`});
              }
            }
          }
        }
      }
    }
    return shuffle(pool).slice(0,12);
  },[lang,allUnits,user.progress]);

  // ── Generate vocab quiz with same-category distractors ──
  const harvestVocabQuestions=useCallback(()=>{
    const learned=vocab.filter(w=>user.lw.has(w.word));
    const pool=learned.length>=4?learned:vocab.slice(0,40);
    return shuffle(pool).slice(0,Math.min(10,pool.length)).map(item=>{
      // Distractors: same category first, then same level, then any
      const sameCat=pool.filter(v=>v.translation!==item.translation&&v.category===item.category);
      const sameLvl=pool.filter(v=>v.translation!==item.translation&&(v.level||"A1").substring(0,2)===(item.level||"A1").substring(0,2));
      const any=pool.filter(v=>v.translation!==item.translation);
      let wrongPool=sameCat.length>=3?sameCat:sameLvl.length>=3?sameLvl:any;
      const wrongs=shuffle(wrongPool).slice(0,3).map(w=>cap(w.translation));
      return{kind:"mc",q:cap(item.word),opts:shuffle([cap(item.translation),...wrongs]),ans:cap(item.translation),hint:item.phonetic||"",src:(item.level||"A1"),isVocab:true};
    });
  },[lang,vocab,user.lw]);

  const startQuiz=useCallback(()=>{
    const questions=qMode==="lesson"?harvestLessonQuestions():harvestVocabQuestions();
    if(questions.length===0){if(showToast)showToast("Complete some lessons first!","📚");return;}
    setQs(questions);setQi(0);setSelOpt(null);setAnswered(false);setScore(0);setDone(false);setStarted(true);setFocusIdx(-1);setShowHint(false);
  },[qMode,harvestLessonQuestions,harvestVocabQuestions,showToast]);

  // ── Keyboard navigation (matches lesson engine exactly) ──
  useEffect(()=>{
    const handler=e=>{
      // Start screen: Space starts quiz
      if(!started){
        if(e.key===" "){e.preventDefault();startQuiz();}
        return;
      }
      if(done){
        if(e.key===" "){e.preventDefault();startQuiz();}
        if(e.key==="Escape") setStarted(false);
        return;
      }
      if(e.key==="Escape"){setStarted(false);return;}
      // Ctrl+S dev-skip
      if(e.ctrlKey&&e.key==="s"){
        e.preventDefault();
        const q=qs[qi];if(!q) return;
        if(!answered){doAnswer(q.ans);}
        return;
      }
      const q=qs[qi];if(!q) return;
      const optCount=(q.opts||[]).length;
      if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(e.key)&&!answered){
        e.preventDefault();
        if(e.key==="ArrowRight"||e.key==="ArrowDown") setFocusIdx(i=>(i+1)%optCount);
        else setFocusIdx(i=>i<=0?optCount-1:i-1);
      }
      if(e.key===" "&&focusIdx>=0&&!answered){
        e.preventDefault();
        const opt=q.opts[focusIdx];
        if(opt) doAnswer(opt);
      }
    };
    window.addEventListener("keydown",handler,true);
    return ()=>window.removeEventListener("keydown",handler,true);
  },[started,done,qi,qs,focusIdx,answered,startQuiz]);

  const doAnswer=(opt)=>{
    if(answered) return;
    UISounds.tick();
    setSelOpt(opt);
    setAnswered(true);
    const ok=opt===qs[qi].ans;
    if(ok){setScore(s=>s+1);addXp(8);if(qs[qi].word)learnWord(qs[qi].word);}
  };

  const goNext=()=>{
    const ok=selOpt===qs[qi].ans;
    if(qi+1>=qs.length){
      setDone(true);
      const finalScore=score+(ok?1:0);
      if(finalScore===qs.length&&onPerfect)onPerfect();
      UISounds.celebrate();
    } else {
      setQi(i=>i+1);setSelOpt(null);setAnswered(false);setFocusIdx(-1);setShowHint(false);
    }
  };

  const lessonQCount=useMemo(()=>{
    const prog=user.progress?.lessons||{};
    let n=0;
    for(const u of allUnits) for(const ls of (u.lessons||[])){
      if(prog[`${lang}:${u.n}:${ls.id}`]) for(const st of (ls.steps||[])){
        if(st.type==="mc"&&!isContextQ(st.q||"")) n++;
        if(st.type==="match"&&st.pairs&&st.pairs.length>=3) n+=st.pairs.length;
      }
    }
    return n;
  },[lang,allUnits,user.progress]);

  // ── Progress bar (matches lesson engine) ──
  const ProgressBar=()=><div className="xpbar" style={{marginBottom:20,height:10}}>
    <div className="xpbar-fill" style={{width:`${qs.length>0?((qi)/qs.length)*100:0}%`,transition:"width 0.3s"}}/>
  </div>;

  // ── Start screen ──
  if(!started){
    const learnedCount=[...user.lw].length;
    const completedLessons=Object.keys(user.progress?.lessons||{}).length;
    return(
      <div className="anim" style={{textAlign:"center",paddingTop:24}}>
        <div style={{fontSize:48,marginBottom:16}}>✅</div>
        <h2 className="hd" style={{fontSize:26,fontWeight:800,marginBottom:6}}>Quiz Yourself</h2>
        <p style={{color:"var(--gray-400)",fontSize:14,marginBottom:28,lineHeight:1.6}}>Test what you've learned. Pick your challenge.</p>

        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14,maxWidth:420,margin:"0 auto 28px"}}>
          {[
            {id:"lesson",label:"Lesson Review",desc:completedLessons>0?`${lessonQCount} questions from ${completedLessons} lessons`:"Complete lessons first",icon:"📚",disabled:completedLessons===0},
            {id:"vocab",label:"Vocab Challenge",desc:learnedCount>=4?`${learnedCount} words learned`:"Learn more words first",icon:"📖",disabled:learnedCount<4&&vocab.length<4},
          ].map(m=>{
            const active=qMode===m.id;
            const restShadow=active?"0 5px 16px rgba(85,53,181,0.35), inset 0 2px 0 rgba(255,255,255,0.3), inset 0 -3px 0 rgba(0,0,0,0.18)":"0 3px 10px rgba(0,0,0,0.08), inset 0 2px 0 rgba(255,255,255,0.8), inset 0 -2px 0 rgba(0,0,0,0.04)";
            return <div key={m.id} onClick={()=>{if(!m.disabled)setQMode(m.id);}} style={{
              borderRadius:20,padding:"24px 16px",textAlign:"center",
              cursor:m.disabled?"default":"pointer",
              transition:"all .15s",position:"relative",overflow:"hidden",
              background:active?"linear-gradient(180deg, #C0AEF8 0%, #A488F0 15%, #8B6AE4 35%, #7B5EE8 50%, #6545C8 75%, #5840B8 90%, #4A2BA6 100%)":"linear-gradient(180deg, #FFFFFF, #f5f6fa)",
              border:"none",boxShadow:restShadow,
              opacity:m.disabled?0.4:1,
            }}>
              {active&&<div style={{position:"absolute",top:0,left:"4%",right:"4%",height:"44%",borderRadius:"0 0 48% 48%",background:"linear-gradient(180deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 55%, transparent 100%)",pointerEvents:"none"}}/>}
              <div style={{fontSize:28,marginBottom:8,position:"relative",zIndex:2}}>{m.icon}</div>
              <div style={{fontSize:14,fontWeight:800,color:active?"white":"var(--gray-700)",marginBottom:4,position:"relative",zIndex:2,textShadow:active?"0 1px 3px rgba(0,0,0,0.25)":"none"}}>{m.label}</div>
              <div style={{fontSize:11,color:active?"rgba(255,255,255,0.65)":"var(--gray-400)",position:"relative",zIndex:2}}>{m.desc}</div>
            </div>;
          })}
        </div>

        <button onClick={startQuiz} style={{
          padding:"14px 40px",borderRadius:18,border:"none",cursor:"pointer",
          fontSize:16,fontWeight:800,color:"white",letterSpacing:0.3,
          background:"linear-gradient(180deg, #5EEAC8 0%, #2ECD9E 35%, #1DB88A 65%, #18A07A 100%)",
          boxShadow:"0 5px 16px rgba(46,205,158,0.4), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.12)",
          position:"relative",overflow:"hidden",transition:"all .15s",
        }} onMouseEnter={e=>{e.currentTarget.style.transform="scale(1.05)";e.currentTarget.style.filter="brightness(1.1)";}}
           onMouseLeave={e=>{e.currentTarget.style.transform="scale(1)";e.currentTarget.style.filter="none";}}>
          <div style={{position:"absolute",top:0,left:"6%",right:"6%",height:"44%",borderRadius:"0 0 48% 48%",background:"linear-gradient(180deg, rgba(255,255,255,0.4) 0%, transparent 100%)",pointerEvents:"none"}}/>
          <span style={{position:"relative",zIndex:1}}>Start Quiz →</span>
        </button>
      </div>
    );
  }

  // ── Done screen ──
  if(done){
    const pct=qs.length>0?Math.round((score/qs.length)*100):0;
    return(
      <div className="anim" style={{textAlign:"center",paddingTop:40}}>
        <Confetti active={pct>=80}/>
        <div style={{fontSize:64,marginBottom:12}}>{pct===100?<AppIcon name="trophy" size={72}/>:pct>=80?<AppIcon name="star" size={72}/>:pct>=60?<AppIcon name="hand_wave" size={72}/>:<AppIcon name="books_stack" size={72}/>}</div>
        <h2 className="hd" style={{fontSize:28,fontWeight:800,marginBottom:8}}>{pct===100?"Perfect!":"Quiz Complete!"}</h2>
        <ScoreCircle percentage={pct} size={90}/>
        <p style={{fontSize:14,color:"var(--gray-400)",marginTop:12,marginBottom:4}}>{score}/{qs.length} correct</p>
        <p style={{color:"var(--gold)",fontSize:16,fontWeight:700,marginBottom:28}}>+{score*8} XP</p>
        <div style={{display:"flex",gap:12,justifyContent:"center"}}>
          <NavArrow onClick={()=>setStarted(false)} isBack size={48}/>
          <button onClick={startQuiz} style={{
            padding:"14px 32px",borderRadius:16,border:"none",cursor:"pointer",fontSize:15,fontWeight:800,color:"white",
            background:"linear-gradient(180deg, #C0AEF8 0%, #A488F0 15%, #8B6AE4 35%, #7B5EE8 50%, #6545C8 75%, #5840B8 90%, #4A2BA6 100%)",
            boxShadow:"0 4px 14px rgba(85,53,181,0.4), inset 0 2px 0 rgba(255,255,255,0.3), inset 0 -2px 0 rgba(0,0,0,0.15)",
            position:"relative",overflow:"hidden",
          }}><div style={{position:"absolute",top:0,left:"8%",right:"8%",height:"40%",borderRadius:"0 0 50% 50%",background:"linear-gradient(180deg, rgba(255,255,255,0.35) 0%, transparent 100%)",pointerEvents:"none"}}/><span style={{position:"relative",zIndex:1}}>Try Again</span></button>
        </div>
      </div>
    );
  }

  const q=qs[qi];
  if(!q) return null;

  // ── Active quiz — matches lesson engine MC renderer ──
  return(
    <div className="anim">
      {/* Back button */}
      <div style={{marginBottom:12}}>
        <NavArrow onClick={()=>setStarted(false)} isBack size={40}/>
      </div>

      {/* Header */}
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8}}>
        <div>
          <h2 className="hd" style={{fontSize:18,fontWeight:800}}>{qMode==="lesson"?"Lesson Review":"Vocab Challenge"}</h2>
          <p style={{color:"var(--gray-400)",fontSize:12}}>{qi+1} / {qs.length}</p>
        </div>
        <span style={{padding:"6px 14px",borderRadius:12,background:dk?"rgba(46,205,158,0.15)":"rgba(46,205,158,0.08)",color:"var(--teal)",fontWeight:800,fontSize:13}}>{score}/{qi+(answered?1:0)}</span>
      </div>

      <ProgressBar/>

      {/* Source badge */}
      {q.src&&<div style={{textAlign:"center",marginBottom:10}}>
        <span style={{padding:"3px 10px",borderRadius:8,background:dk?"rgba(123,94,232,0.15)":"rgba(123,94,232,0.06)",fontSize:10,fontWeight:700,color:"var(--purple-accent-text)"}}>{q.src}</span>
      </div>}

      <div style={{maxWidth:500,margin:"0 auto"}}>
        {/* Question card — board style, matches lesson engine */}
        <div style={{background:"var(--card-bg)",borderRadius:20,border:"2px solid rgba(255,255,255,0.45)",borderLeft:"4px solid var(--purple-accent)",padding:"22px 26px",marginBottom:18,textAlign:"center",...glass}}>
          {q.isVocab&&<div style={{color:"var(--purple-accent-text)",fontSize:10,textTransform:"uppercase",letterSpacing:2,marginBottom:10,fontWeight:700}}>Translate this word</div>}
          <div className="hd" style={{fontSize:q.isVocab?28:19,fontWeight:q.isVocab?800:700,lineHeight:1.5,color:"var(--gray-800)"}}>{q.q}</div>
          {q.hint&&!showHint&&!answered&&<div style={{marginTop:8}}><button onClick={()=>setShowHint(true)} style={{background:"none",border:"none",color:"var(--gray-300)",fontSize:12,cursor:"pointer",fontFamily:"inherit",padding:"4px 12px",borderRadius:8,transition:"all .15s"}} onMouseEnter={e=>{e.target.style.color="#7B5EE8";e.target.style.background="rgba(123,94,232,0.06)";}} onMouseLeave={e=>{e.target.style.color="var(--gray-300)";e.target.style.background="none";}}><AppIcon name="lightbulb" size={20} style={{marginRight:5}}/>Need a hint?</button></div>}
          {showHint&&q.hint&&!answered&&<div style={{color:"var(--gray-400)",fontSize:13,marginTop:4,display:"flex",alignItems:"flex-start",gap:6}}><AppIcon name="lightbulb" size={30}/><span>{q.hint}</span></div>}
        </div>

        {/* Options grid — uses .quiz-opt class */}
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
          {(q.opts||[]).slice(0,4).map((o,i)=>{
            let cls="quiz-opt";
            const isFocused=i===focusIdx&&!answered;
            if(answered){if(o===q.ans)cls+=" correct";else if(o===selOpt)cls+=" wrong";else cls+=" dis";}
            return <div key={i} className={cls} style={{...(isFocused?{outline:"3px solid var(--purple-accent)",outlineOffset:2,boxShadow:"0 0 0 6px rgba(123,94,232,0.12)"}:{})}} onMouseEnter={()=>{if(!answered)UISounds.tick();}} onClick={()=>doAnswer(o)}><div className="quiz-letter">{"ABCD"[i]}</div>{o}</div>;
          })}
        </div>

        {!answered&&<div style={{textAlign:"center",marginTop:10,fontSize:11,color:"var(--gray-300)"}}>Arrow keys navigate · Space select · Esc quit</div>}
        {answered&&<div style={{textAlign:"center",marginTop:14,fontSize:14,fontWeight:700,color:selOpt===q.ans?"var(--teal-dark)":"var(--coral)"}}>{selOpt===q.ans?t("le_correct",baseLang):<span>{t("le_not_quite",baseLang)} — {q.ans}</span>}</div>}
        {answered&&<ContinueButton onClick={goNext} correct={selOpt===q.ans} baseLang={baseLang} spaceRef={continueRef}/>}
      </div>
    </div>
  );
}


// ━━━━━━━━━━ AI CHAT (REAL CLAUDE-POWERED) ━━━━━━━━━━

function Chat({lang,baseLang="en",user,addXp,addChat,learnedWords}){
  const L=LANGUAGES.find(l=>l.code===lang);
  const [msgs,setMsgs]=useState([]);
  const [chatHistory,setChatHistory]=useState([]);
  const [input,setInput]=useState("");
  const [typing,setTyping]=useState(false);
  const [error,setError]=useState(null);
  const [userProfile,setUserProfile]=useState({name:"",interests:[],level:"beginner"});
  const endRef=useRef(null);
  const starters=CHAT_STARTERS[lang]||[];
  const knownWords=learnedWords||[];

  const buildSystemPrompt=()=>{
    const langName=L?.name||"the target language";
    const knownList=knownWords.length>0?knownWords.slice(-30).join(", "):"none yet";
    const profileInfo=userProfile.name?`The user's name is ${userProfile.name}.`:"";
    const levelMap={beginner:"A1-A2",intermediate:"B1-B2",advanced:"C1-C2"};
    return `You are Nova, a warm, encouraging AI language tutor specializing in ${langName} inside LingoVerse.

CORE BEHAVIOR:
- Primarily speak in ${langName} with helpful English translations
- Adapt complexity to: ${levelMap[userProfile.level]||"A1-A2 (beginner)"}
- After EVERY ${langName} message, include English translation in parentheses
- Gently correct grammar/vocabulary mistakes — be specific but encouraging
- Introduce 1-2 new words per exchange relevant to the topic
${profileInfo}
- Words already learned: ${knownList}

RESPONSE FORMAT (raw JSON only, no markdown):
{"message":"Your response mixing ${langName} with English help","hint":"One specific learning tip","newWords":["word1","word2"]}

PERSONALITY: Warm, patient, celebrates small wins. Keep responses concise (2-4 sentences max).
IMPORTANT: Respond ONLY with valid JSON.`;
  };

  useEffect(()=>{setMsgs([]);setChatHistory([]);setError(null);setTimeout(()=>callAI(null,true),300);},[lang]);
  useEffect(()=>{endRef.current?.scrollIntoView({behavior:"smooth"});},[msgs]);

  const callAI=async(userText,isGreeting=false)=>{
    setTyping(true);setError(null);
    const newHistory=[...chatHistory];
    if(userText) newHistory.push({role:"user",content:userText});
    const apiMessages=isGreeting?[{role:"user",content:`The user just opened ${L?.name} chat. Send a warm greeting in ${L?.name} (with English translation). Respond in JSON format only.`}]:newHistory;
    try{
      const response=await fetch("https://api.anthropic.com/v1/messages",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-sonnet-4-20250514",max_tokens:1000,system:buildSystemPrompt(),messages:apiMessages})});
      const data=await response.json();
      const rawText=data.content?.map(c=>c.text||"").join("")||"";
      let parsed;
      try{const cleaned=rawText.replace(/```json\s*|```\s*/g,"").trim();parsed=JSON.parse(cleaned);}catch(e){parsed={message:rawText,hint:null,newWords:[]};}
      const aiMsg={type:"ai",text:parsed.message||rawText,hint:parsed.hint||null,newWords:parsed.newWords||[]};
      setMsgs(m=>[...m,aiMsg]);
      if(!isGreeting){setChatHistory([...newHistory,{role:"assistant",content:rawText}]);}else{setChatHistory([{role:"assistant",content:rawText}]);}
      if(userText&&!userProfile.name){const nm=userText.match(/(?:my name is|i'm|i am|je m'appelle|ich heiße|me llamo|ik heet|меня зовут)\s+(\w+)/i);if(nm)setUserProfile(p=>({...p,name:nm[1]}));}
    }catch(err){
      console.error("Nova AI error:",err);
      setError("Nova had a moment — try again!");
      const fb=AI_RESP[lang];const r=fb?.r?.[Math.floor(Math.random()*(fb.r?.length||1))]||{t:"Let's keep practicing! 🌟",h:"Try again!"};
      setMsgs(m=>[...m,{type:"ai",text:r.t,hint:r.h}]);
    }
    setTyping(false);
  };

  const send=text=>{if(!text.trim()||typing)return;setMsgs(m=>[...m,{type:"user",text:text.trim()}]);setInput("");addXp(3);addChat();callAI(text.trim());};

  return(
    <div className="anim">
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16}}>
        <div>
          <h2 className="hd" style={{fontSize:24,fontWeight:800,display:"flex",alignItems:"center",gap:8}}><AppIcon name="robot" size={28}/>Chat with Nova</h2>
          <p style={{color:"var(--gray-400)",fontSize:13}}>AI language partner · {L?.native} <CountryFlag code={lang} size={14}/> <span style={{marginLeft:6,color:"var(--purple-accent-text)",fontWeight:700,fontSize:11}}>POWERED BY CLAUDE</span></p>
        </div>
        <span className="badge badge-gold">+3 XP / msg</span>
      </div>

      <div style={{display:"flex",gap:6,marginBottom:14}}>
        {["beginner","intermediate","advanced"].map(lv=>(
          <button key={lv} className={`btn ${userProfile.level===lv?"btn-blue":"btn-outline"}`} style={{fontSize:11,padding:"5px 12px",textTransform:"capitalize"}} onClick={()=>setUserProfile(p=>({...p,level:lv}))}>
            {lv==="beginner"?"🌱":lv==="intermediate"?"🌿":"🌳"} {lv}
          </button>
        ))}
      </div>

      <div className="chat-wrap">
        <div className="chat-msgs">
          {msgs.length===0&&!typing&&(
            <div style={{textAlign:"center",padding:"36px 20px"}}>
              <div style={{marginBottom:10}}><AppIcon name="robot" size={52}/></div>
              <h3 className="hd" style={{fontWeight:700,marginBottom:6,fontSize:18}}>Meet Nova</h3>
              <p style={{color:"var(--gray-400)",fontSize:13,marginBottom:18}}>Your AI tutor powered by Claude. Nova corrects mistakes and adapts to your level.</p>
              <div style={{display:"flex",flexDirection:"column",gap:6,maxWidth:300,margin:"0 auto"}}>
                {starters.map((s,i)=><div key={i} className="chat-starter" onClick={()=>send(s)}>{s}</div>)}
              </div>
            </div>
          )}
          {msgs.map((m,i)=>(
            <div key={i} style={{animation:"fadeUp 0.3s ease"}}>
              <div className={`chat-bub ${m.type==="ai"?"ai":"user"}`}>
                {m.type==="ai"&&<span style={{fontWeight:700,color:"var(--blue)"}}>Nova: </span>}{m.text}
              </div>
              {m.hint&&<div className="chat-hint"><AppIcon name="lightbulb" size={20} style={{marginRight:5}}/> <strong>Tip:</strong> {m.hint}</div>}
              {m.newWords&&m.newWords.length>0&&(
                <div style={{display:"flex",gap:5,marginTop:5,flexWrap:"wrap"}}>
                  {m.newWords.map((w,j)=><span key={j} className="chat-nw">✨ {w}</span>)}
                </div>
              )}
            </div>
          ))}
          {typing&&(
            <div className="chat-bub ai" style={{display:"flex",alignItems:"center",gap:6}}>
              <span style={{fontWeight:700,color:"var(--blue)"}}>Nova</span>
              <span style={{color:"var(--gray-400)"}}>is thinking</span>
              <span style={{display:"inline-flex",gap:3}}>{[0,1,2].map(i=><span key={i} style={{width:5,height:5,borderRadius:"50%",background:"var(--blue)",animation:`pulse 1s infinite ${i*0.2}s`}}/>)}</span>
            </div>
          )}
          {error&&<div style={{textAlign:"center",color:"var(--coral)",fontSize:12,padding:6}}>{error}</div>}
          <div ref={endRef}/>
        </div>
        <div className="chat-bar">
          <input className="chat-input" value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>e.key==="Enter"&&!typing&&send(input)} placeholder={`${t("le_type_in",baseLang)} ${L?.name||"any language"}...`} disabled={typing}/>
          <button className="btn btn-blue" onClick={()=>send(input)} disabled={typing} style={{opacity:typing?.5:1}}>{typing?"...":"Send"}</button>
        </div>
      </div>
    </div>
  );
}

// ━━━━━━━━━━ GRAMMAR ━━━━━━━━━━

function GrammarPage({lang,baseLang="en"}){
  const [openLevel,setOpenLevel]=useState("A1");
  const [openRule,setOpenRule]=useState(null);
  
  // Comprehensive Dutch grammar — textbook order
  // A1: Pronouns → Verb conjugation basics → Zijn/hebben → Articles → Word order → Negation → Possessives → Questions
  // A2: Past tenses → Modal verbs → Separable verbs → Adjective endings → Reflexive verbs
  // B1+: Complex syntax, passive, etc.
  const DUTCH_GRAMMAR = {
    A1: [
      { title: "Personal Pronouns (Subject)", icon: "👤", explanation: "Before you can conjugate any verb, you need to know the pronouns. Dutch has formal and informal 'you' — this matters a lot socially!", rules: [
        "ik — I",
        "jij / je — you (informal, singular)",
        "u — you (formal, singular + plural)",
        "hij — he",
        "zij / ze — she",
        "het — it",
        "wij / we — we",
        "jullie — you (informal, plural)",
        "zij / ze — they (same as 'she'!)",
        "",
        "Short forms (je, ze, we) are used in casual speech.",
        "Long forms (jij, zij, wij) are used for emphasis or contrast.",
        "'U' is used for strangers, elderly, authority figures.",
        "'Jij/je' is used with friends, peers, children.",
      ], examples: [
        "Ik ben student. — I am a student.",
        "Jij bent mijn vriend. — You are my friend. (emphasis on YOU)",
        "Je bent mijn vriend. — You're my friend. (neutral)",
        "U bent heel aardig. — You are very kind. (formal)",
        "Zij is arts, hij is leraar. — She is a doctor, he is a teacher.",
        "Wij wonen in Nederland, zij wonen in België. — We live in NL, they live in Belgium.",
      ]},
      { title: "Object Pronouns (Me, You, Him...)", icon: "🎯", explanation: "Object pronouns are used after verbs and prepositions ('he sees ME', 'for HER'). Some are the same as subject pronouns, others change.", rules: [
        "mij / me — me",
        "jou / je — you (informal)",
        "u — you (formal, same as subject!)",
        "hem — him",
        "haar — her",
        "het — it (same as subject!)",
        "ons — us",
        "jullie — you all (same as subject!)",
        "hen / hun / ze — them",
        "",
        "Short forms (me, je, ze) are more common in speech.",
        "Long forms (mij, jou) are for emphasis: 'Ik bedoel JOU!' (I mean YOU!)",
      ], examples: [
        "Hij ziet mij. → Hij ziet me. — He sees me.",
        "Ik bel jou. → Ik bel je. — I call you.",
        "Zij helpt hem. — She helps him.",
        "Ik geef het aan haar. — I give it to her.",
        "Ze kennen ons. — They know us.",
      ]},
      { title: "How Dutch Verbs Work", icon: "⚙️", explanation: "This is the most important grammar page. Almost ALL Dutch verbs follow the same pattern. Learn this once, and you can conjugate hundreds of verbs.", rules: [
        "STEP 1: Start with the infinitive (always ends in *-en*): werken, lopen, spreken",
        "STEP 2: Remove *-en* to get the **STEM**: werk, loop, spreek",
        "",
        "CONJUGATION PATTERN:",
        "**ik** → stem (*ik werk*)",
        "**jij / je** → stem + **t** (*jij werkt*)",
        "**u** → stem + **t** (*u werkt*)",
        "**hij / zij / het** → stem + **t** (*hij werkt*)",
        "**wij / we** → infinitive (*wij werken*)",
        "**jullie** → infinitive (*jullie werken*)",
        "**zij** (they) → infinitive (*zij werken*)",
        "",
        "⚠️ SPECIAL RULE: When **jij/je** comes *AFTER* the verb (in questions), drop the **-t**!",
        "*Jij werkt hier.* → **Werk jij hier?** (NOT: Werkt jij hier?)",
      ], examples: [
        "WERKEN (to work): ik werk, jij werkt, hij werkt, wij werken",
        "WONEN (to live): ik woon, jij woont, hij woont, wij wonen",
        "LEREN (to learn): ik leer, jij leert, hij leert, wij leren",
        "Jij woont in Amsterdam. — You live in Amsterdam.",
        "Woon jij in Amsterdam? — Do you live in Amsterdam? (jij after verb → no -t!)",
      ]},
      { title: "Spelling Rules for Stems", icon: "✏️", explanation: "When you remove -en from the infinitive, sometimes the spelling changes to keep the same vowel sound. These rules are predictable and consistent.", rules: [
        "RULE 1 — Double vowel becomes single in closed syllable:",
        "  lopen → l**oo**p (NOT l*o*p) — keep the *oo* sound",
        "  lezen → l**ee**s (NOT l*e*z) — keep the *ee* sound",
        "  kopen → k**oo**p — keep the *oo* sound",
        "",
        "RULE 2 — Single consonant doubles to keep vowel short:",
        "  pa**kk**en → pa**k** (the *kk* already makes it short)",
        "  zi**tt**en → zi**t** (the *tt* already makes it short)",
        "",
        "RULE 3 — **V** at end of stem becomes **F**, **Z** becomes **S**:",
        "  le**v**en → lee**f** (NOT leev) — Dutch words don't end in *v*",
        "  rei**z**en → rei**s** (NOT reiz) — Dutch words don't end in *z*",
        "  schrij**v**en → schrij**f** — v becomes f",
      ], examples: [
        "lopen (to walk): ik loop, jij loopt, wij lopen",
        "lezen (to read): ik lees, jij leest, wij lezen",
        "schrijven (to write): ik schrijf, jij schrijft, wij schrijven",
        "leven (to live/be alive): ik leef, jij leeft, wij leven",
        "zitten (to sit): ik zit, jij zit(+t=zit), wij zitten",
      ]},
      { title: "Zijn & Hebben (Irregular)", icon: "⭐", explanation: "The two most important verbs in Dutch are irregular — they don't follow the normal pattern. You must memorize them. They're also used as helping verbs for past tenses.", rules: [
        "ZIJN (to be):",
        "  ik ben — I am",
        "  jij bent / je bent — you are (informal)",
        "  u bent — you are (formal)",
        "  hij / zij / het is — he / she / it is",
        "  wij / we zijn — we are",
        "  jullie zijn — you all are",
        "  zij / ze zijn — they are",
        "",
        "HEBBEN (to have):",
        "  ik heb — I have",
        "  jij hebt / je hebt — you have",
        "  u heeft / u hebt — you have (formal)",
        "  hij / zij / het heeft — he / she / it has",
        "  wij / we hebben — we have",
        "  jullie hebben — you all have",
        "  zij / ze hebben — they have",
        "",
        "⚠️ Inversion: 'Ben jij...?' (drops -t), 'Heb jij...?' (drops -t)",
      ], examples: [
        "Ik ben moe. — I am tired.",
        "Ben jij klaar? — Are you ready? (NOT: Bent jij)",
        "Hij is mijn broer. — He is my brother.",
        "Wij zijn studenten. — We are students.",
        "Ik heb een hond. — I have a dog.",
        "Heb jij een fiets? — Do you have a bike? (NOT: Hebt jij)",
        "Zij hebben twee kinderen. — They have two children.",
      ]},
      { title: "Other Irregular Verbs", icon: "🔀", explanation: "A handful of very common verbs are irregular in the present tense. Here are the ones you'll encounter most often.", rules: [
        "GAAN (to go): ik ga, jij gaat, hij gaat, wij gaan",
        "STAAN (to stand): ik sta, jij staat, hij staat, wij staan",
        "SLAAN (to hit): ik sla, jij slaat, hij slaat, wij slaan",
        "DOEN (to do): ik doe, jij doet, hij doet, wij doen",
        "ZIEN (to see): ik zie, jij ziet, hij ziet, wij zien",
        "KOMEN (to come): ik kom, jij komt, hij komt, wij komen (regular in present!)",
        "",
        "WILLEN (to want): ik wil, jij wilt, hij wil, wij willen",
        "KUNNEN (to be able): ik kan, jij kunt/kan, hij kan, wij kunnen",
        "MOGEN (to be allowed): ik mag, jij mag, hij mag, wij mogen",
        "MOETEN (to have to): ik moet, jij moet, hij moet, wij moeten",
        "ZULLEN (shall/will): ik zal, jij zult/zal, hij zal, wij zullen",
      ], examples: [
        "Ik ga naar huis. — I go home.",
        "Wat doe jij? — What are you doing?",
        "Ik wil koffie. — I want coffee.",
        "Kan jij zwemmen? — Can you swim?",
        "Je mag niet roken. — You may not smoke.",
        "Ik moet werken. — I have to work.",
      ]},
      { title: "Articles: De vs Het", icon: "📝", explanation: "Dutch has two definite articles: 'de' (common gender, ~75% of nouns) and 'het' (neuter gender, ~25%). There is no reliable rule — you must memorize which one goes with each noun. But there ARE helpful patterns.", rules: [
        "De → common gender (de man, de vrouw, de tafel, de school)",
        "Het → neuter gender (het huis, het kind, het boek, het water)",
        "Een → indefinite article, always the same (een man, een huis)",
        "",
        "HELPFUL PATTERNS — 'het' words:",
        "  Diminutives (-je, -tje, -pje, -etje) → always het (het meisje, het huisje)",
        "  Verbs used as nouns → always het (het eten, het lezen, het zwemmen)",
        "  Languages/sports → usually het (het Nederlands, het voetbal)",
        "  Metals → usually het (het goud, het zilver)",
        "",
        "HELPFUL PATTERNS — 'de' words:",
        "  ALL plurals → always de (de huizen, de kinderen, de boeken)",
        "  People with gender → usually de (de man, de vrouw, de leraar)",
        "  -heid, -keit, -ing, -tie endings → always de (de vrijheid, de mogelijkheid)",
      ], examples: [
        "De man is groot. — The man is tall.",
        "Het huis is mooi. — The house is beautiful.",
        "Het meisje speelt. — The girl plays. (diminutive → het!)",
        "De huizen zijn duur. — The houses are expensive. (plural → de!)",
      ]},
      { title: "Word Order: The V2 Rule", icon: "🔢", explanation: "The single most important syntax rule in Dutch: the conjugated verb is ALWAYS in position 2 in main clauses. If anything other than the subject starts the sentence, subject and verb swap.", rules: [
        "NORMAL: **Subject** (pos 1) + **Verb** (pos 2) + Rest",
        "  *Ik* **werk** morgen. — I work tomorrow.",
        "",
        "INVERSION: **Other element** (pos 1) + **Verb** (pos 2) + *Subject* + Rest",
        "  Morgen **werk** *ik*. — Tomorrow I work.",
        "  Vandaag **ga** *ik* niet. — Today I don't go.",
        "",
        "The verb **ALWAYS** stays in position 2:",
        "  Nu **ben** *ik* moe. — Now I am tired.",
        "  In Amsterdam **woon** *ik*. — In Amsterdam I live.",
        "",
        "This applies to **ALL** main clauses, no exceptions.",
      ], examples: [
        "Ik ga morgen naar school. — I go to school tomorrow.",
        "Morgen ga ik naar school. — Tomorrow I go to school. (inversion!)",
        "Vandaag werk ik niet. — Today I don't work. (inversion!)",
        "Soms eet hij in een restaurant. — Sometimes he eats at a restaurant.",
      ]},
      { title: "Negation: Niet & Geen", icon: "🚫", explanation: "Two ways to negate in Dutch. 'Niet' negates verbs, adjectives, and specific nouns. 'Geen' replaces 'een' (a/an) and negates uncountable nouns.", rules: [
        "**NIET** — negates verbs, adjectives, de/het nouns:",
        "  Ik werk **niet**. — I don't work.",
        "  Het is **niet** groot. — It is not big.",
        "  Ik ken de man **niet**. — I don't know the man.",
        "",
        "**GEEN** — replaces *een*, negates uncountable nouns:",
        "  Ik heb *een* auto → Ik heb **geen** auto. — I don't have a car.",
        "  Er is **geen** water. — There is no water.",
        "  Ik heb **geen** geld. — I have no money.",
        "",
        "POSITION OF **NIET**:",
        "  After the object: Ik ken hem **niet**.",
        "  Before adjectives: Het is **niet** mooi.",
        "  Before prepositional phrases: Ik ga **niet** naar huis.",
        "  At the end if no specific target: Ik werk **niet**.",
      ], examples: [
        "Ik spreek niet goed Nederlands. — I don't speak Dutch well.",
        "Ik heb geen geld. — I have no money.",
        "Het is niet warm vandaag. — It is not warm today.",
        "Er zijn geen stoelen. — There are no chairs.",
      ]},
      { title: "Possessive Pronouns", icon: "🏷️", explanation: "Show ownership: my, your, his, her, etc. Most are simple, but 'ons/onze' changes based on the noun's gender.", rules: [
        "mijn — my (mijn huis, mijn auto)",
        "jouw / je — your, informal (jouw boek, je fiets)",
        "uw — your, formal (uw naam, uw adres)",
        "zijn — his (zijn vader, zijn werk)",
        "haar — her (haar moeder, haar school)",
        "ons — our + het-word (ons huis, ons kind)",
        "onze — our + de-word/plural (onze auto, onze kinderen)",
        "hun — their (hun ouders, hun huis)",
        "",
        "⚠️ Ons vs onze is the ONLY possessive that changes:",
        "  Ons huis (het huis → ons)",
        "  Onze auto (de auto → onze)",
        "  Onze kinderen (plural → onze)",
      ], examples: [
        "Mijn naam is Anna. — My name is Anna.",
        "Wat is jouw telefoonnummer? — What is your phone number?",
        "Zijn vader is arts. — His father is a doctor.",
        "Ons huis is groot. — Our house is big. (het-word → ons)",
        "Onze kinderen gaan naar school. — Our children go to school. (plural → onze)",
      ]},
      { title: "Asking Questions", icon: "❓", explanation: "Two types: yes/no questions (verb first) and information questions (question word first, verb second).", rules: [
        "YES/NO QUESTIONS — put verb in position 1:",
        "  Jij werkt hier. → Werk jij hier? — Do you work here?",
        "  Hij spreekt Nederlands. → Spreekt hij Nederlands?",
        "",
        "INFORMATION QUESTIONS — question word pos 1, verb pos 2:",
        "  Wie — who (Wie is dat?)",
        "  Wat — what (Wat doe je?)",
        "  Waar — where (Waar woon je?)",
        "  Wanneer — when (Wanneer kom je?)",
        "  Waarom — why (Waarom niet?)",
        "  Hoe — how (Hoe gaat het?)",
        "  Hoeveel — how much/many (Hoeveel kost dit?)",
        "  Welk/welke — which (Welke kleur?)",
        "",
        "Remember: the jij-t rule applies in questions too!",
        "Jij werkt → Werk jij? (NOT Werkt jij?)",
      ], examples: [
        "Spreek je Nederlands? — Do you speak Dutch?",
        "Waar woon je? — Where do you live?",
        "Hoeveel kost dit? — How much does this cost?",
        "Wanneer begint de les? — When does the class start?",
      ]},
    ],
    A2: [
      { title: "Perfect Tense (VTT)", icon: "✅", explanation: "The most common past tense in spoken Dutch. 'I have worked' / 'I worked'. Formed with hebben or zijn + past participle. The participle goes to the END of the sentence.", rules: [
        "STRUCTURE: **hebben/zijn** (pos 2) + ... + **past participle** (END)",
        "",
        "PAST PARTICIPLE — weak (regular) verbs:",
        "  **ge** + *stem* + **t/d**",
        "  Use **'T KoFSCHiP** to decide **-t** or **-d** (see next topic)",
        "",
        "PAST PARTICIPLE — strong (irregular) verbs:",
        "  **ge** + *vowel change* + **en**",
        "  These must be memorized (like English: go→gone, see→seen)",
        "",
        "WHEN TO USE **ZIJN** INSTEAD OF **HEBBEN**:",
        "  Verbs of *MOVEMENT* to a destination: gaan, komen, vertrekken, rijden",
        "  Verbs of *STATE CHANGE*: worden, groeien, sterven, beginnen",
        "  *zijn, blijven, gebeuren*",
        "  All other verbs use **hebben**",
      ], examples: [
        "Ik heb gewerkt. — I have worked / I worked.",
        "Zij is gegaan. — She has gone / She went. (motion → zijn)",
        "Wij hebben gegeten. — We have eaten / We ate.",
        "Hij is gekomen. — He has come / He came. (motion → zijn)",
        "Het is gebeurd. — It has happened. (zijn verb)",
      ]},
      { title: "'t Kofschip Rule", icon: "🚢", explanation: "This famous mnemonic helps you decide if a past participle ends in -t or -d. The name itself is a word: 't kofschip means 'het kofschip' — the cargo ship. The 't is short for 'het' (just like in spoken Dutch). Each consonant in the word tells you which stems get a -t ending.", rules: [
        "THE MNEMONIC: **'T K o F S CH i P**",
        "The letters that matter: **T, K, F, S, CH, P**",
        "(The vowels 'o' and 'i' are just there to make it a pronounceable word)",
        "",
        "*'t = het* → 'het kofschip' = the cargo ship 🚢",
        "If the **LAST letter** of the stem is **T, K, F, S, CH, or P** → ending is **-t**",
        "If the last letter is anything else → ending is **-d**",
        "",
        "STEMS ENDING IN A KOFSCHIP LETTER → **-t**:",
        "  werken → stem *werk* (**K** ✓) → ge**werk****t**",
        "  fietsen → stem *fiets* (**S** ✓) → ge**fiets****t**",
        "  koken → stem *kook* (**K** ✓) → ge**kook****t**",
        "  stoppen → stem *stop* (**P** ✓) → ge**stop****t**",
        "",
        "STEMS NOT IN KOFSCHIP → **-d**:",
        "  leren → stem *leer* (R ✗) → ge**leer****d**",
        "  wonen → stem *woon* (N ✗) → ge**woon****d**",
        "  bouwen → stem *bouw* (W ✗) → ge**bouw****d**",
        "",
        "REMEMBER: **v→f** and **z→s** in stems (Dutch words don't end in v or z):",
        "  leven → stem *leef* (**F** ✓) → geleefd — F is in kofschip!",
        "  reizen → stem *reis* (**S** ✓) → gereisd",
        "",
        "**NO ge- PREFIX** for verbs starting with *be-, ver-, ont-, ge-, her-, er-*:",
        "  betalen → betaald (NOT: gebetaald)",
        "  vertellen → verteld (NOT: geverteld)",
      ], examples: [
        "fietsen → gefietst (stem 'fiets', S is in 'T KoFSCHiP' → -t)",
        "werken → gewerkt (stem 'werk', K is in 'T KoFSCHiP' → -t)",
        "leven → geleefd (stem 'leef', F is in 'T KoFSCHiP' → -t!)",
        "bouwen → gebouwd (stem 'bouw', W is NOT in 'T KoFSCHiP' → -d)",
        "leren → geleerd (stem 'leer', R is NOT in 'T KoFSCHiP' → -d)",
        "betalen → betaald (no ge- prefix because of be-, L → -d)",
      ]},
      { title: "Simple Past Tense (OVT)", icon: "📜", explanation: "Used in stories, writing, and formal speech. More literary than the perfect tense. Weak verbs: stem + te(n)/de(n). Strong verbs: vowel changes.", rules: [
        "WEAK VERBS — use 'T KoFSCHiP again:",
        "  'T KoFSCHiP letters → stem + te (singular), stem + ten (plural)",
        "  Other letters → stem + de (singular), stem + den (plural)",
        "",
        "  werken: ik werkte, wij werkten",
        "  leren: ik leerde, wij leerden",
        "  wonen: ik woonde, wij woonden",
        "",
        "STRONG VERBS — vowel changes (memorize!):",
        "  gaan → ging / gingen",
        "  komen → kwam / kwamen",
        "  zien → zag / zagen",
        "  zijn → was / waren",
        "  hebben → had / hadden",
        "  schrijven → schreef / schreven",
        "",
        "In spoken Dutch, the perfect tense is used much more.",
        "The simple past is mainly for writing, stories, and news.",
      ], examples: [
        "Ik werkte gisteren. — I worked yesterday.",
        "Zij woonden in Rotterdam. — They lived in Rotterdam.",
        "Hij ging naar huis. — He went home.",
        "Wij waren moe. — We were tired.",
        "Zij had een kat. — She had a cat.",
      ]},
      { title: "Modal Verbs", icon: "💪", explanation: "Express ability, permission, obligation, or desire. The modal verb is conjugated in position 2; the main verb goes to the END as an infinitive.", rules: [
        "KUNNEN — can / to be able to (ik kan, jij kunt/kan, hij kan, wij kunnen)",
        "MOGEN — may / to be allowed to (ik mag, jij mag, hij mag, wij mogen)",
        "MOETEN — must / to have to (ik moet, jij moet, hij moet, wij moeten)",
        "WILLEN — to want (ik wil, jij wilt, hij wil, wij willen)",
        "ZULLEN — shall / will (ik zal, jij zult/zal, hij zal, wij zullen)",
        "",
        "STRUCTURE: subject + modal (conjugated) + ... + infinitive (END)",
        "  Ik kan zwemmen. — I can swim.",
        "  Wij moeten nu gaan. — We have to go now.",
        "",
        "WILLEN + GRAAG = polite 'would like':",
        "  Ik wil graag een koffie. — I would like a coffee.",
      ], examples: [
        "Ik kan goed zwemmen. — I can swim well.",
        "Je mag hier niet roken. — You may not smoke here.",
        "Wij moeten om acht uur vertrekken. — We have to leave at eight.",
        "Ik wil graag bestellen. — I would like to order.",
        "Zal ik je helpen? — Shall I help you?",
      ]},
      { title: "Separable Verbs", icon: "✂️", explanation: "Many Dutch verbs have a prefix (op, aan, af, uit, mee, etc.) that SEPARATES from the verb in main clauses and goes to the END.", rules: [
        "MAIN CLAUSE — prefix separates to end:",
        "  [op]bellen → Ik bel je **[op]**. — I call you.",
        "  [op]staan → Ik sta om 7 uur **[op]**. — I get up at 7.",
        "  [mee]gaan → Ga je **[mee]**? — Are you coming along?",
        "",
        "SUBORDINATE CLAUSE — stays together:",
        "  ...omdat ik je **[op]bel**. — ...because I call you.",
        "",
        "PERFECT TENSE — *ge-* goes BETWEEN prefix and stem:",
        "  [op]bellen → **[op]**ge**beld**",
        "  [aan]komen → **[aan]**ge**komen**",
        "  [mee]nemen → **[mee]**ge**nomen**",
        "",
        "COMMON SEPARABLE PREFIXES:",
        "  [op] (up), [aan] (on), [af] (off), [uit] (out), [mee] (along),",
        "  [bij] (with), [om] (around), [terug] (back), [thuis] (home), [weg] (away)",
      ], examples: [
        "Ik sta om 7 uur op. — I get up at 7. (opstaan)",
        "Hij komt morgen aan. — He arrives tomorrow. (aankomen)",
        "We gaan om 8 uur weg. — We leave at 8. (weggaan)",
        "Ik ruim mijn kamer op. — I tidy my room. (opruimen)",
        "Ga je mee naar de film? — Are you coming along to the movie?",
      ]},
      { title: "Adjective Endings", icon: "🎨", explanation: "Dutch adjectives usually get an -e ending before nouns. There is ONE famous exception: no -e with 'een' + het-word + singular.", rules: [
        "RULE: Add **-e** before the noun in most cases.",
        "",
        "**De-words**: ALWAYS **-e**",
        "  de *grote* man — the big man",
        "  een *grote* man — a big man",
        "",
        "**Het-words** with de/het: **-e**",
        "  het *grote* huis — the big house",
        "",
        "**Het-words** with een: **NO -e!** ⚠️",
        "  een *groot* huis — a big house (**NO** -e!)",
        "",
        "After the verb (predicative): **NO ending**",
        "  Het huis is *groot*. — The house is big.",
        "",
        "SUMMARY TABLE:",
        "  **de** + adj + de-noun → *grote* (de grote man)",
        "  **een** + adj + de-noun → *grote* (een grote man)",
        "  **het** + adj + het-noun → *grote* (het grote huis)",
        "  **een** + adj + het-noun → *groot* (een groot huis) ← **THE EXCEPTION**",
      ], examples: [
        "De grote man. — The big man. (de-word → always -e)",
        "Het grote huis. — The big house. (het + definite → -e)",
        "Een groot huis. — A big house. (een + het-word → NO -e!)",
        "Een grote man. — A big man. (een + de-word → -e)",
        "Het huis is groot. — The house is big. (predicative → no ending)",
      ]},
      { title: "Reflexive Verbs", icon: "🪞", explanation: "Some verbs need a reflexive pronoun (myself, yourself, etc.). The pronoun changes based on the subject.", rules: [
        "REFLEXIVE PRONOUNS:",
        "  ik → me / mij",
        "  jij → je",
        "  u → zich (formal)",
        "  hij / zij / het → zich",
        "  wij → ons",
        "  jullie → je",
        "  zij (they) → zich",
        "",
        "COMMON REFLEXIVE VERBS:",
        "  zich wassen — to wash oneself",
        "  zich voelen — to feel",
        "  zich vergissen — to be mistaken",
        "  zich aankleden — to get dressed",
        "  zich herinneren — to remember",
      ], examples: [
        "Ik was me. — I wash myself.",
        "Hij voelt zich goed. — He feels good.",
        "Wij vergissen ons. — We are mistaken.",
        "Zij kleedt zich aan. — She gets dressed.",
        "Herinner je je dat? — Do you remember that?",
      ]},
    ],
    B1: [
      { title: "Subordinate Clause Word Order", icon: "🔗", explanation: "After subordinating conjunctions, the conjugated verb goes to the END. This is one of the biggest word order shifts in Dutch.", rules: [
        "CONJUNCTIONS: dat, omdat, als, wanneer, hoewel, nadat, voordat, toen, terwijl, zodat, tenzij, of",
        "",
        "Main clause: verb in position 2",
        "  Ik denk + hij is ziek → standard",
        "",
        "Subordinate clause: verb to END",
        "  Ik denk dat hij ziek is. — I think that he is sick.",
        "  Omdat het regent, blijf ik thuis. — Because it rains, I stay home.",
        "",
        "If subordinate clause comes FIRST:",
        "  The main clause INVERTS (verb-subject)",
        "  Omdat het regent, BLIJF IK thuis. (not: ik blijf)",
      ], examples: [
        "Ik denk dat hij ziek is. — I think that he is sick.",
        "Omdat het regent, blijf ik thuis. — Because it's raining, I stay home.",
        "Ik weet niet wanneer hij komt. — I don't know when he's coming.",
        "Als je wilt, kunnen we gaan. — If you want, we can go.",
      ]},
      { title: "Relative Clauses (die/dat)", icon: "🔄", explanation: "'Die' and 'dat' connect a description to a noun. 'Die' for de-words and ALL plurals. 'Dat' for het-words singular only.", rules: [
        "De-words → die (de man die daar staat)",
        "Het-words singular → dat (het boek dat ik lees)",
        "ALL plurals → die (de kinderen die spelen)",
        "",
        "After prepositions:",
        "  People → wie (de man met wie ik sprak)",
        "  Things → waar + preposition (het boek waarover ik sprak)",
      ], examples: [
        "De man die daar staat, is mijn vader. — The man who stands there is my father.",
        "Het boek dat ik lees, is goed. — The book that I read is good.",
        "De mensen die hier wonen, zijn aardig. — The people who live here are nice.",
      ]},
      { title: "Passive Voice", icon: "🔀", explanation: "Two forms: 'worden' + participle (process/action), 'zijn' + participle (completed state).", rules: [
        "Action: worden + past participle",
        "State: zijn + past participle",
        "Agent: door (by)",
        "Impersonal passive: Er wordt + participle (very Dutch!)",
      ], examples: [
        "Het huis wordt gebouwd. — The house is being built.",
        "Het huis is gebouwd. — The house has been built.",
        "Er wordt hier veel gewerkt. — A lot of work is done here.",
      ]},
      { title: "Comparatives & Superlatives", icon: "📊", explanation: "Comparative: adjective + -er (+ dan). Superlative: het + adjective + -st(e).", rules: [
        "Comparative: adj + -er + dan",
        "Superlative: het + adj + -st(e)",
        "",
        "IRREGULAR:",
        "  goed → beter → best (good → better → best)",
        "  veel → meer → meest (much → more → most)",
        "  weinig → minder → minst (little → less → least)",
        "  graag → liever → liefst (gladly → rather → most gladly)",
      ], examples: [
        "Amsterdam is groter dan Utrecht. — Amsterdam is bigger than Utrecht.",
        "Dit is het beste restaurant. — This is the best restaurant.",
        "Ik drink liever thee. — I prefer to drink tea.",
      ]},
      { title: "Er (5 Uses)", icon: "📍", explanation: "'Er' is one of the trickiest Dutch words with 5 distinct uses. It roughly translates as 'there' or 'it'.", rules: [
        "1. EXISTENTIAL: Er zijn veel mensen. (There are many people)",
        "2. LOCATIVE: Ik ben er geweest. (I have been there)",
        "3. PREPOSITIONAL: Ik denk eraan. (I think about it)",
        "4. PARTITIVE: Ik heb er drie. (I have three of them)",
        "5. PASSIVE FILLER: Er wordt gedanst. (There is dancing)",
      ], examples: [
        "Er is geen melk meer. — There is no more milk.",
        "Ik heb er vijf. — I have five of them.",
        "Ik kijk ernaar. — I look at it.",
      ]},
      { title: "Om...Te + Infinitive", icon: "🎯", explanation: "Express purpose ('in order to'). Also used after certain adjectives and verbs.", rules: [
        "Purpose: om + te + infinitive (at end)",
        "After adjectives: moeilijk om te..., leuk om te...",
        "Separable verbs: prefix + te + stem (om op te staan)",
      ], examples: [
        "Ik ga naar de winkel om brood te kopen. — I go to the store to buy bread.",
        "Het is moeilijk om Nederlands te leren. — It's hard to learn Dutch.",
        "Hij probeert om op tijd te komen. — He tries to arrive on time.",
      ]},
    ],
    B2: [
      { title: "Double Infinitive", icon: "🔁", explanation: "When a modal verb is in the perfect tense, the past participle becomes an infinitive — creating two infinitives at the end.", rules: [
        "Normal: Ik heb gewerkt.",
        "With modal: Ik heb moeten werken. (NOT: gemoeten)",
        "Always: hebben + infinitive + infinitive",
        "Applies to: kunnen, moeten, willen, mogen, zullen, laten",
      ], examples: [
        "Ik heb kunnen komen. — I was able to come.",
        "Zij heeft moeten werken. — She had to work.",
        "Wij hebben het laten repareren. — We had it repaired.",
      ]},
      { title: "Indirect Speech", icon: "💬", explanation: "Reporting what someone said. Tense shifts back, use 'dat' clause.", rules: [
        "Direct: Hij zei: 'Ik ben ziek.'",
        "Indirect: Hij zei dat hij ziek was.",
        "Present → Past (ben → was, heb → had)",
        "Future → Conditional (zal → zou)",
      ], examples: [
        "Hij zei dat hij ziek was. — He said he was sick.",
        "Zij vertelde dat ze zou komen. — She said she would come.",
      ]},
      { title: "Er + Preposition (Pronominal Adverbs)", icon: "🔗", explanation: "For THINGS (not people), replace 'preposition + pronoun' with 'er + preposition'.", rules: [
        "Things: preposition + het → er + preposition",
        "  Ik denk aan het boek → Ik denk eraan.",
        "People: keep preposition + pronoun!",
        "  Ik denk aan haar → stays: Ik denk aan haar.",
        "Questions: waar + preposition",
        "  Waaraan denk je? — What are you thinking about?",
      ], examples: [
        "Ik wacht erop. — I wait for it.",
        "Ik denk eraan. — I think about it.",
        "Waar kijk je naar? — What are you looking at?",
      ]},
    ],
    C1: [
      { title: "Extended Attributive Constructions", icon: "📄", explanation: "Long modifier chains before the noun — common in written/formal Dutch.", rules: [
        "All modifiers go BEFORE the noun",
        "Past participles as adjectives: de door de regering aangekondigde maatregelen",
        "Present participles: de snel groeiende economie",
      ], examples: [
        "De door de regering aangekondigde maatregelen. — The measures announced by the government.",
        "Het in 2024 gepubliceerde rapport. — The report published in 2024.",
      ]},
      { title: "Formal Register", icon: "🏛️", explanation: "Official Dutch uses specific constructions that differ from everyday speech.", rules: [
        "'Dient te' instead of 'moet' (should/must)",
        "'Wordt verzocht' (is requested)",
        "Heavy passive voice, 'men' as impersonal subject",
      ], examples: [
        "U wordt verzocht plaats te nemen. — You are requested to sit down.",
        "Men dient rekening te houden met... — One should take into account...",
      ]},
      { title: "Cleft Sentences & Emphasis", icon: "💡", explanation: "Emphasize a part using 'Het is/was... die/dat...'", rules: [
        "Het is + emphasized element + die/dat + rest",
        "Use 'die' for people, 'dat' for things/actions",
      ], examples: [
        "Het is Jan die dat heeft gedaan. — It is Jan who did that.",
        "Het was gisteren dat ik het hoorde. — It was yesterday that I heard it.",
      ]},
    ],
    C2: [
      { title: "Literary & Archaic Forms", icon: "📚", explanation: "Found in literature, proverbs, and very formal texts.", rules: [
        "Des (genitive masculine): des morgens, des te beter",
        "Dezer/diens (demonstrative genitive)",
        "'s (reduced genitive): 's morgens, 's avonds, 's lands",
        "Subjunctive remnants: Leve de koning! Het zij zo.",
      ], examples: [
        "'s Morgens drink ik koffie. — In the morning I drink coffee.",
        "Des te beter! — All the better!",
        "Leve de koning! — Long live the king!",
      ]},
      { title: "Complex Embedding", icon: "🧩", explanation: "Multiple levels of subordination with correct verb placement. The hallmark of advanced Dutch.", rules: [
        "Each subordinate clause pushes verbs to its own end",
        "Multiple 'dat' clauses can nest",
        "Verb clusters at the end of deeply nested clauses",
      ], examples: [
        "Hij zei dat hij dacht dat zij zou komen. — He said that he thought that she would come.",
        "Het feit dat hij beweerde dat het waar was... — The fact that he claimed it was true...",
      ]},
    ],
  };

  const levels=["A1","A2","B1","B2","C1","C2"];
  const levelNames={A1:t("level_beginner",baseLang),A2:t("level_elementary",baseLang),B1:t("level_intermediate",baseLang),B2:t("level_upper_int",baseLang),C1:t("level_advanced",baseLang),C2:t("level_mastery",baseLang)};
  const levelColors={A1:"var(--teal)",A2:"var(--blue)",B1:"var(--gold)",B2:"#7B5EE8",C1:"var(--coral)",C2:"var(--gray-600)"};
  const rules=DUTCH_GRAMMAR[openLevel]||[];

  return(
    <div className="anim">
      <div style={{textAlign:"center",marginBottom:24}}>
        <div style={{fontSize:36,marginBottom:8}}>📝</div>
        <h2 className="hd" style={{fontSize:26,fontWeight:800,marginBottom:6}}>{(LANGUAGES.find(l=>l.code===lang)?.native||"") + " " + t("grammar_header",baseLang)}</h2>
        <p style={{color:"var(--gray-400)",fontSize:14}}>{t("grammar_sub",baseLang)}</p>
      </div>

      {/* Level tabs */}
      <div style={{display:"flex",gap:4,marginBottom:24,justifyContent:"center",flexWrap:"wrap"}}>
        {levels.map(lv=>(
          <button key={lv} onClick={()=>{setOpenLevel(lv);setOpenRule(null);}} style={{padding:"8px 16px",borderRadius:14,border:`2px solid ${openLevel===lv?levelColors[lv]:"var(--gray-200)"}`,background:openLevel===lv?levelColors[lv]:"white",color:openLevel===lv?"white":"var(--gray-500)",fontWeight:700,fontSize:12,cursor:"pointer",transition:"all .15s"}}>
            {lv}
          </button>
        ))}
      </div>

      <div style={{textAlign:"center",marginBottom:20}}>
        <span style={{fontSize:13,color:"var(--gray-400)",fontWeight:600}}>{levelNames[openLevel]} · {rules.length} topics</span>
      </div>

      {/* Grammar rules — expandable textbook cards */}
      <div style={{display:"flex",flexDirection:"column",gap:12}}>
        {rules.map((r,i)=>{
          const isOpen=openRule===i;
          return(
            <div key={i} className="anim" style={{animationDelay:`${i*0.04}s`,background:"var(--card-bg)",borderRadius:20,border:`2px solid ${isOpen?levelColors[openLevel]:"var(--gray-100)"}`,overflow:"hidden",boxShadow:isOpen?"0 6px 20px rgba(0,0,0,0.06)":"0 2px 8px rgba(0,0,0,0.02)",transition:"all .2s"}}>
              {/* Header — always visible */}
              <div onClick={()=>setOpenRule(isOpen?null:i)} style={{display:"flex",alignItems:"center",gap:14,padding:"16px 20px",cursor:"pointer"}}>
                <div style={{width:40,height:40,borderRadius:12,background:`${levelColors[openLevel]}15`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}><BrandIcon name={r.icon} size={20}/></div>
                <div style={{flex:1}}>
                  <div className="hd" style={{fontWeight:700,fontSize:15,color:"var(--gray-800)"}}>{r.title}</div>
                </div>
                <span style={{fontSize:18,color:"var(--gray-300)",transition:"transform .2s",transform:isOpen?"rotate(180deg)":"none"}}>⌄</span>
              </div>

              {/* Expanded content — textbook style */}
              {isOpen&&<div className="anim" style={{padding:"0 20px 20px",borderTop:"1.5px solid var(--gray-50)"}}>
                {/* Explanation */}
                <p style={{fontSize:14,color:"var(--gray-600)",lineHeight:1.8,marginTop:16,marginBottom:16}}>{r.explanation}</p>

                {/* De/Het color legend — shown for article-related topics */}
                {r.title.includes("De vs Het")&&<div style={{display:"flex",gap:12,marginBottom:16,flexWrap:"wrap"}}>
                  <div style={{flex:1,minWidth:140,background:ARTICLE_COLORS.de.pill,borderRadius:14,padding:"14px 18px",border:`2px solid ${ARTICLE_COLORS.de.pillText}25`}}>
                    <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:6}}>
                      <span style={{display:"inline-block",background:ARTICLE_COLORS.de.bg,color:"#fff",fontWeight:800,fontSize:16,borderRadius:8,padding:"4px 14px",boxShadow:`0 3px 10px ${ARTICLE_COLORS.de.shadow}`}}>de</span>
                      <span style={{fontWeight:700,fontSize:13,color:ARTICLE_COLORS.de.pillText}}>Common gender</span>
                    </div>
                    <div style={{fontSize:12,color:ARTICLE_COLORS.de.pillText,opacity:0.8}}>≈ 75% of nouns</div>
                    <div style={{fontSize:12,color:"var(--gray-500)",marginTop:6}}>de man · de vrouw · de tafel · de school</div>
                  </div>
                  <div style={{flex:1,minWidth:140,background:ARTICLE_COLORS.het.pill,borderRadius:14,padding:"14px 18px",border:`2px solid ${ARTICLE_COLORS.het.pillText}25`}}>
                    <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:6}}>
                      <span style={{display:"inline-block",background:ARTICLE_COLORS.het.bg,color:"#fff",fontWeight:800,fontSize:16,borderRadius:8,padding:"4px 14px",boxShadow:`0 3px 10px ${ARTICLE_COLORS.het.shadow}`}}>het</span>
                      <span style={{fontWeight:700,fontSize:13,color:ARTICLE_COLORS.het.pillText}}>Neuter gender</span>
                    </div>
                    <div style={{fontSize:12,color:ARTICLE_COLORS.het.pillText,opacity:0.8}}>≈ 25% of nouns</div>
                    <div style={{fontSize:12,color:"var(--gray-500)",marginTop:6}}>het huis · het kind · het boek · het water</div>
                  </div>
                </div>}

                {/* Rules box */}
                {r.rules&&<div style={{background:"linear-gradient(145deg, #F8F9FC, #F4F6FA)",borderRadius:14,padding:"16px 18px",marginBottom:16,border:"1.5px solid rgba(255,255,255,0.55)"}}>
                  <div style={{fontSize:11,fontWeight:700,color:levelColors[openLevel],textTransform:"uppercase",letterSpacing:1.5,marginBottom:10}}>📋 Rules</div>
                  {r.rules.map((rule,j)=>{
                    if(rule==="")return <div key={j} style={{height:8}}/>;
                    const isHeader=/^[A-Z\s'""→—:()0-9]+$/.test(rule)||/^[A-Z].{0,40}:$/.test(rule);
                    const renderRich=(text)=>{
                      return text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/).map((seg,si)=>{
                        if(seg.startsWith("**")&&seg.endsWith("**"))return <strong key={si} style={{color:"var(--gray-800)"}}>{seg.slice(2,-2)}</strong>;
                        if(seg.startsWith("*")&&seg.endsWith("*"))return <em key={si} style={{color:"var(--blue)"}}>{seg.slice(1,-1)}</em>;
                        return seg.split(/(\[[^\]]+\])/).map((part,pi)=>{
                          if(part.startsWith("[")&&part.endsWith("]"))return <span key={si+"-"+pi} style={{background:"rgba(245,166,35,0.2)",color:"var(--gold-dark)",fontWeight:700,borderRadius:3,padding:"0 3px"}}>{part.slice(1,-1)}</span>;
                          return part.split(/(→)/).map((bit,bi)=>{
                            if(bit==="→")return <span key={si+"-"+pi+"-"+bi} style={{color:levelColors[openLevel],fontWeight:800,margin:"0 2px"}}>→</span>;
                            return bit;
                          });
                        });
                      });
                    };
                    return(
                      <div key={j} style={{fontSize:isHeader?12:13,color:isHeader?levelColors[openLevel]:"var(--gray-700)",padding:isHeader?"8px 0 3px":"5px 0",lineHeight:1.6,display:"flex",gap:8,fontWeight:isHeader?800:400,letterSpacing:isHeader?0.5:0}}>
                        {!isHeader&&<span style={{color:levelColors[openLevel],fontWeight:800,flexShrink:0}}>•</span>}
                        <span>{renderRich(rule)}</span>
                      </div>
                    );
                  })}
                </div>}

                {/* Examples box */}
                {r.examples&&<div style={{background:"var(--gold-bg-light)",borderRadius:14,padding:"16px 18px",border:"1.5px solid rgba(245,166,35,0.15)"}}>
                  <div style={{fontSize:11,fontWeight:700,color:"var(--gold-dark)",textTransform:"uppercase",letterSpacing:1.5,marginBottom:10}}>💬 Examples</div>
                  {r.examples.map((ex,j)=>{
                    const isArticleTopic=r.title.includes("De vs Het")||r.title.includes("Articles");
                    // Apply rich text + article coloring
                    const renderRich2=(text)=>{
                      return text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/).map((seg,si)=>{
                        if(seg.startsWith("**")&&seg.endsWith("**"))return <strong key={si} style={{color:"var(--gray-800)"}}>{seg.slice(2,-2)}</strong>;
                        if(seg.startsWith("*")&&seg.endsWith("*"))return <em key={si} style={{color:"var(--blue)"}}>{seg.slice(1,-1)}</em>;
                        if(isArticleTopic){
                          return seg.split(/\b(de|het|De|Het)\b/).map((aseg,ai)=>{
                            const low=aseg.toLowerCase();
                            if(low==="de")return <span key={si+"-"+ai} style={{background:ARTICLE_COLORS.de.pill,color:ARTICLE_COLORS.de.pillText,fontWeight:700,borderRadius:4,padding:"1px 5px"}}>{aseg}</span>;
                            if(low==="het")return <span key={si+"-"+ai} style={{background:ARTICLE_COLORS.het.pill,color:ARTICLE_COLORS.het.pillText,fontWeight:700,borderRadius:4,padding:"1px 5px"}}>{aseg}</span>;
                            return aseg;
                          });
                        }
                        return seg.split(/(\[[^\]]+\])/).map((part,pi)=>{
                          if(part.startsWith("[")&&part.endsWith("]"))return <span key={si+"-"+pi} style={{background:"rgba(245,166,35,0.2)",color:"var(--gold-dark)",fontWeight:700,borderRadius:3,padding:"0 3px"}}>{part.slice(1,-1)}</span>;
                          return part;
                        });
                      });
                    };
                    return <div key={j} style={{fontSize:14,color:"var(--gray-700)",padding:"6px 0",lineHeight:1.7,borderBottom:j<r.examples.length-1?"1px solid rgba(245,166,35,0.1)":"none"}}>{renderRich2(ex)}</div>;
                  })}
                </div>}
              </div>}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ━━━━━━━━━━ PROFILE ━━━━━━━━━━

function Profile({user,lang,baseLang="en",setLang,onLogout,flags=[],setFlags}){
  const dk=document.documentElement.classList.contains("dark");
  const lv=getLevel(user.xp);
  const c=xpCurr(user.xp),n=xpNext(user.xp);
  const pct=((user.xp-c)/(n-c))*100;
  const L=LANGUAGES.find(l=>l.code===lang);
  const vocab=VOCAB[lang]||[];
  const learnedPct=vocab.length>0?Math.round((user.wl/vocab.length)*100):0;
  const [showManifesto,setShowManifesto]=useState(false);
  const [showAchievements,setShowAchievements]=useState(false);

  return(
    <div className="anim">
      {/* Profile header — purple gradient like all headers */}
      <div style={{background:"linear-gradient(180deg, #C0AEF8 0%, #A488F0 12%, #8B6AE4 30%, #7B5EE8 50%, #6545C8 75%, #5840B8 90%, #4A2BA6 100%)",borderRadius:24,padding:"28px 24px",marginBottom:24,position:"relative",overflow:"hidden",border:"2px solid rgba(255,255,255,0.18)",boxShadow:dk?"0 0 20px rgba(123,94,232,0.4), 0 8px 28px rgba(0,0,0,0.4), inset 0 2px 0 rgba(255,255,255,0.25), inset 0 -3px 0 rgba(0,0,0,0.15)":"0 0 16px rgba(123,94,232,0.2), 0 8px 28px rgba(123,94,232,0.25), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.12)",textAlign:"center"}}>
        <div style={{position:"absolute",top:0,left:"6%",right:"6%",height:"44%",borderRadius:"0 0 48% 48%",background:"linear-gradient(180deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.08) 55%, transparent 100%)",pointerEvents:"none",zIndex:1}}/>
        <div style={{position:"relative",zIndex:2}}>
          <div style={{width:88,height:88,borderRadius:24,background:"rgba(255,255,255,0.15)",backdropFilter:"blur(8px)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 12px",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.3), inset 0 -1px 0 rgba(0,0,0,0.1), 0 4px 16px rgba(0,0,0,0.15)"}}><AppIcon name="avatar" size={60}/></div>
          <h2 style={{fontSize:24,fontWeight:800,color:"white",textShadow:"0 2px 4px rgba(0,0,0,0.2)",margin:"0 0 4px",fontFamily:"'DM Sans','Inter',system-ui,sans-serif"}}>{t("prof_title",baseLang)}</h2>
          <p style={{fontSize:14,color:"rgba(255,255,255,0.75)",margin:0,display:"flex",alignItems:"center",justifyContent:"center",gap:6}}>{t("prof_learning",baseLang)} {L?.native} <CountryFlag code={lang} size={16}/></p>
        </div>
      </div>

      {/* Stats grid */}
      <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:12,marginBottom:20}}>
        {[
          {icon:"lightning_bolt",value:user.xp,label:t("prof_total_xp",baseLang)},
          {icon:"flame",value:`${user.streak} ${t("prof_days",baseLang)}`,label:t("prof_streak",baseLang)},
          {icon:"trophy",value:`${t("prof_level",baseLang)} ${lv}`,label:t("prof_rank",baseLang)},
          {icon:"brain",value:user.wl,label:t("prof_words_learned",baseLang)},
        ].map((s,i)=>(
          <div key={i} style={{background:dk?"linear-gradient(180deg, rgba(55,45,105,0.94) 0%, rgba(42,36,90,0.96) 40%, rgba(30,26,68,0.98) 100%)":"linear-gradient(180deg, #F8F5FF 0%, #F4F0FF 35%, #F0ECFF 65%, #EDE8FF 100%)",borderRadius:18,padding:"18px 16px",textAlign:"center",border:dk?"2px solid rgba(123,94,232,0.3)":"2px solid rgba(123,94,232,0.12)",boxShadow:dk?"0 6px 20px rgba(0,0,0,0.35), inset 0 2px 0 rgba(255,255,255,0.08), inset 0 -3px 0 rgba(0,0,0,0.15)":"0 6px 20px rgba(123,94,232,0.1), inset 0 2px 0 rgba(255,255,255,0.8), inset 0 -3px 0 rgba(123,94,232,0.05)"}}>
            <div style={{marginBottom:4}}><AppIcon name={s.icon} size={36}/></div>
            <div style={{fontSize:22,fontWeight:800,color:"var(--purple-accent)"}}>{s.value}</div>
            <div style={{fontSize:11,color:"var(--gray-500)",textTransform:"uppercase",letterSpacing:1.5,fontWeight:600}}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* CEFR Level */}
      {(()=>{const cefr=getUserCefr(user,lang);return(
        <div style={{background:"linear-gradient(180deg, #C0AEF8 0%, #A488F0 12%, #7B5EE8 50%, #5840B8 90%, #4A2BA6 100%)",borderRadius:18,padding:"16px 20px",marginBottom:20,display:"flex",alignItems:"center",gap:16,border:"2px solid rgba(255,255,255,0.18)",position:"relative",overflow:"hidden",boxShadow:dk?"0 0 14px rgba(123,94,232,0.3), 0 4px 16px rgba(0,0,0,0.3), inset 0 2px 0 rgba(255,255,255,0.2), inset 0 -2px 0 rgba(0,0,0,0.12)":"0 0 10px rgba(123,94,232,0.15), 0 4px 16px rgba(123,94,232,0.2), inset 0 2px 0 rgba(255,255,255,0.3), inset 0 -2px 0 rgba(0,0,0,0.1)"}}>
          <div style={{position:"absolute",top:0,left:"6%",right:"6%",height:"44%",borderRadius:"0 0 48% 48%",background:"linear-gradient(180deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.06) 55%, transparent 100%)",pointerEvents:"none",zIndex:1}}/>
          <div style={{width:52,height:52,borderRadius:16,background:"rgba(255,255,255,0.15)",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:18,fontWeight:900,position:"relative",zIndex:2,boxShadow:"inset 0 1px 0 rgba(255,255,255,0.3), 0 3px 10px rgba(0,0,0,0.15)"}}>{cefr.band}</div>
          <div style={{flex:1,position:"relative",zIndex:2}}>
            <div style={{fontSize:14,fontWeight:700,color:"white",marginBottom:2,textShadow:"0 1px 3px rgba(0,0,0,0.2)"}}>CEFR Level: {cefr.level}</div>
            <div style={{fontSize:12,color:"rgba(255,255,255,0.7)"}}>{cefr.label} • {cefr.desc}</div>
          </div>
        </div>
      );})()}

      {/* XP Progress bar */}
      <div style={{background:dk?"linear-gradient(180deg, rgba(55,45,105,0.94) 0%, rgba(42,36,90,0.96) 40%, rgba(30,26,68,0.98) 100%)":"linear-gradient(180deg, #F8F5FF 0%, #F4F0FF 35%, #F0ECFF 65%, #EDE8FF 100%)",borderRadius:18,padding:"18px 20px",border:dk?"2px solid rgba(123,94,232,0.3)":"2px solid rgba(123,94,232,0.12)",marginBottom:16,boxShadow:dk?"0 4px 16px rgba(0,0,0,0.3), inset 0 2px 0 rgba(255,255,255,0.06)":"0 4px 16px rgba(123,94,232,0.08), inset 0 2px 0 rgba(255,255,255,0.8)"}}>
        <div style={{display:"flex",justifyContent:"space-between",marginBottom:8}}>
          <span style={{fontWeight:700,fontSize:14,color:"var(--gray-700)"}}>{t("prof_level",baseLang)} {lv} → {lv+1}</span>
          <span style={{color:"var(--gray-400)",fontSize:13,fontWeight:600}}>{user.xp-c} / {n-c} XP</span>
        </div>
        <div className="xpbar"><div className="xpbar-fill" style={{width:`${clamp(pct,2,100)}%`}}/></div>
      </div>

      {/* Vocabulary progress */}
      <div style={{background:dk?"linear-gradient(180deg, rgba(55,45,105,0.94) 0%, rgba(42,36,90,0.96) 40%, rgba(30,26,68,0.98) 100%)":"linear-gradient(180deg, #F8F5FF 0%, #F4F0FF 35%, #F0ECFF 65%, #EDE8FF 100%)",borderRadius:18,padding:"18px 20px",border:dk?"2px solid rgba(123,94,232,0.3)":"2px solid rgba(123,94,232,0.12)",marginBottom:20,boxShadow:dk?"0 4px 16px rgba(0,0,0,0.3), inset 0 2px 0 rgba(255,255,255,0.06)":"0 4px 16px rgba(123,94,232,0.08), inset 0 2px 0 rgba(255,255,255,0.8)"}}>
        <div style={{display:"flex",justifyContent:"space-between",marginBottom:8}}>
          <span style={{fontWeight:700,fontSize:14,color:"var(--gray-700)",display:"flex",alignItems:"center",gap:6}}><AppIcon name="abc_blocks" size={20}/>{t("prof_vocab_progress",baseLang)}</span>
          <span style={{color:"var(--gray-400)",fontSize:13,fontWeight:600}}>{user.wl} / {vocab.length}</span>
        </div>
        <div className="xpbar"><div className="xpbar-fill" style={{width:`${clamp(learnedPct,1,100)}%`,background:"linear-gradient(90deg, #A890FF, #7B5EE8)"}}/></div>
        <div style={{fontSize:12,color:"var(--gray-400)",marginTop:6}}>{learnedPct}% {t("prof_of",baseLang)} {L?.native} {t("prof_dict_mastered",baseLang)}</div>
      </div>

      {/* Action buttons row */}
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:20}}>
        <button role="button" onClick={()=>setShowAchievements(true)} className="ghost-tile" style={{padding:"16px",borderRadius:18,border:dk?"2px solid rgba(123,94,232,0.3)":"2px solid rgba(123,94,232,0.12)",background:dk?"linear-gradient(180deg, rgba(55,45,105,0.94) 0%, rgba(42,36,90,0.96) 40%, rgba(30,26,68,0.98) 100%)":"linear-gradient(180deg, #F8F5FF 0%, #F4F0FF 35%, #F0ECFF 65%, #EDE8FF 100%)",cursor:"pointer",fontFamily:"inherit",display:"flex",alignItems:"center",justifyContent:"center",gap:8,transition:"transform 0.15s, box-shadow 0.15s, filter 0.15s, background 0.2s",boxShadow:dk?"0 4px 16px rgba(0,0,0,0.3), inset 0 2px 0 rgba(255,255,255,0.06)":"0 4px 16px rgba(123,94,232,0.08), inset 0 2px 0 rgba(255,255,255,0.8)"}}>
          <AppIcon name="crown" size={22}/><span style={{fontSize:14,fontWeight:700,color:"var(--gray-700)"}}>Achievements</span>
        </button>
        <button role="button" onClick={()=>setShowManifesto(true)} className="ghost-tile" style={{padding:"16px",borderRadius:18,border:dk?"2px solid rgba(123,94,232,0.3)":"2px solid rgba(123,94,232,0.12)",background:dk?"linear-gradient(180deg, rgba(55,45,105,0.94) 0%, rgba(42,36,90,0.96) 40%, rgba(30,26,68,0.98) 100%)":"linear-gradient(180deg, #F8F5FF 0%, #F4F0FF 35%, #F0ECFF 65%, #EDE8FF 100%)",cursor:"pointer",fontFamily:"inherit",display:"flex",alignItems:"center",justifyContent:"center",gap:8,transition:"transform 0.15s, box-shadow 0.15s, filter 0.15s, background 0.2s",boxShadow:dk?"0 4px 16px rgba(0,0,0,0.3), inset 0 2px 0 rgba(255,255,255,0.06)":"0 4px 16px rgba(123,94,232,0.08), inset 0 2px 0 rgba(255,255,255,0.8)"}}>
          <AppIcon name="clipboard" size={22}/><span style={{fontSize:14,fontWeight:700,color:"var(--gray-700)"}}>Manifesto</span>
        </button>
      </div>

      {/* Achievements popup */}
      {showAchievements&&<GlossyPopup title="Achievements" onClose={()=>setShowAchievements(false)}>
        <div style={{display:"flex",flexDirection:"column",gap:10}}>
          {ACHS.map(a=>{
            const ul=user.achs.includes(a.id);
            return <div key={a.id} style={{display:"flex",alignItems:"center",gap:12,padding:"12px 14px",borderRadius:14,background:ul?(dk?"rgba(46,205,167,0.1)":"rgba(46,205,167,0.06)"):(dk?"rgba(123,94,232,0.08)":"rgba(123,94,232,0.04)"),border:ul?`1.5px solid var(--teal)`:dk?"1.5px solid rgba(123,94,232,0.15)":"1.5px solid rgba(123,94,232,0.08)",opacity:ul?1:0.5}}>
              <div style={{fontSize:24,flexShrink:0}}>{a.icon}</div>
              <div style={{flex:1}}>
                <div style={{fontSize:13,fontWeight:700,color:ul?"var(--teal)":"var(--gray-600)"}}>{t(a.nameKey,baseLang)}</div>
                <div style={{fontSize:11,color:"var(--gray-400)"}}>{t(a.descKey,baseLang)}</div>
              </div>
              <span style={{padding:"3px 10px",borderRadius:8,background:ul?"rgba(46,205,167,0.1)":"rgba(123,94,232,0.06)",color:ul?"var(--teal)":"var(--purple-accent-text)",fontSize:11,fontWeight:700}}>+{a.xp}</span>
            </div>;
          })}
        </div>
      </GlossyPopup>}

      {/* Manifesto popup */}
      {showManifesto&&<GlossyPopup title="LingoVerse Manifesto" onClose={()=>setShowManifesto(false)}>
        <div style={{fontSize:13,lineHeight:1.8,color:"var(--gray-600)"}}>
          <p style={{fontWeight:700,color:"var(--gray-800)",marginBottom:12}}>LingoVerse is a self-sustaining multilingual AI learning ecosystem.</p>
          {["Foundations First Doctrine","Universal Literacy Principle","Meaning-Centric Architecture","Cultural Authenticity","Self-Improving System","Personalized AI Curriculum Layer"].map((title,i)=>
            <div key={i} style={{marginBottom:12}}><div style={{fontWeight:700,color:"var(--purple-accent-text)",marginBottom:2}}>{i+1}) {title}</div></div>
          )}
        </div>
      </GlossyPopup>}

      {/* Language switcher */}
      <div style={{marginBottom:20}}>
        <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:14}}>
          <AppIcon name="globe" size={22}/>
          <h3 style={{fontSize:16,fontWeight:700,color:"var(--gray-700)",margin:0,fontFamily:"'DM Sans','Inter',system-ui,sans-serif"}}>{t("prof_switch_lang",baseLang)}</h3>
        </div>
        <div style={{display:"flex",gap:10,flexWrap:"wrap",justifyContent:"center"}}>
          {LANGUAGES.map(l=>(
            <div key={l.code} className={`lang-card ${lang===l.code?"active":""}`} onClick={()=>setLang(l.code)} style={{cursor:"pointer"}}>
              <CountryFlag code={l.code} size={32} variant="plain"/><div className="name">{l.name}</div><div className="native">{l.native}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Logout */}
      <div style={{textAlign:"center",paddingTop:16,borderTop:dk?"2px solid rgba(123,94,232,0.15)":"2px solid rgba(123,94,232,0.06)"}}><button onClick={onLogout} style={{fontSize:14,padding:"12px 32px",borderRadius:14,border:"2px solid var(--coral)",background:"var(--card-bg)",color:"var(--coral)",fontWeight:700,cursor:"pointer",fontFamily:"inherit"}}>Log out</button></div>
    </div>
  );
}

// ━━━━━━━━━━ VOCABULARY PAGE (Dictionary-style, A1-C2) ━━━━━━━━━━

function VocabularyPage({lang,user,showToast,baseLang="en"}){
  const vocab=VOCAB[lang]||[];
  const [search,setSearch]=useState("");
  const [expanded,setExpanded]=useState(null);
  const [openLevels,setOpenLevels]=useState({A1:true});
  const [openCats,setOpenCats]=useState({});
  const [view,setView]=useState("levels"); // levels | all | misc
  const [vocabTab,setVocabTab]=useState("all"); // all | learned
  const isWordLearned=(w)=>user&&user.lw&&user.lw.has(w);
  const learnedCount=vocab.filter(w=>isWordLearned(w.word)).length;

  const levelMeta={
    A1:{icon:"🌱",label:t("level_beginner",baseLang),color:"var(--teal)",bg:"var(--teal-light)",dark:"var(--teal-dark)",desc:t("vocab_essential",baseLang)},
    A2:{icon:"📗",label:t("level_elementary",baseLang),color:"var(--blue)",bg:"var(--blue-light)",dark:"var(--blue)",desc:t("vocab_building",baseLang)},
    B1:{icon:"📘",label:t("level_intermediate",baseLang),color:"var(--gold)",bg:"var(--gold-light)",dark:"var(--gold-dark)",desc:t("vocab_opinions",baseLang)},
    B2:{icon:"📕",label:t("level_upper_int",baseLang),color:"var(--purple-accent-text)",bg:"var(--purple-flat)",dark:"#5B3DBF",desc:t("vocab_complex",baseLang)},
    C1:{icon:"🎓",label:t("level_advanced",baseLang),color:"var(--coral)",bg:"var(--coral-light)",dark:"#B83030",desc:t("vocab_professional",baseLang)},
    C2:{icon:"👑",label:t("level_mastery",baseLang),color:"var(--gray-600)",bg:"var(--gray-100)",dark:"var(--gray-700)",desc:t("vocab_native",baseLang)}
  };
  const levels=["A1","A2","B1","B2","C1","C2"];

  const numOrder={"nul":0,"een":1,"één":1,"twee":2,"drie":3,"vier":4,"vijf":5,"zes":6,"zeven":7,"acht":8,"negen":9,"tien":10,"elf":11,"twaalf":12,"dertien":13,"veertien":14,"vijftien":15,"zestien":16,"zeventien":17,"achttien":18,"negentien":19,"twintig":20,"dertig":30,"veertig":40,"vijftig":50,"zestig":60,"zeventig":70,"tachtig":80,"negentig":90,"honderd":100,"duizend":1000,"miljoen":1000000};
  const sortWords=(words,cat)=>{
    if(cat==="numbers") return [...words].sort((a,b)=>(numOrder[a.word.toLowerCase()]??999)-(numOrder[b.word.toLowerCase()]??999));
    return [...words].sort((a,b)=>a.word.localeCompare(b.word));
  };

  const filtered=useMemo(()=>vocab.filter(w=>{
    if(vocabTab==="learned"&&!isWordLearned(w.word))return false;
    if(search&&!w.word.toLowerCase().includes(search.toLowerCase())&&!w.translation.toLowerCase().includes(search.toLowerCase()))return false;
    return true;
  }),[vocab,search,vocabTab,user?.lw?.size]);

  // Group: level → category → words
  const grouped=useMemo(()=>{
    const result={};
    filtered.forEach(w=>{
      const lv=(w.level||"A1").substring(0,2);
      const cat=w.category||"general";
      if(!result[lv])result[lv]={};
      if(!result[lv][cat])result[lv][cat]=[];
      result[lv][cat].push(w);
    });
    return result;
  },[filtered]);

  const toggleLevel=lv=>setOpenLevels(p=>({...p,[lv]:!p[lv]}));
  const toggleCat=(lv,cat)=>{const k=lv+":"+cat;setOpenCats(p=>({...p,[k]:!p[k]}));};
  const totalFiltered=filtered.length;
  const catIcons={nouns:"📦",verbs:"⚡",adjectives:"🎨",adverbs:"💨",phrases:"💬",greetings:"👋",numbers:"🔢",pronouns:"👤",prepositions:"📍",conjunctions:"🔗",questions:"❓",expressions:"🗣️",exclamation:"❗",general:"📋"};
  const miscCats=["numbers","greetings","pronouns","prepositions","conjunctions","questions","exclamation","expressions"];

  // Shared word row renderer
  const WordRow=({w,wKey})=>{
    const art=w.article;
    const artColor=art==="de"?ARTICLE_COLORS.de:art==="het"?ARTICLE_COLORS.het:null;
    const isExp=expanded===wKey;
    const learned=isWordLearned(w.word);
    const lxId=getLexeme(lang,w.word);
    const lx=lxId?LEXEMES[lxId]:null;
    return(
      <div style={{borderRadius:10,border:`1px solid ${isExp?"var(--blue)":learned?"var(--teal)":"transparent"}`,marginBottom:2,transition:"all .15s"}}>
        <div onClick={()=>setExpanded(isExp?null:wKey)} style={{display:"flex",alignItems:"center",gap:8,padding:"8px 10px",cursor:"pointer",borderRadius:10,background:isExp?"var(--blue-pale)":learned?"rgba(46,205,167,0.04)":"transparent"}}>
          {learned&&<span style={{fontSize:12,flexShrink:0}}>✅</span>}
          {artColor&&<span style={{display:"inline-block",padding:"1px 6px",borderRadius:6,background:artColor.pill,fontSize:9,fontWeight:800,color:artColor.pillText}}>{art}</span>}
          <span style={{fontWeight:600,color:"var(--gray-800)",fontSize:14}}>{cap(w.word)}</span>
          <span style={{color:"var(--gray-300)"}}>—</span>
          <span style={{color:"var(--gray-500)",fontSize:13,flex:1}}>{cap(w.translation)}</span>
          <SpeakerButton text={w.word} lang={LANG_META[lang]?.ttsLocale||"en-US"} size={13} showToast={showToast}/>
        </div>
        {isExp&&<div className="anim" style={{padding:"4px 10px 10px"}}>
          {w.phonetic&&<span style={{display:"inline-block",background:"rgba(74,143,231,0.08)",borderRadius:8,padding:"2px 10px",fontSize:12,color:"var(--blue)",fontWeight:600,marginBottom:6}}>/{w.phonetic}/</span>}
          {w.level&&<span style={{display:"inline-block",marginLeft:6,padding:"2px 8px",borderRadius:6,background:"var(--gray-100)",fontSize:10,fontWeight:700,color:"var(--gray-500)"}}>{w.level}</span>}
          {lx&&lx.forms&&lx.forms.length>0&&<div style={{marginTop:6,display:"flex",flexWrap:"wrap",gap:4}}>
            <span style={{fontSize:10,color:"var(--gray-400)",fontWeight:600}}>Forms:</span>
            {lx.forms.map((f,fi)=><span key={fi} style={{fontSize:11,padding:"1px 6px",borderRadius:4,background:"var(--gray-100)",color:"var(--gray-500)"}}>{f}</span>)}
          </div>}
          {w.example&&<div style={{background:"var(--gold-bg-light)",borderRadius:10,padding:"10px 12px",border:"1px solid rgba(245,166,35,0.1)",marginTop:4}}>
            <div style={{fontSize:13,color:"var(--gray-700)",fontWeight:600,display:"flex",alignItems:"center",gap:6}}>
              <span>"{w.example}"</span>
              <SpeakerButton text={w.example} lang={LANG_META[lang]?.ttsLocale||"en-US"} size={12} showToast={showToast}/>
            </div>
            {w.exampleEn&&<div style={{fontSize:12,color:"var(--gray-400)",fontStyle:"italic",marginTop:2}}>"{w.exampleEn}"</div>}
          </div>}
        </div>}
      </div>
    );
  };

  return(
    <div className="anim">
      <div style={{textAlign:"center",marginBottom:24}}>
        <div style={{fontSize:36,marginBottom:8}}>📖</div>
        <h2 className="hd" style={{fontSize:26,fontWeight:800,marginBottom:6}}>Vocabulary</h2>
        <p style={{color:"var(--gray-400)",fontSize:14}}>{vocab.length} {t("vocab_across_levels",baseLang)} {levels.filter(l=>grouped[l]).length} {t("vocab_levels",baseLang)}</p>
      </div>

      {/* View mode tabs */}
      <div style={{display:"flex",gap:0,marginBottom:16,borderRadius:14,overflow:"hidden",border:"2px solid var(--gray-200)"}}>
        {[{id:"levels",label:"📊 "+t("vocab_tab_level",baseLang)},{id:"all",label:"🔤 "+t("vocab_tab_all",baseLang)},{id:"misc",label:"🔢 "+t("vocab_tab_special",baseLang)}].map(t=>(
          <button key={t.id} onClick={()=>{setView(t.id);setExpanded(null);}} style={{flex:1,padding:"10px 0",border:"none",cursor:"pointer",fontWeight:700,fontSize:12,fontFamily:"inherit",background:view===t.id?"var(--blue)":"var(--white)",color:view===t.id?"white":"var(--gray-500)",transition:"all .15s"}}>{t.label}</button>
        ))}
      </div>

      {/* Learned/All toggle */}
      <div style={{display:"inline-flex",background:"var(--gray-100)",borderRadius:12,padding:3,marginBottom:12}}>
        {[["all","All"],["learned",`Learned (${learnedCount})`]].map(([k,label])=>(
          <button key={k} onClick={()=>setVocabTab(k)} style={{padding:"7px 16px",borderRadius:10,fontSize:12,fontWeight:700,border:"none",cursor:"pointer",transition:"all 0.2s",background:vocabTab===k?"var(--white)":"transparent",color:vocabTab===k?"var(--gray-800)":"var(--gray-400)",boxShadow:vocabTab===k?"0 1px 4px rgba(0,0,0,0.08)":"none"}}>{label}</button>
        ))}
      </div>

      <input className="chat-input" value={search} onChange={e=>{setSearch(e.target.value);setExpanded(null);}} placeholder="🔍 Search words..." style={{marginBottom:16,fontSize:15,padding:12}}/>

      {search&&<div style={{textAlign:"center",fontSize:12,color:"var(--gray-400)",marginBottom:12}}>{totalFiltered} results for "{search}"</div>}

      {/* ═══ ALL A-Z VIEW ═══ */}
      {view==="all"&&<div style={{display:"grid",gap:2}}>
        {[...filtered].sort((a,b)=>a.word.localeCompare(b.word)).map((w,i)=><WordRow key={i} w={w} wKey={"all:"+i}/>)}
        {totalFiltered===0&&<div style={{textAlign:"center",color:"var(--gray-400)",fontSize:14,padding:32}}>No words found</div>}
      </div>}

      {/* ═══ SPECIAL / MISC VIEW ═══ */}
      {view==="misc"&&<div>
        {miscCats.map(cat=>{
          const words=sortWords(filtered.filter(w=>w.category===cat),cat);
          if(words.length===0)return null;
          const icon=catIcons[cat]||"📋";
          const catOpen=openCats["misc:"+cat]!==false;
          return(
            <div key={cat} style={{marginBottom:10,borderRadius:16,border:"1.5px solid rgba(255,255,255,0.55)",overflow:"hidden",background:"var(--card-bg)"}}>
              <div onClick={()=>{const k="misc:"+cat;setOpenCats(p=>({...p,[k]:!p[k]}));}} style={{display:"flex",alignItems:"center",gap:10,padding:"12px 16px",cursor:"pointer",background:"var(--gray-50)"}}>
                <span style={{fontSize:18}}>{icon}</span>
                <span style={{flex:1,fontSize:14,fontWeight:700,color:"var(--gray-600)",textTransform:"capitalize"}}>{cat}</span>
                <span style={{fontSize:11,fontWeight:600,color:"var(--gray-400)",background:"var(--gray-100)",borderRadius:10,padding:"2px 10px"}}>{words.length}</span>
                <span style={{fontSize:12,color:"var(--gray-300)",transition:"transform .2s",transform:catOpen?"rotate(180deg)":"none"}}>⌄</span>
              </div>
              {catOpen&&<div style={{padding:"4px 8px 8px"}}>
                {words.map((w,i)=><WordRow key={i} w={w} wKey={"misc:"+cat+":"+i}/>)}
              </div>}
            </div>
          );
        })}
      </div>}

      {/* ═══ LEVELS VIEW (default) ═══ */}
      {view==="levels"&&levels.map(lv=>{
        const cats=grouped[lv];
        if(!cats)return null;
        const meta=levelMeta[lv]||levelMeta.A1;
        const wordCount=Object.values(cats).reduce((s,ws)=>s+ws.length,0);
        const catKeys=Object.keys(cats).sort();
        const isOpen=openLevels[lv];

        return(
          <div key={lv} style={{marginBottom:16,borderRadius:20,overflow:"hidden",border:`2px solid ${isOpen?meta.color:"var(--gray-100)"}`,background:"var(--card-bg)",transition:"all .2s"}}>
            <div onClick={()=>toggleLevel(lv)} style={{display:"flex",alignItems:"center",gap:14,padding:"16px 20px",cursor:"pointer",background:isOpen?meta.bg:"var(--white)",transition:"all .2s"}}>
              <div style={{width:44,height:44,borderRadius:14,background:isOpen?meta.color:"var(--gray-200)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:isOpen?`0 4px 14px ${meta.color}40`:"none",transition:"all .2s"}}><BrandIcon name={meta.icon} size={22}/></div>
              <div style={{flex:1}}>
                <div style={{display:"flex",alignItems:"center",gap:8}}>
                  <span style={{fontSize:18,fontWeight:800,color:isOpen?meta.dark:"var(--gray-600)"}}>{lv}</span>
                  <span style={{fontSize:13,fontWeight:600,color:isOpen?meta.dark:"var(--gray-400)"}}>{meta.label}</span>
                </div>
                <div style={{fontSize:11,color:isOpen?meta.dark:"var(--gray-400)",opacity:0.7,marginTop:1}}>{meta.desc} · {wordCount} {t("prof_words",baseLang)} · {catKeys.length} {t("vocab_categories",baseLang)}</div>
              </div>
              <span style={{fontSize:16,color:isOpen?meta.dark:"var(--gray-300)",transition:"transform .2s",transform:isOpen?"rotate(180deg)":"none"}}>⌄</span>
            </div>

            {isOpen&&<div style={{padding:"8px 12px 12px"}}>
              {catKeys.map(cat=>{
                const words=sortWords(cats[cat],cat);
                const catKey=lv+":"+cat;
                const catOpen=openCats[catKey]!==false;
                const icon=catIcons[cat]||"📋";
                return(
                  <div key={cat} style={{marginBottom:8,borderRadius:14,border:"1.5px solid rgba(255,255,255,0.55)",overflow:"hidden"}}>
                    <div onClick={()=>toggleCat(lv,cat)} style={{display:"flex",alignItems:"center",gap:10,padding:"10px 14px",cursor:"pointer",background:"var(--gray-50)"}}>
                      <span style={{fontSize:16}}>{icon}</span>
                      <span style={{flex:1,fontSize:13,fontWeight:700,color:"var(--gray-600)",textTransform:"capitalize"}}>{cat}</span>
                      <span style={{fontSize:11,fontWeight:600,color:"var(--gray-400)",background:"var(--gray-100)",borderRadius:10,padding:"2px 8px"}}>{words.length}</span>
                      <span style={{fontSize:12,color:"var(--gray-300)",transition:"transform .2s",transform:catOpen?"rotate(180deg)":"none"}}>⌄</span>
                    </div>
                    {catOpen&&<div style={{padding:"4px 6px 6px"}}>
                      {words.map((w,i)=><WordRow key={i} w={w} wKey={lv+":"+cat+":"+i}/>)}
                    </div>}
                  </div>
                );
              })}
            </div>}
          </div>
        );
      })}
      {totalFiltered===0&&<div style={{textAlign:"center",color:"var(--gray-400)",fontSize:14,padding:32}}>No words found</div>}
    </div>
  );
}

// ━━━━━━━━━━ IDIOMS PAGE ━━━━━━━━━━

function IdiomsPage({lang,baseLang="en"}){
  const idioms=[
    {nl:"Met de deur in huis vallen",en:"To get straight to the point",lit:"To fall into the house with the door",level:"A2",note:"Used when someone skips small talk and says what they mean directly."},
    {nl:"Een appeltje voor de dorst",en:"Savings for a rainy day",lit:"An apple for thirst",level:"B1",note:"Having money or resources saved up for when you need them."},
    {nl:"Het regent pijpenstelen",en:"It's raining cats and dogs",lit:"It's raining pipe stems",level:"A2",note:"Very Dutch — because it rains so much in the Netherlands! 🌧️"},
    {nl:"Helaas, pindakaas",en:"Too bad, so sad",lit:"Unfortunately, peanut butter",level:"A1",note:"Playful rhyme used to say 'oh well, nothing we can do about it'. Very informal."},
    {nl:"Nu komt de aap uit de mouw",en:"Now the truth comes out",lit:"Now the monkey comes out of the sleeve",level:"B1",note:"When someone's real intentions are finally revealed."},
    {nl:"Dat is mosterd na de maaltijd",en:"That's too little, too late",lit:"That's mustard after the meal",level:"B2",note:"Help or advice that arrives after it's no longer useful."},
    {nl:"Op een koopje",en:"For a bargain / on the cheap",lit:"On a little buy",level:"A2",note:"The Dutch love a good deal — this phrase is used constantly!"},
    {nl:"Iets door de vingers zien",en:"To turn a blind eye",lit:"To see something through the fingers",level:"B1",note:"Deliberately ignoring someone's mistake or wrongdoing."},
  ];

  return(
    <div className="anim">
      <div style={{textAlign:"center",marginBottom:28}}>
        <div style={{fontSize:36,marginBottom:8}}>💬</div>
        <h2 className="hd" style={{fontSize:26,fontWeight:800,marginBottom:6}}>{(LANGUAGES.find(l=>l.code===lang)?.native||"") + " " + t("idioms_header",baseLang)}</h2>
        <p style={{color:"var(--gray-400)",fontSize:14}}>{t("idioms_sub",baseLang)} {LANGUAGES.find(l=>l.code===lang)?.native||""}</p>
      </div>

      <div style={{display:"grid",gap:14}}>
        {idioms.map((id,i)=>(
          <div key={i} style={{background:"linear-gradient(145deg, #F8F4FF, #FFF8F4)",borderRadius:20,border:"1.5px solid rgba(123,94,232,0.12)",padding:"20px 22px",boxShadow:"0 3px 12px rgba(0,0,0,0.03)"}}>
            <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:10}}>
              <span style={{padding:"3px 12px",borderRadius:10,background:"var(--purple-flat)",fontSize:10,fontWeight:700,color:"var(--purple-accent-text)"}}>{id.level}</span>
            </div>
            <div className="hd" style={{fontSize:18,fontWeight:800,color:"var(--gray-800)",marginBottom:4}}>"{id.nl}"</div>
            <div style={{fontSize:14,color:"var(--teal-dark)",fontWeight:700,marginBottom:2}}>→ {id.en}</div>
            <div style={{fontSize:13,color:"var(--gray-400)",fontStyle:"italic",marginBottom:10}}>Literally: "{id.lit}"</div>
            {id.note&&<div style={{fontSize:13,color:"var(--gray-500)",lineHeight:1.6,background:"rgba(255,255,255,0.6)",borderRadius:12,padding:"10px 14px"}}><AppIcon name="lightbulb" size={20} style={{marginRight:5,verticalAlign:"middle"}}/>{id.note}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}

// ━━━━━━━━━━ ONBOARDING ━━━━━━━━━━

// Flag color mappings for logo gradient
const FLAG_COLORS={
  nl:["#AE1C28","#FFFFFF","#21468B"], // Red White Blue (horizontal)
  fr:["#002395","#FFFFFF","#ED2939"], // Blue White Red
  de:["#000000","#DD0000","#FFCE00"], // Black Red Gold
  es:["#AA151B","#F1BF00","#AA151B"], // Red Yellow Red
  ro:["#002B7F","#FCD116","#CE1126"], // Blue Yellow Red
  it:["#008C45","#FFFFFF","#CD212A"], // Green White Red
  pt:["#006600","#FF0000","#FFCC00"],
  ja:["#FFFFFF","#BC002D","#FFFFFF"], // White Red White (hinomaru)
  ko:["#FFFFFF","#003478","#C60C30"], // White Blue Red
  zh:["#DE2910","#FFDE00","#DE2910"], // Red Yellow Red
  en:["#00247D","#FFFFFF","#CF142B"], // Blue White Red (union jack)
  ru:["#FFFFFF","#0039A6","#D52B1E"], // White Blue Red
};

// ── AUTH & PROFILE CREATION SCREEN ──
function AuthScreen({onAuth,lang,baseLang="en"}){
  const dk=document.documentElement.classList.contains("dark");
  const [mode,setMode]=useState("welcome"); // welcome | login | create
  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");
  const [error,setError]=useState("");
  // Profile creation fields
  const [displayName,setDisplayName]=useState("");
  const [avatar,setAvatar]=useState("🧑‍🚀");
  const [level,setLevel]=useState("beginner");
  const [dailyGoal,setDailyGoal]=useState(15);

  const avatars=["🧑‍🚀","👩‍🎓","🧑‍💻","👨‍🏫","🌍","🦊","🐱","🎨","🌸","⭐","🦉","🐝"];

  const handleLogin=()=>{
    setError("");
    if(username.toLowerCase()==="q"&&password==="q"){
      onAuth({displayName:username,avatar:"🧑‍🚀",level:"beginner",dailyGoal:15,createdAt:new Date().toISOString()});
    } else {
      setError("Invalid username or password");
    }
  };

  // Ctrl+S → context-sensitive action on ALL auth screens
  useEffect(()=>{
    const h=e=>{
      if((e.ctrlKey||e.metaKey)&&e.key==="s"){
        e.preventDefault();
        if(mode==="welcome") setMode("create");
        else if(mode==="login") handleLogin();
        else if(mode==="create") handleCreate();
      }
    };
    window.addEventListener("keydown",h);
    return ()=>window.removeEventListener("keydown",h);
  },[mode,username,password,displayName,avatar,level,dailyGoal]);

  const handleCreate=()=>{
    if(!displayName.trim()){setError("Please enter a display name");return;}
    if(!username.trim()||!password.trim()){setError("Username and password required");return;}
    onAuth({displayName:displayName.trim(),avatar,level,dailyGoal,createdAt:new Date().toISOString()});
  };

  if(mode==="welcome") return(
    <div className="ob-overlay">
      <div className="ob-card" style={{maxWidth:420}}>
        <div style={{width:88,height:88,borderRadius:24,margin:"0 auto 20px",background:"linear-gradient(135deg,#7B5EE8,#A890FF)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 8px 32px rgba(123,94,232,0.3)",overflow:"hidden"}}>
          <CountryFlag code={lang} size={60}/>
        </div>
        <h1 className="hd" style={{fontSize:32,fontWeight:800,marginBottom:6,background:"linear-gradient(135deg,#7B5EE8,#A890FF)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>Welcome!</h1>
        <p style={{color:"var(--gray-500)",fontSize:15,lineHeight:1.6,maxWidth:340,margin:"0 auto 32px"}}>Sign in to track your progress across devices, or create a new account to get started.</p>
        <div style={{display:"flex",flexDirection:"column",gap:10,maxWidth:280,margin:"0 auto"}}>
          <button className="btn btn-blue" style={{fontSize:16,padding:"15px 0",borderRadius:16,width:"100%"}} onClick={()=>setMode("login")}>{t("auth_sign_in_btn",baseLang)}</button>
          <button className="btn btn-outline" style={{fontSize:15,padding:"14px 0",borderRadius:16,width:"100%"}} onClick={()=>setMode("create")}>{t("auth_create_account",baseLang)} ✨</button>
        </div>
      </div>
    </div>
  );

  if(mode==="login") return(
    <div className="ob-overlay">
      <div className="ob-card" style={{maxWidth:400}}>
        <button onClick={()=>{setMode("welcome");setError("");}} style={{position:"absolute",top:16,left:16,background:"none",border:"none",fontSize:18,cursor:"pointer",color:"var(--gray-400)"}}>←</button>
        <div style={{width:64,height:64,borderRadius:18,margin:"0 auto 16px",background:"linear-gradient(135deg,#7B5EE8,#A890FF)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:28,boxShadow:"0 6px 24px rgba(123,94,232,0.25)"}}>🔐</div>
        <h2 className="hd" style={{fontSize:24,fontWeight:800,marginBottom:4}}>{t("auth_sign_in",baseLang)}</h2>
        <p style={{color:"var(--gray-400)",fontSize:13,marginBottom:24}}>Welcome back, language explorer!</p>
        <div style={{maxWidth:300,margin:"0 auto",display:"flex",flexDirection:"column",gap:12}}>
          <input value={username} onChange={e=>setUsername(e.target.value)} placeholder={t("auth_username",baseLang)} style={{width:"100%",padding:"14px 18px",borderRadius:14,border:"2px solid var(--gray-200)",fontSize:15,fontFamily:"inherit",outline:"none",transition:"border .15s"}} onFocus={e=>e.target.style.borderColor="var(--purple-accent)"} onBlur={e=>e.target.style.borderColor="var(--gray-200)"}/>
          <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder={t("auth_password",baseLang)} onKeyDown={e=>e.key==="Enter"&&handleLogin()} style={{width:"100%",padding:"14px 18px",borderRadius:14,border:"2px solid var(--gray-200)",fontSize:15,fontFamily:"inherit",outline:"none",transition:"border .15s"}} onFocus={e=>e.target.style.borderColor="var(--purple-accent)"} onBlur={e=>e.target.style.borderColor="var(--gray-200)"}/>
          {error&&<div style={{color:"var(--coral)",fontSize:13,fontWeight:600,textAlign:"center"}}>{error}</div>}
          <button className="btn btn-blue" style={{fontSize:16,padding:"14px 0",borderRadius:14,width:"100%",marginTop:4}} onClick={handleLogin}>{t("auth_sign_in_btn",baseLang)}</button>
        </div>
      </div>
    </div>
  );

  // CREATE ACCOUNT
  return(
    <div className="ob-overlay" style={{overflowY:"auto",padding:20}}>
      <div className="ob-card" style={{maxWidth:440,position:"relative"}}>
        <button onClick={()=>{setMode("welcome");setError("");}} style={{position:"absolute",top:16,left:16,background:"none",border:"none",fontSize:18,cursor:"pointer",color:"var(--gray-400)"}}>←</button>
        <h2 className="hd" style={{fontSize:24,fontWeight:800,marginBottom:4}}>{t("auth_create_profile",baseLang)}</h2>
        <p style={{color:"var(--gray-400)",fontSize:13,marginBottom:20}}>Personalise your learning journey</p>

        {/* Avatar picker */}
        <div style={{textAlign:"center",marginBottom:20}}>
          <div style={{width:80,height:80,borderRadius:22,margin:"0 auto 10px",background:"linear-gradient(135deg, var(--blue-light), var(--teal-light))",border:"3px solid var(--blue)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:40,boxShadow:"0 4px 16px rgba(74,143,231,0.2)"}}>{avatar}</div>
          <div style={{display:"flex",gap:6,justifyContent:"center",flexWrap:"wrap",maxWidth:300,margin:"0 auto"}}>
            {avatars.map(a=>(
              <div key={a} onClick={()=>setAvatar(a)} style={{width:36,height:36,borderRadius:10,display:"flex",alignItems:"center",justifyContent:"center",fontSize:18,cursor:"pointer",border:`2px solid ${avatar===a?"var(--blue)":"var(--gray-200)"}`,background:avatar===a?"var(--blue-light)":"var(--white)",transition:"all .15s"}}>{a}</div>
            ))}
          </div>
        </div>

        <div style={{maxWidth:320,margin:"0 auto",display:"flex",flexDirection:"column",gap:10}}>
          <input value={displayName} onChange={e=>setDisplayName(e.target.value)} placeholder={t("auth_display_name",baseLang)} style={{width:"100%",padding:"13px 18px",borderRadius:14,border:"2px solid var(--gray-200)",fontSize:15,fontFamily:"inherit",outline:"none"}} onFocus={e=>e.target.style.borderColor="var(--purple-accent)"} onBlur={e=>e.target.style.borderColor="var(--gray-200)"}/>
          <input value={username} onChange={e=>setUsername(e.target.value)} placeholder={t("auth_username",baseLang)} style={{width:"100%",padding:"13px 18px",borderRadius:14,border:"2px solid var(--gray-200)",fontSize:15,fontFamily:"inherit",outline:"none"}} onFocus={e=>e.target.style.borderColor="var(--purple-accent)"} onBlur={e=>e.target.style.borderColor="var(--gray-200)"}/>
          <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder={t("auth_password",baseLang)} style={{width:"100%",padding:"13px 18px",borderRadius:14,border:"2px solid var(--gray-200)",fontSize:15,fontFamily:"inherit",outline:"none"}} onFocus={e=>e.target.style.borderColor="var(--purple-accent)"} onBlur={e=>e.target.style.borderColor="var(--gray-200)"}/>

          {/* Experience level */}
          <div style={{marginTop:4}}>
            <div style={{fontSize:13,fontWeight:700,color:"var(--gray-600)",marginBottom:8}}>{t("auth_your_level",baseLang)}</div>
            <div style={{display:"flex",gap:6}}>
              {[{id:"beginner",label:"🌱 "+t("level_beginner",baseLang),desc:t("ob_starting_fresh",baseLang)},{id:"some",label:"📗 "+t("ob_some_basics",baseLang),desc:t("ob_know_few",baseLang)},{id:"inter",label:"📘 "+t("level_intermediate",baseLang),desc:t("ob_can_converse",baseLang)}].map(l=>(
                <div key={l.id} onClick={()=>setLevel(l.id)} style={{flex:1,padding:"10px 8px",borderRadius:12,border:`2px solid ${level===l.id?"var(--teal)":"var(--gray-200)"}`,background:level===l.id?"var(--teal-light)":"var(--white)",cursor:"pointer",textAlign:"center",transition:"all .15s"}}>
                  <div style={{fontSize:12,fontWeight:700,color:level===l.id?"var(--teal-dark)":"var(--gray-600)"}}>{l.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Daily goal */}
          <div style={{marginTop:4}}>
            <div style={{fontSize:13,fontWeight:700,color:"var(--gray-600)",marginBottom:8}}>{t("auth_daily_goal",baseLang)}</div>
            <div style={{display:"flex",gap:6}}>
              {[{min:5,label:"5 min",emoji:"🐢"},{min:15,label:"15 min",emoji:"🚶"},{min:30,label:"30 min",emoji:"🏃"}].map(g=>(
                <div key={g.min} onClick={()=>setDailyGoal(g.min)} style={{flex:1,padding:"10px 8px",borderRadius:12,border:`2px solid ${dailyGoal===g.min?"var(--blue)":"var(--gray-200)"}`,background:dailyGoal===g.min?"var(--blue-light)":"var(--white)",cursor:"pointer",textAlign:"center",transition:"all .15s"}}>
                  <div style={{fontSize:18}}>{g.emoji}</div>
                  <div style={{fontSize:12,fontWeight:700,color:dailyGoal===g.min?"var(--blue)":"var(--gray-600)"}}>{g.label}</div>
                </div>
              ))}
            </div>
          </div>

          {error&&<div style={{color:"var(--coral)",fontSize:13,fontWeight:600,textAlign:"center"}}>{error}</div>}
          <button className="btn btn-blue" style={{fontSize:16,padding:"14px 0",borderRadius:14,width:"100%",marginTop:8}} onClick={handleCreate}>Create Profile ✨</button>
        </div>
      </div>
    </div>
  );
}

function Onboarding({onComplete}){
  const dk=document.documentElement.classList.contains("dark");
  const [targetSel,setTargetSel]=useState(null);
  const baseSel="en"; // D83: hardcoded until Arabic source language is added

  // Ctrl+S → proceed
  useEffect(()=>{
    const h=e=>{
      if((e.ctrlKey||e.metaKey)&&e.key==="s"){
        e.preventDefault();
        if(targetSel) onComplete(baseSel,targetSel);
      }
    };
    window.addEventListener("keydown",h);
    return ()=>window.removeEventListener("keydown",h);
  },[targetSel]);

  // D85: Single screen — pick target language. No splash, no auth. Flag icon grid matching Profile screen.
  return(
    <div className="ob-overlay" style={{overflowY:"auto",padding:20}}>
      <div className="ob-card" style={{maxWidth:520}}>
        <div style={{width:76,height:76,borderRadius:19,margin:"0 auto 16px",overflow:"hidden",boxShadow:"0 8px 28px rgba(123,94,232,0.25)",position:"relative"}}>
          {targetSel?(
            <div style={{width:"100%",height:"100%",background:"linear-gradient(135deg,#7B5EE8,#A890FF)",display:"flex",alignItems:"center",justifyContent:"center"}}><CountryFlag code={targetSel} size={44}/></div>
          ):(
            <div style={{width:"100%",height:"100%",background:"linear-gradient(135deg,#7B5EE8,#A890FF)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:32,fontWeight:900,color:"#fff",fontFamily:"'DM Sans',sans-serif"}}>L</div>
          )}
        </div>
        <h2 className="hd" style={{fontSize:26,fontWeight:800,marginBottom:4}}>{t("ob_i_want_learn",baseSel)}</h2>
        <p style={{color:"var(--gray-400)",marginBottom:24,fontSize:14}}>{t("ob_choose_target",baseSel)}</p>

        <div style={{display:"flex",gap:10,flexWrap:"wrap",justifyContent:"center",maxWidth:460,margin:"0 auto 28px"}}>
          {LANGUAGES.map(l=>(
            <div key={l.code} className={`lang-card ${targetSel===l.code?"active":""}`} onClick={()=>setTargetSel(l.code)} style={{cursor:"pointer"}}>
              <CountryFlag code={l.code} size={32} variant="plain"/><div className="name">{l.name}</div><div className="native">{l.native}</div>
            </div>
          ))}
        </div>

        <button className="btn btn-blue" style={{fontSize:17,padding:"14px 36px",borderRadius:16,opacity:targetSel?1:.4,transition:"all .2s"}} disabled={!targetSel} onClick={()=>targetSel&&onComplete(baseSel,targetSel)}>
          {t("ob_start_learning",baseSel)} {targetSel?<CountryFlag code={targetSel} size={16}/>:""}
        </button>
      </div>
    </div>
  );
}

// ━━━━━━━━━━ MAIN APP ━━━━━━━━━━


// ━━━━━━━━━━ CURRICULUM DATA — imported from src/data/ modules ━━━━━━━━━━
const UNITS = [...dutchUnits, ...koreanUnits, ...germanUnits, ...frenchUnits, ...spanishUnits, ...otherUnits];

// ── CURRICULUM SEARCH (D113) ──
// Searches all units for the active language. Returns up to 80 results.
// Checks nl/en/note/example/exampleEn/q/text/title/s/opts/pairs/a fields.
function searchUnits(query,lang){
  if(!query||query.trim().length<2)return[];
  const q=query.toLowerCase().trim();
  const results=[];
  const langUnits=UNITS.filter(u=>u.lang===lang);
  for(const unit of langUnits){
    for(const lesson of(unit.lessons||[])){
      for(let si=0;si<(lesson.steps||[]).length;si++){
        const s=lesson.steps[si];
        const texts=[
          s.nl,s.en,s.note,s.example,s.exampleEn,s.q,s.text,s.title,s.s,s.desc,
          ...(s.opts||[]),
          ...(s.pairs||[]).flatMap(p=>[p.nl,p.en]),
          ...(Array.isArray(s.a)?s.a:[s.a||''])
        ].filter(t=>typeof t==='string');
        if(texts.some(t=>t.toLowerCase().includes(q))){
          results.push({unit,lesson,si,step:s});
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


// ━━━━━━━━━━ LEARN PAGE — CURRICULUM UI ━━━━━━━━━━

function LearnPage({lang,baseLang="en",user,setUser,addXp,learnWord,showToast,addFlag}){
  const dk=document.documentElement.classList.contains("dark");
  const [view,setView]=useState("map"); // map | lesson | exercise
  const [selUnit,setSelUnit]=useState(null);
  const [selLesson,setSelLesson]=useState(null);
  const [chapterNav,setChapterNav]=useState("select"); // lifted from UnitMap
  const [fkSection,setFkSection]=useState(null); // lifted from UnitMap — FK section drill-down
  const [fkMode,setFkMode]=useState("select"); // "select" | "reference" | "playthrough" | "gatequiz" — FK multi-track system
  const L=LANGUAGES.find(l=>l.code===lang);

  const completeLesson=(unit,lesson)=>{
    const lk=`${lang}:${unit.n}:${lesson.id}`;
    const uk=`${lang}:${unit.n}`;
    // Extract all mk keys used in this lesson's steps (tr, match, fb types)
    const lessonMks=[];
    if(lesson.steps){
      for(const st of lesson.steps){
        if(st.mk) lessonMks.push(st.mk);
        if(st.mks) lessonMks.push(...st.mks);
      }
    }
    // Resolve mk keys to actual words in the target language
    const mkWords=[];
    for(const mk of lessonMks){
      const m=MEANINGS[mk];
      if(m&&m[lang]&&m[lang][0]) mkWords.push(m[lang][0]);
    }
    setUser(u=>{
      const p={...(u.progress||{}),lessons:{...(u.progress?.lessons||{})},units:{...(u.progress?.units||{})},learnedMk:[...(u.progress?.learnedMk||[])]};
      p.lessons[lk]=true;
      // Add any new mk keys from this lesson
      const mkSet=new Set(p.learnedMk);
      for(const mk of lessonMks) mkSet.add(mk);
      p.learnedMk=[...mkSet];
      const total=unit.lessons.length;
      const doneCount=unit.lessons.filter(ls=>p.lessons[`${lang}:${unit.n}:${ls.id}`]).length;
      p.units[uk]={completed:doneCount>=total,pct:total>0?Math.round((doneCount/total)*100):0,doneCount,total};
      // Also add mk-resolved words to user.lw so vocabulary learned tab picks them up
      const newLw=new Set(u.lw);
      for(const w of mkWords) newLw.add(w);
      return{...u,progress:p,lw:newLw,wl:newLw.size};
    });
  };

  if(view==="exercise"&&selLesson){
    const unitLessons=selUnit?.lessons||[];
    const curIdx=unitLessons.findIndex(l=>l.id===selLesson.id);
    const nextUnitLesson=curIdx>=0&&curIdx+1<unitLessons.length?unitLessons[curIdx+1]:null;
    return <LessonErrorBoundary onBack={()=>setView("lesson")}><LessonEngine lesson={selLesson} baseLang={baseLang} lang={lang} addFlag={addFlag} unit={selUnit} user={user} addXp={addXp} learnWord={learnWord} showToast={showToast}
      onBack={()=>setView("lesson")}
      onComplete={()=>{completeLesson(selUnit,selLesson);}}
      onContinue={nextUnitLesson?()=>{completeLesson(selUnit,selLesson);setSelLesson(nextUnitLesson);}:null}
    /></LessonErrorBoundary>;
  }
  if(view==="lesson"&&selUnit) return <LessonList unit={selUnit} user={user} lang={lang} onBack={()=>{setView("map");setSelUnit(null);}} onStart={ls=>{setSelLesson(ls);setView("exercise");}}/>;

  return(
    <>
      <UnitMap lang={lang} user={user} setUser={setUser} chapterNav={chapterNav} setChapterNav={setChapterNav} fkSection={fkSection} setFkSection={setFkSection} fkMode={fkMode} setFkMode={setFkMode} addXp={addXp} learnWord={learnWord} showToast={showToast} addFlag={addFlag} baseLang={baseLang} onSelect={u=>{setSelUnit(u);setView("lesson");}}/>
    </>
  );
}

// ── UNIT MAP ──
// ── FLAG SYSTEM — 100% Inline SVG, Zero External Dependencies ──
// Every supported language has an inline SVG flag. No emoji (breaks on Windows).
// No CDN images (network may be disabled). Every flag renders identically everywhere.
// Simple flags: tricolors (rects only). Complex flags: verified SVG paths.
// Aliases resolve variant codes to canonical language codes.
const FLAG_ALIASES={kr:"ko",gb:"en",us:"en",sy:"ar",cn:"zh",jp:"ja"};

function CountryFlag({code:rawCode,size=56,variant}){
  const code=(rawCode||"").trim().toLowerCase();
  const resolved=FLAG_ALIASES[code]||code;
  const mkSvg=(vb,w,h,children)=>(<svg viewBox={vb} width={w} height={h} style={{borderRadius:size*0.08,display:"block",border:"1px solid rgba(0,0,0,0.12)"}}>{children}</svg>);
  const W=size,H=size*0.667;
  const flags={
    // ── Simple tricolors (rects only — impossible to get wrong) ──
    nl: mkSvg("0 0 9 6",W,H,<><rect width="9" height="2" fill="#AE1C28"/><rect y="2" width="9" height="2" fill="#FFF"/><rect y="4" width="9" height="2" fill="#21468B"/></>),
    fr: mkSvg("0 0 9 6",W,H,<><rect width="3" height="6" fill="#002395"/><rect x="3" width="3" height="6" fill="#FFF"/><rect x="6" width="3" height="6" fill="#ED2939"/></>),
    de: mkSvg("0 0 9 6",W,H,<><rect width="9" height="2" fill="#000"/><rect y="2" width="9" height="2" fill="#DD0000"/><rect y="4" width="9" height="2" fill="#FFCC00"/></>),
    es: mkSvg("0 0 9 6",W,H,<><rect width="9" height="1.5" fill="#AA151B"/><rect y="1.5" width="9" height="3" fill="#F1BF00"/><rect y="4.5" width="9" height="1.5" fill="#AA151B"/></>),
    ro: mkSvg("0 0 9 6",W,H,<><rect width="3" height="6" fill="#002B7F"/><rect x="3" width="3" height="6" fill="#FCD116"/><rect x="6" width="3" height="6" fill="#CE1126"/></>),
    ru: mkSvg("0 0 9 6",W,H,<><rect width="9" height="2" fill="#FFF"/><rect y="2" width="9" height="2" fill="#0039A6"/><rect y="4" width="9" height="2" fill="#D52B1E"/></>),
    // ── Simple emblems on solid backgrounds ──
    ja: mkSvg("0 0 900 600",W,H,<><rect width="900" height="600" fill="#FFF"/><circle cx="450" cy="300" r="180" fill="#BC002D"/></>),
    zh: mkSvg("0 0 900 600",W,H,<><rect width="900" height="600" fill="#DE2910"/><g fill="#FFDE00" transform="translate(150,100)"><polygon points="0,-90 21,-28 84,-28 33,10 54,72 0,35 -54,72 -33,10 -84,-28 -21,-28"/></g><g fill="#FFDE00">{[{x:300,y:60,r:26},{x:360,y:120,r:26},{x:360,y:210,r:26},{x:300,y:270,r:26}].map((s,i)=><circle key={i} cx={s.x} cy={s.y} r={s.r}/>)}</g></>),
    tr: mkSvg("0 0 900 600",W,H,<><rect width="900" height="600" fill="#E30A17"/><circle cx="350" cy="300" r="160" fill="#FFF"/><circle cx="385" cy="300" r="130" fill="#E30A17"/><polygon points="495,300 537,255 510,310 560,285 515,315 560,315 515,285 510,290 537,345 495,300" fill="#FFF"/></>),
    en: mkSvg("0 0 60 30",W,H,<><rect width="60" height="30" fill="#012169"/><path d="M0,0 L60,30 M60,0 L0,30" stroke="#FFF" strokeWidth="6"/><path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="2"/><path d="M30,0 V30 M0,15 H60" stroke="#FFF" strokeWidth="10"/><path d="M30,0 V30 M0,15 H60" stroke="#C8102E" strokeWidth="6"/></>),
    // ── Syria (Arabic course) — green/white/black + 3 red stars ──
    ar: mkSvg("0 0 900 600",W,H,<><rect width="900" height="600" fill="#007A3D"/><rect y="200" width="900" height="200" fill="#FFF"/><rect y="400" width="900" height="200" fill="#000"/>{[225,450,675].map((cx,i)=><polygon key={i} points={`${cx},230 ${cx+15.5},277 ${cx+65},277 ${cx+25},308 ${cx+40},355 ${cx},330 ${cx-40},355 ${cx-25},308 ${cx-65},277 ${cx-15.5},277`} fill="#CE1126"/>)}</>),
    // ── South Korea (Taegukgi) — verified orientation via rotate(90) ──
    ko: mkSvg("0 0 900 600",W,H,<><rect width="900" height="600" fill="#FFF"/><g transform="rotate(90,450,300)"><g transform="translate(450,300)"><circle r="150" fill="#CD2E3A"/><path d="M0,-150 A75,75 0 0,1 0,0 A75,75 0 0,0 0,150 A150,150 0 0,1 0,-150Z" fill="#0047A0"/></g><g stroke="#000" strokeWidth="24" strokeLinecap="butt"><g transform="translate(450,300) rotate(-56.31)"><line x1="195" y1="-33" x2="315" y2="-33"/><line x1="195" y1="0" x2="315" y2="0"/><line x1="195" y1="33" x2="315" y2="33"/></g><g transform="translate(450,300) rotate(123.69)"><line x1="195" y1="-33" x2="243" y2="-33"/><line x1="267" y1="-33" x2="315" y2="-33"/><line x1="195" y1="0" x2="243" y2="0"/><line x1="267" y1="0" x2="315" y2="0"/><line x1="195" y1="33" x2="243" y2="33"/><line x1="267" y1="33" x2="315" y2="33"/></g><g transform="translate(450,300) rotate(56.31)"><line x1="195" y1="-33" x2="243" y2="-33"/><line x1="267" y1="-33" x2="315" y2="-33"/><line x1="195" y1="0" x2="315" y2="0"/><line x1="195" y1="33" x2="243" y2="33"/><line x1="267" y1="33" x2="315" y2="33"/></g><g transform="translate(450,300) rotate(-123.69)"><line x1="195" y1="-33" x2="315" y2="-33"/><line x1="195" y1="0" x2="243" y2="0"/><line x1="267" y1="0" x2="315" y2="0"/><line x1="195" y1="33" x2="315" y2="33"/></g></g></g></>),
  };
  const svg=flags[resolved];
  if(svg){
    if(variant==="plain") return <div style={{display:"inline-flex",overflow:"hidden",borderRadius:size*0.08}}>{svg}</div>;
    return <div style={{display:"inline-flex",overflow:"hidden",borderRadius:size*0.12,boxShadow:"0 2px 8px rgba(0,0,0,0.1)"}}>{svg}</div>;
  }
  // Last-resort fallback: grey text badge (never emoji — emoji breaks on Windows)
  const label=(resolved||"??").toUpperCase().slice(0,2);
  return <div style={{display:"inline-flex",alignItems:"center",justifyContent:"center",width:size,height:size*0.667,borderRadius:size*0.08,background:"var(--gray-200)",border:"1px solid rgba(0,0,0,0.12)",fontSize:size*0.28,fontWeight:700,color:"#666",letterSpacing:1}}>{label}</div>;
}

// ── GLOSSY POPUP — reusable modal with candy-gloss energy ──
function GlossyPopup({title,children,onClose}){
  const dk=document.documentElement.classList.contains("dark");
  const ref=useRef(null);
  useEffect(()=>{
    const h=e=>{if(e.code==="Escape"||e.code==="Backspace"){e.preventDefault();onClose();}};
    window.addEventListener("keydown",h);
    return ()=>window.removeEventListener("keydown",h);
  },[onClose]);
  useEffect(()=>{if(ref.current)ref.current.focus();},[]);
  return(
    <div ref={ref} tabIndex={-1} style={{position:"fixed",inset:0,zIndex:9990,display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,0.55)",backdropFilter:"blur(6px)",WebkitBackdropFilter:"blur(6px)",animation:"fadeIn 0.2s ease"}} onClick={onClose} onKeyDown={e=>{if(e.code==="Escape"||e.code==="Backspace"){e.preventDefault();onClose();}}}>
      <div onClick={e=>e.stopPropagation()} style={{
        width:"90%",maxWidth:380,maxHeight:"80vh",overflowY:"auto",
        borderRadius:28,padding:"28px 24px 22px",
        background:dk?"linear-gradient(180deg, rgba(60,52,110,0.95) 0%, rgba(42,38,82,0.95) 50%, rgba(30,28,60,0.95) 100%)":"linear-gradient(180deg, #FFFFFF 0%, #FAF8FF 30%, #F4F0FF 60%, #EDE8FF 100%)",
        border:dk?"2px solid rgba(123,94,232,0.25)":"2px solid rgba(123,94,232,0.1)",
        boxShadow:dk?"0 20px 60px rgba(0,0,0,0.6), 0 0 40px rgba(123,94,232,0.2), inset 0 2px 0 rgba(255,255,255,0.1), inset 0 -3px 0 rgba(0,0,0,0.2)":"0 20px 60px rgba(123,94,232,0.2), 0 8px 24px rgba(0,0,0,0.1), inset 0 2px 0 rgba(255,255,255,0.9), inset 0 -3px 0 rgba(123,94,232,0.05)",
        position:"relative",overflow:"hidden",
        animation:"popIn 0.25s cubic-bezier(0.34,1.56,0.64,1)",
      }}>
        {/* Glass highlight */}
        <div style={{position:"absolute",top:0,left:"5%",right:"5%",height:"35%",borderRadius:"0 0 50% 50%",background:dk?"linear-gradient(180deg, rgba(255,255,255,0.06) 0%, transparent 100%)":"linear-gradient(180deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.05) 60%, transparent 100%)",pointerEvents:"none",zIndex:1}}/>
        {/* Close button — glossy candy X */}
        <button onClick={onClose} style={{position:"absolute",top:14,right:14,width:36,height:36,borderRadius:12,border:"none",cursor:"pointer",zIndex:3,
          background:dk?"linear-gradient(180deg, rgba(80,70,120,0.9) 0%, rgba(55,48,90,0.9) 50%, rgba(40,35,70,0.9) 100%)":"linear-gradient(180deg, #F0ECF8 0%, #E4DEF2 50%, #D8D0EC 100%)",
          boxShadow:dk?"0 3px 10px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1), inset 0 -1px 0 rgba(0,0,0,0.15)":"0 3px 10px rgba(0,0,0,0.08), inset 0 2px 0 rgba(255,255,255,0.8), inset 0 -2px 0 rgba(0,0,0,0.04)",
          display:"flex",alignItems:"center",justifyContent:"center",transition:"all .15s",overflow:"hidden",position:"relative",
        }}>
          <div style={{position:"absolute",top:0,left:"8%",right:"8%",height:"42%",borderRadius:"0 0 50% 50%",background:dk?"linear-gradient(180deg, rgba(255,255,255,0.1) 0%, transparent 100%)":"linear-gradient(180deg, rgba(255,255,255,0.6) 0%, transparent 100%)",pointerEvents:"none"}}/>
          <svg width={14} height={14} viewBox="0 0 24 24" fill="none" style={{position:"relative",zIndex:1}}><path d="M18 6L6 18M6 6l12 12" stroke={dk?"rgba(220,215,240,0.7)":"#888"} strokeWidth={3} strokeLinecap="round"/></svg>
        </button>
        {title&&<h3 style={{fontSize:20,fontWeight:800,color:"var(--gray-800)",marginBottom:16,paddingRight:40,position:"relative",zIndex:2}}>{title}</h3>}
        <div style={{position:"relative",zIndex:2}}>{children}</div>
      </div>
    </div>
  );
}


function UnitMap({lang,user,setUser,chapterNav,setChapterNav,fkSection,setFkSection,fkMode,setFkMode,addXp,learnWord,showToast,addFlag,baseLang,onSelect}){
  const [headerStyle,setHeaderStyle]=useState("A");
  const [showStatsPopup,setShowStatsPopup]=useState(false);
  const [showBandPopup,setShowBandPopup]=useState(null); // band string or null
  const [showFkPopup,setShowFkPopup]=useState(false);
  const dk=document.documentElement.classList.contains("dark");
  const L=LANGUAGES.find(l=>l.code===lang);
  const isRtl=!!L?.rtl; // Arabic, Hebrew etc. — used for FK content direction
  const allLangUnits=UNITS.filter(u=>u.lang===lang);
  // Track system: if units have a "track" field, allow toggling
  const tracks=[...new Set(allLangUnits.map(u=>u.track).filter(Boolean))];
  const hasTracks=tracks.length>1;
  const [selTrack,setSelTrack]=useState(tracks.includes("v2")?"v2":tracks[0]||null);
  const langUnits=hasTracks?allLangUnits.filter(u=>u.track===selTrack):allLangUnits;
  const [viewMode,setViewMode]=useState("chapters");
  // chapterNav + fkSection are controlled by LearnPage (lifted state)
  const [selectedChar,setSelectedChar]=useState(null); // {ch, rom} for detail card
  const prog=user.progress||{};

  // ── Backspace/Escape: navigate back through UnitMap hierarchy ──
  useEffect(()=>{
    const atTop=chapterNav==="select"&&!fkSection&&(!fkMode||fkMode==="select");
    if(atTop)return; // At top level — let global handler go to home
    // Playthrough and GateQuiz components manage their own Backspace internally
    if(fkMode==="playthrough"||fkMode==="gatequiz")return;
    const handler=(e)=>{
      if(e.code!=="Backspace"&&e.code!=="Escape")return;
      const tag=document.activeElement?.tagName;
      if(tag==="INPUT"||tag==="TEXTAREA")return;
      e.preventDefault();e.stopPropagation();UISounds.click();
      if(fkSection){setFkSection(null);}
      else if(fkMode&&fkMode!=="select"){setFkMode("select");}
      else if(chapterNav==="foundations"&&fkMode==="select"){setChapterNav("select");}
      else if(chapterNav.startsWith("band:")){setChapterNav("select");}
    };
    window.addEventListener("keydown",handler,true);
    return ()=>window.removeEventListener("keydown",handler,true);
  },[chapterNav,fkSection,fkMode]);

  // Group units by CEFR band
  const bandMap={};
  langUnits.forEach(u=>{
    const info=getCefrInfo(u.level);
    const band=info.band||"A1";
    if(!bandMap[band])bandMap[band]=[];
    bandMap[band].push(u);
  });

  const allBands=["A1","A2","B1","B2","C1","C2"];
  const bandLabels={A1:"Beginner",A2:"Elementary",B1:"Intermediate",B2:"Upper-Intermediate",C1:"Advanced",C2:"Mastery"};
  const bandIcons={A1:<BrandIcon name="band-a1" size={32}/>,A2:<BrandIcon name="band-a2" size={32}/>,B1:<BrandIcon name="band-b1" size={32}/>,B2:<BrandIcon name="band-b2" size={32}/>,C1:<BrandIcon name="band-c1" size={32}/>,C2:<BrandIcon name="band-c2" size={32}/>};

  const getUnitProg=(u)=>prog.units?.[`${lang}:${u.n}`];
  const bandProgress=(band)=>{
    const units=bandMap[band]||[];
    const done=units.filter(u=>{const p=getUnitProg(u);return p&&p.completed;}).length;
    return{done,total:units.length};
  };

  // ═══ BAND VIEW ═══
  if(chapterNav.startsWith("band:")){
    const band=chapterNav.slice(5);
    const units=bandMap[band]||[];
    const color=getCefrBandColor(band);
    return(
      <div className="anim">
        <div style={{marginBottom:20}}><NavArrow onClick={()=>setChapterNav("select")} isBack size={44}/></div>
        {/* Band header — clickable → info popup */}
        <div role="button" onClick={()=>{UISounds.click();setShowBandPopup(band);}} style={{cursor:"pointer",background:"linear-gradient(180deg, #C0AEF8 0%, #A488F0 12%, #8B6AE4 30%, #7B5EE8 50%, #6545C8 75%, #5840B8 90%, #4A2BA6 100%)",borderRadius:22,padding:"22px 24px",marginBottom:22,border:"2px solid rgba(255,255,255,0.18)",position:"relative",overflow:"hidden",boxShadow:dk?"0 0 20px rgba(123,94,232,0.4), 0 8px 28px rgba(0,0,0,0.4), inset 0 2px 0 rgba(255,255,255,0.25), inset 0 -3px 0 rgba(0,0,0,0.15)":"0 0 16px rgba(123,94,232,0.2), 0 8px 28px rgba(123,94,232,0.25), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.12)",transition:"transform 0.15s, box-shadow 0.15s, filter 0.15s"}}>
          <div style={{position:"absolute",top:0,left:"6%",right:"6%",height:"44%",borderRadius:"0 0 48% 48%",background:"linear-gradient(180deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.08) 55%, transparent 100%)",pointerEvents:"none",zIndex:1}}/>
          <div style={{display:"flex",alignItems:"center",gap:14,position:"relative",zIndex:2}}>
            <div style={{width:52,height:52,borderRadius:16,background:"rgba(255,255,255,0.15)",backdropFilter:"blur(8px)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,color:"white",fontWeight:900,boxShadow:"inset 0 1px 0 rgba(255,255,255,0.3), inset 0 -1px 0 rgba(0,0,0,0.1), 0 4px 12px rgba(0,0,0,0.15)",position:"relative",overflow:"hidden"}}>
              <div style={{position:"absolute",top:0,left:"6%",right:"6%",height:"44%",borderRadius:"0 0 48% 48%",background:"linear-gradient(180deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.08) 60%, transparent 100%)",pointerEvents:"none"}}/>
              <span style={{position:"relative",zIndex:1,textShadow:"0 2px 4px rgba(0,0,0,0.25)"}}>{band}</span>
            </div>
            <div style={{flex:1}}>
              <h2 style={{fontSize:22,fontWeight:800,color:"white",textShadow:"0 2px 4px rgba(0,0,0,0.2)",margin:0,fontFamily:"'DM Sans','Inter',system-ui,sans-serif"}}>{bandLabels[band]}</h2>
              <p style={{color:"rgba(255,255,255,0.75)",fontSize:13,margin:0}}>{units.length} unit{units.length!==1?"s":""} · CEFR {band}{(()=>{const bp=bandProgress(band);return bp.done>0?` · ${Math.round((bp.done/bp.total)*100)}%`:"";})()}</p>
            </div>
            <svg width={16} height={16} viewBox="0 0 24 24" fill="none" style={{position:"relative",zIndex:2,opacity:0.5}}><path d="M9 5l7 7-7 7" stroke="white" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          {(()=>{const bp=bandProgress(band);return bp.done>0?<div style={{marginTop:10,height:5,borderRadius:4,background:"rgba(255,255,255,0.15)",overflow:"hidden",position:"relative",zIndex:2}}>
            <div style={{height:"100%",width:`${Math.round((bp.done/bp.total)*100)}%`,background:"linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.6) 100%)",borderRadius:4,transition:"width 0.3s",boxShadow:"0 0 8px rgba(255,255,255,0.4)",position:"relative",overflow:"hidden"}}><div style={{position:"absolute",top:0,left:"5%",right:"5%",height:"50%",borderRadius:"0 0 50% 50%",background:"linear-gradient(180deg, rgba(255,255,255,0.6) 0%, transparent 100%)",pointerEvents:"none"}}/></div>
          </div>:null;})()}
        </div>

        {/* Band info popup */}
        {showBandPopup===band&&<GlossyPopup title={`${bandLabels[band]} · CEFR ${band}`} onClose={()=>setShowBandPopup(null)}>
          <div style={{fontSize:13,color:"var(--gray-600)",lineHeight:1.6,marginBottom:16}}>
            {band==="A1"&&"You'll learn the basics: greetings, introductions, simple sentences, numbers, and everyday vocabulary. By the end, you can handle simple interactions."}
            {band==="A2"&&"Build on basics: past tense, future plans, descriptions, comparisons, and daily routines. You'll handle simple conversations with confidence."}
            {band==="B1"&&"Reach independence: express opinions, tell stories, understand main points of clear speech. You can deal with most travel situations."}
            {band==="B2"&&"Achieve fluency: complex arguments, nuanced expression, understanding most media. You can interact with native speakers without strain."}
            {band==="C1"&&"Advanced proficiency: implicit meaning, flexible language use, academic and professional contexts with ease."}
            {band==="C2"&&"Near-native mastery: summarize complex sources, express yourself precisely, understand virtually everything heard or read."}
          </div>
          <div style={{fontSize:12,fontWeight:700,color:"var(--gray-500)",marginBottom:10}}>Units in this band:</div>
          <div style={{display:"flex",flexDirection:"column",gap:6}}>
            {units.map(u=><div key={u.n} style={{padding:"10px 14px",borderRadius:12,background:dk?"rgba(123,94,232,0.1)":"rgba(123,94,232,0.05)",border:dk?"1px solid rgba(123,94,232,0.12)":"1px solid rgba(123,94,232,0.06)",display:"flex",alignItems:"center",gap:10}}>
              <span style={{fontSize:12,fontWeight:800,color:"var(--purple-accent-text)"}}>{u.level}</span>
              <span style={{fontSize:13,color:"var(--gray-700)",fontWeight:600}}>Unit {u.n}: {u.title}</span>
              <span style={{fontSize:11,color:"var(--gray-400)",marginLeft:"auto"}}>{u.lessons.length} lessons</span>
            </div>)}
            {units.length===0&&<div style={{fontSize:13,color:"var(--gray-400)",fontStyle:"italic",textAlign:"center",padding:16}}>Content is being developed.</div>}
          </div>
        </GlossyPopup>}

        {units.length===0?
          <div style={{borderRadius:22,padding:"40px 20px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:dk?"rgba(40,42,72,0.4)":"linear-gradient(180deg, #F8F6FF 0%, #F0ECFF 100%)",border:"2px solid rgba(123,94,232,0.08)",textAlign:"center"}}>
            <div style={{marginBottom:12}}><AppIcon name="construction" size={56}/></div>
            <h3 className="hd" style={{fontSize:18,fontWeight:700,marginBottom:4}}>Coming Soon</h3>
            <p style={{color:"var(--gray-400)",fontSize:13}}>CEFR {band} content is being developed.</p>
          </div>
        :
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14}}>
            {units.map(u=>{
              const available=u.lessons.length>0;
              const up=getUnitProg(u);
              const pctVal=up?up.pct:0;
              const done=up&&up.completed;
              return <div key={u.n} role="button" className="ghost-tile" onClick={()=>{if(available){UISounds.tick();onSelect(u);}}}
                style={{
                cursor:available?"pointer":"default",
                borderRadius:22,padding:"18px 14px 14px",
                display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:6,
                opacity:available?1:0.45,
                background:done?(dk?"linear-gradient(180deg, rgba(40,80,65,0.85) 0%, rgba(30,65,50,0.9) 50%, rgba(22,50,40,0.95) 100%)":"linear-gradient(180deg, #E0FAE8 0%, #D2F5DC 50%, #C4F0D4 100%)"):(dk?"linear-gradient(180deg, rgba(55,45,105,0.94) 0%, rgba(42,36,90,0.96) 40%, rgba(30,26,68,0.98) 100%)":"linear-gradient(180deg, #F8F5FF 0%, #F4F0FF 35%, #F0ECFF 65%, #EDE8FF 100%)"),
                border:done?`2.5px solid var(--teal)`:dk?`2px solid rgba(123,94,232,0.25)`:`2px solid rgba(123,94,232,0.1)`,
                boxShadow:dk?"0 6px 20px rgba(0,0,0,0.35), 0 0 14px rgba(123,94,232,0.2), inset 0 2px 0 rgba(255,255,255,0.08), inset 0 -3px 0 rgba(0,0,0,0.15)":"0 6px 20px rgba(123,94,232,0.1), 0 0 10px rgba(123,94,232,0.06), inset 0 2px 0 rgba(255,255,255,0.8), inset 0 -3px 0 rgba(123,94,232,0.05)",
                transition:"transform 0.15s, box-shadow 0.15s, filter 0.15s",
                position:"relative",overflow:"hidden",
              }}>
                <div style={{position:"absolute",top:0,left:"6%",right:"6%",height:"38%",borderRadius:"0 0 50% 50%",background:dk?"linear-gradient(180deg, rgba(255,255,255,0.06) 0%, transparent 100%)":"linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.05) 60%, transparent 100%)",pointerEvents:"none",zIndex:1}}/>
                <div style={{
                  width:56,height:56,borderRadius:16,
                  background:done?"linear-gradient(180deg, #70E8C8 0%, #40D8A8 15%, #2ECD9E 40%, #1DB88A 65%, #18A07A 85%, #148068 100%)":"linear-gradient(180deg, #C0AEF8 0%, #A488F0 15%, #8B6AE4 35%, #7B5EE8 55%, #6545C8 75%, #5840B8 90%, #4A2BA6 100%)",
                  display:"flex",alignItems:"center",justifyContent:"center",
                  color:"white",fontSize:18,fontWeight:900,
                  boxShadow:done?(dk?"0 0 16px rgba(46,205,158,0.4), 0 6px 18px rgba(0,0,0,0.35), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.15)":"0 0 12px rgba(46,205,158,0.25), 0 6px 18px rgba(46,205,158,0.3), inset 0 2px 0 rgba(255,255,255,0.45), inset 0 -3px 0 rgba(0,0,0,0.12)"):(dk?`0 0 16px rgba(123,94,232,0.4), 0 6px 18px rgba(0,0,0,0.35), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.15)`:`0 0 12px rgba(123,94,232,0.2), 0 6px 18px rgba(123,94,232,0.3), inset 0 2px 0 rgba(255,255,255,0.5), inset 0 -3px 0 rgba(0,0,0,0.12)`),
                  position:"relative",overflow:"hidden",zIndex:2,flexShrink:0,
                }}>
                  <div style={{position:"absolute",top:0,left:"6%",right:"6%",height:"44%",borderRadius:"0 0 48% 48%",background:"linear-gradient(180deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.08) 60%, transparent 100%)",pointerEvents:"none"}}/>
                  <span style={{position:"relative",zIndex:1,textShadow:"0 1px 3px rgba(0,0,0,0.25)",filter:"drop-shadow(0 1px 2px rgba(0,0,0,0.15))"}}>{done?"✓":`U${u.n}`}</span>
                </div>
                <div style={{textAlign:"center",position:"relative",zIndex:2}}>
                  <div className="hd" style={{fontSize:12,fontWeight:700,color:available?(dk?"rgba(220,215,240,0.9)":"var(--gray-700)"):"var(--gray-400)",lineHeight:1.3}}>{u.title}</div>
                  <span style={{display:"inline-block",padding:"2px 8px",borderRadius:6,marginTop:3,background:dk?"rgba(123,94,232,0.15)":"rgba(123,94,232,0.08)",color:"var(--purple-accent-text)",fontSize:9,fontWeight:800,letterSpacing:0.3}}>{u.level}</span>
                </div>
                {available&&pctVal>0&&<div style={{width:"80%",position:"relative",zIndex:2}}>
                  <div style={{height:4,borderRadius:3,background:dk?"rgba(255,255,255,0.08)":"rgba(123,94,232,0.08)",overflow:"hidden"}}>
                    <div style={{height:"100%",width:`${pctVal}%`,background:"linear-gradient(180deg, #C0AEFA 0%, #7B5EE8 55%, #5840B8 100%)",borderRadius:3,boxShadow:"0 0 6px rgba(123,94,232,0.3), inset 0 1px 0 rgba(255,255,255,0.4)",position:"relative",overflow:"hidden"}}>
                      <div style={{position:"absolute",top:0,left:"5%",right:"5%",height:"50%",borderRadius:"0 0 50% 50%",background:"linear-gradient(180deg, rgba(255,255,255,0.5) 0%, transparent 100%)",pointerEvents:"none"}}/>
                    </div>
                  </div>
                </div>}
              </div>;
            })}
          </div>
        }
      </div>
    );
  }

  // ═══ FOUNDATIONS VIEW ═══
  if(chapterNav==="foundations"){
    const fData=FOUNDATIONS_BY_LANG[lang];
    const sections=fData?.sections||[];
    const openSec=fkSection?sections.find(s=>s.id===fkSection):null;
    const fProg=(user.progress||{}).foundation||{};
    const isFkDone=(secId,itemIdx)=>!!fProg[`${lang}:foundation:${secId}:${itemIdx}`];
    const markFk=(secId,itemIdx)=>{
      if(!setUser)return;
      const key=`${lang}:foundation:${secId}:${itemIdx}`;
      setUser(u=>{
        const p={...(u.progress||{}),foundation:{...((u.progress||{}).foundation||{})}};
        p.foundation[key]=true;
        return{...u,progress:p};
      });
    };
    const secProgress=(sec)=>{
      const total=(sec.items||[]).length;
      const done=(sec.items||[]).filter((_,i)=>isFkDone(sec.id,i)).length;
      return{done,total,pct:total>0?Math.round((done/total)*100):0};
    };
    const overallProgress=()=>{
      let total=0,done=0;
      sections.forEach(sec=>{const sp=secProgress(sec);total+=sp.total;done+=sp.done;});
      return{done,total,pct:total>0?Math.round((done/total)*100):0};
    };

    // Section detail view
    if(openSec){
      const sp=secProgress(openSec);
      const secIdx=sections.indexOf(openSec);
      const prevSec=secIdx>0?sections[secIdx-1]:null;
      const nextSec=secIdx<sections.length-1?sections[secIdx+1]:null;
      const goNext=()=>{if(nextSec){setFkSection(nextSec.id);window.scrollTo(0,0);}else{setFkSection(null);window.scrollTo(0,0);}};
      const goPrev=()=>{if(prevSec){setFkSection(prevSec.id);window.scrollTo(0,0);}};
      return(
        <div className="anim" onKeyDown={e=>{if(e.code==="Space"&&!e.target.closest("button,input,textarea")){e.preventDefault();goNext();}if(e.code==="ArrowLeft"){e.preventDefault();goPrev();}if(e.code==="ArrowRight"){e.preventDefault();goNext();}}} tabIndex={0} ref={el=>{if(el)el.focus();}} style={{outline:"none"}}>
          <div style={{marginBottom:20}}><NavArrow onClick={()=>setFkSection(null)} isBack size={44}/></div>
          <div style={{background:"var(--purple-bg)",borderRadius:20,padding:"24px 28px",marginBottom:24,border:"2px solid var(--purple-border)"}}>
            <div style={{display:"flex",alignItems:"center",gap:14}}>
              <div style={{width:52,height:52,borderRadius:16,background:"linear-gradient(135deg,#7B5EE8,#A78BFA)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 4px 14px rgba(123,94,232,0.3)",flexShrink:0}}><BrandIcon name={openSec.icon} size={24}/></div>
              <div style={{flex:1}}>
                <h2 className="hd" style={{fontSize:22,fontWeight:800,color:"var(--purple-accent-text)"}}>{openSec.title}</h2>
                <p style={{color:"var(--gray-500)",fontSize:13}}>{openSec.desc}</p>
                <div style={{fontSize:11,color:"var(--purple-accent-text)",fontWeight:600,marginTop:4}}>{sp.done}/{sp.total} completed</div>
              </div>
            </div>
            {sp.total>0&&<div style={{marginTop:12,height:4,borderRadius:2,background:"var(--purple-border)",overflow:"hidden"}}>
              <div style={{height:"100%",width:`${sp.pct}%`,background:"linear-gradient(180deg, #C0AEFA 0%, #7B5EE8 55%, #5840B8 100%)",borderRadius:2,transition:"width 0.3s",boxShadow:"0 0 8px rgba(123,94,232,0.4)"}}/>
            </div>}
          </div>
          <div style={{display:"flex",flexDirection:"column",gap:12}}>
            {(openSec.items||[]).map((item,i)=>{
              const done=isFkDone(openSec.id,i);
              const hasGrid=!!item.grid;
              const hasInv=!!item.inventory;
              const allChars=hasGrid?item.grid.rows.flatMap(r=>r.cells.filter(c=>c.ch).map(c=>c.ch)):hasInv?item.inventory.split("|").map(p=>p.trim().split(" ")[0]):[];
              return(
              <div key={i} className="card anim" style={{padding:"18px 20px",animationDelay:`${i*0.04}s`,borderLeft:`4px solid ${done?"var(--teal)":"#7B5EE8"}`}}>
                <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:4}}>
                  {done&&<span style={{fontSize:14}}>✅</span>}
                  <div className="hd" style={{fontSize:15,fontWeight:700,color:"var(--gray-800)"}}>{item.title}</div>
                </div>
                {item.desc&&<p style={{fontSize:13,color:"var(--gray-500)",marginBottom:8,lineHeight:1.6}}>{item.desc}</p>}
                {hasGrid&&<div style={{background:"var(--purple-flat)",borderRadius:14,padding:"12px 10px",marginBottom:8,overflowX:"auto"}}>
                  {item.grid.headers&&item.grid.headers.some(h=>h)&&<div style={{display:"grid",gridTemplateColumns:`36px repeat(${item.grid.cols}, 1fr)`,gap:4,marginBottom:4}}>
                    <div/>
                    {item.grid.headers.map((h,hi)=><div key={hi} style={{textAlign:"center",fontSize:10,fontWeight:700,color:"var(--gray-400)",...(isRtl&&/[\u0600-\u06FF]/.test(h)?{direction:"rtl"}:{})}}>{h}</div>)}
                  </div>}
                  {item.grid.rows.map((row,ri)=>(
                    <div key={ri} style={{display:"grid",gridTemplateColumns:`36px repeat(${item.grid.cols}, 1fr)`,gap:4,marginBottom:4}}>
                      <div style={{display:"flex",alignItems:"center",justifyContent:"center",fontSize:9,fontWeight:800,color:row.color||"#7B5EE8",textTransform:"uppercase",letterSpacing:0.5}}>{row.label}</div>
                      {row.cells.map((cell,ci)=>cell.ch?(
                        <div key={ci} onClick={()=>setSelectedChar({ch:cell.ch,rom:cell.rom,title:item.title,color:row.color})} style={{textAlign:"center",padding:"7px 2px",borderRadius:10,background:"linear-gradient(180deg, #fff, #f8f8fc)",border:`1.5px solid ${row.color||"#7B5EE8"}20`,cursor:"pointer",transition:"all 0.15s",boxShadow:"0 2px 6px rgba(0,0,0,0.04)"}}>
                          <div style={{fontSize:22,fontWeight:700,color:row.color||"#7B5EE8",lineHeight:1.2,...(isRtl&&/[\u0600-\u06FF]/.test(cell.ch)?{direction:"rtl"}:{})}}>{cell.ch}</div>
                          {cell.rom&&<div style={{fontSize:9,color:"var(--gray-400)",marginTop:1}}>{cell.rom}</div>}
                        </div>
                      ):<div key={ci} style={{padding:"7px 2px",borderRadius:10,background:"var(--purple-flat)"}}/>)}
                    </div>
                  ))}
                </div>}
                {!hasGrid&&hasInv&&<div style={{background:"var(--purple-flat)",borderRadius:14,padding:"12px 14px",marginBottom:8}}>
                  <div style={{display:"grid",gridTemplateColumns:"repeat(5, 1fr)",gap:6}}>
                  {item.inventory.split("|").map((pair,k)=>{
                    const parts=pair.trim().split(" ");
                    const ch=parts[0];
                    const rom=parts.slice(1).join(" ");
                    return <div key={k} onClick={()=>setSelectedChar({ch,rom,title:item.title})} style={{textAlign:"center",padding:"8px 2px",borderRadius:10,background:"linear-gradient(180deg, #fff, #f8f8fc)",border:"1.5px solid var(--purple-border)",cursor:"pointer",transition:"all 0.15s",boxShadow:"0 2px 6px rgba(123,94,232,0.06)"}}>
                      <div style={{fontSize:24,fontWeight:700,color:"var(--purple-accent-text)",lineHeight:1.2}}>{ch}</div>
                      {rom&&<div style={{fontSize:10,color:"var(--gray-400)",marginTop:2}}>{rom}</div>}
                    </div>;
                  })}
                  </div>
                </div>}
                {selectedChar&&allChars.includes(selectedChar.ch)&&<div style={{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0,0,0,0.4)",zIndex:999,display:"flex",alignItems:"center",justifyContent:"center",padding:20}} onClick={()=>setSelectedChar(null)}>
                  <div className="card anim" style={{maxWidth:320,width:"100%",padding:"32px 24px",textAlign:"center"}} onClick={e=>e.stopPropagation()}>
                    <div style={{fontSize:72,fontWeight:800,color:selectedChar.color||"#7B5EE8",marginBottom:8,lineHeight:1}}>{selectedChar.ch}</div>
                    {selectedChar.rom&&<div style={{fontSize:22,color:"var(--gray-600)",fontWeight:600,marginBottom:16}}>{selectedChar.rom}</div>}
                    <div style={{display:"flex",gap:10,justifyContent:"center",marginBottom:16}}>
                      <button onClick={()=>{if(typeof speechSynthesis!=="undefined"){const u=new SpeechSynthesisUtterance(selectedChar.rom||selectedChar.ch);u.rate=0.7;speechSynthesis.speak(u);}}} style={{padding:"10px 20px",borderRadius:12,border:`2px solid ${selectedChar.color||"#7B5EE8"}`,background:`${selectedChar.color||"#7B5EE8"}10`,color:selectedChar.color||"#7B5EE8",fontSize:14,fontWeight:700,cursor:"pointer",display:"flex",alignItems:"center",gap:6}}>🔊 Listen</button>
                    </div>
                    <button onClick={()=>setSelectedChar(null)} style={{marginTop:16,padding:"8px 24px",borderRadius:10,border:"none",background:selectedChar.color||"#7B5EE8",color:"white",fontWeight:700,fontSize:13,cursor:"pointer"}}>Close</button>
                  </div>
                </div>}
                {item.examples&&item.examples.length>0&&<div style={{display:"flex",flexWrap:"wrap",gap:6,marginBottom:8}}>
                  {item.examples.map((ex,j)=>(
                    <span key={j} style={{display:"inline-block",padding:"4px 10px",borderRadius:8,background:"var(--purple-flat)",color:"var(--purple-accent-text)",fontSize:12,fontWeight:600,border:"1px solid var(--purple-border)",...(isRtl&&/[\u0600-\u06FF]/.test(ex)?{direction:"rtl"}:{})}}>{ex}</span>
                  ))}
                </div>}
                {!done&&<button onClick={()=>markFk(openSec.id,i)} style={{padding:"6px 14px",borderRadius:10,border:"1.5px solid var(--purple-accent)",background:"#7B5EE808",color:"var(--purple-accent-text)",fontSize:12,fontWeight:700,cursor:"pointer"}}>✓ I got it</button>}
                {done&&<div style={{fontSize:11,color:"var(--teal)",fontWeight:600}}>✓ Completed</div>}
              </div>);
            })}
          </div>
          {/* ── Section navigation ── */}
          <div style={{display:"flex",gap:10,marginTop:20,justifyContent:"space-between"}}>
            {prevSec?<NavArrow onClick={goPrev} isBack size={44}/>:<div/>}
            {nextSec?<button onClick={goNext} style={{fontSize:13,padding:"10px 18px",background:"linear-gradient(180deg, #B8A8FA 0%, #9B7AE8 20%, #7B5EE8 55%, #6545C8 85%, #5840B8 100%)",color:"white",border:"1.5px solid rgba(255,255,255,0.25)",borderRadius:12,fontWeight:700,cursor:"pointer"}}>Next: {nextSec.title} →</button>
            :<button onClick={()=>{setFkSection(null);window.scrollTo(0,0);}} style={{fontSize:13,padding:"10px 18px",background:"var(--teal)",color:"white",border:"none",borderRadius:12,fontWeight:700,cursor:"pointer"}}>✓ All Sections Done</button>}
          </div>
          <div style={{textAlign:"center",marginTop:8}}><span style={{fontSize:10,color:"var(--gray-300)"}}>press ⎵ spacebar to continue</span></div>
        </div>
      );
    }

    // Section list view (Foundations home)
    const op=overallProgress();
    return(
      <div className="anim" data-kb-owner="foundations">
        {fkMode!=="playthrough"&&fkMode!=="gatequiz"&&<>
        <div style={{marginBottom:20}}><NavArrow onClick={()=>{if(fkMode!=="select"){setFkMode("select");}else{setChapterNav("select");}}} isBack size={44}/></div>
        {/* Foundations header — clickable → info popup — matches Nederlands purple */}
        <div role="button" onClick={()=>{UISounds.click();setShowFkPopup(true);}} style={{cursor:"pointer",background:"linear-gradient(180deg, #C0AEF8 0%, #A488F0 12%, #8B6AE4 30%, #7B5EE8 50%, #6545C8 75%, #5840B8 90%, #4A2BA6 100%)",borderRadius:22,padding:"22px 24px",marginBottom:24,border:"2px solid rgba(255,255,255,0.18)",position:"relative",overflow:"hidden",boxShadow:dk?"0 0 20px rgba(123,94,232,0.4), 0 8px 28px rgba(0,0,0,0.4), inset 0 2px 0 rgba(255,255,255,0.25), inset 0 -3px 0 rgba(0,0,0,0.15)":"0 0 16px rgba(123,94,232,0.2), 0 8px 28px rgba(123,94,232,0.25), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.12)",transition:"transform 0.15s, box-shadow 0.15s, filter 0.15s"}}>
          <div style={{position:"absolute",top:0,left:"6%",right:"6%",height:"44%",borderRadius:"0 0 48% 48%",background:"linear-gradient(180deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.08) 55%, transparent 100%)",pointerEvents:"none",zIndex:1}}/>
          <div style={{display:"flex",alignItems:"center",gap:14,position:"relative",zIndex:2}}>
            <div style={{width:56,height:56,borderRadius:16,background:"rgba(255,255,255,0.15)",backdropFilter:"blur(8px)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.3), inset 0 -1px 0 rgba(0,0,0,0.1), 0 4px 12px rgba(0,0,0,0.15)",flexShrink:0}}><AppIcon name="building_blocks" size={36}/></div>
            <div style={{flex:1}}>
              <h2 style={{fontSize:22,fontWeight:800,color:"white",textShadow:"0 2px 4px rgba(0,0,0,0.2)",margin:0,fontFamily:"'DM Sans','Inter',system-ui,sans-serif"}}>{fData?.name||"Foundations"}</h2>
              <p style={{color:"rgba(255,255,255,0.75)",fontSize:13,margin:0}}>{L?.native||"Language"}: Before You Start</p>
              <div style={{display:"flex",gap:8,marginTop:6,alignItems:"center"}}>
                <span style={{padding:"3px 10px",borderRadius:6,background:"rgba(255,255,255,0.18)",color:"white",fontSize:10,fontWeight:700}}>Pre-A1</span>
                {op.total>0&&<span style={{fontSize:11,color:"rgba(255,255,255,0.85)",fontWeight:600}}>{op.pct}% complete</span>}
              </div>
            </div>
            <svg width={16} height={16} viewBox="0 0 24 24" fill="none" style={{position:"relative",zIndex:2,opacity:0.5}}><path d="M9 5l7 7-7 7" stroke="white" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          {op.total>0&&<div style={{marginTop:10,height:5,borderRadius:4,background:"rgba(255,255,255,0.15)",overflow:"hidden",position:"relative",zIndex:2}}>
            <div style={{height:"100%",width:`${op.pct}%`,background:"linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.6) 100%)",borderRadius:4,transition:"width 0.3s",boxShadow:"0 0 8px rgba(255,255,255,0.4)"}}/>
          </div>}
        </div>
        {/* Foundations info popup */}
        {showFkPopup&&<GlossyPopup title="Why Foundations?" onClose={()=>setShowFkPopup(false)}>
          <div style={{fontSize:13,color:"var(--gray-600)",lineHeight:1.7,marginBottom:16}}>
            Foundations give you the building blocks before your first lesson. You'll learn the alphabet, pronunciation rules, and writing system — the skills that make everything else click faster.
          </div>
          <div style={{fontSize:13,color:"var(--gray-600)",lineHeight:1.7,marginBottom:16}}>
            Skipping foundations is like building on sand. Even 15 minutes here saves hours of confusion later. Native speakers will understand you better from day one.
          </div>
          <div style={{display:"flex",gap:12,marginBottom:8}}>
            <div style={{flex:1,padding:"12px",borderRadius:12,background:dk?"rgba(123,94,232,0.1)":"rgba(123,94,232,0.05)",textAlign:"center",border:dk?"1px solid rgba(123,94,232,0.12)":"1px solid rgba(123,94,232,0.06)"}}>
              <div style={{fontSize:18,fontWeight:800,color:"var(--purple-accent-text)"}}>{sections.length}</div>
              <div style={{fontSize:10,color:"var(--gray-400)",fontWeight:600}}>Sections</div>
            </div>
            <div style={{flex:1,padding:"12px",borderRadius:12,background:dk?"rgba(123,94,232,0.1)":"rgba(123,94,232,0.05)",textAlign:"center",border:dk?"1px solid rgba(123,94,232,0.12)":"1px solid rgba(123,94,232,0.06)"}}>
              <div style={{fontSize:18,fontWeight:800,color:"var(--purple-accent-text)"}}>{op.pct}%</div>
              <div style={{fontSize:10,color:"var(--gray-400)",fontWeight:600}}>Complete</div>
            </div>
          </div>
          <div style={{padding:"14px 16px",borderRadius:14,background:dk?"rgba(245,166,35,0.08)":"rgba(245,166,35,0.06)",border:dk?"1px solid rgba(245,166,35,0.15)":"1px solid rgba(245,166,35,0.1)"}}>
            <div style={{fontSize:12,fontWeight:800,color:"var(--gold)",marginBottom:4,display:"flex",alignItems:"center",gap:4}}><AppIcon name="lightbulb" size={14}/>Pro tip</div>
            <div style={{fontSize:12,color:"var(--gray-600)",lineHeight:1.5}}>Complete foundations before starting A1. Your pronunciation and reading speed will be noticeably better.</div>
          </div>
        </GlossyPopup>}
        </>}

        {/* ── FK Three-Track Selector (Batch 2 + Batch 4) ── */}
        {fkMode==="select"&&<>
        {/* Gate Quiz passed indicator */}
        {user.progress?.gateQuiz?.[lang]?.passed&&<div style={{background:dk?"linear-gradient(135deg,#1A2E28,#1A2B24)":"linear-gradient(135deg,#ECFDF5,#D1FAE5)",border:"1.5px solid #86EFAC",borderRadius:12,padding:"10px 16px",marginBottom:14,display:"flex",alignItems:"center",gap:8}}>
          <span style={{fontSize:18}}>✅</span>
          <span style={{fontSize:13,fontWeight:600,color:"#065F46"}}>Gate Quiz Passed — Foundations optional for you!</span>
        </div>}
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14,marginBottom:14}}>
          <div role="button" className="anim ghost-tile" onClick={()=>{UISounds.tick();setFkMode("reference");}} style={{cursor:"pointer",padding:"24px 16px",textAlign:"center",borderRadius:22,border:dk?"2px solid rgba(123,94,232,0.3)":"2px solid rgba(123,94,232,0.12)",position:"relative",overflow:"hidden",background:dk?"linear-gradient(180deg, rgba(55,45,105,0.94) 0%, rgba(42,36,90,0.96) 40%, rgba(30,26,68,0.98) 100%)":"linear-gradient(180deg, #F8F5FF 0%, #F4F0FF 35%, #F0ECFF 65%, #EDE8FF 100%)",boxShadow:dk?"0 6px 20px rgba(0,0,0,0.35), 0 0 14px rgba(123,94,232,0.2), inset 0 2px 0 rgba(255,255,255,0.08), inset 0 -3px 0 rgba(0,0,0,0.15)":"0 6px 20px rgba(123,94,232,0.1), 0 0 10px rgba(123,94,232,0.06), inset 0 2px 0 rgba(255,255,255,0.8), inset 0 -3px 0 rgba(123,94,232,0.05)",transition:"transform 0.15s, box-shadow 0.15s, filter 0.15s"}}>
            <div style={{position:"absolute",top:0,left:"6%",right:"6%",height:"38%",borderRadius:"0 0 50% 50%",background:dk?"linear-gradient(180deg, rgba(255,255,255,0.06) 0%, transparent 100%)":"linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.05) 60%, transparent 100%)",pointerEvents:"none",zIndex:1}}/>
            <div style={{fontSize:36,marginBottom:10,position:"relative",zIndex:2}}>📖</div>
            <div style={{fontSize:16,fontWeight:800,color:dk?"rgba(220,215,240,0.9)":"var(--purple-accent-text)",marginBottom:6,position:"relative",zIndex:2}}>Reference</div>
            <div style={{fontSize:12,color:dk?"rgba(180,170,220,0.6)":"var(--gray-400)",lineHeight:1.5,position:"relative",zIndex:2}}>Browse grids, charts & rules at your own pace</div>
          </div>
          <div role="button" className="anim ghost-tile" onClick={()=>{UISounds.tick();setFkMode("playthrough");}} style={{cursor:"pointer",padding:"24px 16px",textAlign:"center",borderRadius:22,border:dk?"2px solid rgba(123,94,232,0.3)":"2px solid rgba(123,94,232,0.12)",position:"relative",overflow:"hidden",background:dk?"linear-gradient(180deg, rgba(55,45,105,0.94) 0%, rgba(42,36,90,0.96) 40%, rgba(30,26,68,0.98) 100%)":"linear-gradient(180deg, #F8F5FF 0%, #F4F0FF 35%, #F0ECFF 65%, #EDE8FF 100%)",boxShadow:dk?"0 6px 20px rgba(0,0,0,0.35), 0 0 14px rgba(123,94,232,0.2), inset 0 2px 0 rgba(255,255,255,0.08), inset 0 -3px 0 rgba(0,0,0,0.15)":"0 6px 20px rgba(123,94,232,0.1), 0 0 10px rgba(123,94,232,0.06), inset 0 2px 0 rgba(255,255,255,0.8), inset 0 -3px 0 rgba(123,94,232,0.05)",transition:"transform 0.15s, box-shadow 0.15s, filter 0.15s",animationDelay:"0.05s"}}>
            <div style={{position:"absolute",top:0,left:"6%",right:"6%",height:"38%",borderRadius:"0 0 50% 50%",background:dk?"linear-gradient(180deg, rgba(255,255,255,0.06) 0%, transparent 100%)":"linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.05) 60%, transparent 100%)",pointerEvents:"none",zIndex:1}}/>
            <div style={{fontSize:36,marginBottom:10,position:"relative",zIndex:2}}>🎮</div>
            <div style={{fontSize:16,fontWeight:800,color:dk?"rgba(220,215,240,0.9)":"var(--purple-accent-text)",marginBottom:6,position:"relative",zIndex:2}}>Play Through</div>
            <div style={{fontSize:12,color:dk?"rgba(180,170,220,0.6)":"var(--gray-400)",lineHeight:1.5,position:"relative",zIndex:2}}>Learn step-by-step with exercises & XP</div>
          </div>
        </div>
        {/* Gate Quiz tile — full width below the two-column grid */}
        {FK_GATE_QUIZ[lang]&&<div role="button" className="anim ghost-tile" onClick={()=>{UISounds.tick();setFkMode("gatequiz");}} style={{cursor:"pointer",padding:"18px 20px",textAlign:"center",borderRadius:22,border:user.progress?.gateQuiz?.[lang]?.passed?"2px solid #86EFAC":dk?"2px solid rgba(123,94,232,0.3)":"2px solid rgba(123,94,232,0.12)",position:"relative",overflow:"hidden",background:user.progress?.gateQuiz?.[lang]?.passed?(dk?"linear-gradient(145deg,#1A2E28,#1A2B24)":"linear-gradient(145deg,#F0FFF4,#E8FFEE)"):(dk?"linear-gradient(180deg, rgba(55,45,105,0.94) 0%, rgba(42,36,90,0.96) 40%, rgba(30,26,68,0.98) 100%)":"linear-gradient(180deg, #F8F5FF 0%, #F4F0FF 35%, #F0ECFF 65%, #EDE8FF 100%)"),boxShadow:dk?"0 4px 16px rgba(0,0,0,0.3), 0 0 10px rgba(123,94,232,0.15), inset 0 2px 0 rgba(255,255,255,0.06), inset 0 -2px 0 rgba(0,0,0,0.12)":"0 4px 16px rgba(123,94,232,0.08), inset 0 2px 0 rgba(255,255,255,0.8), inset 0 -2px 0 rgba(123,94,232,0.03)",marginBottom:24,animationDelay:"0.1s",transition:"transform 0.15s, box-shadow 0.15s, filter 0.15s"}}>
          <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:10}}>
            <AppIcon name="trophy" size={36}/>
            <div style={{textAlign:"left"}}>
              <div style={{fontSize:15,fontWeight:800,color:user.progress?.gateQuiz?.[lang]?.passed?"var(--teal)":"var(--purple-accent-text)"}}>
                {user.progress?.gateQuiz?.[lang]?.passed?"Gate Quiz ✓ Passed":"Gate Quiz — Skip Foundations?"}
              </div>
              <div style={{fontSize:12,color:"var(--gray-400)",lineHeight:1.4}}>
                {user.progress?.gateQuiz?.[lang]?.passed?"Gate Quiz passed! Retake anytime.":"Already know the basics? Prove it and skip ahead."}
              </div>
            </div>
          </div>
        </div>}
        </>}

        {/* ── Reference Mode: existing FK section tiles (unchanged) ── */}
        {fkMode==="reference"&&<>
        {sections.length>0?
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
            {sections.map((sec,i)=>{
              const sp=secProgress(sec);
              return(
              <div key={sec.id} className="card anim" onClick={()=>setFkSection(sec.id)} style={{
                cursor:"pointer",padding:"20px 16px",textAlign:"center",
                background:sp.pct===100?dk?"linear-gradient(145deg,#1A2E28,#1A2B24)":"linear-gradient(145deg,#F0FFF4,#E8FFEE)":"var(--purple-bg)",
                border:sp.pct===100?"2px solid #86EFAC":"2px solid var(--purple-border)",
                boxShadow:"0 4px 14px rgba(123,94,232,0.06)",
                animationDelay:`${i*0.05}s`,
              }}>
                <div style={{fontSize:32,marginBottom:8}}><BrandIcon name={sec.icon} size={32}/></div>
                <div className="hd" style={{fontSize:14,fontWeight:700,color:sp.pct===100?"var(--teal)":"#7B5EE8",marginBottom:4}}>{sec.title}</div>
                <div style={{fontSize:11,color:"var(--gray-400)",lineHeight:1.4}}>{sec.desc}</div>
                <div style={{marginTop:8,fontSize:10,fontWeight:600,color:sp.pct===100?"var(--teal)":"var(--gray-300)"}}>{sp.pct===100?"✓ Done":`${sp.done}/${sp.total} items`}</div>
                {sp.total>0&&sp.pct>0&&sp.pct<100&&<div style={{marginTop:6,height:3,borderRadius:2,background:"var(--purple-border)",overflow:"hidden"}}>
                  <div style={{height:"100%",width:`${sp.pct}%`,background:"linear-gradient(180deg, #C0AEFA 0%, #7B5EE8 55%, #5840B8 100%)",borderRadius:2,boxShadow:"0 0 8px rgba(123,94,232,0.4)"}}/>
                </div>}
              </div>);
            })}
          </div>
        :
          <div className="card" style={{textAlign:"center",padding:"40px 20px"}}>
            <div style={{marginBottom:12}}><AppIcon name="construction" size={56}/></div>
            <h3 className="hd" style={{fontSize:18,fontWeight:700,marginBottom:4}}>Coming Soon</h3>
            <p style={{color:"var(--gray-400)",fontSize:13}}>Foundations for {L?.native||"this language"} are being developed.</p>
            <p style={{color:"var(--gray-300)",fontSize:12,marginTop:8}}>Start with A1 to begin learning now!</p>
          </div>
        }
        </>}

        {/* ── Playthrough Mode: real FoundationsPlaythrough (Batch 3) ── */}
        {fkMode==="playthrough"&&<FoundationsPlaythrough lang={lang} user={user} setUser={setUser} addXp={addXp} learnWord={learnWord} showToast={showToast} addFlag={addFlag} baseLang={baseLang} onBack={()=>setFkMode("select")}/>}

        {/* ── Gate Quiz Mode (Batch 4) ── */}
        {fkMode==="gatequiz"&&<FoundationsGateQuiz lang={lang} user={user} setUser={setUser} showToast={showToast} addFlag={addFlag} onBack={()=>setFkMode("select")} onPass={()=>{setChapterNav("select");showToast&&showToast("🏆 Foundations passed! You can start lessons.");}}/>}
      </div>
    );
  }

  return(
    <div className="anim">
      {/* Flag banner — clickable → stats popup */}
      {(()=>{const tl=langUnits.reduce((a,u)=>a+u.lessons.length,0);const dl=langUnits.reduce((a,u)=>a+u.lessons.filter(l=>!!((user.progress||{}).lessons||{})[`${lang}:${u.n}:${l.id}`]).length,0);const op=tl>0?Math.round((dl/tl)*100):0;
      return headerStyle==="A"?<div role="button" onClick={()=>{UISounds.click();setShowStatsPopup(true);}} style={{cursor:"pointer",background:"linear-gradient(180deg, #C0AEF8 0%, #A488F0 12%, #8B6AE4 30%, #7B5EE8 50%, #6545C8 75%, #5840B8 90%, #4A2BA6 100%)",borderRadius:24,padding:"24px 28px",marginBottom:20,display:"flex",alignItems:"center",gap:18,border:"2px solid rgba(255,255,255,0.18)",position:"relative",overflow:"hidden",boxShadow:dk?"0 0 20px rgba(123,94,232,0.4), 0 8px 28px rgba(0,0,0,0.4), inset 0 2px 0 rgba(255,255,255,0.25), inset 0 -3px 0 rgba(0,0,0,0.15)":"0 0 16px rgba(123,94,232,0.2), 0 8px 28px rgba(123,94,232,0.25), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.12)",transition:"transform 0.15s, box-shadow 0.15s, filter 0.15s"}}>
        <div style={{position:"absolute",top:0,left:"6%",right:"6%",height:"44%",borderRadius:"0 0 48% 48%",background:"linear-gradient(180deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.08) 55%, transparent 100%)",pointerEvents:"none",zIndex:1}}/>
        <div style={{width:56,height:56,borderRadius:16,background:"rgba(255,255,255,0.15)",backdropFilter:"blur(8px)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,position:"relative",zIndex:2,boxShadow:"inset 0 1px 0 rgba(255,255,255,0.3), inset 0 -1px 0 rgba(0,0,0,0.1), 0 4px 12px rgba(0,0,0,0.15)"}}><CountryFlag code={lang} size={34}/></div>
        <div style={{flex:1,position:"relative",zIndex:2}}>
          <h1 className="hd" style={{fontSize:26,fontWeight:800,marginBottom:2,color:"white",textShadow:"0 2px 4px rgba(0,0,0,0.2)"}}>{L?.native||"Course"}</h1>
          <p style={{color:"rgba(255,255,255,0.75)",fontSize:13}}>{langUnits.length} units · {tl} lessons{op>0?` · ${op}%`:""}</p>
          {op>0&&<div style={{marginTop:8,height:5,borderRadius:3,background:"rgba(255,255,255,0.15)",overflow:"hidden",boxShadow:"inset 0 1px 2px rgba(0,0,0,0.15)"}}>
            <div style={{height:"100%",width:`${op}%`,background:"linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.6) 100%)",borderRadius:3,transition:"width 0.3s",boxShadow:"0 0 8px rgba(255,255,255,0.4)",position:"relative",overflow:"hidden"}}><div style={{position:"absolute",top:0,left:"5%",right:"5%",height:"50%",borderRadius:"0 0 50% 50%",background:"linear-gradient(180deg, rgba(255,255,255,0.6) 0%, transparent 100%)",pointerEvents:"none"}}/></div>
          </div>}
        </div>
        {/* Tap indicator */}
        <svg width={18} height={18} viewBox="0 0 24 24" fill="none" style={{position:"relative",zIndex:2,opacity:0.5}}><path d="M9 5l7 7-7 7" stroke="white" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"/></svg>
      </div>
      :<div role="button" onClick={()=>{UISounds.click();setShowStatsPopup(true);}} style={{cursor:"pointer",background:dk?"rgba(40,38,70,0.5)":"rgba(255,255,255,0.55)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",borderRadius:24,padding:"24px 28px",marginBottom:20,display:"flex",alignItems:"center",gap:18,border:dk?"2px solid rgba(123,94,232,0.2)":"2px solid rgba(123,94,232,0.12)",position:"relative",overflow:"hidden",boxShadow:dk?"0 8px 28px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.08)":"0 8px 28px rgba(123,94,232,0.08), inset 0 2px 0 rgba(255,255,255,0.8), inset 0 -2px 0 rgba(123,94,232,0.04)",transition:"transform 0.15s, box-shadow 0.15s, filter 0.15s"}}>
        <div style={{position:"absolute",top:0,left:"6%",right:"6%",height:"38%",borderRadius:"0 0 50% 50%",background:dk?"linear-gradient(180deg, rgba(255,255,255,0.06) 0%, transparent 100%)":"linear-gradient(180deg, rgba(255,255,255,0.5) 0%, transparent 100%)",pointerEvents:"none",zIndex:1}}/>
        <div style={{width:56,height:56,borderRadius:16,background:dk?"rgba(123,94,232,0.2)":"rgba(123,94,232,0.08)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,position:"relative",zIndex:2}}><CountryFlag code={lang} size={34}/></div>
        <div style={{flex:1,position:"relative",zIndex:2}}>
          <h1 className="hd" style={{fontSize:26,fontWeight:800,marginBottom:2}}>{L?.native||"Course"}</h1>
          <p style={{color:"var(--gray-500)",fontSize:13}}>{langUnits.length} units · {tl} lessons{op>0?` · ${op}%`:""}</p>
          {op>0&&<div style={{marginTop:8,height:5,borderRadius:3,background:"rgba(123,94,232,0.08)",overflow:"hidden"}}>
            <div style={{height:"100%",width:`${op}%`,background:"linear-gradient(180deg, #C0AEFA 0%, #7B5EE8 55%, #5840B8 100%)",borderRadius:3,transition:"width 0.3s",boxShadow:"0 0 8px rgba(123,94,232,0.3)",position:"relative",overflow:"hidden"}}><div style={{position:"absolute",top:0,left:"5%",right:"5%",height:"45%",borderRadius:"0 0 50% 50%",background:"linear-gradient(180deg, rgba(255,255,255,0.5) 0%, transparent 100%)",pointerEvents:"none"}}/></div>
          </div>}
        </div>
        <svg width={18} height={18} viewBox="0 0 24 24" fill="none" style={{position:"relative",zIndex:2,opacity:0.35}}><path d="M9 5l7 7-7 7" stroke="var(--gray-500)" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"/></svg>
      </div>;})()}

      {/* Stats Popup */}
      {showStatsPopup&&(()=>{const tl=langUnits.reduce((a,u)=>a+u.lessons.length,0);const dl=langUnits.reduce((a,u)=>a+u.lessons.filter(l=>!!((user.progress||{}).lessons||{})[`${lang}:${u.n}:${l.id}`]).length,0);const op=tl>0?Math.round((dl/tl)*100):0;const vocabCount=user.wl||0;const tips=["Consistency beats intensity — 15 min daily > 2 hours weekly.","Read children's books in your target language. They use high-frequency words.","Shadow native speakers: listen and repeat simultaneously to train your ear.","Label objects in your house with sticky notes in the target language.","Watch TV shows you already know dubbed in your target language."];const tipIdx=Math.floor(Date.now()/86400000)%tips.length;
      return <GlossyPopup title={`${L?.native||"Course"} Stats`} onClose={()=>setShowStatsPopup(false)}>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:20}}>
          {[{label:"XP Earned",value:user.xp||0,icon:"⚡"},{label:"Lessons Done",value:`${dl}/${tl}`,icon:"📚"},{label:"Vocabulary",value:vocabCount,icon:"🧠"},{label:"Progress",value:`${op}%`,icon:"📊"}].map(s=><div key={s.label} style={{padding:"14px 12px",borderRadius:16,background:dk?"rgba(123,94,232,0.12)":"rgba(123,94,232,0.06)",textAlign:"center",border:dk?"1px solid rgba(123,94,232,0.15)":"1px solid rgba(123,94,232,0.08)"}}>
            <div style={{fontSize:22,marginBottom:4}}>{s.icon}</div>
            <div style={{fontSize:18,fontWeight:800,color:"var(--purple-accent-text)"}}>{s.value}</div>
            <div style={{fontSize:10,color:"var(--gray-400)",fontWeight:600,marginTop:2}}>{s.label}</div>
          </div>)}
        </div>
        <div style={{padding:"16px 18px",borderRadius:16,background:dk?"rgba(245,166,35,0.08)":"rgba(245,166,35,0.06)",border:dk?"1px solid rgba(245,166,35,0.15)":"1px solid rgba(245,166,35,0.1)"}}>
          <div style={{fontSize:12,fontWeight:800,color:"var(--gold)",marginBottom:6,display:"flex",alignItems:"center",gap:4}}><AppIcon name="lightbulb" size={14}/>Polyglot Tip</div>
          <div style={{fontSize:13,color:"var(--gray-600)",lineHeight:1.5}}>{tips[tipIdx]}</div>
        </div>
      </GlossyPopup>;})()}

      {/* Header style toggle */}
      <div style={{display:"flex",justifyContent:"flex-end",marginBottom:4,marginTop:-12}}>
        <button onClick={()=>setHeaderStyle(s=>s==="A"?"B":"A")} title="Toggle header style" style={{width:28,height:28,borderRadius:8,border:dk?"1px solid rgba(255,255,255,0.08)":"1px solid rgba(123,94,232,0.1)",background:dk?"rgba(40,38,65,0.4)":"rgba(123,94,232,0.04)",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",transition:"all .2s",fontSize:10,fontWeight:800,color:"var(--gray-300)",fontFamily:"'DM Sans',sans-serif"}}>{headerStyle}</button>
      </div>

      {/* Track toggle — only when multiple tracks exist (e.g. Dutch v2 + legacy) */}
      {hasTracks&&<div style={{display:"flex",gap:8,marginBottom:16,justifyContent:"center"}}>
        {tracks.map(t=>{
          const label=t==="v2"?"New Course":t==="legacy"?"Legacy Course":t;
          const active=selTrack===t;
          return <button key={t} onClick={()=>setSelTrack(t)} style={{padding:"10px 24px",borderRadius:16,border:"none",background:active?"linear-gradient(180deg, #B8A8FA 0%, #9B7AE8 20%, #7B5EE8 55%, #6545C8 85%, #5840B8 100%)":"linear-gradient(180deg, #FFFFFF, #f5f6fa)",color:active?"white":"var(--gray-500)",fontWeight:800,fontSize:13,cursor:"pointer",transition:"all 0.15s",letterSpacing:0.3,boxShadow:active?"0 4px 14px rgba(100,69,200,0.35), inset 0 2px 0 rgba(255,255,255,0.3), inset 0 -2px 0 rgba(0,0,0,0.12)":"0 3px 10px rgba(0,0,0,0.08), inset 0 2px 0 rgba(255,255,255,0.8), inset 0 -2px 0 rgba(0,0,0,0.04)",position:"relative",overflow:"hidden"}}>{active&&<span style={{position:"absolute",top:0,left:"8%",right:"8%",height:"38%",borderRadius:"0 0 50% 50%",background:"linear-gradient(180deg, rgba(255,255,255,0.35) 0%, transparent 100%)",pointerEvents:"none"}}/>}<span style={{position:"relative",zIndex:1}}>{label}</span></button>;
        })}
      </div>}

      {/* View toggle */}
      <div style={{display:"flex",alignItems:"center",marginBottom:16}}>
        <div style={{display:"inline-flex",background:dk?"rgba(40,38,65,0.6)":"rgba(0,0,0,0.04)",borderRadius:16,padding:4,gap:4}}>
          {[["chapters","Chapters"],["all","All Units"]].map(([k,label])=>{
            const active=viewMode===k;
            return <button key={k} onClick={()=>setViewMode(k)} style={{padding:"9px 20px",borderRadius:13,fontSize:12,fontWeight:800,border:"none",cursor:"pointer",transition:"all 0.15s",letterSpacing:0.3,background:active?"linear-gradient(180deg, #B8A8FA 0%, #9B7AE8 20%, #7B5EE8 55%, #6545C8 85%, #5840B8 100%)":"transparent",color:active?"white":"var(--gray-400)",boxShadow:active?"0 3px 12px rgba(100,69,200,0.3), inset 0 2px 0 rgba(255,255,255,0.3), inset 0 -2px 0 rgba(0,0,0,0.12)":"none",position:"relative",overflow:"hidden"}}>
              {active&&<span style={{position:"absolute",top:0,left:"8%",right:"8%",height:"40%",borderRadius:"0 0 50% 50%",background:"linear-gradient(180deg, rgba(255,255,255,0.35) 0%, transparent 100%)",pointerEvents:"none"}}/>}
              <span style={{position:"relative",zIndex:1}}>{label}</span>
            </button>;
          })}
        </div>
      </div>

      {/* ═══ CHAPTER SELECT ═══ */}
      {viewMode==="chapters"&&<div>
        {/* Foundations tile — full width */}
        {(()=>{
          const fData=FOUNDATIONS_BY_LANG[lang];
          const secCount=fData?.sections?.length||0;
          return <div role="button" className="ghost-tile" style={{cursor:"pointer",padding:"24px 22px",marginBottom:14,display:"flex",alignItems:"center",gap:14,borderRadius:22,border:dk?"2px solid rgba(123,94,232,0.3)":"2px solid rgba(123,94,232,0.12)",position:"relative",overflow:"hidden",background:dk?"linear-gradient(180deg, rgba(55,45,105,0.94) 0%, rgba(42,36,90,0.96) 40%, rgba(30,26,68,0.98) 100%)":"linear-gradient(180deg, #F8F5FF 0%, #F4F0FF 35%, #F0ECFF 65%, #EDE8FF 100%)",boxShadow:dk?"0 6px 20px rgba(0,0,0,0.35), 0 0 14px rgba(123,94,232,0.2), inset 0 2px 0 rgba(255,255,255,0.08), inset 0 -3px 0 rgba(0,0,0,0.15)":"0 6px 20px rgba(123,94,232,0.1), 0 0 10px rgba(123,94,232,0.06), inset 0 2px 0 rgba(255,255,255,0.8), inset 0 -3px 0 rgba(123,94,232,0.05)",transition:"transform 0.15s, box-shadow 0.15s, filter 0.15s",minHeight:80}} onClick={()=>{UISounds.tick();setFkSection(null);setChapterNav("foundations");}}>
            <div style={{position:"absolute",top:0,left:"5%",right:"5%",height:"38%",borderRadius:"0 0 50% 50%",background:dk?"linear-gradient(180deg, rgba(255,255,255,0.05) 0%, transparent 100%)":"linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.05) 60%, transparent 100%)",pointerEvents:"none",zIndex:1}}/>
            <div style={{width:48,height:48,borderRadius:14,background:"linear-gradient(180deg, #C0AEF8 0%, #A488F0 15%, #7B5EE8 50%, #5840B8 85%, #4A2BA6 100%)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,flexShrink:0,position:"relative",overflow:"hidden",zIndex:2,boxShadow:dk?"0 0 12px rgba(123,94,232,0.35), 0 4px 12px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.3), inset 0 -2px 0 rgba(0,0,0,0.12)":"0 0 10px rgba(123,94,232,0.15), 0 4px 12px rgba(123,94,232,0.25), inset 0 1px 0 rgba(255,255,255,0.45), inset 0 -2px 0 rgba(0,0,0,0.1)"}}>
              <div style={{position:"absolute",top:0,left:"6%",right:"6%",height:"44%",borderRadius:"0 0 48% 48%",background:"linear-gradient(180deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.08) 60%, transparent 100%)",pointerEvents:"none"}}/>
              <span style={{position:"relative",zIndex:1,filter:"drop-shadow(0 1px 1px rgba(0,0,0,0.2))"}}>🧱</span>
            </div>
            <div style={{flex:1,position:"relative",zIndex:2}}>
              <div className="hd" style={{fontSize:17,fontWeight:800,color:"var(--purple-accent-text)"}}>Foundations</div>
              <div style={{fontSize:12,color:"var(--gray-400)"}}>{secCount>0?`${secCount} sections · Pre-A1`:"Script, alphabet & pronunciation basics"}</div>
            </div>
            <span style={{padding:"5px 14px",borderRadius:12,background:"linear-gradient(180deg, #C0AEFA 0%, #B8A8FA 15%, #7B5EE8 55%, #5840B8 100%)",color:"white",fontSize:10,fontWeight:800,letterSpacing:0.3,boxShadow:"0 3px 10px rgba(123,94,232,0.3), inset 0 1px 0 rgba(255,255,255,0.4), inset 0 -1px 0 rgba(0,0,0,0.1)",position:"relative",overflow:"hidden",zIndex:2}}><span style={{position:"absolute",top:0,left:"10%",right:"10%",height:"45%",borderRadius:"0 0 50% 50%",background:"linear-gradient(180deg, rgba(255,255,255,0.4) 0%, transparent 100%)",pointerEvents:"none"}}/><span style={{position:"relative",zIndex:1}}>{secCount>0?`${secCount} topics`:"Preview"}</span></span>
          </div>;
        })()}

        {/* CEFR band grid — with Foundations Lock (Manifesto P13) */}
        {(()=>{
          const fUnlocked=isFoundationsUnlocked(user,lang);
          const hasFk=FOUNDATIONS_BY_LANG[lang]?.sections?.length>0;
          const showLock=!fUnlocked&&hasFk;
          return <>
            {showLock&&<div style={{background:"linear-gradient(145deg,#FFF8F0,#FFF3E6)",border:"2px solid #FBBF2420",borderRadius:16,padding:"16px 20px",marginBottom:14,textAlign:"center"}}>
              <div style={{fontSize:24,marginBottom:6}}>🔒</div>
              <div style={{fontSize:13,fontWeight:700,color:"#92400E",marginBottom:4}}>Complete Foundations to unlock units</div>
              <div style={{fontSize:11,color:"#B45309",lineHeight:1.5}}>Play through the Foundations course or pass the Gate Quiz to unlock A1 and beyond.</div>
              <div onClick={()=>{
                setUser(u=>{
                  const p={...(u.progress||{}),foundationsUnlocked:{...((u.progress||{}).foundationsUnlocked||{})}};
                  p.foundationsUnlocked[lang]=true;
                  return{...u,progress:p};
                });
              }} style={{marginTop:10,fontSize:11,color:"#B45309",cursor:"pointer",textDecoration:"underline",opacity:0.7}}>
                Unlock anyway →
              </div>
            </div>}
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14,position:"relative"}}>
              {showLock&&<div style={{position:"absolute",inset:0,zIndex:2,borderRadius:16,background:dk?"rgba(18,18,24,0.5)":"rgba(255,255,255,0.4)",backdropFilter:"blur(1px)",pointerEvents:"none"}}/>}
              {allBands.map(band=>{
                const bp=bandProgress(band);
                const hasUnits=bp.total>0;
                const pctDone=bp.total>0?Math.round((bp.done/bp.total)*100):0;
                const isComplete=bp.done===bp.total&&bp.total>0;
                return <div key={band} role="button" className="ghost-tile" onClick={()=>{if(!showLock||!FOUNDATIONS_LOCK_ENABLED){UISounds.tick();setChapterNav(`band:${band}`);}}}
                  style={{
                    cursor:showLock&&FOUNDATIONS_LOCK_ENABLED?"default":"pointer",
                    borderRadius:22,
                    padding:"14px 10px 12px",
                    display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:5,
                    background:showLock?(dk?"rgba(40,42,72,0.5)":"rgba(220,215,235,0.6)"):(dk?"linear-gradient(180deg, rgba(55,45,105,0.94) 0%, rgba(42,36,90,0.96) 40%, rgba(30,26,68,0.98) 100%)":"linear-gradient(180deg, #F8F5FF 0%, #F4F0FF 35%, #F0ECFF 65%, #EDE8FF 100%)"),
                    border:showLock?"2px solid rgba(156,163,175,0.15)":(isComplete?`2.5px solid var(--teal)`:`2px solid ${dk?"rgba(123,94,232,0.35)":"rgba(123,94,232,0.15)"}`),
                    boxShadow:showLock?"none":(dk?"0 6px 20px rgba(0,0,0,0.4), 0 0 16px rgba(123,94,232,0.3), inset 0 2px 0 rgba(255,255,255,0.1), inset 0 -3px 0 rgba(0,0,0,0.18)":"0 6px 20px rgba(123,94,232,0.12), 0 0 14px rgba(123,94,232,0.08), inset 0 2px 0 rgba(255,255,255,0.85), inset 0 -3px 0 rgba(123,94,232,0.06)"),
                    transition:"transform 0.15s, box-shadow 0.15s, filter 0.15s",
                    position:"relative",overflow:"hidden",
                    ...(showLock?{filter:"grayscale(0.5)",opacity:0.55}:{}),
                  }}>
                    {!showLock&&<div style={{position:"absolute",top:0,left:"6%",right:"6%",height:"38%",borderRadius:"0 0 50% 50%",background:dk?"linear-gradient(180deg, rgba(255,255,255,0.07) 0%, transparent 100%)":"linear-gradient(180deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.05) 60%, transparent 100%)",pointerEvents:"none",zIndex:1}}/>}
                    {showLock&&<div style={{position:"absolute",top:8,right:8,zIndex:3,opacity:0.6}}><AppIcon name="padlock" size={28}/></div>}
                    <div style={{
                      width:80,height:80,borderRadius:22,
                      background:showLock?"linear-gradient(180deg, #A0A0A8 0%, #888890 30%, #707078 60%, #606068 100%)":"linear-gradient(180deg, #C0AEF8 0%, #A488F0 15%, #8B6AE4 35%, #7B5EE8 55%, #6545C8 75%, #5840B8 90%, #4A2BA6 100%)",
                      display:"flex",alignItems:"center",justifyContent:"center",
                      color:"white",fontSize:30,fontWeight:900,letterSpacing:-0.5,
                      boxShadow:showLock?"0 4px 12px rgba(0,0,0,0.2), inset 0 2px 0 rgba(255,255,255,0.25), inset 0 -2px 0 rgba(0,0,0,0.15)":(dk?`0 0 22px rgba(123,94,232,0.5), 0 8px 24px rgba(0,0,0,0.4), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.2)`:`0 0 18px rgba(123,94,232,0.3), 0 6px 20px rgba(123,94,232,0.35), inset 0 2px 0 rgba(255,255,255,0.5), inset 0 -3px 0 rgba(0,0,0,0.15)`),
                      position:"relative",overflow:"hidden",zIndex:2,flexShrink:0,
                    }}>
                      <div style={{position:"absolute",top:0,left:"6%",right:"6%",height:"44%",borderRadius:"0 0 48% 48%",background:"linear-gradient(180deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.1) 55%, transparent 100%)",pointerEvents:"none"}}/>
                      <span style={{position:"relative",zIndex:1,textShadow:"0 2px 4px rgba(0,0,0,0.3)",filter:"drop-shadow(0 1px 2px rgba(0,0,0,0.2))"}}>{band}</span>
                    </div>
                    <div style={{textAlign:"center",position:"relative",zIndex:2}}>
                      <div style={{fontSize:13,fontWeight:800,color:showLock?"var(--gray-400)":(dk?"rgba(220,215,240,0.9)":"var(--gray-700)"),lineHeight:1.2}}>{bandLabels[band]}</div>
                      {hasUnits?
                        <div style={{fontSize:10,color:showLock?"var(--gray-400)":(dk?"rgba(180,170,220,0.8)":"var(--purple-accent-text)"),fontWeight:700,marginTop:2}}>{bp.done}/{bp.total} units{isComplete?" ✓":""}</div>
                      :
                        <div style={{fontSize:10,color:dk?"rgba(160,155,200,0.5)":"var(--gray-300)",fontWeight:600,fontStyle:"italic",marginTop:2}}>Coming soon</div>
                      }
                    </div>
                    {hasUnits&&bp.done>0&&<div style={{width:"80%",position:"relative",zIndex:2}}>
                      <div style={{height:5,borderRadius:4,background:dk?"rgba(255,255,255,0.1)":"rgba(123,94,232,0.1)",overflow:"hidden",boxShadow:"inset 0 1px 2px rgba(0,0,0,0.1)"}}>
                        <div style={{height:"100%",width:`${pctDone}%`,borderRadius:4,background:"linear-gradient(180deg, #C0AEFA 0%, #7B5EE8 55%, #5840B8 100%)",boxShadow:`0 0 8px rgba(123,94,232,0.4), inset 0 1px 0 rgba(255,255,255,0.4)`,transition:"width 0.3s",position:"relative",overflow:"hidden"}}>
                          <div style={{position:"absolute",top:0,left:"5%",right:"5%",height:"50%",borderRadius:"0 0 50% 50%",background:"linear-gradient(180deg, rgba(255,255,255,0.5) 0%, transparent 100%)",pointerEvents:"none"}}/>
                        </div>
                      </div>
                    </div>}
                  </div>;
              })}
            </div>
          </>;
        })()}
      </div>}

      {/* ═══ ALL UNITS VIEW (original) ═══ */}
      {viewMode==="all"&&<div style={{display:"flex",flexDirection:"column",gap:12}}>
        {langUnits.map((u,i)=>{
          const available=u.lessons.length>0;
          const locked=!available&&i>0;
          const up=getUnitProg(u);
          return(
            <div key={u.n} role="button" className="card anim" style={{
              cursor:available?"pointer":"default",
              opacity:locked?0.45:1,
              borderLeftWidth:4,borderLeftColor:u.color,
              display:"flex",alignItems:"center",gap:16,padding:"18px 22px",
              animationDelay:`${i*0.03}s`,
              ...(available?{}:{filter:"grayscale(0.3)"}),
            }} onClick={()=>available&&onSelect(u)}>
              <div style={{width:48,height:48,borderRadius:14,background:available?u.color:"var(--gray-200)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,flexShrink:0,boxShadow:available?`0 4px 12px ${u.color}33`:"none"}}>
                {available?<BrandIcon name={u.icon} size={22}/>:<span style={{fontSize:18}}>🔒</span>}
              </div>
              <div style={{flex:1}}>
                <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:2}}>
                  <span className="hd" style={{fontWeight:800,fontSize:16,color:available?"var(--gray-800)":"var(--gray-400)"}}>Unit {u.n}: {u.title}</span>
                  <span className="badge" style={{background:getCefrBandColor(getCefrInfo(u.level).band)+"18",color:getCefrBandColor(getCefrInfo(u.level).band),fontSize:10}}>{u.level}</span>
                </div>
                <p style={{color:"var(--gray-400)",fontSize:13}}>{u.sub}{up&&up.pct>0?` · ${up.pct}%`:""}</p>
                {available&&<div style={{marginTop:6}}>
                  <div style={{display:"flex",gap:4}}>
                    {u.lessons.map((ls,j)=>{
                      const ld=prog.lessons?.[`${lang}:${u.n}:${ls.id}`];
                      return <div key={j} style={{width:32,height:4,borderRadius:2,background:ld?"var(--teal)":"var(--gray-200)"}}/>;
                    })}
                  </div>
                </div>}
              </div>
              {up&&up.completed?<div style={{fontSize:22}}>✅</div>:available&&<div style={{color:u.color,fontWeight:700,fontSize:22}}>→</div>}
              {!available&&<span style={{color:"var(--gray-300)",fontSize:12,fontWeight:600}}>Coming soon</span>}
            </div>
          );
        })}
      </div>}
    </div>
  );
}

// ── FOUNDATIONS PLAYTHROUGH — Interactive guided FK lessons ──
// Loads FK_PLAYTHROUGH[lang], renders stages, feeds lessons into LessonEngine.
// Progress: user.progress.fkPlay[lang][lessonId] = { completed:true, ts:Date.now() }
// This NEVER touches user.progress.lessons or user.progress.foundation.

// ══════════════════════════════════════════════════════════════════
// FOUNDATIONS GATE QUIZ — Skip Foundations if you already know the system
// Per-language quiz data in FK_GATE_QUIZ. Score labels pulled from quiz data.
// Accessible at all times from Foundations landing.
// ══════════════════════════════════════════════════════════════════
function FoundationsGateQuiz({lang,user,setUser,showToast,addFlag,onBack,onPass}){
  const dk=document.documentElement.classList.contains("dark");
  const quizData = FK_GATE_QUIZ[lang];
  const [phase,setPhase]=useState("intro"); // intro | running | results
  const [taskIdx,setTaskIdx]=useState(0);
  const [itemIdx,setItemIdx]=useState(0);
  const [answers,setAnswers]=useState({}); // {gate_a:[true,false,...], gate_b:[...], ...}
  const [selected,setSelected]=useState(null);
  const [showFeedback,setShowFeedback]=useState(false);

  if(!quizData) return(
    <div className="card" style={{textAlign:"center",padding:"40px 20px"}}>
      <div style={{marginBottom:12}}><AppIcon name="construction" size={56}/></div>
      <h3 className="hd" style={{fontSize:18,fontWeight:700,marginBottom:4}}>Gate Quiz Not Available</h3>
      <p style={{color:"var(--gray-400)",fontSize:13}}>The Gate Quiz for this language is coming soon.</p>
      <div style={{marginTop:16}}><NavArrow onClick={onBack} isBack size={44}/></div>
    </div>
  );

  const tasks = quizData.tasks;
  const currentTask = tasks[taskIdx];
  const currentItem = currentTask?.items[itemIdx];
  const totalItems = tasks.reduce((s,t)=>s+t.items.length,0);
  const doneItems = Object.values(answers).reduce((s,a)=>s+a.length,0);

  const handleAnswer=(opt)=>{
    if(showFeedback) return;
    setSelected(opt);
    setShowFeedback(true);
    const isCorrect = opt===currentItem.ans;
    const tid = currentTask.id;
    setAnswers(prev=>({...prev,[tid]:[...(prev[tid]||[]),isCorrect]}));
    setTimeout(()=>{
      setShowFeedback(false);
      setSelected(null);
      if(itemIdx < currentTask.items.length-1){
        setItemIdx(itemIdx+1);
      } else if(taskIdx < tasks.length-1){
        setTaskIdx(taskIdx+1);
        setItemIdx(0);
      } else {
        setPhase("results");
      }
    },1200);
  };

  // Calculate results
  const calcResults=()=>{
    const scores={};
    tasks.forEach(t=>{
      const a = answers[t.id]||[];
      const correct = a.filter(Boolean).length;
      const total = t.items.length;
      scores[t.id]={correct,total,pct:total>0?Math.round(correct/total*100):0,category:t.category};
    });
    // Category scores
    const abItems = tasks.filter(t=>t.category==="AB");
    const abCorrect = abItems.reduce((s,t)=>(scores[t.id]?.correct||0)+s,0);
    const abTotal = abItems.reduce((s,t)=>(scores[t.id]?.total||0)+s,0);
    const abPct = abTotal>0?Math.round(abCorrect/abTotal*100):0;

    const cItems = tasks.filter(t=>t.category==="C");
    const cCorrect = cItems.reduce((s,t)=>(scores[t.id]?.correct||0)+s,0);
    const cTotal = cItems.reduce((s,t)=>(scores[t.id]?.total||0)+s,0);
    const cPct = cTotal>0?Math.round(cCorrect/cTotal*100):0;

    const deItems = tasks.filter(t=>t.category==="DE");
    const deCorrect = deItems.reduce((s,t)=>(scores[t.id]?.correct||0)+s,0);
    const deTotal = deItems.reduce((s,t)=>(scores[t.id]?.total||0)+s,0);
    const dePct = deTotal>0?Math.round(deCorrect/deTotal*100):0;

    const passed = abPct>=quizData.passCriteria.AB && cPct>=quizData.passCriteria.C && dePct>=quizData.passCriteria.DE;
    return {scores,abPct,cPct,dePct,passed};
  };

  // ── Intro Screen ──
  if(phase==="intro") return(
    <div style={{maxWidth:480,margin:"0 auto"}}>
      <div style={{marginBottom:20}}><NavArrow onClick={onBack} isBack size={44}/></div>
      <div className="card anim" style={{textAlign:"center",padding:"32px 24px",background:dk?"linear-gradient(145deg,#2A2418,#282015)":"linear-gradient(145deg,#FFF8F0,#FFEFDF)",border:"2px solid rgba(212,137,11,0.15)"}}>
        <div style={{marginBottom:12}}><AppIcon name="trophy" size={48}/></div>
        <h2 className="hd" style={{fontSize:22,fontWeight:800,color:"#D4890B",marginBottom:8}}>{quizData.title}</h2>
        <p style={{color:"var(--gray-500)",fontSize:14,lineHeight:1.6,marginBottom:20}}>{quizData.desc}</p>
        <div style={{background:"var(--card-bg)",borderRadius:16,padding:"16px 20px",marginBottom:20,textAlign:"left"}}>
          <div style={{fontSize:13,fontWeight:700,color:"var(--gray-600)",marginBottom:10}}>What's tested:</div>
          {tasks.map(t=><div key={t.id} style={{fontSize:12,color:"var(--gray-500)",marginBottom:6,paddingLeft:8}}>• {t.title}: {t.items.length} items</div>)}
          <div style={{fontSize:12,color:"var(--gray-400)",marginTop:12,paddingTop:10,borderTop:"1px solid var(--gray-100)"}}>
            Pass: A+B ≥ {quizData.passCriteria.AB}% · C ≥ {quizData.passCriteria.C}% · D+E ≥ {quizData.passCriteria.DE}%
          </div>
        </div>
        <div style={{fontSize:12,color:"var(--gray-400)",marginBottom:16,lineHeight:1.5}}>Uses pseudo-words and unfamiliar syllables to test real decoding skill, not memorized words.</div>
        <button className="btn" onClick={()=>setPhase("running")} style={{background:"linear-gradient(135deg,#D4890B,#E8960A)",color:"white",padding:"14px 32px",fontSize:15,fontWeight:700,borderRadius:14,border:"none",cursor:"pointer",boxShadow:"0 4px 16px rgba(212,137,11,0.3)"}}>Start Quiz</button>
      </div>
    </div>
  );

  // ── Running Screen ──
  if(phase==="running"&&currentItem) return(
    <div style={{maxWidth:480,margin:"0 auto"}}>
      {/* Progress bar */}
      <div style={{marginBottom:16}}>
        <div style={{display:"flex",justifyContent:"space-between",fontSize:11,color:"var(--gray-400)",marginBottom:4}}>
          <span>{currentTask.title}</span>
          <span>{doneItems+1}/{totalItems}</span>
        </div>
        <div style={{height:4,borderRadius:2,background:"var(--gray-100)",overflow:"hidden"}}>
          <div style={{height:"100%",width:`${(doneItems/totalItems)*100}%`,background:"linear-gradient(90deg,#D4890B,#E8960A)",borderRadius:2,transition:"width 0.3s"}}/>
        </div>
      </div>
      {/* Task description */}
      <div style={{fontSize:11,color:"var(--gray-400)",marginBottom:6,textAlign:"center"}}>{currentTask.desc}</div>
      {/* Question */}
      <div className="card anim" style={{padding:"28px 24px",textAlign:"center",marginBottom:16,position:"relative"}}>
        {addFlag&&<div style={{position:"absolute",top:8,right:8}}><FlagButton lessonId={`gate_${lang}_${currentTask.id}`} stepIndex={itemIdx} stepData={currentItem} addFlag={addFlag}/></div>}
        <div style={{fontSize:16,fontWeight:700,color:"var(--gray-700)",lineHeight:1.5,marginBottom:24}}>{currentItem.q.split(/([^\u0000-\u007F]+)/g).map((part,pi)=>/[\u0600-\u06FF\u3130-\u318F\uAC00-\uD7AF\u3040-\u309F\u30A0-\u30FF]/.test(part)?<span key={pi} style={{fontSize:36,fontWeight:800,color:"var(--purple-accent-text)",display:"inline-block",margin:"8px 4px",lineHeight:1.2}}>{part}</span>:<span key={pi}>{part}</span>)}</div>
        <div style={{display:"flex",flexDirection:"column",gap:10}}>
          {(()=>{
            const isShort=currentItem.opts.every(o=>o.length<=20);
            const hasKoOpts=currentItem.opts.some(o=>/[\uAC00-\uD7AF]/.test(o));
            const useGrid=isShort&&!hasKoOpts&&currentItem.opts.length===4;
            return <div style={useGrid?{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}:{display:"flex",flexDirection:"column",gap:10}}>
          {currentItem.opts.map((opt,i)=>{
            const isAns = opt===currentItem.ans;
            const isSel = opt===selected;
            let bg = "var(--white)";
            let border = "1.5px solid var(--gray-200)";
            let color = "var(--gray-700)";
            if(showFeedback && isSel && isAns){bg="var(--teal-light)";border="1.5px solid #10B981";color=dk?"#6EE7B7":"#065F46";}
            if(showFeedback && isSel && !isAns){bg="var(--coral-light)";border="1.5px solid #EF4444";color=dk?"#FCA5A5":"#991B1B";}
            if(showFeedback && !isSel && isAns){bg="var(--teal-light)";border="1.5px solid #10B981";color=dk?"#6EE7B7":"#065F46";}
            const hasArabic=/[\u0600-\u06FF]/.test(opt);const hasKo=/[\uAC00-\uD7AF]/.test(opt);
            const isVeryShort=opt.length<=6;
            return(
              <button key={i} onClick={()=>handleAnswer(opt)} style={{padding:useGrid?"16px 12px":"14px 20px",borderRadius:12,background:bg,border,color,fontSize:useGrid&&isVeryShort?22:useGrid?16:hasKo?(opt.length<=4?18:opt.length<=8?16:14):14,fontWeight:useGrid?700:600,cursor:showFeedback?"default":"pointer",textAlign:useGrid?"center":"left",transition:"all 0.15s",wordBreak:"keep-all",...(hasArabic?{direction:"rtl",fontFamily:"'Noto Sans Arabic',sans-serif"}:{})}}>
                {showFeedback&&isSel?(isAns?"✅ ":"❌ "):""}{showFeedback&&!isSel&&isAns?"✅ ":""}{opt}
              </button>
            );
          })}
            </div>;
          })()}
        </div>
      </div>
    </div>
  );

  // ── Results Screen ──
  if(phase==="results"){
    const r = calcResults();
    // Save pass to user progress
    if(r.passed){
      const prev = user.progress?.gateQuiz||{};
      if(!prev[lang]){
        setUser(u=>({...u,progress:{...u.progress,gateQuiz:{...(u.progress?.gateQuiz||{}),[lang]:{passed:true,ts:Date.now(),scores:{AB:r.abPct,C:r.cPct,DE:r.dePct}}}}}));
      }
    }
    // Find failing categories for diagnostic routing
    const failedTasks = [];
    if(r.abPct<quizData.passCriteria.AB){failedTasks.push("A");failedTasks.push("B");}
    if(r.cPct<quizData.passCriteria.C) failedTasks.push("C");
    if(r.dePct<quizData.passCriteria.DE){failedTasks.push("D");failedTasks.push("E");}

    return(
      <div style={{maxWidth:480,margin:"0 auto"}}>
        <div className="card anim" style={{textAlign:"center",padding:"32px 24px",background:r.passed?dk?"linear-gradient(145deg,#1A2E28,#1A2B24)":"linear-gradient(145deg,#F0FFF4,#E8FFEE)":dk?"linear-gradient(145deg,#2A2418,#282015)":"linear-gradient(145deg,#FFF8F0,#FFEFDF)",border:r.passed?"2px solid #86EFAC":"2px solid rgba(212,137,11,0.15)"}}>
          <div style={{fontSize:56,marginBottom:12}}>{r.passed?"🎉":"💪"}</div>
          <h2 className="hd" style={{fontSize:22,fontWeight:800,color:r.passed?"var(--teal)":"#D4890B",marginBottom:8}}>
            {r.passed?"Foundations Passed!":"Keep Practicing!"}
          </h2>
          <p style={{color:"var(--gray-500)",fontSize:14,lineHeight:1.6,marginBottom:20}}>
            {r.passed?"You passed! You may skip Foundations and go straight to lessons.":"You're making progress! Focus on the areas below to strengthen your skills."}
          </p>

          {/* Score breakdown — labels pulled from quiz data (Manifesto P14) */}
          <div style={{background:"var(--card-bg)",borderRadius:16,padding:"16px 20px",marginBottom:20,textAlign:"left"}}>
            {(()=>{
              const abTasks=quizData.tasks.filter(t=>t.category==="AB").map(t=>t.title.replace(/^Task [A-E]: /,"")).join(" & ");
              const cTasks=quizData.tasks.filter(t=>t.category==="C").map(t=>t.title.replace(/^Task [A-E]: /,"")).join(" & ");
              const deTasks=quizData.tasks.filter(t=>t.category==="DE").map(t=>t.title.replace(/^Task [A-E]: /,"")).join(" & ");
              return [{label:`A+B: ${abTasks}`,pct:r.abPct,req:quizData.passCriteria.AB},
                {label:`C: ${cTasks}`,pct:r.cPct,req:quizData.passCriteria.C},
                {label:`D+E: ${deTasks}`,pct:r.dePct,req:quizData.passCriteria.DE},
              ].map((cat,i)=>{
              const pass = cat.pct>=cat.req;
              return(
                <div key={i} style={{marginBottom:i<2?14:0}}>
                  <div style={{display:"flex",justifyContent:"space-between",fontSize:13,fontWeight:600,color:pass?"#065F46":"#991B1B",marginBottom:4}}>
                    <span>{pass?"✅":"❌"} {cat.label}</span>
                    <span>{cat.pct}% (need {cat.req}%)</span>
                  </div>
                  <div style={{height:6,borderRadius:3,background:"var(--gray-100)",overflow:"hidden"}}>
                    <div style={{height:"100%",width:`${cat.pct}%`,background:pass?"#10B981":"#EF4444",borderRadius:3,transition:"width 0.5s"}}/>
                  </div>
                </div>
              );
            });
            })()}
          </div>

          {/* Diagnostic routing for failures */}
          {!r.passed&&failedTasks.length>0&&<div style={{background:"var(--gold-light)",borderRadius:12,padding:"14px 16px",marginBottom:20,textAlign:"left"}}>
            <div style={{fontSize:13,fontWeight:700,color:"#92400E",marginBottom:8}}>📍 Where to focus:</div>
            {[...new Set(failedTasks)].map(t=>(
              <div key={t} style={{fontSize:12,color:"#78350F",marginBottom:4,paddingLeft:8}}>• {quizData.diagnosticRouting[t]}</div>
            ))}
            <div style={{fontSize:11,color:"#92400E",marginTop:10,fontStyle:"italic"}}>This is about a specific subskill — not your overall ability. Targeted practice will fix it.</div>
          </div>}

          {/* Per-task breakdown */}
          <div style={{background:"var(--card-bg)",borderRadius:12,padding:"14px 16px",marginBottom:20,textAlign:"left"}}>
            <div style={{fontSize:12,fontWeight:700,color:"var(--gray-500)",marginBottom:8}}>Detailed scores:</div>
            {tasks.map(t=>{
              const s = r.scores[t.id];
              return <div key={t.id} style={{fontSize:12,color:"var(--gray-500)",marginBottom:4,paddingLeft:8}}>• {t.title}: {s?.correct||0}/{s?.total||0} ({s?.pct||0}%)</div>;
            })}
          </div>

          <div style={{display:"flex",gap:10,justifyContent:"center",flexWrap:"wrap"}}>
            {r.passed&&onPass&&<button className="btn" onClick={onPass} style={{background:"linear-gradient(135deg,var(--teal),#2ECDA7)",color:"white",padding:"12px 24px",fontSize:14,fontWeight:700,borderRadius:12,border:"none",cursor:"pointer"}}>Continue to Lessons →</button>}
            <button className="btn btn-outline" onClick={()=>{setPhase("intro");setTaskIdx(0);setItemIdx(0);setAnswers({});setSelected(null);}} style={{padding:"12px 24px",fontSize:14}}>Retry Quiz</button>
            <NavArrow onClick={onBack} isBack size={44}/>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

// ── Shared title renderer: icon dedup + script-aware sizing ──
// Suppresses icon when it duplicates first non-ASCII char of title.
// Non-ASCII chars in title render larger + purple for glyph readability (D5, P22).
const renderNavTitle=(icon,title,baseFontSize)=>{
  const hasScriptIcon=icon&&/[^\u0000-\u007F]/.test(icon);
  const iconDupes=hasScriptIcon&&title&&title.trim().startsWith(icon);
  const scaledSize=Math.round(baseFontSize*1.3);
  const parts=(title||"").split(/([^\u0000-\u007F]+)/g);
  return <>{!iconDupes&&icon&&<span>{icon} </span>}{parts.map((seg,i)=>/[^\u0000-\u007F]/.test(seg)?<span key={i} style={{fontSize:scaledSize,fontWeight:800,color:"var(--purple-accent-text)",lineHeight:1}}>{seg}</span>:<span key={i}>{seg}</span>)}</>;
};

function FoundationsPlaythrough({lang,user,setUser,addXp,learnWord,showToast,addFlag,baseLang="en",onBack}){
  const dk=document.documentElement.classList.contains("dark");
  // Restore navigation from saved state
  const fkNav=(user.progress||{}).fkNav||{};
  const savedNav=fkNav[lang]||null;
  const [selStage,setSelStage]=useState(savedNav?.stageId||null);
  const [selLesson,setSelLesson]=useState(null);
  const [running,setRunning]=useState(false);
  const fpData=FK_PLAYTHROUGH[lang];
  const stages=fpData?.stages||[];
  const fkPlay=(user.progress||{}).fkPlay||{};
  const langPlay=fkPlay[lang]||{};
  const isLessonDone=(lid)=>!!langPlay[lid]?.completed;

  // Save FK navigation state when stage changes
  const saveFkNav=(stageId)=>{
    setUser(u=>{
      const p={...(u.progress||{}),fkNav:{...((u.progress||{}).fkNav||{})}};
      if(stageId) p.fkNav[lang]={stageId};
      else delete p.fkNav[lang];
      return{...u,progress:p};
    });
  };

  // Wrap setSelStage to also persist
  const selectStage=(id)=>{setSelStage(id);saveFkNav(id);};
  const clearStage=()=>{setSelStage(null);saveFkNav(null);};

  // ← Backspace: go back in navigation hierarchy
  useEffect(()=>{
    const handler=(e)=>{
      if(running) return;
      if(e.code!=="Backspace")return;
      const tag=document.activeElement?.tagName;
      if(tag==="INPUT"||tag==="TEXTAREA")return;
      e.preventDefault();UISounds.click();
      if(selStage){clearStage();}
      else if(onBack){onBack();}
    };
    window.addEventListener("keydown",handler);
    return ()=>window.removeEventListener("keydown",handler);
  },[selStage,running]);

  const completeFpLesson=(lesson)=>{
    setUser(u=>{
      const p={...(u.progress||{}),fkPlay:{...((u.progress||{}).fkPlay||{})}};
      p.fkPlay[lang]={...(p.fkPlay[lang]||{}),[lesson.id]:{completed:true,ts:Date.now()}};
      return{...u,progress:p};
    });
  };

  // Running a lesson — feed to LessonEngine
  if(running&&selLesson){
    // Find next lesson: next in same stage, or first of next stage
    const getNextLesson=()=>{
      for(let si=0;si<stages.length;si++){
        const sLessons=stages[si].lessons||[];
        const li=sLessons.findIndex(l=>l.id===selLesson.id);
        if(li>=0){
          if(li+1<sLessons.length) return sLessons[li+1];
          if(si+1<stages.length){
            const nextStageLessons=stages[si+1].lessons||[];
            if(nextStageLessons.length>0) return nextStageLessons[0];
          }
          return null;
        }
      }
      return null;
    };
    const nextLesson=getNextLesson();
    return <LessonErrorBoundary onBack={()=>{setRunning(false);setSelLesson(null);}}><LessonEngine
      lesson={selLesson}
      baseLang={baseLang}
      lang={lang}
      addFlag={addFlag}
      unit={{color:"var(--purple-accent-text)",n:0,title:fpData?.name||"Foundations"}}
      user={user}
      addXp={addXp}
      learnWord={learnWord}
      showToast={showToast}
      hideQuizRom={true}
      onBack={()=>{setRunning(false);setSelLesson(null);}}
      onComplete={()=>{completeFpLesson(selLesson);}}
      onContinue={nextLesson?()=>{completeFpLesson(selLesson);setSelLesson(nextLesson);}:null}
    /></LessonErrorBoundary>;
  }

  // Lesson list for a stage
  if(selStage){
    const stage=stages.find(s=>s.id===selStage);
    if(!stage) return null;
    const lessons=stage.lessons||[];
    const doneCt=lessons.filter(l=>isLessonDone(l.id)).length;
    const sPct=lessons.length>0?Math.round((doneCt/lessons.length)*100):0;
    return(
      <div className="anim" data-kb-owner="foundations">
        <div style={{marginBottom:20}}><NavArrow onClick={()=>clearStage()} isBack size={44}/></div>
        {/* Stage header — purple like all headers */}
        <div style={{background:"linear-gradient(180deg, #C0AEF8 0%, #A488F0 12%, #8B6AE4 30%, #7B5EE8 50%, #6545C8 75%, #5840B8 90%, #4A2BA6 100%)",borderRadius:22,padding:"22px 24px",marginBottom:24,border:"2px solid rgba(255,255,255,0.18)",position:"relative",overflow:"hidden",boxShadow:dk?"0 0 20px rgba(123,94,232,0.4), 0 8px 28px rgba(0,0,0,0.4), inset 0 2px 0 rgba(255,255,255,0.25), inset 0 -3px 0 rgba(0,0,0,0.15)":"0 0 16px rgba(123,94,232,0.2), 0 8px 28px rgba(123,94,232,0.25), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.12)"}}>
          <div style={{position:"absolute",top:0,left:"6%",right:"6%",height:"44%",borderRadius:"0 0 48% 48%",background:"linear-gradient(180deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.08) 55%, transparent 100%)",pointerEvents:"none",zIndex:1}}/>
          <div style={{display:"flex",alignItems:"center",gap:14,position:"relative",zIndex:2}}>
            <div style={{width:52,height:52,borderRadius:16,background:"rgba(255,255,255,0.15)",backdropFilter:"blur(8px)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,color:"white",fontWeight:900,boxShadow:"inset 0 1px 0 rgba(255,255,255,0.3), inset 0 -1px 0 rgba(0,0,0,0.1), 0 4px 12px rgba(0,0,0,0.15)",position:"relative",overflow:"hidden"}}>
              <div style={{position:"absolute",top:0,left:"6%",right:"6%",height:"44%",borderRadius:"0 0 48% 48%",background:"linear-gradient(180deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.08) 60%, transparent 100%)",pointerEvents:"none"}}/>
              <span style={{position:"relative",zIndex:1,textShadow:"0 1px 3px rgba(0,0,0,0.25)"}}>{stages.indexOf(stage)+1}</span>
            </div>
            <div style={{flex:1}}>
              <h2 style={{fontSize:20,fontWeight:800,color:"white",textShadow:"0 2px 4px rgba(0,0,0,0.2)",margin:0,fontFamily:"'DM Sans','Inter',system-ui,sans-serif"}}>{stage.title}</h2>
              <p style={{color:"rgba(255,255,255,0.75)",fontSize:13,margin:0}}>{stage.desc} · {lessons.length} lessons{sPct>0?` · ${sPct}%`:""}</p>
            </div>
            {sPct===100&&<div style={{fontSize:24,flexShrink:0}}>✅</div>}
          </div>
          {sPct>0&&<div style={{marginTop:10,height:5,borderRadius:4,background:"rgba(255,255,255,0.15)",overflow:"hidden",position:"relative",zIndex:2}}>
            <div style={{height:"100%",width:`${sPct}%`,background:"linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.6) 100%)",borderRadius:4,transition:"width 0.3s",boxShadow:"0 0 8px rgba(255,255,255,0.4)"}}/>
          </div>}
        </div>
        {/* Lesson cards — 2×2 glossy grid */}
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14}}>
          {lessons.map((ls,i)=>{
            const done=isLessonDone(ls.id);
            return(
              <div key={ls.id} role="button" className="ghost-tile anim" onClick={()=>{UISounds.tick();setSelLesson(ls);setRunning(true);}} style={{
                cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:6,padding:"18px 12px 14px",animationDelay:`${i*0.05}s`,
                border:done?`2.5px solid var(--teal)`:dk?"2px solid rgba(123,94,232,0.3)":"2px solid rgba(123,94,232,0.12)",borderRadius:22,position:"relative",overflow:"hidden",
                background:dk?(done?"linear-gradient(180deg, rgba(40,80,65,0.85) 0%, rgba(30,65,50,0.9) 50%, rgba(22,50,40,0.95) 100%)":"linear-gradient(180deg, rgba(55,45,105,0.94) 0%, rgba(42,36,90,0.96) 40%, rgba(30,26,68,0.98) 100%)"):(done?"linear-gradient(180deg, #E0FAE8 0%, #D2F5DC 50%, #C4F0D4 100%)":"linear-gradient(180deg, #F8F5FF 0%, #F4F0FF 35%, #F0ECFF 65%, #EDE8FF 100%)"),
                boxShadow:dk?"0 6px 20px rgba(0,0,0,0.35), 0 0 14px rgba(123,94,232,0.2), inset 0 2px 0 rgba(255,255,255,0.08), inset 0 -3px 0 rgba(0,0,0,0.15)":"0 6px 20px rgba(123,94,232,0.1), 0 0 10px rgba(123,94,232,0.06), inset 0 2px 0 rgba(255,255,255,0.8), inset 0 -3px 0 rgba(123,94,232,0.05)",
                transition:"transform 0.15s, box-shadow 0.15s, filter 0.15s, background 0.15s"}}>
                <div style={{position:"absolute",top:0,left:"6%",right:"6%",height:"38%",borderRadius:"0 0 50% 50%",background:dk?"linear-gradient(180deg, rgba(255,255,255,0.06) 0%, transparent 100%)":"linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.05) 60%, transparent 100%)",pointerEvents:"none",zIndex:1}}/>
                <div style={{width:56,height:56,borderRadius:16,background:done?"linear-gradient(180deg, #70E8C8 0%, #40D8A8 15%, #2ECD9E 40%, #1DB88A 65%, #18A07A 85%, #148068 100%)":"linear-gradient(180deg, #C0AEF8 0%, #A488F0 15%, #8B6AE4 35%, #7B5EE8 55%, #6545C8 75%, #5840B8 90%, #4A2BA6 100%)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:done?20:18,fontWeight:900,color:"white",flexShrink:0,boxShadow:done?(dk?"0 0 16px rgba(46,205,158,0.4), 0 6px 18px rgba(0,0,0,0.35), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.15)":"0 0 12px rgba(46,205,158,0.25), 0 6px 18px rgba(46,205,158,0.3), inset 0 2px 0 rgba(255,255,255,0.45), inset 0 -3px 0 rgba(0,0,0,0.12)"):(dk?"0 0 16px rgba(123,94,232,0.4), 0 6px 18px rgba(0,0,0,0.35), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.15)":"0 0 12px rgba(123,94,232,0.2), 0 6px 18px rgba(123,94,232,0.3), inset 0 2px 0 rgba(255,255,255,0.5), inset 0 -3px 0 rgba(0,0,0,0.12)"),position:"relative",overflow:"hidden",zIndex:2}}>
                  <div style={{position:"absolute",top:0,left:"6%",right:"6%",height:"44%",borderRadius:"0 0 48% 48%",background:"linear-gradient(180deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.08) 60%, transparent 100%)",pointerEvents:"none"}}/>
                  <span style={{position:"relative",zIndex:1,textShadow:"0 1px 3px rgba(0,0,0,0.25)"}}>{done?"✓":i+1}</span>
                </div>
                <div style={{textAlign:"center",position:"relative",zIndex:2}}>
                  <div className="hd" style={{fontWeight:700,fontSize:12,lineHeight:1.3,color:dk?"rgba(220,215,240,0.9)":"var(--gray-700)"}}>{ls.title}</div>
                  <div style={{color:dk?"rgba(180,170,220,0.6)":"var(--gray-400)",fontSize:10,marginTop:2}}>{(ls.steps||[]).length} steps · +{ls.xp} XP{done?" ✓":""}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // Stage list (main view)
  const totalLessons=stages.reduce((a,s)=>a+(s.lessons||[]).length,0);
  const doneLessons=stages.reduce((a,s)=>a+(s.lessons||[]).filter(l=>isLessonDone(l.id)).length,0);
  const pct=totalLessons>0?Math.round((doneLessons/totalLessons)*100):0;
  return(
    <div className="anim" data-kb-owner="foundations">
      <div style={{marginBottom:20}}><NavArrow onClick={onBack} isBack size={44}/></div>
      {/* Header — purple like all headers */}
      <div style={{background:"linear-gradient(180deg, #C0AEF8 0%, #A488F0 12%, #8B6AE4 30%, #7B5EE8 50%, #6545C8 75%, #5840B8 90%, #4A2BA6 100%)",borderRadius:22,padding:"22px 24px",marginBottom:24,border:"2px solid rgba(255,255,255,0.18)",position:"relative",overflow:"hidden",boxShadow:dk?"0 0 20px rgba(123,94,232,0.4), 0 8px 28px rgba(0,0,0,0.4), inset 0 2px 0 rgba(255,255,255,0.25), inset 0 -3px 0 rgba(0,0,0,0.15)":"0 0 16px rgba(123,94,232,0.2), 0 8px 28px rgba(123,94,232,0.25), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.12)"}}>
        <div style={{position:"absolute",top:0,left:"6%",right:"6%",height:"44%",borderRadius:"0 0 48% 48%",background:"linear-gradient(180deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.08) 55%, transparent 100%)",pointerEvents:"none",zIndex:1}}/>
        <div style={{display:"flex",alignItems:"center",gap:14,position:"relative",zIndex:2}}>
          <div style={{width:56,height:56,borderRadius:16,background:"rgba(255,255,255,0.15)",backdropFilter:"blur(8px)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.3), inset 0 -1px 0 rgba(0,0,0,0.1), 0 4px 12px rgba(0,0,0,0.15)",color:"white",flexShrink:0}}><AppIcon name="building_blocks" size={36}/></div>
          <div style={{flex:1}}>
            <h2 style={{fontSize:22,fontWeight:800,color:"white",textShadow:"0 2px 4px rgba(0,0,0,0.2)",margin:0,fontFamily:"'DM Sans','Inter',system-ui,sans-serif"}}>{fpData?.name||"Foundations"}</h2>
            <p style={{color:"rgba(255,255,255,0.75)",fontSize:13,margin:0}}>{stages.length} stages · {totalLessons} lessons{pct>0?` · ${pct}%`:""}</p>
          </div>
          {pct===100&&<div style={{fontSize:28,flexShrink:0}}>✅</div>}
        </div>
        {pct>0&&<div style={{marginTop:10,height:5,borderRadius:4,background:"rgba(255,255,255,0.15)",overflow:"hidden",position:"relative",zIndex:2}}>
          <div style={{height:"100%",width:`${pct}%`,background:"linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.6) 100%)",borderRadius:4,transition:"width 0.3s",boxShadow:"0 0 8px rgba(255,255,255,0.4)"}}/>
        </div>}
      </div>
      {stages.length>0?
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14}}>
          {stages.map((stage,i)=>{
            const sLessons=stage.lessons||[];
            const sDone=sLessons.filter(l=>isLessonDone(l.id)).length;
            const sPct=sLessons.length>0?Math.round((sDone/sLessons.length)*100):0;
            return(
              <div key={stage.id} role="button" className="ghost-tile anim" onClick={()=>{UISounds.tick();selectStage(stage.id);}} style={{
                cursor:"pointer",padding:"18px 14px 14px",textAlign:"center",borderRadius:22,
                display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:6,
                background:sPct===100?(dk?"linear-gradient(180deg, rgba(40,80,65,0.85) 0%, rgba(30,65,50,0.9) 50%, rgba(22,50,40,0.95) 100%)":"linear-gradient(180deg, #E0FAE8 0%, #D2F5DC 50%, #C4F0D4 100%)"):(dk?"linear-gradient(180deg, rgba(55,45,105,0.94) 0%, rgba(42,36,90,0.96) 40%, rgba(30,26,68,0.98) 100%)":"linear-gradient(180deg, #F8F5FF 0%, #F4F0FF 35%, #F0ECFF 65%, #EDE8FF 100%)"),
                border:sPct===100?`2.5px solid var(--teal)`:dk?"2px solid rgba(123,94,232,0.3)":"2px solid rgba(123,94,232,0.12)",
                boxShadow:dk?"0 6px 20px rgba(0,0,0,0.35), 0 0 14px rgba(123,94,232,0.2), inset 0 2px 0 rgba(255,255,255,0.08), inset 0 -3px 0 rgba(0,0,0,0.15)":"0 6px 20px rgba(123,94,232,0.1), 0 0 10px rgba(123,94,232,0.06), inset 0 2px 0 rgba(255,255,255,0.8), inset 0 -3px 0 rgba(123,94,232,0.05)",
                animationDelay:`${i*0.05}s`,position:"relative",overflow:"hidden",
                transition:"transform 0.15s, box-shadow 0.15s, filter 0.15s, background 0.15s",
              }}>
                <div style={{position:"absolute",top:0,left:"6%",right:"6%",height:"38%",borderRadius:"0 0 50% 50%",background:dk?"linear-gradient(180deg, rgba(255,255,255,0.06) 0%, transparent 100%)":"linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.05) 60%, transparent 100%)",pointerEvents:"none",zIndex:1}}/>
                <div style={{width:56,height:56,borderRadius:16,background:sPct===100?"linear-gradient(180deg, #70E8C8 0%, #40D8A8 15%, #2ECD9E 40%, #1DB88A 65%, #18A07A 85%, #148068 100%)":"linear-gradient(180deg, #C0AEF8 0%, #A488F0 15%, #8B6AE4 35%, #7B5EE8 55%, #6545C8 75%, #5840B8 90%, #4A2BA6 100%)",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:18,fontWeight:900,boxShadow:sPct===100?(dk?"0 0 16px rgba(46,205,158,0.4), 0 6px 18px rgba(0,0,0,0.35), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.15)":"0 0 12px rgba(46,205,158,0.25), 0 6px 18px rgba(46,205,158,0.3), inset 0 2px 0 rgba(255,255,255,0.45), inset 0 -3px 0 rgba(0,0,0,0.12)"):(dk?"0 0 16px rgba(123,94,232,0.4), 0 6px 18px rgba(0,0,0,0.35), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.15)":"0 0 12px rgba(123,94,232,0.2), 0 6px 18px rgba(123,94,232,0.3), inset 0 2px 0 rgba(255,255,255,0.5), inset 0 -3px 0 rgba(0,0,0,0.12)"),position:"relative",overflow:"hidden",zIndex:2}}>
                  <div style={{position:"absolute",top:0,left:"6%",right:"6%",height:"44%",borderRadius:"0 0 48% 48%",background:"linear-gradient(180deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.08) 60%, transparent 100%)",pointerEvents:"none"}}/>
                  <span style={{position:"relative",zIndex:1,textShadow:"0 1px 3px rgba(0,0,0,0.25)"}}>{sPct===100?"✓":i+1}</span>
                </div>
                <div style={{textAlign:"center",position:"relative",zIndex:2}}>
                  <div className="hd" style={{fontSize:12,fontWeight:700,color:sPct===100?"var(--teal)":(dk?"rgba(220,215,240,0.9)":"var(--gray-700)"),lineHeight:1.3}}>{stage.title}</div>
                  <div style={{fontSize:10,color:sPct===100?"var(--teal)":(dk?"rgba(180,170,220,0.6)":"var(--purple-accent-text)"),fontWeight:600,marginTop:2}}>{sPct===100?"✓ Complete":`${sDone}/${sLessons.length} lessons`}</div>
                </div>
                {sPct>0&&sPct<100&&<div style={{width:"80%",position:"relative",zIndex:2}}>
                  <div style={{height:4,borderRadius:3,background:dk?"rgba(255,255,255,0.1)":"rgba(123,94,232,0.1)",overflow:"hidden"}}>
                    <div style={{height:"100%",width:`${sPct}%`,background:"linear-gradient(180deg, #C0AEFA 0%, #7B5EE8 55%, #5840B8 100%)",borderRadius:3,boxShadow:"0 0 6px rgba(123,94,232,0.3)"}}/>
                  </div>
                </div>}
              </div>
            );
          })}
        </div>
      :
        <div className="card" style={{textAlign:"center",padding:"40px 20px"}}>
          <div style={{marginBottom:12}}><AppIcon name="construction" size={56}/></div>
          <h3 className="hd" style={{fontSize:18,fontWeight:700,marginBottom:4}}>Coming Soon</h3>
          <p style={{color:"var(--gray-400)",fontSize:13}}>Playthrough lessons for this language are being developed.</p>
        </div>
      }
    </div>
  );
}

// ── LESSON LIST (inside a unit) ──
function LessonList({unit,user,lang,onBack,onStart}){
  const dk=document.documentElement.classList.contains("dark");
  const [whyOpen,setWhyOpen]=useState(false);
  const [showUnitPopup,setShowUnitPopup]=useState(false);
  const prog=user.progress||{};
  const unitProg=prog.units?.[`${lang||unit.lang}:${unit.n}`];
  // Backspace = go back to unit map
  useEffect(()=>{
    const handler=(e)=>{
      if(showUnitPopup)return; // popup handles its own keys
      if(e.code!=="Backspace")return;
      const tag=document.activeElement?.tagName;
      if(tag==="INPUT"||tag==="TEXTAREA")return;
      e.preventDefault();UISounds.click();onBack();
    };
    window.addEventListener("keydown",handler);
    return ()=>window.removeEventListener("keydown",handler);
  },[onBack,showUnitPopup]);
  return(
    <div className="anim" data-kb-owner="learn">
      <div style={{marginBottom:20}}><NavArrow onClick={onBack} isBack size={44}/></div>
      
      {/* Unit header — clickable → info popup — matches Nederlands purple */}
      <div role="button" onClick={()=>{UISounds.click();setShowUnitPopup(true);}} style={{cursor:"pointer",background:"linear-gradient(180deg, #C0AEF8 0%, #A488F0 12%, #8B6AE4 30%, #7B5EE8 50%, #6545C8 75%, #5840B8 90%, #4A2BA6 100%)",borderRadius:22,padding:"22px 24px",marginBottom:22,border:"2px solid rgba(255,255,255,0.18)",position:"relative",overflow:"hidden",boxShadow:dk?"0 0 20px rgba(123,94,232,0.4), 0 8px 28px rgba(0,0,0,0.4), inset 0 2px 0 rgba(255,255,255,0.25), inset 0 -3px 0 rgba(0,0,0,0.15)":"0 0 16px rgba(123,94,232,0.2), 0 8px 28px rgba(123,94,232,0.25), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.12)",transition:"transform 0.15s, box-shadow 0.15s, filter 0.15s"}}>
        <div style={{position:"absolute",top:0,left:"6%",right:"6%",height:"44%",borderRadius:"0 0 48% 48%",background:"linear-gradient(180deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.08) 55%, transparent 100%)",pointerEvents:"none",zIndex:1}}/>
        <div style={{display:"flex",alignItems:"center",gap:14,position:"relative",zIndex:2}}>
          <div style={{width:52,height:52,borderRadius:16,background:"rgba(255,255,255,0.15)",backdropFilter:"blur(8px)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:18,fontWeight:900,color:"white",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.3), inset 0 -1px 0 rgba(0,0,0,0.1), 0 4px 12px rgba(0,0,0,0.15)",position:"relative",overflow:"hidden"}}>
            <div style={{position:"absolute",top:0,left:"6%",right:"6%",height:"44%",borderRadius:"0 0 48% 48%",background:"linear-gradient(180deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.08) 60%, transparent 100%)",pointerEvents:"none"}}/>
            <span style={{position:"relative",zIndex:1,textShadow:"0 1px 3px rgba(0,0,0,0.25)"}}>U{unit.n}</span>
          </div>
          <div style={{flex:1}}>
            <div style={{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"}}>
              <h2 style={{fontSize:20,fontWeight:800,color:"white",textShadow:"0 2px 4px rgba(0,0,0,0.2)",margin:0,fontFamily:"'DM Sans','Inter',system-ui,sans-serif"}}>Unit {unit.n}: {unit.title}</h2>
              {(()=>{const fw=LANG_FRAMEWORK[unit.lang]||"CEFR";const info=getCefrInfo(unit.level);return <span style={{padding:"2px 8px",borderRadius:6,background:"rgba(255,255,255,0.18)",color:"white",fontSize:9,fontWeight:700}}>{unit.level} • {info.label}</span>;})()}
            </div>
            <p style={{color:"rgba(255,255,255,0.75)",fontSize:13,marginTop:2,margin:0}}>{unit.sub} · {unit.lessons.length} lessons{unitProg?` · ${unitProg.pct}%`:""}</p>
          </div>
          {unitProg&&unitProg.completed&&<div style={{fontSize:24,flexShrink:0}}>✅</div>}
          <svg width={16} height={16} viewBox="0 0 24 24" fill="none" style={{position:"relative",zIndex:2,opacity:0.5,flexShrink:0}}><path d="M9 5l7 7-7 7" stroke="white" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
        {unitProg&&unitProg.pct>0&&<div style={{marginTop:10,height:5,borderRadius:4,background:"rgba(255,255,255,0.15)",overflow:"hidden",position:"relative",zIndex:2}}>
          <div style={{height:"100%",width:`${unitProg.pct}%`,background:"linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.6) 100%)",borderRadius:4,transition:"width 0.3s",boxShadow:"0 0 8px rgba(255,255,255,0.4)",position:"relative",overflow:"hidden"}}><div style={{position:"absolute",top:0,left:"5%",right:"5%",height:"50%",borderRadius:"0 0 50% 50%",background:"linear-gradient(180deg, rgba(255,255,255,0.6) 0%, transparent 100%)",pointerEvents:"none"}}/></div>
        </div>}
      </div>

      {/* Unit info popup */}
      {showUnitPopup&&<GlossyPopup title={`Unit ${unit.n}: ${unit.title}`} onClose={()=>setShowUnitPopup(false)}>
        <div style={{fontSize:13,color:"var(--gray-600)",lineHeight:1.6,marginBottom:14}}>{unit.sub}</div>
        {unit.goals&&unit.goals.length>0&&<div style={{marginBottom:14}}>
          <div style={{fontSize:12,fontWeight:700,color:"var(--gray-500)",marginBottom:8}}>What you'll learn:</div>
          {unit.goals.map((g,i)=><div key={i} style={{padding:"8px 12px",borderRadius:10,background:dk?"rgba(123,94,232,0.1)":"rgba(123,94,232,0.04)",border:dk?"1px solid rgba(123,94,232,0.1)":"1px solid rgba(123,94,232,0.06)",marginBottom:4,fontSize:13,color:"var(--gray-700)"}}>
            <span style={{color:"var(--purple-accent-text)",fontWeight:700,marginRight:6}}>→</span>{g}
          </div>)}
        </div>}
        <div style={{display:"flex",gap:12}}>
          <div style={{flex:1,padding:"12px",borderRadius:12,background:dk?"rgba(123,94,232,0.1)":"rgba(123,94,232,0.05)",textAlign:"center",border:dk?"1px solid rgba(123,94,232,0.12)":"1px solid rgba(123,94,232,0.06)"}}>
            <div style={{fontSize:18,fontWeight:800,color:"var(--purple-accent-text)"}}>{unit.lessons.length}</div>
            <div style={{fontSize:10,color:"var(--gray-400)",fontWeight:600}}>Lessons</div>
          </div>
          <div style={{flex:1,padding:"12px",borderRadius:12,background:dk?"rgba(123,94,232,0.1)":"rgba(123,94,232,0.05)",textAlign:"center",border:dk?"1px solid rgba(123,94,232,0.12)":"1px solid rgba(123,94,232,0.06)"}}>
            <div style={{fontSize:18,fontWeight:800,color:"var(--purple-accent-text)"}}>{unit.level}</div>
            <div style={{fontSize:10,color:"var(--gray-400)",fontWeight:600}}>CEFR Level</div>
          </div>
          <div style={{flex:1,padding:"12px",borderRadius:12,background:dk?"rgba(123,94,232,0.1)":"rgba(123,94,232,0.05)",textAlign:"center",border:dk?"1px solid rgba(123,94,232,0.12)":"1px solid rgba(123,94,232,0.06)"}}>
            <div style={{fontSize:18,fontWeight:800,color:"var(--purple-accent-text)"}}>{unitProg?`${unitProg.pct}%`:"0%"}</div>
            <div style={{fontSize:10,color:"var(--gray-400)",fontWeight:600}}>Complete</div>
          </div>
        </div>
      </GlossyPopup>}

      {/* Why this level? — evidence panel (only for units with objectives) */}
      {unit.objectives&&unit.objectives.length>0&&(()=>{
        const fw=LANG_FRAMEWORK[unit.lang]||"CEFR";
        const exp=explainUnitLevel(unit,fw);
        const bandColor=getCefrBandColor(getCefrInfo(exp.level||unit.level).band);
        return <div style={{margin:"0 0 16px",borderRadius:14,border:dk?"1.5px solid rgba(123,94,232,0.15)":"1.5px solid rgba(123,94,232,0.08)",overflow:"hidden"}}>
          <button onClick={()=>setWhyOpen(!whyOpen)} style={{width:"100%",background:"none",border:"none",padding:"12px 16px",cursor:"pointer",display:"flex",alignItems:"center",gap:8,fontSize:13,color:"var(--gray-500)",fontWeight:600}}>
            <span style={{fontSize:14}}>{whyOpen?"▾":"▸"}</span>
            Why {fw} {exp.level||unit.level}?
            {exp.derived&&<span style={{marginLeft:"auto",fontSize:10,padding:"2px 8px",borderRadius:6,background:bandColor+"15",color:bandColor,fontWeight:700}}>derived from objectives</span>}
          </button>
          {whyOpen&&<div style={{padding:"0 16px 14px",fontSize:12,color:"var(--gray-600)",lineHeight:1.6}}>
            {exp.objectives.map((o,i)=><div key={o.id} style={{marginBottom:i<exp.objectives.length-1?10:0}}>
              <div style={{fontWeight:700,color:"var(--gray-700)",marginBottom:2}}>
                <span style={{display:"inline-block",padding:"1px 6px",borderRadius:4,background:bandColor+"15",color:bandColor,fontSize:10,fontWeight:700,marginRight:6}}>{o.level}</span>
                {o.name}
              </div>
              {o.evidence.map((e,j)=><div key={j} style={{paddingLeft:12,color:"var(--gray-400)",fontSize:11}}>• {e}</div>)}
            </div>)}
            {!exp.derived&&<div style={{color:"var(--gray-300)",fontStyle:"italic",fontSize:11}}>Level set manually — no objectives mapped yet.</div>}
          </div>}
        </div>;
      })()}

      {/* Lesson cards — 2x2 glossy grid */}
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14}}>
        {unit.lessons.map((ls,i)=>{
          const lessonDone=prog.lessons?.[`${lang||unit.lang}:${unit.n}:${ls.id}`];
          return(
          <div key={ls.id} role="button" className="anim ghost-tile" onClick={()=>{UISounds.tick();onStart(ls);}}
            style={{cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:6,padding:"18px 12px 14px",animationDelay:`${i*0.05}s`,
            border:lessonDone?`2.5px solid var(--teal)`:dk?"2px solid rgba(123,94,232,0.3)":"2px solid rgba(123,94,232,0.12)",borderRadius:22,position:"relative",overflow:"hidden",
            background:dk?(lessonDone?"linear-gradient(180deg, rgba(40,80,65,0.85) 0%, rgba(30,65,50,0.9) 50%, rgba(22,50,40,0.95) 100%)":"linear-gradient(180deg, rgba(55,45,105,0.94) 0%, rgba(42,36,90,0.96) 40%, rgba(30,26,68,0.98) 100%)"):(lessonDone?"linear-gradient(180deg, #E0FAE8 0%, #D2F5DC 50%, #C4F0D4 100%)":"linear-gradient(180deg, #F8F5FF 0%, #F4F0FF 35%, #F0ECFF 65%, #EDE8FF 100%)"),
            boxShadow:dk?"0 6px 20px rgba(0,0,0,0.35), 0 0 14px rgba(123,94,232,0.2), inset 0 2px 0 rgba(255,255,255,0.08), inset 0 -3px 0 rgba(0,0,0,0.15)":"0 6px 20px rgba(123,94,232,0.1), 0 0 10px rgba(123,94,232,0.06), inset 0 2px 0 rgba(255,255,255,0.8), inset 0 -3px 0 rgba(123,94,232,0.05)",
            transition:"transform 0.15s, box-shadow 0.15s, filter 0.15s"}}>
            <div style={{position:"absolute",top:0,left:"6%",right:"6%",height:"38%",borderRadius:"0 0 50% 50%",background:dk?"linear-gradient(180deg, rgba(255,255,255,0.06) 0%, transparent 100%)":"linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.05) 60%, transparent 100%)",pointerEvents:"none",zIndex:1}}/>
            {/* Lesson number badge */}
            <div style={{width:56,height:56,borderRadius:16,background:lessonDone?"linear-gradient(180deg, #70E8C8 0%, #40D8A8 15%, #2ECD9E 40%, #1DB88A 65%, #18A07A 85%, #148068 100%)":"linear-gradient(180deg, #C0AEF8 0%, #A488F0 15%, #8B6AE4 35%, #7B5EE8 55%, #6545C8 75%, #5840B8 90%, #4A2BA6 100%)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:lessonDone?20:18,fontWeight:900,color:"white",fontFamily:"'DM Sans',sans-serif",flexShrink:0,boxShadow:lessonDone?(dk?"0 0 16px rgba(46,205,158,0.4), 0 6px 18px rgba(0,0,0,0.35), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.15)":"0 0 12px rgba(46,205,158,0.25), 0 6px 18px rgba(46,205,158,0.3), inset 0 2px 0 rgba(255,255,255,0.45), inset 0 -3px 0 rgba(0,0,0,0.12)"):(dk?"0 0 16px rgba(123,94,232,0.4), 0 6px 18px rgba(0,0,0,0.35), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.15)":"0 0 12px rgba(123,94,232,0.2), 0 6px 18px rgba(123,94,232,0.3), inset 0 2px 0 rgba(255,255,255,0.5), inset 0 -3px 0 rgba(0,0,0,0.12)"),position:"relative",overflow:"hidden",zIndex:2}}>
              <div style={{position:"absolute",top:0,left:"6%",right:"6%",height:"44%",borderRadius:"0 0 48% 48%",background:"linear-gradient(180deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.08) 60%, transparent 100%)",pointerEvents:"none"}}/>
              <span style={{position:"relative",zIndex:1,textShadow:"0 1px 3px rgba(0,0,0,0.25)",filter:"drop-shadow(0 1px 2px rgba(0,0,0,0.15))"}}>{lessonDone?"✓":`L${i+1}`}</span>
            </div>
            <div style={{textAlign:"center",position:"relative",zIndex:2}}>
              <div className="hd" style={{fontWeight:700,fontSize:12,lineHeight:1.3,color:dk?"rgba(220,215,240,0.9)":"var(--gray-700)"}}>{ls.title}</div>
              <div style={{color:dk?"rgba(180,170,220,0.6)":"var(--gray-400)",fontSize:10,marginTop:2}}>{(ls.steps||[]).length} steps · +{ls.xp} XP{lessonDone?" ✓":""}</div>
            </div>
          </div>);
        })}
      </div>
    </div>
  );
}


// ── LESSON ENGINE — TEACH FIRST, QUIZ SECOND ──

// ── FLAG BUTTON — report quiz issues ──
function FlagButton({lessonId,stepIndex,stepData,addFlag}){
  const [open,setOpen]=useState(false);
  const [reason,setReason]=useState(null);
  const [detail,setDetail]=useState("");
  const [sent,setSent]=useState(false);

  const reasons=[
    {id:"wrong_answer",label:"Wrong answer",icon:"❌",desc:"The 'correct' answer is actually wrong"},
    {id:"hint_spoiler",label:"Hint gives it away",icon:"💡",desc:"The hint makes the answer too obvious"},
    {id:"unclear_question",label:"Unclear question",icon:"🤔",desc:"I don't understand what's being asked"},
    {id:"missing_answer",label:"My answer should be accepted",icon:"✅",desc:"I gave a valid answer that was marked wrong"},
    {id:"typo",label:"Typo / spelling error",icon:"📝",desc:"There's a typo in the question or answer"},
    {id:"other",label:"Other issue",icon:"📋",desc:"Something else is wrong"},
  ];

  const submit=()=>{
    if(!reason)return;
    addFlag(lessonId,stepIndex,stepData,reason,detail);
    setSent(true);
    setTimeout(()=>{setOpen(false);setSent(false);setReason(null);setDetail("");},1500);
  };

  if(!open) return(
      <button onClick={()=>setOpen(true)} style={{
        background:"none",border:"none",cursor:"pointer",fontSize:11,
        color:"var(--gray-300)",display:"flex",alignItems:"center",gap:3,
        padding:"4px 10px",borderRadius:12,transition:"all .15s",
        fontFamily:"'DM Sans',sans-serif",fontWeight:600,letterSpacing:0.3
      }} onMouseEnter={e=>{e.target.style.color="var(--coral)";e.target.style.background="rgba(224,74,74,0.06)";}} onMouseLeave={e=>{e.target.style.color="var(--gray-300)";e.target.style.background="none";}}>
        <span style={{fontSize:13}}>⚑</span> Report
      </button>
  );

  return(
    <div style={{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0,0,0,0.3)",zIndex:100,display:"flex",alignItems:"center",justifyContent:"center",padding:20}} onClick={()=>{setOpen(false);setReason(null);setDetail("");}}>
      <div style={{maxWidth:440,width:"100%",background:"var(--card-bg)",border:"2px solid var(--coral)",borderRadius:20,padding:20,animation:"fadeUp .2s",boxShadow:"0 20px 60px rgba(0,0,0,0.15)"}} onClick={e=>e.stopPropagation()}>
      {sent?(
        <div style={{textAlign:"center",padding:16}}>
          <div style={{fontSize:28,marginBottom:8}}>✅</div>
          <div style={{fontWeight:700,color:"var(--teal-dark)"}}>Thanks! Flag submitted.</div>
          <div style={{fontSize:12,color:"var(--gray-400)",marginTop:4}}>This helps LingoVerse learn and improve.</div>
        </div>
      ):(
        <>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12}}>
            <div style={{fontWeight:700,fontSize:14}}>🚩 What's wrong?</div>
            <button onClick={()=>{setOpen(false);setReason(null);setDetail("");}} style={{background:"none",border:"none",cursor:"pointer",fontSize:16,color:"var(--gray-400)"}}>✕</button>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:6}}>
            {reasons.map(r=>(
              <div key={r.id} onClick={()=>setReason(r.id)} style={{
                padding:"10px 12px",borderRadius:8,cursor:"pointer",
                border:`2px solid ${reason===r.id?"var(--coral)":"var(--gray-200)"}`,
                background:reason===r.id?"var(--coral-light)":"var(--white)",
                transition:"all .15s",fontSize:13
              }}>
                <div style={{fontWeight:600,display:"flex",alignItems:"center",gap:6}}><BrandIcon name={r.icon} size={16}/> {r.label}</div>
              </div>
            ))}
          </div>
          {reason&&(
            <div style={{marginTop:10}}>
              <textarea value={detail} onChange={e=>setDetail(e.target.value)}
                placeholder="Optional: add more detail..."
                style={{width:"100%",padding:10,borderRadius:8,border:"1.5px solid var(--gray-200)",
                  fontSize:13,fontFamily:"inherit",resize:"vertical",minHeight:50,outline:"none"}}/>
              <button onClick={submit} style={{
                marginTop:8,width:"100%",padding:"10px 0",borderRadius:8,
                background:"var(--coral)",color:"white",border:"none",
                fontWeight:700,fontSize:14,cursor:"pointer"
              }}>Submit Flag 🚩</button>
            </div>
          )}
        </>
      )}
      </div>
    </div>
  );
}


// ── CONTINUE BUTTON — styled, in target language ──
// ── CONFETTI — Pure CSS celebration burst ──
function Confetti({active}){
  const [pieces]=useState(()=>{
    const colors=["#F5A623","#4A8FE7","#2ECD9E","#E74C6F","#9B59B6","#F39C12","#1ABC9C","#E74C3C"];
    return Array.from({length:35},(_,i)=>({
      id:i,
      color:colors[i%colors.length],
      x:Math.random()*100,
      dur:1.8+Math.random()*1.5,
      delay:Math.random()*0.4,
      spin:360+Math.random()*720,
      w:6+Math.random()*8,
      h:4+Math.random()*6,
      r:Math.random()*360,
    }));
  });
  if(!active)return null;
  return(
    <div className="confetti-container">
      {pieces.map(p=>(
        <div key={p.id} className="confetti-piece" style={{
          "--confetti-x":`${p.x}%`,
          "--confetti-dur":`${p.dur}s`,
          "--confetti-delay":`${p.delay}s`,
          "--confetti-spin":`${p.spin}deg`,
          width:p.w,height:p.h,
          background:p.color,
          borderRadius:Math.random()>0.5?"50%":"2px",
          transform:`rotate(${p.r}deg)`,
        }}/>
      ))}
    </div>
  );
}

function ContinueButton({onClick,correct,baseLang="en",spaceRef,onBack,canGoBack}){
  const dk=document.documentElement.classList.contains("dark");
  useEffect(()=>{
    if(spaceRef) spaceRef.current=onClick;
    return ()=>{if(spaceRef && spaceRef.current===onClick) spaceRef.current=null;};
  },[onClick,spaceRef]);
  const mkBtn=(isBack)=>{
    const s=isBack?48:60;const r=isBack?14:16;
    const bg=isBack
      ?(dk?"linear-gradient(180deg, rgba(70,68,100,0.85) 0%, rgba(50,48,78,0.9) 50%, rgba(35,33,60,0.95) 100%)":"linear-gradient(180deg, #FFFFFF 0%, #f0f0f5 50%, #e2e2ea 100%)")
      :(correct
        ?"linear-gradient(180deg, #5EEAC8 0%, #2ECD9E 35%, #1DB88A 65%, #18A07A 100%)"
        :"linear-gradient(180deg, #C0AEF8 0%, #A488F0 15%, #8B6AE4 35%, #7B5EE8 50%, #6545C8 75%, #5840B8 90%, #4A2BA6 100%)");
    const shadow=dk
      ?(isBack
        ?"0 0 14px rgba(140,130,200,0.25), 0 4px 14px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1), inset 0 -2px 0 rgba(0,0,0,0.2)"
        :(correct?"0 0 20px rgba(60,220,180,0.45), 0 0 44px rgba(46,205,158,0.2), 0 4px 16px rgba(46,205,158,0.4), inset 0 1px 0 rgba(255,255,255,0.15), inset 0 -2px 0 rgba(0,0,0,0.2)":"0 0 20px rgba(150,120,255,0.45), 0 0 44px rgba(123,94,232,0.2), 0 4px 16px rgba(123,94,232,0.4), inset 0 1px 0 rgba(255,255,255,0.15), inset 0 -2px 0 rgba(0,0,0,0.2)"))
      :(isBack
        ?"0 4px 12px rgba(0,0,0,0.1), inset 0 2px 0 rgba(255,255,255,0.8), inset 0 -3px 0 rgba(0,0,0,0.06)"
        :(correct?"0 6px 20px rgba(46,205,158,0.45), inset 0 2px 0 rgba(255,255,255,0.45), inset 0 -3px 0 rgba(0,0,0,0.12)":"0 6px 20px rgba(123,94,232,0.45), inset 0 2px 0 rgba(255,255,255,0.45), inset 0 -3px 0 rgba(0,0,0,0.12)"));
    const hoverShadow=dk
      ?(isBack
        ?"0 0 22px rgba(140,130,200,0.4), 0 0 40px rgba(140,130,200,0.15), 0 4px 14px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.16), inset 0 -2px 0 rgba(0,0,0,0.15)"
        :(correct?"0 0 28px rgba(60,220,180,0.6), 0 0 56px rgba(46,205,158,0.3), 0 0 80px rgba(46,205,158,0.1), 0 6px 24px rgba(46,205,158,0.5), inset 0 1px 0 rgba(255,255,255,0.22), inset 0 -2px 0 rgba(0,0,0,0.15)":"0 0 28px rgba(160,130,255,0.6), 0 0 56px rgba(140,110,240,0.3), 0 0 80px rgba(123,94,232,0.1), 0 6px 24px rgba(123,94,232,0.5), inset 0 1px 0 rgba(255,255,255,0.22), inset 0 -2px 0 rgba(0,0,0,0.15)"))
      :(isBack
        ?"0 6px 16px rgba(0,0,0,0.12), inset 0 2px 0 rgba(255,255,255,0.9)"
        :(correct?"0 8px 28px rgba(46,205,158,0.5), inset 0 2px 0 rgba(255,255,255,0.5)":"0 8px 28px rgba(123,94,232,0.5), inset 0 2px 0 rgba(255,255,255,0.5)"));
    const arrowColor=isBack?(dk?"rgba(220,215,240,0.85)":"#777"):"white";
    const iconSz=isBack?22:30;
    return {s,r,bg,shadow,hoverShadow,arrowColor,iconSz};
  };
  const fwd=mkBtn(false);const bck=mkBtn(true);
  return(
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:12,marginTop:14}}>
      {canGoBack&&onBack&&<button onClick={onBack} style={{display:"flex",alignItems:"center",justifyContent:"center",width:bck.s,height:bck.s,borderRadius:bck.r,border:dk?"1px solid rgba(255,255,255,0.12)":"none",cursor:"pointer",background:bck.bg,boxShadow:bck.shadow,transition:"all .15s",position:"relative",overflow:"hidden"}}
        onMouseEnter={e=>{e.currentTarget.style.transform="scale(1.08)";e.currentTarget.style.boxShadow=bck.hoverShadow;if(dk)e.currentTarget.style.filter="brightness(1.15)";}}
        onMouseLeave={e=>{e.currentTarget.style.transform="scale(1)";e.currentTarget.style.boxShadow=bck.shadow;if(dk)e.currentTarget.style.filter="none";}}
      ><div style={{position:"absolute",top:0,left:"8%",right:"8%",height:dk?"35%":"42%",borderRadius:"0 0 50% 50%",background:dk?"linear-gradient(180deg, rgba(255,255,255,0.15) 0%, transparent 100%)":"linear-gradient(180deg, rgba(255,255,255,0.55) 0%, transparent 100%)",pointerEvents:"none"}}/><svg width={bck.iconSz} height={bck.iconSz} viewBox="0 0 24 24" fill="none" style={{filter:`drop-shadow(0 1px 2px rgba(0,0,0,${dk?0.5:0.25}))`,position:"relative",zIndex:1}}><path d="M15 19l-7-7 7-7" stroke={bck.arrowColor} strokeWidth={3.5} strokeLinecap="round" strokeLinejoin="round"/></svg></button>}
      <button onClick={onClick} style={{display:"flex",alignItems:"center",justifyContent:"center",width:fwd.s,height:fwd.s,borderRadius:fwd.r,border:dk?"1px solid rgba(255,255,255,0.12)":"none",cursor:"pointer",background:fwd.bg,boxShadow:fwd.shadow,transition:"all .15s",position:"relative",overflow:"hidden"}}
        onMouseEnter={e=>{e.currentTarget.style.transform="scale(1.08)";e.currentTarget.style.boxShadow=fwd.hoverShadow;if(dk)e.currentTarget.style.filter="brightness(1.15)";}}
        onMouseLeave={e=>{e.currentTarget.style.transform="scale(1)";e.currentTarget.style.boxShadow=fwd.shadow;if(dk)e.currentTarget.style.filter="none";}}
      ><div style={{position:"absolute",top:0,left:"8%",right:"8%",height:dk?"35%":"42%",borderRadius:"0 0 50% 50%",background:dk?"linear-gradient(180deg, rgba(255,255,255,0.15) 0%, transparent 100%)":"linear-gradient(180deg, rgba(255,255,255,0.55) 0%, transparent 100%)",pointerEvents:"none"}}/><svg width={fwd.iconSz} height={fwd.iconSz} viewBox="0 0 24 24" fill="none" style={{filter:`drop-shadow(0 1px 2px rgba(0,0,0,${dk?0.5:0.25}))`,position:"relative",zIndex:1}}><path d="M9 5l7 7-7 7" stroke={fwd.arrowColor} strokeWidth={3.5} strokeLinecap="round" strokeLinejoin="round"/></svg></button>
    </div>
  );
}

// ── FLAG BUTTON — report quiz issues ──

// ── NavArrow — standalone glossy back/forward arrow button (global) ──
const NavArrow=({onClick,isBack=false,size=null,color=null})=>{
  const dk=document.documentElement.classList.contains("dark");
  const s=size||(isBack?48:60);
  const r=isBack?14:16;
  const bg=isBack
    ?(dk?"linear-gradient(180deg, rgba(70,68,100,0.85) 0%, rgba(50,48,78,0.9) 50%, rgba(35,33,60,0.95) 100%)":"linear-gradient(180deg, #FFFFFF 0%, #f0f0f5 50%, #e2e2ea 100%)")
    :(color==="teal"
      ?"linear-gradient(180deg, #5EEAC8 0%, #2ECD9E 35%, #1DB88A 65%, #18A07A 100%)"
      :"linear-gradient(180deg, #C0AEF8 0%, #A488F0 15%, #8B6AE4 35%, #7B5EE8 50%, #6545C8 75%, #5840B8 90%, #4A2BA6 100%)");
  const shadow=isBack
    ?(dk?"0 0 14px rgba(140,130,200,0.25), 0 4px 14px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1), inset 0 -2px 0 rgba(0,0,0,0.2)":"0 4px 12px rgba(0,0,0,0.1), inset 0 2px 0 rgba(255,255,255,0.8), inset 0 -3px 0 rgba(0,0,0,0.06)")
    :"0 5px 16px rgba(85,53,181,0.4), 0 0 12px rgba(123,94,232,0.2), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.15)";
  const hoverShadow=isBack
    ?(dk?"0 0 22px rgba(140,130,200,0.4), 0 0 40px rgba(140,130,200,0.15), 0 4px 14px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.16), inset 0 -2px 0 rgba(0,0,0,0.15)":"0 6px 16px rgba(0,0,0,0.12), 0 0 12px rgba(123,94,232,0.08), inset 0 2px 0 rgba(255,255,255,0.9), inset 0 -3px 0 rgba(0,0,0,0.06)")
    :"0 8px 24px rgba(85,53,181,0.5), 0 0 24px rgba(123,94,232,0.3), inset 0 2px 0 rgba(255,255,255,0.4), inset 0 -3px 0 rgba(0,0,0,0.15)";
  const arrowColor=isBack?(dk?"rgba(220,215,240,0.85)":"#777"):"white";
  const iconSz=isBack?Math.round(s*0.46):Math.round(s*0.5);
  return <button onClick={onClick} style={{display:"flex",alignItems:"center",justifyContent:"center",width:s,height:s,borderRadius:r,border:"none",cursor:"pointer",background:bg,boxShadow:shadow,transition:"all .15s ease",transform:"scale(1)",position:"relative",overflow:"hidden"}}
    onMouseEnter={e=>{e.currentTarget.style.transform="scale(1.08)";e.currentTarget.style.boxShadow=hoverShadow;e.currentTarget.style.filter="brightness(1.1)";}}
    onMouseLeave={e=>{e.currentTarget.style.transform="scale(1)";e.currentTarget.style.boxShadow=shadow;e.currentTarget.style.filter="none";}}
  >
    <div style={{position:"absolute",top:0,left:"6%",right:"6%",height:"44%",borderRadius:"0 0 48% 48%",background:isBack?(dk?"linear-gradient(180deg, rgba(255,255,255,0.15) 0%, transparent 100%)":"linear-gradient(180deg, rgba(255,255,255,0.55) 0%, transparent 100%)"):"linear-gradient(180deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 55%, transparent 100%)",pointerEvents:"none"}}/>
    <svg width={iconSz} height={iconSz} viewBox="0 0 24 24" fill="none" style={{filter:"drop-shadow(0 1px 2px rgba(0,0,0,0.3))",position:"relative",zIndex:1}}>
      <path d={isBack?"M15 19l-7-7 7-7":"M9 5l7 7-7 7"} stroke={arrowColor} strokeWidth={3.5} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </button>;
};

// ── Score Circle — MUST be outside LessonEngine to avoid remount on re-render ──
const ScoreCircle=({percentage,size=80})=>{
  const wrapRef=useRef(null);
  const circRef=useRef(null);
  const glowRef=useRef(null);
  const numRef=useRef(null);
  const radius=size/2-8;
  const circumference=2*Math.PI*radius;
  const color=percentage>=80?"#7B5EE8":percentage>=60?"#F5A623":"#EF4444";
  const glowColor=percentage>=80?"rgba(123,94,232,":"rgba(245,166,35,";
  useEffect(()=>{
    const target=Math.min(percentage,100);
    const duration=700;
    let start=null;let raf=null;
    const animate=(ts)=>{
      if(!start)start=ts;
      const elapsed=ts-start;
      const progress=Math.min(elapsed/duration,1);
      const eased=1-Math.pow(1-progress,3);
      const pct=eased*target;
      const offset=circumference-(pct/100)*circumference;
      if(circRef.current) circRef.current.style.strokeDashoffset=String(offset);
      if(glowRef.current) glowRef.current.style.strokeDashoffset=String(offset);
      if(numRef.current) numRef.current.textContent=Math.round(pct)+"%";
      const sc=progress<0.55?0.6+progress*(1.12-0.6)/0.55:1.12-(progress-0.55)*(0.12/0.45);
      if(wrapRef.current) wrapRef.current.style.transform=`scale(${sc})`;
      if(progress<1) raf=requestAnimationFrame(animate);
      else{
        if(wrapRef.current) wrapRef.current.style.transform="scale(1)";
        if(numRef.current) numRef.current.textContent=target+"%";
        const finalOffset=String(circumference-(target/100)*circumference);
        if(circRef.current) circRef.current.style.strokeDashoffset=finalOffset;
        if(glowRef.current) glowRef.current.style.strokeDashoffset=finalOffset;
      }
    };
    raf=requestAnimationFrame(animate);
    return ()=>{if(raf)cancelAnimationFrame(raf);};
  },[percentage]);
  return <div ref={wrapRef} style={{width:size,height:size,position:"relative",transform:"scale(0.6)"}}>
    <svg width={size} height={size} style={{transform:"rotate(-90deg)"}}>
      {/* Track ring */}
      <circle cx={size/2} cy={size/2} r={radius} fill="none" stroke="var(--gray-200)" strokeWidth={8} opacity={0.2}/>
      {/* Glow ring (wider, blurred) */}
      <circle ref={glowRef} cx={size/2} cy={size/2} r={radius} fill="none" stroke={color} strokeWidth={14} strokeLinecap="round" strokeDasharray={circumference} strokeDashoffset={circumference} opacity={0.25} style={{filter:"blur(4px)"}}/>
      {/* Main ring */}
      <circle ref={circRef} cx={size/2} cy={size/2} r={radius} fill="none" stroke={color} strokeWidth={8} strokeLinecap="round" strokeDasharray={circumference} strokeDashoffset={circumference} style={{filter:`drop-shadow(0 0 8px ${glowColor}0.6))`}}/>
      {/* Highlight ring (inner shine) */}
      <circle cx={size/2} cy={size/2} r={radius-3} fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth={2} strokeLinecap="round" strokeDasharray={circumference*0.95} strokeDashoffset={circumference*0.05}/>
    </svg>
    <div style={{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center"}}>
      <span ref={numRef} style={{fontSize:size*0.28,fontWeight:800,color,lineHeight:1,textShadow:`0 0 12px ${glowColor}0.4)`}}>0%</span>
    </div>
  </div>;
};

class LessonErrorBoundary extends React.Component{
  constructor(props){super(props);this.state={hasError:false,error:null};}
  static getDerivedStateFromError(error){return{hasError:true,error};}
  componentDidCatch(error,info){if(typeof console!=="undefined")console.error("[LessonEngine crash]",error,info);}
  render(){
    if(this.state.hasError){
      return React.createElement("div",{style:{textAlign:"center",padding:40}},
        React.createElement("h2",{style:{fontSize:22,fontWeight:700,marginBottom:12,color:"#7B5EE8"}},"Something went wrong"),
        React.createElement("p",{style:{fontSize:15,color:"#888",marginBottom:20}},"The lesson encountered an error. Your progress is saved."),
        React.createElement("button",{onClick:()=>{this.setState({hasError:false,error:null});if(this.props.onBack)this.props.onBack();},
          style:{fontSize:15,padding:"12px 28px",borderRadius:14,fontWeight:700,cursor:"pointer",color:"white",border:"none",background:"#7B5EE8"}},"Back to lessons")
      );
    }
    return this.props.children;
  }
}

function LessonEngine({lesson,baseLang="en",unit,user,addXp,learnWord,showToast,onBack,onComplete,addFlag,lang="nl",hideQuizRom=false,onContinue=null}){
  const dk=document.documentElement.classList.contains("dark");
  // Glass panel style for dark mode cards
  const glass={background:"var(--card-bg)",backdropFilter:"var(--glass-blur)",WebkitBackdropFilter:"var(--glass-blur)",boxShadow:"var(--card-shadow)",border:"2px solid var(--card-border)"};
  // NavArrow is now a global component (defined before ScoreCircle)
  const steps=lesson.steps||[];
  const [si,setSi]=useState(0);
  const [score,setScore]=useState(0);
  const lessonId=lesson?.id;
  const [answered,setAnswered]=useState(false);
  const [showHint,setShowHint]=useState(false);
  const [showTrans,setShowTrans]=useState(false);
  const [selOpt,setSelOpt]=useState(null);
  const [inputVal,setInputVal]=useState("");
  const [matchSel,setMatchSel]=useState({nl:null,en:null});
  const [matchDone,setMatchDone]=useState([]);
  const [done,setDone]=useState(false);
  const [showDeepDive,setShowDeepDive]=useState(false);
  const [showPhonetic,setShowPhonetic]=useState(false);
  const [showCognate,setShowCognate]=useState(false);
  const [showHanja,setShowHanja]=useState(false);
  const [conjAnswers,setConjAnswers]=useState({});
  const [conjChecked,setConjChecked]=useState(false);
  const [doneFocus,setDoneFocus]=useState(0);
  const [showResume,setShowResume]=useState(false);
  const [wordBubble,setWordBubble]=React.useState(null);

  // ── Lesson Resume — save progress, offer continue on re-enter ──
  const progressKey=`lv_progress_${lessonId}`;
  useEffect(()=>{
    try{
      const saved=_memStore[progressKey];
      if(saved){
        const p=JSON.parse(saved);
        if(p.si>0&&p.si<steps.length){setShowResume(true);}
        else{delete _memStore[progressKey];}
      }
    }catch(e){}
  },[lessonId]);
  // Save progress on step change (skip step 0 to avoid false positives)
  useEffect(()=>{
    if(si>0&&!done){try{_memStore[progressKey]=JSON.stringify({si,score});}catch(e){}}
  },[si,done]);
  // Clear progress on completion
  const doneFiredRef=useRef(false);
  useEffect(()=>{
    if(done&&!doneFiredRef.current){
      doneFiredRef.current=true;
      try{delete _memStore[progressKey];}catch(e){}
      UISounds.celebrate();
      addXp(lesson.xp);
      showToast(`Lesson complete! +${lesson.xp} XP`,"🎉");
      if(onComplete)onComplete();
    }
    if(!done)doneFiredRef.current=false;
  },[done]);

  // ── Full Keyboard Navigation (Decision 7) ──
  // continueRef: fires goNext on spacebar for non-input screens
  // focusIdx: tracks arrow-key focused option in MC/match
  const continueRef=useRef(null);
  const [focusIdx,setFocusIdx]=useState(-1);
  const [dfSlots,setDfSlots]=useState({}); // drag_fill: {slotId: placedWord|null}
  const [dfPoolIdx,setDfPoolIdx]=useState(0); // drag_fill: focused pool tile index
  const [dfFocusSlot,setDfFocusSlot]=useState(null); // drag_fill: which slot is selected for placement
  const [dfDrag,setDfDrag]=useState(null); // drag_fill: {word:string}|null — triggers re-render on start/end
  const dfDragOccurred=useRef(false); // drag_fill: true after pointer moves (distinguishes click from drag)

  // Reset all state when lesson changes (Continue → next lesson)
  useEffect(()=>{
    setSi(0);setScore(0);setDone(false);setAnswered(false);setSelOpt(null);
    setInputVal("");setMatchSel({nl:null,en:null});setMatchDone([]);setLinePositions([]);
    setShowDeepDive(false);setShowPhonetic(false);setShowCognate(false);setShowHanja(false);setFocusIdx(-1);
    setConjAnswers({});setConjChecked(false);setShowHint(false);
    setDfSlots({});setDfPoolIdx(0);setDfFocusSlot(null);setDfDrag(null);
    setDoneFocus(0);continueRef.current=null;
  },[lessonId]);
  // Reset focus when step changes
  useEffect(()=>{setFocusIdx(-1);setLinePositions([]);setMatchPendingLine(null);setDfSlots({});setDfPoolIdx(0);setDfFocusSlot(null);setDfDrag(null);},[si]);
  // Match: keyboard select event → delegate to ref-stored handler
  useEffect(()=>{
    const fn=(e)=>{
      const idx=e.detail?.idx;if(idx==null)return;
      const{nlItems,enItems,nlCount,matchDone:md,handleMatch:hm}=matchSelectRef.current;
      if(!nlItems||!hm)return;
      if(idx<nlCount){const w=nlItems[idx];if(!md.includes(w))hm("nl",w);}
      else{const w=enItems[idx-nlCount];if(!md.includes(w))hm("en",w);}
    };
    window.addEventListener("le-match-select",fn);
    return()=>window.removeEventListener("le-match-select",fn);
  },[]);
  // Match: compute pending "dragging" line from selected item to focused item
  useEffect(()=>{
    const container=matchContainerRef.current;
    if(!container||(!matchSel.nl&&!matchSel.en)){setMatchPendingLine(null);return;}
    const nlItems=matchNlRef.current;
    const enItems=matchEnRef.current;
    const nlCount=nlItems.length;
    const rect=container.getBoundingClientRect();
    let fromEl=null,toEl=null;
    if(matchSel.nl&&!matchSel.en){
      // NL selected — draw line to focused EN item (if focus is on EN side)
      const nlIdx=nlItems.indexOf(matchSel.nl);
      fromEl=container.querySelector(`[data-match-nl="${nlIdx}"]`);
      if(focusIdx>=nlCount){
        const enIdx=focusIdx-nlCount;
        toEl=container.querySelector(`[data-match-en="${enIdx}"]`);
      }
    } else if(matchSel.en&&!matchSel.nl){
      // EN selected — draw line to focused NL item
      const enIdx=enItems.indexOf(matchSel.en);
      toEl=container.querySelector(`[data-match-en="${enIdx}"]`);
      if(focusIdx>=0&&focusIdx<nlCount){
        fromEl=container.querySelector(`[data-match-nl="${focusIdx}"]`);
      }
    }
    if(fromEl&&toEl){
      const fR=fromEl.getBoundingClientRect();
      const tR=toEl.getBoundingClientRect();
      setMatchPendingLine({x1:fR.right-rect.left,y1:fR.top+fR.height/2-rect.top,x2:tR.left-rect.left,y2:tR.top+tR.height/2-rect.top});
    } else if(fromEl||toEl){
      // Only one side — draw line to edge of gap (midpoint hint)
      const el=fromEl||toEl;
      const eR=el.getBoundingClientRect();
      const isLeft=!!fromEl;
      setMatchPendingLine({
        x1:isLeft?eR.right-rect.left:rect.width/2,
        y1:isLeft?eR.top+eR.height/2-rect.top:eR.top+eR.height/2-rect.top,
        x2:isLeft?rect.width/2:eR.left-rect.left,
        y2:eR.top+eR.height/2-rect.top
      });
    } else {
      setMatchPendingLine(null);
    }
  },[matchSel.nl,matchSel.en,focusIdx]);
  useEffect(()=>{
    const handler=(e)=>{
      if(done)return;
      if(showResume)return; // Resume dialog handles its own input
      const st=steps[si];
      if(!st)return;
      const isTextInput=st.type==="tr";

      // ── CTRL+S — Dev skip (auto-answer + show correct) ──
      if((e.ctrlKey||e.metaKey)&&e.code==="KeyS"){
        e.preventDefault();
        if(answered){if(continueRef.current){continueRef.current();continueRef.current=null;}return;}
        if(st.type==="mc"||st.type==="fb"){
          const ans=st.ans||(Array.isArray(st.a)?st.a[0]:st.a);
          setSelOpt(ans);checkAndNext(true);
        } else if(st.type==="match"){
          // Auto-complete all pairs + draw all lines
          const pairs=st.mks?st.mks.map(k=>{const m=MEANINGS[k];if(!m)return{nl:k,en:k};const bl=m[baseLang]||m.en;return{nl:m[lang]?.[0]||k,en:bl?.[0]||k};}):st.pairs;
          const allDone=pairs.flatMap(p=>[p.nl,p.en]);
          setMatchDone(allDone);setAnswered(true);addXp(2);setScore(s=>s+1);
          // Draw lines after DOM settles
          setTimeout(()=>{
            const container=matchContainerRef.current;if(!container)return;
            const rect=container.getBoundingClientRect();
            const nlItems=matchNlRef.current;const enItems=matchEnRef.current;
            const lines=pairs.map(p=>{
              const nlEl=container.querySelector(`[data-match-nl="${nlItems.indexOf(p.nl)}"]`);
              const enEl=container.querySelector(`[data-match-en="${enItems.indexOf(p.en)}"]`);
              if(!nlEl||!enEl)return null;
              const nlR=nlEl.getBoundingClientRect();const enR=enEl.getBoundingClientRect();
              return{x1:nlR.right-rect.left,y1:nlR.top+nlR.height/2-rect.top,x2:enR.left-rect.left,y2:enR.top+enR.height/2-rect.top};
            }).filter(Boolean);
            setLinePositions(lines);
          },80);
        } else if(st.type==="drag_fill"){
          // Auto-fill all slots correctly
          const filled={};Object.entries(st.blanks).forEach(([k,v])=>{filled[k]=v;});
          setDfSlots(filled);setDfDrag(null);setDfFocusSlot(null);setAnswered(true);addXp(2);setScore(s=>s+1);
        } else {
          // teach/intro/tip/verb_table — just advance
          goNext();
        }
        return;
      }

      // ── A/B/C/D KEYS ── direct option selection for MC/FB
      if(["KeyA","KeyB","KeyC","KeyD"].includes(e.code)){
        if((st.type==="mc"||st.type==="fb")&&!answered){
          const optIdx={KeyA:0,KeyB:1,KeyC:2,KeyD:3}[e.code];
          const count=st.opts?.length||0;
          if(optIdx<count){
            e.preventDefault();
            setFocusIdx(optIdx);
            window.dispatchEvent(new CustomEvent("le-select",{detail:{idx:optIdx}}));
          }
          return;
        }
      }

      // ── SPACEBAR / ENTER — continue or select ──
      if(e.code==="Space"||(e.code==="Enter"&&st.type!=="drag_fill"&&!isTextInput)){
        if(isTextInput&&e.code==="Space")return;
        // drag_fill space: place tile
        if(st.type==="drag_fill"&&!answered&&e.code==="Space"){
          e.preventDefault();
          const blankKeys=Object.keys(st.blanks).sort();
          const poolWords=shuffleOpts(st.pool||[],si);
          const availPool=poolWords.filter(w=>!Object.values(dfSlots).includes(w));
          const targetSlot=dfFocusSlot&&!dfSlots[dfFocusSlot]?dfFocusSlot:blankKeys.find(k=>!dfSlots[k]);
          if(availPool.length>0&&targetSlot){
            const word=availPool[dfPoolIdx%Math.max(availPool.length,1)];
            if(word){setDfSlots(prev=>({...prev,[targetSlot]:word}));UISounds.tick();}
          }
          return;
        }
        e.preventDefault();
        // Continue action pending (after answer, on teach/intro/tip)
        if(continueRef.current){
          continueRef.current();
          continueRef.current=null;
          return;
        }
        // MC/FB: select focused option
        if((st.type==="mc"||st.type==="fb")&&focusIdx>=0){
          window.dispatchEvent(new CustomEvent("le-select",{detail:{idx:focusIdx}}));
          return;
        }
        // Match: select focused item
        if(st.type==="match"&&focusIdx>=0){
          window.dispatchEvent(new CustomEvent("le-match-select",{detail:{idx:focusIdx}}));
          return;
        }
      }

      // ── ENTER ── (text-input questions handle Enter via their own onKeyDown)
      // drag_fill: Enter places tile (like Space) or triggers Check if all filled
      if(e.code==="Enter"&&st.type==="drag_fill"&&!answered){
        e.preventDefault();
        const blankKeys=Object.keys(st.blanks).sort();
        const poolWords=shuffleOpts(st.pool||[],si);
        const availPool=poolWords.filter(w=>!Object.values(dfSlots).includes(w));
        const targetSlot=dfFocusSlot&&!dfSlots[dfFocusSlot]?dfFocusSlot:blankKeys.find(k=>!dfSlots[k]);
        if(targetSlot&&availPool.length>0){
          const word=availPool[dfPoolIdx%Math.max(availPool.length,1)];
          if(word){setDfSlots(prev=>({...prev,[targetSlot]:word}));UISounds.tick();}
        } else if(!blankKeys.find(k=>!dfSlots[k])){
          // All filled — check answer directly
          const allCorrect=blankKeys.every(k=>dfSlots[k]?.toLowerCase()===st.blanks[k]?.toLowerCase());
          checkAndNext(allCorrect);
        }
        return;
      }

      // ── ARROW KEYS ── navigate options in grid
      if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(e.code)){
        // drag_fill: Shift+Arrow cycles focused slot, Arrow alone cycles pool
        if(st.type==="drag_fill"&&!answered){
          e.preventDefault();UISounds.tick();
          if(e.shiftKey){
            // Cycle through empty slots
            const blankKeys=Object.keys(st.blanks).sort();
            const emptyKeys=blankKeys.filter(k=>!dfSlots[k]);
            if(emptyKeys.length===0)return;
            const curIdx=emptyKeys.indexOf(dfFocusSlot);
            if(e.code==="ArrowRight"||e.code==="ArrowDown"){
              setDfFocusSlot(emptyKeys[(curIdx+1)%emptyKeys.length]);
            } else {
              setDfFocusSlot(emptyKeys[(curIdx-1+emptyKeys.length)%emptyKeys.length]);
            }
          } else {
            const poolLen=st.pool?.length||0;
            if(poolLen<=0)return;
            if(e.code==="ArrowRight"||e.code==="ArrowDown"){
              setDfPoolIdx(prev=>(prev+1)%poolLen);
            } else {
              setDfPoolIdx(prev=>(prev-1+poolLen)%poolLen);
            }
          }
          return;
        }
        if(["mc","fb","match"].includes(st.type)&&!answered){
          e.preventDefault();UISounds.tick();
          if(st.type==="match"){
            // Match: two columns (NL left, EN right), navigate as flat list
            // Items 0..n-1 = NL column, n..2n-1 = EN column
            const nlCount=matchNlRef.current.length;
            const totalCount=nlCount*2;
            if(totalCount<=0)return;
            setFocusIdx(prev=>{
              const cur=prev<0?0:prev;
              const inRight=cur>=nlCount;
              const rowIdx=inRight?cur-nlCount:cur;
              if(e.code==="ArrowDown")return inRight?nlCount+((rowIdx+1)%nlCount):(rowIdx+1)%nlCount;
              if(e.code==="ArrowUp")return inRight?nlCount+((rowIdx-1+nlCount)%nlCount):(rowIdx-1+nlCount)%nlCount;
              if(e.code==="ArrowRight")return inRight?cur:cur+nlCount; // jump to EN column
              if(e.code==="ArrowLeft")return inRight?cur-nlCount:cur; // jump to NL column
              return cur;
            });
          } else {
            const count=st.opts?.length||0;
            if(count<=0)return;
            const cols=2; // 2x2 grid layout
            setFocusIdx(prev=>{
              const cur=prev<0?0:prev;
              if(e.code==="ArrowDown")return (cur+cols)%count;
              if(e.code==="ArrowUp")return (cur-cols+count)%count;
              if(e.code==="ArrowRight")return (cur+1)%count;
              if(e.code==="ArrowLeft")return (cur-1+count)%count;
              return cur;
            });
          }
          return;
        }
      }

      // ── ARROW DOWN/UP on tip/verb_table ── open/close deep dive
      // First ↓ opens deepDive; subsequent ↓ scrolls normally
      if(e.code==="ArrowDown"&&["tip","verb_table"].includes(st.type)&&!showDeepDive&&st.deepDive){
        e.preventDefault();setShowDeepDive(true);return;
      }
      if(e.code==="ArrowUp"&&["tip","verb_table"].includes(st.type)&&showDeepDive){
        e.preventDefault();setShowDeepDive(false);return;
      }

      // ── ARROW RIGHT/LEFT ── navigate between teach/tip/review steps
      if((e.code==="ArrowRight")&&["teach","review","intro","tip","verb_table","board"].includes(st.type)&&!answered){
        e.preventDefault();UISounds.pageTurn();goNext();return;
      }
      if((e.code==="ArrowLeft")&&["teach","review","intro","tip","verb_table","board"].includes(st.type)&&si>0){
        e.preventDefault();UISounds.tick();goBack();return;
      }

      // ── BACKSPACE ── go to previous step within lesson
      if(e.code==="Backspace"){
        if(document.activeElement?.tagName==="INPUT"||document.activeElement?.tagName==="TEXTAREA")return;
        // drag_fill: backspace removes last placed tile (if any)
        if(st.type==="drag_fill"&&!answered){
          const blankKeys=Object.keys(st.blanks).sort();
          const filledKeys=blankKeys.filter(k=>dfSlots[k]);
          if(filledKeys.length>0){
            e.preventDefault();
            const last=filledKeys[filledKeys.length-1];
            setDfSlots(prev=>{const n={...prev};delete n[last];return n;});
            UISounds.tick();
            return;
          }
        }
        if(si>0){ e.preventDefault(); goBack(); }
        return;
      }

      // ── ESCAPE ── quit lesson
      if(e.code==="Escape"&&onBack){
        e.preventDefault();
        onBack();
      }

    };
    window.addEventListener("keydown",handler);
    return ()=>window.removeEventListener("keydown",handler);
  },[si,focusIdx,done,answered,showDeepDive,showResume,dfSlots,dfPoolIdx,dfFocusSlot]);
  // Pre-shuffle match pairs (refs must be at top level, not inside conditionals)
  const matchNlRef=useRef([]);
  const matchEnRef=useRef([]);
  const matchKeyRef=useRef(null);
  const matchContainerRef=useRef(null);
  const matchSelectRef=useRef({});
  const [linePositions,setLinePositions]=useState([]);
  const [matchPendingLine,setMatchPendingLine]=useState(null);
  const matchDragRef=useRef({active:false,side:null,val:null,startEl:null});
  useEffect(()=>{
    const handleDragEnd=(e)=>{
      if(!matchDragRef.current.active)return;
      const drag=matchDragRef.current;
      matchDragRef.current={active:false,side:null,val:null,startEl:null};
      setMatchPendingLine(null);
      const targetSide=drag.side==="nl"?"en":"nl";
      // Find element under pointer
      const hit=document.elementFromPoint(e.clientX,e.clientY);
      if(!hit)return;
      const matchEl=hit.closest?hit.closest(`[data-match-side="${targetSide}"]`):null;
      if(matchEl){
        const hitVal=matchEl.getAttribute("data-match-val");
        if(hitVal){UISounds.click();matchSelectRef.current.handleMatch(targetSide,hitVal);}
      }
    };
    document.addEventListener("pointerup",handleDragEnd);
    document.addEventListener("touchend",handleDragEnd);
    return ()=>{document.removeEventListener("pointerup",handleDragEnd);document.removeEventListener("touchend",handleDragEnd);};
  },[]);
  const total=steps.length;
  let st=steps[si]||null;
  // Auto-convert multi-blank fb to drag_fill (P48: fb only supports single blank {1})
  if(st&&st.type==="fb"&&/\{2\}/.test(st.s)){
    const fbA=Array.isArray(st.a)?st.a:[st.a];
    const autoBlanks={};
    fbA.forEach((ans,i)=>{autoBlanks[String(i+1)]=ans;});
    st={...st,type:"drag_fill",blanks:autoBlanks,pool:st.opts||fbA};
  }
  const pct=((si)/total)*100;
  const totalEx=steps.filter(s=>["mc","tr","fb","match","conj","drag_fill"].includes(s.type)).length;

  // ── Content Integrity Validator wiring (Manifesto P8+P11) ──
  // Runs once on lesson mount. Dedupes by lessonId+stepIndex+shortTitle.
  const validatorRanRef=useRef(null);
  useEffect(()=>{
    if(!addFlag||!lesson||!lesson.steps)return;
    const lid=lesson.id||"unknown";
    if(validatorRanRef.current===lid)return; // Already validated this lesson
    validatorRanRef.current=lid;
    try{
      const findings=validateLessonForLeaks(lesson,{mode:hideQuizRom?"foundations":"units",lang,lessonId:lid});
      if(findings.length>0){
        findings.forEach(f=>{
          addFlag(
            f.lessonId,
            f.stepIndex,
            {type:"auto_validator",severity:f.severity,shortTitle:f.shortTitle,stepId:f.stepId},
            "auto_leak_"+f.shortTitle.replace(/\s+/g,"_").toLowerCase(),
            `[${f.severity.toUpperCase()}] ${f.explanation} — Fix: ${f.suggestedFix}`
          );
        });
        if(typeof console!=="undefined")console.warn(`[ContentValidator] ${lid}: ${findings.length} finding(s) auto-flagged`);
      }
    }catch(e){if(typeof console!=="undefined")console.error("[ContentValidator] Error:",e);}
  },[lesson?.id]);

  const goNext=()=>{
    continueRef.current=null; // Clear spacebar binding on advance
    if(si+1>=total){setDone(true);setAnswered(false);setSelOpt(null);setWordBubble(null);setShowDeepDive(false);setShowHint(false);setShowTrans(false);}
    else{setSi(i=>i+1);setAnswered(false);setSelOpt(null);setInputVal("");setMatchSel({nl:null,en:null});setMatchDone([]);setLinePositions([]);setShowDeepDive(false);setShowPhonetic(false);setShowCognate(false);setShowHanja(false);setConjAnswers({});setConjChecked(false);setShowHint(false);setShowTrans(false);setWordBubble(null);UISounds.pageTurn();}
  };
  const goBack=()=>{
    if(si<=0)return;
    continueRef.current=null;
    setSi(i=>i-1);setAnswered(false);setSelOpt(null);setInputVal("");
    setMatchSel({nl:null,en:null});setMatchDone([]);setLinePositions([]);setMatchPendingLine(null);
    setShowDeepDive(false);setShowPhonetic(false);setShowCognate(false);setShowHanja(false);setConjAnswers({});setConjChecked(false);
    setShowHint(false);setFocusIdx(-1);setDfSlots({});setDfPoolIdx(0);setDfFocusSlot(null);setDfDrag(null);UISounds.pageTurn();
  };
  // Register spacebar for non-quiz steps (teach, intro, tip, gramref, verb_table)
  const st_type=steps[si]?.type;
  const curSt=steps[si];
  // Spacebar action should match button onClick exactly:
  // teach: learnWord + goNext, others: just goNext
  const spaceAction=st_type==="teach"?()=>{if(curSt?.nl&&learnWord)learnWord(curSt.nl);setShowPhonetic(false);setShowCognate(false);setShowHanja(false);goNext();}:goNext;
  // Set immediately for first render (fixes spacebar not working on first slide)
  if(["teach","intro","tip","gramref","vocab_ref","verb_table"].includes(st_type)&&!continueRef.current){
    continueRef.current=spaceAction;
  }
  useEffect(()=>{
    if(["teach","intro","tip","gramref","vocab_ref","verb_table"].includes(st_type)){
      continueRef.current=spaceAction;
    } else {
      // For quiz steps, ContinueButton handles registration when answered
      if(!answered) continueRef.current=null;
    }
  },[si,st_type,answered]);
  const checkAndNext=(correct)=>{
    setAnswered(true);
    setTimeout(()=>{if(correct){setScore(s=>s+1);addXp(2);UISounds.correct();}else{UISounds.wrong();}},150);
  };

  // ── Unified keyboard selection handler for MC/FB (Decision 7) ──
  // Must be here (before any conditional returns) to satisfy Rules of Hooks
  useEffect(()=>{
    const handler=(e)=>{
      if(answered)return;
      const curSt=steps[si];
      if(!curSt)return;
      const idx=e.detail?.idx;
      if(idx<0)return;
      if(curSt.type==="mc"&&idx<(curSt.opts?.length||0)){
        const o=curSt.opts[idx];
        setSelOpt(o);
        checkAndNext(o===curSt.ans);
      }
      if(curSt.type==="fb"&&idx<(curSt.opts?.length||0)){
        const o=curSt.opts[idx];
        const fbAns=Array.isArray(curSt.a)?curSt.a:[curSt.a];
        const ok=fbAns.some(a=>a.toLowerCase()===o.toLowerCase());
        setSelOpt(o);
        checkAndNext(ok);
      }
    };
    window.addEventListener("le-select",handler);
    return ()=>window.removeEventListener("le-select",handler);
  },[si,answered]);

  // Done-screen focus: 0 = Continue (default), 1 = Overview, 2 = Try Again
  // -1 = no selection (mouse cleared it)
  const doneKb=useRef(false); // true when arrows are driving selection
  const doneFocusRef=useRef(0);
  // Keep ref in sync
  useEffect(()=>{doneFocusRef.current=doneFocus;},[doneFocus]);
  // Reset done focus when done changes
  useEffect(()=>{if(done){const v=onContinue?0:-1;setDoneFocus(v);doneFocusRef.current=v;doneKb.current=true;}},[done]);

  // Keyboard handler for done screen — capture phase to intercept before anything else
  useEffect(()=>{
    if(!done)return;
    const handler=(e)=>{
      const df=doneFocusRef.current;
      if(e.code==="Space"||e.code==="Enter"){
        if(df<0)return; // nothing selected
        e.preventDefault();e.stopPropagation();UISounds.click();
        if(df===0&&onContinue){onContinue();}
        else if(df===1){onBack();}
        else if(df===2){retryLesson();}
        return;
      }
      if(e.code==="Backspace"||e.code==="Escape"){e.preventDefault();e.stopPropagation();UISounds.click();onBack();return;}
      if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(e.code)){
        e.preventDefault();e.stopPropagation();UISounds.tick();
        doneKb.current=true;
        // Visual order: Overview(1), Try Again(2), Continue(0)
        const validIdxs=onContinue?[1,2,0]:[1,2];
        setDoneFocus(f=>{
          if(f<0) return validIdxs[e.code==="ArrowRight"||e.code==="ArrowDown"?0:validIdxs.length-1];
          const ci=validIdxs.indexOf(f);
          const cur=ci>=0?ci:0;
          const dir=e.code==="ArrowRight"||e.code==="ArrowDown"?1:-1;
          return validIdxs[(cur+dir+validIdxs.length)%validIdxs.length];
        });
      }
    };
    // Mouse move → clear arrow selection
    const mouseHandler=()=>{
      if(doneKb.current){
        doneKb.current=false;
        setDoneFocus(-1);
      }
    };
    window.addEventListener("keydown",handler,true);
    window.addEventListener("mousemove",mouseHandler,{passive:true});
    return ()=>{window.removeEventListener("keydown",handler,true);window.removeEventListener("mousemove",mouseHandler);};
  },[done,doneFocus,onContinue,onBack]);

  const retryLesson=()=>{setSi(0);setScore(0);setDone(false);setAnswered(false);setSelOpt(null);setInputVal("");setMatchSel({nl:null,en:null});setMatchDone([]);setLinePositions([]);setShowDeepDive(false);setShowPhonetic(false);setShowCognate(false);setShowHanja(false);setConjAnswers({});setConjChecked(false);setShowHint(false);setShowTrans(false);};

  if(done){
    const cappedScore=Math.min(score,totalEx);
    const p=totalEx>0?Math.round((cappedScore/totalEx)*100):100;
    // Glossy candy button with focus glow
    const candyBtn=(label,onClick,idx,{grad,shadow}={})=>{
      const g=grad||"linear-gradient(180deg, #606078 0%, #4A4A60 30%, #38384E 60%, #2C2C40 100%)";
      const sh=shadow||"rgba(60,60,80,0.4)";
      const focused=doneFocus===idx;
      const glowShadow=`0 0 28px ${sh}, 0 0 48px ${sh.replace(/[\d.]+\)$/,'0.15)')}, 0 8px 24px ${sh}, inset 0 2px 0 rgba(255,255,255,0.4), inset 0 -3px 0 rgba(0,0,0,0.15)`;
      const restShadow=`0 6px 20px ${sh}, inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.15)`;
      return <button onClick={onClick} style={{fontSize:15,padding:"14px 28px",borderRadius:18,fontWeight:800,cursor:"pointer",fontFamily:"inherit",color:"white",border:"none",background:g,boxShadow:focused?glowShadow:restShadow,transition:"all .2s",position:"relative",overflow:"hidden",letterSpacing:0.3,transform:focused?"scale(1.08) translateY(-2px)":"scale(1)",filter:focused?"brightness(1.15)":"none",outline:focused?"3px solid rgba(200,180,255,0.5)":"none",outlineOffset:3}}
        onMouseEnter={e=>{e.currentTarget.style.transform="scale(1.08) translateY(-2px)";e.currentTarget.style.filter="brightness(1.15)";e.currentTarget.style.boxShadow=glowShadow;e.currentTarget.style.outline="3px solid rgba(200,180,255,0.5)";e.currentTarget.style.outlineOffset="3px";}}
        onMouseLeave={e=>{if(!focused){e.currentTarget.style.transform="scale(1)";e.currentTarget.style.filter="none";e.currentTarget.style.boxShadow=restShadow;e.currentTarget.style.outline="none";}else{e.currentTarget.style.transform="scale(1.08) translateY(-2px)";e.currentTarget.style.filter="brightness(1.15)";e.currentTarget.style.boxShadow=glowShadow;e.currentTarget.style.outline="3px solid rgba(200,180,255,0.5)";}}}>
        <span style={{position:"absolute",top:0,left:"8%",right:"8%",height:"38%",borderRadius:"0 0 50% 50%",background:"linear-gradient(180deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.06) 100%)",pointerEvents:"none"}}/>
        <span style={{position:"relative",zIndex:1}}>{label}</span>
      </button>;
    };
    return(
      <div className="anim" data-kb-owner="lesson-done" style={{textAlign:"center",paddingTop:40}}>
        <Confetti active={true}/>
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:16,marginBottom:16}}>
          <div style={{fontSize:56,lineHeight:1}}>{p>=80?<AppIcon name="trophy" size={72}/>:p>=60?<AppIcon name="star" size={72}/>:<AppIcon name="hand_wave" size={72}/>}</div>
          {totalEx>0&&<ScoreCircle percentage={p} size={84}/>}
        </div>
        <h2 className="hd" style={{fontSize:28,fontWeight:800,marginBottom:6}}>{t("le_lesson_complete",baseLang)}</h2>
        <p style={{fontSize:18,color:"var(--gray-500)",marginBottom:4}}>{renderNavTitle(lesson.icon,lesson.title,18)}</p>
        {totalEx>0&&<p style={{fontSize:16,marginBottom:6,color:"var(--gray-400)"}}>Quiz score: <span style={{color:p>=70?"var(--teal)":"var(--gold)",fontWeight:800}}>{cappedScore}/{totalEx}</span></p>}
        <p style={{color:"var(--purple-accent)",fontWeight:700,marginBottom:28}}>+{lesson.xp} XP earned!</p>
        <div style={{display:"flex",gap:12,justifyContent:"center",flexWrap:"wrap"}}>
          {candyBtn("Overview",()=>{UISounds.click();onBack();},1,{
            grad:"linear-gradient(180deg, #606078 0%, #4A4A60 30%, #38384E 60%, #2C2C40 100%)",
            shadow:"rgba(40,40,60,0.4)"
          })}
          {candyBtn("Try Again",()=>{UISounds.click();retryLesson();},2,{
            grad:"linear-gradient(180deg, #F7D06B 0%, #F5A623 25%, #E8960A 55%, #D08E10 85%, #B87A08 100%)",
            shadow:"rgba(245,166,35,0.45)"
          })}
          {onContinue&&candyBtn("Continue",()=>{UISounds.click();onContinue();},0,{
            grad:"linear-gradient(180deg, #B8A8FA 0%, #9B7AE8 20%, #7B5EE8 55%, #6545C8 85%, #5840B8 100%)",
            shadow:"rgba(123,94,232,0.5)"
          })}</div>
        <div style={{marginTop:14,fontSize:11,color:"var(--gray-300)"}}>Arrow keys navigate · Space select · Esc quit</div>
      </div>
    );
  }
  if(!st) return null;

  const ProgressBar=()=>(
    <div data-kb-owner="lesson" style={{marginBottom:20}}>
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:10}}>
        <button onClick={onBack} style={{display:"flex",alignItems:"center",justifyContent:"center",width:40,height:40,borderRadius:12,border:dk?"1px solid rgba(255,255,255,0.12)":"none",cursor:"pointer",background:dk?"linear-gradient(180deg, rgba(70,68,100,0.85) 0%, rgba(50,48,78,0.9) 50%, rgba(35,33,60,0.95) 100%)":"linear-gradient(180deg, #FFFFFF 0%, #f0f0f5 50%, #e2e2ea 100%)",boxShadow:dk?"0 0 14px rgba(140,130,200,0.25), 0 4px 14px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1), inset 0 -2px 0 rgba(0,0,0,0.2)":"0 4px 12px rgba(0,0,0,0.1), inset 0 2px 0 rgba(255,255,255,0.8), inset 0 -3px 0 rgba(0,0,0,0.06)",transition:"all .15s",position:"relative",overflow:"hidden"}} onMouseEnter={e=>{e.currentTarget.style.transform="scale(1.08)";}} onMouseLeave={e=>{e.currentTarget.style.transform="scale(1)";}}>
          <div style={{position:"absolute",top:0,left:"8%",right:"8%",height:dk?"35%":"42%",borderRadius:"0 0 50% 50%",background:dk?"linear-gradient(180deg, rgba(255,255,255,0.15) 0%, transparent 100%)":"linear-gradient(180deg, rgba(255,255,255,0.55) 0%, transparent 100%)",pointerEvents:"none"}}/>
          <svg width={18} height={18} viewBox="0 0 24 24" fill="none" style={{position:"relative",zIndex:1}}><path d="M18 6L6 18M6 6l12 12" stroke={dk?"rgba(220,215,240,0.85)":"#777"} strokeWidth={3} strokeLinecap="round"/></svg>
        </button>
        <span className="hd" style={{fontSize:13,fontWeight:700,color:"var(--gray-400)"}}>{renderNavTitle(lesson.icon,lesson.title,13)}</span>
        <span style={{fontSize:12,color:"var(--gray-400)",fontWeight:600}}>{si+1}/{total}</span>
      </div>
      <div className="xpbar" style={{height:22,borderRadius:12,position:"relative",boxShadow:"inset 0 3px 6px rgba(0,0,0,0.12), 0 1px 0 rgba(255,255,255,0.7)"}}><div className="xpbar-fill" style={{width:`${clamp(pct,3,100)}%`,borderRadius:12,boxShadow:`0 0 14px rgba(123,94,232,0.5), inset 0 2px 0 rgba(255,255,255,0.45), inset 0 -2px 0 rgba(0,0,0,0.12)`}}/><div style={{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,fontWeight:800,color:pct>50?"white":"var(--purple-accent-text)",textShadow:pct>50?"0 1px 3px rgba(0,0,0,0.4)":"none",letterSpacing:0.5}}>{clamp(Math.round(pct),0,100)}%</div></div>
    
      {addFlag&&<div style={{textAlign:"center",marginTop:6,marginBottom:-8}}><FlagButton lessonId={lesson.id} stepIndex={si} stepData={steps[si]} addFlag={addFlag}/></div>}
    </div>
  );

  // ═══ INTRO ═══
  // ═══ RESUME DIALOG — shown when re-entering a lesson with saved progress ═══
  if(showResume){
    let savedSi=0;let savedScore=0;
    try{const p=JSON.parse(_memStore[progressKey]);savedSi=p?.si||0;savedScore=p?.score||0;}catch(e){}
    const pct=Math.round((savedSi/steps.length)*100);
    const doResume=()=>{setSi(savedSi);setScore(savedScore);setShowResume(false);};
    const doRestart=()=>{delete _memStore[progressKey];setShowResume(false);};
    return(
      <div className="anim" data-kb-owner="lesson" tabIndex={0} ref={el=>{if(el)el.focus();}} onKeyDown={e=>{
        if(e.code==="Space"||e.code==="Enter"){e.preventDefault();UISounds.click();doResume();}
        if(e.code==="Backspace"){e.preventDefault();UISounds.click();doRestart();}
        if(e.code==="Escape"&&onBack){e.preventDefault();onBack();}
      }} style={{outline:"none",maxWidth:440,margin:"40px auto",textAlign:"center"}}>
        <div style={{background:"var(--card-bg)",borderRadius:22,border:"2px solid rgba(255,255,255,0.45)",borderLeft:"4px solid var(--purple-accent)",overflow:"hidden",padding:"32px 28px",...glass}}>
          <div style={{fontSize:36,marginBottom:12}}><BrandIcon name={lesson.icon} size={36}/></div>
          <h3 style={{fontSize:20,fontWeight:800,color:"var(--gray-800)",fontFamily:"'Quicksand','system-ui',sans-serif",margin:"0 0 8px"}}>{lesson.title||steps[0]?.title||"Lesson"}</h3>
          <div style={{fontSize:14,color:"var(--teal-text)",fontWeight:600,marginBottom:20}}>You were {pct}% through this lesson</div>
          <div style={{display:"flex",gap:12,justifyContent:"center"}}>
            <button onClick={doRestart} style={{padding:"12px 24px",borderRadius:14,border:"2px solid rgba(255,255,255,0.45)",background:"var(--card-bg)",color:"var(--gray-600)",fontWeight:700,fontSize:14,cursor:"pointer",fontFamily:"inherit",transition:"all .2s",...(dk?{backdropFilter:"blur(12px)",boxShadow:"0 4px 14px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.12), inset 0 -2px 0 rgba(0,0,0,0.12)"}:{})}}>Start over</button>
            <button onClick={doResume} style={{padding:"12px 24px",borderRadius:14,border:"1.5px solid rgba(255,255,255,0.25)",background:"linear-gradient(180deg, #B8A8FA 0%, #9B7AE8 20%, #7B5EE8 55%, #6545C8 85%, #5840B8 100%)",color:"white",fontWeight:700,fontSize:14,cursor:"pointer",fontFamily:"inherit",boxShadow:dk?"0 0 20px rgba(150,120,255,0.45), 0 0 44px rgba(123,94,232,0.2), 0 4px 16px rgba(123,94,232,0.4), inset 0 1px 0 rgba(255,255,255,0.15), inset 0 -2px 0 rgba(0,0,0,0.2)":"0 6px 20px rgba(123,94,232,0.45), inset 0 2px 0 rgba(255,255,255,0.45), inset 0 -3px 0 rgba(0,0,0,0.12)",transition:"all .2s",...(dk?{textShadow:"0 1px 3px rgba(0,0,0,0.3)"}:{})}}>Continue</button>
          </div>
          <div style={{marginTop:12,fontSize:11,color:"var(--gray-300)"}}> Space continue · ⌫ start over · Esc quit</div>
        </div>
      </div>
    );
  }

  // ── Shared note/text highlighter for board-style cards ──
  // ── Deterministic shuffle for MC/FB options (D24: P8 engine-level fix) ──
  // Seeded by step index so order is stable within a session but varies per step.
  // Prevents answer from always appearing at position A regardless of content order.
  const shuffleOpts=(opts,seed)=>{
    if(!opts||opts.length<=1) return opts||[];
    const a=[...opts];
    let s=((seed+1)*2654435761)>>>0;
    for(let i=a.length-1;i>0;i--){
      s=((s*1664525+1013904223)>>>0);
      const j=s%(i+1);
      [a[i],a[j]]=[a[j],a[i]];
    }
    return a;
  };

  // Non-ASCII → purple | ALL-CAPS keywords → teal | 'quoted sounds' → teal | phonetic values → teal
  const TEAL_WORDS=/\b(RIGHT|LEFT|TOP|BOTTOM|BELOW|ABOVE|UP|DOWN|HORIZONTAL|VERTICAL|ONLY|NEVER|ALWAYS|NOT|SILENT|INITIAL|INSIDE|ZERO|MUST)\b/;
  const SOUND_VALS=/\b(ah|oh|oo|uh|ee|ng)\b/gi;
  // ════════════════════════════════════════════════════════════
  // KOREAN WORD DICTIONARY — clickable bubble system
  // Every core word from U1–U6. Schema:
  //   base: primary English meaning
  //   morph: morpheme breakdown (Sino-Korean or compound)
  //   particle: particles this word commonly takes
  //   uses: [{k, e}] — 3 real example uses
  //   note: optional extra pedagogical note
  //   level: A1 / A2 / B1
  // ════════════════════════════════════════════════════════════
  const KOREAN_DICT = {
    // ── PRONOUNS & BASIC WORDS ──
    "저": {base:"I / me (polite)",morph:"Native Korean",particle:"는 (topic) / 가 (subject) / 를 (object)",uses:[{k:"저는 학생이에요.",e:"I am a student."},{k:"저를 도와주세요.",e:"Please help me."},{k:"저도 몰라요.",e:"I don't know either."}],note:"Formal/polite 'I'. Use with elders and strangers. Casual form: 나 .",level:"A1"},
    "나": {base:"I / me (casual)",morph:"Native Korean",particle:"는 / 가 / 를",uses:[{k:"나는 학생이야.",e:"I'm a student. (casual)"},{k:"나도 갈게.",e:"I'll go too. (casual)"},{k:"나한테 줘.",e:"Give it to me. (casual)"}],note:"Casual 'I'. Only use with close friends, younger people, or kids. Never with elders.",level:"A1"},
    "우리": {base:"our / my (collective)",morph:"Native Korean  -  collectivist pronoun",particle:"의 (possessive, often dropped)",uses:[{k:"우리 엄마가 요리해요.",e:"My mom cooks."},{k:"우리 학교는 커요.",e:"My/our school is big."},{k:"우리 나라가 좋아요.",e:"I love my country."}],note:"Koreans say 우리 엄마 (our mom) where English says 'my mom'. Reflects group-first culture.",level:"A1"},
    "제": {base:"my (polite)",morph:"저 + 의 contracted",particle:" -  (possessive prefix)",uses:[{k:"제 이름은 사라예요.",e:"My name is Sara."},{k:"제 가방이 없어요.",e:"My bag is gone."},{k:"제 생각에는요...",e:"In my opinion..."}],note:"Polite possessive. 제 = 저의 contracted. Use with elders and strangers.",level:"A1"},
    "이것": {base:"this (thing)",morph:"이 (this/near speaker) + 것 (thing)",particle:"은/는 이 / 이/가 / 을/를",uses:[{k:"이것은 뭐예요?",e:"What is this?"},{k:"이것을 주세요.",e:"Please give me this."},{k:"이것이 제 책이에요.",e:"This is my book."}],note:"것 is one of the most frequent Korean words. 이것/그것/저것 = 3-level distance system.",level:"A1"},
    "그것": {base:"that (thing near you)",morph:"그 (that/near listener) + 것 (thing)",particle:"은/는 / 이/가 / 을/를",uses:[{k:"그것이 뭐예요?",e:"What is that (near you)?"},{k:"그것 주세요.",e:"Please give me that."},{k:"그것도 있어요.",e:"That is also available."}],note:"그 = near the listener (2nd person). English collapses 이/그/저 into just 'this/that'.",level:"A1"},
    "저것": {base:"that (thing over there)",morph:"저 (that/far) + 것 (thing)",particle:"은/는 / 이/가 / 을/를",uses:[{k:"저것은 뭐예요?",e:"What is that over there?"},{k:"저것이 더 싸요.",e:"That over there is cheaper."},{k:"저것 좀 보여주세요.",e:"Please show me that."}],note:"저 = far from both speaker and listener. The 3rd level English lacks.",level:"A1"},
    // ── EXISTENCE / POSSESSION ──
    "있어요": {base:"there is / I have / is (at location)",morph:"있다 (to exist) + 어요 (polite ending)",particle:"이/가 있어요 (subject), 에 있어요 (location)",uses:[{k:"커피가 있어요.",e:"There is coffee."},{k:"저는 차가 있어요.",e:"I have a car."},{k:"선생님이 교실에 있어요.",e:"The teacher is in the classroom."}],note:"있다 does the job of 3 English verbs: 'there is', 'I have', 'someone is somewhere'.",level:"A1"},
    "없어요": {base:"there is not / I don't have / is not (at location)",morph:"없다 (to not exist) + 어요 (polite ending)",particle:"이/가 없어요 / 에 없어요",uses:[{k:"시간이 없어요.",e:"There is no time."},{k:"차가 없어요.",e:"I don't have a car."},{k:"화장실이 없어요?",e:"There's no bathroom?"}],note:"Exact inverse of 있어요. Pair them in memory: 있다 ↔ 없다.",level:"A1"},
    "있다": {base:"to exist / to have",morph:"있 (stem) + 다 (dictionary suffix)",particle:"이/가 있다 / 에 있다",uses:[{k:"돈이 있다.",e:"There is money."},{k:"집에 있다.",e:"(I'm) at home."},{k:"시간이 있어요?",e:"Do you have time?"}],note:"Dictionary form. Drop -다, add -어요 for polite speech → 있어요.",level:"A1"},
    "없다": {base:"to not exist / to not have",morph:"없 (stem) + 다 (dictionary suffix)",particle:"이/가 없다",uses:[{k:"돈이 없다.",e:"There is no money."},{k:"이유가 없다.",e:"There is no reason."},{k:"시간이 없어요.",e:"I don't have time."}],note:"Irregular  -  the stem 없 is indivisible. Used to build: 재미없다, 맛없다, 멋없다.",level:"A1"},
    // ── VERBS — CORE ──
    "이에요": {base:"am / is / are (after consonant)",morph:"이 (copula) + 에요 (polite suffix)",particle:"[noun]이에요",uses:[{k:"학생이에요.",e:"I'm a student."},{k:"책이에요.",e:"It's a book."},{k:"서울이에요.",e:"It's Seoul."}],note:"Use after a noun ending in a CONSONANT. 'Copula' = the verb to-be. The verb ALWAYS goes last.",level:"A1"},
    "예요": {base:"am / is / are (after vowel)",morph:"이에요 contracted when stem ends in vowel",particle:"[noun]예요",uses:[{k:"엠마예요.",e:"I'm Emma."},{k:"커피예요.",e:"It's coffee."},{k:"카페예요.",e:"It's a café."}],note:"Same meaning as 이에요  -  use after nouns ending in a VOWEL. The -요 is always the polite marker.",level:"A1"},
    "아니에요": {base:"am not / is not",morph:"아니다 (to not be) + 에요 (polite)",particle:"[noun]이/가 아니에요",uses:[{k:"학생이 아니에요.",e:"I'm not a student."},{k:"이게 아니에요.",e:"It's not this."},{k:"거짓말이 아니에요.",e:"It's not a lie."}],note:"The subject before 아니에요 takes 이/가 (not 은/는). 아니요 (standalone 'no') is different.",level:"A1"},
    "해요": {base:"do / does",morph:"하다 (to do) + 아요 → 해요 (contraction)",particle:"[noun]을/를 해요",uses:[{k:"공부해요.",e:"I study."},{k:"뭐 해요?",e:"What are you doing?"},{k:"운동해요.",e:"I exercise."}],note:"하다 + 어요 contracts to 해요. Most -하다 verbs conjugate this way.",level:"A1"},
    "가요": {base:"go / goes",morph:"가다 (to go) + 아요 → 가요",particle:"에 가요 (destination)",uses:[{k:"학교에 가요.",e:"I go to school."},{k:"어디 가요?",e:"Where are you going?"},{k:"같이 가요.",e:"Let's go together."}],note:"가다 stem is 가 (pure vowel). Add 요 directly → 가요. One of the most used Korean verbs.",level:"A1"},
    "와요": {base:"come / comes",morph:"오다 (to come) + 아요 → 와요 (contraction)",particle:"에 와요 / 에서 와요",uses:[{k:"학교에 와요.",e:"(I/you) come to school."},{k:"어디서 와요?",e:"Where do you come from?"},{k:"빨리 와요!",e:"Come quickly!"}],note:"오 + 아요 contracts to 와요. Irregular-looking but follows the vowel harmony rule.",level:"A1"},
    "먹어요": {base:"eat / eats",morph:"먹다 (to eat) + 어요",particle:"을/를 먹어요",uses:[{k:"밥을 먹어요.",e:"I eat rice/a meal."},{k:"뭐 먹어요?",e:"What are you eating?"},{k:"잘 먹겠습니다.",e:"I will eat well. (before meal)"}],note:"먹 stem ends in dark vowel ㅓ → takes -어요. One of the highest-frequency Korean verbs.",level:"A1"},
    "마셔요": {base:"drink / drinks",morph:"마시다 (to drink) + 어요 → 마셔요",particle:"을/를 마셔요",uses:[{k:"커피를 마셔요.",e:"I drink coffee."},{k:"물을 마셔요.",e:"I drink water."},{k:"뭐 마셔요?",e:"What are you drinking?"}],note:"마시 + 어 contracts to 마셔. 이+어 → 여 is a standard Korean contraction.",level:"A1"},
    "알아요": {base:"know",morph:"알다 (to know) + 아요 → 알아요",particle:"을/를 알아요 / [clause] 알아요",uses:[{k:"알아요.",e:"I know. / I understand."},{k:"그 사람 알아요?",e:"Do you know that person?"},{k:"뭐 알아요?",e:"What do you know?"}],note:"알다 is ㄹ-irregular in some forms but 알아요 is regular. Pair with 몰라요 (don't know).",level:"A1"},
    "몰라요": {base:"don't know",morph:"모르다 (to not know) → 몰라요 (ㄹ contraction)",particle:"을/를 몰라요 / [clause] 몰라요",uses:[{k:"몰라요.",e:"I don't know."},{k:"그 사람을 몰라요.",e:"I don't know that person."},{k:"진짜 몰라요.",e:"I really don't know."}],note:"⚡ Preview: 모르다 → 몰라요, NOT 모르어요. The stem transforms. Full pattern in a later lesson.",level:"A1"},
    "주세요": {base:"please give (me)",morph:"주다 (give) + 세요 (polite request suffix)",particle:"[thing]을/를 주세요",uses:[{k:"물 주세요.",e:"Water, please."},{k:"메뉴 주세요.",e:"Menu, please."},{k:"영수증 주세요.",e:"Receipt, please."}],note:"주다 → 주세요 = 'please give'. The most useful single request phrase in Korean.",level:"A1"},
    "좋아요": {base:"good / I like",morph:"좋다 (to be good) + 아요",particle:"이/가 좋아요",uses:[{k:"이게 좋아요.",e:"This is good. / I like this."},{k:"뭐가 좋아요?",e:"What do you like?"},{k:"날씨가 좋아요.",e:"The weather is good."}],note:"좋다 means BOTH 'to be good' and 'to like'. 좋아요 = 'is good' and '(I) like (it)'.",level:"A1"},
    "싫어요": {base:"dislike / don't want",morph:"싫다 (to dislike) + 어요",particle:"이/가 싫어요",uses:[{k:"이거 싫어요.",e:"I don't like this."},{k:"밥 싫어요.",e:"I don't want rice."},{k:"공부가 싫어요.",e:"I dislike studying."}],note:"Stronger than 안 좋아요 (not good). More emotional/direct expression of dislike.",level:"A1"},
    "해요체": {base:"polite speech level",morph:"해요 (do-politely) + 체 (style/body)",particle:" - ",uses:[{k:"해요체를 써요.",e:"I use polite speech."},{k:"해요체가 제일 안전해요.",e:"Polite speech is the safest."},{k:"해요체로 말하세요.",e:"Please speak in the polite style."}],note:"The 7 Korean speech levels. 해요체 is the safe default for ALL adult interactions.",level:"A1"},
    // ── NEGATION ──
    "안": {base:"not (pre-verbal negation  -  choice/preference)",morph:"Native Korean  -  adverb",particle:"안 + [verb]",uses:[{k:"안 가요.",e:"I'm not going. (choice)"},{k:"안 먹어요.",e:"I don't eat it. (preference)"},{k:"안 해요.",e:"I'm not doing it."}],note:"안 goes BEFORE the verb. Expresses choice or preference. Use 못 for inability.",level:"A1"},
    "못": {base:"cannot (inability)",morph:"Native Korean  -  adverb",particle:"못 + [verb]",uses:[{k:"못 가요.",e:"I can't go. (unable)"},{k:"못 먹어요.",e:"I can't eat it. (allergy/physical)"},{k:"못 해요.",e:"I can't do it."}],note:"못 = physical/circumstantial inability. 안 = won't. The distinction matters in Korean.",level:"A1"},
    "지않아요": {base:"do not (formal negation)",morph:"지 않다 (verb suffix + not-do) + 아요",particle:"[verb stem] + 지 않아요",uses:[{k:"가지 않아요.",e:"I do not go. (formal)"},{k:"먹지 않아요.",e:"I do not eat."},{k:"이해하지 않아요.",e:"I do not understand."}],note:"More formal/emphatic than 안. Used in writing, formal speech. Same meaning as 안 + verb.",level:"A1"},
    "지못해요": {base:"cannot (formal inability)",morph:"지 못하다 (verb suffix + unable-to-do) + 아요",particle:"[verb stem] + 지 못해요",uses:[{k:"가지 못해요.",e:"I cannot go."},{k:"먹지 못해요.",e:"I cannot eat."},{k:"이해하지 못해요.",e:"I cannot understand."}],note:"Formal version of 못 + verb. 수영을 못해요 = 수영하지 못해요. Same meaning, different register.",level:"A1"},
    // ── PARTICLES ──
    "은": {base:"topic marker (after consonant)",morph:"은  -  topic particle",particle:"[consonant-ending noun] + 은",uses:[{k:"밥은 맛있어요.",e:"As for rice, it's delicious."},{k:"저는 학생이에요.",e:"As for me, I'm a student."},{k:"오늘은 바빠요.",e:"As for today, I'm busy."}],note:"Sets the topic. Implies contrast: '저는 (not you)'. After vowels → 는.",level:"A1"},
    "는": {base:"topic marker (after vowel)",morph:"는  -  topic particle",particle:"[vowel-ending noun] + 는",uses:[{k:"저는 학생이에요.",e:"I am a student."},{k:"커피는 비싸요.",e:"As for coffee, it's expensive."},{k:"한국어는 재미있어요.",e:"As for Korean, it's interesting."}],note:"Same as 은 but after vowel-ending words. Sets topic, shows contrast, marks known info.",level:"A1"},
    "이": {base:"subject marker (after consonant)",morph:"이  -  subject particle",particle:"[consonant-ending noun] + 이",uses:[{k:"학생이 왔어요.",e:"A student came. (new info)"},{k:"시간이 없어요.",e:"There is no time."},{k:"누가 왔어요? 제가 왔어요.",e:"Who came? I came. (emphasis)"}],note:"Marks the doer or new info. Contrast with 은/는 (topic). After vowels → 가.",level:"A1"},
    "가": {base:"① subject particle  ② verb stem (가다 = to go)",morph:"가 is genuinely two things  -  context determines which",particle:"[vowel noun]+가 (particle) · 가+요=가요 (verb)",uses:[{k:"커피가 있어요.",e:"① There is coffee.  -  가 = subject particle"},{k:"학교에 가요.",e:"② I go to school.  -  가 = stem of 가다 (to go)"},{k:"뭐가 좋아요?",e:"① What do you like?  -  가 = subject particle"}],note:"This ambiguity is REAL Korean. When 가 follows a noun → particle. When 가 precedes 요/서/면/고 → verb stem of 가다 (to go). Korean speakers feel the difference instantly  -  you will too.",level:"A1"},
    "을": {base:"object marker (after consonant)",morph:"을  -  object particle",particle:"[consonant-ending noun] + 을",uses:[{k:"밥을 먹어요.",e:"I eat rice. (object)"},{k:"책을 읽어요.",e:"I read a book."},{k:"한국어를... wait: 수영을 해요.",e:"I swim. (수영 ends in a consonant = consonant)"}],note:"Marks what the verb acts on. Often dropped in casual speech. After vowels → 를.",level:"A1"},
    "를": {base:"object marker (after vowel)",morph:"를  -  object particle",particle:"[vowel-ending noun] + 를",uses:[{k:"커피를 마셔요.",e:"I drink coffee."},{k:"영화를 봐요.",e:"I watch a movie."},{k:"한국어를 배워요.",e:"I learn Korean."}],note:"Same as 을 but after vowel-ending words. Check the LAST syllable's final consonant.",level:"A1"},
    "에": {base:"to / at / in (location or destination or time)",morph:"에  -  locative/directional particle",particle:"[place]에 있어요 / [place]에 가요 / [time]에",uses:[{k:"학교에 가요.",e:"I go to school."},{k:"집에 있어요.",e:"I'm at home."},{k:"세 시에 만나요.",e:"Let's meet at 3 o'clock."}],note:"에 marks WHERE something IS, WHERE you're GOING, and WHEN. Does NOT mark where you DO things → 에서.",level:"A1"},
    "에서": {base:"at / from (action location or origin)",morph:"에서  -  action locative particle",particle:"[place]에서 [action verb]",uses:[{k:"학교에서 공부해요.",e:"I study at school."},{k:"카페에서 일해요.",e:"I work at the café."},{k:"서울에서 왔어요.",e:"I came from Seoul."}],note:"에서 = where you DO things. Test: is there an action verb? Yes → 에서. Also means 'from'.",level:"A1"},
    "도": {base:"also / too / either",morph:"도  -  additive particle",particle:"[noun] + 도 (REPLACES 은/는, 이/가)",uses:[{k:"저도 학생이에요.",e:"I'm also a student."},{k:"커피도 있어요.",e:"Coffee is also available."},{k:"저도 몰라요.",e:"I don't know either."}],note:"도 REPLACES 은/는 or 이/가  -  it never stacks. 저는도 ✗ / 저도 ✓",level:"A1"},
    "의": {base:"possessive particle (of / 's)",morph:"의  -  genitive particle",particle:"[noun] + 의 + [noun]",uses:[{k:"제 친구의 이름이에요.",e:"It's my friend's name."},{k:"한국의 음식이 맛있어요.",e:"Korea's food is delicious."},{k:"엄마의 핸드폰이에요.",e:"It's mom's phone."}],note:"의 is often DROPPED in casual speech: 엄마의 이름 → 엄마 이름 (same meaning, more natural).",level:"A1"},
    "로": {base:"by / toward / via (direction or means)",morph:"(으)로  -  directional/instrumental particle",particle:"[consonant]으로 / [vowel or ㄹ]로",uses:[{k:"버스로 가요.",e:"I go by bus."},{k:"왼쪽으로 가세요.",e:"Go to the left."},{k:"한국어로 말해요.",e:"Speak in Korean."}],note:"(으)로 = by means of / in the direction of. 으로 after consonant (except ㄹ), 로 after vowel or ㄹ.",level:"A1"},
    // ── CORE NOUNS ──
    "밥": {base:"rice / meal / food in general",morph:"Native Korean",particle:"을/를 먹어요",uses:[{k:"밥 먹었어요?",e:"Did you eat? (=How are you?)"},{k:"밥을 먹어요.",e:"I eat a meal."},{k:"밥이 맛있어요.",e:"The food is delicious."}],note:"밥 = literally cooked rice, but culturally = any meal. 밥 먹었어요? is how Koreans say 'How are you?'",level:"A1"},
    "물": {base:"water",morph:"Native Korean",particle:"을 마셔요",uses:[{k:"물 주세요.",e:"Water, please."},{k:"물을 마셔요.",e:"I drink water."},{k:"물이 차가워요.",e:"The water is cold."}],note:"물 ends in consonant ㄹ → 물을 (object marker). Don't let the ㄹ fool you.",level:"A1"},
    "커피": {base:"coffee",morph:"Konglish  -  from English 'coffee'",particle:"를 마셔요",uses:[{k:"커피를 마셔요.",e:"I drink coffee."},{k:"커피 한 잔 주세요.",e:"One coffee, please."},{k:"아이스 커피요.",e:"Iced coffee, please."}],note:"커피 = Konglish pronunciation of 'coffee'. Korea has one of the world's highest café densities.",level:"A1"},
    "학교": {base:"school",morph:"학(學/study) + 교(校/school)  -  Sino-Korean",particle:"에 가요 / 에서 공부해요",uses:[{k:"학교에 가요.",e:"I go to school."},{k:"학교에서 공부해요.",e:"I study at school."},{k:"우리 학교가 좋아요.",e:"I like my/our school."}],note:"학 reappears in: 대학교 (university), 학원 (academy), 학생 (student).",level:"A1"},
    "집": {base:"house / home",morph:"Native Korean",particle:"에 있어요 / 에 가요",uses:[{k:"집에 있어요.",e:"I'm at home."},{k:"집에 가요.",e:"I go home."},{k:"우리 집이 커요.",e:"My house is big."}],note:"우리 집 (my house) not 나의 집. 집 = home as a concept, not just a building.",level:"A1"},
    "학생": {base:"student",morph:"학(學/study) + 생(生/person)  -  Sino-Korean",particle:"이에요 / 이/가",uses:[{k:"저는 학생이에요.",e:"I am a student."},{k:"학생이 왔어요.",e:"A student came."},{k:"학생들이 많아요.",e:"There are many students."}],note:"학 = study, 생 = life/person. 학생들 = students (들 = plural marker, optional in Korean).",level:"A1"},
    "선생님": {base:"teacher",morph:"선생(先生/teacher) + 님(honorific suffix)",particle:"이/가 / 께서 (super-honorific)",uses:[{k:"선생님이 오셨어요.",e:"The teacher came."},{k:"선생님, 질문 있어요.",e:"Teacher, I have a question."},{k:"우리 선생님이 좋아요.",e:"I like our teacher."}],note:"님 = honorific suffix showing respect. 선생 alone is informal. 선생님 is the safe form.",level:"A1"},
    "이름": {base:"name",morph:"Native Korean",particle:"이/가 뭐예요?",uses:[{k:"이름이 뭐예요?",e:"What is your name?"},{k:"제 이름은 사라예요.",e:"My name is Sara."},{k:"이름을 써 주세요.",e:"Please write your name."}],note:"이름이 뭐예요? = Survival question #1. Koreans often introduce by family name first.",level:"A1"},
    "뭐": {base:"what",morph:"Short for 무엇 (mu-eot)  -  spoken form",particle:"이/가 / 을/를",uses:[{k:"이게 뭐예요?",e:"What is this?"},{k:"뭐 먹어요?",e:"What are you eating?"},{k:"뭐가 좋아요?",e:"What do you like?"}],note:"뭐 is the casual spoken form of 무엇. Used in ~90% of daily questions. One of the top-10 Korean words.",level:"A1"},
    "어디": {base:"where",morph:"Native Korean question word",particle:"어디에 / 어디에서",uses:[{k:"어디 가요?",e:"Where are you going?"},{k:"어디에 있어요?",e:"Where is it?"},{k:"어디서 왔어요?",e:"Where did you come from?"}],note:"어디에 = at where (static) / 어디에서 = from where or doing where. Critical for directions.",level:"A1"},
    "왜": {base:"why",morph:"Native Korean question word",particle:"왜 [verb]?",uses:[{k:"왜요?",e:"Why?"},{k:"왜 안 가요?",e:"Why aren't you going?"},{k:"왜 그래요?",e:"Why are you like that?"}],note:"왜요 alone is a complete, natural question. Can sound confrontational  -  tone matters.",level:"A1"},
    "언제": {base:"when",morph:"Native Korean question word",particle:"언제 [verb]?",uses:[{k:"언제 가요?",e:"When are you going?"},{k:"언제 왔어요?",e:"When did you come?"},{k:"언제가 좋아요?",e:"When is good for you?"}],note:"Time question. Pairs with 에: 언제에 → 언제 (에 is usually dropped with question words).",level:"A1"},
    "얼마나": {base:"how much / how many / how long",morph:"얼마 (how much) + 나 (emphatic)",particle:"얼마나 [adjective]?",uses:[{k:"얼마나 멀어요?",e:"How far is it?"},{k:"얼마나 걸려요?",e:"How long does it take?"},{k:"얼마나 자주 와요?",e:"How often do you come?"}],note:"얼마 alone = how much money? 얼마나 = to what degree/extent (for adjectives and verbs).",level:"A1"},
    "얼마예요": {base:"how much is it? (price)",morph:"얼마 (how much) + 예요 (is)",particle:"이거 얼마예요?",uses:[{k:"얼마예요?",e:"How much is it?"},{k:"이거 얼마예요?",e:"How much is this?"},{k:"다해서 얼마예요?",e:"How much is it in total?"}],note:"Survival shopping phrase. 얼마 = how much money. 얼마나 = how much (degree).",level:"A1"},
    // ── FOOD & RESTAURANT ──
    "맛있어요": {base:"delicious / tastes good",morph:"맛(taste) + 있다(exists) + 어요",particle:"이/가 맛있어요",uses:[{k:"정말 맛있어요!",e:"Really delicious!"},{k:"뭐가 맛있어요?",e:"What's good here?"},{k:"여기 음식이 맛있어요.",e:"The food here is delicious."}],note:"맛있다 = 'taste exists'. 맛없다 = 'taste doesn't exist' = tasteless. LEGO compound.",level:"A1"},
    "맛없어요": {base:"not tasty / tasteless",morph:"맛(taste) + 없다(doesn't exist) + 어요",particle:"이/가 맛없어요",uses:[{k:"이게 맛없어요.",e:"This doesn't taste good."},{k:"라면이 맛없어요.",e:"The ramen is bad."},{k:"왜 맛없어요?",e:"Why doesn't it taste good?"}],note:"Don't say this about food someone cooked for you! Try: 맛이 좀 특이해요 (the taste is unique).",level:"A1"},
    "잘": {base:"well / properly / skillfully",morph:"Native Korean adverb",particle:"잘 + [verb]",uses:[{k:"잘 먹겠습니다.",e:"I will eat well. (said before eating)"},{k:"잘 먹었습니다.",e:"I ate well. (said after eating)"},{k:"잘 해요.",e:"Does it well."}],note:"잘 먹겠습니다 / 잘 먹었습니다 = the two most important meal phrases in Korean.",level:"A1"},
    "좀": {base:"a bit / please (softener)",morph:"Native Korean  -  softening adverb",particle:"좀 + [verb or adjective]",uses:[{k:"좀 주세요.",e:"Please give me (a bit more polite)."},{k:"좀 기다려요.",e:"Wait a moment."},{k:"좀 빨리 가요.",e:"Go a bit faster."}],note:"좀 softens ANY request and makes you sound more Korean and natural. Use it constantly.",level:"A1"},
    "더": {base:"more",morph:"Native Korean adverb",particle:"더 + [verb/adjective]",uses:[{k:"물 좀 더 주세요.",e:"More water, please."},{k:"더 싸요.",e:"It's cheaper. (more cheap)"},{k:"조금만 더요.",e:"Just a little bit more."}],note:"더 = more (comparison). 더 이상 = no more (used with negative: 더 이상 없어요).",level:"A1"},
    "저기요": {base:"excuse me (to get attention)",morph:"저기 (over there) + 요 (polite)  -  attention call",particle:"standalone exclamation",uses:[{k:"저기요! 메뉴 주세요.",e:"Excuse me! Menu please."},{k:"저기요, 화장실이 어디예요?",e:"Excuse me, where is the bathroom?"},{k:"저기요! 여기요!",e:"Excuse me! Over here!"}],note:"저기요 = 'hey over there!' Used to call restaurant staff, strangers, shopkeepers. Universal.",level:"A1"},
    "주문하다": {base:"to order (food/goods)",morph:"주문(注文/order) + 하다 (to do)",particle:"을/를 주문해요",uses:[{k:"주문할게요.",e:"I'll order now."},{k:"뭐 주문했어요?",e:"What did you order?"},{k:"주문이요!",e:"Order! (calling staff)"}],note:"주문 = Sino-Korean: 주(注/pour) + 문(文/writing). The act of writing/noting an order.",level:"A1"},
    "계산": {base:"bill / payment / calculation",morph:"계산(計算)  -  Sino-Korean: 계(計/count) + 산(算/calculate)",particle:"계산해 주세요",uses:[{k:"계산해 주세요.",e:"Check, please."},{k:"계산서 주세요.",e:"The bill, please."},{k:"카드로 계산해도 돼요?",e:"Can I pay by card?"}],note:"In Korea, you often pay at the counter, not tableside. Say 계산해 주세요 and walk to the register.",level:"A1"},
    "포장": {base:"to-go / takeout / packaging",morph:"포장(包裝)  -  Sino-Korean: 포(包/wrap) + 장(裝/pack)",particle:"포장이요 / 포장해 주세요",uses:[{k:"포장이요.",e:"To go, please."},{k:"포장해 주세요.",e:"Can you pack it to go?"},{k:"포장 가능해요?",e:"Is takeout available?"}],note:"포장 = packaging. Say 포장이요 = to go. 먹고 갈게요 = eating here.",level:"A1"},
    // ── TRANSPORT ──
    "버스": {base:"bus",morph:"Konglish  -  from English 'bus'",particle:"를 타요 / 로 가요",uses:[{k:"버스로 가요.",e:"I go by bus."},{k:"버스를 타요.",e:"I take the bus."},{k:"버스 정류장이 어디예요?",e:"Where is the bus stop?"}],note:"타다 = to ride/board (타요). Use with all transport: 버스를 타다, 택시를 타다, 지하철을 타다.",level:"A1"},
    "지하철": {base:"subway / metro",morph:"지하(地下/underground) + 철(鐵/iron/rail)  -  Sino-Korean",particle:"를 타요",uses:[{k:"지하철로 가요.",e:"I go by subway."},{k:"지하철역이 어디예요?",e:"Where is the subway station?"},{k:"지하철 몇 호선이에요?",e:"Which subway line is it?"}],note:"지하 = underground, 철 = iron/rail. Seoul subway is one of the world's best  -  cheap, fast, clean.",level:"A1"},
    "택시": {base:"taxi",morph:"Konglish  -  from English 'taxi'",particle:"를 타요",uses:[{k:"택시로 가요.",e:"I go by taxi."},{k:"택시를 불러요.",e:"I call a taxi."},{k:"택시 타도 돼요?",e:"Is it okay to take a taxi?"}],note:"KakaoTaxi app is the main taxi hailing app in Korea. Cheaper than many countries.",level:"A1"},
    "역": {base:"(train/subway) station",morph:"역(驛)  -  Sino-Korean: station",particle:"에서 / 앞에서",uses:[{k:"홍대역에서 만나요.",e:"Let's meet at Hongdae Station."},{k:"역이 어디예요?",e:"Where is the station?"},{k:"역 앞에서 봐요.",e:"Let's meet in front of the station."}],note:"역 + 에서 = at the station. Korean subway system: 1호선 (Line 1) through 9호선 (Line 9) in Seoul.",level:"A1"},
    "출구": {base:"exit",morph:"출(出/out) + 구(口/mouth/opening)  -  Sino-Korean",particle:"로 나오세요",uses:[{k:"1번 출구로 나오세요.",e:"Come out exit 1."},{k:"출구가 어디예요?",e:"Where is the exit?"},{k:"홍대역 9번 출구 앞에서 만나요.",e:"Let's meet at Hongdae Station exit 9."}],note:"Korean subway: every station has numbered exits. Meetings are ALWAYS given by exit number, not 'near the station'.",level:"A1"},
    "타다": {base:"to ride / to board (transport)",morph:"Native Korean verb",particle:"[transport]를 타요",uses:[{k:"버스를 타요.",e:"I take the bus."},{k:"자전거를 타요.",e:"I ride a bicycle."},{k:"어디서 타요?",e:"Where do I board?"}],note:"타다 = to ride/board. Works for all transport and vehicles. Opposite: 내리다 (to get off).",level:"A1"},
    // ── FAMILY ──
    "엄마": {base:"mom (casual)",morph:"Native Korean",particle:"이/가",uses:[{k:"우리 엄마가 요리해요.",e:"My mom cooks."},{k:"엄마!",e:"Mom!"},{k:"엄마한테 물어봐.",e:"Ask mom."}],note:"엄마 = casual. 어머니 = formal/respectful. 우리 엄마 (not 나의 엄마) is natural Korean.",level:"A1"},
    "아빠": {base:"dad (casual)",morph:"Native Korean  -  tense consonant ㅃ",particle:"이/가",uses:[{k:"아빠가 어디 있어요?",e:"Where is dad?"},{k:"아빠!",e:"Dad!"},{k:"우리 아빠가 의사예요.",e:"My dad is a doctor."}],note:"아빠 = casual. 아버지 = formal. The ㅃ (tense b) sounds clipped/forceful  -  it's not just ㅂ.",level:"A1"},
    "어머니": {base:"mother (formal)",morph:"Native Korean",particle:"이/가 / 께서 (super-honorific)",uses:[{k:"어머니, 안녕하세요.",e:"Hello, mother/ma'am."},{k:"어머니가 오셨어요.",e:"Mother has come."},{k:"친구 어머니예요.",e:"It's my friend's mother."}],note:"Use 어머니 when talking ABOUT others' mothers or in formal settings. Use 엄마 for your own mom casually.",level:"A1"},
    "아버지": {base:"father (formal)",morph:"Native Korean",particle:"이/가 / 께서 (super-honorific)",uses:[{k:"아버지가 집에 계세요.",e:"Father is at home."},{k:"친구 아버지예요.",e:"It's my friend's father."},{k:"아버지, 여기요.",e:"Father, over here."}],note:"More formal than 아빠. Use when talking about someone else's father or in respectful contexts.",level:"A1"},
    "형": {base:"older brother (said by males)",morph:"Native Korean",particle:"이/가 / 형!",uses:[{k:"형, 배고파.",e:"Bro, I'm hungry. (male to older brother)"},{k:"우리 형이 대학생이에요.",e:"My older brother is a university student."},{k:"형 어디 있어?",e:"Where are you, bro?"}],note:"ONLY males use 형. Females call older brothers 오빠. Also used for close older male friends.",level:"A1"},
    "오빠": {base:"older brother (said by females)",morph:"Native Korean",particle:"이/가 / 오빠!",uses:[{k:"오빠, 도와줘!",e:"Oppa, help me!"},{k:"우리 오빠가 멋있어요.",e:"My older brother is cool."},{k:"오빠라고 불러도 돼요?",e:"Can I call you oppa?"}],note:"ONLY females use 오빠. Famous in K-pop: female fans call male idols 오빠. Carries warmth/closeness.",level:"A1"},
    "누나": {base:"older sister (said by males)",morph:"Native Korean",particle:"이/가 / 누나!",uses:[{k:"우리 누나가 요리사예요.",e:"My older sister is a chef."},{k:"누나, 이거 먹어.",e:"Sis, eat this."},{k:"누나가 예뻐요.",e:"My older sister is pretty."}],note:"ONLY males use 누나. Same grid: Male speaker: 형 (older bro) / 누나 (older sis).",level:"A1"},
    "언니": {base:"older sister (said by females)",morph:"Native Korean",particle:"이/가 / 언니!",uses:[{k:"언니, 어디 가?",e:"Sis, where are you going?"},{k:"우리 언니가 의사예요.",e:"My older sister is a doctor."},{k:"언니라고 불러요.",e:"(People) call her unni."}],note:"ONLY females use 언니. Also used for older female friends, colleagues. Builds 정 (deep bond).",level:"A1"},
    "남동생": {base:"younger brother",morph:"남(男/male) + 동생(same-root younger sibling)",particle:"이/가",uses:[{k:"남동생이 있어요.",e:"I have a younger brother."},{k:"남동생이 중학생이에요.",e:"My younger brother is in middle school."},{k:"남동생한테 줘.",e:"Give it to your younger brother."}],note:"동생 = younger sibling (gender-neutral). 남동생 = male younger sibling. 여동생 = female.",level:"A1"},
    "여동생": {base:"younger sister",morph:"여(女/female) + 동생(younger sibling)",particle:"이/가",uses:[{k:"여동생이 귀여워요.",e:"My younger sister is cute."},{k:"여동생이 초등학생이에요.",e:"My younger sister is in elementary school."},{k:"여동생이 없어요.",e:"I don't have a younger sister."}],note:"동생 alone = younger sibling (any gender). 여동생 specifically = younger female sibling.",level:"A1"},
    // ── ADJECTIVES / DESCRIPTIVES ──
    "크다": {base:"to be big",morph:"크다 → 커요 (polite present)  -  ㅡ-irregular",particle:"이/가 크다",uses:[{k:"집이 커요.",e:"The house is big."},{k:"눈이 커요.",e:"The eyes are big."},{k:"얼마나 커요?",e:"How big is it?"}],note:"크다 → 커요: ㅡ drops before 아/어. This is the 으-pattern, taught in a later lesson.",level:"A1"},
    "작다": {base:"to be small",morph:"작다 → 작아요 (polite present)  -  regular",particle:"이/가 작다",uses:[{k:"방이 작아요.",e:"The room is small."},{k:"이게 너무 작아요.",e:"This is too small."},{k:"작은 가방이에요.",e:"It's a small bag."}],note:"작다 is regular. 작 + 아요 = 작아요. Opposite of 크다. 큰 ↔ 작은 (modifier forms).",level:"A1"},
    "많다": {base:"to be many / a lot",morph:"많다 → 많아요  -  regular",particle:"이/가 많다",uses:[{k:"사람이 많아요.",e:"There are many people."},{k:"시간이 많아요.",e:"There's a lot of time."},{k:"돈이 많아요.",e:"There's a lot of money."}],note:"많이 (adverb) = a lot, very much: 많이 먹어요 (eat a lot). 많다 ≠ 많이.",level:"A1"},
    "비싸다": {base:"to be expensive",morph:"비싸다 → 비싸요  -  regular",particle:"이/가 비싸다",uses:[{k:"이게 비싸요.",e:"This is expensive."},{k:"너무 비싸요.",e:"Too expensive."},{k:"왜 이렇게 비싸요?",e:"Why is it so expensive?"}],note:"Opposite: 싸다 (cheap). 비싸다 / 싸다 are the two core price adjectives.",level:"A1"},
    "싸다": {base:"to be cheap / inexpensive",morph:"싸다 → 싸요  -  regular",particle:"이/가 싸다",uses:[{k:"이게 싸요.",e:"This is cheap."},{k:"더 싼 거 있어요?",e:"Is there a cheaper one?"},{k:"너무 싸요!",e:"So cheap!"}],note:"Also means 'to wrap/pack' (different word, same spelling). Context distinguishes them.",level:"A1"},
    "재미있어요": {base:"interesting / fun",morph:"재미(fun/interest) + 있다(exists) + 어요",particle:"이/가 재미있어요",uses:[{k:"한국어가 재미있어요.",e:"Korean is interesting."},{k:"이 영화가 재미있어요.",e:"This movie is fun."},{k:"뭐가 재미있어요?",e:"What's fun / interesting?"}],note:"재미있다 ↔ 재미없다 (boring). Same LEGO logic as 맛있다 ↔ 맛없다.",level:"A1"},
    "어렵다": {base:"to be difficult",morph:"어렵다 → 어려워요 (ㅂ-irregular)",particle:"이/가 어렵다",uses:[{k:"한국어가 어려워요.",e:"Korean is difficult."},{k:"시험이 어려워요.",e:"The exam is hard."},{k:"이게 왜 이렇게 어려워요?",e:"Why is this so hard?"}],note:"⚡ ㅂ-irregular: 어렵 + 아/어요 → 어려워요 (ㅂ→우). Taught fully in a later lesson.",level:"A1"},
    "쉽다": {base:"to be easy",morph:"쉽다 → 쉬워요 (ㅂ-irregular)",particle:"이/가 쉽다",uses:[{k:"이게 쉬워요.",e:"This is easy."},{k:"생각보다 쉬워요.",e:"Easier than I thought."},{k:"제일 쉬운 게 뭐예요?",e:"What's the easiest thing?"}],note:"⚡ ㅂ-irregular like 어렵다. 쉽 + 어요 → 쉬워요. Opposite of 어렵다.",level:"A1"},
    "덥다": {base:"to be hot (weather/temperature)",morph:"덥다 → 더워요 (ㅂ-irregular)",particle:"날씨가 덥다",uses:[{k:"오늘 날씨가 더워요.",e:"Today's weather is hot."},{k:"너무 더워요!",e:"It's too hot!"},{k:"방이 더워요.",e:"The room is hot."}],note:"⚡ Preview: 덥다 → 더워요 (NOT 덥어요). ㅂ-irregular. Full pattern in a later lesson.",level:"A1"},
    "춥다": {base:"to be cold (weather)",morph:"춥다 → 추워요 (ㅂ-irregular)",particle:"날씨가 춥다",uses:[{k:"오늘 너무 추워요.",e:"It's so cold today."},{k:"밖이 추워요.",e:"It's cold outside."},{k:"겨울이 추워요.",e:"Winter is cold."}],note:"⚡ Preview: 춥다 → 추워요 (NOT 춥어요). Same pattern as 덥다.",level:"A1"},
    "예쁘다": {base:"to be pretty / beautiful",morph:"예쁘다 → 예뻐요 (으-irregular)",particle:"이/가 예쁘다",uses:[{k:"꽃이 예뻐요.",e:"The flower is pretty."},{k:"정말 예뻐요!",e:"Really pretty!"},{k:"예쁜 드레스예요.",e:"It's a pretty dress."}],note:"⚡ 으-irregular: 예쁘 + 어요 → 예뻐요 (ㅡ drops). 예쁜 = modifier form (before noun).",level:"A1"},
    "맵다": {base:"to be spicy",morph:"맵다 → 매워요 (ㅂ-irregular)",particle:"이/가 맵다",uses:[{k:"이게 매워요.",e:"This is spicy."},{k:"너무 매워요!",e:"Too spicy!"},{k:"안 매운 거 있어요?",e:"Is there something not spicy?"}],note:"⚡ ㅂ-irregular: 맵 + 어요 → 매워요. One of the most useful food adjectives in Korean.",level:"A1"},
    "달다": {base:"to be sweet",morph:"달다 → 달아요  -  regular",particle:"이/가 달다",uses:[{k:"이게 달아요.",e:"This is sweet."},{k:"좀 달아요.",e:"It's a bit sweet."},{k:"너무 달아요.",e:"Too sweet."}],note:"달다 is a ㄹ-irregular verb in some forms but 달아요 is the standard polite form.",level:"A1"},
    "짜다": {base:"to be salty",morph:"짜다 → 짜요  -  regular",particle:"이/가 짜다",uses:[{k:"이 국이 짜요.",e:"This soup is salty."},{k:"너무 짜요.",e:"Too salty."},{k:"짜지 않아요.",e:"It's not salty."}],note:"짜다 also means 'to squeeze/wring'. Context distinguishes. In food context always = salty.",level:"A1"},
    // ── NUMBERS & TIME ──
    "시": {base:"o'clock (counter for hours)",morph:"시(時)  -  Sino-Korean time counter",particle:"Native numbers + 시",uses:[{k:"몇 시예요?",e:"What time is it?"},{k:"세 시예요.",e:"It's 3 o'clock."},{k:"열두 시에 만나요.",e:"Let's meet at 12 o'clock."}],note:"Hours use NATIVE Korean numbers: 한 시, 두 시, 세 시... (not 일 시, 이 시). Mix with Sino for minutes.",level:"A1"},
    "분": {base:"minute (counter)",morph:"분(分)  -  Sino-Korean minute counter",particle:"Sino numbers + 분",uses:[{k:"10분 후에 와요.",e:"Come in 10 minutes."},{k:"삼십 분이에요.",e:"It's 30 minutes."},{k:"잠깐만요, 5분만요.",e:"Just a moment, just 5 minutes."}],note:"Minutes use SINO-KOREAN numbers: 십 분, 이십 분, 삼십 분. 반 = half: 세 시 반 = 3:30.",level:"A1"},
    "개": {base:"counter for general objects",morph:"개(個)  -  Sino-Korean general counter",particle:"Native numbers + 개",uses:[{k:"사과 세 개 주세요.",e:"Three apples, please."},{k:"두 개 있어요.",e:"There are two."},{k:"몇 개예요?",e:"How many (things) are there?"}],note:"개 = the most versatile counter. When unsure which counter to use, 개 is usually safe.",level:"A1"},
    "명": {base:"counter for people",morph:"명(名)  -  Sino-Korean person counter",particle:"Native numbers + 명",uses:[{k:"두 명이에요.",e:"There are two people."},{k:"몇 명이에요?",e:"How many people?"},{k:"한 명만요.",e:"Just one person."}],note:"명 = plain counter for people. 분 = polite/honorific version (두 분이세요? in restaurants).",level:"A1"},
    "잔": {base:"counter for cups/glasses",morph:"잔(盞)  -  Sino-Korean drink counter",particle:"Native numbers + 잔",uses:[{k:"커피 한 잔 주세요.",e:"One coffee, please."},{k:"두 잔이요.",e:"Two cups."},{k:"맥주 세 잔이요.",e:"Three beers."}],note:"커피 한 잔 주세요 = THE coffee order phrase in Korea. 잔 = cups, glasses, drinks.",level:"A1"},
    "원": {base:"Korean currency unit (won)",morph:"원(圓)  -  Sino-Korean",particle:"[number] + 원",uses:[{k:"얼마예요? 오천 원이에요.",e:"How much? It's 5,000 won."},{k:"만 원 있어요?",e:"Do you have 10,000 won?"},{k:"이십 퍼센트 할인이에요.",e:"It's a 20% discount."}],note:"만 (10,000) is the basic mental unit for Korean money. Think in 만, not in 천.",level:"A1"},
    // ── DIRECTIONS ──
    "왼쪽": {base:"left (side)",morph:"왼 (left) + 쪽 (side/direction)",particle:"으로 / 에",uses:[{k:"왼쪽으로 가세요.",e:"Go to the left."},{k:"왼쪽에 있어요.",e:"It's on the left."},{k:"왼쪽 첫 번째 문이에요.",e:"It's the first door on the left."}],note:"쪽 = side/direction. Reusable suffix: 앞쪽 (front), 뒤쪽 (back), 이쪽 (this way).",level:"A1"},
    "오른쪽": {base:"right (side)",morph:"오른 (right) + 쪽 (side/direction)",particle:"으로 / 에",uses:[{k:"오른쪽으로 가세요.",e:"Go to the right."},{k:"오른쪽에 있어요.",e:"It's on the right."},{k:"오른쪽 끝이에요.",e:"It's at the far right end."}],note:"왼쪽 ↔ 오른쪽. The 쪽 suffix appears in: 앞쪽, 뒤쪽, 이쪽, 저쪽, 그쪽.",level:"A1"},
    "앞": {base:"front / in front",morph:"Native Korean",particle:"에 / 앞에 있어요",uses:[{k:"앞에 있어요.",e:"It's in front."},{k:"학교 앞에서 만나요.",e:"Let's meet in front of the school."},{k:"앞으로 가세요.",e:"Go forward."}],note:"앞 ↔ 뒤 (back). 앞쪽 = front side. 앞으로 = forward (direction).",level:"A1"},
    "뒤": {base:"back / behind",morph:"Native Korean",particle:"에 / 뒤에 있어요",uses:[{k:"뒤에 있어요.",e:"It's behind."},{k:"차 뒤에 있어요.",e:"It's behind the car."},{k:"뒤로 가세요.",e:"Go back."}],note:"앞 ↔ 뒤. 뒤쪽 = back side. Can mean 'behind', 'in back of', 'after' in some contexts.",level:"A1"},
    "위": {base:"above / on top",morph:"Native Korean",particle:"에 있어요",uses:[{k:"책상 위에 있어요.",e:"It's on top of the desk."},{k:"위에 올려놓아요.",e:"Put it on top."},{k:"위층이에요.",e:"It's on the upper floor."}],note:"위 ↔ 아래 (below). 위에 있어요 = is on top of / above.",level:"A1"},
    "아래": {base:"below / under / beneath",morph:"Native Korean (also: 밑)",particle:"에 있어요",uses:[{k:"책상 아래에 있어요.",e:"It's under the desk."},{k:"아래로 내려가요.",e:"Go down."},{k:"아래 층이에요.",e:"It's on the lower floor."}],note:"위 ↔ 아래. 밑 is a synonym. 아래 is slightly more formal, 밑 more casual.",level:"A1"},
    "안": {base:"inside / within",morph:"Native Korean",particle:"에 있어요",uses:[{k:"가방 안에 있어요.",e:"It's inside the bag."},{k:"집 안에 있어요.",e:"It's inside the house."},{k:"안으로 들어오세요.",e:"Please come inside."}],note:"안 ↔ 밖 (outside). DIFFERENT from 안 (negation). Context tells you which 안 it is.",level:"A1"},
    "밖": {base:"outside",morph:"Native Korean",particle:"에 있어요",uses:[{k:"밖에 있어요.",e:"It's outside."},{k:"밖으로 나가세요.",e:"Please go outside."},{k:"밖이 추워요.",e:"It's cold outside."}],note:"안 ↔ 밖. 밖에 = only (in certain phrases): 방법이 없는 것밖에 = there's nothing but...",level:"A1"},
    "옆": {base:"beside / next to",morph:"Native Korean",particle:"에 있어요",uses:[{k:"옆에 앉아요.",e:"Sit next to (me/it)."},{k:"은행 옆에 있어요.",e:"It's next to the bank."},{k:"옆 사람이에요.",e:"It's the person next to (me)."}],note:"옆 is one of the most useful position words for giving and getting directions.",level:"A1"},
    "사이": {base:"between / gap / relationship",morph:"Native Korean",particle:"에 있어요",uses:[{k:"은행과 카페 사이에 있어요.",e:"It's between the bank and the café."},{k:"우리 사이가 좋아요.",e:"Our relationship is good."},{k:"그 사이에 뭐 했어요?",e:"What did you do in between?"}],note:"사이 has TWO meanings: physical 'between' and social 'relationship'. Context distinguishes.",level:"A1"},
    // ── CONNECTORS & ADVERBS ──
    "그래서": {base:"so / therefore / and so",morph:"그래 (like that) + 서 (because/so)",particle:"Sentence + 그래서 + Result",uses:[{k:"배가 고파요. 그래서 밥을 먹어요.",e:"I'm hungry. So I eat."},{k:"비가 와요. 그래서 집에 있어요.",e:"It's raining. So I stay home."},{k:"늦었어요. 그래서 택시를 탔어요.",e:"I was late. So I took a taxi."}],note:"그래서 starts the RESULT sentence. Cause → 그래서 → Effect.",level:"A1"},
    "그런데": {base:"but / however / by the way",morph:"그런 (like that) + 데 (situation/place)",particle:"Sentence + 그런데 + Contrast",uses:[{k:"맛있어요. 그런데 매워요.",e:"It's delicious. But it's spicy."},{k:"갈게요. 그런데 늦을 것 같아요.",e:"I'll go. But I might be late."},{k:"그런데, 이름이 뭐예요?",e:"By the way, what's your name?"}],note:"그런데 = but/however (contrast) OR topic shift ('by the way'). Very common in conversation.",level:"A1"},
    "그러면": {base:"then / in that case / if so",morph:"그러 (do like that) + 면 (if/when)",particle:"Condition + 그러면 + Result",uses:[{k:"배고파요. 그러면 먹어요.",e:"I'm hungry. Then let's eat."},{k:"비가 오면 그러면 택시요.",e:"If it rains, then taxi it is."},{k:"그러면 내일 만나요.",e:"Then let's meet tomorrow."}],note:"그러면 → 그럼 (casual short form). 그럼 is extremely common in conversation.",level:"A1"},
    "아니면": {base:"or / if not",morph:"아니 (not) + 면 (if)  -  Compound",particle:"A + 아니면 + B?",uses:[{k:"버스 아니면 지하철이에요?",e:"Bus or subway?"},{k:"커피 아니면 차요?",e:"Coffee or tea?"},{k:"오늘 아니면 내일요.",e:"Today or tomorrow."}],note:"아니면 = the main 'or' connector in Korean questions. More natural than 또는 in speech.",level:"A1"},
    "하지만": {base:"but / however (formal)",morph:"하지만  -  connector adverb",particle:"Sentence + 하지만 + Contrast",uses:[{k:"비싸요. 하지만 맛있어요.",e:"It's expensive. But it's delicious."},{k:"어려워요. 하지만 재미있어요.",e:"It's hard. But interesting."},{k:"늦었어요. 하지만 왔어요.",e:"I was late. But I came."}],note:"하지만 = more formal than 그런데. Both mean 'but'. 그런데 is more common in speech.",level:"A1"},
    "자주": {base:"often / frequently",morph:"Native Korean adverb",particle:"자주 + [verb]",uses:[{k:"자주 와요.",e:"I come often."},{k:"얼마나 자주요?",e:"How often?"},{k:"자주 먹어요.",e:"I eat it often."}],note:"Frequency scale: 항상 (always) > 자주 (often) > 가끔 (sometimes) > 별로 (not really) > 전혀 (never).",level:"A1"},
    "가끔": {base:"sometimes / occasionally",morph:"Native Korean adverb",particle:"가끔 + [verb]",uses:[{k:"가끔 가요.",e:"I go sometimes."},{k:"가끔 그래요.",e:"It's like that sometimes."},{k:"가끔 생각나요.",e:"I think of it sometimes."}],note:"Frequency: 자주 (often) > 가끔 (sometimes) > 별로 안 (not really).",level:"A1"},
    "보통": {base:"usually / normally / average",morph:"보통(普通)  -  Sino-Korean: 普(general)+通(pass)",particle:"보통 + [verb]",uses:[{k:"보통 7시에 일어나요.",e:"I usually get up at 7."},{k:"보통 어때요?",e:"How is it usually?"},{k:"보통이에요.",e:"It's average / just okay."}],note:"보통 = usually (frequency) AND ordinary/average (adjective). Context tells which.",level:"A1"},
    "별로": {base:"not really / not particularly",morph:"별로  -  always with negative",particle:"별로 + [negative verb]",uses:[{k:"별로 안 좋아요.",e:"Not really good."},{k:"별로예요.",e:"It's not great."},{k:"별로 안 먹어요.",e:"I don't really eat it."}],note:"별로 ALWAYS pairs with a negative. 별로 좋아요 ✗. 별로 안 좋아요 ✓.",level:"A1"},
    "전혀": {base:"not at all / absolutely not",morph:"전혀(全혀)  -  from 전(全/complete) + 혀",particle:"전혀 + [negative verb]",uses:[{k:"전혀 몰라요.",e:"I have absolutely no idea."},{k:"전혀 없어요.",e:"There's absolutely none."},{k:"전혀 안 매워요.",e:"It's not spicy at all."}],note:"전혀 = absolute zero. Always with negative. Stronger than 별로. 전혀 없어요 = absolutely none.",level:"A1"},
    // ── GREETINGS & PHRASES ──
    "안녕하세요": {base:"Hello / Good day (polite)",morph:"안녕(安寧/peace) + 하세요 (please do/are)",particle:"standalone greeting",uses:[{k:"안녕하세요!",e:"Hello!"},{k:"안녕하세요, 저는 사라예요.",e:"Hello, I'm Sara."},{k:"선생님, 안녕하세요.",e:"Hello, teacher."}],note:"The universal Korean greeting for all adults and strangers. 안녕 alone = casual (friends only).",level:"A1"},
    "감사합니다": {base:"Thank you (formal)",morph:"감사(感謝/gratitude) + 합니다 (do-formally)",particle:"standalone phrase",uses:[{k:"감사합니다!",e:"Thank you!"},{k:"정말 감사합니다.",e:"Thank you very much."},{k:"도와주셔서 감사합니다.",e:"Thank you for helping."}],note:"Most formal 'thank you'. 고맙습니다 is warmer/less stiff. Both take 정말 (really) as intensifier.",level:"A1"},
    "고맙습니다": {base:"Thank you (warm, slightly less formal)",morph:"고맙다 (to be grateful) + 습니다",particle:"standalone phrase",uses:[{k:"고맙습니다!",e:"Thank you!"},{k:"정말 고마워요.",e:"I'm really grateful. (casual)"},{k:"고마워!",e:"Thanks! (casual)"}],note:"고맙습니다 is slightly warmer and less stiff than 감사합니다. Both are polite.",level:"A1"},
    "괜찮아요": {base:"it's okay / are you okay / no thanks",morph:"괜찮다 → 괜찮아요",particle:"이/가 괜찮아요",uses:[{k:"괜찮아요.",e:"It's okay. / I'm fine."},{k:"괜찮아요? (to someone)",e:"Are you okay?"},{k:"괜찮아요. (declining offer)",e:"No thank you. (politely declining)"}],note:"괜찮아요 has 3 uses: 1) I'm fine 2) Are you okay? 3) Politely declining. Context is everything.",level:"A1"},
    "죄송합니다": {base:"I'm sorry / excuse me (formal)",morph:"죄송(罪悚/sin-fear) + 합니다 (do-formally)",particle:"standalone apology",uses:[{k:"죄송합니다.",e:"I'm sorry. (formal)"},{k:"늦어서 죄송합니다.",e:"I'm sorry for being late."},{k:"죄송한데요...",e:"I'm sorry but... (softener)"}],note:"죄송합니다 = formal deep apology. 미안해요 = casual sorry. 실례합니다 = 'excuse me' (passing by).",level:"A1"},
    "만나서반갑습니다": {base:"Nice to meet you (formal)",morph:"만나서(having met) + 반갑습니다(glad-formally)",particle:"first meeting phrase",uses:[{k:"만나서 반갑습니다!",e:"Nice to meet you!"},{k:"처음 뵙겠습니다.",e:"Meeting you for the first time. (super formal)"},{k:"반가워요!",e:"Nice to meet you! (casual)"}],note:"만나서 = 'having met'. 반갑다 = glad/pleased. Bow slightly when you say this. Essential first meeting phrase.",level:"A1"},
    "잘부탁드립니다": {base:"I look forward to working with you",morph:"잘(well) + 부탁(favor) + 드립니다(humbly give-formally)",particle:"formal introductory phrase",uses:[{k:"잘 부탁드립니다.",e:"Please take care of me. / Looking forward to working with you."},{k:"앞으로 잘 부탁드립니다.",e:"I look forward to our future relationship."},{k:"잘 부탁해요.",e:"(Casual version) Please take good care of me."}],note:"Untranslatable but critical phrase. Said when joining a team, meeting business partners, or starting any new relationship.",level:"A1"},
    // ── VERB DICTIONARY FORMS (가다 etc  -  prevents particle misread on dict form display) ──
    "가다": {base:"to go (dictionary form)",morph:"가 (stem) + 다 (infinitive suffix)",particle:"에 가다 (destination)",uses:[{k:"학교에 가요.",e:"I go to school."},{k:"어디에 가요?",e:"Where are you going?"},{k:"같이 가요.",e:"Let's go together."}],note:"Dictionary form. Drop 다 → stem 가. Add 요 → 가요. Train metaphor: 가 is the engine.",level:"A1"},
    "오다": {base:"to come (dictionary form)",morph:"오 (stem) + 다 (infinitive suffix)",particle:"에 오다 / 에서 오다",uses:[{k:"학교에 와요.",e:"(I) come to school."},{k:"어디서 와요?",e:"Where do you come from?"},{k:"빨리 와요!",e:"Come quickly!"}],note:"Dictionary form of 와요. 오 + 아요 → 와요 (vowel contraction). Stem: 오.",level:"A1"},
    "먹다": {base:"to eat (dictionary form)",morph:"먹 (stem) + 다 (infinitive suffix)",particle:"을/를 먹다",uses:[{k:"밥을 먹어요.",e:"I eat a meal."},{k:"뭐 먹어요?",e:"What are you eating?"},{k:"잘 먹겠습니다.",e:"I will eat well."}],note:"Dictionary form. 먹 + 어요 → 먹어요. Stem ends in dark vowel ㅓ → takes -어요.",level:"A1"},
    "마시다": {base:"to drink (dictionary form)",morph:"마시 (stem) + 다 (infinitive suffix)",particle:"을/를 마시다",uses:[{k:"커피를 마셔요.",e:"I drink coffee."},{k:"물을 마셔요.",e:"I drink water."},{k:"뭐 마셔요?",e:"What are you drinking?"}],note:"마시 + 어요 → 마셔요. 이+어 → 여 contraction. Dictionary form shown here.",level:"A1"},
    "하다": {base:"to do (dictionary form)",morph:"하 (stem) + 다 (infinitive suffix)",particle:"을/를 하다",uses:[{k:"공부해요.",e:"I study."},{k:"뭐 해요?",e:"What are you doing?"},{k:"운동해요.",e:"I exercise."}],note:"Most frequent Korean verb. 하다 + 어요 contracts to 해요. Powers all [noun]+하다 verbs.",level:"A1"},
    "보다": {base:"to see / to watch (dictionary form)",morph:"보 (stem) + 다 (infinitive suffix)",particle:"을/를 보다",uses:[{k:"영화를 봐요.",e:"I watch a movie."},{k:"뭐 봐요?",e:"What are you watching?"},{k:"한번 봐요.",e:"Take a look."}],note:"보 + 아요 → 봐요. Pure vowel stem. Also means 'to try' in -아/어 보다 form.",level:"A1"},
    "읽다": {base:"to read (dictionary form)",morph:"읽 (stem) + 다 (infinitive suffix)",particle:"을/를 읽다",uses:[{k:"책을 읽어요.",e:"I read a book."},{k:"한국어를 읽어요.",e:"I read Korean."},{k:"신문을 읽어요.",e:"I read the newspaper."}],note:"읽 + 어요 → 읽어요. The ㄱ in 읽 is pronounced only before a vowel.",level:"A1"},
    "쓰다": {base:"to write / to use (dictionary form)",morph:"쓰 (stem) + 다 (infinitive suffix)",particle:"을/를 쓰다",uses:[{k:"한국어를 써요.",e:"I write/use Korean."},{k:"이름을 써 주세요.",e:"Please write your name."},{k:"펜을 써요.",e:"I use a pen."}],note:"쓰 + 어요 → 써요. ㅡ-irregular: ㅡ drops before 아/어. Also means 'to wear (hat/glasses)'.",level:"A1"},
    "알다": {base:"to know (dictionary form)",morph:"알 (stem) + 다 (infinitive suffix)",particle:"을/를 알다",uses:[{k:"알아요.",e:"I know."},{k:"그 사람 알아요?",e:"Do you know that person?"},{k:"뭐 알아요?",e:"What do you know?"}],note:"ㄹ-irregular in some forms. 알아요 is regular. Pair with 모르다 (don't know).",level:"A1"},
    "모르다": {base:"to not know (dictionary form)",morph:"모르 (stem) + 다 (infinitive suffix)",particle:"을/를 모르다",uses:[{k:"몰라요.",e:"I don't know."},{k:"그 사람을 몰라요.",e:"I don't know that person."},{k:"진짜 몰라요.",e:"I really don't know."}],note:"⚡ Preview: 모르다 → 몰라요 (ㄹ-irregular). Drop ㄹ before ㅏ/ㅗ and double: 몰+라요.",level:"A1"},
    "주다": {base:"to give (dictionary form)",morph:"주 (stem) + 다 (infinitive suffix)",particle:"에게 / 한테 주다",uses:[{k:"물 주세요.",e:"Water, please."},{k:"친구한테 줘요.",e:"I give (it) to a friend."},{k:"선물을 줬어요.",e:"I gave a gift."}],note:"주다 → 주세요 = 'please give'. 주 + 어요 → 줘요. Pairs with 받다 (to receive).",level:"A1"},
    "좋다": {base:"to be good / to like (dictionary form)",morph:"좋 (stem) + 다 (infinitive suffix)",particle:"이/가 좋다",uses:[{k:"이게 좋아요.",e:"This is good / I like this."},{k:"뭐가 좋아요?",e:"What do you like?"},{k:"날씨가 좋아요.",e:"The weather is good."}],note:"좋다 = BOTH 'to be good' AND 'to like'. 좋 + 아요 → 좋아요.",level:"A1"},
    "싫다": {base:"to dislike (dictionary form)",morph:"싫 (stem) + 다 (infinitive suffix)",particle:"이/가 싫다",uses:[{k:"이거 싫어요.",e:"I don't like this."},{k:"공부가 싫어요.",e:"I dislike studying."},{k:"밥 싫어요.",e:"I don't want rice."}],note:"싫 + 어요 → 싫어요. More direct/emotional than 안 좋아요.",level:"A1"},
    "있다": {base:"to exist / to have (dictionary form)",morph:"있 (stem) + 다 (infinitive suffix)",particle:"이/가 있다 / 에 있다",uses:[{k:"커피가 있어요.",e:"There is coffee."},{k:"저는 차가 있어요.",e:"I have a car."},{k:"집에 있어요.",e:"I'm at home."}],note:"Dictionary form. Powers 3 English meanings: 'there is', 'I have', 'is somewhere'.",level:"A1"},
    "없다": {base:"to not exist / to not have (dictionary form)",morph:"없 (stem) + 다 (infinitive suffix)",particle:"이/가 없다",uses:[{k:"시간이 없어요.",e:"There is no time."},{k:"돈이 없어요.",e:"I have no money."},{k:"화장실이 없어요?",e:"There's no bathroom?"}],note:"Exact inverse of 있다. Irregular stem 없 is indivisible. Builds: 재미없다, 맛없다.",level:"A1"},
    "크다": {base:"to be big (dictionary form)",morph:"크 (stem) + 다 (infinitive suffix)",particle:"이/가 크다",uses:[{k:"집이 커요.",e:"The house is big."},{k:"눈이 커요.",e:"The eyes are big."},{k:"얼마나 커요?",e:"How big is it?"}],note:"으-irregular: 크다 → 커요. ㅡ drops before 아/어. Contrast with 작다 (small).",level:"A1"},
    "작다": {base:"to be small (dictionary form)",morph:"작 (stem) + 다 (infinitive suffix)",particle:"이/가 작다",uses:[{k:"방이 작아요.",e:"The room is small."},{k:"이게 너무 작아요.",e:"This is too small."},{k:"작은 가방이에요.",e:"It's a small bag."}],note:"Regular. 작 + 아요 → 작아요. 큰 ↔ 작은 (modifier forms).",level:"A1"},
    "많다": {base:"to be many / a lot (dictionary form)",morph:"많 (stem) + 다 (infinitive suffix)",particle:"이/가 많다",uses:[{k:"사람이 많아요.",e:"There are many people."},{k:"시간이 많아요.",e:"There's a lot of time."},{k:"많이 먹어요.",e:"Eat a lot."}],note:"많이 (adverb) = a lot. 많다 ≠ 많이. 많 + 아요 → 많아요.",level:"A1"},
    "비싸다": {base:"to be expensive (dictionary form)",morph:"비싸 (stem) + 다 (infinitive suffix)",particle:"이/가 비싸다",uses:[{k:"이게 비싸요.",e:"This is expensive."},{k:"너무 비싸요.",e:"Too expensive."},{k:"왜 이렇게 비싸요?",e:"Why is it so expensive?"}],note:"비싸 + 아요 → 비싸요. Regular. Opposite: 싸다 (cheap).",level:"A1"},
    "어렵다": {base:"to be difficult (dictionary form)",morph:"어렵 (stem) + 다  -  ㅂ-irregular",particle:"이/가 어렵다",uses:[{k:"한국어가 어려워요.",e:"Korean is difficult."},{k:"시험이 어려워요.",e:"The exam is hard."},{k:"생각보다 어려워요.",e:"Harder than I thought."}],note:"⚡ ㅂ-irregular: 어렵 + 어요 → 어려워요. ㅂ→우 before vowel. Taught fully later.",level:"A1"},
    "쉽다": {base:"to be easy (dictionary form)",morph:"쉽 (stem) + 다  -  ㅂ-irregular",particle:"이/가 쉽다",uses:[{k:"이게 쉬워요.",e:"This is easy."},{k:"생각보다 쉬워요.",e:"Easier than I thought."},{k:"제일 쉬운 게 뭐예요?",e:"What's the easiest?"}],note:"⚡ ㅂ-irregular like 어렵다. 쉽 + 어요 → 쉬워요. Opposite of 어렵다.",level:"A1"},
    "덥다": {base:"to be hot (weather)  -  dictionary form",morph:"덥 (stem) + 다  -  ㅂ-irregular",particle:"날씨가 덥다",uses:[{k:"오늘 날씨가 더워요.",e:"Today's weather is hot."},{k:"너무 더워요!",e:"It's too hot!"},{k:"방이 더워요.",e:"The room is hot."}],note:"⚡ ㅂ-irregular: 덥 + 어요 → 더워요. NOT 덥어요. Full pattern in a later lesson.",level:"A1"},
    "춥다": {base:"to be cold (weather)  -  dictionary form",morph:"춥 (stem) + 다  -  ㅂ-irregular",particle:"날씨가 춥다",uses:[{k:"오늘 너무 추워요.",e:"It's so cold today."},{k:"밖이 추워요.",e:"It's cold outside."},{k:"겨울이 추워요.",e:"Winter is cold."}],note:"⚡ ㅂ-irregular like 덥다. 춥 + 어요 → 추워요. Stem 춥 → 추워.",level:"A1"},
    "맵다": {base:"to be spicy  -  dictionary form",morph:"맵 (stem) + 다  -  ㅂ-irregular",particle:"이/가 맵다",uses:[{k:"이게 매워요.",e:"This is spicy."},{k:"너무 매워요!",e:"Too spicy!"},{k:"안 매운 거 있어요?",e:"Is there something not spicy?"}],note:"⚡ ㅂ-irregular: 맵 + 어요 → 매워요. One of the most useful food adjectives.",level:"A1"},
    "예쁘다": {base:"to be pretty  -  dictionary form",morph:"예쁘 (stem) + 다  -  으-irregular",particle:"이/가 예쁘다",uses:[{k:"꽃이 예뻐요.",e:"The flower is pretty."},{k:"정말 예뻐요!",e:"Really pretty!"},{k:"예쁜 드레스예요.",e:"It's a pretty dress."}],note:"으-irregular: 예쁘 + 어요 → 예뻐요. ㅡ drops. 예쁜 = modifier form.",level:"A1"},
    // ── JOBS & PLACES ──
    "의사": {base:"doctor",morph:"의(醫/medicine) + 사(師/expert)  -  Sino-Korean",particle:"이에요/예요 / 이/가",uses:[{k:"의사예요.",e:"I'm a doctor."},{k:"의사 선생님이에요.",e:"He/she is a doctor. (respectful)"},{k:"의사한테 가요.",e:"I'm going to the doctor."}],note:"사(師) = expert in a field. 의사, 요리사, 간호사 all share this 사 morpheme.",level:"A1"},
    "선생": {base:"teacher (informal base word)",morph:"선(先/before/first) + 생(生/birth/person)  -  Sino-Korean",particle:"선생님 (with honorific)",uses:[{k:"선생님이에요.",e:"I'm a teacher."},{k:"영어 선생님이에요.",e:"I'm an English teacher."},{k:"선생님한테 물어봐요.",e:"Ask the teacher."}],note:"선생 alone is informal. Always add 님 in actual use: 선생님. 님 = respect honorific suffix.",level:"A1"},
    "회사원": {base:"office worker / company employee",morph:"회사(會社/company) + 원(員/member)  -  Sino-Korean",particle:"이에요/예요",uses:[{k:"회사원이에요.",e:"I'm an office worker."},{k:"회사원이 되고 싶어요.",e:"I want to become an office worker."},{k:"회사원 생활이 어때요?",e:"How is office worker life?"}],note:"원(員) = member/person. 회사원, 공무원, 병원 all use 원 (though 병원의 원 = place, not person).",level:"A1"},
    "카페": {base:"café",morph:"Konglish  -  from French 'café'",particle:"에 가요 / 에서 마셔요",uses:[{k:"카페에 가요.",e:"I go to the café."},{k:"카페에서 공부해요.",e:"I study at the café."},{k:"카페 어디 있어요?",e:"Where's a café?"}],note:"Korea has one of the world's highest café densities. 카페 culture = 공부, 미팅, 데이트.",level:"A1"},
    "병원": {base:"hospital / clinic",morph:"병(病/illness) + 원(院/institution)  -  Sino-Korean",particle:"에 가요",uses:[{k:"병원에 가요.",e:"I go to the hospital."},{k:"병원이 어디예요?",e:"Where is the hospital?"},{k:"병원에 예약했어요.",e:"I made a hospital appointment."}],note:"병원 = any medical facility. 종합병원 = general hospital. 의원 = small clinic.",level:"A1"},
    "도서관": {base:"library",morph:"도서(圖書/books) + 관(館/building)  -  Sino-Korean",particle:"에 가요 / 에서 공부해요",uses:[{k:"도서관에서 공부해요.",e:"I study at the library."},{k:"도서관이 어디예요?",e:"Where is the library?"},{k:"도서관에 책이 많아요.",e:"There are many books in the library."}],note:"관(館) = public building. 관 reappears in: 미술관 (art museum), 박물관 (museum), 체육관 (gym).",level:"A1"},
  };

  // ════════════════════════════════════════════════════════════
  // KOREAN WORD TOKENIZER — splits Korean text into dictionary-lookupable tokens
  // Strategy: split on spaces, then try stripping known particles from each token
  // ════════════════════════════════════════════════════════════
  const KOR_PARTICLES = [
    "에서","으로","이에요","예요","이에","에게","한테","부터","까지","에도",
    "에서도","이라","이라고","이지만","이고","와","과","랑","이랑",
    "을","를","은","는","이","가","도","의","로","에","만","씩","마다","보다","처럼","만큼"
  ];
  // Sort longest first so "에서" is tried before "에"
  const KOR_PART_SORTED = [...KOR_PARTICLES].sort((a,b)=>b.length-a.length);

  const tokenizeKorean = (text) => {
    if(!text||typeof text!=="string") return [{word:text,key:text,isKorean:false}];
    const tokens = [];
    const spaceTokens = text.split(/( )/);
    // Extended conjugation map — all known conjugated forms → dictionary form
    const conjMap={
      "있어요":"있다","없어요":"없다","해요":"하다","가요":"가다","와요":"오다",
      "먹어요":"먹다","마셔요":"마시다","알아요":"알다","몰라요":"모르다",
      "좋아요":"좋다","싫어요":"싫다","커요":"크다","작아요":"작다",
      "많아요":"많다","비싸요":"비싸다","싸요":"싸다","맛있어요":"맛있다",
      "맛없어요":"맛없다","재미있어요":"재미있다","어려워요":"어렵다",
      "쉬워요":"쉽다","더워요":"덥다","추워요":"춥다","예뻐요":"예쁘다",
      "매워요":"맵다","달아요":"달다","짜요":"짜다",
      "봐요":"보다","읽어요":"읽다","써요":"쓰다","들어요":"듣다",
      "걸어요":"걷다","팔아요":"팔다","살아요":"살다","열어요":"열다",
      "알려요":"알리다","불러요":"부르다","달라요":"다르다","빨라요":"빠르다",
      "나아요":"낫다","지어요":"짓다","이어요":"잇다",
      "주세요":"주다","하세요":"하다","오세요":"오다","가세요":"가다",
      "봐요":"보다","봐요":"보다"
    };
    for(let idx=0;idx<spaceTokens.length;idx++){
      const raw=spaceTokens[idx];
      if(raw===" "||raw===""){tokens.push({word:" ",key:" ",isKorean:false});continue;}
      const hasKor=/[\uAC00-\uD7AF]/.test(raw);
      if(!hasKor){tokens.push({word:raw,key:raw,isKorean:false});continue;}
      // Look ahead: find next meaningful (non-space) token
      let nextMeaningful=null;
      for(let j=idx+1;j<spaceTokens.length;j++){
        const t=spaceTokens[j];
        if(t&&t.trim()){nextMeaningful=t.trim();break;}
      }
      const arrowContext=nextMeaningful==="→"||nextMeaningful==="→";
      // CONTEXT-AWARE: if next token is →, this is a verb stem/dict form display
      // Try raw+"다" before anything else to avoid particle misread
      if(arrowContext&&KOREAN_DICT[raw+"다"]){
        tokens.push({word:raw,key:raw+"다",isKorean:true});
        continue;
      }
      // Try direct lookup (dict forms like 가다, 먹다, etc.)
      if(KOREAN_DICT[raw]){
        // Prevent particle misread when in arrow context: e.g. "가" before → should be 가다
        if(arrowContext&&KOREAN_DICT[raw+"다"]){
          tokens.push({word:raw,key:raw+"다",isKorean:true});
        } else {
          tokens.push({word:raw,key:raw,isKorean:true});
        }
        continue;
      }
      // Try stripping particles (longest-first)
      let found=false;
      for(const p of KOR_PART_SORTED){
        if(raw.endsWith(p)&&raw.length>p.length){
          const stem=raw.slice(0,raw.length-p.length);
          if(KOREAN_DICT[stem]){
            tokens.push({word:raw,key:stem,isKorean:true,particle:p,stem});
            found=true;break;
          }
          if(KOREAN_DICT[stem+"다"]){
            tokens.push({word:raw,key:stem+"다",isKorean:true,particle:p,stem});
            found=true;break;
          }
        }
      }
      if(!found){
        // Try conjugation map
        if(conjMap[raw]&&KOREAN_DICT[conjMap[raw]]){
          tokens.push({word:raw,key:conjMap[raw],isKorean:true});
        } else {
          tokens.push({word:raw,key:raw,isKorean:true,noEntry:true});
        }
      }
    }
    return tokens;
  };

  // ════════════════════════════════════════════════════════════
  // WORD BUBBLE COMPONENT — glossy candy style, portal-style positioning
  // ════════════════════════════════════════════════════════════
  // ═══ WORD BUBBLE ═══
  // iOS candy-gloss, brand purple+teal palette, internal browser-tab history.
  const WordBubble=({entry:initEntry,word:initWord,stem:initStem,particle:initParticle,onClose})=>{
    const [history,setHistory]=React.useState([]);
    const [cur,setCur]=React.useState({entry:initEntry,word:initWord,stem:initStem,particle:initParticle});
    const {entry,word,particle}=cur;
    if(!entry)return null;

    const navTo=(e2,w2,s2,p2)=>{setHistory(h=>[...h,cur]);setCur({entry:e2,word:w2,stem:s2,particle:p2});};
    const goBack=()=>{if(!history.length)return;setCur(history[history.length-1]);setHistory(h=>h.slice(0,-1));};

    // ── bubbleHl: tokenize, make EVERY Korean token tappable ──
    const bubbleHl=(text,fz=16)=>{
      if(!text||typeof text!=="string") return <span style={{color:dk?"rgba(210,200,255,0.75)":"var(--gray-500)",fontSize:fz}}>{text}</span>;
      if(!/[\uAC00-\uD7AF]/.test(text)){
        return <span style={{color:dk?"rgba(210,200,255,0.8)":"var(--gray-600)",fontSize:fz,fontWeight:500}}>{text}</span>;
      }
      const toks=tokenizeKorean(text);
      return <>{toks.map((tok,ti)=>{
        if(!tok.isKorean) return <span key={ti} style={{color:dk?"rgba(200,188,255,0.7)":"var(--gray-500)",fontSize:fz}}>{tok.word}</span>;
        const dictEntry=KOREAN_DICT[tok.key];
        const isKnown=!!dictEntry;
        const useEntry=dictEntry||{
          base:"Entry coming soon",morph:tok.word+" — not yet catalogued",particle:null,
          uses:[{k:tok.word,e:"(full entry coming in a future update)"}],
          note:"Every Korean word will eventually be in LingoVerse.",level:"?"
        };
        return(
          <span key={ti}
            onClick={e=>{e.stopPropagation();navTo(useEntry,tok.word,tok.stem||tok.word,tok.particle);}}
            style={{
              fontSize:fz,fontWeight:900,display:"inline-block",cursor:"pointer",lineHeight:1.35,
              color:isKnown?(dk?"#C8B8FF":"#7050D8"):(dk?"#5EEAC8":"#0D7D5C"),
              borderBottom:isKnown
                ?(dk?"2px solid rgba(168,144,255,0.6)":"2px solid rgba(112,80,216,0.35)")
                :(dk?"2px solid rgba(94,234,200,0.55)":"2px solid rgba(13,125,92,0.3)"),
              paddingBottom:1,borderRadius:2,transition:"all .1s",
            }}
            onMouseEnter={e=>{e.currentTarget.style.background=isKnown?(dk?"rgba(168,144,255,0.15)":"rgba(112,80,216,0.08)"):(dk?"rgba(94,234,200,0.15)":"rgba(13,125,92,0.08)");}}
            onMouseLeave={e=>{e.currentTarget.style.background="transparent";}}
          >{tok.word}</span>
        );
      })}</>;
    };

    // ── Outer wrapper: full-screen backdrop, flex-centered ──
    return(
      <div onClick={onClose} style={{
        position:"fixed",inset:0,zIndex:99998,
        display:"flex",alignItems:"center",justifyContent:"center",
        background:"rgba(8,6,24,0.62)",
        backdropFilter:"blur(10px)",WebkitBackdropFilter:"blur(10px)"
      }}>
        {/* Main bubble panel */}
        <div onClick={e=>e.stopPropagation()} style={{
          width:"min(560px,calc(100vw - 16px))",maxHeight:"88vh",overflowY:"auto",
          position:"relative",overflow:"hidden",
          borderRadius:26,
          background:dk
            ?"linear-gradient(160deg, rgba(58,36,130,0.98) 0%, rgba(44,26,105,0.98) 45%, rgba(32,18,82,0.99) 100%)"
            :"linear-gradient(160deg, rgba(246,242,255,0.99) 0%, rgba(235,226,255,0.99) 55%, rgba(225,214,255,0.99) 100%)",
          border:dk
            ?"1.5px solid rgba(168,144,255,0.35)"
            :"1.5px solid rgba(168,144,255,0.45)",
          boxShadow:dk
            ?"0 0 0 1px rgba(168,144,255,0.08), 0 32px 80px rgba(0,0,0,0.75), inset 0 1.5px 0 rgba(255,255,255,0.14), inset 0 -2px 0 rgba(0,0,0,0.22)"
            :"0 0 0 1px rgba(255,255,255,0.85), 0 32px 80px rgba(60,24,160,0.2), inset 0 2px 0 rgba(255,255,255,0.98), inset 0 -3px 0 rgba(112,80,216,0.08)",
          fontFamily:"'Nunito','system-ui',sans-serif",
          animation:"bubblePop 0.22s cubic-bezier(0.34,1.56,0.64,1) both"
        }}>

          {/* ── Candy gloss arc ── */}
          <div style={{
            position:"absolute",top:0,left:"4%",right:"4%",height:"40%",
            borderRadius:"0 0 50% 50%",pointerEvents:"none",zIndex:1,
            background:dk
              ?"linear-gradient(180deg, rgba(255,255,255,0.11) 0%, rgba(255,255,255,0.03) 55%, transparent 100%)"
              :"linear-gradient(180deg, rgba(255,255,255,0.82) 0%, rgba(255,255,255,0.22) 50%, transparent 100%)"
          }}/>

          <div style={{position:"relative",zIndex:2,padding:"18px 20px 20px"}}>

            {/* ── BROWSER-TAB HISTORY BAR ── */}
            {history.length>0&&(
              <div style={{
                display:"flex",alignItems:"center",gap:6,marginBottom:14,
                overflowX:"auto",paddingBottom:2,
              }}>
                {history.map((h,hi)=>(
                  <button key={hi} onClick={e=>{
                    e.stopPropagation();
                    // Navigate back to this exact history point
                    setCur(h);
                    setHistory(prev=>prev.slice(0,hi));
                  }} style={{
                    flexShrink:0,
                    background:dk
                      ?"linear-gradient(180deg, rgba(255,255,255,0.12), rgba(255,255,255,0.05))"
                      :"linear-gradient(180deg, rgba(255,255,255,0.95), rgba(240,234,255,0.85))",
                    border:dk?"1px solid rgba(168,144,255,0.25)":"1px solid rgba(168,144,255,0.3)",
                    borderRadius:10,padding:"4px 12px",cursor:"pointer",
                    fontSize:13,fontWeight:800,
                    color:dk?"rgba(200,184,255,0.9)":"#7050D8",
                    boxShadow:dk
                      ?"inset 0 1px 0 rgba(255,255,255,0.1)"
                      :"inset 0 2px 0 rgba(255,255,255,0.9), 0 2px 6px rgba(112,80,216,0.1)",
                    fontFamily:"inherit",
                    transition:"all .1s",
                  }}
                  onMouseEnter={e=>{e.currentTarget.style.background=dk?"linear-gradient(180deg,rgba(168,144,255,0.2),rgba(168,144,255,0.1))":"linear-gradient(180deg,#fff,rgba(230,220,255,0.9))";}}
                  onMouseLeave={e=>{e.currentTarget.style.background=dk?"linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.05))":"linear-gradient(180deg,rgba(255,255,255,0.95),rgba(240,234,255,0.85))";}}
                  >{h.word}</button>
                ))}
                {/* Chevron separator + current */}
                <span style={{color:dk?"rgba(168,144,255,0.4)":"rgba(112,80,216,0.3)",fontSize:12,fontWeight:700,flexShrink:0}}>›</span>
                <span style={{
                  flexShrink:0,fontSize:13,fontWeight:900,
                  color:dk?"rgba(255,255,255,0.9)":"#3A1A90",
                  background:dk?"rgba(168,144,255,0.18)":"rgba(112,80,216,0.1)",
                  borderRadius:10,padding:"4px 12px",
                  border:dk?"1px solid rgba(168,144,255,0.35)":"1px solid rgba(112,80,216,0.2)",
                }}>{word}</span>
              </div>
            )}

            {/* ── TOP ROW: level badge + close ── */}
            <div style={{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:12}}>
              <span style={{
                fontSize:11,fontWeight:800,textTransform:"uppercase",letterSpacing:2,
                color:dk?"rgba(255,255,255,0.88)":"#7050D8",
                background:dk
                  ?"linear-gradient(135deg, rgba(168,144,255,0.25), rgba(140,112,255,0.15))"
                  :"linear-gradient(135deg, rgba(112,80,216,0.12), rgba(140,112,255,0.08))",
                border:dk?"1px solid rgba(168,144,255,0.3)":"1px solid rgba(112,80,216,0.18)",
                borderRadius:8,padding:"3px 10px",
                boxShadow:dk?"inset 0 1px 0 rgba(255,255,255,0.1)":"inset 0 1px 0 rgba(255,255,255,0.9)",
              }}>{entry.level}</span>
              <button onClick={onClose} style={{
                background:"none",border:"none",cursor:"pointer",fontSize:20,lineHeight:1,padding:"2px 4px",
                color:dk?"rgba(200,184,255,0.45)":"rgba(112,80,216,0.3)",
              }}>✕</button>
            </div>

            {/* ── HEADWORD ── */}
            <div style={{marginBottom:10}}>
              <div style={{
                fontSize:48,fontWeight:900,lineHeight:1.0,letterSpacing:-1,
                color:dk?"rgba(255,255,255,0.97)":"#2A0E80",
                textShadow:dk?"0 2px 20px rgba(168,144,255,0.3)":"0 2px 12px rgba(112,80,216,0.12)",
              }}>{word}</div>
              {particle&&<div style={{fontSize:12,color:dk?"rgba(94,234,200,0.8)":"#0D7D5C",fontWeight:700,marginTop:3}}>
                particle: {particle}
              </div>}
            </div>

            {/* ── BASE MEANING ── */}
            <div style={{fontSize:18,fontWeight:800,color:dk?"rgba(240,234,255,0.94)":"#1A0B50",marginBottom:3,lineHeight:1.3}}>{entry.base}</div>

            {/* ── MORPHEME — teal label, clickable Korean ── */}
            {entry.morph&&<div style={{
              fontSize:12,fontWeight:600,lineHeight:1.65,marginBottom:10,
              display:"flex",flexWrap:"wrap",alignItems:"center",gap:4,
              color:dk?"rgba(94,234,200,0.75)":"#0D7D5C",
            }}>
              {bubbleHl(entry.morph,13)}
            </div>}

            {/* ── PARTICLE BADGE — teal on brand ── */}
            {entry.particle&&<div style={{
              display:"flex",flexWrap:"wrap",alignItems:"center",gap:4,
              background:dk?"rgba(46,205,167,0.13)":"rgba(46,205,167,0.1)",
              border:dk?"1px solid rgba(80,224,192,0.3)":"1px solid rgba(46,205,167,0.28)",
              borderRadius:10,padding:"6px 14px",marginBottom:14,
              boxShadow:dk?"inset 0 1px 0 rgba(255,255,255,0.05)":"inset 0 1px 0 rgba(255,255,255,0.8)",
            }}>
              <span style={{fontSize:11,fontWeight:700,color:dk?"rgba(94,234,200,0.65)":"#0D7D5C",opacity:0.8}}>Particle: </span>
              {bubbleHl(entry.particle,13)}
            </div>}

            {/* ── DIVIDER ── */}
            <div style={{height:1,background:dk?"rgba(168,144,255,0.15)":"rgba(112,80,216,0.12)",marginBottom:14}}/>

            {/* ── USAGE EXAMPLES — each sentence its own compound-style bubble ── */}
            <div style={{display:"flex",flexDirection:"column",gap:10}}>
              {entry.uses.map((u,i)=>(
                <div key={i} style={{
                  background:dk
                    ?"linear-gradient(180deg, rgba(123,94,232,0.22) 0%, rgba(100,80,200,0.14) 40%, rgba(80,60,180,0.08) 100%)"
                    :"linear-gradient(180deg, rgba(200,190,255,0.45) 0%, rgba(220,210,255,0.3) 50%, rgba(235,230,255,0.18) 100%)",
                  borderRadius:18,padding:"12px 16px",position:"relative",overflow:"hidden",
                  border:dk?"1.5px solid rgba(123,94,232,0.3)":"1.5px solid rgba(180,165,240,0.4)",
                  boxShadow:dk
                    ?"0 6px 20px rgba(0,0,0,0.3), 0 0 14px rgba(123,94,232,0.2), inset 0 2px 0 rgba(255,255,255,0.07), inset 0 -3px 0 rgba(0,0,0,0.12)"
                    :"0 6px 24px rgba(123,94,232,0.1), 0 0 12px rgba(180,165,240,0.15), inset 0 2px 0 rgba(255,255,255,0.75), inset 0 -3px 0 rgba(123,94,232,0.05)",
                }}>
                  {/* Gloss arc per bubble */}
                  <div style={{position:"absolute",top:0,left:"5%",right:"5%",height:"42%",
                    borderRadius:"0 0 50% 50%",pointerEvents:"none",
                    background:dk
                      ?"linear-gradient(180deg,rgba(255,255,255,0.07)0%,rgba(255,255,255,0.01)60%,transparent 100%)"
                      :"linear-gradient(180deg,rgba(255,255,255,0.55)0%,rgba(255,255,255,0.1)60%,transparent 100%)"
                  }}/>
                  <div style={{position:"relative",display:"flex",flexWrap:"wrap",alignItems:"center",gap:3,marginBottom:4}}>
                    {bubbleHl(u.k,17)}
                  </div>
                  <div style={{fontSize:13,fontWeight:500,lineHeight:1.4,
                    color:dk?"rgba(200,190,255,0.65)":"var(--gray-500)"
                  }}>{u.e}</div>
                </div>
              ))}
            </div>

            {/* ── PEDAGOGICAL NOTE — purple-tinted, no gold ── */}
            {entry.note&&<>
              <div style={{height:1,background:dk?"rgba(168,144,255,0.12)":"rgba(112,80,216,0.1)",margin:"14px 0 10px"}}/>
              <div style={{
                fontSize:12.5,lineHeight:1.7,
                color:dk?"rgba(190,175,255,0.7)":"rgba(80,55,160,0.65)",
                background:dk?"rgba(168,144,255,0.07)":"rgba(112,80,216,0.04)",
                borderRadius:10,padding:"10px 14px",
                display:"flex",flexWrap:"wrap",alignItems:"center",gap:4,
                fontStyle:"italic",
              }}>{bubbleHl(entry.note,13)}</div>
            </>}

          </div>
        </div>
      </div>
    );
  };

  // ════════════════════════════════════════════════════════════
  // koreanHl — Korean-aware version of smartHl: makes every word clickable
  // ════════════════════════════════════════════════════════════
  const koreanHl=(text)=>{
    if(!text||typeof text!=="string") return text;
    // Check if text has Korean
    if(!/[\uAC00-\uD7AF]/.test(text)) return smartHl(text);
    const tokens=tokenizeKorean(text);
    return tokens.map((tok,ti)=>{
      if(!tok.isKorean||tok.word===" ") return <span key={ti}>{tok.word}</span>;
      const entry=KOREAN_DICT[tok.key];
      const isKnown=!!entry;
      const useEntry2=entry||{
          base:"Entry coming soon",morph:tok.word+" — not yet catalogued",particle:null,
          uses:[{k:tok.word,e:"(full entry coming in a future update)"}],
          note:"Every Korean word will be in LingoVerse soon.",level:"?"
        };
      const isJamo=tok.word.length===1&&/[\u3130-\u318F]/.test(tok.word);
      return(
        <span key={ti}
          onClick={(e)=>{
            e.stopPropagation();
            setWordBubble({key:tok.key,word:tok.word,stem:tok.stem,particle:tok.particle,entry:useEntry2});
          }}
          style={{
            fontSize:isJamo?13:18,fontWeight:isJamo?600:700,lineHeight:1.2,
            cursor:isKnown?"pointer":"default",
            color:"var(--purple-accent-text)",
            borderBottom:isKnown?(dk?"1.5px dashed rgba(200,190,255,0.5)":"1.5px dashed rgba(112,80,216,0.4)"):"none",
            paddingBottom:isKnown?1:0,transition:"all .1s",borderRadius:2,
          }}
          onMouseEnter={(e)=>{if(isKnown)e.currentTarget.style.background=dk?"rgba(168,144,255,0.12)":"rgba(112,80,216,0.07)";}}
          onMouseLeave={(e)=>{e.currentTarget.style.background="transparent";}}
        >{tok.word}</span>
      );
    });
  };

  // ── Score Circle — animated percentage ring for lesson done screen ──


  // ── Translation Reveal — collapsible per-line translation in story tips ──
  const TranslationReveal=({text,hl})=>{
    const [show,setShow]=useState(false);
    return <div style={{margin:"2px 0"}}>
      {show?<div className="anim" style={{background:"rgba(46,205,167,0.06)",borderRadius:8,padding:"6px 10px",display:"flex",alignItems:"center",gap:8}}>
        <span style={{fontSize:13,color:"var(--teal-dark)",fontWeight:600,lineHeight:1.5}}>{hl(text)}</span>
        <button onClick={()=>setShow(false)} style={{background:"none",border:"none",cursor:"pointer",fontSize:10,color:"var(--gray-300)",flexShrink:0,padding:2}}>✕</button>
      </div>
      :<button onClick={()=>setShow(true)} style={{background:"rgba(123,94,232,0.04)",border:"1.5px dashed rgba(123,94,232,0.15)",borderRadius:8,padding:"6px 12px",cursor:"pointer",display:"flex",alignItems:"center",gap:6,width:"100%",transition:"all .15s"}}>
        <span style={{fontSize:12,color:"var(--purple-accent-text)",fontWeight:600}}>👁 Tap to reveal translation</span>
      </button>}
    </div>;
  };

  const smartHl=(text)=>{
    if(!text||typeof text!=="string") return text;
    const parts=text.split(/([^\u0000-\u007F]+)/g);
    return parts.map((seg,si)=>{
      if(/[\u3130-\u318F\uAC00-\uD7AF\u0600-\u06FF]/.test(seg))
        return <span key={si} style={{fontSize:22,fontWeight:800,color:"var(--purple-accent-text)",lineHeight:1.2}}>{seg}</span>;
      const tokens=seg.split(/((?:'[a-zA-Z]{2,12}')|\b(?:RIGHT|LEFT|TOP|BOTTOM|BELOW|ABOVE|UP|DOWN|HORIZONTAL|VERTICAL|ONLY|NEVER|ALWAYS|NOT|SILENT|INITIAL|INSIDE|ZERO|MUST)\b)/g);
      return tokens.map((tok,ti)=>{
        if(!tok) return null;
        if(/^'[a-zA-Z]{2,12}'$/.test(tok))
          return <span key={`${si}-${ti}`} style={{color:"var(--teal-text)",fontWeight:700}}>{tok}</span>;
        if(TEAL_WORDS.test(tok))
          return <span key={`${si}-${ti}`} style={{color:"var(--teal-text)",fontWeight:700}}>{tok}</span>;
        if(SOUND_VALS.test(tok)){
          SOUND_VALS.lastIndex=0;
          const sub=tok.split(/((?:ah|oh|oo|uh|ee|ng))/gi);
          return sub.map((s,ski)=>/^(ah|oh|oo|uh|ee|ng)$/i.test(s)?<span key={`${si}-${ti}-${ski}`} style={{color:"var(--teal-text)",fontWeight:700}}>{s}</span>:<span key={`${si}-${ti}-${ski}`}>{s}</span>);
        }
        return <span key={`${si}-${ti}`}>{tok}</span>;
      });
    });
  };

  // ── Split Korean sentence from English translation (on \n) ──
  // Returns { korean: "Korean line", english: "English line(s)" or null }
  const splitKoEn=(text)=>{
    if(!text||typeof text!=="string") return {korean:text,english:null};
    const lines=text.split("\n");
    const korean=lines[0];
    const rest=lines.slice(1).filter(l=>l.trim()).join("\n");
    return {korean,english:rest||null};
  };

  // Render English translation below Korean — toggleable
  // startVisible: true for drag_fill (need translation), false for fb/mc (try without)
  const renderEnglishBelow=(english,startVisible)=>{
    if(!english) return null;
    const visible=startVisible||showTrans;
    if(!visible) return <div style={{marginTop:6}}><button onClick={()=>setShowTrans(true)} style={{background:"none",border:"none",color:"var(--gray-300)",fontSize:12,cursor:"pointer",fontFamily:"'Nunito','system-ui',sans-serif",padding:"2px 8px",borderRadius:6,transition:"all .15s"}} onMouseEnter={e=>{e.target.style.color="var(--purple-accent-text)";}} onMouseLeave={e=>{e.target.style.color="var(--gray-300)";}}>👁 Show translation</button></div>;
    return <div style={{marginTop:6,cursor:startVisible?"default":"pointer"}} onClick={()=>{if(!startVisible)setShowTrans(false);}}><div style={{fontSize:14,color:"var(--gray-700)",fontWeight:500,lineHeight:1.45,fontFamily:"'Nunito','system-ui',sans-serif"}}>{english}</div></div>;
  };

  // ── Shared example renderer: operators gray, non-ASCII purple ──
  const renderLetterExample=(text)=>{
    const parts=text.split(/(\s*[+=→]\s*)/g);
    return parts.map((part,i)=>{
      const trimmed=part.trim();
      if(trimmed==="+"||trimmed==="="||trimmed==="→")
        return <span key={i} style={{fontSize:16,fontWeight:500,color:"var(--gray-400)",margin:"0 4px"}}>{trimmed}</span>;
      if(/[^\u0000-\u007F]/.test(trimmed))
        return <span key={i} style={{fontSize:22,fontWeight:800,color:"var(--purple-accent-text)"}}>{trimmed}</span>;
      if(trimmed)
        return <span key={i} style={{fontSize:14,fontWeight:600,color:"var(--gray-500)"}}>{trimmed}</span>;
      return null;
    });
  };

  // ── Shared syllable block diagram renderer ──
  const renderDiagram=(D)=>{
    if(!D) return null;
    const cBg="#FECACA",cTx="#991B1B",vBg="#BBF7D0",vTx="#166534",bBg="#BFDBFE",bTx="#1E40AF";
    const bCell=(label,bg,tx,extra)=>(<div style={{background:bg,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"10px 6px",borderRight:"2px solid #1F2937",borderBottom:"2px solid #1F2937",...(extra||{})}}><span style={{fontSize:20,fontWeight:900,color:tx}}>{label}</span></div>);
    const bEx=(hangul,rom)=>(<div style={{textAlign:"center",marginTop:10}}><span style={{fontSize:44,fontWeight:800,color:"var(--gray-800)"}}>{hangul}</span><div style={{fontSize:13,color:"var(--gray-400)",fontWeight:600,marginTop:2}}>{rom}</div></div>);
    const bWrap=(children,w)=>(<div style={{border:"3px solid #1F2937",borderRadius:6,overflow:"hidden",width:w||160,margin:"0 auto"}}>{children}</div>);
    const blocks={
      cv_v:(<div><div style={{fontSize:11,fontWeight:700,textAlign:"center",marginBottom:8,color:"var(--purple-accent-text)",textTransform:"uppercase",letterSpacing:1}}>CV (vertical vowel)</div>{bWrap(<div style={{display:"grid",gridTemplateColumns:"1fr 1fr"}}>{bCell("C",cBg,cTx)}{bCell("V",vBg,vTx,{borderRight:"none"})}</div>)}{bEx("가","ga")}</div>),
      cv_h:(<div><div style={{fontSize:11,fontWeight:700,textAlign:"center",marginBottom:8,color:"var(--purple-accent-text)",textTransform:"uppercase",letterSpacing:1}}>CV (horizontal vowel)</div>{bWrap(<div style={{display:"grid",gridTemplateColumns:"1fr"}}>{bCell("C",cBg,cTx,{borderRight:"none"})}{bCell("V",vBg,vTx,{borderRight:"none",borderBottom:"none"})}</div>,120)}{bEx("고","go")}</div>),
      cvc:(<div><div style={{fontSize:11,fontWeight:700,textAlign:"center",marginBottom:8,color:"var(--purple-accent-text)",textTransform:"uppercase",letterSpacing:1}}>CVC (with 받침)</div>{bWrap(<div style={{display:"grid",gridTemplateColumns:"1fr 1fr"}}>{bCell("C",cBg,cTx)}{bCell("V",vBg,vTx,{borderRight:"none"})}<div style={{gridColumn:"1 / -1",background:bBg,display:"flex",alignItems:"center",justifyContent:"center",padding:"10px 6px",borderTop:"2px solid #1F2937"}}><span style={{fontSize:20,fontWeight:900,color:bTx}}>C₂</span></div></div>)}{bEx("간","gan")}</div>),
      cvcc:(<div><div style={{fontSize:11,fontWeight:700,textAlign:"center",marginBottom:8,color:"var(--purple-accent-text)",textTransform:"uppercase",letterSpacing:1}}>CVCC (double 받침)</div>{bWrap(<div style={{display:"grid",gridTemplateColumns:"1fr 1fr"}}>{bCell("C",cBg,cTx)}{bCell("V",vBg,vTx,{borderRight:"none"})}<div style={{background:bBg,display:"flex",alignItems:"center",justifyContent:"center",padding:"10px 6px",borderRight:"2px solid #1F2937",borderTop:"2px solid #1F2937"}}><span style={{fontSize:20,fontWeight:900,color:bTx}}>C₃</span></div><div style={{background:bBg,display:"flex",alignItems:"center",justifyContent:"center",padding:"10px 6px",borderTop:"2px solid #1F2937"}}><span style={{fontSize:20,fontWeight:900,color:bTx}}>C₄</span></div></div>)}{bEx("값","gap")}</div>),
      cv_combo:(<div><div style={{fontSize:11,fontWeight:700,textAlign:"center",marginBottom:8,color:"var(--purple-accent-text)",textTransform:"uppercase",letterSpacing:1}}>CV (combo vowel)</div>{bWrap(<div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gridTemplateRows:"1fr 1fr"}}>{bCell("C",cBg,cTx)}<div style={{background:vBg,display:"flex",alignItems:"center",justifyContent:"center",padding:"10px 6px",gridRow:"1 / 3",borderBottom:"none"}}><span style={{fontSize:20,fontWeight:900,color:vTx}}>V₂</span></div>{bCell("V₁",vBg,vTx)}</div>)}{bEx("귀","gwi")}</div>),
    };
    return(<div style={{background:"var(--card-bg)",border:"2px solid rgba(255,255,255,0.55)",borderLeft:"3px solid var(--purple-accent)",borderRadius:20,padding:"20px 22px",marginBottom:16}}>
      <div style={{fontSize:10,fontWeight:700,color:"var(--purple-accent-text)",textTransform:"uppercase",letterSpacing:2,marginBottom:14,textAlign:"center"}}>Block Structure</div>
      {D==="all"?(<div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:18}}>{blocks.cv_v}{blocks.cv_h}{blocks.cv_combo}</div>):blocks[D]||null}
    </div>);
  };

  // ═══ INTRO — Board-style (v2 lessons with board:true) ═══
  if(st.type==="intro" && lesson.board) return(
    <div className="anim" key={si}>
      <ProgressBar/>
      {wordBubble&&<WordBubble entry={wordBubble.entry} word={wordBubble.word} stem={wordBubble.stem} particle={wordBubble.particle} onClose={()=>setWordBubble(null)}/>}
      <div style={{maxWidth:460,margin:"0 auto"}}>
        {/* Board-style intro card — matches teach card visual language */}
        <div style={{background:"var(--card-bg)",borderRadius:22,border:"2px solid rgba(255,255,255,0.45)",borderLeft:"4px solid var(--purple-accent)",overflow:"hidden",marginBottom:16,...glass}}>

          {/* Top strip — emoji + lesson label */}
          <div style={{background:"linear-gradient(135deg, rgba(123,94,232,0.06), rgba(46,205,167,0.04))",padding:"14px 22px 12px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <span style={{fontSize:32}}><BrandIcon name={lesson.icon} size={32}/></span>
            <span style={{fontSize:10,fontWeight:700,textTransform:"uppercase",letterSpacing:2,color:"var(--purple-accent-text)"}}>Lesson</span>
          </div>

          {/* Title — serif, like board teach cards */}
          <div style={{textAlign:"center",padding:"16px 28px 8px"}}>
            <h2 style={{fontSize:26,fontWeight:800,color:"var(--gray-800)",lineHeight:1.2,fontFamily:"'Quicksand','system-ui',sans-serif",margin:0}}>{st.title}</h2>
          </div>

          {/* Description — line-aware with candy bubbles */}
          <div style={{textAlign:"center",padding:"4px 22px 16px"}}>
            {(()=>{
              const dL=(st.desc||"").split(/\\n|\n/);
              const o=[];let i=0;
              while(i<dL.length){
                const ln=dL[i],nx=dL[i+1]||"";
                const hk=/[\uAC00-\uD7AF\u3130-\u318F]/.test(ln.trim());
                if(hk&&nx.trim().startsWith("→")&&ln.trim()){
                  const tr=nx.trim().slice(1).trim();
                  o.push(<div key={i} style={{background:dk?"linear-gradient(180deg,rgba(123,94,232,0.22),rgba(80,60,180,0.08))":"linear-gradient(180deg,rgba(200,190,255,0.45),rgba(235,230,255,0.18))",borderRadius:16,padding:"14px 18px",margin:"10px auto",maxWidth:320,border:dk?"1.5px solid rgba(123,94,232,0.3)":"1.5px solid rgba(180,165,240,0.4)",boxShadow:dk?"0 4px 16px rgba(0,0,0,0.2)":"0 4px 18px rgba(123,94,232,0.08)"}}><div style={{fontSize:22,fontWeight:800,color:"var(--purple-accent-text)",lineHeight:1.3,marginBottom:6}}>{smartHl(ln.trim())}</div><div style={{fontSize:13,fontWeight:500,color:dk?"rgba(200,190,255,0.6)":"var(--gray-500)"}}>{smartHl(tr)}</div></div>);
                  i+=2;continue;
                }
                if(!ln.trim()){o.push(<div key={i} style={{height:14}}/>);i++;continue;}
                o.push(<p key={i} style={{fontSize:14,color:"var(--purple-accent-text)",fontWeight:600,lineHeight:1.6,margin:"4px 0"}}>{ln.split(/([^\u0000-\u007F]+)/g).map((p,pi)=>/[\u3130-\u318F\uAC00-\uD7AF\u0600-\u06FF]/.test(p)?<span key={pi} style={{fontSize:18,fontWeight:800}}>{p}</span>:<span key={pi}>{p}</span>)}</p>);
                i++;
              }
              return o;
            })()}
          </div>

          {/* Goals — clean rows with green bullets */}
          {st.goals&&st.goals.length>0&&<div style={{borderTop:"1.5px solid var(--gray-100)",padding:"14px 22px"}}>
            <div style={{fontSize:10,fontWeight:700,textTransform:"uppercase",letterSpacing:2,color:"var(--purple-accent-text)",marginBottom:10}}>{t("le_in_this_lesson",baseLang)}</div>
            {st.goals.map((g,i)=><div key={i} style={{fontSize:14,color:"var(--teal-text)",fontWeight:600,padding:"5px 0",display:"flex",alignItems:"center",gap:8,...(/[\u0600-\u06FF]/.test(g)?{direction:"rtl"}:{})}}><span style={{color:"var(--teal-text)",fontWeight:800,fontSize:12}}>▸</span><span>{smartHl(g)}</span></div>)}
          </div>}
        </div>

        {/* Begin button — glossy candy style */}
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:12,marginTop:18}}>
          {si>0&&<NavArrow onClick={goBack} isBack/>}
          <button className="btn" style={{fontSize:16,padding:"16px 36px",borderRadius:20,background:"linear-gradient(180deg, #B8A8FA 0%, #9B7AE8 20%, #7B5EE8 55%, #6545C8 85%, #5840B8 100%)",color:"white",fontWeight:800,border:"none",cursor:"pointer",boxShadow:"0 8px 24px rgba(123,94,232,0.5), inset 0 2px 0 rgba(255,255,255,0.4), inset 0 -4px 0 rgba(0,0,0,0.15)",transition:"all .15s",position:"relative",overflow:"hidden",letterSpacing:0.5}} onClick={goNext} onMouseEnter={e=>{e.currentTarget.style.transform="scale(1.05)";}} onMouseLeave={e=>{e.currentTarget.style.transform="scale(1)";}}>
            <span style={{position:"absolute",top:0,left:"8%",right:"8%",height:"40%",borderRadius:"0 0 50% 50%",background:"linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.08) 100%)",pointerEvents:"none"}}/>
            <span style={{position:"relative",zIndex:1}}>Begin</span>
          </button>
        </div>
      </div>
    </div>
  );

  // ═══ INTRO — Legacy style (non-board lessons) ═══
  if(st.type==="intro") return(
    <div className="anim" key={si}>
      <ProgressBar/>
      <div style={{textAlign:"center",padding:"20px 0"}}>
        <div style={{width:80,height:80,borderRadius:20,background:`linear-gradient(135deg,${unit.color},${unit.color}bb)`,display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 20px",boxShadow:`0 8px 24px ${unit.color}40`}}><BrandIcon name={lesson.icon} size={38}/></div>
        <h2 className="hd" style={{fontSize:26,fontWeight:800,marginBottom:8}}>{st.title}</h2>
        {(()=>{
          const dL=(st.desc||"").split(/\\n|\n/);
          const o=[];let i=0;
          while(i<dL.length){
            const ln=dL[i],nx=dL[i+1]||"";
            const hk=/[\uAC00-\uD7AF\u3130-\u318F]/.test(ln.trim());
            if(hk&&nx.trim().startsWith("→")&&ln.trim()){
              const tr=nx.trim().slice(1).trim();
              o.push(<div key={i} style={{background:dk?"linear-gradient(180deg,rgba(123,94,232,0.22),rgba(80,60,180,0.08))":"linear-gradient(180deg,rgba(200,190,255,0.45),rgba(235,230,255,0.18))",borderRadius:16,padding:"14px 18px",margin:"10px auto",maxWidth:320,border:dk?"1.5px solid rgba(123,94,232,0.3)":"1.5px solid rgba(180,165,240,0.4)",boxShadow:dk?"0 4px 16px rgba(0,0,0,0.2)":"0 4px 18px rgba(123,94,232,0.08)"}}><div style={{fontSize:22,fontWeight:800,color:"var(--purple-accent-text)",lineHeight:1.3,marginBottom:6}}>{smartHl(ln.trim())}</div><div style={{fontSize:13,fontWeight:500,color:dk?"rgba(200,190,255,0.6)":"var(--gray-500)"}}>{smartHl(tr)}</div></div>);
              i+=2;continue;
            }
            if(!ln.trim()){o.push(<div key={i} style={{height:14}}/>);i++;continue;}
            o.push(<p key={i} style={{color:"var(--gray-500)",fontSize:15,lineHeight:1.7,maxWidth:440,margin:"4px auto"}}>{smartHl(ln)}</p>);
            i++;
          }
          return <div style={{textAlign:"center",marginBottom:24}}>{o}</div>;
        })()}
        <div style={{background:"var(--blue-pale)",borderRadius:"var(--radius)",padding:"18px 24px",display:"inline-block",textAlign:"left",border:"2px solid var(--blue-light)"}}>
          <div style={{fontSize:12,fontWeight:700,color:"var(--blue)",textTransform:"uppercase",letterSpacing:1.5,marginBottom:8}}>{t("le_in_this_lesson",baseLang)}</div>
          {st.goals.map((g,i)=><div key={i} style={{fontSize:14,color:"var(--teal-text)",fontWeight:600,padding:"4px 0",display:"flex",alignItems:"center",gap:8,...(/[\u0600-\u06FF]/.test(g)?{direction:"rtl"}:{})}}><span style={{color:"var(--teal-text)",fontWeight:800}}>✓</span>{g.split(/([^\u0000-\u007F]+)/g).map((part,pi)=>/[\u0600-\u06FF\u3130-\u318F\uAC00-\uD7AF]/.test(part)?<span key={pi} style={{fontSize:20,fontWeight:800,color:"var(--purple-accent-text)"}}>{part}</span>:<span key={pi}>{part}</span>)}</div>)}
        </div>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:12,marginTop:28}}>
          {si>0&&<NavArrow onClick={goBack} isBack/>}
          <button className="btn" style={{fontSize:16,padding:"16px 36px",background:"linear-gradient(180deg, #B8A8FA 0%, #9B7AE8 20%, #7B5EE8 55%, #6545C8 85%, #5840B8 100%)",color:"white",fontWeight:800,border:"none",cursor:"pointer",borderRadius:20,boxShadow:"0 8px 24px rgba(123,94,232,0.5), inset 0 2px 0 rgba(255,255,255,0.4), inset 0 -4px 0 rgba(0,0,0,0.15)",transition:"all .15s",letterSpacing:0.5}} onClick={goNext} onMouseEnter={e=>{e.currentTarget.style.transform="scale(1.05)";}} onMouseLeave={e=>{e.currentTarget.style.transform="scale(1)";}}>Let's go!</button>
        </div>
      </div>
    </div>
  );

  // ═══ VOCAB_REF — Database lookup (NEW) ═══
  if(st.type==="vocab_ref"){
    const v=getVocab(st.id);
    if(!v)return(<div className="anim"key={si}><ProgressBar/><div style={{maxWidth:460,margin:"0 auto",padding:32,background:"#fee",borderRadius:16,textAlign:"center"}}><div style={{fontSize:48}}>⚠️</div><div style={{fontSize:20,fontWeight:"bold",color:"#dc2626",marginTop:12}}>Vocab Not Found</div><div style={{fontSize:14,color:"#64748b",marginTop:8}}>ID: <code>{st.id}</code></div><button onClick={next}className="btn-primary"style={{marginTop:20,width:"100%"}}>Continue</button></div></div>);
    const w=toTeach(v);
    const isNew=!user.lw.has(w.nl);
    return(<div className="anim"key={si}><ProgressBar/><div style={{maxWidth:460,margin:"0 auto"}}>{isNew&&<div style={{background:"linear-gradient(135deg, var(--gold), #E8960A)",borderRadius:24,padding:"3px",marginBottom:20,boxShadow:"0 6px 24px rgba(245,166,35,0.25)"}}><div style={{background:"var(--gold)",borderRadius:"22px 22px 0 0",padding:"8px 0",textAlign:"center"}}><span style={{color:"white",fontSize:12,fontWeight:800,textTransform:"uppercase",letterSpacing:3}}>✨ New Word ✨</span></div><div style={{background:"var(--card-bg)",borderRadius:"0 0 21px 21px",overflow:"hidden",position:"relative"}}><div style={{position:"absolute",top:-15,right:-15,width:60,height:60,borderRadius:"50%",background:"rgba(74,143,231,0.06)"}}/><div style={{position:"absolute",bottom:20,left:-10,width:40,height:40,borderRadius:"50%",background:"rgba(46,205,167,0.06)"}}/><div style={{position:"absolute",top:12,right:14,display:"flex",gap:6,zIndex:2}}><button onClick={()=>setShowPhonetic(!showPhonetic)}style={{width:34,height:34,borderRadius:10,background:showPhonetic?"var(--blue-light)":"var(--panel-bg)",border:`1.5px solid ${showPhonetic?"var(--blue)":"var(--gray-200)"}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:16,cursor:"pointer",transition:"all .15s",backdropFilter:"blur(4px)"}}>🔤</button><SpeakerButton text={w.nl}lang={LANG_META[lang]?.ttsLocale||"en-US"}size={16}showToast={showToast}/></div>{w.img&&<div style={{textAlign:"center",paddingTop:24}}><div style={{display:"inline-flex",alignItems:"center",justifyContent:"center",width:80,height:80,borderRadius:22,background:"var(--card-bg)",boxShadow:"var(--card-shadow)",fontSize:36,lineHeight:1}}>{w.img}</div></div>}<div style={{textAlign:"center",padding:"18px 28px 10px"}}>{(()=>{const art=getArticle(w.nl,lang);const c=ARTICLE_COLORS[art];return(<>{art!=="none"&&<div style={{marginBottom:6}}><span style={{display:"inline-block",background:c.pill,color:c.pillText,fontSize:12,fontWeight:800,borderRadius:10,padding:"3px 14px",textTransform:"uppercase",letterSpacing:1.5}}>{art}</span></div>}<div style={{display:"inline-block",background:c.bg,borderRadius:18,padding:"12px 32px",boxShadow:`0 4px 16px ${c.shadow}`,marginBottom:10}}><span className="hd"style={{fontSize:36,fontWeight:800,color:"white",lineHeight:1.1}}>{cap(w.nl)}</span></div></>);})()}</div>{showPhonetic&&<div className="anim"style={{textAlign:"center",marginBottom:8}}><span style={{display:"inline-block",background:"rgba(74,143,231,0.08)",borderRadius:14,padding:"4px 16px",fontSize:14,color:"var(--blue)",fontWeight:600}}>/{w.phonetic}/</span></div>}<div style={{textAlign:"center",paddingBottom:20}}><div style={{display:"inline-block",background:"linear-gradient(135deg, var(--teal), var(--teal-dark))",borderRadius:14,padding:"8px 24px",boxShadow:"0 3px 12px rgba(46,205,167,0.25)"}}><span style={{fontSize:18,color:"white",fontWeight:700}}>{cap(w.en)}</span></div></div><div style={{background:"var(--panel-bg)",padding:"16px 22px",borderTop:"1.5px solid rgba(74,143,231,0.08)"}}><div style={{background:"var(--card-bg)",borderRadius:14,padding:"12px 16px",boxShadow:"var(--card-shadow)"}}><div style={{fontSize:11,fontWeight:700,color:"var(--gold-dark)",textTransform:"uppercase",letterSpacing:1.5,marginBottom:6}}>💬 In context</div><div style={{fontSize:15,color:"var(--gray-800)",fontWeight:600,marginBottom:3,lineHeight:1.5,display:"flex",flexWrap:"wrap",alignItems:"center",gap:6}}>{/[\uAC00-\uD7AF]/.test(w.example||"")?koreanHl(w.example):<span>"{w.example}"</span>}<SpeakerButton text={w.example}lang={LANG_META[lang]?.ttsLocale||"en-US"}size={14}showToast={showToast}/></div><div style={{fontSize:13,color:"var(--gray-400)",fontStyle:"italic"}}>"{w.exampleEn}"</div></div></div></div></div>}{!isNew&&<div style={{background:"var(--card-bg)",borderRadius:24,border:"2px solid rgba(255,255,255,0.55)",boxShadow:"0 4px 16px rgba(0,0,0,0.04)",marginBottom:20,overflow:"hidden",position:"relative"}}><div style={{position:"absolute",top:12,right:14,display:"flex",gap:6,zIndex:2}}><button onClick={()=>setShowPhonetic(!showPhonetic)}style={{width:30,height:30,borderRadius:8,background:showPhonetic?"var(--blue-light)":"var(--panel-bg)",border:`1.5px solid ${showPhonetic?"var(--blue)":"var(--gray-200)"}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:14,cursor:"pointer",transition:"all .15s"}}>🔤</button><SpeakerButton text={w.nl}lang={LANG_META[lang]?.ttsLocale||"en-US"}size={14}showToast={showToast}/></div>{w.img&&<div style={{textAlign:"center",paddingTop:24}}><div style={{display:"inline-flex",alignItems:"center",justifyContent:"center",width:72,height:72,borderRadius:20,background:"var(--card-bg)",boxShadow:"var(--card-shadow)",fontSize:32,lineHeight:1}}>{w.img}</div></div>}<div style={{textAlign:"center",paddingTop:w.img?12:24}}><span style={{display:"inline-block",background:"var(--gray-200)",color:"var(--gray-500)",fontSize:10,fontWeight:700,textTransform:"uppercase",letterSpacing:2,padding:"4px 14px",borderRadius:16}}>Review</span></div><div style={{textAlign:"center",padding:"14px 28px 10px"}}>{(()=>{const art=getArticle(w.nl,lang);const c=ARTICLE_COLORS[art];return(<>{art!=="none"&&<div style={{marginBottom:6}}><span style={{display:"inline-block",background:c.pill,color:c.pillText,fontSize:11,fontWeight:700,borderRadius:8,padding:"2px 10px",textTransform:"uppercase",letterSpacing:1}}>{art}</span></div>}<div style={{display:"inline-block",background:c.bg,borderRadius:16,padding:"10px 28px",boxShadow:`0 3px 12px ${c.shadow}`,marginBottom:8}}><span className="hd"style={{fontSize:30,fontWeight:800,color:"white",lineHeight:1.1}}>{cap(w.nl)}</span></div></>);})()}</div>{showPhonetic&&<div className="anim"style={{textAlign:"center",marginBottom:8}}><span style={{display:"inline-block",background:"rgba(74,143,231,0.08)",borderRadius:12,padding:"3px 14px",fontSize:13,color:"var(--blue)",fontWeight:600}}>/{w.phonetic}/</span></div>}<div style={{textAlign:"center",paddingBottom:16}}><div style={{display:"inline-block",background:"linear-gradient(135deg, var(--teal), var(--teal-dark))",borderRadius:12,padding:"6px 20px",boxShadow:"0 2px 10px rgba(46,205,167,0.2)"}}><span style={{fontSize:16,color:"white",fontWeight:700}}>{cap(w.en)}</span></div></div><div style={{background:"var(--panel-bg)",padding:"14px 20px",borderTop:"1.5px solid rgba(74,143,231,0.08)"}}><div style={{background:"var(--card-bg)",borderRadius:12,padding:"10px 14px",boxShadow:"var(--card-shadow)"}}><div style={{fontSize:10,fontWeight:700,color:"var(--gold-dark)",textTransform:"uppercase",letterSpacing:1.2,marginBottom:5}}>💬 In context</div><div style={{fontSize:14,color:"var(--gray-800)",fontWeight:600,marginBottom:2,lineHeight:1.5,display:"flex",flexWrap:"wrap",alignItems:"center",gap:6}}>{/[\uAC00-\uD7AF]/.test(w.example||"")?koreanHl(w.example):<span>"{w.example}"</span>}<SpeakerButton text={w.example}lang={LANG_META[lang]?.ttsLocale||"en-US"}size={13}showToast={showToast}/></div><div style={{fontSize:12,color:"var(--gray-400)",fontStyle:"italic"}}>"{w.exampleEn}"</div></div></div></div>}{w.note&&<div style={{background:dk?"var(--gold-bg)":"linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%)",borderRadius:16,padding:"14px 20px",marginBottom:20,boxShadow:"0 2px 12px rgba(245,166,35,0.15)"}}><div style={{fontSize:11,fontWeight:800,color:"var(--gold-dark)",textTransform:"uppercase",letterSpacing:1.5,marginBottom:6}}><AppIcon name="lightbulb" size={20} style={{marginRight:5}}/>Note</div><div style={{fontSize:14,color:"var(--gray-700)",lineHeight:1.6}}>{w.note}</div></div>}<button onClick={()=>{if(!user.lw.has(w.nl)){setUser(u=>({...u,lw:new Set([...u.lw,w.nl])}));}next();}}className="btn-primary"style={{width:"100%"}}>Continue</button></div></div>);
  }

  // ═══ TEACH — Multi-kind card (word / letter / info / idiom) ═══
  const isNew = st.type==="teach" && !user.lw.has(st.nl);
  const teachKind = st.kind || "word"; // "word" | "letter" | "info" | "idiom" | "grammar" | "phrase"
  const ttsLoc = LANG_META[lang]?.ttsLocale||"en-US";
  const teachLabel = teachKind==="letter"?"New Letter":teachKind==="info"?"Concept":teachKind==="idiom"?"New Expression":teachKind==="grammar"?"Grammar Pattern":teachKind==="phrase"?"Key Phrase":"New Word";

  // ── INFO card — board-style structural/concept card ──
  if(st.type==="teach" && teachKind==="info") {
    return(
    <div className="anim" key={si}>
      <ProgressBar/>
      <div style={{maxWidth:460,margin:"0 auto"}}>
        {/* Main card — board style */}
        <div style={{background:"var(--card-bg)",borderRadius:22,border:"2px solid rgba(255,255,255,0.45)",borderLeft:"4px solid var(--purple-accent)",overflow:"hidden",marginBottom:16,...glass}}>
          {/* Top strip */}
          <div style={{background:"linear-gradient(135deg, rgba(123,94,232,0.06), rgba(46,205,167,0.04))",padding:"12px 20px 10px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <span style={{fontSize:10,fontWeight:700,textTransform:"uppercase",letterSpacing:2,color:"var(--purple-accent-text)"}}>{teachLabel}</span>
            {st.nl&&/[^\u0000-\u007F]/.test(st.nl)&&<SpeakerButton text={st.nl} lang={LANG_META[lang]?.ttsLocale||"en-US"} size={15} showToast={showToast} />}
          </div>
          {/* nl — big centered, serif */}
          <div style={{textAlign:"center",padding:"16px 28px 8px"}}>
            <h3 style={{fontSize:42,fontWeight:800,color:"var(--gray-800)",fontFamily:"'Quicksand','system-ui',sans-serif",margin:0,lineHeight:1.2}}>
              {/[\uAC00-\uD7AF]/.test(st.nl||"")?koreanHl(st.nl):st.nl.split(/([^\u0000-\u007F]+)/g).map((part,pi)=>/[\u3130-\u318F\uAC00-\uD7AF\u0600-\u06FF]/.test(part)?<span key={pi} style={{fontSize:48,color:"var(--purple-accent-text)"}}>{part}</span>:<span key={pi}>{part}</span>)}
            </h3>
          </div>
          {/* Translation */}
          <div style={{textAlign:"center",paddingBottom:14}}>
            <span style={{fontSize:18,color:"var(--teal-text)",fontWeight:700}}>{cap(st.en)}</span>
          </div>
          {/* Example row — split on \n for multi-line, renderLetterExample per line */}
          {st.example&&<div style={{borderTop:"1.5px solid var(--gray-100)",padding:"14px 22px",background:"var(--example-bg)"}}>
            <div style={{display:"flex",flexDirection:"column",gap:6}}>
              {st.example.split(/\\n|\n/).map((line,li)=><div key={li} style={{lineHeight:1.8,textAlign:"center"}}>{renderLetterExample(line)}</div>)}
            </div>
            {st.exampleEn&&<div style={{fontSize:13,color:"var(--gray-400)",marginTop:6,fontStyle:"italic",textAlign:"center"}}>{smartHl(st.exampleEn)}</div>}
            {st.phonetic&&<div style={{marginTop:6,textAlign:"center"}}><span style={{fontSize:13,color:"var(--gray-400)",fontWeight:500}}>{smartHl(st.phonetic)}</span></div>}
          </div>}
          {/* Phonetic fallback when no example */}
          {st.phonetic&&!st.example&&<div style={{textAlign:"center",paddingBottom:10}}>
            <span style={{fontSize:13,color:"var(--gray-400)",fontWeight:500}}>{smartHl(st.phonetic)}</span>
          </div>}
        </div>

        {/* ── SYLLABLE BLOCK DIAGRAM ── */}
        {renderDiagram(st.diagram)}

        {/* Rules grid — teacher's board layout */}
        {st.rules&&<div style={{background:"var(--card-bg)",border:"2px solid rgba(255,255,255,0.55)",borderLeft:"3px solid var(--purple-accent)",borderRadius:20,padding:"20px 22px",marginBottom:16}}>
          {st.trigger&&<div style={{textAlign:"center",marginBottom:14}}>
            <span style={{display:"inline-block",background:"rgba(123,94,232,0.08)",borderRadius:10,padding:"4px 14px",fontSize:12,fontWeight:700,color:"var(--purple-accent-text)",letterSpacing:0.5}}>{st.trigger}</span>
          </div>}
          <div style={{display:"flex",flexDirection:"column",gap:4}}>
            {st.rules.map((r,ri)=>(<div key={ri} style={{padding:"6px 0",borderBottom:ri<st.rules.length-1?"1px solid var(--gray-100)":"none"}}>
              <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:10,flexWrap:"wrap"}}>
                <div style={{display:"flex",alignItems:"center",gap:6,flexWrap:"wrap",justifyContent:"center"}}>
                  {r.from.split(/\s*\+\s/).length>1?
                    r.from.split(/\s*\+\s*/).map((part,pi,arr)=>(<span key={pi} style={{display:"inline-flex",alignItems:"center",gap:6}}>
                      <span style={{fontSize:28,fontWeight:800,color:"var(--purple-accent-text)",lineHeight:1}}>{part.trim()}</span>
                      {pi<arr.length-1&&<span style={{fontSize:14,fontWeight:700,color:"var(--gray-300)"}}>+</span>}
                    </span>))
                    :r.from.split(/\s+/).map((part,pi,arr)=>(<span key={pi} style={{display:"inline-flex",alignItems:"center",gap:4}}>
                      <span style={{fontSize:24,fontWeight:800,color:"var(--purple-accent-text)",lineHeight:1}}>{part.trim()}</span>
                      {pi<arr.length-1&&<span style={{fontSize:11,color:"var(--gray-300)"}}>/</span>}
                    </span>))
                  }
                </div>
                <span style={{fontSize:20,color:"var(--gray-300)",fontWeight:800}}>→</span>
                <span style={{fontSize:28,fontWeight:800,color:"var(--teal)",lineHeight:1}}>{r.to}</span>
                {r.label&&<span style={{fontSize:13,fontWeight:600,color:"var(--teal-dark)"}}>{r.label}</span>}
              </div>
              {r.ex&&<div style={{textAlign:"center",marginTop:2}}>
                <span style={{fontSize:13,color:"var(--gray-400)",fontWeight:500}}>{r.ex}</span>
              </div>}
            </div>))}
          </div>
          {st.note&&<div style={{textAlign:"center",marginTop:14,paddingTop:12,borderTop:"1.5px solid var(--gray-100)"}}>
            <span style={{fontSize:13,color:"var(--gray-500)",fontWeight:600,fontStyle:"italic"}}>{smartHl(st.note)}</span>
          </div>}
        </div>}

        {/* Plain note — structured with hl + bullets + Korean/→ pair cards */}
        {st.note&&!st.rules&&<div style={{background:"var(--card-bg)",border:"2px solid rgba(255,255,255,0.55)",borderLeft:"3px solid var(--purple-accent)",borderRadius:16,padding:"14px 18px",marginBottom:14}}>
          {(()=>{
            const noteLines=st.note.split(/\\n|\n/);
            const out=[];let ni=0;
            while(ni<noteLines.length){
              const line=noteLines[ni];
              const nextLine=noteLines[ni+1]||"";
              const hasKorean=/[\uAC00-\uD7AF\u3130-\u318F]/.test(line.trim());
              const nextIsArrow=nextLine.trim().startsWith("→");
              if(hasKorean&&nextIsArrow&&line.trim()){
                const translation=nextLine.trim().slice(1).trim();
                out.push(
                  <div key={ni} style={{
                    background:dk?"linear-gradient(180deg, rgba(123,94,232,0.22) 0%, rgba(100,80,200,0.14) 40%, rgba(80,60,180,0.08) 100%)":"linear-gradient(180deg, rgba(200,190,255,0.45) 0%, rgba(220,210,255,0.3) 50%, rgba(235,230,255,0.18) 100%)",
                    borderRadius:16,padding:"14px 18px",margin:"8px 0",position:"relative",overflow:"hidden",
                    border:dk?"1.5px solid rgba(123,94,232,0.3)":"1.5px solid rgba(180,165,240,0.4)",
                    boxShadow:dk?"0 4px 16px rgba(0,0,0,0.25), inset 0 2px 0 rgba(255,255,255,0.07), inset 0 -2px 0 rgba(0,0,0,0.1)":"0 4px 18px rgba(123,94,232,0.08), inset 0 2px 0 rgba(255,255,255,0.75), inset 0 -2px 0 rgba(123,94,232,0.04)"}}>
                    <div style={{position:"absolute",top:0,left:"5%",right:"5%",height:"44%",borderRadius:"0 0 50% 50%",background:dk?"linear-gradient(180deg, rgba(255,255,255,0.07) 0%, transparent 100%)":"linear-gradient(180deg, rgba(255,255,255,0.58) 0%, rgba(255,255,255,0.1) 60%, transparent 100%)",pointerEvents:"none",zIndex:1}}/>
                    <div style={{position:"relative",zIndex:2}}>
                      <div style={{fontSize:22,fontWeight:800,color:"var(--purple-accent-text)",lineHeight:1.3,marginBottom:8}}>{smartHl(line.trim())}</div>
                      <div style={{fontSize:13,fontWeight:500,color:dk?"rgba(200,190,255,0.6)":"var(--gray-500)",lineHeight:1.5}}>{smartHl(translation)}</div>
                    </div>
                  </div>
                );
                ni+=2;continue;
              }
              if(!line.trim()){out.push(<div key={ni} style={{height:20}}/>);ni++;continue;}
              if(line.startsWith("•")){out.push(<div key={ni} style={{fontSize:14,color:"var(--gray-600)",padding:"2px 0 2px 4px",display:"flex",gap:6,lineHeight:1.6}}><span style={{color:"var(--purple-accent-text)",fontWeight:700}}>•</span><span>{smartHl(line.slice(1).trim())}</span></div>);ni++;continue;}
              const isHeader=line.trim().endsWith(":");
              out.push(<div key={ni} style={{fontSize:14,color:isHeader?"var(--gray-800)":"var(--gray-600)",fontWeight:isHeader?700:500,lineHeight:1.7,marginTop:isHeader?6:0}}>{smartHl(line)}</div>);
              ni++;
            }
            return out;
          })()}
        </div>}

        {/* Continue */}
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:10,marginTop:4}}>
          {si>0&&<NavArrow onClick={goBack} isBack/>}
          <NavArrow onClick={()=>{learnWord(st.nl);goNext();}}/>
        </div>
      </div>
    </div>
  );}

  // ── LETTER / WORD / IDIOM cards ──
  // Helper: render letter examples with Hangul purple, operators gray
  const showInContext = teachKind==="word"||teachKind==="idiom"||teachKind==="grammar"||teachKind==="phrase"; // letters and info don't get "In Context"
  const isDialogueEx = /[AB]:\s/.test(st.example||""); // dialogue examples render as standalone iOS bubbles
  const showEmoji = teachKind==="word"||teachKind==="idiom"; // letters don't show emoji icon
  const isScript = /[\u3130-\u318F\uAC00-\uD7AF\u0600-\u06FF\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF]/.test(st.nl); // Korean/Arabic/CJK = script mode (NOT Latin diacritics like ë, ü, é)
  const letterSize = teachKind==="letter" ? 52 : 36; // letters get extra big display
  const boardMode = !!lesson.board; // Teacher's board style — clean, minimal, practical

  // ═══ BOARD-STYLE TEACH CARD (v2 lessons) ═══
  // Neuroscience: elaborative encoding (cognates), Von Restorff (also-means stands out),
  // dual coding (color-coded word type), curiosity gap (polysemy reveal)
  if(st.type==="teach" && boardMode) {
    const art=getArticle(st.nl,lang);const c=ARTICLE_COLORS[art];
    const accentColor=isNew?"#7B5EE8":"var(--gray-300)";
    const noteHl=(text)=>{
      if(!text||typeof text!=="string") return text;
      if(/[\uAC00-\uD7AF]/.test(text)) return koreanHl(text);
      return smartHl(text);
    };
    // Highlight Hangul/Arabic in example text at larger size
    const exHl=t=>/[\uAC00-\uD7AF]/.test(t)?koreanHl(t):t.split(/([^\u0000-\u007F]+)/g).map((p,pi)=>/[\u3130-\u318F\uAC00-\uD7AF\u0600-\u06FF]/.test(p)?<span key={pi} style={{fontSize:26,fontWeight:800,color:"var(--purple-accent-text)"}}>{p}</span>:<span key={pi}>{p}</span>);
    // Letter size: single Hangul jamo/syllable gets extra large
    const nlSize = teachKind==="letter" ? 64 : isScript ? 48 : 36;
    // Force purple for non-ASCII letters, otherwise noun stays dark, article gets color
    const nlColor = isScript ? "#7B5EE8" : "var(--gray-800)";
    // Split word into article + noun for color-coded display
    const artWord = art!=="none" && !isScript ? st.nl.split(/\s(.+)/) : null; // ["de","man",""]
    return(
    <div className="anim" key={si}>
      {wordBubble&&<WordBubble entry={wordBubble.entry} word={wordBubble.word} stem={wordBubble.stem} particle={wordBubble.particle} onClose={()=>setWordBubble(null)}/>}
      <ProgressBar/>
      <div style={{maxWidth:460,margin:"0 auto"}}>

        {/* Main card with subtle left accent */}
        <div style={{background:"var(--card-bg)",borderRadius:22,border:"2px solid rgba(255,255,255,0.55)",borderLeft:`4px solid ${accentColor}`,boxShadow:"0 4px 20px rgba(0,0,0,0.05)",overflow:"hidden",marginBottom:16}}>

          {/* Top strip — thin gradient accent + label */}
          <div style={{background:isNew?"linear-gradient(135deg, rgba(123,94,232,0.06), rgba(46,205,167,0.04))":"rgba(0,0,0,0.01)",padding:"12px 20px 10px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <div style={{display:"flex",flexDirection:"column",gap:4}}>
              <span style={{fontSize:10,fontWeight:700,textTransform:"uppercase",letterSpacing:2,color:isNew?"#7B5EE8":"var(--gray-400)"}}>
                {isNew?teachLabel:"Review"}
              </span>
              {st.fRef&&<span style={{display:"inline-flex",alignItems:"center",gap:4,background:"var(--purple-bg)",border:"1px solid var(--purple-border)",borderRadius:8,padding:"3px 10px",fontSize:10,color:"var(--purple-accent-text)",fontWeight:700,cursor:"pointer"}}>📖 {st.fRef.replace(/^nl_/,"").replace(/_/g," ").replace(/\b\w/g,c=>c.toUpperCase())}</span>}
            </div>
            <div style={{display:"flex",alignItems:"center",gap:8}}>
              <SpeakerButton text={st.nl} lang={LANG_META[lang]?.ttsLocale||"en-US"} size={15} showToast={showToast} />
              {st.phonetic&&<button onClick={()=>setShowPhonetic(!showPhonetic)} style={{background:"none",border:"none",cursor:"pointer",padding:"2px 0",display:"flex",alignItems:"center",transition:"all .15s"}}><span style={{fontSize:12,fontWeight:700,color:showPhonetic?"#7B5EE8":"var(--gray-300)",fontFamily:"'Georgia','Times New Roman',serif",letterSpacing:0.5,transition:"color .15s"}}>{isScript?"로마":"Abc"}</span></button>}
            </div>
          </div>

          {/* The word/letter — big, centered, article color-coded */}
          <div style={{textAlign:"center",padding:"16px 28px 8px"}}>
            {art!=="none"&&<div style={{marginBottom:4}}><span style={{fontSize:11,fontWeight:800,color:c.pillText,background:c.pill,borderRadius:6,padding:"2px 10px",letterSpacing:1}}>{art.toUpperCase()}</span></div>}
            <div style={{marginBottom:6}}>
              {artWord&&artWord[1] ? (
                <span className="hd" style={{fontSize:nlSize,fontWeight:800,lineHeight:1.1,fontFamily:"'Quicksand','system-ui',sans-serif"}}>
                  <span style={{color:c.pillText}}>{cap(artWord[0])}</span>{" "}
                  <span style={{color:"var(--gray-800)"}}>{artWord[1]}</span>
                </span>
              ) : (
                <span className="hd" style={{fontSize:nlSize,fontWeight:800,color:nlColor,lineHeight:1.1,fontFamily:"'Quicksand','system-ui',sans-serif"}}>{/[\uAC00-\uD7AF]/.test(st.nl||"")?st.nl.split(/([/→+= ]+)/).map((seg,si)=>/^[/→+= ]+$/.test(seg)?<span key={si} style={{fontSize:Math.round(nlSize*0.4),fontWeight:400,color:"var(--gray-300)",margin:"0 2px",verticalAlign:"middle"}}>{seg.trim()}</span>:/[\uAC00-\uD7AF]/.test(seg)?koreanHl(seg):<span key={si} style={{fontSize:Math.round(nlSize*0.7),color:"var(--gray-500)"}}>{seg}</span>):cap(st.nl)}</span>
              )}
            </div>
          </div>

          {/* Translation — teal */}
          <div style={{textAlign:"center",paddingBottom:st.phonetic&&showPhonetic?6:14}}>
            <span style={{fontSize:18,color:"var(--teal-text)",fontWeight:700}}>{cap(st.en)}</span>
          </div>

          {/* Phonetic — P38: right-shifted whisper below translation */}
          {st.phonetic&&!isScript&&showPhonetic&&<div className="anim" style={{textAlign:"center",paddingBottom:12,paddingRight:8}}>
            <span style={{fontSize:13,fontWeight:600,color:"rgba(123,94,232,0.55)",fontStyle:"italic",marginLeft:40}}>{st.phonetic}</span>
          </div>}
          {/* Phonetic — non-Latin scripts: behind toggle too */}
          {st.phonetic&&isScript&&showPhonetic&&<div className="anim" style={{textAlign:"center",paddingBottom:12}}>
            <span style={{fontSize:13,fontWeight:500,color:"var(--gray-400)"}}>{smartHl(st.phonetic)}</span>
          </div>}

          {/* Also means — polysemy badge */}
          {st.also&&<div style={{textAlign:"center",paddingBottom:12}}>
            <div style={{display:"inline-flex",alignItems:"center",gap:6,background:"rgba(123,94,232,0.06)",border:"1.5px solid rgba(123,94,232,0.15)",borderRadius:10,padding:"5px 14px"}}>
              <span style={{fontSize:12,fontWeight:700,color:"var(--purple-accent-text)"}}>⚡ Also:</span>
              <span style={{fontSize:13,fontWeight:600,color:"var(--gray-700)"}}>{st.also}</span>
            </div>
          </div>}

          {/* Examples now render as standalone compound bubbles below the card */}
          {/* Phonetic fallback removed — P38 places it below translation */}

          {/* Cognate — collapsible word family popup */}
          {st.cognate&&<div style={{borderTop:"1px solid var(--gray-100)"}}>
            <button onClick={()=>setShowCognate(!showCognate)} style={{width:"100%",background:"none",border:"none",cursor:"pointer",padding:"8px 22px",display:"flex",alignItems:"center",justifyContent:"space-between",transition:"all .15s"}}>
              <span style={{fontSize:12,fontWeight:600,color:showCognate?"#7B5EE8":"var(--gray-350)",transition:"color .15s",letterSpacing:0.3}}>Word family</span>
              <span style={{fontSize:10,color:showCognate?"#7B5EE8":"var(--gray-300)",transition:"all .2s",transform:showCognate?"rotate(180deg)":"rotate(0)"}}>⌄</span>
            </button>
            {showCognate&&<div className="anim" style={{padding:"0 22px 14px"}}>
              <div style={{background:"rgba(123,94,232,0.04)",borderRadius:12,padding:"14px 16px"}}>
                {typeof st.cognate==="object"&&st.cognate.words?<>
                  <div style={{display:"flex",flexDirection:"column",gap:6,marginBottom:st.cognate.family?12:0}}>
                    {st.cognate.words.map((w,wi)=><div key={wi} style={{display:"flex",alignItems:"baseline",gap:10}}>
                      <span style={{fontSize:11,fontWeight:600,color:"var(--gray-400)",minWidth:56,textAlign:"right"}}>{w.lang}</span>
                      <span style={{fontSize:14,fontWeight:700,color:"var(--purple-accent-text)",fontFamily:"'Quicksand','system-ui',sans-serif"}}>{w.word}</span>
                    </div>)}
                  </div>
                  {st.cognate.family&&LANG_FAMILIES[st.cognate.family]&&<div style={{borderTop:"1px solid rgba(123,94,232,0.1)",paddingTop:10}}>
                    <div style={{fontSize:12,fontWeight:700,color:"var(--gray-700)",marginBottom:4}}>{LANG_FAMILIES[st.cognate.family].headline}</div>
                    <div style={{fontSize:11,color:"var(--gray-400)",lineHeight:1.55}}>{LANG_FAMILIES[st.cognate.family].detail}</div>
                  </div>}
                </>:<>
                  <div style={{fontSize:13,color:"var(--purple-accent-text)",fontWeight:600,lineHeight:1.6}}>{st.cognate}</div>
                </>}
              </div>
            </div>}
          </div>}
        </div>

        {/* Standalone compound-style example bubble — ALL examples render here */}
        {showInContext&&st.example&&(()=>{
          const ex=st.example||"";const exEn=st.exampleEn||"";
          const bubbleStyle={
            background:dk
              ?"linear-gradient(180deg, rgba(123,94,232,0.22) 0%, rgba(100,80,200,0.14) 40%, rgba(80,60,180,0.08) 100%)"
              :"linear-gradient(180deg, rgba(200,190,255,0.45) 0%, rgba(220,210,255,0.3) 50%, rgba(235,230,255,0.18) 100%)",
            borderRadius:20,padding:"14px 18px",position:"relative",overflow:"hidden",
            border:dk?"1.5px solid rgba(123,94,232,0.3)":"1.5px solid rgba(180,165,240,0.4)",
            boxShadow:dk
              ?"0 6px 20px rgba(0,0,0,0.3), 0 0 14px rgba(123,94,232,0.2), inset 0 2px 0 rgba(255,255,255,0.07), inset 0 -3px 0 rgba(0,0,0,0.12)"
              :"0 6px 24px rgba(123,94,232,0.1), 0 0 12px rgba(180,165,240,0.15), inset 0 2px 0 rgba(255,255,255,0.75), inset 0 -3px 0 rgba(123,94,232,0.05)"};
          const glossArc={position:"absolute",top:0,left:"5%",right:"5%",height:"42%",borderRadius:"0 0 50% 50%",
            background:dk
              ?"linear-gradient(180deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.01) 60%, transparent 100%)"
              :"linear-gradient(180deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.1) 60%, transparent 100%)",
            pointerEvents:"none",zIndex:1};
          if(isDialogueEx){
            const turns=ex.split(/(?=[AB]:\s)/).filter(Boolean);
            const turnsEn=exEn.split(/(?=[AB]:\s)/).filter(Boolean);
            return <div style={{display:"flex",flexDirection:"column",gap:10,marginBottom:14}}>
              {turns.map((turn,ti)=>{
                const isA=turn.trim().startsWith("A:");
                const content=turn.replace(/^[AB]:\s*/,"").trim();
                const enC=(turnsEn[ti]||"").replace(/^[AB]:\s*/,"").trim();
                return <div key={ti} style={{display:"flex",justifyContent:isA?"flex-start":"flex-end",paddingLeft:isA?0:30,paddingRight:isA?30:0}}>
                  <div style={{...bubbleStyle,maxWidth:"82%",borderRadius:isA?"20px 20px 20px 6px":"20px 20px 6px 20px"}}>
                    <div style={glossArc}/>
                    <div style={{position:"relative",zIndex:2}}>
                      <div style={{fontSize:15,fontWeight:700,color:"var(--purple-accent-text)",lineHeight:1.4,display:"flex",alignItems:"center",gap:6,flexWrap:"wrap"}}>
                        {/[\uAC00-\uD7AF]/.test(content)?koreanHl(content):<span>{content}</span>}
                        <SpeakerButton text={content} lang={LANG_META[lang]?.ttsLocale||"en-US"} size={13} showToast={showToast}/>
                      </div>
                      {enC&&<div style={{fontSize:12,color:dk?"rgba(200,190,255,0.7)":"var(--gray-500)",fontWeight:500,marginTop:4}}>{enC}</div>}
                    </div>
                  </div>
                </div>;
              })}
            </div>;
          }
          return <div style={{...bubbleStyle,marginBottom:14}}>
            <div style={glossArc}/>
            <div style={{position:"relative",zIndex:2}}>
              <div style={{fontSize:15,fontWeight:700,color:"var(--purple-accent-text)",lineHeight:1.5,display:"flex",alignItems:"center",gap:6,flexWrap:"wrap"}}>
                {/[\uAC00-\uD7AF]/.test(ex)?koreanHl(ex):<span>{ex}</span>}
                <SpeakerButton text={ex} lang={LANG_META[lang]?.ttsLocale||"en-US"} size={13} showToast={showToast}/>
              </div>
              {exEn&&<div style={{fontSize:13,color:dk?"rgba(200,190,255,0.7)":"var(--gray-500)",fontWeight:500,marginTop:4}}>{exEn}</div>}
            </div>
          </div>;
        })()}

        {/* Note — compound bubble + note card as separate elements */}
        {st.note&&(()=>{
          const lines=st.note.split(/\\n|\n/);
          const compoundLines=[];
          const noteLines=[];
          let inCompound=false;
          lines.forEach(line=>{
            if(line.trim().startsWith("COMPOUND:")||line.trim().startsWith("SINO-KOREAN COMPOUND:")||line.trim().startsWith("SINO-KOREAN:")){inCompound=true;compoundLines.push(line);}
            else if(inCompound&&(line.trim().startsWith("Literally:")||line.trim().startsWith("'")||line.trim().startsWith("'"))){compoundLines.push(line);inCompound=false;}
            else if(inCompound&&line.trim().match(/\+/)&&line.trim().match(/\(/)){compoundLines.push(line);}
            else{inCompound=false;noteLines.push(line);}
          });
          return(<div style={{display:"flex",flexDirection:"column",gap:12,marginBottom:14}}>
            {/* COMPOUND — glossy candy bubble, tinted to unit color */}
            {compoundLines.length>0&&(()=>{
              return <div style={{
                background:dk
                  ?"linear-gradient(180deg, rgba(123,94,232,0.22) 0%, rgba(100,80,200,0.14) 40%, rgba(80,60,180,0.08) 100%)"
                  :"linear-gradient(180deg, rgba(200,190,255,0.45) 0%, rgba(220,210,255,0.3) 50%, rgba(235,230,255,0.18) 100%)",
                borderRadius:22,padding:"18px 20px 16px",position:"relative",overflow:"hidden",
                border:dk?"1.5px solid rgba(123,94,232,0.3)":"1.5px solid rgba(180,165,240,0.4)",
                boxShadow:dk
                  ?"0 6px 20px rgba(0,0,0,0.3), 0 0 14px rgba(123,94,232,0.2), inset 0 2px 0 rgba(255,255,255,0.07), inset 0 -3px 0 rgba(0,0,0,0.12)"
                  :"0 6px 24px rgba(123,94,232,0.1), 0 0 12px rgba(180,165,240,0.15), inset 0 2px 0 rgba(255,255,255,0.75), inset 0 -3px 0 rgba(123,94,232,0.05)"}}>
                {/* Gloss arc — candy shine */}
                <div style={{position:"absolute",top:0,left:"5%",right:"5%",height:"42%",
                  borderRadius:"0 0 50% 50%",
                  background:dk
                    ?"linear-gradient(180deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.01) 60%, transparent 100%)"
                    :"linear-gradient(180deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.1) 60%, transparent 100%)",
                  pointerEvents:"none",zIndex:1}}/>
                <div style={{position:"relative",zIndex:2}}>
                  <div style={{fontSize:10,fontWeight:800,color:"var(--purple-accent-text)",textTransform:"uppercase",letterSpacing:2.5,marginBottom:10,display:"flex",alignItems:"center",justifyContent:"space-between",fontFamily:"'Nunito','system-ui',sans-serif"}}>
                    <span style={{display:"flex",alignItems:"center",gap:6}}><AppIcon name="lightbulb" size={16}/>Compound</span>
                    {st.hanja&&<button onClick={()=>setShowHanja(!showHanja)} style={{background:showHanja?(dk?"rgba(123,94,232,0.2)":"rgba(123,94,232,0.1)"):"none",border:showHanja?`1px solid ${dk?"rgba(123,94,232,0.4)":"rgba(123,94,232,0.2)"}`:"1px solid transparent",borderRadius:8,padding:"3px 8px",cursor:"pointer",fontSize:11,fontWeight:700,color:showHanja?"var(--purple-accent-text)":(dk?"rgba(200,190,255,0.4)":"var(--gray-400)"),transition:"all .15s",fontFamily:"'Nunito','system-ui',sans-serif",letterSpacing:0}}>漢字</button>}
                  </div>
                  {(()=>{
                    const hanjaArr=st.hanja?st.hanja.split("+"):[];
                    let hanjaIdx=0;
                    return compoundLines.map((line,li)=>{
                    const cleaned=line.replace(/^(COMPOUND|SINO-KOREAN COMPOUND|SINO-KOREAN):\s*/,"").trim();
                    if(!cleaned) return null;
                    if(cleaned.startsWith("Literally:")||cleaned.startsWith("'")||cleaned.startsWith("'")){
                      return <div key={li} style={{fontSize:13,color:dk?"rgba(200,190,255,0.7)":"var(--gray-500)",fontStyle:"italic",marginTop:6,fontWeight:500,fontFamily:"'Nunito','system-ui',sans-serif"}}>{cleaned}</div>;
                    }
                    const parts=cleaned.split(/\s*\+\s*/);
                    return <div key={li} style={{display:"flex",flexWrap:"wrap",alignItems:"center",gap:8,justifyContent:"center",padding:"6px 0"}}>
                      {parts.map((part,pi)=>{
                        const m=part.match(/^([^\s(]+)\s*\(([^)]+)\)/);
                        const hj=hanjaArr[hanjaIdx]||"";
                        hanjaIdx++;
                        return <React.Fragment key={pi}>
                          {pi>0&&<span style={{color:dk?"rgba(123,94,232,0.35)":"rgba(160,140,230,0.4)",fontSize:13,fontWeight:800}}>+</span>}
                          <span style={{display:"inline-flex",flexDirection:"column",alignItems:"center",gap:showHanja&&hj?2:0,
                            background:dk
                              ?"linear-gradient(160deg, rgba(255,255,255,0.12), rgba(255,255,255,0.04))"
                              :"linear-gradient(160deg, rgba(255,255,255,0.92), rgba(255,255,255,0.65))",
                            borderRadius:14,padding:showHanja&&hj?"6px 16px 8px":"8px 16px",
                            border:dk?"1px solid rgba(255,255,255,0.1)":"1px solid rgba(180,165,240,0.25)",
                            boxShadow:dk
                              ?"0 3px 10px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.1)"
                              :"0 3px 12px rgba(123,94,232,0.08), inset 0 2px 0 rgba(255,255,255,0.9)"}}>
                            <span style={{display:"flex",alignItems:"baseline",gap:4}}>
                              <span style={{fontSize:24,fontWeight:800,color:"var(--purple-accent-text)"}}>{m?m[1]:part}</span>
                              {m&&<span style={{fontSize:12,color:dk?"rgba(200,190,255,0.7)":"var(--gray-500)",fontWeight:600,fontFamily:"'Nunito','system-ui',sans-serif",marginLeft:2}}>({m[2]})</span>}
                            </span>
                            {showHanja&&hj&&<span className="anim" style={{fontSize:15,color:dk?"rgba(200,190,255,0.75)":"rgba(80,60,160,0.6)",fontWeight:700,letterSpacing:2}}>{hj}</span>}
                          </span>
                        </React.Fragment>;
                      })}
                    </div>;
                  });})()}
                </div>
              </div>;
            })()}
            {/* Note lines — standard purple-bar card */}
            {noteLines.filter(l=>l.trim()).length>0&&(()=>{
              const hasWarning=noteLines.some(l=>l.trim().startsWith("⚠️")||l.trim().startsWith("NOT ")||l.trim().startsWith("FALSE"));
              const isWarningBlock=noteLines[0]&&(noteLines[0].trim().startsWith("⚠️")||noteLines[0].trim().startsWith("FALSE"));
              if(isWarningBlock){
                // Glossy lavender candy bubble for false friends / warnings
                return <div style={{
                  background:dk
                    ?"linear-gradient(180deg, rgba(123,94,232,0.22) 0%, rgba(100,80,200,0.14) 40%, rgba(80,60,180,0.08) 100%)"
                    :"linear-gradient(180deg, rgba(200,190,255,0.45) 0%, rgba(220,210,255,0.3) 50%, rgba(235,230,255,0.18) 100%)",
                  borderRadius:20,padding:"18px 22px 16px",position:"relative",overflow:"hidden",
                  border:dk?"1.5px solid rgba(123,94,232,0.3)":"1.5px solid rgba(180,165,240,0.4)",
                  boxShadow:dk
                    ?"0 4px 16px rgba(0,0,0,0.25), 0 0 10px rgba(123,94,232,0.15), inset 0 2px 0 rgba(255,255,255,0.06), inset 0 -2px 0 rgba(0,0,0,0.1)"
                    :"0 4px 18px rgba(123,94,232,0.08), 0 0 10px rgba(180,165,240,0.1), inset 0 2px 0 rgba(255,255,255,0.7), inset 0 -2px 0 rgba(123,94,232,0.04)"}}>
                  <div style={{position:"absolute",top:0,left:"5%",right:"5%",height:"38%",borderRadius:"0 0 50% 50%",background:dk?"linear-gradient(180deg, rgba(255,255,255,0.05) 0%, transparent 100%)":"linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.08) 60%, transparent 100%)",pointerEvents:"none",zIndex:1}}/>
                  <div style={{position:"relative",zIndex:2}}>
                    <div style={{fontSize:10,fontWeight:800,color:"var(--purple-accent-text)",textTransform:"uppercase",letterSpacing:2.5,marginBottom:12,display:"flex",alignItems:"center",gap:6,fontFamily:"'Nunito','system-ui',sans-serif"}}>
                      <AppIcon name="lightbulb" size={16}/>{noteLines[0].trim().includes("FALSE FRIEND")?"False Friend":"Heads Up"}
                    </div>
                    {noteLines.map((line,li)=>{
                      if(!line.trim()) return <div key={li} style={{height:12}}/>;
                      const clean=line.replace(/^⚠️\s*(FALSE FRIEND:|NOT REAL ENGLISH:|HEADS UP:)?\s*/,"").trim();
                      if(!clean) return null;
                      // Korean-only lines: large, centered, standalone block
                      const isKoreanOnly=/^[\uAC00-\uD7AF\u3130-\u318F\s]+$/.test(clean);
                      if(isKoreanOnly) return <div key={li} style={{textAlign:"center",padding:"10px 0 2px"}}><span style={{fontSize:22,fontWeight:800,color:"var(--purple-accent-text)",letterSpacing:1}}>{clean}</span></div>;
                      // Translation line right after Korean (starts with quote or lowercase)
                      if(li>0 && clean.startsWith("'") && /[\uAC00-\uD7AF]/.test(noteLines[li-1]||"")) return <div key={li} style={{textAlign:"center",fontSize:13,color:"var(--gray-400)",fontStyle:"italic",fontFamily:"'Nunito','system-ui',sans-serif",padding:"0 0 4px"}}>{clean}</div>;
                      if(li>0 && /^(Use these|To work)/.test(clean) && /[\uAC00-\uD7AF]/.test(noteLines[li-1]||"")) return <div key={li} style={{textAlign:"center",fontSize:13,color:"var(--gray-500)",fontFamily:"'Nunito','system-ui',sans-serif",fontWeight:500,padding:"0 0 4px"}}>{clean}</div>;
                      // NOT / warning lines: teal accent
                      if(/^NOT\b/.test(clean)) return <div key={li} style={{fontSize:14,color:"var(--teal-text)",fontWeight:700,fontFamily:"'Nunito','system-ui',sans-serif",padding:"4px 0"}}>{clean}</div>;
                      // "Actual meaning:" lines
                      if(clean.startsWith("Actual meaning:")) return <div key={li} style={{fontSize:15,color:"var(--gray-700)",fontWeight:600,fontFamily:"'Nunito','system-ui',sans-serif",lineHeight:1.6}}>{noteHl(clean)}</div>;
                      // Mixed Korean+English lines: auto-separate
                      if(/[\uAC00-\uD7AF]/.test(clean)&&/[a-zA-Z]{3,}/.test(clean)){
                        if(clean.includes(" | ")){
                          const pairs=clean.split(" | ");
                          return <div key={li} style={{display:"flex",flexDirection:"column",gap:4,margin:"4px 0"}}>{pairs.map((p,pi)=><div key={pi} style={{display:"flex",gap:8,alignItems:"baseline",padding:"2px 0"}}>{noteHl(p)}</div>)}</div>;
                        }
                        if(/^[\uAC00-\uD7AF\u3130-\u318F]/.test(clean.trim())&&!/\(.*[\uAC00-\uD7AF]/.test(clean)){
                          const koMatch=clean.trim().match(/^([\uAC00-\uD7AF\u3130-\u318F][\uAC00-\uD7AF\u3130-\u318F\s/→+]*?)\s*[=:.]\s*(.+)$/);
                          if(koMatch){
                            return <div key={li} style={{margin:"6px 0"}}>
                              <div style={{fontSize:17,fontWeight:700,color:"var(--purple-accent-text)",lineHeight:1.4,padding:"2px 0"}}>{noteHl(koMatch[1].trim())}</div>
                              <div style={{fontSize:13,color:"var(--gray-500)",fontWeight:500,lineHeight:1.5,paddingLeft:2}}>{koMatch[2].trim()}</div>
                            </div>;
                          }
                        }
                        return <div key={li} style={{fontSize:15,color:"var(--gray-600)",fontWeight:500,fontFamily:"'Nunito','system-ui',sans-serif",lineHeight:1.7}}>{noteHl(clean)}</div>;
                      }
                      if(/[\uAC00-\uD7AF]/.test(clean)) return <div key={li} style={{fontSize:15,color:"var(--gray-600)",fontWeight:500,fontFamily:"'Nunito','system-ui',sans-serif",lineHeight:1.7}}>{noteHl(clean)}</div>;
                      // Regular English lines
                      return <div key={li} style={{fontSize:15,color:"var(--gray-600)",fontWeight:500,fontFamily:"'Nunito','system-ui',sans-serif",lineHeight:1.7}}>{noteHl(clean)}</div>;
                    })}
                  </div>
                </div>;
              }
              // Standard purple-bar note card
              return <div style={{background:"var(--card-bg)",border:"2px solid rgba(255,255,255,0.55)",borderLeft:"3px solid var(--purple-accent)",borderRadius:16,padding:"14px 18px"}}>
              {noteLines.map((line,li)=>{
                if(!line.trim()) return <div key={li} style={{height:6}}/>;
                if(line.startsWith("⚠️")) return <div key={li} style={{background:dk?"rgba(245,166,35,0.1)":"rgba(245,166,35,0.06)",borderRadius:10,padding:"8px 12px",margin:"4px 0",display:"flex",gap:8,alignItems:"flex-start"}}><AppIcon name="lightbulb" size={16}/><span style={{fontSize:14,color:"var(--gray-700)",fontWeight:600,lineHeight:1.6,fontFamily:"'Nunito','system-ui',sans-serif"}}>{noteHl(line.slice(2).trim())}</span></div>;
                if(line.startsWith("⚡")) return <div key={li} style={{background:dk?"rgba(123,94,232,0.08)":"rgba(123,94,232,0.04)",borderRadius:10,padding:"8px 12px",margin:"4px 0",display:"flex",gap:8,alignItems:"flex-start"}}><AppIcon name="lightbulb" size={16}/><span style={{fontSize:14,color:"var(--gray-700)",fontWeight:600,lineHeight:1.6,fontFamily:"'Nunito','system-ui',sans-serif"}}>{noteHl(line.slice(1).trim())}</span></div>;
                if(line.startsWith("•")) return <div key={li} style={{fontSize:15,color:"var(--gray-600)",padding:"3px 0 3px 4px",display:"flex",gap:8,lineHeight:1.7,fontFamily:"'Nunito','system-ui',sans-serif",fontWeight:500}}><span style={{color:"var(--purple-accent-text)",fontWeight:700,flexShrink:0}}>•</span><span>{noteHl(line.slice(1).trim())}</span></div>;
                if(/^\d+\.\s/.test(line)) return <div key={li} style={{fontSize:15,color:"var(--gray-600)",padding:"3px 0",display:"flex",gap:8,lineHeight:1.7,fontFamily:"'Nunito','system-ui',sans-serif",fontWeight:500}}><span style={{color:"var(--purple-accent-text)",fontWeight:800,fontSize:13,minWidth:18,flexShrink:0}}>{line.match(/^\d+/)[0]}.</span><span>{noteHl(line.replace(/^\d+\.\s*/,""))}</span></div>;
                // Pipe separator → individual rows
                if(line.includes(" | ")&&/[\uAC00-\uD7AF]/.test(line)){
                  const pairs=line.split(" | ");
                  return <div key={li} style={{display:"flex",flexDirection:"column",gap:3,margin:"3px 0"}}>{pairs.map((p,pi)=><div key={pi} style={{display:"flex",gap:8,alignItems:"baseline"}}>{noteHl(p)}</div>)}</div>;
                }
                // Korean-first lines: split Korean above, English below
                if(/^[\uAC00-\uD7AF\u3130-\u318F]/.test(line.trim())&&/[a-zA-Z]{3,}/.test(line)&&!/\(.*[\uAC00-\uD7AF]/.test(line)){
                  const koMatch=line.trim().match(/^([\uAC00-\uD7AF\u3130-\u318F][\uAC00-\uD7AF\u3130-\u318F\s/→+]*?)\s*[=:.]\s*(.+)$/);
                  if(koMatch) return <div key={li} style={{margin:"6px 0"}}><div style={{fontSize:17,fontWeight:700,color:"var(--purple-accent-text)",lineHeight:1.4,padding:"2px 0"}}>{noteHl(koMatch[1].trim())}</div><div style={{fontSize:13,color:"var(--gray-500)",fontWeight:500,paddingLeft:2}}>{koMatch[2].trim()}</div></div>;
                }
                return <div key={li} style={{fontSize:15,color:"var(--gray-600)",lineHeight:1.75,fontWeight:500,fontFamily:"'Nunito','system-ui',sans-serif"}}>{noteHl(line)}</div>;
              })}
            </div>;
            })()}
          </div>);
        })()}

        {/* Diagram — syllable block visual */}
        {renderDiagram(st.diagram)}

        {/* Continue */}
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:10,marginTop:18}}>
          {si>0&&<NavArrow onClick={goBack} isBack/>}
          <NavArrow onClick={goNext}/>
        </div>
      </div>
    </div>
  );}

  // ═══ STANDARD TEACH CARD (legacy/default) ═══
  if(st.type==="teach") return(
    <div className="anim" key={si}>
      <ProgressBar/>
      <div style={{maxWidth:460,margin:"0 auto"}}>
        
        {/* Gold "NEW WORD" frame — only shows for unlearned words */}
        {isNew&&<div style={{background:"linear-gradient(135deg, var(--gold), #E8960A)",borderRadius:24,padding:"3px",marginBottom:20,boxShadow:"0 6px 24px rgba(245,166,35,0.25)"}}>
          <div style={{background:"var(--gold)",borderRadius:"22px 22px 0 0",padding:"8px 0",textAlign:"center"}}>
            <span style={{color:"white",fontSize:12,fontWeight:800,textTransform:"uppercase",letterSpacing:3}}>{teachLabel}</span>
          </div>

          <div style={{background:"var(--card-bg)",borderRadius:"0 0 21px 21px",overflow:"hidden",position:"relative"}}>
            {/* Decorative bubbles */}
            <div style={{position:"absolute",top:-15,right:-15,width:60,height:60,borderRadius:"50%",background:"rgba(74,143,231,0.06)"}}/>
            <div style={{position:"absolute",bottom:20,left:-10,width:40,height:40,borderRadius:"50%",background:"rgba(46,205,167,0.06)"}}/>

            {/* Phonetic + Audio icon buttons — top right */}
            <div style={{position:"absolute",top:12,right:14,display:"flex",gap:6,zIndex:2}}>
              <button onClick={()=>setShowPhonetic(!showPhonetic)} style={{width:34,height:34,borderRadius:10,background:showPhonetic?"var(--blue-light)":"var(--panel-bg)",border:`1.5px solid ${showPhonetic?"var(--blue)":"var(--gray-200)"}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:16,cursor:"pointer",transition:"all .15s",backdropFilter:"blur(4px)"}}>🔤</button>
              <SpeakerButton text={st.nl} lang={LANG_META[lang]?.ttsLocale||"en-US"} size={16} showToast={showToast} />
            </div>

            {/* Illustration — only for word/idiom, not letters */}
            {showEmoji&&st.img&&<div style={{textAlign:"center",paddingTop:24}}>
              <div style={{display:"inline-flex",alignItems:"center",justifyContent:"center",width:80,height:80,borderRadius:22,background:"var(--card-bg)",boxShadow:"var(--card-shadow)",fontSize:36,lineHeight:1}}>{st.img}</div>
            </div>}

            {/* The word/letter display */}
            <div style={{textAlign:"center",padding:"18px 28px 10px"}}>
              {teachKind==="letter"?(<>
                <div style={{marginBottom:10}}>
                  <span className="hd" style={{fontSize:56,fontWeight:800,color:"var(--purple-accent-text)",lineHeight:1.1}}>{st.nl}</span>
                </div>
              </>):(()=>{const art=getArticle(st.nl,lang);const c=ARTICLE_COLORS[art];return(<>
                {art!=="none"&&<div style={{marginBottom:6}}><span style={{display:"inline-block",background:c.pill,color:c.pillText,fontSize:12,fontWeight:800,borderRadius:10,padding:"3px 14px",textTransform:"uppercase",letterSpacing:1.5}}>{art}</span></div>}
                <div style={{display:"inline-block",background:c.bg,borderRadius:18,padding:"12px 32px",boxShadow:`0 4px 16px ${c.shadow}`,marginBottom:10}}>
                  <span className="hd" style={{fontSize:letterSize,fontWeight:800,color:"white",lineHeight:1.1}}>{cap(st.nl)}</span>
                </div>
              </>);})()}
            </div>

            {/* Phonetic display — shows below word when toggled */}
            {showPhonetic&&<div className="anim" style={{textAlign:"center",marginBottom:8}}>
              <span style={{display:"inline-block",background:"rgba(74,143,231,0.08)",borderRadius:14,padding:"4px 16px",fontSize:14,color:"var(--blue)",fontWeight:600}}>/{st.phonetic}/</span>
            </div>}

            {/* Translation */}
            <div style={{textAlign:"center",paddingBottom:20}}>
              {teachKind==="letter"?
                <span style={{fontSize:20,color:"var(--teal-dark)",fontWeight:700}}>{cap(st.en)}</span>
              :<div style={{display:"inline-block",background:"linear-gradient(135deg, var(--teal), var(--teal-dark))",borderRadius:14,padding:"8px 24px",boxShadow:"0 3px 12px rgba(46,205,167,0.25)"}}>
                <span style={{fontSize:18,color:"white",fontWeight:700}}>{cap(st.en)}</span>
              </div>}
            </div>

            {/* Examples render as standalone compound bubbles below the card */}
            {/* Letter syllable examples — formulas or syllable lists */}
            {teachKind==="letter"&&st.example&&<div style={{background:"var(--panel-bg)",padding:"14px 22px",borderTop:"1.5px solid rgba(74,143,231,0.08)"}}>
              <div style={{textAlign:"center"}}>
                {/[+=→]/.test(st.example)
                  ?<div style={{lineHeight:1.8}}>{renderLetterExample(st.example)}</div>
                  :<div style={{fontSize:22,fontWeight:700,color:"var(--purple-accent-text)",lineHeight:1.6,letterSpacing:4}}>{st.example}</div>
                }
                {st.exampleEn&&<div style={{fontSize:12,color:"var(--gray-400)",marginTop:4,letterSpacing:2}}>{st.exampleEn}</div>}
              </div>
            </div>}
          </div>
        </div>}

        {/* Repeat/review card — no gold frame, simpler */}
        {!isNew&&<div style={{background:"var(--card-bg)",borderRadius:24,border:"2px solid rgba(255,255,255,0.55)",boxShadow:"0 4px 16px rgba(0,0,0,0.04)",marginBottom:20,overflow:"hidden",position:"relative"}}>
          <div style={{position:"absolute",top:12,right:14,display:"flex",gap:6,zIndex:2}}>
            <button onClick={()=>setShowPhonetic(!showPhonetic)} style={{width:30,height:30,borderRadius:8,background:showPhonetic?"var(--blue-light)":"var(--panel-bg)",border:`1.5px solid ${showPhonetic?"var(--blue)":"var(--gray-200)"}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:14,cursor:"pointer",transition:"all .15s"}}>🔤</button>
            <SpeakerButton text={st.nl} lang={LANG_META[lang]?.ttsLocale||"en-US"} size={14} showToast={showToast} />
          </div>
          {showEmoji&&st.img&&<div style={{textAlign:"center",paddingTop:24}}>
            <div style={{display:"inline-flex",alignItems:"center",justifyContent:"center",width:72,height:72,borderRadius:20,background:"var(--card-bg)",boxShadow:"var(--card-shadow)",fontSize:32,lineHeight:1}}>{st.img}</div>
          </div>}
          <div style={{textAlign:"center",paddingTop:(showEmoji&&st.img)?12:24}}>
            <span style={{display:"inline-block",background:"var(--gray-200)",color:"var(--gray-500)",fontSize:10,fontWeight:700,textTransform:"uppercase",letterSpacing:2,padding:"4px 14px",borderRadius:16}}>Review</span>
          </div>
          <div style={{textAlign:"center",padding:"14px 28px 10px"}}>
            {teachKind==="letter"?(<>
              <div style={{marginBottom:6}}>
                <span className="hd" style={{fontSize:48,fontWeight:800,color:"var(--purple-accent-text)",lineHeight:1.1}}>{st.nl}</span>
              </div>
            </>):(()=>{const art=getArticle(st.nl,lang);const c=ARTICLE_COLORS[art];return(<>
              {art!=="none"&&<div style={{marginBottom:4}}><span style={{display:"inline-block",background:c.pill,color:c.pillText,fontSize:10,fontWeight:800,borderRadius:8,padding:"2px 10px",textTransform:"uppercase",letterSpacing:1}}>{art}</span></div>}
              <div style={{display:"inline-block",background:c.bg,borderRadius:16,padding:"10px 28px",boxShadow:`0 4px 14px ${c.shadow}`}}>
                <span className="hd" style={{fontSize:32,fontWeight:800,color:"white"}}>{cap(st.nl)}</span>
              </div>
            </>);})()}
          </div>
          {showPhonetic&&<div className="anim" style={{textAlign:"center",marginBottom:8}}><span style={{fontSize:13,color:"var(--blue)",fontWeight:600}}>/{st.phonetic}/</span></div>}
          <div style={{textAlign:"center",paddingBottom:18}}>
            <span style={{fontSize:17,color:"var(--teal-dark)",fontWeight:700}}>{cap(st.en)}</span>
          </div>
          {/* Examples render as standalone compound bubbles */}
          {/* Letter syllable examples in review card */}
          {teachKind==="letter"&&st.example&&<div style={{background:"var(--panel-bg)",padding:"12px 20px",borderTop:"1px solid var(--gray-100)"}}>
            <div style={{textAlign:"center"}}>
              {/[+=→]/.test(st.example)
                ?<div style={{lineHeight:1.8}}>{renderLetterExample(st.example)}</div>
                :<div style={{fontSize:20,fontWeight:700,color:"var(--purple-accent-text)",lineHeight:1.6,letterSpacing:3}}>{st.example}</div>
              }
              {st.exampleEn&&<div style={{fontSize:11,color:"var(--gray-400)",marginTop:2,letterSpacing:2}}>{st.exampleEn}</div>}
            </div>
          </div>}
        </div>}

        {/* Explanation note — clean for letters, yellow for words */}
        {/* Standalone compound-style example bubble — ALL examples */}
        {showInContext&&st.example&&(()=>{
          const ex=st.example||"";const exEn=st.exampleEn||"";
          const bS={background:dk?"linear-gradient(180deg, rgba(123,94,232,0.22), rgba(100,80,200,0.14), rgba(80,60,180,0.08))":"linear-gradient(180deg, rgba(200,190,255,0.45), rgba(220,210,255,0.3), rgba(235,230,255,0.18))",borderRadius:20,padding:"14px 18px",position:"relative",overflow:"hidden",border:dk?"1.5px solid rgba(123,94,232,0.3)":"1.5px solid rgba(180,165,240,0.4)",boxShadow:dk?"0 6px 20px rgba(0,0,0,0.3),inset 0 2px 0 rgba(255,255,255,0.07),inset 0 -3px 0 rgba(0,0,0,0.12)":"0 6px 24px rgba(123,94,232,0.1),inset 0 2px 0 rgba(255,255,255,0.75),inset 0 -3px 0 rgba(123,94,232,0.05)"};
          const gA={position:"absolute",top:0,left:"5%",right:"5%",height:"42%",borderRadius:"0 0 50% 50%",background:dk?"linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.01),transparent)":"linear-gradient(180deg,rgba(255,255,255,0.55),rgba(255,255,255,0.1),transparent)",pointerEvents:"none",zIndex:1};
          if(isDialogueEx){
            const turns=ex.split(/(?=[AB]:\s)/).filter(Boolean);
            const turnsEn=exEn.split(/(?=[AB]:\s)/).filter(Boolean);
            return <div style={{display:"flex",flexDirection:"column",gap:10,marginBottom:16}}>
              {turns.map((turn,ti)=>{const isA=turn.trim().startsWith("A:");const content=turn.replace(/^[AB]:\s*/,"").trim();const enC=(turnsEn[ti]||"").replace(/^[AB]:\s*/,"").trim();
                return <div key={ti} style={{display:"flex",justifyContent:isA?"flex-start":"flex-end",paddingLeft:isA?0:30,paddingRight:isA?30:0}}>
                  <div style={{...bS,maxWidth:"82%",borderRadius:isA?"20px 20px 20px 6px":"20px 20px 6px 20px"}}><div style={gA}/><div style={{position:"relative",zIndex:2}}>
                    <div style={{fontSize:15,fontWeight:700,color:"var(--purple-accent-text)",lineHeight:1.4,display:"flex",alignItems:"center",gap:6,flexWrap:"wrap"}}>{/[\uAC00-\uD7AF]/.test(content)?koreanHl(content):<span>{content}</span>}<SpeakerButton text={content} lang={LANG_META[lang]?.ttsLocale||"en-US"} size={13} showToast={showToast}/></div>
                    {enC&&<div style={{fontSize:12,color:dk?"rgba(200,190,255,0.7)":"var(--gray-500)",fontWeight:500,marginTop:4}}>{enC}</div>}
                  </div></div></div>;})}
            </div>;
          }
          return <div style={{...bS,marginBottom:16}}><div style={gA}/><div style={{position:"relative",zIndex:2}}>
            <div style={{fontSize:15,fontWeight:700,color:"var(--purple-accent-text)",lineHeight:1.5,display:"flex",alignItems:"center",gap:6,flexWrap:"wrap"}}>{/[\uAC00-\uD7AF]/.test(ex)?koreanHl(ex):<span>{ex}</span>}<SpeakerButton text={ex} lang={LANG_META[lang]?.ttsLocale||"en-US"} size={13} showToast={showToast}/></div>
            {exEn&&<div style={{fontSize:13,color:dk?"rgba(200,190,255,0.7)":"var(--gray-500)",fontWeight:500,marginTop:4}}>{exEn}</div>}
          </div></div>;
        })()}
        {st.note&&(teachKind==="letter"?
          <div style={{background:"var(--card-bg)",border:"2px solid rgba(255,255,255,0.55)",borderRadius:20,padding:"18px 22px",marginBottom:20}}>
            <div style={{fontSize:15,color:"var(--gray-600)",lineHeight:1.7}}>{/[\uAC00-\uD7AF]/.test(st.note||"")?koreanHl(st.note):st.note.split(/([^\u0000-\u007F]+)/g).map((part,pi)=>/[\u3130-\u318F\uAC00-\uD7AF\u0600-\u06FF]/.test(part)?<span key={pi} style={{fontSize:22,fontWeight:800,color:"var(--purple-accent-text)",margin:"0 2px"}}>{part}</span>:<span key={pi}>{part}</span>)}</div>
          </div>
        :<div style={{
            background:dk?"linear-gradient(155deg,rgba(58,36,130,0.35),rgba(44,26,105,0.25))":"linear-gradient(155deg,rgba(240,234,255,0.9),rgba(228,216,255,0.8))",
            border:dk?"1.5px solid rgba(168,144,255,0.25)":"1.5px solid rgba(168,144,255,0.35)",
            borderRadius:20,padding:"18px 20px",marginBottom:20,position:"relative",overflow:"hidden",
            boxShadow:dk?"inset 0 1px 0 rgba(255,255,255,0.06)":"inset 0 2px 0 rgba(255,255,255,0.9),0 4px 16px rgba(112,80,216,0.08)"
          }}>
          <div style={{position:"absolute",top:0,left:"5%",right:"5%",height:"40%",borderRadius:"0 0 50% 50%",
            background:dk?"linear-gradient(180deg,rgba(255,255,255,0.06)0%,transparent 100%)":"linear-gradient(180deg,rgba(255,255,255,0.6)0%,transparent 100%)",
            pointerEvents:"none"}}/>
          <div style={{position:"relative"}}>
            <div style={{fontSize:11,fontWeight:800,color:dk?"rgba(200,184,255,0.8)":"#7050D8",textTransform:"uppercase",letterSpacing:1.5,marginBottom:8,display:"flex",alignItems:"center",gap:6}}>
              <AppIcon name="lightbulb" size={15}/>{t("le_good_to_know",baseLang)}
            </div>
            <div style={{fontSize:15,lineHeight:1.75,fontWeight:500,color:dk?"rgba(220,210,255,0.85)":"#3A1F8A"}}>{st.note.split(/\\n|\n/).map((line,li)=>{
              if(!line.trim()) return <div key={li} style={{height:5}}/>;
              if(line.startsWith("⚠️")) return <div key={li} style={{color:dk?"rgba(94,234,200,0.9)":"#0D7D5C",fontWeight:700,margin:"3px 0"}}>{/[\uAC00-\uD7AF]/.test(line)?koreanHl(line):line}</div>;
              return <div key={li}>{/[\uAC00-\uD7AF]/.test(line)?koreanHl(line):line}</div>;
            })}</div>
          </div>
        </div>)}

        {/* Korean block structure diagram */}
        {renderDiagram(st.diagram)}

        {/* Arabic letter forms diagram — 2×2 positional grid */}
        {st.forms&&<div style={{background:"var(--purple-bg)",border:"2px solid rgba(123,94,232,0.15)",borderRadius:20,padding:"18px 22px",marginBottom:20}}>
          <div style={{fontSize:12,fontWeight:700,color:"var(--purple-accent-text)",textTransform:"uppercase",letterSpacing:1.5,marginBottom:12,textAlign:"center"}}>Letter Forms</div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
            {st.forms.map((f,fi)=>(
              <div key={fi} style={{textAlign:"center",padding:"12px 8px",borderRadius:14,background:"linear-gradient(180deg, #fff, #f8f8fc)",border:"1.5px solid rgba(123,94,232,0.12)",boxShadow:"0 2px 6px rgba(0,0,0,0.03)"}}>
                <div style={{fontSize:32,fontWeight:800,color:"var(--purple-accent-text)",lineHeight:1.2,direction:"rtl"}}>{f.glyph}</div>
                <div style={{fontSize:10,color:"var(--gray-400)",marginTop:4,fontWeight:600}}>{f.pos}</div>
              </div>
            ))}
          </div>
          {st.formNote&&<div style={{fontSize:12,color:"var(--gray-500)",textAlign:"center",marginTop:10,lineHeight:1.5}}>{st.formNote}</div>}
        </div>}

        {/* Conjugation mini-table — for verbs */}
        {st.conjugation&&<div style={{background:"linear-gradient(135deg, #F0F4FF, #EBF0FF)",border:"2px solid rgba(74,143,231,0.15)",borderRadius:20,padding:"18px 22px",marginBottom:20}}>
          <div style={{display:"flex",gap:10,alignItems:"center",marginBottom:12}}>
            <div style={{width:32,height:32,borderRadius:10,background:"linear-gradient(135deg, var(--blue), #3A7BD5)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:15,flexShrink:0,color:"white",fontWeight:800}}>⚙️</div>
            <div style={{fontSize:12,fontWeight:700,color:"var(--blue)",textTransform:"uppercase",letterSpacing:1.5}}>Conjugation</div>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:4}}>
            {Object.entries(st.conjugation).map(([pron,form])=>(
              <div key={pron} style={{display:"flex",gap:8,alignItems:"baseline",padding:"4px 8px",borderRadius:8,background:"rgba(255,255,255,0.6)"}}>
                <span style={{fontSize:13,color:"var(--gray-400)",fontWeight:600,minWidth:50}}>{pron}</span>
                <span style={{fontSize:14,color:"var(--gray-800)",fontWeight:700}}>{form}</span>
              </div>
            ))}
          </div>
        </div>}

        <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:10,marginTop:4}}>
          {si>0&&<NavArrow onClick={goBack} isBack/>}
          <NavArrow onClick={()=>{learnWord(st.nl);setShowPhonetic(false);setShowCognate(false);setShowHanja(false);goNext();}}/>
        </div>
      </div>
    </div>
  );

  // ═══ TIP — Grammar / pattern / culture ═══
  // ═══ VERB TABLE — visual conjugation grid (purple/green scheme) ═══
  if(st.type==="verb_table") return(
    <div className="anim" key={si}>
      <ProgressBar/>
      <div style={{maxWidth:480,margin:"0 auto"}}>

        {/* Header */}
        <div style={{background:"linear-gradient(135deg, #7B5EE8, #6B4FCC)",borderRadius:"20px 20px 0 0",padding:"18px 24px",textAlign:"center"}}>
          <div style={{fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:2,color:"rgba(255,255,255,0.6)",marginBottom:4}}>{st.label||"Conjugation"}</div>
          <h3 className="hd" style={{fontSize:22,fontWeight:800,color:"white",margin:0}}>{st.title}</h3>
        </div>

        {/* Grid */}
        <div style={{background:"var(--card-bg)",border:"2px solid rgba(123,94,232,0.15)",borderTop:"none",borderRadius:"0 0 20px 20px",overflow:"hidden"}}>
          {(st.groups||[{label:null,rows:st.rows}]).map((grp,gi)=>(
            <div key={gi}>
              {grp.label&&<div style={{background:"rgba(123,94,232,0.04)",padding:"8px 20px",borderTop:gi>0?"1.5px solid rgba(123,94,232,0.1)":"none"}}>
                <span style={{fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:1.5,color:"var(--purple-accent-text)"}}>{grp.label}</span>
              </div>}
              {grp.rows.map((r,ri)=>(
                <div key={ri} style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",borderTop:(gi>0||ri>0||grp.label)?"1px solid var(--gray-100)":"none"}}>
                  {/* Pronoun */}
                  <div style={{padding:"10px 16px",background:"rgba(123,94,232,0.03)"}}>
                    <span style={{fontSize:15,fontWeight:700,color:"var(--purple-accent-text)"}}>{r.pronoun}</span>
                  </div>
                  {/* Verb form */}
                  <div style={{padding:"10px 16px",textAlign:"center",background:"rgba(123,94,232,0.06)"}}>
                    <span style={{fontSize:17,fontWeight:800,color:"#5B3DB8",fontFamily:"'Quicksand','system-ui',sans-serif"}}>{r.form}</span>
                  </div>
                  {/* English */}
                  <div style={{padding:"10px 16px",textAlign:"right"}}>
                    <span style={{fontSize:14,fontWeight:600,color:"var(--teal-text)"}}>{r.en}</span>
                  </div>
                </div>
              ))}
            </div>
          ))}

          {/* Summary note */}
          {st.note&&<div style={{borderTop:"1.5px solid rgba(123,94,232,0.1)",padding:"14px 20px",background:"rgba(46,205,167,0.04)"}}>
            <div style={{fontSize:14,color:"var(--gray-600)",lineHeight:1.6,textAlign:"center"}}>{st.note.split(/\\n|\n/).map((line,i)=>{
              const isBold=/^\d|^Only|^Same|^Just|^That|^Compare/.test(line.trim());
              return <div key={i} style={{fontWeight:isBold?700:400,color:isBold?"var(--gray-700)":"var(--gray-500)",marginTop:i>0&&!line.trim()?6:0}}>{line||"\u00A0"}</div>;
            })}</div>
          </div>}
        </div>

        {/* DeepDive */}
        {st.deepDive&&(()=>{const dd=typeof st.deepDive==="string"?{title:"Deep Dive",text:st.deepDive}:st.deepDive;return <div style={{marginTop:16}}>
          <button onClick={()=>setShowDeepDive(!showDeepDive)} style={{background:"none",border:"none",cursor:"pointer",padding:"12px 0",width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between",fontSize:14,fontWeight:700,color:"var(--purple-accent-text)",fontFamily:"'Nunito','system-ui',sans-serif"}}>
            <span><AppIcon name="lightbulb" size={16} style={{marginRight:6}}/> {dd.title}</span>
            <span style={{fontSize:18,transition:"transform .2s",transform:showDeepDive?"rotate(180deg)":"rotate(0)"}}>⌄</span>
          </button>
          {showDeepDive&&<div className="anim">
            <div style={{
              background:dk
                ?"linear-gradient(180deg, rgba(123,94,232,0.16) 0%, rgba(100,80,200,0.1) 40%, rgba(80,60,180,0.06) 100%)"
                :"linear-gradient(180deg, rgba(200,190,255,0.35) 0%, rgba(220,210,255,0.22) 50%, rgba(235,230,255,0.12) 100%)",
              borderRadius:20,padding:"18px 20px",position:"relative",overflow:"hidden",
              border:dk?"1.5px solid rgba(123,94,232,0.25)":"1.5px solid rgba(180,165,240,0.3)",
              boxShadow:dk
                ?"0 4px 16px rgba(0,0,0,0.25), 0 0 10px rgba(123,94,232,0.15), inset 0 2px 0 rgba(255,255,255,0.06), inset 0 -2px 0 rgba(0,0,0,0.1)"
                :"0 4px 18px rgba(123,94,232,0.08), 0 0 10px rgba(180,165,240,0.1), inset 0 2px 0 rgba(255,255,255,0.7), inset 0 -2px 0 rgba(123,94,232,0.04)"}}>
              <div style={{position:"absolute",top:0,left:"5%",right:"5%",height:"35%",borderRadius:"0 0 50% 50%",background:dk?"linear-gradient(180deg, rgba(255,255,255,0.05) 0%, transparent 100%)":"linear-gradient(180deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.08) 60%, transparent 100%)",pointerEvents:"none",zIndex:1}}/>
              <div style={{position:"relative",zIndex:2}}>
              {(dd.text||"").split(/\\n|\n/).map((line,i)=>{
                if(!line.trim()) return <div key={i} style={{height:8}}/>;
                if(line.startsWith("⚠️")) return <div key={i} style={{background:dk?"rgba(245,166,35,0.12)":"rgba(245,166,35,0.08)",borderRadius:10,padding:"8px 12px",margin:"6px 0",display:"flex",gap:6,alignItems:"flex-start"}}><span style={{fontSize:14,lineHeight:1.2,flexShrink:0}}>⚠️</span><span style={{fontSize:13,color:"var(--gray-700)",fontWeight:600,lineHeight:1.55,fontFamily:"'Nunito','system-ui',sans-serif"}}>{smartHl(line.slice(2).trim())}</span></div>;
                if(/^[A-Z][A-Z ]{2,}:/.test(line.trim())) return <div key={i} style={{background:dk?"rgba(123,94,232,0.12)":"rgba(123,94,232,0.06)",borderRadius:8,padding:"6px 12px",margin:"8px 0 2px",borderLeft:"2px solid var(--purple-accent)"}}><span style={{fontSize:12,fontWeight:800,color:"var(--purple-accent-text)",letterSpacing:0.8,fontFamily:"'Nunito','system-ui',sans-serif"}}>{smartHl(line.trim())}</span></div>;
                if(line.startsWith("•")){
                  const bullet=line.slice(1).trim();
                  const bArrow=bullet.match(/^(.+?)\s*[=→]\s*(.+)$/);
                  if(bArrow) return <div key={i} style={{padding:"3px 0 3px 6px",display:"flex",gap:6,alignItems:"center",flexWrap:"wrap"}}><span style={{color:"var(--purple-accent-text)",fontWeight:700}}>•</span><span style={{fontSize:15,fontWeight:700,color:"var(--gray-700)",fontFamily:"'Quicksand','system-ui',sans-serif"}}>{smartHl(bArrow[1].trim())}</span><span style={{color:dk?"rgba(180,165,240,0.4)":"var(--gray-300)",fontSize:10}}>→</span><span style={{fontSize:13,fontWeight:500,color:"var(--gray-500)",fontFamily:"'Nunito','system-ui',sans-serif"}}>{smartHl(bArrow[2].trim())}</span></div>;
                  return <div key={i} style={{fontSize:14,color:"var(--gray-600)",padding:"2px 0 2px 6px",display:"flex",gap:6,fontFamily:"'Nunito','system-ui',sans-serif",fontWeight:500}}><span style={{color:"var(--purple-accent-text)",fontWeight:700}}>•</span><span>{smartHl(bullet)}</span></div>;
                }
                const arrow=line.match(/^([A-Za-zÀ-ÿ'][^=→]{0,50}?)\s*[→=]\s*(.+)$/);
                if(arrow&&!line.startsWith("✅")&&!line.startsWith("❌")) return <div key={i} style={{display:"flex",gap:6,alignItems:"center",padding:"3px 0",flexWrap:"wrap"}}><span style={{fontSize:15,fontWeight:700,color:"var(--gray-700)",fontFamily:"'Quicksand','system-ui',sans-serif"}}>{smartHl(arrow[1].trim())}</span><span style={{color:dk?"rgba(180,165,240,0.4)":"var(--gray-300)",fontSize:10}}>→</span><span style={{fontSize:13,fontWeight:500,color:"var(--gray-500)",fontFamily:"'Nunito','system-ui',sans-serif"}}>{smartHl(arrow[2].trim())}</span></div>;
                const isHeader=line.trim().endsWith(":");
                return <div key={i} style={{fontSize:isHeader?13:14,color:isHeader?"var(--gray-800)":"var(--gray-600)",fontWeight:isHeader?700:500,lineHeight:1.7,marginTop:isHeader?6:0,padding:"1px 0",fontFamily:"'Nunito','system-ui',sans-serif"}}>{smartHl(line)}</div>;
              })}
              </div>
            </div>
          </div>}
        </div>})()}

        {/* Continue */}
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:10,marginTop:20}}>
          {si>0&&<NavArrow onClick={goBack} isBack/>}
          <NavArrow onClick={()=>{setShowDeepDive(false);goNext();}}/>
        </div>
      </div>
    </div>
  );

  if(st.type==="tip") return(
    <div className="anim" key={si}>
      <ProgressBar/>
      {wordBubble&&<WordBubble entry={wordBubble.entry} word={wordBubble.word} stem={wordBubble.stem} particle={wordBubble.particle} onClose={()=>setWordBubble(null)}/>}
      <div style={{maxWidth:500,margin:"0 auto"}}>
        <div style={{background:"var(--card-bg)",borderRadius:22,border:"2px solid rgba(255,255,255,0.45)",borderLeft:"4px solid var(--purple-accent)",overflow:"hidden",...glass}}>
          <div style={{padding:"18px 24px 12px"}}>
            {/* Foundations reference — top of card */}
            {st.fRef&&<div style={{marginBottom:10}}>
              <span style={{display:"inline-flex",alignItems:"center",gap:6,background:"var(--purple-bg)",border:"1.5px solid var(--purple-border)",borderRadius:10,padding:"5px 12px",fontSize:11,color:"var(--purple-accent-text)",fontWeight:700,cursor:"pointer",transition:"all .15s"}}>📖 Foundations: {st.fRef.replace(/^nl_/,"").replace(/_/g," ").replace(/\b\w/g,c=>c.toUpperCase())}</span>
            </div>}
            <div style={{color:"var(--purple-accent-text)",fontSize:10,textTransform:"uppercase",letterSpacing:2.5,marginBottom:8,fontWeight:700,fontFamily:"'Nunito','system-ui',sans-serif",display:"flex",alignItems:"center",gap:6}}><AppIcon name="lightbulb" size={18}/>Good to know</div>
            {st.title&&<h3 style={{fontSize:19,fontWeight:800,color:"var(--gray-800)",fontFamily:"'Quicksand','system-ui',sans-serif",margin:0,lineHeight:1.35,letterSpacing:"-0.3px"}}>{st.title.replace(/^[\u{1F300}-\u{1F9FF}\u{2600}-\u{27BF}\u{1FA00}-\u{1FA9F}]\s*/u,"")}</h3>}
          </div>
          <div style={{padding:"0 24px 22px"}}>
            {/* Conjugation grid — when rows[] is present */}
            {st.rows&&<div style={{marginBottom:st.text?14:0}}>
              {st.rows.map((r,ri)=>{
                const isGroup=r.group;
                return <div key={ri} style={{display:"flex",alignItems:"center",padding:"8px 0",borderBottom:ri<st.rows.length-1?"1px solid rgba(123,94,232,0.08)":"none",gap:8,...(isGroup?{paddingLeft:6,borderLeft:"3px solid rgba(123,94,232,0.2)"}:{})}}>
                  <div style={{flex:"1 1 50%",display:"flex",alignItems:"baseline",gap:6}}>
                    <span style={{fontSize:19,fontWeight:800,color:"var(--gray-800)"}}>{r.nl}</span>
                    {r.note&&<span style={{fontSize:10,fontWeight:700,color:"var(--purple-accent-text)",background:"rgba(123,94,232,0.08)",borderRadius:6,padding:"1px 6px",letterSpacing:0.5}}>{r.note}</span>}
                  </div>
                  <div style={{flex:"1 1 50%",textAlign:"right"}}>
                    <span style={{fontSize:14,color:"var(--gray-400)",fontWeight:500}}>{r.en}</span>
                  </div>
                </div>;
              })}
            </div>}
            {st.text&&(()=>{
              const hl=(text)=>(/[\uAC00-\uD7AF]/.test(text||"")?koreanHl(text):smartHl(text));
              const isTranslationCard=st.title&&/vertal/i.test(st.title);
              // ── Pair-card pre-pass: group Korean line + → English line into pairs ──
              const rawLines=st.text.split(/\\n|\n/);
              const rendered=[];
              let ri=0;
              while(ri<rawLines.length){
                const line=rawLines[ri];
                const nextLine=rawLines[ri+1]||"";
                const hasKorean=/[\uAC00-\uD7AF\u3130-\u318F]/.test(line.trim());
                const nextIsArrow=nextLine.trim().startsWith("→");
                // Pair: Korean line followed by → English line
                if(hasKorean&&nextIsArrow&&line.trim()){
                  const translation=nextLine.trim().slice(1).trim();
                  rendered.push(
                    <div key={ri} style={{
                      background:dk?"linear-gradient(180deg, rgba(123,94,232,0.22) 0%, rgba(100,80,200,0.14) 40%, rgba(80,60,180,0.08) 100%)":"linear-gradient(180deg, rgba(200,190,255,0.45) 0%, rgba(220,210,255,0.3) 50%, rgba(235,230,255,0.18) 100%)",
                      borderRadius:16,padding:"14px 18px",margin:"8px 0",position:"relative",overflow:"hidden",
                      border:dk?"1.5px solid rgba(123,94,232,0.3)":"1.5px solid rgba(180,165,240,0.4)",
                      boxShadow:dk?"0 4px 16px rgba(0,0,0,0.25), inset 0 2px 0 rgba(255,255,255,0.07), inset 0 -2px 0 rgba(0,0,0,0.1)":"0 4px 18px rgba(123,94,232,0.08), inset 0 2px 0 rgba(255,255,255,0.75), inset 0 -2px 0 rgba(123,94,232,0.04)"}}>
                      <div style={{position:"absolute",top:0,left:"5%",right:"5%",height:"44%",borderRadius:"0 0 50% 50%",background:dk?"linear-gradient(180deg, rgba(255,255,255,0.07) 0%, transparent 100%)":"linear-gradient(180deg, rgba(255,255,255,0.58) 0%, rgba(255,255,255,0.1) 60%, transparent 100%)",pointerEvents:"none",zIndex:1}}/>
                      <div style={{position:"relative",zIndex:2}}>
                        <div style={{fontSize:22,fontWeight:800,color:"var(--purple-accent-text)",lineHeight:1.3,marginBottom:8}}>{hl(line.trim())}</div>
                        <div style={{fontSize:13,fontWeight:500,color:dk?"rgba(200,190,255,0.6)":"var(--gray-500)",lineHeight:1.5}}>{hl(translation)}</div>
                      </div>
                    </div>
                  );
                  ri+=2;
                  continue;
                }
                // → line not preceded by Korean (standalone translation) — teal text
                if(line.trim().startsWith("→")&&!hasKorean){
                  rendered.push(<div key={ri} style={{fontSize:13,fontWeight:500,color:"var(--gray-500)",paddingLeft:16,paddingBottom:4,lineHeight:1.5}}>{hl(line.trim().slice(1).trim())}</div>);
                  ri++;continue;
                }
                rendered.push(ri);// placeholder — fall through to normal renderer
                ri++;
              }
              return rendered.map((item,i)=>{
              if(typeof item!=="number") return item;
              const line=rawLines[item];const i2=item;
              if(!line.trim()) return <div key={i2} style={{height:20,borderBottom:"1px solid var(--gray-100)",marginBottom:4}}/>;
              // ⚠️ Warning line — amber background block
              if(line.startsWith("⚠️")){
                return <div key={i} style={{background:"rgba(245,166,35,0.08)",border:"1.5px solid rgba(245,166,35,0.18)",borderRadius:12,padding:"10px 14px",margin:"8px 0",display:"flex",gap:8,alignItems:"flex-start"}}>
                  <span style={{fontSize:16,lineHeight:1.2,flexShrink:0}}>⚠️</span>
                  <span style={{fontSize:14,color:"var(--gray-700)",fontWeight:600,lineHeight:1.6}}>{hl(line.slice(2).trim())}</span>
                </div>;
              }
              // Section header — ALL CAPS word(s) followed by colon OR standalone
              if(/^[A-Z][A-Z ]{2,}:/.test(line.trim())||/^[A-Z][A-Z ]+\([^)]*\):/.test(line.trim())||/^[A-Z][A-Z ]{2,}$/.test(line.trim())){
                return <div key={i} style={{background:"linear-gradient(135deg, rgba(123,94,232,0.08), rgba(123,94,232,0.03))",borderRadius:10,padding:"8px 14px",margin:"10px 0 4px",borderLeft:"3px solid var(--purple-accent)"}}>
                  <span style={{fontSize:13,fontWeight:800,color:"var(--purple-accent-text)",letterSpacing:1}}>{hl(line.trim())}</span>
                </div>;
              }
              // Translation reveal line (→ at start in Vertalingen cards)
              if(isTranslationCard&&line.startsWith("→")){
                return <TranslationReveal key={i} text={line.slice(1).trim()} hl={hl}/>;
              }
              if(line.startsWith("•")){
                const bullet=line.slice(1).trim();
                const bArrow=bullet.match(/^(.+?)\s*[=→]\s*(.+)$/);
                if(bArrow) return <div key={i} style={{padding:"4px 0 4px 8px",display:"flex",gap:6,alignItems:"center",flexWrap:"wrap"}}><span style={{color:"var(--purple-accent-text)",fontWeight:700}}>•</span><span style={{fontSize:16,fontWeight:700,color:"var(--gray-700)",fontFamily:"'Quicksand','system-ui',sans-serif"}}>{hl(bArrow[1].trim())}</span><span style={{color:"var(--gray-300)",fontSize:11}}>→</span><span style={{fontSize:14,fontWeight:500,color:"var(--gray-500)",fontFamily:"'Nunito','system-ui',sans-serif"}}>{hl(bArrow[2].trim())}</span></div>;
                return <div key={i} style={{fontSize:15,color:"var(--gray-600)",padding:"3px 0 3px 8px",display:"flex",gap:6,lineHeight:1.6,fontFamily:"'Nunito','system-ui',sans-serif",fontWeight:500}}><span style={{color:"var(--purple-accent-text)",fontWeight:700}}>•</span><span>{hl(bullet)}</span></div>;
              }
              // ✅ / ❌ lines
              if(line.startsWith("✅")) return <div key={i} style={{background:"rgba(46,205,167,0.06)",borderRadius:8,padding:"6px 10px",margin:"2px 0",fontSize:14,fontWeight:500,color:"var(--gray-700)",lineHeight:1.6,fontFamily:"'Nunito','system-ui',sans-serif"}}>{hl(line)}</div>;
              if(line.startsWith("❌")) return <div key={i} style={{background:"rgba(239,68,68,0.06)",borderRadius:8,padding:"6px 10px",margin:"2px 0",fontSize:14,fontWeight:500,color:"var(--gray-700)",lineHeight:1.6,fontFamily:"'Nunito','system-ui',sans-serif"}}>{hl(line)}</div>;
              // Full line: nl = en  or  nl → en (short pairs only)
              const arrow=line.match(/^([A-Za-zÀ-ÿ'][^=→]{0,48}?)\s*[=→]\s*(.+)$/);
              if(arrow&&!line.startsWith("✅")&&!line.startsWith("❌")){const isAllCaps=/^[A-Z][A-Z ]+$/.test(arrow[1].trim());return <div key={i} style={{display:"flex",gap:8,alignItems:"center",padding:"4px 0",flexWrap:"wrap"}}><span style={{fontSize:isAllCaps?13:16,fontWeight:isAllCaps?800:700,color:isAllCaps?"var(--purple-accent-text)":"var(--gray-700)",fontFamily:"'Quicksand','system-ui',sans-serif",letterSpacing:isAllCaps?1:0}}>{hl(arrow[1].trim())}</span><span style={{color:"var(--gray-300)",fontSize:11}}>→</span><span style={{fontSize:14,fontWeight:500,color:"var(--gray-500)",fontFamily:"'Nunito','system-ui',sans-serif"}}>{hl(arrow[2].trim())}</span></div>;}
              // Pure Korean word line → glossy pill grid (e.g. 커피  택시  버스)
              const koWords=line.trim().split(/\s+/).filter(Boolean);
              const isPureKoLine=koWords.length>=3&&koWords.every(w=>/^[\uAC00-\uD7AF\u3130-\u318F]+$/.test(w));
              if(isPureKoLine){return <div key={i2} style={{display:"flex",flexWrap:"wrap",gap:8,justifyContent:"center",padding:"6px 0"}}>{koWords.map((w,wi)=><span key={wi} style={{display:"inline-flex",alignItems:"center",background:dk?"linear-gradient(160deg,rgba(255,255,255,0.12),rgba(255,255,255,0.04))":"linear-gradient(160deg,rgba(255,255,255,0.92),rgba(255,255,255,0.65))",borderRadius:14,padding:"8px 16px",border:dk?"1px solid rgba(255,255,255,0.1)":"1px solid rgba(180,165,240,0.25)",boxShadow:dk?"0 3px 10px rgba(0,0,0,0.25),inset 0 1px 0 rgba(255,255,255,0.1)":"0 3px 12px rgba(123,94,232,0.08),inset 0 2px 0 rgba(255,255,255,0.9)",fontSize:18,fontWeight:800,color:"var(--purple-accent-text)"}}>{w}</span>)}</div>;}
              // Korean-first lines: split Korean above, English below
              if(/^[\uAC00-\uD7AF\u3130-\u318F]/.test(line.trim())&&/[a-zA-Z]{3,}/.test(line)&&!/\(.*[\uAC00-\uD7AF]/.test(line)){
                const koMatch=line.trim().match(/^([\uAC00-\uD7AF\u3130-\u318F][\uAC00-\uD7AF\u3130-\u318F\s/→+]*?)\s*[=:.]\s*(.+)$/);
                if(koMatch){
                  return <div key={i2} style={{margin:"6px 0"}}>
                    <div style={{fontSize:17,fontWeight:700,color:"var(--purple-accent-text)",lineHeight:1.4,padding:"2px 0"}}>{hl(koMatch[1].trim())}</div>
                    <div style={{fontSize:13,color:"var(--gray-500)",fontWeight:500,lineHeight:1.5,paddingLeft:2}}>{koMatch[2].trim()}</div>
                  </div>;
                }
              }
              // Regular text: only bold if it's a section-like header ending with ":"
              const isHeader=line.trim().endsWith(":");
              return <div key={i2} style={{fontSize:14,color:isHeader?"var(--gray-800)":"var(--gray-600)",fontWeight:isHeader?700:500,lineHeight:1.65,marginTop:isHeader?10:0,padding:"2px 0",fontFamily:"'Nunito','system-ui',sans-serif"}}>{hl(line)}</div>;
            });})()}
          </div>
          {st.deepDive&&(()=>{const dd=typeof st.deepDive==="string"?{title:"Deep Dive",text:st.deepDive}:st.deepDive;return <div style={{borderTop:"1.5px solid rgba(123,94,232,0.12)",padding:"0 24px 4px"}}>
            <button onClick={()=>setShowDeepDive(!showDeepDive)} style={{background:"none",border:"none",cursor:"pointer",padding:"14px 0",width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between",fontSize:14,fontWeight:700,color:"var(--purple-accent-text)",fontFamily:"'Nunito','system-ui',sans-serif"}}>
              <span><AppIcon name="lightbulb" size={16} style={{marginRight:6}}/>  {dd.title}</span>
              <span style={{display:"flex",alignItems:"center",gap:6}}><span style={{fontSize:18,transition:"transform .2s",transform:showDeepDive?"rotate(180deg)":"rotate(0)"}}>⌄</span></span>
            </button>
            {showDeepDive&&<div className="anim" style={{paddingBottom:16}}>
              <div style={{
                background:dk
                  ?"linear-gradient(180deg, rgba(123,94,232,0.16) 0%, rgba(100,80,200,0.1) 40%, rgba(80,60,180,0.06) 100%)"
                  :"linear-gradient(180deg, rgba(200,190,255,0.35) 0%, rgba(220,210,255,0.22) 50%, rgba(235,230,255,0.12) 100%)",
                borderRadius:20,padding:"18px 20px",position:"relative",overflow:"hidden",
                border:dk?"1.5px solid rgba(123,94,232,0.25)":"1.5px solid rgba(180,165,240,0.3)",
                boxShadow:dk
                  ?"0 4px 16px rgba(0,0,0,0.25), 0 0 10px rgba(123,94,232,0.15), inset 0 2px 0 rgba(255,255,255,0.06), inset 0 -2px 0 rgba(0,0,0,0.1)"
                  :"0 4px 18px rgba(123,94,232,0.08), 0 0 10px rgba(180,165,240,0.1), inset 0 2px 0 rgba(255,255,255,0.7), inset 0 -2px 0 rgba(123,94,232,0.04)"}}>
                {/* Gloss arc */}
                <div style={{position:"absolute",top:0,left:"5%",right:"5%",height:"35%",
                  borderRadius:"0 0 50% 50%",
                  background:dk
                    ?"linear-gradient(180deg, rgba(255,255,255,0.05) 0%, transparent 100%)"
                    :"linear-gradient(180deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.08) 60%, transparent 100%)",
                  pointerEvents:"none",zIndex:1}}/>
                <div style={{position:"relative",zIndex:2}}>
                {(dd.text||"").split(/\\n|\n/).map((line,i)=>{
                  if(!line.trim()) return <div key={i} style={{height:8}}/>;
                  if(line.startsWith("⚠️")) return <div key={i} style={{background:dk?"rgba(245,166,35,0.12)":"rgba(245,166,35,0.08)",borderRadius:10,padding:"8px 12px",margin:"6px 0",display:"flex",gap:6,alignItems:"flex-start"}}><span style={{fontSize:14,lineHeight:1.2,flexShrink:0}}>⚠️</span><span style={{fontSize:13,color:"var(--gray-700)",fontWeight:600,lineHeight:1.55,fontFamily:"'Nunito','system-ui',sans-serif"}}>{smartHl(line.slice(2).trim())}</span></div>;
                  if(/^[A-Z][A-Z ]{2,}:/.test(line.trim())) return <div key={i} style={{background:dk?"rgba(123,94,232,0.12)":"rgba(123,94,232,0.06)",borderRadius:8,padding:"6px 12px",margin:"8px 0 2px",borderLeft:"2px solid var(--purple-accent)"}}><span style={{fontSize:12,fontWeight:800,color:"var(--purple-accent-text)",letterSpacing:0.8,fontFamily:"'Nunito','system-ui',sans-serif"}}>{smartHl(line.trim())}</span></div>;
                  if(line.startsWith("•")){
                    const bullet=line.slice(1).trim();
                    const bArrow=bullet.match(/^(.+?)\s*[=→]\s*(.+)$/);
                    if(bArrow) return <div key={i} style={{padding:"3px 0 3px 6px",display:"flex",gap:6,alignItems:"center",flexWrap:"wrap"}}><span style={{color:"var(--purple-accent-text)",fontWeight:700}}>•</span><span style={{fontSize:15,fontWeight:700,color:"var(--gray-700)",fontFamily:"'Quicksand','system-ui',sans-serif"}}>{smartHl(bArrow[1].trim())}</span><span style={{color:dk?"rgba(180,165,240,0.4)":"var(--gray-300)",fontSize:10}}>→</span><span style={{fontSize:13,fontWeight:500,color:"var(--gray-500)",fontFamily:"'Nunito','system-ui',sans-serif"}}>{smartHl(bArrow[2].trim())}</span></div>;
                    return <div key={i} style={{fontSize:14,color:"var(--gray-600)",padding:"2px 0 2px 6px",display:"flex",gap:6,fontFamily:"'Nunito','system-ui',sans-serif",fontWeight:500}}><span style={{color:"var(--purple-accent-text)",fontWeight:700}}>•</span><span>{smartHl(bullet)}</span></div>;
                  }
                  const arrow=line.match(/^([A-Za-zÀ-ÿ'][^=→]{0,48}?)\s*[=→]\s*(.+)$/);
                  if(arrow&&!line.startsWith("✅")&&!line.startsWith("❌")) return <div key={i} style={{display:"flex",gap:6,alignItems:"center",padding:"3px 0",flexWrap:"wrap"}}><span style={{fontSize:15,fontWeight:700,color:"var(--gray-700)",fontFamily:"'Quicksand','system-ui',sans-serif"}}>{smartHl(arrow[1].trim())}</span><span style={{color:dk?"rgba(180,165,240,0.4)":"var(--gray-300)",fontSize:10}}>→</span><span style={{fontSize:13,fontWeight:500,color:"var(--gray-500)",fontFamily:"'Nunito','system-ui',sans-serif"}}>{smartHl(arrow[2].trim())}</span></div>;
                  const isHeader=line.trim().endsWith(":");
                  return <div key={i} style={{fontSize:isHeader?13:14,color:isHeader?"var(--gray-800)":"var(--gray-600)",fontWeight:isHeader?700:500,lineHeight:1.7,marginTop:isHeader?6:0,padding:"1px 0",fontFamily:"'Nunito','system-ui',sans-serif"}}>{smartHl(line)}</div>;
                })}
                </div>
              </div>
            </div>}
          </div>})()}
        </div>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:10,marginTop:24}}>
          {si>0&&<NavArrow onClick={goBack} isBack/>}
          <NavArrow onClick={()=>{setShowDeepDive(false);goNext();}}/>
        </div>
      </div>
    </div>
  );

  // ═══ MULTIPLE CHOICE ═══
  if(st.type==="mc") return(
    <div className="anim" key={si}>
      <ProgressBar/>
      <div style={{maxWidth:500,margin:"0 auto"}}>
        {/* Question card — compound glossy bubble */}
        <div style={{
          background:dk
            ?"linear-gradient(180deg, rgba(123,94,232,0.22) 0%, rgba(100,80,200,0.14) 40%, rgba(80,60,180,0.08) 100%)"
            :"linear-gradient(180deg, rgba(200,190,255,0.45) 0%, rgba(220,210,255,0.3) 50%, rgba(235,230,255,0.18) 100%)",
          borderRadius:22,padding:"22px 26px",marginBottom:18,textAlign:"center",position:"relative",overflow:"hidden",
          border:dk?"1.5px solid rgba(123,94,232,0.3)":"1.5px solid rgba(180,165,240,0.4)",
          boxShadow:dk
            ?"0 6px 20px rgba(0,0,0,0.3), inset 0 2px 0 rgba(255,255,255,0.07), inset 0 -3px 0 rgba(0,0,0,0.12)"
            :"0 6px 24px rgba(123,94,232,0.1), inset 0 2px 0 rgba(255,255,255,0.75), inset 0 -3px 0 rgba(123,94,232,0.05)"}}>
          <div style={{position:"absolute",top:0,left:"5%",right:"5%",height:"42%",borderRadius:"0 0 50% 50%",background:dk?"linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.01),transparent)":"linear-gradient(180deg,rgba(255,255,255,0.55),rgba(255,255,255,0.1),transparent)",pointerEvents:"none",zIndex:1}}/>
          <div style={{position:"relative",zIndex:2}}>
          <div style={{color:"var(--purple-accent-text)",fontSize:10,textTransform:"uppercase",letterSpacing:2.5,marginBottom:10,fontWeight:700,fontFamily:"'Nunito','system-ui',sans-serif"}}>{t("le_choose_correct",baseLang)}</div>
          {(()=>{const{korean:mcKo,english:mcEn}=splitKoEn(st.q||"");return<><div style={{fontSize:17,fontWeight:600,lineHeight:1.55,fontFamily:"'Nunito','system-ui',sans-serif",color:"var(--gray-800)"}}>
            {/[\uAC00-\uD7AF]/.test(mcKo)?koreanHl(mcKo):smartHl(mcKo)}
          </div>{renderEnglishBelow(mcEn,true)}</>;})()}
          {st.hint&&!showHint&&!answered&&!hideQuizRom&&<div style={{marginTop:8}}><button onClick={()=>setShowHint&&setShowHint(true)} style={{background:"none",border:"none",color:"var(--gray-300)",fontSize:12,cursor:"pointer",fontFamily:"inherit",padding:"4px 12px",borderRadius:8,transition:"all .15s"}} onMouseEnter={e=>{e.target.style.color="#7B5EE8";e.target.style.background="rgba(123,94,232,0.06)";}} onMouseLeave={e=>{e.target.style.color="var(--gray-300)";e.target.style.background="none";}}><AppIcon name="lightbulb" size={20} style={{marginRight:5}}/>Need a hint?</button></div>}
          {showHint&&st.hint&&!answered&&!hideQuizRom&&<div style={{color:"var(--gray-400)",fontSize:13,marginTop:4}}><AppIcon name="lightbulb" size={20} style={{marginRight:5,display:"inline-block"}}/>{smartHl(st.hint)}</div>}
          </div>
        </div>
        {/* Options grid — single column for Korean, 2-col for short text */}
        {(()=>{
          const allOpts=shuffleOpts(st.opts,si);
          const hasKoOpts=allOpts.some(o=>/[\uAC00-\uD7AF]/.test(o));
          const anyLong=allOpts.some(o=>o.length>18);
          const useSingleCol=hasKoOpts||anyLong;
          return <div style={{display:"grid",gridTemplateColumns:useSingleCol?"1fr":"1fr 1fr",gap:10}}>
          {allOpts.map((o,i)=>{
            let cls="quiz-opt";
            const isFocused=i===focusIdx&&!answered;
            if(answered){if(o===st.ans)cls+=" correct";else if(o===selOpt)cls+=" wrong";else cls+=" dis";}
            const hasKo=/[\uAC00-\uD7AF]/.test(o);const hasArabic=/[\u0600-\u06FF]/.test(o);
            return <div key={i} className={cls} style={{wordBreak:"keep-all",whiteSpace:hasKo&&o.length<=12?"nowrap":"normal",...(isFocused?{outline:"3px solid var(--purple-accent)",outlineOffset:2,boxShadow:"0 0 0 6px rgba(123,94,232,0.12)"}:{}), ...(hasKo?{fontSize:o.length<=4?18:o.length<=8?16:14,fontWeight:700,lineHeight:1.35}:{}), ...(hasArabic?{direction:"rtl",fontFamily:"'Noto Sans Arabic',sans-serif"}:{})}} onMouseEnter={()=>{if(!answered)UISounds.tick();}} onClick={()=>{if(answered)return;UISounds.click();setSelOpt(o);checkAndNext(o===st.ans);}}><div className="quiz-letter">{"ABCD"[i]}</div>{/[\uAC00-\uD7AF]/.test(o)?o.split(/([\uAC00-\uD7AF\u3130-\u318F]+)/).map((seg,si)=>/[\uAC00-\uD7AF\u3130-\u318F]/.test(seg)?<span key={si} style={{color:"var(--purple-accent-text)",fontWeight:800}}>{seg}</span>:<span key={si}>{seg}</span>):o}</div>;
          })}
          </div>;
        })()}
        {!answered&&<div style={{textAlign:"center",marginTop:10,fontSize:11,color:"var(--gray-300)"}}>Arrow keys navigate · Space select</div>}
        {answered&&<div style={{textAlign:"center",marginTop:14,fontSize:14,fontWeight:700,color:selOpt===st.ans?"var(--teal-dark)":"var(--coral)"}}>{selOpt===st.ans?t("le_correct",baseLang):<span>{t("le_not_quite",baseLang)} — {t("le_answer_is",baseLang)}: {/[^\u0000-\u007F]/.test(st.ans)?<span style={{fontSize:17,fontWeight:800,color:"var(--purple-accent-text)"}}>{st.ans}</span>:st.ans}</span>}</div>}
        {answered&&<ContinueButton onClick={goNext} correct={selOpt===st.ans} baseLang={baseLang} spaceRef={continueRef} onBack={goBack} canGoBack={si>0}/>}
      </div>
    </div>
  );

  // ═══ TRANSLATE ═══
  if(st.type==="tr"){
    // mk format: resolve from MEANINGS dict; legacy: use s/a directly
    let trS=st.s, trA=st.a, isNlEn;
    if(st.mk&&MEANINGS[st.mk]){
      const m=MEANINGS[st.mk];
      const bl=m[baseLang]||m.en; // base language with English fallback
      if(st.dir==="comprehend"){isNlEn=true;trS=m[lang]?.[0]||st.s;trA=bl||[st.s];}
      else{isNlEn=false;trS=bl?.[0]||st.s;trA=m[lang]||[st.s];}
    } else {
      isNlEn=st.dir?.includes("-en")&&!st.dir?.startsWith("en");
    }
    const numMap={"0":"nul","1":"een","2":"twee","3":"drie","4":"vier","5":"vijf","6":"zes","7":"zeven","8":"acht","9":"negen","10":"tien","11":"elf","12":"twaalf","13":"dertien","14":"veertien","15":"vijftien","16":"zestien","17":"zeventien","18":"achttien","19":"negentien","20":"twintig","30":"dertig","40":"veertig","50":"vijftig","60":"zestig","70":"zeventig","80":"tachtig","90":"negentig","100":"honderd","1000":"duizend"};
    const numMapEn={"0":"zero","1":"one","2":"two","3":"three","4":"four","5":"five","6":"six","7":"seven","8":"eight","9":"nine","10":"ten","11":"eleven","12":"twelve","13":"thirteen","14":"fourteen","15":"fifteen","16":"sixteen","17":"seventeen","18":"eighteen","19":"nineteen","20":"twenty","30":"thirty","40":"forty","50":"fifty","60":"sixty","70":"seventy","80":"eighty","90":"ninety","100":"hundred","1000":"thousand"};
    // ── Translation grading: 3-layer system (D26) ──
    // Layer 1: normalize (contractions, punctuation, do-strip, numbers)
    const CONTRACTIONS={"i'm":"i am","i've":"i have","i'll":"i will","i'd":"i would","you're":"you are","you've":"you have","you'll":"you will","you'd":"you would","he's":"he is","she's":"she is","it's":"it is","we're":"we are","we've":"we have","we'll":"we will","they're":"they are","they've":"they have","they'll":"they will","don't":"do not","doesn't":"does not","didn't":"did not","isn't":"is not","aren't":"are not","wasn't":"was not","weren't":"were not","can't":"cannot","won't":"will not","couldn't":"could not","shouldn't":"should not","wouldn't":"would not","haven't":"have not","hasn't":"has not","hadn't":"had not","that's":"that is","there's":"there is","here's":"here is","what's":"what is","who's":"who is","where's":"where is","how's":"how is","let's":"let us","ma'am":"madam"};
    const norm=s=>{
      let r=s.trim().toLowerCase().replace(/[!?.,'"""]/g,"");
      // Expand contractions
      Object.entries(CONTRACTIONS).forEach(([c,e])=>{r=r.replace(new RegExp("\\b"+c.replace("'","'?")+"\\b","g"),e);});
      // Strip "do/does" from questions: "do you speak" → "you speak"
      r=r.replace(/\bdo not\b/g,"DONOT_HOLD");
      r=r.replace(/\bdoes not\b/g,"DOESNOT_HOLD");
      r=r.replace(/\b(do|does)\s+/g,"");
      r=r.replace(/DONOT_HOLD/g,"do not");
      r=r.replace(/DOESNOT_HOLD/g,"does not");
      // Number words
      Object.entries(numMap).forEach(([d,w])=>{r=r.replace(new RegExp("\\b"+d+"\\b","g"),w);});
      Object.entries(numMapEn).forEach(([d,w])=>{r=r.replace(new RegExp("\\b"+d+"\\b","g"),w);});
      // Collapse whitespace
      r=r.replace(/\s+/g," ").trim();
      return r;
    };
    // Layer 2: equivalence groups — try swapping phrases in input
    const TR_EQUIV=[
      ["come from","am from","originate from"],
      ["is called","is named"],
      ["a little","a bit of"],
      ["nice to meet you","pleased to meet you","glad to meet you"],
      ["see you tomorrow","until tomorrow","till tomorrow"],
      ["very much","a lot","so much"],
      ["good night","goodnight"],
      ["my name is","i am called"],
      ["beautiful","pretty","lovely"],
    ];
    const equivMatch=(input,target)=>{
      const ni=norm(input),nt=norm(target);
      if(ni===nt) return true;
      // Try each equivalence group: if input contains one member, swap to others
      for(const group of TR_EQUIV){
        for(const phrase of group){
          if(ni.includes(phrase)){
            for(const alt of group){
              if(alt!==phrase && ni.replace(phrase,alt)===nt) return true;
            }
          }
        }
      }
      return false;
    };
    const answers=Array.isArray(trA)?trA:[trA];
    // Find best match (exact → equiv → none), track which accepted answer matched
    const findMatch=(input)=>{
      // Exact (after norm)
      const exact=answers.find(a=>norm(input)===norm(a));
      if(exact) return {ok:true,match:exact,method:"exact"};
      // Equivalence
      const equiv=answers.find(a=>equivMatch(input,a));
      if(equiv) return {ok:true,match:equiv,method:"equiv"};
      return {ok:false,match:answers[0],method:"none"};
    };
    const checkAns=()=>{const result=findMatch(inputVal);checkAndNext(result.ok);};
    return(
      <div className="anim" key={si}>
        <ProgressBar/>
      <div style={{maxWidth:500,margin:"0 auto"}}>
        {/* Source sentence card */}
        <div style={{background:"var(--card-bg)",borderRadius:22,border:"2px solid rgba(255,255,255,0.55)",boxShadow:"0 4px 20px rgba(0,0,0,0.05)",padding:"24px 28px",marginBottom:20,textAlign:"center",position:"relative",overflow:"hidden"}}>
          <div style={{position:"absolute",top:0,left:"10%",right:"10%",height:"40%",borderRadius:"0 0 50% 50%",background:"linear-gradient(180deg, rgba(255,255,255,0.12) 0%, transparent 100%)",pointerEvents:"none"}}/>
          <div style={{color:isNlEn?"#7B5EE8":"var(--teal-text)",fontSize:10,textTransform:"uppercase",letterSpacing:2.5,marginBottom:12,fontWeight:800}}>{t("le_translate_to",baseLang)} {isNlEn?(BASE_LANGUAGES.find(l=>l.code===baseLang)?.native||"English"):(LANGUAGES.find(l=>l.code===lang)?.native||lang)}</div>
          <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:8}}>
            <span style={{fontSize:11,fontWeight:700,color:"var(--gray-400)",textTransform:"uppercase",letterSpacing:1}}>{isNlEn?(LANGUAGES.find(l=>l.code===lang)?.native||lang):(BASE_LANGUAGES.find(l=>l.code===baseLang)?.native||"English")}</span>
            <span style={{fontSize:22,fontWeight:700,fontFamily:"'Quicksand','system-ui',sans-serif",color:"var(--gray-800)"}}>{trS}</span>
          </div>
        </div>
        {/* Input area — premium card */}
        <div style={{background:"var(--card-bg)",borderRadius:22,border:"2px solid rgba(255,255,255,0.55)",boxShadow:"0 4px 20px rgba(0,0,0,0.05)",padding:"20px 20px 16px",marginBottom:8}}>
          <div style={{fontSize:10,fontWeight:800,textTransform:"uppercase",letterSpacing:2.5,color:"var(--gray-400)",marginBottom:10,paddingLeft:4}}>
            {isNlEn?(BASE_LANGUAGES.find(l=>l.code===baseLang)?.native||"English"):(LANGUAGES.find(l=>l.code===lang)?.native||lang)}
          </div>
          <div style={{display:"flex",gap:10,alignItems:"stretch"}}>
            <input className="chat-input" value={inputVal} onChange={e=>setInputVal(e.target.value)} onKeyDown={e=>{if(e.key==="Enter"&&!answered&&inputVal.trim())checkAns();}} placeholder={`${t("le_type_in",baseLang)} ${isNlEn?(BASE_LANGUAGES.find(l=>l.code===baseLang)?.native||"English"):(LANGUAGES.find(l=>l.code===lang)?.native||lang)}...`} disabled={answered} autoFocus/>
            <button className="btn" style={{fontSize:15,padding:"14px 24px",borderRadius:16,background:"linear-gradient(180deg, #B8A8FA 0%, #9B7AE8 20%, #7B5EE8 55%, #6545C8 85%, #5840B8 100%)",color:"white",fontWeight:800,border:"none",cursor:answered||!inputVal.trim()?"default":"pointer",opacity:answered||!inputVal.trim()?0.5:1,boxShadow:"0 6px 20px rgba(123,94,232,0.45), inset 0 2px 0 rgba(255,255,255,0.4), inset 0 -3px 0 rgba(0,0,0,0.15)",transition:"all .15s",position:"relative",overflow:"hidden",letterSpacing:0.3}} disabled={answered||!inputVal.trim()} onClick={checkAns} onMouseEnter={e=>{if(!answered&&inputVal.trim())e.currentTarget.style.transform="scale(1.05)";}} onMouseLeave={e=>{e.currentTarget.style.transform="scale(1)";}}>
              <span style={{position:"absolute",top:0,left:"8%",right:"8%",height:"38%",borderRadius:"0 0 50% 50%",background:"linear-gradient(180deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.06) 100%)",pointerEvents:"none"}}/>
              <span style={{position:"relative",zIndex:1}}>Check</span>
            </button>
          </div>
        </div>
        {/* Result feedback */}
          {answered&&(()=>{const result=findMatch(inputVal);return(
            <div style={{marginTop:10,padding:"14px 18px",borderRadius:16,background:result.ok?"var(--teal-light)":"var(--coral-light)",border:`2px solid ${result.ok?"var(--teal)":"var(--coral)"}`,boxShadow:`0 4px 16px ${result.ok?"rgba(46,205,167,0.15)":"rgba(239,68,68,0.1)"}`}}>
              <div style={{fontWeight:800,fontSize:14,color:result.ok?"var(--teal-dark)":"var(--coral)"}}>{result.ok?t("le_correct",baseLang):t("le_not_quite",baseLang)}</div>
              {result.ok&&result.method==="equiv"&&<div style={{fontSize:12,marginTop:2,color:"var(--gray-400)"}}>Closest: {result.match}</div>}
              {!result.ok&&<div style={{fontSize:14,marginTop:4}}>{t("le_accepted",baseLang)}: <strong>{answers[0]}</strong></div>}
            </div>);})()}
          {answered&&<ContinueButton onClick={goNext} correct={findMatch(inputVal).ok} baseLang={baseLang} spaceRef={continueRef} onBack={goBack} canGoBack={si>0}/>}
      </div>
      </div>
    );
  }

  // ═══ FILL BLANK ═══
  if(st.type==="fb"){
    const fbAnswers=Array.isArray(st.a)?st.a:[st.a];
    const isCorrect=o=>fbAnswers.some(a=>a.toLowerCase()===o.toLowerCase());
    const showAnswer=fbAnswers[0];
    return(
    <div className="anim" key={si}>
      <ProgressBar/>
      <div style={{maxWidth:480,margin:"0 auto"}}>
        {/* Question card — compound glossy bubble */}
        <div style={{
          background:dk
            ?"linear-gradient(180deg, rgba(123,94,232,0.22) 0%, rgba(100,80,200,0.14) 40%, rgba(80,60,180,0.08) 100%)"
            :"linear-gradient(180deg, rgba(200,190,255,0.45) 0%, rgba(220,210,255,0.3) 50%, rgba(235,230,255,0.18) 100%)",
          borderRadius:22,padding:"22px 26px",marginBottom:18,textAlign:"center",position:"relative",overflow:"hidden",
          border:dk?"1.5px solid rgba(123,94,232,0.3)":"1.5px solid rgba(180,165,240,0.4)",
          boxShadow:dk
            ?"0 6px 20px rgba(0,0,0,0.3), inset 0 2px 0 rgba(255,255,255,0.07), inset 0 -3px 0 rgba(0,0,0,0.12)"
            :"0 6px 24px rgba(123,94,232,0.1), inset 0 2px 0 rgba(255,255,255,0.75), inset 0 -3px 0 rgba(123,94,232,0.05)"}}>
          <div style={{position:"absolute",top:0,left:"5%",right:"5%",height:"42%",borderRadius:"0 0 50% 50%",background:dk?"linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.01),transparent)":"linear-gradient(180deg,rgba(255,255,255,0.55),rgba(255,255,255,0.1),transparent)",pointerEvents:"none",zIndex:1}}/>
          <div style={{position:"relative",zIndex:2}}>
          <div style={{color:"var(--purple-accent-text)",fontSize:10,textTransform:"uppercase",letterSpacing:2.5,marginBottom:10,fontWeight:700,fontFamily:"'Nunito','system-ui',sans-serif"}}>{t("le_fill_blank",baseLang)}</div>
          {(()=>{const{korean:fbKo,english:fbEn}=splitKoEn(st.s.replace(/\{1\}/g,"___"));return<><div style={{fontSize:17,fontWeight:600,lineHeight:1.55,fontFamily:"'Nunito','system-ui',sans-serif",color:"var(--gray-800)"}}>
            {fbKo.split(/_{3,}/).map((part,i,arr)=><span key={i}>{/[\uAC00-\uD7AF]/.test(part)?koreanHl(part):smartHl(part)}{i<arr.length-1&&<span style={{display:"inline-block",minWidth:70,borderBottom:"3px solid var(--purple-accent)",margin:"0 4px",color:"var(--teal-dark)",fontWeight:800,fontFamily:"'Nunito','system-ui',sans-serif"}}>{answered?showAnswer:"___"}</span>}</span>)}
          </div>{renderEnglishBelow(fbEn,true)}</>;})()}
          {st.hint&&!showHint&&!answered&&!hideQuizRom&&<div style={{marginTop:8}}><button onClick={()=>setShowHint&&setShowHint(true)} style={{background:"none",border:"none",color:"var(--gray-300)",fontSize:12,cursor:"pointer",fontFamily:"inherit",padding:"4px 12px",borderRadius:8,transition:"all .15s"}} onMouseEnter={e=>{e.target.style.color="#7B5EE8";e.target.style.background="rgba(123,94,232,0.06)";}} onMouseLeave={e=>{e.target.style.color="var(--gray-300)";e.target.style.background="none";}}><AppIcon name="lightbulb" size={20} style={{marginRight:5}}/>Need a hint?</button></div>}
          {showHint&&st.hint&&!answered&&!hideQuizRom&&<div style={{color:"var(--gray-400)",fontSize:13,marginTop:4}}><AppIcon name="lightbulb" size={20} style={{marginRight:5,display:"inline-block"}}/>{smartHl(st.hint)}</div>}
        </div>
        </div>
        {/* Options — clean flat buttons */}
        {(()=>{
          const fbOpts=shuffleOpts(st.opts,si);
          const hasKoFb=fbOpts.some(o=>/[\uAC00-\uD7AF]/.test(o));
          return <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:10}}>
          {fbOpts.map((o,i)=>{
            let bg="var(--white)",bc="var(--gray-200)",col="var(--gray-700)";
            const isFocused=i===focusIdx&&!answered;
            if(answered){if(isCorrect(o)){bg="var(--teal-light)";bc="var(--teal)";col="var(--teal-dark)";}else if(o===selOpt){bg="var(--coral-light)";bc="var(--coral)";col="var(--coral)";}}
            const hasKo=/[\uAC00-\uD7AF]/.test(o);const hasArabic=/[\u0600-\u06FF]/.test(o);
            return <div key={i} className="quiz-opt" style={{background:bg,border:`2px solid ${bc}`,color:col,textAlign:"center",wordBreak:"keep-all",whiteSpace:hasKo&&o.length<=8?"nowrap":"normal",transition:"all .2s, transform .15s",...(isFocused?{outline:"3px solid var(--purple-accent)",outlineOffset:2,boxShadow:"0 0 0 6px rgba(123,94,232,0.12)"}:{}), ...(hasKo?{fontSize:o.length<=4?20:o.length<=8?17:14,fontWeight:700}:{}), ...(hasArabic?{direction:"rtl",fontFamily:"'Noto Sans Arabic',sans-serif"}:{})}}
              onMouseEnter={e=>{if(!answered){UISounds.tick();e.currentTarget.style.borderColor="rgba(123,94,232,0.4)";e.currentTarget.style.background="linear-gradient(180deg, #f5f0ff, #ede4ff)";e.currentTarget.style.transform="translateY(-2px)";e.currentTarget.style.boxShadow="0 8px 24px rgba(123,94,232,0.15), 0 0 20px rgba(123,94,232,0.08)";}}}
              onMouseLeave={e=>{if(!answered){e.currentTarget.style.borderColor=bc;e.currentTarget.style.background=bg;e.currentTarget.style.transform="translateY(0)";e.currentTarget.style.boxShadow="";}}}
              onMouseDown={e=>{if(!answered)e.currentTarget.style.transform="translateY(1px) scale(0.98)";}}
              onMouseUp={e=>{if(!answered)e.currentTarget.style.transform="translateY(-2px)";}}
              onClick={()=>{if(answered)return;UISounds.click();setSelOpt(o);checkAndNext(isCorrect(o));}}>{/[\uAC00-\uD7AF]/.test(o)?o.split(/([\uAC00-\uD7AF\u3130-\u318F]+)/).map((seg,si)=>/[\uAC00-\uD7AF\u3130-\u318F]/.test(seg)?<span key={si} style={{color:"var(--purple-accent-text)",fontWeight:800}}>{seg}</span>:<span key={si}>{seg}</span>):o}</div>;
          })}
          </div>;
        })()}
        {!answered&&<div style={{textAlign:"center",marginTop:8,fontSize:11,color:"var(--gray-300)"}}>Arrow keys navigate · Space select</div>}
        {answered&&<div style={{textAlign:"center",marginTop:12,fontSize:14,fontWeight:700,color:isCorrect(selOpt)?"var(--teal-dark)":"var(--coral)"}}>{isCorrect(selOpt)?t("le_correct",baseLang):fbAnswers.length>1?`${t("le_not_quite",baseLang)} — ${t("le_accepted",baseLang)}: ${fbAnswers.join(" / ")}`:`${t("le_not_quite",baseLang)} — ${t("le_answer_is",baseLang)}: ${showAnswer}`}</div>}
        {answered&&<ContinueButton onClick={goNext} correct={isCorrect(selOpt)} baseLang={baseLang} spaceRef={continueRef} onBack={goBack} canGoBack={si>0}/>}
      </div>
    </div>
    );
  }

  // ═══ DRAG FILL (D27, D29) ═══
  // Multi-blank sentence completion: click-slot-then-tile, drag-and-drop, or keyboard
  if(st.type==="drag_fill"){
    const blankKeys=Object.keys(st.blanks).sort();
    const allFilled=blankKeys.every(k=>dfSlots[k]);
    const poolWords=shuffleOpts(st.pool||[],si);
    const availablePool=poolWords.filter(w=>!Object.values(dfSlots).includes(w));
    const emptySlots=blankKeys.filter(k=>!dfSlots[k]);
    // Target slot: focused slot if empty, otherwise first empty
    const targetSlot=dfFocusSlot&&!dfSlots[dfFocusSlot]?dfFocusSlot:emptySlots[0]||null;
    // Place a word into a specific slot
    const placeInSlot=(word,slotKey)=>{
      if(answered||!slotKey||dfSlots[slotKey]) return;
      setDfSlots(prev=>({...prev,[slotKey]:word}));
      setDfFocusSlot(null);setDfDrag(null);
      UISounds.tick();
    };
    // Place tile via click: into focused slot or first empty
    const placeTile=(word)=>{
      if(answered||!targetSlot) return;
      placeInSlot(word,targetSlot);
    };
    // Remove a tile from a slot
    const removeTile=(slotKey)=>{
      if(answered) return;
      setDfSlots(prev=>{const n={...prev};delete n[slotKey];return n;});
      UISounds.tick();
    };
    // Click on empty slot: focus it
    const focusSlot=(slotKey)=>{
      if(answered||dfSlots[slotKey]) return;
      setDfFocusSlot(prev=>prev===slotKey?null:slotKey);
      UISounds.tick();
    };
    // Check all slots
    const checkDf=()=>{
      if(!allFilled) return;
      const allCorrect=blankKeys.every(k=>dfSlots[k]?.toLowerCase()===st.blanks[k]?.toLowerCase());
      checkAndNext(allCorrect);
    };
    // Split Korean from English translation, then parse blanks in Korean only
    const{korean:dfKo,english:dfEn}=splitKoEn(st.s);
    const sentParts=dfKo.split(/\{(\d+)\}/g);
    // Drag handlers: ghost created on document.body (bypasses .anim transform containing block)
    const onTilePointerDown=(e,word)=>{
      if(answered) return;
      e.preventDefault();
      dfDragOccurred.current=false;
      const startX=e.clientX,startY=e.clientY;
      // Cache slot rects for hit-testing
      const rects={};
      blankKeys.forEach(k=>{
        const el=document.querySelector(`[data-df-slot="${k}"]`);
        if(el) rects[k]=el.getBoundingClientRect();
      });
      const filledSnapshot={...dfSlots};
      // Create ghost on document.body — position via measured deltas (coordinate-system proof)
      const ghost=document.createElement("div");
      ghost.textContent=word;
      Object.assign(ghost.style,{
        position:"fixed",left:"0px",top:"0px",margin:"0",
        transform:"translate(0px,0px)",
        pointerEvents:"none",zIndex:"99999",
        background:"var(--card-bg)",border:"2px solid var(--purple-accent)",borderRadius:"14px",
        padding:"10px 20px",fontWeight:"700",fontSize:"16px",
        fontFamily:"'Quicksand','system-ui',sans-serif",color:"var(--purple-accent-text)",
        boxShadow:"0 8px 32px rgba(123,94,232,0.3)",
        whiteSpace:"nowrap",
      });
      document.body.appendChild(ghost);
      // Measure where (0,0) actually renders — this accounts for any transforms/zoom/offsets
      const ghostRect=ghost.getBoundingClientRect();
      const baseX=ghostRect.left,baseY=ghostRect.top;
      const gw=ghost.offsetWidth,gh=ghost.offsetHeight;
      // Position ghost centered on cursor, compensating for coordinate system offset
      const initTX=startX-gw/2-baseX;
      const initTY=startY-gh/2-baseY;
      ghost.style.transform=`translate(${initTX}px,${initTY}px)`;
      // Store start cursor pos for delta tracking
      const cursorStartX=startX,cursorStartY=startY;
      setDfDrag({word});
      // Window-level move handler — delta-based, immune to coordinate system quirks
      const onMove=(ev)=>{
        const dx=ev.clientX-cursorStartX,dy=ev.clientY-cursorStartY;
        // Mark as real drag after 4px movement
        if(Math.abs(dx)>4||Math.abs(dy)>4) dfDragOccurred.current=true;
        ghost.style.transform=`translate(${initTX+dx}px,${initTY+dy}px)`;
        // Highlight slot under pointer via DOM
        let hoveredSlot=null;
        Object.entries(rects).forEach(([k,r])=>{
          if(ev.clientX>=r.left&&ev.clientX<=r.right&&ev.clientY>=r.top&&ev.clientY<=r.bottom){
            if(!filledSnapshot[k]) hoveredSlot=k;
          }
        });
        blankKeys.forEach(k=>{
          const el=document.querySelector(`[data-df-slot="${k}"]`);
          if(!el) return;
          if(k===hoveredSlot){
            el.style.borderBottom="3px solid #2ECDA7";
            el.style.background="rgba(46,205,167,0.08)";
            el.style.transform="scale(1.05)";
          } else {
            el.style.borderBottom="";el.style.background="";el.style.transform="";
          }
        });
      };
      // Window-level up handler
      const onUp=(ev)=>{
        window.removeEventListener("pointermove",onMove);
        window.removeEventListener("pointerup",onUp);
        ghost.remove();
        // Reset slot hover styles
        blankKeys.forEach(k=>{
          const el=document.querySelector(`[data-df-slot="${k}"]`);
          if(el){el.style.borderBottom="";el.style.background="";el.style.transform="";}
        });
        // Find drop target
        let dropSlot=null;
        Object.entries(rects).forEach(([k,r])=>{
          if(ev.clientX>=r.left&&ev.clientX<=r.right&&ev.clientY>=r.top&&ev.clientY<=r.bottom){
            if(!filledSnapshot[k]) dropSlot=k;
          }
        });
        if(dropSlot){
          placeInSlot(word,dropSlot);
        } else {
          setDfDrag(null);
        }
      };
      window.addEventListener("pointermove",onMove);
      window.addEventListener("pointerup",onUp);
    };
    // NOTE: keyboard nav handled by main handler (D7) — no hooks here
    return(
    <div className="anim" key={si} style={{touchAction:"none"}}>
      <ProgressBar/>
      <div style={{maxWidth:500,margin:"0 auto"}}>
        {/* Sentence card with slots */}
        <div style={{background:"var(--card-bg)",borderRadius:20,border:"2px solid rgba(255,255,255,0.45)",borderLeft:"4px solid var(--purple-accent)",padding:"22px 26px",marginBottom:18,textAlign:"center",...glass}}>
          <div style={{color:"var(--purple-accent-text)",fontSize:10,textTransform:"uppercase",letterSpacing:2,marginBottom:12,fontWeight:700}}>Fill in the blanks</div>
          <div style={{fontSize:19,fontWeight:700,lineHeight:2.2,fontFamily:"'Quicksand','system-ui',sans-serif",color:"var(--gray-800)"}}>
            {sentParts.map((part,i)=>{
              if(i%2===1){
                const slotKey=part;
                const placed=dfSlots[slotKey];
                const isCorrectSlot=answered&&placed?.toLowerCase()===st.blanks[slotKey]?.toLowerCase();
                const isWrongSlot=answered&&placed&&!isCorrectSlot;
                const isFocused=dfFocusSlot===slotKey&&!answered&&!placed;
                const slotBase={
                  display:"inline-block",minWidth:74,padding:"4px 12px",margin:"0 4px",
                  borderRadius:8,fontWeight:800,fontFamily:"'Quicksand','system-ui',sans-serif",
                  transition:"all .2s",verticalAlign:"baseline",userSelect:"none",
                };
                const slotVisual=answered
                  ? {borderBottom:isCorrectSlot?"3px solid var(--teal)":"3px solid var(--coral)",
                     background:isCorrectSlot?"var(--teal-light)":"var(--coral-light)",
                     color:isCorrectSlot?"var(--teal-dark)":"var(--coral)",cursor:"default"}
                  : placed
                    ? {borderBottom:"3px solid var(--purple-accent)",background:"rgba(123,94,232,0.06)",
                       color:"var(--purple-accent-text)",cursor:"pointer"}
                    : isFocused
                      ? {borderBottom:"3px solid var(--purple-accent)",background:"rgba(123,94,232,0.08)",
                         color:"var(--gray-400)",cursor:"pointer",
                         boxShadow:"0 0 0 3px rgba(123,94,232,0.2)",
                         animation:"dfPulse 1.5s ease-in-out infinite"}
                      : {borderBottom:"3px dashed var(--gray-300)",background:"transparent",
                         color:"var(--gray-300)",cursor:"pointer"};
                return <span key={i} data-df-slot={slotKey} style={{...slotBase,...slotVisual}}
                  onClick={()=>{
                    if(answered)return;
                    if(placed){removeTile(slotKey);}
                    else{focusSlot(slotKey);}
                  }}
                  title={!answered?(placed?"Click to remove":"Click to select this slot"):""}>
                  {placed||<span style={{opacity:0.4,fontSize:14}}>{isFocused?"drop here":"_"}</span>}
                  {isWrongSlot&&<span style={{display:"block",fontSize:11,color:"var(--teal-dark)",fontWeight:600}}>{st.blanks[slotKey]}</span>}
                </span>;
              }
              return <span key={i}>{/[\uAC00-\uD7AF]/.test(part)?koreanHl(part):part}</span>;
            })}
          </div>
          {renderEnglishBelow(dfEn,true)}
          {st.hint&&!showHint&&!answered&&<div style={{marginTop:8}}><button onClick={()=>setShowHint&&setShowHint(true)} style={{background:"none",border:"none",color:"var(--gray-300)",fontSize:12,cursor:"pointer",fontFamily:"inherit",padding:"4px 12px",borderRadius:8,transition:"all .15s"}} onMouseEnter={e=>{e.target.style.color="#7B5EE8";e.target.style.background="rgba(123,94,232,0.06)";}} onMouseLeave={e=>{e.target.style.color="var(--gray-300)";e.target.style.background="none";}}><AppIcon name="lightbulb" size={20} style={{marginRight:5}}/>Need a hint?</button></div>}
          {showHint&&st.hint&&!answered&&<div style={{color:"var(--gray-400)",fontSize:13,marginTop:4}}><AppIcon name="lightbulb" size={20} style={{marginRight:5,display:"inline-block"}}/>{smartHl(st.hint)}</div>}
        </div>
        {/* Word tile pool */}
        {!answered&&<div style={{display:"flex",flexWrap:"wrap",gap:10,justifyContent:"center",marginBottom:16}}>
          {availablePool.map((word,i)=>{
            const isFocused=i===(dfPoolIdx%Math.max(availablePool.length,1));
            const isDragging=dfDrag?.word===word;
            return <div key={word}
              onPointerDown={e=>onTilePointerDown(e,word)}
              onClick={()=>{if(!dfDragOccurred.current&&!dfDrag)placeTile(word);}}
              style={{
                background:"var(--card-bg)",border:"2px solid rgba(255,255,255,0.55)",borderRadius:14,
                padding:"10px 20px",cursor:dfDrag?"grabbing":"grab",fontWeight:700,fontSize:16,
                fontFamily:"'Quicksand','system-ui',sans-serif",color:isDragging?"var(--gray-300)":"var(--gray-700)",
                transition:"all .15s",boxShadow:"0 2px 8px rgba(0,0,0,0.06)",
                opacity:isDragging?0.3:1,userSelect:"none",touchAction:"none",
                ...(isFocused&&!isDragging?{outline:"3px solid var(--purple-accent)",outlineOffset:2,boxShadow:"0 0 0 6px rgba(123,94,232,0.12)"}:{}),
              }}>{word}</div>;
          })}
        </div>}
        {/* Check button */}
        {!answered&&allFilled&&<div style={{textAlign:"center",marginBottom:12}}>
          <button className="btn" onClick={checkDf} style={{background:"linear-gradient(180deg, #B8A8FA 0%, #9B7AE8 20%, #7B5EE8 55%, #6545C8 85%, #5840B8 100%)",color:"white",fontWeight:700,fontSize:15,padding:"12px 32px",borderRadius:16,border:"1.5px solid rgba(255,255,255,0.25)",cursor:"pointer",boxShadow:dk?"0 0 20px rgba(150,120,255,0.45), 0 0 44px rgba(123,94,232,0.2), 0 4px 16px rgba(123,94,232,0.4), inset 0 1px 0 rgba(255,255,255,0.15), inset 0 -2px 0 rgba(0,0,0,0.2)":"0 6px 20px rgba(123,94,232,0.45), inset 0 2px 0 rgba(255,255,255,0.45), inset 0 -3px 0 rgba(0,0,0,0.12)"}}>Check</button>
        </div>}
        {!answered&&<div style={{textAlign:"center",fontSize:11,color:"var(--gray-300)"}}>{dfFocusSlot?"Slot selected. Click a word or press Space.":"Click a slot, then a word. Or drag words into slots."}</div>}
        {/* Result */}
        {answered&&<div style={{textAlign:"center",marginTop:8,fontSize:14,fontWeight:700,color:blankKeys.every(k=>dfSlots[k]?.toLowerCase()===st.blanks[k]?.toLowerCase())?"var(--teal-dark)":"var(--coral)"}}>
          {blankKeys.every(k=>dfSlots[k]?.toLowerCase()===st.blanks[k]?.toLowerCase())?t("le_correct",baseLang):`${t("le_not_quite",baseLang)}`}
        </div>}
        {answered&&<ContinueButton onClick={goNext} correct={blankKeys.every(k=>dfSlots[k]?.toLowerCase()===st.blanks[k]?.toLowerCase())} baseLang={baseLang} spaceRef={continueRef} onBack={goBack} canGoBack={si>0}/>}
      </div>
    </div>
    );
  }

  // ═══ MATCH PAIRS ═══
  if(st.type==="match"){
    const pairs=st.mks?st.mks.map(k=>{const m=MEANINGS[k];if(!m)return{nl:k,en:k};const bl=m[baseLang]||m.en;return{nl:m[lang]?.[0]||k,en:bl?.[0]||k};}):st.pairs;
    const key=si+"-"+pairs.map(p=>p.nl).join(",");
    if(matchKeyRef.current!==key){matchKeyRef.current=key;matchNlRef.current=shuffle(pairs.map(p=>p.nl));matchEnRef.current=shuffle(pairs.map(p=>p.en));}
    const nlItems=matchNlRef.current;
    const enItems=matchEnRef.current;
    const nlCount=nlItems.length;
    const allMatched=matchDone.length>=pairs.length*2;
    const handleMatch=(side,val)=>{
      if(matchDone.includes(val))return;
      const newSel={...matchSel,[side]:val};setMatchSel(newSel);
      if(newSel.nl&&newSel.en){
        const pair=pairs.find(p=>p.nl===newSel.nl);
        if(pair&&pair.en===newSel.en){
          setMatchDone(d=>{const next=[...d,newSel.nl,newSel.en];
            // Compute line for this newly matched pair immediately
            setTimeout(()=>{
              const container=matchContainerRef.current;if(!container)return;
              const rect=container.getBoundingClientRect();
              const nlIdx=nlItems.indexOf(newSel.nl);const enIdx=enItems.indexOf(newSel.en);
              const nlEl=container.querySelector(`[data-match-nl="${nlIdx}"]`);
              const enEl=container.querySelector(`[data-match-en="${enIdx}"]`);
              if(nlEl&&enEl){
                const nlR=nlEl.getBoundingClientRect();const enR=enEl.getBoundingClientRect();
                setLinePositions(lp=>[...lp,{x1:nlR.right-rect.left,y1:nlR.top+nlR.height/2-rect.top,x2:enR.left-rect.left,y2:enR.top+enR.height/2-rect.top}]);
              }
            },50);
            return next;
          });
          addXp(1);
        }
        setTimeout(()=>setMatchSel({nl:null,en:null}),400);
        if(matchDone.length+2>=pairs.length*2){setAnswered(true);addXp(2);setScore(s=>s+1);}
      }
    };
    matchSelectRef.current={nlItems,enItems,nlCount,matchDone,handleMatch};
    return(
      <div className="anim" key={si}>
        <ProgressBar/>
        <div style={{textAlign:"center",marginBottom:18}}>
          <div style={{color:"var(--gray-400)",fontSize:12,textTransform:"uppercase",letterSpacing:2,fontWeight:700,marginBottom:4}}>{t("le_match_pairs",baseLang)}</div>
          <div style={{fontSize:13,color:"var(--gray-300)"}}>{allMatched?"All matched! ✓":"Select a word, then its match"}</div>
        </div>
        <div ref={matchContainerRef} style={{position:"relative",display:"grid",gridTemplateColumns:"1fr 1fr",gap:16,maxWidth:440,margin:"0 auto"}}
          onPointerMove={(e)=>{if(!matchDragRef.current.active)return;const container=matchContainerRef.current;if(!container)return;const rect=container.getBoundingClientRect();const drag=matchDragRef.current;const startEl=drag.startEl;if(!startEl)return;const elR=startEl.getBoundingClientRect();const fromRight=drag.side==="nl";setMatchPendingLine({x1:fromRight?elR.right-rect.left:elR.left-rect.left,y1:elR.top+elR.height/2-rect.top,x2:e.clientX-rect.left,y2:e.clientY-rect.top});}}
          onPointerLeave={()=>{if(matchDragRef.current.active){matchDragRef.current={active:false,side:null,val:null,startEl:null};setMatchPendingLine(null);}}}>
          {/* SVG: confirmed lines + live pending line */}
          {(linePositions.length>0||matchPendingLine)&&<svg style={{position:"absolute",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:1}}>
            {linePositions.map((l,i)=><line key={"c"+i} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} stroke="url(#neonGrad)" strokeWidth={2} opacity={0.7} filter="url(#glow)">
              <animate attributeName="opacity" from="0" to="0.7" dur="0.3s" fill="freeze"/>
            </line>)}
            {matchPendingLine&&<line x1={matchPendingLine.x1} y1={matchPendingLine.y1} x2={matchPendingLine.x2} y2={matchPendingLine.y2} stroke="#A78BFA" strokeWidth={2} opacity={0.4} strokeDasharray="8 4"/>}
            <defs>
              <linearGradient id="neonGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#9B7AE8"/>
                <stop offset="50%" stopColor="#B8A8FA"/>
                <stop offset="100%" stopColor="#9B7AE8"/>
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
              </filter>
            </defs>
          </svg>}
          <div style={{display:"flex",flexDirection:"column",gap:8}}>
            <div style={{fontSize:11,fontWeight:700,color:"var(--gray-400)",textTransform:"uppercase",letterSpacing:1}}>{LANGUAGES.find(l=>l.code===lang)?.native||lang}</div>
            {nlItems.map((w,i)=>{const d=matchDone.includes(w),s=matchSel.nl===w,f=focusIdx===i&&!d;
              return <div key={i} data-match-nl={i} data-match-side="nl" data-match-val={w} style={{padding:"10px 14px",borderRadius:"var(--radius-sm)",border:`2px solid ${d?"#7B5EE8":s?"var(--blue)":f?"#7B5EE8":"var(--gray-200)"}`,background:d?"rgba(123,94,232,0.08)":s?"var(--blue-light)":f?"rgba(123,94,232,0.04)":"var(--white)",cursor:d?"default":"pointer",fontWeight:600,fontSize:14,opacity:d?.6:1,transition:"all .2s",position:"relative",zIndex:2,outline:f?"3px solid var(--purple-accent)":"none",outlineOffset:f?2:0,boxShadow:f?"0 0 0 6px rgba(123,94,232,0.12)":"none",touchAction:"none",userSelect:"none",WebkitUserSelect:"none"}}
                onClick={()=>{if(!d){UISounds.click();handleMatch("nl",w);}}}
                onPointerDown={(e)=>{if(d)return;e.preventDefault();matchDragRef.current={active:true,side:"nl",val:w,startEl:e.currentTarget};e.currentTarget.setPointerCapture&&e.currentTarget.releasePointerCapture(e.pointerId);handleMatch("nl",w);const container=matchContainerRef.current;if(!container)return;const rect=container.getBoundingClientRect();const elR=e.currentTarget.getBoundingClientRect();setMatchPendingLine({x1:elR.right-rect.left,y1:elR.top+elR.height/2-rect.top,x2:e.clientX-rect.left,y2:e.clientY-rect.top});}}
                onMouseEnter={()=>{if(!d){UISounds.tick();setFocusIdx(i);}}}>{/[\uAC00-\uD7AF]/.test(w)?koreanHl(w):cap(w)}{d&&" ✓"}</div>;})}
          </div>
          <div style={{display:"flex",flexDirection:"column",gap:8}}>
            <div style={{fontSize:11,fontWeight:700,color:"var(--gray-400)",textTransform:"uppercase",letterSpacing:1}}>{BASE_LANGUAGES.find(l=>l.code===baseLang)?.native||"English"}</div>
            {enItems.map((w,i)=>{const d=matchDone.includes(w),s=matchSel.en===w,f=focusIdx===i+nlCount&&!d;
              return <div key={i} data-match-en={i} data-match-side="en" data-match-val={w} style={{padding:"10px 14px",borderRadius:"var(--radius-sm)",border:`2px solid ${d?"#7B5EE8":s?"var(--blue)":f?"#7B5EE8":"var(--gray-200)"}`,background:d?"rgba(123,94,232,0.08)":s?"var(--blue-light)":f?"rgba(123,94,232,0.04)":"var(--white)",cursor:d?"default":"pointer",fontWeight:600,fontSize:14,opacity:d?.6:1,transition:"all .2s",position:"relative",zIndex:2,outline:f?"3px solid var(--purple-accent)":"none",outlineOffset:f?2:0,boxShadow:f?"0 0 0 6px rgba(123,94,232,0.12)":"none",touchAction:"none",userSelect:"none",WebkitUserSelect:"none"}}
                onClick={()=>{if(!d){UISounds.click();handleMatch("en",w);}}}
                onPointerDown={(e)=>{if(d)return;e.preventDefault();matchDragRef.current={active:true,side:"en",val:w,startEl:e.currentTarget};e.currentTarget.setPointerCapture&&e.currentTarget.releasePointerCapture(e.pointerId);handleMatch("en",w);const container=matchContainerRef.current;if(!container)return;const rect=container.getBoundingClientRect();const elR=e.currentTarget.getBoundingClientRect();setMatchPendingLine({x1:elR.left-rect.left,y1:elR.top+elR.height/2-rect.top,x2:e.clientX-rect.left,y2:e.clientY-rect.top});}}
                onMouseEnter={()=>{if(!d){UISounds.tick();setFocusIdx(i+nlCount);}}}>{cap(w)}{d&&" ✓"}</div>;})}
          </div>
        </div>
        {!allMatched&&<div style={{textAlign:"center",marginTop:10,fontSize:11,color:"var(--gray-300)"}}>←→ switch column · ↑↓ navigate · Space select</div>}
        {allMatched&&<ContinueButton onClick={goNext} correct={true} baseLang={baseLang} spaceRef={continueRef} onBack={goBack} canGoBack={si>0}/>}
      </div>
    );
  }

  // ── CONJUGATION EXERCISE ──
  // st = {type:"conj", verb:"werken", en:"to work", forms:{ik:"werk",jij:"werkt",hij:"werkt",wij:"werken"}, test:["ik","jij","wij"]}
  if(st.type==="conj"){
    const pronLabels={ik:"ik",jij:"jij/je",hij:"hij/zij/het",wij:"wij/we",jullie:"jullie",zij:"zij (they)"};
    const allProns=Object.keys(st.forms);
    const testProns=st.test||allProns.slice(0,3);
    const checkConj=()=>{
      setConjChecked(true);
      const correct=testProns.every(p=>conjAnswers[p]&&conjAnswers[p].trim().toLowerCase()===st.forms[p].toLowerCase());
      if(correct){setScore(s=>s+1);addXp(2);}
      setAnswered(true);
    };
    return(
      <div className="anim" key={si}>
        <ProgressBar/>
        <div className="card" style={{padding:24}}>
          <div style={{textAlign:"center",marginBottom:18}}>
            <div style={{color:"var(--gray-400)",fontSize:12,textTransform:"uppercase",letterSpacing:2,fontWeight:700,marginBottom:6}}>Conjugate the verb</div>
            <div style={{display:"inline-block",background:"linear-gradient(135deg, var(--blue), var(--teal))",borderRadius:14,padding:"10px 28px",marginBottom:6}}>
              <span className="hd" style={{fontSize:24,fontWeight:800,color:"white"}}>{st.verb}</span>
            </div>
            <div style={{fontSize:14,color:"var(--gray-400)",marginTop:4}}>{st.en}</div>
          </div>
          <div style={{display:"grid",gap:10,maxWidth:380,margin:"0 auto"}}>
            {testProns.map(p=>{
              const val=conjAnswers[p]||"";
              const correct=conjChecked&&val.trim().toLowerCase()===st.forms[p].toLowerCase();
              const wrong=conjChecked&&!correct;
              return(
                <div key={p} style={{display:"flex",alignItems:"center",gap:12}}>
                  <span style={{width:100,fontSize:14,fontWeight:700,color:"var(--gray-600)",textAlign:"right"}}>{pronLabels[p]||p}</span>
                  <input value={val} onChange={e=>!conjChecked&&setConjAnswers(a=>({...a,[p]:e.target.value}))} placeholder="..." style={{flex:1,padding:"10px 14px",borderRadius:12,border:`2px solid ${conjChecked?(correct?"var(--teal)":"var(--coral)"):"var(--gray-200)"}`,fontSize:15,fontWeight:600,background:conjChecked?(correct?"var(--teal-light)":"var(--coral-light)"):"var(--white)",outline:"none"}}/>
                  {conjChecked&&wrong&&<span style={{fontSize:12,color:"var(--coral)",fontWeight:700,whiteSpace:"nowrap"}}>{st.forms[p]}</span>}
                  {conjChecked&&correct&&<span style={{color:"var(--teal)",fontWeight:800}}>✓</span>}
                </div>
              );
            })}
          </div>
          {!conjChecked&&<div style={{textAlign:"center",marginTop:18}}><button className="btn" onClick={checkConj} style={{padding:"12px 32px",background:"linear-gradient(180deg, #B8A8FA 0%, #9B7AE8 20%, #7B5EE8 55%, #6545C8 85%, #5840B8 100%)",color:"white",fontWeight:700,border:"1.5px solid rgba(255,255,255,0.25)",cursor:"pointer",borderRadius:16,boxShadow:dk?"0 0 20px rgba(150,120,255,0.45), 0 0 44px rgba(123,94,232,0.2), 0 4px 16px rgba(123,94,232,0.4), inset 0 1px 0 rgba(255,255,255,0.15), inset 0 -2px 0 rgba(0,0,0,0.2)":"0 6px 20px rgba(123,94,232,0.45), inset 0 2px 0 rgba(255,255,255,0.45), inset 0 -3px 0 rgba(0,0,0,0.12)"}}>Check ✓</button></div>}
          {conjChecked&&<div style={{textAlign:"center",marginTop:12}}>
            <div style={{fontSize:12,color:"var(--gray-400)",marginBottom:4}}>Full conjugation:</div>
            <div style={{display:"flex",flexWrap:"wrap",gap:6,justifyContent:"center"}}>{allProns.map(p=><span key={p} style={{background:"var(--gray-50)",borderRadius:8,padding:"4px 10px",fontSize:12,fontWeight:600}}><span style={{color:"var(--gray-400)"}}>{p}</span> <span style={{color:"var(--gray-700)"}}>{st.forms[p]}</span></span>)}</div>
          </div>}
          {conjChecked&&<ContinueButton onClick={()=>{goNext();setConjAnswers({});setConjChecked(false);}} correct={testProns.every(p=>conjAnswers[p]&&conjAnswers[p].trim().toLowerCase()===st.forms[p].toLowerCase())} baseLang={baseLang} spaceRef={continueRef} onBack={goBack} canGoBack={si>0}/>}
        </div>
      </div>
    );
  }

  // ── GRAMMAR REFERENCE ──
  // st = {type:"gramref", title:"📖 Grammar: Possessive Pronouns", text:"...", level:"A1", topic:"Possessives"}
  if(st.type==="gramref"){
    return(
      <div className="anim" key={si}>
        <ProgressBar/>
        <div style={{background:"var(--purple-bg)",borderRadius:22,padding:"24px 22px",border:"2px solid rgba(123,94,232,0.15)",marginBottom:16}}>
          <div style={{display:"flex",gap:12,alignItems:"flex-start"}}>
            <div style={{width:40,height:40,borderRadius:12,background:"linear-gradient(135deg, #7B5EE8, #6341C7)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:18,flexShrink:0,boxShadow:"0 3px 10px rgba(123,94,232,0.3)",color:"white",fontWeight:800}}>📖</div>
            <div style={{flex:1}}>
              <div style={{fontSize:12,fontWeight:700,color:"var(--purple-accent-text)",textTransform:"uppercase",letterSpacing:1.5,marginBottom:6}}>Grammar Reference • {st.level||"A1"}</div>
              <div className="hd" style={{fontSize:18,fontWeight:800,color:"var(--gray-800)",marginBottom:10}}>{st.title}</div>
              <div style={{fontSize:14,color:"var(--gray-600)",lineHeight:1.8,whiteSpace:"pre-line"}}>{st.text}</div>
            </div>
          </div>
        </div>
        <div style={{display:"flex",justifyContent:"center"}}><NavArrow onClick={goNext}/></div>
      </div>
    );
  }

  return <div className="anim"><ProgressBar/>{wordBubble&&<WordBubble entry={wordBubble.entry} word={wordBubble.word} stem={wordBubble.stem} particle={wordBubble.particle} onClose={()=>setWordBubble(null)}/>}<div className="card" style={{textAlign:"center",padding:24}}><p>Unknown step</p><button className="btn" onClick={goNext} style={{background:"linear-gradient(180deg, #B8A8FA 0%, #9B7AE8 20%, #7B5EE8 55%, #6545C8 85%, #5840B8 100%)",color:"white",fontWeight:700,border:"1.5px solid rgba(255,255,255,0.25)",cursor:"pointer",borderRadius:16,boxShadow:dk?"0 0 20px rgba(150,120,255,0.45), 0 0 44px rgba(123,94,232,0.2), 0 4px 16px rgba(123,94,232,0.4), inset 0 1px 0 rgba(255,255,255,0.15), inset 0 -2px 0 rgba(0,0,0,0.2)":"0 6px 20px rgba(123,94,232,0.45), inset 0 2px 0 rgba(255,255,255,0.45), inset 0 -3px 0 rgba(0,0,0,0.12)"}}>{t("le_skip",baseLang)}</button></div></div>;
}

// ━━━━━━━━━━ MAIN APP (updated with Learn page) ━━━━━━━━━━

// ── DEV GATE: Access code screen before the app ──
function DevGate({onAccess}){
  const [code,setCode]=useState("");
  const [error,setError]=useState(false);
  const [shake,setShake]=useState(false);
  const dk=document.documentElement.classList.contains("dark");
  const handleSubmit=()=>{
    if(code==="qqqq"){onAccess();}
    else{setError(true);setShake(true);setTimeout(()=>setShake(false),500);setCode("");}
  };
  return(
    <div style={{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:dk?"linear-gradient(135deg,#1E1E2E 0%,#2A2040 50%,#1E1E2E 100%)":"linear-gradient(135deg,#F8F6FF 0%,#EDE8FF 50%,#F0EAFF 100%)",fontFamily:"'Nunito','DM Sans','Inter',system-ui,sans-serif"}}>
      <div style={{textAlign:"center",padding:"48px 40px",borderRadius:28,background:dk?"rgba(40,38,60,0.85)":"white",boxShadow:dk?"0 20px 60px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)":"0 20px 60px rgba(123,94,232,0.12), 0 4px 16px rgba(0,0,0,0.04)",maxWidth:360,width:"90%",animation:shake?"shake 0.5s ease":"none"}}>
        <div style={{width:72,height:72,borderRadius:20,background:"linear-gradient(180deg, #C0AEF8 0%, #7B5EE8 50%, #5840B8 100%)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 20px",boxShadow:"0 8px 24px rgba(123,94,232,0.35), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -2px 0 rgba(0,0,0,0.12)"}}>
          <span style={{fontSize:36}}>🔑</span>
        </div>
        <h1 style={{fontSize:24,fontWeight:800,color:dk?"#E8E6F0":"#2D2B55",marginBottom:6,fontFamily:"'Quicksand','DM Sans',system-ui,sans-serif"}}>LingoVerse</h1>
        <p style={{fontSize:13,color:dk?"#9590B0":"#8B85A8",marginBottom:28,lineHeight:1.5}}>Early access — enter developer code</p>
        <input type="password" value={code} onChange={e=>setCode(e.target.value)} onKeyDown={e=>e.key==="Enter"&&handleSubmit()} placeholder="Access code" autoFocus style={{width:"100%",padding:"14px 18px",borderRadius:14,border:error?`2px solid #F56565`:`2px solid ${dk?"rgba(123,94,232,0.3)":"#E0D8F8"}`,background:dk?"rgba(30,28,50,0.6)":"#FAFAFE",fontSize:16,fontFamily:"inherit",outline:"none",textAlign:"center",letterSpacing:8,color:dk?"#E8E6F0":"#2D2B55",transition:"border .2s",boxSizing:"border-box"}}/>
        {error&&<p style={{fontSize:12,color:"#F56565",marginTop:8,fontWeight:600}}>Invalid code</p>}
        <button onClick={handleSubmit} style={{marginTop:20,width:"100%",padding:"14px",borderRadius:14,border:"none",background:"linear-gradient(180deg, #C0AEF8 0%, #7B5EE8 50%, #5840B8 100%)",color:"white",fontSize:16,fontWeight:700,cursor:"pointer",boxShadow:"0 4px 16px rgba(123,94,232,0.3), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -2px 0 rgba(0,0,0,0.12)",transition:"transform .1s",fontFamily:"inherit"}}>Enter</button>
      </div>
      <style>{`@keyframes shake{0%,100%{transform:translateX(0)}20%,60%{transform:translateX(-8px)}40%,80%{transform:translateX(8px)}}`}</style>
    </div>
  );
}

export default function App(){
  const [devAccess,setDevAccess]=useState(()=>{try{return sessionStorage.getItem("lingoverse:dev")==="1";}catch(e){return false;}});
  const [ob,setOb]=useState(false);
  const [lang,setLang]=useState("nl");
  const [baseLang,setBaseLang]=useState("en");
  const [authed,setAuthed]=useState(false);
  const [profile,setProfile]=useState(null);
  const [quizLog,setQuizLog]=useState([]);
  const logQuizAttempt=(entry)=>setQuizLog(prev=>[...prev,{...entry,ts:Date.now()}]);
  const [flags,setFlags]=useState([]);
  const addFlag=(lessonId,stepIndex,stepData,reason,detail)=>{
    const f={lang,lessonId,stepIndex,stepData:JSON.stringify(stepData),reason,detail,ts:Date.now()};
    setFlags(prev=>[...prev,f]);
  }; // Default to Dutch now!
  const [page,setPage]=useState("home");
  const [toast,setToast]=useState(null);
  const [pops,setPops]=useState([]);
  const [user,setUser]=useState({xp:0,streak:1,wl:0,lw:new Set(),cm:0,achs:[],ls:new Set()});
  const [showResetModal,setShowResetModal]=useState(false);
  const [darkMode,setDarkMode]=useState(false);
  const [showSearch,setShowSearch]=useState(false);
  const [searchQuery,setSearchQuery]=useState("");
  const [previewResult,setPreviewResult]=useState(null);

  // ── Dark mode: set class synchronously so children read correct dk ──
  document.documentElement.classList.toggle("dark",darkMode);

  // ── Ctrl+N: toggle dark mode ──
  useEffect(()=>{
    const handler=(e)=>{
      if((e.ctrlKey||e.metaKey)&&e.key==="n"){e.preventDefault();setDarkMode(d=>!d);}
    };
    window.addEventListener("keydown",handler);
    return ()=>window.removeEventListener("keydown",handler);
  },[]);

  // ── Ctrl+F: open/close curriculum search ──
  useEffect(()=>{
    const handler=(e)=>{
      if((e.ctrlKey||e.metaKey)&&e.key==="f"&&!document.querySelector("[data-kb-owner]")){
        e.preventDefault();
        setShowSearch(s=>{if(s){setSearchQuery("");return false;}return true;});
      }
      if(e.key==="Escape"&&showSearch){setShowSearch(false);setSearchQuery("");}
    };
    window.addEventListener("keydown",handler);
    return()=>window.removeEventListener("keydown",handler);
  },[showSearch]);

  // ── Close search float on click outside the panel or its toggle button ──
  useEffect(()=>{
    if(!showSearch)return;
    const handler=(e)=>{
      if(!e.target.closest('.sf-panel')&&!e.target.closest('[data-search-btn]')){
        setShowSearch(false);setSearchQuery("");
      }
    };
    document.addEventListener('mousedown',handler);
    return()=>document.removeEventListener('mousedown',handler);
  },[showSearch]);

  // ── Global arrow-key navigation (Decision 11) ──
  // Active on all pages. data-kb-owner markers disable during LessonEngine.
  useFocusNav(null,null,{enabled:true});

  // ── Backspace: back to home (only when no component handles its own) ──
  useEffect(()=>{
    const handler=(e)=>{
      if(e.code!=="Backspace")return;
      const tag=document.activeElement?.tagName;
      if(tag==="INPUT"||tag==="TEXTAREA")return;
      if(document.querySelector("[data-kb-owner]"))return;
      if(page!=="home"){e.preventDefault();UISounds.click();setPage("home");}
    };
    window.addEventListener("keydown",handler);
    return ()=>window.removeEventListener("keydown",handler);
  },[page]);

  // ── Global hover tick — one tick per interactive area (Decision 11) ──
  useEffect(()=>{
    if(!UI_SOUNDS_ENABLED)return;
    const SEL="button,a,[role=button],select,.card,.btn,.ach-card,.topnav-item,.topnav-logo-wrap,.lang-card";
    let lastEl=null;
    const handler=(e)=>{
      const el=e.target?.closest?.(SEL);
      if(!el||el===lastEl)return;
      lastEl=el;
      UISounds.tick();
    };
    const resetHandler=()=>{lastEl=null;};
    document.addEventListener("mouseover",handler,{passive:true});
    document.addEventListener("mouseleave",resetHandler,{passive:true});
    return ()=>{document.removeEventListener("mouseover",handler);document.removeEventListener("mouseleave",resetHandler);};
  },[]);

  // ── Ctrl+D: Developer reset all progress ──
  useEffect(()=>{
    const handler=(e)=>{
      if((e.ctrlKey||e.metaKey)&&e.key==="d"){e.preventDefault();setShowResetModal(true);}
      if(showResetModal&&e.key==="y"){
        setUser({xp:0,streak:1,wl:0,lw:new Set(),cm:0,achs:[],ls:new Set(),progress:{}});
        setFlags([]);setQuizLog([]);setShowResetModal(false);
        showToast("All progress reset!","🗑️");
      }
      if(showResetModal&&e.key==="n"){setShowResetModal(false);}
    };
    window.addEventListener("keydown",handler);
    return ()=>window.removeEventListener("keydown",handler);
  },[showResetModal]);

  const showToast=(m,i)=>setToast({message:m,icon:i,key:Date.now()});
  const unlock=id=>{if(user.achs.includes(id))return;const a=ACHS.find(x=>x.id===id);if(!a)return;setUser(u=>({...u,achs:[...u.achs,id],xp:u.xp+a.xp}));showToast(`Achievement: ${a.name}!`,a.icon);};
  const addXp=amt=>{setUser(u=>({...u,xp:u.xp+amt}));const p={amount:amt,x:120+Math.random()*180,y:90+Math.random()*80,key:Date.now()};setPops(pp=>[...pp,p]);setTimeout(()=>setPops(pp=>pp.filter(x=>x.key!==p.key)),1200);};
  const learnWord=w=>setUser(u=>{const s=new Set(u.lw);s.add(w);return{...u,lw:s,wl:s.size};});
  const addChat=()=>setUser(u=>({...u,cm:u.cm+1}));

  useEffect(()=>{
    if(user.wl>=1)unlock("first_word");
    if(user.wl>=10)unlock("vocab_10");
    if(user.cm>=5)unlock("chat_5");
    if(user.streak>=3)unlock("streak_3");
  },[user.wl,user.cm,user.streak]);

  useEffect(()=>{
    setUser(u=>{const ls=new Set(u.ls);ls.add(lang);if(ls.size>=3&&!u.achs.includes("polyglot"))setTimeout(()=>unlock("polyglot"),500);return{...u,ls};});
  },[lang]);

  // D85: onboard auto-creates guest profile, skipping auth screen entirely
  const onboard=(base,target)=>{setBaseLang(base);setLang(target);setOb(true);setProfile({displayName:"Learner",avatar:"🧑‍🚀",level:"beginner",dailyGoal:15,createdAt:new Date().toISOString()});setAuthed(true);showToast(`${t("ob_start_learning",base)} ${LANGUAGES.find(l=>l.code===target)?.name}!`,"🚀");};

  // ── PERSISTENCE ──
  useEffect(()=>{
    (async()=>{
      try{
        const r=await window.storage?.get("lingoverse:state");
        if(r?.value){
          const s=JSON.parse(r.value);
          if(s.ob) setOb(true);
          if(s.authed) setAuthed(true);
          if(s.profile) setProfile(s.profile);
          if(s.lang) setLang(s.lang);
          if(s.baseLang) setBaseLang(s.baseLang);
          if(s.user) setUser(u=>({...u,...s.user,lw:new Set(s.user.lw||[]),ls:new Set(s.user.ls||[])}));
          if(s.flags) setFlags(s.flags);
        }
      }catch(e){}
    })();
  },[]);
  useEffect(()=>{
    const save=async()=>{
      try{
        await window.storage?.set("lingoverse:state",JSON.stringify({
          ob,authed,profile,lang,baseLang,
          user:{...user,lw:[...user.lw],ls:[...user.ls]},flags
        }));
      }catch(e){}
    };
    if(ob) save();
  },[ob,authed,profile,lang,baseLang,user,flags]);

  // Simplified NavBar — 3 tabs only: Profile | Home | AI Chat
  const NavBar=()=>{
    const L=LANGUAGES.find(l=>l.code===lang);
    return(
      <div className="topnav">
        <div className="topnav-items" style={{justifyContent:"center",gap:0,flex:1}}>
          <div className={`topnav-item ${page==="profile"?"active":""}`} onClick={()=>setPage("profile")} style={{flex:1,justifyContent:"center"}}>
            <span className="icon"><AppIcon name="avatar" size={28}/></span><span>{t("nav_profile",baseLang)}</span>
          </div>
          <div className="topnav-logo-wrap" onClick={()=>setPage("home")}>
            <span style={{marginRight:6,display:"inline-flex"}}><CountryFlag code={lang} size={22}/></span>
            <span className="topnav-logo" style={{fontSize:20}}>LingoVerse</span>
          </div>
          <div className={`topnav-item ${page==="chat"?"active":""}`} onClick={()=>setPage("chat")} style={{flex:1,justifyContent:"center"}}>
            <span className="icon"><AppIcon name="robot" size={28}/></span><span>{t("nav_chat",baseLang)}</span>
          </div>
        </div>
      </div>
    );
  };

  return(
    <>
      <style>{CSS}</style>
      {/* Dark mode floating toggle — top-right, grey minimalist */}
      <button onClick={()=>setDarkMode(d=>!d)} title="Toggle dark mode (Ctrl+N)" style={{position:"fixed",top:100,right:14,zIndex:9998,width:34,height:34,borderRadius:10,border:darkMode?"1.5px solid rgba(255,255,255,0.1)":"1.5px solid #D0D0DD",background:darkMode?"rgba(30,31,56,0.6)":"#F0F0F5",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",transition:"all .2s",boxShadow:darkMode?"0 4px 12px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.08), inset 0 -1px 0 rgba(0,0,0,0.1)":"0 2px 8px rgba(0,0,0,0.06)",...(darkMode?{backdropFilter:"blur(12px)",WebkitBackdropFilter:"blur(12px)"}:{})}}>
        <span style={{fontSize:15,lineHeight:1,color:darkMode?"#D0D0E2":"#777788",transition:"color .2s"}}>{darkMode?"☀":"☽"}</span>
      </button>
      {/* Search floating button — below dark mode toggle */}
      <button data-search-btn onClick={()=>setShowSearch(s=>{if(s){setSearchQuery("");return false;}return true;})} title="Search curriculum (Ctrl+F)" style={{position:"fixed",top:144,right:14,zIndex:9998,width:34,height:34,borderRadius:10,border:showSearch?(darkMode?"1.5px solid rgba(160,140,255,0.5)":"1.5px solid rgba(123,94,232,0.4)"):(darkMode?"1.5px solid rgba(255,255,255,0.1)":"1.5px solid #D0D0DD"),background:showSearch?(darkMode?"rgba(123,94,232,0.35)":"rgba(123,94,232,0.1)"):(darkMode?"rgba(30,31,56,0.6)":"#F0F0F5"),display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",transition:"all .2s",boxShadow:showSearch?"0 4px 14px rgba(123,94,232,0.3), inset 0 1px 0 rgba(255,255,255,0.2), inset 0 -1px 0 rgba(0,0,0,0.1)":(darkMode?"0 4px 12px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.08), inset 0 -1px 0 rgba(0,0,0,0.1)":"0 2px 8px rgba(0,0,0,0.06)"),...(darkMode?{backdropFilter:"blur(12px)",WebkitBackdropFilter:"blur(12px)"}:{})}}>
        <span style={{fontSize:14,lineHeight:1,color:showSearch?"#7B5EE8":(darkMode?"#D0D0E2":"#777788"),transition:"color .2s"}}>🔍</span>
      </button>
      {/* Ctrl+D Reset Modal */}
      {showResetModal&&<div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",zIndex:9999,display:"flex",alignItems:"center",justifyContent:"center",backdropFilter:"blur(4px)"}} onClick={()=>setShowResetModal(false)}>
        <div onClick={e=>e.stopPropagation()} style={{background:"var(--card-bg)",borderRadius:24,padding:"36px 40px",maxWidth:360,textAlign:"center",boxShadow:"0 20px 60px rgba(0,0,0,0.3)"}}>
          <div style={{marginBottom:12}}><AppIcon name="trash_bin" size={52}/></div>
          <h2 style={{fontSize:20,fontWeight:800,marginBottom:8,color:"var(--gray-800)"}}>Reset All Progress?</h2>
          <p style={{fontSize:14,color:"var(--gray-500)",marginBottom:24,lineHeight:1.5}}>This will erase all XP, completed lessons, achievements, flags, and quiz history. This cannot be undone.</p>
          <div style={{display:"flex",gap:12,justifyContent:"center"}}>
            <button onClick={()=>setShowResetModal(false)} style={{padding:"12px 28px",borderRadius:14,border:"2px solid var(--gray-200)",background:"var(--card-bg)",fontSize:15,fontWeight:700,cursor:"pointer",color:"var(--gray-600)"}}>N — Cancel</button>
            <button onClick={()=>{setUser({xp:0,streak:1,wl:0,lw:new Set(),cm:0,achs:[],ls:new Set(),progress:{}});setFlags([]);setQuizLog([]);setShowResetModal(false);showToast("All progress reset!","🗑️");}} style={{padding:"12px 28px",borderRadius:14,border:"none",background:"linear-gradient(135deg,#E85D75,#D4394B)",fontSize:15,fontWeight:700,cursor:"pointer",color:"white"}}>Y — Reset</button>
          </div>
          <p style={{fontSize:11,color:"var(--gray-300)",marginTop:16}}>Press Y to confirm, N to cancel</p>
        </div>
      </div>}
      {/* Curriculum Search Float Panel (D113) */}
      {showSearch&&(()=>{
        const SL={teach:"word card",tip:"tip",mc:"multiple choice",fb:"fill blank",drag_fill:"drag fill",match:"match",verb_table:"verb table",tr:"translation",intro:"intro"};
        const q=searchQuery.trim();
        const results=q.length>=2?searchUnits(q,lang):[];
        const snip=(text)=>{
          if(!text||!q)return"";
          const idx=text.toLowerCase().indexOf(q.toLowerCase());
          if(idx<0)return text.slice(0,55)+(text.length>55?"…":"");
          const s=Math.max(0,idx-18),e=Math.min(text.length,idx+q.length+36);
          return(s>0?"…":"")+text.slice(s,e)+(e<text.length?"…":"");
        };
        return(
          <div className="sf-panel">
            <div className="sf-hdr">
              <span style={{fontSize:14,opacity:.4,flexShrink:0,lineHeight:1}}>🔍</span>
              <input className="sf-inp" autoFocus placeholder="Search any word or phrase…" value={searchQuery}
                onChange={e=>setSearchQuery(e.target.value)}
                onKeyDown={e=>{if(e.key==="Escape"){setShowSearch(false);setSearchQuery("");}}}
              />
              {searchQuery&&<span className="sf-clr" onClick={()=>setSearchQuery("")}>✕</span>}
            </div>
            {q.length>=2&&<div className="sf-cnt">{results.length===0?"No results":results.length>=80?"80+ — refine to narrow":`${results.length} result${results.length===1?"":"s"}`}</div>}
            <div className="sf-list">
              {q.length<2&&<div className="sf-empty"><div style={{fontSize:24,marginBottom:8}}>🔍</div>Type 2+ characters to search all units, lessons, and teach cards.<div style={{fontSize:10.5,opacity:.55,marginTop:5}}>Ctrl+F · Esc</div></div>}
              {q.length>=2&&results.length===0&&<div className="sf-empty">No results for "{q}"</div>}
              {results.map((r,i)=>{
                const hit=[r.step.nl,r.step.en,r.step.example,r.step.q,r.step.text,r.step.s].find(t=>typeof t==="string"&&t.toLowerCase().includes(q.toLowerCase()))||"";
                return(
                  <div key={i} className="sf-row" onClick={()=>setPreviewResult(r)}>
                    <div className="sf-ico">{r.unit.icon||"📚"}</div>
                    <div className="sf-body">
                      <div className="sf-ttl">U{r.unit.n} · {r.unit.title}</div>
                      <div className="sf-meta">
                        <span className="stag stag-cefr">{r.unit.level}</span>
                        <span className="stag stag-type">{SL[r.step.type]||r.step.type}</span>
                        <span style={{opacity:.65,fontSize:10}}>{r.lesson.title}</span>
                      </div>
                      {hit&&<div className="sf-snip">{snip(hit)}</div>}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })()}
      {/* Step Preview Modal — renders the actual card in isolation */}
      {previewResult&&(()=>{
        const {unit,lesson,si,step:s}=previewResult;
        const SL={teach:"word card",tip:"tip",mc:"multiple choice",fb:"fill blank",drag_fill:"drag fill",match:"match",verb_table:"verb table",tr:"translation",intro:"intro"};
        const renderCard=()=>{
          if(s.type==="teach") return(
            <>
              <div className="sp-word">{s.nl}</div>
              {s.phonetic&&<div className="sp-phon">{s.phonetic}</div>}
              <div className="sp-trans">{s.en}</div>
              {s.kind&&<div className="sp-kind">{s.kind}</div>}
              {(s.example||s.exampleEn)&&<div className="sp-ex">{s.example&&<div className="sp-ex-tgt">{s.example}</div>}{s.exampleEn&&<div className="sp-ex-src">{s.exampleEn}</div>}</div>}
              {s.note&&<div className="sp-note">{s.note}</div>}
            </>
          );
          if(s.type==="tip") return(
            <>
              {s.title&&<div className="sp-tip-ttl">💡 {s.title}</div>}
              {s.text&&<div className="sp-tip-txt">{s.text}</div>}
            </>
          );
          if(s.type==="mc") return(
            <>
              <div className="sp-q">{s.q}</div>
              {(s.opts||[]).map((o,i)=><div key={i} className={`sp-opt${o===s.ans?" correct":""}`}>{o===s.ans&&<span style={{marginRight:6,fontSize:11}}>✓</span>}{o}</div>)}
              <div style={{height:12}}/>
            </>
          );
          if(s.type==="fb"||s.type==="drag_fill"){
            const blanks=s.blanks||{1:s.a||"…"};
            let tpl=s.s||"";
            Object.keys(blanks).forEach(k=>{tpl=tpl.replace(new RegExp(`\\{${k}\\}`,"g"),`|||${blanks[k]}|||`);});
            const parts=tpl.split("|||");
            return(<><div className="sp-fb-sent">{parts.map((p,i)=>i%2===1?<span key={i} className="sp-fb-ans">{p}</span>:<span key={i}>{p}</span>)}</div><div style={{height:12}}/></>);
          }
          if(s.type==="match") return(
            <div style={{paddingTop:10}}>
              {(s.pairs||[]).map((p,i)=><div key={i} className="sp-pair-row"><div className="sp-pair-tgt">{p.nl}</div><div style={{color:"var(--gray-300)",fontSize:14}}>⟷</div><div className="sp-pair-src">{p.en}</div></div>)}
            </div>
          );
          if(s.type==="intro") return(
            <>
              <div className="sp-intro-title">{s.title||lesson.title}</div>
              {s.desc&&<div className="sp-intro-desc">{s.desc}</div>}
              {(s.goals||[]).map((g,i)=><div key={i} className="sp-goal"><span>✦</span>{g}</div>)}
              <div style={{height:14}}/>
            </>
          );
          return(<div style={{padding:"16px",fontSize:13,color:"var(--gray-500)"}}>{s.title&&<div style={{fontWeight:700,color:"var(--gray-700)",marginBottom:8}}>{s.title}</div>}{s.q&&<div style={{marginBottom:8,fontWeight:600}}>{s.q}</div>}{s.text&&<div style={{lineHeight:1.6}}>{s.text}</div>}{s.s&&<div style={{fontWeight:600,color:"var(--gray-700)"}}>{s.s}</div>}<div style={{height:12}}/></div>);
        };
        return(
          <div className="sp-ov" onClick={()=>setPreviewResult(null)}>
            <div className="sp-wrap" onClick={e=>e.stopPropagation()}>
              <div className="sp-bar">
                <span style={{fontSize:18,flexShrink:0}}>{unit.icon||"📚"}</span>
                <div style={{flex:1,minWidth:0}}>
                  <div style={{fontSize:12,fontWeight:700,color:"var(--gray-700)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>U{unit.n} · {unit.title} — {lesson.title}</div>
                  <div style={{display:"flex",gap:4,marginTop:3,flexWrap:"wrap"}}>
                    <span className="stag stag-cefr">{unit.level}</span>
                    <span className="stag stag-type">{SL[s.type]||s.type}</span>
                    <span className="stag stag-prev">preview · step {si+1}</span>
                  </div>
                </div>
                <button className="sp-xbtn" onClick={()=>setPreviewResult(null)}>✕</button>
              </div>
              <div className="sp-body">
                <div className="sp-card">{renderCard()}</div>
              </div>
            </div>
          </div>
        );
      })()}
      {!devAccess?<DevGate onAccess={()=>{try{sessionStorage.setItem("lingoverse:dev","1");}catch(e){}setDevAccess(true);}}/>:!ob?<Onboarding onComplete={onboard}/>:!authed?<AuthScreen lang={lang} baseLang={baseLang} onAuth={(p)=>{setProfile(p);setAuthed(true);showToast(`${t("home_welcome",baseLang)} ${p.displayName}!`,"🎉");}}/>:(
        <>
          <NavBar/>
          <div className="main">
            {page==="home"&&<Home user={user} setPage={setPage} lang={lang} baseLang={baseLang}/>}
            {page==="learn"&&<LearnPage lang={lang} baseLang={baseLang} user={user} setUser={setUser} addXp={addXp} learnWord={learnWord} showToast={showToast} addFlag={addFlag}/>}
            {page==="vocabulary"&&<VocabularyPage lang={lang} user={user} showToast={showToast} baseLang={baseLang}/>}
            {page==="flashcards"&&<Flashcards lang={lang} baseLang={baseLang} user={user} addXp={addXp} learnWord={learnWord} showToast={showToast}/>}
            {page==="curriculum"&&<div className="anim" style={{textAlign:"center",padding:"60px 20px"}}><AppIcon name="brain" size={72}/><h2 style={{fontSize:24,fontWeight:800,color:"var(--gray-800)",marginTop:16,marginBottom:8,fontFamily:"'DM Sans','Inter',system-ui,sans-serif"}}>Personal Curriculum</h2><p style={{color:"var(--gray-400)",fontSize:14,lineHeight:1.6,maxWidth:320,margin:"0 auto 24px"}}>Your AI-powered personalized learning path is being developed. It will adapt to your strengths, weaknesses, and learning style.</p><div style={{display:"inline-block",padding:"10px 24px",borderRadius:16,background:"linear-gradient(180deg, #C0AEF8 0%, #7B5EE8 50%, #5840B8 100%)",color:"white",fontWeight:700,fontSize:13,boxShadow:"0 4px 16px rgba(123,94,232,0.3), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -2px 0 rgba(0,0,0,0.12)"}}>Coming Soon</div></div>}
            {page==="quiz"&&<Quiz lang={lang} baseLang={baseLang} user={user} addXp={addXp} learnWord={learnWord} onPerfect={()=>unlock("quiz_perfect")} showToast={showToast}/>}
            {page==="chat"&&<Chat lang={lang} baseLang={baseLang} user={user} addXp={addXp} addChat={addChat} learnedWords={[...user.lw]}/>}
            {page==="grammar"&&<GrammarPage lang={lang} baseLang={baseLang}/>}
            {page==="idioms"&&<IdiomsPage lang={lang} baseLang={baseLang}/>}
            {page==="profile"&&<Profile user={user} lang={lang} baseLang={baseLang} flags={flags} setFlags={setFlags} onLogout={async()=>{setAuthed(false);setProfile(null);setOb(false);setPage("home");try{await window.storage?.delete("lingoverse:state");}catch(e){}}} setLang={setLang}/>}
          </div>
        </>
      )}
      {toast&&<Toast key={toast.key} message={toast.message} icon={toast.icon} onDone={()=>setToast(null)}/>}
      {pops.map(p=><XpPop key={p.key} amount={p.amount} x={p.x} y={p.y}/>)}
    </>
  );
}
