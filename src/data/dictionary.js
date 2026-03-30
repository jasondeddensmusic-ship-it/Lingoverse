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
import germanV2Units from './units-german-v2.js';
import frenchUnits from './units-french.js';
import spanishUnits from './units-spanish.js';
import otherUnits from './units-other.js';

// Function word lists (Source #1, highest priority for POS accuracy)
import { FUNCTION_WORDS_DE } from './wordlists/function-words-de.js';
import { FUNCTION_WORDS_FR } from './wordlists/function-words-fr.js';
import { FUNCTION_WORDS_NL } from './wordlists/function-words-nl.js';
import { FUNCTION_WORDS_ES } from './wordlists/function-words-es.js';
import { FUNCTION_WORDS_KO } from './wordlists/function-words-ko.js';
import { TOPIK_VOCAB_KO } from './wordlists/topik-vocab-ko.js';

// Korean conjugation engine (Phase 1 of deep dictionary)
import { buildFormIndex, conjugateVerb, detectIrregType, getIrregInfo, nounWithParticles } from './korean-conjugation.js';

// German conjugation engine (Phase 1 of deep dictionary)
import { conjugateVerb as conjugateGermanVerb, detectVerbType as detectGermanVerbType, getVerbInfo as getGermanVerbInfo, nounWithCases, buildFormIndex as buildGermanFormIndex, STRONG_VERBS as DE_STRONG_VERBS, MIXED_VERBS as DE_MIXED_VERBS, MODAL_VERBS as DE_MODAL_VERBS, AUXILIARY_VERBS as DE_AUXILIARY_VERBS } from './german-conjugation.js';

const ALL_UNITS = [...dutchUnits, ...koreanUnits, ...germanUnits, ...germanV2Units, ...frenchUnits, ...spanishUnits, ...otherUnits].filter(u=>u&&u.lang);

const FUNCTION_WORD_LISTS = {
  de: FUNCTION_WORDS_DE,
  fr: FUNCTION_WORDS_FR,
  nl: FUNCTION_WORDS_NL,
  es: FUNCTION_WORDS_ES,
  ko: FUNCTION_WORDS_KO,
};

// ── POS Color Map (Universal Word Tag System) ──
// Every POS tag gets a maximally distinct color. No two POS types share a color.
// Nouns + articles use GENDER_COLORS (not POS color) when gender sub-tag is present.
// Aligned with GRAMMAR_PACKS Word Type colors (owner-approved 2026-03-20).
//
// POS Tag      │ Color          │ Hex     │ Rationale
// ─────────────┼────────────────┼─────────┼──────────────────────────
// verb / aux   │ Forest green   │ #2E7D32 │ Action, readable ink
// adj          │ Burnt orange   │ #E65100 │ Warm, descriptive
// adv          │ Dark teal      │ #00695C │ Distinct from green verbs & blue nouns
// noun         │ Navy blue      │ #1565C0 │ (or gender color when sub-tag present)
// art          │ Dark gold      │ #8D6E00 │ (or gender color when sub-tag present)
// prep         │ Blue-grey slate│ #37474F │ Neutral, distinct from purple pronouns
// conj         │ Dark gold      │ #8D6E00 │ Connective scaffolding
// pron         │ Deep purple    │ #7B1FA2 │ Stand-in words
// num          │ Crimson        │ #B71C1C │ Distinct from orange adj
// intj         │ Hot pink       │ #C2185B │ Expressive, distinct from purple & red
// part         │ Dark brown     │ #5D4037 │ Functional particles
//
export const POS_COLORS = {
  // Verbs — forest green (includes auxiliaries: they ARE verbs)
  "verb":             { light: "#2E7D32", dark: "#66BB6A" },
  "auxiliary":        { light: "#2E7D32", dark: "#66BB6A" },
  // Adjectives — burnt orange (warm, distinct from gold conjunctions)
  "adjective":        { light: "#E65100", dark: "#FF8A65" },
  // Adverbs — dark teal/cyan (distinct from green verbs AND blue nouns)
  "adverb":           { light: "#00695C", dark: "#4DB6AC" },
  // Prepositions — blue-grey slate (neutral, distinct from purple pronouns)
  "preposition":      { light: "#37474F", dark: "#90A4AE" },
  // Conjunctions — dark gold/mustard (distinct from orange adjectives)
  "conjunction":      { light: "#8D6E00", dark: "#D4A017" },
  // Pronouns — deep purple (the only true purple POS)
  "pronoun":          { light: "#7B1FA2", dark: "#CE93D8" },
  "pronoun_subj":     { light: "#7B1FA2", dark: "#CE93D8" },
  "pronoun_obj":      { light: "#7B1FA2", dark: "#CE93D8" },
  "pronoun_poss":     { light: "#7B1FA2", dark: "#CE93D8" },
  "demonstrative":    { light: "#7B1FA2", dark: "#CE93D8" },
  // Numbers — crimson red (distinct from orange adj)
  "number":           { light: "#B71C1C", dark: "#EF5350" },
  "counter":          { light: "#B71C1C", dark: "#EF5350" },
  // Interjections — hot pink (distinct from purple pronouns AND red numbers)
  "interjection":     { light: "#C2185B", dark: "#F06292" },
  // Particles — dark brown
  "particle":         { light: "#5D4037", dark: "#A1887F" },
  "particle_topic":   { light: "#5D4037", dark: "#A1887F" },
  "particle_subj":    { light: "#5D4037", dark: "#A1887F" },
  "particle_obj":     { light: "#5D4037", dark: "#A1887F" },
  "particle_loc":     { light: "#5D4037", dark: "#A1887F" },
  "particle_dir":     { light: "#5D4037", dark: "#A1887F" },
  "particle_conn":    { light: "#5D4037", dark: "#A1887F" },
  "particle_comp":    { light: "#5D4037", dark: "#A1887F" },
  "particle_poss":    { light: "#5D4037", dark: "#A1887F" },
  "particle_other":   { light: "#5D4037", dark: "#A1887F" },
  // Nouns — use GENDER_COLORS when gender sub-tag present, otherwise navy blue
  "noun":             { light: "#1565C0", dark: "#64B5F6" },
  // Articles — use GENDER_COLORS (resolved by renderer), fallback to dark gold
  "article":          { light: "#8D6E00", dark: "#D4A017" },
  "article_m":        { light: "#0D47A1", dark: "#64B5F6" },
  "article_f":        { light: "#B71C1C", dark: "#EF5350" },
  "article_n":        { light: "#00796B", dark: "#80CBC4" },
  "article_c":        { light: "#0D47A1", dark: "#64B5F6" },
  "article_het":      { light: "#00796B", dark: "#80CBC4" },
  "article_indef":    { light: "#5D4037", dark: "#A1887F" },
  "article_pl":       { light: "#00695C", dark: "#4DB6AC" },
  // Negation / question — amber (structure function)
  "negation":         { light: "#F57F17", dark: "#FFD54F" },
  "question":         { light: "#F57F17", dark: "#FFD54F" },
  // Special
  "new_word":         { light: "#E8960A", dark: "#F5C040", bubble: true },
  "unknown":          { light: "#607D8B", dark: "#90A4AE" },
  "proper_noun":      { light: "#546E7A", dark: "#B0BEC5" },
};

