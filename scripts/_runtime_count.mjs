// Runtime count of actual shipped lessons + teach cards per language.
// Loads each language's units-<lang>-v2.js entry and traverses.
import italian from '../src/data/units-italian-v2.js';
import japanese from '../src/data/units-japanese-v2.js';
import korean from '../src/data/units-korean-v2.js';
import dutch from '../src/data/units-dutch-v2.js';
import french from '../src/data/units-french-v2.js';
import spanish from '../src/data/units-spanish-v2.js';
import chinese from '../src/data/units-chinese-v2.js';
import portuguese from '../src/data/units-portuguese-v2.js';
import russian from '../src/data/units-russian-v2.js';
import german from '../src/data/units-german-v2.js';

function count(units) {
  let lessons = 0, teach = 0;
  for (const u of units) {
    for (const l of u.lessons) {
      if (!l) continue;
      lessons++;
      for (const s of (l.steps || [])) {
        if (s && s.type === 'teach') teach++;
      }
    }
  }
  return { units: units.length, lessons, teach };
}

const langs = { german, korean, dutch, french, spanish, italian, japanese, chinese, portuguese, russian };
let total = 0;
for (const [name, data] of Object.entries(langs)) {
  const r = count(data);
  console.log(`${name.padEnd(12)} units=${String(r.units).padStart(3)}  lessons=${String(r.lessons).padStart(4)}  teach=${String(r.teach).padStart(5)}`);
  total += r.teach;
}
console.log(`\nGRAND TOTAL teach cards: ${total}`);
