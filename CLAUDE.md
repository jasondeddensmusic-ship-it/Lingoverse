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
| `japanese-v2/_batch*_u*_L*.js` | **~348 batch density files.** Imported into unit lessons arrays. Contains ~4,375 teach cards. PP65 kanji+furigana conversion COMPLETE (2026-04-17, PR #170). |
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

### Content Authenticity (2026-04-19)

- **PP66 — No Filler Coverage.** Placeholder strings `"(review)"`, `"(taught)"`, `"(see above)"`, `"(TBD)"`, `"(review pair)"` are forbidden in any user-facing field (`src`, `en`, `exampleSrc`, `note`, `hint`, `funFact`, `text`, `desc`). Coverage added to satisfy PP64 must reuse the teach card's actual `src`/`en` translation. Detection: `scripts/check_filler.cjs` (grep pre-commit). Any match → build fails.
- **PP67 — Production-Mode Minimum.** Every unit must have at least one production-mode quiz (`fb` or `drag_fill` where the answer is the target-language form) per 10 teach cards. Pure-recognition units (`mc` picking English translations only) fail this rule. Rationale: testing effect + output hypothesis — recognition does not build production fluency. Detection: `scripts/pp67_audit.cjs`.
- **PP68 — Example-Vocab Integrity (automated).** Every content word ≥3 chars in a teach card's `example` field must be (a) the card's own `trg`, (b) taught in an earlier teach card in the same or a prior unit, (c) on the language's function-word list, or (d) a flagged transparent cognate. Validator: `scripts/pp63_audit.cjs` (the script name preserves continuity with PP63 which was the pre-automation principle). Lifts PP63 from aspiration to mechanical rule.

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
15. **Genuine content, not validator theater (2026-04-19).** Agents assigned to fix validator violations must produce pedagogically genuine content. Forbidden patterns every agent prompt must explicitly prohibit: `src:"(review)"` or any filler placeholder (PP66); `___` substitution in hints that merely removes a leaked word without rewriting the guidance; match pairs whose `src` is merely "see above"; rewrites that introduce new filler. Violation = reject agent output, re-dispatch with stricter prompt.
16. **Bounded retry (2026-04-19).** After 3 consecutive failures on the same task (agent edit → validator/build fails → revert), STOP. Write a summary to `docs/BLOCKED.md` with agent ID, task, failure modes observed, and suggested next approach. Move on to the next queue item. Do not loop.
17. **Agents never self-validate (2026-04-19).** The author-agent that produces content cannot be the validator that approves it. Content flows through Rule G (dual-linguist) before merge. Validator agents are fresh spawns with non-identical prompts.
18. **PP24 pre-check is mandatory in every content-agent prompt (2026-04-20).** Every agent prompt that writes new teach cards must include: "Grep each target word across the whole language corpus (`grep -rE 'trg:\"[^\"]*<word>[^\"]*\"' src/data/<lang>-v2/`). If >0 hits found, substitute with the provided fallback list. Never re-teach a word that already has a teach card elsewhere." Skipping this step led to a duplicate-heavy Chinese lesson that had to be reverted.
19. **PP55 audits have false positives (2026-04-20).** The grep-based audit misses teach cards with article-prefixed `trg:` (e.g. "o café" not matched when searching for bare "café"). Every agent prompt must say: "Verify each word is actually missing BEFORE writing a teach card for it. If the PP55 audit says X is missing but grep finds it, trust grep." This saved ~40% of one Portuguese batch from becoming duplicates.
20. **Lessons array boundary discipline (2026-04-20).** Agents occasionally add `],` in the wrong place, closing the lessons array prematurely. Every content-agent prompt must say: "CRITICAL: Append the new lesson INSIDE the `lessons:[...]` array, BEFORE the closing `]`. Verify with `npm run build` before reporting success." This bit once on a Chinese unit-16 commit that had to be amended.
21. **Agent self-report is insufficient proof (2026-04-20).** Agents sometimes report "both validators pass" while the build actually fails. Main session must ALWAYS run `npm run build` after aggregating agent output, before committing. `validate_all.cjs` and `pp63_audit.cjs` do not catch JS parse errors.

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
11. **Validator theater detection (2026-04-19).** Before every commit, grep for filler: `grep -rE '\(review\)|\(taught\)|\(TBD\)|\(see above\)' src/` — must return zero. Build fails otherwise via `scripts/check_filler.cjs`.
12. **Idempotent auto-fix scripts (2026-04-19).** Every auto-fix script under `scripts/` must be idempotent: running it twice produces the same result as running it once. Before adding coverage, check if coverage already exists. Before injecting a rewrite, check if the content is already compliant. Applies to `pp64_fix.cjs`, `fix_korean_pp8*.cjs`, and any future `*_fix.cjs`.

### Rule D: Edit Safety
1. Use `\n` escape in JS strings, never literal newlines. Verify build after edits.
2. Max 2 agents on same file, non-overlapping ranges with 50+ line buffer.
3. Post-edit: check quote parity, no unterminated strings, no orphaned commas.

### Rule E: Audit Standards
1. Audit agents get FULL pipeline context. Agent without full rules = D109-class errors.
2. Check STRUCTURE before CONTENT. First: CEFR distribution, unit sizing. Then: PP8, PP52, PP48.
3. After adding new CEFR sub-levels, verify unit map in browser. Don't simplify `getCefrInfo()`.
4. **Truth-source ranking (2026-04-19).** When sources disagree, this is the priority: (1) code/validator output — runtime truth; (2) this CLAUDE.md; (3) `docs/vision/` — strategic direction; (4) `docs/DECISION_LOG.md` — historical context; (5) `docs/plans/` — suggested roadmaps; (6) memory files — user preferences; (7) agent judgment — last resort. Higher beats lower. An agent never overrides code with its own reasoning.

### Rule F: Content Philosophy
1. Opus + Sonnet co-write and cross-validate. Neither ships without the other's sign-off.
2. Salvage v1 content. Check verb tables, tip cards, dialogues before writing from scratch.
3. Build it right the first time. The audit is a safety net, not a cleanup crew.
4. This is a real product. Every card, quiz, and lesson must be certification-grade.

### Rule G: Dual Linguistic Validation (2026-04-19)

Replaces "native-speaker review" as a bottleneck. The owner speaks 8+ languages but not all 10 the app teaches; human native-speaker gates would block autonomy. Two AI linguist agents take the role.

1. **G1.** Any new language content (teach cards, examples, story dialogue, funFacts, tip deepDives) produced by one agent must be reviewed by a SECOND independent agent before merge.
2. **G2.** The two validators run IN PARALLEL, cold, never sequentially. Both see the same content without seeing each other's output.
3. **G3.** Validator A uses `docs/agents/LINGUIST_VALIDATOR_A.md` (grammar + accuracy + PP-rule compliance lens). Validator B uses `docs/agents/LINGUIST_VALIDATOR_B.md` (register + idiomaticity + native-feel lens). Both prompts include the complete PP ruleset and the cross-reading instruction: "Assume your sibling validator may catch what you miss; be conservative about approving."
4. **G4.** If either flags issues, the original author-agent gets ONE revision turn. If either still flags after that revision, the content enters `docs/BLOCKED.md` with both linguist reports for owner review.
5. **G5.** The author-agent and the two validator-agents are three distinct fresh spawns. Never reuse the author as validator (Rule B17).

### Rule H: Autonomy Protocol (2026-04-19)

1. **H1.** The single source of "what to do next" is `docs/AUTONOMOUS_QUEUE.md`. Items are pre-sorted by priority. An autonomous agent pops the top item, executes it, commits, pushes, watches CI, marks it DONE, and moves to the next.
2. **H2.** Every queue item has: `id`, `priority`, `description`, `preconditions` (files exist, no active agent on target), `acceptance-criteria` (validator output, spot-check spec), and optional `STOPS-ON` (external dependency that blocks autonomy).
3. **H3.** If an item has `STOPS-ON: <reason>`, move it to `docs/BLOCKED.md` and continue to the next item. Never wait on external input; skip.
4. **H4.** The autonomous loop TERMINATES when: (a) the queue is empty, (b) every remaining queue item has a `STOPS-ON` blocker, (c) three consecutive items fail despite retries (per Rule B16), or (d) build goes red on main and doesn't recover within the bounded retry window.
5. **H5.** Every agent spawned during an autonomous run writes a start/end entry to `docs/AGENT_ACTIVITY.log`: timestamp, agent-id, task, outcome. This gives the owner a single audit trail.
6. **H6.** Agents MUST NOT spawn sub-agents recursively. Only the main session spawns agents.
7. **H7.** Parallel agents MUST NOT edit the same file. The main session maintains a file-lock manifest for the duration of a batch — an agent attempting to edit a locked file aborts.
8. **H8.** Before starting an autonomous loop, regenerate the queue: `node scripts/generate_queue.cjs`. This scans validator output, PP63/PP67 audits, and polish-matrix gaps to produce a fresh, prioritized queue.

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
| German v2 | v2 | 36 | 5,170 | 58 entries | **GOLD STANDARD.** All PP checks PASS. |
| German v2 (AR) | v2 | 36 | ~5,170 | 58 entries (AR) | Arabic source variant. B2 CEFR trAr gap (1,821). |
| Korean | v2 | 69 | 5,331 | 47 entries | COMPLETE. PP8/PP63/PP67 all clean. |
| Dutch | v2 | 89 | 5,290 | 36 entries | COMPLETE. Grammar rewritten to production quality (NT2-aligned, PR #205). PP8/PP63/PP67 all clean. |
| French | v2 | 90 | 5,176 | 52 entries | COMPLETE. PP8/PP63/PP67 all clean. |
| Spanish | v2 | 92 | 5,302 | 53 entries | COMPLETE. PP8/PP63/PP67 all clean. |
| Italian | v2 | 36 | 5,146 | 51 entries | POLISHED. Foundations, grammar (51), interleaving, CEFR ref, dialogue scaling done. Wired 312 orphan batch imports 2026-04-21 (PR #294). |
| Japanese | v2 | 36 | 5,076 | 54 entries | **FULLY VALIDATED.** PP65 complete. Wired 33 orphan JEXP imports 2026-04-21 (PR #294). Foundations lock, notation tutorial, CEFR ref wired. |
| Chinese | v2 | 45 | 920 | 53 entries | **VALIDATED.** HSK 1-4 concept-driven (D125). Hanzi+pinyin notation. PP8/PP48/PP63/PP67 all clean. |
| Portuguese | v2 | 36 | 851 | 50 entries | **VALIDATED.** Brazilian primary, EU notes. CEFR A1-B2. PP8/PP48/PP63/PP67 all clean. |
| Russian | v2 | 36 | 737 | 50 entries | **VALIDATED.** Cyrillic, 6 cases, aspect pairs, TRKI framework. All 36 units complete. PP8/PP48/PP63/PP67 all clean. Grammar: 50 real entries (A1-B2, TRKI-aligned). |

**Grand total: 39,038 teach cards across 10 languages (runtime count via `scripts/_runtime_count.mjs` — what users actually see in the app). Build passes.**
**Authoritative validator (2026-04-22):** `scripts/validate_runtime.mjs` — uses ESM dynamic import to walk the actual shipped lesson tree. Validates all 39,038 cards (was 7,128 under the text-based `validate_all.cjs`). Reports PP8/PP43/PP48/PP64/PP67 at unit+lesson+step granularity. Use this for every commit going forward.
**Legacy validator:** `scripts/validate_all.cjs` reads files as text and does NOT follow JS imports. Kept for CI speed / spot-checks on a single file, but do not treat its "PASS" as authoritative.
**Grammar modules: 521 real entries across 10 languages (Chinese 53, Portuguese 50, Italian 51, Japanese 54, German 58, French 52, Spanish 53, Korean 47, Dutch 36, Russian 50). Zero placeholder modules remaining.**
**Validator state (2026-04-22 — runtime):** **ALL 10 languages PASS PP8/PP43/PP48/PP64/PP67 at runtime level across all 39,038 cards.** Initial sweep after blind-spot fix surfaced 6,721 violations; cleared in three PRs (#297 validator, #298 mechanical, #299 coverage). See `docs/SESSION_HANDOFF_2026-04-22b.md`.

> Note: Previous CLAUDE.md totals (~32,600+) counted teach cards in batch files PLUS their imports into main unit files — essentially double-counting. The per-language numbers above reflect the actual corpus as reported by `node scripts/_runtime_count.mjs`.

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
1. **CEFR distribution imbalance** — French/Spanish/Korean still template-based (not concept-driven per PP56). Not blocking release; scheduled as PP56-AUDIT items in `docs/AUTONOMOUS_QUEUE.md`.
2. **CEFR B2 Arabic gap** — 1,821 B2 CEFR vocab entries have no `trAr` field. A1+A2+B1 complete (4,699/6,537). Unblocked pending content session.
3. **V1 archival — COMPLETE (2026-04-18).** All five V1 unit files archived; 43 gaps salvaged; 7 MB bundle reduction. See COMPLETE block below.
4. **REVIEW/NEW WORD edge cases** — `lwAtStart` ref fix deployed (2026-04-08). Needs browser testing.
5. **Japanese PP67 soft flags — RESOLVED (2026-04-20).** All languages PP67 0 under-production even with batch-file expansion (`--include-batch`). Italian's 1 remaining unit fixed in PR #291.
6. **Italian accent restoration — RESOLVED (2026-04-20).** `scripts/restore_italian_accents.cjs` shipped. ~805 stripped accents restored across 208 batch files (PRs #286/#287/#289).
7. **PP58 F11 Resolve Disputes — CLOSED (2026-04-20).** PT + ZH F11 lessons added (PR #288). DE + IT have vocabulary scattered across existing units (no dedicated lesson needed).

> 25+ previously tracked blockers resolved. See `docs/BUILD_STATUS.md` for full history.

---

## Next Priorities (updated 2026-04-19)

> 10 languages live. All PP8/PP43/PP48/PP63/PP64/PP67 clean across all languages. See `docs/SESSION_HANDOFF_2026-04-19.md` for full details.

> **Unmerged on branch `claude/sad-cohen-32e111` (pending PR):** 8 feature commits — SRS wiring, Verb table clickable, Dutch grammar, Verumius story arcs (Spanish), Cognate Hub cards, lesson celebration screen, placement quiz integration. These are built and tested but not yet on main.

### COMPLETE: V1 Salvage (2026-04-18)

All five V1 unit files (French, Dutch, Korean, German, Spanish) archived to `.claude/archive/v1-legacy/`. 43 documented gaps added to V2 before archival:

- **French V1 — ARCHIVED.** 914/914 covered. No gaps; archived directly.
- **Korean V1 — ARCHIVED.** 2 gaps (감동하다, 혼란스럽다) added to `korean-v2/_temp_b1gap_L12.js`. Smart match: 1187/1187 = 100%.
- **Dutch V1 — ARCHIVED.** 8 gaps (gefrustreerd, verward, ongerust, gespannen, jaloers, uitkijken naar, de mislukking, België) added to `dutch-v2/_temp_b1gap_L10.js` and `_temp_b1gap_L20.js`. Smart match: 1136/1136 = 100%.
- **Spanish V1 — ARCHIVED.** 9 gaps (frustrado, decepcionado, impresionado, confundido, satisfecho, celoso, tener ganas de, seguro de sí mismo, tenso) added to `spanish-v2/_temp_b1gap_L04.js`. Smart match: 1250/1250 = 100%.
- **German V1 — ARCHIVED.** 23 gaps (feelings, colors, clothing, animals, travel, professions, civic, numbers, B2 academic, B2 idioms) added as new lesson `german-v2/_salvage_v1.js` wired into Unit 35 "Prüfung B2". Smart match: 1210/1343 = 90.1%. Residual 133 items are documented pedagogical pattern strings (grammar annotations, formula placeholders like "Er/Sie wohnt in...", ASCII transliterations) per V1_SALVAGE_STATUS.md policy — not teachable vocabulary.

Impact: index bundle shrank 7 MB (47,557 KB → 40,439 KB) from dead-code elimination. Smart-matcher checker upgraded with unicode-escape decoding and Spanish `/a` gender-pair support so audits remain meaningful post-archival.

Re-verify at any time: `node scripts/check_v1_salvage_smart.cjs` (reads V1 from `.claude/archive/v1-legacy/`).

### Polish Remaining
1. **A2 dialogue scaling** — Italian: 138 dialogues need 3+ turns. Japanese: 28 need 3+ turns.

**Validator state (2026-04-20):** **All 10 languages PASS all critical checks (PP8/PP43/PP48/PP63/PP64/PP67).**

**PP58 communicative-function closures (session 2026-04-19/20):**
- F14 Make appointments (A1) — 10/10 ✓
- F15 Fill in forms (A1) — 10/10 ✓
- F17 Express ability (A1) — 10/10 ✓
- F8 Write informal letters (A2) — 10/10 ✓
- F22 Handle admin situations (B1) — 9/9 ✓
- F21 Write personal significance (B2) — 9/9 ✓
- F11 Resolve disputes (B2) — 5/6 + NL partial

**PP55 vocabulary closures (session 2026-04-19/20):** B1/B2 civic + A2 mental verbs now 10/10 across all languages. Major A1 gaps closed for PT/RU/ZH/JA. ~+800 teach cards added total across the session.

### Feature Polish (in-flight on sad-cohen-32e111)
7. **Verb tables clickable — DONE (2026-04-19, unmerged).** Forms now use POS-colored tap-to-see via `universalHl()`. Commit: `2d5c69a`.
8. **Idioms page search/filter — DONE.** Search input + level filter chips already implemented in `src/pages/IdiomsPage.jsx:97-117`. Queue doc was stale.
9. **German Foundations — DONE (2026-04-08).** Full content exists in `src/data/foundations.js` (alphabet, pronunciation, vowels, consonants, umlauts, articles, gate quiz). Not a "coming soon" placeholder.
10. **Arabic Foundations text** — Scope not yet defined. Still TODO.
11. **Lesson completion celebrations — DONE (2026-04-19, unmerged).** Confetti + streak celebration screen added. Commit: `1b768cd`.

### Grammar Visualization (POST-LAUNCH)
- Visual sentence analysis mode, cases pack, grammar toggle, word-by-word breakdown

### Audio/TTS (deferred)
12. **Google Cloud TTS integration** — Provider chosen, deferred until content phases done.

### Content Quality
13. **Dutch grammar teacher-board rewrite — DONE (2026-04-19, unmerged).** 36 real NT2-aligned entries replacing old mock stubs. Commit: `151684b`.
14. **CEFR B2 Arabic gap** — 1,821 B2 entries missing `trAr`. Still open.

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
- **`docs/SESSION_HANDOFF_2026-04-23d.md`** — **LATEST HANDOFF.** All 4 audit layers at zero (runtime PP-rule + structural + MC quality + new teach-content). Shipped 4 PRs (#317-#320): Korean examples, Japanese PP67 polish, queue hygiene, Spanish funFacts. Remaining work: dialogue scaling + Korean phonetic backfill. Read this FIRST.
- **`docs/SESSION_HANDOFF_2026-04-23c.md`** — Milestone: runtime PP-rule validator reports zero violations across all 10 languages and 39,038 teach cards. PRs #301-#315.
- **`docs/SESSION_HANDOFF_2026-04-23b.md`** — Extended autonomous sweep, 11 PRs (#301–#311). New validators added.
- **`docs/SESSION_HANDOFF_2026-04-23.md`** — Early-morning snapshot. Superseded by …23c.
- **`docs/SESSION_HANDOFF_2026-04-22b.md`** — Prior handoff. Runtime validator shipped (PR #297), PP8/PP43/PP48 cleared (PR #298), PP64/PP67 coverage (PR #299).
- **`docs/SESSION_HANDOFF_2026-04-22.md`** — Prior handoff documenting the validator blind spot discovery.
- **`docs/SESSION_HANDOFF_2026-04-20d.md`** — Prior handoff. 38 PRs shipped (#255–#292). +648 inline teach cards. Italian accent restoration. F11 closures. Code organization planning.
- **`docs/SESSION_HANDOFF_2026-04-20c.md`** — Earlier snapshot. 17 PRs. +538 cards.
- **`docs/SESSION_HANDOFF_2026-04-20b.md`** — Earlier handoff. 6 PRs shipped. +173 teach cards.
- **`docs/SESSION_HANDOFF_2026-04-20.md`** — Earlier handoff. 41 PRs shipped (#213–#253). +538 teach cards. 7 PP58 function closures.
- **`docs/SESSION_HANDOFF_2026-04-19.md`** — Earlier handoff. PP63/PP67/PP64 all clean. 8 feature PRs (SRS, placement quiz, Verumius Spanish).
- **`docs/SESSION_HANDOFF_2026-04-17b.md`** — Previous handoff. Japanese PP65 complete. Full validation PASS.
- **`docs/DECISION_LOG.md`** — All D-numbers indexed by topic (D1-D124).
- **`docs/BUILD_STATUS.md`** — Full build history per language (updated 2026-04-19).
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
2. Read `docs/SESSION_HANDOFF_2026-04-19.md` for latest context and exact next-agent instructions.
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
14. **Validator green is the floor, not the ceiling.** Passing automated rule checks is necessary but not sufficient for certification-grade quality. Comprehensible input at i+1, retrieval variety, cultural depth, and pedagogical authenticity cannot be measured by scripts. Don't confuse a green validator with a finished product.
15. **Retrieval beats recognition.** Testing effect (Roediger & Karpicke) and output hypothesis (Swain) are settled science: production-mode practice drives L2 retention far more than recognition. Every unit leans toward fb/drag_fill with target-language answers, not just mc with English options.
16. **Don't game the metric.** Filler quiz coverage, `___` hint substitutions, `"(review)"` stand-in translations — any shortcut that passes a validator without improving learning outcomes undermines the whole system. The metric exists to measure learning; gaming it corrupts the signal.
17. **Autonomy requires a queue.** Rules constrain; validators verify; the `docs/AUTONOMOUS_QUEUE.md` drives. An agent with only rules can't know what to do next. An agent with a queue runs until the queue is empty or every remaining item hits a documented external blocker.
18. **Two linguist agents beat one.** Every content change by one agent is cross-read by a second, independently-prompted linguist agent before it merges. Native-speaker review is not a bottleneck we wait on — dual-AI-linguist validation is the production gate.
