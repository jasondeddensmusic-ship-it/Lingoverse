// Batch 8 – Unit 31 (B2.3 Law): Rights & Legal Procedures
const BATCH8_L1 = {
  id:"jav2_u31l_b8_1", title:"権利(けんり)と法的(ほうてき)手続(てつづ)き", icon:"⚖️", xp:15, board:true,
  steps:[
    {type:"intro", title:"権利(けんり)と法的(ほうてき)手続(てつづ)き",
     desc:"Master legal rights and procedural vocabulary essential for understanding Japanese law, contracts, and civic participation at N2 level.",
     goals:["Discuss legal rights and obligations","Understand court and legal procedure terms","Navigate civic and constitutional vocabulary"]},

    {type:"teach", trg:"権利(けんり)", src:"right / entitlement", pos:"noun", gender:null,
     note:"Kanji: 権利. 権利(けんり)を主張(しゅちょう)する = to assert one's rights.\n基本的(きほんてき)人権(じんけん) = fundamental human rights.",
     example:"A: すべての人(ひと)に教育(きょういく)を受(う)ける権利(けんり)があります。\nB: 憲法(けんぽう)で保障(ほしょう)されていますね。\nA: その点(てん)について、もう少(すこ)し説明(せつめい)していただけますか？\nB: もちろんです。重要(じゅうよう)なのは準備(じゅんび)と計画(けいかく)です。\nA: 準備(じゅんび)にはどのくらい時間(じかん)がかかりますか？\nB: 通常(つうじょう)、一週間(いっしゅうかん)から二週間(にしゅうかん)程度(ていど)です。",
     exampleSrc:"A: All people have the right to receive education.\nB: It is guaranteed by the constitution.\nA: Could you explain that point a bit more?\nB: Of course. What is important is preparation and planning.\nA: How long does preparation take?\nB: Usually about one to two weeks.",
     funFact:"権利(けんり) awareness in Japan has grown significantly. Historically, 義務(ぎむ) (obligations) were emphasized over 権利(けんり). Modern Japanese education teaches both: 権利(けんり)と義務(ぎむ)は表裏一体(ひょうりいったい) (rights and obligations are two sides of one coin). 労働者(ろうどうしゃ)の権利(けんり) (workers' rights) gained prominence in the postwar era."},

    {type:"teach", trg:"義務(ぎむ)", src:"obligation / duty", pos:"noun", gender:null,
     note:"Kanji: 義務. 義務(ぎむ)教育(きょういく) = compulsory education.\n納税(のうぜい)の義務(ぎむ) = obligation to pay taxes.",
     example:"A: 日本(にほん)国民(こくみん)には三大(さんだい)義務(ぎむ)があります。\nB: 教育(きょういく)、勤労(きんろう)、納税(のうぜい)ですね。\nA: それは素晴(すば)らしい結果(けっか)ですね。\nB: ありがとうございます。チーム全員(ぜんいん)の努力(どりょく)のおかげです。\nA: 今後(こんご)の目標(もくひょう)は何(なん)ですか？\nB: さらに品質(ひんしつ)を向上(こうじょう)させることです。",
     exampleSrc:"A: Japanese citizens have three major obligations.\nB: Education, work, and paying taxes.\nA: That is an excellent result.\nB: Thank you. It is thanks to the effort of the whole team.\nA: What are the future goals?\nB: To further improve quality.",
     funFact:"Japan's 三大(さんだい)義務(ぎむ) (three great obligations) in the constitution are: 子(こ)どもに教育(きょういく)を受(う)けさせる義務(ぎむ) (duty to educate children), 勤労(きんろう)の義務(ぎむ) (duty to work), and 納税(のうぜい)の義務(ぎむ) (duty to pay taxes). Japanese culture traditionally emphasizes 義務(ぎむ) more than 権利(けんり)."},

    {type:"teach", trg:"裁判(さいばん)", src:"trial / court case / lawsuit", pos:"noun", gender:null,
     note:"Kanji: 裁判. 裁判所(さいばんしょ) = court.\n裁判官(さいばんかん) = judge.",
     example:"A: 裁判(さいばん)はいつ始(はじ)まりますか？\nB: 来月(らいげつ)の第一回(だいいっかい)口頭(こうとう)弁論(べんろん)です。\nA: 他(ほか)に何(なに)か気(き)をつけることはありますか？\nB: はい、期限(きげん)を守(まも)ることが一番(いちばん)大切(たいせつ)です。\nA: 期限(きげん)に間(ま)に合(あ)わない場合(ばあい)はどうしますか？\nB: 早(はや)めに上司(じょうし)に相談(そうだん)して、調整(ちょうせい)をお願(ねが)いします。",
     exampleSrc:"A: When does the trial begin?\nB: The first oral argument is next month.\nA: Is there anything else to be careful about?\nB: Yes, meeting deadlines is the most important thing.\nA: What do you do if you cannot meet the deadline?\nB: Consult your supervisor early and ask for an adjustment.",
     funFact:"Japan's 裁判(さいばん) system has three levels: 地方(ちほう)裁判所(さいばんしょ) (district court), 高等(こうとう)裁判所(さいばんしょ) (high court), and 最高(さいこう)裁判所(さいばんしょ) (Supreme Court). Since 2009, 裁判員(さいばんいん)制度(せいど) (lay judge system) involves citizens in serious criminal cases. Japan's conviction rate exceeds 99%, which is both praised and criticized."},

    {type:"teach", trg:"弁護士(べんごし)", src:"lawyer / attorney", pos:"noun", gender:null,
     note:"Kanji: 弁護士. 弁護士(べんごし)に相談(そうだん)する = to consult a lawyer.\nThe bar exam: 司法(しほう)試験(しけん).",
     example:"A: 弁護士(べんごし)に相談(そうだん)した方(ほう)がいいですか？\nB: 契約(けいやく)の問題(もんだい)なら相談(そうだん)すべきです。\nA: その件(けん)について進捗(しんちょく)はありますか？\nB: はい、順調(じゅんちょう)に進(すす)んでいます。\nA: 完了(かんりょう)の見込(みこ)みはいつごろですか？\nB: 来月(らいげつ)の初(はじ)めには完了(かんりょう)できる予定(よてい)です。",
     exampleSrc:"A: Should I consult a lawyer?\nB: If it is a contract issue, you should consult one.\nA: Is there any progress on that matter?\nB: Yes, it is progressing smoothly.\nA: When is it expected to be completed?\nB: It is scheduled to be completed by the beginning of next month.",
     funFact:"Japan's 司法(しほう)試験(しけん) (bar exam) is among the world's hardest, with a pass rate of about 25-40%. Japan has far fewer 弁護士(べんごし) per capita than the US or UK. The 2004 法科(ほうか)大学院(だいがくいん) (law school) reform aimed to increase numbers. 弁護士(べんごし)報酬(ほうしゅう) (lawyer fees) can be expensive but initial consultations are often free."},

    {type:"teach", trg:"条約(じょうやく)", src:"treaty / convention", pos:"noun", gender:null,
     note:"Kanji: 条約. 国際(こくさい)条約(じょうやく) = international treaty.\n人権(じんけん)条約(じょうやく) = human rights convention.",
     example:"A: この条約(じょうやく)に加盟(かめい)しています。\nB: 加盟国(かめいこく)は何(なん)か国(こく)ですか？\nA: 以前(いぜん)と比(くら)べてどう変(か)わりましたか？\nB: かなり改善(かいぜん)されました。効率(こうりつ)が上(あ)がりました。\nA: その改善(かいぜん)の要因(よういん)は何(なん)ですか？\nB: 新(あたら)しいシステムの導入(どうにゅう)が大(おお)きかったです。",
     exampleSrc:"A: We are a member of this treaty.\nB: How many member nations are there?\nA: How has it changed compared to before?\nB: It has improved considerably. Efficiency has increased.\nA: What was the cause of that improvement?\nB: The introduction of the new system was a big factor.",
     funFact:"Japan is party to numerous 国際(こくさい)条約(じょうやく) including the UN Charter, Geneva Conventions, and various trade agreements. 日米(にちべい)安全保障(あんぜんほしょう)条約(じょうやく) (US-Japan Security Treaty) is the cornerstone of Japan's defense policy. 条約(じょうやく) ratification requires Diet (国会(こっかい)) approval."},

    {type:"mc", q:"What are Japan's three constitutional obligations for citizens?", opts:["Education, work, and paying taxes","Voting, military service, and taxes","Education, voting, and community service","Work, voting, and recycling"], ans:"Education, work, and paying taxes",
     hint:"These 三大(さんだい)義務(ぎむ) are enshrined in Japan's postwar constitution."},

    {type:"teach", trg:"憲法(けんぽう)", src:"constitution", pos:"noun", gender:null,
     note:"Kanji: 憲法. 日本国(にほんこく)憲法(けんぽう) = Constitution of Japan.\n憲法(けんぽう)改正(かいせい) = constitutional amendment.",
     example:"A: 日本国(にほんこく)憲法(けんぽう)は第九条(だいきゅうじょう)で平和(へいわ)主義(しゅぎ)をうたっています。\nB: 戦争(せんそう)放棄(ほうき)の条項(じょうこう)ですね。\nA: ご意見(いけん)をお聞(き)かせいただけますか？\nB: 私(わたし)の考(かんが)えでは、もう少(すこ)し検討(けんとう)が必要(ひつよう)だと思(おも)います。\nA: どの点(てん)を検討(けんとう)すべきでしょうか？\nB: 予算(よさん)と人員(じんいん)の面(めん)をもう一度(いちど)見直(みなお)す必要(ひつよう)があります。",
     exampleSrc:"A: The Japanese Constitution advocates pacifism in Article 9.\nB: That is the war renunciation clause.\nA: Could you share your opinion?\nB: In my opinion, I think a bit more consideration is needed.\nA: Which points should be considered?\nB: We need to review the budget and staffing aspects once more.",
     funFact:"日本国(にほんこく)憲法(けんぽう) (1947) has never been amended, making it one of the world's oldest unamended constitutions. 第九条(だいきゅうじょう) (Article 9) renouncing war is the most debated provision. 憲法(けんぽう)改正(かいせい) (amendment) requires two-thirds of both Diet chambers plus a national referendum."},

    {type:"teach", trg:"控訴(こうそ)", src:"appeal (legal) / prosecution", pos:"noun", gender:null,
     note:"Kanji: 控訴. 控訴(こうそ)する = to appeal (a verdict).\n控訴審(こうそしん) = appeals trial.",
     example:"A: 被告(ひこく)側(がわ)が控訴(こうそ)しました。\nB: 高等(こうとう)裁判所(さいばんしょ)での審理(しんり)になりますね。\nA: 何(なに)か良(よ)い方法(ほうほう)はありませんか？\nB: 一(ひと)つ提案(ていあん)があります。段階的(だんかいてき)に進(すす)めてはどうでしょうか。\nA: 段階的(だんかいてき)に、というのはどういうことですか？\nB: まず小規模(しょうきぼ)で試(ため)してから、徐々(じょじょ)に拡大(かくだい)するということです。",
     exampleSrc:"A: The defendant's side appealed.\nB: It will be a hearing at the high court.\nA: Is there a good method?\nB: I have one suggestion. How about proceeding step by step?\nA: What do you mean by step by step?\nB: It means trying it on a small scale first, then gradually expanding.",
     funFact:"Japan's 三審制(さんしんせい) (three-trial system) allows two appeals: 控訴(こうそ) (first appeal to high court) and 上告(じょうこく) (final appeal to Supreme Court). 控訴率(こうそりつ) (appeal rate) in criminal cases is relatively low due to Japan's high conviction rate."},

    {type:"teach", trg:"証拠(しょうこ)", src:"evidence / proof", pos:"noun", gender:null,
     note:"Kanji: 証拠. 証拠(しょうこ)を集(あつ)める = to gather evidence.\n物証(ぶっしょう) = physical evidence.",
     example:"A: 十分(じゅうぶん)な証拠(しょうこ)がありますか？\nB: はい、物証(ぶっしょう)と証言(しょうげん)があります。\nA: この問題(もんだい)をどう思(おも)いますか？\nB: 複雑(ふくざつ)な問題(もんだい)ですが、解決策(かいけつさく)はあると思(おも)います。\nA: どのような解決策(かいけつさく)を考(かんが)えていますか？\nB: 関係者(かんけいしゃ)全員(ぜんいん)で話(はな)し合(あ)いの場(ば)を設(もう)けることが第一歩(だいいっぽ)です。",
     exampleSrc:"A: Is there sufficient evidence?\nB: Yes, there is physical evidence and testimony.\nA: What do you think about this issue?\nB: It is a complex issue, but I think there are solutions.\nA: What kind of solutions are you thinking of?\nB: The first step is to set up a discussion forum for all stakeholders.",
     funFact:"証拠(しょうこ) in Japanese courts follows strict rules. 状況(じょうきょう)証拠(しょうこ) (circumstantial evidence) alone rarely leads to conviction. Japan bans illegally obtained evidence (違法(いほう)収集(しゅうしゅう)証拠(しょうこ)). DNA鑑定(かんてい) has both exonerated and convicted people. Cold cases are re-examined when new 証拠(しょうこ) emerges."},

    {type:"teach", trg:"訴訟(そしょう)", src:"lawsuit / litigation", pos:"noun", gender:null,
     note:"Kanji: 訴訟. 訴訟(そしょう)を起(お)こす = to file a lawsuit.\n民事(みんじ)訴訟(そしょう) = civil lawsuit.",
     example:"A: 訴訟(そしょう)を起(お)こす予定(よてい)です。\nB: 弁護士(べんごし)に相談(そうだん)しましたか？\nA: 最近(さいきん)の動向(どうこう)はいかがですか？\nB: 全体的(ぜんたいてき)には好調(こうちょう)ですが、一部(いちぶ)課題(かだい)もあります。\nA: どのような課題(かだい)がありますか？\nB: 人材(じんざい)の確保(かくほ)が最(もっと)も大(おお)きな課題(かだい)です。",
     exampleSrc:"A: I plan to file a lawsuit.\nB: Have you consulted a lawyer?\nA: How are the recent trends?\nB: Overall things are going well, but there are some issues.\nA: What kinds of issues are there?\nB: Securing human resources is the biggest challenge.",
     funFact:"Japan is famously less litigious than the US. The phrase 訴訟(そしょう)社会(しゃかい) (litigious society) is used as a negative term for American culture. Japanese prefer 示談(じだん) (settlement), 調停(ちょうてい) (mediation), and 和解(わかい) (reconciliation) before 訴訟(そしょう). However, consumer and labor lawsuits have been increasing."},

    {type:"teach", trg:"賠償(ばいしょう)", src:"compensation / reparation / damages", pos:"noun", gender:null,
     note:"Kanji: 賠償. 損害(そんがい)賠償(ばいしょう) = compensation for damages.\n賠償金(ばいしょうきん) = compensation money.",
     example:"A: 損害(そんがい)賠償(ばいしょう)を請求(せいきゅう)します。\nB: いくら請求(せいきゅう)しますか？\nA: それは興味深(きょうみぶか)いですね。\nB: ええ、日本(にほん)ならではの特徴(とくちょう)だと思(おも)います。\nA: 海外(かいがい)ではどうなのでしょうか？\nB: 国(くに)によって異(こと)なりますが、共通(きょうつう)する部分(ぶぶん)もあります。",
     exampleSrc:"A: I will claim compensation for damages.\nB: How much will you claim?\nA: That is interesting.\nB: Yes, I think it is a characteristic unique to Japan.\nA: I wonder how it is overseas?\nB: It differs by country, but there are also common aspects.",
     funFact:"賠償(ばいしょう) in Japan is generally lower than American courts award. 慰謝料(いしゃりょう) (consolation money) for emotional distress is a uniquely Japanese legal concept. Wartime 賠償(ばいしょう) between Japan and neighboring countries remains a sensitive diplomatic issue decades after WWII."},

    {type:"fb", s:"弁護士(べんごし)に{1}した方(ほう)がいいです。\n(You should consult a lawyer.)", a:"相談(そうだん)", opts:["相談(そうだん)","控訴(こうそ)","訴訟(そしょう)","裁判(さいばん)"], sSrc:"You should consult a lawyer.",
     hint:"This word means seeking advice or discussing a problem with a professional."},

    {type:"teach", trg:"禁固(きんこ)", src:"prison / imprisonment", pos:"noun", gender:null,
     note:"Kanji: 禁固. 禁固刑(きんこけい) = prison sentence.\n長期(ちょうき)禁固(きんこ) = long-term imprisonment.",
     example:"A: 犯人(はんにん)に禁固(きんこ)十年(じゅうねん)の刑(けい)が言(い)い渡(わた)されました。\nB: 重大(じゅうだい)犯罪(はんざい)ですね。\nA: その経験(けいけん)から何(なに)を学(まな)びましたか？\nB: 事前(じぜん)の準備(じゅんび)がいかに重要(じゅうよう)かを学(まな)びました。\nA: 具体的(ぐたいてき)にどんな準備(じゅんび)をすべきですか？\nB: まず情報収集(じょうほうしゅうしゅう)をして、それから計画(けいかく)を練(ね)ることが大事(だいじ)です。",
     exampleSrc:"A: The criminal was sentenced to 10 years imprisonment.\nB: It is a serious crime.\nA: What did you learn from that experience?\nB: I learned how important advance preparation is.\nA: What kind of preparation should be done specifically?\nB: First, gather information, then it is important to develop a plan.",
     funFact:"Japan's prison system emphasizes rehabilitation (更生(こうせい)). Recidivism rates are relatively low. 死刑(しけい) (death penalty) exists and is carried out by hanging. Japan's prison food is considered good quality and nutritious. 高齢(こうれい)受刑者(しゅうけいしゃ) (elderly inmates) are a growing issue as Japan's population ages."},

    {type:"teach", trg:"著作権(ちょさくけん)", src:"copyright / intellectual property right", pos:"noun", gender:null,
     note:"Kanji: 著作権. 著作権(ちょさくけん)侵害(しんがい) = copyright infringement.\n著作権法(ちょさくけんほう) = copyright law.",
     example:"A: この画像(がぞう)を使(つか)うと著作権(ちょさくけん)侵害(しんがい)になります。\nB: 許可(きょか)を取(と)る必要(ひつよう)がありますね。\nA: 今後(こんご)の展望(てんぼう)についてお聞(き)かせください。\nB: 今後(こんご)はさらに国際化(こくさいか)が進(すす)むと思(おも)います。\nA: それに対(たい)してどのような対策(たいさく)が必要(ひつよう)ですか？\nB: 語学力(ごがくりょく)の向上(こうじょう)と異文化理解(いぶんかりかい)が不可欠(ふかけつ)です。",
     exampleSrc:"A: Using this image would be copyright infringement.\nB: We need to get permission.\nA: Please tell me about future prospects.\nB: I think internationalization will progress further going forward.\nA: What measures are needed for that?\nB: Improving language skills and cross-cultural understanding are essential.",
     funFact:"Japan takes 著作権(ちょさくけん) very seriously, especially for manga and anime. Illegal scanning and uploading (海賊版(かいぞくばん), piracy) has prompted strict enforcement. 著作権法(ちょさくけんほう) was updated to criminalize downloading pirated content. Japan's Cool Japan strategy depends on protecting creative 著作権(ちょさくけん) globally."},

    {type:"match", pairs:[{trg:"権利(けんり)",src:"right"},{trg:"義務(ぎむ)",src:"obligation"},{trg:"裁判(さいばん)",src:"trial"},{trg:"証拠(しょうこ)",src:"evidence"},{trg:"訴訟(そしょう)",src:"lawsuit"}],
     hint:"Match each legal term with its English meaning."},

    {type:"mc", q:"What is special about Japan's conviction rate?", opts:["It exceeds 99%","It is about 50%","It is the lowest in Asia","It varies widely by region"], ans:"It exceeds 99%",
     hint:"This extremely high rate is both praised for accuracy and criticized for potential bias."},

    {type:"fb", s:"日本国(にほんこく)憲法(けんぽう)の{1}条(じょう)は平和(へいわ)主義(しゅぎ)をうたっています。\n(Article 9 of the Japanese Constitution advocates pacifism.)", a:"第九(だいきゅう)", opts:["第九(だいきゅう)","第一(だいいち)","第二(だいに)","第三(だいさん)"], sSrc:"Article 9 of the Japanese Constitution advocates pacifism.",
     hint:"This famous article renounces war and is the most debated constitutional provision."},

    {type:"mc", q:"What does Japan prefer before filing a 訴訟(そしょう) (lawsuit)?", opts:["Settlement, mediation, and reconciliation","Immediate court action","Public protests","International arbitration"], ans:"Settlement, mediation, and reconciliation",
     hint:"Japan is less litigious than many Western countries, preferring harmonious resolution."}
  ,{type:"match",pairs:[{trg:"弁護士(べんごし)",src:"lawyer / attorney"},{trg:"条約(じょうやく)",src:"treaty / convention"},{trg:"憲法(けんぽう)",src:"constitution"},{trg:"控訴(こうそ)",src:"appeal (legal) / prosecution"},{trg:"賠償(ばいしょう)",src:"compensation / reparation / damages"},{trg:"禁固(きんこ)",src:"prison / imprisonment"}]},{type:"match",pairs:[{trg:"著作権(ちょさくけん)",src:"copyright / intellectual property right"}]}]
};
export default BATCH8_L1;
