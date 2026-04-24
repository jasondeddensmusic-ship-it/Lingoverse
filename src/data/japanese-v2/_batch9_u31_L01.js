// Batch 9 – Unit 31 (B2): 裁判(さいばん)
const BATCH9_L1 = {
  id:"jav2_u31l_b9_1", title:"裁判(さいばん)", icon:"⚖️", xp:15, board:true,
  steps:[
    {type:"intro", title:"裁判(さいばん)",
     desc:"Legal system and court vocabulary",
     goals:["Master key vocabulary for this topic","Use new words in context","Build reading comprehension"]},

    {type:"teach", trg:"裁判官(さいばんかん)", src:"judge", pos:"noun", gender:null,
     note:"裁判(さいばん) trial + 官(かん) official.\nLifetime tenure until age 65.",
     example:"A: 裁判官(さいばんかん)について考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: それは素晴(すば)らしい結果(けっか)ですね。\nB: ありがとうございます。チーム全員(ぜんいん)の努力(どりょく)のおかげです。\nA: 今後(こんご)の目標(もくひょう)は何(なん)ですか？\nB: さらに品質(ひんしつ)を向上(こうじょう)させることです。",
     exampleSrc:"A: Let us think about judge.\nB: It is an important theme.\nA: That is an excellent result.\nB: Thank you. It is thanks to the effort of the whole team.\nA: What are the future goals?\nB: To further improve quality.",
     funFact:"裁(さば)く (to judge) + 判(はん) (decision) + 官(かん) (official). Japanese 裁判官(さいばんかん) have lifetime tenure until age 65 and are appointed via 司法試験(しほうしけん), an exam with historically under 3% pass rate."},

    {type:"teach", trg:"弁護士(べんごし)", src:"lawyer", pos:"noun", gender:null,
     note:"弁(べん) to argue + 護(ご) to defend + 士(し) professional.\nRelatively few per capita in Japan.",
     example:"A: 弁護士(べんごし)について考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: 他(ほか)に何(なに)か気(き)をつけることはありますか？\nB: はい、期限(きげん)を守(まも)ることが一番(いちばん)大切(たいせつ)です。\nA: 期限(きげん)に間(ま)に合(あ)わない場合(ばあい)はどうしますか？\nB: 早(はや)めに上司(じょうし)に相談(そうだん)して、調整(ちょうせい)をお願(ねが)いします。",
     exampleSrc:"A: Let us think about lawyer.\nB: It is an important theme.\nA: Is there anything else to be careful about?\nB: Yes, meeting deadlines is the most important thing.\nA: What do you do if you cannot meet the deadline?\nB: Consult your supervisor early and ask for an adjustment.",
     funFact:"弁(べん) (to argue) + 護(ご) (to defend) + 士(し) (professional). Japan has one of the lowest lawyer-to-citizen ratios in the OECD. A 弁護士(べんごし) badge features the scales of justice motif."},

    {type:"teach", trg:"被告人(ひこくにん)", src:"defendant", pos:"noun", gender:null,
     note:"被(ひ) receive + 告(こく) accusation + 人(にん) person.\nCriminal defendant terminology.",
     example:"A: 被告人(ひこくにん)について考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: その件(けん)について進捗(しんちょく)はありますか？\nB: はい、順調(じゅんちょう)に進(すす)んでいます。\nA: 完了(かんりょう)の見込(みこ)みはいつごろですか？\nB: 来月(らいげつ)の初(はじ)めには完了(かんりょう)できる予定(よてい)です。",
     exampleSrc:"A: Let us think about defendant.\nB: It is an important theme.\nA: Is there any progress on that matter?\nB: Yes, it is progressing smoothly.\nA: When is it expected to be completed?\nB: It is scheduled to be completed by the beginning of next month.",
     funFact:"被(ひ) (to receive) + 告(こく) (accusation) + 人(にん) (person). The 被告人(ひこくにん) in Japanese criminal trials has a 99%+ conviction rate, a statistic that attracts significant domestic and international legal debate."},

    {type:"teach", trg:"判決(はんけつ)", src:"verdict", pos:"noun", gender:null,
     note:"判(はん) judgment + 決(けつ) decision.\nPronounced aloud by the judge.",
     example:"A: 判決(はんけつ)について考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: 以前(いぜん)と比(くら)べてどう変(か)わりましたか？\nB: かなり改善(かいぜん)されました。効率(こうりつ)が上(あ)がりました。\nA: その改善(かいぜん)の要因(よういん)は何(なん)ですか？\nB: 新(あたら)しいシステムの導入(どうにゅう)が大(おお)きかったです。",
     exampleSrc:"A: Let us think about verdict.\nB: It is an important theme.\nA: How has it changed compared to before?\nB: It has improved considerably. Efficiency has increased.\nA: What was the cause of that improvement?\nB: The introduction of the new system was a big factor.",
     funFact:"判(はん) (judgment) + 決(けつ) (decision). Japanese 判決(はんけつ) are read aloud by the 裁判官(さいばんかん) in court and published on the Supreme Court website. High-profile verdicts drive media cycles."},

    {type:"teach", trg:"証拠(しょうこ)", src:"evidence", pos:"noun", gender:null,
     note:"証(しょう) proof + 拠(きょ) basis.\nLegal evidence; strict admission rules.",
     example:"A: 証拠(しょうこ)について考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: ご意見(いけん)をお聞(き)かせいただけますか？\nB: 私(わたし)の考(かんが)えでは、もう少(すこ)し検討(けんとう)が必要(ひつよう)だと思(おも)います。\nA: どの点(てん)を検討(けんとう)すべきでしょうか？\nB: 予算(よさん)と人員(じんいん)の面(めん)をもう一度(いちど)見直(みなお)す必要(ひつよう)があります。",
     exampleSrc:"A: Let us think about evidence.\nB: It is an important theme.\nA: Could you share your opinion?\nB: In my opinion, I think a bit more consideration is needed.\nA: Which points should be considered?\nB: We need to review the budget and staffing aspects once more.",
     funFact:"証(しょう) (proof) + 拠(きょ) (basis). Japanese criminal procedure has strict 証拠(しょうこ)採用(さいよう) (evidence admission) rules. Illegally obtained 証拠(しょうこ) can be excluded under 証拠排除法則(はいじょほうそく)."},

    {type:"teach", trg:"無罪(むざい)", src:"not guilty", pos:"noun", gender:null,
     note:"無(む) not + 罪(ざい) crime.\nAcquittal, rare in Japan (~0.1%).",
     example:"A: 無罪(むざい)について考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: 何(なに)か良(よ)い方法(ほうほう)はありませんか？\nB: 一(ひと)つ提案(ていあん)があります。段階的(だんかいてき)に進(すす)めてはどうでしょうか。\nA: 段階的(だんかいてき)に、というのはどういうことですか？\nB: まず小規模(しょうきぼ)で試(ため)してから、徐々(じょじょ)に拡大(かくだい)するということです。",
     exampleSrc:"A: Let us think about not guilty.\nB: It is an important theme.\nA: Is there a good method?\nB: I have one suggestion. How about proceeding step by step?\nA: What do you mean by step by step?\nB: It means trying it on a small scale first, then gradually expanding.",
     funFact:"無(む) (not) + 罪(ざい) (crime). Acquittal is rare in Japan (about 0.1%). 無罪判決(むざいはんけつ) of a senior figure typically becomes front-page news for weeks."},

    {type:"teach", trg:"有罪(ゆうざい)", src:"guilty", pos:"noun", gender:null,
     note:"有(ゆう) having + 罪(ざい) crime.\nFinding of guilt; 99%+ Japan conviction rate.",
     example:"A: 有罪(ゆうざい)について考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: この問題(もんだい)をどう思(おも)いますか？\nB: 複雑(ふくざつ)な問題(もんだい)ですが、解決策(かいけつさく)はあると思(おも)います。\nA: どのような解決策(かいけつさく)を考(かんが)えていますか？\nB: 関係者(かんけいしゃ)全員(ぜんいん)で話(はな)し合(あ)いの場(ば)を設(もう)けることが第一歩(だいいっぽ)です。",
     exampleSrc:"A: Let us think about guilty.\nB: It is an important theme.\nA: What do you think about this issue?\nB: It is a complex issue, but I think there are solutions.\nA: What kind of solutions are you thinking of?\nB: The first step is to set up a discussion forum for all stakeholders.",
     funFact:"有(ゆう) (having) + 罪(ざい) (crime). Finding of guilt. Japanese conviction rate exceeds 99%, sparking ongoing debate about confession-driven investigation practices."},

    {type:"teach", trg:"憲法(けんぽう)", src:"constitution", pos:"noun", gender:null,
     note:"憲(けん) constitution + 法(ほう) law.\nJapan's 1947 constitution has never been amended.",
     example:"A: 憲法(けんぽう)について考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: 最近(さいきん)の動向(どうこう)はいかがですか？\nB: 全体的(ぜんたいてき)には好調(こうちょう)ですが、一部(いちぶ)課題(かだい)もあります。\nA: どのような課題(かだい)がありますか？\nB: 人材(じんざい)の確保(かくほ)が最(もっと)も大(おお)きな課題(かだい)です。",
     exampleSrc:"A: Let us think about constitution.\nB: It is an important theme.\nA: How are the recent trends?\nB: Overall things are going well, but there are some issues.\nA: What kinds of issues are there?\nB: Securing human resources is the biggest challenge.",
     funFact:"憲(けん) (constitution) + 法(ほう) (law). Japan's 日本国憲法(にほんこくけんぽう) (1947) has never been amended, an unusual record. Article 9 (renouncing war) is the most globally famous clause."},

    {type:"mc", q:"What does 裁判官(さいばんかん) mean?", opts:["judge","lawyer","defendant","verdict"], ans:"judge",
     hint:"This is a key term in this unit's topic area."},

    {type:"fb", s:"{1}は重要(じゅうよう)です。\n(evidence is important.)", a:"証拠(しょうこ)", opts:["証拠(しょうこ)","無罪(むざい)","有罪(ゆうざい)","裁判官(さいばんかん)"], sSrc:"evidence is important.",
     hint:"Think about which word matches the English translation."},

    {type:"match", pairs:[{trg:"裁判官(さいばんかん)",src:"judge"},{trg:"弁護士(べんごし)",src:"lawyer"},{trg:"被告人(ひこくにん)",src:"defendant"},{trg:"判決(はんけつ)",src:"verdict"},{trg:"有罪(ゆうざい)",src:"guilty"}]},

    {type:"mc", q:"Which word means constitution?", opts:["無罪(むざい)","憲法(けんぽう)","証拠(しょうこ)","弁護士(べんごし)"], ans:"憲法(けんぽう)",
     hint:"This term is essential vocabulary for this topic."}
  ]
};
export default BATCH9_L1;
