// Batch 9 – Unit 01 (A1.1 Greetings): Apology & Gratitude Expressions
const BATCH9_L1 = {
  id:"jav2_u01l_b9_1", title:"おれいとおわび", icon:"🙏", xp:15, board:true,
  steps:[
    {type:"intro", title:"おれいとおわび",
     desc:"Expand your polite expressions with deeper gratitude and apology phrases. These are essential for smooth social interactions in Japan.",
     goals:["Express gratitude in different situations","Apologize appropriately","Understand levels of formality in thanks and apologies"]},

    {type:"teach", trg:"どうも", src:"thanks / hey (casual)", pos:"intj", gender:null,
     note:"Very casual thanks or greeting. Often combined:\nどうもありがとう = thanks a lot.",
     example:"A: はい、コーヒー。\nB: どうも！",
     exampleSrc:"A: Here, coffee.\nB: Thanks!",
     funFact:"どうも is one of the most versatile words in Japanese. It can mean hello, thanks, sorry, or goodbye depending on context. Foreigners often hear it as a stand-alone greeting between acquaintances."},

    {type:"teach", trg:"ごめんなさい", src:"I am sorry", pos:"intj", gender:null,
     note:"Standard apology. More emotional than すみません.\nCasual: ごめん or ごめんね.",
     example:"A: おくれてごめんなさい！\nB: だいじょうぶですよ。",
     exampleSrc:"A: I am sorry for being late!\nB: It is okay.",
     funFact:"ごめんなさい comes from ごめん (pardon) and なさい (please do). It literally asks forgiveness. Japanese children learn ごめんなさい as one of their first polite phrases, alongside ありがとう."},

    {type:"teach", trg:"どういたしまして", src:"you are welcome", pos:"intj", gender:null,
     note:"Polite response to ありがとう.\nLiterally: what have I done (to deserve thanks)?",
     example:"A: てつだってくれてありがとう。\nB: どういたしまして。",
     exampleSrc:"A: Thank you for helping me.\nB: You are welcome.",
     funFact:"どういたしまして literally means 'what did I do?' implying 'I did nothing worthy of thanks.' This extreme humility is characteristic of Japanese politeness. Younger people often just say いいえ or いえいえ instead."},

    {type:"teach", trg:"しつれいします", src:"excuse me (entering/leaving)", pos:"verb", gender:null,
     note:"Used when entering a room, leaving, or being slightly rude.\nしつれいしました = past tense (after the act).",
     example:"A: しつれいします。やまだです。\nB: どうぞ、おはいりください。",
     exampleSrc:"A: Excuse me. I am Yamada.\nB: Please, come in.",
     funFact:"しつれい means 'rudeness.' By saying しつれいします, you are acknowledging that entering someone's space or interrupting is a minor rudeness. Office workers say it when entering meeting rooms and when leaving for the day."},

    {type:"teach", trg:"おじゃまします", src:"excuse me for intruding", pos:"verb", gender:null,
     note:"Said when entering someone's home.\nじゃま = disturbance, hindrance.",
     example:"A: いらっしゃい！どうぞ。\nB: おじゃまします。",
     exampleSrc:"A: Welcome! Please come in.\nB: Excuse me for intruding.",
     funFact:"おじゃまします literally means 'I will be a hindrance.' When visiting a Japanese home, you say this at the entrance after removing your shoes. When leaving, you say おじゃましました (I was a hindrance). This humble framing is deeply ingrained."},

    {type:"teach", trg:"おまたせしました", src:"sorry to have kept you waiting", pos:"verb", gender:null,
     note:"Used after making someone wait.\nCasual: おまたせ or ごめん、まった？",
     example:"A: おまたせしました。じゅんびができました。\nB: だいじょうぶですよ。",
     exampleSrc:"A: Sorry to have kept you waiting. I am ready.\nB: No problem.",
     funFact:"Restaurant staff always say おまたせしました when bringing food, even if the wait was short. It shows awareness that the customer's time is valuable. In business, arriving even one minute late warrants おまたせしました."},

    {type:"teach", trg:"おつかれさまです", src:"good work / thank you for your effort", pos:"intj", gender:null,
     note:"Said to coworkers at end of day or after a task.\nCasual: おつかれ.",
     example:"A: おつかれさまです。おさきにしつれいします。\nB: おつかれさまでした。",
     exampleSrc:"A: Good work. I will leave ahead of you.\nB: Good work to you too.",
     funFact:"おつかれさまです is the most common phrase in Japanese workplaces. It acknowledges shared effort. You can use it as hello, goodbye, or thanks. It replaced the older ごくろうさま, which is now only used by superiors to subordinates."},

    {type:"teach", trg:"きをつけて", src:"be careful / take care", pos:"verb", gender:null,
     note:"Said when someone is leaving on a trip or going out.\nMore polite: きをつけてください.",
     example:"A: いってきます。\nB: きをつけてね。",
     exampleSrc:"A: I am leaving now.\nB: Take care.",
     funFact:"き (気) means spirit or mind. きをつける literally means 'attach your spirit' or 'pay attention.' Japanese parents say きをつけて to children leaving for school every morning. It is a small ritual of care."},

    {type:"mc", q:"What do you say when entering someone's home?", opts:["おじゃまします","しつれいします","おまたせしました","おつかれさまです"], ans:"おじゃまします",
     hint:"This phrase acknowledges that you are intruding on someone's private space."},

    {type:"fb", s:"{1}。じゅんびができました。\n(Sorry to have kept you waiting. I am ready.)", a:"おまたせしました", opts:["おまたせしました","おつかれさまです","しつれいします","ごめんなさい"], sSrc:"Sorry to have kept you waiting. I am ready.",
     hint:"This phrase is used after making someone wait for you."},

    {type:"match", pairs:[
      {trg:"どうも", src:"casual thanks"},
      {trg:"ごめんなさい", src:"I am sorry"},
      {trg:"どういたしまして", src:"you are welcome"},
      {trg:"おつかれさまです", src:"good work"}
    ]},

    {type:"mc", q:"What does おつかれさまです express?", opts:["Acknowledgment of shared effort","An apology for being late","A greeting for the morning","Congratulations on success"], ans:"Acknowledgment of shared effort",
     hint:"This is the most common workplace phrase, used when colleagues finish tasks or leave for the day."},

    {type:"fb", s:"いらっしゃい！どうぞ。\n{1}。\n(Welcome! Please come in. Excuse me for intruding.)", a:"おじゃまします", opts:["おじゃまします","しつれいします","おまたせしました","きをつけて"], sSrc:"Welcome! Please come in.\nExcuse me for intruding.",
     hint:"This humble phrase acknowledges entering someone's home as a minor intrusion."}
  ]
};
export default BATCH9_L1;
