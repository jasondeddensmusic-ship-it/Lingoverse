/**
 * Arabic Translation Dictionary — Single Source of Truth
 *
 * This file contains ALL English→Arabic translations for the German-Arabic
 * curriculum (srcLang:"ar"). Both the generator and translator scripts
 * import from this file.
 *
 * Architecture:
 *   arabic-dictionary.cjs    ← THIS FILE (shared data)
 *   generate-arabic-units.cjs ← Generator (imports this)
 *   translate-ar-markers.cjs  ← Translator (imports this)
 *
 * Organization:
 *   WORDS     — src field translations (word/phrase level)
 *   NOTES     — Pedagogical notes (rewritten for Arabic speakers)
 *   FUNFACTS  — Etymology/culture notes in Arabic
 *   EXAMPLES  — Example sentence translations (exampleSrc)
 *   HINTS     — Quiz hints (PP8: must NOT contain answer words)
 *   STORIES   — Story narration src translations
 *   TIPS      — Tip text/deepDive translations
 *   INTROS    — Intro desc/goals translations
 *   QUIZZES   — sSrc quiz stem translations
 *   PATTERNS  — Regex-based translations for repeated patterns
 *
 * PP61: For srcLang:"ar", ALL metalanguage is in Arabic.
 * PP32: Every sentence must be native-speaker quality MSA.
 * PP22c: No em-dashes.
 *
 * Arabic-specific pedagogy to embed in notes/tips:
 *   - German "ch" ≈ Arabic خ (advantage for Arabic speakers)
 *   - German "p" vs "b" — Arabic has no /p/ (common difficulty)
 *   - German "w" = /v/ (no Arabic equivalent for /v/)
 *   - German 4 cases parallel Arabic 3 cases (مرفوع/منصوب/مجرور)
 *   - German 3 genders (m/f/n) vs Arabic 2 (m/f) — neuter needs explanation
 *   - German compound nouns parallel Arabic إضافة (idafa)
 *   - German der/die/das vs Arabic ال (al-)
 */

