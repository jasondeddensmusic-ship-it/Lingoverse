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
