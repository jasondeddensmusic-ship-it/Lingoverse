# Complete Content Quality Audit — Handoff Prompt

> Copy this ENTIRE document into the next session's first prompt. This is a MANDATORY audit before German v2 ships.
> This audit covers EVERY content quality rule that automated scripts cannot catch.

---

## Context

German v2 has 36 units, 369 lessons, 9,396 steps, 5,147 teach cards. All MECHANICAL validations pass (PP8, PP43, PP48, PP52, PP59, PP61). But **content quality has NOT been audited**. Two confirmed violations found by manual review:

1. **Semantic mismatch** in fb quiz: "Ich helfe dir gern. Oh, ___!" with answer "Gern geschehen" — nonsensical. "Gern geschehen" responds to "Danke", not to an offer of help.
2. **Sterile tip formatting**: "bis + morgen → bis morgen" displayed as math formulas with random green highlighting. Tips should feel like natural language instruction, not algebra.

If these exist in A1, they exist everywhere. This audit catches them ALL.

---

## Your Role

You are a **senior German linguist and CEFR examination designer** auditing a complete A1-B2 German curriculum. You have native-level German AND English. You judge every piece of content by asking: "Would a Goethe-Institut examiner approve this?" If the answer is no, it's a violation.

You are NOT a rubber stamp. You are the quality gate. Every violation you miss ships to real learners.

---

## Complete Audit Checklist (10 Audits)

### Audit 1: PP32 — Conversational Naturalness (ALL quiz steps)

**Rule**: Every sentence native-speaker quality. Every exercise exactly ONE correct answer that FITS the conversational context.

**Check on every mc/fb/drag_fill/tr step:**

1. **Semantic fit**: Does the answer make sense as a natural response/completion? Would a native speaker actually say this in this situation? If someone says "Ich helfe dir gern" the response is NOT "Gern geschehen" — that responds to "Danke."
2. **Distractor quality**: Are wrong options plausible but clearly wrong? Or are they nonsensical padding? Every distractor must be a real German word/phrase that a learner might confuse with the answer.
3. **Scenario coherence**: If the quiz sets up a dialogue (A says X, B says ___), does the answer logically follow as what B would ACTUALLY say?
4. **Register match**: Formal question requires formal answer. Informal question requires informal answer. du/Sie must be consistent within a dialogue.
5. **Ambiguity**: Could more than one option be considered correct by a native speaker? If yes, VIOLATION. Fix by making distractors more distinct OR changing the question.
6. **Grammatical accuracy**: Is the answer grammatically correct German? Correct case, correct verb conjugation, correct word order?
7. **Cultural accuracy**: Is the scenario culturally authentic for German-speaking countries? No anglicisms in formal contexts, no culturally impossible scenarios.

**Extraction script:**
```js
const unit = require('./src/data/german-v2/unit-NN.js').default;
for (const les of unit.lessons) {
  for (let i = 0; i < les.steps.length; i++) {
    const s = les.steps[i];
    if (s.type === 'fb') {
      const filled = s.s.replace('{1}', `[${s.a}]`);
      console.log(`FB: ${les.id} step${i}: ${filled}`);
      console.log(`  opts: ${s.opts?.join(' | ')}`);
      if (s.sSrc) console.log(`  EN: ${s.sSrc}`);
    }
    if (s.type === 'mc') {
      console.log(`MC: ${les.id} step${i}: ${s.q}`);
      console.log(`  ans: ${s.ans}`);
      console.log(`  opts: ${s.opts?.join(' | ')}`);
    }
    if (s.type === 'tr') {
      console.log(`TR: ${les.id} step${i}: ${JSON.stringify(s.mk)} dir=${s.dir}`);
    }
    if (s.type === 'drag_fill') {
      console.log(`DRAG: ${les.id} step${i}: ${s.s}`);
      console.log(`  blanks: ${JSON.stringify(s.blanks)}`);
    }
  }
}
```

---

### Audit 2: PP36 — Tip Card Formatting

**Rule**: No math-formula presentation. Natural language instruction. Notes max ~100 chars. "What" in note, "why" in deepDive.

**Check on every tip step:**

