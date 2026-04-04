# Session Handoff 2026-04-04

## What was done

### 1. Bug fix: Rainbow word coloring (PR #99, merged)
- **Root cause**: `grammarHl` state defaulted to `true` for A1-A2 lessons (line 53 in LessonEngine.jsx). This caused `universalHl()` to apply POS colors (nouns blue, verbs green, etc.) to ALL words on render.
- **Fix**: Changed default to `false`. Words now render black. User taps "Aa" toggle to enable POS colors.
- **File**: `src/components/LessonEngine.jsx` line 53

### 2. Bug fix: Faded note text on teach cards (PR #99, merged)
- **Root cause**: Note text is English metalanguage (PP61) but was being run through `universalHl(line, lang)` with target lang "de". Every English word was treated as "unknown" in the German dictionary → rendered at `rgba(100,80,160,0.35)` (nearly invisible).
- **Fix**: Removed `universalHl()` from note renderers. Notes now render as plain text in `var(--gray-600)`.
- **Files**: `src/components/LessonEngine.jsx` — two locations:
  - New-format teach card note (line ~2482): `universalHl(line, lang)` → `{line}`
  - Legacy teach card note (line ~3097): same fix in 3 render branches

### 3. Strategic planning session with owner
- Owner confirmed: NO features get cut. VL = full ecosystem.
- Arabic source is MANDATORY (proves any→any + owner's boyfriend is Syrian studying for B2).
- Multiple languages shipping, not just German.
- CEFR Reference → Progress Tracker redesign decided.
- TTS: Google Cloud TTS chosen, deferred for now.
- Phase ordering locked (see docs/PHASE1_WORKPLAN.md).

### 4. Discovery: `verumlingua.jsx` is dead code
- `src/verumlingua.jsx` (6,010 lines) is no longer imported by anything.
- `src/main.jsx` imports `src/App.jsx` which is the real entry point.
- All pages already split into `src/pages/` (13 files, lazy-loaded).
- All shared components in `src/components/` (8 files).
- **Action for next session**: Delete `verumlingua.jsx`, verify build, update CLAUDE.md.

## Key decisions made

| Decision | Details |
|----------|---------|
| **TTS provider** | Google Cloud TTS. Deferred — content and polish first, audio later. |
| **CEFR Reference** | Redesign as Progress Tracker: "You know 340/677 A1 words." Cross-ref with `user.lw`. |
| **Phase order** | Phase 1 (German EN→DE polish) → Phase 2 (Arabic B1+B2) → Phase 3 (Nav redesign) → Phase 4 (Audio) → Phase 5 (V1→V2 upgrades) → Phase 6 (Premium visual overhaul) |
| **Nothing cut** | All features stay. Organize and perfect in order, don't remove. |
| **Arabic source** | NOT optional. Proves any→any architecture + personal use case. |
| **Premium feel** | Owner knows app is prototype-tier. Visual overhaul is Phase 6 — documented in memory, not blocking current work. |
| **LessonEngine splitting** | Planned but not blocking. Document roadmap in CLAUDE.md for future sessions. |
| **Dead code** | `verumlingua.jsx` to be deleted (6,010 lines, zero imports). |

## Files changed
| File | Change |
|------|--------|
| `src/components/LessonEngine.jsx` | `grammarHl` default false + note text no longer through `universalHl` |

## PR
- PR #99 merged to main: "fix: disable rainbow word coloring + fix faded note text"

## Phase 1 Work Plan (next session)

See `docs/PHASE1_WORKPLAN.md` for full details. Summary:

| # | Task | Effort |
|---|------|--------|
| 1 | **CEFR → Progress Tracker** redesign | Medium |
| 2 | **Delete `verumlingua.jsx`** (6,010 lines dead code) | Quick |
| 3 | **Fill Cases grammar pack** colorMap | Small |
| 4 | **Fix 7 Arabic A1+A2 markers** | Trivial |
| 5 | **Document LessonEngine split** roadmap in CLAUDE.md | Small |

## Known issues still open
1. **Grammar page dark mode hot-toggle** — stale `dk` boolean if user switches while popup open.
2. **Arabic B1+B2 translation** — 12,764 [AR] markers remain. Phase 2 work.
3. **Arabic UI localization** — ~180 hardcoded strings need `t()` routing. Phase 2.
4. **LessonEngine RTL polish** — `srcDir` not applied to all containers. Phase 2.
5. **Dutch grammar data** — mock/placeholder quality. Future.
6. **Premium look/feel** — owner acknowledges prototype feel. Phase 6.
7. **LessonEngine.jsx** — 4,036 line monolith. Splitting roadmap to be documented.

## Architecture note for next agent
- **Entry point**: `src/main.jsx` → `src/App.jsx` (647 lines, routing + state)
- **Dead file**: `src/verumlingua.jsx` — DO NOT READ. 6,010 lines, zero imports. Delete it.
- **Pages**: All in `src/pages/` (13 files, React.lazy loaded)
- **Lesson engine**: `src/components/LessonEngine.jsx` (4,036 lines — the remaining monolith)
- **User progress**: `user.lw` is a `Set<string>` of learned words. Defined in App.jsx ~line 5298 equivalent.
- **CEFR data**: `src/data/cefr-reference/german.js` — entries with `{w, f, a, g, pl, p, l, ex, tr}`
