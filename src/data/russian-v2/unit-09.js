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
 example:"A: Тело болит?\nB: Да, болит.",
 exampleSrc:"A: Does your body ache?\nB: Yes, it aches.",
 funFact:"Тело also means 'essence' or 'subject matter' in academic contexts. 'Тело статьи' = body of an article (like English)."},

{type:"teach", trg:"голова", src:"head", pos:"noun", gender:"f",
 note:"Feminine. Ends in -а.\nPlural: головы. Genitive: голов.",
 example:"A: Что у тебя болит?\nB: Голова.",
 exampleSrc:"A: What hurts?\nB: My head.",
 funFact:"Russian uses 'болит голова' (head hurts) — the body part is subject, not object. Impersonal style: 'у меня болит голова' = 'by me hurts head.'"},

{type:"teach", trg:"глаз", src:"eye", pos:"noun", gender:"m",
 note:"Masculine. Plural: глаза (very irregular).\nGen pl: глаз (identical to nom sg).",
 example:"A: Глаз болит?\nB: Да, болит.",
 exampleSrc:"A: Does your eye hurt?\nB: Yes, it hurts.",
 funFact:"Глаза is suppletive — switches from singular глаз to plural глаза via ancient metathesis. Similar irregularity in English 'foot/feet.'"},

{type:"teach", trg:"рот", src:"mouth", pos:"noun", gender:"m",
 note:"Masculine. Fleeting vowel: рот → рта (of mouth).\nShort, common word.",
 example:"A: Рот болит?\nB: Да, болит.",
 exampleSrc:"A: Does your mouth hurt?\nB: Yes, it hurts.",
 funFact:"Рот uses the fleeting-vowel pattern. Similar nouns: сон/сна (dream), лев/льва (lion). The о/е 'escapes' when endings are added."},

{type:"teach", trg:"нос", src:"nose", pos:"noun", gender:"m",
 note:"Masculine. Ends in consonant.\nCommon in idioms: совать нос (stick nose in).",
 example:"A: Нос болит?\nB: Да, болит нос.",
 exampleSrc:"A: Does your nose hurt?\nB: Yes, my nose hurts.",
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
 example:"A: Горло болит?\nB: Да, горло болит.",
 exampleSrc:"A: Does your throat hurt?\nB: Yes, my throat hurts.",
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
 example:"A: Я болею.\nB: Ты больной?",
 exampleSrc:"A: I'm sick.\nB: Are you ill?",
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
 example:"A: Ты больной?\nB: Да, простуда.",
 exampleSrc:"A: Are you sick?\nB: Yes, a cold.",
 funFact:"From 'простой' (simple) — 'the simple illness.' Russians have seasonal simple cold vs flu distinction: простуда (cold) vs грипп (flu)."},

{type:"teach", trg:"грипп", src:"flu", pos:"noun", gender:"m",
 note:"Masculine. From Latin via English.\nSerious illness unlike простуда.",
 example:"A: Он больной?\nB: Да, грипп.",
 exampleSrc:"A: Is he sick?\nB: Yes, the flu.",
 funFact:"Грипп comes from 18th century French 'grippe.' Russia had historically devastating flu outbreaks — the 1889 Russian flu killed ~1 million globally."},

{type:"teach", trg:"устать", src:"to be tired (perfective)", pos:"verb", gender:null,
 note:"Perfective.\nPast: устал/устала/устали.",
 example:"A: Ты устал?\nB: Да, я устал.",
 exampleSrc:"A: Are you tired?\nB: Yes, I'm tired.",
 funFact:"Russian tells you the past tense: 'Я устал' (I got tired, perfective). 'Я устаю' (I'm getting tired, imperfective). The aspect choice shows if it's an ongoing process or completed state."},

