// Batch 7 – Unit 34 (B2.2 International Relations): Diplomacy & Global Affairs
const BATCH7_L1 = {
  id:"jav2_u34l_b7_1", title:"外交用語(がいこうようご)", icon:"🌐", xp:15, board:true,
  steps:[
    {type:"intro", title:"外交用語(がいこうようご)",
     desc:"Learn vocabulary for international relations, diplomacy, and global affairs. These JLPT N1-level terms appear in news about Japan's role in the world.",
     goals:["Discuss international relations and diplomacy","Use treaty and agreement vocabulary","Analyze geopolitical situations"]},

    {type:"teach", trg:"外交(がいこう)", src:"diplomacy / foreign affairs", pos:"noun", gender:null,
     note:"外交官(がいこうかん) = diplomat. 外交政策(がいこうせいさく) = foreign policy.\n外交問題(がいこうもんだい) = diplomatic issue.",
     example:"A: 日本(にほん)の外交政策(がいこうせいさく)についてどう思(おも)いますか？\nB: 平和的(へいわてき)な外交(がいこう)が大事(だいじ)です。\nA: その経験(けいけん)から何(なに)を学(まな)びましたか？\nB: 事前(じぜん)の準備(じゅんび)がいかに重要(じゅうよう)かを学(まな)びました。\nA: 具体的(ぐたいてき)にどんな準備(じゅんび)をすべきですか？\nB: まず情報収集(じょうほうしゅうしゅう)をして、それから計画(けいかく)を練(ね)ることが大事(だいじ)です。",
     exampleSrc:"A: What do you think about Japan's foreign policy?\nB: Peaceful diplomacy is important.\nA: What did you learn from that experience?\nB: I learned how important advance preparation is.\nA: What kind of preparation should be done specifically?\nB: First, gather information, then it is important to develop a plan.",
     funFact:"Japan's 外交(がいこう) since WWII has emphasized 平和外交(へいわがいこう) (peaceful diplomacy) and economic cooperation. ODA (政府開発援助(せいふかいはつえんじょ)) is a major tool. Japan contributes to UN peacekeeping and disaster relief. The US-Japan alliance (日米同盟(にちべいどうめい)) remains the cornerstone of security 外交(がいこう)."},

    {type:"teach", trg:"条約(じょうやく)", src:"treaty / convention", pos:"noun", gender:null,
     note:"条約(じょうやく)を結(むす)ぶ = to conclude a treaty.\n日米安全保障条約(にちべいあんぜんほしょうじょうやく) = US-Japan Security Treaty.",
     example:"A: 新(あたら)しい貿易条約(ぼうえきじょうやく)に調印(ちょういん)しました。\nB: 両国(りょうこく)にとって良(よ)い条約(じょうやく)ですね。\nA: 今後(こんご)の展望(てんぼう)についてお聞(き)かせください。\nB: 今後(こんご)はさらに国際化(こくさいか)が進(すす)むと思(おも)います。\nA: それに対(たい)してどのような対策(たいさく)が必要(ひつよう)ですか？\nB: 語学力(ごがくりょく)の向上(こうじょう)と異文化理解(いぶんかりかい)が不可欠(ふかけつ)です。",
     exampleSrc:"A: We signed a new trade treaty.\nB: A good treaty for both countries.\nA: Please tell me about future prospects.\nB: I think internationalization will progress further going forward.\nA: What measures are needed for that?\nB: Improving language skills and cross-cultural understanding are essential.",
     funFact:"条約(じょうやく) shapes Japan's international relationships. The San Francisco Peace Treaty (1952) restored Japanese sovereignty. The US-Japan Security 条約(じょうやく) defines the military alliance. Japan has trade 条約(じょうやく) with dozens of countries. Treaty ratification requires Diet (parliament) approval."},

    {type:"teach", trg:"国連(こくれん)", src:"United Nations", pos:"noun", gender:null,
     note:"Short for 国際連合(こくさいれんごう).\n国連総会(こくれんそうかい) = UN General Assembly.\n国連安全保障理事会(こくれんあんぜんほしょうりじかい) = UN Security Council.",
     example:"A: 日本(にほん)は国連(こくれん)に大(おお)きく貢献(こうけん)しています。\nB: 安全保障理事会(あんぜんほしょうりじかい)の常任理事国(じょうにんりじこく)を目指(めざ)していますね。\nA: それは予想外(よそうがい)の結果(けっか)ですね。\nB: はい、私(わたし)も驚(おどろ)きました。原因(げんいん)を調(しら)べています。\nA: いつごろ原因(げんいん)が分(わ)かりそうですか？\nB: 今週中(こんしゅうちゅう)には分析(ぶんせき)結果(けっか)が出(で)る予定(よてい)です。",
     exampleSrc:"A: Japan contributes greatly to the UN.\nB: It aims for a permanent Security Council seat.\nA: That is an unexpected result.\nB: Yes, I was surprised too. We are investigating the cause.\nA: When do you think you will know the cause?\nB: The analysis results are expected to come out by the end of this week.",
     funFact:"Japan is the third-largest contributor to the 国連(こくれん) budget. The quest for a permanent UN Security Council seat has been a decades-long diplomatic goal. Japan contributes to UN peacekeeping operations (PKO), development aid, and disaster relief. The UN University is headquartered in Tokyo."},

    {type:"teach", trg:"多国籍(たこくせき)", src:"multinational", pos:"adj", gender:null,
     note:"Na-adjective. 多国籍企業(たこくせききぎょう) = multinational corporation.\n多国間(たこくかん) = multilateral.",
     example:"A: 多国籍企業(たこくせききぎょう)で働(はたら)きたいです。\nB: 英語(えいご)と日本語(にほんご)の両方(りょうほう)が必要(ひつよう)ですね。\nA: その分野(ぶんや)についてどのくらいご存(ぞん)じですか？\nB: 専門(せんもん)ではありませんが、基本的(きほんてき)な知識(ちしき)はあります。\nA: もっと詳(くわ)しく知(し)りたい場合(ばあい)は、どうすればいいですか？\nB: 専門家(せんもんか)に相談(そうだん)するか、関連(かんれん)の書籍(しょせき)を読(よ)むことをお勧(すす)めします。",
     exampleSrc:"A: I want to work at a multinational company.\nB: Both English and Japanese are needed.\nA: How much do you know about that field?\nB: It is not my specialty, but I have basic knowledge.\nA: If I want to know more in detail, what should I do?\nB: I recommend consulting a specialist or reading related books.",
     funFact:"Japan hosts many 多国籍(たこくせき) companies and has its own global giants (Toyota, Sony, Honda). Working in a 多国籍(たこくせき) environment (グローバル環境(かんきょう)) is increasingly desired by young Japanese. The challenge of bridging Japanese business culture with global norms creates unique workplace dynamics."},

    {type:"teach", trg:"難民(なんみん)", src:"refugee", pos:"noun", gender:null,
     note:"難民問題(なんみんもんだい) = refugee issue.\n難民認定(なんみんにんてい) = refugee recognition.",
     example:"A: 世界的(せかいてき)に難民問題(なんみんもんだい)が増(ふ)えています。\nB: 日本(にほん)も受(う)け入(い)れ対策(たいさく)が必要(ひつよう)です。\nA: どのような影響(えいきょう)がありましたか？\nB: 社会全体(しゃかいぜんたい)に大(おお)きな影響(えいきょう)を与(あた)えました。\nA: 良(よ)い影響(えいきょう)ですか、悪(わる)い影響(えいきょう)ですか？\nB: 両方(りょうほう)あります。メリットもデメリットもあります。",
     exampleSrc:"A: The refugee issue is increasing globally.\nB: Japan also needs acceptance measures.\nA: What kind of impact was there?\nB: It had a big impact on society as a whole.\nA: A good impact or a bad impact?\nB: Both. There are both merits and demerits.",
     funFact:"Japan has one of the lowest 難民(なんみん) acceptance rates among developed nations (under 1% of applicants approved until recent reforms). The 2023 immigration law reform expanded recognition. Cultural homogeneity concerns, language barriers, and bureaucratic processes create challenges. Advocacy groups push for more humanitarian 難民(なんみん) policies."},

    {type:"teach", trg:"援助(えんじょ)", src:"aid / assistance (international)", pos:"noun", gender:null,
     note:"開発援助(かいはつえんじょ) = development aid.\nODA = 政府開発援助(せいふかいはつえんじょ).",
     example:"A: 日本(にほん)のODAは世界的(せかいてき)に有名(ゆうめい)です。\nB: インフラ整備(せいび)が特(とく)に評価(ひょうか)されています。\nA: 具体的(ぐたいてき)にはどういうことですか？\nB: つまり、状況(じょうきょう)に応(おう)じて対応(たいおう)を変(か)える必要(ひつよう)があるということです。\nA: なるほど。それは確(たし)かにそうですね。\nB: ええ、柔軟(じゅうなん)な対応(たいおう)が大切(たいせつ)だと思(おも)います。",
     exampleSrc:"A: Japan's ODA is globally recognized.\nB: Infrastructure development is especially valued.\nA: What do you mean specifically?\nB: I mean we need to change our approach depending on the situation.\nA: I see. That is certainly true.\nB: Yes, I think flexible response is important.",
     funFact:"Japan is one of the world's largest ODA (official development assistance) donors. Japanese 援助(えんじょ) emphasizes infrastructure: building roads, bridges, water systems, and railways in developing countries. The Shinkansen technology transfer to India and Southeast Asia exemplifies Japan's 援助(えんじょ) philosophy of teaching to fish, not just giving fish."},

    {type:"teach", trg:"軍縮(ぐんしゅく)", src:"disarmament / arms reduction", pos:"noun", gender:null,
     note:"核軍縮(かくぐんしゅく) = nuclear disarmament.\n軍備管理(ぐんびかんり) = arms control.",
     example:"A: 核軍縮(かくぐんしゅく)は世界(せかい)の目標(もくひょう)です。\nB: 広島(ひろしま)と長崎(ながさき)の経験(けいけん)が訴(うった)えています。\nA: それについてもう少(すこ)し詳(くわ)しく教(おし)えてください。\nB: 例(たと)えば、最近(さいきん)の事例(じれい)を見(み)ると、変化(へんか)が激(はげ)しいです。\nA: そうですか。どう対処(たいしょ)すればいいでしょうか。\nB: まず現状(げんじょう)を把握(はあく)してから、計画(けいかく)を立(た)てましょう。",
     exampleSrc:"A: Nuclear disarmament is a global goal.\nB: The experience of Hiroshima and Nagasaki appeals for it.\nA: Please tell me more about that.\nB: For example, looking at recent cases, the changes are dramatic.\nA: Is that so? How should we handle it?\nB: Let's first grasp the current situation, then make a plan.",
     funFact:"As the only country to suffer atomic bombings, Japan has a unique moral voice in 核軍縮(かくぐんしゅく) discussions. Hiroshima and Nagasaki survivors (被爆者(ひばくしゃ)) actively campaign for nuclear abolition. Japan's 'three non-nuclear principles' (非核三原則(ひかくさんげんそく)) state: not possess, not produce, not permit nuclear weapons."},

    {type:"teach", trg:"経済制裁(けいざいせいさい)", src:"economic sanctions", pos:"noun", gender:null,
     note:"制裁(せいさい)を課(か)す = to impose sanctions.\n制裁解除(せいさいかいじょ) = lifting sanctions.",
     example:"A: 経済制裁(けいざいせいさい)が発動(はつどう)されました。\nB: 貿易(ぼうえき)への影響(えいきょう)が大(おお)きいですね。\nA: どのような方法(ほうほう)がありますか？\nB: いくつかの選択肢(せんたくし)があります。一番(いちばん)効果的(こうかてき)なのは実践(じっせん)です。\nA: 実践(じっせん)というのは、具体的(ぐたいてき)に何(なに)をすればいいですか？\nB: 毎日(まいにち)少(すこ)しずつ取(と)り組(く)むことが重要(じゅうよう)です。",
     exampleSrc:"A: Economic sanctions have been imposed.\nB: The impact on trade is large.\nA: What kinds of methods are there?\nB: There are several options. The most effective is practice.\nA: What specifically should we do in practice?\nB: It is important to work on it a little each day.",
     funFact:"Japan participates in international 経済制裁(けいざいせいさい) through the UN and alongside G7 allies. As a resource-importing, trade-dependent nation, sanctions affect Japan's economy too. Balancing diplomatic principles with economic pragmatism (especially regarding energy imports) requires delicate 外交(がいこう)."},

    {type:"teach", trg:"主権(しゅけん)", src:"sovereignty", pos:"noun", gender:null,
     note:"国家主権(こっかしゅけん) = national sovereignty.\n国民主権(こくみんしゅけん) = popular sovereignty.",
     example:"A: 主権(しゅけん)は国(くに)の基本的(きほんてき)な権利(けんり)です。\nB: 国民主権(こくみんしゅけん)が憲法(けんぽう)に定(さだ)められています。\nA: それはいつごろから始(はじ)まったのですか？\nB: 数年前(すうねんまえ)からですが、最近(さいきん)特(とく)に注目(ちゅうもく)されています。\nA: 今後(こんご)どうなると思(おも)いますか？\nB: さらに発展(はってん)すると予想(よそう)されています。",
     exampleSrc:"A: Sovereignty is a nation's fundamental right.\nB: Popular sovereignty is established in the constitution.\nA: When did that start?\nB: It started a few years ago, but it has been getting particular attention recently.\nA: What do you think will happen going forward?\nB: It is expected to develop further.",
     funFact:"主権(しゅけん) debates in Japan center on Okinawa's US military bases, Northern Territories dispute with Russia, and Senkaku/Diaoyu Islands issue with China. 国民主権(こくみんしゅけん) (popular sovereignty) is a constitutional principle. The tension between 主権(しゅけん) and the US alliance defines Japan's security identity."},

    {type:"teach", trg:"首脳会議(しゅのうかいぎ)", src:"summit meeting", pos:"noun", gender:null,
     note:"Also: サミット (loanword). 首脳会談(しゅのうかいだん) = summit talks.\nG7サミット = G7 Summit.",
     example:"A: G7サミットが日本(にほん)で開催(かいさい)されます。\nB: 世界(せかい)のリーダーが集(あつ)まりますね。\nA: 何(なに)か問題(もんだい)はありませんでしたか？\nB: いくつか課題(かだい)がありましたが、解決(かいけつ)しました。\nA: どのように解決(かいけつ)したのですか？\nB: チーム全体(ぜんたい)で話(はな)し合(あ)って、最善(さいぜん)の方法(ほうほう)を見(み)つけました。",
     exampleSrc:"A: The G7 Summit will be held in Japan.\nB: World leaders will gather.\nA: Were there any problems?\nB: There were some issues, but we resolved them.\nA: How did you resolve them?\nB: We discussed it as a whole team and found the best method.",
     funFact:"Japan has hosted multiple G7 summits (Tokyo 1979/1986/1993, Okinawa 2000, Hokkaido 2008, Hiroshima 2023). The 2023 Hiroshima Summit was symbolically powerful, with world leaders visiting the atomic bomb memorial. Japan uses サミット hosting to showcase regions and advance diplomatic priorities."},

    {type:"teach", trg:"調停(ちょうてい)", src:"mediation / arbitration", pos:"noun", gender:null,
     note:"調停(ちょうてい)する = to mediate. 調停役(ちょうていやく) = mediator.\n紛争調停(ふんそうちょうてい) = conflict mediation.",
     example:"A: 両国(りょうこく)の間(あいだ)で調停(ちょうてい)が行(おこな)われています。\nB: 平和的(へいわてき)な解決(かいけつ)を望(のぞ)みます。\nA: その点(てん)について、もう少(すこ)し説明(せつめい)していただけますか？\nB: もちろんです。重要(じゅうよう)なのは準備(じゅんび)と計画(けいかく)です。\nA: 準備(じゅんび)にはどのくらい時間(じかん)がかかりますか？\nB: 通常(つうじょう)、一週間(いっしゅうかん)から二週間(にしゅうかん)程度(ていど)です。",
     exampleSrc:"A: Mediation is being conducted between the two countries.\nB: I hope for a peaceful resolution.\nA: Could you explain that point a bit more?\nB: Of course. What is important is preparation and planning.\nA: How long does preparation take?\nB: Usually about one to two weeks.",
     funFact:"調停(ちょうてい) reflects Japan's preference for harmony over confrontation. In domestic law, family disputes and labor conflicts often go through 調停(ちょうてい) before court. Internationally, Japan positions itself as a 調停(ちょうてい) nation, preferring dialogue to force. This diplomatic identity draws from both Buddhist and Confucian traditions."},

    {type:"teach", trg:"協定書(きょうていしょ)", src:"agreement / pact / accord", pos:"noun", gender:null,
     note:"協定書(きょうていしょ)に調印(ちょういん)する = to sign an agreement.\nMore formal than 条約(じょうやく) in some contexts.",
     example:"A: 両国(りょうこく)が協定書(きょうていしょ)に調印(ちょういん)しました。\nB: 貿易関係(ぼうえきかんけい)が良(よ)くなりますね。\nA: それは素晴(すば)らしい結果(けっか)ですね。\nB: ありがとうございます。チーム全員(ぜんいん)の努力(どりょく)のおかげです。\nA: 今後(こんご)の目標(もくひょう)は何(なん)ですか？\nB: さらに品質(ひんしつ)を向上(こうじょう)させることです。",
     exampleSrc:"A: Both countries signed the agreement.\nB: Trade relations will improve.\nA: That is an excellent result.\nB: Thank you. It is thanks to the effort of the whole team.\nA: What are the future goals?\nB: To further improve quality.",
     funFact:"協定書(きょうていしょ) ranges from bilateral trade agreements to climate accords. Japan has signed Economic Partnership Agreements (EPA) with many countries. The RCEP (Regional Comprehensive Economic Partnership) and CPTPP (Comprehensive and Progressive Agreement for Trans-Pacific Partnership) are major multilateral 協定書(きょうていしょ) Japan championed."},

    // Quiz steps
    {type:"mc", q:"Japan's three non-nuclear principles are:",
     opts:["Not possess, not produce, not permit nuclear weapons","Peace, prosperity, partnership","Army, navy, air force restrictions","Import, export, transit bans"],
     ans:"Not possess, not produce, not permit nuclear weapons",
     hint:"These principles reflect Japan's unique position as the only country to have suffered atomic bombings."},

    {type:"match", pairs:[
      {trg:"外交(がいこう)", src:"diplomacy"},
      {trg:"条約(じょうやく)", src:"treaty"},
      {trg:"国連(こくれん)", src:"United Nations"},
      {trg:"難民(なんみん)", src:"refugee"},
      {trg:"主権(しゅけん)", src:"sovereignty"}
    ]},

    {type:"fb", s:"日本(にほん)の{1}はインフラ整備(せいび)で有名(ゆうめい)です。",
     a:["ODA"],
     opts:["ODA","GDP","PKO","G7"],
     hint:"Japan's official development assistance focuses on building infrastructure in developing countries.",
     sSrc:"Japan's {1} is famous for infrastructure development."},

    {type:"mc", q:"Japan's refugee acceptance rate has historically been:",
     opts:["Under 1% of applicants","About 50%","Over 75%","About 30%"],
     ans:"Under 1% of applicants",
     hint:"One of the lowest rates among developed nations, though recent reforms aim to improve this."},

    {type:"fb", s:"両国(りょうこく)の間(あいだ)で{1}が行(おこな)われています。",
     a:["調停(ちょうてい)"],
     opts:["調停(ちょうてい)","制裁(せいさい)","軍縮(ぐんしゅく)","外交(がいこう)"],
     hint:"A neutral third party helps resolve the dispute. This word means 'mediation.'",
     sSrc:"{1} is being conducted between the two countries."},

    {type:"mc", q:"The 2023 G7 Summit in Hiroshima was significant because:",
     opts:["World leaders visited the atomic bomb memorial","It was the first G7 ever","Japan left the G7","The summit failed"],
     ans:"World leaders visited the atomic bomb memorial",
     hint:"The symbolic choice of Hiroshima connected nuclear disarmament to modern diplomacy."},

    {type:"match", pairs:[
      {trg:"援助(えんじょ)", src:"aid"},
      {trg:"軍縮(ぐんしゅく)", src:"disarmament"},
      {trg:"経済制裁(けいざいせいさい)", src:"economic sanctions"},
      {trg:"調停(ちょうてい)", src:"mediation"},
      {trg:"協定書(きょうていしょ)", src:"agreement"}
    ]},

    {type:"fb", s:"核(かく){1}は世界(せかい)の目標(もくひょう)です。広島(ひろしま)が訴(うった)えています。",
     a:["軍縮(ぐんしゅく)"],
     opts:["軍縮(ぐんしゅく)","制裁(せいさい)","外交(がいこう)","主権(しゅけん)"],
     hint:"Nuclear arms reduction is a global goal. Hiroshima's experience gives this special urgency.",
     sSrc:"Nuclear {1} is a global goal. Hiroshima appeals for it."}
  ,{type:"match",pairs:[{trg:"多国籍(たこくせき)",src:"multinational"},{trg:"首脳会議(しゅのうかいぎ)",src:"summit meeting"}]}]
};
export default BATCH7_L1;
