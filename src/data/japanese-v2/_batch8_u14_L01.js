// Batch 8 – Unit 14 (A2.2 Opinions): Emotions & Feelings
const BATCH8_L1 = {
  id:"jav2_u14l_b8_1", title:"気持(きも)ちと感情(かんじょう)", icon:"😊", xp:15, board:true,
  steps:[
    {type:"intro", title:"気持(きも)ちと感情(かんじょう)",
     desc:"Expand your emotional vocabulary beyond basic adjectives. These words let you express nuanced feelings and emotional states essential for meaningful conversations.",
     goals:["Express a range of emotions precisely","Describe emotional states and reactions","Use emotion words in opinion statements"]},

    {type:"teach", trg:"気持(きも)ち", src:"feeling / mood / sensation", pos:"noun", gender:null,
     note:"Kanji: 気持ち. 気持(きも)ちがいい = feels good.\n気持(きも)ちわるい = feels bad/disgusting.",
     example:"A: 今日(きょう)の気持(きも)ちはどうですか？\nB: とてもいい気持(きも)ちです。\nA: 楽(たの)しみですね。\nB: はい、今(いま)からわくわくしています。",
     exampleSrc:"A: How are you feeling today?\nB: I am feeling very good.\nA: That is exciting.\nB: Yes, I am already excited.",
     funFact:"きもち combines 気 (spirit/energy) and 持つ (to hold). Japanese people frequently check each other's きもち as an expression of care. きもちがいい (feels pleasant) and きもちわるい (feels unpleasant) are daily expressions. きもちだけ means 'just the thought counts.'"},

    {type:"teach", trg:"懐(なつ)かしい", src:"nostalgic / brings back memories", pos:"adj", gender:null,
     note:"I-adjective. 懐(なつ)かしい！= How nostalgic!\nNo direct English equivalent in one word.",
     example:"A: この歌(うた)を聞(き)くと懐(なつ)かしい気持(きも)ちになります。\nB: 子供(こども)のころの歌(うた)ですか？\nA: いい思(おも)い出(で)ですね。\nB: はい、一生(いっしょう)忘(わす)れません。",
     exampleSrc:"A: When I hear this song, I feel nostalgic.\nB: Is it a song from your childhood?\nA: That is a nice memory.\nB: Yes, I will never forget it.",
     funFact:"なつかしい is one of the most uniquely Japanese emotions. It describes a warm, fond remembrance of the past without the sadness that 'nostalgia' can carry in English. Japanese people say なつかしい when they encounter old songs, childhood snacks, or childhood friends."},

    {type:"teach", trg:"悔(くや)しい", src:"frustrating / mortifying / bitter (with regret)", pos:"adj", gender:null,
     note:"I-adjective. The frustration of losing or failing when you tried hard.\n悔(くや)しなみだ = tears of frustration.",
     example:"A: 試合(しあい)に負(ま)けて悔(くや)しいです。\nB: よく頑張(がんば)りましたよ。次(つぎ)があります。\nA: どうでしたか？\nB: とても良(よ)かったです。",
     exampleSrc:"A: I lost the match and I am frustrated.\nB: You did your best. There is next time.\nA: How was it?\nB: It was very good.",
     funFact:"くやしい expresses the specific frustration of having given your best but still failing. Athletes often cry 悔(くや)しなみだ (tears of frustration). It is considered a positive emotion because it shows you cared deeply. The phrase 悔(くや)しいけど頑張(がんば)る (frustrated but I will keep trying) is admired."},

    {type:"teach", trg:"恥(はずか)しい", src:"embarrassing / shy / ashamed", pos:"adj", gender:null,
     note:"I-adjective. 恥(はずか)しがりや = shy person.\nCovers both 'embarrassed' and 'shy.'",
     example:"A: みんなの前(まえ)で話(はな)すのが恥(はずか)しいです。\nB: 練習(れんしゅう)すれば大丈夫(だいじょうぶ)ですよ。\nA: いつですか？\nB: 去年(きょねん)の夏(なつ)でした。",
     exampleSrc:"A: I am embarrassed to speak in front of everyone.\nB: If you practice, you will be fine.\nA: When was it?\nB: It was last summer.",
     funFact:"はずかしい covers a wide emotional range from mild shyness to deep shame. Japanese culture has a strong concept of 恥(は)じ (shame). するのが恥(はずか)しい (being embarrassed to do something) holds many people back from speaking foreign languages. 恥(はずか)しがらないで (do not be shy) is a common encouragement."},

    {type:"teach", trg:"寂(さび)しい", src:"lonely / missing someone", pos:"adj", gender:null,
     note:"I-adjective. Also written さみしい.\n寂(さび)しくなる = to become lonely.",
     example:"A: 友達(ともだち)が引(ひ)っ越(こ)して寂(さび)しいです。\nB: でも連絡(れんらく)はとれるでしょう？\nA: それはいいですね。\nB: はい、とても楽(たの)しかったです。",
     exampleSrc:"A: My friend moved away and I am lonely.\nB: But you can still stay in touch, right?\nA: That is nice.\nB: Yes, it was very fun.",
     funFact:"さびしい and さみしい are both accepted pronunciations. The nuance differs from English 'lonely': さびしい can describe a landscape (さびしい風景(ふうけい), desolate scenery) or a situation (一人(ひとり)で寂(さび)しい, lonely being alone). It connects to わびさび aesthetics, where solitude has beauty."},

    {type:"mc", q:"What emotion does 懐(なつ)かしい describe?", opts:["Warm, fond nostalgia for the past","Deep sadness","Anger at injustice","Physical pain"], ans:"Warm, fond nostalgia for the past",
     hint:"This uniquely Japanese feeling is triggered by encountering things from your p...."},

    {type:"teach", trg:"すっきりする", src:"to feel refreshed / cleared up", pos:"verb", gender:null,
     note:"Onomatopoeic origin. すっきりした = I feel refreshed.\nBoth physical and mental refreshment.",
     example:"A: シャワーを浴(あ)びてすっきりしました。\nB: よかったですね。\nA: そうですか。よかったですね。\nB: はい、いい経験(けいけん)でした。",
     exampleSrc:"A: I took a shower and feel refreshed.\nB: That is good.\nA: Is that so? That is good.\nB: Yes, it was a good experience.",
     funFact:"すっきり is a beloved Japanese concept. It describes the clean, clear feeling after a shower, after solving a problem, after decluttering (KonMari method!), or after confessing your feelings. Japanese commercials for drinks, cleaning products, and medicine all promise すっきり."},

    {type:"teach", trg:"もやもやする", src:"to feel uneasy / to feel unsettled", pos:"verb", gender:null,
     note:"Onomatopoeic. The opposite of すっきり.\n心(こころ)がもやもやする = heart feels cloudy.",
     example:"A: なんかもやもやしています。\nB: 何(なに)か悩(なや)みがありますか？\nA: また行(い)きたいですか？\nB: はい、ぜひ行(い)きたいです。",
     exampleSrc:"A: I feel unsettled somehow.\nB: Do you have something worrying you?\nA: Do you want to go again?\nB: Yes, I definitely want to go.",
     funFact:"もやもや perfectly captures the foggy, unclear unease that is hard to articulate. Japanese has many of these mimetic words (ぎたいご) for emotions. もやもや can be physical (foggy weather) or emotional (unresolved feelings). Solving a もやもや gives you すっきり."},

    {type:"teach", trg:"わくわくする", src:"to feel excited / thrilled / eager", pos:"verb", gender:null,
     note:"Onomatopoeic. わくわくする！= How exciting!\nPositive anticipation.",
     example:"A: 明日(あした)の旅行(りょこう)がわくわくします。\nB: どこに行(い)くんですか？\nA: どのくらいかかりましたか？\nB: だいたい二時間(にじかん)ぐらいです。",
     exampleSrc:"A: I am excited about tomorrow's trip.\nB: Where are you going?\nA: How long did it take?\nB: About two hours.",
     funFact:"わくわく is pure positive excitement and anticipation. Japanese advertising uses わくわく constantly. ディズニーランドでわくわく (excited at Disneyland), 新製品(しんせいひん)にわくわく (excited about a new product). It is one of the first ぎたいご (mimetic words) foreigners learn."},

    {type:"teach", trg:"ほっとする", src:"to feel relieved", pos:"verb", gender:null,
     note:"From the sigh of relief: ほっ.\nほっとした = I was relieved.",
     example:"A: テストに受(う)かってほっとしました。\nB: おめでとうございます。\nA: 難(むずか)しかったですか？\nB: 最初(さいしょ)は難(むずか)しかったですが、慣(な)れました。",
     exampleSrc:"A: I passed the test and felt relieved.\nB: Congratulations.\nA: Was it difficult?\nB: It was difficult at first, but I got used to it.",
     funFact:"ほっとする mimics the exhaled breath of relief. It is used for everything from passing exams to finding lost keys. ほっとする場所(ばしょ) (a place where you feel at ease) and ほっとする味(あじ) (a comforting taste) extend the concept to environments and food."},

    {type:"teach", trg:"じーんとする", src:"to be deeply moved / to feel touched", pos:"verb", gender:null,
     note:"Onomatopoeic. 胸(むね)がじーんとする = my chest feels moved.\nA warm emotional response.",
     example:"A: その話(はなし)を聞(き)いてじーんとしました。\nB: 素敵(すてき)な話(はなし)ですよね。\nA: おすすめですか？\nB: はい、ぜひ試(ため)してみてください。",
     exampleSrc:"A: I was deeply moved hearing that story.\nB: It is a wonderful story, is it not?\nA: Do you recommend it?\nB: Yes, please try it.",
     funFact:"じーんとする describes the warm tingling in your chest when you are emotionally touched. It happens at graduation speeches, heartwarming news stories, and anime climax scenes. Japanese media aims for じーん moments. The feeling is positive, like being moved to tears of joy."},

    {type:"fb", s:"試合(しあい)に負(ま)けて{1}です。\n(I lost the match and I am frustrated.)", a:"悔(くや)しい", opts:["悔(くや)しい","恥(はずか)しい","寂(さび)しい","怖(こわ)い"], sSrc:"I lost the match and I am frustrated.",
     hint:"This feeling specifically describes the bitter frustration of failing despite trying your best."},

    {type:"teach", trg:"うんざりする", src:"to be fed up / to be sick of", pos:"verb", gender:null,
     note:"Negative emotion of tiredness and disgust.\n毎日(まいにち)の混雑(こんざつ)にうんざりする = fed up with daily crowds.",
     example:"A: 毎日(まいにち)残業(ざんぎょう)でうんざりしています。\nB: 休(やす)みが必要(ひつよう)ですね。\nA: 一緒(いっしょ)に行(い)きませんか？\nB: いいですね。行(い)きましょう。",
     exampleSrc:"A: I am fed up with overtime every day.\nB: You need a break.\nA: Shall we go together?\nB: That sounds good. Let's go.",
     funFact:"うんざり is stronger than 飽(あ)きる (to get bored). It implies accumulated frustration. Japanese workers often feel うんざり about 満員電車(まんいんでんしゃ) (packed trains) and サービス残業(ざんぎょう) (unpaid overtime). Expressing うんざり is socially acceptable as shared complaint."},

    {type:"teach", trg:"しみじみ", src:"deeply / keenly / with heartfelt emotion", pos:"adv", gender:null,
     note:"しみじみ感(かん)じる = to feel deeply.\nしみじみとした = heartfelt/poignant.",
     example:"A: 秋(あき)の景色(けしき)を見(み)てしみじみ感(かん)じました。\nB: 日本(にほん)の秋(あき)はきれいですよね。\nA: どこがおすすめですか？\nB: 京都(きょうと)がおすすめです。",
     exampleSrc:"A: Seeing the autumn scenery, I felt it deeply.\nB: Japanese autumn is beautiful, is it not?\nA: Where do you recommend?\nB: I recommend Kyoto.",
     funFact:"しみじみ describes deep, quiet contemplation of feelings. It connects to わびさび aesthetics. Drinking tea while watching rain and feeling しみじみ is a quintessentially Japanese moment. The word appears frequently in haiku and literary contexts."},

    {type:"match", pairs:[{trg:"わくわく",src:"excited/thrilled"},{trg:"もやもや",src:"uneasy/unsettled"},{trg:"すっきり",src:"refreshed/cleared"},{trg:"ほっと",src:"relieved"},{trg:"じーん",src:"deeply moved"}],
     hint:"Match each mimetic emotion word with its English meaning."},

    {type:"mc", q:"What is the opposite feeling of すっきりする?", opts:["もやもやする","わくわくする","ほっとする","じーんとする"], ans:"もやもやする",
     hint:"If すっきり is the clear, refreshed feeling, this is the foggy, unsettled one."},

    {type:"fb", s:"旅行(りょこう)が{1}します。\n(I am excited about the trip.)", a:"わくわく", opts:["わくわく","もやもや","うんざり","ほっと"], sSrc:"I am excited about the trip.",
     hint:"This onomatopoeic word expresses positive excitement and eager anticipation."},

    {type:"mc", q:"What does しみじみ describe?", opts:["Deep, quiet, heartfelt contemplation","Loud excitement","Physical pain","Sudden surprise"], ans:"Deep, quiet, heartfelt contemplation",
     hint:"This word connects to Japanese aesthetic concepts of q... appreciation."}
  ]
};
export default BATCH8_L1;