// ═══════════════════════════════════════════════════════════════
// WORDS — src field translations
// Key: exact English src text. Value: Arabic translation.
// ═══════════════════════════════════════════════════════════════
const WORDS = {
  // ── Greetings & Basics ──
  "Hello": "مرحبًا",
  "Good morning": "صباح الخير",
  "Good evening": "مساء الخير",
  "Good night": "تصبح على خير",
  "Goodbye": "مع السلامة",
  "Please": "من فضلك",
  "Thank you": "شكرًا",
  "Thanks": "شكرًا",
  "Yes": "نعم",
  "No": "لا",
  "Excuse me": "عذرًا",
  "Sorry": "آسف",
  "Welcome": "أهلاً وسهلاً",
  "Excuse me / Sorry": "عذرًا / آسف",
  "Good day (formal greeting)": "نهارك سعيد (تحية رسمية)",
  "Bye": "مع السلامة (غير رسمي)",
  "Goodbye (formal)": "مع السلامة (رسمي)",
  "Goodbye (on the phone)": "مع السلامة (هاتفيًا)",
  "See you tomorrow": "أراك غدًا",
  "See you later": "أراك لاحقًا",
  "See you soon": "أراك قريبًا",
  "Hello / Goodbye (Southern German, Austrian)": "مرحبًا / مع السلامة (ألمانية جنوبية ونمساوية)",
  "Please / You're welcome / Here you go": "من فضلك / عفوًا / تفضل",
  "Thank you very much": "شكرًا جزيلًا",
  "You're very welcome / Here you go": "عفوًا جدًا / تفضل",
  "I am sorry": "أنا آسف",
  "No problem": "لا مشكلة",
  "My pleasure / You're welcome": "على الرحب والسعة",

  // ── Responses & Discourse ──
  "maybe / perhaps": "ربما",
  "exactly / right / indeed": "بالضبط / صحيح / فعلًا",
  "that's right / true": "هذا صحيح",
  "of course / naturally": "بالطبع / طبعًا",
  "I am...": "أنا...",

  // ── Questions & Formal ──
  "What is your name? (formal)": "ما اسمك؟ (رسمي)",
  "Where do you come from? (formal)": "من أين أنت؟ (رسمي)",
  "What time is it?": "كم الساعة؟",
  "How are you?": "كيف حالك؟",
  "I am fine": "أنا بخير",
  "What is your name?": "ما اسمك؟",
  "My name is...": "اسمي...",
  "I don't understand": "لا أفهم",
  "Do you speak English?": "هل تتكلم الإنجليزية؟",

  // ── Question Words ──
  "who": "مَن",
  "what": "ماذا",
  "where": "أين",
  "where from": "من أين",
  "where to": "إلى أين",
  "when": "متى",
  "how": "كيف",
  "why": "لماذا",
  "how much, how many": "كم",

  // ── Pronouns ──
  "I / you / he / she / it": "أنا / أنت / هو / هي / هو (محايد)",
  "we / you all / they / you (formal)": "نحن / أنتم / هم / حضرتك",
  "you (formal)": "حضرتك (صيغة الاحترام)",

  // ── Verbs ──
  "to be": "يكون",
  "to have": "يملك",
  "to go": "يذهب",
  "to go (on foot)": "يمشي / يذهب (سيرًا)",
  "to come": "يأتي",
  "to say": "يقول",
  "to say / to tell": "يقول / يُخبر",
  "to speak": "يتكلم",
  "to understand": "يفهم",
  "to know": "يعرف",
  "to know (a person or place)": "يعرف (شخصًا أو مكانًا)",
  "to know (a fact)": "يعلم (حقيقة)",
  "to get to know, to meet (for the first time)": "يتعرف على (للمرة الأولى)",
  "to learn": "يتعلم",
  "to live": "يعيش",
  "to live / to reside": "يعيش / يسكن",
  "to work": "يعمل",
  "to play": "يلعب",
  "to read": "يقرأ",
  "to write": "يكتب",
  "to sleep": "ينام",
  "to buy": "يشتري",
  "to give": "يعطي",
  "to take": "يأخذ",
  "to find": "يجد",
  "to see": "يرى",
  "to hear": "يسمع",
  "to think": "يفكر",
  "to need": "يحتاج",
  "to want": "يريد",
  "to like": "يحب",
  "to try": "يحاول",
  "to help": "يساعد",
  "to ask": "يسأل",
  "to wait": "ينتظر",
  "to call": "يتصل",
  "to travel": "يسافر",
  "to eat": "يأكل",
  "to drink": "يشرب",
  "to drive / to go (by vehicle)": "يقود / يذهب (بمركبة)",
  "to do / to make": "يفعل / يصنع",
  "to repeat": "يُعيد / يُكرر",
  "to answer": "يُجيب",
  "to mean": "يعني",
  "to spell": "يتهجى",
  "to thank": "يشكر",
  "to excuse": "يعذر",

  // ── Nouns: People ──
  "the friend (male)": "الصديق (ذكر)",
  "the friend (female)": "الصديقة (أنثى)",
  "the man": "الرجل",
  "the woman": "المرأة",
  "the woman, Mrs.": "السيدة",
  "the gentleman, Mr.": "السيد",
  "the child": "الطفل",
  "the boy": "الولد",
  "the girl": "البنت",
  "the family": "العائلة",
  "the mother": "الأم",
  "the father": "الأب",
  "the person / human being": "الإنسان / الشخص",
  "the German woman": "المرأة الألمانية",
  "the European (male person)": "الأوروبي (ذكر)",
  "the foreigner (male)": "الأجنبي (ذكر)",

  // ── Nouns: Places & Transport ──
  "the train": "القطار",
  "the train station": "محطة القطار",
  "the bus": "الحافلة",
  "the car": "السيارة",
  "the airplane": "الطائرة",
  "the station": "المحطة",
  "the airport": "المطار",
  "the ticket": "التذكرة",
  "the taxi": "سيارة الأجرة",
  "the city": "المدينة",
  "the street": "الشارع",
  "the house": "المنزل",
  "the school": "المدرسة",
  "the hotel": "الفندق",
  "the restaurant": "المطعم",
  "the hostel": "النزل",
  "the counter, the ticket window": "شباك التذاكر",
  "exit": "المخرج",

  // ── Nouns: Personal Data ──
  "the name": "الاسم",
  "the first name": "الاسم الأول",
  "the surname, family name": "اسم العائلة",
  "the address": "العنوان",
  "the age": "العمر",
  "the form of address, title": "اللقب / صيغة المخاطبة",
  "the marital status": "الحالة الاجتماعية",
  "the birthday": "عيد الميلاد",
  "the year of birth": "سنة الميلاد",
  "the place of birth": "مكان الميلاد",
  "the passport": "جواز السفر",
  "the language": "اللغة",
  "the thanks, gratitude": "الشكر / الامتنان",
  "the greeting": "التحية",
  "the reunion, seeing again": "اللقاء مجددًا",
  "heartfelt welcome, warm welcome": "ترحيب حار",

  // ── Nouns: Geography ──
  "Germany": "ألمانيا",
  "Europe": "أوروبا",
  "the country": "البلد",
  "the homeland": "الوطن",
  "the world": "العالم",
  "abroad, foreign country": "الخارج / بلد أجنبي",

  // ── Nouns: Travel ──
  "departure": "المغادرة",
  "the departure": "المغادرة",
  "arrival": "الوصول",
  "platform / track": "الرصيف / المسار",
  "delay": "التأخير",
  "the luggage": "الأمتعة",
  "the suitcase": "الحقيبة",
  "the trip, the journey": "الرحلة",
  "customs": "الجمارك",
  "the clock / o'clock": "الساعة",

  // ── Nouns: Food ──
  "breakfast": "الفطور",
  "noon, midday": "الظهر",
  "evening": "المساء",
  "food, meal": "الطعام، الوجبة",
  "the soup": "الحساء",
  "menu": "قائمة الطعام",
  "appetite": "الشهية",
  "the heart": "القلب",

  // ── Adjectives ──
  "German (language)": "الألمانية (اللغة)",
  "German (adjective)": "ألماني (صفة)",
  "European (adjective)": "أوروبي (صفة)",
  "foreign": "أجنبي",
  "international": "دولي",
  "new": "جديد",
  "valid": "صالح / ساري المفعول",
  "tired": "متعب",
  "beautiful / nice / lovely": "جميل / لطيف",
  "wonderful": "رائع",
  "bad": "سيئ",
  "simple, easy": "بسيط، سهل",
  "funny, fun": "مضحك، ممتع",
  "loud": "عالٍ (الصوت)",
  "quiet, soft (sound)": "هادئ، خافت",
  "calm, peaceful": "هادئ، مسالم",
  "bitter": "مُر",
  "delicious / yummy": "لذيذ",
  "salty": "مالح",
  "satisfied, content": "راضٍ، قانع",
  "good, well": "جيد / حسنًا",

  // ── Adverbs & Particles ──
  "a little bit": "قليلًا",
  "something / a little": "شيء ما / قليل",
  "today": "اليوم",
  "tomorrow": "غدًا",
  "left": "يسار",
  "right": "يمين",
  "straight ahead": "مباشرة للأمام",
  "and": "و",
  "but": "لكن",
  "or": "أو",
  "also, too": "أيضًا",
  "here": "هنا",
  "not": "ليس / لا",
  "very": "جدًا",
  "for": "لـ / من أجل",
  "in, into": "في / إلى",
  "nothing": "لا شيء",
  "together": "معًا",
  "gladly, with pleasure": "بكل سرور",

  // ── Prepositions ──
  "to / toward (a city or country)": "إلى (مدينة أو بلد)",

  // ── Pronouns & Misc ──
  "one, people (in general)": "المرء (بمعنى عام)",

  // ── Numbers ──
  "zero": "صفر",
  "one": "واحد",
  "two": "اثنان",
  "three": "ثلاثة",
  "four": "أربعة",
  "five": "خمسة",
  "six": "ستة",
  "seven": "سبعة",
  "eight": "ثمانية",
  "nine": "تسعة",
  "ten": "عشرة",
  "eleven": "أحد عشر",
  "twelve": "اثنا عشر",
  "twenty": "عشرون",
  "two (2)": "اثنان (٢)",
  "four (4)": "أربعة (٤)",
  "six (6)": "ستة (٦)",
  "eleven (11)": "أحد عشر (١١)",
  "twelve (12)": "اثنا عشر (١٢)",
  "thirteen (13)": "ثلاثة عشر (١٣)",
  "fourteen (14)": "أربعة عشر (١٤)",
  "fifteen (15)": "خمسة عشر (١٥)",
  "sixteen (16)": "ستة عشر (١٦)",
  "seventeen (17)": "سبعة عشر (١٧)",
  "eighteen (18)": "ثمانية عشر (١٨)",
  "nineteen (19)": "تسعة عشر (١٩)",

  // ── Food verbs ──
  "to have breakfast": "يتناول الفطور",
  "to smoke": "يدخن",
  "to taste": "يتذوق",
  "cigarette": "السيجارة",
};

// ═══════════════════════════════════════════════════════════════
// PATTERN TRANSLATIONS — regex-based for repeated structures
// Applied when exact match fails. Order matters (first match wins).
// ═══════════════════════════════════════════════════════════════
const PATTERNS = [
  // Note patterns: "Masculine noun. Plural: die X."
  // These are handled by the translator's pattern engine, not here.
  // Pattern translations go in translate-ar-markers.cjs
];

