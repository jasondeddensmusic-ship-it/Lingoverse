# Session Handoff — 2026-04-02b

> **Read CLAUDE.md first**, then this file.
> Previous handoff: `docs/SESSION_HANDOFF_2026-04-02.md` (has full context on what was analyzed).

---

## What Was Done This Session

1. Read the previous handoff and confirmed the 3 priorities.
2. Read the Dutch grammar template (`src/data/grammar/dutch.js`, ~580 lines) to understand the format.
3. Confirmed branch is `claude/read-session-handoff-QLfX4`.
4. Confirmed the grammar directory has only `dutch.js` and `idioms-dutch.js`.
5. **No files were created or modified.** No commits made.

### Key Finding: Em-Dash Convention
The Dutch grammar file uses 231 em-dashes (`—`) in example strings for "Target — Translation" format. PP22c bans em-dashes in lesson content, but grammar reference files use them consistently. Follow the Dutch convention for consistency.

---

## THE PLAN: Step-by-Step, No Stalling

### Phase 1: Infrastructure First (do this BEFORE any content)

**Step 1.1: Create the skeleton file**
Write `src/data/grammar/german.js` with JUST the export structure and empty arrays:
```js
// German Grammar Reference — Goethe-Institut aligned, A1-B2
// Format: { A1: [...], A2: [...], B1: [...], B2: [...] }

export const GERMAN_GRAMMAR = {
    A1: [],
    A2: [],
    B1: [],
    B2: [],
};
```
That's it. ~8 lines. Commit this.

**Step 1.2: Wire it into the app (4 small edits)**
- `src/pages/GrammarPage.jsx` line 5: Add import
- `src/pages/GrammarPage.jsx` line 12: Add to GRAMMAR_REFS map
- `src/verumlingua.jsx` line 21: Add import
- `src/verumlingua.jsx` line 1372: Add to GRAMMAR_REFS map

Run `npx vite build`. Commit. Now German shows in GrammarPage (empty, but wired).

**Step 1.3: Verify in browser**
Run `npm run dev` and confirm German grammar page loads without errors (will show empty).

### Phase 2: Content Per Level (one level at a time)

**IMPORTANT: Write each level as a SEPARATE edit to the file. Never write more than ~150 lines at a time.**

**Step 2.1: A1 entries (13 entries, ~180 lines)**
Edit `src/data/grammar/german.js` — fill the A1 array. Use Edit tool, not Write.
Build. Commit: "feat: add A1 German grammar (13 constructs)"

**Step 2.2: A2 entries (10 entries, ~140 lines)**
Edit — fill the A2 array.
Build. Commit: "feat: add A2 German grammar (10 constructs)"

**Step 2.3: B1 entries (11 entries, ~160 lines)**
Edit — fill the B1 array.
Build. Commit: "feat: add B1 German grammar (11 constructs)"

**Step 2.4: B2 entries (8 entries, ~120 lines)**
Edit — fill the B2 array.
Build. Commit: "feat: add B2 German grammar (8 constructs)"

### Phase 3: Concept Registry

**Step 3.1: Gather data via grep**
```bash
for i in $(seq -w 1 36); do
  FILE="src/data/german-v2/unit-$i.js"
  TITLE=$(grep -oP 'title:"[^"]*"' "$FILE" | head -1)
  LEVEL=$(grep -oP 'level:"[^"]*"' "$FILE" | head -1)
  LESSONS=$(grep -c 'id:"deu_' "$FILE")
  TEACHES=$(grep -c 'type:"teach"' "$FILE")
  echo "U$i | $LEVEL | $TITLE | $LESSONS lessons | $TEACHES teach"
done
```

**Step 3.2: Write German section in CONCEPT_REGISTRY.md**
Replace placeholder at lines 405-411. Commit.

### Phase 4: Push
Push all commits to `claude/read-session-handoff-QLfX4`.

---

## Content Spec for Each Level

