// Unit 18 Batch 2 Lesson 2: 使役(しえき)と感情(かんじょう) (Causative & Emotions)
const BATCH2_L_2 = {
  id:"jav2_u18l_b2_2", title:"使役(しえき)と感情(かんじょう)", icon:"💭", xp:15, board:true,
  steps:[
    {type:"intro", title:"使役(しえき)と感情(かんじょう)",
     desc:"Causative verbs naturally express emotional influence: making someone laugh, making them cry, worrying them. These emotional causatives are essential for describing interpersonal dynamics and are extremely common in everyday Japanese conversation.",
     goals:["Use causative for emotional influence (make laugh, make cry, make worry)","Express unintentional impact on others' feelings","Combine emotional causative with てしまう for regret"]},

    {type:"teach", trg:"笑(わら)わせる", src:"to make someone laugh", pos:"verb", gender:null,
     note:"Causative of 笑(わら)う (to laugh). Group 1: わらう to わらわ + せる.",
     example:"A: 彼(かれ)はいつもみんなを笑(わら)わせます。\nB: 面白(おもしろ)い人(ひと)ですね。\nA: 本当(ほんとう)ですか？すごいですね。\nB: ありがとうございます。頑張(がんば)りました。",
     exampleSrc:"A: He always makes everyone laugh.\nB: He is a funny person.\nA: Really? That is amazing.\nB: Thank you. I worked hard.",
     funFact:"笑わせる is the ultimate compliment for a comedian (お笑い芸人, owarai geinin). Japanese comedy (owarai) is a massive entertainment industry with its own hierarchy and traditions. The ability to warawaseru (make people laugh) is one of the most admired social skills in Japan."},

    {type:"teach", trg:"泣(な)かせる", src:"to make someone cry", pos:"verb", gender:null,
     note:"Causative of 泣(な)く (to cry). Group 1: なく to なか + せる.",
     example:"A: あの映画(えいが)は観客(かんきゃく)を泣(な)かせました。\nB: そんなに感動的(かんどうてき)ですか？\nA: 私(わたし)も興味(きょうみ)があります。\nB: じゃあ、今度(こんど)一緒(いっしょ)にどうですか？",
     exampleSrc:"A: That movie made the audience cry.\nB: Is it that moving?\nA: I am also interested.\nB: Then, how about doing it together next time?",
     funFact:"泣かせる describes emotional power. Movies, songs, and stories that 'nakaseru' (make you cry) are highly valued in Japanese culture, which prizes emotional depth. The phrase nakaseru hanashi (a story that makes you cry) is a genre unto itself. Japanese drama is famous for its tearful climaxes."},

    {type:"teach", trg:"心配(しんぱい)させる", src:"to make someone worry / to cause worry", pos:"verb", gender:null,
     note:"Causative of 心配(しんぱい)する (to worry). する-verb to させる.",
     example:"A: 親(おや)を心配(しんぱい)させてすみません。\nB: 次(つぎ)から気(き)をつけてね。\nA: どんな感(かん)じでしたか？\nB: 想像(そうぞう)していたよりずっと良(よ)かったです。",
     exampleSrc:"A: I am sorry for making my parents worry.\nB: Please be careful from now on.\nA: What was it like?\nB: It was much better than I imagined.",
     funFact:"心配させる is used when apologizing for causing anxiety. 親(おや)を心配(しんぱい)させてすみません (sorry for worrying my parents) is a common phrase. Japanese children are taught early that their actions affect family members' feelings. Causing worry (shinpai saseru) creates a sense of guilt and obligation."},

    {type:"teach", trg:"驚(おどろ)かせる", src:"to surprise someone / to startle", pos:"verb", gender:null,
     note:"Causative of 驚(おどろ)く (to be surprised). Group 1: おどろく to おどろか + せる.",
     example:"A: 誕生日(たんじょうび)パーティーで彼女(かのじょ)を驚(おどろ)かせたいです。\nB: 素敵(すてき)な計画(けいかく)ですね。\nA: 何(なに)を食(た)べましたか？\nB: 地元(じもと)の名物(めいぶつ)を食(た)べました。",
     exampleSrc:"A: I want to surprise her at the birthday party.\nB: That is a wonderful plan.\nA: What did you eat?\nB: I ate the local specialty.",
     funFact:"驚かせる can be positive (surprise party) or negative (scare someone). サプライズ (surprise, from English) has become a popular loanword for planned pleasant surprises. Japanese surprise parties (sapuraizu paatii) have become trendy, influenced by Western culture but adapted with Japanese attention to detail."},

    {type:"mc", q:"親(おや)を心配(しんぱい)させてすみません means:", opts:["My parents worry too much","I am sorry for making my parents worry","Please do not worry my parents","My parents made me worry"], ans:"I am sorry for making my parents worry",
     hint:"Causative + てすみません = apologizing for causing someone to experience something."},

    {type:"teach", trg:"困(こま)らせる", src:"to trouble someone / to put someone in a difficult position", pos:"verb", gender:null,
     note:"Causative of 困(こま)る (to be troubled). Group 1: こまる to こまら + せる.",
     example:"A: いつも困(こま)らせてごめんなさい。\nB: 大丈夫(だいじょうぶ)ですよ。\nA: 楽(たの)しみですね。\nB: はい、今(いま)からわくわくしています。",
     exampleSrc:"A: I am sorry for always causing you trouble.\nB: It is okay.\nA: That is exciting.\nB: Yes, I am already excited.",
     funFact:"困らせる describes putting someone in a bind. Children who 'komaraseru' (trouble) their parents and employees who 'komaraseru' their bosses feel guilty about the impact. The phrase いつも困(こま)らせてごめん (sorry for always troubling you) acknowledges the ongoing burden you place on someone."},

    {type:"teach", trg:"喜(よろこ)ばせる", src:"to make someone happy / to delight", pos:"verb", gender:null,
     note:"Causative of 喜(よろこ)ぶ (to be pleased). Group 1: よろこぶ to よろこば + せる.",
     example:"A: お母(かあ)さんを喜(よろこ)ばせたいです。\nB: 何(なに)かプレゼントをあげたら？\nA: いい思(おも)い出(で)ですね。\nB: はい、一生(いっしょう)忘(わす)れません。",
     exampleSrc:"A: I want to make my mother happy.\nB: How about giving her a present?\nA: That is a nice memory.\nB: Yes, I will never forget it.",
     funFact:"喜ばせる is the positive counterpart to 心配させる and 困らせる. The desire to 喜(よろこ)ばせる (make someone happy) drives much of Japanese gift-giving culture. Choosing the perfect omiyage (souvenir) or birthday present is done with the goal of maximizing the recipient's joy."},

    {type:"teach", trg:"怒(おこ)らせる", src:"to make someone angry / to anger", pos:"verb", gender:null,
     note:"Causative of 怒(おこ)る (to get angry). Group 1: おこる to おこら + せる.",
     example:"A: 上司(じょうし)を怒(おこ)らせてしまいました。\nB: 早(はや)く謝(あやま)ったほうがいいですよ。\nA: どうでしたか？\nB: とても良(よ)かったです。",
     exampleSrc:"A: I accidentally angered my boss.\nB: You should apologize quickly.\nA: How was it?\nB: It was very good.",
     funFact:"怒らせる + てしまう (accidentally/regrettably) is a classic combination. Making your boss angry (joushi wo okoraseru) is a serious workplace event requiring immediate apology. The てしまう adds the nuance of 'I did not mean to, but it happened.' Quick, sincere apologies are the expected recovery strategy."},

    {type:"fb", s:"彼(かれ)はいつもみんなを{1}ます。\n(He always makes everyone laugh.)", a:"笑(わら)わせ", opts:["笑(わら)わせ","笑(わら)って","笑(わら)い","笑(わら)われ"], sSrc:"He always makes everyone laugh.",
     hint:"The causative of 笑(わら)う (to laugh). Group 1: あ-row + せる."},

    {type:"teach", trg:"感動的(かんどうてき)", src:"moving / touching / emotional", pos:"adj", gender:null,
     note:"な-adjective. 感動(かんどう) (being moved) + てき (like/typical).",
     example:"A: 感動的(かんどうてき)なスピーチでした。\nB: 私(わたし)も泣(な)きそうになりました。\nA: いつですか？\nB: 去年(きょねん)の夏(なつ)でした。",
     exampleSrc:"A: It was a moving speech.\nB: I almost cried too.\nA: When was it?\nB: It was last summer.",
     funFact:"感動的 describes things that stir deep emotion. Japanese culture places high value on being moved (kandou suru). Graduation ceremonies, farewell speeches, and sports victories are expected to be 感動的. The word appears in movie reviews, book descriptions, and event reports as high praise."},

    {type:"teach", trg:"泣(な)きそう", src:"about to cry / on the verge of tears", pos:"adj", gender:null,
     note:"泣(な)く (to cry) + そう (looks like/about to).\nStem + そう = about to happen.",
     example:"A: 悲(かな)しくて泣(な)きそうです。\nB: 大丈夫(だいじょうぶ)ですか？\nA: それはいいですね。\nB: はい、とても楽(たの)しかったです。",
     exampleSrc:"A: I am so sad I am about to cry.\nB: Are you okay?\nA: That is nice.\nB: Yes, it was very fun.",
     funFact:"泣きそう uses the auxiliary そう (looks like/about to). Verb stem + そう describes imminent actions: 落(お)ちそう (about to fall), 降(ふ)りそう (about to rain). 泣(な)きそうになる (to get to the point of almost crying) is a very common phrase in emotional storytelling and daily conversation."},

    {type:"mc", q:"上司(じょうし)を怒(おこ)らせてしまった means:", opts:["My boss was already angry","I intentionally angered my boss","I accidentally made my boss angry","My boss made me angry"], ans:"I accidentally made my boss angry",
     hint:"Causative + てしまう = causing something to happen regrettably or a...."},

    {type:"tip", title:"Emotional Causatives: Impact on Others",
     text:"Positive impact:\n笑(わら)わせる = make laugh\n喜(よろこ)ばせる = make happy\n驚(おどろ)かせる = surprise (can be positive)\n\nNegative impact:\n泣(な)かせる = make cry\n心配(しんぱい)させる = make worry\n困(こま)らせる = trouble someone\n怒(おこ)らせる = make angry\n\nApology pattern:\n[person]を + [emotional causative] + てすみません\n親(おや)を心配(しんぱい)させてすみません = sorry for worrying my parents.\n\nAccidental pattern:\n[emotional causative] + てしまう\n怒(おこ)らせてしまった = I accidentally angered them.",
     deepDive:{title:"Emotional Responsibility in Japanese",
      text:"Japanese culture emphasizes emotional responsibility. If you make someone cry, worry, or get angry, you bear responsibility for their emotional state.\n\nThe causative makes this explicit: I CAUSED their emotion.\n泣(な)かせた = I made them cry (my fault).\n心配(しんぱい)させた = I caused their worry (my responsibility).\n\nThis differs from English, where you might say 'they cried' without implying responsibility. In Japanese, using the causative acknowledges your role in causing the emotion, which is the first step toward apology and repair."}},

    {type:"match", pairs:[{trg:"笑(わら)わせる",src:"make laugh"},{trg:"泣(な)かせる",src:"make cry"},{trg:"心配(しんぱい)させる",src:"make worry"},{trg:"驚(おどろ)かせる",src:"surprise"}]},

    {type:"fb", s:"お母(かあ)さんを{1}たいです。\n(I want to make my mother happy.)", a:"喜(よろこ)ばせ", opts:["喜(よろこ)ばせ","喜(よろこ)んで","喜(よろこ)び","喜(よろこ)ばれ"], sSrc:"I want to make my mother happy.",
     hint:"The causative of 喜(よろこ)ぶ (to be pleased). Group 1: あ-row + せる."},

    {type:"match", pairs:[{trg:"困(こま)らせる",src:"trouble someone"},{trg:"喜(よろこ)ばせる",src:"make happy"},{trg:"怒(おこ)らせる",src:"make angry"},{trg:"感動的(かんどうてき)",src:"moving/touching"}]},

    {type:"mc", q:"泣(な)かせる vs 泣(な)かれる: what is the difference?", opts:["They mean the same thing","泣(な)かせる = make cry (causative); 泣(な)かれる = be bothered by crying (adversity passive)","泣(な)かせる is polite; 泣(な)かれる is casual","泣(な)かせる is past; 泣(な)かれる is present"], ans:"泣(な)かせる = make cry (causative); 泣(な)かれる = be bothered by crying (adversity passive)",
     hint:"One form is c... (you cause the action); the other is a... p... (you suffer from the action)."},
  {type:"match",pairs:[{trg:"泣(な)きそう",src:"about to cry / on the verge of tears"}]},
  {type:"fb", s:"映画(えいが)のラストシーンが観客(かんきゃく)を{1}ました。", a:["泣(な)かせる"], opts:["泣(な)かせる","笑(わら)わせる","驚(おどろ)かせる","困(こま)らせる"], hint:"The causative verb for provoking tears in someone.", sSrc:"The final scene of the film {1} the audience."}
]
};
export default BATCH2_L_2;
