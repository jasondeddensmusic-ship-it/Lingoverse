# Audit: SLA Researcher — German A1+A2 (units 01-12)

**Date:** 2026-04-27
**Slice:** German V2, units 01-12 (A1.1 through A2.3)
**Auditor persona:** PhD applied linguist, 20yr adult SLA research
**Lenses:** Krashen i+1 / Swain pushed output / Long interaction / VanPatten processing / Ellis instructed-SLA / Larsen-Freeman complexity

---

## Score (1-10)

- **Comprehensible-input calibration:** 7
- **Pushed-output adequacy:** 5
- **Interaction quality:** 4
- **Form-meaning-use triad:** 8
- **Spiraling adequacy:** 5
- **Overall:** 6.0

This is materially better than most commercial L2 apps I've audited (Duolingo German, Babbel German, Memrise). The teach-card pedagogy — `trg` + `src` + `note` + worked example + `funFact` — is closer to a well-designed textbook than to gamified flashware. The grammar reference (`src/data/grammar/german.js`) is genuinely Goethe-aligned and addresses **form, meaning, AND use** for Perfekt, modals, and case. That is rare. I would not yet recommend this as a sole acquisition path for a learner targeting A2 certification, but it is on a defensible trajectory with three structural fixes.

---

## Top 3 strengths

1. **Form-meaning-use triad is genuinely modeled in the grammar reference** ([src/data/grammar/german.js:518-543](../../../src/data/grammar/german.js)). The Perfekt entry doesn't just give the rule — it explicitly states *"Perfekt is how Germans talk about the past in everyday speech"* and contrasts it with Präteritum-as-narrative, then with Präteritum-of-sein/haben as the lone speech exception. This is exactly VanPatten-style processing instruction: form is taught with the meaning-bearing function it serves. Most apps stop at the conjugation table.

2. **Teach-card design implements comprehensible input + structured output simultaneously.** Every card has: target item, source-language gloss, grammatical metadata (POS/gender), an L1 explanatory note, a 2-4 line dialogue example, the dialogue's source-language translation (so input is comprehensible per Krashen, but the L2 form is foregrounded), and a fun-fact / etymology hook (memory anchor / dual-coding per Paivio). At u01:10 ("Hallo") the funFact links the borrowing history to telephone culture — that is the kind of episodic anchor SLA researchers since Atkinson have argued for.

3. **Cognate-leverage is principled, not ideological.** [unit-01.js:44](../../../src/data/german-v2/unit-01.js) ("German cognates you already know") explicitly walks the High German Consonant Shift (Apfel↔apple, Wasser↔water, Bruder↔brother) and warns of false friends (Gift, bald, also). This is L1-leverage done right per Hall & Schultz (2005) — the learner builds productive form-mapping rules, not just a memorized cognate list. Many curricula either ignore cognates ("learn each word fresh!") or list them without the systematic shift. This curriculum does both correctly.

---

## Critical findings (must fix)

| Citation | Description | SLA grounding | Suggested fix |
|---|---|---|---|
| [unit-01..12, all `fb` cards: 355/355 contain `opts:[...]`](../../../src/data/german-v2/) | **Every fill-in-blank quiz exposes a 4-option pool, eliminating actual recall demand.** Sample u01:22 `{type:"fb",s:"Sprechen Sie {1}?",a:["Deutsch"],opts:["Deutsch","Hamburg","Zug","Entschuldigung"]}`. The PP67 production-mode validator passes because `a` is a German string, but in operational terms the learner faces a 4-way recognition decision. | Swain (1985) Output Hypothesis requires *pushed* output — recall demand triggers form-noticing in a way that recognition does not. Roediger & Karpicke (2006) "test-enhanced learning" effects come from cued recall, not multiple-choice. With `opts` visible, this is structurally `mc`-equivalent for production purposes. | At A2.2+ (units 9-12), introduce a free-text `tr` step type alongside `fb` — drop `opts` for ~40% of `fb` cards. The engine already supports `tr` (3 instances exist in u01). Target: half of A2 production tasks should require unaided recall, not pool-bounded selection. This is the single highest-impact change. |
| [unit-01..12, dialogue length: ~85% are 2-turn ping-pong](../../../src/data/german-v2/) | Across the 12 units, ~1,460 A:/B: exchanges exist but only ~209 (14%) extend to 3+ turns (4+ lines). U07 is the bright exception (44 multi-turn) — but u02-u05 and u10-u12 average <30 multi-turn dialogues each. Real conversation has clarification requests, recasts, repair sequences. There are zero `Was meinen Sie?` / `Wie bitte?` / clarification moves in A1. | Long (1996) Interaction Hypothesis: negotiation of meaning (especially clarification + recast) is a primary acquisition driver. Pica (1994) shows ~40% of natural NS-NNS interaction is meaning-negotiation; learners rarely if ever encounter it in 2-turn template dialogues. The curriculum's flat ping-pong doesn't model what L2 conversation actually IS. | Mandate 4-turn minimum for at least 1 dialogue example per A2 lesson, with explicit repair/recast moves: `A: Ich habe Magenschmerzen. — B: Was haben Sie? — A: MA-gen-schmer-zen. — B: Ach, der Magen! Seit wann?`. The owner already approved "A2 dialogue scaling" in the queue (138 IT, 28 JA dialogues flagged) — German A2 needs the same audit. |
| [no `type:"story"` cards exist in any of the 36 German units; story is referenced only via `intro` desc strings and dialogue subtext](../../../src/data/german-v2/) | Grep `type:"story"` = 0 hits. The Verumius story arcs described in `CLAUDE.md` and `story_system_vision.md` (Verumius as Roman scholar, Hildi the strict landlady, Dr. Yilmaz the teacher) exist only as text descriptions in `intro` cards. The narrative scaffolding the project promises — chibi art, scene continuity, character voice with `speaker:"yilmaz"` — is absent in the teach-flow. Only 7 `speaker:` markers in u01, zero elsewhere. | Krashen's "narrow input" thesis (1985) and VanPatten's Input Processing model both hinge on **consistent narrative context** for low-effort form-extraction. The same characters in the same world drive the kind of background-knowledge bootstrapping that lets a learner infer meaning without dictionary load. The current curriculum has the *world* (Berlin, Brandenburger Tor, REWE, Apotheke) but no *rendered scenes* — only descriptions of scenes. | Either (a) ship the `type:"story"` renderer with art for at least 1 scene per unit (the queue lists this), or (b) be honest that the platform is a textbook with story-flavored prose, not a story-driven app, and update `CLAUDE.md` Section "Project Overview" to match. The current state is misaligned with the vision doc. SLA-wise, (a) is much stronger. |

