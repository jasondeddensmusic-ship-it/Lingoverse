# CLAUDE.md — VerumLingua Project Instructions

> Read this file FIRST. It is the single source of truth.
> When this file and `docs/vision/VERUMLINGUA_REHAUL_VISION.md` conflict, the vision doc wins.

---

## Project Overview

VerumLingua is a multilingual language learning platform (React 18 + Vite). Vision: ANY source language to ANY target language. Nothing hardcoded for one language pair.

**Platform Rehaul (active)**: Complete redesign underway. See `docs/vision/VERUMLINGUA_REHAUL_VISION.md`. Key changes: 2-bubble word cards with fun info + POS/gender tags, story system with Verumius protagonist, language-specific settings, interleaved lesson flow. German is the template language (first to get full rehaul).

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
| `units-dutch.js` | 30 Dutch v1 units (legacy, kept for reference) |
| `units-dutch-v2.js` | Re-exports from 4 per-level files (active import) |
| `dutch-v2/unit-01.js` ... `unit-30.js` | **30 per-unit files.** V2 format with trg/src, POS, gender, funFact. |
| `units-korean.js` | 30 Korean v1 units (legacy, kept for reference) |
| `units-korean-v2.js` | Re-exports from 4 per-level files (active import) |
| `korean-v2/unit-01.js` ... `unit-30.js` | **30 per-unit files.** V2 format with trg/src, POS, funFact, hanja preserved. |
| `units-german.js` | 30 German v1 units (old format, being replaced by v2) |
| `units-german-v2.js` | Re-exports from 4 per-level files (14 lines, DO NOT read) |
| `german-v2/unit-01.js` ... `unit-36.js` | **36 per-unit files, ~250 lines each.** Agents read THESE. |
| `units-german-v2-a1.js` | Imports unit-01 through unit-06 (wrapper only) |
| `units-german-v2-a2.js` | Imports unit-07 through unit-12 (wrapper only) |
| `units-german-v2-b1.js` | Imports unit-13 through unit-24 (wrapper only) |
| `units-german-v2-b2.js` | Imports unit-25 through unit-36 (wrapper only) |
| `units-french.js` | 30 French v1 units (legacy, kept for reference) |
| `units-french-v2.js` | Re-exports from 4 per-level files (active import) |
| `french-v2/unit-01.js` ... `unit-30.js` | **30 per-unit files.** V2 format with trg/src, POS, gender, funFact. |
| `units-spanish.js` | 30 Spanish v1 units (legacy, kept for reference) |
| `units-spanish-v2.js` | Re-exports from 4 per-level files (active import) |
| `spanish-v2/unit-01.js` ... `unit-30.js` | **30 per-unit files.** V2 format with trg/src, POS, gender, funFact. |
| `units-other.js` | Arabic skeletons (5 units) |

### Engine (split into modules)
| File | Lines | Contents |
|------|-------|----------|
| `src/App.jsx` | ~647 | **Real entry point.** Routing, state, React.lazy page loading, bottom nav |
| `src/components/LessonEngine.jsx` | ~4,036 | All 4 teach card renderers + quiz renderers + lesson flow. **Remaining monolith — splitting planned.** |
| `src/components/shared.jsx` | ~551 | Confetti, ContinueButton, NavArrow, ScoreCircle, FlagButton, AppIcon |
| `src/styles.js` | ~1,031 | CSS-in-JS design system |
| `src/utils.js` | ~664 | Normalization (`_normStep`), UNITS assembly, search, PP8 validator, helpers |
| `src/audio.jsx` | ~267 | TTS, SpeakerButton, UISounds, feature flags |
| `src/hooks.js` | ~181 | `useFocusNav` keyboard navigation hook |
| `src/pages/*.jsx` | 13 files | All pages (Home, LearnPage, VocabularyPage, GrammarPage, CefrReferencePage, Flashcards, Quiz, Chat, Profile, IdiomsPage, AuthScreen, Onboarding, DevGate) |

> **Entry point**: `src/main.jsx` → `src/App.jsx`. Legacy `verumlingua.jsx` deleted (was 6,010 lines of dead code).

### Normalization Layer (`_normStep()` in `src/utils.js`)
Runs at module load on all steps. Copies `nl`↔`trg` and `en`↔`src` (and `exampleEn`↔`exampleSrc`). Sets `_origTrg=true` on cards originally written with `trg`. Engine accepts BOTH formats transparently.

