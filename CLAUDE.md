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
| `units-italian-v2.js` | Re-exports from 4 per-level files (active import) |
| `italian-v2/unit-01.js` ... `unit-36.js` | **36 per-unit files.** V2 format with trg/src, POS, gender, funFact. |
| `italian-v2/_batch*_u*_L*.js` | **~252 batch density files.** Imported into unit lessons arrays. Contains ~4,176 teach cards. |
| `units-japanese-v2.js` | Re-exports from 4 per-level files (active import) |
| `japanese-v2/unit-01.js` ... `unit-36.js` | **36 per-unit files.** V2 format with kanji+furigana (PP65). |
| `japanese-v2/_batch*_u*_L*.js` | **~348 batch density files.** Imported into unit lessons arrays. Contains ~4,375 teach cards. **NOTE: batch files still use pure hiragana. Need PP65 conversion.** |
| `units-other.js` | Arabic skeletons (5 units) |
| `grammar/korean.js` | 47 grammar entries, TOPIK aligned A1-B2 |
| `grammar/french.js` | 52 grammar entries, DELF aligned A1-B2 |
| `grammar/spanish.js` | 53 grammar entries, DELE aligned A1-B2 |
| `grammar/italian.js` | 51 grammar entries, CILS aligned A1-B2 |
| `grammar/japanese.js` | 54 grammar entries, JLPT aligned A1-B2 |

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
// German example:
{type:"teach", trg:"Hallo", src:"Hello", pos:"intj", gender:null,
 note:"The most common informal greeting.",
 example:"A: Hallo! Wie geht's?\nB: Hallo! Gut, danke!",
 exampleSrc:"A: Hello! How's it going?\nB: Hello! Good, thanks!",
 funFact:"Only became common in German in the early 1900s."}

// Japanese example (kanji+furigana notation — MANDATORY for all Japanese content):
{type:"teach", trg:"先生(せんせい)", src:"teacher", pos:"noun", gender:null,
 note:"Used for teachers, doctors, lawyers, and respected professionals.",
 example:"A: 先生(せんせい)はどこですか？\nB: 先生(せんせい)は教室(きょうしつ)にいます。",
 exampleSrc:"A: Where is the teacher?\nB: The teacher is in the classroom.",
 funFact:"Literally means 'born before' (先 = before, 生 = born/life)."}
