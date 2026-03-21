> **SUPERSEDED**: This audit report reflects the state as of D110 (March 2026). The platform rehaul (D114+) will restructure all curricula. This document is preserved for historical reference but should NOT be used as the basis for new audit work. See CLAUDE.md for current status.

# VerumLingua Full Curriculum Audit Report
## Date: 2026-03-17

---

## 1. STRUCTURAL VALIDATION

| Language | Units | Lessons | Steps | Avg Steps/Lesson | PASS |
|----------|-------|---------|-------|-------------------|------|
| Spanish | 30 | 240 | 4,363 | 18.2 | YES |
| German | 30 | 240 | 4,518 | 18.8 | YES |
| French | 30 | 240 | 4,380 | 18.3 | YES |
| Dutch (v2) | 30 | 244 | 4,580 | 18.8 | YES* |
| Korean | 30 | 311 | 6,537 | 21.0 | YES* |

*Dutch: 22 early A1-A2 lessons below 18-step minimum (legacy, pre-standard).
*Korean: 41 A1-A2 lessons below 20-step minimum (legacy, pre-standard).

### Critical Issues Fixed:
- Korean kou4l8 step 8: mc ans "을" not in opts (opts had "를" instead) - FIXED
- Korean kou9l8 step 8: mc ans wording mismatch with opts - FIXED
- Dutch v2u25l7 step 9: mc ans wording mismatch with opts - FIXED

---

## 2. PIPELINE COMPLIANCE

### P48 (Step Type): ALL PASS
Zero fb steps with multi-blank across all 5 languages.

### P49 (No CEFR in Learner Content): ALL FIXED
- Spanish: 1 fixed (esp17l8 step 15)
- French: 2 fixed (fre30l4 step 12, fre30l7 step 17)
- Korean: 3 fixed (kou20l9 step 21, kou20l10 step 24, kou30l10 step 18)

### P22c (No Em-Dashes in Content Strings):
- Spanish: 0 in content (42 only in comments)
- German: 0
- French: 0
- Dutch: 0 in content (16 in comments)
- Korean: 178 fixed (all were in content strings, replaced with `: ` or `. `)
- Arabic: 10 fixed by agent

### P8 (Hint-Reveals) - Issues Found:
| Language | Total Flagged | Severe (ans > 2 chars) | Fixed |
|----------|--------------|------------------------|-------|
| Spanish | 16 | ~10 genuine | Agent fixing |
| German | 97 | ~70 genuine | Agent fixing |
| French | 21 | ~15 genuine | Agent fixing |
| Dutch | 54 + 134 (fb) | ~100 genuine | Agent fixing |
| Korean | 158 | 12 severe + 123 pedagogical | 12 severe fixed manually |

### P44 (Lazy Hints):
- Dutch: 33 hints under 15 chars
- Korean: 15 hints under 15 chars
Note: Many are concise but effective. Low priority.

---

## 3. INFRASTRUCTURE AUDIT

All 5 languages PASS infrastructure checks:
- LANG_META: 5/5 complete
- FOUNDATIONS_BY_LANG: 5/5 complete
- FK_PLAYTHROUGH: 5/5 complete
- FK_GATE_QUIZ: 5/5 complete
- ARTICLE_SYSTEMS: 4/4 (Korean has no articles - correct)
- Unit file imports: 5/5 in lingoverse.jsx
- UNITS assembly: All spreads present

Minor gaps (non-blocking):
- LANG_BLUEPRINT["ko"] missing (reference only, not rendered)
- CULTURE_PACKS["ko"] missing (reference only)

---

## 4. CEFR GRAMMAR COVERAGE

### Korean: FULL PASS
All 21 A1 constructs verified with grep evidence.
A2, B1, B2 fully covered (per D92/D93 audit history).

### Spanish: PASS WITH MINOR GAPS
All major grammar constructs A1-B2 verified present.
Gaps identified:
1. **A1 Body Parts vocabulary**: No dedicated lesson. Appears only in reflexive verb examples. CEFR A1 standard requires basic body parts. Severity: MODERATE.
2. **A2 Animals vocabulary**: No systematic animal vocabulary set. CEFR A2 standard. Severity: LOW.
3. **Possessives nuestro/vuestra**: Not formally taught as standalone possessives. Severity: LOW.