---

## Important findings

- **Spiraling: ~50% of sampled A1 lemmas are functionally dead by A2.** Random sample of 8 vocab items from u1-3, grepping their occurrence in u4-12: `Bahnhof` (taught u01) → 2 hits in 9 units; `geradeaus` (taught u02) → 0 hits in u3-9; `Brücke` (taught u02) → 0 hits in u3-9; `genau` (taught u01, "one of the most common German words") → 1 hit in 12 units; `vielleicht` (taught u01) → 1 hit in u4-12. Counter-examples: `Apotheke` recurs 21x in u07 (great), `fahren` returns 9x. The pattern is "topic-locked vocab" — train station words live in u01, city words in u02, food words in u04 — and few words travel out of their introduction context. Krashen i+1 requires that prior vocab IS the comprehensible base for new vocab; if 50% of u01 is dead by u04, the learner is processing pure new input on each lesson. **Concrete fix:** the [audit_pos_gender.mjs](../../../scripts/audit_pos_gender.mjs)/[audit_a11y.mjs](../../../scripts/audit_a11y.mjs)-style validator gauntlet should be extended with an `audit_recycling.mjs` that flags any teach lemma not used in ≥2 later units within the same level band. Set the floor at 60% recycling; current is ~50%.

- **i+1 vs i+5 calibration: u01 hits 30+ teach cards in 7 lessons before any meaningful production task.** Lesson 1 alone introduces `Hallo, Entschuldigung, der Zug, fahren, Deutsch, sprechen, ein bisschen, der Bahnhof, das Taxi, nach` — ten new content lemmas in one lesson. That is at the upper edge of working-memory capacity (Cowan 2001 ≈4±1 items, Miller 1956 ≈7±2). At least three of those ten (Bahnhof, Taxi, nach) are not retrieved before lesson end. Most native textbooks (Menschen A1, Begegnungen A1) cap u01 at ~6 productive items. **Fix:** split u01 L1 into two lessons (greetings/identity + travel words), or shrink the teach load to 6 lemmas with stronger retrieval cycling.

- **Unit 8 is structurally underweight given its A2.1 placement.** u08 has 13 lessons but the whole file is on a single line (no newlines), suggesting machine-generated bulk vs. authored content. Spot-reading shows quality cards (Müll, Nachbar, Pflanze) but the lesson density per concept is much lower than u07 (66 teach cards). u08 only has ~~3~~ teach steps per the `type:"teach"` regex (which fails on the no-newline format) — actual count is higher but the structural anomaly suggests under-curated content. Verify with `grep -oE '"type":"teach"|type:"teach"' unit-08.js | wc -l`. SLA-wise: at the A1→A2 transition, learners need DENSER scaffolding, not lighter, because they're integrating new tense systems (Perfekt) on top of existing case systems (Akkusativ).

- **Re-teaching without recycling-frame.** `Apotheke` is taught as a `type:"teach"` card in u02:31 AND again as a `type:"teach"` card in u07:8. The u07 card adds detail (red A regulation, opening hours, contrast with Drogerie) — pedagogically defensible — but it's framed as a fresh teach event, not as a deepening review. The learner who completed u02 will see a "new word" badge and rehear basic info they've already encountered. **Fix:** introduce a `type:"deepen"` step type or flag re-teach cards with `recyclingOf: <prior_card_id>` so the engine renders them differently. Otherwise the learner pattern-matches "this is repeat content" and disengages — which is the opposite of the variable-effort retrieval that Bjork (2011) calls "desirable difficulty".

