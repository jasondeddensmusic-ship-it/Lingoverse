// Unit 31 Batch 5 Lesson 1: さいばん (Trials & Legal Process)
const BATCH5_L_1 = {
  id:"jav2_u31l_b5_1", title:"さいばん", icon:"🔨", xp:15, board:true,
  steps:[
    {type:"intro", title:"さいばん",
     desc:"Courtroom vocabulary is essential for understanding legal news and JLPT N1 reading passages. Learn about trials, evidence, defendants, and verdicts. Japan's legal system has unique features including lay judge panels and a near-perfect conviction rate.",
     goals:["Use courtroom vocabulary: さいばん, しょうこ, はんけつ","Discuss trials and legal proceedings","Understand Japan's unique legal features"]},

    {type:"teach", trg:"さいばん", src:"trial / court case", pos:"noun", gender:null,
     note:"Kanji: 裁判. さいばんしょ = court. さいばんかん = judge.\nさいばんいんせいど = lay judge system.",
     example:"A: このじけんのさいばんはらいげつはじまります。\nB: ちゅうもくされているじけんですね。",
     exampleSrc:"A: The trial for this case starts next month.\nB: It is a case attracting attention.",
     funFact:"裁判 uses 裁 (cut/judge) and 判 (judge/decide). Japan introduced the さいばんいんせいど (lay judge system) in 2009, where citizens participate in serious criminal trials alongside professional judges. Japan's conviction rate exceeds 99%, which some attribute to thorough prosecution and others criticize as reflecting systemic problems."},

    {type:"teach", trg:"しょうこ", src:"evidence / proof", pos:"noun", gender:null,
     note:"Kanji: 証拠. しょうこをていしゅつする = to submit evidence.\nぶっしょう = physical evidence.",
     example:"A: しょうこがふじゅうぶんなばあい、むざいとなります。\nB: うたがわしきはばっせずのげんそくですね。",
     exampleSrc:"A: If evidence is insufficient, the verdict is not guilty.\nB: That is the principle of 'in doubt, do not punish.'",
     funFact:"証拠 uses 証 (proof/certificate) and 拠 (base/depend on). Japanese criminal law requires proof beyond reasonable doubt (合理的な疑いを超える証明). However, confession (自白 jihaku) historically carried enormous weight, leading to criticism about coerced confessions. Recent reforms require recording of interrogations for serious crimes."},

    {type:"teach", trg:"ひこく", src:"defendant / the accused", pos:"noun", gender:null,
     note:"Kanji: 被告. ひこくにん = defendant (formal). ひこくがわ = defense side.\nIn civil cases: ひこく. In criminal: ひこくにん.",
     example:"A: ひこくにんはむざいをしゅちょうしています。\nB: べんごしはどのようなべんごをしていますか？",
     exampleSrc:"A: The defendant claims innocence.\nB: What kind of defense is the lawyer making?",
     funFact:"被告 uses 被 (receive/suffer) and 告 (tell/accuse): literally 'the one who receives the accusation.' Japanese courtroom language is formal and precise. Before conviction, media uses ようぎしゃ (suspect); after indictment, ひこく (defendant); after conviction, ゆうざいしゃ (convicted person). This linguistic precision reflects legal process stages."},

    {type:"teach", trg:"はんけつ", src:"verdict / judgment / ruling", pos:"noun", gender:null,
     note:"Kanji: 判決. はんけつをいいわたす = to pronounce judgment.\nゆうざいはんけつ = guilty verdict. むざいはんけつ = not guilty verdict.",
     example:"A: さいばんしょはゆうざいのはんけつをいいわたしました。\nB: こうそするつもりはありますか？",
     exampleSrc:"A: The court pronounced a guilty verdict.\nB: Is there an intention to appeal?",
     funFact:"判決 uses 判 (judge) and 決 (decide). Japanese courts have three levels: 地方裁判所 (district), 高等裁判所 (high), and 最高裁判所 (Supreme Court). Defendants can こうそ (appeal) twice. Death penalty はんけつ are still possible in Japan, making it one of the few developed democracies retaining capital punishment."},

    {type:"mc", q:"しょうこがふじゅうぶんなら:", opts:["The defendant should be found not guilty","The defendant is automatically guilty","A new trial starts","The case is dismissed entirely"], ans:"The defendant should be found not guilty",
     hint:"The principle 'in doubt, do not punish' means insufficient evidence leads to acquittal."},

    {type:"teach", trg:"べんごし", src:"lawyer / attorney", pos:"noun", gender:null,
     note:"Kanji: 弁護士. べんご (defense) + し (specialist).\nべんごだんたい = bar association.",
     example:"A: べんごしにそうだんしたほうがいいですよ。\nB: しりあいにいいべんごしがいるのでしょうかいします。",
     exampleSrc:"A: You should consult a lawyer.\nB: I know a good lawyer among my acquaintances, so I will introduce them.",
     funFact:"弁護士 uses 弁 (speak/argue), 護 (protect), and 士 (professional). Becoming a べんごし requires passing Japan's notoriously difficult bar exam (司法試験 shihou shiken). Japan has far fewer lawyers per capita than the US: about 43,000 vs. America's 1.3 million. This scarcity makes legal services expensive and less accessible."},

    {type:"teach", trg:"こうそ", src:"appeal (to a higher court)", pos:"noun", gender:null,
     note:"Kanji: 控訴. こうそする = to appeal.\nこうそしん = appeal trial. さいこうさいへのじょうこく = appeal to Supreme Court.",
     example:"A: ひこくがわははんけつをふふくとしてこうそしました。\nB: こうとうさいばんしょでのしんりがはじまりますね。",
     exampleSrc:"A: The defense appealed, dissatisfied with the verdict.\nB: The hearing at the high court will begin.",
     funFact:"控訴 uses 控 (restrain/appeal) and 訴 (sue/appeal). Japan's three-tier court system allows two appeals: こうそ (to high court) and じょうこく (to Supreme Court). The Supreme Court (最高裁判所) has 15 justices. Unlike the US, Japan's こうそ allows retrial of facts, not just legal questions. Most criminal こうそ are rejected, maintaining the high conviction rate."},

    {type:"teach", trg:"けいばつ", src:"punishment / penalty / criminal sanction", pos:"noun", gender:null,
     note:"Kanji: 刑罰. けいばつをかす = to impose punishment.\nきんこけい = imprisonment. ばっきん = fine.",
     example:"A: はんざいのじゅうだいさにおうじたけいばつがかされます。\nB: こうへいなりょうけいがじゅうようですね。",
     exampleSrc:"A: Punishment is imposed according to the severity of the crime.\nB: Fair sentencing is important.",
     funFact:"刑罰 uses 刑 (punishment/penalty) and 罰 (punishment). Japanese sentencing considers: the crime itself, the criminal's background, remorse (反省 hansei), and likelihood of rehabilitation. 反省 (hansei, self-reflection) carries enormous weight in Japanese courts. A defendant who shows genuine はんせい may receive a lighter sentence. This reflects the cultural value placed on self-improvement."},

    {type:"tip", title:"Japanese Legal System Basics",
     text:"Court levels:\nちほうさいばんしょ = district court (first trial)\nこうとうさいばんしょ = high court (appeal)\nさいこうさいばんしょ = Supreme Court (final appeal)\n\nKey people:\nさいばんかん = judge\nけんじ / けんさつかん = prosecutor\nべんごし = defense lawyer\nさいばんいん = lay judge (citizen)\n\nProcess:\nきそ = indictment\nこうはん = trial hearing\nはんけつ = verdict\nこうそ = appeal\n\nUnique features:\n99%+ conviction rate\nさいばんいんせいど (lay judge system since 2009)"},

    {type:"teach", trg:"はんせい", src:"self-reflection / remorse / introspection", pos:"noun", gender:null,
     note:"Kanji: 反省. はんせいする = to reflect on oneself.\nふかくはんせいしている = deeply reflecting/remorseful.",
     example:"A: はんせいなくしてせいちょうはありません。\nB: あやまちからまなぶことがだいじですね。",
     exampleSrc:"A: Without self-reflection there is no growth.\nB: Learning from mistakes is important.",
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
