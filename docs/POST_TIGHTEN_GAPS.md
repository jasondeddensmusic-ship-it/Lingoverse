# POST_TIGHTEN_GAPS.md

Generated: 2026-04-19
Session: PP63 whitelist tightening — NL/JA/KO
Updated: 2026-04-19 (morphological matching improvements applied)

## Summary

The NL/JA/KO function-word whitelists in `scripts/pp63_audit.cjs` were over-inflated
by previous sessions (NL: 3271 entries, JA: 5392, KO: 12031). After tightening to
legitimate function words only, the audit surfaces real content gaps that were
previously silenced.

### Entries before vs. after tightening

| Language | Before | After | Reduction |
|----------|--------|-------|-----------|
| Dutch (nl) | 3271 | 668 | -2603 (80%) |
| Japanese (ja) | 5392 | 440 | -4952 (92%) |
| Korean (ko) | 12031 | 364 | -11667 (97%) |

### PP63 violations: tightening vs. after morphological matching fix

| Language | After tightening | After morphology fix | Reduction |
|----------|-----------------|---------------------|-----------|
| Dutch (nl) | 1859 | 1306 | -30% (content edits + minor script benefit) |
| Japanese (ja) | 3739 | 177 | **-95.3%** (tokenizer + form expansion) |
| Korean (ko) | 2879 | 850 | **-70.5%** (stem-matcher) |

Other languages (DE, FR, ES, IT, ZH, PT, RU) are unaffected.
German: 0. French: 1 (pre-existing). Chinese: 5 (pre-existing).

### Engineering changes applied (2026-04-19)

**Japanese** — two-part fix:
1. `jaPreprocessExample()` in `tokenize()`: replaces `漢字(ふりがな)` with just
   the furigana reading before tokenizing. Eliminates kanji-stub + okurigana
   fragment artifacts: `食(た)べましたか` becomes `たべましたか` (one matchable token).
2. `jaExpandForms()` in `addTrg()`: for each taught word, stores the original,
   full-hiragana form, kanji-only form, ichidan verb stem (strip る), and
   suru-compound noun stem (strip する). `食(た)べる` also stores `たべ`.
   `もうたべましたか` then matches via substring against `たべ`.

**Korean** — morphological stem-matcher:
1. `koStemOf()`: strips common verb/adjective endings. `갔어요` → `갔`, `먹었어요` → `먹`.
2. `koSyllableMatch()`: Hangul syllable comparison handling ㄹ-irregular
   (`갈`→`가`), ㅗ→ㅘ (`봐/봤`→`보`), ㅜ→ㅝ (`줘`→`주`), ㅏ→ㅐ (`해`→`하`), ㅣ→ㅕ (`셔`→`시`).
3. `addTrg()`: stores 다-stripped stems in taughtWords. `가다` → also stores `가`.

**False-positive verification**: Genuinely untaught words continue to flag correctly.
- JA: `またね`, `おちゃです`, `えき`, `スミスです` all flag
- KO: `어때요` (49x), `죄송해요` (9x), `어땠어요` (21x) flag as legitimate gaps

**Remaining unresolved (out of scope)**:
- KO ㅎ-irregular (어떻다→어때요, 그렇다→그래요): requires full morphological
  analyzer. The `어때요` flags are likely genuine content gaps in any case.

---

---

## Dutch (nl) — Top content gaps

### Most frequent untaught words in examples (top 20)

| Word | Occurrences | What it means | Priority |
|------|-------------|----------------|----------|
| punt | 58 | point, period (discourse) | HIGH |
| snel | 39 | fast, quickly | HIGH |
| keuze | 33 | choice | HIGH |
| geweldig | 25 | great, awesome | HIGH |
| directeur | 26 | director, manager | MED |
| politiek | 22 | politics/political | MED |
| leeftijd | 17 | age | HIGH |
| gevaarlijk | 17 | dangerous | HIGH |
| plan | 19 | plan | HIGH |
| situatie | 13 | situation | HIGH |
| park | 13 | park | HIGH |
| democratie | 13 | democracy | MED |
| debat | 13 | debate | MED |
| zwembad | 14 | swimming pool | MED |
| website | 14 | website | MED |
| strand | 9 | beach | HIGH |
| idee | 11 | idea | HIGH |
| systeem | 10 | system | MED |
| regio | 10 | region | LOW |
| begrijpelijk | 10 | understandable | MED |

