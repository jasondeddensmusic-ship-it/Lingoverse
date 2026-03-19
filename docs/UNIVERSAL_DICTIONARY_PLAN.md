# Universal Word Dictionary & Grammar Color System — Complete Redesign

> **PARTIALLY SUPERSEDED (2026-03-19)**: The UI/UX portions of this plan (gold bubble treatment, MiniWordPopup, generic settings panel) are superseded by `docs/VERUMLINGUA_REHAUL_VISION.md` (D114). However, the **technical infrastructure** (WORD_DB architecture, function word lists, WORD_INTRO_MAP, dictionary builder merge logic, universalHl rewrite to lookup-based) is still the active build spec. The vision doc defines WHAT the experience should be; this doc defines HOW to build the dictionary engine underneath it.
>
> **Phase 1 code on main**: Live but buggy. Gold highlights on wrong words, crashes on word click, popup peekhole.
> **Previous commit**: `38089bd` on main (partial fixes, still broken).
> **Plan file**: `.claude/plans/serialized-giggling-dongarra.md`

## Why Redesign Was Needed

Phase 1 used context-free tokenizer guessing to classify words. This caused:
- "das" (demonstrative pronoun) misidentified as article → next word wrongly gold-highlighted
- Verbs/adverbs/adjectives getting wrong colors (no POS data in dictionary)
- Dictionary only had teach card words (~1,000-1,300/lang), missing conjugations, function words, etc.
- No tracking of which words are "new" to the learner based on lesson progress

## Owner Design Decisions (2026-03-19)

1. **10+ fine-grained colors** for every POS category (articles, nouns, verbs, adjectives, adverbs, prepositions, conjunctions, pronouns, numbers, interjections)
2. **User-customizable filters** — toggle each color category independently via settings panel
3. **Default state = NO colors** except NEW WORDS in gold bubbles
4. **New word = ANY word appearing for FIRST TIME** in the learner's progression (nouns, verbs, conjugations, anything)
5. **Gold bubble** = learning aid, distinct from grammar colors, stacks with colors when both active
6. **After lesson completion**: gold bubbles disappear for those words. "Reset new word bubbles" option available.
7. **Settings panel** with checkboxes: Gender, Word Types, Structure, Display, Presets
8. **Understripes** have their own colors for subcategories (gender + word type = text color + understripe)
9. **Complete dictionary** from official exam vocab lists (future) + function word lists + teach card extraction + example extraction
10. **Mobile-first**: bottom-sheet popups on mobile, centered modal on desktop
11. **Token-efficient infrastructure**: dictionary becomes curriculum planning tool, eliminates manual P34/P52 audits

## Complete POS Color Map

| # | Category | Light | Dark | Understripe | Examples |
|---|----------|-------|------|-------------|----------|
| 1 | Article (masc) | `#4A8FE7` blue | `#7AB8FF` | — | der, el, le |
| 2 | Article (fem) | `#E8475E` coral | `#F58888` | — | die, la |
| 3 | Article (neut) | `#7B5EE8` purple | `#A890FF` | — | das |
| 4 | Article (common) | `#4A8FE7` blue | `#7AB8FF` | — | de (NL) |
| 5 | Article (neut-NL) | `#E8960A` gold | `#F5C040` | — | het |
| 6 | Article (indef) | `#94A3B8` slate | `#CBD5E1` | — | een, un, ein |
| 7 | Article (plural) | `#6366F1` indigo | `#818CF8` | — | les, los, die(pl) |
| 8 | Noun | default text | default text | gender color 2.5px | Mutter, maison |
| 9 | Verb | `#2ECDA7` teal | `#50E0C0` | — | sieht, mange |
| 10 | Adjective | `#F59E0B` amber | `#FCD34D` | — | nett, grande |
| 11 | Adverb | `#EC4899` rose | `#F472B6` | — | sehr, bien |
| 12 | Preposition | `#6366F1` indigo | `#818CF8` | — | in, avec, con |
| 13 | Conjunction | `#8B5CF6` violet | `#A78BFA` | — | und, mais |
| 14 | Pronoun (subject) | `#D97706` amber | `#F59E0B` | — | ich, je, Sie |
| 15 | Pronoun (object) | `#B45309` dk amber | `#D97706` | — | mich, me |
| 16 | Pronoun (poss.) | `#92400E` brown | `#B45309` | — | deine, mon |
| 17 | Particle (Korean) | per-type | per-type | — | 은/는, 이/가 |
| 18 | Number | `#06B6D4` cyan | `#22D3EE` | — | drei, cinq |
| 19 | Interjection | `#F43F5E` red | `#FB7185` | — | ja, oui |
| 20 | **NEW WORD** | gold text | gold text | gold bubble bg | any first-time word |
| 21 | Unknown | muted gray | muted gray | dotted gray | not in dictionary |

