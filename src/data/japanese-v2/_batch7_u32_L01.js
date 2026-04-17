// Batch 7 – Unit 32 (B2.2 Medicine): Medical & Health Science Vocabulary
const BATCH7_L1 = {
  id:"jav2_u32l_b7_1", title:"医療科学(いりょうかがく)", icon:"🏥", xp:15, board:true,
  steps:[
    {type:"intro", title:"医療科学(いりょうかがく)",
     desc:"Learn medical and health science vocabulary for discussing healthcare, medical procedures, and health policy. These terms appear in news about Japan's healthcare system.",
     goals:["Discuss medical procedures and conditions","Understand healthcare system vocabulary","Express health-related concerns formally"]},

    {type:"teach", trg:"診断(しんだん)", src:"diagnosis", pos:"noun", gender:null,
     note:"診断(しんだん)する = to diagnose. 診断書(しんだんしょ) = medical certificate.\n健康診断(けんこうしんだん) = health checkup.",
     example:"A: 医者(いしゃ)の診断(しんだん)は何(なん)でしたか？\nB: ストレスが原因(げんいん)だそうです。\nA: 何(なに)か良(よ)い方法(ほうほう)はありませんか？\nB: 一(ひと)つ提案(ていあん)があります。段階的(だんかいてき)に進(すす)めてはどうでしょうか。\nA: 段階的(だんかいてき)に、というのはどういうことですか？\nB: まず小規模(しょうきぼ)で試(ため)してから、徐々(じょじょ)に拡大(かくだい)するということです。",
     exampleSrc:"A: What was the doctor's diagnosis?\nB: He said stress is the cause.\nA: Is there a good method?\nB: I have one suggestion. How about proceeding step by step?\nA: What do you mean by step by step?\nB: It means trying it on a small scale first, then gradually expanding.",
     funFact:"健康診断(けんこうしんだん) (health checkup) is mandatory for Japanese employees and students annually. Companies arrange comprehensive 診断(しんだん) including blood tests, X-rays, and metabolic syndrome screening (メタボ健診(けんしん)). This preventive approach contributes to Japan's world-leading life expectancy of 84+ years."},

    {type:"teach", trg:"処方箋(しょほうせん)", src:"prescription", pos:"noun", gender:null,
     note:"処方箋(しょほうせん)をもらう = to get a prescription.\n院外処方(いんがいしょほう) = outpatient prescription.",
     example:"A: お薬(くすり)は処方箋(しょほうせん)が必要(ひつよう)です。\nB: 薬局(やっきょく)でもらえますか？\nA: この問題(もんだい)をどう思(おも)いますか？\nB: 複雑(ふくざつ)な問題(もんだい)ですが、解決策(かいけつさく)はあると思(おも)います。\nA: どのような解決策(かいけつさく)を考(かんが)えていますか？\nB: 関係者(かんけいしゃ)全員(ぜんいん)で話(はな)し合(あ)いの場(ば)を設(もう)けることが第一歩(だいいっぽ)です。",
     exampleSrc:"A: Medication requires a prescription.\nB: Can I get it at the pharmacy?\nA: What do you think about this issue?\nB: It is a complex issue, but I think there are solutions.\nA: What kind of solutions are you thinking of?\nB: The first step is to set up a discussion forum for all stakeholders.",
     funFact:"Japanese 処方箋(しょほうせん) must be filled at a pharmacy (調剤薬局(ちょうざいやっきょく)) separate from the hospital. This separation was mandated to prevent conflicts of interest. Pharmacists (薬剤師(やくざいし)) explain medications in detail. Japan has strict controls on antibiotics, requiring 処方箋(しょほうせん) even for basic infections."},

    {type:"teach", trg:"手術(しゅじゅつ)", src:"surgery / operation", pos:"noun", gender:null,
     note:"手術(しゅじゅつ)する = to perform surgery. 手術室(しゅじゅつしつ) = operating room.\n内視鏡手術(ないしきょうしゅじゅつ) = endoscopic surgery.",
     example:"A: 手術(しゅじゅつ)は成功(せいこう)しました。\nB: よかったです。回復(かいふく)を祈(いの)っています。\nA: 最近(さいきん)の動向(どうこう)はいかがですか？\nB: 全体的(ぜんたいてき)には好調(こうちょう)ですが、一部(いちぶ)課題(かだい)もあります。\nA: どのような課題(かだい)がありますか？\nB: 人材(じんざい)の確保(かくほ)が最(もっと)も大(おお)きな課題(かだい)です。",
     exampleSrc:"A: The surgery was successful.\nB: Thank goodness. I pray for recovery.\nA: How are the recent trends?\nB: Overall things are going well, but there are some issues.\nA: What kinds of issues are there?\nB: Securing human resources is the biggest challenge.",
     funFact:"Japanese 手術(しゅじゅつ) technology is world-class. Robotic surgery (ロボット手術(しゅじゅつ)), endoscopic techniques, and organ transplants are performed at advanced levels. Before 手術(しゅじゅつ), doctors explain risks in detail (インフォームドコンセント). Patients often bring good luck charms (お守(まも)り) for surgical success."},

    {type:"teach", trg:"回復(かいふく)", src:"recovery / recuperation", pos:"noun", gender:null,
     note:"回復(かいふく)する = to recover. 回復期(かいふくき) = recovery period.\n体力(たいりょく)が回復(かいふく)する = stamina recovers.",
     example:"A: 病気(びょうき)から回復(かいふく)しました。\nB: おめでとうございます。無理(むり)しないでくださいね。\nA: それは興味深(きょうみぶか)いですね。\nB: ええ、日本(にほん)ならではの特徴(とくちょう)だと思(おも)います。\nA: 海外(かいがい)ではどうなのでしょうか？\nB: 国(くに)によって異(こと)なりますが、共通(きょうつう)する部分(ぶぶん)もあります。",
     exampleSrc:"A: I recovered from my illness.\nB: Congratulations. Please do not overdo it.\nA: That is interesting.\nB: Yes, I think it is a characteristic unique to Japan.\nA: I wonder how it is overseas?\nB: It differs by country, but there are also common aspects.",
     funFact:"Japanese 回復(かいふく) culture emphasizes rest and patience. The phrase ご自愛(じあい) (take care of yourself) and お大事(だいじ)に (take care) express concern for someone's 回復(かいふく). Japanese hospitals keep patients longer than Western ones for complete 回復(かいふく). Convalescence is valued, not rushed."},

    {type:"teach", trg:"予防(よぼう)", src:"prevention", pos:"noun", gender:null,
     note:"予防接種(よぼうせっしゅ) = vaccination. 予防医学(よぼういがく) = preventive medicine.\n予防(よぼう)する = to prevent.",
     example:"A: 予防(よぼう)が一番(いちばん)大事(だいじ)です。\nB: 運動(うんどう)と栄養(えいよう)バランスですね。\nA: その経験(けいけん)から何(なに)を学(まな)びましたか？\nB: 事前(じぜん)の準備(じゅんび)がいかに重要(じゅうよう)かを学(まな)びました。\nA: 具体的(ぐたいてき)にどんな準備(じゅんび)をすべきですか？\nB: まず情報収集(じょうほうしゅうしゅう)をして、それから計画(けいかく)を練(ね)ることが大事(だいじ)です。",
     exampleSrc:"A: Prevention is most important.\nB: Exercise and nutritional balance.\nA: What did you learn from that experience?\nB: I learned how important advance preparation is.\nA: What kind of preparation should be done specifically?\nB: First, gather information, then it is important to develop a plan.",
     funFact:"Japan's healthcare philosophy emphasizes 予防(よぼう) over treatment. Annual health checkups, balanced school lunches (給食(きゅうしょく)), and public health campaigns reflect this. 予防接種(よぼうせっしゅ) (vaccinations) follow a national schedule. Japan's preventive approach contributes to low healthcare costs despite an aging population."},

    {type:"teach", trg:"公的医療(こうてきいりょう)", src:"public healthcare / medical treatment", pos:"noun", gender:null,
     note:"公的保険(こうてきほけん) = public health insurance.\n日本(にほん)の医療制度(いりょうせいど) = Japan's medical system.",
     example:"A: 日本(にほん)の国民健康保険(こくみんけんこうほけん)制度(せいど)は優(すぐ)れています。\nB: 誰(だれ)でも病院(びょういん)に行(い)けますね。\nA: 今後(こんご)の展望(てんぼう)についてお聞(き)かせください。\nB: 今後(こんご)はさらに国際化(こくさいか)が進(すす)むと思(おも)います。\nA: それに対(たい)してどのような対策(たいさく)が必要(ひつよう)ですか？\nB: 語学力(ごがくりょく)の向上(こうじょう)と異文化理解(いぶんかりかい)が不可欠(ふかけつ)です。",
     exampleSrc:"A: Japan's universal health insurance system is excellent.\nB: Anyone can go to the hospital.\nA: Please tell me about future prospects.\nB: I think internationalization will progress further going forward.\nA: What measures are needed for that?\nB: Improving language skills and cross-cultural understanding are essential.",
     funFact:"Japan has universal health coverage (国民皆保険(こくみんかいほけん)) since 1961. Everyone pays into insurance and patients cover 30% of costs (10% for elderly). This system keeps medical bankruptcies near zero, unlike the US. However, the aging population strains the system's financial sustainability."},

    {type:"teach", trg:"免疫(めんえき)", src:"immunity / immune system", pos:"noun", gender:null,
     note:"免疫力(めんえきりょく) = immune strength.\n免疫(めんえき)を高(たか)める = to boost immunity.",
     example:"A: 免疫力(めんえきりょく)を高(たか)めることが大切(たいせつ)です。\nB: 睡眠(すいみん)と栄養(えいよう)が鍵(かぎ)ですね。\nA: それは予想外(よそうがい)の結果(けっか)ですね。\nB: はい、私(わたし)も驚(おどろ)きました。原因(げんいん)を調(しら)べています。\nA: いつごろ原因(げんいん)が分(わ)かりそうですか？\nB: 今週中(こんしゅうちゅう)には分析(ぶんせき)結果(けっか)が出(で)る予定(よてい)です。",
     exampleSrc:"A: Boosting immunity is important.\nB: Sleep and nutrition are key.\nA: That is an unexpected result.\nB: Yes, I was surprised too. We are investigating the cause.\nA: When do you think you will know the cause?\nB: The analysis results are expected to come out by the end of this week.",
     funFact:"免疫(めんえき) became a household word during COVID. Japanese health shows (健康番組(けんこうばんぐみ)) frequently discuss 免疫力(めんえきりょく) boosting through food, exercise, and sleep. Traditional remedies like green tea, natto, and miso are promoted for 免疫(めんえき) benefits. Japan's flu vaccination culture expanded to COVID boosters."},

    {type:"teach", trg:"感染症(かんせんしょう)", src:"infectious disease", pos:"noun", gender:null,
     note:"感染(かんせん)する = to be infected.\n感染拡大(かんせんかくだい) = spread of infection.",
     example:"A: 感染症(かんせんしょう)の予防(よぼう)には手洗(てあら)いが大事(だいじ)です。\nB: マスクも効果的(こうかてき)ですね。\nA: その分野(ぶんや)についてどのくらいご存(ぞん)じですか？\nB: 専門(せんもん)ではありませんが、基本的(きほんてき)な知識(ちしき)はあります。\nA: もっと詳(くわ)しく知(し)りたい場合(ばあい)は、どうすればいいですか？\nB: 専門家(せんもんか)に相談(そうだん)するか、関連(かんれん)の書籍(しょせき)を読(よ)むことをお勧(すす)めします。",
     exampleSrc:"A: Handwashing is important for infectious disease prevention.\nB: Masks are also effective.\nA: How much do you know about that field?\nB: It is not my specialty, but I have basic knowledge.\nA: If I want to know more in detail, what should I do?\nB: I recommend consulting a specialist or reading related books.",
     funFact:"Japan's response to 感染症(かんせんしょう) reflects cultural habits: mask-wearing, shoe removal, frequent handwashing. The 手洗(てあら)い stations at school and restaurant entrances predate COVID. Japan's relatively low COVID death rate was partly attributed to these existing hygiene practices and high mask compliance."},

    {type:"teach", trg:"高齢者(こうれいしゃ)", src:"elderly person / senior citizen", pos:"noun", gender:null,
     note:"高齢者(こうれいしゃ)福祉(ふくし) = elderly welfare.\n高齢化(こうれいか) = aging (of society).",
     example:"A: 高齢者(こうれいしゃ)の介護(かいご)問題(もんだい)が増(ふ)えています。\nB: 介護保険制度(かいごほけんせいど)がありますが、足(た)りません。\nA: どのような影響(えいきょう)がありましたか？\nB: 社会全体(しゃかいぜんたい)に大(おお)きな影響(えいきょう)を与(あた)えました。\nA: 良(よ)い影響(えいきょう)ですか、悪(わる)い影響(えいきょう)ですか？\nB: 両方(りょうほう)あります。メリットもデメリットもあります。",
     exampleSrc:"A: Elderly care problems are increasing.\nB: There is care insurance, but it is not enough.\nA: What kind of impact was there?\nB: It had a big impact on society as a whole.\nA: A good impact or a bad impact?\nB: Both. There are both merits and demerits.",
     funFact:"高齢者(こうれいしゃ) make up nearly 30% of Japan's population. 介護(かいご) (eldercare) is a massive social challenge. Japan created 介護保険(かいごほけん) (care insurance) in 2000 but faces worker shortages. Care robots, community support, and 地域包括(ちいきほうかつ)ケア (community-based integrated care) are innovative solutions being developed."},

    {type:"teach", trg:"精神的(せいしんてき)", src:"mental / psychological", pos:"adj", gender:null,
     note:"Na-adjective. 精神的(せいしんてき)健康(けんこう) = mental health.\n精神科(せいしんか) = psychiatry.",
     example:"A: 精神的(せいしんてき)健康(けんこう)も大事(だいじ)です。\nB: そうですね。体(からだ)だけではありません。\nA: 具体的(ぐたいてき)にはどういうことですか？\nB: つまり、状況(じょうきょう)に応(おう)じて対応(たいおう)を変(か)える必要(ひつよう)があるということです。\nA: なるほど。それは確(たし)かにそうですね。\nB: ええ、柔軟(じゅうなん)な対応(たいおう)が大切(たいせつ)だと思(おも)います。",
     exampleSrc:"A: Mental health is important too.\nB: Yes. It is not just the body.\nA: What do you mean specifically?\nB: I mean we need to change our approach depending on the situation.\nA: I see. That is certainly true.\nB: Yes, I think flexible response is important.",
     funFact:"精神的(せいしんてき) health awareness is growing in Japan. Historically, mental health carried stigma. Now, メンタルヘルス (mental health) programs are mandatory in workplaces. ストレスチェック (stress checks) became legally required in 2015. Counseling services are expanding, though cultural barriers to seeking help persist."},

    {type:"teach", trg:"治療(ちりょう)", src:"medical treatment / therapy", pos:"noun", gender:null,
     note:"治療(ちりょう)する = to treat. 治療法(ちりょうほう) = treatment method.\n治療費(ちりょうひ) = medical expenses.",
     example:"A: 治療(ちりょう)はどのくらいかかりますか？\nB: 保険適用(ほけんてきよう)なので、三割(さんわり)負担(ふたん)です。\nA: それについてもう少(すこ)し詳(くわ)しく教(おし)えてください。\nB: 例(たと)えば、最近(さいきん)の事例(じれい)を見(み)ると、変化(へんか)が激(はげ)しいです。\nA: そうですか。どう対処(たいしょ)すればいいでしょうか。\nB: まず現状(げんじょう)を把握(はあく)してから、計画(けいかく)を立(た)てましょう。",
     exampleSrc:"A: How long will treatment take?\nB: Insurance covers it, so you pay 30%.\nA: Please tell me more about that.\nB: For example, looking at recent cases, the changes are dramatic.\nA: Is that so? How should we handle it?\nB: Let's first grasp the current situation, then make a plan.",
     funFact:"Japanese 治療(ちりょう) combines Western medicine with traditional approaches. 漢方薬(かんぽうやく) (Chinese herbal medicine) is covered by health insurance. Acupuncture (鍼治療(はりちりょう)) and moxibustion (灸(きゅう)) are recognized 治療(ちりょう) methods. This integrative approach gives patients more 治療(ちりょう) options than in many Western countries."},

    {type:"teach", trg:"再生医療(さいせいいりょう)", src:"regenerative medicine", pos:"noun", gender:null,
     note:"iPS細胞(さいぼう) = iPS cells (induced pluripotent stem cells).\n再生医療(さいせいいりょう)研究(けんきゅう) = regenerative medicine research.",
     example:"A: 日本(にほん)は再生医療(さいせいいりょう)の研究(けんきゅう)が進(すす)んでいます。\nB: 山中(やまなか)教授(きょうじゅ)のiPS細胞(さいぼう)が有名(ゆうめい)ですね。\nA: どのような方法(ほうほう)がありますか？\nB: いくつかの選択肢(せんたくし)があります。一番(いちばん)効果的(こうかてき)なのは実践(じっせん)です。\nA: 実践(じっせん)というのは、具体的(ぐたいてき)に何(なに)をすればいいですか？\nB: 毎日(まいにち)少(すこ)しずつ取(と)り組(く)むことが重要(じゅうよう)です。",
     exampleSrc:"A: Japan is advanced in regenerative medicine research.\nB: Professor Yamanaka's iPS cells are famous.\nA: What kinds of methods are there?\nB: There are several options. The most effective is practice.\nA: What specifically should we do in practice?\nB: It is important to work on it a little each day.",
     funFact:"再生医療(さいせいいりょう) is a Japanese research strength. Yamanaka Shinya won the 2012 Nobel Prize for iPS cells. Japan approved the world's first iPS cell treatment for age-related macular degeneration. The government heavily funds 再生医療(さいせいいりょう) research, aiming to lead this medical revolution."},

    // Quiz steps
    {type:"mc", q:"Japan's health insurance covers what percentage for patients?",
     opts:["30% (patient pays), 70% covered","50% each","100% free","10% patient pays"],
     ans:"30% (patient pays), 70% covered",
     hint:"Universal coverage since 1961 means everyone p... into insurance and patients cover a minority of costs."},

    {type:"match", pairs:[
      {trg:"診断(しんだん)", src:"diagnosis"},
      {trg:"手術(しゅじゅつ)", src:"surgery"},
      {trg:"回復(かいふく)", src:"recovery"},
      {trg:"予防(よぼう)", src:"prevention"},
      {trg:"治療(ちりょう)", src:"treatment"}
    ]},

    {type:"fb", s:"手術(しゅじゅつ)は{1}しました。お大事(だいじ)に。",
     a:["成功(せいこう)"],
     opts:["成功(せいこう)","回復(かいふく)","診断(しんだん)","予防(よぼう)"],
     hint:"The surgery went well. This verb means 'to succeed.'",
     sSrc:"The surgery {1}. Take care."},

    {type:"mc", q:"iPS細胞(さいぼう) were developed by:",
     opts:["Yamanaka Shinya (Nobel Prize 2012)","Watson and Crick","Marie Curie","Alexander Fleming"],
     ans:"Yamanaka Shinya (Nobel Prize 2012)",
     hint:"This Japanese scientist's discovery of induced pluripotent stem cells revolutionized regenerative medicine."},

    {type:"fb", s:"{1}力(りょく)を高(たか)めるには睡眠(すいみん)が大事(だいじ)です。",
     a:["免疫(めんえき)"],
     opts:["免疫(めんえき)","精神(せいしん)","回復(かいふく)","予防(よぼう)"],
     hint:"Sleep is important for boosting your immune strength.",
     sSrc:"{1} strength is boosted by sleep."},

    {type:"mc", q:"ストレスチェック in Japanese workplaces became:",
     opts:["Legally required in 2015","Voluntary forever","Only for hospitals","Only for schools"],
     ans:"Legally required in 2015",
     hint:"All companies with 50+ employees must conduct annual stress checks for employee mental health."},

    {type:"match", pairs:[
      {trg:"処方箋(しょほうせん)", src:"prescription"},
      {trg:"免疫(めんえき)", src:"immunity"},
      {trg:"感染症(かんせんしょう)", src:"infectious disease"},
      {trg:"高齢者(こうれいしゃ)", src:"elderly person"},
      {trg:"再生医療(さいせいいりょう)", src:"regenerative medicine"}
    ]},

    {type:"fb", s:"{1}的(てき)健康(けんこう)も大事(だいじ)です。体(からだ)だけではありません。",
     a:["精神(せいしん)"],
     opts:["精神(せいしん)","診断(しんだん)","治療(ちりょう)","予防(よぼう)"],
     hint:"Mental health matters too, not just physical health.",
     sSrc:"{1} health is also important. Not just the body."}
  ]
};
export default BATCH7_L1;
