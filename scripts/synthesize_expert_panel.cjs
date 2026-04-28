#!/usr/bin/env node
/*
 * synthesize_expert_panel.cjs
 *
 * Reads all panelist reports under docs/expert-panel/<date>/*.md and synthesizes
 * deduped findings ranked by consensus × severity per the methodology defined in
 * docs/agents/EXPERT_PANEL.md (consensus-tier weighting + unique-signal scoring).
 *
 * Usage:
 *   node scripts/synthesize_expert_panel.cjs                       # auto-detects newest panel run
 *   node scripts/synthesize_expert_panel.cjs <dir-name>            # e.g. 2026-04-27-de-pilot
 *   node scripts/synthesize_expert_panel.cjs <absolute-or-relative-path>
 *
 * Outputs (written into the same directory as the input reports):
 *   SYNTHESIS.md          human-readable triage doc
 *   findings.json         machine-readable: every cluster, every finding, every score
 *   discarded.log         audit trail of NOISE-tier findings (dropped from triage)
 */

const fs = require('fs');
const path = require('path');

// ---------- CLI / IO setup ----------

const argv = process.argv.slice(2);
const PANEL_ROOT = path.join(__dirname, '..', 'docs', 'expert-panel');

function resolveTargetDir() {
  let target = argv[0];
  if (!target) {
    if (!fs.existsSync(PANEL_ROOT)) die(`missing ${PANEL_ROOT}`);
    const dated = fs.readdirSync(PANEL_ROOT)
      .filter(f => fs.statSync(path.join(PANEL_ROOT, f)).isDirectory())
      .filter(f => /^\d{4}-\d{2}-\d{2}/.test(f))
      .sort();
    if (!dated.length) die(`no dated panel runs in ${PANEL_ROOT}`);
    return path.join(PANEL_ROOT, dated[dated.length - 1]);
  }
  if (path.isAbsolute(target)) return target;
  // Try as relative to PANEL_ROOT first, then cwd
  const asPanelChild = path.join(PANEL_ROOT, target);
  if (fs.existsSync(asPanelChild)) return asPanelChild;
  return path.resolve(process.cwd(), target);
}

function die(msg) { console.error(`[synthesize] ${msg}`); process.exit(1); }

const TARGET = resolveTargetDir();
if (!fs.existsSync(TARGET)) die(`target dir does not exist: ${TARGET}`);
console.log(`[synthesize] reading: ${TARGET}`);

// ---------- Role catalog (Tier-1 = +1.0 unique-signal boost) ----------

const ROLE_CATALOG = {
  'sla-researcher':            { label: 'SLA Researcher',           tier: 1, domain: ['sla', 'input', 'output', 'interaction', 'krashen', 'swain', 'long', 'ellis', 'vanpatten'] },
  'cognitive-psychologist':    { label: 'Cognitive Psychologist',   tier: 1, domain: ['memory', 'retrieval', 'spacing', 'testing-effect', 'roediger', 'karpicke', 'bjork', 'cepeda'] },
  'educational-psychologist':  { label: 'Educational Psychologist', tier: 1, domain: ['motivation', 'sdt', 'autonomy', 'competence', 'relatedness', 'scaffolding', 'mindset', 'dweck'] },
  'language-teacher':          { label: 'Language Teacher',         tier: 1, domain: ['classroom', 'pacing', 'student', 'practical', 'embarrassing', 'survival'] },
  'curriculum-designer':       { label: 'Curriculum Designer',      tier: 1, domain: ['backward', 'addie', 'bloom', 'cefr', 'articulation', 'coherence', 'mager'] },
};
// Native linguists are language-keyed (e.g. native-linguist-de, native-linguist-ko)
function classifyRole(slug) {
  if (ROLE_CATALOG[slug]) return ROLE_CATALOG[slug];
  if (/^native-linguist(-[a-z]{2})?$/.test(slug)) {
    return { label: `Native Linguist${slug.match(/-([a-z]{2})$/) ? ` (${slug.match(/-([a-z]{2})$/)[1]})` : ''}`, tier: 1, domain: ['native', 'register', 'idiomatic', 'cultural', 'lexical', 'pragmatic'] };
  }
  // Any other Tier-2/Tier-3 expert dropped in later
  return { label: slug.replace(/-/g, ' '), tier: 2, domain: [] };
}

// ---------- Theme dictionary ----------
// Each theme is matched by ≥2 keyword hits in a finding's body.
// Themes are deliberately overlapping; clustering uses the highest-scoring theme.

