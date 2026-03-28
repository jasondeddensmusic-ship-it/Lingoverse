# Session Handoff — 2026-03-28d (P5 PP8 Fixes + Strategic Planning)

> Next agent: Read this ENTIRE file before doing anything. Then read CLAUDE.md.

---

## What Was Done This Session

### 1. P5 PP8 Content Fixes — COMPLETE (~307 violations fixed)

Two rounds of 4 Sonnet agents each scanned and fixed PP8 leaks across all 36 German v2 units.

**Round 1 (from handoff targets):**
- ~149 hint leaks fixed across 22 units (hints naming answer words)
- ~35 script/pattern leaks fixed (equalized MC option lengths)
- 5 visual leaks fixed (answer removed from question text)

**Round 2 (from confirmation scan):**
- ~22 more leaks in U1-U12 (article/negation hints, visual leaks)
- ~19 more leaks in U15-U24 (grammar term hints, visual leaks in fb sentences)
- ~37 more leaks in U25-U30 (drag_fill hints naming blanks, morpheme reconstruction)
- ~40 more leaks in U31-U36 (TeKaMoLo decode hints, drag_fill blank naming)

**Files changed:** 35 unit files, 344 insertions, 344 deletions (hint-only and question-only edits).

**Build:** PASS. Zero console errors. App loads and renders all content correctly.

### 2. Strategic Planning — Decisions Locked In

Owner interview produced 5 locked-in strategic decisions:

1. **Story mode = optional toggle.** Never baked into lesson flow. Feature flag in settings.
2. **V1 → V2 in place.** Start from existing V1 content, expand outward. Never rebuild from scratch and salvage afterwards.
3. **Visuals = free or not at all.** Stable Diffusion via Google Colab (free tier). Owner's GPU (GTX 1650 Super, 4GB) too weak for local SDXL. Must prove feasibility within 1 week or story layer is scrapped.
4. **Certification-grade = the only bar.** Every language gets full exam word + grammar coverage.
5. **German is the template.** Same planning rigor (concept catalogue, word lists, grammar mapping) adapted per language.

---

## The Grand Plan — VerumLingua 2026

### Phase 1: German Perfect (this week)
- PP61: Translate ~47 B2 tips + ~21 verb notes + ~10 A1/A2 stray intros to English
- PP52: Teach-before-use audit across all 36 units
- PP48: Step type validation (fb=single blank, drag_fill=multi-blank)
- Story toggle: Add feature flag so story cards are optional in settings
- German becomes the gold standard template

### Phase 2: Visual Pipeline Feasibility (1 week)
- Set up Stable Diffusion XL on Google Colab (free)
- Design style prompts for Verumius candy-gloss aesthetic
- Train a LoRA on character designs (Verumius, Hildi, Heinrich, etc.)
- Generate 10-20 test images
- Decision gate: aesthetic match + consistency + speed
  - YES → Story layer stays, proceed to batch generation
  - NO → Story layer scrapped, pure teaching focus

### Phase 3: V1 In-Place Upgrade (per language, ~2 weeks each)
Order: Korean → Dutch → French → Spanish

For each language:
1. Audit existing V1 content (what's there, what's missing, exam word list gaps)
2. Concept catalogue (map official exam words + grammar to units)
3. Enrich existing ~1,300 teach cards (add POS, gender, funFact)
4. Build ~3,500 NEW teach cards (fill exam coverage gaps)
5. Add new lessons/quizzes around the new vocab
6. PP8/PP52/PP48 audits (certification-grade validation)
7. Story cards (ONLY if Phase 2 passed the visual gate)

### Phase 4: Visual Batch Generation (if Phase 2 passed)
- Character avatars first (5-8 per language)
- Poses + expressions next (20-40 per language)
- Full scenes last (100-150 per language)
- All via Colab, scripted, batch processed

### Timeline

| Week | Milestone |
|------|-----------|
| This week (W1) | German v2 perfect (PP61 + audits + story toggle) |
| W2 | Stable Diffusion feasibility test |
| W3-W4 | Korean V1 upgrade |
| W5-W6 | Dutch V1 upgrade |
| W7-W8 | French V1 upgrade |
| W9-W10 | Spanish V1 upgrade |
| Ongoing | Visual generation (if feasible) |

