# Session Handoff — 2026-03-29 (Session 3)

> CRITICAL: Read this ENTIRE document before doing anything. Do NOT skip sections.

---

## What Was Done This Session

### 1. German v2 Curriculum — PERFECT (ALL validations PASS)

| Check | Result | Details |
|-------|--------|---------|
| Build | PASS | `npm run build` clean, 105 modules |
| Units | 36 | A1(6) + A2(6) + B1(12) + B2(12) |
| Lessons | 369 | All sequential IDs, all `board:true` |
| Steps | 9,396 | — |
| Teach cards | 5,147 | — |
| PP43 density (max 32) | PASS | 0 violations (was 41, all split) |
| PP43 density (min 18) | PASS | 0 violations (was 23, all padded) |
| PP59 pos/gender | PASS | 0 missing (1,553 A1+A2 cards tagged) |
| PP48 fb blanks | PASS | 0 violations |
| PP52 teach-before-use | PASS | 0 violations (5 fixed in B2) |
| PP61 metalanguage | PASS | 0 violations (45+ tips/intros translated) |
| PP8 anti-leak | PASS | 0 violations (205+ fixed across B2) |

### 2. Foundations Aesthetic Alignment — DONE

Foundations reference mode now uses the VerumLingua design system:
- Section header: compound bubble with gloss arc (was `var(--purple-bg)`)
- Item cards: compound bubble (was `borderLeft: 4px solid`)
- Grid/inventory containers: compound bubble background (was `var(--purple-flat)`)
- Grid cells: glass cells with inset highlights (was simple white gradient)
- Character popup: frosted glass panel with gloss arc (was `.card`)
- Buttons: candy button style with proper borderRadius:16 (was flat purple)
- Fonts: Quicksand headings, Nunito body (was DM Sans)
- All borderRadius values corrected per design spine

Files modified: `src/verumlingua.jsx` (lines ~4508-4596, ~4694-4710)

### 3. Arabic Source Language Architecture — DONE

Complete infrastructure for ANY source language selection:

**Onboarding** (`src/verumlingua.jsx`, Onboarding function):
- 2-step flow: Step 1 "I speak..." (source lang), Step 2 "I want to learn..." (target lang)
- `BASE_LANGUAGES` already has: English, Arabic, French, Spanish, Turkish
- Arabic selected shows Arabic UI text ("...أريد أن أتعلم")
- Target language list excludes source language
- "Change source language" back button
- VERIFIED WORKING in browser

**Unit filtering** (`src/verumlingua.jsx`, line ~4346):
- `allLangUnits` filters by `srcLang` matching `baseLang`
- Fallback to English if no units exist for selected source language
- Pattern: `const _srcFiltered=UNITS.filter(u=>u.lang===lang&&(u.srcLang||"en")===baseLang);`

**RTL support** (`src/components/LessonEngine.jsx`, line 13):
- `const srcRtl=baseLang==="ar";`
- `const srcDir=srcRtl?{direction:"rtl",textAlign:"right"}:{};`
- Ready for applying to all source-text containers (not yet applied to individual elements)

**Data files**:
- `src/data/german-v2-ar/` — directory with 6 A1 unit scaffolds
- `src/data/units-german-v2-ar-a1.js` — imports U01-U06
- `src/data/units-german-v2-ar.js` — re-export wrapper (A1 only, A2-B2 commented)
- `src/utils.js` — imports and includes `UNITS_GERMAN_V2_AR` in `_RAW_UNITS`

**Generator script**: `scripts/generate-arabic-units.cjs`
- Reads English unit, clones structure, translates known words, marks rest with `[AR]`
- Usage: `node scripts/generate-arabic-units.cjs 5` (generates U05)
- Has ~100 common word translations built in

### 4. German Foundations Content — VERIFIED COMPLETE

- 7 reference sections, 26 items
- 6 playthrough stages, 15 lessons
- Gate quiz with 5 tasks
- All content accurate and complete

---

## What Remains — ARABIC CONTENT TRANSLATION

### Priority 1: Fill [AR] markers in A1 units (6 files)

Files: `src/data/german-v2-ar/unit-01.js` through `unit-06.js`

Each file is a complete clone of the English unit with `srcLang:"ar"`. Fields marked `[AR]` need real Arabic (MSA) translations. Approximately:

| Unit | [AR] markers | Teach src translated | Total teach |
|------|-------------|---------------------|-------------|
| U01 | 960 | 29/173 | 173 |
| U02 | 1,018 | 18/206 | 206 |
| U03 | 803 | 8/149 | 149 |
| U04 | 635 | 2/101 | 101 |
| U05 | 489 | 32/66 | 66 |
| U06 | 1,126 | 3/212 | 212 |

**Field types needing translation**:
- `src`: Word/phrase translation (most critical — learner sees this)
- `exampleSrc`: Example sentence translation
- `note`: Pedagogical note (rewrite for Arabic speakers, not just translate)
- `funFact`: Etymology/cultural fact
- `hint`: Quiz hint (must NOT contain answer words — PP8!)
- `sSrc`: Quiz sentence translation
- `desc`: Intro description
- `goals`: Intro learning goals
- `text`: Tip explanation text
- `deepDive`: Grammar deep dive text