// Gender colors (for nouns AND articles when gender sub-tag present)
export const GENDER_COLORS = {
  m:  { light: "#0D47A1", dark: "#64B5F6" },  // masculine = navy blue
  f:  { light: "#B71C1C", dark: "#EF5350" },  // feminine = deep crimson
  n:  { light: "#00796B", dark: "#80CBC4" },  // neuter = emerald green
  c:  { light: "#0D47A1", dark: "#64B5F6" },  // common = navy blue (Dutch de)
  pl: { light: "#00695C", dark: "#4DB6AC" },  // plural = deep teal
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

// ── Pluggable Language-Specific POS Taggers ──
// Each tagger receives the language's db object and refines POS/display/isLemma.
// Add new languages by adding posTaggers.xx = function(db){...}

const posTaggers = {};

// Korean POS auto-tagger
posTaggers.ko = function(db) {
  for (const [key, entry] of Object.entries(db)) {
    // Skip function words (already have accurate POS from curated list)
    if (entry.tags && entry.tags.length > 0) {
      // But DO add ~ prefix display for particles
      if (entry.pos && entry.pos.startsWith("particle_")) {
        entry.display = "~" + entry.word;
      }
      continue;
    }

    const word = entry.word || key;
    const en = (entry.en || "").toLowerCase();
    const kind = (entry.kind || "").toLowerCase();

    // 1. Words ending in 다: Korean verbs (동사) AND adjectives (형용사)
    // Both conjugate the same way, but 형용사 are descriptive verbs ("to be good/big/pretty").
    // POS: "adjective" for 형용사, "verb" for 동사. Both get conjugation tables.
    // Detection: kind field > "to be [adj]" pattern > "to [action]" pattern > bare English adj
    if (word.endsWith("다")) {
      // Explicit kind from teach card takes priority
      if (kind === "adjective" || kind === "adj") {
        entry.pos = "adjective";
        continue;
      }
      if (kind === "verb") {
        entry.pos = "verb";
        continue;
      }

      // "to be [adjective]" pattern → Korean 형용사 (descriptive verb)
      // Matches: "to be good", "to be expensive", "to be big (dictionary form)", etc.
      if (/^to be\s+\w/.test(en)) {
        entry.pos = "adjective";
        continue;
      }

      // "to [action]" pattern → Korean 동사 (action verb)
      if (en.startsWith("to ")) {
        entry.pos = "verb";
        continue;
      }

      // Bare English adjective (no article, no "to") → likely 형용사
      // e.g., "good", "expensive", "pretty", "big", "cold"
      if (en.length > 0 && en.length < 40 &&
          !en.startsWith("a ") && !en.startsWith("the ") &&
          !/[,;()]/.test(en) &&
          !/^(the|a|an|this|that)\s/.test(en)) {
        // If it looks like a single adjective or "adjective (note)" pattern, tag as adjective
        const cleanEn = en.replace(/\s*\(.*\)\s*$/, "").trim();
        if (cleanEn && !cleanEn.includes(" ")) {
          entry.pos = "adjective";
          continue;
        }
      }
    }

    // 2. Counters: kind is "counter" or en mentions "counter"
    if (kind === "counter" || en.includes("counter for") || en.includes("counting unit")) {
      entry.pos = "counter";
      continue;
    }

    // 3. Numbers
    if (kind === "number" || kind === "num") {
      entry.pos = "number";
      continue;
    }

    // 4. Interjections
    if (kind === "interjection" || kind === "interj") {
      entry.pos = "interjection";
      continue;
    }

    // 5. Adverbs
    if (kind === "adverb" || kind === "adv") {
      entry.pos = "adverb";
      continue;
    }

    // 6. Pronouns
    if (kind === "pronoun") {
      entry.pos = "pronoun";
      continue;
    }

    // 7. Question words
    if (kind === "question") {
      entry.pos = "question";
      continue;
    }

    // 8. Negation
    if (kind === "negation") {
      entry.pos = "negation";
      continue;
    }

    // 9. Particles from teach cards (kind:"particle")
    if (kind === "particle") {
      entry.pos = "particle_other";
      entry.display = "~" + word;
      continue;
    }
  }

  // Second pass: ensure ALL particle entries have ~ prefix display
  for (const [key, entry] of Object.entries(db)) {
    if (entry.pos && entry.pos.startsWith("particle_") && !entry.display.startsWith("~")) {
      entry.display = "~" + entry.word;
    }
  }
};

// German POS tagger — enriches POS from kind fields, detects verb types, compound nouns
posTaggers.de = function(db) {
  for (const [key, entry] of Object.entries(db)) {
    // Skip function words (already have curated POS from function-words-de.js)
    if (entry.tags && entry.tags.length > 0) continue;

    const word = entry.word || key;
    const en = (entry.en || "").toLowerCase();
    const kind = (entry.kind || "").toLowerCase();

    // 1. Verbs: kind:"verb" or en starts with "to "
    if (kind === "verb" || en.startsWith("to ")) {
      entry.pos = "verb";
      // Detect verb type from german-conjugation engine
      const inf = word.endsWith("en") || word.endsWith("n") ? word : word + "en";
      const vType = detectGermanVerbType(inf);
      if (vType) entry.verbType = vType; // "strong", "mixed", "modal", "auxiliary", "regular"
      // Detect separable prefix
      for (const pfx of ["ab","an","auf","aus","bei","ein","mit","nach","vor","zu","weg","her","hin","um","los","fest","dar"]) {
        if (word.startsWith(pfx) && word.length > pfx.length + 2) {
          entry.separablePrefix = pfx;
          break;
        }
      }
      continue;
    }

    // 2. Adjectives
    if (kind === "adjective" || kind === "adj") {
      entry.pos = "adjective";
      continue;
    }

    // 3. Adverbs
    if (kind === "adverb" || kind === "adv") {
      entry.pos = "adverb";
      continue;
    }

    // 4. Nouns: German nouns are capitalized, or have articles
    // The article/gender detection from stripArticle + detectGender already handles this,
    // but explicitly tag nouns from kind field
    if (kind === "noun" || kind === "word") {
      entry.pos = "noun";
      continue;
    }

    // 5. Prepositions
    if (kind === "preposition" || kind === "prep") {
      entry.pos = "preposition";
      continue;
    }

    // 6. Conjunctions
    if (kind === "conjunction" || kind === "conj") {
      entry.pos = "conjunction";
      continue;
    }

    // 7. Pronouns
    if (kind === "pronoun") {
      entry.pos = "pronoun";
      continue;
    }

    // 8. Numbers
    if (kind === "number" || kind === "num") {
      entry.pos = "number";
      continue;
    }

    // 9. Interjections
    if (kind === "interjection" || kind === "interj") {
      entry.pos = "interjection";
      continue;
    }

    // 10. Phrases
    if (kind === "phrase") {
      entry.pos = "noun"; // phrases default to noun-like
      continue;
    }
  }
};

// Dutch POS tagger (placeholder)
posTaggers.nl = function(db) {};

// French POS tagger (placeholder)
posTaggers.fr = function(db) {};

// Spanish POS tagger (placeholder)
posTaggers.es = function(db) {};

// ── isLemma computation ──
// Determines if an entry is a base/dictionary form (lemma) vs. a derived/conjugated form.
// Lemmas are what show up in the searchable dictionary.
function computeIsLemma(entry, lang) {
  // Function words: only the base form is a lemma (word === lemma).
  // Conjugated/contracted forms (가요→가다, 그럼→그러면) stay in WORD_DB
  // for conjugation tables, search, and story infrastructure, but are NOT
  // visible in the vocab list.
  if (entry.tags && entry.tags.length > 0) {
    if (entry.lemma && entry.word && entry.word.toLowerCase() !== entry.lemma.toLowerCase()) return false;
    return true;
  }
  // Taught words (from teach cards) are always lemmas
  if (entry.taught) return true;
  // Everything else is not a lemma
  return false;
}

// ── WORD_DB Builder ──
// Merges 2 sources in priority order: function words > teach cards
// Source 3 (quiz/example extraction) was REMOVED — it produced noise.

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
    // Supports BOTH old format (nl/en) and new v2 format (trg/src)
    const unitsByLang = ALL_UNITS.filter(u => u.lang === lang);
    for (const unit of unitsByLang) {
      const level = unit.level || "A1";
      const isV2 = unit.track === "v2";
      for (const lesson of (unit.lessons || [])) {
        for (const step of (lesson.steps || [])) {
          if (step.type !== "teach") continue;
          const word = step.nl || step.trg;
          const trans = step.en || step.src;
          if (!word || !trans) continue;

          const { article, bare } = stripArticle(word, lang);
          const key = bare.toLowerCase();
          // v2 cards have explicit POS/gender — prefer those over guessing
          const hasExplicitPos = step.pos && step.pos !== "unknown";
          const kind = hasExplicitPos ? step.pos : classifyKind(step, lang);
          const pos = hasExplicitPos ? step.pos : kindToPos(kind, article, lang);
          const gender = step.gender !== undefined ? step.gender : detectGender(article, lang);
          const exSrc = step.exampleSrc || step.exampleEn || null;

          const existing = db[lang][key];

          // If function word list already has this word, enrich but don't overwrite POS
          if (existing && existing.tags && existing.tags.length > 0) {
            // Upgrade: mark as taught, add teach card data
            existing.taught = true;
            existing.lessonId = existing.lessonId || lesson.id;
            existing.level = existing.level || level;
            if (!existing.en && trans) existing.en = trans;
            if (!existing.phonetic && step.phonetic) existing.phonetic = step.phonetic;
            if (!existing.note && step.note) existing.note = step.note;
            if (!existing.example && step.example) existing.example = step.example;
            if (!existing.exampleEn && exSrc) existing.exampleEn = exSrc;
            if (!existing.cognate && step.cognate) existing.cognate = step.cognate;
            if (!existing.also && step.also) existing.also = step.also;
            if (!existing.funFact && step.funFact) existing.funFact = step.funFact;
            existing.display = word;
            continue;
          }

          // v2 entry always wins over v1 (richer data: POS, gender, funFact)
          if (existing && existing.taught && isV2 && !existing._isV2) {
            // v2 overwrites v1 — fall through to create entry
          } else if (existing && existing.taught && existing.lessonId && !step.example) {
            continue;
          }

          db[lang][key] = {
            word: bare,
            lemma: bare,
            en: trans,
            lemmaEn: trans,
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
            exampleEn: exSrc,
            cognate: step.cognate || null,
            funFact: step.funFact || null,
            _isV2: isV2 || false,
            // Backward compat fields
            display: word,
            kind: kind,
            also: step.also || null,
            morph: null,
            particle: null,
            uses: null,
          };
        }
      }
    }

    // Source 3 REMOVED (D116+): Quiz/example extraction produced 9,500+ noise entries.
    // WORD_DB now contains ONLY function words (Source 1) and teach card lemmas (Source 2).

    // ── Post-process: language-specific POS tagger ──
    const tagger = posTaggers[lang];
    if (tagger) tagger(db[lang]);

    // Post-process: resolve article subcategories for coloring
    for (const [key, entry] of Object.entries(db[lang])) {
      if (entry.pos === "article") {
        entry.pos = resolveArticlePos(entry);
      }
    }

    // Post-process: set isLemma flag on every entry
    for (const [key, entry] of Object.entries(db[lang])) {
      entry.isLemma = computeIsLemma(entry, lang);
    }

    // ── Post-process: TOPIK level enrichment (Korean only) ──
    if (lang === "ko" && TOPIK_VOCAB_KO) {
      // Build lookup from TOPIK word list
      const topikLookup = {};
      for (const t of TOPIK_VOCAB_KO) {
        if (!topikLookup[t.word]) topikLookup[t.word] = t;
      }
      // Tag WORD_DB entries with official TOPIK level
      for (const [key, entry] of Object.entries(db[lang])) {
        const topik = topikLookup[entry.word] || topikLookup[key];
        if (topik) {
          entry.topikLevel = topik.topik; // "A" or "B"
          entry.topikPos = topik.pos;
          if (topik.hanja && !entry.hanja) entry.hanja = topik.hanja;
          if (topik.rank) entry.frequencyRank = topik.rank;
        }
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

          // Teach cards: extract the target word (supports nl OR trg)
          const teachWord = step.nl || step.trg;
          if (step.type === "teach" && teachWord) {
            const { bare } = stripArticle(teachWord, lang);
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
              const pw = p.nl || p.trg;
              if (pw) extractWords(pw, lang).forEach(w => wordsInStep.push(w));
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

// ════════════════════════════════════════════════════════════
// KOREAN DEEP DICTIONARY EXTENSIONS (Phase 1-4)
// ════════════════════════════════════════════════════════════

// ── Phase 2: Form-to-Lemma Reverse Index ──
// Maps every conjugated surface form back to its dictionary form.
// Searching "먹었어요" resolves to "먹다".
function buildKoreanFormIndex() {
  const koDict = WORD_DB.ko;
  if (!koDict) return {};
  const verbForms = [];
  for (const [key, entry] of Object.entries(koDict)) {
    if (entry.pos === "verb" || entry.pos === "adjective" || entry.kind === "verb" || entry.kind === "adjective") {
      const dictForm = key.endsWith("다") ? key : key + "다";
      if (koDict[dictForm] || koDict[key]) verbForms.push(dictForm);
    }
  }
  // Also include any teach card with kind:"verb" or kind:"adjective" that ends in 다
  for (const [key, entry] of Object.entries(koDict)) {
    if (key.endsWith("다") && entry.taught) {
      if (!verbForms.includes(key)) verbForms.push(key);
    }
  }
  return buildFormIndex(verbForms);
}

export const KOREAN_FORM_INDEX = buildKoreanFormIndex();

// ── German Form-to-Lemma Reverse Index ──
// Maps every conjugated surface form back to its infinitive.
// Searching "fuhrst" resolves to "fahren".
function buildGermanFormIdx() {
  const deDict = WORD_DB.de;
  if (!deDict) return {};
  const verbs = [];
  for (const [key, entry] of Object.entries(deDict)) {
    if (entry.pos === "verb" || entry.kind === "verb") {
      const inf = key.endsWith("en") || key.endsWith("n") ? key : key + "en";
      if (!verbs.includes(inf)) verbs.push(inf);
    }
  }
  return buildGermanFormIndex(verbs);
}
export const GERMAN_FORM_INDEX = buildGermanFormIdx();

// Re-export German conjugation API for use in verumlingua.jsx
export { conjugateGermanVerb, detectGermanVerbType, getGermanVerbInfo, nounWithCases };

// ── Phase 4: Morpheme Family Index ──
// Cross-references Sino-Korean morphemes from hanja fields and COMPOUND markers.
// KOREAN_MORPHEME_INDEX["학"] = { hanja: "學", meaning: "study", words: ["학교","학생","학원"] }
function buildMorphemeIndex() {
  const index = {};
  const koUnits = ALL_UNITS.filter(u => u.lang === "ko");
  for (const unit of koUnits) {
    for (const lesson of (unit.lessons || [])) {
      for (const step of (lesson.steps || [])) {
        if (step.type !== "teach") continue;
        const word = step.nl || "";
        // Parse hanja field: "學+生" or "韓+國"
        if (step.hanja) {
          const chars = step.hanja.split("+").map(s => s.trim());
          // Try to extract Korean morphemes from note COMPOUND markers
          const noteMatch = (step.note || "").match(/COMPOUND:\s*(.+?)(?:\.|$)/i) ||
                            (step.note || "").match(/SINO-KOREAN:\s*(.+?)(?:\.|$)/i);
          const morphemes = [];
          if (noteMatch) {
            const parts = noteMatch[1].split("+").map(s => s.trim());
            for (let i = 0; i < parts.length; i++) {
              const m = parts[i].match(/^(.+?)\s*\((.+?)\)/);
              if (m) morphemes.push({ ko: m[1].trim(), meaning: m[2].trim(), hanja: chars[i] || "" });
            }
          }
          for (const morph of morphemes) {
            if (!morph.ko) continue;
            if (!index[morph.ko]) {
              index[morph.ko] = { hanja: morph.hanja, meaning: morph.meaning, words: [] };
            }
            if (!index[morph.ko].words.includes(word)) {
              index[morph.ko].words.push(word);
            }
          }
        }
        // Parse COMPOUND/SINO-KOREAN from note field even without hanja
        if (!step.hanja && step.note) {
          const noteMatch = (step.note).match(/(?:COMPOUND|SINO-KOREAN):\s*(.+?)(?:\.\s|$)/i);
          if (noteMatch) {
            const parts = noteMatch[1].split("+").map(s => s.trim());
            for (const part of parts) {
              const m = part.match(/^(.+?)\s*\((.+?)(?:\/[^)]+)?\)/);
              if (m) {
                const ko = m[1].trim();
                const meaning = m[2].trim();
                if (!index[ko]) index[ko] = { hanja: "", meaning, words: [] };
                if (!index[ko].words.includes(word)) index[ko].words.push(word);
              }
            }
          }
        }
      }
    }
  }
  return index;
}

export const KOREAN_MORPHEME_INDEX = buildMorphemeIndex();

// ── Phase 3 support: Example Sentence Aggregator ──
// Collects ALL curriculum sentences containing a given Korean word.
// Returns array of { korean, english, lessonId, unitN }
function buildKoreanExampleIndex() {
  const index = {}; // index[word] = [{ korean, english, lessonId, unitN }]
  const koUnits = ALL_UNITS.filter(u => u.lang === "ko");
  for (const unit of koUnits) {
    for (const lesson of (unit.lessons || [])) {
      for (const step of (lesson.steps || [])) {
        const pairs = [];
        // Teach card examples
        if (step.example && step.exampleEn) {
          pairs.push({ korean: step.example, english: step.exampleEn });
        }
        // Quiz questions
        if (step.q && step.hint) {
          pairs.push({ korean: step.q, english: step.hint });
        }
        if (step.s) {
          pairs.push({ korean: step.s, english: "" });
        }
        for (const pair of pairs) {
          // Tokenize Korean text to find which words appear
          const words = pair.korean
            .replace(/[A-Z]:\s/g, " ")
            .split(/[\s,;:!?.'"()[\]{}«»…\-—–/\\→]+/)
            .filter(w => w.length > 0 && /[\uAC00-\uD7AF]/.test(w))
            .map(w => w.toLowerCase());
          const seen = new Set();
          for (const w of words) {
            if (seen.has(w)) continue;
            seen.add(w);
            if (!index[w]) index[w] = [];
            // Limit to 10 examples per word to keep memory reasonable
            if (index[w].length < 10) {
              index[w].push({ korean: pair.korean, english: pair.english, lessonId: lesson.id, unitN: unit.n });
            }
          }
        }
      }
    }
  }
  return index;
}

export const KOREAN_EXAMPLE_INDEX = buildKoreanExampleIndex();

// ── Phase 4 support: Idiom/Proverb Cross-Reference ──
// Finds all idioms/proverbs that contain a given word.
function buildKoreanIdiomIndex() {
  const index = {}; // index[word] = [{ idiom, meaning, lessonId }]
  const koUnits = ALL_UNITS.filter(u => u.lang === "ko");
  for (const unit of koUnits) {
    for (const lesson of (unit.lessons || [])) {
      for (const step of (lesson.steps || [])) {
        if (step.type !== "teach") continue;
        const nl = step.nl || "";
        // Only include real idioms/proverbs/expressions:
        // - kind:"phrase" cards (explicit phrases)
        // - B2 proverb/idiom units (U26-U28 typically)
        // - Cards with → that have 3+ Korean words (real expressions, not conjugation examples)
        const isPhrase = step.kind === "phrase";
        const isB2Expression = (unit.level || "").startsWith("B2") && nl.includes(" ") && nl.length >= 8;
        const isProverb = nl.length >= 10 && (nl.split(/\s+/).filter(w => /[\uAC00-\uD7AF]/.test(w)).length >= 3);
        if (!isPhrase && !isB2Expression && !isProverb) continue;
        // Exclude grammar patterns and conjugation examples
        if (nl.startsWith("-") || nl.startsWith("(") || nl.includes("→")) continue;
        if (!/[\uAC00-\uD7AF].*[\uAC00-\uD7AF]/.test(nl)) continue;
        const words = nl.split(/[\s,;:!?.'"()[\]{}]+/)
          .filter(w => w.length > 0 && /[\uAC00-\uD7AF]/.test(w))
          .map(w => w.toLowerCase());
        for (const w of words) {
          if (!index[w]) index[w] = [];
          if (index[w].length < 5) {
            index[w].push({ idiom: nl, meaning: step.en || "", lessonId: lesson.id, unitN: unit.n });
          }
        }
      }
    }
  }
  return index;
}

export const KOREAN_IDIOM_INDEX = buildKoreanIdiomIndex();

// ── Korean Grammar Patterns (multi-word entries for Grammar tab) ──
// Extracts all grammar pattern teach cards for the Grammar browser.
function buildKoreanGrammarPatterns() {
  const patterns = [];
  const koUnits = ALL_UNITS.filter(u => u.lang === "ko");
  for (const unit of koUnits) {
    for (const lesson of (unit.lessons || [])) {
      for (const step of (lesson.steps || [])) {
        if (step.type !== "teach") continue;
        if (step.kind !== "grammar") continue;
        patterns.push({
          pattern: step.nl || "",
          en: step.en || "",
          phonetic: step.phonetic || "",
          level: unit.level || "A1",
          lessonId: lesson.id,
          unitN: unit.n,
          note: step.note || "",
          deepDive: step.deepDive || null,
          example: step.example || "",
          exampleEn: step.exampleEn || "",
        });
      }
    }
  }
  return patterns;
}

export const KOREAN_GRAMMAR_PATTERNS = buildKoreanGrammarPatterns();

// ═══════════════════════════════════════════════════════════════════
// KOREAN GRAMMAR REFERENCE — comprehensive grammar from ALL sources
// Pulls from: tip cards, verb_tables, grammar teach cards, and patterns
// ═══════════════════════════════════════════════════════════════════

// Categorize a grammar item by content analysis
function categorizeGrammar(text, title, note) {
  const all = (text + " " + title + " " + (note || "")).toLowerCase();
  // Particles
  if (/\b(particle|조사|은\/는|이\/가|을\/를|에서|에게|한테|으로|부터|까지|마다|처럼|만큼|보다)\b/.test(all)) return "Particles";
  // Honorifics & Speech levels
  if (/\b(honorif|존경|겸양|합쇼체|해요체|반말|격식|비격식|register|polite|formal|casual|speech level|-(으)시|높임|존댓말|반말)\b/.test(all)) return "Speech Levels";
  // Verb conjugation
  if (/\b(conjug|irregular|불규칙|ㅂ불|ㄷ불|ㅎ불|ㅅ불|ㄹ불|으불|르불|verb.*form|stem|batchim|vowel harm)\b/.test(all)) return "Verb Conjugation";
  // Tense & Aspect
  if (/\b(past.*tense|future.*tense|present.*tense|progressive|-고 있|-았|-었|-(으)ㄹ 거|시제|과거|미래|현재)\b/.test(all)) return "Tense & Aspect";
  // Negation
  if (/\b(negat|안|못|-지 않|-지 못|부정)\b/.test(all)) return "Negation";
  // Connectors
  if (/\b(connect|connector|-고|-지만|-(으)면|-아\/어서|-기 때문|-는데|-니까|접속|연결)\b/.test(all)) return "Connectors";
  // Sentence endings
  if (/\b(ending|-네요|-군요|-ㄹ걸|-더라|-ㄹ게요|종결|어미)\b/.test(all)) return "Sentence Endings";
  // Modifiers
  if (/\b(modifier|관형|adjective form|relative clause|-ㄴ\/는|-은\/는|수식)\b/.test(all)) return "Modifiers";
  // Numbers & Counters
  if (/\b(number|counter|숫자|개|명|번|살|시|분|native.*korean.*number|sino.*korean|한자어.*숫자)\b/.test(all)) return "Numbers & Counters";
  // Expressions & patterns
  if (/\b(expression|pattern|관용|-고 싶|-ㄹ 수 있|-아\/어야|-기로 하)\b/.test(all)) return "Expressions";
  return "General";
}

// Detect politeness/register level
function detectPoliteness(text, title, note) {
  const all = (text + " " + title + " " + (note || "")).toLowerCase();
  if (/합쇼체|formal|격식체|합니다/.test(all)) return "formal";
  if (/해요체|polite|존댓말/.test(all)) return "polite";
  if (/반말|casual|informal|비격식/.test(all)) return "casual";
  if (/written|문어|literary|academic/.test(all)) return "written";
  return "all";
}

function buildKoreanGrammarReference() {
  const items = [];
  const koUnits = ALL_UNITS.filter(u => u.lang === "ko");
  const seen = new Set(); // dedup by content
  const toStr = (v) => { if (!v) return ""; if (typeof v === "string") return v; if (typeof v === "object" && v.title) return v.title + (v.text ? "\n" + v.text : ""); return String(v); };

  for (const unit of koUnits) {
    for (const lesson of (unit.lessons || [])) {
      for (const step of (lesson.steps || [])) {
        // Source 1: Tip cards (actual grammar explanations)
        if (step.type === "tip") {
          const key = "tip:" + toStr(step.title) + toStr(step.text).substring(0, 60);
          if (seen.has(key)) continue;
          seen.add(key);
          const title = toStr(step.title);
          const text = toStr(step.text);
          items.push({
            source: "tip",
            title: title,
            text: text,
            deepDive: toStr(step.deepDive) || null,
            level: unit.level || "A1",
            unitN: unit.n,
            lessonId: lesson.id,
            category: categorizeGrammar(text, title, step.deepDive || ""),
            politeness: detectPoliteness(text, title, step.deepDive || ""),
            example: null,
            exampleEn: null,
          });
        }

        // Source 2: Verb tables (conjugation grids)
        if (step.type === "verb_table") {
          const key = "vt:" + (step.title || "") + unit.n;
          if (seen.has(key)) continue;
          seen.add(key);
          items.push({
            source: "verb_table",
            title: step.title || "Conjugation Table",
            text: step.note || "",
            deepDive: toStr(step.deepDive) || null,
            level: unit.level || "A1",
            unitN: unit.n,
            lessonId: lesson.id,
            category: "Verb Conjugation",
            politeness: detectPoliteness(step.title || "", step.note || "", step.deepDive || ""),
            groups: step.groups || [],
            example: null,
            exampleEn: null,
          });
        }

        // Source 3: Grammar teach cards (only real patterns — must contain -, /, ~, or be particle entries)
        if (step.type === "teach" && step.kind === "grammar") {
          const nl = step.nl || "";
          const isRealPattern = /[-\/~()ㅂ니다요]/.test(nl) || nl.startsWith("~") || nl.includes("/") || nl.length <= 6;
          if (!isRealPattern) continue;
          const key = "gr:" + nl;
          if (seen.has(key)) continue;
          seen.add(key);
          items.push({
            source: "grammar",
            title: nl,
            text: step.note || "",
            deepDive: toStr(step.deepDive) || null,
            level: unit.level || "A1",
            unitN: unit.n,
            lessonId: lesson.id,
            category: categorizeGrammar(nl, step.en || "", step.note || ""),
            politeness: detectPoliteness(nl, step.en || "", step.note || ""),
            example: step.example || null,
            exampleEn: step.exampleEn || null,
            en: step.en || "",
            phonetic: step.phonetic || "",
          });
        }
      }
    }
  }
  return items;
}

export const KOREAN_GRAMMAR_REFERENCE = buildKoreanGrammarReference();
export const GRAMMAR_CATEGORIES = ["Particles","Speech Levels","Verb Conjugation","Tense & Aspect","Negation","Connectors","Sentence Endings","Modifiers","Numbers & Counters","Expressions","General"];

// Re-export conjugation utilities for UI components
export { conjugateVerb, detectIrregType, getIrregInfo, nounWithParticles };

// ═══════════════════════════════════════════════════════════════════
// GERMAN DEEP DICTIONARY EXTENSIONS
// Mirrors the Korean system: example index, grammar reference
// ═══════════════════════════════════════════════════════════════════

// ── German Example Sentence Aggregator ──
// Collects ALL curriculum sentences containing a given German word.
function buildGermanExampleIndex() {
  const index = {};
  const deUnits = ALL_UNITS.filter(u => u.lang === "de");
  for (const unit of deUnits) {
    for (const lesson of (unit.lessons || [])) {
      for (const step of (lesson.steps || [])) {
        const pairs = [];
        if (step.example && step.exampleEn) {
          pairs.push({ target: step.example, source: step.exampleEn });
        }
        if (step.q && step.hint) {
          pairs.push({ target: step.q, source: step.hint });
        }
        if (step.s) {
          pairs.push({ target: step.s, source: "" });
        }
        for (const pair of pairs) {
          const words = pair.target
            .replace(/[A-Z]:\s/g, " ")
            .split(/[\s,;:!?.'"()[\]{}«»…\-—–/\\→]+/)
            .filter(w => w.length > 0 && /[a-zA-ZäöüÄÖÜß]/.test(w))
            .map(w => w.toLowerCase());
          const seen = new Set();
          for (const w of words) {
            if (seen.has(w)) continue;
            seen.add(w);
            if (!index[w]) index[w] = [];
            if (index[w].length < 10) {
              index[w].push({ target: pair.target, source: pair.source, lessonId: lesson.id, unitN: unit.n });
            }
          }
        }
      }
    }
  }
  return index;
}

export const GERMAN_EXAMPLE_INDEX = buildGermanExampleIndex();

// ── German Grammar Reference ──
// Pulls from tip cards, verb_tables, and grammar teach cards.
const DE_GRAMMAR_CATEGORIES = ["Articles & Gender","Cases","Verb Conjugation","Tense & Aspect","Negation","Word Order","Connectors","Prepositions","Relative Clauses","Passive & Subjunctive","Expressions","General"];

function categorizeGermanGrammar(text, title, note) {
  const all = (text + " " + title + " " + (note || "")).toLowerCase();
  if (/\b(artikel|article|der|die|das|gender|geschlecht|ein|eine|kein)\b/.test(all)) return "Articles & Gender";
  if (/\b(case|kasus|nominativ|akkusativ|dativ|genitiv|wechselpr|deklinat)\b/.test(all)) return "Cases";
  if (/\b(conjug|konjugat|irregular|unregelm|strong.*verb|modal.*verb|sein\/haben|trennbar|separa|prefix|stamm)\b/.test(all)) return "Verb Conjugation";
  if (/\b(tense|tempus|pr[äa]sens|pr[äa]terit|perfekt|plusquam|futur|zeitform)\b/.test(all)) return "Tense & Aspect";
  if (/\b(negat|nicht|kein|vernein)\b/.test(all)) return "Negation";
  if (/\b(word.*order|wortstellung|verb.*second|verb.*final|nebensatz|hauptsatz|inversion)\b/.test(all)) return "Word Order";
  if (/\b(connector|konjunktion|weil|dass|obwohl|wenn|als|damit|ob|nachdem|bevor|seitdem)\b/.test(all)) return "Connectors";
  if (/\b(preposit|pr[äa]posit|mit|von|zu|bei|nach|aus|seit|gegen[üu]ber)\b/.test(all)) return "Prepositions";
  if (/\b(relativ|relative.*clause|relativsatz|der\/die\/das.*als)\b/.test(all)) return "Relative Clauses";
  if (/\b(passiv|passive|konjunktiv|subjunctiv|werden.*\+|w[üu]rde|indirect.*speech|indirekte.*rede)\b/.test(all)) return "Passive & Subjunctive";
  if (/\b(expression|redewend|sprichwort|idiom|pattern)\b/.test(all)) return "Expressions";
  return "General";
}

function buildGermanGrammarReference() {
  const items = [];
  const deUnits = ALL_UNITS.filter(u => u.lang === "de");
  const seen = new Set();
  const toStr = (v) => { if (!v) return ""; if (typeof v === "string") return v; if (typeof v === "object" && v.title) return v.title + (v.text ? "\n" + v.text : ""); return String(v); };

  for (const unit of deUnits) {
    for (const lesson of (unit.lessons || [])) {
      for (const step of (lesson.steps || [])) {
        // Source 1: Tip cards
        if (step.type === "tip") {
          const key = "tip:" + toStr(step.title) + toStr(step.text).substring(0, 60);
          if (seen.has(key)) continue;
          seen.add(key);
          const title = toStr(step.title);
          const text = toStr(step.text);
          items.push({
            source: "tip",
            title: title,
            text: text,
            deepDive: toStr(step.deepDive) || null,
            level: unit.level || "A1",
            unitN: unit.n,
            lessonId: lesson.id,
            category: categorizeGermanGrammar(text, title, step.deepDive || ""),
            example: null,
            exampleEn: null,
          });
        }

        // Source 2: Verb tables
        if (step.type === "verb_table") {
          const key = "vt:" + (step.title || "") + unit.n;
          if (seen.has(key)) continue;
          seen.add(key);
          items.push({
            source: "verb_table",
            title: step.title || "Conjugation Table",
            text: step.note || "",
            deepDive: toStr(step.deepDive) || null,
            level: unit.level || "A1",
            unitN: unit.n,
            lessonId: lesson.id,
            category: "Verb Conjugation",
            groups: step.groups || [],
            example: null,
            exampleEn: null,
          });
        }

        // Source 3: Grammar teach cards
        if (step.type === "teach" && step.kind === "grammar") {
          const nl = step.nl || "";
          const key = "gr:" + nl;
          if (seen.has(key)) continue;
          seen.add(key);
          items.push({
            source: "grammar",
            title: nl,
            text: step.note || "",
            deepDive: toStr(step.deepDive) || null,
            level: unit.level || "A1",
            unitN: unit.n,
            lessonId: lesson.id,
            category: categorizeGermanGrammar(nl, step.en || "", step.note || ""),
            example: step.example || null,
            exampleEn: step.exampleEn || null,
            en: step.en || "",
          });
        }
      }
    }
  }
  return items;
}

export const GERMAN_GRAMMAR_REFERENCE = buildGermanGrammarReference();
export const DE_GRAMMAR_CATS = DE_GRAMMAR_CATEGORIES;

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

// Lookup a word in WORD_DB (tries exact, stripped article, form-index reverse lookup)
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
  // Form-index reverse lookup: conjugated forms → lemma
  if (lang === "de" && GERMAN_FORM_INDEX[lower]) {
    const lemma = GERMAN_FORM_INDEX[lower];
    if (dict[lemma]) return dict[lemma];
  }
  if (lang === "ko" && KOREAN_FORM_INDEX[lower]) {
    const lemma = KOREAN_FORM_INDEX[lower];
    if (dict[lemma]) return dict[lemma];
  }
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
        const tw = step.nl || step.trg;
        if (step.type === "teach" && tw) {
          const { bare } = stripArticle(tw, lang);
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

// Shared color constants for pack definitions — HIGH CONTRAST, zero purple
const C_BLUE = { light: "#0091FF", dark: "#64B5F6" };       // Vivid sky blue (masculine)
const C_RED = { light: "#B71C1C", dark: "#EF5350" };         // Deep crimson (feminine)
const C_AMBER = { light: "#00796B", dark: "#80CBC4" };       // Emerald green (German neuter das)
const C_TEAL_GENDER = { light: "#00695C", dark: "#4DB6AC" }; // Deep teal (plural)
const C_BRONZE = { light: "#5D4037", dark: "#A1887F" };      // Dark brown (indefinite)
const C_GOLD = { light: "#00796B", dark: "#80CBC4" };        // Dutch het (emerald green, aligned with neuter)
// Korean particle + misc colors
const C_TEAL = { light: "#2ECDA7", dark: "#50E0C0" };
const C_KO_AMBER = { light: "#F59E0B", dark: "#FCD34D" };
const C_CORAL = { light: "#E8475E", dark: "#F58888" };
const C_PURPLE_KO = { light: "#7B5EE8", dark: "#A890FF" };
const C_WARM_SLATE = { light: "#78909C", dark: "#B0BEC5" }; // Warm blue-grey (misc/other, NOT flat grey)

// Muted ink Word Type colors — maximally distinct, readable on lavender
// Owner-approved 2026-03-20: must match POS_COLORS exactly
const C_FOREST_GREEN = { light: "#2E7D32", dark: "#66BB6A" };  // verbs
const C_BURNT_ORANGE = { light: "#E65100", dark: "#FF8A65" };  // adjectives
const C_DARK_TEAL = { light: "#00695C", dark: "#4DB6AC" };     // adverbs
const C_NAVY_BLUE = { light: "#1565C0", dark: "#64B5F6" };     // nouns
const C_DARK_GOLD = { light: "#8D6E00", dark: "#D4A017" };     // conjunctions, articles
const C_DEEP_PURPLE = { light: "#7B1FA2", dark: "#CE93D8" };   // pronouns
const C_SLATE = { light: "#37474F", dark: "#90A4AE" };         // prepositions
const C_CRIMSON = { light: "#B71C1C", dark: "#EF5350" };       // numbers
const C_HOT_PINK = { light: "#C2185B", dark: "#F06292" };      // interjections

// Word Type pack (shared across all languages)
// Every POS gets its own distinct color. No two types share a color.
// Maximally distinct hues: green, orange, teal, blue, gold, purple, slate, crimson, pink, brown
const WORDTYPE_PACK = {
  id: "wordtype", label: "Word Type", icon: "Aa",
  desc: "Every word colored by part of speech",
  colorMap: {
    // Verbs — forest green (includes auxiliaries, modals, all verb subtypes)
    verb: { ...C_FOREST_GREEN }, auxiliary: { ...C_FOREST_GREEN },
    aux_verb: { ...C_FOREST_GREEN }, modal_verb: { ...C_FOREST_GREEN },
    aux: { ...C_FOREST_GREEN },
    // Adjectives — burnt orange
    adjective: { ...C_BURNT_ORANGE },
    // Adverbs — dark teal (distinct from green verbs AND blue nouns)
    adverb: { ...C_DARK_TEAL },
    // Pronouns — deep purple (ALL subtypes: subj, obj, dat, refl, poss, rel, dem, indef)
    pronoun: { ...C_DEEP_PURPLE }, pronoun_subj: { ...C_DEEP_PURPLE },
    pronoun_obj: { ...C_DEEP_PURPLE }, pronoun_dat: { ...C_DEEP_PURPLE },
    pronoun_refl: { ...C_DEEP_PURPLE }, pronoun_poss: { ...C_DEEP_PURPLE },
    pronoun_rel: { ...C_DEEP_PURPLE }, pronoun_dem: { ...C_DEEP_PURPLE },
    pronoun_indef: { ...C_DEEP_PURPLE },
    demonstrative: { ...C_DEEP_PURPLE },
    // Nouns — navy blue
    noun: { ...C_NAVY_BLUE },
    // Prepositions — blue-grey slate (neutral, distinct from purple pronouns)
    preposition: { ...C_SLATE },
    // Conjunctions — dark gold/mustard (ALL subtypes: coord, sub)
    conjunction: { ...C_DARK_GOLD },
    conjunction_coord: { ...C_DARK_GOLD }, conjunction_sub: { ...C_DARK_GOLD },
    // Articles — dark gold (structure)
    article: { ...C_DARK_GOLD },
    article_m: { ...C_DARK_GOLD }, article_f: { ...C_DARK_GOLD }, article_n: { ...C_DARK_GOLD },
    article_c: { ...C_DARK_GOLD }, article_het: { ...C_DARK_GOLD },
    article_indef: { ...C_DARK_GOLD }, article_pl: { ...C_DARK_GOLD },
    // Numbers — crimson red (distinct from orange adj)
    number: { ...C_CRIMSON }, counter: { ...C_CRIMSON },
    // Interjections — hot pink (distinct from purple pronouns AND red numbers)
    interjection: { ...C_HOT_PINK },
    // Particles — dark brown
    particle_topic: { ...C_BRONZE }, particle_subj: { ...C_BRONZE },
    particle_obj: { ...C_BRONZE }, particle_loc: { ...C_BRONZE },
    particle_dir: { ...C_BRONZE }, particle_conn: { ...C_BRONZE },
    particle_comp: { ...C_BRONZE }, particle_poss: { ...C_BRONZE },
    particle_other: { ...C_BRONZE },
    // Negation/question — dark gold (structure function)
    negation: { ...C_DARK_GOLD }, question: { ...C_DARK_GOLD },
  },
  legend: [
    { label: "Verbs", color: "#2E7D32", key: "verb", desc: "Action and state words: run, eat, be, have, go" },
    { label: "Adjectives", color: "#E65100", key: "adjective", desc: "Words that describe nouns: big, red, fast, beautiful" },
    { label: "Adverbs", color: "#00695C", key: "adverb", desc: "Words that modify verbs or adjectives: quickly, very, always" },
    { label: "Pronouns", color: "#7B1FA2", key: "pronoun", desc: "Stand-in words: I, you, he, she, this, that" },
    { label: "Nouns", color: "#1565C0", key: "noun", desc: "People, places, things, and ideas: dog, house, love" },
    { label: "Prepositions", color: "#37474F", key: "preposition", desc: "Spatial and relational words: in, on, at, from, to" },
    { label: "Conjunctions", color: "#8D6E00", key: "conjunction", desc: "Words that connect: and, but, because, although" },
    { label: "Numbers", color: "#B71C1C", key: "number", desc: "Counting words: one, two, first, second" },
    { label: "Interjections", color: "#C2185B", key: "interjection", desc: "Expressive words: wow, oh, hey, ouch" },
    { label: "Particles", color: "#5D4037", key: "particle", desc: "Functional particles: topic, subject, object markers" },
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
          // Gender-specific: articles, nouns, adjectives by gender
          article_m: { ...C_BLUE }, article_f: { ...C_RED }, article_n: { ...C_AMBER },
          article_indef: { ...C_BRONZE },
          noun_m: { ...C_BLUE, understripe: false }, noun_f: { ...C_RED, understripe: false },
          noun_n: { ...C_AMBER, understripe: false },
          adjective_m: { ...C_BLUE }, adjective_f: { ...C_RED }, adjective_n: { ...C_AMBER },
          // Fallback POS colors so non-gendered words still get colored
          verb: { ...C_FOREST_GREEN }, aux_verb: { ...C_FOREST_GREEN },
          modal_verb: { ...C_FOREST_GREEN }, aux: { ...C_FOREST_GREEN },
          adverb: { ...C_DARK_TEAL },
          pronoun: { ...C_DEEP_PURPLE }, pronoun_subj: { ...C_DEEP_PURPLE },
          pronoun_obj: { ...C_DEEP_PURPLE }, pronoun_dat: { ...C_DEEP_PURPLE },
          pronoun_refl: { ...C_DEEP_PURPLE }, pronoun_poss: { ...C_DEEP_PURPLE },
          pronoun_rel: { ...C_DEEP_PURPLE }, pronoun_dem: { ...C_DEEP_PURPLE },
          pronoun_indef: { ...C_DEEP_PURPLE },
          preposition: { ...C_SLATE },
          conjunction: { ...C_DARK_GOLD }, conjunction_coord: { ...C_DARK_GOLD },
          conjunction_sub: { ...C_DARK_GOLD },
          number: { ...C_CRIMSON },
          interjection: { ...C_HOT_PINK },
          negation: { ...C_DARK_GOLD }, question: { ...C_DARK_GOLD },
        },
        legend: [
          { label: "Masculine (der)", color: "#0091FF", key: "m", desc: "der Hund, der Mann, der Tisch. Most agent nouns." },
          { label: "Feminine (die)", color: "#D50000", key: "f", desc: "die Frau, die Katze, die Lampe. Most -ung, -keit, -heit." },
          { label: "Neuter (das)", color: "#00796B", key: "n", desc: "das Kind, das Haus, das Buch. Most -chen, -lein, -ment." },
          { label: "Indefinite", color: "#8D6E63", key: "indef", desc: "ein/eine. Gender not yet determined from context." },
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
          particle_obj: { ...C_KO_AMBER }, particle_loc: { ...C_TEAL },
          particle_dir: { ...C_TEAL }, particle_conn: { ...C_PURPLE_KO },
          particle_comp: { ...C_PURPLE_KO }, particle_poss: { ...C_PURPLE_KO },
          particle_other: { ...C_WARM_SLATE },
        },
        legend: [
          { label: "\uc740/\ub294 Topic", color: "#0091FF", key: "topic", desc: "Marks the topic: what you're talking about." },
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
          { label: "\ud569\uc1fc\uccb4 Formal", color: "#0091FF", key: "hapsyo", desc: "Highest formal level. News, presentations, service." },
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
          article_indef: { ...C_BRONZE },
          noun_c: { ...C_BLUE, understripe: false }, noun_m: { ...C_BLUE, understripe: false },
          noun_n: { ...C_GOLD, understripe: false },
        },
        legend: [
          { label: "de (common)", color: "#0091FF", key: "c", desc: "de hond, de tafel. Most Dutch nouns are de-words." },
          { label: "het (neuter)", color: "#00796B", key: "n", desc: "het huis, het kind. About 25% of Dutch nouns." },
          { label: "een (indefinite)", color: "#8D6E63", key: "indef", desc: "een boek. No gender distinction for indefinite." },
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
          article_m: { ...C_BLUE }, article_f: { ...C_RED },
          article_pl: { ...C_TEAL_GENDER }, article_indef: { ...C_BRONZE },
          noun_m: { ...C_BLUE, understripe: false }, noun_f: { ...C_RED, understripe: false },
          noun_pl: { ...C_TEAL_GENDER, understripe: false },
          adjective_m: { ...C_BLUE }, adjective_f: { ...C_RED },
        },
        legend: [
          { label: "le (masculine)", color: "#0091FF", key: "m", desc: "le livre, le chat. Masculine nouns and articles." },
          { label: "la (feminine)", color: "#D50000", key: "f", desc: "la maison, la table. Feminine nouns and articles." },
          { label: "les (plural)", color: "#00BFA5", key: "pl", desc: "les enfants, les livres. All plural nouns." },
          { label: "Indefinite", color: "#8D6E63", key: "indef", desc: "un/une. Gender not yet determined from context." },
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
          article_m: { ...C_BLUE }, article_f: { ...C_RED },
          article_pl: { ...C_TEAL_GENDER }, article_indef: { ...C_BRONZE },
          noun_m: { ...C_BLUE, understripe: false }, noun_f: { ...C_RED, understripe: false },
          noun_pl: { ...C_TEAL_GENDER, understripe: false },
          adjective_m: { ...C_BLUE }, adjective_f: { ...C_RED },
        },
        legend: [
          { label: "el (masculine)", color: "#0091FF", key: "m", desc: "el libro, el gato. Masculine nouns and articles." },
          { label: "la (feminine)", color: "#D50000", key: "f", desc: "la casa, la mesa. Feminine nouns and articles." },
          { label: "los/las (plural)", color: "#00BFA5", key: "pl", desc: "los libros, las casas. All plural nouns." },
          { label: "Indefinite", color: "#8D6E63", key: "indef", desc: "un/una. Gender not yet determined from context." },
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
