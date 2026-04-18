// Batch 6 – Unit 13 (A2.1 Experience): At the Hospital
const BATCH6_L1 = {
  id:"jav2_u13l_b6_1", title:"病院(びょういん)で", icon:"🏥", xp:15, board:true,
  steps:[
    {type:"intro", title:"病院(びょういん)で",
     desc:"Learn essential medical vocabulary for visiting a hospital or clinic in Japan. Being able to describe symptoms and understand medical staff is critical for anyone living in or visiting Japan.",
     goals:["Describe common symptoms and ailments","Navigate hospital registration and procedures","Understand basic medical instructions"]},

    {type:"teach", trg:"病院(びょういん)", src:"hospital", pos:"noun", gender:null,
     note:"Kanji: 病院. 病院(びょういん)に行(い)く = to go to the hospital.\nクリニック = smaller clinic.",
     example:"A: 気分(きぶん)が悪(わる)いので病院(びょういん)に行(い)きます。\nB: お大事(だいじ)に。",
     exampleSrc:"A: I feel unwell so I am going to the hospital.\nB: Take care.",
     funFact:"Japanese hospitals operate differently from Western ones. You can walk in without an appointment to most clinics. Large hospitals (大学病院(だいがくびょういん)) require a referral letter (紹介状(しょうかいじょう)). The universal health insurance system (国民健康保険(こくみんけんこうほけん)) covers 70% of costs."},

    {type:"teach", trg:"薬(くすり)", src:"medicine / medication", pos:"noun", gender:null,
     note:"Kanji: 薬. 薬(くすり)を飲(の)む = to take medicine.\n薬屋(くすりや) = pharmacy.",
     example:"A: 薬(くすり)を一日(いちにち)三回(さんかい)飲(の)んでください。\nB: 食後(しょくご)ですか？",
     exampleSrc:"A: Please take the medicine three times a day.\nB: After meals?",
     funFact:"Japan's pharmacy culture is unique. Prescription drugs (処方薬(しょほうやく)) are dispensed at separate pharmacies (薬局(やっきょく)) near hospitals. ドラッグストア (drugstores) sell over-the-counter medicine. Japanese cold medicine (風邪薬(かぜぐすり)) comes in powder, tablet, and liquid form."},

    {type:"teach", trg:"熱(ねつ)", src:"fever / temperature", pos:"noun", gender:null,
     note:"Kanji: 熱. 熱(ねつ)がある = to have a fever.\n体温計(たいおんけい) = thermometer.",
     example:"A: 熱(ねつ)は何度(なんど)ですか？\nB: 38度(さんじゅうはちど)5分(ごぶ)です。",
     exampleSrc:"A: What is your temperature?\nB: 38.5 degrees.",
     funFact:"Japan uses Celsius. Normal body temperature (平熱(へいねつ)) is about 36.5 degrees. Since COVID-19, temperature checks (検温(けんおん)) became standard at building entrances. Japanese thermometers are often placed under the armpit (脇(わき)の下(した)), not in the mouth."},

    {type:"teach", trg:"痛(いた)い", src:"painful / hurts", pos:"adj", gender:null,
     note:"I-adjective. 頭(あたま)が痛(いた)い = I have a headache.\nお腹(なか)が痛(いた)い = stomachache.",
     example:"A: どこが痛(いた)いですか？\nB: お腹(なか)が痛(いた)いです。",
     exampleSrc:"A: Where does it hurt?\nB: My stomach hurts.",
     funFact:"痛(いた)い is often the first word doctors hear. The body part + が痛(いた)い pattern is simple but vital: 頭(あたま)が痛(いた)い (headache), 歯(は)が痛(いた)い (toothache), 喉(のど)が痛(いた)い (sore throat), 腰(こし)が痛(いた)い (backache). Children say 痛(いた)い痛(いた)い (ow ow!) when hurt."},

    {type:"teach", trg:"咳(せき)", src:"cough", pos:"noun", gender:null,
     note:"Kanji: 咳. 咳(せき)が出(で)る = to have a cough.\n咳止(せきど)め = cough suppressant.",
     example:"A: 咳(せき)が止(と)まりません。\nB: いつからですか？",
     exampleSrc:"A: My cough won't stop.\nB: Since when?",
     funFact:"Wearing masks (マスク) for coughs was normal in Japan long before COVID-19. It is considered polite to prevent spreading germs. Japanese pharmacies stock many types of 喉(のど)あめ (throat lozenges) and 咳止(せきど)め (cough medicine)."},

    {type:"mc", q:"お腹(なか)が痛(いた)い means:", opts:["My stomach hurts","I have a fever","I have a cough","My head hurts"], ans:"My stomach hurts",
     hint:"お腹(なか) means s.../belly, and 痛(いた)い means it h...."},

    {type:"teach", trg:"怪我(けが)", src:"injury / wound", pos:"noun", gender:null,
     note:"怪我(けが)をする = to get injured. 大(おお)きい怪我(けが) = serious injury.\nKanji: 怪我.",
     example:"A: 怪我(けが)をしましたか？\nB: はい、手(て)を切(き)ってしまいました。",
     exampleSrc:"A: Did you get injured?\nB: Yes, I accidentally cut my hand.",
     funFact:"怪我(けが) uses unusual kanji: 怪 (suspicious/mysterious) and 我 (self). An injury is literally a 'mysterious self' event. In sports, 怪我(けが)の防止(ぼうし) (injury prevention) is a major focus. Japanese first aid (応急手当(おうきゅうてあ)て) is taught in schools."},

    {type:"teach", trg:"吐(は)く", src:"to vomit / to throw up", pos:"verb", gender:null,
     note:"Group 1 verb. 吐(は)き気(け)がする = to feel nauseous.\nKanji: 吐く. Also means to exhale (息(いき)を吐(は)く).",
     example:"A: 昨日(きのう)の夜(よる)に吐(は)きました。\nB: 今(いま)は大丈夫(だいじょうぶ)ですか？",
     exampleSrc:"A: I vomited last night.\nB: Are you alright now?",
     funFact:"吐(は)く has two medical meanings: to vomit (吐(は)く) and to exhale. Doctors ask 吐(は)きましたか (did you vomit?) when diagnosing stomach issues. 吐(は)き気(け) (nausea) is a common complaint. The kanji 吐 shows a mouth (口) expelling something."},

    {type:"teach", trg:"アレルギー", src:"allergy", pos:"noun", gender:null,
     note:"From German/English. 花粉(かふん)アレルギー = pollen allergy (hay fever).\nアレルギーがある = to have an allergy.",
     example:"A: なにかアレルギーはありますか？\nB: はい、花粉(かふん)アレルギーがあります。",
     exampleSrc:"A: Do you have any allergies?\nB: Yes, I have a pollen allergy.",
     funFact:"花粉症(かふんしょう) affects about 40% of Japanese people. Every spring, cedar pollen (杉(すぎ)花粉(かふん)) causes massive allergy season. TV weather forecasts include pollen counts (花粉予報(かふんよほう)). Allergy-season face masks and eye drops are a billion-yen industry."},

    {type:"teach", trg:"保険証(ほけんしょう)", src:"health insurance card", pos:"noun", gender:null,
     note:"Kanji: 保険証. Required at every hospital visit.\n国民健康保険(こくみんけんこうほけん) = national health insurance.",
     example:"A: 保険証(ほけんしょう)をお願(ねが)いします。\nB: はい、こちらです。",
     exampleSrc:"A: Your insurance card, please.\nB: Here it is.",
     funFact:"Japan's universal healthcare system covers all residents. Your 保険証(ほけんしょう) is presented at every medical visit. The system covers 70% of costs (30% self-pay). Since 2024, Japan is transitioning to マイナンバーカード (My Number card) as a combined insurance and ID card."},

    {type:"teach", trg:"診察(しんさつ)", src:"medical examination / consultation", pos:"noun", gender:null,
     note:"Kanji: 診察. 診察(しんさつ)を受(う)ける = to receive an examination.\n診察室(しんさつしつ) = examination room.",
     example:"A: 診察(しんさつ)は何時(なんじ)からですか？\nB: 午前(ごぜん)9時(くじ)からです。",
     exampleSrc:"A: From what time are consultations?\nB: From 9 AM.",
     funFact:"Japanese medical consultations are often brief (3-5 minutes per patient). Doctors rely heavily on test results (検査(けんさ)結果(けっか)). The phrase 三分診療(さんぷんしんりょう) (3-minute consultation) is a common complaint about the pace. However, wait times can be very long at popular clinics."},

    {type:"fb", s:"どこが{1}ですか？\n(Where does it hurt?)", a:"痛(いた)い", opts:["痛(いた)い","熱(ねつ)","咳(せき)","薬(くすり)"], sSrc:"Where does it hurt?",
     hint:"This i-adjective describes pain or soreness."},

    {type:"teach", trg:"お大事(だいじ)に", src:"take care / get well soon", pos:"intj", gender:null,
     note:"Said to someone who is sick or leaving the doctor.\nLiterally: please treat yourself importantly.",
     example:"A: 風邪(かぜ)をひいてしまいました。\nB: お大事(だいじ)に。ゆっくり休(やす)んでくださいね。",
     exampleSrc:"A: I caught a cold.\nB: Take care. Please rest well.",
     funFact:"お大事(だいじ)に (お大事に) is universally said to sick people. Pharmacy staff, doctors, nurses, and friends all use it. The full formal version is お大事(だいじ)になさってください. It literally means 'please treat your body as something important.' A simple but deeply caring expression."},

    {type:"mc", q:"保険証(ほけんしょう) is:", opts:["A health insurance card","A prescription","A medical test","A hospital bill"], ans:"A health insurance card",
     hint:"This document is presented at the reception desk of every Japanese medical facility."},

    {type:"match", pairs:[
      {trg:"熱(ねつ)", src:"fever"},
      {trg:"咳(せき)", src:"cough"},
      {trg:"怪我(けが)", src:"injury"},
      {trg:"薬(くすり)", src:"medicine"},
      {trg:"アレルギー", src:"allergy"}
    ]},

    {type:"fb", s:"風邪(かぜ)をひいてしまいました。{1}。\n(I caught a cold. Take care.)", a:"お大事(だいじ)に", opts:["お大事(だいじ)に","おめでとう","お疲(つか)れさま","おやすみ"], sSrc:"I caught a cold. Take care.",
     hint:"The caring expression said to someone who is unwell."},

    {type:"mc", q:"花粉(かふん)アレルギー is:", opts:["Pollen allergy (hay fever)","Food allergy","Drug allergy","Pet allergy"], ans:"Pollen allergy (hay fever)",
     hint:"This seasonal a... is extremely common in Japan during spring."}
  ,{type:"match",pairs:[{trg:"病院(びょういん)",src:"hospital"},{trg:"吐(は)く",src:"to vomit / to throw up"},{trg:"保険証(ほけんしょう)",src:"health insurance card"},{trg:"診察(しんさつ)",src:"medical examination / consultation"}]}]
};
export default BATCH6_L1;
