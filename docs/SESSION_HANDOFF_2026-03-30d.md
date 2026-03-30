# Session Handoff — 2026-03-30d

> Dictionary color system session. Fixed critical POS tag mismatches, added German tabs/indexes.
> Previous: `SESSION_HANDOFF_2026-03-30c.md` (mobile + chat). Milestone: `SESSION_HANDOFF_2026-03-29c.md` (German v2 PERFECT).

---

## What Was Done This Session

### 1. Critical POS Tag Mismatch — FIXED

**The bug:** The German function word list (`src/data/wordlists/function-words-de.js`) uses granular POS tags like `aux_verb`, `modal_verb`, `conjunction_coord`, `conjunction_sub`, `pronoun_dat`, `pronoun_refl`, `pronoun_rel`, `pronoun_dem`, `pronoun_indef`. But the color system's `WORDTYPE_PACK` and `GRAMMAR_PACKS.de.gender` colorMaps only recognized `verb`, `auxiliary`, `conjunction`, `pronoun_subj`, `pronoun_obj`, `pronoun_poss`. Every word whose POS didn't match a colorMap key rendered as **invisible plain text** — no color, no click feedback.

**Words that were broken (now fixed):**
- `ist`, `hat`, `wird`, `bin`, `bist`, `sind` (pos: `aux_verb`) — ALL auxiliary verb conjugations
- `kann`, `muss`, `will`, `soll`, `darf`, `mag` (pos: `modal_verb`) — ALL modal verb conjugations
- `und`, `oder`, `aber`, `denn` (pos: `conjunction_coord`) — ALL coordinating conjunctions
- `weil`, `dass`, `wenn`, `ob`, `als`, `damit` (pos: `conjunction_sub`) — ALL subordinating conjunctions
- `mir`, `dir`, `ihm`, `ihr`, `ihnen` (pos: `pronoun_dat`) — ALL dative pronouns
- `sich`, reflexive `mich`/`dich` (pos: `pronoun_refl`) — ALL reflexive pronouns
- `der`/`die`/`das` relative (pos: `pronoun_rel`), `dieser`/`jener` (pos: `pronoun_dem`), `man`/`jemand`/`etwas` (pos: `pronoun_indef`)

**The fix (in `src/data/dictionary.js`):**
- Added `aux_verb`, `modal_verb`, `aux` to WORDTYPE_PACK colorMap (mapped to forest green like `verb`)
- Added `conjunction_coord`, `conjunction_sub` (mapped to dark gold like `conjunction`)
- Added `pronoun_dat`, `pronoun_refl`, `pronoun_rel`, `pronoun_dem`, `pronoun_indef` (mapped to deep purple like `pronoun`)
- Added ALL the same fallback colors to the Gender pack (which is the default!) so non-gendered words still color when Gender mode is active
- Updated `langDisabled` filter in `LessonEngine.jsx` to handle new POS subtypes for the disable toggle

**Impact:** Coverage went from ~50% to ~90% of words in any German sentence getting colored. Verified live: "Das Flugzeug ist gelandet" — all 4 words colored. "Verumius steigt aus dem Flugzeug" — all content words colored.

### 2. GERMAN_FORM_INDEX Wired Into lookupWord() and universalHl()

**Before:** `GERMAN_FORM_INDEX` existed (built from conjugation tables) but was exported and never imported anywhere. Clicking a conjugated verb form like "fährst" in a lesson would fail to resolve.

**After:**
- `lookupWord()` in `dictionary.js` now falls back to `GERMAN_FORM_INDEX` for German and `KOREAN_FORM_INDEX` for Korean
- `universalHl()` in `LessonEngine.jsx` now imports `GERMAN_FORM_INDEX` and uses it as fallback when direct WORD_DB lookup fails
- Conjugated forms like "fährst", "fuhr", "gefahren" now resolve to their lemma "fahren" and get the correct color + click handler

### 3. In-Lesson WordBubble Enriched for German

**Before:** The WordBubble (full-screen popup when clicking a taught word in a lesson) showed Korean-shaped data for all languages — just base meaning + morpheme note + example. No POS badge, no gender badge, no fun fact.

