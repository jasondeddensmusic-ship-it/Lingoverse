// Unit 19 Batch 2 Lesson 2: じょうけんのつかいわけ (Choosing the Right Conditional)
const BATCH2_L_2 = {
  id:"jav2_u19l_b2_2", title:"じょうけんのつかいわけ", icon:"⚖️", xp:15, board:true,
  steps:[
    {type:"intro", title:"じょうけんのつかいわけ",
     desc:"Practice choosing between all four conditionals in context. Real Japanese requires switching fluidly between たら, と, ば, and なら depending on the situation. This lesson builds that instinct through practical scenarios.",
     goals:["Choose the correct conditional for each context","Practice mixed conditional scenarios","Use compound conditional expressions"]},

    {type:"teach", trg:"〜としたら", src:"if we assume that ~ / supposing that ~", pos:"part", gender:null,
     note:"と + したら = if we suppose that. Introduces a hypothetical premise.\nUsed for discussing possibilities.",
     example:"A: てんきんするとしたらどこにすみたいですか？\nB: きょうとにすみたいです。\nA: 誰(だれ)と行(い)きましたか？\nB: 友達(ともだち)と一緒(いっしょ)に行(い)きました。",
     exampleSrc:"A: If you were to be transferred, where would you want to live?\nB: I would want to live in Kyoto.\nA: Who did you go with?\nB: I went with a friend.",
     funFact:"としたら adds 'if we suppose' to create a frame for discussion. It is less definite than もし + たら because it explicitly marks the scenario as hypothetical framing. Business meetings and planning discussions use this pattern: もしじしんがおきたとしたら (supposing an earthquake occurred)."},

    {type:"teach", trg:"〜ようなら", src:"if it seems like ~ / if it looks like ~", pos:"part", gender:null,
     note:"よう (appearance) + なら (if). Conditional based on observation.\nねつがあるようなら = if it looks like you have a fever.",
     example:"A: ねつがあるようならやすんでください。\nB: はい、きをつけます。\nA: それは大変(たいへん)でしたね。\nB: はい、でもいい勉強(べんきょう)になりました。",
     exampleSrc:"A: If it looks like you have a fever, please rest.\nB: Yes, I will be careful.\nA: That must have been tough.\nB: Yes, but it was a good learning experience.",
     funFact:"ようなら combines observation (appears to be) with conditional (if). It creates a softer, more tentative condition than たら alone. Doctors, teachers, and caring friends use this pattern: ようなら means 'if it appears that way.' It avoids stating the condition as certain."},

    {type:"teach", trg:"〜ないと", src:"if (you) don't ~ / unless ~", pos:"part", gender:null,
     note:"Negative form + と = if not done, automatic consequence follows.\nShort, casual version of ないとだめ (must do).",
     example:"A: はやくいかないとまにあいません。\nB: いそぎましょう！\nA: 本当(ほんとう)ですか？すごいですね。\nB: ありがとうございます。頑張(がんば)りました。",
     exampleSrc:"A: If we don't go quickly, we won't make it.\nB: Let us hurry!\nA: Really? That is amazing.\nB: Thank you. I worked hard.",
     funFact:"ないと is a compressed conditional expressing urgency. It uses と (automatic result) with the negative, creating 'if you do not X, then Y (bad result) automatically follows.' The full form ないといけない (must do) is often shortened to just ないと in casual speech, leaving the consequence implied."},

    {type:"teach", trg:"〜としても", src:"even if ~ / even assuming that ~", pos:"part", gender:null,
     note:"と + しても = even if we assume. Concessive conditional.\nがんばったとしてもむずかしい = even if you try hard, it is difficult.",
     example:"A: いまからがんばったとしてもむずかしいです。\nB: でもやってみなければわかりません。\nA: 私(わたし)も興味(きょうみ)があります。\nB: じゃあ、今度(こんど)一緒(いっしょ)にどうですか？",
     exampleSrc:"A: Even if you try hard from now, it is difficult.\nB: But you won't know unless you try.\nA: I am also interested.\nB: Then, how about doing it together next time?",
     funFact:"としても is the concessive counterpart of としたら. While としたら sets up a hypothetical to explore, としても acknowledges it and then dismisses its impact: 'even if that were so, the result would still be X.' It is the grammar of realistic assessment and managing expectations."},

    {type:"mc", q:"ねつがあるようならやすんでください means:", opts:["You definitely have a fever, rest now","If it looks like you have a fever, please rest","Please take your temperature","You should not rest even with a fever"], ans:"If it looks like you have a fever, please rest",
     hint:"ようなら creates a conditional based on how things appear, making the advice tentative and caring."},

    {type:"teach", trg:"ねつ", src:"fever / heat", pos:"noun", gender:null,
     note:"Kanji: 熱. ねつがある = to have a fever. ねつがさがる = fever goes down.\nAlso means enthusiasm: ねつい (passion).",
     example:"A: ねつが38どあります。\nB: びょういんにいったほうがいいですよ。\nA: どんな感(かん)じでしたか？\nB: 想像(そうぞう)していたよりずっと良(よ)かったです。",
     exampleSrc:"A: I have a 38-degree fever.\nB: You should go to the hospital.\nA: What was it like?\nB: It was much better than I imagined.",
     funFact:"熱 covers both physical heat and fever. Japanese people measure temperature in Celsius, so 38 degrees (38度) is a significant fever. Having a ねつ is one of the most common reasons for taking sick leave. Schools require students to stay home if their temperature exceeds 37.5 degrees."},

    {type:"teach", trg:"じっさいに", src:"actually / in reality / in practice", pos:"adv", gender:null,
     note:"Kanji: 実際に. じっさい = reality/actuality.\nContrasts with theory or assumption.",
     example:"A: りろんではかんたんですが、じっさいにはむずかしいです。\nB: やってみなければわかりません。\nA: 何(なに)を食(た)べましたか？\nB: 地元(じもと)の名物(めいぶつ)を食(た)べました。",
     exampleSrc:"A: In theory it is easy, but in practice it is difficult.\nB: You won't know unless you try.\nA: What did you eat?\nB: I ate the local specialty.",
     funFact:"実際に is the bridge between hypothesis and reality. It often appears after conditional discussions to ground things: としたら... but 実際に is... (supposing X, but in reality...). This contrast between 理論 (riron, theory) and 実際 (jissai, reality) is a common rhetorical structure in Japanese presentations."},

    {type:"fb", s:"はやくいか{1}まにあいません。\n(If we don't go quickly, we won't make it.)", a:"ないと", opts:["ないと","なくて","なければ","ないで"], sSrc:"If we don't go quickly, we won't make it.",
     hint:"The casual negative conditional with automatic consequence. Negative + と."},

    {type:"teach", trg:"たとえ〜ても", src:"even if ~ / no matter how much ~", pos:"part", gender:null,
     note:"たとえ (even if/suppose) + verb て-form + も.\nStrong concessive: even in that extreme case.",
     example:"A: たとえしっぱいしてもあきらめません。\nB: そのきもちがだいじです。\nA: 楽(たの)しみですね。\nB: はい、今(いま)からわくわくしています。",
     exampleSrc:"A: Even if I fail, I will not give up.\nB: That attitude is important.\nA: That is exciting.\nB: Yes, I am already excited.",
     funFact:"たとえ...ても is the strongest concessive conditional. たとえ signals 'even supposing the worst case,' and ても adds 'even so.' It expresses unwavering determination: たとえあめでもいく (even if it rains, I will go). This pattern appears in motivational speeches and personal declarations."},

    {type:"teach", trg:"あきらめる", src:"to give up / to abandon", pos:"verb", gender:null,
     note:"Group 2 verb. Kanji: 諦める. あきらめないで = do not give up.\nA key concept in Japanese motivational culture.",
     example:"A: むずかしいですがあきらめません。\nB: その調子（ちょうし）でがんばってください。\nA: いい思(おも)い出(で)ですね。\nB: はい、一生(いっしょう)忘(わす)れません。",
     exampleSrc:"A: It is difficult but I will not give up.\nB: Keep going at that pace.\nA: That is a nice memory.\nB: Yes, I will never forget it.",
     funFact:"諦める has Buddhist origins: the kanji 諦 means 'truth/enlightenment' in Buddhism, suggesting that giving up is accepting reality. However, modern Japanese culture celebrates not giving up (諦めない). Anime, sports, and business culture emphasize ganbaru (persevere) and akiramenai (never give up) as core virtues."},

    {type:"teach", trg:"りろん", src:"theory", pos:"noun", gender:null,
     note:"Kanji: 理論. り (reason/logic) + ろん (argument/theory).\nりろんてき = theoretical.",
     example:"A: りろんはわかりましたがじっせんがむずかしいです。\nB: れんしゅうがひつようですね。\nA: どうでしたか？\nB: とても良(よ)かったです。",
     exampleSrc:"A: I understand the theory but practice is difficult.\nB: Practice is needed.\nA: How was it?\nB: It was very good.",
     funFact:"理論 is the academic word for theory. Japanese education emphasizes both 理論 (theory) and 実践 (jissen, practice). The gap between knowing and doing (分かる vs できる, understanding vs ability) is a recognized challenge. Many Japanese learning methods focus on bridging this gap through repetition."},

    {type:"mc", q:"たとえしっぱいしてもあきらめません means:", opts:["If I fail, I will give up","Even if I fail, I will not give up","I failed and gave up","I never fail"], ans:"Even if I fail, I will not give up",
     hint:"たとえ...ても is the strongest concessive: e... in the worst case, the determination holds."},

    {type:"tip", title:"Advanced Conditional Combinations",
     text:"Hypothetical framing:\nとしたら = if we suppose that...\nとしても = even if we suppose that...\n\nObservation-based:\nようなら = if it seems/looks like...\n\nUrgency:\nないと = if you don't... (automatic bad result)\n\nDetermination:\nたとえ...ても = even if (worst case)\n\nThese combine with the four basic conditionals (たら, と, ば, なら) to create a rich system for expressing nuanced conditions.",
     deepDive:{title:"How Natives Choose Conditionals",
      text:"Native speakers choose conditionals instinctively based on the situation type:\n\n1. Daily plans: たら (most natural, most common)\n2. Advice: ば + いい (clean logical suggestion)\n3. Directions/facts: と (automatic results)\n4. Responding to context: なら (picking up topic)\n5. Regret: ば + よかった (should have)\n6. Caring advice: ようなら (observation-based)\n7. Urgency: ないと (compressed warning)\n8. Determination: たとえ...ても (extreme concessive)\n\nThe key is that most daily conversation uses たら. The others add specific nuances that たら cannot express."}},

    {type:"match", pairs:[{trg:"としたら",src:"if we suppose"},{trg:"としても",src:"even if we assume"},{trg:"ようなら",src:"if it looks like"},{trg:"ないと",src:"if you don't (casual)"}]},

    {type:"fb", s:"たとえしっぱいしても{1}ません。\n(Even if I fail, I will not give up.)", a:"あきらめ", opts:["あきらめ","あきらめて","あきらめた","あきらめる"], sSrc:"Even if I fail, I will not give up.",
     hint:"The negative masu-stem of あきらめる (to give up) before ません."},

    {type:"match", pairs:[{trg:"たとえ...ても",src:"even if (strongest)"},{trg:"ねつ",src:"fever"},{trg:"じっさいに",src:"in reality"},{trg:"あきらめる",src:"to give up"}]},

    {type:"mc", q:"としたら vs としても: what is the difference?", opts:["They mean the same thing","としたら explores a hypothetical; としても dismisses its impact","としたら is past; としても is present","としたら is formal; としても is casual"], ans:"としたら explores a hypothetical; としても dismisses its impact",
     hint:"One sets up 'what if?' for discussion. The other says 'even if that were so, it would not matter.'"},
  ]
};
export default BATCH2_L_2;