### A1 (13 entries)
1. Personal Pronouns — ich/du/er/sie/es/wir/ihr/sie/Sie
2. Present Tense Regular — stem + endings (-e, -st, -t, -en, -t, -en)
3. sein & haben — full conjugation
4. Irregular Verbs — e→i, e→ie, a→ä vowel changes
5. Modal Verbs — können/müssen/wollen/sollen/dürfen/mögen
6. Separable Verbs — aufstehen/anfangen/einkaufen
7. Articles & Gender — der/die/das + ein/eine/ein, gender patterns
8. Nominative vs Accusative — den/einen for masc acc
9. Negation — nicht vs kein
10. Word Order V2 Rule — verb always position 2
11. Questions — yes/no + W-questions
12. Possessive Pronouns — mein/dein/sein/ihr/unser/euer/ihr/Ihr
13. Plural Formation — 5 patterns

### A2 (10 entries)
14. Dative Case — dem/der/dem/den+n
15. Two-Way Prepositions — Akk=motion, Dat=location
16. Perfect Tense — haben/sein + past participle
17. Past Participle Formation — ge-...-t, ge-...-en, no ge-
18. Simple Past sein & haben — war/hatte
19. Imperative — du/ihr/Sie forms
20. Adjective Endings Basics — after der/ein words
21. Comparative & Superlative — -er, am -sten
22. Reflexive Verbs — sich waschen, sich freuen
23. Conjunctions & Word Order — coordinating vs subordinating

### B1 (11 entries)
24. Präteritum Full — regular and irregular
25. Genitive Case — des/der, -(e)s
26. Passive Voice — werden + Partizip II
27. Konjunktiv II — würde + infinitive
28. Relative Clauses — der/die/das as relative pronoun
29. Infinitive with zu — um...zu, ohne...zu
30. Full Adjective Declension — strong/weak/mixed
31. N-Declension — der Junge→den Jungen
32. Prepositions by Case — Akk/Dat/Gen groups
33. Temporal Clauses — als/wenn/nachdem/bevor
34. Double Infinitive — Ich habe gehen müssen

### B2 (8 entries)
35. Konjunktiv I — indirect speech
36. Extended Adjective Constructions
37. Nominalization — das Lesen, das Gute
38. Participial Constructions
39. Es as Placeholder — weather/existence/impersonal
40. Advanced Connectors — je...desto, sowohl...als auch
41. Verb-Preposition Combos — da-/wo- compounds
42. Complex Word Order — clause bracket, nesting

---

## Entry Format (copy-paste template)

```js
{ title: "Entry Title", icon: "🎯", explanation: "1-2 sentences in English explaining the concept.", rules: [
  "Rule or pattern line 1",
  "**Bold** for emphasis, *italic* for German inline",
  "",
  "Blank string for spacing",
], examples: [
  "German sentence here. — English translation here.",
  "Another example. — Another translation.",
]},
```

Rules:
- ALL explanatory text in English (PP61)
- German only in examples and inline demos within rules
- No em-dashes in rules text (use periods, colons). Em-dashes OK in examples for "German — English" (matching Dutch convention)
- Max 2 consecutive `\n` — but these are arrays, so no `\n` needed (one string per line)
- `**bold**` and `*italic*` are rendered by the GrammarPage
- Each entry: ~12-18 lines. Keep rules[] to ~8-15 items. Keep examples[] to ~4-7 items.
- Every German example must be native-speaker quality

---

## Anti-Stall Rules

1. **NEVER write more than 150 lines in a single tool call.** Break into level-sized chunks.
2. **Commit after every level.** Don't batch commits.
3. **Build after every level.** Catch errors early.
4. **Update the user after every step.** "A1 done, 13 entries, building now..."
5. **Infrastructure before content.** Skeleton + wiring first, content second.
6. **No agents for writing grammar entries.** Write directly. Agents are for validation/grep only.
7. **If a Write/Edit fails, diagnose and retry once.** Don't loop.

---

## Files to Touch

| File | Action |
|------|--------|
| `src/data/grammar/german.js` | CREATE (skeleton, then fill per level) |
| `src/pages/GrammarPage.jsx` | EDIT (2 lines: import + map entry) |
| `src/verumlingua.jsx` | EDIT (2 lines: import + map entry) |
| `docs/CONCEPT_REGISTRY.md` | EDIT (replace German placeholder) |

---

## Branch

Work on: `claude/read-session-handoff-QLfX4` (already checked out).
Push with: `git push -u origin claude/read-session-handoff-QLfX4`
