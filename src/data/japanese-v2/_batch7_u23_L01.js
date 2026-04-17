// Batch 7 – Unit 23 (B1.2 Nominalization): Abstract Concept Vocabulary
const BATCH7_L1 = {
  id:"jav2_u23l_b7_1", title:"抽象的(ちゅうしょうてき)", icon:"🧠", xp:15, board:true,
  steps:[
    {type:"intro", title:"抽象的(ちゅうしょうてき)",
     desc:"Learn abstract concept vocabulary used in discussions, essays, and formal speech. These words transform concrete ideas into nominalized concepts, matching this unit's grammar focus.",
     goals:["Use abstract nouns for ideas and values","Express philosophical concepts simply","Connect abstract ideas in discussion"]},

    {type:"teach", trg:"価値観(かちかん)", src:"values / sense of values", pos:"noun", gender:null,
     note:"価値(かち) = value, 観(かん) = sense/view.\n価値観(かちかん)が違(ちが)う = values differ.",
     example:"A: 国(くに)によって価値観(かちかん)が違(ちが)いますね。\nB: そうですね。それが文化(ぶんか)の違(ちが)いです。\nA: そうですか。よかったですね。\nB: はい、いい経験(けいけん)でした。",
     exampleSrc:"A: Values differ by country.\nB: Yes. That is the difference in culture.\nA: Is that so? That is good.\nB: Yes, it was a good experience.",
     funFact:"価値観(かちかん) discussions are common in Japanese media and education. 多様(たよう)な価値観(かちかん) (diverse values) is a modern goal. Traditional Japanese 価値観(かちかん) emphasize group harmony (和(わ)), effort (努力(どりょく)), and modesty (謙虚(けんきょ)). Younger generations are shifting toward individual fulfillment (自己実現(じこじつげん))."},

    {type:"teach", trg:"責任(せきにん)", src:"responsibility", pos:"noun", gender:null,
     note:"責任(せきにん)を取(と)る = to take responsibility.\n責任感(せきにんかん) = sense of responsibility.",
     example:"A: 自分(じぶん)の責任(せきにん)を果(は)たしましょう。\nB: はい、頑張(がんば)ります。\nA: また行(い)きたいですか？\nB: はい、ぜひ行(い)きたいです。",
     exampleSrc:"A: Let us fulfill our responsibilities.\nB: Yes, I will do my best.\nA: Do you want to go again?\nB: Yes, I definitely want to go.",
     funFact:"責任(せきにん) is heavy in Japanese culture. Taking 責任(せきにん) publicly (引責(いんせき)) is expected from leaders after failures. Company presidents resign to take 責任(せきにん) for scandals. In daily life, 責任感(せきにんかん) (sense of responsibility) is cultivated from childhood through school duties and group activities."},

    {type:"teach", trg:"自由(じゆう)", src:"freedom / liberty", pos:"noun", gender:null,
     note:"Na-adjective. 自由(じゆう)な時間(じかん) = free time.\n自由(じゆう)に使(つか)ってください = please use freely.",
     example:"A: 大学(だいがく)は自由(じゆう)な時間(じかん)が多(おお)いですね。\nB: その自由(じゆう)をどう使(つか)うかが大事(だいじ)です。\nA: どのくらいかかりましたか？\nB: だいたい二時間(にじかん)ぐらいです。",
     exampleSrc:"A: University has a lot of free time.\nB: How you use that freedom is what matters.\nA: How long did it take?\nB: About two hours.",
     funFact:"自由(じゆう) was coined in the Meiji era to translate 'freedom/liberty.' Before that, the concept barely existed in Japanese. The word combines 自(じ) (self) and 由(ゆう) (from/reason). Japanese freedom is often balanced with 責任(せきにん) (responsibility). 'Freedom without responsibility' is criticized as わがまま (selfishness)."},

    {type:"teach", trg:"平等(びょうどう)", src:"equality", pos:"noun", gender:null,
     note:"Na-adjective. 平等(びょうどう)な権利(けんり) = equal rights.\n男女平等(だんじょびょうどう) = gender equality.",
     example:"A: 男女平等(だんじょびょうどう)はまだ十分(じゅうぶん)ではありません。\nB: 少(すこ)しずつ変(か)わっていますが。\nA: 難(むずか)しかったですか？\nB: 最初(さいしょ)は難(むずか)しかったですが、慣(な)れました。",
     exampleSrc:"A: Gender equality is still not sufficient.\nB: It is changing little by little.\nA: Was it difficult?\nB: It was difficult at first, but I got used to it.",
     funFact:"平等(びょうどう) combines 平(へい) (flat/even) and 等(とう) (equal/grade). Japan ranks low in global gender equality indices despite economic development. The concept of 機会均等(きかいきんとう) (equal opportunity) is legally established but culturally lagging. Progress accelerates as younger generations demand change."},

    {type:"teach", trg:"個性(こせい)", src:"individuality / personality", pos:"noun", gender:null,
     note:"個性的(こせいてき) = individual/unique (adjective).\n個性(こせい)を大事(だいじ)にする = to value individuality.",
     example:"A: 個性(こせい)を生(い)かした仕事(しごと)がしたいです。\nB: 自分(じぶん)の特徴(とくちょう)を知(し)りましょう。\nA: おすすめですか？\nB: はい、ぜひ試(ため)してみてください。",
     exampleSrc:"A: I want work that uses my individuality.\nB: Let us discover your characteristics.\nA: Do you recommend it?\nB: Yes, please try it.",
     funFact:"個性(こせい) represents a cultural tension in Japan. Traditional education valued conformity (出(で)る杭(くい)は打(う)たれる: the nail that sticks out gets hammered). Modern Japan increasingly values 個性(こせい). Schools now have 個性(こせい)を伸(の)ばす (develop individuality) programs. The balance between 個性(こせい) and 協調性(きょうちょうせい) (teamwork) is debated."},

    {type:"teach", trg:"創造力(そうぞうりょく)", src:"creativity / imagination", pos:"noun", gender:null,
     note:"創造(そうぞう) = creation/imagination. 力(りょく) = power.\n創造力(そうぞうりょく)が豊(ゆた)か = rich in creativity.",
     example:"A: 子(こ)どもは創造力(そうぞうりょく)が豊(ゆた)かですね。\nB: 大人(おとな)も創造力(そうぞうりょく)を大切(たいせつ)にしたいです。\nA: 一緒(いっしょ)に行(い)きませんか？\nB: いいですね。行(い)きましょう。",
     exampleSrc:"A: Children have rich imagination.\nB: Adults should value creativity too.\nA: Shall we go together?\nB: That sounds good. Let's go.",
     funFact:"創造力(そうぞうりょく) has two kanji versions: 創造(そうぞう) (creation) and 想像(そうぞう) (imagination). Japan's anime, manga, and game industries showcase enormous 創造力(そうぞうりょく). Despite a conformist reputation, Japan produces some of the world's most creative content. The paradox of constraint breeding creativity is very Japanese."},

    {type:"teach", trg:"道徳(どうとく)", src:"morality / ethics", pos:"noun", gender:null,
     note:"道徳(どうとく)の授業(じゅぎょう) = ethics class.\n道徳的(どうとくてき) = moral/ethical.",
     example:"A: 学校(がっこう)で道徳(どうとく)の授業(じゅぎょう)があります。\nB: どんなことを学(まな)びますか？\nA: どこがおすすめですか？\nB: 京都(きょうと)がおすすめです。",
     exampleSrc:"A: There are ethics classes at school.\nB: What do you learn?\nA: Where do you recommend?\nB: I recommend Kyoto.",
     funFact:"道徳(どうとく) is a mandatory school subject in Japan since 2018. Classes discuss real-life moral dilemmas through stories and group discussion. Topics include いじめ prevention, environmental responsibility, and respect for life. The curriculum avoids prescribing answers, encouraging students to think independently."},

    {type:"teach", trg:"空気(くうき)", src:"atmosphere / mood / unspoken expectations", pos:"noun", gender:null,
     note:"空気(くうき)を読(よ)む = to read the room.\n空気(くうき)が悪(わる)い = the atmosphere is bad/awkward.",
     example:"A: あの人(ひと)は空気(くうき)が読(よ)めないですね。\nB: もう少(すこ)し周(まわ)りを見(み)た方(ほう)がいいですね。\nA: 何(なに)が一番(いちばん)良(よ)かったですか？\nB: 食(た)べ物(もの)が一番(いちばん)おいしかったです。",
     exampleSrc:"A: That person cannot read the room.\nB: They should pay more attention to their surroundings.\nA: What was the best part?\nB: The food was the most delicious.",
     funFact:"空気(くうき) literally means 'air' but socially means 'atmosphere' or 'unspoken expectations.' 空気(くうき)を読(よ)む (reading the air) is Japan's most essential social skill. KY (空気読(くうきよ)めない, cannot read the atmosphere) became slang for socially oblivious people. This invisible social pressure is uniquely powerful in Japan."},

    {type:"teach", trg:"本音(ほんね)", src:"true feelings / real intention", pos:"noun", gender:null,
     note:"Opposite: 建前(たてまえ) (public facade).\n本音(ほんね)と建前(たてまえ) = real feelings vs social facade.",
     example:"A: 本音(ほんね)を言(い)うと、少(すこ)し不安(ふあん)です。\nB: そうだったのですか。気持(きも)ちはわかります。\nA: よく行(い)きますか？\nB: 月(つき)に一回(いっかい)ぐらい行(い)きます。",
     exampleSrc:"A: To tell the truth, I am a bit anxious.\nB: I see. I understand your feelings.\nA: Do you go often?\nB: I go about once a month.",
     funFact:"本音(ほんね) vs 建前(たてまえ) is the fundamental duality of Japanese communication. 本音(ほんね) = what you really think. 建前(たてまえ) = what you say in public. This is not hypocrisy but social lubrication. Understanding when someone's 建前(たてまえ) differs from their 本音(ほんね) is an essential Japanese life skill."},

    {type:"teach", trg:"建前(たてまえ)", src:"public stance / social facade", pos:"noun", gender:null,
     note:"Opposite: 本音(ほんね) (true feelings).\n建前(たてまえ)を使(つか)う = to use social facade.",
     example:"A: それは建前(たてまえ)ですか？本音(ほんね)ですか？\nB: うーん、難(むずか)しい質問(しつもん)ですね。\nA: 誰(だれ)と行(い)きましたか？\nB: 友達(ともだち)と一緒(いっしょ)に行(い)きました。",
     exampleSrc:"A: Is that your real feeling or social facade?\nB: Hmm, that is a difficult question.\nA: Who did you go with?\nB: I went with a friend.",
     funFact:"建前(たてまえ) literally means 'the erected front' of a building. It is the face shown to the world. Japanese people navigate between 本音(ほんね) and 建前(たてまえ) constantly. Close friends eventually hear your 本音(ほんね). Business stays mostly 建前(たてまえ). Alcohol famously loosens 建前(たてまえ), which is why 飲(の)み会(かい) are valued."},

    {type:"teach", trg:"知恵(ちえ)", src:"wisdom / intelligence", pos:"noun", gender:null,
     note:"知恵(ちえ)を絞(しぼ)る = to rack one's brains.\n知恵袋(ちえぶくろ) = bag of wisdom.",
     example:"A: みんなで知恵(ちえ)を絞(しぼ)りましょう。\nB: いいアイデアが出(で)るかもしれません。\nA: それは大変(たいへん)でしたね。\nB: はい、でもいい勉強(べんきょう)になりました。",
     exampleSrc:"A: Let us all put our heads together.\nB: Good ideas might come out.\nA: That must have been tough.\nB: Yes, but it was a good learning experience.",
     funFact:"知恵(ちえ) is wisdom gained through experience, distinct from 知識(ちしき) (knowledge from study). The folk hero 一休(いっきゅう)さん is famous for solving problems with 知恵(ちえ). The expression 三人(さんにん)寄(よ)れば文殊(もんじゅ)の知恵(ちえ) (three people gathered equal Monju's wisdom) values collective 知恵(ちえ) over individual genius."},

    // Quiz steps
    {type:"mc", q:"空気(くうき)を読(よ)む means:",
     opts:["To read the room / sense unspoken expectations","To check the weather","To breathe fresh air","To test air quality"],
     ans:"To read the room / sense unspoken expectations",
     hint:"This is Japan's most essential social skill. KY is slang for people who cannot do this."},

    {type:"match", pairs:[
      {trg:"価値観(かちかん)", src:"values"},
      {trg:"責任(せきにん)", src:"responsibility"},
      {trg:"自由(じゆう)", src:"freedom"},
      {trg:"平等(びょうどう)", src:"equality"},
      {trg:"個性(こせい)", src:"individuality"}
    ]},

    {type:"fb", s:"{1}を言(い)うと、少(すこ)し不安(ふあん)です。",
     a:["本音(ほんね)"],
     opts:["本音(ほんね)","建前(たてまえ)","空気(くうき)","知恵(ちえ)"],
     hint:"Sharing your true feelings, not the public facade. This is the real intention behind the social mask.",
     sSrc:"To share my {1}, I am a bit anxious."},

    {type:"mc", q:"本音(ほんね) vs 建前(たてまえ) is:",
     opts:["Real feelings vs social facade","Good vs bad","Past vs present","East vs west"],
     ans:"Real feelings vs social facade",
     hint:"This fundamental duality of Japanese communication is not hypocrisy but s... navigation."},

    {type:"fb", s:"自分(じぶん)の{1}を大事(だいじ)にしましょう。",
     a:["個性(こせい)"],
     opts:["個性(こせい)","空気(くうき)","建前(たてまえ)","責任(せきにん)"],
     hint:"Value your uniqueness. This word means 'individuality.'",
     sSrc:"Let us value our own {1}."},

    {type:"mc", q:"道徳(どうとく) became mandatory in Japanese schools in:",
     opts:["2018","1990","2000","1950"],
     ans:"2018",
     hint:"Ethics classes were upgraded from 'activities' to a formal subject with textbooks and grading."},

    {type:"match", pairs:[
      {trg:"本音(ほんね)", src:"true feelings"},
      {trg:"建前(たてまえ)", src:"social facade"},
      {trg:"空気(くうき)", src:"atmosphere/mood"},
      {trg:"道徳(どうとく)", src:"morality"},
      {trg:"知恵(ちえ)", src:"wisdom"}
    ]},

    {type:"fb", s:"みんなで{1}を絞(しぼ)りましょう。いいアイデアが出(で)るかも。",
     a:["知恵(ちえ)"],
     opts:["知恵(ちえ)","空気(くうき)","本音(ほんね)","責任(せきにん)"],
     hint:"Let us all think hard together. This noun means 'wisdom' gained through experience.",
     sSrc:"Let us all squeeze out our {1}. Good ideas might emerge."}
  ]
};
export default BATCH7_L1;
