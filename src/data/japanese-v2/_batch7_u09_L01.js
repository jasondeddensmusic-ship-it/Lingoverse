// Batch 7 – Unit 09 (A2.1 Shopping): Clothing & Fashion Vocabulary
const BATCH7_L1 = {
  id:"jav2_u09l_b7_1", title:"ふくとファッション", icon:"👔", xp:15, board:true,
  steps:[
    {type:"intro", title:"ふくとファッション",
     desc:"Learn clothing vocabulary beyond the basics. Japanese fashion ranges from traditional kimono to Harajuku street style, and these words will help you shop, describe outfits, and discuss style.",
     goals:["Name additional clothing items and accessories","Describe clothing with color and size words","Use fitting room and alteration phrases"]},

    {type:"teach", trg:"ふく", src:"clothes / clothing", pos:"noun", gender:null,
     note:"General term for clothes. ようふく = Western clothes.\nきもの = Japanese traditional clothes.",
     example:"A: あたらしいふくをかいたいです。\nB: どんなふくですか？",
     exampleSrc:"A: I want to buy new clothes.\nB: What kind of clothes?",
     funFact:"ふく (服) originally meant any garment covering the body. After Japan opened to the West in 1868, people needed to distinguish ようふく (Western clothes) from わふく (Japanese clothes). Today ふく defaults to Western clothing. わふく requires a specific occasion."},

    {type:"teach", trg:"くつした", src:"socks", pos:"noun", gender:null,
     note:"くつ = shoes, した = under/below.\nLiterally: under-shoes. Counter: いっそく (one pair).",
     example:"A: あたらしいくつしたがひつようです。\nB: なにいろがいいですか？",
     exampleSrc:"A: I need new socks.\nB: What color would you like?",
     funFact:"Japan has a rich sock culture. Removing shoes indoors means socks are always visible. Holes in socks are embarrassing. Japanese businesses sell fashionable socks as gifts. Tableware-shaped socks (足袋, tabi) with a split toe are traditional and still worn with kimono."},

    {type:"teach", trg:"ぼうし", src:"hat / cap", pos:"noun", gender:null,
     note:"ぼうしをかぶる = to wear a hat.\nむぎわらぼうし = straw hat.",
     example:"A: あついですね。ぼうしをかぶりましょう。\nB: いいアイデアですね。",
     exampleSrc:"A: It is hot. Let us wear hats.\nB: Good idea.",
     funFact:"Japanese school children wear specific colored ぼうし by grade. Yellow hats for first graders are universal, making them visible in traffic. In anime, One Piece's Luffy's むぎわらぼうし (straw hat) is iconic. Hat etiquette: remove indoors, especially at shrines."},

    {type:"teach", trg:"てぶくろ", src:"gloves", pos:"noun", gender:null,
     note:"て = hand, ぶくろ = bag/pouch.\nLiterally: hand bags. Counter: いっそく (one pair).",
     example:"A: さむいですね。てぶくろをもってきましたか？\nB: わすれました！",
     exampleSrc:"A: It is cold. Did you bring gloves?\nB: I forgot them!",
     funFact:"てぶくろ (手袋) literally means 'hand bag,' using the same ふくろ (bag) found in many Japanese compound words. Other body-part bags: あしぶくろ (foot bag, old word for tabi socks), ゆびぶくろ (finger bag, gloves with individual fingers). Japanese word-building is wonderfully logical."},

    {type:"teach", trg:"アクセサリー", src:"accessories / jewelry", pos:"noun", gender:null,
     note:"Katakana loanword. Covers rings, necklaces, earrings, etc.\nアクセサリーをつける = to put on accessories.",
     example:"A: きれいなアクセサリーですね。\nB: ありがとう。きょうとでかいました。",
     exampleSrc:"A: What pretty accessories.\nB: Thank you. I bought them in Kyoto.",
     funFact:"Japanese workplaces traditionally had strict rules against アクセサリー, especially for women. This has relaxed, but many companies still limit visible jewelry. Traditional Japanese accessories include かんざし (hair pins), おび (kimono sash), and きんちゃく (drawstring pouches)."},

    {type:"teach", trg:"しちゃくしつ", src:"fitting room", pos:"noun", gender:null,
     note:"しちゃく = trying on clothes. しつ = room.\nしちゃくしてもいいですか = may I try it on?",
     example:"A: しちゃくしてもいいですか？\nB: どうぞ。しちゃくしつはあちらです。",
     exampleSrc:"A: May I try this on?\nB: Please. The fitting room is over there.",
     funFact:"Japanese fitting rooms (しちゃくしつ) have strict etiquette. You must remove shoes, and staff provide a face cover (フェイスカバー) to prevent makeup stains. Some stores limit the number of items (usually 3). Staff count items going in and coming out."},

    {type:"teach", trg:"にあう", src:"to suit / to look good on", pos:"verb", gender:null,
     note:"Group 1 verb. よくにあいますね = it suits you well.\nにあわない = does not suit.",
     example:"A: このワンピースはにあいますか？\nB: とてもにあっていますよ！",
     exampleSrc:"A: Does this dress suit me?\nB: It looks great on you!",
     funFact:"にあう (似合う) combines 似 (resemble) and 合 (match). Japanese shop staff are trained to give honest opinions using にあう. Unlike some cultures where staff always say 'it looks great,' Japanese staff might gently suggest alternatives if something does not にあう."},

    {type:"teach", trg:"ながそで", src:"long sleeves", pos:"noun", gender:null,
     note:"なが = long, そで = sleeve.\nOpposite: はんそで = short sleeves.",
     example:"A: きょうはさむいから、ながそでをきます。\nB: いいかんがえですね。",
     exampleSrc:"A: It is cold today, so I will wear long sleeves.\nB: Good thinking.",
     funFact:"Japanese clothing culture is highly seasonal. People switch from はんそで (short sleeves) to ながそで around October 1st, regardless of actual temperature. This seasonal awareness (衣替え, ころもがえ) extends to school uniforms, which have fixed switch dates."},

    {type:"teach", trg:"したぎ", src:"underwear", pos:"noun", gender:null,
     note:"した = under/below, ぎ = wearing/clothes.\nAlso: インナー (inner wear, katakana loanword).",
     example:"A: せんたくものをたたみましょう。\nB: したぎはべつにたたんでください。",
     exampleSrc:"A: Let us fold the laundry.\nB: Please fold underwear separately.",
     funFact:"したぎ (下着) is a private word in Japanese. Displaying underwear on laundry lines is considered embarrassing. Many women use indoor drying racks for したぎ. Uniqlo's HEATTECH line revolutionized Japanese したぎ by combining warmth with thinness, becoming a cultural phenomenon."},

    {type:"teach", trg:"ぬぐ", src:"to take off (clothes)", pos:"verb", gender:null,
     note:"Group 1 verb. Opposite: きる (to put on).\nくつをぬぐ = to take off shoes.",
     example:"A: くつをぬいでください。\nB: はい、スリッパをかりてもいいですか？",
     exampleSrc:"A: Please take off your shoes.\nB: Yes, may I borrow slippers?",
     funFact:"ぬぐ (脱ぐ) is used constantly in Japan. You remove shoes at every home, many restaurants, temples, and some workplaces. The genkan (entryway) is the designated ぬぐ zone. Wearing shoes past this point is a serious faux pas. Matching clean socks are important."},

    {type:"teach", trg:"たたむ", src:"to fold", pos:"verb", gender:null,
     note:"Group 1 verb. せんたくものをたたむ = to fold laundry.\nかさをたたむ = to close an umbrella.",
     example:"A: このシャツをたたんでください。\nB: はい、きれいにたたみます。",
     exampleSrc:"A: Please fold this shirt.\nB: Yes, I will fold it neatly.",
     funFact:"Japanese folding (たたむ) is an art. Marie Kondo's folding method (clothes stand upright in drawers) went viral worldwide. Traditional fabric arts like furoshiki (wrapping cloth) are based on たたむ techniques. Even convenience store staff fold shopping bags with impressive speed."},

    {type:"teach", trg:"よごれる", src:"to get dirty / to become stained", pos:"verb", gender:null,
     note:"Group 2 verb. よごれている = it is dirty.\nしみ = stain.",
     example:"A: シャツがよごれています。\nB: せんたくしましょう。",
     exampleSrc:"A: The shirt is dirty.\nB: Let us wash it.",
     funFact:"よごれ (dirt/stain) has deep cultural weight. Japanese purity concepts (清潔, せいけつ) drive the obsession with cleanliness. School children have ぞうきん (cleaning cloths) for wiping. The phrase 手を汚す (to dirty one's hands) means to do something morally questionable."},

    {type:"teach", trg:"かわく", src:"to dry", pos:"verb", gender:null,
     note:"Group 1 verb. Intransitive. せんたくものがかわいた = the laundry dried.\nかわかす = to dry (transitive).",
     example:"A: せんたくものはかわきましたか？\nB: まだです。くもりですから。",
     exampleSrc:"A: Has the laundry dried?\nB: Not yet. It is cloudy.",
     funFact:"かわく (乾く) is critical vocabulary during Japan's rainy season (つゆ, June-July). Laundry struggles are a national topic. Indoor drying (部屋干し, へやぼし) has its own vocabulary and specialized products. Dehumidifiers (除湿機) are a best-selling home appliance."},

    // Quiz steps
    {type:"mc", q:"しちゃくしつ means:",
     opts:["Fitting room","Bathroom","Checkout counter","Storage room"],
     ans:"Fitting room",
     hint:"This is where you try on clothes before buying them. Staff will give you a face cover."},

    {type:"match", pairs:[
      {trg:"くつした", src:"socks"},
      {trg:"ぼうし", src:"hat"},
      {trg:"てぶくろ", src:"gloves"},
      {trg:"したぎ", src:"underwear"},
      {trg:"ながそで", src:"long sleeves"}
    ]},

    {type:"fb", s:"このワンピースはよく{1}ますね。",
     a:["にあい"],
     opts:["にあい","きがえ","ぬぎ","かわき"],
     hint:"A compliment saying the dress looks great on someone. This verb means 'to suit.'",
     sSrc:"This dress really {1} you."},

    {type:"mc", q:"いえにはいるとき、まず何をしますか？",
     opts:["くつをぬぐ","ぼうしをかぶる","ふくをきる","てぶくろをはめる"],
     ans:"くつをぬぐ",
     hint:"The first thing you do when entering a Japanese home is at the genkan (entryway)."},

    {type:"fb", s:"せんたくものを{1}てたんすにいれましょう。",
     a:["たたん"],
     opts:["たたん","よごれ","かわい","ぬい"],
     hint:"The て-form of the verb meaning 'to fold.' You do this before putting clothes in the dresser.",
     sSrc:"Let us {1} the laundry and put it in the dresser."},

    {type:"mc", q:"ころもがえ is:",
     opts:["The seasonal switch between summer and winter wardrobes","A fashion brand","A type of kimono","A fabric cleaning method"],
     ans:"The seasonal switch between summer and winter wardrobes",
     hint:"Japanese people and school uniforms s... b... short sleeves and long sleeves on fixed dates."},

    {type:"match", pairs:[
      {trg:"にあう", src:"to suit"},
      {trg:"ぬぐ", src:"to take off"},
      {trg:"たたむ", src:"to fold"},
      {trg:"よごれる", src:"to get dirty"},
      {trg:"かわく", src:"to dry"}
    ]},

    {type:"fb", s:"あめがふっているので、せんたくものが{1}ません。",
     a:["かわき"],
     opts:["かわき","よごれ","たたみ","ぬぎ"],
     hint:"Because it is raining, the laundry will not become dry. This verb describes the drying process.",
     sSrc:"Because it is raining, the laundry will not {1}."}
  ]
};
export default BATCH7_L1;
