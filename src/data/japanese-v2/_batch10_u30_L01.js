// Batch 10 – Unit 30 (B2): 論理的思考(ろんりてきしこう)
const BATCH10_L1 = {
  id:"jav2_u30l_b10_1", title:"論理的思考(ろんりてきしこう)", icon:"🧠", xp:15, board:true,
  steps:[
    {type:"intro", title:"論理的思考(ろんりてきしこう)",
     desc:"Logical thinking and reasoning vocabulary",
     goals:["Master key vocabulary for this topic","Use new words in context","Build reading comprehension"]},

    {type:"teach", trg:"推論(すいろん)", src:"reasoning", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: 推論(すいろん)について考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: 具体的(ぐたいてき)にはどういうことですか？\nB: つまり、状況(じょうきょう)に応(おう)じて対応(たいおう)を変(か)える必要(ひつよう)があるということです。\nA: なるほど。それは確(たし)かにそうですね。\nB: ええ、柔軟(じゅうなん)な対応(たいおう)が大切(たいせつ)だと思(おも)います。",
     exampleSrc:"A: Let us think about reasoning.\nB: It is an important theme.\nA: What do you mean specifically?\nB: I mean we need to change our approach depending on the situation.\nA: I see. That is certainly true.\nB: Yes, I think flexible response is important.",
     funFact:"推(すい) (to push/infer) + 論(ろん) (argument). Used in logic, law, and AI. Japanese legal reasoning relies heavily on 推論(すいろん)過程(かてい) (chain of inference) rather than strict case law, reflecting civil-law tradition."},

    {type:"teach", trg:"仮説(かせつ)", src:"hypothesis", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: 仮説(かせつ)について考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: それについてもう少(すこ)し詳(くわ)しく教(おし)えてください。\nB: 例(たと)えば、最近(さいきん)の事例(じれい)を見(み)ると、変化(へんか)が激(はげ)しいです。\nA: そうですか。どう対処(たいしょ)すればいいでしょうか。\nB: まず現状(げんじょう)を把握(はあく)してから、計画(けいかく)を立(た)てましょう。",
     exampleSrc:"A: Let us think about hypothesis.\nB: It is an important theme.\nA: Please tell me more about that.\nB: For example, looking at recent cases, the changes are dramatic.\nA: Is that so? How should we handle it?\nB: Let's first grasp the current situation, then make a plan.",
     funFact:"仮(か) (provisional) + 説(せつ) (theory). Scientific method is taught as 仮説(かせつ) → 実験(じっけん) → 結論(けつろん) in Japanese middle school, mirroring English hypothesis-experiment-conclusion."},

    {type:"teach", trg:"証明(しょうめい)", src:"proof", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: 証明(しょうめい)について考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: どのような方法(ほうほう)がありますか？\nB: いくつかの選択肢(せんたくし)があります。一番(いちばん)効果的(こうかてき)なのは実践(じっせん)です。\nA: 実践(じっせん)というのは、具体的(ぐたいてき)に何(なに)をすればいいですか？\nB: 毎日(まいにち)少(すこ)しずつ取(と)り組(く)むことが重要(じゅうよう)です。",
     exampleSrc:"A: Let us think about proof.\nB: It is an important theme.\nA: What kinds of methods are there?\nB: There are several options. The most effective is practice.\nA: What specifically should we do in practice?\nB: It is important to work on it a little each day.",
     funFact:"証(しょう) (proof) + 明(めい) (clear). Mathematical proofs, legal proofs, and everyday validations all use 証明(しょうめい). Student ID cards are 身分(みぶん)証明書(しょうめいしょ) (identification proof document)."},

    {type:"teach", trg:"前提(ぜんてい)", src:"premise", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: 前提(ぜんてい)について考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: それはいつごろから始(はじ)まったのですか？\nB: 数年前(すうねんまえ)からですが、最近(さいきん)特(とく)に注目(ちゅうもく)されています。\nA: 今後(こんご)どうなると思(おも)いますか？\nB: さらに発展(はってん)すると予想(よそう)されています。",
     exampleSrc:"A: Let us think about premise.\nB: It is an important theme.\nA: When did that start?\nB: It started a few years ago, but it has been getting particular attention recently.\nA: What do you think will happen going forward?\nB: It is expected to develop further.",
     funFact:"前(ぜん) (before) + 提(てい) (to present). Used in logic, business, and everyday reasoning. Japanese debate often probes whether a 前提(ぜんてい)が違(ちが)う (the premise is wrong) before attacking the conclusion."},

    {type:"teach", trg:"機能(きのう)する", src:"to function", pos:"verb", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: 機能(きのう)することについて考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: 何(なに)か問題(もんだい)はありませんでしたか？\nB: いくつか課題(かだい)がありましたが、解決(かいけつ)しました。\nA: どのように解決(かいけつ)したのですか？\nB: チーム全体(ぜんたい)で話(はな)し合(あ)って、最善(さいぜん)の方法(ほうほう)を見(み)つけました。",
     exampleSrc:"A: Let us think about to function.\nB: It is an important theme.\nA: Were there any problems?\nB: There were some issues, but we resolved them.\nA: How did you resolve them?\nB: We discussed it as a whole team and found the best method.",
     funFact:"機(き) (mechanism) + 能(のう) (ability). A neutral verb for things working as intended. Japanese tech journalism heavily uses 機能(きのう)する when describing whether software, policies, or systems deliver."},

    {type:"teach", trg:"客観的(きゃっかんてき)", src:"objective", pos:"adj", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: 客観的(きゃっかんてき)について考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: その点(てん)について、もう少(すこ)し説明(せつめい)していただけますか？\nB: もちろんです。重要(じゅうよう)なのは準備(じゅんび)と計画(けいかく)です。\nA: 準備(じゅんび)にはどのくらい時間(じかん)がかかりますか？\nB: 通常(つうじょう)、一週間(いっしゅうかん)から二週間(にしゅうかん)程度(ていど)です。",
     exampleSrc:"A: Let us think about objective.\nB: It is an important theme.\nA: Could you explain that point a bit more?\nB: Of course. What is important is preparation and planning.\nA: How long does preparation take?\nB: Usually about one to two weeks.",
     funFact:"客観(きゃっかん) (object-view) + 的(てき) (-ive). Contrasts with 主観的(しゅかんてき) (subjective). Japanese academic and journalistic writing prizes 客観的(きゃっかんてき) perspective as a mark of credibility."},

    {type:"teach", trg:"主観的(しゅかんてき)", src:"subjective", pos:"adj", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: 主観的(しゅかんてき)について考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: それは素晴(すば)らしい結果(けっか)ですね。\nB: ありがとうございます。チーム全員(ぜんいん)の努力(どりょく)のおかげです。\nA: 今後(こんご)の目標(もくひょう)は何(なん)ですか？\nB: さらに品質(ひんしつ)を向上(こうじょう)させることです。",
     exampleSrc:"A: Let us think about subjective.\nB: It is an important theme.\nA: That is an excellent result.\nB: Thank you. It is thanks to the effort of the whole team.\nA: What are the future goals?\nB: To further improve quality.",
     funFact:"主観(しゅかん) (subject-view) + 的(てき) (-ive). Personal, experience-based viewpoint. Japanese criticism distinguishes 主観的(しゅかんてき) review (this reviewer felt) from 客観的(きゃっかんてき) analysis (measurable facts)."},

    {type:"teach", trg:"傾向(けいこう)", src:"tendency", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: 傾向(けいこう)について考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: 他(ほか)に何(なに)か気(き)をつけることはありますか？\nB: はい、期限(きげん)を守(まも)ることが一番(いちばん)大切(たいせつ)です。\nA: 期限(きげん)に間(ま)に合(あ)わない場合(ばあい)はどうしますか？\nB: 早(はや)めに上司(じょうし)に相談(そうだん)して、調整(ちょうせい)をお願(ねが)いします。",
     exampleSrc:"A: Let us think about tendency.\nB: It is an important theme.\nA: Is there anything else to be careful about?\nB: Yes, meeting deadlines is the most important thing.\nA: What do you do if you cannot meet the deadline?\nB: Consult your supervisor early and ask for an adjustment.",
     funFact:"傾(かたむ)く (to lean) + 向(む)く (to face). A directional tendency. 傾向(けいこう)と対策(たいさく) (trends and countermeasures) is a famous Japanese study-guide subtitle, promising pattern-based exam prep."},

    {type:"mc", q:"What does 推論(すいろん) mean?", opts:["reasoning","hypothesis","proof","premise"], ans:"reasoning",
     hint:"This is a key term in this unit's topic area."},

    {type:"fb", s:"{1}は重要(じゅうよう)です。\n(to function is important.)", a:"機能(きのう)する", opts:["機能(きのう)する","客観的(きゃっかんてき)","主観的(しゅかんてき)","推論(すいろん)"], sSrc:"to function is important.",
     hint:"Think about which word matches the English translation."},

    {type:"match", pairs:[{trg:"推論(すいろん)",src:"reasoning"},{trg:"仮説(かせつ)",src:"hypothesis"},{trg:"証明(しょうめい)",src:"proof"},{trg:"前提(ぜんてい)",src:"premise"},{trg:"主観的(しゅかんてき)",src:"subjective"}]},

    {type:"mc", q:"Which word means tendency?", opts:["客観的(きゃっかんてき)","傾向(けいこう)","機能(きのう)する","仮説(かせつ)"], ans:"傾向(けいこう)",
     hint:"This term is essential vocabulary for this topic."}
  ]
};
export default BATCH10_L1;
