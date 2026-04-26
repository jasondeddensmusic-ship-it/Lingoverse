# Expert Panel — Multi-Disciplinary Curriculum Audit

> Owner-directed (2026-04-26): "Get professional AI agent opinions left and right. I must be forgetting areas." This doc is the master roster for the expert validation system that audits VerumLingua across every dimension that matters for adult language learning.

## Why this exists

Validators (Rule I) catch mechanical regressions. They do not catch:

- A teach card that's grammatically correct but pedagogically tone-deaf for the level
- A lesson that violates Krashen's i+1 (input too far above the learner)
- A funFact that's culturally accurate but reinforces a stereotype
- A quiz design that triggers learned helplessness instead of mastery
- Cognitive load mismatched to working-memory limits
- Missing pragmatic awareness (when to use formal vs informal register)
- Phonological gaps (a sound the learner needs but never gets explicit instruction on)
- Motivation killers (perfectionism trap, no scaffolding for failure)

The expert panel runs **once per major content milestone** (after a language launches, after a level unlocks, after a major curriculum revision). Each role spawns as a fresh AI agent with a deeply-detailed persona + the relevant slice of curriculum. Findings are synthesized into actionable queue items.

## Roster — three tiers (40 total roles, **all personas drafted + ready to spawn as of 2026-04-27**)

### Tier 1 — Core (always run)

These six roles produce the highest-leverage findings. Run on every major milestone.

| Role | Audits | Lens |
|---|---|---|
| **SLA Researcher (Applied Linguist)** | i+1 calibration, comprehensible input balance, output-hypothesis adherence, interaction-hypothesis adequacy | Krashen / Swain / Long. Is the input level-appropriate? Is enough output demanded? |
| **Cognitive Psychologist (Memory & Retrieval)** | Spacing intervals, retrieval-practice frequency, interleaving design, desirable difficulty | Roediger / Karpicke / Bjork. Is the testing effect being exploited? Is spacing too tight or too loose? |
| **Educational Psychologist (Motivation & Scaffolding)** | Self-determination theory, growth mindset, scaffolding, ZPD targeting, error-recovery framing | Deci / Ryan / Vygotsky / Dweck. Is autonomy supported? Are mistakes framed as growth? |
| **Native-Speaker Linguist (per target language)** | Grammatical accuracy, register appropriateness, idiomatic naturalness, dialect choices | Native-speaker grammar intuition + descriptive linguistics. Does this sound like a real speaker? |
| **Real-World Language Teacher** | Classroom realism, pacing, common student stumbling blocks, what works with actual humans | 10+ years CLT/PPP/TBLT experience. Would I assign this to my real students? |
| **Curriculum Designer / Instructional Designer** | Scope and sequence, learning-objective alignment, vertical articulation across levels | ADDIE / Bloom's taxonomy / Backward Design. Do A1→B2 build coherently? |

### Tier 2 — Expanded (run quarterly or after big revisions)

Sixteen roles that catch important issues but with lower frequency.

