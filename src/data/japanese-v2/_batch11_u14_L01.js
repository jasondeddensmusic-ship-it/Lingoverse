// Batch 11 – Unit 14 (A2.2 Opinions): Emotion & Feeling Adjectives
const BATCH11_L1 = {
  id:"jav2_u14l_b11_1", title:"きもちのことば", icon:"😊", xp:15, board:true,
  steps:[
    {type:"intro", title:"きもちのことば",
     desc:"Learn adjectives for emotions and feelings. Japanese has specific adjective forms for expressing your own feelings vs describing others' feelings.",
     goals:["Express emotions with i-adjectives and na-adjectives","Distinguish between own feelings and others' feelings","Use emotion words in opinion statements"]},

    {type:"teach", trg:"うれしい", src:"happy / glad", pos:"adj", gender:null,
     note:"I-adjective. For personal joy or happiness about something.\nうれしそう = looks happy (about others).",
     example:"A: しけんにごうかくしました！\nB: おめでとう！うれしいですね。",
     exampleSrc:"A: I passed the exam!\nB: Congratulations! You must be happy.",
     funFact:"うれしい describes happiness about a specific event or outcome, while しあわせ describes general life happiness. うれしなみだ (happy tears) is a beautiful compound word. Japanese culture values containing emotions, so saying うれしい openly shows genuine closeness with the listener."},

    {type:"teach", trg:"かなしい", src:"sad", pos:"adj", gender:null,
     note:"I-adjective. Deep sadness. かなしそう = looks sad.\nかなしみ = sadness (noun form).",
     example:"A: ペットがしんでしまいました。\nB: それはかなしいですね。",
     exampleSrc:"A: My pet passed away.\nB: That is sad.",
     funFact:"かなしい carries deep emotional weight. The kanji 悲しい combines 非 (not) and 心 (heart), suggesting a heart that is 'not right.' Japanese literature and poetry celebrate かなしみ (sadness) as a refined emotion, connected to もののあわれ (the beauty of impermanence)."},

    {type:"teach", trg:"さびしい", src:"lonely", pos:"adj", gender:null,
     note:"I-adjective. Also written さみしい (variant pronunciation).\nさびしくなる = to become lonely.",
     example:"A: ともだちがひっこしてさびしいです。\nB: でもスマホでれんらくできますよ。",
     exampleSrc:"A: My friend moved away and I am lonely.\nB: But you can stay in touch by phone.",
     funFact:"さびしい and さみしい are both correct, with regional variation. さびしい is more standard, while さみしい is common in western Japan. The concept connects to わびさび aesthetics, where solitary beauty is appreciated. An empty autumn landscape can be described as さびしい in a positive, poetic sense."},

    {type:"teach", trg:"こわい", src:"scary / afraid", pos:"adj", gender:null,
     note:"I-adjective. Describes both the scary thing AND the feeling of fear.\nこわがる = to be frightened.",
     example:"A: このえいがはこわいですか？\nB: とてもこわいです。ひとりでみないでください。",
     exampleSrc:"A: Is this movie scary?\nB: Very scary. Do not watch it alone.",
     funFact:"こわい is unique: it describes both the scary object and the person's fear. えいががこわい = the movie is scary AND I am scared of the movie. Japanese horror (Jホラー) like リング and 呪怨 is famous for psychological dread rather than gore, using silence and suggestion."},

    {type:"teach", trg:"はずかしい", src:"embarrassed / shy", pos:"adj", gender:null,
     note:"I-adjective. Covers embarrassment and shyness.\nはずかしがりや = shy person.",
     example:"A: にほんごではなしてみてください。\nB: はずかしいです... でもがんばります。",
     exampleSrc:"A: Please try speaking in Japanese.\nB: I am embarrassed... but I will try my best.",
     funFact:"はずかしい (embarrassment/shame) is a powerful social emotion in Japan. 恥の文化 (shame culture) was described by Ruth Benedict as a key feature of Japanese society. はじをかく (to be disgraced) and はずかしい (to feel embarrassed) shape behavior in public spaces and social situations."},

    {type:"teach", trg:"くやしい", src:"frustrated / vexing", pos:"adj", gender:null,
     note:"I-adjective. The frustration of losing or failing when you tried hard.\nくやしなみだ = tears of frustration.",
     example:"A: しあいにまけてしまいました。\nB: くやしいですね。つぎはがんばりましょう。",
     exampleSrc:"A: I lost the match.\nB: That is frustrating. Let's do our best next time.",
     funFact:"くやしい has no perfect English translation. It describes the burning frustration when you lose despite trying your best. Japanese athletes often say くやしい in post-game interviews, and it is considered a noble emotion because it shows you cared deeply. くやしさ fuels the drive to improve."},

    {type:"teach", trg:"たのしみ", src:"looking forward to", pos:"noun", gender:null,
     note:"たのしみにしている = I am looking forward to it.\nたのしみ = something to look forward to.",
     example:"A: らいしゅうりょこうにいきます。\nB: いいですね！たのしみですね。",
     exampleSrc:"A: I am going on a trip next week.\nB: Nice! Something to look forward to.",
     funFact:"たのしみにしています is the standard response when someone tells you about future plans. It literally means 'I am making it into something enjoyable.' This phrase appears in business emails, friendly texts, and daily conversation. Not saying it can seem disinterested."},

    {type:"teach", trg:"しんぱい", src:"worry / concern", pos:"noun", gender:null,
     note:"しんぱいする = to worry. しんぱいしないで = don't worry.\nCombines こころ (heart) and はいる (to distribute).",
     example:"A: あしたのしけんがしんぱいです。\nB: しんぱいしないで。よくべんきょうしたでしょう？",
     exampleSrc:"A: I am worried about tomorrow's exam.\nB: Don't worry. You studied well, right?",
     funFact:"しんぱい comes from kanji meaning 'distribute the heart' (心配), as if worry splits your heart in different directions. Japanese parents' most common farewell phrase to children is きをつけて (be careful), reflecting a culture where showing concern for others' safety is a form of love."},

    {type:"teach", trg:"びっくり", src:"surprised / startled", pos:"adv", gender:null,
     note:"びっくりする = to be surprised. Onomatopoeic origin.\nびっくりした！= I was startled!",
     example:"A: サプライズパーティーでびっくりしました？\nB: はい、とてもびっくりしました！",
     exampleSrc:"A: Were you surprised by the surprise party?\nB: Yes, I was very surprised!",
     funFact:"びっくり is one of many Japanese onomatopoeic expressions (擬態語). Japanese has hundreds of these: どきどき (heart pounding), わくわく (excitement), そわそわ (restless), いらいら (irritated). These sound-symbolic words make Japanese incredibly expressive for describing feelings."},

    {type:"teach", trg:"なつかしい", src:"nostalgic / fondly remembered", pos:"adj", gender:null,
     note:"I-adjective. No exact English equivalent.\nTriggers warm memories of the past.",
     example:"A: このうたをきくとなつかしいです。\nB: むかしよくきいていましたね。",
     exampleSrc:"A: This song makes me feel nostalgic.\nB: We used to listen to it a lot.",
     funFact:"なつかしい is often called untranslatable. It describes the warm, bittersweet feeling when encountering something from your past. A childhood song, an old photo, a hometown smell. Japanese people exclaim なつかしい frequently, sharing the pleasure of nostalgia as a social bonding experience."},

    {type:"teach", trg:"もったいない", src:"what a waste / too good to waste", pos:"adj", gender:null,
     note:"I-adjective. Core Japanese value: respect resources.\nGlobal environmental concept now.",
     example:"A: このりょうり、すてるの？\nB: もったいないから、あしたたべましょう。",
     exampleSrc:"A: Are you throwing this food away?\nB: It is wasteful, so let's eat it tomorrow.",
     funFact:"もったいない was championed by Kenyan Nobel laureate Wangari Maathai as an untranslatable concept the world needs. It goes beyond 'wasteful' to express gratitude for resources and regret at their loss. It applies to food, time, talent, and opportunities. A uniquely Japanese environmental philosophy."},

    // Quiz steps
    {type:"mc", q:"「くやしい」はどんなきもちですか？",
     opts:["Frustration from losing despite trying hard","General sadness","Physical pain","Boredom"],
     ans:"Frustration from losing despite trying hard",
     hint:"This emotion specifically describes the burning feeling when you gave your best but still fell short."},

    {type:"fb", s:"らいしゅうのりょこうを{1}にしています。",
     a:["たのしみ"],
     opts:["たのしみ","しんぱい","びっくり","こわい"],
     hint:"You are expressing positive anticipation about the upcoming trip. This is the standard phrase for looking forward to something.",
     sSrc:"I am looking forward to next week's trip."},

    {type:"match", pairs:[
      {trg:"うれしい", src:"happy / glad"},
      {trg:"かなしい", src:"sad"},
      {trg:"さびしい", src:"lonely"},
      {trg:"はずかしい", src:"embarrassed"}
    ]},

    {type:"mc", q:"「もったいない」はどんないみですか？",
     opts:["Too good to waste, respect for resources","Very expensive","Not useful","Old and broken"],
     ans:"Too good to waste, respect for resources",
     hint:"This word expresses both the regret of wasting something and gratitude for the resource itself. A uniquely Japanese concept."},

    {type:"fb", s:"このうたをきくと{1}です。",
     a:["なつかしい"],
     opts:["なつかしい","こわい","はずかしい","くやしい"],
     hint:"The song triggers warm, bittersweet memories of the past. This untranslatable Japanese word describes nostalgic feelings.",
     sSrc:"When I hear this song, I feel nostalgic."},

    {type:"mc", q:"にほんごの「おのまとぺ」でドキドキはなんのおとですか？",
     opts:["Heart pounding (excitement/nervousness)","Knocking on a door","Rain falling","Clock ticking"],
     ans:"Heart pounding (excitement/nervousness)",
     hint:"This doubled sound-word describes the physical sensation of your h... beating fast, from e... or nerves."}
  ]
};
export default BATCH11_L1;