**After:** WordBubble now shows:
- **POS badge** (verb, noun, adj, etc.) with correct POS_COLORS
- **Gender badge** (der/die/das) with correct GENDER_COLORS
- **Fun Fact** section (gold-tinted, v2 signature feature) from teach card `funFact` field
- Level badge shortened to 2 chars (A1, A2, B1, B2)

### 4. VocabularyPage WordPopup — German Tabs Added

**Before:** German words in VocabularyPage got 1 tab (Overview) or 2 tabs (Overview + Forms for verbs). No examples, no case declension.

**After:**
- **Verbs** get: Overview + Conjugation + Examples (3 tabs)
- **Nouns with gender** get: Overview + Cases + Examples (3 tabs)
- **Other words** get: Overview + Examples (2 tabs)
- **Cases tab** shows Nominativ/Akkusativ/Dativ/Genitiv with definite + indefinite articles via `nounWithCases()`
- **Examples tab** pulls from `GERMAN_EXAMPLE_INDEX` — shows all curriculum sentences containing that word, with source translation and unit/lesson reference

### 5. GERMAN_EXAMPLE_INDEX Already Existed

Discovered during work that `GERMAN_EXAMPLE_INDEX` was already built at line ~1117 in `dictionary.js` (using `target`/`source` field names). Removed a duplicate I accidentally created. The existing index covers all German unit examples/quizzes.

---

## Files Changed

| File | Changes |
|------|---------|
| `src/data/dictionary.js` | lookupWord() form-index fallback, WORDTYPE_PACK all POS keys, Gender pack fallback colors |
| `src/components/LessonEngine.jsx` | Import GERMAN_FORM_INDEX, universalHl form-index fallback, WordBubble POS/gender/funFact, langDisabled filter update |
| `src/verumlingua.jsx` | Import GERMAN_EXAMPLE_INDEX + nounWithCases, German tab structure (Conjugation/Cases/Examples), deExamples + deCaseData hooks, Cases tab renderer, Examples tab renderer |

---

## CRITICAL: What Still Needs To Be Done

### The Vision

The owner wants **every word in every sentence** to be identifiable, tappable, and tagged — not just "known words get colored." A proper sentence breakdown where even a name like "Verumius" shows as "proper noun (name)" when tapped. The system should account for 100% of words, not leave gaps as invisible text.

### Layer 1: Unknown Words Are Invisible (MUST FIX — ~30 lines)

**Current behavior:** If a word is NOT in WORD_DB, `universalHl()` renders it as a plain `<span>` — no color, no cursor, no click handler. It's invisible to the user. They can't tap it, can't learn what it means.

**Required behavior:** Unknown words should render with a subtle style (grey text, dashed underline or similar), still be tappable, and show a mini popup: "This word isn't in your dictionary yet" or "Tap to look up." This turns invisible gaps into learning moments.

**Where to fix:** `universalHl()` in `src/components/LessonEngine.jsx`, around line 1806 — the `if (!isKnownTarget)` branch currently does `spans.push(<span>{mainWord}</span>)`. Change to a tappable span with a handler that opens MiniWordPopup with `{ word, en: null, pos: null, lang, isUnknown: true }`.

**PP rule:** This is NOT about adding teach cards for every word. It's about making the renderer account for 100% of tokens. The content rules (PP34, PP52) still govern what gets teach cards. This is a UI/rendering fix only.

### Layer 2: Proper Noun Detection (MUST FIX — ~40 lines)

**Current behavior:** "Verumius", "Berlin", "München", "Anna" — names that appear in every story card get zero treatment. No color, no click, nothing.

**Required behavior:** Simple heuristic: word is capitalized + not at start of sentence + not in WORD_DB = likely proper noun. Tag it with a warm grey color, make it clickable, show "Proper noun (name)" or "Proper noun (place)" in popup.

**Where to fix:** Same `universalHl()` function, in the `if (!isKnownTarget)` branch. Add a check: if `i > 0` (not first word) and `cleanWord[0] === cleanWord[0].toUpperCase()` and `cleanWord[0] !== cleanWord[0].toLowerCase()`, treat as proper noun.

**Edge case:** German capitalizes ALL nouns. So "Flughafen" mid-sentence is capitalized but IS a noun in WORD_DB. The check must be: capitalized + NOT in WORD_DB = proper noun. Since taught nouns ARE in WORD_DB, this won't false-positive on regular nouns.

