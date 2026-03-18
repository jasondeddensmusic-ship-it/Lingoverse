# Universal Word Dictionary & Grammar Colorizer — Implementation Plan

> **Status**: Batches 1-7 IMPLEMENTED (2026-03-18). Remaining: build validation, visual testing, color legend popup, dissect view.

## Overview

Expanded the Korean-only word dictionary system (KOREAN_DICT, tokenizeKorean, koreanHl, WordBubble) into a universal system for ALL 5 languages with:
- Gold-highlighted (#E8960A) untaught NOUNS in example sentences/dialogues (clickable -> dictionary popup)
- VERBS, IDIOMS, SET EXPRESSIONS, and PHRASES always get dedicated teach cards (never gold-highlight). ONLY pure nouns get gold.
- DeepDives never count as exposure
- Universal tokenizer per language family (articles, particles, case markers, contractions)
- Toggle-able grammar colorizer (articles, particles, prepositions, conjunctions, pronouns)
- WordBubble expanded to all languages
- VocabularyPage connected to auto-generated dictionary

## Files Modified/Created

| File | Change |
|------|--------|
| `src/data/dictionary.js` | NEW: Auto-builds LANG_DICT from teach cards at module load |
| `src/data/metadata.js` | Added LANG_TOKENIZER config for all 5 languages |
| `src/lingoverse.jsx` | Fixed accent bug, added tokenize/universalHl/MiniWordPopup, replaced all call sites, grammar toggle, VocabularyPage |

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

## Remaining Items

### Must Do
- **Build validation**: Run `npx vite build` to verify compilation (Node.js was not available in previous session)
- **Visual testing**: Load each language in browser, verify no regressions
  - French "Les pieces" lesson: e-grave should render inline, not purple
  - Korean dictionary: must work identically to before
  - Grammar toggle: verify ON/OFF works per language
  - Gold noun highlights: verify clickable, MiniWordPopup displays
  - Search bar: verify "cafe" still finds "cafe" (comfort search unaffected)

### Should Do
- **Gold color overlap resolution**: Dutch het-article (#E8960A) and untaught noun gold (#E8960A) conflict when grammar colorizer ON. Options: different gold shade for nouns, or different visual treatment (dotted vs solid underline)
- **Color legend popup**: Long-press or info icon on grammar toggle showing current language's grammar categories with color swatches

### Stretch
- **Dissect view**: Compound word splitting in WordBubble (Korean morph field exists, Germanic compound splitting basic)
- **Lesson-end vocab summary**: 2x2 grid of new vocab encountered during lesson

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
