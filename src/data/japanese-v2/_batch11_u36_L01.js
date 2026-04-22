// Batch 11 – Unit 36 (B2.4 Comprehensive Review): Advanced Expressions & N2 Final Push
const BATCH11_L1 = {
  id:"jav2_u36l_b11_1", title:"上級表現(じょうきゅうひょうげん)", icon:"🎓", xp:15, board:true,
  steps:[
    {type:"intro", title:"上級表現(じょうきゅうひょうげん)",
     desc:"Master advanced expressions and set phrases that mark fluent, educated Japanese. These are the finishing touches for JLPT N2 level proficiency.",
     goals:["Use advanced set phrases naturally","Master N2-level idiomatic expressions","Express nuanced thoughts with precision"]},

    {type:"teach", trg:"〜ざるをえない", src:"cannot help but ~ / have no choice but to ~", pos:"part", gender:null,
     note:"N2 grammar. 認(みと)めざるをえない = have no choice but to admit.\nStrong compulsion.",
     example:"A: 結果(けっか)を認(みと)めざるをえません。\nB: 確(たし)かに、データは明確(めいかく)です。\nA: 今後(こんご)の展望(てんぼう)についてお聞(き)かせください。\nB: 今後(こんご)はさらに国際化(こくさいか)が進(すす)むと思(おも)います。\nA: それに対(たい)してどのような対策(たいさく)が必要(ひつよう)ですか？\nB: 語学力(ごがくりょく)の向上(こうじょう)と異文化理解(いぶんかりかい)が不可欠(ふかけつ)です。",
     exampleSrc:"A: I have no choice but to acknowledge the results.\nB: Indeed, the data is clear.\nA: Please tell me about future prospects.\nB: I think internationalization will progress further going forward.\nA: What measures are needed for that?\nB: Improving language skills and cross-cultural understanding are essential.",
     funFact:"ざるをえない is a classical negative form (ざる = ない) + を + えない (cannot). It expresses reluctant acceptance: the speaker does not want to do it but has no alternative. This pattern sounds intellectual and is common in formal writing and speeches. JLPT N2 tests it frequently."},

    {type:"teach", trg:"〜わけにはいかない", src:"cannot possibly ~ / must not ~", pos:"part", gender:null,
     note:"N2 grammar. 諦(あきら)めるわけにはいかない = I cannot possibly give up.\nMoral/social impossibility.",
     example:"A: ここで諦(あきら)めるわけにはいきません。\nB: そうですね。最後(さいご)まで頑張(がんば)りましょう。\nA: それは予想外(よそうがい)の結果(けっか)ですね。\nB: はい、私(わたし)も驚(おどろ)きました。原因(げんいん)を調(しら)べています。\nA: いつごろ原因(げんいん)が分(わ)かりそうですか？\nB: 今週中(こんしゅうちゅう)には分析(ぶんせき)結果(けっか)が出(で)る予定(よてい)です。",
     exampleSrc:"A: I cannot possibly give up here.\nB: Right. Let's persevere until the end.\nA: That is an unexpected result.\nB: Yes, I was surprised too. We are investigating the cause.\nA: When do you think you will know the cause?\nB: The analysis results are expected to come out by the end of this week.",
     funFact:"わけにはいかない expresses social or moral impossibility (not physical). 約束(やくそく)を破(やぶ)るわけにはいかない (I cannot break my promise). It implies 'given the circumstances, doing X is unacceptable.' This pattern reveals Japanese social consciousness: actions are constrained by obligations, not just physical limitations."},

    {type:"teach", trg:"〜にすぎない", src:"nothing more than ~ / merely ~", pos:"part", gender:null,
     note:"N2 grammar. Downplays significance.\nこれは一例(いちれい)にすぎない = this is merely one example.",
     example:"A: これは私(わたし)の意見(いけん)にすぎません。\nB: でも、大切(たいせつ)な意見(いけん)だと思(おも)います。\nA: その分野(ぶんや)についてどのくらいご存(ぞん)じですか？\nB: 専門(せんもん)ではありませんが、基本的(きほんてき)な知識(ちしき)はあります。\nA: もっと詳(くわ)しく知(し)りたい場合(ばあい)は、どうすればいいですか？\nB: 専門家(せんもんか)に相談(そうだん)するか、関連(かんれん)の書籍(しょせき)を読(よ)むことをお勧(すす)めします。",
     exampleSrc:"A: This is nothing more than my opinion.\nB: But I think it is an important opinion.\nA: How much do you know about that field?\nB: It is not my specialty, but I have basic knowledge.\nA: If I want to know more in detail, what should I do?\nB: I recommend consulting a specialist or reading related books.",
     funFact:"にすぎない (に過(す)ぎない, does not exceed) modestly limits scope. It is a hallmark of humble Japanese expression: たまたまうまくいったにすぎない (it merely happened to work out). Academic papers use it to avoid overstating conclusions. This self-limiting language reflects cultural modesty."},

    {type:"teach", trg:"〜にほかならない", src:"nothing other than ~ / precisely ~", pos:"part", gender:null,
     note:"N2 grammar. Emphatic identification.\nこれは努力(どりょく)の結果(けっか)にほかならない = this is nothing other than the result of effort.",
     example:"A: 成功(せいこう)は日常(にちじょう)の努力(どりょく)の結果(けっか)にほかなりません。\nB: 続(つづ)けることが大事(だいじ)なのですね。\nA: どのような影響(えいきょう)がありましたか？\nB: 社会全体(しゃかいぜんたい)に大(おお)きな影響(えいきょう)を与(あた)えました。\nA: 良(よ)い影響(えいきょう)ですか、悪(わる)い影響(えいきょう)ですか？\nB: 両方(りょうほう)あります。メリットもデメリットもあります。",
     exampleSrc:"A: Success is nothing other than the result of daily effort.\nB: So continuing is what matters.\nA: What kind of impact was there?\nB: It had a big impact on society as a whole.\nA: A good impact or a bad impact?\nB: Both. There are both merits and demerits.",
     funFact:"にほかならない emphatically equates X with Y: 'this IS precisely that.' It is the opposite of にすぎない (merely). While にすぎない downplays, にほかならない emphasizes identity. Together they form a powerful rhetorical pair for academic and formal argumentation."},

    {type:"teach", trg:"〜かねない", src:"might / there is a risk of ~", pos:"part", gender:null,
     note:"N2 grammar. Warning of negative possibility.\n大事故(だいじこ)につながりかねない = could lead to a major accident.",
     example:"A: このままでは事態(じたい)が悪化(あっか)しかねません。\nB: 早(はや)めに対策(たいさく)をとりましょう。\nA: 具体的(ぐたいてき)にはどういうことですか？\nB: つまり、状況(じょうきょう)に応(おう)じて対応(たいおう)を変(か)える必要(ひつよう)があるということです。\nA: なるほど。それは確(たし)かにそうですね。\nB: ええ、柔軟(じゅうなん)な対応(たいおう)が大切(たいせつ)だと思(おも)います。",
     exampleSrc:"A: At this rate, the situation might worsen.\nB: Let's take countermeasures early.\nA: What do you mean specifically?\nB: I mean we need to change our approach depending on the situation.\nA: I see. That is certainly true.\nB: Yes, I think flexible response is important.",
     funFact:"かねない (from かねる, to be unable to) warns of unwanted possibilities. It always implies negative outcomes: 事故(じこ)につながりかねない (could lead to an accident). The related かねる means 'find it difficult to': お受(う)けいたしかねます (I am unable to accept, polite refusal). Both are essential N2 patterns."},

    {type:"teach", trg:"〜をきっかけに", src:"triggered by ~ / taking the opportunity of ~", pos:"part", gender:null,
     note:"N2 grammar. An event sparks a change.\n入学(にゅうがく)をきっかけに = triggered by entering school.",
     example:"A: 日本旅行(にほんりょこう)をきっかけに日本語(にほんご)を始(はじ)めました。\nB: いいきっかけでしたね。\nA: それについてもう少(すこ)し詳(くわ)しく教(おし)えてください。\nB: 例(たと)えば、最近(さいきん)の事例(じれい)を見(み)ると、変化(へんか)が激(はげ)しいです。\nA: そうですか。どう対処(たいしょ)すればいいでしょうか。\nB: まず現状(げんじょう)を把握(はあく)してから、計画(けいかく)を立(た)てましょう。",
     exampleSrc:"A: Triggered by a trip to Japan, I started Japanese.\nB: That was a good trigger.\nA: Please tell me more about that.\nB: For example, looking at recent cases, the changes are dramatic.\nA: Is that so? How should we handle it?\nB: Let's first grasp the current situation, then make a plan.",
     funFact:"きっかけ (切(き)っ掛(か)け) literally means 'cut-hook,' a precise starting point. をきっかけに frames life changes: 結婚(けっこん)をきっかけに (triggered by marriage), 病気(びょうき)をきっかけに (triggered by illness). Japanese life narratives are often structured around きっかけ moments that redirect one's path."},

    {type:"teach", trg:"〜にともなって", src:"along with ~ / accompanying ~", pos:"part", gender:null,
     note:"N2 grammar. Parallel changes.\n高齢化(こうれいか)にともなって = along with aging.",
     example:"A: 技術(ぎじゅつ)の進歩(しんぽ)にともなって、新(あたら)しい問題(もんだい)も生(う)まれています。\nB: 便利(べんり)さとリスクは表裏一体(ひょうりいったい)ですね。\nA: どのような方法(ほうほう)がありますか？\nB: いくつかの選択肢(せんたくし)があります。一番(いちばん)効果的(こうかてき)なのは実践(じっせん)です。\nA: 実践(じっせん)というのは、具体的(ぐたいてき)に何(なに)をすればいいですか？\nB: 毎日(まいにち)少(すこ)しずつ取(と)り組(く)むことが重要(じゅうよう)です。",
     exampleSrc:"A: Along with technological progress, new problems are also arising.\nB: Convenience and risk are two sides of the same coin.\nA: What kinds of methods are there?\nB: There are several options. The most effective is practice.\nA: What specifically should we do in practice?\nB: It is important to work on it a little each day.",
     funFact:"にともなって describes simultaneous, correlated changes. It appears constantly in social commentary: 高齢化(こうれいか)にともなって (with aging population), グローバル化(か)にともなって (with globalization). It elegantly captures how changes in one area ripple into others, reflecting interconnected thinking."},

    {type:"teach", trg:"いわば", src:"so to speak / as it were", pos:"adv", gender:null,
     note:"Introduces a metaphor or analogy.\nFormal and literary.",
     example:"A: 彼(かれ)はいわば、チームの大黒柱(だいこくばしら)です。\nB: なくてはならない存在(そんざい)ですね。\nA: それはいつごろから始(はじ)まったのですか？\nB: 数年前(すうねんまえ)からですが、最近(さいきん)特(とく)に注目(ちゅうもく)されています。\nA: 今後(こんご)どうなると思(おも)いますか？\nB: さらに発展(はってん)すると予想(よそう)されています。",
     exampleSrc:"A: He is, so to speak, the pillar of the team.\nB: An indispensable presence.\nA: When did that start?\nB: It started a few years ago, but it has been getting particular attention recently.\nA: What do you think will happen going forward?\nB: It is expected to develop further.",
     funFact:"いわば (言(い)わば) literally means 'if one were to say.' It introduces metaphors and analogies in formal speech: 日本(にほん)はいわば島(しま)の国(くに) (Japan is, so to speak, a country of islands). Using いわば signals that you are about to use figurative language, preparing the listener for a non-literal expression."},

    {type:"teach", trg:"かえって", src:"on the contrary / rather", pos:"adv", gender:null,
     note:"The result is opposite to expectation.\nかえって悪(わる)くなった = it got worse instead.",
     example:"A: 手伝(てつだ)おうとしたが、かえって迷惑(めいわく)をかけてしまいました。\nB: 気持(きも)ちはわかりますよ。\nA: 何(なに)か問題(もんだい)はありませんでしたか？\nB: いくつか課題(かだい)がありましたが、解決(かいけつ)しました。\nA: どのように解決(かいけつ)したのですか？\nB: チーム全体(ぜんたい)で話(はな)し合(あ)って、最善(さいぜん)の方法(ほうほう)を見(み)つけました。",
     exampleSrc:"A: I tried to help but ended up causing trouble instead.\nB: I understand the feeling.\nA: Were there any problems?\nB: There were some issues, but we resolved them.\nA: How did you resolve them?\nB: We discussed it as a whole team and found the best method.",
     funFact:"かえって (却(かえ)って) signals a paradoxical or contrary outcome: the result was the OPPOSITE of what was intended or expected. 説明(せつめい)したらかえって混乱(こんらん)した (explaining it caused more confusion instead). This word captures life's ironic twists and is common in storytelling and reflection."},

    {type:"teach", trg:"さすがに", src:"as expected / even (someone) must ~", pos:"adv", gender:null,
     note:"Acknowledges that even X has limits or qualities.\nさすがにプロだ = as expected of a pro.",
     example:"A: さすがに十年(じゅうねん)の経験者(けいけんしゃ)ですね。腕(うで)が違(ちが)います。\nB: ありがとうございます。まだまだです。\nA: その点(てん)について、もう少(すこ)し説明(せつめい)していただけますか？\nB: もちろんです。重要(じゅうよう)なのは準備(じゅんび)と計画(けいかく)です。\nA: 準備(じゅんび)にはどのくらい時間(じかん)がかかりますか？\nB: 通常(つうじょう)、一週間(いっしゅうかん)から二週間(にしゅうかん)程度(ていど)です。",
     exampleSrc:"A: As expected of someone with ten years' experience. Your skill is different.\nB: Thank you. I still have a long way to go.\nA: Could you explain that point a bit more?\nB: Of course. What is important is preparation and planning.\nA: How long does preparation take?\nB: Usually about one to two weeks.",
     funFact:"さすがに has two directions: praise (さすがプロだ = as expected of a pro) and limits (さすがに疲(つか)れた = even I am tired now). It acknowledges reputation or expectations. The response まだまだです (I still have far to go) is the quintessential Japanese humble deflection of compliments."},

    {type:"teach", trg:"いざ", src:"when it comes to the moment / when push comes to shove", pos:"adv", gender:null,
     note:"いざというとき = when the moment comes.\nいざ + action = let's do it (decisive).",
     example:"A: いざというときに備(そな)えておきましょう。\nB: そうですね。準備(じゅんび)が大事(だいじ)です。\nA: それは素晴(すば)らしい結果(けっか)ですね。\nB: ありがとうございます。チーム全員(ぜんいん)の努力(どりょく)のおかげです。\nA: 今後(こんご)の目標(もくひょう)は何(なん)ですか？\nB: さらに品質(ひんしつ)を向上(こうじょう)させることです。",
     exampleSrc:"A: Let's prepare for when the moment comes.\nB: Right. Preparation is important.\nA: That is an excellent result.\nB: Thank you. It is thanks to the effort of the whole team.\nA: What are the future goals?\nB: To further improve quality.",
     funFact:"いざ carries dramatic weight: the moment of truth, the decisive instant. いざというとき (when crisis strikes) is used for emergency preparedness. いざ、出発(しゅっぱつ)！(Now then, let's depart!) has a dramatic, adventure-like quality. It appears in samurai literature and remains vibrant in modern Japanese for pivotal moments."},

    {type:"teach", trg:"ようやく", src:"finally / at last (after long effort)", pos:"adv", gender:null,
     note:"Implies the result took a long time and much effort.\nようやく完成(かんせい)した = finally completed.",
     example:"A: 五年間(ごねんかん)勉強(べんきょう)して、ようやくN2に合格(ごうかく)しました。\nB: おめでとうございます！よく頑張(がんば)りましたね。\nA: 他(ほか)に何(なに)か気(き)をつけることはありますか？\nB: はい、期限(きげん)を守(まも)ることが一番(いちばん)大切(たいせつ)です。\nA: 期限(きげん)に間(ま)に合(あ)わない場合(ばあい)はどうしますか？\nB: 早(はや)めに上司(じょうし)に相談(そうだん)して、調整(ちょうせい)をお願(ねが)いします。",
     exampleSrc:"A: After five years of study, I finally passed N2.\nB: Congratulations! You worked hard.\nA: Is there anything else to be careful about?\nB: Yes, meeting deadlines is the most important thing.\nA: What do you do if you cannot meet the deadline?\nB: Consult your supervisor early and ask for an adjustment.",
     funFact:"ようやく (漸(ようや)く) emphasizes the long, difficult journey to a result. It is different from やっと (finally, more casual and slightly impatient) and とうとう (in the end, neutral). ようやく carries respect for the effort: ようやく夢(ゆめ)が叶(かな)った (my dream finally came true, after years of work). A beautiful word for hard-won achievements."},

    // Quiz steps
    {type:"mc", q:"「ざるをえない」はどんな意味(いみ)ですか？",
     opts:["Have no choice but to (reluctant acceptance)","Want to do very much","Never do","Always do"],
     ans:"Have no choice but to (reluctant acceptance)",
     hint:"This classical pattern expresses that the speaker does not want to do something but circumstances force them. There is no alternative."},

    {type:"fb", s:"日本旅行(にほんりょこう)を{1}に日本語(にほんご)を始(はじ)めました。",
     a:["きっかけ"],
     opts:["きっかけ","けっか","げんいん","もくてき"],
     hint:"The trip to Japan was the triggering event that started the speaker's Japanese study. This word means 'trigger/opportunity.'",
     sSrc:"Triggered by a trip to Japan, I started Japanese."},

    {type:"match", pairs:[
      {trg:"〜にすぎない", src:"nothing more than ~"},
      {trg:"〜にほかならない", src:"nothing other than ~"},
      {trg:"〜かねない", src:"might (negative risk)"},
      {trg:"〜わけにはいかない", src:"cannot possibly ~"}
    ]},

    {type:"mc", q:"「かえって」はどんなときに使(つか)いますか？",
     opts:["When asking a question","When the result is opposite to what was expected","When things go as planned","When agreeing with someone"],
     ans:"When the result is opposite to what was expected",
     hint:"This adverb signals a paradoxical or ironic outcome. What happened was the contrary of the intention."},

    {type:"fb", s:"五年間(ごねんかん)勉強(べんきょう)して、{1}N2に合格(ごうかく)しました。",
     a:["ようやく"],
     opts:["ようやく","さすがに","かえって","いざ"],
     hint:"After five long years of effort, the speaker achieved the goal. This adverb emphasizes the duration and difficulty of the journey.",
     sSrc:"After five years of study, I finally passed N2."},

    {type:"mc", q:"「さすがに」にはどんな使(つか)い方(かた)がありますか？",
     opts:["Only criticism","Only surprise","Both praise (as expected of a pro) and limits (even I am tired)","Only praise"],
     ans:"Both praise (as expected of a pro) and limits (even I am tired)",
     hint:"This versatile adverb can acknowledge someone's reputation positively or recognize that e... a capable person has l...."}
  ,{type:"match",pairs:[{trg:"〜ざるをえない",src:"cannot help but ~ / have no choice but to ~"},{trg:"〜にともなって",src:"along with ~ / accompanying ~"},{trg:"いわば",src:"so to speak / as it were"},{trg:"かえって",src:"on the contrary / rather"},{trg:"さすがに",src:"as expected / even (someone) must ~"},{trg:"いざ",src:"when it comes to the moment / when push comes to shove"}]}]
};
export default BATCH11_L1;
