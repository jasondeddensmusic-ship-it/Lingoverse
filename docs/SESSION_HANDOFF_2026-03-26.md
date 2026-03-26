# Session Handoff — 2026-03-26 (B2 Build + Metalanguage Fix)

## What Was Done

### 1. German B2 Build (U25-U36) — COMPLETE
- 12 units, 96 lessons, ~2,640 steps, ~1,844 new vocabulary
- Salvage-first pipeline: mined V1 U25-U30 (570 reusable items), then built around salvage
- All teach cards have POS tags, gender, funFacts
- Build passes, deployed to lingoverse.nl

### 2. Renderer Fix — COMPLETE
- Note box in new-format renderer changed from pink gradient "GOOD TO KNOW" to white bg + purple left bar (matches board-mode renderer)
- Affects cards with `pos` field that trigger `_origTrg` renderer

### 3. Excessive `\n` Fix — COMPLETE
- 1,503 sequences of `\n\n\n+` collapsed to `\n\n` across all B1+B2 tips
- Was causing massive empty space in tip cards

### 4. Metalanguage Translation (German to English) — 80% COMPLETE
All intro desc/goals translated for B1+B2. B1 tips done. B2 tips still pending.

| Scope | Status |
|-------|--------|
| B1 intros (U13-U24) | DONE |
| B1 tips + verb_table notes (U13-U24) | DONE |
| B2 intros (U25-U36) | DONE |
| B2 tips + verb_table notes (U25-U36) | **NOT DONE (~47 tips, ~21 verb_tables)** |
| A1/A2 stray intros (U5,7,9,10,11,12) | **NOT DONE (~10 items)** |

## What Still Needs Doing

### Priority 1: B2 Tips Translation (~47 tips + ~21 verb_table notes)
Tips in B2 units have German explanations that need English translation. German example sentences should be PRESERVED (they are the content being taught). Only the metalanguage (explanations, rules, comparisons) needs to be in English.

**How to find them:**
```bash
python3 -c "
import re
with open('src/data/units-german-v2.js', 'r', encoding='utf-8') as f:
    content = f.read()
b2 = content[content.find('n:25,'):]
for m in re.finditer(r'type:\"tip\",title:\"([^\"]+)\"', b2):
    line = content[:content.find('n:25,') + m.start()].count('\n') + 1
    print(f'Line {line}: {m.group(1)}')
"
```

**Translation rule:** Explanatory text in English, German example sentences stay German. Title can stay in German (it is the grammar term being taught) OR be translated. Either is acceptable.

### Priority 2: A1/A2 Stray German Intros (~10 items)
Units 5, 7, 9, 10, 11, 12 have some intro desc/goals in German. Same fix: translate desc and goals to English.

### Priority 3: B2 Content Validation
The B2 content was built by agents and needs validation:
- PP8 leak scan (hints containing answers, answer position clustering)
- PP52 teach-before-use (every quiz word must trace to a prior teach card)
- PP48 step types (fb = single blank only, drag_fill = multi-blank)
- Tip/deepDive content quality (native-speaker quality German)

### Priority 4: Story Arc Rewrite
Netflix-quality narrative across all 36 V2 German units. Reviews done (see `docs/german/`), rewrites not applied.

## Files Changed
- `src/data/units-german-v2.js` — B2 content (U25-U36) + all translations + newline fix
- `src/verumlingua.jsx` — Note box renderer fix
- `docs/german/b2-*.md` — 12 lesson blueprints + vocab/grammar mappings
- `docs/german/v1-salvage-mining-b2.md` — V1 salvage report
- `docs/german/b2-vocabulary-source.md` — B2 vocab compilation
- `docs/german/b2-vocabulary-mapping.md` — 1,844 words mapped to units

## Current State

| Language | Format | Units | Lessons | Steps | Status |
|----------|--------|-------|---------|-------|--------|
| German v2 | v2 (new) | 36 | ~289 | ~7,776 | A1-B2 built. Metalanguage ~80% translated. B2 validation pending. |
