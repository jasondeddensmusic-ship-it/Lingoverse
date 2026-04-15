// Unit 05 Expansion L04 — Ordering at a Restaurant
const LESSON_4 = {
  id:"jav2_u5l4", title:"レストランで", icon:"🍽️", xp:15, board:true,
  steps:[
    {type:"intro", title:"レストランで",
     desc:"Learn to order food at a Japanese restaurant. From entering to paying the bill, these phrases cover the entire dining experience.",
     goals:["Enter and be seated at a restaurant","Order food and drinks confidently","Ask for the bill and pay"]},

    {type:"teach", trg:"メニュー", src:"menu", pos:"noun", gender:null,
     note:"From French/English 'menu.' Written in katakana.\nAlso: おしながき (oshinagaki, traditional Japanese).",
     example:"A: メニューをみせてください。\nB: はい、こちらです。",
     exampleSrc:"A: Please show me the menu.\nB: Yes, here it is.",
     funFact:"Japanese restaurant menus often have realistic food photos or plastic food models (shokuhin sampuru) in the window. These incredibly lifelike models were invented in 1932. They help foreign tourists and children order without reading Japanese."},

    {type:"teach", trg:"ちゅうもん", src:"order (food/drink)", pos:"noun", gender:null,
     note:"Used as a noun and verb (ちゅうもんする = to order).\nKanji: 注文.",
     example:"A: ごちゅうもんはおきまりですか？\nB: はい、ラーメンをおねがいします。",
     exampleSrc:"A: Are you ready to order?\nB: Yes, ramen please.",
     funFact:"注 (pour) + 文 (writing/pattern). An order is literally 'pouring out' your written request. In many Japanese restaurants, you press a button at your table to call the server, or order via tablet. The phrase 'sumimasen' also works to get attention."},

    {type:"teach", trg:"おすすめ", src:"recommendation", pos:"noun", gender:null,
     note:"The chef's or staff's recommendation. Very useful when choosing is hard.\nKanji: お勧め.",
     example:"A: おすすめはなんですか？\nB: きょうのおすすめはやきざかなです。",
     exampleSrc:"A: What do you recommend?\nB: Today's recommendation is grilled fish.",
     funFact:"Asking 'osusume wa nan desu ka?' is one of the most useful restaurant phrases. Japanese chefs take pride in their daily specials and seasonal offerings. Trusting the chef's recommendation often leads to the best meal possible."},

    {type:"teach", trg:"おかわり", src:"refill / second helping", pos:"noun", gender:null,
     note:"Pattern: ごはんのおかわりをおねがいします (another serving of rice, please).",
     example:"A: おかわりいかがですか？\nB: はい、おねがいします。",
     exampleSrc:"A: Would you like a refill?\nB: Yes, please.",
     funFact:"Many Japanese restaurants offer free gohan (rice) and miso soup refills. Just say 'okawari kudasai.' At ramen shops, you can order kaedama (extra noodles added to your remaining broth). Free tea and water refills are standard everywhere."},

    {type:"mc", q:"おすすめはなんですか means:", opts:["How much is it?","What do you recommend?","What is this?","Is it delicious?"], ans:"What do you recommend?",
     hint:"Osusume is the chef's or staff's recommendation."},

    {type:"teach", trg:"べつべつ", src:"separately (split bill)", pos:"adv", gender:null,
     note:"Used when each person pays their own share. Very common in Japan.\nKanji: 別々.",
     example:"A: おかんじょうはべつべつでおねがいします。\nB: はい、かしこまりました。",
     exampleSrc:"A: We'd like to pay separately.\nB: Yes, certainly.",
     funFact:"Going Dutch (warikan = splitting equally) is the norm in Japan among friends and colleagues. Betsu-betsu means each person pays only for what they ordered. The cultural default is splitting, unlike many Western cultures where one person often treats."},

    {type:"teach", trg:"おかんじょう", src:"the bill / check", pos:"noun", gender:null,
     note:"Polite word for the bill. Also: おあいそ (less polite) or チェック (chekku).\nKanji: お勘定.",
     example:"A: おかんじょうをおねがいします。\nB: はい、にせんえんです。",
     exampleSrc:"A: The bill, please.\nB: Yes, it's 2,000 yen.",
     funFact:"In Japan, you usually pay at the register near the exit, not at the table. Tipping does not exist and is considered rude. The price on the menu is what you pay (tax included at most places). This no-tipping culture shocks many Western visitors."},

    {type:"teach", trg:"おいしかったです", src:"it was delicious", pos:"adj", gender:null,
     note:"Past tense of oishii. The standard compliment after eating. Very important to say.",
     example:"A: おいしかったです。ごちそうさまでした。\nB: ありがとうございます！またどうぞ。",
     exampleSrc:"A: It was delicious. Thank you for the meal.\nB: Thank you! Please come again.",
     funFact:"Saying oishikatta desu and gochisousama deshita when leaving is expected and deeply appreciated. Japanese restaurant staff will often come to the door to bow and say 'mata okoshi kudasai' (please come again). Leaving without a compliment feels cold."},

    {type:"teach", trg:"いただきます", src:"bon appetit / I humbly receive", pos:"intj", gender:null,
     note:"Said before eating. Gives thanks for the food.\nKanji: いただきます.",
     example:"A: いただきます！\nB: いただきます！どうぞたべてください。",
     exampleSrc:"A: Bon appetit!\nB: Bon appetit! Please eat.",
     funFact:"Itadakimasu (from itadaku, to humbly receive) thanks everyone involved: the cook, the farmer, and the life of the animal or plant. It is said with hands pressed together. Not saying it before eating is considered very rude."},

    {type:"fb", s:"たべるまえに、___と言います。",
     a:["いただきます"],
     opts:["いただきます","ごちそうさま","おいしい","ありがとう"],
     hint:"The phrase said before every meal, hands pressed together, giving thanks.",
     sSrc:"Before eating, you say {1}."},

    {type:"teach", trg:"ごちそうさまでした", src:"thank you for the meal (after eating)", pos:"intj", gender:null,
     note:"Said after finishing a meal. Complements いただきます.\nKanji: ご馳走様でした.",
     example:"A: ごちそうさまでした。おいしかったです。\nB: ありがとうございます。",
     exampleSrc:"A: Thank you for the meal. It was delicious.\nB: Thank you.",
     funFact:"馳走 originally meant 'running around' (galloping horses). It evolved to mean a feast because hosts would 'run around' preparing an elaborate meal for guests. Gochisousama acknowledges all that effort. It is said at home, at restaurants, and everywhere food is served."},

    {type:"teach", trg:"のみほうだい", src:"all-you-can-drink", pos:"noun", gender:null,
     note:"Nomi (drink) + houdai (as much as you like). Very popular in Japan.\nKanji: 飲み放題.",
     example:"A: のみほうだいはなんじかんですか？\nB: にじかんです。",
     exampleSrc:"A: How long is the all-you-can-drink?\nB: Two hours.",
     funFact:"Nomihoudai (all-you-can-drink, usually 2 hours for a flat fee) is a staple of Japanese izakaya (pub) culture. Tabehoudai (all-you-can-eat) also exists. These plans are essential for bounenkai (year-end parties) and kangeikai (welcome parties)."},

    {type:"teach", trg:"てんいん", src:"shop staff / waiter", pos:"noun", gender:null,
     note:"General word for service staff. Also: ウェイター/ウェイトレス.\nKanji: 店員.",
     example:"A: てんいんさんをよびましょう。\nB: すみません！",
     exampleSrc:"A: Let's call the waiter.\nB: Excuse me!",
     funFact:"店 (shop) + 員 (member). In Japan, you call staff by saying 'sumimasen' (excuse me), pressing a call button, or sometimes 'onegai shimasu.' Never snap fingers or wave. Staff will come to your table promptly. Service quality in Japan is legendary."},

    {type:"teach", trg:"おまちください", src:"please wait", pos:"verb", gender:null,
     note:"Polite form. You will hear this constantly in restaurants and shops.\nKanji: お待ちください.",
     example:"A: すみません、まだですか？\nB: しょうしょうおまちください。",
     exampleSrc:"A: Excuse me, is it ready yet?\nB: Please wait a moment.",
     funFact:"Shoushou omachi kudasai (please wait just a little) is the standard restaurant holding phrase. Japanese service culture abhors making customers wait. If there is any delay, staff will apologize profusely and update you. Wait times are taken very seriously."},

    {type:"mc", q:"ごちそうさまでした literally relates to:", opts:["Delicious food","Running around to prepare food","A religious blessing","Paying the bill"], ans:"Running around to prepare food",
     hint:"The kanji 馳走 originally meant 'galloping/running around' for meal preparation."},

    {type:"match", pairs:[
      {trg:"メニュー", src:"menu"},
      {trg:"ちゅうもん", src:"order"},
      {trg:"おすすめ", src:"recommendation"},
      {trg:"おかわり", src:"refill"}
    ]},

    {type:"match", pairs:[
      {trg:"いただきます", src:"Before eating"},
      {trg:"ごちそうさまでした", src:"After eating"},
      {trg:"おいしかったです", src:"It was delicious"},
      {trg:"おかんじょう", src:"The bill"}
    ]},

    {type:"fb", s:"___をおねがいします。(The bill, please.)",
     a:["おかんじょう"],
     opts:["おかんじょう","おかわり","メニュー","おすすめ"],
     hint:"The polite word for the restaurant bill or check.",
     sSrc:"The bill, please."},

    {type:"mc", q:"Tipping in Japan is:", opts:["Expected at 15-20%","Optional but appreciated","Not practiced and considered rude","Only for excellent service"], ans:"Not practiced and considered rude",
     hint:"Japanese service culture includes excellent service in the price."},

    {type:"mc", q:"のみほうだい means:", opts:["No drinking allowed","All-you-can-drink","Drink menu","Last call"], ans:"All-you-can-drink",
     hint:"Nomi (drink) + houdai (as much as you like) = unlimited drinks for a flat fee."},
  ]
};
export default LESSON_4;
