# Session Handoff — 2026-04-02

> **Read CLAUDE.md first**, then this file. This is the continuation plan.

---

## What Was Done This Session

### 1. Full Project Analysis
Comprehensive gap analysis comparing vision doc against reality. Key finding: **German v2 is the only language in new format.** Korean, Dutch, French, Spanish all need v1→v2 rehaul. See the analysis summary below.

### 2. CEFR Lemma Cleanup (DONE, MERGED)
- **File**: `src/data/cefr-reference/german.js`
- **PR**: #88 — 156 messy `w:` field entries normalized
- Categories cleaned: reflexive `(sich)`, compound prefixes `(Kredit)-Karte`, plural tags `(pl.)`, separable verbs `(ab)fahren`, optional letters `gern(e)`, regional variants, junk entries, conjugation-in-lemma
- Build passes. Only 1 entry with parens remains: `da(r)-` (intentional)

### 3. Unit-36 Verified
All 36 German v2 unit files confirmed present in `src/data/german-v2/`.

---

## What Was NOT Done (THE ACTUAL WORK FOR NEXT SESSION)

### Priority 1: German Grammar Module (CRITICAL)

**Task**: Write `src/data/grammar/german.js`

**Why it matters**: The GrammarPage shows "Coming soon" for German. German is the flagship language. This is the #1 item in CLAUDE.md's "Next Priorities."

**Format**: Follow EXACTLY the structure of `src/data/grammar/dutch.js`:
```js
export const GERMAN_GRAMMAR = {
    A1: [ { title: "...", icon: "...", explanation: "...", rules: [...], examples: [...] }, ... ],
    A2: [ ... ],
    B1: [ ... ],
    B2: [ ... ],
};
```

**Each entry has:**
- `title`: Grammar concept name (English or German term)
- `icon`: Single emoji
- `explanation`: 1-2 sentences, English, conversational but precise
- `rules`: Array of strings. `**bold**` and `*italic*` for emphasis. `""` for spacing. Max ~15 per entry.
- `examples`: Array of strings. Format: `"German sentence. — English translation."`
- ALL explanatory text in English (PP61). Only German in examples/inline demos.

**Content to cover (42 constructs across A1-B2):**

**A1 (13 entries):**
1. Personal Pronouns — ich/du/er/sie/es/wir/ihr/sie/Sie, formal vs informal
2. Present Tense Regular — stem + endings (-e, -st, -t, -en, -t, -en)
3. sein & haben — full conjugation, irregular
4. Irregular Verbs — vowel changes: e→i (sprechen→spricht), e→ie (lesen→liest), a→a (fahren→fahrt)
5. Modal Verbs — konnen/mussen/wollen/sollen/durfen/mogen/mochten + infinitive at end
6. Separable Verbs — aufstehen/anfangen/einkaufen, prefix to end
7. Articles & Gender — der/die/das + ein/eine/ein, gender patterns (-ung/-heit/-keit→die, -chen/-lein→das)
8. Nominative vs Accusative — den/einen for masc acc, direct object triggers
9. Negation — nicht for verbs/adjectives, kein replaces ein
10. Word Order V2 Rule — verb always position 2, inversion
11. Questions — yes/no (verb first) + W-questions (wer/was/wo/wann/warum/wie)
12. Possessive Pronouns — mein/dein/sein/ihr/unser/euer/ihr/Ihr
13. Plural Formation — 5 patterns (-e, -er, -en/-n, -s, umlaut)

