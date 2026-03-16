# French A1-B2 Build Agent Prompt

> Copy this entire prompt into a new Claude Code session to start the French build.

---

## PROMPT

You are building the complete French A1-B2 curriculum for LingoVerse, a React-based language learning platform.

### MANDATORY FIRST STEPS (do these before writing ANY content):

1. **Read `/home/user/Lingoverse/CLAUDE.md`** — This is the single source of truth. It contains all pipeline rules (P8, P22c, P24, P26, P27, P34, P37, P43, P44, P45, P46, P48, P49, P50), agent deployment standards (Rules 1-10), and the French build plan.

2. **Read `/home/user/Lingoverse/docs/FRENCH_A1_B2_HANDOFF.md`** — This contains the complete handoff from the German build, including critical lessons learned from D103/D104 (white screen crash from stray commas, missing MC ans fields, scrambled unit order).

3. **Read `/home/user/Lingoverse/docs/POLYGLOT_PIPELINE_STANDARDS.md`** — The Five Universal Pillars that govern all content.

4. **Study the German units file as your template**: Read the first 100 lines of `/home/user/Lingoverse/src/data/units-german.js` to understand the exact format. French units must follow this exact structure.

5. **Study the German foundations as your template**: Read `/home/user/Lingoverse/src/data/foundations.js` lines ~257-367 (FOUNDATIONS_BY_LANG["de"]) and lines ~1838-2550 (FK_PLAYTHROUGH["de"] + FK_GATE_QUIZ["de"]).

### WHAT YOU ARE BUILDING:

**French A1-B2 curriculum**: ~28-30 units, ~224-240 lessons, ~4,500+ steps.

The full curriculum plan is in CLAUDE.md under "### NEXT: French A1-B2 Build". Follow it exactly.

### EXECUTION ORDER (strict sequence):

**Phase 0: Infrastructure**
1. Build `LANG_BLUEPRINT["fr"]` in `src/data/metadata.js` (after the "de" entry, before "ar"). Follow the de/nl format exactly. Include: scriptType, writingSystem, phonology (nasal vowels, liaison, silent letters, R), morphology (3 verb groups, gender, plurals), grammarOrder (SVO), genderSystem (le/la), articleSystem, formalitySystem (tu/vous), difficultyProfile, culturalContext, learningRisks.

2. Expand `FOUNDATIONS_BY_LANG["fr"]` in `src/data/foundations.js` from 1 section to 5-6 sections with ~25 items. Current content (lines ~1244-1262) has alphabet + accents + nasals + sounds + silent letters in 1 section. Split into: (1) Alphabet + special characters, (2) Vowels (oral + nasal), (3) Consonants + liaison, (4) Silent letters + spelling patterns, (5) Accents system, (6) Grammar preview.

3. Build `FK_PLAYTHROUGH["fr"]` stages in `src/data/foundations.js`. Fill the empty stages array at line ~2238. Build ~6 stages with ~15-20 lessons total. Follow the German FK_PLAYTHROUGH structure exactly.

4. Build `FK_GATE_QUIZ["fr"]` in `src/data/foundations.js`. 5 tasks (A-E), ~35 items. Follow the German FK_GATE_QUIZ structure.

5. Create `src/data/units-french.js`:
```javascript
// src/data/units-french.js — French (lang:"fr") curriculum units
export default [
];
```

6. Update `src/lingoverse.jsx`:
   - Add import: `import frenchUnits from './data/units-french.js';` (after the germanUnits import)
   - Update UNITS spread: `const UNITS = [...dutchUnits, ...koreanUnits, ...germanUnits, ...frenchUnits, ...otherUnits];`

7. Run `npm run build` to verify everything compiles.

**Phase 1-4: Build Units**
Build units sequentially: A1 (U1-U8), then A2 (U9-U16), then B1 (U17-U24), then B2 (U25-U30).

For EACH unit:
- 8 lessons per unit
- 18-20+ steps per lesson (P43 minimum, ENFORCED per lesson)
- Every teach card has A:/B: dialogue in `example` and `exampleEn` fields
- Every noun teach card includes le/la article in the `nl` field
- Lesson IDs: `fre{unitN}l{lessonN}` (e.g., fre1l1, fre1l2, ..., fre30l8)
- All units: `lang:"fr"`, `track:"v1"`, `color:"#7B5EE8"`, `board:true` on every lesson

