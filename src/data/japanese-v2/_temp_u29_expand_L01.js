// Unit 29 Expansion. Lesson 3: Financial Terms
const LESSON_3 = {
  id:"jav2_u29l3", title:"きんゆうようご", icon:"🏦", xp:15, board:true,
  steps:[
    {type:"intro", title:"Financial Terms",
     desc:"Japan's financial system has its own vocabulary covering banking, interest rates, currency, and monetary policy. These terms appear daily in news broadcasts and are essential for understanding how Japan's economy functions at an institutional level.",
     goals:["Use きんり, えんやす, えんだか, にちぎん in context","Understand monetary policy vocabulary","Navigate banking and currency terminology"]},

    {type:"teach", trg:"きんり", src:"interest rate", pos:"noun", gender:null,
     note:"Kanji: 金利. きんりがあがる = interest rates rise.\nていきんり = low interest rates.",
     example:"A: にちぎんがきんりをひきあげました。\nB: じゅうたくローンにえいきょうがありますね。\nA: 今後(こんご)の展望(てんぼう)についてお聞(き)かせください。\nB: 今後(こんご)はさらに国際化(こくさいか)が進(すす)むと思(おも)います。\nA: それに対(たい)してどのような対策(たいさく)が必要(ひつよう)ですか？\nB: 語学力(ごがくりょく)の向上(こうじょう)と異文化理解(いぶんかりかい)が不可欠(ふかけつ)です。",
     exampleSrc:"A: The Bank of Japan raised interest rates.\nB: It will affect mortgage loans.\nA: Please tell me about future prospects.\nB: I think internationalization will progress further going forward.\nA: What measures are needed for that?\nB: Improving language skills and cross-cultural understanding are essential.",
     funFact:"金利 uses 金 (money/gold) and 利 (profit/benefit). Japan maintained near-zero きんり for over two decades as part of its fight against deflation. This ultra-low interest rate policy was unprecedented globally. The phrase ゼロきんりせいさく (zero interest rate policy) became a textbook case in economics worldwide."},

    {type:"teach", trg:"にちぎん", src:"Bank of Japan (abbreviated)", pos:"noun", gender:null,
     note:"Short for にほんぎんこう (日本銀行). Japan's central bank.\nにちぎんそうさい = Bank of Japan governor.",
     example:"A: にちぎんのきんゆうせいさくがちゅうもくされています。\nB: つぎのかいごうでなにがきまるでしょうか。\nA: それは予想外(よそうがい)の結果(けっか)ですね。\nB: はい、私(わたし)も驚(おどろ)きました。原因(げんいん)を調(しら)べています。\nA: いつごろ原因(げんいん)が分(わ)かりそうですか？\nB: 今週中(こんしゅうちゅう)には分析(ぶんせき)結果(けっか)が出(で)る予定(よてい)です。",
     exampleSrc:"A: The Bank of Japan's monetary policy is attracting attention.\nB: What will be decided at the next meeting?\nA: That is an unexpected result.\nB: Yes, I was surprised too. We are investigating the cause.\nA: When do you think you will know the cause?\nB: The analysis results are expected to come out by the end of this week.",
     funFact:"日銀 (にちぎん) is one of the most powerful institutions in Japan. Founded in 1882, it controls monetary policy, issues banknotes, and serves as the government's bank. The にちぎんそうさい (governor) is one of the most influential people in Japan. Decisions made at にちぎん meetings move global markets instantly."},

    {type:"teach", trg:"えんやす", src:"weak yen / yen depreciation", pos:"noun", gender:null,
     note:"Kanji: 円安. えん (yen) + やす (cheap/weak).\nOpposite: えんだか (strong yen). えんやすがすすむ = yen weakens further.",
     example:"A: えんやすでゆにゅうひんのかかくがあがっています。\nB: かいがいりょこうもたかくなりましたね。\nA: その分野(ぶんや)についてどのくらいご存(ぞん)じですか？\nB: 専門(せんもん)ではありませんが、基本的(きほんてき)な知識(ちしき)はあります。\nA: もっと詳(くわ)しく知(し)りたい場合(ばあい)は、どうすればいいですか？\nB: 専門家(せんもんか)に相談(そうだん)するか、関連(かんれん)の書籍(しょせき)を読(よ)むことをお勧(すす)めします。",
     exampleSrc:"A: Import prices are rising due to the weak yen.\nB: Overseas travel has also become expensive.\nA: How much do you know about that field?\nB: It is not my specialty, but I have basic knowledge.\nA: If I want to know more in detail, what should I do?\nB: I recommend consulting a specialist or reading related books.",
     funFact:"円安 and 円高 are among the most frequently discussed economic topics in Japan. えんやす makes exports cheaper (good for Toyota, Sony) but raises import costs (bad for consumers, energy bills). Japan's economy swings between periods of えんやす and えんだか, and each has winners and losers."},

    {type:"mc", q:"えんやすがすすむ means:", opts:["The yen is gaining strength","The yen continues to lose value against other currencies","Yen coins are becoming scarce","Yen notes are being redesigned"], ans:"The yen continues to lose value against other currencies",
     hint:"やす means cheap/weak, and すすむ means to advance or progress."},

    {type:"teach", trg:"えんだか", src:"strong yen / yen appreciation", pos:"noun", gender:null,
     note:"Kanji: 円高. えん (yen) + たか (high/strong).\nえんだかのえいきょう = impact of the strong yen.",
     example:"A: えんだかでゆしゅつきぎょうがくるしんでいます。\nB: かかくきょうそうりょくがさがりますからね。\nA: どのような影響(えいきょう)がありましたか？\nB: 社会全体(しゃかいぜんたい)に大(おお)きな影響(えいきょう)を与(あた)えました。\nA: 良(よ)い影響(えいきょう)ですか、悪(わる)い影響(えいきょう)ですか？\nB: 両方(りょうほう)あります。メリットもデメリットもあります。",
     exampleSrc:"A: Export companies are struggling due to the strong yen.\nB: Because their price competitiveness decreases.\nA: What kind of impact was there?\nB: It had a big impact on society as a whole.\nA: A good impact or a bad impact?\nB: Both. There are both merits and demerits.",
     funFact:"円高 is the mirror of 円安. When the yen strengthens, Japanese exports become more expensive abroad, hurting manufacturers. But imports become cheaper, benefiting consumers. The 1985 Plaza Accord caused rapid えんだか, forcing Japanese manufacturers to move production overseas. This restructuring permanently changed Japan's industrial landscape."},

    {type:"teach", trg:"きんゆう", src:"finance / monetary / financial", pos:"noun", gender:null,
     note:"Kanji: 金融. きんゆうきかん = financial institution.\nきんゆうしじょう = financial market.",
     example:"A: きんゆうしじょうがふあんていになっています。\nB: とうしかはしんちょうになっていますね。\nA: 具体的(ぐたいてき)にはどういうことですか？\nB: つまり、状況(じょうきょう)に応(おう)じて対応(たいおう)を変(か)える必要(ひつよう)があるということです。\nA: なるほど。それは確(たし)かにそうですね。\nB: ええ、柔軟(じゅうなん)な対応(たいおう)が大切(たいせつ)だと思(おも)います。",
     exampleSrc:"A: Financial markets have become unstable.\nB: Investors are becoming cautious.\nA: What do you mean specifically?\nB: I mean we need to change our approach depending on the situation.\nA: I see. That is certainly true.\nB: Yes, I think flexible response is important.",
     funFact:"金融 combines 金 (money) and 融 (melt/fuse). Money melting and flowing through the system. Japan's きんゆう system includes megabanks (三菱UFJ, 三井住友, みずほ), regional banks, credit unions, and securities firms. The 金融庁 (Financial Services Agency) oversees the entire system."},

    {type:"fb", s:"にちぎんが{1}をひきあげました。\n(The Bank of Japan raised interest rates.)", a:"きんり", opts:["きんり","えんやす","ぶっか","かぶしき"], sSrc:"The Bank of Japan raised interest rates.",
     hint:"The noun for the percentage charged or earned on money, controlled by central banks."},

    {type:"teach", trg:"かわせ", src:"foreign exchange / currency exchange", pos:"noun", gender:null,
     note:"Kanji: 為替. かわせレート = exchange rate.\nかわせしじょう = foreign exchange market.",
     example:"A: きょうのかわせレートはいくらですか？\nB: いちドルひゃくごじゅうえんくらいです。\nA: それについてもう少(すこ)し詳(くわ)しく教(おし)えてください。\nB: 例(たと)えば、最近(さいきん)の事例(じれい)を見(み)ると、変化(へんか)が激(はげ)しいです。\nA: そうですか。どう対処(たいしょ)すればいいでしょうか。\nB: まず現状(げんじょう)を把握(はあく)してから、計画(けいかく)を立(た)てましょう。",
     exampleSrc:"A: What is today's exchange rate?\nB: About 150 yen per dollar.\nA: Please tell me more about that.\nB: For example, looking at recent cases, the changes are dramatic.\nA: Is that so? How should we handle it?\nB: Let's first grasp the current situation, then make a plan.",
     funFact:"為替 is an old word from the Edo period, when merchants used 為替手形 (bills of exchange) to transfer money between cities without carrying coins. The かわせしじょう is the world's largest financial market by daily volume. Tokyo is one of the three major trading centers alongside London and New York."},

    {type:"teach", trg:"ローン", src:"loan", pos:"noun", gender:null,
     note:"Loanword from English 'loan.' じゅうたくローン = mortgage.\nローンをくむ = to take out a loan.",
     example:"A: じゅうたくローンのきんりがあがるかもしれません。\nB: まいつきのしはらいがふえますね。\nA: どのような方法(ほうほう)がありますか？\nB: いくつかの選択肢(せんたくし)があります。一番(いちばん)効果的(こうかてき)なのは実践(じっせん)です。\nA: 実践(じっせん)というのは、具体的(ぐたいてき)に何(なに)をすればいいですか？\nB: 毎日(まいにち)少(すこ)しずつ取(と)り組(く)むことが重要(じゅうよう)です。",
     exampleSrc:"A: Mortgage interest rates might rise.\nB: Monthly payments will increase.\nA: What kinds of methods are there?\nB: There are several options. The most effective is practice.\nA: What specifically should we do in practice?\nB: It is important to work on it a little each day.",
     funFact:"ローン entered Japanese from English but has become thoroughly naturalized. じゅうたくローン (housing loan) is the standard term for mortgages. Japan's famously long mortgage terms (up to 35 years) and historically low きんり made home ownership accessible. The phrase ローンをかえす (to repay a loan) is a reality for millions of Japanese households."},

    {type:"mc", q:"かわせレート tells you:", opts:["The interest rate on savings","The stock market index","The inflation rate","How much one currency is worth in terms of another"], ans:"How much one currency is worth in terms of another",
     hint:"かわせ means exchange, and レート means rate: the rate at which currencies trade."},

    {type:"teach", trg:"ふあんてい", src:"unstable / volatile", pos:"adj", gender:null,
     note:"Kanji: 不安定. 不 (not) + 安定 (stable).\nしじょうがふあんていだ = the market is unstable.",
     example:"A: せかいじょうせいがふあんていです。\nB: とうしにはリスクがたかまっていますね。\nA: それはいつごろから始(はじ)まったのですか？\nB: 数年前(すうねんまえ)からですが、最近(さいきん)特(とく)に注目(ちゅうもく)されています。\nA: 今後(こんご)どうなると思(おも)いますか？\nB: さらに発展(はってん)すると予想(よそう)されています。",
     exampleSrc:"A: The global situation is unstable.\nB: Risks for investment are increasing.\nA: When did that start?\nB: It started a few years ago, but it has been getting particular attention recently.\nA: What do you think will happen going forward?\nB: It is expected to develop further.",
     funFact:"不安定 is the negation of 安定 (stable). 安 means peaceful/cheap and 定 means fixed. Something that is not peacefully fixed. In financial news, ふあんてい describes volatile markets, uncertain political situations, and unpredictable economic conditions. The related noun ふあん (anxiety/unease) captures the emotional side of instability."},

    {type:"fb", s:"きんゆう{1}がふあんていになっています。\n(Financial markets have become unstable.)", a:"しじょう", opts:["しじょう","きかん","せいさく","きんり"], sSrc:"Financial markets have become unstable.",
     hint:"The word for a marketplace of trading, read with the on-yomi for abstract markets."},

    {type:"match", pairs:[{trg:"きんり",src:"interest rate"},{trg:"にちぎん",src:"Bank of Japan"},{trg:"えんやす",src:"weak yen"},{trg:"えんだか",src:"strong yen"}]},

    {type:"fb", s:"えんやすで{1}ひんのかかくがあがっています。\n(Import prices are rising due to the weak yen.)", a:"ゆにゅう", opts:["ゆにゅう","ゆしゅつ","きんゆう","かわせ"], sSrc:"Import prices are rising due to the weak yen.",
     hint:"The noun for bringing goods into the country from abroad."},

    {type:"match", pairs:[{trg:"きんゆう",src:"finance"},{trg:"かわせ",src:"foreign exchange"},{trg:"ローン",src:"loan"},{trg:"ふあんてい",src:"unstable"}]},
  ]
};
export default LESSON_3;
