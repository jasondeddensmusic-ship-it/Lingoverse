// Japanese V2 Unit 10. てんき (Weather & Seasons)
// Level: A1.3. JLPT N5 aligned.
// Weather vocabulary, seasons, temperature adjectives, months/days.

const UNIT_10 = {
  n:10, lang:"ja", srcLang:"en", track:"v2",
  title:"てんき", sub:"Weather & Seasons",
  icon:"🌤️", level:"A1.3", color:"#7B5EE8",
  lessons:[

// ═══ L1: きょうのてんき (Today's Weather) ═══
{id:"jav2_u10l1", title:"きょうのてんき", icon:"☀️", xp:15, board:true, steps:[
  {type:"intro", title:"きょうのてんき",
   desc:"Learn to talk about the weather in Japanese. Weather is one of the most common conversation topics in Japan, just like in English. You will learn weather types and temperature adjectives.",
   goals:["Describe the weather: sunny, cloudy, rainy, snowy","Use temperature adjectives: hot, cold, cool, warm","Ask and answer questions about the weather"]},

  {type:"teach", trg:"てんき", src:"weather", pos:"noun", gender:null,
   note:"General word for weather. Often asked with: きょうのてんきはどうですか？\nKanji: 天気.",
   example:"A: きょうのてんきはどうですか？\nB: はれです。",
   exampleSrc:"A: How is the weather today?\nB: It is sunny.",
   funFact:"天気 combines 天 (ten, heaven/sky) and 気 (ki, spirit/air). Literally 'sky spirit.' Weather talk is the universal icebreaker in Japan, just like in English-speaking countries. The weather forecast (tenki-yohou) is a staple of every Japanese news broadcast."},

  {type:"teach", trg:"はれ", src:"sunny / clear weather", pos:"noun", gender:null,
   note:"Clear skies, no clouds. Adjective form: はれた (cleared up).\nKanji: 晴れ.",
   example:"A: あしたのてんきは？\nB: はれですよ！",
   exampleSrc:"A: What is the weather tomorrow?\nB: It will be sunny!",
   funFact:"晴 shows the sun (日) next to blue/green (青). Hare (clear weather) is associated with 'hare no hi' (special/celebratory day). The concept of hare (public/formal/special) vs ke (private/everyday) is a key duality in Japanese culture."},

  {type:"teach", trg:"くもり", src:"cloudy", pos:"noun", gender:null,
   note:"Overcast skies. From the verb kumoru (to become cloudy).\nKanji: 曇り.",
   example:"A: きょうはくもりですね。\nB: ごごからあめかもしれません。",
   exampleSrc:"A: It is cloudy today, isn't it.\nB: It might rain from the afternoon.",
   funFact:"曇 shows the sun hidden by clouds (日 beneath 雲). Japan's rainy season (tsuyu, literally 'plum rain') in June brings weeks of cloudy, humid weather. The kanji is relatively complex (16 strokes), reflecting how overcast skies layer upon themselves."},

  {type:"teach", trg:"あめ", src:"rain", pos:"noun", gender:null,
   note:"Also the verb: あめがふる (rain falls). Japan gets a lot of rain.\nKanji: 雨.",
   example:"A: あめがふっています。\nB: かさをもっていきましょう。",
   exampleSrc:"A: It is raining.\nB: Let's bring an umbrella.",
   funFact:"雨 is a pictograph of rain drops falling from clouds. Japan receives about 1,700mm of rain per year, twice the world average. The Japanese language has dozens of words for rain: kosame (light rain), ooame (heavy rain), kirisame (misty rain), samidare (early summer rain)."},

  {type:"mc", q:"てんき means:", opts:["weather","cloud","temperature","wind"], ans:"weather",
   hint:"The compound of 'heaven/sky' + 'spirit/air' meaning the general atmospheric condition."},

  {type:"teach", trg:"ゆき", src:"snow", pos:"noun", gender:null,
   note:"Also the verb: ゆきがふる (snow falls). Heavy snow in northern Japan.\nKanji: 雪.",
   example:"A: ゆきがふっていますか？\nB: はい、たくさんふっています！",
   exampleSrc:"A: Is it snowing?\nB: Yes, it is snowing a lot!",
   funFact:"雪 shows rain (雨) with a broom (ヨ) underneath, suggesting sweeping away precipitation. Hokkaido and the Sea of Japan coast get massive snowfall. Sapporo's Snow Festival (yuki-matsuri) attracts millions of visitors to see enormous ice sculptures every February."},

  {type:"teach", trg:"かぜ", src:"wind", pos:"noun", gender:null,
   note:"Also means 'a cold' (the illness) with different kanji. Weather kanji: 風.\nKanji: 風.",
   example:"A: きょうはかぜがつよいですね。\nB: そうですね。さむいです。",
   exampleSrc:"A: The wind is strong today, isn't it.\nB: Yes, it is. It is cold.",
   funFact:"風 (kaze, wind) and 風邪 (kaze, a cold) sound identical but use different kanji. The belief was that wind carried illness, so catching a cold was literally 'catching the wind.' Kaze also appears in fuudo (climate), fuukei (scenery), and taifuu (typhoon)."},

  {type:"teach", trg:"あつい", src:"hot (weather/temperature)", pos:"adj", gender:null,
   note:"An i-adjective for hot weather. Different kanji from 'atsui' (thick): 暑い vs 厚い.\nKanji: 暑い.",
   example:"A: きょうはあついですね！\nB: そうですね。にじゅうはちどです。",
   exampleSrc:"A: It is hot today, isn't it!\nB: Yes, it is 28 degrees.",
   funFact:"暑い (atsui, hot weather) uses 日 (sun) in its kanji. A different atsui (熱い) means 'hot to the touch' (for objects/food). And a third atsui (厚い) means 'thick.' Context and kanji distinguish them, but in speech they sound the same."},

  {type:"teach", trg:"さむい", src:"cold (weather)", pos:"adj", gender:null,
   note:"An i-adjective for cold weather. For cold objects, use つめたい.\nKanji: 寒い.",
   example:"A: きょうはさむいですか？\nB: はい、とてもさむいです。",
   exampleSrc:"A: Is it cold today?\nB: Yes, it is very cold.",
   funFact:"寒い (samui) is specifically for air temperature/weather. For cold drinks or objects, use tsumetai (冷たい). Saying 'samui' about a drink sounds odd. This hot/cold split by weather vs touch is similar to the atsui distinction."},

  {type:"fb", s:"きょうは{1}がふっています。\n(It is raining today.)", a:"あめ", opts:["あめ","ゆき","かぜ","はれ"], sSrc:"It is raining today.",
   hint:"The precipitation type that falls as liquid water."},

  {type:"teach", trg:"すずしい", src:"cool / refreshing", pos:"adj", gender:null,
   note:"An i-adjective. Pleasant coolness, not unpleasant cold. Autumn weather.\nKanji: 涼しい.",
   example:"A: きょうはすずしいですね。\nB: はい、きもちいいです。",
   exampleSrc:"A: It is cool today, isn't it.\nB: Yes, it feels nice.",
   funFact:"Suzushii has a positive feeling: refreshing, pleasant coolness. It is the opposite of mushiatsui (muggy/humid-hot). After Japan's brutally hot and humid summers, the arrival of suzushii autumn weather is celebrated. It often appears with kimochi-ii (feels good)."},

  {type:"teach", trg:"あたたかい", src:"warm / mild", pos:"adj", gender:null,
   note:"An i-adjective. Pleasant warmth, not unpleasant heat. Spring weather.\nKanji: 暖かい (weather) / 温かい (objects).",
   example:"A: はるはあたたかいですね。\nB: はい、さくらもさきますよ。",
   exampleSrc:"A: Spring is warm, isn't it.\nB: Yes, the cherry blossoms bloom too.",
   funFact:"Two kanji for atatakai: 暖かい for weather/air and 温かい for warm objects or warm-hearted feelings. Atatakai spring days signal hanami (cherry blossom viewing) season, one of Japan's most beloved cultural events."},

  {type:"mc", q:"さむい specifically describes:", opts:["cold drinks","cold weather","cold food","cold personality"], ans:"cold weather",
   hint:"This i-adjective is specifically for air temperature, not for touching c... objects."},

  {type:"match", pairs:[{trg:"はれ",src:"sunny"},{trg:"くもり",src:"cloudy"},{trg:"あめ",src:"rain"},{trg:"ゆき",src:"snow"}]},

  {type:"match", pairs:[{trg:"あつい",src:"hot"},{trg:"さむい",src:"cold"},{trg:"すずしい",src:"cool"},{trg:"あたたかい",src:"warm"}]},

  {type:"fb", s:"きょうの{1}はどうですか？\n(How is the weather today?)", a:"てんき", opts:["てんき","じかん","たべもの","ばしょ"], sSrc:"How is the weather today?",
   hint:"The general word for atmospheric conditions combining 'sky' and 'spirit.'"},

  {type:"mc", q:"Which word describes pleasant autumn coolness?", opts:["さむい","あつい","すずしい","あたたかい"], ans:"すずしい",
   hint:"This adjective has a positive, refreshing connotation, not an unpleasant chill."},

  {type:"tip", title:"Weather Pairs: Positive vs Negative",
   text:"Japanese has paired temperature words:\n\nHot weather: あつい (unpleasant heat)\nWarm weather: あたたかい (pleasant warmth)\n\nCold weather: さむい (unpleasant cold)\nCool weather: すずしい (pleasant coolness)\n\nFor objects/drinks, different words:\nHot drink: あつい (熱い, different kanji)\nCold drink: つめたい",
   deepDive:{title:"Weather and Japanese culture",
    text:"Japanese people constantly discuss the weather because Japan has four very distinct seasons, each with its own cultural events:\n\nはる (spring): cherry blossoms, new school year\nなつ (summer): festivals, fireworks, humid heat\nあき (autumn): moon viewing, fall colors\nふゆ (winter): hot springs, New Year\n\nSeasonal awareness (kisetsukan) is deeply embedded in food, fashion, greetings, and daily life."}},

  {type:"mc", q:"あたたかい describes:", opts:["unpleasant heat","refreshing coolness","cold weather","pleasant warmth"], ans:"pleasant warmth",
   hint:"This i-adjective has a positive feeling, associated with spring and gentle sunlight."},
]},

// ═══ L2: しき (The Four Seasons) ═══
{id:"jav2_u10l2", title:"しき", icon:"🌸", xp:15, board:true, steps:[
  {type:"intro", title:"しき",
   desc:"Learn the four seasons and how to talk about months and days in Japanese. Seasons are deeply important in Japanese culture, influencing food, fashion, greetings, and traditions throughout the year.",
   goals:["Name the four seasons: haru, natsu, aki, fuyu","Say months using gatsu (January through December)","Talk about seasonal events and activities"]},

  {type:"teach", trg:"はる", src:"spring", pos:"noun", gender:null,
   note:"March to May in Japan. Cherry blossom season. School year starts.\nKanji: 春.",
   example:"A: はるがすきですか？\nB: はい、さくらがきれいです。",
   exampleSrc:"A: Do you like spring?\nB: Yes, the cherry blossoms are beautiful.",
   funFact:"春 originally showed the sun warming seeds underground, causing them to sprout. Haru is the most celebrated season in Japan. The school year, fiscal year, and many jobs all start in April. 'Haru ga kita' (spring has come) is a famous children's song."},

  {type:"teach", trg:"なつ", src:"summer", pos:"noun", gender:null,
   note:"June to August. Hot, humid, festival season. Rainy season (tsuyu) in June.\nKanji: 夏.",
   example:"A: なつになにをしますか？\nB: うみにいきます！",
   exampleSrc:"A: What do you do in summer?\nB: I go to the beach!",
   funFact:"夏 depicts a person with a large headdress, suggesting ceremonial summer dances. Japanese summers are famous for matsuri (festivals) with fireworks (hanabi, literally 'fire flowers'), yukata (casual kimono), and kakigori (shaved ice). The Bon festival honors ancestors."},

  {type:"teach", trg:"あき", src:"autumn / fall", pos:"noun", gender:null,
   note:"September to November. Fall colors, harvest, moon viewing.\nKanji: 秋.",
   example:"A: あきのこうようがきれいですね。\nB: はい、やまにいきたいです。",
   exampleSrc:"A: The autumn leaves are beautiful.\nB: Yes, I want to go to the mountains.",
   funFact:"秋 shows grain (禾) next to fire (火), representing drying harvested grain. Aki is the season of kouyou (fall foliage viewing), moon viewing (tsukimi), and harvest festivals. Food in autumn is said to be the best: sanma (pike mackerel), kuri (chestnuts), and sweet potatoes."},

  {type:"teach", trg:"ふゆ", src:"winter", pos:"noun", gender:null,
   note:"December to February. Cold, snow in north, New Year celebrations.\nKanji: 冬.",
   example:"A: ふゆにどこにいきたいですか？\nB: ほっかいどうにいきたいです。",
   exampleSrc:"A: Where do you want to go in winter?\nB: I want to go to Hokkaido.",
   funFact:"冬 depicts ice crystals forming, representing the freezing season. Winter in Japan means oshogatsu (New Year), the biggest holiday. Families eat osechi-ryouri (traditional New Year foods), visit shrines (hatsumoude), and send nengajou (New Year postcards)."},

  {type:"mc", q:"はる means:", opts:["spring","autumn","winter","summer"], ans:"spring",
   hint:"The season of cherry blossoms and new beginnings in Japan."},

  {type:"teach", trg:"〜がつ", src:"month (counter)", pos:"part", gender:null,
   note:"Attach numbers 1-12: いちがつ (January), にがつ (February), etc.\nIrregulars: 4 = しがつ, 7 = しちがつ, 9 = くがつ.\nKanji: 月.",
   example:"A: たんじょうびはなんがつですか？\nB: さんがつです。",
   exampleSrc:"A: What month is your birthday?\nB: March.",
   funFact:"月 means both 'moon' and 'month.' Japanese months are simply numbered: ichi-gatsu (month 1 = January), ni-gatsu (month 2 = February). Until the Meiji era, Japan used poetic names: mutsuki (month of affection), kisaragi (month of changing clothes), etc."},

  {type:"teach", trg:"〜にち", src:"day (counter)", pos:"part", gender:null,
   note:"Day of the month. Many irregular readings: ついたち (1st), ふつか (2nd), みっか (3rd).\nKanji: 日.",
   example:"A: きょうはなんにちですか？\nB: じゅうごにちです。",
   exampleSrc:"A: What day of the month is it?\nB: It is the 15th.",
   funFact:"Days 1-10 use mostly native Japanese readings that must be memorized: tsuitachi (1st), futsuka (2nd), mikka (3rd), yokka (4th), itsuka (5th), muika (6th), nanoka (7th), youka (8th), kokonoka (9th), tooka (10th). After 10, it becomes regular: juu-ichi-nichi, etc."},

  {type:"fb", s:"たんじょうびは{1}がつですか？\n(What month is your birthday?)", a:"なん", opts:["なん","いち","さん","しち"], sSrc:"What month is your birthday?",
   hint:"The question word that replaces the number to ask 'which month?'"},

  {type:"teach", trg:"さくら", src:"cherry blossom(s)", pos:"noun", gender:null,
   note:"Japan's most beloved flower. Bloom time (mid-March to April) is tracked nationally.\nKanji: 桜.",
   example:"A: さくらがさいていますよ！\nB: はなみにいきましょう！",
   exampleSrc:"A: The cherry blossoms are blooming!\nB: Let's go flower viewing!",
   funFact:"Sakura are so important that weather services broadcast a 'cherry blossom front' (sakura zensen) tracking when blossoms open from south to north. Hanami (flower viewing) picnics under cherry trees date back over 1,000 years. The blossoms last only about a week."},

  {type:"teach", trg:"はなみ", src:"cherry blossom viewing (picnic)", pos:"noun", gender:null,
   note:"Compound: hana (flower) + mi (viewing). Japan's most beloved spring tradition.\nKanji: 花見.",
   example:"A: にちようびにはなみにいきませんか？\nB: いいですね！いきましょう。",
   exampleSrc:"A: Shall we go flower viewing on Sunday?\nB: Sounds great! Let's go.",
   funFact:"花 (hana, flower) + 見 (mi, viewing). Hanami involves picnicking under cherry trees with friends, family, or coworkers. People arrive early to claim spots with blue tarps. Food, drinks, and singing are common. Some companies assign junior employees to hold spots all day."},

  {type:"mc", q:"さくら means:", opts:["rain","cherry blossom","snow","autumn leaf"], ans:"cherry blossom",
   hint:"Japan's national flower whose brief blooming season is celebrated every spring."},

  {type:"teach", trg:"まつり", src:"festival", pos:"noun", gender:null,
   note:"Traditional Japanese festivals. Thousands held across Japan yearly.\nKanji: 祭り.",
   example:"A: なつにまつりがありますか？\nB: はい、たくさんありますよ！",
   exampleSrc:"A: Are there festivals in summer?\nB: Yes, there are many!",
   funFact:"Japan holds over 300,000 festivals per year. Matsuri originally meant Shinto religious ceremonies. Summer festivals (natsu-matsuri) feature mikoshi (portable shrines), taiko (drums), bon-odori (folk dancing), and yatai (food stalls) selling yakisoba, takoyaki, and kakigori."},

  {type:"teach", trg:"おしょうがつ", src:"New Year", pos:"noun", gender:null,
   note:"Japan's most important holiday (January 1-3). The o- is honorific.\nKanji: お正月.",
   example:"A: おしょうがつになにをしますか？\nB: はつもうでにいきます。",
   exampleSrc:"A: What do you do for New Year?\nB: I go to a shrine for the first visit.",
   funFact:"Oshogatsu is Japan's biggest holiday. Families gather, eat traditional foods (osechi-ryouri), visit shrines (hatsumoude), and watch NHK's Kouhaku music show on New Year's Eve. Children receive otoshidama (money in decorated envelopes). Most businesses close for 3 days."},

  {type:"match", pairs:[{trg:"はる",src:"spring"},{trg:"なつ",src:"summer"},{trg:"あき",src:"autumn"},{trg:"ふゆ",src:"winter"}]},

  {type:"match", pairs:[{trg:"さくら",src:"cherry blossom"},{trg:"はなみ",src:"flower viewing"},{trg:"まつり",src:"festival"},{trg:"おしょうがつ",src:"New Year"}]},

  {type:"fb", s:"{1}がさいていますよ！\n(The cherry blossoms are blooming!)", a:"さくら", opts:["さくら","はなみ","はる","まつり"], sSrc:"The cherry blossoms are blooming!",
   hint:"Japan's iconic spring flower whose bloom is tracked nationally."},

  {type:"mc", q:"いちがつ means:", opts:["one day","Monday","January","first year"], ans:"January",
   hint:"Ichi (one) + gatsu (month) = the first month of the year."},

  {type:"mc", q:"おしょうがつ is celebrated in:", opts:["spring","summer","autumn","winter"], ans:"winter",
   hint:"This holiday falls at the very beginning of the calendar year."},

  {type:"tip", title:"Months in Japanese",
   text:"Months are simply number + がつ:\nいちがつ (January), にがつ (February)\nさんがつ (March), しがつ (April)\nごがつ (May), ろくがつ (June)\nしちがつ (July), はちがつ (August)\nくがつ (September), じゅうがつ (October)\nじゅういちがつ (November), じゅうにがつ (December)\n\nIrregular readings: 4 = し (not yon), 7 = しち (not nana), 9 = く (not kyuu).",
   deepDive:{title:"Old Japanese month names",
    text:"Before adopting numbered months, Japan used poetic names:\nむつき (January, month of harmony)\nきさらぎ (February, month of changing clothes)\nやよい (March, month of growing)\nうづき (April, deutzia flower month)\nさつき (May, rice-planting month)\nみなづき (June, month of water)\n\nThese old names still appear in literature, names, and traditional contexts. Yayoi and Satsuki are popular girls' names."}},
]},

]};
export default UNIT_10;
