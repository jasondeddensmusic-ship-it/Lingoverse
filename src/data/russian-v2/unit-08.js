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
 example:"A: Сколько стоит этот журнал?\nB: Сто рублей.",
 exampleSrc:"A: How much does this magazine cost?\nB: A hundred rubles.",
 funFact:"The word order in Russian shopping is flexible. 'Сколько этот журнал стоит?' also works. Russians often add 'пожалуйста' at the end for politeness."},

{type:"teach", trg:"дорого", src:"expensive", pos:"adv", gender:null,
 note:"Impersonal form.\nAlso: дорогой (m), дорогая (f) as adjective.",
 example:"A: Дорого?\nB: Да, слишком дорого.",
 exampleSrc:"A: Expensive?\nB: Yes, too expensive.",
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
 hint:"Russian has nouns that only exist in plural form — like English 'scissors.'"},

{type:"fb", s:"A: Сколько {1} яблоки?\nB: Пятьдесят рублей за килограмм.",
 a:["стоят"],
 opts:["стоят","стоит","стоил","стояли"],
 hint:"Apples is plural (яблоки), so the verb agrees with plural.",
 sSrc:"A: How much do apples cost?\nB: Fifty rubles per kilo."},

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
 example:"A: Где ты обычно покупаешь овощи?\nB: На рынке.",
 exampleSrc:"A: Where do you usually buy vegetables?\nB: At the market.",
 funFact:"Покупать takes the -аю conjugation like most imperfective verbs. Купить (perfective) has its own pattern — куплю, купишь. Learn them together always."},

{type:"teach", trg:"продать", src:"to sell (perfective)", pos:"verb", gender:null,
 note:"Perfective.\nPair: продавать.",
 example:"A: Ты продашь свою машину?\nB: Может быть.",
 exampleSrc:"A: Will you sell your car?\nB: Maybe.",
 funFact:"Продать uses the prefix про- (through/across) + дать (to give). Literally 'to give through' — money passes through to close the deal."},

{type:"teach", trg:"продавать", src:"to sell (imperfective)", pos:"verb", gender:null,
 note:"Imperfective.\nЯ продаю, ты продаёшь.",
 example:"A: Что продают в этом магазине?\nB: Всякое — еду, одежду.",
 exampleSrc:"A: What do they sell at this store?\nB: Various things — food, clothes.",
 funFact:"'Они продают' has ambiguous subject: 'they' (specific people) or 'they' (impersonal, one does). Context decides. This impersonal use is common."},

{type:"teach", trg:"платить", src:"to pay (imperfective)", pos:"verb", gender:null,
 note:"Imperfective.\nPair: заплатить (perfective).",
 example:"A: Как вы будете платить?\nB: Картой.",
 exampleSrc:"A: How will you pay?\nB: By card.",
 funFact:"Платить takes 'за' + accusative: платить за хлеб (pay for bread). Also takes instrumental for method: платить картой (pay by card), платить наличными (pay in cash)."},

{type:"teach", trg:"касса", src:"cash register / checkout", pos:"noun", gender:"f",
 note:"Feminine. Also 'cashier's desk' or 'ticket office.'\nПри кассе = at the register.",
 example:"A: Где можно заплатить?\nB: У кассы, слева.",
 exampleSrc:"A: Where can I pay?\nB: At the register, on the left.",
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
 hint:"Regular, repeated actions take imperfective aspect."},

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
 example:"A: Где одежда?\nB: На втором этаже.",
 exampleSrc:"A: Where's the clothing?\nB: On the second floor.",
 funFact:"Одежда is collective. For individual items use plural: вещи (things) or specific garments. 'Купить одежду' = to buy clothes (collectively)."},

{type:"teach", trg:"рубашка", src:"shirt", pos:"noun", gender:"f",
 note:"Feminine. -ка diminutive suffix is common for clothes.\nДиминутив from 'руб-' (cut, as in cut fabric).",
 example:"A: Какого размера рубашка?\nB: Средний.",
 exampleSrc:"A: What size is the shirt?\nB: Medium.",
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
 example:"A: Где обувь?\nB: На первом этаже.",
 exampleSrc:"A: Where's the footwear?\nB: On the first floor.",
 funFact:"Обувь is collective — 'footwear' as a category. For specific pairs: ботинки (boots), туфли (shoes), кроссовки (sneakers). All those are plural."},

{type:"teach", trg:"размер", src:"size", pos:"noun", gender:"m",
 note:"Masculine. Generic size word.\nUsed for clothing, shoes, furniture.",
 example:"A: Какой у вас размер?\nB: Сорок четвёртый.",
 exampleSrc:"A: What's your size?\nB: Forty-four.",
 funFact:"Russian clothing sizes are measured in cm (chest/waist circumference) or numerical scale. A 'size 44' Russian dress ≈ US size 6. Shoes use European EU sizes 36-45."},

{type:"teach", trg:"примерить", src:"to try on", pos:"verb", gender:null,
 note:"Perfective.\nPair: примерять.",
 example:"A: Можно примерить это платье?\nB: Конечно, примерочная там.",
 exampleSrc:"A: Can I try on this dress?\nB: Of course, the fitting room is there.",
 funFact:"Примерочная (fitting room) is standard in all Russian retail. 'Мерить' itself means to measure — primерить adds 'try out for fit' nuance."},

{type:"teach", trg:"нравиться", src:"to please (to like)", pos:"verb", gender:null,
 note:"BACKWARD verb — like Spanish gustar.\nThe thing liked is subject, person liking is dative.",
 example:"A: Тебе нравится эта сумка?\nB: Да, нравится!",
 exampleSrc:"A: Do you like this bag?\nB: Yes, I like it!",
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
 hint:"Russian noun gender is determined by WORD ENDING, not meaning. -е = neuter."},

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
]}

]};
export default UNIT_08;
