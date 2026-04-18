// Batch 11 – Unit 18 (B1.1 Causative): Compound Verbs II & Manner Adverbs
const BATCH11_L1 = {
  id:"jav2_u18l_b11_1", title:"様子(ようす)のことば", icon:"💫", xp:15, board:true,
  steps:[
    {type:"intro", title:"様子(ようす)のことば",
     desc:"Learn adverbs of manner that describe HOW actions are performed. Japanese is rich in manner adverbs, including many onomatopoeic expressions unique to the language.",
     goals:["Use common manner adverbs correctly","Understand onomatopoeic adverbs (giongo/gitaigo)","Describe the quality and manner of actions"]},

    {type:"teach", trg:"ゆっくり", src:"slowly / at a leisurely pace", pos:"adv", gender:null,
     note:"One of the most useful adverbs.\nゆっくりしてください = take your time / relax.",
     example:"A: もう少(すこ)しゆっくり話(はな)してください。\nB: はい、ゆっくり話(はな)します。\nA: おすすめですか？\nB: はい、ぜひ試(ため)してみてください。",
     exampleSrc:"A: Please speak a little more slowly.\nB: Yes, I will speak slowly.\nA: Do you recommend it?\nB: Yes, please try it.",
     funFact:"ゆっくり is possibly the most important adverb for Japanese learners. ゆっくり話(はな)してください (please speak slowly) is a survival phrase. Beyond speed, it conveys relaxation: ゆっくり休(やす)んでください (please rest well). The doubled sound pattern creates a gentle, unhurried rhythm."},

    {type:"teach", trg:"はっきり", src:"clearly / distinctly", pos:"adv", gender:null,
     note:"はっきり言(い)う = say clearly. はっきり見(み)える = see clearly.\nCan sound forceful in opinions.",
     example:"A: はっきり言(い)って、この計画(けいかく)は無理(むり)です。\nB: そうですか。他(ほか)の方法(ほうほう)を考(かんが)えましょう。\nA: 一緒(いっしょ)に行(い)きませんか？\nB: いいですね。行(い)きましょう。",
     exampleSrc:"A: Frankly speaking, this plan is impossible.\nB: I see. Let's think of another method.\nA: Shall we go together?\nB: That sounds good. Let's go.",
     funFact:"はっきり adds emphasis and clarity. はっきり言(い)って (frankly speaking) is a phrase used when someone wants to be direct, which is unusual in indirect Japanese communication. When someone says はっきり言(い)います, listeners brace themselves for honest, potentially uncomfortable opinions."},

    {type:"teach", trg:"ちゃんと", src:"properly / correctly", pos:"adv", gender:null,
     note:"Implies doing something the right way.\nちゃんとして！= behave properly!",
     example:"A: 宿題(しゅくだい)をちゃんとやりましたか？\nB: はい、ちゃんとやりました。\nA: どこがおすすめですか？\nB: 京都(きょうと)がおすすめです。",
     exampleSrc:"A: Did you do your homework properly?\nB: Yes, I did it properly.\nA: Where do you recommend?\nB: I recommend Kyoto.",
     funFact:"ちゃんと is a parenting word that Japanese children hear constantly. ちゃんと座(すわ)って (sit properly), ちゃんと食(た)べて (eat properly), ちゃんとしなさい (behave!). It implies meeting expected standards. The word has an interesting onomatopoeic origin suggesting something clicking neatly into place."},

    {type:"teach", trg:"しっかり", src:"firmly / reliably", pos:"adv", gender:null,
     note:"しっかりする = pull yourself together.\nしっかりした人(ひと) = reliable person.",
     example:"A: しっかり勉強(べんきょう)してください。\nB: はい、頑張(がんば)ります。\nA: 何(なに)が一番(いちばん)良(よ)かったですか？\nB: 食(た)べ物(もの)が一番(いちばん)おいしかったです。",
     exampleSrc:"A: Please study diligently.\nB: Yes, I will do my best.\nA: What was the best part?\nB: The food was the most delicious.",
     funFact:"しっかり implies strength, firmness, and reliability. しっかり者(もの) (a reliable person) is high praise. しっかりした意見(いけん) (a firm opinion) is respected. Parents tell sick children しっかりして (hang in there). The word conveys both physical and mental steadfastness."},

    {type:"teach", trg:"きちんと", src:"neatly / properly / in an orderly way", pos:"adv", gender:null,
     note:"Emphasizes orderliness and correctness.\nきちんと並(なら)べる = arrange neatly.",
     example:"A: 靴(くつ)をきちんと並(なら)べてください。\nB: はい、すぐ並(なら)べます。\nA: よく行(い)きますか？\nB: 月(つき)に一回(いっかい)ぐらい行(い)きます。",
     exampleSrc:"A: Please line up the shoes neatly.\nB: Yes, I will line them up right away.\nA: Do you go often?\nB: I go about once a month.",
     funFact:"きちんと emphasizes visual order and tidiness. Japanese homes have shoe racks where shoes face the door, きちんと並(なら)べて (lined up neatly). The overlap with ちゃんと is subtle: ちゃんと = doing correctly, きちんと = doing neatly/orderly. Both reflect Japanese appreciation for precision and order."},

    {type:"teach", trg:"ぴったり", src:"exactly / perfectly fitting", pos:"adv", gender:null,
     note:"Onomatopoeia. ぴったり合(あ)う = fit perfectly.\n時間(じかん)ぴったり = right on time.",
     example:"A: この服(ふく)はぴったりです。\nB: サイズがぴったりですね。\nA: 誰(だれ)と行(い)きましたか？\nB: 友達(ともだち)と一緒(いっしょ)に行(い)きました。",
     exampleSrc:"A: These clothes fit perfectly.\nB: The size is just right.\nA: Who did you go with?\nB: I went with a friend.",
     funFact:"ぴったり is a delightful onomatopoeic word suggesting two surfaces meeting perfectly with a 'snap.' It applies to clothes fitting, puzzle pieces matching, or arriving at the exact right time. ぴったりくる (it clicks/resonates) describes when something feels just right for you."},

    {type:"teach", trg:"ぐっすり", src:"soundly (sleeping)", pos:"adv", gender:null,
     note:"Only used with sleeping. ぐっすり寝(ね)る = sleep soundly.\nOnomatopoeic expression.",
     example:"A: 夕(ゆう)べはぐっすり寝(ね)られましたか？\nB: はい、朝(あさ)までぐっすりでした。\nA: それは大変(たいへん)でしたね。\nB: はい、でもいい勉強(べんきょう)になりました。",
     exampleSrc:"A: Did you sleep soundly last night?\nB: Yes, I slept soundly until morning.\nA: That must have been tough.\nB: Yes, but it was a good learning experience.",
     funFact:"ぐっすり exclusively describes deep, restful sleep. It is one of hundreds of Japanese onomatopoeia (擬態語(ぎたいご)) that describe states and manners. Japanese has far more sound-symbolic words than English: ぐっすり (sound sleep), うとうと (dozing), すやすや (peaceful sleep of a child)."},

    {type:"teach", trg:"そっと", src:"gently / quietly / secretly", pos:"adv", gender:null,
     note:"Doing something with care not to disturb.\nそっとしておく = leave quietly alone.",
     example:"A: 赤(あか)ちゃんが寝(ね)ています。そっと歩(ある)いてください。\nB: わかりました。\nA: 本当(ほんとう)ですか？すごいですね。\nB: ありがとうございます。頑張(がんば)りました。",
     exampleSrc:"A: The baby is sleeping. Please walk quietly.\nB: Understood.\nA: Really? That is amazing.\nB: Thank you. I worked hard.",
     funFact:"そっと conveys delicacy and discretion. そっとドアを閉(し)める (close the door gently), そっと涙(なみだ)を拭(ふ)く (quietly wipe tears), そっとしておく (leave someone alone without disturbing). It captures the Japanese aesthetic of 控(ひか)えめ (being restrained and considerate of others)."},

    {type:"teach", trg:"じっと", src:"still / motionlessly / intently", pos:"adv", gender:null,
     note:"じっとする = stay still. じっと見(み)る = stare.\nImplies sustained stillness or focus.",
     example:"A: じっとしていてください。写真(しゃしん)を撮(と)ります。\nB: はい、動(うご)きません。\nA: 私(わたし)も興味(きょうみ)があります。\nB: じゃあ、今度(こんど)一緒(いっしょ)にどうですか？",
     exampleSrc:"A: Please stay still. I will take a photo.\nB: Okay, I won't move.\nA: I am also interested.\nB: Then, how about doing it together next time?",
     funFact:"じっと has two main uses: physical stillness (じっとする = stay still) and intense watching (じっと見(み)る = stare/gaze intently). A parent might say じっとしなさい to a fidgety child. A lover might じっと目(め)を見(み)る (gaze deeply into eyes). Context determines the nuance."},

    {type:"teach", trg:"どんどん", src:"rapidly / one after another", pos:"adv", gender:null,
     note:"Onomatopoeia from drumming sound. どんどん進(すす)む = advance rapidly.\nExpresses quick succession.",
     example:"A: 日本語(にほんご)がどんどん上手(じょうず)になっていますね。\nB: まだまだです。もっと頑張(がんば)ります。\nA: どんな感(かん)じでしたか？\nB: 想像(そうぞう)していたよりずっと良(よ)かったです。",
     exampleSrc:"A: Your Japanese is getting better and better.\nB: Not yet. I will try harder.\nA: What was it like?\nB: It was much better than I imagined.",
     funFact:"どんどん mimics the sound of drumming and conveys rapid, enthusiastic progression. どんどん食(た)べて (eat up, keep going!), どんどん進(すす)んで (keep advancing!). The encouraging tone makes it popular in motivational contexts. It is one of the most frequently tested onomatopoeia on JLPT."},

    {type:"teach", trg:"だんだん", src:"gradually / little by little", pos:"adv", gender:null,
     note:"Gradual change over time. だんだん寒(さむ)くなる = gradually get colder.\nContrast with どんどん (rapid).",
     example:"A: 最近(さいきん)だんだん寒(さむ)くなってきましたね。\nB: そうですね。もう冬(ふゆ)ですね。\nA: 何(なに)を食(た)べましたか？\nB: 地元(じもと)の名物(めいぶつ)を食(た)べました。",
     exampleSrc:"A: It has been gradually getting colder recently.\nB: That's right. It is already winter.\nA: What did you eat?\nB: I ate the local specialty.",
     funFact:"だんだん describes slow, incremental change: だんだんわかってきた (I gradually came to understand). The contrast with どんどん (rapid) is important for JLPT. だんだん好(す)きになる (gradually come to like) is a common phrase in romance. Japanese values gradual, steady progress (こつこつ) over sudden leaps."},

    // Quiz steps
    {type:"mc", q:"「ゆっくり話(はな)してください」はいつ使(つか)いますか？",
     opts:["When someone speaks too fast for you","When you want silence","When you are angry","When saying goodbye"],
     ans:"When someone speaks too fast for you",
     hint:"This is a survival phrase for language learners, asking s... to reduce their speaking speed."},

    {type:"fb", s:"日本語(にほんご)が{1}上手(じょうず)になっていますね。",
     a:["どんどん"],
     opts:["どんどん","だんだん","ゆっくり","そっと"],
     hint:"The speaker is praising rapid, enthusiastic improvement. This onomatopoeic adverb conveys quick successive progress.",
     sSrc:"Your Japanese is getting better and better rapidly."},

    {type:"match", pairs:[
      {trg:"ちゃんと", src:"properly"},
      {trg:"きちんと", src:"neatly / orderly"},
      {trg:"しっかり", src:"firmly / reliably"},
      {trg:"はっきり", src:"clearly"}
    ]},

    {type:"mc", q:"「どんどん」と「だんだん」はどう違(ちが)いますか？",
     opts:["どんどん is rapid change, だんだん is gradual change","They are the same","どんどん is positive, だんだん is negative","どんどん is for sounds, だんだん is for feelings"],
     ans:"どんどん is rapid change, だんだん is gradual change",
     hint:"Think drumming (r..., energetic) vs stepping down stairs (slow, incremental). Both describe c... but at different speeds."},

    {type:"fb", s:"赤(あか)ちゃんが寝(ね)ています。{1}歩(ある)いてください。",
     a:["そっと"],
     opts:["そっと","どんどん","はっきり","しっかり"],
     hint:"The baby is sleeping, so you need to walk in a gentle, quiet manner to avoid waking it.",
     sSrc:"The baby is sleeping. Please walk quietly."},

    {type:"mc", q:"「ぐっすり」はなにと使(つか)いますか？",
     opts:["Only with sleeping","With any action","With eating","With studying"],
     ans:"Only with sleeping",
     hint:"This onomatopoeic adverb is exclusively paired with one specific daily activity related to rest."}
  ,{type:"match",pairs:[{trg:"ゆっくり",src:"slowly / at a leisurely pace"},{trg:"ぴったり",src:"exactly / perfectly fitting"},{trg:"ぐっすり",src:"soundly (sleeping)"},{trg:"じっと",src:"still / motionlessly / intently"}]}]
};
export default BATCH11_L1;