After EACH level (A1, A2, B1, B2), run quality audit:
- P8: No hint-reveals (hint must not contain the ans string)
- P34: Every word in quizzes was taught before use
- P48: No fb steps with {2} or {3} (those need drag_fill)
- P49: No CEFR labels in learner-facing content
- P22c: No em-dashes

**Phase 5: Post-Build Structural Validation (Rule 10, D104)**
After ALL units are built, run this validation:
```javascript
node -e "
const fs = require('fs');
const code = fs.readFileSync('src/data/units-french.js', 'utf8');
const cjsCode = code.replace('export default', 'module.exports =');
fs.writeFileSync('/tmp/test-french.js', cjsCode);
const units = require('/tmp/test-french.js');
let issues = [];
units.forEach((u, i) => {
  if (!u) { issues.push('Index ' + i + ': UNDEFINED ELEMENT'); return; }
  if (u.n !== i + 1) issues.push('Unit ' + u.n + ' at index ' + i + ': wrong order');
  u.lessons.forEach(l => {
    if (!l.board) issues.push(l.id + ': missing board:true');
    if (l.steps.length < 18) issues.push(l.id + ': only ' + l.steps.length + ' steps');
    l.steps.forEach((s, si) => {
      if (s.type === 'mc' && !s.ans) issues.push(l.id + ' step ' + si + ': mc missing ans');
      if (s.type === 'fb' && !s.a) issues.push(l.id + ' step ' + si + ': fb missing a');
      if (s.type === 'fb' && s.s && s.s.includes('{2}')) issues.push(l.id + ' step ' + si + ': P48');
      if (s.type === 'teach' && (!s.nl || !s.en)) issues.push(l.id + ' step ' + si + ': teach missing nl/en');
      if (s.type === 'drag_fill' && !s.blanks) issues.push(l.id + ' step ' + si + ': drag_fill missing blanks');
      if (s.type === 'match' && !s.pairs) issues.push(l.id + ' step ' + si + ': match missing pairs');
    });
  });
});
console.log(issues.length === 0 ? 'PASS: ' + units.length + ' units, 0 issues' : 'FAIL: ' + issues.length + ' issues');
issues.forEach(i => console.log('  ' + i));
"
```
This MUST return 0 issues before the build is considered complete.

### KEY FRENCH-SPECIFIC RULES:

1. **Elision is mandatory.** le + homme = l'homme, la + école = l'école. Never write "le homme" or "la école".
2. **Liaison in examples.** When writing dialogue examples, show liaison where it occurs naturally: "les amis" (pronounced /lez ami/). Use phonetic field to show it.
3. **Accent marks are non-optional.** é, è, ê, ë, à, â, ù, û, ô, î, ï, ç must always be correct. A missing accent is a spelling error in French.
4. **Passé composé agreement.** With être verbs: past participle agrees with subject (elle est allée). With avoir + preceding COD: elle les a vues. Teach these rules explicitly.
5. **Ne...pas in teach cards.** Always show both formal (Je ne sais pas) and informal (Je sais pas) in A1-A2. Explain that ne is dropped in speech but required in writing.
6. **Phonetics format.** Use ASCII-only phonetics per P27. Examples: "bon-ZHOOR" for bonjour, "mair-SEE" for merci, "oh ruh-VWAHR" for au revoir. No IPA, no slashes.

### COMMIT STRATEGY:
- Commit after each phase (infrastructure, A1, A2, B1, B2)
- Push to the designated branch after each commit
- Small, descriptive commit messages

### FINAL DELIVERABLE:
- `src/data/units-french.js`: ~28-30 units, ~224-240 lessons, ~4,500+ steps
- `src/data/foundations.js`: Updated with French foundations + playthrough + gate quiz
- `src/data/metadata.js`: Updated with LANG_BLUEPRINT["fr"]
- `src/lingoverse.jsx`: Updated imports and UNITS spread
- Validation script PASS with 0 issues
- `npm run build` passes
- CLAUDE.md updated with French build status
