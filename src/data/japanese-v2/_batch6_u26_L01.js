// Batch 6 – Unit 26 (B2.1 News & Media): Disasters & Emergency Response
const BATCH6_L1 = {
  id:"jav2_u26l_b6_1", title:"災害(さいがい)と防災(ぼうさい)", icon:"🌊", xp:15, board:true,
  steps:[
    {type:"intro", title:"災害(さいがい)と防災(ぼうさい)",
     desc:"Learn critical vocabulary for natural disasters and emergency preparedness. Japan is one of the most disaster-prone countries, and this vocabulary appears constantly in news and daily life.",
     goals:["Name types of natural disasters","Understand emergency broadcast vocabulary","Discuss disaster preparedness"]},

    {type:"teach", trg:"災害(さいがい)", src:"disaster / calamity", pos:"noun", gender:null,
     note:"自然(しぜん)災害(さいがい) = natural disaster.\n災害(さいがい)対策(たいさく) = disaster countermeasures.",
     example:"A: 日本(にほん)は自然(しぜん)災害(さいがい)が多(おお)い国(くに)です。\nB: そうですね。地震(じしん)、台風(たいふう)、津波(つなみ)などがあります。\nA: その経験(けいけん)から何(なに)を学(まな)びましたか？\nB: 事前(じぜん)の準備(じゅんび)がいかに重要(じゅうよう)かを学(まな)びました。\nA: 具体的(ぐたいてき)にどんな準備(じゅんび)をすべきですか？\nB: まず情報収集(じょうほうしゅうしゅう)をして、それから計画(けいかく)を練(ね)ることが大事(だいじ)です。",
     exampleSrc:"A: Japan is a country with many natural disasters.\nB: Yes. There are earthquakes, typhoons, tsunamis, and more.\nA: What did you learn from that experience?\nB: I learned how important advance preparation is.\nA: What kind of preparation should be done specifically?\nB: First, gather information, then it is important to develop a plan.",
     funFact:"災害(さいがい) combines 災 (disaster) and 害 (harm). Japan experiences earthquakes, typhoons, volcanic eruptions, floods, and landslides regularly. The Great East Japan Earthquake (2011) and subsequent tsunami killed over 15,000 people and fundamentally changed disaster preparedness nationwide."},

    {type:"teach", trg:"地震(じしん)", src:"earthquake", pos:"noun", gender:null,
     note:"大(おお)きい地震(じしん) = large earthquake.\n地震(じしん)速報(そくほう) = earthquake early warning.",
     example:"A: 昨日(きのう)の夜(よる)地震(じしん)がありましたね。\nB: はい、震度(しんど)三(さん)でした。\nA: 今後(こんご)の展望(てんぼう)についてお聞(き)かせください。\nB: 今後(こんご)はさらに国際化(こくさいか)が進(すす)むと思(おも)います。\nA: それに対(たい)してどのような対策(たいさく)が必要(ひつよう)ですか？\nB: 語学力(ごがくりょく)の向上(こうじょう)と異文化理解(いぶんかりかい)が不可欠(ふかけつ)です。",
     exampleSrc:"A: There was an earthquake last night, wasn't there?\nB: Yes, it was intensity 3.\nA: Please tell me about future prospects.\nB: I think internationalization will progress further going forward.\nA: What measures are needed for that?\nB: Improving language skills and cross-cultural understanding are essential.",
     funFact:"Japan experiences about 1,500 noticeable earthquakes per year. The Japanese seismic intensity scale (震度(しんど)) ranges from 0 to 7. Earthquake early warning systems (緊急(きんきゅう)地震(じしん)速報(そくほう)) alert phones seconds before shaking arrives. The distinctive alarm sound is known to every Japanese resident."},

    {type:"teach", trg:"避難(ひなん)", src:"evacuation / taking refuge", pos:"noun", gender:null,
     note:"避難(ひなん)する = to evacuate.\n避難所(ひなんじょ) = evacuation shelter.",
     example:"A: 津波(つなみ)警報(けいほう)が出(で)ました。すぐに避難(ひなん)してください。\nB: 最寄(もよ)りの避難所(ひなんじょ)はどこですか？\nA: それは予想外(よそうがい)の結果(けっか)ですね。\nB: はい、私(わたし)も驚(おどろ)きました。原因(げんいん)を調(しら)べています。\nA: いつごろ原因(げんいん)が分(わ)かりそうですか？\nB: 今週中(こんしゅうちゅう)には分析(ぶんせき)結果(けっか)が出(で)る予定(よてい)です。",
     exampleSrc:"A: A tsunami warning has been issued. Please evacuate immediately.\nB: Where is the nearest evacuation shelter?\nA: That is an unexpected result.\nB: Yes, I was surprised too. We are investigating the cause.\nA: When do you think you will know the cause?\nB: The analysis results are expected to come out by the end of this week.",
     funFact:"避難(ひなん) is one of the most critical words in Japanese emergency vocabulary. 避難(ひなん)経路(けいろ) (evacuation route), 避難(ひなん)訓練(くんれん) (evacuation drill), and 避難(ひなん)具(ぐ) (emergency supplies) are all essential terms. Schools conduct 避難(ひなん)訓練(くんれん) multiple times per year. Every community has designated 避難所(ひなんじょ)."},

    {type:"teach", trg:"台風(たいふう)", src:"typhoon", pos:"noun", gender:null,
     note:"台風(たいふう)が来(く)る = a typhoon is coming.\n台風(たいふう)の目(め) = the eye of the typhoon.",
     example:"A: 明日(あした)大型(おおがた)の台風(たいふう)が近(ちか)づいています。\nB: 外出(がいしゅつ)を控(ひか)えましょう。\nA: その分野(ぶんや)についてどのくらいご存(ぞん)じですか？\nB: 専門(せんもん)ではありませんが、基本的(きほんてき)な知識(ちしき)はあります。\nA: もっと詳(くわ)しく知(し)りたい場合(ばあい)は、どうすればいいですか？\nB: 専門家(せんもんか)に相談(そうだん)するか、関連(かんれん)の書籍(しょせき)を読(よ)むことをお勧(すす)めします。",
     exampleSrc:"A: A large typhoon is approaching tomorrow.\nB: Let us refrain from going out.\nA: How much do you know about that field?\nB: It is not my specialty, but I have basic knowledge.\nA: If I want to know more in detail, what should I do?\nB: I recommend consulting a specialist or reading related books.",
     funFact:"Japan typically experiences 10-15 typhoons per year, with the season peaking August to October. Typhoons are numbered: 台風(たいふう)一号(いちごう) (Typhoon No. 1). The Japan Meteorological Agency (気象庁(きしょうちょう)) tracks and names them. Super typhoons can bring winds over 200 km/h and massive rainfall."},

    {type:"teach", trg:"警報(けいほう)", src:"warning / alert", pos:"noun", gender:null,
     note:"大雨(おおあめ)警報(けいほう) = heavy rain warning.\n緊急(きんきゅう)警報(けいほう) = emergency alert.",
     example:"A: 大雨(おおあめ)警報(けいほう)が発表(はっぴょう)されました。\nB: 今日(きょう)は家(いえ)にいたほうがいいですね。\nA: どのような影響(えいきょう)がありましたか？\nB: 社会全体(しゃかいぜんたい)に大(おお)きな影響(えいきょう)を与(あた)えました。\nA: 良(よ)い影響(えいきょう)ですか、悪(わる)い影響(えいきょう)ですか？\nB: 両方(りょうほう)あります。メリットもデメリットもあります。",
     exampleSrc:"A: A heavy rain warning has been issued.\nB: We should stay home today.\nA: What kind of impact was there?\nB: It had a big impact on society as a whole.\nA: A good impact or a bad impact?\nB: Both. There are both merits and demerits.",
     funFact:"警報(けいほう) is more serious than 注意報(ちゅういほう) (advisory). The hierarchy: 注意報(ちゅういほう) (caution) < 警報(けいほう) (warning) < 特別(とくべつ)警報(けいほう) (special warning, most severe). When 特別(とくべつ)警報(けいほう) is issued, it means 'once in decades' level danger. Schools close automatically when 警報(けいほう) is issued."},

    {type:"mc", q:"避難所(ひなんじょ) is:", opts:["An evacuation shelter","A hospital","A police station","A fire station"], ans:"An evacuation shelter",
     hint:"This is the designated safe place to go during emergencies."},

    {type:"teach", trg:"洪水(こうずい)", src:"flood", pos:"noun", gender:null,
     note:"洪水(こうずい)警報(けいほう) = flood warning.\n洪水(こうずい)ハザードマップ = flood hazard map.",
     example:"A: 大雨(おおあめ)で川(かわ)が氾濫(はんらん)して洪水(こうずい)になりました。\nB: 被害(ひがい)はどのくらいですか？\nA: 具体的(ぐたいてき)にはどういうことですか？\nB: つまり、状況(じょうきょう)に応(おう)じて対応(たいおう)を変(か)える必要(ひつよう)があるということです。\nA: なるほど。それは確(たし)かにそうですね。\nB: ええ、柔軟(じゅうなん)な対応(たいおう)が大切(たいせつ)だと思(おも)います。",
     exampleSrc:"A: Heavy rain caused the river to overflow and flood.\nB: How much damage is there?\nA: What do you mean specifically?\nB: I mean we need to change our approach depending on the situation.\nA: I see. That is certainly true.\nB: Yes, I think flexible response is important.",
     funFact:"洪水(こうずい) is increasingly common due to climate change. The term ゲリラ豪雨(ごうう) (guerrilla downpour) describes sudden, intense rainfall that overwhelms drainage systems. Japanese cities use 地下(ちか)貯水槽(ちょすいそう) (underground water tanks) and 遊水池(ゆうすいち) (retention basins) as countermeasures."},

    {type:"teach", trg:"緊急(きんきゅう)", src:"emergency / urgent", pos:"noun", gender:null,
     note:"緊急(きんきゅう)事態(じたい) = state of emergency.\n緊急(きんきゅう)連絡(れんらく) = emergency contact.",
     example:"A: 緊急(きんきゅう)の場合(ばあい)は119番(ばん)に電話(でんわ)してください。\nB: わかりました。携帯(けいたい)に番号(ばんごう)を保存(ほぞん)しました。\nA: それについてもう少(すこ)し詳(くわ)しく教(おし)えてください。\nB: 例(たと)えば、最近(さいきん)の事例(じれい)を見(み)ると、変化(へんか)が激(はげ)しいです。\nA: そうですか。どう対処(たいしょ)すればいいでしょうか。\nB: まず現状(げんじょう)を把握(はあく)してから、計画(けいかく)を立(た)てましょう。",
     exampleSrc:"A: In an emergency, please call 119.\nB: Understood. I saved the number on my phone.\nA: Please tell me more about that.\nB: For example, looking at recent cases, the changes are dramatic.\nA: Is that so? How should we handle it?\nB: Let's first grasp the current situation, then make a plan.",
     funFact:"緊急(きんきゅう) combines 緊 (tense/tight) and 急 (urgent/hurry). 緊急事態(きんきゅうじたい)宣言(せんげん) (state of emergency declaration) gained widespread recognition during COVID-19. Japan's emergency broadcast system sends 緊急(きんきゅう)速報(そくほう) (emergency alerts) directly to all phones in affected areas."},

    {type:"teach", trg:"防災(ぼうさい)", src:"disaster prevention", pos:"noun", gender:null,
     note:"防災(ぼうさい)訓練(くんれん) = disaster drill.\n防災(ぼうさい)グッズ = emergency supplies.",
     example:"A: 防災(ぼうさい)グッズは準備(じゅんび)していますか？\nB: はい、水(みず)と食料(しょくりょう)を三日分(みっかぶん)用意(ようい)しています。\nA: どのような方法(ほうほう)がありますか？\nB: いくつかの選択肢(せんたくし)があります。一番(いちばん)効果的(こうかてき)なのは実践(じっせん)です。\nA: 実践(じっせん)というのは、具体的(ぐたいてき)に何(なに)をすればいいですか？\nB: 毎日(まいにち)少(すこ)しずつ取(と)り組(く)むことが重要(じゅうよう)です。",
     exampleSrc:"A: Have you prepared emergency supplies?\nB: Yes, I have water and food for three days.\nA: What kinds of methods are there?\nB: There are several options. The most effective is practice.\nA: What specifically should we do in practice?\nB: It is important to work on it a little each day.",
     funFact:"Japan leads the world in 防災(ぼうさい) (防災). Every September 1st is 防災(ぼうさい)の日(ひ) (Disaster Prevention Day), commemorating the 1923 Great Kanto Earthquake. Schools, workplaces, and communities hold regular 防災(ぼうさい)訓練(くんれん) (disaster drills). Japanese homes keep 防災(ぼうさい)袋(ぶくろ) (emergency bags) ready."},

    {type:"teach", trg:"復興(ふっこう)", src:"reconstruction / recovery", pos:"noun", gender:null,
     note:"復興(ふっこう)する = to reconstruct.\n災害(さいがい)復興(ふっこう) = disaster recovery.",
     example:"A: 被災地(ひさいち)の復興(ふっこう)を応援(おうえん)しましょう。\nB: はい、募金活動(ぼきんかつどう)に参加(さんか)します。\nA: それはいつごろから始(はじ)まったのですか？\nB: 数年前(すうねんまえ)からですが、最近(さいきん)特(とく)に注目(ちゅうもく)されています。\nA: 今後(こんご)どうなると思(おも)いますか？\nB: さらに発展(はってん)すると予想(よそう)されています。",
     exampleSrc:"A: Let us support the reconstruction of disaster areas.\nB: Yes, I will participate in fundraising activities.\nA: When did that start?\nB: It started a few years ago, but it has been getting particular attention recently.\nA: What do you think will happen going forward?\nB: It is expected to develop further.",
     funFact:"復興(ふっこう) became a national mission word after 2011. 復興庁(ふっこうちょう) (Reconstruction Agency) was established as a government ministry. がんばろう東北(とうほく) (stay strong, Tohoku) and 復興(ふっこう)応援(おうえん) (reconstruction support) rallied the nation. Products from disaster areas are bought as 復興(ふっこう)応援(おうえん) to support local economies."},

    {type:"fb", s:"津波(つなみ)警報(けいほう)が出(で)ました。すぐに{1}してください。\n(A tsunami warning was issued. Please evacuate immediately.)", a:"ひなん", opts:["ひなん","ぼうさい","ふっこう","こうしょう"], sSrc:"A tsunami warning was issued. Please evacuate immediately.",
     hint:"The verb meaning to take refuge or evacuate to safety."},

    {type:"teach", trg:"備(そな)える", src:"to prepare (for) / to equip", pos:"verb", gender:null,
     note:"Group 2 verb. 地震(じしん)に備(そな)える = to prepare for earthquakes.",
     example:"A: 地震(じしん)に備(そな)えて家具(かぐ)を固定(こてい)しましょう。\nB: 耐震(たいしん)マットを買(か)いました。\nA: 何(なに)か問題(もんだい)はありませんでしたか？\nB: いくつか課題(かだい)がありましたが、解決(かいけつ)しました。\nA: どのように解決(かいけつ)したのですか？\nB: チーム全体(ぜんたい)で話(はな)し合(あ)って、最善(さいぜん)の方法(ほうほう)を見(み)つけました。",
     exampleSrc:"A: Let us secure furniture in preparation for earthquakes.\nB: I bought earthquake-proofing mats.\nA: Were there any problems?\nB: There were some issues, but we resolved them.\nA: How did you resolve them?\nB: We discussed it as a whole team and found the best method.",
     funFact:"備(そな)えあれば憂(うれ)いなし (if you prepare, there is no worry) is a famous Japanese proverb. 備(そな)える culture drives Japan's disaster readiness: earthquake kits, emergency water, flashlights, and portable radios. The word combines 備 (prepare) with the concept of having supplies ready before disaster strikes."},

    {type:"mc", q:"防災(ぼうさい)グッズ are:", opts:["Sports equipment","Emergency supplies and equipment","Office supplies","Cooking tools"], ans:"Emergency supplies and equipment",
     hint:"防災(ぼうさい) means disaster prevention, and グッズ means goods/s...."},

    {type:"match", pairs:[
      {trg:"地震(じしん)", src:"earthquake"},
      {trg:"台風(たいふう)", src:"typhoon"},
      {trg:"洪水(こうずい)", src:"flood"},
      {trg:"避難(ひなん)", src:"evacuation"},
      {trg:"防災(ぼうさい)", src:"disaster prevention"}
    ]},

    {type:"fb", s:"地震(じしん)に{1}て家具(かぐ)を固定(こてい)しましょう。\n(Let us secure furniture in preparation for earthquakes.)", a:"そなえ", opts:["そなえ","なれ","あきらめ","そうだんし"], sSrc:"Let us secure furniture in preparation for earthquakes.",
     hint:"The て-form of the verb meaning to prepare for something in advance."},

    {type:"mc", q:"復興(ふっこう) describes:", opts:["Predicting earthquakes","Evacuating to safety","Rebuilding and recovery after disaster","Preventing disasters"], ans:"Rebuilding and recovery after disaster",
     hint:"This word refers to the long-term process of reconstruction."}
  ,{type:"match",pairs:[{trg:"災害(さいがい)",src:"disaster / calamity"},{trg:"警報(けいほう)",src:"warning / alert"},{trg:"緊急(きんきゅう)",src:"emergency / urgent"},{trg:"復興(ふっこう)",src:"reconstruction / recovery"},{trg:"備(そな)える",src:"to prepare (for) / to equip"}]},
  {type:"fb", s:"昨夜(さくや)、大(おお)きな{1}がありました。", a:["地震(じしん)"], opts:["地震(じしん)","台風(たいふう)","避難(ひなん)","警報(けいほう)"], hint:"The natural phenomenon caused by tectonic plate movement under the ground.", sSrc:"There was a large {1} last night."}
]
};
export default BATCH6_L1;
