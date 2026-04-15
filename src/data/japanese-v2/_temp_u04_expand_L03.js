// Unit 04 Expansion L05. More Colors & Describing Appearance
const LESSON_5 = {
  id:"jav2_u4l5", title:"いろいろないろ", icon:"🎨", xp:15, board:true,
  steps:[
    {type:"intro", title:"いろいろないろ",
     desc:"Learn additional colors and how to describe the appearance of objects in more detail. You will combine colors with adjectives to paint vivid pictures with words.",
     goals:["Name additional colors beyond the basic six","Describe objects with multiple adjectives","Understand the iro (color) compound pattern"]},

    {type:"teach", trg:"いろ", src:"color", pos:"noun", gender:null,
     note:"General word for color. Pattern: なにいろ (what color?).\nKanji: 色.",
     example:"A: なにいろがすきですか？\nB: あおがすきです。",
     exampleSrc:"A: What color do you like?\nB: I like blue.",
     funFact:"色 means both 'color' and, in classical Japanese, 'romance/sensuality.' Iroke (色気) means sex appeal. The Hyakunin Isshu (100 Poems) opens with a poem about the impermanence of color/beauty. This double meaning runs deep in Japanese culture."},

    {type:"teach", trg:"ちゃいろ", src:"brown", pos:"noun", gender:null,
     note:"Tea-color. Cha (tea) + iro (color). As an adjective: ちゃいろい.\nKanji: 茶色.",
     example:"A: ちゃいろいくつがほしいです。\nB: あそこにありますよ。",
     exampleSrc:"A: I want brown shoes.\nB: There are some over there.",
     funFact:"Brown is literally 'tea color' because Japanese green tea, when brewed strong or aged, turns brown. Many Japanese compound colors use this pattern: mizuiro (water-color = light blue), momoiro (peach-color = pink), haiiro (ash-color = gray)."},

    {type:"teach", trg:"ピンク", src:"pink", pos:"noun", gender:null,
     note:"Loanword from English. Written in katakana.\nTraditional Japanese: もも色 (momoiro, peach-color).",
     example:"A: ピンクのかさがかわいいですね。\nB: にほんではさくらのいろですね。",
     exampleSrc:"A: The pink umbrella is cute.\nB: In Japan, it's the color of cherry blossoms.",
     funFact:"Pink in Japan is strongly associated with cherry blossoms (sakura). The traditional word momoiro (peach color) is gentler and more poetic. Marketing in Japan uses pink heavily for spring products, girls' items, and kawaii (cute) branding."},

    {type:"teach", trg:"むらさき", src:"purple", pos:"noun", gender:null,
     note:"Historically the color of royalty and highest rank in Japan.\nKanji: 紫.",
     example:"A: むらさきのふくはありますか？\nB: はい、こちらにあります。",
     exampleSrc:"A: Do you have purple clothes?\nB: Yes, we have some here.",
     funFact:"Purple was the most prestigious color in ancient Japan, reserved for the highest court rank. Murasaki Shikibu, author of The Tale of Genji (the world's first novel), took her pen name from this noble color. Purple dye was extremely rare and expensive."},

    {type:"mc", q:"ちゃいろ literally means:", opts:["Brown color","Earth color","Tea color","Tree color"], ans:"Tea color",
     hint:"The first part refers to Japan's most iconic beverage."},

    {type:"teach", trg:"オレンジ", src:"orange (color)", pos:"noun", gender:null,
     note:"From English. Traditional Japanese: だいだいいろ (daidai-iro, bitter orange color).\nWritten in katakana.",
     example:"A: オレンジいろのマフラーがすきです。\nB: あたたかいいろですね。",
     exampleSrc:"A: I like orange scarves.\nB: It's a warm color.",
     funFact:"The traditional word daidai (bitter orange) is also used at New Year. Daidai on top of mochi (rice cakes) symbolizes 'generation to generation' (daidai also means 'generation'). The loanword orenji is now more common for the color."},

    {type:"teach", trg:"グレー", src:"gray", pos:"noun", gender:null,
     note:"From English 'gray.' Traditional Japanese: はいいろ (haiiro, ash-color).\nWritten in katakana.",
     example:"A: グレーのスーツをきています。\nB: かっこいいですね。",
     exampleSrc:"A: I'm wearing a gray suit.\nB: That's cool/stylish.",
     funFact:"Haiiro (ash color) is the native word but guree (gray) dominates in fashion contexts. Japanese business suits favor gray, navy (kon), and black. The salaryman uniform of gray suit, white shirt, and dark tie is an iconic Japanese workplace image."},

    {type:"teach", trg:"きんいろ", src:"gold (color)", pos:"noun", gender:null,
     note:"Kin (gold metal) + iro (color). Festive and luxurious associations.\nKanji: 金色.",
     example:"A: きんいろのとけいはたかいですか？\nB: はい、じゅうまんえんです。",
     exampleSrc:"A: Is the gold watch expensive?\nB: Yes, 100,000 yen.",
     funFact:"Gold is associated with prosperity, power, and the divine in Japan. Kinkakuji (Golden Pavilion) in Kyoto is covered in gold leaf. Japanese temples often feature gold Buddha statues. Gold wrapping and packaging signify premium quality."},

    {type:"teach", trg:"ぎんいろ", src:"silver (color)", pos:"noun", gender:null,
     note:"Gin (silver metal) + iro (color). Elegant and modern associations.\nKanji: 銀色.",
     example:"A: ぎんいろのけいたいがほしいです。\nB: こちらのぎんいろはいかがですか？",
     exampleSrc:"A: I want a silver phone.\nB: How about this silver one?",
     funFact:"Silver is prominent in Japanese culture: Ginkakuji (Silver Pavilion, never actually covered in silver), ginkou (bank = silver + go), and the famous Ginza district (silver + seat) in Tokyo, named after a silver coin mint located there in the 1600s."},

    {type:"fb", s:"なに{1}がすきですか？",
     a:["いろ"],
     opts:["いろ","ほん","もの","ところ"],
     hint:"The general word for color, used in the question 'what color do you like?'",
     sSrc:"What color do you like?"},

    {type:"teach", trg:"かわいい", src:"cute / adorable", pos:"adj", gender:null,
     note:"I-adjective. One of Japan's most iconic words. Global cultural export.\nKanji: 可愛い.",
     example:"A: このぬいぐるみはかわいいですね！\nB: はい、にほんのキャラクターです。",
     exampleSrc:"A: This stuffed animal is so cute!\nB: Yes, it's a Japanese character.",
     funFact:"Kawaii culture is a global phenomenon born in Japan. Hello Kitty, Pokemon, and countless mascots are products of this aesthetic. The word originally meant 'pitiable/fragile' and shifted to 'cute/lovable' over centuries. Even police mascots in Japan are kawaii."},

    {type:"teach", trg:"かっこいい", src:"cool / stylish / handsome", pos:"adj", gender:null,
     note:"I-adjective. Used for people, fashion, and things that look impressive.",
     example:"A: あのくるまはかっこいいですね。\nB: スポーツカーですね。",
     exampleSrc:"A: That car is cool.\nB: It's a sports car.",
     funFact:"Kakkoii combines kakkou (shape/appearance) + ii (good). It is the male equivalent of kawaii in many ways. A handsome man is kakkoii, a stylish outfit is kakkoii, a fast car is kakkoii. The opposite, kakko warui (uncool), is a devastating critique."},

    {type:"teach", trg:"すてき", src:"lovely / wonderful / gorgeous", pos:"adj", gender:null,
     note:"Na-adjective. A warm compliment for things, places, and people.\nKanji: 素敵.",
     example:"A: すてきなドレスですね。\nB: ありがとう。きのうかいました。",
     exampleSrc:"A: What a lovely dress.\nB: Thank you. I bought it yesterday.",
     funFact:"Suteki is an all-purpose compliment. Suteki na ie (lovely house), suteki na hito (wonderful person), suteki na aidea (great idea). It is warm and sincere. Women use it more frequently than men, but it is appropriate for anyone."},

    {type:"mc", q:"かわいい originally meant:", opts:["Cute","Strong","Pitiable/fragile","Colorful"], ans:"Pitiable/fragile",
     hint:"The meaning shifted dramatically over centuries to its current positive sense."},

    {type:"match", pairs:[
      {trg:"ちゃいろ", src:"brown (tea-color)"},
      {trg:"ピンク", src:"pink"},
      {trg:"むらさき", src:"purple"},
      {trg:"オレンジ", src:"orange"}
    ]},

    {type:"match", pairs:[
      {trg:"かわいい", src:"cute"},
      {trg:"かっこいい", src:"cool/stylish"},
      {trg:"すてき", src:"lovely/wonderful"},
      {trg:"きんいろ", src:"gold (color)"}
    ]},

    {type:"fb", s:"このドレスは{1}ですね！",
     a:["すてき"],
     opts:["すてき","まずい","わるい","ふるい"],
     hint:"The na-adjective meaning 'lovely/wonderful,' used as a warm compliment.",
     sSrc:"This dress is lovely!"},

    {type:"mc", q:"Which color was reserved for royalty in ancient Japan?", opts:["あか","きんいろ","むらさき","しろ"], ans:"むらさき",
     hint:"The author of the world's first novel took her name from this noble color."},

    {type:"mc", q:"ぎんいろ appears in ぎんざ (Ginza) because:", opts:["Silver mines were there","A silver coin mint was there","Silver temples stood there","Silver fish were sold there"], ans:"A silver coin mint was there",
     hint:"In the 1600s, the Tokugawa shogunate ran a precious-metal production facility in this Tokyo district."},
  ]
};
export default LESSON_5;
