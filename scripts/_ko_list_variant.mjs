#!/usr/bin/env node
// Usage: node scripts/_ko_list_variant.mjs <prefix-text>
import fs from 'node:fs';
const prefix = process.argv[2];
if (!prefix) { console.error('pass the prefix text'); process.exit(1); }
const byUnit = {};
for (const f of fs.readdirSync('src/data/korean-v2')) {
  if (!f.endsWith('.js')) continue;
  const text = fs.readFileSync('src/data/korean-v2/' + f, 'utf8');
  const re = /\{type:"teach",(?:kind:"[^"]*",)?nl:"([^"]+)",en:"([^"]+)"[\s\S]*?funFact:"((?:[^"\\]|\\.)*)"/g;
  let m;
  while ((m = re.exec(text)) !== null) {
    if (m[3].startsWith(prefix)) {
      byUnit[f] ||= [];
      byUnit[f].push(m[1] + ' | ' + m[2]);
    }
  }
}
Object.keys(byUnit).sort().forEach(u => {
  console.log(`=== ${u} (${byUnit[u].length}) ===`);
  byUnit[u].forEach(h => console.log('  ' + h));
});
