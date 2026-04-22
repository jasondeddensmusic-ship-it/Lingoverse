// Unit 29 Expansion. Lesson 5: Trade & Global Economy
const LESSON_5 = {
  id:"jav2_u29l5", title:"ぼうえきとせかいけいざい", icon:"🌐", xp:15, board:true,
  steps:[
    {type:"intro", title:"Trade & Global Economy",
     desc:"Japan's economy is deeply connected to global trade networks. Learn the vocabulary of international commerce, trade agreements, supply chains, and the forces that drive globalization and its backlash in Japanese economic discourse.",
     goals:["Use ぼうえき, きょうてい, サプライチェーン in context","Discuss trade agreements and globalization","Navigate international economic vocabulary"]},

    {type:"teach", trg:"ぼうえき", src:"trade / commerce (international)", pos:"noun", gender:null,
     note:"Kanji: 貿易. ぼうえきしゅうし = trade balance.\nじゆうぼうえき = free trade.",
     example:"A: にほんとアメリカのぼうえきかんけいはふくざつです。\nB: じどうしゃぼうえきがとくにちゅうもくされていますね。\nA: この問題(もんだい)をどう思(おも)いますか？\nB: 複雑(ふくざつ)な問題(もんだい)ですが、解決策(かいけつさく)はあると思(おも)います。\nA: どのような解決策(かいけつさく)を考(かんが)えていますか？\nB: 関係者(かんけいしゃ)全員(ぜんいん)で話(はな)し合(あ)いの場(ば)を設(もう)けることが第一歩(だいいっぽ)です。",
     exampleSrc:"A: The trade relationship between Japan and America is complex.\nB: Automobile trade is particularly in the spotlight.\nA: What do you think about this issue?\nB: It is a complex issue, but I think there are solutions.\nA: What kind of solutions are you thinking of?\nB: The first step is to set up a discussion forum for all stakeholders.",
     funFact:"貿易 uses two characters that both relate to exchange: 貿 (trade/barter) and 易 (exchange/easy). Japan's ぼうえきしゅうし (trade balance) swings between surplus and deficit depending on energy prices and the yen's strength. The US-Japan trade friction (にちべいぼうえきまさつ) of the 1980s-90s shaped both countries' economic policies for decades."},

    {type:"teach", trg:"きょうてい", src:"agreement / accord / pact", pos:"noun", gender:null,
     note:"Kanji: 協定. じゆうぼうえききょうてい = free trade agreement (FTA).\nSlightly less formal than じょうやく (treaty).",
     example:"A: あたらしいぼうえききょうていがはっこうしました。\nB: かんぜいがひきさげられるのですね。\nA: 最近(さいきん)の動向(どうこう)はいかがですか？\nB: 全体的(ぜんたいてき)には好調(こうちょう)ですが、一部(いちぶ)課題(かだい)もあります。\nA: どのような課題(かだい)がありますか？\nB: 人材(じんざい)の確保(かくほ)が最(もっと)も大(おお)きな課題(かだい)です。",
     exampleSrc:"A: A new trade agreement has taken effect.\nB: Tariffs will be lowered.\nA: How are the recent trends?\nB: Overall things are going well, but there are some issues.\nA: What kinds of issues are there?\nB: Securing human resources is the biggest challenge.",
     funFact:"協定 uses 協 (cooperate) and 定 (decide). It sits between a formal じょうやく (treaty) and an informal ごうい (agreement). Japan has been actively signing FTAs and EPAs (Economic Partnership Agreements, けいざいれんけいきょうてい). The CPTPP (TPP11) and Japan-EU EPA are landmark きょうてい that cover a huge share of global trade."},

    {type:"teach", trg:"かんぜい", src:"tariff / customs duty", pos:"noun", gender:null,
     note:"Kanji: 関税. かんぜいをかける = to impose a tariff.\nかんぜいてっぱい = tariff elimination.",
     example:"A: ゆにゅうひんにたかいかんぜいがかけられています。\nB: こくないさんぎょうをほごするためですか？\nA: それは興味深(きょうみぶか)いですね。\nB: ええ、日本(にほん)ならではの特徴(とくちょう)だと思(おも)います。\nA: 海外(かいがい)ではどうなのでしょうか？\nB: 国(くに)によって異(こと)なりますが、共通(きょうつう)する部分(ぶぶん)もあります。",
     exampleSrc:"A: High tariffs are imposed on imported goods.\nB: Is it to protect domestic industry?\nA: That is interesting.\nB: Yes, I think it is a characteristic unique to Japan.\nA: I wonder how it is overseas?\nB: It differs by country, but there are also common aspects.",
     funFact:"関税 uses 関 (barrier/checkpoint) and 税 (tax). Historically, かんぜい protected Japan's rice farmers and manufacturers. The phrase 聖域なき関税撤廃 (tariff elimination without sacred areas) was a controversial phrase during TPP negotiations. Rice, dairy, and beef remained Japan's most politically sensitive かんぜい items."},

    {type:"mc", q:"じゆうぼうえき means:", opts:["International commerce without government trade barriers","Trade in luxury goods","Government-controlled trade","Domestic commerce only"], ans:"International commerce without government trade barriers",
     hint:"じゆう means free/unrestricted, and ぼうえき means i... t...."},

    {type:"teach", trg:"サプライチェーン", src:"supply chain", pos:"noun", gender:null,
     note:"Loanword from English. グローバルサプライチェーン = global supply chain.\nサプライチェーンのきょうか = strengthening the supply chain.",
     example:"A: パンデミックでサプライチェーンがこんらんしました。\nB: ぶひんぶそくがしんこくでしたね。\nA: その経験(けいけん)から何(なに)を学(まな)びましたか？\nB: 事前(じぜん)の準備(じゅんび)がいかに重要(じゅうよう)かを学(まな)びました。\nA: 具体的(ぐたいてき)にどんな準備(じゅんび)をすべきですか？\nB: まず情報収集(じょうほうしゅうしゅう)をして、それから計画(けいかく)を練(ね)ることが大事(だいじ)です。",
     exampleSrc:"A: The pandemic disrupted supply chains.\nB: Parts shortages were serious.\nA: What did you learn from that experience?\nB: I learned how important advance preparation is.\nA: What kind of preparation should be done specifically?\nB: First, gather information, then it is important to develop a plan.",
     funFact:"サプライチェーン became a household word during the COVID pandemic when global supply disruptions affected everything from cars to toilet paper. Japanese manufacturers, famous for ジャスト・イン・タイム (just-in-time) production, were especially vulnerable to disruptions. The pandemic triggered a rethink of サプライチェーン dependency on single countries."},

    {type:"teach", trg:"こんらん", src:"confusion / disruption / chaos", pos:"noun", gender:null,
     note:"Kanji: 混乱. こんらんする = to fall into chaos.\nしじょうのこんらん = market turmoil.",
     example:"A: きゅうげきなえんやすでしじょうがこんらんしています。\nB: とうしかはどうたいおうしていますか？\nA: 今後(こんご)の展望(てんぼう)についてお聞(き)かせください。\nB: 今後(こんご)はさらに国際化(こくさいか)が進(すす)むと思(おも)います。\nA: それに対(たい)してどのような対策(たいさく)が必要(ひつよう)ですか？\nB: 語学力(ごがくりょく)の向上(こうじょう)と異文化理解(いぶんかりかい)が不可欠(ふかけつ)です。",
     exampleSrc:"A: Markets are in turmoil due to rapid yen depreciation.\nB: How are investors responding?\nA: Please tell me about future prospects.\nB: I think internationalization will progress further going forward.\nA: What measures are needed for that?\nB: Improving language skills and cross-cultural understanding are essential.",
     funFact:"混乱 uses 混 (mix/confuse) and 乱 (disorder). It describes situations where normal order breaks down. Financial markets experience こんらん during crises. Supply chains experience こんらん during disruptions. The related word パニック (panic) is used for more extreme cases. Good leaders are praised for こんらんをおさめる (restoring order from chaos)."},

    {type:"fb", s:"パンデミックで{1}がこんらんしました。\n(The pandemic disrupted supply chains.)", a:"サプライチェーン", opts:["サプライチェーン","ぼうえき","しじょう","きんゆう"], sSrc:"The pandemic disrupted supply chains.",
     hint:"The English loanword for the network of production and distribution steps."},

    {type:"teach", trg:"グローバルか", src:"globalization", pos:"noun", gender:null,
     note:"グローバル (global, loanword) + 化 (-ization).\nグローバルかがすすむ = globalization advances.",
     example:"A: グローバルかによってきぎょうかんのきょうそうがはげしくなりました。\nB: こくさいきょうそうりょくがじゅうようですね。\nA: それは予想外(よそうがい)の結果(けっか)ですね。\nB: はい、私(わたし)も驚(おどろ)きました。原因(げんいん)を調(しら)べています。\nA: いつごろ原因(げんいん)が分(わ)かりそうですか？\nB: 今週中(こんしゅうちゅう)には分析(ぶんせき)結果(けっか)が出(で)る予定(よてい)です。",
     exampleSrc:"A: Competition between companies has intensified due to globalization.\nB: International competitiveness is important.\nA: That is an unexpected result.\nB: Yes, I was surprised too. We are investigating the cause.\nA: When do you think you will know the cause?\nB: The analysis results are expected to come out by the end of this week.",
     funFact:"グローバル化 blends the English loanword with the Japanese -化 suffix. Japan's relationship with globalization is complex. It benefits enormously from global trade but also fears cultural homogenization. The term ガラパゴスか (Galapagos-ification) describes how some Japanese technologies evolved in isolation from global standards, like the old feature phone market."},

    {type:"teach", trg:"きょうそうりょく", src:"competitiveness / competitive power", pos:"noun", gender:null,
     note:"きょうそう (competition) + りょく (power).\nこくさいきょうそうりょく = international competitiveness.",
     example:"A: にほんきぎょうのきょうそうりょくをたかめるひつようがあります。\nB: イノベーションがかぎですね。\nA: その分野(ぶんや)についてどのくらいご存(ぞん)じですか？\nB: 専門(せんもん)ではありませんが、基本的(きほんてき)な知識(ちしき)はあります。\nA: もっと詳(くわ)しく知(し)りたい場合(ばあい)は、どうすればいいですか？\nB: 専門家(せんもんか)に相談(そうだん)するか、関連(かんれん)の書籍(しょせき)を読(よ)むことをお勧(すす)めします。",
     exampleSrc:"A: We need to strengthen the competitiveness of Japanese companies.\nB: Innovation is the key.\nA: How much do you know about that field?\nB: It is not my specialty, but I have basic knowledge.\nA: If I want to know more in detail, what should I do?\nB: I recommend consulting a specialist or reading related books.",
     funFact:"競争力 is a critical concept in Japanese economic discourse. Japan consistently ranks in the top 10 of global competitiveness indices but has slipped from its 1980s peak. The phrase きょうそうりょくのていか (declining competitiveness) is a frequent worry. The りょく suffix productively creates power-nouns: 技術力 (technical power), 開発力 (development power)."},

    {type:"mc", q:"ガラパゴスか refers to:", opts:["A type of trade agreement","Japanese products evolving in isolation from global markets","A tropical vacation destination","An export strategy for electronics"], ans:"Japanese products evolving in isolation from global markets",
     hint:"Like the Galapagos Islands' unique species, some J... p... evolved separately."},

    {type:"teach", trg:"ぶひん", src:"parts / components", pos:"noun", gender:null,
     note:"Kanji: 部品. じどうしゃぶひん = auto parts.\nぶひんメーカー = parts manufacturer.",
     example:"A: にほんはせいみつぶひんのゆしゅつたいこくです。\nB: はんどうたいぶひんもゆうめいですね。\nA: どのような影響(えいきょう)がありましたか？\nB: 社会全体(しゃかいぜんたい)に大(おお)きな影響(えいきょう)を与(あた)えました。\nA: 良(よ)い影響(えいきょう)ですか、悪(わる)い影響(えいきょう)ですか？\nB: 両方(りょうほう)あります。メリットもデメリットもあります。",
     exampleSrc:"A: Japan is a major exporter of precision parts.\nB: Semiconductor components are also famous.\nA: What kind of impact was there?\nB: It had a big impact on society as a whole.\nA: A good impact or a bad impact?\nB: Both. There are both merits and demerits.",
     funFact:"部品 uses 部 (part/section) and 品 (goods). Japan's ぶひん industry is a hidden economic powerhouse. While consumer brands like Sony and Toyota are visible, thousands of smaller companies make the critical ぶひん inside global products. The phrase にほんのぶひんがなければ (without Japanese parts) highlights how many global products depend on Japanese components."},

    {type:"teach", trg:"はんどうたい", src:"semiconductor", pos:"noun", gender:null,
     note:"Kanji: 半導体. はん (half) + どうたい (conductor).\nはんどうたいぶそく = semiconductor shortage.",
     example:"A: はんどうたいのぶそくがせかいてきにもんだいになりました。\nB: くるまのせいさんにもえいきょうがでましたね。\nA: 具体的(ぐたいてき)にはどういうことですか？\nB: つまり、状況(じょうきょう)に応(おう)じて対応(たいおう)を変(か)える必要(ひつよう)があるということです。\nA: なるほど。それは確(たし)かにそうですね。\nB: ええ、柔軟(じゅうなん)な対応(たいおう)が大切(たいせつ)だと思(おも)います。",
     exampleSrc:"A: The semiconductor shortage became a global problem.\nB: It also affected car production.\nA: What do you mean specifically?\nB: I mean we need to change our approach depending on the situation.\nA: I see. That is certainly true.\nB: Yes, I think flexible response is important.",
     funFact:"半導体 literally means 'half-conductor,' a material that partly conducts electricity. Japan dominated はんどうたい production in the 1980s with over 50% global market share. That share fell dramatically due to competition from South Korea and Taiwan. Japan is now investing heavily to rebuild its はんどうたい industry with the TSMC factory in Kumamoto."},

    {type:"fb", s:"にほんきぎょうの{1}をたかめるひつようがあります。\n(We need to strengthen the competitiveness of Japanese companies.)", a:"きょうそうりょく", opts:["きょうそうりょく","えいきょう","ぼうえき","サプライチェーン"], sSrc:"We need to strengthen the competitiveness of Japanese companies.",
     hint:"The compound noun combining competition with power, measuring market strength."},

    {type:"match", pairs:[{trg:"ぼうえき",src:"trade"},{trg:"きょうてい",src:"agreement/pact"},{trg:"かんぜい",src:"tariff"},{trg:"サプライチェーン",src:"supply chain"}]},

    {type:"mc", q:"はんどうたい is critical because:", opts:["Japan has unlimited supply of them","They replace the need for electricity","These components are essential in nearly all modern electronic devices","They are used only in military equipment"], ans:"These components are essential in nearly all modern electronic devices",
     hint:"Cars, phones, computers, appliances: n... everything e... needs t... c...."},

    {type:"match", pairs:[{trg:"グローバルか",src:"globalization"},{trg:"きょうそうりょく",src:"competitiveness"},{trg:"ぶひん",src:"parts/components"},{trg:"はんどうたい",src:"semiconductor"}]},
  ]
};
export default LESSON_5;
