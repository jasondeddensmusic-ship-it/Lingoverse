// Batch 2 expansion for Unit 08 (Places), more buildings, asking directions, position words
const BATCH2_L_1 = {
  id:"jav2_u08l_b2_1", title:"町(まち)の中(なか)", icon:"🏙️", xp:15, board:true,
  steps:[
  {type:"intro", title:"町(まち)の中(なか)",
   desc:"Learn more places around town and how to ask for and give simple directions. From libraries to police stations, these are the buildings you will encounter in any Japanese city, plus essential direction phrases.",
   goals:["Name more town buildings: library, police station, museum, pharmacy","Ask simple direction questions","Use direction phrases to guide someone"]},

  {type:"teach", trg:"図書館(としょかん)", src:"library", pos:"noun", gender:null,
   note:"Public or school library. A quiet study space.\nKanji: 図書館(としょかん). Literally 'picture-book-building.'",
   example:"A: 図書館(としょかん)はどこですか？\nB: 学校(がっこう)の隣(となり)にあります。",
   exampleSrc:"A: Where is the library?\nB: It is next to the school.",
   funFact:"図書館 breaks down as 図(ず) (picture/diagram) + 書(しょ) (write/book) + 館(かん) (building). Japanese public libraries are remarkably well-maintained and quiet. Many offer free Wi-Fi and study rooms. Municipal libraries often have extensive manga collections alongside serious literature."},

  {type:"teach", trg:"警察署(けいさつしょ)", src:"police station", pos:"noun", gender:null,
   note:"The full police station. Smaller police boxes are called 交番(こうばん).\nKanji: 警察署(けいさつしょ).",
   example:"A: 警察署(けいさつしょ)はどこにありますか？\nB: 駅(えき)の後(うし)ろにあります。",
   exampleSrc:"A: Where is the police station?\nB: It is behind the station.",
   funFact:"Japan has two types of police locations: 警察署(けいさつしょ) (full stations) and 交番(こうばん) (small police boxes on street corners). Koban are uniquely Japanese: tiny local posts where officers know the neighborhood. They help with directions, lost items, and emergencies."},

  {type:"teach", trg:"博物館(はくぶつかん)", src:"museum", pos:"noun", gender:null,
   note:"General museum for history, art, science. Kanji: 博物館(はくぶつかん).\nLiterally 'wide-things-building.'",
   example:"A: 博物館(はくぶつかん)に行(い)ったことがありますか？\nB: はい、上野(うえの)の博物館(はくぶつかん)に行(い)きました。",
   exampleSrc:"A: Have you been to a museum?\nB: Yes, I went to the Ueno museum.",
   funFact:"Japan has over 5,700 museums, one of the highest numbers globally. 博物館(はくぶつかん) covers general museums, while 美術館(びじゅつかん) (art museum) and 科学館(かがくかん) (science museum) are more specific. Tokyo's Ueno district has a cluster of world-class museums in one park."},

  {type:"teach", trg:"薬局(やっきょく)", src:"pharmacy / drugstore", pos:"noun", gender:null,
   note:"Where you fill prescriptions and buy medicine.\nKanji: 薬局(やっきょく). Also ドラッグストア for modern chains.",
   example:"A: 薬局(やっきょく)は近(ちか)くにありますか？\nB: はい、あのコンビニの隣(となり)にあります。",
   exampleSrc:"A: Is there a pharmacy nearby?\nB: Yes, it is next to that convenience store.",
   funFact:"薬局(やっきょく) handles prescriptions, while ドラッグストア (drug store) chains like Matsumoto Kiyoshi sell over-the-counter medicine, cosmetics, and snacks. Drug stores are extremely popular tourist destinations for their unique Japanese health and beauty products."},

  {type:"mc", q:"図書館(としょかん) means:", opts:["library","museum","school","bookshop"], ans:"library",
   hint:"The 'picture-book-building' where you borrow books and study quietly."},

  {type:"teach", trg:"レストラン", src:"restaurant", pos:"noun", gender:null,
   note:"Loanword from French/English. Written in katakana.\nCovers Western-style dining.",
   example:"A: この近(ちか)くにレストランはありますか？\nB: 駅(えき)の前(まえ)にイタリアンレストランがあります。",
   exampleSrc:"A: Is there a restaurant near here?\nB: There is an Italian restaurant in front of the station.",
   funFact:"Japan distinguishes restaurant types carefully: レストラン for sit-down Western dining, 食堂(しょくどう) for casual Japanese eateries, 料亭(りょうてい) for high-end traditional Japanese. The word ファミレス (family restaurant) describes affordable chain restaurants like Denny's Japan."},

  {type:"teach", trg:"スーパー", src:"supermarket", pos:"noun", gender:null,
   note:"Short for スーパーマーケット. Where most Japanese buy groceries.\nKatakana loanword.",
   example:"A: スーパーは何時(なんじ)までですか？\nB: 夜(よる)十時(じゅうじ)までです。",
   exampleSrc:"A: Until what time is the supermarket open?\nB: Until 10 PM.",
   funFact:"Japanese supermarkets have a magical time: closing hour, when unsold 弁当(べんとう) and 寿司(すし) get half-price stickers (半額(はんがく)シール). Savvy shoppers wait for this. Supermarket etiquette includes bagging your own groceries at a separate counter."},

  {type:"teach", trg:"薬(くすり)", src:"medicine / drug", pos:"noun", gender:null,
   note:"General word for medicine. 薬(くすり)を飲(の)む = to take medicine (literally 'drink').\nKanji: 薬(くすり).",
   example:"A: 薬(くすり)を飲(の)みましたか？\nB: はい、さっき飲(の)みました。",
   exampleSrc:"A: Did you take your medicine?\nB: Yes, I took it just now.",
   funFact:"Japanese says 薬(くすり)を飲(の)む (drink medicine) even for pills and tablets. The verb 飲(の)む covers all forms of ingestion. 薬(くすり) also means 'chemicals' in scientific contexts. Traditional Japanese medicine (漢方(かんぽう)) uses herbal formulas and is covered by health insurance."},

  {type:"fb", s:"{1}はどこにありますか？\n(Where is the police station?)", a:"警察署(けいさつしょ)", opts:["警察署(けいさつしょ)","病院(びょういん)","薬局(やっきょく)","銀行(ぎんこう)"], sSrc:"Where is the police station?",
   hint:"The full law enforcement building, not the small street-corner police box."},

  {type:"teach", trg:"道(みち)", src:"road / street / path", pos:"noun", gender:null,
   note:"General word for any path or road. 道(みち)を聞(き)く = to ask for directions.\nKanji: 道(みち).",
   example:"A: この道(みち)をまっすぐ行(い)ってください。\nB: ありがとうございます。",
   exampleSrc:"A: Please go straight on this road.\nB: Thank you.",
   funFact:"道(みち) means both the physical road and the philosophical 'way.' It appears in many cultural concepts: 茶道(さどう) (tea ceremony = way of tea), 武道(ぶどう) (martial arts = way of the warrior), 書道(しょどう) (calligraphy = way of writing). The road is both literal and metaphorical in Japanese."},

  {type:"teach", trg:"橋(はし)", src:"bridge", pos:"noun", gender:null,
   note:"A crossing over water or a valley. Watch the pitch accent: はし can also mean chopsticks.\nKanji: 橋(はし).",
   example:"A: あの橋(はし)を渡(わた)ってください。\nB: 渡(わた)った後(あと)は？",
   exampleSrc:"A: Please cross that bridge.\nB: After crossing?",
   funFact:"はし is a famous pitch-accent example: with one accent pattern it means '橋(はし)' (bridge), with another it means '箸(はし)' (chopsticks), and with yet another it means '端(はし)' (edge). In standard Tokyo dialect, bridge has a falling accent while chopsticks has a rising one."},

  {type:"teach", trg:"川(かわ)", src:"river", pos:"noun", gender:null,
   note:"Natural waterway. Often part of place names.\nKanji: 川(かわ). Also read がわ in compounds.",
   example:"A: 川(かわ)の近(ちか)くに公園(こうえん)があります。\nB: 散歩(さんぽ)に行(い)きましょう。",
   exampleSrc:"A: There is a park near the river.\nB: Let us go for a walk.",
   funFact:"川 is one of the simplest kanji: three flowing lines representing water. Rivers define Japanese cities: 隅田川(すみだがわ) (Tokyo), 鴨川(かもがわ) (Kyoto). がわ is used in compound words like side: 右側(みぎがわ) (right side), 左側(ひだりがわ) (left side)."},

  {type:"teach", trg:"北(きた)", src:"north", pos:"noun", gender:null,
   note:"Compass direction. Also used in place names: 北口(きたぐち) = north exit.\nKanji: 北(きた).",
   example:"A: 北口(きたぐち)から出(で)てください。\nB: 北口(きたぐち)ですね。わかりました。",
   exampleSrc:"A: Please exit from the north exit.\nB: North exit, understood.",
   funFact:"北 shows two people standing back to back, suggesting turning away from the sun (which is south in the Northern Hemisphere). Compass directions are essential in Japanese stations: 北口(きたぐち) (north exit), 南口(みなみぐち) (south exit), 東口(ひがしぐち) (east exit), 西口(にしぐち) (west exit)."},

  {type:"teach", trg:"南(みなみ)", src:"south", pos:"noun", gender:null,
   note:"Compass direction. Opposite of 北(きた).\nKanji: 南(みなみ). 南口(みなみぐち) = south exit.",
   example:"A: 南口(みなみぐち)にタクシー乗(の)り場(ば)があります。\nB: ありがとうございます。",
   exampleSrc:"A: There is a taxi stand at the south exit.\nB: Thank you.",
   funFact:"南 depicts a plant growing inside a shelter, suggesting warmth and growth associated with the south. Southern Japan (九州(きゅうしゅう), 沖縄(おきなわ)) is warmer and more tropical. 南(みなみ) appears in many place names: 南区(みなみく) (South Ward) exists in most major cities."},

  {type:"mc", q:"道(みち) means:", opts:["river","road","mountain","bridge"], ans:"road",
   hint:"The word for a path or street, also meaning 'the way' in philosophical contexts."},

  {type:"match", pairs:[{trg:"図書館(としょかん)",src:"library"},{trg:"博物館(はくぶつかん)",src:"museum"},{trg:"薬局(やっきょく)",src:"pharmacy"},{trg:"レストラン",src:"restaurant"}]},

  {type:"match", pairs:[{trg:"道(みち)",src:"road"},{trg:"橋(はし)",src:"bridge"},{trg:"川(かわ)",src:"river"},{trg:"北(きた)",src:"north"}]},

  {type:"fb", s:"この近(ちか)くに{1}はありますか？\n(Is there a supermarket near here?)", a:"スーパー", opts:["スーパー","デパート","レストラン","薬局(やっきょく)"], sSrc:"Is there a supermarket near here?",
   hint:"The katakana loanword for a place where you buy groceries."},

  {type:"mc", q:"北口(きたぐち) means:", opts:["south exit","east exit","north exit","west exit"], ans:"north exit",
   hint:"北(きた) (n...) + 口(ぐち) (e.../entrance)."},

  {type:"fb", s:"{1}を飲(の)みましたか？\n(Did you take your medicine?)", a:"薬(くすり)", opts:["薬(くすり)","水(みず)","果物(くだもの)","ご飯(はん)"], sSrc:"Did you take your medicine?",
   hint:"The general word for medication, bought at a yakkyoku."},
{type:"match",pairs:[{trg:"南(みなみ)",src:"south"}]}]};
export default BATCH2_L_1;
