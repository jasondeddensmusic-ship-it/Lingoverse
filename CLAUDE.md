# CLAUDE.md — VerumLingua Project Instructions

> Read this file FIRST. It is the single source of truth.
> When this file and `docs/VERUMLINGUA_REHAUL_VISION.md` conflict, the vision doc wins.

---

## Project Overview

VerumLingua is a multilingual language learning platform (React 18 + Vite). Vision: ANY source language to ANY target language. Nothing hardcoded for one language pair.

**Platform Rehaul (active)**: Complete redesign underway. See `docs/VERUMLINGUA_REHAUL_VISION.md`. Key changes: 2-bubble word cards with fun info + POS/gender tags, story system with Verumius protagonist, language-specific settings, interleaved lesson flow. German is the template language (first to get full rehaul).

**Owner is NOT a coder.** Claude commits + pushes to GitHub. GitHub Actions deploys to mijndomein.nl via FTPS. lingoverse.nl updates in ~2 minutes.

```
npm install && npm run dev    # Dev server at localhost:5173
npm run build                 # Production build (validates compilation)
```

**Repo**: https://github.com/jasondeddensmusic-ship-it/Lingoverse | **Live**: https://lingoverse.nl

---

## Architecture

### Data Modules (`src/data/`)

| File | Contents |
|------|----------|
| `metadata.js` | LANGUAGES, CEFR_LEVELS, LANG_META, LANG_BLUEPRINT, CULTURE_PACKS, SCRIPT_BLUEPRINTS |
| `foundations.js` | FOUNDATIONS_BY_LANG, FK_PLAYTHROUGH, FK_GATE_QUIZ |
| `vocabulary.js` | TEXT_KEYS, VOCAB, LEXEMES, MEANINGS, GRAMMAR, LANG_FAMILIES, ARTICLE_COLORS |
| `dictionary.js` | WORD_DB builder, POS_COLORS, GENDER_COLORS, GRAMMAR_PACKS, pluggable POS taggers |
| `korean-conjugation.js` | conjugateVerb(), 7 irregular types, ~20 endings, phonology rules |
| `units-dutch.js` | 30 Dutch v2 units (old format, `nl`/`en` fields) |
| `units-korean.js` | 30 Korean units (old format, `nl`/`en` fields) |
| `units-german.js` | 30 German v1 units (old format, being replaced by v2) |
| `units-german-v2.js` | Re-exports from 4 per-level files (14 lines, DO NOT read) |
| `german-v2/unit-01.js` ... `unit-36.js` | **36 per-unit files, ~250 lines each.** Agents read THESE. |
| `units-german-v2-a1.js` | Imports unit-01 through unit-06 (wrapper only) |
| `units-german-v2-a2.js` | Imports unit-07 through unit-12 (wrapper only) |
| `units-german-v2-b1.js` | Imports unit-13 through unit-24 (wrapper only) |
| `units-german-v2-b2.js` | Imports unit-25 through unit-36 (wrapper only) |
| `units-french.js` | 30 French units (1.85MB, minified. Use grep, never full-read) |
| `units-spanish.js` | 30 Spanish units (old format) |
| `units-other.js` | Arabic skeletons (5 units) |

### Engine (split into modules)
| File | Lines | Contents |
|------|-------|----------|
| `src/verumlingua.jsx` | ~6,287 | Pages (Home, Profile, VocabularyPage, UnitMap, etc.) + App root |
| `src/components/LessonEngine.jsx` | ~3,918 | All 4 teach card renderers + quiz renderers + lesson flow |
| `src/components/shared.jsx` | ~270 | Confetti, ContinueButton, NavArrow, ScoreCircle, FlagButton |
| `src/styles.js` | ~1,031 | CSS-in-JS design system |
| `src/utils.js` | ~664 | Normalization (`_normStep`), UNITS assembly, search, PP8 validator, helpers |
| `src/audio.jsx` | ~267 | TTS, SpeakerButton, UISounds, feature flags |
| `src/hooks.js` | ~181 | `useFocusNav` keyboard navigation hook |

