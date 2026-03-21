# Settings Panel Redesign — Session Handoff

> **Rehaul Step 3** (see `docs/VERUMLINGUA_REHAUL_VISION.md` Section 5)
> Step 1: D114 docs update (COMPLETE)
> Step 2: Download complete CEFR word lists for all 5 languages (foundation for dictionary + curriculum)
> **This step**: Language-specific settings panel redesign — **V1 COMPLETE (2026-03-19)**
> Next step after this: Vocab page redesign (Step 4) — **DONE (D116, 2026-03-19)**. Next: New word card format (Step 5)
>
> **Commit**: PR #67 merged to main. `GRAMMAR_SETTINGS` in dictionary.js + per-language panel in verumlingua.jsx.
>
> **UPDATE (2026-03-19):** Grammar settings panel is now ALSO integrated into the Vocab Page (D116). Same component, same localStorage keys (`vl_grammar_filters_v2`), shared filter state. Disabled categories affect word highlight colors on both the vocab page and in lessons. The settings panel is accessible from: (1) lesson engine gear icon, (2) vocab page gear icon.

---

## What Exists Now (v1 — shipped but needs complete redesign)

**Current code** in `src/verumlingua.jsx`:
- State: `showGrammarSettings`, `grammarFilters`, `defaultFilters` (line ~10077)
- Generic filter chips: gender, nouns, verbs, adjectives, adverbs, prepositions, conjunctions, pronouns, numbers, particles, newWords
- 4 presets: Gender only, Content words, Everything, None
- Single gear icon next to Aa toggle (line ~10639)
- Settings panel renders inline below the toggle (line ~10655)
- `universalHl()` function (line ~11544) uses `posFilterMap` (line ~11678) to check which categories are enabled
- Colors come from `POS_COLORS` and `GENDER_COLORS` in `src/data/dictionary.js`
- localStorage key: `vl_grammar_filters`

**Problems with v1:**
- Generic — same filter list for ALL languages
- No language-specific categories (German cases, Korean particles, Dutch de/het)
- No understripe controls
- Not VerumLingua branded (plain chips, no bubble style)
- Only one access point (in-lesson gear icon)
- No color legend or explanations
- Owner feedback: "MESSY. Needs complete redesign."

---

## What to Build (from Vision Doc Section 5)

### 5.1 Language-Specific Categories

The settings panel MUST show ONLY categories relevant to the current language:

