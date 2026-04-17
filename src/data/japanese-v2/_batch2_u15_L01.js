// Batch 2 expansion for Unit 15 (Directions) — more navigation, landmarks, compass, transport
const BATCH2_L_1 = {
  id:"jav2_u15l_b2_1", title:"まちをあるく", icon:"🚶", xp:15, board:true,
  steps:[
  {type:"intro", title:"まちをあるく",
   desc:"Deepen your direction skills with more landmarks, distance expressions, and the vocabulary for navigating Japanese cities on foot. Learn to describe routes, estimate walking times, and identify key landmarks for finding your way.",
   goals:["Name more landmarks: crosswalk, stop, slope, stairs","Express distance and walking time","Give multi-step directions to a destination"]},

  {type:"teach", trg:"おうだんほどう", src:"crosswalk / pedestrian crossing", pos:"noun", gender:null,
   note:"The painted lines on the road where pedestrians cross.\nKanji: 横断歩道. Very strictly observed in Japan.",
   example:"A: おうだんほどうをわたってください。\nB: あのしましまのところですね。\nA: どのくらいかかりましたか？\nB: だいたい二時間(にじかん)ぐらいです。",
   exampleSrc:"A: Please cross at the crosswalk.\nB: The striped area over there, right?\nA: How long did it take?\nB: About two hours.",
   funFact:"横断歩道 literally means 'cross-cut walking path.' Japan takes crosswalks seriously: jaywalking is illegal and fined (though rarely enforced). Shibuya Crossing in Tokyo is the world's busiest crosswalk, with up to 3,000 people crossing at once during peak times."},

  {type:"teach", trg:"さか", src:"slope / hill", pos:"noun", gender:null,
   note:"A sloped road going up or down. Many Japanese streets are hilly.\nKanji: 坂.",
   example:"A: このさかをのぼってください。\nB: けっこうきゅうですね。\nA: 難(むずか)しかったですか？\nB: 最初(さいしょ)は難(むずか)しかったですが、慣(な)れました。",
   exampleSrc:"A: Please go up this slope.\nB: It is quite steep.\nA: Was it difficult?\nB: It was difficult at first, but I got used to it.",
   funFact:"坂 shows earth (土) with an opposing force (反), representing a surface that resists flat walking. Famous slopes have names: Sannenzaka (Kyoto), Nozoki-zaka (Tokyo), Kiyomizu-zaka (Kyoto). Many become tourist attractions with shops and cafes lining them."},

  {type:"teach", trg:"かいだん", src:"stairs / staircase", pos:"noun", gender:null,
   note:"Steps going up or down. Found everywhere in Japanese stations.\nKanji: 階段.",
   example:"A: かいだんをおりてひだりにまがってください。\nB: ありがとうございます。\nA: おすすめですか？\nB: はい、ぜひ試(ため)してみてください。",
   exampleSrc:"A: Please go down the stairs and turn left.\nB: Thank you.\nA: Do you recommend it?\nB: Yes, please try it.",
   funFact:"階段 combines 階 (floor/story) and 段 (step). Japanese train stations often have many levels connected by long staircases. エスカレーター (escalator) etiquette varies: stand on the left in Tokyo, on the right in Osaka. This regional difference amuses Japanese people."},

  {type:"teach", trg:"のぼる", src:"to go up / to climb", pos:"verb", gender:null,
   note:"Group 1 verb. For stairs, slopes, mountains.\nKanji: 上る or 登る.",
   example:"A: このかいだんをのぼってください。\nB: うえになにがありますか？\nA: 一緒(いっしょ)に行(い)きませんか？\nB: いいですね。行(い)きましょう。",
   exampleSrc:"A: Please go up these stairs.\nB: What is at the top?\nA: Shall we go together?\nB: That sounds good. Let's go.",
   funFact:"のぼる uses different kanji depending on context: 上る for going up in general, 登る for climbing mountains or ladders. Both are read のぼる. The distinction is subtle and even native speakers sometimes mix them up. For directions, either works."},

  {type:"mc", q:"おうだんほどう means:", opts:["sidewalk","bridge","crosswalk","parking lot"], ans:"crosswalk",
   hint:"The striped area on the road specifically designed for pedestrians to cross."},

  {type:"teach", trg:"おりる", src:"to go down / to get off", pos:"verb", gender:null,
   note:"Group 2 verb. For going down stairs and getting off vehicles.\nKanji: 降りる.",
   example:"A: つぎのえきでおりてください。\nB: わかりました。\nA: どこがおすすめですか？\nB: 京都(きょうと)がおすすめです。",
   exampleSrc:"A: Please get off at the next station.\nB: Understood.\nA: Where do you recommend?\nB: I recommend Kyoto.",
   funFact:"おりる has two main uses: going down physically (かいだんをおりる = go down stairs) and getting off vehicles (でんしゃをおりる = get off the train). The opposite pair is のる (get on) and おりる (get off). Station announcements always tell you which side the doors open."},

  {type:"teach", trg:"ほどう", src:"sidewalk / pavement", pos:"noun", gender:null,
   note:"The walking path alongside a road. Pedestrians should use this.\nKanji: 歩道.",
   example:"A: ほどうをあるいてください。\nB: はい、きをつけます。\nA: 何(なに)が一番(いちばん)良(よ)かったですか？\nB: 食(た)べ物(もの)が一番(いちばん)おいしかったです。",
   exampleSrc:"A: Please walk on the sidewalk.\nB: Yes, I will be careful.\nA: What was the best part?\nB: The food was the most delicious.",
   funFact:"歩道 combines 歩 (walk) and 道 (road). Japanese sidewalks are well-maintained and clearly separated from roads. Cycling on sidewalks is technically illegal in many areas but widely tolerated. Separate bicycle lanes are becoming more common in cities."},

  {type:"teach", trg:"とおい", src:"far / distant", pos:"adj", gender:null,
   note:"い-adjective. Opposite: ちかい (near).\nKanji: 遠い.",
   example:"A: えきはとおいですか？\nB: いいえ、あるいてごふんです。\nA: よく行(い)きますか？\nB: 月(つき)に一回(いっかい)ぐらい行(い)きます。",
   exampleSrc:"A: Is the station far?\nB: No, it is five minutes on foot.\nA: Do you go often?\nB: I go about once a month.",
   funFact:"遠い shows a road (辶) with something being drawn out (袁), suggesting distance. とおい/ちかい (far/near) is one of the first adjective pairs learners master. In giving directions, Japanese people often measure distance in minutes walked rather than meters."},

  {type:"fb", s:"このかいだんを{1}てください。\n(Please go down these stairs.)", a:"おり", opts:["おり","のぼっ","あるい","はしっ"], sSrc:"Please go down these stairs.",
   hint:"The polite stem of the verb for descending stairs or getting off vehicles."},

  {type:"teach", trg:"ちかい", src:"near / close", pos:"adj", gender:null,
   note:"い-adjective. Opposite: とおい (far).\nKanji: 近い.",
   example:"A: ホテルはえきからちかいですか？\nB: はい、あるいてさんぷんです。\nA: 誰(だれ)と行(い)きましたか？\nB: 友達(ともだち)と一緒(いっしょ)に行(い)きました。",
   exampleSrc:"A: Is the hotel close to the station?\nB: Yes, three minutes on foot.\nA: Who did you go with?\nB: I went with a friend.",
   funFact:"近い uses 近, showing a road (辶) with an axe (斤), suggesting the distance you can walk carrying a tool. ちかい and とおい are used constantly in real-time navigation. A common response pattern is あるいてXぷん (X minutes on foot), the most practical distance measure."},

  {type:"teach", trg:"とまる", src:"to stop", pos:"verb", gender:null,
   note:"Group 1 verb. For vehicles stopping and people halting.\nKanji: 止まる.",
   example:"A: あのしんごうでとまってください。\nB: はい、しんごうですね。\nA: それは大変(たいへん)でしたね。\nB: はい、でもいい勉強(べんきょう)になりました。",
   exampleSrc:"A: Please stop at that traffic light.\nB: Yes, the traffic light.\nA: That must have been tough.\nB: Yes, but it was a good learning experience.",
   funFact:"止まる is intransitive (something stops itself). The transitive pair is とめる (to stop something). Bus stops use this verb: バスがとまる (the bus stops). とまれ (stop!) written on road surfaces is the imperative form, seen at every intersection in Japan."},

  {type:"teach", trg:"ひがし", src:"east", pos:"noun", gender:null,
   note:"Compass direction. Opposite: にし (west).\nKanji: 東.",
   example:"A: ひがしぐちからでてください。\nB: ひがしぐちはどちらですか？\nA: 本当(ほんとう)ですか？すごいですね。\nB: ありがとうございます。頑張(がんば)りました。",
   exampleSrc:"A: Please exit from the east exit.\nB: Which way is the east exit?\nA: Really? That is amazing.\nB: Thank you. I worked hard.",
   funFact:"東 shows the sun (日) rising through a tree (木), representing the east where the sun rises. とうきょう (Tokyo) literally means 'eastern capital.' 東 appears in many place names: とうほく (northeast region), ちゅうとう (Middle East)."},

  {type:"teach", trg:"にし", src:"west", pos:"noun", gender:null,
   note:"Compass direction. Opposite: ひがし (east).\nKanji: 西.",
   example:"A: にしぐちにバスていがあります。\nB: にしぐちですね。ありがとうございます。\nA: 私(わたし)も興味(きょうみ)があります。\nB: じゃあ、今度(こんど)一緒(いっしょ)にどうですか？",
   exampleSrc:"A: There is a bus stop at the west exit.\nB: West exit, right. Thank you.\nA: I am also interested.\nB: Then, how about doing it together next time?",
   funFact:"西 depicts a bird settling into its nest at sunset (in the west). It appears in 関西 (Kansai, western Japan), 西洋 (Western countries), and 北西 (northwest). The Kanto (east) vs Kansai (west) cultural divide is a major topic in Japanese culture."},

  {type:"mc", q:"えきはとおいですか means:", opts:["Is the station close?","Is the station far?","Where is the station?","Is there a station?"], ans:"Is the station far?",
   hint:"とおい is the adjective for distance, asking if something is f... away."},

  {type:"match", pairs:[{trg:"おうだんほどう",src:"crosswalk"},{trg:"さか",src:"slope"},{trg:"かいだん",src:"stairs"},{trg:"ほどう",src:"sidewalk"}]},

  {type:"match", pairs:[{trg:"とおい",src:"far"},{trg:"ちかい",src:"near"},{trg:"ひがし",src:"east"},{trg:"にし",src:"west"}]},

  {type:"fb", s:"えきは{1}ですか？\n(Is the station close?)", a:"ちかい", opts:["ちかい","とおい","おおきい","ちいさい"], sSrc:"Is the station close?",
   hint:"The い-adjective for proximity, opposite of とおい."},

  {type:"mc", q:"ひがし means:", opts:["north","south","east","west"], ans:"east",
   hint:"The direction where the sun rises, represented by sun + tree in kanji."},

  {type:"fb", s:"あのしんごうで{1}ください。\n(Please stop at that traffic light.)", a:"とまって", opts:["とまって","まがって","わたって","あるいて"], sSrc:"Please stop at that traffic light.",
   hint:"The て-form of the verb meaning 'to stop' or 'halt.'"},
]};
export default BATCH2_L_1;
