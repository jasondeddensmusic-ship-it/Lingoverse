// Batch 6 – Unit 22 (B1.2 Giving & Receiving): Gift Culture & Seasonal Customs
const BATCH6_L1 = {
  id:"jav2_u22l_b6_1", title:"おくりものぶんか", icon:"🎁", xp:15, board:true,
  steps:[
    {type:"intro", title:"おくりものぶんか",
     desc:"Explore Japanese gift-giving culture and seasonal customs. Gift exchange is deeply embedded in social relationships, with specific vocabulary for different occasions and levels of formality.",
     goals:["Use gift-giving vocabulary for various occasions","Understand seasonal gift customs: おちゅうげん, おせいぼ","Express gratitude and reciprocity in gift contexts"]},

    {type:"teach", trg:"おくりもの", src:"gift / present", pos:"noun", gender:null,
     note:"Kanji: 贈り物. From おくる (to send/give).\nプレゼント = present (casual loanword).",
     example:"A: なにかおくりものをもっていったほうがいいですか？\nB: はい、おかしかくだものがいいとおもいます。",
     exampleSrc:"A: Should I bring some kind of gift?\nB: Yes, I think sweets or fruit would be good.",
     funFact:"Japanese gift culture (贈答文化) has strict etiquette. Gifts are wrapped beautifully and often come in department store bags (which signal quality). You should present gifts with both hands and say つまらないものですが (this is a trifling thing), a humble phrase that downplays the gift's value."},

    {type:"teach", trg:"おちゅうげん", src:"mid-year gift", pos:"noun", gender:null,
     note:"Kanji: お中元. Given in July to express gratitude.\nSent to bosses, teachers, and benefactors.",
     example:"A: おちゅうげんはもうおくりましたか？\nB: はい、きのうデパートからおくりました。",
     exampleSrc:"A: Have you sent your mid-year gifts yet?\nB: Yes, I sent them from the department store yesterday.",
     funFact:"おちゅうげん (お中元) originated from a Chinese Taoist festival (中元). In Japan it became a summer gift-giving season (July). Popular gifts: beer, fruit, sweets, ham. Department stores set up special おちゅうげん floors. The custom is declining among younger generations but remains strong in business."},

    {type:"teach", trg:"おせいぼ", src:"year-end gift", pos:"noun", gender:null,
     note:"Kanji: お歳暮. Given in December to thank people for the year.\nPartner to おちゅうげん.",
     example:"A: おせいぼのきせつですね。\nB: そうですね。ことしはなにをおくりましょうか。",
     exampleSrc:"A: It is the year-end gift season.\nB: Yes. What shall we send this year?",
     funFact:"おせいぼ (お歳暮) marks the end of the year with gratitude gifts. 歳 (year) + 暮 (end/dusk) = year's end. The gift amount reflects the relationship's importance: typically 3,000 to 10,000 yen. Receiving おせいぼ creates an obligation (おかえし) to reciprocate, maintaining the cycle of social bonds."},

    {type:"teach", trg:"おかえし", src:"return gift / reciprocal gift", pos:"noun", gender:null,
     note:"From かえす (to return). おかえしをする = to give a return gift.\nTypically half the value of the original.",
     example:"A: おいわいをいただいたのでおかえしをしなくては。\nB: はんがえし (half return) がいっぱんてきですよ。",
     exampleSrc:"A: I received a congratulatory gift so I must give a return gift.\nB: Half the value is the general custom.",
     funFact:"おかえし culture ensures no one is left feeling indebted. Wedding guests receive ひきでもの (return gifts). Hospital visitors receive おみまいがえし (get-well return gifts). The balance of giving and returning maintains social harmony (わ). はんがえし (half return) is the standard: return approximately half the gift's value."},

    {type:"teach", trg:"つつむ", src:"to wrap", pos:"verb", gender:null,
     note:"Group 1 verb. プレゼントをつつむ = to wrap a present.\nKanji: 包む. ほうそう = wrapping.",
     example:"A: プレゼントをつつんでもらえますか？\nB: はい、リボンはおつけしますか？",
     exampleSrc:"A: Could you wrap this present?\nB: Yes, shall I add a ribbon?",
     funFact:"Gift wrapping (包装, ほうそう) in Japan is an art form. Department store staff wrap with precision and speed. Traditional ふろしき (wrapping cloths) are reusable and eco-friendly. The way a gift is つつまれた (wrapped) matters as much as the contents. Sloppy wrapping signals disrespect."},

    {type:"mc", q:"おかえし is:", opts:["A return gift given to reciprocate","A birthday present","A mid-year gift","A souvenir"], ans:"A return gift given to reciprocate",
     hint:"This g... is g... in response to receiving a g..., maintaining social balance."},

    {type:"teach", trg:"おみやげ", src:"souvenir / local specialty gift", pos:"noun", gender:null,
     note:"Kanji: お土産. Essential to buy when traveling.\nBrought back for family, friends, and coworkers.",
     example:"A: きょうとのおみやげをかってきました。\nB: ありがとうございます。やつはしですか？",
     exampleSrc:"A: I bought Kyoto souvenirs.\nB: Thank you. Is it yatsuhashi?",
     funFact:"おみやげ culture is uniquely Japanese. When you travel, you MUST bring back おみやげ for coworkers, friends, and family. Every tourist destination has めいぶつ (famous local products). Train station gift shops (おみやげコーナー) cater to this. Forgetting おみやげ is a minor social transgression."},

    {type:"teach", trg:"のし", src:"decorative gift wrapping paper / gift marker", pos:"noun", gender:null,
     note:"Kanji: 熨斗. The formal gift wrapper with ミズヒキ (ornamental cord).\nUsed for formal occasions.",
     example:"A: のしはおつけしますか？\nB: はい、おいわいようでおねがいします。",
     exampleSrc:"A: Shall I add formal gift wrapping?\nB: Yes, for a celebration please.",
     funFact:"のし (熨斗) is the traditional Japanese gift-wrapping system. It includes a special paper with みずひき (red and white cords for celebrations, black and white for condolences). The type of のし signals the occasion: 蝶結び (butterfly knot) for repeatable events, 結び切り (firm knot) for once-in-a-lifetime events like weddings."},

    {type:"teach", trg:"おいわい", src:"celebration / congratulatory gift", pos:"noun", gender:null,
     note:"Kanji: お祝い. From いわう (to celebrate).\nおいわいをあげる = to give a congratulatory gift.",
     example:"A: けっこんのおいわいはなにがいいですか？\nB: さいきんはカタログギフトがにんきです。",
     exampleSrc:"A: What is a good wedding gift?\nB: Catalogue gifts are popular recently.",
     funFact:"おいわい amounts follow cultural norms. Wedding ご祝儀 (ごしゅうぎ, monetary gift) is typically 30,000 yen from friends. The amount must be an odd number (even numbers can be divided, symbolizing separation). Avoid 4 (し, death) and 9 (く, suffering). These numerical taboos are strictly observed."},

    {type:"teach", trg:"きもち", src:"feeling / sentiment / thought", pos:"noun", gender:null,
     note:"Kanji: 気持ち. きもちがいい = feels good.\nきもちです = it is the thought that counts.",
     example:"A: きもちだけでうれしいです。\nB: そういってもらえるとうれしいです。",
     exampleSrc:"A: Just the thought makes me happy.\nB: Hearing you say that makes me happy.",
     funFact:"きもち is one of the most frequently used words in emotional Japanese. きもちがいい (feels good), きもちわるい (feels bad/disgusting), きもちをこめる (put one's heart into). In gift culture, きもちです (it is my sentiment) accompanies gifts, emphasizing the emotional intent over monetary value."},

    {type:"fb", s:"りょこうの{1}をかってきました。\n(I bought travel souvenirs.)", a:"おみやげ", opts:["おみやげ","おかえし","おいわい","おちゅうげん"], sSrc:"I bought travel souvenirs.",
     hint:"The word for local specialty gifts you bring back from trips."},

    {type:"teach", trg:"つまらないものですが", src:"this is a trifling thing, but... (humble gift phrase)", pos:"intj", gender:null,
     note:"Said when presenting a gift. Humble self-deprecation.\nSome people now say ほんのきもちですが (just a small sentiment).",
     example:"A: つまらないものですが、どうぞ。\nB: ありがとうございます。おきづかいなく。",
     exampleSrc:"A: This is nothing special, but please accept it.\nB: Thank you. You shouldn't have.",
     funFact:"つまらないものですが is classic Japanese humility. You call your carefully chosen gift 'boring/trifling.' Younger generations find this too self-deprecating and prefer ほんのきもちですが (just a small token of my feelings) or おくちにあうかわかりませんが (I hope it suits your taste). The evolution of gift language reflects changing social values."},

    {type:"mc", q:"おちゅうげん is given:", opts:["In summer to express gratitude","At New Year","On birthdays","At weddings"], ans:"In summer to express gratitude",
     hint:"This seasonal gift is part of the mid-year gift-giving tradition in July."},

    {type:"match", pairs:[
      {trg:"おくりもの", src:"gift / present"},
      {trg:"おみやげ", src:"souvenir"},
      {trg:"おかえし", src:"return gift"},
      {trg:"おいわい", src:"celebration gift"},
      {trg:"つつむ", src:"to wrap"}
    ]},

    {type:"fb", s:"プレゼントを{1}でもらえますか？\n(Could you wrap this present?)", a:"つつん", opts:["つつん","つくっ","おくっ","かっ"], sSrc:"Could you wrap this present?",
     hint:"The て-form of the verb meaning to wrap."},

    {type:"mc", q:"つまらないものですが expresses:", opts:["Humble self-deprecation when giving a gift","Disappointment with a gift received","A request for better wrapping","Dislike of the gift"], ans:"Humble self-deprecation when giving a gift",
     hint:"Japanese culture values modesty when presenting gifts to others."}
  ]
};
export default BATCH6_L1;
