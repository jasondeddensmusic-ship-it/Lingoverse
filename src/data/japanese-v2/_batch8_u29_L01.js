// Batch 8 – Unit 29 (B2.2 Economy): Trade & Globalization
const BATCH8_L1 = {
  id:"jav2_u29l_b8_1", title:"貿易(ぼうえき)とグローバル化(か)", icon:"🚢", xp:15, board:true,
  steps:[
    {type:"intro", title:"貿易(ぼうえき)とグローバル化(か)",
     desc:"Master trade and globalization vocabulary for discussing Japan's role in the world economy. These N2 terms appear in business news and economic discussions daily.",
     goals:["Discuss international trade terminology","Understand globalization concepts","Analyze Japan's economic relationships"]},

    {type:"teach", trg:"貿易(ぼうえき)", src:"trade / foreign trade", pos:"noun", gender:null,
     note:"Kanji: 貿易. 貿易(ぼうえき)収支(しゅうし) = trade balance.\n輸出(ゆしゅつ) + 輸入(ゆにゅう) = exports + imports.",
     example:"A: 日本(にほん)の貿易(ぼうえき)収支(しゅうし)は赤字(あかじ)です。\nB: エネルギーの輸入(ゆにゅう)が多(おお)いからですね。\nA: それについてもう少(すこ)し詳(くわ)しく教(おし)えてください。\nB: 例(たと)えば、最近(さいきん)の事例(じれい)を見(み)ると、変化(へんか)が激(はげ)しいです。\nA: そうですか。どう対処(たいしょ)すればいいでしょうか。\nB: まず現状(げんじょう)を把握(はあく)してから、計画(けいかく)を立(た)てましょう。",
     exampleSrc:"A: Japan's trade balance is in deficit.\nB: Because energy imports are large.\nA: Please tell me more about that.\nB: For example, looking at recent cases, the changes are dramatic.\nA: Is that so? How should we handle it?\nB: Let's first grasp the current situation, then make a plan.",
     funFact:"Japan transformed from a 貿易(ぼうえき)黒字(くろじ) (trade surplus) country in the 1980s to occasional deficits after 2011 due to energy imports post-Fukushima. 自動車(じどうしゃ) (automobiles) and 半導体(はんどうたい) (semiconductors) remain top exports. FTA (自由(じゆう)貿易(ぼうえき)協定(きょうてい)) negotiations shape modern trade policy."},

    {type:"teach", trg:"輸出(ゆしゅつ)", src:"export", pos:"noun", gender:null,
     note:"Kanji: 輸出. 輸出(ゆしゅつ)する = to export.\n輸出(ゆしゅつ)品(ひん) = export goods.",
     example:"A: 日本(にほん)の主要(しゅよう)輸出(ゆしゅつ)品(ひん)は自動車(じどうしゃ)です。\nB: トヨタやホンダが有名(ゆうめい)ですね。\nA: どのような方法(ほうほう)がありますか？\nB: いくつかの選択肢(せんたくし)があります。一番(いちばん)効果的(こうかてき)なのは実践(じっせん)です。\nA: 実践(じっせん)というのは、具体的(ぐたいてき)に何(なに)をすればいいですか？\nB: 毎日(まいにち)少(すこ)しずつ取(と)り組(く)むことが重要(じゅうよう)です。",
     exampleSrc:"A: Japan's main export product is automobiles.\nB: Toyota and Honda are famous.\nA: What kinds of methods are there?\nB: There are several options. The most effective is practice.\nA: What specifically should we do in practice?\nB: It is important to work on it a little each day.",
     funFact:"Japan's top 輸出(ゆしゅつ): automobiles, electronic parts, industrial machinery, and steel. 輸出(ゆしゅつ)規制(きせい) (export controls) on semiconductor technology became a major diplomatic issue with South Korea in 2019. Japanese 文化(ぶんか)輸出(ゆしゅつ) (cultural exports) like anime and food are increasingly recognized as economic assets."},

    {type:"teach", trg:"輸入(ゆにゅう)", src:"import", pos:"noun", gender:null,
     note:"Kanji: 輸入. 輸入(ゆにゅう)する = to import.\n輸入(ゆにゅう)品(ひん) = imported goods.",
     example:"A: 石油(せきゆ)の大半(たいはん)を中東(ちゅうとう)から輸入(ゆにゅう)しています。\nB: エネルギー安全保障(あんぜんほしょう)が課題(かだい)ですね。\nA: それはいつごろから始(はじ)まったのですか？\nB: 数年前(すうねんまえ)からですが、最近(さいきん)特(とく)に注目(ちゅうもく)されています。\nA: 今後(こんご)どうなると思(おも)いますか？\nB: さらに発展(はってん)すると予想(よそう)されています。",
     exampleSrc:"A: We import most petroleum from the Middle East.\nB: Energy security is a challenge.\nA: When did that start?\nB: It started a few years ago, but it has been getting particular attention recently.\nA: What do you think will happen going forward?\nB: It is expected to develop further.",
     funFact:"Japan 輸入(ゆにゅう) relies on the Middle East for oil, Australia for coal and gas, and the US/Australia for food. 食料(しょくりょう)自給率(じきゅうりつ) (food self-sufficiency rate) is only about 38%, making food 輸入(ゆにゅう) critical. The concept of 輸入(ゆにゅう)代替(だいたい) (import substitution) drives domestic agriculture policy."},

    {type:"teach", trg:"関税(かんぜい)", src:"tariff / customs duty", pos:"noun", gender:null,
     note:"Kanji: 関税. 関税(かんぜい)をかける = to impose tariffs.\n関税(かんぜい)撤廃(てっぱい) = tariff elimination.",
     example:"A: FTAで関税(かんぜい)が撤廃(てっぱい)されます。\nB: 消費者(しょうひしゃ)にはメリットがありますね。\nA: 何(なに)か問題(もんだい)はありませんでしたか？\nB: いくつか課題(かだい)がありましたが、解決(かいけつ)しました。\nA: どのように解決(かいけつ)したのですか？\nB: チーム全体(ぜんたい)で話(はな)し合(あ)って、最善(さいぜん)の方法(ほうほう)を見(み)つけました。",
     exampleSrc:"A: Tariffs will be eliminated under the FTA.\nB: There are benefits for consumers.\nA: Were there any problems?\nB: There were some issues, but we resolved them.\nA: How did you resolve them?\nB: We discussed it as a whole team and found the best method.",
     funFact:"関税(かんぜい) is a hot topic in Japanese trade negotiations. Japan's 農業(のうぎょう) (agriculture) sector opposes 関税(かんぜい)撤廃(てっぱい) on rice, beef, and dairy. CPTPP (環太平洋(かんたいへいよう)パートナーシップ) negotiations balanced industrial 関税(かんぜい) reduction with agricultural protection. Rice 関税(かんぜい) is among the world's highest."},

    {type:"teach", trg:"供給(きょうきゅう)網(もう)", src:"supply chain", pos:"noun", gender:null,
     note:"供給(きょうきゅう) (supply) + 網(もう) (network/chain).\nAlso: サプライチェーン (loanword).",
     example:"A: パンデミックで供給(きょうきゅう)網(もう)が混乱(こんらん)しました。\nB: 国内(こくない)生産(せいさん)の重要性(じゅうようせい)が分(わ)かりましたね。\nA: その点(てん)について、もう少(すこ)し説明(せつめい)していただけますか？\nB: もちろんです。重要(じゅうよう)なのは準備(じゅんび)と計画(けいかく)です。\nA: 準備(じゅんび)にはどのくらい時間(じかん)がかかりますか？\nB: 通常(つうじょう)、一週間(いっしゅうかん)から二週間(にしゅうかん)程度(ていど)です。",
     exampleSrc:"A: The pandemic disrupted supply chains.\nB: We understood the importance of domestic production.\nA: Could you explain that point a bit more?\nB: Of course. What is important is preparation and planning.\nA: How long does preparation take?\nB: Usually about one to two weeks.",
     funFact:"COVID-19 exposed 供給(きょうきゅう)網(もう) vulnerabilities globally. Japan's 半導体(はんどうたい)不足(ぶそく) (semiconductor shortage) hit automobile production hard. 経済(けいざい)安全保障(あんぜんほしょう) (economic security) legislation now promotes critical 供給(きょうきゅう)網(もう) diversification and domestic production of essential goods."},

    {type:"mc", q:"What is Japan's trade balance situation since 2011?", opts:["Occasional deficits due to energy imports","Consistent large surplus","Zero trade with other countries","No imports at all"], ans:"Occasional deficits due to energy imports",
     hint:"The Fukushima disaster increased Japan's dependence on imported fossil fuels."},

    {type:"teach", trg:"直接投資(ちょくせつとうし)", src:"foreign direct investment (FDI)", pos:"noun", gender:null,
     note:"直接(ちょくせつ) (direct) + 投資(とうし) (investment).\n対内(たいない)直接投資(ちょくせつとうし) = inward FDI.",
     example:"A: 日本(にほん)への直接投資(ちょくせつとうし)が増(ふ)えています。\nB: どの分野(ぶんや)が多(おお)いですか？\nA: それは素晴(すば)らしい結果(けっか)ですね。\nB: ありがとうございます。チーム全員(ぜんいん)の努力(どりょく)のおかげです。\nA: 今後(こんご)の目標(もくひょう)は何(なん)ですか？\nB: さらに品質(ひんしつ)を向上(こうじょう)させることです。",
     exampleSrc:"A: Direct investment into Japan is increasing.\nB: Which sectors are prominent?\nA: That is an excellent result.\nB: Thank you. It is thanks to the effort of the whole team.\nA: What are the future goals?\nB: To further improve quality.",
     funFact:"Japan's 対内(たいない)直接投資(ちょくせつとうし) (inward FDI) has historically been low compared to other developed countries due to language barriers, complex regulations, and cultural factors. The government's 'Invest Japan' initiative aims to double FDI. 対外(たいがい)直接投資(ちょくせつとうし) (outward FDI) is much larger, with Japanese companies investing globally."},

    {type:"teach", trg:"円高(えんだか)", src:"strong yen / yen appreciation", pos:"noun", gender:null,
     note:"円(えん) (yen) + 高(だか) (high). Opposite: 円安(えんやす) (weak yen).\n円高(えんだか)の影響(えいきょう) = impact of strong yen.",
     example:"A: 円高(えんだか)で輸入(ゆにゅう)品(ひん)が安(やす)くなりました。\nB: でも輸出(ゆしゅつ)業(ぎょう)には厳(きび)しいですね。\nA: 他(ほか)に何(なに)か気(き)をつけることはありますか？\nB: はい、期限(きげん)を守(まも)ることが一番(いちばん)大切(たいせつ)です。\nA: 期限(きげん)に間(ま)に合(あ)わない場合(ばあい)はどうしますか？\nB: 早(はや)めに上司(じょうし)に相談(そうだん)して、調整(ちょうせい)をお願(ねが)いします。",
     exampleSrc:"A: Imported goods became cheaper with the strong yen.\nB: But it is tough for export industries.\nA: Is there anything else to be careful about?\nB: Yes, meeting deadlines is the most important thing.\nA: What do you do if you cannot meet the deadline?\nB: Consult your supervisor early and ask for an adjustment.",
     funFact:"円高(えんだか)/円安(えんやす) swings dramatically affect Japan's economy. 円高(えんだか) helps consumers (cheaper imports) but hurts exporters (less competitive abroad). 円安(えんやす) does the opposite. The 2022-2024 period saw historic 円安(えんやす) (1 USD = 150+ yen), boosting tourism but raising import costs. 日銀(にちぎん) (Bank of Japan) monetary policy directly influences the exchange rate."},

    {type:"teach", trg:"競争者(きょうそうしゃ)", src:"competitor", pos:"noun", gender:null,
     note:"Kanji: 競争者. 競争(きょうそう) = competition.\n競合(きょうごう)他社(たしゃ) = competing company.",
     example:"A: 競争者(きょうそうしゃ)の動向(どうこう)を分析(ぶんせき)しています。\nB: マーケットシェアはどうですか？\nA: その件(けん)について進捗(しんちょく)はありますか？\nB: はい、順調(じゅんちょう)に進(すす)んでいます。\nA: 完了(かんりょう)の見込(みこ)みはいつごろですか？\nB: 来月(らいげつ)の初(はじ)めには完了(かんりょう)できる予定(よてい)です。",
     exampleSrc:"A: We are analyzing competitor trends.\nB: How is the market share?\nA: Is there any progress on that matter?\nB: Yes, it is progressing smoothly.\nA: When is it expected to be completed?\nB: It is scheduled to be completed by the beginning of next month.",
     funFact:"Japanese business uses both 競争者(きょうそうしゃ) (competitor, person/company) and 競合(きょうごう)他社(たしゃ) (competing other company). Japan's 競争(きょうそう)法(ほう) (competition law) prevents monopolies. The concept of 競争(きょうそう) (competition) coexists with 協調(きょうちょう) (cooperation) in Japanese business philosophy."},

    {type:"teach", trg:"産業(さんぎょう)", src:"industry", pos:"noun", gender:null,
     note:"Kanji: 産業. 産業(さんぎょう)構造(こうぞう) = industrial structure.\n第一次(だいいちじ)産業(さんぎょう) = primary industry.",
     example:"A: 日本(にほん)の産業(さんぎょう)構造(こうぞう)が変(か)わりつつあります。\nB: サービス産業(さんぎょう)が中心(ちゅうしん)ですね。\nA: 以前(いぜん)と比(くら)べてどう変(か)わりましたか？\nB: かなり改善(かいぜん)されました。効率(こうりつ)が上(あ)がりました。\nA: その改善(かいぜん)の要因(よういん)は何(なん)ですか？\nB: 新(あたら)しいシステムの導入(どうにゅう)が大(おお)きかったです。",
     exampleSrc:"A: Japan's industrial structure is changing.\nB: The service industry is central.\nA: How has it changed compared to before?\nB: It has improved considerably. Efficiency has increased.\nA: What was the cause of that improvement?\nB: The introduction of the new system was a big factor.",
     funFact:"Japan's 産業(さんぎょう) evolved from agriculture to manufacturing to services. The 産業(さんぎょう)革命(かくめい) (industrial revolution) transformed Japan in the Meiji era. Today, 第三次(だいさんじ)産業(さんぎょう) (tertiary/service industry) employs about 70% of workers. Japanese ものづくり (manufacturing craftsmanship) remains globally respected."},

    {type:"teach", trg:"インフラ", src:"infrastructure", pos:"noun", gender:null,
     note:"Short for インフラストラクチャー.\n交通(こうつう)インフラ = transportation infrastructure.",
     example:"A: 老朽化(ろうきゅうか)したインフラの修繕(しゅうぜん)が必要(ひつよう)です。\nB: 予算(よさん)の確保(かくほ)が課題(かだい)ですね。\nA: ご意見(いけん)をお聞(き)かせいただけますか？\nB: 私(わたし)の考(かんが)えでは、もう少(すこ)し検討(けんとう)が必要(ひつよう)だと思(おも)います。\nA: どの点(てん)を検討(けんとう)すべきでしょうか？\nB: 予算(よさん)と人員(じんいん)の面(めん)をもう一度(いちど)見直(みなお)す必要(ひつよう)があります。",
     exampleSrc:"A: Repair of aging infrastructure is needed.\nB: Securing the budget is a challenge.\nA: Could you share your opinion?\nB: In my opinion, I think a bit more consideration is needed.\nA: Which points should be considered?\nB: We need to review the budget and staffing aspects once more.",
     funFact:"Japan's インフラ (roads, bridges, tunnels) built during high economic growth is aging. The 2012 Sasago tunnel collapse highlighted the urgency. インフラ輸出(ゆしゅつ) (infrastructure export) is a Japanese strategy: selling 新幹線(しんかんせん) technology, water treatment, and bridge construction to developing countries."},

    {type:"fb", s:"FTAで{1}が撤廃(てっぱい)されます。\n(Tariffs will be eliminated under the FTA.)", a:"関税(かんぜい)", opts:["関税(かんぜい)","貿易(ぼうえき)","輸出(ゆしゅつ)","供給(きょうきゅう)"], sSrc:"Tariffs will be eliminated under the FTA.",
     hint:"This word means the tax imposed on imported goods at the border."},

    {type:"teach", trg:"規制(きせい)", src:"regulation / restriction", pos:"noun", gender:null,
     note:"Kanji: 規制. 規制(きせい)緩和(かんわ) = deregulation.\n規制(きせい)を緩(ゆる)める = to loosen regulations.",
     example:"A: 規制(きせい)緩和(かんわ)で新規(しんき)参入(さんにゅう)が簡単(かんたん)になりました。\nB: 経済(けいざい)活性化(かっせいか)につながりますね。\nA: 何(なに)か良(よ)い方法(ほうほう)はありませんか？\nB: 一(ひと)つ提案(ていあん)があります。段階的(だんかいてき)に進(すす)めてはどうでしょうか。\nA: 段階的(だんかいてき)に、というのはどういうことですか？\nB: まず小規模(しょうきぼ)で試(ため)してから、徐々(じょじょ)に拡大(かくだい)するということです。",
     exampleSrc:"A: Deregulation made new market entry easier.\nB: It leads to economic revitalization.\nA: Is there a good method?\nB: I have one suggestion. How about proceeding step by step?\nA: What do you mean by step by step?\nB: It means trying it on a small scale first, then gradually expanding.",
     funFact:"規制(きせい)緩和(かんわ) (deregulation) has been a recurring Japanese economic policy theme since the 1980s. Advocates say excessive 規制(きせい) stifles innovation; critics say it reduces safety. The ライドシェア (ride-sharing) debate shows the tension: 規制(きせい)緩和(かんわ) could help drivers but threatens taxi industry livelihoods."},

    {type:"teach", trg:"経済(けいざい)成長(せいちょう)", src:"economic growth", pos:"noun", gender:null,
     note:"経済(けいざい) (economy) + 成長(せいちょう) (growth).\nGDP (国内(こくない)総(そう)生産(せいさん)) measures this.",
     example:"A: 経済(けいざい)成長(せいちょう)率(りつ)が上昇(じょうしょう)しました。\nB: 消費(しょうひ)活気(かっき)の結果(けっか)ですか？\nA: この問題(もんだい)をどう思(おも)いますか？\nB: 複雑(ふくざつ)な問題(もんだい)ですが、解決策(かいけつさく)はあると思(おも)います。\nA: どのような解決策(かいけつさく)を考(かんが)えていますか？\nB: 関係者(かんけいしゃ)全員(ぜんいん)で話(はな)し合(あ)いの場(ば)を設(もう)けることが第一歩(だいいっぽ)です。",
     exampleSrc:"A: The economic growth rate rose.\nB: Is it the result of consumer spending?\nA: What do you think about this issue?\nB: It is a complex issue, but I think there are solutions.\nA: What kind of solutions are you thinking of?\nB: The first step is to set up a discussion forum for all stakeholders.",
     funFact:"Japan's 高度(こうど)経済(けいざい)成長(せいちょう) (high economic growth, 1955-1973) averaged 10% annual GDP growth, transforming Japan from post-war ruin to economic superpower. The バブル経済(けいざい) (bubble economy) of the late 1980s was followed by 失(うしな)われた三十年(さんじゅうねん) (lost three decades) of stagnation."},

    {type:"match", pairs:[{trg:"輸出(ゆしゅつ)",src:"export"},{trg:"輸入(ゆにゅう)",src:"import"},{trg:"関税(かんぜい)",src:"tariff"},{trg:"円高(えんだか)",src:"strong yen"},{trg:"規制(きせい)",src:"regulation"}],
     hint:"Match each economic term with its English meaning."},

    {type:"mc", q:"What is Japan's 食料(しょくりょう)自給率(じきゅうりつ) approximately?", opts:["About 38%","About 80%","About 95%","About 55%"], ans:"About 38%",
     hint:"Japan depends heavily on food imports for most of its calories."},

    {type:"fb", s:"パンデミックで{1}が混乱(こんらん)しました。\n(The pandemic disrupted supply chains.)", a:"供給(きょうきゅう)網(もう)", opts:["供給(きょうきゅう)網(もう)","貿易(ぼうえき)","産業(さんぎょう)","インフラ"], sSrc:"The pandemic disrupted supply chains.",
     hint:"This word describes the network of suppliers and manufacturers that deliver goods."},

    {type:"mc", q:"What does 円高(えんだか) mean for Japanese consumers?", opts:["Imported goods become cheaper","Exported goods become cheaper","No effect on prices","All goods become more expensive"], ans:"Imported goods become cheaper",
     hint:"When the yen is strong, buying foreign products costs fewer yen."}
  ]
};
export default BATCH8_L1;
