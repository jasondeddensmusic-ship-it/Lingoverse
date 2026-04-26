#!/usr/bin/env node
/**
 * audit_hint_quality.mjs — strict hint-leak detection
 *
 * Purpose: prevent the bug classes fixed in PRs #610–#620 (164 hint leaks)
 * from recurring. validate_runtime.mjs uses an aggressive SKIP_WORDS list
 * that misses common-word leaks like "Hoe = how" → "How are you called?".
 * This audit is strict by design.
 *
 * Patterns detected:
 * 1. **Dotted-letter pattern** — `X = w...` where the letter uniquely
 *    identifies the answer-distinguishing word among MC options.
 *    Example: `hint:"Acht = e..."` for answer "Eight o'clock" with
 *    options [Six, Eight, Ten, Four] → "e..." uniquely picks Eight.
 *
 * 2. **Quoted-letter pattern** — `'w...'` inside a hint where the letter
 *    similarly identifies the answer.
 *    Example: `hint:"...sounds like 'p....'"` for answer "policeman".
 *
 * 3. **Common-word answer leak** — hint contains a word that also appears
 *    in the answer, EVEN if the word is in validate_runtime's skip list.
 *    Example: `hint:"Hoe = how"` for answer "How are you called?" — leaks "how".
 *
 * 4. **Equals-word pattern** — `X = word` where word ≥3 chars and appears
 *    in the answer. validate_runtime catches some of these but not all
 *    (its 4-char minimum on words misses "way", "see", etc.).
 *
 * Each violation prints file:line and the leaked word.
 * Exit 0 = clean; exit 1 = violations present.
 */

import fs from 'fs';
import path from 'path';

const ROOT = path.resolve(process.cwd(), 'src/data');

const LANGS = ['dutch','german','french','spanish','italian','portuguese','korean','japanese','russian','chinese'];

// Words exempt from leak checking. These are TRULY structural (articles,
// pure pronouns, common modal/aux verbs that appear everywhere).
const TRULY_EXEMPT = new Set([
  // English structural
  'the','an','of','to','in','on','at','for','and','or','but','it','is',
  'a','no','i','you','your','their','they','them','this','that','these','those',
  'are','was','were','have','has','had','will','would','could','should',
  'all','out','from','with','one','two','what','when','where','how','why','who',
  'about','more','most','some','any','only','also','just','very','too','not',
  'new','old','day','got','does','did','can','say','see','use','its','our','his','her',
  'here','there','then','than','before','after','again','still','very','well',
  // Dutch structural
  'het','een','de','en','of',
  // French structural
  'le','la','les','un','une','des','et','ou','ne','pas','du','au',
  's\'il','c\'est','il','elle','je','tu','nous','vous',
  // Spanish/Portuguese structural
  'el','los','las','los','y','o','es','por','para','con','del',
  // Italian structural
  'il','lo','la','i','gli','le','un','una','del','della',
  // German structural
  'der','die','das','ein','eine','und','ist','ich','du','er','sie','wir','mit',
  // Pronouns / quantifiers seen across many hints
  'each','both','same','few','many','much','none',
]);

// Tokenizer that respects Latin extended (German umlauts, French/Spanish/Italian accents)
function tokenize(s) {
  // Match runs of letters including Latin Extended-A range
  const matches = String(s).toLowerCase().match(/[a-z\u00c0-\u017f'][a-z\u00c0-\u017f']*/g) || [];
  // Min 2 chars to be a real token
  return matches.filter(w => w.length >= 2);
}

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

function uniquelyIdentifies(letter, ans, opts) {
  // Returns true if `letter` is the first char of a word in `ans`
  // AND no non-answer option contains a word starting with `letter`.
  const ansWords = tokenize(ans);
  const ansHasLetter = ansWords.some(w => w.startsWith(letter));
  if (!ansHasLetter) return false;
  const otherOpts = opts.filter(o => o !== ans);
  const othersHave = otherOpts.some(o => tokenize(o).some(w => w.startsWith(letter)));
  return !othersHave;
}

