// Batch 9 – Unit 07 (A2.1 Time): Time Expressions & Frequency
const BATCH9_L1 = {
  id:"jav2_u07l_b9_1", title:"ひんど", icon:"🔄", xp:15, board:true,
  steps:[
    {type:"intro", title:"ひんど",
     desc:"Learn frequency and duration expressions essential for describing daily routines and habits in Japanese.",
     goals:["Express how often you do things","Talk about duration of activities","Use time-related adverbs naturally"]},

    {type:"teach", trg:"ときどき", src:"sometimes", pos:"adv", gender:null,
     note:"Moderate frequency. Between いつも and たまに.\nときどきあめがふります = It rains sometimes.",
     example:"A: にほんりょうりをつくりますか？\nB: ときどきつくります。",
     exampleSrc:"A: Do you make Japanese food?\nB: I sometimes make it.",
     funFact:"ときどき (時々) uses the same kanji twice, meaning 'time time.' This reduplication pattern is common in Japanese: ひとびと (people), やまやま (mountains), etc. ときどき suggests about once a week or a few times a month."},

    {type:"teach", trg:"たまに", src:"occasionally / rarely", pos:"adv", gender:null,
     note:"Less frequent than ときどき.\nたまにはいいでしょう = Once in a while is okay.",
     example:"A: えいがをみますか？\nB: たまにみます。",
     exampleSrc:"A: Do you watch movies?\nB: I watch them occasionally.",
     funFact:"たまに suggests something happens infrequently, perhaps once a month or less. The expression たまには is used when suggesting doing something unusual: たまにはそとでたべましょう (let's eat out for a change). It carries a nuance of pleasant rarity."},

    {type:"teach", trg:"めったに〜ない", src:"seldom / hardly ever", pos:"adv", gender:null,
     note:"Always used with negative verb.\nめったにおくれない = seldom late.",
     example:"A: さけをのみますか？\nB: めったにのみません。",
     exampleSrc:"A: Do you drink alcohol?\nB: I hardly ever drink.",
     funFact:"めったに (滅多に) must pair with a negative. Using it without ない sounds unnatural. The frequency ladder from most to least: いつも > よく > ときどき > たまに > めったに〜ない > ぜんぜん〜ない. This ladder is tested on JLPT N4."},

    {type:"teach", trg:"しばらく", src:"for a while / for some time", pos:"adv", gender:null,
     note:"しばらくおまちください = Please wait a moment.\nしばらくぶり = after a long time.",
     example:"A: しばらくにほんにいます。\nB: どのくらいですか？",
     exampleSrc:"A: I will be in Japan for a while.\nB: How long?",
     funFact:"しばらく (暫く) is versatile: it can mean a brief pause or an extended period, depending on context. しばらくぶりですね is similar to おひさしぶりです but slightly more casual. In formal settings, しばらくおまちください is the standard 'please wait.'"},

    {type:"teach", trg:"さいきん", src:"recently / lately", pos:"adv", gender:null,
     note:"さいきんどう？ = How have things been lately?\nさいきんのニュース = recent news.",
     example:"A: さいきんいそがしいですか？\nB: はい、とてもいそがしいです。",
     exampleSrc:"A: Have you been busy lately?\nB: Yes, very busy.",
     funFact:"さいきん (最近) is one of the most useful conversation starters. さいきんのトレンド (recent trends) and さいきんはまっていること (things I have been into lately) are common small talk topics. The kanji means 'most near,' implying the closest point in time."},

    {type:"teach", trg:"そろそろ", src:"soon / about time to", pos:"adv", gender:null,
     note:"Suggests it is nearly time for something.\nそろそろいきましょう = Let's get going soon.",
     example:"A: そろそろでかけましょう。\nB: もうそんなじかんですか？",
     exampleSrc:"A: Let's head out soon.\nB: Is it that time already?",
     funFact:"そろそろ is a gentle way to suggest transitioning to the next activity. At a party, saying そろそろしつれいします (I should be going soon) is much politer than abruptly saying さようなら. The word has a soft, gradual feeling that matches Japanese indirect communication."},

    {type:"teach", trg:"ずっと", src:"the whole time / by far / all along", pos:"adv", gender:null,
     note:"ずっとまえ = a long time ago.\nずっとすき = have always liked.",
     example:"A: にほんがずっとすきでした。\nB: いつからですか？",
     exampleSrc:"A: I have always loved Japan.\nB: Since when?",
     funFact:"ずっと emphasizes continuity or a large degree. ずっとまっていた means 'I was waiting the whole time.' ずっといい means 'much better.' This double meaning (continuous time AND degree comparison) makes it extremely versatile in conversation."},

    {type:"teach", trg:"〜かん", src:"duration counter (for hours/weeks/months)", pos:"part", gender:null,
     note:"いちじかん = one hour. にしゅうかん = two weeks.\nさんかげつかん = three months.",
     example:"A: にほんごをどのくらいべんきょうしましたか？\nB: いちねんかんべんきょうしました。",
     exampleSrc:"A: How long have you studied Japanese?\nB: I studied for one year.",
     funFact:"かん (間) means 'interval' and turns time units into durations. Without かん, じかん (o'clock) becomes a point in time, not a duration. This distinction is crucial: さんじ means '3 o'clock' but さんじかん means '3 hours.' JLPT frequently tests this."},

    {type:"mc", q:"Which adverb means 'hardly ever' and requires a negative verb?", opts:["めったに","ときどき","たまに","いつも"], ans:"めったに",
     hint:"This adverb indicates very low frequency and must always be paired with a negative ending."},

    {type:"fb", s:"{1}いきましょう。もうそんなじかんですか？\n(Let's head out soon. Is it that time already?)", a:"そろそろ", opts:["そろそろ","ときどき","ずっと","さいきん"], sSrc:"Let's head out soon. Is it that time already?",
     hint:"This gentle adverb suggests it is nearly time to do something, used for soft transitions."},

    {type:"match", pairs:[
      {trg:"ときどき", src:"sometimes"},
      {trg:"たまに", src:"occasionally"},
      {trg:"さいきん", src:"recently"},
      {trg:"ずっと", src:"the whole time"}
    ]},

    {type:"mc", q:"What is the difference between さんじ and さんじかん?", opts:["さんじ is 3 o'clock, さんじかん is 3 hours","They mean the same thing","さんじ is formal, さんじかん is casual","さんじ is morning, さんじかん is afternoon"], ans:"さんじ is 3 o'clock, さんじかん is 3 hours",
     hint:"The suffix かん turns a time point into a duration."}
  ]
};
export default BATCH9_L1;
