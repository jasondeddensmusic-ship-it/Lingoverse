# Session Handoff - 2026-04-02d

> German polish complete. CEFR lemmas cleaned, idioms added, grammar tables + explanations done.
> Previous: `SESSION_HANDOFF_2026-04-02c.md`

---

## What Was Done This Session

### 1. GrammarPage Premium Redesign (both standalone + inline)
- All-purple brand palette. NO per-level colors. Hard rule going forward.
- Candy gloss dropdown pill for level selection (replaces old 6-button tabs).
- Scrollable tile grid of entry titles (replaces accordion cards).
- Popup modal with NavArrow teach-card navigation (replaces inline expand).
- Table renderer, compound example bubbles, keyboard nav (arrows/space/escape), dark mode.
- Files: `src/pages/GrammarPage.jsx`, `src/verumlingua.jsx` (~lines 1366-1600).

### 2. German Grammar Module - 58 entries, 20 tables
- File: `src/data/grammar/german.js` (~1,500 lines)
- A1: 16, A2: 13, B1: 16, B2: 13 entries. All Goethe-Institut constructs.
- 20 conjugation/declension tables (sein/haben, modals, articles, cases, adj endings, passive, Konjunktiv, etc.)
- Every explanation audited for quality. 5 stub explanations caught and fixed. Each entry has what it needs, not a fixed sentence count.
- Zero em-dashes (PP22c). English metalanguage (PP61).

### 3. CEFR Lemma Cleanup - 779 entries normalized
- File: `src/data/cefr-reference/german.js`
- Stripped plural suffixes (`Apfel, -Ä` -> `Apfel`), verb conjugation info (`arbeiten, arbeitet` -> `arbeiten`), cleaned pair formatting.
- 4,716 entries total, 1 intentional exception (`da(r)-` prefix).

### 4. German Idioms Module - 45 idioms
- File: `src/data/grammar/idioms-german.js`
- A1: 5, A2: 10, B1: 15, B2: 15 authentic idioms.
- Wired into both `src/pages/IdiomsPage.jsx` and `src/verumlingua.jsx` via IDIOM_REFS.
- Format: `{trg, src, lit, level, note}` matching Dutch idioms.

### 5. Docs Updated
- CLAUDE.md: grammar module + GrammarPage redesign marked DONE, priorities reordered.
- This handoff doc created.

---

## Current Branch

`claude/review-handoff-ios-styling-ULxeT` - 7 commits ahead of main. **Needs merge before next work.**

---

## What To Do Next (in order)

### Priority 1: Arabic source language completion
German is polished for EN source. Now complete it for AR source.
- **19 B1/B2 units** with `[AR]` markers (~4,500 markers remain)
- A1+A2 already translated. See `docs/archive/SESSION_HANDOFF_2026-03-30b.md` for context.
- Generator script: `scripts/generate-arabic-units.cjs`
- Unit files: `src/data/german-v2/unit-01.js` through `unit-36.js` (per-unit, ~250 lines each)
- Each `[AR]` marker = a `src` or `exampleSrc` field that needs Arabic translation.
- Use Sonnet for mechanical translation (Rule B14). Opus only for creative content.
- Work unit-by-unit. Max 4 agents at a time (Rule B7).

### Priority 2: Arabic UI localization
- ~180 hardcoded English strings in UI need `t()` routing.
- Check `src/data/vocabulary.js` TEXT_KEYS for existing translation infrastructure.

### Priority 3: LessonEngine RTL
- Apply `srcDir` to all source-text containers for Arabic display.

### Priority 4: Other language rehauling
- Korean -> Dutch -> French -> Spanish (v1 -> v2 upgrade).
- German v2 is the template.

---

## Key Files Quick Reference

| What | File |
|------|------|
| German grammar | `src/data/grammar/german.js` |
| German idioms | `src/data/grammar/idioms-german.js` |
| German CEFR vocab | `src/data/cefr-reference/german.js` |
| GrammarPage standalone | `src/pages/GrammarPage.jsx` |
| GrammarPage inline | `src/verumlingua.jsx` (~1366-1600) |
| IdiomsPage standalone | `src/pages/IdiomsPage.jsx` |
| IdiomsPage inline | `src/verumlingua.jsx` (~3575-3620) |
| Per-unit German v2 | `src/data/german-v2/unit-01.js` ... `unit-36.js` |
| Arabic unit generator | `scripts/generate-arabic-units.cjs` |
| CLAUDE.md | Project root |

## Design Rules Established This Session

- **NO per-level colors** on reference pages. All purple, always.
- **Popup modal > accordion** for grammar/idiom entries.
- **Tile grid** as default entry browsing pattern.
- **Tables via data**: `table` (array of arrays), `tableCols`, `tableTitle`.
- **Explanations sized to the construct**, not to a fixed sentence count.
