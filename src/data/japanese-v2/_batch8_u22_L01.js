// Batch 8 – Unit 22 (B1.2 Giving/Receiving): Gift Culture & Etiquette
const BATCH8_L1 = {
  id:"jav2_u22l_b8_1", title:"贈(おく)り物(もの)の文化(ぶんか)", icon:"🎁", xp:15, board:true,
  steps:[
    {type:"intro", title:"贈(おく)り物(もの)の文化(ぶんか)",
     desc:"Learn vocabulary for Japanese gift-giving culture, seasonal gifts, and etiquette. Gift exchange is deeply embedded in Japanese social relationships.",
     goals:["Name types of Japanese gifts and occasions","Understand seasonal gift-giving customs","Use gift-related expressions properly"]},

    {type:"teach", trg:"贈(おく)り物(もの)", src:"gift / present", pos:"noun", gender:null,
     note:"Kanji: 贈り物. Formal word for gift.\n贈(おく)り物(もの)を選(えら)ぶ = to choose a gift.",
     example:"A: 贈(おく)り物(もの)を買(か)いに行(い)きます。\nB: どんなものがいいですか？\nA: 本当(ほんとう)ですか？すごいですね。\nB: ありがとうございます。頑張(がんば)りました。",
     exampleSrc:"A: I am going to buy a gift.\nB: What kind of thing would be good?\nA: Really? That is amazing.\nB: Thank you. I worked hard.",
     funFact:"Japanese 贈(おく)り物(もの) culture has strict rules. Avoid sets of 4 (し = death) or 9 (く = suffering). White wrapping is for funerals. のし (decorative paper) with みずひき (decorative knots) indicates the occasion. The wrapping is as important as the contents."},

    {type:"teach", trg:"お中元(ちゅうげん)", src:"mid-year gift (July)", pos:"noun", gender:null,
     note:"Kanji: お中元. Given to benefactors, bosses, teachers in summer.\nSeasonal obligation gift.",
     example:"A: お中元(ちゅうげん)を送(おく)りましたか？\nB: はい、上司(じょうし)にビールセットを送(おく)りました。\nA: 私(わたし)も興味(きょうみ)があります。\nB: じゃあ、今度(こんど)一緒(いっしょ)にどうですか？",
     exampleSrc:"A: Did you send the mid-year gift?\nB: Yes, I sent a beer set to my boss.\nA: I am also interested.\nB: Then, how about doing it together next time?",
     funFact:"お中元(ちゅうげん) (July) and お歳暮(せいぼ) (December) are Japan's two major gift-giving seasons. Department stores set up dedicated floors. Popular items: beer, juice, fruit, ham. Corporate お中元(ちゅうげん) budgets run into millions of yen. The custom is declining among younger generations but remains strong in business."},

    {type:"teach", trg:"お歳暮(せいぼ)", src:"year-end gift (December)", pos:"noun", gender:null,
     note:"Kanji: お歳暮. Winter counterpart to お中元(ちゅうげん).\nGiven to people you are indebted to.",
     example:"A: お歳暮(せいぼ)は何(なに)がいいですか？\nB: カニセットがよろこばれますよ。\nA: どんな感(かん)じでしたか？\nB: 想像(そうぞう)していたよりずっと良(よ)かったです。",
     exampleSrc:"A: What is good for a year-end gift?\nB: Crab sets are well received.\nA: What was it like?\nB: It was much better than I imagined.",
     funFact:"お歳暮(せいぼ) season transforms department stores. Gift catalogs (ギフトカタログ) arrive in November. Popular items: seafood, wagyu beef, premium sweets. Some families spend 100,000+ yen on お歳暮(せいぼ). Online ordering has modernized the process, but the personal touch of choosing remains valued."},

    {type:"teach", trg:"お返(かえ)し", src:"return gift / reciprocal gift", pos:"noun", gender:null,
     note:"Kanji: お返し. Typically 30-50% of the original gift value.\n半返(はんがえ)し = half-return.",
     example:"A: お土産(みやげ)のお返(かえ)しをしなければなりません。\nB: 何(なに)がいいでしょうか？\nA: 何(なに)を食(た)べましたか？\nB: 地元(じもと)の名物(めいぶつ)を食(た)べました。",
     exampleSrc:"A: I must give a return gift for the souvenir.\nB: What would be good?\nA: What did you eat?\nB: I ate the local specialty.",
     funFact:"お返(かえ)し is a fundamental social obligation. Receiving without returning creates 恩(おん) (debt/obligation). Wedding guests give お返(かえ)し worth about half the ご祝儀(しゅうぎ) (monetary gift). ホワイトデー (March 14) is お返(かえ)し for バレンタインデー chocolate. Not giving お返(かえ)し damages relationships."},

    {type:"teach", trg:"手土産(てみやげ)", src:"gift brought when visiting someone", pos:"noun", gender:null,
     note:"手(て) (hand) + 土産(みやげ) (souvenir). Brought when visiting homes or offices.\n手土産(てみやげ)を持(も)っていく = to bring a visiting gift.",
     example:"A: 友達(ともだち)の家(いえ)に行(い)くので手土産(てみやげ)を買(か)います。\nB: ケーキはどうですか？\nA: 楽(たの)しみですね。\nB: はい、今(いま)からわくわくしています。",
     exampleSrc:"A: I am going to a friend's house so I will buy a visiting gift.\nB: How about cake?\nA: That is exciting.\nB: Yes, I am already excited.",
     funFact:"Visiting someone's home in Japan without 手土産(てみやげ) is considered rude. Sweets, fruit, or drinks are standard. The phrase つまらないものですが (this is a trivial thing, but...) is traditionally said when handing it over, though younger people find this false modesty outdated. The receiver says ありがとう then opens it later."},

    {type:"mc", q:"What is お返(かえ)し?", opts:["A return gift given as reciprocation","A birthday party","A thank-you card","A New Year greeting"], ans:"A return gift given as reciprocation",
     hint:"This social obligation ensures balance in g...-giving relationships."},

    {type:"teach", trg:"のし", src:"decorative gift wrapping paper", pos:"noun", gender:null,
     note:"Formal gift paper with みずひき (ornamental cord).\nDifferent styles for celebrations vs. condolences.",
     example:"A: のしはおつけしますか？\nB: はい、お祝(いわ)い用(よう)でお願(ねが)いします。\nA: いい思(おも)い出(で)ですね。\nB: はい、一生(いっしょう)忘(わす)れません。",
     exampleSrc:"A: Shall I attach gift wrapping?\nB: Yes, celebration style please.\nA: That is a nice memory.\nB: Yes, I will never forget it.",
     funFact:"のし originally referred to dried abalone attached to gifts as a symbol of prosperity. Modern のし is printed paper. Red-and-white みずひき (cord) is for celebrations. Black-and-white is for funerals. The bow style matters: butterfly bow (reusable events like birthdays) vs. tight knot (one-time events like weddings)."},

    {type:"teach", trg:"包(つつ)む", src:"to wrap", pos:"verb", gender:null,
     note:"Kanji: 包む. プレゼントを包(つつ)む = to wrap a present.\n包(つつ)み紙(がみ) = wrapping paper.",
     example:"A: プレゼントを包(つつ)んでもらえますか？\nB: はい、リボンもおつけしますか？\nA: どうでしたか？\nB: とても良(よ)かったです。",
     exampleSrc:"A: Can you wrap this present?\nB: Yes, shall I add a ribbon too?\nA: How was it?\nB: It was very good.",
     funFact:"Japanese gift-wrapping (包(つつ)み) is an art form. Department store staff wrap with origami-like precision in seconds. ふろしき (cloth wrapping) is the traditional eco-friendly alternative. The Japanese concept is that the 包(つつ)み (wrapping) shows your heart and effort, sometimes valued more than the contents."},

    {type:"teach", trg:"気持(きも)ちを込(こ)める", src:"to put one's feelings into", pos:"verb", gender:null,
     note:"気持(きも)ち (feeling) + 込(こ)める (to put in/fill).\n気持(きも)ちの込(こ)もったプレゼント = a heartfelt gift.",
     example:"A: 気持(きも)ちを込(こ)めて手紙(てがみ)を書(か)きました。\nB: きっとよろこばれますよ。\nA: いつですか？\nB: 去年(きょねん)の夏(なつ)でした。",
     exampleSrc:"A: I wrote a letter with my feelings put into it.\nB: They will surely be pleased.\nA: When was it?\nB: It was last summer.",
     funFact:"気持(きも)ちを込(こ)める is what elevates a gift from a transaction to a gesture. Japanese culture values the 手間(てま) (effort) and 気持(きも)ち (feeling) behind a gift more than its monetary value. A hand-made card with 気持(きも)ちがこもっている (filled with feeling) outweighs an expensive but impersonal purchase."},

    {type:"teach", trg:"お礼(れい)を言(い)う", src:"to express gratitude / to say thank you", pos:"verb", gender:null,
     note:"お礼(れい) (gratitude) + 言(い)う (to say). お礼(れい)を述(の)べる = to express thanks (formal).\nお礼(れい)の言葉(ことば) = words of thanks.",
     example:"A: きちんとお礼(れい)を言(い)いましたか？\nB: はい、電話(でんわ)でお礼(れい)を言(い)いました。\nA: それはいいですね。\nB: はい、とても楽(たの)しかったです。",
     exampleSrc:"A: Did you properly express your thanks?\nB: Yes, I said thank you by phone.\nA: That is nice.\nB: Yes, it was very fun.",
     funFact:"Japanese お礼(れい) culture is multi-layered: immediate thanks, follow-up thank-you (お礼状(れいじょう), thank-you letter), and reciprocal gift (お返(かえ)し). Not following through on all three levels can be seen as lacking in social awareness. Business thank-you emails are sent within 24 hours."},

    {type:"teach", trg:"記念品(きねんひん)", src:"commemorative item / souvenir / memento", pos:"noun", gender:null,
     note:"記念(きねん) (commemoration) + 品(ひん) (item).\n卒業(そつぎょう)記念品(きねんひん) = graduation memento.",
     example:"A: 卒業(そつぎょう)記念品(きねんひん)としてフォトブックをもらいました。\nB: いい思(おも)い出(で)になりますね。\nA: そうですか。よかったですね。\nB: はい、いい経験(けいけん)でした。",
     exampleSrc:"A: I received a photo book as a graduation memento.\nB: It will be a nice memory.\nA: Is that so? That is good.\nB: Yes, it was a good experience.",
     funFact:"記念品(きねんひん) are given at weddings (引(ひ)き出物(でもの)), retirements (退職(たいしょく)記念品(きねんひん)), and company milestones (創立(そうりつ)記念品(きねんひん)). Quality matters: cheap 記念品(きねんひん) reflect poorly on the giver. Common choices: branded tableware, premium towels, and gourmet food sets."},

    {type:"fb", s:"友達(ともだち)の家(いえ)に{1}を持(も)っていきます。\n(I will bring a visiting gift to my friend's house.)", a:"手土産(てみやげ)", opts:["手土産(てみやげ)","お返(かえ)し","お中元(ちゅうげん)","記念品(きねんひん)"], sSrc:"I will bring a visiting gift to my friend's house.",
     hint:"This is a gift specifically brought when visiting someone's home."},

    {type:"teach", trg:"おすそ分(わ)け", src:"sharing a portion of something received", pos:"noun", gender:null,
     note:"すそ (hem) + 分(わ)け (divide). Sharing excess food, gifts, etc.\nLiterally: sharing the hem of your garment.",
     example:"A: りんごをたくさんもらったのでおすそ分(わ)けです。\nB: ありがとうございます。いただきます。\nA: また行(い)きたいですか？\nB: はい、ぜひ行(い)きたいです。",
     exampleSrc:"A: I received many apples, so here is a share for you.\nB: Thank you. I will have some.\nA: Do you want to go again?\nB: Yes, I definitely want to go.",
     funFact:"おすそ分(わ)け is a beautiful Japanese custom of sharing abundance. When you receive too many fruits, vegetables, or souvenirs, you おすそ分(わ)け to neighbors and friends. It strengthens community bonds. The word literally means sharing the すそ (hem/edge), implying sharing from the surplus without losing the core."},

    {type:"teach", trg:"つまらないものですが", src:"this is a small/trivial thing, but...", pos:"intj", gender:null,
     note:"Traditional humble phrase when giving a gift.\nPurposely downplays the gift's value.",
     example:"A: つまらないものですが、どうぞ。\nB: ありがとうございます。いただきます。\nA: どのくらいかかりましたか？\nB: だいたい二時間(にじかん)ぐらいです。",
     exampleSrc:"A: This is a small thing, but please accept it.\nB: Thank you. I will accept it.\nA: How long did it take?\nB: About two hours.",
     funFact:"つまらないものですが is classic Japanese modesty. You call your own gift つまらない (boring/trivial) to show humility. Younger generations increasingly find this phrase outdated and prefer おくちにあうかわかりませんが (I am not sure if it suits your taste). The cultural shift reflects changing attitudes toward false modesty."},

    {type:"match", pairs:[{trg:"お中元(ちゅうげん)",src:"mid-year gift"},{trg:"お歳暮(せいぼ)",src:"year-end gift"},{trg:"お返(かえ)し",src:"return gift"},{trg:"手土産(てみやげ)",src:"visiting gift"},{trg:"おすそ分(わ)け",src:"sharing a portion"}],
     hint:"Match each gift type with its English description."},

    {type:"mc", q:"Why is the number 4 avoided in Japanese gifts?", opts:["It sounds like the word for death (し)","It is considered unlucky in astrology","It represents loneliness","It breaks easily into pieces"], ans:"It sounds like the word for death (し)",
     hint:"This homophone avoidance also applies to hospital room numbers."},

    {type:"fb", s:"気持(きも)ちを{1}手紙(てがみ)を書(か)きました。\n(I wrote a letter with my feelings put into it.)", a:"込(こ)めて", opts:["込(こ)めて","包(つつ)んで","送(おく)って","言(い)って"], sSrc:"I wrote a letter with my feelings put into it.",
     hint:"This verb means to fill or put something (especially emotions) into something."},

    {type:"mc", q:"What is のし in gift culture?", opts:["Decorative wrapping paper with ornamental cord","A type of bow","A thank-you card","A receipt for the gift"], ans:"Decorative wrapping paper with ornamental cord",
     hint:"Different styles indicate celebrations versus condolences."}
  ,{type:"match",pairs:[{trg:"贈(おく)り物(もの)",src:"gift / present"},{trg:"のし",src:"decorative gift wrapping paper"},{trg:"包(つつ)む",src:"to wrap"},{trg:"気持(きも)ちを込(こ)める",src:"to put one's feelings into"},{trg:"お礼(れい)を言(い)う",src:"to express gratitude / to say thank you"},{trg:"記念品(きねんひん)",src:"commemorative item / souvenir / memento"}]},{type:"match",pairs:[{trg:"つまらないものですが",src:"this is a small/trivial thing, but..."}]}]
};
export default BATCH8_L1;
