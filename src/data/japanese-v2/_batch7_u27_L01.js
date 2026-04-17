// Batch 7 – Unit 27 (B2.1 Environment): Environmental Science Vocabulary
const BATCH7_L1 = {
  id:"jav2_u27l_b7_1", title:"かんきょうかがく", icon:"🌍", xp:15, board:true,
  steps:[
    {type:"intro", title:"かんきょうかがく",
     desc:"Learn environmental science vocabulary for discussing ecological issues, climate change, and conservation. These JLPT N2 terms appear in news, policy discussions, and academic contexts.",
     goals:["Discuss climate and environmental topics","Use scientific environmental terminology","Express opinions on ecological issues"]},

    {type:"teach", trg:"おんだんか", src:"global warming", pos:"noun", gender:null,
     note:"ちきゅうおんだんか = global warming.\nおんだんかたいさく = warming countermeasures.",
     example:"A: ちきゅうおんだんかがしんこくです。\nB: CO2はいしゅつをへらすひつようがあります。\nA: 何(なに)か良(よ)い方法(ほうほう)はありませんか？\nB: 一(ひと)つ提案(ていあん)があります。段階的(だんかいてき)に進(すす)めてはどうでしょうか。\nA: 段階的(だんかいてき)に、というのはどういうことですか？\nB: まず小規模(しょうきぼ)で試(ため)してから、徐々(じょじょ)に拡大(かくだい)するということです。",
     exampleSrc:"A: Global warming is serious.\nB: We need to reduce CO2 emissions.\nA: Is there a good method?\nB: I have one suggestion. How about proceeding step by step?\nA: What do you mean by step by step?\nB: It means trying it on a small scale first, then gradually expanding.",
     funFact:"おんだんか (温暖化) combines 温 (warm) and 暖 (warm) with 化 (becoming). Japan committed to carbon neutrality by 2050. Summer temperatures in Tokyo now regularly exceed 35 degrees. 猛暑日 (もうしょび, extreme heat days) have doubled since the 1990s."},

    {type:"teach", trg:"はいしゅつ", src:"emission / discharge", pos:"noun", gender:null,
     note:"はいしゅつする = to emit. CO2はいしゅつりょう = CO2 emissions.\nはいしゅつきせい = emission regulations.",
     example:"A: はいしゅつりょうをさくげんしなければなりません。\nB: さいせいかのうエネルギーがかぎです。\nA: この問題(もんだい)をどう思(おも)いますか？\nB: 複雑(ふくざつ)な問題(もんだい)ですが、解決策(かいけつさく)はあると思(おも)います。\nA: どのような解決策(かいけつさく)を考(かんが)えていますか？\nB: 関係者(かんけいしゃ)全員(ぜんいん)で話(はな)し合(あ)いの場(ば)を設(もう)けることが第一歩(だいいっぽ)です。",
     exampleSrc:"A: We must reduce emissions.\nB: Renewable energy is the key.\nA: What do you think about this issue?\nB: It is a complex issue, but I think there are solutions.\nA: What kind of solutions are you thinking of?\nB: The first step is to set up a discussion forum for all stakeholders.",
     funFact:"はいしゅつ (排出) is a key environmental term. Japan's はいしゅつ trading system and carbon tax discussions mirror global efforts. Industrial はいしゅつ regulations drove Japan to develop some of the world's cleanest factories. The Kyoto Protocol (京都議定書) was named after the city where it was adopted in 1997."},

    {type:"teach", trg:"さいせいかのう", src:"renewable", pos:"adj", gender:null,
     note:"さいせいかのうエネルギー = renewable energy.\nたいようこうはつでん = solar power.",
     example:"A: さいせいかのうエネルギーのわりあいをふやすべきです。\nB: たいようこうとふうりょくがゆうぼうです。\nA: 最近(さいきん)の動向(どうこう)はいかがですか？\nB: 全体的(ぜんたいてき)には好調(こうちょう)ですが、一部(いちぶ)課題(かだい)もあります。\nA: どのような課題(かだい)がありますか？\nB: 人材(じんざい)の確保(かくほ)が最(もっと)も大(おお)きな課題(かだい)です。",
     exampleSrc:"A: We should increase the share of renewable energy.\nB: Solar and wind are promising.\nA: How are the recent trends?\nB: Overall things are going well, but there are some issues.\nA: What kinds of issues are there?\nB: Securing human resources is the biggest challenge.",
     funFact:"さいせいかのう (再生可能) literally means 'can be reborn.' After the 2011 Fukushima nuclear disaster, Japan rapidly expanded さいせいかのうエネルギー. Solar panels now cover fields, hillsides, and rooftops. Japan aims for 36-38% renewable electricity by 2030."},

    {type:"teach", trg:"せいたいけい", src:"ecosystem", pos:"noun", gender:null,
     note:"せいたいけいをまもる = to protect the ecosystem.\nかいようせいたいけい = marine ecosystem.",
     example:"A: もりはだいじなせいたいけいです。\nB: たようなどうしょくぶつがくらしています。\nA: それは興味深(きょうみぶか)いですね。\nB: ええ、日本(にほん)ならではの特徴(とくちょう)だと思(おも)います。\nA: 海外(かいがい)ではどうなのでしょうか？\nB: 国(くに)によって異(こと)なりますが、共通(きょうつう)する部分(ぶぶん)もあります。",
     exampleSrc:"A: Forests are important ecosystems.\nB: Diverse plants and animals live there.\nA: That is interesting.\nB: Yes, I think it is a characteristic unique to Japan.\nA: I wonder how it is overseas?\nB: It differs by country, but there are also common aspects.",
     funFact:"せいたいけい (生態系) awareness is growing in Japan. Satoyama (里山, border zones between mountain and flatland) are celebrated as balanced せいたいけい. Japan's island geography creates unique ecosystems: the Ogasawara Islands are called 'the Galapagos of the East.' Endemic species preservation is a national priority."},

    {type:"teach", trg:"ぜつめつきぐしゅ", src:"endangered species", pos:"noun", gender:null,
     note:"ぜつめつ = extinction. きぐ = concern. しゅ = species.\nレッドリスト = Red List.",
     example:"A: にほんのぜつめつきぐしゅにはなにがいますか？\nB: トキやイリオモテヤマネコがいます。\nA: その経験(けいけん)から何(なに)を学(まな)びましたか？\nB: 事前(じぜん)の準備(じゅんび)がいかに重要(じゅうよう)かを学(まな)びました。\nA: 具体的(ぐたいてき)にどんな準備(じゅんび)をすべきですか？\nB: まず情報収集(じょうほうしゅうしゅう)をして、それから計画(けいかく)を練(ね)ることが大事(だいじ)です。",
     exampleSrc:"A: What endangered species are there in Japan?\nB: There are crested ibis and Iriomote wild cats.\nA: What did you learn from that experience?\nB: I learned how important advance preparation is.\nA: What kind of preparation should be done specifically?\nB: First, gather information, then it is important to develop a plan.",
     funFact:"Japan's most famous ぜつめつきぐしゅ success story is the トキ (crested ibis). Once extinct in the wild in Japan, breeding programs using Chinese birds have restored a wild population. The last Japanese-born トキ died in 2003, but reintroduced birds now number over 400 on Sado Island."},

    {type:"teach", trg:"しげん", src:"resources", pos:"noun", gender:null,
     note:"しぜんしげん = natural resources.\nしげんのむだづかい = waste of resources.",
     example:"A: にほんはしげんがすくないくにです。\nB: だからリサイクルがだいじなのですね。\nA: 今後(こんご)の展望(てんぼう)についてお聞(き)かせください。\nB: 今後(こんご)はさらに国際化(こくさいか)が進(すす)むと思(おも)います。\nA: それに対(たい)してどのような対策(たいさく)が必要(ひつよう)ですか？\nB: 語学力(ごがくりょく)の向上(こうじょう)と異文化理解(いぶんかりかい)が不可欠(ふかけつ)です。",
     exampleSrc:"A: Japan is a resource-poor country.\nB: That is why recycling is important.\nA: Please tell me about future prospects.\nB: I think internationalization will progress further going forward.\nA: What measures are needed for that?\nB: Improving language skills and cross-cultural understanding are essential.",
     funFact:"しげん (資源) scarcity shaped Japan's economy and culture. With few natural しげん, Japan imports 90%+ of energy and most raw materials. This vulnerability drove energy efficiency, recycling culture, and もったいない philosophy. Japan recycles about 20% of waste, with some categories reaching 98%."},

    {type:"teach", trg:"おせん", src:"pollution / contamination", pos:"noun", gender:null,
     note:"かんきょうおせん = environmental pollution.\nたいきおせん = air pollution. すいしつおせん = water pollution.",
     example:"A: かわのおせんがもんだいになっています。\nB: こうじょうからのはいすいがげんいんです。\nA: それは予想外(よそうがい)の結果(けっか)ですね。\nB: はい、私(わたし)も驚(おどろ)きました。原因(げんいん)を調(しら)べています。\nA: いつごろ原因(げんいん)が分(わ)かりそうですか？\nB: 今週中(こんしゅうちゅう)には分析(ぶんせき)結果(けっか)が出(で)る予定(よてい)です。",
     exampleSrc:"A: River pollution has become a problem.\nB: Factory wastewater is the cause.\nA: That is an unexpected result.\nB: Yes, I was surprised too. We are investigating the cause.\nA: When do you think you will know the cause?\nB: The analysis results are expected to come out by the end of this week.",
     funFact:"Japan's おせん (汚染) history includes devastating 公害 (こうがい, industrial pollution) events: Minamata disease (mercury), Itai-itai disease (cadmium). These tragedies led to some of the world's strictest environmental laws. Japan transformed from heavily polluted in the 1960s to remarkably clean today."},

    {type:"teach", trg:"しょりする", src:"to process / to dispose of / to treat", pos:"verb", gender:null,
     note:"ごみしょり = waste processing.\nはいすいしょり = wastewater treatment.",
     example:"A: プラスチックごみのしょりがかだいです。\nB: リサイクルりつをあげましょう。\nA: その分野(ぶんや)についてどのくらいご存(ぞん)じですか？\nB: 専門(せんもん)ではありませんが、基本的(きほんてき)な知識(ちしき)はあります。\nA: もっと詳(くわ)しく知(し)りたい場合(ばあい)は、どうすればいいですか？\nB: 専門家(せんもんか)に相談(そうだん)するか、関連(かんれん)の書籍(しょせき)を読(よ)むことをお勧(すす)めします。",
     exampleSrc:"A: Plastic waste processing is a challenge.\nB: Let us increase the recycling rate.\nA: How much do you know about that field?\nB: It is not my specialty, but I have basic knowledge.\nA: If I want to know more in detail, what should I do?\nB: I recommend consulting a specialist or reading related books.",
     funFact:"Japan's ごみしょり (waste processing) system is world-class. ごみ分別 (ぶんべつ, waste sorting) into 10+ categories is common. Some towns achieve near-zero waste. Incinerators generate electricity. However, Japan still burns most waste rather than recycling it, and plastic packaging remains excessive."},

    {type:"teach", trg:"ほぜん", src:"conservation / preservation", pos:"noun", gender:null,
     note:"しぜんほぜん = nature conservation.\nほぜんかつどう = conservation activities.",
     example:"A: このもりのほぜんかつどうにさんかしませんか？\nB: ぜひさんかしたいです。\nA: どのような影響(えいきょう)がありましたか？\nB: 社会全体(しゃかいぜんたい)に大(おお)きな影響(えいきょう)を与(あた)えました。\nA: 良(よ)い影響(えいきょう)ですか、悪(わる)い影響(えいきょう)ですか？\nB: 両方(りょうほう)あります。メリットもデメリットもあります。",
     exampleSrc:"A: Would you like to join conservation activities for this forest?\nB: I would love to participate.\nA: What kind of impact was there?\nB: It had a big impact on society as a whole.\nA: A good impact or a bad impact?\nB: Both. There are both merits and demerits.",
     funFact:"ほぜん (保全) reflects Japan's Shinto-rooted respect for nature. 鎮守の森 (ちんじゅのもり, shrine forests) have been preserved for centuries. Modern ほぜん efforts include 世界遺産 (UNESCO World Heritage) sites like Yakushima and Shirakami Mountains. Volunteer ほぜん activities are popular weekend activities."},

    {type:"teach", trg:"たんそちゅうりつ", src:"carbon neutral", pos:"noun", gender:null,
     note:"Also: カーボンニュートラル.\nたんそちゅうりつをめざす = to aim for carbon neutrality.",
     example:"A: 2050ねんまでにたんそちゅうりつをたっせいするもくひょうです。\nB: おおきなちょうせんですね。\nA: 具体的(ぐたいてき)にはどういうことですか？\nB: つまり、状況(じょうきょう)に応(おう)じて対応(たいおう)を変(か)える必要(ひつよう)があるということです。\nA: なるほど。それは確(たし)かにそうですね。\nB: ええ、柔軟(じゅうなん)な対応(たいおう)が大切(たいせつ)だと思(おも)います。",
     exampleSrc:"A: The goal is to achieve carbon neutrality by 2050.\nB: That is a big challenge.\nA: What do you mean specifically?\nB: I mean we need to change our approach depending on the situation.\nA: I see. That is certainly true.\nB: Yes, I think flexible response is important.",
     funFact:"たんそちゅうりつ (炭素中立) became a major policy goal when then-PM Suga declared it in 2020. Japanese companies are rapidly developing green technology: hydrogen fuel cells, ammonia combustion, carbon capture. The challenge is enormous for a country that relies heavily on fossil fuels post-Fukushima."},

    {type:"teach", trg:"じゅんかんがた", src:"circular (economy/system)", pos:"adj", gender:null,
     note:"じゅんかんがたしゃかい = circular society.\nじゅんかん = circulation/cycle.",
     example:"A: じゅんかんがたしゃかいをめざすべきです。\nB: つくる、つかう、リサイクル、のサイクルですね。\nA: それについてもう少(すこ)し詳(くわ)しく教(おし)えてください。\nB: 例(たと)えば、最近(さいきん)の事例(じれい)を見(み)ると、変化(へんか)が激(はげ)しいです。\nA: そうですか。どう対処(たいしょ)すればいいでしょうか。\nB: まず現状(げんじょう)を把握(はあく)してから、計画(けいかく)を立(た)てましょう。",
     exampleSrc:"A: We should aim for a circular society.\nB: The cycle of make, use, recycle.\nA: Please tell me more about that.\nB: For example, looking at recent cases, the changes are dramatic.\nA: Is that so? How should we handle it?\nB: Let's first grasp the current situation, then make a plan.",
     funFact:"じゅんかんがた (循環型) economy is a Japanese government priority. The concept builds on traditional もったいない values. Japan's 循環型社会形成推進基本法 (Circular Society Basic Law, 2000) was among the world's first such legislation. Reuse shops (リユースショップ) and repair cafes are growing."},

    {type:"teach", trg:"きこうへんどう", src:"climate change", pos:"noun", gender:null,
     note:"きこう = climate. へんどう = fluctuation/change.\nきこうへんどうたいさく = climate change measures.",
     example:"A: きこうへんどうのえいきょうがかくちにでています。\nB: きょくたんなきしょうがふえましたね。\nA: どのような方法(ほうほう)がありますか？\nB: いくつかの選択肢(せんたくし)があります。一番(いちばん)効果的(こうかてき)なのは実践(じっせん)です。\nA: 実践(じっせん)というのは、具体的(ぐたいてき)に何(なに)をすればいいですか？\nB: 毎日(まいにち)少(すこ)しずつ取(と)り組(く)むことが重要(じゅうよう)です。",
     exampleSrc:"A: Climate change effects are appearing everywhere.\nB: Extreme weather has increased.\nA: What kinds of methods are there?\nB: There are several options. The most effective is practice.\nA: What specifically should we do in practice?\nB: It is important to work on it a little each day.",
     funFact:"きこうへんどう (気候変動) impacts are visible in Japan: more powerful typhoons, record temperatures, unusual cherry blossom timing, and coral bleaching in Okinawa. The shift in 桜前線 (sakura front) is an emotional indicator for Japanese people, making きこうへんどう tangible and personal."},

    // Quiz steps
    {type:"mc", q:"Japan aims for carbon neutrality by:",
     opts:["2050","2030","2040","2100"],
     ans:"2050",
     hint:"This ambitious target was declared in 2020 and drives current energy and industrial policy."},

    {type:"match", pairs:[
      {trg:"おんだんか", src:"global warming"},
      {trg:"はいしゅつ", src:"emission"},
      {trg:"せいたいけい", src:"ecosystem"},
      {trg:"おせん", src:"pollution"},
      {trg:"ほぜん", src:"conservation"}
    ]},

    {type:"fb", s:"にほんは{1}がすくないくにです。だからリサイクルがだいじです。",
     a:["しげん"],
     opts:["しげん","おせん","ほぜん","はいしゅつ"],
     hint:"Japan lacks natural resources, importing most energy and raw materials.",
     sSrc:"Japan is a country with few {1}. That is why recycling is important."},

    {type:"mc", q:"Japan's Minamata disease was caused by:",
     opts:["Mercury pollution from a factory","Air pollution from cars","Nuclear radiation","Volcanic gases"],
     ans:"Mercury pollution from a factory",
     hint:"This devastating おせん event in the 1950s-60s led to strict environmental laws."},

    {type:"fb", s:"{1}エネルギーのわりあいをふやすべきです。",
     a:["さいせいかのう"],
     opts:["さいせいかのう","しぜん","かんきょう","たんそ"],
     hint:"Solar and wind power are types of this: energy that can be regenerated.",
     sSrc:"We should increase the share of {1} energy."},

    {type:"mc", q:"トキ (crested ibis) conservation in Japan:",
     opts:["Successfully restored a wild population from near-extinction","Failed completely","Was never attempted","Is still in early stages"],
     ans:"Successfully restored a wild population from near-extinction",
     hint:"Once extinct in the w... in Japan, breeding programs now sustain over 400 w... birds on Sado Island."},

    {type:"match", pairs:[
      {trg:"さいせいかのう", src:"renewable"},
      {trg:"しげん", src:"resources"},
      {trg:"たんそちゅうりつ", src:"carbon neutral"},
      {trg:"じゅんかんがた", src:"circular"},
      {trg:"きこうへんどう", src:"climate change"}
    ]},

    {type:"fb", s:"プラスチックごみの{1}がかだいです。",
     a:["しょり"],
     opts:["しょり","ほぜん","はいしゅつ","おせん"],
     hint:"Processing and disposing of plastic waste remains a challenge. This noun means 'processing.'",
     sSrc:"Plastic waste {1} is a challenge."}
  ]
};
export default BATCH7_L1;
