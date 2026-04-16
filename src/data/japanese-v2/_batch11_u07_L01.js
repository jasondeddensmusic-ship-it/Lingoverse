// Batch 11 – Unit 07 (A1.2 Time & Routine): AM/PM & Time Expressions
const BATCH11_L1 = {
  id:"jav2_u07l_b11_1", title:"ごぜんとごご", icon:"🕰️", xp:15, board:true,
  steps:[
    {type:"intro", title:"ごぜんとごご",
     desc:"Learn to specify morning vs afternoon times, plus essential time expressions for scheduling. These words are critical for making appointments and catching trains.",
     goals:["Use ごぜん and ごご to specify AM and PM","Express approximate times with ごろ and くらい","Use time-related adverbs for daily scheduling"]},

    {type:"teach", trg:"ごぜん", src:"AM / morning (time)", pos:"noun", gender:null,
     note:"Placed BEFORE the time: ごぜんくじ = 9 AM.\nOpposite: ごご (PM).",
     example:"A: かいぎはごぜんじゅうじからです。\nB: わかりました。",
     exampleSrc:"A: The meeting is from 10 AM.\nB: Understood.",
     funFact:"ごぜん literally means 'before noon' (午前). The 午 character means 'horse' and refers to the Horse Hour (11 AM to 1 PM) in the old Chinese zodiac timekeeping system. So ごぜん means 'before the Horse Hour.'"},

    {type:"teach", trg:"ごご", src:"PM / afternoon (time)", pos:"noun", gender:null,
     note:"Placed BEFORE the time: ごごさんじ = 3 PM.\nAlso used generally to mean 'afternoon.'",
     example:"A: ごごなんじにあいましょうか？\nB: ごごにじはどうですか？",
     exampleSrc:"A: What PM time shall we meet?\nB: How about 2 PM?",
     funFact:"Japanese train schedules and official documents always use ごぜん and ごご rather than 24-hour time in speech, though 24-hour time appears in writing. Japan's famous train punctuality means ごごさんじはっぷん means exactly 3:08 PM, not approximately."},

    {type:"teach", trg:"ごろ", src:"around / approximately (time)", pos:"part", gender:null,
     note:"Placed AFTER the time: さんじごろ = around 3.\nMore casual than ぐらい for time.",
     example:"A: なんじごろにつきますか？\nB: ごじごろだとおもいます。",
     exampleSrc:"A: Around what time will you arrive?\nB: I think around 5.",
     funFact:"ごろ is specifically for approximate POINTS in time, while ぐらい/くらい is for approximate DURATIONS. さんじごろ = around 3 o'clock (a point). さんじかんぐらい = about 3 hours (a duration). Mixing them up is a common learner error."},

    {type:"teach", trg:"はやい", src:"early / fast", pos:"adj", gender:null,
     note:"Two meanings: 早い (early in time) and 速い (fast in speed).\nBoth pronounced はやい.",
     example:"A: あしたははやくおきてください。\nB: なんじにおきればいいですか？",
     exampleSrc:"A: Please wake up early tomorrow.\nB: What time should I wake up?",
     funFact:"The two はやい are written with different kanji: 早い (early, with the sun radical) and 速い (fast, with the road radical). In speech they are identical, but the distinction matters in writing. はやくおきる = wake up early. はやくはしる = run fast."},

    {type:"teach", trg:"おそい", src:"late / slow", pos:"adj", gender:null,
     note:"Two meanings: 遅い (late in time) and 遅い (slow in speed).\nおそくなってすみません = sorry for being late.",
     example:"A: おそくなってすみません。\nB: だいじょうぶですよ。",
     exampleSrc:"A: Sorry for being late.\nB: It is okay.",
     funFact:"おそい is the opposite of both meanings of はやい. Being late (ちこく) is considered very rude in Japan. Trains that arrive even one minute late issue formal apology announcements. Japanese punctuality is famous worldwide."},

    {type:"teach", trg:"まえ", src:"before / in front of", pos:"noun", gender:null,
     note:"Time: ごじまえ = before 5. Space: えきのまえ = in front of the station.\nDual meaning word.",
     example:"A: ごぜんじゅうじまえにきてください。\nB: はい、くじにいきます。",
     exampleSrc:"A: Please come before 10 AM.\nB: Yes, I will go at 9.",
     funFact:"まえ works for both time and space, which confuses English speakers since 'before' (time) and 'in front of' (space) feel unrelated. In Japanese, both concepts share the idea of 'what comes first.' The past is also まえ: まえに = previously."},

    {type:"teach", trg:"あと", src:"after / later", pos:"noun", gender:null,
     note:"Time: ごじのあと = after 5. あとで = later.\nCount: あとさんにん = three more people.",
     example:"A: じゅっぷんあとにでます。\nB: わかりました、まっています。",
     exampleSrc:"A: I will leave in ten minutes.\nB: Understood, I will wait.",
     funFact:"あと is versatile: あとで (later), あとにじかん (two more hours), あとすこし (a little more). It can express remaining quantity, future time, or sequence. The kanji 後 also appears in ごご (afternoon) and うしろ (behind)."},

    {type:"teach", trg:"あいだ", src:"between / during", pos:"noun", gender:null,
     note:"Space: AとBのあいだ = between A and B.\nTime: なつやすみのあいだ = during summer vacation.",
     example:"A: えきとがっこうのあいだにこうえんがあります。\nB: そこであそびましょう。",
     exampleSrc:"A: There is a park between the station and school.\nB: Let's play there.",
     funFact:"あいだ (間) covers what English splits into 'between,' 'during,' and 'while.' にほんにいるあいだ = while in Japan. Japanese efficiently uses one word where English needs three context-dependent words."},

    {type:"teach", trg:"すぐ", src:"immediately / right away", pos:"adv", gender:null,
     note:"Very common time adverb. すぐに = right away.\nすぐそこ = right there (very close).",
     example:"A: いつできますか？\nB: すぐできます。ごふんまってください。",
     exampleSrc:"A: When will it be ready?\nB: Right away. Please wait five minutes.",
     funFact:"すぐ is one of the most useful daily words. すぐいきます (I'm coming right away), すぐおわります (It will end soon), すぐわかります (You'll understand immediately). The spatial use すぐそこ (right there) shows how Japanese time and space words overlap."},

    {type:"teach", trg:"いつも", src:"always", pos:"adv", gender:null,
     note:"Frequency adverb. Placed before the verb.\nOpposite: ぜんぜん (never, with negative).",
     example:"A: あさごはんはいつもなにをたべますか？\nB: いつもパンをたべます。",
     exampleSrc:"A: What do you always eat for breakfast?\nB: I always eat bread.",
     funFact:"The frequency adverb scale in Japanese: いつも (always) > たいてい (usually) > よく (often) > ときどき (sometimes) > あまり + neg (not often) > ぜんぜん + neg (never). These words are essential for JLPT N5 and daily conversation."},

    {type:"teach", trg:"ときどき", src:"sometimes", pos:"adv", gender:null,
     note:"Moderate frequency. Written 時々.\nPlaced before the verb or at the start of a sentence.",
     example:"A: にほんりょうりをつくりますか？\nB: ときどきつくります。",
     exampleSrc:"A: Do you cook Japanese food?\nB: I sometimes cook it.",
     funFact:"ときどき uses the kanji 時 (time) repeated with the special repetition mark 々. This mark (called のま or おどりじ) is used throughout Japanese to repeat kanji: 人々 (hitobito, people), 色々 (iroiro, various), 日々 (hibi, daily)."},

    // Quiz steps
    {type:"mc", q:"ごごさんじはなんじですか？",
     opts:["3 PM","3 AM","Noon","Midnight"],
     ans:"3 PM",
     hint:"ごご means 'after noon' or PM. It is placed before the time to indicate afternoon hours."},

    {type:"fb", s:"さんじ{1}にあいましょう。",
     a:["ごろ"],
     opts:["ごろ","まえ","あと","すぐ"],
     hint:"You are suggesting meeting at approximately 3 o'clock. This particle indicates an approximate point in time.",
     sSrc:"Let's meet around 3 o'clock."},

    {type:"match", pairs:[
      {trg:"はやい", src:"early / fast"},
      {trg:"おそい", src:"late / slow"},
      {trg:"すぐ", src:"immediately"},
      {trg:"いつも", src:"always"}
    ]},

    {type:"mc", q:"「ごろ」と「ぐらい」はどうちがいますか？",
     opts:["ごろ for time points, ぐらい for durations","They are the same","ごろ is more formal","ぐらい is for time, ごろ is for quantity"],
     ans:"ごろ for time points, ぐらい for durations",
     hint:"Think about 'around 3 o'clock' (a point) vs 'about 3 hours' (a duration). Each has its own word."},

    {type:"fb", s:"おそくなって{1}。",
     a:["すみません"],
     opts:["すみません","ありがとう","おねがいします","こんにちは"],
     hint:"You are apologizing for being late. This is the standard apology phrase in Japanese.",
     sSrc:"Sorry for being late."},

    {type:"mc", q:"にほんごのひんどのことばをじゅんばんにならべたら？",
     opts:["いつも > よく > ときどき > ぜんぜん","ときどき > いつも > よく > ぜんぜん","ぜんぜん > ときどき > よく > いつも","よく > いつも > ときどき > ぜんぜん"],
     ans:"いつも > よく > ときどき > ぜんぜん",
     hint:"Order from most frequent to least frequent: always, often, sometimes, never."}
  ]
};
export default BATCH11_L1;
