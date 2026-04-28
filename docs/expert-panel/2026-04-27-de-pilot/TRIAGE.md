# Triage decisions — German A1+A2 Expert Panel pilot

**Triaged by:** Claude (autonomous per Rule H11 + autonomy mandate)
**Date:** 2026-04-28
**Methodology:** ACCEPT = ship a fix this session. ACCEPT-DEFER = open as queue item, ship later. DEFER = blocked or low-leverage right now. REJECT = not actionable / disagreement with finding.

## CRITICAL findings (7)

| ID | Finding | Decision | Why | Action |
|---|---|---|---|---|
| 001 | Production-mode (free recall) gap — opts:[] exposed / no `tr` step / Bloom-Apply starved | ACCEPT-DEFER | Real, 3-panelist consensus. But fix needs engine work (`tr` rendering at scale, conditional `opts` removal, Quiz harvester rewrite). Not safe inline today. | Open as `LANG-QUALITY-006` in queue. Spec the engine work, ship as separate PR. |
| 002 | Unit-08 ships as a 119KB single-line file | ACCEPT | Mechanical fix. Spawn 1 agent to reformat with `// ─── L1: ... ───` per-lesson comments matching all other units. | Agent dispatch after Korean Wave 1 completes. |
| 003 | Scaffolding fires on dose, not on struggle — no adaptive after wrong-streak | ACCEPT-DEFER | Correct finding. Engine UX work — needs design pass + wrongCount state in LessonEngine. Not a 1-hour fix. | Open as queue item; spec the trigger logic. |
| 004 | No `type:"story"` cards rendered | DEFER | Already covered by VERUMIUS-STORY-* queue items. Needs art assets + engine renderer work. Don't open duplicate. | No new action; existing queue items unchanged. |
| 005 | Konjunktiv II umlauts stripped in `grammar/german.js` (78 instances) | ACCEPT | Pure mechanical fix. ä/ü missing on `wäre/hätte/würde/könnte`. Inline now. | Edit `src/data/grammar/german.js` directly. |
| 006 | Country-preposition rule (`aus der Türkei`) used in examples but never taught | ACCEPT | Add 1 tip card to unit-01.js between L4-L5. Inline now. | Edit `src/data/german-v2/unit-01.js` directly. |
| 007 | `Tschüss` etymology (French adieu) wrong; pronunciation hint wrong | ACCEPT | Inline fix. Replace funFact + note text. | Edit `src/data/german-v2/unit-01.js:36` directly. |

## Conflict (1)

| Theme | Decision | Reasoning | Action |
|---|---|---|---|
| Streak UI: Ed Psych "vestigial = no dark pattern" praise vs Cog/Ed "non-functional = misleading" critique | **(c) Both true** — replace with honest metric | Ed Psych is right that NOT weaponizing streak is good. Cog/Ed are right that DISPLAYING a non-functional metric breaks trust. The surgical fix: replace the `🔥 streak` pill on the done-screen with `📚 Lessons completed: N` (using `user.cu` which actually tracks). Preserves the no-dark-pattern win, fixes the trust break. | Edit `src/components/LessonEngine.jsx` and any other streak-display sites; remove or replace with honest metric. |

## IMPORTANT findings — promoted to action this session

| ID | Finding | Decision | Action |
|---|---|---|---|
| 010 | "Germans love X / Germans are X" stereotype debt (122x in v2; ~30 in A1-A2) | ACCEPT | Spawn agent to rewrite ~30 funFacts in A1-A2 to remove national-stereotype framing. |
| 011 | Restaurant unit (U5) teaches no dietary-restriction / allergy vocabulary | ACCEPT | Inline: add 8 cards to U5 (Allergie, allergisch gegen, vegetarisch, vegan, glutenfrei, laktosefrei, Erdnuss, "Ich bin allergisch gegen ___"). |
| 009 | "Können Sie langsamer sprechen?" survival chunk never taught | ACCEPT | Inline: add 1 teach card to U1 L2. |
| Lex error | `Grippe` glossed as "the flu, the cold" (it's only flu) | ACCEPT | Inline fix at unit-07.js:9. |
| stub-intros | 35 "(continued)" lessons ship generic stub intros | ACCEPT | Spawn agent to rewrite 35 stub intros with diegetic Verumius continuation. |

## IMPORTANT — deferred (queue items, not this session)

- A1.1 vs A1.2 5:1 imbalance — needs careful curriculum decision; possibly reshape unit boundaries. Not a 1-hour fix.
- Across-unit interleaving absent (match outcomes don't enter SRS, Daily Review caps at 20) — engine work; needs careful design.
- Wrong-answer feedback corrective-only — engine UX work; specify in queue.
- Per-unit lesson count varies 9-24 — documentation work; nice-to-have.
- Vocab spiraling weak (~50% A1 dead by A2) — needs `audit_recycling.mjs` validator. Open as queue item.

## NICE-TO-HAVE (54 clusters)

Aggregated in `SYNTHESIS.md`. Pattern detection deferred until Korean + Spanish panels complete (3+ language consensus across same theme = promote to IMPORTANT per spec).

## Strengths consensus — preserve through all fixes

- Foundations module (alphabet/ich-Laut/ach-Laut/Eszett/ß-rule)
- FSRS implementation (request_retention 0.9, persistence)
- MC distractor quality (semantic competition)
- Capstone backward design (U12 L14 numbered 25 A2 constructs)
- Verumius narrative + cultural funFacts
- Modal particles (doch, mal, halt, schon) at A1
- Separable verbs with split-position rule

These remain intact across all this session's fixes. Any change that regresses them needs a real rationale and a test note.

---

## This session's execution order

1. ✅ Triage logged (this doc)
2. → Spawn Korean Tier-1 Wave 1 (4 agents, BACKGROUND): SLA, Cog Psych, Ed Psych, Native Linguist (ko)
3. → Inline German fixes while Korean runs:
   - 005 Konjunktiv umlauts (`grammar/german.js`)
   - 007 Tschüss note + funFact (`unit-01.js:36`)
   - Grippe lexical fix (`unit-07.js:9`)
   - 006 Country-preposition tip card (insert into `unit-01.js`)
   - 009 "Können Sie langsamer sprechen?" chunk (add to `unit-01.js` L2)
   - 011 Food-allergy vocab cards (add to `unit-05.js`)
   - Streak conflict fix (replace `🔥 streak` with `📚 Lessons completed`)
4. → Build + commit + push German inline fixes
5. → Korean Wave 2 (2 agents): Language Teacher, Curriculum Designer
6. → German content agents (parallel with Korean Wave 2): 002 unit-08 reformat, 010 stereotype-debt rewrite, continued-stub-intros rewrite
7. → Synthesize Korean panel; commit + PR
8. → Advance to Spanish panel (next in ko → es → fr → it → pt → ja → zh → nl → ru sequence)
