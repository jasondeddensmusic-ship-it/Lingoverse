// Batch 9 – Unit 07 (A2.1 Time): Time Expressions & Frequency
const BATCH9_L1 = {
  id:"jav2_u07l_b9_1", title:"頻度(ひんど)", icon:"🔄", xp:15, board:true,
  steps:[
    {type:"intro", title:"頻度(ひんど)",
     desc:"Learn frequency and duration expressions essential for describing daily routines and habits in Japanese.",
     goals:["Express how often you do things","Talk about duration of activities","Use time-related adverbs naturally"]},

    {type:"teach", trg:"時々(ときどき)", src:"sometimes", pos:"adv", gender:null,
     note:"Moderate frequency. Between いつも and たまに.\n時々(ときどき)雨(あめ)が降(ふ)ります = It rains sometimes.",
     example:"A: 日本(にほん)料理(りょうり)を作(つく)りますか？\nB: 時々(ときどき)作(つく)ります。",
     exampleSrc:"A: Do you make Japanese food?\nB: I sometimes make it.",
     funFact:"時々(ときどき) uses the same kanji twice, meaning 'time time.' This reduplication pattern is common in Japanese: 人々(ひとびと) (people), 山々(やまやま) (mountains), etc. 時々(ときどき) suggests about once a week or a few times a month."},

    {type:"teach", trg:"たまに", src:"occasionally / rarely", pos:"adv", gender:null,
     note:"Less frequent than 時々(ときどき).\nたまにはいいでしょう = Once in a while is okay.",
     example:"A: 映画(えいが)を見(み)ますか？\nB: たまに見(み)ます。",
     exampleSrc:"A: Do you watch movies?\nB: I watch them occasionally.",
     funFact:"たまに suggests something happens infrequently, perhaps once a month or less. The expression たまには is used when suggesting doing something unusual: たまには外(そと)で食(た)べましょう (let's eat out for a change). It carries a nuance of pleasant rarity."},

    {type:"teach", trg:"めったに〜ない", src:"seldom / hardly ever", pos:"adv", gender:null,
     note:"Always used with negative verb.\nめったに遅(おく)れない = seldom late.",
     example:"A: 酒(さけ)を飲(の)みますか？\nB: めったに飲(の)みません。",
     exampleSrc:"A: Do you drink alcohol?\nB: I hardly ever drink.",
     funFact:"めったに must pair with a negative. Using it without ない sounds unnatural. The frequency ladder from most to least: いつも > よく > 時々(ときどき) > たまに > めったに〜ない > 全然(ぜんぜん)〜ない. This ladder is tested on JLPT N4."},

    {type:"teach", trg:"しばらく", src:"for a while / for some time", pos:"adv", gender:null,
     note:"しばらくお待(ま)ちください = Please wait a moment.\nしばらくぶり = after a long time.",
     example:"A: しばらく日本(にほん)にいます。\nB: どのくらいですか？",
     exampleSrc:"A: I will be in Japan for a while.\nB: How long?",
     funFact:"しばらく is versatile: it can mean a brief pause or an extended period, depending on context. しばらくぶりですね is similar to おひさしぶりです but slightly more casual. In formal settings, しばらくお待(ま)ちください is the standard 'please wait.'"},

    {type:"teach", trg:"最近(さいきん)", src:"recently / lately", pos:"adv", gender:null,
     note:"最近(さいきん)どう？ = How have things been lately?\n最近(さいきん)のニュース = recent news.",
     example:"A: 最近(さいきん)忙(いそが)しいですか？\nB: はい、とても忙(いそが)しいです。",
     exampleSrc:"A: Have you been busy lately?\nB: Yes, very busy.",
     funFact:"最近(さいきん) is one of the most useful conversation starters. 最近(さいきん)のトレンド (recent trends) and 最近(さいきん)はまっていること (things I have been into lately) are common small talk topics. The kanji means 'most near,' implying the closest point in time."},

    {type:"teach", trg:"そろそろ", src:"soon / about time to", pos:"adv", gender:null,
     note:"Suggests it is nearly time for something.\nそろそろ行(い)きましょう = Let's get going soon.",
     example:"A: そろそろ出(で)かけましょう。\nB: もうそんな時間(じかん)ですか？",
     exampleSrc:"A: Let's head out soon.\nB: Is it that time already?",
     funFact:"そろそろ is a gentle way to suggest transitioning to the next activity. At a party, saying そろそろ失礼(しつれい)します (I should be going soon) is much politer than abruptly saying さようなら. The word has a soft, gradual feeling that matches Japanese indirect communication."},

    {type:"teach", trg:"ずっと", src:"the whole time / by far / all along", pos:"adv", gender:null,
     note:"ずっと前(まえ) = a long time ago.\nずっと好(す)き = have always liked.",
     example:"A: 日本(にほん)がずっと好(す)きでした。\nB: いつからですか？",
     exampleSrc:"A: I have always loved Japan.\nB: Since when?",
     funFact:"ずっと emphasizes continuity or a large degree. ずっと待(ま)っていた means 'I was waiting the whole time.' ずっといい means 'much better.' This double meaning (continuous time AND degree comparison) makes it extremely versatile in conversation."},

    {type:"teach", trg:"〜間(かん)", src:"duration counter (for hours/weeks/months)", pos:"part", gender:null,
     note:"一時間(いちじかん) = one hour. 二週間(にしゅうかん) = two weeks.\n三ヶ月間(さんかげつかん) = three months.",
     example:"A: 日本語(にほんご)をどのくらい勉強(べんきょう)しましたか？\nB: 一年間(いちねんかん)勉強(べんきょう)しました。",
     exampleSrc:"A: How long have you studied Japanese?\nB: I studied for one year.",
     funFact:"間(かん) means 'interval' and turns time units into durations. Without 間(かん), 時間(じかん) (o'clock) becomes a point in time, not a duration. This distinction is crucial: 三時(さんじ) means '3 o'clock' but 三時間(さんじかん) means '3 hours.' JLPT frequently tests this."},

    {type:"mc", q:"Which adverb means 'hardly ever' and requires a negative verb?", opts:["めったに","時々(ときどき)","たまに","いつも"], ans:"めったに",
     hint:"This adverb indicates very low frequency and must always be paired with a negative ending."},

    {type:"fb", s:"{1}出(で)かけましょう。もうそんな時間(じかん)ですか？\n(Let's head out soon. Is it that time already?)", a:"そろそろ", opts:["そろそろ","時々(ときどき)","ずっと","最近(さいきん)"], sSrc:"Let's head out soon. Is it that time already?",
     hint:"This gentle adverb suggests it is nearly time to do something, used for soft transitions."},

    {type:"match", pairs:[
      {trg:"時々(ときどき)", src:"sometimes"},
      {trg:"たまに", src:"occasionally"},
      {trg:"最近(さいきん)", src:"recently"},
      {trg:"ずっと", src:"the whole time"}
    ]},

    {type:"mc", q:"What is the difference between 三時(さんじ) and 三時間(さんじかん)?", opts:["三時(さんじ) is morning, 三時間(さんじかん) is afternoon","三時(さんじ) is 3 o'clock, 三時間(さんじかん) is 3 hours","They mean the same thing","三時(さんじ) is formal, 三時間(さんじかん) is casual"], ans:"三時(さんじ) is 3 o'clock, 三時間(さんじかん) is 3 hours",
     hint:"The suffix 間(かん) turns a time point into a duration."}
  ,{type:"match",pairs:[{trg:"しばらく",src:"for a while / for some time"},{trg:"〜間(かん)",src:"duration counter (for hours/weeks/months)"}]}]
};
export default BATCH9_L1;
