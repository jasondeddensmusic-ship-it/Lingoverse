// ── Universal Word Dictionary (WORD_DB) + Word Introduction Registry (WORD_INTRO_MAP) ──
// Phase B2: Complete rewrite merging 3 sources into WORD_DB.
// Source priority: (1) Function word lists > (2) Teach card extraction > (3) Example/quiz extraction
// This is the single source of truth for:
//   - POS-based grammar coloring (universalHl)
//   - New-word gold bubble detection (WORD_INTRO_MAP)
//   - Clickable word dictionary (lookupWord)

import { ARTICLE_SYSTEMS } from './vocabulary.js';
import dutchUnits from './units-dutch.js';
import koreanUnits from './units-korean.js';
import germanUnits from './units-german.js';
import frenchUnits from './units-french.js';
import spanishUnits from './units-spanish.js';
import otherUnits from './units-other.js';

// Function word lists (Source #1, highest priority for POS accuracy)
import { FUNCTION_WORDS_DE } from './wordlists/function-words-de.js';
import { FUNCTION_WORDS_FR } from './wordlists/function-words-fr.js';
import { FUNCTION_WORDS_NL } from './wordlists/function-words-nl.js';
import { FUNCTION_WORDS_ES } from './wordlists/function-words-es.js';
import { FUNCTION_WORDS_KO } from './wordlists/function-words-ko.js';

const ALL_UNITS = [...dutchUnits, ...koreanUnits, ...germanUnits, ...frenchUnits, ...spanishUnits, ...otherUnits];

const FUNCTION_WORD_LISTS = {
  de: FUNCTION_WORDS_DE,
  fr: FUNCTION_WORDS_FR,
  nl: FUNCTION_WORDS_NL,
  es: FUNCTION_WORDS_ES,
  ko: FUNCTION_WORDS_KO,
};

// ── POS Color Map (5 primary color families) ──
// 1. GENDER: blue(m/c), coral(f), purple(n), gold(het), indigo(pl)
// 2. VERBS: teal
// 3. DESCRIPTORS: amber (adjectives + adverbs)
// 4. STRUCTURE: indigo (prepositions, conjunctions, particles)
// 5. OTHER: light pink (pronouns, numbers, interjections)
// Nouns get gender color via GENDER_COLORS (not from this map)
export const POS_COLORS = {
  // 1. GENDER — per-gender article colors
  "article":          { light: "#4A8FE7", dark: "#7AB8FF" },
  "article_m":        { light: "#4A8FE7", dark: "#7AB8FF" },
  "article_f":        { light: "#E8475E", dark: "#F58888" },
  "article_n":        { light: "#7B5EE8", dark: "#A890FF" },
  "article_c":        { light: "#4A8FE7", dark: "#7AB8FF" },
  "article_het":      { light: "#E8960A", dark: "#F5C040" },
  "article_indef":    { light: "#94A3B8", dark: "#CBD5E1" },
  "article_pl":       { light: "#6366F1", dark: "#818CF8" },
  // NOUN — text = gender color via GENDER_COLORS, understripe = gender color
  "noun":             { light: null, dark: null, understripe: true },
  // 2. VERBS — teal
  "verb":             { light: "#2ECDA7", dark: "#50E0C0" },
  // 3. DESCRIPTORS — amber
  "adjective":        { light: "#F59E0B", dark: "#FCD34D" },
  "adverb":           { light: "#F59E0B", dark: "#FCD34D" },
  // 4. STRUCTURE — indigo
  "preposition":      { light: "#6366F1", dark: "#818CF8" },
  "conjunction":      { light: "#6366F1", dark: "#818CF8" },
  // 5. OTHER — light pink
  "pronoun_subj":     { light: "#F472B6", dark: "#FDA4AF" },
  "pronoun_obj":      { light: "#F472B6", dark: "#FDA4AF" },
  "pronoun_poss":     { light: "#F472B6", dark: "#FDA4AF" },
  "pronoun":          { light: "#F472B6", dark: "#FDA4AF" },
  "number":           { light: "#F472B6", dark: "#FDA4AF" },
  "interjection":     { light: "#F472B6", dark: "#FDA4AF" },
  "counter":          { light: "#F472B6", dark: "#FDA4AF" },
  "negation":         { light: "#F472B6", dark: "#FDA4AF" },
  "question":         { light: "#F472B6", dark: "#FDA4AF" },
  "demonstrative":    { light: "#F472B6", dark: "#FDA4AF" },
  // Korean particles — structure (indigo)
  "particle_topic":   { light: "#6366F1", dark: "#818CF8" },
  "particle_subj":    { light: "#6366F1", dark: "#818CF8" },
  "particle_obj":     { light: "#6366F1", dark: "#818CF8" },
  "particle_loc":     { light: "#6366F1", dark: "#818CF8" },
  "particle_dir":     { light: "#6366F1", dark: "#818CF8" },
  "particle_conn":    { light: "#6366F1", dark: "#818CF8" },
  "particle_comp":    { light: "#6366F1", dark: "#818CF8" },
  "particle_poss":    { light: "#6366F1", dark: "#818CF8" },
  "particle_other":   { light: "#6366F1", dark: "#818CF8" },
  // Special
  "new_word":         { light: "#E8960A", dark: "#F5C040", bubble: true },
  "unknown":          { light: "#94A3B8", dark: "#94A3B8" },
};

