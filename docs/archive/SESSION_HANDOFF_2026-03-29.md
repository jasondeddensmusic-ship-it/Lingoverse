# Session Handoff — 2026-03-29

## What Was Done

### Bug Fixes (merged to main, live on lingoverse.nl)
- Fixed 3 missing imports causing runtime crashes:
  - `BASE_LANGUAGES` in `src/components/LessonEngine.jsx`
  - `useRef` in `src/components/shared.jsx` (ScoreCircle crash)
  - `FK_PLAYTHROUGH` in `src/utils.js`

### New Rules Added
- **PP43 updated**: Max 30 steps/lesson (soft cap 32). Enforced during builds.
- **PP64 added**: Every teach card must be tested by at least one quiz. Zero-coverage = violation.
- **No-trim rule**: NEVER delete content to reduce density. Only split or redistribute.
- PP53 audit checklist updated to 17 items (added PP64).
- `docs/AGENT_CONTENT_RULES.md` updated with PP43 + PP64 + no-trim rule.

### Density Reduction (11 lessons split)
| Unit | Original | Split Into | Steps |
|------|----------|-----------|-------|
| U01 | L2 "Erste Wörter" (47) | L2 "Begrüßung und Höflichkeit" + L3 "Erste Sätze" | 24 + 28 |
| U03 | L2 "Meine Familie, dein Problem" (49) | L2 "Meine Familie" + L3 "Verwandte und Formulare" | 26 + 28 |
| U08 | L8 "Neue Nachbarn" (43) | L8 + L9 "Richtungen und Beschreibungen" | 20 + 26 |
| U09 | L8 "Der Mitgliedsausweis" (46) | L8 "Sport und Beschreibungen" + L9 "Unterhaltung und Events" | 33 + 22 |
| U11 | L5 "Wie ist das Wetter?" (50) | L5 + L6 "Beschreibungen am Markt" | 26 + 38 |
| U12 | L2 "Papierkram" (41) | L2 + L3 "Digitaler Papierkram" | 18 + 30 |
| U12 | L7 "Noch mehr Wörter" (45) | L7 "Verben für den Alltag" + L8 "Entscheidungen und Eigenschaften" | 21 + 26 |
| U12 | L8 "Das letzte Kapitel" (43) | L9 + L10 "Beschreibungen und Abschluss" | 23 + 22 |
| U14 | L8 "Feierabend" (65) | L8 "Rund ums Gebäude" + L9 "Anleitungen und Abläufe" | 37 + 37 |
| U17 | L8 "Konfetti im Haar" (43) | L8 + L9 "Adjektive und Freizeitverben" | 18 + 30 |
| U23 | L10 "Bildung und Kultur" (41) | L10 + L11 "Verben und Feinschliff" | 24 + 20 |

Total: 319 → 328 lessons. Over-cap: 49 → 41.

### Story Mode
- **Deferred.** Story visuals (Stable Diffusion/local) not feasible before launch. Story steps remain in lessons but visual layer is cut.

## What Remains

### Priority 1: Finish density splits (41 lessons >32 steps)
Full list in `docs/DENSITY_VIOLATIONS.md`. Process per lesson:
1. Read lesson, identify thematic clusters in teach cards
2. Find natural seam, split into 2 themed lessons
3. Each new lesson gets: intro (English), teach cards, quizzes for PP64, board:true
4. Renumber subsequent lesson IDs in the unit
5. Build check after each unit

**Hotspot units** (process first): U14 (6), U09 (5), U08 (4), U10 (4)

**Key rule**: NEVER trim or delete content. Only split. The owner was explicit: "we won't trim if we lose any content and structures."

### Priority 2: PP64 audit
Many teach cards across all units have zero quiz coverage. After all splits are done, run a full PP64 scan and add quizzes for untested words.

### Priority 3: Fix pos/gender fields
Many A1 teach cards (especially U01-U03) are missing `pos` and `gender` fields. Add them.

### Priority 4: B2 tips translation (PP61)
~47 tips + ~21 verb_table notes still in German. Translate to English.

### Priority 5: A1/A2 stray intros
~10 intros in U5, U7, U9, U10, U11, U12 still have German desc/goals.

## Agent Deployment Notes
- Max 4 agents at a time (Rule B.7)
- Opus for splits (creative curriculum decisions)
- Each agent gets: per-unit file + `docs/AGENT_CONTENT_RULES.md` + `docs/FORMAT_TEMPLATE.js`
- Agents timed out on 65-step lessons — for very large lessons, main session handles directly
- For 33-39 step lessons, agents work well (smaller files, cleaner splits)
- Agents write to the actual unit files (worktree isolation protects main)

## Files Modified This Session
- `src/components/LessonEngine.jsx` — BASE_LANGUAGES import fix
- `src/components/shared.jsx` — useRef import fix
- `src/utils.js` — FK_PLAYTHROUGH import fix
- `src/data/german-v2/unit-01.js` — L2 split
- `src/data/german-v2/unit-03.js` — L2 split
- `src/data/german-v2/unit-08.js` — L8 split
- `src/data/german-v2/unit-09.js` — L8 split
- `src/data/german-v2/unit-11.js` — L5 split
- `src/data/german-v2/unit-12.js` — L2, L7, L8 splits
- `src/data/german-v2/unit-14.js` — L8 split (prior session)
- `src/data/german-v2/unit-17.js` — L8 split
- `src/data/german-v2/unit-23.js` — L10 split
- `CLAUDE.md` — PP43, PP64, blockers, priorities
- `docs/AGENT_CONTENT_RULES.md` — PP43, PP64, no-trim rule
- `docs/DENSITY_VIOLATIONS.md` — NEW: full violation list + completed splits log
