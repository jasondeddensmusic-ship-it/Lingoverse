// Batch 10 – Unit 09 (A2.1 Shopping): Convenience Store Vocabulary
const BATCH10_L1 = {
  id:"jav2_u09l_b10_1", title:"コンビニ", icon:"🏪", xp:15, board:true,
  steps:[
    {type:"intro", title:"コンビニ",
     desc:"Learn essential convenience store vocabulary. Japanese コンビニ are a cultural institution offering far more services than their Western counterparts.",
     goals:["Navigate convenience store purchases","Understand コンビニ services","Handle cashier interactions"]},

    {type:"teach", trg:"コンビニ", src:"convenience store", pos:"noun", gender:null,
     note:"Short for コンビニエンスストア.\nセブン, ローソン, ファミマ are the big three.",
     example:"A: コンビニに寄(よ)っていい？\nB: うん、おにぎりを買(か)いたい。",
     exampleSrc:"A: Can we stop at a convenience store?\nB: Yeah, I want to buy an onigiri.",
     funFact:"Japan has over 56,000 コンビニ, roughly one per 2,200 people. They are open 24/7 and offer ATMs, bill payment, ticket printing, package shipping, and even government certificate printing. Japanese コンビニ food quality is so high that some have Michelin-level products."},

    {type:"teach", trg:"おにぎり", src:"rice ball", pos:"noun", gender:null,
     note:"Also called おむすび in some regions.\n海苔(のり) = seaweed wrapper.",
     example:"A: おにぎりはどれがおすすめですか？\nB: 鮭(しゃけ)が人気(にんき)です。",
     exampleSrc:"A: Which rice ball do you recommend?\nB: Salmon is popular.",
     funFact:"おにぎり (お握り) comes from 握(にぎ)る (to grip/squeeze). The triangular shape is most common but varies by region. Popular fillings include 鮭(しゃけ) (salmon), 梅干(うめぼ)し (pickled plum), and ツナマヨ (tuna mayo). コンビニ sell over 2 billion おにぎり per year in Japan."},

    {type:"teach", trg:"お弁当(べんとう)", src:"boxed lunch / bento", pos:"noun", gender:null,
     note:"コンビニ弁当(べんとう) = convenience store bento.\n手作(てづく)り弁当(べんとう) = homemade bento.",
     example:"A: お弁当(べんとう)を温(あたた)めますか？\nB: はい、お願(ねが)いします。",
     exampleSrc:"A: Shall I heat up the bento?\nB: Yes, please.",
     funFact:"The question お弁当(べんとう)を温(あたた)めますか is something you hear at every コンビニ in Japan. Cashiers always ask if you want your 弁当(べんとう) microwaved. Japanese 弁当(べんとう) culture dates back to the 12th century. Making cute キャラ弁(べん) (character bento) for children is a parenting art form."},

    {type:"teach", trg:"レジ", src:"cash register / checkout", pos:"noun", gender:null,
     note:"Short for レジスター. レジ袋(ぶくろ) = plastic bag.\nセルフレジ = self-checkout.",
     example:"A: レジでお会計(かいけい)をします。\nB: セルフレジもありますよ。",
     exampleSrc:"A: I will pay at the register.\nB: There is self-checkout too.",
     funFact:"Since 2020, Japanese stores charge for レジ袋(ぶくろ) (plastic bags) to reduce waste. Cashiers ask 袋(ふくろ)はいりますか (do you need a bag?). Many people now carry エコバッグ (eco bags). Japanese レジ are remarkably efficient, with staff trained to pack items neatly."},

    {type:"teach", trg:"ポイントカード", src:"point card / loyalty card", pos:"noun", gender:null,
     note:"ポイントカードはお持(も)ちですか = Do you have a point card?\nAsked at every store.",
     example:"A: ポイントカードはお持(も)ちですか？\nB: Tカードでお願(ねが)いします。",
     exampleSrc:"A: Do you have a point card?\nB: T-Card, please.",
     funFact:"ポイントカードはお持(も)ちですか is the most frequently heard phrase in Japanese stores. Major systems include Tポイント, Pontaカード, and dポイント. Japanese ポイント culture is extensive. People carefully collect and strategize points. ポイント活動(かつどう) (point activity) is a lifestyle."},

    {type:"teach", trg:"袋(ふくろ)", src:"bag / sack", pos:"noun", gender:null,
     note:"ビニール袋(ぶくろ) = plastic bag. 紙袋(かみぶくろ) = paper bag.\n袋(ふくろ)はいりますか = Do you need a bag?",
     example:"A: 袋(ふくろ)はいりますか？\nB: 大丈夫(だいじょうぶ)です。エコバッグがあります。",
     exampleSrc:"A: Do you need a bag?\nB: I am fine. I have an eco bag.",
     funFact:"Since Japan's レジ袋有料化(ぶくろゆうりょうか) (paid bag policy) in 2020, bringing your own bag has become standard. Before this, Japan used an estimated 30 billion plastic bags per year. The phrase 袋(ふくろ)はけっこうです (no bag needed) and マイバッグあります (I have my own bag) are now everyday Japanese."},

    {type:"teach", trg:"おすすめ", src:"recommendation", pos:"noun", gender:null,
     note:"おすすめは何(なん)ですか = What do you recommend?\nFrom 勧(すす)める (to recommend).",
     example:"A: おすすめのお菓子(かし)はありますか？\nB: このチョコレートが人気(にんき)です。",
     exampleSrc:"A: Do you have a recommended snack?\nB: This chocolate is popular.",
     funFact:"おすすめ (お薦め) is one of the most useful shopping words. Every store and restaurant has おすすめ items, often marked with a special label or display. Asking for the おすすめ shows interest and trust in the staff's judgment, which they appreciate."},

    {type:"teach", trg:"支払(しはら)い", src:"payment", pos:"noun", gender:null,
     note:"支払(しはら)い方法(ほうほう) = payment method.\n支払(しはら)いをする = to make a payment.",
     example:"A: お支払(しはら)いはどうしますか？\nB: PayPayでお願(ねが)いします。",
     exampleSrc:"A: How would you like to pay?\nB: PayPay, please.",
     funFact:"Japanese 支払(しはら)い (支払い) options have expanded enormously. コンビニ accept cash, credit cards, IC cards (Suica/PASMO), QR payments (PayPay, LINE Pay), and even cryptocurrency at some locations. Cashiers cycle through 支払(しはら)い方法(ほうほう) options smoothly."},

    {type:"mc", q:"What does the cashier ask about your bento at a convenience store?", opts:["お弁当(べんとう)を温(あたた)めますか (Shall I heat it?)","お弁当(べんとう)を切(き)りますか (Shall I cut it?)","お弁当(べんとう)を包(つつ)みますか (Shall I wrap it?)","お弁当(べんとう)を取(と)りかえますか (Shall I exchange it?)"], ans:"お弁当(べんとう)を温(あたた)めますか (Shall I heat it?)",
     hint:"This is arguably the most common question heard at コンビニ checkout counters."},

    {type:"fb", s:"{1}はお持(も)ちですか？\n(Do you have a point card?)", a:"ポイントカード", opts:["ポイントカード","クレジットカード","袋(ふくろ)","レシート"], sSrc:"Do you have a point card?",
     hint:"This loyalty card collects points with every purchase. Cashiers ask about it at every transaction."},

    {type:"match", pairs:[
      {trg:"おにぎり", src:"rice ball"},
      {trg:"お弁当(べんとう)", src:"boxed lunch"},
      {trg:"レジ", src:"cash register"},
      {trg:"おすすめ", src:"recommendation"}
    ]},

    {type:"mc", q:"Why do Japanese store cashiers now ask 袋(ふくろ)はいりますか?", opts:["Plastic bags became paid since 2020","They want to sell bags","It is a traditional greeting","Bags are out of stock"], ans:"Plastic bags became paid since 2020",
     hint:"Japan's environmental policy changed to reduce the 30 billion p... b... used annually."}
  ,{type:"match",pairs:[{trg:"コンビニ",src:"convenience store"},{trg:"袋(ふくろ)",src:"bag / sack"},{trg:"支払(しはら)い",src:"payment"}]}]
};
export default BATCH10_L1;
