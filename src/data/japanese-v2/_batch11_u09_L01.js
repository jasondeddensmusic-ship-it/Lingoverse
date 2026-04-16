// Batch 11 – Unit 09 (A1.3 Shopping): Payment & Transaction Words
const BATCH11_L1 = {
  id:"jav2_u09l_b11_1", title:"おかいけい", icon:"💳", xp:15, board:true,
  steps:[
    {type:"intro", title:"おかいけい",
     desc:"Learn the vocabulary for paying, receipts, and common transaction phrases in Japanese shops. These words make real shopping experiences smooth.",
     goals:["Use payment-related vocabulary at a register","Ask about prices and methods of payment","Understand receipts and change"]},

    {type:"teach", trg:"おかいけい", src:"payment / checkout", pos:"noun", gender:null,
     note:"Used at the register: おかいけいおねがいします.\nModern alternative: おかんじょう (at restaurants).",
     example:"A: おかいけいおねがいします。\nB: ぜんぶでさんぜんにひゃくえんです。",
     exampleSrc:"A: Checkout, please.\nB: The total is 3,200 yen.",
     funFact:"おかいけい is the standard word at shops and convenience stores. At restaurants, おかんじょう or おあいそ is more common. In Japan, you place money in a small tray (トレー) on the counter rather than handing it directly to the cashier."},

    {type:"teach", trg:"レジ", src:"register / checkout counter", pos:"noun", gender:null,
     note:"From English 'register.' The physical checkout area.\nレジぶくろ = plastic bag at the register.",
     example:"A: レジはどこですか？\nB: あちらです。",
     exampleSrc:"A: Where is the register?\nB: Over there.",
     funFact:"Since 2020, Japan charges for plastic bags (レジぶくろ) at the register. Customers are asked レジぶくろはいりますか (Do you need a plastic bag?). Bringing an エコバッグ (eco bag) is now common. The charge is usually 3-5 yen."},

    {type:"teach", trg:"おつり", src:"change (money returned)", pos:"noun", gender:null,
     note:"The money you get back. おつりはいりません = keep the change.\nRare in Japan since exact payment is preferred.",
     example:"A: せんえんでおねがいします。\nB: おつりはひゃくえんです。どうぞ。",
     exampleSrc:"A: With a 1,000-yen bill, please.\nB: Your change is 100 yen. Here you go.",
     funFact:"Saying おつりはいりません (keep the change) is uncommon in Japan because tipping culture does not exist. Cashiers always count change carefully and often use automatic change machines. The change is placed on a small tray, never in your hand."},

    {type:"teach", trg:"レシート", src:"receipt", pos:"noun", gender:null,
     note:"Loanword from English. Also: りょうしゅうしょ (formal receipt for business expenses).\nレシートはいりますか = do you need a receipt?",
     example:"A: レシートはいりますか？\nB: はい、おねがいします。",
     exampleSrc:"A: Do you need a receipt?\nB: Yes, please.",
     funFact:"Japanese receipts are extremely detailed, showing tax breakdowns, store addresses, and point card information. Convenience store receipts even show lottery numbers during campaign periods. りょうしゅうしょ is a formal receipt with a stamp, needed for business expense reports."},

    {type:"teach", trg:"ぜいこみ", src:"tax included", pos:"noun", gender:null,
     note:"ぜい (tax) + こみ (included). Opposite: ぜいぬき (before tax).\nJapan's consumption tax is 10%.",
     example:"A: このねだんはぜいこみですか？\nB: はい、ぜいこみです。",
     exampleSrc:"A: Does this price include tax?\nB: Yes, tax is included.",
     funFact:"Japan's consumption tax (消費税) is currently 10%, but food and newspapers are taxed at a reduced 8% rate. Since 2021, all prices must be displayed ぜいこみ (tax included). Before this law, confusion between ぜいこみ and ぜいぬき pricing was a common shopper frustration."},

    {type:"teach", trg:"げんきん", src:"cash", pos:"noun", gender:null,
     note:"げんきんでおねがいします = I will pay with cash.\nJapan is still heavily cash-based.",
     example:"A: おしはらいはどうしますか？\nB: げんきんでおねがいします。",
     exampleSrc:"A: How will you pay?\nB: Cash, please.",
     funFact:"Despite being technologically advanced, Japan remained heavily cash-dependent until recently. The government actively promotes キャッシュレス (cashless) payments, but many small restaurants and shops still accept cash only. ATMs at convenience stores work 24/7."},

    {type:"teach", trg:"カード", src:"card (credit/debit)", pos:"noun", gender:null,
     note:"カードでおねがいします = I will pay by card.\nSuica and Pasmo are popular IC cards.",
     example:"A: カードはつかえますか？\nB: はい、クレジットカードもでんしマネーもつかえます。",
     exampleSrc:"A: Can I use a card?\nB: Yes, we accept credit cards and digital money.",
     funFact:"Japan has many payment methods: クレジットカード (credit card), Suica/Pasmo (transit IC cards that double as payment), PayPay (QR code), and iD/QUICPay (contactless). IC cards like Suica can be loaded at station machines and used at convenience stores and vending machines."},

    {type:"teach", trg:"ポイント", src:"points (reward)", pos:"noun", gender:null,
     note:"ポイントカードはありますか = do you have a points card?\nEarning and spending points is a national pastime.",
     example:"A: ポイントカードはおもちですか？\nB: はい、Tポイントでおねがいします。",
     exampleSrc:"A: Do you have a points card?\nB: Yes, T-Point please.",
     funFact:"Japan's point card culture is enormous. Most people carry multiple point cards (T-Point, Ponta, Rakuten, dポイント). Cashiers always ask about point cards. ポイ活 (point-hunting activity) is a popular hobby, with people strategically accumulating points across different systems."},

    {type:"teach", trg:"ふくろ", src:"bag", pos:"noun", gender:null,
     note:"ふくろにいれますか = shall I put it in a bag?\nかみぶくろ = paper bag.",
     example:"A: ふくろにいれますか？\nB: いいえ、だいじょうぶです。エコバッグがあります。",
     exampleSrc:"A: Shall I put it in a bag?\nB: No, I'm fine. I have an eco bag.",
     funFact:"After the plastic bag charge was introduced, Japanese stores began offering attractive and collectable エコバッグ (reusable bags). Some department stores wrap items in beautiful ふろしき-style (wrapping cloth) bags. The environmental policy change transformed shopping habits nationwide."},

    {type:"teach", trg:"わりびき", src:"discount", pos:"noun", gender:null,
     note:"にわりびき = 20% off. はんがく = half price.\nわりびきクーポン = discount coupon.",
     example:"A: きょうはぜんぴんにわりびきです。\nB: やすい！たくさんかいましょう。",
     exampleSrc:"A: Today everything is 20% off.\nB: Cheap! Let's buy a lot.",
     funFact:"Japanese discount culture has its own vocabulary: わりびき (X% off), えんびき (X yen off), はんがく (half price), タイムセール (time sale). Supermarkets mark down bento boxes in the evening (夕方の値引き), and savvy shoppers time their visits for these discounts."},

    {type:"teach", trg:"むりょう", src:"free (no charge)", pos:"noun", gender:null,
     note:"むりょう + noun: むりょうサービス = free service.\nAlso: ただ (casual for free).",
     example:"A: このアプリはむりょうですか？\nB: はい、ダウンロードはむりょうです。",
     exampleSrc:"A: Is this app free?\nB: Yes, the download is free.",
     funFact:"むりょう (無料) uses the kanji 無 (without) and 料 (fee). The casual word ただ is more common in speech: ただでもらった (I got it for free). Japanese stores often offer むりょうサンプル (free samples), especially at food counters in department basements (デパ地下)."},

    // Quiz steps
    {type:"mc", q:"レジでおきゃくさんがよくきかれることはなんですか？",
     opts:["レシートはいりますか","おなまえはなんですか","どこにすんでいますか","なんさいですか"],
     ans:"レシートはいりますか",
     hint:"At the checkout counter, the cashier asks about something they can print for you after payment."},

    {type:"fb", s:"おしはらいは{1}でおねがいします。",
     a:["げんきん"],
     opts:["げんきん","おつり","レシート","ポイント"],
     hint:"You are telling the cashier you want to pay with physical money, not a card.",
     sSrc:"I'll pay with cash, please."},

    {type:"match", pairs:[
      {trg:"おつり", src:"change"},
      {trg:"わりびき", src:"discount"},
      {trg:"むりょう", src:"free"},
      {trg:"ぜいこみ", src:"tax included"}
    ]},

    {type:"mc", q:"2020ねんから、にほんのおみせではなにがかわりましたか？",
     opts:["Plastic bags now cost money","All shops went cashless","Receipts became digital","Points cards were eliminated"],
     ans:"Plastic bags now cost money",
     hint:"A new policy about レジぶくろ changed shopping habits. Customers n... often bring their own b...."},

    {type:"fb", s:"{1}カードはおもちですか？",
     a:["ポイント"],
     opts:["ポイント","レジ","カード","げんきん"],
     hint:"The cashier is asking if you have a rewards card to earn points with your purchase.",
     sSrc:"Do you have a points card?"},

    {type:"mc", q:"「にわりびき」はどのくらいやすくなりますか？",
     opts:["20% off","2% off","200 yen off","Half price"],
     ans:"20% off",
     hint:"に means 'two' and わり means '10%.' So two units of 10% equals a specific percentage."}
  ]
};
export default BATCH11_L1;
