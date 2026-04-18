// Japanese V2 Unit 10. 天気(てんき) (Weather & Seasons)
import BATCH11_L1 from './_batch11_u10_L01.js';
import BATCH10_L1 from './_batch10_u10_L01.js';
import BATCH9_L1 from './_batch9_u10_L01.js';
import BATCH7_L1 from './_batch7_u10_L01.js';
import BATCH8_L1 from './_batch8_u10_L01.js';
import BATCH6_L1 from './_batch6_u10_L01.js';
import BATCH4_L02 from './_batch4_u10_L02.js';
import BATCH4_L01 from './_batch4_u10_L01.js';
import BATCH2_L1 from './_batch2_u10_L01.js';
// Level: A1.3. JLPT N5 aligned.
// Weather vocabulary, seasons, temperature adjectives, months/days.

const UNIT_10 = {
  n:10, lang:"ja", srcLang:"en", track:"v2",
  title:"天気(てんき)", sub:"Weather & Seasons",
  icon:"\u{1F324}\uFE0F", level:"A1.3", color:"#7B5EE8",
  lessons:[

// ═══ L1: 今日(きょう)の天気(てんき) (Today's Weather) ═══
{id:"jav2_u10l1", title:"今日(きょう)の天気(てんき)", icon:"\u2600\uFE0F", xp:15, board:true, steps:[
  {type:"intro", title:"今日(きょう)の天気(てんき)",
   desc:"Learn to talk about the weather in Japanese. Weather is one of the most common conversation topics in Japan, just like in English. You will learn weather types and temperature adjectives.",
   goals:["Describe the weather: sunny, cloudy, rainy, snowy","Use temperature adjectives: hot, cold, cool, warm","Ask and answer questions about the weather"]},

  {type:"teach", trg:"天気(てんき)", src:"weather", pos:"noun", gender:null,
   note:"General word for weather. Often asked with: 今日(きょう)の天気(てんき)はどうですか?\nKanji: 天気.",
   example:"A: 今日(きょう)の天気(てんき)はどうですか?\nB: 晴(は)れです。",
   exampleSrc:"A: How is the weather today?\nB: It is sunny.",
   funFact:"天気 combines 天 (ten, heaven/sky) and 気 (ki, spirit/air). Literally 'sky spirit.' Weather talk is the universal icebreaker in Japan, just like in English-speaking countries. The weather forecast (tenki-yohou) is a staple of every Japanese news broadcast."},

  {type:"teach", trg:"晴(は)れ", src:"sunny / clear weather", pos:"noun", gender:null,
   note:"Clear skies, no clouds. Adjective form: 晴(は)れた (cleared up).\nKanji: 晴れ.",
   example:"A: 明日(あした)の天気(てんき)は?\nB: 晴(は)れですよ!",
   exampleSrc:"A: What is the weather tomorrow?\nB: It will be sunny!",
   funFact:"晴 shows the sun (日) next to blue/green (青). Hare (clear weather) is associated with 'hare no hi' (special/celebratory day). The concept of hare (public/formal/special) vs ke (private/everyday) is a key duality in Japanese culture."},

  {type:"teach", trg:"曇(くも)り", src:"cloudy", pos:"noun", gender:null,
   note:"Overcast skies. From the verb kumoru (to become cloudy).\nKanji: 曇り.",
   example:"A: 今日(きょう)は曇(くも)りですね。\nB: 午後(ごご)から雨(あめ)かもしれません。",
   exampleSrc:"A: It is cloudy today, isn't it.\nB: It might rain from the afternoon.",
   funFact:"曇 shows the sun hidden by clouds (日 beneath 雲). Japan's rainy season (tsuyu, literally 'plum rain') in June brings weeks of cloudy, humid weather. The kanji is relatively complex (16 strokes), reflecting how overcast skies layer upon themselves."},

  {type:"teach", trg:"雨(あめ)", src:"rain", pos:"noun", gender:null,
   note:"Also the verb: 雨(あめ)が降(ふ)る (rain falls). Japan gets a lot of rain.\nKanji: 雨.",
   example:"A: 雨(あめ)が降(ふ)っています。\nB: 傘(かさ)を持(も)って行(い)きましょう。",
   exampleSrc:"A: It is raining.\nB: Let's bring an umbrella.",
   funFact:"雨 is a pictograph of rain drops falling from clouds. Japan receives about 1,700mm of rain per year, twice the world average. The Japanese language has dozens of words for rain: kosame (light rain), ooame (heavy rain), kirisame (misty rain), samidare (early summer rain)."},

  {type:"mc", q:"天気(てんき) means:", opts:["weather","cloud","temperature","wind"], ans:"weather",
   hint:"The compound of 'heaven/sky' + 'spirit/air' meaning the general atmospheric condition."},

  {type:"teach", trg:"雪(ゆき)", src:"snow", pos:"noun", gender:null,
   note:"Also the verb: 雪(ゆき)が降(ふ)る (snow falls). Heavy snow in northern Japan.\nKanji: 雪.",
   example:"A: 雪(ゆき)が降(ふ)っていますか?\nB: はい、たくさん降(ふ)っています!",
   exampleSrc:"A: Is it snowing?\nB: Yes, it is snowing a lot!",
   funFact:"雪 shows rain (雨) with a broom (ヨ) underneath, suggesting sweeping away precipitation. Hokkaido and the Sea of Japan coast get massive snowfall. Sapporo's Snow Festival (yuki-matsuri) attracts millions of visitors to see enormous ice sculptures every February."},

  {type:"teach", trg:"風(かぜ)", src:"wind", pos:"noun", gender:null,
   note:"Also means 'a cold' (the illness) with different kanji. Weather kanji: 風.\nKanji: 風.",
   example:"A: 今日(きょう)は風(かぜ)が強(つよ)いですね。\nB: そうですね。寒(さむ)いです。",
   exampleSrc:"A: The wind is strong today, isn't it.\nB: Yes, it is. It is cold.",
   funFact:"風 (kaze, wind) and 風邪 (kaze, a cold) sound identical but use different kanji. The belief was that wind carried illness, so catching a cold was literally 'catching the wind.' Kaze also appears in fuudo (climate), fuukei (scenery), and taifuu (typhoon)."},

  {type:"teach", trg:"暑(あつ)い", src:"hot (weather/temperature)", pos:"adj", gender:null,
   note:"An i-adjective for hot weather. Different kanji from 'atsui' (thick): 暑い vs 厚い.\nKanji: 暑い.",
   example:"A: 今日(きょう)は暑(あつ)いですね!\nB: そうですね。二十八度(にじゅうはちど)です。",
   exampleSrc:"A: It is hot today, isn't it!\nB: Yes, it is 28 degrees.",
   funFact:"暑い (atsui, hot weather) uses 日 (sun) in its kanji. A different atsui (熱い) means 'hot to the touch' (for objects/food). And a third atsui (厚い) means 'thick.' Context and kanji distinguish them, but in speech they sound the same."},

  {type:"teach", trg:"寒(さむ)い", src:"cold (weather)", pos:"adj", gender:null,
   note:"An i-adjective for cold weather. For cold objects, use 冷(つめ)たい.\nKanji: 寒い.",
   example:"A: 今日(きょう)は寒(さむ)いですか?\nB: はい、とても寒(さむ)いです。",
   exampleSrc:"A: Is it cold today?\nB: Yes, it is very cold.",
   funFact:"寒い (samui) is specifically for air temperature/weather. For cold drinks or objects, use tsumetai (冷たい). Saying 'samui' about a drink sounds odd. This hot/cold split by weather vs touch is similar to the atsui distinction."},

  {type:"fb", s:"今日(きょう)は{1}が降(ふ)っています。\n(It is raining today.)", a:"雨(あめ)", opts:["雨(あめ)","雪(ゆき)","風(かぜ)","晴(は)れ"], sSrc:"It is raining today.",
   hint:"The precipitation type that falls as liquid water."},

  {type:"teach", trg:"涼(すず)しい", src:"cool / refreshing", pos:"adj", gender:null,
   note:"An i-adjective. Pleasant coolness, not unpleasant cold. Autumn weather.\nKanji: 涼しい.",
   example:"A: 今日(きょう)は涼(すず)しいですね。\nB: はい、気持(きも)ちいいです。",
   exampleSrc:"A: It is cool today, isn't it.\nB: Yes, it feels nice.",
   funFact:"Suzushii has a positive feeling: refreshing, pleasant coolness. It is the opposite of mushiatsui (muggy/humid-hot). After Japan's brutally hot and humid summers, the arrival of suzushii autumn weather is celebrated. It often appears with kimochi-ii (feels good)."},

  {type:"teach", trg:"暖(あたた)かい", src:"warm / mild", pos:"adj", gender:null,
   note:"An i-adjective. Pleasant warmth, not unpleasant heat. Spring weather.\nKanji: 暖かい (weather) / 温かい (objects).",
   example:"A: 春(はる)は暖(あたた)かいですね。\nB: はい、桜(さくら)も咲(さ)きますよ。",
   exampleSrc:"A: Spring is warm, isn't it.\nB: Yes, the cherry blossoms bloom too.",
   funFact:"Two kanji for atatakai: 暖かい for weather/air and 温かい for warm objects or warm-hearted feelings. Atatakai spring days signal hanami (cherry blossom viewing) season, one of Japan's most beloved cultural events."},

  {type:"mc", q:"寒(さむ)い specifically describes:", opts:["cold drinks","cold weather","cold food","cold personality"], ans:"cold weather",
   hint:"This i-adjective is specifically for air temperature, not for touching c... objects."},

  {type:"match", pairs:[{trg:"晴(は)れ",src:"sunny"},{trg:"曇(くも)り",src:"cloudy"},{trg:"雨(あめ)",src:"rain"},{trg:"雪(ゆき)",src:"snow"}]},

  {type:"match", pairs:[{trg:"暑(あつ)い",src:"hot"},{trg:"寒(さむ)い",src:"cold"},{trg:"涼(すず)しい",src:"cool"},{trg:"暖(あたた)かい",src:"warm"}]},

  {type:"fb", s:"今日(きょう)の{1}はどうですか?\n(How is the weather today?)", a:"天気(てんき)", opts:["天気(てんき)","時間(じかん)","食(た)べ物(もの)","場所(ばしょ)"], sSrc:"How is the weather today?",
   hint:"The general word for atmospheric conditions combining 'sky' and 'spirit.'"},

  {type:"mc", q:"Which word describes pleasant autumn coolness?", opts:["寒(さむ)い","暑(あつ)い","涼(すず)しい","暖(あたた)かい"], ans:"涼(すず)しい",
   hint:"This adjective has a positive, refreshing connotation, not an unpleasant chill."},

  {type:"tip", title:"Weather Pairs: Positive vs Negative",
   text:"Japanese has paired temperature words:\n\nHot weather: 暑(あつ)い (unpleasant heat)\nWarm weather: 暖(あたた)かい (pleasant warmth)\n\nCold weather: 寒(さむ)い (unpleasant cold)\nCool weather: 涼(すず)しい (pleasant coolness)\n\nFor objects/drinks, different words:\nHot drink: 熱(あつ)い (different kanji)\nCold drink: 冷(つめ)たい",
   deepDive:{title:"Weather and Japanese culture",
    text:"Japanese people constantly discuss the weather because Japan has four very distinct seasons, each with its own cultural events:\n\n春(はる) (spring): cherry blossoms, new school year\n夏(なつ) (summer): festivals, fireworks, humid heat\n秋(あき) (autumn): moon viewing, fall colors\n冬(ふゆ) (winter): hot springs, New Year\n\nSeasonal awareness (kisetsukan) is deeply embedded in food, fashion, greetings, and daily life."}},

  {type:"mc", q:"暖(あたた)かい describes:", opts:["unpleasant heat","refreshing coolness","cold weather","pleasant warmth"], ans:"pleasant warmth",
   hint:"This i-adjective has a positive feeling, associated with spring and gentle sunlight."},
]},

// ═══ L2: 四季(しき) (The Four Seasons) ═══
{id:"jav2_u10l2", title:"四季(しき)", icon:"\u{1F338}", xp:15, board:true, steps:[
  {type:"intro", title:"四季(しき)",
   desc:"Learn the four seasons and how to talk about months and days in Japanese. Seasons are deeply important in Japanese culture, influencing food, fashion, greetings, and traditions throughout the year.",
   goals:["Name the four seasons: haru, natsu, aki, fuyu","Say months using gatsu (January through December)","Talk about seasonal events and activities"]},

  {type:"teach", trg:"春(はる)", src:"spring", pos:"noun", gender:null,
   note:"March to May in Japan. Cherry blossom season. School year starts.\nKanji: 春.",
   example:"A: 春(はる)が好(す)きですか?\nB: はい、桜(さくら)がきれいです。",
   exampleSrc:"A: Do you like spring?\nB: Yes, the cherry blossoms are beautiful.",
   funFact:"春 originally showed the sun warming seeds underground, causing them to sprout. Haru is the most celebrated season in Japan. The school year, fiscal year, and many jobs all start in April. 'Haru ga kita' (spring has come) is a famous children's song."},

  {type:"teach", trg:"夏(なつ)", src:"summer", pos:"noun", gender:null,
   note:"June to August. Hot, humid, festival season. Rainy season (tsuyu) in June.\nKanji: 夏.",
   example:"A: 夏(なつ)に何(なに)をしますか?\nB: 海(うみ)に行(い)きます!",
   exampleSrc:"A: What do you do in summer?\nB: I go to the beach!",
   funFact:"夏 depicts a person with a large headdress, suggesting ceremonial summer dances. Japanese summers are famous for matsuri (festivals) with fireworks (hanabi, literally 'fire flowers'), yukata (casual kimono), and kakigori (shaved ice). The Bon festival honors ancestors."},

  {type:"teach", trg:"秋(あき)", src:"autumn / fall", pos:"noun", gender:null,
   note:"September to November. Fall colors, harvest, moon viewing.\nKanji: 秋.",
   example:"A: 秋(あき)の紅葉(こうよう)がきれいですね。\nB: はい、山(やま)に行(い)きたいです。",
   exampleSrc:"A: The autumn leaves are beautiful.\nB: Yes, I want to go to the mountains.",
   funFact:"秋 shows grain (禾) next to fire (火), representing drying harvested grain. Aki is the season of kouyou (fall foliage viewing), moon viewing (tsukimi), and harvest festivals. Food in autumn is said to be the best: sanma (pike mackerel), kuri (chestnuts), and sweet potatoes."},

  {type:"teach", trg:"冬(ふゆ)", src:"winter", pos:"noun", gender:null,
   note:"December to February. Cold, snow in north, New Year celebrations.\nKanji: 冬.",
   example:"A: 冬(ふゆ)にどこに行(い)きたいですか?\nB: 北海道(ほっかいどう)に行(い)きたいです。",
   exampleSrc:"A: Where do you want to go in winter?\nB: I want to go to Hokkaido.",
   funFact:"冬 depicts ice crystals forming, representing the freezing season. Winter in Japan means oshogatsu (New Year), the biggest holiday. Families eat osechi-ryouri (traditional New Year foods), visit shrines (hatsumoude), and send nengajou (New Year postcards)."},

  {type:"mc", q:"春(はる) means:", opts:["spring","autumn","winter","summer"], ans:"spring",
   hint:"The season of cherry blossoms and new beginnings in Japan."},

  {type:"teach", trg:"\u301C月(がつ)", src:"month (counter)", pos:"part", gender:null,
   note:"Attach numbers 1-12: 一月(いちがつ) (January), 二月(にがつ) (February), etc.\nIrregulars: 4 = 四月(しがつ), 7 = 七月(しちがつ), 9 = 九月(くがつ).\nKanji: 月.",
   example:"A: 誕生日(たんじょうび)は何月(なんがつ)ですか?\nB: 三月(さんがつ)です。",
   exampleSrc:"A: What month is your birthday?\nB: March.",
   funFact:"月 means both 'moon' and 'month.' Japanese months are simply numbered: ichi-gatsu (month 1 = January), ni-gatsu (month 2 = February). Until the Meiji era, Japan used poetic names: mutsuki (month of affection), kisaragi (month of changing clothes), etc."},

  {type:"teach", trg:"\u301C日(にち)", src:"day (counter)", pos:"part", gender:null,
   note:"Day of the month. Many irregular readings: 一日(ついたち) (1st), 二日(ふつか) (2nd), 三日(みっか) (3rd).\nKanji: 日.",
   example:"A: 今日(きょう)は何日(なんにち)ですか?\nB: 十五日(じゅうごにち)です。",
   exampleSrc:"A: What day of the month is it?\nB: It is the 15th.",
   funFact:"Days 1-10 use mostly native Japanese readings that must be memorized: tsuitachi (1st), futsuka (2nd), mikka (3rd), yokka (4th), itsuka (5th), muika (6th), nanoka (7th), youka (8th), kokonoka (9th), tooka (10th). After 10, it becomes regular: juu-ichi-nichi, etc."},

  {type:"fb", s:"誕生日(たんじょうび)は{1}月(がつ)ですか?\n(What month is your birthday?)", a:"何(なん)", opts:["何(なん)","一(いち)","三(さん)","七(しち)"], sSrc:"What month is your birthday?",
   hint:"The question word that replaces the number to ask 'which month?'"},

  {type:"teach", trg:"桜(さくら)", src:"cherry blossom(s)", pos:"noun", gender:null,
   note:"Japan's most beloved flower. Bloom time (mid-March to April) is tracked nationally.\nKanji: 桜.",
   example:"A: 桜(さくら)が咲(さ)いていますよ!\nB: 花見(はなみ)に行(い)きましょう!",
   exampleSrc:"A: The cherry blossoms are blooming!\nB: Let's go flower viewing!",
   funFact:"Sakura are so important that weather services broadcast a 'cherry blossom front' (sakura zensen) tracking when blossoms open from south to north. Hanami (flower viewing) picnics under cherry trees date back over 1,000 years. The blossoms last only about a week."},

  {type:"teach", trg:"花見(はなみ)", src:"cherry blossom viewing (picnic)", pos:"noun", gender:null,
   note:"Compound: hana (flower) + mi (viewing). Japan's most beloved spring tradition.\nKanji: 花見.",
   example:"A: 日曜日(にちようび)に花見(はなみ)に行(い)きませんか?\nB: いいですね! 行(い)きましょう。",
   exampleSrc:"A: Shall we go flower viewing on Sunday?\nB: Sounds great! Let's go.",
   funFact:"花 (hana, flower) + 見 (mi, viewing). Hanami involves picnicking under cherry trees with friends, family, or coworkers. People arrive early to claim spots with blue tarps. Food, drinks, and singing are common. Some companies assign junior employees to hold spots all day."},

  {type:"mc", q:"桜(さくら) means:", opts:["rain","cherry blossom","snow","autumn leaf"], ans:"cherry blossom",
   hint:"Japan's national flower whose brief blooming season is celebrated every spring."},

  {type:"teach", trg:"祭(まつ)り", src:"festival", pos:"noun", gender:null,
   note:"Traditional Japanese festivals. Thousands held across Japan yearly.\nKanji: 祭り.",
   example:"A: 夏(なつ)に祭(まつ)りがありますか?\nB: はい、たくさんありますよ!",
   exampleSrc:"A: Are there festivals in summer?\nB: Yes, there are many!",
   funFact:"Japan holds over 300,000 festivals per year. Matsuri originally meant Shinto religious ceremonies. Summer festivals (natsu-matsuri) feature mikoshi (portable shrines), taiko (drums), bon-odori (folk dancing), and yatai (food stalls) selling yakisoba, takoyaki, and kakigori."},

  {type:"teach", trg:"お正月(しょうがつ)", src:"New Year", pos:"noun", gender:null,
   note:"Japan's most important holiday (January 1-3). The o- is honorific.\nKanji: お正月.",
   example:"A: お正月(しょうがつ)に何(なに)をしますか?\nB: 初詣(はつもうで)に行(い)きます。",
   exampleSrc:"A: What do you do for New Year?\nB: I go to a shrine for the first visit.",
   funFact:"Oshogatsu is Japan's biggest holiday. Families gather, eat traditional foods (osechi-ryouri), visit shrines (hatsumoude), and watch NHK's Kouhaku music show on New Year's Eve. Children receive otoshidama (money in decorated envelopes). Most businesses close for 3 days."},

  {type:"match", pairs:[{trg:"春(はる)",src:"spring"},{trg:"夏(なつ)",src:"summer"},{trg:"秋(あき)",src:"autumn"},{trg:"冬(ふゆ)",src:"winter"}]},

  {type:"match", pairs:[{trg:"桜(さくら)",src:"cherry blossom"},{trg:"花見(はなみ)",src:"flower viewing"},{trg:"祭(まつ)り",src:"festival"},{trg:"お正月(しょうがつ)",src:"New Year"}]},

  {type:"fb", s:"{1}が咲(さ)いていますよ!\n(The cherry blossoms are blooming!)", a:"桜(さくら)", opts:["桜(さくら)","花見(はなみ)","春(はる)","祭(まつ)り"], sSrc:"The cherry blossoms are blooming!",
   hint:"Japan's iconic spring flower whose bloom is tracked nationally."},

  {type:"mc", q:"一月(いちがつ) means:", opts:["one day","Monday","January","first year"], ans:"January",
   hint:"Ichi (one) + gatsu (month) = the first month of the year."},

  {type:"mc", q:"お正月(しょうがつ) is celebrated in:", opts:["spring","summer","autumn","winter"], ans:"winter",
   hint:"This holiday falls at the very beginning of the calendar year."},

  {type:"tip", title:"Months in Japanese",
   text:"Months are simply number + 月(がつ):\n一月(いちがつ) (January), 二月(にがつ) (February)\n三月(さんがつ) (March), 四月(しがつ) (April)\n五月(ごがつ) (May), 六月(ろくがつ) (June)\n七月(しちがつ) (July), 八月(はちがつ) (August)\n九月(くがつ) (September), 十月(じゅうがつ) (October)\n十一月(じゅういちがつ) (November), 十二月(じゅうにがつ) (December)\n\nIrregular readings: 4 = し (not yon), 7 = しち (not nana), 9 = く (not kyuu).",
   deepDive:{title:"Old Japanese month names",
    text:"Before adopting numbered months, Japan used poetic names:\nむつき (January, month of harmony)\nきさらぎ (February, month of changing clothes)\nやよい (March, month of growing)\nうづき (April, deutzia flower month)\nさつき (May, rice-planting month)\nみなづき (June, month of water)\n\nThese old names still appear in literature, names, and traditional contexts. Yayoi and Satsuki are popular girls' names."}},
{type:"match",pairs:[{trg:"風(かぜ)",src:"wind"},{trg:"\u301C月(がつ)",src:"month (counter)"},{trg:"\u301C日(にち)",src:"day (counter)"}]}]},

,BATCH2_L1
,BATCH4_L01
,BATCH4_L02
,BATCH6_L1
,BATCH8_L1
,BATCH7_L1
,BATCH9_L1
,BATCH10_L1
,BATCH11_L1
]};
export default UNIT_10;