// Gender understripe colors (for nouns)
export const GENDER_COLORS = {
  m:  { light: "#4A8FE7", dark: "#7AB8FF" },  // masculine = blue
  f:  { light: "#E8475E", dark: "#F58888" },  // feminine = coral
  n:  { light: "#7B5EE8", dark: "#A890FF" },  // neuter = purple
  c:  { light: "#4A8FE7", dark: "#7AB8FF" },  // common = blue (Dutch de)
  pl: { light: "#6366F1", dark: "#818CF8" },  // plural = indigo
};

// ── Helpers ──

// Strip article prefix from a word and return { article, bare }
function stripArticle(word, lang) {
  if (!word || typeof word !== "string") return { article: null, bare: word };
  const sys = ARTICLE_SYSTEMS[lang];
  if (!sys) return { article: null, bare: word };
  const detected = sys.detect(word);
  if (detected === "none") return { article: null, bare: word };
  const lower = word.toLowerCase();
  for (const art of sys.articles) {
    if (art.endsWith("'") && lower.startsWith(art)) {
      return { article: art, bare: word.slice(art.length) };
    }
    if (lower.startsWith(art + " ")) {
      return { article: art, bare: word.slice(art.length + 1) };
    }
  }
  return { article: detected, bare: word };
}

// Map teach card kind to POS category
function kindToPos(kind, article, lang) {
  if (!kind) return "unknown";
  const k = kind.toLowerCase();
  if (k === "verb") return "verb";
  if (k === "adjective" || k === "adj") return "adjective";
  if (k === "adverb" || k === "adv") return "adverb";
  if (k === "preposition" || k === "prep") return "preposition";
  if (k === "conjunction" || k === "conj") return "conjunction";
  if (k === "pronoun") return "pronoun";
  if (k === "number" || k === "num") return "number";
  if (k === "interjection" || k === "interj") return "interjection";
  if (k === "particle") return "particle_other";
  if (k === "noun" || k === "word") return "noun";
  if (k === "phrase") return "noun"; // phrases default to noun-like treatment
  return "noun"; // default
}

// Detect gender from article string for a given language
function detectGender(articleStr, lang) {
  if (!articleStr) return null;
  const a = articleStr.toLowerCase().trim();
  if (lang === "de") {
    if (a === "der" || a === "den" || a === "dem" || a === "des") return "m";
    if (a === "die") return "f"; // Could be plural too, but default to feminine
    if (a === "das") return "n";
    if (a === "ein" || a === "einen" || a === "einem" || a === "eines") return null; // ambiguous without context
    if (a === "eine" || a === "einer") return "f";
  }
  if (lang === "nl") {
    if (a === "de") return "c";
    if (a === "het") return "n";
  }
  if (lang === "fr") {
    if (a === "le" || a === "l'" || a === "un" || a === "du" || a === "au") return "m";
    if (a === "la" || a === "une") return "f";
    if (a === "les" || a === "des" || a === "aux") return "pl";
  }
  if (lang === "es") {
    if (a === "el" || a === "un" || a === "al" || a === "del") return "m";
    if (a === "la" || a === "una") return "f";
    if (a === "los" || a === "unos") return "m";
    if (a === "las" || a === "unas") return "f";
  }
  return null;
}

// Classify word kind from teach card data (improved from Phase 1)
function classifyKind(step, lang) {
  if (step.kind) return step.kind;
  const en = (step.en || "").toLowerCase();
  const nl = (step.nl || "");
  if (en.startsWith("to ")) return "verb";
  const sys = ARTICLE_SYSTEMS[lang];
  if (sys) {
    const detected = sys.detect(nl);
    if (detected !== "none") return "noun";
  }
  if (nl.includes(" ") && en.includes(" ") && !en.startsWith("the ") && !en.startsWith("a ")) return "phrase";
  return "noun";
}

// Resolve article POS subcategory (for gendered article coloring)
function resolveArticlePos(entry) {
  if (entry.pos !== "article") return entry.pos;
  const g = entry.gender;
  const tags = entry.tags || [];
  if (tags.includes("indef") || tags.includes("neg") || tags.includes("partitive")) return "article_indef";
  if (tags.includes("pl") || g === "pl") return "article_pl";
  if (g === "m") return "article_m";
  if (g === "f") return "article_f";
  if (g === "n") return "article_n";
  if (g === "c") return "article_c";
  // Dutch het special case
  if (entry.word && entry.word.toLowerCase() === "het") return "article_het";
  return "article";
}