### Normalization Layer (`_normStep()` in `src/utils.js`)
Runs at module load on all steps. Copies `nl`↔`trg` and `en`↔`src` (and `exampleEn`↔`exampleSrc`). Sets `_origTrg=true` on cards originally written with `trg`. Engine accepts BOTH formats transparently.

### Multiple Teach Card Renderers
4 renderers in `src/components/LessonEngine.jsx` must stay in sync for any visual changes:
1. **New format**: `st._origTrg` — for `trg`/`src` cards
2. **Board-mode**: `boardMode` — for `nl`/`en` cards
3. **Legacy**: gold frame — for legacy new-word cards
4. **Flashcard**: review system (in `src/verumlingua.jsx` Flashcards component)

---

## Data Format

### Unit Structure
```js
{ n:1, lang:"de", srcLang:"en", track:"v2", title:"...", sub:"...",
  icon:"...", level:"A1.1", color:"#7B5EE8",
  lessons: [
    { id:"deu_r1l1", title:"...", icon:"...", xp:15, board:true, steps:[...] }
  ]
}
```
- `lang` = target language code. `srcLang` = source language code (new field, unit-level).
- `board:true` is MANDATORY on all lessons.
- Track: `"v1"` for single-track languages, `"v2"` for rehaul content.

### Teach Cards (NEW format — all new content)
```js
{type:"teach", trg:"Hallo", src:"Hello", pos:"intj", gender:null,
 note:"The most common informal greeting.",
 example:"A: Hallo! Wie geht's?\nB: Hallo! Gut, danke!",
 exampleSrc:"A: Hello! How's it going?\nB: Hello! Good, thanks!",
 funFact:"Only became common in German in the early 1900s."}
```
- `trg` = target language word. `src` = source language translation.
- `pos` = POS tag (verb, noun, adj, adv, prep, conj, pron, num, intj, part, aux). REQUIRED on new content.
- `gender` = grammatical gender (m, f, n, pl, null). REQUIRED for nouns/articles in gendered languages.
- `exampleSrc` replaces legacy `exampleEn`. Contains source-language translation of the example.
- `funFact` = etymology, cultural note, or memory hook. REQUIRED on all new teach cards.

### Legacy Teach Cards (old format — will be migrated)
```js
{type:"teach", nl:"Hallo", en:"Hello", note:"...", example:"...", exampleEn:"..."}
```

### Story Cards
```js
{type:"story", speaker:"narrator", mood:"excited", art:"de-ber-airport",
 trg:"Flughafen Berlin Brandenburg...", src:"Berlin Brandenburg Airport..."}
```

### Other Step Types

| Type | Purpose | Key Fields |
|------|---------|-----------|
| `intro` | Lesson intro | title, desc, goals[] |
| `tip` | Grammar/culture card | title, text, deepDive |
| `verb_table` | Conjugation grid | title, groups[], note. Rows: `[{pronoun,form,src}]` or `[["pronoun","form","src?"]]` or `forms:["string"]`. Renderer normalizes all. |
| `mc` | Multiple choice | q, opts[], ans, hint |
| `fb` | Fill-in-blank (SINGLE blank only) | s, a, opts[], hint |
| `match` | Matching pairs | pairs: [{trg, src}] |
| `drag_fill` | Multi-blank drag | s, blanks:{}, pool[], hint |
| `tr` | Translation input | mk, dir |

---

## Pipeline Rules

