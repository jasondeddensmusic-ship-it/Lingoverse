// Batch 2 expansion for Unit 10 (Weather) — more weather terms, temperature, natural phenomena
const BATCH2_L_1 = {
  id:"jav2_u10l_b2_1", title:"自然(しぜん)と天気(てんき)", icon:"🌊", xp:15, board:true,
  steps:[
  {type:"intro", title:"自然(しぜん)と天気(てんき)",
   desc:"Deepen your weather vocabulary with temperature readings, natural phenomena like typhoons and earthquakes, and useful weather-related verbs. Japan's dramatic geography means weather awareness is essential for daily life.",
   goals:["Talk about temperature in degrees","Learn about natural phenomena: typhoons, earthquakes","Use weather verbs: furu, hareru, kumoru"]},

  {type:"teach", trg:"〜度(ど)", src:"~ degrees (temperature)", pos:"part", gender:null,
   note:"Counter for degrees. 二十度(にじゅうど) = 20 degrees. Used with Celsius in Japan.\nKanji: 度(ど).",
   example:"A: 今日(きょう)は何度(なんど)ですか？\nB: 三十二度(さんじゅうにど)です。暑(あつ)いですね。",
   exampleSrc:"A: What is the temperature today?\nB: It is 32 degrees. Hot, is it not.",
   funFact:"Japan uses Celsius exclusively. 度(ど) also means 'time/occasion' (一度(いちど) = once) and 'degree of angle.' A comfortable room is about 二十五度(にじゅうごど) (25 degrees). Japanese weather reports always give the highest and lowest temperatures for the day."},

  {type:"teach", trg:"蒸(む)し暑(あつ)い", src:"hot and humid / muggy", pos:"adj", gender:null,
   note:"い-adjective combining 蒸(む)し (steamy) + 暑(あつ)い (hot). Japan's summer trademark.\nKanji: 蒸(む)し暑(あつ)い.",
   example:"A: 今日(きょう)は蒸(む)し暑(あつ)いですね。\nB: そうですね。エアコンが必要(ひつよう)です。",
   exampleSrc:"A: It is muggy today, is it not.\nB: Yes. We need air conditioning.",
   funFact:"蒸(む)し暑(あつ)い is THE word for Japanese summer weather. Tokyo's summer humidity regularly exceeds 80%, making 30 degrees feel much hotter. The combination of heat and humidity (not just heat alone) defines Japanese summer misery. Air conditioning (エアコン) is essential."},

  {type:"teach", trg:"梅雨(つゆ)", src:"rainy season", pos:"noun", gender:null,
   note:"Japan's rainy season from mid-June to mid-July. Literally 'plum rain.'\nKanji: 梅雨(つゆ).",
   example:"A: 梅雨(つゆ)はいつからですか？\nB: 六月(ろくがつ)中頃(なかごろ)からです。",
   exampleSrc:"A: When does the rainy season start?\nB: From around mid-June.",
   funFact:"梅雨 literally means 'plum rain' because the rainy season coincides with 梅(うめ) (plum) ripening. 梅雨(つゆ) brings weeks of constant drizzle and high humidity. Mold prevention becomes a daily concern. 梅雨明(つゆあ)け (end of rainy season) is announced nationally and celebrated with relief."},

  {type:"teach", trg:"台風(たいふう)", src:"typhoon", pos:"noun", gender:null,
   note:"Tropical storms that hit Japan August through October. Very powerful.\nKanji: 台風(たいふう).",
   example:"A: 台風(たいふう)が来(き)ます。気(き)をつけてください。\nB: はい、窓(まど)を閉(し)めます。",
   exampleSrc:"A: A typhoon is coming. Please be careful.\nB: Yes, I will close the windows.",
   funFact:"Japan faces 5-10 typhoons per year, mostly between August and October. 台風(たいふう) comes from the same root as English 'typhoon' and Chinese 'tai feng.' Typhoon warnings are taken very seriously: trains stop, schools close, and people stock up on supplies. Japan's infrastructure is built to withstand them."},

  {type:"mc", q:"蒸(む)し暑(あつ)い means:", opts:["dry and cold","hot and humid","cool and breezy","warm and sunny"], ans:"hot and humid",
   hint:"This compound adjective combines 'steamy' with 'h...,' describing Japan's s... climate."},

  {type:"teach", trg:"地震(じしん)", src:"earthquake", pos:"noun", gender:null,
   note:"Japan experiences thousands per year, mostly minor. Preparedness is a way of life.\nKanji: 地震(じしん).",
   example:"A: 地震(じしん)がありましたか？\nB: はい、揺(ゆ)れましたが、大丈夫(だいじょうぶ)でした。",
   exampleSrc:"A: Was there an earthquake?\nB: Yes, it shook, but it was fine.",
   funFact:"地震 combines 地(ち) (ground) and 震(しん) (shake). Japan sits on four tectonic plates, making earthquakes frequent. Most are minor, but preparedness is drilled from childhood. Every September 1st is 防災(ぼうさい)の日(ひ) (Disaster Prevention Day), with nationwide earthquake drills."},

  {type:"teach", trg:"降(ふ)る", src:"to fall (rain/snow)", pos:"verb", gender:null,
   note:"Group 1 verb. Used with 雨(あめ) (rain) and 雪(ゆき) (snow).\nKanji: 降(ふ)る. 雨(あめ)が降(ふ)る = rain falls.",
   example:"A: 明日(あした)雨(あめ)が降(ふ)ると思(おも)いますか？\nB: たぶん降(ふ)ると思(おも)います。",
   exampleSrc:"A: Do you think it will rain tomorrow?\nB: I think it probably will.",
   funFact:"降(ふ)る is only for precipitation falling from the sky: rain, snow, hail. Leaves falling use 落(お)ちる (to fall/drop). This distinction is strict. 降(ふ)る also appears in 降(ふ)り出(だ)す (to start raining) and 降(ふ)り止(や)む (to stop raining)."},

  {type:"teach", trg:"晴(は)れる", src:"to clear up / to become sunny", pos:"verb", gender:null,
   note:"Group 2 verb. When clouds clear and the sun comes out.\nKanji: 晴(は)れる.",
   example:"A: 午後(ごご)から晴(は)れるでしょう。\nB: よかった！洗濯物(せんたくもの)を干(ほ)せます。",
   exampleSrc:"A: It will probably clear up from the afternoon.\nB: Good! I can hang the laundry.",
   funFact:"晴(は)れる is the verb form of 晴(は)れ (sunny weather). Japanese laundry culture depends heavily on weather: most people hang clothes outside to dry. Weather forecasts specifically mention 洗濯指数(せんたくしすう) (laundry index), rating how good the drying conditions are."},

  {type:"fb", s:"今日(きょう)は三十{1}です。\n(Today it is 30 degrees.)", a:"度(ど)", opts:["度(ど)","時(じ)","分(ふん)","日(にち)"], sSrc:"Today it is 30 degrees.",
   hint:"The counter for degrees of temperature."},

  {type:"teach", trg:"曇(くも)る", src:"to become cloudy", pos:"verb", gender:null,
   note:"Group 1 verb. When the sky fills with clouds.\nKanji: 曇(くも)る.",
   example:"A: 午後(ごご)から曇(くも)るかもしれません。\nB: 傘(かさ)を持(も)っていきましょう。",
   exampleSrc:"A: It might become cloudy from the afternoon.\nB: Let us bring umbrellas.",
   funFact:"曇(くも)る is the verb form of 曇(くも)り (cloudy). Japanese weather reports use a seven-level system from 快晴(かいせい) (crystal clear) to 大雨(おおあめ) (heavy rain). Cloudy weather is common during 梅雨(つゆ) (rainy season) and can last weeks."},

  {type:"teach", trg:"傘(かさ)", src:"umbrella", pos:"noun", gender:null,
   note:"Essential item in Japan. Transparent plastic umbrellas are iconic.\nKanji: 傘(かさ).",
   example:"A: 傘(かさ)を持(も)っていますか？\nB: いいえ、コンビニで買(か)います。",
   exampleSrc:"A: Do you have an umbrella?\nB: No, I will buy one at the convenience store.",
   funFact:"Japan goes through over 130 million umbrellas per year. Transparent vinyl umbrellas (ビニール傘(かさ)) cost about 500 yen at any convenience store and are ubiquitous. Umbrella stands outside shops and restaurants are a uniquely Japanese sight. Umbrella theft is a national frustration."},

  {type:"teach", trg:"虹(にじ)", src:"rainbow", pos:"noun", gender:null,
   note:"Literally 'rainbow' appears after rain. A beautiful natural sight.\nKanji: 虹(にじ).",
   example:"A: 見(み)てください！虹(にじ)が出(で)ています！\nB: きれいですね！",
   exampleSrc:"A: Look! There is a rainbow!\nB: It is beautiful!",
   funFact:"虹 uses the insect radical (虫(むし)) because ancient Chinese saw the rainbow as a dragon or serpent in the sky. 虹(にじ)が出(で)る (a rainbow appears) is the standard expression. Japanese traditionally counted seven colors in the rainbow, same as Western cultures, but this varies across world cultures."},

  {type:"teach", trg:"気温(きおん)", src:"air temperature", pos:"noun", gender:null,
   note:"Technical word for ambient temperature. Used in weather reports.\nKanji: 気温(きおん). 気(き) (air) + 温(おん) (warmth).",
   example:"A: 今日(きょう)の最高(さいこう)気温(きおん)は何度(なんど)ですか？\nB: 三十五度(さんじゅうごど)です。",
   exampleSrc:"A: What is today's maximum temperature?\nB: It is 35 degrees.",
   funFact:"Weather reports use specific temperature terms: 最高気温(さいこうきおん) (maximum temperature), 最低気温(さいていきおん) (minimum temperature), 平均気温(へいきんきおん) (average temperature). 猛暑日(もうしょび) is an official term for days exceeding 35 degrees, increasingly common due to climate change."},

  {type:"mc", q:"台風(たいふう) means:", opts:["earthquake","flood","typhoon","volcano"], ans:"typhoon",
   hint:"The powerful tropical storm that hits Japan from August through October."},

  {type:"match", pairs:[{trg:"蒸(む)し暑(あつ)い",src:"muggy"},{trg:"梅雨(つゆ)",src:"rainy season"},{trg:"台風(たいふう)",src:"typhoon"},{trg:"地震(じしん)",src:"earthquake"}]},

  {type:"match", pairs:[{trg:"降(ふ)る",src:"to fall (rain)"},{trg:"晴(は)れる",src:"to clear up"},{trg:"曇(くも)る",src:"to become cloudy"},{trg:"傘(かさ)",src:"umbrella"}]},

  {type:"fb", s:"{1}が来(き)ます。気(き)をつけてください。\n(A typhoon is coming. Be careful.)", a:"台風(たいふう)", opts:["台風(たいふう)","地震(じしん)","雪(ゆき)","虹(にじ)"], sSrc:"A typhoon is coming. Be careful.",
   hint:"The powerful tropical storm that brings strong wind and rain."},

  {type:"mc", q:"梅雨(つゆ) is:", opts:["a type of food","the rainy season","a temperature reading","a wind pattern"], ans:"the rainy season",
   hint:"This weather phenomenon occurs from mid-June, coinciding with plum ripening."},

  {type:"fb", s:"明日(あした)雨(あめ)が{1}と思(おも)います。\n(I think it will rain tomorrow.)", a:"降(ふ)る", opts:["降(ふ)る","晴(は)れる","曇(くも)る","吹(ふ)く"], sSrc:"I think it will rain tomorrow.",
   hint:"The verb specifically for precipitation falling from the sky."},
{type:"match",pairs:[{trg:"虹(にじ)",src:"rainbow"},{trg:"気温(きおん)",src:"air temperature"}]}]};
export default BATCH2_L_1;
