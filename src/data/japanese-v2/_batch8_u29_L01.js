// Batch 8 – Unit 29 (B2.2 Economy): Trade & Globalization
const BATCH8_L1 = {
  id:"jav2_u29l_b8_1", title:"ぼうえきとグローバルか", icon:"🚢", xp:15, board:true,
  steps:[
    {type:"intro", title:"ぼうえきとグローバルか",
     desc:"Master trade and globalization vocabulary for discussing Japan's role in the world economy. These N2 terms appear in business news and economic discussions daily.",
     goals:["Discuss international trade terminology","Understand globalization concepts","Analyze Japan's economic relationships"]},

    {type:"teach", trg:"ぼうえき", src:"trade / foreign trade", pos:"noun", gender:null,
     note:"Kanji: 貿易. ぼうえきしゅうし = trade balance.\nゆしゅつ + ゆにゅう = exports + imports.",
     example:"A: にほんのぼうえきしゅうしはあかじです。\nB: エネルギーのゆにゅうがおおいからですね。",
     exampleSrc:"A: Japan's trade balance is in deficit.\nB: Because energy imports are large.",
     funFact:"Japan transformed from a ぼうえきこくろじ (trade surplus) country in the 1980s to occasional deficits after 2011 due to energy imports post-Fukushima. じどうしゃ (automobiles) and はんどうたい (semiconductors) remain top exports. FTA (じゆうぼうえききょうてい) negotiations shape modern trade policy."},

    {type:"teach", trg:"ゆしゅつ", src:"export", pos:"noun", gender:null,
     note:"Kanji: 輸出. ゆしゅつする = to export.\nゆしゅつひん = export goods.",
     example:"A: にほんのしゅようゆしゅつひんはじどうしゃです。\nB: トヨタやホンダがゆうめいですね。",
     exampleSrc:"A: Japan's main export product is automobiles.\nB: Toyota and Honda are famous.",
     funFact:"Japan's top ゆしゅつ: automobiles, electronic parts, industrial machinery, and steel. ゆしゅつきせい (export controls) on semiconductor technology became a major diplomatic issue with South Korea in 2019. Japanese ぶんかゆしゅつ (cultural exports) like anime and food are increasingly recognized as economic assets."},

    {type:"teach", trg:"ゆにゅう", src:"import", pos:"noun", gender:null,
     note:"Kanji: 輸入. ゆにゅうする = to import.\nゆにゅうひん = imported goods.",
     example:"A: せきゆのたいはんをちゅうとうからゆにゅうしています。\nB: エネルギーあんぜんほしょうがかだいですね。",
     exampleSrc:"A: We import most petroleum from the Middle East.\nB: Energy security is a challenge.",
     funFact:"Japan ゆにゅう relies on the Middle East for oil, Australia for coal and gas, and the US/Australia for food. しょくりょうじきゅうりつ (food self-sufficiency rate) is only about 38%, making food ゆにゅう critical. The concept of ゆにゅうだいたい (import substitution) drives domestic agriculture policy."},

    {type:"teach", trg:"かんぜい", src:"tariff / customs duty", pos:"noun", gender:null,
     note:"Kanji: 関税. かんぜいをかける = to impose tariffs.\nかんぜいてっぱい = tariff elimination.",
     example:"A: FTAでかんぜいがてっぱいされます。\nB: しょうひしゃにはメリットがありますね。",
     exampleSrc:"A: Tariffs will be eliminated under the FTA.\nB: There are benefits for consumers.",
     funFact:"かんぜい is a hot topic in Japanese trade negotiations. Japan's のうぎょう (agriculture) sector opposes かんぜいてっぱい on rice, beef, and dairy. CPTPP (かんたいへいようパートナーシップ) negotiations balanced industrial かんぜい reduction with agricultural protection. Rice かんぜい is among the world's highest."},

    {type:"teach", trg:"きょうきゅうもう", src:"supply chain", pos:"noun", gender:null,
     note:"きょうきゅう (supply) + もう (network/chain).\nAlso: サプライチェーン (loanword).",
     example:"A: パンデミックできょうきゅうもうがこんらんしました。\nB: こくないせいさんのじゅうようせいがわかりましたね。",
     exampleSrc:"A: The pandemic disrupted supply chains.\nB: We understood the importance of domestic production.",
     funFact:"COVID-19 exposed きょうきゅうもう vulnerabilities globally. Japan's はんどうたいぶそく (semiconductor shortage) hit automobile production hard. けいざいあんぜんほしょう (economic security) legislation now promotes critical きょうきゅうもう diversification and domestic production of essential goods."},

    {type:"mc", q:"What is Japan's trade balance situation since 2011?", opts:["Occasional deficits due to energy imports","Consistent large surplus","Zero trade with other countries","No imports at all"], ans:"Occasional deficits due to energy imports",
     hint:"The Fukushima disaster increased Japan's dependence on imported fossil fuels."},

    {type:"teach", trg:"ちょくせつとうし", src:"foreign direct investment (FDI)", pos:"noun", gender:null,
     note:"ちょくせつ (direct) + とうし (investment).\nたいないちょくせつとうし = inward FDI.",
     example:"A: にほんへのちょくせつとうしがふえています。\nB: どのぶんやがおおいですか？",
     exampleSrc:"A: Direct investment into Japan is increasing.\nB: Which sectors are prominent?",
     funFact:"Japan's たいないちょくせつとうし (inward FDI) has historically been low compared to other developed countries due to language barriers, complex regulations, and cultural factors. The government's 'Invest Japan' initiative aims to double FDI. たいがいちょくせつとうし (outward FDI) is much larger, with Japanese companies investing globally."},

    {type:"teach", trg:"えんだか", src:"strong yen / yen appreciation", pos:"noun", gender:null,
     note:"えん (yen) + だか (high). Opposite: えんやす (weak yen).\nえんだかのえいきょう = impact of strong yen.",
     example:"A: えんだかでゆにゅうひんがやすくなりました。\nB: でもゆしゅつぎょうにはきびしいですね。",
     exampleSrc:"A: Imported goods became cheaper with the strong yen.\nB: But it is tough for export industries.",
     funFact:"えんだか/えんやす swings dramatically affect Japan's economy. えんだか helps consumers (cheaper imports) but hurts exporters (less competitive abroad). えんやす does the opposite. The 2022-2024 period saw historic えんやす (1 USD = 150+ yen), boosting tourism but raising import costs. にちぎん (Bank of Japan) monetary policy directly influences the exchange rate."},

    {type:"teach", trg:"きょうそうしゃ", src:"competitor", pos:"noun", gender:null,
     note:"Kanji: 競争者. きょうそう = competition.\nきょうそうそしゃ = competing company.",
     example:"A: きょうそうしゃのどうこうをぶんせきしています。\nB: マーケットシェアはどうですか？",
     exampleSrc:"A: We are analyzing competitor trends.\nB: How is the market share?",
     funFact:"Japanese business uses both きょうそうしゃ (competitor, person/company) and きょうごうたしゃ (competing other company). Japan's きょうそうほう (competition law) prevents monopolies. The concept of きょうそう (competition) coexists with きょうちょう (cooperation) in Japanese business philosophy."},

    {type:"teach", trg:"さんぎょう", src:"industry", pos:"noun", gender:null,
     note:"Kanji: 産業. さんぎょうこうぞう = industrial structure.\nだいいちじさんぎょう = primary industry.",
     example:"A: にほんのさんぎょうこうぞうがかわりつつあります。\nB: サービスさんぎょうがちゅうしんですね。",
     exampleSrc:"A: Japan's industrial structure is changing.\nB: The service industry is central.",
     funFact:"Japan's さんぎょう evolved from agriculture to manufacturing to services. The さんぎょうかくめい (industrial revolution) transformed Japan in the Meiji era. Today, だいさんじさんぎょう (tertiary/service industry) employs about 70% of workers. Japanese ものづくり (manufacturing craftsmanship) remains globally respected."},

    {type:"teach", trg:"インフラ", src:"infrastructure", pos:"noun", gender:null,
     note:"Short for インフラストラクチャー.\nこうつうインフラ = transportation infrastructure.",
     example:"A: こうれいかしたインフラのしゅうぜんがひつようです。\nB: よさんのかくほがかだいですね。",
     exampleSrc:"A: Repair of aging infrastructure is needed.\nB: Securing the budget is a challenge.",
     funFact:"Japan's インフラ (roads, bridges, tunnels) built during high economic growth is aging. The 2012 Sasago tunnel collapse highlighted the urgency. インフラゆしゅつ (infrastructure export) is a Japanese strategy: selling しんかんせん technology, water treatment, and bridge construction to developing countries."},

    {type:"fb", s:"FTAで{1}がてっぱいされます。\n(Tariffs will be eliminated under the FTA.)", a:"かんぜい", opts:["かんぜい","ぼうえき","ゆしゅつ","きょうきゅう"], sSrc:"Tariffs will be eliminated under the FTA.",
     hint:"This word means the tax imposed on imported goods at the border."},

    {type:"teach", trg:"きせい", src:"regulation / restriction", pos:"noun", gender:null,
     note:"Kanji: 規制. きせいかんわ = deregulation.\nきせいをゆるめる = to loosen regulations.",
     example:"A: きせいかんわでしんきさんにゅうがかんたんになりました。\nB: けいざいかっせいかにつながりますね。",
     exampleSrc:"A: Deregulation made new market entry easier.\nB: It leads to economic revitalization.",
     funFact:"きせいかんわ (deregulation) has been a recurring Japanese economic policy theme since the 1980s. Advocates say excessive きせい stifles innovation; critics say it reduces safety. The ライドシェア (ride-sharing) debate shows the tension: きせいかんわ could help drivers but threatens taxi industry livelihoods."},

    {type:"teach", trg:"けいざいせいちょう", src:"economic growth", pos:"noun", gender:null,
     note:"けいざい (economy) + せいちょう (growth).\nGDP (こくないそうせいさん) measures this.",
     example:"A: けいざいせいちょうりつがじょうしょうしました。\nB: しょうひかっきのけっかですか？",
     exampleSrc:"A: The economic growth rate rose.\nB: Is it the result of consumer spending?",
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
