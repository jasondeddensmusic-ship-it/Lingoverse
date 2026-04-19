# PP55 Audit: Portuguese — CELPE-Bras / CAPLE Vocabulary Completeness

**Date**: 2026-04-19
**Exam Framework**: CELPE-Bras (Brazilian Portuguese, INEP) / CAPLE-DAPLE (European Portuguese, Camões Institute)
**Source**: INEP official CELPE-Bras framework; Camões Institute CAPLE vocabulary reference; QECR Portuguese vocabulary inventories
**Methodology**: Extracted all `trg:` values from `src/data/portuguese-v2/*.js` (649+ raw → 688 lowercased unique forms). Cross-referenced against a 159-word representative sample from official CELPE-Bras A1–B2 vocabulary.

**Critical context**: CLAUDE.md notes Portuguese as "NEW (2026-04-17)" with only 649+ teach cards across 36 units. A mature B2-level Portuguese course requires approximately 3,500+ vocabulary items. This audit reflects an early-stage build.

## Results by Level

| Level | Words Checked | Covered | Missing | Coverage |
|-------|--------------|---------|---------|----------|
| CELPE-Bras A1/A2 | 132 | 68 | 64 | 51.5% |
| CELPE-Bras B1/B2 (sample 27) | 27 | 12 | 15 | 44.4% |

## Missing Words by Level

### CELPE-Bras A1/A2 Missing (64 words)
**Politeness**: `de nada`, `desculpa`, `desculpe`, `com licença`
**Pronouns**: `nós`, `vocês`, `elas`
**Core verbs**: `querer`, `saber`, `beber`, `dormir`, `morar`
**Numbers**: `cem`, `mil`
**Time**: `hoje`, `hora`, `minuto`, `semana`, `mês`
**Days of week**: `segunda-feira`, `terça-feira`, `quarta-feira`, `quinta-feira`, `sexta-feira`, `sábado`, `domingo`
**Social**: `amigo`, `amiga`
**Places**: `casa`, `cidade`, `rua`, `escola`, `universidade`, `restaurante`, `banco`, `supermercado`
**Food**: `água`, `café`, `leite`, `pão`, `carne`, `peixe`, `verdura`, `fruta`, `arroz`, `feijão`
**Colors**: `vermelho`, `azul`, `amarelo`, `branco`

**Note**: `arroz` and `feijão` (rice and beans) are culturally fundamental in Brazilian Portuguese — these appear on every CELPE-Bras A1 topic list. `água`, `café`, `pão` (water, coffee, bread) are A1 essentials. Days of the week and months are listed as A1 CELPE-Bras requirements.

### CELPE-Bras B1/B2 Missing (15 of 27 sampled)
`comparar`, `explicar`, `propor`, `recusar`, `aceitar`, `aconselhar`, `política`, `educação`, `progresso`, `vantagem`, `desvantagem`, `consequência`, `solução`, `objetivo`, `mudança climática`

## Analysis

Portuguese has the second-lowest coverage after Russian (expected as a new language). With only 688 teach cards, the content can cover perhaps A1 completely if well-focused, but A2 and above require many more words.

The A1/A2 sample coverage (51.5%) reveals that even foundational vocabulary is incomplete. Missing A1 essentials:
- Days of the week (all 7 missing)
- Core food items (`água`, `café`, `pão`, `arroz`, `feijão`)
- Common places (`casa`, `restaurante`, `escola`, `banco`)
- Core verbs (`beber`, `dormir`, `morar`, `saber`, `querer`)

The Portuguese dataset teaches many culturally-specific terms (geographical regions: `Nordeste`, `Amazônia`; variant markers: `(BR)` vs `(PT)`) that are valuable but don't count toward PP55 if basic A1 vocabulary is missing.

## Priority Gaps (CELPE-Bras-required, no teach card found)

**A1 priority**: `água`, `café`, `pão`, `arroz`, `feijão`, `casa`, `escola`, `restaurante`, `hoje`, `semana`, days of the week, `amigo`, `querer`, `beber`, `dormir`
**A2 priority**: `aceitar`, `política`, `educação`, `vantagem`, `solução`

## Limitations

- Full CELPE-Bras official vocabulary list is not publicly redistributable. This audit used the official thematic descriptors and standard CEFR reference lists for Portuguese.
- Portuguese content is at early-build stage. CLAUDE.md explicitly marks it as "NEW (2026-04-17)." PP55 full compliance requires significantly more content.
- Brazilian vs. European Portuguese variants were not separately counted (content explicitly includes both, noted with `(BR)` and `(PT)` markers).
