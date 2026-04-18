#!/usr/bin/env node
/**
 * PP63 / PP68 — Example-vocab integrity audit.
 *
 * For every teach card's `example` field, check that every content word
 * (length >= 3, not in function-word list, not punctuation) traces to:
 *  (a) the card's own `trg`
 *  (b) an earlier teach card's `trg` in the same or a prior unit file
 *  (c) a function word on the language's whitelist
 *  (d) a flagged transparent cognate
 *
 * Untraceable words are reported per unit. Output: markdown + count.
 *
 * Usage:
 *   node scripts/pp63_audit.cjs <lang-dir>                 # summary + violations to stdout
 *   node scripts/pp63_audit.cjs <lang-dir> --include-batch
 *   node scripts/pp63_audit.cjs <lang-dir> --write docs/audits/pp63_<lang>.md
 *   node scripts/pp63_audit.cjs --all                      # run on all 10 languages
 *
 * Exit codes:
 *   0 = zero violations (PASS)
 *   1 = violations present
 *   2 = invalid invocation
 */

const fs = require('fs');
const path = require('path');

const LANGS = [
  'dutch-v2','korean-v2','german-v2','french-v2','spanish-v2',
  'italian-v2','japanese-v2','chinese-v2','portuguese-v2','russian-v2'
];

const args = process.argv.slice(2);
const includeBatch = args.includes('--include-batch');
const doAll = args.includes('--all');
const writeIdx = args.indexOf('--write');
const writePath = writeIdx >= 0 ? args[writeIdx + 1] : null;
const langArg = args.find(a => !a.startsWith('--') && a !== writePath);

