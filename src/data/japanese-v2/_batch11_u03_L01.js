// Batch 11 – Unit 03 (A1.1 What Is This?): Colors & Describing Objects
const BATCH11_L1 = {
  id:"jav2_u03l_b11_1", title:"色(いろ)", icon:"🎨", xp:15, board:true,
  steps:[
    {type:"intro", title:"色(いろ)",
     desc:"Learn to describe objects using colors. Japanese has two types of color words: native Japanese colors that act as i-adjectives, and borrowed color nouns.",
     goals:["Name the basic colors in Japanese","Use color adjectives to describe objects","Understand the difference between i-adjective and noun colors"]},

    {type:"teach", trg:"色(いろ)", src:"color", pos:"noun", gender:null,
     note:"General word for color. なに色(いろ) = what color?\nいろいろ = various (literally: color-color).",
     example:"A: 好(す)きな色(いろ)はなんですか？\nB: 青(あお)が好(す)きです。",
     exampleSrc:"A: What is your favorite color?\nB: I like blue.",
     funFact:"The word いろいろ (various) literally means 'color-color,' reflecting the idea that variety is colorful. Japanese traditionally had only four basic color adjectives: 赤(あか) (red), 青(あお) (blue/green), 白(しろ) (white), 黒(くろ) (black). All other colors are nouns."},

    {type:"teach", trg:"赤(あか)い", src:"red", pos:"adj", gender:null,
     note:"I-adjective form. As a noun: 赤(あか).\n赤(あか)い + noun: 赤(あか)い車(くるま) = red car.",
     example:"A: 赤(あか)いドレスがすてきですね。\nB: ありがとう！セールで買(か)いました。",
     exampleSrc:"A: That red dress is lovely.\nB: Thank you! I bought it on sale.",
     funFact:"Red (赤(あか)) is one of the four original color adjectives in Japanese. It symbolizes vitality and good fortune. The red circle on the Japanese flag represents the sun. 赤(あか)ちゃん (baby) literally means 'red thing' because newborns are pink-red."},

    {type:"teach", trg:"青(あお)い", src:"blue / green", pos:"adj", gender:null,
     note:"I-adjective. Historically covers both blue AND green.\nTraffic lights: 青(あお)信号(しんごう) = green light.",
     example:"A: 海(うみ)は青(あお)いですね。\nB: はい、今日(きょう)は特(とく)にきれいです。",
     exampleSrc:"A: The sea is blue, isn't it?\nB: Yes, it is especially beautiful today.",
     funFact:"Japanese traditionally did not distinguish blue from green. Traffic lights are called 青(あお)信号(しんごう) (blue signal) even though they are green. 緑(みどり)の野菜(やさい) is sometimes called 青物(あおもの) (blue things). The word 緑(みどり) (green) exists but is newer and less deeply rooted."},

    {type:"teach", trg:"白(しろ)い", src:"white", pos:"adj", gender:null,
     note:"I-adjective. As a noun: 白(しろ).\nAssociated with purity and cleanliness.",
     example:"A: 白(しろ)い猫(ねこ)がいますね。\nB: かわいいですね！",
     exampleSrc:"A: There is a white cat.\nB: It is cute!",
     funFact:"White (白(しろ)) symbolizes purity and sacredness in Japan. Brides wear white kimonos (白無垢), and rice (白(しろ)いお米(こめ)) is the staple food. The word 素人(しろうと) (amateur) originally meant 'white person' implying innocence and inexperience."},

    {type:"teach", trg:"黒(くろ)い", src:"black", pos:"adj", gender:null,
     note:"I-adjective. As a noun: 黒(くろ).\n黒(くろ)い can also mean 'suspicious' in slang.",
     example:"A: 黒(くろ)いかばんはだれのですか？\nB: 私(わたし)のです。",
     exampleSrc:"A: Whose black bag is this?\nB: It is mine.",
     funFact:"Black (黒(くろ)) has dual symbolism. It represents elegance and formality (black suits, black lacquerware) but also secrecy. 黒(くろ) in slang means 'guilty' as in あいつは黒(くろ)だ (that person is guilty). The opposite 白(しろ) means 'innocent.'"},

    {type:"teach", trg:"黄色(きいろ)い", src:"yellow", pos:"adj", gender:null,
     note:"I-adjective. As a noun: 黄色(きいろ).\n黄色(きいろ)い声(こえ) = shrill voice (literally: yellow voice).",
     example:"A: 黄色(きいろ)い花(はな)が咲(さ)いています。\nB: ひまわりですね！",
     exampleSrc:"A: Yellow flowers are blooming.\nB: They are sunflowers!",
     funFact:"Yellow (黄色(きいろ)) was historically the color of nobility in Japan, similar to its status in China. 黄色(きいろ)い声(こえ) (yellow voice) means a shrill, excited voice, typically of women or children at concerts. It is not negative but descriptive."},

    {type:"teach", trg:"緑(みどり)", src:"green", pos:"noun", gender:null,
     note:"Noun-type color. Use with の: 緑(みどり)の + noun.\n緑(みどり)の日(ひ) = Greenery Day (national holiday).",
     example:"A: 緑(みどり)のTシャツをください。\nB: この色(いろ)ですか？",
     exampleSrc:"A: Please give me the green T-shirt.\nB: This color?",
     funFact:"緑(みどり) only became recognized as a separate color from 青(あお) relatively recently. Ancient Japanese texts use 青(あお) for what we call green. 緑(みどり)の日(ひ) (Greenery Day) on May 4th celebrates nature and is part of Golden Week."},

    {type:"teach", trg:"茶色(ちゃいろ)い", src:"brown", pos:"adj", gender:null,
     note:"I-adjective. Literally: tea-colored (茶(ちゃ) = tea + 色(いろ) = color).\nAs a noun: 茶色(ちゃいろ).",
     example:"A: 茶色(ちゃいろ)い靴(くつ)がほしいです。\nB: レザーがいいですか？",
     exampleSrc:"A: I want brown shoes.\nB: Would leather be good?",
     funFact:"Brown is literally 'tea color' in Japanese, named after the color of green tea when brewed. Many Japanese colors are named after things: ねずみ色(いろ) (mouse color = gray), 桜色(さくらいろ) (cherry blossom color = pink), 空色(そらいろ) (sky color = light blue)."},

    {type:"teach", trg:"ピンク", src:"pink", pos:"noun", gender:null,
     note:"Loanword from English. Use with の: ピンクの + noun.\nNative alternative: 桃色(ももいろ) (peach color).",
     example:"A: ピンクのかさをもっていますか？\nB: はい、あります。",
     exampleSrc:"A: Do you have a pink umbrella?\nB: Yes, I do.",
     funFact:"Many modern color words in Japanese are English loanwords: ピンク, オレンジ, ベージュ, グレー. The native Japanese word for pink is 桃色(ももいろ) (peach color), but ピンク has become far more common in everyday speech."},

    {type:"teach", trg:"紫(むらさき)", src:"purple", pos:"noun", gender:null,
     note:"Noun-type color. Use with の: 紫(むらさき)の + noun.\nHistorically, the most prestigious color.",
     example:"A: 紫(むらさき)の風船(ふうせん)がきれいですね。\nB: 誕生日(たんじょうび)パーティーの飾(かざ)りです。",
     exampleSrc:"A: The purple balloons are pretty.\nB: They are decorations for the birthday party.",
     funFact:"Purple (紫(むらさき)) was the most prestigious color in ancient Japan, reserved for the highest-ranking nobles. The word comes from the murasaki plant used to make purple dye. Today, 紫芋(むらさきいも) (purple sweet potato) from Okinawa is a popular snack."},

    {type:"teach", trg:"オレンジ", src:"orange (color)", pos:"noun", gender:null,
     note:"Loanword from English. Use with の: オレンジの + noun.\nNative alternative: 橙色(だいだいいろ).",
     example:"A: オレンジのジュースをください。\nB: はい、どうぞ。",
     exampleSrc:"A: Orange juice, please.\nB: Here you go.",
     funFact:"The native Japanese word for orange is だいだい, which is also a bitter orange fruit. Interestingly, 代々(だいだい) also means 'generation after generation,' making orange fruits a symbol of family continuity displayed at New Year."},

    // Quiz steps
    {type:"mc", q:"「青(あお)信号(しんごう)」の色(いろ)はほんとうはなに色(いろ)ですか？",
     opts:["Green","Blue","Yellow","Red"],
     ans:"Green",
     hint:"Traffic lights in Japan are called 'blue signal' even though the actual color of the light is not blue."},

    {type:"fb", s:"{1}い車(くるま)がほしいです。",
     a:["赤(あか)"],
     opts:["赤(あか)","赤(あか)い","赤(あか)の","赤(あか)な"],
     hint:"Red as an i-adjective directly modifies the noun. Drop the い for the noun form, keep い for the adjective.",
     sSrc:"I want a red car."},

    {type:"match", pairs:[
      {trg:"白(しろ)い", src:"white"},
      {trg:"黒(くろ)い", src:"black"},
      {trg:"黄色(きいろ)い", src:"yellow"},
      {trg:"茶色(ちゃいろ)い", src:"brown"}
    ]},

    {type:"mc", q:"「茶色(ちゃいろ)」の茶(ちゃ)はなんですか？",
     opts:["Tea","Chocolate","Wood","Earth"],
     ans:"Tea",
     hint:"This color is literally named after a Japanese beverage. Think about what 茶(ちゃ) means."},

    {type:"fb", s:"{1}のTシャツをください。",
     a:["緑(みどり)"],
     opts:["緑(みどり)","緑(みどり)い","緑(みどり)の","緑(みどり)な"],
     hint:"Green is a noun-type color, so it connects to the next noun with の. The answer is just the color word itself.",
     sSrc:"Please give me the green T-shirt."},

    {type:"mc", q:"むかし、日本(にほん)でもっとも高貴(こうき)な人(ひと)の色(いろ)はなんでしたか？",
     opts:["Purple","Gold","Red","White"],
     ans:"Purple",
     hint:"This color was reserved for the highest-ranking nobles in ancient Japan. Think about which color had the most prestige."}
  ]
};
export default BATCH11_L1;
