# VerumLingua — Master TODO

> Living document. Check items off as they're completed. Last updated: 2026-03-26.

---

## Rehaul Features Scorecard

| Feature | Vision Spec | Actual State |
|---------|-------------|-------------|
| 2-bubble word cards | ✅ Defined | ✅ Working (board-mode renderer) |
| Fun info on every card | ✅ Required | ✅ 1,450/1,450 have funFact |
| POS tags on every card (P59) | ✅ Required | ❌ 0/1,450 — not started |
| Gender tags | ✅ Required | ⚠️ 61/1,450 — some nouns only |
| Gender coloring (article+noun) | ✅ Required | ✅ Working (when gender field exists) |
| Story arc per unit | ✅ Required | ⚠️ 113 cards exist, no cinematic mode |
| Visual novel renderer | ✅ Required | ❌ Not built |
| Character sprites (SVG) | ✅ Required | ❌ Not created |
| Midjourney scene art | ✅ Required | ❌ 65 art slugs, 0 actual images |
| Interleaved lesson flow | ✅ Required | ✅ Story/vocab/grammar/quiz pattern present |
| Language-specific settings | ✅ Required | ❌ Not built |
| Vocab-only lessons | ✅ Required | ❌ All lessons mix teach+quiz |
| Quiz English translations | Not in vision | ✅ 573 sSrc translations |
| trg/src field format | ✅ Required | ✅ Done for German v2 |
| Normalization layer | ✅ Required | ✅ Working |

---

## 1. Engine / Infrastructure

- [ ] **POS/gender tag infrastructure**: auto-tagger script, apply to all 1,450 German v2 teach cards. Blocks color system.
- [ ] **Visual novel / cinematic renderer**: scene backgrounds, character sprites, mode switching (cinematic ↔ candy bubbles). New components needed.
- [ ] **Audio/TTS system**: select provider (ElevenLabs/Google/Azure/Polly), generate audio for story cards, assign speaker voices.
- [ ] **Navigation redesign**: city explorer (isometric maps), story path, flowing timeline. Currently old grid view.
- [ ] **Spaced repetition algorithm**: decide SM-2 vs FSRS vs custom for review mode.
- [ ] **Art asset pipeline**: WebP optimization, responsive sizing, sprite sheet generation, CDN/hosting decision.
- [ ] **KOREAN_DICT extraction**: hardcoded in verumlingua.jsx, needs per-language module.
- [ ] **RTL lesson card styling**: Arabic RTL incomplete.
- [ ] **Word popup redesign**: BottomSheet (mobile) / Modal (desktop), tabbed WordBubble.
- [ ] **White screen crash**: reported on production word click (Korean), not reproducible in dev.

## 2. German Content

- [ ] **V1 salvage mining**: 12 agents grep V1 for reusable content per unit (1,444 teach cards, 1,800 quiz steps, 160 tips, 38 verb tables).
- [ ] **V1 salvage validation**: Opus agents decide TAKE/MERGE/SKIP per item.
- [ ] **A1 Goethe coverage gaps**: 412 missing words (51% coverage). Units U1-U6 need gap-filling.
- [ ] **B1 build (U13-U24)**: 12 units, 33 grammar constructs, 1,843 Goethe B1 words. Plan: `docs/GERMAN_MASTER_BATCH_PLAN.md`.
- [ ] **B2 build (U25-U36)**: 12 units, 33 constructs. No official Goethe B2 list — need telc alternatives.
- [ ] **Story arc rewrite**: Netflix-quality narrative across all 36 units. Real emotions, humor, character growth.
- [ ] **Character arc fixes**: 3/6 character arcs failed verification, 6 priority fixes documented.
- [ ] **Concept registry**: placeholder only, needs to be built during rehaul.

## 3. Settings Panel / UI

- [ ] **Full settings page in profile**: only in-lesson quick access exists.
- [ ] **Understripe function dropdown**: CSS prototyping needed.
- [ ] **Bold/dotted underline/italics controls**: vision doc specifies, not built.
- [ ] **Korean honorific level toggles**: requires morphological verb analysis.
- [ ] **German case toggles**: UI exists but posKeys are empty (needs syntactic parsing).
- [ ] **Korean koreanHl() integration**: separate from per-language grammar filter system.
- [ ] **POS sub-category coverage**: every word needs granular sub-tags for toggles.

## 4. Visual / Art / Audio

- [ ] **Verumius character art**: Midjourney prompt templates written, 0 images generated. Need chibi expression sheet (8 poses) + detailed portrait.
- [ ] **Scene backgrounds**: 144 scenes designed, 0 generated. ~30-35 Midjourney backgrounds needed.
- [ ] **City maps**: Berlin, Seoul, Amsterdam, Paris, Madrid — isometric maps designed, 0 generated.
- [ ] **Supporting character art**: Dr. Yilmaz, Hildi, Lukas, KD, Mia, Opa Heinrich — all need expression sheets.
- [ ] **Midjourney prompt document for A1**: `docs/german/midjourney-prompts-a1.md` planned, not created.

## 5. Per-Language Work

### Korean
- [ ] TOPIK coverage: 29% (832/2,888). 1,888 missing teach cards. 316 TOPIK-A gaps highest priority.
- [ ] PP55/PP57 unverified against official TOPIK exam.
- [ ] Rehaul to new format (story system, fun info, grammar tags).
- [ ] CEFR distribution still template-based.
- [ ] 37 borderline PP8 in B1, 12 lazy hints in A1/A2, mobile CSS overflow.

### Dutch
- [ ] Rehaul to new format.
- [ ] PP55/PP57 unverified against NT2 Basiswoordenlijst (~4,000 words).
- [ ] Need conjugation engine, function word list.
- [ ] CEFR distribution not concept-driven.

### French
- [ ] Rehaul to new format.
- [ ] PP55/PP57 unverified against DELF vocabulary lists.
- [ ] Need conjugation engine, function word list.
- [ ] CEFR distribution template-based (8-8-8-6).
- [ ] 3 vocab gaps from D109 audit.

### Spanish
- [ ] Rehaul to new format.
- [ ] PP55/PP57 unverified against PCIC vocabulary inventory.
- [ ] Need conjugation engine, function word list.
- [ ] CEFR distribution template-based (8-8-8-6).
- [ ] 2 vocab gaps from D109 audit.

### Arabic
- [ ] Skeleton only (5 units, 29 lessons, no steps). Deferred until new format established.

### All Non-German Languages
- [ ] Field rename: nl/en → trg/src.
- [ ] Deep dictionary expansion: conjugation engine, function word list, POS tagger, form index, example index, grammar reference.

## 6. CEFR Word Lists / Certification

- [ ] **German B2**: no official Goethe list — need telc "Einfach besser!" alternatives.
- [ ] **Dutch**: NT2 Basiswoordenlijst NOT downloaded.
- [ ] **French**: DELF vocabulary lists NOT downloaded.
- [ ] **Spanish**: PCIC vocabulary inventory NOT downloaded.
- [ ] **No language is certification-verified**: none has passed PP55 + PP57 against official exam lists.

## 7. Open Design Questions

- [ ] Default protagonist name for English source users.
- [ ] Exact color values for German cases (Nom/Akk/Dat/Gen).
- [ ] Vocab lesson density — is 12-20 cards the right range?
- [ ] Story episode length — exact exchange counts per CEFR level.
- [ ] TTS provider selection.
- [ ] Art asset CDN/hosting strategy.