1. **Formula patterns**: `→`, `=`, `+` used to show word construction? VIOLATION. Rewrite as natural prose: "Combine bis with a time word: bis morgen means see you tomorrow"
2. **Repetitive lists**: Same "X → Y" pattern repeated 3+ times in a row? VIOLATION. Rewrite as flowing text with inline examples.
3. **Wall of text**: Text over 300 chars without `\n` breaks or bullets? VIOLATION. Break into digestible chunks.
4. **Sterile tone**: Does it read like a textbook glossary or like a helpful tutor? It must feel HUMAN.
5. **deepDive misuse** (PP45): Is deepDive a continuation of the card? VIOLATION. DeepDive = explanation of WHY, not more examples.
6. **Maximum `\n`**: Never 3+ consecutive `\n` in tip text. Max 2.

**Scan for formula patterns:**
```js
const unit = require('./src/data/german-v2/unit-NN.js').default;
for (const les of unit.lessons) {
  for (let i = 0; i < les.steps.length; i++) {
    const s = les.steps[i];
    if (s.type === 'tip') {
      const text = s.text || '';
      const dd = typeof s.deepDive === 'string' ? s.deepDive : s.deepDive?.text || '';
      const arrows = (text.match(/→/g) || []).length;
      const plusses = (text.match(/ \+ /g) || []).length;
      const equals = (text.match(/ = /g) || []).length;
      if (arrows >= 2 || plusses >= 2 || equals >= 2) {
        console.log(`FORMULA: ${les.id} step${i} "${s.title}" — ${arrows} arrows, ${plusses} plusses, ${equals} equals`);
        console.log(`  text: ${text.substring(0, 200)}`);
      }
      if (text.length > 300 && !text.includes('\n')) {
        console.log(`WALL: ${les.id} step${i} "${s.title}" — ${text.length} chars, no breaks`);
      }
    }
  }
}
```

**Fix pattern:**
```
BAD:  "bis + morgen → bis morgen (see you tomorrow)\nbis + später → bis später (see you later)"
GOOD: "German builds farewells with bis (until) plus a time word:\n- bis morgen — see you tomorrow\n- bis später — see you later\n- bis bald — see you soon\nYou can combine bis with any time expression!"
```

---

### Audit 3: PP44 — Hint Quality

**Rule**: Hints must GUIDE, not GIVE. 15+ characters. Must help the learner THINK toward the answer without containing it.

**Check on every step with a hint field:**

1. **Too vague**: "Think about it" / "Remember the rule" / "Consider the context" — useless. The hint must teach.
2. **Too revealing**: Describes the answer so precisely only one option fits — defeats the purpose.
3. **Category-only**: "It's a verb" / "Think about dative" — too generic to help.
4. **Wrong direction**: Hint points to wrong grammar concept.
5. **Too short**: Under 15 characters.
6. **Contains answer word** (PP8): This was mechanically scanned but check again — the script uses word boundaries, human review catches edge cases.

**Good hint examples:**
- "This word describes the action of moving through water using your arms and legs."
- "In German, this preposition always takes dative — think about WHERE, not WHERE TO."
- "The response literally means 'gladly happened' — used after someone says thank you."

**Bad hint examples:**
- "Think about greetings." (too vague)
- "The answer is a separable verb." (category-only)
- "Choose the correct word." (useless)

---

### Audit 4: Teach Card Example Quality (PP32 + PP63)

**Check on every teach card:**

1. **example**: Does it show the word in NATURAL USE? Not "Der Hund ist ein Hund" (circular). A real-world sentence.
2. **exampleSrc**: Accurate translation? Not literal word-for-word but natural English?
3. **PP63 compliance**: Every content word in the example must be either: (a) the trg of THIS card, (b) taught in a PRIOR teach card, or (c) a function word. No untaught content words in examples.
4. **Dialogue format**: If example uses "A: ... B: ..." format, does it flow naturally? Are the speakers responding to each other?
5. **Register**: Example register matches CEFR level? A1 examples should use simple structures, B2 can be complex.

---

### Audit 5: Teach Card Note Quality

**Check on every teach card:**

1. **note**: Answers "WHAT does the learner need to know?" Max ~100 chars or use `\n` bullets.
   - Pronunciation guidance? Only for non-obvious words.
   - Usage context? When would you use this word vs a synonym?
   - Common mistakes? What do learners get wrong?
   - NOT a dictionary definition repeat (the `src` field already has that).
