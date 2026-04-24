// Batch 9 – Unit 30 (B2): 思想(しそう)
const BATCH9_L1 = {
  id:"jav2_u30l_b9_1", title:"思想(しそう)", icon:"🤔", xp:15, board:true,
  steps:[
    {type:"intro", title:"思想(しそう)",
     desc:"Philosophical and abstract thought vocabulary",
     goals:["Master key vocabulary for this topic","Use new words in context","Build reading comprehension"]},

    {type:"teach", trg:"倫理(りんり)", src:"ethics", pos:"noun", gender:null,
     note:"倫(りん) conduct + 理(り) principle.\nDistinct from 法律(ほうりつ) law.",
     example:"A: 倫理(りんり)について考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: その分野(ぶんや)についてどのくらいご存(ぞん)じですか？\nB: 専門(せんもん)ではありませんが、基本的(きほんてき)な知識(ちしき)はあります。\nA: もっと詳(くわ)しく知(し)りたい場合(ばあい)は、どうすればいいですか？\nB: 専門家(せんもんか)に相談(そうだん)するか、関連(かんれん)の書籍(しょせき)を読(よ)むことをお勧(すす)めします。",
     exampleSrc:"A: Let us think about ethics.\nB: It is an important theme.\nA: How much do you know about that field?\nB: It is not my specialty, but I have basic knowledge.\nA: If I want to know more in detail, what should I do?\nB: I recommend consulting a specialist or reading related books.",
     funFact:"倫(りん) (rules of conduct) + 理(り) (principle). Japanese companies distinguish 法律(ほうりつ) (law) from 倫理(りんり) (ethics). Many corporate scandals describe breaches as not illegal but 倫理(りんり)に反(はん)する (ethically wrong)."},

    {type:"teach", trg:"道徳(どうとく)", src:"morality", pos:"noun", gender:null,
     note:"道(みち) way + 徳(とく) virtue.\nMandatory elementary school subject since 2018.",
     example:"A: 道徳(どうとく)について考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: どのような影響(えいきょう)がありましたか？\nB: 社会全体(しゃかいぜんたい)に大(おお)きな影響(えいきょう)を与(あた)えました。\nA: 良(よ)い影響(えいきょう)ですか、悪(わる)い影響(えいきょう)ですか？\nB: 両方(りょうほう)あります。メリットもデメリットもあります。",
     exampleSrc:"A: Let us think about morality.\nB: It is an important theme.\nA: What kind of impact was there?\nB: It had a big impact on society as a whole.\nA: A good impact or a bad impact?\nB: Both. There are both merits and demerits.",
     funFact:"道(みち) (the way) + 徳(とく) (virtue). Japanese elementary schools have a dedicated 道徳(どうとく) curriculum since 2018, covering honesty, respect, and collective responsibility through short stories and discussions."},

    {type:"teach", trg:"善悪(ぜんあく)", src:"good and evil", pos:"noun", gender:null,
     note:"善(ぜん) good + 悪(あく) evil.\nClassical moral binary; nuanced in Japanese thought.",
     example:"A: 善悪(ぜんあく)について考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: 具体的(ぐたいてき)にはどういうことですか？\nB: つまり、状況(じょうきょう)に応(おう)じて対応(たいおう)を変(か)える必要(ひつよう)があるということです。\nA: なるほど。それは確(たし)かにそうですね。\nB: ええ、柔軟(じゅうなん)な対応(たいおう)が大切(たいせつ)だと思(おも)います。",
     exampleSrc:"A: Let us think about good and evil.\nB: It is an important theme.\nA: What do you mean specifically?\nB: I mean we need to change our approach depending on the situation.\nA: I see. That is certainly true.\nB: Yes, I think flexible response is important.",
     funFact:"善(ぜん) (good) + 悪(あく) (evil). A classical binary concept. Japanese philosophy often emphasizes situational ethics over absolute 善悪(ぜんあく), influenced by Buddhist nuance and Shinto naturalism."},

    {type:"teach", trg:"真理(しんり)", src:"truth", pos:"noun", gender:null,
     note:"真(しん) true + 理(り) principle.\nUniversal truth; Buddhist dharma.",
     example:"A: 真理(しんり)について考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: それについてもう少(すこ)し詳(くわ)しく教(おし)えてください。\nB: 例(たと)えば、最近(さいきん)の事例(じれい)を見(み)ると、変化(へんか)が激(はげ)しいです。\nA: そうですか。どう対処(たいしょ)すればいいでしょうか。\nB: まず現状(げんじょう)を把握(はあく)してから、計画(けいかく)を立(た)てましょう。",
     exampleSrc:"A: Let us think about truth.\nB: It is an important theme.\nA: Please tell me more about that.\nB: For example, looking at recent cases, the changes are dramatic.\nA: Is that so? How should we handle it?\nB: Let's first grasp the current situation, then make a plan.",
     funFact:"真(しん) (true) + 理(り) (principle). Used in philosophy, logic, and religion to mean universal truth. Buddhist traditions translate dharma as 真理(しんり), the true nature of reality."},

    {type:"teach", trg:"存在(そんざい)", src:"existence", pos:"noun", gender:null,
     note:"存(そん) to exist + 在(ざい) to be present.\n存在論 = ontology; Heideggerian 'Sein'.",
     example:"A: 存在(そんざい)について考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: どのような方法(ほうほう)がありますか？\nB: いくつかの選択肢(せんたくし)があります。一番(いちばん)効果的(こうかてき)なのは実践(じっせん)です。\nA: 実践(じっせん)というのは、具体的(ぐたいてき)に何(なに)をすればいいですか？\nB: 毎日(まいにち)少(すこ)しずつ取(と)り組(く)むことが重要(じゅうよう)です。",
     exampleSrc:"A: Let us think about existence.\nB: It is an important theme.\nA: What kinds of methods are there?\nB: There are several options. The most effective is practice.\nA: What specifically should we do in practice?\nB: It is important to work on it a little each day.",
     funFact:"存(そん) (to exist) + 在(ざい) (to be present). A key philosophical term. 存在論(そんざいろん) translates ontology. Heidegger translations in Japanese use 存在(そんざい) for Sein (being)."},

    {type:"teach", trg:"本質(ほんしつ)", src:"essence", pos:"noun", gender:null,
     note:"本(ほん) origin + 質(しつ) quality.\nThe intrinsic nature of a thing.",
     example:"A: 本質(ほんしつ)について考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: それはいつごろから始(はじ)まったのですか？\nB: 数年前(すうねんまえ)からですが、最近(さいきん)特(とく)に注目(ちゅうもく)されています。\nA: 今後(こんご)どうなると思(おも)いますか？\nB: さらに発展(はってん)すると予想(よそう)されています。",
     exampleSrc:"A: Let us think about essence.\nB: It is an important theme.\nA: When did that start?\nB: It started a few years ago, but it has been getting particular attention recently.\nA: What do you think will happen going forward?\nB: It is expected to develop further.",
     funFact:"本(ほん) (origin) + 質(しつ) (quality). The intrinsic nature of a thing. A favorite term of Japanese critics: 本質(ほんしつ)を突(つ)く means to cut to the essence in any analysis."},

    {type:"teach", trg:"観念(かんねん)", src:"concept", pos:"noun", gender:null,
     note:"観(かん) to observe + 念(ねん) thought.\nAlso slang: 観念しろ (give up/resign yourself).",
     example:"A: 観念(かんねん)について考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: 何(なに)か問題(もんだい)はありませんでしたか？\nB: いくつか課題(かだい)がありましたが、解決(かいけつ)しました。\nA: どのように解決(かいけつ)したのですか？\nB: チーム全体(ぜんたい)で話(はな)し合(あ)って、最善(さいぜん)の方法(ほうほう)を見(み)つけました。",
     exampleSrc:"A: Let us think about concept.\nB: It is an important theme.\nA: Were there any problems?\nB: There were some issues, but we resolved them.\nA: How did you resolve them?\nB: We discussed it as a whole team and found the best method.",
     funFact:"観(かん) (to observe) + 念(ねん) (thought). Also means mental surrender, as in 観念(かんねん)しろ (give up / face reality). A philosophical term that doubles as everyday slang."},

    {type:"teach", trg:"知覚(ちかく)", src:"perception", pos:"noun", gender:null,
     note:"知(ち) knowledge + 覚(かく) to sense.\nPsychology and philosophy term.",
     example:"A: 知覚(ちかく)について考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: その点(てん)について、もう少(すこ)し説明(せつめい)していただけますか？\nB: もちろんです。重要(じゅうよう)なのは準備(じゅんび)と計画(けいかく)です。\nA: 準備(じゅんび)にはどのくらい時間(じかん)がかかりますか？\nB: 通常(つうじょう)、一週間(いっしゅうかん)から二週間(にしゅうかん)程度(ていど)です。",
     exampleSrc:"A: Let us think about perception.\nB: It is an important theme.\nA: Could you explain that point a bit more?\nB: Of course. What is important is preparation and planning.\nA: How long does preparation take?\nB: Usually about one to two weeks.",
     funFact:"知(ち) (knowledge) + 覚(かく) (to sense). Used in psychology and philosophy for perception. 知覚(ちかく)心理学(しんりがく) (perceptual psychology) is a standard Japanese university subject."},

    {type:"mc", q:"What does 倫理(りんり) mean?", opts:["ethics","morality","good and evil","truth"], ans:"ethics",
     hint:"This is a key term in this unit's topic area."},

    {type:"fb", s:"{1}は重要(じゅうよう)です。\n(existence is important.)", a:"存在(そんざい)", opts:["存在(そんざい)","本質(ほんしつ)","観念(かんねん)","倫理(りんり)"], sSrc:"existence is important.",
     hint:"Think about which word matches the English translation."},

    {type:"match", pairs:[{trg:"倫理(りんり)",src:"ethics"},{trg:"道徳(どうとく)",src:"morality"},{trg:"善悪(ぜんあく)",src:"good and evil"},{trg:"真理(しんり)",src:"truth"},{trg:"観念(かんねん)",src:"concept"}]},

    {type:"mc", q:"Which word means perception?", opts:["本質(ほんしつ)","知覚(ちかく)","存在(そんざい)","道徳(どうとく)"], ans:"知覚(ちかく)",
     hint:"This term is essential vocabulary for this topic."}
  ]
};
export default BATCH9_L1;
