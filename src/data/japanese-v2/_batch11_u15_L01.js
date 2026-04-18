// Batch 11 – Unit 15 (A2.2 Directions): Transportation Vocabulary
const BATCH11_L1 = {
  id:"jav2_u15l_b11_1", title:"乗(の)り物(もの)", icon:"🚃", xp:15, board:true,
  steps:[
    {type:"intro", title:"乗(の)り物(もの)",
     desc:"Learn transportation vocabulary essential for getting around Japan. From trains to buses, these words help you navigate one of the world's best transit systems.",
     goals:["Name common types of transportation","Buy tickets and navigate stations","Use transportation verbs: 乗(の)る, 降(お)りる, 乗(の)り換(か)える"]},

    {type:"teach", trg:"電車(でんしゃ)", src:"train", pos:"noun", gender:null,
     note:"Electric train. 電車(でんしゃ)に乗(の)る = ride the train.\n新幹線(しんかんせん) = bullet train.",
     example:"A: 電車(でんしゃ)で行(い)きますか？\nB: はい、山手線(やまのてせん)に乗(の)ります。\nA: 本当(ほんとう)ですか？すごいですね。\nB: ありがとうございます。頑張(がんば)りました。",
     exampleSrc:"A: Will you go by train?\nB: Yes, I will take the Yamanote Line.\nA: Really? That is amazing.\nB: Thank you. I worked hard.",
     funFact:"Japan's train system is legendary for punctuality. The average delay is under one minute. 新幹線(しんかんせん) (bullet train) has never had a fatal accident in over 60 years of operation. 電車(でんしゃ)通勤(つうきん) (train commuting) is a daily ritual for millions of Japanese workers."},

    {type:"teach", trg:"バス", src:"bus", pos:"noun", gender:null,
     note:"バスに乗(の)る = ride the bus. バス停(てい) = bus stop.\n路線(ろせん)バス = city bus.",
     example:"A: バスは何分(なんぷん)おきに来(き)ますか？\nB: 十五分(じゅうごふん)おきです。\nA: 私(わたし)も興味(きょうみ)があります。\nB: じゃあ、今度(こんど)一緒(いっしょ)にどうですか？",
     exampleSrc:"A: How often does the bus come?\nB: Every fifteen minutes.\nA: I am also interested.\nB: Then, how about doing it together next time?",
     funFact:"Japanese buses in most cities require you to enter from the rear door and exit from the front, paying when you get off. The fare changes based on distance traveled. In Tokyo, the fare is flat-rate. Payment can be made with IC cards like Suica, making transfers seamless."},

    {type:"teach", trg:"地下鉄(ちかてつ)", src:"subway / metro", pos:"noun", gender:null,
     note:"Underground train system. 地下鉄(ちかてつ)の駅(えき) = subway station.\nTokyo Metro and Toei are the two systems.",
     example:"A: 地下鉄(ちかてつ)とバスとどちらが早(はや)いですか？\nB: 地下鉄(ちかてつ)の方(ほう)が早(はや)いです。\nA: どんな感(かん)じでしたか？\nB: 想像(そうぞう)していたよりずっと良(よ)かったです。",
     exampleSrc:"A: Which is faster, the subway or bus?\nB: The subway is faster.\nA: What was it like?\nB: It was much better than I imagined.",
     funFact:"Tokyo's subway system carries over 8 million passengers daily. The famous おしや (pushers) in white gloves help pack commuters into trains during rush hour. Despite the crowding, the system runs with remarkable efficiency. Subway maps look complex but are color-coded for easy navigation."},

    {type:"teach", trg:"タクシー", src:"taxi", pos:"noun", gender:null,
     note:"タクシーに乗(の)る = take a taxi.\nDoors open and close automatically.",
     example:"A: タクシーを呼(よ)びましょうか？\nB: はい、お願(ねが)いします。\nA: 何(なに)を食(た)べましたか？\nB: 地元(じもと)の名物(めいぶつ)を食(た)べました。",
     exampleSrc:"A: Shall I call a taxi?\nB: Yes, please.\nA: What did you eat?\nB: I ate the local specialty.",
     funFact:"Japanese taxis have automatic doors operated by the driver. Passengers should NOT open or close the door themselves. Drivers wear white gloves and the interior is always immaculate. Tipping is not expected and can cause confusion. Rides are metered and honest."},

    {type:"teach", trg:"飛行機(ひこうき)", src:"airplane", pos:"noun", gender:null,
     note:"飛行機(ひこうき)に乗(の)る = board a plane.\n空港(くうこう) = airport.",
     example:"A: 東京(とうきょう)まで飛行機(ひこうき)で何時間(なんじかん)ですか？\nB: 約(やく)2時間(じかん)です。\nA: 楽(たの)しみですね。\nB: はい、今(いま)からわくわくしています。",
     exampleSrc:"A: How many hours by plane to Tokyo?\nB: About 2 hours.\nA: That is exciting.\nB: Yes, I am already excited.",
     funFact:"Japan's domestic flight network is extensive, with JAL and ANA as the major carriers. 成田空港(なりたくうこう) (Narita) handles international flights while 羽田空港(はねだくうこう) (Haneda) is closer to central Tokyo. LCCs (低価格航空会社(ていかかくこうくうがいしゃ)) have made domestic flying more affordable."},

    {type:"teach", trg:"自転車(じてんしゃ)", src:"bicycle", pos:"noun", gender:null,
     note:"自転車(じてんしゃ)に乗(の)る = ride a bicycle.\n駐輪場(ちゅうりんじょう) = bicycle parking area.",
     example:"A: 学校(がっこう)まで自転車(じてんしゃ)で行(い)きます。\nB: 何分(なんぷん)かかりますか？\nA: いい思(おも)い出(で)ですね。\nB: はい、一生(いっしょう)忘(わす)れません。",
     exampleSrc:"A: I go to school by bicycle.\nB: How many minutes does it take?\nA: That is a nice memory.\nB: Yes, I will never forget it.",
     funFact:"Japan has over 70 million bicycles. ママチャリ (mama's bike) is the iconic Japanese city bicycle with a basket, kickstand, and sometimes a child seat. Bicycle registration is mandatory and helps police return stolen bikes. Organized bicycle parking (駐輪場(ちゅうりんじょう)) is found at every station."},

    {type:"teach", trg:"乗(の)る", src:"to ride / to get on", pos:"verb", gender:null,
     note:"Group 1 verb. に + 乗(の)る = get on/ride.\nバスに乗(の)る, 電車(でんしゃ)に乗(の)る.",
     example:"A: どこでバスに乗(の)りますか？\nB: 駅前(えきまえ)のバス停(てい)で乗(の)ります。\nA: どうでしたか？\nB: とても良(よ)かったです。",
     exampleSrc:"A: Where do you get on the bus?\nB: At the bus stop in front of the station.\nA: How was it?\nB: It was very good.",
     funFact:"乗(の)る takes the particle に for the vehicle: 電車(でんしゃ)に乗(の)る. This is different from English 'ride a train' which uses a direct object. The logic is that you 'get onto' the vehicle. The kanji 乗る pictures a person mounting a tree (or vehicle)."},

    {type:"teach", trg:"降(お)りる", src:"to get off / to descend", pos:"verb", gender:null,
     note:"Group 2 verb. を + 降(お)りる = get off (a vehicle).\nバスを降(お)りる = get off the bus.",
     example:"A: 次(つぎ)の駅(えき)で降(お)りてください。\nB: わかりました。ありがとうございます。\nA: いつですか？\nB: 去年(きょねん)の夏(なつ)でした。",
     exampleSrc:"A: Please get off at the next station.\nB: Understood. Thank you.\nA: When was it?\nB: It was last summer.",
     funFact:"降(お)りる uses を for the vehicle: バスを降(お)りる. It can also mean 'to descend' as in 山(やま)を降(お)りる (descend a mountain). The kanji 降りる contains the radical for 'falling rain' (降), connecting descent with downward movement."},

    {type:"teach", trg:"乗(の)り換(か)える", src:"to transfer / change (trains)", pos:"verb", gender:null,
     note:"Group 2 verb. 乗(の)り換(か)え = a transfer.\n乗(の)り換(か)え駅(えき) = transfer station.",
     example:"A: 渋谷(しぶや)で乗(の)り換(か)えてください。\nB: 何線(なにせん)に乗(の)り換(か)えますか？\nA: それはいいですね。\nB: はい、とても楽(たの)しかったです。",
     exampleSrc:"A: Please transfer at Shibuya.\nB: Which line do I transfer to?\nA: That is nice.\nB: Yes, it was very fun.",
     funFact:"乗(の)り換(か)え (transfer) is a crucial concept in Japanese transit. Station signs clearly mark 乗(の)り換(か)え routes with color coding. Google Maps and Japan-specific apps like えきすぱーと (Ekispert) calculate the optimal transfer path, even accounting for which car to ride for the fastest platform change."},

    {type:"teach", trg:"切符(きっぷ)", src:"ticket", pos:"noun", gender:null,
     note:"Traditional paper ticket. Modern: ICカード (Suica, Pasmo).\n切符売(きっぷう)り場(ば) = ticket counter.",
     example:"A: 切符(きっぷ)はどこで買(か)いますか？\nB: 自動販売機(じどうはんばいき)で買(か)えます。\nA: そうですか。よかったですね。\nB: はい、いい経験(けいけん)でした。",
     exampleSrc:"A: Where do I buy a ticket?\nB: You can buy one at the vending machine.\nA: Is that so? That is good.\nB: Yes, it was a good experience.",
     funFact:"Japan's ticket vending machines (自動販売機(じどうはんばいき)) are multilingual and accept cash, cards, and IC cards. Paper tickets are being phased out as IC cards dominate. Suica/Pasmo can be charged at any station and used nationwide. The famous 切符(きっぷ)切(き)り (ticket puncher) sound is nostalgic for many Japanese."},

    {type:"teach", trg:"停留所(ていりゅうじょ)", src:"bus stop / stopping place", pos:"noun", gender:null,
     note:"Formal word for bus stop. Casual: バス停(てい).\nElectric display shows the next arrival time.",
     example:"A: 停留所(ていりゅうじょ)はどこですか？\nB: そのかどを曲(ま)がったところです。\nA: また行(い)きたいですか？\nB: はい、ぜひ行(い)きたいです。",
     exampleSrc:"A: Where is the bus stop?\nB: Just around that corner.\nA: Do you want to go again?\nB: Yes, I definitely want to go.",
     funFact:"Japanese bus stops display precise schedules and real-time tracking. Buses in Japan run on schedule to the minute. At busy stops, digital displays show how many minutes until the next arrival. Some rural bus stops have waiting rooms with heaters for winter."},

    // Quiz steps
    {type:"mc", q:"日本(にほん)の電車(でんしゃ)の平均(へいきん)遅延(ちえん)時間(じかん)はどのくらいですか？",
     opts:["Under one minute","Under five minutes","Under ten minutes","Under thirty minutes"],
     ans:"Under one minute",
     hint:"Japanese trains are famous worldwide for their extraordinary punctuality. The average delay is remarkably small."},

    {type:"fb", s:"渋谷(しぶや)で{1}てください。",
     a:["乗(の)り換(か)え"],
     opts:["乗(の)り換(か)え","乗(の)っ","降(お)り","歩(ある)い"],
     hint:"The instruction is to change from one train line to another at Shibuya station.",
     sSrc:"Please transfer at Shibuya."},

    {type:"match", pairs:[
      {trg:"乗(の)る", src:"to get on"},
      {trg:"降(お)りる", src:"to get off"},
      {trg:"乗(の)り換(か)える", src:"to transfer"},
      {trg:"切符(きっぷ)", src:"ticket"}
    ]},

    {type:"mc", q:"日本(にほん)のタクシーのドアはどうなりますか？",
     opts:["Opens and closes automatically","The passenger must open it","There is no door","It slides open manually"],
     ans:"Opens and closes automatically",
     hint:"The driver controls the door from inside. Passengers should not try to open or close it themselves."},

    {type:"fb", s:"{1}で学校(がっこう)に行(い)きます。十分(じゅっぷん)かかります。",
     a:["自転車(じてんしゃ)"],
     opts:["自転車(じてんしゃ)","飛行機(ひこうき)","新幹線(しんかんせん)","タクシー"],
     hint:"A 10-minute commute to school using a common two-wheeled vehicle that many Japanese students ride.",
     sSrc:"I go to school by bicycle. It takes 10 minutes."},

    {type:"mc", q:"「ママチャリ」はなんですか？",
     opts:["A Japanese city bicycle with a basket","A motorcycle","A train pass for mothers","A special bus seat"],
     ans:"A Japanese city bicycle with a basket",
     hint:"This iconic J... b... type is associated with daily shopping trips and school commutes."}
  ,{type:"match",pairs:[{trg:"電車(でんしゃ)",src:"train"},{trg:"バス",src:"bus"},{trg:"地下鉄(ちかてつ)",src:"subway / metro"},{trg:"タクシー",src:"taxi"},{trg:"飛行機(ひこうき)",src:"airplane"},{trg:"停留所(ていりゅうじょ)",src:"bus stop / stopping place"}]}]
};
export default BATCH11_L1;