### Multiple Teach Card Renderers
4 renderers in `src/components/LessonEngine.jsx` must stay in sync for any visual changes:
1. **New format**: `st._origTrg` — for `trg`/`src` cards
2. **Board-mode**: `boardMode` — for `nl`/`en` cards
3. **Legacy**: gold frame — for legacy new-word cards
4. **Flashcard**: review system (in `src/pages/Flashcards.jsx`)

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

> Rationale for each rule: `docs/agents/RULES_RATIONALE.md`

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
8. **Every content agent prompt MUST include `docs/agents/AGENT_CONTENT_RULES.md` in full.** This replaces inline PP61 copying. The file has the complete linguistic expert persona + all rules.
9. **Every story agent prompt MUST include `docs/agents/AGENT_STORY_RULES.md` in full.** Master playwright persona + narrative rules.
10. **Agents read `docs/agents/FORMAT_TEMPLATE.js` for format reference.** Never make agents scan 10K-line unit files. The template is 2KB.
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
| Korean | v2 (format only) | 30 | 330 | 6,953 | 1,266 | **FORMAT MIGRATED** (2026-04-12). Per-unit files, POS, funFact. **CONTENT REHAUL NEEDED:** ~2-3K more teach cards for TOPIK coverage. |
| Dutch | v2 (format only) | 30 | 261 | ~5,825 | 1,233 | **FORMAT MIGRATED** (2026-04-12). Per-unit files, POS/gender, cognate→funFact. **CONTENT REHAUL NEEDED:** NT2 word list gap analysis + ~2-3K new cards. |
| German v1 | v1 (old) | 30 | 259 | ~4,941 | ~1,297 | Being replaced by v2. |
| German v2 | v2 (COMPLETE) | 36 | 558 | ~11,000 | 5,148 | **PERFECT.** All validations PASS. THE GOLD STANDARD. 125 COMPOUND breakdowns. |
| German v2 (AR) | v2 (COMPLETE) | 36 | 558 | ~11,000 | ~5,148 | **COMPLETE.** ~6,800 Arabic fixes + 170 bidi punctuation fixes (2026-04-10). |
| French | v2 (format only) | 30 | 258 | ~4,781 | 1,092 | **FORMAT MIGRATED** (2026-04-12). Per-unit files, POS/gender, funFact. **CONTENT REHAUL NEEDED:** DELF word list + ~2.5-3.5K new cards. |
| Spanish | v2 (format only) | 30 | 258 | ~4,739 | 1,262 | **FORMAT MIGRATED** (2026-04-12). Per-unit files, POS/gender, funFact. **CONTENT REHAUL NEEDED:** DELE word list + ~2.5-3.5K new cards. |
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
- **GrammarPage premium redesign** (2026-04-02): All-purple brand palette (NO per-level colors). Candy gloss dropdown pill for level selection. Scrollable tile grid of entry titles. Popup modal with NavArrow teach-card navigation. Table rendering, compound example bubbles, keyboard nav. Standalone `src/pages/GrammarPage.jsx` updated.
- **GrammarPage v2 + teacher-board rewrite** (2026-04-03): Full redesign. Mobile bottom sheet (useBottomSheet + useSwipe), desktop glossy modal. Explanation-first layout. HTML table for pixel-perfect alignment. Full-width list cards (no emoji icons). All 58 entries rewritten: dense paragraphs → bold headings, short sentences, one idea per line, child-friendly. One bullet per item. 142 umlaut violations fixed. Muted purple translations (not teal). Portal rendering for .anim escape.

