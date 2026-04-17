// Batch 8 – Unit 14 (A2.2 Opinions): Emotions & Feelings
const BATCH8_L1 = {
  id:"jav2_u14l_b8_1", title:"きもちとかんじょう", icon:"😊", xp:15, board:true,
  steps:[
    {type:"intro", title:"きもちとかんじょう",
     desc:"Expand your emotional vocabulary beyond basic adjectives. These words let you express nuanced feelings and emotional states essential for meaningful conversations.",
     goals:["Express a range of emotions precisely","Describe emotional states and reactions","Use emotion words in opinion statements"]},

    {type:"teach", trg:"きもち", src:"feeling / mood / sensation", pos:"noun", gender:null,
     note:"Kanji: 気持ち. きもちがいい = feels good.\nきもちわるい = feels bad/disgusting.",
     example:"A: きょうのきもちはどうですか？\nB: とてもいいきもちです。\nA: 楽(たの)しみですね。\nB: はい、今(いま)からわくわくしています。",
     exampleSrc:"A: How are you feeling today?\nB: I am feeling very good.\nA: That is exciting.\nB: Yes, I am already excited.",
     funFact:"きもち combines 気 (spirit/energy) and 持つ (to hold). Japanese people frequently check each other's きもち as an expression of care. きもちがいい (feels pleasant) and きもちわるい (feels unpleasant) are daily expressions. きもちだけ means 'just the thought counts.'"},

    {type:"teach", trg:"なつかしい", src:"nostalgic / brings back memories", pos:"adj", gender:null,
     note:"I-adjective. なつかしい！= How nostalgic!\nNo direct English equivalent in one word.",
     example:"A: このうたをきくとなつかしいきもちになります。\nB: こどものころのうたですか？\nA: いい思(おも)い出(で)ですね。\nB: はい、一生(いっしょう)忘(わす)れません。",
     exampleSrc:"A: When I hear this song, I feel nostalgic.\nB: Is it a song from your childhood?\nA: That is a nice memory.\nB: Yes, I will never forget it.",
     funFact:"なつかしい is one of the most uniquely Japanese emotions. It describes a warm, fond remembrance of the past without the sadness that 'nostalgia' can carry in English. Japanese people say なつかしい when they encounter old songs, childhood snacks, or childhood friends."},

    {type:"teach", trg:"くやしい", src:"frustrating / mortifying / bitter (with regret)", pos:"adj", gender:null,
     note:"I-adjective. The frustration of losing or failing when you tried hard.\nくやしなみだ = tears of frustration.",
     example:"A: しあいにまけてくやしいです。\nB: よくがんばりましたよ。つぎがあります。\nA: どうでしたか？\nB: とても良(よ)かったです。",
     exampleSrc:"A: I lost the match and I am frustrated.\nB: You did your best. There is next time.\nA: How was it?\nB: It was very good.",
     funFact:"くやしい expresses the specific frustration of having given your best but still failing. Athletes often cry くやしなみだ (tears of frustration). It is considered a positive emotion because it shows you cared deeply. The phrase くやしいけどがんばる (frustrated but I will keep trying) is admired."},

    {type:"teach", trg:"はずかしい", src:"embarrassing / shy / ashamed", pos:"adj", gender:null,
     note:"I-adjective. はずかしがりや = shy person.\nCovers both 'embarrassed' and 'shy.'",
     example:"A: みんなのまえではなすのがはずかしいです。\nB: れんしゅうすればだいじょうぶですよ。\nA: いつですか？\nB: 去年(きょねん)の夏(なつ)でした。",
     exampleSrc:"A: I am embarrassed to speak in front of everyone.\nB: If you practice, you will be fine.\nA: When was it?\nB: It was last summer.",
     funFact:"はずかしい covers a wide emotional range from mild shyness to deep shame. Japanese culture has a strong concept of はじ (shame). するのがはずかしい (being embarrassed to do something) holds many people back from speaking foreign languages. はずかしがらないで (do not be shy) is a common encouragement."},

    {type:"teach", trg:"さびしい", src:"lonely / missing someone", pos:"adj", gender:null,
     note:"I-adjective. Also written さみしい.\nさびしくなる = to become lonely.",
     example:"A: ともだちがひっこしてさびしいです。\nB: でもれんらくはとれるでしょう？\nA: それはいいですね。\nB: はい、とても楽(たの)しかったです。",
     exampleSrc:"A: My friend moved away and I am lonely.\nB: But you can still stay in touch, right?\nA: That is nice.\nB: Yes, it was very fun.",
     funFact:"さびしい and さみしい are both accepted pronunciations. The nuance differs from English 'lonely': さびしい can describe a landscape (さびしいかぜけい, desolate scenery) or a situation (ひとりでさびしい, lonely being alone). It connects to わびさび aesthetics, where solitude has beauty."},

    {type:"mc", q:"What emotion does なつかしい describe?", opts:["Warm, fond nostalgia for the past","Deep sadness","Anger at injustice","Physical pain"], ans:"Warm, fond nostalgia for the past",
     hint:"This uniquely Japanese feeling is triggered by encountering things from your p...."},

    {type:"teach", trg:"すっきりする", src:"to feel refreshed / cleared up", pos:"verb", gender:null,
     note:"Onomatopoeic origin. すっきりした = I feel refreshed.\nBoth physical and mental refreshment.",
     example:"A: シャワーをあびてすっきりしました。\nB: よかったですね。\nA: そうですか。よかったですね。\nB: はい、いい経験(けいけん)でした。",
     exampleSrc:"A: I took a shower and feel refreshed.\nB: That is good.\nA: Is that so? That is good.\nB: Yes, it was a good experience.",
     funFact:"すっきり is a beloved Japanese concept. It describes the clean, clear feeling after a shower, after solving a problem, after decluttering (KonMari method!), or after confessing your feelings. Japanese commercials for drinks, cleaning products, and medicine all promise すっきり."},

    {type:"teach", trg:"もやもやする", src:"to feel uneasy / to feel unsettled", pos:"verb", gender:null,
     note:"Onomatopoeic. The opposite of すっきり.\nこころがもやもやする = heart feels cloudy.",
     example:"A: なんかもやもやしています。\nB: なにかなやみがありますか？\nA: また行(い)きたいですか？\nB: はい、ぜひ行(い)きたいです。",
     exampleSrc:"A: I feel unsettled somehow.\nB: Do you have something worrying you?\nA: Do you want to go again?\nB: Yes, I definitely want to go.",
     funFact:"もやもや perfectly captures the foggy, unclear unease that is hard to articulate. Japanese has many of these mimetic words (ぎたいご) for emotions. もやもや can be physical (foggy weather) or emotional (unresolved feelings). Solving a もやもや gives you すっきり."},

    {type:"teach", trg:"わくわくする", src:"to feel excited / thrilled / eager", pos:"verb", gender:null,
     note:"Onomatopoeic. わくわくする！= How exciting!\nPositive anticipation.",
     example:"A: あしたのりょこうがわくわくします。\nB: どこにいくんですか？\nA: どのくらいかかりましたか？\nB: だいたい二時間(にじかん)ぐらいです。",
     exampleSrc:"A: I am excited about tomorrow's trip.\nB: Where are you going?\nA: How long did it take?\nB: About two hours.",
     funFact:"わくわく is pure positive excitement and anticipation. Japanese advertising uses わくわく constantly. ディズニーランドでわくわく (excited at Disneyland), しんせいひんにわくわく (excited about a new product). It is one of the first ぎたいご (mimetic words) foreigners learn."},

    {type:"teach", trg:"ほっとする", src:"to feel relieved", pos:"verb", gender:null,
     note:"From the sigh of relief: ほっ.\nほっとした = I was relieved.",
     example:"A: テストにうかってほっとしました。\nB: おめでとうございます。\nA: 難(むずか)しかったですか？\nB: 最初(さいしょ)は難(むずか)しかったですが、慣(な)れました。",
     exampleSrc:"A: I passed the test and felt relieved.\nB: Congratulations.\nA: Was it difficult?\nB: It was difficult at first, but I got used to it.",
     funFact:"ほっとする mimics the exhaled breath of relief. It is used for everything from passing exams to finding lost keys. ほっとする ばしょ (a place where you feel at ease) and ほっとする あじ (a comforting taste) extend the concept to environments and food."},

    {type:"teach", trg:"じーんとする", src:"to be deeply moved / to feel touched", pos:"verb", gender:null,
     note:"Onomatopoeic. むねがじーんとする = my chest feels moved.\nA warm emotional response.",
     example:"A: そのはなしをきいてじーんとしました。\nB: すてきなはなしですよね。\nA: おすすめですか？\nB: はい、ぜひ試(ため)してみてください。",
     exampleSrc:"A: I was deeply moved hearing that story.\nB: It is a wonderful story, is it not?\nA: Do you recommend it?\nB: Yes, please try it.",
     funFact:"じーんとする describes the warm tingling in your chest when you are emotionally touched. It happens at graduation speeches, heartwarming news stories, and anime climax scenes. Japanese media aims for じーん moments. The feeling is positive, like being moved to tears of joy."},

    {type:"fb", s:"しあいにまけて{1}です。\n(I lost the match and I am frustrated.)", a:"くやしい", opts:["くやしい","はずかしい","さびしい","こわい"], sSrc:"I lost the match and I am frustrated.",
     hint:"This feeling specifically describes the bitter frustration of failing despite trying your best."},

    {type:"teach", trg:"うんざりする", src:"to be fed up / to be sick of", pos:"verb", gender:null,
     note:"Negative emotion of tiredness and disgust.\nまいにちのこんざつにうんざりする = fed up with daily crowds.",
     example:"A: まいにちざんぎょうでうんざりしています。\nB: やすみがひつようですね。\nA: 一緒(いっしょ)に行(い)きませんか？\nB: いいですね。行(い)きましょう。",
     exampleSrc:"A: I am fed up with overtime every day.\nB: You need a break.\nA: Shall we go together?\nB: That sounds good. Let's go.",
     funFact:"うんざり is stronger than あきる (to get bored). It implies accumulated frustration. Japanese workers often feel うんざり about まんいんでんしゃ (packed trains) and さーびすざんぎょう (unpaid overtime). Expressing うんざり is socially acceptable as shared complaint."},

    {type:"teach", trg:"しみじみ", src:"deeply / keenly / with heartfelt emotion", pos:"adv", gender:null,
     note:"しみじみかんじる = to feel deeply.\nしみじみとした = heartfelt/poignant.",
     example:"A: あきのけしきをみてしみじみかんじました。\nB: にほんのあきはきれいですよね。\nA: どこがおすすめですか？\nB: 京都(きょうと)がおすすめです。",
     exampleSrc:"A: Seeing the autumn scenery, I felt it deeply.\nB: Japanese autumn is beautiful, is it not?\nA: Where do you recommend?\nB: I recommend Kyoto.",
     funFact:"しみじみ describes deep, quiet contemplation of feelings. It connects to わびさび aesthetics. Drinking tea while watching rain and feeling しみじみ is a quintessentially Japanese moment. The word appears frequently in haiku and literary contexts."},

    {type:"match", pairs:[{trg:"わくわく",src:"excited/thrilled"},{trg:"もやもや",src:"uneasy/unsettled"},{trg:"すっきり",src:"refreshed/cleared"},{trg:"ほっと",src:"relieved"},{trg:"じーん",src:"deeply moved"}],
     hint:"Match each mimetic emotion word with its English meaning."},

    {type:"mc", q:"What is the opposite feeling of すっきりする?", opts:["もやもやする","わくわくする","ほっとする","じーんとする"], ans:"もやもやする",
     hint:"If すっきり is the clear, refreshed feeling, this is the foggy, unsettled one."},

    {type:"fb", s:"りょこうが{1}します。\n(I am excited about the trip.)", a:"わくわく", opts:["わくわく","もやもや","うんざり","ほっと"], sSrc:"I am excited about the trip.",
     hint:"This onomatopoeic word expresses positive excitement and eager anticipation."},

    {type:"mc", q:"What does しみじみ describe?", opts:["Deep, quiet, heartfelt contemplation","Loud excitement","Physical pain","Sudden surprise"], ans:"Deep, quiet, heartfelt contemplation",
     hint:"This word connects to Japanese aesthetic concepts of q... appreciation."}
  ]
};
export default BATCH8_L1;
