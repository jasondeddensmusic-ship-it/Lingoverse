// Batch 4. Unit 09 Lesson 1: Store Types & Payment
const BATCH4_L_1 = {
  id:"jav2_u09l_b4_1", title:"お店(みせ)の種類(しゅるい)", icon:"🏬", xp:15, board:true,
  steps:[
    {type:"intro", title:"お店(みせ)の種類(しゅるい)",
     desc:"Learn the names of different types of stores and payment methods. Japan has a unique retail landscape with specialized shops for everything.",
     goals:["Name different types of stores","Handle payment situations","Understand Japanese retail culture"]},

    {type:"teach", trg:"コンビニ", src:"convenience store", pos:"noun", gender:null,
     note:"Short for コンビニエンスストア. Open 24/7 everywhere in Japan.",
     example:"コンビニでおにぎりを買(か)います。",
     exampleSrc:"I buy rice balls at the convenience store.",
     funFact:"Japan has over 56,000 convenience stores. The big three are 7-Eleven, Lawson, and FamilyMart. They sell fresh food, pay bills, provide ATMs, print documents, and even accept package deliveries. They are miniature life-support systems."},

    {type:"teach", trg:"スーパー", src:"supermarket", pos:"noun", gender:null,
     note:"Short for スーパーマーケット. For groceries and household goods.",
     example:"スーパーで野菜(やさい)を買(か)います。",
     exampleSrc:"I buy vegetables at the supermarket.",
     funFact:"Japanese supermarkets have incredible evening markdowns. Around 7-8 PM, stickers showing 半額 (hangaku, half price) appear on sushi, bento, and prepared foods. Students and bargain hunters time their visits perfectly."},

    {type:"teach", trg:"薬屋(くすりや)", src:"pharmacy / drugstore", pos:"noun", gender:null,
     note:"Medicine + shop. Also called ドラッグストア.",
     example:"薬屋(くすりや)で薬(くすり)を買(か)います。",
     exampleSrc:"I buy medicine at the pharmacy.",
     funFact:"Japanese drugstores (ドラッグストア) are tourist magnets. They sell cosmetics, snacks, supplements, and medicine at good prices. Chains like Matsumoto Kiyoshi and Don Quijote are on every foreign tourist's must-visit list."},

    {type:"teach", trg:"本屋(ほんや)", src:"bookstore", pos:"noun", gender:null,
     note:"Book + shop. Japan has many dedicated bookstores.",
     example:"本屋(ほんや)で新(あたら)しいマンガを買(か)いました。",
     exampleSrc:"I bought a new manga at the bookstore.",
     funFact:"Despite the digital age, physical bookstores thrive in Japan. Manga accounts for a huge portion of sales. Tsutaya, Kinokuniya, and Maruzen are beloved chains. Many bookstores have comfortable reading areas."},

    {type:"teach", trg:"電気屋(でんきや)", src:"electronics store", pos:"noun", gender:null,
     note:"Electricity + shop. For appliances and gadgets.",
     example:"電気屋(でんきや)で新(あたら)しいパソコンを買(か)います。",
     exampleSrc:"I buy a new computer at the electronics store.",
     funFact:"Akihabara in Tokyo is the world's largest electronics district. Massive stores like Yodobashi Camera and Bic Camera have 8+ floors of electronics. Tax-free shopping for tourists makes these stores international destinations."},

    {type:"teach", trg:"パン屋(や)", src:"bakery", pos:"noun", gender:null,
     note:"パン (bread, from Portuguese 'pao') + 屋(や) (shop).",
     example:"毎朝(まいあさ)パン屋(や)でパンを買(か)います。",
     exampleSrc:"I buy bread at the bakery every morning.",
     funFact:"Japanese bakeries serve uniquely Japanese breads: メロンパン (melon bread), あんパン (red bean bread), カレーパン (curry bread). These are Japanese inventions that blend Western baking with Japanese flavors."},

    {type:"teach", trg:"花屋(はなや)", src:"flower shop / florist", pos:"noun", gender:null,
     note:"Flower + shop.",
     example:"花屋(はなや)できれいなバラを買(か)いました。",
     exampleSrc:"I bought beautiful roses at the flower shop.",
     funFact:"Flower shops in Japan do brisk business because flowers are given for many occasions: hospital visits, funerals, temple offerings, and home decoration. The art of flower arrangement (生け花 ikebana) keeps fresh flowers in demand."},

    {type:"teach", trg:"肉屋(にくや)", src:"butcher shop", pos:"noun", gender:null,
     note:"Meat + shop. Traditional meat specialty stores.",
     example:"肉屋(にくや)で和牛(わぎゅう)を買(か)います。",
     exampleSrc:"I buy wagyu beef at the butcher shop.",
     funFact:"Traditional butcher shops (肉屋) also sell prepared items like コロッケ (croquettes) and メンチカツ (minced meat cutlets). These fried snacks from the butcher are beloved comfort food that supermarkets try but cannot replicate."},

    {type:"teach", trg:"現金(げんきん)", src:"cash", pos:"noun", gender:null,
     note:"Present + gold. Physical money.",
     example:"現金(げんきん)でお願(ねが)いします。",
     exampleSrc:"Cash, please.",
     funFact:"Japan remained a heavily cash-based society until recently. Bills are kept in pristine condition. The 10,000 yen note (about $70) is commonly used without anyone worrying about counterfeits because Japanese money is extremely hard to forge."},

    {type:"teach", trg:"クレジットカード", src:"credit card", pos:"noun", gender:null,
     note:"From English. Often shortened to just カード.",
     example:"クレジットカードで支払(しはら)います。",
     exampleSrc:"I pay by credit card.",
     funFact:"Credit card acceptance has grown rapidly but many small restaurants and shops remain cash-only. The phrase 'kado wa tsukaemasu ka?' (Can I use a card?) is essential for travelers in Japan."},

    {type:"teach", trg:"お釣(つ)り", src:"change (money returned)", pos:"noun", gender:null,
     note:"From 釣(つ)り (fishing/change). The money you get back.",
     example:"お釣(つ)りはけっこうです。",
     exampleSrc:"Keep the change.",
     funFact:"In Japan, change is always placed on a small tray (お釣りトレー), never handed directly to the customer. Cashiers count change back to you carefully. This precision and politeness extends even to the smallest transactions."},

    {type:"teach", trg:"レシート", src:"receipt", pos:"noun", gender:null,
     note:"From English 'receipt.' Given automatically at most stores.",
     example:"レシートをください。",
     exampleSrc:"Please give me a receipt.",
     funFact:"Japanese receipts are incredibly detailed, listing every item with tax breakdown. Convenience store cashiers always ask 'reshiito wa yoroshii desu ka?' (Is the receipt okay/do you want it?). Declining is common."},

    {type:"teach", trg:"税込(ぜいこ)み", src:"tax included (price)", pos:"noun", gender:null,
     note:"Tax + included. The total price with tax.",
     example:"この値段(ねだん)は税込(ぜいこ)みですか？",
     exampleSrc:"Is this price tax included?",
     funFact:"Japan's consumption tax is 10% (8% for food). Prices are sometimes shown without tax (税抜(ぜいぬ)き) which surprises shoppers at the register. Checking 税込/税抜 on price tags saves confusion."},

    {type:"teach", trg:"ポイントカード", src:"points card / loyalty card", pos:"noun", gender:null,
     note:"From English. Collect points for discounts at chain stores.",
     example:"ポイントカードはお持(も)ちですか？",
     exampleSrc:"Do you have a points card?",
     funFact:"Point cards are ubiquitous in Japan. T-Point, Rakuten Point, and d-Point are accepted at thousands of stores. Cashiers ask about point cards at every single transaction. Some Japanese carry 10+ point cards."},

    {type:"mc", q:"What is a コンビニ?",
     opts:["convenience store","supermarket","department store","pharmacy"], ans:"convenience store",
     hint:"A 24/7 shop found on nearly every corner in Japan."},

    {type:"fb", s:"{1}で支払(しはら)います。", a:"クレジットカード",
     sSrc:"I pay by credit card.",
     opts:["クレジットカード","現金(げんきん)","ポイントカード","レシート"],
     hint:"A plastic card used for electronic payment instead of cash."},

    {type:"match", pairs:[
      {trg:"薬屋(くすりや)", src:"pharmacy"},
      {trg:"本屋(ほんや)", src:"bookstore"},
      {trg:"パン屋(や)", src:"bakery"},
      {trg:"肉屋(にくや)", src:"butcher shop"}
    ]},

    {type:"mc", q:"What does 税込(ぜいこ)み mean?",
     opts:["free","tax included","tax excluded","discounted"], ans:"tax included",
     hint:"The total price that already has the consumption t... built in."},

    {type:"fb", s:"{1}はけっこうです。", a:"お釣(つ)り",
     sSrc:"Keep the change.",
     opts:["お釣(つ)り","レシート","ポイント","カード"],
     hint:"The coins you receive back after paying more than the total."},

    {type:"mc", q:"The suffix -屋(や) in store names means:",
     opts:["thing","place","shop / store","person"], ans:"shop / store",
     hint:"Added to a product name to create the s... that sells it."},

    {type:"mc", q:"What does ポイントカード mean?",
     opts:["credit card","ID card","gift card","loyalty/points card"], ans:"loyalty/points card",
     hint:"Collect stamps or digital p... for rewards at chain stores."}
  ,{type:"match",pairs:[{trg:"コンビニ",src:"convenience store"},{trg:"スーパー",src:"supermarket"},{trg:"電気屋(でんきや)",src:"electronics store"},{trg:"花屋(はなや)",src:"flower shop / florist"},{trg:"現金(げんきん)",src:"cash"},{trg:"レシート",src:"receipt"}]},{type:"match",pairs:[{trg:"税込(ぜいこ)み",src:"tax included (price)"},{trg:"ポイントカード",src:"points card / loyalty card"}]}]
};
export default BATCH4_L_1;
