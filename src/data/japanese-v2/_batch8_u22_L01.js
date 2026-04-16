// Batch 8 – Unit 22 (B1.2 Giving/Receiving): Gift Culture & Etiquette
const BATCH8_L1 = {
  id:"jav2_u22l_b8_1", title:"おくりもののぶんか", icon:"🎁", xp:15, board:true,
  steps:[
    {type:"intro", title:"おくりもののぶんか",
     desc:"Learn vocabulary for Japanese gift-giving culture, seasonal gifts, and etiquette. Gift exchange is deeply embedded in Japanese social relationships.",
     goals:["Name types of Japanese gifts and occasions","Understand seasonal gift-giving customs","Use gift-related expressions properly"]},

    {type:"teach", trg:"おくりもの", src:"gift / present", pos:"noun", gender:null,
     note:"Kanji: 贈り物. Formal word for gift.\nおくりものをえらぶ = to choose a gift.",
     example:"A: おくりものをかいにいきます。\nB: どんなものがいいですか？",
     exampleSrc:"A: I am going to buy a gift.\nB: What kind of thing would be good?",
     funFact:"Japanese おくりもの culture has strict rules. Avoid sets of 4 (し = death) or 9 (く = suffering). White wrapping is for funerals. のし (decorative paper) with みずひき (decorative knots) indicates the occasion. The wrapping is as important as the contents."},

    {type:"teach", trg:"おちゅうげん", src:"mid-year gift (July)", pos:"noun", gender:null,
     note:"Kanji: お中元. Given to benefactors, bosses, teachers in summer.\nSeasonal obligation gift.",
     example:"A: おちゅうげんをおくりましたか？\nB: はい、じょうしにビールセットをおくりました。",
     exampleSrc:"A: Did you send the mid-year gift?\nB: Yes, I sent a beer set to my boss.",
     funFact:"おちゅうげん (July) and おせいぼ (December) are Japan's two major gift-giving seasons. Department stores set up dedicated floors. Popular items: beer, juice, fruit, ham. Corporate おちゅうげん budgets run into millions of yen. The custom is declining among younger generations but remains strong in business."},

    {type:"teach", trg:"おせいぼ", src:"year-end gift (December)", pos:"noun", gender:null,
     note:"Kanji: お歳暮. Winter counterpart to おちゅうげん.\nGiven to people you are indebted to.",
     example:"A: おせいぼはなにがいいですか？\nB: かにセットがよろこばれますよ。",
     exampleSrc:"A: What is good for a year-end gift?\nB: Crab sets are well received.",
     funFact:"おせいぼ season transforms department stores. Gift catalogs (ギフトカタログ) arrive in November. Popular items: seafood, wagyu beef, premium sweets. Some families spend 100,000+ yen on おせいぼ. Online ordering has modernized the process, but the personal touch of choosing remains valued."},

    {type:"teach", trg:"おかえし", src:"return gift / reciprocal gift", pos:"noun", gender:null,
     note:"Kanji: お返し. Typically 30-50% of the original gift value.\nはんがえし = half-return.",
     example:"A: おみやげのおかえしをしなければなりません。\nB: なにがいいでしょうか？",
     exampleSrc:"A: I must give a return gift for the souvenir.\nB: What would be good?",
     funFact:"おかえし is a fundamental social obligation. Receiving without returning creates おん (debt/obligation). Wedding guests give おかえし worth about half the ごしゅうぎ (monetary gift). ホワイトデー (March 14) is おかえし for バレンタインデー chocolate. Not giving おかえし damages relationships."},

    {type:"teach", trg:"てみやげ", src:"gift brought when visiting someone", pos:"noun", gender:null,
     note:"て (hand) + みやげ (souvenir). Brought when visiting homes or offices.\nてみやげをもっていく = to bring a visiting gift.",
     example:"A: ともだちのいえにいくのでてみやげをかいます。\nB: ケーキはどうですか？",
     exampleSrc:"A: I am going to a friend's house so I will buy a visiting gift.\nB: How about cake?",
     funFact:"Visiting someone's home in Japan without てみやげ is considered rude. Sweets, fruit, or drinks are standard. The phrase つまらないものですが (this is a trivial thing, but...) is traditionally said when handing it over, though younger people find this false modesty outdated. The receiver says ありがとう then opens it later."},

    {type:"mc", q:"What is おかえし?", opts:["A return gift given as reciprocation","A birthday party","A thank-you card","A New Year greeting"], ans:"A return gift given as reciprocation",
     hint:"This social obligation ensures balance in g...-giving relationships."},

    {type:"teach", trg:"のし", src:"decorative gift wrapping paper", pos:"noun", gender:null,
     note:"Formal gift paper with みずひき (ornamental cord).\nDifferent styles for celebrations vs. condolences.",
     example:"A: のしはおつけしますか？\nB: はい、おいわいようでおねがいします。",
     exampleSrc:"A: Shall I attach gift wrapping?\nB: Yes, celebration style please.",
     funFact:"のし originally referred to dried abalone attached to gifts as a symbol of prosperity. Modern のし is printed paper. Red-and-white みずひき (cord) is for celebrations. Black-and-white is for funerals. The bow style matters: butterfly bow (reusable events like birthdays) vs. tight knot (one-time events like weddings)."},

    {type:"teach", trg:"つつむ", src:"to wrap", pos:"verb", gender:null,
     note:"Kanji: 包む. プレゼントをつつむ = to wrap a present.\nつつみがみ = wrapping paper.",
     example:"A: プレゼントをつつんでもらえますか？\nB: はい、リボンもおつけしますか？",
     exampleSrc:"A: Can you wrap this present?\nB: Yes, shall I add a ribbon too?",
     funFact:"Japanese gift-wrapping (つつみ) is an art form. Department store staff wrap with origami-like precision in seconds. ふろしき (cloth wrapping) is the traditional eco-friendly alternative. The Japanese concept is that the つつみ (wrapping) shows your heart and effort, sometimes valued more than the contents."},

    {type:"teach", trg:"きもちをこめる", src:"to put one's feelings into", pos:"verb", gender:null,
     note:"きもち (feeling) + こめる (to put in/fill).\nきもちのこもったプレゼント = a heartfelt gift.",
     example:"A: きもちをこめててがみをかきました。\nB: きっとよろこばれますよ。",
     exampleSrc:"A: I wrote a letter with my feelings put into it.\nB: They will surely be pleased.",
     funFact:"きもちをこめる is what elevates a gift from a transaction to a gesture. Japanese culture values the てま (effort) and きもち (feeling) behind a gift more than its monetary value. A hand-made card with きもちがこもっている (filled with feeling) outweighs an expensive but impersonal purchase."},

    {type:"teach", trg:"おれいをいう", src:"to express gratitude / to say thank you", pos:"verb", gender:null,
     note:"おれい (gratitude) + いう (to say). おれいをのべる = to express thanks (formal).\nおれいのことば = words of thanks.",
     example:"A: きちんとおれいをいいましたか？\nB: はい、でんわでおれいをいいました。",
     exampleSrc:"A: Did you properly express your thanks?\nB: Yes, I said thank you by phone.",
     funFact:"Japanese おれい culture is multi-layered: immediate thanks, follow-up thank-you (おれいじょう, thank-you letter), and reciprocal gift (おかえし). Not following through on all three levels can be seen as lacking in social awareness. Business thank-you emails are sent within 24 hours."},

    {type:"teach", trg:"きねんひん", src:"commemorative item / souvenir / memento", pos:"noun", gender:null,
     note:"きねん (commemoration) + ひん (item).\nそつぎょうきねんひん = graduation memento.",
     example:"A: そつぎょうきねんひんとしてフォトブックをもらいました。\nB: いいおもいでになりますね。",
     exampleSrc:"A: I received a photo book as a graduation memento.\nB: It will be a nice memory.",
     funFact:"きねんひん are given at weddings (ひきでもの), retirements (たいしょくきねんひん), and company milestones (そうりつきねんひん). Quality matters: cheap きねんひん reflect poorly on the giver. Common choices: branded tableware, premium towels, and gourmet food sets."},

    {type:"fb", s:"ともだちのいえに{1}をもっていきます。\n(I will bring a visiting gift to my friend's house.)", a:"てみやげ", opts:["てみやげ","おかえし","おちゅうげん","きねんひん"], sSrc:"I will bring a visiting gift to my friend's house.",
     hint:"This is a gift specifically brought when visiting someone's home."},

    {type:"teach", trg:"おすそわけ", src:"sharing a portion of something received", pos:"noun", gender:null,
     note:"すそ (hem) + わけ (divide). Sharing excess food, gifts, etc.\nLiterally: sharing the hem of your garment.",
     example:"A: りんごをたくさんもらったのでおすそわけです。\nB: ありがとうございます。いただきます。",
     exampleSrc:"A: I received many apples, so here is a share for you.\nB: Thank you. I will have some.",
     funFact:"おすそわけ is a beautiful Japanese custom of sharing abundance. When you receive too many fruits, vegetables, or souvenirs, you おすそわけ to neighbors and friends. It strengthens community bonds. The word literally means sharing the すそ (hem/edge), implying sharing from the surplus without losing the core."},

    {type:"teach", trg:"つまらないものですが", src:"this is a small/trivial thing, but...", pos:"intj", gender:null,
     note:"Traditional humble phrase when giving a gift.\nPurposely downplays the gift's value.",
     example:"A: つまらないものですが、どうぞ。\nB: ありがとうございます。いただきます。",
     exampleSrc:"A: This is a small thing, but please accept it.\nB: Thank you. I will accept it.",
     funFact:"つまらないものですが is classic Japanese modesty. You call your own gift つまらない (boring/trivial) to show humility. Younger generations increasingly find this phrase outdated and prefer おくちにあうかわかりませんが (I am not sure if it suits your taste). The cultural shift reflects changing attitudes toward false modesty."},

    {type:"match", pairs:[{trg:"おちゅうげん",src:"mid-year gift"},{trg:"おせいぼ",src:"year-end gift"},{trg:"おかえし",src:"return gift"},{trg:"てみやげ",src:"visiting gift"},{trg:"おすそわけ",src:"sharing a portion"}],
     hint:"Match each gift type with its English description."},

    {type:"mc", q:"Why is the number 4 avoided in Japanese gifts?", opts:["It sounds like the word for death (し)","It is considered unlucky in astrology","It represents loneliness","It breaks easily into pieces"], ans:"It sounds like the word for death (し)",
     hint:"This homophone avoidance also applies to hospital room numbers."},

    {type:"fb", s:"きもちを{1}てがみをかきました。\n(I wrote a letter with my feelings put into it.)", a:"こめて", opts:["こめて","つつんで","おくって","いって"], sSrc:"I wrote a letter with my feelings put into it.",
     hint:"This verb means to fill or put something (especially emotions) into something."},

    {type:"mc", q:"What is のし in gift culture?", opts:["Decorative wrapping paper with ornamental cord","A type of bow","A thank-you card","A receipt for the gift"], ans:"Decorative wrapping paper with ornamental cord",
     hint:"Different styles indicate celebrations versus condolences."}
  ]
};
export default BATCH8_L1;
