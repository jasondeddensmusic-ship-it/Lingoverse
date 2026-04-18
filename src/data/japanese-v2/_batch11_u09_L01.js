// Batch 11 – Unit 09 (A1.3 Shopping): Payment & Transaction Words
const BATCH11_L1 = {
  id:"jav2_u09l_b11_1", title:"お会計(かいけい)", icon:"💳", xp:15, board:true,
  steps:[
    {type:"intro", title:"お会計(かいけい)",
     desc:"Learn the vocabulary for paying, receipts, and common transaction phrases in Japanese shops. These words make real shopping experiences smooth.",
     goals:["Use payment-related vocabulary at a register","Ask about prices and methods of payment","Understand receipts and change"]},

    {type:"teach", trg:"お会計(かいけい)", src:"payment / checkout", pos:"noun", gender:null,
     note:"Used at the register: お会計(かいけい)おねがいします.\nModern alternative: お勘定(かんじょう) (at restaurants).",
     example:"A: お会計(かいけい)おねがいします。\nB: 全部(ぜんぶ)で三千二百円(さんぜんにひゃくえん)です。",
     exampleSrc:"A: Checkout, please.\nB: The total is 3,200 yen.",
     funFact:"お会計(かいけい) is the standard word at shops and convenience stores. At restaurants, お勘定(かんじょう) or おあいそ is more common. In Japan, you place money in a small tray (トレー) on the counter rather than handing it directly to the cashier."},

    {type:"teach", trg:"レジ", src:"register / checkout counter", pos:"noun", gender:null,
     note:"From English 'register.' The physical checkout area.\nレジ袋(ぶくろ) = plastic bag at the register.",
     example:"A: レジはどこですか？\nB: あちらです。",
     exampleSrc:"A: Where is the register?\nB: Over there.",
     funFact:"Since 2020, Japan charges for plastic bags (レジ袋(ぶくろ)) at the register. Customers are asked レジ袋(ぶくろ)はいりますか (Do you need a plastic bag?). Bringing an エコバッグ (eco bag) is now common. The charge is usually 3-5 yen."},

    {type:"teach", trg:"おつり", src:"change (money returned)", pos:"noun", gender:null,
     note:"The money you get back. おつりはいりません = keep the change.\nRare in Japan since exact payment is preferred.",
     example:"A: 千円(せんえん)でおねがいします。\nB: おつりは百円(ひゃくえん)です。どうぞ。",
     exampleSrc:"A: With a 1,000-yen bill, please.\nB: Your change is 100 yen. Here you go.",
     funFact:"Saying おつりはいりません (keep the change) is uncommon in Japan because tipping culture does not exist. Cashiers always count change carefully and often use automatic change machines. The change is placed on a small tray, never in your hand."},

    {type:"teach", trg:"レシート", src:"receipt", pos:"noun", gender:null,
     note:"Loanword from English. Also: 領収書(りょうしゅうしょ) (formal receipt for business expenses).\nレシートはいりますか = do you need a receipt?",
     example:"A: レシートはいりますか？\nB: はい、おねがいします。",
     exampleSrc:"A: Do you need a receipt?\nB: Yes, please.",
     funFact:"Japanese receipts are extremely detailed, showing tax breakdowns, store addresses, and point card information. Convenience store receipts even show lottery numbers during campaign periods. 領収書(りょうしゅうしょ) is a formal receipt with a stamp, needed for business expense reports."},

    {type:"teach", trg:"税込(ぜいこ)み", src:"tax included", pos:"noun", gender:null,
     note:"税(ぜい) (tax) + 込(こ)み (included). Opposite: 税抜(ぜいぬ)き (before tax).\nJapan's consumption tax is 10%.",
     example:"A: この値段(ねだん)は税込(ぜいこ)みですか？\nB: はい、税込(ぜいこ)みです。",
     exampleSrc:"A: Does this price include tax?\nB: Yes, tax is included.",
     funFact:"Japan's consumption tax (消費税(しょうひぜい)) is currently 10%, but food and newspapers are taxed at a reduced 8% rate. Since 2021, all prices must be displayed 税込(ぜいこ)み (tax included). Before this law, confusion between 税込(ぜいこ)み and 税抜(ぜいぬ)き pricing was a common shopper frustration."},

    {type:"teach", trg:"現金(げんきん)", src:"cash", pos:"noun", gender:null,
     note:"現金(げんきん)でおねがいします = I will pay with cash.\nJapan is still heavily cash-based.",
     example:"A: お支払(しはら)いはどうしますか？\nB: 現金(げんきん)でおねがいします。",
     exampleSrc:"A: How will you pay?\nB: Cash, please.",
     funFact:"Despite being technologically advanced, Japan remained heavily cash-dependent until recently. The government actively promotes キャッシュレス (cashless) payments, but many small restaurants and shops still accept cash only. ATMs at convenience stores work 24/7."},

    {type:"teach", trg:"カード", src:"card (credit/debit)", pos:"noun", gender:null,
     note:"カードでおねがいします = I will pay by card.\nSuica and Pasmo are popular IC cards.",
     example:"A: カードは使(つか)えますか？\nB: はい、クレジットカードも電子(でんし)マネーも使(つか)えます。",
     exampleSrc:"A: Can I use a card?\nB: Yes, we accept credit cards and digital money.",
     funFact:"Japan has many payment methods: クレジットカード (credit card), Suica/Pasmo (transit IC cards that double as payment), PayPay (QR code), and iD/QUICPay (contactless). IC cards like Suica can be loaded at station machines and used at convenience stores and vending machines."},

    {type:"teach", trg:"ポイント", src:"points (reward)", pos:"noun", gender:null,
     note:"ポイントカードはありますか = do you have a points card?\nEarning and spending points is a national pastime.",
     example:"A: ポイントカードはお持(も)ちですか？\nB: はい、Tポイントでおねがいします。",
     exampleSrc:"A: Do you have a points card?\nB: Yes, T-Point please.",
     funFact:"Japan's point card culture is enormous. Most people carry multiple point cards (T-Point, Ponta, Rakuten, dポイント). Cashiers always ask about point cards. ポイ活(かつ) (point-hunting activity) is a popular hobby, with people strategically accumulating points across different systems."},

    {type:"teach", trg:"袋(ふくろ)", src:"bag", pos:"noun", gender:null,
     note:"袋(ふくろ)に入(い)れますか = shall I put it in a bag?\n紙袋(かみぶくろ) = paper bag.",
     example:"A: 袋(ふくろ)に入(い)れますか？\nB: いいえ、大丈夫(だいじょうぶ)です。エコバッグがあります。",
     exampleSrc:"A: Shall I put it in a bag?\nB: No, I'm fine. I have an eco bag.",
     funFact:"After the plastic bag charge was introduced, Japanese stores began offering attractive and collectable エコバッグ (reusable bags). Some department stores wrap items in beautiful 風呂敷(ふろしき)-style (wrapping cloth) bags. The environmental policy change transformed shopping habits nationwide."},

    {type:"teach", trg:"割引(わりびき)", src:"discount", pos:"noun", gender:null,
     note:"二割引(にわりびき) = 20% off. 半額(はんがく) = half price.\n割引(わりびき)クーポン = discount coupon.",
     example:"A: 今日(きょう)は全品(ぜんぴん)二割引(にわりびき)です。\nB: 安(やす)い！たくさん買(か)いましょう。",
     exampleSrc:"A: Today everything is 20% off.\nB: Cheap! Let's buy a lot.",
     funFact:"Japanese discount culture has its own vocabulary: 割引(わりびき) (X% off), 円引(えんびき) (X yen off), 半額(はんがく) (half price), タイムセール (time sale). Supermarkets mark down bento boxes in the evening (夕方(ゆうがた)の値引(ねびき)き), and savvy shoppers time their visits for these discounts."},

    {type:"teach", trg:"無料(むりょう)", src:"free (no charge)", pos:"noun", gender:null,
     note:"無料(むりょう) + noun: 無料(むりょう)サービス = free service.\nAlso: ただ (casual for free).",
     example:"A: このアプリは無料(むりょう)ですか？\nB: はい、ダウンロードは無料(むりょう)です。",
     exampleSrc:"A: Is this app free?\nB: Yes, the download is free.",
     funFact:"無料(むりょう) (無料) uses the kanji 無 (without) and 料 (fee). The casual word ただ is more common in speech: ただでもらった (I got it for free). Japanese stores often offer 無料(むりょう)サンプル (free samples), especially at food counters in department basements (デパ地下(ちか))."},

    // Quiz steps
    {type:"mc", q:"レジでお客(きゃく)さんがよく聞(き)かれることはなんですか？",
     opts:["レシートはいりますか","お名前(なまえ)はなんですか","どこに住(す)んでいますか","何歳(なんさい)ですか"],
     ans:"レシートはいりますか",
     hint:"At the checkout counter, the cashier asks about something they can print for you after payment."},

    {type:"fb", s:"お支払(しはら)いは{1}でおねがいします。",
     a:["現金(げんきん)"],
     opts:["現金(げんきん)","おつり","レシート","ポイント"],
     hint:"You are telling the cashier you want to pay with physical money, not a card.",
     sSrc:"I'll pay with cash, please."},

    {type:"match", pairs:[
      {trg:"おつり", src:"change"},
      {trg:"割引(わりびき)", src:"discount"},
      {trg:"無料(むりょう)", src:"free"},
      {trg:"税込(ぜいこ)み", src:"tax included"}
    ]},

    {type:"mc", q:"2020年(ねん)から、日本(にほん)のお店(みせ)ではなにがかわりましたか？",
     opts:["Plastic bags now cost money","All shops went cashless","Receipts became digital","Points cards were eliminated"],
     ans:"Plastic bags now cost money",
     hint:"A new policy about レジ袋(ぶくろ) changed shopping habits. Customers n... often bring their own b...."},

    {type:"fb", s:"{1}カードはお持(も)ちですか？",
     a:["ポイント"],
     opts:["ポイント","レジ","カード","現金(げんきん)"],
     hint:"The cashier is asking if you have a rewards card to earn points with your purchase.",
     sSrc:"Do you have a points card?"},

    {type:"mc", q:"「二割引(にわりびき)」はどのくらい安(やす)くなりますか？",
     opts:["20% off","2% off","200 yen off","Half price"],
     ans:"20% off",
     hint:"二(に) means 'two' and 割(わり) means '10%.' So two units of 10% equals a specific percentage."}
  ,{type:"match",pairs:[{trg:"お会計(かいけい)",src:"payment / checkout"},{trg:"レジ",src:"register / checkout counter"},{trg:"カード",src:"card (credit/debit)"},{trg:"袋(ふくろ)",src:"bag"}]}]
};
export default BATCH11_L1;