2. **funFact**: Genuinely interesting? Etymology, cultural context, memory hook, language family connection?
   - NOT filler like "This is a common word in German."
   - NOT a repeat of the note.
   - MUST add value that makes the learner remember the word.

---

### Audit 6: Verb Table Accuracy

**Check on every verb_table step:**

1. **Conjugation accuracy**: Every form correct? ich -e, du -st, er/sie/es -t, wir -en, ihr -t, sie/Sie -en (regular). Irregular forms correct?
2. **Pronoun completeness**: All 6 persons represented? (ich, du, er/sie/es, wir, ihr, sie/Sie)
3. **note field**: In English (PP61)? Explains when to use this tense/mood?
4. **src translations**: Each conjugated form has accurate English equivalent?
5. **Stem changes**: Irregular stems correctly shown? (e.g., sprechen: du sprichst, NOT du sprechst)

---

### Audit 7: Story Card Coherence

**Check on every story card:**

1. **trg**: Natural German at appropriate CEFR level? A1 stories use A1 vocabulary.
2. **src**: Accurate translation? Captures tone and meaning, not just words?
3. **Speaker/mood consistency**: Does the speaker tag match the content? "narrator" for narration, character names for dialogue?
4. **Continuity**: Do story cards in sequence tell a coherent story? No plot holes or missing context?
5. **Vocabulary**: Story uses words that have been taught? No surprise vocabulary the learner hasn't seen.

---

### Audit 8: Intro Card Quality

**Check on every intro step:**

1. **desc**: Sets up the lesson scenario in 1-2 sentences? In English (PP61)? Engaging, not sterile?
2. **goals**: 2-4 specific, measurable goals? In English? Start with action verb? "Learn 10 food words" not "Food."
3. **Narrative hook**: Does the intro make the learner WANT to continue? Connected to the Verumius story arc?

---

### Audit 9: Match Pair Quality

**Check on every match step:**

1. **Pair accuracy**: Every trg-src pair is a correct translation?
2. **No near-duplicates**: Pairs are distinct enough that learners can't confuse them by process of elimination?
3. **Consistent direction**: All pairs go trg→src or src→trg, not mixed?
4. **Difficulty appropriate**: Match sets at A1 have simple, distinct words. B2 can have nuanced distinctions.

---

### Audit 10: Cross-Lesson Pedagogy (PP24 + PP26 + PP46)

**Check across the unit:**

1. **PP24**: No prior unit already teaches this concept. No duplicate teach cards for the same word (check trg field across units at same level).
2. **PP26**: Core constructs NAMED in L1-L3 of the unit, ELABORATED later. Grammar introduced gently, not dumped.
3. **PP46 (B1+ only)**: 2+ constructs per example, 50%+ combo quizzes, 15+ steps minimum.
4. **Scaffolding**: Does the lesson build? Teach cards first, then simple quizzes, then harder quizzes? Not random order?
5. **Recycling**: Earlier vocabulary reused in later lessons? Not teach-and-forget?

---

## Execution Strategy

### Work in batches of 4 units. Max 4 agents at a time.

**Batch order** (most critical first):
1. **A1 Units 1-4** — First impression. Must be flawless.
2. **A1 Units 5-6** — Complete A1 before moving on.
3. **A2 Units 7-10**
4. **A2 Units 11-12**
5. **B1 Units 13-16**
6. **B1 Units 17-20**
7. **B1 Units 21-24**
8. **B2 Units 25-28**
9. **B2 Units 29-32**
10. **B2 Units 33-36**

### Per-unit workflow:

1. **Extract**: Run the node scripts above to dump all quizzes, tips, teach cards for the unit.
2. **Read**: Read each extracted item. Understand the German. Understand the pedagogical intent.
3. **Judge**: Apply all 10 audit checks. Log violations with structured output.
4. **Fix**: Edit the per-unit file directly. Rewrite bad content to be natural, accurate, pedagogically sound.
5. **Verify**: `npx vite build` after each unit. PP8 hint-leak re-scan if hints changed.
6. **Move on**: Next unit only after current unit is clean.