### German: PASS WITH ONE GAP
All A1-B2 grammar constructs verified present.
Gap identified:
1. **A2 Imperative mood**: No dedicated lesson for du/ihr/Sie imperative formation. Imperative appears in examples but is not explicitly taught. Severity: MODERATE.

### French: PASS WITH MINOR GAPS
All major grammar constructs A1-B2 verified present.
Gaps identified:
1. **A1 Weather vocabulary**: Very limited coverage. No dedicated weather unit. Severity: LOW.
2. **A1 Months/Seasons**: Days covered, but months and seasons minimal. Severity: LOW.
3. **A2 Health vocabulary**: Used in examples but no dedicated "At the Doctor" lesson. Severity: LOW.
4. **Level tag metadata**: A1.3/A1.4/A1.5 level tags missing (cosmetic, content exists). Severity: COSMETIC.

### Dutch: PASS WITH ONE MINOR GAP
All A1-B2 grammar constructs verified present. No gaps at A1, A2, or core B1 level.
Gap identified:
1. **B2 dienen te** (formal modal obligation): No teach card. Low priority, formal/legal register only. Severity: LOW.

---

## 5. DIALOGUE COVERAGE

| Language | Teach Cards | With A:/B: Dialogues | Coverage |
|----------|------------|---------------------|----------|
| Spanish | 1,111 | 1,111 | 100% |
| German | 1,226 | 1,226 | 100% |
| French | 883 | 883 | 100% |
| Dutch | 1,105 | 1,080 | 97.7% |
| Korean | 1,132 | 855 | 75.5% |

---

## 6. POLYGLOT VISION ALIGNMENT

### Structural Metaphors: ALL PRESENT
- Korean: Train (40 references)
- Dutch: Slot (7 references)
- German: Frame (2 references)
- French: Agreement Web (1 reference)
- Spanish: Conjugation Tower (2 references)

### Article Colors: ALL CORRECT
- Dutch: de=blue (#4A8FE7), het=gold (#E8960A)
- German: der=blue (#4A8FE7), die=coral (#E8475E), das=purple (#7B5EE8)
- French: le=blue (#4A8FE7), la=coral (#E8475E)
- Spanish: el=blue (#4A8FE7), la=coral (#E8475E)

### Unit Colors:
- Spanish: 30/30 purple (#7B5EE8) - PASS
- German: 30/30 purple - PASS
- French: 30/30 purple - PASS
- Dutch: 30/30 v2 purple (legacy units have varied colors) - PASS
- Korean: 9/30 purple (A1 units U1-U6 have legacy colors) - COSMETIC ISSUE

---

## 7. FIXES APPLIED THIS SESSION

1. **3 CRITICAL mc ans mismatches** fixed (Korean 2, Dutch 1)
2. **6 P49 CEFR labels** removed from learner-facing quiz content
3. **178 em-dashes** replaced in Korean content strings
4. **10 em-dashes** replaced in Arabic content strings
5. **12 severe P8 hint-reveals** rewritten in Korean
6. **P8 hint-reveals** being fixed by agents in German, Spanish, French, Dutch

---

## 8. RECOMMENDATIONS

### High Priority (should fix before next release):
1. Fix remaining P8 hint-reveals in all languages
2. Add Spanish A1 body parts lesson (1 lesson, ~18 steps)
3. Add German A2 imperative lesson (1 lesson, ~18 steps)

### Medium Priority:
4. Add Spanish A2 animals vocabulary lesson
5. Uplift Dutch A1-A2 under-density lessons (22 lessons below 18 steps)
6. Uplift Korean A1-A2 under-density lessons (41 lessons below 20 steps)
7. Fix Dutch P44 lazy hints (33 items)
8. Fix Korean P44 lazy hints (15 items)

### Low Priority (cosmetic):
9. Standardize Korean A1 unit colors to purple
10. Add LANG_BLUEPRINT["ko"] and CULTURE_PACKS["ko"]
11. Improve Korean dialogue coverage from 75.5% to 90%+

---

## CONCLUSION

All 5 languages (Korean, Dutch, German, French, Spanish) are structurally sound and CEFR-compliant at the A1-B2 level. No language is "broken" or unusable. The most significant issues found were:
- P8 hint-reveals across all languages (most being fixed by agents)
- Minor CEFR vocabulary gaps in Spanish and German
- Legacy under-density in Dutch and Korean A1-A2 content

Spanish specifically has no critical structural issues. Its 30 units, 240 lessons, and 4,363 steps are well-structured with 100% dialogue coverage and proper CEFR progression.
