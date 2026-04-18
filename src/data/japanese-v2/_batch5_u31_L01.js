// Unit 31 Batch 5 Lesson 1: 裁判(さいばん) (Trials & Legal Process)
const BATCH5_L_1 = {
  id:"jav2_u31l_b5_1", title:"裁判(さいばん)", icon:"🔨", xp:15, board:true,
  steps:[
    {type:"intro", title:"裁判(さいばん)",
     desc:"Courtroom vocabulary is essential for understanding legal news and JLPT N1 reading passages. Learn about trials, evidence, defendants, and verdicts. Japan's legal system has unique features including lay judge panels and a near-perfect conviction rate.",
     goals:["Use courtroom vocabulary: 裁判(さいばん), 証拠(しょうこ), 判決(はんけつ)","Discuss trials and legal proceedings","Understand Japan's unique legal features"]},

    {type:"teach", trg:"裁判(さいばん)", src:"trial / court case", pos:"noun", gender:null,
     note:"Kanji: 裁判(さいばん). 裁判所(さいばんしょ) = court. 裁判官(さいばんかん) = judge.\n裁判員制度(さいばんいんせいど) = lay judge system.",
     example:"A: この事件(じけん)の裁判(さいばん)は来月(らいげつ)始(はじ)まります。\nB: 注目(ちゅうもく)されている事件(じけん)ですね。\nA: 今後(こんご)の展望(てんぼう)についてお聞(き)かせください。\nB: 今後(こんご)はさらに国際化(こくさいか)が進(すす)むと思(おも)います。\nA: それに対(たい)してどのような対策(たいさく)が必要(ひつよう)ですか？\nB: 語学力(ごがくりょく)の向上(こうじょう)と異文化理解(いぶんかりかい)が不可欠(ふかけつ)です。",
     exampleSrc:"A: The trial for this case starts next month.\nB: It is a case attracting attention.\nA: Please tell me about future prospects.\nB: I think internationalization will progress further going forward.\nA: What measures are needed for that?\nB: Improving language skills and cross-cultural understanding are essential.",
     funFact:"裁判(さいばん) uses 裁(さい) (cut/judge) and 判(ばん) (judge/decide). Japan introduced the 裁判員制度(さいばんいんせいど) (lay judge system) in 2009, where citizens participate in serious criminal trials alongside professional judges. Japan's conviction rate exceeds 99%, which some attribute to thorough prosecution and others criticize as reflecting systemic problems."},

    {type:"teach", trg:"証拠(しょうこ)", src:"evidence / proof", pos:"noun", gender:null,
     note:"Kanji: 証拠(しょうこ). 証拠(しょうこ)を提出(ていしゅつ)する = to submit evidence.\n物証(ぶっしょう) = physical evidence.",
     example:"A: 証拠(しょうこ)が不十分(ふじゅうぶん)な場合(ばあい)、無罪(むざい)となります。\nB: 疑(うたが)わしきは罰(ばっ)せずの原則(げんそく)ですね。\nA: それは予想外(よそうがい)の結果(けっか)ですね。\nB: はい、私(わたし)も驚(おどろ)きました。原因(げんいん)を調(しら)べています。\nA: いつごろ原因(げんいん)が分(わ)かりそうですか？\nB: 今週中(こんしゅうちゅう)には分析(ぶんせき)結果(けっか)が出(で)る予定(よてい)です。",
     exampleSrc:"A: If evidence is insufficient, the verdict is not guilty.\nB: That is the principle of 'in doubt, do not punish.'\nA: That is an unexpected result.\nB: Yes, I was surprised too. We are investigating the cause.\nA: When do you think you will know the cause?\nB: The analysis results are expected to come out by the end of this week.",
     funFact:"証拠(しょうこ) uses 証(しょう) (proof/certificate) and 拠(きょ) (base/depend on). Japanese criminal law requires proof beyond reasonable doubt (合理的(ごうりてき)な疑(うたが)いを超(こ)える証明(しょうめい)). However, confession (自白(じはく)) historically carried enormous weight, leading to criticism about coerced confessions. Recent reforms require recording of interrogations for serious crimes."},

    {type:"teach", trg:"被告(ひこく)", src:"defendant / the accused", pos:"noun", gender:null,
     note:"Kanji: 被告(ひこく). 被告人(ひこくにん) = defendant (formal). 被告側(ひこくがわ) = defense side.\nIn civil cases: 被告(ひこく). In criminal: 被告人(ひこくにん).",
     example:"A: 被告人(ひこくにん)は無罪(むざい)を主張(しゅちょう)しています。\nB: 弁護士(べんごし)はどのような弁護(べんご)をしていますか？\nA: その分野(ぶんや)についてどのくらいご存(ぞん)じですか？\nB: 専門(せんもん)ではありませんが、基本的(きほんてき)な知識(ちしき)はあります。\nA: もっと詳(くわ)しく知(し)りたい場合(ばあい)は、どうすればいいですか？\nB: 専門家(せんもんか)に相談(そうだん)するか、関連(かんれん)の書籍(しょせき)を読(よ)むことをお勧(すす)めします。",
     exampleSrc:"A: The defendant claims innocence.\nB: What kind of defense is the lawyer making?\nA: How much do you know about that field?\nB: It is not my specialty, but I have basic knowledge.\nA: If I want to know more in detail, what should I do?\nB: I recommend consulting a specialist or reading related books.",
     funFact:"被告(ひこく) uses 被(ひ) (receive/suffer) and 告(こく) (tell/accuse): literally 'the one who receives the accusation.' Japanese courtroom language is formal and precise. Before conviction, media uses 容疑者(ようぎしゃ) (suspect); after indictment, 被告(ひこく) (defendant); after conviction, 有罪者(ゆうざいしゃ) (convicted person). This linguistic precision reflects legal process stages."},

    {type:"teach", trg:"判決(はんけつ)", src:"verdict / judgment / ruling", pos:"noun", gender:null,
     note:"Kanji: 判決(はんけつ). 判決(はんけつ)を言(い)い渡(わた)す = to pronounce judgment.\n有罪判決(ゆうざいはんけつ) = guilty verdict. 無罪判決(むざいはんけつ) = not guilty verdict.",
     example:"A: 裁判所(さいばんしょ)は有罪(ゆうざい)の判決(はんけつ)を言(い)い渡(わた)しました。\nB: 控訴(こうそ)するつもりはありますか？\nA: どのような影響(えいきょう)がありましたか？\nB: 社会全体(しゃかいぜんたい)に大(おお)きな影響(えいきょう)を与(あた)えました。\nA: 良(よ)い影響(えいきょう)ですか、悪(わる)い影響(えいきょう)ですか？\nB: 両方(りょうほう)あります。メリットもデメリットもあります。",
     exampleSrc:"A: The court pronounced a guilty verdict.\nB: Is there an intention to appeal?\nA: What kind of impact was there?\nB: It had a big impact on society as a whole.\nA: A good impact or a bad impact?\nB: Both. There are both merits and demerits.",
     funFact:"判決(はんけつ) uses 判(はん) (judge) and 決(けつ) (decide). Japanese courts have three levels: 地方裁判所(ちほうさいばんしょ) (district), 高等裁判所(こうとうさいばんしょ) (high), and 最高裁判所(さいこうさいばんしょ) (Supreme Court). Defendants can 控訴(こうそ) (appeal) twice. Death penalty 判決(はんけつ) are still possible in Japan, making it one of the few developed democracies retaining capital punishment."},

    {type:"mc", q:"証拠(しょうこ)が不十分(ふじゅうぶん)なら:", opts:["The defendant should be found not guilty","The defendant is automatically guilty","A new trial starts","The case is dismissed entirely"], ans:"The defendant should be found not guilty",
     hint:"The principle 'in doubt, do not punish' means insufficient evidence leads to acquittal."},

    {type:"teach", trg:"弁護士(べんごし)", src:"lawyer / attorney", pos:"noun", gender:null,
     note:"Kanji: 弁護士(べんごし). 弁護(べんご) (defense) + 士(し) (specialist).\n弁護団体(べんごだんたい) = bar association.",
     example:"A: 弁護士(べんごし)に相談(そうだん)したほうがいいですよ。\nB: 知(し)り合(あ)いにいい弁護士(べんごし)がいるので紹介(しょうかい)します。\nA: 具体的(ぐたいてき)にはどういうことですか？\nB: つまり、状況(じょうきょう)に応(おう)じて対応(たいおう)を変(か)える必要(ひつよう)があるということです。\nA: なるほど。それは確(たし)かにそうですね。\nB: ええ、柔軟(じゅうなん)な対応(たいおう)が大切(たいせつ)だと思(おも)います。",
     exampleSrc:"A: You should consult a lawyer.\nB: I know a good lawyer among my acquaintances, so I will introduce them.\nA: What do you mean specifically?\nB: I mean we need to change our approach depending on the situation.\nA: I see. That is certainly true.\nB: Yes, I think flexible response is important.",
     funFact:"弁護士(べんごし) uses 弁(べん) (speak/argue), 護(ご) (protect), and 士(し) (professional). Becoming a 弁護士(べんごし) requires passing Japan's notoriously difficult bar exam (司法試験(しほうしけん)). Japan has far fewer lawyers per capita than the US: about 43,000 vs. America's 1.3 million. This scarcity makes legal services expensive and less accessible."},

    {type:"teach", trg:"控訴(こうそ)", src:"appeal (to a higher court)", pos:"noun", gender:null,
     note:"Kanji: 控訴(こうそ). 控訴(こうそ)する = to appeal.\n控訴審(こうそしん) = appeal trial. 最高裁(さいこうさい)への上告(じょうこく) = appeal to Supreme Court.",
     example:"A: 被告側(ひこくがわ)は判決(はんけつ)を不服(ふふく)として控訴(こうそ)しました。\nB: 高等裁判所(こうとうさいばんしょ)での審理(しんり)が始(はじ)まりますね。\nA: それについてもう少(すこ)し詳(くわ)しく教(おし)えてください。\nB: 例(たと)えば、最近(さいきん)の事例(じれい)を見(み)ると、変化(へんか)が激(はげ)しいです。\nA: そうですか。どう対処(たいしょ)すればいいでしょうか。\nB: まず現状(げんじょう)を把握(はあく)してから、計画(けいかく)を立(た)てましょう。",
     exampleSrc:"A: The defense appealed, dissatisfied with the verdict.\nB: The hearing at the high court will begin.\nA: Please tell me more about that.\nB: For example, looking at recent cases, the changes are dramatic.\nA: Is that so? How should we handle it?\nB: Let's first grasp the current situation, then make a plan.",
     funFact:"控訴(こうそ) uses 控(こう) (restrain/appeal) and 訴(そ) (sue/appeal). Japan's three-tier court system allows two appeals: 控訴(こうそ) (to high court) and 上告(じょうこく) (to Supreme Court). The Supreme Court (最高裁判所(さいこうさいばんしょ)) has 15 justices. Unlike the US, Japan's 控訴(こうそ) allows retrial of facts, not just legal questions. Most criminal 控訴(こうそ) are rejected, maintaining the high conviction rate."},

    {type:"teach", trg:"刑罰(けいばつ)", src:"punishment / penalty / criminal sanction", pos:"noun", gender:null,
     note:"Kanji: 刑罰(けいばつ). 刑罰(けいばつ)を科(か)す = to impose punishment.\n禁固刑(きんこけい) = imprisonment. 罰金(ばっきん) = fine.",
     example:"A: 犯罪(はんざい)の重大(じゅうだい)さに応(おう)じた刑罰(けいばつ)が科(か)されます。\nB: 公平(こうへい)な量刑(りょうけい)が重要(じゅうよう)ですね。\nA: どのような方法(ほうほう)がありますか？\nB: いくつかの選択肢(せんたくし)があります。一番(いちばん)効果的(こうかてき)なのは実践(じっせん)です。\nA: 実践(じっせん)というのは、具体的(ぐたいてき)に何(なに)をすればいいですか？\nB: 毎日(まいにち)少(すこ)しずつ取(と)り組(く)むことが重要(じゅうよう)です。",
     exampleSrc:"A: Punishment is imposed according to the severity of the crime.\nB: Fair sentencing is important.\nA: What kinds of methods are there?\nB: There are several options. The most effective is practice.\nA: What specifically should we do in practice?\nB: It is important to work on it a little each day.",
     funFact:"刑罰(けいばつ) uses 刑(けい) (punishment/penalty) and 罰(ばつ) (punishment). Japanese sentencing considers: the crime itself, the criminal's background, remorse (反省(はんせい)) and likelihood of rehabilitation. 反省(はんせい) (self-reflection) carries enormous weight in Japanese courts. A defendant who shows genuine 反省(はんせい) may receive a lighter sentence. This reflects the cultural value placed on self-improvement."},

    {type:"tip", title:"Japanese Legal System Basics",
     text:"Court levels:\n地方裁判所(ちほうさいばんしょ) = district court (first trial)\n高等裁判所(こうとうさいばんしょ) = high court (appeal)\n最高裁判所(さいこうさいばんしょ) = Supreme Court (final appeal)\n\nKey people:\n裁判官(さいばんかん) = judge\n検事(けんじ)/検察官(けんさつかん) = prosecutor\n弁護士(べんごし) = defense lawyer\n裁判員(さいばんいん) = lay judge (citizen)\n\nProcess:\n起訴(きそ) = indictment\n公判(こうはん) = trial hearing\n判決(はんけつ) = verdict\n控訴(こうそ) = appeal\n\nUnique features:\n99%+ conviction rate\n裁判員制度(さいばんいんせいど) (lay judge system since 2009)"},

    {type:"teach", trg:"反省(はんせい)", src:"self-reflection / remorse / introspection", pos:"noun", gender:null,
     note:"Kanji: 反省(はんせい). 反省(はんせい)する = to reflect on oneself.\n深(ふか)く反省(はんせい)している = deeply reflecting/remorseful.",
     example:"A: 反省(はんせい)なくして成長(せいちょう)はありません。\nB: 過(あやま)ちから学(まな)ぶことが大事(だいじ)ですね。\nA: それはいつごろから始(はじ)まったのですか？\nB: 数年前(すうねんまえ)からですが、最近(さいきん)特(とく)に注目(ちゅうもく)されています。\nA: 今後(こんご)どうなると思(おも)いますか？\nB: さらに発展(はってん)すると予想(よそう)されています。",
     exampleSrc:"A: Without self-reflection there is no growth.\nB: Learning from mistakes is important.\nA: When did that start?\nB: It started a few years ago, but it has been getting particular attention recently.\nA: What do you think will happen going forward?\nB: It is expected to develop further.",
     funFact:"反省(はんせい) is one of Japan's most culturally significant concepts. It goes beyond 'sorry' to mean genuine introspection about one's actions. Politicians bow deeply and declare 深(ふか)く反省(はんせい)しております (I am deeply reflecting) during scandals. Schools teach 反省(はんせい) as a daily practice. Corporate apology press conferences center on showing authentic 反省(はんせい). Without visible 反省(はんせい), Japanese society does not forgive."},

    {type:"fb", s:"裁判所(さいばんしょ)は有罪(ゆうざい)の{1}を言(い)い渡(わた)しました。\n(The court pronounced a guilty verdict.)", a:"判決(はんけつ)", opts:["判決(はんけつ)","証拠(しょうこ)","控訴(こうそ)","刑罰(けいばつ)"], sSrc:"The court pronounced a guilty verdict.",
     hint:"The word for the court's formal decision/ruling on a case."},

    {type:"mc", q:"裁判員制度(さいばんいんせいど) is:", opts:["A system where citizens participate in criminal trials","An online court system","A system for appeals only","A military tribunal system"], ans:"A system where citizens participate in criminal trials",
     hint:"This s..., introduced in 2009, involves lay judges alongside professional judges."},

    {type:"match", pairs:[{trg:"裁判(さいばん)",src:"trial"},{trg:"証拠(しょうこ)",src:"evidence"},{trg:"弁護士(べんごし)",src:"lawyer"},{trg:"判決(はんけつ)",src:"verdict"}]},

    {type:"fb", s:"被告側(ひこくがわ)は判決(はんけつ)を不服(ふふく)として{1}しました。\n(The defense appealed, dissatisfied with the verdict.)", a:"控訴(こうそ)", opts:["控訴(こうそ)","裁判(さいばん)","起訴(きそ)","公判(こうはん)"], sSrc:"The defense appealed, dissatisfied with the verdict.",
     hint:"The legal term for taking a case to a higher court for review."},

    {type:"mc", q:"反省(はんせい) in Japanese culture means:", opts:["Genuine self-reflection and remorse","A simple apology","Legal punishment","Financial compensation"], ans:"Genuine self-reflection and remorse",
     hint:"This concept goes deeper than saying sorry; it requires visible introspection and change."}
  ,{type:"match",pairs:[{trg:"被告(ひこく)",src:"defendant / the accused"},{trg:"刑罰(けいばつ)",src:"punishment / penalty / criminal sanction"},{trg:"反省(はんせい)",src:"self-reflection / remorse / introspection"}]}]
};
export default BATCH5_L_1;
