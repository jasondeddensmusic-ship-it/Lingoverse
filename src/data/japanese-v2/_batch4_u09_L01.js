// Batch 4 — Unit 09 Lesson 1: Store Types & Payment
const BATCH4_L_1 = {
  id:"jav2_u09l_b4_1", title:"おみせのしゅるい", icon:"🏬", xp:15, board:true,
  steps:[
    {type:"intro", title:"おみせのしゅるい",
     desc:"Learn the names of different types of stores and payment methods. Japan has a unique retail landscape with specialized shops for everything.",
     goals:["Name different types of stores","Handle payment situations","Understand Japanese retail culture"]},

    {type:"teach", trg:"コンビニ", src:"convenience store", pos:"noun", gender:null,
     note:"Short for コンビニエンスストア. Open 24/7 everywhere in Japan.",
     example:"コンビニでおにぎりをかいます。",
     exampleSrc:"I buy rice balls at the convenience store.",
     funFact:"Japan has over 56,000 convenience stores. The big three are 7-Eleven, Lawson, and FamilyMart. They sell fresh food, pay bills, provide ATMs, print documents, and even accept package deliveries. They are miniature life-support systems."},

    {type:"teach", trg:"スーパー", src:"supermarket", pos:"noun", gender:null,
     note:"Short for スーパーマーケット. For groceries and household goods.",
     example:"スーパーでやさいをかいます。",
     exampleSrc:"I buy vegetables at the supermarket.",
     funFact:"Japanese supermarkets have incredible evening markdowns. Around 7-8 PM, stickers showing 半額 (hangaku, half price) appear on sushi, bento, and prepared foods. Students and bargain hunters time their visits perfectly."},

    {type:"teach", trg:"くすりや", src:"pharmacy / drugstore", pos:"noun", gender:null,
     note:"Kanji: 薬屋. Medicine + shop. Also called ドラッグストア.",
     example:"くすりやでくすりをかいます。",
     exampleSrc:"I buy medicine at the pharmacy.",
     funFact:"Japanese drugstores (ドラッグストア) are tourist magnets. They sell cosmetics, snacks, supplements, and medicine at good prices. Chains like Matsumoto Kiyoshi and Don Quijote are on every foreign tourist's must-visit list."},

    {type:"teach", trg:"ほんや", src:"bookstore", pos:"noun", gender:null,
     note:"Kanji: 本屋. Book + shop. Japan has many dedicated bookstores.",
     example:"ほんやであたらしいマンガをかいました。",
     exampleSrc:"I bought a new manga at the bookstore.",
     funFact:"Despite the digital age, physical bookstores thrive in Japan. Manga accounts for a huge portion of sales. Tsutaya, Kinokuniya, and Maruzen are beloved chains. Many bookstores have comfortable reading areas."},

    {type:"teach", trg:"でんきや", src:"electronics store", pos:"noun", gender:null,
     note:"Kanji: 電気屋. Electricity + shop. For appliances and gadgets.",
     example:"でんきやであたらしいパソコンをかいます。",
     exampleSrc:"I buy a new computer at the electronics store.",
     funFact:"Akihabara in Tokyo is the world's largest electronics district. Massive stores like Yodobashi Camera and Bic Camera have 8+ floors of electronics. Tax-free shopping for tourists makes these stores international destinations."},

    {type:"teach", trg:"パンや", src:"bakery", pos:"noun", gender:null,
     note:"パン (bread, from Portuguese 'pao') + や (shop).",
     example:"まいあさパンやでパンをかいます。",
     exampleSrc:"I buy bread at the bakery every morning.",
     funFact:"Japanese bakeries serve uniquely Japanese breads: メロンパン (melon bread), あんパン (red bean bread), カレーパン (curry bread). These are Japanese inventions that blend Western baking with Japanese flavors."},

    {type:"teach", trg:"はなや", src:"flower shop / florist", pos:"noun", gender:null,
     note:"Kanji: 花屋. Flower + shop.",
     example:"はなやできれいなバラをかいました。",
     exampleSrc:"I bought beautiful roses at the flower shop.",
     funFact:"Flower shops in Japan do brisk business because flowers are given for many occasions: hospital visits, funerals, temple offerings, and home decoration. The art of flower arrangement (生け花 ikebana) keeps fresh flowers in demand."},

    {type:"teach", trg:"にくや", src:"butcher shop", pos:"noun", gender:null,
     note:"Kanji: 肉屋. Meat + shop. Traditional meat specialty stores.",
     example:"にくやでわぎゅうをかいます。",
     exampleSrc:"I buy wagyu beef at the butcher shop.",
     funFact:"Traditional butcher shops (肉屋) also sell prepared items like コロッケ (croquettes) and メンチカツ (minced meat cutlets). These fried snacks from the butcher are beloved comfort food that supermarkets try but cannot replicate."},

    {type:"teach", trg:"げんきん", src:"cash", pos:"noun", gender:null,
     note:"Kanji: 現金. Present + gold. Physical money.",
     example:"げんきんでおねがいします。",
     exampleSrc:"Cash, please.",
     funFact:"Japan remained a heavily cash-based society until recently. Bills are kept in pristine condition. The 10,000 yen note (about $70) is commonly used without anyone worrying about counterfeits because Japanese money is extremely hard to forge."},

    {type:"teach", trg:"クレジットカード", src:"credit card", pos:"noun", gender:null,
     note:"From English. Often shortened to just カード.",
     example:"クレジットカードでしはらいます。",
     exampleSrc:"I pay by credit card.",
     funFact:"Credit card acceptance has grown rapidly but many small restaurants and shops remain cash-only. The phrase 'kado wa tsukaemasu ka?' (Can I use a card?) is essential for travelers in Japan."},

    {type:"teach", trg:"おつり", src:"change (money returned)", pos:"noun", gender:null,
     note:"From 釣り (fishing/change). The money you get back.",
     example:"おつりはけっこうです。",
     exampleSrc:"Keep the change.",
     funFact:"In Japan, change is always placed on a small tray (お釣りトレー), never handed directly to the customer. Cashiers count change back to you carefully. This precision and politeness extends even to the smallest transactions."},

    {type:"teach", trg:"レシート", src:"receipt", pos:"noun", gender:null,
     note:"From English 'receipt.' Given automatically at most stores.",
     example:"レシートをください。",
     exampleSrc:"Please give me a receipt.",
     funFact:"Japanese receipts are incredibly detailed, listing every item with tax breakdown. Convenience store cashiers always ask 'reshiito wa yoroshii desu ka?' (Is the receipt okay/do you want it?). Declining is common."},

    {type:"teach", trg:"ぜいこみ", src:"tax included (price)", pos:"noun", gender:null,
     note:"Kanji: 税込み. Tax + included. The total price with tax.",
     example:"このねだんはぜいこみですか？",
     exampleSrc:"Is this price tax included?",
     funFact:"Japan's consumption tax is 10% (8% for food). Prices are sometimes shown without tax (税抜き zeINUki) which surprises shoppers at the register. Checking 税込/税抜 on price tags saves confusion."},

    {type:"teach", trg:"ポイントカード", src:"points card / loyalty card", pos:"noun", gender:null,
     note:"From English. Collect points for discounts at chain stores.",
     example:"ポイントカードはおもちですか？",
     exampleSrc:"Do you have a points card?",
     funFact:"Point cards are ubiquitous in Japan. T-Point, Rakuten Point, and d-Point are accepted at thousands of stores. Cashiers ask about point cards at every single transaction. Some Japanese carry 10+ point cards."},

    {type:"mc", q:"What is a コンビニ?",
     opts:["convenience store","supermarket","department store","pharmacy"], ans:"convenience store",
     hint:"A 24/7 shop found on nearly every corner in Japan."},

    {type:"fb", s:"{1}でしはらいます。", a:"クレジットカード",
     sSrc:"I pay by credit card.",
     opts:["クレジットカード","げんきん","ポイントカード","レシート"],
     hint:"A plastic card used for electronic payment instead of cash."},

    {type:"match", pairs:[
      {trg:"くすりや", src:"pharmacy"},
      {trg:"ほんや", src:"bookstore"},
      {trg:"パンや", src:"bakery"},
      {trg:"にくや", src:"butcher shop"}
    ]},

    {type:"mc", q:"What does ぜいこみ mean?",
     opts:["tax included","tax excluded","discounted","free"], ans:"tax included",
     hint:"The total price that already has the consumption t... built in."},

    {type:"fb", s:"{1}はけっこうです。", a:"おつり",
     sSrc:"Keep the change.",
     opts:["おつり","レシート","ポイント","カード"],
     hint:"The coins you receive back after paying more than the total."},

    {type:"mc", q:"The suffix -や in store names means:",
     opts:["shop / store","person","thing","place"], ans:"shop / store",
     hint:"Added to a product name to create the s... that sells it."},

    {type:"mc", q:"What does ポイントカード mean?",
     opts:["loyalty/points card","credit card","ID card","gift card"], ans:"loyalty/points card",
     hint:"Collect stamps or digital p... for rewards at chain stores."}
  ]
};
export default BATCH4_L_1;