**A2 (10 entries):**
14. Dative Case — dem/der/dem/den+n, dative verbs (helfen, danken, gehoren, gefallen)
15. Two-Way Prepositions — an/auf/hinter/in/neben/uber/unter/vor/zwischen, Akk=motion Dat=location
16. Perfect Tense — haben/sein + past participle, sein for motion/state change
17. Past Participle Formation — ge-...-t (weak), ge-...-en (strong), no ge- (be-/ver-/ent-/-ieren)
18. Simple Past sein & haben — war/hatte
19. Imperative — du-form (Mach!), ihr-form (Macht!), Sie-form (Machen Sie!)
20. Adjective Endings Basics — after der-words mostly -e/-en, after ein-words -er/-e/-es/-en
21. Comparative & Superlative — -er, am -sten, irregulars (gut→besser, viel→mehr, gern→lieber)
22. Reflexive Verbs — sich waschen, sich freuen, Akk vs Dat reflexive
23. Conjunctions & Word Order — und/aber/oder/denn (no change) vs weil/dass/ob/wenn/als (verb to end)

**B1 (11 entries):**
24. Prateritum Full — regular stem+-te, irregular vowel change, used in writing/narrative
25. Genitive Case — des/der, nouns add -(e)s, prepositions wegen/wahrend/trotz/statt
26. Passive Voice — werden + Partizip II, Vorgangspassiv vs Zustandspassiv
27. Konjunktiv II — wurde + infinitive, hatte/ware/konnte/musste
28. Relative Clauses — der/die/das as relative pronoun, verb to end
29. Infinitive with zu — um...zu, ohne...zu, anstatt...zu
30. Full Adjective Declension — strong/weak/mixed across all 4 cases
31. N-Declension — der Junge→den/dem Jungen, der Student→den/dem Studenten
32. Prepositions by Case — Akk (durch/fur/gegen/ohne/um), Dat (aus/bei/mit/nach/seit/von/zu), Gen
33. Temporal Clauses — als/wenn/nachdem/bevor/wahrend/seitdem
34. Double Infinitive — Ich habe gehen mussen (not gemusst with infinitive)

**B2 (8 entries):**
35. Konjunktiv I — indirect speech, Er sagt er sei krank
36. Extended Adjective Constructions — die von vielen Touristen besuchte Stadt
37. Nominalization — das Lesen, das Gute, etwas Neues
38. Participial Constructions — der schlafende Hund, das geoffnete Fenster
39. Es as Placeholder — weather/existence/idiomatic/impersonal passive
40. Advanced Connectors — je...desto, sowohl...als auch, weder...noch, zwar...aber
41. Verb-Preposition Combos — sich freuen auf/uber, warten auf, da-/wo- compounds
42. Complex Word Order — main clause bracket, subordinate nesting

**Quality rules:**
- No em-dashes (PP22c)
- Max 2 consecutive `\n` in any string
- Every German example must be native-speaker quality
- ~500-700 lines total (Dutch module is ~580)

**DO NOT use agents for this.** Write it directly. The file is creative but mechanical — follow the Dutch template pattern entry by entry.

### Priority 2: Wire Grammar Into GrammarPage

After writing the grammar module, make these 4 edits:

**File 1: `src/pages/GrammarPage.jsx`**
- Line 5: Add `import { GERMAN_GRAMMAR } from '../data/grammar/german.js';`
- Line 12: Change `{ nl: DUTCH_GRAMMAR }` → `{ nl: DUTCH_GRAMMAR, de: GERMAN_GRAMMAR }`

**File 2: `src/verumlingua.jsx`**
- Line 21: Add `import { GERMAN_GRAMMAR } from './data/grammar/german.js';`
- Line 1372: Change `{ nl: DUTCH_GRAMMAR }` → `{ nl: DUTCH_GRAMMAR, de: GERMAN_GRAMMAR }`

Then run `npx vite build` to verify.

### Priority 3: German Concept Registry

**Task**: Replace the placeholder at lines 405-411 in `docs/CONCEPT_REGISTRY.md` with a real German section.

**How to build it efficiently** (DO NOT launch agents, do it with grep):

