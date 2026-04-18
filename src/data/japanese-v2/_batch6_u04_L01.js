// Batch 6 – Unit 04 (A1.2 How Much Is It?): At the Convenience Store
const BATCH6_L1 = {
  id:"jav2_u04l_b6_1", title:"コンビニ", icon:"🏪", xp:15, board:true,
  steps:[
    {type:"intro", title:"コンビニ",
     desc:"Convenience stores (コンビニ) are everywhere in Japan and offer far more than snacks. Learn the vocabulary for buying items, asking about prices, and handling everyday transactions.",
     goals:["Navigate a convenience store transaction","Use counter words for small objects","Handle basic payment vocabulary"]},

    {type:"teach", trg:"コンビニ", src:"convenience store", pos:"noun", gender:null,
     note:"Short for コンビニエンスストア. Japan's three major chains: セブンイレブン, ローソン, ファミリーマート.",
     example:"A: コンビニでおにぎりを買(か)いました。\nB: 何味(なにあじ)ですか？",
     exampleSrc:"A: I bought rice balls at the convenience store.\nB: What flavor?",
     funFact:"Japan has over 55,000 convenience stores. They sell fresh food, pay bills, print documents, ship packages, and even offer ATM services. Many are open 24 hours. The quality of コンビニ food rivals restaurants in other countries."},

    {type:"teach", trg:"おにぎり", src:"rice ball", pos:"noun", gender:null,
     note:"Triangle-shaped rice with filling, wrapped in seaweed.\nAlso called おむすび in some regions.",
     example:"A: おにぎりはいくつありますか？\nB: 三(みっ)つあります。梅(うめ)と鮭(さけ)とツナです。",
     exampleSrc:"A: How many rice balls are there?\nB: There are three. Plum, salmon, and tuna.",
     funFact:"おにぎり comes from 握(にぎ)る (to grip/squeeze). The triangular shape fits perfectly in one hand. Fillings range from traditional (梅干(うめぼ)し, plum; 鮭(さけ), salmon) to creative (マヨネーズ, エビチリ). Convenience store onigiri sales exceed 5 billion per year in Japan."},

    {type:"teach", trg:"お弁当(べんとう)", src:"boxed lunch / bento", pos:"noun", gender:null,
     note:"Kanji: お弁当. Homemade or store-bought. The お is honorific.\n弁当箱(べんとうばこ) = bento box.",
     example:"A: お弁当(べんとう)を一(ひと)つお願(ねが)いします。\nB: 温(あたた)めますか？",
     exampleSrc:"A: One bento, please.\nB: Shall I heat it up?",
     funFact:"The word 弁当(べんとう) dates to the 16th century. Japanese bento culture is an art form: mothers make charaben (character bentos) for children, featuring anime faces made from rice and vegetables. Convenience store bentos are a budget-friendly meal option."},

    {type:"teach", trg:"温(あたた)める", src:"to heat up / to warm", pos:"verb", gender:null,
     note:"Group 2 verb. 温(あたた)めますか？ = Shall I heat it up?\nThe most common convenience store question.",
     example:"A: 温(あたた)めますか？\nB: はい、お願(ねが)いします。",
     exampleSrc:"A: Shall I heat it up?\nB: Yes, please.",
     funFact:"Every convenience store clerk asks 温(あたた)めますか when you buy a bento or onigiri. The microwave is behind the counter. This small service is part of what makes Japanese convenience stores famous for hospitality."},

    {type:"teach", trg:"袋(ふくろ)", src:"bag / sack", pos:"noun", gender:null,
     note:"Kanji: 袋. ビニール袋(ぶくろ) = plastic bag.\n紙袋(かみぶくろ) = paper bag.",
     example:"A: 袋(ふくろ)はいりますか？\nB: いいえ、大丈夫(だいじょうぶ)です。",
     exampleSrc:"A: Do you need a bag?\nB: No, I am fine.",
     funFact:"Since July 2020, Japan charges for plastic bags (有料化(ゆうりょうか), making them paid). Convenience stores now ask 袋(ふくろ)はいりますか？ or レジ袋(ぶくろ)はご利用(りよう)ですか？ Many people carry エコバッグ (reusable bags)."},

    {type:"mc", q:"温(あたた)めますか is asked when:", opts:["The clerk offers to microwave your food","You want a bag","You are paying with card","You ask for directions"], ans:"The clerk offers to microwave your food",
     hint:"This question is about warming f..., typically asked at convenience store counters."},

    {type:"teach", trg:"レジ", src:"cash register / checkout", pos:"noun", gender:null,
     note:"From English 'register.' レジに並(なら)ぶ = to line up at the register.\nセルフレジ = self-checkout.",
     example:"A: レジはあちらです。\nB: ありがとうございます。",
     exampleSrc:"A: The register is over there.\nB: Thank you.",
     funFact:"Japanese convenience stores pioneered self-checkout (セルフレジ) with touchscreen interfaces. Many now accept cashless payment: Suica, PayPay, LINE Pay. The phrase レジ袋(ぶくろ) specifically means 'checkout bag.'"},

    {type:"teach", trg:"お釣(つ)り", src:"change (money returned)", pos:"noun", gender:null,
     note:"From 釣(つ)り (fishing out/returning). お釣(つ)りはいりません = keep the change.\nBut tipping is not done in Japan.",
     example:"A: 千円(せんえん)からお願(ねが)いします。\nB: お釣(つ)りは三百円(さんびゃくえん)です。",
     exampleSrc:"A: From 1000 yen, please.\nB: Your change is 300 yen.",
     funFact:"Japanese cashiers always count your change aloud and place it on a small tray (お釣(つ)りトレー). Handing money directly is considered slightly impolite. Tipping does not exist in Japan and can actually cause confusion."},

    {type:"teach", trg:"一個(いっこ)", src:"one (small object)", pos:"num", gender:null,
     note:"Counter: 個(こ) for small round or compact items.\n二個(にこ), 三個(さんこ), 四個(よんこ)...",
     example:"A: おにぎりを一個(いっこ)ください。\nB: はい、150円(えん)です。",
     exampleSrc:"A: One rice ball, please.\nB: That is 150 yen.",
     funFact:"個(こ) is the most general counter for small objects: apples, eggs, onigiri, erasers. When in doubt about which counter to use, 個(こ) is often safe. It replaces the native counting system (一(ひと)つ, 二(ふた)つ) in casual speech for items under ten."},

    {type:"teach", trg:"お菓子(かし)", src:"sweets / snacks", pos:"noun", gender:null,
     note:"Kanji: お菓子. Covers both traditional sweets and modern snacks.\nお菓子(かし)売(う)り場(ば) = confectionery section.",
     example:"A: 日本(にほん)のお菓子(かし)はおいしいですね。\nB: そうですね。ポッキーが好(す)きです。",
     exampleSrc:"A: Japanese snacks are delicious, aren't they?\nB: Yes. I like Pocky.",
     funFact:"Japan's snack culture is legendary. Kit Kat alone has had over 400 flavors in Japan, including matcha, sake, and sweet potato. The name Kit Kat sounds like きっと勝(か)つ (you will surely win), making it a good luck gift for exam students."},

    {type:"teach", trg:"飲(の)み物(もの)", src:"drink / beverage", pos:"noun", gender:null,
     note:"飲(の)み (drinking) + 物(もの) (thing). 飲(の)み物(もの)を買(か)う = to buy a drink.\nCold drinks: 冷(つめ)たい飲(の)み物(もの).",
     example:"A: 飲(の)み物(もの)は何(なに)がいいですか？\nB: お茶(ちゃ)をお願(ねが)いします。",
     exampleSrc:"A: What would you like to drink?\nB: Tea, please.",
     funFact:"Japanese convenience stores have an entire wall of drinks, from green tea to energy drinks. Hot drinks (温(あたた)かい飲(の)み物(もの)) are kept in heated cabinets during winter. Vending machines (自動販売機(じどうはんばいき)) on every corner sell drinks too."},

    {type:"fb", s:"おにぎりを{1}ください。\n(One rice ball, please.)", a:"一個(いっこ)", opts:["一個(いっこ)","一本(いっぽん)","一枚(いちまい)","一杯(いっぱい)"], sSrc:"One rice ball, please.",
     hint:"Rice balls are small round objects. Use the counter for compact items."},

    {type:"teach", trg:"握(にぎ)る", src:"to grip / to squeeze / to mold", pos:"verb", gender:null,
     note:"Group 1 verb. おにぎりを握(にぎ)る = to shape a rice ball.\n手(て)を握(にぎ)る = to hold hands.",
     example:"A: おにぎりを自分(じぶん)で握(にぎ)りました。\nB: 上手(じょうず)ですね！丸(まる)い形(かたち)ですか？",
     exampleSrc:"A: I shaped the rice ball myself.\nB: How skillful! Is it round?",
     funFact:"握(にぎ)る is the verb behind おにぎり. 握(にぎ)り寿司(ずし) (hand-pressed sushi) also comes from this verb. The act of squeezing rice is an art: too tight and it is hard, too loose and it falls apart. 握(にぎ)る also means to grasp power or a handle."},

    {type:"teach", trg:"ポイントカード", src:"point card / loyalty card", pos:"noun", gender:null,
     note:"Katakana loanword. Tポイント, Pontaカード, dポイント are major systems.\nポイントをためる = to collect points.",
     example:"A: ポイントカードはお持(も)ちですか？\nB: はい、Tポイントカードでお願(ねが)いします。",
     exampleSrc:"A: Do you have a point card?\nB: Yes, T-Point card, please.",
     funFact:"Japan runs on loyalty points. Almost every store has a point system. Convenience stores ask ポイントカードはお持(も)ちですか (do you have a point card?) at every transaction. Points can be used like cash at partnered stores."},

    {type:"mc", q:"袋(ふくろ)はいりますか means:", opts:["Do you need a bag?","Do you have a point card?","Shall I heat it up?","How much is it?"], ans:"Do you need a bag?",
     hint:"袋(ふくろ) means b.... This yes/no question asks if you want one."},

    {type:"match", pairs:[
      {trg:"コンビニ", src:"convenience store"},
      {trg:"おにぎり", src:"rice ball"},
      {trg:"お釣(つ)り", src:"change (money)"},
      {trg:"レジ", src:"cash register"},
      {trg:"袋(ふくろ)", src:"bag"}
    ]},

    {type:"fb", s:"ポイントカードは{1}ですか？\n(Do you have a point card?)", a:"お持(も)ち", opts:["お持(も)ち","いくら","なに","どこ"], sSrc:"Do you have a point card?",
     hint:"The polite form of 持(も)つ (to have/hold). Asking if someone possesses something."},

    {type:"mc", q:"What does 握(にぎ)る mean?", opts:["To grip or squeeze","To cut","To pour","To heat"], ans:"To grip or squeeze",
     hint:"This verb is the origin of the word おにぎり (rice ball)."}
  ,{type:"match",pairs:[{trg:"お弁当(べんとう)",src:"boxed lunch / bento"},{trg:"温(あたた)める",src:"to heat up / to warm"},{trg:"お菓子(かし)",src:"sweets / snacks"},{trg:"飲(の)み物(もの)",src:"drink / beverage"},{trg:"握(にぎ)る",src:"to grip / to squeeze / to mold"},{trg:"ポイントカード",src:"point card / loyalty card"}]}]
};
export default BATCH6_L1;
