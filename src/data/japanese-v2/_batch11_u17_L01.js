// Batch 11 – Unit 17 (B1.1 Passive Voice): Compound Verbs I
const BATCH11_L1 = {
  id:"jav2_u17l_b11_1", title:"複合動詞(ふくごうどうし)（1）", icon:"🔧", xp:15, board:true,
  steps:[
    {type:"intro", title:"複合動詞(ふくごうどうし)（1）",
     desc:"Master compound verbs formed by combining two verbs. These are essential at B1 level and appear frequently in JLPT N3. The second verb modifies the meaning of the first.",
     goals:["Understand how compound verbs work in Japanese","Use common -始(はじ)める, -終(お)わる, -続(つづ)ける compounds","Recognize aspectual compounds in context"]},

    {type:"teach", trg:"〜始(はじ)める", src:"to begin ~ing", pos:"verb", gender:null,
     note:"Verb stem + 始(はじ)める. 雨(あめ)が降(ふ)り始(はじ)めた = it started raining.\nIndicates the start of an action.",
     example:"A: 日本語(にほんご)を勉強(べんきょう)し始(はじ)めたのはいつですか？\nB: 去年(きょねん)の春(はる)からです。\nA: どんな感(かん)じでしたか？\nB: 想像(そうぞう)していたよりずっと良(よ)かったです。",
     exampleSrc:"A: When did you start studying Japanese?\nB: From last spring.\nA: What was it like?\nB: It was much better than I imagined.",
     funFact:"〜始(はじ)める attaches to the stem (ます form minus ます) of another verb. 食(た)べ始(はじ)める (start eating), 読(よ)み始(はじ)める (start reading). This pattern is incredibly productive and replaces what English does with 'start/begin + verb-ing.' It is tested on JLPT N4 and used daily."},

    {type:"teach", trg:"〜終(お)わる", src:"to finish ~ing", pos:"verb", gender:null,
     note:"Verb stem + 終(お)わる. 本(ほん)を読(よ)み終(お)わった = finished reading the book.\nIndicates completion.",
     example:"A: レポートを書(か)き終(お)わりましたか？\nB: あと少(すこ)しです。もうすぐ終(お)わります。\nA: 何(なに)を食(た)べましたか？\nB: 地元(じもと)の名物(めいぶつ)を食(た)べました。",
     exampleSrc:"A: Have you finished writing the report?\nB: Almost. I will finish soon.\nA: What did you eat?\nB: I ate the local specialty.",
     funFact:"〜終(お)わる marks the definitive end of an action. 食(た)べ終(お)わる (finish eating), 読(よ)み終(お)わる (finish reading). It emphasizes completion rather than just stopping. For 'stop without finishing,' use 〜やめる instead. This aspectual distinction does not exist in English but is crucial in Japanese."},

    {type:"teach", trg:"〜続(つづ)ける", src:"to continue ~ing", pos:"verb", gender:null,
     note:"Verb stem + 続(つづ)ける. 走(はし)り続(つづ)ける = keep running.\nExpresses sustained action.",
     example:"A: 二時間(にじかん)も走(はし)り続(つづ)けたのですか？\nB: マラソンの練習(れんしゅう)です。\nA: 楽(たの)しみですね。\nB: はい、今(いま)からわくわくしています。",
     exampleSrc:"A: You kept running for two hours?\nB: It is marathon practice.\nA: That is exciting.\nB: Yes, I am already excited.",
     funFact:"〜続(つづ)ける expresses persistence and endurance. 勉強(べんきょう)し続(つづ)ける (keep studying), 頑張(がんば)り続(つづ)ける (keep trying). This pattern resonates deeply with the Japanese value of 根気(こんき) (perseverance). JLPT N3 loves testing this compound verb."},

    {type:"teach", trg:"〜出(だ)す", src:"to suddenly start ~ing", pos:"verb", gender:null,
     note:"Verb stem + 出(だ)す. 雨(あめ)が降(ふ)り出(だ)した = it suddenly started raining.\nSudden or unexpected beginning.",
     example:"A: 赤(あか)ちゃんが突然(とつぜん)泣(な)き出(だ)しました。\nB: お腹(なか)が空(す)いたのかもしれません。\nA: いい思(おも)い出(で)ですね。\nB: はい、一生(いっしょう)忘(わす)れません。",
     exampleSrc:"A: The baby suddenly started crying.\nB: Maybe the baby is hungry.\nA: That is a nice memory.\nB: Yes, I will never forget it.",
     funFact:"〜出(だ)す differs from 〜始(はじ)める in its suddenness. 降(ふ)り始(はじ)める = it started raining (gradual). 降(ふ)り出(だ)す = it suddenly started raining (unexpected). 笑(わら)い出(だ)す = burst out laughing. 泣(な)き出(だ)す = burst into tears. The 出(だ)す (bring out) nuance suggests the action erupts outward."},

    {type:"teach", trg:"〜直(なお)す", src:"to redo / to do again properly", pos:"verb", gender:null,
     note:"Verb stem + 直(なお)す. 書(か)き直(なお)す = rewrite.\nImplies correcting or improving.",
     example:"A: この文章(ぶんしょう)を書(か)き直(なお)してください。\nB: わかりました。明日(あした)までに直(なお)します。\nA: どうでしたか？\nB: とても良(よ)かったです。",
     exampleSrc:"A: Please rewrite this document.\nB: Understood. I will fix it by tomorrow.\nA: How was it?\nB: It was very good.",
     funFact:"〜直(なお)す combines any verb with 直(なお)す (to fix/repair). 読(よ)み直(なお)す (reread carefully), 作(つく)り直(なお)す (remake), やり直(なお)す (redo from scratch). It implies the first attempt was insufficient and needs improvement. Japanese craftsmanship values this process of revision and refinement."},

    {type:"teach", trg:"〜過(す)ぎる", src:"to do too much / excessively", pos:"verb", gender:null,
     note:"Verb stem + 過(す)ぎる. 食(た)べ過(す)ぎる = eat too much.\nAlso with adjectives: 高(たか)過(す)ぎる = too expensive.",
     example:"A: 夕(ゆう)べ飲(の)み過(す)ぎました。頭(あたま)が痛(いた)いです。\nB: 水(みず)をたくさん飲(の)んでください。\nA: いつですか？\nB: 去年(きょねん)の夏(なつ)でした。",
     exampleSrc:"A: I drank too much last night. My head hurts.\nB: Please drink lots of water.\nA: When was it?\nB: It was last summer.",
     funFact:"〜過(す)ぎる is one of the most useful compound patterns. 食(た)べ過(す)ぎ (overeating), 飲(の)み過(す)ぎ (overdrinking), 働(はたら)き過(す)ぎ (overworking). 働(はたら)き過(す)ぎ is a serious social issue in Japan, leading to the concept of 過労死(かろうし) (karoshi, death from overwork), now recognized worldwide."},

    {type:"teach", trg:"〜合(あ)う", src:"to do together / mutually", pos:"verb", gender:null,
     note:"Verb stem + 合(あ)う. 助(たす)け合(あ)う = help each other.\nExpresses reciprocal action.",
     example:"A: いい友達(ともだち)は助(たす)け合(あ)うものです。\nB: そうですね。私(わたし)たちは助(たす)け合(あ)っています。\nA: それはいいですね。\nB: はい、とても楽(たの)しかったです。",
     exampleSrc:"A: Good friends help each other.\nB: That's right. We help each other.\nA: That is nice.\nB: Yes, it was very fun.",
     funFact:"〜合(あ)う creates reciprocal verbs: 話(はな)し合(あ)う (discuss/talk together), 見(み)つめ合(あ)う (gaze at each other), 愛(あい)し合(あ)う (love each other). This pattern reflects the Japanese value of 共生(きょうせい) (living together). Many Japanese social concepts center on mutual support and reciprocity."},

    {type:"teach", trg:"〜切(き)る", src:"to do completely / to the limit", pos:"verb", gender:null,
     note:"Verb stem + 切(き)る. 食(た)べ切(き)る = eat it all up.\nもう走(はし)り切(き)れない = I can't run any more.",
     example:"A: この本(ほん)を読(よ)み切(き)りましたか？\nB: はい、三日(さんにち)で読(よ)み切(き)りました。\nA: そうですか。よかったですね。\nB: はい、いい経験(けいけん)でした。",
     exampleSrc:"A: Did you finish reading this entire book?\nB: Yes, I read it all in three days.\nA: Is that so? That is good.\nB: Yes, it was a good experience.",
     funFact:"〜切(き)る implies doing something thoroughly to completion or exhaustion. 信(しん)じ切(き)れない = can't fully believe it. 使(つか)い切(き)る = use up completely. In negative form, 〜切(き)れない means 'unable to do completely,' expressing overwhelm: 食(た)べ切(き)れない = there's too much to eat."},

    {type:"teach", trg:"〜かける", src:"to start doing / to be in the middle of", pos:"verb", gender:null,
     note:"Verb stem + かける. 言(い)いかける = be about to say.\nIndicates an incomplete or interrupted action.",
     example:"A: 何(なに)か言(い)いかけましたか？\nB: いいえ、なんでもありません。\nA: また行(い)きたいですか？\nB: はい、ぜひ行(い)きたいです。",
     exampleSrc:"A: Were you about to say something?\nB: No, it's nothing.\nA: Do you want to go again?\nB: Yes, I definitely want to go.",
     funFact:"〜かける describes an action that started but didn't finish: 食(た)べかけのサンドイッチ (a half-eaten sandwich), 読(よ)みかけの本(ほん) (a half-read book). It captures the moment between start and completion. In conversation, 言(い)いかける (be about to say) often indicates hesitation or changed minds."},

    {type:"teach", trg:"〜込(こ)む", src:"to go/put into deeply", pos:"verb", gender:null,
     note:"Verb stem + 込(こ)む. 思(おも)い込(こ)む = be convinced of.\nImplies deep involvement or insertion.",
     example:"A: 彼(かれ)は自分(じぶん)が正(ただ)しいと思(おも)い込(こ)んでいます。\nB: 誰(だれ)かが説明(せつめい)した方(ほう)がいいです。\nA: どのくらいかかりましたか？\nB: だいたい二時間(にじかん)ぐらいです。",
     exampleSrc:"A: He is convinced that he is right.\nB: Someone should explain to him.\nA: How long did it take?\nB: About two hours.",
     funFact:"〜込(こ)む adds depth or intensity: 飛(と)び込(こ)む (jump into), 入(はい)り込(こ)む (go deep inside), 乗(の)り込(こ)む (board/get into), 思(おも)い込(こ)む (become deeply convinced). The 込(こ)む element (from 込む, to be crowded/packed) suggests pushing inward. This productive pattern creates dozens of common compound verbs."},

    {type:"teach", trg:"〜忘(わす)れる", src:"to forget to do", pos:"verb", gender:null,
     note:"Verb stem + 忘(わす)れる. 鍵(かぎ)をかけ忘(わす)れた = forgot to lock.\nDifferent from plain 忘(わす)れる.",
     example:"A: 電気(でんき)を消(け)し忘(わす)れました。\nB: 戻(もど)って消(け)してきてください。\nA: 難(むずか)しかったですか？\nB: 最初(さいしょ)は難(むずか)しかったですが、慣(な)れました。",
     exampleSrc:"A: I forgot to turn off the light.\nB: Please go back and turn it off.\nA: Was it difficult?\nB: It was difficult at first, but I got used to it.",
     funFact:"〜忘(わす)れる specifies exactly WHAT you forgot to DO, not just that you forgot something. 消(け)し忘(わす)れる (forgot to turn off), 持(も)ち忘(わす)れる (forgot to bring), 言(い)い忘(わす)れる (forgot to mention). This precision is typical of Japanese compound verbs, which describe nuances English handles with separate phrases."},

    // Quiz steps
    {type:"mc", q:"「降(ふ)り出(だ)す」と「降(ふ)り始(はじ)める」はどう違(ちが)いますか？",
     opts:["降(ふ)り出(だ)す is sudden, 降(ふ)り始(はじ)める is gradual","They are the same","降(ふ)り出(だ)す is formal","降(ふ)り始(はじ)める is for rain only"],
     ans:"降(ふ)り出(だ)す is sudden, 降(ふ)り始(はじ)める is gradual",
     hint:"One implies an unexpected, abrupt start while the other describes a g... beginning. Think of a s... downpour vs light drizzle starting."},

    {type:"fb", s:"夕(ゆう)べ飲(の)み{1}ました。頭(あたま)が痛(いた)いです。",
     a:["過(す)ぎ"],
     opts:["過(す)ぎ","始(はじ)め","終(お)わり","出(だ)し"],
     hint:"The speaker did something to excess last night and is now suffering. This compound means 'too much.'",
     sSrc:"I drank too much last night. My head hurts."},

    {type:"match", pairs:[
      {trg:"〜始(はじ)める", src:"begin ~ing"},
      {trg:"〜終(お)わる", src:"finish ~ing"},
      {trg:"〜続(つづ)ける", src:"continue ~ing"},
      {trg:"〜直(なお)す", src:"redo properly"}
    ]},

    {type:"mc", q:"「食(た)べかけのサンドイッチ」はどんなサンドイッチですか？",
     opts:["A half-eaten sandwich","A freshly made sandwich","A discarded sandwich","A frozen sandwich"],
     ans:"A half-eaten sandwich",
     hint:"The compound 〜かける describes an action that was started but not completed. Apply this to eating."},

    {type:"fb", s:"いい友達(ともだち)は{1}ものです。",
     a:["助(たす)け合(あ)う"],
     opts:["助(たす)け合(あ)う","助(たす)け出(だ)す","助(たす)け切(き)る","助(たす)け込(こ)む"],
     hint:"The sentence is about good friends doing something mutually. The compound pattern means 'do together.'",
     sSrc:"Good friends help each other."},

    {type:"mc", q:"「書(か)き直(なお)す」はどういう意味(いみ)ですか？",
     opts:["To rewrite (fixing mistakes)","To write quickly","To stop writing","To start writing"],
     ans:"To rewrite (fixing mistakes)",
     hint:"This compound combines 'write' with a verb meaning 'to fix/repair.' The result implies correcting through redoing."}
  ,{type:"match",pairs:[{trg:"〜出(だ)す",src:"to suddenly start ~ing"},{trg:"〜合(あ)う",src:"to do together / mutually"},{trg:"〜切(き)る",src:"to do completely / to the limit"},{trg:"〜かける",src:"to start doing / to be in the middle of"},{trg:"〜込(こ)む",src:"to go/put into deeply"},{trg:"〜忘(わす)れる",src:"to forget to do"}]}]
};
export default BATCH11_L1;
