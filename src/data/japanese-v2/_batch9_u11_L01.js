// Batch 9 – Unit 11 (A2.2 Te-form): Compound Actions
const BATCH9_L1 = {
  id:"jav2_u11l_b9_1", title:"ふくごうどうし", icon:"🔗", xp:15, board:true,
  steps:[
    {type:"intro", title:"ふくごうどうし",
     desc:"Learn compound verbs using the て-form that express ongoing actions, results, and preparations. These patterns are essential for natural Japanese.",
     goals:["Use ている for ongoing states and habits","Express completed preparations with てある","Combine verbs with ておく and てしまう"]},

    {type:"teach", trg:"もっている", src:"to have / to be holding", pos:"verb", gender:null,
     note:"もつ = to hold. もっている = state of having.\nかさをもっている = I have an umbrella.",
     example:"A: ペンをもっていますか？\nB: はい、もっています。どうぞ。",
     exampleSrc:"A: Do you have a pen?\nB: Yes, I do. Here you go.",
     funFact:"もっている covers both physical holding and ownership. A Japanese person might say スマホをもっている meaning both 'I have a smartphone (own one)' and 'I am holding a smartphone.' Context determines which. The short form もってる is very common in casual speech."},

    {type:"teach", trg:"しっている", src:"to know", pos:"verb", gender:null,
     note:"しる = to learn/find out. しっている = state of knowing.\nNegative: しらない (not しっていない).",
     example:"A: このうたをしっていますか？\nB: はい、しっています。",
     exampleSrc:"A: Do you know this song?\nB: Yes, I know it.",
     funFact:"しっている is a tricky verb because its negative is しらない, not しっていない. This is because しる marks the moment of learning, and ている marks the resulting state. ごぞんじですか is the keigo (honorific) form of しっていますか."},

    {type:"teach", trg:"〜てある", src:"something has been done (result remains)", pos:"verb", gender:null,
     note:"まどがあけてある = the window has been opened (and is still open).\nFocuses on the resulting state.",
     example:"A: ビールがひやしてありますよ。\nB: ありがとう、うれしい！",
     exampleSrc:"A: The beer has been chilled (and is ready).\nB: Thanks, I am happy!",
     funFact:"てある emphasizes that someone did something ON PURPOSE and the result is visible. Compare: まどがあいている (the window is open, neutral) vs. まどがあけてある (someone opened the window and it stays open, intentional). This distinction exists only in Japanese."},

    {type:"teach", trg:"〜ておく", src:"to do something in advance / for later", pos:"verb", gender:null,
     note:"Casual: とく. よやくしておく = reserve in advance.\nじゅんびしておく = prepare beforehand.",
     example:"A: ホテルをよやくしておきます。\nB: おねがいします。",
     exampleSrc:"A: I will reserve the hotel in advance.\nB: Please do.",
     funFact:"ておく (casual: とく) expresses doing something now FOR a future purpose. たべておこう means 'let's eat now (because we will be busy later).' The nuance of preparation and foresight makes this pattern very useful. Japanese people value じゅんび (preparation), so ておく is frequent."},

    {type:"teach", trg:"〜てしまう", src:"to end up doing / to finish completely", pos:"verb", gender:null,
     note:"Casual: ちゃう/じゃう. Two nuances: completion and regret.\nたべてしまった = ate it all / ended up eating it.",
     example:"A: ケーキをぜんぶたべてしまいました。\nB: えー、わたしのぶんは？",
     exampleSrc:"A: I ate all the cake.\nB: What? What about my share?",
     funFact:"てしまう has two distinct feelings: complete action (よんでしまった = finished reading) and regret/accident (わすれてしまった = I ended up forgetting). In casual speech, it contracts: てしまう > ちゃう, でしまう > じゃう. わすれちゃった is extremely common."},

    {type:"teach", trg:"〜てみる", src:"to try doing", pos:"verb", gender:null,
     note:"たべてみる = try eating. やってみる = try doing.\nみる adds the nuance of experimentation.",
     example:"A: なっとうをたべてみませんか？\nB: いちどたべてみます。",
     exampleSrc:"A: Would you like to try eating natto?\nB: I will try it once.",
     funFact:"てみる literally adds みる (to see) to mean 'do and see what happens.' It removes pressure by framing actions as experiments. やってみよう (let's try it!) is an encouraging phrase. The famous Japanese attitude of まずやってみる (first try it) reflects a learning-by-doing philosophy."},

    {type:"teach", trg:"〜ていく", src:"to go on doing / to start doing", pos:"verb", gender:null,
     note:"Changes happening from now into the future.\nへっていく = to decrease (going forward).",
     example:"A: これからがんばっていきます。\nB: おうえんしています。",
     exampleSrc:"A: I will keep doing my best from now on.\nB: I am cheering for you.",
     funFact:"ていく expresses actions moving away from the present into the future. Its counterpart てくる expresses actions approaching the present. さむくなっていく means 'it will get colder' (heading into winter). This pair (ていく/てくる) is one of the most nuanced patterns in Japanese."},

    {type:"teach", trg:"〜てくる", src:"to come to do / to have been doing", pos:"verb", gender:null,
     note:"Changes happening up to the present.\nふえてくる = to increase (up to now).",
     example:"A: にほんごがわかってきました。\nB: がんばりましたね。",
     exampleSrc:"A: I have come to understand Japanese.\nB: You worked hard.",
     funFact:"てくる expresses change approaching the present moment. あめがふってきた means 'it started raining (I noticed it just now).' わかってきた means 'I am starting to understand (gradually).' The gradual nature of てくる makes it perfect for describing emerging understanding or changing conditions."},

    {type:"mc", q:"What is the casual contraction of てしまう?", opts:["ちゃう","とく","てく","みる"], ans:"ちゃう",
     hint:"This very common casual form shortens てしまう. For example, わすれてしまった becomes わすれちゃった."},

    {type:"fb", s:"ホテルをよやくして{1}ます。\n(I will reserve the hotel in advance.)", a:"おき", opts:["おき","しまい","み","い"], sSrc:"I will reserve the hotel in advance.",
     hint:"This pattern expresses doing something now in preparation for later."},

    {type:"match", pairs:[
      {trg:"〜てある", src:"result of intentional action"},
      {trg:"〜ておく", src:"do in advance"},
      {trg:"〜てしまう", src:"end up doing / finish"},
      {trg:"〜てみる", src:"try doing"}
    ]},

    {type:"mc", q:"What does にほんごがわかってきました mean?", opts:["I have gradually come to understand Japanese","I understood Japanese completely","I forgot Japanese","I started studying Japanese"], ans:"I have gradually come to understand Japanese",
     hint:"てくる expresses a gradual change approaching the present moment."}
  ]
};
export default BATCH9_L1;
