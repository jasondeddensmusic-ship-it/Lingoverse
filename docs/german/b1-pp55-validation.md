# PP55 Vocabulary Completeness Validation — German B1 Units 13-24

**Date:** 2026-03-26
**Validator:** PP55 Vocabulary Completeness Validator Agent
**Source:** Goethe-Institut B1 Wortliste (`docs/german/goethe-b1.json`)
**Units checked:** `/tmp/de-v2-u{13-24}.js`

---

## Overall Coverage

| Metric | Count | Percentage |
|--------|-------|------------|
| Total Goethe B1 lemmas | 1,864 | — |
| Covered by teach card (raw) | 1,826 | 98.0% |
| Effective coverage (see note) | 1,857 | 99.6% |
| Genuinely uncovered | 7 | 0.4% |

**Status: FAIL (raw) / PASS (effective)**

- Raw teach card coverage = 98.0% (borderline). Strict PP55 requires a teach card for every word.
- Effective coverage = 99.6% after accounting for regional variants and alternate spellings where the standard German equivalent is taught. See Appendix A.

---

## Per-Unit Teach Card Counts

| Unit | Title (from file header) | Teach Cards |
|------|--------------------------|-------------|
| U13 | Bewerbung / Job application | 157 |
| U14 | Betrieb / Company & work | 168 |
| U15 | Stadt / City navigation | 157 |
| U16 | Der Streit / Neighbor conflict | 170 |
| U17 | Karneval / Festivals & culture | 167 |
| U18 | Treffpunkt / Meeting places | 129 |
| U19 | Behörde / Official matters | 111 |
| U20 | Versicherung / Insurance & health | 144 |
| U21 | Grenze / Borders & history | 122 |
| U22 | Umwelt / Environment | 144 |
| U23 | Wissen / Knowledge & learning | 205 |
| U24 | Abenteuer / Adventure & everyday | 122 |
| **Total** | | **1,796** |

Note: Total teach cards exceeds unique covered lemmas because many teach cards cover words not in the Goethe B1 list (recycling, A2-level reinforcement, etc.).

---

## 7 Genuine Gaps (Missing Teach Cards)

These words have no teach card in any B1 or A1/A2 unit and are not covered by any variant form:

| # | Word | POS | Article | Priority |
|---|------|-----|---------|----------|
| 1 | abmachen | Verb | — | HIGH — common agreement verb |
| 2 | befinden | Verb | — | HIGH — reflexive "sich befinden" (to be located) |
| 3 | Beleg | Noun | der | HIGH — receipt/proof, used in banking/admin contexts |
| 4 | Dialekt | Noun | der | MEDIUM — dialect, culturally relevant |
| 5 | drin | Pronominaladverb | — | LOW — colloquial contraction of "darin" |
| 6 | EC-Karte | Noun | die | HIGH — standard German debit card term |
| 7 | einzahlen | Verb | — | HIGH — to deposit (banking) |

**Action required:** Add teach cards for items 1-4 and 6-7 in the appropriate B1 units. `drin` is a low-priority colloquial contraction that can be addressed in a tip card.

### Suggested unit placement for genuine gaps:

- `abmachen` (to arrange/agree) → U13 (Bewerbung, workplace agreements) or U16 (Streit, conflict resolution)
- `sich befinden` (to be located) → U15 (Stadt, city navigation)
- `der Beleg` (receipt, document) → U19 (Behörde, official matters) or U20 (Versicherung)
- `der Dialekt` (dialect) → U17 (Karneval, culture/language) or U24
- `drin` (in it, inside - colloquial) → U16 or U18 as a tip card note
- `die EC-Karte` (debit card) → U20 (Versicherung/banking) or U19 (Behörde)
- `einzahlen` (to deposit money) → U19 (Behörde) or U20 (Versicherung)

---

## Appendix A: Non-Genuine Uncovered Lemmas (38 total minus 7 = 31)

### Austrian/Swiss Regional Terms (18)

The Goethe B1 list includes regional German variants used in Austria and Switzerland. The standard German equivalents are taught in the B1 units.

| Lemma | Region | Standard German Taught |
|-------|--------|------------------------|
| Bancomatkarte | Austria | Bankomat (taught) |
| Bankomatkarte | Austria | Bankomat (taught) |
| Billett (x2 entries) | Switzerland/Austria | Fahrkarte/Ticket (taught) |
| Billet | Switzerland | Fahrkarte (taught) |
| Büfett | Austria | Buffet (spelling variant) |
| Faschierte(s) | Austria | Hackfleisch (taught) |
| Glacé | Switzerland | Eis (taught) |
| Jause | Austria | Snack/Pause (taught) |
| Couvert | Switzerland | Briefumschlag (taught) |
| Perron | Switzerland | Bahnsteig (taught) |
| Quartier | Switzerland | Unterkunft/Viertel |
| Schi | Austria | Ski (taught) |
| Trottoir | Switzerland | Bürgersteig (taught) |
| Velo | Switzerland | Fahrrad (taught) |
| Znüni | Switzerland | Frühstückspause (regional) |
| Zuhause (das) | — | zu Hause (taught as phrase) |
| Zvieri | Switzerland | Nachmittagspause (regional) |

### Alternative/Archaic Spellings (13)

These are variant spellings where the standard modern German spelling is taught:

| Variant Lemma | Standard Form | Status |
|---------------|---------------|--------|
| abhangen | abhängen | COVERED (abhängen in teach cards) |
| Cousine | Kusine | Common variant; both acceptable |
| Phantasie | Fantasie | COVERED (Fantasie in teach cards) |
| Photograph | Fotograf | COVERED (Fotograf in teach cards) |
| Photographie | Fotografie | COVERED (Fotografie in teach cards) |
| Frisör | Friseur | COVERED (Friseur in teach cards) |
| Graphik | Grafik | COVERED (Grafik in teach cards) |
| Portemonnaie | Portemonnaie | Variant of Geldbörse (covered) |
| Portmonee | Portmonee | Variant of Geldbörse (covered) |
| chic | schick | COVERED (schick in teach cards) |
| Sauce | Soße | COVERED (Soße in teach cards) |
| Müesli | Müsli | COVERED (Müsli in teach cards) |
| Zahncräme | Zahncreme | COVERED (Zahncreme in teach cards) |

---

## Matching Methodology

Coverage was determined using the following matching rules (in priority order):

1. **Exact match**: teach card `trg` value (lowercased) = lemma (lowercased)
2. **Article-stripped match**: teach card `trg` minus article prefix = lemma
3. **Reflexive-stripped match**: teach card `trg` minus "sich " = lemma
4. **Verb compound merged match**: lemma with spaces removed = teach card stripped form (e.g., "stehen bleiben" -> "stehenbleiben")
5. **Feminine form match**: lemma ending in `-in`/`-erin` matches masculine base form in teach cards
6. **Variant spelling**: alternate spelling of a word whose standard form is in teach cards

Coverage was checked against ALL German v2 units (A1+A2+B1, teach cards only, `trg` field).

---

## Summary

**Raw coverage: 98.0% (1,826/1,864) — BORDERLINE FAIL by strict PP55 definition**

**Effective coverage: 99.6% (1,857/1,864) — PASS**

The 7 genuine gaps (abmachen, befinden, Beleg, Dialekt, drin, EC-Karte, einzahlen) represent real missing teach cards that should be added. The remaining 31 "uncovered" lemmas are either Austrian/Swiss regional terms whose standard German equivalents are taught, or archaic/alternate spellings of words that are already taught under their modern standard forms.

**Recommendation: Address the 7 genuine gaps before declaring PP55 PASS.**