**German:**
- Articles: der (blue #4A8FE7) / die (coral #E8475E) / das (emerald green #00796B)
- Cases: Nominativ / Akkusativ / Dativ / Genitiv (each with distinct color)
- Verbs, Adjectives, Adverbs, Prepositions, Conjunctions, Pronouns

**Korean:**
- Particles: topic (은/는), subject (이/가), object (을/를), location (에/에서)
- Honorific levels: 해요체, 합쇼체, 반말
- Verbs, Adjectives, Numbers/Counters

**Dutch:**
- Articles: de (blue #4A8FE7) / het (gold #E8960A)
- Verbs, Adjectives, Adverbs, Prepositions, Conjunctions, Pronouns

**French:**
- Articles: le (blue #4A8FE7) / la (coral #E8475E) / les (indigo #6366F1)
- Verbs, Adjectives, Adverbs, Prepositions, Conjunctions, Pronouns

**Spanish:**
- Articles: el (blue #4A8FE7) / la (coral #E8475E) / los/las (indigo #6366F1)
- Verbs, Adjectives, Adverbs, Prepositions, Conjunctions, Pronouns

Languages WITHOUT articles/particles/honorifics do NOT show those categories.

### 5.2 Visual Controls

- **Color toggles**: on/off per POS category
- **Understripe function**: dropdown to choose what the underline represents (gender, case, word type)
- **Bold**: toggle for emphasis on key constructs
- **Dotted underline**: toggle for irregular forms
- **Italics**: toggle for borrowed/foreign words

### 5.3 Two Access Points

**In-lesson (quick access):**
- Mobile: bottom sheet (slides up from bottom, drag handle at top)
- Desktop: floating panel below gear icon (current position is fine)
- Shows current language's color toggles and understripe controls
- Closes on tap outside

**In profile/settings (full page):**
- Dedicated settings page accessible from profile
- Device preference toggle (mobile/desktop)
- Language-specific customization with color legend and explanations
- Preset buttons: Gender only, Content words, Full grammar, Everything
- Color legend showing what each color means for the current language

### 5.4 Design Language

- VerumLingua candy gloss bubble style (semi-transparent, rounded, matching search bar dropdown)
- Semi-transparent glass effect on dark mode
- Purple accent (#7B5EE8) consistent with brand
- Smooth animations on open/close (CSS transitions, not JS)
- Touch-friendly chip toggles on mobile (min 44px tap targets)

---

## Data Architecture

### Where language-specific categories live

`LANG_BLUEPRINT` in `src/data/metadata.js` (line ~317) already has per-language grammar data:
- `genderSystem` — article types and gender info
- `articleSystem` — definite/indefinite articles
- `formalitySystem` — formality levels

**New data needed**: A `grammarColorCategories` map per language defining which toggle categories to show and their colors. This could live in `src/data/dictionary.js` alongside `POS_COLORS` or in a new section of `metadata.js`.

Suggested structure:
```js
export const GRAMMAR_SETTINGS = {
  de: {
    groups: [
      { id: "gender", label: "Gender Colors", items: [
        { id: "article_m", label: "der (masculine)", color: "#4A8FE7" },
        { id: "article_f", label: "die (feminine)", color: "#E8475E" },
        { id: "article_n", label: "das (neuter)", color: "#7B5EE8" },
        { id: "noun_understripe", label: "Noun understripes", type: "toggle" },
      ]},
      { id: "cases", label: "Cases", items: [
        { id: "case_nom", label: "Nominativ", color: "..." },
        { id: "case_akk", label: "Akkusativ", color: "..." },
        { id: "case_dat", label: "Dativ", color: "..." },
        { id: "case_gen", label: "Genitiv", color: "..." },
      ]},
      { id: "wordtypes", label: "Word Types", items: [
        { id: "verbs", label: "Verbs", color: "#2ECDA7" },
        { id: "adjectives", label: "Adjectives", color: "#F59E0B" },
        // ...
      ]},
    ],
    presets: {
      gender: ["article_m","article_f","article_n","noun_understripe"],
      content: ["verbs","adjectives","adverbs","article_m","article_f","article_n"],
      full: ["*"],
    },
    understripeOptions: ["gender","case","wordtype"],
  },
  ko: {
    groups: [
      { id: "particles", label: "Particles", items: [
        { id: "particle_topic", label: "Topic (은/는)", color: "..." },
        { id: "particle_subj", label: "Subject (이/가)", color: "..." },
        { id: "particle_obj", label: "Object (을/를)", color: "..." },
        { id: "particle_loc", label: "Location (에/에서)", color: "..." },
      ]},
      { id: "honorifics", label: "Honorific Levels", items: [
        { id: "hon_haeyo", label: "해요체", color: "..." },
        { id: "hon_hapsyo", label: "합쇼체", color: "..." },
        { id: "hon_banmal", label: "반말", color: "..." },
      ]},
      // ...
    ],
  },
  // nl, fr, es...
};
```

### How it wires into universalHl

1. `grammarFilters` state changes from a flat object to a per-language keyed object:
   ```js
   // Old: { gender: true, verbs: true, ... }
   // New: { de: { article_m: true, case_nom: false, verbs: true, ... }, ko: { ... } }
   ```

2. `universalHl()` already receives `tLang` (target language). Use `grammarFilters[tLang]` to get the active filters.

3. `posFilterMap` (line ~11678) becomes language-specific — derived from `GRAMMAR_SETTINGS[lang]` instead of hardcoded.

4. localStorage key stays `vl_grammar_filters` but stores the full per-language object.

---

## Implementation Order

1. **Define `GRAMMAR_SETTINGS`** data structure in `src/data/dictionary.js` (or `metadata.js`) for all 5 languages
2. **Refactor `grammarFilters` state** from flat to per-language
3. **Build the in-lesson settings panel UI** (bottom sheet on mobile, floating panel on desktop) with language-specific categories
4. **Wire filters into `universalHl()`** — replace `posFilterMap` with language-specific filter lookup
5. **Add understripe rendering** — CSS text-decoration or border-bottom based on understripe function setting
6. **Add preset buttons** — Gender only, Content words, Full grammar, Everything
7. **Style with VerumLingua bubble aesthetic** — candy gloss, glass effect, purple accent
8. **Add full settings page** in profile section (separate from in-lesson quick access)
9. **Test all 5 languages** — verify correct categories show per language

---

## Key Files to Modify

| File | What Changes |
|------|-------------|
| `src/data/dictionary.js` or `src/data/metadata.js` | Add `GRAMMAR_SETTINGS` per-language config |
| `src/verumlingua.jsx` ~10077 | Refactor `grammarFilters` from flat to per-language |
| `src/verumlingua.jsx` ~10639-10730 | Complete settings panel UI rewrite |
| `src/verumlingua.jsx` ~11544-11771 | Update `universalHl()` filter logic |
| `src/verumlingua.jsx` | Add bottom sheet component for mobile |
| `src/verumlingua.jsx` | Add full settings page in profile section |

---

## Constraints

- **No npm/node locally.** All builds happen via GitHub Actions. Test by pushing and checking lingoverse.nl.
- **No new files** unless absolutely necessary. Prefer adding to existing files.
- **CSS-in-JS only** (inline styles or style objects). No external CSS files.
- **React 18 + no hooks in conditional blocks** (Rules of Hooks — this caused the Error #300 crash).
- **Dark mode support** — every color must have a light and dark variant. Use the existing `dk` variable.
- **Mobile-first** — bottom sheet is the PRIMARY interface. Desktop floating panel is secondary.
- **PP31** — never assign CSS gradients to the `color` property.

---

## Flags and Risks (READ THESE)

**Flag 1: CEFR word lists availability.**
The official vocab lists for TOPIK (Korean) and Goethe-Institut (German) are relatively accessible online. NT2 (Dutch), DELF (French), and DELE (Spanish) lists are harder to get in clean, machine-readable format. Some are paywalled or only available in textbook appendices. Plan for: multiple research sessions, possible manual curation from multiple sources, and using textbook word indices as proxies where official lists are unavailable. This is step 2 and it blocks the curriculum restructure (step 8).

**Flag 2: Korean lemma reverse lookup is a real NLP problem.**
Korean is agglutinative: "먹었어요" = 먹(eat) + 었(past) + 어요(polite). Stripping particles AND conjugation endings to get back to "먹다" requires morphological analysis, not just string matching. The existing `tokenizeKorean` handles some particle stripping but not full deconjugation. German/French/Spanish/Dutch are easier (conjugation tables are finite and regular-ish). For Korean, consider: (a) building explicit conjugation tables for common verbs, (b) using suffix-stripping heuristics, or (c) accepting that some forms won't resolve and showing "did you mean...?" suggestions. This affects the search bar (step 4) and dictionary (step 2).

**Flag 3: Curriculum restructure scope is massive.**
5 languages x ~250 lessons each = ~1,250 lessons to reformat. Even with content salvage, every lesson needs: new 2-bubble card format, fun info section on every card, story arc per unit, interleaved flow. Estimate: 5-10 sessions PER LANGUAGE for full restructure. That's 25-50 sessions for all 5 languages. The prototype (steps 5-6, ONE language) will reveal the real pace.

**Flag 4: The settings panel can be built NOW without word lists.**
The settings panel (step 3) only needs the category STRUCTURE per language (which articles exist, which particles exist), not the actual word data. So steps 2 and 3 CAN overlap. The handoff doc has everything needed to build the settings panel independently.

**Flag 5: Understripe rendering has CSS limitations.**
CSS `text-decoration` supports underlines with color, but "understripe" (a colored line under text representing a DIFFERENT dimension than the text color) is tricky. Options: `border-bottom` (works but affects layout), `box-shadow inset` (no layout shift but limited), or `background-image linear-gradient` at the bottom (most flexible). Needs prototyping to find what looks good and performs well, especially on mobile.

---

## Definition of Done

- [x] Settings panel shows ONLY categories relevant to current language
- [x] German shows: der/die/das articles, 4 cases, standard word types
- [x] Korean shows: 7 particle types, verbs/adjectives/numbers/negation/question
- [x] Dutch shows: de/het articles, standard word types
- [x] French shows: le/la/les articles, standard word types
- [x] Spanish shows: el/la/los-las articles, standard word types
- [ ] Understripe function dropdown works (gender vs case vs word type) — **DEFERRED: needs prototyping**
- [x] Preset buttons work per language
- [x] Mobile: bottom sheet slides up with drag handle + backdrop blur
- [x] Desktop: floating panel below gear icon
- [x] Dark mode renders correctly (all colors have light+dark variants in GRAMMAR_SETTINGS)
- [x] Filters persist in localStorage per language (new key: vl_grammar_filters_v2)
- [x] universalHl() respects per-language filter selections (langPosFilterMap)
- [x] VerumLingua candy gloss styling applied (gradient bg, glow shadows, glass effect)
- [x] Color legend shows what each color means ("?" button)

## What Was Built (V1 — PR #67, 2026-03-19)

**dictionary.js**:
- `GRAMMAR_SETTINGS` — per-language config with groups, items, posKeys, colors, darkColors, presets
- `getDefaultFilters(lang)` — returns all-ON filter object for a language
- `buildPosFilterMap(lang)` — maps POS keys to filter IDs for universalHl
- `getFilterColor(lang, filterId, isDark)` — color lookup for settings panel dots

**verumlingua.jsx**:
- `allGrammarFilters` state (per-language, localStorage `vl_grammar_filters_v2`)
- `grammarFilters` memo (current language's filters with defaults)
- `langPosFilterMap` memo (from `buildPosFilterMap`)
- Language-specific settings panel with grouped toggles, presets, color legend
- Mobile bottom sheet (fixed position, backdrop blur overlay, drag handle)
- universalHl() uses `langPosFilterMap` instead of hardcoded posFilterMap

## V1.1 Polish (PR #69, 2026-03-19)

- **Removed gold "new word" inline highlight.** The gold bubble wrapping words in lesson text was misfiring on English words and is being replaced by the curriculum restructure. The "NEW WORD" corner badge on teach cards is KEPT.
- **Removed `newWords` toggle** from GRAMMAR_SETTINGS (all 5 languages) and all `full` presets.
- **Removed `isGoldBubble`** flag, gold hover logic, and mini-popup "new word" badge from universalHl().
- **Restyled entire settings panel** to proper VerumLingua candy gloss aesthetic:
  - Frosted glass panel background (`backdrop-filter: blur(20px)`)
  - Rounded pill-shaped chips (`borderRadius: 20`) with multi-stop gradient fills
  - Radial gradient color dots with inner glow when active
  - Stronger backdrop blur on mobile overlay (8px vs 2px)
  - Premium preset buttons with hover glow
  - Rounded drag handle on mobile (24px top corners)
  - Better visual hierarchy with improved spacing and typography

## Known Gaps / What V2 Needs

1. **Korean honorific levels NOT in GRAMMAR_SETTINGS.** Vision doc mentions 해요체/합쇼체/반말 toggles. These require detecting speech level from verb endings, which is a morphological analysis problem. Deferred.
2. **German case toggles exist but have empty posKeys.** No word in WORD_DB has case POS tags. Case detection requires syntactic parsing. Toggles are placeholder UI for when case-aware tagging is added.
3. **Understripe function dropdown** not built. Needs prototyping (CSS `border-bottom` vs `background-image gradient`). Deferred.
4. **Bold/dotted underline/italics** visual controls from vision doc Section 5.2 not built. Deferred to V2.
5. **Full settings page in profile section** not built. Only in-lesson quick access exists. Deferred.
6. **Korean `koreanHl()` does NOT check grammarFilters** for particle colors. It has its own coloring logic. Full integration needs koreanHl to use the per-language filter system.
7. **POS sub-category coverage.** Every word in the new curriculum needs granular POS sub-tags (particle_topic vs particle_subj, article_m vs article_f, etc.) for the grammar toggles to work at full specificity. Partially done in WORD_DB. Must be completed during curriculum restructure (step 8).

---

## Coordination Note for Parallel Sessions

**Step 2 (CEFR word lists)** may be running in a separate mobile session. That session is doing RESEARCH ONLY — downloading and saving official vocabulary/grammar lists to `docs/` and `src/data/`. It does NOT modify `verumlingua.jsx` or `dictionary.js`.

**Step 4 (Vocab page redesign)** is COMPLETE (D116, 2026-03-19). V6 built with compound bubble word rows, alphabetical browse drill-down, review flashcards, and integrated grammar settings panel. Grammar settings are shared between lesson engine and vocab page via same localStorage keys.

**Step 5 (New word card format)** is the next CODE step. German is the prototype language per owner decision.