{type:"teach", trg:"отдыхать", src:"to rest (imperfective)", pos:"verb", gender:null,
 note:"Imperfective.\nPair: отдохнуть (perfective).",
 example:"A: Ты устала?\nB: Да, я отдыхаю.",
 exampleSrc:"A: Are you tired?\nB: Yes, I'm resting.",
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
 example:"A: Где больница?\nB: Там, рядом.",
 exampleSrc:"A: Where is the hospital?\nB: There, nearby.",
 funFact:"Russian has specific hospital types: поликлиника (clinic for outpatient), больница (full hospital with beds), травмпункт (emergency room/trauma center), санаторий (sanatorium for rest)."},

{type:"teach", trg:"аптека", src:"pharmacy", pos:"noun", gender:"f",
 note:"Feminine. International word.\nFound on every block in Russia.",
 example:"A: Где аптека?\nB: Там, рядом с больницей.",
 exampleSrc:"A: Where is the pharmacy?\nB: There, next to the hospital.",
 funFact:"24-hour apteka (аптека 24 часа) is ubiquitous in Russian cities. Many OTC medications available that require prescriptions elsewhere. Russian pharmacies also sell cosmetics and supplements."},

{type:"teach", trg:"лекарство", src:"medicine / medication", pos:"noun", gender:"n",
 note:"Neuter. From 'лекарь' (healer, archaic).\nTakes prepositional: 'лекарство от' (medicine for).",
 example:"A: Лекарство есть?\nB: Да, вот лекарство.",
 exampleSrc:"A: Is there medicine?\nB: Yes, here's the medicine.",
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
 example:"A: Принимать лекарство?\nB: Да, принимать.",
 exampleSrc:"A: Take the medicine?\nB: Yes, take it.",
 funFact:"Принимать has many uses: to receive (guests), to accept (an offer), to admit (to hospital), to take (medicine, bath). Core meaning: to take in/accept."},

{type:"teach", trg:"помочь", src:"to help (perfective)", pos:"verb", gender:null,
 note:"Perfective.\nPair: помогать.",
 example:"A: Лекарство помогло?\nB: Да, помогло.",
 exampleSrc:"A: Did the medicine help?\nB: Yes, it helped.",
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
,{type:"match",pairs:[{trg:"тело",src:"body"},{trg:"рот",src:"mouth"},{trg:"нос",src:"nose"},{trg:"горло",src:"throat"},{trg:"болеть",src:"to be sick / to hurt"},{trg:"здоровый",src:"healthy (m)"}]},{type:"match",pairs:[{trg:"отдыхать",src:"to rest (imperfective)"},{trg:"приём",src:"appointment / reception"},{trg:"принимать",src:"to take (medicine)"},{trg:"помочь",src:"to help (perfective)"}]}]}

,

