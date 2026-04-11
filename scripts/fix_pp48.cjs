#!/usr/bin/env node
/**
 * Fix PP48 violations: convert fb steps with 2+ blanks to drag_fill.
 * fb = single blank {1} only. drag_fill = multi-blank.
 */
const fs = require('fs');
const path = require('path');

const dirs = ['spanish-v2', 'korean-v2'];

for (const dirName of dirs) {
  const dir = path.join(__dirname, '..', 'src', 'data', dirName);
  const files = fs.readdirSync(dir).filter(f => /^unit-\d+\.js$/.test(f));
  let fixed = 0;

  for (const file of files) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Find fb steps with multiple blanks
    content = content.replace(/\{type:"fb"((?:[^}]|\n)*?)\}/g, (match, inner) => {
      const sMatch = inner.match(/s:"([^"]*)"/);
      if (!sMatch) return match;
      const s = sMatch[1];
      const blanks = s.match(/\{[0-9]+\}/g);
      if (!blanks || blanks.length <= 1) return match;

      // Convert to drag_fill: change type, convert a:[] to blanks:{}, keep opts as pool
      console.log(`  ${dirName}/${file}: Converting fb with ${blanks.length} blanks to drag_fill`);
      const converted = match.replace('type:"fb"', 'type:"drag_fill"');
      // Convert a:["word1","word2"] to blanks:{"1":"word1","2":"word2"}
      const aMatch = inner.match(/a:\[([^\]]*)\]/);
      if (aMatch) {
        const items = [];
        const itemRe = /['"]([^'"]*)['"]/g;
        let m;
        while ((m = itemRe.exec(aMatch[1])) !== null) items.push(m[1]);
        const blanksObj = items.map((item, i) => `"${i+1}":"${item}"`).join(',');
        const result = converted
          .replace(/a:\[[^\]]*\]/, `blanks:{${blanksObj}}`)
          .replace(/opts:\[/, 'pool:[');
        modified = true;
        fixed++;
        return result;
      }
      return match;
    });

    if (modified) {
      fs.writeFileSync(filePath, content);
    }
  }
  if (fixed > 0) console.log(`${dirName}: ${fixed} fb→drag_fill conversions`);
}
console.log('PP48 fixes complete.');
