# Session Handoff — 2026-04-20c (extended autonomous run)

> Read this first. Continuation of handoff-2026-04-20b. Extended autonomous loop per "no stops" mandate.

## TL;DR
- **17 PRs shipped** (#255–#272). All merged to main, all CI green.
- **+538 teach cards** across 10 languages this extended run.
- All 10 languages **100% clean** on PP8/PP43/PP48/PP63/PP64/PP66/PP67.
- Grand total: **14,713 teach cards** (was 14,175 at start of 2026-04-20 sessions).

## Per-language session totals

| Language | Before | After | +Delta |
|---|---|---|---|
| German | 5,170 | 5,187 | +17 |
| Korean | 1,350 | 1,419 | +69 |
| Italian | 905 | 960 | +55 |
| Spanish | 1,323 | 1,388 | +65 |
| French | 1,156 | 1,203 | +47 |
| Chinese | 842 | 905 | +63 |
| Portuguese | 761 | 827 | +66 |
| Dutch | 1,333 | 1,376 | +43 |
| Japanese | 670 | 729 | +59 |
| Russian | 665 | 719 | +54 |
| **Total** | **14,175** | **14,713** | **+538** |

## Batch summary

| PR | Theme | Cards | Languages |
|---|---|---|---|
| #255 | A1 essentials | +36 | FR/ES/NL/KO |
| #256 | A1/A2 batch 2 | +24 | JA/KO/ES/NL |
| #257 | A1/N5/HSK1 | +34 | ZH/JA/RU/PT |
| #258 | A1/HSK2-3/TOPIK1/B2 | +35 | IT/KO/ZH/NL |
| #259 | A2/B2 deepening | +26 | FR/ES/PT |
| #260 | A1 colors/daily | +18 | IT/KO |
| #261 | docs reconcile | 0 | - |
| #262 | smaller-corpus A1/N5/HSK1 | +37 | RU/JA/PT/ZH |
| #263 | jobs + animals + sports | +37 | KO/ES/IT/NL |
| #264 | shopping/travel/abstract | +27 | FR/PT/JA |
| #265 | A2-B1 expansion | +37 | RU/ZH/NL/IT |
| #266 | B1/B2 civic+abstract | +37 | DE/KO/ES/FR |
| #267 | A2-B2 mixed | +37 | PT/JA/ZH/IT |
| #268 | body+kitchen+C1 | +36 | RU/KO/DE/NL |
| #269 | rooms+objects+weather | +37 | FR/ES/IT/PT |
| #270 | career+feelings | +35 | KO/JA/ZH/RU |
| #271 | B1/N3/HSK4 civic | +26 | RU/JA/ZH |
| #272 | B2 civic retry | +19 | PT/ES |

## Key lessons (this extended run)

1. **Occasional agent Edit rollback on Windows.** About 2-3 agents per 40+ had their Edit revert mid-session (likely file-lock / worktree race). Main session detected via `git diff` teach-count mismatch. Mitigation: include "git diff after edit, confirm insertions" in agent prompts for retries.
2. **Substitution rate climbs with saturation.** A1 subs went 10% (batch 1) → 60% (batch 15). Pivot thematic categories proactively (rooms → weather → career → abstract) before target list becomes mostly duplicates.
3. **`type:"teach"[^}]*trg:"..."` regex** is the only reliable PP24 grep pattern. Bare `trg:"..."` includes match pairs.
4. **`_temp_*` files imported into units DO count.** Many Italian/Korean/Spanish words appeared "missing" but were already taught via `_temp` imports. Agents correctly fell back.
5. **B1/B2 civic has convergent vocab.** Same concepts across languages (sociedade/société/sociedad/Gesellschaft/등 etc.) — clean parallel batches work.
6. **Korean PP64 trap.** Descriptive verbs (크다, 어렵다) tested only via conjugated answers (커요, 어려워요) don't lemma-match PP64. Always include a match pair with the dictionary form.

## Next-session priorities

1. **Russian B1/B2 expansion** — still smallest corpus at 719; audit shows many B1 civic gaps remain.
2. **Japanese N3/N2** — still under 800; room for 100+ more abstract nouns + verbs.
3. **Chinese HSK 4/5** — 905 cards, HSK 4 is still ~30% covered per last audit.
4. **Portuguese B2 academic** — 827 cards, more discourse verbs + abstract nouns needed.
5. **Italian accent restoration** — still the 200+ batch-file è/à/ò/ù issue from prior handoff. Not addressed this run.
6. **Italian A2 dialogue scaling** (138 dialogues need 3+ turns) — still open.

## Behavior rules (unchanged)

- Autonomous default. Don't pause for approval. Keep grinding until explicit "breather" or "stop".
- 4 agents max per batch (Rule B7).
- Main session always runs `validate_all.cjs + pp63_audit.cjs + npm run build` before committing.
- Inline fixes for small validator regressions (PP8 hint leak, PP63 example word). Re-dispatch agent only if structural.
- CI watch with `gh run watch <id> --exit-status` before next batch.

## When in doubt

- Grep current state. Don't trust 2026-04-19 audits — many closures shipped.
- If agent reports success but git diff shows no changes — ship the 3 that worked, note in commit message, move on.
- Pivot themes when substitution rate > 50%. Untapped: Russian B1 civic, Portuguese/Chinese/Japanese B2 academic, dialogue scaling.

**Author:** Claude Opus 4.7 (1M context) — session 2026-04-20 (extended)
**Status:** Green. +538 cards. 17 PRs clean. Ready to continue.