| Role | Audits |
|---|---|
| **Neuroscientist (Memory consolidation)** | Sleep-spaced retrieval timing, neural plasticity windows, attention demands |
| **Sociolinguist** | Register variation, dialect accuracy, formality scaffolding (T/V distinctions, honorifics) |
| **Pragmatics Specialist** | Speech acts, politeness strategies, indirect language, conversational implicature |
| **Phonologist / Phonetician** | Sound-system explanations, IPA accuracy, allophonic variation, prosody |
| **Cultural Anthropologist** | Cultural authenticity, stereotype audit, regional sensitivity, cultural humility |
| **Discourse Analyst** | Conversation flow, turn-taking patterns, dialogue authenticity |
| **Corpus Linguist** | Word frequency alignment, collocation accuracy, register markers in vocab |
| **Translation Theorist** | Equivalence (formal vs dynamic), translation losses, glossing strategy |
| **Heritage-Language Specialist** | Family-language learner needs (incomplete acquisition, accent, gaps in formal register) |
| **Polyglot Practitioner** | What actually works when you've learned 8+ languages — practitioner-side critique |
| **Phonetic Acquisition Researcher** | Adult phonological learning, perceptual training, accent reduction realism |
| **Assessment Psychometrician** | Test-item validity, distractor quality, ceiling/floor effects in quizzes |
| **Bilingual Education Researcher** ⭐ NEW | Source-target language pair design, cognate exploitation, L1 transfer, heritage-learner support, translanguaging in AI tutor |
| **Communicative-Approach Purist** ⭐ NEW | TBLT alignment, communicative-purpose audit per lesson, productive-vs-receptive ratio, AI tutor centrality, "grammar-translation in disguise" detection |
| **Reading Acquisition & Script Specialist** ⭐ NEW | Foundations-script pedagogy depth, post-Foundations reinforcement, romanization management, kanji-radical decomposition, reading-fluency training |
| **Standardized Test-Prep Specialist** ⭐ NEW | Official-exam wordlist intersection, productive-skill training matching exam format, "certification-grade" marketing-claim verification |

### Tier 3 — Specialist (situational)

Run when the relevant feature/content launches or a specific concern arises.

| Role | When to run |
|---|---|
| **Tonologist** | Audit Chinese (Mandarin tones), future Vietnamese / Thai |
| **Morphologist** | Audit Russian/German/Korean/Hungarian — high-morphology languages |
| **Writing-System Expert** | Audit non-Latin scripts (ko/ja/zh/ru/ar/he/hi) — script intro pedagogy |
| **UX Researcher** | Audit gamification, streak mechanics, dark-pattern check |
| **Gamification Designer** | Streak/XP design — supportive vs exploitative |
| **Behavioral Economist** | Habit-formation design (BJ Fogg, James Clear), reward schedules |
| **HCI / A11y Specialist** | WCAG 2.2 AAA, cognitive accessibility, dyslexia-friendly typography |
| **Dyslexia Specialist** | Learning differences accommodation |
| **ADHD-Friendly Learning Expert** | Pacing, focus aids, hyperfocus channeling |
| **Speech-Language Pathologist** | Production/listening exercises, dysfluency awareness |
| **Self-Determination Theory Specialist** | Autonomy/competence/relatedness audit specifically |
| **Brand Strategist** | Voice/tone consistency vs Duolingo/Babbel/Busuu |
| **Customer-Success Specialist** | Retention triggers, churn patterns, onboarding friction |
| **AI Ethics Expert** | LLM tutor behavior (Verumius), bias check, hallucination boundaries |
| **Cultural Sensitivity Reviewer** | Per-region content review (e.g., German content for German-speaking Switzerland vs Austria vs Germany) |
| **Inclusive Design Expert** | Gender-inclusive language, neurodiversity, religious/cultural inclusion |
| **Data Privacy Specialist** | GDPR / CCPA compliance audit |
| **Music & Song-Based Learning Specialist** ⭐ NEW | Music feature presence, song selection criteria, prosody training via song, cultural transmission via lyrics |
| **Sign-Language & Multimodal Specialist** ⭐ NEW | Sign-language acknowledgment, gesture in spoken-language pedagogy, captioning/transcript availability, UDL alignment, future-state vision |

## Orchestration

### Input artifacts (per audit)

Every panelist gets:

1. **Curriculum slice** — the units/lessons being audited (e.g., "German A1 only" or "all 10 langs B2 vocab"). NOT the whole 39,038-card corpus — too much context. Slice carefully per role.
2. **`docs/CLAUDE.md`** — full pipeline rules. So they know PP63, PP65 etc. exist.
3. **Persona file** — `docs/agents/EXPERT_<ROLE>.md` (deeply-detailed prompt; see template below)
4. **Audit-output template** — structured findings format (see below)

### Output format (mandatory for every panelist)

