// Batch 6 – Unit 13 (A2.1 Experience): At the Hospital
const BATCH6_L1 = {
  id:"jav2_u13l_b6_1", title:"びょういんで", icon:"🏥", xp:15, board:true,
  steps:[
    {type:"intro", title:"びょういんで",
     desc:"Learn essential medical vocabulary for visiting a hospital or clinic in Japan. Being able to describe symptoms and understand medical staff is critical for anyone living in or visiting Japan.",
     goals:["Describe common symptoms and ailments","Navigate hospital registration and procedures","Understand basic medical instructions"]},

    {type:"teach", trg:"びょういん", src:"hospital", pos:"noun", gender:null,
     note:"Kanji: 病院. びょういんにいく = to go to the hospital.\nクリニック = smaller clinic.",
     example:"A: きぶんがわるいのでびょういんにいきます。\nB: おだいじに。\nA: どこがおすすめですか？\nB: 京都(きょうと)がおすすめです。",
     exampleSrc:"A: I feel unwell so I am going to the hospital.\nB: Take care.\nA: Where do you recommend?\nB: I recommend Kyoto.",
     funFact:"Japanese hospitals operate differently from Western ones. You can walk in without an appointment to most clinics. Large hospitals (だいがくびょういん) require a referral letter (しょうかいじょう). The universal health insurance system (こくみんけんこうほけん) covers 70% of costs."},

    {type:"teach", trg:"くすり", src:"medicine / medication", pos:"noun", gender:null,
     note:"Kanji: 薬. くすりをのむ = to take medicine.\nくすりや = pharmacy.",
     example:"A: くすりをいちにちさんかいのんでください。\nB: しょくごですか？\nA: 何(なに)が一番(いちばん)良(よ)かったですか？\nB: 食(た)べ物(もの)が一番(いちばん)おいしかったです。",
     exampleSrc:"A: Please take the medicine three times a day.\nB: After meals?\nA: What was the best part?\nB: The food was the most delicious.",
     funFact:"Japan's pharmacy culture is unique. Prescription drugs (しょほうやく) are dispensed at separate pharmacies (やっきょく) near hospitals. ドラッグストア (drugstores) sell over-the-counter medicine. Japanese cold medicine (かぜぐすり) comes in powder, tablet, and liquid form."},

    {type:"teach", trg:"ねつ", src:"fever / temperature", pos:"noun", gender:null,
     note:"Kanji: 熱. ねつがある = to have a fever.\nたいおんけい = thermometer.",
     example:"A: ねつはなんどですか？\nB: さんじゅうはちどごぶです。\nA: よく行(い)きますか？\nB: 月(つき)に一回(いっかい)ぐらい行(い)きます。",
     exampleSrc:"A: What is your temperature?\nB: 38.5 degrees.\nA: Do you go often?\nB: I go about once a month.",
     funFact:"Japan uses Celsius. Normal body temperature (へいねつ) is about 36.5 degrees. Since COVID-19, temperature checks (けんおん) became standard at building entrances. Japanese thermometers are often placed under the armpit (わきのした), not in the mouth."},

    {type:"teach", trg:"いたい", src:"painful / hurts", pos:"adj", gender:null,
     note:"I-adjective. あたまがいたい = I have a headache.\nおなかがいたい = stomachache.",
     example:"A: どこがいたいですか？\nB: おなかがいたいです。\nA: 誰(だれ)と行(い)きましたか？\nB: 友達(ともだち)と一緒(いっしょ)に行(い)きました。",
     exampleSrc:"A: Where does it hurt?\nB: My stomach hurts.\nA: Who did you go with?\nB: I went with a friend.",
     funFact:"いたい is often the first word doctors hear. The body part + がいたい pattern is simple but vital: あたまがいたい (headache), はがいたい (toothache), のどがいたい (sore throat), こしがいたい (backache). Children say いたいいたい (ow ow!) when hurt."},

    {type:"teach", trg:"せき", src:"cough", pos:"noun", gender:null,
     note:"Kanji: 咳. せきがでる = to have a cough.\nせきどめ = cough suppressant.",
     example:"A: せきがとまりません。\nB: いつからですか？\nA: それは大変(たいへん)でしたね。\nB: はい、でもいい勉強(べんきょう)になりました。",
     exampleSrc:"A: My cough won't stop.\nB: Since when?\nA: That must have been tough.\nB: Yes, but it was a good learning experience.",
     funFact:"Wearing masks (マスク) for coughs was normal in Japan long before COVID-19. It is considered polite to prevent spreading germs. Japanese pharmacies stock many types of のどあめ (throat lozenges) and せきどめ (cough medicine)."},

    {type:"mc", q:"おなかがいたい means:", opts:["My stomach hurts","I have a fever","I have a cough","My head hurts"], ans:"My stomach hurts",
     hint:"おなか means s.../belly, and いたい means it h...."},

    {type:"teach", trg:"けが", src:"injury / wound", pos:"noun", gender:null,
     note:"けがをする = to get injured. おおきいけが = serious injury.\nKanji: 怪我.",
     example:"A: けがをしましたか？\nB: はい、てをきってしまいました。\nA: 本当(ほんとう)ですか？すごいですね。\nB: ありがとうございます。頑張(がんば)りました。",
     exampleSrc:"A: Did you get injured?\nB: Yes, I accidentally cut my hand.\nA: Really? That is amazing.\nB: Thank you. I worked hard.",
     funFact:"怪我 uses unusual kanji: 怪 (suspicious/mysterious) and 我 (self). An injury is literally a 'mysterious self' event. In sports, けがのぼうし (injury prevention) is a major focus. Japanese first aid (おうきゅうてあて) is taught in schools."},

    {type:"teach", trg:"はく", src:"to vomit / to throw up", pos:"verb", gender:null,
     note:"Group 1 verb. はきけがする = to feel nauseous.\nKanji: 吐く. Also means to exhale (いきをはく).",
     example:"A: きのうのよるにはきました。\nB: いまはだいじょうぶですか？\nA: 私(わたし)も興味(きょうみ)があります。\nB: じゃあ、今度(こんど)一緒(いっしょ)にどうですか？",
     exampleSrc:"A: I vomited last night.\nB: Are you alright now?\nA: I am also interested.\nB: Then, how about doing it together next time?",
     funFact:"はく has two medical meanings: to vomit (吐く) and to exhale. Doctors ask はきましたか (did you vomit?) when diagnosing stomach issues. はきけ (nausea) is a common complaint. The kanji 吐 shows a mouth (口) expelling something."},

    {type:"teach", trg:"アレルギー", src:"allergy", pos:"noun", gender:null,
     note:"From German/English. かふんアレルギー = pollen allergy (hay fever).\nアレルギーがある = to have an allergy.",
     example:"A: なにかアレルギーはありますか？\nB: はい、かふんアレルギーがあります。\nA: どんな感(かん)じでしたか？\nB: 想像(そうぞう)していたよりずっと良(よ)かったです。",
     exampleSrc:"A: Do you have any allergies?\nB: Yes, I have a pollen allergy.\nA: What was it like?\nB: It was much better than I imagined.",
     funFact:"Hay fever (かふんしょう, 花粉症) affects about 40% of Japanese people. Every spring, cedar pollen (すぎかふん) causes massive allergy season. TV weather forecasts include pollen counts (かふんよほう). Allergy-season face masks and eye drops are a billion-yen industry."},

    {type:"teach", trg:"ほけんしょう", src:"health insurance card", pos:"noun", gender:null,
     note:"Kanji: 保険証. Required at every hospital visit.\nこくみんけんこうほけん = national health insurance.",
     example:"A: ほけんしょうをおねがいします。\nB: はい、こちらです。\nA: 何(なに)を食(た)べましたか？\nB: 地元(じもと)の名物(めいぶつ)を食(た)べました。",
     exampleSrc:"A: Your insurance card, please.\nB: Here it is.\nA: What did you eat?\nB: I ate the local specialty.",
     funFact:"Japan's universal healthcare system covers all residents. Your ほけんしょう is presented at every medical visit. The system covers 70% of costs (30% self-pay). Since 2024, Japan is transitioning to マイナンバーカード (My Number card) as a combined insurance and ID card."},

    {type:"teach", trg:"しんさつ", src:"medical examination / consultation", pos:"noun", gender:null,
     note:"Kanji: 診察. しんさつをうける = to receive an examination.\nしんさつしつ = examination room.",
     example:"A: しんさつはなんじからですか？\nB: ごぜんくじからです。\nA: 楽(たの)しみですね。\nB: はい、今(いま)からわくわくしています。",
     exampleSrc:"A: From what time are consultations?\nB: From 9 AM.\nA: That is exciting.\nB: Yes, I am already excited.",
     funFact:"Japanese medical consultations are often brief (3-5 minutes per patient). Doctors rely heavily on test results (けんさけっか). The phrase さんぷんしんりょう (3-minute consultation) is a common complaint about the pace. However, wait times can be very long at popular clinics."},

    {type:"fb", s:"どこが{1}ですか？\n(Where does it hurt?)", a:"いたい", opts:["いたい","ねつ","せき","くすり"], sSrc:"Where does it hurt?",
     hint:"This i-adjective describes pain or soreness."},

    {type:"teach", trg:"おだいじに", src:"take care / get well soon", pos:"intj", gender:null,
     note:"Said to someone who is sick or leaving the doctor.\nLiterally: please treat yourself importantly.",
     example:"A: かぜをひいてしまいました。\nB: おだいじに。ゆっくりやすんでくださいね。\nA: いい思(おも)い出(で)ですね。\nB: はい、一生(いっしょう)忘(わす)れません。",
     exampleSrc:"A: I caught a cold.\nB: Take care. Please rest well.\nA: That is a nice memory.\nB: Yes, I will never forget it.",
     funFact:"おだいじに (お大事に) is universally said to sick people. Pharmacy staff, doctors, nurses, and friends all use it. The full formal version is おだいじになさってください. It literally means 'please treat your body as something important.' A simple but deeply caring expression."},

    {type:"mc", q:"ほけんしょう is:", opts:["A health insurance card","A prescription","A medical test","A hospital bill"], ans:"A health insurance card",
     hint:"This document is presented at the reception desk of every Japanese medical facility."},

    {type:"match", pairs:[
      {trg:"ねつ", src:"fever"},
      {trg:"せき", src:"cough"},
      {trg:"けが", src:"injury"},
      {trg:"くすり", src:"medicine"},
      {trg:"アレルギー", src:"allergy"}
    ]},

    {type:"fb", s:"かぜをひいてしまいました。{1}。\n(I caught a cold. Take care.)", a:"おだいじに", opts:["おだいじに","おめでとう","おつかれさま","おやすみ"], sSrc:"I caught a cold. Take care.",
     hint:"The caring expression said to someone who is unwell."},

    {type:"mc", q:"かふんアレルギー is:", opts:["Pollen allergy (hay fever)","Food allergy","Drug allergy","Pet allergy"], ans:"Pollen allergy (hay fever)",
     hint:"This seasonal a... is extremely common in Japan during spring."}
  ]
};
export default BATCH6_L1;
