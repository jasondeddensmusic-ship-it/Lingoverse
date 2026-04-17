// Unit 31 Batch 5 Lesson 1: さいばん (Trials & Legal Process)
const BATCH5_L_1 = {
  id:"jav2_u31l_b5_1", title:"さいばん", icon:"🔨", xp:15, board:true,
  steps:[
    {type:"intro", title:"さいばん",
     desc:"Courtroom vocabulary is essential for understanding legal news and JLPT N1 reading passages. Learn about trials, evidence, defendants, and verdicts. Japan's legal system has unique features including lay judge panels and a near-perfect conviction rate.",
     goals:["Use courtroom vocabulary: さいばん, しょうこ, はんけつ","Discuss trials and legal proceedings","Understand Japan's unique legal features"]},

    {type:"teach", trg:"さいばん", src:"trial / court case", pos:"noun", gender:null,
     note:"Kanji: 裁判. さいばんしょ = court. さいばんかん = judge.\nさいばんいんせいど = lay judge system.",
     example:"A: このじけんのさいばんはらいげつはじまります。\nB: ちゅうもくされているじけんですね。\nA: 今後(こんご)の展望(てんぼう)についてお聞(き)かせください。\nB: 今後(こんご)はさらに国際化(こくさいか)が進(すす)むと思(おも)います。\nA: それに対(たい)してどのような対策(たいさく)が必要(ひつよう)ですか？\nB: 語学力(ごがくりょく)の向上(こうじょう)と異文化理解(いぶんかりかい)が不可欠(ふかけつ)です。",
     exampleSrc:"A: The trial for this case starts next month.\nB: It is a case attracting attention.\nA: Please tell me about future prospects.\nB: I think internationalization will progress further going forward.\nA: What measures are needed for that?\nB: Improving language skills and cross-cultural understanding are essential.",
     funFact:"裁判 uses 裁 (cut/judge) and 判 (judge/decide). Japan introduced the さいばんいんせいど (lay judge system) in 2009, where citizens participate in serious criminal trials alongside professional judges. Japan's conviction rate exceeds 99%, which some attribute to thorough prosecution and others criticize as reflecting systemic problems."},

    {type:"teach", trg:"しょうこ", src:"evidence / proof", pos:"noun", gender:null,
     note:"Kanji: 証拠. しょうこをていしゅつする = to submit evidence.\nぶっしょう = physical evidence.",
     example:"A: しょうこがふじゅうぶんなばあい、むざいとなります。\nB: うたがわしきはばっせずのげんそくですね。\nA: それは予想外(よそうがい)の結果(けっか)ですね。\nB: はい、私(わたし)も驚(おどろ)きました。原因(げんいん)を調(しら)べています。\nA: いつごろ原因(げんいん)が分(わ)かりそうですか？\nB: 今週中(こんしゅうちゅう)には分析(ぶんせき)結果(けっか)が出(で)る予定(よてい)です。",
     exampleSrc:"A: If evidence is insufficient, the verdict is not guilty.\nB: That is the principle of 'in doubt, do not punish.'\nA: That is an unexpected result.\nB: Yes, I was surprised too. We are investigating the cause.\nA: When do you think you will know the cause?\nB: The analysis results are expected to come out by the end of this week.",
     funFact:"証拠 uses 証 (proof/certificate) and 拠 (base/depend on). Japanese criminal law requires proof beyond reasonable doubt (合理的な疑いを超える証明). However, confession (自白 jihaku) historically carried enormous weight, leading to criticism about coerced confessions. Recent reforms require recording of interrogations for serious crimes."},

    {type:"teach", trg:"ひこく", src:"defendant / the accused", pos:"noun", gender:null,
     note:"Kanji: 被告. ひこくにん = defendant (formal). ひこくがわ = defense side.\nIn civil cases: ひこく. In criminal: ひこくにん.",
     example:"A: ひこくにんはむざいをしゅちょうしています。\nB: べんごしはどのようなべんごをしていますか？\nA: その分野(ぶんや)についてどのくらいご存(ぞん)じですか？\nB: 専門(せんもん)ではありませんが、基本的(きほんてき)な知識(ちしき)はあります。\nA: もっと詳(くわ)しく知(し)りたい場合(ばあい)は、どうすればいいですか？\nB: 専門家(せんもんか)に相談(そうだん)するか、関連(かんれん)の書籍(しょせき)を読(よ)むことをお勧(すす)めします。",
     exampleSrc:"A: The defendant claims innocence.\nB: What kind of defense is the lawyer making?\nA: How much do you know about that field?\nB: It is not my specialty, but I have basic knowledge.\nA: If I want to know more in detail, what should I do?\nB: I recommend consulting a specialist or reading related books.",
     funFact:"被告 uses 被 (receive/suffer) and 告 (tell/accuse): literally 'the one who receives the accusation.' Japanese courtroom language is formal and precise. Before conviction, media uses ようぎしゃ (suspect); after indictment, ひこく (defendant); after conviction, ゆうざいしゃ (convicted person). This linguistic precision reflects legal process stages."},

    {type:"teach", trg:"はんけつ", src:"verdict / judgment / ruling", pos:"noun", gender:null,
     note:"Kanji: 判決. はんけつをいいわたす = to pronounce judgment.\nゆうざいはんけつ = guilty verdict. むざいはんけつ = not guilty verdict.",
     example:"A: さいばんしょはゆうざいのはんけつをいいわたしました。\nB: こうそするつもりはありますか？\nA: どのような影響(えいきょう)がありましたか？\nB: 社会全体(しゃかいぜんたい)に大(おお)きな影響(えいきょう)を与(あた)えました。\nA: 良(よ)い影響(えいきょう)ですか、悪(わる)い影響(えいきょう)ですか？\nB: 両方(りょうほう)あります。メリットもデメリットもあります。",
     exampleSrc:"A: The court pronounced a guilty verdict.\nB: Is there an intention to appeal?\nA: What kind of impact was there?\nB: It had a big impact on society as a whole.\nA: A good impact or a bad impact?\nB: Both. There are both merits and demerits.",
     funFact:"判決 uses 判 (judge) and 決 (decide). Japanese courts have three levels: 地方裁判所 (district), 高等裁判所 (high), and 最高裁判所 (Supreme Court). Defendants can こうそ (appeal) twice. Death penalty はんけつ are still possible in Japan, making it one of the few developed democracies retaining capital punishment."},

    {type:"mc", q:"しょうこがふじゅうぶんなら:", opts:["The defendant should be found not guilty","The defendant is automatically guilty","A new trial starts","The case is dismissed entirely"], ans:"The defendant should be found not guilty",
     hint:"The principle 'in doubt, do not punish' means insufficient evidence leads to acquittal."},

    {type:"teach", trg:"べんごし", src:"lawyer / attorney", pos:"noun", gender:null,
     note:"Kanji: 弁護士. べんご (defense) + し (specialist).\nべんごだんたい = bar association.",
     example:"A: べんごしにそうだんしたほうがいいですよ。\nB: しりあいにいいべんごしがいるのでしょうかいします。\nA: 具体的(ぐたいてき)にはどういうことですか？\nB: つまり、状況(じょうきょう)に応(おう)じて対応(たいおう)を変(か)える必要(ひつよう)があるということです。\nA: なるほど。それは確(たし)かにそうですね。\nB: ええ、柔軟(じゅうなん)な対応(たいおう)が大切(たいせつ)だと思(おも)います。",
     exampleSrc:"A: You should consult a lawyer.\nB: I know a good lawyer among my acquaintances, so I will introduce them.\nA: What do you mean specifically?\nB: I mean we need to change our approach depending on the situation.\nA: I see. That is certainly true.\nB: Yes, I think flexible response is important.",
     funFact:"弁護士 uses 弁 (speak/argue), 護 (protect), and 士 (professional). Becoming a べんごし requires passing Japan's notoriously difficult bar exam (司法試験 shihou shiken). Japan has far fewer lawyers per capita than the US: about 43,000 vs. America's 1.3 million. This scarcity makes legal services expensive and less accessible."},

    {type:"teach", trg:"こうそ", src:"appeal (to a higher court)", pos:"noun", gender:null,
     note:"Kanji: 控訴. こうそする = to appeal.\nこうそしん = appeal trial. さいこうさいへのじょうこく = appeal to Supreme Court.",
     example:"A: ひこくがわははんけつをふふくとしてこうそしました。\nB: こうとうさいばんしょでのしんりがはじまりますね。\nA: それについてもう少(すこ)し詳(くわ)しく教(おし)えてください。\nB: 例(たと)えば、最近(さいきん)の事例(じれい)を見(み)ると、変化(へんか)が激(はげ)しいです。\nA: そうですか。どう対処(たいしょ)すればいいでしょうか。\nB: まず現状(げんじょう)を把握(はあく)してから、計画(けいかく)を立(た)てましょう。",
     exampleSrc:"A: The defense appealed, dissatisfied with the verdict.\nB: The hearing at the high court will begin.\nA: Please tell me more about that.\nB: For example, looking at recent cases, the changes are dramatic.\nA: Is that so? How should we handle it?\nB: Let's first grasp the current situation, then make a plan.",
     funFact:"控訴 uses 控 (restrain/appeal) and 訴 (sue/appeal). Japan's three-tier court system allows two appeals: こうそ (to high court) and じょうこく (to Supreme Court). The Supreme Court (最高裁判所) has 15 justices. Unlike the US, Japan's こうそ allows retrial of facts, not just legal questions. Most criminal こうそ are rejected, maintaining the high conviction rate."},

    {type:"teach", trg:"けいばつ", src:"punishment / penalty / criminal sanction", pos:"noun", gender:null,
     note:"Kanji: 刑罰. けいばつをかす = to impose punishment.\nきんこけい = imprisonment. ばっきん = fine.",
     example:"A: はんざいのじゅうだいさにおうじたけいばつがかされます。\nB: こうへいなりょうけいがじゅうようですね。\nA: どのような方法(ほうほう)がありますか？\nB: いくつかの選択肢(せんたくし)があります。一番(いちばん)効果的(こうかてき)なのは実践(じっせん)です。\nA: 実践(じっせん)というのは、具体的(ぐたいてき)に何(なに)をすればいいですか？\nB: 毎日(まいにち)少(すこ)しずつ取(と)り組(く)むことが重要(じゅうよう)です。",
     exampleSrc:"A: Punishment is imposed according to the severity of the crime.\nB: Fair sentencing is important.\nA: What kinds of methods are there?\nB: There are several options. The most effective is practice.\nA: What specifically should we do in practice?\nB: It is important to work on it a little each day.",
     funFact:"刑罰 uses 刑 (punishment/penalty) and 罰 (punishment). Japanese sentencing considers: the crime itself, the criminal's background, remorse (反省 hansei), and likelihood of rehabilitation. 反省 (hansei, self-reflection) carries enormous weight in Japanese courts. A defendant who shows genuine はんせい may receive a lighter sentence. This reflects the cultural value placed on self-improvement."},

    {type:"tip", title:"Japanese Legal System Basics",
     text:"Court levels:\nちほうさいばんしょ = district court (first trial)\nこうとうさいばんしょ = high court (appeal)\nさいこうさいばんしょ = Supreme Court (final appeal)\n\nKey people:\nさいばんかん = judge\nけんじ / けんさつかん = prosecutor\nべんごし = defense lawyer\nさいばんいん = lay judge (citizen)\n\nProcess:\nきそ = indictment\nこうはん = trial hearing\nはんけつ = verdict\nこうそ = appeal\n\nUnique features:\n99%+ conviction rate\nさいばんいんせいど (lay judge system since 2009)"},

    {type:"teach", trg:"はんせい", src:"self-reflection / remorse / introspection", pos:"noun", gender:null,
     note:"Kanji: 反省. はんせいする = to reflect on oneself.\nふかくはんせいしている = deeply reflecting/remorseful.",
     example:"A: はんせいなくしてせいちょうはありません。\nB: あやまちからまなぶことがだいじですね。\nA: それはいつごろから始(はじ)まったのですか？\nB: 数年前(すうねんまえ)からですが、最近(さいきん)特(とく)に注目(ちゅうもく)されています。\nA: 今後(こんご)どうなると思(おも)いますか？\nB: さらに発展(はってん)すると予想(よそう)されています。",
     exampleSrc:"A: Without self-reflection there is no growth.\nB: Learning from mistakes is important.\nA: When did that start?\nB: It started a few years ago, but it has been getting particular attention recently.\nA: What do you think will happen going forward?\nB: It is expected to develop further.",
     funFact:"反省 is one of Japan's most culturally significant concepts. It goes beyond 'sorry' to mean genuine introspection about one's actions. Politicians bow deeply and declare ふかくはんせいしております (I am deeply reflecting) during scandals. Schools teach はんせい as a daily practice. Corporate apology press conferences center on showing authentic はんせい. Without visible はんせい, Japanese society does not forgive."},

    {type:"fb", s:"さいばんしょはゆうざいの{1}をいいわたしました。\n(The court pronounced a guilty verdict.)", a:"はんけつ", opts:["はんけつ","しょうこ","こうそ","けいばつ"], sSrc:"The court pronounced a guilty verdict.",
     hint:"The word for the court's formal decision/ruling on a case."},

    {type:"mc", q:"さいばんいんせいど is:", opts:["A system where citizens participate in criminal trials","An online court system","A system for appeals only","A military tribunal system"], ans:"A system where citizens participate in criminal trials",
     hint:"This s..., introduced in 2009, involves lay judges alongside professional judges."},

    {type:"match", pairs:[{trg:"さいばん",src:"trial"},{trg:"しょうこ",src:"evidence"},{trg:"べんごし",src:"lawyer"},{trg:"はんけつ",src:"verdict"}]},

    {type:"fb", s:"ひこくがわははんけつをふふくとして{1}しました。\n(The defense appealed, dissatisfied with the verdict.)", a:"こうそ", opts:["こうそ","さいばん","きそ","こうはん"], sSrc:"The defense appealed, dissatisfied with the verdict.",
     hint:"The legal term for taking a case to a higher court for review."},

    {type:"mc", q:"はんせい in Japanese culture means:", opts:["Genuine self-reflection and remorse","A simple apology","Legal punishment","Financial compensation"], ans:"Genuine self-reflection and remorse",
     hint:"This concept goes deeper than saying sorry; it requires visible introspection and change."}
  ]
};
export default BATCH5_L_1;