{id:"ruv2_u9l_apt", title:"Записаться на приём", icon:"📅", xp:15, board:true, steps:[

{type:"intro", title:"Making Appointments",
 desc:"Learn to make, confirm, and reschedule appointments in Russian. Essential for clinics, dentists, and service centres. Tested on TRKI A2.",
 goals:["Make appointments by phone","Confirm and cancel appointments","Reschedule a visit","Use polite Russian (Вы form)"]},

{type:"teach", trg:"запись", src:"booking / registration entry", pos:"noun", gender:"f",
 note:"Feminine. From 'записать' (to write down).\nНа записи = on the list. Записи нет = no booking.",
 example:"A: Есть запись на завтра?\nB: Да, запись есть.",
 exampleSrc:"A: Is there a booking for tomorrow?\nB: Yes, there is a booking.",
 funFact:"Russian clinics use 'запись' for both the act of registering and the record itself. Soviet-era queues were managed via written 'записи' — lists posted on doors the night before."},

{type:"teach", trg:"записаться на приём", src:"to make an appointment", pos:"verb", gender:null,
 note:"Reflexive perfective phrase.\nZаписаться = sign yourself up. На приём = for a reception/visit.",
 example:"A: Я хочу записаться на приём.\nB: К какому врачу?",
 exampleSrc:"A: I want to make an appointment.\nB: With which doctor?",
 funFact:"Both words already exist: записаться (to register) + приём (reception). Russians combine them into a single fixed phrase for booking medical visits, exactly like English 'make an appointment.'"},

{type:"teach", trg:"подтвердить", src:"to confirm (perfective)", pos:"verb", gender:null,
 note:"Perfective. Imperfective pair: подтверждать.\nSubject confirms an existing plan.",
 example:"A: Вы подтвердите приём?\nB: Да, подтверждаю.",
 exampleSrc:"A: Will you confirm the appointment?\nB: Yes, I confirm it.",
 funFact:"Подтвердить = under + affirm. Related to 'твёрдый' (firm, solid). To confirm = to make firm under. Same logic as English 'confirm' from Latin 'firmus' (firm)."},

{type:"teach", trg:"отменить", src:"to cancel (perfective)", pos:"verb", gender:null,
 note:"Perfective. Imperfective pair: отменять.\nОтменить приём = cancel an appointment.",
 example:"A: Нужно отменить приём.\nB: Хорошо.",
 exampleSrc:"A: I need to cancel the appointment.\nB: OK.",
 funFact:"Отменить comes from 'отмена' (cancellation, abolition). Historically used for major decrees: 'отмена крепостного права' = abolition of serfdom (1861). Now routinely used for dentist cancellations."},

{type:"teach", trg:"перенести", src:"to reschedule / to move (perfective)", pos:"verb", gender:null,
 note:"Perfective. Imperfective: переносить.\nПеренести приём = move the appointment to another time.",
 example:"A: Можно перенести приём?\nB: Да, на когда?",
 exampleSrc:"A: Can I reschedule the appointment?\nB: Yes, to when?",
 funFact:"Перенести literally means 'to carry across.' In scheduling, you 'carry' the event to a new date. Also used physically: перенести коробку = carry a box across the room."},

{type:"teach", trg:"Я хотел(а) бы записаться...", src:"I would like to make an appointment...", pos:"intj", gender:null,
 note:"Conditional polite request. Хотел = masc, хотела = fem.\nбы = subjunctive particle — makes it softer.",
 example:"A: Я хотел бы записаться на приём к врачу.\nB: Хорошо, когда?",
 exampleSrc:"A: I would like to make an appointment with a doctor.\nB: OK, when?",
 funFact:"Хотел бы = wanted + бы (the would-particle). Бы turns any past-tense form into conditional/polite. It floats freely: 'Я бы хотел' and 'Я хотел бы' are both correct."},

{type:"teach", trg:"Когда Вам удобно?", src:"When is convenient for you? (polite)", pos:"intj", gender:null,
 note:"Вам = dative of Вы (polite you).\nУдобно = convenient (predicate adjective).",
 example:"A: Когда Вам удобно?\nB: Завтра, если можно.",
 exampleSrc:"A: When is convenient for you?\nB: Tomorrow, if possible.",
 funFact:"Russian uses 'Вам удобно' (convenient to you) rather than 'Are you free?' English asks about freedom; Russian asks about convenience — a culturally telling difference in framing."},

{type:"tip", title:"Phone Call: Making an Appointment",
 text:"Standard Russian phone script for a clinic appointment:\n\nOPENING:\nЗдравствуйте! Я хотел(а) бы записаться на приём к врачу.\n(Hello! I would like to make an appointment with a doctor.)\n\nCLINIC ASKS:\nКогда Вам удобно?\n(When is convenient for you?)\n\nYOU RESPOND:\nЗавтра, если можно. / В пятницу.\n(Tomorrow, if possible. / On Friday.)\n\nCONFIRM:\nПожалуйста, подтвердите, что я записан(а).\n(Please confirm that I am registered.)\n\nCANCEL:\nМне нужно отменить приём на среду.\n(I need to cancel my Wednesday appointment.)\n\nRESCHEDULE:\nМожно перенести на другой день?\n(Can it be moved to another day?)\n\nKey pattern: Вы / Вам (polite you) is standard on the phone.",
 icon:"📞"},

{type:"mc", q:"Which phrase means 'to make an appointment' in Russian?",
 opts:["записать врача","записаться на приём","подтвердить приём","перенести приём"],
 ans:"записаться на приём",
 hint:"Reflexive verb + 'на приём' — you sign yourself up for a reception slot."},

{type:"mc", q:"Which verb means 'to cancel' an appointment?",
 opts:["перенести","подтвердить","записаться","отменить"],
 ans:"отменить",
 hint:"Think of a historic abolition decree — the same verb applies to dentist slots."},

{type:"fb", s:"A: Вы можете {1} завтрашний приём?\nB: Да, конечно.",
 a:["подтвердить"],
 opts:["подтвердить","отменить","перенести","записать"],
 hint:"Speaker B says 'yes, of course' — what action is being agreed to?",
 sSrc:"A: Can you confirm tomorrow's appointment?\nB: Yes, of course."},

{type:"fb", s:"A: Мне нужно {1} приём — я занят в пятницу.\nB: Хорошо, есть среда.",
 a:["перенести"],
 opts:["перенести","отменить","подтвердить","записать"],
 hint:"Speaker is busy on Friday and wants to move the slot — not cancel it.",
 sSrc:"A: I need to reschedule the appointment — I'm busy on Friday.\nB: OK, there's Wednesday."},

{type:"mc", q:"What does 'Когда Вам удобно?' mean?",
 opts:["Where is the clinic?","When is convenient for you?","How long is the wait?","Who is your doctor?"],
 ans:"When is convenient for you?",
 hint:"Вам = dative of polite Вы. Удобно = a short-form adjective about ease or suitability."},

{type:"fb", s:"A: Есть {1} на завтра?\nB: Да, есть.",
 a:["запись"],
 opts:["запись","приём","рецепт","врач"],
 hint:"Feminine noun meaning a booking or registration entry — from 'записать'.",
 sSrc:"A: Is there a booking for tomorrow?\nB: Yes, there is."},

{type:"fb", s:"A: Я хотел {1} записаться на приём.\nB: К кому — к терапевту?",
 a:["бы"],
 opts:["бы","же","ли","ведь"],
 hint:"This word makes 'I wanted' softer — turning it into a polite request form.",
 sSrc:"A: I would like to make an appointment.\nB: With whom — with a general practitioner?"},

{type:"match", pairs:[
  {trg:"записаться на приём", src:"make an appointment"},
  {trg:"подтвердить", src:"confirm"},
  {trg:"отменить", src:"cancel"},
  {trg:"перенести", src:"reschedule"},
  {trg:"Когда Вам удобно?", src:"When is convenient for you?"}
]}

]}