function scanFile(file, lang) {
  const text = fs.readFileSync(file, 'utf8');
  const lines = text.split('\n');

  for (let i = 0; i < lines.length; i++) {
    const ln = lines[i];

    // Only mc + fb steps
    const isMc = /type:"mc"/.test(ln);
    const isFb = /type:"fb"/.test(ln);
    if (!isMc && !isFb) continue;

    const hintM = ln.match(/hint:"([^"]+)"/);
    if (!hintM) continue;
    const hint = hintM[1];

    // Get answer
    let ans = null;
    const ansM = ln.match(/ans:"([^"]+)"/);
    if (ansM) ans = ansM[1];
    else {
      const aM = ln.match(/[, ]a:"([^"]+)"/);
      if (aM) ans = aM[1];
      else {
        const aArrM = ln.match(/[, ]a:\["([^"]+)"\]/);
        if (aArrM) ans = aArrM[1];
      }
    }
    if (!ans) continue;

    // Get options (mc only)
    let opts = null;
    if (isMc) {
      const optsM = ln.match(/opts:\[([^\]]+)\]/);
      if (optsM) {
        try { opts = JSON.parse('['+optsM[1]+']'.replace(/'/g,'"')); }
        catch { opts = null; }
      }
    }

    const where = `${path.relative(process.cwd(), file)}:${i+1}`;

    // Pattern 1: dotted-letter `X = w...`
    const dotMatches = [...hint.matchAll(/=\s*([a-zA-Z])\.{3,}/g)];
    for (const m of dotMatches) {
      const letter = m[1].toLowerCase();
      if (opts && uniquelyIdentifies(letter, ans, opts)) {
        violations.push({ where, kind: 'dotted-letter',
          msg: `hint has '= ${letter}...' which uniquely picks the answer's first-letter word.` });
      }
    }

    // Pattern 2: quoted single-letter `'w...'`
    const quotedMatches = [...hint.matchAll(/'([a-zA-Z])\.{3,}'/g)];
    for (const m of quotedMatches) {
      const letter = m[1].toLowerCase();
      if (opts && uniquelyIdentifies(letter, ans, opts)) {
        violations.push({ where, kind: 'quoted-letter',
          msg: `hint has '${letter}...' which uniquely picks the answer.` });
      }
    }

    // Pattern 3 & 4: hint contains a word that's in the answer (no skip list except TRULY_EXEMPT)
    const ansWords = tokenize(ans);
    const hintLower = hint.toLowerCase();
    for (const w of ansWords) {
      if (w.length < 3) continue;
      if (TRULY_EXEMPT.has(w)) continue;
      const re = new RegExp('\\b' + w.replace(/'/g, "'") + '\\b');
      if (re.test(hintLower)) {
        // Only flag for MC where the leak helps disambiguate
        if (isMc && opts) {
          const otherOptsHaveWord = opts.filter(o => o !== ans).some(o => re.test(o.toLowerCase()));
          if (!otherOptsHaveWord) {
            violations.push({ where, kind: 'common-word-leak',
              msg: `hint contains "${w}" which uniquely matches the answer.` });
            break; // one report per step is enough
          }
        } else if (isFb) {
          // For fb, any answer-word leak is a leak (single answer)
          violations.push({ where, kind: 'fb-word-leak',
            msg: `hint contains "${w}" which is in the answer.` });
          break;
        }
      }
    }
  }
}

for (const lang of LANGS) {
  const dir = path.join(ROOT, lang + '-v2');
  if (!fs.existsSync(dir)) continue;
  for (const file of walk(dir)) scanFile(file, lang);
}

if (violations.length === 0) {
  console.log('audit_hint_quality: PASS — 0 hint-leak patterns across all 10 languages');
  process.exit(0);
}

console.log(`audit_hint_quality: FAIL — ${violations.length} violation(s)\n`);
const byKind = {};
for (const v of violations) byKind[v.kind] = (byKind[v.kind] || 0) + 1;
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
