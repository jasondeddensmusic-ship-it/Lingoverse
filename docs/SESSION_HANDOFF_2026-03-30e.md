# Session Handoff — 2026-03-30e

> Dictionary 100% word coverage + GrammarPage/IdiomsPage generalization + CEFR POS fix.
> Previous: `SESSION_HANDOFF_2026-03-30d.md` (dictionary color system fix).

---

## What Was Done This Session

### 1. Dictionary Layer 1: Unknown Word Fallback — DONE

**Before:** Words not in WORD_DB rendered as invisible plain text. No color, no click, nothing.

**After:** Unknown words render with subtle muted color, dashed underline (when grammar toggle ON), and are tappable. Clicking opens MiniWordPopup with "Not yet catalogued" message. Only target-language words are affected — English stays untouched.

**Where:** `universalHl()` in `src/components/LessonEngine.jsx`, the `if (!isKnownTarget)` branch (~line 1810).

### 2. Dictionary Layer 2: Proper Noun Detection — DONE

**Before:** Names like "Verumius", "Berlin", "Hamburg", "Anna" got no treatment.

**After:** Simple heuristic: word is capitalized + not first in sentence + not in WORD_DB = proper noun. Rendered in warm grey (#546E7A/#B0BEC5), bold, tappable with "PROPER NOUN" badge in popup.

**Edge case handled:** German capitalizes all nouns, but taught nouns ARE in WORD_DB so they resolve normally.

**Where:** Same `universalHl()` branch. `proper_noun` added to `POS_COLORS` in `src/data/dictionary.js`.

### 3. MiniWordPopup/WordBubble Added to All Renderers — DONE

**The bug:** `{MiniWordPopup}` and `{WordBubble}` were only included in 4 of 12+ renderers. Clicking a word set the state but the popup component wasn't in the JSX tree to render.

**Fixed renderers:** story, new-format teach (`_origTrg`), legacy teach, legacy intro, verb_table, mc, tr, fb, drag_fill, match.

**Where:** `src/components/LessonEngine.jsx` — added `{wordBubble&&<WordBubble .../>}` and `{MiniWordPopup}` after `<ProgressBar/>` in each renderer's return block.

### 4. GrammarPage Generalized — DONE

**Before:** 586 lines of Dutch grammar data hardcoded inline in `src/verumlingua.jsx`.

**After:**
- Extracted to `src/data/grammar/dutch.js` (exported as `DUTCH_GRAMMAR`)
- GrammarPage uses `GRAMMAR_REFS[lang]` lookup
- Languages without grammar data show "coming soon" placeholder
- **Note: Dutch grammar content is MOCK/placeholder quality, not production-ready**

### 5. IdiomsPage Generalized — DONE

**Before:** 8 Dutch idioms hardcoded inline with `nl`/`en` field names.

**After:**
- Extracted to `src/data/grammar/idioms-dutch.js` with language-agnostic fields (`trg`/`src`)
- IdiomsPage uses `IDIOM_REFS[lang]` lookup
- Empty languages show "coming soon" placeholder

### 6. German CEFR Reference POS Fix — IN PROGRESS

~1,620 vocabulary entries in `src/data/cefr-reference/german.js` had `p:"other"` instead of proper POS tags (verb, adjective, adverb, preposition, etc.). Agent deployed to fix these.

---

## Files Changed

| File | Changes |
|------|---------|
| `src/components/LessonEngine.jsx` | Layer 1+2 in universalHl(), MiniWordPopup/WordBubble in all 10+ renderers |
| `src/data/dictionary.js` | `proper_noun` added to POS_COLORS |
| `src/verumlingua.jsx` | GrammarPage: inline Dutch grammar removed, imports added, GRAMMAR_REFS lookup. IdiomsPage: same pattern with IDIOM_REFS |
| `src/data/grammar/dutch.js` | NEW — extracted Dutch grammar data (586 lines) |
| `src/data/grammar/idioms-dutch.js` | NEW — extracted Dutch idioms (8 entries, trg/src fields) |
| `src/data/cefr-reference/german.js` | POS tag fix (~1,620 entries "other" → proper tags) |

---

## Architecture After This Session

### Dictionary System (100% word coverage)
```
WORD_DB (teach cards + function words)
    ↓ known words → colored + tappable (WordBubble for taught, MiniWordPopup for untaught)

GERMAN_FORM_INDEX (conjugated forms → lemma)
    ↓ "fährst" resolves to "fahren"

Proper noun heuristic
    ↓ capitalized + not first word + not in WORD_DB → warm grey, "PROPER NOUN" popup

Unknown word fallback
    ↓ everything else → subtle muted style, "Not yet catalogued" popup

Result: 100% of words visible and tappable
```

### Grammar/Idioms System (modular)
```
src/data/grammar/dutch.js      → DUTCH_GRAMMAR  → GRAMMAR_REFS.nl
src/data/grammar/idioms-dutch.js → DUTCH_IDIOMS → IDIOM_REFS.nl
(future: german.js, korean.js, etc.)

GrammarPage: loads GRAMMAR_REFS[lang], shows "coming soon" if missing
IdiomsPage: loads IDIOM_REFS[lang], shows "coming soon" if missing
```

---

## Next Priorities (Updated)

1. **German grammar module** — Write `src/data/grammar/german.js` from Goethe-Institut sources. Cases, gender, separable verbs, word order. This is BEFORE any v1→v2 language upgrades.
2. **German CEFR reference continued** — Verify POS tag fix quality, expand idioms section.
3. **Korean/Dutch/French/Spanish v1 → v2 upgrade** — German v2 is the template. Korean is most audited v1 → first candidate.
4. **Arabic translation (when P1 done)** — 19 units with [AR] markers. PAUSED.

---

## Known Issues

1. **Dutch grammar/idioms are MOCK quality** — Not production-ready. Don't treat as authoritative. All grammar content needs proper authoring from official sources.
2. **Layer 3 (true sentence parsing)** — NOT a blocker. Would require pre-computed parse per sentence (agent batch job) or runtime NLP. The `tagged` field path already exists in the step format.
3. **CEFR Reference POS tags** — ~1,620 entries being fixed from "other" to proper POS. Verify quality after agent completes.

---

## Quick Start For Next Session

1. Read this handoff (`docs/SESSION_HANDOFF_2026-03-30e.md`)
2. Check CLAUDE.md for full pipeline rules
3. If continuing German grammar module: create `src/data/grammar/german.js` following same structure as `dutch.js` (title, icon, explanation, rules[], examples[]). Use Goethe-Institut exam framework as source.
4. If continuing CEFR reference: verify POS tag fix quality in `german.js`, expand idioms
5. Test by: opening any German lesson, verify all words tappable including proper nouns and unknown words

---

## Build Verification

```
npm run build   # PASS — zero errors, 8.99s
```

All changes compile. PR #83 merged to main.
