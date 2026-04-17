// Batch 4 — Unit 09 Lesson 2: Online Shopping & Delivery
const BATCH4_L_2 = {
  id:"jav2_u09l_b4_2", title:"ネットショッピング", icon:"📦", xp:15, board:true,
  steps:[
    {type:"intro", title:"ネットショッピング",
     desc:"Learn vocabulary for online shopping and delivery. Japan's delivery system is among the most efficient and polite in the world.",
     goals:["Navigate online shopping terms","Understand delivery vocabulary","Handle returns and exchanges"]},

    {type:"teach", trg:"注文(ちゅうもん)する", src:"to order (online)", pos:"verb", gender:null,
     note:"Same word for restaurant and online orders.",
     example:"アマゾンで本(ほん)を注文(ちゅうもん)しました。",
     exampleSrc:"I ordered a book on Amazon.",
     funFact:"Amazon Japan is one of the country's largest retailers. Rakuten, its Japanese rival, is even bigger domestically with its ecosystem of points and services. The rivalry has driven delivery speeds to incredible levels."},

    {type:"teach", trg:"配達(はいたつ)", src:"delivery", pos:"noun", gender:null,
     note:"Distribute + reach. Getting packages to your door.",
     example:"配達(はいたつ)は明日(あした)です。",
     exampleSrc:"Delivery is tomorrow.",
     funFact:"Japanese delivery drivers (宅配便 takuhaibin) are legendarily polite. They call ahead, wear gloves, bow when handing over packages, and will redeliver at your chosen time slot. Yamato Transport's cat logo is iconic."},

    {type:"teach", trg:"荷物(にもつ)", src:"luggage / package", pos:"noun", gender:null,
     note:"Load + thing. Both personal luggage and shipped packages.",
     example:"荷物(にもつ)が届(とど)きました。",
     exampleSrc:"The package arrived.",
     funFact:"Japanese delivery allows you to specify 2-hour delivery windows. If you miss a delivery, a slip is left and you can reschedule via phone, web, or even LINE app. The system is remarkably flexible and efficient."},

    {type:"teach", trg:"送料(そうりょう)", src:"shipping fee / postage", pos:"noun", gender:null,
     note:"Send + fee. The cost of delivery.",
     example:"送料(そうりょう)無料(むりょう)です。",
     exampleSrc:"Shipping is free.",
     funFact:"Free shipping (送料無料) is a major selling point in Japanese e-commerce. Amazon Prime Japan offers same-day delivery in many areas. The logistics infrastructure is so advanced that next-day delivery is standard, not premium."},

    {type:"teach", trg:"品物(しなもの)", src:"product / goods / item", pos:"noun", gender:null,
     note:"Item + thing. The physical product itself.",
     example:"品物(しなもの)はとてもいい質(しつ)です。",
     exampleSrc:"The product is very high quality.",
     funFact:"Japanese consumer expectations for product quality are among the highest in the world. Even minor cosmetic defects that would pass elsewhere lead to returns. This drives Japanese manufacturing precision."},

    {type:"teach", trg:"在庫(ざいこ)", src:"stock / inventory", pos:"noun", gender:null,
     note:"Exist + warehouse. Whether items are available.",
     example:"この商品(しょうひん)は在庫(ざいこ)がありません。",
     exampleSrc:"This product is out of stock.",
     funFact:"The phrase 在庫切(ざいこぎ)れ (zaiko-gire, stock-out) is dreaded by Japanese shops. Limited edition items sell out instantly. Japanese consumers often line up for hours to secure popular limited-stock items."},

    {type:"teach", trg:"割引(わりびき)", src:"discount", pos:"noun", gender:null,
     note:"Divide + pull. Percentage-based reduction.",
     example:"二十(にじゅっ)パーセント割引(わりびき)です。",
     exampleSrc:"It is a 20% discount.",
     funFact:"Japan has specific discount seasons: 初売(はつう)り (hatsu-uri, New Year sales), 夏(なつ)のセール (summer sales), and 決算(けっさん)セール (fiscal year-end sales). The biggest bargains are during hatsu-uri when department stores offer 福袋(ふくぶくろ) (lucky bags)."},

    {type:"teach", trg:"返品(へんぴん)", src:"return (a product)", pos:"noun", gender:null,
     note:"Return + item. Sending back a purchase.",
     example:"サイズが違(ちが)うので返品(へんぴん)します。",
     exampleSrc:"I am returning it because the size is different.",
     funFact:"Returning items in Japan is less common than in Western countries. There is a cultural reluctance to inconvenience the seller. However, online shopping has made returns more accepted, especially with services like Amazon's easy returns."},

    {type:"teach", trg:"交換(こうかん)", src:"exchange (product)", pos:"noun", gender:null,
     note:"Exchange + change. Swapping for a different item.",
     example:"Sサイズに交換(こうかん)してください。",
     exampleSrc:"Please exchange it for size S.",
     funFact:"Product exchanges are more socially acceptable than returns in Japan. Exchanging shows you still want the product, just a different version. Shop staff are very accommodating with exchanges."},

    {type:"teach", trg:"サイズ", src:"size", pos:"noun", gender:null,
     note:"From English 'size.' Japanese clothing sizes run smaller than Western.",
     example:"このサイズはありますか？",
     exampleSrc:"Do you have this size?",
     funFact:"Japanese sizing is different from Western. A Japanese L is roughly a Western M. Free size (フリーサイズ) means one-size-fits-all. This sizing difference catches many foreign shoppers off guard."},

    {type:"teach", trg:"レビュー", src:"review (product)", pos:"noun", gender:null,
     note:"From English 'review.' User ratings and comments.",
     example:"レビューを読(よ)んでから買(か)います。",
     exampleSrc:"I buy after reading reviews.",
     funFact:"Japanese online reviews tend to be very detailed and honest. A product with 3.5 stars in Japan might equivalent to 4.5 stars elsewhere because Japanese reviewers are more critical and thorough in their evaluations."},

    {type:"teach", trg:"カート", src:"shopping cart (online)", pos:"noun", gender:null,
     note:"From English 'cart.' The virtual shopping basket.",
     example:"カートに入(い)れました。",
     exampleSrc:"I added it to the cart.",
     funFact:"Japanese e-commerce sites like Rakuten are famously text-heavy with long product pages full of details, photos, and promotions. This contrasts with the minimalist design of Amazon. Both approaches work because Japanese consumers want thorough information."},

    {type:"teach", trg:"お届(とど)け先(さき)", src:"delivery address", pos:"noun", gender:null,
     note:"Deliver + destination. Where the package goes.",
     example:"お届(とど)け先(さき)を入力(にゅうりょく)してください。",
     exampleSrc:"Please enter the delivery address.",
     funFact:"Japanese addresses work from large to small: prefecture, city, ward, block, building number. This is the reverse of Western addresses. Understanding this system is essential for receiving packages correctly."},

    {type:"teach", trg:"代引(だいび)き", src:"cash on delivery (COD)", pos:"noun", gender:null,
     note:"Payment + pull. Pay when the package arrives.",
     example:"代引(だいび)きでお願(ねが)いします。",
     exampleSrc:"Cash on delivery, please.",
     funFact:"Cash on delivery remains popular in Japan because of the lingering preference for cash transactions. The delivery person collects the payment and gives change. This trust-based system works because of Japan's extremely low fraud rates."},

    {type:"mc", q:"What does 配達(はいたつ) mean?",
     opts:["delivery","payment","return","order"], ans:"delivery",
     hint:"The process of getting a package from a warehouse to your door."},

    {type:"fb", s:"{1}無料(むりょう)です。", a:"送料(そうりょう)",
     sSrc:"Shipping is free.",
     opts:["送料(そうりょう)","割引(わりびき)","税込(ぜいこ)み","代引(だいび)き"],
     hint:"The fee charged for transporting goods to you."},

    {type:"match", pairs:[
      {trg:"返品(へんぴん)", src:"return (product)"},
      {trg:"交換(こうかん)", src:"exchange"},
      {trg:"割引(わりびき)", src:"discount"},
      {trg:"在庫(ざいこ)", src:"stock/inventory"}
    ]},

    {type:"mc", q:"What is 代引(だいび)き?",
     opts:["cash on delivery","free shipping","express delivery","gift wrapping"], ans:"cash on delivery",
     hint:"A payment method where you pay the driver when the package arrives."},

    {type:"fb", s:"レビューを{1}から買(か)います。", a:"読(よ)んで",
     sSrc:"I buy after reading reviews.",
     opts:["読(よ)んで","書(か)いて","見(み)て","聞(き)いて"],
     hint:"The action of looking at written text to gather information."},

    {type:"mc", q:"Japanese clothing sizes compared to Western:",
     opts:["run smaller","run larger","are the same","use numbers only"], ans:"run smaller",
     hint:"A Japanese L is roughly equivalent to a Western M."},

    {type:"mc", q:"What does カートに入(い)れる mean?",
     opts:["add to shopping cart","remove from cart","buy now","save for later"], ans:"add to shopping cart",
     hint:"Placing an item in your virtual basket before checkout."}
  ]
};
export default BATCH4_L_2;
