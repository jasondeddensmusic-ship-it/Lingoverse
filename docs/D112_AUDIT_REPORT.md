# D112 Certification-Grade Audit Report

> **Date**: 2026-03-17
> **Status**: IN PROGRESS
> **Scope**: All 5 languages (Korean, Dutch, German, French, Spanish)

---

## EXECUTIVE SUMMARY

### Current State: Vocabulary Coverage vs Certification Requirements

| Language | Unique Teach Cards | Official Exam Requirement (est.) | Coverage | Gap |
|----------|-------------------|----------------------------------|----------|-----|
| **Korean** | 1,095 unique | ~4,300 (TOPIK I+II) | ~25% | ~3,200 words |
| **Dutch** | 1,047 unique (v2) | ~5,000 (NT2) | ~21% | ~3,950 words |
| **German** | 1,207 unique | ~5,650 (Goethe A1-B2) | ~21% | ~4,440 words |
| **French** | 870 unique | ~4,000 (DELF A1-B2) | ~22% | ~3,130 words |
| **Spanish** | 1,099 unique | ~3,500 (DELE A1-B2) | ~31% | ~2,400 words |

**Finding**: ALL 5 languages have approximately 20-31% of the vocabulary needed for certification-grade completeness. This is a MASSIVE gap that will require multiple sessions to close.

### Per-Level Vocabulary (Unique Teach Cards)

| Level | Korean | Dutch (v2) | German | French | Spanish |
|-------|--------|------------|--------|--------|---------|
| A1 | 339 | 354 | 367 | 293 | 347 |
| A2 | 215 | 179 | 313 | 158 | 287 |
| B1 | 305 | 265 | 301 | 220 | 258 |
| B2 | 236 | 249 | 226 | 199 | 207 |
| **Total** | **1,095** | **1,047** | **1,207** | **870** | **1,099** |

### A1 Domain Coverage (checking specific English glosses)

| Language | A1 Coverage | Missing Items |
|----------|-------------|---------------|
| Korean | 65.8% (179/272) | 93 items |
| Dutch | 76.1% (207/272) | 65 items |
| German | 75.0% (204/272) | 68 items |
| French | 74.6% (203/272) | 69 items |
| Spanish | 78.3% (213/272) | 59 items |

### Critical A1 Gaps (present in 3+ languages)

1. **Months** (Jan-Dec): Missing in Korean (11/12), German (11/12), French (11/12)
2. **Colors** (brown, pink, purple, grey): Missing in all 5 languages
3. **Body parts** (tooth, finger, knee, shoulder): Missing in 4-5 languages
4. **Clothing** (socks, sweater, scarf, gloves): Missing in 4-5 languages
5. **Directions** (north/south/east/west): Missing in 4-5 languages
6. **Emotions** (bored, excited, worried, proud): Missing in all 5 languages
7. **Numbers** (individual teens, tens): Missing in Korean and Spanish

---

## STRUCTURAL AUDIT RESULTS (P53 Items 1-9)

### Item 1: CEFR Distribution (P51)

| Language | A1 | A2 | B1 | B2 | Status |
|----------|----|----|----|----|--------|
| Korean | 6 | 4 | 10 | 10 | OK (gold standard) but A2=4 flagged for Cat V |
| Dutch (v2) | 6 | 4 | 10 | 10 | OK (gold standard) |
| German | 8 | 8 | 8 | 6 | FLAGGED: B-level compressed |
| French | 8 | 8 | 8 | 6 | FLAGGED: B-level compressed |
| Spanish | 8 | 8 | 8 | 6 | FLAGGED: B-level compressed |

### Item 2: P8 Anti-Leak
Status: Previously audited in D109. Not re-checked in this session.

### Item 3: P52 Teach-Before-Use
Status: PENDING full automated verification.

### Item 4: P48 Step Type Correctness
| Language | fb with {2}+ | Status |
|----------|-------------|--------|
| Korean | 0 | PASS |
| Dutch | 0 | PASS |
| German | 0 | PASS |
| French | 0 | PASS |
| Spanish | 0 | PASS |

### Item 5: P49 No Meta-Curriculum
| Language | CEFR in quiz | Status |
|----------|-------------|--------|
| Korean | 4 (TOPIK references, not CEFR levels) | REVIEW |
| Dutch | 0 | PASS |
| German | 0 | PASS |
| French | 1 | FIX NEEDED |
| Spanish | 0* | PASS |

