# Decision Log (Legacy: D1-D85)

> Extracted from src/lingoverse.jsx on 2026-03-21
> Original location: lines 486-2889
> For D86+ decisions, see docs/DECISION_LOG.md

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