// ═══════════════════════════════════════════════════════════════
// NOTES — Pedagogical notes rewritten for Arabic speakers
// ═══════════════════════════════════════════════════════════════
const NOTES = {
  // ── Unit 1 Notes ──
  "The most common informal greeting in German.":
    "التحية غير الرسمية الأكثر شيوعًا في الألمانية. مثل 'أهلاً' بالعربية.",
  "Used to get attention or to apologize.":
    "تُستخدم لجذب الانتباه أو للاعتذار. مثل 'عذرًا' أو 'لو سمحت' بالعربية.",
  "Masculine noun. Plural: die Züge.":
    "اسم مذكر. الجمع: die Züge.\nفي الألمانية ثلاثة أجناس نحوية. الثالث (المحايد) لا يوجد في العربية.",
  "Irregular verb: ich fahre, du fährst, er fährt.":
    "فعل شاذ: ich fahre، du fährst، er fährt.\nتتغير الحركة من a إلى ä. تشبه تغيرات الأفعال الشاذة في العربية.",
  "Irregular: ich spreche, du sprichst, er spricht.":
    "فعل شاذ: ich spreche، du sprichst، er spricht.\nحرف e يتحول إلى i في صيغتي du و er/sie/es.",
  "Used to soften statements. Very handy when learning!":
    "تُستخدم لتلطيف العبارات. مفيدة جدًا للمبتدئين!",
  "The standard formal greeting, used any time of day.":
    "التحية الرسمية القياسية. تُستخدم في أي وقت من اليوم.",
  "Informal farewell. Pronounced like 'choose' with a softer ch.":
    "وداع غير رسمي. تُنطق 'تشوس'.\nصوت ch الألماني قريب من خ العربية. هذه ميزة لك كناطق بالعربية!",
  "Literally: 'Until seeing again.' The formal farewell.":
    "حرفيًا: 'حتى نلتقي مجددًا.' الوداع الرسمي.",
  "Informal farewell. Very common among friends.":
    "وداع غير رسمي. شائع جدًا بين الأصدقاء.",
  "Informal farewell. Bald = soon.":
    "وداع غير رسمي. Bald = قريبًا.",
  "Informal farewell. Bis = until. Morgen = tomorrow.":
    "وداع غير رسمي. Bis = حتى. Morgen = غدًا.",
  "Short and essential. 'Danke schön' is more polite.":
    "قصيرة وأساسية. Danke schön أكثر تأدبًا.",
  "Three meanings! Context tells you which one.":
    "ثلاثة معانٍ! السياق يحدد المعنى المقصود.",
  "More polite than plain Danke. Used in shops and formal situations.":
    "أكثر تأدبًا من Danke العادية. تُستخدم في المحلات والمواقف الرسمية.",
  "More formal than Bitte. Used in shops and service situations.":
    "أكثر رسمية من Bitte. تُستخدم في المحلات وحالات الخدمة.",
  "Casual response to thanks or apologies.":
    "رد عفوي على الشكر أو الاعتذار.",
  "Pronounced 'yah.' Simple and direct.":
    "تُنطق 'يا'. بسيطة ومباشرة.",
  "Pronounced 'nine' (like the number). Clear and firm.":
    "تُنطق 'ناين' (مثل الرقم بالإنجليزية). واضحة وحاسمة.",
  "From the verb 'sein' (to be). The most basic self-intro.":
    "من الفعل sein (يكون). أبسط طريقة لتقديم النفس.",
  "Regular present tense: ich gehe, du gehst, er geht.":
    "مضارع منتظم: ich gehe، du gehst، er geht.",
  "Regular: ich sage, du sagst, er sagt.":
    "منتظم: ich sage، du sagst، er sagt.",
  "Regular: ich mache, du machst, er macht.":
    "منتظم: ich mache، du machst، er macht.",
  "Asks about a person. Always at the start of the question.":
    "تسأل عن شخص. دائمًا في بداية السؤال.",
  "Asks about things, actions, or ideas.":
    "تسأل عن أشياء أو أفعال أو أفكار.",
  "Asks about location. Static position, not direction.":
    "تسأل عن المكان. موقع ثابت وليس اتجاه.",
  "Asks about origin or direction of approach.":
    "تسأل عن الأصل أو اتجاه القدوم.",
  "Asks about destination or direction of travel.":
    "تسأل عن الوجهة أو اتجاه السفر.",
  "Asks about time. Expect a clock time or day as answer.":
    "تسأل عن الزمن. توقع وقتًا أو يومًا كإجابة.",
  "Asks about manner, condition, or method.":
    "تسأل عن الطريقة أو الحالة أو الأسلوب.",
  "The singular pronouns. 'Du' is informal, for friends and family.":
    "ضمائر المفرد. du غير رسمي للأصدقاء والعائلة.",
  "Plural pronouns. 'Sie' (capital S) is the formal 'you.'":
    "ضمائر الجمع. Sie (بحرف كبير) هي صيغة الاحترام.",
  "Always capitalized. Used with strangers, bosses, officials, older people.":
    "تُكتب دائمًا بحرف كبير. تُستخدم مع الغرباء والرؤساء والمسؤولين وكبار السن.",
  "Regular verb. Follows the standard pattern: -e, -st, -t, -en, -t, -en.":
    "فعل منتظم. يتبع النمط القياسي: -e، -st، -t، -en، -t، -en.",
  "Regular: ich lerne, du lernst, er lernt, wir lernen.":
    "منتظم: ich lerne، du lernst، er lernt، wir lernen.",
  "Regular: ich wohne, du wohnst, er wohnt, wir wohnen.":
    "منتظم: ich wohne، du wohnst، er wohnt، wir wohnen.",
  "Adverb. One of the most common German words.":
    "ظرف. من أكثر الكلمات الألمانية شيوعًا.",
  "The most common German conjunction. Connects words, phrases, and clauses.":
    "أداة الربط الأكثر شيوعًا بالألمانية. تربط الكلمات والعبارات والجمل.",
  "Conjunction expressing contrast. Does not change word order.":
    "أداة ربط تعبر عن التناقض. لا تغير ترتيب الكلمات.",
  "Conjunction for alternatives. Used in questions and statements.":
    "أداة ربط للبدائل. تُستخدم في الأسئلة والتقريرات.",
  "Adverb meaning 'also' or 'too'. Position varies in the sentence.":
    "ظرف بمعنى 'أيضًا'. يتغير موقعه في الجملة.",
  "Adverb of place. Indicates the speaker's location.":
    "ظرف مكان. يشير إلى موقع المتحدث.",
  "Negation adverb. Negates verbs, adjectives, adverbs.":
    "ظرف نفي. ينفي الأفعال والصفات والظروف.",
  "Intensifying adverb. Placed before the word it intensifies.":
    "ظرف تكثيف. يوضع قبل الكلمة التي يكثفها.",
  "Adjective and adverb. Comparative: besser. Superlative: am besten.":
    "صفة وظرف. المقارنة: besser. التفضيل: am besten.",
  "Preposition. Always takes the accusative case.":
    "حرف جر. يأخذ دائمًا حالة النصب (Akkusativ).",
  "Preposition. Takes dative (location) or accusative (direction).":
    "حرف جر. يأخذ المجرور (مكان) أو المنصوب (اتجاه). مثل 'في' العربية!",
  "Indefinite pronoun. Used for general statements. Always third person singular.":
    "ضمير غير محدد. للعبارات العامة. دائمًا مفرد غائب.",
  "Indefinite pronoun. Opposite of 'alles' (everything).":
    "ضمير غير محدد. عكس alles (كل شيء).",
  "Used in Bavaria and Austria. Works for both hello and goodbye.":
    "تُستخدم في بافاريا والنمسا. تصلح للترحيب والوداع معًا.",
  "Neuter noun. A budget place to sleep in a new city.":
    "اسم محايد. مكان إقامة رخيص في مدينة جديدة.",
  "Adjective. Ich bin müde = I am tired.":
    "صفة. Ich bin müde = أنا متعب.",
  "Masculine noun. Plural: die Menschen. Refers to humans in general.":
    "اسم مذكر. الجمع: die Menschen. يشير إلى البشر عمومًا.",
};