const THEMES = [
  // [id, label, keywords]
  ['production-mode-gap',           'Production-mode (free recall) gap — opts:[] exposed / no `tr` step / Quiz is 100% recognition / Bloom-Apply starved',
                                    ['production-mode', 'free recall', 'free-recall', 'opts:[', 'opts visible', 'tr step', 'pushed output', 'output hypothesis', 'output-hypothesis', 'recognition decision', 'apply tier', 'bloom', 'recognition mode', 'recall demand', 'free-text', 'standalone quiz', '100% recognition', 'quiz harvester', 'harvestlessonquestions', 'fb cards silently dropped', 'mc only', 'recognition-only', 'recognition-mode']],
  ['streak-non-functional',         'Streak UI displayed but variable never incremented (vestigial / dead)',
                                    ['streak', 'incremented', 'hard-coded to 1', 'vestigial', 'never increment', 'dead', '1 day streak', 'streak displayed']],
  ['story-cards-not-rendered',      'No `type:"story"` cards rendered — narrative is described in `intro` text only',
                                    ['type:"story"', 'story renderer', 'story step', 'story bible', 'verumius scenes', 'story-driven', 'narrative scaffolding', 'rendered scenes', 'speaker tag']],
  ['no-multi-turn-dialogues',       'Dialogues are 2-turn ping-pong; no clarification / repair / recast moves',
                                    ['ping-pong', '2-turn', 'two-turn', 'turn-taking', 'multi-turn', 'clarification request', 'recast', 'repair sequence', 'negotiation of meaning', 'interaction hypothesis']],
  ['wrong-answer-feedback',         'Wrong-answer feedback is corrective-only (no explanation, no missed-items review)',
                                    ['wrong-answer', 'wrong answer', 'red coral', 'red x', 'red-x', 'punishment', 'corrective only', 'corrective-only', 'review missed', 'explanation', 'why the correct', 'lose xp', 'lose-xp', 'errorful generation']],
  ['no-adaptive-scaffolding',       'Scaffolding triggers on dose, not on struggle — no adaptive response to wrong-streak',
                                    ['adaptive scaffolding', 'wrongs in a row', '3 wrong', 'wrongstreak', 'wrong streak', 'wrong-streak', 'lapse handling', 'soft prompt', 'consecutive wrong', 'struggle', 'contingent fading']],
  ['konjunktiv-umlauts-stripped',   'Konjunktiv II umlauts stripped in `grammar/german.js` — wrong forms taught in reference',
                                    ['konjunktiv', 'umlaut', 'wäre', 'hätte', 'würde', 'könnte', '"ware"', '"hatte"', 'stripped', 'umlaut-stripped', 'past indicative']],
  ['stereotype-debt',               '"Germans love X / Germans are X" cultural-stereotype framing across funFacts',
                                    ['germans love', 'germans are', 'national stereotype', 'national-stereotype', 'caricature', 'tourist broschüre', 'touristenbroschüre', 'self-mythologizing', 'stereotyping']],
  ['continued-stub-intros',         '"(continued)" lessons ship generic stub intros — relatedness flatten',
                                    ['continued', 'stub intro', 'placeholder intro', 'generic intro', 'continue practicing the vocabulary', 'review and practice key words']],
  ['random-salad-u6',               'Unit-06 is horizontal-coherence "random salad" — multiple unrelated themes',
                                    ['random salad', 'unit-06', 'unit 6', 'u6', 'alles auf deutsch', 'horizontal incoherence', 'beim arzt', 'überlapping']],
  ['unit8-flat-file',               'Unit-08 file ships as a single line — authoring/template debt',
                                    ['unit-08', 'unit 8', 'u8', 'single-line', 'single line', 'one line', 'flat file', 'no newlines', 'müllprofessor']],
  ['food-allergy-vocab-missing',    'Restaurant unit teaches no dietary-restriction / allergy vocabulary (real-world safety gap)',
                                    ['allergie', 'allergy', 'vegetarisch', 'vegan', 'glutenfrei', 'laktosefrei', 'dietary', 'food allergy', 'celiac']],
  ['speak-slower-chunk-missing',    '"Können Sie langsamer sprechen?" survival chunk never taught',
                                    ['langsamer', 'speak slower', 'langsam sprechen', 'können sie', 'speak more slowly', 'survival phrase', 'survival chunk']],
  ['country-prepositions-untaught', 'Country-preposition rule (`aus der Türkei` vs `aus Deutschland`) used in examples but never taught',
                                    ['country preposition', 'aus der', 'aus dem', 'türkei', 'schweiz', 'aus deutschland', 'preposition rule', 'feminine country']],
  ['lexical-error-grippe',          '`Grippe` glossed as "the flu, the cold" — Grippe ≠ Erkältung (lexical error)',
                                    ['grippe', 'erkältung', 'the flu', '"the cold"', 'flu, the cold', 'lexical error']],
  ['etymology-pronunciation-tschuss', '`Tschüss` etymology (French adieu) wrong; pronunciation hint wrong',
                                    ['tschüss', 'tschuess', 'adieu', 'adjuees', 'adios', 'low german', 'pronunciation hint', 'soft ch', 'choose']],
  ['across-unit-interleaving-absent', 'Across-unit interleaving absent — match outcomes don\'t enter SRS, Daily Review caps at 20',
                                    ['across-unit', 'across-session', 'session_cap', 'daily review', 'match step outcomes', 'recordquizoutcome', 'cepeda', 'meta-analysis', 'older material starves', 'review block']],
  ['vocab-spiraling-weak',          '~50% of A1 lemmas are dead vocab by A2 — recycling under floor',
                                    ['recycling', 'spiraling', 'dead vocab', 'dead by a2', 'recurrence', 'topic-locked', 'topic locked']],
  ['hint-quality-uneven',           'Hint quality uneven — math-disguised number hints, hint that contains the answer',
                                    ['hint quality', 'arithmetic hint', 'math-disguised', 'spoiler', 'hint contains', 'leak', 'pp44', 'guide']],
  ['intro-goals-voice',             '`intro.goals` arrays are author-voice ("Learn X"), not learner-voice CEFR can-dos ("I can X")',
                                    ['goals array', 'i can', 'learner voice', 'mager', 'teacher voice', 'author voice', 'cefr can-do', 'can-do statement']],
  ['working-memory-overload',       'Drag_fill / match working-memory load near or above Cowan limit',
                                    ['working memory', 'cowan', 'sweller', 'chunks', '4 blanks', 'pool size', '6 pairs', '8-pair', 'overload', 'cognitive load']],
  ['daily-review-visibility',       'Daily Review tile only renders when dueCount > 0 — invisible cue when caught up',
                                    ['daily review tile', 'duecount', 'tile is invisible', 'always show', 'caught up', 'visibility of the cue']],
  ['re-teach-no-recycling-frame',   'Re-teaches without `deepen`/`recyclingOf` flag — learner sees "new word" badge on review',
                                    ['re-teach', 'reteach', 'recyclingof', 'deepen', 'apotheke u02', 'apotheke u07', 're-encounter']],
  ['country-cultural-asymmetry',    'Cultural depth asymmetric — Berlin centrism, regional DACH variation under-treated',
                                    ['berlin centrism', 'munich', 'dach', 'austria', 'switzerland', 'bavarian', 'servus', 'grüß gott']],
  ['embarrassing-absences',         '"Embarrassing absences" — emergency phrases, brauchen, train-ticket types, "Ich hätte gern..."',
                                    ['embarrassing absence', 'embarrassing-absences', 'emergency phrase', 'notfall', 'brauchen', 'ich hätte gern', 'rezept', 'rezeptfrei', 'karte oder bar']],
  ['hint-arithmetic',               'Number-quiz hints are arithmetic riddles, not language-bridges',
                                    ['add two', 'arithmetic hint', 'math-disguised', 'two and three together']],
  ['no-listening-speaking',         'No real listening / speaking practice (TTS deferred; one-pager limit)',
                                    ['listening practice', 'speaking practice', 'tts', 'pronunciation', 'mouth mechanics', 'audio comprehension']],
  ['ai-conversation-not-wired',     'AI Chat exists but not wired into lesson flow',
                                    ['ai chat', 'chat.jsx', 'role-play', 'conversation phase', 'verumius llm', 'visual-003']],
  ['register-zigzag-dialogues',     'Du/Sie boundary not scaffolded inside dialogues — register zigzag mid-lesson',
                                    ['register zigzag', 'register slip', 'du/sie', 'sie/du', 'register mismatch', 'mid-lesson', 'ihre hilfe', 'deine hilfe']],
  ['per-unit-lesson-count-variance', 'Per-unit lesson count varies 9-24 with no documented rationale (pacing fatigue risk)',
                                    ['lesson count', 'per-unit lesson', 'pacing fatigue', 'unit2', 'u2 22 lessons', '24 lessons']],
  ['a1-1-vs-a1-2-imbalance',        'A1.1 vs A1.2 sub-level ratio is 5:1 — unbalanced',
                                    ['a1.1', 'a1.2', 'a1.1 vs a1.2', '5:1 ratio', '83/17', 'sub-level imbalance']],
  ['weil-pre-taught-in-examples',   'Weil-clauses appear in U7 examples 2 units before they\'re taught grammar',
                                    ['weil', 'subordinate clause', 'pre-taught', 'in examples before']],
  ['mein-familienname',             'Pragmatically odd phrasings (e.g., "Mein Familienname ist Weber")',
                                    ['mein familienname', 'familienname ist', 'pragmatically odd', 'meine adresse ist berliner str']],

  // STRENGTH themes (consensus celebrations)
  ['strength-foundations',          'Foundations module is genuinely excellent (alphabet, ich-Laut/ach-Laut, Eszett)',
                                    ['foundations', 'foundations module', 'ich-laut', 'ach-laut', 'eszett', 'ß rule', 'auslautverhärtung']],
  ['strength-modal-particles',      'Modal particles (doch, mal, halt, schon) taught explicitly at A1 — rare',
                                    ['modal particle', 'modal particles', 'doch', 'mal', 'halt', 'schon at a1', 'doch as answer']],
  ['strength-separable-verbs',      'Separable verbs taught with split-position rule (incl. UMziehen vs umZIEHEN)',
                                    ['separable verb', 'separable verbs', 'aufstehen', 'umziehen', 'split position', 'splitting rule']],
  ['strength-capstone-design',      'Capstone backward design (U12 L14 numbered 25-construct A2 prüfung)',
                                    ['capstone', 'backward design', '25 constructs', 'numbered', 'prüfung', 'die große prüfung']],
  ['strength-verumius-narrative',   'Verumius narrative + cultural funFacts deliver genuine relatedness',
                                    ['verumius', 'narrative arc', 'character continuity', 'hildi', 'yilmaz', 'cultural anchor', 'funfact', 'fun fact']],
  ['strength-distractor-quality',   'MC distractor quality is high (semantic competition, not absurd ringers)',
                                    ['distractor quality', 'distractors are', 'absurd ringers', 'semantic competition', 'high-competition mc']],
  ['strength-fsrs-correct',         'FSRS implementation is genuinely correct (request_retention 0.9, persistence)',
                                    ['fsrs', 'ts-fsrs', 'request_retention', 'fsrs implementation', 'fsrs correctly', 'srs.js', 'cepeda']],
  ['strength-non-coercive-sound',   'UI sound design is non-coercive (low-volume sine waves, no buzzers)',
                                    ['uisounds', 'sine wave', 'non-coercive', 'no klaxon', 'no buzzer', 'low volume', 'audio toggle']],
  ['strength-no-leaderboard',       'No leaderboard / no comparison metrics — relatedness without ranking',
                                    ['no leaderboard', 'no comparison', 'no ranking', 'personal mastery', 'can-do statement']],
  ['strength-flag-button',          'FlagButton — learners have voice (collaborator framing)',
                                    ['flagbutton', 'flag button', 'collaborator', 'this helps']],
  ['strength-zero-penalty-retry',   'Try Again carries zero penalty (gold gradient, equal weight to Continue)',
                                    ['retrylesson', 'try again', 'zero penalty', 'no xp deduction']],
  ['strength-foundations-skip',     'Foundations gate has "Unlock anyway" — autonomy preserved',
                                    ['unlock anyway', 'foundations gate', 'foundations lock', 'placement quiz']],
];