,{id:"ruv2_u9l_essential_a1b1", title:"Важные слова", icon:"🔑", xp:20, board:true, steps:[

{type:"intro", title:"Essential Words: Pronouns, Verbs, and Civic Discourse",
 desc:"Fill seven key gaps: the pronoun 'we', the verb 'to be', 'to have', 'thousand', 'street', plus two B1 civic discourse verbs. All are required for TRKI A1-B1 certification.",
 goals:["Use мы (we) correctly with plural verbs","Understand быть: invisible in present tense, essential in past and future","Distinguish иметь from у меня есть","Say thousand (тысяча) in context","Name улица (street)","Use отказываться and советовать in civic situations"]},

{type:"teach", trg:"мы", src:"we", pos:"pron", gender:null,
 phonetic:"my",
 note:"First-person plural pronoun.\nTakes plural verb forms: мы знаем (we know), мы говорим (we speak).\nNever capitalised unless it starts a sentence.",
 example:"A: Мы живём здесь.\nB: Да? Мы тоже живём рядом!",
 exampleSrc:"A: We live here.\nB: Really? We also live nearby!",
 funFact:"Мы has been мы in Slavic languages for over 1,500 years. It traces back to Proto-Indo-European *we-, the same root as English 'we' and German 'wir.' One of the most stable words in any language family."},

{type:"teach", trg:"быть", src:"to be", pos:"verb", gender:null,
 phonetic:"byt'",
 note:"INFINITIVE. In PRESENT tense: быть has NO form — the copula is INVISIBLE.\nя студент (I am a student). Мы дома (We are at home).\nPast: был (masc), была (fem), было (neut), были (pl).\nFuture: буду, будешь, будет, будем, будете, будут.",
 example:"A: Где вы были вчера?\nB: Мы были дома.",
 exampleSrc:"A: Where were you yesterday?\nB: We were at home.",
 funFact:"Russian is one of few languages where the present-tense copula is completely silent. In Church Slavonic 'есть' (is) was used — it survives in one phrase: 'У меня есть...' (I have...). Everywhere else, быть vanishes in the present."},

{type:"teach", trg:"иметь", src:"to have (formal / abstract)", pos:"verb", gender:null,
 phonetic:"imet'",
 note:"IMPERFECTIVE. Used for formal or abstract possession.\nFor physical objects, Russians prefer: у меня есть (I have at me).\nиметь appears in formal writing and set phrases: иметь право (to have the right), иметь значение (to matter).",
 example:"A: Можно иметь право знать?\nB: Да, можно.",
 exampleSrc:"A: Can one have the right to know?\nB: Yes, one can.",
 funFact:"Everyday Russian avoids иметь for ownership. 'У меня есть машина' (I have a car) sounds natural; 'Я имею машину' sounds bookish. But иметь dominates legal texts, contracts, and bureaucratic language — a pattern English shares with 'possess vs. have.'"},

{type:"teach", trg:"тысяча", src:"thousand", pos:"num", gender:"f",
 phonetic:"tys-ya-cha",
 note:"FEMININE noun used as a numeral.\nAfter тысяча: noun in genitive plural.\nодна тысяча = one thousand. Пять тысяч = five thousand.",
 example:"A: Сколько это стоит?\nB: Три тысячи рублей.",
 exampleSrc:"A: How much does it cost?\nB: Three thousand roubles.",
 funFact:"The word тысяча derives from Proto-Slavic *tysontja, related to Greek 'thysias' (sacrifice) — possibly from the custom of counting offerings. In modern Russia, тысяча is colloquially shortened to 'штука' (piece) in informal speech: 'пять штук' = five thousand roubles."},

{type:"teach", trg:"улица", src:"street", pos:"noun", gender:"f",
 phonetic:"u-li-tsa",
 note:"FEMININE. Standard word for any named street.\нули = street. улица Пушкина = Pushkin Street.\nContrast: проспект (avenue), переулок (lane), площадь (square).",
 example:"A: Как называется эта улица?\nB: Это улица Садовая.",
 exampleSrc:"A: What is this street called?\nB: This is Sadovaya Street.",
 funFact:"Russian street addresses put the house number AFTER the street name: улица Пушкина, дом 5 (Pushkin Street, house 5). The word улица appears in hundreds of Russian city names and was used in medieval Novgorod records from the 11th century."},

{type:"teach", trg:"отказываться", src:"to refuse / to decline (imperfective)", pos:"verb", gender:null,
 phonetic:"at-ka-ZY-vat'-sya",
 note:"IMPERFECTIVE reflexive. Perfective pair: отказаться.\нОтказываться от чего = to refuse something (from + genitive).\nUsed for habitual or ongoing refusal.",
 example:"A: Ты отказываешься?\nB: Да, я отказываюсь от этого.",
 exampleSrc:"A: Are you refusing?\nB: Yes, I am declining this.",
 funFact:"Отказываться is built from от- (away from) + казать (to show) + -ся (reflexive). Literally: 'to show oneself away.' The civic formula 'имею право отказаться' (I have the right to refuse) appears in Russian contract and labour law — linking this word to иметь."},

{type:"teach", trg:"советовать", src:"to advise / to recommend (imperfective)", pos:"verb", gender:null,
 phonetic:"sa-VYE-ta-vat'",
 note:"IMPERFECTIVE. Perfective pair: посоветовать.\нсоветовать кому + infinitive = to advise someone to do something.\нТакже: советоваться с кем = to consult / seek advice.",
 example:"A: Что ты советуешь?\nB: Я советую отдыхать.",
 exampleSrc:"A: What do you advise?\nB: I advise you to rest.",
 funFact:"Советовать shares its root with 'совет' (advice, council, Soviet). The USSR name — Советский Союз — literally means 'Union of Councils.' Every day Russians use советовать meaning simply 'to recommend,' carrying a thousand years of council history in one ordinary verb."},

{type:"tip", title:"быть in Present vs Other Tenses",
 text:"The copula ('to be') behaves differently across tenses:\n\nPRESENT — INVISIBLE:\nЯ студент. (I am a student. NOT: Я есть студент.)\nМы дома. (We are at home.)\n\nPAST — был/была/было/были:\nОн был дома. (He was at home.)\nМы были в магазине. (We were at the store.)\n\nFUTURE — буду/будешь/будет etc.:\nЯ буду дома. (I will be at home.)\nМы будем в школе. (We will be at school.)\n\nSPECIAL CASE — есть survives in one present phrase:\nУ меня есть... (I have... lit. By me there is...)\n\nRule: if you need 'to be' in present tense outside 'у меня есть', drop it entirely.",
 icon:"💡"},

{type:"mc", q:"How do you say 'We are at home' in Russian?",
 opts:["Мы есть дома","Мы быть дома","Мы дома","Мы будем дома"],
 ans:"Мы дома",
 hint:"Present-tense быть is invisible — no copula word appears at all."},

{type:"mc", q:"Which sentence uses иметь correctly?",
 opts:["Я имею книгу на столе","Вы имеете право отказаться","Он имеет кофе","Мы имеем дом здесь"],
 ans:"Вы имеете право отказаться",
 hint:"иметь suits formal or abstract possession — rights, significance, purpose. For physical objects, use у меня есть."},

{type:"fb", s:"Мы {1} дома весь день.",
 a:["были"],
 opts:["были","есть","будете","быть"],
 hint:"Past tense of быть, plural — the subject 'мы' requires the plural past form.",
 sSrc:"We were at home all day."},

{type:"fb", s:"Я живу на тихой {1} рядом со школой.",
 a:["улице"],
 opts:["улице","работе","школе","доме"],
 hint:"Feminine noun for a named road in a city — prepositional case here.",
 sSrc:"I live on a quiet street near the school."},

{type:"mc", q:"What does отказываться take in Russian?",
 opts:["Accusative case for the thing refused","Genitive with от for the thing refused","Dative case for the person refusing","Instrumental with с"],
 ans:"Genitive with от for the thing refused",
 hint:"Think of the prefix от- (away from). The preposition that pairs with 'away from' uses the second grammatical case."},

{type:"fb", s:"A: Что ты {1} сделать?\nB: Я советую отдыхать.",
 a:["советуешь"],
 opts:["советуешь","отказываешься","говоришь","знаешь"],
 hint:"The question asks what advice the person is giving — which verb fits 'advise / recommend'?",
 sSrc:"A: What do you advise doing?\nB: I advise resting."},

{type:"fb", s:"A: Сколько это стоит?\nB: Две {1} рублей.",
 a:["тысячи"],
 opts:["тысячи","тысяча","тысяч","тысячу"],
 hint:"After два/две/оба the noun takes genitive singular — тысяча becomes тысячи.",
 sSrc:"A: How much does it cost?\nB: Two thousand roubles."},

{type:"mc", q:"Which verb means 'to refuse or decline' something?",
 opts:["советовать","иметь","отказываться","записываться"],
 ans:"отказываться",
 hint:"Think: you show yourself away from something. Imperfective, reflexive with -ся."},

{type:"match", pairs:[
 {trg:"мы", src:"we"},
 {trg:"быть", src:"to be"},
 {trg:"иметь", src:"to have (formal)"},
 {trg:"тысяча", src:"thousand"},
 {trg:"улица", src:"street"},
 {trg:"отказываться", src:"to refuse"},
 {trg:"советовать", src:"to advise"}
]}

]}

]};
export default UNIT_09;
