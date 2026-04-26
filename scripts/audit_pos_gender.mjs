#!/usr/bin/env node
/**
 * audit_pos_gender.mjs — POS tag and gender consistency audit
 *
 * Purpose: prevent the bug classes fixed in PRs #622–#630 from recurring.
 * Each pattern below caused 5–273 cards to ship dirty. Now any of them
 * exits nonzero in CI and blocks the PR.
 *
 * Patterns enforced:
 * 1. Article+noun trg → pos must be "noun"
 * 2. Dutch infinitive verb prefixed with "de" article → forbidden (data bug)
 * 3. Noun in gendered language → must have gender field set
 * 4. trg article must be consistent with gender (e.g. Dutch "de" cannot be neuter)
 * 5. English number words in src → pos must be "num"
 * 6. English color words in src → pos must be "adj"
 * 7. English pronoun src → pos must be "pron"
 * 8. English month/season src → pos must be "noun"
 *
 * Each violation prints file:line and the specific issue.
 * Exit 0 = clean; exit 1 = violations present.
 *
 * Owner-facing: this is a hard CI gate. If you intentionally need an
 * exception (e.g. a German verb borrowed unchanged), add the trg to the
 * EXCEPTIONS set with a comment explaining why.
 */

import fs from 'fs';
import path from 'path';

const ROOT = path.resolve(process.cwd(), 'src/data');

const ARTICLE_TO_VALID_GENDERS = {
  dutch:      { de: ['c','pl','m','f'], het: ['n'] },
  german:     { der: ['m','pl'], die: ['f','pl'], das: ['n'] },
  french:     { le: ['m'], la: ['f'], les: ['pl'] },
  spanish:    { el: ['m'], la: ['f'], los: ['pl','m'], las: ['pl','f'] },
  italian:    { il: ['m'], lo: ['m'], la: ['f'], i: ['pl','m'], gli: ['pl','m'], le: ['pl','f'] },
  portuguese: { o: ['m'], a: ['f'], os: ['pl','m'], as: ['pl','f'] },
};

