// Batch 7 – Unit 08 (A2.1 Places & Location): Buildings & Facilities
const BATCH7_L1 = {
  id:"jav2_u08l_b7_1", title:"施設(しせつ)と建物(たてもの)", icon:"🏛️", xp:15, board:true,
  steps:[
    {type:"intro", title:"施設(しせつ)と建物(たてもの)",
     desc:"Learn the names of buildings and public facilities you encounter in a Japanese town. From hospitals to post offices, these nouns will help you navigate any neighborhood.",
     goals:["Name common public buildings and facilities","Ask for directions to specific places","Use location phrases with new building vocabulary"]},

    {type:"teach", trg:"病院(びょういん)", src:"hospital", pos:"noun", gender:null,
     note:"病院(びょういん)に行(い)く = to go to the hospital.\nDifferent from クリニック (small clinic).",
     example:"A: 病院(びょういん)はどこですか？\nB: あの大(おお)きい建物(たてもの)です。",
     exampleSrc:"A: Where is the hospital?\nB: That big building over there.",
     funFact:"Japanese 病院(びょういん) often have long wait times. The expression 三時間(さんじかん)待(ま)ち、三分(さんぷん)診察(しんさつ) (3-hour wait, 3-minute consultation) is a famous complaint. Many people go to smaller クリニック (clinics) first. You need a referral letter (紹介状(しょうかいじょう)) for large hospitals."},

    {type:"teach", trg:"役所(やくしょ)", src:"city hall / government office", pos:"noun", gender:null,
     note:"Also: 市役所(しやくしょ) = city hall.\n役所(やくしょ)に届(とど)けを出(だ)す = to file paperwork.",
     example:"A: 引越(ひっこし)の手続(てつづ)きは役所(やくしょ)でします。\nB: 何時(なんじ)まで開(あ)いていますか？",
     exampleSrc:"A: Moving paperwork is done at city hall.\nB: Until what time is it open?",
     funFact:"役所(やくしょ) handles all life events: birth registration, marriage, moving, passports, and death certificates. Japanese bureaucracy requires physical documents with personal seals (判子(はんこ)). Digital government services are slowly expanding, but paper forms remain common."},

    {type:"teach", trg:"図書館(としょかん)", src:"library", pos:"noun", gender:null,
     note:"図書館(としょかん)で本(ほん)を借(か)りる = to borrow books at the library.",
     example:"A: 図書館(としょかん)で勉強(べんきょう)しましょう。\nB: いいですね。静(しず)かですから。",
     exampleSrc:"A: Let us study at the library.\nB: Good idea. It is quiet.",
     funFact:"Japanese 図書館(としょかん) are remarkably quiet and well-maintained. Many have manga sections, CD/DVD lending, and free study rooms. Some modern libraries like 武雄市立図書館(たけおしりつとしょかん) (designed with Tsutaya) have become tourist attractions with cafes inside."},

    {type:"teach", trg:"郵便局(ゆうびんきょく)", src:"post office", pos:"noun", gender:null,
     note:"郵便局員(ゆうびんきょくいん) = postal worker.\nMark: red 〒 symbol.",
     example:"A: 郵便局(ゆうびんきょく)は何時(なんじ)からですか？\nB: 九時(くじ)から五時(ごじ)までです。",
     exampleSrc:"A: From what time is the post office open?\nB: From 9 to 5.",
     funFact:"Japanese 郵便局(ゆうびんきょく) do more than mail. They offer savings accounts, insurance, and ATM services. The red 〒 symbol is unique to Japan. New Year postcards (年賀状(ねんがじょう)) are a massive postal event: over 2 billion cards are sent annually."},

    {type:"teach", trg:"警察署(けいさつしょ)", src:"police station", pos:"noun", gender:null,
     note:"Also: 交番(こうばん) = police box (small local station).\n警察(けいさつ) = police. 署(しょ) = station/office.",
     example:"A: 財布(さいふ)をなくしました。警察署(けいさつしょ)はどこですか？\nB: 駅(えき)の隣(となり)にあります。",
     exampleSrc:"A: I lost my wallet. Where is the police station?\nB: It is next to the station.",
     funFact:"Japan's 交番(こうばん) (police box) system is admired worldwide. Small neighborhood police stations staffed by officers who know the local area. They help with directions, lost items, and minor disputes. Japan's lost-and-found system is legendary. Over 3 million items are returned annually."},

    {type:"teach", trg:"消防署(しょうぼうしょ)", src:"fire station", pos:"noun", gender:null,
     note:"消防士(しょうぼうし) = firefighter. 消防車(しょうぼうしゃ) = fire truck.\n救急車(きゅうきゅうしゃ) = ambulance.",
     example:"A: 消防署(しょうぼうしょ)の電話番号(でんわばんごう)は119番(ばん)です。\nB: 警察(けいさつ)は110番(ばん)ですね。",
     exampleSrc:"A: The fire station number is 119.\nB: Police is 110, right?",
     funFact:"Japan's emergency numbers differ from many countries: 110 for police, 119 for fire and ambulance. 消防署(しょうぼうしょ) also dispatches ambulances. Japanese 消防士(しょうぼうし) are highly respected and perform annual acrobatic ladder performances (出初式(でぞめしき)) on New Year."},

    {type:"teach", trg:"体育館(たいいくかん)", src:"gymnasium / sports hall", pos:"noun", gender:null,
     note:"体育(たいいく) = physical education. 館(かん) = hall/building.\nEvery school has a 体育館(たいいくかん).",
     example:"A: 体育館(たいいくかん)でバスケットボールをしましょう。\nB: いいですね。",
     exampleSrc:"A: Let us play basketball in the gym.\nB: Sounds good.",
     funFact:"Every Japanese school has a 体育館(たいいくかん) that doubles as a community hall and emergency shelter. During disasters, schools open their gyms for evacuees. The 体育館(たいいくかん) also hosts 入学式(にゅうがくしき) (entrance ceremonies) and 卒業式(そつぎょうしき) (graduation ceremonies)."},

    {type:"teach", trg:"博物館(はくぶつかん)", src:"museum", pos:"noun", gender:null,
     note:"博(はく) = broad, 物(ぶつ) = things, 館(かん) = hall.\n美術館(びじゅつかん) = art museum (different word).",
     example:"A: 博物館(はくぶつかん)に行(い)きませんか？\nB: いいですね。日曜日(にちようび)は無料(むりょう)ですよ。",
     exampleSrc:"A: Shall we go to the museum?\nB: Sounds good. It is free on Sundays.",
     funFact:"Japan has over 5,700 博物館(はくぶつかん), one of the highest numbers per capita. The 東京国立博物館(とうきょうこくりつはくぶつかん) holds 120,000 artifacts. Japanese museums range from national treasures to quirky specialty museums like the カップヌードルミュージアム and the トイレ博物館(はくぶつかん)."},

    {type:"teach", trg:"神社(じんじゃ)", src:"Shinto shrine", pos:"noun", gender:null,
     note:"Also: お宮(みや) (polite). Mark: torii gate (鳥居(とりい)).\nお参(まい)りする = to visit a shrine.",
     example:"A: お正月(しょうがつ)に神社(じんじゃ)に行(い)きますか？\nB: はい、初詣(はつもうで)に行(い)きます。",
     exampleSrc:"A: Do you go to a shrine at New Year?\nB: Yes, I go for the first visit.",
     funFact:"Japan has about 80,000 神社(じんじゃ) (Shinto shrines), more than convenience stores. 初詣(はつもうで) (first shrine visit of the year) draws over 80 million visitors in the first three days of January. You clap twice, bow, and make a wish. The 鳥居(とりい) gate marks the boundary between sacred and ordinary."},

    {type:"teach", trg:"お寺(てら)", src:"Buddhist temple", pos:"noun", gender:null,
     note:"Also: 寺(じ)/寺(てら) without お prefix. Mark: 卍 (manji) symbol on maps.\n座禅(ざぜん) = temple meditation.",
     example:"A: 京都(きょうと)でお寺(てら)を見(み)ましたか？\nB: はい、金閣寺(きんかくじ)に行(い)きました。",
     exampleSrc:"A: Did you see temples in Kyoto?\nB: Yes, I went to Kinkakuji.",
     funFact:"Japan has 77,000 Buddhist temples (お寺(てら)). Most Japanese practice both Shinto and Buddhism without contradiction. They visit 神社(じんじゃ) for life celebrations and お寺(てら) for funerals. 京都(きょうと)だけで1,600以上(いじょう)のお寺(てら)があります. Many offer stays (宿坊(しゅくぼう)) where visitors can experience monk life."},

    {type:"teach", trg:"空港(くうこう)", src:"airport", pos:"noun", gender:null,
     note:"空(くう) = sky/air, 港(こう) = port.\n空港(くうこう)バス = airport bus.",
     example:"A: 空港(くうこう)までどうやって行(い)きますか？\nB: 電車(でんしゃ)で一時間(いちじかん)です。",
     exampleSrc:"A: How do you get to the airport?\nB: One hour by train.",
     funFact:"成田空港(なりたくうこう) is 60 km from central Tokyo, an unusually long distance. This is because of fierce 1960-70s protests by farmers who refused to sell their land. Some holdout farms still exist inside the airport perimeter. 羽田空港(はねだくうこう), closer to the city, has become the preferred gateway."},

    {type:"teach", trg:"公園(こうえん)", src:"park", pos:"noun", gender:null,
     note:"公園(こうえん)で遊(あそ)ぶ = to play in the park.\n中央公園(ちゅうおうこうえん) = central park.",
     example:"A: 日曜日(にちようび)は公園(こうえん)に行(い)きましょう。\nB: いいですね。お弁当(べんとう)を持(も)っていきましょう。",
     exampleSrc:"A: Let us go to the park on Sunday.\nB: Sounds good. Let us bring lunch boxes.",
     funFact:"公園(こうえん) are centers of community life. 花見(はなみ) (flower viewing) in parks draws millions. Many parks have free exercise equipment for elderly residents doing morning radio exercises (ラジオ体操(たいそう)). 東京(とうきょう)の代々木公園(よよぎこうえん), 上野公園(うえのこうえん), and 新宿御苑(しんじゅくぎょえん) are famous nationwide."},

    {type:"teach", trg:"動物園(どうぶつえん)", src:"zoo", pos:"noun", gender:null,
     note:"動物(どうぶつ) = animal, 園(えん) = garden/park.\n上野動物園(うえのどうぶつえん) = Ueno Zoo (Tokyo's oldest).",
     example:"A: 動物園(どうぶつえん)にパンダがいますか？\nB: はい、上野動物園(うえのどうぶつえん)にいますよ。",
     exampleSrc:"A: Are there pandas at the zoo?\nB: Yes, at Ueno Zoo.",
     funFact:"上野動物園(うえのどうぶつえん) opened in 1882 and is Japan's oldest zoo. When giant pandas arrived in 1972 as a diplomatic gift from China, pandamania swept Japan. Baby panda births still make national news. Over 3 million people visit 上野動物園(うえのどうぶつえん) annually."},

    // Quiz steps
    {type:"mc", q:"Japan's emergency number for fire and ambulance is:",
     opts:["119","110","911","112"],
     ans:"119",
     hint:"Different from the police number (110). The fire station also dispatches ambulances."},

    {type:"match", pairs:[
      {trg:"病院(びょういん)", src:"hospital"},
      {trg:"図書館(としょかん)", src:"library"},
      {trg:"郵便局(ゆうびんきょく)", src:"post office"},
      {trg:"警察署(けいさつしょ)", src:"police station"},
      {trg:"空港(くうこう)", src:"airport"}
    ]},

    {type:"fb", s:"引越(ひっこし)の手続(てつづ)きは{1}でします。",
     a:["役所(やくしょ)"],
     opts:["役所(やくしょ)","病院(びょういん)","郵便局(ゆうびんきょく)","警察署(けいさつしょ)"],
     hint:"This is the government office where you file paperwork for moving, births, and marriages.",
     sSrc:"Moving paperwork is done at the {1}."},

    {type:"mc", q:"神社(じんじゃ) and お寺(てら): which one has a torii gate?",
     opts:["Neither has torii gates","神社(じんじゃ) (Shinto shrine)","お寺(てら) (Buddhist temple)","Both have torii gates"],
     ans:"神社(じんじゃ) (Shinto shrine)",
     hint:"The red gate that marks the boundary between the ordinary and sacred world belongs to this type of religious site."},

    {type:"fb", s:"日曜日(にちようび)は{1}が無料(むりょう)ですよ。",
     a:["博物館(はくぶつかん)"],
     opts:["博物館(はくぶつかん)","レストラン","スーパー","病院(びょういん)"],
     hint:"Some of these cultural institutions are free on Sundays. They house historical and scientific collections.",
     sSrc:"The {1} is free on Sundays."},

    {type:"mc", q:"交番(こうばん) is:",
     opts:["A type of convenience store","A train station ticket office","A small neighborhood police station","A large central police headquarters"],
     ans:"A small neighborhood police station",
     hint:"These s... local stations are staffed by officers who know the area and help with directions and lost items."},

    {type:"match", pairs:[
      {trg:"神社(じんじゃ)", src:"Shinto shrine"},
      {trg:"お寺(てら)", src:"Buddhist temple"},
      {trg:"公園(こうえん)", src:"park"},
      {trg:"博物館(はくぶつかん)", src:"museum"},
      {trg:"体育館(たいいくかん)", src:"gymnasium"}
    ]},

    {type:"fb", s:"上野(うえの){1}にパンダがいますよ。",
     a:["動物園(どうぶつえん)"],
     opts:["動物園(どうぶつえん)","公園(こうえん)","博物館(はくぶつかん)","神社(じんじゃ)"],
     hint:"This facility keeps animals for public viewing. Ueno's is Tokyo's oldest and most famous.",
     sSrc:"There are pandas at Ueno {1}."}
  ,{type:"match",pairs:[{trg:"消防署(しょうぼうしょ)",src:"fire station"}]}]
};
export default BATCH7_L1;