- **Arabic B2 complete** (2026-04-06): Units 33-36 fully translated (2,649 [AR] markers). All 36 Arabic-source units now clean.
- **Arabic grammar module** (2026-04-06): `src/data/grammar/german-ar.js` (58 entries, 2,205 lines). MSA explanations with Arabic-German contrastive hooks. GrammarPage auto-selects when baseLang=ar.
- **Arabic idioms** (2026-04-06): srcAr/litAr/noteAr added to all 125 entries in idioms-german.js. Arabic proverb equivalents bridged. IdiomsPage wired for baseLang=ar.
- **Arabic CEFR vocab** (2026-04-06): trAr field on 4,199 of 4,699 entries (A1: 677, A2: 723/1,223, B1: 2,799). CefrReferencePage wired with baseLang + RTL. 500 A2 entries remain.
- **i18n + RTL polish** (2026-04-07): 50+ UI strings localized for Arabic (LearnPage, CefrReferencePage, IdiomsPage, GrammarPage, Profile). RTL isolation via CSS utility classes (trg-text, trg-inline, meta-text) — German punctuation displays correctly in RTL pages. 24 unit subtitles translated. Tip/deepDive noColor readability fix.
- **Quiz interleaving** (2026-04-07): ~876 new mc/fb quiz steps interleaved across all 36 units. Max consecutive teach run reduced from 26 to ≤6. All lessons now have quizzes between teach card groups.
- **PP8 zero violations** (2026-04-07): 696 total PP8 violations fixed across 3 passes. Automated validator `scripts/pp8_validate.cjs` confirms 0/2,849 quiz steps with leaks.
- **PP64 lesson splits** (2026-04-07): 189 lessons split at natural thematic break points (369→558 lessons). 308 quiz steps added for untested teach cards. PP64 coverage: 99.9%. Automated validator `scripts/pp64_validate.cjs`.
- **PP43 density restored** (2026-04-07): 87 over-dense lessons trimmed back to ≤32 steps after quiz interleaving. 218 excess quizzes removed.
- **PP61 U32 metalanguage** (2026-04-07): 66 German-only teach.note fields in unit-32 translated to English. 11 additional in U5/U9/U10/U12/U17.
- **PP49 CEFR labels** (2026-04-07): 17 quiz fields referencing A1/A2/B1/B2 replaced with "fortgeschritten" or "Goethe-Prüfung".
- **Arabic per-bubble fix** (2026-04-07): Dialogue regex `/[AB]:\s/` → `/[ABأب]:\s/` in all 4 teach card renderers. 3,767 Arabic dialogue examples now render as per-turn bubbles.
- **Arabic unit split sync** (2026-04-07): AR units synced from 369→558 lessons matching EN structure. `scripts/sync_ar_splits.cjs`.
- **Arabic content audit NEEDED** (2026-04-07): Native Arabic speaker reports translations feel unnatural/textbook-stiff. Full audit of Arabic metalanguage (notes, funFacts, exampleSrc, grammar explanations) required. See `docs/SESSION_HANDOFF_2026-04-07d.md`.
- **Flashcard UI redesign** (2026-04-09): Complete rewrite. Reveal mechanic (not flip), teach-card style matching LessonEngine exactly. Article colors, POS/gender badges, dialogue bubbles, fun facts, notes. Dead flip CSS removed. Browse + Review tabs.
- **691 generic quiz hints fixed** (2026-04-09): All "Think about the meaning..." / "Which word fits..." hints replaced with word-specific guidance (etymology, cognates, compound breakdowns). PP8 zero violations.
- **Storage polyfill** (2026-04-09): `window.storage` localStorage fallback in main.jsx for environments without native storage API.

