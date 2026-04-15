# Session Handoff — 2026-04-15 (V2 Content Rehaul: 20,269 Teach Cards)

> This is the DEFINITIVE handoff for the V2 content rehaul. Read this FIRST.

---

## HOW YOU WORK (Non-Negotiable)

**You work COMPLETELY AUTONOMOUSLY.** The owner is not a coder. You execute, you don't ask permission for mechanical tasks. You deploy agents, merge results, validate, fix, push to main, and keep going until the job is done. The owner expects to come back and find things finished, not find you waiting for approval.

**The documentation IS the rulebook.** Every rule in `CLAUDE.md`, every PP-number in the Pipeline Rules, every decision in `docs/DECISION_LOG.md` — these are LAW. You don't improvise. You don't skip validation steps because "it's probably fine." You follow the rules exactly. When `CLAUDE.md` and `docs/vision/VERUMLINGUA_REHAUL_VISION.md` conflict, the vision doc wins.

**You validate until PERFECTION.** Zero PP8 violations. Zero PP48 violations. Zero PP22c violations. PP61 metalanguage in English everywhere. PP59 pos+gender on every card. PP64 teach-then-test. PP52 teach-before-use. You run the validators, you fix what they find, you run them again until they pass. You do NOT ship content that hasn't been validated.

**You never get stale.** If an agent stalls, you detect it and redeploy. If you hit a rate limit, you merge what exists and continue when restored. If a sed script corrupts a file, you fix it immediately. You check agent progress every few minutes. You don't wait — you monitor actively.

**You push to main after every language milestone.** Create PR, merge, verify. The owner wants to see progress live on lingoverse.nl, not sitting on a branch.

**Codebase: 117,430 lines of code, 1,589 files, 1,613 modules.**

---

## What Was Accomplished

### The Numbers

| Language | Start (2026-04-12) | Now | Added | Units | vs German (5,148) |
|----------|-------------------|-----|-------|-------|-------------------|
| Korean | 1,336 | 5,166 | +3,830 | 69 | **100%+** ✅ |
| Dutch | 1,233 | 5,106 | +3,873 | 89 | **99%** ✅ |
| French | 1,092 | 5,036 | +3,944 | 90 | **98%** ✅ |
| Spanish | 1,262 | 4,961 | +3,699 | 90 | **96%** |
| **Total** | **4,923** | **20,269** | **+15,346** | **338** | — |

German benchmark: 5,148 teach cards in 36 units.

### What Each Language Got

**Korean** (COMPLETE):
- V1 enrichment: POS tags (1,328 cards) + funFacts (1,336 cards) + per-unit file split (30 → 69 units)
- A2 gap: 316 new cards (18 lessons, 3 units) — all TOPIK A words covered
- B1 gap: 1,666 new cards (62 lessons, 12 units) — all B1 CEFR words covered
- B2 content: 1,584 new cards (80 lessons, 24 units) — 6 batches of B2 TOPIK II vocabulary
- PP8 hint/visual leaks: FIXED to 0

**Dutch** (99% of German):
- V1 enrichment: POS + gender + funFacts (1,233 cards, done in prior session)
- A1 gap: 356 new cards (20 lessons, 4 units)
- B1 gap: 335 new cards (20 lessons, 4 units)
- B2 content: 3,182 new cards (160+ lessons, 51 units) — 12 batches
- PP8 hint/visual leaks: FIXED to 0

**French** (98% of German):
- V1 enrichment: POS + gender + funFacts (1,092 cards, done in prior session)
- A1 gap: 342 new cards (20 lessons, 4 units)
- B1 gap: 334 new cards (20 lessons, 4 units)
- B2 content: 3,268 new cards (160+ lessons, 52 units) — 12 batches
- PP8 hint/visual leaks: FIXED to 0

**Spanish** (96% of German):
- V1 enrichment: POS + gender + funFacts (1,262 cards, done in prior session)
- A1 gap: 337 new cards (20 lessons, 4 units)
- B1 gap: 305 new cards (20 lessons, 4 units)
- B2 content: 3,057 new cards (160+ lessons, 52 units) — 12 batches
- PP8 hint/visual leaks: FIXED to 0

### Infrastructure Built
- `scripts/pp8_validate.cjs` — generalized with `--lang=` parameter for all languages
- `scripts/pp64_validate.cjs` — generalized with per-language exempt lists + prefix lists
- `scripts/korean_pos_autotag.cjs` — auto POS tagger from kind field + morphology
- `scripts/korean_funfact_autogen.cjs` — 6-tier funFact generator (hanja, loanwords, culture)
- `scripts/split_korean_units.cjs` — monolith → per-unit file splitter
- `scripts/migrate_v1_to_v2.cjs` — field rename utility (nl→trg, en→src)
- All scripts reusable across languages

