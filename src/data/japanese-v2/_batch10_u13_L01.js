// Batch 10 – Unit 13 (B1.1 Experience): Emotions & Feelings
const BATCH10_L1 = {
  id:"jav2_u13l_b10_1", title:"感情(かんじょう)", icon:"💭", xp:15, board:true,
  steps:[
    {type:"intro", title:"感情(かんじょう)",
     desc:"Expand your emotional vocabulary beyond basic feelings. Japanese has nuanced words for emotional states that reflect the culture's emotional sensitivity.",
     goals:["Express complex emotions","Describe emotional states in detail","Understand Japanese emotional vocabulary nuances"]},

    {type:"teach", trg:"懐(なつ)かしい", src:"nostalgic / fondly missed", pos:"adj", gender:null,
     note:"い-adjective. 懐(なつ)かしい！ = How nostalgic!\nEvokes warm memories of the past.",
     example:"A: この歌(うた)、懐(なつ)かしいですね。\nB: 子(こ)どものころよく聞(き)いていました。\nA: どうでしたか？\nB: とても良(よ)かったです。",
     exampleSrc:"A: This song is nostalgic.\nB: I listened to it a lot as a child.\nA: How was it?\nB: It was very good.",
     funFact:"懐(なつ)かしい is one of the most culturally rich Japanese adjectives. It expresses a bittersweet longing for the past combined with warm fondness. There is no exact English equivalent. Japanese people say 懐(なつ)かしい when encountering old songs, foods, places, or friends from the past."},

    {type:"teach", trg:"悔(くや)しい", src:"frustrated / vexing / mortifying", pos:"adj", gender:null,
     note:"い-adjective. Used when you lost or failed.\n悔(くや)しい！もういっかい！ = Frustrating! One more time!",
     example:"A: 試合(しあい)に負(ま)けて悔(くや)しいです。\nB: 次(つぎ)頑張(がんば)りましょう。\nA: いつですか？\nB: 去年(きょねん)の夏(なつ)でした。",
     exampleSrc:"A: I am frustrated about losing the match.\nB: Let's try harder next time.\nA: When was it?\nB: It was last summer.",
     funFact:"悔(くや)しい (悔しい) specifically describes the burning frustration of defeat or failure when you know you could have done better. Japanese athletes often cry and say 悔(くや)しい after losing. It is considered a positive emotion because it drives improvement. 悔(くや)しなみだ means 'tears of frustration.'"},

    {type:"teach", trg:"恥(はず)かしい", src:"embarrassed / shy / ashamed", pos:"adj", gender:null,
     note:"い-adjective. 恥(はず)かしがりや = shy person.\nCovers both embarrassment and shyness.",
     example:"A: 日本語(にほんご)で話(はな)すのが恥(はず)かしいです。\nB: 大丈夫(だいじょうぶ)、上手(じょうず)ですよ。\nA: それはいいですね。\nB: はい、とても楽(たの)しかったです。",
     exampleSrc:"A: I am embarrassed to speak Japanese.\nB: It is fine, you are good.\nA: That is nice.\nB: Yes, it was very fun.",
     funFact:"恥(はず)かしい covers a wide range from mild shyness to deep shame. Japanese culture values modesty, so feeling 恥(はず)かしい about being praised is normal and expected. The related word 恥(はじ) (shame) is central to Japanese social psychology. 'Shame culture' is a commonly discussed concept in Japanese studies."},

    {type:"teach", trg:"寂(さび)しい", src:"lonely / lonesome", pos:"adj", gender:null,
     note:"い-adjective. Also written さみしい.\n寂(さび)しくなる = to become lonely.",
     example:"A: 田舎(いなか)は寂(さび)しくないですか？\nB: 時々(ときどき)寂(さび)しいです。\nA: そうですか。よかったですね。\nB: はい、いい経験(けいけん)でした。",
     exampleSrc:"A: Aren't you lonely in the countryside?\nB: Sometimes I am.\nA: Is that so? That is good.\nB: Yes, it was a good experience.",
     funFact:"寂(さび)しい (寂しい) is related to the aesthetic concept of わびさび (wabi-sabi), which finds beauty in loneliness and impermanence. The feeling of 寂(さび)しい in Japanese is not always negative. It can be a poetic, contemplative solitude. The phrase ひとりで寂(さび)しい contrasts with ひとりで楽(たの)しい."},

    {type:"teach", trg:"ほっとする", src:"to feel relieved", pos:"verb", gender:null,
     note:"Onomatopoeic: ほっ = sigh of relief.\n試験(しけん)が終(お)わってほっとした = Relieved the exam is over.",
     example:"A: 無事(ぶじ)に着(つ)きました。\nB: ほっとしました。\nA: また行(い)きたいですか？\nB: はい、ぜひ行(い)きたいです。",
     exampleSrc:"A: I arrived safely.\nB: I am relieved.\nA: Do you want to go again?\nB: Yes, I definitely want to go.",
     funFact:"ほっとする captures the physical sensation of a tension release, like exhaling after holding your breath. The ほっ is the sound of that relieved sigh. Japanese has many onomatopoeic emotion words: わくわく (excited), どきどき (heart pounding), いらいら (irritated)."},

    {type:"teach", trg:"わくわくする", src:"to be excited / to be thrilled", pos:"verb", gender:null,
     note:"Onomatopoeic. Positive anticipation.\nわくわくする気持(きも)ち = exciting feeling.",
     example:"A: 明日(あした)の旅行(りょこう)が楽(たの)しみです。\nB: わくわくしますね。\nA: どのくらいかかりましたか？\nB: だいたい二時間(にじかん)ぐらいです。",
     exampleSrc:"A: I am looking forward to tomorrow's trip.\nB: It is exciting, isn't it?\nA: How long did it take?\nB: About two hours.",
     funFact:"わくわく is one of Japan's many ぎおんご (mimetic words). The わく sound suggests something bubbling up inside with anticipation. Children's magazines often use わくわく in titles. わくわくするぼうけん (exciting adventure) is a classic phrase in children's books and games."},

    {type:"teach", trg:"どきどきする", src:"heart pounding / nervous excitement", pos:"verb", gender:null,
     note:"Onomatopoeic: どき = heartbeat sound.\nCan be positive (romance) or negative (anxiety).",
     example:"A: 発表(はっぴょう)の前(まえ)はどきどきします。\nB: 私(わたし)もです。\nA: 難(むずか)しかったですか？\nB: 最初(さいしょ)は難(むずか)しかったですが、慣(な)れました。",
     exampleSrc:"A: My heart pounds before presentations.\nB: Mine too.\nA: Was it difficult?\nB: It was difficult at first, but I got used to it.",
     funFact:"どきどき mimics a rapid heartbeat. Unlike English, it covers BOTH romantic fluttering and nervous anxiety. 初(はつ)デートでどきどきした (my heart pounded on the first date) and 試験(しけん)前(まえ)でどきどきした (nervous before the exam) use the same word. Context reveals the type of excitement."},

    {type:"teach", trg:"いらいらする", src:"to be irritated / to be annoyed", pos:"verb", gender:null,
     note:"Onomatopoeic. いらいらの原因(げんいん) = cause of irritation.\nいらいらしないで = Don't be annoyed.",
     example:"A: 電車(でんしゃ)が遅(おく)れていらいらします。\nB: しかたがないですね。\nA: おすすめですか？\nB: はい、ぜひ試(ため)してみてください。",
     exampleSrc:"A: I am irritated because the train is delayed.\nB: It cannot be helped.\nA: Do you recommend it?\nB: Yes, please try it.",
     funFact:"いらいら expresses a prickly, agitated feeling. The いら sound suggests something itching or stinging inside. Japanese has a rich vocabulary for negative feelings through onomatopoeia: むかむか (sick/disgusted), もやもや (unclear/unsettled), うずうず (restless/itching to act)."},

    {type:"mc", q:"Which word describes the bittersweet longing for fond past memories?", opts:["懐(なつ)かしい","悔(くや)しい","恥(はず)かしい","寂(さび)しい"], ans:"懐(なつ)かしい",
     hint:"This uniquely Japanese adjective combines warm fondness with gentle longing for the past."},

    {type:"fb", s:"無事(ぶじ)に着(つ)きました。{1}しました。\n(I arrived safely. I am relieved.)", a:"ほっと", opts:["ほっと","わくわく","どきどき","いらいら"], sSrc:"I arrived safely. I am relieved.",
     hint:"This onomatopoeic word captures the physical sigh of tension release."},

    {type:"match", pairs:[
      {trg:"わくわく", src:"excited/thrilled"},
      {trg:"どきどき", src:"heart pounding"},
      {trg:"いらいら", src:"irritated"},
      {trg:"ほっとする", src:"relieved"}
    ]},

    {type:"mc", q:"What makes 悔(くや)しい different from just 'sad'?", opts:["It specifically describes frustration from defeat when you could have done better","It is a polite word for sadness","It means extremely sad","It describes physical pain"], ans:"It specifically describes frustration from defeat when you could have done better",
     hint:"This emotion is considered positive because it drives self-improvement."}
  ]
};
export default BATCH10_L1;