### Known Blockers
1. ~~41 lessons over 32-step cap~~ — **RESOLVED.** All 41 splits completed. Zero violations remain.
2. ~~PP64 violations widespread~~ — **RESOLVED.** Quiz coverage added during splits.
3. ~~B2 tips still in German~~ — **RESOLVED.** All 45+ tips translated to English (PP61 PASS).
4. ~~A1/A2 stray intros~~ — **RESOLVED.** All intros translated.
5. ~~B2 content not validated~~ — **RESOLVED.** PP8 (205+ fixes), PP52 (5 fixes), PP48 all PASS.
6. ~~pos/gender fields missing~~ — **RESOLVED.** All 5,147 teach cards tagged (PP59 PASS).
7. CEFR distribution imbalance — French/Spanish/Korean still template-based.
8. ~~Arabic translation~~ — **RESOLVED.** All 36 units translated (A1+A2+B1+B2). Grammar (58 entries), idioms (125 entries), CEFR vocab (4,699/4,699). i18n + RTL polish complete (50+ strings, CSS utility classes). VocabularyPage WORD_DB word-meaning translations not yet Arabic — tracked as item 24.
9. ~~Dictionary system POS colors~~ — **RESOLVED.** All POS tags now mapped. ~90% word coverage.
10. ~~Dictionary: unknown word fallback~~ — **RESOLVED.** Unknown words now tappable with subtle style + "Not yet catalogued" popup.
11. ~~Dictionary: proper noun detection~~ — **RESOLVED.** Capitalization heuristic detects names. Warm grey + "PROPER NOUN" badge.
12. ~~GrammarPage~~ — **RESOLVED.** Generalized to load from `GRAMMAR_REFS[lang]`. Dutch data extracted to `src/data/grammar/dutch.js`. "Coming soon" for unsupported languages. Note: Dutch content is MOCK quality.
13. ~~IdiomsPage~~ — **RESOLVED.** Generalized to load from `IDIOM_REFS[lang]`. Dutch idioms extracted with language-agnostic fields.
14. ~~Mobile optimization~~ — **RESOLVED** (2026-03-30). Bottom nav, FAB, safe areas, swipe, bottom sheets.
15. ~~German CEFR POS tags~~ — **RESOLVED.** All 1,620 `p:"other"` entries fixed with correct POS tags.
16. ~~Word popup crash~~ — **RESOLVED.** Missing `LANG_DICT` import in LessonEngine.jsx. WordBubble + MiniWordPopup now work.
17. ~~CEFR Reference visual design~~ — **RESOLVED.** All-purple level pills, muted translations, inline POS tags, clean layout.
18. ~~CEFR data lemma quality~~ — **RESOLVED.** 779 entries normalized to clean headwords.
19. ~~Lesson engine word coloring~~ — **RESOLVED** (2026-04-04). `grammarHl` default changed to false. Note text removed from `universalHl`. PR #99.
20. ~~CEFR page is raw word list~~ — **RESOLVED.** Progress Tracker redesign: progress panel, per-level bars, filter toggles, learned checkmarks.
21. ~~`verumlingua.jsx` is dead code~~ — **RESOLVED.** Deleted (6,010 lines). `App.jsx` is the real entry.
22. ~~Cases grammar pack empty~~ — **RESOLVED.** colorMap filled with preposition/article/pronoun mappings. Case-specific colors pending data model.
23. ~~Arabic A1+A2 [AR] markers~~ — **RESOLVED.** Zero markers remain in A1+A2 content.
24. ~~**VocabularyPage WORD_DB**~~ — **RESOLVED** (2026-04-08). Arabic enrichment pass in dictionary.js imports AR units and stores `.ar`, `.noteAr`, `.funFactAr`, `.exampleAr` on German entries. LessonEngine, VocabularyPage, and Flashcards all use baseLang-aware helpers.
25. ~~**Arabic content quality audit**~~ — **RESOLVED** (2026-04-08). ~6,800 fixes across all 36 AR unit files: 748 broken mixed-language fields, 854 match pair translations, 2,170 native speaker review fixes, 1,285 contextual hint rewrites, 1,609 MC opts/ans translations. Zero English remaining in learner-facing fields. See `docs/SESSION_HANDOFF_2026-04-08.md`.
26. **CEFR B2 Arabic gap** — 1,821 B2 CEFR vocab entries have no `trAr` field. A1+A2+B1 complete (4,699/6,537). CefrReferencePage shows English for Arabic users on B2 words.
27. **REVIEW/NEW WORD edge cases** — `lwAtStart` ref fix deployed (2026-04-08). Needs browser testing for back-navigation and lesson re-entry scenarios.
28. ~~**Dutch/French/Spanish V2 upgrade**~~ — **RESOLVED** (2026-04-12). All 3 languages upgraded to V2 format with per-unit files, POS/gender tags, funFact fields. Dutch: 347 cognates preserved as funFact + 22 COMPOUND breakdowns. French: 1,092 cards tagged. Spanish: 1,262 cards tagged. Imports updated in `utils.js` and `dictionary.js`.
29. ~~**German compound bubbles**~~ — **RESOLVED** (2026-04-12). 125 COMPOUND breakdowns added to German v2 noun teach cards. LessonEngine compound bubble renderer displays them as interactive chip bubbles.

---

## Next Priorities (updated 2026-04-12)

> Full work plan: `docs/PHASE1_WORKPLAN.md`. Latest handoff: `docs/SESSION_HANDOFF_2026-04-07c.md`.

