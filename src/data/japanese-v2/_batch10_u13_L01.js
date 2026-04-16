// Batch 10 – Unit 13 (B1.1 Experience): Emotions & Feelings
const BATCH10_L1 = {
  id:"jav2_u13l_b10_1", title:"かんじょう", icon:"💭", xp:15, board:true,
  steps:[
    {type:"intro", title:"かんじょう",
     desc:"Expand your emotional vocabulary beyond basic feelings. Japanese has nuanced words for emotional states that reflect the culture's emotional sensitivity.",
     goals:["Express complex emotions","Describe emotional states in detail","Understand Japanese emotional vocabulary nuances"]},

    {type:"teach", trg:"なつかしい", src:"nostalgic / fondly missed", pos:"adj", gender:null,
     note:"い-adjective. なつかしい！ = How nostalgic!\nEvokes warm memories of the past.",
     example:"A: このうた、なつかしいですね。\nB: こどものころよくきいていました。",
     exampleSrc:"A: This song is nostalgic.\nB: I listened to it a lot as a child.",
     funFact:"なつかしい is one of the most culturally rich Japanese adjectives. It expresses a bittersweet longing for the past combined with warm fondness. There is no exact English equivalent. Japanese people say なつかしい when encountering old songs, foods, places, or friends from the past."},

    {type:"teach", trg:"くやしい", src:"frustrated / vexing / mortifying", pos:"adj", gender:null,
     note:"い-adjective. Used when you lost or failed.\nくやしい！もういっかい！ = Frustrating! One more time!",
     example:"A: しあいにまけてくやしいです。\nB: つぎがんばりましょう。",
     exampleSrc:"A: I am frustrated about losing the match.\nB: Let's try harder next time.",
     funFact:"くやしい (悔しい) specifically describes the burning frustration of defeat or failure when you know you could have done better. Japanese athletes often cry and say くやしい after losing. It is considered a positive emotion because it drives improvement. くやしなみだ means 'tears of frustration.'"},

    {type:"teach", trg:"はずかしい", src:"embarrassed / shy / ashamed", pos:"adj", gender:null,
     note:"い-adjective. はずかしがりや = shy person.\nCovers both embarrassment and shyness.",
     example:"A: にほんごではなすのがはずかしいです。\nB: だいじょうぶ、じょうずですよ。",
     exampleSrc:"A: I am embarrassed to speak Japanese.\nB: It is fine, you are good.",
     funFact:"はずかしい covers a wide range from mild shyness to deep shame. Japanese culture values modesty, so feeling はずかしい about being praised is normal and expected. The related word はじ (shame) is central to Japanese social psychology. 'Shame culture' is a commonly discussed concept in Japanese studies."},

    {type:"teach", trg:"さびしい", src:"lonely / lonesome", pos:"adj", gender:null,
     note:"い-adjective. Also written さみしい.\nさびしくなる = to become lonely.",
     example:"A: いなかはさびしくないですか？\nB: ときどきさびしいです。",
     exampleSrc:"A: Aren't you lonely in the countryside?\nB: Sometimes I am.",
     funFact:"さびしい (寂しい) is related to the aesthetic concept of わびさび (wabi-sabi), which finds beauty in loneliness and impermanence. The feeling of さびしい in Japanese is not always negative. It can be a poetic, contemplative solitude. The phrase ひとりでさびしい contrasts with ひとりでたのしい."},

    {type:"teach", trg:"ほっとする", src:"to feel relieved", pos:"verb", gender:null,
     note:"Onomatopoeic: ほっ = sigh of relief.\nしけんがおわってほっとした = Relieved the exam is over.",
     example:"A: ぶじにつきました。\nB: ほっとしました。",
     exampleSrc:"A: I arrived safely.\nB: I am relieved.",
     funFact:"ほっとする captures the physical sensation of a tension release, like exhaling after holding your breath. The ほっ is the sound of that relieved sigh. Japanese has many onomatopoeic emotion words: わくわく (excited), どきどき (heart pounding), いらいら (irritated)."},

    {type:"teach", trg:"わくわくする", src:"to be excited / to be thrilled", pos:"verb", gender:null,
     note:"Onomatopoeic. Positive anticipation.\nわくわくするきもち = exciting feeling.",
     example:"A: あしたのりょこうがたのしみです。\nB: わくわくしますね。",
     exampleSrc:"A: I am looking forward to tomorrow's trip.\nB: It is exciting, isn't it?",
     funFact:"わくわく is one of Japan's many ぎおんご (mimetic words). The わく sound suggests something bubbling up inside with anticipation. Children's magazines often use わくわく in titles. わくわくするぼうけん (exciting adventure) is a classic phrase in children's books and games."},

    {type:"teach", trg:"どきどきする", src:"heart pounding / nervous excitement", pos:"verb", gender:null,
     note:"Onomatopoeic: どき = heartbeat sound.\nCan be positive (romance) or negative (anxiety).",
     example:"A: はっぴょうのまえはどきどきします。\nB: わたしもです。",
     exampleSrc:"A: My heart pounds before presentations.\nB: Mine too.",
     funFact:"どきどき mimics a rapid heartbeat. Unlike English, it covers BOTH romantic fluttering and nervous anxiety. はつデートでどきどきした (my heart pounded on the first date) and しけんまえでどきどきした (nervous before the exam) use the same word. Context reveals the type of excitement."},

    {type:"teach", trg:"いらいらする", src:"to be irritated / to be annoyed", pos:"verb", gender:null,
     note:"Onomatopoeic. いらいらのげんいん = cause of irritation.\nいらいらしないで = Don't be annoyed.",
     example:"A: でんしゃがおくれていらいらします。\nB: しかたがないですね。",
     exampleSrc:"A: I am irritated because the train is delayed.\nB: It cannot be helped.",
     funFact:"いらいら expresses a prickly, agitated feeling. The いら sound suggests something itching or stinging inside. Japanese has a rich vocabulary for negative feelings through onomatopoeia: むかむか (sick/disgusted), もやもや (unclear/unsettled), うずうず (restless/itching to act)."},

    {type:"mc", q:"Which word describes the bittersweet longing for fond past memories?", opts:["なつかしい","くやしい","はずかしい","さびしい"], ans:"なつかしい",
     hint:"This uniquely Japanese adjective combines warm fondness with gentle longing for the past."},

    {type:"fb", s:"ぶじにつきました。{1}しました。\n(I arrived safely. I am relieved.)", a:"ほっと", opts:["ほっと","わくわく","どきどき","いらいら"], sSrc:"I arrived safely. I am relieved.",
     hint:"This onomatopoeic word captures the physical sigh of tension release."},

    {type:"match", pairs:[
      {trg:"わくわく", src:"excited/thrilled"},
      {trg:"どきどき", src:"heart pounding"},
      {trg:"いらいら", src:"irritated"},
      {trg:"ほっとする", src:"relieved"}
    ]},

    {type:"mc", q:"What makes くやしい different from just 'sad'?", opts:["It specifically describes frustration from defeat when you could have done better","It is a polite word for sadness","It means extremely sad","It describes physical pain"], ans:"It specifically describes frustration from defeat when you could have done better",
     hint:"This emotion is considered positive because it drives self-improvement."}
  ]
};
export default BATCH10_L1;