```
- `trg` = target language word. `src` = source language translation.
- `pos` = POS tag (verb, noun, adj, adv, prep, conj, pron, num, intj, part, aux). REQUIRED on new content.
- `gender` = grammatical gender (m, f, n, pl, null). REQUIRED for nouns/articles in gendered languages.
- `exampleSrc` replaces legacy `exampleEn`. Contains source-language translation of the example.
- `funFact` = etymology, cultural note, or memory hook. REQUIRED on all new teach cards.

**Japanese kanji+furigana notation (PP65):** ALL Japanese content uses kanji with inline furigana in parentheses: `漢字(ふりがな)`. Example: `大学(だいがく)で勉強(べんきょう)する`. Particles (は, が, を, に, で) and grammatical endings (です, ます) stay hiragana. Verb stems get kanji, conjugation stays hiragana: `食(た)べる`. This applies from A1 Unit 1 onward. See PP65 below.

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

### Japanese Kanji+Furigana Rule (PP65 — MANDATORY)
ALL Japanese teach card content uses kanji with inline furigana: `漢字(ふりがな)`. This applies to `trg`, `example`, and all target-language text in quiz steps. From A1 Unit 1 onward, no exceptions. Pure hiragana is WRONG for Japanese content.
- Content words (nouns, verb stems, adjectives): kanji+furigana. `先生(せんせい)`, `食(た)べる`, `大(おお)きい`
- Particles: always hiragana. `は`, `が`, `を`, `に`, `で`, `と`, `の`, `も`, `か`
- Grammatical endings: always hiragana. `です`, `ます`, `ました`, `ません`
- Compound verbs: `勉強(べんきょう)する`, `散歩(さんぽ)する`
- Rationale: This is how real Japanese works. Newspapers, textbooks, and children's books all use kanji with furigana. Pure hiragana makes word boundaries disappear and is harder to read. Owner-directed decision (D120, 2026-04-17).

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
1. CEFR distribution (PP51) | 2. PP8 all 5 leak types | 3. PP52 teach-before-use (full scan) | 4. PP48 step types | 5. PP49 no CEFR labels | 6. PP22c no em-dashes | 7. PP43 density (max 32 steps) | 8. board:true | 9. Sub-level consistency | 10. PP55 vocab completeness | 11. PP57 grammar completeness | 12. PP58 functions | 13. Synonym coverage | 14. PP56 unit count | 15. Exam readiness | 16. PP61 metalanguage in source language | **17. PP64 teach-then-test (every teach card quizzed)** | **18. PP65 Japanese kanji+furigana (all cards, all levels)**

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
9. **MANDATORY: Run `npm run build` after EVERY merge-conflict resolution, before pushing.** Root cause of the 2026-04-17 build outage (PRs #178–#180 all failed CI) was 32 Russian unit files shipping with literal `<<<<<<< HEAD` / `=======` / `>>>>>>> origin/main` markers embedded in source. `git status` showed "clean" because the markers were committed. Only `npm run build` catches this. Also run `grep -rE '^(<<<<<<<|=======|>>>>>>>)' src/` after any conflict resolution — must return zero.
10. **CI watch: after merging to main, run `gh run watch <id> --exit-status`** (or `gh run list --workflow="Build and Deploy to Mijndomein" --limit 1` to check). Do not declare work complete or write handoff text until main is green.

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

| Language | Format | Units | Teach Cards | Grammar | Status |
|----------|--------|-------|-------------|---------|--------|
| German v2 | v2 | 36 | 5,148 | 58 entries | **GOLD STANDARD.** All PP checks PASS. |
| German v2 (AR) | v2 | 36 | ~5,148 | 58 entries (AR) | Arabic source variant. B2 CEFR trAr gap (1,821). |
| Korean | v2 | 69 | 5,166 | 47 entries | COMPLETE. 100%+ of German. |
| Dutch | v2 | 89 | 5,106 | mock | COMPLETE. Grammar needs teacher-board rewrite. |
| French | v2 | 90 | 5,036 | 52 entries | COMPLETE. 98% of German. |
| Spanish | v2 | 92 | 5,124 | 53 entries | COMPLETE. 100% of German. |
| Italian | v2 | 36 | 5,013 | 51 entries | POLISHED. Foundations, grammar (51), interleaving, CEFR ref, dialogue scaling done. |
| Japanese | v2 | 36 | 4,978 | 54 entries | **FULLY VALIDATED.** PP65 complete, PP8 0/0, Foundations lock, notation tutorial, CEFR ref wired. |
| Chinese | v2 | 45 | 719 | 53 entries | **NEW (2026-04-17).** HSK 1-4 concept-driven (D125). Hanzi+pinyin notation. PP8 0/0, PP48 0/0. |
| Portuguese | v2 | 36 | 649+ | 50 entries | **NEW (2026-04-17).** Brazilian primary, EU notes. CEFR A1-B2. Nasal vowels, ser/estar, personal infinitive. PP8 0/0, PP48 0/0. |
| Russian | v2 | 36 | ~50 (U1-2 done) | 2 entries (placeholder) | **NEW (2026-04-17).** Cyrillic, 6 cases, aspect pairs, TRKI framework. U1 (greetings), U2 (numbers/age) complete. U3-36 stubs. |

**Grand total: ~32,600+ teach cards across 10 languages. Build passes.**
**Grammar modules: 470 entries across 10 languages (Chinese 53, Portuguese 50, Italian 51, Japanese 54, German 58, French 52, Spanish 53, Korean 47, Dutch mock, Russian 2 placeholder).**

### Build History (compact)

German v2 is COMPLETE. All phases done. Full detailed history in `docs/BUILD_STATUS.md`. Key milestones:
- **Phases 0-3**: Goethe word lists, 116 grammar constructs, story arcs, 6-6-12-12 allocation
- **A1+A2**: 12 units, 94 lessons. Fully audited.
- **B1+B2**: 24 units, 195 lessons. V1 salvage + new content. All PP checks PASS.
- **Density splits** (2026-04-07): 369→558 lessons. PP64 teach-then-test coverage added.
- **Arabic source** (2026-04-06-08): All 36 units translated, ~6,800 fixes, grammar/idioms/CEFR Arabic.
- **Mobile, dictionary, grammar, flashcards** (2026-03-30 - 2026-04-09): All features built and polished.
- **V2 upgrades** (2026-04-12-15): Korean/Dutch/French/Spanish/Italian/Japanese all V2. 7 languages live.
- **Japanese PP65 complete** (2026-04-17): All 348 batch files kanji+furigana. Full PP validation PASS. Beginner path audited.

### Known Blockers
1. **CEFR distribution imbalance** — French/Spanish/Korean still template-based (not concept-driven per PP56).
2. **CEFR B2 Arabic gap** — 1,821 B2 CEFR vocab entries have no `trAr` field. A1+A2+B1 complete (4,699/6,537).
3. **V1 archival — French DONE (2026-04-18).** French V1 moved to `.claude/archive/v1-legacy/units-french.js`, imports removed from `src/utils.js`. Remaining V1 still imported (`units-dutch.js`, `units-korean.js`, `units-german.js`, `units-spanish.js`) alongside V2. Do NOT archive the rest until the 43 gaps documented in `docs/V1_SALVAGE_STATUS.md` are added to V2 (Korean 2, Dutch 8, Spanish 9, German 24).
4. **REVIEW/NEW WORD edge cases** — `lwAtStart` ref fix deployed (2026-04-08). Needs browser testing.

> 25 previously tracked blockers have been resolved. See `docs/BUILD_STATUS.md` for full history.

---

## Next Priorities (updated 2026-04-17c)

> Chinese (45 units), Portuguese (36 units), Russian (36 units) all complete and merged (PR #175, #177, #178). V1 salvage audited (PR #179). 10 languages live.

### ACTIVE: V1 Salvage — fill 43 documented gaps then archive V1

**Precise next-agent task:** Add 43 teach cards to V2 so V1 can be archived without content loss. All gaps listed verbatim in `docs/V1_SALVAGE_STATUS.md`.

- **French V1 — DONE (2026-04-18).** Archived to `.claude/archive/v1-legacy/units-french.js`; imports removed from `src/utils.js`. Salvage checkers updated to read from archive path. Build passes.
- **Korean V1 (2 gaps)** — Add `감동하다` (to be moved/touched) and `혼란스럽다` (to be confused) as teach cards in a B1 emotions lesson (candidate: `src/data/korean-v2/_temp_b1gap_L31.js` — Mental States and Emotions).
- **Dutch V1 (8 gaps)** — B1 feelings: `gefrustreerd`, `verward`, `uitkijken naar`, `ongerust`, `gespannen`, `jaloers`, `de mislukking`, `België`. Add to an existing Dutch B1 feelings unit or create a small salvage unit.
- **Spanish V1 (9 gaps)** — B1 feelings: `frustrado/a`, `decepcionado/a`, `impresionado/a`, `confundido/a`, `satisfecho/a`, `celoso/a`, `tener ganas de`, `seguro/a de sí mismo/a`, `tenso/a`. Unit-11/12 (imperfect scene lessons) are thematically adjacent.
- **German V1 (24 gaps)** — Distribute: feelings (wütend, frustriert, zerstört, schlapp), colors (lila), clothing (der Gürtel), animals (der Löwe), travel (das Gepäck, das Ladegerät), professions (der Programmierer, der Feuerwehrmann, die Probezeit, die Gleitzeit), legal (das Bußgeld), compass (östlich), numbers (dreiunddreißig, neunundneunzig), B2 academic (bereuen, erörtern, die Erörterung), B2 idioms (Hals über Kopf, In Anlehnung an, Laut Angaben).

Re-verify at any time: `node scripts/check_v1_salvage_smart.cjs`.

After each language's gaps are filled: move its `units-{lang}.js` to `.claude/archive/v1-legacy/`, drop imports from `src/utils.js` (lines 7/9/11/13/15 and `_RAW_UNITS` on line 518), rebuild, verify app still loads.

### Polish Remaining
1. **A2 dialogue scaling** — Italian: 138 dialogues need 3+ turns. Japanese: 28 need 3+ turns.
2. **Italian PP8 hint leaks** — 7 remaining in batch files (common English words in hints).

### Feature Polish (deferred)
7. **Verb tables clickable** — `verb_table` forms don't use `universalHl()`. No tap-to-see, no colors.
8. **Idioms page search/filter** — 45 entries with no way to filter by level or search.
9. **German Foundations** — "Coming soon" placeholder. Needs at least alphabet/basics content.
10. **Arabic Foundations text** — Scope not yet defined.
11. **Smooth transitions** — Page fadeUp works. Lesson completion celebrations still TODO.

### Grammar Visualization (POST-LAUNCH)
- Visual sentence analysis mode, cases pack, grammar toggle, word-by-word breakdown

### Audio/TTS (deferred)
12. **Google Cloud TTS integration** — Provider chosen, deferred until content phases done.

### Content Quality
13. **Dutch grammar teacher-board rewrite** — Current content is mock/placeholder.
14. **CEFR B2 Arabic gap** — 1,821 B2 entries missing `trAr`.

### Premium Visual Overhaul (deferred)
15. **Design session with owner** — Benchmark apps, icon system, music/soundtrack, animations.

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
- **`docs/SESSION_HANDOFF_2026-04-17b.md`** — **LATEST HANDOFF.** Japanese PP65 complete. Full validation PASS. Next: A2 dialogue scaling, then new languages.
- **`docs/SESSION_HANDOFF_2026-04-17.md`** — Previous handoff. Italian+Japanese polish complete.
- **`docs/DECISION_LOG.md`** — All D-numbers indexed by topic (D1-D124).
- **`docs/BUILD_STATUS.md`** — Full build history per language (updated 2026-04-17).
- **`docs/PRODUCT_PLAN.md`** — Business model, monetization, premium features roadmap.

### Tier 2.5: Agent Infrastructure
- **`docs/agents/AGENT_CONTENT_RULES.md`** — Linguistic expert persona + all content rules. Copy into EVERY content agent prompt.
- **`docs/agents/AGENT_STORY_RULES.md`** — Master playwright persona + story writing rules. Copy into EVERY story agent prompt.
- **`docs/agents/AGENT_TRANSLATION_RULES.md`** — Translation + cultural adaptation rules for source-to-target pipelines.
- **`docs/agents/FORMAT_TEMPLATE.js`** — 2KB format reference showing every step type. Agents read THIS, not 10K-line unit files.
- **`docs/agents/RULES_RATIONALE.md`** — Why each Agent Deployment Rule exists.

### Tier 3: German-specific
- **`docs/german/GRAMMAR_CONSTRUCT_INVENTORY.md`** — 116 grammar constructs (PP57 master reference).
- **`docs/german/STORY_BIBLE.md`** — Characters, story arcs, comedy situations.
- **`docs/german/episode-scene-breakdowns.md`** — 144-scene production bible (150KB). All art direction + Midjourney prompts.
- **`docs/german/communicative-functions-mapping.md`** — 84 communicative functions mapped to units (PP58 reference).

### Tier 3: Reusable reference
- **`docs/reference/FK_DECISION_FRAMEWORK.md`** — 6-step framework for Foundations content design. Essential for new languages.
- **`docs/reference/CURRICULUM_DESIGN_PATTERNS.md`** — Seed/harvest pedagogy, concept-driven unit counts, lesson templates. Extracted from Korean build.
- **`docs/reference/DICTIONARY_EXPANSION_CHECKLIST.md`** — 6-item per-language dictionary expansion checklist.
- **`docs/reference/WORD_TAG_TAXONOMY.md`** — POS tag definitions and taxonomy.
- **`docs/reference/LANGUAGE_INTEGRATION_PIPELINE.md`** — Pipeline for adding a new language.
- **`docs/reference/MARKET_ANALYSIS_2026.md`** — Language pair demand data + 7-target thesis.

### Tier 4: Archive
- **`docs/archive/`** — All previous session handoffs (2026-04-04 through 2026-04-15b) + superseded docs. Historical reference only.

---

## Session Startup

1. Read this file (CLAUDE.md).
2. Read `docs/SESSION_HANDOFF_2026-04-17.md` for latest context and exact next-agent instructions.
3. Check memory files (`~/.claude/projects/.../memory/`).
4. Before audits: follow Rule A (grep actual code, never trust docs alone).
5. Before content: re-read Pipeline Rules above.
6. Run `npm run build` to verify codebase compiles before making changes.

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
