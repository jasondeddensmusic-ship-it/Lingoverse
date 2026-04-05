import json

with open('tmp/unit-16-notes-filtered.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

print(f'Total entries: {len(data)}')

arabic = [None] * 348

# 0-9
arabic[0] = 'اسم مؤنث. Bohren (للحفر) + Maschine (آلة).\nالأداة المحورية في كل نزاع بين جيران ألمان.'
arabic[1] = 'في ألمانيا، يُعدّ استخدام Bohrmaschine يوم الأحد أو خلال Ruhezeit (ساعات الهدوء) مخالفةً جسيمة. النزاعات بين الجيران بسبب آلات الحفر موضوع كلاسيكي محبوب في المسلسلات الكوميدية الألمانية.'
arabic[2] = 'يشمل كل شيء من شجار صغير إلى نزاع قانوني.\nEinen Streit haben = الدخول في جدال.'
arabic[3] = 'من الألمانية العليا القديمة strit (معركة). تغطي الكلمة كل شيء من شجار بين عاشقين إلى نزاع قانوني. تُسمع عبارة Einen Streit haben في كل مبنى سكني ألماني.'
arabic[4] = 'مرتبطة بـ arg (سيء). مشكلة وإزعاج وغضب في كلمة واحدة.\nÄrger machen = إثارة المشاكل.'
arabic[5] = 'مرتبطة بـ arg (سيء/شديد). Der Ärger هو المشكلة والإزعاج والغضب مجتمعةً في كلمة واحدة. تجعل نقاط الأوملاوت منها صوتاً كالتذمر نفسه.'
arabic[6] = 'مستعارة من اللاتينية conflictus (ضربة معاً).\nقد يكون Streit صغيراً؛ أما Konflikt فهو بنيوي.'
arabic[7] = 'مستعارة من اللاتينية conflictus (ضربة معاً). يستخدمها الألمان للنزاعات الجدية. قد يكون Streit صغيراً؛ أما Konflikt فهو بنيوي. السياسة المكتبية والعلاقات الدولية وحروب الجيران.'
arabic[8] = 'Gute Laune = مزاج جيد. Schlechte Laune = مزاج سيء.\nLaunisch = متقلب المزاج.'
arabic[9] = 'من اللاتينية luna (القمر). فكرة أن المزاج يتغير كأطوار القمر. Launisch تعني متقلب المزاج. يتتبع الألمان الحالة المزاجية كتوقعات الطقس.'

# 10-19
arabic[10] = 'من Stimme (الصوت). المزاج الذي تخلقه مجموعة أو غرفة.\nالاستخدام الشائع: كان الجو رائعاً.'
arabic[11] = 'من Stimme (الصوت). المزاج الذي تخلقه مجموعة أو غرفة معاً. مراجعات الحفلات وتقييمات الأمسيات والمعنويات في المكتب.'
arabic[12] = 'الجمع: Nerven. Du gehst mir auf die Nerven = أنت تضايقني / تُزعج أعصابي.'
arabic[13] = 'Du gehst mir auf die Nerven هي جملة الشكوى الألمانية بامتياز. مستعارة من اللاتينية nervus (وتر). أعصابك هي أسلاك الصبر.'
arabic[14] = 'Keine Sorge! = لا قلق! Sich Sorgen machen = القلق.\nمؤنثة، كمعظم الأسماء العاطفية المجردة.'
arabic[15] = 'Keine Sorge! (لا قلق!) كلمة مطمئنة. Sich Sorgen machen يستخدم الصيغة الانعكاسية. يُسمي الألمان مخاوفهم بدقة.'
arabic[16] = 'Vor (أمام) + Wurf (رمية). كأنك ترمي شيئاً أمام شخص ما.\nJemandem einen Vorwurf machen = اتهام شخص ما.'
arabic[17] = 'Vor (أمام) + Wurf (رمية). كأنك ترمي شيئاً أمام شخص. Jemandem einen Vorwurf machen هي الصيغة المعيارية. Vorwürfe تتطاير في كل Streit.'
arabic[18] = 'Vor (قبل) + Schrift (كتابة). شيء مكتوب مسبقاً.\nDie Hausordnung هي Vorschrift.'
arabic[19] = 'Vor (قبل) + Schrift (كتابة). شيء مكتوب مسبقاً. يشتهر الألمان بـ Vorschriften الخاصة بهم. Hausordnung هي Vorschrift. وكذلك لائحة Ruhezeit.'

# 20-29
arabic[20] = 'من verbieten (حظر). Verbot مطلق لا استثناء فيه.\nRauchverbot = حظر التدخين. Parkverbot = حظر الوقوف.'
arabic[21] = 'من verbieten (حظر). Verbot مطلق لا استثناء فيه. Rauchverbot (حظر التدخين)، Parkverbot (حظر الوقوف). تواجه Bohrmaschine يوم الأحد حظراً غير رسمي.'
arabic[22] = 'Zur Strafe = عقوبةً. Geldstrafe = غرامة مالية.\nHaftstrafe = حكم بالسجن.'
arabic[23] = 'Geldstrafe = غرامة مالية. Haftstrafe = حكم بالسجن. قد يؤدي انتهاك Ruhezeit الذي تسبب فيه Verumius إلى Geldstrafe.'
arabic[24] = 'من Wut (غضب شديد). أقوى من ärgerlich.\nWütend werden = الاستشاط غضباً.'
arabic[25] = 'من Wut (غضب شديد). أقوى من ärgerlich. Wütend werden تعني الاستشاط غضباً. هنا يتصاعد Streit.'
arabic[26] = 'من Ärger. يصف الشخص المتضايق أو الشيء المُزعج.\nالاستخدام الشائع: الوضع مزعج.'
arabic[27] = 'يصف الشخص المتضايق أو ما يسبب الإزعاج. Das ist ärgerlich هي الشكوى الألمانية الهادئة قبل أن تبلغ الأمور حد wütend.'
arabic[28] = 'Im Ernst? = بجدية؟ وهو أيضاً اسم أول شائع.\nالاستخدام الشائع: الوضع خطير.'
arabic[29] = 'Im Ernst? (بجدية؟) من مفردات الحياة اليومية. وهو أيضاً اسم أول شائع (Ernst). Eine ernste Angelegenheit (مسألة جدية).'

# 30-39
arabic[30] = 'Sei still! = اصمت! Stilles Wasser = ماء غير غازي.\nStille Nacht = ليلة هادئة.'
arabic[31] = 'Sei still! (اصمت!) هي ما يسمعه كل طفل ألماني. وأيضاً: Stille Nacht (ليلة هادئة) وStilles Wasser (ماء هادئ). الصمت ذهب في ألمانيا.'
arabic[32] = 'شاذ: schrie، geschrien. من الجذر ذاته للإنجليزية shriek.\nSchrei nicht so! = لا تصرخ هكذا!'
arabic[33] = 'شاذ: schrie، geschrien. من الجذر ذاته للإنجليزية shriek. تتردد Schrei nicht so! عبر جدران الشقق.'
arabic[34] = 'شاذ: schwieg، geschwiegen. نقيض schreien.\nSchweigen ist Gold = الصمت من ذهب.'
arabic[35] = 'شاذ: schwieg، geschwiegen. نقيض schreien. Schweigen ist Gold هو المثل الذي يتجاهله Verumius بحفره.'
arabic[36] = 'الكلمة نفسها للمعنيين.\nÜber etwas klagen = الشكوى من شيء.\nGegen jemanden klagen = مقاضاة شخص.'
arabic[37] = 'الكلمة نفسها للشكوى والتقاضي. في ألمانيا تتشارك الشكوى والمقاضاة المفردات ذاتها. الخطوة من klagen (الشكوى) إلى klagen (المقاضاة) أقصر مما تظن.'
arabic[38] = 'من الإنجليزية strike. مستعارة في عهد الثورة الصناعية.\nإضرابات Deutsche Bahn أسطورية.'
arabic[39] = 'من الإنجليزية strike. استعارها الألمان إبان الثورة الصناعية. إضرابات Deutsche Bahn أسطورية لدرجة أن لها فئة إخبارية خاصة.'

# 40-49
arabic[40] = 'بوصفها Modalpartikel، تُضيف إحساساً باليأس أو التوكيد.\nWas soll ich bloß tun? = ماذا يا تُرى يجب أن أفعل؟'
arabic[41] = 'بوصفها Modalpartikel، تُضيف يأساً أو توكيداً. Was soll ich bloß tun? تعبّر عن العجز. كل نزاع بين جيران ينتج على الأقل جملة واحدة فيها bloß.'
arabic[42] = 'ثلاثة معانٍ في كلمة واحدة. Wer hat Schuld? = من المذنب؟\nEntschuldigung تعني حرفياً إزالة الذنب.'
arabic[43] = 'ثلاثة معانٍ في كلمة واحدة: الذنب والخطأ والدَّين. Schulden (الديون) هي الجمع. Entschuldigung (الاعتذار) تعني حرفياً إزالة الذنب.'
arabic[44] = 'Er ist schuldig = هو مذنب. تُستخدم في قاعات المحاكم والجدالات.\nالنقيض: unschuldig = بريء.'
arabic[45] = 'اللاحقة -ig تحوّل الاسم Schuld إلى صفة. تُستخدم في قاعات المحاكم والجدالات على حدٍّ سواء. Schuldig! يصرخ الجار.'
arabic[46] = 'Er ist schuld = هو المسؤول. مع sein فقط.\nبلا لواحق ولا تصريف. اتهام جامد.'
arabic[47] = 'خلافاً لـ schuldig، تُستخدم هذه الصيغة مع sein فقط. بلا لواحق ولا تصريف. Er ist schuld هو الاتهام الجامد.'
arabic[48] = 'من اليونانية kritike (فن الحكم).\nKritik üben = ممارسة النقد (رسمياً).'
arabic[49] = 'من اليونانية kritike (فن الحكم). يُقدّر الألمان konstruktive Kritik (النقد البناء). أما النقد المدمر فهو Beleidigung.'

# 50-59
arabic[50] = 'الكلمة نفسها في الإنجليزية والفرنسية وكثير من اللغات الأخرى.\nRespekt haben vor = احترام شيء أو شخص.'
arabic[51] = 'الكلمة نفسها في الإنجليزية والفرنسية وعشرات اللغات الأخرى. Respekt! وحدها تعني في اللهجة العامية رائع/مثير للإعجاب.'
arabic[52] = 'من dulden (التحمل). Geduld ist eine Tugend = الصبر فضيلة.\nالنقيض: Ungeduld = نفاد الصبر.'
arabic[53] = 'من dulden (التحمل). تستلزم البيروقراطية الألمانية قدراً هائلاً من Geduld. النقيض هو Ungeduld. Geduldig warten (الانتظار بصبر).'
arabic[54] = 'من اللاتينية compromissum. في نزاعات الشقق، Kompromiss هو الملك.\nEinen Kompromiss finden = الوصول إلى حل وسط.'
arabic[55] = 'من اللاتينية compromissum. في نزاعات الشقق الألمانية، Kompromiss هو الملك. Einen Kompromiss finden (إيجاد حل وسط) هو هدف الوساطة.'
arabic[56] = 'من verstehen (الفهم). اللاحقة -nis تُنشئ أسماء مجردة محايدة.\nIch habe Verständnis für dich = أتفهم وضعك.'
arabic[57] = 'اللاحقة -nis تُنشئ أسماء مجردة محايدة: Ergebnis، Erlebnis، Verständnis. من verstehen (الفهم). Verständnis zeigen (إبداء التفهم) يُفكّك النزاعات.'
arabic[58] = 'تعني أيضاً التصويت (die Stimme abgeben = الإدلاء بالصوت).\nمن stimmen (أن يكون صحيحاً / أن يُضبط على لحن).'
arabic[59] = 'تعني أيضاً التصويت (die Stimme abgeben = الإدلاء بالصوت). من stimmen (أن يكون صحيحاً / أن يُضبط). صوتك هو تصويتك وآلتك في آنٍ واحد.'

# 60-69
arabic[60] = 'من denken (التفكير). اسم مذكر ضعيف (N-Deklination):\nden Gedanken، dem Gedanken.'
arabic[61] = 'من denken (التفكير). اسم مذكر ضعيف: der Gedanke، den Gedanken، dem Gedanken. من الأسماء النادرة التي تتغير في حالتَي المفعول به والجار والمجرور.'
arabic[62] = 'من Kritik. اللاحقة -ieren تُميّز الأفعال المستعارة من الفرنسية أو اللاتينية.\nدائماً منتظمة، والنبر دائماً على مقطع -ier-.'
arabic[63] = 'اللاحقة -ieren تُميّز الأفعال المستعارة من الفرنسية أو اللاتينية. دائماً منتظمة والنبر على مقطع -ier-. بلا أوملاوت ولا مفاجآت.'
arabic[64] = 'Beleidigung (الإهانة) جريمة في القانون الألماني (المادة 185 من قانون العقوبات StGB).\nيمكن أن تُغرَّم بسبب إهانة شخص في الأماكن العامة.'
arabic[65] = 'Beleidigung (الإهانة) جريمة فعلية في القانون الألماني (المادة 185 StGB). يمكن أن تُغرَّم بسبب إهانة شخص في الأماكن العامة. على Verumius مراقبة كلامه.'
arabic[66] = 'Unter (تحت) + brechen (كسر). تقتحم كلام شخص ما.\nالسابقة غير قابلة للفصل: Er unterbricht mich.'
arabic[67] = 'Unter (تحت) + brechen (كسر). تقتحم كلام شخص من الأسفل. السابقة غير قابلة للفصل: Er unterbricht mich. فعل أساسي في النقاشات الحادة.'
arabic[68] = 'Wider (ضد) + sprechen (تكلم). التكلم ضد شيء.\nغير قابلة للفصل. تأخذ حالة المفعول غير المباشر: Ich widerspreche dir.'
arabic[69] = 'Wider (ضد) + sprechen (تكلم). التكلم ضد شيء. تأخذ حالة المفعول غير المباشر. فعل مؤدب للجدال. Ich muss widersprechen (يجب أن أعترض) صيغة رسمية.'

# 70-79
arabic[70] = 'أقوى من bitten (الطلب).\nDas ist zu viel verlangt تعني هذا طلب مبالغ فيه.'
arabic[71] = 'أقوى من bitten (الطلب). حين يُطالب جارك بشيء باستخدام verlangen فالنزاع يتصاعد. Das ist zu viel verlangt (هذا طلب مبالغ فيه).'
arabic[72] = 'من Haupt (الرأس). رفع رأسك والتمسك بموقفك.\nEr behauptet, dass... = هو يدّعي أن...'
arabic[73] = 'من Haupt (الرأس). رفع رأسك والتمسك بموقف. أساسي في الكلام غير المباشر والادعاءات المنقولة.'
arabic[74] = 'Sei nicht so frech! = لا تكن وقحاً هكذا!\nكانت تعني شجاع/جريء في الألمانية العليا القديمة.'
arabic[75] = 'كانت تعني شجاع/جريء في الألمانية العليا القديمة. تحوّل المعنى من الشجاعة إلى الوقاحة على مرّ القرون.'
arabic[76] = 'من Pein (ألم/عذاب). شيء peinlich يُسبب ألماً اجتماعياً.\nDas ist mir peinlich تعني هذا يُحرجني.'
arabic[77] = 'من Pein (ألم/عذاب). شيء peinlich يُسبب ألماً اجتماعياً. Das ist mir peinlich. الحفر الساعة 7 صباحاً يوم الأحد أمر peinlich.'
arabic[78] = 'حرفياً جدير بالملاحظة (merken + würdig).\nكانت إيجابية في الأصل: ملحوظ. الآن تعني في الغالب غريب.'
arabic[79] = 'حرفياً جدير بالملاحظة (merken + würdig). كانت إيجابية في الأصل: ملحوظ. الآن تعني في الغالب غريب أو مثير للريبة.'

# 80-89
arabic[80] = 'من selten (نادراً). ما يحدث نادراً هو seltsam.\nأخف وطأةً قليلاً من merkwürdig.'
arabic[81] = 'من selten (نادراً). ما يحدث نادراً هو seltsam. أخف من merkwürdig. Das ist seltsam دهشة مؤدبة.'
arabic[82] = 'من geheim (سري). اللاحقة -nis تُنشئ أسماء محايدة.\nEin offenes Geheimnis = سر مشاع.'
arabic[83] = 'من geheim (سري). اللاحقة -nis تُنشئ أسماء محايدة. Ein offenes Geheimnis هو سر يعرفه الجميع لكن لا أحد يُصرّح به.'
arabic[84] = 'من wissen (المعرفة). Gewissen هو ما تعرفه في داخلك.\nEin schlechtes Gewissen haben = الشعور بتأنيب الضمير.'
arabic[85] = 'من wissen (المعرفة). Gewissen هو ما تعرفه في داخلك. Ein gutes Gewissen ist ein sanftes Ruhekissen (الضمير المرتاح وسادة ناعمة).'
arabic[86] = 'Heraus (خارج) + Forderung (مطالبة). 16 حرفاً.\nمطالبة تسحبك من منطقة الراحة.'
arabic[87] = 'Heraus (خارج) + Forderung (مطالبة). مطالبة تسحبك من منطقة الراحة. 16 حرفاً. العيش في ألمانيا تحدٍّ يومي.'
arabic[88] = 'Mit voller Kraft = بكل قوة.\nKraftwerk = محطة طاقة (والفرقة الإلكترونية الشهيرة).'
arabic[89] = 'Mit voller Kraft (بكل قوة). وأيضاً في مركّب: Kraftwerk (محطة طاقة، والفرقة الإلكترونية الشهيرة).'

# 90-99
arabic[90] = 'Mut machen = تشجيع شخص. Mutig = شجاع.\nيحتاج Verumius إلى Mut للطرق على الباب.'
arabic[91] = 'Mut machen (تشجيع). Mutig (شجاع). يحتاج Verumius إلى Mut للطرق على باب الجار.'
arabic[92] = 'من الجذر ذاته للإنجليزية heart واللاتينية cor واليونانية kardia.\nVon Herzen = من القلب. Herzlich = بحرارة.'
arabic[93] = 'من الجذر ذاته للإنجليزية heart واللاتينية cor واليونانية kardia. Von Herzen (من القلب). Herzlich willkommen (أهلاً وسهلاً بحرارة).'
arabic[94] = 'من fühlen (الشعور). الجمع: Gefühle.\nالسابقة Ge- مع اللاحقة -l تُنشئ أسماءً محايدة جماعية.'
arabic[95] = 'من fühlen (الشعور). السابقة Ge- مع اللاحقة -l تُنشئ أسماءً محايدة جماعية. Ein gutes Gefühl haben (الشعور بشيء جيد).'
arabic[96] = 'Be- + ruhig (هادئ) + -en. انعكاسي: sich beruhigen.\nالسابقة be- تجعله متعدياً: تُهدئ شخصاً آخر أو نفسك.'
arabic[97] = 'Be- + ruhig (هادئ) + -en. Beruhige dich! (هدّئ نفسك!). السابقة be- تجعله متعدياً: تُهدئ شخصاً آخر أو نفسك.'
arabic[98] = 'Ent- (تخفيف) + spannen (الشد). التحرر من التوتر.\nEntspann dich! = استرخِ! Entspannung = استرخاء.'
arabic[99] = 'Ent- (تخفيف) + spannen (الشد). التحرر من التوتر. Entspann dich! (استرخِ!). Entspannung (الاسترخاء) هو الهدف بعد كل Streit.'

# 100-109
arabic[100] = 'من ein (واحد). الاتحاد على رأي. Wir haben uns geeinigt = توصلنا إلى اتفاق.'
arabic[101] = 'من ein (واحد). التوحد في رأي. Wir haben uns geeinigt (توصلنا إلى اتفاق). أساسي في الوساطة والمفاوضات.'
arabic[102] = 'Entgegen (نحو) + kommen (مجيء). قابلية للانفصال.\nEr kommt mir entgegen = إنه يلتقيني في المنتصف.'
arabic[103] = 'Entgegen (نحو) + kommen (مجيء). قابل للانفصال: Er kommt mir entgegen. حرفياً: شخص يأتي نحوك. التقاء في المنتصف.'
arabic[104] = 'Über (فوق) + zeugen (شهادة/إقناع). غير قابل للانفصال.\nIch bin überzeugt = أنا مقتنع.'
arabic[105] = 'Über (فوق) + zeugen (شهادة/إقناع). جعل شخص يتبنى شهادتك. Ich bin überzeugt (أنا مقتنع). فعل الجدال المنطقي.'
arabic[106] = 'Über + reden (كلام). أخف تلاعباً مقارنةً بـ überzeugen.\nEr hat mich überredet تعني لقد أقنعني بالكلام.'
arabic[107] = 'Über + reden (كلام). إقناع شخص بالكلام. أخف تلاعباً مقارنةً بـ überzeugen. Überreden (إقناع بالكلام) وüberzeugen (اقتناع بالحجة).'
arabic[108] = 'Lob = مديح (اسم). Nicht geschimpft ist genug gelobt.\nيُبدي الألمان مديحهم بشكل نادر؛ وحين يفعلون فهو ذو معنى.'
arabic[109] = 'Nicht geschimpft ist genug gelobt (عدم التوبيخ كافٍ للمديح) مثل شعبي من شواب. يُبدي الألمان مديحهم بندرة؛ حين يُمدحون فالأمر صادق.'

# 110-119
arabic[110] = 'معنيان في فعل واحد: Das reicht! (يكفي هذا!) و\nKannst du mir das Salz reichen? (هل يمكنك تمرير الملح؟)'
arabic[111] = 'استخدامان يوميان في فعل واحد: Das reicht! (يكفي هذا!) وKannst du mir das Salz reichen? (هل يمكنك تمرير الملح؟)'
arabic[112] = 'من Ehre (شرف). Ehrlich gesagt... = بصراحة...\nEhrlich währt am längsten = الصدق يدوم أطول.'
arabic[113] = 'من Ehre (شرف). Ehrlich gesagt... يبدأ بها كثير من الاعترافات الألمانية. Ehrlich währt am längsten (الصدق يدوم أطول).'
arabic[114] = 'مستعارة من الإنجليزية. نطقها بالألمانية fehr.\nاعتُمدت لأن gerecht بدت رسمية جداً.'
arabic[115] = 'مستعارة من الإنجليزية. نطقها بالألمانية fehr. تُستخدم كثيراً في الجدالات. اعتمد الألمان fair لأن gerecht (عادل) بدت رسمية جداً.'
arabic[116] = 'الهجاء ذاته في الإنجليزية، من اللاتينية tolerare (التحمل).\nتفتخر برلين بأنها متسامحة.'
arabic[117] = 'الهجاء ذاته في الإنجليزية، من اللاتينية tolerare (التحمل). تفتخر برلين بأنها متسامحة. Toleranz (التسامح) هي الكلمة الاسمية.'
arabic[118] = 'Treu wie Gold = وفي كالذهب. من الجذر ذاته للإنجليزية true.\nصديق treu وكلب treu وجار treu.'
arabic[119] = 'من الجذر ذاته للإنجليزية true. Treu wie Gold (وفي كالذهب). صديق وفي، وكلب وفي، وجار وفي.'

# 120-129
arabic[120] = 'Dank (شكر) + -bar (قادر). Ich bin dankbar = أنا ممتنّ.\nاللاحقة -bar تعمل كـ -able الإنجليزية.'
arabic[121] = 'Dank (شكر) + -bar (قادر). اللاحقة -bar تعمل كـ -able الإنجليزية: dankbar، machbar (ممكن). Ich bin sehr dankbar (أنا ممتنّ جداً).'
arabic[122] = 'nachdem = بعد. تستخدم جملة nachdem الـ Plusquamperfekt (hatte/war + Partizip II) لأن الحدث وقع قبل حدث آخر في الماضي.'
arabic[123] = 'الـ Plusquamperfekt يُظهر ما حدث قبل حدث آخر في الماضي.\n\nالتكوين: hatte/war + Partizip II\nمثال: Nachdem er gebohrt hatte, klingelte es.'
arabic[124] = 'من اللاتينية discussio (فحص). أكثر تنظيماً من Streit.\nEine Diskussion führen = قيادة نقاش.'
arabic[125] = 'من اللاتينية discussio (فحص). أكثر تنظيماً من Streit. يُقدّر الألمان sachliche Diskussion (النقاش الموضوعي). Eine Diskussion führen (قيادة نقاش).'
arabic[126] = 'من beziehen (الارتباط). يشمل العلاقات الرومانسية والمهنية والدولية.\nIn einer Beziehung sein = الوجود في علاقة.'
arabic[127] = 'من beziehen (الارتباط). يشمل العلاقات الرومانسية والمهنية والدولية. In einer Beziehung sein (الوجود في علاقة). كلمة واسعة الاستخدام.'
arabic[128] = 'Freund (صديق) + -schaft (لاحقة جماعية، كـ -ship الإنجليزية).\nيُميّز الألمان بوضوح بين Freundschaft وBekanntschaft.'
arabic[129] = 'Freund (صديق) + -schaft (لاحقة جماعية، كـ -ship الإنجليزية). يُميّز الألمان بوضوح بين Freundschaft (صداقة) وBekanntschaft (معرفة). حين يقول ألماني Freund فهو يعني ذلك فعلاً.'

# 130-139
arabic[130] = 'من أقصر الأسماء الألمانية. من الألمانية العليا القديمة ewa (قانون).\nDie Ehe schließen = الزواج.'
arabic[131] = 'من أقصر الأسماء الألمانية. من الألمانية العليا القديمة ewa (قانون/أبدية). Ehe تعني أيضاً قبل. Die Ehe schließen (عقد الزواج).'
arabic[132] = 'Ehe (زواج) + Paar (زوجان). المركّب يقول كل شيء:\nزوجان مرتبطان بـ Ehe.'
arabic[133] = 'Ehe + Paar. المركّب يقول كل شيء: زوجان مرتبطان بـ Ehe. الجار وزوجته، Ehepaar الذي يزعجه Verumius.'
arabic[134] = 'من scheiden (الفصل). Die Scheidung einreichen = تقديم طلب الطلاق.\nتستلزم ألمانيا فترة فراق إجبارية مدتها سنة.'
arabic[135] = 'من scheiden (الفصل). تستلزم ألمانيا فترة فراق إجبارية مدتها سنة (Trennungsjahr) قبل منح الطلاق. Die Scheidung einreichen (تقديم طلب الطلاق).'
arabic[136] = 'من trennen (الفصل). أوسع من Scheidung: أي انفصال.\nDie Trennung von Kirche und Staat = الفصل بين الكنيسة والدولة.'
arabic[137] = 'من trennen (الفصل). أوسع من Scheidung: أي انفصال. Mülltrennung (فصل النفايات) استُخدم في وحدة سابقة. نفس الفعل، سياق مختلف.'
arabic[138] = 'Einen Schreck bekommen = الصعق من الخوف.\nقصير وحاد وفوري. لحظة الهلع.'
arabic[139] = 'Einen Schreck bekommen (الصعق من الخوف). قصير وحاد وفوري. Der Schreck هو لحظة الهلع ذاتها.'

# 140-149
arabic[140] = 'أطول وأعمق من Schreck. Der Schrecken des Krieges = رعب الحرب.\nZu meinem Schrecken = لهولي.'
arabic[141] = 'أطول وأعمق من Schreck. Der Schrecken des Krieges (رعب الحرب). يمكن أن يعني أيضاً الرعب المستمر.'
arabic[142] = 'Ent- (تخفيف) + Täuschung (خداع). أن تُرفع عنك الأوهام.\nيُؤطّر الألمان خيبة الأمل على أنها فقدان الأوهام.'
arabic[143] = 'Ent- (تخفيف) + Täuschung (خداع). رفع الأوهام. يُؤطّر الألمان خيبة الأمل على أنها فقدان التوقعات الكاذبة.'
arabic[144] = 'شاذ: litt، gelitten. Ich kann ihn nicht leiden يعني لا أطيقه.\nأيضاً: Leid tun = الشعور بالأسف.'
arabic[145] = 'شاذ: litt، gelitten. Ich kann ihn nicht leiden (لا أطيقه) هو الاصطلاح الشائع. أيضاً: Leid tun (الشعور بالأسف).'
arabic[146] = 'من Enttäuschung. السابقة غير قابلة للانفصال: ent- تبقى متصلة.\nDu enttäuschst mich = أنت تُخيّب ظني.'
arabic[147] = 'السابقة غير قابلة للانفصال: ent- تبقى متصلة. تصريف منتظم رغم الجذع الغريب المظهر. Du enttäuschst mich (أنت تُخيّب ظني).'
arabic[148] = 'فعلان في فعل واحد! متعدٍّ (التخويف): منتظم.\nلازم (الخوف): شاذ (erschrak).'
arabic[149] = 'فعلان في فعل واحد. متعدٍّ (تخويف شخص): منتظم. لازم (الشعور بالخوف): شاذ (erschrak، erschrocken).'

# 150-159
arabic[150] = 'Sich trennen = الانفصال. فعل منتظم.\nMülltrennung = فصل النفايات. الفعل ذاته، سياق مختلف.'
arabic[151] = 'Sich trennen (الانفصال). فعل منتظم. Mülltrennung (فصل النفايات) كان في وحدة سابقة. الفعل ذاته، سياق مختلف.'
arabic[152] = 'شاذ: schied، geschieden. Sich scheiden lassen = الطلاق.\nتركيب lassen يُضيف معنى السماح.'
arabic[153] = 'شاذ: schied، geschieden. Sich scheiden lassen (الطلاق). تركيب lassen يُضيف معنى السماح: تُسمح لك بالانفصال قانونياً.'
arabic[154] = 'Sich fürchten vor = الخوف من. من Furcht (خوف).\nFurchtbar = فظيع (حرفياً: مثير للخوف).'
arabic[155] = 'Sich fürchten vor (الخوف من). من Furcht (خوف). Furchtbar (فظيع، حرفياً: مثير للخوف). Furchtlos (شجاع، حرفياً: بلا خوف).'
arabic[156] = 'كلمة قوية. تصريف منتظم. من الجذر ذاته للإنجليزية hate.\nHass (الكراهية) مفهوم قانوني في ألمانيا.'
arabic[157] = 'كلمة قوية. من الجذر ذاته للإنجليزية hate. يستخدمها الألمان بجدية. Hass (الكراهية) مفهوم قانوني في ألمانيا أيضاً.'
arabic[158] = 'Sich langweilen = الشعور بالملل. من Langeweile (ملل).\nانعكاسي للشعور بالملل، متعدٍّ لإحداث الملل.'
arabic[159] = 'Sich langweilen (الشعور بالملل). من Langeweile (ملل، حرفياً: وقت طويل). انعكاسي للشعور بالملل، متعدٍّ لإحداث الملل.'

# 160-169
arabic[160] = 'شاذ: verzieh، verziehen. Verzeihung! = اعتذار رسمي.\nأكثر رسمية من Entschuldigung.'
arabic[161] = 'شاذ: verzieh، verziehen. Verzeihung! اعتذار رسمي، أكثر أناقةً من Entschuldigung. يُستخدم في المناسبات الرسمية.'
arabic[162] = 'Auf etwas verzichten = التخلي عن شيء طوعاً.\nIch verzichte auf mein Recht = أتنازل عن حقي.'
arabic[163] = 'Auf etwas verzichten (التخلي عن شيء طوعاً). يأخذ auf + المفعول به. قرار واعٍ بالتخلي. قرار ناضج في أي نزاع.'
arabic[164] = 'مباشر: Wo ist das Büro? (أين المكتب؟)\nغير مباشر: Können Sie mir sagen, wo das Büro ist? (هل يمكنكم إخباري أين المكتب؟)'
arabic[165] = 'في كل جملة ثانوية يذهب الفعل المُصرَّف إلى النهاية:\n\n- dass er kommt (أنه يأتي)\n- weil sie müde ist (لأنها متعبة)\n- ob er kommt (إن كان سيأتي)'
arabic[166] = 'من Polizei (الشرطة). اسم مذكر ضعيف (N-Deklination):\nden Polizisten، dem Polizisten.'
arabic[167] = 'من Polizei (الشرطة). اسم مذكر ضعيف (N-Deklination): den Polizisten، dem Polizisten. Die Polizei (الشرطة) جماعي بينما الضابط Polizist فردي.'
arabic[168] = 'Polizist + -in. حوالي 30% من ضباط الشرطة الألمان نساء.\nلاحقة المؤنث -in التي تعرفها تُضاف دائماً.'
arabic[169] = 'Polizist + -in. لاحقة المؤنث -in تُضاف دائماً للمهن النسائية. حوالي 30% من ضباط الشرطة الألمان نساء.'

# 170-179
arabic[170] = 'من richten (توجيه/حكم). Vor dem Richter stehen = الوقوف أمام القاضي.\nلا يستخدم القضاة الألمان المطرقة.'
arabic[171] = 'من richten (توجيه/حكم). لا يستخدم القضاة الألمان المطرقة. يقولون ببساطة Im Namen des Volkes (باسم الشعب).'
arabic[172] = 'Richter + -in. شغلت عدة Richterinnen أعلى محكمة في ألمانيا.\nلاحقة -in تُضاف دائماً.'
arabic[173] = 'Richter + -in. أعلى محكمة في ألمانيا (Bundesverfassungsgericht) ضمّت عدة Richterinnen. لاحقة -in تُضاف دائماً.'
arabic[174] = 'من الألمانية العليا القديمة anawalt (ممثّل).\nEinen Anwalt nehmen = توكيل محامٍ.'
arabic[175] = 'من الألمانية العليا القديمة anawalt (ممثّل). يمتلك الألمان Rechtsschutzversicherung (تأمين قانوني). Einen Anwalt nehmen (توكيل محامٍ).'
arabic[176] = 'Anwalt + -in. ملاحظة: بلا تغيير في الأوملاوت.\nبعض الكلمات تأخذ أوملاوتاً عند إضافة -in، هذه لا تأخذ.'
arabic[177] = 'Anwalt + -in. ملاحظة: بعض الكلمات تأخذ أوملاوتاً عند إضافة -in (Arzt/Ärztin)، وأخرى لا تأخذ (Anwalt/Anwältin).'
arabic[178] = 'Strafe (عقوبة) + Zettel (ورقة/تذكرة). ورقة عقوبة.\nEinen Strafzettel bekommen = الحصول على مخالفة.'
arabic[179] = 'Strafe + Zettel. ورقة عقوبة. تذاكر الوقوف ومخالفات الضجيج. Einen Strafzettel bekommen (الحصول على مخالفة).'

# 180-189
arabic[180] = 'Kriminal + Polizei. اختصارها: die Kripo.\nكل مسلسل جريمة ألماني يُبرز الـ Kripo.'
arabic[181] = 'اختصارها: die Kripo. تتولى الجرائم الخطيرة. كل مسلسل جريمة ألماني (Tatort مثلاً) يُبرز الـ Kripo.'
arabic[182] = 'من اللاتينية processus. Einen Prozess führen = إجراء محاكمة.\nتعني أيضاً عملية بوجه عام.'
arabic[183] = 'من اللاتينية processus. Einen Prozess führen (إجراء محاكمة). تعني أيضاً عملية بوجه عام. نزاع الجيران يتحول إلى Prozess.'
arabic[184] = 'Ur- (أصلي/أولي) + Teil (جزء). التقسيم الأصلي.\nEin Urteil fällen = إصدار حكم.'
arabic[185] = 'Ur- (أصلي/أولي) + Teil (جزء). التقسيم الأصلي: مذنب أم بريء. Ein Urteil fällen (إصدار حكم). اللحظة الأوج في كل محاكمة.'
arabic[186] = 'من الإيطالية risico. الجمع: Risiken.\nEin Risiko eingehen = تحمّل مخاطرة.'
arabic[187] = 'من الإيطالية risico. الجمع: Risiken (وليس Risikos). Ein Risiko eingehen (تحمّل مخاطرة). الحفر خلال Ruhezeit Risiko.'
arabic[188] = 'من verdächtig (مشبوه). Unter Verdacht stehen = الوقوع تحت الاشتباه.\nVerdacht schöpfen = إثارة الريبة.'
arabic[189] = 'Unter Verdacht stehen (الوقوع تحت الاشتباه). Verdacht schöpfen (إثارة الريبة، حرفياً: استقاء الشك). كلمة أساسية في الروايات البوليسية.'

# 190-199
arabic[190] = 'من Verdacht. Das ist verdächtig = هذا مريب.\nSich verdächtig machen = الظهور بمظهر مريب.'
arabic[191] = 'من Verdacht. Das ist verdächtig (هذا مريب). Sich verdächtig machen (الظهور بمظهر مريب). أصوات الحفر في منتصف الليل تبدو verdächtig.'
arabic[192] = 'Strafe (عقوبة) + -bar. Strafbare Handlung = فعل يستوجب العقوبة.\nالحفر خلال Ruhezeit strafbar من الناحية التقنية.'
arabic[193] = 'Strafe + -bar. الحفر خلال Ruhezeit strafbar من الناحية التقنية في بعض البلديات. في الغالب مجرد Strafzettel.'
arabic[194] = 'من Recht (حق/قانون). Gerechtigkeit = عدالة.\nالنسخة الرسمية من fair.'
arabic[195] = 'من Recht (حق/قانون). Gerechtigkeit (العدالة). تريد Hildi urteilaً gerechtes. Gerecht وfair يُستخدمان معاً.'
arabic[196] = 'Un- + entschieden (محسوم). Das Spiel endete unentschieden.\nفي نزاع الجيران: كلا الطرفين يدّعيان الفوز.'
arabic[197] = 'Un- + entschieden (محسوم). Das Spiel endete unentschieden (انتهت المباراة بالتعادل). في نزاع الجيران: كلا الجارين يدّعيان الفوز.'
arabic[198] = 'من spannen (الشد). Ich bin gespannt! = أنا فضولي/متحمس!\nكشريط مطاطي مشدود بتوقع.'
arabic[199] = 'من spannen (الشد). كشريط مطاطي مشدود بتوقع. Gespannt warten (الانتظار بفارغ الصبر).'

# 200-209
arabic[200] = 'من Angst (خوف/قلق). Ängstlich sein = الشعور بالخوف.\nكلمة angst الإنجليزية مستعارة مباشرةً من الألمانية.'
arabic[201] = 'من Angst (خوف/قلق). كلمة angst الإنجليزية مستعارة مباشرةً من الألمانية. التصريف الصفتي المعتاد: ängstlicher، ängstlichst-.'
arabic[202] = 'من ein (واحد) + -sam (لاحقة الميل). الميل نحو الوحدة.\nSich einsam fühlen = الشعور بالوحدة.'
arabic[203] = 'من ein (واحد) + -sam (لاحقة الميل). الميل نحو الوحدة. الجار يشعر بـ einsam بعد النزاع. Sich einsam fühlen (الشعور بالوحدة).'
arabic[204] = 'Stolz auf etwas sein = الفخر بشيء ما.\nيأخذ auf + المفعول به.'
arabic[205] = 'Stolz auf etwas sein (الفخر بشيء ما). يأخذ auf + المفعول به. Ich bin stolz auf dich (أنا فخور بك). Verumius فخور بإصلاحه الرف.'
arabic[206] = 'من Mut (شجاعة). Mutig sein = الشجاعة.\nاللاحقة -ig تحوّل الأسماء إلى صفات: Mut -> mutig.'
arabic[207] = 'من Mut (شجاعة). اللاحقة -ig تحوّل الأسماء إلى صفات: Mut -> mutig، Schuld -> schuldig، Hunger -> hungrig. نمط مثمر.'
arabic[208] = 'من Kampf (قتال/معركة). Für etwas kämpfen = الكفاح من أجل شيء.\nمرتبطة بـ camp اللاتينية.'
arabic[209] = 'من Kampf (قتال/معركة). Für etwas kämpfen (الكفاح من أجل شيء). مرتبطة بـ campus اللاتينية (ميدان). Verumius kämpft من أجل السلام.'

# 210-219
arabic[210] = 'من schließen (الإغلاق). الكلمة الختامية في الجدال.\nSchließlich hat er Recht تعني في نهاية المطاف هو على حق.'
arabic[211] = 'من schließen (الإغلاق). الكلمة الختامية في الجدال. Schließlich تُشير إلى النقطة الأخيرة. الختام المنطقي للحجة.'
arabic[212] = 'من trauen (الثقة/الجرأة). Vertrauen ist gut, Kontrolle ist besser.\nمنسوبة إلى لينين، لكن الألمان يؤمنون بها.'
arabic[213] = 'Vertrauen ist gut, Kontrolle ist besser (الثقة جيدة، والرقابة أفضل). منسوبة إلى لينين، لكن الألمان يعيشون بهذا المبدأ.'
arabic[214] = 'اسم من verzeihen. Verzeihung! = اعتذار رسمي.\nأكثر أناقةً من Entschuldigung.'
arabic[215] = 'أكثر أناقةً من Entschuldigung. يُستخدم حين يصطدم بك شخص في دار الأوبرا، لا في السوبرماركت.'
arabic[216] = 'جسدي وعاطفي معاً. Alte Wunden aufreißen = إعادة فتح الجراح القديمة.\nنزاع الجيران أعاد فتح جراح قديمة.'
arabic[217] = 'جسدي وعاطفي معاً. Alte Wunden aufreißen (إعادة فتح الجراح القديمة). Zeit heilt alle Wunden (الوقت يشفي كل الجراح).'
arabic[218] = 'في الغالب جمع: Tränen. Tränen in den Augen = دموع في العيون.\nKrokodilstränen = دموع التماسيح.'
arabic[219] = 'في الغالب جمع: Tränen. Krokodilstränen (دموع التماسيح) موجودة في الألمانية أيضاً. الاستعارة ذاتها، المشاعر ذاتها.'

# 220-229
arabic[220] = 'Un- + Glück (حظ/سعادة). Ein Unglück kommt selten allein.\nنقيض كل ما هو جيد.'
arabic[221] = 'Un- + Glück (حظ/سعادة). Ein Unglück kommt selten allein (النحس نادراً ما يأتي وحده). Das Unglück هو المصيبة الكبرى.'
arabic[222] = 'Das ist schade = هذا مؤسف. وأيضاً تعجب: Schade!\nمن أكثر التعبيرات اليومية فائدة.'
arabic[223] = 'Das ist schade (هذا مؤسف). وأيضاً تعجب: Schade! تُستخدم كثيراً في الحوار اليومي. Wie schade! (يا للأسف!)'
arabic[224] = 'مختلفة عن Schade (أسف). Einen Schaden verursachen = التسبب في ضرر.\nSchadenfreude هي أشهر كلمة ألمانية دخلت الإنجليزية.'
arabic[225] = 'مختلفة عن Schade (أسف). Schadenfreude (الشماتة) هي أشهر صادرات المفردات الألمانية. Schaden (ضرر/خسارة).'
arabic[226] = 'من verlieren (الخسارة). Einen Verlust erleiden = تكبّد خسارة.\nمالية وشخصية وفي الألعاب على حدٍّ سواء.'
arabic[227] = 'من verlieren (الخسارة). Einen Verlust erleiden (تكبّد خسارة). خسارة مالية أو شخصية أو في اللعبة. في نزاع الجيران: خسارة الهدوء.'
arabic[228] = 'Jemandem vertrauen = الثقة بشخص. يأخذ حالة المفعول غير المباشر.\nIch vertraue dir = أنا أثق بك.'
arabic[229] = 'Jemandem vertrauen (الثقة بشخص). يأخذ حالة المفعول غير المباشر. Ich vertraue dir (أنا أثق بك). الفعل vertrauen يُبني Vertrauen.'

# 230-239
arabic[230] = 'شاذ: versprach، versprochen. Ich verspreche dir = أعدك.\nأيضاً: sich versprechen = التلفظ بخطأ.'
arabic[231] = 'شاذ: versprach، versprochen. أيضاً: sich versprechen (التلفظ بخطأ). الوعد والخطأ يتشاركان الجذر ذاته.'
arabic[232] = 'شاذ: verriet، verraten. Ein Geheimnis verraten = الإفشاء بسر.\nJemanden verraten = خيانة شخص.'
arabic[233] = 'شاذ: verriet، verraten. فعل واحد للسر المُفشى والثقة المخدوعة. Ein Geheimnis verraten (إفشاء سر) أو Jemanden verraten (خيانة شخص).'
arabic[234] = 'Sich verhalten = التصرف/السلوك.\nشاذ: verhielt، verhalten.'
arabic[235] = 'Sich verhalten (التصرف/السلوك). شاذ: verhielt، verhalten. Wie soll ich mich verhalten? (كيف يجب أن أتصرف؟) السؤال الجوهري في الوساطة.'
arabic[236] = 'Einen Streit verhindern = منع نزاع.\nDas konnte ich nicht verhindern = لم أستطع منع ذلك.'
arabic[237] = 'السابقة ver- غير قابلة للانفصال. Das konnte ich nicht verhindern (لم أستطع منع ذلك). كلمة أساسية في الوساطة.'
arabic[238] = 'شاذ: verließ، verlassen. Die Wohnung verlassen = مغادرة الشقة.\nSich auf jemanden verlassen = الاتكال على شخص.'
arabic[239] = 'شاذ: verließ، verlassen. معنيان: Die Wohnung verlassen (مغادرة الشقة) وSich auf jemanden verlassen (الاتكال على شخص).'

# 240-249
arabic[240] = 'Sich verlaufen تعني الضياع في الطريق.\nWie ist das Gespräch verlaufen? تعني كيف سار الحديث؟'
arabic[241] = 'Sich verlaufen (الضياع في الطريق). Wie ist das Gespräch verlaufen? (كيف سار الحديث؟) فعل واحد للتنقل الجسدي والحوار معاً.'
arabic[242] = 'Eine Chance versäumen = إضاعة فرصة.\nأكثر رسمية من verpassen.'
arabic[243] = 'أكثر رسمية من verpassen. Versäume nicht, dich zu entschuldigen (لا تُضيّع فرصة الاعتذار).'
arabic[244] = 'Sich weigern = الرفض. دائماً انعكاسي.\nEr weigert sich, die Tür zu öffnen.'
arabic[245] = 'Sich weigern (الرفض). دائماً انعكاسي. Er weigert sich, die Tür zu öffnen (هو يرفض فتح الباب). موقف نزاع الجيران الكلاسيكي.'
arabic[246] = 'شاذ: zwang، gezwungen. كلمة قوية وفعل قوي.\nNiemand kann dich zwingen تعني لا أحد يستطيع إجبارك.'
arabic[247] = 'شاذ: zwang، gezwungen. Niemand kann dich zwingen (لا أحد يستطيع إجبارك). Gezwungen تعني أيضاً مُتكلَّف/مصطنع.'
arabic[248] = 'Ernst (جدية) + -haft (ذو طابع). Ernsthaft? = بجدية؟\nأقوى من ernst.'
arabic[249] = 'Ernst + -haft (ذو طابع). Ernsthaft? (بجدية؟). أقوى من ernst. Eine ernsthafte Angelegenheit (أمر جدي بحق).'

# 250-259
arabic[250] = 'من Heim (البيت). أصلاً: مألوف، خاص. الآن: سري، خفي.\nDas Unheimliche (الشيء الغريب/المثير للقلق).'
arabic[251] = 'من Heim (البيت). أصلاً: مألوف، خاص. الآن: سري، خفي. Das Unheimliche (الشيء الغريب) مفهوم شهير. السلوك الغريب للجار heimlich.'
arabic[252] = 'Hinter (خلف) + her (نحو هنا). بعد وقوع الأمر.\nHinterher ist man immer klüger تعني الفطنة دائماً بعد فوات الأوان.'
arabic[253] = 'Hinter + her. Hinterher ist man immer klüger (المرء دائماً أذكى بعد فوات الأوان) مثل ألماني يكرره Verumius بعد كل Streit.'
arabic[254] = 'Modalpartikel متعدد الاستخدامات. Das ist eben so = هكذا هي الأمور.\nيعبّر عن الاستسلام والتقبّل.'
arabic[255] = 'من أكثر Modalpartikeln تنوعاً. Das ist eben so (هكذا هي الأمور). يُعبّر عن الاستسلام. Eben auch لتأكيد التفاهم المتبادل.'
arabic[256] = 'شاذ: stank، gestunken. من الجذر ذاته للإنجليزية stink.\nDas stinkt mir = هذا يضايقني (عامية).'
arabic[257] = 'شاذ: stank، gestunken. من الجذر ذاته للإنجليزية stink. Das stinkt mir (هذا يضايقني) تستخدم الأنف مجازاً.'
arabic[258] = 'من الجذر ذاته للإنجليزية thief (البروتوجرمانية). الجمع: Diebe.\nHaltet den Dieb! = أمسكوا اللص!'
arabic[259] = 'من الجذر ذاته للإنجليزية thief (البروتوجرمانية *theubaz). Der Dieb، الجمع: Diebe. Haltet den Dieb! (أمسكوا اللص!) في كل مطاردة.'

# 260-269
arabic[260] = 'Ein (في) + brechen (كسر) + -er (شخص). من يقتحم.\nDer Einbrecher kam durch das Fenster.'
arabic[261] = 'Ein + brechen + -er. من يقتحم. Der Einbrecher kam durch das Fenster (اقتحم الشقة من الشباك). نمط التكوين واضح.'
arabic[262] = 'Einbrecher + -in. Die Einbrecherin.\nالجريمة لا تُفرّق في القواعد النحوية الألمانية.'
arabic[263] = 'Einbrecher + -in. الألمانية تُوفّر دائماً الصيغة المؤنثة. الجريمة لا تُفرّق بين الجنسين في قواعد اللغة.'
arabic[264] = 'اسم من einbrechen. أيضاً: Einbruch der Dunkelheit = حلول الظلام.\nمعنيان: الجريمة وحلول الليل.'
arabic[265] = 'اسم من einbrechen. Einbruch der Dunkelheit (حلول الظلام، حرفياً: اقتحام الظلام). فعل واحد للجريمة والغروب.'
arabic[266] = 'من fangen (الاصطياد). Ge- + fang + -nis.\nاللاحقة -nis تُنشئ أسماء محايدة: Gefängnis، Ergebnis.'
arabic[267] = 'من fangen (الاصطياد). مكان الاصطياد. اللاحقة -nis تُنشئ أسماء محايدة: Gefängnis، Ergebnis، Geheimnis.'
arabic[268] = 'من Tat (فعل/جريمة). من يُنفّذ الفعل.\nبديل محايد جنسياً: Täterperson.'
arabic[269] = 'من Tat (فعل/جريمة). من يُنفّذ الفعل. لغة قانونية وصحفية. Der Täter floh (فرّ الجاني).'

# 270-279
arabic[270] = 'Täter + -in مع أوملاوت: Täterin.\nاللغة القانونية الألمانية تُحدد الجنس دائماً.'
arabic[271] = 'Täter + -in. الملاحظة: الـ ä يبقى: Täterin. اللغة القانونية الألمانية تُحدد الجنس دائماً.'
arabic[272] = 'Auf frischer Tat ertappt = القبض عليه متلبساً.\nIn der Tat = في الواقع (حرفياً: في الفعل).'
arabic[273] = 'Auf frischer Tat ertappt (القبض عليه متلبساً). In der Tat (في الواقع). كلمة صغيرة بنطاق واسع. Tat وStreik وDiebstahl كلها أفعال.'
arabic[274] = 'من verbrechen (ارتكاب جريمة). Ver- + brechen (كسر).\nأقوى من Dieb: أي مجرم خطير.'
arabic[275] = 'من verbrechen (ارتكاب جريمة). Ver- + brechen (كسر). من يكسر القانون. أقوى من Dieb: أي جريمة خطيرة.'
arabic[276] = 'Verbrecher + -in. Die Verbrecherin.\nالنمط: المذكر + -in = المؤنث في المهنة أو الدور.'
arabic[277] = 'Verbrecher + -in. النمط دائماً واحد: المذكر + -in = المؤنث في المهنة أو الدور.'
arabic[278] = 'من verlieren (الخسارة). Ein guter Verlierer sein = أن تكون خاسراً كريماً.\nفي نزاع الجيران: أحد الطرفين يجب أن يخسر.'
arabic[279] = 'من verlieren (الخسارة). Ein guter Verlierer sein (أن تكون خاسراً كريماً). في نزاع الجيران: أحد الجارين سيكون Verlierer.'

# 280-289
arabic[280] = 'Fest (بإحكام) + nehmen (أخذ). قابل للانفصال: Die Polizei nimmt ihn fest.\nأكثر رسمية من verhaften.'
arabic[281] = 'Fest + nehmen. قابل للانفصال: Die Polizei nimmt ihn fest. أن تأخذ شخصاً بإحكام. أكثر رسمية من verhaften في الاستخدام المكتوب.'
arabic[282] = 'من Haft (الاحتجاز). السابقة ver- غير قابلة للانفصال.\nEr wurde verhaftet = تم اعتقاله.'
arabic[283] = 'من Haft (الاحتجاز). السابقة ver- غير قابلة للانفصال. Er wurde verhaftet (تم اعتقاله). يُستخدم بالتبادل مع festnehmen.'
arabic[284] = 'من Urteil (حكم). Zu drei Jahren verurteilt = صدر بحقه حكم بثلاث سنوات.\nالذروة القانونية لأي Prozess.'
arabic[285] = 'من Urteil (حكم). Zu drei Jahren verurteilt (صدر بحقه حكم بثلاث سنوات). الذروة القانونية لأي Prozess. السابقة ver- تُعمّق المعنى.'
arabic[286] = 'شاذ: fing، gefangen. Fang! = امسك!\nيلعب الأطفال Fangen (لعبة المطاردة). Anfangen = البدء.'
arabic[287] = 'شاذ: fing، gefangen. يلعب الأطفال Fangen (المطاردة). Anfangen (البدء، حرفياً: الإمساك بشيء).'
arabic[288] = 'شاذ: stahl، gestohlen. من الجذر ذاته للإنجليزية steal.\nJemandem die Show stehlen = سرقة الأضواء من شخص.'
arabic[289] = 'شاذ: stahl، gestohlen. من الجذر ذاته للإنجليزية steal. Jemandem die Show stehlen (سرقة الأضواء) يعمل بالألمانية أيضاً.'

# 290-299
arabic[290] = 'شاذ: schoss، geschossen. Ein Tor schießen = تسجيل هدف.\nيُستخدم في كرة القدم والجريمة والتصوير.'
arabic[291] = 'شاذ: schoss، geschossen. Ein Tor schießen (تسجيل هدف). يُستخدم في كرة القدم والجريمة والتصوير الفوتوغرافي.'
arabic[292] = 'شاذ: griff، gegriffen. Nach etwas greifen = التمدد نحو شيء.\nBegreifen = الاستيعاب/الفهم.'
arabic[293] = 'شاذ: griff، gegriffen. Begreifen (الاستيعاب) = القبض العقلي. Zugreifen = التدخل/استغلال الفرصة.'
arabic[294] = 'قابل للانفصال: Er bricht ein. شاذ: brach ein، eingebrochen.\nأيضاً: Einbruch der Dunkelheit = حلول الظلام.'
arabic[295] = 'قابل للانفصال: Er bricht ein. شاذ: brach ein، eingebrochen. يُستخدم مجازاً أيضاً: Das Eis bricht ein (الجليد ينكسر).'
arabic[296] = 'من الإنجليزية strike. مستعارة في عهد الثورة الصناعية.\nIn den Streik treten = الانضمام إلى الإضراب.'
arabic[297] = 'من الإنجليزية strike. الصيغة الاسمية لـ streiken. إضرابات Deutsche Bahn أسطورية لدرجة أن لها مقالات خاصة.'
arabic[298] = 'Unter + lassen (ترك). غير قابل للانفصال. Unterlassen Sie das! = أوقف هذا!\nنبرة قانونية: Unterlassungsklage = دعوى منع.'
arabic[299] = 'Unter + lassen (ترك). غير قابل للانفصال. Unterlassen Sie das! (صيغة رسمية لأوقف هذا!). Unterlassungsklage (دعوى منع) هي السلاح القانوني لنزاعات الجيران.'

# 300-309
arabic[300] = 'Den Kopf schütteln = هزّ الرأس (معناه لا في ألمانيا).\nHände schütteln = المصافحة.'
arabic[301] = 'Den Kopf schütteln (هزّ الرأس) يعني لا في ألمانيا. Hände schütteln (المصافحة). حركتان متعاكستان للتواصل غير اللفظي.'
arabic[302] = 'من gegen (ضد). خصم رياضي أو محاور أو جار.\nEin fairer Gegner = خصم منصف.'
arabic[303] = 'من gegen (ضد). يمكن أن يكون خصماً رياضياً أو محاوراً أو جاراً في نزاع. Ein fairer Gegner (خصم منصف). Verumius يواجه Gegner صعباً.'
arabic[304] = 'Lange (طويل) + Weile (برهة). برهة طويلة.\nMir ist langweilig تعني أنا أشعر بالملل.'
arabic[305] = 'Lange + Weile. برهة طويلة. المركّب يقول الحكاية: الوقت يمتد بألم. Aus Langeweile (من الملل) أفعال مدمرة كثيرة.'
arabic[306] = 'اسم المفعول من trinken يُستخدم كصفة.\nBetrunken Auto fahren = قيادة السيارة تحت تأثير الكحول. ممنوع في كل مكان.'
arabic[307] = 'اسم المفعول من trinken يُستخدم كصفة. قيادة السيارة betrunken ممنوعة في كل مكان. تكوين اسم المفعول: be- + Stamm + -en.'
arabic[308] = 'اسم المفعول من scheiden. الحالة الاجتماعية: geschieden.\nصفة مشتقة من حكم قانوني.'
arabic[309] = 'اسم المفعول من scheiden. على الاستمارات الألمانية: Familienstand: geschieden. صفة مشتقة من حكم قانوني.'

# 310-319
arabic[310] = 'اسم المفعول من trennen. Sie leben getrennt = يعيشان بشكل منفصل.\nGetrennt zahlen = الدفع بشكل منفصل.'
arabic[311] = 'اسم المفعول من trennen. Getrennt zahlen (الدفع بشكل منفصل) في المطاعم أمر ألماني بامتياز. حتى بعد الطلاق.'
arabic[312] = 'من Heim (البيت). ما يبقى في البيت يظل خاصاً.\nGeheimdienst = جهاز الاستخبارات. Geheimnis = سر.'
arabic[313] = 'من Heim (البيت). أصلاً: مألوف، خاص. الآن: سري. Geheimdienst (جهاز الاستخبارات). Geheimnis (سر). الخصوصية المنزلية أصبحت سرية.'
arabic[314] = 'دلالة إيجابية، خلافاً لـ dünn (نحيف) التي قد تبدو سريرية.\nSchlank bleiben = الحفاظ على قوام رشيق.'
arabic[315] = 'دلالة إيجابية، خلافاً لـ dünn (نحيف). Schlank bleiben (الحفاظ على قوام رشيق) هدف لياقة بدنية. يُستخدم للأشياء أيضاً: schlanke Lösung (حل بسيط).'
arabic[316] = 'Ein schmaler Weg = ممر ضيق. مختلف عن eng (ضيق جسدياً).\nSchmal = ضيق بصرياً. Eng = ضيق فيزيائياً.'
arabic[317] = 'مختلف عن eng (ضيق جسدياً). Schmal = ضيق بصرياً. Eng = ضيق فيزيائياً. Schmale Schultern (أكتاف ضيقة) مقابل enge Hose (بنطال ضيق).'
arabic[318] = 'Das Bild hängt schief = الصورة معلقة بشكل مائل.\nSchiefgehen = السير بشكل خاطئ. Es wird schon schiefgehen تحذير ساخر.'
arabic[319] = 'Schiefgehen (السير بشكل خاطئ). Es wird schon schiefgehen! تشجيع ساخر: سينتهي بالفشل حتماً. كل مشروع لـ Verumius يسير schief.'

# 320-329
arabic[320] = 'أقوى من still. الشخص stumm لا يستطيع أو لا يريد الكلام.\nStummfilm = فيلم صامت.'
arabic[321] = 'أقوى من still. الشخص stumm لا يستطيع أو لا يريد الكلام. Stummfilm (فيلم صامت). الجار بقي stumm طوال مدة النزاع.'
arabic[322] = 'Selten so gelacht = نادراً ما ضحكت بهذا الشكل.\nEin seltenes Buch = كتاب نادر. Seltsam مشتقة من selten.'
arabic[323] = 'Selten so gelacht (نادراً ما ضحكت بهذا الشكل). كصفة: ein seltenes Buch (كتاب نادر). Seltsam مشتقة من selten.'
arabic[324] = 'Un- + glaub (تصديق) + -lich. مُعزِّز في الكلام غير الرسمي.\nDas ist unglaublich تعني هذا لا يُصدَّق.'
arabic[325] = 'Un- + glaub + -lich. مُعزِّز في الكلام غير الرسمي. Das ist unglaublich يُعبّر عن الدهشة. Unglaublich schön (جميل لا يُصدَّق).'
arabic[326] = 'Un- + heimlich (مألوف). ما ليس مألوفاً هو مثير للقلق.\nبالألمانية غير الرسمية: unheimlich gut = جيد بشكل مذهل.'
arabic[327] = 'Un- + heimlich (مألوف). كتب فرويد عن das Unheimliche. بالألمانية غير الرسمية: unheimlich gut (جيد بشكل مذهل). كلمة مزدوجة المعنى.'
arabic[328] = 'اسم المفعول من sich verlieben (الوقوع في الحب).\nVerliebt sein = الوقوع في الحب. Frisch verliebt = في بداية الحب.'
arabic[329] = 'اسم المفعول من sich verlieben. Verliebt sein (الوقوع في الحب). بعد عرض السلام بالمربى، بدا Verumius verliebt في الجيران.'

# 330-339
arabic[330] = 'Vergeblich warten = الانتظار عبثاً.\nمن vergeben (المسامحة، التخلي عن). شيء مُعطى بعيداً دون عائد.'
arabic[331] = 'Vergeblich warten (الانتظار عبثاً). من vergeben (المسامحة/التخلي عن). شيء مُعطى بعيداً دون عائد. كل محاولة للمصالحة بدت vergeblich في البداية.'
arabic[332] = 'شاذ: biss، gebissen. Der Hund beißt = الكلب يعض.\nIn den sauren Apfel beißen = ابتلاع المر (المواجهة بالأمر الصعب).'
arabic[333] = 'شاذ: biss، gebissen. In den sauren Apfel beißen (أكل التفاحة الحامضة = تقبّل الأمر الصعب). كان على Verumius العض والاعتذار.'
arabic[334] = 'Sich beschränken auf = الاقتصار على شيء.\nBeschränkt يمكن أن تعني محدوداً أو ضيّق الأفق.'
arabic[335] = 'Sich beschränken auf (الاقتصار على شيء). Beschränkt يمكن أن تعني محدوداً أو ضيّق الأفق. Beschränkung (قيد/تحديد).'
arabic[336] = 'Ent- + lassen (ترك). Aus dem Krankenhaus entlassen = الخروج من المستشفى.\nEntlassen werden = الطرد من العمل.'
arabic[337] = 'Ent- + lassen (ترك). Aus dem Krankenhaus entlassen (الخروج من المستشفى). Entlassen werden (الطرد من العمل). فعل واحد للتحرر والطرد.'
arabic[338] = 'Be- + Strafe + -en. السابقة be- تجعل Strafe فعلاً متعدياً.\nتوجد Hausordnung لمعاقبة المخالفين.'
arabic[339] = 'Be- + Strafe + -en. السابقة be- تحوّل Strafe إلى فعل متعدٍّ. توجد Hausordnung لمعاقبة المخالفين. bestrafen = العقوبة الرسمية.'

# 340-347
arabic[340] = 'شاذ: betrog، betrogen. Jemanden betrügen = خداع شخص.\nBetrug = احتيال (اسم). كلمة ثقيلة الوطأة.'
arabic[341] = 'شاذ: betrog، betrogen. في العلاقات والأعمال، كلمة ثقيلة الوطأة. Betrug (الاحتيال) مصطلح قانوني. Der Betrüger (المحتال).'
arabic[342] = 'Aus (خارج) + einander (بعضهم البعض). حرفياً: خارجاً من بعضهم البعض.\nAuseinandergehen = الانفصال.'
arabic[343] = 'Aus + einander. Sich auseinandersetzen mit (التعامل مع/نقاش) أساسي في الأكاديمية الألمانية. Auseinanderfallen (التداعي).'
arabic[344] = 'اختصار لـ nach Hause. Heimgehen = العودة إلى المنزل.\nDas Heim = المنزل (اسم). Heimat = الوطن.'
arabic[345] = 'اختصار لـ nach Hause. Heimgehen (العودة إلى المنزل)، Heimweh (الحنين إلى الوطن)، Heimat (الوطن). heim- سابقة مثمرة جداً.'
arabic[346] = 'خمس سوابق ومركّبات تُضاعف مفرداتك:\n\n1. miss- (خطأ): Missverständnis = سوء فهم\n2. über- (فوق): übertreiben = المبالغة\n3. unter- (تحت): unterbrechen = المقاطعة\n4. ver- (تحريف): versprechen = الوعد / التلفظ بخطأ\n5. zer- (تحطيم): zerreißen = التمزيق'
arabic[347] = 'السوابق القابلة للانفصال (منبورة، تنفصل):\nvorbei-: Er geht vorbei. / Er ist vorbeigegangen.\nweg-: Er geht weg. / Er ist weggegangen.\nzurück-: Er kommt zurück. / Er ist zurückgekommen.\nhinaus-: Er geht hinaus. / Er ist hinausgegangen.'

result = []
for i in range(348):
    if arabic[i] is None:
        print(f'WARNING: Missing translation for entry {i}')
    else:
        result.append({'english': data[i]['english'], 'arabic': arabic[i]})

with open('tmp/unit-16-notes-ar.json', 'w', encoding='utf-8') as f:
    json.dump(result, f, ensure_ascii=False, indent=2)

print(f'Saved {len(result)} entries to tmp/unit-16-notes-ar.json')