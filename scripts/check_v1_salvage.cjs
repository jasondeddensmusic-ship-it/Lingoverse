// Compare V1 teach card trgs to V2 teach card trgs for each language
const fs = require('fs');
const path = require('path');

// Recursive file reader for a directory
function readDir(dir) {
  const out = {};
  if (!fs.existsSync(dir)) return out;
  for (const f of fs.readdirSync(dir)) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isFile() && full.endsWith('.js')) out[f] = fs.readFileSync(full, 'utf8');
  }
  return out;
}

// Extract all teach target words (nl or trg) from a content string
function extractTrgs(content) {
  const set = new Set();
  const trgRe = /(?:type:\s*["']teach["'][^}]*?)(?:trg|nl)\s*:\s*["']([^"']+)["']/g;
  let m;
  while ((m = trgRe.exec(content)) !== null) set.add(m[1].trim());
  return set;
}

function check(langCode, v1File, v2Paths) {
  const v1Content = fs.existsSync(v1File) ? fs.readFileSync(v1File, 'utf8') : '';
  const v1Trgs = extractTrgs(v1Content);

  // Collect all V2 content
  let v2Content = '';
  for (const p of v2Paths) {
    if (fs.existsSync(p)) {
      if (fs.statSync(p).isDirectory()) {
        const files = readDir(p);
        for (const [name, body] of Object.entries(files)) v2Content += '\n' + body;
      } else {
        v2Content += '\n' + fs.readFileSync(p, 'utf8');
      }
    }
  }

  // For each V1 trg, check if it appears anywhere in V2 content (as substring)
  const missing = [];
  for (const trg of v1Trgs) {
    // Strip Dutch/German articles for matching
    const bare = trg.toLowerCase().replace(/^(de|het|een|der|die|das|ein|eine|le|la|les|un|une|el|los|las)\s+/i, '').trim();
    if (!v2Content.toLowerCase().includes(bare)) missing.push(trg);
  }

  const total = v1Trgs.size;
  const coverage = ((total - missing.length) / total * 100).toFixed(1);
  console.log(`\n=== ${langCode} ===`);
  console.log(`V1 teach cards: ${total}`);
  console.log(`Covered in V2:  ${total - missing.length} (${coverage}%)`);
  console.log(`MISSING:        ${missing.length}`);
  if (missing.length > 0 && missing.length <= 50) {
    console.log('Missing items:');
    missing.forEach(m => console.log(`  - ${m}`));
  } else if (missing.length > 50) {
    console.log('Missing items (first 30):');
    missing.slice(0, 30).forEach(m => console.log(`  - ${m}`));
    console.log(`  ... and ${missing.length - 30} more`);
  }
}

// Language checks
const base = 'src/data';
const archive = '.claude/archive/v1-legacy';
// All V1 files archived 2026-04-18. Checkers read from archive paths.
check('Dutch',   `${archive}/units-dutch.js`,   [`${base}/dutch-v2`]);
check('Korean',  `${archive}/units-korean.js`,  [`${base}/korean-v2`]);
check('German',  `${archive}/units-german.js`,  [`${base}/german-v2`]);
check('French',  `${archive}/units-french.js`,  [`${base}/french-v2`]);
check('Spanish', `${archive}/units-spanish.js`, [`${base}/spanish-v2`]);