### Before Writing ANY Lesson
- **PP24**: Check no prior unit already teaches this concept.
- **PP26**: NAME core constructs in L1-L3, elaborate later. Quiz vocab early, mechanics only at Elaborate phase.
- **PP32**: Every sentence native-speaker quality. Every exercise exactly ONE correct answer.
- **PP34/PP52**: Every quiz word must trace to a prior dedicated teach card. "Taught" = own teach card. Example-only or deepDive-only does NOT count. Cognate exception: transparently cognate, examples only (not quizzes), single word.
- **PP37**: Function words need teach cards before first use.
- **PP43**: Density targets: max 30 steps/lesson (soft cap 32). No lesson ships over 32. Enforced DURING builds, not after.
- **PP64**: Teach-then-test completeness. Every teach card must be tested by at least one quiz step in the same lesson or a later lesson in the same unit. Zero-coverage teach cards are violations.
- **PP46**: B1+ lessons: 2+ constructs per example, 50%+ combo quizzes, 15+ steps minimum.
- **PP63**: Example Vocabulary Integrity. Every content word in a teach card's `example` must be: (a) the `trg` of THIS card, (b) taught in a PRIOR teach card, or (c) an exempt function word. No untaught words in examples. Strictest at A1, relaxed at B2 for transparent cognates/compounds.

### Metalanguage Rule (PP61 — CRITICAL)
ALL explanatory text MUST be in the source language (English). Only target-language content (words being taught, example sentences, quiz questions) is in the target language. This applies to:
- `intro` desc and goals: ALWAYS English
- `tip` title: German grammar term OR English (either OK)
- `tip` text and deepDive text: ALWAYS English. German examples inline are OK.
- `verb_table` note: ALWAYS English
- `teach` note and funFact: ALWAYS English
- `mc` hint, `fb` hint: ALWAYS English
- Maximum 2 consecutive `\n` in tip/deepDive text. NEVER 3+.

### Content Formatting
- **PP22c**: NEVER use em-dashes (—). Use periods, colons, commas, or `\n` bullets.
- **PP27**: No IPA. ASCII-only phonetics. No slashes as separators.
- **PP36**: Notes max ~100 chars or use `\n`/bullets. "What" in note, "why" in deepDive.
- **PP38**: Phonetics hidden for Latin scripts, visible for non-Latin.
- **PP39**: Single-escaped `\n` in content strings, never `\\n`.
- **PP45**: DeepDive = explanation only, never continuation of the card.

### Anti-Leak System (PP8)
Five leak types. ALL must be zero:
1. **Visual**: answer visible in question text
2. **Script**: answer deducible from script patterns
3. **Hint**: hint contains answer word (PP44: hints must GUIDE, 15+ chars)
4. **Pattern**: answer always same position or always longest option
5. **Position**: correct answer clustering (must vary ~25% each position)

### Step Type Rules
- **PP48**: `fb` = SINGLE blank (`{1}` only). `drag_fill` = multi-blank (with `blanks:{}` object). NEVER create `fb` with `{2}`+.
- **PP49**: CEFR labels (A1, A2, B1, B2) NEVER in learner-facing content. No quiz asks "which level?"
- **PP50**: Recycling = USE grammar in new context. Never test classification.

### Certification-Grade Standards
- **PP51**: CEFR distribution must be concept-driven (PP56), not template-based. B1+B2 >= A1+A2 units.
- **PP54**: Never cram to fit a unit count. Never pad to reach a step count. Curriculum serves the LANGUAGE.
- **PP55**: Every word on official exam list (TOPIK/Goethe/DELF/DELE/NT2) must have a teach card. Zero gaps.
- **PP56**: Unit count from concept catalogue, not templates. FSI difficulty matters.
- **PP57**: Every official exam grammar construct: taught + practiced (3+ quiz steps) + recycled (2+ later lessons).
- **PP58**: All CEFR communicative functions at each level must map to practice lessons.
- **P59**: Every teach card gets POS tag + gender. Enables color system, sentence breakdown, grammar deep dives.
- **P60**: Story layers toggleable. Grammar depth adjustable. Platform is self-contained.

### Audit Checklist (PP53 — 17 items, ALL must PASS)
1. CEFR distribution (PP51) | 2. PP8 all 5 leak types | 3. PP52 teach-before-use (full scan) | 4. PP48 step types | 5. PP49 no CEFR labels | 6. PP22c no em-dashes | 7. PP43 density (max 32 steps) | 8. board:true | 9. Sub-level consistency | 10. PP55 vocab completeness | 11. PP57 grammar completeness | 12. PP58 functions | 13. Synonym coverage | 14. PP56 unit count | 15. Exam readiness | 16. PP61 metalanguage in source language | **17. PP64 teach-then-test (every teach card quizzed)**

