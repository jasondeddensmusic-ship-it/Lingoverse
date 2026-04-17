// Unit 23 Batch 2 Lesson 2: めいしかおうよう (Advanced Nominalization Patterns)
const BATCH2_L_2 = {
  id:"jav2_u23l_b2_2", title:"めいしかおうよう", icon:"🔬", xp:15, board:true,
  steps:[
    {type:"intro", title:"めいしかおうよう",
     desc:"Take nominalization further with advanced patterns. Learn to express capability, purpose, and manner using のに, ために, and かた. These patterns transform your ability to build complex sentences at the B1 level.",
     goals:["Use のに for purpose and suitability","Express purpose with ために","Describe manner and method with かた"]},

    {type:"teach", trg:"〜のにつかう", src:"to use for doing ~", pos:"part", gender:null,
     note:"Verb dictionary form + のに + つかう = use something for doing.\nThis のに is purpose (different from 'despite').",
     example:"A: このアプリはにほんごをべんきょうするのにつかっています。\nB: べんりですね。\nA: そうですか。よかったですね。\nB: はい、いい経験(けいけん)でした。",
     exampleSrc:"A: I use this app for studying Japanese.\nB: How convenient.\nA: Is that so? That is good.\nB: Yes, it was a good experience.",
     funFact:"This のに marks purpose or suitability, completely different from the のに meaning 'despite.' Context distinguishes them: verb + のに + 使う/便利/いい is purpose. Verb + のに + negative result is 'despite.' This dual use of のに confuses many learners but becomes natural with practice."},

    {type:"teach", trg:"〜のにべんり", src:"convenient for doing ~", pos:"part", gender:null,
     note:"Verb dictionary form + のに + べんり = convenient for doing.\nThis pattern evaluates suitability.",
     example:"A: このじしょはかんじをしらべるのにべんりです。\nB: わたしもほしいです。\nA: また行(い)きたいですか？\nB: はい、ぜひ行(い)きたいです。",
     exampleSrc:"A: This dictionary is convenient for looking up kanji.\nB: I want one too.\nA: Do you want to go again?\nB: Yes, I definitely want to go.",
     funFact:"のに + evaluation adjective is a productive pattern. Besides べんり, you can use: いい (good for), やくにたつ (useful for), ひつよう (necessary for), じかんがかかる (takes time to). It turns any verb into a purpose clause evaluated by the adjective: cooking + のに + 便利 = convenient for cooking."},

    {type:"teach", trg:"〜ために", src:"in order to ~ / for the purpose of ~", pos:"part", gender:null,
     note:"Dictionary form + ために = in order to do. Noun + のために = for the sake of.\nMore formal and purposeful than のに.",
     example:"A: しけんにごうかくするためにまいにちべんきょうしています。\nB: がんばってください。\nA: どのくらいかかりましたか？\nB: だいたい二時間(にじかん)ぐらいです。",
     exampleSrc:"A: I study every day in order to pass the exam.\nB: Please do your best.\nA: How long did it take?\nB: About two hours.",
     funFact:"ために expresses deliberate purpose. It is more formal and intentional than のに (suitability). ために also works with nouns: かぞくのために (for the sake of the family). The phrase みらいのために (for the future) appears in political speeches and corporate vision statements."},

    {type:"teach", trg:"〜かた", src:"way of doing ~ / how to ~", pos:"part", gender:null,
     note:"Verb masu-stem + かた = the way of doing.\nよみかた = way of reading. つかいかた = how to use.",
     example:"A: このきかいのつかいかたをおしえてください。\nB: ここのボタンをおしてください。\nA: 難(むずか)しかったですか？\nB: 最初(さいしょ)は難(むずか)しかったですが、慣(な)れました。",
     exampleSrc:"A: Please teach me how to use this machine.\nB: Please press this button.\nA: Was it difficult?\nB: It was difficult at first, but I got used to it.",
     funFact:"かた (方) is one of Japanese's most productive suffixes. Attach it to any verb's masu-stem: たべ + かた = way of eating, いき + かた = way of going/living (生き方, a philosophy of life). Japanese bookstores have entire sections on いきかた (ways of living), reflecting the culture's interest in life philosophy."},

    {type:"mc", q:"しけんにごうかくするためにべんきょうする means:", opts:["I study because I passed the exam","I study in order to pass the exam","Studying is for the exam","I passed the exam by studying"], ans:"I study in order to pass the exam",
     hint:"ために expresses deliberate purpose: you s... WITH THE GOAL of passing."},

    {type:"teach", trg:"つかいかた", src:"way of using / how to use", pos:"noun", gender:null,
     note:"つかい (masu-stem of つかう) + かた (way).\nKanji: 使い方. Product manuals explain つかいかた.",
     example:"A: スマホのつかいかたがわかりません。\nB: いっしょにやってみましょう。\nA: おすすめですか？\nB: はい、ぜひ試(ため)してみてください。",
     exampleSrc:"A: I do not understand how to use the smartphone.\nB: Let us try it together.\nA: Do you recommend it?\nB: Yes, please try it.",
     funFact:"使い方 appears on every product manual, app tutorial, and instruction guide in Japan. Japanese manuals (取扱説明書, toriatsukai setsumei-sho) are notoriously detailed. The つかいかた pattern extends to abstract uses: じかんのつかいかた (how to use time), おかねのつかいかた (how to use money)."},

    {type:"teach", trg:"いきかた", src:"way of living / lifestyle / philosophy of life", pos:"noun", gender:null,
     note:"いき (masu-stem of いきる, to live) + かた (way).\nKanji: 生き方. A deep philosophical concept.",
     example:"A: じぶんのいきかたをかんがえることがだいじです。\nB: わかいうちにかんがえたいですね。\nA: 一緒(いっしょ)に行(い)きませんか？\nB: いいですね。行(い)きましょう。",
     exampleSrc:"A: It is important to think about your way of living.\nB: I want to think about it while I am young.\nA: Shall we go together?\nB: That sounds good. Let's go.",
     funFact:"生き方 is a profound word that goes far beyond 'lifestyle.' It encompasses your life philosophy, values, and how you choose to exist. Japanese bookstores have entire 生き方 sections. The question じぶんのいきかた (your way of living) is a common topic in philosophical discussions and life coaching."},

    {type:"fb", s:"このアプリはにほんごをべんきょうする{1}つかっています。\n(I use this app for studying Japanese.)", a:"のに", opts:["のに","ために","ことに","ように"], sSrc:"I use this app for studying Japanese.",
     hint:"The nominalizer used for purpose/suitability with verbs like つかう and adjectives like べんり."},

    {type:"teach", trg:"〜のにじかんがかかる", src:"it takes time to do ~", pos:"part", gender:null,
     note:"Verb dictionary form + のに + じかんがかかる.\nExpresses how long something requires.",
     example:"A: にほんごをおぼえるのにじかんがかかります。\nB: すこしずつがんばりましょう。\nA: どこがおすすめですか？\nB: 京都(きょうと)がおすすめです。",
     exampleSrc:"A: It takes time to learn Japanese.\nB: Let us work hard little by little.\nA: Where do you recommend?\nB: I recommend Kyoto.",
     funFact:"のに + じかんがかかる is a common complaint and observation pattern. Japanese learners of English say えいごをはなすのにじかんがかかる (it takes time to speak English). The pattern honestly acknowledges difficulty while implying commitment to continue. It is realistic without being defeatist."},

    {type:"teach", trg:"〜のにやくにたつ", src:"useful for doing ~ / helpful for ~", pos:"part", gender:null,
     note:"Verb dictionary form + のに + やくにたつ (to be useful).\nKanji: 役に立つ. やく (role) + たつ (stand).",
     example:"A: このほんはにほんのれきしをしるのにやくにたちます。\nB: かしてください。\nA: 何(なに)が一番(いちばん)良(よ)かったですか？\nB: 食(た)べ物(もの)が一番(いちばん)おいしかったです。",
     exampleSrc:"A: This book is useful for learning about Japanese history.\nB: Please lend it to me.\nA: What was the best part?\nB: The food was the most delicious.",
     funFact:"役に立つ literally means 'to stand in a role,' meaning to serve a useful purpose. It is one of the most common evaluative expressions in Japanese. The question やくにたちましたか (was it useful?) is frequently asked after service, teaching, or assistance. The pattern のに + 役に立つ evaluates practical utility."},

    {type:"teach", trg:"みらい", src:"future", pos:"noun", gender:null,
     note:"Kanji: 未来. み (not yet) + らい (come).\nみらいのために = for the sake of the future.",
     example:"A: こどもたちのみらいのためにがんばりましょう。\nB: そうですね。みんなでちからをあわせましょう。\nA: よく行(い)きますか？\nB: 月(つき)に一回(いっかい)ぐらい行(い)きます。",
     exampleSrc:"A: Let us work hard for the children's future.\nB: Yes. Let us combine our efforts.\nA: Do you go often?\nB: I go about once a month.",
     funFact:"未来 literally means 'not yet come,' a beautiful way to describe the future. It is more literary and aspirational than the everyday しょうらい (将来, future/prospects). Politicians and visionaries use 未来 for inspiring speeches, while しょうらい is used for practical planning: しょうらいのゆめ (future dream)."},

    {type:"mc", q:"つかいかた is formed from:", opts:["つかう + こと","つかう + のに","つかい (masu-stem) + かた (way)","つかう + ために"], ans:"つかい (masu-stem) + かた (way)",
     hint:"The かた suffix attaches to the m...-s... of verbs to create 'the way/method of doing.'"},

    {type:"tip", title:"Nominalization for Purpose, Suitability, and Method",
     text:"Purpose (のに):\nべんきょうするのにつかう = use for studying\nしらべるのにべんり = convenient for looking up\n\nDeliberate purpose (ために):\nごうかくするために = in order to pass\nかぞくのために = for the sake of family\n\nMethod/manner (かた):\nつかいかた = how to use\nよみかた = how to read\nいきかた = way of living\n\nEvaluation:\nのにじかんがかかる = takes time to do\nのにやくにたつ = useful for doing",
     deepDive:{title:"のに (Purpose) vs. ために",
      text:"Both express purpose, but differ:\n\nのに: evaluates suitability. What is something good/useful/convenient FOR?\nこのアプリはべんきょうするのにべんり (this app is convenient for studying).\n\nために: states deliberate purpose. WHY are you doing something?\nしけんのためにべんきょうする (I study for the exam).\n\nKey test: if you can replace with 'in order to,' use ために.\nIf you can replace with 'for the purpose of (evaluating),' use のに.\n\nExample:\nべんきょうするのにいいほん = a book good for studying (evaluation).\nべんきょうするためにほんをかう = I buy books in order to study (deliberate action)."}},

    {type:"match", pairs:[{trg:"のにつかう",src:"use for doing"},{trg:"のにべんり",src:"convenient for"},{trg:"ために",src:"in order to"},{trg:"かた",src:"way of doing"}]},

    {type:"fb", s:"こどもたちの{1}のためにがんばりましょう。\n(Let us work hard for the children's future.)", a:"みらい", opts:["みらい","しょうらい","けいけん","もくてき"], sSrc:"Let us work hard for the children's future.",
     hint:"The literary, aspirational word for 'future,' combining 'not yet' + 'come.'"},

    {type:"match", pairs:[{trg:"つかいかた",src:"how to use"},{trg:"いきかた",src:"way of living"},{trg:"のにじかんがかかる",src:"takes time to do"},{trg:"みらい",src:"future"}]},

    {type:"mc", q:"いきかた is a profound word because:", opts:["It means 'walking style'","It refers to your life philosophy and how you choose to exist","It is a casual greeting","It describes physical exercise"], ans:"It refers to your life philosophy and how you choose to exist",
     hint:"生き方 goes beyond 'lifestyle' to encompass values, p..., and existential choices."},
  ]
};
export default BATCH2_L_2;
