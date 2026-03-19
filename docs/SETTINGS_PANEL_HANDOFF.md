# Settings Panel Redesign — Session Handoff

> **Rehaul Step 3** (see `docs/VERUMLINGUA_REHAUL_VISION.md` Section 5)
> Step 1: D114 docs update (COMPLETE)
> Step 2: Download complete CEFR word lists for all 5 languages (foundation for dictionary + curriculum)
> **This step**: Language-specific settings panel redesign
> Next step after this: Vocab page redesign (Step 4)

---

## What Exists Now (v1 — shipped but needs complete redesign)

**Current code** in `src/lingoverse.jsx`:
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
- Articles: der (blue #4A8FE7) / die (coral #E8475E) / das (purple #7B5EE8)
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
| `src/lingoverse.jsx` ~10077 | Refactor `grammarFilters` from flat to per-language |
| `src/lingoverse.jsx` ~10639-10730 | Complete settings panel UI rewrite |
| `src/lingoverse.jsx` ~11544-11771 | Update `universalHl()` filter logic |
| `src/lingoverse.jsx` | Add bottom sheet component for mobile |
| `src/lingoverse.jsx` | Add full settings page in profile section |

---

## Constraints

- **No npm/node locally.** All builds happen via GitHub Actions. Test by pushing and checking lingoverse.nl.
- **No new files** unless absolutely necessary. Prefer adding to existing files.
- **CSS-in-JS only** (inline styles or style objects). No external CSS files.
- **React 18 + no hooks in conditional blocks** (Rules of Hooks — this caused the Error #300 crash).
- **Dark mode support** — every color must have a light and dark variant. Use the existing `dk` variable.
- **Mobile-first** — bottom sheet is the PRIMARY interface. Desktop floating panel is secondary.
- **P31** — never assign CSS gradients to the `color` property.

---

## Definition of Done

- [ ] Settings panel shows ONLY categories relevant to current language
- [ ] German shows: der/die/das articles, 4 cases, standard word types
- [ ] Korean shows: 4 particle types, 3 honorific levels, verbs/adjectives/numbers
- [ ] Dutch shows: de/het articles, standard word types
- [ ] French shows: le/la/les articles, standard word types
- [ ] Spanish shows: el/la/los-las articles, standard word types
- [ ] Understripe function dropdown works (gender vs case vs word type)
- [ ] Preset buttons work per language
- [ ] Mobile: bottom sheet slides up with drag handle
- [ ] Desktop: floating panel below gear icon
- [ ] Dark mode renders correctly
- [ ] Filters persist in localStorage per language
- [ ] universalHl() respects per-language filter selections
- [ ] VerumLingua candy gloss styling applied
- [ ] Color legend shows what each color means
