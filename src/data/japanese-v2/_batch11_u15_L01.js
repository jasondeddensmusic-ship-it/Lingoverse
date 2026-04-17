// Batch 11 – Unit 15 (A2.2 Directions): Transportation Vocabulary
const BATCH11_L1 = {
  id:"jav2_u15l_b11_1", title:"のりもの", icon:"🚃", xp:15, board:true,
  steps:[
    {type:"intro", title:"のりもの",
     desc:"Learn transportation vocabulary essential for getting around Japan. From trains to buses, these words help you navigate one of the world's best transit systems.",
     goals:["Name common types of transportation","Buy tickets and navigate stations","Use transportation verbs: のる, おりる, のりかえる"]},

    {type:"teach", trg:"でんしゃ", src:"train", pos:"noun", gender:null,
     note:"Electric train. でんしゃにのる = ride the train.\nしんかんせん = bullet train.",
     example:"A: でんしゃでいきますか？\nB: はい、やまのてせんにのります。\nA: 本当(ほんとう)ですか？すごいですね。\nB: ありがとうございます。頑張(がんば)りました。",
     exampleSrc:"A: Will you go by train?\nB: Yes, I will take the Yamanote Line.\nA: Really? That is amazing.\nB: Thank you. I worked hard.",
     funFact:"Japan's train system is legendary for punctuality. The average delay is under one minute. しんかんせん (bullet train) has never had a fatal accident in over 60 years of operation. でんしゃ通勤 (train commuting) is a daily ritual for millions of Japanese workers."},

    {type:"teach", trg:"バス", src:"bus", pos:"noun", gender:null,
     note:"バスにのる = ride the bus. バスてい = bus stop.\nろせんバス = city bus.",
     example:"A: バスはなんぷんおきにきますか？\nB: じゅうごふんおきです。\nA: 私(わたし)も興味(きょうみ)があります。\nB: じゃあ、今度(こんど)一緒(いっしょ)にどうですか？",
     exampleSrc:"A: How often does the bus come?\nB: Every fifteen minutes.\nA: I am also interested.\nB: Then, how about doing it together next time?",
     funFact:"Japanese buses in most cities require you to enter from the rear door and exit from the front, paying when you get off. The fare changes based on distance traveled. In Tokyo, the fare is flat-rate. Payment can be made with IC cards like Suica, making transfers seamless."},

    {type:"teach", trg:"ちかてつ", src:"subway / metro", pos:"noun", gender:null,
     note:"Underground train system. ちかてつのえき = subway station.\nTokyo Metro and Toei are the two systems.",
     example:"A: ちかてつとバスとどちらがはやいですか？\nB: ちかてつのほうがはやいです。\nA: どんな感(かん)じでしたか？\nB: 想像(そうぞう)していたよりずっと良(よ)かったです。",
     exampleSrc:"A: Which is faster, the subway or bus?\nB: The subway is faster.\nA: What was it like?\nB: It was much better than I imagined.",
     funFact:"Tokyo's subway system carries over 8 million passengers daily. The famous おしや (pushers) in white gloves help pack commuters into trains during rush hour. Despite the crowding, the system runs with remarkable efficiency. Subway maps look complex but are color-coded for easy navigation."},

    {type:"teach", trg:"タクシー", src:"taxi", pos:"noun", gender:null,
     note:"タクシーにのる = take a taxi.\nDoors open and close automatically.",
     example:"A: タクシーをよびましょうか？\nB: はい、おねがいします。\nA: 何(なに)を食(た)べましたか？\nB: 地元(じもと)の名物(めいぶつ)を食(た)べました。",
     exampleSrc:"A: Shall I call a taxi?\nB: Yes, please.\nA: What did you eat?\nB: I ate the local specialty.",
     funFact:"Japanese taxis have automatic doors operated by the driver. Passengers should NOT open or close the door themselves. Drivers wear white gloves and the interior is always immaculate. Tipping is not expected and can cause confusion. Rides are metered and honest."},

    {type:"teach", trg:"ひこうき", src:"airplane", pos:"noun", gender:null,
     note:"ひこうきにのる = board a plane.\nくうこう = airport.",
     example:"A: とうきょうまでひこうきでなんじかんですか？\nB: やく2じかんです。\nA: 楽(たの)しみですね。\nB: はい、今(いま)からわくわくしています。",
     exampleSrc:"A: How many hours by plane to Tokyo?\nB: About 2 hours.\nA: That is exciting.\nB: Yes, I am already excited.",
     funFact:"Japan's domestic flight network is extensive, with JAL and ANA as the major carriers. なりたくうこう (Narita) handles international flights while はねだくうこう (Haneda) is closer to central Tokyo. LCCs (ていかかくこうくうがいしゃ) have made domestic flying more affordable."},

    {type:"teach", trg:"じてんしゃ", src:"bicycle", pos:"noun", gender:null,
     note:"じてんしゃにのる = ride a bicycle.\nちゅうりんじょう = bicycle parking area.",
     example:"A: がっこうまでじてんしゃでいきます。\nB: なんぷんかかりますか？\nA: いい思(おも)い出(で)ですね。\nB: はい、一生(いっしょう)忘(わす)れません。",
     exampleSrc:"A: I go to school by bicycle.\nB: How many minutes does it take?\nA: That is a nice memory.\nB: Yes, I will never forget it.",
     funFact:"Japan has over 70 million bicycles. ママチャリ (mama's bike) is the iconic Japanese city bicycle with a basket, kickstand, and sometimes a child seat. Bicycle registration is mandatory and helps police return stolen bikes. Organized bicycle parking (駐輪場) is found at every station."},

    {type:"teach", trg:"のる", src:"to ride / to get on", pos:"verb", gender:null,
     note:"Group 1 verb. に + のる = get on/ride.\nバスにのる, でんしゃにのる.",
     example:"A: どこでバスにのりますか？\nB: えきまえのバスていでのります。\nA: どうでしたか？\nB: とても良(よ)かったです。",
     exampleSrc:"A: Where do you get on the bus?\nB: At the bus stop in front of the station.\nA: How was it?\nB: It was very good.",
     funFact:"のる takes the particle に for the vehicle: でんしゃにのる. This is different from English 'ride a train' which uses a direct object. The logic is that you 'get onto' the vehicle. The kanji 乗る pictures a person mounting a tree (or vehicle)."},

    {type:"teach", trg:"おりる", src:"to get off / to descend", pos:"verb", gender:null,
     note:"Group 2 verb. を + おりる = get off (a vehicle).\nバスをおりる = get off the bus.",
     example:"A: つぎのえきでおりてください。\nB: わかりました。ありがとうございます。\nA: いつですか？\nB: 去年(きょねん)の夏(なつ)でした。",
     exampleSrc:"A: Please get off at the next station.\nB: Understood. Thank you.\nA: When was it?\nB: It was last summer.",
     funFact:"おりる uses を for the vehicle: バスをおりる. It can also mean 'to descend' as in やまをおりる (descend a mountain). The kanji 降りる contains the radical for 'falling rain' (降), connecting descent with downward movement."},

    {type:"teach", trg:"のりかえる", src:"to transfer / change (trains)", pos:"verb", gender:null,
     note:"Group 2 verb. のりかえ = a transfer.\nのりかええき = transfer station.",
     example:"A: しぶやでのりかえてください。\nB: なにせんにのりかえますか？\nA: それはいいですね。\nB: はい、とても楽(たの)しかったです。",
     exampleSrc:"A: Please transfer at Shibuya.\nB: Which line do I transfer to?\nA: That is nice.\nB: Yes, it was very fun.",
     funFact:"のりかえ (transfer) is a crucial concept in Japanese transit. Station signs clearly mark のりかえ routes with color coding. Google Maps and Japan-specific apps like えきすぱーと (Ekispert) calculate the optimal transfer path, even accounting for which car to ride for the fastest platform change."},

    {type:"teach", trg:"きっぷ", src:"ticket", pos:"noun", gender:null,
     note:"Traditional paper ticket. Modern: ICカード (Suica, Pasmo).\nきっぷうりば = ticket counter.",
     example:"A: きっぷはどこでかいますか？\nB: じどうはんばいきでかえます。\nA: そうですか。よかったですね。\nB: はい、いい経験(けいけん)でした。",
     exampleSrc:"A: Where do I buy a ticket?\nB: You can buy one at the vending machine.\nA: Is that so? That is good.\nB: Yes, it was a good experience.",
     funFact:"Japan's ticket vending machines (じどうはんばいき) are multilingual and accept cash, cards, and IC cards. Paper tickets are being phased out as IC cards dominate. Suica/Pasmo can be charged at any station and used nationwide. The famous きっぷきり (ticket puncher) sound is nostalgic for many Japanese."},

    {type:"teach", trg:"ていりゅうじょ", src:"bus stop / stopping place", pos:"noun", gender:null,
     note:"Formal word for bus stop. Casual: バスてい.\nElectric display shows the next arrival time.",
     example:"A: ていりゅうじょはどこですか？\nB: そのかどをまがったところです。\nA: また行(い)きたいですか？\nB: はい、ぜひ行(い)きたいです。",
     exampleSrc:"A: Where is the bus stop?\nB: Just around that corner.\nA: Do you want to go again?\nB: Yes, I definitely want to go.",
     funFact:"Japanese bus stops display precise schedules and real-time tracking. Buses in Japan run on schedule to the minute. At busy stops, digital displays show how many minutes until the next arrival. Some rural bus stops have waiting rooms with heaters for winter."},

    // Quiz steps
    {type:"mc", q:"にほんのでんしゃのへいきんちえんじかんはどのくらいですか？",
     opts:["Under one minute","Under five minutes","Under ten minutes","Under thirty minutes"],
     ans:"Under one minute",
     hint:"Japanese trains are famous worldwide for their extraordinary punctuality. The average delay is remarkably small."},

    {type:"fb", s:"しぶやで{1}てください。",
     a:["のりかえ"],
     opts:["のりかえ","のっ","おり","あるい"],
     hint:"The instruction is to change from one train line to another at Shibuya station.",
     sSrc:"Please transfer at Shibuya."},

    {type:"match", pairs:[
      {trg:"のる", src:"to get on"},
      {trg:"おりる", src:"to get off"},
      {trg:"のりかえる", src:"to transfer"},
      {trg:"きっぷ", src:"ticket"}
    ]},

    {type:"mc", q:"にほんのタクシーのドアはどうなりますか？",
     opts:["Opens and closes automatically","The passenger must open it","There is no door","It slides open manually"],
     ans:"Opens and closes automatically",
     hint:"The driver controls the door from inside. Passengers should not try to open or close it themselves."},

    {type:"fb", s:"{1}でがっこうにいきます。じゅっぷんかかります。",
     a:["じてんしゃ"],
     opts:["じてんしゃ","ひこうき","しんかんせん","タクシー"],
     hint:"A 10-minute commute to school using a common two-wheeled vehicle that many Japanese students ride.",
     sSrc:"I go to school by bicycle. It takes 10 minutes."},

    {type:"mc", q:"「ママチャリ」はなんですか？",
     opts:["A Japanese city bicycle with a basket","A motorcycle","A train pass for mothers","A special bus seat"],
     ans:"A Japanese city bicycle with a basket",
     hint:"This iconic J... b... type is associated with daily shopping trips and school commutes."}
  ]
};
export default BATCH11_L1;
