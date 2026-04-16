// Unit 19 Batch 5 Lesson 2: かていほう (Counterfactual & Wish Expressions)
const BATCH5_L_2 = {
  id:"jav2_u19l_b5_2", title:"かていほう", icon:"💫", xp:15, board:true,
  steps:[
    {type:"intro", title:"かていほう",
     desc:"Go beyond real conditions to express wishes, regrets, and counterfactuals. 'If only I had studied more,' 'I wish I could speak Japanese.' These patterns combine conditionals with のに (regret), たい (want), and ばよかった (should have). They are essential for expressing complex emotions.",
     goals:["Express regret with ばよかった and たらよかった","Use のに for disappointed expectations","Form counterfactual wishes with たら/ば"]},

    {type:"teach", trg:"〜ばよかった", src:"I should have ~ / I wish I had ~", pos:"part", gender:null,
     note:"ば-conditional + よかった (was good). Expresses regret about the past.\nべんきょうすればよかった = I should have studied.",
     example:"A: しけんにおちてしまいました。もっとべんきょうすればよかった。\nB: つぎはがんばりましょう。",
     exampleSrc:"A: I failed the exam. I should have studied more.\nB: Let us do our best next time.",
     funFact:"ばよかった is the standard regret pattern. Every Japanese person has said もっとべんきょうすればよかった at some point. The pattern works with any verb: いけばよかった (I should have gone), いわなければよかった (I should not have said it). It is one of the most emotionally expressive grammar patterns in Japanese."},

    {type:"teach", trg:"〜たらよかった", src:"I should have ~ / it would have been good if ~", pos:"part", gender:null,
     note:"たら-conditional + よかった. Same meaning as ばよかった.\nかさをもっていったらよかった = I should have brought an umbrella.",
     example:"A: あめにぬれてしまいました。かさをもっていったらよかったです。\nB: てんきよほうをかくにんしなかったんですね。",
     exampleSrc:"A: I got soaked in rain. I should have brought an umbrella.\nB: You did not check the weather forecast, did you?",
     funFact:"たらよかった and ばよかった are interchangeable for regret. In casual speech, たらよかった is slightly more common. The pattern extends to positive wishes too: あえたらよかったのに (it would have been nice if I could have met you). Adding のに at the end strengthens the feeling of regret or disappointment."},

    {type:"teach", trg:"〜のに", src:"although / even though / I wish (regret)", pos:"part", gender:null,
     note:"Plain form + のに. Expresses disappointment or unfulfilled expectation.\nいったのに = even though I went (implied: it was wasted).",
     example:"A: せっかくつくったのに、だれもたべてくれなかった。\nB: ざんねんでしたね。わたしがたべますよ。",
     exampleSrc:"A: Even though I went to the trouble of making it, nobody ate it.\nB: That is a shame. I will eat it.",
     funFact:"のに is loaded with emotion. It always implies disappointment, frustration, or regret. The speaker expected one thing but got another. せっかく (with effort/going to the trouble) often pairs with のに to amplify the sense of wasted effort. In arguments, のに sentences express blame: いったのに (I told you, but...)."},

    {type:"teach", trg:"せっかく", src:"with effort / going to the trouble of / specially", pos:"adv", gender:null,
     note:"Emphasizes that effort was made. Often paired with のに (regret) or んだから (so make the most of it).",
     example:"A: せっかくのきゅうじつなのにあめですね。\nB: うちでえいがをみましょう。",
     exampleSrc:"A: It is raining on our precious day off.\nB: Let us watch a movie at home.",
     funFact:"せっかく has two uses: (1) with のに for wasted effort, and (2) with positive outcomes to appreciate the effort. せっかくだから (since we have gone to the trouble) encourages making the most of a situation. The word implies that something required special effort or is a rare opportunity, making waste especially disappointing."},

    {type:"mc", q:"もっとべんきょうすればよかった means:", opts:["I should have studied more","I will study more","I am studying more now","Studying is good"], ans:"I should have studied more",
     hint:"ば-conditional + よかった expresses regret about something you did not do in the past."},

    {type:"teach", trg:"〜たらいいのに", src:"I wish ~ / if only ~", pos:"part", gender:null,
     note:"たら + いい + のに. Expresses a wish about an unlikely situation.\nとべたらいいのに = I wish I could fly.",
     example:"A: にほんごがもっとじょうずだったらいいのに。\nB: じゅうぶんじょうずですよ。じしんをもってください。",
     exampleSrc:"A: I wish my Japanese were better.\nB: You are plenty good. Please have confidence.",
     funFact:"たらいいのに expresses gentle, sometimes wistful wishes. It can be about yourself (もっとせがたかかったらいいのに, I wish I were taller) or situations (あしたはれたらいいのに, I wish it would be sunny tomorrow). The のに adds a sigh-like quality, acknowledging the wish probably will not come true."},

    {type:"teach", trg:"くやしい", src:"frustrating / vexing / mortifying", pos:"adj", gender:null,
     note:"い-adjective. Feeling of regret mixed with frustration. Kanji: 悔しい.\nまけてくやしい = losing and feeling frustrated.",
     example:"A: いっぷんのさでまけてくやしいです。\nB: らいかいはかならずかちますよ。",
     exampleSrc:"A: Losing by one point is so frustrating.\nB: You will definitely win next time.",
     funFact:"悔しい has no exact English equivalent. It is not just 'frustrating' but a specific emotion: the bitter regret of falling short despite effort. Athletes cry くやしい tears after defeats. Students feel くやしい after exam failures. This emotion is considered healthy in Japanese culture because it fuels determination for next time."},

    {type:"teach", trg:"こうかいする", src:"to regret", pos:"verb", gender:null,
     note:"する-verb. Kanji: 後悔する. こうかいしている = I regret it.\nこうかいしても、おそい = even if you regret, it is too late.",
     example:"A: あのときもっとがんばればよかったとこうかいしています。\nB: かこはかえられません。いまからがんばりましょう。",
     exampleSrc:"A: I regret not trying harder at that time.\nB: We cannot change the past. Let us try from now.",
     funFact:"後悔 combines 後 (after) and 悔 (regret). The proverb こうかいさきにたたず (regret does not stand before) is the Japanese equivalent of 'no use crying over spilt milk.' Despite this wisdom, こうかい is a central human emotion in Japanese literature and film. The best stories often revolve around characters confronting their regrets."},

    {type:"teach", trg:"もったいない", src:"wasteful / too good to waste / what a waste", pos:"adj", gender:null,
     note:"い-adjective. Feeling that something valuable should not be wasted.\nたべものをすてるのはもったいない = wasting food is もったいない.",
     example:"A: このりょうりをすてるのはもったいないですね。\nB: あしたたべましょう。",
     exampleSrc:"A: It would be a waste to throw this food away.\nB: Let us eat it tomorrow.",
     funFact:"もったいない is a uniquely Japanese concept that gained global attention when Kenyan environmentalist Wangari Maathai adopted it as a campaign slogan. It expresses respect for resources and disapproval of waste. The word has spiritual roots: もったいない originally meant 'lacking the essence of Buddha nature,' suggesting that waste disrespects the sacred value in all things."},

    {type:"tip", title:"Regret and Wish Patterns",
     text:"Past regret (should have done):\n〜ばよかった: べんきょうすればよかった\n〜たらよかった: いったらよかった\n\nPresent wish (if only):\n〜たらいいのに: はれたらいいのに\n〜ばいいのに: じかんがあればいいのに\n\nDisappointed expectation:\n〜のに: せっかくきたのに (I came all this way, but...)\n\nStrong regret:\nこうかいしている = I am regretting\nくやしい = frustrating (could not do better)\nもったいない = wasteful (opportunity lost)",
     deepDive:{title:"Regret as a Cultural Theme",
      text:"Japanese literature and media are rich with regret themes:\n\nThe concept of もののあわれ (the beauty of things passing) makes impermanence and what-could-have-been central to Japanese aesthetics.\n\nSakura (cherry blossoms) are beautiful because they fall. This awareness of loss creates a culture where regret is not weakness but sensitivity.\n\nCommon regret expressions:\nあのときああすればよかった (if only I had done that then)\nじかんをもどしたい (I want to turn back time)\nとりかえしがつかない (it cannot be undone)\n\nJapanese storytelling often features characters who learn from regret rather than avoid it."}},

    {type:"teach", trg:"のこす", src:"to leave behind / to leave remaining", pos:"verb", gender:null,
     note:"Group 1 verb. Kanji: 残す. たべのこす = to leave food uneaten.\nきおくにのこす = to keep in memory.",
     example:"A: ごはんをのこさないでください。もったいないです。\nB: はい、ぜんぶたべます。",
     exampleSrc:"A: Please do not leave food behind. It is wasteful.\nB: Yes, I will eat everything.",
     funFact:"残す has both physical and abstract uses. Food left on the plate (food waste) is のこす. A legacy left to future generations is also のこす. The phrase なにかをのこしたい (I want to leave something behind) expresses the desire to create a lasting contribution. Japanese environmentalism uses もったいない and のこす together to promote sustainability."},

    {type:"teach", trg:"とりかえしがつかない", src:"irreversible / it cannot be undone", pos:"adj", gender:null,
     note:"Set expression. とりかえし (recovery) + が + つかない (does not attach).\nUsed for permanent mistakes and missed chances.",
     example:"A: とりかえしがつかないことをしてしまいました。\nB: まずあやまることからはじめましょう。",
     exampleSrc:"A: I have done something irreversible.\nB: Let us start by apologizing.",
     funFact:"とりかえしがつかない literally means 'recovery does not stick.' It describes situations beyond repair: broken relationships, lost opportunities, permanent damage. Japanese culture takes こうかい (regret) seriously because some things are とりかえしがつかない. The expression appears in life advice, parenting, and business contexts as a warning to think before acting."},

    {type:"fb", s:"あのときもっとがんばれ{1}。\n(I should have tried harder at that time.)", a:"ばよかった", opts:["ばよかった","ばいい","たら","ば"], sSrc:"I should have tried harder at that time.",
     hint:"The ば-conditional + the past tense of いい (good) creates a regret expression."},

    {type:"mc", q:"せっかくつくったのに means:", opts:["Even though I went to the trouble of making it","I made it easily","I will make it specially","Making things is troublesome"], ans:"Even though I went to the trouble of making it",
     hint:"せっかく (with special effort) + のに (despite/although) expresses frustrated expectations."},

    {type:"match", pairs:[{trg:"ばよかった",src:"I should have"},{trg:"のに",src:"although (disappointed)"},{trg:"くやしい",src:"frustrating/vexing"},{trg:"もったいない",src:"wasteful/what a waste"}]},

    {type:"fb", s:"にほんごがもっとじょうずだっ{1}いいのに。\n(I wish my Japanese were better.)", a:"たら", opts:["たら","ば","と","なら"], sSrc:"I wish my Japanese were better.",
     hint:"The conditional that attaches to the past tense form to create a wish expression with いいのに."},

    {type:"mc", q:"もったいない best describes:", opts:["A feeling that something valuable should not be wasted","A feeling of anger","A feeling of happiness","A feeling of fear"], ans:"A feeling that something valuable should not be wasted",
     hint:"This Japanese concept respects the inherent value in resources and opportunities."}
  ]
};
export default BATCH5_L_2;
