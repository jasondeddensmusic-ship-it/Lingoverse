// Batch 11 – Unit 04 (A1.1 How Much?): Numbers 11-99 & Counting
const BATCH11_L1 = {
  id:"jav2_u04l_b11_1", title:"じゅういちからきゅうじゅうきゅう", icon:"🔢", xp:15, board:true,
  steps:[
    {type:"intro", title:"じゅういちからきゅうじゅうきゅう",
     desc:"Expand your number range from 11 to 99. Japanese numbers follow a logical system: tens are made by multiplying, and units are added on.",
     goals:["Count from 11 to 99 in Japanese","Understand the tens + units pattern","Use larger numbers in shopping and daily life"]},

    {type:"teach", trg:"じゅういち", src:"eleven", pos:"num", gender:null,
     note:"10 + 1 = じゅう + いち. All teens follow this pattern.\nじゅうに = 12, じゅうさん = 13.",
     example:"A: なんさいですか？\nB: じゅういちさいです。",
     exampleSrc:"A: How old are you?\nB: I am eleven years old.",
     funFact:"Japanese numbers are incredibly logical compared to English. There is no special word for 'eleven' or 'twelve.' It is simply 10+1 and 10+2. This makes learning numbers past 10 much easier than in European languages."},

    {type:"teach", trg:"にじゅう", src:"twenty", pos:"num", gender:null,
     note:"2 x 10 = に + じゅう. Pattern: number + じゅう = tens.\nさんじゅう = 30, よんじゅう = 40.",
     example:"A: このほんはにじゅうページです。\nB: みじかいですね。",
     exampleSrc:"A: This book is twenty pages.\nB: That is short.",
     funFact:"The tens pattern is perfectly regular: にじゅう (20), さんじゅう (30), よんじゅう (40), ごじゅう (50). Unlike English, there are no irregular forms like 'twenty' or 'thirty.' Math teachers love Japanese numbers for their transparency."},

    {type:"teach", trg:"さんじゅうご", src:"thirty-five", pos:"num", gender:null,
     note:"3 x 10 + 5 = さんじゅう + ご. Any two-digit number follows this pattern.",
     example:"A: きょうのきおんはさんじゅうごどです。\nB: あついですね！",
     exampleSrc:"A: Today's temperature is 35 degrees.\nB: It is hot!",
     funFact:"Combining tens and units is straightforward: さんじゅうご = 35, よんじゅうはち = 48, ろくじゅうに = 62. The system is so logical that Japanese children can count to 99 as soon as they learn the numbers 1 through 10."},

    {type:"teach", trg:"よんじゅう", src:"forty", pos:"num", gender:null,
     note:"Uses よん (not し) for 40. し is avoided because it sounds like 死 (death).\nよんじゅういち = 41.",
     example:"A: よんじゅうにんのがくせいがいます。\nB: おおいクラスですね。",
     exampleSrc:"A: There are forty students.\nB: That is a big class.",
     funFact:"The number 4 has two readings: し and よん. し is avoided because it sounds like 死 (death). Hotels often skip room 4, and hospitals avoid floor 4. For decades, よん has been the preferred reading, especially in compound numbers."},

    {type:"teach", trg:"ごじゅう", src:"fifty", pos:"num", gender:null,
     note:"5 x 10. ごじゅう is also the name of a famous number game.\nごじゅうさん = 53.",
     example:"A: ごじゅうえんだまをもっていますか？\nB: はい、ここにあります。",
     exampleSrc:"A: Do you have a fifty-yen coin?\nB: Yes, here it is.",
     funFact:"The ごじゅうえん (50-yen) coin has a hole in the center, just like the ごえん (5-yen) coin. The 5-yen coin is considered lucky because ごえん sounds like ごえん (good connection/fate). Visitors throw 5-yen coins into shrine offering boxes for good luck."},

    {type:"teach", trg:"ななじゅう", src:"seventy", pos:"num", gender:null,
     note:"Uses なな (not しち) for 70 to avoid confusion with し (4/death).\nななじゅうに = 72.",
     example:"A: おばあちゃんはななじゅうさいです。\nB: おげんきですね！",
     exampleSrc:"A: Grandmother is seventy years old.\nB: She is healthy!",
     funFact:"Like 4, the number 7 has two readings: しち and なな. なな is preferred in most counting because しち sounds too close to し (4/death) and いち (1). However, しち survives in しちがつ (July) and しちごさん (the 7-5-3 children's festival)."},

    {type:"teach", trg:"きゅうじゅうきゅう", src:"ninety-nine", pos:"num", gender:null,
     note:"9 x 10 + 9. The highest two-digit number.\nひゃく (100) comes next.",
     example:"A: ねつがきゅうじゅうきゅうどあります。\nB: びょういんにいきましょう！",
     exampleSrc:"A: The fever is 99 degrees (37.2 C).\nB: Let's go to the hospital!",
     funFact:"きゅうじゅうきゅう sounds poetic in Japanese and appears in many songs and stories. The number 99 also has cultural significance: the 99 temples of the Shikoku pilgrimage (四国八十八 is 88, but the spirit is similar) represent a journey of perseverance."},

    {type:"teach", trg:"ひゃく", src:"one hundred", pos:"num", gender:null,
     note:"The word for 100. いちひゃく is wrong, just ひゃく.\nにひゃく = 200, さんびゃく = 300.",
     example:"A: このペンはひゃくえんです。\nB: やすいですね！",
     exampleSrc:"A: This pen is 100 yen.\nB: That is cheap!",
     funFact:"ひゃくえんショップ (100-yen shops) like Daiso and Seria are cultural institutions in Japan. They sell everything from kitchen tools to stationery. 100 yen is roughly equivalent to 0.70 USD, making these shops a budget-friendly treasure hunt."},

    {type:"teach", trg:"せん", src:"one thousand", pos:"num", gender:null,
     note:"1,000. いっせん for emphasis. にせん = 2,000, さんぜん = 3,000.\nNote: 3,000 is さんぜん (voiced).",
     example:"A: このかばんはごせんえんです。\nB: ちょうどいいですね。",
     exampleSrc:"A: This bag is 5,000 yen.\nB: That is just right.",
     funFact:"Japanese counts in units of 10,000 (まん), not 1,000 like English. So 100,000 is じゅうまん (10 x 10,000), not ひゃくせん. This difference makes large number translation tricky. にせんえんさつ (2,000-yen bill) exists but is rare and often refused by vending machines."},

    {type:"teach", trg:"まん", src:"ten thousand", pos:"num", gender:null,
     note:"10,000. いちまん = 10,000. じゅうまん = 100,000.\nThe key unit in Japanese counting.",
     example:"A: いちまんえんさつでおねがいします。\nB: おつりはごせんえんです。",
     exampleSrc:"A: With a 10,000-yen bill, please.\nB: Your change is 5,000 yen.",
     funFact:"The まん (10,000) unit is fundamental to Japanese. Annual salaries are stated in まんえん: ごひゃくまんえん = 5,000,000 yen. The いちまんえんさつ features Shibusawa Eiichi (since 2024), replacing Fukuzawa Yukichi who appeared on the bill since 1984."},

    {type:"tip", title:"Number Sound Changes",
     text:"Some numbers change pronunciation when combined:\n\n300 = さんびゃく (not さんひゃく)\n600 = ろっぴゃく (not ろくひゃく)\n800 = はっぴゃく (not はちひゃく)\n3,000 = さんぜん (not さんせん)\n8,000 = はっせん (not はちせん)\n\nThese sound changes (連濁 rendaku) make the numbers easier to say quickly.",
     deepDive:{title:"Why sound changes happen",
      text:"These shifts are called rendaku (sequential voicing). When certain numbers combine with ひゃく or せん, the initial consonant voices or doubles for easier pronunciation. The numbers 3, 6, and 8 are the main triggers. This is a natural phonological process, not random exceptions."}},

    // Quiz steps
    {type:"mc", q:"47はにほんごでなんですか？",
     opts:["よんじゅうなな","しじゅうなな","よんじゅうしち","しじゅうしち"],
     ans:"よんじゅうなな",
     hint:"For 40, use よん (not し) to avoid the death association. For 7, なな is the standard modern reading."},

    {type:"fb", s:"このペンは{1}えんです。",
     a:["ひゃく"],
     opts:["ひゃく","いちひゃく","せん","じゅう"],
     hint:"100 yen. The word for 100 does not need いち in front of it, unlike にひゃく (200).",
     sSrc:"This pen is {1} yen."},

    {type:"match", pairs:[
      {trg:"にじゅう", src:"20"},
      {trg:"ごじゅう", src:"50"},
      {trg:"ななじゅう", src:"70"},
      {trg:"きゅうじゅう", src:"90"}
    ]},

    {type:"mc", q:"「さんびゃく」はいくつですか？",
     opts:["300","3,000","30","3"],
     ans:"300",
     hint:"ひゃく means 100. When combined with さん (3), the ひ becomes び due to sound changes."},

    {type:"fb", s:"いち{1}えんさつでおねがいします。",
     a:["まん"],
     opts:["まん","せん","ひゃく","じゅう"],
     hint:"This is the 10,000-yen bill, the largest denomination in everyday use.",
     sSrc:"With a ten-thousand-yen bill, please."}
  ]
};
export default BATCH11_L1;
