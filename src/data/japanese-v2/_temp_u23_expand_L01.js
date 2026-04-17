// Unit 23 Expansion. Lesson 3: のとことの使い分け (Practical の vs こと Drills)
const LESSON_3 = {
  id:"jav2_u23l3", title:"のとことの使い分け", icon:"🎯", xp:15, board:true,
  steps:[
    {type:"intro", title:"のとことの使い分け",
     desc:"Deepen your understanding of when to use の versus こと through real-world situations. Practice perception verbs (の only), set expressions (こと only), and the interchangeable zone where both work. Build confidence in choosing the right nominalizer every time.",
     goals:["Use の correctly with perception verbs like みる, きく, きづく","Use こと correctly in set expressions like ことにする, ことができる","Distinguish interchangeable contexts from mandatory ones"]},

    {type:"teach", trg:"〜のをみる", src:"to see/watch someone doing ~", pos:"part", gender:null,
     note:"Verb dictionary form + のをみる = see someone doing.\nの required because you are witnessing a concrete, sensory event.",
     example:"A: こどもたちがあそんでいるのをみました。\nB: たのしそうでしたか？\nA: それはいいですね。\nB: はい、とても楽(たの)しかったです。",
     exampleSrc:"A: I watched the children playing.\nB: Did they look like they were having fun?\nA: That is nice.\nB: Yes, it was very fun.",
     funFact:"Perception verbs (みる, きく, かんじる) require の because they describe direct sensory experience. You cannot say こどもがあそぶことをみた (wrong). You need の because you are witnessing a real scene, not discussing an abstract concept. This rule has no exceptions."},

    {type:"teach", trg:"〜のをきく", src:"to hear someone doing ~", pos:"part", gender:null,
     note:"Verb dictionary form + のをきく = hear someone doing.\nの required for auditory perception, just like with みる.",
     example:"A: となりのへやでだれかがうたっているのをききました。\nB: じょうずでしたか？\nA: そうですか。よかったですね。\nB: はい、いい経験(けいけん)でした。",
     exampleSrc:"A: I heard someone singing in the next room.\nB: Were they good?\nA: Is that so? That is good.\nB: Yes, it was a good experience.",
     funFact:"きく (hear/listen/ask) pairs with の for perception: うたうのをきいた (heard singing). This contrasts with ことをきく which means 'to hear about the fact that,' an indirect report. The distinction is clear: direct perception (you heard it yourself) uses の. Secondhand information uses こと."},

    {type:"teach", trg:"〜のにきづく", src:"to notice someone doing ~ / to realize that ~", pos:"part", gender:null,
     note:"Verb dictionary form + のにきづく = notice that something is happening.\nきづく = to notice/realize. Kanji: 気づく.",
     example:"A: でんしゃのなかでさいふをなくしたのにきづきました。\nB: たいへんですね。けいさつにいきましたか？\nA: また行(い)きたいですか？\nB: はい、ぜひ行(い)きたいです。",
     exampleSrc:"A: I realized I had lost my wallet on the train.\nB: That is terrible. Did you go to the police?\nA: Do you want to go again?\nB: Yes, I definitely want to go.",
     funFact:"気づく uses 気 (spirit/awareness) and 付く (attach). The moment of realization is like awareness 'attaching' to you. With の, it marks what you noticed: さいふをなくしたのに気づいた (noticed the loss). きづく is one of the most useful B1 verbs, bridging the gap between not knowing and becoming aware."},

    {type:"mc", q:"こどもがあそんでいるのをみた uses の because:", opts:["It is a set expression","の is always used before みる","You are directly witnessing a sensory event","の is more casual than こと"], ans:"You are directly witnessing a sensory event",
     hint:"Perception verbs require the concrete nominalizer because the e... is real and observed."},

    {type:"teach", trg:"〜ことがだいじ", src:"it is important to ~", pos:"part", gender:null,
     note:"Verb dictionary form + ことがだいじ = it is important to do.\nAlso: ことがたいせつ (it is important to).",
     example:"A: まいにちれんしゅうすることがだいじです。\nB: そうですね、つづけることがたいせつですね。\nA: どのくらいかかりましたか？\nB: だいたい二時間(にじかん)ぐらいです。",
     exampleSrc:"A: It is important to practice every day.\nB: That is right, continuing is important.\nA: How long did it take?\nB: About two hours.",
     funFact:"ことがだいじ and ことがたいせつ are advice patterns using こと for abstract truths. Teachers and self-help books use these constantly: 早く寝ることが大事 (sleeping early is important), 感謝することが大切 (being grateful is important). These frame actions as universal principles, which is why abstract こと fits perfectly."},

    {type:"teach", trg:"〜ことはできない", src:"cannot do ~ / it is impossible to ~", pos:"part", gender:null,
     note:"Negative of ことができる. Verb dictionary form + ことはできない.\nMore formal than the plain negative potential form.",
     example:"A: ひとりでぜんぶすることはできません。\nB: てつだいますよ。いっしょにがんばりましょう。\nA: 難(むずか)しかったですか？\nB: 最初(さいしょ)は難(むずか)しかったですが、慣(な)れました。",
     exampleSrc:"A: I cannot do everything alone.\nB: I will help. Let us do our best together.\nA: Was it difficult?\nB: It was difficult at first, but I got used to it.",
     funFact:"ことはできない is the formal way to express inability or impossibility. It appears in rules and regulations: ここでたばこをすうことはできません (you cannot smoke here). The は in ことは adds emphasis: 'as for doing this, it is not possible.' In conversation, the shorter potential negative (よめない, etc.) is more natural."},

    {type:"teach", trg:"〜のがへた", src:"to be bad at doing ~", pos:"part", gender:null,
     note:"Verb dictionary form + のがへた = bad at doing.\nへた = unskilled (na-adj). Both の and こと work here.",
     example:"A: りょうりするのがへたです。\nB: れんしゅうすれば、じょうずになりますよ。\nA: おすすめですか？\nB: はい、ぜひ試(ため)してみてください。",
     exampleSrc:"A: I am bad at cooking.\nB: If you practice, you will get better.\nA: Do you recommend it?\nB: Yes, please try it.",
     funFact:"へた (下手) literally means 'lower hand,' contrasting with じょうず (上手, upper hand). In this pattern, both の and こと work because skill assessment can be either concrete or abstract. However, の sounds more natural in casual conversation: りょうりするのがへた (casual) vs りょうりすることがへた (stiff)."},

    {type:"fb", s:"となりのへやでだれかがうたっている{1}をききました。\n(I heard someone singing in the next room.)", a:"の", opts:["の","こと","を","が"], sSrc:"I heard someone singing in the next room.",
     hint:"The nominalizer required with perception verbs like 'hear' for direct sensory events."},

    {type:"teach", trg:"〜のがにがて", src:"to find ~ difficult / to be not good with ~", pos:"part", gender:null,
     note:"Verb dictionary form + のがにがて = find it hard/unpleasant.\nにがて = weak point, thing you are not good with (na-adj).",
     example:"A: ひとのまえではなすのがにがてです。\nB: すこしずつなれていきましょう。\nA: 一緒(いっしょ)に行(い)きませんか？\nB: いいですね。行(い)きましょう。",
     exampleSrc:"A: I am not good at speaking in front of people.\nB: Let us get used to it gradually.\nA: Shall we go together?\nB: That sounds good. Let's go.",
     funFact:"にがて (苦手) uses 苦 (bitter/painful) and 手 (hand). It is softer than へた (bad at): にがて means you find it uncomfortable or challenging, while へた means you lack skill. Saying にがてです is much more socially acceptable than へたです when talking about yourself. Japanese speakers prefer admitting to にがて rather than incompetence."},

    {type:"teach", trg:"〜のがたのしみ", src:"to look forward to doing ~", pos:"part", gender:null,
     note:"Verb dictionary form + のがたのしみ = looking forward to doing.\nたのしみ = anticipation, something to look forward to.",
     example:"A: らいしゅうのりょこうにいくのがたのしみです。\nB: どこにいくのですか？\nA: どこがおすすめですか？\nB: 京都(きょうと)がおすすめです。",
     exampleSrc:"A: I am looking forward to going on the trip next week.\nB: Where are you going?\nA: Where do you recommend?\nB: I recommend Kyoto.",
     funFact:"たのしみ comes from たのしい (fun/enjoyable). As a noun, it means 'an anticipated pleasure.' のがたのしみ creates a warm expression of excitement about a future event. Japanese letters and messages often end with おあいできるのをたのしみにしています (I look forward to seeing you), a polished closing."},

    {type:"teach", trg:"なれる", src:"to get used to / to become accustomed to", pos:"verb", gender:null,
     note:"Group 2 verb. Kanji: 慣れる. Thing/action に + なれる.\nにほんのせいかつになれる = get used to life in Japan.",
     example:"A: にほんのしょくじになれましたか？\nB: はい、もうなれました。おはしもじょうずにつかえます。\nA: 何(なに)が一番(いちばん)良(よ)かったですか？\nB: 食(た)べ物(もの)が一番(いちばん)おいしかったです。",
     exampleSrc:"A: Have you gotten used to Japanese food?\nB: Yes, I am used to it now. I can use chopsticks well too.\nA: What was the best part?\nB: The food was the most delicious.",
     funFact:"慣れる uses 慣 (accustom), which contains 心 (heart) and 貫 (pierce through). Getting accustomed means your heart becomes pierced by repetition until it feels natural. なれる is essential for life in Japan: foreigners are constantly asked なれましたか (have you gotten used to it?) about food, trains, work culture, and seasons."},

    {type:"mc", q:"Which pattern REQUIRES の (not こと)?", opts:["のがすき","のがへた","のをみる","のがにがて"], ans:"のをみる",
     hint:"Perception verbs (seeing, hearing, noticing) always need the concrete nominalizer."},

    {type:"match", pairs:[{trg:"のをみる",src:"to see someone doing"},{trg:"のをきく",src:"to hear someone doing"},{trg:"のにきづく",src:"to notice/realize"},{trg:"ことがだいじ",src:"it is important to"}]},

    {type:"match", pairs:[{trg:"のがへた",src:"bad at doing"},{trg:"のがにがて",src:"not good with"},{trg:"のがたのしみ",src:"looking forward to"},{trg:"ことはできない",src:"cannot do"}]},

    {type:"fb", s:"まいにちれんしゅうする{1}がだいじです。\n(It is important to practice every day.)", a:"こと", opts:["こと","の","もの","ところ"], sSrc:"It is important to practice every day.",
     hint:"The abstract nominalizer used when stating a general truth or principle."},

    {type:"mc", q:"にがて differs from へた because:", opts:["にがて is more formal","にがて means you find it uncomfortable, へた means you lack skill","They mean exactly the same thing","にがて is only for sports"], ans:"にがて means you find it uncomfortable, へた means you lack skill",
     hint:"One is about discomfort with a task, the other is about ability level."},

    {type:"match", pairs:[{trg:"なれる",src:"to get used to"},{trg:"きづく",src:"to notice"},{trg:"にがて",src:"weak point"},{trg:"たのしみ",src:"anticipation"}]},
  ]
};
export default LESSON_3;
