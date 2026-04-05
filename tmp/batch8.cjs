const fs = require('fs');
const data = JSON.parse(fs.readFileSync('tmp/unit-15-filtered.json', 'utf8'));

const translations = [
{english: data[289].english, arabic: 'تُنطق الألمانية في ألمانيا (D) والنمسا (A) وسويسرا (CH). لكن لكل دولة مفرداتها الخاصة، أحياناً حتى للأشياء اليومية.\n\nقشدة: Sahne (D) / Rahm (CH) / Obers (A)\nقشدة مخفوقة: Schlagsahne (D) / Schlagrahm (CH) / Schlagobers (A)\nجزر: Karotte (D-جنوب) / Möhre (D-شمال) / Rübe (D-إقليمي)\nرغيف صغير: Brötchen (D-شمال) / Semmel (D-جنوب، A) / Weggli (CH)\nمربى: Marmelade (D، A) / Konfitüre (CH، D-رسمي)\nرصيف: Bürgersteig (D-شمال) / Gehsteig (D-جنوب، A) / Trottoir (CH)\nدراجة: Fahrrad (D، A) / Velo (CH)\nركن السيارة: parken (D، A) / parkieren (CH)\n\n"Moin!" في هامبورغ مقابل "Hallo" في برلين مقابل "Grüß Gott" في بافاريا مقابل "Grüezi" في سويسرا يُظهر أن حتى التحيات تتباين إقليمياً.'},
{english: data[290].english, arabic: 'لم تتوحد ألمانيا إلا عام 1871. قبل ذلك كانت مئات الدويلات المستقلة، طوّرت كل منها لهجتها ومفرداتها الخاصة. انتهجت النمسا وسويسرا مساراً مستقلاً في وقت أبكر.\n\nالألمانية السويسرية (Schweizerdeutsch) مختلفة عن الألمانية المعيارية لدرجة أن الألمان كثيراً ما لا يفهمونها. الألمانية النمساوية (Österreichisches Deutsch) أقرب لكنها تحتوي على كلمات فريدة كثيرة، خاصة في الطعام.\n\nيقبل امتحان Goethe B1 جميع أشكال الألمانية المعيارية. "Semmel" صحيحة مثل "Brötchen". فهم الأشكال الإقليمية جزء من كفاءة المستوى B1.'},
{english: data[291].english, arabic: 'قياسية في سويسرا. "Rahmkäse" = جبنة كريمية في الألمانية السويسرية.'},
{english: data[292].english, arabic: 'قياسية في سويسرا. "Rahmkäse" = جبنة كريمية في الألمانية السويسرية. في ألمانيا: Sahne. نفس المنتج، دولتان مختلفتان.'},
{english: data[293].english, arabic: 'Schlag + Rahm. على قوائم المقاهي السويسرية حيث تجد Schlagsahne في القوائم الألمانية.'},
{english: data[294].english, arabic: 'في قائمة مقهى سويسري حيث تكتب القائمة الألمانية Schlagsahne، تجد Schlagrahm. نفس المنتج، تقليد مختلف.'},
{english: data[295].english, arabic: 'في هامبورغ تسمع Möhre. في ميونيخ: Karotte.'},
{english: data[296].english, arabic: 'تعلّم Verumius كلمة Karotte أولاً، والآن يسمع Möhre في هامبورغ. في بعض المناطق: "Gelbe Rübe". ثلاث كلمات لنفس الخضروات.'},
{english: data[297].english, arabic: 'لائحة الاتحاد الأوروبي تقول إن مربى غير الحمضيات يجب أن يُسمى Konfitüre. المعيار السويسري.'},
{english: data[298].english, arabic: 'تنص لائحة الاتحاد الأوروبي على أن فقط مربى الحمضيات يُسمى "Marmelade". كل ما عداه هو "Konfitüre" رسمياً. سويسرا اتبعت هذه القاعدة منذ البداية.'},
{english: data[299].english, arabic: 'Schlag + Obers (قشدة، نمساوية). في مقهى فيينا: لا غنى عنها.'},
{english: data[300].english, arabic: 'في مقهى فيينا: "Einen Melange mit Schlagobers, bitte!" في برلين، نفس الطلب هو "Milchkaffee mit Schlagsahne". الجغرافيا اللغوية في العمل.'},
];

const existing = JSON.parse(fs.readFileSync('tmp/translations_batch1.json', 'utf8'));
const all = existing.concat(translations);
fs.writeFileSync('tmp/translations_batch1.json', JSON.stringify(all, null, 2));
console.log('Total so far:', all.length);

// Verify all 301 entries covered
if (all.length === 301) {
  console.log('ALL 301 ENTRIES TRANSLATED');
} else {
  console.log('MISSING:', 301 - all.length);
}
