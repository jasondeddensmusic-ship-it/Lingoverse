// Batch 10 – Unit 09 (A2.1 Shopping): Convenience Store Vocabulary
const BATCH10_L1 = {
  id:"jav2_u09l_b10_1", title:"コンビニ", icon:"🏪", xp:15, board:true,
  steps:[
    {type:"intro", title:"コンビニ",
     desc:"Learn essential convenience store vocabulary. Japanese コンビニ are a cultural institution offering far more services than their Western counterparts.",
     goals:["Navigate convenience store purchases","Understand コンビニ services","Handle cashier interactions"]},

    {type:"teach", trg:"コンビニ", src:"convenience store", pos:"noun", gender:null,
     note:"Short for コンビニエンスストア.\nセブン, ローソン, ファミマ are the big three.",
     example:"A: コンビニによっていい？\nB: うん、おにぎりをかいたい。",
     exampleSrc:"A: Can we stop at a convenience store?\nB: Yeah, I want to buy an onigiri.",
     funFact:"Japan has over 56,000 コンビニ, roughly one per 2,200 people. They are open 24/7 and offer ATMs, bill payment, ticket printing, package shipping, and even government certificate printing. Japanese コンビニ food quality is so high that some have Michelin-level products."},

    {type:"teach", trg:"おにぎり", src:"rice ball", pos:"noun", gender:null,
     note:"Also called おむすび in some regions.\nのり = seaweed wrapper.",
     example:"A: おにぎりはどれがおすすめですか？\nB: しゃけがにんきです。",
     exampleSrc:"A: Which rice ball do you recommend?\nB: Salmon is popular.",
     funFact:"おにぎり (お握り) comes from にぎる (to grip/squeeze). The triangular shape is most common but varies by region. Popular fillings include しゃけ (salmon), うめぼし (pickled plum), and ツナマヨ (tuna mayo). コンビニ sell over 2 billion おにぎり per year in Japan."},

    {type:"teach", trg:"おべんとう", src:"boxed lunch / bento", pos:"noun", gender:null,
     note:"コンビニべんとう = convenience store bento.\nてづくりべんとう = homemade bento.",
     example:"A: おべんとうをあたためますか？\nB: はい、おねがいします。",
     exampleSrc:"A: Shall I heat up the bento?\nB: Yes, please.",
     funFact:"The question おべんとうをあたためますか is something you hear at every コンビニ in Japan. Cashiers always ask if you want your べんとう microwaved. Japanese べんとう culture dates back to the 12th century. Making cute キャラべん (character bento) for children is a parenting art form."},

    {type:"teach", trg:"レジ", src:"cash register / checkout", pos:"noun", gender:null,
     note:"Short for レジスター. レジぶくろ = plastic bag.\nセルフレジ = self-checkout.",
     example:"A: レジでおかいけいをします。\nB: セルフレジもありますよ。",
     exampleSrc:"A: I will pay at the register.\nB: There is self-checkout too.",
     funFact:"Since 2020, Japanese stores charge for レジぶくろ (plastic bags) to reduce waste. Cashiers ask ふくろはいりますか (do you need a bag?). Many people now carry エコバッグ (eco bags). Japanese レジ are remarkably efficient, with staff trained to pack items neatly."},

    {type:"teach", trg:"ポイントカード", src:"point card / loyalty card", pos:"noun", gender:null,
     note:"ポイントカードはおもちですか = Do you have a point card?\nAsked at every store.",
     example:"A: ポイントカードはおもちですか？\nB: Tカードでおねがいします。",
     exampleSrc:"A: Do you have a point card?\nB: T-Card, please.",
     funFact:"ポイントカードはおもちですか is the most frequently heard phrase in Japanese stores. Major systems include Tポイント, Pontaカード, and dポイント. Japanese ポイント culture is extensive. People carefully collect and strategize points. ポイントかつどう (point activity) is a lifestyle."},

    {type:"teach", trg:"ふくろ", src:"bag / sack", pos:"noun", gender:null,
     note:"ビニールぶくろ = plastic bag. かみぶくろ = paper bag.\nふくろはいりますか = Do you need a bag?",
     example:"A: ふくろはいりますか？\nB: だいじょうぶです。エコバッグがあります。",
     exampleSrc:"A: Do you need a bag?\nB: I am fine. I have an eco bag.",
     funFact:"Since Japan's レジぶくろ有料化 (paid bag policy) in 2020, bringing your own bag has become standard. Before this, Japan used an estimated 30 billion plastic bags per year. The phrase ふくろはけっこうです (no bag needed) and マイバッグあります (I have my own bag) are now everyday Japanese."},

    {type:"teach", trg:"おすすめ", src:"recommendation", pos:"noun", gender:null,
     note:"おすすめはなんですか = What do you recommend?\nFrom すすめる (to recommend).",
     example:"A: おすすめのおかしはありますか？\nB: このチョコレートがにんきです。",
     exampleSrc:"A: Do you have a recommended snack?\nB: This chocolate is popular.",
     funFact:"おすすめ (お薦め) is one of the most useful shopping words. Every store and restaurant has おすすめ items, often marked with a special label or display. Asking for the おすすめ shows interest and trust in the staff's judgment, which they appreciate."},

    {type:"teach", trg:"しはらい", src:"payment", pos:"noun", gender:null,
     note:"しはらいほうほう = payment method.\nしはらいをする = to make a payment.",
     example:"A: おしはらいはどうしますか？\nB: PayPayでおねがいします。",
     exampleSrc:"A: How would you like to pay?\nB: PayPay, please.",
     funFact:"Japanese しはらい (支払い) options have expanded enormously. コンビニ accept cash, credit cards, IC cards (Suica/PASMO), QR payments (PayPay, LINE Pay), and even cryptocurrency at some locations. Cashiers cycle through しはらいほうほう options smoothly."},

    {type:"mc", q:"What does the cashier ask about your bento at a convenience store?", opts:["おべんとうをあたためますか (Shall I heat it?)","おべんとうをきりますか (Shall I cut it?)","おべんとうをつつみますか (Shall I wrap it?)","おべんとうをとりかえますか (Shall I exchange it?)"], ans:"おべんとうをあたためますか (Shall I heat it?)",
     hint:"This is arguably the most common question heard at コンビニ checkout counters."},

    {type:"fb", s:"{1}はおもちですか？\n(Do you have a point card?)", a:"ポイントカード", opts:["ポイントカード","クレジットカード","ふくろ","レシート"], sSrc:"Do you have a point card?",
     hint:"This loyalty card collects points with every purchase. Cashiers ask about it at every transaction."},

    {type:"match", pairs:[
      {trg:"おにぎり", src:"rice ball"},
      {trg:"おべんとう", src:"boxed lunch"},
      {trg:"レジ", src:"cash register"},
      {trg:"おすすめ", src:"recommendation"}
    ]},

    {type:"mc", q:"Why do Japanese store cashiers now ask ふくろはいりますか?", opts:["Plastic bags became paid since 2020","They want to sell bags","It is a traditional greeting","Bags are out of stock"], ans:"Plastic bags became paid since 2020",
     hint:"Japan's environmental policy changed to reduce the 30 billion p... b... used annually."}
  ]
};
export default BATCH10_L1;