### Affected units (32 unit files)

All 89 Dutch units flagged at least one card. The highest-violation units are:
- unit-01.js: 40 cards — words like `bakker` (baker), `afspraak` (appointment),
  `plezier` (fun), `succes` (success), `studie` (study), `aardig` (nice)
- unit-05.js: 44 cards — `gezin` (family unit), `ermee` (with it), many household vocab
- unit-08.js: 34 cards — `kantoor` (office), `tekening` (drawing), common workplace vocab
- unit-10.js: 27 cards — common B1 vocabulary appearing in A2 examples

### Theme: discourse words as false content-word flags

Several flagged words are semi-function words that were in the old whitelist but
removed in tightening:
- `punt` — used as "point" in dialogue turns ("Goed punt!" = "Good point!")
- `klopt` — "that's correct" (from kloppen, to be correct)
- `keuze` — "choice" (used in "Goede keuze!" = "Good choice!")
- `klinkt` — "that sounds" (from klinken)

These may warrant re-addition to the whitelist as high-frequency semi-idiomatic
response words, OR the Dutch content needs to teach these words before use.

**Recommendation:** Add teach cards for the 20 most frequent words above in Dutch
unit-01 through unit-04. For `punt`, `klinkt`, `klopt`, `keuze` — decision needed:
whitelist as semi-idiomatic discourse markers OR add teach cards.

---

## Japanese (ja) — Top content gaps

### Most frequent untaught words in examples (top 20)

| Token | Occurrences | What it means | Notes |
|-------|-------------|----------------|-------|
| えましょう | 216 | verb-ending suffix | Tokenizer artifact — needs whitelist fix |
| じゅうよう (重要) | 126 | important | Content word — needs teach card |
| だいじ (大事) | 120 | important/precious | Content word — needs teach card |
| が必要 | 118 | is necessary | Compound with particle — artifact |
| かんが (考え) | 114 | thought/thinking | Stem of 考える (taught) — artifact |
| こんご (今後) | 113 | from now on | Content word — needs teach card |
| ともだち (友達) | 104 | friend | HIGH PRIORITY — missing early unit |
| が一番 (いちばん) | 92 | is the best/most | Superlative — may need whitelist entry |
| きませんか | 90 | won't you come? | Invitation verb form — grammar pattern |
| 具体的 | 87 | concrete, specific | Content adjective — needs teach card |
| たいへん (大変) | 84 | very/difficult | Adv/adj — semi-function |
| れました | 79 | verb past passive suffix | Tokenizer artifact |
| きょうみ (興味) | 79 | interest (curiosity) | Content word — needs teach card |
| いちばん (一番) | 78 | the most/number one | Should be whitelist (superlative) |
| れません | 77 | verb negative suffix | Tokenizer artifact |
| も興味 | 77 | also interested | Compound — artifact |
| きょうと (京都) | 77 | Kyoto | Proper noun — already handled by cap detection? |
| と一緒 | 76 | together with | Compound + particle — semi-functional |
| いっしょう (一生) | 75 | lifetime | Content word — needs teach card |
| じもと (地元) | 71 | hometown/local | Content word — needs teach card |

### Critical observation: Tokenizer artifacts in Japanese

Many high-frequency flags are **tokenizer artifacts** where the JA tokenizer produces
fragments from kanji+kana compounds:
- `えましょう` = verb ending fragment (from words like `考えましょう`)
- `れました`, `れません` = passive/negative suffixes
- `かんが` = stem fragment of `考える` (to think)
- `が必要`, `も興味` = particle+noun compounds

**Recommendation:** These artifacts suggest the JA tokenizer should be improved to
not split kanji+kana compounds mid-word. However, this is a separate engineering
task. For this session: do not add these artifacts back to the whitelist. Document
here as a known issue with the JA tokenizer.

### Real content gaps (teach cards needed)

