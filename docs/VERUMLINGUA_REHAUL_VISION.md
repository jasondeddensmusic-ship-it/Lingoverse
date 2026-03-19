# VerumLingua Platform Rehaul Vision

> Written 2026-03-19 from owner interview. This document is the COMPLETE design spec for the platform rehaul. No code is written until this document is approved. Every decision here was made by the owner.

---

## 1. Core Philosophy

**"We coded before designing. Never again."**

This document defines the complete vision for VerumLingua's curriculum, UI, and architecture. It replaces all conflicting instructions in CLAUDE.md and previous docs. After approval, CLAUDE.md and all pipeline rules will be updated to match.

---

## 2. Word Card Redesign

Every word card (teach step) follows this structure:

### 2.1 Card Layout (top to bottom)

```
+------------------------------------------+
|  NEW WORD / REVIEW badge                 |
|                                          |
|        das Buch                          |
|        (the book)                        |
|                                          |
|  +------------------------------------+ |
|  | A: Hast du ein Buch?               | |
|  +------------------------------------+ |
|  |               B: Ja, hier bitte!   | |
|  +------------------------------------+ |
|                                          |
|  ── fun info ─────────────────────────── |
|  From Old English "boc" (beech tree).    |
|  Books were carved on beech bark.        |
+------------------------------------------+
```

### 2.2 Dialogue Rules (STRICT)

- **ALWAYS exactly 2 bubbles.** One sender (A), one receiver (B). Never 1. Never 3+.
- Bubble style matches current iOS-style chat bubbles (already implemented and looking good).
- **Word type determines example style:**
  - **Nouns/adjectives**: Show the word in natural use
  - **Verbs**: Show the action happening
  - **Function words** (prepositions, articles): Show the grammatical pattern
  - **Phrases**: Show the phrase in a realistic exchange
- Words appearing in dialogue examples are NOT quizzable until formally taught. Exposure without testing is allowed and encouraged.

### 2.3 Fun Info Section (bottom of every card)

- **Always present.** No card ships without it.
- Content type is whichever fits best per word:
  - **Etymology/origin**: Where the word comes from, language family connections
  - **Cultural context**: How it's used in daily life, regional differences, formality
  - **Memory hook/cognate**: Connection to words the learner already knows
- No rigid formula. Each word gets its best fit.

### 2.4 What Happens to Current Multi-Line Dialogues

- **Mostly rewrite fresh.** Current 3-5+ line dialogues were built for the old format.
- **Keep gems** that already fit perfectly (natural 2-line exchanges).
- **Salvage all cut content** to a reference file per language for reuse in story dialogues.
- Nothing is thrown away. Everything is restructured.

---

## 3. Story Dialogue System (NEW)

### 3.1 Episode Format

Each unit has a **running story arc** spanning multiple lessons:
- Lesson 1: Meet the characters/situation
- Mid-unit: Conflict or complication develops
- Final lessons: Resolution

Stories grow with CEFR level:
- A1: Simple daily situations (4-6 exchanges per episode)
- A2: Social situations with mild complications (6-8 exchanges)
- B1: Complex scenarios requiring nuance (8-12 exchanges)
- B2: Professional/abstract situations (12-16 exchanges)

### 3.2 The VerumLingua Protagonist

**One named protagonist per SOURCE language** (not target language):

- English speakers get an English-named character navigating the target country
- When Arabic source is added: Arabic speakers get an Arab protagonist
- **The learner names their character** during onboarding (default suggestion provided)

**Personality archetype (same across all languages):**
- Stoic optimist who gets absurdly lucky AND unlucky simultaneously
- Lucky enough to stumble into the right place; unlucky enough to cause a scene
- Culture clashes drive humor (authentic, never corny)
- Takes everything in stride with quiet resilience
- Situations are memorable BECAUSE they're funny/absurd

**Character presence:**
- **Vocab card lessons**: Generic A:/B: speakers (cards are clean reference material)
- **Story lessons**: Named protagonist + rotating side characters per unit
- **Quizzes**: Test both vocab knowledge and story comprehension

### 3.3 Interleaved Lesson Flow (Science-Backed)

Based on interleaving effect research (Rohrer & Taylor, 2007):

