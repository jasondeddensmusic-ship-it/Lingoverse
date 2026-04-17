// Unit 21 Expansion. Lesson 5: よろん (Public Opinion & Debate)
const LESSON_5 = {
  id:"jav2_u21l5", title:"よろん", icon:"🗣️", xp:15, board:true,
  steps:[
    {type:"intro", title:"よろん",
     desc:"Learn vocabulary for public opinion, debate, and civic participation. Master words for surveys, support rates, criticism, and public discourse. These terms let you understand and discuss how Japanese society forms and expresses collective views on issues.",
     goals:["Learn vocabulary for public opinion and polling","Understand words for support, criticism, and debate","Discuss civic participation and awareness"]},

    {type:"teach", trg:"よろん", src:"public opinion", pos:"noun", gender:null,
     note:"Kanji: 世論 or 輿論. よろんちょうさ = opinion poll.\nせろん is an alternate reading of the same kanji.",
     example:"A: よろんちょうさによると、しじりつがさがっています。\nB: なにがげんいんでしょうか。\nA: どのくらいかかりましたか？\nB: だいたい二時間(にじかん)ぐらいです。",
     exampleSrc:"A: According to opinion polls, the approval rating is falling.\nB: What might be the cause?\nA: How long did it take?\nB: About two hours.",
     funFact:"世論 uses 世 (world/era) and 論 (discuss/theory). It can be read both よろん and せろん, with linguists debating which is correct. Major newspapers conduct regular よろんちょうさ (opinion polls) and publish results that influence political discourse. The prime minister's approval rating (しじりつ) is the most closely watched poll number."},

    {type:"teach", trg:"しじ", src:"support / approval", pos:"noun", gender:null,
     note:"Kanji: 支持. し (branch/support) + じ (hold/maintain).\nしじする = to support. しじりつ = approval rating.",
     example:"A: このせいさくをしじしますか？\nB: はい、ひつようなせいさくだとおもいます。\nA: 難(むずか)しかったですか？\nB: 最初(さいしょ)は難(むずか)しかったですが、慣(な)れました。",
     exampleSrc:"A: Do you support this policy?\nB: Yes, I think it is a necessary policy.\nA: Was it difficult?\nB: It was difficult at first, but I got used to it.",
     funFact:"支持 uses 支 (branch off/support) and 持 (hold). In Japanese politics, しじりつ (support rate) is reported weekly and can make or break a government. Unlike fixed election cycles in some countries, low support rates can force a prime minister to resign. The phrase しじそう (support base) describes loyal political followers."},

    {type:"teach", trg:"ひはん", src:"criticism / critique", pos:"noun", gender:null,
     note:"Kanji: 批判. ひ (critique) + はん (judge).\nひはんする = to criticize. Neutral, not always negative.",
     example:"A: せいふのたいおうにひはんがあつまっています。\nB: たしかにおそすぎましたね。\nA: おすすめですか？\nB: はい、ぜひ試(ため)してみてください。",
     exampleSrc:"A: Criticism is gathering toward the government's response.\nB: Indeed, it was too slow.\nA: Do you recommend it?\nB: Yes, please try it.",
     funFact:"批判 is formal and neutral, used for both constructive and negative criticism. In academic Japanese, ひはんてき (critical) is a positive quality meaning analytically rigorous. This differs from everyday use where ひはん can feel confrontational. The distinction mirrors the English gap between 'critical thinking' (positive) and 'criticism' (often negative)."},

    {type:"teach", trg:"ぎろん", src:"discussion / debate / argument", pos:"noun", gender:null,
     note:"Kanji: 議論. ぎ (deliberate) + ろん (theory/discuss).\nぎろんする = to debate/discuss.",
     example:"A: このもんだいについてもっとぎろんするべきです。\nB: たしかに、いろいろないけんをきくべきですね。\nA: 一緒(いっしょ)に行(い)きませんか？\nB: いいですね。行(い)きましょう。",
     exampleSrc:"A: We should debate this issue more.\nB: Indeed, we should hear various opinions.\nA: Shall we go together?\nB: That sounds good. Let's go.",
     funFact:"議論 combines two strong discussion kanji: 議 (deliberate) and 論 (argue/theory). Japanese culture values consensus (合意, goui) over debate, so ぎろん can feel confrontational. In practice, real decisions are often made through nemawashi (根回し, behind-the-scenes consensus building) before the formal ぎろん."},

    {type:"mc", q:"しじりつ means:", opts:["crime rate","interest rate","support/approval rate","survey rate"], ans:"support/approval rate",
     hint:"Combine the word for s.../a... with りつ (r...) to get a political polling term."},

    {type:"teach", trg:"せいさく", src:"policy / measure", pos:"noun", gender:null,
     note:"Kanji: 政策. せい (politics/govern) + さく (plan/scheme).\nDifferent from せいさく (製作, production).",
     example:"A: あたらしいきょういくせいさくがはっぴょうされました。\nB: どんなないようですか？\nA: どこがおすすめですか？\nB: 京都(きょうと)がおすすめです。",
     exampleSrc:"A: A new education policy was announced.\nB: What are the details?\nA: Where do you recommend?\nB: I recommend Kyoto.",
     funFact:"政策 and the homophone 製作 (production) are distinguished only by kanji. In spoken Japanese, context determines which is meant. 政策 uses 政 (govern) and 策 (plan), so it always refers to government plans or organizational policies. Every political party publishes a 政策集 (seisaku-shuu, policy platform)."},

    {type:"teach", trg:"こくみん", src:"citizens / the people / nationals", pos:"noun", gender:null,
     note:"Kanji: 国民. こく (country) + みん (people).\nこくみんのいけん = the people's opinion.",
     example:"A: こくみんのこえをきくことがたいせつです。\nB: せいじかにとどけるべきですね。\nA: 何(なに)が一番(いちばん)良(よ)かったですか？\nB: 食(た)べ物(もの)が一番(いちばん)おいしかったです。",
     exampleSrc:"A: It is important to listen to the voice of citizens.\nB: We should convey it to politicians.\nA: What was the best part?\nB: The food was the most delicious.",
     funFact:"国民 means 'people of the nation.' Japan's constitution begins with 'We, the Japanese people' (日本国民は). The term carries a sense of collective identity and shared responsibility. こくみんとうひょう (national referendum) and こくみんのぎむ (citizens' duties) are common civic terms."},

    {type:"teach", trg:"うったえる", src:"to appeal / to claim / to sue", pos:"verb", gender:null,
     note:"Group 2 verb. Kanji: 訴える. Covers legal claims and emotional appeals.\nへいわをうったえる = to appeal for peace.",
     example:"A: かんきょうもんだいのじゅうようせいをうったえています。\nB: おおくのひとにつたわるといいですね。\nA: よく行(い)きますか？\nB: 月(つき)に一回(いっかい)ぐらい行(い)きます。",
     exampleSrc:"A: They are appealing the importance of environmental issues.\nB: I hope it reaches many people.\nA: Do you go often?\nB: I go about once a month.",
     funFact:"訴える spans a wide range: legal (裁判に訴える, take to court), emotional (平和を訴える, appeal for peace), and physical (痛みを訴える, complain of pain). The kanji 訴 combines 言 (speak) and 斥 (reject/push), suggesting speech that pushes for change."},

    {type:"fb", s:"せいふのたいおうに{1}があつまっています。\n(Criticism is gathering toward the government's response.)", a:"ひはん", opts:["ひはん","しじ","よろん","ぎろん"], sSrc:"Criticism is gathering toward the government's response.",
     hint:"The word for formal critique or negative evaluation of an action or policy."},

    {type:"teach", trg:"きょうみ", src:"interest / curiosity", pos:"noun", gender:null,
     note:"Kanji: 興味. きょう (interest/excitement) + み (taste/flavor).\nきょうみがある = to be interested.",
     example:"A: しゃかいもんだいにきょうみがありますか？\nB: はい、とくにかんきょうもんだいにきょうみがあります。\nA: 誰(だれ)と行(い)きましたか？\nB: 友達(ともだち)と一緒(いっしょ)に行(い)きました。",
     exampleSrc:"A: Are you interested in social issues?\nB: Yes, I am especially interested in environmental issues.\nA: Who did you go with?\nB: I went with a friend.",
     funFact:"興味 literally means 'taste for excitement.' The construction きょうみがある (have interest) is one of the most common expressions in Japanese conversation. Saying きょうみぶかい (deeply interesting) is stronger praise than おもしろい. Student surveys often ask きょうみのあるぶんや (fields of interest)."},

    {type:"teach", trg:"いしき", src:"consciousness / awareness", pos:"noun", gender:null,
     note:"Kanji: 意識. い (mind/intention) + しき (know/distinguish).\nかんきょういしき = environmental awareness.",
     example:"A: わかいひとのせいじいしきがひくいとよくいわれます。\nB: でも、さいきんはかわってきていますよ。\nA: それは大変(たいへん)でしたね。\nB: はい、でもいい勉強(べんきょう)になりました。",
     exampleSrc:"A: It is often said that young people have low political awareness.\nB: But recently things are changing.\nA: That must have been tough.\nB: Yes, but it was a good learning experience.",
     funFact:"意識 bridges physical consciousness (意識がある = to be conscious) and social awareness (環境意識 = environmental awareness). The phrase いしきたかい (high awareness/consciousness) has become slang for being overly earnest or politically correct, similar to English 'woke.' This shows how formal vocabulary can evolve into casual slang."},

    {type:"teach", trg:"つたえる", src:"to convey / to communicate / to pass on", pos:"verb", gender:null,
     note:"Group 2 verb. Kanji: 伝える. Related to でんとう (tradition, things passed down).\nメッセージをつたえる = to convey a message.",
     example:"A: このじょうほうをみんなにつたえてください。\nB: わかりました。すぐにれんらくします。\nA: 本当(ほんとう)ですか？すごいですね。\nB: ありがとうございます。頑張(がんば)りました。",
     exampleSrc:"A: Please convey this information to everyone.\nB: Understood. I will contact them immediately.\nA: Really? That is amazing.\nB: Thank you. I worked hard.",
     funFact:"伝える shares its root with でんとう (tradition, 伝統), でんせつ (legend, 伝説), and でんわ (telephone, 電話, different kanji). The 伝 kanji shows a person (亻) next to 専 (exclusive), originally meaning to pass something from one person exclusively to another. Communication is literally a chain of personal handoffs."},

    {type:"mc", q:"きょうみがある means:", opts:["to be worried","to be interested","to be angry","to be bored"], ans:"to be interested",
     hint:"This expression combines characters for 'excitement' and 'taste' to describe curiosity."},

    {type:"match", pairs:[{trg:"よろん",src:"public opinion"},{trg:"しじ",src:"support"},{trg:"ひはん",src:"criticism"},{trg:"ぎろん",src:"debate"}]},

    {type:"match", pairs:[{trg:"せいさく",src:"policy"},{trg:"こくみん",src:"citizens"},{trg:"きょうみ",src:"interest"},{trg:"いしき",src:"awareness"}]},

    {type:"fb", s:"かんきょうもんだいのじゅうようせいを{1}います。\n(They are appealing the importance of environmental issues.)", a:"うったえて", opts:["うったえて","つたえて","しじして","ひはんして"], sSrc:"They are appealing the importance of environmental issues.",
     hint:"The te-form of the verb meaning 'to appeal' or 'to make a passionate claim.'"},

    {type:"mc", q:"いしき in かんきょういしき means:", opts:["problem","prevention","awareness","investigation"], ans:"awareness",
     hint:"This word describes the level of understanding and concern one has about a topic."},

    {type:"match", pairs:[{trg:"うったえる",src:"to appeal"},{trg:"つたえる",src:"to convey"},{trg:"いしき",src:"awareness"},{trg:"こくみん",src:"citizens"}]},
  ]
};
export default LESSON_5;
