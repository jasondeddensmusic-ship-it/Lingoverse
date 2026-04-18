// Russian V2 Unit 9 — Health and Body (A2.1)
const UNIT_09 = {n:9, lang:"ru", srcLang:"en", track:"v2", title:"Здоровье", sub:"Health and Body",
 icon:"🏥", level:"A2.1", color:"#7B5EE8",
 lessons:[

{id:"ruv2_u9l1", title:"Тело", icon:"👤", xp:15, board:true, steps:[

{type:"intro", title:"Parts of the Body",
 desc:"Learn body parts — most useful for health talk, doctor visits, and describing pain. Russian body words follow regular gender patterns.",
 goals:["Name major body parts","Know gender of each","Form 'my/your body' correctly"]},

{type:"teach", trg:"тело", src:"body", pos:"noun", gender:"n",
 note:"NEUTER. Ends in -о.\nЧеловеческое тело = human body.",
 example:"A: Тело болит?\nB: Да, после спорта.",
 exampleSrc:"A: Does your body ache?\nB: Yes, after sports.",
 funFact:"Тело also means 'essence' or 'subject matter' in academic contexts. 'Тело статьи' = body of an article (like English)."},

{type:"teach", trg:"голова", src:"head", pos:"noun", gender:"f",
 note:"Feminine. Ends in -а.\nPlural: головы. Genitive: голов.",
 example:"A: Что у тебя болит?\nB: Голова.",
 exampleSrc:"A: What hurts?\nB: My head.",
 funFact:"Russian uses 'болит голова' (head hurts) — the body part is subject, not object. Impersonal style: 'у меня болит голова' = 'by me hurts head.'"},

{type:"teach", trg:"глаз", src:"eye", pos:"noun", gender:"m",
 note:"Masculine. Plural: глаза (very irregular).\nGen pl: глаз (identical to nom sg).",
 example:"A: Какого цвета глаза у ребёнка?\nB: Голубые.",
 exampleSrc:"A: What color eyes does the baby have?\nB: Blue.",
 funFact:"Глаза is suppletive — switches from singular глаз to plural глаза via ancient metathesis. Similar irregularity in English 'foot/feet.'"},

{type:"teach", trg:"рот", src:"mouth", pos:"noun", gender:"m",
 note:"Masculine. Fleeting vowel: рот → рта (of mouth).\nShort, common word.",
 example:"A: Открой рот, пожалуйста.\nB: (при враче) Aaa.",
 exampleSrc:"A: Open your mouth, please.\nB: (at doctor) Aaa.",
 funFact:"Рот uses the fleeting-vowel pattern. Similar nouns: сон/сна (dream), лев/льва (lion). The о/е 'escapes' when endings are added."},

{type:"teach", trg:"нос", src:"nose", pos:"noun", gender:"m",
 note:"Masculine. Ends in consonant.\nCommon in idioms: совать нос (stick nose in).",
 example:"A: У меня заложен нос.\nB: Выпей чай с малиной.",
 exampleSrc:"A: My nose is stuffed.\nB: Drink tea with raspberry.",
 funFact:"Russians say 'заложен нос' (nose is blocked) for congestion. Traditional remedies: чай с малиной (raspberry tea), горчичники (mustard plasters)."},

{type:"teach", trg:"рука", src:"hand / arm", pos:"noun", gender:"f",
 note:"Feminine. Means BOTH hand and arm.\nPlural: руки.",
 example:"A: Что-то болит в руке.\nB: Покажите врачу.",
 exampleSrc:"A: Something hurts in my arm.\nB: Show it to the doctor.",
 funFact:"Russian уникальна: one word for hand and arm. For clarity: кисть (palm/hand), плечо (shoulder), локоть (elbow). But рука is the default."},

{type:"teach", trg:"нога", src:"leg / foot", pos:"noun", gender:"f",
 note:"Feminine. Means BOTH leg and foot.\nPlural: ноги.",
 example:"A: Ноги устали.\nB: Сядь, отдохни.",
 exampleSrc:"A: My legs are tired.\nB: Sit down, rest.",
 funFact:"Like рука, нога covers both leg and foot. For more precision: бедро (thigh), колено (knee), ступня/стопа (foot/foot-bottom). Context usually clarifies."},

{type:"teach", trg:"горло", src:"throat", pos:"noun", gender:"n",
 note:"Neuter. Ends in -о.\nКашель = cough (related).",
 example:"A: Что болит?\nB: Горло, сильно.",
 exampleSrc:"A: What hurts?\nB: My throat, badly.",
 funFact:"Russians talk extensively about 'горло' (throat) in health contexts. Cold medicine ads feature sore throats prominently — it's the primary cold symptom discussed."},

{type:"teach", trg:"живот", src:"stomach / belly", pos:"noun", gender:"m",
 note:"Masculine. Covers whole abdomen.\nStomach as organ: желудок (separate word).",
 example:"A: У меня болит живот.\nB: Что ел?\nA: Не знаю.",
 exampleSrc:"A: My stomach hurts.\nB: What did you eat?\nA: I don't know.",
 funFact:"Живот originally meant 'life' in Old Slavic (from 'живой' — alive). Evolved to 'belly' by metonymy — the vital center. 'Не щадить живота' = 'not sparing one's life' (archaic)."},

{type:"tip", title:"Body Parts: Gender Patterns",
 text:"Russian body parts follow predictable gender patterns:\n\nMASCULINE (end in consonant):\nглаз (eye), рот (mouth), нос (nose), живот (stomach), палец (finger), зуб (tooth).\n\nFEMININE (end in -а/-я or -ь):\nголова (head), рука (hand/arm), нога (leg/foot), щека (cheek), спина (back), кровь (blood).\n\nNEUTER (end in -о/-е):\nтело (body), горло (throat), сердце (heart), лицо (face), колено (knee), ухо (ear).\n\nOne word covers multiple English parts:\nрука = hand AND arm.\nнога = leg AND foot.\n\nFor precision, Russian adds extra terms when needed.",
 icon:"👤"},

{type:"mc", q:"What gender is 'тело' (body)?",
 opts:["Masculine","Feminine","Neuter","Ambiguous"],
 ans:"Neuter",
 hint:"Ends in -о. Standard ___ ending."},

{type:"mc", q:"How does Russian handle 'hand' vs 'arm'?",
 opts:["Has separate words for each","Uses 'рука' for both","Has three words","Uses English loanwords"],
 ans:"Uses 'рука' for both",
 hint:"One Russian word covers both the hand and arm — like нога covers leg and foot."},

{type:"fb", s:"A: Что у тебя болит?\nB: Очень болит {1}.",
 a:["голова"],
 opts:["голова","глаз","рука","нос"],
 hint:"The most common complaint with 'очень болит' (very much hurts) is:",
 sSrc:"A: What hurts?\nB: My head hurts a lot."},

{type:"match", pairs:[
  {trg:"голова", src:"head"},
  {trg:"глаз", src:"eye"},
  {trg:"рука", src:"hand/arm"},
  {trg:"нога", src:"leg/foot"},
  {trg:"живот", src:"stomach"}
]}
]},

{id:"ruv2_u9l2", title:"Я заболел", icon:"🤒", xp:15, board:true, steps:[

{type:"intro", title:"I'm Sick",
 desc:"Describe illness and feelings. Russian uses impersonal constructions extensively for health: 'у меня болит' (by me it hurts).",
 goals:["Describe pain location","Use 'у меня есть' for symptoms","Navigate doctor visits"]},

{type:"teach", trg:"болеть", src:"to be sick / to hurt", pos:"verb", gender:null,
 note:"Two meanings depending on construction.\nЯ болею = I'm sick. У меня болит голова = My head hurts.",
 example:"A: Я болею.\nB: Что с тобой?",
 exampleSrc:"A: I'm sick.\nB: What's wrong?",
 funFact:"Болеть has the complex duality: with a person as subject = to be sick. With a body part as subject = to hurt. Different structures, same verb."},

{type:"teach", trg:"болит", src:"hurts (3rd p sg)", pos:"verb", gender:null,
 note:"Body part + болит = the [body part] hurts.\nУ меня болит голова = My head hurts.",
 example:"A: У вас что-то болит?\nB: Да, болит горло.",
 exampleSrc:"A: Does something hurt?\nB: Yes, my throat hurts.",
 funFact:"Singular body part = болит. Plural = болят. 'У меня болит голова' (singular head). 'У меня болят ноги' (plural legs)."},

{type:"teach", trg:"больной", src:"sick (masculine adjective)", pos:"adj", gender:"m",
 note:"Feminine: больная. Neuter: больное. Plural: больные.\nAlso used as noun: 'a sick person.'",
 example:"A: Он больной?\nB: Нет, здоровый.",
 exampleSrc:"A: Is he sick?\nB: No, healthy.",
 funFact:"Больной as a noun means 'patient' — common in medical contexts: 'очередь к больным' (queue for patients). Used in hospitals and clinics."},

{type:"teach", trg:"здоровый", src:"healthy (m)", pos:"adj", gender:"m",
 note:"Opposite of больной.\nFeminine: здоровая.",
 example:"A: Ты здоровый?\nB: Совершенно здоровый.",
 exampleSrc:"A: Are you healthy?\nB: Completely healthy.",
 funFact:"Здоровье (health) shares root. Common greeting: 'Здоровья!' (Health!) — wishing good health. Said when toasting."},

{type:"teach", trg:"температура", src:"temperature / fever", pos:"noun", gender:"f",
 note:"Feminine. TWO meanings.\nWith number = thermometer reading. Alone = fever.",
 example:"A: У тебя температура?\nB: Да, 38.",
 exampleSrc:"A: Do you have a fever?\nB: Yes, 38.",
 funFact:"'У меня температура' usually means 'I have a fever' in medical talk. For weather: 'температура плюс десять.' Context makes it clear."},

{type:"teach", trg:"простуда", src:"cold (illness)", pos:"noun", gender:"f",
 note:"Feminine. Ends in -а.\nThe common cold, rhinitis.",
 example:"A: Что с тобой?\nB: Простая простуда.",
 exampleSrc:"A: What's wrong with you?\nB: Just a cold.",
 funFact:"From 'простой' (simple) — 'the simple illness.' Russians have seasonal simple cold vs flu distinction: простуда (cold) vs грипп (flu)."},

{type:"teach", trg:"грипп", src:"flu", pos:"noun", gender:"m",
 note:"Masculine. From Latin via English.\nSerious illness unlike простуда.",
 example:"A: Он в больнице?\nB: Да, у него грипп.",
 exampleSrc:"A: Is he in the hospital?\nB: Yes, he has the flu.",
 funFact:"Грипп comes from 18th century French 'grippe.' Russia had historically devastating flu outbreaks — the 1889 Russian flu killed ~1 million globally."},

{type:"teach", trg:"устать", src:"to be tired (perfective)", pos:"verb", gender:null,
 note:"Perfective.\nPast: устал/устала/устали.",
 example:"A: Что с тобой?\nB: Я устал, вот и всё.",
 exampleSrc:"A: What's wrong?\nB: I'm tired, that's all.",
 funFact:"Russian tells you the past tense: 'Я устал' (I got tired, perfective). 'Я устаю' (I'm getting tired, imperfective). The aspect choice shows if it's an ongoing process or completed state."},

{type:"teach", trg:"отдыхать", src:"to rest (imperfective)", pos:"verb", gender:null,
 note:"Imperfective.\nPair: отдохнуть (perfective).",
 example:"A: Что ты делаешь?\nB: Отдыхаю — устала очень.",
 exampleSrc:"A: What are you doing?\nB: Resting — very tired.",
 funFact:"Отдыхать is used for ALL forms of rest: weekend relaxation, vacations, sleeping, taking breaks. Russians say 'еду отдыхать' to mean going on vacation."},

{type:"tip", title:"Saying 'I Have [Symptom]'",
 text:"Russian uses 'У меня есть' construction — but for SYMPTOMS it uses 'У меня...' (without есть):\n\nOWNERSHIP: 'У меня есть книга.' (I have a book.)\nSYMPTOMS: 'У меня болит голова.' (My head hurts / I have a headache.)\n'У меня температура.' (I have a fever.)\n'У меня простуда.' (I have a cold.)\n\nThe есть (to be / exist) is OMITTED for symptoms — they're conditions, not possessions.\n\nDoctor-patient phrases:\nЧто у вас болит? (What hurts for you?)\nКак вы себя чувствуете? (How do you feel?)\nМне нужно лекарство. (I need medicine.)",
 icon:"🩺"},

{type:"mc", q:"How do you say 'I have a fever' in Russian?",
 opts:["Я есть температура","У меня есть температура","У меня температура","Мне температура"],
 ans:"У меня температура",
 hint:"Symptoms omit 'есть' — just 'У меня + symptom.'"},

{type:"mc", q:"Which sentence uses the right aspect?",
 opts:["Я устаю каждый вечер","Я устал каждый вечер","Я уставал каждый вечер","Я уставала каждый вечер"],
 ans:"Я устаю каждый вечер",
 hint:"Repeated habit (каждый вечер = every evening) requires imperfective aspect."},

{type:"fb", s:"A: Как он сегодня?\nB: {1}, в больнице.",
 a:["Больной"],
 opts:["Больной","Здоровый","Усталый","Обычный"],
 hint:"He's in the hospital — what's his condition?",
 sSrc:"A: How is he today?\nB: Sick, in the hospital."},

{type:"fb", s:"A: Что у тебя {1}?\nB: Очень сильно, голова.",
 a:["болит"],
 opts:["болит","болят","боль","больно"],
 hint:"Singular body part follows. Use the 3rd-person singular present of 'to hurt'.",
 sSrc:"A: What hurts?\nB: Very much, my head."},

{type:"match", pairs:[
  {trg:"болит", src:"hurts"},
  {trg:"температура", src:"fever"},
  {trg:"простуда", src:"cold"},
  {trg:"грипп", src:"flu"},
  {trg:"устать", src:"to tire"}
]}
]},

{id:"ruv2_u9l3", title:"У врача", icon:"👨‍⚕️", xp:15, board:true, steps:[

{type:"intro", title:"At the Doctor",
 desc:"Navigate medical appointments. Russian healthcare uses specific vocabulary and polite formulas.",
 goals:["Describe symptoms to a doctor","Request medicine","Understand basic medical advice"]},

{type:"teach", trg:"врач", src:"doctor", pos:"noun", gender:"m",
 note:"Masculine (though also describes women).\nAlso: доктор (from Western languages, informal).",
 example:"A: Мне нужно к врачу.\nB: Запишись на приём.",
 exampleSrc:"A: I need to see a doctor.\nB: Make an appointment.",
 funFact:"Врач became universal during Soviet era when many female врачи practiced. Russian grammar treats all врачи as masculine despite natural gender."},

{type:"teach", trg:"больница", src:"hospital", pos:"noun", gender:"f",
 note:"Feminine. From 'больной' (sick) + -ница (location).\nРоддом = maternity hospital (separate word).",
 example:"A: Где больница?\nB: Центральная больница — в центре.",
 exampleSrc:"A: Where is the hospital?\nB: The central hospital is downtown.",
 funFact:"Russian has specific hospital types: поликлиника (clinic for outpatient), больница (full hospital with beds), травмпункт (emergency room/trauma center), санаторий (sanatorium for rest)."},

{type:"teach", trg:"аптека", src:"pharmacy", pos:"noun", gender:"f",
 note:"Feminine. International word.\nFound on every block in Russia.",
 example:"A: Где аптека?\nB: Напротив метро, 24 часа.",
 exampleSrc:"A: Where is the pharmacy?\nB: Across from the metro, 24 hours.",
 funFact:"24-hour apteka (аптека 24 часа) is ubiquitous in Russian cities. Many OTC medications available that require prescriptions elsewhere. Russian pharmacies also sell cosmetics and supplements."},

{type:"teach", trg:"лекарство", src:"medicine / medication", pos:"noun", gender:"n",
 note:"Neuter. From 'лекарь' (healer, archaic).\nTakes prepositional: 'лекарство от' (medicine for).",
 example:"A: Есть лекарство от кашля?\nB: Да, вот сироп.",
 exampleSrc:"A: Do you have medicine for cough?\nB: Yes, here's syrup.",
 funFact:"Лекарство от X = medicine for X. Uses 'от' (from/against) instead of 'для' (for). Lingers from old concept of healing as protection 'from' illness."},

{type:"teach", trg:"рецепт", src:"prescription / recipe", pos:"noun", gender:"m",
 note:"Masculine. TWO meanings.\nContext: at doctor = prescription. In cookbook = recipe.",
 example:"A: Мне нужен рецепт?\nB: Да, без рецепта не продают.",
 exampleSrc:"A: Do I need a prescription?\nB: Yes, they don't sell it without one.",
 funFact:"Medical prescription AND cooking recipe are the same word in Russian. Also Spanish (receta), Italian (ricetta). From Latin recepta (received, prescribed)."},

{type:"teach", trg:"приём", src:"appointment / reception", pos:"noun", gender:"m",
 note:"Masculine. Ends in ё.\nНа приём = for appointment.",
 example:"A: У меня приём в три часа.\nB: К какому врачу?",
 exampleSrc:"A: I have an appointment at three.\nB: With which doctor?",
 funFact:"Приём has multiple meanings: medical appointment, formal reception (at embassy), intake/admission. Always indicates a scheduled meeting."},

{type:"teach", trg:"записаться", src:"to sign up / make an appointment", pos:"verb", gender:null,
 note:"Reflexive (ся).\nPerfective: записаться на приём.",
 example:"A: Записался к врачу?\nB: Да, на завтра.",
 exampleSrc:"A: Did you make a doctor's appointment?\nB: Yes, for tomorrow.",
 funFact:"Reflexive -ся makes the verb middle voice. 'Записать' = to write/record. 'Записаться' = to record oneself = sign up. Many Russian verbs become reflexive this way."},

{type:"teach", trg:"принимать", src:"to take (medicine)", pos:"verb", gender:null,
 note:"Imperfective.\nUsed with лекарство, таблетки.",
 example:"A: Как принимать лекарство?\nB: Три раза в день, после еды.",
 exampleSrc:"A: How to take the medicine?\nB: Three times a day, after meals.",
 funFact:"Принимать has many uses: to receive (guests), to accept (an offer), to admit (to hospital), to take (medicine, bath). Core meaning: to take in/accept."},

{type:"teach", trg:"помочь", src:"to help (perfective)", pos:"verb", gender:null,
 note:"Perfective.\nPair: помогать.",
 example:"A: Лекарство помогло?\nB: Да, теперь лучше.",
 exampleSrc:"A: Did the medicine help?\nB: Yes, better now.",
 funFact:"Помочь takes dative: 'помочь кому' (to help someone). Russian helps verbs often take unusual cases — part of why learning cases matters."},

{type:"tip", title:"At the Doctor: Key Phrases",
 text:"Standard Russian doctor-visit phrases:\n\nARRIVAL:\nЗдравствуйте, я на приём к доктору X.\n(Hello, I have an appointment with Dr X.)\n\nDESCRIBING SYMPTOMS:\nУ меня болит... (My ... hurts.)\nУ меня температура. (I have a fever.)\nЯ чувствую себя плохо. (I feel bad.)\n\nREQUESTING:\nПропишите мне лекарство, пожалуйста.\n(Prescribe me medicine, please.)\n\nUNDERSTANDING ADVICE:\nПринимайте два раза в день. (Take twice daily.)\nПейте больше жидкости. (Drink more fluids.)\nОтдыхайте больше. (Rest more.)\n\nCLOSING:\nСпасибо, доктор. (Thanks, doctor.)\nДо свидания. (Goodbye.)",
 icon:"🩺"},

{type:"mc", q:"How do you say 'I need a prescription' in Russian?",
 opts:["Мне нужен рецепт","Я хочу рецепт","Дай мне рецепт","У меня рецепт"],
 ans:"Мне нужен рецепт",
 hint:"'Мне нужен' = I need (impersonal dative + nominative). The thing needed is masculine."},

{type:"mc", q:"Which verb means 'to make an appointment'?",
 opts:["писать","записывать","записаться","записывание"],
 ans:"записаться",
 hint:"Reflexive form — you record yourself = sign yourself up."},

{type:"fb", s:"A: Как принимать это лекарство?\nB: {1} раза в день, после еды.",
 a:["Три"],
 opts:["Три","Один","Один раз","Три раза"],
 hint:"The format 'X раза в день' with the number alone (раза is already in sentence).",
 sSrc:"A: How to take this medicine?\nB: Three times a day, after meals."},

{type:"fb", s:"A: Врач выписал {1}?\nB: Да, вот бумажка.",
 a:["рецепт"],
 opts:["рецепт","лекарство","приём","больницу"],
 hint:"A 'бумажка' (paper) suggests what the doctor 'prescribed' you to take to the pharmacy.",
 sSrc:"A: Did the doctor write a prescription?\nB: Yes, here's the paper."},

{type:"match", pairs:[
  {trg:"врач", src:"doctor"},
  {trg:"больница", src:"hospital"},
  {trg:"аптека", src:"pharmacy"},
  {trg:"лекарство", src:"medicine"},
  {trg:"рецепт", src:"prescription"}
]}
]}

]};
export default UNIT_09;