---

## Current Validation Status

| Check | Korean | Dutch | French | Spanish |
|-------|--------|-------|--------|---------|
| Build | ✅ PASS | ✅ PASS | ✅ PASS | ✅ PASS |
| PP8 hint/visual | ✅ 0 | ✅ 0 | ✅ 0 | ✅ 0 |
| PP59 pos/gender | ✅ | ✅ | ✅ | ✅ |
| PP61 metalanguage | ✅ | ✅ | ✅ | ✅ |
| PP48 fb blanks | ✅ | ✅ | ✅ | ✅ |
| PP22c em-dashes | ✅ | ✅ | ✅ | ✅ |
| PP43 density | ✅ (all <32) | ✅ | ✅ | ✅ |
| PP64 teach-then-test | Not yet run | Not yet run | Not yet run | Not yet run |
| PP52 teach-before-use | Not yet run | Not yet run | Not yet run | Not yet run |
| Grammar module | ❌ Missing | Mock quality | ❌ Missing | ❌ Missing |
| CEFR reference wired | ✅ | ✅ | ✅ | ✅ |

---

## What the Next Agent MUST Do

### Priority 1: Spanish to 5K (187 cards short)
- Extract remaining B2 gap: `node -e "..."` (see workflow below)
- Deploy 1 Opus agent for 10 lessons (~200 cards)
- Merge into units 91-92, update wrapper, build, push to main
- **This is 1 agent batch. Should take 20 minutes.**

### Priority 2: Full Validation Pipeline (ALL 4 languages)
Run these validators on each language and FIX any violations:

```bash
# PP8 anti-leak (must be 0 for new content, V1 has pre-existing position/length leaks)
node scripts/pp8_validate.cjs --lang=korean
node scripts/pp8_validate.cjs --lang=dutch
node scripts/pp8_validate.cjs --lang=french
node scripts/pp8_validate.cjs --lang=spanish

# PP64 teach-then-test (every teach card quizzed)
node scripts/pp64_validate.cjs --lang=korean
node scripts/pp64_validate.cjs --lang=dutch
node scripts/pp64_validate.cjs --lang=french
node scripts/pp64_validate.cjs --lang=spanish

# Build check
npm run build
```

### Priority 3: Grammar Modules
Each language needs `src/data/grammar/{lang}.js` like German's 58 entries:
- Korean: `src/data/grammar/korean.js` — particle tables, honorific levels, conjugation patterns
- Dutch: `src/data/grammar/dutch.js` — EXISTS but mock quality, needs teacher-board rewrite
- French: `src/data/grammar/french.js` — tense tables, pronoun system, subjunctive
- Spanish: `src/data/grammar/spanish.js` — ser/estar, subjunctive, preterite/imperfect

### Priority 4: More B2 Content (diminishing returns)
The CEFR reference files have thousands more B2 words, but many are:
- Proper nouns, brand names, or typos in the frequency lists
- Extremely niche vocabulary (medical/legal/technical jargon)
- Already taught under different forms

The realistic high-impact work is DONE. Further B2 batches yield ~150-200 usable teach cards per 400-word gap list (the rest are noise). Decision: stop content grinding, focus on quality/validation.

---

## The Content Build Workflow (for future batches)

This is the exact workflow used to produce 15,346 new teach cards:

### Step 1: Extract Gap Words
```bash
node -e "
const fs = require('fs');
const cefrText = fs.readFileSync('src/data/cefr-reference/LANG.js', 'utf8');
const words = [];
const re = /\{w:\"([^\"]+)\",p:\"([^\"]+)\",l:\"B2\"/g;
let m;
while ((m = re.exec(cefrText)) !== null) { words.push({w: m[1], p: m[2]}); }
const unitDir = 'src/data/LANG-v2';
let allTrg = new Set();
const files = fs.readdirSync(unitDir).filter(f => f.endsWith('.js'));
for (const f of files) {
  const text = fs.readFileSync(unitDir + '/' + f, 'utf8');
  const trgRe = /(?:nl|trg):\"([^\"]+)\"/g;
  let nm;
  while ((nm = trgRe.exec(text)) !== null) { allTrg.add(nm[1].toLowerCase().trim()); }
}
const missing = words.filter(w => !allTrg.has(w.w.toLowerCase()));
const first400 = missing.slice(0, 400);
fs.writeFileSync('scripts/_LANG_b2_gap.txt', first400.map((w,i) => (i+1)+'. '+w.w+' ('+w.p+')').join('\n'));
console.log('LANG B2 remaining: ' + missing.length);
"
```

