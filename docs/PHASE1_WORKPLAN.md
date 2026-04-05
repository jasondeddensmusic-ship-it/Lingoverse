# Phase 1 Work Plan: German EN→DE Polish

> Created 2026-04-04. Owner-approved priorities and decisions.
> Execute these tasks IN ORDER before starting Phase 2 (Arabic B1+B2).

---

## Strategic Context

German v2 is the template language. It must be perfect across the board — content, features, polish — before scaling to other languages or completing Arabic source. The owner confirmed (2026-04-04):

- **Nothing gets cut.** VL is a full ecosystem: lessons + dictionary + grammar + idioms + reference + chat + flashcards + quiz.
- **Arabic source is mandatory.** Proves any→any architecture + personal use (owner's boyfriend is Syrian, studying for B2).
- **Premium visual overhaul comes later (Phase 6).** Current focus is content and feature polish.
- **TTS: Google Cloud TTS** chosen but deferred. Content first, audio later.

---

## Phase 1 Tasks

### Task 1: CEFR Reference → Progress Tracker ⭐ (Medium effort)

**Goal**: Transform the raw CEFR word list into "You know 340/677 A1 words."

**Files**:
- `src/App.jsx` line 636 — add `user` prop to `<CefrReferencePage>`
- `src/pages/CefrReferencePage.jsx` — main redesign (~120 lines added)

**Implementation**:
1. Wire `user` prop from App.jsx (1 line change)
2. Add word matching infrastructure:
   - Build lowercase Set from `user.lw` (memoized)
   - `isLearned(word)` normalizes CEFR `w` field: strip `"sich "` prefix, trailing hyphens
   - O(1) lookups, handles ~4,700 German entries instantly
3. Progress overview panel (between header and tabs):
   - Big number: total learned / total words
   - 4 per-level progress bars (A1-B2), purple fill, using existing `panelStyle` + `GlossArc`
4. Filter toggle: "All Words" / "Still Learning" pill between level filter and search
5. Per-row learned styling: learned words opacity 0.5 + purple checkmark SVG, unlearned full opacity
6. Header: "CEFR Progress" (drop "Reference")
7. Graceful degradation: no `user` prop = page works identically to today

**Design constraints**: Purple-only palette. Reuse `panelStyle`, `rowStyle`, `GlossArc`, `LevelPill`. Dark mode via `dk` ternary. Mobile: full-width stacking.

---

### Task 2: Delete `verumlingua.jsx` — Dead Code Removal (Quick)

**Goal**: Remove 6,010 lines of dead legacy code.

**Evidence**:
- `src/main.jsx` imports `src/App.jsx` (confirmed)
- Zero imports of `verumlingua.jsx` anywhere in `src/` (confirmed via grep)
- All 13 pages already split into `src/pages/` with React.lazy
- All shared components in `src/components/`

**Steps**:
1. Delete `src/verumlingua.jsx`
2. `npm run build` — confirm zero breakage
3. Update CLAUDE.md architecture table (remove verumlingua.jsx entry)

---

### Task 3: Fill Cases Grammar Pack (Small)

**Goal**: The Cases grammar pack has a legend but empty `colorMap`. Fix it.

**File**: `src/data/dictionary.js` — find Cases pack, add colorMap entries for nominative/accusative/dative/genitive with distinct purple-family colors.

---

### Task 4: Fix 7 Arabic A1+A2 Markers (Trivial)

**Goal**: Complete Arabic source A1+A2 (currently 7 `[AR]` markers across 6 units).

**Files**: `src/data/german-v2-ar/unit-03.js` through `unit-06.js`, `unit-09.js`, `unit-10.js`, `unit-12.js` — 1 marker each.

**Process**: Find each `[AR]` marker, replace with proper Arabic translation.

---

### Task 5: Document Refactoring Roadmap in CLAUDE.md (Small)

**Goal**: Track the LessonEngine splitting plan and dead code status so future agents know.

**Add to CLAUDE.md**:

```markdown
## Refactoring Roadmap

### Completed
- `verumlingua.jsx` → deleted (was 6,010 lines dead code, App.jsx is the real entry)
- All pages split to `src/pages/` (13 files, React.lazy loaded)
- All shared components to `src/components/` (8 files)

### Planned: LessonEngine.jsx Splitting
`src/components/LessonEngine.jsx` (4,036 lines) is the remaining monolith.
Target extractions (not blocking, for future sessions):
- `src/components/lesson/WordBubble.jsx` — word info popup (~300 lines)
- `src/components/lesson/MiniWordPopup.jsx` — compact popup (~100 lines)
- `src/components/lesson/GrammarColorPicker.jsx` — pack selector UI (~150 lines)
- `src/components/lesson/StepRenderers.jsx` — teach/story/tip/quiz renderers (~2,000 lines)

### Planned: LearnPage.jsx Splitting
`src/pages/LearnPage.jsx` (1,386 lines) — lower priority:
- `UnitSelector.jsx` — unit/lesson picker
- `FoundationsMode.jsx` — foundations flow
```

---

## Phase 2 Preview (Next After Phase 1)

Arabic B1+B2 translation: 20 units, ~12,757 [AR] markers.
- Sonnet agents, max 4 at a time (Rule B7)
- Unit-by-unit: translate → validate → merge
- ~6 batches of 3-4 agents
- PP8 + PP52 validation on completed Arabic content
- RTL polish pass on LessonEngine

## Phase 3-6 Overview

| Phase | Focus | Status |
|-------|-------|--------|
| 3 | Navigation + flow redesign | Not started |
| 4 | Audio/TTS (Google Cloud) | Provider chosen, deferred |
| 5 | V1→V2 language upgrades (Korean → Dutch → French → Spanish) | Not started |
| 6 | Premium visual overhaul (icons, animations, music, effects) | Owner not ready yet |

---

## Validation After Phase 1

- [ ] `npm run build` — zero errors
- [ ] CEFR Progress page: progress panel with per-level bars
- [ ] CEFR: learned words show checkmarks + muted styling
- [ ] CEFR: "Still Learning" filter hides learned words
- [ ] CEFR: search, dark mode, other tabs all still work
- [ ] All pages load (verumlingua.jsx deletion didn't break anything)
- [ ] Cases grammar pack shows colors when selected
- [ ] Arabic A1+A2 lessons: zero `[AR]` markers remain
