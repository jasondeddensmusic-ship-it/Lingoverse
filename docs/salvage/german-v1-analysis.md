# German V1 Curriculum Salvage Analysis

> Generated 2026-03-23 by Salvage Extractor Agent (Phase 0D)

## Structural Overview

| Metric | Count |
|--------|-------|
| Total units | 31 |
| Total lessons | 258 |
| Total steps | ~4,941 |
| File size | 8,185 lines |

## Step Type Breakdown

| Step Type | Count | % |
|-----------|-------|---|
| mc | 1,553 | 31.4% |
| teach | 1,444 | 29.2% |
| fb | 753 | 15.2% |
| drag_fill | 347 | 7.0% |
| match | 274 | 5.5% |
| tip | 273 | 5.5% |
| intro | 259 | 5.2% |
| verb_table | 38 | 0.8% |
| tr | 0 | 0% |

## Teach Card Analysis

| Metric | Count |
|--------|-------|
| Total teach steps | 1,444 |
| Unique German words/phrases | 1,690 |
| Cards with A:/B: dialogues | 1,437 (99.5%) |
| Cards with phonetic | 1,329 |
| Cards with cognate | 178 |
| Cards with deepDive | 258 |

## Article Distribution

| Article | Count | Gender |
|---------|-------|--------|
| der | 226 | Masculine |
| die | 228 | Feminine |
| das | 158 | Neuter |
| **Unique gendered nouns** | **486** | |

## Quality Status

- PP48: 0 violations (CLEAN)
- PP22c: 1 em-dash (needs fix)
- board:true: 258/258
- Density: all 18+ steps/lesson

## Salvage Assessment

### High Value (keep + restructure)
- 1,690 unique words — strong vocabulary base
- 486 gendered nouns with correct der/die/das
- 1,437 A:/B: dialogues — reformat to 2-bubble
- 178 cognate annotations — directly reusable
- 258 deepDive explanations — reusable as grammar reference
- 38 verb_tables — conjugation data directly reusable
- 273 tip cards — redistribute across new units
- 1,329 phonetic transcriptions — ASCII-only per PP27

### Needs Restructuring
- CEFR distribution: 9-8-8-6 must become concept-driven 6-6-12-12
- nl/en fields to target/source rename
- 3-turn dialogues trimmed to exactly 2 bubbles
- funInfo field added to every card
- Full grammar tagging (P59) on every word
- Story system built from scratch

### Low Value / Discard
- Quiz steps largely need rewriting for new lesson flow
- Intro steps need rewriting for story-driven format
- 1 remaining em-dash
