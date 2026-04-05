const fs = require('fs');
const data = JSON.parse(fs.readFileSync('tmp/unit-15-filtered.json', 'utf8'));

const translations = [
{english: data[126].english, arabic: 'بعض الأسماء المذكرة تضيف -(e)n في كل الحالات الإعرابية ما عدا حالة الرفع. هذه هي أسماء N-Deklination.\n\nأسماء N-Deklination الشائعة:\nder Herr، der Kollege، der Junge، der Kunde، der Name، der Student، der Patient، der Nachbar\n\nحالة الرفع: der Herr / der Kollege\nحالة النصب: den Herrn / den Kollegen\nحالة الجر الثالث: dem Herrn / dem Kollegen\nحالة الجر الرابع: des Herrn / des Kollegen\n\nكيف تتعرف عليها:\n- الأسماء المذكرة المنتهية بـ -e (Kollege، Junge، Kunde)\n- اللواحق: -ent (Student، Patient)، -ant (Praktikant)، -ist (Tourist)\n- الكلمة Herr\n\nمن القصة: "dem Herrn Kollegen" يستخدم كلا اسمَي N-Deklination في حالة الجر الثالث!'},
{english: data[127].english, arabic: 'N-Deklination بقية من تصريف الأسماء الضعيفة في الألمانية القديمة. كانت هذه الأسماء أصلاً أسماء مذكرة "ضعيفة" تأخذ -n في جميع الحالات غير المرفوعة. على مر القرون، فقدت معظم الأسماء هذا النمط، لكن نحو 200 اسم شائع احتفظت به.\n\nالقاعدة الأساسية: إن لم تكن متأكداً من أن اسماً مذكراً يتبع N-Deklination، تحقق إن كان ينتهي بـ -e. معظم الأسماء المذكرة المنتهية بـ -e (der Junge، der Kollege، der Kunde، der Nachbar) تتبع N-Deklination.'},
{english: data[128].english, arabic: 'أسماء N-Deklination تضيف -(e)n في كل الحالات ما عدا حالة الرفع. Herr تضيف -n فقط، Kollege تضيف -n.'},
{english: data[129].english, arabic: 'رسمية وكلاسيكية بعض الشيء. "Speisekarte" = قائمة الطعام.'},
{english: data[130].english, arabic: '"Speisekarte" (قائمة الطعام)، "Speisesaal" (قاعة الطعام)، "Speisewagen" (عربة المطعم). تظهر كلمة Speise في كل مكان في سياقات تناول الطعام الرسمية.'},
{english: data[131].english, arabic: 'Speise + Wagen (عربة). قهوة ساخنة وكاريوورست على متن القطار بسرعة 250 كيلومتراً في الساعة.'},
{english: data[132].english, arabic: 'تحتوي قطارات ICE على "Bordrestaurant" (مطعم على المتن)، لكن القطارات القديمة كانت تسميه Speisewagen. قهوة ساخنة بسرعة 250 كيلومتراً في الساعة من صغائر نعم ألمانيا.'},
{english: data[133].english, arabic: 'Vor (قبل) + Speise (طبق). الطبق قبل الطبق الرئيسي.'},
{english: data[134].english, arabic: 'قوائم طعام المطاعم الألمانية مرتبة: Vorspeise (مقبلات)، Hauptgericht (الطبق الرئيسي)، Nachspeise (حلوى). نمط Vor/Nach يجعله منطقياً.'},
{english: data[135].english, arabic: 'Nach (بعد) + Speise (طبق). الطبق الذي يأتي بعد الرئيسي.'},
{english: data[136].english, arabic: 'منطق التركيب الألماني: قبل = Vor-، بعد = Nach-. Vorspeise/Nachspeise، Vorname/Nachname، Vormittag/Nachmittag. نمط بالغ الوضوح.'},
{english: data[137].english, arabic: 'من الفرنسية "desservir" (إزالة أدوات المائدة). أكثر رقياً من Nachspeise.'},
{english: data[138].english, arabic: 'في قوائم هامبورغ الراقية تجد "Dessert". في Kneipe التقليدية تجد "Nachspeise". اختيار الكلمة يدل على مستوى رسمية المطعم.'},
{english: data[139].english, arabic: 'في الألمانية، Menü تعني وجبة كاملة محددة، وليست قائمة الأطباق. قائمة الأطباق هي "Speisekarte".'},
{english: data[140].english, arabic: 'das Menü تعني وجبة كاملة (مقبلات + رئيسي + حلوى)، وليست قائمة الأطباق. القائمة هي "Speisekarte". هذه الكلمة المزيفة تُربك كثيراً من الناطقين بالإنجليزية.'},
{english: data[141].english, arabic: 'لكل منطقة Braten مميزة: Schweinebraten، Sauerbraten.'},
{english: data[142].english, arabic: '"Schweinebraten" (لحم خنزير مشوي) هو الطبق القومي البافاري. "Sauerbraten" (لحم مخلّل مطهو) أصله من منطقة الراين. لكل منطقة Braten مميزة.'},
{english: data[143].english, arabic: 'Hack (مفروم) + Fleisch (لحم). في شمال ألمانيا يُسمى أيضاً "Mett".'},
{english: data[144].english, arabic: 'في شمال ألمانيا (هامبورغ!)، لحم الخنزير النيء المفروم على الخبز يُسمى "Mettbrötchen". في النمسا، يُسمى اللحم المفروم "Faschiertes". نفس المنتج، دول مختلفة.'},
{english: data[145].english, arabic: 'تصغير كلمة "Huhn". اللاحقة -chen تجعل الاسم محايداً ولطيفاً.'},
{english: data[146].english, arabic: 'اللاحقة -chen تجعل الأسماء محايدة دائماً: das Mädchen (الفتاة)، das Hühnchen (الدجاجة)، das Brötchen (الخبزة الصغيرة). في كل سوبرماركت ألماني Brathähnchen محمصة.'},
{english: data[147].english, arabic: 'من "Würze" (التوابل). جمعها: Gewürze.'},
{english: data[148].english, arabic: 'كانت منطقة Speicherstadt (حي المستودعات) في هامبورغ تخزّن التوابل من أنحاء العالم لقرون. Gewürzmuseum (متحف التوابل) لا يزال موجوداً هناك حتى اليوم.'},
{english: data[149].english, arabic: 'من اللاتينية "acetum". يحب الألمان الخل على السلطات.'},
{english: data[150].english, arabic: '"Essig und Öl" (خل وزيت) هو صلصة السلطة الألمانية القياسية. كذلك: "Es ist Essig!" (عامياً: انتهى الأمر/خراب). كلمة متعددة الاستخدامات.'},
{english: data[151].english, arabic: 'من الجرمانية الأولى "*hunagaz". مرتبطة بالكلمة الإنجليزية "honey".'},
{english: data[152].english, arabic: 'غالباً ما يتضمن فطور الألمان Honig على الخبز. "Honigkuchen" (كعك العسل) تخصص عيد الميلاد. ألمانيا أكبر مستهلك للعسل في أوروبا.'},
{english: data[153].english, arabic: 'من الفرنسية "sauce". تُكتب بـ ß في الألمانية (بدون c).'},
{english: data[154].english, arabic: '"Bratensoße" (صلصة اللحم) ضرورية مع كل Braten. مطاعم السمك في هامبورغ مشهورة بـ Dillsoße (صلصة الشبت). الكلمة أصلها فرنسي.'},
{english: data[155].english, arabic: 'من الفرنسية "carotte". في شمال ألمانيا: "Möhre".'},
{english: data[156].english, arabic: 'ثلاث كلمات لخضروات واحدة: Karotte (جنوب)، Möhre (شمال/هامبورغ)، gelbe Rübe (بعض المناطق). المفردات الإقليمية الألمانية في مثال واحد.'},
{english: data[157].english, arabic: 'اختصار: Limo. في ألمانيا، "Limo" تعني أي مشروب غازي حلو.'},
{english: data[158].english, arabic: 'في ألمانيا، "Limo" تعني أي مشروب غازي حلو، ليس فقط نكهة الليمون. طلب "eine Limo" في أي Kneipe يجلب لك مشروباً غازياً.'},
{english: data[159].english, arabic: 'مؤسسة الوجبات السريعة في ألمانيا. كاريوورست، دونر، Fischbrötchen.'},
{english: data[160].english, arabic: 'Imbiss هو مؤسسة الوجبات السريعة في ألمانيا. في كل زاوية واحد. في النمسا، تُسمى الوجبة الخفيفة "Jause". في هامبورغ، نجمة Imbiss هو Fischbrötchen.'},
{english: data[161].english, arabic: 'غير رسمية، مريحة، تركّز على البيرة. حي سانت باولي في هامبورغ يشتهر بها.'},
{english: data[162].english, arabic: 'يشتهر حي St. Pauli في هامبورغ بـ Kneipen أسطورية. "Kneipe" توحي بالأجواء غير الرسمية والمريحة التي تمحورت حول البيرة. الأماكن الأرقى تُسمى "Bar" أو "Lounge".'},
{english: data[163].english, arabic: 'أعلى مديح للطعام في الألمانية اليومية. من "lecken" (اللعق).'},
{english: data[164].english, arabic: '"Das ist lecker!" هي المديح الألماني الشامل للطعام. شيء لذيذ لدرجة أنك تريد أن تلعق الطبق. من "lecken" (لعق).'},
{english: data[165].english, arabic: 'من "Salz" (ملح). اللاحقة -ig تحوّل الأسماء إلى صفات.'},
{english: data[166].english, arabic: 'قرب هامبورغ من البحر يعني هواءً مالحاً وطعاماً مالحاً. اللاحقة -ig تحوّل الأسماء إلى صفات: Salz/salzig، Hunger/hungrig، Durst/durstig.'},
{english: data[167].english, arabic: 'مثل الإنجليزية. من أسهل الصفات الألمانية للناطقين بالإنجليزية.'},
{english: data[168].english, arabic: '"Milder Käse" (جبن خفيف)، "mildes Wetter" (طقس معتدل)، "milde Strafe" (عقوبة مخففة). من أسهل الكلمات الألمانية للناطقين بالإنجليزية.'},
];

const existing = JSON.parse(fs.readFileSync('tmp/translations_batch1.json', 'utf8'));
const all = existing.concat(translations);
fs.writeFileSync('tmp/translations_batch1.json', JSON.stringify(all, null, 2));
console.log('Total so far:', all.length);
