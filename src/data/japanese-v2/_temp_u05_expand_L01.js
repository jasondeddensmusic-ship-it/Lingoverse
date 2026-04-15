// Unit 05 Expansion L03 — Japanese Cuisine Vocabulary
const LESSON_3 = {
  id:"jav2_u5l3", title:"にほんりょうり", icon:"🍣", xp:15, board:true,
  steps:[
    {type:"intro", title:"にほんりょうり",
     desc:"Learn the names of iconic Japanese dishes and food types. Japan's cuisine is one of the richest in the world, with many dishes now famous globally.",
     goals:["Name popular Japanese dishes","Describe different food types and categories","Order food at a Japanese restaurant"]},

    {type:"teach", trg:"すし", src:"sushi", pos:"noun", gender:null,
     note:"Vinegared rice with toppings. Types: にぎりずし (hand-pressed), まきずし (rolled).\nKanji: 寿司.",
     example:"A: すしをたべにいきましょう。\nB: いいですね！かいてんずしはどうですか？",
     exampleSrc:"A: Let's go eat sushi.\nB: Sounds good! How about conveyor belt sushi?",
     funFact:"Sushi originally meant 'sour rice,' a preservation method from Southeast Asia. Edo-period Tokyo transformed it into the hand-pressed fast food we know today. Kaiten-zushi (revolving sushi) was invented in 1958, inspired by beer bottle factory conveyor belts."},

    {type:"teach", trg:"ラーメン", src:"ramen (noodle soup)", pos:"noun", gender:null,
     note:"Chinese-origin noodle soup adapted into a Japanese icon.\nWritten in katakana.",
     example:"A: にほんでいちばんにんきのラーメンはなんですか？\nB: とんこつラーメンがにんきです。",
     exampleSrc:"A: What is the most popular ramen in Japan?\nB: Tonkotsu ramen is popular.",
     funFact:"Ramen has become Japan's most loved comfort food. Every region has its own style: tonkotsu (Hakata), miso (Sapporo), shoyu (Tokyo), shio (Hakodate). Japan has ramen museums, ramen ranking shows, and over 35,000 ramen shops nationwide."},

    {type:"teach", trg:"うどん", src:"udon (thick wheat noodles)", pos:"noun", gender:null,
     note:"Thick, chewy wheat noodles in broth. A comfort food staple.\nKanji: うどん.",
     example:"A: うどんとそば、どちらがすきですか？\nB: うどんがすきです。",
     exampleSrc:"A: Which do you prefer, udon or soba?\nB: I like udon.",
     funFact:"Udon noodles are thick and chewy, made from wheat flour. Sanuki udon from Kagawa Prefecture is the most famous variety. Kagawa is so proud of udon that it calls itself 'Udon Prefecture.' Some shops serve udon for breakfast there."},

    {type:"teach", trg:"そば", src:"soba (buckwheat noodles)", pos:"noun", gender:null,
     note:"Thin buckwheat noodles. Eaten hot or cold. Traditional New Year food.\nKanji: 蕎麦.",
     example:"A: おおみそかにそばをたべますか？\nB: はい、としこしそばをたべます。",
     exampleSrc:"A: Do you eat soba on New Year's Eve?\nB: Yes, I eat year-crossing soba.",
     funFact:"Eating soba on New Year's Eve (toshikoshi soba) symbolizes cutting ties with the old year, since soba noodles break easily. The long noodles also represent longevity. This tradition dates back to the Edo period and is practiced by over 50% of Japanese households."},

    {type:"mc", q:"Which dish is eaten on New Year's Eve for good luck?", opts:["ラーメン","うどん","そば","すし"], ans:"そば",
     hint:"These thin buckwheat noodles symbolize cutting ties with the old year."},

    {type:"teach", trg:"てんぷら", src:"tempura (battered fried food)", pos:"noun", gender:null,
     note:"Deep-fried seafood and vegetables in light batter. Portuguese origin.\nKanji: 天ぷら.",
     example:"A: てんぷらのなかでなにがいちばんすきですか？\nB: えびてんがすきです。",
     exampleSrc:"A: What tempura do you like best?\nB: I like shrimp tempura.",
     funFact:"Tempura came from Portuguese missionaries in the 1500s, from 'tempora' (times of abstinence when they ate fried fish). Japanese mastered the technique into an art form. Perfect tempura batter is ice-cold, barely mixed, and impossibly light."},

    {type:"teach", trg:"カレー", src:"curry (Japanese-style)", pos:"noun", gender:null,
     note:"Japanese curry is sweeter and thicker than Indian curry. A national comfort food.\nWritten in katakana.",
     example:"A: カレーをつくりましょうか？\nB: はい、おねがいします！",
     exampleSrc:"A: Shall I make curry?\nB: Yes, please!",
     funFact:"Japanese curry arrived via the British Navy in the Meiji era. It became a military staple, then a school lunch favorite, then a national obsession. Japanese curry houses (CoCo Ichibanya) have expanded worldwide. House and S&B curry roux blocks make home cooking easy."},

    {type:"teach", trg:"おにぎり", src:"rice ball", pos:"noun", gender:null,
     note:"Triangular rice balls with filling, wrapped in seaweed. Japan's ultimate portable food.",
     example:"A: おにぎりのぐはなにがいいですか？\nB: しゃけがいいです。",
     exampleSrc:"A: What filling do you want in your rice ball?\nB: Salmon, please.",
     funFact:"Onigiri (from nigiru, to grip/mold) are the original Japanese fast food. Convenience stores sell over 2 billion onigiri per year. Popular fillings: shake (salmon), umeboshi (pickled plum), tuna mayo. The packaging that keeps nori crispy until eating is an engineering marvel."},

    {type:"teach", trg:"みそしる", src:"miso soup", pos:"noun", gender:null,
     note:"Fermented soybean soup. Served with almost every Japanese meal.\nKanji: 味噌汁.",
     example:"A: あさごはんにみそしるをのみますか？\nB: はい、まいにちのみます。",
     exampleSrc:"A: Do you have miso soup for breakfast?\nB: Yes, I have it every day.",
     funFact:"味噌 (miso, fermented soybean paste) + 汁 (shiru, soup/broth). Miso soup is so fundamental that 'miso soup's flavor' is said to be the taste of home. Everyone's mother makes it slightly differently. It is served at breakfast, lunch, and dinner."},

    {type:"fb", s:"にほんで いちばん にんきの めんは ___です。",
     a:["ラーメン"],
     opts:["ラーメン","パスタ","うどん","パン"],
     hint:"This Chinese-origin noodle soup is Japan's most popular comfort food.",
     sSrc:"The most popular noodles in Japan are ramen."},

    {type:"teach", trg:"やきとり", src:"grilled chicken skewers", pos:"noun", gender:null,
     note:"Chicken pieces on bamboo skewers, grilled over charcoal. Bar food staple.\nKanji: 焼き鳥.",
     example:"A: やきとりをたべにいきませんか？\nB: いいですね。ビールものみましょう。",
     exampleSrc:"A: Shall we go eat yakitori?\nB: Sounds good. Let's have beer too.",
     funFact:"焼 (yaki, grilled) + 鳥 (tori, bird/chicken). Yakitori-ya (yakitori restaurants) are beloved after-work gathering spots. Every part of the chicken is used: momo (thigh), kawa (skin), tsukune (meatball), nankotsu (cartilage). Salt or tare (sweet sauce) are the two seasoning choices."},

    {type:"teach", trg:"おべんとう", src:"packed lunch / bento box", pos:"noun", gender:null,
     note:"Compartmented lunch box. A Japanese art form. The お is honorific.\nKanji: お弁当.",
     example:"A: おべんとうをつくりましたか？\nB: はい、きょうはチキンカツべんとうです。",
     exampleSrc:"A: Did you make a bento?\nB: Yes, today it's chicken cutlet bento.",
     funFact:"Bento culture is uniquely Japanese. Mothers create elaborate character bentos (kyaraben) for children. Ekiben (station bentos) sold at train stations feature local specialties. The aesthetic arrangement of food is as important as the taste. Even convenience store bentos are beautifully arranged."},

    {type:"teach", trg:"とうふ", src:"tofu", pos:"noun", gender:null,
     note:"Soybean curd. A protein staple in Japanese vegetarian and traditional cooking.\nKanji: 豆腐.",
     example:"A: とうふはからだにいいですよ。\nB: はい、よくたべます。",
     exampleSrc:"A: Tofu is good for your body.\nB: Yes, I eat it often.",
     funFact:"豆 (mame, bean) + 腐 (fu, curdled). Despite the kanji meaning 'rotted beans,' tofu is incredibly healthy. Japan has soft (kinugoshi), firm (momen), and fried (abura-age) varieties. Yudofu (boiled tofu) in Kyoto is considered a spiritual food."},

    {type:"mc", q:"おにぎり is:", opts:["Fried rice","Rice balls","Rice cakes","Rice pudding"], ans:"Rice balls",
     hint:"Triangular shaped, filled with salmon or plum, wrapped in seaweed."},

    {type:"teach", trg:"しょうゆ", src:"soy sauce", pos:"noun", gender:null,
     note:"Japan's most essential condiment. Used in almost every dish.\nKanji: 醤油.",
     example:"A: しょうゆをとってください。\nB: はい、どうぞ。",
     exampleSrc:"A: Please pass the soy sauce.\nB: Here you go.",
     funFact:"Soy sauce is to Japan what olive oil is to Italy. Kikkoman, founded in 1917, is the world's largest soy sauce producer. Soy sauce is fermented for months (sometimes years). High-quality artisanal soy sauce can cost as much as fine wine."},

    {type:"match", pairs:[
      {trg:"すし", src:"sushi"},
      {trg:"ラーメン", src:"ramen"},
      {trg:"てんぷら", src:"tempura"},
      {trg:"カレー", src:"curry"}
    ]},

    {type:"match", pairs:[
      {trg:"おにぎり", src:"rice ball"},
      {trg:"みそしる", src:"miso soup"},
      {trg:"やきとり", src:"grilled chicken skewers"},
      {trg:"おべんとう", src:"bento / packed lunch"}
    ]},

    {type:"fb", s:"あさごはんに___をのみます。",
     a:["みそしる"],
     opts:["みそしる","ラーメン","カレー","しょうゆ"],
     hint:"The fermented soybean soup served with almost every Japanese meal.",
     sSrc:"I have miso soup for breakfast."},

    {type:"mc", q:"てんぷら has origins in:", opts:["China","Korea","Portugal","India"], ans:"Portugal",
     hint:"Missionaries brought this frying technique to Japan in the 1500s."},

    {type:"mc", q:"としこしそば is eaten on:", opts:["New Year's Day","Valentine's Day","New Year's Eve","Christmas"], ans:"New Year's Eve",
     hint:"This tradition symbolizes cutting ties with the departing y...."},
  ]
};
export default LESSON_3;
