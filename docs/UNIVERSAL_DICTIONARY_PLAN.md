# Universal Word Dictionary & Grammar Colorizer — Handoff

> **Status**: Batches 1-7 IMPLEMENTED (2026-03-18). Merged to main. NOT YET VISUALLY TESTED.
> **Commit**: `daee5f8` on main. Cloudflare Workers accidental merge reverted in `fe1ab14`.

## What Was Built

Expanded the Korean-only word dictionary system (KOREAN_DICT, tokenizeKorean, koreanHl, WordBubble) into a universal system for ALL 5 languages (ko, nl, de, fr, es):
- Gold-highlighted (#E8960A) untaught NOUNS in example sentences/dialogues (clickable -> dictionary popup)
- VERBS, IDIOMS, SET EXPRESSIONS, and PHRASES always get dedicated teach cards (never gold-highlight). ONLY pure nouns get gold.
- DeepDives never count as exposure
- Universal tokenizer per language family (articles, particles, case markers, contractions)
- Toggle-able grammar colorizer (articles, particles, prepositions, conjunctions, pronouns)
- WordBubble expanded to all languages
- VocabularyPage connected to auto-generated dictionary
- smartHl accent bug FIXED (Latin diacritics no longer treated as non-Latin script)

## Files Modified/Created

| File | Change |
|------|--------|
| `src/data/dictionary.js` | NEW (173 lines): Auto-builds LANG_DICT from teach cards at module load |
| `src/data/metadata.js` | +95 lines: LANG_TOKENIZER config for all 5 languages (after line 478) |
| `src/lingoverse.jsx` | +505/-57 lines: tokenize, universalHl, MiniWordPopup, grammar toggle, VocabularyPage, accent fix |
| `docs/UNIVERSAL_DICTIONARY_PLAN.md` | This file |

## Key Line Numbers in lingoverse.jsx

| What | Line | Notes |
|------|------|-------|
| `grammarHl` state | ~10070 | useState with localStorage persistence |
| Grammar toggle button | ~10656 | "Aa" button in ProgressBar toolbar |
| `KOREAN_DICT` | ~10734 | Hand-crafted 157-entry Korean dict (unchanged) |
| `mergeKoreanDict` call | ~10911 | useMemo merging KOREAN_DICT into LANG_DICT |
| `tokenize()` | ~11004 | Universal tokenizer dispatcher |
| `bubbleHl()` | ~11143 | WordBubble highlighting (now all languages) |
| `koreanHl()` | ~11393 | Korean-specific highlighter (unchanged, called by universalHl) |
| `universalHl()` | ~11433 | Main highlight function replacing all old call sites |
| `MiniWordPopup` | ~11537 | Gold-themed compact popup for untaught nouns |
| VocabularyPage `dictVocab` | ~7834 | LANG_DICT as primary data source |

## Batch Details

### Batch 1: smartHl Accent Bug Fix (DONE)
Changed 11 rendering locations from `/([^\u0000-\u007F]+)/g` to script-specific regex that only splits on actual non-Latin scripts (Hangul, Arabic, CJK, Japanese, Cyrillic). Kept leak validator regex unchanged (it correctly needs to detect ALL non-ASCII).

### Batch 2: Data Architecture (DONE)
- **LANG_TOKENIZER** in metadata.js: Per-language config with articles, particles, contractions, grammarColors for ko/nl/de/fr/es
- **dictionary.js**: Auto-builder that iterates ALL teach cards across all units files, detects articles via ARTICLE_SYSTEMS, classifies noun/verb/phrase, builds keyed dictionary. Korean entries get merged with hand-crafted KOREAN_DICT overrides.

### Batch 3: Universal Tokenizer (DONE)
- `tokenize(text, lang)` dispatcher in lingoverse.jsx
- Korean path: wraps existing tokenizeKorean
- European path: handles articles, contractions, punctuation, dictionary lookups
- Unified token format: `{text, key, isTarget, article, particle, inDict, entry, kind, isTaught, isGrammar, grammarCategory, grammarColor}`

### Batch 4: Universal Highlighting (DONE)
- `universalHl(text, lang)` replaces ALL 18+ koreanHl/smartHl conditional call sites
- Logic: taught word -> purple clickable (WordBubble), untaught noun -> GOLD clickable (MiniWordPopup), grammar marker (when toggle ON) -> colored per grammarColors, else -> smartHl fallback
- `MiniWordPopup` component: compact gold-themed popup for untaught nouns

### Batch 5: Grammar Colorizer Toggle (DONE)
- `grammarHl` state persisted in localStorage (`vl_grammar_hl`)
- Default: ON for A1-A2, OFF for B1+
- Toggle button ("Aa") in lesson toolbar ProgressBar
- Grammar tokens colored per LANG_TOKENIZER[lang].grammarColors when ON

### Batch 6: WordBubble Expansion (DONE)
- `bubbleHl` in WordBubble handles all languages (Korean preserved, European added)
- Article badge support via ARTICLE_SYSTEMS colors
- Dictionary entries from LANG_DICT

### Batch 7: VocabularyPage Connection (DONE)
- Uses LANG_DICT as primary data source (falls back to VOCAB)
- Enhanced search: matches word, translation, phonetic, article+word
- Word entries show article, level, kind, example

## What's NOT Done Yet

### Priority 1: Visual Testing (BLOCKING)
Code is on main but has NOT been browser-tested. The next session MUST open lingoverse.nl and verify:
1. French lesson (e.g. "Les pieces"): e-grave renders inline, NOT purple-highlighted separately
2. Korean lesson: dictionary + WordBubble work identically to before (no regression)
3. Grammar toggle "Aa" button: visible in lesson toolbar, ON/OFF toggles grammar colors
4. Gold noun highlights: untaught nouns in examples show gold, clicking opens MiniWordPopup
5. MiniWordPopup: displays word, article badge, translation, level, close button works
6. VocabularyPage: shows LANG_DICT words per language, search works across word/translation/phonetic
7. Search bar comfort input: typing "cafe" still finds "cafe" (diacritic normalization intact)
8. Dutch/German/Spanish lessons: no visual regressions in teach cards, tips, quizzes
9. Dark mode: all new elements (grammar colors, gold highlights, MiniWordPopup) look correct

If ANY of these fail, the fix is in universalHl() (~line 11433) or tokenize() (~line 11004). The smartHl() and koreanHl() functions are preserved as fallbacks.

### Priority 2: Gold Color Overlap
Dutch het-article (#E8960A) and untaught noun gold (#E8960A) are the same color when grammar colorizer is ON. Options:
- Use a slightly different shade for untaught nouns (e.g. #D4880C amber)
- Use dotted underline for het-article vs solid underline for untaught nouns
- Accept it (different visual contexts: grammar color = text color, untaught = text + solid underline)

### Priority 3: Color Legend Popup
Long-press or info icon next to grammar toggle "Aa" button. Shows current language's grammar categories with color swatches:
- Korean: "Topic (blue), Subject (teal), Object (coral)..."
- Dutch: "de (blue), het (gold), Prepositions (teal)..."
- Data source: LANG_TOKENIZER[lang].grammarColors in metadata.js

### Stretch Goals
- **Dissect view**: Compound word splitting in WordBubble (Korean morph field exists, Germanic compound splitting basic)
- **Lesson-end vocab summary**: 2x2 grid of new vocab encountered during lesson
- **Synonym support**: Multiple dictionary entries linking to same meaning

## Architecture Notes

### Token Flow
```
text -> tokenize(text, lang) -> tokens[] -> universalHl() -> React elements
                                    |
                                    v
                              LANG_DICT lookup
                              LANG_TOKENIZER config
                              Grammar color mapping
```

### Dictionary Build Flow
```
units-*.js teach cards -> buildLangDict() -> LANG_DICT[lang]
                                               |
                                    mergeKoreanDict() for ko
                                               |
                                    lookupWord(word, lang)
```

### Grammar Colorizer Categories (per language)
- **Korean**: topic(blue), subject(teal), object(coral), location(gold), direction(purple), possessive(pink), connector(orange), comparison(cyan)
- **Dutch**: de(blue), het(gold), een(teal), preposition(green), conjunction(purple), pronoun(pink)
- **German**: der(blue), die(coral), das(purple), den(teal), dem(green), des(orange), preposition(green), conjunction(purple), pronoun(pink)
- **French**: le(blue), la(coral), les(teal), un(green), preposition(green), conjunction(purple), pronoun(pink)
- **Spanish**: el(blue), la(coral), los(teal), las(pink), preposition(green), conjunction(purple), pronoun(pink)
