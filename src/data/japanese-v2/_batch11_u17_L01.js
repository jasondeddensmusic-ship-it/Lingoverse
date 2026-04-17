// Batch 11 – Unit 17 (B1.1 Passive Voice): Compound Verbs I
const BATCH11_L1 = {
  id:"jav2_u17l_b11_1", title:"ふくごうどうし（1）", icon:"🔧", xp:15, board:true,
  steps:[
    {type:"intro", title:"ふくごうどうし（1）",
     desc:"Master compound verbs formed by combining two verbs. These are essential at B1 level and appear frequently in JLPT N3. The second verb modifies the meaning of the first.",
     goals:["Understand how compound verbs work in Japanese","Use common -はじめる, -おわる, -つづける compounds","Recognize aspectual compounds in context"]},

    {type:"teach", trg:"〜はじめる", src:"to begin ~ing", pos:"verb", gender:null,
     note:"Verb stem + はじめる. あめがふりはじめた = it started raining.\nIndicates the start of an action.",
     example:"A: にほんごをべんきょうしはじめたのはいつですか？\nB: きょねんのはるからです。\nA: どんな感(かん)じでしたか？\nB: 想像(そうぞう)していたよりずっと良(よ)かったです。",
     exampleSrc:"A: When did you start studying Japanese?\nB: From last spring.\nA: What was it like?\nB: It was much better than I imagined.",
     funFact:"〜はじめる attaches to the stem (ます form minus ます) of another verb. たべはじめる (start eating), よみはじめる (start reading). This pattern is incredibly productive and replaces what English does with 'start/begin + verb-ing.' It is tested on JLPT N4 and used daily."},

    {type:"teach", trg:"〜おわる", src:"to finish ~ing", pos:"verb", gender:null,
     note:"Verb stem + おわる. ほんをよみおわった = finished reading the book.\nIndicates completion.",
     example:"A: レポートをかきおわりましたか？\nB: あとすこしです。もうすぐおわります。\nA: 何(なに)を食(た)べましたか？\nB: 地元(じもと)の名物(めいぶつ)を食(た)べました。",
     exampleSrc:"A: Have you finished writing the report?\nB: Almost. I will finish soon.\nA: What did you eat?\nB: I ate the local specialty.",
     funFact:"〜おわる marks the definitive end of an action. たべおわる (finish eating), よみおわる (finish reading). It emphasizes completion rather than just stopping. For 'stop without finishing,' use 〜やめる instead. This aspectual distinction does not exist in English but is crucial in Japanese."},

    {type:"teach", trg:"〜つづける", src:"to continue ~ing", pos:"verb", gender:null,
     note:"Verb stem + つづける. はしりつづける = keep running.\nExpresses sustained action.",
     example:"A: にじかんもはしりつづけたのですか？\nB: マラソンのれんしゅうです。\nA: 楽(たの)しみですね。\nB: はい、今(いま)からわくわくしています。",
     exampleSrc:"A: You kept running for two hours?\nB: It is marathon practice.\nA: That is exciting.\nB: Yes, I am already excited.",
     funFact:"〜つづける expresses persistence and endurance. べんきょうしつづける (keep studying), がんばりつづける (keep trying). This pattern resonates deeply with the Japanese value of 根気 (konki, perseverance). JLPT N3 loves testing this compound verb."},

    {type:"teach", trg:"〜だす", src:"to suddenly start ~ing", pos:"verb", gender:null,
     note:"Verb stem + だす. あめがふりだした = it suddenly started raining.\nSudden or unexpected beginning.",
     example:"A: あかちゃんがとつぜんなきだしました。\nB: おなかがすいたのかもしれません。\nA: いい思(おも)い出(で)ですね。\nB: はい、一生(いっしょう)忘(わす)れません。",
     exampleSrc:"A: The baby suddenly started crying.\nB: Maybe the baby is hungry.\nA: That is a nice memory.\nB: Yes, I will never forget it.",
     funFact:"〜だす differs from 〜はじめる in its suddenness. ふりはじめる = it started raining (gradual). ふりだす = it suddenly started raining (unexpected). わらいだす = burst out laughing. なきだす = burst into tears. The だす (bring out) nuance suggests the action erupts outward."},

    {type:"teach", trg:"〜なおす", src:"to redo / to do again properly", pos:"verb", gender:null,
     note:"Verb stem + なおす. かきなおす = rewrite.\nImplies correcting or improving.",
     example:"A: このぶんしょうをかきなおしてください。\nB: わかりました。あしたまでになおします。\nA: どうでしたか？\nB: とても良(よ)かったです。",
     exampleSrc:"A: Please rewrite this document.\nB: Understood. I will fix it by tomorrow.\nA: How was it?\nB: It was very good.",
     funFact:"〜なおす combines any verb with なおす (to fix/repair). よみなおす (reread carefully), つくりなおす (remake), やりなおす (redo from scratch). It implies the first attempt was insufficient and needs improvement. Japanese craftsmanship values this process of revision and refinement."},

    {type:"teach", trg:"〜すぎる", src:"to do too much / excessively", pos:"verb", gender:null,
     note:"Verb stem + すぎる. たべすぎる = eat too much.\nAlso with adjectives: たかすぎる = too expensive.",
     example:"A: ゆうべのみすぎました。あたまがいたいです。\nB: みずをたくさんのんでください。\nA: いつですか？\nB: 去年(きょねん)の夏(なつ)でした。",
     exampleSrc:"A: I drank too much last night. My head hurts.\nB: Please drink lots of water.\nA: When was it?\nB: It was last summer.",
     funFact:"〜すぎる is one of the most useful compound patterns. たべすぎ (overeating), のみすぎ (overdrinking), はたらきすぎ (overworking). はたらきすぎ is a serious social issue in Japan, leading to the concept of 過労死 (karoshi, death from overwork), now recognized worldwide."},

    {type:"teach", trg:"〜あう", src:"to do together / mutually", pos:"verb", gender:null,
     note:"Verb stem + あう. たすけあう = help each other.\nExpresses reciprocal action.",
     example:"A: いいともだちはたすけあうものです。\nB: そうですね。わたしたちはたすけあっています。\nA: それはいいですね。\nB: はい、とても楽(たの)しかったです。",
     exampleSrc:"A: Good friends help each other.\nB: That's right. We help each other.\nA: That is nice.\nB: Yes, it was very fun.",
     funFact:"〜あう creates reciprocal verbs: はなしあう (discuss/talk together), みつめあう (gaze at each other), あいしあう (love each other). This pattern reflects the Japanese value of 共生 (kyousei, living together). Many Japanese social concepts center on mutual support and reciprocity."},

    {type:"teach", trg:"〜きる", src:"to do completely / to the limit", pos:"verb", gender:null,
     note:"Verb stem + きる. たべきる = eat it all up.\nもうはしりきれない = I can't run any more.",
     example:"A: このほんをよみきりましたか？\nB: はい、さんにちでよみきりました。\nA: そうですか。よかったですね。\nB: はい、いい経験(けいけん)でした。",
     exampleSrc:"A: Did you finish reading this entire book?\nB: Yes, I read it all in three days.\nA: Is that so? That is good.\nB: Yes, it was a good experience.",
     funFact:"〜きる implies doing something thoroughly to completion or exhaustion. しんじきれない = can't fully believe it. つかいきる = use up completely. In negative form, 〜きれない means 'unable to do completely,' expressing overwhelm: たべきれない = there's too much to eat."},

    {type:"teach", trg:"〜かける", src:"to start doing / to be in the middle of", pos:"verb", gender:null,
     note:"Verb stem + かける. いいかける = be about to say.\nIndicates an incomplete or interrupted action.",
     example:"A: なにかいいかけましたか？\nB: いいえ、なんでもありません。\nA: また行(い)きたいですか？\nB: はい、ぜひ行(い)きたいです。",
     exampleSrc:"A: Were you about to say something?\nB: No, it's nothing.\nA: Do you want to go again?\nB: Yes, I definitely want to go.",
     funFact:"〜かける describes an action that started but didn't finish: たべかけのサンドイッチ (a half-eaten sandwich), よみかけのほん (a half-read book). It captures the moment between start and completion. In conversation, いいかける (be about to say) often indicates hesitation or changed minds."},

    {type:"teach", trg:"〜こむ", src:"to go/put into deeply", pos:"verb", gender:null,
     note:"Verb stem + こむ. おもいこむ = be convinced of.\nImplies deep involvement or insertion.",
     example:"A: かれはじぶんがただしいとおもいこんでいます。\nB: だれかがせつめいしたほうがいいです。\nA: どのくらいかかりましたか？\nB: だいたい二時間(にじかん)ぐらいです。",
     exampleSrc:"A: He is convinced that he is right.\nB: Someone should explain to him.\nA: How long did it take?\nB: About two hours.",
     funFact:"〜こむ adds depth or intensity: とびこむ (jump into), はいりこむ (go deep inside), のりこむ (board/get into), おもいこむ (become deeply convinced). The こむ element (from 込む, to be crowded/packed) suggests pushing inward. This productive pattern creates dozens of common compound verbs."},

    {type:"teach", trg:"〜わすれる", src:"to forget to do", pos:"verb", gender:null,
     note:"Verb stem + わすれる. かぎをかけわすれた = forgot to lock.\nDifferent from plain わすれる.",
     example:"A: でんきをけしわすれました。\nB: もどってけしてきてください。\nA: 難(むずか)しかったですか？\nB: 最初(さいしょ)は難(むずか)しかったですが、慣(な)れました。",
     exampleSrc:"A: I forgot to turn off the light.\nB: Please go back and turn it off.\nA: Was it difficult?\nB: It was difficult at first, but I got used to it.",
     funFact:"〜わすれる specifies exactly WHAT you forgot to DO, not just that you forgot something. けしわすれる (forgot to turn off), もちわすれる (forgot to bring), いいわすれる (forgot to mention). This precision is typical of Japanese compound verbs, which describe nuances English handles with separate phrases."},

    // Quiz steps
    {type:"mc", q:"「ふりだす」と「ふりはじめる」はどうちがいますか？",
     opts:["ふりだす is sudden, ふりはじめる is gradual","They are the same","ふりだす is formal","ふりはじめる is for rain only"],
     ans:"ふりだす is sudden, ふりはじめる is gradual",
     hint:"One implies an unexpected, abrupt start while the other describes a g... beginning. Think of a s... downpour vs light drizzle starting."},

    {type:"fb", s:"ゆうべのみ{1}ました。あたまがいたいです。",
     a:["すぎ"],
     opts:["すぎ","はじめ","おわり","だし"],
     hint:"The speaker did something to excess last night and is now suffering. This compound means 'too much.'",
     sSrc:"I drank too much last night. My head hurts."},

    {type:"match", pairs:[
      {trg:"〜はじめる", src:"begin ~ing"},
      {trg:"〜おわる", src:"finish ~ing"},
      {trg:"〜つづける", src:"continue ~ing"},
      {trg:"〜なおす", src:"redo properly"}
    ]},

    {type:"mc", q:"「たべかけのサンドイッチ」はどんなサンドイッチですか？",
     opts:["A half-eaten sandwich","A freshly made sandwich","A discarded sandwich","A frozen sandwich"],
     ans:"A half-eaten sandwich",
     hint:"The compound 〜かける describes an action that was started but not completed. Apply this to eating."},

    {type:"fb", s:"いいともだちは{1}ものです。",
     a:["たすけあう"],
     opts:["たすけあう","たすけだす","たすけきる","たすけこむ"],
     hint:"The sentence is about good friends doing something mutually. The compound pattern means 'do together.'",
     sSrc:"Good friends help each other."},

    {type:"mc", q:"「かきなおす」はどういういみですか？",
     opts:["To rewrite (fixing mistakes)","To write quickly","To stop writing","To start writing"],
     ans:"To rewrite (fixing mistakes)",
     hint:"This compound combines 'write' with a verb meaning 'to fix/repair.' The result implies correcting through redoing."}
  ]
};
export default BATCH11_L1;
