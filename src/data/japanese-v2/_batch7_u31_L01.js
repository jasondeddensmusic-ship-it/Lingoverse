// Batch 7 – Unit 31 (B2.2 Law): Legal & Rights Vocabulary
const BATCH7_L1 = {
  id:"jav2_u31l_b7_1", title:"ほうりつようご", icon:"⚖️", xp:15, board:true,
  steps:[
    {type:"intro", title:"ほうりつようご",
     desc:"Learn legal vocabulary for understanding Japanese law, rights, and justice. These N2/N1 terms appear in news, policy debates, and formal discussions about rules and governance.",
     goals:["Discuss legal concepts and rights","Use justice and court vocabulary","Express opinions about laws and regulations"]},

    {type:"teach", trg:"けんぽう", src:"constitution", pos:"noun", gender:null,
     note:"にほんこくけんぽう = Constitution of Japan.\nけんぽうかいせい = constitutional amendment.",
     example:"A: にほんこくけんぽうは1947ねんにせいていされました。\nB: へいわしゅぎがとくちょうですね。",
     exampleSrc:"A: Japan's constitution was enacted in 1947.\nB: Pacifism is its characteristic.",
     funFact:"Japan's けんぽう (憲法) has never been amended since 1947, making it one of the world's oldest unchanged constitutions. Article 9 renounces war and armed forces. The debate over けんぽうかいせい (amendment), especially Article 9, is Japan's most divisive political issue."},

    {type:"teach", trg:"さいばん", src:"trial / court case", pos:"noun", gender:null,
     note:"さいばんしょ = court. さいばんかん = judge.\nさいばんいんせいど = lay judge system.",
     example:"A: さいばんいんにえらばれました。\nB: たいへんなせきにんですね。",
     exampleSrc:"A: I was selected as a lay judge.\nB: That is a big responsibility.",
     funFact:"Japan introduced the さいばんいん (lay judge) system in 2009 for serious criminal cases. Six citizens join three professional judges. Before this, all decisions were made by judges alone. Japan's conviction rate exceeds 99%, the highest among developed nations, raising questions about prosecutorial power."},

    {type:"teach", trg:"じんけん", src:"human rights", pos:"noun", gender:null,
     note:"じんけんをまもる = to protect human rights.\nきほんてきじんけん = fundamental human rights.",
     example:"A: じんけんはすべてのひとにあります。\nB: けんぽうでほしょうされていますね。",
     exampleSrc:"A: Human rights belong to everyone.\nB: They are guaranteed by the constitution.",
     funFact:"じんけん (人権) education is mandatory in Japanese schools. December 4-10 is 人権週間 (Human Rights Week) with events nationwide. Historical discrimination against certain groups (部落問題, burakumon) and Korean residents drives ongoing じんけん activism. Japan's human rights landscape continues evolving."},

    {type:"teach", trg:"ぎむ", src:"duty / obligation", pos:"noun", gender:null,
     note:"こくみんのぎむ = citizen's duties.\nきょういくのぎむ = duty of education.",
     example:"A: のうぜいはこくみんのぎむです。\nB: きょういくとろうどうもぎむですね。",
     exampleSrc:"A: Paying taxes is a citizen's duty.\nB: Education and labor are also duties.",
     funFact:"Japan's constitution lists three こくみんのぎむ (citizen duties): education (教育), labor (勤労), and taxation (納税). The balance between けんり (rights) and ぎむ (duties) is a core concept. Japanese society traditionally emphasizes ぎむ over けんり, though younger generations increasingly assert their rights."},

    {type:"teach", trg:"けんり", src:"right / legal right", pos:"noun", gender:null,
     note:"けんりをしゅちょうする = to assert rights.\nせんきょけん = right to vote.",
     example:"A: しるけんりはだいじです。\nB: じょうほうこうかいせいどがそれをまもります。",
     exampleSrc:"A: The right to know is important.\nB: The information disclosure system protects it.",
     funFact:"けんり (権利) was a Meiji-era coinage to translate Western concepts of 'rights.' The traditional Japanese emphasis was on ぎむ (obligation) and collective harmony. Asserting individual けんり was once seen as selfish. Modern Japan balances both, though workplace けんり (labor rights) are increasingly emphasized."},

    {type:"teach", trg:"はんけつ", src:"judgment / verdict / ruling", pos:"noun", gender:null,
     note:"はんけつをくだす = to hand down a verdict.\nゆうざいはんけつ = guilty verdict.",
     example:"A: さいばんしょのはんけつがでました。\nB: むざいでしたか？ゆうざいでしたか？",
     exampleSrc:"A: The court verdict was handed down.\nB: Was it innocent? Or guilty?",
     funFact:"はんけつ (判決) decisions in Japan are read aloud by the presiding judge. The most serious はんけつ (death penalty cases) receive intense media coverage. Japan retains the death penalty, one of few developed democracies to do so. Supreme Court (最高裁) はんけつ set legal precedents."},

    {type:"teach", trg:"きせい", src:"regulation / restriction", pos:"noun", gender:null,
     note:"きせいする = to regulate. きせいかんわ = deregulation.\nきせいがきびしい = regulations are strict.",
     example:"A: このぎょうかいのきせいはきびしいです。\nB: きせいかんわがひつようかもしれません。",
     exampleSrc:"A: Regulations in this industry are strict.\nB: Deregulation may be needed.",
     funFact:"きせい (規制) vs きせいかんわ (deregulation) is a constant Japanese policy debate. Japan's きせい are often criticized as excessive, protecting incumbents over innovators. However, food safety きせい are among the world's strictest, contributing to Japan's reputation for quality. The balance is always debated."},

    {type:"teach", trg:"ざいさん", src:"property / assets", pos:"noun", gender:null,
     note:"ざいさんけん = property rights.\nちてきざいさん = intellectual property.",
     example:"A: ちてきざいさんをまもることがだいじです。\nB: とっきょしゅとくをかんがえましょう。",
     exampleSrc:"A: Protecting intellectual property is important.\nB: Let us consider getting a patent.",
     funFact:"ちてきざいさん (知的財産, intellectual property) is crucial for technology-driven Japan. Japan files more patents per capita than almost any country. Patent wars between Japanese and foreign companies are common. Anime, manga, and game ちてきざいさん are major economic assets worth billions."},

    {type:"teach", trg:"そしょう", src:"lawsuit / litigation", pos:"noun", gender:null,
     note:"そしょうをおこす = to file a lawsuit.\nみんじそしょう = civil lawsuit.",
     example:"A: そしょうをおこすよていです。\nB: べんごしにそうだんしましたか？",
     exampleSrc:"A: I plan to file a lawsuit.\nB: Have you consulted a lawyer?",
     funFact:"Japan is far less litigious than the US, with about 1/10 the lawsuits per capita. Japanese people prefer mediation (調停, ちょうてい) and settlement (和解, わかい). Filing a そしょう is seen as a last resort. This preference for harmony over conflict resolution through courts reflects deep cultural values."},

    {type:"teach", trg:"べんごし", src:"lawyer / attorney", pos:"noun", gender:null,
     note:"べんごしにそうだんする = to consult a lawyer.\nべんごしひ = lawyer fees.",
     example:"A: べんごしにそうだんしたほうがいいですよ。\nB: そうですね。むりょうそうだんをさがします。",
     exampleSrc:"A: You should consult a lawyer.\nB: Yes. I will look for a free consultation.",
     funFact:"Japan has relatively few べんごし per capita (about 43,000 for 125 million people) compared to the US. Passing the bar exam (司法試験, しほうしけん) is extremely competitive. Legal reforms expanded law school (法科大学院) access, but the pass rate remains about 25-30%. べんごし are highly respected."},

    {type:"teach", trg:"じょうれい", src:"ordinance / local regulation", pos:"noun", gender:null,
     note:"しのじょうれい = city ordinance.\nじょうれいいはん = ordinance violation.",
     example:"A: このまちにはポイすてきんしのじょうれいがあります。\nB: いいじょうれいですね。まちがきれいです。",
     exampleSrc:"A: This town has an anti-littering ordinance.\nB: A good ordinance. The town is clean.",
     funFact:"じょうれい (条例) are local laws passed by prefectural or municipal assemblies. Famous examples: Kyoto's building height limits to preserve the skyline, Tokyo's anti-littering laws, and various noise ordinances. Each locality can create じょうれい suited to its needs, creating interesting regional legal variation."},

    {type:"teach", trg:"しこうする", src:"to enforce / to implement (a law)", pos:"verb", gender:null,
     note:"ほうりつをしこうする = to enforce a law.\nしこうび = enforcement date.",
     example:"A: あたらしいほうりつがらいげつしこうされます。\nB: じゅんびはできていますか？",
     exampleSrc:"A: A new law will be enforced next month.\nB: Are preparations ready?",
     funFact:"しこう (施行) has a precise legal meaning: the moment a law becomes active and enforceable. The date is announced in advance. Japanese companies scramble to comply before しこうび (enforcement date). Recent examples include privacy law updates, labor reform, and digital invoice requirements."},

    // Quiz steps
    {type:"mc", q:"Japan's constitution has been amended:",
     opts:["Never since 1947","Once in 1960","Three times","Every decade"],
     ans:"Never since 1947",
     hint:"Making it one of the world's oldest unchanged constitutions. Article 9 amendment debate continues."},

    {type:"match", pairs:[
      {trg:"けんぽう", src:"constitution"},
      {trg:"さいばん", src:"trial"},
      {trg:"じんけん", src:"human rights"},
      {trg:"はんけつ", src:"verdict"},
      {trg:"べんごし", src:"lawyer"}
    ]},

    {type:"fb", s:"のうぜいはこくみんの{1}です。",
     a:["ぎむ"],
     opts:["ぎむ","けんり","きせい","ざいさん"],
     hint:"Paying taxes is a citizen's obligation. One of three constitutional duties.",
     sSrc:"Paying taxes is a citizen's {1}."},

    {type:"mc", q:"Japan's conviction rate is approximately:",
     opts:["Over 99%","About 80%","About 90%","About 95%"],
     ans:"Over 99%",
     hint:"This extremely high rate raises questions about prosecutorial power and the justice system."},

    {type:"fb", s:"ちてき{1}をまもることがだいじです。",
     a:["ざいさん"],
     opts:["ざいさん","けんり","きせい","はんけつ"],
     hint:"Intellectual property protection is important. This word means 'property' or 'assets.'",
     sSrc:"Protecting intellectual {1} is important."},

    {type:"mc", q:"Japan has fewer lawsuits than the US because:",
     opts:["Japanese prefer mediation and settlement","Courts are closed","Lawyers are banned","Laws do not allow it"],
     ans:"Japanese prefer mediation and settlement",
     hint:"Cultural preference for harmony over courtroom conflict keeps そしょう rates low."},

    {type:"match", pairs:[
      {trg:"ぎむ", src:"duty"},
      {trg:"けんり", src:"right"},
      {trg:"きせい", src:"regulation"},
      {trg:"そしょう", src:"lawsuit"},
      {trg:"じょうれい", src:"ordinance"}
    ]},

    {type:"fb", s:"あたらしいほうりつがらいげつ{1}されます。",
     a:["しこう"],
     opts:["しこう","はんけつ","きせい","そしょう"],
     hint:"The new law will come into effect next month. This verb means 'to enforce/implement.'",
     sSrc:"A new law will be {1} next month."}
  ]
};
export default BATCH7_L1;