## New Architecture

### Dictionary: WORD_DB (replaces LANG_DICT)

```
WORD_DB[lang][word] = {
  word, lemma, en, lemmaEn,
  pos,          // from 21 categories above
  gender,       // "m"/"f"/"n"/"c" for nouns
  article,      // "der"/"die"/"das" etc
  level,        // CEFR level
  taught,       // has dedicated teach card?
  lessonId,     // where first taught
  tags,         // morphological tags
  phonetic, note, example, exampleEn, cognate
}
```

### 3 Sources Merged (priority order):
1. **Function word lists** (per-language, manually curated, ~200-500 words each)
2. **Teach card extraction** (auto from units files, taught=true)
3. **Example/quiz word extraction** (auto, fills gaps, taught=false)

### Word Introduction Registry: WORD_INTRO_MAP

```
WORD_INTRO_MAP[lang][word] = { unitN, lessonId, stepIndex }
```
- Built at module load by walking ALL units/lessons/steps in order
- Tracks the FIRST occurrence of EVERY word (including conjugations)
- Powers the "new word" gold bubble system
- Runtime: `isNewWord(word, lang, currentLessonId)` checks if word is first seen here

### Toggle & Settings System

**Default (toggle OFF):**
- No grammar colors
- ONLY new words in gold bubbles
- All words clickable with subtle dashed underlines

**Toggle ON (Aa):**
- Grammar colors per color map + user filter selections
- Settings gear appears with checkboxes:
  - Gender Colors (articles + noun understripes)
  - Word Types (verbs, adjectives, adverbs, numbers)
  - Structure (prepositions, conjunctions, pronouns, interjections)
  - Display (purple translations, understripe function swap)
  - Presets (Gender only / Content words / Full grammar / Everything)

### Token Flow (NEW)
```
text → split on whitespace → for each word:
  → WORD_DB[lang][word.toLowerCase()] lookup
  → if found: use entry.pos for color
  → if not found: pos="unknown", gray treatment
  → check isNewWord() for gold bubble overlay
  → render with appropriate color + understripe + click handler
```

## Build Phases

### Phase B1: Function Word Lists — COMPLETE
Created `src/data/wordlists/function-words-{de,fr,nl,es,ko}.js`. ~200-500 entries each with full POS tags.

### Phase B2: Enhanced Dictionary Builder — COMPLETE
Rewrote `dictionary.js` with 3-source merge into WORD_DB. Built WORD_INTRO_MAP. Exports: `WORD_DB`, `WORD_INTRO_MAP`, `lookupWord`, `isNewWord`, `getTaughtWords`.

### Phase B3: universalHl() Rewrite — COMPLETE
POS-based coloring from WORD_DB. Gold bubble for new words. Gender understripes for nouns. All 5 languages supported.

### Phase B4: Toggle & Settings UI — V1 COMPLETE (2026-03-19)
Language-specific `GRAMMAR_SETTINGS` config per language. Per-language `grammarFilters` with localStorage persistence (`vl_grammar_filters_v2`). Mobile bottom sheet + desktop floating panel. Preset buttons. Color legend. See `docs/SETTINGS_PANEL_HANDOFF.md` for V1 details and V2 gaps.

### Phase B5: Popup Redesign — NOT STARTED
BottomSheet (mobile) / Modal (desktop). Tabbed WordBubble. Fix peekhole.

### Phase B6: Color Legend — COMPLETE (2026-03-19)
"?" button on settings panel showing color meanings. Built as part of Phase B4.

## Files

| File | Status | What |
|------|--------|------|
| `src/data/dictionary.js` | REWRITE | WORD_DB + WORD_INTRO_MAP builders |
| `src/data/wordlists/function-words-*.js` | NEW (5 files) | POS-tagged function word lists |
| `src/data/metadata.js` | MODIFY | Remove LANG_TOKENIZER.grammarColors (moved to WORD_DB) |
| `src/lingoverse.jsx` | REWRITE sections | universalHl(), toggle/settings, popups |

## Key Line Numbers (current, will shift)

| What | ~Line | Notes |
|------|-------|-------|
| `grammarHl` state | ~10070 | Will become multi-state toggle |
| Grammar toggle button | ~10656 | Will add settings gear |
| `KOREAN_DICT` | ~10734 | Merge into WORD_DB |
| `tokenize()` | ~11004 | Simplify (POS from WORD_DB, not guessing) |
| `universalHl()` | ~11462 | Full rewrite |
| `MiniWordPopup` | ~11668 | Replace with BottomSheet |
| `WordBubble` | ~11164 | Add tabs |
