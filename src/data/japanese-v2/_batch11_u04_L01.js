// Batch 11 – Unit 04 (A1.1 How Much?): Numbers 11-99 & Counting
const BATCH11_L1 = {
  id:"jav2_u04l_b11_1", title:"十一(じゅういち)から九十九(きゅうじゅうきゅう)", icon:"🔢", xp:15, board:true,
  steps:[
    {type:"intro", title:"十一(じゅういち)から九十九(きゅうじゅうきゅう)",
     desc:"Expand your number range from 11 to 99. Japanese numbers follow a logical system: tens are made by multiplying, and units are added on.",
     goals:["Count from 11 to 99 in Japanese","Understand the tens + units pattern","Use larger numbers in shopping and daily life"]},

    {type:"teach", trg:"十一(じゅういち)", src:"eleven", pos:"num", gender:null,
     note:"10 + 1 = 十(じゅう) + 一(いち). All teens follow this pattern.\n十二(じゅうに) = 12, 十三(じゅうさん) = 13.",
     example:"A: 何歳(なんさい)ですか？\nB: 十一歳(じゅういちさい)です。",
     exampleSrc:"A: How old are you?\nB: I am eleven years old.",
     funFact:"Japanese numbers are incredibly logical compared to English. There is no special word for 'eleven' or 'twelve.' It is simply 10+1 and 10+2. This makes learning numbers past 10 much easier than in European languages."},

    {type:"teach", trg:"二十(にじゅう)", src:"twenty", pos:"num", gender:null,
     note:"2 x 10 = 二(に) + 十(じゅう). Pattern: number + 十(じゅう) = tens.\n三十(さんじゅう) = 30, 四十(よんじゅう) = 40.",
     example:"A: この本(ほん)は二十(にじゅう)ページです。\nB: 短(みじか)いですね。",
     exampleSrc:"A: This book is twenty pages.\nB: That is short.",
     funFact:"The tens pattern is perfectly regular: 二十(にじゅう) (20), 三十(さんじゅう) (30), 四十(よんじゅう) (40), 五十(ごじゅう) (50). Unlike English, there are no irregular forms like 'twenty' or 'thirty.' Math teachers love Japanese numbers for their transparency."},

    {type:"teach", trg:"三十五(さんじゅうご)", src:"thirty-five", pos:"num", gender:null,
     note:"3 x 10 + 5 = 三十(さんじゅう) + 五(ご). Any two-digit number follows this pattern.",
     example:"A: 今日(きょう)の気温(きおん)は三十五度(さんじゅうごど)です。\nB: 暑(あつ)いですね！",
     exampleSrc:"A: Today's temperature is 35 degrees.\nB: It is hot!",
     funFact:"Combining tens and units is straightforward: 三十五(さんじゅうご) = 35, 四十八(よんじゅうはち) = 48, 六十二(ろくじゅうに) = 62. The system is so logical that Japanese children can count to 99 as soon as they learn the numbers 1 through 10."},

    {type:"teach", trg:"四十(よんじゅう)", src:"forty", pos:"num", gender:null,
     note:"Uses よん (not し) for 40. し is avoided because it sounds like 死 (death).\n四十一(よんじゅういち) = 41.",
     example:"A: 四十人(よんじゅうにん)の学生(がくせい)がいます。\nB: 多(おお)いクラスですね。",
     exampleSrc:"A: There are forty students.\nB: That is a big class.",
     funFact:"The number 4 has two readings: し and よん. し is avoided because it sounds like 死 (death). Hotels often skip room 4, and hospitals avoid floor 4. For decades, よん has been the preferred reading, especially in compound numbers."},

    {type:"teach", trg:"五十(ごじゅう)", src:"fifty", pos:"num", gender:null,
     note:"5 x 10. 五十(ごじゅう) is also the name of a famous number game.\n五十三(ごじゅうさん) = 53.",
     example:"A: 五十円(ごじゅうえん)だまをもっていますか？\nB: はい、ここにあります。",
     exampleSrc:"A: Do you have a fifty-yen coin?\nB: Yes, here it is.",
     funFact:"The 五十円(ごじゅうえん) (50-yen) coin has a hole in the center, just like the 五円(ごえん) (5-yen) coin. The 5-yen coin is considered lucky because 五円(ごえん) sounds like ご縁(えん) (good connection/fate). Visitors throw 5-yen coins into shrine offering boxes for good luck."},

    {type:"teach", trg:"七十(ななじゅう)", src:"seventy", pos:"num", gender:null,
     note:"Uses なな (not しち) for 70 to avoid confusion with し (4/death).\n七十二(ななじゅうに) = 72.",
     example:"A: おばあちゃんは七十歳(ななじゅうさい)です。\nB: お元気(げんき)ですね！",
     exampleSrc:"A: Grandmother is seventy years old.\nB: She is healthy!",
     funFact:"Like 4, the number 7 has two readings: しち and なな. なな is preferred in most counting because しち sounds too close to し (4/death) and いち (1). However, しち survives in 七月(しちがつ) (July) and 七五三(しちごさん) (the 7-5-3 children's festival)."},

    {type:"teach", trg:"九十九(きゅうじゅうきゅう)", src:"ninety-nine", pos:"num", gender:null,
     note:"9 x 10 + 9. The highest two-digit number.\n百(ひゃく) (100) comes next.",
     example:"A: 熱(ねつ)が九十九度(きゅうじゅうきゅうど)あります。\nB: 病院(びょういん)に行(い)きましょう！",
     exampleSrc:"A: The fever is 99 degrees (37.2 C).\nB: Let's go to the hospital!",
     funFact:"九十九(きゅうじゅうきゅう) sounds poetic in Japanese and appears in many songs and stories. The number 99 also has cultural significance: the 99 temples of the Shikoku pilgrimage (四国八十八 is 88, but the spirit is similar) represent a journey of perseverance."},

    {type:"teach", trg:"百(ひゃく)", src:"one hundred", pos:"num", gender:null,
     note:"The word for 100. いち百(ひゃく) is wrong, just 百(ひゃく).\n二百(にひゃく) = 200, 三百(さんびゃく) = 300.",
     example:"A: このペンは百円(ひゃくえん)です。\nB: 安(やす)いですね！",
     exampleSrc:"A: This pen is 100 yen.\nB: That is cheap!",
     funFact:"百円(ひゃくえん)ショップ (100-yen shops) like Daiso and Seria are cultural institutions in Japan. They sell everything from kitchen tools to stationery. 100 yen is roughly equivalent to 0.70 USD, making these shops a budget-friendly treasure hunt."},

    {type:"teach", trg:"千(せん)", src:"one thousand", pos:"num", gender:null,
     note:"1,000. いっ千(せん) for emphasis. 二千(にせん) = 2,000, 三千(さんぜん) = 3,000.\nNote: 3,000 is 三千(さんぜん) (voiced).",
     example:"A: このかばんは五千円(ごせんえん)です。\nB: ちょうどいいですね。",
     exampleSrc:"A: This bag is 5,000 yen.\nB: That is just right.",
     funFact:"Japanese counts in units of 10,000 (万(まん)), not 1,000 like English. So 100,000 is 十万(じゅうまん) (10 x 10,000), not 百千(ひゃくせん). This difference makes large number translation tricky. 二千円(にせんえん)さつ (2,000-yen bill) exists but is rare and often refused by vending machines."},

    {type:"teach", trg:"万(まん)", src:"ten thousand", pos:"num", gender:null,
     note:"10,000. 一万(いちまん) = 10,000. 十万(じゅうまん) = 100,000.\nThe key unit in Japanese counting.",
     example:"A: 一万円(いちまんえん)さつでおねがいします。\nB: おつりは五千円(ごせんえん)です。",
     exampleSrc:"A: With a 10,000-yen bill, please.\nB: Your change is 5,000 yen.",
     funFact:"The 万(まん) (10,000) unit is fundamental to Japanese. Annual salaries are stated in 万円(まんえん): 五百万(ごひゃくまん)円(えん) = 5,000,000 yen. The 一万円(いちまんえん)さつ features Shibusawa Eiichi (since 2024), replacing Fukuzawa Yukichi who appeared on the bill since 1984."},

    {type:"tip", title:"Number Sound Changes",
     text:"Some numbers change pronunciation when combined:\n\n300 = 三百(さんびゃく) (not さんひゃく)\n600 = 六百(ろっぴゃく) (not ろくひゃく)\n800 = 八百(はっぴゃく) (not はちひゃく)\n3,000 = 三千(さんぜん) (not さんせん)\n8,000 = 八千(はっせん) (not はちせん)\n\nThese sound changes (連濁 rendaku) make the numbers easier to say quickly.",
     deepDive:{title:"Why sound changes happen",
      text:"These shifts are called rendaku (sequential voicing). When certain numbers combine with 百(ひゃく) or 千(せん), the initial consonant voices or doubles for easier pronunciation. The numbers 3, 6, and 8 are the main triggers. This is a natural phonological process, not random exceptions."}},

    // Quiz steps
    {type:"mc", q:"47は日本語(にほんご)でなんですか？",
     opts:["四十七(よんじゅうなな)","しじゅうなな","四十七(よんじゅうしち)","しじゅうしち"],
     ans:"四十七(よんじゅうなな)",
     hint:"For 40, use よん (not し) to avoid the death association. For 7, なな is the standard modern reading."},

    {type:"fb", s:"このペンは{1}円(えん)です。",
     a:["百(ひゃく)"],
     opts:["百(ひゃく)","いち百(ひゃく)","千(せん)","十(じゅう)"],
     hint:"100 yen. The word for 100 does not need いち in front of it, unlike 二百(にひゃく) (200).",
     sSrc:"This pen is {1} yen."},

    {type:"match", pairs:[
      {trg:"二十(にじゅう)", src:"20"},
      {trg:"五十(ごじゅう)", src:"50"},
      {trg:"七十(ななじゅう)", src:"70"},
      {trg:"九十(きゅうじゅう)", src:"90"}
    ]},

    {type:"mc", q:"「三百(さんびゃく)」はいくつですか？",
     opts:["300","3,000","30","3"],
     ans:"300",
     hint:"百(ひゃく) means 100. When combined with 三(さん) (3), the ひ becomes び due to sound changes."},

    {type:"fb", s:"一{1}円(えん)さつでおねがいします。",
     a:["万(まん)"],
     opts:["万(まん)","千(せん)","百(ひゃく)","十(じゅう)"],
     hint:"This is the 10,000-yen bill, the largest denomination in everyday use.",
     sSrc:"With a ten-thousand-yen bill, please."}
  ]
};
export default BATCH11_L1;
