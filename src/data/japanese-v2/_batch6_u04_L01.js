// Batch 6 – Unit 04 (A1.2 How Much Is It?): At the Convenience Store
const BATCH6_L1 = {
  id:"jav2_u04l_b6_1", title:"コンビニ", icon:"🏪", xp:15, board:true,
  steps:[
    {type:"intro", title:"コンビニ",
     desc:"Convenience stores (コンビニ) are everywhere in Japan and offer far more than snacks. Learn the vocabulary for buying items, asking about prices, and handling everyday transactions.",
     goals:["Navigate a convenience store transaction","Use counter words for small objects","Handle basic payment vocabulary"]},

    {type:"teach", trg:"コンビニ", src:"convenience store", pos:"noun", gender:null,
     note:"Short for コンビニエンスストア. Japan's three major chains: セブンイレブン, ローソン, ファミリーマート.",
     example:"A: コンビニでおにぎりをかいました。\nB: なにあじですか？",
     exampleSrc:"A: I bought rice balls at the convenience store.\nB: What flavor?",
     funFact:"Japan has over 55,000 convenience stores. They sell fresh food, pay bills, print documents, ship packages, and even offer ATM services. Many are open 24 hours. The quality of コンビニ food rivals restaurants in other countries."},

    {type:"teach", trg:"おにぎり", src:"rice ball", pos:"noun", gender:null,
     note:"Triangle-shaped rice with filling, wrapped in seaweed.\nAlso called おむすび in some regions.",
     example:"A: おにぎりはいくつありますか？\nB: みっつあります。うめとさけとツナです。",
     exampleSrc:"A: How many rice balls are there?\nB: There are three. Plum, salmon, and tuna.",
     funFact:"おにぎり comes from にぎる (to grip/squeeze). The triangular shape fits perfectly in one hand. Fillings range from traditional (うめぼし, plum; さけ, salmon) to creative (マヨネーズ, エビチリ). Convenience store onigiri sales exceed 5 billion per year in Japan."},

    {type:"teach", trg:"おべんとう", src:"boxed lunch / bento", pos:"noun", gender:null,
     note:"Kanji: お弁当. Homemade or store-bought. The お is honorific.\nべんとうばこ = bento box.",
     example:"A: おべんとうをひとつおねがいします。\nB: あたためますか？",
     exampleSrc:"A: One bento, please.\nB: Shall I heat it up?",
     funFact:"The word べんとう dates to the 16th century. Japanese bento culture is an art form: mothers make charaben (character bentos) for children, featuring anime faces made from rice and vegetables. Convenience store bentos are a budget-friendly meal option."},

    {type:"teach", trg:"あたためる", src:"to heat up / to warm", pos:"verb", gender:null,
     note:"Group 2 verb. あたためますか？ = Shall I heat it up?\nThe most common convenience store question.",
     example:"A: あたためますか？\nB: はい、おねがいします。",
     exampleSrc:"A: Shall I heat it up?\nB: Yes, please.",
     funFact:"Every convenience store clerk asks あたためますか when you buy a bento or onigiri. The microwave is behind the counter. This small service is part of what makes Japanese convenience stores famous for hospitality."},

    {type:"teach", trg:"ふくろ", src:"bag / sack", pos:"noun", gender:null,
     note:"Kanji: 袋. ビニールぶくろ = plastic bag.\nかみぶくろ = paper bag.",
     example:"A: ふくろはいりますか？\nB: いいえ、だいじょうぶです。",
     exampleSrc:"A: Do you need a bag?\nB: No, I am fine.",
     funFact:"Since July 2020, Japan charges for plastic bags (ゆうりょうか, making them paid). Convenience stores now ask ふくろはいりますか？ or レジぶくろはごりようですか？ Many people carry エコバッグ (reusable bags)."},

    {type:"mc", q:"あたためますか is asked when:", opts:["The clerk offers to microwave your food","You want a bag","You are paying with card","You ask for directions"], ans:"The clerk offers to microwave your food",
     hint:"This question is about warming f..., typically asked at convenience store counters."},

    {type:"teach", trg:"レジ", src:"cash register / checkout", pos:"noun", gender:null,
     note:"From English 'register.' レジにならぶ = to line up at the register.\nセルフレジ = self-checkout.",
     example:"A: レジはあちらです。\nB: ありがとうございます。",
     exampleSrc:"A: The register is over there.\nB: Thank you.",
     funFact:"Japanese convenience stores pioneered self-checkout (セルフレジ) with touchscreen interfaces. Many now accept cashless payment: Suica, PayPay, LINE Pay. The phrase レジぶくろ specifically means 'checkout bag.'"},

    {type:"teach", trg:"おつり", src:"change (money returned)", pos:"noun", gender:null,
     note:"From つり (fishing out/returning). おつりはいりません = keep the change.\nBut tipping is not done in Japan.",
     example:"A: せんえんからおねがいします。\nB: おつりはさんびゃくえんです。",
     exampleSrc:"A: From 1000 yen, please.\nB: Your change is 300 yen.",
     funFact:"Japanese cashiers always count your change aloud and place it on a small tray (おつりトレー). Handing money directly is considered slightly impolite. Tipping does not exist in Japan and can actually cause confusion."},

    {type:"teach", trg:"いっこ", src:"one (small object)", pos:"num", gender:null,
     note:"Counter: こ for small round or compact items.\nにこ, さんこ, よんこ...",
     example:"A: おにぎりをいっこください。\nB: はい、ひゃくごじゅうえんです。",
     exampleSrc:"A: One rice ball, please.\nB: That is 150 yen.",
     funFact:"こ (個) is the most general counter for small objects: apples, eggs, onigiri, erasers. When in doubt about which counter to use, こ is often safe. It replaces the native counting system (ひとつ, ふたつ) in casual speech for items under ten."},

    {type:"teach", trg:"おかし", src:"sweets / snacks", pos:"noun", gender:null,
     note:"Kanji: お菓子. Covers both traditional sweets and modern snacks.\nおかしうりば = confectionery section.",
     example:"A: にほんのおかしはおいしいですね。\nB: そうですね。ポッキーがすきです。",
     exampleSrc:"A: Japanese snacks are delicious, aren't they?\nB: Yes. I like Pocky.",
     funFact:"Japan's snack culture is legendary. Kit Kat alone has had over 400 flavors in Japan, including matcha, sake, and sweet potato. The name Kit Kat sounds like きっとかつ (you will surely win), making it a good luck gift for exam students."},

    {type:"teach", trg:"のみもの", src:"drink / beverage", pos:"noun", gender:null,
     note:"のみ (drinking) + もの (thing). のみものをかう = to buy a drink.\nCold drinks: つめたいのみもの.",
     example:"A: のみものはなにがいいですか？\nB: おちゃをおねがいします。",
     exampleSrc:"A: What would you like to drink?\nB: Tea, please.",
     funFact:"Japanese convenience stores have an entire wall of drinks, from green tea to energy drinks. Hot drinks (あたたかいのみもの) are kept in heated cabinets during winter. Vending machines (じどうはんばいき) on every corner sell drinks too."},

    {type:"fb", s:"おにぎりを{1}ください。\n(One rice ball, please.)", a:"いっこ", opts:["いっこ","いっぽん","いちまい","いっぱい"], sSrc:"One rice ball, please.",
     hint:"Rice balls are small round objects. Use the counter for compact items."},

    {type:"teach", trg:"にぎる", src:"to grip / to squeeze / to mold", pos:"verb", gender:null,
     note:"Group 1 verb. おにぎりをにぎる = to shape a rice ball.\nてをにぎる = to hold hands.",
     example:"A: おにぎりをじぶんでにぎりました。\nB: じょうずですね！まるいかたちですか？",
     exampleSrc:"A: I shaped the rice ball myself.\nB: How skillful! Is it round?",
     funFact:"にぎる is the verb behind おにぎり. にぎりずし (hand-pressed sushi) also comes from this verb. The act of squeezing rice is an art: too tight and it is hard, too loose and it falls apart. にぎる also means to grasp power or a handle."},

    {type:"teach", trg:"ポイントカード", src:"point card / loyalty card", pos:"noun", gender:null,
     note:"Katakana loanword. Tポイント, Pontaカード, dポイント are major systems.\nポイントをためる = to collect points.",
     example:"A: ポイントカードはおもちですか？\nB: はい、Tポイントカードでおねがいします。",
     exampleSrc:"A: Do you have a point card?\nB: Yes, T-Point card, please.",
     funFact:"Japan runs on loyalty points. Almost every store has a point system. Convenience stores ask ポイントカードはおもちですか (do you have a point card?) at every transaction. Points can be used like cash at partnered stores."},

    {type:"mc", q:"ふくろはいりますか means:", opts:["Do you need a bag?","Do you have a point card?","Shall I heat it up?","How much is it?"], ans:"Do you need a bag?",
     hint:"ふくろ means b.... This yes/no question asks if you want one."},

    {type:"match", pairs:[
      {trg:"コンビニ", src:"convenience store"},
      {trg:"おにぎり", src:"rice ball"},
      {trg:"おつり", src:"change (money)"},
      {trg:"レジ", src:"cash register"},
      {trg:"ふくろ", src:"bag"}
    ]},

    {type:"fb", s:"ポイントカードは{1}ですか？\n(Do you have a point card?)", a:"おもち", opts:["おもち","いくら","なに","どこ"], sSrc:"Do you have a point card?",
     hint:"The polite form of もつ (to have/hold). Asking if someone possesses something."},

    {type:"mc", q:"What does にぎる mean?", opts:["To grip or squeeze","To cut","To pour","To heat"], ans:"To grip or squeeze",
     hint:"This verb is the origin of the word おにぎり (rice ball)."}
  ]
};
export default BATCH6_L1;
