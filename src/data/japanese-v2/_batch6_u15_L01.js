// Batch 6 – Unit 15 (A2.2 Directions): Public Services & Buildings
const BATCH6_L1 = {
  id:"jav2_u15l_b6_1", title:"こうきょうしせつ", icon:"🏛️", xp:15, board:true,
  steps:[
    {type:"intro", title:"こうきょうしせつ",
     desc:"Learn the names of public buildings and services you need in daily life. From police boxes to libraries, these locations are essential for navigating Japanese cities and towns.",
     goals:["Name key public buildings and institutions","Ask for directions to public services","Handle basic interactions at public facilities"]},

    {type:"teach", trg:"こうばん", src:"police box", pos:"noun", gender:null,
     note:"Kanji: 交番. Small neighborhood police stations found on street corners.\nこうばんでみちをきく = to ask directions at the police box.",
     example:"A: すみません、ちかくにこうばんはありますか？\nB: あのかどをまがったところにあります。\nA: よく行(い)きますか？\nB: 月(つき)に一回(いっかい)ぐらい行(い)きます。",
     exampleSrc:"A: Excuse me, is there a police box nearby?\nB: It is around that corner.\nA: Do you go often?\nB: I go about once a month.",
     funFact:"Japan's こうばん system has been exported to other countries (Brazil, Singapore, Indonesia). These small stations are staffed by friendly officers (おまわりさん) who give directions, guard lost property, and patrol on bicycles. There are about 6,000 across Japan."},

    {type:"teach", trg:"としょかん", src:"library", pos:"noun", gender:null,
     note:"Kanji: 図書館. としょかんでほんをかりる = to borrow books at the library.\nとしょカード = library card.",
     example:"A: としょかんでべんきょうしてきます。\nB: しずかでいいばしょですね。\nA: 誰(だれ)と行(い)きましたか？\nB: 友達(ともだち)と一緒(いっしょ)に行(い)きました。",
     exampleSrc:"A: I am going to study at the library.\nB: It is a nice quiet place.\nA: Who did you go with?\nB: I went with a friend.",
     funFact:"Japanese public libraries (こうきょうとしょかん) are free and well-maintained. Many offer manga sections, children's reading corners, and quiet study spaces. Tokyo's National Diet Library (こっかいとしょかん) collects every book published in Japan. Libraries also lend CDs and DVDs."},

    {type:"teach", trg:"やくしょ", src:"city/ward office", pos:"noun", gender:null,
     note:"Kanji: 役所. しやくしょ = city hall. くやくしょ = ward office.\nResidence registration and documents.",
     example:"A: やくしょでじゅうみんひょうをとりました。\nB: てつづきはかんたんでしたか？\nA: それは大変(たいへん)でしたね。\nB: はい、でもいい勉強(べんきょう)になりました。",
     exampleSrc:"A: I got a residence certificate at the ward office.\nB: Was the procedure easy?\nA: That must have been tough.\nB: Yes, but it was a good learning experience.",
     funFact:"Japanese residents interact with やくしょ for many life events: moving (てんにゅうとどけ), marriage (こんいんとどけ), birth registration (しゅっせいとどけ). The bureaucracy is thorough but orderly. Many services now have English support and online options."},

    {type:"teach", trg:"たいしかん", src:"embassy", pos:"noun", gender:null,
     note:"Kanji: 大使館. りょうじかん = consulate.\nたいし = ambassador.",
     example:"A: パスポートをなくしたのでたいしかんにいきます。\nB: ばしょはわかりますか？\nA: 本当(ほんとう)ですか？すごいですね。\nB: ありがとうございます。頑張(がんば)りました。",
     exampleSrc:"A: I lost my passport so I am going to the embassy.\nB: Do you know the location?\nA: Really? That is amazing.\nB: Thank you. I worked hard.",
     funFact:"Tokyo's embassies are concentrated in areas like Roppongi, Azabu, and Akasaka. The kanji 館 (building) appears in many public buildings: びじゅつかん (art museum), はくぶつかん (museum), えいがかん (movie theater), たいいくかん (gymnasium)."},

    {type:"teach", trg:"びじゅつかん", src:"art museum", pos:"noun", gender:null,
     note:"Kanji: 美術館. び = beauty, じゅつ = art, かん = building.\nはくぶつかん = museum (general).",
     example:"A: こんどのにちようびにびじゅつかんにいきませんか？\nB: いいですね。なんのてんじですか？\nA: 私(わたし)も興味(きょうみ)があります。\nB: じゃあ、今度(こんど)一緒(いっしょ)にどうですか？",
     exampleSrc:"A: Shall we go to the art museum this Sunday?\nB: Sounds good. What exhibition is it?\nA: I am also interested.\nB: Then, how about doing it together next time?",
     funFact:"Japan has over 1,000 art museums. Tokyo alone has world-class facilities: the National Museum of Modern Art, Mori Art Museum, and teamLab. Japanese びじゅつかん are known for impeccable curation and quiet, contemplative atmospheres. Many have beautiful architecture too."},

    {type:"mc", q:"こうばん is:", opts:["A small neighborhood police station","A library","A post office","A school"], ans:"A small neighborhood police station",
     hint:"These s... stations are staffed by officers who give directions and help with lost items."},

    {type:"teach", trg:"しょうぼうしょ", src:"fire station", pos:"noun", gender:null,
     note:"Kanji: 消防署. しょうぼうしゃ = fire truck.\nしょうぼうし = firefighter.",
     example:"A: かじのときはひゃくじゅうきゅうばんにでんわしてください。\nB: しょうぼうしょのばんごうですね。\nA: どんな感(かん)じでしたか？\nB: 想像(そうぞう)していたよりずっと良(よ)かったです。",
     exampleSrc:"A: In case of fire, please call 119.\nB: That is the fire station number.\nA: What was it like?\nB: It was much better than I imagined.",
     funFact:"Japan's emergency numbers are 110 (police) and 119 (fire/ambulance). Notice they are reversed from 911. しょうぼうしゃ (fire trucks) in Japan are distinctive red trucks with ladders. Many fire stations hold open days (しょうぼうしょけんがく) where children can sit in fire trucks."},

    {type:"teach", trg:"たいいくかん", src:"gymnasium / sports center", pos:"noun", gender:null,
     note:"Kanji: 体育館. たいいく = physical education.\nがっこうのたいいくかん = school gymnasium.",
     example:"A: たいいくかんでバスケをしましょう。\nB: いいですね。なんじからですか？\nA: 何(なに)を食(た)べましたか？\nB: 地元(じもと)の名物(めいぶつ)を食(た)べました。",
     exampleSrc:"A: Let us play basketball at the gymnasium.\nB: Sounds good. From what time?\nA: What did you eat?\nB: I ate the local specialty.",
     funFact:"Every Japanese school has a たいいくかん. It serves as the venue for sports days (うんどうかい), graduation ceremonies (そつぎょうしき), and assemblies. Community たいいくかん are available for public use at low cost. Many double as evacuation centers during disasters."},

    {type:"teach", trg:"けんこう", src:"health", pos:"noun", gender:null,
     note:"Kanji: 健康. けんこうてき = healthy.\nけんこうしんだん = health checkup.",
     example:"A: けんこうのためにまいにちあるいています。\nB: いいしゅうかんですね。\nA: 楽(たの)しみですね。\nB: はい、今(いま)からわくわくしています。",
     exampleSrc:"A: I walk every day for my health.\nB: That is a good habit.\nA: That is exciting.\nB: Yes, I am already excited.",
     funFact:"けんこう (健康) is a core Japanese value. Annual health checkups (けんこうしんだん) are mandatory for company employees. The concept of metabo (メタボ, metabolic syndrome) entered law: waist measurements are checked at annual physicals. Japan consistently ranks among the world's longest-lived nations."},

    {type:"teach", trg:"あんぜん", src:"safety / safe", pos:"noun", gender:null,
     note:"Kanji: 安全. あんぜんなまち = a safe town.\nこうつうあんぜん = traffic safety.",
     example:"A: にほんはあんぜんなくにですか？\nB: はい、せかいでもっともあんぜんなくにのひとつです。\nA: いい思(おも)い出(で)ですね。\nB: はい、一生(いっしょう)忘(わす)れません。",
     exampleSrc:"A: Is Japan a safe country?\nB: Yes, it is one of the safest countries in the world.\nA: That is a nice memory.\nB: Yes, I will never forget it.",
     funFact:"Japan consistently ranks as one of the world's safest countries. あんぜん culture extends to everything: food safety (しょくひんあんぜん), traffic safety (こうつうあんぜん), and disaster preparedness (ぼうさい). Children walk to school alone, and lost wallets are routinely returned."},

    {type:"fb", s:"{1}でほんをかりました。\n(I borrowed books at the library.)", a:"としょかん", opts:["としょかん","びじゅつかん","やくしょ","こうばん"], sSrc:"I borrowed books at the library.",
     hint:"This public building is where you go to borrow and read books."},

    {type:"teach", trg:"かいだん", src:"stairs / staircase", pos:"noun", gender:null,
     note:"Kanji: 階段. かいだんをのぼる = to go up stairs.\nかいだんをおりる = to go down stairs.",
     example:"A: エレベーターがこしょうなのでかいだんをつかってください。\nB: なんかいですか？\nA: どうでしたか？\nB: とても良(よ)かったです。",
     exampleSrc:"A: The elevator is broken, so please use the stairs.\nB: What floor?\nA: How was it?\nB: It was very good.",
     funFact:"かいだん (stairs) is a daily word in Japan where many buildings and stations have multiple levels. エスカレーター (escalator) etiquette varies: in Tokyo you stand on the left and pass on the right; in Osaka, the opposite. This regional difference is a famous cultural quirk."},

    {type:"teach", trg:"エレベーター", src:"elevator", pos:"noun", gender:null,
     note:"Katakana loanword. エレベーターにのる = to take the elevator.\nAlso: リフト = lift (at ski resorts).",
     example:"A: エレベーターはどこですか？\nB: あちらのつきあたりです。\nA: いつですか？\nB: 去年(きょねん)の夏(なつ)でした。",
     exampleSrc:"A: Where is the elevator?\nB: It is at the end of that hallway.\nA: When was it?\nB: It was last summer.",
     funFact:"Japanese elevator etiquette is precise: the person nearest the buttons operates them for everyone, holding the 'open' button (ひらく) for others. When exiting, you say おさきに (going ahead of you) or すみません (excuse me). Some elevators bow (announce floors) in a polite voice."},

    {type:"mc", q:"In Japan, the emergency number for fire and ambulance is:", opts:["119","110","911","999"], ans:"119",
     hint:"The Japanese fire station number is different from the police number (110)."},

    {type:"match", pairs:[
      {trg:"こうばん", src:"police box"},
      {trg:"としょかん", src:"library"},
      {trg:"やくしょ", src:"city office"},
      {trg:"びじゅつかん", src:"art museum"},
      {trg:"しょうぼうしょ", src:"fire station"}
    ]},

    {type:"fb", s:"にほんはせかいでもっとも{1}なくにのひとつです。\n(Japan is one of the safest countries in the world.)", a:"あんぜん", opts:["あんぜん","けんこう","にぎやか","ひろい"], sSrc:"Japan is one of the safest countries in the world.",
     hint:"The word meaning safety or safe, describing low crime and order."},

    {type:"mc", q:"やくしょ is the place to:", opts:["Register residence and get official documents","Borrow books","Report crimes","See art exhibitions"], ans:"Register residence and get official documents",
     hint:"This government office handles o... paperwork for residents."}
  ]
};
export default BATCH6_L1;