```
Story Episode 1  -->  Vocab Lesson  -->  Story Episode 2
      -->  Grammar/Verb Lesson  -->  Story Episode 3  -->  Quiz
```

Pattern per unit:
1. **Story intro** (meet situation, expose new words in context)
2. **Vocab cards** (formally teach words encountered in story)
3. **Story development** (use taught words, introduce grammar)
4. **Grammar/verb lesson** (formalize constructs from story)
5. **Story climax** (complex use of all taught material)
6. **Comprehensive quiz** (vocab + grammar + story comprehension)
7. **Story resolution** (reward/payoff, preview next unit's setup)

### 3.4 Humor Guidelines

- Funny through SITUATION, not through jokes or puns
- The protagonist's luck/unluck dynamic is the primary comedy engine
- Cultural misunderstandings that are authentic (things that actually happen to foreigners)
- Never punching down. Never stereotypes. Comedy of errors, not mockery.
- Memorable because absurd, not because forced
- B2 stories can have subtle irony and wordplay

---

## 4. Curriculum Restructure

### 4.1 New Lesson Types

| Type | Content | Format |
|------|---------|--------|
| **vocab** | Word cards only, no quizzes | Cards with 2-bubble examples + fun info |
| **story** | Dialogue episodes with the protagonist | Multi-exchange dialogue + comprehension |
| **grammar** | Verb conjugations, constructs, rules | Deep dives + pattern practice |
| **quiz** | Mixed testing | MC, FB, drag_fill, translation, story comprehension |
| **review** | Spaced repetition of previous content | Interleaved vocab + grammar from earlier units |

### 4.2 Unit Structure Template

```
Unit N: [Theme] — Episode: "[Story Title]"
  L1: Story intro (episode 1) — meet the situation
  L2: Vocab cards — words from the story
  L3: Story development (episode 2) — grammar in context
  L4: Grammar/verb lesson — formalize constructs
  L5: Vocab cards — more words + review
  L6: Story climax (episode 3) — everything together
  L7: Comprehensive quiz
  L8: Story resolution + cultural deep dive
```

This is a TEMPLATE, not a mandate. P54 (anti-cramming) still applies: some units need more vocab lessons, some need more grammar, some need longer stories. The content decides.

### 4.3 Vocab-Only Lessons

- New lesson format: ONLY teach cards, no quizzes
- Purpose: pure vocabulary acquisition through exposure
- Each card: word + translation + 2-bubble example + fun info
- Density: 12-20 cards per vocab lesson (cards are faster than quiz steps)
- Words introduced here become quizzable in later quiz lessons

### 4.4 Content Salvage Strategy

All existing content across 5 languages is PRESERVED:
1. **Export all current sentences** from teach cards to salvage files per language
2. **Rewrite card examples** as 2-bubble format
3. **Reuse salvaged sentences** in story dialogues, quiz distractors, review steps
4. **Keep all grammar/verb tables** — these don't change
5. **Version history** always available as safety net

---

## 5. Settings Panel Redesign

### 5.1 Language-Specific Categories

**German:**
- Articles: der (blue) / die (coral) / das (purple)
- Cases: Nominativ / Akkusativ / Dativ / Genitiv (each with distinct color)
- Verbs, Adjectives, Adverbs, Prepositions, Conjunctions, Pronouns

**Korean:**
- Particles: topic (은/는), subject (이/가), object (을/를), location (에/에서)
- Honorific levels: 해요체, 합쇼체, 반말
- Verbs, Adjectives, Numbers/Counters

**Dutch:**
- Articles: de (blue) / het (gold)
- Verbs, Adjectives, Adverbs, Prepositions, Conjunctions, Pronouns

**French:**
- Articles: le (blue) / la (coral) / les (indigo)
- Verbs, Adjectives, Adverbs, Prepositions, Conjunctions, Pronouns

**Spanish:**
- Articles: el (blue) / la (coral) / los/las (indigo)
- Verbs, Adjectives, Adverbs, Prepositions, Conjunctions, Pronouns

Languages WITHOUT articles/particles/honorifics do NOT show those categories. Zero clutter.

### 5.2 Visual Controls (Full Grammar Visualization)

- **Color toggles**: on/off per POS category
- **Understripe function**: choose what the line under a word represents (gender, case, word type)
- **Bold**: emphasis for key constructs
- **Dotted underline**: irregular forms
- **Italics**: borrowed/foreign words
- Complete visual grammar toolkit, not just colors

### 5.3 Settings UI (Two Access Points)

**In-lesson (quick access):**
- Mobile: bottom sheet (slides up, drag handle)
- Desktop: floating panel below gear icon
- Shows current language's color toggles and understripe controls
- Closes on tap outside

**In profile/settings (full page):**
- Dedicated settings page with all options
- Device preference toggle (mobile/desktop)
- Language-specific customization with explanations
- Preset buttons (Gender only, Content words, Full grammar, etc.)
- Color legend showing what each color means

### 5.4 Settings Design Language

- VerumLingua candy gloss bubble style (matching search bar dropdown)
- Semi-transparent glass effect on dark mode
- Purple accent consistent with brand
- Smooth animations on open/close
- Touch-friendly chip toggles on mobile

---

## 6. Vocab Page Overhaul

### 6.1 Dictionary Foundation: Complete CEFR Word Lists (CRITICAL)

**Before building ANYTHING, download complete official CEFR vocabulary lists per language.** These lists ARE the dictionary. Everything else is built from them.

- **Korean**: TOPIK vocabulary list (6,000+ words for TOPIK II), National Institute frequency lists
- **Dutch**: NT2 Basiswoordenlijst (~4,000 words), Inburgeringsexamen lists
- **German**: Goethe-Institut Wortliste (A1: ~650, A2: ~1,300, B1: ~2,400, B2: ~4,000+)
- **French**: DELF vocabulary lists by level, Referentiel de l'Alliance Francaise
- **Spanish**: Plan Curricular del Instituto Cervantes vocabulary inventory (A1-B2)

These lists define EVERY word the platform must know. The dictionary AND the curriculum are both built FROM these lists. The CEFR word lists are the single source of truth: the dictionary contains them all, and the curriculum ensures every word is taught through vocab lessons, story dialogues, or grammar lessons. Teach cards are a subset of the dictionary. The dictionary is the complete set.

### 6.2 Lemma-Only Display (BASE FORMS)

**The dictionary and vocab page show ONLY the base form (lemma) of each word:**
- **Verbs**: infinitive only (sehen, manger, hablar, kijken, 보다)
- **Nouns**: singular nominative with article (das Buch, le livre, el libro, het boek)
- **Adjectives**: base form, not declined (nett, grand, bonito, leuk)

**Clicking a word opens the full entry with tabs:**
- **Tab 1: Overview** — word, translation, article/gender, pronunciation, CEFR level, fun info
- **Tab 2: Forms** — ALL conjugations (verbs), declensions (nouns), agreement forms (adjectives). Complete paradigm tables.
- **Tab 3: Examples** — every example sentence containing this word from the curriculum
- **Tab 4: Grammar** — usage rules, irregular patterns, common mistakes
- **Tab 5: Related** — synonyms, antonyms, cognates, word family, Sino-Korean morphemes

This means: the browse/search view is CLEAN (one entry per word, base form only). ALL the depth is inside the expanded entry. A learner searching "sehen" finds ONE entry, clicks it, and sees: sehe, siehst, sieht, sehen, seht, sehen + Perfekt (hat gesehen) + Prateritum (sah) + Konjunktiv II (sahe) etc. in the Forms tab.

### 6.3 Three Modes in One Page

**Search mode (dictionary):**
- Search bar at top (accepts source AND target language, romanization for non-Latin)
- Results: lemma + POS badge + translation + level badge (BASE FORM ONLY)
- Click to expand full entry with tabs (forms, examples, grammar, related)
- Filter by: level, category, learned/unlearned

**Browse mode (visual categories):**
- Words organized by category (food, family, travel, emotions, etc.)
- Grid layout with category icons
- Tap category to see all words in base form
- Discovery-oriented exploration

**Review mode (spaced repetition):**
- Words you've learned, sorted by strength
- Weak words surface first
- Built-in flashcard quiz mode
- Practice tool, not reference

### 6.4 Data Cleanup

- Strip ALL quiz data from vocab display (no options, hints, answers)
- Remove em-dashes from display
- Show ONLY: word, translation, POS, level, example sentence
- Separate vocab data from quiz data architecturally
- Built fresh from scratch with VerumLingua design language

---

## 7. Field Rename: nl/en --> target/source

### 7.1 Scope

Every `nl` field across all units files and engine code becomes `target` (or `tgt`).
Every `en` field becomes `source` (or `src`).

### 7.2 Timing

During the rehaul, as a dedicated session. Not mixed with other structural changes.

### 7.3 Files Affected

- `src/data/units-dutch.js` (~6,030 lines)
- `src/data/units-korean.js` (~8,700 lines)
- `src/data/units-german.js` (~7,407 lines)
- `src/data/units-french.js` (~1.3MB)
- `src/data/units-spanish.js` (~5,262 lines)
- `src/data/units-other.js` (~170 lines)
- `src/lingoverse.jsx` (engine renderers, ~100+ references)
- `src/data/dictionary.js` (WORD_DB builder)

### 7.4 Method

Mechanical find-and-replace with validation. New code (new lesson formats, new components) uses `target`/`source` from day one.

---

## 8. Build Order

After this document is approved:

1. **Update CLAUDE.md and all docs** to match this vision. Delete contradicting instructions. **(D114 — DONE)**
2. **Download complete CEFR word lists** for all 5 languages. These are the foundation for BOTH the dictionary AND the curriculum. No building without them. (See Section 6.1)
3. **Language-specific settings panel** — redesign with full grammar visualization per language
4. **Vocab page redesign** — search + categories + review, lemma-only display, built from scratch
5. **New word card format** — 2-bubble examples + fun info bottom (prototype in ONE language)
6. **Story dialogue system** — protagonist setup, episode format (prototype in ONE language)
7. **`nl`/`en` --> `target`/`source` rename** — dedicated session, mechanical
8. **Curriculum restructure** — rebuild units from CEFR word lists. Every word on the list gets taught. New lesson format (vocab, story, grammar, quiz, review). One language at a time.
9. **Content salvage** — export and redistribute old dialogue content
10. **Full platform sweep** — apply new standards across all 5 languages

Each step is its own session or set of sessions. No step starts until the previous is solid.

**The CEFR word lists (step 2) are the single source of truth for vocabulary.** The dictionary is built from them. The curriculum is built from them. Gap detection is automated: compare the list against dictionary entries and teach cards. Zero gaps.

---

## 9. What This Replaces

This vision document SUPERSEDES:
- The old 21-category POS color map (now language-specific)
- The "gold bubble for new words" system (under review — may become teach-card-for-every-word)
- The multi-line dialogue standard on teach cards (now 2-bubble only)
- The D112 curriculum audit approach (now part of larger restructure)
- The generic settings panel (now language-specific with full visualization controls)

This vision document PRESERVES:
- All pipeline quality rules (P8, P34, P43, P48, P49, P52, etc.)
- The anti-cramming doctrine (P54)
- The concept-driven unit sizing (P56)
- The agent deployment standards (Rules 1-16)
- The engine architecture (React 18 + Vite, CSS-in-JS)
- The deploy workflow (GitHub Actions to mijndomein.nl)

---

## 10. Open Questions (To Resolve During Build)

1. **Default protagonist name** for English source — what's the suggestion before learner renames?
2. **Exact color values** for German cases (Nom/Akk/Dat/Gen) — need to be visually distinct
3. **Vocab lesson density** — is 12-20 cards the right range, or should it flex more?
4. **Story episode length** — exact exchange counts per CEFR level (proposed ranges above, need testing)
5. **Spaced repetition algorithm** — which SRS variant for the review mode? (SM-2, FSRS, custom?)
6. **Audio** — when do we add TTS to vocab cards? (infrastructure exists via browser TTS)

---

*This document was written by Claude Opus 4.6 from a structured interview with the VerumLingua owner on 2026-03-19. Every design decision was made by the owner. The science-backed recommendations (character psychology, interleaving) were presented with citations and confirmed by the owner.*
