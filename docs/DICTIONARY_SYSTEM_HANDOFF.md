# Korean Deep Dictionary System: Handoff (D117)

> **Session date**: 2026-03-20
> **Status**: Phase 1-2 COMPLETE. Phase 3 partially complete. Phases 4-7 pending.
> **Next session priority**: Korean WORD_DB enrichment from official TOPIK word lists + Grammar tab overhaul.

---

## What Was Built (D117)

### New Files Created
1. **`src/data/dictionary.js`** (~830 lines) - Central dictionary builder
   - `WORD_DB[lang]`: Per-language word database built at module load from teach cards + function word lists
   - `computeIsLemma()`: Gates which entries appear in the vocab list (teach-card words + function words where word === lemma)
   - Pluggable POS taggers: `POS_TAGGERS["ko"]` for Korean-specific POS resolution
   - `KOREAN_FORM_INDEX`: Reverse lookup from conjugated forms to lemmas (~6,000+ entries)
   - `KOREAN_MORPHEME_INDEX`: Sino-Korean morpheme families from hanja/COMPOUND data
   - `KOREAN_EXAMPLE_INDEX`: All curriculum sentences containing each word, grouped by unit
   - `KOREAN_IDIOM_INDEX`: Proverb/idiom cross-reference from B2 content
   - `KOREAN_GRAMMAR_PATTERNS`: Extracted from `kind:"grammar"` teach cards (293 entries)
   - `GRAMMAR_PACKS`, `resolvePackColor()`, `pillGradient()`: Grammar visualization system
   - `isNewWord()`: Determines if a word is first introduced at a given lesson

2. **`src/data/korean-conjugation.js`** (~300 lines) - Full conjugation engine
   - `conjugateVerb(dictForm, irregType)`: Returns all conjugated forms for any verb/adjective
   - 7 irregular types (ㅂ, ㄷ, ㅎ, ㅅ, ㄹ, ㅡ, 르) + regular
   - ~20 ending templates across speech levels (해요체/합쇼체/반말) x tense (present/past/future)
   - Korean phonology: vowel harmony, batchim detection, contraction rules
   - `detectIrregType()`: Auto-detect from KOREAN_DICT morph field
   - `nounWithParticles()`: Generate particle combinations for nouns
   - `getIrregInfo()`: Human-readable irregular type descriptions

3. **`src/data/wordlists/function-words-ko.js`** (~560 lines) - 531 Korean function words
   - Every entry has: `word`, `lemma`, `pos`, `tags[]`, optional `gender`
   - Particles (topic/subject/object/locative/connective), counters, conjunctions, pronouns, demonstratives, question words, numbers

### Changes to Existing Files
- **`src/lingoverse.jsx`**:
  - Vocab list filter: shows only true lemmas (882 unique Korean words, down from 1,055)
  - Korean hangul-only filter: removes garbage entries (arrows, English letters, grammar notation)
  - Browse tab: Korean groups by 14 initial consonants (ㄱ-ㅎ) instead of hundreds of syllable pills
  - 5-tab deep word entry popup (WordPopup component, ~500 lines):
    - **Overview**: word, translation, TTS, phonetic, POS/level badges, etymology, particles
    - **Forms**: Full conjugation table (verbs) or particle combinations (nouns)
    - **Examples**: Curriculum sentences containing this word, grouped by unit
    - **Grammar**: Usage rules, related grammar patterns from KOREAN_DICT
    - **Related**: Sino-Korean morpheme families, idioms containing this word

---

## What Needs Fixing

### Grammar Tab (PRIORITY)
**Current state**: Pulls ALL 293 `kind:"grammar"` teach cards as a flat list. Only ~85 are actual grammar patterns. The other 208 are vocabulary words (안녕하세요, 나이, etc.) tagged as grammar because they involve grammatical concepts.

