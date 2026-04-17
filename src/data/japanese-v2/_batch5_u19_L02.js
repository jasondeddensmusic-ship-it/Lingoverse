// Unit 19 Batch 5 Lesson 2: 仮定法(かていほう) (Counterfactual & Wish Expressions)
const BATCH5_L_2 = {
  id:"jav2_u19l_b5_2", title:"仮定法(かていほう)", icon:"💫", xp:15, board:true,
  steps:[
    {type:"intro", title:"仮定法(かていほう)",
     desc:"Go beyond real conditions to express wishes, regrets, and counterfactuals. 'If only I had studied more,' 'I wish I could speak Japanese.' These patterns combine conditionals with のに (regret), たい (want), and ばよかった (should have). They are essential for expressing complex emotions.",
     goals:["Express regret with ばよかった and たらよかった","Use のに for disappointed expectations","Form counterfactual wishes with たら/ば"]},

    {type:"teach", trg:"〜ばよかった", src:"I should have ~ / I wish I had ~", pos:"part", gender:null,
     note:"ば-conditional + よかった (was good). Expresses regret about the past.\n勉強(べんきょう)すればよかった = I should have studied.",
     example:"A: 試験(しけん)に落(お)ちてしまいました。もっと勉強(べんきょう)すればよかった。\nB: 次(つぎ)は頑張(がんば)りましょう。\nA: おすすめですか？\nB: はい、ぜひ試(ため)してみてください。",
     exampleSrc:"A: I failed the exam. I should have studied more.\nB: Let us do our best next time.\nA: Do you recommend it?\nB: Yes, please try it.",
     funFact:"ばよかった is the standard regret pattern. Every Japanese person has said もっと勉強(べんきょう)すればよかった at some point. The pattern works with any verb: 行(い)けばよかった (I should have gone), 言(い)わなければよかった (I should not have said it). It is one of the most emotionally expressive grammar patterns in Japanese."},

    {type:"teach", trg:"〜たらよかった", src:"I should have ~ / it would have been good if ~", pos:"part", gender:null,
     note:"たら-conditional + よかった. Same meaning as ばよかった.\n傘(かさ)を持(も)っていったらよかった = I should have brought an umbrella.",
     example:"A: 雨(あめ)に濡(ぬ)れてしまいました。傘(かさ)を持(も)っていったらよかったです。\nB: 天気(てんき)予報(よほう)を確認(かくにん)しなかったんですね。\nA: 一緒(いっしょ)に行(い)きませんか？\nB: いいですね。行(い)きましょう。",
     exampleSrc:"A: I got soaked in rain. I should have brought an umbrella.\nB: You did not check the weather forecast, did you?\nA: Shall we go together?\nB: That sounds good. Let's go.",
     funFact:"たらよかった and ばよかった are interchangeable for regret. In casual speech, たらよかった is slightly more common. The pattern extends to positive wishes too: 会(あ)えたらよかったのに (it would have been nice if I could have met you). Adding のに at the end strengthens the feeling of regret or disappointment."},

    {type:"teach", trg:"〜のに", src:"although / even though / I wish (regret)", pos:"part", gender:null,
     note:"Plain form + のに. Expresses disappointment or unfulfilled expectation.\n行(い)ったのに = even though I went (implied: it was wasted).",
     example:"A: せっかく作(つく)ったのに、誰(だれ)も食(た)べてくれなかった。\nB: 残念(ざんねん)でしたね。私(わたし)が食(た)べますよ。\nA: どこがおすすめですか？\nB: 京都(きょうと)がおすすめです。",
     exampleSrc:"A: Even though I went to the trouble of making it, nobody ate it.\nB: That is a shame. I will eat it.\nA: Where do you recommend?\nB: I recommend Kyoto.",
     funFact:"のに is loaded with emotion. It always implies disappointment, frustration, or regret. The speaker expected one thing but got another. せっかく (with effort/going to the trouble) often pairs with のに to amplify the sense of wasted effort. In arguments, のに sentences express blame: 言(い)ったのに (I told you, but...)."},

    {type:"teach", trg:"せっかく", src:"with effort / going to the trouble of / specially", pos:"adv", gender:null,
     note:"Emphasizes that effort was made. Often paired with のに (regret) or んだから (so make the most of it).",
     example:"A: せっかくの休日(きゅうじつ)なのに雨(あめ)ですね。\nB: 家(うち)で映画(えいが)を見(み)ましょう。\nA: 何(なに)が一番(いちばん)良(よ)かったですか？\nB: 食(た)べ物(もの)が一番(いちばん)おいしかったです。",
     exampleSrc:"A: It is raining on our precious day off.\nB: Let us watch a movie at home.\nA: What was the best part?\nB: The food was the most delicious.",
     funFact:"せっかく has two uses: (1) with のに for wasted effort, and (2) with positive outcomes to appreciate the effort. せっかくだから (since we have gone to the trouble) encourages making the most of a situation. The word implies that something required special effort or is a rare opportunity, making waste especially disappointing."},

    {type:"mc", q:"もっと勉強(べんきょう)すればよかった means:", opts:["I should have studied more","I will study more","I am studying more now","Studying is good"], ans:"I should have studied more",
     hint:"ば-conditional + よかった expresses regret about something you did not do in the past."},

    {type:"teach", trg:"〜たらいいのに", src:"I wish ~ / if only ~", pos:"part", gender:null,
     note:"たら + いい + のに. Expresses a wish about an unlikely situation.\n飛(と)べたらいいのに = I wish I could fly.",
     example:"A: 日本語(にほんご)がもっと上手(じょうず)だったらいいのに。\nB: 十分(じゅうぶん)上手(じょうず)ですよ。自信(じしん)を持(も)ってください。\nA: よく行(い)きますか？\nB: 月(つき)に一回(いっかい)ぐらい行(い)きます。",
     exampleSrc:"A: I wish my Japanese were better.\nB: You are plenty good. Please have confidence.\nA: Do you go often?\nB: I go about once a month.",
     funFact:"たらいいのに expresses gentle, sometimes wistful wishes. It can be about yourself (もっと背(せ)が高(たか)かったらいいのに, I wish I were taller) or situations (明日(あした)晴(は)れたらいいのに, I wish it would be sunny tomorrow). The のに adds a sigh-like quality, acknowledging the wish probably will not come true."},

    {type:"teach", trg:"悔(くや)しい", src:"frustrating / vexing / mortifying", pos:"adj", gender:null,
     note:"い-adjective. Feeling of regret mixed with frustration. Kanji: 悔(くや)しい.\n負(ま)けて悔(くや)しい = losing and feeling frustrated.",
     example:"A: 一分(いっぷん)の差(さ)で負(ま)けて悔(くや)しいです。\nB: 来回(らいかい)は必(かなら)ず勝(か)ちますよ。\nA: 誰(だれ)と行(い)きましたか？\nB: 友達(ともだち)と一緒(いっしょ)に行(い)きました。",
     exampleSrc:"A: Losing by one point is so frustrating.\nB: You will definitely win next time.\nA: Who did you go with?\nB: I went with a friend.",
     funFact:"悔(くや)しい has no exact English equivalent. It is not just 'frustrating' but a specific emotion: the bitter regret of falling short despite effort. Athletes cry 悔(くや)しい tears after defeats. Students feel 悔(くや)しい after exam failures. This emotion is considered healthy in Japanese culture because it fuels determination for next time."},

    {type:"teach", trg:"後悔(こうかい)する", src:"to regret", pos:"verb", gender:null,
     note:"する-verb. Kanji: 後悔(こうかい)する. 後悔(こうかい)している = I regret it.\n後悔(こうかい)しても、遅(おそ)い = even if you regret, it is too late.",
     example:"A: あのときもっと頑張(がんば)ればよかったと後悔(こうかい)しています。\nB: 過去(かこ)は変(か)えられません。今(いま)から頑張(がんば)りましょう。\nA: それは大変(たいへん)でしたね。\nB: はい、でもいい勉強(べんきょう)になりました。",
     exampleSrc:"A: I regret not trying harder at that time.\nB: We cannot change the past. Let us try from now.\nA: That must have been tough.\nB: Yes, but it was a good learning experience.",
     funFact:"後悔(こうかい) combines 後(こう) (after) and 悔(かい) (regret). The proverb 後悔(こうかい)先(さき)に立(た)たず (regret does not stand before) is the Japanese equivalent of 'no use crying over spilt milk.' Despite this wisdom, 後悔(こうかい) is a central human emotion in Japanese literature and film. The best stories often revolve around characters confronting their regrets."},

    {type:"teach", trg:"もったいない", src:"wasteful / too good to waste / what a waste", pos:"adj", gender:null,
     note:"い-adjective. Feeling that something valuable should not be wasted.\n食(た)べ物(もの)を捨(す)てるのはもったいない = wasting food is もったいない.",
     example:"A: この料理(りょうり)を捨(す)てるのはもったいないですね。\nB: 明日(あした)食(た)べましょう。\nA: 本当(ほんとう)ですか？すごいですね。\nB: ありがとうございます。頑張(がんば)りました。",
     exampleSrc:"A: It would be a waste to throw this food away.\nB: Let us eat it tomorrow.\nA: Really? That is amazing.\nB: Thank you. I worked hard.",
     funFact:"もったいない is a uniquely Japanese concept that gained global attention when Kenyan environmentalist Wangari Maathai adopted it as a campaign slogan. It expresses respect for resources and disapproval of waste. The word has spiritual roots: もったいない originally meant 'lacking the essence of Buddha nature,' suggesting that waste disrespects the sacred value in all things."},

    {type:"tip", title:"Regret and Wish Patterns",
     text:"Past regret (should have done):\n〜ばよかった: 勉強(べんきょう)すればよかった\n〜たらよかった: 行(い)ったらよかった\n\nPresent wish (if only):\n〜たらいいのに: 晴(は)れたらいいのに\n〜ばいいのに: 時間(じかん)があればいいのに\n\nDisappointed expectation:\n〜のに: せっかく来(き)たのに (I came all this way, but...)\n\nStrong regret:\n後悔(こうかい)している = I am regretting\n悔(くや)しい = frustrating (could not do better)\nもったいない = wasteful (opportunity lost)",
     deepDive:{title:"Regret as a Cultural Theme",
      text:"Japanese literature and media are rich with regret themes:\n\nThe concept of もののあわれ (the beauty of things passing) makes impermanence and what-could-have-been central to Japanese aesthetics.\n\n桜(さくら) (cherry blossoms) are beautiful because they fall. This awareness of loss creates a culture where regret is not weakness but sensitivity.\n\nCommon regret expressions:\nあのときああすればよかった (if only I had done that then)\n時間(じかん)を戻(もど)したい (I want to turn back time)\n取(と)り返(かえ)しがつかない (it cannot be undone)\n\nJapanese storytelling often features characters who learn from regret rather than avoid it."}},

    {type:"teach", trg:"残(のこ)す", src:"to leave behind / to leave remaining", pos:"verb", gender:null,
     note:"Group 1 verb. Kanji: 残(のこ)す. 食(た)べ残(のこ)す = to leave food uneaten.\n記憶(きおく)に残(のこ)す = to keep in memory.",
     example:"A: ご飯(はん)を残(のこ)さないでください。もったいないです。\nB: はい、全部(ぜんぶ)食(た)べます。\nA: 私(わたし)も興味(きょうみ)があります。\nB: じゃあ、今度(こんど)一緒(いっしょ)にどうですか？",
     exampleSrc:"A: Please do not leave food behind. It is wasteful.\nB: Yes, I will eat everything.\nA: I am also interested.\nB: Then, how about doing it together next time?",
     funFact:"残(のこ)す has both physical and abstract uses. Food left on the plate (food waste) is 残(のこ)す. A legacy left to future generations is also 残(のこ)す. The phrase 何(なに)かを残(のこ)したい (I want to leave something behind) expresses the desire to create a lasting contribution. Japanese environmentalism uses もったいない and 残(のこ)す together to promote sustainability."},

    {type:"teach", trg:"取(と)り返(かえ)しがつかない", src:"irreversible / it cannot be undone", pos:"adj", gender:null,
     note:"Set expression. 取(と)り返(かえ)し (recovery) + が + つかない (does not attach).\nUsed for permanent mistakes and missed chances.",
     example:"A: 取(と)り返(かえ)しがつかないことをしてしまいました。\nB: まず謝(あやま)ることから始(はじ)めましょう。\nA: どんな感(かん)じでしたか？\nB: 想像(そうぞう)していたよりずっと良(よ)かったです。",
     exampleSrc:"A: I have done something irreversible.\nB: Let us start by apologizing.\nA: What was it like?\nB: It was much better than I imagined.",
     funFact:"取(と)り返(かえ)しがつかない literally means 'recovery does not stick.' It describes situations beyond repair: broken relationships, lost opportunities, permanent damage. Japanese culture takes 後悔(こうかい) (regret) seriously because some things are 取(と)り返(かえ)しがつかない. The expression appears in life advice, parenting, and business contexts as a warning to think before acting."},

    {type:"fb", s:"あのときもっと頑張(がんば)れ{1}。\n(I should have tried harder at that time.)", a:"ばよかった", opts:["ばよかった","ばいい","たら","ば"], sSrc:"I should have tried harder at that time.",
     hint:"The ば-conditional + the past tense of いい (good) creates a regret expression."},

    {type:"mc", q:"せっかく作(つく)ったのに means:", opts:["Even though I went to the trouble of making it","I made it easily","I will make it specially","Making things is troublesome"], ans:"Even though I went to the trouble of making it",
     hint:"せっかく (with special effort) + のに (despite/although) expresses frustrated expectations."},

    {type:"match", pairs:[{trg:"ばよかった",src:"I should have"},{trg:"のに",src:"although (disappointed)"},{trg:"悔(くや)しい",src:"frustrating/vexing"},{trg:"もったいない",src:"wasteful/what a waste"}]},

    {type:"fb", s:"日本語(にほんご)がもっと上手(じょうず)だっ{1}いいのに。\n(I wish my Japanese were better.)", a:"たら", opts:["たら","ば","と","なら"], sSrc:"I wish my Japanese were better.",
     hint:"The conditional that attaches to the past tense form to create a wish expression with いいのに."},

    {type:"mc", q:"もったいない best describes:", opts:["A feeling that something valuable should not be wasted","A feeling of anger","A feeling of happiness","A feeling of fear"], ans:"A feeling that something valuable should not be wasted",
     hint:"This Japanese concept respects the inherent value in resources and opportunities."}
  ]
};
export default BATCH5_L_2;