// ═══════════════════════════════════════════════════════════════
// FUNFACTS — Etymology/culture notes in Arabic
// ═══════════════════════════════════════════════════════════════
const FUNFACTS = {
  "'Hallo' only became common in German in the early 1900s, borrowed from English telephone culture. Before that, Germans said 'Guten Tag.'":
    "لم تنتشر كلمة Hallo في الألمانية إلا في أوائل القرن العشرين، مقتبسة من ثقافة الهاتف الإنجليزية. قبل ذلك كان الألمان يقولون Guten Tag.",
  "15 letters long! Literally 'un-guilt-ification.' Germans build words like LEGO bricks: Ent + schuld + ig + ung.":
    "١٥ حرفًا! حرفيًا: 'إزالة الذنب.' الألمان يبنون الكلمات مثل مكعبات الليغو: Ent + schuld + ig + ung.\nمثل بناء الكلمات في العربية من جذر ثلاثي.",
  "'Zug' literally means 'pull.' The word also means 'a gulp' of beer and 'a move' in chess. Context is everything!":
    "كلمة Zug تعني حرفيًا 'سحب'. وتعني أيضًا 'رشفة' بيرة و'نقلة' في الشطرنج. السياق هو كل شيء!\nمثل كلمة 'عين' بالعربية التي لها معانٍ كثيرة.",
  "'Deutsch' comes from an old Germanic word meaning 'of the people.' It originally distinguished the common language from Latin.":
    "كلمة Deutsch تأتي من كلمة جرمانية قديمة تعني 'من الشعب'. كانت تميز لغة العامة عن اللاتينية.",
  "Related to English 'speak.' Both come from the same ancient root. German kept the 'spr-' cluster that English simplified.":
    "مرتبطة بالإنجليزية speak. كلاهما من نفس الجذر القديم. احتفظت الألمانية بتجمع الأحرف spr- الذي بسّطته الإنجليزية.",
  "'Bisschen' comes from 'Biss' (bite). So 'ein bisschen' literally means 'one little bite.' A bite-sized amount!":
    "كلمة Bisschen تأتي من Biss (عضة). إذن ein bisschen تعني حرفيًا 'عضة صغيرة واحدة'. كمية بحجم لقمة!",
  "Germans love compound nouns. Bahnhof = track-yard. Hauptbahnhof = main-track-yard. Bahnhofsviertel = track-yard-quarter!":
    "الألمان يعشقون الأسماء المركبة. Bahnhof = ساحة السكة. Hauptbahnhof = ساحة السكة الرئيسية.\nمثل الإضافة بالعربية: محطة القطار الرئيسية.",
  "The word Taxi is international. It comes from 'taximeter', a device that measures distance and calculates the fare. Invented in Germany in 1891.":
    "كلمة Taxi عالمية. تأتي من taximeter، جهاز يقيس المسافة ويحسب الأجرة. اختُرع في ألمانيا عام ١٨٩١.",
  "'Nach' is one of those small German words with big power. It means 'to' (nach Berlin), 'after' (nach dem Essen), and even 'according to' (nach meiner Meinung). Context decides which meaning applies.":
    "Nach من الكلمات الألمانية الصغيرة ذات القوة الكبيرة. تعني 'إلى' (nach Berlin)، 'بعد' (nach dem Essen)، وحتى 'حسب' (nach meiner Meinung). السياق يحدد المعنى.",
  "Germans have greetings for every time of day: Guten Morgen (morning), Guten Tag (day), Guten Abend (evening). In Bavaria, you'll hear 'Grüß Gott' instead.":
    "للألمان تحيات لكل وقت: Guten Morgen (صباحًا)، Guten Tag (نهارًا)، Guten Abend (مساءً). في بافاريا ستسمع Grüß Gott بدلًا منها.",
  "'Tschüss' evolved from the French 'adieu' (to God), which became 'adjuees' in dialect, then 'tschuess.' A French farewell in German clothing!":
    "تطورت Tschüss من الفرنسية adieu (إلى الله)، التي أصبحت adjuees في اللهجة، ثم tschuess. وداع فرنسي بلباس ألماني!",
  "'Auf Wiedersehen' is literally 'upon again-seeing.' On the phone, Germans say 'Auf Wiederhören' (upon again-hearing) instead. Precision in every farewell!":
    "Auf Wiedersehen تعني حرفيًا 'إلى أن نتقابل'. على الهاتف يقول الألمان Auf Wiederhören (إلى أن نتسامع). دقة في كل وداع!",
};

