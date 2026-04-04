# LingoVerse Language Integration Pipeline

> Extracted from src/verumlingua.jsx on 2026-03-21
> Original location: lines 4005-4099

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
LINGOVERSE LANGUAGE INTEGRATION PIPELINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This pipeline defines how Lingoverse learns to build languages.
Follow this pipeline for EVERY new language. No shortcuts.

PIPELINE STEP 0 — Register language (discoverability)

- Add language to LANGUAGES array with:
  code, name, native, greeting, welcomeBack, rtl, flag mapping.
- Ensure onboarding + profile pickers show it.
- Any UNITS.lang must have a LANGUAGES entry.
- If missing: fail batch and fix.

PIPELINE STEP 1 — Language meta + framework mapping

Create LANG_META[code]:

- scriptType: latin|arabic|hangul|kana|hanzi|cyrillic|mixed
- framework: CEFR|HSK|JLPT|TOPIK|custom
- levelMap: mapping into A1–C2 (or dual labels)
- specialRules: RTL, vowel length, diacritics, consonant doubling, tones, etc.

Must exist before FK or units.

PIPELINE STEP 2 — Foundations (FK) completeness

Implement FOUNDATIONS_BY_LANG[code]:

modules: [{id,title,level:"Pre-A1",type:"grid|cards|examples|practice",items}]

2D GRID REQUIRED:

- Latin: alphabet + phonics + digraphs
  (Dutch: aa/ee/oo/uu/ij/ou/oe/ui/eu + lak/lakken rules)
- German: umlauts/ß + vowel length
- Arabic: all letter forms + non-connectors + harakat/shadda/tanwin
- Korean: Hangul assembly
- Japanese: full Hiragana + Katakana
- Chinese: pinyin + tones + radicals
- Russian: Cyrillic + soft/hard signs

FK must make beginners reading/writing ready.

PIPELINE STEP 3 — Culture pack

Add CULTURE_PACKS[code]:

food[], customs[], places[], beginnerSituations[],
politenessNotes[], tabooOrPitfalls[].

Units must use this.

PIPELINE STEP 4 — Unit templates (Units 1–5 A1 survival)

Use UNIT_TEMPLATES:

U1 greetings
U2 numbers/time
U3 food
U4 directions
U5 daily life

Consistent lesson patterns.
Culture from CULTURE_PACKS.
MK keys for all translations.

PIPELINE STEP 5 — MK + MKG pedagogy layer

Extend MK with MKG keys for:

- explanations
- grammar notes
- culture notes
- hints

Add p(key, baseLang) helper.

No embedded English strings.

PIPELINE STEP 6 — QA gates

Must pass:

- Build OK
- Language in pickers
- FK renders
- Units run
- Progress saves
- MK/MKG resolves
- Flag/report works
- No regressions

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
