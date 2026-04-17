// Unit 23 Batch 2 Lesson 2: 名詞化(めいしか)応用(おうよう) (Advanced Nominalization Patterns)
const BATCH2_L_2 = {
  id:"jav2_u23l_b2_2", title:"名詞化(めいしか)応用(おうよう)", icon:"🔬", xp:15, board:true,
  steps:[
    {type:"intro", title:"名詞化(めいしか)応用(おうよう)",
     desc:"Take nominalization further with advanced patterns. Learn to express capability, purpose, and manner using のに, ために, and かた. These patterns transform your ability to build complex sentences at the B1 level.",
     goals:["Use のに for purpose and suitability","Express purpose with ために","Describe manner and method with かた"]},

    {type:"teach", trg:"〜のに使(つか)う", src:"to use for doing ~", pos:"part", gender:null,
     note:"Verb dictionary form + のに + 使(つか)う = use something for doing.\nThis のに is purpose (different from 'despite').",
     example:"A: このアプリは日本語(にほんご)を勉強(べんきょう)するのに使(つか)っています。\nB: 便利(べんり)ですね。\nA: そうですか。よかったですね。\nB: はい、いい経験(けいけん)でした。",
     exampleSrc:"A: I use this app for studying Japanese.\nB: How convenient.\nA: Is that so? That is good.\nB: Yes, it was a good experience.",
     funFact:"This のに marks purpose or suitability, completely different from the のに meaning 'despite.' Context distinguishes them: verb + のに + 使(つか)う/便利(べんり)/いい is purpose. Verb + のに + negative result is 'despite.' This dual use of のに confuses many learners but becomes natural with practice."},

    {type:"teach", trg:"〜のに便利(べんり)", src:"convenient for doing ~", pos:"part", gender:null,
     note:"Verb dictionary form + のに + 便利(べんり) = convenient for doing.\nThis pattern evaluates suitability.",
     example:"A: この辞書(じしょ)は漢字(かんじ)を調(しら)べるのに便利(べんり)です。\nB: 私(わたし)もほしいです。\nA: また行(い)きたいですか？\nB: はい、ぜひ行(い)きたいです。",
     exampleSrc:"A: This dictionary is convenient for looking up kanji.\nB: I want one too.\nA: Do you want to go again?\nB: Yes, I definitely want to go.",
     funFact:"のに + evaluation adjective is a productive pattern. Besides 便利(べんり), you can use: いい (good for), 役(やく)に立(た)つ (useful for), 必要(ひつよう) (necessary for), 時間(じかん)がかかる (takes time to). It turns any verb into a purpose clause evaluated by the adjective: cooking + のに + 便利(べんり) = convenient for cooking."},

    {type:"teach", trg:"〜ために", src:"in order to ~ / for the purpose of ~", pos:"part", gender:null,
     note:"Dictionary form + ために = in order to do. Noun + のために = for the sake of.\nMore formal and purposeful than のに.",
     example:"A: 試験(しけん)に合格(ごうかく)するために毎日(まいにち)勉強(べんきょう)しています。\nB: 頑張(がんば)ってください。\nA: どのくらいかかりましたか？\nB: だいたい二時間(にじかん)ぐらいです。",
     exampleSrc:"A: I study every day in order to pass the exam.\nB: Please do your best.\nA: How long did it take?\nB: About two hours.",
     funFact:"ために expresses deliberate purpose. It is more formal and intentional than のに (suitability). ために also works with nouns: 家族(かぞく)のために (for the sake of the family). The phrase 未来(みらい)のために (for the future) appears in political speeches and corporate vision statements."},

    {type:"teach", trg:"〜かた", src:"way of doing ~ / how to ~", pos:"part", gender:null,
     note:"Verb masu-stem + かた = the way of doing.\n読(よ)み方(かた) = way of reading. 使(つか)い方(かた) = how to use.",
     example:"A: この機械(きかい)の使(つか)い方(かた)を教(おし)えてください。\nB: ここのボタンを押(お)してください。\nA: 難(むずか)しかったですか？\nB: 最初(さいしょ)は難(むずか)しかったですが、慣(な)れました。",
     exampleSrc:"A: Please teach me how to use this machine.\nB: Please press this button.\nA: Was it difficult?\nB: It was difficult at first, but I got used to it.",
     funFact:"かた (方) is one of Japanese's most productive suffixes. Attach it to any verb's masu-stem: 食(た)べ + かた = way of eating, 行(い)き + かた = way of going/living (生(い)き方(かた), a philosophy of life). Japanese bookstores have entire sections on 生(い)き方(かた) (ways of living), reflecting the culture's interest in life philosophy."},

    {type:"mc", q:"試験(しけん)に合格(ごうかく)するために勉強(べんきょう)する means:", opts:["I study because I passed the exam","I study in order to pass the exam","Studying is for the exam","I passed the exam by studying"], ans:"I study in order to pass the exam",
     hint:"ために expresses deliberate purpose: you s... WITH THE GOAL of passing."},

    {type:"teach", trg:"使(つか)い方(かた)", src:"way of using / how to use", pos:"noun", gender:null,
     note:"使(つか)い (masu-stem of 使(つか)う) + 方(かた) (way).\nKanji: 使い方. Product manuals explain 使(つか)い方(かた).",
     example:"A: スマホの使(つか)い方(かた)がわかりません。\nB: 一緒(いっしょ)にやってみましょう。\nA: おすすめですか？\nB: はい、ぜひ試(ため)してみてください。",
     exampleSrc:"A: I do not understand how to use the smartphone.\nB: Let us try it together.\nA: Do you recommend it?\nB: Yes, please try it.",
     funFact:"使い方 appears on every product manual, app tutorial, and instruction guide in Japan. Japanese manuals (取扱(とりあつか)い説明書(せつめいしょ), toriatsukai setsumei-sho) are notoriously detailed. The 使(つか)い方(かた) pattern extends to abstract uses: 時間(じかん)の使(つか)い方(かた) (how to use time), お金(かね)の使(つか)い方(かた) (how to use money)."},

    {type:"teach", trg:"生(い)き方(かた)", src:"way of living / lifestyle / philosophy of life", pos:"noun", gender:null,
     note:"生(い)き (masu-stem of 生(い)きる, to live) + 方(かた) (way).\nKanji: 生き方. A deep philosophical concept.",
     example:"A: 自分(じぶん)の生(い)き方(かた)を考(かんが)えることが大事(だいじ)です。\nB: 若(わか)いうちに考(かんが)えたいですね。\nA: 一緒(いっしょ)に行(い)きませんか？\nB: いいですね。行(い)きましょう。",
     exampleSrc:"A: It is important to think about your way of living.\nB: I want to think about it while I am young.\nA: Shall we go together?\nB: That sounds good. Let's go.",
     funFact:"生き方 is a profound word that goes far beyond 'lifestyle.' It encompasses your life philosophy, values, and how you choose to exist. Japanese bookstores have entire 生(い)き方(かた) sections. The question 自分(じぶん)の生(い)き方(かた) (your way of living) is a common topic in philosophical discussions and life coaching."},

    {type:"fb", s:"このアプリは日本語(にほんご)を勉強(べんきょう)する{1}使(つか)っています。\n(I use this app for studying Japanese.)", a:"のに", opts:["のに","ために","ことに","ように"], sSrc:"I use this app for studying Japanese.",
     hint:"The nominalizer used for purpose/suitability with verbs like 使(つか)う and adjectives like 便利(べんり)."},

    {type:"teach", trg:"〜のに時間(じかん)がかかる", src:"it takes time to do ~", pos:"part", gender:null,
     note:"Verb dictionary form + のに + 時間(じかん)がかかる.\nExpresses how long something requires.",
     example:"A: 日本語(にほんご)を覚(おぼ)えるのに時間(じかん)がかかります。\nB: 少(すこ)しずつ頑張(がんば)りましょう。\nA: どこがおすすめですか？\nB: 京都(きょうと)がおすすめです。",
     exampleSrc:"A: It takes time to learn Japanese.\nB: Let us work hard little by little.\nA: Where do you recommend?\nB: I recommend Kyoto.",
     funFact:"のに + 時間(じかん)がかかる is a common complaint and observation pattern. Japanese learners of English say 英語(えいご)を話(はな)すのに時間(じかん)がかかる (it takes time to speak English). The pattern honestly acknowledges difficulty while implying commitment to continue. It is realistic without being defeatist."},

    {type:"teach", trg:"〜のに役(やく)に立(た)つ", src:"useful for doing ~ / helpful for ~", pos:"part", gender:null,
     note:"Verb dictionary form + のに + 役(やく)に立(た)つ (to be useful).\nKanji: 役に立つ. 役(やく) (role) + 立(た)つ (stand).",
     example:"A: この本(ほん)は日本(にほん)の歴史(れきし)を知(し)るのに役(やく)に立(た)ちます。\nB: 貸(か)してください。\nA: 何(なに)が一番(いちばん)良(よ)かったですか？\nB: 食(た)べ物(もの)が一番(いちばん)おいしかったです。",
     exampleSrc:"A: This book is useful for learning about Japanese history.\nB: Please lend it to me.\nA: What was the best part?\nB: The food was the most delicious.",
     funFact:"役(やく)に立(た)つ literally means 'to stand in a role,' meaning to serve a useful purpose. It is one of the most common evaluative expressions in Japanese. The question 役(やく)に立(た)ちましたか (was it useful?) is frequently asked after service, teaching, or assistance. The pattern のに + 役(やく)に立(た)つ evaluates practical utility."},

    {type:"teach", trg:"未来(みらい)", src:"future", pos:"noun", gender:null,
     note:"Kanji: 未来. み (not yet) + らい (come).\n未来(みらい)のために = for the sake of the future.",
     example:"A: 子供(こども)たちの未来(みらい)のために頑張(がんば)りましょう。\nB: そうですね。みんなで力(ちから)を合(あ)わせましょう。\nA: よく行(い)きますか？\nB: 月(つき)に一回(いっかい)ぐらい行(い)きます。",
     exampleSrc:"A: Let us work hard for the children's future.\nB: Yes. Let us combine our efforts.\nA: Do you go often?\nB: I go about once a month.",
     funFact:"未来 literally means 'not yet come,' a beautiful way to describe the future. It is more literary and aspirational than the everyday 将来(しょうらい) (future/prospects). Politicians and visionaries use 未来(みらい) for inspiring speeches, while 将来(しょうらい) is used for practical planning: 将来(しょうらい)の夢(ゆめ) (future dream)."},

    {type:"mc", q:"使(つか)い方(かた) is formed from:", opts:["使(つか)う + こと","使(つか)う + のに","使(つか)い (masu-stem) + 方(かた) (way)","使(つか)う + ために"], ans:"使(つか)い (masu-stem) + 方(かた) (way)",
     hint:"The 方(かた) suffix attaches to the m...-s... of verbs to create 'the way/method of doing.'"},

    {type:"tip", title:"Nominalization for Purpose, Suitability, and Method",
     text:"Purpose (のに):\n勉強(べんきょう)するのに使(つか)う = use for studying\n調(しら)べるのに便利(べんり) = convenient for looking up\n\nDeliberate purpose (ために):\n合格(ごうかく)するために = in order to pass\n家族(かぞく)のために = for the sake of family\n\nMethod/manner (かた):\n使(つか)い方(かた) = how to use\n読(よ)み方(かた) = how to read\n生(い)き方(かた) = way of living\n\nEvaluation:\nのに時間(じかん)がかかる = takes time to do\nのに役(やく)に立(た)つ = useful for doing",
     deepDive:{title:"のに (Purpose) vs. ために",
      text:"Both express purpose, but differ:\n\nのに: evaluates suitability. What is something good/useful/convenient FOR?\nこのアプリは勉強(べんきょう)するのに便利(べんり) (this app is convenient for studying).\n\nために: states deliberate purpose. WHY are you doing something?\n試験(しけん)のために勉強(べんきょう)する (I study for the exam).\n\nKey test: if you can replace with 'in order to,' use ために.\nIf you can replace with 'for the purpose of (evaluating),' use のに.\n\nExample:\n勉強(べんきょう)するのにいい本(ほん) = a book good for studying (evaluation).\n勉強(べんきょう)するために本(ほん)を買(か)う = I buy books in order to study (deliberate action)."}},

    {type:"match", pairs:[{trg:"のに使(つか)う",src:"use for doing"},{trg:"のに便利(べんり)",src:"convenient for"},{trg:"ために",src:"in order to"},{trg:"かた",src:"way of doing"}]},

    {type:"fb", s:"子供(こども)たちの{1}のために頑張(がんば)りましょう。\n(Let us work hard for the children's future.)", a:"未来(みらい)", opts:["未来(みらい)","将来(しょうらい)","経験(けいけん)","目的(もくてき)"], sSrc:"Let us work hard for the children's future.",
     hint:"The literary, aspirational word for 'future,' combining 'not yet' + 'come.'"},

    {type:"match", pairs:[{trg:"使(つか)い方(かた)",src:"how to use"},{trg:"生(い)き方(かた)",src:"way of living"},{trg:"のに時間(じかん)がかかる",src:"takes time to do"},{trg:"未来(みらい)",src:"future"}]},

    {type:"mc", q:"生(い)き方(かた) is a profound word because:", opts:["It means 'walking style'","It refers to your life philosophy and how you choose to exist","It is a casual greeting","It describes physical exercise"], ans:"It refers to your life philosophy and how you choose to exist",
     hint:"生(い)き方(かた) goes beyond 'lifestyle' to encompass values, p..., and existential choices."},
  ]
};
export default BATCH2_L_2;
