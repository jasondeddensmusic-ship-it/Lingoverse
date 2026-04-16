// Batch 8 – Unit 31 (B2.3 Law): Rights & Legal Procedures
const BATCH8_L1 = {
  id:"jav2_u31l_b8_1", title:"けんりとほうてきてつづき", icon:"⚖️", xp:15, board:true,
  steps:[
    {type:"intro", title:"けんりとほうてきてつづき",
     desc:"Master legal rights and procedural vocabulary essential for understanding Japanese law, contracts, and civic participation at N2 level.",
     goals:["Discuss legal rights and obligations","Understand court and legal procedure terms","Navigate civic and constitutional vocabulary"]},

    {type:"teach", trg:"けんり", src:"right / entitlement", pos:"noun", gender:null,
     note:"Kanji: 権利. けんりをしゅちょうする = to assert one's rights.\nきほんてきじんけん = fundamental human rights.",
     example:"A: すべてのひとにきょういくをうけるけんりがあります。\nB: けんぽうでほしょうされていますね。",
     exampleSrc:"A: All people have the right to receive education.\nB: It is guaranteed by the constitution.",
     funFact:"けんり (権利) awareness in Japan has grown significantly. Historically, ぎむ (obligations) were emphasized over けんり. Modern Japanese education teaches both: けんりとぎむはひょうりいったい (rights and obligations are two sides of one coin). ろうどうしゃのけんり (workers' rights) gained prominence in the postwar era."},

    {type:"teach", trg:"ぎむ", src:"obligation / duty", pos:"noun", gender:null,
     note:"Kanji: 義務. ぎむきょういく = compulsory education.\nのうぜいのぎむ = obligation to pay taxes.",
     example:"A: にほんこくみんにはさんだいぎむがあります。\nB: きょういく、きんろう、のうぜいですね。",
     exampleSrc:"A: Japanese citizens have three major obligations.\nB: Education, work, and paying taxes.",
     funFact:"Japan's さんだいぎむ (three great obligations) in the constitution are: こどもにきょういくをうけさせるぎむ (duty to educate children), きんろうのぎむ (duty to work), and のうぜいのぎむ (duty to pay taxes). Japanese culture traditionally emphasizes ぎむ more than けんり."},

    {type:"teach", trg:"さいばん", src:"trial / court case / lawsuit", pos:"noun", gender:null,
     note:"Kanji: 裁判. さいばんしょ = court.\nさいばんかん = judge.",
     example:"A: さいばんはいつはじまりますか？\nB: らいげつのだいいちかいこうとうべんろんです。",
     exampleSrc:"A: When does the trial begin?\nB: The first oral argument is next month.",
     funFact:"Japan's さいばん system has three levels: ちほうさいばんしょ (district court), こうとうさいばんしょ (high court), and さいこうさいばんしょ (Supreme Court). Since 2009, さいばんいんせいど (lay judge system) involves citizens in serious criminal cases. Japan's conviction rate exceeds 99%, which is both praised and criticized."},

    {type:"teach", trg:"べんごし", src:"lawyer / attorney", pos:"noun", gender:null,
     note:"Kanji: 弁護士. べんごしにそうだんする = to consult a lawyer.\nThe bar exam: しほうしけん.",
     example:"A: べんごしにそうだんしたほうがいいですか？\nB: けいやくのもんだいならそうだんすべきです。",
     exampleSrc:"A: Should I consult a lawyer?\nB: If it is a contract issue, you should consult one.",
     funFact:"Japan's しほうしけん (bar exam) is among the world's hardest, with a pass rate of about 25-40%. Japan has far fewer べんごし per capita than the US or UK. The 2004 ほうかだいがくいん (law school) reform aimed to increase numbers. べんごしほうしゅう (lawyer fees) can be expensive but initial consultations are often free."},

    {type:"teach", trg:"じょうやく", src:"treaty / convention", pos:"noun", gender:null,
     note:"Kanji: 条約. こくさいじょうやく = international treaty.\nじんけんじょうやく = human rights convention.",
     example:"A: このじょうやくにかめいしています。\nB: かめいこくはなんかこくですか？",
     exampleSrc:"A: We are a member of this treaty.\nB: How many member nations are there?",
     funFact:"Japan is party to numerous こくさいじょうやく including the UN Charter, Geneva Conventions, and various trade agreements. にちべいあんぜんほしょうじょうやく (US-Japan Security Treaty) is the cornerstone of Japan's defense policy. じょうやく ratification requires Diet (こっかい) approval."},

    {type:"mc", q:"What are Japan's three constitutional obligations for citizens?", opts:["Education, work, and paying taxes","Voting, military service, and taxes","Education, voting, and community service","Work, voting, and recycling"], ans:"Education, work, and paying taxes",
     hint:"These さんだいぎむ are enshrined in Japan's postwar constitution."},

    {type:"teach", trg:"けんぽう", src:"constitution", pos:"noun", gender:null,
     note:"Kanji: 憲法. にほんこくけんぽう = Constitution of Japan.\nけんぽうかいせい = constitutional amendment.",
     example:"A: にほんこくけんぽうはだいきゅうじょうでへいわしゅぎをうたっています。\nB: せんそうほうきのじょうこうですね。",
     exampleSrc:"A: The Japanese Constitution advocates pacifism in Article 9.\nB: That is the war renunciation clause.",
     funFact:"にほんこくけんぽう (1947) has never been amended, making it one of the world's oldest unamended constitutions. だいきゅうじょう (Article 9) renouncing war is the most debated provision. けんぽうかいせい (amendment) requires two-thirds of both Diet chambers plus a national referendum."},

    {type:"teach", trg:"こうそ", src:"appeal (legal) / prosecution", pos:"noun", gender:null,
     note:"Kanji: 控訴. こうそする = to appeal (a verdict).\nこうそしん = appeals trial.",
     example:"A: ひこくがわがこうそしました。\nB: こうとうさいばんしょでのしんりになりますね。",
     exampleSrc:"A: The defendant's side appealed.\nB: It will be a hearing at the high court.",
     funFact:"Japan's さんしんせい (three-trial system) allows two appeals: こうそ (first appeal to high court) and じょうこく (final appeal to Supreme Court). こうそりつ (appeal rate) in criminal cases is relatively low due to Japan's high conviction rate. ふくそ (appeal in civil cases) uses different terminology."},

    {type:"teach", trg:"しょうこ", src:"evidence / proof", pos:"noun", gender:null,
     note:"Kanji: 証拠. しょうこをあつめる = to gather evidence.\nぶっしょう = physical evidence.",
     example:"A: じゅうぶんなしょうこがありますか？\nB: はい、ぶっしょうとしょうげんがあります。",
     exampleSrc:"A: Is there sufficient evidence?\nB: Yes, there is physical evidence and testimony.",
     funFact:"しょうこ (証拠) in Japanese courts follows strict rules. じょうきょうしょうこ (circumstantial evidence) alone rarely leads to conviction. Japan bans illegal search evidence (いほうしゅうしゅうしょうこ). DNA evidence (DNA かんてい) has both exonerated and convicted people. Cold cases are re-examined when new しょうこ emerges."},

    {type:"teach", trg:"そしょう", src:"lawsuit / litigation", pos:"noun", gender:null,
     note:"Kanji: 訴訟. そしょうをおこす = to file a lawsuit.\nみんじそしょう = civil lawsuit.",
     example:"A: そしょうをおこすよていです。\nB: べんごしにそうだんしましたか？",
     exampleSrc:"A: I plan to file a lawsuit.\nB: Have you consulted a lawyer?",
     funFact:"Japan is famously less litigious than the US. The phrase そしょうしゃかい (litigious society) is used as a negative term for American culture. Japanese prefer じだん (settlement), ちょうてい (mediation), and わかい (reconciliation) before そしょう. However, consumer and labor lawsuits have been increasing."},

    {type:"teach", trg:"ばいしょう", src:"compensation / reparation / damages", pos:"noun", gender:null,
     note:"Kanji: 賠償. そんがいばいしょう = compensation for damages.\nばいしょうきん = compensation money.",
     example:"A: そんがいばいしょうをせいきゅうします。\nB: いくらせいきゅうしますか？",
     exampleSrc:"A: I will claim compensation for damages.\nB: How much will you claim?",
     funFact:"ばいしょう (賠償) in Japan is generally lower than American courts award. いしゃりょう (consolation money) for emotional distress is a uniquely Japanese legal concept. Wartime ばいしょう between Japan and neighboring countries remains a sensitive diplomatic issue decades after WWII."},

    {type:"fb", s:"べんごしに{1}したほうがいいです。\n(You should consult a lawyer.)", a:"そうだん", opts:["そうだん","こうそ","そしょう","さいばん"], sSrc:"You should consult a lawyer.",
     hint:"This word means seeking advice or discussing a problem with a professional."},

    {type:"teach", trg:"きんこ", src:"prison / imprisonment", pos:"noun", gender:null,
     note:"Kanji: 禁固. きんこけい = prison sentence.\nちょうききんこ = long-term imprisonment.",
     example:"A: はんにんにきんこじゅうねんのけいがいいわたされました。\nB: じゅうだいはんざいですね。",
     exampleSrc:"A: The criminal was sentenced to 10 years imprisonment.\nB: It is a serious crime.",
     funFact:"Japan's prison system emphasizes rehabilitation (こうせい). Recidivism rates are relatively low. しけい (death penalty) exists and is carried out by hanging. Japan's prison food is considered good quality and nutritious. Elderly inmates (こうれいしゅうじんしゃ) are a growing issue as Japan's population ages."},

    {type:"teach", trg:"ちょさくけん", src:"copyright / intellectual property right", pos:"noun", gender:null,
     note:"Kanji: 著作権. ちょさくけんしんがい = copyright infringement.\nちょさくけんほう = copyright law.",
     example:"A: このがぞうをつかうとちょさくけんしんがいになります。\nB: きょかをとるひつようがありますね。",
     exampleSrc:"A: Using this image would be copyright infringement.\nB: We need to get permission.",
     funFact:"Japan takes ちょさくけん very seriously, especially for manga and anime. Illegal scanning and uploading (かいぞくばん, piracy) has prompted strict enforcement. The ちょさくけんほう was updated to criminalize downloading pirated content. Japan's Cool Japan strategy depends on protecting creative ちょさくけん globally."},

    {type:"match", pairs:[{trg:"けんり",src:"right"},{trg:"ぎむ",src:"obligation"},{trg:"さいばん",src:"trial"},{trg:"しょうこ",src:"evidence"},{trg:"そしょう",src:"lawsuit"}],
     hint:"Match each legal term with its English meaning."},

    {type:"mc", q:"What is special about Japan's conviction rate?", opts:["It exceeds 99%","It is about 50%","It is the lowest in Asia","It varies widely by region"], ans:"It exceeds 99%",
     hint:"This extremely high rate is both praised for accuracy and criticized for potential bias."},

    {type:"fb", s:"にほんこくけんぽうの{1}じょうはへいわしゅぎをうたっています。\n(Article 9 of the Japanese Constitution advocates pacifism.)", a:"だいきゅう", opts:["だいきゅう","だいいち","だいに","だいさん"], sSrc:"Article 9 of the Japanese Constitution advocates pacifism.",
     hint:"This famous article renounces war and is the most debated constitutional provision."},

    {type:"mc", q:"What does Japan prefer before filing a そしょう (lawsuit)?", opts:["Settlement, mediation, and reconciliation","Immediate court action","Public protests","International arbitration"], ans:"Settlement, mediation, and reconciliation",
     hint:"Japan is less litigious than many Western countries, preferring harmonious resolution."}
  ]
};
export default BATCH8_L1;