### Phase 1: German EN→DE Polish (DONE)
1. ~~CEFR → Progress Tracker~~ — **DONE.** Progress panel, per-level bars, filter toggles, learned checkmarks.
2. ~~Delete `verumlingua.jsx`~~ — **DONE.** 6,010 lines removed.
3. ~~Fill Cases grammar pack~~ — **DONE.** Preposition/article/pronoun colorMap.
4. ~~Fix Arabic A1+A2 markers~~ — **DONE.** Already clean.
5. ~~Document LessonEngine split roadmap~~ — **DONE.** See Refactoring Roadmap section below.

### Phase 1.5A: Feature Polish (NEXT — do before Arabic)
Make existing features actually work properly for German:
6. **Verb tables clickable** — `verb_table` forms don't use `universalHl()`. No tap-to-see, no colors.
7. **Flashcards German v2** — Verify `VOCAB[lang]` maps correctly to German v2 `trg/src` data.
8. **Idioms page search/filter** — 45 entries with no way to filter by level or search.
9. ~~**"Continue Learning" on home**~~ — **ALREADY DONE.** Home.jsx has Continue Learning card with progress tracking, resume prompt, and lesson count.
10. **German Foundations** — "Coming soon" placeholder. Needs at least alphabet/basics content.

### Phase 1.5B: Grammar Visualization (POST-LAUNCH)
The VL vision of full sentence breakdown with POS/gender colors inline. Deferred — not blocking launch:
- Visual sentence analysis mode (see POS/gender on every word at a glance)
- Cases pack with per-preposition case governance
- Grammar toggle default behavior review
- Sentence-level word-by-word breakdown display

### Phase 2: Arabic Finishing Touches
11. ~~**Arabic B1+B2 translation**~~ — **DONE.** All 36 units translated. Zero content [AR] markers.
12. ~~**CEFR A2 gap**~~ — **PARTIAL.** 4,699 of 6,537 CEFR entries have trAr. All A1+A2+B1 complete. **B2 (1,821 entries) has no trAr yet.**
13. ~~**Arabic UI localization**~~ — **DONE.** 50+ strings localized. RTL CSS utility classes in place.
14. ~~**WORD_DB Arabic translations**~~ — **DONE** (2026-04-08). Arabic enrichment pass stores `.ar`/`.noteAr`/`.funFactAr`/`.exampleAr` on WORD_DB entries. UI helpers pick translation by baseLang.
15. **Arabic Foundations text** — Scope not yet defined. Foundations mode ("coming soon") has no Arabic content.

### Phase 3: Navigation + Flow Redesign
14. ~~**Home screen redesign**~~ — **DONE.** Continue Learning card, organized feature grid, progress stats.
15. ~~**Smooth transitions**~~ — **PARTIAL** (2026-04-08). Page fadeUp animation on switch via `key={page}`. Lesson completion celebrations still TODO.

### Phase 4: Audio/TTS
16. **Google Cloud TTS integration** — Provider chosen, deferred until content phases done.
17. **Enable `AUDIO_ENABLED`** — Flip gate in `src/audio.jsx`.

### Phase 5: V1→V2 Language Upgrades
18. **Dutch** → **French** → **Spanish** → **Korean** — **FORMAT MIGRATED** (2026-04-12). V2 file structure done (per-unit files, POS/gender, funFact, compounds). **CONTENT REHAUL STILL NEEDED:** official word list mapping, ~2-3K new teach cards per language, grammar module creation, quiz interleaving, PP55/PP57/PP58 completeness. See `docs/SESSION_HANDOFF_2026-04-12.md` for full pipeline.
20. **Dutch grammar teacher-board rewrite** — Current content is mock/placeholder.

### Phase 6: Premium Visual Overhaul
20. **Design session with owner** — Benchmark apps, icon system, music/soundtrack, animations.
16. **Full visual overhaul** — Icons, micro-animations, effects, music. Owner acknowledges prototype feel.

---

## Refactoring Roadmap

### Completed
- All pages split to `src/pages/` (13 files, React.lazy loaded from `src/App.jsx`)
- All shared components to `src/components/` (8 files)
- `src/verumlingua.jsx` deleted (was 6,010 lines of dead code, zero imports)

### Planned: LessonEngine.jsx Splitting
`src/components/LessonEngine.jsx` (4,036 lines) is the remaining monolith. Not blocking, for future sessions:
- `src/components/lesson/WordBubble.jsx` — word info popup (~300 lines)
- `src/components/lesson/MiniWordPopup.jsx` — compact popup (~100 lines)
- `src/components/lesson/GrammarColorPicker.jsx` — pack selector UI (~150 lines)
- `src/components/lesson/StepRenderers.jsx` — teach/story/tip/quiz renderers (~2,000 lines)

