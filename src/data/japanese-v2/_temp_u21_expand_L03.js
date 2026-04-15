// Unit 21 Expansion — Lesson 5: よろん (Public Opinion & Debate)
const LESSON_5 = {
  id:"jav2_u21l5", title:"よろん", icon:"🗣️", xp:15, board:true,
  steps:[
    {type:"intro", title:"よろん",
     desc:"Learn vocabulary for public opinion, debate, and civic participation. Master words for surveys, support rates, criticism, and public discourse. These terms let you understand and discuss how Japanese society forms and expresses collective views on issues.",
     goals:["Learn vocabulary for public opinion and polling","Understand words for support, criticism, and debate","Discuss civic participation and awareness"]},

    {type:"teach", trg:"よろん", src:"public opinion", pos:"noun", gender:null,
     note:"Kanji: 世論 or 輿論. よろんちょうさ = opinion poll.\nせろん is an alternate reading of the same kanji.",
     example:"A: よろんちょうさによると、しじりつがさがっています。\nB: なにがげんいんでしょうか。",
     exampleSrc:"A: According to opinion polls, the approval rating is falling.\nB: What might be the cause?",
     funFact:"世論 uses 世 (world/era) and 論 (discuss/theory). It can be read both よろん and せろん, with linguists debating which is correct. Major newspapers conduct regular よろんちょうさ (opinion polls) and publish results that influence political discourse. The prime minister's approval rating (しじりつ) is the most closely watched poll number."},

    {type:"teach", trg:"しじ", src:"support / approval", pos:"noun", gender:null,
     note:"Kanji: 支持. し (branch/support) + じ (hold/maintain).\nしじする = to support. しじりつ = approval rating.",
     example:"A: このせいさくをしじしますか？\nB: はい、ひつようなせいさくだとおもいます。",
     exampleSrc:"A: Do you support this policy?\nB: Yes, I think it is a necessary policy.",
     funFact:"支持 uses 支 (branch off/support) and 持 (hold). In Japanese politics, しじりつ (support rate) is reported weekly and can make or break a government. Unlike fixed election cycles in some countries, low support rates can force a prime minister to resign. The phrase しじそう (support base) describes loyal political followers."},

    {type:"teach", trg:"ひはん", src:"criticism / critique", pos:"noun", gender:null,
     note:"Kanji: 批判. ひ (critique) + はん (judge).\nひはんする = to criticize. Neutral, not always negative.",
     example:"A: せいふのたいおうにひはんがあつまっています。\nB: たしかにおそすぎましたね。",
     exampleSrc:"A: Criticism is gathering toward the government's response.\nB: Indeed, it was too slow.",
     funFact:"批判 is formal and neutral, used for both constructive and negative criticism. In academic Japanese, ひはんてき (critical) is a positive quality meaning analytically rigorous. This differs from everyday use where ひはん can feel confrontational. The distinction mirrors the English gap between 'critical thinking' (positive) and 'criticism' (often negative)."},

    {type:"teach", trg:"ぎろん", src:"discussion / debate / argument", pos:"noun", gender:null,
     note:"Kanji: 議論. ぎ (deliberate) + ろん (theory/discuss).\nぎろんする = to debate/discuss.",
     example:"A: このもんだいについてもっとぎろんするべきです。\nB: たしかに、いろいろないけんをきくべきですね。",
     exampleSrc:"A: We should debate this issue more.\nB: Indeed, we should hear various opinions.",
     funFact:"議論 combines two strong discussion kanji: 議 (deliberate) and 論 (argue/theory). Japanese culture values consensus (合意, goui) over debate, so ぎろん can feel confrontational. In practice, real decisions are often made through nemawashi (根回し, behind-the-scenes consensus building) before the formal ぎろん."},

    {type:"mc", q:"しじりつ means:", opts:["crime rate","interest rate","support/approval rate","survey rate"], ans:"support/approval rate",
     hint:"Combine the word for s.../a... with りつ (r...) to get a political polling term."},

    {type:"teach", trg:"せいさく", src:"policy / measure", pos:"noun", gender:null,
     note:"Kanji: 政策. せい (politics/govern) + さく (plan/scheme).\nDifferent from せいさく (製作, production).",
     example:"A: あたらしいきょういくせいさくがはっぴょうされました。\nB: どんなないようですか？",
     exampleSrc:"A: A new education policy was announced.\nB: What are the details?",
     funFact:"政策 and the homophone 製作 (production) are distinguished only by kanji. In spoken Japanese, context determines which is meant. 政策 uses 政 (govern) and 策 (plan), so it always refers to government plans or organizational policies. Every political party publishes a 政策集 (seisaku-shuu, policy platform)."},

    {type:"teach", trg:"こくみん", src:"citizens / the people / nationals", pos:"noun", gender:null,
     note:"Kanji: 国民. こく (country) + みん (people).\nこくみんのいけん = the people's opinion.",
     example:"A: こくみんのこえをきくことがたいせつです。\nB: せいじかにとどけるべきですね。",
     exampleSrc:"A: It is important to listen to the voice of citizens.\nB: We should convey it to politicians.",
     funFact:"国民 means 'people of the nation.' Japan's constitution begins with 'We, the Japanese people' (日本国民は). The term carries a sense of collective identity and shared responsibility. こくみんとうひょう (national referendum) and こくみんのぎむ (citizens' duties) are common civic terms."},

    {type:"teach", trg:"うったえる", src:"to appeal / to claim / to sue", pos:"verb", gender:null,
     note:"Group 2 verb. Kanji: 訴える. Covers legal claims and emotional appeals.\nへいわをうったえる = to appeal for peace.",
     example:"A: かんきょうもんだいのじゅうようせいをうったえています。\nB: おおくのひとにつたわるといいですね。",
     exampleSrc:"A: They are appealing the importance of environmental issues.\nB: I hope it reaches many people.",
     funFact:"訴える spans a wide range: legal (裁判に訴える, take to court), emotional (平和を訴える, appeal for peace), and physical (痛みを訴える, complain of pain). The kanji 訴 combines 言 (speak) and 斥 (reject/push), suggesting speech that pushes for change."},

    {type:"fb", s:"せいふのたいおうに___があつまっています。\n(Criticism is gathering toward the government's response.)", a:"ひはん", opts:["ひはん","しじ","よろん","ぎろん"], sSrc:"Criticism is gathering toward the government's response.",
     hint:"The word for formal critique or negative evaluation of an action or policy."},

    {type:"teach", trg:"きょうみ", src:"interest / curiosity", pos:"noun", gender:null,
     note:"Kanji: 興味. きょう (interest/excitement) + み (taste/flavor).\nきょうみがある = to be interested.",
     example:"A: しゃかいもんだいにきょうみがありますか？\nB: はい、とくにかんきょうもんだいにきょうみがあります。",
     exampleSrc:"A: Are you interested in social issues?\nB: Yes, I am especially interested in environmental issues.",
     funFact:"興味 literally means 'taste for excitement.' The construction きょうみがある (have interest) is one of the most common expressions in Japanese conversation. Saying きょうみぶかい (deeply interesting) is stronger praise than おもしろい. Student surveys often ask きょうみのあるぶんや (fields of interest)."},

    {type:"teach", trg:"いしき", src:"consciousness / awareness", pos:"noun", gender:null,
     note:"Kanji: 意識. い (mind/intention) + しき (know/distinguish).\nかんきょういしき = environmental awareness.",
     example:"A: わかいひとのせいじいしきがひくいとよくいわれます。\nB: でも、さいきんはかわってきていますよ。",
     exampleSrc:"A: It is often said that young people have low political awareness.\nB: But recently things are changing.",
     funFact:"意識 bridges physical consciousness (意識がある = to be conscious) and social awareness (環境意識 = environmental awareness). The phrase いしきたかい (high awareness/consciousness) has become slang for being overly earnest or politically correct, similar to English 'woke.' This shows how formal vocabulary can evolve into casual slang."},

    {type:"teach", trg:"つたえる", src:"to convey / to communicate / to pass on", pos:"verb", gender:null,
     note:"Group 2 verb. Kanji: 伝える. Related to でんとう (tradition, things passed down).\nメッセージをつたえる = to convey a message.",
     example:"A: このじょうほうをみんなにつたえてください。\nB: わかりました。すぐにれんらくします。",
     exampleSrc:"A: Please convey this information to everyone.\nB: Understood. I will contact them immediately.",
     funFact:"伝える shares its root with でんとう (tradition, 伝統), でんせつ (legend, 伝説), and でんわ (telephone, 電話, different kanji). The 伝 kanji shows a person (亻) next to 専 (exclusive), originally meaning to pass something from one person exclusively to another. Communication is literally a chain of personal handoffs."},

    {type:"mc", q:"きょうみがある means:", opts:["to be worried","to be interested","to be angry","to be bored"], ans:"to be interested",
     hint:"This expression combines characters for 'excitement' and 'taste' to describe curiosity."},

    {type:"match", pairs:[{trg:"よろん",src:"public opinion"},{trg:"しじ",src:"support"},{trg:"ひはん",src:"criticism"},{trg:"ぎろん",src:"debate"}]},

    {type:"match", pairs:[{trg:"せいさく",src:"policy"},{trg:"こくみん",src:"citizens"},{trg:"きょうみ",src:"interest"},{trg:"いしき",src:"awareness"}]},

    {type:"fb", s:"かんきょうもんだいのじゅうようせいを___います。\n(They are appealing the importance of environmental issues.)", a:"うったえて", opts:["うったえて","つたえて","しじして","ひはんして"], sSrc:"They are appealing the importance of environmental issues.",
     hint:"The te-form of the verb meaning 'to appeal' or 'to make a passionate claim.'"},

    {type:"mc", q:"いしき in かんきょういしき means:", opts:["problem","prevention","awareness","investigation"], ans:"awareness",
     hint:"This word describes the level of understanding and concern one has about a topic."},

    {type:"match", pairs:[{trg:"うったえる",src:"to appeal"},{trg:"つたえる",src:"to convey"},{trg:"いしき",src:"awareness"},{trg:"こくみん",src:"citizens"}]},
  ]
};
export default LESSON_5;
