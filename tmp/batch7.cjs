const fs = require('fs');
const data = JSON.parse(fs.readFileSync('tmp/unit-15-filtered.json', 'utf8'));

const translations = [
{english: data[249].english, arabic: 'من "Tank". "Volltanken" = ملء الخزان بالكامل.'},
{english: data[250].english, arabic: '"Volltanken" = ملء الخزان. كما يُستخدم عامياً: "Energie tanken" = إعادة شحن طاقتك. "Sonne tanken" = الاستمتاع بأشعة الشمس. فعل متعدد الاستخدامات.'},
{english: data[251].english, arabic: 'بادئة غير منفصلة. "Eine rote Ampel überfahren" = تخطي إشارة حمراء.'},
{english: data[252].english, arabic: 'بادئة غير منفصلة: "Er hat die Ampel überfahren" (بدون ge-). "Eine rote Ampel überfahren" = تخطي الإشارة الحمراء. مخالفة خطيرة بغرامات ثقيلة.'},
{english: data[253].english, arabic: 'بادئة غير منفصلة. "Rechts überholen ist verboten" على الأوتوبان.'},
{english: data[254].english, arabic: '"Rechts überholen ist verboten" (التجاوز من اليمين ممنوع) قاعدة أساسية في الأوتوبان. يواجه المخالفون غرامات ثقيلة.'},
{english: data[255].english, arabic: '"Pauschalreise" = رحلة شاملة. من الفرنسية "forfait".'},
{english: data[256].english, arabic: '"Pauschalreise" (الرحلة الشاملة) شائعة جداً في ألمانيا. الألمان من أكثر السياح حماساً في العالم. "Pauschal bezahlen" = الدفع بسعر ثابت.'},
{english: data[257].english, arabic: '"der vordere Teil des Zuges" = الجزء الأمامي من القطار.'},
{english: data[258].english, arabic: 'صيغة التفضيل لـ "vorn" (في الأمام). "Vorderseite" = الواجهة، "Vordertür" = الباب الأمامي، "Vorderrad" = العجلة الأمامية. عنصر تركيبي منتج جداً.'},
{english: data[259].english, arabic: 'Ab (بعيداً/نحو الأسفل) + -wärts (نحو). كما يُستخدم مجازياً: "Es geht abwärts."'},
{english: data[260].english, arabic: 'اللاحقة -wärts تدل على الاتجاه: abwärts (نحو الأسفل)، aufwärts (نحو الأعلى)، rückwärts (للخلف)، vorwärts (للأمام). نمط مفيد.'},
{english: data[261].english, arabic: 'Auf (أعلى) + -wärts. عكس abwärts.'},
{english: data[262].english, arabic: '"Es geht aufwärts!" (الأمور في تحسّن!) تعبير متفائل. عكس "Es geht abwärts". نمط اللاحقة -wärts للاتجاه منتج.'},
{english: data[263].english, arabic: 'عكس "innen" (داخل). "Außenseiter" = شخص على الهامش.'},
{english: data[264].english, arabic: 'بحيرة Außenalster (البحيرة الخارجية) في هامبورغ معلم مشهور. "Außenseiter" (شخص على الهامش) تعني حرفياً "الجالس في الخارج". العكس: "innen" (داخل).'},
{english: data[265].english, arabic: '"Quer durch die Stadt" = عبر المدينة. مرتبطة بالكلمة الإنجليزية "queer".'},
{english: data[266].english, arabic: '"Querstraße" = شارع عرضي. "Quereinstieg" = الدخول من مسار جانبي. مرتبطة بالكلمة الإنجليزية "queer" (التي كانت أصلاً تعني "مائل/غريب").'},
{english: data[267].english, arabic: 'اختصار لـ "herauf". عامي. البادئة rauf- تلتصق بالأفعال.'},
{english: data[268].english, arabic: 'اختصار لـ "herauf" (نحو الأعلى هنا). تستخدم في السجل غير الرسمي. "Raufgehen" = الصعود، "raufklettern" = التسلق للأعلى. البادئة العامية rauf- شائعة جداً في الألمانية المحكية.'},
{english: data[269].english, arabic: 'Rück (للخلف) + -wärts. "Rückwärts einparken" = الركن للخلف.'},
{english: data[270].english, arabic: 'يجب على الألمان إتقان rückwärts einparken (الركن للخلف) لاجتياز امتحان القيادة. "Rückwärtsgang" = الرجوع للخلف. اللاحقة -wärts تدل على الاتجاه.'},
{english: data[271].english, arabic: '"Im Voraus" = مسبقاً. "Geradeaus" = مباشرة للأمام.'},
{english: data[272].english, arabic: '"Im Voraus" (مسبقاً) و"voraus" (إلى الأمام) كلمتان أساسيتان. "Voraussetzung" (شرط مسبق) و"voraussichtlich" (على الأرجح) مبنيتان على نفس الجذر.'},
{english: data[273].english, arabic: 'بعد الاسم + حالة نصب، أو قبل الاسم + حالة جر ثالث/رابع.'},
{english: data[274].english, arabic: 'نحو غير معتاد: "die Straße entlang" (بعد الاسم، نصب) أو "entlang der Straße" (قبل الاسم، جر رابع). كلاهما صحيح.'},
{english: data[275].english, arabic: 'Ent- (بعيداً) + fernen (من fern = بعيد). بادئة غير منفصلة.'},
{english: data[276].english, arabic: 'يُستخدم أيضاً صفةً: "weit entfernt" (بعيد)، "drei Kilometer entfernt" (على بُعد ثلاثة كيلومترات). البادئة الغير منفصلة ent- تعني "بعيداً عن".'},
{english: data[277].english, arabic: 'غير منتظم: fließt، floss، ist geflossen. مرتبط بالكلمة الإنجليزية "flow".'},
{english: data[278].english, arabic: 'هامبورغ موجودة لأن الإلبه fließt نحو بحر الشمال. التصريف غير المنتظم: fließt، floss، ist geflossen. مرتبط بالإنجليزية "flow" و"flood".'},
{english: data[279].english, arabic: 'الألمانية السويسرية لـ "parken". اللاحقة -ieren تتبع نمط الاستعارة الفرنسي/اللاتيني.'},
{english: data[280].english, arabic: 'في ألمانيا والنمسا: "parken". في سويسرا: "parkieren". اللاحقة -ieren تتبع نمط الاستعارة الفرنسي/اللاتيني الشائع في الألمانية السويسرية.'},
{english: data[281].english, arabic: 'Über (فوق) + queren (العبور). بادئة غير منفصلة. أكثر رسمية من "gehen über".'},
{english: data[282].english, arabic: 'غير منفصلة: "Er überquert die Straße." أكثر رسمية من "über die Straße gehen". اسم المفعول الماضي: "überquert" (بدون ge-).'},
{english: data[283].english, arabic: 'Um (حول) + drehen (الدوران). منفصل اللاحقة. كما يُستخدم انعكاسياً: "sich umdrehen".'},
{english: data[284].english, arabic: 'منفصل اللاحقة: "Dreh dich um!" (استدر!). انعكاسي: "sich umdrehen". Verumius dreht sich um und sieht Lukas auf dem Bahnsteig.'},
{english: data[285].english, arabic: 'Um (تبادل) + tauschen (المبادلة). منفصل اللاحقة.'},
{english: data[286].english, arabic: '"Euro in Dollar umtauschen" = تحويل اليورو إلى دولار. "Umtausch nur innerhalb von 14 Tagen" = الاستبدال خلال 14 يوماً فقط. سياسة البيع بالتجزئة الألمانية القياسية.'},
{english: data[287].english, arabic: 'متعددة الاستخدامات. تظهر "Zeug" في مركّبات كثيرة: Fahrzeug، Werkzeug، Spielzeug.'},
{english: data[288].english, arabic: '"Zeug" من أكثر عناصر التركيب إنتاجاً في الألمانية: Fahrzeug (مركبة)، Flugzeug (طائرة)، Werkzeug (أداة)، Spielzeug (لعبة)، Feuerzeug (ولاعة). تعني حرفياً "أداة لـ...".'},
];

const existing = JSON.parse(fs.readFileSync('tmp/translations_batch1.json', 'utf8'));
const all = existing.concat(translations);
fs.writeFileSync('tmp/translations_batch1.json', JSON.stringify(all, null, 2));
console.log('Total so far:', all.length);
