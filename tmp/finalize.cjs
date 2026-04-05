const fs = require('fs');
const data = JSON.parse(fs.readFileSync('tmp/translations_batch1.json', 'utf8'));

// Validate: all entries have english and arabic
let errors = 0;
data.forEach((e, i) => {
  if (!e.english || !e.arabic) {
    console.log('MISSING field at index', i, e);
    errors++;
  }
  if (e.arabic.includes('—')) {
    console.log('EM-DASH at index', i);
    errors++;
  }
});

if (errors === 0) {
  console.log('Validation OK. Writing output...');
  // Output only english + arabic
  const output = data.map(e => ({ english: e.english, arabic: e.arabic }));
  fs.writeFileSync('tmp/unit-15-notes-ar.json', JSON.stringify(output, null, 2));
  console.log('Written:', output.length, 'entries to tmp/unit-15-notes-ar.json');
} else {
  console.log('ERRORS:', errors);
}
