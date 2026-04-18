// Unit 34 Batch 2 Lesson 2: 地域(ちいき)連携(れんけい) (Regional Partnerships)
const BATCH2_L_2 = {
  id:"jav2_u34l_b2_2", title:"地域(ちいき)連携(れんけい)", icon:"🌏", xp:15, board:true,
  steps:[
    {type:"intro", title:"地域(ちいき)連携(れんけい)",
     desc:"Japan operates within a complex web of regional partnerships in the Indo-Pacific. Learn vocabulary for regional organizations, trade blocs, and multilateral cooperation. These terms are essential for understanding Japanese foreign policy and JLPT N1 reading passages.",
     goals:["Use regional partnership vocabulary","Discuss trade blocs and alliances","Understand Japan's regional role"]},

    {type:"teach", trg:"同盟(どうめい)", src:"alliance / coalition", pos:"noun", gender:null,
     note:"Kanji: 同盟. 日米(にちべい)同盟(どうめい) = US-Japan alliance.\n軍事(ぐんじ)同盟(どうめい) = military alliance.",
     example:"A: 日米(にちべい)同盟(どうめい)は日本(にほん)の安全(あんぜん)保障(ほしょう)の基軸(きちゅう)です。\nB: 六十年(ろくじゅうねん)以上(いじょう)続(つづ)いている同盟(どうめい)ですね。\nA: ご意見(いけん)をお聞(き)かせいただけますか？\nB: 私(わたし)の考(かんが)えでは、もう少(すこ)し検討(けんとう)が必要(ひつよう)だと思(おも)います。\nA: どの点(てん)を検討(けんとう)すべきでしょうか？\nB: 予算(よさん)と人員(じんいん)の面(めん)をもう一度(いちど)見直(みなお)す必要(ひつよう)があります。",
     exampleSrc:"A: The US-Japan alliance is the cornerstone of Japan's security.\nB: It is an alliance that has lasted over 60 years.\nA: Could you share your opinion?\nB: In my opinion, I think a bit more consideration is needed.\nA: Which points should be considered?\nB: We need to review the budget and staffing aspects once more.",
     funFact:"同盟 uses 同 (same) and 盟 (oath/pledge). The 日米(にちべい)同盟(どうめい) is Japan's most important bilateral relationship, anchored by the Security Treaty (1960). Under the alliance, the US maintains military bases in Japan, most notably in Okinawa. The alliance has evolved from Cold War containment to addressing 21st-century challenges including cybersecurity and space."},

    {type:"teach", trg:"多国間(たこくかん)", src:"multilateral / between many countries", pos:"adj", gender:null,
     note:"Kanji: 多国間. 多国間(たこくかん)協力(きょうりょく) = multilateral cooperation.\nOpposite: 二国間(にこくかん) (bilateral).",
     example:"A: 多国間(たこくかん)の枠組(わくぐ)みで問題(もんだい)を解決(かいけつ)すべきです。\nB: 一国(いっこく)だけでは対応(たいおう)できない問題(もんだい)が増(ふ)えています。\nA: 何(なに)か良(よ)い方法(ほうほう)はありませんか？\nB: 一(ひと)つ提案(ていあん)があります。段階的(だんかいてき)に進(すす)めてはどうでしょうか。\nA: 段階的(だんかいてき)に、というのはどういうことですか？\nB: まず小規模(しょうきぼ)で試(ため)してから、徐々(じょじょ)に拡大(かくだい)するということです。",
     exampleSrc:"A: We should solve problems within multilateral frameworks.\nB: Problems that one country cannot handle alone are increasing.\nA: Is there a good method?\nB: I have one suggestion. How about proceeding step by step?\nA: What do you mean by step by step?\nB: It means trying it on a small scale first, then gradually expanding.",
     funFact:"多国間 uses 多 (many), 国(くに) (countries), and 間(かん) (between). Japan actively participates in 多国間(たこくかん) frameworks including the G7, G20, APEC, and ASEAN+3. The shift from 二国間(にこくかん) (bilateral) to 多国間(たこくかん) diplomacy reflects the increasing complexity of global challenges that require collective responses."},

    {type:"teach", trg:"経済圏(けいざいけん)", src:"economic zone / economic sphere", pos:"noun", gender:null,
     note:"Kanji: 経済圏. アジア経済圏(けいざいけん) = Asian economic zone.\n自由(じゆう)貿易(ぼうえき)圏(けん) = free trade zone.",
     example:"A: アジア経済圏(けいざいけん)の成長(せいちょう)は目覚(めざ)ましいです。\nB: 日本(にほん)企業(きぎょう)の進出(しんしゅつ)も加速(かそく)していますね。\nA: この問題(もんだい)をどう思(おも)いますか？\nB: 複雑(ふくざつ)な問題(もんだい)ですが、解決策(かいけつさく)はあると思(おも)います。\nA: どのような解決策(かいけつさく)を考(かんが)えていますか？\nB: 関係者(かんけいしゃ)全員(ぜんいん)で話(はな)し合(あ)いの場(ば)を設(もう)けることが第一歩(だいいっぽ)です。",
     exampleSrc:"A: The growth of the Asian economic zone is remarkable.\nB: Japanese companies' expansion is also accelerating.\nA: What do you think about this issue?\nB: It is a complex issue, but I think there are solutions.\nA: What kind of solutions are you thinking of?\nB: The first step is to set up a discussion forum for all stakeholders.",
     funFact:"経済圏 uses 経済(けいざい) (economy) and 圏(けん) (sphere/zone). Japan is part of several overlapping 経済圏(けいざいけん): the RCEP (Regional Comprehensive Economic Partnership), CPTPP (Comprehensive and Progressive Trans-Pacific Partnership), and bilateral EPA (Economic Partnership Agreements) with the EU and others. These agreements shape trade flows worth trillions of yen."},

    {type:"mc", q:"日米(にちべい)同盟(どうめい) is described as:", opts:["The cornerstone of Japan's security","A temporary arrangement","A trade agreement only","An environmental partnership"], ans:"The cornerstone of Japan's security",
     hint:"This alliance has been the foundation of J...'s defense strategy for over 60 years."},

    {type:"teach", trg:"領土問題(りょうどもんだい)", src:"territorial dispute / territorial issue", pos:"noun", gender:null,
     note:"Kanji: 領土問題. 領土(りょうど) (territory) + 問題(もんだい) (problem/issue).\n北方(ほっぽう)領土(りょうど) = Northern Territories.",
     example:"A: 日本(にほん)はいくつかの領土問題(りょうどもんだい)を抱(かか)えています。\nB: 平和的(へいわてき)解決(かいけつ)が望(のぞ)まれますね。\nA: 最近(さいきん)の動向(どうこう)はいかがですか？\nB: 全体的(ぜんたいてき)には好調(こうちょう)ですが、一部(いちぶ)課題(かだい)もあります。\nA: どのような課題(かだい)がありますか？\nB: 人材(じんざい)の確保(かくほ)が最(もっと)も大(おお)きな課題(かだい)です。",
     exampleSrc:"A: Japan has several territorial disputes.\nB: Peaceful resolution is hoped for.\nA: How are the recent trends?\nB: Overall things are going well, but there are some issues.\nA: What kinds of issues are there?\nB: Securing human resources is the biggest challenge.",
     funFact:"領土問題 is one of the most sensitive topics in Japanese foreign policy. Japan has disputes with Russia (Northern Territories/Kuril Islands), South Korea (Takeshima/Dokdo), and China/Taiwan (Senkaku/Diaoyu Islands). These issues involve complex historical, legal, and emotional dimensions that affect bilateral relations."},

    {type:"teach", trg:"経済制裁(けいざいせいさい)", src:"economic sanctions", pos:"noun", gender:null,
     note:"Kanji: 経済制裁. 制裁(せいさい)を科(か)す = to impose sanctions.\n輸入(ゆにゅう)禁止(きんし) = import ban.",
     example:"A: 国際社会(こくさいしゃかい)は経済制裁(けいざいせいさい)を発動(はっどう)しました。\nB: 効果(こうか)が出(で)るまでに時間(じかん)がかかりますね。\nA: それは興味深(きょうみぶか)いですね。\nB: ええ、日本(にほん)ならではの特徴(とくちょう)だと思(おも)います。\nA: 海外(かいがい)ではどうなのでしょうか？\nB: 国(くに)によって異(こと)なりますが、共通(きょうつう)する部分(ぶぶん)もあります。",
     exampleSrc:"A: The international community imposed economic sanctions.\nB: It takes time for the effects to appear.\nA: That is interesting.\nB: Yes, I think it is a characteristic unique to Japan.\nA: I wonder how it is overseas?\nB: It differs by country, but there are also common aspects.",
     funFact:"経済制裁 uses 経済(けいざい) (economic) and 制裁(せいさい) (sanction/punishment). Japan participates in international 経済制裁(けいざいせいさい) through UN Security Council resolutions and independently. As a major trading nation, Japan's sanctions decisions carry significant economic weight. Balancing 制裁(せいさい) obligations with business interests is a constant diplomatic challenge."},

    {type:"teach", trg:"ODA", src:"Official Development Assistance", pos:"noun", gender:null,
     note:"Pronounced オーディーエー. 政府(せいふ)開発(かいはつ)援助(えんじょ) = ODA (full Japanese name).\nJapan is a major ODA contributor.",
     example:"A: 日本(にほん)のODAはアジアやアフリカの開発(かいはつ)に貢献(こうけん)しています。\nB: インフラ整備(せいび)が特(とく)に強(つよ)い分野(ぶんや)ですね。\nA: その経験(けいけん)から何(なに)を学(まな)びましたか？\nB: 事前(じぜん)の準備(じゅんび)がいかに重要(じゅうよう)かを学(まな)びました。\nA: 具体的(ぐたいてき)にどんな準備(じゅんび)をすべきですか？\nB: まず情報収集(じょうほうしゅうしゅう)をして、それから計画(けいかく)を練(ね)ることが大事(だいじ)です。",
     exampleSrc:"A: Japan's ODA contributes to development in Asia and Africa.\nB: Infrastructure development is an especially strong area.\nA: What did you learn from that experience?\nB: I learned how important advance preparation is.\nA: What kind of preparation should be done specifically?\nB: First, gather information, then it is important to develop a plan.",
     funFact:"ODA (Official Development Assistance) is Japan's primary tool for international contribution. Japan was the world's largest ODA donor in the 1990s and remains a top contributor. Japanese ODA emphasizes 自立(じりつ) (self-reliance) of recipient countries, focusing on infrastructure, education, and technical training rather than direct financial aid. JICA implements most ODA programs."},

    {type:"fb", s:"国際社会(こくさいしゃかい)は経済(けいざい){1}を発動(はっどう)しました。\n(The international community imposed economic sanctions.)", a:"制裁(せいさい)", opts:["制裁(せいさい)","協力(きょうりょく)","援助(えんじょ)","交渉(こうしょう)"], sSrc:"The international community imposed economic sanctions.",
     hint:"The noun meaning penalties or punishments imposed to enforce compliance."},

    {type:"teach", trg:"日中関係(にっちゅうかんけい)", src:"Japan-China relations", pos:"noun", gender:null,
     note:"Kanji: 日中関係. 日中(にっちゅう) = Japan-China.\n日韓(にっかん)関係(かんけい) = Japan-Korea relations.",
     example:"A: 日中関係(にっちゅうかんけい)は経済的(けいざいてき)相互依存(そうごいぞん)が深(ふか)いです。\nB: 政治的(せいじてき)な緊張(きんちょう)とのバランスが課題(かだい)ですね。\nA: 今後(こんご)の展望(てんぼう)についてお聞(き)かせください。\nB: 今後(こんご)はさらに国際化(こくさいか)が進(すす)むと思(おも)います。\nA: それに対(たい)してどのような対策(たいさく)が必要(ひつよう)ですか？\nB: 語学力(ごがくりょく)の向上(こうじょう)と異文化理解(いぶんかりかい)が不可欠(ふかけつ)です。",
     exampleSrc:"A: Japan-China relations have deep economic interdependence.\nB: Balancing with political tensions is the challenge.\nA: Please tell me about future prospects.\nB: I think internationalization will progress further going forward.\nA: What measures are needed for that?\nB: Improving language skills and cross-cultural understanding are essential.",
     funFact:"日中関係 is one of the most complex bilateral relationships in the world. Japan and China are each other's largest trading partners, yet historical issues (WWII, Nanjing), territorial disputes (Senkaku Islands), and strategic competition create ongoing friction. The phrase 政冷経熱(せいれいけいねつ) (cold politics, hot economics) describes periods where political tensions coexist with strong economic ties."},

    {type:"teach", trg:"集団的自衛権(しゅうだんてきじえいけん)", src:"collective self-defense", pos:"noun", gender:null,
     note:"Kanji: 集団的自衛権. Reinterpreted by Japan in 2014.\nAllows defense of allies under attack.",
     example:"A: 集団的自衛権(しゅうだんてきじえいけん)の行使(こうし)が可能(かのう)になりました。\nB: 憲法(けんぽう)解釈(かいしゃく)の変更(へんこう)に対(たい)してさまざまな意見(いけん)があります。\nA: それは予想外(よそうがい)の結果(けっか)ですね。\nB: はい、私(わたし)も驚(おどろ)きました。原因(げんいん)を調(しら)べています。\nA: いつごろ原因(げんいん)が分(わ)かりそうですか？\nB: 今週中(こんしゅうちゅう)には分析(ぶんせき)結果(けっか)が出(で)る予定(よてい)です。",
     exampleSrc:"A: The exercise of collective self-defense has become possible.\nB: There are various opinions about the change in constitutional interpretation.\nA: That is an unexpected result.\nB: Yes, I was surprised too. We are investigating the cause.\nA: When do you think you will know the cause?\nB: The analysis results are expected to come out by the end of this week.",
     funFact:"集団的自衛権 was reinterpreted by the Abe government in 2014, allowing Japan to defend allies under attack even if Japan itself is not directly attacked. This was the most significant change to Japan's security posture since 1947. The decision was highly controversial, with massive protests arguing it violated Article 9's spirit."},

    {type:"mc", q:"政冷経熱(せいれいけいねつ) describes Japan-China relations with:", opts:["Cold politics and hot economics coexisting","Complete diplomatic isolation","Perfect harmony in all areas","Military alliance"], ans:"Cold politics and hot economics coexisting",
     hint:"This phrase captures how political friction can coexist with strong trade relationships."},

    {type:"fb", s:"日本(にほん)の{1}はアジアやアフリカの開発(かいはつ)に貢献(こうけん)しています。\n(Japan's foreign aid program contributes to development in Asia and Africa.)", a:"ODA", opts:["ODA","GDP","PKO","SDF"], sSrc:"Japan's foreign aid program contributes to development in Asia and Africa.",
     hint:"The abbreviation for Official Development Assistance, Japan's foreign aid program."},

    {type:"match", pairs:[{trg:"同盟(どうめい)",src:"alliance"},{trg:"多国間(たこくかん)",src:"multilateral"},{trg:"領土問題(りょうどもんだい)",src:"territorial dispute"},{trg:"経済制裁(けいざいせいさい)",src:"economic sanctions"}]},

    {type:"fb", s:"日米(にちべい){1}は日本(にほん)の安全(あんぜん)保障(ほしょう)の基軸(きちゅう)です。\n(The US-Japan alliance is the cornerstone of Japan's security.)", a:"同盟(どうめい)", opts:["同盟(どうめい)","条約(じょうやく)","交渉(こうしょう)","貿易(ぼうえき)"], sSrc:"The US-Japan alliance is the cornerstone of Japan's security.",
     hint:"The noun for a formal partnership between nations based on shared interests."},

    {type:"match", pairs:[{trg:"ODA",src:"development assistance"},{trg:"日中関係(にっちゅうかんけい)",src:"Japan-China relations"},{trg:"集団的自衛権(しゅうだんてきじえいけん)",src:"collective self-defense"},{trg:"経済圏(けいざいけん)",src:"economic zone"}]},

    {type:"mc", q:"Japan's ODA focuses especially on:", opts:["Military equipment","Infrastructure development and technical training","Direct cash payments","Agricultural subsidies"], ans:"Infrastructure development and technical training",
     hint:"Japan's aid philosophy emphasizes teaching self-reliance through building systems and t... people."},
  ]
};
export default BATCH2_L_2;
