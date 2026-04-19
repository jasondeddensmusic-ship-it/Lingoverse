// Batch 6 – Unit 22 (B1.2 Giving & Receiving): Gift Culture & Seasonal Customs
const BATCH6_L1 = {
  id:"jav2_u22l_b6_1", title:"贈(おく)り物(もの)文化(ぶんか)", icon:"🎁", xp:15, board:true,
  steps:[
    {type:"intro", title:"贈(おく)り物(もの)文化(ぶんか)",
     desc:"Explore Japanese gift-giving culture and seasonal customs. Gift exchange is deeply embedded in social relationships, with specific vocabulary for different occasions and levels of formality.",
     goals:["Use gift-giving vocabulary for various occasions","Understand seasonal gift customs: おちゅうげん, おせいぼ","Express gratitude and reciprocity in gift contexts"]},

    {type:"teach", trg:"贈(おく)り物(もの)", src:"gift / present", pos:"noun", gender:null,
     note:"From 贈(おく)る (to send/give).\nプレゼント = present (casual loanword).",
     example:"A: 何(なに)か贈(おく)り物(もの)を持(も)っていったほうがいいですか？\nB: はい、お菓子(かし)か果物(くだもの)がいいと思(おも)います。\nA: おすすめですか？\nB: はい、ぜひ試(ため)してみてください。",
     exampleSrc:"A: Should I bring some kind of gift?\nB: Yes, I think sweets or fruit would be good.\nA: Do you recommend it?\nB: Yes, please try it.",
     funFact:"Japanese gift culture (贈答文化(ぞうとうぶんか)) has strict etiquette. Gifts are wrapped beautifully and often come in department store bags (which signal quality). You should present gifts with both hands and say つまらないものですが (this is a trifling thing), a humble phrase that downplays the gift's value."},

    {type:"teach", trg:"お中元(ちゅうげん)", src:"mid-year gift", pos:"noun", gender:null,
     note:"Given in July to express gratitude.\nSent to bosses, teachers, and benefactors.",
     example:"A: お中元(ちゅうげん)はもう送(おく)りましたか？\nB: はい、昨日(きのう)デパートから送(おく)りました。\nA: 一緒(いっしょ)に行(い)きませんか？\nB: いいですね。行(い)きましょう。",
     exampleSrc:"A: Have you sent your mid-year gifts yet?\nB: Yes, I sent them from the department store yesterday.\nA: Shall we go together?\nB: That sounds good. Let's go.",
     funFact:"お中元(ちゅうげん) originated from a Chinese Taoist festival (中元). In Japan it became a summer gift-giving season (July). Popular gifts: beer, fruit, sweets, ham. Department stores set up special お中元(ちゅうげん) floors. The custom is declining among younger generations but remains strong in business."},

    {type:"teach", trg:"お歳暮(せいぼ)", src:"year-end gift", pos:"noun", gender:null,
     note:"Given in December to thank people for the year.\nPartner to お中元(ちゅうげん).",
     example:"A: お歳暮(せいぼ)の季節(きせつ)ですね。\nB: そうですね。今年(ことし)は何(なに)を送(おく)りましょうか。\nA: どこがおすすめですか？\nB: 京都(きょうと)がおすすめです。",
     exampleSrc:"A: It is the year-end gift season.\nB: Yes. What shall we send this year?\nA: Where do you recommend?\nB: I recommend Kyoto.",
     funFact:"お歳暮(せいぼ) marks the end of the year with gratitude gifts. 歳 (year) + 暮 (end/dusk) = year's end. The gift amount reflects the relationship's importance: typically 3,000 to 10,000 yen. Receiving お歳暮(せいぼ) creates an obligation (お返(かえ)し) to reciprocate, maintaining the cycle of social bonds."},

    {type:"teach", trg:"お返(かえ)し", src:"return gift / reciprocal gift", pos:"noun", gender:null,
     note:"From 返(かえ)す (to return). お返(かえ)しをする = to give a return gift.\nTypically half the value of the original.",
     example:"A: お祝(いわ)いをいただいたのでお返(かえ)しをしなくては。\nB: 半返(はんがえ)し (half return) が一般的(いっぱんてき)ですよ。\nA: 何(なに)が一番(いちばん)良(よ)かったですか？\nB: 食(た)べ物(もの)が一番(いちばん)おいしかったです。",
     exampleSrc:"A: I received a congratulatory gift so I must give a return gift.\nB: Half the value is the general custom.\nA: What was the best part?\nB: The food was the most delicious.",
     funFact:"お返(かえ)し culture ensures no one is left feeling indebted. Wedding guests receive 引き出物(ひきでもの) (return gifts). Hospital visitors receive お見舞(みま)い返(がえ)し (get-well return gifts). The balance of giving and returning maintains social harmony (和(わ)). 半返(はんがえ)し (half return) is the standard: return approximately half the gift's value."},

    {type:"teach", trg:"包(つつ)む", src:"to wrap", pos:"verb", gender:null,
     note:"Group 1 verb. プレゼントを包(つつ)む = to wrap a present.\n包装(ほうそう) = wrapping.",
     example:"A: プレゼントを包(つつ)んでもらえますか？\nB: はい、リボンはお付(つ)けしますか？\nA: よく行(い)きますか？\nB: 月(つき)に一回(いっかい)ぐらい行(い)きます。",
     exampleSrc:"A: Could you wrap this present?\nB: Yes, shall I add a ribbon?\nA: Do you go often?\nB: I go about once a month.",
     funFact:"Gift wrapping (包装(ほうそう)) in Japan is an art form. Department store staff wrap with precision and speed. Traditional 風呂敷(ふろしき) (wrapping cloths) are reusable and eco-friendly. The way a gift is 包(つつ)まれた (wrapped) matters as much as the contents. Sloppy wrapping signals disrespect."},

    {type:"mc", q:"お返(かえ)し is:", opts:["A return gift given to reciprocate","A birthday present","A mid-year gift","A souvenir"], ans:"A return gift given to reciprocate",
     hint:"This g... is g... in response to receiving a g..., maintaining social balance."},

    {type:"teach", trg:"お土産(みやげ)", src:"souvenir / local specialty gift", pos:"noun", gender:null,
     note:"Essential to buy when traveling.\nBrought back for family, friends, and coworkers.",
     example:"A: 京都(きょうと)のお土産(みやげ)を買(か)ってきました。\nB: ありがとうございます。八橋(やつはし)ですか？\nA: 誰(だれ)と行(い)きましたか？\nB: 友達(ともだち)と一緒(いっしょ)に行(い)きました。",
     exampleSrc:"A: I bought Kyoto souvenirs.\nB: Thank you. Is it yatsuhashi?\nA: Who did you go with?\nB: I went with a friend.",
     funFact:"お土産(みやげ) culture is uniquely Japanese. When you travel, you MUST bring back お土産(みやげ) for coworkers, friends, and family. Every tourist destination has 名物(めいぶつ) (famous local products). Train station gift shops (お土産(みやげ)コーナー) cater to this. Forgetting お土産(みやげ) is a minor social transgression."},

    {type:"teach", trg:"熨斗(のし)", src:"decorative gift wrapping paper / gift marker", pos:"noun", gender:null,
     note:"The formal gift wrapper with 水引(みずひき) (ornamental cord).\nUsed for formal occasions.",
     example:"A: 熨斗(のし)はお付(つ)けしますか？\nB: はい、お祝(いわ)い用(よう)でお願(ねが)いします。\nA: それは大変(たいへん)でしたね。\nB: はい、でもいい勉強(べんきょう)になりました。",
     exampleSrc:"A: Shall I add formal gift wrapping?\nB: Yes, for a celebration please.\nA: That must have been tough.\nB: Yes, but it was a good learning experience.",
     funFact:"熨斗(のし) is the traditional Japanese gift-wrapping system. It includes a special paper with 水引(みずひき) (red and white cords for celebrations, black and white for condolences). The type of 熨斗(のし) signals the occasion: 蝶結(ちょうむす)び (butterfly knot) for repeatable events, 結(むす)び切(き)り (firm knot) for once-in-a-lifetime events like weddings."},

    {type:"teach", trg:"お祝(いわ)い", src:"celebration / congratulatory gift", pos:"noun", gender:null,
     note:"From 祝(いわ)う (to celebrate).\nお祝(いわ)いをあげる = to give a congratulatory gift.",
     example:"A: 結婚(けっこん)のお祝(いわ)いは何(なに)がいいですか？\nB: 最近(さいきん)はカタログギフトが人気(にんき)です。\nA: 本当(ほんとう)ですか？すごいですね。\nB: ありがとうございます。頑張(がんば)りました。",
     exampleSrc:"A: What is a good wedding gift?\nB: Catalogue gifts are popular recently.\nA: Really? That is amazing.\nB: Thank you. I worked hard.",
     funFact:"お祝(いわ)い amounts follow cultural norms. Wedding ご祝儀(しゅうぎ) (monetary gift) is typically 30,000 yen from friends. The amount must be an odd number (even numbers can be divided, symbolizing separation). Avoid 4 (し, death) and 9 (く, suffering). These numerical taboos are strictly observed."},

    {type:"teach", trg:"気持(きも)ち", src:"feeling / sentiment / thought", pos:"noun", gender:null,
     note:"気持(きも)ちがいい = feels good.\n気持(きも)ちです = it is the thought that counts.",
     example:"A: 気持(きも)ちだけでうれしいです。\nB: そういってもらえるとうれしいです。\nA: 私(わたし)も興味(きょうみ)があります。\nB: じゃあ、今度(こんど)一緒(いっしょ)にどうですか？",
     exampleSrc:"A: Just the thought makes me happy.\nB: Hearing you say that makes me happy.\nA: I am also interested.\nB: Then, how about doing it together next time?",
     funFact:"気持(きも)ち is one of the most frequently used words in emotional Japanese. 気持(きも)ちがいい (feels good), 気持(きも)ち悪(わる)い (feels bad/disgusting), 気持(きも)ちをこめる (put one's heart into). In gift culture, 気持(きも)ちです (it is my sentiment) accompanies gifts, emphasizing the emotional intent over monetary value."},

    {type:"fb", s:"旅行(りょこう)の{1}を買(か)ってきました。\n(I bought travel souvenirs.)", a:"おみやげ", opts:["おみやげ","おかえし","おいわい","おちゅうげん"], sSrc:"I bought travel souvenirs.",
     hint:"The word for local specialty gifts you bring back from trips."},

    {type:"teach", trg:"つまらないものですが", src:"this is a trifling thing, but... (humble gift phrase)", pos:"intj", gender:null,
     note:"Said when presenting a gift. Humble self-deprecation.\nSome people now say ほんの気持(きも)ちですが (just a small sentiment).",
     example:"A: つまらないものですが、どうぞ。\nB: ありがとうございます。お気遣(きづか)いなく。\nA: どんな感(かん)じでしたか？\nB: 想像(そうぞう)していたよりずっと良(よ)かったです。",
     exampleSrc:"A: This is nothing special, but please accept it.\nB: Thank you. You shouldn't have.\nA: What was it like?\nB: It was much better than I imagined.",
     funFact:"つまらないものですが is classic Japanese humility. You call your carefully chosen gift 'boring/trifling.' Younger generations find this too self-deprecating and prefer ほんの気持(きも)ちですが (just a small token of my feelings) or お口(くち)に合(あ)うかわかりませんが (I hope it suits your taste). The evolution of gift language reflects changing social values."},

    {type:"mc", q:"お中元(ちゅうげん) is given:", opts:["In summer to express gratitude","At New Year","On birthdays","At weddings"], ans:"In summer to express gratitude",
     hint:"This seasonal gift is part of the mid-year gift-giving tradition in July."},

    {type:"match", pairs:[
      {trg:"贈(おく)り物(もの)", src:"gift / present"},
      {trg:"お土産(みやげ)", src:"souvenir"},
      {trg:"お返(かえ)し", src:"return gift"},
      {trg:"お祝(いわ)い", src:"celebration gift"},
      {trg:"包(つつ)む", src:"to wrap"}
    ]},

    {type:"fb", s:"プレゼントを{1}でもらえますか？\n(Could you wrap this present?)", a:"つつん", opts:["つつん","つくっ","おくっ","かっ"], sSrc:"Could you wrap this present?",
     hint:"The て-form of the verb meaning to wrap."},

    {type:"mc", q:"つまらないものですが expresses:", opts:["Humble self-deprecation when giving a gift","Disappointment with a gift received","A request for better wrapping","Dislike of the gift"], ans:"Humble self-deprecation when giving a gift",
     hint:"Japanese culture values modesty when presenting gifts to others."}
  ,{type:"match",pairs:[{trg:"お中元(ちゅうげん)",src:"mid-year gift"},{trg:"お歳暮(せいぼ)",src:"year-end gift"},{trg:"熨斗(のし)",src:"decorative gift wrapping paper / gift marker"},{trg:"気持(きも)ち",src:"feeling / sentiment / thought"},{trg:"つまらないものですが",src:"this is a trifling thing, but... (humble gift phrase)"}]},
  {type:"fb", s:"プレゼントを綺麗(きれい)な紙(かみ)で{1}ました。", a:["包(つつ)む"], opts:["包(つつ)む","贈(おく)り物(もの)","お返(かえ)し","お中元(ちゅうげん)"], hint:"The verb for enclosing a gift in paper or cloth.", sSrc:"I {1} the present in beautiful paper."}
]
};
export default BATCH6_L1;
