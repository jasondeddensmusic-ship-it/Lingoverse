// Batch 8 – Unit 18 (B1.1 Causative): Workplace Hierarchy Verbs
const BATCH8_L1 = {
  id:"jav2_u18l_b8_1", title:"しょくばのじょうげかんけい", icon:"🏢", xp:15, board:true,
  steps:[
    {type:"intro", title:"しょくばのじょうげかんけい",
     desc:"Learn verbs and expressions for workplace hierarchy and delegation. These words naturally combine with causative forms to express who makes whom do what in Japanese organizations.",
     goals:["Use workplace hierarchy vocabulary","Express delegation and instruction","Understand superior-subordinate communication patterns"]},

    {type:"teach", trg:"めいれいする", src:"to order / to command", pos:"verb", gender:null,
     note:"Kanji: 命令. じょうしのめいれい = boss's order.\nStrong, top-down directive.",
     example:"A: ぶちょうからめいれいがでました。\nB: なんとめいれいされましたか？\nA: 難(むずか)しかったですか？\nB: 最初(さいしょ)は難(むずか)しかったですが、慣(な)れました。",
     exampleSrc:"A: An order came from the department head.\nB: What were you ordered?\nA: Was it difficult?\nB: It was difficult at first, but I got used to it.",
     funFact:"めいれい (命令) is the strongest form of workplace directive. The kanji combine 命 (life) and 令 (command). In modern Japanese business, direct めいれい is softened with phrases like おねがいします or していただけますか. Pure めいれい tone is reserved for emergencies or military contexts."},

    {type:"teach", trg:"まかせる", src:"to entrust / to leave it to (someone)", pos:"verb", gender:null,
     note:"Kanji: 任せる. まかせてください = leave it to me.\nにんむをまかせる = to entrust a task.",
     example:"A: このプロジェクトをまかせてもいいですか？\nB: はい、まかせてください。\nA: おすすめですか？\nB: はい、ぜひ試(ため)してみてください。",
     exampleSrc:"A: Can I leave this project to you?\nB: Yes, leave it to me.\nA: Do you recommend it?\nB: Yes, please try it.",
     funFact:"まかせる shows trust in Japanese business culture. Being まかされる (entrusted with something) is an honor. The phrase おまかせ (I leave it to you) at restaurants means the chef chooses your meal. おまかせコース (chef's choice course) is a premium dining experience."},

    {type:"teach", trg:"ほうこくする", src:"to report / to inform", pos:"verb", gender:null,
     note:"Kanji: 報告. ほうれんそう = report, contact, consult.\nけっかをほうこくする = to report results.",
     example:"A: しんちょくをほうこくしてください。\nB: はい、まいしゅうきんようびにほうこくします。\nA: 一緒(いっしょ)に行(い)きませんか？\nB: いいですね。行(い)きましょう。",
     exampleSrc:"A: Please report the progress.\nB: Yes, I will report every Friday.\nA: Shall we go together?\nB: That sounds good. Let's go.",
     funFact:"ほうれんそう (報連相) is a famous Japanese business acronym: ほうこく (report), れんらく (contact), そうだん (consult). It is the golden rule of Japanese workplace communication. Every new employee learns ほうれんそう during training. The word sounds like ほうれんそう (spinach), making it easy to remember."},

    {type:"teach", trg:"そうだんする", src:"to consult / to discuss / to seek advice", pos:"verb", gender:null,
     note:"Kanji: 相談. じょうしにそうだんする = to consult your boss.\nPart of ほうれんそう.",
     example:"A: ちょっとそうだんしたいことがあります。\nB: はい、なんでしょうか？\nA: どこがおすすめですか？\nB: 京都(きょうと)がおすすめです。",
     exampleSrc:"A: There is something I would like to consult about.\nB: Yes, what is it?\nA: Where do you recommend?\nB: I recommend Kyoto.",
     funFact:"そうだん is deeply valued in Japanese organizations. Making decisions without そうだん (相談なし) is a serious workplace offense. The phrase ちょっとそうだんしたいのですが (I would like to consult a bit) is the polite way to bring up problems. Good そうだん builds trust."},

    {type:"teach", trg:"しじする", src:"to direct / to instruct / to indicate", pos:"verb", gender:null,
     note:"Kanji: 指示. しじをだす = to give instructions.\nしじにしたがう = to follow instructions.",
     example:"A: ぶちょうのしじにしたがってください。\nB: はい、わかりました。\nA: 何(なに)が一番(いちばん)良(よ)かったですか？\nB: 食(た)べ物(もの)が一番(いちばん)おいしかったです。",
     exampleSrc:"A: Please follow the department head's instructions.\nB: Yes, understood.\nA: What was the best part?\nB: The food was the most delicious.",
     funFact:"しじ sits between めいれい (command) and おねがい (request) in formality. It is the standard word for workplace instructions. しじまち (waiting for instructions) describes passive employees who will not act without explicit しじ, which is sometimes criticized in modern Japanese business."},

    {type:"mc", q:"What is ほうれんそう in Japanese business?", opts:["Report, contact, consult (a communication rule)","A spinach recipe","A management title","A type of meeting"], ans:"Report, contact, consult (a communication rule)",
     hint:"This acronym sounds like the word for spinach and covers three essential workplace c... acts."},

    {type:"teach", trg:"にんむ", src:"duty / task / mission", pos:"noun", gender:null,
     note:"Kanji: 任務. にんむをはたす = to fulfill a duty.\nにんむかんりょう = mission complete.",
     example:"A: きょうのにんむはなんですか？\nB: しりょうのさくせいです。\nA: よく行(い)きますか？\nB: 月(つき)に一回(いっかい)ぐらい行(い)きます。",
     exampleSrc:"A: What is today's task?\nB: Creating documents.\nA: Do you go often?\nB: I go about once a month.",
     funFact:"にんむ has a serious, almost military tone. にんむかんりょう (mission complete) is used both seriously and humorously. In everyday office life, ぎょうむ (business tasks) or しごと (work) are more common. にんむ implies a specific assigned responsibility with clear expectations."},

    {type:"teach", trg:"たんとうする", src:"to be in charge of / to handle", pos:"verb", gender:null,
     note:"Kanji: 担当. たんとうしゃ = person in charge.\nえいぎょうをたんとうする = to handle sales.",
     example:"A: このけんはだれがたんとうしていますか？\nB: やまださんがたんとうです。\nA: 誰(だれ)と行(い)きましたか？\nB: 友達(ともだち)と一緒(いっしょ)に行(い)きました。",
     exampleSrc:"A: Who is in charge of this matter?\nB: Yamada is in charge.\nA: Who did you go with?\nB: I went with a friend.",
     funFact:"たんとう is essential business vocabulary. Business cards often list たんとう area. ごたんとうしゃさま (the person in charge) is how you address someone at a company you are calling. Having a clear たんとう for each task prevents confusion in Japanese team-oriented workplaces."},

    {type:"teach", trg:"きょかする", src:"to permit / to authorize / to approve", pos:"verb", gender:null,
     note:"Kanji: 許可. きょかをもらう = to get permission.\nきょかなく = without permission.",
     example:"A: じょうしのきょかがひつようです。\nB: もうしんせいしましたか？\nA: それは大変(たいへん)でしたね。\nB: はい、でもいい勉強(べんきょう)になりました。",
     exampleSrc:"A: We need the boss's approval.\nB: Have you already applied?\nA: That must have been tough.\nB: Yes, but it was a good learning experience.",
     funFact:"きょか (permission) flows through Japanese organizational hierarchy. The りんぎ (approval process) requires multiple levels of きょか before anything proceeds. The はんこ (seal) stamped on documents represents official きょか. Digital transformation is slowly replacing physical はんこ with electronic approval."},

    {type:"teach", trg:"しどうする", src:"to guide / to coach / to instruct", pos:"verb", gender:null,
     note:"Kanji: 指導. しどうきょういん = supervising teacher.\nしんじんしどう = new employee training.",
     example:"A: あたらしいスタッフをしどうしてください。\nB: はい、いっしゅうかんかけてしどうします。\nA: 本当(ほんとう)ですか？すごいですね。\nB: ありがとうございます。頑張(がんば)りました。",
     exampleSrc:"A: Please train the new staff.\nB: Yes, I will train them over one week.\nA: Really? That is amazing.\nB: Thank you. I worked hard.",
     funFact:"しどう implies patient, structured teaching from a senior to a junior. It is different from おしえる (to teach, general) in that it implies authority and responsibility. しどういん (instructor) carries weight. Excessive しどう can become パワハラ (power harassment) if it crosses the line."},

    {type:"teach", trg:"きたいする", src:"to expect / to look forward to / to count on", pos:"verb", gender:null,
     note:"Kanji: 期待. きたいにこたえる = to meet expectations.\nきたいされている = expected of (trusted).",
     example:"A: きたいしていますよ。がんばってください。\nB: きたいにこたえられるようにがんばります。\nA: 私(わたし)も興味(きょうみ)があります。\nB: じゃあ、今度(こんど)一緒(いっしょ)にどうですか？",
     exampleSrc:"A: I am counting on you. Do your best.\nB: I will work hard to meet expectations.\nA: I am also interested.\nB: Then, how about doing it together next time?",
     funFact:"きたいする is a powerful motivator in Japanese culture. Being told きたいしている (I expect great things from you) by a boss is both encouragement and pressure. きたいにこたえる (to live up to expectations) is a common goal. きたいはずれ (disappointing expectations) is the negative outcome."},

    {type:"fb", s:"このプロジェクトを{1}てください。\n(Please leave this project to me.)", a:"まかせ", opts:["まかせ","めいれいし","しどうし","ほうこくし"], sSrc:"Please leave this project to me.",
     hint:"This verb means to entrust a task to someone."},

    {type:"teach", trg:"きじゅんをまもる", src:"to follow standards / to observe rules", pos:"verb", gender:null,
     note:"きじゅん (standard) + まもる (to protect/observe).\nあんぜんきじゅん = safety standards.",
     example:"A: かいしゃのきじゅんをまもってください。\nB: はい、もちろんです。\nA: どんな感(かん)じでしたか？\nB: 想像(そうぞう)していたよりずっと良(よ)かったです。",
     exampleSrc:"A: Please follow the company standards.\nB: Yes, of course.\nA: What was it like?\nB: It was much better than I imagined.",
     funFact:"きじゅん (基準) are extremely important in Japanese business. ISO standards (こくさいきじゅん), industry standards (ぎょうかいきじゅん), and company rules (しゃないきじゅん) create the framework for quality. Japan's reputation for quality comes from strict きじゅん adherence."},

    {type:"teach", trg:"ひょうかする", src:"to evaluate / to assess / to appraise", pos:"verb", gender:null,
     note:"Kanji: 評価. じんじひょうか = personnel evaluation.\nたかくひょうかする = to rate highly.",
     example:"A: こんかいのプレゼンはたかくひょうかされました。\nB: どりょくしたかいがありましたね。\nA: 何(なに)を食(た)べましたか？\nB: 地元(じもと)の名物(めいぶつ)を食(た)べました。",
     exampleSrc:"A: This presentation was highly evaluated.\nB: Your efforts paid off.\nA: What did you eat?\nB: I ate the local specialty.",
     funFact:"ひょうか (evaluation) drives Japanese corporate life. じんじひょうか (personnel evaluation) happens semi-annually and determines bonuses and promotions. Self-evaluation (じこひょうか) forms are standard. The gap between じこひょうか and じょうしひょうか (boss's evaluation) often reveals communication issues."},

    {type:"match", pairs:[{trg:"めいれい",src:"order/command"},{trg:"しじ",src:"instruction/direction"},{trg:"そうだん",src:"consultation"},{trg:"ほうこく",src:"report"},{trg:"きょか",src:"permission/approval"}],
     hint:"Match each workplace communication type with its English meaning."},

    {type:"mc", q:"What does まかせてください mean?", opts:["Leave it to me","I will command you","Please report","I need permission"], ans:"Leave it to me",
     hint:"This phrase expresses confidence in handling an entrusted task."},

    {type:"fb", s:"じょうしに{1}したいことがあります。\n(There is something I want to consult my boss about.)", a:"そうだん", opts:["そうだん","めいれい","ほうこく","しじ"], sSrc:"There is something I want to consult my boss about.",
     hint:"This word is the third part of the ほうれんそう principle."},

    {type:"mc", q:"What is the difference between めいれい and しじ?", opts:["めいれい is a strong command, しじ is a standard instruction","They mean exactly the same thing","しじ is stronger than めいれい","めいれい is polite, しじ is rude"], ans:"めいれい is a strong command, しじ is a standard instruction",
     hint:"One carries the weight of a military-style order, the other is everyday workplace guidance."}
  ]
};
export default BATCH8_L1;
