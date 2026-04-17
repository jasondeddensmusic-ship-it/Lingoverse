// Batch 7 – Unit 31 (B2.2 Law): Legal & Rights Vocabulary
const BATCH7_L1 = {
  id:"jav2_u31l_b7_1", title:"ほうりつようご", icon:"⚖️", xp:15, board:true,
  steps:[
    {type:"intro", title:"ほうりつようご",
     desc:"Learn legal vocabulary for understanding Japanese law, rights, and justice. These N2/N1 terms appear in news, policy debates, and formal discussions about rules and governance.",
     goals:["Discuss legal concepts and rights","Use justice and court vocabulary","Express opinions about laws and regulations"]},

    {type:"teach", trg:"けんぽう", src:"constitution", pos:"noun", gender:null,
     note:"にほんこくけんぽう = Constitution of Japan.\nけんぽうかいせい = constitutional amendment.",
     example:"A: にほんこくけんぽうは1947ねんにせいていされました。\nB: へいわしゅぎがとくちょうですね。\nA: どのような影響(えいきょう)がありましたか？\nB: 社会全体(しゃかいぜんたい)に大(おお)きな影響(えいきょう)を与(あた)えました。\nA: 良(よ)い影響(えいきょう)ですか、悪(わる)い影響(えいきょう)ですか？\nB: 両方(りょうほう)あります。メリットもデメリットもあります。",
     exampleSrc:"A: Japan's constitution was enacted in 1947.\nB: Pacifism is its characteristic.\nA: What kind of impact was there?\nB: It had a big impact on society as a whole.\nA: A good impact or a bad impact?\nB: Both. There are both merits and demerits.",
     funFact:"Japan's けんぽう (憲法) has never been amended since 1947, making it one of the world's oldest unchanged constitutions. Article 9 renounces war and armed forces. The debate over けんぽうかいせい (amendment), especially Article 9, is Japan's most divisive political issue."},

    {type:"teach", trg:"さいばん", src:"trial / court case", pos:"noun", gender:null,
     note:"さいばんしょ = court. さいばんかん = judge.\nさいばんいんせいど = lay judge system.",
     example:"A: さいばんいんにえらばれました。\nB: たいへんなせきにんですね。\nA: 具体的(ぐたいてき)にはどういうことですか？\nB: つまり、状況(じょうきょう)に応(おう)じて対応(たいおう)を変(か)える必要(ひつよう)があるということです。\nA: なるほど。それは確(たし)かにそうですね。\nB: ええ、柔軟(じゅうなん)な対応(たいおう)が大切(たいせつ)だと思(おも)います。",
     exampleSrc:"A: I was selected as a lay judge.\nB: That is a big responsibility.\nA: What do you mean specifically?\nB: I mean we need to change our approach depending on the situation.\nA: I see. That is certainly true.\nB: Yes, I think flexible response is important.",
     funFact:"Japan introduced the さいばんいん (lay judge) system in 2009 for serious criminal cases. Six citizens join three professional judges. Before this, all decisions were made by judges alone. Japan's conviction rate exceeds 99%, the highest among developed nations, raising questions about prosecutorial power."},

    {type:"teach", trg:"じんけん", src:"human rights", pos:"noun", gender:null,
     note:"じんけんをまもる = to protect human rights.\nきほんてきじんけん = fundamental human rights.",
     example:"A: じんけんはすべてのひとにあります。\nB: けんぽうでほしょうされていますね。\nA: それについてもう少(すこ)し詳(くわ)しく教(おし)えてください。\nB: 例(たと)えば、最近(さいきん)の事例(じれい)を見(み)ると、変化(へんか)が激(はげ)しいです。\nA: そうですか。どう対処(たいしょ)すればいいでしょうか。\nB: まず現状(げんじょう)を把握(はあく)してから、計画(けいかく)を立(た)てましょう。",
     exampleSrc:"A: Human rights belong to everyone.\nB: They are guaranteed by the constitution.\nA: Please tell me more about that.\nB: For example, looking at recent cases, the changes are dramatic.\nA: Is that so? How should we handle it?\nB: Let's first grasp the current situation, then make a plan.",
     funFact:"じんけん (人権) education is mandatory in Japanese schools. December 4-10 is 人権週間 (Human Rights Week) with events nationwide. Historical discrimination against certain groups (部落問題, burakumon) and Korean residents drives ongoing じんけん activism. Japan's human rights landscape continues evolving."},

    {type:"teach", trg:"ぎむ", src:"duty / obligation", pos:"noun", gender:null,
     note:"こくみんのぎむ = citizen's duties.\nきょういくのぎむ = duty of education.",
     example:"A: のうぜいはこくみんのぎむです。\nB: きょういくとろうどうもぎむですね。\nA: どのような方法(ほうほう)がありますか？\nB: いくつかの選択肢(せんたくし)があります。一番(いちばん)効果的(こうかてき)なのは実践(じっせん)です。\nA: 実践(じっせん)というのは、具体的(ぐたいてき)に何(なに)をすればいいですか？\nB: 毎日(まいにち)少(すこ)しずつ取(と)り組(く)むことが重要(じゅうよう)です。",
     exampleSrc:"A: Paying taxes is a citizen's duty.\nB: Education and labor are also duties.\nA: What kinds of methods are there?\nB: There are several options. The most effective is practice.\nA: What specifically should we do in practice?\nB: It is important to work on it a little each day.",
     funFact:"Japan's constitution lists three こくみんのぎむ (citizen duties): education (教育), labor (勤労), and taxation (納税). The balance between けんり (rights) and ぎむ (duties) is a core concept. Japanese society traditionally emphasizes ぎむ over けんり, though younger generations increasingly assert their rights."},

    {type:"teach", trg:"けんり", src:"right / legal right", pos:"noun", gender:null,
     note:"けんりをしゅちょうする = to assert rights.\nせんきょけん = right to vote.",
     example:"A: しるけんりはだいじです。\nB: じょうほうこうかいせいどがそれをまもります。\nA: それはいつごろから始(はじ)まったのですか？\nB: 数年前(すうねんまえ)からですが、最近(さいきん)特(とく)に注目(ちゅうもく)されています。\nA: 今後(こんご)どうなると思(おも)いますか？\nB: さらに発展(はってん)すると予想(よそう)されています。",
     exampleSrc:"A: The right to know is important.\nB: The information disclosure system protects it.\nA: When did that start?\nB: It started a few years ago, but it has been getting particular attention recently.\nA: What do you think will happen going forward?\nB: It is expected to develop further.",
     funFact:"けんり (権利) was a Meiji-era coinage to translate Western concepts of 'rights.' The traditional Japanese emphasis was on ぎむ (obligation) and collective harmony. Asserting individual けんり was once seen as selfish. Modern Japan balances both, though workplace けんり (labor rights) are increasingly emphasized."},

    {type:"teach", trg:"はんけつ", src:"judgment / verdict / ruling", pos:"noun", gender:null,
     note:"はんけつをくだす = to hand down a verdict.\nゆうざいはんけつ = guilty verdict.",
     example:"A: さいばんしょのはんけつがでました。\nB: むざいでしたか？ゆうざいでしたか？\nA: 何(なに)か問題(もんだい)はありませんでしたか？\nB: いくつか課題(かだい)がありましたが、解決(かいけつ)しました。\nA: どのように解決(かいけつ)したのですか？\nB: チーム全体(ぜんたい)で話(はな)し合(あ)って、最善(さいぜん)の方法(ほうほう)を見(み)つけました。",
     exampleSrc:"A: The court verdict was handed down.\nB: Was it innocent? Or guilty?\nA: Were there any problems?\nB: There were some issues, but we resolved them.\nA: How did you resolve them?\nB: We discussed it as a whole team and found the best method.",
     funFact:"はんけつ (判決) decisions in Japan are read aloud by the presiding judge. The most serious はんけつ (death penalty cases) receive intense media coverage. Japan retains the death penalty, one of few developed democracies to do so. Supreme Court (最高裁) はんけつ set legal precedents."},

    {type:"teach", trg:"きせい", src:"regulation / restriction", pos:"noun", gender:null,
     note:"きせいする = to regulate. きせいかんわ = deregulation.\nきせいがきびしい = regulations are strict.",
     example:"A: このぎょうかいのきせいはきびしいです。\nB: きせいかんわがひつようかもしれません。\nA: その点(てん)について、もう少(すこ)し説明(せつめい)していただけますか？\nB: もちろんです。重要(じゅうよう)なのは準備(じゅんび)と計画(けいかく)です。\nA: 準備(じゅんび)にはどのくらい時間(じかん)がかかりますか？\nB: 通常(つうじょう)、一週間(いっしゅうかん)から二週間(にしゅうかん)程度(ていど)です。",
     exampleSrc:"A: Regulations in this industry are strict.\nB: Deregulation may be needed.\nA: Could you explain that point a bit more?\nB: Of course. What is important is preparation and planning.\nA: How long does preparation take?\nB: Usually about one to two weeks.",
     funFact:"きせい (規制) vs きせいかんわ (deregulation) is a constant Japanese policy debate. Japan's きせい are often criticized as excessive, protecting incumbents over innovators. However, food safety きせい are among the world's strictest, contributing to Japan's reputation for quality. The balance is always debated."},

    {type:"teach", trg:"ざいさん", src:"property / assets", pos:"noun", gender:null,
     note:"ざいさんけん = property rights.\nちてきざいさん = intellectual property.",
     example:"A: ちてきざいさんをまもることがだいじです。\nB: とっきょしゅとくをかんがえましょう。\nA: それは素晴(すば)らしい結果(けっか)ですね。\nB: ありがとうございます。チーム全員(ぜんいん)の努力(どりょく)のおかげです。\nA: 今後(こんご)の目標(もくひょう)は何(なん)ですか？\nB: さらに品質(ひんしつ)を向上(こうじょう)させることです。",
     exampleSrc:"A: Protecting intellectual property is important.\nB: Let us consider getting a patent.\nA: That is an excellent result.\nB: Thank you. It is thanks to the effort of the whole team.\nA: What are the future goals?\nB: To further improve quality.",
     funFact:"ちてきざいさん (知的財産, intellectual property) is crucial for technology-driven Japan. Japan files more patents per capita than almost any country. Patent wars between Japanese and foreign companies are common. Anime, manga, and game ちてきざいさん are major economic assets worth billions."},

    {type:"teach", trg:"そしょう", src:"lawsuit / litigation", pos:"noun", gender:null,
     note:"そしょうをおこす = to file a lawsuit.\nみんじそしょう = civil lawsuit.",
     example:"A: そしょうをおこすよていです。\nB: べんごしにそうだんしましたか？\nA: 他(ほか)に何(なに)か気(き)をつけることはありますか？\nB: はい、期限(きげん)を守(まも)ることが一番(いちばん)大切(たいせつ)です。\nA: 期限(きげん)に間(ま)に合(あ)わない場合(ばあい)はどうしますか？\nB: 早(はや)めに上司(じょうし)に相談(そうだん)して、調整(ちょうせい)をお願(ねが)いします。",
     exampleSrc:"A: I plan to file a lawsuit.\nB: Have you consulted a lawyer?\nA: Is there anything else to be careful about?\nB: Yes, meeting deadlines is the most important thing.\nA: What do you do if you cannot meet the deadline?\nB: Consult your supervisor early and ask for an adjustment.",
     funFact:"Japan is far less litigious than the US, with about 1/10 the lawsuits per capita. Japanese people prefer mediation (調停, ちょうてい) and settlement (和解, わかい). Filing a そしょう is seen as a last resort. This preference for harmony over conflict resolution through courts reflects deep cultural values."},

    {type:"teach", trg:"べんごし", src:"lawyer / attorney", pos:"noun", gender:null,
     note:"べんごしにそうだんする = to consult a lawyer.\nべんごしひ = lawyer fees.",
     example:"A: べんごしにそうだんしたほうがいいですよ。\nB: そうですね。むりょうそうだんをさがします。\nA: その件(けん)について進捗(しんちょく)はありますか？\nB: はい、順調(じゅんちょう)に進(すす)んでいます。\nA: 完了(かんりょう)の見込(みこ)みはいつごろですか？\nB: 来月(らいげつ)の初(はじ)めには完了(かんりょう)できる予定(よてい)です。",
     exampleSrc:"A: You should consult a lawyer.\nB: Yes. I will look for a free consultation.\nA: Is there any progress on that matter?\nB: Yes, it is progressing smoothly.\nA: When is it expected to be completed?\nB: It is scheduled to be completed by the beginning of next month.",
     funFact:"Japan has relatively few べんごし per capita (about 43,000 for 125 million people) compared to the US. Passing the bar exam (司法試験, しほうしけん) is extremely competitive. Legal reforms expanded law school (法科大学院) access, but the pass rate remains about 25-30%. べんごし are highly respected."},

    {type:"teach", trg:"じょうれい", src:"ordinance / local regulation", pos:"noun", gender:null,
     note:"しのじょうれい = city ordinance.\nじょうれいいはん = ordinance violation.",
     example:"A: このまちにはポイすてきんしのじょうれいがあります。\nB: いいじょうれいですね。まちがきれいです。\nA: 以前(いぜん)と比(くら)べてどう変(か)わりましたか？\nB: かなり改善(かいぜん)されました。効率(こうりつ)が上(あ)がりました。\nA: その改善(かいぜん)の要因(よういん)は何(なん)ですか？\nB: 新(あたら)しいシステムの導入(どうにゅう)が大(おお)きかったです。",
     exampleSrc:"A: This town has an anti-littering ordinance.\nB: A good ordinance. The town is clean.\nA: How has it changed compared to before?\nB: It has improved considerably. Efficiency has increased.\nA: What was the cause of that improvement?\nB: The introduction of the new system was a big factor.",
     funFact:"じょうれい (条例) are local laws passed by prefectural or municipal assemblies. Famous examples: Kyoto's building height limits to preserve the skyline, Tokyo's anti-littering laws, and various noise ordinances. Each locality can create じょうれい suited to its needs, creating interesting regional legal variation."},

    {type:"teach", trg:"しこうする", src:"to enforce / to implement (a law)", pos:"verb", gender:null,
     note:"ほうりつをしこうする = to enforce a law.\nしこうび = enforcement date.",
     example:"A: あたらしいほうりつがらいげつしこうされます。\nB: じゅんびはできていますか？\nA: ご意見(いけん)をお聞(き)かせいただけますか？\nB: 私(わたし)の考(かんが)えでは、もう少(すこ)し検討(けんとう)が必要(ひつよう)だと思(おも)います。\nA: どの点(てん)を検討(けんとう)すべきでしょうか？\nB: 予算(よさん)と人員(じんいん)の面(めん)をもう一度(いちど)見直(みなお)す必要(ひつよう)があります。",
     exampleSrc:"A: A new law will be enforced next month.\nB: Are preparations ready?\nA: Could you share your opinion?\nB: In my opinion, I think a bit more consideration is needed.\nA: Which points should be considered?\nB: We need to review the budget and staffing aspects once more.",
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
