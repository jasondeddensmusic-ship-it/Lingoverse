# PP55 Audit: Korean — TOPIK Vocabulary Completeness

**Date**: 2026-04-19
**Exam Framework**: TOPIK I (Levels 1-2, equivalent A1-A2) and TOPIK II (Levels 3-6, equivalent B1-C2)
**Source**: NIIED (National Institute for International Education) TOPIK official vocabulary framework; EBS TOPIK word lists; KBS Korean Language Research Institute reference lists
**Methodology**: Extracted all `trg:` values from `src/data/korean-v2/*.js` (3,930 raw → 4,142 unique forms). Cross-referenced against a 214-word representative sample from official TOPIK thematic vocabulary lists. Korean forms matched directly (no morphological stripping); partial matches checked for compound forms.

## Results by Level

| Level | Words Checked | Covered | Missing | Coverage |
|-------|--------------|---------|---------|----------|
| TOPIK I core (152 sample) | 152 | 95 | 57 | 62.5% |
| TOPIK II intermediate (62 sample) | 62 | 46 | 16 | 74.2% |

## Missing Words by Level

### TOPIK I Missing (57 words)
**Demonstratives**: `이것`, `그것`, `저것`
**Negation**: `아니다`
**Common verbs**: `일어나다`, `말하다`, `읽다`, `사다`, `팔다`, `좋아하다`, `싫어하다`, `알다`, `모르다`, `만나다`
**Korean numerals**: `하나`, `셋`, `넷`, `일곱`, `여덟`, `아홉`
**Time**: `내일`, `어제`, `지금`, `요일`
**Family**: `오빠`, `누나`, `언니`, `남동생`, `여동생`, `할아버지`, `할머니`, `친구`
**Places**: `병원`, `은행`, `식당`, `화장실`, `교실`, `도서관`
**Beverages**: `커피`
**Adjectives**: `크다`, `작다`, `적다`, `오래된`, `나쁘다`, `바쁘다`, `어렵다`, `재미있다`, `가볍다`, `빠르다`

**Note on Korean sibling terms**: The Korean kinship system distinguishes sibling terms by gender AND the speaker's gender: `오빠` (older brother, female speaker), `누나` (older sister, male speaker), `언니` (older sister, female speaker), `형` (older brother, male speaker). These are all TOPIK I vocabulary items.

### TOPIK II Missing (16 words)
`끝나다`, `만들다`, `도움이 되다`, `발전하다`, `이해하다`, `제안하다`, `참여하다`, `관심을 갖다`, `중요하다`, `진지하다`, `그래서`, `그러나`, `하지만`, `그런데`, `왜냐하면`, `비록`

**Note**: Korean discourse connectors (`그래서`, `그러나`, `하지만`, `그런데`) are explicitly required at TOPIK II Level 3/4. These appear absent as standalone teach cards despite being essential for reading comprehension sections.

## Analysis

TOPIK I coverage at 62.5% reveals gaps across multiple core categories. The most critical:

1. **Common verbs**: `말하다` (to speak), `읽다` (to read), `알다` (to know), `모르다` (not to know), `만나다` (to meet), `일어나다` (to get up) are all TOPIK 1 must-know words.
2. **Korean numeral system**: Korean has two numeral systems. The native Korean numbers (`하나/둘/셋...`) appear to have gaps at `하나`, `셋`, `넷`, `일곱`, `여덟`, `아홉`. Sino-Korean numbers may be better covered.
3. **Kinship vocabulary**: Gender-specific sibling terms are a distinct TOPIK I category.
4. **Place vocabulary**: Hospital, bank, restaurant, bathroom, classroom, library — TOPIK I's "daily life" themes.

TOPIK II intermediate coverage is better (74.2%), but discourse connectors (`그래서`, `하지만`, `그런데`) are absent, and these appear in every TOPIK II listening and reading section.

## Priority Gaps (TOPIK-required, no teach card found)

**TOPIK I priority**: `말하다`, `알다`, `모르다`, `만나다`, `이것/그것/저것`, `오빠`, `누나`, `언니`, `병원`, `은행`, `식당`, native Korean numerals, `재미있다`, `어렵다`
**TOPIK II priority**: `그래서`, `그러나`, `하지만`, `그런데`, `왜냐하면`, `이해하다`, `참여하다`, `중요하다`

## Limitations

- Full TOPIK vocabulary corpus contains approximately 5,000 words for Levels 1-6. This audit sampled 214 words (~4.3%).
- Verb conjugation forms in Korean are extensive; the checker looks for base dictionary forms (infinitive). Conjugated forms in examples/steps are not counted.
- Korean has 69 units (more than any other language), so actual coverage may be higher than the sample suggests.