// ═══════════════════════════════════════════════════════════════
// EXAMPLES — Example sentence translations (exampleSrc)
// ═══════════════════════════════════════════════════════════════
const EXAMPLES = {
  "A: Hello! How's it going?\\nB: Hello! Good, thanks!":
    "A: مرحبًا! كيف الحال؟\\nB: مرحبًا! بخير، شكرًا!",
  "A: Excuse me, where is the train station?\\nB: Straight ahead and then left.":
    "A: عذرًا، أين محطة القطار؟\\nB: مباشرة للأمام ثم يسارًا.",
  "A: When does the train leave?\\nB: The train leaves at 2 PM.":
    "A: متى يغادر القطار؟\\nB: القطار يغادر الساعة الثانية ظهرًا.",
  "A: Are you going to Hamburg?\\nB: No, I'm going to Berlin.":
    "A: هل تذهب إلى هامبورغ؟\\nB: لا، أنا ذاهب إلى برلين.",
  "A: Are you learning German?\\nB: Yes, I am learning German!":
    "A: هل تتعلم الألمانية؟\\nB: نعم، أنا أتعلم الألمانية!",
  "A: Do you speak German?\\nB: Yes, a little bit.":
    "A: هل تتحدث الألمانية؟\\nB: نعم، قليلًا.",
  "A: Where is the train station?\\nB: The train station is over there.":
    "A: أين محطة القطار؟\\nB: محطة القطار هناك.",
  "A: Shall we take a taxi?\\nB: No, I am going by train.":
    "A: هل نأخذ سيارة أجرة؟\\nB: لا، سأذهب بالقطار.",
  "A: Where are you going?\\nB: I'm going to Germany.":
    "A: إلى أين أنت ذاهب؟\\nB: أنا ذاهب إلى ألمانيا.",
  "A: Good day! I am Dr. Yilmaz.\\nB: Good day! Nice to meet you.":
    "A: نهارك سعيد! أنا الدكتورة يلماز.\\nB: نهارك سعيد! تشرفنا.",
  "A: I have to go. Bye!\\nB: Bye! See you tomorrow!":
    "A: يجب أن أذهب. مع السلامة!\\nB: مع السلامة! أراك غدًا!",
  "A: Thank you very much for your help!\\nB: You're welcome. Goodbye!":
    "A: شكرًا جزيلًا على مساعدتك!\\nB: عفوًا. مع السلامة!",
  "A: Then see you later. Goodbye!\\nB: Goodbye! Have a nice day.\\nA: Thank you, you too!":
    "A: إذن أراك لاحقًا. مع السلامة!\\nB: مع السلامة! يومًا سعيدًا.\\nA: شكرًا، وأنت أيضًا!",
  "A: I have to go. See you tomorrow!\\nB: See you tomorrow! Sleep well!":
    "A: يجب أن أذهب. أراك غدًا!\\nB: أراك غدًا! نم جيدًا!",
  "A: I'm leaving now.\\nB: Okay, see you later!":
    "A: سأغادر الآن.\\nB: حسنًا، أراك لاحقًا!",
  "A: Bye! See you soon!\\nB: See you soon! Take care!":
    "A: مع السلامة! أراك قريبًا!\\nB: أراك قريبًا! اعتنِ بنفسك!",
  "A: Here is your coffee.\\nB: Thank you!":
    "A: تفضل قهوتك.\\nB: شكرًا!",
  "A: Can I have a coffee, please?\\nB: Here you go!":
    "A: هل يمكنني الحصول على قهوة من فضلك؟\\nB: تفضل!",
  "A: Here is your ticket.\\nB: Thank you very much!":
    "A: تفضل تذكرتك.\\nB: شكرًا جزيلًا!",
  "A: Thank you very much!\\nB: You're very welcome!":
    "A: شكرًا جزيلًا!\\nB: عفوًا جدًا!",
  "A: You forgot my appointment!\\nB: I am sorry! That was my mistake.":
    "A: نسيت موعدي!\\nB: أنا آسف! كان ذلك خطأي.",
  "A: Sorry, I am late!\\nB: No problem!":
    "A: عذرًا، تأخرت!\\nB: لا مشكلة!",
  "A: Thank you for your help!\\nB: My pleasure! I do it gladly.\\nA: You're great!":
    "A: شكرًا على مساعدتك!\\nB: على الرحب والسعة! أفعل ذلك بسرور.\\nA: أنت رائع!",
  "A: Are you Verumius?\\nB: Yes, that's me!":
    "A: هل أنت فيروميوس؟\\nB: نعم، أنا هو!",
  "A: Do you speak French?\\nB: No, unfortunately not.":
    "A: هل تتحدث الفرنسية؟\\nB: لا، للأسف لا.",
  "A: Are you coming this evening?\\nB: Maybe. I am not sure.\\nA: Okay, let me know!":
    "A: هل ستأتي هذا المساء؟\\nB: ربما. لست متأكدًا.\\nA: حسنًا، أخبرني!",
  "A: So, the train leaves at three?\\nB: Exactly!\\nA: Good, then let's go.":
    "A: إذن القطار يغادر الثالثة؟\\nB: بالضبط!\\nA: جيد، هيا بنا.",
  "A: Berlin is the capital, right?\\nB: Yes, that's right!":
    "A: برلين هي العاصمة، صحيح؟\\nB: نعم، هذا صحيح!",
  "A: Can you help me?\\nB: Of course! What do you need?":
    "A: هل يمكنك مساعدتي؟\\nB: بالطبع! ماذا تحتاج؟",
  "A: Who are you?\\nB: I am Verumius.":
    "A: مَن أنت؟\\nB: أنا فيروميوس.",
  "A: Good day! What is your name?\\nB: My name is Anna. And you?":
    "A: نهارك سعيد! ما اسمك؟\\nB: اسمي آنا. وأنت؟",
  "A: Where do you come from?\\nB: I come from Italy.":
    "A: من أين أنت؟\\nB: أنا من إيطاليا.",
  "A: Where are we?\\nB: We are in Germany!":
    "A: أين نحن؟\\nB: نحن في ألمانيا!",
  "A: The train departs from platform seventeen.\\nB: Excuse me, I don't understand.":
    "A: القطار يغادر من الرصيف سبعة عشر.\\nB: عذرًا، لا أفهم.",
  "A: I don't understand. Can you repeat that?\\nB: Of course! The train leaves at nine.":
    "A: لا أفهم. هل يمكنك إعادة ذلك؟\\nB: بالطبع! القطار يغادر الساعة التاسعة.",
  "A: What does he say?\\nB: He says 'Good day!'":
    "A: ماذا يقول؟\\nB: يقول 'نهارك سعيد!'",
  "A: What are you doing?\\nB: I'm doing my homework.":
    "A: ماذا تفعل؟\\nB: أنا أعمل واجبي المنزلي.",
  "A: Would you like something to eat?\\nB: Yes, some bread please.":
    "A: هل تريد شيئًا لتأكله؟\\nB: نعم، بعض الخبز من فضلك.",
  "A: Who is that?\\nB: That is my brother.":
    "A: مَن ذلك؟\\nB: ذلك أخي.",
  "A: What are you doing?\\nB: I am reading a book.":
    "A: ماذا تفعل؟\\nB: أنا أقرأ كتابًا.",
  "A: Where do you live?\\nB: I live in Berlin.":
    "A: أين تسكن؟\\nB: أسكن في برلين.",
  "A: Where do you come from?\\nB: I come from Turkey.":
    "A: من أين أنت؟\\nB: أنا من تركيا.",
  "A: Where are you going?\\nB: I am going to Hamburg.":
    "A: إلى أين أنت ذاهب؟\\nB: أنا ذاهب إلى هامبورغ.",
  "A: When are you coming?\\nB: I am coming at three o'clock.":
    "A: متى ستأتي؟\\nB: سآتي الساعة الثالثة.",
  "A: How are you?\\nB: Good, thanks! And you?":
    "A: كيف حالك؟\\nB: بخير، شكرًا! وأنت؟",
  "A: Do you have your ticket?\\nB: Yes, here please!":
    "A: هل معك تذكرتك؟\\nB: نعم، تفضل!",
  "A: Are you tired?\\nB: Yes, I am very tired!":
    "A: هل أنت متعب؟\\nB: نعم، أنا متعب جدًا!",
  "A: Are you all students?\\nB: Yes, we are students.":
    "A: هل أنتم جميعًا طلاب؟\\nB: نعم، نحن طلاب.",
  "A: Are you Mr. Müller?\\nB: Yes, I am Mr. Müller.":
    "A: هل أنت السيد مولر؟\\nB: نعم، أنا السيد مولر.",
  "A: Where do you come from?\\nB: I come from Switzerland.":
    "A: من أين أنت؟\\nB: أنا من سويسرا.",
  "A: What are you learning?\\nB: I am learning German!":
    "A: ماذا تتعلم؟\\nB: أتعلم الألمانية!",
  "A: Where do you live?\\nB: I live in Munich.":
    "A: أين تسكن؟\\nB: أسكن في ميونخ.",
  "A: What are you doing today?\\nB: Today I'm learning German.":
    "A: ماذا تفعل اليوم؟\\nB: اليوم أتعلم الألمانية.",
  "A: How many tickets do you have?\\nB: Zero. I haven't bought any yet.":
    "A: كم تذكرة لديك؟\\nB: صفر. لم أشترِ بعد.",
  "A: How many suitcases do you have?\\nB: Just one. I travel light.":
    "A: كم حقيبة لديك؟\\nB: واحدة فقط. أسافر خفيفًا.",
  "A: Two coffees, please.\\nB: Coming right up!":
    "A: قهوتان من فضلك.\\nB: حالًا!",
  "A: How many children do you have?\\nB: Three. Two boys and one girl.":
    "A: كم طفلًا لديك؟\\nB: ثلاثة. ولدان وبنت.",
  "A: The train comes at four o'clock.\\nB: Perfect, then we still have time.":
    "A: القطار يأتي الساعة الرابعة.\\nB: ممتاز، إذن لا يزال لدينا وقت.",
  "A: Five euros for a water?\\nB: Welcome to the airport!":
    "A: خمسة يورو مقابل ماء؟\\nB: مرحبًا بك في المطار!",
  "A: Platform six, right?\\nB: Yes, platform six. Hurry up!":
    "A: الرصيف ستة، صحيح؟\\nB: نعم، الرصيف ستة. أسرع!",
  "A: The movie starts at seven.\\nB: Then let's go now!":
    "A: الفيلم يبدأ الساعة السابعة.\\nB: إذن هيا نذهب الآن!",
  "A: The train departs at eight.\\nB: Morning or evening?":
    "A: القطار يغادر الساعة الثامنة.\\nB: صباحًا أم مساءً؟",
  "A: I will be there at nine.\\nB: Good, I will wait in the cafe.":
    "A: سأكون هناك الساعة التاسعة.\\nB: جيد، سأنتظر في المقهى.",
  "A: Ten more minutes!\\nB: Then we will make it.":
    "A: عشر دقائق أخرى!\\nB: إذن سنلحق.",
  "A: The meeting is at eleven.\\nB: Eleven o'clock? Perfect.":
    "A: الاجتماع الساعة الحادية عشرة.\\nB: الحادية عشرة؟ ممتاز.",
  "A: It is already twelve!\\nB: Lunch break!":
    "A: الساعة الثانية عشرة بالفعل!\\nB: استراحة الغداء!",
  "A: How old are you?\\nB: I am twenty.":
    "A: كم عمرك؟\\nB: عمري عشرون.",
  "A: What time is it?\\nB: It is three o'clock.":
    "A: كم الساعة؟\\nB: الساعة الثالثة.",
  "A: Excuse me, what time is it?\\nB: It is half past two.":
    "A: عذرًا، كم الساعة؟\\nB: الساعة الثانية والنصف.",
  "A: When is the departure?\\nB: In ten minutes, platform four.":
    "A: متى المغادرة؟\\nB: بعد عشر دقائق، الرصيف الرابع.",
  "A: The arrival is at nine o'clock.\\nB: Good, then I will pick you up.":
    "A: الوصول الساعة التاسعة.\\nB: جيد، سآتي لأخذك.",
  "A: Which platform?\\nB: Platform seven, all the way at the end.":
    "A: أي رصيف؟\\nB: الرصيف السابع، في آخر المحطة.",
  "A: The train is delayed.\\nB: Oh no!":
    "A: القطار متأخر.\\nB: يا للأسف!",
  "A: Where is the exit?\\nB: Over there, on the left.":
    "A: أين المخرج؟\\nB: هناك، على اليسار.",
  "A: Where is platform three?\\nB: Left, then straight ahead.":
    "A: أين الرصيف الثالث؟\\nB: يسارًا ثم مباشرة للأمام.",
  "A: Is the metro on the right?\\nB: Yes, right and then down the stairs.":
    "A: هل المترو على اليمين؟\\nB: نعم، يمينًا ثم انزل الدرج.",
  "A: And then?\\nB: Straight ahead until the traffic light.":
    "A: ثم ماذا؟\\nB: مباشرة للأمام حتى إشارة المرور.",
  "A: Where do I buy the ticket?\\nB: At the counter, to the left of the exit.":
    "A: أين أشتري التذكرة؟\\nB: عند الشباك، على يسار المخرج.",
  "A: What would you like?\\nB: A Döner, please!":
    "A: ماذا تريد؟\\nB: دونر من فضلك!",
  "A: Where are you sleeping in Berlin?\\nB: In a hostel in Mitte.":
    "A: أين تنام في برلين؟\\nB: في نزل في ميتة.",
  "A: How are you?\\nB: I'm so tired. What a day!":
    "A: كيف حالك؟\\nB: أنا متعب جدًا. يا له من يوم!",
  "A: Every person needs friends.\\nB: That is true. Without people, life is boring.\\nA: You are a good person, Verumius.":
    "A: كل إنسان يحتاج أصدقاء.\\nB: هذا صحيح. بدون الناس الحياة مملة.\\nA: أنت إنسان طيب يا فيروميوس.",
  "A: Good night!\\nB: Good night! See you tomorrow.":
    "A: تصبح على خير!\\nB: تصبح على خير! أراك غدًا.",
  "A: What are you doing tomorrow?\\nB: Tomorrow I'm going to the Brandenburg Gate.":
    "A: ماذا ستفعل غدًا؟\\nB: غدًا سأذهب إلى بوابة براندنبورغ.",
  "A: Good morning, Mrs. Schmidt!\\nB: Good morning! Coffee?":
    "A: صباح الخير، سيدة شميت!\\nB: صباح الخير! قهوة؟",
  "A: Good evening! Do you have a reservation?\\nB: Yes, under the name Verumius.":
    "A: مساء الخير! هل لديك حجز؟\\nB: نعم، باسم فيروميوس.",
  "A: Hi, Klaus! How's it going?\\nB: Hi! Good, and you?":
    "A: مرحبًا كلاوس! كيف الحال؟\\nB: مرحبًا! بخير، وأنت؟",
  "A: I speak German and English.\\nB: And I speak German and Spanish!":
    "A: أتحدث الألمانية والإنجليزية.\\nB: وأنا أتحدث الألمانية والإسبانية!",
  "A: Are you coming along?\\nB: I want to, but I have no time.":
    "A: هل ستأتي معنا؟\\nB: أريد ذلك، لكن ليس لدي وقت.",
  "A: Coffee or tea?\\nB: Tea, please.":
    "A: قهوة أم شاي؟\\nB: شاي من فضلك.",
  "A: I am learning German.\\nB: Me too!":
    "A: أنا أتعلم الألمانية.\\nB: أنا أيضًا!",
  "A: Where is the hotel?\\nB: The hotel is here.":
    "A: أين الفندق؟\\nB: الفندق هنا.",
  "A: Is that not right?\\nB: Yes, that is not right.":
    "A: أليس هذا صحيحًا؟\\nB: نعم، هذا غير صحيح.",
  "A: The weather is very good today.\\nB: Yes, very good!":
    "A: الطقس جيد جدًا اليوم.\\nB: نعم، جيد جدًا!",
  "A: What is that for a language?\\nB: That is German!":
    "A: ما هذه اللغة؟\\nB: هذه الألمانية!",
  "A: How many languages do you speak?\\nB: Four: Arabic, English, French, and German.":
    "A: كم لغة تتحدث؟\\nB: أربع: العربية والإنجليزية والفرنسية والألمانية.",
  "A: Where does she come from?\\nB: She comes from Morocco.":
    "A: من أين هي؟\\nB: هي من المغرب.",
  "A: What does that mean?\\nB: It means 'welcome.'":
    "A: ماذا يعني ذلك؟\\nB: يعني 'مرحبًا'.",
  "A: Can you spell that?\\nB: Of course! V-E-R-U-M-I-U-S.":
    "A: هل يمكنك تهجئة ذلك؟\\nB: بالطبع! V-E-R-U-M-I-U-S.",
  "A: Thank you for everything!\\nB: You're welcome! It was my pleasure.":
    "A: شكرًا على كل شيء!\\nB: عفوًا! كان من دواعي سروري.",
  "A: Excuse me!\\nB: Yes? Can I help you?":
    "A: عذرًا!\\nB: نعم؟ هل يمكنني مساعدتك؟",
  "A: Do you know Mr. Müller?\\nB: Yes, I know him well.":
    "A: هل تعرف السيد مولر؟\\nB: نعم، أعرفه جيدًا.",
  "A: Nice to meet you!\\nB: Nice to meet you too!":
    "A: تشرفنا!\\nB: تشرفنا أيضًا!",
  "A: Do you know where the station is?\\nB: Yes, I know the way.":
    "A: هل تعرف أين المحطة؟\\nB: نعم، أعرف الطريق.",
  "A: Your name is Verumius?\\nB: Yes!\\nA: And what is your surname?\\nB: Just Verumius!":
    "A: اسمك فيروميوس؟\\nB: نعم!\\nA: وما اسم عائلتك؟\\nB: فقط فيروميوس!",
  "A: How old are you?\\nB: I am twenty-five.":
    "A: كم عمرك؟\\nB: عمري خمسة وعشرون.",
  "A: What is your address?\\nB: Berliner Straße 12.":
    "A: ما عنوانك؟\\nB: Berliner Straße 12.",
  "A: Where were you born?\\nB: In Rome, Italy.":
    "A: أين ولدت؟\\nB: في روما، إيطاليا.",
  "A: Do you have a passport?\\nB: Yes, here it is.":
    "A: هل لديك جواز سفر؟\\nB: نعم، تفضل.",
  "A: What languages do you speak?\\nB: Italian and a little German.":
    "A: ما اللغات التي تتحدثها؟\\nB: الإيطالية وقليل من الألمانية.",
  "A: Good day, Mrs. Weber.\\nB: Good day! How can I help?":
    "A: نهارك سعيد، سيدة فيبر.\\nB: نهارك سعيد! كيف يمكنني المساعدة؟",
  "A: Good day, Mr. Schmidt.\\nB: Good day! Please sit down.":
    "A: نهارك سعيد، سيد شميت.\\nB: نهارك سعيد! تفضل بالجلوس.",
  "A: Many thanks for the greeting!\\nB: You're welcome! I'll see you again.":
    "A: شكرًا جزيلًا على التحية!\\nB: عفوًا! سأراك مجددًا.",
  "A: Herzlich willkommen!\\nB: Thank you! I am happy to be here.":
    "A: أهلًا وسهلًا!\\nB: شكرًا! أنا سعيد بوجودي هنا.",
  "A: Is the number two correct?\\nB: No, the number four.":
    "A: هل الرقم اثنان صحيح؟\\nB: لا، الرقم أربعة.",
  "A: I have six euros.\\nB: That is enough!":
    "A: لدي ستة يورو.\\nB: هذا يكفي!",
  "A: I arrived in Germany in two thousand and twenty.\\nB: Wow, six years already!":
    "A: وصلت إلى ألمانيا عام ألفين وعشرين.\\nB: واو، ست سنوات بالفعل!",
  "A: Is this ticket new?\\nB: Yes, brand new!":
    "A: هل هذه التذكرة جديدة؟\\nB: نعم، جديدة تمامًا!",
  "A: Is the ticket still valid?\\nB: Yes, until midnight.":
    "A: هل التذكرة لا تزال صالحة؟\\nB: نعم، حتى منتصف الليل.",
  "A: Where is your homeland?\\nB: My homeland is Italy.":
    "A: أين وطنك؟\\nB: وطني إيطاليا.",
  "A: The world is big.\\nB: Yes, but Germany is beautiful!":
    "A: العالم كبير.\\nB: نعم، لكن ألمانيا جميلة!",
  "A: Are you European?\\nB: Yes, I am Italian. Italy is in Europe.":
    "A: هل أنت أوروبي؟\\nB: نعم، أنا إيطالي. إيطاليا في أوروبا.",
  "A: Is this an international airport?\\nB: Yes, flights go everywhere.":
    "A: هل هذا مطار دولي؟\\nB: نعم، الرحلات تذهب إلى كل مكان.",
  "A: She is German, right?\\nB: Yes, she comes from Hamburg.":
    "A: هي ألمانية، صحيح؟\\nB: نعم، هي من هامبورغ.",
  "A: Have you been abroad?\\nB: Yes, I lived in France for two years.":
    "A: هل كنت في الخارج؟\\nB: نعم، عشت في فرنسا لمدة سنتين.",
  "A: Is he a foreigner?\\nB: Yes, he comes from Brazil.":
    "A: هل هو أجنبي؟\\nB: نعم، هو من البرازيل.",
  "A: Where is the departure gate?\\nB: Gate B7, down the hall.":
    "A: أين بوابة المغادرة؟\\nB: البوابة B7، في نهاية الممر.",
  "A: The flight leaves at 3 PM.\\nB: We need to hurry!":
    "A: الرحلة تغادر الساعة الثالثة ظهرًا.\\nB: يجب أن نسرع!",
  "A: Where is my luggage?\\nB: At baggage claim, belt 4.":
    "A: أين أمتعتي؟\\nB: عند استلام الأمتعة، السير ٤.",
  "A: Is this your suitcase?\\nB: Yes, that's mine!":
    "A: هل هذه حقيبتك؟\\nB: نعم، هذه لي!",
  "A: Have a good trip!\\nB: Thank you! See you in two weeks.":
    "A: رحلة سعيدة!\\nB: شكرًا! أراك بعد أسبوعين.",
  "A: Do you have anything to declare?\\nB: No, nothing to declare.":
    "A: هل لديك شيء للتصريح الجمركي؟\\nB: لا، لا شيء للتصريح.",
  "A: What does 'Entschuldigung' mean?\\nB: It means 'excuse me.'":
    "A: ماذا تعني Entschuldigung؟\\nB: تعني 'عذرًا.'",
  "A: How do you spell your name?\\nB: V-E-R-U-M-I-U-S.":
    "A: كيف تتهجى اسمك؟\\nB: V-E-R-U-M-I-U-S.",
  "A: Thank you for your patience!\\nB: You're welcome!":
    "A: شكرًا على صبرك!\\nB: عفوًا!",
  "A: I'm sorry for the mistake.\\nB: No problem! It happens.":
    "A: آسف على الخطأ.\\nB: لا مشكلة! يحدث ذلك.",
  "A: Do you know Anna?\\nB: No, I don't know her yet. But I'd like to!":
    "A: هل تعرف آنا؟\\nB: لا، لا أعرفها بعد. لكنني أود ذلك!",
  "A: Nice to meet you!\\nB: Nice to meet you too! Welcome to Berlin.":
    "A: تشرفنا!\\nB: تشرفنا أيضًا! مرحبًا بك في برلين.",
  "A: Do you know what time the train leaves?\\nB: I don't know, but I think at nine.":
    "A: هل تعلم متى يغادر القطار؟\\nB: لا أعلم، لكن أظن الساعة التاسعة.",
};

