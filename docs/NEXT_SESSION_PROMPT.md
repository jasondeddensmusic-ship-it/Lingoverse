# NEXT SESSION STARTUP PROMPT

> Copy EVERYTHING below this line into the chat as your first message to the next Claude session.

---

You are taking over an active production build of VerumLingua, a CEFR-certified language learning platform. The German v2 curriculum (36 units, 369 lessons, 9,396 steps, 5,147 teach cards) passed all MECHANICAL validations but has NOT been quality-audited for CONTENT.

Two violations were found by the owner during manual testing:
1. A fill-in-the-blank quiz asked "Ich helfe dir gern. Oh, ___!" with answer "Gern geschehen" — WRONG. "Gern geschehen" responds to "Danke", not to an offer of help. This is a semantic mismatch that makes the product look incompetent.
2. A tip card showed "bis + morgen → bis morgen" as a math formula. This is a language learning app, not an algebra textbook.

If these exist in A1 Unit 1, they exist EVERYWHERE. You will find them and fix them.

## YOUR ORDERS

1. Read `CLAUDE.md` FIRST. Every rule in it is law.
2. Read `docs/AUDIT_HANDOFF_PP32.md` COMPLETELY. It contains 10 audit dimensions with extraction scripts, fix patterns, and structured output formats.
3. Read `docs/SESSION_HANDOFF_2026-03-29c.md` for session context.
4. Execute the audit on Units 1-6 (A1) FIRST. A1 is what every learner sees first. It must be flawless.

## RULES YOU WILL OBEY

- You will NOT skip a single step. Every mc, fb, drag_fill, tr, tip, teach, verb_table, match, intro, and story step in every lesson of every unit gets checked.
- You will NOT sample. "I checked 5 random lessons and they look fine" is UNACCEPTABLE. Check ALL of them.
- You will NOT declare something "looks good" without having READ the German text and UNDERSTOOD its meaning in context.
- You will NOT fix violations by making them worse. Every fix must be native-speaker quality German that a Goethe-Institut examiner would approve.
- You will NOT batch 10 units of violations and fix them at the end. Fix as you go. Build-check after every unit.
- You will NOT use Sonnet for this work. This requires native-level German linguistic judgment. Opus only.
- You will NOT use background agents for the audit. Background agents die during context compression. Do the work yourself, in the main session, unit by unit.
- You will NOT claim the audit is "done" without running final validation: build passes, PP8 re-scan clean, density clean, and 5 random lessons visually checked in the browser.

## WHAT "DONE" MEANS

"Done" means:
- Every quiz in all 36 units has a semantically correct answer that fits the conversational context
- Every tip card reads like natural human instruction, not a formula sheet
- Every hint guides without giving away, is 15+ chars, and teaches something
- Every teach card note adds value beyond the translation
- Every funFact is genuinely interesting, not filler
- Every example sentence is something a native speaker would actually say
- Every verb table is conjugation-accurate
- Every story card flows naturally at the appropriate CEFR level
- Every intro engages and sets clear goals
- Every match pair is accurate
- Build passes, PP8 clean, density clean

## HOW TO WORK

1. Load one unit at a time: `require('./src/data/german-v2/unit-NN.js').default`
2. Extract all steps using the scripts in `docs/AUDIT_HANDOFF_PP32.md`
3. Read every extracted item. Understand the German. Judge the pedagogy.
4. Log violations in the structured format from the handoff doc.
5. Fix violations directly in the per-unit file.
6. `npx vite build` — must pass.
7. Move to next unit.
8. After every 4 units, run PP8 hint-leak re-scan.
9. After all 36 units, run full final validation.
10. Write results to `docs/QUALITY_AUDIT_REPORT.md`.

## AFTER THE GERMAN AUDIT

Once German is truly perfect:
1. Fill the [AR] markers in `src/data/german-v2-ar/unit-01.js` through `unit-06.js` with proper MSA Arabic translations. See `docs/SESSION_HANDOFF_2026-03-29c.md` for Arabic-specific pedagogy rules.
2. Generate A2-B2 Arabic scaffolds: `for i in $(seq 7 36); do node scripts/generate-arabic-units.cjs $i; done`
3. Apply `srcDir` RTL styling to LessonEngine source-text containers.
4. Create Arabic-source German foundations.
5. Validate Arabic content the same way you validated German.

## THE STANDARD

This is not a hobby project. This is a certification-grade language learning platform that real people will use to prepare for Goethe exams. Every card, quiz, hint, and tip must be indistinguishable from content written by a panel of Goethe-Institut examiners. The owner has spent 1.5 months building the rules infrastructure specifically so that AI can maintain this standard autonomously. Prove that infrastructure works.

Start now. Unit 1, Lesson 1, Step 1. Go.
