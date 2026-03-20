# Korean Deep Dictionary System: Handoff (D117)

> **Session date**: 2026-03-20 (updated end of session 2)
> **Status**: Phase 1-3 COMPLETE. Grammar tab overhauled. Visual polish done. Phases 4-7 pending.
> **Next session priority**: Korean WORD_DB enrichment from official TOPIK word lists.

---

## What Was Built (D117 Session 1)

### New Files Created
1. **`src/data/dictionary.js`** (~930 lines) - Central dictionary builder
   - `WORD_DB[lang]`: Per-language word database built at module load from teach cards + function word lists
   - `computeIsLemma()`: Gates which entries appear in the vocab list (teach-card words + function words where word === lemma)
   - Pluggable POS taggers: `POS_TAGGERS["ko"]` for Korean-specific POS resolution
   - `KOREAN_FORM_INDEX`: Reverse lookup from conjugated forms to lemmas (~6,000+ entries)
   - `KOREAN_MORPHEME_INDEX`: Sino-Korean morpheme families from hanja/COMPOUND data
   - `KOREAN_EXAMPLE_INDEX`: All curriculum sentences containing each word, grouped by unit
   - `KOREAN_IDIOM_INDEX`: Proverb/idiom cross-reference (tightened: kind:phrase + B2 expressions + genuine proverbs only)
   - `KOREAN_GRAMMAR_PATTERNS`: Extracted from `kind:"grammar"` teach cards (293 entries, legacy)
   - `KOREAN_GRAMMAR_REFERENCE`: NEW comprehensive grammar index (159+ items from 3 sources)
   - `GRAMMAR_CATEGORIES`: 11 grammar categories for filtering
   - `categorizeGrammar()`: Regex-based classification into 11 categories
   - `detectPoliteness()`: Auto-detect formal/polite/casual/written register from content
   - `buildKoreanGrammarReference()`: Pulls tips + verb_tables + filtered grammar teach cards
   - `toStr()`: Safe object-to-string converter for build-time data normalization
   - `GRAMMAR_PACKS`, `resolvePackColor()`, `pillGradient()`: Grammar visualization system
   - `isNewWord()`: Determines if a word is first introduced at a given lesson

2. **`src/data/korean-conjugation.js`** (~300 lines) - Full conjugation engine
   - `conjugateVerb(dictForm, irregType)`: Returns all conjugated forms for any verb/adjective
   - 7 irregular types (ㅂ, ㄷ, ㅎ, ㅅ, ㄹ, ㅡ, 르) + regular
   - ~21 ending templates across speech levels (해요체/합쇼체/반말) x tense (present/past/future)
   - **반말 propositive** (가자 "let's go" casual) added in session 2
   - Korean phonology: vowel harmony, batchim detection, contraction rules
   - `detectIrregType()`: Auto-detect from KOREAN_DICT morph field
   - `nounWithParticles()`: Generate particle combinations for nouns
   - `getIrregInfo()`: Human-readable irregular type descriptions

3. **`src/data/wordlists/function-words-ko.js`** (~560 lines) - 531 Korean function words
   - Every entry has: `word`, `lemma`, `pos`, `tags[]`, optional `gender`
   - Particles (topic/subject/object/locative/connective), counters, conjunctions, pronouns, demonstratives, question words, numbers

### Changes to Existing Files (Session 1 + Session 2)
- **`src/lingoverse.jsx`**:
  - Vocab list filter: shows only true lemmas (882 unique Korean words, down from 1,055)
  - Korean hangul-only filter: removes garbage entries (arrows, English letters, grammar notation)
  - Browse tab: Korean groups by 14 initial consonants (ㄱ-ㅎ) instead of hundreds of syllable pills
  - 5-tab deep word entry popup (WordPopup component, ~600 lines):
    - **Overview**: word, translation, TTS, phonetic, POS/level badges, etymology, particles, common usage in glossBubble
    - **Forms**: Full conjugation table (verbs) with candy gloss grid items, or particle combinations (nouns) with gloss treatment
    - **Examples**: Curriculum sentences in glossBubble, improved translation readability (fontSize 12, fontWeight 600, higher opacity)
    - **Grammar**: Usage rules in glossBubble, related grammar patterns
    - **Related**: Sino-Korean morpheme families, idioms (tightened filter), conjugated forms fallback for verbs
  - **Verumius button**: Gold gradient (not purple) matching Try Again button style
  - **Grammar mode** (Vocab page Grammar tab): Complete overhaul
    - Search input bar with magnifying glass icon
    - CEFR level filter pills (A1/A2/B1/B2)
    - 11 category filter pills (Particles, Speech Levels, Verb Conjugation, Tense & Aspect, Negation, Connectors, Sentence Endings, Modifiers, Numbers & Counters, Expressions, General)
    - Politeness filter (All/Formal/Polite/Casual/Written)
    - Source labels per item (Grammar Tip / Pattern / Conjugation Table)
    - Accordion with category tags + unit references
    - Verb table group rendering with pronoun/form/en rows
    - `cleanTitle()` strips curriculum emojis from titles
    - `safeText()` handles object-type fields safely
    - 159+ grammar items across A1-B2