### Layer 3: True Sentence Parsing (FUTURE — Not Feasible Client-Side)

**What it means:** Knowing that "dem" is dative here (not just "masculine article"), that "aus" is a separable prefix vs preposition in this context, that "gelandet" is past participle of "landen." This is NLP-level grammar analysis.

**Why it's hard:** German has V2 word order, 4 cases, separable verbs, modal verb brackets. A real parser needs either:
- Pre-computed parse for every sentence (agent generates at build time — stored as `tagged` field on steps)
- Runtime NLP library (too heavy for browser, 5-10MB+ models)
- API call to LLM (latency, cost per sentence)

**Recommendation:** The `tagged` field already exists in the step format (story cards use it). A future agent task could pre-parse every example sentence and store word-level grammar annotations. The renderer already checks `st.tagged` before falling back to `universalHl()`. This is the cleanest path but requires a major agent batch job across all 36 units.

**Not a blocker for launch.** Layers 1 + 2 get us to "100% of words visible and tappable." Layer 3 is the difference between "good dictionary" and "grammar analyzer."

---

## Current Dictionary System Architecture

### Data Flow
```
function-words-de.js (647 entries, granular POS)
        ↓
buildWordDB() in dictionary.js
        ↓ merges with
teach cards from all 36 German v2 units (5,147 entries)
        ↓ produces
WORD_DB.de (~5,800 entries total)
        ↓ used by
universalHl() in LessonEngine.jsx → colors + click handlers
        ↓ also
lookupWord() → popup data
        ↓ also
GERMAN_FORM_INDEX → conjugated forms resolve to lemma
GERMAN_EXAMPLE_INDEX → curriculum sentences per word
```

### Color Packs (GRAMMAR_PACKS.de)
1. **Gender** (default): Articles/nouns/adjectives by gender (blue=der, red=die, teal=das) + POS fallback colors for everything else
2. **Word Type**: Every word by POS (green=verb, blue=noun, orange=adj, purple=pronoun, slate=preposition, gold=conjunction)
3. **Cases**: Placeholder — colorMap empty, legend only. Needs Layer 3 to be functional.

### Key Functions
- `universalHl()` — Main sentence colorizer. Tokenizes by whitespace, looks up each word in WORD_DB, applies grammar pack colors, attaches click handlers
- `resolvePackColor()` — Maps entry POS + gender to a color from the active grammar pack
- `lookupWord()` — Direct lookup + article strip + form-index fallback
- `WordBubble` — Full-screen in-lesson popup (now with POS/gender/funFact for German)
- `MiniWordPopup` — Compact popup for untaught words (function words, etc.)

---

## Pipeline Rules Reminder For Next Session

- **PP34/PP52**: Every quiz word must trace to a prior teach card. The dictionary system does NOT change this — it's a rendering layer, not a content layer.
- **PP59**: Every teach card gets POS + gender. This feeds WORD_DB. Already PASS for all 5,147 German v2 cards.
- **PP61**: All explanatory text in source language (English). Does not apply to WORD_DB entries.
- **Rule A**: Never claim something is missing without grepping the actual data file. Before saying a word "isn't in WORD_DB," grep function-words-de.js AND the teach card files.
- **Rule B.11**: Agents read per-unit files (`src/data/german-v2/unit-NN.js`). Never the re-export wrapper.

---

## Quick Start For Next Session

1. Read this handoff (`docs/SESSION_HANDOFF_2026-03-30d.md`)
2. The two immediate tasks are Layer 1 (unknown word fallback) and Layer 2 (proper noun detection)
3. Both changes are in `src/components/LessonEngine.jsx`, in the `universalHl()` function, in the `if (!isKnownTarget)` branch (~line 1806)
4. After those two fixes, every word in every German sentence will be visible and tappable
5. Test by: enabling grammar toggle (Aa button), opening any German A1 lesson, verifying all words are colored/tappable including names and uncommon words

---

## Build Verification

```
npm run build   # PASS — zero errors, 8.81s
```

All changes compile. Chunk size warning is expected (24.9MB — full app with all language data).