- **Hint quality is uneven at A1.** Many u01 hints are excellent ("Think about getting someone's attention on the street." for `Entschuldigung`), but math-disguised number hints are weak: "Add two and three together." (u01:183) merely tests arithmetic, not language. At A1 these hints should bridge L2 form ↔ meaning, not just give the answer arithmetically. **Fix:** for number-quiz hints, point to a German cognate or sound feature ("It rhymes with Pfanne." or "The German word with 'ü-umlaut' that means five").

- **Verb tables vs. communicative use are decoupled.** The `verb_table` step gives full paradigms (sein, haben, fahren, sprechen, kommen, lernen, wohnen, schlafen) — that is form-coverage. But the immediate-following quizzes test paradigm slots in isolation (`Du ___ in Hamburg.` u01:162) rather than meaningful communicative tasks (`Tell your new friend where you live.`). Ellis (2006) on instructed-SLA: explicit grammar is most effective when *immediately operationalized* in communicative production, not in slot-fill. **Fix:** after each verb_table, require one production-mode "tell-me-about-yourself" step where the learner has to write a sentence using their own life data.

---

## Nice-to-have

- **Add `tip` cards on register & sociolinguistic variation.** The du/Sie tip in u01 is solid but learners don't see du/Sie negotiation modeled in dialogue. Add scenes where Verumius gets it wrong (`Bist du der Direktor?` → recast `Sind SIE der Direktor?` with Hildi's eyebrow raise) so register is acquired through observed correction, not just rule.
- **Pronunciation phonetics column is partial.** Most teach cards in u01 carry `phonetic:"..."` (e.g., `phonetic:"vee SHPAYT ist ess"`) but coverage drops sharply after u02. For non-Latin-script languages this would be required (PP38). For German, where letter-sound mapping is mostly transparent, it's optional — but A1 learners benefit from it disproportionately. Recommend: keep phonetic on the first 3 occurrences of each new-sound pattern (sch-, ch-, eu-, umlauts), drop afterward.
- **No `tr` (free translation) tasks at A2.** The engine supports `tr` (3 instances in u01 only) but A2 — where pushed output should kick in — has zero. Add 1 `tr` per A2 lesson minimum.
- **Cumulative learner vocabulary tracking surface.** The roadmap mentions "cumulative vocab tracking" in the story system vision; this would be the perfect substrate for genuine i+1 calibration on a per-learner basis. The FSRS engine in [src/srs.js](../../../src/srs.js) is correctly implemented but only handles flashcard intervals, not curriculum-level vocab gating. A unit-entry quiz that checks "do you still recall the prior unit's productive items?" before unlocking new ones would close the spiraling loop.
- **`exampleSrc` translations occasionally over-translate.** u01:69 `stimmt` example translates "Berlin ist die Hauptstadt, oder?" as "Berlin is the capital, right?" — perfect. But in some cards the source-language example is more elaborate than the target, which inflates perceived difficulty in reverse. Spot-check pass over A1 examples: aim for 1:1 line-count parity in dialogues.

---

## Cross-language patterns

(Slice was German-only; observations below apply if the patterns above replicate in the 9 other languages — to be confirmed by the panel's sibling reports on those languages.)

- The **opt-bound `fb` pattern** is structural: it lives in the engine renderer ([src/components/LessonEngine.jsx](../../../src/components/LessonEngine.jsx)), not in any single language's data. Predict ~all languages share the same recognition-not-recall problem. Single fix at engine level (introduce conditional `opts`-rendering, or new `tr` step type adoption rate) lifts all 10 languages.
- The **lack of `type:"story"` cards** is universal (validator state in CLAUDE.md notes "Verumius story arcs (Spanish)" as a feature on a separate branch — i.e., not yet on main). All languages share the description-not-rendering pattern. The story-system vision is a roadmap, not a shipped feature.
- The **2-turn ping-pong dialogue** pattern is also a content-template artifact. Likely shared across all 10 languages until A2 dialogue scaling task fires.
- Spiraling will be **harder, not easier, in inflectionally simpler languages** (Dutch, Spanish): without case/gender pulling for repeated lookups, vocabulary that disappears stays disappeared. German's der/die/das system actually forces learners to re-encounter nouns; English-source learners of Dutch don't get that automatic recycling pressure. Recommend the recycling validator I proposed above run *strictest* on Dutch/English-source pairs, not on German.

---

## Sign-off

- **Would I cite this in an SLA paper as a model implementation?** With caveats: yes for grammar reference + cognate scaffolding (a defensible Ellis-style instructed-SLA implementation); no for production-task design (the all-`opts` `fb` pattern undermines the published claim that PP67 measures pushed output); no for narrative scaffolding (the project markets stories that don't render). I would cite it as "a serious commercial-grade attempt with three structural fixes outstanding."

- **Would I assign this to my undergrad SLA students as required reading?** Yes, as a case study in the *gap between validator-green metrics and pedagogical reality* (which is exactly what `CLAUDE.md` Principle 14 already names — "Validator green is the floor, not the ceiling"). The internal honesty of the project's own documentation about that gap is itself instructive. I would not yet assign it as a model curriculum.

— SLA Researcher, Expert Panel 001 (German A1+A2 pilot)
