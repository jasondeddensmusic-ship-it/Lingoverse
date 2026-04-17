// Batch 8 – Unit 08 (A1.3 Places): Buildings & Public Facilities
const BATCH8_L1 = {
  id:"jav2_u08l_b8_1", title:"公共(こうきょう)施設(しせつ)", icon:"🏛️", xp:15, board:true,
  steps:[
    {type:"intro", title:"公共(こうきょう)施設(しせつ)",
     desc:"Learn vocabulary for public buildings and facilities you encounter in any Japanese city. From post offices to libraries, these places are part of daily life.",
     goals:["Name common public buildings and facilities","Ask for and give directions to specific places","Understand signs and public facility vocabulary"]},

    {type:"teach", trg:"郵便局(ゆうびんきょく)", src:"post office", pos:"noun", gender:null,
     note:"Kanji: 郵便局. 郵便(ゆうびん) = mail. 局(きょく) = bureau/office.\nMark: 〒 (yuubin symbol).",
     example:"A: 郵便局(ゆうびんきょく)はどこですか？\nB: 駅(えき)の向(む)かいにあります。",
     exampleSrc:"A: Where is the post office?\nB: It is across from the station.",
     funFact:"Japan Post (日本(にほん)郵便(ゆうびん)) also operates a massive bank (郵貯(ゆうちょ)銀行(ぎんこう)) and insurance company. Post offices display the 〒 symbol, unique to Japan. Red post boxes (ポスト) are found on almost every street corner. Japan's postal service is one of the most reliable in the world."},

    {type:"teach", trg:"図書館(としょかん)", src:"library", pos:"noun", gender:null,
     note:"Kanji: 図書館. 図書館(としょかん)カード = library card.\n本(ほん)を借(か)りる = to borrow a book.",
     example:"A: 図書館(としょかん)で勉強(べんきょう)します。\nB: 静(しず)かでいいですよね。",
     exampleSrc:"A: I will study at the library.\nB: It is quiet and nice, is it not?",
     funFact:"Japanese 図書館(としょかん) are free to use and excellently maintained. Many have study rooms, manga sections, and CD/DVD lending. Some large city libraries have thousands of manga volumes. Students use 図書館(としょかん) as free study spaces, especially before exams."},

    {type:"teach", trg:"役所(やくしょ)", src:"municipal office / city hall", pos:"noun", gender:null,
     note:"Kanji: 役所. 市役所(しやくしょ) = city hall.\n区役所(くやくしょ) = ward office.",
     example:"A: 引(ひ)っ越(こ)したら役所(やくしょ)に行(い)ってください。\nB: 何(なに)をしますか？",
     exampleSrc:"A: When you move, please go to the municipal office.\nB: What do I do there?",
     funFact:"役所(やくしょ) handles residency registration, family registry (戸籍(こせき)), health insurance, and tax paperwork. For foreigners in Japan, the 区役所(くやくしょ) (ward office) is essential for registering your address and getting a 在留(ざいりゅう)カード update. Most forms are in Japanese only."},

    {type:"teach", trg:"体育館(たいいくかん)", src:"gymnasium / sports hall", pos:"noun", gender:null,
     note:"Kanji: 体育館. 学校(がっこう)の体育館(たいいくかん) = school gymnasium.\n体育(たいいく) = physical education.",
     example:"A: バスケットボールは体育館(たいいくかん)でします。\nB: 何時(なんじ)からですか？",
     exampleSrc:"A: We play basketball at the gymnasium.\nB: From what time?",
     funFact:"Every Japanese school has a 体育館(たいいくかん) used for PE classes, assemblies, and club activities. Students must change into 上(うわ)ばき (indoor shoes) before entering. 体育館(たいいくかん) also serve as evacuation shelters during natural disasters like earthquakes and typhoons."},

    {type:"teach", trg:"児童館(じどうかん)", src:"community center (for children)", pos:"noun", gender:null,
     note:"Kanji: 児童館. Free facility for children to play and learn.\n放課後(ほうかご) = after school.",
     example:"A: 子(こ)どもは児童館(じどうかん)で遊(あそ)んでいます。\nB: 何時(なんじ)に迎(むか)えに行(い)きますか？",
     exampleSrc:"A: The children are playing at the community center.\nB: What time will you go pick them up?",
     funFact:"児童館(じどうかん) provide free after-school care and activities for children. Staff supervise play, crafts, and study time. Most Japanese neighborhoods have one. They also run seasonal events like 夏(なつ)まつり (summer festivals) and クリスマス会(かい) (Christmas parties)."},

    {type:"mc", q:"What is a 郵便局(ゆうびんきょく)?", opts:["A post office","A library","A gymnasium","A city hall"], ans:"A post office",
     hint:"This facility handles mail delivery and also operates a bank in Japan."},

    {type:"teach", trg:"警察署(けいさつしょ)", src:"police station", pos:"noun", gender:null,
     note:"Kanji: 警察署. 交番(こうばん) = police box (smaller neighborhood station).\n警察官(けいさつかん) = police officer.",
     example:"A: 財布(さいふ)を落(お)としました。\nB: 警察署(けいさつしょ)に届(とど)けましょう。",
     exampleSrc:"A: I dropped my wallet.\nB: Let us report it to the police station.",
     funFact:"Japan's police system has two levels: 警察署(けいさつしょ) (full police stations) and 交番(こうばん) (small neighborhood police boxes). 交番(こうばん) are found on nearly every major street corner. Officers help with directions, lost items, and minor disputes. Japan's crime rate is among the lowest in the world."},

    {type:"teach", trg:"消防署(しょうぼうしょ)", src:"fire station", pos:"noun", gender:null,
     note:"Kanji: 消防署. 消防士(しょうぼうし) = firefighter.\n救急車(きゅうきゅうしゃ) = ambulance (dispatched from here).",
     example:"A: 消防署(しょうぼうしょ)はどこにありますか？\nB: 大通(おおどお)りの突(つ)き当(あ)たりです。",
     exampleSrc:"A: Where is the fire station?\nB: It is at the end of the main street.",
     funFact:"Japanese 消防署(しょうぼうしょ) handle both fire emergencies and ambulance dispatch. The emergency number 119 connects to both. 消防士(しょうぼうし) (firefighters) in Japan also respond to natural disasters. Many stations open for public tours and hold annual events where children can ride fire trucks."},

    {type:"teach", trg:"公園(こうえん)", src:"park", pos:"noun", gender:null,
     note:"Kanji: 公園. 公園(こうえん)で遊(あそ)ぶ = to play at the park.\n中央(ちゅうおう)公園(こうえん) = central park.",
     example:"A: 公園(こうえん)で散歩(さんぽ)しましょう。\nB: いいですね。天気(てんき)もいいですし。",
     exampleSrc:"A: Let us take a walk in the park.\nB: Good idea. The weather is nice too.",
     funFact:"Japanese 公園(こうえん) range from tiny neighborhood playgrounds to vast spaces like 上野(うえの)公園(こうえん) and 代々木(よよぎ)公園(こうえん) in Tokyo. Parks are central to 花見(はなみ) (cherry blossom viewing) culture. Many 公園(こうえん) have free exercise equipment for elderly residents who gather for ラジオ体操(たいそう) (radio exercises) each morning."},

    {type:"teach", trg:"駐車場(ちゅうしゃじょう)", src:"parking lot", pos:"noun", gender:null,
     note:"Kanji: 駐車場. 駐車(ちゅうしゃ)禁止(きんし) = no parking.\nコインパーキング = coin-operated parking lot.",
     example:"A: 駐車場(ちゅうしゃじょう)はありますか？\nB: 地下(ちか)に駐車場(ちゅうしゃじょう)があります。",
     exampleSrc:"A: Is there a parking lot?\nB: There is a parking lot underground.",
     funFact:"Parking in Japanese cities is expensive and scarce. To own a car, you must prove you have a parking space (車庫(しゃこ)証明(しょうめい)). Mechanical tower parking (機械式(きかいしき)駐車(ちゅうしゃ)) stacks cars vertically to save space. コインパーキング lots are found everywhere and charge by the hour."},

    {type:"teach", trg:"おてあらい", src:"restroom / bathroom", pos:"noun", gender:null,
     note:"Polite term. Literally 'hand washing.' Also トイレ (casual).\nおてあらいはどこですか = Where is the restroom?",
     example:"A: すみません、おてあらいはどこですか？\nB: あちらの突(つ)き当(あ)たりです。",
     exampleSrc:"A: Excuse me, where is the restroom?\nB: It is at the end over there.",
     funFact:"Japan has multiple words for restroom: トイレ (casual), おてあらい (polite, literally hand-washing), and 箇所(かしょ) (very formal). Japanese toilets (ウォシュレット) with heated seats and bidet functions amaze foreign visitors. Public restrooms in Japan are exceptionally clean and free to use."},

    {type:"fb", s:"財布(さいふ)を落(お)としたので{1}に行(い)きます。\n(I dropped my wallet so I am going to the police station.)", a:"警察署(けいさつしょ)", opts:["警察署(けいさつしょ)","消防署(しょうぼうしょ)","役所(やくしょ)","図書館(としょかん)"], sSrc:"I dropped my wallet so I am going to the police station.",
     hint:"This is where you report lost items and crimes."},

    {type:"teach", trg:"大使館(たいしかん)", src:"embassy", pos:"noun", gender:null,
     note:"Kanji: 大使館. 大使(たいし) = ambassador.\n領事館(りょうじかん) = consulate.",
     example:"A: 日本(にほん)大使館(たいしかん)はどこですか？\nB: 千代田(ちよだ)区(く)にあります。",
     exampleSrc:"A: Where is the Japanese embassy?\nB: It is in Chiyoda ward.",
     funFact:"Foreign embassies in Tokyo are concentrated in 港(みなと)区(く) (Minato ward) and 千代田(ちよだ)区(く) (Chiyoda ward). 大使館(たいしかん) provide visa services, citizen protection, and cultural events. The American 大使館(たいしかん) near 虎(とら)ノ門(もん) is one of the most heavily guarded buildings in Tokyo."},

    {type:"teach", trg:"神社(じんじゃ)", src:"Shinto shrine", pos:"noun", gender:null,
     note:"Kanji: 神社. Not to be confused with お寺(てら) (Buddhist temple).\n鳥居(とりい) = the gate at the entrance.",
     example:"A: お正月(しょうがつ)に神社(じんじゃ)に行(い)きました。\nB: お参(まい)りしましたか？",
     exampleSrc:"A: I went to a shrine on New Year's.\nB: Did you pray?",
     funFact:"Japan has over 80,000 神社(じんじゃ) (Shinto shrines). The proper worship etiquette is 二拝(にはい)一拍手(いちはくしゅ)二拝(にはい) (two bows, one clap, two bows). 神社(じんじゃ) have 鳥居(とりい) gates (usually red), while お寺(てら) (Buddhist temples) have 山門(さんもん) gates. Many Japanese visit both without seeing a contradiction."},

    {type:"match", pairs:[{trg:"郵便局(ゆうびんきょく)",src:"post office"},{trg:"図書館(としょかん)",src:"library"},{trg:"警察署(けいさつしょ)",src:"police station"},{trg:"公園(こうえん)",src:"park"},{trg:"神社(じんじゃ)",src:"Shinto shrine"}],
     hint:"Match each public facility with its English name."},

    {type:"mc", q:"What is the polite Japanese word for restroom?", opts:["おてあらい","トイレ","ばしょ","入(い)り口(ぐち)"], ans:"おてあらい",
     hint:"This word literally means 'hand washing' and is the most polite option."},

    {type:"fb", s:"子(こ)どもは{1}で遊(あそ)んでいます。\n(The children are playing at the community center.)", a:"児童館(じどうかん)", opts:["児童館(じどうかん)","体育館(たいいくかん)","公園(こうえん)","図書館(としょかん)"], sSrc:"The children are playing at the community center.",
     hint:"This free public facility provides after-school activities for children."},

    {type:"mc", q:"What document do you need to own a car in Japan?", opts:["車庫(しゃこ)証明(しょうめい) (proof of parking space)","運転(うんてん)免許(めんきょ) only","パスポート","在留(ざいりゅう)カード"], ans:"車庫(しゃこ)証明(しょうめい) (proof of parking space)",
     hint:"Japanese cities require p... that you have a dedicated spot to park your vehicle."}
  ]
};
export default BATCH8_L1;