### Item 6: P22c No Em-Dashes
| Language | Content em-dashes | Comment em-dashes | Status |
|----------|------------------|-------------------|--------|
| Korean | 0 | 97 | PASS (comments only) |
| Dutch | 12 (non-exported text) | 4 | PASS (not in strings) |
| German | 0 | 0 | PASS |
| French | 0 | 0 | PASS |
| Spanish | 0 | 42 | PASS (comments only) |

### Item 7: P43 Density
| Language | Min steps | Under-dense | Status |
|----------|-----------|-------------|--------|
| Korean | 18 | 25/311 | REVIEW |
| Dutch (v2) | 18 | 22/244 | REVIEW |
| German | 18 | 0/240 | PASS |
| French | 18 | 0/240 | PASS |
| Spanish | 18 | 0/240 | PASS |

### Item 8: board:true
| Language | Lessons | board:true | Status |
|----------|---------|-----------|--------|
| Korean | 311 | 311 | PASS |
| Dutch | 244 (v2) | 303 (all) | PASS |
| German | 240 | 240 | PASS |
| French | 240 | 240 | PASS |
| Spanish | 240 | 240 | PASS |

### Item 9: Sub-level Label Consistency
| Language | Status | Notes |
|----------|--------|-------|
| Korean | PASS | A1.1-A1.2, A2.1-A2.2, B1.1-B1.2, B2.1-B2.2 |
| Dutch (v2) | PASS | Same pattern as Korean |
| German | PASS | A1.1-A1.2, A2.1-A2.2, B1.1-B1.2, B2.1-B2.2 |
| French | REVIEW | A1.1-A1.3, A2.1-A2.8, B1.1-B1.8, B2.1-B2.6 (non-standard) |
| Spanish | PASS | A1.1-A1.3, A2.1-A2.4, B1.1-B1.4, B2.1-B2.2 |

---

## GRAMMAR INVENTORY SUMMARY

| Language | Tip Cards | Verb Tables | Total Grammar Elements |
|----------|-----------|-------------|----------------------|
| Korean | 311 | 7 | 318 |
| Dutch | 384 | 28 | 412 |
| German | 258 | 38 | 296 |
| French | 189 | 5 | 194 |
| Spanish | 213 | 35 | 248 |

---

## VOCABULARY GAP DETAILS BY LANGUAGE

### Korean (TOPIK I + II target: ~4,300 words)
- Current unique teach cards: 1,095
- Estimated gap: ~3,200 words
- A1: 339 unique (target ~1,000). Major gaps: months, numbers (teens/tens), colors, body parts, clothing
- A2: 215 unique (target ~1,000). Major gaps: professions, animals, nature, technology
- B1: 305 unique (target ~1,500). Major gaps: media, abstract concepts, expanded feelings
- B2: 236 unique (target ~1,500). Major gaps: economics, law, academic vocabulary

### Dutch (NT2 target: ~5,000 words)
- Current unique teach cards: 1,047
- Estimated gap: ~3,950 words
- A1: 354 unique. Major gaps: months, colors, body parts, directions
- A2: 179 unique. Major gaps: animals, technology, professions, nature
- B1: 265 unique. Major gaps: feelings, media, abstract concepts
- B2: 249 unique. Major gaps: economics, law, academic

### German (Goethe A1-B2 target: ~5,650 words)
- Current unique teach cards: 1,207
- Estimated gap: ~4,440 words
- A1: 367 unique (Goethe target: 650). Gap: ~283 words
- A2: 313 unique (Goethe target: 650 additional). Gap: ~337 words
- B1: 301 unique (Goethe target: 1,100 additional). Gap: ~799 words
- B2: 226 unique (Goethe target: ~1,500 additional). Gap: ~1,274 words