---

## V1 Content Audit (Raw Numbers)

| Metric | Korean | Dutch | French | Spanish | German V1 |
|--------|--------|-------|--------|---------|-----------|
| Teach cards | 1,336 | 1,301 | 1,092 | 1,310 | 1,444 |
| MC steps | 2,294 | 1,182 | 1,506 | 1,357 | 1,553 |
| FB steps | 1,038 | 917 | 1,137 | 928 | 753 |
| Drag_fill | 1,180 | 378 | 206 | 351 | 347 |
| Match | 445 | 365 | 373 | 279 | 274 |
| Tips | 323 | 316 | 204 | 222 | 273 |
| POS tags | 0 | 0 | 0 | 0 | 68 (partial) |
| funFact | 0 | 0 | 0 | 0 | 0 |
| Gender tags | 0 | 0 | 0 | 0 | 0 |

All V1 teach cards use old format (nl/en). The normalization layer handles nl↔trg and en↔src at runtime, but POS/gender/funFact must be added manually.

Gap to certification grade: each language needs ~3,500-4,000 NEW teach cards plus enrichment of all existing ones.

---

## Current State

| Language | Format | Units | Lessons | Steps | Teach Cards | Status |
|----------|--------|-------|---------|-------|-------------|--------|
| Korean | v1 | 30 | 330 | 6,953 | 1,336 | Pending V1 in-place upgrade |
| Dutch | v2 old | 30 | 261 | ~5,825 | 1,301 | Pending V1 in-place upgrade |
| German v1 | v1 | 30 | 259 | ~4,941 | 1,444 | Being replaced by v2 |
| **German v2** | **v2 new** | **36** | **~319** | **~8,300** | **~5,050** | **PP8 DONE. PP61/PP52/PP48 pending.** |
| French | v1 | 30 | 258 | ~4,781 | 1,092 | Pending V1 in-place upgrade |
| Spanish | v1 | 30 | 258 | ~4,739 | 1,310 | Pending V1 in-place upgrade |
| Arabic | skeleton | 5 | 29 | — | — | Deferred |

---

## Commits This Session

```
[uncommitted] P5 PP8 Content Fixes: ~307 hint/script/visual leaks fixed across all 36 units
```

Previous session commits (already pushed):
```
4bd4fe8 Session handoff: P4 story arc + PP8 position fix + tip card engine fix
8f6b2a8 Tip card engine fix: forceGrammar colors articles in tip/deepDive text
c96b317 PP8 Position Bias Fix: shuffle MC answers across all 36 units
```

---

## Immediate Next Steps (Phase 1 execution)

1. **Commit P5 PP8 fixes** (this session's work)
2. **PP61: Translate B2 tips** (~47 tips + ~21 verb_table notes in U25-U36)
3. **PP61: Fix A1/A2 stray intros** (~10 intros in U5,7,9,10,11,12)
4. **PP52: Teach-before-use audit** (all 36 units)
5. **PP48: Step type audit** (all 36 units)
6. **Story toggle feature flag** (code change in LessonEngine.jsx + settings)
7. **Update CLAUDE.md** with new strategic decisions

---

## Agent Deployment Rules (CRITICAL)

1. **MAX 4 agents at a time. NEVER MORE.**
2. Every content agent gets `docs/AGENT_CONTENT_RULES.md` copied into its prompt.
3. Every story agent gets `docs/AGENT_STORY_RULES.md` copied into its prompt.
4. Agents read per-unit files (`src/data/german-v2/unit-NN.js`), NOT the full re-export.
5. Use Sonnet for validation/fixes, Opus only for creative content.
6. **ALWAYS run `npm run build` after every file edit.**

---

## Session Startup Checklist

1. Read this handoff file
2. Read `CLAUDE.md` (single source of truth)
3. Run `npm run build` to verify everything compiles
4. Next priority: Commit P5 fixes, then start PP61 B2 tips translation
