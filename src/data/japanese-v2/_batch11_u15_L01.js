// Batch 11 – Unit 15 (A2.2 Directions): Transportation Vocabulary
const BATCH11_L1 = {
  id:"jav2_u15l_b11_1", title:"のりもの", icon:"🚃", xp:15, board:true,
  steps:[
    {type:"intro", title:"のりもの",
     desc:"Learn transportation vocabulary essential for getting around Japan. From trains to buses, these words help you navigate one of the world's best transit systems.",
     goals:["Name common types of transportation","Buy tickets and navigate stations","Use transportation verbs: のる, おりる, のりかえる"]},

    {type:"teach", trg:"でんしゃ", src:"train", pos:"noun", gender:null,
     note:"Electric train. でんしゃにのる = ride the train.\nしんかんせん = bullet train.",
     example:"A: でんしゃでいきますか？\nB: はい、やまのてせんにのります。",
     exampleSrc:"A: Will you go by train?\nB: Yes, I will take the Yamanote Line.",
     funFact:"Japan's train system is legendary for punctuality. The average delay is under one minute. しんかんせん (bullet train) has never had a fatal accident in over 60 years of operation. でんしゃ通勤 (train commuting) is a daily ritual for millions of Japanese workers."},

    {type:"teach", trg:"バス", src:"bus", pos:"noun", gender:null,
     note:"バスにのる = ride the bus. バスてい = bus stop.\nろせんバス = city bus.",
     example:"A: バスはなんぷんおきにきますか？\nB: じゅうごふんおきです。",
     exampleSrc:"A: How often does the bus come?\nB: Every fifteen minutes.",
     funFact:"Japanese buses in most cities require you to enter from the rear door and exit from the front, paying when you get off. The fare changes based on distance traveled. In Tokyo, the fare is flat-rate. Payment can be made with IC cards like Suica, making transfers seamless."},

    {type:"teach", trg:"ちかてつ", src:"subway / metro", pos:"noun", gender:null,
     note:"Underground train system. ちかてつのえき = subway station.\nTokyo Metro and Toei are the two systems.",
     example:"A: ちかてつとバスとどちらがはやいですか？\nB: ちかてつのほうがはやいです。",
     exampleSrc:"A: Which is faster, the subway or bus?\nB: The subway is faster.",
     funFact:"Tokyo's subway system carries over 8 million passengers daily. The famous おしや (pushers) in white gloves help pack commuters into trains during rush hour. Despite the crowding, the system runs with remarkable efficiency. Subway maps look complex but are color-coded for easy navigation."},

    {type:"teach", trg:"タクシー", src:"taxi", pos:"noun", gender:null,
     note:"タクシーにのる = take a taxi.\nDoors open and close automatically.",
     example:"A: タクシーをよびましょうか？\nB: はい、おねがいします。",
     exampleSrc:"A: Shall I call a taxi?\nB: Yes, please.",
     funFact:"Japanese taxis have automatic doors operated by the driver. Passengers should NOT open or close the door themselves. Drivers wear white gloves and the interior is always immaculate. Tipping is not expected and can cause confusion. Rides are metered and honest."},

    {type:"teach", trg:"ひこうき", src:"airplane", pos:"noun", gender:null,
     note:"ひこうきにのる = board a plane.\nくうこう = airport.",
     example:"A: とうきょうまでひこうきでなんじかんですか？\nB: やく2じかんです。",
     exampleSrc:"A: How many hours by plane to Tokyo?\nB: About 2 hours.",
     funFact:"Japan's domestic flight network is extensive, with JAL and ANA as the major carriers. なりたくうこう (Narita) handles international flights while はねだくうこう (Haneda) is closer to central Tokyo. LCCs (ていかかくこうくうがいしゃ) have made domestic flying more affordable."},

    {type:"teach", trg:"じてんしゃ", src:"bicycle", pos:"noun", gender:null,
     note:"じてんしゃにのる = ride a bicycle.\nちゅうりんじょう = bicycle parking area.",
     example:"A: がっこうまでじてんしゃでいきます。\nB: なんぷんかかりますか？",
     exampleSrc:"A: I go to school by bicycle.\nB: How many minutes does it take?",
     funFact:"Japan has over 70 million bicycles. ママチャリ (mama's bike) is the iconic Japanese city bicycle with a basket, kickstand, and sometimes a child seat. Bicycle registration is mandatory and helps police return stolen bikes. Organized bicycle parking (駐輪場) is found at every station."},

    {type:"teach", trg:"のる", src:"to ride / to get on", pos:"verb", gender:null,
     note:"Group 1 verb. に + のる = get on/ride.\nバスにのる, でんしゃにのる.",
     example:"A: どこでバスにのりますか？\nB: えきまえのバスていでのります。",
     exampleSrc:"A: Where do you get on the bus?\nB: At the bus stop in front of the station.",
     funFact:"のる takes the particle に for the vehicle: でんしゃにのる. This is different from English 'ride a train' which uses a direct object. The logic is that you 'get onto' the vehicle. The kanji 乗る pictures a person mounting a tree (or vehicle)."},

    {type:"teach", trg:"おりる", src:"to get off / to descend", pos:"verb", gender:null,
     note:"Group 2 verb. を + おりる = get off (a vehicle).\nバスをおりる = get off the bus.",
     example:"A: つぎのえきでおりてください。\nB: わかりました。ありがとうございます。",
     exampleSrc:"A: Please get off at the next station.\nB: Understood. Thank you.",
     funFact:"おりる uses を for the vehicle: バスをおりる. It can also mean 'to descend' as in やまをおりる (descend a mountain). The kanji 降りる contains the radical for 'falling rain' (降), connecting descent with downward movement."},

    {type:"teach", trg:"のりかえる", src:"to transfer / change (trains)", pos:"verb", gender:null,
     note:"Group 2 verb. のりかえ = a transfer.\nのりかええき = transfer station.",
     example:"A: しぶやでのりかえてください。\nB: なにせんにのりかえますか？",
     exampleSrc:"A: Please transfer at Shibuya.\nB: Which line do I transfer to?",
     funFact:"のりかえ (transfer) is a crucial concept in Japanese transit. Station signs clearly mark のりかえ routes with color coding. Google Maps and Japan-specific apps like えきすぱーと (Ekispert) calculate the optimal transfer path, even accounting for which car to ride for the fastest platform change."},

    {type:"teach", trg:"きっぷ", src:"ticket", pos:"noun", gender:null,
     note:"Traditional paper ticket. Modern: ICカード (Suica, Pasmo).\nきっぷうりば = ticket counter.",
     example:"A: きっぷはどこでかいますか？\nB: じどうはんばいきでかえます。",
     exampleSrc:"A: Where do I buy a ticket?\nB: You can buy one at the vending machine.",
     funFact:"Japan's ticket vending machines (じどうはんばいき) are multilingual and accept cash, cards, and IC cards. Paper tickets are being phased out as IC cards dominate. Suica/Pasmo can be charged at any station and used nationwide. The famous きっぷきり (ticket puncher) sound is nostalgic for many Japanese."},

    {type:"teach", trg:"ていりゅうじょ", src:"bus stop / stopping place", pos:"noun", gender:null,
     note:"Formal word for bus stop. Casual: バスてい.\nElectric display shows the next arrival time.",
     example:"A: ていりゅうじょはどこですか？\nB: そのかどをまがったところです。",
     exampleSrc:"A: Where is the bus stop?\nB: Just around that corner.",
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
