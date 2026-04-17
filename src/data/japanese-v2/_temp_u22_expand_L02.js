// Unit 22 Expansion. Lesson 4: おかえし (Reciprocity & Return Gifts)
const LESSON_4 = {
  id:"jav2_u22l4", title:"おかえし", icon:"🎀", xp:15, board:true,
  steps:[
    {type:"intro", title:"おかえし",
     desc:"Explore the deeply Japanese concept of reciprocity in giving. Learn vocabulary for return gifts, seasonal exchanges, and the social rules around お返し. Understand the unwritten codes that govern when, what, and how much to give back when you receive something.",
     goals:["Learn vocabulary for reciprocal gift-giving","Understand seasonal gift exchange customs","Discuss social expectations around return gifts"]},

    {type:"teach", trg:"おかえし", src:"return gift / reciprocal gift", pos:"noun", gender:null,
     note:"お + かえし (return). The practice of giving a gift in return for one received.\nAbout half the value of the original gift is customary.",
     example:"A: おいわいのおかえしをおくらなければなりません。\nB: なにをおくりますか？\nA: また行(い)きたいですか？\nB: はい、ぜひ行(い)きたいです。",
     exampleSrc:"A: I must send a return gift for the congratulatory gift.\nB: What will you send?\nA: Do you want to go again?\nB: Yes, I definitely want to go.",
     funFact:"お返し is a foundational social practice. Receiving a gift creates an obligation (義理, giri) to return one of appropriate value, usually about half. Not returning a gift is a serious social misstep. This extends beyond material gifts: if someone helps you move, you treat them to dinner. The reciprocity cycle maintains social harmony."},

    {type:"teach", trg:"おちゅうげん", src:"midsummer gift", pos:"noun", gender:null,
     note:"Kanji: お中元. Given in July to express gratitude for ongoing relationships.\nBusiness and social custom.",
     example:"A: おちゅうげんのじきですね。\nB: ことしはなにをおくりましょうか。\nA: どのくらいかかりましたか？\nB: だいたい二時間(にじかん)ぐらいです。",
     exampleSrc:"A: It is the season for midsummer gifts.\nB: What shall we send this year?\nA: How long did it take?\nB: About two hours.",
     funFact:"お中元 originally comes from a Chinese Taoist festival (中元, the 15th of the 7th month). In Japan it evolved into a summer gift-giving season centered on July. Department stores set up elaborate お中元 sections with pre-packaged gift sets of beer, fruit, oils, and sweets. The gifts acknowledge ongoing obligations to business partners, teachers, and doctors."},

    {type:"teach", trg:"おせいぼ", src:"year-end gift", pos:"noun", gender:null,
     note:"Kanji: お歳暮. Given in December to express gratitude for the year.\nPairs with おちゅうげん as the two major gift seasons.",
     example:"A: おせいぼをおくりましたか？\nB: はい、きのうデパートでかいました。\nA: 難(むずか)しかったですか？\nB: 最初(さいしょ)は難(むずか)しかったですが、慣(な)れました。",
     exampleSrc:"A: Did you send the year-end gifts?\nB: Yes, I bought them at the department store yesterday.\nA: Was it difficult?\nB: It was difficult at first, but I got used to it.",
     funFact:"お歳暮 uses 歳 (year) and 暮 (end/twilight). It is the winter counterpart to お中元. Popular gifts include ham, beer sets, cooking oil, and fruit. The custom is gradually declining among younger generations, but remains strong in business. Forgetting to send おせいぼ to an important client can damage a business relationship."},

    {type:"teach", trg:"ぎり", src:"social obligation / duty / courtesy", pos:"noun", gender:null,
     note:"Kanji: 義理. ぎ (righteousness) + り (reason).\nぎりチョコ = obligation chocolate (Valentine's Day).",
     example:"A: ぎりチョコをかわなければなりません。\nB: だれにあげるのですか？\nA: おすすめですか？\nB: はい、ぜひ試(ため)してみてください。",
     exampleSrc:"A: I need to buy obligation chocolates.\nB: Who will you give them to?\nA: Do you recommend it?\nB: Yes, please try it.",
     funFact:"義理 is a uniquely Japanese social concept: the obligation to reciprocate kindness and maintain relationships. ぎりチョコ (obligation chocolate) given on Valentine's Day to male coworkers is the most visible example. Japanese social life runs on a web of ぎり obligations. Fulfilling them shows you are a reliable member of society."},

    {type:"mc", q:"おかえし is:", opts:["a birthday present","a return gift for something received","a greeting card","a thank-you letter"], ans:"a return gift for something received",
     hint:"This practice involves giving s... back in r... for a g... you r...."},

    {type:"teach", trg:"つつむ", src:"to wrap", pos:"verb", gender:null,
     note:"Group 1 verb. Kanji: 包む. プレゼントをつつむ = to wrap a present.\nRelated: つつみ (wrapping/package).",
     example:"A: きれいにつつんでいただけますか？\nB: はい、リボンもおつけしますか？\nA: 一緒(いっしょ)に行(い)きませんか？\nB: いいですね。行(い)きましょう。",
     exampleSrc:"A: Could you wrap it beautifully please?\nB: Yes, shall I add a ribbon too?\nA: Shall we go together?\nB: That sounds good. Let's go.",
     funFact:"包む is crucial in Japanese gift culture. The wrapping (包装, housou) is considered as important as the contents. Japanese department stores are famous for their precise, beautiful wrapping techniques. The furoshiki (風呂敷, wrapping cloth) is a traditional reusable wrapper that has seen a revival as an eco-friendly alternative to paper."},

    {type:"teach", trg:"のし", src:"decorative paper strip (on gifts)", pos:"noun", gender:null,
     note:"Kanji: 熨斗. A folded paper ornament attached to formal gifts.\nIndicates the gift's purpose (celebration, condolence, etc.).",
     example:"A: のしはどうしますか？\nB: おいわいようでおねがいします。\nA: どこがおすすめですか？\nB: 京都(きょうと)がおすすめです。",
     exampleSrc:"A: What about the noshi strip?\nB: Please make it for a celebration.\nA: Where do you recommend?\nB: I recommend Kyoto.",
     funFact:"熨斗 originally contained a strip of dried abalone (のしあわび), symbolizing auspiciousness. Today it is a printed paper decoration. The のし ribbon colors signal the occasion: red and white for celebrations, black and white for condolences. Getting the wrong のし on a gift would be a serious embarrassment. Department stores handle this automatically."},

    {type:"teach", trg:"きんがく", src:"amount of money / monetary sum", pos:"noun", gender:null,
     note:"Kanji: 金額. きん (gold/money) + がく (amount/forehead).\nUsed when discussing gift budgets and cash gifts.",
     example:"A: けっこんしきのごしゅうぎのきんがくはいくらですか？\nB: さんまんえんがふつうです。\nA: 何(なに)が一番(いちばん)良(よ)かったですか？\nB: 食(た)べ物(もの)が一番(いちばん)おいしかったです。",
     exampleSrc:"A: What is the amount for a wedding cash gift?\nB: 30,000 yen is standard.\nA: What was the best part?\nB: The food was the most delicious.",
     funFact:"金額 matters enormously in Japanese gift-giving. Wedding cash gifts (ご祝儀, goshuugi) follow strict rules: odd numbers only (10,000, 30,000, 50,000 yen), because even numbers can be divided (symbolizing separation). New, crisp bills must be used. The amount depends on your relationship to the couple. Getting the 金額 wrong is a social error."},

    {type:"fb", s:"おいわいの{1}をおくらなければなりません。\n(I must send a return gift for the congratulatory gift.)", a:"おかえし", opts:["おかえし","おれい","おちゅうげん","おせいぼ"], sSrc:"I must send a return gift for the congratulatory gift.",
     hint:"The specific word for a reciprocal gift given in response to receiving one."},

    {type:"teach", trg:"おいわい", src:"celebration / congratulatory gift", pos:"noun", gender:null,
     note:"お + いわい (celebration). Covers both the event and the gift.\nKanji: お祝い. おいわいをいう = to congratulate.",
     example:"A: ともだちのしゅっさんおいわいをかいました。\nB: なにをかいましたか？\nA: よく行(い)きますか？\nB: 月(つき)に一回(いっかい)ぐらい行(い)きます。",
     exampleSrc:"A: I bought a birth celebration gift for my friend.\nB: What did you buy?\nA: Do you go often?\nB: I go about once a month.",
     funFact:"お祝い covers both the congratulatory event and the gift itself. Different life events have specific gift amounts and types: 出産祝い (birth), 入学祝い (school entrance), 就職祝い (new job), and 結婚祝い (wedding). Cash gifts are placed in decorated envelopes called 祝儀袋 (shuugibukuro). The envelope design signals the occasion."},

    {type:"teach", trg:"おそなえ", src:"offering / condolence gift", pos:"noun", gender:null,
     note:"From そなえる (to offer/prepare). Used for gifts to the deceased or at temples.\nKanji: お供え.",
     example:"A: おそなえをもっていきましょう。\nB: おかしがいいとおもいます。\nA: 誰(だれ)と行(い)きましたか？\nB: 友達(ともだち)と一緒(いっしょ)に行(い)きました。",
     exampleSrc:"A: Let us bring an offering.\nB: I think sweets would be good.\nA: Who did you go with?\nB: I went with a friend.",
     funFact:"お供え refers to offerings placed at Buddhist altars (仏壇, butsudan) or gravesites. When visiting a family that has lost someone, bringing お供え (usually sweets or fruit) is expected. Temple offerings include food, flowers, and incense. The practice connects to the Buddhist belief that offerings nourish the spirits of ancestors."},

    {type:"mc", q:"ぎり means:", opts:["celebration","social obligation","return gift","wrapping"], ans:"social obligation",
     hint:"This concept describes the sense of duty and reciprocity that governs s... relationships."},

    {type:"match", pairs:[{trg:"おかえし",src:"return gift"},{trg:"おちゅうげん",src:"midsummer gift"},{trg:"おせいぼ",src:"year-end gift"},{trg:"ぎり",src:"social obligation"}]},

    {type:"match", pairs:[{trg:"つつむ",src:"to wrap"},{trg:"のし",src:"decorative gift strip"},{trg:"きんがく",src:"amount of money"},{trg:"おいわい",src:"celebration/gift"}]},

    {type:"fb", s:"きれいに{1}いただけますか？\n(Could you wrap it beautifully please?)", a:"つつんで", opts:["つつんで","おくって","わたして","あげて"], sSrc:"Could you wrap it beautifully please?",
     hint:"The te-form of the verb meaning 'to wrap,' combined with いただけますか for politeness."},

    {type:"mc", q:"のし is:", opts:["a type of candy","a decorative paper strip on formal gifts","a greeting card","a cash envelope"], ans:"a decorative paper strip on formal gifts",
     hint:"This ornamental element indicates the purpose and occasion of a formally presented gift."},

    {type:"match", pairs:[{trg:"おそなえ",src:"offering/condolence gift"},{trg:"おいわい",src:"celebration"},{trg:"のし",src:"gift decoration"},{trg:"きんがく",src:"monetary amount"}]},
  ]
};
export default LESSON_4;
