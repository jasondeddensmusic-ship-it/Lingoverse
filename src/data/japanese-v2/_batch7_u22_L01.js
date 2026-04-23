// Batch 7 – Unit 22 (B1.2 Giving & Receiving): Relationship & Social Bond Words
const BATCH7_L1 = {
  id:"jav2_u22l_b7_1", title:"人間関係(にんげんかんけい)", icon:"🤝", xp:15, board:true,
  steps:[
    {type:"intro", title:"人間関係(にんげんかんけい)",
     desc:"Learn vocabulary for human relationships and social bonds. These words describe the web of connections that define Japanese social life, pairing naturally with giving/receiving grammar.",
     goals:["Describe different types of relationships","Use trust and loyalty vocabulary","Express social connection and obligation"]},

    {type:"teach", trg:"信頼(しんらい)", src:"trust", pos:"noun", gender:null,
     note:"信頼(しんらい)する = to trust. 信頼関係(しんらいかんけい) = trust relationship.\n信頼(しんらい)できる人(ひと) = a trustworthy person.",
     example:"A: 信頼関係(しんらいかんけい)を築(きず)くのは時間(じかん)がかかります。\nB: そうですね。でも一度(いちど)壊(こわ)れると直(なお)すのが難(むずか)しいです。\nA: よく行(い)きますか？\nB: 月(つき)に一回(いっかい)ぐらい行(い)きます。",
     exampleSrc:"A: Building trust takes time.\nB: Yes. But once broken, it is hard to repair.\nA: Do you go often?\nB: I go about once a month.",
     funFact:"信頼(しんらい) is built slowly and lost quickly in Japan. Business 信頼(しんらい) is earned through years of reliable behavior. The word combines 信(しん) (believe) and 頼(より) (rely on). Japanese business culture values 信頼(しんらい) over contracts. A handshake deal backed by 信頼(しんらい) can be more binding than paper."},

    {type:"teach", trg:"絆(きずな)", src:"bond / emotional tie", pos:"noun", gender:null,
     note:"深(ふか)い絆(きずな) = deep bond.\n絆(きずな)を深(ふか)める = to deepen bonds.",
     example:"A: 家族(かぞく)の絆(きずな)は大事(だいじ)ですね。\nB: はい、何(なに)があっても家族(かぞく)です。\nA: 誰(だれ)と行(い)きましたか？\nB: 友達(ともだち)と一緒(いっしょ)に行(い)きました。",
     exampleSrc:"A: Family bonds are important.\nB: Yes, no matter what, we are family.\nA: Who did you go with?\nB: I went with a friend.",
     funFact:"絆(きずな) became Japan's 'kanji of the year' after the 2011 earthquake and tsunami. Communities came together with extraordinary 絆(きずな). The word originally meant a rope tying animals, but evolved to mean precious human connections. It represents the best of Japanese communal spirit."},

    {type:"teach", trg:"お互(たが)い様(さま)", src:"mutual obligation / we are even", pos:"noun", gender:null,
     note:"お互(たが)い = each other. 様(さま) = honorific.\nExpression of shared burden.",
     example:"A: 手伝(てつだ)ってくれてありがとう。\nB: お互(たが)い様(さま)ですよ。\nA: それは大変(たいへん)でしたね。\nB: はい、でもいい勉強(べんきょう)になりました。",
     exampleSrc:"A: Thank you for helping.\nB: We help each other.\nA: That must have been tough.\nB: Yes, but it was a good learning experience.",
     funFact:"お互(たが)い様(さま) is a beautiful Japanese concept meaning 'we are all in this together.' When someone apologizes for noise, a neighbor says お互(たが)い様(さま). It acknowledges mutual imperfection and shared humanity. It defuses tension and builds community more powerfully than 'you're welcome.'"},

    {type:"teach", trg:"恩返(おんがえ)し", src:"returning a favor / reciprocation", pos:"noun", gender:null,
     note:"恩(おん) = favor/debt. 返(がえ)し = return.\n恩返(おんがえ)しをする = to return a favor.",
     example:"A: お世話(おせわ)になった恩返(おんがえ)しをしたいです。\nB: 気持(きも)ちだけで十分(じゅうぶん)ですよ。\nA: 本当(ほんとう)ですか？すごいですね。\nB: ありがとうございます。頑張(がんば)りました。",
     exampleSrc:"A: I want to return the favor for your help.\nB: The thought alone is enough.\nA: Really? That is amazing.\nB: Thank you. I worked hard.",
     funFact:"恩返(おんがえ)し is central to Japanese ethics. Receiving help creates an 恩(おん) (obligation/debt). Folk tales like 鶴(つる)の恩返(おんがえ)し (crane's return of favor) teach this value. In business, 恩返(おんがえ)し drives gift-giving cycles: お中元(ちゅうげん) (summer gifts) and お歳暮(せいぼ) (year-end gifts) between business partners."},

    {type:"teach", trg:"思(おも)いやり", src:"consideration for others / empathy", pos:"noun", gender:null,
     note:"思(おも)い = thought/feeling. やり = doing.\n思(おも)いやりのある人(ひと) = a considerate person.",
     example:"A: 思(おも)いやりのある言葉(ことば)をかけてくれてありがとう。\nB: いつも思(おも)いやりを持(も)っていたいです。\nA: 私(わたし)も興味(きょうみ)があります。\nB: じゃあ、今度(こんど)一緒(いっしょ)にどうですか？",
     exampleSrc:"A: Thank you for your considerate words.\nB: I always want to have consideration for others.\nA: I am also interested.\nB: Then, how about doing it together next time?",
     funFact:"思(おも)いやり is considered the highest virtue in Japanese interpersonal relationships. It means actively imagining others' feelings and acting accordingly. Schools teach 思(おも)いやり through group activities. The concept goes beyond empathy: it requires action based on imagined feelings."},

    {type:"teach", trg:"付(つ)き合(あ)い", src:"association / social relationship / dating", pos:"noun", gender:null,
     note:"付(つ)き合(あ)う = to associate with / to date.\nお付(つ)き合(あ)い = formal/polite version.",
     example:"A: ご近所(きんじょ)とのお付(つ)き合(あ)いは大事(だいじ)ですよ。\nB: そうですね。挨拶(あいさつ)から始(はじ)めます。\nA: どんな感(かん)じでしたか？\nB: 想像(そうぞう)していたよりずっと良(よ)かったです。",
     exampleSrc:"A: Relations with neighbors are important.\nB: Yes. I will start with greetings.\nA: What was it like?\nB: It was much better than I imagined.",
     funFact:"付(つ)き合(あ)い covers all social relationships from neighbors to dating. 飲(の)みの付(つ)き合(あ)い (drinking socializing) is expected in business. 近所付(きんじょつ)き合(あ)い (neighborhood relations) involve gifts and greetings. お付(つ)き合(あ)いしてください (please go out with me) is a dating confession phrase."},

    {type:"teach", trg:"仲直(なかなお)り", src:"making up / reconciliation", pos:"noun", gender:null,
     note:"仲(なか) = relationship. 直(なお)り = fixing.\n仲直(なかなお)りする = to make up after a fight.",
     example:"A: けんかしたけど仲直(なかなお)りしました。\nB: よかったですね。\nA: 何(なに)を食(た)べましたか？\nB: 地元(じもと)の名物(めいぶつ)を食(た)べました。",
     exampleSrc:"A: We had a fight but made up.\nB: That is good.\nA: What did you eat?\nB: I ate the local specialty.",
     funFact:"仲直(なかなお)り literally means 'fixing the relationship.' Japanese children learn 仲直(なかなお)り rituals: saying ごめんね (sorry) and offering a pinky promise (指切(ゆびき)り). The cultural emphasis on harmony (和(わ)) means 仲直(なかなお)り is highly valued. Holding grudges is seen as immature."},

    {type:"teach", trg:"頼(たよ)る", src:"to rely on / to depend on", pos:"verb", gender:null,
     note:"Group 1 verb. AにBを頼(たよ)る = to rely on A for B.\n頼(たよ)りになる人(ひと) = a reliable person.",
     example:"A: 困(こま)ったときは私(わたし)に頼(たよ)ってください。\nB: ありがとう。心強(こころづよ)いです。\nA: 楽(たの)しみですね。\nB: はい、今(いま)からわくわくしています。",
     exampleSrc:"A: When you are in trouble, rely on me.\nB: Thank you. That is reassuring.\nA: That is exciting.\nB: Yes, I am already excited.",
     funFact:"頼(たよ)る carries a cultural tension in Japan. Self-reliance is valued, but so is mutual support. Saying 頼(たよ)りにしています (I am counting on you) is a compliment meaning 'you are reliable.' However, being too dependent (甘(あま)え) is negative. The balance between 頼(たよ)る and independence is a lifelong navigation."},

    {type:"teach", trg:"支(ささ)える", src:"to support / to sustain", pos:"verb", gender:null,
     note:"Group 2 verb. 家族(かぞく)に支(ささ)えられている = I am supported by my family.\n支(ささ)え = support (noun).",
     example:"A: 友達(ともだち)に支(ささ)えられました。\nB: いい友達(ともだち)ですね。\nA: いい思(おも)い出(で)ですね。\nB: はい、一生(いっしょう)忘(わす)れません。",
     exampleSrc:"A: I was supported by my friends.\nB: What good friends.\nA: That is a nice memory.\nB: Yes, I will never forget it.",
     funFact:"支(ささ)える describes the invisible support structures in Japanese society. 'Behind every successful person are people who 支(ささ)える them' is a common sentiment. Thank-you speeches always mention those who 支(ささ)えた. The word appears in 支(ささ)え合(あ)い (mutual support), a community ideal."},

    {type:"teach", trg:"裏切(うらぎ)る", src:"to betray", pos:"verb", gender:null,
     note:"Group 1 verb. 裏切(うらぎ)り = betrayal (noun).\n信頼(しんらい)を裏切(うらぎ)る = to betray trust.",
     example:"A: 信頼(しんらい)を裏切(うらぎ)ることは許(ゆる)されません。\nB: 一度(いちど)裏切(うらぎ)ったら戻(もど)れませんね。\nA: どうでしたか？\nB: とても良(よ)かったです。",
     exampleSrc:"A: Betraying trust is unforgivable.\nB: Once betrayed, you cannot go back.\nA: How was it?\nB: It was very good.",
     funFact:"裏切(うらぎ)り is one of the most serious social sins in Japan. The word literally means 'cutting the back' (attacking from behind). Historical tales of 裏切(うらぎ)り (like Akechi Mitsuhide's betrayal of Oda Nobunaga) are taught as moral lessons. In business, breaking 信頼(しんらい) through 裏切(うらぎ)り ends relationships permanently."},

    {type:"teach", trg:"許(ゆる)す", src:"to forgive", pos:"verb", gender:null,
     note:"Group 1 verb. 許(ゆる)し = forgiveness (noun).\n許(ゆる)してください = please forgive me.",
     example:"A: 許(ゆる)してください。本当(ほんとう)に反省(はんせい)しています。\nB: わかりました。今度(こんど)は気(き)をつけてね。\nA: いつですか？\nB: 去年(きょねん)の夏(なつ)でした。",
     exampleSrc:"A: Please forgive me. I truly reflect on it.\nB: Okay. Be careful next time.\nA: When was it?\nB: It was last summer.",
     funFact:"許(ゆる)す requires 反省(はんせい) (self-reflection) from the offender. Simply saying 'sorry' is not enough. The person must show they have reflected on their actions and will change. 反省文(はんせいぶん) (reflection essays) are written by school children and even by adults in formal apology situations."},

    {type:"teach", trg:"励(はげ)ます", src:"to encourage / to cheer up", pos:"verb", gender:null,
     note:"Group 1 verb. 励(はげ)まし = encouragement (noun).\n励(はげ)ましの言葉(ことば) = words of encouragement.",
     example:"A: 試験(しけん)に落(お)ちたけど、友達(ともだち)が励(はげ)ましてくれました。\nB: いい友達(ともだち)ですね。\nA: それはいいですね。\nB: はい、とても楽(たの)しかったです。",
     exampleSrc:"A: I failed the exam, but my friends encouraged me.\nB: What good friends.\nA: That is nice.\nB: Yes, it was very fun.",
     funFact:"励(はげ)ます is one of the most valued interpersonal actions in Japan. がんばれ (do your best) is the classic 励(はげ)まし. After disasters, 励(はげ)ましの言葉(ことば) (words of encouragement) pour in from across the country. The concept that words have power (言霊(ことだま)) makes 励(はげ)ます genuinely healing."},

    // Quiz steps
    {type:"mc", q:"絆(きずな) became kanji of the year after:",
     opts:["The 2011 earthquake and tsunami","A popular TV drama","A royal wedding","A sports victory"],
     ans:"The 2011 earthquake and tsunami",
     hint:"Communities showed extraordinary bonds during Japan's greatest modern disaster."},

    {type:"match", pairs:[
      {trg:"信頼(しんらい)", src:"trust"},
      {trg:"絆(きずな)", src:"bond"},
      {trg:"思(おも)いやり", src:"consideration"},
      {trg:"恩返(おんがえ)し", src:"returning a favor"},
      {trg:"お互(たが)い様(さま)", src:"mutual obligation"}
    ,{trg:"付(つ)き合(あ)い",src:"association / social relationship / dating"}]},

    {type:"fb", s:"困(こま)ったときは私(わたし)に{1}ください。",
     a:["頼(たよ)って"],
     opts:["頼(たよ)って","裏切(うらぎ)って","許(ゆる)して","励(はげ)まして"],
     hint:"When in trouble, depend on me. This verb means 'to rely on.'",
     sSrc:"When you are in trouble, please {1} me."},

    {type:"mc", q:"思(おも)いやり requires:",
     opts:["Being quiet all the time","Imagining others' feelings and acting on it","Saying sorry frequently","Giving expensive gifts"],
     ans:"Imagining others' feelings and acting on it",
     hint:"This virtue goes beyond empathy. It requires actively doing something based on imagined f...."},

    {type:"fb", s:"けんかしたけど{1}しました。",
     a:["仲直(なかなお)り"],
     opts:["仲直(なかなお)り","裏切(うらぎ)り","恩返(おんがえ)し","付(つ)き合(あ)い"],
     hint:"After the fight, the relationship was repaired. This word means 'reconciliation.'",
     sSrc:"We fought but {1}."},

    {type:"mc", q:"許(ゆる)す in Japan requires the offender to show:",
     opts:["Gifts","Nothing special","反省(はんせい) (genuine self-reflection)","Money"],
     ans:"反省(はんせい) (genuine self-reflection)",
     hint:"Simply saying sorry is not enough. The person must demonstrate they have reflected and will change."},

    {type:"match", pairs:[
      {trg:"頼(たよ)る", src:"to rely on"},
      {trg:"支(ささ)える", src:"to support"},
      {trg:"裏切(うらぎ)る", src:"to betray"},
      {trg:"許(ゆる)す", src:"to forgive"},
      {trg:"励(はげ)ます", src:"to encourage"}
    ]},

    {type:"fb", s:"友達(ともだち)に{1}られて元気(げんき)が出(で)ました。",
     a:["励(はげ)ま"],
     opts:["励(はげ)ま","裏切(うらぎ)","頼(たよ)","許(ゆる)"],
     hint:"Friends cheered you up and you felt better. This verb means 'to encourage.'",
     sSrc:"I was {1} by friends and felt better."}
  ,{type:"fb", s:"Aさんへの{1}として、助(たす)けてもらったお礼(れい)に食事(しょくじ)をおごりました。",
     a:["恩返(おんがえ)し"],
     opts:["恩返(おんがえ)し","仲直(なかなお)り","絆(きずな)","思(おも)いやり"],
     hint:"You treated someone to a meal to thank them for their help. This noun refers to repaying a kindness or returning a favor.",
     sSrc:"As {1} to A-san, I treated them to a meal to thank them for their help."}
  ]
};
export default BATCH7_L1;