// ═══════════════════════════════════════════════════════════════
// HINTS — Quiz hints (PP8: must NOT contain answer words)
// ═══════════════════════════════════════════════════════════════
const HINTS = {
  "Think about getting someone's attention on the street.":
    "فكر في كيف تجذب انتباه شخص في الشارع.",
  "This masculine noun is related to pulling.":
    "هذا الاسم المذكر مرتبط بالسحب والجذب.",
  "What language are you asking about in this sentence?":
    "عن أي لغة تسأل في هذه الجملة؟",
  "'Ein bisschen' means a small, bite-sized amount.":
    "هذا التعبير يعني كمية صغيرة بحجم لقمة.",
  "He is traveling in the direction of Berlin.":
    "هو مسافر في اتجاه العاصمة الألمانية.",
  "Which preposition means 'to' when talking about traveling to a city?":
    "أي حرف جر يعني 'إلى' عند الحديث عن السفر لمدينة؟",
  "This compound noun names a place where tracks meet.":
    "هذا الاسم المركب يسمي مكانًا تلتقي فيه السكك.",
};

// ═══════════════════════════════════════════════════════════════
// STORIES — Story narration translations
// ═══════════════════════════════════════════════════════════════
const STORIES = {
  "Berlin Brandenburg Airport. The doors open. Warm air, unfamiliar voices, German signs everywhere. Verumius takes a deep breath. He is here.":
    "مطار برلين براندنبورغ. تُفتح الأبواب. هواء دافئ، أصوات غير مألوفة، لافتات ألمانية في كل مكان. يأخذ فيروميوس نفسًا عميقًا. لقد وصل.",
  "Verumius stands in front of the ticket machine. Everything in German. He presses buttons. A ticket comes out. Berlin Hauptbahnhof. Good. Or is it?":
    "يقف فيروميوس أمام آلة التذاكر. كل شيء بالألمانية. يضغط الأزرار. تخرج تذكرة. محطة برلين المركزية. جيد. أو ليس كذلك؟",
  "At the airport kiosk. Verumius wants to buy water. The woman behind the counter waits. He opens his mouth. No German comes out.":
    "عند كشك المطار. يريد فيروميوس شراء الماء. تنتظر المرأة خلف الطاولة. يفتح فمه. لا تخرج كلمة ألمانية.",
  "Thank you! Bye! Verumius walks to the platform. He has a ticket. He can say thank you. That is a start.":
    "شكرًا! مع السلامة! يمشي فيروميوس إلى الرصيف. لديه تذكرة. يستطيع أن يقول شكرًا. هذه بداية.",
  "On the ICE train. Verumius sits by the window. Outside, fields and villages fly past. Dr. Yilmaz opens her notebook and smiles.":
    "على قطار ICE السريع. يجلس فيروميوس بجوار النافذة. في الخارج تمر الحقول والقرى مسرعة. تفتح الدكتورة يلماز دفترها وتبتسم.",
  "So, Verumius. In German, every question starts with a W-word. Who, what, where, where from, where to, when, how. Seven little words that open every door.":
    "إذن يا فيروميوس. في الألمانية، كل سؤال يبدأ بكلمة W. مَن، ماذا، أين، من أين، إلى أين، متى، كيف. سبع كلمات صغيرة تفتح كل باب.",
  "Okay, I'll try. Where... does... this train go?":
    "حسنًا، سأحاول. إلى أين... يذهب... هذا القطار؟",
  "Very good! The train goes to Hamburg. And where are YOU going?":
    "ممتاز! القطار يذهب إلى هامبورغ. وأنت، إلى أين تذهب؟",
  "The ticket inspector arrives. A tall man in uniform with a stern look.":
    "يصل مفتش التذاكر. رجل طويل بزي رسمي ونظرة صارمة.",
  "Ticket, please!": "التذكرة من فضلك!",
  "Here, please! ...Wait. This says Berlin. But you said the train goes to Hamburg?":
    "تفضل! ...لحظة. هنا مكتوب برلين. لكنك قلتِ القطار يذهب إلى هامبورغ؟",
  "Oh. You are on the wrong train, Verumius.":
    "أوه. أنت في القطار الخطأ يا فيروميوس.",
};