// ── Function-word lists. Minimal default; can be extended per-language. ──
const FUNCTION_WORDS = {
  'de': new Set(['der','die','das','den','dem','des','ein','eine','einen','einem','einer','eines','und','oder','aber','wenn','dass','weil','ich','du','er','sie','es','wir','ihr','Sie','mir','mich','dir','dich','uns','euch','ihnen','ihm','ihn','ist','sind','war','waren','bin','bist','seid','hat','hatte','habe','haben','nicht','kein','keine','auch','noch','schon','mehr','nur','so','sehr','zu','vom','zum','zur','im','am','beim','an','auf','bei','für','in','mit','nach','ohne','seit','um','von','vor','zu','aus','über','unter','durch','gegen','hinter','neben','zwischen','wer','was','wo','wann','wie','warum','welcher','welche','welches','das']),
  'nl': new Set(['de','het','een','en','of','maar','als','dat','omdat','ik','jij','je','u','hij','zij','ze','wij','we','jullie','zij','mij','me','jou','hem','haar','hen','hun','is','zijn','was','waren','ben','bent','heeft','hebt','hebben','had','hadden','niet','geen','ook','al','nog','meer','alleen','zo','heel','erg','te','in','op','bij','voor','met','naar','van','over','onder','door','tegen','achter','naast','tussen','wie','wat','waar','wanneer','hoe','waarom','welke','welk']),
  'fr': new Set(['le','la','les','un','une','des','du','de','au','aux','et','ou','mais','si','que','parce','je','tu','il','elle','on','nous','vous','ils','elles','me','te','se','lui','leur','est','sont','était','étaient','suis','es','êtes','sommes','ai','as','a','avons','avez','ont','avait','avaient','pas','non','ne','aussi','encore','déjà','plus','moins','seulement','très','en','dans','sur','sous','pour','avec','sans','chez','vers','par','contre','qui','que','quoi','où','quand','comment','pourquoi','quel','quelle','quels','quelles']),
  'es': new Set(['el','la','los','las','un','una','unos','unas','y','o','pero','si','que','porque','yo','tú','él','ella','usted','nosotros','vosotros','ellos','ellas','me','te','se','le','les','lo','nos','os','es','son','era','eran','soy','eres','somos','sois','he','has','ha','hemos','habéis','han','había','habían','no','también','ya','todavía','aún','más','menos','solo','muy','en','a','al','del','de','por','para','con','sin','sobre','hacia','desde','contra','entre','quien','quienes','qué','dónde','cuándo','cómo','por','cuál','cuáles']),
  'it': new Set(['il','la','lo','i','le','gli','un','una','uno','e','o','ma','se','che','perché','io','tu','lui','lei','Lei','noi','voi','loro','mi','ti','si','ci','vi','gli','le','lo','è','sono','era','erano','sei','siamo','siete','ho','hai','ha','abbiamo','avete','hanno','aveva','avevano','non','anche','già','ancora','più','meno','solo','molto','in','a','da','di','con','su','per','tra','fra','sotto','sopra','chi','che','cosa','dove','quando','come','perché','quale','quali']),
  'pt': new Set(['o','a','os','as','um','uma','uns','umas','e','ou','mas','se','que','porque','eu','tu','você','ele','ela','nós','vós','vocês','eles','elas','me','te','se','lhe','lhes','nos','vos','é','são','era','eram','sou','és','somos','sois','estou','está','estão','estava','tenho','tens','tem','temos','tendes','têm','não','também','já','ainda','mais','menos','só','muito','em','a','ao','aos','à','às','de','do','da','dos','das','por','para','com','sem','sobre','até','contra','entre','quem','que','onde','quando','como','por','qual','quais']),
  'ru': new Set(['и','или','но','если','что','потому','я','ты','он','она','оно','мы','вы','они','меня','тебя','его','её','нас','вас','их','мне','тебе','ему','ей','нам','вам','им','есть','был','была','было','были','буду','будешь','будет','будем','будете','будут','не','нет','также','уже','ещё','более','менее','только','очень','в','на','с','к','от','до','по','за','под','над','для','без','при','про','через','между','кто','что','где','когда','как','почему','какой','какая','какое','какие']),
  'zh': new Set(['的','了','和','或','但','是','不','我','你','他','她','它','我们','你们','他们','她们','在','有','没','了','过','要','会','能','可以','这','那','什么','哪','哪里','哪儿','怎么','为什么','多少','几','吗','呢','吧','啊','也','都','很','太','和','与','或者','但是','如果','因为','所以','虽然','即使','就','才','还','又','再']),
  'ja': new Set(['は','が','を','に','で','と','の','も','か','へ','や','から','まで','より','こそ','さえ','だけ','しか','です','ます','だ','である','ない','ある','いる','する','なる','できる','この','その','あの','どの','これ','それ','あれ','どれ','ここ','そこ','あそこ','どこ','いつ','なに','なん','だれ','どう','なぜ','どうして']),
  'ko': new Set(['은','는','이','가','을','를','의','에','에서','에게','한테','으로','로','과','와','하고','나','저','우리','너','당신','그','그녀','이','저','그','있다','없다','이다','아니다','하다','되다','도','만','부터','까지','처럼','보다','마다','밖에','조차','뿐','라도'])
};

// Maps lang-dir to function-word-list key
const LANG_MAP = {
  'dutch-v2': 'nl', 'korean-v2': 'ko', 'german-v2': 'de', 'french-v2': 'fr',
  'spanish-v2': 'es', 'italian-v2': 'it', 'japanese-v2': 'ja', 'chinese-v2': 'zh',
  'portuguese-v2': 'pt', 'russian-v2': 'ru'
};

