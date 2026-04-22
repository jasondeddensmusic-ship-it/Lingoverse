// Batch 7 – Unit 31 (B2.2 Law): Legal & Rights Vocabulary
const BATCH7_L1 = {
  id:"jav2_u31l_b7_1", title:"法律用語(ほうりつようご)", icon:"⚖️", xp:15, board:true,
  steps:[
    {type:"intro", title:"法律用語(ほうりつようご)",
     desc:"Learn legal vocabulary for understanding Japanese law, rights, and justice. These N2/N1 terms appear in news, policy debates, and formal discussions about rules and governance.",
     goals:["Discuss legal concepts and rights","Use justice and court vocabulary","Express opinions about laws and regulations"]},

    {type:"teach", trg:"憲法(けんぽう)", src:"constitution", pos:"noun", gender:null,
     note:"日本国憲法(にほんこくけんぽう) = Constitution of Japan.\n憲法改正(けんぽうかいせい) = constitutional amendment.",
     example:"A: 日本国憲法(にほんこくけんぽう)は1947年(ねん)に制定(せいてい)されました。\nB: 平和主義(へいわしゅぎ)が特徴(とくちょう)ですね。\nA: どのような影響(えいきょう)がありましたか？\nB: 社会全体(しゃかいぜんたい)に大(おお)きな影響(えいきょう)を与(あた)えました。\nA: 良(よ)い影響(えいきょう)ですか、悪(わる)い影響(えいきょう)ですか？\nB: 両方(りょうほう)あります。メリットもデメリットもあります。",
     exampleSrc:"A: Japan's constitution was enacted in 1947.\nB: Pacifism is its characteristic.\nA: What kind of impact was there?\nB: It had a big impact on society as a whole.\nA: A good impact or a bad impact?\nB: Both. There are both merits and demerits.",
     funFact:"Japan's 憲法(けんぽう) has never been amended since 1947, making it one of the world's oldest unchanged constitutions. Article 9 renounces war and armed forces. The debate over 憲法改正(けんぽうかいせい) (amendment), especially Article 9, is Japan's most divisive political issue."},

    {type:"teach", trg:"裁判(さいばん)", src:"trial / court case", pos:"noun", gender:null,
     note:"裁判所(さいばんしょ) = court. 裁判官(さいばんかん) = judge.\n裁判員制度(さいばんいんせいど) = lay judge system.",
     example:"A: 裁判員(さいばんいん)に選(えら)ばれました。\nB: 大変(たいへん)な責任(せきにん)ですね。\nA: 具体的(ぐたいてき)にはどういうことですか？\nB: つまり、状況(じょうきょう)に応(おう)じて対応(たいおう)を変(か)える必要(ひつよう)があるということです。\nA: なるほど。それは確(たし)かにそうですね。\nB: ええ、柔軟(じゅうなん)な対応(たいおう)が大切(たいせつ)だと思(おも)います。",
     exampleSrc:"A: I was selected as a lay judge.\nB: That is a big responsibility.\nA: What do you mean specifically?\nB: I mean we need to change our approach depending on the situation.\nA: I see. That is certainly true.\nB: Yes, I think flexible response is important.",
     funFact:"Japan introduced the 裁判員(さいばんいん) (lay judge) system in 2009 for serious criminal cases. Six citizens join three professional judges. Before this, all decisions were made by judges alone. Japan's conviction rate exceeds 99%, the highest among developed nations, raising questions about prosecutorial power."},

    {type:"teach", trg:"人権(じんけん)", src:"human rights", pos:"noun", gender:null,
     note:"人権(じんけん)を守(まも)る = to protect human rights.\n基本的人権(きほんてきじんけん) = fundamental human rights.",
     example:"A: 人権(じんけん)はすべての人(ひと)にあります。\nB: 憲法(けんぽう)で保障(ほしょう)されていますね。\nA: それについてもう少(すこ)し詳(くわ)しく教(おし)えてください。\nB: 例(たと)えば、最近(さいきん)の事例(じれい)を見(み)ると、変化(へんか)が激(はげ)しいです。\nA: そうですか。どう対処(たいしょ)すればいいでしょうか。\nB: まず現状(げんじょう)を把握(はあく)してから、計画(けいかく)を立(た)てましょう。",
     exampleSrc:"A: Human rights belong to everyone.\nB: They are guaranteed by the constitution.\nA: Please tell me more about that.\nB: For example, looking at recent cases, the changes are dramatic.\nA: Is that so? How should we handle it?\nB: Let's first grasp the current situation, then make a plan.",
     funFact:"人権(じんけん) education is mandatory in Japanese schools. December 4-10 is 人権週間(じんけんしゅうかん) (Human Rights Week) with events nationwide. Historical discrimination against certain groups (部落問題(ぶらくもんだい)) and Korean residents drives ongoing 人権(じんけん) activism. Japan's human rights landscape continues evolving."},

    {type:"teach", trg:"義務(ぎむ)", src:"duty / obligation", pos:"noun", gender:null,
     note:"国民(こくみん)の義務(ぎむ) = citizen's duties.\n教育(きょういく)の義務(ぎむ) = duty of education.",
     example:"A: 納税(のうぜい)は国民(こくみん)の義務(ぎむ)です。\nB: 教育(きょういく)と労働(ろうどう)も義務(ぎむ)ですね。\nA: どのような方法(ほうほう)がありますか？\nB: いくつかの選択肢(せんたくし)があります。一番(いちばん)効果的(こうかてき)なのは実践(じっせん)です。\nA: 実践(じっせん)というのは、具体的(ぐたいてき)に何(なに)をすればいいですか？\nB: 毎日(まいにち)少(すこ)しずつ取(と)り組(く)むことが重要(じゅうよう)です。",
     exampleSrc:"A: Paying taxes is a citizen's duty.\nB: Education and labor are also duties.\nA: What kinds of methods are there?\nB: There are several options. The most effective is practice.\nA: What specifically should we do in practice?\nB: It is important to work on it a little each day.",
     funFact:"Japan's constitution lists three 国民(こくみん)の義務(ぎむ) (citizen duties): education (教育(きょういく)), labor (勤労(きんろう)), and taxation (納税(のうぜい)). The balance between 権利(けんり) (rights) and 義務(ぎむ) (duties) is a core concept. Japanese society traditionally emphasizes 義務(ぎむ) over 権利(けんり), though younger generations increasingly assert their rights."},

    {type:"teach", trg:"権利(けんり)", src:"right / legal right", pos:"noun", gender:null,
     note:"権利(けんり)を主張(しゅちょう)する = to assert rights.\n選挙権(せんきょけん) = right to vote.",
     example:"A: 知(し)る権利(けんり)は大事(だいじ)です。\nB: 情報公開制度(じょうほうこうかいせいど)がそれを守(まも)ります。\nA: それはいつごろから始(はじ)まったのですか？\nB: 数年前(すうねんまえ)からですが、最近(さいきん)特(とく)に注目(ちゅうもく)されています。\nA: 今後(こんご)どうなると思(おも)いますか？\nB: さらに発展(はってん)すると予想(よそう)されています。",
     exampleSrc:"A: The right to know is important.\nB: The information disclosure system protects it.\nA: When did that start?\nB: It started a few years ago, but it has been getting particular attention recently.\nA: What do you think will happen going forward?\nB: It is expected to develop further.",
     funFact:"権利(けんり) was a Meiji-era coinage to translate Western concepts of 'rights.' The traditional Japanese emphasis was on 義務(ぎむ) (obligation) and collective harmony. Asserting individual 権利(けんり) was once seen as selfish. Modern Japan balances both, though workplace 権利(けんり) (labor rights) are increasingly emphasized."},

    {type:"teach", trg:"判決(はんけつ)", src:"judgment / verdict / ruling", pos:"noun", gender:null,
     note:"判決(はんけつ)を下(くだ)す = to hand down a verdict.\n有罪判決(ゆうざいはんけつ) = guilty verdict.",
     example:"A: 裁判所(さいばんしょ)の判決(はんけつ)が出(で)ました。\nB: 無罪(むざい)でしたか？有罪(ゆうざい)でしたか？\nA: 何(なに)か問題(もんだい)はありませんでしたか？\nB: いくつか課題(かだい)がありましたが、解決(かいけつ)しました。\nA: どのように解決(かいけつ)したのですか？\nB: チーム全体(ぜんたい)で話(はな)し合(あ)って、最善(さいぜん)の方法(ほうほう)を見(み)つけました。",
     exampleSrc:"A: The court verdict was handed down.\nB: Was it innocent? Or guilty?\nA: Were there any problems?\nB: There were some issues, but we resolved them.\nA: How did you resolve them?\nB: We discussed it as a whole team and found the best method.",
     funFact:"判決(はんけつ) decisions in Japan are read aloud by the presiding judge. The most serious 判決(はんけつ) (death penalty cases) receive intense media coverage. Japan retains the death penalty, one of few developed democracies to do so. Supreme Court (最高裁(さいこうさい)) 判決(はんけつ) set legal precedents."},

    {type:"teach", trg:"規制(きせい)", src:"regulation / restriction", pos:"noun", gender:null,
     note:"規制(きせい)する = to regulate. 規制緩和(きせいかんわ) = deregulation.\n規制(きせい)が厳(きび)しい = regulations are strict.",
     example:"A: この業界(ぎょうかい)の規制(きせい)は厳(きび)しいです。\nB: 規制緩和(きせいかんわ)が必要(ひつよう)かもしれません。\nA: その点(てん)について、もう少(すこ)し説明(せつめい)していただけますか？\nB: もちろんです。重要(じゅうよう)なのは準備(じゅんび)と計画(けいかく)です。\nA: 準備(じゅんび)にはどのくらい時間(じかん)がかかりますか？\nB: 通常(つうじょう)、一週間(いっしゅうかん)から二週間(にしゅうかん)程度(ていど)です。",
     exampleSrc:"A: Regulations in this industry are strict.\nB: Deregulation may be needed.\nA: Could you explain that point a bit more?\nB: Of course. What is important is preparation and planning.\nA: How long does preparation take?\nB: Usually about one to two weeks.",
     funFact:"規制(きせい) vs 規制緩和(きせいかんわ) (deregulation) is a constant Japanese policy debate. Japan's 規制(きせい) are often criticized as excessive, protecting incumbents over innovators. However, food safety 規制(きせい) are among the world's strictest, contributing to Japan's reputation for quality. The balance is always debated."},

    {type:"teach", trg:"財産(ざいさん)", src:"property / assets", pos:"noun", gender:null,
     note:"財産権(ざいさんけん) = property rights.\n知的財産(ちてきざいさん) = intellectual property.",
     example:"A: 知的財産(ちてきざいさん)を守(まも)ることが大事(だいじ)です。\nB: 特許取得(とっきょしゅとく)を考(かんが)えましょう。\nA: それは素晴(すば)らしい結果(けっか)ですね。\nB: ありがとうございます。チーム全員(ぜんいん)の努力(どりょく)のおかげです。\nA: 今後(こんご)の目標(もくひょう)は何(なん)ですか？\nB: さらに品質(ひんしつ)を向上(こうじょう)させることです。",
     exampleSrc:"A: Protecting intellectual property is important.\nB: Let us consider getting a patent.\nA: That is an excellent result.\nB: Thank you. It is thanks to the effort of the whole team.\nA: What are the future goals?\nB: To further improve quality.",
     funFact:"知的財産(ちてきざいさん) (intellectual property) is crucial for technology-driven Japan. Japan files more patents per capita than almost any country. Patent wars between Japanese and foreign companies are common. Anime, manga, and game 知的財産(ちてきざいさん) are major economic assets worth billions."},

    {type:"teach", trg:"訴訟(そしょう)", src:"lawsuit / litigation", pos:"noun", gender:null,
     note:"訴訟(そしょう)を起(お)こす = to file a lawsuit.\n民事訴訟(みんじそしょう) = civil lawsuit.",
     example:"A: 訴訟(そしょう)を起(お)こす予定(よてい)です。\nB: 弁護士(べんごし)に相談(そうだん)しましたか？\nA: 他(ほか)に何(なに)か気(き)をつけることはありますか？\nB: はい、期限(きげん)を守(まも)ることが一番(いちばん)大切(たいせつ)です。\nA: 期限(きげん)に間(ま)に合(あ)わない場合(ばあい)はどうしますか？\nB: 早(はや)めに上司(じょうし)に相談(そうだん)して、調整(ちょうせい)をお願(ねが)いします。",
     exampleSrc:"A: I plan to file a lawsuit.\nB: Have you consulted a lawyer?\nA: Is there anything else to be careful about?\nB: Yes, meeting deadlines is the most important thing.\nA: What do you do if you cannot meet the deadline?\nB: Consult your supervisor early and ask for an adjustment.",
     funFact:"Japan is far less litigious than the US, with about 1/10 the lawsuits per capita. Japanese people prefer mediation (調停(ちょうてい)) and settlement (和解(わかい)). Filing a 訴訟(そしょう) is seen as a last resort. This preference for harmony over conflict resolution through courts reflects deep cultural values."},

    {type:"teach", trg:"弁護士(べんごし)", src:"lawyer / attorney", pos:"noun", gender:null,
     note:"弁護士(べんごし)に相談(そうだん)する = to consult a lawyer.\n弁護士費(べんごしひ) = lawyer fees.",
     example:"A: 弁護士(べんごし)に相談(そうだん)した方(ほう)がいいですよ。\nB: そうですね。無料相談(むりょうそうだん)を探(さが)します。\nA: その件(けん)について進捗(しんちょく)はありますか？\nB: はい、順調(じゅんちょう)に進(すす)んでいます。\nA: 完了(かんりょう)の見込(みこ)みはいつごろですか？\nB: 来月(らいげつ)の初(はじ)めには完了(かんりょう)できる予定(よてい)です。",
     exampleSrc:"A: You should consult a lawyer.\nB: Yes. I will look for a free consultation.\nA: Is there any progress on that matter?\nB: Yes, it is progressing smoothly.\nA: When is it expected to be completed?\nB: It is scheduled to be completed by the beginning of next month.",
     funFact:"Japan has relatively few 弁護士(べんごし) per capita (about 43,000 for 125 million people) compared to the US. Passing the bar exam (司法試験(しほうしけん)) is extremely competitive. Legal reforms expanded law school (法科大学院(ほうかだいがくいん)) access, but the pass rate remains about 25-30%. 弁護士(べんごし) are highly respected."},

    {type:"teach", trg:"条例(じょうれい)", src:"ordinance / local regulation", pos:"noun", gender:null,
     note:"市(し)の条例(じょうれい) = city ordinance.\n条例違反(じょうれいいはん) = ordinance violation.",
     example:"A: この町(まち)にはポイ捨(す)て禁止(きんし)の条例(じょうれい)があります。\nB: 良(よ)い条例(じょうれい)ですね。町(まち)がきれいです。\nA: 以前(いぜん)と比(くら)べてどう変(か)わりましたか？\nB: かなり改善(かいぜん)されました。効率(こうりつ)が上(あ)がりました。\nA: その改善(かいぜん)の要因(よういん)は何(なん)ですか？\nB: 新(あたら)しいシステムの導入(どうにゅう)が大(おお)きかったです。",
     exampleSrc:"A: This town has an anti-littering ordinance.\nB: A good ordinance. The town is clean.\nA: How has it changed compared to before?\nB: It has improved considerably. Efficiency has increased.\nA: What was the cause of that improvement?\nB: The introduction of the new system was a big factor.",
     funFact:"条例(じょうれい) are local laws passed by prefectural or municipal assemblies. Famous examples: Kyoto's building height limits to preserve the skyline, Tokyo's anti-littering laws, and various noise ordinances. Each locality can create 条例(じょうれい) suited to its needs, creating interesting regional legal variation."},

    {type:"teach", trg:"施行(しこう)する", src:"to enforce / to implement (a law)", pos:"verb", gender:null,
     note:"法律(ほうりつ)を施行(しこう)する = to enforce a law.\n施行日(しこうび) = enforcement date.",
     example:"A: 新(あたら)しい法律(ほうりつ)が来月(らいげつ)施行(しこう)されます。\nB: 準備(じゅんび)はできていますか？\nA: ご意見(いけん)をお聞(き)かせいただけますか？\nB: 私(わたし)の考(かんが)えでは、もう少(すこ)し検討(けんとう)が必要(ひつよう)だと思(おも)います。\nA: どの点(てん)を検討(けんとう)すべきでしょうか？\nB: 予算(よさん)と人員(じんいん)の面(めん)をもう一度(いちど)見直(みなお)す必要(ひつよう)があります。",
     exampleSrc:"A: A new law will be enforced next month.\nB: Are preparations ready?\nA: Could you share your opinion?\nB: In my opinion, I think a bit more consideration is needed.\nA: Which points should be considered?\nB: We need to review the budget and staffing aspects once more.",
     funFact:"施行(しこう) has a precise legal meaning: the moment a law becomes active and enforceable. The date is announced in advance. Japanese companies scramble to comply before 施行日(しこうび) (enforcement date). Recent examples include privacy law updates, labor reform, and digital invoice requirements."},

    // Quiz steps
    {type:"mc", q:"Japan's constitution has been amended:",
     opts:["Never since 1947","Once in 1960","Three times","Every decade"],
     ans:"Never since 1947",
     hint:"Making it one of the world's oldest unchanged constitutions. Article 9 amendment debate continues."},

    {type:"match", pairs:[
      {trg:"憲法(けんぽう)", src:"constitution"},
      {trg:"裁判(さいばん)", src:"trial"},
      {trg:"人権(じんけん)", src:"human rights"},
      {trg:"判決(はんけつ)", src:"verdict"},
      {trg:"弁護士(べんごし)", src:"lawyer"}
    ]},

    {type:"fb", s:"納税(のうぜい)は国民(こくみん)の{1}です。",
     a:["義務(ぎむ)"],
     opts:["義務(ぎむ)","権利(けんり)","規制(きせい)","財産(ざいさん)"],
     hint:"Paying taxes is a citizen's obligation. One of three constitutional duties.",
     sSrc:"Paying taxes is a citizen's {1}."},

    {type:"mc", q:"Japan's conviction rate is approximately:",
     opts:["About 95%","Over 99%","About 80%","About 90%"],
     ans:"Over 99%",
     hint:"This extremely high rate raises questions about prosecutorial power and the justice system."},

    {type:"fb", s:"知的(ちてき){1}を守(まも)ることが大事(だいじ)です。",
     a:["財産(ざいさん)"],
     opts:["財産(ざいさん)","権利(けんり)","規制(きせい)","判決(はんけつ)"],
     hint:"Intellectual property protection is important. This word means 'property' or 'assets.'",
     sSrc:"Protecting intellectual {1} is important."},

    {type:"mc", q:"Japan has fewer lawsuits than the US because:",
     opts:["Lawyers are banned","Laws do not allow it","Japanese prefer mediation and settlement","Courts are closed"],
     ans:"Japanese prefer mediation and settlement",
     hint:"Cultural preference for harmony over courtroom conflict keeps 訴訟(そしょう) rates low."},

    {type:"match", pairs:[
      {trg:"義務(ぎむ)", src:"duty"},
      {trg:"権利(けんり)", src:"right"},
      {trg:"規制(きせい)", src:"regulation"},
      {trg:"訴訟(そしょう)", src:"lawsuit"},
      {trg:"条例(じょうれい)", src:"ordinance"}
    ]},

    {type:"fb", s:"新(あたら)しい法律(ほうりつ)が来月(らいげつ){1}されます。",
     a:["施行(しこう)"],
     opts:["施行(しこう)","判決(はんけつ)","規制(きせい)","訴訟(そしょう)"],
     hint:"The new law will come into effect next month. This verb means 'to enforce/implement.'",
     sSrc:"A new law will be {1} next month."}
  ]
};
export default BATCH7_L1;
