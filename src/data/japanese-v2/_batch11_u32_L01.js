// Batch 11 – Unit 32 (B2.4 Medicine): Health & Medical Vocabulary
const BATCH11_L1 = {
  id:"jav2_u32l_b11_1", title:"健康(けんこう)と医療(いりょう)", icon:"💊", xp:15, board:true,
  steps:[
    {type:"intro", title:"健康(けんこう)と医療(いりょう)",
     desc:"Learn medical and health vocabulary for navigating healthcare in Japan and discussing health topics. Essential for daily life and JLPT N2.",
     goals:["Describe symptoms and health conditions","Navigate hospital and pharmacy vocabulary","Discuss health and wellness topics"]},

    {type:"teach", trg:"症状(しょうじょう)", src:"symptom", pos:"noun", gender:null,
     note:"症状(しょうじょう)を説明(せつめい)する = describe symptoms.\nどんな症状(しょうじょう)ですか = what symptoms?",
     example:"A: どんな症状(しょうじょう)がありますか？\nB: 頭(あたま)が痛(いた)くて、熱(ねつ)があります。\nA: 最近(さいきん)の動向(どうこう)はいかがですか？\nB: 全体的(ぜんたいてき)には好調(こうちょう)ですが、一部(いちぶ)課題(かだい)もあります。\nA: どのような課題(かだい)がありますか？\nB: 人材(じんざい)の確保(かくほ)が最(もっと)も大(おお)きな課題(かだい)です。",
     exampleSrc:"A: What symptoms do you have?\nB: I have a headache and fever.\nA: How are the recent trends?\nB: Overall things are going well, but there are some issues.\nA: What kinds of issues are there?\nB: Securing human resources is the biggest challenge.",
     funFact:"At Japanese hospitals, you fill out a 問診票(もんしんひょう) (medical questionnaire) listing 症状(しょうじょう) before seeing the doctor. Common 症状(しょうじょう) vocabulary: 熱(ねつ) (fever), 咳(せき) (cough), 吐(は)き気(け) (nausea), めまい (dizziness). Japanese patients tend to describe 症状(しょうじょう) very precisely, which doctors appreciate."},

    {type:"teach", trg:"診察(しんさつ)", src:"medical examination", pos:"noun", gender:null,
     note:"診察(しんさつ)する = to examine (a patient).\n診察室(しんさつしつ) = examination room.",
     example:"A: 診察(しんさつ)の予約(よやく)をお願(ねが)いします。\nB: 明日(あした)の午前(ごぜん)十時(じゅうじ)はいかがですか？\nA: それは興味深(きょうみぶか)いですね。\nB: ええ、日本(にほん)ならではの特徴(とくちょう)だと思(おも)います。\nA: 海外(かいがい)ではどうなのでしょうか？\nB: 国(くに)によって異(こと)なりますが、共通(きょうつう)する部分(ぶぶん)もあります。",
     exampleSrc:"A: I'd like to make an appointment for an examination.\nB: How about 10 AM tomorrow?\nA: That is interesting.\nB: Yes, I think it is a characteristic unique to Japan.\nA: I wonder how it is overseas?\nB: It differs by country, but there are also common aspects.",
     funFact:"Japanese 診察(しんさつ) typically begins at a reception desk where you present your 健康保険証(けんこうほけんしょう) (health insurance card). Wait times can be long at popular clinics. Japan has a universal healthcare system covering 70% of medical costs. The remaining 30% is the patient's copay."},

    {type:"teach", trg:"処方箋(しょほうせん)", src:"prescription", pos:"noun", gender:null,
     note:"処方箋(しょほうせん)を出(だ)す = issue a prescription.\n処方箋薬局(しょほうせんやっきょく) = prescription pharmacy.",
     example:"A: 処方箋(しょほうせん)を出(だ)しますので、薬局(やっきょく)で薬(くすり)をもらってください。\nB: 分(わ)かりました。ありがとうございます。\nA: その経験(けいけん)から何(なに)を学(まな)びましたか？\nB: 事前(じぜん)の準備(じゅんび)がいかに重要(じゅうよう)かを学(まな)びました。\nA: 具体的(ぐたいてき)にどんな準備(じゅんび)をすべきですか？\nB: まず情報収集(じょうほうしゅうしゅう)をして、それから計画(けいかく)を練(ね)ることが大事(だいじ)です。",
     exampleSrc:"A: I will issue a prescription, so please get medicine at the pharmacy.\nB: Understood. Thank you.\nA: What did you learn from that experience?\nB: I learned how important advance preparation is.\nA: What kind of preparation should be done specifically?\nB: First, gather information, then it is important to develop a plan.",
     funFact:"In Japan, 処方箋(しょほうせん) are taken to external pharmacies (院外薬局(いんがいやっきょく)), not filled inside the hospital. This separation was implemented to prevent overprescription. Japanese pharmacists (薬剤師(やくざいし)) explain each medication's usage, side effects, and interactions in detail, often providing printed お薬手帳(くすりてちょう) (medication notebook)."},

    {type:"teach", trg:"薬(くすり)", src:"medicine / drug", pos:"noun", gender:null,
     note:"薬(くすり)を飲(の)む = take medicine.\n薬屋(くすりや) = pharmacy/drugstore.",
     example:"A: この薬(くすり)は一日(いちにち)三回(さんかい)飲(の)んでください。\nB: 食後(しょくご)に飲(の)めばいいですか？\nA: 今後(こんご)の展望(てんぼう)についてお聞(き)かせください。\nB: 今後(こんご)はさらに国際化(こくさいか)が進(すす)むと思(おも)います。\nA: それに対(たい)してどのような対策(たいさく)が必要(ひつよう)ですか？\nB: 語学力(ごがくりょく)の向上(こうじょう)と異文化理解(いぶんかりかい)が不可欠(ふかけつ)です。",
     exampleSrc:"A: Please take this medicine three times a day.\nB: Should I take it after meals?\nA: Please tell me about future prospects.\nB: I think internationalization will progress further going forward.\nA: What measures are needed for that?\nB: Improving language skills and cross-cultural understanding are essential.",
     funFact:"Japanese 薬(くすり) culture distinguishes between 処方薬(しょほうやく) (prescription medicine) and 一般薬(いっぱんやく) (over-the-counter). Drugstores like マツモトキヨシ and ウエルシア sell OTC medicines alongside cosmetics and snacks. Japanese cold medicine (風邪薬(かぜぐすり)) comes in powder form (顆粒(かりゅう)) more often than in Western countries."},

    {type:"teach", trg:"健康診断(けんこうしんだん)", src:"health checkup", pos:"noun", gender:null,
     note:"Annual health examination. Required for employees.\n人間(にんげん)ドック = comprehensive health screening.",
     example:"A: 今年(ことし)の健康診断(けんこうしんだん)はいつですか？\nB: 来月(らいげつ)の予定(よてい)です。\nA: それは予想外(よそうがい)の結果(けっか)ですね。\nB: はい、私(わたし)も驚(おどろ)きました。原因(げんいん)を調(しら)べています。\nA: いつごろ原因(げんいん)が分(わ)かりそうですか？\nB: 今週中(こんしゅうちゅう)には分析(ぶんせき)結果(けっか)が出(で)る予定(よてい)です。",
     exampleSrc:"A: When is this year's health checkup?\nB: It is scheduled for next month.\nA: That is an unexpected result.\nB: Yes, I was surprised too. We are investigating the cause.\nA: When do you think you will know the cause?\nB: The analysis results are expected to come out by the end of this week.",
     funFact:"Japanese companies are legally required to provide annual 健康診断(けんこうしんだん) for employees. 人間(にんげん)ドック (human dock, from 'dry dock' for ships) is a comprehensive optional screening. Japan's preventive healthcare culture and regular checkups contribute to its high life expectancy (84+ years), the world's longest."},

    {type:"teach", trg:"免疫(めんえき)", src:"immunity / immune system", pos:"noun", gender:null,
     note:"免疫力(めんえきりょく) = immune strength.\n免疫(めんえき)をつける = build immunity.",
     example:"A: 免疫力(めんえきりょく)を高(たか)めるにはどうすればいいですか？\nB: 睡眠(すいみん)と栄養(えいよう)と運動(うんどう)が大事(だいじ)です。\nA: その分野(ぶんや)についてどのくらいご存(ぞん)じですか？\nB: 専門(せんもん)ではありませんが、基本的(きほんてき)な知識(ちしき)はあります。\nA: もっと詳(くわ)しく知(し)りたい場合(ばあい)は、どうすればいいですか？\nB: 専門家(せんもんか)に相談(そうだん)するか、関連(かんれん)の書籍(しょせき)を読(よ)むことをお勧(すす)めします。",
     exampleSrc:"A: How can I boost my immunity?\nB: Sleep, nutrition, and exercise are important.\nA: How much do you know about that field?\nB: It is not my specialty, but I have basic knowledge.\nA: If I want to know more in detail, what should I do?\nB: I recommend consulting a specialist or reading related books.",
     funFact:"免疫(めんえき) gained enormous public awareness during the pandemic. Japanese health culture emphasizes 免疫力(めんえきりょく)アップ (boosting immune strength) through diet, exercise, and sleep. Foods like ヨーグルト, 納豆(なっとう), and 甘酒(あまざけ) are marketed as 免疫力(めんえきりょく) boosters, a major category in Japanese functional food marketing."},

    {type:"teach", trg:"予防(よぼう)", src:"prevention", pos:"noun", gender:null,
     note:"予防(よぼう)する = to prevent.\n予防接種(よぼうせっしゅ) = vaccination.",
     example:"A: 病気(びょうき)の予防(よぼう)が一番(いちばん)大事(だいじ)です。\nB: そうですね。予防接種(よぼうせっしゅ)も受(う)けました。\nA: どのような影響(えいきょう)がありましたか？\nB: 社会全体(しゃかいぜんたい)に大(おお)きな影響(えいきょう)を与(あた)えました。\nA: 良(よ)い影響(えいきょう)ですか、悪(わる)い影響(えいきょう)ですか？\nB: 両方(りょうほう)あります。メリットもデメリットもあります。",
     exampleSrc:"A: Prevention of illness is most important.\nB: That's right. I also got vaccinated.\nA: What kind of impact was there?\nB: It had a big impact on society as a whole.\nA: A good impact or a bad impact?\nB: Both. There are both merits and demerits.",
     funFact:"Japanese healthcare philosophy emphasizes 予防(よぼう) (prevention) over treatment. 予防医学(よぼういがく) (preventive medicine) is a major field. Seasonal 予防接種(よぼうせっしゅ) (vaccinations), annual checkups, and public health campaigns are well-organized. Japan's masking culture predates the pandemic, originally for 風邪予防(かぜよぼう) (cold prevention)."},

    {type:"teach", trg:"アレルギー", src:"allergy", pos:"noun", gender:null,
     note:"食物(しょくもつ)アレルギー = food allergy.\n花粉症(かふんしょう) = hay fever (pollen allergy).",
     example:"A: 何(なに)かアレルギーはありますか？\nB: はい、えびアレルギーがあります。\nA: 具体的(ぐたいてき)にはどういうことですか？\nB: つまり、状況(じょうきょう)に応(おう)じて対応(たいおう)を変(か)える必要(ひつよう)があるということです。\nA: なるほど。それは確(たし)かにそうですね。\nB: ええ、柔軟(じゅうなん)な対応(たいおう)が大切(たいせつ)だと思(おも)います。",
     exampleSrc:"A: Do you have any allergies?\nB: Yes, I have a shrimp allergy.\nA: What do you mean specifically?\nB: I mean we need to change our approach depending on the situation.\nA: I see. That is certainly true.\nB: Yes, I think flexible response is important.",
     funFact:"花粉症(かふんしょう) (pollen allergy/hay fever) affects roughly 40% of Japanese people, making it a national health issue. スギ花粉(かふん) (cedar pollen) is the main cause, peaking in February-April. Masks, medication, and indoor air purifiers are essential spring purchases. Some blame postwar cedar reforestation policies."},

    {type:"teach", trg:"ストレス", src:"stress", pos:"noun", gender:null,
     note:"ストレスがたまる = stress accumulates.\nストレス解消(かいしょう) = stress relief.",
     example:"A: 最近(さいきん)ストレスがたまっています。\nB: たまにはゆっくり休(やす)んでください。\nA: それについてもう少(すこ)し詳(くわ)しく教(おし)えてください。\nB: 例(たと)えば、最近(さいきん)の事例(じれい)を見(み)ると、変化(へんか)が激(はげ)しいです。\nA: そうですか。どう対処(たいしょ)すればいいでしょうか。\nB: まず現状(げんじょう)を把握(はあく)してから、計画(けいかく)を立(た)てましょう。",
     exampleSrc:"A: Stress has been building up recently.\nB: Please take it easy sometimes.\nA: Please tell me more about that.\nB: For example, looking at recent cases, the changes are dramatic.\nA: Is that so? How should we handle it?\nB: Let's first grasp the current situation, then make a plan.",
     funFact:"ストレス社会(しゃかい) (stress society) is a recognized social phenomenon in Japan. Companies now legally require ストレスチェック (stress checks) for employees. Japanese stress relief methods include 温泉(おんせん) (hot springs), 森林浴(しんりんよく) (forest bathing), and カラオケ. Mental health awareness (メンタルヘルス) is slowly growing but still stigmatized."},

    {type:"teach", trg:"体調(たいちょう)", src:"physical condition", pos:"noun", gender:null,
     note:"体調(たいちょう)が悪(わる)い = feeling unwell.\n体調管理(たいちょうかんり) = health management.",
     example:"A: 体調(たいちょう)はいかがですか？\nB: おかげさまで、元気(げんき)です。\nA: どのような方法(ほうほう)がありますか？\nB: いくつかの選択肢(せんたくし)があります。一番(いちばん)効果的(こうかてき)なのは実践(じっせん)です。\nA: 実践(じっせん)というのは、具体的(ぐたいてき)に何(なに)をすればいいですか？\nB: 毎日(まいにち)少(すこ)しずつ取(と)り組(く)むことが重要(じゅうよう)です。",
     exampleSrc:"A: How is your physical condition?\nB: Thanks to you, I am well.\nA: What kinds of methods are there?\nB: There are several options. The most effective is practice.\nA: What specifically should we do in practice?\nB: It is important to work on it a little each day.",
     funFact:"体調管理(たいちょうかんり) is considered a personal responsibility in Japanese work culture. Coming to work sick (無理(むり)して出勤(しゅっきん)) was traditional but attitudes are changing. 体調(たいちょう)が悪(わる)い (feeling unwell) is an acceptable reason to decline social invitations without giving details, respecting privacy."},

    {type:"teach", trg:"入院(にゅういん)", src:"hospitalization", pos:"noun", gender:null,
     note:"入院(にゅういん)する = to be hospitalized.\n退院(たいいん)する = to be discharged.",
     example:"A: 入院(にゅういん)は何日(なんにち)くらいですか？\nB: 一週間(いっしゅうかん)の予定(よてい)です。\nA: それはいつごろから始(はじ)まったのですか？\nB: 数年前(すうねんまえ)からですが、最近(さいきん)特(とく)に注目(ちゅうもく)されています。\nA: 今後(こんご)どうなると思(おも)いますか？\nB: さらに発展(はってん)すると予想(よそう)されています。",
     exampleSrc:"A: How many days will the hospitalization be?\nB: About one week is planned.\nA: When did that start?\nB: It started a few years ago, but it has been getting particular attention recently.\nA: What do you think will happen going forward?\nB: It is expected to develop further.",
     funFact:"Japanese 入院(にゅういん) typically involves longer stays than in Western countries. Patients wear パジャマ (hospital pajamas) and often bring personal items. Family members are expected to visit and sometimes help with meals. Japan's hospital food is notably varied and nutritious compared to many countries."},

    // Quiz steps
    {type:"mc", q:"日本(にほん)の健康保険(けんこうほけん)は医療費(いりょうひ)の何(なん)パーセントをカバーしますか？",
     opts:["70%","50%","100%","30%"],
     ans:"70%",
     hint:"Japan's universal healthcare system covers most of the cost, with the patient paying the remaining portion as a copay."},

    {type:"fb", s:"どんな{1}がありますか？",
     a:["症状(しょうじょう)"],
     opts:["症状(しょうじょう)","薬(くすり)","診察(しんさつ)","予防(よぼう)"],
     hint:"The doctor is asking what medical signs or complaints you are experiencing. This means 'symptoms.'",
     sSrc:"What symptoms do you have?"},

    {type:"match", pairs:[
      {trg:"診察(しんさつ)", src:"medical examination"},
      {trg:"処方箋(しょほうせん)", src:"prescription"},
      {trg:"予防(よぼう)", src:"prevention"},
      {trg:"入院(にゅういん)", src:"hospitalization"}
    ]},

    {type:"mc", q:"日本(にほん)で花粉症(かふんしょう)に苦(くる)しんでいる人(ひと)はどのくらいですか？",
     opts:["About 40%","About 10%","About 5%","About 80%"],
     ans:"About 40%",
     hint:"This pollen allergy is so widespread it is considered a national health issue, especially during spring."},

    {type:"fb", s:"免疫力(めんえきりょく)を高(たか)めるには{1}と栄養(えいよう)と運動(うんどう)が大事(だいじ)です。",
     a:["睡眠(すいみん)"],
     opts:["睡眠(すいみん)","ストレス","アレルギー","薬(くすり)"],
     hint:"Three pillars of immunity: rest, nutrition, and exercise. The missing word is about getting enough rest at night.",
     sSrc:"Sleep, nutrition, and exercise are important for boosting immunity."},

    {type:"mc", q:"日本(にほん)の会社(かいしゃ)に義務(ぎむ)づけられているのは何(なん)ですか？",
     opts:["ストレスチェック for employees","Free gym membership","Mandatory vacation","Daily exercise time"],
     ans:"ストレスチェック for employees",
     hint:"A legally required assessment to monitor employee mental health and prevent workplace stress disorders."}
  ,{type:"fb", s:"最近(さいきん){1}がたまって体調(たいちょう)が悪(わる)いです。ゆっくり休(やす)んでください。",
    a:["ストレス"],
    opts:["ストレス","アレルギー","免疫(めんえき)","症状(しょうじょう)"],
    hint:"Work and daily pressures have been building up, causing poor health. This loanword describes mental and emotional pressure.",
    sSrc:"Lately, {1} has been building up and my physical condition is poor. Please rest well."}
  ,{type:"match",pairs:[{trg:"薬(くすり)",src:"medicine / drug"},{trg:"健康診断(けんこうしんだん)",src:"health checkup"},{trg:"免疫(めんえき)",src:"immunity / immune system"},{trg:"アレルギー",src:"allergy"},{trg:"体調(たいちょう)",src:"physical condition"}]}]
};
export default BATCH11_L1;
