# PP55 Audit: Russian — TRKI/TORFL Vocabulary Completeness

**Date**: 2026-04-19
**Exam Framework**: ТРКИ (TORFL — Test of Russian as a Foreign Language), Базовый уровень (A1) and Первый уровень (B1)
**Source**: ФГБОУ ВО "Государственный институт русского языка им. А.С. Пушкина" official ТРКИ framework; Zlatoust TORFL preparation materials; Russian CEFR vocabulary reference
**Methodology**: Extracted all `trg:` values from `src/data/russian-v2/*.js` (574 unique forms). Cross-referenced against a 129-word representative sample from ТРКИ official vocabulary categories.

**Critical context**: CLAUDE.md notes Russian as "NEW (2026-04-17)" with approximately 50 teach cards from Units 1-2 (greetings, numbers/age). Units 3–36 are listed as "stubs." This audit reflects a very early build.

## Results by Level

| Level | Words Checked | Covered | Missing | Coverage |
|-------|--------------|---------|---------|----------|
| ТРКИ Базовый/A1 | 110 | 83 | 27 | 75.5% |
| ТРКИ Первый уровень/B1 (sample 19) | 19 | 7 | 12 | 36.8% |

## Missing Words by Level

### ТРКИ Базовый/A1 Missing (27 words)
`простите`, `мы`, `быть`, `иметь`, `знать`, `видеть`, `жить`, `спать`, `слышать`, `тысяча`, `подруга`, `улица`, `университет`, `банк`, `супермаркет`, `станция`, `суп`, `большой`, `маленький`, `хороший`, `плохой`, `красивый`, `новый`, `старый`, `лёгкий`, `трудный`, `интересный`

**Note on Russian verbs**: Russian grammar requires imperfective/perfective aspect pairs. `быть` (to be), `знать` (to know), `видеть` (to see), `жить` (to live) are basic A1 verbs not found in the current content. Adjectives (`большой`, `маленький`, `хороший`, `плохой`) are entirely absent — Russian adjectives inflect for gender, number, and case, requiring dedicated teach cards.

### ТРКИ Первый уровень/B1 Missing (12 of 19 sampled)
`объяснять`, `предлагать`, `отказываться`, `советовать`, `окружающая среда`, `политика`, `экономика`, `образование`, `развитие`, `преимущество`, `недостаток`, `решение`

## Analysis

Russian has the second-smallest vocabulary set after Portuguese (574 entries total, most from Units 1-2). The A1 coverage at 75.5% is remarkably high for such an early build — this is because Units 1-2 focus specifically on greetings and number phrases, which overlap well with the A1 greetings/politeness/numbers categories sampled.

However, the sample masks the true gap: the 574 entries are heavily weighted toward:
- Greetings and polite phrases (Здравствуйте, Добрый день, etc.)
- Age/number expressions (Мне 25 лет, etc.)
- Case-inflected forms listed as individual entries (Антона ACC, Вам, etc.)

Essential A1 vocabulary categories that are entirely absent:
- **Adjectives**: none found in the basic adjective category
- **Places**: hospital, bank, supermarket, station, street absent
- **Common verbs**: `быть`, `знать`, `видеть`, `жить`, `спать` not found
- **Family**: `подруга` (female friend) absent

B1 coverage is predictably low (36.8%) since Units 3-36 are stubs.

## Priority Gaps (ТРКИ-required, no teach card found)

**A1 priority**: `большой`, `маленький`, `хороший`, `плохой`, `знать`, `жить`, `видеть`, `новый`, `старый`, `банк`, `улица`, `мы`
**B1 priority**: `политика`, `образование`, `развитие`, `решение`

## Limitations

- Full ТРКИ official word list for Базовый уровень contains approximately 780 words. This audit sampled 110.
- Russian content is at very early stage (U1-2 only). PP55 compliance at any meaningful level requires completing Units 3-36.
- Russian's rich morphology means a single lemma (`хороший`) has 24+ inflected forms. The checker looks for the nominative form; inflected forms in example sentences were not counted.
- ТРКИ official vocabulary lists are proprietary (Pushkin State Russian Language Institute). This audit used publicly available preparation materials.
