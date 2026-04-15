// Unit 15 Expansion L4 — Transportation
// Trains, buses, taxis, and getting around.

const LESSON_4 = {id:"jav2_u15l4", title:"こうつう", icon:"🚃", xp:15, board:true, steps:[
  {type:"intro", title:"こうつう",
   desc:"Master Japan's legendary public transportation system. Learn essential vocabulary for trains, buses, and taxis, plus the phrases you need for buying tickets, asking about routes, and making transfers.",
   goals:["Navigate train stations with confidence","Use bus and taxi vocabulary","Ask about routes, times, and fares"]},

  {type:"teach", trg:"えき", src:"train station", pos:"noun", gender:null,
   note:"The hub of Japanese transportation and daily life.\nKanji: 駅. えきいん = station staff.",
   example:"A: すみません、ちかくにえきはありますか？\nB: はい、あるいてごふんぐらいです。",
   exampleSrc:"A: Excuse me, is there a station nearby?\nB: Yes, about five minutes on foot.",
   funFact:"Japanese train stations are much more than transit points. Major stations contain shopping malls, restaurants, hotels, and even art galleries. Shinjuku Station serves over 3.6 million passengers daily, making it the busiest station in the world by the Guinness Book of Records."},

  {type:"teach", trg:"ろせん", src:"route / train line", pos:"noun", gender:null,
   note:"ろせんず = route map. Which line to take.\nKanji: 路線.",
   example:"A: どのろせんにのればいいですか？\nB: やまのてせんにのってください。",
   exampleSrc:"A: Which line should I take?\nB: Please take the Yamanote Line.",
   funFact:"路線 combines 路 (road) and 線 (line). Tokyo's rail network has over 100 lines operated by multiple companies (JR, Metro, Toei, private railways). The famous Yamanote Line (green circle) connects all major areas. Color-coded line maps and numbered stations help navigate this complexity."},

  {type:"teach", trg:"かいさつぐち", src:"ticket gate", pos:"noun", gender:null,
   note:"The gate you pass through with your ticket or IC card.\nKanji: 改札口.",
   example:"A: かいさつぐちはどこですか？\nB: あちらです。ICカードでとおれますよ。",
   exampleSrc:"A: Where is the ticket gate?\nB: Over there. You can pass through with an IC card.",
   funFact:"改札口 literally means 'reform-inspect-gate.' Modern gates read IC cards in milliseconds. The satisfying beep of touching your Suica or Pasmo card is a daily Tokyo sound. If your balance is too low, the gates close with a different tone and you must add funds at a nearby machine."},

  {type:"mc", q:"どのろせんにのればいいですか means:", opts:["Which exit should I use?","Which line should I take?","How much is the ticket?","When does the train come?"], ans:"Which line should I take?",
   hint:"ろせん means 'route/l...' and のる means 'to ride.'"},

  {type:"teach", trg:"つぎ", src:"next", pos:"noun", gender:null,
   note:"つぎのえき = next station. つぎのでんしゃ = next train.\nKanji: 次.",
   example:"A: つぎのえきでおりてください。\nB: つぎですね。わかりました。",
   exampleSrc:"A: Please get off at the next station.\nB: The next one, right. Got it.",
   funFact:"Train announcements always state the next station: つぎは... (next is...). The announcements are in Japanese, English, and sometimes Chinese and Korean. Inside the train, electronic displays show the route with the current position. つぎ is one of the most-heard words in Japanese commuting."},

  {type:"teach", trg:"おりる", src:"to get off (a vehicle)", pos:"verb", gender:null,
   note:"Group 2 verb. Opposite of のる (to ride/board).\nKanji: 降りる.",
   example:"A: しぶやでおります。\nB: しぶやはつぎのつぎです。",
   exampleSrc:"A: I will get off at Shibuya.\nB: Shibuya is two stops from now.",
   funFact:"おりる is specific to descending or alighting from vehicles, stairs, and mountains. The opposite pair のる/おりる (board/alight) is fundamental. On buses, the announcement says つぎとまります (next stop). Press the button and おりる at your stop."},

  {type:"teach", trg:"バスてい", src:"bus stop", pos:"noun", gender:null,
   note:"バス (bus) + てい (stop, short for ていりゅうじょ).\nWhere buses pick up and drop off.",
   example:"A: いちばんちかいバスていはどこですか？\nB: あのこうさてんのところにあります。",
   exampleSrc:"A: Where is the nearest bus stop?\nB: It is at that intersection.",
   funFact:"Japanese buses are punctual (though not as precise as trains). Many city buses have flat fares; rural buses charge by distance. You enter from the back and exit from the front, paying when you leave. IC cards work on almost all buses. バスていの listing shows all routes and times."},

  {type:"fb", s:"しぶやで___ます。\n(I will get off at Shibuya.)", a:"おり", opts:["おり","のり","おち","でき"], sSrc:"I will get off at Shibuya.",
   hint:"The verb meaning 'to get off/alight from' a vehicle. Group 2, so stem ends in り."},

  {type:"teach", trg:"タクシーのりば", src:"taxi stand", pos:"noun", gender:null,
   note:"タクシー (taxi) + のりば (boarding area).\nFound at stations, hotels, and major buildings.",
   example:"A: タクシーのりばはどこですか？\nB: えきのきたぐちのまえにあります。",
   exampleSrc:"A: Where is the taxi stand?\nB: It is in front of the station's north exit.",
   funFact:"Japanese taxis are famous for automatic opening doors (operated by the driver), white seat covers, and honest drivers. Tipping is not done and can cause confusion. Fares start at around 500 yen. Late night surcharges apply after 10 PM. The driver will not expect you to open or close the door yourself."},

  {type:"teach", trg:"〜まで", src:"to ~ / until ~", pos:"part", gender:null,
   note:"Destination marker. えきまで = to the station.\nAlso used for time: ごじまで = until five o'clock.",
   example:"A: くうこうまでどのくらいかかりますか？\nB: でんしゃでいちじかんぐらいです。",
   exampleSrc:"A: How long does it take to the airport?\nB: About one hour by train.",
   funFact:"まで marks endpoints in both space and time. えきまであるく (walk to the station), ごじまではたらく (work until five). The combination から...まで (from...to) is universal: とうきょうからおおさかまで (from Tokyo to Osaka), きゅうじからごじまで (from 9 to 5)."},

  {type:"mc", q:"くうこうまでどのくらいかかりますか asks:", opts:["How much does it cost?","How long does it take to the airport?","Where is the airport?","Which bus goes to the airport?"], ans:"How long does it take to the airport?",
   hint:"まで marks the destination, and どのくらいかかる asks about duration."},

  {type:"teach", trg:"きたぐち", src:"north exit", pos:"noun", gender:null,
   note:"きた (north) + ぐち (exit/entrance). Stations have named exits.\nKanji: 北口. Also: みなみぐち, にしぐち, ひがしぐち.",
   example:"A: きたぐちでまちあわせしましょう。\nB: きたぐちですね。わかりました。",
   exampleSrc:"A: Let us meet at the north exit.\nB: The north exit, right. Got it.",
   funFact:"Large Japanese stations have multiple exits named by direction: きたぐち (north), みなみぐち (south), にしぐち (west), ひがしぐち (east). Picking the wrong exit at a huge station like Shinjuku can put you in a completely different neighborhood. Meeting spots always specify the exit."},

  {type:"teach", trg:"りょうきん", src:"fare / fee", pos:"noun", gender:null,
   note:"The price for transportation or services. りょうきんひょう = fare chart.\nKanji: 料金.",
   example:"A: りょうきんはいくらですか？\nB: にひゃくえんです。",
   exampleSrc:"A: How much is the fare?\nB: It is 200 yen.",
   funFact:"料金 combines 料 (fee/charge) and 金 (money). Train fares are distance-based, displayed on large maps above ticket machines. IC cards automatically calculate fares. If you are short, fare adjustment machines (のりこしせいさんき) at exits let you pay the difference."},

  {type:"fb", s:"くうこう___どのくらいかかりますか？\n(How long does it take to the airport?)", a:"まで", opts:["まで","から","へ","に"], sSrc:"How long does it take to the airport?",
   hint:"The particle marking the destination or endpoint."},

  {type:"match", pairs:[{trg:"えき",src:"station"},{trg:"ろせん",src:"route/line"},{trg:"かいさつぐち",src:"ticket gate"},{trg:"つぎ",src:"next"}]},

  {type:"match", pairs:[{trg:"おりる",src:"get off"},{trg:"バスてい",src:"bus stop"},{trg:"きたぐち",src:"north exit"},{trg:"りょうきん",src:"fare"}]},

  {type:"mc", q:"かいさつぐち is:", opts:["A platform","A ticket gate","A ticket machine","An exit sign"], ans:"A ticket gate",
   hint:"The g... you pass through by tapping your IC card or inserting your t...."},

  {type:"fb", s:"___でまちあわせしましょう。\n(Let us meet at the north exit.)", a:"きたぐち", opts:["きたぐち","みなみぐち","にしぐち","ひがしぐち"], sSrc:"Let us meet at the north exit.",
   hint:"The exit named after the direction that is the opposite of south."},

  {type:"tip", title:"Transportation Essentials",
   text:"At the station:\nかいさつぐち (ticket gate)\nのりば (platform)\nのりかえ (transfer)\nきたぐち/みなみぐち (north/south exit)\n\nOn the vehicle:\nのる (board) / おりる (get off)\nつぎのえき (next station)\nしゅうてん (last stop)\n\nAsking:\nどのろせんですか？ (Which line?)\nりょうきんはいくら？ (How much is the fare?)\n〜までどのくらい？ (How long to ~?)",
   deepDive:{title:"IC cards: Suica and Pasmo",
    text:"IC cards revolutionized Japanese transit:\n\nSuica (JR East) and Pasmo (private/subway) are rechargeable smart cards. Tap to enter, tap to exit. Fare is calculated automatically. They work nationwide on almost all trains and buses.\n\nBeyond transit, IC cards work at:\nConvenience stores, vending machines, restaurants, coin lockers, and many shops.\n\nTo add money: use machines at any station.\nApple Pay and Google Pay also support virtual IC cards.\n\nWith an IC card, you rarely need to buy paper tickets. It is the first thing most visitors to Japan should get."}},
]};
export default LESSON_4;
