// Batch 7 – Unit 32 (B2.2 Medicine): Medical & Health Science Vocabulary
const BATCH7_L1 = {
  id:"jav2_u32l_b7_1", title:"いりょうかがく", icon:"🏥", xp:15, board:true,
  steps:[
    {type:"intro", title:"いりょうかがく",
     desc:"Learn medical and health science vocabulary for discussing healthcare, medical procedures, and health policy. These terms appear in news about Japan's healthcare system.",
     goals:["Discuss medical procedures and conditions","Understand healthcare system vocabulary","Express health-related concerns formally"]},

    {type:"teach", trg:"しんだん", src:"diagnosis", pos:"noun", gender:null,
     note:"しんだんする = to diagnose. しんだんしょ = medical certificate.\nけんこうしんだん = health checkup.",
     example:"A: いしゃのしんだんはなんでしたか？\nB: ストレスがげんいんだそうです。\nA: 何(なに)か良(よ)い方法(ほうほう)はありませんか？\nB: 一(ひと)つ提案(ていあん)があります。段階的(だんかいてき)に進(すす)めてはどうでしょうか。\nA: 段階的(だんかいてき)に、というのはどういうことですか？\nB: まず小規模(しょうきぼ)で試(ため)してから、徐々(じょじょ)に拡大(かくだい)するということです。",
     exampleSrc:"A: What was the doctor's diagnosis?\nB: He said stress is the cause.\nA: Is there a good method?\nB: I have one suggestion. How about proceeding step by step?\nA: What do you mean by step by step?\nB: It means trying it on a small scale first, then gradually expanding.",
     funFact:"けんこうしんだん (health checkup) is mandatory for Japanese employees and students annually. Companies arrange comprehensive しんだん including blood tests, X-rays, and metabolic syndrome screening (メタボ健診). This preventive approach contributes to Japan's world-leading life expectancy of 84+ years."},

    {type:"teach", trg:"しょほうせん", src:"prescription", pos:"noun", gender:null,
     note:"しょほうせんをもらう = to get a prescription.\nいんがいしょほう = outpatient prescription.",
     example:"A: おくすりはしょほうせんがひつようです。\nB: やっきょくでもらえますか？\nA: この問題(もんだい)をどう思(おも)いますか？\nB: 複雑(ふくざつ)な問題(もんだい)ですが、解決策(かいけつさく)はあると思(おも)います。\nA: どのような解決策(かいけつさく)を考(かんが)えていますか？\nB: 関係者(かんけいしゃ)全員(ぜんいん)で話(はな)し合(あ)いの場(ば)を設(もう)けることが第一歩(だいいっぽ)です。",
     exampleSrc:"A: Medication requires a prescription.\nB: Can I get it at the pharmacy?\nA: What do you think about this issue?\nB: It is a complex issue, but I think there are solutions.\nA: What kind of solutions are you thinking of?\nB: The first step is to set up a discussion forum for all stakeholders.",
     funFact:"Japanese しょほうせん (処方箋) must be filled at a pharmacy (調剤薬局, ちょうざいやっきょく) separate from the hospital. This separation was mandated to prevent conflicts of interest. Pharmacists (薬剤師) explain medications in detail. Japan has strict controls on antibiotics, requiring しょほうせん even for basic infections."},

    {type:"teach", trg:"しゅじゅつ", src:"surgery / operation", pos:"noun", gender:null,
     note:"しゅじゅつする = to perform surgery. しゅじゅつしつ = operating room.\nないしきょうしゅじゅつ = endoscopic surgery.",
     example:"A: しゅじゅつはせいこうしました。\nB: よかったです。かいふくをいのっています。\nA: 最近(さいきん)の動向(どうこう)はいかがですか？\nB: 全体的(ぜんたいてき)には好調(こうちょう)ですが、一部(いちぶ)課題(かだい)もあります。\nA: どのような課題(かだい)がありますか？\nB: 人材(じんざい)の確保(かくほ)が最(もっと)も大(おお)きな課題(かだい)です。",
     exampleSrc:"A: The surgery was successful.\nB: Thank goodness. I pray for recovery.\nA: How are the recent trends?\nB: Overall things are going well, but there are some issues.\nA: What kinds of issues are there?\nB: Securing human resources is the biggest challenge.",
     funFact:"Japanese しゅじゅつ (手術) technology is world-class. Robotic surgery (ロボットしゅじゅつ), endoscopic techniques, and organ transplants are performed at advanced levels. Before しゅじゅつ, doctors explain risks in detail (インフォームドコンセント). Patients often bring good luck charms (お守り) for surgical success."},

    {type:"teach", trg:"かいふく", src:"recovery / recuperation", pos:"noun", gender:null,
     note:"かいふくする = to recover. かいふくき = recovery period.\nたいりょくがかいふくする = stamina recovers.",
     example:"A: びょうきからかいふくしました。\nB: おめでとうございます。むりしないでくださいね。\nA: それは興味深(きょうみぶか)いですね。\nB: ええ、日本(にほん)ならではの特徴(とくちょう)だと思(おも)います。\nA: 海外(かいがい)ではどうなのでしょうか？\nB: 国(くに)によって異(こと)なりますが、共通(きょうつう)する部分(ぶぶん)もあります。",
     exampleSrc:"A: I recovered from my illness.\nB: Congratulations. Please do not overdo it.\nA: That is interesting.\nB: Yes, I think it is a characteristic unique to Japan.\nA: I wonder how it is overseas?\nB: It differs by country, but there are also common aspects.",
     funFact:"Japanese かいふく (回復) culture emphasizes rest and patience. The phrase ごじあい (ご自愛, take care of yourself) and おだいじに (take care) express concern for someone's かいふく. Japanese hospitals keep patients longer than Western ones for complete かいふく. Convalescence is valued, not rushed."},

    {type:"teach", trg:"よぼう", src:"prevention", pos:"noun", gender:null,
     note:"よぼうせっしゅ = vaccination. よぼういがく = preventive medicine.\nよぼうする = to prevent.",
     example:"A: よぼうがいちばんだいじです。\nB: うんどうとえいようバランスですね。\nA: その経験(けいけん)から何(なに)を学(まな)びましたか？\nB: 事前(じぜん)の準備(じゅんび)がいかに重要(じゅうよう)かを学(まな)びました。\nA: 具体的(ぐたいてき)にどんな準備(じゅんび)をすべきですか？\nB: まず情報収集(じょうほうしゅうしゅう)をして、それから計画(けいかく)を練(ね)ることが大事(だいじ)です。",
     exampleSrc:"A: Prevention is most important.\nB: Exercise and nutritional balance.\nA: What did you learn from that experience?\nB: I learned how important advance preparation is.\nA: What kind of preparation should be done specifically?\nB: First, gather information, then it is important to develop a plan.",
     funFact:"Japan's healthcare philosophy emphasizes よぼう (prevention) over treatment. Annual health checkups, balanced school lunches (給食), and public health campaigns reflect this. 予防接種 (vaccinations) follow a national schedule. Japan's preventive approach contributes to low healthcare costs despite an aging population."},

    {type:"teach", trg:"こうかいりょうほう", src:"public healthcare / medical treatment", pos:"noun", gender:null,
     note:"こうかいほけん = public health insurance.\nにほんのいりょうせいど = Japan's medical system.",
     example:"A: にほんのこくみんかいほけんせいどはすぐれています。\nB: だれでもびょういんにいけますね。\nA: 今後(こんご)の展望(てんぼう)についてお聞(き)かせください。\nB: 今後(こんご)はさらに国際化(こくさいか)が進(すす)むと思(おも)います。\nA: それに対(たい)してどのような対策(たいさく)が必要(ひつよう)ですか？\nB: 語学力(ごがくりょく)の向上(こうじょう)と異文化理解(いぶんかりかい)が不可欠(ふかけつ)です。",
     exampleSrc:"A: Japan's universal health insurance system is excellent.\nB: Anyone can go to the hospital.\nA: Please tell me about future prospects.\nB: I think internationalization will progress further going forward.\nA: What measures are needed for that?\nB: Improving language skills and cross-cultural understanding are essential.",
     funFact:"Japan has universal health coverage (国民皆保険, こくみんかいほけん) since 1961. Everyone pays into insurance and patients cover 30% of costs (10% for elderly). This system keeps medical bankruptcies near zero, unlike the US. However, the aging population strains the system's financial sustainability."},

    {type:"teach", trg:"めんえき", src:"immunity / immune system", pos:"noun", gender:null,
     note:"めんえきりょく = immune strength.\nめんえきをたかめる = to boost immunity.",
     example:"A: めんえきりょくをたかめることがたいせつです。\nB: すいみんとえいようがかぎですね。\nA: それは予想外(よそうがい)の結果(けっか)ですね。\nB: はい、私(わたし)も驚(おどろ)きました。原因(げんいん)を調(しら)べています。\nA: いつごろ原因(げんいん)が分(わ)かりそうですか？\nB: 今週中(こんしゅうちゅう)には分析(ぶんせき)結果(けっか)が出(で)る予定(よてい)です。",
     exampleSrc:"A: Boosting immunity is important.\nB: Sleep and nutrition are key.\nA: That is an unexpected result.\nB: Yes, I was surprised too. We are investigating the cause.\nA: When do you think you will know the cause?\nB: The analysis results are expected to come out by the end of this week.",
     funFact:"めんえき (免疫) became a household word during COVID. Japanese health shows (健康番組) frequently discuss めんえきりょく boosting through food, exercise, and sleep. Traditional remedies like green tea, natto, and miso are promoted for めんえき benefits. Japan's flu vaccination culture expanded to COVID boosters."},

    {type:"teach", trg:"かんせんしょう", src:"infectious disease", pos:"noun", gender:null,
     note:"かんせんする = to be infected.\nかんせんかくだい = spread of infection.",
     example:"A: かんせんしょうのよぼうにはてあらいがだいじです。\nB: マスクもこうかてきですね。\nA: その分野(ぶんや)についてどのくらいご存(ぞん)じですか？\nB: 専門(せんもん)ではありませんが、基本的(きほんてき)な知識(ちしき)はあります。\nA: もっと詳(くわ)しく知(し)りたい場合(ばあい)は、どうすればいいですか？\nB: 専門家(せんもんか)に相談(そうだん)するか、関連(かんれん)の書籍(しょせき)を読(よ)むことをお勧(すす)めします。",
     exampleSrc:"A: Handwashing is important for infectious disease prevention.\nB: Masks are also effective.\nA: How much do you know about that field?\nB: It is not my specialty, but I have basic knowledge.\nA: If I want to know more in detail, what should I do?\nB: I recommend consulting a specialist or reading related books.",
     funFact:"Japan's response to かんせんしょう (感染症) reflects cultural habits: mask-wearing, shoe removal, frequent handwashing. The 手洗い (てあらい) stations at school and restaurant entrances predate COVID. Japan's relatively low COVID death rate was partly attributed to these existing hygiene practices and high mask compliance."},

    {type:"teach", trg:"こうれいしゃ", src:"elderly person / senior citizen", pos:"noun", gender:null,
     note:"こうれいしゃふくし = elderly welfare.\nこうれいか = aging (of society).",
     example:"A: こうれいしゃのかいごもんだいがふえています。\nB: かいごほけんせいどがありますが、たりません。\nA: どのような影響(えいきょう)がありましたか？\nB: 社会全体(しゃかいぜんたい)に大(おお)きな影響(えいきょう)を与(あた)えました。\nA: 良(よ)い影響(えいきょう)ですか、悪(わる)い影響(えいきょう)ですか？\nB: 両方(りょうほう)あります。メリットもデメリットもあります。",
     exampleSrc:"A: Elderly care problems are increasing.\nB: There is care insurance, but it is not enough.\nA: What kind of impact was there?\nB: It had a big impact on society as a whole.\nA: A good impact or a bad impact?\nB: Both. There are both merits and demerits.",
     funFact:"こうれいしゃ (高齢者) make up nearly 30% of Japan's population. 介護 (かいご, eldercare) is a massive social challenge. Japan created かいごほけん (care insurance) in 2000 but faces worker shortages. Care robots, community support, and 地域包括ケア (community-based integrated care) are innovative solutions being developed."},

    {type:"teach", trg:"せいしんてき", src:"mental / psychological", pos:"adj", gender:null,
     note:"Na-adjective. せいしんてきけんこう = mental health.\nせいしんか = psychiatry.",
     example:"A: せいしんてきけんこうもだいじです。\nB: そうですね。からだだけではありません。\nA: 具体的(ぐたいてき)にはどういうことですか？\nB: つまり、状況(じょうきょう)に応(おう)じて対応(たいおう)を変(か)える必要(ひつよう)があるということです。\nA: なるほど。それは確(たし)かにそうですね。\nB: ええ、柔軟(じゅうなん)な対応(たいおう)が大切(たいせつ)だと思(おも)います。",
     exampleSrc:"A: Mental health is important too.\nB: Yes. It is not just the body.\nA: What do you mean specifically?\nB: I mean we need to change our approach depending on the situation.\nA: I see. That is certainly true.\nB: Yes, I think flexible response is important.",
     funFact:"せいしんてき (精神的) health awareness is growing in Japan. Historically, mental health carried stigma. Now, メンタルヘルス (mental health) programs are mandatory in workplaces. ストレスチェック (stress checks) became legally required in 2015. Counseling services are expanding, though cultural barriers to seeking help persist."},

    {type:"teach", trg:"ちりょう", src:"medical treatment / therapy", pos:"noun", gender:null,
     note:"ちりょうする = to treat. ちりょうほう = treatment method.\nちりょうひ = medical expenses.",
     example:"A: ちりょうはどのくらいかかりますか？\nB: ほけんてきようなので、さんわりふたんです。\nA: それについてもう少(すこ)し詳(くわ)しく教(おし)えてください。\nB: 例(たと)えば、最近(さいきん)の事例(じれい)を見(み)ると、変化(へんか)が激(はげ)しいです。\nA: そうですか。どう対処(たいしょ)すればいいでしょうか。\nB: まず現状(げんじょう)を把握(はあく)してから、計画(けいかく)を立(た)てましょう。",
     exampleSrc:"A: How long will treatment take?\nB: Insurance covers it, so you pay 30%.\nA: Please tell me more about that.\nB: For example, looking at recent cases, the changes are dramatic.\nA: Is that so? How should we handle it?\nB: Let's first grasp the current situation, then make a plan.",
     funFact:"Japanese ちりょう (治療) combines Western medicine with traditional approaches. 漢方薬 (かんぽうやく, Chinese herbal medicine) is covered by health insurance. Acupuncture (鍼治療) and moxibustion (灸) are recognized ちりょう methods. This integrative approach gives patients more ちりょう options than in many Western countries."},

    {type:"teach", trg:"さいせいいりょう", src:"regenerative medicine", pos:"noun", gender:null,
     note:"iPS細胞 = iPS cells (induced pluripotent stem cells).\nさいせいいりょうけんきゅう = regenerative medicine research.",
     example:"A: にほんはさいせいいりょうのけんきゅうがすすんでいます。\nB: やまなかきょうじゅのiPSさいぼうがゆうめいですね。\nA: どのような方法(ほうほう)がありますか？\nB: いくつかの選択肢(せんたくし)があります。一番(いちばん)効果的(こうかてき)なのは実践(じっせん)です。\nA: 実践(じっせん)というのは、具体的(ぐたいてき)に何(なに)をすればいいですか？\nB: 毎日(まいにち)少(すこ)しずつ取(と)り組(く)むことが重要(じゅうよう)です。",
     exampleSrc:"A: Japan is advanced in regenerative medicine research.\nB: Professor Yamanaka's iPS cells are famous.\nA: What kinds of methods are there?\nB: There are several options. The most effective is practice.\nA: What specifically should we do in practice?\nB: It is important to work on it a little each day.",
     funFact:"さいせいいりょう (再生医療) is a Japanese research strength. Yamanaka Shinya won the 2012 Nobel Prize for iPS cells. Japan approved the world's first iPS cell treatment for age-related macular degeneration. The government heavily funds さいせいいりょう research, aiming to lead this medical revolution."},

    // Quiz steps
    {type:"mc", q:"Japan's health insurance covers what percentage for patients?",
     opts:["30% (patient pays), 70% covered","50% each","100% free","10% patient pays"],
     ans:"30% (patient pays), 70% covered",
     hint:"Universal coverage since 1961 means everyone p... into insurance and patients cover a minority of costs."},

    {type:"match", pairs:[
      {trg:"しんだん", src:"diagnosis"},
      {trg:"しゅじゅつ", src:"surgery"},
      {trg:"かいふく", src:"recovery"},
      {trg:"よぼう", src:"prevention"},
      {trg:"ちりょう", src:"treatment"}
    ]},

    {type:"fb", s:"しゅじゅつは{1}しました。おだいじに。",
     a:["せいこう"],
     opts:["せいこう","かいふく","しんだん","よぼう"],
     hint:"The surgery went well. This verb means 'to succeed.'",
     sSrc:"The surgery {1}. Take care."},

    {type:"mc", q:"iPSさいぼう were developed by:",
     opts:["Yamanaka Shinya (Nobel Prize 2012)","Watson and Crick","Marie Curie","Alexander Fleming"],
     ans:"Yamanaka Shinya (Nobel Prize 2012)",
     hint:"This Japanese scientist's discovery of induced pluripotent stem cells revolutionized regenerative medicine."},

    {type:"fb", s:"{1}りょくをたかめるにはすいみんがだいじです。",
     a:["めんえき"],
     opts:["めんえき","せいしん","かいふく","よぼう"],
     hint:"Sleep is important for boosting your immune strength.",
     sSrc:"{1} strength is boosted by sleep."},

    {type:"mc", q:"ストレスチェック in Japanese workplaces became:",
     opts:["Legally required in 2015","Voluntary forever","Only for hospitals","Only for schools"],
     ans:"Legally required in 2015",
     hint:"All companies with 50+ employees must conduct annual stress checks for employee mental health."},

    {type:"match", pairs:[
      {trg:"しょほうせん", src:"prescription"},
      {trg:"めんえき", src:"immunity"},
      {trg:"かんせんしょう", src:"infectious disease"},
      {trg:"こうれいしゃ", src:"elderly person"},
      {trg:"さいせいいりょう", src:"regenerative medicine"}
    ]},

    {type:"fb", s:"{1}てきけんこうもだいじです。からだだけではありません。",
     a:["せいしん"],
     opts:["せいしん","しんだん","ちりょう","よぼう"],
     hint:"Mental health matters too, not just physical health.",
     sSrc:"{1} health is also important. Not just the body."}
  ]
};
export default BATCH7_L1;
