// Batch 2 expansion for Unit 10 (Weather) — more weather terms, temperature, natural phenomena
const BATCH2_L_1 = {
  id:"jav2_u10l_b2_1", title:"しぜんとてんき", icon:"🌊", xp:15, board:true,
  steps:[
  {type:"intro", title:"しぜんとてんき",
   desc:"Deepen your weather vocabulary with temperature readings, natural phenomena like typhoons and earthquakes, and useful weather-related verbs. Japan's dramatic geography means weather awareness is essential for daily life.",
   goals:["Talk about temperature in degrees","Learn about natural phenomena: typhoons, earthquakes","Use weather verbs: furu, hareru, kumoru"]},

  {type:"teach", trg:"〜ど", src:"~ degrees (temperature)", pos:"part", gender:null,
   note:"Counter for degrees. にじゅうど = 20 degrees. Used with Celsius in Japan.\nKanji: 度.",
   example:"A: きょうはなんどですか？\nB: さんじゅうにどです。あついですね。",
   exampleSrc:"A: What is the temperature today?\nB: It is 32 degrees. Hot, is it not.",
   funFact:"Japan uses Celsius exclusively. 度 also means 'time/occasion' (ichido = once) and 'degree of angle.' A comfortable room is about にじゅうごど (25 degrees). Japanese weather reports always give the highest and lowest temperatures for the day."},

  {type:"teach", trg:"むしあつい", src:"hot and humid / muggy", pos:"adj", gender:null,
   note:"い-adjective combining 蒸し (steamy) + 暑い (hot). Japan's summer trademark.\nKanji: 蒸し暑い.",
   example:"A: きょうはむしあついですね。\nB: そうですね。エアコンがひつようです。",
   exampleSrc:"A: It is muggy today, is it not.\nB: Yes. We need air conditioning.",
   funFact:"Mushiatsui is THE word for Japanese summer weather. Tokyo's summer humidity regularly exceeds 80%, making 30 degrees feel much hotter. The combination of heat and humidity (not just heat alone) defines Japanese summer misery. Air conditioning (エアコン) is essential."},

  {type:"teach", trg:"つゆ", src:"rainy season", pos:"noun", gender:null,
   note:"Japan's rainy season from mid-June to mid-July. Literally 'plum rain.'\nKanji: 梅雨.",
   example:"A: つゆはいつからですか？\nB: ろくがつなかごろからです。",
   exampleSrc:"A: When does the rainy season start?\nB: From around mid-June.",
   funFact:"梅雨 literally means 'plum rain' because the rainy season coincides with plum ripening. Tsuyu brings weeks of constant drizzle and high humidity. Mold prevention becomes a daily concern. Tsuyu-ake (end of rainy season) is announced nationally and celebrated with relief."},

  {type:"teach", trg:"たいふう", src:"typhoon", pos:"noun", gender:null,
   note:"Tropical storms that hit Japan August through October. Very powerful.\nKanji: 台風.",
   example:"A: たいふうがきます。きをつけてください。\nB: はい、まどをしめます。",
   exampleSrc:"A: A typhoon is coming. Please be careful.\nB: Yes, I will close the windows.",
   funFact:"Japan faces 5-10 typhoons per year, mostly between August and October. 台風 comes from the same root as English 'typhoon' and Chinese 'tai feng.' Typhoon warnings are taken very seriously: trains stop, schools close, and people stock up on supplies. Japan's infrastructure is built to withstand them."},

  {type:"mc", q:"むしあつい means:", opts:["dry and cold","hot and humid","cool and breezy","warm and sunny"], ans:"hot and humid",
   hint:"This compound adjective combines 'steamy' with 'h...,' describing Japan's s... climate."},

  {type:"teach", trg:"じしん", src:"earthquake", pos:"noun", gender:null,
   note:"Japan experiences thousands per year, mostly minor. Preparedness is a way of life.\nKanji: 地震.",
   example:"A: じしんがありましたか？\nB: はい、ゆれましたが、だいじょうぶでした。",
   exampleSrc:"A: Was there an earthquake?\nB: Yes, it shook, but it was fine.",
   funFact:"地震 combines 地 (ground) and 震 (shake). Japan sits on four tectonic plates, making earthquakes frequent. Most are minor, but preparedness is drilled from childhood. Every September 1st is Disaster Prevention Day, with nationwide earthquake drills."},

  {type:"teach", trg:"ふる", src:"to fall (rain/snow)", pos:"verb", gender:null,
   note:"Group 1 verb. Used with あめ (rain) and ゆき (snow).\nKanji: 降る. あめがふる = rain falls.",
   example:"A: あしたあめがふるとおもいますか？\nB: たぶんふるとおもいます。",
   exampleSrc:"A: Do you think it will rain tomorrow?\nB: I think it probably will.",
   funFact:"降る is only for precipitation falling from the sky: rain, snow, hail. Leaves falling use 落ちる (ochiru, to fall/drop). This distinction is strict. ふる also appears in ふりだす (to start raining) and ふりやむ (to stop raining)."},

  {type:"teach", trg:"はれる", src:"to clear up / to become sunny", pos:"verb", gender:null,
   note:"Group 2 verb. When clouds clear and the sun comes out.\nKanji: 晴れる.",
   example:"A: ごごからはれるでしょう。\nB: よかった！せんたくものをほせます。",
   exampleSrc:"A: It will probably clear up from the afternoon.\nB: Good! I can hang the laundry.",
   funFact:"はれる is the verb form of はれ (sunny weather). Japanese laundry culture depends heavily on weather: most people hang clothes outside to dry. Weather forecasts specifically mention 洗濯指数 (laundry index), rating how good the drying conditions are."},

  {type:"fb", s:"きょうはさんじゅう{1}です。\n(Today it is 30 degrees.)", a:"ど", opts:["ど","じ","ふん","にち"], sSrc:"Today it is 30 degrees.",
   hint:"The counter for degrees of temperature."},

  {type:"teach", trg:"くもる", src:"to become cloudy", pos:"verb", gender:null,
   note:"Group 1 verb. When the sky fills with clouds.\nKanji: 曇る.",
   example:"A: ごごからくもるかもしれません。\nB: かさをもっていきましょう。",
   exampleSrc:"A: It might become cloudy from the afternoon.\nB: Let us bring umbrellas.",
   funFact:"くもる is the verb form of くもり (cloudy). Japanese weather reports use a seven-level system from 快晴 (kaisei, crystal clear) to 大雨 (ooame, heavy rain). Cloudy weather is common during tsuyu (rainy season) and can last weeks."},

  {type:"teach", trg:"かさ", src:"umbrella", pos:"noun", gender:null,
   note:"Essential item in Japan. Transparent plastic umbrellas are iconic.\nKanji: 傘.",
   example:"A: かさをもっていますか？\nB: いいえ、コンビニでかいます。",
   exampleSrc:"A: Do you have an umbrella?\nB: No, I will buy one at the convenience store.",
   funFact:"Japan goes through over 130 million umbrellas per year. Transparent vinyl umbrellas (ビニールがさ) cost about 500 yen at any convenience store and are ubiquitous. Umbrella stands outside shops and restaurants are a uniquely Japanese sight. Umbrella theft is a national frustration."},

  {type:"teach", trg:"にじ", src:"rainbow", pos:"noun", gender:null,
   note:"Literally 'rainbow' appears after rain. A beautiful natural sight.\nKanji: 虹.",
   example:"A: みてください！にじがでています！\nB: きれいですね！",
   exampleSrc:"A: Look! There is a rainbow!\nB: It is beautiful!",
   funFact:"虹 uses the insect radical (虫) because ancient Chinese saw the rainbow as a dragon or serpent in the sky. にじがでる (a rainbow appears) is the standard expression. Japanese traditionally counted seven colors in the rainbow, same as Western cultures, but this varies across world cultures."},

  {type:"teach", trg:"きおん", src:"air temperature", pos:"noun", gender:null,
   note:"Technical word for ambient temperature. Used in weather reports.\nKanji: 気温. き (air) + おん (warmth).",
   example:"A: きょうのさいこうきおんはなんどですか？\nB: さんじゅうごどです。",
   exampleSrc:"A: What is today's maximum temperature?\nB: It is 35 degrees.",
   funFact:"Weather reports use specific temperature terms: さいこうきおん (maximum temperature), さいていきおん (minimum temperature), へいきんきおん (average temperature). 猛暑日 (moushobi) is an official term for days exceeding 35 degrees, increasingly common due to climate change."},

  {type:"mc", q:"たいふう means:", opts:["earthquake","flood","typhoon","volcano"], ans:"typhoon",
   hint:"The powerful tropical storm that hits Japan from August through October."},

  {type:"match", pairs:[{trg:"むしあつい",src:"muggy"},{trg:"つゆ",src:"rainy season"},{trg:"たいふう",src:"typhoon"},{trg:"じしん",src:"earthquake"}]},

  {type:"match", pairs:[{trg:"ふる",src:"to fall (rain)"},{trg:"はれる",src:"to clear up"},{trg:"くもる",src:"to become cloudy"},{trg:"かさ",src:"umbrella"}]},

  {type:"fb", s:"{1}がきます。きをつけてください。\n(A typhoon is coming. Be careful.)", a:"たいふう", opts:["たいふう","じしん","ゆき","にじ"], sSrc:"A typhoon is coming. Be careful.",
   hint:"The powerful tropical storm that brings strong wind and rain."},

  {type:"mc", q:"つゆ is:", opts:["a type of food","the rainy season","a temperature reading","a wind pattern"], ans:"the rainy season",
   hint:"This weather phenomenon occurs from mid-June, coinciding with plum ripening."},

  {type:"fb", s:"あしたあめが{1}とおもいます。\n(I think it will rain tomorrow.)", a:"ふる", opts:["ふる","はれる","くもる","ふく"], sSrc:"I think it will rain tomorrow.",
   hint:"The verb specifically for precipitation falling from the sky."},
]};
export default BATCH2_L_1;