The following are genuine missing teach cards:
- `ともだち` (友達, friend) — appears in Unit 1+ examples, needs early teach card
- `じゅうよう` (重要, important) — B1+ word, but used in A2 examples
- `だいじ` (大事, important/precious) — similar to above
- `きょうみ` (興味, interest) — appears from Unit 7+ 
- `こんご` (今後, from now on) — B2 word in B1 examples
- `たんじょうび` (誕生日, birthday) — should be taught early
- `がっこう` (学校, school) — essential A1 word missing or untaught at point of use
- `だいがくせい` (大学生, university student) — appears in Unit 2 before taught
- `お仕事` (work, polite) — appears in Unit 2 before taught
- `えいご` (英語, English language) — appears before taught
- `とうきょう` (Tokyo) — proper noun, appears throughout

### Affected files

All 36 unit files flagged. Additionally, ~416 batch density files also flagged
(these are the `_batch*_u*_L*.js` files containing ~4,375 teach cards). The
batch files contain B1-B2 content where more complex vocabulary appears in examples.

---

## Korean (ko) — Top content gaps

### Most frequent untaught words in examples (top 20)

| Token | Occurrences | What it means | Notes |
|-------|-------------|----------------|-------|
| 어때요 | 56 | How is it?/What do you think? | Common response verb — semi-function |
| 보세요 | 46 | Please look/try | Imperative of 보다 (to see/try) |
| 알겠어요 | 38 | I understand | Politeness formula — semi-function |
| 보여요 | 31 | It looks like / is visible | Verb form |
| 좋겠어요 | 28 | That would be nice | Conjecture form |
| 어땠어요 | 25 | How was it? | Past form of 어때요 |
| 볼게요 | 24 | I'll (go) look | Future intent |
| 받았어요 | 24 | (I/they) received | Past of 받다 (to receive) |
| 갈까요 | 24 | Shall we go? | Suggestion form |
| 그렇게 | 21 | Like that, in that way | Adverb — borderline function |
| 할게요 | 20 | I will do | Future intent of 하다 |
| 좋았어요 | 20 | It was good | Past of 좋다 |
| 먹을까요 | 18 | Shall we eat? | Suggestion form |
| 조심하세요 | 17 | Please be careful | Polite warning |
| 볼까요 | 16 | Shall we look/watch? | Suggestion form |
| 공부해요 | 15 | (I/they) study | Verb form of 공부하다 |
| 있으면 | 14 | If there is | Conditional of 있다 |
| 좋겠다 | 13 | That would be nice | Informal conjecture |
| 어려웠어요 | 13 | It was difficult | Past of 어렵다 |
| 드릴까요 | 13 | Shall I give you? | Honorific offer form |

### Critical observation: Korean inflection creates many unique tokens

Korean is an agglutinative language. Each verb+ending combination creates a new
unique token. Most of the 2879 violations are **inflected forms of verbs that ARE
taught** (보다→보세요, 먹다→먹을까요, 하다→할게요, 가다→갈까요 etc.).

The audit's `matchesTaught()` function does NOT have Korean morphology rules,
so it cannot recognize that `갈까요` is an inflection of `가다` (which is taught).

**This means a significant portion of KO violations are tokenizer/morphology
artifacts, not genuine content gaps.**

### Genuine content gaps (teach cards needed or missing early enough)

- `선생님` (teacher) — appears in Unit 1 before taught
- `학교에` (at school) — appears in Unit 1 before taught
- `공부해요` (studies) — 공부하다 may be taught but inflection not matched
- `음식이/음식을` (food) — appears in Unit 2 examples before food unit
- `영화를/영화가` (movie) — appears before movie vocabulary unit
- `엄마가` (mom) — 엄마 appears before family vocabulary unit
- `마셔요` (drinks) — 마시다 inflection not matched
- `먹었어요` (ate) — 먹다 past tense not matched
- `드릴까요` (shall I give you?) — honorific offer form
- `주세요` (please give me) — essential early Korean, should be in whitelist or taught Unit 1
- `드세요` (please eat, honorific) — polite form of 드시다

### Recommendation: Korean needs morphological matching

The KO whitelist approach is fundamentally limited because Korean's agglutinative
morphology means each verb can have 50+ distinct surface forms. A true fix requires:
1. Adding a Korean stem-matching function to `matchesTaught()` (strip `-아요/-어요/-해요/
   -았어요/-었어요/-ㄹ까요/-을까요/-ㄹ게요/-세요` endings to get the stem, then
   match against taught stems).
2. OR adding a Korean morphology whitelist of common verb endings (not full words).

