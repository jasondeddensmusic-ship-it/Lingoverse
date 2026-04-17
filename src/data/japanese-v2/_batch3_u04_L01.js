// Unit 04 Batch3 L01. Store Types, Payment & Shopping Expressions
// New vocab: みせ, スーパー, コンビニ, デパート, ほんや, くすりや,
// げんきん, カード, おつり, レシート, しめて, いらっしゃいませ, またきてください
// All absent from unit-04.js and _temp_u04 files (which cover adjectives).
const BATCH3_L_1 = {
  id:"jav2_u4l_b3_1", title:"店(みせ)とお買(か)い物(もの)", icon:"🏪", xp:15, board:true,
  steps:[
    {type:"intro", title:"店(みせ)とお買(か)い物(もの)",
     desc:"Learn the names of different types of stores and the language of shopping transactions. Japan has a rich convenience culture, and knowing store vocabulary opens up daily life.",
     goals:["Name six types of shops in Japanese","Handle payment and change expressions","Understand what staff say to you in Japanese stores"]},

    {type:"teach", trg:"店(みせ)", src:"shop / store", pos:"noun", gender:null,
     note:"General word for any shop or store. Can combine with items: パン屋(や) (bread shop).\nKanji: 店.",
     example:"A: この店(みせ)は何時(なんじ)に開(あ)きますか？\nB: 九時(くじ)に開(あ)きます。",
     exampleSrc:"A: What time does this shop open?\nB: It opens at nine.",
     funFact:"店 (mise) appears in hundreds of compound words. Add ya to almost any product for a shop name: honya (書店/本屋, bookstore), kusuriya (薬屋, pharmacy), sakana-ya (魚屋, fishmonger). This ya-suffix pattern is one of the most productive in Japanese."},

    {type:"teach", trg:"スーパー", src:"supermarket", pos:"noun", gender:null,
     note:"Shortened from スーパーマーケット (supamaaketto). Where most Japanese shop for food.",
     example:"A: スーパーへ行(い)きます。何(なに)かほしいですか？\nB: 牛乳(ぎゅうにゅう)を買(か)ってきてください。",
     exampleSrc:"A: I'm going to the supermarket. Do you want anything?\nB: Please pick up some milk.",
     funFact:"Japanese supermarkets are famous for freshness and presentation. Fruits are polished and displayed like jewels. Fish is laid out on ice in perfect rows. Many supermarkets have prepared food sections (soouzai) selling restaurant-quality meals at affordable prices."},

    {type:"teach", trg:"コンビニ", src:"convenience store", pos:"noun", gender:null,
     note:"Shortened from コンビニエンスストア. Japan's 24-hour lifeline.\nAbout 55,000 nationwide.",
     example:"A: コンビニでコーヒーを買(か)いました。\nB: いいですね。どこのコンビニ？",
     exampleSrc:"A: I bought coffee at a convenience store.\nB: Nice. Which one?",
     funFact:"Japanese konbini are unlike any convenience store in the world. You can pay bills, send packages, print documents, buy hot meals, apply for government services, and get bank cash. Seven-Eleven Japan has its own premium food development team of 70 people."},

    {type:"teach", trg:"デパート", src:"department store", pos:"noun", gender:null,
     note:"Shortened from デパートメントストア. Famous for quality, food halls, and service.",
     example:"A: デパートでプレゼントを買(か)います。\nB: 何(なに)がいいですか？",
     exampleSrc:"A: I will buy a present at the department store.\nB: What would be good?",
     funFact:"Japanese department stores (depato) are temples of retail. The basement food hall (depachika = depa + chika, underground) alone is worth visiting. Traditional depato have roof gardens, art galleries, and travel agencies. Staff bow as elevators open. Service here sets Japan's retail standard."},

    {type:"mc", q:"コンビニ means:", opts:["Department store","Convenience store","Supermarket","Bookstore"],
     ans:"Convenience store",
     hint:"Shortened from the katakana loanword for 'c... s....' Open 24 hours."},

    {type:"teach", trg:"本屋(ほんや)", src:"bookstore", pos:"noun", gender:null,
     note:"本(ほん) (book) + 屋(や) (shop). One of the most common shop-name patterns in Japanese.\nKanji: 本屋.",
     example:"A: 近(ちか)くに本屋(ほんや)はありますか？\nB: はい、駅(えき)のとなりにあります。",
     exampleSrc:"A: Is there a bookstore nearby?\nB: Yes, it is next to the station.",
     funFact:"Japan has about 11,000 bookstores, a massive number for a country its size. The bookstore chain Tsutaya transformed into a lifestyle brand. Japanese bookstores are famous for beautiful displays, hand-written staff recommendation cards (POP cards), and meticulous organization."},

    {type:"teach", trg:"薬屋(くすりや)", src:"pharmacy / drugstore", pos:"noun", gender:null,
     note:"薬(くすり) (medicine) + 屋(や) (shop). Also called ドラッグストア (drug store).\nKanji: 薬屋.",
     example:"A: 薬屋(くすりや)はどこにありますか？\nB: スーパーのとなりです。",
     exampleSrc:"A: Where is the pharmacy?\nB: It is next to the supermarket.",
     funFact:"Japanese drugstores (kusuriya or doragusto) sell far more than medicine. Cosmetics, snacks, household goods, and even fresh food fill the shelves. Matsumoto Kiyoshi is the largest chain. Tourist-friendly kusuriya in Akihabara and Shinjuku attract shoppers from all over Asia."},

    {type:"fb", s:"{1}で卵(たまご)を買(か)います。(I will buy eggs at the supermarket.)",
     a:"スーパー",
     opts:["スーパー","コンビニ","デパート","本屋(ほんや)"],
     hint:"The store shortened from 'supermarket' where you buy groceries.",
     sSrc:"I will buy eggs at the supermarket."},

    {type:"teach", trg:"現金(げんきん)", src:"cash", pos:"noun", gender:null,
     note:"Japan is still largely a cash society, though this is changing.\nKanji: 現金.",
     example:"A: お支払(しはら)いは現金(げんきん)でいいですか？\nB: はい、現金(げんきん)でお願(ねが)いします。",
     exampleSrc:"A: Is cash okay for payment?\nB: Yes, cash please.",
     funFact:"現 (present/actual) + 金 (gold/money). Cash is literally 'present gold.' Despite Japan's tech reputation, cash remains the most common payment. Many small restaurants and shrines are cash-only. Japanese people carry more cash daily than most nationalities."},

    {type:"teach", trg:"カード", src:"card (credit/debit)", pos:"noun", gender:null,
     note:"Short for クレジットカード (credit card). Ask before assuming the store takes cards.",
     example:"A: カードは使(つか)えますか？\nB: はい、VISA と マスターカードが使(つか)えます。",
     exampleSrc:"A: Can I use a card?\nB: Yes, Visa and Mastercard can be used.",
     funFact:"Card payment expanded rapidly in Japan after 2016, driven by government cashless promotion policies. IC card payment (Suica, Pasmo) on phones and cards is now widespread. But many rural shops and older restaurants still prefer genkin. Always check first."},

    {type:"teach", trg:"お釣(つ)り", src:"change (money returned)", pos:"noun", gender:null,
     note:"The money given back after paying. A key shopping word.\nKanji: お釣り.",
     example:"A: 千円(せんえん)を渡(わた)すと、お釣(つ)りはいくらですか？\nB: 五百円(ごひゃくえん)です。",
     exampleSrc:"A: If I give 1,000 yen, how much change?\nB: 500 yen.",
     funFact:"Otsuri comes from tsuri (fishing). The idea is that change is 'pulled back' to you. Japanese cashiers count out change meticulously and often place it in a small tray (okane tray) rather than directly in your hand, maintaining hygiene and respect."},

    {type:"mc", q:"お釣(つ)り means:", opts:["receipt","credit card","discount","change (money returned)"],
     ans:"change (money returned)",
     hint:"The m... you receive back when you pay more than the exact price."},

    {type:"teach", trg:"レシート", src:"receipt", pos:"noun", gender:null,
     note:"Loanword from English 'receipt.' Almost always offered in Japanese shops.\nWritten in katakana.",
     example:"A: レシートをください。\nB: はい、どうぞ。",
     exampleSrc:"A: Please give me the receipt.\nB: Here you go.",
     funFact:"Japanese receipts (reshiito) are incredibly detailed, often showing each item, tax breakdown, cashier number, and register ID. Many stores ask 'reshiito wa yoroshii desu ka?' (Is a receipt okay?) giving you the option to decline. Declining is fine for small purchases."},

    {type:"teach", trg:"締(し)めて", src:"total / grand total", pos:"verb", gender:null,
     note:"What a cashier says before giving you the total amount. From 締(し)める (to total up).",
     example:"A: 締(し)めて、千八百円(せんはっぴゃくえん)です。\nB: はい。",
     exampleSrc:"A: The total is 1,800 yen.\nB: Here you are.",
     funFact:"Shime (締め) means 'closing up' or 'totaling.' At restaurants, the closing dish is called shime (often ramen or rice porridge). At a bar, asking for the bill uses 'o-kanjou kudasai' rather than shime. Context determines which closing expression to use."},

    {type:"teach", trg:"いらっしゃいませ", src:"welcome (to our store)", pos:"intj", gender:null,
     note:"The greeting every customer hears upon entering a store in Japan. Not answered.",
     example:"[Entering a store]\nStaff: いらっしゃいませ！\nCustomer: [No reply needed. Just browse.]",
     exampleSrc:"Staff: Welcome!\nCustomer: (No response required — just start shopping.)",
     funFact:"Irasshaimase is the most-heard phrase in Japan. It literally means 'please be here' (humble-polite verb form of iru, to be). You hear it shouted enthusiastically in izakayas (Japanese pubs) and said gently in high-end boutiques. Foreign visitors often feel compelled to reply. No response is needed."},

    {type:"match", pairs:[
      {trg:"店(みせ)", src:"shop / store"},
      {trg:"スーパー", src:"supermarket"},
      {trg:"コンビニ", src:"convenience store"},
      {trg:"デパート", src:"department store"}
    ]},

    {type:"match", pairs:[
      {trg:"現金(げんきん)", src:"cash"},
      {trg:"カード", src:"credit / debit card"},
      {trg:"お釣(つ)り", src:"change (money)"},
      {trg:"レシート", src:"receipt"}
    ]},

    {type:"fb", s:"カードは{1}か？(Can I use a card?)",
     a:"使(つか)えます",
     opts:["使(つか)えます","あります","います","買(か)います"],
     hint:"The polite present form of 'to be able to use' (potential verb form of tsukau).",
     sSrc:"Can I use a card?"},

    {type:"mc", q:"いらっしゃいませ is said by:", opts:["The customer when entering","Store staff to greeting customers","The cashier when giving change","Both the customer and staff"],
     ans:"Store staff to greeting customers",
     hint:"This welcome phrase is directed FROM s... TO c.... No reply is expected."},
  ]
};
export default BATCH3_L_1;
