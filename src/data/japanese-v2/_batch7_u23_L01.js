// Batch 7 – Unit 23 (B1.2 Nominalization): Abstract Concept Vocabulary
const BATCH7_L1 = {
  id:"jav2_u23l_b7_1", title:"ちゅうしょうてき", icon:"🧠", xp:15, board:true,
  steps:[
    {type:"intro", title:"ちゅうしょうてき",
     desc:"Learn abstract concept vocabulary used in discussions, essays, and formal speech. These words transform concrete ideas into nominalized concepts, matching this unit's grammar focus.",
     goals:["Use abstract nouns for ideas and values","Express philosophical concepts simply","Connect abstract ideas in discussion"]},

    {type:"teach", trg:"かちかん", src:"values / sense of values", pos:"noun", gender:null,
     note:"かち = value, かん = sense/view.\nかちかんがちがう = values differ.",
     example:"A: くにによってかちかんがちがいますね。\nB: そうですね。それがぶんかのちがいです。\nA: そうですか。よかったですね。\nB: はい、いい経験(けいけん)でした。",
     exampleSrc:"A: Values differ by country.\nB: Yes. That is the difference in culture.\nA: Is that so? That is good.\nB: Yes, it was a good experience.",
     funFact:"かちかん (価値観) discussions are common in Japanese media and education. 多様な価値観 (diverse values) is a modern goal. Traditional Japanese かちかん emphasize group harmony (和), effort (努力), and modesty (謙虚). Younger generations are shifting toward individual fulfillment (自己実現)."},

    {type:"teach", trg:"せきにん", src:"responsibility", pos:"noun", gender:null,
     note:"せきにんをとる = to take responsibility.\nせきにんかん = sense of responsibility.",
     example:"A: じぶんのせきにんをはたしましょう。\nB: はい、がんばります。\nA: また行(い)きたいですか？\nB: はい、ぜひ行(い)きたいです。",
     exampleSrc:"A: Let us fulfill our responsibilities.\nB: Yes, I will do my best.\nA: Do you want to go again?\nB: Yes, I definitely want to go.",
     funFact:"せきにん (責任) is heavy in Japanese culture. Taking せきにん publicly (引責, いんせき) is expected from leaders after failures. Company presidents resign to take せきにん for scandals. In daily life, せきにんかん (sense of responsibility) is cultivated from childhood through school duties and group activities."},

    {type:"teach", trg:"じゆう", src:"freedom / liberty", pos:"noun", gender:null,
     note:"Na-adjective. じゆうなじかん = free time.\nじゆうにつかってください = please use freely.",
     example:"A: だいがくはじゆうなじかんがおおいですね。\nB: そのじゆうをどうつかうかがだいじです。\nA: どのくらいかかりましたか？\nB: だいたい二時間(にじかん)ぐらいです。",
     exampleSrc:"A: University has a lot of free time.\nB: How you use that freedom is what matters.\nA: How long did it take?\nB: About two hours.",
     funFact:"じゆう (自由) was coined in the Meiji era to translate 'freedom/liberty.' Before that, the concept barely existed in Japanese. The word combines 自 (self) and 由 (from/reason). Japanese freedom is often balanced with 責任 (responsibility). 'Freedom without responsibility' is criticized as わがまま (selfishness)."},

    {type:"teach", trg:"びょうどう", src:"equality", pos:"noun", gender:null,
     note:"Na-adjective. びょうどうなけんり = equal rights.\nだんじょびょうどう = gender equality.",
     example:"A: だんじょびょうどうはまだじゅうぶんではありません。\nB: すこしずつかわっていますが。\nA: 難(むずか)しかったですか？\nB: 最初(さいしょ)は難(むずか)しかったですが、慣(な)れました。",
     exampleSrc:"A: Gender equality is still not sufficient.\nB: It is changing little by little.\nA: Was it difficult?\nB: It was difficult at first, but I got used to it.",
     funFact:"びょうどう (平等) combines 平 (flat/even) and 等 (equal/grade). Japan ranks low in global gender equality indices despite economic development. The concept of 機会均等 (きかいきんとう, equal opportunity) is legally established but culturally lagging. Progress accelerates as younger generations demand change."},

    {type:"teach", trg:"こせい", src:"individuality / personality", pos:"noun", gender:null,
     note:"こせいてき = individual/unique (adjective).\nこせいをだいじにする = to value individuality.",
     example:"A: こせいをいかしたしごとがしたいです。\nB: じぶんのとくちょうをしりましょう。\nA: おすすめですか？\nB: はい、ぜひ試(ため)してみてください。",
     exampleSrc:"A: I want work that uses my individuality.\nB: Let us discover your characteristics.\nA: Do you recommend it?\nB: Yes, please try it.",
     funFact:"こせい (個性) represents a cultural tension in Japan. Traditional education valued conformity (出る杭は打たれる: the nail that sticks out gets hammered). Modern Japan increasingly values こせい. Schools now have こせいをのばす (develop individuality) programs. The balance between こせい and 協調性 (teamwork) is debated."},

    {type:"teach", trg:"そうぞうりょく", src:"creativity / imagination", pos:"noun", gender:null,
     note:"そうぞう = creation/imagination. りょく = power.\nそうぞうりょくがゆたか = rich in creativity.",
     example:"A: こどもはそうぞうりょくがゆたかですね。\nB: おとなもそうぞうりょくをたいせつにしたいです。\nA: 一緒(いっしょ)に行(い)きませんか？\nB: いいですね。行(い)きましょう。",
     exampleSrc:"A: Children have rich imagination.\nB: Adults should value creativity too.\nA: Shall we go together?\nB: That sounds good. Let's go.",
     funFact:"そうぞうりょく (創造力/想像力) has two kanji versions: 創造 (creation) and 想像 (imagination). Japan's anime, manga, and game industries showcase enormous そうぞうりょく. Despite a conformist reputation, Japan produces some of the world's most creative content. The paradox of constraint breeding creativity is very Japanese."},

    {type:"teach", trg:"どうとく", src:"morality / ethics", pos:"noun", gender:null,
     note:"どうとくのじゅぎょう = ethics class.\nどうとくてき = moral/ethical.",
     example:"A: がっこうでどうとくのじゅぎょうがあります。\nB: どんなことをまなびますか？\nA: どこがおすすめですか？\nB: 京都(きょうと)がおすすめです。",
     exampleSrc:"A: There are ethics classes at school.\nB: What do you learn?\nA: Where do you recommend?\nB: I recommend Kyoto.",
     funFact:"どうとく (道徳) is a mandatory school subject in Japan since 2018. Classes discuss real-life moral dilemmas through stories and group discussion. Topics include いじめ prevention, environmental responsibility, and respect for life. The curriculum avoids prescribing answers, encouraging students to think independently."},

    {type:"teach", trg:"くうき", src:"atmosphere / mood / unspoken expectations", pos:"noun", gender:null,
     note:"くうきをよむ = to read the room.\nくうきがわるい = the atmosphere is bad/awkward.",
     example:"A: あのひとはくうきがよめないですね。\nB: もうすこしまわりをみたほうがいいですね。\nA: 何(なに)が一番(いちばん)良(よ)かったですか？\nB: 食(た)べ物(もの)が一番(いちばん)おいしかったです。",
     exampleSrc:"A: That person cannot read the room.\nB: They should pay more attention to their surroundings.\nA: What was the best part?\nB: The food was the most delicious.",
     funFact:"くうき (空気) literally means 'air' but socially means 'atmosphere' or 'unspoken expectations.' くうきをよむ (reading the air) is Japan's most essential social skill. KY (空気読めない, cannot read the atmosphere) became slang for socially oblivious people. This invisible social pressure is uniquely powerful in Japan."},

    {type:"teach", trg:"ほんね", src:"true feelings / real intention", pos:"noun", gender:null,
     note:"Opposite: たてまえ (public facade).\nほんねとたてまえ = real feelings vs social facade.",
     example:"A: ほんねをいうと、すこしふあんです。\nB: そうだったのですか。きもちはわかります。\nA: よく行(い)きますか？\nB: 月(つき)に一回(いっかい)ぐらい行(い)きます。",
     exampleSrc:"A: To tell the truth, I am a bit anxious.\nB: I see. I understand your feelings.\nA: Do you go often?\nB: I go about once a month.",
     funFact:"ほんね (本音) vs たてまえ (建前) is the fundamental duality of Japanese communication. ほんね = what you really think. たてまえ = what you say in public. This is not hypocrisy but social lubrication. Understanding when someone's たてまえ differs from their ほんね is an essential Japanese life skill."},

    {type:"teach", trg:"たてまえ", src:"public stance / social facade", pos:"noun", gender:null,
     note:"Opposite: ほんね (true feelings).\nたてまえをつかう = to use social facade.",
     example:"A: それはたてまえですか？ほんねですか？\nB: うーん、むずかしいしつもんですね。\nA: 誰(だれ)と行(い)きましたか？\nB: 友達(ともだち)と一緒(いっしょ)に行(い)きました。",
     exampleSrc:"A: Is that your real feeling or social facade?\nB: Hmm, that is a difficult question.\nA: Who did you go with?\nB: I went with a friend.",
     funFact:"たてまえ (建前) literally means 'the erected front' of a building. It is the face shown to the world. Japanese people navigate between ほんね and たてまえ constantly. Close friends eventually hear your ほんね. Business stays mostly たてまえ. Alcohol famously loosens たてまえ, which is why 飲み会 are valued."},

    {type:"teach", trg:"ちえ", src:"wisdom / intelligence", pos:"noun", gender:null,
     note:"ちえをしぼる = to rack one's brains.\nちえぶくろ = bag of wisdom.",
     example:"A: みんなでちえをしぼりましょう。\nB: いいアイデアがでるかもしれません。\nA: それは大変(たいへん)でしたね。\nB: はい、でもいい勉強(べんきょう)になりました。",
     exampleSrc:"A: Let us all put our heads together.\nB: Good ideas might come out.\nA: That must have been tough.\nB: Yes, but it was a good learning experience.",
     funFact:"ちえ (知恵) is wisdom gained through experience, distinct from ちしき (知識, knowledge from study). The folk hero 一休さん (Ikkyu-san) is famous for solving problems with ちえ. The expression 三人寄れば文殊の知恵 (three people gathered equal Monju's wisdom) values collective ちえ over individual genius."},

    // Quiz steps
    {type:"mc", q:"くうきをよむ means:",
     opts:["To read the room / sense unspoken expectations","To check the weather","To breathe fresh air","To test air quality"],
     ans:"To read the room / sense unspoken expectations",
     hint:"This is Japan's most essential social skill. KY is slang for people who cannot do this."},

    {type:"match", pairs:[
      {trg:"かちかん", src:"values"},
      {trg:"せきにん", src:"responsibility"},
      {trg:"じゆう", src:"freedom"},
      {trg:"びょうどう", src:"equality"},
      {trg:"こせい", src:"individuality"}
    ]},

    {type:"fb", s:"{1}をいうと、すこしふあんです。",
     a:["ほんね"],
     opts:["ほんね","たてまえ","くうき","ちえ"],
     hint:"Sharing your true feelings, not the public facade. This is the real intention behind the social mask.",
     sSrc:"To share my {1}, I am a bit anxious."},

    {type:"mc", q:"ほんね vs たてまえ is:",
     opts:["Real feelings vs social facade","Good vs bad","Past vs present","East vs west"],
     ans:"Real feelings vs social facade",
     hint:"This fundamental duality of Japanese communication is not hypocrisy but s... navigation."},

    {type:"fb", s:"じぶんの{1}をだいじにしましょう。",
     a:["こせい"],
     opts:["こせい","くうき","たてまえ","せきにん"],
     hint:"Value your uniqueness. This word means 'individuality.'",
     sSrc:"Let us value our own {1}."},

    {type:"mc", q:"どうとく became mandatory in Japanese schools in:",
     opts:["2018","1990","2000","1950"],
     ans:"2018",
     hint:"Ethics classes were upgraded from 'activities' to a formal subject with textbooks and grading."},

    {type:"match", pairs:[
      {trg:"ほんね", src:"true feelings"},
      {trg:"たてまえ", src:"social facade"},
      {trg:"くうき", src:"atmosphere/mood"},
      {trg:"どうとく", src:"morality"},
      {trg:"ちえ", src:"wisdom"}
    ]},

    {type:"fb", s:"みんなで{1}をしぼりましょう。いいアイデアがでるかも。",
     a:["ちえ"],
     opts:["ちえ","くうき","ほんね","せきにん"],
     hint:"Let us all think hard together. This noun means 'wisdom' gained through experience.",
     sSrc:"Let us all squeeze out our {1}. Good ideas might emerge."}
  ]
};
export default BATCH7_L1;
