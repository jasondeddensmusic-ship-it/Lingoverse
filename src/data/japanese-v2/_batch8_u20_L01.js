// Batch 8 – Unit 20 (B1.2 Keigo): Humble & Honorific Vocabulary
const BATCH8_L1 = {
  id:"jav2_u20l_b8_1", title:"尊敬語(そんけいご)と謙譲語(けんじょうご)", icon:"🎩", xp:15, board:true,
  steps:[
    {type:"intro", title:"尊敬語(そんけいご)と謙譲語(けんじょうご)",
     desc:"Expand your keigo toolkit with essential humble and honorific verb pairs and formal set phrases used in business and service contexts.",
     goals:["Use honorific verbs for others' actions","Use humble verbs for your own actions","Handle formal greetings and closings"]},

    {type:"teach", trg:"おっしゃる", src:"to say (honorific)", pos:"verb", gender:null,
     note:"Honorific for いう (to say). Used for superiors/customers.\nおっしゃるとおりです = as you say.",
     example:"A: 先生(せんせい)がおっしゃったことをメモしました。\nB: よくできましたね。\nA: 何(なに)が一番(いちばん)良(よ)かったですか？\nB: 食(た)べ物(もの)が一番(いちばん)おいしかったです。",
     exampleSrc:"A: I took notes of what the teacher said.\nB: Well done.\nA: What was the best part?\nB: The food was the most delicious.",
     funFact:"おっしゃる is one of the special honorific verbs with irregular forms. It replaces いう when talking about someone respected. おっしゃるとおり (as you say) is a polite way to agree with a superior. In keigo hierarchy: いう (plain) < おっしゃる (honorific) < もうす (humble, for yourself)."},

    {type:"teach", trg:"めしあがる", src:"to eat / to drink (honorific)", pos:"verb", gender:null,
     note:"Honorific for たべる/のむ. For superiors/customers.\nどうぞめしあがってください = please eat/drink.",
     example:"A: どうぞめしあがってください。\nB: いただきます。\nA: よく行(い)きますか？\nB: 月(つき)に一回(いっかい)ぐらい行(い)きます。",
     exampleSrc:"A: Please eat.\nB: Thank you for the food.\nA: Do you go often?\nB: I go about once a month.",
     funFact:"めしあがる replaces both たべる and のむ when speaking about someone respected. It is the standard phrase in restaurants: ごゆっくりおめしあがりください (please take your time eating). The humble counterpart is いただく. This eat/drink pair is one of the first keigo sets taught."},

    {type:"teach", trg:"ごらんになる", src:"to see / to look (honorific)", pos:"verb", gender:null,
     note:"Honorific for みる. ごらんください = please look.\nUsed for superiors.",
     example:"A: こちらの資料(しりょう)をごらんください。\nB: はい、見(み)せてください。\nA: 誰(だれ)と行(い)きましたか？\nB: 友達(ともだち)と一緒(いっしょ)に行(い)きました。",
     exampleSrc:"A: Please look at these documents.\nB: Yes, please show me.\nA: Who did you go with?\nB: I went with a friend.",
     funFact:"ごらんになる replaces みる in honorific speech. ごらんください (please look) is extremely common in presentations, museums, and shops. テレビをごらんになりましたか (did you watch TV?) is polite conversation. The humble counterpart is はいけんする (to humbly look)."},

    {type:"teach", trg:"はいけんする", src:"to see / to look (humble)", pos:"verb", gender:null,
     note:"Humble for みる. はいけんします = I will (humbly) look.\nUsed for your own seeing.",
     example:"A: お手紙(てがみ)をはいけんしました。\nB: ご感想(かんそう)をお聞(き)かせください。\nA: それは大変(たいへん)でしたね。\nB: はい、でもいい勉強(べんきょう)になりました。",
     exampleSrc:"A: I have (humbly) read your letter.\nB: Please share your impressions.\nA: That must have been tough.\nB: Yes, but it was a good learning experience.",
     funFact:"はいけん (拝見) uses the kanji 拝 (worship/bow) showing deep humility. はいけんする means 'I humbly look at your (precious) thing.' Japanese business emails often start with メールをはいけんしました (I have read your email). It elevates what you are looking at."},

    {type:"teach", trg:"もうしあげる", src:"to say / to tell (humble)", pos:"verb", gender:null,
     note:"Humble for いう. もうしあげます = I (humbly) say.\nMore formal than もうす.",
     example:"A: 一言(ひとこと)だけもうしあげます。\nB: はい、どうぞ。\nA: 本当(ほんとう)ですか？すごいですね。\nB: ありがとうございます。頑張(がんば)りました。",
     exampleSrc:"A: I would like to say just one thing.\nB: Yes, please go ahead.\nA: Really? That is amazing.\nB: Thank you. I worked hard.",
     funFact:"もうしあげる is the most formal humble speaking verb. The hierarchy: いう (plain) > もうす (humble) > もうしあげる (very humble). もうしわけございません (I am deeply sorry, literally 'I have no excuse to offer') uses the same もうし root. This phrase is the gold standard apology."},

    {type:"mc", q:"What is the honorific form of たべる (to eat)?", opts:["めしあがる","いただく","たべられる","おたべになる"], ans:"めしあがる",
     hint:"This special honorific verb replaces both eating and drinking when referring to superiors."},

    {type:"teach", trg:"さしあげる", src:"to give (humble, to a superior)", pos:"verb", gender:null,
     note:"Humble for あげる. お土産(みやげ)をさしあげる = to humbly give a souvenir.\nElevates the receiver.",
     example:"A: 社長(しゃちょう)に本(ほん)をさしあげました。\nB: よろこばれましたか？\nA: 私(わたし)も興味(きょうみ)があります。\nB: じゃあ、今度(こんど)一緒(いっしょ)にどうですか？",
     exampleSrc:"A: I gave a book to the president.\nB: Was he pleased?\nA: I am also interested.\nB: Then, how about doing it together next time?",
     funFact:"The give/receive keigo system is complex: あげる (plain give) > さしあげる (humble give, to superior). くれる (give to me, plain) > くださる (give to me, honorific). もらう (receive, plain) > いただく (receive, humble). This three-way distinction is uniquely Japanese."},

    {type:"teach", trg:"おめにかかる", src:"to meet (humble)", pos:"verb", gender:null,
     note:"Humble for あう. おめにかかれて光栄(こうえい)です = it is an honor to meet you.\nVery formal.",
     example:"A: はじめておめにかかります。田中(たなか)ともうします。\nB: こちらこそ。\nA: どんな感(かん)じでしたか？\nB: 想像(そうぞう)していたよりずっと良(よ)かったです。",
     exampleSrc:"A: It is my first time meeting you. My name is Tanaka.\nB: Likewise.\nA: What was it like?\nB: It was much better than I imagined.",
     funFact:"おめにかかる literally means 'to hang on your eye' (to enter your sight humbly). It is the most formal way to say 'to meet.' おめにかかれて光栄(こうえい)です (it is an honor to meet you) is used when meeting VIPs, executives, or dignitaries. In everyday polite speech, おあいする suffices."},

    {type:"teach", trg:"ぞんじあげる", src:"to know (humble)", pos:"verb", gender:null,
     note:"Humble for しっている. ぞんじあげております = I (humbly) know.\nぞんじません = I do not know (humble).",
     example:"A: 社長(しゃちょう)をごぞんじですか？\nB: はい、ぞんじあげております。\nA: 何(なに)を食(た)べましたか？\nB: 地元(じもと)の名物(めいぶつ)を食(た)べました。",
     exampleSrc:"A: Do you know the president?\nB: Yes, I do (humbly).\nA: What did you eat?\nB: I ate the local specialty.",
     funFact:"ぞんじる is the base humble form of しる (to know). Adding あげる makes it even more humble: ぞんじあげる. The honorific counterpart is ごぞんじ: ごぞんじですか (do you know?, polite). ぞんじません (I do not know, humble) is the safe business answer when you are unsure."},

    {type:"teach", trg:"うかがう", src:"to ask / to visit / to listen (humble)", pos:"verb", gender:null,
     note:"Humble for きく, たずねる, おとずれる.\nおうかがいしてもよろしいですか = may I ask?",
     example:"A: 一度(いちど)おうかがいしたいのですが。\nB: いつでもどうぞ。\nA: 楽(たの)しみですね。\nB: はい、今(いま)からわくわくしています。",
     exampleSrc:"A: I would like to visit once.\nB: Anytime, please.\nA: That is exciting.\nB: Yes, I am already excited.",
     funFact:"うかがう is remarkably versatile in keigo. It humbly replaces three different verbs: きく (to ask/listen), たずねる (to visit), and もんう (to inquire). The multi-meaning nature makes it efficient. おうかがいしてもよろしいでしょうか is the most polite way to ask a question in business."},

    {type:"teach", trg:"くださる", src:"to give (honorific, superior gives to me)", pos:"verb", gender:null,
     note:"Honorific for くれる. 先生(せんせい)が教(おし)えてくださった = the teacher kindly taught me.\nShows gratitude.",
     example:"A: 部長(ぶちょう)が資料(しりょう)をくださいました。\nB: ありがたいですね。\nA: いい思(おも)い出(で)ですね。\nB: はい、一生(いっしょう)忘(わす)れません。",
     exampleSrc:"A: The department head gave us the documents.\nB: That is appreciated.\nA: That is a nice memory.\nB: Yes, I will never forget it.",
     funFact:"くださる elevates the giver. The imperative ください (please give/do) comes from this verb. てくださる (doing something for me, honorific) shows deep gratitude: 教(おし)えてくださってありがとうございます (thank you for teaching me). It is the honorific counterpart to てくれる."},

    {type:"fb", s:"こちらの資料(しりょう)を{1}ください。\n(Please look at these documents.)", a:"ごらん", opts:["ごらん","はいけん","見(み)て","ごらんに"], sSrc:"Please look at these documents.",
     hint:"This is the honorific way to ask someone to look at something."},

    {type:"teach", trg:"おいでになる", src:"to come / to go / to be (honorific)", pos:"verb", gender:null,
     note:"Honorific for いく, くる, いる. Very polite.\nおいでくださいませ = please come (very formal).",
     example:"A: 明日(あした)おいでになりますか？\nB: はい、十時(じゅうじ)にまいります。\nA: どうでしたか？\nB: とても良(よ)かったです。",
     exampleSrc:"A: Will you come tomorrow?\nB: Yes, I will come at 10.\nA: How was it?\nB: It was very good.",
     funFact:"おいでになる is a super-polite honorific that replaces three common verbs at once: いく (to go), くる (to come), and いる (to be). Department stores use おいでくださいませ (please come in). The humble counterpart for coming is まいる: まいります (I will humbly come/go)."},

    {type:"teach", trg:"もうしわけございません", src:"I am terribly sorry (very formal apology)", pos:"intj", gender:null,
     note:"The most formal apology. もうしわけない = casual version.\nLiterally: there is no excuse to offer.",
     example:"A: おまたせしてもうしわけございません。\nB: いいえ、大丈夫(だいじょうぶ)ですよ。\nA: いつですか？\nB: 去年(きょねん)の夏(なつ)でした。",
     exampleSrc:"A: I am terribly sorry for making you wait.\nB: No, it is fine.\nA: When was it?\nB: It was last summer.",
     funFact:"もうしわけございません is the apex of formal apologies. Companies use it in press conferences. Customer service representatives say it constantly. The hierarchy: ごめん (casual) < すみません (polite) < もうしわけありません (formal) < もうしわけございません (very formal)."},

    {type:"match", pairs:[{trg:"おっしゃる",src:"to say (honorific)"},{trg:"もうしあげる",src:"to say (humble)"},{trg:"めしあがる",src:"to eat (honorific)"},{trg:"いただく",src:"to receive (humble)"},{trg:"くださる",src:"to give (honorific)"}],
     hint:"Match each keigo verb with its meaning and politeness type."},

    {type:"mc", q:"What does はいけんする literally imply?", opts:["Humbly looking at something precious","Secretly watching something","Quickly glancing","Carefully inspecting"], ans:"Humbly looking at something precious",
     hint:"The first kanji 拝 means worship/bow, showing deep humility toward what you are viewing."},

    {type:"fb", s:"はじめて{1}ます。田中(たなか)ともうします。\n(It is my first time meeting you. My name is Tanaka.)", a:"おめにかかり", opts:["おめにかかり","あい","みえ","うかがい"], sSrc:"It is my first time meeting you. My name is Tanaka.",
     hint:"This very formal humble verb literally means 'to hang upon your eyes.'"},

    {type:"mc", q:"What is the formal apology hierarchy from casual to most formal?", opts:["ごめん, すみません, もうしわけありません, もうしわけございません","すみません, ごめん, もうしわけ, しつれい","もうしわけ, すみません, ごめん, しつれい","ごめん, しつれい, すみません, もうしわけ"], ans:"ごめん, すみません, もうしわけありません, もうしわけございません",
     hint:"Each level adds formality, from casual among friends to the most formal business apology."}
  ]
};
export default BATCH8_L1;
