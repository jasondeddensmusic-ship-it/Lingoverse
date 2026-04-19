// Russian V2 Unit 8 — Shopping and Money (A2.1)
const UNIT_08 = {n:8, lang:"ru", srcLang:"en", track:"v2", title:"В магазине", sub:"Shopping and Money",
 icon:"🛒", level:"A2.1", color:"#7B5EE8",
 lessons:[

{id:"ruv2_u8l1", title:"Деньги", icon:"💰", xp:15, board:true, steps:[

{type:"intro", title:"Money and Prices",
 desc:"Money vocabulary for everyday shopping. Learn рубль (ruble) variations, price-asking, and paying patterns.",
 goals:["Name Russian currency","Ask prices","Use numbers + рубль correctly"]},

{type:"teach", trg:"деньги", src:"money", pos:"noun", gender:null,
 note:"PLURAL only. No singular form.\nStress on first: DYEN-gi.",
 example:"A: У тебя есть деньги?\nB: Да, немного.",
 exampleSrc:"A: Do you have money?\nB: Yes, a little.",
 funFact:"Деньги is plurale tantum — exists only in plural, like English 'scissors' or 'pants.' Russian has several: ножницы (scissors), ворота (gate), часы (watch)."},

{type:"teach", trg:"рубль", src:"ruble (1)", pos:"noun", gender:"m",
 note:"Masculine. Ends in soft ь.\nUsed after numbers ending 1: 21 рубль, 101 рубль.",
 example:"A: Сколько стоит?\nB: Один рубль.",
 exampleSrc:"A: How much does it cost?\nB: One ruble.",
 funFact:"The ruble dates to the 13th century. The word itself possibly comes from 'рубить' (to cut) — early rubles were cut from silver ingots."},

{type:"teach", trg:"рубля", src:"rubles (2-4)", pos:"noun", gender:"m",
 note:"Genitive singular of рубль.\nUsed after 2, 3, 4 (except 12, 13, 14).",
 example:"A: Сколько?\nB: Два рубля.",
 exampleSrc:"A: How much?\nB: Two rubles.",
 funFact:"The 2/3/4 pattern applies to many Russian nouns. Три рубля, четыре рубля. But двенадцать рублей (12 rubles) — the 'teen rule' overrides."},

{type:"teach", trg:"рублей", src:"rubles (5+)", pos:"noun", gender:"m",
 note:"Genitive plural of рубль.\nUsed after 5-20, also 0.",
 example:"A: Сколько?\nB: Пятьсот рублей.",
 exampleSrc:"A: How much?\nB: Five hundred rubles.",
 funFact:"Рублей uses the hidden 'е' — not present in рубль or рубля, but appears in gen plural: рублей. Russian gen plurals are famously irregular."},

{type:"teach", trg:"стоить", src:"to cost", pos:"verb", gender:null,
 note:"Imperfective verb.\nСтоит = costs (3rd person sg).",
 example:"A: Сколько стоит хлеб?\nB: Пятьдесят рублей.",
 exampleSrc:"A: How much does bread cost?\nB: Fifty rubles.",
 funFact:"Стоит also means 'worth it' metaphorically: 'это стоит' = it's worth it. 'Не стоит' = no need to / it's not worth it. Common polite refusal."},

{type:"teach", trg:"сколько стоит", src:"how much does it cost?", pos:"phrase", gender:null,
 note:"Fixed phrase.\nSubject comes after: Сколько стоит хлеб?",
 example:"A: Сколько стоит хлеб?\nB: Сто рублей.",
 exampleSrc:"A: How much does the bread cost?\nB: A hundred rubles.",
 funFact:"The word order in Russian shopping is flexible. 'Сколько этот журнал стоит?' also works. Russians often add 'пожалуйста' at the end for politeness."},

{type:"teach", trg:"дорого", src:"expensive", pos:"adv", gender:null,
 note:"Impersonal form.\nAlso: дорогой (m), дорогая (f) as adjective.",
 example:"A: Дорого?\nB: Да, дорого.",
 exampleSrc:"A: Expensive?\nB: Yes, expensive.",
 funFact:"Дорогой also means 'dear' — Russians start letters with 'Дорогой друг!' (Dear friend!). Context distinguishes: price vs affection."},

{type:"teach", trg:"дёшево", src:"cheap", pos:"adv", gender:null,
 note:"Impersonal.\nStress on first syllable: DYE-she-vo.",
 example:"A: Это дёшево?\nB: Да, сегодня распродажа.",
 exampleSrc:"A: Is this cheap?\nB: Yes, today's a sale.",
 funFact:"Дёшево carries no negative connotation in Russian (unlike 'cheap' in English which can mean 'low quality'). Russians proudly proclaim 'дёшево и сердито' (cheap and strong — good value)."},

{type:"tip", title:"Number + Ruble Pattern",
 text:"Russian rubles change form based on the number before them:\n\n• 1 (21, 101, etc.): рубль (nominative)\nОдин рубль.\nДвадцать один рубль.\n\n• 2, 3, 4 (22-24, 32-34, etc.): рубля (genitive singular)\nДва рубля.\nТридцать три рубля.\n\n• 5-20 (25+, 11-14): рублей (genitive plural)\nПять рублей.\nОдиннадцать рублей.\nСто рублей.\n\nThe last DIGIT determines the form, EXCEPT for 11-19 which always use рублей.\n\nThis pattern applies to all counted nouns — учеников, минут, книг, etc.",
 icon:"🔢"},

{type:"mc", q:"50 rubles in Russian is:",
 opts:["Пятьдесят рубль","Пятьдесят рубля","Пятьдесят рублей","Пятьдесят рубли"],
 ans:"Пятьдесят рублей",
 hint:"50 ends in 0, so use the 5+ gen plural rule."},

{type:"mc", q:"Why is 'деньги' (money) always plural?",
 opts:["It's a loanword","It's plurale tantum (plural only)","Old Slavic convention","Every currency is plural"],
 ans:"It's plurale tantum (plural only)",
 hint:"Russian has nouns that only exist in ___ form — like English 'scissors.'"},

{type:"fb", s:"A: Сколько {1} яблоки?\nB: Пятьдесят рублей за килограмм.",
 a:["стоят"],
 opts:["стоят","стоит","стоил","стояли"],
 hint:"Apples is plural (яблоки), so the verb agrees with plural.",
 sSrc:"A: How much do apples cost?\nB: Fifty rubles per kilo."},

{type:"fb", s:"A: Это {1}?\nB: Да, слишком. Давай найдём что-нибудь дешевле.",
 a:["дорого"],
 opts:["дорого","дёшево","дорогой","дорогие"],
 hint:"Impersonal word for 'pricey' — costs a lot.",
 sSrc:"A: Is it expensive?\nB: Yes, too much. Let's find something cheaper."},

{type:"match", pairs:[
  {trg:"деньги", src:"money"},
  {trg:"рубль", src:"ruble"},
  {trg:"стоить", src:"to cost"},
  {trg:"дорого", src:"expensive"},
  {trg:"дёшево", src:"cheap"}
]}
]},

{id:"ruv2_u8l2", title:"Купить и продать", icon:"🛍️", xp:15, board:true, steps:[

{type:"intro", title:"Buying and Selling",
 desc:"Two key shopping verbs: купить (to buy) and продать (to sell). Both are perfective — focus on the completed transaction.",
 goals:["Use купить/покупать","Use продать/продавать","Form shopping requests"]},

{type:"teach", trg:"купить", src:"to buy (perfective)", pos:"verb", gender:null,
 note:"Perfective aspect: completed action.\nImperfective pair: покупать.",
 example:"A: Что ты хочешь купить?\nB: Хлеб и молоко.",
 exampleSrc:"A: What do you want to buy?\nB: Bread and milk.",
 funFact:"The купить/покупать aspect pair is classic. Used with хочу: хочу купить (I want to buy [one time]) vs хочу покупать (I want to be buying [repeatedly]). Aspect appears everywhere."},

{type:"teach", trg:"покупать", src:"to buy (imperfective)", pos:"verb", gender:null,
 note:"Imperfective: repeated or ongoing.\nЯ покупаю = I am/do buy.",
 example:"A: Ты покупаешь хлеб?\nB: Да, я покупаю хлеб.",
 exampleSrc:"A: Do you buy bread?\nB: Yes, I buy bread.",
 funFact:"Покупать takes the -аю conjugation like most imperfective verbs. Купить (perfective) has its own pattern — куплю, купишь. Learn them together always."},

{type:"teach", trg:"продать", src:"to sell (perfective)", pos:"verb", gender:null,
 note:"Perfective.\nPair: продавать.",
 example:"A: Ты продашь хлеб?\nB: Да, я продам.",
 exampleSrc:"A: Will you sell the bread?\nB: Yes, I will sell it.",
 funFact:"Продать uses the prefix про- (through/across) + дать (to give). Literally 'to give through' — money passes through to close the deal."},

{type:"teach", trg:"продавать", src:"to sell (imperfective)", pos:"verb", gender:null,
 note:"Imperfective.\nЯ продаю, ты продаёшь.",
 example:"A: Что продают в магазине?\nB: Хлеб и молоко.",
 exampleSrc:"A: What do they sell at the store?\nB: Bread and milk.",
 funFact:"'Они продают' has ambiguous subject: 'they' (specific people) or 'they' (impersonal, one does). Context decides. This impersonal use is common."},

{type:"teach", trg:"платить", src:"to pay (imperfective)", pos:"verb", gender:null,
 note:"Imperfective.\nPair: заплатить (perfective).",
 example:"A: Ты платишь за рыбу?\nB: Да, я плачу.",
 exampleSrc:"A: Are you paying for the fish?\nB: Yes, I'm paying.",
 funFact:"Платить takes 'за' + accusative: платить за хлеб (pay for bread). Also takes instrumental for method: платить картой (pay by card), платить наличными (pay in cash)."},

{type:"teach", trg:"касса", src:"cash register / checkout", pos:"noun", gender:"f",
 note:"Feminine. Also 'cashier's desk' or 'ticket office.'\nПри кассе = at the register.",
 example:"A: Где касса?\nB: Там, налево.",
 exampleSrc:"A: Where is the register?\nB: There, to the left.",
 funFact:"Касса doubles as 'box office' (at cinema/theater) and 'cash register' (at store). Casino derives from same Italian root."},

{type:"teach", trg:"скидка", src:"discount", pos:"noun", gender:"f",
 note:"Feminine. Ends in -а.\nPlural: скидки.",
 example:"A: Есть скидка?\nB: Да, десять процентов.",
 exampleSrc:"A: Is there a discount?\nB: Yes, ten percent.",
 funFact:"Russian retail culture features aggressive скидки. 'Чёрная пятница' (Black Friday) and traditional январские распродажи (January sales) are major shopping events."},

{type:"teach", trg:"чек", src:"receipt / check", pos:"noun", gender:"m",
 note:"Masculine. From English.\nGenitive pl: чеков.",
 example:"A: Вам нужен чек?\nB: Да, пожалуйста.",
 exampleSrc:"A: Do you need a receipt?\nB: Yes, please.",
 funFact:"Чек is used in retail. For returns in Russia, keep your чек for 14 days — standard return period by Russian consumer law."},

{type:"tip", title:"Verb Aspect Pairs: Perfective vs Imperfective",
 text:"Russian verbs come in pairs: perfective and imperfective.\n\nIMPERFECTIVE = process, habit, repetition.\nПокупать (buying, in general).\nЯ покупаю хлеб каждый день. (I buy bread every day.)\n\nPERFECTIVE = single completed action.\nКупить (to buy, once and done).\nЯ купил хлеб вчера. (I bought bread yesterday.)\n\nMost aspect pairs differ by:\n• Prefix: делать/сделать, писать/написать.\n• Stem change: покупать/купить, давать/дать.\n• Suffix: решать/решить.\n\nYou MUST learn both forms together as a pair. Using the wrong aspect sounds odd or means something different.\n\nFull B1 unit dedicated to aspect — this is just an introduction.",
 deepDive:{title:"How Russians 'Feel' Aspect",
  text:"For Russians, aspect is intuitive but hard to explain to foreigners. A rough guide: imperfective for process/habit (Что ты делаешь? = What are you doing?), perfective for result (Что ты сделал? = What did you do [and finish]?). English speakers must drill this constantly."}},

{type:"mc", q:"If I do my grocery shopping every Saturday, which verb do I use?",
 opts:["покупаю (imperfective)","купил (perfective past)","куплю (perfective future)","купить (infinitive)"],
 ans:"покупаю (imperfective)",
 hint:"Regular, repeated actions take ___ aspect."},

{type:"mc", q:"Which verb pair means 'to sell'?",
 opts:["покупать/купить","продавать/продать","платить/заплатить","давать/дать"],
 ans:"продавать/продать",
 hint:"про- prefix + дать (give) means 'give through' = sell."},

{type:"fb", s:"A: Ты уже {1} новый телефон?\nB: Да, сегодня утром.",
 a:["купил"],
 opts:["купил","покупал","покупаю","купить"],
 hint:"A completed action (bought just this morning) — perfective past, masculine subject.",
 sSrc:"A: Did you already buy a new phone?\nB: Yes, this morning."},

{type:"fb", s:"A: Где {1} свежий хлеб?\nB: В пекарне возле метро.",
 a:["продают"],
 opts:["продают","продают","продаёт","продам"],
 hint:"Impersonal 'they sell' — 3rd person plural imperfective.",
 sSrc:"A: Where do they sell fresh bread?\nB: At the bakery near the metro."},

{type:"fb", s:"A: Есть ли {1} на этот товар?\nB: Да, двадцать процентов.",
 a:["скидка"],
 opts:["скидка","чек","касса","размер"],
 hint:"A price reduction offered in a shop.",
 sSrc:"A: Is there a discount on this item?\nB: Yes, twenty percent."},

{type:"match", pairs:[
  {trg:"купить", src:"to buy (perf)"},
  {trg:"продать", src:"to sell (perf)"},
  {trg:"платить", src:"to pay"},
  {trg:"скидка", src:"discount"},
  {trg:"чек", src:"receipt"}
]}
]},

{id:"ruv2_u8l3", title:"В магазине", icon:"🏪", xp:15, board:true, steps:[

{type:"intro", title:"At the Shop",
 desc:"Shopping vocabulary in context. Practice buying things, asking for help, and understanding sizes and quantities.",
 goals:["Shop for clothes","Ask for sizes","Use common shopping phrases"]},

{type:"teach", trg:"одежда", src:"clothes", pos:"noun", gender:"f",
 note:"Feminine. Singular only (like 'clothing').\nNo plural form: вся одежда (all clothes).",
 example:"A: Где одежда?\nB: Там, в магазине.",
 exampleSrc:"A: Where's the clothing?\nB: There, in the shop.",
 funFact:"Одежда is collective. For individual items use plural: вещи (things) or specific garments. 'Купить одежду' = to buy clothes (collectively)."},

{type:"teach", trg:"рубашка", src:"shirt", pos:"noun", gender:"f",
 note:"Feminine. -ка diminutive suffix is common for clothes.\nДиминутив from 'руб-' (cut, as in cut fabric).",
 example:"A: Это твоя рубашка?\nB: Да, моя рубашка.",
 exampleSrc:"A: Is this your shirt?\nB: Yes, my shirt.",
 funFact:"Russian clothing vocab often uses -ка endings: рубашка, юбка, футболка. These came from diminutive forms that replaced older, longer words."},

{type:"teach", trg:"брюки", src:"pants / trousers", pos:"noun", gender:null,
 note:"PLURAL only, like 'pants' in English.\nGenitive plural: брюк.",
 example:"A: Новые брюки?\nB: Да, купил вчера.",
 exampleSrc:"A: New pants?\nB: Yes, bought them yesterday.",
 funFact:"Like деньги (money), брюки has no singular form. Similar: джинсы (jeans), шорты (shorts), очки (glasses). All plural-only."},

{type:"teach", trg:"платье", src:"dress", pos:"noun", gender:"n",
 note:"NEUTER. Ends in -е.\nGenitive plural: платьев.",
 example:"A: Красивое платье!\nB: Спасибо, подарок.",
 exampleSrc:"A: Beautiful dress!\nB: Thanks, it was a gift.",
 funFact:"Платье is one of few feminine-themed clothing items that's grammatically neuter. Derived from 'платить' — perhaps because clothes were historically expensive (had to be paid for)."},

{type:"teach", trg:"обувь", src:"footwear / shoes", pos:"noun", gender:"f",
 note:"Feminine. Ends in ь (soft sign).\nCollective noun for all footwear.",
 example:"A: Где обувь?\nB: Там, рядом.",
 exampleSrc:"A: Where's the footwear?\nB: There, nearby.",
 funFact:"Обувь is collective — 'footwear' as a category. For specific pairs: ботинки (boots), туфли (shoes), кроссовки (sneakers). All those are plural."},

{type:"teach", trg:"размер", src:"size", pos:"noun", gender:"m",
 note:"Masculine. Generic size word.\nUsed for clothing, shoes, furniture.",
 example:"A: Какой размер?\nB: Большой.",
 exampleSrc:"A: What size?\nB: Large.",
 funFact:"Russian clothing sizes are measured in cm (chest/waist circumference) or numerical scale. A 'size 44' Russian dress ≈ US size 6. Shoes use European EU sizes 36-45."},

{type:"teach", trg:"примерить", src:"to try on", pos:"verb", gender:null,
 note:"Perfective.\nPair: примерять.",
 example:"A: Примерить платье?\nB: Да, вот там.",
 exampleSrc:"A: Try on the dress?\nB: Yes, right there.",
 funFact:"Примерочная (fitting room) is standard in all Russian retail. 'Мерить' itself means to measure — primерить adds 'try out for fit' nuance."},

{type:"teach", trg:"нравиться", src:"to please (to like)", pos:"verb", gender:null,
 note:"BACKWARD verb — like Spanish gustar.\nThe thing liked is subject, person liking is dative.",
 example:"A: Тебе нравится одежда?\nB: Да, нравится!",
 exampleSrc:"A: Do you like the clothes?\nB: Yes, I like them!",
 funFact:"Russian 'Тебе нравится X?' = 'X pleases you?' — subject/object are inverted from English. X is nominative, person is dative. Learn the inversion early."},

{type:"teach", trg:"очень", src:"very / very much", pos:"adv", gender:null,
 note:"Strong intensifier.\nCan precede verbs or adjectives.",
 example:"A: Нравится?\nB: Да, очень!",
 exampleSrc:"A: Do you like it?\nB: Yes, very much!",
 funFact:"'Очень' is Russia's most common intensifier. Russians say 'очень хорошо' (very good) often. The word comes from an old Slavic root meaning 'eye,' then 'eye's fill' (enough to see fully)."},

{type:"tip", title:"Backward Verbs: Нравиться",
 text:"Russian 'to like' works OPPOSITELY to English.\n\nEnglish: I like the dress.\nRussian: The dress pleases me. (Мне нравится платье.)\n\nSUBJECT = thing liked (nominative).\nOBJECT = person liking (dative).\n\nConjugations of нравиться:\nМне нравится... (I like...)\nТебе нравится... (You like...)\nЕму нравится... (He likes...)\nЕй нравится... (She likes...)\nНам нравится... (We like...)\nИм нравится... (They like...)\n\nThe VERB agrees with the liked thing, not the person:\nМне нравится платье. (Singular platye — sg verb.)\nМне нравятся платья. (Plural platya — pl verb!)",
 deepDive:{title:"Why Russian Is 'Backward' for Emotions",
  text:"Russian treats emotions as experienced rather than caused. You don't actively LIKE something — something PLEASES you. This extends to: мне скучно (I'm bored, lit. to-me boring), мне холодно (I'm cold), мне кажется (it seems to me). The impersonal pattern reflects a worldview of things happening TO you."}},

{type:"mc", q:"'Do you like this shirt?' in Russian:",
 opts:["Ты нравишь эта рубашка?","Тебе нравится эта рубашка?","Ты любишь эта рубашка?","Ты хочешь эта рубашка?"],
 ans:"Тебе нравится эта рубашка?",
 hint:"Нравиться is backward. Dative pronoun + verb + nominative thing liked."},

{type:"mc", q:"Why is 'платье' neuter despite being a dress (a traditionally feminine item)?",
 opts:["Grammatical category is based on ending","Russian has no gender","Dresses used to be worn by men","It's a loanword"],
 ans:"Grammatical category is based on ending",
 hint:"Russian noun gender is determined by WORD ___, not meaning. -е = neuter."},

{type:"fb", s:"A: Это платье мне {1}.\nB: Да, очень красивое.",
 a:["нравится"],
 opts:["нравится","нравлюсь","любит","люблю"],
 hint:"Нравиться conjugated for singular subject (это платье).",
 sSrc:"A: I like this dress.\nB: Yes, very beautiful."},

{type:"fb", s:"A: Можно {1} это пальто?\nB: Конечно, примерочная там.",
 a:["примерить"],
 opts:["примерить","примерял","мерить","мерю"],
 hint:"'Can I [verb] this coat?' — you want to try it on. Perfective infinitive.",
 sSrc:"A: Can I try on this coat?\nB: Of course, the fitting room is there."},

{type:"match", pairs:[
  {trg:"одежда", src:"clothes"},
  {trg:"рубашка", src:"shirt"},
  {trg:"брюки", src:"pants"},
  {trg:"платье", src:"dress"},
  {trg:"обувь", src:"footwear"}
]}
,{type:"match",pairs:[{trg:"сколько стоит",src:"how much does it cost?"},{trg:"касса",src:"cash register / checkout"},{trg:"размер",src:"size"},{trg:"нравиться",src:"to please (to like)"},{trg:"очень",src:"very / very much"}]}]}

,

{id:"ruv2_u8l_adj", title:"Основные прилагательные", icon:"📏", xp:15, board:true, steps:[

{type:"intro", title:"Essential Adjectives",
 desc:"Learn 7 core Russian adjectives: big, small, good, bad, beautiful, new, old. Essential for TRKI A1. Russian adjectives inflect for gender, number, and case — this lesson introduces the basic pattern.",
 goals:["Master 7 core adjectives","Recognize masculine/feminine/neuter endings","Describe objects and people"]},

{type:"teach", trg:"большой", src:"big / large", pos:"adj", gender:null,
 note:"Masculine singular form.\nForms: большая (f), большое (n), большие (pl).",
 example:"A: Это большой дом?\nB: Да, очень большой.",
 exampleSrc:"A: Is this a big house?\nB: Yes, very big.",
 funFact:"Большой literally means 'great' as well as 'big' — the Bolshoi Theatre (Большой театр) translates as 'the Great Theatre,' not just 'the Big Theatre.'"},

{type:"teach", trg:"маленький", src:"small", pos:"adj", gender:null,
 note:"Masculine singular form.\nForms: маленькая (f), маленькое (n), маленькие (pl).",
 example:"A: Большой магазин?\nB: Нет, маленький.",
 exampleSrc:"A: A big shop?\nB: No, a small one.",
 funFact:"Маленький contains the diminutive suffix -еньк-, making it feel even smaller and warmer than a plain 'small.' Russians use diminutives constantly to soften tone and express affection."},

{type:"teach", trg:"хороший", src:"good", pos:"adj", gender:null,
 note:"Masculine singular.\nForms: хорошая (f), хорошее (n), хорошие (pl).\nStress stays on last syllable: хороший.",
 example:"A: Хлеб хороший?\nB: Да, очень хороший.",
 exampleSrc:"A: Is the bread good?\nB: Yes, very good.",
 funFact:"Хороший traces to Proto-Slavic and is related to 'хор' (choir, harmony). Native Russians often feel хороший sounds warmer than its synonym добрый — хороший implies quality, добрый implies goodness of character."},

{type:"teach", trg:"плохой", src:"bad", pos:"adj", gender:null,
 note:"Masculine singular.\nForms: плохая (f), плохое (n), плохие (pl).",
 example:"A: Погода плохая?\nB: Да, очень плохая сегодня.",
 exampleSrc:"A: Is the weather bad?\nB: Yes, very bad today.",
 funFact:"Плохой and хороший form the classic Russian antonym pair you will hear everywhere. In casual speech Russians sometimes say 'неплохой' (not bad) — a genuine compliment, not faint praise."},

{type:"teach", trg:"красивый", src:"beautiful", pos:"adj", gender:null,
 note:"Masculine singular.\nForms: красивая (f), красивое (n), красивые (pl).",
 example:"A: Красивое платье!\nB: Спасибо, нравится?",
 exampleSrc:"A: What a beautiful dress!\nB: Thank you, do you like it?",
 funFact:"Красивый shares a root with красный (red). In Old Slavic красный meant beautiful before it narrowed to mean red. The word 'Красная площадь' (Red Square) originally meant 'Beautiful Square.'"},

{type:"teach", trg:"новый", src:"new", pos:"adj", gender:null,
 note:"Masculine singular.\nForms: новая (f), новое (n), новые (pl).",
 example:"A: Это новый магазин?\nB: Да, открылся вчера.",
 exampleSrc:"A: Is this a new shop?\nB: Yes, it opened yesterday.",
 funFact:"Новый gives Russian a rich word family: новость (news), обновление (update), Новый год (New Year). The same Proto-Indo-European root gives English 'novel' and 'new,' Latin 'novus,' and Spanish 'nuevo.'"},

{type:"teach", trg:"старый", src:"old", pos:"adj", gender:null,
 note:"Masculine singular.\nForms: старая (f), старое (n), старые (pl).\nRefers to age, not elderly people (for people use пожилой).",
 example:"A: Это старый дом?\nB: Да, очень старый.",
 exampleSrc:"A: Is this an old house?\nB: Yes, very old.",
 funFact:"Старый refers to objects, buildings, and things. For older people, Russians prefer пожилой (elderly) as more respectful. Calling a person старый is impolite — an important social distinction."},

{type:"tip", title:"Adjective Agreement: -ый / -ая / -ое / -ые",
 text:"Russian adjectives change their ending to match the noun they describe in GENDER, NUMBER, and CASE.\n\nFor gender in nominative (subject) case:\n• Masculine -ый/-ой: большой дом, новый магазин\n• Feminine -ая/-яя: большая рыба, красивая одежда\n• Neuter -ое/-ее: большое молоко, новое платье\n• Plural -ые/-ие: большие дома, красивые платья\n\nThe key question: what NOUN is the adjective describing?\n\nHлеб хороший. (Bread is good.) — хлеб is masculine.\nВода холодная. (Water is cold.) — вода is feminine.\nМолоко вкусное. (Milk is tasty.) — молоко is neuter.\n\nAdjectives placed AFTER the noun follow the same endings.",
 icon:"📐"},

{type:"mc", q:"How do you say 'beautiful dress' (платье = neuter) in Russian?",
 opts:["красивый платье","красивая платье","красивое платье","красивые платье"],
 ans:"красивое платье",
 hint:"Платье is neuter. Neuter adjectives take the _ое ending."},

{type:"mc", q:"Which adjective means 'bad' in Russian?",
 opts:["хороший","старый","плохой","маленький"],
 ans:"плохой",
 hint:"Think of the opposite of хороший (good)."},

{type:"mc", q:"'Old house' in Russian — which form is correct?",
 opts:["старый дом","старая дом","старое дом","старые дом"],
 ans:"старый дом",
 hint:"Дом (house) is masculine. Masculine adjectives take the _ый/-ой ending."},

{type:"fb", s:"A: Какой {1} хлеб!\nB: Да, только что из пекарни.",
 a:["хороший"],
 opts:["хороший","хорошая","хорошее","хорошие"],
 hint:"Хлеб is masculine, so use the masculine ending for 'good.'",
 sSrc:"A: What good bread!\nB: Yes, just from the bakery."},

{type:"fb", s:"A: Это {1} платье?\nB: Да, вчера купила.",
 a:["новое"],
 opts:["новое","новый","новая","новые"],
 hint:"Платье is neuter. Pick the neuter form of 'new.'",
 sSrc:"A: Is this a new dress?\nB: Yes, I bought it yesterday."},

{type:"fb", s:"A: Магазин {1}?\nB: Да, не очень большой.",
 a:["маленький"],
 opts:["маленький","маленькая","маленькое","маленькие"],
 hint:"Магазин is masculine, so the adjective needs its masculine form.",
 sSrc:"A: Is the shop small?\nB: Yes, not very big."},

{type:"match", pairs:[
  {trg:"большой", src:"big / large"},
  {trg:"маленький", src:"small"},
  {trg:"хороший", src:"good"},
  {trg:"плохой", src:"bad"},
  {trg:"красивый", src:"beautiful"}
]},

{type:"match", pairs:[
  {trg:"новый", src:"new"},
  {trg:"старый", src:"old"},
  {trg:"большая", src:"big (feminine)"},
  {trg:"маленькое", src:"small (neuter)"},
  {trg:"красивые", src:"beautiful (plural)"}
]}

]}

]};
export default UNIT_08;
