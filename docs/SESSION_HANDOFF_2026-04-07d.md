# Session Handoff 2026-04-07d

## What was done (massive session — quiz interleaving + full validation + Arabic fixes)

### 1. Quiz Interleaving — All 36 German v2 Units
- **Problem**: Lessons had 7-26 consecutive teach cards followed by quiz block at end. Story filter removed 191 quiz steps, leaving some lessons with ZERO quizzes.
- **Fix**: ~876 new mc/fb quiz steps interleaved across all 36 units. Every 4-5 teach cards now followed by 1-2 quiz steps.
- **Max consecutive teach run**: reduced from 26 to ≤6 everywhere.

### 2. PP8 Anti-Leak — Zero Violations
- First pass: 405 violations found and fixed (hint/visual/position/length leaks).
- Second pass: 291 remaining found by independent validator, all fixed.
- Third pass: final 5 found and fixed.
- **Result**: `scripts/pp8_validate.cjs` confirms 0/2,849 quiz steps with leaks.

### 3. PP43 Density — All Lessons ≤32 Steps
- Quiz interleaving pushed 87 lessons over the 32-step cap.
- 218 excess interleaved quizzes removed to bring all lessons back under cap.
- **Result**: 0/558 lessons exceed 32 steps.

### 4. PP64 Teach-Then-Test — 99.9% Coverage
- 1,769 teach cards had no quiz coverage (from the original analysis).
- Accurate validator built (`scripts/pp64_validate.cjs`) — real count was 308 untested after stem/inflection matching.
- 189 lessons split at natural thematic break points (369→558 lessons) to create room for quizzes.
- 308 quiz steps added for previously untested teach cards.
- **Result**: 99.9% coverage. 7 remaining are 2-char words (Ei, Öl, CD) exempt from matching.
- Split script: `scripts/pp64_split.cjs`.

### 5. PP61 Metalanguage — German Notes Translated
- 66 teach card `note` fields in unit-32 (lessons 5-9) were entirely in German. Translated to English.
- 11 additional German-only notes/funFacts in units 5, 9, 10, 12, 17 translated.

### 6. PP49 CEFR Labels — Removed from Quiz Fields
- 17 quiz fields referenced A1/A2/B1/B2 labels. Replaced with "fortgeschritten" or "Goethe-Prüfung".

### 7. Arabic Per-Bubble Dialogue Fix
- **Problem**: Dialogue detection regex `/[AB]:\s/` only matched Latin A/B. Arabic `exampleSrc` uses `أ:` / `ب:` markers. Result: all Arabic dialogue translations rendered as single block instead of per-turn bubbles.
- **Fix**: Updated regex to `/[ABأب]:\s/` in all 4 teach card renderers in `LessonEngine.jsx`. Also updated `isA` detection and turn-stripping regex.
- **Impact**: 3,767 Arabic dialogue examples now render correctly.

### 8. Arabic Unit Split Parity
- AR units had 369 lessons while EN had 558 (missing PP64 splits).
- `scripts/sync_ar_splits.cjs` synced AR units to 558 lessons with Arabic-translated hints.

### 9. Validation Scripts Added
| Script | Purpose |
|--------|---------|
| `scripts/pp8_validate.cjs` | PP8 anti-leak scan (5 leak types, 2,849 quiz steps) |
| `scripts/pp64_validate.cjs` | PP64 teach-then-test coverage (stem/inflection matching) |
| `scripts/pp64_split.cjs` | Automated lesson splitting with quiz generation |
| `scripts/pp64_analysis.cjs` | Per-lesson gap analysis with natural break points |
| `scripts/sync_ar_splits.cjs` | Sync AR units with EN lesson structure |

---

## Files Changed (summary)

| Category | Files | Change |
|----------|-------|--------|
| LessonEngine.jsx | 1 | Arabic dialogue regex fix |
| german-v2/ unit files | 36 | Quiz interleaving + PP8 fixes + PP64 splits + PP61 fixes |
| german-v2-ar/ unit files | 36 | Lesson split parity sync |
| scripts/ | 7 | Validation + automation scripts |

---

## Current Validation State (ALL confirmed by automated validators on main)

