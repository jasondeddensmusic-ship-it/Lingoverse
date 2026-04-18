// Count Japanese A2 teach card examples with <3 turns
const fs = require('fs');
const DIR = 'src/data/japanese-v2';

let twoTurn = 0, threePlus = 0, perFile = {};
for (let u = 7; u <= 12; u++) {
  const f = `${DIR}/unit-${String(u).padStart(2,'0')}.js`;
  if (!fs.existsSync(f)) continue;
  const c = fs.readFileSync(f, 'utf8');
  const re = /example:"((?:[^"\\]|\\.)*?)"/g;
  let m, count2 = 0, count3 = 0, list2 = [];
  while ((m = re.exec(c)) !== null) {
    const ex = m[1].replace(/\\n/g, '\n');
    const turns = (ex.match(/[AB]:/g) || []).length;
    if (turns > 0 && turns <= 2) { count2++; list2.push(ex.slice(0, 60)); }
    else if (turns >= 3) count3++;
  }
  twoTurn += count2;
  threePlus += count3;
  perFile[`unit-${u}`] = { twoTurn: count2, threePlus: count3, sample: list2.slice(0, 2) };
}
console.log(JSON.stringify(perFile, null, 2));
console.log('Total 2-turn:', twoTurn, '3+ turn:', threePlus);