**Fix**: Build a proper grammar reference pulling from THREE sources:
1. **323 tip cards** (actual grammar explanations with title/text/deepDive)
2. **7 verb_tables** (conjugation grids, register maps, B2 pattern atlas)
3. **~85 real grammar patterns** from teach cards (filtered: must contain -, /, ~, or be particle/pattern entries)

**Organize by category**, not flat list:
- Particles (은/는, 이/가, 을/를, 에, 에서, 으로...)
- Verb Conjugation (present, past, future, speech levels)
- Tense and Aspect (-고 있다, -았/었-, -(으)ㄹ 거예요)
- Negation (안, 못, -지 않다, -지 못하다)
- Honorifics (-(으)시-, 합쇼체, formal registers)
- Connectors (-고, -지만, -(으)면, -아/어서, -기 때문에)
- Sentence Endings (-네요, -군요, -(으)ㄹ걸, -더라고요)
- Modifiers (-(으)ㄴ/는, adjective forms, relative clauses)

Each entry shows: pattern name, formation rule, example sentence with TTS, deepDive explanation, and "Taught in Unit X" link.

**Implementation**: Modify `buildKoreanGrammarPatterns()` in dictionary.js to also extract tips and verb_tables. Add a `category` field. In lingoverse.jsx, replace flat list with category-grouped accordion.

### White Screen Crash on Word Click
**Status**: Reported by owner on production site. NOT reproducible in dev preview. WordPopup component code reviewed thoroughly, all data access appears null-safe. Likely cause: edge case with a specific word entry missing expected fields, or React error boundary gap. Need console error message from browser (F12 > click word > read red error text).

### Browse Tab - Minor Polish
- Works great for Korean (14 consonant pills). Non-Korean languages still use A-Z which is fine.
- Could add word count badges to consonant pills.

---

## Next Session: Korean WORD_DB Enrichment from Official TOPIK Lists

### Why This Is Next
The 882 Korean words in WORD_DB come from two sources: teach cards (808) and function words (531, of which 170 pass isLemma). But we have NO idea how this compares to official TOPIK requirements. P55 mandates certification-grade vocabulary completeness. Before building more UI, we need the DATA.

### What To Do
1. **Find official TOPIK vocabulary lists by level** (web search for freely available TOPIK word lists organized by level)
2. **Load them into a reference file** (`src/data/wordlists/topik-vocab-ko.js`) with word, level, POS, English translation
3. **Compare against current WORD_DB**: automated script showing which TOPIK words we have vs gaps
4. **For words we already teach**: update WORD_DB entries with official TOPIK level tags
5. **For missing words**: these become the build list for new teach cards in the curriculum restructure

### Expected Outcome
A clear picture: "Korean has 882 unique lemmas. TOPIK requires X. We're at Y% coverage. These Z domains have gaps." This drives ALL future Korean content work.

### Same Process for Other Languages
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
      KOREAN_GRAMMAR_PATTERNS, conjugateVerb, nounWithParticles, etc.

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

### Vocab Page Component Structure (lingoverse.jsx)
- `VocabularyPage` (~line 7832): Main component with Search/Browse/Review/Grammar tabs
  - `allWords` useMemo: Filters WORD_DB by isLemma + hangul-only + no spaces/arrows
  - `browseLetters` useMemo: Korean consonant grouping (ㄱ-ㅎ) vs A-Z for other langs
  - `WordRow` component: Compound bubble style rows
  - `WordPopup` component (~line 8065): 5-tab deep dictionary entry (Overview/Forms/Examples/Grammar/Related)
  - Grammar tab section (~line 8885): Currently flat list of KOREAN_GRAMMAR_PATTERNS

---

## Files to Read First in Next Session
1. `CLAUDE.md` (always first)
2. This file (`docs/DICTIONARY_SYSTEM_HANDOFF.md`)
3. `src/data/dictionary.js` (understand WORD_DB builder)
4. `src/lingoverse.jsx` lines 7832-8926 (VocabularyPage + WordPopup + Grammar tab)
