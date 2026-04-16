// Batch 4 — Unit 01 Lesson 2: Polite Expressions & Apologies
const BATCH4_L_2 = {
  id:"jav2_u01l_b4_2", title:"ていねいなことば", icon:"🙇", xp:15, board:true,
  steps:[
    {type:"intro", title:"ていねいなことば",
     desc:"Master essential polite phrases for daily life. Japanese culture values politeness highly, and these expressions are used constantly.",
     goals:["Apologize and thank people properly","Use polite set phrases","Navigate basic social situations"]},

    {type:"teach", trg:"すみません", src:"excuse me / I'm sorry", pos:"intj", gender:null,
     note:"The most versatile polite phrase. Used to apologize, get attention, or show gratitude.",
     example:"すみません、トイレはどこですか？",
     exampleSrc:"Excuse me, where is the toilet?",
     funFact:"Sumimasen literally means 'it does not end' (the feeling of guilt). Japanese people say sumimasen far more often than arigatou. Some linguists say Japan runs on apologies rather than thanks."},

    {type:"teach", trg:"ごめんなさい", src:"I'm sorry (apology)", pos:"intj", gender:null,
     note:"A direct apology. More emotional than すみません.\nCasual: ごめん.",
     example:"おくれてごめんなさい。",
     exampleSrc:"I'm sorry for being late.",
     funFact:"Gomen comes from 御免 meaning 'permission/forgiveness.' When samurai visited a house, they would say gomen to announce themselves. The word evolved from 'pardon my intrusion' to 'I'm sorry.'"},

    {type:"teach", trg:"おねがいします", src:"please (request)", pos:"intj", gender:null,
     note:"Literally 'I make a wish/request.' Used when asking for something.",
     example:"みずをおねがいします。",
     exampleSrc:"Water, please.",
     funFact:"願い means 'wish' with the honorific お prefix. At Shinto shrines, people make wishes (お願い) to the gods. In daily life, the same word is used for any polite request."},

    {type:"teach", trg:"おめでとうございます", src:"congratulations", pos:"intj", gender:null,
     note:"Formal. Casual: おめでとう. Used for birthdays, weddings, New Year.",
     example:"たんじょうびおめでとうございます！",
     exampleSrc:"Happy birthday!",
     funFact:"Literally comes from 'medetai' (auspicious/joyous). On January 1st, all of Japan exchanges 'akemashite omedetou gozaimasu' (Happy New Year). It is the single most-said phrase each year."},

    {type:"teach", trg:"いただきます", src:"(said before eating)", pos:"intj", gender:null,
     note:"Said before every meal. Literally: 'I humbly receive.'",
     example:"いただきます！きょうのごはんはおいしそう。",
     exampleSrc:"(Let's eat!) Today's food looks delicious.",
     funFact:"This phrase expresses gratitude to everyone involved in the meal: the cook, the farmer, and even the animal or plant that gave its life. Not eating before saying it is considered very rude."},

    {type:"teach", trg:"ごちそうさまでした", src:"(said after eating)", pos:"intj", gender:null,
     note:"Said after finishing a meal. Literally: 'It was a feast.'",
     example:"ごちそうさまでした。おいしかったです。",
     exampleSrc:"(Thank you for the meal.) It was delicious.",
     funFact:"ごちそう originally meant 'running around' (走り回る) because the host would run around gathering ingredients for guests. Saying this phrase thanks the host for all that effort."},

    {type:"teach", trg:"おつかれさまです", src:"good work / thanks for your effort", pos:"intj", gender:null,
     note:"Said to coworkers after work or when leaving. Essential business Japanese.",
     example:"おつかれさまです。おさきにしつれいします。",
     exampleSrc:"Good work today. Excuse me for leaving first.",
     funFact:"Literally 'you are tired' (お疲れ様). This is perhaps the most-used phrase in Japanese workplaces. It works as a greeting, farewell, and thank-you all in one. There is no real English equivalent."},

    {type:"teach", trg:"いってきます", src:"I'm heading out (leaving home)", pos:"intj", gender:null,
     note:"Said when leaving the house. Family responds with いってらっしゃい.",
     example:"いってきます！きょうはよるおそくなります。",
     exampleSrc:"I'm heading out! I'll be late tonight.",
     funFact:"Literally 'I will go and come back.' This ritual exchange at the door is deeply important in Japanese family life. It is a promise to return safely, and the response is a wish for a safe journey."},

    {type:"teach", trg:"ただいま", src:"I'm home", pos:"intj", gender:null,
     note:"Said when arriving home. Family responds with おかえりなさい.",
     example:"ただいま！つかれた。",
     exampleSrc:"I'm home! I'm tired.",
     funFact:"Short for 'tadaima kaerimashita' (I have just now returned). The response おかえりなさい means 'welcome back.' This pair of phrases creates a warm ritual that marks the boundary between outside and home."},

    {type:"teach", trg:"おかえりなさい", src:"welcome back / welcome home", pos:"intj", gender:null,
     note:"Response to ただいま. Casual: おかえり.",
     example:"おかえりなさい！ごはんできてるよ。",
     exampleSrc:"Welcome back! Dinner is ready.",
     funFact:"In anime and manga, this phrase is iconic for the warm family scene where someone returns home. Restaurants sometimes greet regular customers with 'okaerinasai' to make them feel at home."},

    {type:"teach", trg:"おじゃまします", src:"pardon the intrusion (entering someone's home)", pos:"intj", gender:null,
     note:"Said when entering someone else's home or office.",
     example:"おじゃまします。すてきなおうちですね。",
     exampleSrc:"Pardon the intrusion. What a lovely house.",
     funFact:"邪魔 means 'hindrance/nuisance.' You are literally saying 'I am going to be a bother.' This reflects the Japanese value of not imposing on others, even when you are explicitly invited."},

    {type:"teach", trg:"しつれいします", src:"excuse me (formal, entering/leaving)", pos:"intj", gender:null,
     note:"Used when entering a room, passing someone, or leaving early.",
     example:"しつれいします。じかんがありません。",
     exampleSrc:"Excuse me. I don't have time.",
     funFact:"失礼 means 'rudeness.' You are literally announcing 'I am about to be rude.' In offices, people say this when entering their boss's room, when cutting through a group, or when leaving before others."},

    {type:"teach", trg:"きをつけて", src:"be careful / take care", pos:"intj", gender:null,
     note:"Said when someone is leaving. Literally: 'attach your spirit (to what you're doing).'",
     example:"あめですよ。きをつけて。",
     exampleSrc:"It's raining. Be careful.",
     funFact:"気 (ki) means spirit/energy. Japanese has dozens of expressions with 気: 気になる (to worry), 気持ち (feeling), 元気 (health/energy). Attaching your ki means being mindful and alert."},

    {type:"teach", trg:"おだいじに", src:"get well soon / take care of yourself", pos:"intj", gender:null,
     note:"Said to someone who is sick. Short for お大事にしてください.",
     example:"かぜですか？おだいじに。",
     exampleSrc:"You have a cold? Get well soon.",
     funFact:"大事 means 'important.' You are telling the person to treat themselves as something important. Pharmacists in Japan always say this when handing over medicine."},

    {type:"mc", q:"What do you say before eating a meal?",
     opts:["いただきます","ごちそうさまでした","おめでとう","すみません"], ans:"いただきます",
     hint:"This phrase humbly receives the food being offered."},

    {type:"mc", q:"おつかれさまです is used:",
     opts:["when entering a home","to thank coworkers for their effort","before eating","when apologizing"], ans:"to thank coworkers for their effort",
     hint:"Think of the phrase you hear in every Japanese office."},

    {type:"fb", s:"A: ただいま！\nB: {1}！", a:"おかえりなさい",
     sSrc:"A: I'm home!\nB: Welcome back!",
     opts:["おかえりなさい","いってらっしゃい","おじゃまします","しつれいします"],
     hint:"The response when someone arrives back home."},

    {type:"match", pairs:[
      {trg:"いってきます", src:"I'm heading out"},
      {trg:"おじゃまします", src:"pardon the intrusion"},
      {trg:"しつれいします", src:"excuse me (formal)"},
      {trg:"きをつけて", src:"be careful"}
    ]},

    {type:"mc", q:"What does ごちそうさまでした mean?",
     opts:["thank you for the meal","congratulations","I'm sorry","good morning"], ans:"thank you for the meal",
     hint:"Said after finishing eating to express gratitude."},

    {type:"fb", s:"かぜですか？{1}。", a:"おだいじに",
     sSrc:"You have a cold? Get well soon.",
     opts:["おだいじに","おめでとう","すみません","ありがとう"],
     hint:"A caring phrase for someone who is unwell."},

    {type:"mc", q:"ごめんなさい is best translated as:",
     opts:["I'm sorry (apology)","excuse me","thank you","congratulations"], ans:"I'm sorry (apology)",
     hint:"A direct, emotional a... to someone you wronged."}
  ]
};
export default BATCH4_L_2;
