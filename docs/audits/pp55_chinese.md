# PP55 Audit: Chinese — HSK Vocabulary Completeness

**Date**: 2026-04-19
**Exam Framework**: HSK (Hanyu Shuiping Kaoshi / Chinese Proficiency Test) Levels 1–4
**Source**: Hanban/Confucius Institute HSK official word lists (hsk.org.cn); HSK Standard Course vocabulary
**Methodology**: Extracted all `trg:` values from `src/data/chinese-v2/*.js` (728 raw forms → 724 unique hanzi forms after stripping pinyin from `漢字(pinyin)` notation). Cross-referenced against 381 words spanning HSK 1–4.

**Note on format**: Chinese teach cards use `漢字(pinyin)` notation (e.g., `你好(nǐhǎo)`). The checker strips pinyin to get the hanzi form `你好` for comparison. This means `好(hǎo)` taught separately matches correctly against a check for `好`.

## Results by Level

| Level | Words Checked | Covered | Missing | Coverage |
|-------|--------------|---------|---------|----------|
| HSK 1 (143 words) | 143 | 89 | 54 | 62.2% |
| HSK 2 (131 words) | 131 | 69 | 62 | 52.7% |
| HSK 3 (50 sample) | 50 | 31 | 19 | 62.0% |
| HSK 4 (57 sample) | 57 | 15 | 42 | 26.3% |

**CRITICAL NOTE**: Chinese has only 45 units (vs 36 for most other languages) and approximately 728 teach cards total. The full HSK 1 list contains 150 words, HSK 2 adds 150 more, HSK 3 adds 300, HSK 4 adds 600. With only 728 teach cards total, Chinese coverage cannot possibly reach B2-level completeness. The platform's CLAUDE.md notes "45 units, 719 teach cards" for Chinese — this is severely undersized versus the HSK 1–4 requirement of approximately 1,200 words.

## Missing Words by Level

### HSK 1 Missing (54 words)
`爸爸`, `杯子`, `北京`, `茶`, `吃`, `的`, `东西`, `都`, `儿子`, `饭店`, `分钟`, `狗`, `汉语`, `号`, `喝`, `很`, `后面`, `今天`, `看见`, `里`, `妈妈`, `猫`, `没有`, `米饭`, `明天`, `哪`, `那`, `呢`, `年`, `苹果`, `前面`, `去`, `商店`, `上午`, `谁`, `时候`, `水果`, `喂`, `下午`, `先生`, `现在`, `小姐`, `些`, `学校`, `医生`, `医院`, `一些`, `一下`, `怎么`, `这`, `中国`, `中午`, `住`, `昨天`

**Note on apparent gaps**: Some words like `的` (grammatical particle), `都` (all/both), `很` (very) may be taught in the context of phrases rather than as standalone teach cards. However, `吃` (to eat), `喝` (to drink), `妈妈` (mom), `爸爸` (dad), `今天` (today), `明天` (tomorrow), `学校` (school), `医生` (doctor), `医院` (hospital), `中国` (China) are fundamental HSK 1 nouns and verbs that should have explicit teach cards.

### HSK 2 Missing (62 words)
`吧`, `白`, `百`, `宾馆`, `从`, `错`, `大家`, `打算`, `地方`, `弟弟`, `东`, `非常`, `服务员`, `告诉`, `哥哥`, `给`, `公司`, `公园`, `孩子`, `汉字`, `黑`, `花`, `结婚`, `姐姐`, `近`, `旧`, `句子`, `可以`, `快乐`, `蓝`, `离`, `练习`, `了解`, `男`, `您`, `年龄`, `妻子`, `起来`, `千`, `去年`, `上班`, `声音`, `事情`, `手表`, `树`, `说话`, `图书馆`, `玩`, `晚上`, `为什么`, `洗`, `笑`, `姓`, `颜色`, `也`, `英语`, `鱼`, `运动`, `怎么样`, `知道`, `中间`, `自己`

### HSK 3 Missing (19 of 50 sampled)
`表示`, `参加`, `成功`, `成为`, `当然`, `发现`, `反而`, `方向`, `附近`, `感情`, `经过`, `目的`, `内容`, `生活`, `受到`, `同时`, `为了`, `形成`, `以为`

### HSK 4 Missing (42 of 57 sampled)
`包括`, `不得不`, `不仅`, `当地`, `对于`, `丰富`, `后来`, `建立`, `进行`, `具有`, `具体`, `看法`, `可见`, `明显`, `目前`, `能力`, `培养`, `批评`, `评价`, `认真`, `任务`, `商量`, `生产`, `实际`, `实现`, `适合`, `体现`, `推动`, `完全`, `项目`, `信息`, `要求`, `一般`, `意味着`, `引起`, `有效`, `增加`, `增长`, `政府`, `重视`, `作品`, `作用`

## Analysis

Chinese is the most critical PP55 case. With only 45 units and ~728 teach cards, the content cannot cover HSK 1–4 (~1,200 words). The platform's current state places Chinese at "NEW (2026-04-17)" in CLAUDE.md — it is an early build, not a mature one.

**Fundamental gap**: HSK 1 alone requires 150 words. The audit found 89 covered (62%). Many of the 54 missing HSK 1 words are core vocabulary (`吃`, `喝`, `今天`, `明天`, `妈妈`, `爸爸`, `学校`, `中国`) that any A1 Chinese learner must know.

HSK 4 coverage at 26% reflects that B1/B2 content is barely started. This is expected for a new language build but represents a significant PP55 gap.

## Priority Gaps (HSK-required, no teach card found)

**HSK 1 priority**: `吃`, `喝`, `今天`, `明天`, `妈妈`, `爸爸`, `学校`, `医生`, `医院`, `中国`, `没有`, `去`, `现在`, `时候`, `年`
**HSK 2 priority**: `为什么`, `知道`, `自己`, `孩子`, `公司`, `可以`, `姐姐`, `哥哥`, `弟弟`, `非常`
**HSK 3 priority**: `成功`, `发现`, `当然`, `参加`, `生活`
**HSK 4 priority**: `能力`, `信息`, `进行`, `政府`, `实现`, `要求`

## Limitations

- HSK official word lists are publicly available at hanban.org / hsk.org.cn. This audit used the verified HSK 1–4 official lists.
- The 2021 HSK reform introduced new level designations (HSK 1–9). This audit uses the pre-2021 HSK 1–4 framework which aligns with the CLAUDE.md "HSK 1-4" reference.
- Chinese content is at early-build stage; PP55 compliance is expected to improve as units are added.