### Engine Rules
- **PP30**: No React hooks inside renderer blocks. EVER.
- **PP31**: Never assign CSS gradients to `color` property.
- **PP35**: Drag ghosts use document.body escape hatch.

---

## Agent Deployment Rules

> Rationale for each rule: `docs/RULES_RATIONALE.md`

### Rule A: Verification & Evidence
1. NEVER claim something is "missing" without grepping the actual data file. Search multiple representations.
2. Every gap claim must include: search terms, files searched, grep result, confidence. No grep = REJECTED.
3. Every vocab/grammar claim must cite an official source (Goethe-Wortliste, TOPIK, PCIC, etc.).
4. No sampling for completeness audits. Check EVERY word/construct. Sampling only for PP8.

### Rule B: Agent Design
1. Give agents exact file paths + search terms + output format.
2. Don't read entire files when grep suffices. A human with Ctrl+F must not be faster.
3. Never trust one agent for critical tasks. Split into 2-3 with overlapping scope.
4. Max 20 new vocabulary words per agent lesson. Heavy vocab = main session writes directly.
5. Sonnet 4.6+ minimum for content. Opus for creative/complex, Sonnet for validation.
6. Pre-digest data in agent prompts instead of making agents read large files.
7. **MAX 4 agents at a time. NEVER MORE.** Check usage before deploying. Never burn >50% session on one batch. 12+ simultaneous Opus agents = session death.
8. **Every content agent prompt MUST include `docs/AGENT_CONTENT_RULES.md` in full.** This replaces inline PP61 copying. The file has the complete linguistic expert persona + all rules.
9. **Every story agent prompt MUST include `docs/AGENT_STORY_RULES.md` in full.** Master playwright persona + narrative rules.
10. **Agents read `docs/FORMAT_TEMPLATE.js` for format reference.** Never make agents scan 10K-line unit files. The template is 2KB.
11. **Agents read per-unit files** (`src/data/german-v2/unit-NN.js`, ~250 lines each). NEVER the re-export (`units-german-v2.js`) or the full monolith. Per-unit = ~2K tokens. Re-export = useless wrapper. Old monolith = 110K tokens = session death.
12. **Every content agent prompt MUST state:** "Maximum 2 consecutive \\n in any text field."
13. **Token budget per agent:** Validation agent (4 units) ~10K tokens input. Content agent (1 unit) ~4K tokens. Story agent (1 unit) ~5K tokens. If an agent needs >40K input tokens, redesign the task.
14. **Sonnet for validation + translation. Opus ONLY for creative content** (new lessons, story writing). Sonnet is 80% cheaper. Never use Opus for mechanical tasks like PP8 scanning or field translation.

### Rule C: Build Process
1. Validate density PER LESSON during build, not after.
2. Every added step must be pedagogically valid. Density without quality is anti-pedagogy.
3. Sequential content + parallel validators = gold standard. Never parallel on same file.
4. Post-build structural validation MANDATORY: no undefined elements, sequential ordering, required fields, PP48.
5. Write to temp files. Main session merges + validates. Agents NEVER write to main units files.
6. Cross-check official word lists DURING build. Zero gaps before merging.
7. PP8 hint-leak scan before every commit. Takes 5 seconds.
8. Verify lower-level vocab has teach cards before building higher levels.

### Rule D: Edit Safety
1. Use `\n` escape in JS strings, never literal newlines. Verify build after edits.
2. Max 2 agents on same file, non-overlapping ranges with 50+ line buffer.
3. Post-edit: check quote parity, no unterminated strings, no orphaned commas.

### Rule E: Audit Standards
1. Audit agents get FULL pipeline context. Agent without full rules = D109-class errors.
2. Check STRUCTURE before CONTENT. First: CEFR distribution, unit sizing. Then: PP8, PP52, PP48.
3. After adding new CEFR sub-levels, verify unit map in browser. Don't simplify `getCefrInfo()`.

