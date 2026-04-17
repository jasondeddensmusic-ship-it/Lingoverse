// Smart V1→V2 salvage checker that handles compound entries
const fs = require('fs');
const path = require('path');

function readAllV2(v2Paths) {
  let content = '';
  for (const p of v2Paths) {
    if (!fs.existsSync(p)) continue;
    if (fs.statSync(p).isDirectory()) {
      for (const f of fs.readdirSync(p)) {
        if (f.endsWith('.js')) content += '\n' + fs.readFileSync(path.join(p, f), 'utf8');
      }
    } else content += '\n' + fs.readFileSync(p, 'utf8');
  }
  return content;
}

function extractTrgs(content) {
  const set = new Set();
  const trgRe = /(?:type:\s*["']teach["'][^}]*?)(?:trg|nl)\s*:\s*["']([^"']+)["']/g;
  let m;
  while ((m = trgRe.exec(content)) !== null) set.add(m[1].trim());
  return set;
}

// Smart match: handle compounds like "der Arzt / die Ärztin", "ellipsis...", multi-word entries
function smartMatch(trg, v2Content) {
  const lowerV2 = v2Content.toLowerCase();

  // Strip trailing ellipsis
  let clean = trg.replace(/\.\.\.$/, '').replace(/^\s+|\s+$/g, '');

  // Try whole thing as substring
  if (lowerV2.includes(clean.toLowerCase())) return true;

  // If contains " / ", check each part
  if (clean.includes(' / ')) {
    const parts = clean.split(/\s*\/\s*/);
    // At least one part must be in V2
    for (const part of parts) {
      if (part.trim() && lowerV2.includes(part.toLowerCase().trim())) return true;
    }
    return false;
  }

  // If sentence (has spaces + punctuation), try the content words
  if (/[.!?]/.test(clean)) {
    // Strip punctuation, split on spaces
    const words = clean.replace(/[.!?,;]/g, '').split(/\s+/).filter(w => w.length > 3);
    // At least one distinctive word must be in V2
    for (const w of words) {
      if (lowerV2.includes(w.toLowerCase())) return true;
    }
    return false;
  }

  // Comma-separated (like "null, eins, zwei")
  if (clean.includes(',')) {
    const parts = clean.split(',').map(p => p.trim());
    for (const part of parts) {
      if (part && lowerV2.includes(part.toLowerCase())) return true;
    }
    return false;
  }

  // Strip articles
  const stripped = clean.toLowerCase().replace(/^(de|het|een|der|die|das|ein|eine|le|la|les|un|une|el|los|las)\s+/i, '').trim();
  return lowerV2.includes(stripped);
}

function check(code, v1File, v2Paths) {
  if (!fs.existsSync(v1File)) { console.log(`${code}: V1 file missing`); return; }
  const v1Trgs = extractTrgs(fs.readFileSync(v1File, 'utf8'));
  const v2Content = readAllV2(v2Paths);
  const missing = [];
  for (const trg of v1Trgs) {
    if (!smartMatch(trg, v2Content)) missing.push(trg);
  }
  const total = v1Trgs.size;
  const cov = ((total - missing.length) / total * 100).toFixed(1);
  console.log(`\n=== ${code} ===`);
  console.log(`V1: ${total}   Covered: ${total - missing.length} (${cov}%)   Missing: ${missing.length}`);
  if (missing.length > 0 && missing.length <= 50) missing.forEach(m => console.log(`  - ${m}`));
  else if (missing.length > 50) {
    missing.slice(0, 30).forEach(m => console.log(`  - ${m}`));
    console.log(`  ...${missing.length - 30} more`);
  }
}

const base = 'src/data';
check('Dutch',   `${base}/units-dutch.js`,   [`${base}/dutch-v2`]);
check('Korean',  `${base}/units-korean.js`,  [`${base}/korean-v2`]);
check('German',  `${base}/units-german.js`,  [`${base}/german-v2`]);
check('French',  `${base}/units-french.js`,  [`${base}/french-v2`]);
check('Spanish', `${base}/units-spanish.js`, [`${base}/spanish-v2`]);