// ═══════════════════════════════════════════════════════════════
// INTROS — Lesson intro descriptions and goals
// ═══════════════════════════════════════════════════════════════
const INTROS = {
  // desc translations
  "Verumius arrives in Germany for the first time. But things don't go as planned...":
    "يصل فيروميوس إلى ألمانيا لأول مرة. لكن الأمور لا تسير كما هو مخطط...",
  "Your first German words: greetings, farewells, and politeness. These expressions will get you through airports, shops, and awkward silences.":
    "كلماتك الألمانية الأولى: التحيات والوداع والأدب. هذه التعبيرات ستساعدك في المطارات والمحلات ولحظات الصمت المحرجة.",

  // goals translations
  "Learn basic greetings": "تعلم التحيات الأساسية",
  "Understand simple questions": "فهم الأسئلة البسيطة",
  "Survive your first German conversation": "النجاة في محادثتك الألمانية الأولى",
};

// ═══════════════════════════════════════════════════════════════
// QUIZZES — sSrc quiz stem translations
// ═══════════════════════════════════════════════════════════════
const QUIZZES = {
  "Do you speak German?": "هل تتحدث الألمانية؟",
  "I am going to Hamburg.": "أنا ذاهب إلى هامبورغ.",
  "Many thanks!": "شكرًا جزيلًا!",
};

// ═══════════════════════════════════════════════════════════════
// TIPS — Tip text and deepDive translations
// ═══════════════════════════════════════════════════════════════
const TIPS = {};

// ═══════════════════════════════════════════════════════════════
// EXPORTS
// ═══════════════════════════════════════════════════════════════
module.exports = {
  WORDS,
  NOTES,
  FUNFACTS,
  EXAMPLES,
  HINTS,
  STORIES,
  INTROS,
  QUIZZES,
  TIPS,
  PATTERNS,
};
