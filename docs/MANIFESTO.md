# LingoVerse Manifesto

> Extracted from src/lingoverse.jsx on 2026-03-21
> Original location: lines 24-324

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
