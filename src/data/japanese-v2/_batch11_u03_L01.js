// Batch 11 – Unit 03 (A1.1 What Is This?): Colors & Describing Objects
const BATCH11_L1 = {
  id:"jav2_u03l_b11_1", title:"いろ", icon:"🎨", xp:15, board:true,
  steps:[
    {type:"intro", title:"いろ",
     desc:"Learn to describe objects using colors. Japanese has two types of color words: native Japanese colors that act as i-adjectives, and borrowed color nouns.",
     goals:["Name the basic colors in Japanese","Use color adjectives to describe objects","Understand the difference between i-adjective and noun colors"]},

    {type:"teach", trg:"いろ", src:"color", pos:"noun", gender:null,
     note:"General word for color. なにいろ = what color?\nいろいろ = various (literally: color-color).",
     example:"A: すきないろはなんですか？\nB: あおがすきです。",
     exampleSrc:"A: What is your favorite color?\nB: I like blue.",
     funFact:"The word いろいろ (various) literally means 'color-color,' reflecting the idea that variety is colorful. Japanese traditionally had only four basic color adjectives: あか (red), あお (blue/green), しろ (white), くろ (black). All other colors are nouns."},

    {type:"teach", trg:"あかい", src:"red", pos:"adj", gender:null,
     note:"I-adjective form. As a noun: あか.\nあかい + noun: あかいくるま = red car.",
     example:"A: あかいドレスがすてきですね。\nB: ありがとう！セールでかいました。",
     exampleSrc:"A: That red dress is lovely.\nB: Thank you! I bought it on sale.",
     funFact:"Red (あか) is one of the four original color adjectives in Japanese. It symbolizes vitality and good fortune. The red circle on the Japanese flag represents the sun. あかちゃん (baby) literally means 'red thing' because newborns are pink-red."},

    {type:"teach", trg:"あおい", src:"blue / green", pos:"adj", gender:null,
     note:"I-adjective. Historically covers both blue AND green.\nTraffic lights: あおしんごう = green light.",
     example:"A: うみはあおいですね。\nB: はい、きょうはとくにきれいです。",
     exampleSrc:"A: The sea is blue, isn't it?\nB: Yes, it is especially beautiful today.",
     funFact:"Japanese traditionally did not distinguish blue from green. Traffic lights are called あおしんごう (blue signal) even though they are green. Green vegetables are あおもの (blue things). The word みどり (green) exists but is newer and less deeply rooted."},

    {type:"teach", trg:"しろい", src:"white", pos:"adj", gender:null,
     note:"I-adjective. As a noun: しろ.\nAssociated with purity and cleanliness.",
     example:"A: しろいねこがいますね。\nB: かわいいですね！",
     exampleSrc:"A: There is a white cat.\nB: It is cute!",
     funFact:"White (しろ) symbolizes purity and sacredness in Japan. Brides wear white kimonos (白無垢), and rice (白い米) is the staple food. The word しろうと (amateur) originally meant 'white person' implying innocence and inexperience."},

    {type:"teach", trg:"くろい", src:"black", pos:"adj", gender:null,
     note:"I-adjective. As a noun: くろ.\nくろい can also mean 'suspicious' in slang.",
     example:"A: くろいかばんはだれのですか？\nB: わたしのです。",
     exampleSrc:"A: Whose black bag is this?\nB: It is mine.",
     funFact:"Black (くろ) has dual symbolism. It represents elegance and formality (black suits, black lacquerware) but also secrecy. くろ in slang means 'guilty' as in あいつはくろだ (that person is guilty). The opposite しろ means 'innocent.'"},

    {type:"teach", trg:"きいろい", src:"yellow", pos:"adj", gender:null,
     note:"I-adjective. As a noun: きいろ.\nきいろいこえ = shrill voice (literally: yellow voice).",
     example:"A: きいろいはながさいています。\nB: ひまわりですね！",
     exampleSrc:"A: Yellow flowers are blooming.\nB: They are sunflowers!",
     funFact:"Yellow (きいろ) was historically the color of nobility in Japan, similar to its status in China. きいろいこえ (yellow voice) means a shrill, excited voice, typically of women or children at concerts. It is not negative but descriptive."},

    {type:"teach", trg:"みどり", src:"green", pos:"noun", gender:null,
     note:"Noun-type color. Use with の: みどりの + noun.\nみどりのひ = Greenery Day (national holiday).",
     example:"A: みどりのTシャツをください。\nB: このいろですか？",
     exampleSrc:"A: Please give me the green T-shirt.\nB: This color?",
     funFact:"みどり only became recognized as a separate color from あお relatively recently. Ancient Japanese texts use あお for what we call green. みどりのひ (Greenery Day) on May 4th celebrates nature and is part of Golden Week."},

    {type:"teach", trg:"ちゃいろい", src:"brown", pos:"adj", gender:null,
     note:"I-adjective. Literally: tea-colored (ちゃ = tea + いろ = color).\nAs a noun: ちゃいろ.",
     example:"A: ちゃいろいくつがほしいです。\nB: レザーがいいですか？",
     exampleSrc:"A: I want brown shoes.\nB: Would leather be good?",
     funFact:"Brown is literally 'tea color' in Japanese, named after the color of green tea when brewed. Many Japanese colors are named after things: ねずみいろ (mouse color = gray), さくらいろ (cherry blossom color = pink), そらいろ (sky color = light blue)."},

    {type:"teach", trg:"ピンク", src:"pink", pos:"noun", gender:null,
     note:"Loanword from English. Use with の: ピンクの + noun.\nNative alternative: ももいろ (peach color).",
     example:"A: ピンクのかさをもっていますか？\nB: はい、あります。",
     exampleSrc:"A: Do you have a pink umbrella?\nB: Yes, I do.",
     funFact:"Many modern color words in Japanese are English loanwords: ピンク, オレンジ, ベージュ, グレー. The native Japanese word for pink is ももいろ (peach color), but ピンク has become far more common in everyday speech."},

    {type:"teach", trg:"むらさき", src:"purple", pos:"noun", gender:null,
     note:"Noun-type color. Use with の: むらさきの + noun.\nHistorically, the most prestigious color.",
     example:"A: むらさきのふうせんがきれいですね。\nB: たんじょうびパーティーのかざりです。",
     exampleSrc:"A: The purple balloons are pretty.\nB: They are decorations for the birthday party.",
     funFact:"Purple (むらさき) was the most prestigious color in ancient Japan, reserved for the highest-ranking nobles. The word comes from the murasaki plant used to make purple dye. Today, むらさきいも (purple sweet potato) from Okinawa is a popular snack."},

    {type:"teach", trg:"オレンジ", src:"orange (color)", pos:"noun", gender:null,
     note:"Loanword from English. Use with の: オレンジの + noun.\nNative alternative: だいだいいろ.",
     example:"A: オレンジのジュースをください。\nB: はい、どうぞ。",
     exampleSrc:"A: Orange juice, please.\nB: Here you go.",
     funFact:"The native Japanese word for orange is だいだい, which is also a bitter orange fruit. Interestingly, だいだい also means 'generation after generation' (代々), making orange fruits a symbol of family continuity displayed at New Year."},

    // Quiz steps
    {type:"mc", q:"「あおしんごう」のいろはほんとうはなにいろですか？",
     opts:["Green","Blue","Yellow","Red"],
     ans:"Green",
     hint:"Traffic lights in Japan are called 'blue signal' even though the actual color of the light is not blue."},

    {type:"fb", s:"{1}いくるまがほしいです。",
     a:["あか"],
     opts:["あか","あかい","あかの","あかな"],
     hint:"Red as an i-adjective directly modifies the noun. Drop the い for the noun form, keep い for the adjective.",
     sSrc:"I want a red car."},

    {type:"match", pairs:[
      {trg:"しろい", src:"white"},
      {trg:"くろい", src:"black"},
      {trg:"きいろい", src:"yellow"},
      {trg:"ちゃいろい", src:"brown"}
    ]},

    {type:"mc", q:"「ちゃいろ」のちゃはなんですか？",
     opts:["Tea","Chocolate","Wood","Earth"],
     ans:"Tea",
     hint:"This color is literally named after a Japanese beverage. Think about what ちゃ means."},

    {type:"fb", s:"{1}のTシャツをください。",
     a:["みどり"],
     opts:["みどり","みどりい","みどりの","みどりな"],
     hint:"Green is a noun-type color, so it connects to the next noun with の. The answer is just the color word itself.",
     sSrc:"Please give me the green T-shirt."},

    {type:"mc", q:"むかし、にほんでもっともこうきなひとのいろはなんでしたか？",
     opts:["Purple","Gold","Red","White"],
     ans:"Purple",
     hint:"This color was reserved for the highest-ranking nobles in ancient Japan. Think about which color had the most prestige."}
  ]
};
export default BATCH11_L1;
