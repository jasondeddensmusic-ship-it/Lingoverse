// Batch 11 – Unit 07 (A1.2 Time & Routine): AM/PM & Time Expressions
const BATCH11_L1 = {
  id:"jav2_u07l_b11_1", title:"午前(ごぜん)と午後(ごご)", icon:"🕰️", xp:15, board:true,
  steps:[
    {type:"intro", title:"午前(ごぜん)と午後(ごご)",
     desc:"Learn to specify morning vs afternoon times, plus essential time expressions for scheduling. These words are critical for making appointments and catching trains.",
     goals:["Use 午前(ごぜん) and 午後(ごご) to specify AM and PM","Express approximate times with ごろ and くらい","Use time-related adverbs for daily scheduling"]},

    {type:"teach", trg:"午前(ごぜん)", src:"AM / morning (time)", pos:"noun", gender:null,
     note:"Placed BEFORE the time: 午前(ごぜん)九時(くじ) = 9 AM.\nOpposite: 午後(ごご) (PM).",
     example:"A: 会議(かいぎ)は午前(ごぜん)十時(じゅうじ)からです。\nB: わかりました。",
     exampleSrc:"A: The meeting is from 10 AM.\nB: Understood.",
     funFact:"午前(ごぜん) literally means 'before noon' (午前). The 午 character means 'horse' and refers to the Horse Hour (11 AM to 1 PM) in the old Chinese zodiac timekeeping system. So 午前(ごぜん) means 'before the Horse Hour.'"},

    {type:"teach", trg:"午後(ごご)", src:"PM / afternoon (time)", pos:"noun", gender:null,
     note:"Placed BEFORE the time: 午後(ごご)三時(さんじ) = 3 PM.\nAlso used generally to mean 'afternoon.'",
     example:"A: 午後(ごご)何時(なんじ)に会(あ)いましょうか？\nB: 午後(ごご)二時(にじ)はどうですか？",
     exampleSrc:"A: What PM time shall we meet?\nB: How about 2 PM?",
     funFact:"Japanese train schedules and official documents always use 午前(ごぜん) and 午後(ごご) rather than 24-hour time in speech, though 24-hour time appears in writing. Japan's famous train punctuality means 午後(ごご)三時(さんじ)八分(はっぷん) means exactly 3:08 PM, not approximately."},

    {type:"teach", trg:"ごろ", src:"around / approximately (time)", pos:"part", gender:null,
     note:"Placed AFTER the time: 三時(さんじ)ごろ = around 3.\nMore casual than ぐらい for time.",
     example:"A: 何時(なんじ)ごろに着(つ)きますか？\nB: 五時(ごじ)ごろだと思(おも)います。",
     exampleSrc:"A: Around what time will you arrive?\nB: I think around 5.",
     funFact:"ごろ is specifically for approximate POINTS in time, while ぐらい/くらい is for approximate DURATIONS. 三時(さんじ)ごろ = around 3 o'clock (a point). 三時間(さんじかん)ぐらい = about 3 hours (a duration). Mixing them up is a common learner error."},

    {type:"teach", trg:"早(はや)い", src:"early / fast", pos:"adj", gender:null,
     note:"Two meanings: 早(はや)い (early in time) and 速(はや)い (fast in speed).\nBoth pronounced はやい.",
     example:"A: 明日(あした)は早(はや)く起(お)きてください。\nB: 何時(なんじ)に起(お)きればいいですか？",
     exampleSrc:"A: Please wake up early tomorrow.\nB: What time should I wake up?",
     funFact:"The two はやい are written with different kanji: 早(はや)い (early, with the sun radical) and 速(はや)い (fast, with the road radical). In speech they are identical, but the distinction matters in writing. 早(はや)く起(お)きる = wake up early. 速(はや)く走(はし)る = run fast."},

    {type:"teach", trg:"遅(おそ)い", src:"late / slow", pos:"adj", gender:null,
     note:"Two meanings: 遅(おそ)い (late in time) and 遅(おそ)い (slow in speed).\n遅(おそ)くなってすみません = sorry for being late.",
     example:"A: 遅(おそ)くなってすみません。\nB: 大丈夫(だいじょうぶ)ですよ。",
     exampleSrc:"A: Sorry for being late.\nB: It is okay.",
     funFact:"遅(おそ)い is the opposite of both meanings of 早(はや)い. Being late (遅刻(ちこく)) is considered very rude in Japan. Trains that arrive even one minute late issue formal apology announcements. Japanese punctuality is famous worldwide."},

    {type:"teach", trg:"前(まえ)", src:"before / in front of", pos:"noun", gender:null,
     note:"Time: 五時(ごじ)前(まえ) = before 5. Space: 駅(えき)の前(まえ) = in front of the station.\nDual meaning word.",
     example:"A: 午前(ごぜん)十時(じゅうじ)前(まえ)に来(き)てください。\nB: はい、九時(くじ)に行(い)きます。",
     exampleSrc:"A: Please come before 10 AM.\nB: Yes, I will go at 9.",
     funFact:"前(まえ) works for both time and space, which confuses English speakers since 'before' (time) and 'in front of' (space) feel unrelated. In Japanese, both concepts share the idea of 'what comes first.' The past is also 前(まえ): 前(まえ)に = previously."},

    {type:"teach", trg:"後(あと)", src:"after / later", pos:"noun", gender:null,
     note:"Time: 五時(ごじ)の後(あと) = after 5. 後(あと)で = later.\nCount: 後(あと)三人(さんにん) = three more people.",
     example:"A: 十分(じゅっぷん)後(あと)に出(で)ます。\nB: わかりました、待(ま)っています。",
     exampleSrc:"A: I will leave in ten minutes.\nB: Understood, I will wait.",
     funFact:"後(あと) is versatile: 後(あと)で (later), 後(あと)二時間(にじかん) (two more hours), 後(あと)少(すこ)し (a little more). It can express remaining quantity, future time, or sequence. The kanji 後 also appears in 午後(ごご) (afternoon) and 後(うし)ろ (behind)."},

    {type:"teach", trg:"間(あいだ)", src:"between / during", pos:"noun", gender:null,
     note:"Space: AとBの間(あいだ) = between A and B.\nTime: 夏休(なつやす)みの間(あいだ) = during summer vacation.",
     example:"A: 駅(えき)と学校(がっこう)の間(あいだ)に公園(こうえん)があります。\nB: そこで遊(あそ)びましょう。",
     exampleSrc:"A: There is a park between the station and school.\nB: Let's play there.",
     funFact:"間(あいだ) (間) covers what English splits into 'between,' 'during,' and 'while.' 日本(にほん)にいる間(あいだ) = while in Japan. Japanese efficiently uses one word where English needs three context-dependent words."},

    {type:"teach", trg:"すぐ", src:"immediately / right away", pos:"adv", gender:null,
     note:"Very common time adverb. すぐに = right away.\nすぐそこ = right there (very close).",
     example:"A: いつできますか？\nB: すぐできます。五分(ごふん)待(ま)ってください。",
     exampleSrc:"A: When will it be ready?\nB: Right away. Please wait five minutes.",
     funFact:"すぐ is one of the most useful daily words. すぐ行(い)きます (I'm coming right away), すぐ終(お)わります (It will end soon), すぐわかります (You'll understand immediately). The spatial use すぐそこ (right there) shows how Japanese time and space words overlap."},

    {type:"teach", trg:"いつも", src:"always", pos:"adv", gender:null,
     note:"Frequency adverb. Placed before the verb.\nOpposite: ぜんぜん (never, with negative).",
     example:"A: 朝(あさ)ごはんはいつもなにを食(た)べますか？\nB: いつもパンを食(た)べます。",
     exampleSrc:"A: What do you always eat for breakfast?\nB: I always eat bread.",
     funFact:"The frequency adverb scale in Japanese: いつも (always) > たいてい (usually) > よく (often) > ときどき (sometimes) > あまり + neg (not often) > ぜんぜん + neg (never). These words are essential for JLPT N5 and daily conversation."},

    {type:"teach", trg:"ときどき", src:"sometimes", pos:"adv", gender:null,
     note:"Moderate frequency. Written 時々(ときどき).\nPlaced before the verb or at the start of a sentence.",
     example:"A: 日本(にほん)料理(りょうり)を作(つく)りますか？\nB: ときどき作(つく)ります。",
     exampleSrc:"A: Do you cook Japanese food?\nB: I sometimes cook it.",
     funFact:"ときどき uses the kanji 時(とき) (time) repeated with the special repetition mark 々. This mark (called のま or おどりじ) is used throughout Japanese to repeat kanji: 人々(ひとびと) (people), 色々(いろいろ) (various), 日々(ひび) (daily)."},

    // Quiz steps
    {type:"mc", q:"午後(ごご)三時(さんじ)は何時(なんじ)ですか？",
     opts:["3 PM","3 AM","Noon","Midnight"],
     ans:"3 PM",
     hint:"午後(ごご) means 'after noon' or PM. It is placed before the time to indicate afternoon hours."},

    {type:"fb", s:"三時(さんじ){1}に会(あ)いましょう。",
     a:["ごろ"],
     opts:["ごろ","前(まえ)","後(あと)","すぐ"],
     hint:"You are suggesting meeting at approximately 3 o'clock. This particle indicates an approximate point in time.",
     sSrc:"Let's meet around 3 o'clock."},

    {type:"match", pairs:[
      {trg:"早(はや)い", src:"early / fast"},
      {trg:"遅(おそ)い", src:"late / slow"},
      {trg:"すぐ", src:"immediately"},
      {trg:"いつも", src:"always"}
    ]},

    {type:"mc", q:"「ごろ」と「ぐらい」はどう違(ちが)いますか？",
     opts:["ぐらい is for time, ごろ is for quantity","ごろ for time points, ぐらい for durations","They are the same","ごろ is more formal"],
     ans:"ごろ for time points, ぐらい for durations",
     hint:"Think about 'around 3 o'clock' (a point) vs 'about 3 hours' (a duration). Each has its own word."},

    {type:"fb", s:"遅(おそ)くなって{1}。",
     a:["すみません"],
     opts:["すみません","ありがとう","おねがいします","こんにちは"],
     hint:"You are apologizing for being late. This is the standard apology phrase in Japanese.",
     sSrc:"Sorry for being late."},

    {type:"mc", q:"日本語(にほんご)の頻度(ひんど)のことばをじゅんばんにならべたら？",
     opts:["ぜんぜん > ときどき > よく > いつも","よく > いつも > ときどき > ぜんぜん","いつも > よく > ときどき > ぜんぜん","ときどき > いつも > よく > ぜんぜん"],
     ans:"いつも > よく > ときどき > ぜんぜん",
     hint:"Order from most frequent to least frequent: always, often, sometimes, never."}
  ,{type:"match",pairs:[{trg:"午前(ごぜん)",src:"AM / morning (time)"},{trg:"午後(ごご)",src:"PM / afternoon (time)"},{trg:"前(まえ)",src:"before / in front of"},{trg:"後(あと)",src:"after / later"},{trg:"間(あいだ)",src:"between / during"}]}]
};
export default BATCH11_L1;