### Step 2: Deploy Opus Agent
```
Agent prompt: Build LANG B2 content. Read scripts/_LANG_b2_gap.txt (400 words),
docs/agents/AGENT_CONTENT_RULES.md, docs/agents/FORMAT_TEMPLATE.js.
Write 20 lessons as src/data/LANG-v2/_temp_BATCH_L01.js through _temp_BATCH_L20.js.
[Language-specific gender rules]. Each: const LESSON_N = {id:"PREFIX_lN", ...};
export default LESSON_N;. All fields required. English metalanguage. No em-dashes.
fb single {1} + sSrc. Max 30 steps. Write ALL 20.
```

### Step 3: Merge Into Units
```bash
# Fix missing exports
for miss in $(for f in src/data/LANG-v2/_temp_BATCH_L*.js; do grep -L "export default" "$f"; done); do
  varname=$(grep -o "const LESSON_[0-9]*" "$miss" | head -1 | sed 's/const //');
  echo "export default ${varname};" >> "$miss"
done

# Create unit wrapper files (5 lessons per unit)
# Update the B2 level wrapper file
# npm run build
# git add + commit + push
# gh pr create + merge
```

### Step 4: Validate
```bash
node scripts/pp8_validate.cjs --lang=LANG
# Fix any violations
```

### Common Pitfalls
1. **Agents stall after rate limits** — check file count, redeploy finish agents for remaining files
2. **sed corrupts wrapper files** — NEVER use `sed -i` to insert imports before every line. Write wrapper files cleanly instead.
3. **Missing `export default`** — some agents forget it. Always check with `grep -L "export default"` after merge.
4. **CEFR gap lists have garbage** — proper nouns, typos, English words. Agents filter these. Card counts per batch vary (150-350 instead of 400).
5. **Max 4 agents at a time** (Rule B7). Rate limits hit if too many Opus agents run simultaneously.

---

## File Structure Reference

```
src/data/
  korean-v2/unit-01.js ... unit-69.js    (69 units)
  dutch-v2/unit-01.js ... unit-89.js      (89 units)
  french-v2/unit-01.js ... unit-90.js     (90 units)
  spanish-v2/unit-01.js ... unit-90.js    (90 units)
  
  units-korean-v2.js          → imports from per-level files
  units-korean-v2-a1.js       → units 1-6 + 31-33
  units-korean-v2-a2.js       → units 7-10
  units-korean-v2-b1.js       → units 11-20 + 34-45
  units-korean-v2-b2.js       → units 21-30 + 46-69
  
  (same pattern for dutch/french/spanish)

scripts/
  pp8_validate.cjs            → PP8 anti-leak (--lang=X)
  pp64_validate.cjs           → PP64 teach-then-test (--lang=X)
  korean_pos_autotag.cjs      → Korean POS auto-tagger
  korean_funfact_autogen.cjs  → Korean funFact generator
  split_korean_units.cjs      → Monolith → per-unit splitter
  migrate_v1_to_v2.cjs        → Field rename utility
```

---

## PRs Merged (16 total)

| PR | Content |
|----|---------|
| #115 | Korean V2 enrichment: POS, funFact, per-unit split, A2 gap |
| #116 | Korean B1 + Dutch/French/Spanish A1/B1 batches |
| #117 | B2 content + PP8 fixes for all languages |
| #119-#131 | Successive B2 content rounds, pushing all toward 5K |

---

## Key Decisions Made During This Session

1. **V1 stays live** — normalization layer handles both v1 (nl/en) and v2 (trg/src) transparently
2. **CEFR reference lists are inflated** — Dutch 14K, French 14K, Spanish 12K are frequency corpora, not exam word lists. Realistic target is ~5K active teach cards (matching German).
3. **Story mode deferred** — per `feedback_story_mode_optional.md`. All content is teach cards + quizzes. Story is toggleable layer for later.
4. **PP56 concept-driven** — Korean got 69 units because TOPIK demands it. Dutch/French/Spanish got 86-90 units from their frequency lists.
5. **Agents write to temp files** — main session merges and validates. Never let agents write to wrapper files directly.