### French (DELF A1-B2 target: ~4,000 words)
- Current unique teach cards: 870
- Estimated gap: ~3,130 words
- French has the fewest teach cards of all 5 languages
- Most verb_table-heavy content missing (only 5 verb tables vs German's 38)

### Spanish (DELE A1-B2 target: ~3,500 words)
- Current unique teach cards: 1,099
- Estimated gap: ~2,400 words
- Best relative coverage of the 5 languages

---

## PRIORITY FIXES (THIS SESSION)

### Tier 1: Quick structural fixes
1. French P49: 1 CEFR label in quiz content
2. Korean P49: Review 4 TOPIK references in quiz content

### Tier 2: Critical vocabulary domains (cross-language)
These domains are missing across ALL 5 languages and are A1 essentials:
1. **Months** (January-December): 12 teach cards per language
2. **Extended colors** (brown, pink, purple, grey, orange): 5 cards per language
3. **Body parts expansion** (tooth, finger, knee, shoulder, neck): 5-10 cards per language
4. **Extended emotions** (bored, excited, worried, proud, surprised): 5 cards per language
5. **Cardinal directions** (north, south, east, west): 4 cards per language

### Tier 3: Unit count evaluation (P56)
- German, French, Spanish: B2 has only 6 units vs 10 for Korean/Dutch
- Korean A2: Only 4 units for Category V language

---

## OFFICIAL SOURCE VERIFICATION (Rule 14)

Research completed 2026-03-17. Key findings that CORRECT previous CLAUDE.md assumptions:

### Korean
- **NIKL 한국어 학습용 어휘 목록**: 5,965 words in 3 grades (A=982, B=2,111, C=2,872). Official, downloadable from korean.go.kr.
- **TOPIK I vocabulary**: ~1,671 words (academic compilation from learning-korean.com, NOT official NIIED publication).
- **TOPIK II vocabulary**: ~3,900 words total (from koreantopik.com, citing NIIED past exams).
- **TOPIK grammar**: ~100 beginner patterns + ~90 intermediate patterns (academic analysis of 17 TOPIK tests, NOT official NIIED list).
- **CORRECTION**: No single "official TOPIK grammar list" exists. Commonly cited lists are derived from exam paper analysis.

### German
- **Goethe A1 Wortliste**: ~650 words. Official PDF confirmed.
- **Goethe A2 Wortliste**: ~1,300 words. Official PDF confirmed (Hueber, 2016).
- **Goethe B1 Wortliste**: ~2,400 words. Official PDF confirmed (joint Goethe/Freiburg/OSD).
- **CORRECTION**: No official Goethe B2 Wortliste exists. Best proxy: Aspekte neu B2 or Sicher! B2 textbook lists.
- **Grammar**: No standalone grammar inventory per level. Grammar expectations embedded in Prufungsziele documents.

### French
- **CORRECTION**: No official DELF vocabulary lists exist. CIEP/France Education International does NOT publish word-count-based lists.
- **Best proxy**: Eaquals Core Inventory for French (2015), jointly published by Eaquals, CIEP, Eurocentres, CASLT.
- **Referentiel de l'Alliance Francaise**: Exists as paid books (CLE International). Contains vocabulary inventories but no published word counts.
- **Estimated vocabulary**: A1 ~500-600, A2 ~1,000-1,200, B1 ~2,000-2,500, B2 ~4,000-5,000 (teaching consensus, NOT official).

### Spanish
- **PCIC (Plan Curricular del Instituto Cervantes)**: Freely available online at cvc.cervantes.es. Contains vocabulary per domain (20 Nociones Especificas) per CEFR level A1-C2.
- **PCIC Grammar**: Complete grammar inventory per level, freely accessible. THIS IS THE BEST OFFICIAL SOURCE of any of the 5 languages.
- **CORRECTION**: PCIC does NOT publish total word counts per level. Totals require manual tallying across 20 domains.

### Dutch
- **CORRECTION**: No "NT2 Basiswoordenlijst (~4,000 words)" exists as claimed in CLAUDE.md. The actual NT2 vocabulary framework is:
  - *A Frequency Dictionary of Dutch* (Routledge, 2014): 5,000 most frequent words
  - CvTE Aanvullende Woordenlijst (~200-250 supplementary words, published 2023)
  - Programma I (B1): Core + General lists only. Programma II (B2): All 6 frequency lists.
- **NT2 Vocabulary Test**: Measures knowledge of 7,000 word families.
- **Grammar**: No official standalone grammar inventory found.

### Impact on D112 Targets

The "official exam requirement" numbers in the Executive Summary are ESTIMATES, not verified counts:
- Korean: NIKL 5,965 is official. TOPIK-specific ~3,900 is academic compilation.
- German: A1-B1 totals (~4,350) are official. B2 (~1,500 additional) is estimated.
- French: ALL numbers are estimates. No official source provides totals.
- Spanish: PCIC is official but provides domain-organized lists, not totals.
- Dutch: Frequency Dictionary 5,000 is the actual framework, not "NT2 Basiswoordenlijst 4,000."

---

## NEXT SESSIONS NEEDED

This audit reveals that achieving full certification-grade vocabulary (P55) requires adding approximately **3,000-4,500 new teach cards per language**, totaling **~17,000 new teach cards across all 5 languages**. This is a multi-session, multi-week project.

### Recommended session plan:
1. **Session 1 (THIS SESSION)**: Audit extraction, gap analysis, structural fixes, initial vocabulary additions for most critical A1 domains across all languages
2. **Sessions 2-6**: One session per language, focused on building missing vocabulary by domain
3. **Sessions 7-11**: Grammar completeness verification and gap-filling per language
4. **Session 12**: Communicative functions mapping and final P53 verification