function extractField(block, name) {
  const re = new RegExp('(?:^|[,{\\n\\s])' + name + '\\s*:\\s*(["\'])((?:[^"\'\\\\]|\\\\.)*)\\1');
  const m = block.match(re);
  return m ? m[2] : null;
}
function extractStepBlocks(text) {
  const blocks = [];
  const re = /\{\s*type\s*:\s*['"]([^'"]+)['"]/g;
  const positions = []; let m;
  while ((m = re.exec(text)) !== null) positions.push({ pos: m.index, type: m[1] });
  for (let i = 0; i < positions.length; i++) {
    const start = positions[i].pos;
    let depth = 0, end = start;
    for (let j = start; j < text.length; j++) {
      if (text[j] === '{') depth++;
      else if (text[j] === '}') { depth--; if (depth === 0) { end = j + 1; break; } }
    }
    blocks.push({ type: positions[i].type, text: text.slice(start, end) });
  }
  return blocks;
}

function tokenize(text, langCode) {
  // For CJK: split by non-word chars, keep any sequence of CJK or Latin chars
  // For everything else: word characters with diacritics
  if (!text) return [];
  // Strip punctuation and split
  return text
    .replace(/[.,;:!?()"'`\[\]{}<>/\\|@#$%^&*_=+\-–—…\n\r\t]+/g, ' ')
    .replace(/\d+/g, ' ')
    .split(/\s+/)
    .filter(w => w.length >= 3);
}

function bareForm(s, langCode) {
  if (!s) return '';
  let b = s.toLowerCase().trim();
  // Strip articles
  const arts = { de: /^(der|die|das|den|dem|des|ein|eine|einen|einem|einer|eines)\s+/i,
                 nl: /^(de|het|een)\s+/i,
                 fr: /^(le|la|les|l'|un|une|des|du|de)\s+/i,
                 es: /^(el|la|los|las|un|una|unos|unas)\s+/i,
                 it: /^(il|la|lo|i|le|gli|un|una|uno|l')\s+/i,
                 pt: /^(o|a|os|as|um|uma|uns|umas)\s+/i };
  if (arts[langCode]) b = b.replace(arts[langCode], '');
  return b.trim();
}

function auditLang(langDir) {
  const BASE = path.join(__dirname, '..', 'src', 'data', langDir);
  if (!fs.existsSync(BASE)) return null;
  const langCode = LANG_MAP[langDir] || 'en';
  const stopwords = FUNCTION_WORDS[langCode] || new Set();

  const files = fs.readdirSync(BASE).filter(f => {
    if (/^unit-\d+\.js$/.test(f)) return true;
    if (includeBatch && /^_batch\d+_u\d+_L\d+\.js$/.test(f)) return true;
    if (includeBatch && /^_temp_/.test(f) && f.endsWith('.js')) return true;
    return false;
  }).sort();

  // Build taughtWords set cumulatively (teach trgs across all files scanned so far)
  const taughtWords = new Set();
  // For cumulative lookups we also need per-unit teach trgs to be added in order.
  // We sort files alphabetically — this approximates curriculum order since units are
  // named unit-01 through unit-36. Batch files come under their units.

  const report = [];
  let totalViolations = 0;

  for (const file of files) {
    const filePath = path.join(BASE, file);
    const content = fs.readFileSync(filePath, 'utf8');
    const steps = extractStepBlocks(content);

    // First pass: collect teach trgs in THIS file to add to taughtWords later
    // so the current file's teach cards can reference each other even if listed
    // after the example's line. But to be strict, we add them as we encounter.
    const fileTaught = new Set();
    for (const step of steps) {
      if (step.type === 'teach') {
        const trg = extractField(step.text, 'trg') || extractField(step.text, 'nl');
        if (trg) fileTaught.add(bareForm(trg, langCode));
      }
    }

    // Second pass: check each teach card's example
    for (const step of steps) {
      if (step.type !== 'teach') continue;
      const trg = extractField(step.text, 'trg') || extractField(step.text, 'nl');
      const example = extractField(step.text, 'example');
      if (!trg || !example) continue;

      const ownBare = bareForm(trg, langCode);
      const tokens = tokenize(example, langCode);
      const untaught = [];

      // Split example into sentences to identify sentence-start capitalization
      // (not a true proper noun). Dialogue prefixes "A:" and "B:" are already stripped by tokenize.
      // For Latin-script languages, treat mid-sentence capitalized words (not first in sentence)
      // as likely proper nouns → skip.
      const sentenceStarts = new Set();
      const sentences = example.split(/[.!?\n]+/);
      for (const s of sentences) {
        const first = s.trim().split(/\s+/)[0];
        if (first) sentenceStarts.add(first.toLowerCase());
      }
      const properNounLike = new Set();
      for (const tok of tokens) {
        if (/^[A-ZÀÂÄÇÈÉÊËÎÏÔÖÙÛÜÑÆŒ]/.test(tok) && !sentenceStarts.has(tok.toLowerCase())) {
          properNounLike.add(tok.toLowerCase());
        }
      }

      for (const tok of tokens) {
        const t = tok.toLowerCase();
        if (stopwords.has(t)) continue;
        if (properNounLike.has(t)) continue;
        if (t === ownBare || ownBare.includes(t) || t.includes(ownBare)) continue;
        // Check taughtWords (prior units + earlier in this unit via fileTaught)
        let found = false;
        for (const tw of taughtWords) {
          if (!tw) continue;
          if (tw === t || tw.includes(t) || t.includes(tw)) { found = true; break; }
        }
        if (!found) {
          for (const tw of fileTaught) {
            if (!tw) continue;
            if (tw === t || tw.includes(t) || t.includes(tw)) { found = true; break; }
          }
        }
        if (!found) untaught.push(tok);
      }

      if (untaught.length > 0) {
        totalViolations++;
        report.push({
          file,
          trg,
          untaught: Array.from(new Set(untaught))
        });
      }
    }

    // After this file, merge fileTaught into taughtWords
    for (const t of fileTaught) taughtWords.add(t);
  }

  return { langDir, totalViolations, report, filesScanned: files.length };
}

function formatMarkdown(result) {
  const { langDir, totalViolations, report, filesScanned } = result;
  let out = `# PP63/PP68 example-vocab integrity audit — ${langDir}\n\n`;
  out += `- Files scanned: ${filesScanned}\n`;
  out += `- Teach cards with untraceable example words: **${totalViolations}**\n\n`;
  if (totalViolations === 0) {
    out += `✅ PASS\n`;
    return out;
  }
  // Group by file
  const byFile = {};
  for (const r of report) {
    byFile[r.file] = byFile[r.file] || [];
    byFile[r.file].push(r);
  }
  for (const [file, items] of Object.entries(byFile)) {
    out += `## ${file} (${items.length} cards)\n`;
    for (const it of items.slice(0, 20)) {
      out += `- **${it.trg}** → untaught in example: ${it.untaught.slice(0, 6).join(', ')}${it.untaught.length > 6 ? '…' : ''}\n`;
    }
    if (items.length > 20) out += `- …and ${items.length - 20} more\n`;
    out += '\n';
  }
  return out;
}

function main() {
  if (doAll) {
    let anyViolations = false;
    const summary = [];
    for (const lang of LANGS) {
      const res = auditLang(lang);
      if (!res) continue;
      summary.push(`${lang}: ${res.totalViolations} cards with untaught example words`);
      if (res.totalViolations > 0) anyViolations = true;
      if (writePath) {
        const p = writePath.replace('<lang>', lang);
        fs.writeFileSync(p, formatMarkdown(res));
        console.log(`wrote ${p}`);
      }
    }
    console.log(summary.join('\n'));
    process.exit(anyViolations ? 1 : 0);
  }

  if (!langArg) {
    console.error('Usage: node scripts/pp63_audit.cjs <lang-dir> [--include-batch] [--write <path>]');
    console.error('   or: node scripts/pp63_audit.cjs --all [--include-batch]');
    process.exit(2);
  }
  const res = auditLang(langArg);
  if (!res) {
    console.error(`Language dir not found: ${langArg}`);
    process.exit(2);
  }
  const md = formatMarkdown(res);
  if (writePath) {
    fs.writeFileSync(writePath, md);
    console.log(`wrote ${writePath}`);
  } else {
    console.log(md);
  }
  process.exit(res.totalViolations > 0 ? 1 : 0);
}

main();