### Agent model: **Opus ONLY**. This requires native-level German linguistic judgment. Sonnet cannot do this.

### DO NOT:
- Skip units ("A1 is probably fine")
- Sample instead of checking everything
- Fix only what scripts flag — scripts miss the hardest problems
- Batch fixes without build checks
- Rush through B2 because "learners won't get there yet"

---

## Violation Output Format

Every violation must be logged with:

```
[AUDIT_N] [PP_RULE] VIOLATION: U[NN] [lesson_id] step[N]
  Type: [category]
  Current: [exact current content, first 150 chars]
  Problem: [why this is wrong, in one sentence]
  Fix: [exact replacement content]
```

After fixing, verify:
```
[AUDIT_N] [PP_RULE] FIXED: U[NN] [lesson_id] step[N]
  Was: [old content, first 80 chars]
  Now: [new content, first 80 chars]
```

---

## Fix Patterns (Reference)

### Semantic mismatch (PP32)
**Bad**: "Ich helfe dir gern. Oh, ___!" → answer "Gern geschehen"
**Why wrong**: "Gern geschehen" responds to "Danke", not an offer of help.
**Fix**: Change context: "Danke für die Hilfe! — ___!" → "Gern geschehen"
OR change answer: "Das ist nett von dir!" with matching distractors.

### Formula tips (PP36)
**Bad**: "bis + morgen → bis morgen (see you tomorrow)\nbis + später → bis später"
**Why wrong**: Reads like algebra, not language instruction.
**Fix**: "German builds farewells with bis (until) plus a time word:\n- bis morgen — see you tomorrow\n- bis später — see you later\n- bis bald — see you soon\nYou can combine bis with any time expression!"

### Sterile highlighting
**Bad**: Random words in green/bold that aren't the target vocabulary.
**Why wrong**: Highlighting should serve pedagogy — mark what to LEARN, not random words.
**Fix**: Only bold/highlight the TARGET WORD being taught. Use teal for translations per design system.

### Vague hints (PP44)
**Bad**: "Think about the greeting."
**Why wrong**: Doesn't help the learner think — just restates the topic.
**Fix**: "This response acknowledges someone's help — it literally means 'gladly happened.'"

### Circular notes
**Bad**: note on "essen" says "to eat" — same as the src field.
**Why wrong**: Adds zero value. The learner already sees the translation.
**Fix**: "Used for both the verb (to eat) and the noun (food/meal). Ich esse = I eat, das Essen = the food."

### Filler funFacts
**Bad**: "This is a very common word in everyday German."
**Why wrong**: Tells the learner nothing memorable.
**Fix**: "From Old High German 'ezzan'. Every Germanic language has a cognate: English eat, Dutch eten, Swedish äta."

### Contrived examples
**Bad**: example: "Der Hund ist ein Hund." (The dog is a dog.)
**Why wrong**: No native speaker says this. Circular, useless.
**Fix**: example: "Der Hund wartet an der Tür." (The dog is waiting at the door.)

---

## Validation After ALL Fixes

After completing all 10 batches:

1. `npx vite build` — must pass
2. Full PP8 hint-leak re-scan (all 36 units)
3. Full density check: 0 over 32, 0 under 18
4. Full pos/gender check: 0 missing
5. Spot-check 10 random lessons in browser (preview_start + preview_screenshot)
6. Write final validation report to `docs/QUALITY_AUDIT_REPORT.md`

---

## Files

| File | Purpose |
|------|---------|
| `src/data/german-v2/unit-01.js` through `unit-36.js` | Per-unit files to audit (~250 lines each) |
| `CLAUDE.md` | All pipeline rules |
| `docs/AGENT_CONTENT_RULES.md` | Full linguistic expert persona + content rules |
| `docs/SESSION_HANDOFF_2026-03-29c.md` | Session context |
| `docs/FORMAT_TEMPLATE.js` | Format reference for all step types |
| Memory: `design_spine_mandatory.md` | Visual design spine (highlighting rules) |

---

## Time Budget

Estimate per unit: 15-20 minutes (extract + review + fix + verify).
Total: ~10-12 hours across 36 units.
Per session (assuming 4-hour effective window): ~12-16 units per session.
Target: 3 sessions to complete all 36 units.