### Rule F: Content Philosophy
1. Opus + Sonnet co-write and cross-validate. Neither ships without the other's sign-off.
2. Salvage v1 content. Check verb tables, tip cards, dialogues before writing from scratch.
3. Build it right the first time. The audit is a safety net, not a cleanup crew.
4. This is a real product. Every card, quiz, and lesson must be certification-grade.

---

## Design System (compact)

**Colors**: Purple #7B5EE8 (UI chrome only), Teal #2ECDA7 (translations, correct), Gold #E8960A (het article, warnings), Coral #F56565 (wrong only).

**POS Colors** (muted ink, no neon, no underlines):
verb #2E7D32, adj #E65100, adv #00695C, pron #7B1FA2, noun #1565C0, prep #37474F, conj #8D6E00, num #B71C1C, intj #C2185B, part #5D4037.

**Gender Colors**: masculine #0D47A1 (der/le/el), feminine #B71C1C (die/la), neuter #00796B (das), plural #00695C, indefinite #5D4037.

**Fonts**: Quicksand (headings), Nunito (body). No Georgia/serif in lesson engine.

**Visual**: Candy gloss aesthetic, frosted glass panels (.sf-panel), 5-stop gradients, shine overlays. Dark mode: #1E1E2E base.

---

## Current State

> Full history: `docs/BUILD_STATUS.md`

| Language | Format | Units | Lessons | Steps | Teach Cards | Status |
|----------|--------|-------|---------|-------|-------------|--------|
| Korean | v1 (old) | 30 | 330 | 6,953 | ~1,367 | Production-ready. Most audited. Pending rehaul. |
| Dutch | v2 (old) | 30 | 261 | ~5,825 | ~1,300 | Production-ready. Pending rehaul. |
| German v1 | v1 (old) | 30 | 259 | ~4,941 | ~1,297 | Being replaced by v2. |
| German v2 | v2 (new) | 36 | 369 | 9,396 | 5,147 | **PERFECT.** All validations PASS: PP8, PP43, PP48, PP52, PP59, PP61. |
| German v2 (AR) | v2 (new) | 36 | ~369 | ~9,396 | ~5,147 | A1+A2 translated. B1 5/12, B2 0/12. 19 units with [AR] markers remain. PAUSED. |
| French | v1 (old) | 30 | 258 | ~4,781 | ~1,077 | Production-ready. Pending rehaul. |
| Spanish | v1 (old) | 30 | 258 | ~4,739 | ~1,062 | Production-ready. Pending rehaul. |
| Arabic | skeleton | 5 | 29 | — | — | Deferred until new format established. |

