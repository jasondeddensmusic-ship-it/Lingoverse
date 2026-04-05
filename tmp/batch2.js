const fs = require('fs');
const data = JSON.parse(fs.readFileSync('tmp/unit-15-filtered.json', 'utf8'));

const translations = [
{english: data[46].english, arabic: 'من "bauen" (البناء). البادئة Ge- تُنشئ اسماً جمعياً.'},
{english: data[47].english, arabic: 'البادئة Ge- تُنشئ أسماء جمعية: Gebäude (مبنى)، Gepäck (أمتعة)، Gebirge (سلسلة جبال). فيلهارمونية الإلبه هي أشهر Gebäude في هامبورغ.'},
{english: data[48].english, arabic: 'من اللاتينية "turris". برج ميشيل (كنيسة القديس ميخائيليس) هو معلم هامبورغ البارز.'},
{english: data[49].english, arabic: 'برج ميشيل في هامبورغ (Turm كنيسة القديس ميخائيليس) هو المعلم البارز للمدينة. Fernsehturm برلين يبلغ ارتفاعه 368 متراً. الكلمة Turm مرتبطة بالكلمة الإنجليزية "tower".'},
{english: data[50].english, arabic: 'أحد أكثر العناصر المركّبة إنتاجاً في الألمانية.'},
{english: data[51].english, arabic: 'تظهر "Hof" في مركّبات كثيرة: Bahnhof (محطة قطار)، Bauernhof (مزرعة)، Innenhof (فناء داخلي)، Friedhof (مقبرة). جذر واحد، مركّبات لا حصر لها.'},
{english: data[52].english, arabic: 'Vor (أمام/قبل) + Ort (مكان). تعني حرفياً "المكان الأمامي".'},
{english: data[53].english, arabic: 'تمتد ضواحي هامبورغ Vororte على طول نهر الإلبه. تختلف الضواحي الألمانية عن الأمريكية: أكثر كثافة، مع نقل عام أفضل ومخابز محلية.'},
{english: data[54].english, arabic: 'مرتبطة بالكلمة الإنجليزية "over" عبر الجرمانية الأولى.'},
{english: data[55].english, arabic: 'يقع حي HafenCity في هامبورغ على Ufer der Elbe (ضفة الإلبه). "Am Ufer" (على الضفة) من أجمل العبارات في مفردات هامبورغ.'},
{english: data[56].english, arabic: 'من اللاتينية "costa" (ضلع/جانب). اشتهرت بـ Wattwanderung (المشي في مناطق المد والجزر).'},
{english: data[57].english, arabic: 'تشتهر ساحل بحر الشمال الألماني بـ Wattwanderung (المشي في مناطق المد والجزر). عند انحسار المد، يمكنك المشي لكيلومترات داخل البحر. تراث عالمي لليونسكو منذ عام 2009.'},
{english: data[58].english, arabic: 'من اليونانية "Okeanos". أسهم ارتباط هامبورغ بالمحيط الأطلسي في عظمتها.'},
{english: data[59].english, arabic: 'أسهم ارتباط هامبورغ بالمحيط الأطلسي عبر نهر الإلبه في جعلها من أعظم مدن التجارة الأوروبية. كلمة "Übersee" (ما وراء البحار) متجذرة بعمق في هوية هامبورغ.'},
{english: data[60].english, arabic: 'من اللاتينية "distantia". أكثر رسمية من "Entfernung".'},
{english: data[61].english, arabic: 'تُستخدم Distanz في السياقات المهنية والعلمية. في الكلام اليومي، يُفضّل الألمان Entfernung.'},
{english: data[62].english, arabic: 'من "entfernen" (الابتعاد). أكثر شيوعاً في الحياة اليومية من Distanz.'},
{english: data[63].english, arabic: 'Entfernung مشتقة من ent- (بعيداً) + fernen (من fern = بعيد). "In kurzer Entfernung" = على مسافة قريبة. أكثر شيوعاً في الكلام اليومي من Distanz.'},
{english: data[64].english, arabic: 'من "Stadt" (مدينة). الصيغة الصفية لكلمة Stadt.'},
{english: data[65].english, arabic: 'يختلف الطابع الحضري لهامبورغ اختلافاً حاداً عن ريف شلسفيغ-هولشتاين شمال المدينة. التباين بين الحضر والريف من السمات المميزة لألمانيا.'},
{english: data[66].english, arabic: 'مثل الإنجليزية. تُنطق "ray-gee-oh-NAHL".'},
{english: data[67].english, arabic: 'التنوع الإقليمي في ألمانيا من سماتها المميزة. من التحيات إلى أنواع الخبز إلى الفكاهة: لكل Region نكهتها الخاصة.'},
{english: data[68].english, arabic: 'من الفرنسية "passager". تُستخدم لركاب السفن والطائرات والقطارات.'},
{english: data[69].english, arabic: 'في سويسرا، يُسمى رصيف القطار "Perron" (من الفرنسية)، لا "Bahnsteig". يحتوي الألمانية السويسرية على كثير من الكلمات المستعارة من الفرنسية.'},
{english: data[70].english, arabic: 'الصيغة المؤنثة. تنطبق اللاحقة -in على جميع أسماء الأشخاص.'},
{english: data[71].english, arabic: 'يتبع الزوج Passagier/Passagierin نفس نمط -in كـ Fahrer/Fahrerin. نمط منتظم ومنتج.'},
{english: data[72].english, arabic: 'مستعارة من الإنجليزية. تُستخدم لمضيفي الطيران الذكور وبحارة السفن.'},
{english: data[73].english, arabic: 'مستعارة من الإنجليزية لكن تُنطق بحرف R الألماني. تُستخدم على السفن والطائرات. يحلّ محلها تدريجياً بدائل محايدة جنسياً في الألمانية الحديثة.'},
{english: data[74].english, arabic: 'من الإنجليزية. يحلّ محلها تدريجياً "Flugbegleiterin".'},
{english: data[75].english, arabic: '"Flugbegleiterin" (مرافقة الطيران، مؤنث) هي البديل الحديث لـ Stewardess. يعكس هذا التحول جهود الألمانية المستمرة لتحديث الألقاب الوظيفية المرتبطة بالجنس.'},
{english: data[76].english, arabic: 'اختصار لـ "Lastkraftwagen" (LKW). الكلمة اليومية للشاحنة.'},
{english: data[77].english, arabic: 'المصطلح الرسمي هو LKW (Lastkraftwagen)، لكن الجميع يقول Laster في الكلام اليومي. على الأوتوبان، حد سرعة الLaster هو 80 كيلومتراً في الساعة.'},
{english: data[78].english, arabic: 'من اللاتينية "transportare". يتعامل ميناء هامبورغ مع 130 مليون طن من البضائع سنوياً.'},
{english: data[79].english, arabic: 'يتعامل ميناء هامبورغ مع 130 مليون طن من البضائع سنوياً. "Öffentlicher Nahverkehr" (النقل العام المحلي) أكثر شيوعاً من "öffentlicher Transport" في الكلام اليومي.'},
{english: data[80].english, arabic: 'فعل منتظم بلاحقة -ieren من الفرنسية/اللاتينية.'},
{english: data[81].english, arabic: 'الأفعال المنتهية بـ -ieren (transportieren، organisieren، telefonieren) منتظمة دائماً ولا تأخذ ge- في اسم المفعول الماضي: transportiert، لا getransportiert.'},
{english: data[82].english, arabic: '"dichter Nebel" = ضباب كثيف. كما تُستخدم عامياً بمعنى "سكران" (غير رسمي).'},
{english: data[83].english, arabic: '"Dicht besiedelt" (كثيف السكان) يصف وسط مدينة هامبورغ. تعني الكلمة أيضاً "محكم" (الإناء dicht) وبالعامية "سكران".'},
{english: data[84].english, arabic: 'من الفرنسية/الإنجليزية. اللاحقة -ismus تدل على مفاهيم مجردة، وهي مذكرة دائماً.'},
{english: data[85].english, arabic: 'اللاحقة -ismus مذكرة دائماً: Tourismus، Kapitalismus، Optimismus. تدل على مفاهيم مجردة مستعارة عبر اللاتينية/الفرنسية/الإنجليزية.'},
];

const existing = JSON.parse(fs.readFileSync('tmp/translations_batch1.json', 'utf8'));
const all = existing.concat(translations);
fs.writeFileSync('tmp/translations_batch1.json', JSON.stringify(all, null, 2));
console.log('Total so far:', all.length);
