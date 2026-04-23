// Batch 10 – Unit 25 (B2): 会議術(かいぎじゅつ)
const BATCH10_L1 = {
  id:"jav2_u25l_b10_1", title:"会議術(かいぎじゅつ)", icon:"🗂️", xp:15, board:true,
  steps:[
    {type:"intro", title:"会議術(かいぎじゅつ)",
     desc:"Meeting skills and business protocol vocabulary",
     goals:["Master key vocabulary for this topic","Use new words in context","Build reading comprehension"]},

    {type:"teach", trg:"議題(ぎだい)", src:"agenda item", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: 議題(ぎだい)について考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: 具体的(ぐたいてき)にはどういうことですか？\nB: つまり、状況(じょうきょう)に応(おう)じて対応(たいおう)を変(か)える必要(ひつよう)があるということです。\nA: なるほど。それは確(たし)かにそうですね。\nB: ええ、柔軟(じゅうなん)な対応(たいおう)が大切(たいせつ)だと思(おも)います。",
     exampleSrc:"A: Let us think about agenda item.\nB: It is an important theme.\nA: What do you mean specifically?\nB: I mean we need to change our approach depending on the situation.\nA: I see. That is certainly true.\nB: Yes, I think flexible response is important.",
     funFact:"議(はか)る (to discuss) + 題(だい) (topic). Japanese meetings almost always circulate a 議題(ぎだい) in advance so participants can prepare. Arriving without having reviewed the 議題(ぎだい) is a serious breach of etiquette."},

    {type:"teach", trg:"議事録(ぎじろく)", src:"meeting minutes", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: 議事録(ぎじろく)について考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: それについてもう少(すこ)し詳(くわ)しく教(おし)えてください。\nB: 例(たと)えば、最近(さいきん)の事例(じれい)を見(み)ると、変化(へんか)が激(はげ)しいです。\nA: そうですか。どう対処(たいしょ)すればいいでしょうか。\nB: まず現状(げんじょう)を把握(はあく)してから、計画(けいかく)を立(た)てましょう。",
     exampleSrc:"A: Let us think about meeting minutes.\nB: It is an important theme.\nA: Please tell me more about that.\nB: For example, looking at recent cases, the changes are dramatic.\nA: Is that so? How should we handle it?\nB: Let's first grasp the current situation, then make a plan.",
     funFact:"The 書記(しょき) (secretary) traditionally takes the 議事録(ぎじろく) by hand during meetings. This often rotates among junior staff as a training exercise: summarizing senior discussion teaches both listening and corporate protocol."},

    {type:"teach", trg:"結論(けつろん)", src:"conclusion", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: 結論(けつろん)について考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: どのような方法(ほうほう)がありますか？\nB: いくつかの選択肢(せんたくし)があります。一番(いちばん)効果的(こうかてき)なのは実践(じっせん)です。\nA: 実践(じっせん)というのは、具体的(ぐたいてき)に何(なに)をすればいいですか？\nB: 毎日(まいにち)少(すこ)しずつ取(と)り組(く)むことが重要(じゅうよう)です。",
     exampleSrc:"A: Let us think about conclusion.\nB: It is an important theme.\nA: What kinds of methods are there?\nB: There are several options. The most effective is practice.\nA: What specifically should we do in practice?\nB: It is important to work on it a little each day.",
     funFact:"結(むす)ぶ (to tie) + 論(ろん) (argument). A Japanese presentation classically puts the 結論(けつろん) last, tying together all preceding discussion. Western-style 'bottom-line up front' feels abrupt in traditional contexts."},

    {type:"teach", trg:"合意(ごうい)", src:"agreement", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: 合意(ごうい)について考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: それはいつごろから始(はじ)まったのですか？\nB: 数年前(すうねんまえ)からですが、最近(さいきん)特(とく)に注目(ちゅうもく)されています。\nA: 今後(こんご)どうなると思(おも)いますか？\nB: さらに発展(はってん)すると予想(よそう)されています。",
     exampleSrc:"A: Let us think about agreement.\nB: It is an important theme.\nA: When did that start?\nB: It started a few years ago, but it has been getting particular attention recently.\nA: What do you think will happen going forward?\nB: It is expected to develop further.",
     funFact:"合(あ)う (to fit together) + 意(い) (intention). 合意形成(ごういけいせい) (consensus-building) is a core Japanese management concept. Decisions reached via visible 合意(ごうい) execute faster because stakeholder buy-in is already secured."},

    {type:"teach", trg:"司会(しかい)", src:"moderator", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: 司会(しかい)について考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: 何(なに)か問題(もんだい)はありませんでしたか？\nB: いくつか課題(かだい)がありましたが、解決(かいけつ)しました。\nA: どのように解決(かいけつ)したのですか？\nB: チーム全体(ぜんたい)で話(はな)し合(あ)って、最善(さいぜん)の方法(ほうほう)を見(み)つけました。",
     exampleSrc:"A: Let us think about moderator.\nB: It is an important theme.\nA: Were there any problems?\nB: There were some issues, but we resolved them.\nA: How did you resolve them?\nB: We discussed it as a whole team and found the best method.",
     funFact:"司(つかさど)る (to preside) + 会(かい) (meeting). On Japanese TV talk shows and wedding receptions, the 司会(しかい) is a celebrity-like role. Being asked to 司会(しかい) a colleague's wedding is a mark of deep trust."},

    {type:"teach", trg:"発言(はつげん)する", src:"to speak up", pos:"verb", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: 発言(はつげん)することについて考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: その点(てん)について、もう少(すこ)し説明(せつめい)していただけますか？\nB: もちろんです。重要(じゅうよう)なのは準備(じゅんび)と計画(けいかく)です。\nA: 準備(じゅんび)にはどのくらい時間(じかん)がかかりますか？\nB: 通常(つうじょう)、一週間(いっしゅうかん)から二週間(にしゅうかん)程度(ていど)です。",
     exampleSrc:"A: Let us think about to speak up.\nB: It is an important theme.\nA: Could you explain that point a bit more?\nB: Of course. What is important is preparation and planning.\nA: How long does preparation take?\nB: Usually about one to two weeks.",
     funFact:"発(はっ) (to emit) + 言(げん) (speech). 失言(しつげん) (verbal slip) by a senior figure can end a political career in Japan. The high stakes of 発言(はつげん) explain the pre-meeting 根回(ねまわ)し (informal groundwork) culture."},

    {type:"teach", trg:"要約(ようやく)", src:"summary", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: 要約(ようやく)について考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: それは素晴(すば)らしい結果(けっか)ですね。\nB: ありがとうございます。チーム全員(ぜんいん)の努力(どりょく)のおかげです。\nA: 今後(こんご)の目標(もくひょう)は何(なん)ですか？\nB: さらに品質(ひんしつ)を向上(こうじょう)させることです。",
     exampleSrc:"A: Let us think about summary.\nB: It is an important theme.\nA: That is an excellent result.\nB: Thank you. It is thanks to the effort of the whole team.\nA: What are the future goals?\nB: To further improve quality.",
     funFact:"要(よう) (essential) + 約(やく) (to condense). University entrance exams famously test 要約(ようやく) skill: students must compress a 500-word passage into 100 characters without losing nuance. It is considered a fundamental academic skill."},

    {type:"teach", trg:"通訳(つうやく)", src:"interpreter", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: 通訳(つうやく)について考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: 他(ほか)に何(なに)か気(き)をつけることはありますか？\nB: はい、期限(きげん)を守(まも)ることが一番(いちばん)大切(たいせつ)です。\nA: 期限(きげん)に間(ま)に合(あ)わない場合(ばあい)はどうしますか？\nB: 早(はや)めに上司(じょうし)に相談(そうだん)して、調整(ちょうせい)をお願(ねが)いします。",
     exampleSrc:"A: Let us think about interpreter.\nB: It is an important theme.\nA: Is there anything else to be careful about?\nB: Yes, meeting deadlines is the most important thing.\nA: What do you do if you cannot meet the deadline?\nB: Consult your supervisor early and ask for an adjustment.",
     funFact:"通(つう)ずる (to pass through) + 訳(やく) (translation): the translator is the path between two languages. 同時通訳(どうじつうやく) (simultaneous interpretation) at international summits in Japan is considered one of the most demanding linguistic jobs."},

    {type:"mc", q:"What does 議題(ぎだい) mean?", opts:["agenda item","meeting minutes","conclusion","agreement"], ans:"agenda item",
     hint:"This is a key term in this unit's topic area."},

    {type:"fb", s:"{1}は重要(じゅうよう)です。\n(moderator is important.)", a:"司会(しかい)", opts:["司会(しかい)","発言(はつげん)する","要約(ようやく)","議題(ぎだい)"], sSrc:"moderator is important.",
     hint:"Think about which word matches the English translation."},

    {type:"match", pairs:[{trg:"議題(ぎだい)",src:"agenda item"},{trg:"議事録(ぎじろく)",src:"meeting minutes"},{trg:"結論(けつろん)",src:"conclusion"},{trg:"合意(ごうい)",src:"agreement"},{trg:"要約(ようやく)",src:"summary"}]},

    {type:"mc", q:"Which word means interpreter?", opts:["発言(はつげん)する","通訳(つうやく)","司会(しかい)","議事録(ぎじろく)"], ans:"通訳(つうやく)",
     hint:"This term is essential vocabulary for this topic."}
  ]
};
export default BATCH10_L1;
