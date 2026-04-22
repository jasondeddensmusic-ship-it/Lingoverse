// Batch 9 – Unit 11 (A2.2 Te-form): Compound Actions
const BATCH9_L1 = {
  id:"jav2_u11l_b9_1", title:"複合動詞(ふくごうどうし)", icon:"🔗", xp:15, board:true,
  steps:[
    {type:"intro", title:"複合動詞(ふくごうどうし)",
     desc:"Learn compound verbs using the て-form that express ongoing actions, results, and preparations. These patterns are essential for natural Japanese.",
     goals:["Use ている for ongoing states and habits","Express completed preparations with てある","Combine verbs with ておく and てしまう"]},

    {type:"teach", trg:"持(も)っている", src:"to have / to be holding", pos:"verb", gender:null,
     note:"持(も)つ = to hold. 持(も)っている = state of having.\n傘(かさ)を持(も)っている = I have an umbrella.",
     example:"A: ペンを持(も)っていますか？\nB: はい、持(も)っています。どうぞ。",
     exampleSrc:"A: Do you have a pen?\nB: Yes, I do. Here you go.",
     funFact:"持(も)っている covers both physical holding and ownership. A Japanese person might say スマホを持(も)っている meaning both 'I have a smartphone (own one)' and 'I am holding a smartphone.' Context determines which. The short form 持(も)ってる is very common in casual speech."},

    {type:"teach", trg:"知(し)っている", src:"to know", pos:"verb", gender:null,
     note:"知(し)る = to learn/find out. 知(し)っている = state of knowing.\nNegative: 知(し)らない (not 知(し)っていない).",
     example:"A: この歌(うた)を知(し)っていますか？\nB: はい、知(し)っています。",
     exampleSrc:"A: Do you know this song?\nB: Yes, I know it.",
     funFact:"知(し)っている is a tricky verb because its negative is 知(し)らない, not 知(し)っていない. This is because 知(し)る marks the moment of learning, and ている marks the resulting state. ご存知(ぞんじ)ですか is the keigo (honorific) form of 知(し)っていますか."},

    {type:"teach", trg:"〜てある", src:"something has been done (result remains)", pos:"verb", gender:null,
     note:"窓(まど)が開(あ)けてある = the window has been opened (and is still open).\nFocuses on the resulting state.",
     example:"A: ビールが冷(ひ)やしてありますよ。\nB: ありがとう、うれしい！",
     exampleSrc:"A: The beer has been chilled (and is ready).\nB: Thanks, I am happy!",
     funFact:"てある emphasizes that someone did something ON PURPOSE and the result is visible. Compare: 窓(まど)が開(あ)いている (the window is open, neutral) vs. 窓(まど)が開(あ)けてある (someone opened the window and it stays open, intentional). This distinction exists only in Japanese."},

    {type:"teach", trg:"〜ておく", src:"to do something in advance / for later", pos:"verb", gender:null,
     note:"Casual: とく. 予約(よやく)しておく = reserve in advance.\n準備(じゅんび)しておく = prepare beforehand.",
     example:"A: ホテルを予約(よやく)しておきます。\nB: お願(ねが)いします。",
     exampleSrc:"A: I will reserve the hotel in advance.\nB: Please do.",
     funFact:"ておく (casual: とく) expresses doing something now FOR a future purpose. 食(た)べておこう means 'let's eat now (because we will be busy later).' The nuance of preparation and foresight makes this pattern very useful. Japanese people value 準備(じゅんび) (preparation), so ておく is frequent."},

    {type:"teach", trg:"〜てしまう", src:"to end up doing / to finish completely", pos:"verb", gender:null,
     note:"Casual: ちゃう/じゃう. Two nuances: completion and regret.\n食(た)べてしまった = ate it all / ended up eating it.",
     example:"A: ケーキを全部(ぜんぶ)食(た)べてしまいました。\nB: えー、私(わたし)の分(ぶん)は？",
     exampleSrc:"A: I ate all the cake.\nB: What? What about my share?",
     funFact:"てしまう has two distinct feelings: complete action (読(よ)んでしまった = finished reading) and regret/accident (忘(わす)れてしまった = I ended up forgetting). In casual speech, it contracts: てしまう > ちゃう, でしまう > じゃう. 忘(わす)れちゃった is extremely common."},

    {type:"teach", trg:"〜てみる", src:"to try doing", pos:"verb", gender:null,
     note:"食(た)べてみる = try eating. やってみる = try doing.\nみる adds the nuance of experimentation.",
     example:"A: 納豆(なっとう)を食(た)べてみませんか？\nB: 一度(いちど)食(た)べてみます。",
     exampleSrc:"A: Would you like to try eating natto?\nB: I will try it once.",
     funFact:"てみる literally adds 見(み)る (to see) to mean 'do and see what happens.' It removes pressure by framing actions as experiments. やってみよう (let's try it!) is an encouraging phrase. The famous Japanese attitude of まずやってみる (first try it) reflects a learning-by-doing philosophy."},

    {type:"teach", trg:"〜ていく", src:"to go on doing / to start doing", pos:"verb", gender:null,
     note:"Changes happening from now into the future.\n減(へ)っていく = to decrease (going forward).",
     example:"A: これから頑張(がんば)っていきます。\nB: 応援(おうえん)しています。",
     exampleSrc:"A: I will keep doing my best from now on.\nB: I am cheering for you.",
     funFact:"ていく expresses actions moving away from the present into the future. Its counterpart てくる expresses actions approaching the present. 寒(さむ)くなっていく means 'it will get colder' (heading into winter). This pair (ていく/てくる) is one of the most nuanced patterns in Japanese."},

    {type:"teach", trg:"〜てくる", src:"to come to do / to have been doing", pos:"verb", gender:null,
     note:"Changes happening up to the present.\n増(ふ)えてくる = to increase (up to now).",
     example:"A: 日本語(にほんご)がわかってきました。\nB: 頑張(がんば)りましたね。",
     exampleSrc:"A: I have come to understand Japanese.\nB: You worked hard.",
     funFact:"てくる expresses change approaching the present moment. 雨(あめ)が降(ふ)ってきた means 'it started raining (I noticed it just now).' わかってきた means 'I am starting to understand (gradually).' The gradual nature of てくる makes it perfect for describing emerging understanding or changing conditions."},

    {type:"mc", q:"What is the casual contraction of てしまう?", opts:["ちゃう","とく","てく","みる"], ans:"ちゃう",
     hint:"This very common casual form shortens てしまう. For example, 忘(わす)れてしまった becomes 忘(わす)れちゃった."},

    {type:"fb", s:"ホテルを予約(よやく)して{1}ます。\n(I will reserve the hotel in advance.)", a:"おき", opts:["おき","しまい","み","い"], sSrc:"I will reserve the hotel in advance.",
     hint:"This pattern expresses doing something now in preparation for later."},

    {type:"match", pairs:[
      {trg:"〜てある", src:"result of intentional action"},
      {trg:"〜ておく", src:"do in advance"},
      {trg:"〜てしまう", src:"end up doing / finish"},
      {trg:"〜てみる", src:"try doing"}
    ]},

    {type:"mc", q:"What does 日本語(にほんご)がわかってきました mean?", opts:["I started studying Japanese","I have gradually come to understand Japanese","I understood Japanese completely","I forgot Japanese"], ans:"I have gradually come to understand Japanese",
     hint:"てくる expresses a gradual change approaching the present moment."}
  ,{type:"fb", s:"この歌(うた)を{1}ますか？有名(ゆうめい)な曲(きょく)ですよ。",
    a:["知(し)っている"],
    opts:["知(し)っている","持(も)っている","わかっている","見(み)ている"],
    hint:"Someone asks if you are familiar with this famous song. The verb means 'to know' and its negative is 知(し)らない.",
    sSrc:"Do you {1} this song? It is a famous track."}
  ,{type:"match",pairs:[{trg:"持(も)っている",src:"to have / to be holding"},{trg:"知(し)っている",src:"to know"},{trg:"〜ていく",src:"to go on doing / to start doing"}]}]
};
export default BATCH9_L1;
