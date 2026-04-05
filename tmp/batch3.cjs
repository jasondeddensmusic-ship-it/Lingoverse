const fs = require('fs');
const data = JSON.parse(fs.readFileSync('tmp/unit-15-filtered.json', 'utf8'));

const translations = [
{english: data[86].english, arabic: 'في الإنجليزية تقول "the man\'s book" أو "the book of the man". تستخدم الألمانية حالة الجر الرابع (Genitiv).\n\nالمذكر/المحايد: غيّر أداة التعريف إلى "des" وأضف -(e)s للاسم.\nالمؤنث/الجمع: غيّر أداة التعريف إلى "der"، يبقى الاسم دون تغيير.\n\nمذكر: der Mann يصبح des Mannes (للرجل)\nمؤنث: die Frau يصبح der Frau (للمرأة)\nمحايد: das Kind يصبح des Kindes (للطفل)\nجمع: die Kinder يصبح der Kinder (للأطفال)\n\nأمثلة من القصة:\n"der Leiter der Abteilung" = رئيس القسم\n"der Name des Kollegen" = اسم الزميل\n"die Atmosphäre des Hafens" = أجواء الميناء'},
{english: data[87].english, arabic: 'في الكلام غير الرسمي، يتجنب كثير من الألمان الجر الرابع ويستخدمون "von + دتيف":\n"das Buch von dem Mann" بدلاً من "das Buch des Mannes".\nلكن في الكتابة والسياقات المهنية ومع حروف جر مثل "während"، يبقى الجر الرابع ضرورياً. تستخدم شمال ألمانيا (هامبورغ!) الجر الرابع أكثر من الجنوب.\n\nالأسماء أحادية المقطع تأخذ -es: des Mannes، des Kindes.\nالأسماء متعددة المقاطع تأخذ -s فقط: des Hafens، des Gebäudes.'},
{english: data[88].english, arabic: 'مذكر ومحايد: des/eines + اسم + -(e)s. مؤنث وجمع: der + اسم دون تغيير.'},
{english: data[89].english, arabic: 'طريقتان للتعبير عن الملكية:\n\n1. اسم + s: Peters Auto = سيارة بيتر. بدون أبوستروف!\n2. جر الأداة: das Auto des Mannes.\n\nلا تخلط بينهما: Des Peters Auto (خطأ). Peters Auto (صح).\n\nالـ "Deppenapostroph" (أبوستروف الجهل): Peter\'s Auto خاطئ نحوياً.\nجر الأسماء الألمانية يأتي بدون أبوستروف.\n\nاستثناء: الأسماء المنتهية بـ -s أو -x أو -z تستخدم أبوستروفاً:\nMax\' Auto، Hans\' Buch (أو: das Auto von Max)\n\nينطبق هذا أيضاً على أسماء الأماكن: Berlins Museen، Hamburgs Hafen.'},
{english: data[90].english, arabic: 'Gegen (ضد) + Stand (وقوف). شيء تواجهه.'},
{english: data[91].english, arabic: '"Persönliche Gegenstände" (الأغراض الشخصية) إعلان تسمعه في كل قطار ألماني. الكلمة تعني حرفياً شيئاً "واقفاً في مواجهتك".'},
{english: data[92].english, arabic: 'من "schmecken" (التذوق). تعني أيضاً الحس الجمالي.'},
{english: data[93].english, arabic: '"Guter Geschmack" تعني حسن التذوق في الطعام والحس الجمالي معاً. "Geschmacklos" (بلا طعم) تعمل بالطريقة ذاتها: رديء المذاق أو مبتذل.'},
{english: data[94].english, arabic: 'من "geschwind" (سريع). كلمة شهيرة تتألف من 17 حرفاً.'},
{english: data[95].english, arabic: 'على الأوتوبان، تُعلَّم المقاطع بلا حد للسرعة بـ "Keine Geschwindigkeitsbegrenzung". هذه الكلمة وحدها مثال بارع على التركيب الألماني المتقن.'},
{english: data[96].english, arabic: 'Geschwindigkeit + Beschränkung (تقييد). تتألف من 30 حرفاً.'},
{english: data[97].english, arabic: 'هذه الكلمة هي ما يجعل الألمانية مشهورة بمركّباتها الطويلة. تُنشر على لافتات الطرق: "50" داخل دائرة حمراء. معظم الألمان يقولون "Tempolimit" في المحادثة.'},
{english: data[98].english, arabic: 'من "reservieren". اللاحقة -ung مؤنثة دائماً.'},
{english: data[99].english, arabic: '"Haben Sie eine Reservierung?" هو ما يسأله كل فندق ومطعم. في القطارات، تدفع إضافياً مقابل "Sitzplatzreservierung" (حجز مقعد).'},
{english: data[100].english, arabic: 'Rück (للخلف) + Fahrt (رحلة). "Hin- und Rückfahrt" = رحلة ذهاب وإياب.'},
{english: data[101].english, arabic: 'على تذاكر القطار، "einfach" تعني ذهاباً فقط و"hin und zurück" تعني ذهاباً وإياباً. الRückfahrt دائماً هي الرحلة نحو البيت.'},
{english: data[102].english, arabic: 'Rund (دائري) + Fahrt (رحلة). جولة Hafenrundfahrt في هامبورغ أيقونية.'},
{english: data[103].english, arabic: 'جولة Hafenrundfahrt (جولة الميناء) في هامبورغ هي أكثر الأنشطة السياحية شعبية في المدينة. تتنقل قوارب صغيرة بين سفن الحاويات الضخمة.'},
{english: data[104].english, arabic: 'Um (حول) + Leitung (توجيه). لافتات صفراء تقودك حول أعمال البناء.'},
{english: data[105].english, arabic: 'على الطرق الألمانية، لافتات "Umleitung" الصفراء تقودك حول أعمال البناء. يثق الألمان بهذه اللافتات تماماً، حتى حين يبدو التحويل طويلاً بشكل غير معقول.'},
{english: data[106].english, arabic: 'Um (تبادل) + Tausch (مقايضة). سياسة تجزئة قياسية.'},
{english: data[107].english, arabic: '"Umtausch nur mit Kassenbon" (الاستبدال بالإيصال فقط) هي السياسة المعتادة في تجارة التجزئة الألمانية. بلا إيصال، لا استبدال، بلا استثناءات.'},
{english: data[108].english, arabic: 'Vor (قبل) + Fahrt (قيادة). علامة المعين الأصفر تعني أن لديك أولوية المرور.'},
{english: data[109].english, arabic: '"Vorfahrt beachten!" (أعطِ الأولوية!) من أهم علامات الطرق. علامة المعين الأصفر تعني أن لديك Vorfahrt. ضرورية للقيادة في ألمانيا.'},
{english: data[110].english, arabic: 'من "halten" (التوقف/الإمساك). في الحافلات والقطارات: "Nächster Halt..."'},
{english: data[111].english, arabic: '"Nächster Halt" (المحطة التالية) هي العبارة الأكثر تكراراً في النقل العام الألماني. كذلك: "Halt! Stehenbleiben!" في أفلام الأكشن.'},
{english: data[112].english, arabic: 'أوتوبان ألمانيا: مشهورة بغياب حد السرعة وبازدحام مروري ملحمي.'},
{english: data[113].english, arabic: '"Im Stau stehen" (الوقوف في ازدحام مروري) تجربة وطنية ألمانية. يُصدر ADAC (نادي السيارات الألماني) تحديثات Stau باستمرار، خاصة في عطلات نهاية الأسبوع.'},
{english: data[114].english, arabic: 'Tank + Stelle (مكان). تعمل أيضاً كمحلات راحة. تفتح حتى وقت متأخر.'},
{english: data[115].english, arabic: 'محطات الوقود الألمانية (Tankstellen) تعمل أيضاً كمحلات راحة. بعد الساعة الثامنة مساءً، هي في الغالب المحلات الوحيدة المفتوحة. "Tanken" = التزود بالوقود. "Volltanken" = ملء الخزان بالكامل.'},
{english: data[116].english, arabic: 'تُستخدم أيضاً مجازياً: "Das war eine Panne" = كان ذلك خطأً فادحاً.'},
{english: data[117].english, arabic: '"Eine Panne haben" تعمل لكل من أعطال السيارة والأخطاء المحرجة. من الفرنسية "panne". ADAC هو المساعدة على الطريق في ألمانيا، مثل AAA.'},
{english: data[118].english, arabic: 'من الإيطالية "tempo". "Tempo 30" تعني منطقة بحد سرعة 30 كيلومتراً في الساعة.'},
{english: data[119].english, arabic: '"Tempo" أيضاً اسم علامة تجارية ألمانية مشهورة للمناديل. "Tempo" في ألمانيا تعني مناديل الورق مثلما تعني Kleenex في الولايات المتحدة.'},
{english: data[120].english, arabic: 'من الفرنسية "salon". "Friseursalon" = صالون تصفيف شعر.'},
{english: data[121].english, arabic: 'احتفظت الكلمة بنطقها الفرنسي في الألمانية. "Friseursalon" (صالون شعر)، "Kosmetiksalon" (صالون تجميل)، "Nagelsalon" (صالون أظافر). جميعها من الفرنسية.'},
{english: data[122].english, arabic: '"Eilt!" على الوثائق تعني "عاجل!". مرتبطة بالكلمة الإنجليزية "zeal".'},
{english: data[123].english, arabic: '"Es eilt" (إنه عاجل) يظهر على الوثائق الرسمية. مرتبطة بالإنجليزية "zeal" عبر الجرمانية الأولى. "Eilzustellung" = التوصيل السريع.'},
{english: data[124].english, arabic: 'من الإنجليزية "stop". فعل منتظم. يُستخدم أيضاً في توقيت الرياضة.'},
{english: data[125].english, arabic: '"Die Zeit stoppen" تعني قياس الوقت بساعة إيقاف. "Stopp!" كتعجب تعني "انتظر!"'},
];

const existing = JSON.parse(fs.readFileSync('tmp/translations_batch1.json', 'utf8'));
const all = existing.concat(translations);
fs.writeFileSync('tmp/translations_batch1.json', JSON.stringify(all, null, 2));
console.log('Total so far:', all.length);