```markdown
# Audit: <Role> — <Curriculum Slice>

## Score (1-10)
- Accuracy: X
- Pedagogical fit: X
- Cultural fit: X
- Overall: X

## Top 3 strengths
1. ...
2. ...
3. ...

## Critical findings (must fix)
- [LANG/UNIT/LESSON/STEP] | Description | Why critical | Suggested fix

## Important findings (should fix)
- [LANG/UNIT/LESSON/STEP] | Description | Suggested fix

## Nice-to-have
- ...

## Cross-language patterns (if applicable)
- Patterns observed across multiple languages

## Sign-off
- Would you assign this to your real students? Yes/No/With caveats:
- Would you cite this in academic work? Yes/No/With caveats:
```

### Synthesis pipeline

After all panelists submit, the synthesis script (`scripts/synthesize_expert_panel.cjs`) processes findings using the following methodology.

#### Consensus vs unique-signal weighting (owner-approved 2026-04-26)

**Consensus tier — high confidence**

Multiple panelists flagged related findings = the issue is real. Weighting:

| Panelists agreeing | Weight | Tier |
|---|---|---|
| 3+ panelists | × 3 | AUTO-CRITICAL |
| 2 panelists | × 2 | IMPORTANT (review both findings to understand the cluster) |
| 1 panelist | × 1 | CONDITIONAL — proceed to unique-signal scoring below |

**Unique-signal tier — domain-expertise weighting**

A single panelist's finding is NOT discarded. Domain experts see things only they would see — a Tonologist's unique flag on Mandarin tones is high-priority even alone. Score using these factors:

| Factor | Boost |
|---|---|
| Panelist is Tier-1 expert in the relevant domain | +1.0 |
| Panelist is Tier-2 specialist in the relevant domain | +0.5 |
| Finding has file:line citation (specific evidence) | +0.5 |
| Finding has academic citation (research-backed) | +0.5 |
| Severity 8-10 claimed by panelist | +1.0 |
| Severity 5-7 claimed | +0.5 |
| Severity 1-4 | +0.0 |
| Suggested fix is concrete (not vague) | +0.5 |

**Final tiering**

| Total weighted score | Final tier | Action |
|---|---|---|
| ≥ 5 | CRITICAL | Auto-create EXPERT-PANEL-FINDING-* queue item; flag for next session |
| 3-4 | IMPORTANT | Auto-create queue item with "review" tag |
| 1-2 | NICE-TO-HAVE | Aggregate into a single backlog doc; surface only if patterns emerge |
| < 1 | NOISE | Drop, but log in `docs/expert-panel/<date>/discarded.log` for audit |

**Examples:**

