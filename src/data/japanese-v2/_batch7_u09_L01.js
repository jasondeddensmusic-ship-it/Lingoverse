// Batch 7 – Unit 09 (A2.1 Shopping): Clothing & Fashion Vocabulary
const BATCH7_L1 = {
  id:"jav2_u09l_b7_1", title:"服(ふく)とファッション", icon:"👔", xp:15, board:true,
  steps:[
    {type:"intro", title:"服(ふく)とファッション",
     desc:"Learn clothing vocabulary beyond the basics. Japanese fashion ranges from traditional kimono to Harajuku street style, and these words will help you shop, describe outfits, and discuss style.",
     goals:["Name additional clothing items and accessories","Describe clothing with color and size words","Use fitting room and alteration phrases"]},

    {type:"teach", trg:"服(ふく)", src:"clothes / clothing", pos:"noun", gender:null,
     note:"General term for clothes. 洋服(ようふく) = Western clothes.\n着物(きもの) = Japanese traditional clothes.",
     example:"A: 新(あたら)しい服(ふく)を買(か)いたいです。\nB: どんな服(ふく)ですか？",
     exampleSrc:"A: I want to buy new clothes.\nB: What kind of clothes?",
     funFact:"服(ふく) originally meant any garment covering the body. After Japan opened to the West in 1868, people needed to distinguish 洋服(ようふく) (Western clothes) from 和服(わふく) (Japanese clothes). Today 服(ふく) defaults to Western clothing. 和服(わふく) requires a specific occasion."},

    {type:"teach", trg:"靴下(くつした)", src:"socks", pos:"noun", gender:null,
     note:"靴(くつ) = shoes, 下(した) = under/below.\nLiterally: under-shoes. Counter: 一足(いっそく) (one pair).",
     example:"A: 新(あたら)しい靴下(くつした)が必要(ひつよう)です。\nB: 何色(なにいろ)がいいですか？",
     exampleSrc:"A: I need new socks.\nB: What color would you like?",
     funFact:"Japan has a rich sock culture. Removing shoes indoors means socks are always visible. Holes in socks are embarrassing. Japanese businesses sell fashionable socks as gifts. Traditional socks with a split toe (足袋(たび)) are still worn with kimono."},

    {type:"teach", trg:"帽子(ぼうし)", src:"hat / cap", pos:"noun", gender:null,
     note:"帽子(ぼうし)をかぶる = to wear a hat.\n麦(むぎ)わら帽子(ぼうし) = straw hat.",
     example:"A: 暑(あつ)いですね。帽子(ぼうし)をかぶりましょう。\nB: いいアイデアですね。",
     exampleSrc:"A: It is hot. Let us wear hats.\nB: Good idea.",
     funFact:"Japanese school children wear specific colored 帽子(ぼうし) by grade. Yellow hats for first graders are universal, making them visible in traffic. In anime, One Piece's ルフィの麦(むぎ)わら帽子(ぼうし) (straw hat) is iconic. Hat etiquette: remove indoors, especially at shrines."},

    {type:"teach", trg:"手袋(てぶくろ)", src:"gloves", pos:"noun", gender:null,
     note:"手(て) = hand, 袋(ふくろ) = bag/pouch.\nLiterally: hand bags. Counter: 一足(いっそく) (one pair).",
     example:"A: 寒(さむ)いですね。手袋(てぶくろ)を持(も)ってきましたか？\nB: 忘(わす)れました！",
     exampleSrc:"A: It is cold. Did you bring gloves?\nB: I forgot them!",
     funFact:"手袋(てぶくろ) literally means 'hand bag,' using the same 袋(ふくろ) (bag) found in many Japanese compound words. Other body-part bags: 足袋(たび) (foot bag, traditional tabi socks), 指袋(ゆびぶくろ) (finger bag, gloves with individual fingers). Japanese word-building is wonderfully logical."},

    {type:"teach", trg:"アクセサリー", src:"accessories / jewelry", pos:"noun", gender:null,
     note:"Katakana loanword. Covers rings, necklaces, earrings, etc.\nアクセサリーをつける = to put on accessories.",
     example:"A: きれいなアクセサリーですね。\nB: ありがとう。京都(きょうと)で買(か)いました。",
     exampleSrc:"A: What pretty accessories.\nB: Thank you. I bought them in Kyoto.",
     funFact:"Japanese workplaces traditionally had strict rules against アクセサリー, especially for women. This has relaxed, but many companies still limit visible jewelry. Traditional Japanese accessories include 簪(かんざし) (hair pins), 帯(おび) (kimono sash), and 巾着(きんちゃく) (drawstring pouches)."},

    {type:"teach", trg:"試着室(しちゃくしつ)", src:"fitting room", pos:"noun", gender:null,
     note:"試着(しちゃく) = trying on clothes. 室(しつ) = room.\n試着(しちゃく)してもいいですか = may I try it on?",
     example:"A: 試着(しちゃく)してもいいですか？\nB: どうぞ。試着室(しちゃくしつ)はあちらです。",
     exampleSrc:"A: May I try this on?\nB: Please. The fitting room is over there.",
     funFact:"Japanese 試着室(しちゃくしつ) have strict etiquette. You must remove shoes, and staff provide a face cover (フェイスカバー) to prevent makeup stains. Some stores limit the number of items (usually 3). Staff count items going in and coming out."},

    {type:"teach", trg:"似合(にあ)う", src:"to suit / to look good on", pos:"verb", gender:null,
     note:"Group 1 verb. よく似合(にあ)いますね = it suits you well.\n似合(にあ)わない = does not suit.",
     example:"A: このワンピースは似合(にあ)いますか？\nB: とても似合(にあ)っていますよ！",
     exampleSrc:"A: Does this dress suit me?\nB: It looks great on you!",
     funFact:"似合(にあ)う combines 似(に) (resemble) and 合(あ)う (match). Japanese shop staff are trained to give honest opinions using 似合(にあ)う. Unlike some cultures where staff always say 'it looks great,' Japanese staff might gently suggest alternatives if something does not 似合(にあ)う."},

    {type:"teach", trg:"長袖(ながそで)", src:"long sleeves", pos:"noun", gender:null,
     note:"長(なが) = long, 袖(そで) = sleeve.\nOpposite: 半袖(はんそで) = short sleeves.",
     example:"A: 今日(きょう)は寒(さむ)いから、長袖(ながそで)を着(き)ます。\nB: いい考(かんが)えですね。",
     exampleSrc:"A: It is cold today, so I will wear long sleeves.\nB: Good thinking.",
     funFact:"Japanese clothing culture is highly seasonal. People switch from 半袖(はんそで) (short sleeves) to 長袖(ながそで) around October 1st, regardless of actual temperature. This seasonal awareness (衣替(ころもが)え) extends to school uniforms, which have fixed switch dates."},

    {type:"teach", trg:"下着(したぎ)", src:"underwear", pos:"noun", gender:null,
     note:"下(した) = under/below, 着(ぎ) = wearing/clothes.\nAlso: インナー (inner wear, katakana loanword).",
     example:"A: 洗濯物(せんたくもの)をたたみましょう。\nB: 下着(したぎ)は別(べつ)にたたんでください。",
     exampleSrc:"A: Let us fold the laundry.\nB: Please fold underwear separately.",
     funFact:"下着(したぎ) is a private word in Japanese. Displaying underwear on laundry lines is considered embarrassing. Many women use indoor drying racks for 下着(したぎ). ユニクロのHEATTECH line revolutionized Japanese 下着(したぎ) by combining warmth with thinness, becoming a cultural phenomenon."},

    {type:"teach", trg:"脱(ぬ)ぐ", src:"to take off (clothes)", pos:"verb", gender:null,
     note:"Group 1 verb. Opposite: 着(き)る (to put on).\n靴(くつ)を脱(ぬ)ぐ = to take off shoes.",
     example:"A: 靴(くつ)を脱(ぬ)いでください。\nB: はい、スリッパを借(か)りてもいいですか？",
     exampleSrc:"A: Please take off your shoes.\nB: Yes, may I borrow slippers?",
     funFact:"脱(ぬ)ぐ is used constantly in Japan. You remove shoes at every home, many restaurants, temples, and some workplaces. The 玄関(げんかん) (entryway) is the designated 脱(ぬ)ぐ zone. Wearing shoes past this point is a serious faux pas. Matching clean socks are important."},

    {type:"teach", trg:"畳(たた)む", src:"to fold", pos:"verb", gender:null,
     note:"Group 1 verb. 洗濯物(せんたくもの)を畳(たた)む = to fold laundry.\n傘(かさ)を畳(たた)む = to close an umbrella.",
     example:"A: このシャツを畳(たた)んでください。\nB: はい、きれいに畳(たた)みます。",
     exampleSrc:"A: Please fold this shirt.\nB: Yes, I will fold it neatly.",
     funFact:"Japanese folding (畳(たた)む) is an art. 近藤麻理恵(こんどうまりえ) (Marie Kondo)'s folding method (clothes stand upright in drawers) went viral worldwide. Traditional fabric arts like 風呂敷(ふろしき) (wrapping cloth) are based on 畳(たた)む techniques. Even convenience store staff fold shopping bags with impressive speed."},

    {type:"teach", trg:"汚(よご)れる", src:"to get dirty / to become stained", pos:"verb", gender:null,
     note:"Group 2 verb. 汚(よご)れている = it is dirty.\n染(し)み = stain.",
     example:"A: シャツが汚(よご)れています。\nB: 洗濯(せんたく)しましょう。",
     exampleSrc:"A: The shirt is dirty.\nB: Let us wash it.",
     funFact:"汚(よご)れ (dirt/stain) has deep cultural weight. Japanese purity concepts (清潔(せいけつ)) drive the obsession with cleanliness. School children have ぞうきん (cleaning cloths) for wiping. The phrase 手(て)を汚(よご)す (to dirty one's hands) means to do something morally questionable."},

    {type:"teach", trg:"乾(かわ)く", src:"to dry", pos:"verb", gender:null,
     note:"Group 1 verb. Intransitive. 洗濯物(せんたくもの)が乾(かわ)いた = the laundry dried.\n乾(かわ)かす = to dry (transitive).",
     example:"A: 洗濯物(せんたくもの)は乾(かわ)きましたか？\nB: まだです。曇(くも)りですから。",
     exampleSrc:"A: Has the laundry dried?\nB: Not yet. It is cloudy.",
     funFact:"乾(かわ)く is critical vocabulary during Japan's rainy season (梅雨(つゆ), June-July). Laundry struggles are a national topic. Indoor drying (部屋干(へやぼ)し) has its own vocabulary and specialized products. 除湿機(じょしつき) (dehumidifiers) are a best-selling home appliance."},

    // Quiz steps
    {type:"mc", q:"試着室(しちゃくしつ) means:",
     opts:["Fitting room","Bathroom","Checkout counter","Storage room"],
     ans:"Fitting room",
     hint:"This is where you try on clothes before buying them. Staff will give you a face cover."},

    {type:"match", pairs:[
      {trg:"靴下(くつした)", src:"socks"},
      {trg:"帽子(ぼうし)", src:"hat"},
      {trg:"手袋(てぶくろ)", src:"gloves"},
      {trg:"下着(したぎ)", src:"underwear"},
      {trg:"長袖(ながそで)", src:"long sleeves"}
    ]},

    {type:"fb", s:"このワンピースはよく{1}ますね。",
     a:["似合(にあ)い"],
     opts:["似合(にあ)い","着替(きが)え","脱(ぬ)ぎ","乾(かわ)き"],
     hint:"A compliment saying the dress looks great on someone. This verb means 'to suit.'",
     sSrc:"This dress really {1} you."},

    {type:"mc", q:"家(いえ)に入(はい)るとき、まず何(なに)をしますか？",
     opts:["靴(くつ)を脱(ぬ)ぐ","帽子(ぼうし)をかぶる","服(ふく)を着(き)る","手袋(てぶくろ)をはめる"],
     ans:"靴(くつ)を脱(ぬ)ぐ",
     hint:"The first thing you do when entering a Japanese home is at the 玄関(げんかん) (entryway)."},

    {type:"fb", s:"洗濯物(せんたくもの)を{1}てたんすに入(い)れましょう。",
     a:["畳(たた)ん"],
     opts:["畳(たた)ん","汚(よご)れ","乾(かわ)い","脱(ぬ)い"],
     hint:"The て-form of the verb meaning 'to fold.' You do this before putting clothes in the dresser.",
     sSrc:"Let us {1} the laundry and put it in the dresser."},

    {type:"mc", q:"衣替(ころもが)え is:",
     opts:["The seasonal switch between summer and winter wardrobes","A fashion brand","A type of kimono","A fabric cleaning method"],
     ans:"The seasonal switch between summer and winter wardrobes",
     hint:"Japanese people and school uniforms s... b... short sleeves and long sleeves on fixed dates."},

    {type:"match", pairs:[
      {trg:"似合(にあ)う", src:"to suit"},
      {trg:"脱(ぬ)ぐ", src:"to take off"},
      {trg:"畳(たた)む", src:"to fold"},
      {trg:"汚(よご)れる", src:"to get dirty"},
      {trg:"乾(かわ)く", src:"to dry"}
    ]},

    {type:"fb", s:"雨(あめ)が降(ふ)っているので、洗濯物(せんたくもの)が{1}ません。",
     a:["乾(かわ)き"],
     opts:["乾(かわ)き","汚(よご)れ","畳(たた)み","脱(ぬ)ぎ"],
     hint:"Because it is raining, the laundry will not become dry. This verb describes the drying process.",
     sSrc:"Because it is raining, the laundry will not {1}."}
  ,{type:"match",pairs:[{trg:"アクセサリー",src:"accessories / jewelry"},{trg:"試着室(しちゃくしつ)",src:"fitting room"}]}]
};
export default BATCH7_L1;
