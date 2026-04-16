// Batch 7 – Unit 17 (B1.2 Passive Voice): Emotion & Feeling Vocabulary
const BATCH7_L1 = {
  id:"jav2_u17l_b7_1", title:"きもちのことば", icon:"💭", xp:15, board:true,
  steps:[
    {type:"intro", title:"きもちのことば",
     desc:"Learn vocabulary for emotions and feelings beyond basic happy/sad. Japanese has rich vocabulary for subtle emotional states that connect naturally with passive voice expressions.",
     goals:["Express complex emotions and moods","Describe psychological states","Use emotion vocabulary in passive constructions"]},

    {type:"teach", trg:"くやしい", src:"frustrating / vexing", pos:"adj", gender:null,
     note:"I-adjective. The feeling of losing when you could have won.\nくやしいです = I am frustrated/vexed.",
     example:"A: しあいにまけてくやしいです。\nB: つぎはかちましょう！",
     exampleSrc:"A: I lost the match and feel frustrated.\nB: Let us win next time!",
     funFact:"くやしい (悔しい) is a uniquely Japanese emotion with no exact English equivalent. It combines frustration, regret, and competitive drive. Athletes say くやしい after losses as motivation. The feeling of くやしい is considered positive because it fuels improvement."},

    {type:"teach", trg:"はずかしい", src:"embarrassed / ashamed / shy", pos:"adj", gender:null,
     note:"I-adjective. はずかしがりや = shy person.\nはずかしいです = I am embarrassed.",
     example:"A: みんなのまえではなすのがはずかしいです。\nB: れんしゅうすればだいじょうぶですよ。",
     exampleSrc:"A: Speaking in front of everyone is embarrassing.\nB: If you practice, you will be fine.",
     funFact:"はずかしい covers embarrassment, shame, and shyness. Japanese culture places high value on not causing embarrassment. The concept of 恥 (はじ, shame) drives much social behavior. 'Losing face' is deeply feared. Public praise can even feel はずかしい because it singles you out from the group."},

    {type:"teach", trg:"なつかしい", src:"nostalgic / fondly remembered", pos:"adj", gender:null,
     note:"I-adjective. No exact English equivalent.\nなつかしいです = I feel nostalgic for it.",
     example:"A: このうたをきくとなつかしいです。\nB: こどものころよくきいていましたね。",
     exampleSrc:"A: Hearing this song makes me nostalgic.\nB: We listened to it often as children.",
     funFact:"なつかしい is one of the most emotionally loaded Japanese words. It expresses warm longing for the past. Japanese people say it constantly: old songs, childhood foods, former classmates. The feeling is bittersweet, not sad. なつかしい triggers smiles, not tears. Untranslatable but universally felt."},

    {type:"teach", trg:"さみしい", src:"lonely / lonesome", pos:"adj", gender:null,
     note:"I-adjective. Also written さびしい.\nさみしいです = I feel lonely.",
     example:"A: ともだちがひっこしてさみしいです。\nB: でもSNSでれんらくできますよ。",
     exampleSrc:"A: My friend moved away and I feel lonely.\nB: But you can keep in touch on social media.",
     funFact:"さみしい (寂しい) is the loneliness of missing someone or something. It is different from ひとりぼっち (being alone). You can feel さみしい in a crowd. The kanji 寂 also appears in わびさび (wabi-sabi), Japan's aesthetic of beautiful impermanence. Loneliness has a poetic dimension in Japanese culture."},

    {type:"teach", trg:"うらやましい", src:"envious / jealous (of good fortune)", pos:"adj", gender:null,
     note:"I-adjective. Lighter than English 'jealous.'\nうらやましいなあ = I am so envious.",
     example:"A: ハワイにいってきました。\nB: うらやましいです！わたしもいきたい！",
     exampleSrc:"A: I went to Hawaii.\nB: I am envious! I want to go too!",
     funFact:"うらやましい is more casual and less negative than English 'jealous.' It openly admits wanting what someone has, without malice. Saying うらやましい is common and socially acceptable. It is even a form of compliment, acknowledging the other person's good fortune."},

    {type:"teach", trg:"あきれる", src:"to be appalled / to be exasperated", pos:"verb", gender:null,
     note:"Group 2 verb. あきれました = I am appalled.\nあきれてものがいえない = speechless with shock.",
     example:"A: また1じかんおくれてきました。\nB: あきれますね。",
     exampleSrc:"A: He came one hour late again.\nB: I am appalled.",
     funFact:"あきれる expresses shocked disapproval, like being so exasperated you cannot believe it. The expression あきれてものがいえない (so appalled I cannot speak) is dramatic but common. Anime characters show あきれ with a sweat drop on their forehead."},

    {type:"teach", trg:"ほっとする", src:"to feel relieved", pos:"verb", gender:null,
     note:"Suru verb. ほっとしました = I felt relieved.\nOnomatopoeia: ほっ = sigh of relief.",
     example:"A: しけんにうかりました！\nB: ほっとしましたね。",
     exampleSrc:"A: I passed the exam!\nB: What a relief.",
     funFact:"ほっとする is an onomatopoeic suru-verb. The sound ほっ mimics a sigh of relief. Japanese has many emotion-onomatopoeia: わくわく (excited), どきどき (heart pounding), いらいら (irritated). These sound-based emotion words feel more vivid and immediate than abstract adjectives."},

    {type:"teach", trg:"くるしい", src:"painful / agonizing / hard to bear", pos:"adj", gender:null,
     note:"I-adjective. くるしい = suffering/painful.\nくるしいけいけん = painful experience.",
     example:"A: いまはくるしいですが、いつかよくなります。\nB: そうしんじています。",
     exampleSrc:"A: It is painful now, but it will get better someday.\nB: I believe so.",
     funFact:"くるしい (苦しい) describes deep suffering, physical or emotional. It is the anguish of illness, heartbreak, or overwhelming pressure. The kanji 苦 (bitter/suffering) appears in 苦労 (hardship) and 苦手 (weakness). Japanese literature deeply explores くるしみ (suffering) as a path to understanding."},

    {type:"teach", trg:"おだやか", src:"calm / gentle / mild", pos:"adj", gender:null,
     note:"Na-adjective. おだやかなひと = a calm person.\nおだやかなうみ = a calm sea.",
     example:"A: きょうはおだやかなてんきですね。\nB: さんぽにいいひですね。",
     exampleSrc:"A: The weather is calm today.\nB: A good day for a walk.",
     funFact:"おだやか (穏やか) is a highly valued quality in Japan. An おだやかなひと (calm person) is respected. The ideal Japanese aesthetic includes おだやか elements: zen gardens, tea ceremonies, quiet conversations. It describes both personality and atmosphere."},

    {type:"teach", trg:"いきいき", src:"lively / vivid / full of life", pos:"adv", gender:null,
     note:"Adverb/adjective. いきいきしている = is full of life.\nMimetic word (擬態語).",
     example:"A: おばあちゃんはいきいきしていますね。\nB: まいにちさんぽをしているからですよ。",
     exampleSrc:"A: Grandma is full of life.\nB: Because she walks every day.",
     funFact:"いきいき is a 擬態語 (gitaigo, mimetic word), a word that 'looks like' the concept it describes. The repetition いき-いき suggests ongoing vitality. Japanese has hundreds of these doubled words: のろのろ (sluggishly), ぴかぴか (sparkling), ふわふわ (fluffy). They make Japanese vivid and expressive."},

    {type:"teach", trg:"もったいない", src:"wasteful / what a waste", pos:"adj", gender:null,
     note:"I-adjective. もったいないです = what a waste.\nUsed for food, time, talent, anything valuable.",
     example:"A: まだたべられるのにすてるの？もったいない！\nB: そうですね。たべましょう。",
     exampleSrc:"A: You are throwing it away when it is still edible? What a waste!\nB: You are right. Let us eat it.",
     funFact:"もったいない became internationally famous when Kenyan Nobel laureate Wangari Maathai adopted it as an environmental slogan. It expresses respect for resources and objects. Japanese people feel もったいない about wasting food, unused gifts, and untapped potential. It is both an emotion and a philosophy."},

    {type:"teach", trg:"しかたがない", src:"it cannot be helped / nothing can be done", pos:"adj", gender:null,
     note:"Also: しょうがない (casual). Accepting the unchangeable.\nExpresses resignation and acceptance.",
     example:"A: でんしゃがおくれています。\nB: しかたがないですね。まちましょう。",
     exampleSrc:"A: The train is delayed.\nB: It cannot be helped. Let us wait.",
     funFact:"しかたがない (仕方がない) is a defining Japanese philosophical concept. It means accepting what you cannot change with grace. Not passive defeat, but active acceptance. After natural disasters, Japanese people rebuild with しかたがない spirit. It is resilience dressed in quiet dignity."},

    // Quiz steps
    {type:"mc", q:"なつかしい expresses:",
     opts:["Warm nostalgia for the past","Sadness about the present","Fear of the future","Anger about lost time"],
     ans:"Warm nostalgia for the past",
     hint:"This bittersweet feeling is triggered by old songs, childhood memories, and reunions. It makes you smile."},

    {type:"match", pairs:[
      {trg:"くやしい", src:"frustrated/vexing"},
      {trg:"はずかしい", src:"embarrassed"},
      {trg:"さみしい", src:"lonely"},
      {trg:"うらやましい", src:"envious"},
      {trg:"もったいない", src:"wasteful"}
    ]},

    {type:"fb", s:"しけんにうかって{1}しました。",
     a:["ほっと"],
     opts:["ほっと","いらいら","どきどき","わくわく"],
     hint:"You passed the exam and felt a wave of relief. This onomatopoeia mimics a sigh of relief.",
     sSrc:"I passed the exam and felt {1}."},

    {type:"mc", q:"しかたがない reflects:",
     opts:["Acceptance of what cannot be changed","Giving up easily","Not caring about problems","Laziness"],
     ans:"Acceptance of what cannot be changed",
     hint:"This concept combines resilience with grace. It is active a..., not passive defeat."},

    {type:"fb", s:"このうたをきくと{1}です。こどものころをおもいだします。",
     a:["なつかしい"],
     opts:["なつかしい","さみしい","くやしい","くるしい"],
     hint:"Hearing this song brings back warm memories of childhood.",
     sSrc:"This song makes me feel {1}. It reminds me of childhood."},

    {type:"mc", q:"もったいない became internationally famous through:",
     opts:["Kenyan Nobel laureate Wangari Maathai","A Japanese TV show","An anime character","A food company"],
     ans:"Kenyan Nobel laureate Wangari Maathai",
     hint:"She adopted this Japanese word as an environmental slogan, bringing it to global attention."},

    {type:"match", pairs:[
      {trg:"ほっとする", src:"to feel relieved"},
      {trg:"あきれる", src:"to be appalled"},
      {trg:"おだやか", src:"calm/gentle"},
      {trg:"いきいき", src:"lively"},
      {trg:"くるしい", src:"agonizing"}
    ]},

    {type:"fb", s:"ハワイにいったの？{1}！わたしもいきたい！",
     a:["うらやましい"],
     opts:["うらやましい","くやしい","さみしい","はずかしい"],
     hint:"You openly wish you had the same good fortune. This i-adjective is lighter than English 'jealous.'",
     sSrc:"You went to Hawaii? {1}! I want to go too!"}
  ]
};
export default BATCH7_L1;
