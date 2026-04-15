// Unit 29 Expansion. Lesson 5: Trade & Global Economy
const LESSON_5 = {
  id:"jav2_u29l5", title:"ぼうえきとせかいけいざい", icon:"🌐", xp:15, board:true,
  steps:[
    {type:"intro", title:"Trade & Global Economy",
     desc:"Japan's economy is deeply connected to global trade networks. Learn the vocabulary of international commerce, trade agreements, supply chains, and the forces that drive globalization and its backlash in Japanese economic discourse.",
     goals:["Use ぼうえき, きょうてい, サプライチェーン in context","Discuss trade agreements and globalization","Navigate international economic vocabulary"]},

    {type:"teach", trg:"ぼうえき", src:"trade / commerce (international)", pos:"noun", gender:null,
     note:"Kanji: 貿易. ぼうえきしゅうし = trade balance.\nじゆうぼうえき = free trade.",
     example:"A: にほんとアメリカのぼうえきかんけいはふくざつです。\nB: じどうしゃぼうえきがとくにちゅうもくされていますね。",
     exampleSrc:"A: The trade relationship between Japan and America is complex.\nB: Automobile trade is particularly in the spotlight.",
     funFact:"貿易 uses two characters that both relate to exchange: 貿 (trade/barter) and 易 (exchange/easy). Japan's ぼうえきしゅうし (trade balance) swings between surplus and deficit depending on energy prices and the yen's strength. The US-Japan trade friction (にちべいぼうえきまさつ) of the 1980s-90s shaped both countries' economic policies for decades."},

    {type:"teach", trg:"きょうてい", src:"agreement / accord / pact", pos:"noun", gender:null,
     note:"Kanji: 協定. じゆうぼうえききょうてい = free trade agreement (FTA).\nSlightly less formal than じょうやく (treaty).",
     example:"A: あたらしいぼうえききょうていがはっこうしました。\nB: かんぜいがひきさげられるのですね。",
     exampleSrc:"A: A new trade agreement has taken effect.\nB: Tariffs will be lowered.",
     funFact:"協定 uses 協 (cooperate) and 定 (decide). It sits between a formal じょうやく (treaty) and an informal ごうい (agreement). Japan has been actively signing FTAs and EPAs (Economic Partnership Agreements, けいざいれんけいきょうてい). The CPTPP (TPP11) and Japan-EU EPA are landmark きょうてい that cover a huge share of global trade."},

    {type:"teach", trg:"かんぜい", src:"tariff / customs duty", pos:"noun", gender:null,
     note:"Kanji: 関税. かんぜいをかける = to impose a tariff.\nかんぜいてっぱい = tariff elimination.",
     example:"A: ゆにゅうひんにたかいかんぜいがかけられています。\nB: こくないさんぎょうをほごするためですか？",
     exampleSrc:"A: High tariffs are imposed on imported goods.\nB: Is it to protect domestic industry?",
     funFact:"関税 uses 関 (barrier/checkpoint) and 税 (tax). Historically, かんぜい protected Japan's rice farmers and manufacturers. The phrase 聖域なき関税撤廃 (tariff elimination without sacred areas) was a controversial phrase during TPP negotiations. Rice, dairy, and beef remained Japan's most politically sensitive かんぜい items."},

    {type:"mc", q:"じゆうぼうえき means:", opts:["Government-controlled trade","Domestic commerce only","International commerce without government trade barriers","Trade in luxury goods"], ans:"International commerce without government trade barriers",
     hint:"じゆう means free/unrestricted, and ぼうえき means i... t...."},

    {type:"teach", trg:"サプライチェーン", src:"supply chain", pos:"noun", gender:null,
     note:"Loanword from English. グローバルサプライチェーン = global supply chain.\nサプライチェーンのきょうか = strengthening the supply chain.",
     example:"A: パンデミックでサプライチェーンがこんらんしました。\nB: ぶひんぶそくがしんこくでしたね。",
     exampleSrc:"A: The pandemic disrupted supply chains.\nB: Parts shortages were serious.",
     funFact:"サプライチェーン became a household word during the COVID pandemic when global supply disruptions affected everything from cars to toilet paper. Japanese manufacturers, famous for ジャスト・イン・タイム (just-in-time) production, were especially vulnerable to disruptions. The pandemic triggered a rethink of サプライチェーン dependency on single countries."},

    {type:"teach", trg:"こんらん", src:"confusion / disruption / chaos", pos:"noun", gender:null,
     note:"Kanji: 混乱. こんらんする = to fall into chaos.\nしじょうのこんらん = market turmoil.",
     example:"A: きゅうげきなえんやすでしじょうがこんらんしています。\nB: とうしかはどうたいおうしていますか？",
     exampleSrc:"A: Markets are in turmoil due to rapid yen depreciation.\nB: How are investors responding?",
     funFact:"混乱 uses 混 (mix/confuse) and 乱 (disorder). It describes situations where normal order breaks down. Financial markets experience こんらん during crises. Supply chains experience こんらん during disruptions. The related word パニック (panic) is used for more extreme cases. Good leaders are praised for こんらんをおさめる (restoring order from chaos)."},

    {type:"fb", s:"パンデミックで{1}がこんらんしました。\n(The pandemic disrupted supply chains.)", a:"サプライチェーン", opts:["サプライチェーン","ぼうえき","しじょう","きんゆう"], sSrc:"The pandemic disrupted supply chains.",
     hint:"The English loanword for the network of production and distribution steps."},

    {type:"teach", trg:"グローバルか", src:"globalization", pos:"noun", gender:null,
     note:"グローバル (global, loanword) + 化 (-ization).\nグローバルかがすすむ = globalization advances.",
     example:"A: グローバルかによってきぎょうかんのきょうそうがはげしくなりました。\nB: こくさいきょうそうりょくがじゅうようですね。",
     exampleSrc:"A: Competition between companies has intensified due to globalization.\nB: International competitiveness is important.",
     funFact:"グローバル化 blends the English loanword with the Japanese -化 suffix. Japan's relationship with globalization is complex. It benefits enormously from global trade but also fears cultural homogenization. The term ガラパゴスか (Galapagos-ification) describes how some Japanese technologies evolved in isolation from global standards, like the old feature phone market."},

    {type:"teach", trg:"きょうそうりょく", src:"competitiveness / competitive power", pos:"noun", gender:null,
     note:"きょうそう (competition) + りょく (power).\nこくさいきょうそうりょく = international competitiveness.",
     example:"A: にほんきぎょうのきょうそうりょくをたかめるひつようがあります。\nB: イノベーションがかぎですね。",
     exampleSrc:"A: We need to strengthen the competitiveness of Japanese companies.\nB: Innovation is the key.",
     funFact:"競争力 is a critical concept in Japanese economic discourse. Japan consistently ranks in the top 10 of global competitiveness indices but has slipped from its 1980s peak. The phrase きょうそうりょくのていか (declining competitiveness) is a frequent worry. The りょく suffix productively creates power-nouns: 技術力 (technical power), 開発力 (development power)."},

    {type:"mc", q:"ガラパゴスか refers to:", opts:["Japanese products evolving in isolation from global markets","A tropical vacation destination","An export strategy for electronics","A type of trade agreement"], ans:"Japanese products evolving in isolation from global markets",
     hint:"Like the Galapagos Islands' unique species, some J... p... evolved separately."},

    {type:"teach", trg:"ぶひん", src:"parts / components", pos:"noun", gender:null,
     note:"Kanji: 部品. じどうしゃぶひん = auto parts.\nぶひんメーカー = parts manufacturer.",
     example:"A: にほんはせいみつぶひんのゆしゅつたいこくです。\nB: はんどうたいぶひんもゆうめいですね。",
     exampleSrc:"A: Japan is a major exporter of precision parts.\nB: Semiconductor components are also famous.",
     funFact:"部品 uses 部 (part/section) and 品 (goods). Japan's ぶひん industry is a hidden economic powerhouse. While consumer brands like Sony and Toyota are visible, thousands of smaller companies make the critical ぶひん inside global products. The phrase にほんのぶひんがなければ (without Japanese parts) highlights how many global products depend on Japanese components."},

    {type:"teach", trg:"はんどうたい", src:"semiconductor", pos:"noun", gender:null,
     note:"Kanji: 半導体. はん (half) + どうたい (conductor).\nはんどうたいぶそく = semiconductor shortage.",
     example:"A: はんどうたいのぶそくがせかいてきにもんだいになりました。\nB: くるまのせいさんにもえいきょうがでましたね。",
     exampleSrc:"A: The semiconductor shortage became a global problem.\nB: It also affected car production.",
     funFact:"半導体 literally means 'half-conductor,' a material that partly conducts electricity. Japan dominated はんどうたい production in the 1980s with over 50% global market share. That share fell dramatically due to competition from South Korea and Taiwan. Japan is now investing heavily to rebuild its はんどうたい industry with the TSMC factory in Kumamoto."},

    {type:"fb", s:"にほんきぎょうの{1}をたかめるひつようがあります。\n(We need to strengthen the competitiveness of Japanese companies.)", a:"きょうそうりょく", opts:["きょうそうりょく","えいきょう","ぼうえき","サプライチェーン"], sSrc:"We need to strengthen the competitiveness of Japanese companies.",
     hint:"The compound noun combining competition with power, measuring market strength."},

    {type:"match", pairs:[{trg:"ぼうえき",src:"trade"},{trg:"きょうてい",src:"agreement/pact"},{trg:"かんぜい",src:"tariff"},{trg:"サプライチェーン",src:"supply chain"}]},

    {type:"mc", q:"はんどうたい is critical because:", opts:["They are used only in military equipment","Japan has unlimited supply of them","They replace the need for electricity","These components are essential in nearly all modern electronic devices"], ans:"These components are essential in nearly all modern electronic devices",
     hint:"Cars, phones, computers, appliances: n... everything e... needs t... c...."},

    {type:"match", pairs:[{trg:"グローバルか",src:"globalization"},{trg:"きょうそうりょく",src:"competitiveness"},{trg:"ぶひん",src:"parts/components"},{trg:"はんどうたい",src:"semiconductor"}]},
  ]
};
export default LESSON_5;
