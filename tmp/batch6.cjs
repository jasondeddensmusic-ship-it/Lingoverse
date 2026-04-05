const fs = require('fs');
const data = JSON.parse(fs.readFileSync('tmp/unit-15-filtered.json', 'utf8'));

const translations = [
{english: data[209].english, arabic: 'الشكل المختصر لـ anstatt. يأخذ الجر الرابع.\nStatt des Autos = بدلاً من السيارة.'},
{english: data[210].english, arabic: 'Statt هو الشكل المختصر لـ anstatt. كلاهما صحيح. بوصفه حرف جر يأخذ الجر الرابع. وكجزء من statt...zu يُنشئ جملاً مصدرية تعني "بدلاً من القيام بـ".'},
{english: data[211].english, arabic: 'فعل انعكاسي. بديل رسمي لـ sein للدلالة على الموقع.\nDas Hotel befindet sich am Hafen.'},
{english: data[212].english, arabic: 'أكثر رسمية من sein للتعبير عن المواقع. "Das Museum befindet sich in der Altstadt" يبدو أكثر رسمية. ضروري لإعطاء الاتجاهات وقراءة الخرائط.'},
{english: data[213].english, arabic: 'تأخذ هذه الحروف الخمسة الجرَّ الرابعَ دائماً. ترفع مستوى ألمانيتك من اليومي إلى الاحترافي.\n\n- während (خلال): Während des Meetings (خلال الاجتماع)\n- wegen (بسبب): Wegen des Regens (بسبب المطر)\n- trotz (رغم): Trotz der Kälte (رغم البرد)\n- statt/anstatt (بدلاً من): Statt des Taxis (بدلاً من سيارة الأجرة)\n- innerhalb (خلال/داخل): Innerhalb eines Tages (في غضون يوم واحد)\n\nتعتمد أداة الجر الرابع على الجنس:\n- الأسماء المذكرة والمحايدة تستخدم des، ويأخذ الاسم لاحقة -(e)s.\n- الأسماء المؤنثة والجمع تستخدم der، دون تغيير الاسم.\n\nفي الكلام غير الرسمي، يستخدم الألمان أحياناً الجر الثالث بعد wegen/trotz ("wegen dem Regen")، لكن الكتابة والألمانية المهنية تستلزم الجر الرابع.'},
{english: data[214].english, arabic: 'بعيداً عن الحروف الخمسة الرئيسية، ثمة حروف جر أخرى تأخذ الجر الرابع:\n\naußerhalb = خارج: Außerhalb der Stadt (خارج المدينة)\noberhalb = فوق: Oberhalb des Hafens (فوق الميناء)\nunterhalb = تحت: Unterhalb der Brücke (تحت الجسر)\naufgrund = بناءً على: Aufgrund des Wetters (بسبب الطقس)\nanhand = بواسطة: Anhand der Daten (استناداً إلى البيانات)\n\nالحروف الخمسة الرئيسية (während، wegen، trotz، statt، innerhalb) هي الأكثر شيوعاً والأهم في الامتحانات.'},
{english: data[215].english, arabic: 'من المركّب الكيميائي "benzene". "Bleifrei" = بدون رصاص.'},
{english: data[216].english, arabic: 'سُميت باسم المركّب الكيميائي benzene الذي سُمّي بدوره باسم صمغ شجري. "Super" و"Diesel" هما التسميتان الشائعتان على مضخات الوقود في المحطات الألمانية.'},
{english: data[217].english, arabic: 'تعني أيضاً "ذبابة الخيل". معنى مختلف تماماً بنفس الهجاء.'},
{english: data[218].english, arabic: '"Handbremse" = فرامل اليد، "Bremse ziehen" = سحب الفرامل. الكلمة تعني أيضاً "ذبابة الخيل"، معنى غير ذي صلة تماماً بنفس الهجاء.'},
{english: data[219].english, arabic: 'نفس جذر الكلمة الإنجليزية "boat". فيلم الغواصة الشهير "Das Boot" (1981).'},
{english: data[220].english, arabic: 'جعل فيلم الغواصة الشهير "Das Boot" (1981) هذه الكلمة معروفة دولياً. في هامبورغ، "Boot" يعني عادةً القوارب الصغيرة على بحيرة الألستر.'},
{english: data[221].english, arabic: 'Geh (مشي) + Steig (مسار). نمساوي/جنوب ألماني. في الشمال: "Bürgersteig".'},
{english: data[222].english, arabic: 'Gehsteig (النمسا/الجنوب)، Bürgersteig (الشمال)، Trottoir (سويسرا). ثلاث كلمات لنفس شريط الرصيف. مثال مثالي على المفردات الإقليمية.'},
{english: data[223].english, arabic: 'Verkehr (مرور) + Zeichen (علامة). تضم ألمانيا أكثر من 1,000 نوع مختلف.'},
{english: data[224].english, arabic: 'تضم ألمانيا أكثر من 1,000 Verkehrszeichen مختلفة. يوجد حتى Verkehrszeichenkatalog (كتالوج علامات المرور). لاجتياز امتحان القيادة، عليك معرفة أهم 200 علامة.'},
{english: data[225].english, arabic: 'من "landen" (الهبوط). اللاحقة -ung (مؤنثة دائماً) تحوّل الأفعال إلى أسماء.'},
{english: data[226].english, arabic: '"Notlandung" = هبوط اضطراري، "Mondlandung" = هبوط على القمر. اللاحقة -ung تحوّل الأفعال إلى أسماء مؤنثة: landen/Landung. نمط موثوق.'},
{english: data[227].english, arabic: 'Fund (وجد) + Büro (مكتب). كل مدينة ألمانية لديها واحد.'},
{english: data[228].english, arabic: 'كل مدينة ألمانية لديها Fundbüro. نسيت مظلتك في القطار؟ تحقق من Fundbüro في الهاوبتبانهوف. الألمان بارعون بشكل لافت في تسليم الأشياء المفقودة.'},
{english: data[229].english, arabic: 'في بافاريا والنمسا: Semmel. في شمال ألمانيا: Brötchen.'},
{english: data[230].english, arabic: 'رغيف صغير واحد، أسماء كثيرة: Brötchen (الشمال)، Semmel (بافاريا/النمسا)، Schrippe (برلين)، Weck (الجنوب الغربي)، Weggli (سويسرا). أعظم جدال لغوي في ألمانيا.'},
{english: data[231].english, arabic: 'تخصص بافاري ونمساوي. غير شائع في هامبورغ.'},
{english: data[232].english, arabic: '"Kartoffelknödel" (كرة البطاطس) و"Semmelknödel" (كرة الخبز) تخصصات بافارية/نمساوية. في هامبورغ، من المرجح أن تجد Fischbrötchen.'},
{english: data[233].english, arabic: 'كلمة شمال ألمانيا. في النمسا: "Obers". في سويسرا: "Rahm".'},
{english: data[234].english, arabic: 'Sahne (ألمانيا/الشمال)، Obers (النمسا)، Rahm (سويسرا). نفس المنتج، ثلاث دول، ثلاث كلمات.'},
{english: data[235].english, arabic: 'Schlag (خفق) + Sahne (قشدة). المصطلح الألماني القياسي.'},
{english: data[236].english, arabic: 'في كل قائمة مقهى ألماني بجانب الكعك: "mit Schlagsahne". في النمسا: "Schlagobers". في سويسرا: "Schlagrahm". منتج واحد، ثلاث كلمات.'},
{english: data[237].english, arabic: 'من الألمانية السويسرية "Mus" (هريس). أصبح الآن ركيزة الإفطار الألماني.'},
{english: data[238].english, arabic: 'أصلاً "Birchermüsli"، اخترعه الطبيب السويسري ماكسيميليان بيرشر-بيرينر حوالي عام 1900. أصبح الآن ركيزة الإفطار الألماني. الهجاء السويسري: Müesli.'},
{english: data[239].english, arabic: 'An (على) + schnallen (الإبزيم). منفصل اللاحقة: "Schnall dich an!"'},
{english: data[240].english, arabic: '"Bitte anschnallen!" هي العبارة المكتوبة على كل رحلة جوية ولافتة أوتوبان. يأخذ الألمان حزام الأمان بجدية. غرامة عدم ارتدائه: 30 يورو.'},
{english: data[241].english, arabic: '"Hupen verboten!" = النفخ في البوق ممنوع! لافتة شائعة قرب المستشفيات.'},
{english: data[242].english, arabic: 'يعتبر الألمان النفخ غير الضروري في البوق أمراً فظاً جداً. لافتات "Hupen verboten!" شائعة قرب المستشفيات. الغضب على الطريق بالبوق أمر مرفوض.'},
{english: data[243].english, arabic: 'فعل منتظم. من "Land". كما يُستخدم مجازياً: "Wo bist du gelandet?"'},
{english: data[244].english, arabic: 'يُستخدم أيضاً مجازياً: "Wo bist du gelandet?" = أين انتهى بك الأمر؟ يستخدم "sein" في زمن الماضي التام: "Das Flugzeug ist gelandet".'},
{english: data[245].english, arabic: 'Los (انطلاق) + fahren (قيادة). منفصل اللاحقة. "Los!" = انطلق!'},
{english: data[246].english, arabic: '"Los!" وحدها تعني "انطلق!". يصرخها الألمان في الفعاليات الرياضية. منفصل اللاحقة: "Wir fahren um 8 Uhr los." شائع جداً في الكلام اليومي.'},
{english: data[247].english, arabic: 'Stehen (الوقوف) + bleiben (البقاء). منفصل اللاحقة: "Bleib stehen!"'},
{english: data[248].english, arabic: '"Bleib stehen!" من أكثر الأوامر شيوعاً. تستخدمها الشرطة أيضاً: "Stehenbleiben!" تُستخدم في الحياة اليومية حين يكاد شخص ما يسير نحو خطر.'},
];

const existing = JSON.parse(fs.readFileSync('tmp/translations_batch1.json', 'utf8'));
const all = existing.concat(translations);
fs.writeFileSync('tmp/translations_batch1.json', JSON.stringify(all, null, 2));
console.log('Total so far:', all.length);