### Planned: LearnPage.jsx Splitting
`src/pages/LearnPage.jsx` (1,386 lines) — lower priority:
- `UnitSelector.jsx` — unit/lesson picker
- `FoundationsMode.jsx` — foundations flow (GateQuiz + Playthrough)

---

## Documentation Hierarchy

### Tier 1: Authoritative
- **`CLAUDE.md`** (this file) — Single source of truth. Read first.
- **`docs/vision/VERUMLINGUA_REHAUL_VISION.md`** — Platform rehaul spec. Supersedes conflicts.
- **`docs/vision/VISUAL_AUDIO_LAYER.md`** — Art, audio, navigation, Verumius design.

### Tier 2: Active reference
- **`docs/SESSION_HANDOFF_2026-04-12.md`** — **Latest handoff.** V2 format migration for NL/FR/ES/KO (format only — NOT content rehaul). Full pipeline for bringing each language to German-v2-level quality. Engine fixes (compound bubbles, funFact display). 1,755 PP8 hint fixes. **READ THIS FIRST for V2 rehaul work.**
- **`docs/SESSION_HANDOFF_2026-04-09.md`** — Previous. Flashcard UI redesign, 691 quiz hint fixes, PP8 zero violations.
- **`docs/SESSION_HANDOFF_2026-04-08b.md`** — Previous. Deep audit (~150 fixes, 52 files), FSRS spaced repetition engine (working, UI needs redesign), competitor benchmark, learning science analysis.
- **`docs/SESSION_HANDOFF_2026-04-08.md`** — Previous. ~6,800 Arabic fixes, CEFR B2 Arabic complete, German Foundations rewrite, RTL bidi fix.
- **`docs/SESSION_HANDOFF_2026-04-07d.md`** — Previous. Quiz interleaving, PP8/PP43/PP64 all PASS, Arabic dialogue fixed.
- **`docs/SESSION_HANDOFF_2026-04-07c.md`** — Previous. Plumbing fixed, breathers live.
- **`docs/SESSION_HANDOFF_2026-04-05.md`** — Previous. Phase 1.5A complete.
- **`docs/PHASE1_WORKPLAN.md`** — Phase 1 work plan (DONE). Phase 2 preview.
- **`docs/DECISION_LOG.md`** — All D-numbers indexed by topic.
- **`docs/BUILD_STATUS.md`** — Full build history per language.
- **`docs/PRODUCT_PLAN.md`** — Business model, monetization, premium features roadmap.

### Tier 2.5: Agent Infrastructure
- **`docs/agents/AGENT_CONTENT_RULES.md`** — Linguistic expert persona + all content rules. Copy into EVERY content agent prompt.
- **`docs/agents/AGENT_STORY_RULES.md`** — Master playwright persona + story writing rules. Copy into EVERY story agent prompt.
- **`docs/agents/AGENT_TRANSLATION_RULES.md`** — Translation + cultural adaptation rules for source-to-target pipelines.
- **`docs/agents/FORMAT_TEMPLATE.js`** — 2KB format reference showing every step type. Agents read THIS, not 10K-line unit files.

### Tier 3: Specialized (by subdirectory)
- **`docs/vision/`** — Rehaul vision, visual/audio layer, German rehaul plan
- **`docs/agents/`** — Content/story/translation rules, format template, rules rationale
- **`docs/reference/`** — Dictionary, settings, word tags, foundations, language pipeline, concept registry
- **`docs/german/`** — Scene breakdowns, communicative functions mapping
- **`docs/korean/`** — B1 curriculum design, TOPIK coverage report

---

## Session Startup

1. Read this file (CLAUDE.md).
2. Check `docs/SESSION_HANDOFF_2026-04-09.md` for latest context.
3. Check `docs/PHASE1_WORKPLAN.md` for current work plan.
4. Check memory files (`~/.claude/projects/.../memory/`).
5. Before audits: follow Rule A (grep actual code, never trust docs alone).
6. Before content: re-read Pipeline Rules above.

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
13. **Communicate warmly.** Flag problems gently, celebrate wins genuinely. The owner's passion drives this project — honor that with kindness, never clinical bluntness.
