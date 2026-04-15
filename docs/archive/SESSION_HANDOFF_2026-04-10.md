# Session Handoff — 2026-04-10 (Quiz Interleaving + FunFact Variety + Story Mode Removal)

## What Was Done

### 1. Quiz Interleaving (COMPLETE)
Inserted **237 match steps** across **200 lessons** in 33 unit files to break up runs of 6+ consecutive teach cards.

- Script: `scripts/interleave_quizzes.cjs` (reusable for future languages)
- Match steps use trg/src pairs from the preceding 4-5 teach cards — zero PP8 risk (no hints)
- Max consecutive teach run reduced from 15 to 5 for most lessons
- 7 lessons at 32-step cap remain unchanged (no headroom: U1 deu_r01l12, U11 deu_r11l2, U17 deu_r17l5b/l8b, U20 deu_r20l3/l7, U24 deu_r24l2)
- PP43 PASS: 0/558 over 32 steps

### 2. B2 FunFact Variety (COMPLETE)
Rewrote **253 generic funFacts** across B2 units 25-36.

- 3 Opus agents in parallel (U25-28, U29-31, U32-36)
- Every "From Latin...", "From Old High German...", "From Proto-Germanic..." opening replaced with varied alternatives
- Also caught "From French/Greek/Dutch..." patterns beyond the original 154 target
- Techniques: cultural leads, surprising stats, memory hooks, question format, English cognate comparisons
- No em-dashes introduced (PP22c PASS)

### 3. Flashcard Tap-to-Reveal Fix (COMPLETE)
Added transparent overlay div on unrevealed cards that captures all taps above SpeakerButton and POS/gender badges.

- `src/pages/Flashcards.jsx` — 5-line fix
- Root cause: SpeakerButton's `e.stopPropagation()` was swallowing taps before they reached the card's onClick
- Overlay sits at zIndex:10, removed once card is revealed so interactive elements work normally

### 4. Story Mode Stripped (COMPLETE)
Removed **2,209 story steps** (1,104 EN + 1,105 AR) from all 72 German v2 unit files.

- Script: `scripts/strip_stories.cjs` (supports `--ar` flag)
- Stories archived in `src/data/stories-backup.js` (EN) and `src/data/stories-backup-ar.js` (AR)
- Story renderer code left intact in LessonEngine.jsx — just won't trigger
- Content dropped from ~11,567 to ~10,463 steps
- Comma artifacts cleaned (10 undefined array elements fixed)

### 5. Verified Already-Done Items
These were listed as pending but found to be already implemented:
- **Idioms page search/filter** — already has search bar + level filter pills in IdiomsPage.jsx
- **Verb tables clickable** — `universalHl()` already wired at LessonEngine.jsx lines 3240/3244
- **XP/streaks display** — already shown on Home page (XP, streak, words, CEFR level)
- **German Foundations** — full content exists (alphabet, vowels, consonants, umlauts, playthrough, gate quiz)
- **CEFR B2 Arabic** — all 1,821 entries already have `trAr` field, zero missing

---

## Validator Status

| Check | Status |
|-------|--------|
| Build | **PASS** (14.6s) |
| PP8 anti-leak | **PASS** (0/3,482) |
| PP43 density | **PASS** (0/558 over 32) |
| PP48 fb blanks | **PASS** |
| PP22c em-dashes | **PASS** (0 in content) |
| PP64 teach-then-test | **PASS** (99.9%, 5,142/5,148) |
| board:true | **PASS** (558/558) |

---

## Files Changed (78 total)

| Category | Files | Changes |
|----------|-------|---------|
| EN unit files | 36 | 237 match steps added, 1,104 story steps removed, 253 funFacts rewritten |
| AR unit files | 36 | 1,105 story steps removed |
| Flashcards | 1 | Tap-to-reveal overlay fix |
| Story backups | 2 | NEW: stories-backup.js + stories-backup-ar.js |
| Scripts | 2 | NEW: interleave_quizzes.cjs, strip_stories.cjs |
| PP64 results | 1 | Updated validation output |

---

## Known Blockers (updated)

| # | Item | Status |
|---|------|--------|
| 1 | ~~227 lessons with 6+ consecutive teach cards~~ | **RESOLVED.** 237 match steps interleaved. 7 lessons at cap remain. |
| 2 | ~~B2 etymology monotony~~ | **RESOLVED.** 253 funFacts rewritten. |
| 3 | ~~Flashcard tap-to-reveal bug~~ | **RESOLVED.** Overlay fix. |
| 4 | ~~CEFR B2 Arabic gap~~ | **RESOLVED.** Was already done (all 1,821 have trAr). |
| 5 | ~~Story mode~~ | **STRIPPED.** Archived for future reimplementation. |
| 6 | Audio/TTS | **PENDING.** #1 competitive gap. Google Cloud TTS chosen, not integrated. |
| 7 | REVIEW/NEW WORD edge cases | **PENDING.** `lwAtStart` ref fix deployed but needs browser testing. |

---

## Next Session Priorities

### High Priority — Features
1. **Audio/TTS integration** — #1 competitive gap. Silent vocabulary is the biggest UX problem. Google Cloud TTS chosen.
2. **Smooth transitions** — page fadeUp exists but lesson completion celebrations still TODO.

### Medium Priority — Content Quality  
3. **7 remaining dense lessons** — at 32-step cap with 6+ teach runs. Would need splitting to fix.
4. **6 untested teach cards** — PP64 at 99.9%, not 100%. Low priority.

### Lower Priority — Future Phases
5. **Story mode reimplementation** — backed up, ready when design is finalized. Do NOT write stories for other languages yet.
6. **V1→V2 language upgrades** — Korean, Dutch, French, Spanish still on old format.
7. **LessonEngine.jsx split** — 4,036-line monolith. Not blocking.
8. **Premium visual overhaul** — icons, animations, music (needs design session).

---

## CLAUDE.md Updates Needed
- Update blocker #26 (CEFR B2 Arabic) to RESOLVED
- Add story mode removal to Current State section
- Update step counts (11,567 → ~10,463 EN, similar reduction for AR)
- Note: items 2, 3, 4 from "Phase 1.5A: Feature Polish" are already done
