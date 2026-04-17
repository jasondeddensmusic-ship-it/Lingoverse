// Unit 18 Expansion. Lesson 4: しょくばのしえき (Workplace Causative)
const LESSON_4 = {
  id:"jav2_u18l4", title:"しょくばのしえき", icon:"💼", xp:15, board:true,
  steps:[
    {type:"intro", title:"しょくばのしえき",
     desc:"Causative is the grammar of workplace authority. Bosses make employees do tasks. Seniors let juniors take breaks. Understanding causative in business Japanese is essential for navigating the senpai-kouhai hierarchy.",
     goals:["Use causative for workplace instructions and delegating","Express being allowed or ordered in a work context","Combine causative with polite/formal endings"]},

    {type:"teach", trg:"かかせる", src:"to make someone write", pos:"verb", gender:null,
     note:"Causative of かく (to write). Group 1: かく to かか + せる.\nKanji: 書かせる.",
     example:"A: じょうしにほうこくしょをかかせられました。\nB: いそがしいのにたいへんですね。\nA: 本当(ほんとう)ですか？すごいですね。\nB: ありがとうございます。頑張(がんば)りました。",
     exampleSrc:"A: I was made to write a report by my boss.\nB: That is tough when you are already busy.\nA: Really? That is amazing.\nB: Thank you. I worked hard.",
     funFact:"書かせる appears constantly in workplace contexts. Writing reports (報告書, houkokusho) is a core part of Japanese office work. Superiors making subordinates write reports (houkokusho wo kakaseru) is standard delegation. Combined with the causative-passive (kakaserareru), it expresses being forced to write."},

    {type:"teach", trg:"しらべさせる", src:"to make someone investigate/research", pos:"verb", gender:null,
     note:"Causative of しらべる (to investigate). Group 2: しらべ + させる.\nKanji: 調べさせる.",
     example:"A: ぶちょうにしりょうをしらべさせられました。\nB: いつまでですか？\nA: 私(わたし)も興味(きょうみ)があります。\nB: じゃあ、今度(こんど)一緒(いっしょ)にどうですか？",
     exampleSrc:"A: The department head made me research the materials.\nB: By when?\nA: I am also interested.\nB: Then, how about doing it together next time?",
     funFact:"調べさせる is a common delegation verb. The kanji 調 means 'tune/investigate,' appearing in 調査 (chousa, investigation) and 調理 (chouri, cooking). In Japanese offices, research tasks flow downward through hierarchy. Being told to しらべて (investigate this) is how junior employees spend much of their time."},

    {type:"teach", trg:"こさせる", src:"to make someone come", pos:"verb", gender:null,
     note:"Causative of くる (to come). Irregular: くる to こさせる.\nOften used for summoning or requiring attendance.",
     example:"A: きゅうにかいしゃにこさせられました。\nB: きゅうじつなのにですか？\nA: どんな感(かん)じでしたか？\nB: 想像(そうぞう)していたよりずっと良(よ)かったです。",
     exampleSrc:"A: I was suddenly made to come to the office.\nB: Even though it is a holiday?\nA: What was it like?\nB: It was much better than I imagined.",
     funFact:"こさせる (make someone come) is the irregular causative of くる. Being called into the office suddenly (kyuu ni kosaserareru) is a dreaded experience. Japanese workers may be called in on weekends or holidays. The causative-passive こさせられる perfectly expresses the feeling of having no choice."},

    {type:"teach", trg:"ほうこくしょ", src:"report (document)", pos:"noun", gender:null,
     note:"ほうこく (report) + しょ (document/writing).\nKanji: 報告書. Essential business vocabulary.",
     example:"A: ほうこくしょのていしゅつはいつですか？\nB: らいしゅうのげつようびです。\nA: 何(なに)を食(た)べましたか？\nB: 地元(じもと)の名物(めいぶつ)を食(た)べました。",
     exampleSrc:"A: When is the report due?\nB: Next Monday.\nA: What did you eat?\nB: I ate the local specialty.",
     funFact:"報告書 is one of the most common business documents. Japanese office culture values written reports for everything: meeting summaries, project progress, trip reports. The word combines 報 (report), 告 (inform), and 書 (write/document). Learning to write houkokusho is a key skill for new employees."},

    {type:"mc", q:"ぶちょうにしりょうをしらべさせられた means:", opts:["I researched for the director","The director researched the materials","I was made to research materials by the director","I asked the director to research"], ans:"I was made to research materials by the director",
     hint:"Causative-passive: the speaker was forced by the d... (に marks the authority figure)."},

    {type:"teach", trg:"ていしゅつさせる", src:"to make someone submit (a document)", pos:"verb", gender:null,
     note:"Causative of ていしゅつする (to submit). する-verb to させる.\nKanji: 提出させる.",
     example:"A: せんせいにレポートをていしゅつさせられました。\nB: もうかきましたか？\nA: 楽(たの)しみですね。\nB: はい、今(いま)からわくわくしています。",
     exampleSrc:"A: The teacher made us submit a report.\nB: Have you written it already?\nA: That is exciting.\nB: Yes, I am already excited.",
     funFact:"提出させる bridges school and work. Teachers make students submit homework (shukudai wo teishutsu saseru), and bosses make employees submit reports. 提出 combines 提 (present/propose) and 出 (put out). The deadline (shimekiri) for submission is always taken seriously in Japan."},

    {type:"teach", trg:"そうだんさせる", src:"to let someone consult / to make someone consult", pos:"verb", gender:null,
     note:"Causative of そうだんする (to consult). する-verb to させる.\nKanji: 相談させる.",
     example:"A: まずじょうしにそうだんさせてください。\nB: わかりました。おまちしています。\nA: いい思(おも)い出(で)ですね。\nB: はい、一生(いっしょう)忘(わす)れません。",
     exampleSrc:"A: First, please let me consult my supervisor.\nB: Understood. I will wait.\nA: That is a nice memory.\nB: Yes, I will never forget it.",
     funFact:"相談させてください (please let me consult) is a standard business phrase. Japanese decision-making often involves consulting superiors before committing. This reflects the ringi system (稟議, consensus-building). Asking to そうだんさせてもらう shows professionalism and respect for hierarchy."},

    {type:"teach", trg:"ぶちょう", src:"department head / division chief", pos:"noun", gender:null,
     note:"ぶ (department) + ちょう (chief/head).\nKanji: 部長. A mid-to-senior management title.",
     example:"A: ぶちょうはいまかいぎちゅうです。\nB: では、あとでまたきます。\nA: どうでしたか？\nB: とても良(よ)かったです。",
     exampleSrc:"A: The department head is in a meeting now.\nB: Then I will come back later.\nA: How was it?\nB: It was very good.",
     funFact:"部長 is a significant title in Japanese corporate hierarchy. The typical ladder: 社員 (employee) to 主任 (chief) to 係長 (section chief) to 課長 (manager) to 部長 (department head) to 取締役 (director). Buchou holds real power and is often the highest rank that interacts directly with regular staff."},

    {type:"fb", s:"まずじょうしに{1}てください。\n(First, please let me consult my supervisor.)", a:"そうだんさせ", opts:["そうだんさせ","そうだんして","そうだんし","そうだんされ"], sSrc:"First, please let me consult my supervisor.",
     hint:"The causative て-form of そうだんする (to consult). させる + て = permission request."},

    {type:"teach", trg:"きゅうじつ", src:"holiday / day off", pos:"noun", gender:null,
     note:"きゅう (rest) + じつ (day). Kanji: 休日.\nにほんのきゅうじつ = Japanese holidays.",
     example:"A: きゅうじつにはたらきたくないです。\nB: だれでもそうですよ。\nA: いつですか？\nB: 去年(きょねん)の夏(なつ)でした。",
     exampleSrc:"A: I do not want to work on holidays.\nB: Everyone feels that way.\nA: When was it?\nB: It was last summer.",
     funFact:"休日 is the formal word for holidays and days off. Japan has 16 national holidays (祝日, shukujitsu), more than most countries. When a holiday falls on Sunday, Monday becomes a substitute holiday (振替休日, furikae kyuujitsu). Golden Week in late April to early May chains several holidays together."},

    {type:"teach", trg:"させていただく", src:"I humbly do (humble causative)", pos:"verb", gender:null,
     note:"させる + いただく = receive permission to do (very humble).\nBusiness standard for announcing your own actions.",
     example:"A: わたしがせつめいさせていただきます。\nB: おねがいします。\nA: それはいいですね。\nB: はい、とても楽(たの)しかったです。",
     exampleSrc:"A: I will explain. (lit: I humbly receive permission to explain)\nB: Please go ahead.\nA: That is nice.\nB: Yes, it was very fun.",
     funFact:"させていただく is the single most important business Japanese phrase. It means 'I receive permission to cause myself to do' but functions simply as a very humble way to state your intention. It appears in every business presentation, email, and meeting. Some linguists note overuse, but it remains the gold standard of polite business speech."},

    {type:"mc", q:"させていただきます is used:", opts:["To make others do something","To humbly state your own action in business","To refuse a request","To give orders to juniors"], ans:"To humbly state your own action in business",
     hint:"This humble causative pattern announces what YOU will do, framed as receiving permission."},

    {type:"tip", title:"Causative in the Workplace",
     text:"Delegation (boss to employee):\nかかせる = make write (a report)\nしらべさせる = make research\nこさせる = make come (to the office)\nていしゅつさせる = make submit\n\nPermission (employee requesting):\nそうだんさせてください = please let me consult\nやすませてください = please let me take the day off\nかえらせてください = please let me go home\n\nHumble business formula:\nさせていただきます = I will humbly do\nせつめいさせていただきます = I will explain (humble)",
     deepDive:{title:"The させていただく Phenomenon",
      text:"させていただく has become so widespread that linguists call it the 'sasete-itadaku phenomenon.' Originally used only when genuine permission was needed, it now appears everywhere:\n\nきょうはおやすみさせていただきます (I will take the day off)\nおくらせていただきます (I will send it)\nかいとうさせていただきます (I will respond)\n\nSome consider this overuse a sign of hyper-politeness in modern Japanese business culture. Others argue it shows appropriate humility. Either way, if you master this one pattern, you can navigate almost any business situation in Japanese."}},

    {type:"match", pairs:[{trg:"かかせる",src:"make write"},{trg:"しらべさせる",src:"make research"},{trg:"こさせる",src:"make come"},{trg:"ていしゅつさせる",src:"make submit"}]},

    {type:"fb", s:"わたしがせつめい{1}いただきます。\n(I will explain. - humble)", a:"させて", opts:["させて","して","されて","しまして"], sSrc:"I will explain.",
     hint:"The humble business formula: causative て-form + いただく. Very polite self-announcement."},

    {type:"match", pairs:[{trg:"そうだんさせる",src:"let consult"},{trg:"ほうこくしょ",src:"report"},{trg:"ぶちょう",src:"department head"},{trg:"きゅうじつ",src:"holiday"}]},

    {type:"mc", q:"きゅうにかいしゃにこさせられた means:", opts:["I suddenly went to the office","I was suddenly made to come to the office","I made someone come to my company","I decided to visit the office"], ans:"I was suddenly made to come to the office",
     hint:"Causative-passive of くる (irregular: こさせられる). The speaker had no choice but to c...."},
  ]
};
export default LESSON_4;
