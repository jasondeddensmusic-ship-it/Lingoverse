// Batch 7 – Unit 34 (B2.2 International Relations): Diplomacy & Global Affairs
const BATCH7_L1 = {
  id:"jav2_u34l_b7_1", title:"がいこうようご", icon:"🌐", xp:15, board:true,
  steps:[
    {type:"intro", title:"がいこうようご",
     desc:"Learn vocabulary for international relations, diplomacy, and global affairs. These JLPT N1-level terms appear in news about Japan's role in the world.",
     goals:["Discuss international relations and diplomacy","Use treaty and agreement vocabulary","Analyze geopolitical situations"]},

    {type:"teach", trg:"がいこう", src:"diplomacy / foreign affairs", pos:"noun", gender:null,
     note:"がいこうかん = diplomat. がいこうせいさく = foreign policy.\nがいこうもんだい = diplomatic issue.",
     example:"A: にほんのがいこうせいさくについてどうおもいますか？\nB: へいわてきながいこうがだいじです。\nA: その経験(けいけん)から何(なに)を学(まな)びましたか？\nB: 事前(じぜん)の準備(じゅんび)がいかに重要(じゅうよう)かを学(まな)びました。\nA: 具体的(ぐたいてき)にどんな準備(じゅんび)をすべきですか？\nB: まず情報収集(じょうほうしゅうしゅう)をして、それから計画(けいかく)を練(ね)ることが大事(だいじ)です。",
     exampleSrc:"A: What do you think about Japan's foreign policy?\nB: Peaceful diplomacy is important.\nA: What did you learn from that experience?\nB: I learned how important advance preparation is.\nA: What kind of preparation should be done specifically?\nB: First, gather information, then it is important to develop a plan.",
     funFact:"Japan's がいこう (外交) since WWII has emphasized 平和外交 (peaceful diplomacy) and economic cooperation. ODA (政府開発援助) is a major tool. Japan contributes to UN peacekeeping and disaster relief. The US-Japan alliance (日米同盟) remains the cornerstone of security がいこう."},

    {type:"teach", trg:"じょうやく", src:"treaty / convention", pos:"noun", gender:null,
     note:"じょうやくをむすぶ = to conclude a treaty.\nにちべいあんぜんほしょうじょうやく = US-Japan Security Treaty.",
     example:"A: あたらしいぼうえきじょうやくにちょういんしました。\nB: りょうこくにとってよいじょうやくですね。\nA: 今後(こんご)の展望(てんぼう)についてお聞(き)かせください。\nB: 今後(こんご)はさらに国際化(こくさいか)が進(すす)むと思(おも)います。\nA: それに対(たい)してどのような対策(たいさく)が必要(ひつよう)ですか？\nB: 語学力(ごがくりょく)の向上(こうじょう)と異文化理解(いぶんかりかい)が不可欠(ふかけつ)です。",
     exampleSrc:"A: We signed a new trade treaty.\nB: A good treaty for both countries.\nA: Please tell me about future prospects.\nB: I think internationalization will progress further going forward.\nA: What measures are needed for that?\nB: Improving language skills and cross-cultural understanding are essential.",
     funFact:"じょうやく (条約) shapes Japan's international relationships. The San Francisco Peace Treaty (1952) restored Japanese sovereignty. The US-Japan Security Treaty defines the military alliance. Japan has trade じょうやく with dozens of countries. Treaty ratification requires Diet (parliament) approval."},

    {type:"teach", trg:"こくれん", src:"United Nations", pos:"noun", gender:null,
     note:"Short for こくさいれんごう.\nこくれんそうかい = UN General Assembly.\nこくれんあんぜんほしょうりじかい = UN Security Council.",
     example:"A: にほんはこくれんにおおきくこうけんしています。\nB: あんぜんほしょうりじかいのじょうにんりじこくをめざしていますね。\nA: それは予想外(よそうがい)の結果(けっか)ですね。\nB: はい、私(わたし)も驚(おどろ)きました。原因(げんいん)を調(しら)べています。\nA: いつごろ原因(げんいん)が分(わ)かりそうですか？\nB: 今週中(こんしゅうちゅう)には分析(ぶんせき)結果(けっか)が出(で)る予定(よてい)です。",
     exampleSrc:"A: Japan contributes greatly to the UN.\nB: It aims for a permanent Security Council seat.\nA: That is an unexpected result.\nB: Yes, I was surprised too. We are investigating the cause.\nA: When do you think you will know the cause?\nB: The analysis results are expected to come out by the end of this week.",
     funFact:"Japan is the third-largest contributor to the こくれん (国連) budget. The quest for a permanent UN Security Council seat has been a decades-long diplomatic goal. Japan contributes to UN peacekeeping operations (PKO), development aid, and disaster relief. The UN University is headquartered in Tokyo."},

    {type:"teach", trg:"たこくせき", src:"multinational", pos:"adj", gender:null,
     note:"Na-adjective. たこくせききぎょう = multinational corporation.\nたこくかん = multilateral.",
     example:"A: たこくせききぎょうではたらきたいです。\nB: えいごとにほんごのりょうほうがひつようですね。\nA: その分野(ぶんや)についてどのくらいご存(ぞん)じですか？\nB: 専門(せんもん)ではありませんが、基本的(きほんてき)な知識(ちしき)はあります。\nA: もっと詳(くわ)しく知(し)りたい場合(ばあい)は、どうすればいいですか？\nB: 専門家(せんもんか)に相談(そうだん)するか、関連(かんれん)の書籍(しょせき)を読(よ)むことをお勧(すす)めします。",
     exampleSrc:"A: I want to work at a multinational company.\nB: Both English and Japanese are needed.\nA: How much do you know about that field?\nB: It is not my specialty, but I have basic knowledge.\nA: If I want to know more in detail, what should I do?\nB: I recommend consulting a specialist or reading related books.",
     funFact:"Japan hosts many たこくせき (多国籍) companies and has its own global giants (Toyota, Sony, Honda). Working in a たこくせき environment (グローバルかんきょう) is increasingly desired by young Japanese. The challenge of bridging Japanese business culture with global norms creates unique workplace dynamics."},

    {type:"teach", trg:"なんみん", src:"refugee", pos:"noun", gender:null,
     note:"なんみんもんだい = refugee issue.\nなんみんにんてい = refugee recognition.",
     example:"A: せかいてきになんみんもんだいがふえています。\nB: にほんもうけいれたいさくがひつようです。\nA: どのような影響(えいきょう)がありましたか？\nB: 社会全体(しゃかいぜんたい)に大(おお)きな影響(えいきょう)を与(あた)えました。\nA: 良(よ)い影響(えいきょう)ですか、悪(わる)い影響(えいきょう)ですか？\nB: 両方(りょうほう)あります。メリットもデメリットもあります。",
     exampleSrc:"A: The refugee issue is increasing globally.\nB: Japan also needs acceptance measures.\nA: What kind of impact was there?\nB: It had a big impact on society as a whole.\nA: A good impact or a bad impact?\nB: Both. There are both merits and demerits.",
     funFact:"Japan has one of the lowest なんみん (難民) acceptance rates among developed nations (under 1% of applicants approved until recent reforms). The 2023 immigration law reform expanded recognition. Cultural homogeneity concerns, language barriers, and bureaucratic processes create challenges. Advocacy groups push for more humanitarian なんみん policies."},

    {type:"teach", trg:"えんじょ", src:"aid / assistance (international)", pos:"noun", gender:null,
     note:"かいはつえんじょ = development aid.\nODA = せいふかいはつえんじょ.",
     example:"A: にほんのODAはせかいてきにゆうめいです。\nB: インフラせいびがとくにひょうかされています。\nA: 具体的(ぐたいてき)にはどういうことですか？\nB: つまり、状況(じょうきょう)に応(おう)じて対応(たいおう)を変(か)える必要(ひつよう)があるということです。\nA: なるほど。それは確(たし)かにそうですね。\nB: ええ、柔軟(じゅうなん)な対応(たいおう)が大切(たいせつ)だと思(おも)います。",
     exampleSrc:"A: Japan's ODA is globally recognized.\nB: Infrastructure development is especially valued.\nA: What do you mean specifically?\nB: I mean we need to change our approach depending on the situation.\nA: I see. That is certainly true.\nB: Yes, I think flexible response is important.",
     funFact:"Japan is one of the world's largest ODA (official development assistance) donors. Japanese えんじょ (援助) emphasizes infrastructure: building roads, bridges, water systems, and railways in developing countries. The Shinkansen technology transfer to India and Southeast Asia exemplifies Japan's えんじょ philosophy of teaching to fish, not just giving fish."},

    {type:"teach", trg:"ぐんしゅく", src:"disarmament / arms reduction", pos:"noun", gender:null,
     note:"かくぐんしゅく = nuclear disarmament.\nぐんびかんり = arms control.",
     example:"A: かくぐんしゅくはせかいのもくひょうです。\nB: ひろしまとながさきのけいけんがうったえています。\nA: それについてもう少(すこ)し詳(くわ)しく教(おし)えてください。\nB: 例(たと)えば、最近(さいきん)の事例(じれい)を見(み)ると、変化(へんか)が激(はげ)しいです。\nA: そうですか。どう対処(たいしょ)すればいいでしょうか。\nB: まず現状(げんじょう)を把握(はあく)してから、計画(けいかく)を立(た)てましょう。",
     exampleSrc:"A: Nuclear disarmament is a global goal.\nB: The experience of Hiroshima and Nagasaki appeals for it.\nA: Please tell me more about that.\nB: For example, looking at recent cases, the changes are dramatic.\nA: Is that so? How should we handle it?\nB: Let's first grasp the current situation, then make a plan.",
     funFact:"As the only country to suffer atomic bombings, Japan has a unique moral voice in かくぐんしゅく (核軍縮) discussions. Hiroshima and Nagasaki survivors (被爆者, ひばくしゃ) actively campaign for nuclear abolition. Japan's 'three non-nuclear principles' (非核三原則) state: not possess, not produce, not permit nuclear weapons."},

    {type:"teach", trg:"けいざいせいさい", src:"economic sanctions", pos:"noun", gender:null,
     note:"せいさいをかす = to impose sanctions.\nせいさいかいじょ = lifting sanctions.",
     example:"A: けいざいせいさいがはつどうされました。\nB: ぼうえきへのえいきょうがおおきいですね。\nA: どのような方法(ほうほう)がありますか？\nB: いくつかの選択肢(せんたくし)があります。一番(いちばん)効果的(こうかてき)なのは実践(じっせん)です。\nA: 実践(じっせん)というのは、具体的(ぐたいてき)に何(なに)をすればいいですか？\nB: 毎日(まいにち)少(すこ)しずつ取(と)り組(く)むことが重要(じゅうよう)です。",
     exampleSrc:"A: Economic sanctions have been imposed.\nB: The impact on trade is large.\nA: What kinds of methods are there?\nB: There are several options. The most effective is practice.\nA: What specifically should we do in practice?\nB: It is important to work on it a little each day.",
     funFact:"Japan participates in international けいざいせいさい (経済制裁) through the UN and alongside G7 allies. As a resource-importing, trade-dependent nation, sanctions affect Japan's economy too. Balancing diplomatic principles with economic pragmatism (especially regarding energy imports) requires delicate がいこう."},

    {type:"teach", trg:"しゅけん", src:"sovereignty", pos:"noun", gender:null,
     note:"こくかしゅけん = national sovereignty.\nこくみんしゅけん = popular sovereignty.",
     example:"A: しゅけんはくにのきほんてきなけんりです。\nB: こくみんしゅけんがけんぽうにさだめられています。\nA: それはいつごろから始(はじ)まったのですか？\nB: 数年前(すうねんまえ)からですが、最近(さいきん)特(とく)に注目(ちゅうもく)されています。\nA: 今後(こんご)どうなると思(おも)いますか？\nB: さらに発展(はってん)すると予想(よそう)されています。",
     exampleSrc:"A: Sovereignty is a nation's fundamental right.\nB: Popular sovereignty is established in the constitution.\nA: When did that start?\nB: It started a few years ago, but it has been getting particular attention recently.\nA: What do you think will happen going forward?\nB: It is expected to develop further.",
     funFact:"しゅけん (主権) debates in Japan center on Okinawa's US military bases, Northern Territories dispute with Russia, and Senkaku/Diaoyu Islands issue with China. 国民主権 (popular sovereignty) is a constitutional principle. The tension between しゅけん and the US alliance defines Japan's security identity."},

    {type:"teach", trg:"にほんかいぎ", src:"summit meeting", pos:"noun", gender:null,
     note:"Also: サミット (loanword). しゅのうかいだん = summit talks.\nG7サミット = G7 Summit.",
     example:"A: G7サミットがにほんでかいさいされます。\nB: せかいのリーダーがあつまりますね。\nA: 何(なに)か問題(もんだい)はありませんでしたか？\nB: いくつか課題(かだい)がありましたが、解決(かいけつ)しました。\nA: どのように解決(かいけつ)したのですか？\nB: チーム全体(ぜんたい)で話(はな)し合(あ)って、最善(さいぜん)の方法(ほうほう)を見(み)つけました。",
     exampleSrc:"A: The G7 Summit will be held in Japan.\nB: World leaders will gather.\nA: Were there any problems?\nB: There were some issues, but we resolved them.\nA: How did you resolve them?\nB: We discussed it as a whole team and found the best method.",
     funFact:"Japan has hosted multiple G7 summits (Tokyo 1979/1986/1993, Okinawa 2000, Hokkaido 2008, Hiroshima 2023). The 2023 Hiroshima Summit was symbolically powerful, with world leaders visiting the atomic bomb memorial. Japan uses サミット hosting to showcase regions and advance diplomatic priorities."},

    {type:"teach", trg:"ちょうてい", src:"mediation / arbitration", pos:"noun", gender:null,
     note:"ちょうていする = to mediate. ちょうていやく = mediator.\nふんそうちょうてい = conflict mediation.",
     example:"A: りょうこくのあいだでちょうていがおこなわれています。\nB: へいわてきなかいけつをのぞみます。\nA: その点(てん)について、もう少(すこ)し説明(せつめい)していただけますか？\nB: もちろんです。重要(じゅうよう)なのは準備(じゅんび)と計画(けいかく)です。\nA: 準備(じゅんび)にはどのくらい時間(じかん)がかかりますか？\nB: 通常(つうじょう)、一週間(いっしゅうかん)から二週間(にしゅうかん)程度(ていど)です。",
     exampleSrc:"A: Mediation is being conducted between the two countries.\nB: I hope for a peaceful resolution.\nA: Could you explain that point a bit more?\nB: Of course. What is important is preparation and planning.\nA: How long does preparation take?\nB: Usually about one to two weeks.",
     funFact:"ちょうてい (調停) reflects Japan's preference for harmony over confrontation. In domestic law, family disputes and labor conflicts often go through ちょうてい before court. Internationally, Japan positions itself as a ちょうてい nation, preferring dialogue to force. This diplomatic identity draws from both Buddhist and Confucian traditions."},

    {type:"teach", trg:"きょうていしょ", src:"agreement / pact / accord", pos:"noun", gender:null,
     note:"きょうていしょにちょういんする = to sign an agreement.\nより formal than じょうやく in some contexts.",
     example:"A: りょうこくがきょうていしょにちょういんしました。\nB: ぼうえきかんけいがよくなりますね。\nA: それは素晴(すば)らしい結果(けっか)ですね。\nB: ありがとうございます。チーム全員(ぜんいん)の努力(どりょく)のおかげです。\nA: 今後(こんご)の目標(もくひょう)は何(なん)ですか？\nB: さらに品質(ひんしつ)を向上(こうじょう)させることです。",
     exampleSrc:"A: Both countries signed the agreement.\nB: Trade relations will improve.\nA: That is an excellent result.\nB: Thank you. It is thanks to the effort of the whole team.\nA: What are the future goals?\nB: To further improve quality.",
     funFact:"きょうていしょ (協定書) ranges from bilateral trade agreements to climate accords. Japan has signed Economic Partnership Agreements (EPA) with many countries. The RCEP (Regional Comprehensive Economic Partnership) and CPTPP (Comprehensive and Progressive Agreement for Trans-Pacific Partnership) are major multilateral きょうていしょ Japan championed."},

    // Quiz steps
    {type:"mc", q:"Japan's three non-nuclear principles are:",
     opts:["Not possess, not produce, not permit nuclear weapons","Peace, prosperity, partnership","Army, navy, air force restrictions","Import, export, transit bans"],
     ans:"Not possess, not produce, not permit nuclear weapons",
     hint:"These principles reflect Japan's unique position as the only country to have suffered atomic bombings."},

    {type:"match", pairs:[
      {trg:"がいこう", src:"diplomacy"},
      {trg:"じょうやく", src:"treaty"},
      {trg:"こくれん", src:"United Nations"},
      {trg:"なんみん", src:"refugee"},
      {trg:"しゅけん", src:"sovereignty"}
    ]},

    {type:"fb", s:"にほんの{1}はインフラせいびでゆうめいです。",
     a:["ODA"],
     opts:["ODA","GDP","PKO","G7"],
     hint:"Japan's official development assistance focuses on building infrastructure in developing countries.",
     sSrc:"Japan's {1} is famous for infrastructure development."},

    {type:"mc", q:"Japan's refugee acceptance rate has historically been:",
     opts:["Under 1% of applicants","About 50%","Over 75%","About 30%"],
     ans:"Under 1% of applicants",
     hint:"One of the lowest rates among developed nations, though recent reforms aim to improve this."},

    {type:"fb", s:"りょうこくのあいだで{1}がおこなわれています。",
     a:["ちょうてい"],
     opts:["ちょうてい","せいさい","ぐんしゅく","がいこう"],
     hint:"A neutral third party helps resolve the dispute. This word means 'mediation.'",
     sSrc:"{1} is being conducted between the two countries."},

    {type:"mc", q:"The 2023 G7 Summit in Hiroshima was significant because:",
     opts:["World leaders visited the atomic bomb memorial","It was the first G7 ever","Japan left the G7","The summit failed"],
     ans:"World leaders visited the atomic bomb memorial",
     hint:"The symbolic choice of Hiroshima connected nuclear disarmament to modern diplomacy."},

    {type:"match", pairs:[
      {trg:"えんじょ", src:"aid"},
      {trg:"ぐんしゅく", src:"disarmament"},
      {trg:"けいざいせいさい", src:"economic sanctions"},
      {trg:"ちょうてい", src:"mediation"},
      {trg:"きょうていしょ", src:"agreement"}
    ]},

    {type:"fb", s:"かく{1}はせかいのもくひょうです。ひろしまがうったえています。",
     a:["ぐんしゅく"],
     opts:["ぐんしゅく","せいさい","がいこう","しゅけん"],
     hint:"Nuclear arms reduction is a global goal. Hiroshima's experience gives this special urgency.",
     sSrc:"Nuclear {1} is a global goal. Hiroshima appeals for it."}
  ]
};
export default BATCH7_L1;