// ── WORD_DB Builder ──
// Merges 3 sources in priority order: function words > teach cards > example extraction

function buildWordDB() {
  const db = {}; // db[lang][word] = entry
  const langs = [...new Set(ALL_UNITS.map(u => u.lang).filter(Boolean))];

  // Also include languages from function word lists
  for (const lang of Object.keys(FUNCTION_WORD_LISTS)) {
    if (!langs.includes(lang)) langs.push(lang);
  }

  for (const lang of langs) {
    db[lang] = {};

    // ── Source 1: Function word lists (highest priority) ──
    const fwList = FUNCTION_WORD_LISTS[lang] || [];
    for (const fw of fwList) {
      const key = fw.word.toLowerCase();
      // For duplicate keys (e.g., German "der" appears as masc/fem/gen),
      // keep the first one (most common usage)
      if (!db[lang][key]) {
        db[lang][key] = {
          word: fw.word,
          lemma: fw.lemma || fw.word,
          en: fw.en || "",
          lemmaEn: fw.en || "",
          pos: fw.pos || "unknown",
          gender: fw.gender || null,
          article: fw.article || null,
          level: fw.level || "A1",
          taught: false,  // function words don't have dedicated teach cards (unless also in source 2)
          lessonId: null,
          tags: fw.tags || [],
          phonetic: null,
          note: null,
          example: null,
          exampleEn: null,
          cognate: null,
          // Backward compat
          display: fw.word,
          kind: fw.pos || "unknown",
          also: null,
          morph: null,
          particle: null,
          uses: null,
        };
      }
    }

    // ── Source 2: Teach card extraction ──
    const unitsByLang = ALL_UNITS.filter(u => u.lang === lang);
    for (const unit of unitsByLang) {
      const level = unit.level || "A1";
      for (const lesson of (unit.lessons || [])) {
        for (const step of (lesson.steps || [])) {
          if (step.type !== "teach") continue;
          if (!step.nl || !step.en) continue;

          const { article, bare } = stripArticle(step.nl, lang);
          const key = bare.toLowerCase();
          const kind = classifyKind(step, lang);
          const pos = kindToPos(kind, article, lang);
          const gender = detectGender(article, lang);

          const existing = db[lang][key];

          // If function word list already has this word, enrich but don't overwrite POS
          if (existing && existing.tags && existing.tags.length > 0) {
            // Upgrade: mark as taught, add teach card data
            existing.taught = true;
            existing.lessonId = existing.lessonId || lesson.id;
            existing.level = existing.level || level;
            if (!existing.en && step.en) existing.en = step.en;
            if (!existing.phonetic && step.phonetic) existing.phonetic = step.phonetic;
            if (!existing.note && step.note) existing.note = step.note;
            if (!existing.example && step.example) existing.example = step.example;
            if (!existing.exampleEn && step.exampleEn) existing.exampleEn = step.exampleEn;
            if (!existing.cognate && step.cognate) existing.cognate = step.cognate;
            if (!existing.also && step.also) existing.also = step.also;
            existing.display = step.nl;
            continue;
          }

          // If teach card already exists with richer data, skip
          if (existing && existing.taught && existing.lessonId && !step.example) continue;

          db[lang][key] = {
            word: bare,
            lemma: bare,
            en: step.en,
            lemmaEn: step.en,
            pos: pos,
            gender: gender,
            article: article,
            level: level,
            taught: true,
            lessonId: lesson.id,
            tags: [],
            phonetic: step.phonetic || null,
            note: step.note || null,
            example: step.example || null,
            exampleEn: step.exampleEn || null,
            cognate: step.cognate || null,
            // Backward compat fields
            display: step.nl,
            kind: kind,
            also: step.also || null,
            morph: null,
            particle: null,
            uses: null,
          };
        }
      }
    }

    // ── Source 3: Example/quiz word extraction ──
    // Extract words from example, q, s, opts fields that aren't already in DB
    for (const unit of unitsByLang) {
      const level = unit.level || "A1";
      for (const lesson of (unit.lessons || [])) {
        for (const step of (lesson.steps || [])) {
          const texts = [];
          if (step.example) texts.push(step.example);
          if (step.q) texts.push(step.q);
          if (step.s) texts.push(step.s);
          if (step.opts) {
            for (const opt of step.opts) {
              if (typeof opt === "string") texts.push(opt);
            }
          }
          if (step.pairs) {
            for (const p of step.pairs) {
              if (p.nl) texts.push(p.nl);
            }
          }

          for (const text of texts) {
            // Simple whitespace tokenization, strip punctuation
            const words = text.replace(/[A-Z]:\s/g, " ") // Strip A:/B: dialogue markers
              .split(/[\s,;:!?.'"()[\]{}«»…\-—–/\\]+/)
              .filter(w => w.length > 0);

            for (const w of words) {
              const key = w.toLowerCase();
              // Skip if already in DB or is a number or pure punctuation
              if (db[lang][key]) continue;
              if (/^\d+$/.test(key)) continue;
              if (key.length < 1) continue;
              // Skip English words in example text (heuristic: skip if all ASCII for non-Latin languages)
              if (lang === "ko" && /^[a-z]+$/i.test(key)) continue;

              db[lang][key] = {
                word: w,
                lemma: w,
                en: "",
                lemmaEn: "",
                pos: "unknown",
                gender: null,
                article: null,
                level: level,
                taught: false,
                lessonId: null,
                tags: [],
                phonetic: null,
                note: null,
                example: null,
                exampleEn: null,
                cognate: null,
                display: w,
                kind: "unknown",
                also: null,
                morph: null,
                particle: null,
                uses: null,
              };
            }
          }
        }
      }
    }

    // Post-process: resolve article subcategories for coloring
    for (const [key, entry] of Object.entries(db[lang])) {
      if (entry.pos === "article") {
        entry.pos = resolveArticlePos(entry);
      }
    }
  }

  return db;
}

// ── WORD_INTRO_MAP Builder ──
// Tracks the FIRST occurrence of every word per language across all units/lessons/steps.
// WORD_INTRO_MAP[lang][word] = { unitN, lessonId, stepIndex }

function buildWordIntroMap() {
  const map = {}; // map[lang][word] = { unitN, lessonId, stepIndex }
  const langs = [...new Set(ALL_UNITS.map(u => u.lang).filter(Boolean))];

  for (const lang of langs) {
    map[lang] = {};
    const unitsByLang = ALL_UNITS.filter(u => u.lang === lang);

    // Walk units in order
    for (const unit of unitsByLang) {
      for (const lesson of (unit.lessons || [])) {
        for (let si = 0; si < (lesson.steps || []).length; si++) {
          const step = lesson.steps[si];
          const wordsInStep = [];

          // Teach cards: extract the target word
          if (step.type === "teach" && step.nl) {
            const { bare } = stripArticle(step.nl, lang);
            wordsInStep.push(bare.toLowerCase());
            // Also extract words from teach card examples
            if (step.example) {
              extractWords(step.example, lang).forEach(w => wordsInStep.push(w));
            }
          }

          // Quiz steps: extract all target-language words
          if (step.q) extractWords(step.q, lang).forEach(w => wordsInStep.push(w));
          if (step.s) extractWords(step.s, lang).forEach(w => wordsInStep.push(w));
          if (step.opts) {
            for (const opt of step.opts) {
              if (typeof opt === "string") extractWords(opt, lang).forEach(w => wordsInStep.push(w));
            }
          }
          if (step.pairs) {
            for (const p of step.pairs) {
              if (p.nl) extractWords(p.nl, lang).forEach(w => wordsInStep.push(w));
            }
          }

          // Tip text
          if (step.type === "tip" && step.text) {
            extractWords(step.text, lang).forEach(w => wordsInStep.push(w));
          }

          // Record first occurrence only
          for (const w of wordsInStep) {
            if (!map[lang][w]) {
              map[lang][w] = { unitN: unit.n, lessonId: lesson.id, stepIndex: si };
            }
          }
        }
      }
    }
  }

  return map;
}

// Extract target-language words from text (simple tokenizer)
function extractWords(text, lang) {
  if (!text || typeof text !== "string") return [];
  return text
    .replace(/[A-Z]:\s/g, " ") // Strip A:/B: dialogue markers
    .split(/[\s,;:!?.'"()[\]{}«»…\-—–/\\]+/)
    .filter(w => w.length > 0)
    .map(w => w.toLowerCase())
    .filter(w => {
      if (/^\d+$/.test(w)) return false;
      // For Korean, skip pure ASCII
      if (lang === "ko" && /^[a-z]+$/i.test(w)) return false;
      return true;
    });
}

// ── Build at module load ──
export const WORD_DB = buildWordDB();
export const WORD_INTRO_MAP = buildWordIntroMap();

// Backward compat: LANG_DICT is an alias for WORD_DB
export const LANG_DICT = WORD_DB;

// ── Lesson ordering helper (needed for isNewWord) ──
// lessonOrder[lang] = [lessonId1, lessonId2, ...] in curriculum order
const _lessonOrder = {};
function getLessonOrder(lang) {
  if (_lessonOrder[lang]) return _lessonOrder[lang];
  const order = [];
  const unitsByLang = ALL_UNITS.filter(u => u.lang === lang);
  for (const unit of unitsByLang) {
    for (const lesson of (unit.lessons || [])) {
      order.push(lesson.id);
    }
  }
  _lessonOrder[lang] = order;
  return order;
}

// ── Public API ──

// Check if a word is "new" at a given lesson (first introduced here or not yet seen)
export function isNewWord(word, lang, currentLessonId) {
  if (!word || !lang) return false;
  const key = word.toLowerCase();
  const intro = (WORD_INTRO_MAP[lang] || {})[key];

  // Not in ANY lesson content → definitely unknown/new
  if (!intro) return true;

  // Word's first-introduction lesson IS the current lesson → new here
  if (intro.lessonId === currentLessonId) return true;

  // Check lesson ordering: if intro lesson comes AFTER current, word hasn't been seen yet
  const order = getLessonOrder(lang);
  const introIdx = order.indexOf(intro.lessonId);
  const currentIdx = order.indexOf(currentLessonId);

  // If we can't determine order, be conservative
  if (introIdx === -1 || currentIdx === -1) return false;

  return introIdx >= currentIdx;
}

// Lookup a word in WORD_DB (tries exact, then stripped article, then lowercase variations)
export function lookupWord(word, lang) {
  const dict = WORD_DB[lang];
  if (!dict) return null;
  const lower = (word || "").toLowerCase();
  // Direct lookup
  if (dict[lower]) return dict[lower];
  // Try stripping article
  const { bare } = stripArticle(word, lang);
  const bareKey = bare.toLowerCase();
  if (dict[bareKey]) return dict[bareKey];
  return null;
}

// Get POS color for a word entry
export function getPosColor(entry, isDark) {
  if (!entry || !entry.pos) return null;
  const colors = POS_COLORS[entry.pos] || POS_COLORS["unknown"];
  return isDark ? colors.dark : colors.light;
}

// Get gender understripe color for a noun
export function getGenderColor(entry, isDark) {
  if (!entry || !entry.gender) return null;
  const colors = GENDER_COLORS[entry.gender];
  if (!colors) return null;
  return isDark ? colors.dark : colors.light;
}

// Merge Korean hand-crafted overrides (backward compat)
export function mergeKoreanDict(koreanDict) {
  if (!WORD_DB.ko) WORD_DB.ko = {};
  for (const [key, entry] of Object.entries(koreanDict)) {
    const existing = WORD_DB.ko[key] || {};
    WORD_DB.ko[key] = {
      ...existing,
      word: entry.base || existing.word || key,
      lemma: entry.base || existing.lemma || key,
      display: entry.base || existing.display || key,
      en: existing.en || "",
      lemmaEn: existing.lemmaEn || existing.en || "",
      pos: existing.pos || "noun",
      gender: existing.gender || null,
      article: null,
      level: entry.level || existing.level || "A1",
      taught: existing.taught || false,
      lessonId: existing.lessonId || null,
      tags: existing.tags || [],
      phonetic: existing.phonetic || null,
      cognate: existing.cognate || null,
      note: entry.note || existing.note || null,
      example: existing.example || null,
      exampleEn: existing.exampleEn || null,
      // Backward compat
      kind: existing.kind || "noun",
      also: existing.also || null,
      // Korean-specific
      morph: entry.morph || null,
      particle: entry.particle || null,
      uses: entry.uses || null,
    };
  }
}

// Get all taught words for a language up to a given lesson (backward compat)
export function getTaughtWords(lang, upToLessonId) {
  const dict = WORD_DB[lang];
  if (!dict) return new Set();
  const taught = new Set();
  const unitsByLang = ALL_UNITS.filter(u => u.lang === lang);
  let found = false;
  for (const unit of unitsByLang) {
    for (const lesson of (unit.lessons || [])) {
      for (const step of (lesson.steps || [])) {
        if (step.type === "teach" && step.nl) {
          const { bare } = stripArticle(step.nl, lang);
          taught.add(bare.toLowerCase());
        }
      }
      if (lesson.id === upToLessonId) { found = true; break; }
    }
    if (found) break;
  }
  return taught;
}

// ── GRAMMAR_PACKS: Per-language color pack (tab) system ──
// Only ONE pack active at a time per language. Each pack defines a colorMap
// that maps word properties to colors. The settings panel shows tabs.

// Generate a 5-stop candy gradient from a base hex color (like .btn-purple pattern)
export function pillGradient(hex) {
  const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
  const lighten = (r,g,b,pct) => [Math.min(255,r+pct),Math.min(255,g+pct),Math.min(255,b+pct)];
  const darken = (r,g,b,pct) => [Math.max(0,r-pct),Math.max(0,g-pct),Math.max(0,b-pct)];
  const rgb = (c) => `rgb(${c[0]},${c[1]},${c[2]})`;
  const l2=lighten(r,g,b,50), l1=lighten(r,g,b,25), d1=darken(r,g,b,30), d2=darken(r,g,b,55);
  return `linear-gradient(180deg, ${rgb(l2)} 0%, ${rgb(l1)} 20%, ${hex} 50%, ${rgb(d1)} 80%, ${rgb(d2)} 100%)`;
}

// Shared color constants for pack definitions
const C_BLUE = { light: "#4A8FE7", dark: "#7AB8FF" };
const C_CORAL = { light: "#E8475E", dark: "#F58888" };
const C_PURPLE = { light: "#7B5EE8", dark: "#A890FF" };
const C_GRAY = { light: "#94A3B8", dark: "#CBD5E1" };
const C_GOLD = { light: "#E8960A", dark: "#F5C040" };
const C_INDIGO = { light: "#6366F1", dark: "#818CF8" };
const C_TEAL = { light: "#2ECDA7", dark: "#50E0C0" };
const C_AMBER = { light: "#F59E0B", dark: "#FCD34D" };
const C_FUCHSIA = { light: "#E879F9", dark: "#F0ABFC" };
const C_GREEN = { light: "#22C55E", dark: "#4ADE80" };
const C_ORANGE = { light: "#F97316", dark: "#FB923C" };
const C_PINK = { light: "#EC4899", dark: "#F472B6" };

// High-contrast Word Type colors — NO purple/indigo (conflicts with theme)
const C_ACID_GREEN = { light: "#00C853", dark: "#69F0AE" };
const C_HOT_ORANGE = { light: "#FF6D00", dark: "#FFAB40" };
const C_HOT_PINK = { light: "#FF1744", dark: "#FF616F" };
const C_ELEC_BLUE = { light: "#2979FF", dark: "#82B1FF" };
const C_VIVID_YELLOW = { light: "#C6A700", dark: "#FFD600" };

// Word Type pack (shared across all languages)
// 5 color families covering EVERY POS type — maximally distinct, zero purple:
//   Acid green:    verbs (action, energy)
//   Hot orange:    adjectives (warm, descriptive)
//   Hot pink:      adverbs + pronouns (modifiers/stand-ins)
//   Electric blue: nouns (solid, foundational)
//   Vivid yellow:  structure words (scaffolding)
const WORDTYPE_PACK = {
  id: "wordtype", label: "Word Type", icon: "Aa",
  desc: "Every word colored by part of speech",
  colorMap: {
    // Verbs — acid green
    verb: { ...C_ACID_GREEN },
    // Adjectives — hot orange
    adjective: { ...C_HOT_ORANGE },
    // Adverbs + pronouns — hot pink
    adverb: { ...C_HOT_PINK },
    pronoun: { ...C_HOT_PINK }, pronoun_subj: { ...C_HOT_PINK },
    pronoun_obj: { ...C_HOT_PINK }, pronoun_poss: { ...C_HOT_PINK },
    demonstrative: { ...C_HOT_PINK },
    // Nouns — electric blue (understripe)
    noun: { ...C_ELEC_BLUE, understripe: true },
    // Structure words — vivid yellow
    preposition: { ...C_VIVID_YELLOW }, conjunction: { ...C_VIVID_YELLOW },
    article: { ...C_VIVID_YELLOW },
    article_m: { ...C_VIVID_YELLOW }, article_f: { ...C_VIVID_YELLOW }, article_n: { ...C_VIVID_YELLOW },
    article_c: { ...C_VIVID_YELLOW }, article_het: { ...C_VIVID_YELLOW },
    article_indef: { ...C_VIVID_YELLOW }, article_pl: { ...C_VIVID_YELLOW },
    interjection: { ...C_VIVID_YELLOW },
    number: { ...C_VIVID_YELLOW }, counter: { ...C_VIVID_YELLOW },
    negation: { ...C_VIVID_YELLOW }, question: { ...C_VIVID_YELLOW },
    // Korean particles (in Word Type mode: all yellow as structure)
    particle_topic: { ...C_VIVID_YELLOW }, particle_subj: { ...C_VIVID_YELLOW },
    particle_obj: { ...C_VIVID_YELLOW }, particle_loc: { ...C_VIVID_YELLOW },
    particle_dir: { ...C_VIVID_YELLOW }, particle_conn: { ...C_VIVID_YELLOW },
    particle_comp: { ...C_VIVID_YELLOW }, particle_poss: { ...C_VIVID_YELLOW },
    particle_other: { ...C_VIVID_YELLOW },
  },
  legend: [
    { label: "Verbs", color: "#00C853", key: "verb", desc: "Action and state words: run, eat, be, have, go" },
    { label: "Adjectives", color: "#FF6D00", key: "adjective", desc: "Words that describe nouns: big, red, fast, beautiful" },
    { label: "Modifiers", color: "#FF1744", key: "adverb", desc: "Adverbs, pronouns, and demonstratives: quickly, he, this" },
    { label: "Nouns", color: "#2979FF", key: "noun", desc: "People, places, things, and ideas: dog, house, love" },
    { label: "Structure", color: "#C6A700", key: "structure", desc: "Prepositions, conjunctions, articles, particles: in, and, the" },
  ],
};

export const GRAMMAR_PACKS = {
  de: {
    label: "German",
    defaultPack: "gender",
    packs: [
      {
        id: "gender", label: "Gender", icon: "der",
        desc: "Articles, nouns, and adjectives by grammatical gender",
        colorMap: {
          article_m: { ...C_BLUE }, article_f: { ...C_CORAL }, article_n: { ...C_PURPLE },
          article_indef: { ...C_GRAY },
          noun_m: { ...C_BLUE, understripe: true }, noun_f: { ...C_CORAL, understripe: true },
          noun_n: { ...C_PURPLE, understripe: true },
          adjective_m: { ...C_BLUE }, adjective_f: { ...C_CORAL }, adjective_n: { ...C_PURPLE },
        },
        legend: [
          { label: "Masculine (der)", color: "#4A8FE7", key: "m", desc: "der Hund, der Mann, der Tisch. Most agent nouns." },
          { label: "Feminine (die)", color: "#E8475E", key: "f", desc: "die Frau, die Katze, die Lampe. Most -ung, -keit, -heit." },
          { label: "Neuter (das)", color: "#7B5EE8", key: "n", desc: "das Kind, das Haus, das Buch. Most -chen, -lein, -ment." },
          { label: "Indefinite", color: "#94A3B8", key: "indef", desc: "ein/eine. Gender not yet determined from context." },
        ],
      },
      { ...WORDTYPE_PACK },
      {
        id: "cases", label: "Cases", icon: "Nom",
        desc: "Nominativ, Akkusativ, Dativ, Genitiv (coming soon)",
        colorMap: {},
        legend: [
          { label: "Nominativ", color: "#22C55E", key: "nom", desc: "Subject case: Wer? Was? Der Hund schlaeft." },
          { label: "Akkusativ", color: "#F97316", key: "akk", desc: "Direct object: Wen? Was? Ich sehe den Hund." },
          { label: "Dativ", color: "#A855F7", key: "dat", desc: "Indirect object: Wem? Ich gebe dem Hund Futter." },
          { label: "Genitiv", color: "#EC4899", key: "gen", desc: "Possession: Wessen? Das Haus des Mannes." },
        ],
        placeholder: true,
      },
    ],
  },
  ko: {
    label: "Korean",
    defaultPack: "particles",
    packs: [
      {
        id: "particles", label: "Particles", icon: "\uc740",
        desc: "Topic, subject, object, location, and connector particles",
        colorMap: {
          particle_topic: { ...C_BLUE }, particle_subj: { ...C_CORAL },
          particle_obj: { ...C_AMBER }, particle_loc: { ...C_TEAL },
          particle_dir: { ...C_TEAL }, particle_conn: { ...C_PURPLE },
          particle_comp: { ...C_PURPLE }, particle_poss: { ...C_PURPLE },
          particle_other: { ...C_GRAY },
        },
        legend: [
          { label: "\uc740/\ub294 Topic", color: "#4A8FE7", key: "topic", desc: "Marks the topic: what you're talking about." },
          { label: "\uc774/\uac00 Subject", color: "#E8475E", key: "subj", desc: "Marks who does the action." },
          { label: "\uc744/\ub97c Object", color: "#F59E0B", key: "obj", desc: "Marks what receives the action." },
          { label: "\uc5d0/\uc5d0\uc11c Location", color: "#2ECDA7", key: "loc", desc: "Marks where or when something happens." },
          { label: "\uacfc/\uc640 Connector", color: "#7B5EE8", key: "conn", desc: "Connects nouns together: and, with." },
        ],
      },
      { ...WORDTYPE_PACK },
      {
        id: "honorifics", label: "Honorifics", icon: "\uc694",
        desc: "\ud574\uc694\uccb4, \ud569\uc1fc\uccb4, \ubc18\ub9d0 speech levels (coming soon)",
        colorMap: {},
        legend: [
          { label: "\ud574\uc694\uccb4 Polite", color: "#2ECDA7", key: "haeyo", desc: "Standard polite speech. Used with most people." },
          { label: "\ud569\uc1fc\uccb4 Formal", color: "#4A8FE7", key: "hapsyo", desc: "Highest formal level. News, presentations, service." },
          { label: "\ubc18\ub9d0 Casual", color: "#F59E0B", key: "banmal", desc: "Informal speech. Close friends, younger people." },
        ],
        placeholder: true,
      },
    ],
  },
  nl: {
    label: "Dutch",
    defaultPack: "gender",
    packs: [
      {
        id: "gender", label: "Gender", icon: "de",
        desc: "Articles and nouns by de/het gender",
        colorMap: {
          article_c: { ...C_BLUE }, article_m: { ...C_BLUE },
          article_het: { ...C_GOLD }, article_n: { ...C_GOLD },
          article_indef: { ...C_GRAY },
          noun_c: { ...C_BLUE, understripe: true }, noun_m: { ...C_BLUE, understripe: true },
          noun_n: { ...C_GOLD, understripe: true },
        },
        legend: [
          { label: "de (common)", color: "#4A8FE7", key: "c", desc: "de hond, de tafel. Most Dutch nouns are de-words." },
          { label: "het (neuter)", color: "#E8960A", key: "n", desc: "het huis, het kind. About 25% of Dutch nouns." },
          { label: "een (indefinite)", color: "#94A3B8", key: "indef", desc: "een boek. No gender distinction for indefinite." },
        ],
      },
      { ...WORDTYPE_PACK },
    ],
  },
  fr: {
    label: "French",
    defaultPack: "gender",
    packs: [
      {
        id: "gender", label: "Gender", icon: "le",
        desc: "Articles, nouns, and adjectives by grammatical gender",
        colorMap: {
          article_m: { ...C_BLUE }, article_f: { ...C_CORAL },
          article_pl: { ...C_INDIGO }, article_indef: { ...C_GRAY },
          noun_m: { ...C_BLUE, understripe: true }, noun_f: { ...C_CORAL, understripe: true },
          noun_pl: { ...C_INDIGO, understripe: true },
          adjective_m: { ...C_BLUE }, adjective_f: { ...C_CORAL },
        },
        legend: [
          { label: "le (masculine)", color: "#4A8FE7", key: "m", desc: "le livre, le chat. Masculine nouns and articles." },
          { label: "la (feminine)", color: "#E8475E", key: "f", desc: "la maison, la table. Feminine nouns and articles." },
          { label: "les (plural)", color: "#6366F1", key: "pl", desc: "les enfants, les livres. All plural nouns." },
          { label: "Indefinite", color: "#94A3B8", key: "indef", desc: "un/une. Gender not yet determined from context." },
        ],
      },
      { ...WORDTYPE_PACK },
    ],
  },
  es: {
    label: "Spanish",
    defaultPack: "gender",
    packs: [
      {
        id: "gender", label: "Gender", icon: "el",
        desc: "Articles, nouns, and adjectives by grammatical gender",
        colorMap: {
          article_m: { ...C_BLUE }, article_f: { ...C_CORAL },
          article_pl: { ...C_INDIGO }, article_indef: { ...C_GRAY },
          noun_m: { ...C_BLUE, understripe: true }, noun_f: { ...C_CORAL, understripe: true },
          noun_pl: { ...C_INDIGO, understripe: true },
          adjective_m: { ...C_BLUE }, adjective_f: { ...C_CORAL },
        },
        legend: [
          { label: "el (masculine)", color: "#4A8FE7", key: "m", desc: "el libro, el gato. Masculine nouns and articles." },
          { label: "la (feminine)", color: "#E8475E", key: "f", desc: "la casa, la mesa. Feminine nouns and articles." },
          { label: "los/las (plural)", color: "#6366F1", key: "pl", desc: "los libros, las casas. All plural nouns." },
          { label: "Indefinite", color: "#94A3B8", key: "indef", desc: "un/una. Gender not yet determined from context." },
        ],
      },
      { ...WORDTYPE_PACK },
    ],
  },
};

// Resolve which color a word should get from the active pack
export function resolvePackColor(entry, pack, isDark) {
  if (!entry || !pack || !pack.colorMap) return null;
  const cm = pack.colorMap;
  const dk = isDark ? "dark" : "light";

  // Articles: resolve gendered key
  if (entry.pos === "article" || (entry.pos && entry.pos.startsWith("article_"))) {
    const artPos = resolveArticlePos(entry);
    const c = cm[artPos] || cm["article"];
    if (c) return { color: c[dk], understripe: !!c.understripe };
    return null;
  }

  // Nouns: try noun_{gender}, fallback to noun
  if (entry.pos === "noun") {
    if (entry.gender) {
      const gKey = "noun_" + entry.gender;
      if (cm[gKey]) return { color: cm[gKey][dk], understripe: !!cm[gKey].understripe };
    }
    if (cm["noun"]) return { color: cm["noun"][dk], understripe: !!cm["noun"].understripe };
    return null;
  }

  // Adjectives: try adjective_{gender}, fallback to adjective
  if (entry.pos === "adjective") {
    if (entry.gender) {
      const aKey = "adjective_" + entry.gender;
      if (cm[aKey]) return { color: cm[aKey][dk], understripe: !!cm[aKey].understripe };
    }
    if (cm["adjective"]) return { color: cm["adjective"][dk], understripe: !!cm["adjective"].understripe };
    return null;
  }

  // Direct POS match
  if (cm[entry.pos]) {
    const c = cm[entry.pos];
    return { color: c[dk], understripe: !!c.understripe };
  }

  return null;
}

// ── Stats (for dev/debug) ──
export function getWordDBStats() {
  const stats = {};
  for (const [lang, dict] of Object.entries(WORD_DB)) {
    const entries = Object.values(dict);
    stats[lang] = {
      total: entries.length,
      taught: entries.filter(e => e.taught).length,
      functionWords: entries.filter(e => e.tags && e.tags.length > 0).length,
      byPos: {},
    };
    for (const e of entries) {
      const pos = e.pos || "unknown";
      stats[lang].byPos[pos] = (stats[lang].byPos[pos] || 0) + 1;
    }
  }
  return stats;
}
