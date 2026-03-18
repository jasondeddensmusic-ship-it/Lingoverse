# Universal Word Dictionary & Grammar Colorizer — Handoff

> **Status**: Batches 1-7 code written (2026-03-18). Owner-tested 2026-03-19. Multiple issues found. Phase 2 required.
> **Commit**: `daee5f8` on main. Cloudflare Workers accidental merge reverted in `fe1ab14`. Handoff doc updated in `bf1ae28`.

## What Was Built (Phase 1 - Code on main)

- `src/data/dictionary.js` (NEW, 173 lines): Auto-builds LANG_DICT from teach cards
- `src/data/metadata.js` (+95 lines): LANG_TOKENIZER config for ko/nl/de/fr/es
- `src/lingoverse.jsx` (+505/-57 lines): tokenize(), universalHl(), MiniWordPopup, grammar toggle, VocabularyPage, accent bug fix (11 locations)

## Owner Testing Results (2026-03-19)

### Working
- Accent bug FIXED: French "Les pieces" title renders e-grave correctly
- Korean WordBubble: opens correctly with full info when clicking Korean words
- Aa toggle button: visible in lesson toolbar
- Search bar: "cafe" finds "cafe" (comfort input intact)
- Grammar colorizer: SOME colors appear when toggled

### NOT Working / Needs Rework
- **Gold noun highlights NOT showing.** Zero gold anywhere in example sentences.
- **Grammar colors WRONG.** Articles getting generic blue for both masc AND fem. Should keep gender colors (le=blue, la=coral). Not all words mapped to colors.
- **Dashed underlines missing** on most target-language words in examples. Owner wants EVERY target-language word clickable.
- **WordBubble "peekhole" bug**: expanded popup creates ugly square window surrounded by white. Needs smooth full overlay.
- **MiniWordPopup**: never appears (gold highlights not triggering, so popup has nothing to show)

## Phase 2: What Needs To Be Built (NEXT SESSION)

### Critical Design Decisions (owner-confirmed 2026-03-19)

**1. Dictionary scope: EVERY word.**
Every single word in the target language that appears anywhere in the curriculum must have a dictionary entry and be clickable with dashed underline. Nouns, verbs, adjectives, adverbs, prepositions, conjunctions, articles, pronouns, particles. Nothing excluded. If dictionary.js doesn't have it, it needs to be added.

**2. Grammar colorizer color rules:**
- Every individual word type gets its own distinct color (fine-grained, not just broad categories)
- Articles KEEP their gender colors from teach cards (le=blue/masc, la=coral/fem, der=blue, die=coral, das=purple, de=blue, het=gold)
- Prepositions, conjunctions, pronouns, adverbs each get distinct colors
- Subject pronouns vs object pronouns = different colors if possible

**3. Purple toggle rule (NON-NEGOTIABLE):**
- Toggle ON: translations (English/source text) turn PURPLE. NO target-language word is ever purple.
- Toggle OFF: everything returns to current default styling.
- Purple = VerumLingua accent color, shifted to non-content text when grammar colors active.

**4. Popup architecture:**
- Clicking ANY word: MINI popup first (word, translation, part of speech, level badge)
- Tap to expand: FULL WordBubble with TABS (Overview, Examples, Grammar, Related)
- Full info available in tabs: word, translation, article/gender, conjugation (verbs), plural form, examples, related words, level, pronunciation
- ALL in VerumLingua candy gloss style
- FIX the peekhole bug on expanded WordBubble

**5. Mobile-first:**
- Mobile site is currently glitchy
- All new UI must work on iPhone (375px) AND desktop
- Popups: bottom-sheet on mobile, centered modal on desktop
- Smooth, swift, clean transitions. iOS old-school candy gloss aesthetic.

### Phase 2 Build Order

1. **Fix gold highlights** - debug why universalHl() isn't rendering gold on untaught nouns in examples
2. **Fix grammar colors** - articles use gender colors, not generic. Remap LANG_TOKENIZER grammarColors.
3. **Purple toggle rule** - when grammarHl=true, wrap translations in purple. No target word purple.
4. **Dictionary completeness** - extract ALL words from examples/dialogues/quizzes, not just teach cards. Every word gets an entry.
5. **Every word clickable** - dashed underline on ALL target-language words in examples
6. **Mini popup redesign** - compact bottom-sheet on mobile, modal on desktop
7. **Full WordBubble tabs** - Overview/Examples/Grammar/Related tabs. Fix peekhole layout bug.
8. **Color legend popup** - info icon on Aa button showing color meanings per language

### Future Phases (plan now, build later)

- **Navigation restructure**: Bottom nav for mobile, top nav for PC. Profile / Home / Chat (Verumius). Under Home: Learn Path, Vocab, Grammar, Idioms, Personal, Quiz Yourself.
- **Personal Curriculum tab** (replaces Flashcards): Saved cards, custom quizzes, chat logs, AI-generated lessons, community lessons.
- **Verumius AI integration**: Lesson generation via Claude API + Cloudflare Workers. 2-3 narrowing questions, CEFR-aware, saves to Personal section + shared database.
- **Site rebrand**: Name is still "LingoVerse" on site. Needs to be "VerumLingua" everywhere.

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

## Architecture

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
NOTE: dictionary.js currently only extracts teach card words. Phase 2 must expand to extract ALL words from example sentences, dialogues, quiz sentences, notes.
