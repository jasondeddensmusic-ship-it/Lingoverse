// Batch 10 – Unit 01 (A1.1 Greetings): Seasonal & Social Set Phrases
const BATCH10_L1 = {
  id:"jav2_u01l_b10_1", title:"季節(きせつ)のあいさつ", icon:"🌸", xp:15, board:true,
  steps:[
    {type:"intro", title:"季節(きせつ)のあいさつ",
     desc:"Learn seasonal greetings and social set phrases that Japanese people use throughout the year. These phrases show cultural awareness and social grace.",
     goals:["Use seasonal greetings appropriately","Understand set phrases for meals and departures","Recognize the cultural importance of seasonal awareness"]},

    {type:"teach", trg:"いただきます", src:"I humbly receive (before eating)", pos:"intj", gender:null,
     note:"Said before every meal. Expresses gratitude for the food.\nPalms together, slight bow.",
     example:"A: ごはんができたよ。\nB: いただきます！",
     exampleSrc:"A: The meal is ready.\nB: I humbly receive!",
     funFact:"いただきます thanks everyone involved in the meal: the cook, the farmer, and even the ingredients themselves. It comes from いただく (to humbly receive). Not saying it before eating is considered rude, even when eating alone."},

    {type:"teach", trg:"ごちそうさまでした", src:"thank you for the meal", pos:"intj", gender:null,
     note:"Said after finishing a meal.\nCasual: ごちそうさま.",
     example:"A: ごちそうさまでした。おいしかったです。\nB: よかった！",
     exampleSrc:"A: Thank you for the meal. It was delicious.\nB: I am glad!",
     funFact:"ごちそう originally means 'feast' and さま is an honorific. The kanji 馳走(ちそう) means 'running around,' referring to the host running around to prepare the meal. You say it to the cook, to restaurant staff, and even when someone treats you to a meal."},

    {type:"teach", trg:"いってきます", src:"I am leaving (and will return)", pos:"intj", gender:null,
     note:"Said when leaving home. Literally: I will go and come back.\nThe reply is いってらっしゃい.",
     example:"A: いってきます！\nB: いってらっしゃい。気(き)をつけてね。",
     exampleSrc:"A: I am off!\nB: Have a good day. Take care.",
     funFact:"いってきます contains a promise to return. The いって (go) + きます (come) structure expresses a round trip. This daily exchange between family members is one of the most emotionally significant rituals in Japanese home life."},

    {type:"teach", trg:"いってらっしゃい", src:"have a good day (to someone leaving)", pos:"intj", gender:null,
     note:"Reply to いってきます. Said by those staying behind.\nLiterally: please go and come back.",
     example:"A: いってきます。\nB: いってらっしゃい！早(はや)くかえってきてね。",
     exampleSrc:"A: I am off.\nB: Have a good day! Come back soon.",
     funFact:"いってらっしゃい is a gentle command: 'go and return safely.' It is said with warmth and care. In Japanese dramas and anime, this exchange often marks the emotional tone of a family's daily rhythm."},

    {type:"teach", trg:"お先(さき)に失礼(しつれい)します", src:"excuse me for leaving first", pos:"verb", gender:null,
     note:"Said when leaving work before others.\nShows awareness that others are still working.",
     example:"A: お先(さき)に失礼(しつれい)します。\nB: お疲(つか)れさまでした。",
     exampleSrc:"A: Excuse me for leaving first.\nB: Good work today.",
     funFact:"In Japanese work culture, leaving before your boss or colleagues can feel awkward. お先(さき)に失礼(しつれい)します politely acknowledges this. It literally means 'I am being rude by going ahead of you.' The standard reply is お疲(つか)れさまでした."},

    {type:"teach", trg:"お変(かわ)りありませんか", src:"how have you been? (formal)", pos:"intj", gender:null,
     note:"Formal health inquiry. More polite than お元気(げんき)ですか.\nUsed in letters and formal speech.",
     example:"A: お変(かわ)りありませんか？\nB: おかげさまで、元気(げんき)にしております。",
     exampleSrc:"A: How have you been?\nB: Thanks to you, I have been well.",
     funFact:"お変(かわ)り here does not mean 'seconds' (as in food refills). It means 'change' with the nuance 'has anything bad changed?' Asking someone if nothing has changed is a Japanese way of hoping they are well. It appears frequently in formal letters."},

    {type:"teach", trg:"明(あ)けましておめでとうございます", src:"Happy New Year", pos:"intj", gender:null,
     note:"The most important seasonal greeting. Used January 1-7.\nOften followed by 今年(ことし)もよろしくお願(ねが)いします.",
     example:"A: 明(あ)けましておめでとうございます。\nB: 今年(ことし)もよろしくお願(ねが)いします。",
     exampleSrc:"A: Happy New Year.\nB: Please be kind to me this year too.",
     funFact:"明(あ)けまして means 'it has opened' (the new year). Japanese people send 年賀状(ねんがじょう) (New Year postcards) that arrive on January 1st. Writing and sending these cards is a major December activity. Over a billion are sent each year."},

    {type:"mc", q:"What do you say before eating a meal?", opts:["いただきます","ごちそうさまでした","いってきます","おかえりなさい"], ans:"いただきます",
     hint:"This phrase humbly expresses gratitude for the food you are about to receive."},

    {type:"fb", s:"{1}！早(はや)くかえってきてね。\n(Have a good day! Come back soon.)", a:"いってらっしゃい", opts:["いってらっしゃい","いただきます","おかえりなさい","さようなら"], sSrc:"Have a good day! Come back soon.",
     hint:"This is the warm reply to someone who says いってきます as they leave home."},

    {type:"match", pairs:[
      {trg:"いただきます", src:"before eating"},
      {trg:"ごちそうさまでした", src:"after eating"},
      {trg:"いってきます", src:"leaving home"},
      {trg:"いってらっしゃい", src:"reply to someone leaving"}
    ]},

    {type:"mc", q:"When is 明(あ)けましておめでとうございます used?", opts:["January 1-7","Any holiday","Someone's birthday","End of December"], ans:"January 1-7",
     hint:"This is the greeting for the beginning of the new year, not for other celebrations."},

    {type:"fb", s:"{1}。おいしかったです。\n(Thank you for the meal. It was delicious.)", a:"ごちそうさまでした", opts:["ごちそうさまでした","いただきます","ありがとうございます","おめでとうございます"], sSrc:"Thank you for the meal. It was delicious.",
     hint:"This phrase expresses gratitude after finishing a meal, thanking the cook and the food itself."}
  ,{type:"match",pairs:[{trg:"お先(さき)に失礼(しつれい)します",src:"excuse me for leaving first"},{trg:"お変(かわ)りありませんか",src:"how have you been? (formal)"},{trg:"明(あ)けましておめでとうございます",src:"Happy New Year"}]}]
};
export default BATCH10_L1;