For now, the 2879 violations represent a mix of:
- ~60% inflection artifacts (verb forms of taught verbs not recognized)
- ~25% genuine content gaps (words used in examples before taught)
- ~15% semi-functional words that may need whitelist entries

### Affected files

All 30 unit files flagged (units 01-30). Units 8-10 are the most heavily flagged
(57, 50, 74 cards respectively) — these are the conversation/daily life units
that use complex vocabulary in examples early.

---

## Recommendations for Remediation Sessions

### Priority 1 — Korean morphological matching (engineering)

Add a `koreanStem()` function to `matchesTaught()` in `pp63_audit.cjs` that strips
common Korean verb endings to get the infinitive form. This would reduce KO violations
from ~2879 to an estimated ~700 genuine content gaps.

Key endings to strip: `-아요/-어요/-해요`, `-았어요/-었어요/-했어요`, `-ㄹ까요/-을까요`,
`-ㄹ게요/-을게요`, `-세요/-으세요`, `-지요/-죠`, `-네요`, `-거든요`.

### Priority 2 — Japanese tokenizer artifacts (engineering)

The JA tokenizer splits kanji+kana compounds at word boundaries in ways that produce
meaningless fragments (`えましょう`, `れました`, `かんが`). These fragments will always
flag as untaught since they are not standalone vocabulary. The fix is to improve the
JA tokenizer to keep kanji+kana compounds intact or add these suffix patterns to the
`ja` whitelist as grammar morphemes.

Candidates for whitelist addition (verb suffix morphemes, not content words):
`えましょう`, `きましょう`, `りましょう`, `れました`, `れません`, `れますか`,
`きませんか`, `きました`, `きません`, `かんが` (stem fragment).

### Priority 3 — Dutch semi-idiomatic response words

The following Dutch words appear in so many examples they may qualify as
semi-functional discourse markers. Decision needed per card:

- `punt` (point) — add teach card OR add to whitelist as discourse particle
- `klinkt` (sounds like) — add teach card OR whitelist (metalinguistic)
- `klopt` (that's correct) — add teach card OR whitelist (response marker)
- `keuze` (choice) — add teach card (content word, essential vocab)
- `snel` (fast) — add teach card (essential adjective/adverb)
- `geweldig` (great) — add teach card (common exclamation)
- `strand` (beach) — add teach card (content noun)
- `aardig` (nice) — add teach card (essential adjective)
- `idee` (idea) — add teach card

### Priority 4 — Japanese missing early vocab teach cards

These Japanese words appear in A1-A2 examples without dedicated teach cards:
- `ともだち` (友達, friend) — A1 vocabulary, missing teach card
- `がっこう` (学校, school) — A1 vocabulary, missing teach card
- `たんじょうび` (誕生日, birthday) — A2 vocabulary
- `えいご` (英語, English language) — A1 vocabulary
- `だいがくせい` (大学生, university student) — should be taught before use in Unit 2

### Priority 5 — Dutch A1 example vocabulary cleanup

The 40 violations in unit-01.js and 23 in unit-02.js include many words that are
used as context in examples before they get their own teach card. An agent session
should:
1. Either add minimal teach cards for high-frequency words in Unit 1-2
2. OR simplify examples to use only already-taught vocabulary

---

## Files to edit in remediation sessions

1. `scripts/pp63_audit.cjs` — add `koreanStem()` morphological matching for KO
2. `scripts/pp63_audit.cjs` — add JA suffix morpheme fragments to `ja` whitelist
3. `src/data/dutch-v2/unit-01.js` through `unit-05.js` — add missing teach cards
4. `src/data/japanese-v2/unit-01.js` through `unit-06.js` — add missing teach cards
5. `src/data/korean-v2/unit-01.js` through `unit-06.js` — add/verify teach cards

---

## Audit commands to re-run after remediation

```
node scripts/pp63_audit.cjs dutch-v2 --include-batch
node scripts/pp63_audit.cjs japanese-v2 --include-batch
node scripts/pp63_audit.cjs korean-v2 --include-batch
```

Target after engineering fixes (Priority 1+2):
- NL: ~400 violations (genuine content gaps only)
- JA: ~500 violations (genuine content gaps only, artifacts removed)
- KO: ~700 violations (genuine content gaps only, morphology matched)