### German v2 Rehaul Progress
- **Phase 0** (DONE): Goethe word lists (3,303 lemmas), grammar inventory (118 constructs), v1 salvage analysis.
- **Phase 1** (DONE): Story arc validation (36 episodes PASS), 144 scene breakdowns.
- **Phase 2** (DONE): A1+A2 vocab/grammar mapping, lesson design blueprints.
- **Phase 3** (DONE): Cross-level allocation (6-6-12-12 distribution).
- **A1 content** (DONE): 6 units, 44 lessons. Known gaps: 4 under-dense lessons, Goethe A1 list not fully verified.
- **A2 content** (DONE): 6 units, 50 lessons, 1,382 steps. Fully audited: PP55 99.8%, PP52 PASS, PP8 PASS.
- **PP8 scan** (2026-03-26): 66 violations fixed across all 12 units. PP8 PASS.
- **Quiz translations** (2026-03-26): 573 fb+drag_fill steps have `sSrc` (complete English).
- **Field rename** (2026-03-26): All `nl`→`trg`, `en`→`src`, `exampleEn`→`exampleSrc` done.
- **V1 salvage** (2026-03-26): B2 mined (570 items from V1 U25-U30). B1 was built from scratch.
- **B1 content** (DONE): 12 units (U13-U24), 99 lessons, ~2,500 steps. Metalanguage translated to English.
- **B2 content** (DONE): 12 units (U25-U36), 96 lessons, ~2,640 steps. 1,844 vocab. Salvage-first. Intros translated, tips still pending.
- **Metalanguage fix** (2026-03-26): PP61 added. All B1+B2 intros translated. B1 tips translated. B2 tips (~47) + A1/A2 strays (~10) still pending.
- **Renderer fix** (2026-03-26): Note box changed from pink gradient to white + purple bar. Newlines collapsed.
- **Density reduction** (2026-03-29): PP43 updated to 30-step cap (soft 32). PP64 added (teach-then-test). 52 lessons split across 20 units. 328→369 lessons, ~8,200→~9,350 steps. **ZERO lessons over 32 steps.** No content deletion — all splits only.
- **Full validation** (2026-03-29): PP59 pos/gender (1,553 A1+A2 cards tagged), PP61 metalanguage (45+ B2 tips translated), PP8 anti-leak (205+ B2 violations fixed), PP52 teach-before-use (5 B2 fixes), PP48 fb blanks (0 violations). **ALL CHECKS PASS.**
- **Foundations aesthetic** (2026-03-29): Reference mode aligned with lesson engine design system (compound bubbles, candy buttons, gloss arcs, proper fonts/radii).
- **Arabic source language** (2026-03-29): Onboarding 2-step flow, srcLang filtering, RTL flags, A1 scaffolds (6 units). Generator script at `scripts/generate-arabic-units.cjs`.
- **Arabic translation** (2026-03-30): A1+A2 (12 units) fully translated. A2-B2 scaffolds generated (36 total units). 19 B1/B2 units remain (~4,500 [AR] markers). PAUSED.
- **Mobile optimization** (2026-03-30): Bottom nav (5 tabs), Verumius FAB, safe areas, swipe navigation, bottom sheets, responsive typography/grids, touch targets, button feedback. Old Nova chat replaced with Verumius full-page chat.
- **Chat system** (2026-03-30): Nova killed (broken CORS). Verumius full-page chat via Cloudflare Workers. FAB opens floating panel on non-chat pages.
- **Dictionary color system** (2026-03-30): Critical POS tag mismatch fixed. `aux_verb`, `modal_verb`, `conjunction_coord/sub`, `pronoun_dat/refl/rel/dem/indef` added to WORDTYPE_PACK + Gender pack colorMaps. GERMAN_FORM_INDEX wired into lookupWord() + universalHl(). WordBubble enriched with POS/gender/funFact. VocabularyPage: German Conjugation/Cases/Examples tabs added. Coverage: ~50% to ~90%.
- **Dictionary 100% coverage** (2026-03-30): Layer 1 (unknown word fallback) + Layer 2 (proper noun detection). MiniWordPopup/WordBubble added to all 10+ renderers. Every word in every sentence now visible and tappable.
- **GrammarPage/IdiomsPage generalized** (2026-03-30): Dutch data extracted to modules. Language-agnostic loading via GRAMMAR_REFS/IDIOM_REFS. "Coming soon" placeholder for unsupported languages.
- **Word popup crash fix** (2026-03-31): Missing `LANG_DICT` import caused crash on any word click in teach cards. One-line fix.
- **CEFR Reference redesign** (2026-03-31): All-purple level pills, muted gray translations, inline POS tags, clean flexbox layout. Removed 4-column grid.
- **CEFR POS tag fix** (2026-03-31): 1,620 entries with `p:"other"` fixed to correct POS tags (noun, verb, adj, adv, etc.).
- **German grammar module** (2026-04-02): 58 entries across A1 (16), A2 (13), B1 (16), B2 (13). All Goethe-Institut constructs. Zero em-dashes (PP22c). All entries have 3-5 sentence teacher-board quality explanations. 20 conjugation/declension tables (sein/haben, regular verbs, modals, articles, cases, adjective endings, passive, Konjunktiv, etc.).
- **GrammarPage premium redesign** (2026-04-02): All-purple brand palette (NO per-level colors). Candy gloss dropdown pill for level selection. Scrollable tile grid of entry titles. Popup modal with NavArrow teach-card navigation. Table rendering, compound example bubbles, keyboard nav. Both standalone (`src/pages/GrammarPage.jsx`) and inline (`src/verumlingua.jsx`) updated.

