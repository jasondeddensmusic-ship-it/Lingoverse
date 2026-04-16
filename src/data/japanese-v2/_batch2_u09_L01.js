// Batch 2 expansion for Unit 09 (Shopping) — prices, sizes, colors, materials
const BATCH2_L_1 = {
  id:"jav2_u09l_b2_1", title:"サイズといろ", icon:"🎨", xp:15, board:true,
  steps:[
  {type:"intro", title:"サイズといろ",
   desc:"Expand your shopping skills with colors, sizes, materials, and comparison phrases. Being able to describe what you want by color and size makes shopping in Japan much easier, even without knowing specific product names.",
   goals:["Name basic colors in Japanese","Ask about sizes with S/M/L and Japanese terms","Describe materials and ask about product features"]},

  {type:"teach", trg:"あかい", src:"red", pos:"adj", gender:null,
   note:"い-adjective for the color red. Noun form: あか.\nKanji: 赤い. Japan's most symbolic color.",
   example:"A: あかいかばんはいくらですか？\nB: さんぜんえんです。",
   exampleSrc:"A: How much is the red bag?\nB: It is 3,000 yen.",
   funFact:"Red (aka) is Japan's most culturally loaded color. Shinto torii gates are red. Red symbolizes life, energy, and celebration. Daruma dolls are red. Red rice (sekihan) is served at celebrations. The Japanese flag features a red circle representing the sun."},

  {type:"teach", trg:"あおい", src:"blue (also green in traditional usage)", pos:"adj", gender:null,
   note:"い-adjective. Historically covered both blue AND green.\nKanji: 青い. Traffic lights are called あお.",
   example:"A: あおいシャツはありますか？\nB: はい、こちらです。",
   exampleSrc:"A: Do you have a blue shirt?\nB: Yes, here it is.",
   funFact:"Aoi historically meant both blue and green. Traffic lights use あお for green. Green apples are あおりんご. Green vegetables are あおやさい. The separate word みどり (green) exists but あお still dominates in many traditional contexts. This blue-green overlap fascinates linguists."},

  {type:"teach", trg:"しろい", src:"white", pos:"adj", gender:null,
   note:"い-adjective for white. Noun form: しろ.\nKanji: 白い. Symbolizes purity and cleanliness.",
   example:"A: しろいくつがほしいです。\nB: どんなくつですか？",
   exampleSrc:"A: I want white shoes.\nB: What kind of shoes?",
   funFact:"White symbolizes purity and sacredness in Japan. Traditional wedding kimono (shiromuku) are pure white. Rice (white food) is the staple of life. Shiro-kuro (white-black) means 'right or wrong' or 'the verdict.' White spaces in design are called ma, valued in Japanese aesthetics."},

  {type:"teach", trg:"くろい", src:"black", pos:"adj", gender:null,
   note:"い-adjective for black. Noun form: くろ.\nKanji: 黒い. Elegance and formality.",
   example:"A: くろいかばんをみせてください。\nB: こちらのかばんですか？",
   exampleSrc:"A: Please show me the black bag.\nB: This bag?",
   funFact:"Black represents formality and elegance in modern Japan. Business suits are black. School uniforms are often black. Kuro-obi (black belt) in martial arts represents mastery. In traditional culture, black was associated with mystery and the unknown."},

  {type:"mc", q:"あおい historically covers:", opts:["only blue","blue and green","only green","red and blue"], ans:"blue and green",
   hint:"This color word traditionally described both sky and plant colors."},

  {type:"teach", trg:"きいろい", src:"yellow", pos:"adj", gender:null,
   note:"い-adjective. Noun form: きいろ.\nKanji: 黄色い. A cheerful, attention-getting color.",
   example:"A: きいろいかさをもっていますか？\nB: いいえ、あかいかさです。",
   exampleSrc:"A: Do you have a yellow umbrella?\nB: No, it is a red umbrella.",
   funFact:"Yellow is the caution color in Japan: school zone signs, construction warnings, and train platform edges use it. きいろいこえ (yellow voice) describes high-pitched screaming, especially from excited fans. The expression dates back centuries."},

  {type:"teach", trg:"サイズ", src:"size", pos:"noun", gender:null,
   note:"Loanword from English. Japanese sizing runs smaller than Western.\nS, M, L are used, plus Japanese sizes.",
   example:"A: このシャツのサイズはなんですか？\nB: エムサイズです。",
   exampleSrc:"A: What size is this shirt?\nB: It is size M.",
   funFact:"Japanese clothing sizes run noticeably smaller than Western sizes. A Japanese L often equals a Western M. The phrase サイズがあわない (the size does not fit) is useful for tourists. Some shops carry フリーサイズ (free size / one size fits all)."},

  {type:"teach", trg:"おおきい", src:"big / large", pos:"adj", gender:null,
   note:"い-adjective. Opposite: ちいさい (small).\nKanji: 大きい.",
   example:"A: もうすこしおおきいサイズはありますか？\nB: はい、こちらのエルサイズはいかがですか？",
   exampleSrc:"A: Do you have a slightly larger size?\nB: Yes, how about this size L?",
   funFact:"大きい is one of the first adjectives learners master. 大 (big) appears everywhere: 大学 (university = big learning), 大人 (adult = big person), 大丈夫 (all right = big, strong, husband). The kanji shows a person with arms stretched wide."},

  {type:"fb", s:"{1}かばんはいくらですか？\n(How much is the red bag?)", a:"あかい", opts:["あかい","あおい","しろい","くろい"], sSrc:"How much is the red bag?",
   hint:"The い-adjective for Japan's most symbolic and celebratory color."},

  {type:"teach", trg:"ちいさい", src:"small / little", pos:"adj", gender:null,
   note:"い-adjective. Opposite: おおきい (big).\nKanji: 小さい.",
   example:"A: もうすこしちいさいのはありますか？\nB: エスサイズはいかがですか？",
   exampleSrc:"A: Do you have something a bit smaller?\nB: How about size S?",
   funFact:"小さい uses 小, which shows a line dividing something into smaller pieces. It pairs with 大きい in many contexts: 大小 (big and small, i.e., size), 大人と子供 (adults and children). The casual version ちっちゃい is very common in spoken Japanese."},

  {type:"teach", trg:"ながい", src:"long", pos:"adj", gender:null,
   note:"い-adjective for length. Opposite: みじかい (short).\nKanji: 長い.",
   example:"A: このスカートはながすぎます。\nB: みじかいのもありますよ。",
   exampleSrc:"A: This skirt is too long.\nB: We also have short ones.",
   funFact:"長い works for physical length and time duration. ながいあいだ means 'for a long time.' 長 appears in many words: 社長 (company president = company chief), 部長 (department head), 長男 (eldest son). Length often implies seniority in Japanese."},

  {type:"teach", trg:"みじかい", src:"short (length)", pos:"adj", gender:null,
   note:"い-adjective. For short length or duration. NOT for short height (use ひくい).\nKanji: 短い.",
   example:"A: みじかいスカートがほしいです。\nB: こちらはいかがですか？",
   exampleSrc:"A: I want a short skirt.\nB: How about this one?",
   funFact:"みじかい is for length and time only. For a short person, use せがひくい (height is low). This distinction trips up learners. English uses 'short' for both, but Japanese separates length (短い) from height (低い). Hair can be 短い but not 低い."},

  {type:"teach", trg:"めん", src:"cotton", pos:"noun", gender:null,
   note:"Natural fabric material. Also written コットン (katakana loanword).\nKanji: 綿.",
   example:"A: これはめんですか？\nB: はい、ひゃくパーセントめんです。",
   exampleSrc:"A: Is this cotton?\nB: Yes, it is 100% cotton.",
   funFact:"Japanese consumers pay close attention to fabric composition. Product labels always list materials. Popular fabrics: めん (cotton), シルク (silk), リネン (linen), ポリエステル (polyester). Japan's textile industry has a long history, and quality standards are exceptionally high."},

  {type:"mc", q:"もうすこしおおきいサイズはありますか means:", opts:["Is this the biggest size?","Do you have a slightly larger size?","This size is too big","I want a small size"], ans:"Do you have a slightly larger size?",
   hint:"もうすこし (a little more) + おおきい (big) + a polite question about availability."},

  {type:"match", pairs:[{trg:"あかい",src:"red"},{trg:"あおい",src:"blue"},{trg:"しろい",src:"white"},{trg:"くろい",src:"black"}]},

  {type:"match", pairs:[{trg:"おおきい",src:"big"},{trg:"ちいさい",src:"small"},{trg:"ながい",src:"long"},{trg:"みじかい",src:"short"}]},

  {type:"fb", s:"もうすこし{1}のはありますか？\n(Do you have something a bit smaller?)", a:"ちいさい", opts:["ちいさい","おおきい","ながい","やすい"], sSrc:"Do you have something a bit smaller?",
   hint:"The い-adjective meaning small or little, opposite of おおきい."},

  {type:"mc", q:"きいろい means:", opts:["green","yellow","orange","purple"], ans:"yellow",
   hint:"The color associated with caution signs and school zones in Japan."},

  {type:"fb", s:"これは{1}ですか？\n(Is this cotton?)", a:"めん", opts:["めん","きぬ","かわ","かみ"], sSrc:"Is this cotton?",
   hint:"The natural fabric most commonly used in everyday clothing."},
]};
export default BATCH2_L_1;
