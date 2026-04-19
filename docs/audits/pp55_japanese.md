# PP55 Audit: Japanese — JLPT Vocabulary Completeness

**Date**: 2026-04-19
**Exam Framework**: JLPT (Japanese Language Proficiency Test) N5/N4/N3/N2
**Source**: JLPT official test content specifications (jlpt.jp); JLPT Sensei N5-N2 official vocabulary lists; Nihongo So-matome official word lists
**Methodology**: Extracted all `trg:` values from `src/data/japanese-v2/*.js` (3,374 raw → 3,484 unique forms including batch files). Kanji stripped of furigana for comparison (e.g., `先生(せんせい)` → `先生`). Cross-referenced against a 308-word representative sample across JLPT N5–N2.

**Important note on PP65 format**: All Japanese teach cards use `kanji(furigana)` notation (e.g., `先生(せんせい)`). The checker strips furigana before matching, so `先生(せんせい)` correctly matches a search for `先生`. Pure hiragana entries will not match against kanji reference words.

## Results by Level

| Level | Words Checked | Covered | Missing | Coverage |
|-------|--------------|---------|---------|----------|
| JLPT N5 (122 sample) | 122 | 87 | 35 | 71.3% |
| JLPT N4 (65 sample) | 65 | 44 | 21 | 67.7% |
| JLPT N3 (30 sample) | 30 | 16 | 14 | 53.3% |
| JLPT N2 (31 sample) | 31 | 17 | 14 | 54.8% |

## Missing Words by Level

### JLPT N5 Missing (35 words)
**Pronouns**: `私`, `僕`, `君`, `あなた`, `彼`, `彼女`, `みんな`
**Time basics**: `年`, `日`, `時`, `分`, `今日`, `明日`, `昨日`, `今年`, `先週`, `朝`, `昼`, `夜`
**Family**: `友達`
**Places**: `家`
**Adjectives**: `古い`, `多い`, `少ない`, `良い`, `楽しい`, `易しい`, `忙しい`
**Verbs**: `来る`, `見る`, `聞く`, `話す`, `書く`
**Transport**: `車`
**Demonstratives**: `あそこ`

**Note**: `私` (I/me, polite), `今日` (today), `明日` (tomorrow), `来る` (to come), `見る` (to see), `話す` (to speak) are among the most fundamental JLPT N5 words. These may be taught via hiragana-only forms (e.g., `きょう`, `あした`) in older batch files that predate PP65 conversion.

### JLPT N4 Missing (21 words)
`会う`, `遊ぶ`, `生まれる`, `入れる`, `起こす`, `置く`, `変える`, `伝える`, `始まる`, `持つ`, `呼ぶ`, `入口`, `映画館`, `音`, `会話`, `言語`, `交通`, `今度`, `最後`, `自分`, `場所`

### JLPT N3 Missing (14 of 30 sampled)
`憧れる`, `謝る`, `争う`, `生き物`, `息`, `一生懸命`, `喜ぶ`, `記録`, `現在`, `功績`, `困難`, `材料`, `真剣`, `建てる`

### JLPT N2 Missing (14 of 31 sampled)
`当然`, `安定`, `以外`, `一般`, `印象`, `引き受ける`, `応じる`, `過去`, `管理`, `教育`, `均等`, `具体的`, `経営`, `社会的`

## Analysis

N5 gaps at 71.3% are likely partially due to PP65 conversion: older batch files may teach `きょう` (today) in hiragana while the reference word is `今日`. The checker sees these as missing when the same concept is covered in a different script form. A full PP65-aware audit would need to check both kanji and hiragana representations.

True N5 gaps include the personal pronoun set (`私`, `彼`, `彼女`), common verbs (`来る`, `見る`, `聞く`, `話す`), and basic adjectives (`古い`, `良い`, `楽しい`). These should have standalone teach cards regardless of script convention.

N4 coverage at 67.7% shows gaps in common action verbs (`会う`, `遊ぶ`, `置く`, `持つ`), places (`入口`, `映画館`), and common abstract nouns (`場所` = place, `最後` = last, `自分` = oneself).

N3 and N2 sample coverages (53% and 54%) suggest the upper levels are underserved, though the batch-file content base is large and sampling may miss genuine coverage.

## Priority Gaps (JLPT-required, no teach card found)

**N5 priority**: `私`, `今日`, `明日`, `来る`, `見る`, `聞く`, `話す`, `書く`, `友達`, `楽しい`, `良い`
**N4 priority**: `会う`, `遊ぶ`, `場所`, `最後`, `自分`, `始まる`
**N3 priority**: `一生懸命`, `現在`, `困難`
**N2 priority**: `教育`, `管理`, `過去`, `一般`

## Limitations

- JLPT N5 contains approximately 800 words; N4 approximately 1,500 additional words. This audit sampled 308 total.
- Script form mismatch (hiragana vs kanji+furigana) inflates apparent gaps at lower levels where older batch files may use pure hiragana for words that should have kanji+furigana per PP65.
- Batch files (`_batch*_u*_L*.js`) make up a large portion of Japanese content; these were included in the grep but their format fidelity varies.