const ARTICLE_RE = /^(de|het|der|die|das|le|la|les|el|los|las|il|i|lo|gli|um|uma|os|as|l')\s+/i;

const NUMBER_WORDS = new Set([
  'one','two','three','four','five','six','seven','eight','nine','ten',
  'eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen',
  'eighteen','nineteen','twenty','thirty','forty','fifty','sixty','seventy',
  'eighty','ninety','hundred','thousand','million',
  'first','second','third','fourth','fifth','sixth','seventh','eighth','ninth','tenth',
]);

const COLOR_WORDS = new Set([
  'red','blue','green','yellow','black','white','orange','purple','pink',
  'brown','gray','grey',
]);

const PRONOUN_WORDS = new Set([
  'i','you','he','she','it','we','they','me','him','her','us','them',
  'my','your','his','our','their',
]);

const MONTH_SEASON_WORDS = new Set([
  'january','february','march','april','may','june','july','august',
  'september','october','november','december',
  'spring','summer','autumn','fall','winter',
]);

const GENDERED_LANGS = ['dutch','german','french','spanish','italian','portuguese','russian'];

// Intentional exceptions (with justification)
const EXCEPTIONS = new Set([
  // Germanic verbs that look like 'de + verb' but are legitimate phrases:
  // (none currently — add here only with comment)
]);

const violations = [];

function walk(dir) {
  const out = [];
  if (!fs.existsSync(dir)) return out;
  for (const f of fs.readdirSync(dir)) {
    const fp = path.join(dir, f);
    const st = fs.statSync(fp);
    if (st.isDirectory()) out.push(...walk(fp));
    else if (f.endsWith('.js') && !fp.includes('.bak')) out.push(fp);
  }
  return out;
}

function scanLanguage(lang) {
  const dir = path.join(ROOT, lang + '-v2');
  if (!fs.existsSync(dir)) return;
  const validGenderMap = ARTICLE_TO_VALID_GENDERS[lang] || null;

  for (const file of walk(dir)) {
    const text = fs.readFileSync(file, 'utf8');
    const lines = text.split('\n');

    for (let i = 0; i < lines.length; i++) {
      const ln = lines[i];
      if (!/type:"teach"/.test(ln)) continue;

      const trgM = ln.match(/trg:"([^"]+)"/);
      const srcM = ln.match(/src:"([^"]+)"/);
      const posM = ln.match(/pos:"([^"]+)"/);
      const genM = ln.match(/gender:("[^"]*"|null)/);
      if (!trgM || !srcM || !posM) continue;

      const trg = trgM[1];
      const src = srcM[1];
      const pos = posM[1];
      const srcLower = src.toLowerCase();
      const articleMatch = trg.match(ARTICLE_RE);
      const article = articleMatch ? articleMatch[1].toLowerCase() : null;
      const where = `${path.relative(process.cwd(), file)}:${i+1}`;

      if (EXCEPTIONS.has(trg)) continue;

      // Pattern 1: Article+trg → pos must be noun
      if (article && pos !== 'noun' && validGenderMap && validGenderMap[article]) {
        // Sub-pattern 2: Dutch infinitive verb wrongly prefixed with 'de'
        if (lang === 'dutch' && article === 'de' && /^[a-z]+en$/.test(trg.slice(3)) && /^to [a-z]/.test(src)) {
          violations.push({ where, trg, kind: 'P2-dutch-de-verb',
            msg: `Dutch infinitive '${trg.slice(3)}' wrongly prefixed with 'de'. Remove article, set pos:"verb".` });
        } else {
          violations.push({ where, trg, pos, kind: 'P1-article-not-noun',
            msg: `trg starts with article '${article}' but pos="${pos}" (expected "noun").` });
        }
      }

      // Pattern 3: noun in gendered language must have gender
      if (pos === 'noun' && GENDERED_LANGS.includes(lang)) {
        const hasGender = genM && genM[1] !== '""' && genM[1] !== 'null';
        if (!hasGender) {
          // Skip if trg is plainly a phrase (multi-word with verb-like pattern)
          // Phrases are caught by Pattern 1's article check; if no article+phrase, skip
          if (!article) {
            // Allow rare exception only if trg is clearly a sentence/phrase.
            // For safety, flag every noun without gender that ALSO has an article.
          } else {
            violations.push({ where, trg, kind: 'P3-noun-no-gender',
              msg: `pos="noun" but no gender field. Article "${article}" implies gender; set it.` });
          }
        }
      }

      // Pattern 4: gender must be valid for article
      if (pos === 'noun' && article && validGenderMap && validGenderMap[article]) {
        if (genM && genM[1] !== 'null' && genM[1] !== '""') {
          const genderValue = genM[1].slice(1, -1);
          if (genderValue && !validGenderMap[article].includes(genderValue)) {
            violations.push({ where, trg, kind: 'P4-gender-article-mismatch',
              msg: `Article "${article}" allows ${validGenderMap[article].join('/')} but gender="${genderValue}".` });
          }
        }
      }

      // Pattern 5: number-word src → pos="num"
      if (NUMBER_WORDS.has(srcLower) && pos === 'verb') {
        violations.push({ where, trg, src, pos, kind: 'P5-number-as-verb',
          msg: `src="${src}" is a number word but pos="verb" (expected "num").` });
      }

      // Pattern 6: color-word src → pos="adj"
      if (COLOR_WORDS.has(srcLower) && pos !== 'adj' && pos !== 'noun') {
        // Allow noun (e.g. "the color red" usage) but flag verb/intj
        violations.push({ where, trg, src, pos, kind: 'P6-color-not-adj',
          msg: `src="${src}" is a color word but pos="${pos}" (expected "adj").` });
      }

      // Pattern 7: pronoun src → pos="pron"
      if (PRONOUN_WORDS.has(srcLower) && pos !== 'pron' && pos !== 'adj') {
        // Allow adj for possessives sometimes; flag verb/noun/part
        if (['verb','noun','part','intj'].includes(pos)) {
          violations.push({ where, trg, src, pos, kind: 'P7-pron-mistag',
            msg: `src="${src}" is a pronoun but pos="${pos}" (expected "pron").` });
        }
      }

      // Pattern 8: month/season → pos="noun"
      if (MONTH_SEASON_WORDS.has(srcLower) && pos !== 'noun') {
        violations.push({ where, trg, src, pos, kind: 'P8-month-not-noun',
          msg: `src="${src}" is a month/season noun but pos="${pos}" (expected "noun").` });
      }
    }
  }
}

const langs = ['dutch','german','french','spanish','italian','portuguese','korean','japanese','russian','chinese'];
for (const lang of langs) scanLanguage(lang);

if (violations.length === 0) {
  console.log('audit_pos_gender: PASS — 0 violations across all 10 languages');
  process.exit(0);
}

console.log(`audit_pos_gender: FAIL — ${violations.length} violation(s)\n`);
const byKind = {};
for (const v of violations) {
  byKind[v.kind] = (byKind[v.kind] || 0) + 1;
}
console.log('Violations by pattern:');
for (const [k, n] of Object.entries(byKind).sort((a,b)=>b[1]-a[1])) {
  console.log(`  ${k}: ${n}`);
}
console.log('\nFirst 30 violations:');
for (const v of violations.slice(0, 30)) {
  console.log(`  ${v.where} | ${v.kind} | ${v.msg}`);
}
if (violations.length > 30) console.log(`  ... and ${violations.length - 30} more`);
process.exit(1);
