// Batch 8 – Unit 18 (B1.1 Causative): Workplace Hierarchy Verbs
const BATCH8_L1 = {
  id:"jav2_u18l_b8_1", title:"職場(しょくば)の上下(じょうげ)関係(かんけい)", icon:"🏢", xp:15, board:true,
  steps:[
    {type:"intro", title:"職場(しょくば)の上下(じょうげ)関係(かんけい)",
     desc:"Learn verbs and expressions for workplace hierarchy and delegation. These words naturally combine with causative forms to express who makes whom do what in Japanese organizations.",
     goals:["Use workplace hierarchy vocabulary","Express delegation and instruction","Understand superior-subordinate communication patterns"]},

    {type:"teach", trg:"命令(めいれい)する", src:"to order / to command", pos:"verb", gender:null,
     note:"Kanji: 命令. 上司(じょうし)の命令(めいれい) = boss's order.\nStrong, top-down directive.",
     example:"A: 部長(ぶちょう)から命令(めいれい)が出(で)ました。\nB: 何(なに)と命令(めいれい)されましたか？\nA: 難(むずか)しかったですか？\nB: 最初(さいしょ)は難(むずか)しかったですが、慣(な)れました。",
     exampleSrc:"A: An order came from the department head.\nB: What were you ordered?\nA: Was it difficult?\nB: It was difficult at first, but I got used to it.",
     funFact:"命令(めいれい) is the strongest form of workplace directive. The kanji combine 命 (life) and 令 (command). In modern Japanese business, direct 命令(めいれい) is softened with phrases like おねがいします or していただけますか. Pure 命令(めいれい) tone is reserved for emergencies or military contexts."},

    {type:"teach", trg:"任(まか)せる", src:"to entrust / to leave it to (someone)", pos:"verb", gender:null,
     note:"Kanji: 任せる. 任(まか)せてください = leave it to me.\n任務(にんむ)を任(まか)せる = to entrust a task.",
     example:"A: このプロジェクトを任(まか)せてもいいですか？\nB: はい、任(まか)せてください。\nA: おすすめですか？\nB: はい、ぜひ試(ため)してみてください。",
     exampleSrc:"A: Can I leave this project to you?\nB: Yes, leave it to me.\nA: Do you recommend it?\nB: Yes, please try it.",
     funFact:"任(まか)せる shows trust in Japanese business culture. Being 任(まか)される (entrusted with something) is an honor. The phrase おまかせ (I leave it to you) at restaurants means the chef chooses your meal. おまかせコース (chef's choice course) is a premium dining experience."},

    {type:"teach", trg:"報告(ほうこく)する", src:"to report / to inform", pos:"verb", gender:null,
     note:"Kanji: 報告. ほうれんそう = report, contact, consult.\n結果(けっか)を報告(ほうこく)する = to report results.",
     example:"A: 進捗(しんちょく)を報告(ほうこく)してください。\nB: はい、毎週(まいしゅう)金曜日(きんようび)に報告(ほうこく)します。\nA: 一緒(いっしょ)に行(い)きませんか？\nB: いいですね。行(い)きましょう。",
     exampleSrc:"A: Please report the progress.\nB: Yes, I will report every Friday.\nA: Shall we go together?\nB: That sounds good. Let's go.",
     funFact:"ほうれんそう (報連相) is a famous Japanese business acronym: 報告(ほうこく) (report), 連絡(れんらく) (contact), 相談(そうだん) (consult). It is the golden rule of Japanese workplace communication. Every new employee learns ほうれんそう during training. The word sounds like ほうれんそう (spinach), making it easy to remember."},

    {type:"teach", trg:"相談(そうだん)する", src:"to consult / to discuss / to seek advice", pos:"verb", gender:null,
     note:"Kanji: 相談. 上司(じょうし)に相談(そうだん)する = to consult your boss.\nPart of ほうれんそう.",
     example:"A: ちょっと相談(そうだん)したいことがあります。\nB: はい、何(なん)でしょうか？\nA: どこがおすすめですか？\nB: 京都(きょうと)がおすすめです。",
     exampleSrc:"A: There is something I would like to consult about.\nB: Yes, what is it?\nA: Where do you recommend?\nB: I recommend Kyoto.",
     funFact:"相談(そうだん) is deeply valued in Japanese organizations. Making decisions without 相談(そうだん) (相談(そうだん)なし) is a serious workplace offense. The phrase ちょっと相談(そうだん)したいのですが (I would like to consult a bit) is the polite way to bring up problems. Good 相談(そうだん) builds trust."},

    {type:"teach", trg:"指示(しじ)する", src:"to direct / to instruct / to indicate", pos:"verb", gender:null,
     note:"Kanji: 指示. 指示(しじ)を出(だ)す = to give instructions.\n指示(しじ)に従(したが)う = to follow instructions.",
     example:"A: 部長(ぶちょう)の指示(しじ)に従(したが)ってください。\nB: はい、わかりました。\nA: 何(なに)が一番(いちばん)良(よ)かったですか？\nB: 食(た)べ物(もの)が一番(いちばん)おいしかったです。",
     exampleSrc:"A: Please follow the department head's instructions.\nB: Yes, understood.\nA: What was the best part?\nB: The food was the most delicious.",
     funFact:"指示(しじ) sits between 命令(めいれい) (command) and おねがい (request) in formality. It is the standard word for workplace instructions. 指示(しじ)待(ま)ち (waiting for instructions) describes passive employees who will not act without explicit 指示(しじ), which is sometimes criticized in modern Japanese business."},

    {type:"mc", q:"What is ほうれんそう in Japanese business?", opts:["Report, contact, consult (a communication rule)","A spinach recipe","A management title","A type of meeting"], ans:"Report, contact, consult (a communication rule)",
     hint:"This acronym sounds like the word for spinach and covers three essential workplace c... acts."},

    {type:"teach", trg:"任務(にんむ)", src:"duty / task / mission", pos:"noun", gender:null,
     note:"Kanji: 任務. 任務(にんむ)を果(は)たす = to fulfill a duty.\n任務完了(にんむかんりょう) = mission complete.",
     example:"A: 今日(きょう)の任務(にんむ)は何(なに)ですか？\nB: 資料(しりょう)の作成(さくせい)です。\nA: よく行(い)きますか？\nB: 月(つき)に一回(いっかい)ぐらい行(い)きます。",
     exampleSrc:"A: What is today's task?\nB: Creating documents.\nA: Do you go often?\nB: I go about once a month.",
     funFact:"任務(にんむ) has a serious, almost military tone. 任務完了(にんむかんりょう) (mission complete) is used both seriously and humorously. In everyday office life, 業務(ぎょうむ) (business tasks) or 仕事(しごと) (work) are more common. 任務(にんむ) implies a specific assigned responsibility with clear expectations."},

    {type:"teach", trg:"担当(たんとう)する", src:"to be in charge of / to handle", pos:"verb", gender:null,
     note:"Kanji: 担当. 担当者(たんとうしゃ) = person in charge.\n営業(えいぎょう)を担当(たんとう)する = to handle sales.",
     example:"A: この件(けん)は誰(だれ)が担当(たんとう)していますか？\nB: 山田(やまだ)さんが担当(たんとう)です。\nA: 誰(だれ)と行(い)きましたか？\nB: 友達(ともだち)と一緒(いっしょ)に行(い)きました。",
     exampleSrc:"A: Who is in charge of this matter?\nB: Yamada is in charge.\nA: Who did you go with?\nB: I went with a friend.",
     funFact:"担当(たんとう) is essential business vocabulary. Business cards often list 担当(たんとう) area. ご担当者(たんとうしゃ)さま (the person in charge) is how you address someone at a company you are calling. Having a clear 担当(たんとう) for each task prevents confusion in Japanese team-oriented workplaces."},

    {type:"teach", trg:"許可(きょか)する", src:"to permit / to authorize / to approve", pos:"verb", gender:null,
     note:"Kanji: 許可. 許可(きょか)をもらう = to get permission.\n許可(きょか)なく = without permission.",
     example:"A: 上司(じょうし)の許可(きょか)が必要(ひつよう)です。\nB: もう申請(しんせい)しましたか？\nA: それは大変(たいへん)でしたね。\nB: はい、でもいい勉強(べんきょう)になりました。",
     exampleSrc:"A: We need the boss's approval.\nB: Have you already applied?\nA: That must have been tough.\nB: Yes, but it was a good learning experience.",
     funFact:"許可(きょか) (permission) flows through Japanese organizational hierarchy. The 稟議(りんぎ) (approval process) requires multiple levels of 許可(きょか) before anything proceeds. The はんこ (seal) stamped on documents represents official 許可(きょか). Digital transformation is slowly replacing physical はんこ with electronic approval."},

    {type:"teach", trg:"指導(しどう)する", src:"to guide / to coach / to instruct", pos:"verb", gender:null,
     note:"Kanji: 指導. 指導教員(しどうきょういん) = supervising teacher.\n新人(しんじん)指導(しどう) = new employee training.",
     example:"A: 新(あたら)しいスタッフを指導(しどう)してください。\nB: はい、一週間(いっしゅうかん)かけて指導(しどう)します。\nA: 本当(ほんとう)ですか？すごいですね。\nB: ありがとうございます。頑張(がんば)りました。",
     exampleSrc:"A: Please train the new staff.\nB: Yes, I will train them over one week.\nA: Really? That is amazing.\nB: Thank you. I worked hard.",
     funFact:"指導(しどう) implies patient, structured teaching from a senior to a junior. It is different from 教(おし)える (to teach, general) in that it implies authority and responsibility. 指導員(しどういん) (instructor) carries weight. Excessive 指導(しどう) can become パワハラ (power harassment) if it crosses the line."},

    {type:"teach", trg:"期待(きたい)する", src:"to expect / to look forward to / to count on", pos:"verb", gender:null,
     note:"Kanji: 期待. 期待(きたい)に応(こた)える = to meet expectations.\n期待(きたい)されている = expected of (trusted).",
     example:"A: 期待(きたい)していますよ。頑張(がんば)ってください。\nB: 期待(きたい)に応(こた)えられるように頑張(がんば)ります。\nA: 私(わたし)も興味(きょうみ)があります。\nB: じゃあ、今度(こんど)一緒(いっしょ)にどうですか？",
     exampleSrc:"A: I am counting on you. Do your best.\nB: I will work hard to meet expectations.\nA: I am also interested.\nB: Then, how about doing it together next time?",
     funFact:"期待(きたい)する is a powerful motivator in Japanese culture. Being told 期待(きたい)している (I expect great things from you) by a boss is both encouragement and pressure. 期待(きたい)に応(こた)える (to live up to expectations) is a common goal. 期待(きたい)はずれ (disappointing expectations) is the negative outcome."},

    {type:"fb", s:"このプロジェクトを{1}てください。\n(Please leave this project to me.)", a:"任(まか)せ", opts:["任(まか)せ","命令(めいれい)し","指導(しどう)し","報告(ほうこく)し"], sSrc:"Please leave this project to me.",
     hint:"This verb means to entrust a task to someone."},

    {type:"teach", trg:"基準(きじゅん)を守(まも)る", src:"to follow standards / to observe rules", pos:"verb", gender:null,
     note:"基準(きじゅん) (standard) + 守(まも)る (to protect/observe).\n安全基準(あんぜんきじゅん) = safety standards.",
     example:"A: 会社(かいしゃ)の基準(きじゅん)を守(まも)ってください。\nB: はい、もちろんです。\nA: どんな感(かん)じでしたか？\nB: 想像(そうぞう)していたよりずっと良(よ)かったです。",
     exampleSrc:"A: Please follow the company standards.\nB: Yes, of course.\nA: What was it like?\nB: It was much better than I imagined.",
     funFact:"基準(きじゅん) are extremely important in Japanese business. ISO standards (国際(こくさい)基準(きじゅん)), industry standards (業界(ぎょうかい)基準(きじゅん)), and company rules (社内(しゃない)基準(きじゅん)) create the framework for quality. Japan's reputation for quality comes from strict 基準(きじゅん) adherence."},

    {type:"teach", trg:"評価(ひょうか)する", src:"to evaluate / to assess / to appraise", pos:"verb", gender:null,
     note:"Kanji: 評価. 人事(じんじ)評価(ひょうか) = personnel evaluation.\n高(たか)く評価(ひょうか)する = to rate highly.",
     example:"A: 今回(こんかい)のプレゼンは高(たか)く評価(ひょうか)されました。\nB: 努力(どりょく)したかいがありましたね。\nA: 何(なに)を食(た)べましたか？\nB: 地元(じもと)の名物(めいぶつ)を食(た)べました。",
     exampleSrc:"A: This presentation was highly evaluated.\nB: Your efforts paid off.\nA: What did you eat?\nB: I ate the local specialty.",
     funFact:"評価(ひょうか) drives Japanese corporate life. 人事(じんじ)評価(ひょうか) (personnel evaluation) happens semi-annually and determines bonuses and promotions. Self-evaluation (自己(じこ)評価(ひょうか)) forms are standard. The gap between 自己(じこ)評価(ひょうか) and 上司(じょうし)評価(ひょうか) (boss's evaluation) often reveals communication issues."},

    {type:"match", pairs:[{trg:"命令(めいれい)",src:"order/command"},{trg:"指示(しじ)",src:"instruction/direction"},{trg:"相談(そうだん)",src:"consultation"},{trg:"報告(ほうこく)",src:"report"},{trg:"許可(きょか)",src:"permission/approval"}],
     hint:"Match each workplace communication type with its English meaning."},

    {type:"mc", q:"What does 任(まか)せてください mean?", opts:["Leave it to me","I will command you","Please report","I need permission"], ans:"Leave it to me",
     hint:"This phrase expresses confidence in handling an entrusted task."},

    {type:"fb", s:"上司(じょうし)に{1}したいことがあります。\n(There is something I want to consult my boss about.)", a:"相談(そうだん)", opts:["相談(そうだん)","命令(めいれい)","報告(ほうこく)","指示(しじ)"], sSrc:"There is something I want to consult my boss about.",
     hint:"This word is the third part of the ほうれんそう principle."},

    {type:"mc", q:"What is the difference between 命令(めいれい) and 指示(しじ)?", opts:["命令(めいれい) is a strong command, 指示(しじ) is a standard instruction","They mean exactly the same thing","指示(しじ) is stronger than 命令(めいれい)","命令(めいれい) is polite, 指示(しじ) is rude"], ans:"命令(めいれい) is a strong command, 指示(しじ) is a standard instruction",
     hint:"One carries the weight of a military-style order, the other is everyday workplace guidance."}
  ,{type:"fb", s:"チームの結果(けっか)を上司(じょうし)に{1}する時間(じかん)です。",
     a:["報告(ほうこく)する"],
     opts:["報告(ほうこく)する","命令(めいれい)する","評価(ひょうか)する","指示(しじ)する"],
     hint:"It is time to tell your manager about the team's results. This する-verb means 'to report' or 'to inform a superior.'",
     sSrc:"It is time to {1} the team's results to the supervisor."}
  ,{type:"fb", s:"この仕事(しごと)を田中(たなか)さんに{1}てもよいですか？",
     a:["任(まか)せる"],
     opts:["任(まか)せる","命令(めいれい)する","評価(ひょうか)する","指導(しどう)する"],
     hint:"You are asking whether it is okay to give this work to Tanaka-san and let them handle it. This verb means 'to entrust' or 'to leave it to someone.'",
     sSrc:"May I {1} this work to Tanaka-san?"}
  ,{type:"match",pairs:[{trg:"任務(にんむ)",src:"duty / task / mission"},{trg:"担当(たんとう)する",src:"to be in charge of / to handle"},{trg:"指導(しどう)する",src:"to guide / to coach / to instruct"},{trg:"期待(きたい)する",src:"to expect / to look forward to / to count on"},{trg:"基準(きじゅん)を守(まも)る",src:"to follow standards / to observe rules"},{trg:"評価(ひょうか)する",src:"to evaluate / to assess / to appraise"}]}]
};
export default BATCH8_L1;
