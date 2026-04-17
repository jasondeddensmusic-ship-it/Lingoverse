// Batch 11 – Unit 21 (B1.2 Society & News): Opinion & Debate Vocabulary
const BATCH11_L1 = {
  id:"jav2_u21l_b11_1", title:"意見(いけん)と議論(ぎろん)", icon:"💬", xp:15, board:true,
  steps:[
    {type:"intro", title:"意見(いけん)と議論(ぎろん)",
     desc:"Learn vocabulary for expressing opinions, agreeing, disagreeing, and participating in discussions. These words elevate your Japanese from conversational to intellectual.",
     goals:["Express opinions with appropriate hedging","Agree and disagree politely in discussions","Use debate and argument vocabulary"]},

    {type:"teach", trg:"意見(いけん)", src:"opinion", pos:"noun", gender:null,
     note:"意見(いけん)を言(い)う = state an opinion.\n意見(いけん)が違(ちが)う = opinions differ.",
     example:"A: この問題(もんだい)について意見(いけん)を聞(き)かせてください。\nB: 私(わたし)は賛成(さんせい)です。\nA: どうでしたか？\nB: とても良(よ)かったです。",
     exampleSrc:"A: Please share your opinion on this issue.\nB: I am in favor.\nA: How was it?\nB: It was very good.",
     funFact:"Expressing 意見(いけん) directly is culturally complex in Japan. The indirect communication style (空気(くうき)を読(よ)む, reading the atmosphere) means opinions are often hedged with ...と思(おも)いますが (I think... but). Direct opinions can feel confrontational. Skillful opinion expression is a valued social art."},

    {type:"teach", trg:"賛成(さんせい)", src:"agreement / in favor", pos:"noun", gender:null,
     note:"賛成(さんせい)する = to agree/support.\nOpposite: 反対(はんたい) (opposed).",
     example:"A: 新(しん)社長(しゃちょう)の計画(けいかく)に賛成(さんせい)ですか？\nB: はい、賛成(さんせい)です。いい計画(けいかく)だと思(おも)います。\nA: いつですか？\nB: 去年(きょねん)の夏(なつ)でした。",
     exampleSrc:"A: Do you agree with the new president's plan?\nB: Yes, I agree. I think it is a good plan.\nA: When was it?\nB: It was last summer.",
     funFact:"賛成(さんせい)/反対(はんたい) (agree/disagree) are used in formal voting and discussions. In meetings, a show of hands with 賛成(さんせい)の方(かた)は (those in favor) is standard. Japanese consensus building (根回(ねまわ)し) often ensures agreement before the formal vote, making public disagreement rare."},

    {type:"teach", trg:"反対(はんたい)", src:"opposition / against", pos:"noun", gender:null,
     note:"反対(はんたい)する = to oppose.\n反対意見(はんたいいけん) = dissenting opinion.",
     example:"A: この案(あん)に反対(はんたい)の方(かた)はいますか？\nB: 私(わたし)は反対(はんたい)です。理由(りゆう)を説明(せつめい)します。\nA: それはいいですね。\nB: はい、とても楽(たの)しかったです。",
     exampleSrc:"A: Is anyone opposed to this proposal?\nB: I am opposed. I will explain my reasons.\nA: That is nice.\nB: Yes, it was very fun.",
     funFact:"Expressing 反対(はんたい) in Japanese requires skill. Direct 反対(はんたい)です (I oppose) is acceptable in formal debates but feels harsh in casual settings. Japanese speakers soften opposition: ちょっと違(ちが)うかもしれませんが... (it might be slightly different...). The art of polite disagreement is a social survival skill."},

    {type:"teach", trg:"理由(りゆう)", src:"reason", pos:"noun", gender:null,
     note:"理由(りゆう)を説明(せつめい)する = explain the reason.\nなんの理由(りゆう)で = for what reason.",
     example:"A: 反対(はんたい)の理由(りゆう)はなんですか？\nB: 予算(よさん)が足(た)りないと思(おも)うからです。\nA: そうですか。よかったですね。\nB: はい、いい経験(けいけん)でした。",
     exampleSrc:"A: What is the reason for your opposition?\nB: Because I think the budget is insufficient.\nA: Is that so? That is good.\nB: Yes, it was a good experience.",
     funFact:"理由(りゆう) (理由) is crucial in Japanese business culture. Every proposal needs clear 理由(りゆう), and every rejection requires explained 理由(りゆう). The phrase 理由(りゆう)はなんですか is softer than なぜですか (why?), which can feel interrogative. Providing reasons shows respect for others' intelligence."},

    {type:"teach", trg:"問題(もんだい)", src:"problem / issue / question", pos:"noun", gender:null,
     note:"問題(もんだい)がある = there is a problem.\n試験(しけん)の問題(もんだい) = exam question.",
     example:"A: なにか問題(もんだい)がありますか？\nB: はい、時間(じかん)が足(た)りないのが問題(もんだい)です。\nA: また行(い)きたいですか？\nB: はい、ぜひ行(い)きたいです。",
     exampleSrc:"A: Is there any problem?\nB: Yes, the problem is insufficient time.\nA: Do you want to go again?\nB: Yes, I definitely want to go.",
     funFact:"問題(もんだい) covers 'problem,' 'issue,' and 'question' (on tests). 問題(もんだい)ない (no problem) is the Japanese equivalent of 'no worries.' In news, 社会問題(しゃかいもんだい) (social issues) is a key category. The flexibility of 問題(もんだい) makes it one of the most frequently used nouns in Japanese."},

    {type:"teach", trg:"解決(かいけつ)", src:"solution / resolution", pos:"noun", gender:null,
     note:"解決(かいけつ)する = to solve/resolve.\n問題解決(もんだいかいけつ) = problem solving.",
     example:"A: この問題(もんだい)の解決(かいけつ)方法(ほうほう)を考(かんが)えましょう。\nB: いくつかアイデアがあります。\nA: どのくらいかかりましたか？\nB: だいたい二時間(にじかん)ぐらいです。",
     exampleSrc:"A: Let's think of a solution to this problem.\nB: I have some ideas.\nA: How long did it take?\nB: About two hours.",
     funFact:"解決(かいけつ) (解決) combines 解 (untie) and 決 (decide): you untie the knot and decide the path forward. Japanese business values 問題解決(もんだいかいけつ)能力(のうりょく) (problem-solving ability) highly. PDCA cycles (Plan-Do-Check-Act) are widely taught as systematic 解決(かいけつ) methods."},

    {type:"teach", trg:"たしかに", src:"certainly / indeed", pos:"adv", gender:null,
     note:"Acknowledges the other person's point.\nたしかに、でも... = certainly, but...",
     example:"A: 日本語(にほんご)は難(むずか)しいですね。\nB: たしかに難(むずか)しいです。でも楽(たの)しいですよ。\nA: 難(むずか)しかったですか？\nB: 最初(さいしょ)は難(むずか)しかったですが、慣(な)れました。",
     exampleSrc:"A: Japanese is difficult, isn't it?\nB: Indeed it is. But it is fun.\nA: Was it difficult?\nB: It was difficult at first, but I got used to it.",
     funFact:"たしかに is a powerful conversation tool. By saying たしかに before countering, you validate the other person's perspective. This たしかに...でも (indeed...but) pattern is the gold standard of polite disagreement in Japanese. It shows you listened and considered their view before presenting yours."},

    {type:"teach", trg:"とにかく", src:"anyway / in any case", pos:"adv", gender:null,
     note:"Cuts through complexity to the essential point.\nとにかくやってみよう = anyway, let's try.",
     example:"A: いろいろ心配(しんぱい)ですが、とにかくやってみましょう。\nB: そうですね、まずやってみることが大事(だいじ)ですね。\nA: おすすめですか？\nB: はい、ぜひ試(ため)してみてください。",
     exampleSrc:"A: There are many worries, but let's just try anyway.\nB: Right, trying first is important.\nA: Do you recommend it?\nB: Yes, please try it.",
     funFact:"とにかく is the impatient person's word: it sweeps aside debate and pushes toward action. とにかく頑張(がんば)る (just keep trying anyway) captures a very Japanese approach to obstacles. Rather than analyzing endlessly, the culture often values とにかくやる (just do it) followed by refinement."},

    {type:"teach", trg:"ぜったい", src:"absolutely / definitely", pos:"adv", gender:null,
     note:"ぜったいにだめ = absolutely not.\nAdds strong emphasis to any statement.",
     example:"A: 明日(あした)のパーティーに来(き)ますか？\nB: ぜったい行(い)きます！楽(たの)しみです。\nA: 一緒(いっしょ)に行(い)きませんか？\nB: いいですね。行(い)きましょう。",
     exampleSrc:"A: Will you come to tomorrow's party?\nB: I will definitely come! I am looking forward to it.\nA: Shall we go together?\nB: That sounds good. Let's go.",
     funFact:"ぜったい adds absolute certainty: ぜったいに間違(まちが)いない (absolutely no mistake), ぜったいにやめて (absolutely stop that). In a culture of hedging and indirectness, using ぜったい shows extreme conviction. Children hear ぜったいにだめ (absolutely forbidden) from parents."},

    {type:"teach", trg:"たぶん", src:"probably / maybe", pos:"adv", gender:null,
     note:"Lower certainty than きっと.\nたぶん大丈夫(だいじょうぶ) = probably fine.",
     example:"A: 明日(あした)は雨(あめ)が降(ふ)りますか？\nB: たぶん降(ふ)らないと思(おも)います。\nA: どこがおすすめですか？\nB: 京都(きょうと)がおすすめです。",
     exampleSrc:"A: Will it rain tomorrow?\nB: I think it probably won't rain.\nA: Where do you recommend?\nB: I recommend Kyoto.",
     funFact:"Japanese has a precise probability scale: ぜったい (100%), きっと (~90%), おそらく (~80%), たぶん (~70%), もしかしたら (~40%). Choosing the right word signals your confidence level. Japanese speakers tend to understate certainty, so たぶん might actually mean 'I'm pretty sure' in many contexts."},

    {type:"teach", trg:"べつに", src:"not particularly / not really", pos:"adv", gender:null,
     note:"Used with negative verbs. べつに...ない = not particularly.\nCan sound dismissive if tone is wrong.",
     example:"A: なにか問題(もんだい)がありますか？\nB: べつにありません。大丈夫(だいじょうぶ)です。\nA: 何(なに)が一番(いちばん)良(よ)かったですか？\nB: 食(た)べ物(もの)が一番(いちばん)おいしかったです。",
     exampleSrc:"A: Is there any problem?\nB: Not particularly. I'm fine.\nA: What was the best part?\nB: The food was the most delicious.",
     funFact:"べつに is the teenage eye-roll of Japanese: べつに (whatever/not really). When asked 怒(おこ)ってるの？(Are you angry?) and answered べつに, it usually means 'yes, but I won't say it.' This dismissive usage is so culturally recognizable that it became a comedy trope in anime and dramas."},

    // Quiz steps
    {type:"mc", q:"日本(にほん)の会議(かいぎ)で「賛成(さんせい)」を決(き)める前(まえ)に、よく何(なに)をしますか？",
     opts:["根回(ねまわ)し (building consensus beforehand)","Direct voting","Arguing loudly","Flipping a coin"],
     ans:"根回(ねまわ)し (building consensus beforehand)",
     hint:"Japanese decision-making often ensures agreement before the formal meeting through behind-the-scenes c... b...."},

    {type:"fb", s:"{1}難(むずか)しいです。でも楽(たの)しいですよ。",
     a:["たしかに"],
     opts:["たしかに","ぜったい","べつに","とにかく"],
     hint:"You first acknowledge the other person's point ('indeed/certainly') before adding your own perspective with 'but.'",
     sSrc:"Indeed it is difficult. But it is fun."},

    {type:"match", pairs:[
      {trg:"賛成(さんせい)", src:"agreement / in favor"},
      {trg:"反対(はんたい)", src:"opposition"},
      {trg:"問題(もんだい)", src:"problem"},
      {trg:"解決(かいけつ)", src:"solution"}
    ]},

    {type:"mc", q:"確率(かくりつ)の高(たか)い順(じゅん)に並(なら)べてください: たぶん、きっと、もしかしたら",
     opts:["きっと > たぶん > もしかしたら","たぶん > きっと > もしかしたら","もしかしたら > たぶん > きっと","きっと > もしかしたら > たぶん"],
     ans:"きっと > たぶん > もしかしたら",
     hint:"Order from most certain to least certain. きっと is about 90%, たぶん is about 70%, and the third is about 40%."},

    {type:"fb", s:"いろいろ心配(しんぱい)ですが、{1}やってみましょう。",
     a:["とにかく"],
     opts:["とにかく","たしかに","べつに","たぶん"],
     hint:"Despite worries, the speaker wants to push past debate and just try. This word means 'anyway/in any case.'",
     sSrc:"There are many worries, but let's just try anyway."},

    {type:"mc", q:"「べつに」はどんなニュアンスがありますか？",
     opts:["Can sound dismissive, like 'whatever'","Always polite and formal","Only used in business","Expresses strong agreement"],
     ans:"Can sound dismissive, like 'whatever'",
     hint:"This word, especially among younger speakers, has become associated with a particular tone of indifference or concealed feelings."}
  ]
};
export default BATCH11_L1;
