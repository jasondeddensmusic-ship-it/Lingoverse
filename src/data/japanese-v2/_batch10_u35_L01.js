// Batch 10 – Unit 35 (B2): テクノロジー倫理(りんり)
const BATCH10_L1 = {
  id:"jav2_u35l_b10_1", title:"テクノロジー倫理(りんり)", icon:"🤖", xp:15, board:true,
  steps:[
    {type:"intro", title:"テクノロジー倫理(りんり)",
     desc:"Technology ethics and society vocabulary",
     goals:["Master key vocabulary for this topic","Use new words in context","Build reading comprehension"]},

    {type:"teach", trg:"プライバシー保護(ほご)", src:"privacy protection", pos:"noun", gender:null,
     note:"プライバシー privacy + 保護(ほご) protection.\nGoverned by Japan's APPI framework.",
     example:"A: プライバシー保護(ほご)について考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: 具体的(ぐたいてき)にはどういうことですか？\nB: つまり、状況(じょうきょう)に応(おう)じて対応(たいおう)を変(か)える必要(ひつよう)があるということです。\nA: なるほど。それは確(たし)かにそうですね。\nB: ええ、柔軟(じゅうなん)な対応(たいおう)が大切(たいせつ)だと思(おも)います。",
     exampleSrc:"A: Let us think about privacy protection.\nB: It is an important theme.\nA: What do you mean specifically?\nB: I mean we need to change our approach depending on the situation.\nA: I see. That is certainly true.\nB: Yes, I think flexible response is important.",
     funFact:"プライバシー + 保護(ほご) (protection). Japan's 個人情報保護法(こじんじょうほうほごほう) (APPI) is the primary framework, updated in 2017 and 2020 to approach GDPR rigor for international data transfers."},

    {type:"teach", trg:"データ保護(ほご)", src:"data protection", pos:"noun", gender:null,
     note:"データ data + 保護(ほご) protection.\nJapan has EU GDPR adequacy since 2019.",
     example:"A: データ保護(ほご)について考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: それについてもう少(すこ)し詳(くわ)しく教(おし)えてください。\nB: 例(たと)えば、最近(さいきん)の事例(じれい)を見(み)ると、変化(へんか)が激(はげ)しいです。\nA: そうですか。どう対処(たいしょ)すればいいでしょうか。\nB: まず現状(げんじょう)を把握(はあく)してから、計画(けいかく)を立(た)てましょう。",
     exampleSrc:"A: Let us think about data protection.\nB: It is an important theme.\nA: Please tell me more about that.\nB: For example, looking at recent cases, the changes are dramatic.\nA: Is that so? How should we handle it?\nB: Let's first grasp the current situation, then make a plan.",
     funFact:"データ + 保護(ほご). Japan was granted GDPR adequacy decision by the EU in 2019, enabling data flow between the two jurisdictions. Japanese companies operating in Europe must comply with both regimes."},

    {type:"teach", trg:"監視(かんし)", src:"surveillance", pos:"noun", gender:null,
     note:"監(かん) to oversee + 視(し) to watch.\nGovernment or private observation.",
     example:"A: 監視(かんし)について考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: どのような方法(ほうほう)がありますか？\nB: いくつかの選択肢(せんたくし)があります。一番(いちばん)効果的(こうかてき)なのは実践(じっせん)です。\nA: 実践(じっせん)というのは、具体的(ぐたいてき)に何(なに)をすればいいですか？\nB: 毎日(まいにち)少(すこ)しずつ取(と)り組(く)むことが重要(じゅうよう)です。",
     exampleSrc:"A: Let us think about surveillance.\nB: It is an important theme.\nA: What kinds of methods are there?\nB: There are several options. The most effective is practice.\nA: What specifically should we do in practice?\nB: It is important to work on it a little each day.",
     funFact:"監(かん) (to oversee) + 視(し) (to watch). Japanese surveillance culture balances 防犯(ぼうはん) (crime prevention) with privacy. Japan has more CCTV per capita than most democracies but less public debate than in Europe."},

    {type:"teach", trg:"自己決定権(じこけっていけん)", src:"self-determination", pos:"noun", gender:null,
     note:"自己(じこ) self + 決定(けってい) decision + 権(けん) right.\nCentral in Japanese bioethics debates.",
     example:"A: 自己決定権(じこけっていけん)について考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: それはいつごろから始(はじ)まったのですか？\nB: 数年前(すうねんまえ)からですが、最近(さいきん)特(とく)に注目(ちゅうもく)されています。\nA: 今後(こんご)どうなると思(おも)いますか？\nB: さらに発展(はってん)すると予想(よそう)されています。",
     exampleSrc:"A: Let us think about self-determination.\nB: It is an important theme.\nA: When did that start?\nB: It started a few years ago, but it has been getting particular attention recently.\nA: What do you think will happen going forward?\nB: It is expected to develop further.",
     funFact:"自己(じこ) (self) + 決定(けってい) (decision) + 権(けん) (right). Bioethics debates in Japan center on 自己決定権(じこけっていけん) versus family consent, particularly around end-of-life care and organ donation."},

    {type:"teach", trg:"デジタルデバイド", src:"digital divide", pos:"noun", gender:null,
     note:"English loanword.\nJapan's age gap in digital skills: over-70 access is ~60%.",
     example:"A: デジタルデバイドについて考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: 何(なに)か問題(もんだい)はありませんでしたか？\nB: いくつか課題(かだい)がありましたが、解決(かいけつ)しました。\nA: どのように解決(かいけつ)したのですか？\nB: チーム全体(ぜんたい)で話(はな)し合(あ)って、最善(さいぜん)の方法(ほうほう)を見(み)つけました。",
     exampleSrc:"A: Let us think about digital divide.\nB: It is an important theme.\nA: Were there any problems?\nB: There were some issues, but we resolved them.\nA: How did you resolve them?\nB: We discussed it as a whole team and found the best method.",
     funFact:"Imported English. Japan's デジタルデバイド splits by age: smartphones reach 90%+ of under-60s but only about 60% of over-70s. Government digital services must maintain paper alternatives."},

    {type:"teach", trg:"情報格差(じょうほうかくさ)", src:"information gap", pos:"noun", gender:null,
     note:"情報(じょうほう) information + 格差(かくさ) gap.\nNative equivalent of デジタルデバイド.",
     example:"A: 情報格差(じょうほうかくさ)について考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: その点(てん)について、もう少(すこ)し説明(せつめい)していただけますか？\nB: もちろんです。重要(じゅうよう)なのは準備(じゅんび)と計画(けいかく)です。\nA: 準備(じゅんび)にはどのくらい時間(じかん)がかかりますか？\nB: 通常(つうじょう)、一週間(いっしゅうかん)から二週間(にしゅうかん)程度(ていど)です。",
     exampleSrc:"A: Let us think about information gap.\nB: It is an important theme.\nA: Could you explain that point a bit more?\nB: Of course. What is important is preparation and planning.\nA: How long does preparation take?\nB: Usually about one to two weeks.",
     funFact:"情報(じょうほう) (information) + 格差(かくさ) (gap). Native equivalent of デジタルデバイド. Japanese policy frames 情報格差(じょうほうかくさ) as a social inclusion issue, not just technology access."},

    {type:"teach", trg:"フェイクニュース", src:"fake news", pos:"noun", gender:null,
     note:"English loanword.\nEntered Japanese after the 2016 US election.",
     example:"A: フェイクニュースについて考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: それは素晴(すば)らしい結果(けっか)ですね。\nB: ありがとうございます。チーム全員(ぜんいん)の努力(どりょく)のおかげです。\nA: 今後(こんご)の目標(もくひょう)は何(なん)ですか？\nB: さらに品質(ひんしつ)を向上(こうじょう)させることです。",
     exampleSrc:"A: Let us think about fake news.\nB: It is an important theme.\nA: That is an excellent result.\nB: Thank you. It is thanks to the effort of the whole team.\nA: What are the future goals?\nB: To further improve quality.",
     funFact:"Imported English. The 2016 US election brought フェイクニュース into mainstream Japanese vocabulary. 2021-2022 elections saw organized Japanese-language disinformation campaigns, driving policy response."},

    {type:"teach", trg:"コンプライアンス", src:"compliance", pos:"noun", gender:null,
     note:"English loanword.\nCore Japanese corporate training since post-Enron era.",
     example:"A: コンプライアンスについて考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: 他(ほか)に何(なに)か気(き)をつけることはありますか？\nB: はい、期限(きげん)を守(まも)ることが一番(いちばん)大切(たいせつ)です。\nA: 期限(きげん)に間(ま)に合(あ)わない場合(ばあい)はどうしますか？\nB: 早(はや)めに上司(じょうし)に相談(そうだん)して、調整(ちょうせい)をお願(ねが)いします。",
     exampleSrc:"A: Let us think about compliance.\nB: It is an important theme.\nA: Is there anything else to be careful about?\nB: Yes, meeting deadlines is the most important thing.\nA: What do you do if you cannot meet the deadline?\nB: Consult your supervisor early and ask for an adjustment.",
     funFact:"Imported English. Japanese corporate コンプライアンス training became universal after the 2000s Enron-era scandals. 内部通報制度(ないぶつうほうせいど) (whistleblower systems) are now legally required for most firms."},

    {type:"mc", q:"What does プライバシー保護(ほご) mean?", opts:["privacy protection","data protection","surveillance","self-determination"], ans:"privacy protection",
     hint:"This is a key term in this unit's topic area."},

    {type:"fb", s:"{1}は重要(じゅうよう)です。\n(digital divide is important.)", a:"デジタルデバイド", opts:["デジタルデバイド","情報格差(じょうほうかくさ)","フェイクニュース","プライバシー保護(ほご)"], sSrc:"digital divide is important.",
     hint:"Think about which word matches the English translation."},

    {type:"match", pairs:[{trg:"プライバシー保護(ほご)",src:"privacy protection"},{trg:"データ保護(ほご)",src:"data protection"},{trg:"監視(かんし)",src:"surveillance"},{trg:"自己決定権(じこけっていけん)",src:"self-determination"},{trg:"フェイクニュース",src:"fake news"}]},

    {type:"mc", q:"Which word means compliance?", opts:["情報格差(じょうほうかくさ)","コンプライアンス","デジタルデバイド","データ保護(ほご)"], ans:"コンプライアンス",
     hint:"This term is essential vocabulary for this topic."}
  ]
};
export default BATCH10_L1;
