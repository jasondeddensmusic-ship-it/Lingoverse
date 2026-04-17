// Batch 2 expansion for Unit 09 (Shopping) — prices, sizes, colors, materials
const BATCH2_L_1 = {
  id:"jav2_u09l_b2_1", title:"サイズと色(いろ)", icon:"🎨", xp:15, board:true,
  steps:[
  {type:"intro", title:"サイズと色(いろ)",
   desc:"Expand your shopping skills with colors, sizes, materials, and comparison phrases. Being able to describe what you want by color and size makes shopping in Japan much easier, even without knowing specific product names.",
   goals:["Name basic colors in Japanese","Ask about sizes with S/M/L and Japanese terms","Describe materials and ask about product features"]},

  {type:"teach", trg:"赤(あか)い", src:"red", pos:"adj", gender:null,
   note:"い-adjective for the color red. Noun form: 赤(あか).\nKanji: 赤(あか)い. Japan's most symbolic color.",
   example:"A: 赤(あか)いかばんはいくらですか？\nB: 三千円(さんぜんえん)です。",
   exampleSrc:"A: How much is the red bag?\nB: It is 3,000 yen.",
   funFact:"Red (aka) is Japan's most culturally loaded color. Shinto 鳥居(とりい) gates are red. Red symbolizes life, energy, and celebration. 達磨(だるま) dolls are red. 赤飯(せきはん) is served at celebrations. The Japanese flag features a red circle representing the sun."},

  {type:"teach", trg:"青(あお)い", src:"blue (also green in traditional usage)", pos:"adj", gender:null,
   note:"い-adjective. Historically covered both blue AND green.\nKanji: 青(あお)い. Traffic lights are called 青(あお).",
   example:"A: 青(あお)いシャツはありますか？\nB: はい、こちらです。",
   exampleSrc:"A: Do you have a blue shirt?\nB: Yes, here it is.",
   funFact:"青(あお)い historically meant both blue and green. Traffic lights use 青(あお) for green. Green apples are 青(あお)りんご. Green vegetables are 青(あお)野菜(やさい). The separate word 緑(みどり) (green) exists but 青(あお) still dominates in many traditional contexts. This blue-green overlap fascinates linguists."},

  {type:"teach", trg:"白(しろ)い", src:"white", pos:"adj", gender:null,
   note:"い-adjective for white. Noun form: 白(しろ).\nKanji: 白(しろ)い. Symbolizes purity and cleanliness.",
   example:"A: 白(しろ)い靴(くつ)がほしいです。\nB: どんな靴(くつ)ですか？",
   exampleSrc:"A: I want white shoes.\nB: What kind of shoes?",
   funFact:"White symbolizes purity and sacredness in Japan. Traditional wedding 着物(きもの) (白無垢(しろむく)) are pure white. 米(こめ) (white food) is the staple of life. 白黒(しろくろ) (white-black) means 'right or wrong' or 'the verdict.' White spaces in design are called 間(ま), valued in Japanese aesthetics."},

  {type:"teach", trg:"黒(くろ)い", src:"black", pos:"adj", gender:null,
   note:"い-adjective for black. Noun form: 黒(くろ).\nKanji: 黒(くろ)い. Elegance and formality.",
   example:"A: 黒(くろ)いかばんを見(み)せてください。\nB: こちらのかばんですか？",
   exampleSrc:"A: Please show me the black bag.\nB: This bag?",
   funFact:"Black represents formality and elegance in modern Japan. Business suits are black. School uniforms are often black. 黒帯(くろおび) (black belt) in martial arts represents mastery. In traditional culture, black was associated with mystery and the unknown."},

  {type:"mc", q:"青(あお)い historically covers:", opts:["only blue","blue and green","only green","red and blue"], ans:"blue and green",
   hint:"This color word traditionally described both sky and plant colors."},

  {type:"teach", trg:"黄色(きいろ)い", src:"yellow", pos:"adj", gender:null,
   note:"い-adjective. Noun form: 黄色(きいろ).\nKanji: 黄色(きいろ)い. A cheerful, attention-getting color.",
   example:"A: 黄色(きいろ)い傘(かさ)を持(も)っていますか？\nB: いいえ、赤(あか)い傘(かさ)です。",
   exampleSrc:"A: Do you have a yellow umbrella?\nB: No, it is a red umbrella.",
   funFact:"Yellow is the caution color in Japan: school zone signs, construction warnings, and train platform edges use it. 黄色(きいろ)い声(こえ) (yellow voice) describes high-pitched screaming, especially from excited fans. The expression dates back centuries."},

  {type:"teach", trg:"サイズ", src:"size", pos:"noun", gender:null,
   note:"Loanword from English. Japanese sizing runs smaller than Western.\nS, M, L are used, plus Japanese sizes.",
   example:"A: このシャツのサイズは何(なん)ですか？\nB: エムサイズです。",
   exampleSrc:"A: What size is this shirt?\nB: It is size M.",
   funFact:"Japanese clothing sizes run noticeably smaller than Western sizes. A Japanese L often equals a Western M. The phrase サイズが合(あ)わない (the size does not fit) is useful for tourists. Some shops carry フリーサイズ (free size / one size fits all)."},

  {type:"teach", trg:"大(おお)きい", src:"big / large", pos:"adj", gender:null,
   note:"い-adjective. Opposite: 小(ちい)さい (small).\nKanji: 大(おお)きい.",
   example:"A: もう少(すこ)し大(おお)きいサイズはありますか？\nB: はい、こちらのエルサイズはいかがですか？",
   exampleSrc:"A: Do you have a slightly larger size?\nB: Yes, how about this size L?",
   funFact:"大(おお)きい is one of the first adjectives learners master. 大(だい) (big) appears everywhere: 大学(だいがく) (university = big learning), 大人(おとな) (adult = big person), 大丈夫(だいじょうぶ) (all right = big, strong, husband). The kanji shows a person with arms stretched wide."},

  {type:"fb", s:"{1}かばんはいくらですか？\n(How much is the red bag?)", a:"赤(あか)い", opts:["赤(あか)い","青(あお)い","白(しろ)い","黒(くろ)い"], sSrc:"How much is the red bag?",
   hint:"The い-adjective for Japan's most symbolic and celebratory color."},

  {type:"teach", trg:"小(ちい)さい", src:"small / little", pos:"adj", gender:null,
   note:"い-adjective. Opposite: 大(おお)きい (big).\nKanji: 小(ちい)さい.",
   example:"A: もう少(すこ)し小(ちい)さいのはありますか？\nB: エスサイズはいかがですか？",
   exampleSrc:"A: Do you have something a bit smaller?\nB: How about size S?",
   funFact:"小(ちい)さい uses 小, which shows a line dividing something into smaller pieces. It pairs with 大(おお)きい in many contexts: 大小(だいしょう) (big and small, i.e., size), 大人(おとな)と子供(こども) (adults and children). The casual version ちっちゃい is very common in spoken Japanese."},

  {type:"teach", trg:"長(なが)い", src:"long", pos:"adj", gender:null,
   note:"い-adjective for length. Opposite: 短(みじか)い (short).\nKanji: 長(なが)い.",
   example:"A: このスカートは長(なが)すぎます。\nB: 短(みじか)いのもありますよ。",
   exampleSrc:"A: This skirt is too long.\nB: We also have short ones.",
   funFact:"長(なが)い works for physical length and time duration. 長(なが)い間(あいだ) means 'for a long time.' 長(ちょう) appears in many words: 社長(しゃちょう) (company president = company chief), 部長(ぶちょう) (department head), 長男(ちょうなん) (eldest son). Length often implies seniority in Japanese."},

  {type:"teach", trg:"短(みじか)い", src:"short (length)", pos:"adj", gender:null,
   note:"い-adjective. For short length or duration. NOT for short height (use 低(ひく)い).\nKanji: 短(みじか)い.",
   example:"A: 短(みじか)いスカートがほしいです。\nB: こちらはいかがですか？",
   exampleSrc:"A: I want a short skirt.\nB: How about this one?",
   funFact:"短(みじか)い is for length and time only. For a short person, use 背(せ)が低(ひく)い (height is low). This distinction trips up learners. English uses 'short' for both, but Japanese separates length (短(みじか)い) from height (低(ひく)い). Hair can be 短(みじか)い but not 低(ひく)い."},

  {type:"teach", trg:"綿(めん)", src:"cotton", pos:"noun", gender:null,
   note:"Natural fabric material. Also written コットン (katakana loanword).\nKanji: 綿(めん).",
   example:"A: これは綿(めん)ですか？\nB: はい、百(ひゃく)パーセント綿(めん)です。",
   exampleSrc:"A: Is this cotton?\nB: Yes, it is 100% cotton.",
   funFact:"Japanese consumers pay close attention to fabric composition. Product labels always list materials. Popular fabrics: 綿(めん) (cotton), シルク (silk), リネン (linen), ポリエステル (polyester). Japan's textile industry has a long history, and quality standards are exceptionally high."},

  {type:"mc", q:"もう少(すこ)し大(おお)きいサイズはありますか means:", opts:["Is this the biggest size?","Do you have a slightly larger size?","This size is too big","I want a small size"], ans:"Do you have a slightly larger size?",
   hint:"もう少(すこ)し (a little more) + 大(おお)きい (big) + a polite question about availability."},

  {type:"match", pairs:[{trg:"赤(あか)い",src:"red"},{trg:"青(あお)い",src:"blue"},{trg:"白(しろ)い",src:"white"},{trg:"黒(くろ)い",src:"black"}]},

  {type:"match", pairs:[{trg:"大(おお)きい",src:"big"},{trg:"小(ちい)さい",src:"small"},{trg:"長(なが)い",src:"long"},{trg:"短(みじか)い",src:"short"}]},

  {type:"fb", s:"もう少(すこ)し{1}のはありますか？\n(Do you have something a bit smaller?)", a:"小(ちい)さい", opts:["小(ちい)さい","大(おお)きい","長(なが)い","安(やす)い"], sSrc:"Do you have something a bit smaller?",
   hint:"The い-adjective meaning small or little, opposite of 大(おお)きい."},

  {type:"mc", q:"黄色(きいろ)い means:", opts:["green","yellow","orange","purple"], ans:"yellow",
   hint:"The color associated with caution signs and school zones in Japan."},

  {type:"fb", s:"これは{1}ですか？\n(Is this cotton?)", a:"綿(めん)", opts:["綿(めん)","絹(きぬ)","革(かわ)","紙(かみ)"], sSrc:"Is this cotton?",
   hint:"The natural fabric most commonly used in everyday clothing."},
]};
export default BATCH2_L_1;