| Rule | Status | Validator |
|------|--------|-----------|
| PP8 anti-leak | ✅ 0 violations | `scripts/pp8_validate.cjs` |
| PP43 density ≤32 | ✅ 0 violations | inline node check |
| PP64 teach-then-test | ✅ 99.9% | `scripts/pp64_validate.cjs` |
| PP48 fb single blank | ✅ PASS | |
| PP22c no em-dashes | ✅ PASS | |
| PP49 no CEFR labels | ✅ PASS | |
| PP51 CEFR distribution | ✅ PASS | |
| PP55 vocab (5,148 cards) | ✅ PASS | |
| PP57 grammar (362 steps) | ✅ PASS | |
| PP59 POS + gender | ✅ PASS | |
| PP61 metalanguage English | ✅ PASS | |
| board:true | ✅ PASS | |
| Build | ✅ Clean | |

---

## Current State Summary

| Component | Status |
|-----------|--------|
| German v2 EN→DE | **558 lessons**, 36 units, ~11,000 steps, 5,148 teach cards. ALL validation rules PASS. |
| German v2 AR→DE | **558 lessons**, 36 units, synced with EN. Per-bubble dialogue rendering fixed. |
| Arabic dialogue rendering | **FIXED.** Regex updated in all 4 renderers. |
| Breather system | LIVE. Max 5 consecutive teaches. |
| Story mode | HIDDEN. Toggle removed, story quizzes filtered. |
| PP8 validator | PERMANENT. `scripts/pp8_validate.cjs` |
| PP64 validator | PERMANENT. `scripts/pp64_validate.cjs` |

---

## CRITICAL: Next Session Priority — Arabic Content Audit

### The Problem
Native Arabic speaker (owner's Syrian partner, studying for Goethe B2) reports:
- **Arabic translations feel unnatural/textbook-stiff** — not how a native speaker would explain things
- **Specific example**: `solcher/derjenige/diejenige` teach cards — Arabic explanations use overly formal MSA that doesn't land naturally
- **Scope**: ALL 5,148 teach cards have Arabic translations in `src`, `note`, `exampleSrc`, `funFact` fields across `src/data/german-v2-ar/unit-01.js` through `unit-36.js`
- Arabic grammar module: `src/data/grammar/german-ar.js` (58 entries) — same issue likely
- Arabic idioms: `srcAr`/`litAr`/`noteAr` fields in `src/data/idioms-german.js` (125 entries)

### What Needs to Happen
1. **Get specific feedback patterns** from the native speaker:
   - Sample 2-3 units (recommend U32 where the issue was spotted + U1 for basics)
   - Flag: "This explanation makes no sense in Arabic" / "Nobody says it this way" / "This grammar analogy doesn't work for Arabic speakers"
   - Categorize: is it vocabulary choice? Sentence structure? Wrong register? Missing cultural bridge?

2. **Systematic audit of Arabic metalanguage**:
   - All `note` fields — these explain German words TO Arabic speakers. Must use natural Arabic, not translated English.
   - All `funFact` fields — cultural hooks should bridge Arab and German culture, not just translate English cultural references.
   - All `exampleSrc` translations — dialogue must sound like how Arabs actually speak, not word-for-word translation.
   - Grammar module explanations — contrastive hooks (Arabic ↔ German) must be genuinely helpful, not just "in Arabic we say X" filler.

3. **Agent approach for fixes**:
   - Use `docs/agents/AGENT_TRANSLATION_RULES.md` for translation/cultural adaptation rules
   - Opus agents for creative rewriting (natural Arabic), Sonnet for validation
   - Each agent handles 1-2 units. Read per-unit AR files (~250 lines each).
   - Focus on: natural register, clear explanations, useful Arabic↔German bridges

### What NOT to Do
- Don't blindly re-translate everything — some translations are fine
- Don't use Google Translate quality — must be native-level MSA with colloquial clarity
- Don't change the German content (`trg`, `example`) — only Arabic metalanguage
- Don't assume what sounds natural — get native speaker patterns first

### Remaining Arabic Gaps (from CLAUDE.md)
- **VocabularyPage WORD_DB** — word meanings in `dictionary.js` are English only. Arabic source users see English definitions. Scope: add `meaningsAr`/`noteAr` fields.
- **Arabic Foundations text** — Foundations mode has no Arabic content yet.

---

## Other Priorities (unchanged from 2026-04-07c)

### Priority 2: "REVIEW" vs "NEW WORD" Label
Words taught in current lesson show "REVIEW" instead of "NEW WORD" because `learnWord()` fires on the previous card.

### Priority 3: Navigation + Flow Redesign
- Home screen: "Continue Learning" prominent
- Smooth transitions, celebrations

### Priority 4: Audio/TTS
- Google Cloud TTS integration
- Enable `AUDIO_ENABLED` flag

### Priority 5: V1→V2 Language Upgrades
- Korean → Dutch → French → Spanish
