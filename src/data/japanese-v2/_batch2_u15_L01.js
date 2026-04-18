// Batch 2 expansion for Unit 15 (Directions) — more navigation, landmarks, compass, transport
const BATCH2_L_1 = {
  id:"jav2_u15l_b2_1", title:"町(まち)を歩(ある)く", icon:"🚶", xp:15, board:true,
  steps:[
  {type:"intro", title:"町(まち)を歩(ある)く",
   desc:"Deepen your direction skills with more landmarks, distance expressions, and the vocabulary for navigating Japanese cities on foot. Learn to describe routes, estimate walking times, and identify key landmarks for finding your way.",
   goals:["Name more landmarks: crosswalk, stop, slope, stairs","Express distance and walking time","Give multi-step directions to a destination"]},

  {type:"teach", trg:"横断歩道(おうだんほどう)", src:"crosswalk / pedestrian crossing", pos:"noun", gender:null,
   note:"The painted lines on the road where pedestrians cross.\nKanji: 横断歩道(おうだんほどう). Very strictly observed in Japan.",
   example:"A: 横断歩道(おうだんほどう)を渡(わた)ってください。\nB: あのしましまのところですね。\nA: どのくらいかかりましたか？\nB: だいたい二時間(にじかん)ぐらいです。",
   exampleSrc:"A: Please cross at the crosswalk.\nB: The striped area over there, right?\nA: How long did it take?\nB: About two hours.",
   funFact:"横断歩道(おうだんほどう) literally means 'cross-cut walking path.' Japan takes crosswalks seriously: jaywalking is illegal and fined (though rarely enforced). 渋谷(しぶや) Crossing in Tokyo is the world's busiest crosswalk, with up to 3,000 people crossing at once during peak times."},

  {type:"teach", trg:"坂(さか)", src:"slope / hill", pos:"noun", gender:null,
   note:"A sloped road going up or down. Many Japanese streets are hilly.\nKanji: 坂(さか).",
   example:"A: この坂(さか)を上(のぼ)ってください。\nB: けっこう急(きゅう)ですね。\nA: 難(むずか)しかったですか？\nB: 最初(さいしょ)は難(むずか)しかったですが、慣(な)れました。",
   exampleSrc:"A: Please go up this slope.\nB: It is quite steep.\nA: Was it difficult?\nB: It was difficult at first, but I got used to it.",
   funFact:"坂(さか) shows earth (土) with an opposing force (反), representing a surface that resists flat walking. Famous slopes have names: 三年坂(さんねんざか) (Kyoto), のぞき坂(ざか) (Tokyo), 清水坂(きよみずざか) (Kyoto). Many become tourist attractions with shops and cafes lining them."},

  {type:"teach", trg:"階段(かいだん)", src:"stairs / staircase", pos:"noun", gender:null,
   note:"Steps going up or down. Found everywhere in Japanese stations.\nKanji: 階段(かいだん).",
   example:"A: 階段(かいだん)を降(お)りて左(ひだり)に曲(ま)がってください。\nB: ありがとうございます。\nA: おすすめですか？\nB: はい、ぜひ試(ため)してみてください。",
   exampleSrc:"A: Please go down the stairs and turn left.\nB: Thank you.\nA: Do you recommend it?\nB: Yes, please try it.",
   funFact:"階段(かいだん) combines 階(かい) (floor/story) and 段(だん) (step). Japanese train stations often have many levels connected by long staircases. エスカレーター (escalator) etiquette varies: stand on the left in Tokyo, on the right in Osaka. This regional difference amuses Japanese people."},

  {type:"teach", trg:"上(のぼ)る", src:"to go up / to climb", pos:"verb", gender:null,
   note:"Group 1 verb. For stairs, slopes, mountains.\nKanji: 上(のぼ)る or 登(のぼ)る.",
   example:"A: この階段(かいだん)を上(のぼ)ってください。\nB: 上(うえ)に何(なに)がありますか？\nA: 一緒(いっしょ)に行(い)きませんか？\nB: いいですね。行(い)きましょう。",
   exampleSrc:"A: Please go up these stairs.\nB: What is at the top?\nA: Shall we go together?\nB: That sounds good. Let's go.",
   funFact:"上(のぼ)る uses different kanji depending on context: 上(のぼ)る for going up in general, 登(のぼ)る for climbing mountains or ladders. Both are read のぼる. The distinction is subtle and even native speakers sometimes mix them up. For directions, either works."},

  {type:"mc", q:"横断歩道(おうだんほどう) means:", opts:["sidewalk","bridge","crosswalk","parking lot"], ans:"crosswalk",
   hint:"The striped area on the road specifically designed for pedestrians to cross."},

  {type:"teach", trg:"降(お)りる", src:"to go down / to get off", pos:"verb", gender:null,
   note:"Group 2 verb. For going down stairs and getting off vehicles.\nKanji: 降(お)りる.",
   example:"A: 次(つぎ)の駅(えき)で降(お)りてください。\nB: わかりました。\nA: どこがおすすめですか？\nB: 京都(きょうと)がおすすめです。",
   exampleSrc:"A: Please get off at the next station.\nB: Understood.\nA: Where do you recommend?\nB: I recommend Kyoto.",
   funFact:"降(お)りる has two main uses: going down physically (階段(かいだん)を降(お)りる = go down stairs) and getting off vehicles (電車(でんしゃ)を降(お)りる = get off the train). The opposite pair is 乗(の)る (get on) and 降(お)りる (get off). Station announcements always tell you which side the doors open."},

  {type:"teach", trg:"歩道(ほどう)", src:"sidewalk / pavement", pos:"noun", gender:null,
   note:"The walking path alongside a road. Pedestrians should use this.\nKanji: 歩道(ほどう).",
   example:"A: 歩道(ほどう)を歩(ある)いてください。\nB: はい、気(き)をつけます。\nA: 何(なに)が一番(いちばん)良(よ)かったですか？\nB: 食(た)べ物(もの)が一番(いちばん)おいしかったです。",
   exampleSrc:"A: Please walk on the sidewalk.\nB: Yes, I will be careful.\nA: What was the best part?\nB: The food was the most delicious.",
   funFact:"歩道(ほどう) combines 歩(ほ) (walk) and 道(どう) (road). Japanese sidewalks are well-maintained and clearly separated from roads. Cycling on sidewalks is technically illegal in many areas but widely tolerated. Separate bicycle lanes are becoming more common in cities."},

  {type:"teach", trg:"遠(とお)い", src:"far / distant", pos:"adj", gender:null,
   note:"い-adjective. Opposite: 近(ちか)い (near).\nKanji: 遠(とお)い.",
   example:"A: 駅(えき)は遠(とお)いですか？\nB: いいえ、歩(ある)いて五分(ごふん)です。\nA: よく行(い)きますか？\nB: 月(つき)に一回(いっかい)ぐらい行(い)きます。",
   exampleSrc:"A: Is the station far?\nB: No, it is five minutes on foot.\nA: Do you go often?\nB: I go about once a month.",
   funFact:"遠(とお)い shows a road (辶) with something being drawn out (袁), suggesting distance. 遠(とお)い/近(ちか)い (far/near) is one of the first adjective pairs learners master. In giving directions, Japanese people often measure distance in minutes walked rather than meters."},

  {type:"fb", s:"この階段(かいだん)を{1}てください。\n(Please go down these stairs.)", a:"降(お)り", opts:["降(お)り","上(のぼ)っ","歩(ある)い","走(はし)っ"], sSrc:"Please go down these stairs.",
   hint:"The polite stem of the verb for descending stairs or getting off vehicles."},

  {type:"teach", trg:"近(ちか)い", src:"near / close", pos:"adj", gender:null,
   note:"い-adjective. Opposite: 遠(とお)い (far).\nKanji: 近(ちか)い.",
   example:"A: ホテルは駅(えき)から近(ちか)いですか？\nB: はい、歩(ある)いて三分(さんぷん)です。\nA: 誰(だれ)と行(い)きましたか？\nB: 友達(ともだち)と一緒(いっしょ)に行(い)きました。",
   exampleSrc:"A: Is the hotel close to the station?\nB: Yes, three minutes on foot.\nA: Who did you go with?\nB: I went with a friend.",
   funFact:"近(ちか)い uses 近(ちか), showing a road (辶) with an axe (斤), suggesting the distance you can walk carrying a tool. 近(ちか)い and 遠(とお)い are used constantly in real-time navigation. A common response pattern is 歩(ある)いてX分(ぷん) (X minutes on foot), the most practical distance measure."},

  {type:"teach", trg:"止(と)まる", src:"to stop", pos:"verb", gender:null,
   note:"Group 1 verb. For vehicles stopping and people halting.\nKanji: 止(と)まる.",
   example:"A: あの信号(しんごう)で止(と)まってください。\nB: はい、信号(しんごう)ですね。\nA: それは大変(たいへん)でしたね。\nB: はい、でもいい勉強(べんきょう)になりました。",
   exampleSrc:"A: Please stop at that traffic light.\nB: Yes, the traffic light.\nA: That must have been tough.\nB: Yes, but it was a good learning experience.",
   funFact:"止(と)まる is intransitive (something stops itself). The transitive pair is 止(と)める (to stop something). Bus stops use this verb: バスが止(と)まる (the bus stops). 止(と)まれ (stop!) written on road surfaces is the imperative form, seen at every intersection in Japan."},

  {type:"teach", trg:"東(ひがし)", src:"east", pos:"noun", gender:null,
   note:"Compass direction. Opposite: 西(にし) (west).\nKanji: 東(ひがし).",
   example:"A: 東口(ひがしぐち)から出(で)てください。\nB: 東口(ひがしぐち)はどちらですか？\nA: 本当(ほんとう)ですか？すごいですね。\nB: ありがとうございます。頑張(がんば)りました。",
   exampleSrc:"A: Please exit from the east exit.\nB: Which way is the east exit?\nA: Really? That is amazing.\nB: Thank you. I worked hard.",
   funFact:"東(ひがし) shows the sun (日) rising through a tree (木), representing the east where the sun rises. 東京(とうきょう) (Tokyo) literally means 'eastern capital.' 東(ひがし) appears in many place names: 東北(とうほく) (northeast region), 中東(ちゅうとう) (Middle East)."},

  {type:"teach", trg:"西(にし)", src:"west", pos:"noun", gender:null,
   note:"Compass direction. Opposite: 東(ひがし) (east).\nKanji: 西(にし).",
   example:"A: 西口(にしぐち)にバス停(てい)があります。\nB: 西口(にしぐち)ですね。ありがとうございます。\nA: 私(わたし)も興味(きょうみ)があります。\nB: じゃあ、今度(こんど)一緒(いっしょ)にどうですか？",
   exampleSrc:"A: There is a bus stop at the west exit.\nB: West exit, right. Thank you.\nA: I am also interested.\nB: Then, how about doing it together next time?",
   funFact:"西(にし) depicts a bird settling into its nest at sunset (in the west). It appears in 関西(かんさい) (Kansai, western Japan), 西洋(せいよう) (Western countries), and 北西(ほくせい) (northwest). The 関東(かんとう) (east) vs 関西(かんさい) (west) cultural divide is a major topic in Japanese culture."},

  {type:"mc", q:"駅(えき)は遠(とお)いですか means:", opts:["Is the station close?","Is the station far?","Where is the station?","Is there a station?"], ans:"Is the station far?",
   hint:"遠(とお)い is the adjective for distance, asking if something is f... away."},

  {type:"match", pairs:[{trg:"横断歩道(おうだんほどう)",src:"crosswalk"},{trg:"坂(さか)",src:"slope"},{trg:"階段(かいだん)",src:"stairs"},{trg:"歩道(ほどう)",src:"sidewalk"}]},

  {type:"match", pairs:[{trg:"遠(とお)い",src:"far"},{trg:"近(ちか)い",src:"near"},{trg:"東(ひがし)",src:"east"},{trg:"西(にし)",src:"west"}]},

  {type:"fb", s:"駅(えき)は{1}ですか？\n(Is the station close?)", a:"近(ちか)い", opts:["近(ちか)い","遠(とお)い","大(おお)きい","小(ちい)さい"], sSrc:"Is the station close?",
   hint:"The い-adjective for proximity, opposite of 遠(とお)い."},

  {type:"mc", q:"東(ひがし) means:", opts:["north","south","east","west"], ans:"east",
   hint:"The direction where the sun rises, represented by sun + tree in kanji."},

  {type:"fb", s:"あの信号(しんごう)で{1}ください。\n(Please stop at that traffic light.)", a:"止(と)まって", opts:["止(と)まって","曲(ま)がって","渡(わた)って","歩(ある)いて"], sSrc:"Please stop at that traffic light.",
   hint:"The て-form of the verb meaning 'to stop' or 'halt.'"},
{type:"match",pairs:[{trg:"上(のぼ)る",src:"to go up / to climb"},{trg:"止(と)まる",src:"to stop"}]}]};
export default BATCH2_L_1;
