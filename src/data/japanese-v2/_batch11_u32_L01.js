// Batch 11 – Unit 32 (B2.4 Medicine): Health & Medical Vocabulary
const BATCH11_L1 = {
  id:"jav2_u32l_b11_1", title:"けんこうといりょう", icon:"💊", xp:15, board:true,
  steps:[
    {type:"intro", title:"けんこうといりょう",
     desc:"Learn medical and health vocabulary for navigating healthcare in Japan and discussing health topics. Essential for daily life and JLPT N2.",
     goals:["Describe symptoms and health conditions","Navigate hospital and pharmacy vocabulary","Discuss health and wellness topics"]},

    {type:"teach", trg:"しょうじょう", src:"symptom", pos:"noun", gender:null,
     note:"しょうじょうをせつめいする = describe symptoms.\nどんなしょうじょうですか = what symptoms?",
     example:"A: どんなしょうじょうがありますか？\nB: あたまがいたくて、ねつがあります。",
     exampleSrc:"A: What symptoms do you have?\nB: I have a headache and fever.",
     funFact:"At Japanese hospitals, you fill out a もんしんひょう (medical questionnaire) listing しょうじょう before seeing the doctor. Common しょうじょう vocabulary: ねつ (fever), せき (cough), はきけ (nausea), めまい (dizziness). Japanese patients tend to describe しょうじょう very precisely, which doctors appreciate."},

    {type:"teach", trg:"しんさつ", src:"medical examination", pos:"noun", gender:null,
     note:"しんさつする = to examine (a patient).\nしんさつしつ = examination room.",
     example:"A: しんさつのよやくをおねがいします。\nB: あしたのごぜんじゅうじはいかがですか？",
     exampleSrc:"A: I'd like to make an appointment for an examination.\nB: How about 10 AM tomorrow?",
     funFact:"Japanese しんさつ typically begins at a reception desk where you present your けんこうほけんしょう (health insurance card). Wait times can be long at popular clinics. Japan has a universal healthcare system covering 70% of medical costs. The remaining 30% is the patient's copay."},

    {type:"teach", trg:"しょほうせん", src:"prescription", pos:"noun", gender:null,
     note:"しょほうせんをだす = issue a prescription.\nしょほうせんやっきょく = prescription pharmacy.",
     example:"A: しょほうせんをだしますので、やっきょくでくすりをもらってください。\nB: わかりました。ありがとうございます。",
     exampleSrc:"A: I will issue a prescription, so please get medicine at the pharmacy.\nB: Understood. Thank you.",
     funFact:"In Japan, しょほうせん (処方箋) are taken to external pharmacies (院外薬局), not filled inside the hospital. This separation was implemented to prevent overprescription. Japanese pharmacists (薬剤師) explain each medication's usage, side effects, and interactions in detail, often providing printed おくすりてちょう (medication notebook)."},

    {type:"teach", trg:"くすり", src:"medicine / drug", pos:"noun", gender:null,
     note:"くすりをのむ = take medicine.\nくすりや = pharmacy/drugstore.",
     example:"A: このくすりはいちにちさんかいのんでください。\nB: しょくごにのめばいいですか？",
     exampleSrc:"A: Please take this medicine three times a day.\nB: Should I take it after meals?",
     funFact:"Japanese くすり culture distinguishes between しょほうやく (prescription medicine) and いちはんやく (over-the-counter). Drugstores like マツモトキヨシ and ウエルシア sell OTC medicines alongside cosmetics and snacks. Japanese cold medicine (風邪薬) comes in powder form (顆粒) more often than in Western countries."},

    {type:"teach", trg:"けんこうしんだん", src:"health checkup", pos:"noun", gender:null,
     note:"Annual health examination. Required for employees.\nにんげんドック = comprehensive health screening.",
     example:"A: ことしのけんこうしんだんはいつですか？\nB: らいげつのよていです。",
     exampleSrc:"A: When is this year's health checkup?\nB: It is scheduled for next month.",
     funFact:"Japanese companies are legally required to provide annual けんこうしんだん for employees. にんげんドック (human dock, from 'dry dock' for ships) is a comprehensive optional screening. Japan's preventive healthcare culture and regular checkups contribute to its high life expectancy (84+ years), the world's longest."},

    {type:"teach", trg:"めんえき", src:"immunity / immune system", pos:"noun", gender:null,
     note:"めんえきりょく = immune strength.\nめんえきをつける = build immunity.",
     example:"A: めんえきりょくをたかめるにはどうすればいいですか？\nB: すいみんとえいようとうんどうがだいじです。",
     exampleSrc:"A: How can I boost my immunity?\nB: Sleep, nutrition, and exercise are important.",
     funFact:"めんえき (免疫) gained enormous public awareness during the pandemic. Japanese health culture emphasizes めんえきりょくアップ (boosting immune strength) through diet, exercise, and sleep. Foods like ヨーグルト, なっとう, and あまざけ are marketed as めんえきりょく boosters, a major category in Japanese functional food marketing."},

    {type:"teach", trg:"よぼう", src:"prevention", pos:"noun", gender:null,
     note:"よぼうする = to prevent.\nよぼうせっしゅ = vaccination.",
     example:"A: びょうきのよぼうがいちばんだいじです。\nB: そうですね。よぼうせっしゅもうけました。",
     exampleSrc:"A: Prevention of illness is most important.\nB: That's right. I also got vaccinated.",
     funFact:"Japanese healthcare philosophy emphasizes よぼう (prevention) over treatment. よぼういがく (preventive medicine) is a major field. Seasonal よぼうせっしゅ (vaccinations), annual checkups, and public health campaigns are well-organized. Japan's masking culture predates the pandemic, originally for かぜよぼう (cold prevention)."},

    {type:"teach", trg:"アレルギー", src:"allergy", pos:"noun", gender:null,
     note:"しょくもつアレルギー = food allergy.\nかふんしょう = hay fever (pollen allergy).",
     example:"A: なにかアレルギーはありますか？\nB: はい、えびアレルギーがあります。",
     exampleSrc:"A: Do you have any allergies?\nB: Yes, I have a shrimp allergy.",
     funFact:"かふんしょう (花粉症, pollen allergy/hay fever) affects roughly 40% of Japanese people, making it a national health issue. スギかふん (cedar pollen) is the main cause, peaking in February-April. Masks, medication, and indoor air purifiers are essential spring purchases. Some blame postwar cedar reforestation policies."},

    {type:"teach", trg:"ストレス", src:"stress", pos:"noun", gender:null,
     note:"ストレスがたまる = stress accumulates.\nストレスかいしょう = stress relief.",
     example:"A: さいきんストレスがたまっています。\nB: たまにはゆっくりやすんでください。",
     exampleSrc:"A: Stress has been building up recently.\nB: Please take it easy sometimes.",
     funFact:"ストレスしゃかい (stress society) is a recognized social phenomenon in Japan. Companies now legally require ストレスチェック (stress checks) for employees. Japanese stress relief methods include おんせん (hot springs), しんりんよく (forest bathing), and カラオケ. Mental health awareness (メンタルヘルス) is slowly growing but still stigmatized."},

    {type:"teach", trg:"たいちょう", src:"physical condition", pos:"noun", gender:null,
     note:"たいちょうがわるい = feeling unwell.\nたいちょうかんり = health management.",
     example:"A: たいちょうはいかがですか？\nB: おかげさまで、げんきです。",
     exampleSrc:"A: How is your physical condition?\nB: Thanks to you, I am well.",
     funFact:"たいちょうかんり (体調管理) is considered a personal responsibility in Japanese work culture. Coming to work sick (むりして出勤) was traditional but attitudes are changing. たいちょうがわるい (feeling unwell) is an acceptable reason to decline social invitations without giving details, respecting privacy."},

    {type:"teach", trg:"にゅういん", src:"hospitalization", pos:"noun", gender:null,
     note:"にゅういんする = to be hospitalized.\nたいいんする = to be discharged.",
     example:"A: にゅういんはなんにちくらいですか？\nB: いっしゅうかんのよていです。",
     exampleSrc:"A: How many days will the hospitalization be?\nB: About one week is planned.",
     funFact:"Japanese にゅういん (入院) typically involves longer stays than in Western countries. Patients wear パジャマ (hospital pajamas) and often bring personal items. Family members are expected to visit and sometimes help with meals. Japan's hospital food is notably varied and nutritious compared to many countries."},

    // Quiz steps
    {type:"mc", q:"にほんのけんこうほけんはいりょうひのなんパーセントをカバーしますか？",
     opts:["70%","50%","100%","30%"],
     ans:"70%",
     hint:"Japan's universal healthcare system covers most of the cost, with the patient paying the remaining portion as a copay."},

    {type:"fb", s:"どんな{1}がありますか？",
     a:["しょうじょう"],
     opts:["しょうじょう","くすり","しんさつ","よぼう"],
     hint:"The doctor is asking what medical signs or complaints you are experiencing. This means 'symptoms.'",
     sSrc:"What symptoms do you have?"},

    {type:"match", pairs:[
      {trg:"しんさつ", src:"medical examination"},
      {trg:"しょほうせん", src:"prescription"},
      {trg:"よぼう", src:"prevention"},
      {trg:"にゅういん", src:"hospitalization"}
    ]},

    {type:"mc", q:"にほんでかふんしょうにくるしんでいるひとはどのくらいですか？",
     opts:["About 40%","About 10%","About 5%","About 80%"],
     ans:"About 40%",
     hint:"This pollen allergy is so widespread it is considered a national health issue, especially during spring."},

    {type:"fb", s:"めんえきりょくをたかめるには{1}とえいようとうんどうがだいじです。",
     a:["すいみん"],
     opts:["すいみん","ストレス","アレルギー","くすり"],
     hint:"Three pillars of immunity: rest, nutrition, and exercise. The missing word is about getting enough rest at night.",
     sSrc:"Sleep, nutrition, and exercise are important for boosting immunity."},

    {type:"mc", q:"にほんのかいしゃにぎむづけられているのはなんですか？",
     opts:["ストレスチェック for employees","Free gym membership","Mandatory vacation","Daily exercise time"],
     ans:"ストレスチェック for employees",
     hint:"A legally required assessment to monitor employee mental health and prevent workplace stress disorders."}
  ]
};
export default BATCH11_L1;