**Arabic-specific pedagogy** (must be reflected in notes/tips):
- German "w" = /v/ sound (no Arabic equivalent for /v/)
- German "p" vs "b" — Arabic speakers struggle (Arabic has no /p/)
- German "ch" = similar to Arabic خ — point this out as an ADVANTAGE
- German cases (4: Nom/Acc/Dat/Gen) parallel Arabic cases (3: مرفوع/منصوب/مجرور)
- German 3 genders (m/f/n) vs Arabic 2 (m/f) — neuter concept needs explanation
- German compound nouns parallel Arabic إضافة (idafa)
- German definite articles der/die/das vs Arabic ال (al-)
- Word order: German V2 rule has no Arabic parallel

### Priority 2: Generate A2-B2 Arabic scaffolds

Run: `for i in $(seq 7 36); do node scripts/generate-arabic-units.cjs $i; done`

Then create wrapper files:
- `src/data/units-german-v2-ar-a2.js` (imports U07-U12)
- `src/data/units-german-v2-ar-b1.js` (imports U13-U24)
- `src/data/units-german-v2-ar-b2.js` (imports U25-U36)

Uncomment imports in `src/data/units-german-v2-ar.js`

### Priority 3: Apply srcDir to LessonEngine

The `srcDir` object is defined but not yet spread into source-text containers. Apply to:
- Teach card `src` display
- `exampleSrc` display
- `note` and `funFact` display
- Quiz `hint` display
- `sSrc` display
- Intro `desc` and `goals`
- Tip `text` and `deepDive`
- Story `src` (narrator translations)

Search for where these fields are rendered in `src/components/LessonEngine.jsx` and add `...srcDir` to their style objects.

### Priority 4: Arabic Foundations

Create `FOUNDATIONS_BY_LANG.de_ar` in `src/data/foundations.js`:
- German alphabet from Arabic speaker perspective
- Sounds that don't exist in Arabic: /p/, /v/, /ü/, /ö/
- ß and umlauts explained for Arabic speakers
- Reading practice with Arabic transliteration

### Priority 5: Validation

After Arabic content is complete:
1. `npm run build` — must pass
2. PP8 scan on Arabic hints (must not leak answers)
3. RTL rendering test in browser
4. PP61: all metalanguage in Arabic (not English) for Arabic-source units
5. Test full flow: onboarding → select Arabic → select German → load unit → play lesson

---

## Agent Deployment Strategy for Arabic Translation

**DO NOT use background agents for Arabic translation. They die during context compression.**

**Recommended approach**:
1. Work on ONE unit at a time, directly in the main session
2. Read the unit file, find all `[AR]` markers
3. Replace them with proper Arabic translations
4. Verify build passes after each unit
5. Move to next unit

**Alternative**: Use the generator script (`scripts/generate-arabic-units.cjs`) and expand the `WORD_TRANSLATIONS` dictionary in it. Each time you add more translations, re-run it on all units. This is more efficient than editing 960 individual strings.

**Token budget**: Each A1 unit is ~80-140KB. Reading + editing one unit will use ~20-40K tokens. Budget 6 units per session = manageable.

---

## Files Modified This Session

### Data files (German v2):
- `src/data/german-v2/unit-01.js` through `unit-36.js` — pos/gender added (A1+A2), PP8 fixes (B2), PP61 fixes (B2), PP52 fixes, density splits

### Arabic data files (NEW):
- `src/data/german-v2-ar/unit-01.js` through `unit-06.js` — scaffolds with [AR] markers
- `src/data/units-german-v2-ar.js` — re-export wrapper
- `src/data/units-german-v2-ar-a1.js` — A1 level wrapper

### Engine/UI:
- `src/verumlingua.jsx` — Onboarding 2-step (source + target), Foundations aesthetic, srcLang filtering
- `src/components/LessonEngine.jsx` — srcRtl/srcDir flags added
- `src/utils.js` — Arabic units import + _RAW_UNITS inclusion

### Scripts (NEW):
- `scripts/generate-arabic-units.cjs` — Arabic unit scaffold generator

---

## Verification Commands

```bash
# Build
npx vite build 2>&1 | grep -E "(✓|✗|built|failed)"

# Full German v2 status
node -e "let tL=0,tS=0,tT=0,o32=[],u18=[],posM=0; for(let i=1;i<=36;i++){const p=String(i).padStart(2,'0');const u=require('./src/data/german-v2/unit-'+p+'.js').default;for(const l of u.lessons){tL++;tS+=l.steps.length;if(l.steps.length>32)o32.push(l.id);if(l.steps.length<18)u18.push(l.id);for(const s of l.steps)if(s.type==='teach'){tT++;if(!s.pos)posM++;if(s.gender===undefined)posM++;}}} console.log('Lessons:',tL,'Steps:',tS,'Teach:',tT,'Over32:',o32.length,'Under18:',u18.length,'posMissing:',posM);"

# Arabic unit [AR] marker count
node -e "const fs=require('fs');let total=0;for(let i=1;i<=6;i++){const p=String(i).padStart(2,'0');const f=fs.readFileSync('src/data/german-v2-ar/unit-'+p+'.js','utf8');const c=(f.match(/\[AR\]/g)||[]).length;total+=c;console.log('U'+p+':',c,'[AR] markers');}console.log('Total:',total);"

# Dev server
npm run dev
```

---

## Critical Rules Reminder

- Max 4 agents at a time (Rule B.7)
- Sonnet for translation, Opus for creative content (Rule B.14)
- Per-unit files only, never monoliths (Rule B.11)
- PP8 hint-leak scan before every commit (Rule C.7)
- PP61: Arabic source units have metalanguage in ARABIC, not English
- PP22c: No em-dashes anywhere
- PP39: `\n` in strings, never `\\n` or literal newlines