```bash
# Get unit metadata (title, level, lesson count, teach count) for all 36 units:
for i in $(seq -w 1 36); do
  FILE="src/data/german-v2/unit-$i.js"
  TITLE=$(grep -oP 'title:"[^"]*"' "$FILE" | head -1)
  LEVEL=$(grep -oP 'level:"[^"]*"' "$FILE" | head -1)
  LESSONS=$(grep -c 'id:"deu_' "$FILE")
  TEACHES=$(grep -c 'type:"teach"' "$FILE")
  echo "U$i | $LEVEL | $TITLE | $LESSONS lessons | $TEACHES teach"
done

# Get grammar constructs (tip/verb_table titles):
grep -rn 'type:"tip"' src/data/german-v2/ | grep -oP 'title:"[^"]*"'
grep -rn 'type:"verb_table"' src/data/german-v2/ | grep -oP 'title:"[^"]*"'
```

Format the output like the Korean section (lines 9-400 of CONCEPT_REGISTRY.md): Unit Overview table, Grammar Patterns table, Vocabulary Domains.

Start with:
```markdown
# German (de)

> German v2: U1-U36, 36 units (A1:6, A2:6, B1:12, B2:12), 369 lessons, 9,396 steps, 5,147 teach cards
> Format: v2 (trg/src, POS/gender tags, fun facts, story system). All validations PASS.
```

---

## Project Status Summary (for context)

### What's Working
| Language | Format | Units | Status |
|----------|--------|-------|--------|
| German v2 | v2 (new) | 36 | **PERFECT.** All PP validations pass. |
| Korean | v1 (old) | 30 | Production-ready. Most audited. Pending rehaul. |
| Dutch | v2 (old) | 30 | Production-ready. Pending rehaul. |
| French | v1 (old) | 30 | Production-ready. Pending rehaul. |
| Spanish | v1 (old) | 30 | Production-ready. Pending rehaul. |
| Arabic | skeleton | 5+31 scaffolded | A1+A2 translated. B1/B2 paused. |

### Vision vs Reality Gaps (Ranked)
1. **German grammar module missing** ← YOU DO THIS FIRST
2. CEFR word lists not downloaded (Goethe, TOPIK, NT2, DELF, DELE)
3. 4 languages need v1→v2 rehaul (Korean first, then Dutch, French, Spanish)
4. No test framework (no vitest, no jest)
5. 21MB main bundle needs better code splitting
6. Concept registry placeholder for German/French/Spanish

### Key Architecture Facts
- `src/pages/GrammarPage.jsx` is the ACTIVE grammar page (lazy loaded via App.jsx)
- `src/verumlingua.jsx` has a LEGACY copy of GrammarPage (update both)
- Grammar data format: `{ A1: [{title, icon, explanation, rules[], examples[]}], A2: [...], ... }`
- GRAMMAR_REFS map: `{ nl: DUTCH_GRAMMAR }` — add `de: GERMAN_GRAMMAR`
- Dutch module is at `src/data/grammar/dutch.js` (~580 lines) — use as format template

### Rules That Matter Most
- **PP61**: All explanatory text in English. Only target language in examples.
- **PP22c**: No em-dashes. Use periods, colons, commas, `\n` bullets.
- **Rule B7**: Max 4 agents at a time. Never burn >50% session on one batch.
- **Rule B14**: Opus for creative, Sonnet for validation. Don't use Opus for mechanical tasks.
- **Rule D1**: Use `\n` in JS strings, never literal newlines.
- Always `npx vite build` after changes (not `npm run build` — vite isn't globally installed).

---

## Anti-Stall Checklist

Before starting work, confirm:
- [ ] I will write the grammar module DIRECTLY, not via background agents
- [ ] I will update the user after each completed task
- [ ] I will not poll/sleep waiting for agents
- [ ] I will commit after each logical unit of work
- [ ] I will run `npx vite build` after file changes

---

## Commit & Push Checklist

After completing each priority:
1. `git add <specific files>`
2. `git commit` with descriptive message
3. `git push -u origin <branch-name>`
4. Tell the user what was done

Branch: create a new feature branch from main (e.g., `claude/german-grammar-module-XXXXX`).
