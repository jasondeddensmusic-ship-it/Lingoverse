// Batch 11 – Unit 32 (B2.4 Medicine): Health & Medical Vocabulary
const BATCH11_L1 = {
  id:"jav2_u32l_b11_1", title:"けんこうといりょう", icon:"💊", xp:15, board:true,
  steps:[
    {type:"intro", title:"けんこうといりょう",
     desc:"Learn medical and health vocabulary for navigating healthcare in Japan and discussing health topics. Essential for daily life and JLPT N2.",
     goals:["Describe symptoms and health conditions","Navigate hospital and pharmacy vocabulary","Discuss health and wellness topics"]},

    {type:"teach", trg:"しょうじょう", src:"symptom", pos:"noun", gender:null,
     note:"しょうじょうをせつめいする = describe symptoms.\nどんなしょうじょうですか = what symptoms?",
     example:"A: どんなしょうじょうがありますか？\nB: あたまがいたくて、ねつがあります。\nA: 最近(さいきん)の動向(どうこう)はいかがですか？\nB: 全体的(ぜんたいてき)には好調(こうちょう)ですが、一部(いちぶ)課題(かだい)もあります。\nA: どのような課題(かだい)がありますか？\nB: 人材(じんざい)の確保(かくほ)が最(もっと)も大(おお)きな課題(かだい)です。",
     exampleSrc:"A: What symptoms do you have?\nB: I have a headache and fever.\nA: How are the recent trends?\nB: Overall things are going well, but there are some issues.\nA: What kinds of issues are there?\nB: Securing human resources is the biggest challenge.",
     funFact:"At Japanese hospitals, you fill out a もんしんひょう (medical questionnaire) listing しょうじょう before seeing the doctor. Common しょうじょう vocabulary: ねつ (fever), せき (cough), はきけ (nausea), めまい (dizziness). Japanese patients tend to describe しょうじょう very precisely, which doctors appreciate."},

    {type:"teach", trg:"しんさつ", src:"medical examination", pos:"noun", gender:null,
     note:"しんさつする = to examine (a patient).\nしんさつしつ = examination room.",
     example:"A: しんさつのよやくをおねがいします。\nB: あしたのごぜんじゅうじはいかがですか？\nA: それは興味深(きょうみぶか)いですね。\nB: ええ、日本(にほん)ならではの特徴(とくちょう)だと思(おも)います。\nA: 海外(かいがい)ではどうなのでしょうか？\nB: 国(くに)によって異(こと)なりますが、共通(きょうつう)する部分(ぶぶん)もあります。",
     exampleSrc:"A: I'd like to make an appointment for an examination.\nB: How about 10 AM tomorrow?\nA: That is interesting.\nB: Yes, I think it is a characteristic unique to Japan.\nA: I wonder how it is overseas?\nB: It differs by country, but there are also common aspects.",
     funFact:"Japanese しんさつ typically begins at a reception desk where you present your けんこうほけんしょう (health insurance card). Wait times can be long at popular clinics. Japan has a universal healthcare system covering 70% of medical costs. The remaining 30% is the patient's copay."},

    {type:"teach", trg:"しょほうせん", src:"prescription", pos:"noun", gender:null,
     note:"しょほうせんをだす = issue a prescription.\nしょほうせんやっきょく = prescription pharmacy.",
     example:"A: しょほうせんをだしますので、やっきょくでくすりをもらってください。\nB: わかりました。ありがとうございます。\nA: その経験(けいけん)から何(なに)を学(まな)びましたか？\nB: 事前(じぜん)の準備(じゅんび)がいかに重要(じゅうよう)かを学(まな)びました。\nA: 具体的(ぐたいてき)にどんな準備(じゅんび)をすべきですか？\nB: まず情報収集(じょうほうしゅうしゅう)をして、それから計画(けいかく)を練(ね)ることが大事(だいじ)です。",
     exampleSrc:"A: I will issue a prescription, so please get medicine at the pharmacy.\nB: Understood. Thank you.\nA: What did you learn from that experience?\nB: I learned how important advance preparation is.\nA: What kind of preparation should be done specifically?\nB: First, gather information, then it is important to develop a plan.",
     funFact:"In Japan, しょほうせん (処方箋) are taken to external pharmacies (院外薬局), not filled inside the hospital. This separation was implemented to prevent overprescription. Japanese pharmacists (薬剤師) explain each medication's usage, side effects, and interactions in detail, often providing printed おくすりてちょう (medication notebook)."},

    {type:"teach", trg:"くすり", src:"medicine / drug", pos:"noun", gender:null,
     note:"くすりをのむ = take medicine.\nくすりや = pharmacy/drugstore.",
     example:"A: このくすりはいちにちさんかいのんでください。\nB: しょくごにのめばいいですか？\nA: 今後(こんご)の展望(てんぼう)についてお聞(き)かせください。\nB: 今後(こんご)はさらに国際化(こくさいか)が進(すす)むと思(おも)います。\nA: それに対(たい)してどのような対策(たいさく)が必要(ひつよう)ですか？\nB: 語学力(ごがくりょく)の向上(こうじょう)と異文化理解(いぶんかりかい)が不可欠(ふかけつ)です。",
     exampleSrc:"A: Please take this medicine three times a day.\nB: Should I take it after meals?\nA: Please tell me about future prospects.\nB: I think internationalization will progress further going forward.\nA: What measures are needed for that?\nB: Improving language skills and cross-cultural understanding are essential.",
     funFact:"Japanese くすり culture distinguishes between しょほうやく (prescription medicine) and いちはんやく (over-the-counter). Drugstores like マツモトキヨシ and ウエルシア sell OTC medicines alongside cosmetics and snacks. Japanese cold medicine (風邪薬) comes in powder form (顆粒) more often than in Western countries."},

    {type:"teach", trg:"けんこうしんだん", src:"health checkup", pos:"noun", gender:null,
     note:"Annual health examination. Required for employees.\nにんげんドック = comprehensive health screening.",
     example:"A: ことしのけんこうしんだんはいつですか？\nB: らいげつのよていです。\nA: それは予想外(よそうがい)の結果(けっか)ですね。\nB: はい、私(わたし)も驚(おどろ)きました。原因(げんいん)を調(しら)べています。\nA: いつごろ原因(げんいん)が分(わ)かりそうですか？\nB: 今週中(こんしゅうちゅう)には分析(ぶんせき)結果(けっか)が出(で)る予定(よてい)です。",
     exampleSrc:"A: When is this year's health checkup?\nB: It is scheduled for next month.\nA: That is an unexpected result.\nB: Yes, I was surprised too. We are investigating the cause.\nA: When do you think you will know the cause?\nB: The analysis results are expected to come out by the end of this week.",
     funFact:"Japanese companies are legally required to provide annual けんこうしんだん for employees. にんげんドック (human dock, from 'dry dock' for ships) is a comprehensive optional screening. Japan's preventive healthcare culture and regular checkups contribute to its high life expectancy (84+ years), the world's longest."},

    {type:"teach", trg:"めんえき", src:"immunity / immune system", pos:"noun", gender:null,
     note:"めんえきりょく = immune strength.\nめんえきをつける = build immunity.",
     example:"A: めんえきりょくをたかめるにはどうすればいいですか？\nB: すいみんとえいようとうんどうがだいじです。\nA: その分野(ぶんや)についてどのくらいご存(ぞん)じですか？\nB: 専門(せんもん)ではありませんが、基本的(きほんてき)な知識(ちしき)はあります。\nA: もっと詳(くわ)しく知(し)りたい場合(ばあい)は、どうすればいいですか？\nB: 専門家(せんもんか)に相談(そうだん)するか、関連(かんれん)の書籍(しょせき)を読(よ)むことをお勧(すす)めします。",
     exampleSrc:"A: How can I boost my immunity?\nB: Sleep, nutrition, and exercise are important.\nA: How much do you know about that field?\nB: It is not my specialty, but I have basic knowledge.\nA: If I want to know more in detail, what should I do?\nB: I recommend consulting a specialist or reading related books.",
     funFact:"めんえき (免疫) gained enormous public awareness during the pandemic. Japanese health culture emphasizes めんえきりょくアップ (boosting immune strength) through diet, exercise, and sleep. Foods like ヨーグルト, なっとう, and あまざけ are marketed as めんえきりょく boosters, a major category in Japanese functional food marketing."},

    {type:"teach", trg:"よぼう", src:"prevention", pos:"noun", gender:null,
     note:"よぼうする = to prevent.\nよぼうせっしゅ = vaccination.",
     example:"A: びょうきのよぼうがいちばんだいじです。\nB: そうですね。よぼうせっしゅもうけました。\nA: どのような影響(えいきょう)がありましたか？\nB: 社会全体(しゃかいぜんたい)に大(おお)きな影響(えいきょう)を与(あた)えました。\nA: 良(よ)い影響(えいきょう)ですか、悪(わる)い影響(えいきょう)ですか？\nB: 両方(りょうほう)あります。メリットもデメリットもあります。",
     exampleSrc:"A: Prevention of illness is most important.\nB: That's right. I also got vaccinated.\nA: What kind of impact was there?\nB: It had a big impact on society as a whole.\nA: A good impact or a bad impact?\nB: Both. There are both merits and demerits.",
     funFact:"Japanese healthcare philosophy emphasizes よぼう (prevention) over treatment. よぼういがく (preventive medicine) is a major field. Seasonal よぼうせっしゅ (vaccinations), annual checkups, and public health campaigns are well-organized. Japan's masking culture predates the pandemic, originally for かぜよぼう (cold prevention)."},

    {type:"teach", trg:"アレルギー", src:"allergy", pos:"noun", gender:null,
     note:"しょくもつアレルギー = food allergy.\nかふんしょう = hay fever (pollen allergy).",
     example:"A: なにかアレルギーはありますか？\nB: はい、えびアレルギーがあります。\nA: 具体的(ぐたいてき)にはどういうことですか？\nB: つまり、状況(じょうきょう)に応(おう)じて対応(たいおう)を変(か)える必要(ひつよう)があるということです。\nA: なるほど。それは確(たし)かにそうですね。\nB: ええ、柔軟(じゅうなん)な対応(たいおう)が大切(たいせつ)だと思(おも)います。",
     exampleSrc:"A: Do you have any allergies?\nB: Yes, I have a shrimp allergy.\nA: What do you mean specifically?\nB: I mean we need to change our approach depending on the situation.\nA: I see. That is certainly true.\nB: Yes, I think flexible response is important.",
     funFact:"かふんしょう (花粉症, pollen allergy/hay fever) affects roughly 40% of Japanese people, making it a national health issue. スギかふん (cedar pollen) is the main cause, peaking in February-April. Masks, medication, and indoor air purifiers are essential spring purchases. Some blame postwar cedar reforestation policies."},

    {type:"teach", trg:"ストレス", src:"stress", pos:"noun", gender:null,
     note:"ストレスがたまる = stress accumulates.\nストレスかいしょう = stress relief.",
     example:"A: さいきんストレスがたまっています。\nB: たまにはゆっくりやすんでください。\nA: それについてもう少(すこ)し詳(くわ)しく教(おし)えてください。\nB: 例(たと)えば、最近(さいきん)の事例(じれい)を見(み)ると、変化(へんか)が激(はげ)しいです。\nA: そうですか。どう対処(たいしょ)すればいいでしょうか。\nB: まず現状(げんじょう)を把握(はあく)してから、計画(けいかく)を立(た)てましょう。",
     exampleSrc:"A: Stress has been building up recently.\nB: Please take it easy sometimes.\nA: Please tell me more about that.\nB: For example, looking at recent cases, the changes are dramatic.\nA: Is that so? How should we handle it?\nB: Let's first grasp the current situation, then make a plan.",
     funFact:"ストレスしゃかい (stress society) is a recognized social phenomenon in Japan. Companies now legally require ストレスチェック (stress checks) for employees. Japanese stress relief methods include おんせん (hot springs), しんりんよく (forest bathing), and カラオケ. Mental health awareness (メンタルヘルス) is slowly growing but still stigmatized."},

    {type:"teach", trg:"たいちょう", src:"physical condition", pos:"noun", gender:null,
     note:"たいちょうがわるい = feeling unwell.\nたいちょうかんり = health management.",
     example:"A: たいちょうはいかがですか？\nB: おかげさまで、げんきです。\nA: どのような方法(ほうほう)がありますか？\nB: いくつかの選択肢(せんたくし)があります。一番(いちばん)効果的(こうかてき)なのは実践(じっせん)です。\nA: 実践(じっせん)というのは、具体的(ぐたいてき)に何(なに)をすればいいですか？\nB: 毎日(まいにち)少(すこ)しずつ取(と)り組(く)むことが重要(じゅうよう)です。",
     exampleSrc:"A: How is your physical condition?\nB: Thanks to you, I am well.\nA: What kinds of methods are there?\nB: There are several options. The most effective is practice.\nA: What specifically should we do in practice?\nB: It is important to work on it a little each day.",
     funFact:"たいちょうかんり (体調管理) is considered a personal responsibility in Japanese work culture. Coming to work sick (むりして出勤) was traditional but attitudes are changing. たいちょうがわるい (feeling unwell) is an acceptable reason to decline social invitations without giving details, respecting privacy."},

    {type:"teach", trg:"にゅういん", src:"hospitalization", pos:"noun", gender:null,
     note:"にゅういんする = to be hospitalized.\nたいいんする = to be discharged.",
     example:"A: にゅういんはなんにちくらいですか？\nB: いっしゅうかんのよていです。\nA: それはいつごろから始(はじ)まったのですか？\nB: 数年前(すうねんまえ)からですが、最近(さいきん)特(とく)に注目(ちゅうもく)されています。\nA: 今後(こんご)どうなると思(おも)いますか？\nB: さらに発展(はってん)すると予想(よそう)されています。",
     exampleSrc:"A: How many days will the hospitalization be?\nB: About one week is planned.\nA: When did that start?\nB: It started a few years ago, but it has been getting particular attention recently.\nA: What do you think will happen going forward?\nB: It is expected to develop further.",
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