### Known Blockers
1. ~~41 lessons over 32-step cap~~ — **RESOLVED.** All 41 splits completed. Zero violations remain.
2. ~~PP64 violations widespread~~ — **RESOLVED.** Quiz coverage added during splits.
3. ~~B2 tips still in German~~ — **RESOLVED.** All 45+ tips translated to English (PP61 PASS).
4. ~~A1/A2 stray intros~~ — **RESOLVED.** All intros translated.
5. ~~B2 content not validated~~ — **RESOLVED.** PP8 (205+ fixes), PP52 (5 fixes), PP48 all PASS.
6. ~~pos/gender fields missing~~ — **RESOLVED.** All 5,147 teach cards tagged (PP59 PASS).
7. CEFR distribution imbalance — French/Spanish/Korean still template-based.
8. ~~Arabic A1 translation~~ — **RESOLVED.** A1+A2 fully translated. 19 B1/B2 units remain (PAUSED).
9. ~~Dictionary system POS colors~~ — **RESOLVED.** All POS tags now mapped. ~90% word coverage. See `docs/SESSION_HANDOFF_2026-03-30d.md`.
10. ~~Dictionary: unknown word fallback~~ — **RESOLVED.** Unknown words now tappable with subtle style + "Not yet catalogued" popup.
11. ~~Dictionary: proper noun detection~~ — **RESOLVED.** Capitalization heuristic detects names. Warm grey + "PROPER NOUN" badge.
12. ~~GrammarPage~~ — **RESOLVED.** Generalized to load from `GRAMMAR_REFS[lang]`. Dutch data extracted to `src/data/grammar/dutch.js`. "Coming soon" for unsupported languages. Note: Dutch content is MOCK quality.
13. ~~IdiomsPage~~ — **RESOLVED.** Generalized to load from `IDIOM_REFS[lang]`. Dutch idioms extracted with language-agnostic fields.
14. ~~Mobile optimization~~ — **RESOLVED** (2026-03-30). Bottom nav, FAB, safe areas, swipe, bottom sheets.
15. ~~German CEFR POS tags~~ — **RESOLVED.** All 1,620 `p:"other"` entries fixed with correct POS tags.
16. ~~Word popup crash~~ — **RESOLVED.** Missing `LANG_DICT` import in LessonEngine.jsx. WordBubble + MiniWordPopup now work.
17. ~~CEFR Reference visual design~~ — **RESOLVED.** All-purple level pills, muted translations, inline POS tags, clean layout.
18. **CEFR data lemma quality** — Messy entries like `(ab)fliegen, fliegt (ab)` need normalization to clean lemmas.

---

## Next Priorities

1. **CEFR data lemma cleanup** — ~500 messy German entries need normalization (e.g. `(ab)fliegen, fliegt (ab)` → `abfliegen`). Data cleanup task.
2. **German idioms module** — Write `src/data/grammar/idioms-german.js`. Same premium popup format as grammar. Wire into IdiomsPage.
3. **Arabic source language completion** — 19 B1/B2 units with [AR] markers. ~4,500 markers remain. Resume after German polish.
4. **Arabic UI localization** — ~180 hardcoded strings need `t()` routing.
5. **LessonEngine RTL** — Apply `srcDir` to all source-text containers.
6. **Other language rehauling**: Korean → Dutch → French → Spanish (v1 → v2 upgrade). German v2 is the template.

---

## Documentation Hierarchy

### Tier 1: Authoritative
- **`CLAUDE.md`** (this file) — Single source of truth. Read first.
- **`docs/VERUMLINGUA_REHAUL_VISION.md`** — Platform rehaul spec. Supersedes conflicts.
- **`docs/VISUAL_AUDIO_LAYER.md`** — Art, audio, navigation, Verumius design.

