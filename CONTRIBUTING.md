# Contributing to VerumLingua

> This file is for Claude Code agents. The owner is not a coder.

## Getting Started

```bash
npm install          # Install dependencies
npm run dev          # Start dev server at http://localhost:5173
npm run build        # Production build (validates compilation)
```

## Repository

- **GitHub**: https://github.com/jasondeddensmusic-ship-it/Lingoverse
- **Live site**: https://lingoverse.nl
- **Deploy**: Push to `main` triggers GitHub Actions → FTPS to mijndomein.nl (~2 minutes)

## Architecture

| File | Lines | Purpose |
|------|-------|---------|
| `src/verumlingua.jsx` | ~12,200 | Engine: all UI components, CSS, routing |
| `src/data/metadata.js` | ~567 | LANG_META, LANG_BLUEPRINT, CEFR_LEVELS |
| `src/data/foundations.js` | ~3,281 | Knowledge grids, playthroughs, gate quizzes |
| `src/data/vocabulary.js` | ~2,509 | ARTICLE_SYSTEMS, VOCAB, LEXEMES |
| `src/data/dictionary.js` | ~1,604 | WORD_DB hub, POS_COLORS, GRAMMAR_PACKS, conjugation |
| `src/data/units-korean.js` | ~8,700 | 30 Korean units (A1-B2) |
| `src/data/units-dutch.js` | ~7,250 | 30 Dutch v2 units (A1-B2) |
| `src/data/units-german.js` | ~7,400 | 30 German units (A1-B2) |
| `src/data/units-french.js` | ~42,552 | 30 French units (A1-B2). **WARNING: 1.85MB. Use grep, never full-read.** |
| `src/data/units-spanish.js` | ~5,262 | 30 Spanish units (A1-B2) |
| `src/data/units-other.js` | ~170 | Arabic skeleton (5 units) |

## Before Writing Any Code

1. **Read CLAUDE.md** — the authoritative governance file
2. **Read memory files** — `~/.claude/projects/.../memory/`
3. **Follow Pipeline Rules** — P8 through P60 in CLAUDE.md
4. **Follow Agent Rules** — Rules 1-16 in CLAUDE.md
5. **New format ALWAYS** — all new content uses `target`/`source` fields with full grammar tagging (P59)

## Agent Model Policy (Rule 11, D120)

**Opus 4.6 and Sonnet 4.6+ co-write and cross-validate.** Both write content in parallel, then the OTHER validates. Neither ships without mutual sign-off. Sonnet below 4.6 is banned.

## Key Design Principles

- Every word gets a teach card (P52). No exceptions.
- Every word is tagged with full grammar metadata (P59).
- Every sentence is breakable into a grammar deep dive.
- Content must be toggleable for personalization (P60).
- No learner should ever need to leave VerumLingua.
- PLAN before implementing. Design first, build second.

## Color System

See `memory/design_spine_mandatory.md` for the SINGLE SOURCE OF TRUTH on all visual values.

- POS colors: 10 distinct hues defined in `dictionary.js` → `POS_COLORS`
- Gender colors: per-language in `dictionary.js` → `GENDER_COLORS`
- German das (neuter): green (distinct shade from verb green)
- UI chrome: purple #7B5EE8 (never for content highlighting)

## Commit Convention

```
D{number}: Short description of what changed

Detailed explanation of why.

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>
```
