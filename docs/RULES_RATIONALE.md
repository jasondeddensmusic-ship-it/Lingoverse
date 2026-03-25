# Rules Rationale — Why Each Rule Exists

> Historical context for each Agent Deployment Rule.
> The rules themselves live in CLAUDE.md. This file explains their origins.

## Rule A: Verification & Evidence
**Origin**: D80 (2026-03-15). Audit agents compared TOPIK/TTMIK reference lists against CLAUDE.md descriptions instead of grepping actual code. 25% false-positive rate. 10 patterns listed as "missing" that existed in units-korean.js. The owner could have found them with Ctrl+F faster than the agents did.

**D87 addition**: Gap claims without grep evidence were accepted and planned against. Wasted a full sprint on patterns that already existed.

**D112 addition**: Previous audits made claims like "CEFR grammar PASS" without consulting official grammar inventories. Uncited claims are guesswork.

## Rule B: Agent Design
**Origin**: D81 (2026-03-15). Agents given vague tasks ("check the Korean curriculum") spent 90% of tokens reading irrelevant content. Exact file paths + search terms made agents 5x more efficient.

**D100/Rule 17 addition (2026-03-24)**: German A1 Phase 2C+D timed out 3 times with single agents. Splitting into 6 parallel Opus agents succeeded. During U6 remediation, single-agent output stuck at 121 bytes (dead). Pattern: split + monitor + relaunch.

**Rule 20 addition (2026-03-25)**: Two agent deaths in German A2 build on lessons with 38+ words. Smaller lessons (8-14 words) had 100% success rate.

## Rule C: Build Process
**Origin**: D95 (2026-03-15). Korean B2 build produced 91/100 lessons below PP43 density minimum. No agent monitored density during build. Early units averaged 17.7 steps, final units 10.9. Cost a full uplift pass.

**D97 addition**: D96 uplift added ~600 steps with zero quality verification. 520 broken multi-blank fb steps, 100+ CEFR taxonomy quizzes.

**D100 addition (Rule 9)**: Korean dialogue enrichment processed 30 units (1,132 teach cards) with sequential content agents + parallel validators. Zero defects across 454 card edits.

**D104 addition (Rule 10)**: German D103 build had 3 undefined array elements, 3 missing MC ans fields, scrambled unit order. Vite compiled fine, React crashed at runtime.

**D107 addition (Rule 12)**: Spanish build attempted worktree agents (failed: worktrees branched from commits predating the file), direct-write agents (went stale), and main-session manual writing (too slow). Temp files solved all three problems.

**Rule 18 addition (2026-03-24)**: German A1 U3-U6 failed twice with agents. Direct temp-file writing succeeded: 36 lessons (766 steps) across 4 units in under 2 hours.

**Rule 19 addition (2026-03-25)**: German A2 shipped with 59 missing Goethe words because no agent had the word list during build.

**Rule 22 addition (2026-03-25)**: German A2 shipped with 11 hint leaks + 8 visual leaks. A 5-line grep script would have caught all of them pre-commit. Instead required 17 minutes of audit/fix cycles.

## Rule D: Edit Safety
**Origin**: D86 (2026-03-15). Edit tool silently inserted real newlines inside JS string literals when replacing multiline content. Broke Vite builds.

**Rule 21 addition (2026-03-25)**: German A2 remediation deployed 3 concurrent fix agents on same file. Agents' Edit calls conflicted, inserting literal newlines. Build broke.

## Rule E: Audit Standards
**Origin**: D110 (2026-03-17). D109 deployed 12 audit agents. They found 694 content issues but completely missed that German, French, and Spanish had template-based CEFR distributions. Owner spotted this in 30 seconds.

**D113 addition (Rule 16)**: D112 sessions added sub-levels up to A1.3, A2.8, B1.8, B2.6 without verifying the unit map. Units appeared in wrong CEFR tabs.

## Rule F: Content Philosophy
**Origin**: D120 (Rule 11). Original Rule 11 banned Sonnet from content. Updated: both models co-write and cross-validate.

**Rule 23 addition (2026-03-25)**: German A2 PP52 audit found "Stadt", "Mensch", "Freund" had no A1 teach cards. 30 cards added retroactively.

**Rule 24 addition (2026-03-25)**: German v1 has 1,444 teach cards, 19 verb tables, 70 tip cards. A2 v2 build wrote everything from scratch without checking. Verb tables and tips could have been ported directly.

**Rule 25 addition (2026-03-25)**: German A2 build: 50 lessons in 3 hours, but first audit found 59 missing words, 23 PP52 violations, 19 PP8 leaks. Remediation took 2 more hours. Speed without quality is waste.
