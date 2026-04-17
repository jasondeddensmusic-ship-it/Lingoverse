// Batch 8 – Unit 29 (B2.2 Economy): Trade & Globalization
const BATCH8_L1 = {
  id:"jav2_u29l_b8_1", title:"ぼうえきとグローバルか", icon:"🚢", xp:15, board:true,
  steps:[
    {type:"intro", title:"ぼうえきとグローバルか",
     desc:"Master trade and globalization vocabulary for discussing Japan's role in the world economy. These N2 terms appear in business news and economic discussions daily.",
     goals:["Discuss international trade terminology","Understand globalization concepts","Analyze Japan's economic relationships"]},

    {type:"teach", trg:"ぼうえき", src:"trade / foreign trade", pos:"noun", gender:null,
     note:"Kanji: 貿易. ぼうえきしゅうし = trade balance.\nゆしゅつ + ゆにゅう = exports + imports.",
     example:"A: にほんのぼうえきしゅうしはあかじです。\nB: エネルギーのゆにゅうがおおいからですね。\nA: それについてもう少(すこ)し詳(くわ)しく教(おし)えてください。\nB: 例(たと)えば、最近(さいきん)の事例(じれい)を見(み)ると、変化(へんか)が激(はげ)しいです。\nA: そうですか。どう対処(たいしょ)すればいいでしょうか。\nB: まず現状(げんじょう)を把握(はあく)してから、計画(けいかく)を立(た)てましょう。",
     exampleSrc:"A: Japan's trade balance is in deficit.\nB: Because energy imports are large.\nA: Please tell me more about that.\nB: For example, looking at recent cases, the changes are dramatic.\nA: Is that so? How should we handle it?\nB: Let's first grasp the current situation, then make a plan.",
     funFact:"Japan transformed from a ぼうえきこくろじ (trade surplus) country in the 1980s to occasional deficits after 2011 due to energy imports post-Fukushima. じどうしゃ (automobiles) and はんどうたい (semiconductors) remain top exports. FTA (じゆうぼうえききょうてい) negotiations shape modern trade policy."},

    {type:"teach", trg:"ゆしゅつ", src:"export", pos:"noun", gender:null,
     note:"Kanji: 輸出. ゆしゅつする = to export.\nゆしゅつひん = export goods.",
     example:"A: にほんのしゅようゆしゅつひんはじどうしゃです。\nB: トヨタやホンダがゆうめいですね。\nA: どのような方法(ほうほう)がありますか？\nB: いくつかの選択肢(せんたくし)があります。一番(いちばん)効果的(こうかてき)なのは実践(じっせん)です。\nA: 実践(じっせん)というのは、具体的(ぐたいてき)に何(なに)をすればいいですか？\nB: 毎日(まいにち)少(すこ)しずつ取(と)り組(く)むことが重要(じゅうよう)です。",
     exampleSrc:"A: Japan's main export product is automobiles.\nB: Toyota and Honda are famous.\nA: What kinds of methods are there?\nB: There are several options. The most effective is practice.\nA: What specifically should we do in practice?\nB: It is important to work on it a little each day.",
     funFact:"Japan's top ゆしゅつ: automobiles, electronic parts, industrial machinery, and steel. ゆしゅつきせい (export controls) on semiconductor technology became a major diplomatic issue with South Korea in 2019. Japanese ぶんかゆしゅつ (cultural exports) like anime and food are increasingly recognized as economic assets."},

    {type:"teach", trg:"ゆにゅう", src:"import", pos:"noun", gender:null,
     note:"Kanji: 輸入. ゆにゅうする = to import.\nゆにゅうひん = imported goods.",
     example:"A: せきゆのたいはんをちゅうとうからゆにゅうしています。\nB: エネルギーあんぜんほしょうがかだいですね。\nA: それはいつごろから始(はじ)まったのですか？\nB: 数年前(すうねんまえ)からですが、最近(さいきん)特(とく)に注目(ちゅうもく)されています。\nA: 今後(こんご)どうなると思(おも)いますか？\nB: さらに発展(はってん)すると予想(よそう)されています。",
     exampleSrc:"A: We import most petroleum from the Middle East.\nB: Energy security is a challenge.\nA: When did that start?\nB: It started a few years ago, but it has been getting particular attention recently.\nA: What do you think will happen going forward?\nB: It is expected to develop further.",
     funFact:"Japan ゆにゅう relies on the Middle East for oil, Australia for coal and gas, and the US/Australia for food. しょくりょうじきゅうりつ (food self-sufficiency rate) is only about 38%, making food ゆにゅう critical. The concept of ゆにゅうだいたい (import substitution) drives domestic agriculture policy."},

    {type:"teach", trg:"かんぜい", src:"tariff / customs duty", pos:"noun", gender:null,
     note:"Kanji: 関税. かんぜいをかける = to impose tariffs.\nかんぜいてっぱい = tariff elimination.",
     example:"A: FTAでかんぜいがてっぱいされます。\nB: しょうひしゃにはメリットがありますね。\nA: 何(なに)か問題(もんだい)はありませんでしたか？\nB: いくつか課題(かだい)がありましたが、解決(かいけつ)しました。\nA: どのように解決(かいけつ)したのですか？\nB: チーム全体(ぜんたい)で話(はな)し合(あ)って、最善(さいぜん)の方法(ほうほう)を見(み)つけました。",
     exampleSrc:"A: Tariffs will be eliminated under the FTA.\nB: There are benefits for consumers.\nA: Were there any problems?\nB: There were some issues, but we resolved them.\nA: How did you resolve them?\nB: We discussed it as a whole team and found the best method.",
     funFact:"かんぜい is a hot topic in Japanese trade negotiations. Japan's のうぎょう (agriculture) sector opposes かんぜいてっぱい on rice, beef, and dairy. CPTPP (かんたいへいようパートナーシップ) negotiations balanced industrial かんぜい reduction with agricultural protection. Rice かんぜい is among the world's highest."},

    {type:"teach", trg:"きょうきゅうもう", src:"supply chain", pos:"noun", gender:null,
     note:"きょうきゅう (supply) + もう (network/chain).\nAlso: サプライチェーン (loanword).",
     example:"A: パンデミックできょうきゅうもうがこんらんしました。\nB: こくないせいさんのじゅうようせいがわかりましたね。\nA: その点(てん)について、もう少(すこ)し説明(せつめい)していただけますか？\nB: もちろんです。重要(じゅうよう)なのは準備(じゅんび)と計画(けいかく)です。\nA: 準備(じゅんび)にはどのくらい時間(じかん)がかかりますか？\nB: 通常(つうじょう)、一週間(いっしゅうかん)から二週間(にしゅうかん)程度(ていど)です。",
     exampleSrc:"A: The pandemic disrupted supply chains.\nB: We understood the importance of domestic production.\nA: Could you explain that point a bit more?\nB: Of course. What is important is preparation and planning.\nA: How long does preparation take?\nB: Usually about one to two weeks.",
     funFact:"COVID-19 exposed きょうきゅうもう vulnerabilities globally. Japan's はんどうたいぶそく (semiconductor shortage) hit automobile production hard. けいざいあんぜんほしょう (economic security) legislation now promotes critical きょうきゅうもう diversification and domestic production of essential goods."},

    {type:"mc", q:"What is Japan's trade balance situation since 2011?", opts:["Occasional deficits due to energy imports","Consistent large surplus","Zero trade with other countries","No imports at all"], ans:"Occasional deficits due to energy imports",
     hint:"The Fukushima disaster increased Japan's dependence on imported fossil fuels."},

    {type:"teach", trg:"ちょくせつとうし", src:"foreign direct investment (FDI)", pos:"noun", gender:null,
     note:"ちょくせつ (direct) + とうし (investment).\nたいないちょくせつとうし = inward FDI.",
     example:"A: にほんへのちょくせつとうしがふえています。\nB: どのぶんやがおおいですか？\nA: それは素晴(すば)らしい結果(けっか)ですね。\nB: ありがとうございます。チーム全員(ぜんいん)の努力(どりょく)のおかげです。\nA: 今後(こんご)の目標(もくひょう)は何(なん)ですか？\nB: さらに品質(ひんしつ)を向上(こうじょう)させることです。",
     exampleSrc:"A: Direct investment into Japan is increasing.\nB: Which sectors are prominent?\nA: That is an excellent result.\nB: Thank you. It is thanks to the effort of the whole team.\nA: What are the future goals?\nB: To further improve quality.",
     funFact:"Japan's たいないちょくせつとうし (inward FDI) has historically been low compared to other developed countries due to language barriers, complex regulations, and cultural factors. The government's 'Invest Japan' initiative aims to double FDI. たいがいちょくせつとうし (outward FDI) is much larger, with Japanese companies investing globally."},

    {type:"teach", trg:"えんだか", src:"strong yen / yen appreciation", pos:"noun", gender:null,
     note:"えん (yen) + だか (high). Opposite: えんやす (weak yen).\nえんだかのえいきょう = impact of strong yen.",
     example:"A: えんだかでゆにゅうひんがやすくなりました。\nB: でもゆしゅつぎょうにはきびしいですね。\nA: 他(ほか)に何(なに)か気(き)をつけることはありますか？\nB: はい、期限(きげん)を守(まも)ることが一番(いちばん)大切(たいせつ)です。\nA: 期限(きげん)に間(ま)に合(あ)わない場合(ばあい)はどうしますか？\nB: 早(はや)めに上司(じょうし)に相談(そうだん)して、調整(ちょうせい)をお願(ねが)いします。",
     exampleSrc:"A: Imported goods became cheaper with the strong yen.\nB: But it is tough for export industries.\nA: Is there anything else to be careful about?\nB: Yes, meeting deadlines is the most important thing.\nA: What do you do if you cannot meet the deadline?\nB: Consult your supervisor early and ask for an adjustment.",
     funFact:"えんだか/えんやす swings dramatically affect Japan's economy. えんだか helps consumers (cheaper imports) but hurts exporters (less competitive abroad). えんやす does the opposite. The 2022-2024 period saw historic えんやす (1 USD = 150+ yen), boosting tourism but raising import costs. にちぎん (Bank of Japan) monetary policy directly influences the exchange rate."},

    {type:"teach", trg:"きょうそうしゃ", src:"competitor", pos:"noun", gender:null,
     note:"Kanji: 競争者. きょうそう = competition.\nきょうそうそしゃ = competing company.",
     example:"A: きょうそうしゃのどうこうをぶんせきしています。\nB: マーケットシェアはどうですか？\nA: その件(けん)について進捗(しんちょく)はありますか？\nB: はい、順調(じゅんちょう)に進(すす)んでいます。\nA: 完了(かんりょう)の見込(みこ)みはいつごろですか？\nB: 来月(らいげつ)の初(はじ)めには完了(かんりょう)できる予定(よてい)です。",
     exampleSrc:"A: We are analyzing competitor trends.\nB: How is the market share?\nA: Is there any progress on that matter?\nB: Yes, it is progressing smoothly.\nA: When is it expected to be completed?\nB: It is scheduled to be completed by the beginning of next month.",
     funFact:"Japanese business uses both きょうそうしゃ (competitor, person/company) and きょうごうたしゃ (competing other company). Japan's きょうそうほう (competition law) prevents monopolies. The concept of きょうそう (competition) coexists with きょうちょう (cooperation) in Japanese business philosophy."},

    {type:"teach", trg:"さんぎょう", src:"industry", pos:"noun", gender:null,
     note:"Kanji: 産業. さんぎょうこうぞう = industrial structure.\nだいいちじさんぎょう = primary industry.",
     example:"A: にほんのさんぎょうこうぞうがかわりつつあります。\nB: サービスさんぎょうがちゅうしんですね。\nA: 以前(いぜん)と比(くら)べてどう変(か)わりましたか？\nB: かなり改善(かいぜん)されました。効率(こうりつ)が上(あ)がりました。\nA: その改善(かいぜん)の要因(よういん)は何(なん)ですか？\nB: 新(あたら)しいシステムの導入(どうにゅう)が大(おお)きかったです。",
     exampleSrc:"A: Japan's industrial structure is changing.\nB: The service industry is central.\nA: How has it changed compared to before?\nB: It has improved considerably. Efficiency has increased.\nA: What was the cause of that improvement?\nB: The introduction of the new system was a big factor.",
     funFact:"Japan's さんぎょう evolved from agriculture to manufacturing to services. The さんぎょうかくめい (industrial revolution) transformed Japan in the Meiji era. Today, だいさんじさんぎょう (tertiary/service industry) employs about 70% of workers. Japanese ものづくり (manufacturing craftsmanship) remains globally respected."},

    {type:"teach", trg:"インフラ", src:"infrastructure", pos:"noun", gender:null,
     note:"Short for インフラストラクチャー.\nこうつうインフラ = transportation infrastructure.",
     example:"A: こうれいかしたインフラのしゅうぜんがひつようです。\nB: よさんのかくほがかだいですね。\nA: ご意見(いけん)をお聞(き)かせいただけますか？\nB: 私(わたし)の考(かんが)えでは、もう少(すこ)し検討(けんとう)が必要(ひつよう)だと思(おも)います。\nA: どの点(てん)を検討(けんとう)すべきでしょうか？\nB: 予算(よさん)と人員(じんいん)の面(めん)をもう一度(いちど)見直(みなお)す必要(ひつよう)があります。",
     exampleSrc:"A: Repair of aging infrastructure is needed.\nB: Securing the budget is a challenge.\nA: Could you share your opinion?\nB: In my opinion, I think a bit more consideration is needed.\nA: Which points should be considered?\nB: We need to review the budget and staffing aspects once more.",
     funFact:"Japan's インフラ (roads, bridges, tunnels) built during high economic growth is aging. The 2012 Sasago tunnel collapse highlighted the urgency. インフラゆしゅつ (infrastructure export) is a Japanese strategy: selling しんかんせん technology, water treatment, and bridge construction to developing countries."},

    {type:"fb", s:"FTAで{1}がてっぱいされます。\n(Tariffs will be eliminated under the FTA.)", a:"かんぜい", opts:["かんぜい","ぼうえき","ゆしゅつ","きょうきゅう"], sSrc:"Tariffs will be eliminated under the FTA.",
     hint:"This word means the tax imposed on imported goods at the border."},

    {type:"teach", trg:"きせい", src:"regulation / restriction", pos:"noun", gender:null,
     note:"Kanji: 規制. きせいかんわ = deregulation.\nきせいをゆるめる = to loosen regulations.",
     example:"A: きせいかんわでしんきさんにゅうがかんたんになりました。\nB: けいざいかっせいかにつながりますね。\nA: 何(なに)か良(よ)い方法(ほうほう)はありませんか？\nB: 一(ひと)つ提案(ていあん)があります。段階的(だんかいてき)に進(すす)めてはどうでしょうか。\nA: 段階的(だんかいてき)に、というのはどういうことですか？\nB: まず小規模(しょうきぼ)で試(ため)してから、徐々(じょじょ)に拡大(かくだい)するということです。",
     exampleSrc:"A: Deregulation made new market entry easier.\nB: It leads to economic revitalization.\nA: Is there a good method?\nB: I have one suggestion. How about proceeding step by step?\nA: What do you mean by step by step?\nB: It means trying it on a small scale first, then gradually expanding.",
     funFact:"きせいかんわ (deregulation) has been a recurring Japanese economic policy theme since the 1980s. Advocates say excessive きせい stifles innovation; critics say it reduces safety. The ライドシェア (ride-sharing) debate shows the tension: きせいかんわ could help drivers but threatens taxi industry livelihoods."},

    {type:"teach", trg:"けいざいせいちょう", src:"economic growth", pos:"noun", gender:null,
     note:"けいざい (economy) + せいちょう (growth).\nGDP (こくないそうせいさん) measures this.",
     example:"A: けいざいせいちょうりつがじょうしょうしました。\nB: しょうひかっきのけっかですか？\nA: この問題(もんだい)をどう思(おも)いますか？\nB: 複雑(ふくざつ)な問題(もんだい)ですが、解決策(かいけつさく)はあると思(おも)います。\nA: どのような解決策(かいけつさく)を考(かんが)えていますか？\nB: 関係者(かんけいしゃ)全員(ぜんいん)で話(はな)し合(あ)いの場(ば)を設(もう)けることが第一歩(だいいっぽ)です。",
     exampleSrc:"A: The economic growth rate rose.\nB: Is it the result of consumer spending?\nA: What do you think about this issue?\nB: It is a complex issue, but I think there are solutions.\nA: What kind of solutions are you thinking of?\nB: The first step is to set up a discussion forum for all stakeholders.",
     funFact:"Japan's こうどけいざいせいちょう (high economic growth, 1955-1973) averaged 10% annual GDP growth, transforming Japan from post-war ruin to economic superpower. The バブルけいざい (bubble economy) of the late 1980s was followed by うしなわれたさんじゅうねん (lost three decades) of stagnation."},

    {type:"match", pairs:[{trg:"ゆしゅつ",src:"export"},{trg:"ゆにゅう",src:"import"},{trg:"かんぜい",src:"tariff"},{trg:"えんだか",src:"strong yen"},{trg:"きせい",src:"regulation"}],
     hint:"Match each economic term with its English meaning."},

    {type:"mc", q:"What is Japan's しょくりょうじきゅうりつ approximately?", opts:["About 38%","About 80%","About 95%","About 55%"], ans:"About 38%",
     hint:"Japan depends heavily on food imports for most of its calories."},

    {type:"fb", s:"パンデミックで{1}がこんらんしました。\n(The pandemic disrupted supply chains.)", a:"きょうきゅうもう", opts:["きょうきゅうもう","ぼうえき","さんぎょう","インフラ"], sSrc:"The pandemic disrupted supply chains.",
     hint:"This word describes the network of suppliers and manufacturers that deliver goods."},

    {type:"mc", q:"What does えんだか mean for Japanese consumers?", opts:["Imported goods become cheaper","Exported goods become cheaper","No effect on prices","All goods become more expensive"], ans:"Imported goods become cheaper",
     hint:"When the yen is strong, buying foreign products costs fewer yen."}
  ]
};
export default BATCH8_L1;
