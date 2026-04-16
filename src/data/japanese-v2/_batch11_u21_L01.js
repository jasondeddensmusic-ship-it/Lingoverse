// Batch 11 – Unit 21 (B1.2 Society & News): Opinion & Debate Vocabulary
const BATCH11_L1 = {
  id:"jav2_u21l_b11_1", title:"いけんとぎろん", icon:"💬", xp:15, board:true,
  steps:[
    {type:"intro", title:"いけんとぎろん",
     desc:"Learn vocabulary for expressing opinions, agreeing, disagreeing, and participating in discussions. These words elevate your Japanese from conversational to intellectual.",
     goals:["Express opinions with appropriate hedging","Agree and disagree politely in discussions","Use debate and argument vocabulary"]},

    {type:"teach", trg:"いけん", src:"opinion", pos:"noun", gender:null,
     note:"いけんをいう = state an opinion.\nいけんがちがう = opinions differ.",
     example:"A: このもんだいについていけんをきかせてください。\nB: わたしはさんせいです。",
     exampleSrc:"A: Please share your opinion on this issue.\nB: I am in favor.",
     funFact:"Expressing いけん directly is culturally complex in Japan. The indirect communication style (空気を読む, reading the atmosphere) means opinions are often hedged with ...とおもいますが (I think... but). Direct opinions can feel confrontational. Skillful opinion expression is a valued social art."},

    {type:"teach", trg:"さんせい", src:"agreement / in favor", pos:"noun", gender:null,
     note:"さんせいする = to agree/support.\nOpposite: はんたい (opposed).",
     example:"A: しんしゃちょうのけいかくにさんせいですか？\nB: はい、さんせいです。いいけいかくだとおもいます。",
     exampleSrc:"A: Do you agree with the new president's plan?\nB: Yes, I agree. I think it is a good plan.",
     funFact:"さんせい/はんたい (agree/disagree) are used in formal voting and discussions. In meetings, a show of hands with さんせいのかたは (those in favor) is standard. Japanese consensus building (根回し) often ensures agreement before the formal vote, making public disagreement rare."},

    {type:"teach", trg:"はんたい", src:"opposition / against", pos:"noun", gender:null,
     note:"はんたいする = to oppose.\nはんたいいけん = dissenting opinion.",
     example:"A: このあんにはんたいのかたはいますか？\nB: わたしははんたいです。りゆうをせつめいします。",
     exampleSrc:"A: Is anyone opposed to this proposal?\nB: I am opposed. I will explain my reasons.",
     funFact:"Expressing はんたい in Japanese requires skill. Direct はんたいです (I oppose) is acceptable in formal debates but feels harsh in casual settings. Japanese speakers soften opposition: ちょっとちがうかもしれませんが... (it might be slightly different...). The art of polite disagreement is a social survival skill."},

    {type:"teach", trg:"りゆう", src:"reason", pos:"noun", gender:null,
     note:"りゆうをせつめいする = explain the reason.\nなんのりゆうで = for what reason.",
     example:"A: はんたいのりゆうはなんですか？\nB: よさんがたりないとおもうからです。",
     exampleSrc:"A: What is the reason for your opposition?\nB: Because I think the budget is insufficient.",
     funFact:"りゆう (理由) is crucial in Japanese business culture. Every proposal needs clear りゆう, and every rejection requires explained りゆう. The phrase りゆうはなんですか is softer than なぜですか (why?), which can feel interrogative. Providing reasons shows respect for others' intelligence."},

    {type:"teach", trg:"もんだい", src:"problem / issue / question", pos:"noun", gender:null,
     note:"もんだいがある = there is a problem.\nしけんのもんだい = exam question.",
     example:"A: なにかもんだいがありますか？\nB: はい、じかんがたりないのがもんだいです。",
     exampleSrc:"A: Is there any problem?\nB: Yes, the problem is insufficient time.",
     funFact:"もんだい covers 'problem,' 'issue,' and 'question' (on tests). もんだいない (no problem) is the Japanese equivalent of 'no worries.' In news, しゃかいもんだい (social issues) is a key category. The flexibility of もんだい makes it one of the most frequently used nouns in Japanese."},

    {type:"teach", trg:"かいけつ", src:"solution / resolution", pos:"noun", gender:null,
     note:"かいけつする = to solve/resolve.\nもんだいかいけつ = problem solving.",
     example:"A: このもんだいのかいけつほうほうをかんがえましょう。\nB: いくつかアイデアがあります。",
     exampleSrc:"A: Let's think of a solution to this problem.\nB: I have some ideas.",
     funFact:"かいけつ (解決) combines 解 (untie) and 決 (decide): you untie the knot and decide the path forward. Japanese business values もんだいかいけつのうりょく (problem-solving ability) highly. PDCA cycles (Plan-Do-Check-Act) are widely taught as systematic かいけつ methods."},

    {type:"teach", trg:"たしかに", src:"certainly / indeed", pos:"adv", gender:null,
     note:"Acknowledges the other person's point.\nたしかに、でも... = certainly, but...",
     example:"A: にほんごはむずかしいですね。\nB: たしかにむずかしいです。でもたのしいですよ。",
     exampleSrc:"A: Japanese is difficult, isn't it?\nB: Indeed it is. But it is fun.",
     funFact:"たしかに is a powerful conversation tool. By saying たしかに before countering, you validate the other person's perspective. This たしかに...でも (indeed...but) pattern is the gold standard of polite disagreement in Japanese. It shows you listened and considered their view before presenting yours."},

    {type:"teach", trg:"とにかく", src:"anyway / in any case", pos:"adv", gender:null,
     note:"Cuts through complexity to the essential point.\nとにかくやってみよう = anyway, let's try.",
     example:"A: いろいろしんぱいですが、とにかくやってみましょう。\nB: そうですね、まずやってみることがだいじですね。",
     exampleSrc:"A: There are many worries, but let's just try anyway.\nB: Right, trying first is important.",
     funFact:"とにかく is the impatient person's word: it sweeps aside debate and pushes toward action. とにかくがんばる (just keep trying anyway) captures a very Japanese approach to obstacles. Rather than analyzing endlessly, the culture often values とにかくやる (just do it) followed by refinement."},

    {type:"teach", trg:"ぜったい", src:"absolutely / definitely", pos:"adv", gender:null,
     note:"ぜったいにだめ = absolutely not.\nAdds strong emphasis to any statement.",
     example:"A: あしたのパーティーにきますか？\nB: ぜったいいきます！たのしみです。",
     exampleSrc:"A: Will you come to tomorrow's party?\nB: I will definitely come! I am looking forward to it.",
     funFact:"ぜったい adds absolute certainty: ぜったいにまちがいない (absolutely no mistake), ぜったいにやめて (absolutely stop that). In a culture of hedging and indirectness, using ぜったい shows extreme conviction. Children hear ぜったいにだめ (absolutely forbidden) from parents."},

    {type:"teach", trg:"たぶん", src:"probably / maybe", pos:"adv", gender:null,
     note:"Lower certainty than きっと.\nたぶんだいじょうぶ = probably fine.",
     example:"A: あしたはあめがふりますか？\nB: たぶんふらないとおもいます。",
     exampleSrc:"A: Will it rain tomorrow?\nB: I think it probably won't rain.",
     funFact:"Japanese has a precise probability scale: ぜったい (100%), きっと (~90%), おそらく (~80%), たぶん (~70%), もしかしたら (~40%). Choosing the right word signals your confidence level. Japanese speakers tend to understate certainty, so たぶん might actually mean 'I'm pretty sure' in many contexts."},

    {type:"teach", trg:"べつに", src:"not particularly / not really", pos:"adv", gender:null,
     note:"Used with negative verbs. べつに...ない = not particularly.\nCan sound dismissive if tone is wrong.",
     example:"A: なにかもんだいがありますか？\nB: べつにありません。だいじょうぶです。",
     exampleSrc:"A: Is there any problem?\nB: Not particularly. I'm fine.",
     funFact:"べつに is the teenage eye-roll of Japanese: べつに (whatever/not really). When asked おこってるの？(Are you angry?) and answered べつに, it usually means 'yes, but I won't say it.' This dismissive usage is so culturally recognizable that it became a comedy trope in anime and dramas."},

    // Quiz steps
    {type:"mc", q:"にほんのかいぎで「さんせい」をきめるまえに、よくなにをしますか？",
     opts:["根回し (building consensus beforehand)","Direct voting","Arguing loudly","Flipping a coin"],
     ans:"根回し (building consensus beforehand)",
     hint:"Japanese decision-making often ensures agreement before the formal meeting through behind-the-scenes c... b...."},

    {type:"fb", s:"{1}むずかしいです。でもたのしいですよ。",
     a:["たしかに"],
     opts:["たしかに","ぜったい","べつに","とにかく"],
     hint:"You first acknowledge the other person's point ('indeed/certainly') before adding your own perspective with 'but.'",
     sSrc:"Indeed it is difficult. But it is fun."},

    {type:"match", pairs:[
      {trg:"さんせい", src:"agreement / in favor"},
      {trg:"はんたい", src:"opposition"},
      {trg:"もんだい", src:"problem"},
      {trg:"かいけつ", src:"solution"}
    ]},

    {type:"mc", q:"かくりつのたかいじゅんにならべてください: たぶん、きっと、もしかしたら",
     opts:["きっと > たぶん > もしかしたら","たぶん > きっと > もしかしたら","もしかしたら > たぶん > きっと","きっと > もしかしたら > たぶん"],
     ans:"きっと > たぶん > もしかしたら",
     hint:"Order from most certain to least certain. きっと is about 90%, たぶん is about 70%, and the third is about 40%."},

    {type:"fb", s:"いろいろしんぱいですが、{1}やってみましょう。",
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
