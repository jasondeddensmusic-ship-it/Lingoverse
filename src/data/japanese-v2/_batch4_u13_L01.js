// Batch 4 — Unit 13 Lesson 1: Travel & Transportation
const BATCH4_L_1 = {
  id:"jav2_u13l_b4_1", title:"こうつう", icon:"🚄", xp:15, board:true,
  steps:[
    {type:"intro", title:"こうつうとのりもの",
     desc:"Learn transportation vocabulary beyond basics. Japan has one of the world's best public transit systems, and knowing these words helps you navigate it.",
     goals:["Use advanced transit vocabulary","Book tickets and navigate stations","Describe travel experiences"]},

    {type:"teach", trg:"しんかんせん", src:"bullet train / shinkansen", pos:"noun", gender:null,
     note:"Kanji: 新幹線. New + main + line. Japan's high-speed rail.",
     example:"とうきょうからおおさかまでしんかんせんでいきます。",
     exampleSrc:"I go from Tokyo to Osaka by bullet train.",
     funFact:"The Shinkansen launched in 1964 for the Tokyo Olympics and has never had a fatal passenger accident. Trains run at 320km/h and are famous for departing within seconds of schedule. Average delay is under 1 minute per year."},

    {type:"teach", trg:"のりかえ", src:"transfer (trains/buses)", pos:"noun", gender:null,
     note:"Kanji: 乗り換え. Ride + change. Switching between lines.",
     example:"しぶやでのりかえてください。",
     exampleSrc:"Please transfer at Shibuya.",
     funFact:"Tokyo's train system has 13 subway lines plus dozens of private and JR lines. Transfers can involve walking 10 minutes underground. Apps like Navitime and Google Maps are essential for planning norikae routes."},

    {type:"teach", trg:"かいさつ", src:"ticket gate / turnstile", pos:"noun", gender:null,
     note:"Kanji: 改札. Change + examine. Where tickets are checked.",
     example:"かいさつをとおってホームにいきます。",
     exampleSrc:"I go through the ticket gate to the platform.",
     funFact:"Japan's IC card system (Suica, Pasmo) lets you tap through kaisatsu gates in 0.2 seconds. The technology was developed by Sony's FeliCa system. These cards also work at convenience stores, vending machines, and restaurants."},

    {type:"teach", trg:"ホーム", src:"platform (train station)", pos:"noun", gender:null,
     note:"From English 'platform' (shortened). Where you wait for trains.",
     example:"にばんホームからでんしゃがでます。",
     exampleSrc:"The train departs from platform 2.",
     funFact:"Japanese platforms have precise markings showing where each door will stop. Passengers line up behind these marks before the train arrives. This orderly queuing system works because trains stop in the exact same spot every time."},

    {type:"teach", trg:"ていきけん", src:"commuter pass", pos:"noun", gender:null,
     note:"Kanji: 定期券. Fixed + period + ticket. Monthly/quarterly pass.",
     example:"ていきけんをかいました。",
     exampleSrc:"I bought a commuter pass.",
     funFact:"Most Japanese companies reimburse employee commuter passes (通勤定期券). The pass covers unlimited rides between home and work stations. It is loaded onto the IC card and is often the single largest employee benefit after salary."},

    {type:"teach", trg:"まんいん", src:"packed full / overcrowded", pos:"adj", gender:null,
     note:"Na-adjective. Kanji: 満員. Full + members. Used for trains, venues.",
     example:"あさのでんしゃはまんいんです。",
     exampleSrc:"The morning train is packed.",
     funFact:"Tokyo rush hour trains reach 180-200% capacity. Professional oshiya (pushers) in white gloves help compress passengers into trains. Women-only cars (女性専用車両) were introduced to combat overcrowding-related harassment."},

    {type:"teach", trg:"パスポート", src:"passport", pos:"noun", gender:null,
     note:"From English 'passport.' Essential for international travel.",
     example:"パスポートのきげんをかくにんしてください。",
     exampleSrc:"Please check your passport expiration date.",
     funFact:"The Japanese passport is consistently ranked as the world's most powerful, providing visa-free access to 190+ countries. Japanese citizens can travel almost anywhere without advance visa applications."},

    {type:"teach", trg:"にゅうこく", src:"entry into a country / immigration", pos:"noun", gender:null,
     note:"Kanji: 入国. Enter + country. Arriving in a foreign country officially.",
     example:"にゅうこくしんさにじかんがかかりました。",
     exampleSrc:"Immigration inspection took time.",
     funFact:"Japan's immigration (入国審査) is thorough but efficient. Fingerprints and photos are taken from all foreign visitors. Automated gates are available for returning Japanese citizens. Visit Japan Web pre-registration speeds entry."},

    {type:"teach", trg:"てにもつ", src:"hand luggage / carry-on", pos:"noun", gender:null,
     note:"Kanji: 手荷物. Hand + luggage. What you carry personally.",
     example:"てにもつはひとつだけです。",
     exampleSrc:"I have only one carry-on.",
     funFact:"Japanese travelers pack remarkably efficiently. Luggage forwarding services (宅配便) let you send suitcases ahead to your hotel. This means you can travel light on trains while your bags arrive separately at your destination."},

    {type:"teach", trg:"よやく", src:"reservation / booking", pos:"noun", gender:null,
     note:"Kanji: 予約. Pre + promise. For hotels, restaurants, tickets.",
     example:"ホテルのよやくをしました。",
     exampleSrc:"I made a hotel reservation.",
     funFact:"Japan takes reservations extremely seriously. No-shows at restaurants can result in being blacklisted. Some high-end establishments require referrals just to make a reservation. Online booking has made the process easier for foreigners."},

    {type:"teach", trg:"りょかん", src:"Japanese-style inn", pos:"noun", gender:null,
     note:"Kanji: 旅館. Travel + hall. Traditional accommodation with tatami rooms.",
     example:"おんせんりょかんにとまりたいです。",
     exampleSrc:"I want to stay at a hot spring inn.",
     funFact:"Ryokan offer tatami rooms, futon beds, kaiseki dinner, and communal baths. Some have been operating for over 1,000 years. Nishiyama Onsen Keiunkan, founded in 705 AD, holds the Guinness record as the world's oldest hotel."},

    {type:"teach", trg:"おみやげ", src:"souvenir / gift from a trip", pos:"noun", gender:null,
     note:"Kanji: お土産. Polite prefix + earth + product. Local specialty gifts.",
     example:"おみやげをかうのをわすれないでください。",
     exampleSrc:"Please don't forget to buy souvenirs.",
     funFact:"Omiyage culture is a social obligation in Japan. When you travel, you must bring back local specialty food (名物 meibutsu) for coworkers, friends, and family. Every station and tourist spot sells packaged omiyage specifically for this purpose."},

    {type:"teach", trg:"かんこう", src:"sightseeing / tourism", pos:"noun", gender:null,
     note:"Kanji: 観光. Watch + light. Seeing the sights.",
     example:"きょうとでかんこうをしました。",
     exampleSrc:"I did sightseeing in Kyoto.",
     funFact:"Japan welcomed over 31 million tourists in 2019 and is targeting 60 million. Kyoto, Tokyo, and Osaka are the top destinations. 観光案内所 (tourist information centers) at every major station provide maps and advice in multiple languages."},

    {type:"mc", q:"What does のりかえ mean?",
     opts:["train transfer","ticket","platform","exit"], ans:"train transfer",
     hint:"Switching from one t... line to another at a station."},

    {type:"fb", s:"あさのでんしゃは{1}です。", a:"まんいん",
     sSrc:"The morning train is packed.",
     opts:["まんいん","しずか","はやい","ながい"],
     hint:"So full of people there is barely room to stand."},

    {type:"match", pairs:[
      {trg:"しんかんせん", src:"bullet train"},
      {trg:"りょかん", src:"Japanese inn"},
      {trg:"おみやげ", src:"souvenir"},
      {trg:"パスポート", src:"passport"}
    ]},

    {type:"mc", q:"What is special about the Japanese passport?",
     opts:["world's most powerful for visa-free travel","unique design","free to obtain","lasts forever"], ans:"world's most powerful for visa-free travel",
     hint:"Access to 190+ countries without needing a v... in advance."},

    {type:"fb", s:"ホテルの{1}をしました。", a:"よやく",
     sSrc:"I made a hotel reservation.",
     opts:["よやく","かんこう","のりかえ","かいさつ"],
     hint:"Securing a room or table in advance for a specific date."},

    {type:"mc", q:"おみやげ is best described as:",
     opts:["souvenir gifts from a trip for others","personal shopping","travel insurance","tour guide"], ans:"souvenir gifts from a trip for others",
     hint:"A social obligation to bring back local specialties for coworkers and friends."},

    {type:"mc", q:"What does かいさつ mean?",
     opts:["ticket gate","ticket office","waiting room","exit"], ans:"ticket gate",
     hint:"The turnstile where you tap your IC card to enter the station."}
  ]
};
export default BATCH4_L_1;
