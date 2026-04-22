// Batch 6 – Unit 15 (A2.2 Directions): Public Services & Buildings
const BATCH6_L1 = {
  id:"jav2_u15l_b6_1", title:"公共施設(こうきょうしせつ)", icon:"🏛️", xp:15, board:true,
  steps:[
    {type:"intro", title:"公共施設(こうきょうしせつ)",
     desc:"Learn the names of public buildings and services you need in daily life. From police boxes to libraries, these locations are essential for navigating Japanese cities and towns.",
     goals:["Name key public buildings and institutions","Ask for directions to public services","Handle basic interactions at public facilities"]},

    {type:"teach", trg:"交番(こうばん)", src:"police box", pos:"noun", gender:null,
     note:"Kanji: 交番. Small neighborhood police stations found on street corners.\n交番(こうばん)で道(みち)を聞(き)く = to ask directions at the police box.",
     example:"A: すみません、近(ちか)くに交番(こうばん)はありますか？\nB: あの角(かど)を曲(ま)がったところにあります。",
     exampleSrc:"A: Excuse me, is there a police box nearby?\nB: It is around that corner.",
     funFact:"Japan's 交番(こうばん) system has been exported to other countries (Brazil, Singapore, Indonesia). These small stations are staffed by friendly officers (お巡(まわ)りさん) who give directions, guard lost property, and patrol on bicycles. There are about 6,000 across Japan."},

    {type:"teach", trg:"図書館(としょかん)", src:"library", pos:"noun", gender:null,
     note:"Kanji: 図書館. 図書館(としょかん)で本(ほん)を借(か)りる = to borrow books at the library.\n図書(としょ)カード = library card.",
     example:"A: 図書館(としょかん)で勉強(べんきょう)してきます。\nB: 静(しず)かでいい場所(ばしょ)ですね。",
     exampleSrc:"A: I am going to study at the library.\nB: It is a nice quiet place.",
     funFact:"Japanese public libraries (公共図書館(こうきょうとしょかん)) are free and well-maintained. Many offer manga sections, children's reading corners, and quiet study spaces. Tokyo's National Diet Library (国会図書館(こっかいとしょかん)) collects every book published in Japan. Libraries also lend CDs and DVDs."},

    {type:"teach", trg:"役所(やくしょ)", src:"city/ward office", pos:"noun", gender:null,
     note:"Kanji: 役所. 市役所(しやくしょ) = city hall. 区役所(くやくしょ) = ward office.\nResidence registration and documents.",
     example:"A: 役所(やくしょ)で住民票(じゅうみんひょう)を取(と)りました。\nB: 手続(てつづ)きは簡単(かんたん)でしたか？",
     exampleSrc:"A: I got a residence certificate at the ward office.\nB: Was the procedure easy?",
     funFact:"Japanese residents interact with 役所(やくしょ) for many life events: moving (転入届(てんにゅうとどけ)), marriage (婚姻届(こんいんとどけ)), birth registration (出生届(しゅっせいとどけ)). The bureaucracy is thorough but orderly. Many services now have English support and online options."},

    {type:"teach", trg:"大使館(たいしかん)", src:"embassy", pos:"noun", gender:null,
     note:"Kanji: 大使館. 領事館(りょうじかん) = consulate.\n大使(たいし) = ambassador.",
     example:"A: パスポートをなくしたので大使館(たいしかん)に行(い)きます。\nB: 場所(ばしょ)は分(わ)かりますか？",
     exampleSrc:"A: I lost my passport so I am going to the embassy.\nB: Do you know the location?",
     funFact:"Tokyo's embassies are concentrated in areas like 六本木(ろっぽんぎ), 麻布(あざぶ), and 赤坂(あかさか). The kanji 館(かん) (building) appears in many public buildings: 美術館(びじゅつかん) (art museum), 博物館(はくぶつかん) (museum), 映画館(えいがかん) (movie theater), 体育館(たいいくかん) (gymnasium)."},

    {type:"teach", trg:"美術館(びじゅつかん)", src:"art museum", pos:"noun", gender:null,
     note:"Kanji: 美術館. 美(び) = beauty, 術(じゅつ) = art, 館(かん) = building.\n博物館(はくぶつかん) = museum (general).",
     example:"A: 今度(こんど)の日曜日(にちようび)に美術館(びじゅつかん)に行(い)きませんか？\nB: いいですね。何(なん)の展示(てんじ)ですか？",
     exampleSrc:"A: Shall we go to the art museum this Sunday?\nB: Sounds good. What exhibition is it?",
     funFact:"Japan has over 1,000 art museums. Tokyo alone has world-class facilities: the National Museum of Modern Art, Mori Art Museum, and teamLab. Japanese 美術館(びじゅつかん) are known for impeccable curation and quiet, contemplative atmospheres. Many have beautiful architecture too."},

    {type:"mc", q:"交番(こうばん) is:", opts:["A small neighborhood police station","A library","A post office","A school"], ans:"A small neighborhood police station",
     hint:"These s... stations are staffed by officers who give directions and help with lost items."},

    {type:"teach", trg:"消防署(しょうぼうしょ)", src:"fire station", pos:"noun", gender:null,
     note:"Kanji: 消防署. 消防車(しょうぼうしゃ) = fire truck.\n消防士(しょうぼうし) = firefighter.",
     example:"A: 火事(かじ)のときは119番(ひゃくじゅうきゅうばん)に電話(でんわ)してください。\nB: 消防署(しょうぼうしょ)の番号(ばんごう)ですね。",
     exampleSrc:"A: In case of fire, please call 119.\nB: That is the fire station number.",
     funFact:"Japan's emergency numbers are 110 (police) and 119 (fire/ambulance). Notice they are reversed from 911. 消防車(しょうぼうしゃ) (fire trucks) in Japan are distinctive red trucks with ladders. Many fire stations hold open days (消防署見学(しょうぼうしょけんがく)) where children can sit in fire trucks."},

    {type:"teach", trg:"体育館(たいいくかん)", src:"gymnasium / sports center", pos:"noun", gender:null,
     note:"Kanji: 体育館. 体育(たいいく) = physical education.\n学校(がっこう)の体育館(たいいくかん) = school gymnasium.",
     example:"A: 体育館(たいいくかん)でバスケをしましょう。\nB: いいですね。何時(なんじ)からですか？",
     exampleSrc:"A: Let us play basketball at the gymnasium.\nB: Sounds good. From what time?",
     funFact:"Every Japanese school has a 体育館(たいいくかん). It serves as the venue for sports days (運動会(うんどうかい)), graduation ceremonies (卒業式(そつぎょうしき)), and assemblies. Community 体育館(たいいくかん) are available for public use at low cost. Many double as evacuation centers during disasters."},

    {type:"teach", trg:"健康(けんこう)", src:"health", pos:"noun", gender:null,
     note:"Kanji: 健康. 健康(けんこう)的(てき) = healthy.\n健康診断(けんこうしんだん) = health checkup.",
     example:"A: 健康(けんこう)のために毎日(まいにち)歩(ある)いています。\nB: いい習慣(しゅうかん)ですね。",
     exampleSrc:"A: I walk every day for my health.\nB: That is a good habit.",
     funFact:"健康(けんこう) is a core Japanese value. Annual health checkups (健康診断(けんこうしんだん)) are mandatory for company employees. The concept of メタボ (metabolic syndrome) entered law: waist measurements are checked at annual physicals. Japan consistently ranks among the world's longest-lived nations."},

    {type:"teach", trg:"安全(あんぜん)", src:"safety / safe", pos:"noun", gender:null,
     note:"Kanji: 安全. 安全(あんぜん)な町(まち) = a safe town.\n交通安全(こうつうあんぜん) = traffic safety.",
     example:"A: 日本(にほん)は安全(あんぜん)な国(くに)ですか？\nB: はい、世界(せかい)でもっとも安全(あんぜん)な国(くに)のひとつです。",
     exampleSrc:"A: Is Japan a safe country?\nB: Yes, it is one of the safest countries in the world.",
     funFact:"Japan consistently ranks as one of the world's safest countries. 安全(あんぜん) culture extends to everything: food safety (食品安全(しょくひんあんぜん)), traffic safety (交通安全(こうつうあんぜん)), and disaster preparedness (防災(ぼうさい)). Children walk to school alone, and lost wallets are routinely returned."},

    {type:"fb", s:"{1}で本(ほん)を借(か)りました。\n(I borrowed books at the library.)", a:"図書館(としょかん)", opts:["図書館(としょかん)","美術館(びじゅつかん)","役所(やくしょ)","交番(こうばん)"], sSrc:"I borrowed books at the library.",
     hint:"This public building is where you go to borrow and read books."},

    {type:"teach", trg:"階段(かいだん)", src:"stairs / staircase", pos:"noun", gender:null,
     note:"Kanji: 階段. 階段(かいだん)を上(のぼ)る = to go up stairs.\n階段(かいだん)を下(お)りる = to go down stairs.",
     example:"A: エレベーターが故障(こしょう)なので階段(かいだん)を使(つか)ってください。\nB: 何階(なんかい)ですか？",
     exampleSrc:"A: The elevator is broken, so please use the stairs.\nB: What floor?",
     funFact:"階段(かいだん) (stairs) is a daily word in Japan where many buildings and stations have multiple levels. エスカレーター (escalator) etiquette varies: in Tokyo you stand on the left and pass on the right; in Osaka, the opposite. This regional difference is a famous cultural quirk."},

    {type:"teach", trg:"エレベーター", src:"elevator", pos:"noun", gender:null,
     note:"Katakana loanword. エレベーターに乗(の)る = to take the elevator.\nAlso: リフト = lift (at ski resorts).",
     example:"A: エレベーターはどこですか？\nB: あちらの突(つ)き当(あ)たりです。",
     exampleSrc:"A: Where is the elevator?\nB: It is at the end of that hallway.",
     funFact:"Japanese elevator etiquette is precise: the person nearest the buttons operates them for everyone, holding the 'open' button (開(ひら)く) for others. When exiting, you say お先(さき)に (going ahead of you) or すみません (excuse me). Some elevators bow (announce floors) in a polite voice."},

    {type:"mc", q:"In Japan, the emergency number for fire and ambulance is:", opts:["999","119","110","911"], ans:"119",
     hint:"The Japanese fire station number is different from the police number (110)."},

    {type:"match", pairs:[
      {trg:"交番(こうばん)", src:"police box"},
      {trg:"図書館(としょかん)", src:"library"},
      {trg:"役所(やくしょ)", src:"city office"},
      {trg:"美術館(びじゅつかん)", src:"art museum"},
      {trg:"消防署(しょうぼうしょ)", src:"fire station"}
    ]},

    {type:"fb", s:"日本(にほん)は世界(せかい)でもっとも{1}な国(くに)のひとつです。\n(Japan is one of the safest countries in the world.)", a:"安全(あんぜん)", opts:["安全(あんぜん)","健康(けんこう)","賑(にぎ)やか","広(ひろ)い"], sSrc:"Japan is one of the safest countries in the world.",
     hint:"The word meaning safety or safe, describing low crime and order."},

    {type:"mc", q:"役所(やくしょ) is the place to:", opts:["Report crimes","See art exhibitions","Register residence and get official documents","Borrow books"], ans:"Register residence and get official documents",
     hint:"This government office handles o... paperwork for residents."}
  ,{type:"match",pairs:[{trg:"大使館(たいしかん)",src:"embassy"},{trg:"体育館(たいいくかん)",src:"gymnasium / sports center"},{trg:"健康(けんこう)",src:"health"},{trg:"階段(かいだん)",src:"stairs / staircase"},{trg:"エレベーター",src:"elevator"}]}]
};
export default BATCH6_L1;