// ---------- Markdown parsing ----------

function readReports(dir) {
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.md') && !/SYNTHESIS|README/i.test(f));
  return files.map(f => {
    const slug = f.replace(/\.md$/, '');
    const role = classifyRole(slug);
    const text = fs.readFileSync(path.join(dir, f), 'utf8');
    return { slug, role, text, path: path.join(dir, f) };
  });
}

function splitSections(text) {
  // Split on ^## headers (level 2). Robust: use split rather than regex with \Z.
  const parts = text.split(/^##\s+/m);
  // parts[0] = preamble, parts[1..] = each section's "heading\nbody"
  const sections = [{ name: '__preamble__', body: parts[0] || '' }];
  for (let i = 1; i < parts.length; i++) {
    const chunk = parts[i];
    const nl = chunk.indexOf('\n');
    if (nl === -1) sections.push({ name: chunk.trim(), body: '' });
    else sections.push({ name: chunk.slice(0, nl).trim(), body: chunk.slice(nl + 1) });
  }
  return sections;
}

function classifySection(name) {
  const n = name.toLowerCase();
  if (/^score/.test(n) || /^scores/.test(n)) return 'score';
  if (/strength/.test(n)) return 'strength';
  if (/critical/.test(n)) return 'critical';
  if (/important/.test(n)) return 'important';
  if (/nice-to-have|nice to have|backlog/.test(n)) return 'nicetohave';
  if (/cross-language/.test(n)) return 'cross';
  if (/cultural sensitivity/.test(n)) return 'important';   // treat as important findings
  if (/embarrassing/.test(n)) return 'important';            // teacher's "embarrassing absences"
  if (/vertical-articulation|horizontal-coherence|one-pager/.test(n)) return 'important';
  if (/sign-off|signoff|conclusion/.test(n)) return 'signoff';
  return 'other';
}

// Extract findings from a section body. Handles four formats:
//   1. Sub-section headers (### Finding N | ### CRIT-N | ### CF-N | ### IF-N | ### A. ...)
//   2. Markdown tables (| col | col | col |)
//   3. Top-level bullets (- ... or * ...)
//   4. Numbered lists (1. 2. 3.) — important for "Top 3 strengths" sections
function extractFindings(body) {
  const findings = [];

  // 1. Sub-section split (### headers within this section)
  const subParts = body.split(/^###\s+/m);
  if (subParts.length > 1) {
    for (let i = 1; i < subParts.length; i++) {
      const part = subParts[i];
      const nl = part.indexOf('\n');
      const heading = nl === -1 ? part.trim() : part.slice(0, nl).trim();
      const rest = nl === -1 ? '' : part.slice(nl + 1).trim();
      if (heading.length < 3) continue;
      findings.push({ kind: 'sub-section', text: heading + (rest ? '\n' + rest : ''), heading });
    }
  }

  // 2. Markdown tables — walk lines stateful, capture data rows after a separator
  const lines = body.split(/\n/);
  let pastSeparator = false;
  for (const line of lines) {
    if (/^\|[\s\-:|]+\|\s*$/.test(line)) { pastSeparator = true; continue; }
    if (!/^\|.+\|/.test(line)) { pastSeparator = false; continue; }
    if (!pastSeparator) continue;
    const cells = line.split(/\|/).slice(1, -1).map(c => c.trim());
    if (cells.length < 2) continue;
    const joined = cells.join(' | ');
    if (joined.length < 30) continue;
    // Avoid duplicating content already captured in a sub-section
    const already = findings.some(f => f.text.includes(joined.slice(0, 60)));
    if (already) continue;
    findings.push({ kind: 'table-row', text: joined });
  }

  // 3 + 4. Top-level numbered or bulleted list items.
  // Only run this when sub-sections didn't consume the body, OR the section is a "strengths" context (caller ensures).
  if (subParts.length <= 1) {
    // Match numbered or bulleted items. Item content extends until the next item or blank-line gap.
    const itemRegex = /^(?:\d+\.|[-*])\s+([\s\S]+?)(?=^(?:\d+\.|[-*])\s+|\n\n|$(?![\s\S]))/gm;
    let m;
    while ((m = itemRegex.exec(body)) !== null) {
      const text = m[1].replace(/\s+$/, '');
      if (text.length < 30) continue;
      const already = findings.some(f => f.text.includes(text.slice(0, 80)));
      if (already) continue;
      findings.push({ kind: 'list-item', text });
    }
  }

  return findings;
}

function extractScores(body) {
  // Match lines like "- Comprehensible-input calibration: 7"
  const out = {};
  const re = /^[\s\-*]*\**\s*([A-Za-z][A-Za-z\-/ ]+?):\s*\**\s*(\d+(?:\.\d+)?)\b/gm;
  let m;
  while ((m = re.exec(body)) !== null) {
    out[m[1].trim().toLowerCase()] = parseFloat(m[2]);
  }
  return out;
}

// ---------- Metadata extraction from a finding's text ----------

const FILE_PATH_RE   = /\b(?:src\/[a-zA-Z0-9_./\-]+|scripts\/[a-zA-Z0-9_./\-]+|docs\/[a-zA-Z0-9_./\-]+)\b/g;
const UNIT_REF_RE    = /\bunit-(\d{1,2})(?:\.js)?\b|\bU(\d{1,2})\b|\bUnit\s*-?\s*(\d{1,2})\b/gi;
const LINE_REF_RE    = /\b([a-zA-Z0-9_./\-]+\.(?:js|jsx|cjs|mjs|md|json)):(\d{1,5})(?:-(\d{1,5}))?\b/g;
const ACADEMIC_RE    = /\b([A-Z][a-zA-Z]+(?:\s+(?:&|and)\s+[A-Z][a-zA-Z]+)?(?:\s+et\s+al\.)?)\s*\((\d{4})\)/g;
const SEVERITY_LEX   = [
  ['critical', 9],
  ['must fix', 9],
  ['highest priority', 9],
  ['highest impact', 9],
  ['single biggest', 9],
  ['safety gap', 9],
  ['real safety', 9],
  ['embarrassing absence', 8],
  ['biggest', 8],
  ['undermine', 7],
  ['violation', 7],
  ['important', 6],
  ['should fix', 6],
  ['risk', 5],
  ['nice-to-have', 3],
];
const CONCRETE_FIX_RE = /\b(?:add|introduce|wire|cap|drop|replace|remove|rewrite|migrate|inject|enable|convert|run|reformat|split|fix|build|require|raise|update|create)\b\s+\w+/i;

function extractMeta(text) {
  const filePaths   = uniq([...text.matchAll(FILE_PATH_RE)].map(m => m[0]));
  const lineRefs    = uniq([...text.matchAll(LINE_REF_RE)].map(m => `${m[1]}:${m[2]}${m[3] ? '-' + m[3] : ''}`));
  const unitRefs    = uniq([...text.matchAll(UNIT_REF_RE)].map(m => Number(m[1] || m[2] || m[3])).filter(n => Number.isFinite(n)));
  const academic    = uniq([...text.matchAll(ACADEMIC_RE)].map(m => `${m[1]} ${m[2]}`));
  const concreteFix = CONCRETE_FIX_RE.test(text);
  // Severity from lexical cues, capped
  let severityLex = 0;
  for (const [tok, score] of SEVERITY_LEX) {
    if (text.toLowerCase().includes(tok)) severityLex = Math.max(severityLex, score);
  }
  return { filePaths, lineRefs, unitRefs, academic, concreteFix, severityLex };
}

function uniq(arr) { return Array.from(new Set(arr)); }

// Strength themes (id starts with "strength-") only match strength entries; all
// other themes only match Critical/Important/Nice-to-have findings. This prevents
// e.g. a finding that mentions "separable verbs" from false-matching a strength theme.
function classifyTheme(text, isStrength = false) {
  const lower = text.toLowerCase();
  const scored = [];
  for (const [id, label, keywords] of THEMES) {
    const isStrengthTheme = id.startsWith('strength-');
    if (isStrength !== isStrengthTheme) continue;
    let hits = 0;
    for (const kw of keywords) if (lower.includes(kw.toLowerCase())) hits++;
    if (hits >= 2) scored.push({ id, label, hits });
  }
  scored.sort((a, b) => b.hits - a.hits);
  return scored[0] || null;
}

function titleSnippet(text) {
  const stripped = text
    .replace(/^[#`*_>|\s\-]+/, '')
    .replace(/\n[\s\S]+$/, '')   // first line only
    .replace(/`/g, '')
    .replace(/\s+/g, ' ')
    .trim();
  return stripped.length > 200 ? stripped.slice(0, 197) + '…' : stripped;
}

// ---------- Per-report parse ----------

function parseReport(report) {
  const sections = splitSections(report.text);
  const out = {
    slug: report.slug,
    role: report.role,
    path: report.path,
    scores: {},
    findings: [],   // each: { section, text, title, theme, meta }
    strengths: [],
  };
  for (const sec of sections) {
    const klass = classifySection(sec.name);
    if (klass === 'score') {
      Object.assign(out.scores, extractScores(sec.body));
      continue;
    }
    if (klass === 'strength') {
      const items = extractFindings(sec.body);
      for (const it of items) {
        out.strengths.push({
          title: titleSnippet(it.text),
          text: it.text,
          theme: classifyTheme(it.text, /* isStrength */ true),
          // Also classify against finding themes — when a strength text matches a
          // FINDING theme, it's a CONFLICT with another panelist's finding (e.g.
          // streak: Ed Psych "vestigial = no dark pattern" praise vs Cog Psych
          // "non-functional UI" critique).
          conflictTheme: classifyTheme(it.text, /* isStrength */ false),
        });
      }
      continue;
    }
    if (klass !== 'critical' && klass !== 'important' && klass !== 'nicetohave') continue;
    const items = extractFindings(sec.body);
    for (const it of items) {
      const meta = extractMeta(it.text);
      const theme = classifyTheme(it.text, /* isStrength */ false);
      out.findings.push({
        section: klass,
        sectionName: sec.name,
        text: it.text,
        title: titleSnippet(it.text),
        theme,
        meta,
      });
    }
  }
  return out;
}

// ---------- Clustering ----------

function clusterFindings(parsed) {
  // Each finding becomes a unit; we then merge by theme_id (when set) and by file-path overlap.
  const allFindings = [];
  for (const r of parsed) {
    for (const f of r.findings) {
      allFindings.push({ ...f, panelist: r.slug, panelistRole: r.role });
    }
  }

  // Group by theme.id when set. Themeless findings stay isolated initially.
  const byTheme = new Map();
  const themeless = [];
  for (const f of allFindings) {
    if (f.theme) {
      if (!byTheme.has(f.theme.id)) byTheme.set(f.theme.id, []);
      byTheme.get(f.theme.id).push(f);
    } else {
      themeless.push(f);
    }
  }

  // Themeless: cluster by overlapping file paths. Findings sharing ≥1 file path merge.
  const themelessClusters = [];
  for (const f of themeless) {
    let attached = null;
    if (f.meta.filePaths.length) {
      for (const c of themelessClusters) {
        const sharedPath = c.findings.some(g => g.meta.filePaths.some(p => f.meta.filePaths.includes(p)));
        if (sharedPath) { attached = c; break; }
      }
    }
    if (!attached) {
      attached = { id: null, label: null, findings: [] };
      themelessClusters.push(attached);
    }
    attached.findings.push(f);
  }

  // Build cluster list
  const clusters = [];
  for (const [id, findings] of byTheme.entries()) {
    const theme = findings[0].theme;
    clusters.push({
      themeId: id,
      label: theme.label,
      findings,
    });
  }
  for (const c of themelessClusters) {
    if (!c.findings.length) continue;
    const f = c.findings[0];
    const sample = f.title.slice(0, 80);
    clusters.push({
      themeId: null,
      label: `[Themeless] ${sample}`,
      findings: c.findings,
    });
  }
  return clusters;
}

// ---------- Scoring per EXPERT_PANEL.md methodology ----------

const SECTION_SEVERITY = { critical: 3, important: 2, nicetohave: 1 };

function scoreCluster(cluster) {
  const panelists = uniq(cluster.findings.map(f => f.panelist));
  const consensusN = panelists.length;

  // Per-panelist max severity (Critical=3, Important=2, NiceToHave=1) for tier mapping
  const perPanelistMaxSev = {};
  for (const f of cluster.findings) {
    const sev = SECTION_SEVERITY[f.section] || 1;
    if (sev > (perPanelistMaxSev[f.panelist] || 0)) perPanelistMaxSev[f.panelist] = sev;
  }
  const maxObservedSev = Math.max(...Object.values(perPanelistMaxSev), 1);

  // Consensus weighting per EXPERT_PANEL.md spec example
  // "3 panelists × 3 = 9" → consensusWeight = 1, 2, 3 for 1, 2, 3+ panelists
  // base = consensusN × consensusWeight
  const consensusWeight = consensusN >= 3 ? 3 : consensusN === 2 ? 2 : 1;
  const baseScore = consensusN * consensusWeight;

  // Unique-signal boosts (full weight, regardless of consensusN, per spec)
  let boost = 0;
  const boostNotes = [];
  const allTier1 = cluster.findings.every(f => f.panelistRole.tier === 1);
  if (allTier1) { boost += 1.0; boostNotes.push('Tier-1 panelist(s)'); }
  const anyFileLineRef = cluster.findings.some(f => f.meta.lineRefs.length > 0 || f.meta.filePaths.length > 0);
  if (anyFileLineRef) { boost += 0.5; boostNotes.push('file/line citation'); }
  const anyAcademic = cluster.findings.some(f => f.meta.academic.length > 0);
  if (anyAcademic) { boost += 0.5; boostNotes.push('academic citation'); }
  const maxSevLex = Math.max(...cluster.findings.map(f => f.meta.severityLex || 0), 0);
  if (maxSevLex >= 8) { boost += 1.0; boostNotes.push(`severity-language ${maxSevLex}`); }
  else if (maxSevLex >= 5) { boost += 0.5; boostNotes.push(`severity-language ${maxSevLex}`); }
  const anyConcreteFix = cluster.findings.some(f => f.meta.concreteFix);
  if (anyConcreteFix) { boost += 0.5; boostNotes.push('concrete fix'); }

  let finalScore = baseScore + boost;

  // Section-severity cap: prevents weak clusters from being over-scored
  // If max observed severity across panelists is NICE-TO-HAVE, cap at 2 (so it stays NICE-TO-HAVE)
  // If max is IMPORTANT, cap at 4 (preserves IMPORTANT tier — won't reach CRITICAL ≥5)
  const sevCap = { 1: 2, 2: 4, 3: Infinity };
  finalScore = Math.min(finalScore, sevCap[maxObservedSev]);

  // Tier mapping per spec thresholds
  let tier;
  if (consensusN >= 3 && maxObservedSev >= 2) tier = 'CRITICAL';   // AUTO-CRITICAL
  else if (finalScore >= 5) tier = 'CRITICAL';
  else if (finalScore >= 3) tier = 'IMPORTANT';
  else if (finalScore >= 1) tier = 'NICE-TO-HAVE';
  else tier = 'NOISE';

  return {
    consensusN,
    consensusWeight,
    baseScore,
    maxObservedSev,
    rawBoost: boost,
    effectiveBoost: boost,   // boosts no longer halved
    boostNotes,
    finalScore,
    tier,
    panelists,
  };
}

// ---------- Conflict detection ----------
// Surfaces cases where one panelist PRAISES a theme while another CRITIQUES it.
// Method: a strength entry's `conflictTheme` (cross-classification against finding-themes)
// pairs against any finding whose text hits ≥2 of that theme's keywords, regardless of
// whether that finding's PRIMARY classification was the same theme. This catches buried
// cross-panelist conflicts (e.g. Cog Psych mentions streak inside a wrong-answer finding).
function detectConflicts(parsed) {
  const conflicts = [];
  const strengthsByConflictTheme = new Map();
  for (const r of parsed) {
    for (const s of r.strengths) {
      if (!s.conflictTheme) continue;
      const id = s.conflictTheme.id;
      if (!strengthsByConflictTheme.has(id)) strengthsByConflictTheme.set(id, []);
      strengthsByConflictTheme.get(id).push({ panelist: r.slug, label: s.conflictTheme.label, title: s.title });
    }
  }

  for (const [themeId, strengthSide] of strengthsByConflictTheme) {
    const themeDef = THEMES.find(t => t[0] === themeId);
    if (!themeDef) continue;
    const [, label, keywords] = themeDef;

    // Scan every finding's text directly against this theme's keywords
    const findingSide = [];
    for (const r of parsed) {
      for (const f of r.findings) {
        const lower = f.text.toLowerCase();
        let hits = 0;
        for (const kw of keywords) if (lower.includes(kw.toLowerCase())) hits++;
        if (hits >= 2) {
          findingSide.push({ panelist: r.slug, section: f.section, title: f.title, keywordHits: hits });
        }
      }
    }
    if (!findingSide.length) continue;

    // Require cross-panelist disagreement: at least one finding panelist NOT in strength-side panelists
    const strengthPanelists = new Set(strengthSide.map(s => s.panelist));
    const crossPanelistConflict = findingSide.some(f => !strengthPanelists.has(f.panelist));
    if (!crossPanelistConflict) continue;

    conflicts.push({ themeId, label, strengthSide, findingSide });
  }
  return conflicts;
}

// ---------- Strength consensus ----------
function strengthConsensus(parsed) {
  const byTheme = new Map();
  for (const r of parsed) {
    for (const s of r.strengths) {
      if (!s.theme) continue;
      if (!byTheme.has(s.theme.id)) byTheme.set(s.theme.id, { themeId: s.theme.id, label: s.theme.label, panelists: [] });
      byTheme.get(s.theme.id).panelists.push({ slug: r.slug, role: r.role.label, title: s.title });
    }
  }
  return Array.from(byTheme.values())
    .filter(s => s.panelists.length >= 1)
    .sort((a, b) => b.panelists.length - a.panelists.length);
}

// ---------- Rendering ----------

function fmtScoreTable(parsed) {
  // Just panelist + overall — full score breakdowns live in each report.
  const header = `| Panelist | Overall (1-10) |`;
  const sep    = `|---|---|`;
  const rows = parsed.map(r => `| ${r.role.label} | ${r.scores.overall != null ? r.scores.overall.toString() : '—'} |`);
  return [header, sep, ...rows].join('\n');
}

function fmtCluster(cluster, score, idx) {
  const { tier, consensusN, baseScore, maxObservedSev, rawBoost, effectiveBoost, boostNotes, finalScore, panelists } = score;
  const findingId = `EXPERT-PANEL-FINDING-${String(idx + 1).padStart(3, '0')}`;
  const panelistList = panelists.map(p => `\`${p}\``).join(', ');
  const themeRow = cluster.themeId ? `**Theme:** \`${cluster.themeId}\`` : `**Theme:** _(themeless cluster)_`;

  // Aggregate file/line citations across cluster
  const allFiles = uniq(cluster.findings.flatMap(f => [...f.meta.filePaths, ...f.meta.lineRefs]));
  const allUnits = uniq(cluster.findings.flatMap(f => f.meta.unitRefs)).sort((a, b) => a - b);
  const allAcademic = uniq(cluster.findings.flatMap(f => f.meta.academic));

  const lines = [];
  lines.push(`### ${findingId} — ${tier} — ${cluster.label}`);
  lines.push('');
  lines.push(themeRow);
  lines.push(`**Consensus:** ${consensusN} panelist${consensusN > 1 ? 's' : ''} (${panelistList}) — base ${baseScore} (n × consensus weight) + boost ${effectiveBoost.toFixed(1)} [${boostNotes.join(', ') || 'none'}] → **score ${finalScore.toFixed(1)}** | max-observed-severity ${maxObservedSev}/3`);
  if (allUnits.length) lines.push(`**Units cited:** ${allUnits.map(u => `U${u}`).join(', ')}`);
  if (allFiles.length) lines.push(`**Files / lines cited:** ${allFiles.slice(0, 8).map(p => `\`${p}\``).join(', ')}${allFiles.length > 8 ? ` _(+${allFiles.length - 8} more)_` : ''}`);
  if (allAcademic.length) lines.push(`**Academic citations:** ${allAcademic.slice(0, 6).join('; ')}${allAcademic.length > 6 ? ` _(+${allAcademic.length - 6} more)_` : ''}`);
  lines.push('');
  for (const f of cluster.findings) {
    const sevLabel = f.section.toUpperCase();
    lines.push(`- **${f.panelistRole.label}** (${sevLabel}): ${f.title}`);
  }
  lines.push('');
  lines.push('**Owner triage:** [ ] accept &nbsp; [ ] defer &nbsp; [ ] reject &nbsp; — reason: _______________');
  lines.push('');
  return lines.join('\n');
}

function renderSynthesis({ parsed, clusters, scored, conflicts, strengths }) {
  const date = path.basename(TARGET).replace(/-[a-z-]+$/, '');
  const slice = path.basename(TARGET);
  const out = [];

  out.push(`# Expert Panel Synthesis — ${slice}`);
  out.push('');
  out.push(`**Date:** ${date}  `);
  out.push(`**Reports:** ${parsed.length} panelists  `);
  out.push(`**Methodology:** [docs/agents/EXPERT_PANEL.md](../../agents/EXPERT_PANEL.md) — consensus weighting × unique-signal boosts, tiered into CRITICAL / IMPORTANT / NICE-TO-HAVE / NOISE.`);
  out.push('');
  out.push('## Panelist scores');
  out.push('');
  out.push(fmtScoreTable(parsed));
  out.push('');

  // Tally by tier (the cluster lives at .score.tier, not .tier)
  const tally = { CRITICAL: 0, IMPORTANT: 0, 'NICE-TO-HAVE': 0, NOISE: 0 };
  for (const s of scored) tally[s.score.tier] = (tally[s.score.tier] || 0) + 1;
  out.push('## Findings tally');
  out.push('');
  out.push(`- **CRITICAL:** ${tally.CRITICAL}`);
  out.push(`- **IMPORTANT:** ${tally.IMPORTANT}`);
  out.push(`- **NICE-TO-HAVE:** ${tally['NICE-TO-HAVE']}`);
  out.push(`- **NOISE (dropped, see discarded.log):** ${tally.NOISE}`);
  out.push('');

  // Render each tier. CRITICAL + IMPORTANT get full blocks; NICE-TO-HAVE gets a compact list
  // so the doc stays readable for owner triage (per spec: "Aggregate into a single backlog").
  const fullTiers = ['CRITICAL', 'IMPORTANT'];
  let runningIdx = 0;
  for (const tier of fullTiers) {
    const inTier = scored.filter(s => s.score.tier === tier);
    if (!inTier.length) continue;
    out.push(`## ${tier} findings (${inTier.length})`);
    out.push('');
    for (const { cluster, score } of inTier) {
      out.push(fmtCluster(cluster, score, runningIdx++));
    }
  }
  const nice = scored.filter(s => s.score.tier === 'NICE-TO-HAVE');
  if (nice.length) {
    out.push(`## NICE-TO-HAVE findings (${nice.length}) — backlog`);
    out.push('');
    out.push('Compact list. Per `EXPERT_PANEL.md`: aggregate; surface only if patterns emerge across panels. Detailed text lives in each panelist\'s report.');
    out.push('');
    for (const { cluster, score } of nice) {
      const findingId = `EXPERT-PANEL-FINDING-${String(runningIdx + 1).padStart(3, '0')}`;
      runningIdx++;
      const panelistList = score.panelists.map(p => `\`${p}\``).join(', ');
      const themeStr = cluster.themeId ? `\`${cluster.themeId}\`` : '_(themeless)_';
      out.push(`- **${findingId}** | ${themeStr} | score ${score.finalScore.toFixed(1)} | ${panelistList} — ${cluster.label.replace(/^\[Themeless\]\s*/, '').slice(0, 130)}`);
    }
    out.push('');
  }

  if (conflicts.length) {
    out.push('## Conflicts (panelists disagree)');
    out.push('');
    out.push('Two panelists flagged the SAME theme with OPPOSITE judgments — one praised, one critiqued. Owner decides which lens wins for this product\'s positioning. Per `EXPERT_PANEL.md`: log decision in `docs/DECISION_LOG.md`.');
    out.push('');
    for (const c of conflicts) {
      out.push(`### ${c.label}`);
      out.push('');
      out.push(`**Praised by:** ${c.strengthSide.map(s => `\`${s.panelist}\` — "${s.title.slice(0, 100)}"`).join('; ')}`);
      out.push('');
      out.push(`**Critiqued by:** ${c.findingSide.map(f => `\`${f.panelist}\` (${f.section.toUpperCase()}) — "${f.title.slice(0, 100)}"`).join('; ')}`);
      out.push('');
      out.push('**Owner decision:** [ ] praise wins &nbsp; [ ] critique wins &nbsp; [ ] both true (different aspects) — reason: _______________');
      out.push('');
    }
  }

  if (strengths.length) {
    out.push('## Strengths consensus');
    out.push('');
    out.push('Themes praised by 1+ panelists. Useful for keeping in mind WHAT works when iterating, so fixes don\'t accidentally regress the system.');
    out.push('');
    for (const s of strengths) {
      const cite = s.panelists.map(p => `\`${p.slug}\``).join(', ');
      out.push(`- **${s.label}** — praised by ${s.panelists.length} (${cite})`);
    }
    out.push('');
  }

  out.push('---');
  out.push('');
  out.push('_Generated by `scripts/synthesize_expert_panel.cjs`. Regenerate after re-running the panel by re-running this script._');
  return out.join('\n');
}

// ---------- Main ----------

const reports = readReports(TARGET);
if (!reports.length) die(`no .md reports found in ${TARGET}`);
console.log(`[synthesize] found ${reports.length} reports: ${reports.map(r => r.slug).join(', ')}`);

const parsed = reports.map(parseReport);
console.log(`[synthesize] extracted findings:`);
for (const r of parsed) console.log(`  - ${r.slug}: ${r.findings.length} findings, ${r.strengths.length} strengths`);

const clusters = clusterFindings(parsed);
console.log(`[synthesize] clustered into ${clusters.length} clusters`);

const scoredAll = clusters.map(cluster => ({ cluster, score: scoreCluster(cluster) }));
// Sort: tier order, then finalScore desc
const tierOrder = { CRITICAL: 0, IMPORTANT: 1, 'NICE-TO-HAVE': 2, NOISE: 3 };
scoredAll.sort((a, b) => tierOrder[a.score.tier] - tierOrder[b.score.tier] || b.score.finalScore - a.score.finalScore);

const triaged = scoredAll.filter(s => s.score.tier !== 'NOISE');
const dropped = scoredAll.filter(s => s.score.tier === 'NOISE');

const conflicts = detectConflicts(parsed);
const strengths = strengthConsensus(parsed);

// Write outputs
const synthMd = renderSynthesis({ parsed, clusters, scored: triaged, conflicts, strengths });
fs.writeFileSync(path.join(TARGET, 'SYNTHESIS.md'), synthMd, 'utf8');

const findingsJson = {
  date: path.basename(TARGET),
  panelists: parsed.map(r => ({ slug: r.slug, role: r.role.label, scores: r.scores, findingsCount: r.findings.length, strengthsCount: r.strengths.length })),
  clusters: scoredAll.map((s, idx) => ({
    id: `EXPERT-PANEL-FINDING-${String(idx + 1).padStart(3, '0')}`,
    themeId: s.cluster.themeId,
    label: s.cluster.label,
    tier: s.score.tier,
    consensusN: s.score.consensusN,
    finalScore: Number(s.score.finalScore.toFixed(2)),
    boosts: s.score.boostNotes,
    panelists: s.score.panelists,
    findings: s.cluster.findings.map(f => ({
      panelist: f.panelist,
      section: f.section,
      title: f.title,
      filePaths: f.meta.filePaths,
      lineRefs: f.meta.lineRefs,
      unitRefs: f.meta.unitRefs,
      academic: f.meta.academic,
      concreteFix: f.meta.concreteFix,
    })),
  })),
  conflicts,
  strengths,
};
fs.writeFileSync(path.join(TARGET, 'findings.json'), JSON.stringify(findingsJson, null, 2), 'utf8');

if (dropped.length) {
  const lines = [`# Discarded (NOISE-tier) findings — ${path.basename(TARGET)}`, ''];
  for (const { cluster, score } of dropped) {
    lines.push(`## ${cluster.label}`);
    lines.push(`- score: ${score.finalScore.toFixed(2)} — ${score.boostNotes.join(', ') || 'no boosts'}`);
    for (const f of cluster.findings) lines.push(`- \`${f.panelist}\` (${f.section}): ${f.title}`);
    lines.push('');
  }
  fs.writeFileSync(path.join(TARGET, 'discarded.log'), lines.join('\n'), 'utf8');
}

console.log(`[synthesize] tier counts: CRITICAL=${triaged.filter(s => s.score.tier === 'CRITICAL').length}, IMPORTANT=${triaged.filter(s => s.score.tier === 'IMPORTANT').length}, NICE-TO-HAVE=${triaged.filter(s => s.score.tier === 'NICE-TO-HAVE').length}, NOISE=${dropped.length}`);
console.log(`[synthesize] conflicts detected: ${conflicts.length}`);
console.log(`[synthesize] strengths consensus themes: ${strengths.length}`);
console.log(`[synthesize] wrote:`);
console.log(`  - ${path.relative(process.cwd(), path.join(TARGET, 'SYNTHESIS.md'))}`);
console.log(`  - ${path.relative(process.cwd(), path.join(TARGET, 'findings.json'))}`);
if (dropped.length) console.log(`  - ${path.relative(process.cwd(), path.join(TARGET, 'discarded.log'))}`);
