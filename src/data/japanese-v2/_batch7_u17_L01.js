// Batch 7 – Unit 17 (B1.2 Passive Voice): Emotion & Feeling Vocabulary
const BATCH7_L1 = {
  id:"jav2_u17l_b7_1", title:"気持(きも)ちの言葉(ことば)", icon:"💭", xp:15, board:true,
  steps:[
    {type:"intro", title:"気持(きも)ちの言葉(ことば)",
     desc:"Learn vocabulary for emotions and feelings beyond basic happy/sad. Japanese has rich vocabulary for subtle emotional states that connect naturally with passive voice expressions.",
     goals:["Express complex emotions and moods","Describe psychological states","Use emotion vocabulary in passive constructions"]},

    {type:"teach", trg:"悔(くや)しい", src:"frustrating / vexing", pos:"adj", gender:null,
     note:"I-adjective. The feeling of losing when you could have won.\n悔(くや)しいです = I am frustrated/vexed.",
     example:"A: 試合(しあい)に負(ま)けて悔(くや)しいです。\nB: 次(つぎ)は勝(か)ちましょう！\nA: よく行(い)きますか？\nB: 月(つき)に一回(いっかい)ぐらい行(い)きます。",
     exampleSrc:"A: I lost the match and feel frustrated.\nB: Let us win next time!\nA: Do you go often?\nB: I go about once a month.",
     funFact:"悔(くや)しい is a uniquely Japanese emotion with no exact English equivalent. It combines frustration, regret, and competitive drive. Athletes say 悔(くや)しい after losses as motivation. The feeling of 悔(くや)しい is considered positive because it fuels improvement."},

    {type:"teach", trg:"恥(は)ずかしい", src:"embarrassed / ashamed / shy", pos:"adj", gender:null,
     note:"I-adjective. 恥(は)ずかしがりや = shy person.\n恥(は)ずかしいです = I am embarrassed.",
     example:"A: みんなの前(まえ)で話(はな)すのが恥(は)ずかしいです。\nB: 練習(れんしゅう)すれば大丈夫(だいじょうぶ)ですよ。\nA: 誰(だれ)と行(い)きましたか？\nB: 友達(ともだち)と一緒(いっしょ)に行(い)きました。",
     exampleSrc:"A: Speaking in front of everyone is embarrassing.\nB: If you practice, you will be fine.\nA: Who did you go with?\nB: I went with a friend.",
     funFact:"恥(は)ずかしい covers embarrassment, shame, and shyness. Japanese culture places high value on not causing embarrassment. The concept of 恥(はじ) (shame) drives much social behavior. 'Losing face' is deeply feared. Public praise can even feel 恥(は)ずかしい because it singles you out from the group."},

    {type:"teach", trg:"懐(なつ)かしい", src:"nostalgic / fondly remembered", pos:"adj", gender:null,
     note:"I-adjective. No exact English equivalent.\n懐(なつ)かしいです = I feel nostalgic for it.",
     example:"A: この歌(うた)を聞(き)くと懐(なつ)かしいです。\nB: 子(こ)どものころよく聞(き)いていましたね。\nA: それは大変(たいへん)でしたね。\nB: はい、でもいい勉強(べんきょう)になりました。",
     exampleSrc:"A: Hearing this song makes me nostalgic.\nB: We listened to it often as children.\nA: That must have been tough.\nB: Yes, but it was a good learning experience.",
     funFact:"懐(なつ)かしい is one of the most emotionally loaded Japanese words. It expresses warm longing for the past. Japanese people say it constantly: old songs, childhood foods, former classmates. The feeling is bittersweet, not sad. 懐(なつ)かしい triggers smiles, not tears. Untranslatable but universally felt."},

    {type:"teach", trg:"寂(さみ)しい", src:"lonely / lonesome", pos:"adj", gender:null,
     note:"I-adjective. Also written 淋(さみ)しい.\n寂(さみ)しいです = I feel lonely.",
     example:"A: 友達(ともだち)が引(ひ)っ越(こ)して寂(さみ)しいです。\nB: でもSNSで連絡(れんらく)できますよ。\nA: 本当(ほんとう)ですか？すごいですね。\nB: ありがとうございます。頑張(がんば)りました。",
     exampleSrc:"A: My friend moved away and I feel lonely.\nB: But you can keep in touch on social media.\nA: Really? That is amazing.\nB: Thank you. I worked hard.",
     funFact:"寂(さみ)しい is the loneliness of missing someone or something. It is different from 一人(ひとり)ぼっち (being alone). You can feel 寂(さみ)しい in a crowd. The kanji 寂 also appears in わびさび (wabi-sabi), Japan's aesthetic of beautiful impermanence. Loneliness has a poetic dimension in Japanese culture."},

    {type:"teach", trg:"羨(うらや)ましい", src:"envious / jealous (of good fortune)", pos:"adj", gender:null,
     note:"I-adjective. Lighter than English 'jealous.'\n羨(うらや)ましいなあ = I am so envious.",
     example:"A: ハワイに行(い)ってきました。\nB: 羨(うらや)ましいです！私(わたし)も行(い)きたい！\nA: 私(わたし)も興味(きょうみ)があります。\nB: じゃあ、今度(こんど)一緒(いっしょ)にどうですか？",
     exampleSrc:"A: I went to Hawaii.\nB: I am envious! I want to go too!\nA: I am also interested.\nB: Then, how about doing it together next time?",
     funFact:"羨(うらや)ましい is more casual and less negative than English 'jealous.' It openly admits wanting what someone has, without malice. Saying 羨(うらや)ましい is common and socially acceptable. It is even a form of compliment, acknowledging the other person's good fortune."},

    {type:"teach", trg:"呆(あき)れる", src:"to be appalled / to be exasperated", pos:"verb", gender:null,
     note:"Group 2 verb. 呆(あき)れました = I am appalled.\n呆(あき)れてものが言(い)えない = speechless with shock.",
     example:"A: また1時間(じかん)遅(おく)れてきました。\nB: 呆(あき)れますね。\nA: どんな感(かん)じでしたか？\nB: 想像(そうぞう)していたよりずっと良(よ)かったです。",
     exampleSrc:"A: He came one hour late again.\nB: I am appalled.\nA: What was it like?\nB: It was much better than I imagined.",
     funFact:"呆(あき)れる expresses shocked disapproval, like being so exasperated you cannot believe it. The expression 呆(あき)れてものが言(い)えない (so appalled I cannot speak) is dramatic but common. Anime characters show 呆(あき)れ with a sweat drop on their forehead."},

    {type:"teach", trg:"ほっとする", src:"to feel relieved", pos:"verb", gender:null,
     note:"Suru verb. ほっとしました = I felt relieved.\nOnomatopoeia: ほっ = sigh of relief.",
     example:"A: 試験(しけん)に受(う)かりました！\nB: ほっとしましたね。\nA: 何(なに)を食(た)べましたか？\nB: 地元(じもと)の名物(めいぶつ)を食(た)べました。",
     exampleSrc:"A: I passed the exam!\nB: What a relief.\nA: What did you eat?\nB: I ate the local specialty.",
     funFact:"ほっとする is an onomatopoeic suru-verb. The sound ほっ mimics a sigh of relief. Japanese has many emotion-onomatopoeia: わくわく (excited), どきどき (heart pounding), いらいら (irritated). These sound-based emotion words feel more vivid and immediate than abstract adjectives."},

    {type:"teach", trg:"苦(くる)しい", src:"painful / agonizing / hard to bear", pos:"adj", gender:null,
     note:"I-adjective. 苦(くる)しい = suffering/painful.\n苦(くる)しい経験(けいけん) = painful experience.",
     example:"A: 今(いま)は苦(くる)しいですが、いつか良(よ)くなります。\nB: そう信(しん)じています。\nA: 楽(たの)しみですね。\nB: はい、今(いま)からわくわくしています。",
     exampleSrc:"A: It is painful now, but it will get better someday.\nB: I believe so.\nA: That is exciting.\nB: Yes, I am already excited.",
     funFact:"苦(くる)しい describes deep suffering, physical or emotional. It is the anguish of illness, heartbreak, or overwhelming pressure. The kanji 苦 (bitter/suffering) appears in 苦労(くろう) (hardship) and 苦手(にがて) (weakness). Japanese literature deeply explores 苦(くる)しみ (suffering) as a path to understanding."},

    {type:"teach", trg:"穏(おだ)やか", src:"calm / gentle / mild", pos:"adj", gender:null,
     note:"Na-adjective. 穏(おだ)やかな人(ひと) = a calm person.\n穏(おだ)やかな海(うみ) = a calm sea.",
     example:"A: 今日(きょう)は穏(おだ)やかな天気(てんき)ですね。\nB: 散歩(さんぽ)にいい日(ひ)ですね。\nA: いい思(おも)い出(で)ですね。\nB: はい、一生(いっしょう)忘(わす)れません。",
     exampleSrc:"A: The weather is calm today.\nB: A good day for a walk.\nA: That is a nice memory.\nB: Yes, I will never forget it.",
     funFact:"穏(おだ)やか is a highly valued quality in Japan. An 穏(おだ)やかな人(ひと) (calm person) is respected. The ideal Japanese aesthetic includes 穏(おだ)やか elements: zen gardens, tea ceremonies, quiet conversations. It describes both personality and atmosphere."},

    {type:"teach", trg:"いきいき", src:"lively / vivid / full of life", pos:"adv", gender:null,
     note:"Adverb/adjective. いきいきしている = is full of life.\nMimetic word (擬態語(ぎたいご)).",
     example:"A: おばあちゃんはいきいきしていますね。\nB: 毎日(まいにち)散歩(さんぽ)をしているからですよ。\nA: どうでしたか？\nB: とても良(よ)かったです。",
     exampleSrc:"A: Grandma is full of life.\nB: Because she walks every day.\nA: How was it?\nB: It was very good.",
     funFact:"いきいき is a 擬態語(ぎたいご) (gitaigo, mimetic word), a word that 'looks like' the concept it describes. The repetition いき-いき suggests ongoing vitality. Japanese has hundreds of these doubled words: のろのろ (sluggishly), ぴかぴか (sparkling), ふわふわ (fluffy). They make Japanese vivid and expressive."},

    {type:"teach", trg:"もったいない", src:"wasteful / what a waste", pos:"adj", gender:null,
     note:"I-adjective. もったいないです = what a waste.\nUsed for food, time, talent, anything valuable.",
     example:"A: まだ食(た)べられるのに捨(す)てるの？もったいない！\nB: そうですね。食(た)べましょう。\nA: いつですか？\nB: 去年(きょねん)の夏(なつ)でした。",
     exampleSrc:"A: You are throwing it away when it is still edible? What a waste!\nB: You are right. Let us eat it.\nA: When was it?\nB: It was last summer.",
     funFact:"もったいない became internationally famous when Kenyan Nobel laureate Wangari Maathai adopted it as an environmental slogan. It expresses respect for resources and objects. Japanese people feel もったいない about wasting food, unused gifts, and untapped potential. It is both an emotion and a philosophy."},

    {type:"teach", trg:"仕方(しかた)がない", src:"it cannot be helped / nothing can be done", pos:"adj", gender:null,
     note:"Also: しょうがない (casual). Accepting the unchangeable.\nExpresses resignation and acceptance.",
     example:"A: 電車(でんしゃ)が遅(おく)れています。\nB: 仕方(しかた)がないですね。待(ま)ちましょう。\nA: それはいいですね。\nB: はい、とても楽(たの)しかったです。",
     exampleSrc:"A: The train is delayed.\nB: It cannot be helped. Let us wait.\nA: That is nice.\nB: Yes, it was very fun.",
     funFact:"仕方(しかた)がない is a defining Japanese philosophical concept. It means accepting what you cannot change with grace. Not passive defeat, but active acceptance. After natural disasters, Japanese people rebuild with 仕方(しかた)がない spirit. It is resilience dressed in quiet dignity."},

    // Quiz steps
    {type:"mc", q:"懐(なつ)かしい expresses:",
     opts:["Warm nostalgia for the past","Sadness about the present","Fear of the future","Anger about lost time"],
     ans:"Warm nostalgia for the past",
     hint:"This bittersweet feeling is triggered by old songs, childhood memories, and reunions. It makes you smile."},

    {type:"match", pairs:[
      {trg:"悔(くや)しい", src:"frustrated/vexing"},
      {trg:"恥(は)ずかしい", src:"embarrassed"},
      {trg:"寂(さみ)しい", src:"lonely"},
      {trg:"羨(うらや)ましい", src:"envious"},
      {trg:"もったいない", src:"wasteful"}
    ]},

    {type:"fb", s:"試験(しけん)に受(う)かって{1}しました。",
     a:["ほっと"],
     opts:["ほっと","いらいら","どきどき","わくわく"],
     hint:"You passed the exam and felt a wave of relief. This onomatopoeia mimics a sigh of relief.",
     sSrc:"I passed the exam and felt {1}."},

    {type:"mc", q:"仕方(しかた)がない reflects:",
     opts:["Acceptance of what cannot be changed","Giving up easily","Not caring about problems","Laziness"],
     ans:"Acceptance of what cannot be changed",
     hint:"This concept combines resilience with grace. It is active a..., not passive defeat."},

    {type:"fb", s:"この歌(うた)を聞(き)くと{1}です。子(こ)どものころを思(おも)い出(で)します。",
     a:["懐(なつ)かしい"],
     opts:["懐(なつ)かしい","寂(さみ)しい","悔(くや)しい","苦(くる)しい"],
     hint:"Hearing this song brings back warm memories of childhood.",
     sSrc:"This song makes me feel {1}. It reminds me of childhood."},

    {type:"mc", q:"もったいない became internationally famous through:",
     opts:["Kenyan Nobel laureate Wangari Maathai","A Japanese TV show","An anime character","A food company"],
     ans:"Kenyan Nobel laureate Wangari Maathai",
     hint:"She adopted this Japanese word as an environmental slogan, bringing it to global attention."},

    {type:"match", pairs:[
      {trg:"ほっとする", src:"to feel relieved"},
      {trg:"呆(あき)れる", src:"to be appalled"},
      {trg:"穏(おだ)やか", src:"calm/gentle"},
      {trg:"いきいき", src:"lively"},
      {trg:"苦(くる)しい", src:"agonizing"}
    ]},

    {type:"fb", s:"ハワイに行(い)ったの？{1}！私(わたし)も行(い)きたい！",
     a:["羨(うらや)ましい"],
     opts:["羨(うらや)ましい","悔(くや)しい","寂(さみ)しい","恥(は)ずかしい"],
     hint:"You openly wish you had the same good fortune. This i-adjective is lighter than English 'jealous.'",
     sSrc:"You went to Hawaii? {1}! I want to go too!"}
  ,{type:"match",pairs:[{trg:"仕方(しかた)がない",src:"it cannot be helped / nothing can be done"}]}]
};
export default BATCH7_L1;