---

## What Was Fixed (D117 Session 2)

### Bugs Fixed
1. **반말 propositive missing**: Added `가자` form to conjugation engine (was only showing 갑시다 합쇼체)
2. **Grammar expansion crash**: Some tip card fields contained `{title, text}` objects instead of strings. Fixed with `toStr()` in dictionary.js and `safeText()` in JSX
3. **Emoji pollution**: Grammar tip titles had curriculum emojis (🌏📖🧠). Added `cleanTitle()` regex stripper
4. **Fake idioms in Related tab**: Tightened `buildKoreanIdiomIndex()` to only include `kind:"phrase"`, B2 expressions (8+ chars), or genuine proverbs (3+ Korean words). Excludes → patterns and conjugation examples.

### Visual Polish
1. **Candy gloss bubbles**: All content cards across all 5 tabs now use `glossBubble()` helper with gradient background, border, boxShadow, and gloss arc overlay
2. **Translation readability**: Increased fontSize (11→12), fontWeight (400→600), removed italic, increased color opacity (0.5→0.75 light, 0.45→0.65 dark) across Examples and Forms tabs
3. **Verumius button**: Changed from purple to gold gradient matching Try Again button
4. **Conjugated forms fallback**: Related tab shows conjugated form chips (linking to Forms tab) when no morphemes or idioms exist

---

## What Still Needs Work

### 1. Korean WORD_DB Enrichment from Official TOPIK Lists (NEXT PRIORITY)
The 882 Korean words in WORD_DB come from teach cards + function words. We don't know how this compares to official TOPIK requirements. P55 mandates certification-grade vocabulary completeness.

**What To Do:**
1. Find official TOPIK vocabulary lists by level (web search for freely available lists)
2. Load into `src/data/wordlists/topik-vocab-ko.js` with word, level, POS, English translation
3. Compare against current WORD_DB: automated script showing coverage vs gaps
4. For words we already teach: update WORD_DB entries with official TOPIK level tags
5. For missing words: build list for new teach cards in curriculum restructure

**Expected Outcome:** "Korean has 882 unique lemmas. TOPIK requires X. We're at Y% coverage. These Z domains have gaps."

### 2. Grammar Reference Quality Improvements
- **Category accuracy**: Some items may be miscategorized by the regex-based `categorizeGrammar()`. Manual review and override system would help.
- **Politeness detection**: Auto-detection is keyword-based. Some items may have wrong register tags.
- **Deduplication**: Some grammar concepts appear as both a tip card AND a grammar teach card. Could merge these into single richer entries.
- **Cross-referencing**: Grammar items could link to related vocabulary in WORD_DB (e.g., particle grammar links to all particles).
- **Example sentences**: Not all grammar items have example sentences. Could pull from KOREAN_EXAMPLE_INDEX.

### 3. White Screen Crash on Word Click
**Status**: Reported by owner on production site. NOT reproducible in dev preview. LessonErrorBoundary was added in prior session. Likely cause: edge case with a specific word entry missing expected fields. Need console error message from browser (F12 > click word > read red error text).

### 4. Multi-Language Dictionary Expansion
Currently Korean-only. The architecture is designed to be pluggable:
- **Dutch**: Need `dutch-conjugation.js` (verb conjugation + de/het article system), `function-words-nl.js`
- **German**: `german-conjugation.js` already exists (from prior session). Need `function-words-de.js`, case system integration
- **French**: Need `french-conjugation.js` (3 verb groups, être/avoir auxiliaries), `function-words-fr.js`
- **Spanish**: Need `spanish-conjugation.js` (ser/estar, subjunctive), `function-words-es.js`

