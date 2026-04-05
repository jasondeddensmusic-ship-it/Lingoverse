const fs = require('fs');
const data = JSON.parse(fs.readFileSync('tmp/unit-15-filtered.json', 'utf8'));

const translations = [
{english: data[169].english, arabic: 'من الإنجليزية/الفرنسية "bar". حانات الأسطح ذات المنظر الميناني شهيرة في هامبورغ.'},
{english: data[170].english, arabic: 'تحتوي منطقة HafenCity في هامبورغ على حانات أسطح بإطلالات على الميناء. "An der Bar sitzen" (الجلوس عند البار) نشاط مسائي شائع.'},
{english: data[171].english, arabic: 'من الفرنسية "buffet". "Frühstücksbuffet" = بوفيه الإفطار.'},
{english: data[172].english, arabic: 'تشتهر الفنادق الألمانية ببوفيهات الإفطار المتقنة. تُهجّأ أيضاً "Büfett" في الألمانية القديمة. كلا الهجاءين صحيح.'},
{english: data[173].english, arabic: 'لائحة الاتحاد الأوروبي: فقط مربى الحمضيات يمكن تسميته "Marmelade". كل ما عداه يُسمى "Konfitüre".'},
{english: data[174].english, arabic: 'تنص لائحة الاتحاد الأوروبي على أن فقط مربى الحمضيات يُسمى "Marmelade". كل ما عداه هو "Konfitüre" من الناحية الرسمية. لكن كل الألمان لا يزالون يقولون Marmelade. في سويسرا، "Konfitüre" هي الكلمة القياسية.'},
{english: data[175].english, arabic: 'من الفرنسية. تُنطق "mar-ga-REE-ne" مع التشديد على المقطع الثالث.'},
{english: data[176].english, arabic: 'اختُرعت بديلاً رخيصاً للزبدة. تُنطق "mar-ga-REE-ne" في الألمانية مع التشديد على المقطع الثالث. ركيزة على مائدة الإفطار إلى جانب Butter.'},
{english: data[177].english, arabic: 'نفس جذر الكلمة الإنجليزية "wool". ضرورية في مناخ هامبورغ البحري.'},
{english: data[178].english, arabic: 'مناخ هامبورغ البحري يجعل ملابس Wolle الدافئة ضرورية. "Merinowolle" (صوف المرينو) مفضّل. "In Wolle gepackt" تعني مُلفَّفاً بالملابس الدافئة.'},
{english: data[179].english, arabic: 'مرتبطة بالكلمة الإنجليزية "leather". Lederhosen بافارية وليست من هامبورغ.'},
{english: data[180].english, arabic: 'Lederhosen (سراويل جلدية) تقليد بافاري، لا يخص هامبورغ. تُفضّل هامبورغ سترات المطر العملية. "Echtes Leder" (جلد حقيقي) علامة جودة.'},
{english: data[181].english, arabic: 'من اليونانية "katalogos" (قائمة). كان ذات مرة العمود الفقري للتسوق البريدي الألماني.'},
{english: data[182].english, arabic: 'كان كتالوج Otto ذات مرة الكتاب المقدس للتسوق في ألمانيا. شركة Otto ومقرها هامبورغ لا تزال من أكبر متاجر التجزئة عبر الإنترنت في العالم. انتهى عصر الKatalog المادي حوالي عام 2010.'},
{english: data[183].english, arabic: 'مرتبطة بالكلمة الإنجليزية "hut". "Berghütte" = كوخ جبلي، "Skihütte" = نزل تزلج.'},
{english: data[184].english, arabic: 'في جبال الألب، توفر الHütten طعاماً ومأوى للمشاة. يمكنك النوم في Berghütte بعد نزهة طويلة. "Hüttenkäse" (جبن القريش) يعني حرفياً جبن الكوخ.'},
{english: data[185].english, arabic: 'هامبورغ = Ham (مرج/انحناء) + Burg (قلعة). تضم ألمانيا أكثر من 25,000 قلعة.'},
{english: data[186].english, arabic: '"Hamburg" تحتوي حرفياً على هذه الكلمة: Ham (مرج/انحناء) + Burg (قلعة). تضم ألمانيا أكثر من 25,000 قلعة وقصر Burgen und Schlösser. كثير منها الآن فنادق ومتاحف.'},
{english: data[187].english, arabic: 'Halle (قاعة) + Bad (حمام/مسبح). كل مدينة ألمانية تقريباً تمتلك واحداً.'},
{english: data[188].english, arabic: 'يحب الألمان السباحة. تقريباً كل مدينة تمتلك Hallenbad (مسبح داخلي) وFreibad (مسبح خارجي للصيف). دروس السباحة للأطفال شبه عالمية.'},
{english: data[189].english, arabic: 'Gast (ضيف) + Haus (بيت). مطبخ ألماني تقليدي: طعام دسم وبيرة محلية.'},
{english: data[190].english, arabic: 'Gasthaus أكثر ريفية من Restaurant: طعام دسم وبيرة محلية وأثاث خشبي. كثير من القرى الألمانية لديها Gasthaus كمركز اجتماعي لها.'},
{english: data[191].english, arabic: 'Gast + Stätte (مكان). المصطلح القانوني الرسمي للمنشآت التي تُقدّم الطعام.'},
{english: data[192].english, arabic: 'في نماذج الضرائب وتراخيص الأعمال، كل مطعم هو "Gaststätte" رسمياً. الكلمة تجسّد الألمانية البيروقراطية في أبهى صورها.'},
{english: data[193].english, arabic: 'Kaffee + Haus. فيينا جعلت الKaffeehaus مشهوراً عالمياً.'},
{english: data[194].english, arabic: 'جعلت فيينا الKaffeehaus مشهوراً عالمياً، لكن هامبورغ تدّعي أنها أول مدينة أسّسته في ألمانيا (1677). ثقافة القهوة متجذّرة في الشمال. هامبورغ لا تزال مركز تجارة القهوة في ألمانيا.'},
{english: data[195].english, arabic: 'من "warm". اللاحقة -e تحوّل الصفات إلى أسماء مجردة (مؤنثة دائماً).'},
{english: data[196].english, arabic: 'اللاحقة -e تحوّل الصفات إلى أسماء مجردة مؤنثة: warm/Wärme، kalt/Kälte، nahe/Nähe، groß/Größe. مؤنثة دائماً. نمط منتج جداً.'},
{english: data[197].english, arabic: 'من "kalt". نفس النمط كـ Wärme. برودة هامبورغ البحرية رطبة وعاصفة.'},
{english: data[198].english, arabic: '"Trotz der Kälte" (رغم البرد) تستخدم الجر الرابع بعد "trotz". برودة هامبورغ البحرية رطبة وعاصفة، تختلف عن البرد الجبلي الجاف في بافاريا.'},
{english: data[199].english, arabic: 'شمال ألمانيا flach (مسطح). عكس جبال الألب في الجنوب.'},
{english: data[200].english, arabic: '"Flachland" (الأرض المسطحة) يصف شمال ألمانيا كله. أعلى نقطة في هامبورغ 116 متراً فقط. مرتبطة بالكلمة الإنجليزية "flat" عبر الجرمانية الأولى.'},
{english: data[201].english, arabic: '"Vorsicht, glatte Straße!" = انتبه، طريق زلق! في الشتاء: "Glatteis".'},
{english: data[202].english, arabic: 'في الشتاء، "Glatteis" (الجليد الشفاف) خطر جسيم على الطرق الألمانية. "Glatteiswarnung" (تحذير من الجليد الشفاف) مصطلح شائع في نشرات الطقس.'},
{english: data[203].english, arabic: 'Ab (عن/بعيداً) + biegen (الانعطاف). فعل منفصل اللاحقة.'},
{english: data[204].english, arabic: 'منفصل اللاحقة: "Biegen Sie rechts ab" = انعطف يميناً. في الجملة الفرعية يُدمج: "...wo ich abbiegen muss." ضروري لإعطاء الاتجاهات واتباعها.'},
{english: data[205].english, arabic: 'من "Bremse" (الفرامل). "Plötzlich bremsen" = الفرملة المفاجئة.'},
{english: data[206].english, arabic: '"Die Bremsen sind gut" (الفرامل جيدة) عبارة مهمة لفحص السيارات. "Bremse" تعني أيضاً "ذبابة الخيل"، معنى مختلف تماماً بنفس الهجاء.'},
{english: data[207].english, arabic: 'بوصفه حرف جر: während + جر رابع (خلال).\nبوصفه أداة ربط: während + جملة بفعل أخير (بينما).'},
{english: data[208].english, arabic: 'Während يؤدي دورين: حرف جر مع الجر الرابع (während des Essens) وأداة ربط تعني "بينما" (während ich schlief). كلاهما ضروري في المستوى B1.'},
];

const existing = JSON.parse(fs.readFileSync('tmp/translations_batch1.json', 'utf8'));
const all = existing.concat(translations);
fs.writeFileSync('tmp/translations_batch1.json', JSON.stringify(all, null, 2));
console.log('Total so far:', all.length);
