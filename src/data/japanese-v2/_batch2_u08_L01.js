// Batch 2 expansion for Unit 08 (Places) — more buildings, asking directions, position words
const BATCH2_L_1 = {
  id:"jav2_u08l_b2_1", title:"まちのなか", icon:"🏙️", xp:15, board:true,
  steps:[
  {type:"intro", title:"まちのなか",
   desc:"Learn more places around town and how to ask for and give simple directions. From libraries to police stations, these are the buildings you will encounter in any Japanese city, plus essential direction phrases.",
   goals:["Name more town buildings: library, police station, museum, pharmacy","Ask simple direction questions","Use direction phrases to guide someone"]},

  {type:"teach", trg:"としょかん", src:"library", pos:"noun", gender:null,
   note:"Public or school library. A quiet study space.\nKanji: 図書館. Literally 'picture-book-building.'",
   example:"A: としょかんはどこですか？\nB: がっこうのとなりにあります。",
   exampleSrc:"A: Where is the library?\nB: It is next to the school.",
   funFact:"図書館 breaks down as 図 (picture/diagram) + 書 (write/book) + 館 (building). Japanese public libraries are remarkably well-maintained and quiet. Many offer free Wi-Fi and study rooms. Municipal libraries often have extensive manga collections alongside serious literature."},

  {type:"teach", trg:"けいさつしょ", src:"police station", pos:"noun", gender:null,
   note:"The full police station. Smaller police boxes are called こうばん.\nKanji: 警察署.",
   example:"A: けいさつしょはどこにありますか？\nB: えきのうしろにあります。",
   exampleSrc:"A: Where is the police station?\nB: It is behind the station.",
   funFact:"Japan has two types of police locations: けいさつしょ (full stations) and こうばん (small police boxes on street corners). Koban are uniquely Japanese: tiny local posts where officers know the neighborhood. They help with directions, lost items, and emergencies."},

  {type:"teach", trg:"はくぶつかん", src:"museum", pos:"noun", gender:null,
   note:"General museum for history, art, science. Kanji: 博物館.\nLiterally 'wide-things-building.'",
   example:"A: はくぶつかんにいったことがありますか？\nB: はい、うえののはくぶつかんにいきました。",
   exampleSrc:"A: Have you been to a museum?\nB: Yes, I went to the Ueno museum.",
   funFact:"Japan has over 5,700 museums, one of the highest numbers globally. 博物館 covers general museums, while びじゅつかん (art museum) and かがくかん (science museum) are more specific. Tokyo's Ueno district has a cluster of world-class museums in one park."},

  {type:"teach", trg:"やっきょく", src:"pharmacy / drugstore", pos:"noun", gender:null,
   note:"Where you fill prescriptions and buy medicine.\nKanji: 薬局. Also ドラッグストア for modern chains.",
   example:"A: やっきょくはちかくにありますか？\nB: はい、あのコンビニのとなりにあります。",
   exampleSrc:"A: Is there a pharmacy nearby?\nB: Yes, it is next to that convenience store.",
   funFact:"薬局 (yakkyoku) handles prescriptions, while ドラッグストア (drug store) chains like Matsumoto Kiyoshi sell over-the-counter medicine, cosmetics, and snacks. Drug stores are extremely popular tourist destinations for their unique Japanese health and beauty products."},

  {type:"mc", q:"としょかん means:", opts:["bookshop","library","museum","school"], ans:"library",
   hint:"The 'picture-book-building' where you borrow books and study quietly."},

  {type:"teach", trg:"レストラン", src:"restaurant", pos:"noun", gender:null,
   note:"Loanword from French/English. Written in katakana.\nCovers Western-style dining.",
   example:"A: このちかくにレストランはありますか？\nB: えきのまえにイタリアンレストランがあります。",
   exampleSrc:"A: Is there a restaurant near here?\nB: There is an Italian restaurant in front of the station.",
   funFact:"Japan distinguishes restaurant types carefully: レストラン for sit-down Western dining, しょくどう for casual Japanese eateries, りょうてい for high-end traditional Japanese. The word ファミレス (family restaurant) describes affordable chain restaurants like Denny's Japan."},

  {type:"teach", trg:"スーパー", src:"supermarket", pos:"noun", gender:null,
   note:"Short for スーパーマーケット. Where most Japanese buy groceries.\nKatakana loanword.",
   example:"A: スーパーはなんじまでですか？\nB: よるじゅうじまでです。",
   exampleSrc:"A: Until what time is the supermarket open?\nB: Until 10 PM.",
   funFact:"Japanese supermarkets have a magical time: closing hour, when unsold bento and sushi get half-price stickers (はんがくシール). Savvy shoppers wait for this. Supermarket etiquette includes bagging your own groceries at a separate counter."},

  {type:"teach", trg:"くすり", src:"medicine / drug", pos:"noun", gender:null,
   note:"General word for medicine. くすりをのむ = to take medicine (literally 'drink').\nKanji: 薬.",
   example:"A: くすりをのみましたか？\nB: はい、さっきのみました。",
   exampleSrc:"A: Did you take your medicine?\nB: Yes, I took it just now.",
   funFact:"Japanese says くすりをのむ (drink medicine) even for pills and tablets. The verb のむ covers all forms of ingestion. 薬 also means 'chemicals' in scientific contexts. Traditional Japanese medicine (kampo) uses herbal formulas and is covered by health insurance."},

  {type:"fb", s:"{1}はどこにありますか？\n(Where is the police station?)", a:"けいさつしょ", opts:["けいさつしょ","びょういん","やっきょく","ぎんこう"], sSrc:"Where is the police station?",
   hint:"The full law enforcement building, not the small street-corner police box."},

  {type:"teach", trg:"みち", src:"road / street / path", pos:"noun", gender:null,
   note:"General word for any path or road. みちをきく = to ask for directions.\nKanji: 道.",
   example:"A: このみちをまっすぐいってください。\nB: ありがとうございます。",
   exampleSrc:"A: Please go straight on this road.\nB: Thank you.",
   funFact:"道 means both the physical road and the philosophical 'way.' It appears in many cultural concepts: 茶道 (tea ceremony = way of tea), 武道 (martial arts = way of the warrior), 書道 (calligraphy = way of writing). The road is both literal and metaphorical in Japanese."},

  {type:"teach", trg:"はし", src:"bridge", pos:"noun", gender:null,
   note:"A crossing over water or a valley. Watch the pitch accent: はし can also mean chopsticks.\nKanji: 橋.",
   example:"A: あのはしをわたってください。\nB: わたったあとは？",
   exampleSrc:"A: Please cross that bridge.\nB: After crossing?",
   funFact:"はし is a famous pitch-accent example: with one accent pattern it means 'bridge' (橋), with another it means 'chopsticks' (箸), and with yet another it means 'edge' (端). In standard Tokyo dialect, bridge has a falling accent while chopsticks has a rising one."},

  {type:"teach", trg:"かわ", src:"river", pos:"noun", gender:null,
   note:"Natural waterway. Often part of place names.\nKanji: 川. Also read がわ in compounds.",
   example:"A: かわのちかくにこうえんがあります。\nB: さんぽにいきましょう。",
   exampleSrc:"A: There is a park near the river.\nB: Let us go for a walk.",
   funFact:"川 is one of the simplest kanji: three flowing lines representing water. Rivers define Japanese cities: Sumida-gawa (Tokyo), Kamo-gawa (Kyoto), Dotonbori (Osaka). がわ is used in compound words like side: みぎがわ (right side), ひだりがわ (left side)."},

  {type:"teach", trg:"きた", src:"north", pos:"noun", gender:null,
   note:"Compass direction. Also used in place names: きたぐち = north exit.\nKanji: 北.",
   example:"A: きたぐちからでてください。\nB: きたぐちですね。わかりました。",
   exampleSrc:"A: Please exit from the north exit.\nB: North exit, understood.",
   funFact:"北 shows two people standing back to back, suggesting turning away from the sun (which is south in the Northern Hemisphere). Compass directions are essential in Japanese stations: きたぐち (north exit), みなみぐち (south exit), ひがしぐち (east exit), にしぐち (west exit)."},

  {type:"teach", trg:"みなみ", src:"south", pos:"noun", gender:null,
   note:"Compass direction. Opposite of きた.\nKanji: 南. みなみぐち = south exit.",
   example:"A: みなみぐちにタクシーのりばがあります。\nB: ありがとうございます。",
   exampleSrc:"A: There is a taxi stand at the south exit.\nB: Thank you.",
   funFact:"南 depicts a plant growing inside a shelter, suggesting warmth and growth associated with the south. Southern Japan (Kyushu, Okinawa) is warmer and more tropical. Minami appears in many place names: Minami-ku (South Ward) exists in most major cities."},

  {type:"mc", q:"みち means:", opts:["bridge","river","road","mountain"], ans:"road",
   hint:"The word for a path or street, also meaning 'the way' in philosophical contexts."},

  {type:"match", pairs:[{trg:"としょかん",src:"library"},{trg:"はくぶつかん",src:"museum"},{trg:"やっきょく",src:"pharmacy"},{trg:"レストラン",src:"restaurant"}]},

  {type:"match", pairs:[{trg:"みち",src:"road"},{trg:"はし",src:"bridge"},{trg:"かわ",src:"river"},{trg:"きた",src:"north"}]},

  {type:"fb", s:"このちかくに{1}はありますか？\n(Is there a supermarket near here?)", a:"スーパー", opts:["スーパー","デパート","レストラン","やっきょく"], sSrc:"Is there a supermarket near here?",
   hint:"The katakana loanword for a place where you buy groceries."},

  {type:"mc", q:"きたぐち means:", opts:["south exit","east exit","north exit","west exit"], ans:"north exit",
   hint:"Kita (n...) + guchi (e.../entrance)."},

  {type:"fb", s:"{1}をのみましたか？\n(Did you take your medicine?)", a:"くすり", opts:["くすり","みず","くだもの","ごはん"], sSrc:"Did you take your medicine?",
   hint:"The general word for medication, bought at a yakkyoku."},
]};
export default BATCH2_L_1;