Each language needs:
1. Conjugation engine (verb forms + noun declensions if applicable)
2. Function word list (articles, prepositions, conjunctions, pronouns)
3. POS tagger plugin in `POS_TAGGERS[lang]`
4. Form index (reverse lookup from conjugated forms to lemmas)
5. Example index (curriculum sentences containing each word)
6. Grammar reference (tips + verb_tables + patterns from that language's units)

### 5. Vocab Page Word Count Badges
Browse tab consonant/letter pills could show word count badges.

### 6. Same Process for Other Languages' WORD_DB
After Korean pilot, replicate for:
- Dutch: NT2 Basiswoordenlijst (~4,000 words)
- German: Goethe-Institut Wortliste (A1-B2)
- French: DELF vocabulary lists
- Spanish: PCIC vocabulary inventory

---

## Architecture Notes for Next Session

### Key Import Path
```
lingoverse.jsx
  └── imports from dictionary.js:
      WORD_DB, KOREAN_FORM_INDEX, KOREAN_MORPHEME_INDEX,
      KOREAN_EXAMPLE_INDEX, KOREAN_IDIOM_INDEX,
      KOREAN_GRAMMAR_PATTERNS, KOREAN_GRAMMAR_REFERENCE,
      GRAMMAR_CATEGORIES, conjugateVerb, nounWithParticles, etc.

dictionary.js
  └── imports from korean-conjugation.js: conjugateVerb, detectIrregType, etc.
  └── imports from wordlists/function-words-ko.js: FUNCTION_WORDS_KO
  └── imports ALL unit files: units-korean.js, units-dutch.js, etc.
  └── imports from metadata.js: LANG_META
```

### WORD_DB Entry Shape
```javascript
{
  word: "가다",           // surface form
  display: "가다",        // what's shown (may include article prefix for gendered languages)
  en: "to go",           // English translation
  pos: "verb",           // POS tag
  gender: null,          // for gendered languages
  level: "A1",           // CEFR level
  tags: ["verb"],        // category tags
  taught: true,          // has dedicated teach card
  isLemma: true,         // appears in vocab list
  lemma: "가다",          // base form
  // From KOREAN_DICT (if available):
  morph: "Native Korean",
  uses: [{k:"...", e:"..."}],
  note: "...",
  particle: "에 가다"
}
```

### KOREAN_GRAMMAR_REFERENCE Entry Shape
```javascript
{
  title: "Topic Marker 은/는",     // cleaned of emojis
  text: "은/는 marks the topic...", // main explanation
  deepDive: "...",                  // optional deep explanation
  example: "저는 학생이에요",        // optional example sentence
  exampleEn: "I am a student",     // optional translation
  unit: "Unit 1",                  // which unit it's from
  level: "A1",                     // CEFR level
  source: "tip",                   // "tip" | "grammar" | "verb_table"
  category: "Particles",           // one of GRAMMAR_CATEGORIES
  politeness: "polite",            // "formal" | "polite" | "casual" | "written" | null
  groups: [...]                    // verb_table only: conjugation grid data
}
```

### Vocab Page Component Structure (lingoverse.jsx)
- `VocabularyPage` (~line 7832): Main component with Search/Browse/Review/Grammar tabs
  - `allWords` useMemo: Filters WORD_DB by isLemma + hangul-only + no spaces/arrows
  - `browseLetters` useMemo: Korean consonant grouping (ㄱ-ㅎ) vs A-Z for other langs
  - `WordRow` component: Compound bubble style rows
  - `WordPopup` component (~line 8065): 5-tab deep dictionary entry
    - `glossBubble()` helper: Candy gloss wrapper for all content cards
    - `cleanTitle()`: Strips emoji from grammar tip titles
    - `safeText()`: Handles object-type fields safely
  - Grammar tab section (~line 8900): Search + category + politeness filtered grammar reference
    - State: `gramSearch`, `gramCategory`, `gramPoliteness`
    - Filters: KOREAN_GRAMMAR_REFERENCE by search text, CEFR level, category, politeness
    - Renders: Accordion items with source labels, category tags, verb table groups

---

## Files to Read First in Next Session
1. `CLAUDE.md` (always first)
2. This file (`docs/DICTIONARY_SYSTEM_HANDOFF.md`)
3. `src/data/dictionary.js` (understand WORD_DB builder + grammar reference builder)
4. `src/data/korean-conjugation.js` (conjugation engine with 21 templates)
5. `src/lingoverse.jsx` lines 7832-9000 (VocabularyPage + WordPopup + Grammar tab)
