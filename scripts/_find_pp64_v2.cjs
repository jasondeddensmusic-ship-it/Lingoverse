#!/usr/bin/env node
// Use the validator's exact matching logic to find PP64-gap teach cards.
'use strict';
const fs = require('fs');
const path = require('path');

const lang = process.argv[2] || 'korean-v2';
const dir = path.join('src', 'data', lang);

const ARTICLE_STRIP = /^(de|het|een|le|la|l'|les|un|une|el|los|las|der|die|das|ein|eine|il|i|gli|lo|uno|o|os|as|um|uma|ein|eine|-s|-es)\s+/i;

// Mirror scripts/validate_all.cjs logic as closely as possible.
const files = fs.readdirSync(dir).filter(f => f.startsWith('unit-') && f.endsWith('.js')).sort();

for (const f of files) {
  const content = fs.readFileSync(path.join(dir, f), 'utf8');
  const teachTrgs = new Set();
  const quizzedWords = new Set();

  // Simulate per-unit collection. First gather teach trgs.
  const teachMatcher = /type:\s*["']teach["'][^}]*?trg:\s*["']([^"']+)["']/g;
  let m;
  while ((m = teachMatcher.exec(content)) !== null) {
    teachTrgs.add(m[1]);
  }

  // Collect quizzed: mc opts+ans, fb opts+a (scalar/array), match trg, drag_fill blanks values.
  const mcAns = /ans:\s*["']([^"']+)["']/g;
  while ((m = mcAns.exec(content)) !== null) quizzedWords.add(m[1]);
  const optsMatcher = /opts:\s*\[([^\]]+)\]/g;
  while ((m = optsMatcher.exec(content)) !== null) {
    const items = m[1].match(/["']([^"']+)["']/g) || [];
    for (const it of items) quizzedWords.add(it.slice(1, -1));
  }
  const fbAScalar = /\ba:\s*["']([^"']+)["']/g;
  while ((m = fbAScalar.exec(content)) !== null) quizzedWords.add(m[1]);
  const fbAArray = /\ba:\s*\[([^\]]+)\]/g;
  while ((m = fbAArray.exec(content)) !== null) {
    const items = m[1].match(/["']([^"']+)["']/g) || [];
    for (const it of items) quizzedWords.add(it.slice(1, -1));
  }
  const matchPairs = /pairs:\s*\[([^\]]+)\]/g;
  while ((m = matchPairs.exec(content)) !== null) {
    const trgItems = (m[1].match(/trg:\s*["']([^"']+)["']/g) || [])
      .map(x => x.match(/["']([^"']+)["']/)[1]);
    for (const it of trgItems) quizzedWords.add(it);
  }
  const blanks = /blanks:\s*\{([^}]+)\}/g;
  while ((m = blanks.exec(content)) !== null) {
    const vals = (m[1].match(/["']\d+["']:\s*["']([^"']+)["']/g) || [])
      .map(x => x.match(/["']\d+["']:\s*["']([^"']+)["']/)[1]);
    for (const it of vals) quizzedWords.add(it);
  }

  for (const trg of teachTrgs) {
    const bare = trg.toLowerCase().replace(ARTICLE_STRIP, '').replace(/[!?.,;:]/g, '').trim();
    let tested = false;
    for (const q of quizzedWords) {
      const qLow = q.toLowerCase();
      if (qLow.includes(bare) || bare.includes(qLow)) { tested = true; break; }
    }
    if (!tested) {
      console.log(`${f}: ${trg}`);
    }
  }
}
