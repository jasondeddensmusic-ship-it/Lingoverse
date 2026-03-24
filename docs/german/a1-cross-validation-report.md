# German A1 Cross-Validation Report

> Generated 2026-03-24 by 3 parallel Opus validation agents
> Sources: goethe-a1.json (848 entries), a1-vocabulary-mapping.md, 6 lesson design files, grammar + functions mappings

## Summary

| Check | Status | Details |
|-------|--------|---------|
| Grammar Constructs (PP57) | **PASS** | 27/27 constructs, all 3+ quiz steps |
| Communicative Functions (PP58) | **PASS** | 20/20 functions practiced |
| PP52 Teach-Before-Use | **PASS** | No violations at design level |
| Step Density (PP43) | **PASS** | All 52 lessons above minimums (12-25 steps) |
| Vocabulary Completeness (PP55) | **FAIL** | 145 mapping words not in lesson designs + 1 Goethe word (`circa`) missing from mapping |

## Vocabulary Gap Details

### Root Cause
The lesson design agents for U2, U3, and U6 received approximate word lists in their prompts instead of the exact vocabulary mapping. U1, U4, U5 had exact lists and pass 100%.

### Gap Breakdown by Unit
- **U2**: ~61 words (places, transport, travel verbs, adverbs)
- **U3**: ~53 words (family members, home items, verbs)
- **U6**: ~105 words (some are function words taught in earlier units — mapping disagreement; true gaps ~80+)
- **U1, U4, U5**: 0 gaps

### Action Required
1. Add `circa` to vocabulary mapping (fits U4 quantities or U6 time)
2. For each gap word, add to the appropriate lesson's vocab section in the unit design
3. Some U6 "gaps" are words already taught in earlier units (dein, oder, nein, wohin, etc.) — update mapping to reflect actual location
4. Re-run validation after remediation

## Grammar Construct Coverage (27/27 PASS)

| # | Construct | Quiz Steps | Strongest Unit |
|---|-----------|-----------|----------------|
| 1 | Präsens regular | 5+ | U1 |
| 2 | Präsens irregular | 3+ | U1 |
| 3 | Modal verbs | 33 | U5 |
| 4 | Separable verbs | 6 | U3 |
| 5 | Imperative | 13 | U4+U6 |
| 6 | Nominative case | 4 | U2 |
| 7 | Accusative case | 15 | U4 |
| 8 | Definite articles | 4 | U2 |
| 9 | Indefinite articles | 3 | U2 |
| 10 | Negative kein | 9 | U4 |
| 11 | Personal pronouns | 3+ | U1 |
| 12 | Possessive articles | 5 | U3 |
| 13 | Noun genders | 4 | U2 |
| 14 | Noun plurals | 5 | U3 |
| 15 | Negation nicht/kein | 7 | U4 |
| 16 | SVO word order | 3 | U1 |
| 17 | W-question word order | 4 | U1 |
| 18 | Yes/No question order | 3 | U1 |
| 19 | V2 rule | 3 | U1 |
| 20 | Prepositions + accusative | 10 | U4 |
| 21 | Prepositions + dative | 14 | U5 |
| 22 | Simple past sein/haben | 15 | U6 |
| 23 | Formal/informal | 4 | U1 |
| 24 | Predicative adjectives | 3 | U2 |
| 25 | Numbers + ordinals | 4+ | U1+U3+U6 |
| 26 | Time expressions | 12 | U6 |
| 27 | Demonstrativartikel | 10 | U4 |

## Communicative Functions (20/20 PASS)

All 20 A1 functions have practice (not just exposure) in at least one unit. U6 L12 serves as the comprehensive consolidation lesson covering all remaining functions.

## Next Steps

1. **Vocabulary remediation pass** — add 145 gap words to U2/U3/U6 lesson designs
2. **Re-validate** — run vocab check again after remediation
3. **Phase 3** — cross-level seeding verification (A1 seeds for A2/B1/B2)
4. **Phase 4** — A1 content writing begins after all checks pass