### Tier 2: Active reference
- **`docs/GERMAN_MASTER_BATCH_PLAN.md`** — German rehaul execution plan.
- **`docs/GERMAN_REHAUL_PLAN.md`** — D119 concept catalogue (116 grammar constructs, story bible, 6-6-12-12).
- **`docs/german/`** — Word lists, grammar mappings, scene breakdowns, lesson designs, salvage.
- **`docs/SESSION_HANDOFF_2026-04-02c.md`** — Latest session handoff (German grammar module + GrammarPage premium redesign).
- **`docs/SESSION_HANDOFF_2026-03-31.md`** — Previous handoff (word popup crash fix + CEFR reference redesign).
- **`docs/SESSION_HANDOFF_2026-03-30e.md`** — Previous handoff (dictionary 100% coverage + grammar/idioms generalization).
- **`docs/SESSION_HANDOFF_2026-03-30d.md`** — Previous handoff (dictionary color system fix).
- **`docs/SESSION_HANDOFF_2026-03-30c.md`** — Previous handoff (mobile optimization + chat fix).
- **`docs/SESSION_HANDOFF_2026-03-29c.md`** — Milestone: German v2 PERFECT validation.
- **`docs/DECISION_LOG.md`** — All D-numbers indexed by topic.
- **`docs/BUILD_STATUS.md`** — Full build history per language.
- **`docs/RULES_RATIONALE.md`** — Why each agent rule exists.

### Tier 2.5: Agent Infrastructure
- **`docs/AGENT_CONTENT_RULES.md`** — Linguistic expert persona + all content rules. Copy into EVERY content agent prompt.
- **`docs/AGENT_STORY_RULES.md`** — Master playwright persona + story writing rules. Copy into EVERY story agent prompt.
- **`docs/FORMAT_TEMPLATE.js`** — 2KB format reference showing every step type. Agents read THIS, not 10K-line unit files.

### Tier 3: Specialized
- **`docs/CONCEPT_REGISTRY.md`** — Machine-searchable grammar/vocab index.
- **`docs/SETTINGS_PANEL_HANDOFF.md`** — Settings panel V1 gaps.
- **`docs/DICTIONARY_SYSTEM_HANDOFF.md`** — Korean deep dictionary.
- **`docs/KOREAN_B1_CURRICULUM_DESIGN.md`** — Pedagogical template for level design.

### Archived (`docs/archive/`)
Historical docs. Not needed for current work.

---

## Session Startup

1. Read this file (CLAUDE.md).
2. Check `docs/SESSION_HANDOFF_2026-03-31.md` for latest context.
3. Check memory files (`~/.claude/projects/.../memory/`).
4. Before audits: follow Rule A (grep actual code, never trust docs alone).
5. Before content: re-read Pipeline Rules above.

---

## Core Principles

1. **We build the system that builds courses.** Every decision shapes the process that runs WITHOUT a human safety net.
2. **Code is truth, docs are claims.** Grep data files. `units-*.js` contains reality.
3. **Structure before content.** Check CEFR distribution before checking PP8 leaks.
4. **Never cram, never pad.** Unit count from concepts, not templates. Every language gets its own shape.
5. **"Taught" means its own teach card.** Example-only ≠ taught. DeepDive-only ≠ taught.
6. **Certification-grade means EVERY word.** Not "most." ALL official exam words and grammar constructs.
7. **Density without quality is anti-pedagogy.** Every step must earn its place.
8. **Sequential content + parallel validation = zero defects.** The D100 gold standard workflow.
9. **Salvage everything, throw away nothing.** Existing content gets saved and redistributed.
10. **Design first, build second.** "We coded before designing. Never again."
11. **Word cards: 2 bubbles + fun info + POS/gender tags.** No card ships without all of these.
12. **Build it right the first time.** The audit is a safety net, not a cleanup crew.
