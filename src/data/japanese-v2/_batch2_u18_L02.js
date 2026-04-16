// Unit 18 Batch 2 Lesson 2: しえきとかんじょう (Causative & Emotions)
const BATCH2_L_2 = {
  id:"jav2_u18l_b2_2", title:"しえきとかんじょう", icon:"💭", xp:15, board:true,
  steps:[
    {type:"intro", title:"しえきとかんじょう",
     desc:"Causative verbs naturally express emotional influence: making someone laugh, making them cry, worrying them. These emotional causatives are essential for describing interpersonal dynamics and are extremely common in everyday Japanese conversation.",
     goals:["Use causative for emotional influence (make laugh, make cry, make worry)","Express unintentional impact on others' feelings","Combine emotional causative with てしまう for regret"]},

    {type:"teach", trg:"わらわせる", src:"to make someone laugh", pos:"verb", gender:null,
     note:"Causative of わらう (to laugh). Group 1: わらう to わらわ + せる.\nKanji: 笑わせる.",
     example:"A: かれはいつもみんなをわらわせます。\nB: おもしろいひとですね。",
     exampleSrc:"A: He always makes everyone laugh.\nB: He is a funny person.",
     funFact:"笑わせる is the ultimate compliment for a comedian (お笑い芸人, owarai geinin). Japanese comedy (owarai) is a massive entertainment industry with its own hierarchy and traditions. The ability to warawaseru (make people laugh) is one of the most admired social skills in Japan."},

    {type:"teach", trg:"なかせる", src:"to make someone cry", pos:"verb", gender:null,
     note:"Causative of なく (to cry). Group 1: なく to なか + せる.\nKanji: 泣かせる.",
     example:"A: あのえいがはかんきゃくをなかせました。\nB: そんなにかんどうてきですか？",
     exampleSrc:"A: That movie made the audience cry.\nB: Is it that moving?",
     funFact:"泣かせる describes emotional power. Movies, songs, and stories that 'nakaseru' (make you cry) are highly valued in Japanese culture, which prizes emotional depth. The phrase nakaseru hanashi (a story that makes you cry) is a genre unto itself. Japanese drama is famous for its tearful climaxes."},

    {type:"teach", trg:"しんぱいさせる", src:"to make someone worry / to cause worry", pos:"verb", gender:null,
     note:"Causative of しんぱいする (to worry). する-verb to させる.\nKanji: 心配させる.",
     example:"A: おやをしんぱいさせてすみません。\nB: つぎからきをつけてね。",
     exampleSrc:"A: I am sorry for making my parents worry.\nB: Please be careful from now on.",
     funFact:"心配させる is used when apologizing for causing anxiety. おやをしんぱいさせてすみません (sorry for worrying my parents) is a common phrase. Japanese children are taught early that their actions affect family members' feelings. Causing worry (shinpai saseru) creates a sense of guilt and obligation."},

    {type:"teach", trg:"おどろかせる", src:"to surprise someone / to startle", pos:"verb", gender:null,
     note:"Causative of おどろく (to be surprised). Group 1: おどろく to おどろか + せる.\nKanji: 驚かせる.",
     example:"A: たんじょうびパーティーでかのじょをおどろかせたいです。\nB: すてきなけいかくですね。",
     exampleSrc:"A: I want to surprise her at the birthday party.\nB: That is a wonderful plan.",
     funFact:"驚かせる can be positive (surprise party) or negative (scare someone). サプライズ (surprise, from English) has become a popular loanword for planned pleasant surprises. Japanese surprise parties (sapuraizu paatii) have become trendy, influenced by Western culture but adapted with Japanese attention to detail."},

    {type:"mc", q:"おやをしんぱいさせてすみません means:", opts:["My parents worry too much","I am sorry for making my parents worry","Please do not worry my parents","My parents made me worry"], ans:"I am sorry for making my parents worry",
     hint:"Causative + てすみません = apologizing for causing someone to experience something."},

    {type:"teach", trg:"こまらせる", src:"to trouble someone / to put someone in a difficult position", pos:"verb", gender:null,
     note:"Causative of こまる (to be troubled). Group 1: こまる to こまら + せる.\nKanji: 困らせる.",
     example:"A: いつもこまらせてごめんなさい。\nB: だいじょうぶですよ。",
     exampleSrc:"A: I am sorry for always causing you trouble.\nB: It is okay.",
     funFact:"困らせる describes putting someone in a bind. Children who 'komaraseru' (trouble) their parents and employees who 'komaraseru' their bosses feel guilty about the impact. The phrase いつもこまらせてごめん (sorry for always troubling you) acknowledges the ongoing burden you place on someone."},

    {type:"teach", trg:"よろこばせる", src:"to make someone happy / to delight", pos:"verb", gender:null,
     note:"Causative of よろこぶ (to be pleased). Group 1: よろこぶ to よろこば + せる.\nKanji: 喜ばせる.",
     example:"A: おかあさんをよろこばせたいです。\nB: なにかプレゼントをあげたら？",
     exampleSrc:"A: I want to make my mother happy.\nB: How about giving her a present?",
     funFact:"喜ばせる is the positive counterpart to 心配させる and 困らせる. The desire to よろこばせる (make someone happy) drives much of Japanese gift-giving culture. Choosing the perfect omiyage (souvenir) or birthday present is done with the goal of maximizing the recipient's joy."},

    {type:"teach", trg:"おこらせる", src:"to make someone angry / to anger", pos:"verb", gender:null,
     note:"Causative of おこる (to get angry). Group 1: おこる to おこら + せる.\nKanji: 怒らせる.",
     example:"A: じょうしをおこらせてしまいました。\nB: はやくあやまったほうがいいですよ。",
     exampleSrc:"A: I accidentally angered my boss.\nB: You should apologize quickly.",
     funFact:"怒らせる + てしまう (accidentally/regrettably) is a classic combination. Making your boss angry (joushi wo okoraseru) is a serious workplace event requiring immediate apology. The てしまう adds the nuance of 'I did not mean to, but it happened.' Quick, sincere apologies are the expected recovery strategy."},

    {type:"fb", s:"かれはいつもみんなを{1}ます。\n(He always makes everyone laugh.)", a:"わらわせ", opts:["わらわせ","わらって","わらい","わらわれ"], sSrc:"He always makes everyone laugh.",
     hint:"The causative of わらう (to laugh). Group 1: あ-row + せる."},

    {type:"teach", trg:"かんどうてき", src:"moving / touching / emotional", pos:"adj", gender:null,
     note:"な-adjective. かんどう (being moved) + てき (like/typical).\nKanji: 感動的.",
     example:"A: かんどうてきなスピーチでした。\nB: わたしもなきそうになりました。",
     exampleSrc:"A: It was a moving speech.\nB: I almost cried too.",
     funFact:"感動的 describes things that stir deep emotion. Japanese culture places high value on being moved (kandou suru). Graduation ceremonies, farewell speeches, and sports victories are expected to be 感動的. The word appears in movie reviews, book descriptions, and event reports as high praise."},

    {type:"teach", trg:"なきそう", src:"about to cry / on the verge of tears", pos:"adj", gender:null,
     note:"なく (to cry) + そう (looks like/about to).\nStem + そう = about to happen.",
     example:"A: かなしくてなきそうです。\nB: だいじょうぶですか？",
     exampleSrc:"A: I am so sad I am about to cry.\nB: Are you okay?",
     funFact:"なきそう uses the auxiliary そう (looks like/about to). Verb stem + そう describes imminent actions: おちそう (about to fall), ふりそう (about to rain). なきそうになる (to get to the point of almost crying) is a very common phrase in emotional storytelling and daily conversation."},

    {type:"mc", q:"じょうしをおこらせてしまった means:", opts:["My boss was already angry","I intentionally angered my boss","I accidentally made my boss angry","My boss made me angry"], ans:"I accidentally made my boss angry",
     hint:"Causative + てしまう = causing something to happen regrettably or a...."},

    {type:"tip", title:"Emotional Causatives: Impact on Others",
     text:"Positive impact:\nわらわせる = make laugh\nよろこばせる = make happy\nおどろかせる = surprise (can be positive)\n\nNegative impact:\nなかせる = make cry\nしんぱいさせる = make worry\nこまらせる = trouble someone\nおこらせる = make angry\n\nApology pattern:\n[person]を + [emotional causative] + てすみません\nおやをしんぱいさせてすみません = sorry for worrying my parents.\n\nAccidental pattern:\n[emotional causative] + てしまう\nおこらせてしまった = I accidentally angered them.",
     deepDive:{title:"Emotional Responsibility in Japanese",
      text:"Japanese culture emphasizes emotional responsibility. If you make someone cry, worry, or get angry, you bear responsibility for their emotional state.\n\nThe causative makes this explicit: I CAUSED their emotion.\nなかせた = I made them cry (my fault).\nしんぱいさせた = I caused their worry (my responsibility).\n\nThis differs from English, where you might say 'they cried' without implying responsibility. In Japanese, using the causative acknowledges your role in causing the emotion, which is the first step toward apology and repair."}},

    {type:"match", pairs:[{trg:"わらわせる",src:"make laugh"},{trg:"なかせる",src:"make cry"},{trg:"しんぱいさせる",src:"make worry"},{trg:"おどろかせる",src:"surprise"}]},

    {type:"fb", s:"おかあさんを{1}たいです。\n(I want to make my mother happy.)", a:"よろこばせ", opts:["よろこばせ","よろこんで","よろこび","よろこばれ"], sSrc:"I want to make my mother happy.",
     hint:"The causative of よろこぶ (to be pleased). Group 1: あ-row + せる."},

    {type:"match", pairs:[{trg:"こまらせる",src:"trouble someone"},{trg:"よろこばせる",src:"make happy"},{trg:"おこらせる",src:"make angry"},{trg:"かんどうてき",src:"moving/touching"}]},

    {type:"mc", q:"なかせる vs なかれる: what is the difference?", opts:["They mean the same thing","なかせる = make cry (causative); なかれる = be bothered by crying (adversity passive)","なかせる is polite; なかれる is casual","なかせる is past; なかれる is present"], ans:"なかせる = make cry (causative); なかれる = be bothered by crying (adversity passive)",
     hint:"One form is c... (you cause the action); the other is a... p... (you suffer from the action)."},
  ]
};
export default BATCH2_L_2;