- Educational Psychologist + SLA Researcher + Teacher all flag "no scaffolding for B1 learner who fails 3 times" → 3 panelists × 3 = 9 → CRITICAL.
- Only the Tonologist flags "Mandarin tone-3 sandhi is taught wrong" → 1 panelist × 1 + Tier-2-domain-relevant +0.5 + file:line +0.5 + severity 9 +1.0 + concrete fix +0.5 = 3.5 → IMPORTANT.
- Only the Music-Based Learning Specialist flags "no songs in curriculum" → 1 × 1 + Tier-3-domain-relevant +0.0 (no boost since music isn't a launched feature yet) + concrete fix +0.5 + severity 7 +0.5 = 2.0 → NICE-TO-HAVE roadmap item.
- Heritage-Language Specialist flags "no heritage-learner mode" → 1 × 1 + Tier-2-domain-relevant +0.5 + file:line +0.5 + severity 8 +1.0 + concrete fix +0.5 = 3.5 → IMPORTANT.

#### Pipeline steps

1. **Parse all reports** under `docs/expert-panel/<date>/<role>.md`
2. **Extract findings** — each report's Critical / Important / Nice-to-have sections
3. **Cluster** by theme (semantic similarity + same file:line citations)
4. **Apply consensus weighting** (× number of panelists agreeing)
5. **Apply unique-signal weighting** (boosts above)
6. **Tier** into CRITICAL / IMPORTANT / NICE-TO-HAVE / NOISE
7. **Generate queue items** — each CRITICAL + IMPORTANT becomes an `EXPERT-PANEL-FINDING-<id>` with citations
8. **Owner reviews** — accept / defer / reject per item, with reasoning logged

#### Conflict resolution

When two panelists flag the SAME thing with OPPOSITE judgments (e.g., Communicative Purist says "too much grammar drilling" while Curriculum Designer says "grammar coverage gap"):
- Both findings logged
- Conflict explicitly noted in the synthesis report
- Owner decides which lens wins for this product's positioning
- Decision logged in `docs/DECISION_LOG.md` for future reference

#### Findings cache

Findings are cached per (curriculum slice × panel run). Re-runs only happen after material content changes, not after every PR. The cache lives in `docs/expert-panel/cache/`.

### Run cadence

| Trigger | What runs |
|---|---|
| New language launches A1 | Tier 1 (6 roles) on that language only |
| Language hits B2 completion | Tier 1 + Tier 2 on that language |
| Major curriculum revision | Tier 1 on affected slice |
| Quarterly | Tier 1 on weakest-scoring previous panel + 3 random Tier 2 roles |
| Pre-launch / public push | Full Tier 1 + Tier 2 + relevant Tier 3 |

### Cost-control guardrails

- **Max 4 panelists running simultaneously** (Rule B7)
- **Each panelist sees max 1 language's curriculum** (avoid 70k-token bloat)
- **Sonnet for fact-finding, Opus for synthesis** (Rule B14)
- **Owner approves the run-list before spawning** — panel runs are expensive
- **Findings cached** — re-run only after material content changes (not after every PR)

## Persona file template

Each Tier 1 role has a `docs/agents/EXPERT_<ROLE>.md` file. Tier 2/3 created on first use.

```markdown
# Expert: <Role>

## Identity
You are a <specific person profile, e.g. "PhD applied linguistics, 15 years teaching adult ESL,
trained at SLA centers in <city>, fluent in <languages>"]. You hold strong opinions
shaped by <specific schools of thought>. You are NOT generically encouraging — when
you see a problem, you name it specifically and propose the fix with citations.

## Core lenses you apply
- Lens 1: ...
- Lens 2: ...
- Lens 3: ...

## What you reject
- Pedagogical fashions you consider unsound (e.g., grammar-translation as primary mode)
- Common edtech mistakes you'll call out

## What you require
- The acceptance criteria for this curriculum to satisfy your professional standards

## Output format
[The structured findings template above]

## Audit instructions
- Read the curriculum slice attached
- Read CLAUDE.md to understand the project's existing rules
- Apply your lenses
- Produce the structured findings
- Be specific (file:line citations preferred)
- Be honest (Tier 3 of "Don't game the metric" — call out theater if you see it)
- Be a colleague (warm, not clinical — Principle 13 of CLAUDE.md)
```

## Mapping to existing PP rules

The expert panel discovers issues that may need new PP rules. When that happens (per Rule I3):
- Add a PP-numbered rule to CLAUDE.md citing the panelist who surfaced it
- Add (or extend) a validator script
- Wire into CI

Example: If the SLA Researcher flags "no language scaffolds receptive→productive transitions" → new rule PP69 + validator that detects bare-word vocab cards with no productive task within N steps.

## Interaction with other rules

- **Rule G (Dual-Linguist Validation)** is for content production. Expert Panel is for design audit. Both run; they don't replace each other.
- **Rule I (Validator-First Engineering)** applies to outcomes: panel finds N issues across M languages → write a validator if pattern repeats.
- **Rule H (Autonomy Protocol)** — panel runs are NOT autonomous; they require owner approval (cost + scope).

---

**Owner approval gate**: Before spawning a panel run, the agent presents:
1. Which roles will run
2. Which curriculum slice each gets
3. Estimated token cost
4. Expected output volume

Owner says go / adjust / no, then the spawn proceeds.
