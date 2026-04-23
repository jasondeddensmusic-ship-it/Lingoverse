// Batch 9 – Unit 34 (B2): 外交(がいこう)
const BATCH9_L1 = {
  id:"jav2_u34l_b9_1", title:"外交(がいこう)", icon:"🌐", xp:15, board:true,
  steps:[
    {type:"intro", title:"外交(がいこう)",
     desc:"Diplomacy and international affairs vocabulary",
     goals:["Master key vocabulary for this topic","Use new words in context","Build reading comprehension"]},

    {type:"teach", trg:"外交官(がいこうかん)", src:"diplomat", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: 外交官(がいこうかん)について考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: ご意見(いけん)をお聞(き)かせいただけますか？\nB: 私(わたし)の考(かんが)えでは、もう少(すこ)し検討(けんとう)が必要(ひつよう)だと思(おも)います。\nA: どの点(てん)を検討(けんとう)すべきでしょうか？\nB: 予算(よさん)と人員(じんいん)の面(めん)をもう一度(いちど)見直(みなお)す必要(ひつよう)があります。",
     exampleSrc:"A: Let us think about diplomat.\nB: It is an important theme.\nA: Could you share your opinion?\nB: In my opinion, I think a bit more consideration is needed.\nA: Which points should be considered?\nB: We need to review the budget and staffing aspects once more.",
     funFact:"外交(がいこう) (diplomacy) + 官(かん) (official). Japanese 外交官(がいこうかん) are selected via 外務省(がいむしょう)採用試験(さいようしけん). The 外務省(がいむしょう) (MOFA) maintains around 230 embassies and consulates worldwide."},

    {type:"teach", trg:"条約(じょうやく)", src:"treaty", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: 条約(じょうやく)について考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: 何(なに)か良(よ)い方法(ほうほう)はありませんか？\nB: 一(ひと)つ提案(ていあん)があります。段階的(だんかいてき)に進(すす)めてはどうでしょうか。\nA: 段階的(だんかいてき)に、というのはどういうことですか？\nB: まず小規模(しょうきぼ)で試(ため)してから、徐々(じょじょ)に拡大(かくだい)するということです。",
     exampleSrc:"A: Let us think about treaty.\nB: It is an important theme.\nA: Is there a good method?\nB: I have one suggestion. How about proceeding step by step?\nA: What do you mean by step by step?\nB: It means trying it on a small scale first, then gradually expanding.",
     funFact:"条(じょう) (article) + 約(やく) (agreement). Japanese 条約(じょうやく) require Diet ratification under Article 73 of the 憲法(けんぽう). The 日米安保条約(にちべいあんぽじょうやく) (US-Japan Security Treaty, 1960) remains the most politically significant."},

    {type:"teach", trg:"国連(こくれん)", src:"United Nations", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: 国連(こくれん)について考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: この問題(もんだい)をどう思(おも)いますか？\nB: 複雑(ふくざつ)な問題(もんだい)ですが、解決策(かいけつさく)はあると思(おも)います。\nA: どのような解決策(かいけつさく)を考(かんが)えていますか？\nB: 関係者(かんけいしゃ)全員(ぜんいん)で話(はな)し合(あ)いの場(ば)を設(もう)けることが第一歩(だいいっぽ)です。",
     exampleSrc:"A: Let us think about United Nations.\nB: It is an important theme.\nA: What do you think about this issue?\nB: It is a complex issue, but I think there are solutions.\nA: What kind of solutions are you thinking of?\nB: The first step is to set up a discussion forum for all stakeholders.",
     funFact:"Short for 国際連合(こくさいれんごう). Japan joined the UN in 1956. Japan has been a non-permanent UNSC member more times than any other non-P5 country and seeks permanent seat reform."},

    {type:"teach", trg:"多国間(たこくかん)", src:"multilateral", pos:"adj", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: 多国間(たこくかん)について考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: 最近(さいきん)の動向(どうこう)はいかがですか？\nB: 全体的(ぜんたいてき)には好調(こうちょう)ですが、一部(いちぶ)課題(かだい)もあります。\nA: どのような課題(かだい)がありますか？\nB: 人材(じんざい)の確保(かくほ)が最(もっと)も大(おお)きな課題(かだい)です。",
     exampleSrc:"A: Let us think about multilateral.\nB: It is an important theme.\nA: How are the recent trends?\nB: Overall things are going well, but there are some issues.\nA: What kinds of issues are there?\nB: Securing human resources is the biggest challenge.",
     funFact:"多(た) (many) + 国(こく) (country) + 間(かん) (between). Japan participates in major 多国間(たこくかん) frameworks: G7, G20, APEC, ASEAN+3, Quad. 多国間主義(たこくかんしゅぎ) (multilateralism) is a MOFA priority."},

    {type:"teach", trg:"協力(きょうりょく)", src:"cooperation", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: 協力(きょうりょく)について考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: それは興味深(きょうみぶか)いですね。\nB: ええ、日本(にほん)ならではの特徴(とくちょう)だと思(おも)います。\nA: 海外(かいがい)ではどうなのでしょうか？\nB: 国(くに)によって異(こと)なりますが、共通(きょうつう)する部分(ぶぶん)もあります。",
     exampleSrc:"A: Let us think about cooperation.\nB: It is an important theme.\nA: That is interesting.\nB: Yes, I think it is a characteristic unique to Japan.\nA: I wonder how it is overseas?\nB: It differs by country, but there are also common aspects.",
     funFact:"協(きょう) (together) + 力(りょく) (power). Japan's JICA 国際協力機構(こくさいきょうりょくきこう) is one of the world's largest development aid agencies, operating in 150+ countries with a 2 trillion yen budget."},

    {type:"teach", trg:"緊張(きんちょう)", src:"tension", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: 緊張(きんちょう)について考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: その経験(けいけん)から何(なに)を学(まな)びましたか？\nB: 事前(じぜん)の準備(じゅんび)がいかに重要(じゅうよう)かを学(まな)びました。\nA: 具体的(ぐたいてき)にどんな準備(じゅんび)をすべきですか？\nB: まず情報収集(じょうほうしゅうしゅう)をして、それから計画(けいかく)を練(ね)ることが大事(だいじ)です。",
     exampleSrc:"A: Let us think about tension.\nB: It is an important theme.\nA: What did you learn from that experience?\nB: I learned how important advance preparation is.\nA: What kind of preparation should be done specifically?\nB: First, gather information, then it is important to develop a plan.",
     funFact:"緊(きん) (tight) + 張(ちょう) (to stretch). Diplomatic term for strained relations. Also used personally (緊張(きんちょう)している = I am nervous), creating a pun-rich word in political headlines."},

    {type:"teach", trg:"制裁(せいさい)", src:"sanctions", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: 制裁(せいさい)について考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: 今後(こんご)の展望(てんぼう)についてお聞(き)かせください。\nB: 今後(こんご)はさらに国際化(こくさいか)が進(すす)むと思(おも)います。\nA: それに対(たい)してどのような対策(たいさく)が必要(ひつよう)ですか？\nB: 語学力(ごがくりょく)の向上(こうじょう)と異文化理解(いぶんかりかい)が不可欠(ふかけつ)です。",
     exampleSrc:"A: Let us think about sanctions.\nB: It is an important theme.\nA: Please tell me about future prospects.\nB: I think internationalization will progress further going forward.\nA: What measures are needed for that?\nB: Improving language skills and cross-cultural understanding are essential.",
     funFact:"制(せい) (to control) + 裁(さい) (to judge). Japanese economic 制裁(せいさい) policy is coordinated with G7 partners. Historical examples include sanctions on North Korea since 2006 nuclear tests."},

    {type:"teach", trg:"紛争(ふんそう)", src:"conflict", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: 紛争(ふんそう)について考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: それは予想外(よそうがい)の結果(けっか)ですね。\nB: はい、私(わたし)も驚(おどろ)きました。原因(げんいん)を調(しら)べています。\nA: いつごろ原因(げんいん)が分(わ)かりそうですか？\nB: 今週中(こんしゅうちゅう)には分析(ぶんせき)結果(けっか)が出(で)る予定(よてい)です。",
     exampleSrc:"A: Let us think about conflict.\nB: It is an important theme.\nA: That is an unexpected result.\nB: Yes, I was surprised too. We are investigating the cause.\nA: When do you think you will know the cause?\nB: The analysis results are expected to come out by the end of this week.",
     funFact:"紛(ふん) (disorder) + 争(そう) (conflict). Japan's 憲法(けんぽう) Article 9 renouncing war shapes its approach to 紛争(ふんそう) resolution. Japanese peacekeeping deployments are tightly constrained."},

    {type:"mc", q:"What does 外交官(がいこうかん) mean?", opts:["diplomat","treaty","United Nations","multilateral"], ans:"diplomat",
     hint:"This is a key term in this unit's topic area."},

    {type:"fb", s:"{1}は重要(じゅうよう)です。\n(cooperation is important.)", a:"協力(きょうりょく)", opts:["協力(きょうりょく)","緊張(きんちょう)","制裁(せいさい)","外交官(がいこうかん)"], sSrc:"cooperation is important.",
     hint:"Think about which word matches the English translation."},

    {type:"match", pairs:[{trg:"外交官(がいこうかん)",src:"diplomat"},{trg:"条約(じょうやく)",src:"treaty"},{trg:"国連(こくれん)",src:"United Nations"},{trg:"多国間(たこくかん)",src:"multilateral"},{trg:"制裁(せいさい)",src:"sanctions"}]},

    {type:"mc", q:"Which word means conflict?", opts:["緊張(きんちょう)","紛争(ふんそう)","協力(きょうりょく)","条約(じょうやく)"], ans:"紛争(ふんそう)",
     hint:"This term is essential vocabulary for this topic."}
  ]
};
export default BATCH9_L1;
