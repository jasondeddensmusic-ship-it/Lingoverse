// Batch 11 – Unit 14 (A2.2 Opinions): Emotion & Feeling Adjectives
const BATCH11_L1 = {
  id:"jav2_u14l_b11_1", title:"気持(きも)ちのことば", icon:"😊", xp:15, board:true,
  steps:[
    {type:"intro", title:"気持(きも)ちのことば",
     desc:"Learn adjectives for emotions and feelings. Japanese has specific adjective forms for expressing your own feelings vs describing others' feelings.",
     goals:["Express emotions with i-adjectives and na-adjectives","Distinguish between own feelings and others' feelings","Use emotion words in opinion statements"]},

    {type:"teach", trg:"嬉(うれ)しい", src:"happy / glad", pos:"adj", gender:null,
     note:"I-adjective. For personal joy or happiness about something.\n嬉(うれ)しそう = looks happy (about others).",
     example:"A: 試験(しけん)に合格(ごうかく)しました！\nB: おめでとう！嬉(うれ)しいですね。\nA: そうですか。よかったですね。\nB: はい、いい経験(けいけん)でした。",
     exampleSrc:"A: I passed the exam!\nB: Congratulations! You must be happy.\nA: Is that so? That is good.\nB: Yes, it was a good experience.",
     funFact:"嬉(うれ)しい describes happiness about a specific event or outcome, while 幸(しあわ)せ describes general life happiness. 嬉(うれ)し涙(なみだ) (happy tears) is a beautiful compound word. Japanese culture values containing emotions, so saying 嬉(うれ)しい openly shows genuine closeness with the listener."},

    {type:"teach", trg:"悲(かな)しい", src:"sad", pos:"adj", gender:null,
     note:"I-adjective. Deep sadness. 悲(かな)しそう = looks sad.\n悲(かな)しみ = sadness (noun form).",
     example:"A: ペットが死(し)んでしまいました。\nB: それは悲(かな)しいですね。\nA: また行(い)きたいですか？\nB: はい、ぜひ行(い)きたいです。",
     exampleSrc:"A: My pet passed away.\nB: That is sad.\nA: Do you want to go again?\nB: Yes, I definitely want to go.",
     funFact:"悲(かな)しい carries deep emotional weight. The kanji 悲しい combines 非 (not) and 心 (heart), suggesting a heart that is 'not right.' Japanese literature and poetry celebrate 悲(かな)しみ (sadness) as a refined emotion, connected to もののあわれ (the beauty of impermanence)."},

    {type:"teach", trg:"寂(さび)しい", src:"lonely", pos:"adj", gender:null,
     note:"I-adjective. Also written さみしい (variant pronunciation).\n寂(さび)しくなる = to become lonely.",
     example:"A: 友達(ともだち)が引(ひ)っ越(こ)して寂(さび)しいです。\nB: でもスマホで連絡(れんらく)できますよ。\nA: どのくらいかかりましたか？\nB: だいたい二時間(にじかん)ぐらいです。",
     exampleSrc:"A: My friend moved away and I am lonely.\nB: But you can stay in touch by phone.\nA: How long did it take?\nB: About two hours.",
     funFact:"寂(さび)しい and さみしい are both correct, with regional variation. 寂(さび)しい is more standard, while さみしい is common in western Japan. The concept connects to わびさび aesthetics, where solitary beauty is appreciated. An empty autumn landscape can be described as 寂(さび)しい in a positive, poetic sense."},

    {type:"teach", trg:"怖(こわ)い", src:"scary / afraid", pos:"adj", gender:null,
     note:"I-adjective. Describes both the scary thing AND the feeling of fear.\n怖(こわ)がる = to be frightened.",
     example:"A: この映画(えいが)は怖(こわ)いですか？\nB: とても怖(こわ)いです。一人(ひとり)で見(み)ないでください。\nA: 難(むずか)しかったですか？\nB: 最初(さいしょ)は難(むずか)しかったですが、慣(な)れました。",
     exampleSrc:"A: Is this movie scary?\nB: Very scary. Do not watch it alone.\nA: Was it difficult?\nB: It was difficult at first, but I got used to it.",
     funFact:"怖(こわ)い is unique: it describes both the scary object and the person's fear. 映画(えいが)が怖(こわ)い = the movie is scary AND I am scared of the movie. Japanese horror (Jホラー) like リング and 呪怨(じゅおん) is famous for psychological dread rather than gore, using silence and suggestion."},

    {type:"teach", trg:"恥(は)ずかしい", src:"embarrassed / shy", pos:"adj", gender:null,
     note:"I-adjective. Covers embarrassment and shyness.\n恥(は)ずかしがりや = shy person.",
     example:"A: 日本語(にほんご)で話(はな)してみてください。\nB: 恥(は)ずかしいです... でも頑張(がんば)ります。\nA: おすすめですか？\nB: はい、ぜひ試(ため)してみてください。",
     exampleSrc:"A: Please try speaking in Japanese.\nB: I am embarrassed... but I will try my best.\nA: Do you recommend it?\nB: Yes, please try it.",
     funFact:"恥(は)ずかしい (embarrassment/shame) is a powerful social emotion in Japan. 恥(は)の文化(ぶんか) (shame culture) was described by Ruth Benedict as a key feature of Japanese society. 恥(は)をかく (to be disgraced) and 恥(は)ずかしい (to feel embarrassed) shape behavior in public spaces and social situations."},

    {type:"teach", trg:"悔(くや)しい", src:"frustrated / vexing", pos:"adj", gender:null,
     note:"I-adjective. The frustration of losing or failing when you tried hard.\n悔(くや)し涙(なみだ) = tears of frustration.",
     example:"A: 試合(しあい)に負(ま)けてしまいました。\nB: 悔(くや)しいですね。次(つぎ)は頑張(がんば)りましょう。\nA: 一緒(いっしょ)に行(い)きませんか？\nB: いいですね。行(い)きましょう。",
     exampleSrc:"A: I lost the match.\nB: That is frustrating. Let's do our best next time.\nA: Shall we go together?\nB: That sounds good. Let's go.",
     funFact:"悔(くや)しい has no perfect English translation. It describes the burning frustration when you lose despite trying your best. Japanese athletes often say 悔(くや)しい in post-game interviews, and it is considered a noble emotion because it shows you cared deeply. 悔(くや)しさ fuels the drive to improve."},

    {type:"teach", trg:"楽(たの)しみ", src:"looking forward to", pos:"noun", gender:null,
     note:"楽(たの)しみにしている = I am looking forward to it.\n楽(たの)しみ = something to look forward to.",
     example:"A: 来週(らいしゅう)旅行(りょこう)に行(い)きます。\nB: いいですね！楽(たの)しみですね。\nA: どこがおすすめですか？\nB: 京都(きょうと)がおすすめです。",
     exampleSrc:"A: I am going on a trip next week.\nB: Nice! Something to look forward to.\nA: Where do you recommend?\nB: I recommend Kyoto.",
     funFact:"楽(たの)しみにしています is the standard response when someone tells you about future plans. It literally means 'I am making it into something enjoyable.' This phrase appears in business emails, friendly texts, and daily conversation. Not saying it can seem disinterested."},

    {type:"teach", trg:"心配(しんぱい)", src:"worry / concern", pos:"noun", gender:null,
     note:"心配(しんぱい)する = to worry. 心配(しんぱい)しないで = don't worry.\nCombines こころ (heart) and はいる (to distribute).",
     example:"A: 明日(あした)の試験(しけん)が心配(しんぱい)です。\nB: 心配(しんぱい)しないで。よく勉強(べんきょう)したでしょう？\nA: 何(なに)が一番(いちばん)良(よ)かったですか？\nB: 食(た)べ物(もの)が一番(いちばん)おいしかったです。",
     exampleSrc:"A: I am worried about tomorrow's exam.\nB: Don't worry. You studied well, right?\nA: What was the best part?\nB: The food was the most delicious.",
     funFact:"心配(しんぱい) comes from kanji meaning 'distribute the heart' (心配), as if worry splits your heart in different directions. Japanese parents' most common farewell phrase to children is 気(き)をつけて (be careful), reflecting a culture where showing concern for others' safety is a form of love."},

    {type:"teach", trg:"びっくり", src:"surprised / startled", pos:"adv", gender:null,
     note:"びっくりする = to be surprised. Onomatopoeic origin.\nびっくりした！= I was startled!",
     example:"A: サプライズパーティーでびっくりしましたか？\nB: はい、とてもびっくりしました！\nA: よく行(い)きますか？\nB: 月(つき)に一回(いっかい)ぐらい行(い)きます。",
     exampleSrc:"A: Were you surprised by the surprise party?\nB: Yes, I was very surprised!\nA: Do you go often?\nB: I go about once a month.",
     funFact:"びっくり is one of many Japanese onomatopoeic expressions (擬態語(ぎたいご)). Japanese has hundreds of these: どきどき (heart pounding), わくわく (excitement), そわそわ (restless), いらいら (irritated). These sound-symbolic words make Japanese incredibly expressive for describing feelings."},

    {type:"teach", trg:"懐(なつ)かしい", src:"nostalgic / fondly remembered", pos:"adj", gender:null,
     note:"I-adjective. No exact English equivalent.\nTriggers warm memories of the past.",
     example:"A: この歌(うた)を聞(き)くと懐(なつ)かしいです。\nB: 昔(むかし)よく聞(き)いていましたね。\nA: 誰(だれ)と行(い)きましたか？\nB: 友達(ともだち)と一緒(いっしょ)に行(い)きました。",
     exampleSrc:"A: This song makes me feel nostalgic.\nB: We used to listen to it a lot.\nA: Who did you go with?\nB: I went with a friend.",
     funFact:"懐(なつ)かしい is often called untranslatable. It describes the warm, bittersweet feeling when encountering something from your past. A childhood song, an old photo, a hometown smell. Japanese people exclaim 懐(なつ)かしい frequently, sharing the pleasure of nostalgia as a social bonding experience."},

    {type:"teach", trg:"もったいない", src:"what a waste / too good to waste", pos:"adj", gender:null,
     note:"I-adjective. Core Japanese value: respect resources.\nGlobal environmental concept now.",
     example:"A: この料理(りょうり)、捨(す)てるの？\nB: もったいないから、明日(あした)食(た)べましょう。\nA: それは大変(たいへん)でしたね。\nB: はい、でもいい勉強(べんきょう)になりました。",
     exampleSrc:"A: Are you throwing this food away?\nB: It is wasteful, so let's eat it tomorrow.\nA: That must have been tough.\nB: Yes, but it was a good learning experience.",
     funFact:"もったいない was championed by Kenyan Nobel laureate Wangari Maathai as an untranslatable concept the world needs. It goes beyond 'wasteful' to express gratitude for resources and regret at their loss. It applies to food, time, talent, and opportunities. A uniquely Japanese environmental philosophy."},

    // Quiz steps
    {type:"mc", q:"「悔(くや)しい」はどんな気持(きも)ちですか？",
     opts:["Frustration from losing despite trying hard","General sadness","Physical pain","Boredom"],
     ans:"Frustration from losing despite trying hard",
     hint:"This emotion specifically describes the burning feeling when you gave your best but still fell short."},

    {type:"fb", s:"来週(らいしゅう)の旅行(りょこう)を{1}にしています。",
     a:["楽(たの)しみ"],
     opts:["楽(たの)しみ","心配(しんぱい)","びっくり","怖(こわ)い"],
     hint:"You are expressing positive anticipation about the upcoming trip. This is the standard phrase for looking forward to something.",
     sSrc:"I am looking forward to next week's trip."},

    {type:"match", pairs:[
      {trg:"嬉(うれ)しい", src:"happy / glad"},
      {trg:"悲(かな)しい", src:"sad"},
      {trg:"寂(さび)しい", src:"lonely"},
      {trg:"恥(は)ずかしい", src:"embarrassed"}
    ]},

    {type:"mc", q:"「もったいない」はどんな意味(いみ)ですか？",
     opts:["Too good to waste, respect for resources","Very expensive","Not useful","Old and broken"],
     ans:"Too good to waste, respect for resources",
     hint:"This word expresses both the regret of wasting something and gratitude for the resource itself. A uniquely Japanese concept."},

    {type:"fb", s:"この歌(うた)を聞(き)くと{1}です。",
     a:["懐(なつ)かしい"],
     opts:["懐(なつ)かしい","怖(こわ)い","恥(は)ずかしい","悔(くや)しい"],
     hint:"The song triggers warm, bittersweet memories of the past. This untranslatable Japanese word describes nostalgic feelings.",
     sSrc:"When I hear this song, I feel nostalgic."},

    {type:"mc", q:"日本語(にほんご)の「おのまとぺ」でドキドキはなんの音(おと)ですか？",
     opts:["Heart pounding (excitement/nervousness)","Knocking on a door","Rain falling","Clock ticking"],
     ans:"Heart pounding (excitement/nervousness)",
     hint:"This doubled sound-word describes the physical sensation of your h... beating fast, from e... or nerves."}
  ,{type:"match",pairs:[{trg:"怖(こわ)い",src:"scary / afraid"},{trg:"悔(くや)しい",src:"frustrated / vexing"},{trg:"心配(しんぱい)",src:"worry / concern"},{trg:"びっくり",src:"surprised / startled"},{trg:"もったいない",src:"what a waste / too good to waste"}]}]
};
export default BATCH11_L1;
