# LingoVerse Content Pipeline Checklist

> Extracted from src/lingoverse.jsx on 2026-03-21
> Original location: lines 2891-3119
> Note: These rules are also documented in CLAUDE.md pipeline rules section.

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

