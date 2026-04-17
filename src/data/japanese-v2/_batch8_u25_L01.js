// Batch 8 – Unit 25 (B2.1 Business): Corporate Finance & Strategy
const BATCH8_L1 = {
  id:"jav2_u25l_b8_1", title:"ざいむとせんりゃく", icon:"📊", xp:15, board:true,
  steps:[
    {type:"intro", title:"ざいむとせんりゃく",
     desc:"Master corporate finance and strategy vocabulary essential for JLPT N2 business reading. These terms appear in financial news and corporate communications.",
     goals:["Discuss corporate finance in Japanese","Understand strategic business terminology","Navigate financial news vocabulary"]},

    {type:"teach", trg:"ざいむ", src:"finance / financial affairs", pos:"noun", gender:null,
     note:"Kanji: 財務. ざいむしょひょう = financial statements.\nざいむだいじん = Finance Minister.",
     example:"A: ざいむじょうきょうをほうこくします。\nB: うりあげとりえきのすうじをおねがいします。\nA: この問題(もんだい)をどう思(おも)いますか？\nB: 複雑(ふくざつ)な問題(もんだい)ですが、解決策(かいけつさく)はあると思(おも)います。\nA: どのような解決策(かいけつさく)を考(かんが)えていますか？\nB: 関係者(かんけいしゃ)全員(ぜんいん)で話(はな)し合(あ)いの場(ば)を設(もう)けることが第一歩(だいいっぽ)です。",
     exampleSrc:"A: I will report the financial situation.\nB: Please provide the sales and profit figures.\nA: What do you think about this issue?\nB: It is a complex issue, but I think there are solutions.\nA: What kind of solutions are you thinking of?\nB: The first step is to set up a discussion forum for all stakeholders.",
     funFact:"ざいむ (財務) is distinct from けいり (経理, accounting). ざいむ deals with financial strategy and planning; けいり handles day-to-day bookkeeping. The ざいむしょう (Ministry of Finance) is one of Japan's most powerful ministries, controlling national budget and tax policy."},

    {type:"teach", trg:"とうし", src:"investment", pos:"noun", gender:null,
     note:"Kanji: 投資. とうしする = to invest.\nとうししんたく = investment trust/mutual fund.",
     example:"A: あたらしいじぎょうにとうしします。\nB: どのくらいのがくですか？\nA: 最近(さいきん)の動向(どうこう)はいかがですか？\nB: 全体的(ぜんたいてき)には好調(こうちょう)ですが、一部(いちぶ)課題(かだい)もあります。\nA: どのような課題(かだい)がありますか？\nB: 人材(じんざい)の確保(かくほ)が最(もっと)も大(おお)きな課題(かだい)です。",
     exampleSrc:"A: We will invest in a new business.\nB: How much?\nA: How are the recent trends?\nB: Overall things are going well, but there are some issues.\nA: What kinds of issues are there?\nB: Securing human resources is the biggest challenge.",
     funFact:"とうし (投資) literally means 'throw resources.' Japanese households traditionally preferred ちょちく (savings) over とうし (investment), keeping money in banks. The government's NISA program (にほんばんISA) promotes individual とうし. The phrase じこtとうし (self-investment) means investing in your own skills."},

    {type:"teach", trg:"しさん", src:"assets / property / wealth", pos:"noun", gender:null,
     note:"Kanji: 資産. しさんうんよう = asset management.\nちてきしさん = intellectual property.",
     example:"A: かいしゃのしさんはじゅうおくえんです。\nB: ゆうりょうなしさんですね。\nA: それは興味深(きょうみぶか)いですね。\nB: ええ、日本(にほん)ならではの特徴(とくちょう)だと思(おも)います。\nA: 海外(かいがい)ではどうなのでしょうか？\nB: 国(くに)によって異(こと)なりますが、共通(きょうつう)する部分(ぶぶん)もあります。",
     exampleSrc:"A: The company's assets are 1 billion yen.\nB: Those are excellent assets.\nA: That is interesting.\nB: Yes, I think it is a characteristic unique to Japan.\nA: I wonder how it is overseas?\nB: It differs by country, but there are also common aspects.",
     funFact:"しさん (資産) includes tangible (ゆうけいしさん: buildings, equipment) and intangible (むけいしさん: patents, brand value). Japan's real estate しさんバブル (asset bubble) in the late 1980s and its collapse shaped modern economics. ちてきしさん (intellectual property) is increasingly valued."},

    {type:"teach", trg:"きんゆう", src:"finance / financial services", pos:"noun", gender:null,
     note:"Kanji: 金融. きんゆうきかん = financial institution.\nきんゆうきき = financial crisis.",
     example:"A: きんゆうしじょうがふあんていです。\nB: とうしにはちゅういがひつようですね。\nA: その経験(けいけん)から何(なに)を学(まな)びましたか？\nB: 事前(じぜん)の準備(じゅんび)がいかに重要(じゅうよう)かを学(まな)びました。\nA: 具体的(ぐたいてき)にどんな準備(じゅんび)をすべきですか？\nB: まず情報収集(じょうほうしゅうしゅう)をして、それから計画(けいかく)を練(ね)ることが大事(だいじ)です。",
     exampleSrc:"A: The financial market is unstable.\nB: Caution is needed for investments.\nA: What did you learn from that experience?\nB: I learned how important advance preparation is.\nA: What kind of preparation should be done specifically?\nB: First, gather information, then it is important to develop a plan.",
     funFact:"きんゆう (金融) literally means 'melting/flowing of money.' Japan's きんゆうきかん include メガバンク (mega banks: MUFG, SMBC, Mizuho), ちほうぎんこう (regional banks), and しんようきんこ (credit unions). The にほんぎんこう (Bank of Japan) sets monetary policy."},

    {type:"teach", trg:"かぶしき", src:"stock / shares / equity", pos:"noun", gender:null,
     note:"Kanji: 株式. かぶしきかいしゃ = joint-stock company.\nかぶしきしじょう = stock market.",
     example:"A: かぶしきしじょうがきゅうらくしました。\nB: けいざいのさきゆきがしんぱいです。\nA: 今後(こんご)の展望(てんぼう)についてお聞(き)かせください。\nB: 今後(こんご)はさらに国際化(こくさいか)が進(すす)むと思(おも)います。\nA: それに対(たい)してどのような対策(たいさく)が必要(ひつよう)ですか？\nB: 語学力(ごがくりょく)の向上(こうじょう)と異文化理解(いぶんかりかい)が不可欠(ふかけつ)です。",
     exampleSrc:"A: The stock market crashed.\nB: I am worried about the economic outlook.\nA: Please tell me about future prospects.\nB: I think internationalization will progress further going forward.\nA: What measures are needed for that?\nB: Improving language skills and cross-cultural understanding are essential.",
     funFact:"かぶしきかいしゃ (株式会社, often abbreviated K.K.) is Japan's most common corporate form. The とうきょうしょうけんとりひきじょ (Tokyo Stock Exchange) is the world's third largest by market capitalization. Individual かぶしきとうし (stock investment) has grown significantly since NISA was introduced."},

    {type:"mc", q:"What does ざいむしょひょう mean?", opts:["Financial statements","Business card","Company rules","Employment contract"], ans:"Financial statements",
     hint:"These documents report a company's f... health, including balance sheets and income s...."},

    {type:"teach", trg:"ばいしゅう", src:"acquisition / buyout", pos:"noun", gender:null,
     note:"Kanji: 買収. きぎょうばいしゅう = corporate acquisition.\nM&A = mergers and acquisitions.",
     example:"A: たいしゃがベンチャーをばいしゅうしました。\nB: いくらでばいしゅうしたんですか？\nA: それは予想外(よそうがい)の結果(けっか)ですね。\nB: はい、私(わたし)も驚(おどろ)きました。原因(げんいん)を調(しら)べています。\nA: いつごろ原因(げんいん)が分(わ)かりそうですか？\nB: 今週中(こんしゅうちゅう)には分析(ぶんせき)結果(けっか)が出(で)る予定(よてい)です。",
     exampleSrc:"A: The large company acquired a venture startup.\nB: How much did they acquire it for?\nA: That is an unexpected result.\nB: Yes, I was surprised too. We are investigating the cause.\nA: When do you think you will know the cause?\nB: The analysis results are expected to come out by the end of this week.",
     funFact:"M&A (ばいしゅう and がっぺい) activity in Japan has increased dramatically. Historically, Japanese companies preferred organic growth, but cross-border ばいしゅう has become common. SoftBank's ばいしゅう of ARM Holdings and Takeda's acquisition of Shire were landmark deals."},

    {type:"teach", trg:"せんりゃく", src:"strategy", pos:"noun", gender:null,
     note:"Kanji: 戦略. けいえいせんりゃく = management strategy.\nせんりゃくてき = strategic.",
     example:"A: ちゅうきけいえいせんりゃくをさくていしました。\nB: じゅうようなポイントはなんですか？\nA: その分野(ぶんや)についてどのくらいご存(ぞん)じですか？\nB: 専門(せんもん)ではありませんが、基本的(きほんてき)な知識(ちしき)はあります。\nA: もっと詳(くわ)しく知(し)りたい場合(ばあい)は、どうすればいいですか？\nB: 専門家(せんもんか)に相談(そうだん)するか、関連(かんれん)の書籍(しょせき)を読(よ)むことをお勧(すす)めします。",
     exampleSrc:"A: We formulated a medium-term management strategy.\nB: What are the key points?\nA: How much do you know about that field?\nB: It is not my specialty, but I have basic knowledge.\nA: If I want to know more in detail, what should I do?\nB: I recommend consulting a specialist or reading related books.",
     funFact:"せんりゃく (戦略) has military origins: 戦 (war) + 略 (plan). In business, it contrasts with せんじゅつ (戦術, tactics): strategy is the big picture, tactics are the details. Japanese companies are known for ちょうきてきなせんりゃく (long-term strategy) compared to Western quarterly focus."},

    {type:"teach", trg:"きょうそうりょく", src:"competitiveness", pos:"noun", gender:null,
     note:"きょうそう (competition) + りょく (power).\nこくさいきょうそうりょく = international competitiveness.",
     example:"A: きょうそうりょくをつけるためにかいかくがひつようです。\nB: どのぶんやからはじめますか？\nA: どのような影響(えいきょう)がありましたか？\nB: 社会全体(しゃかいぜんたい)に大(おお)きな影響(えいきょう)を与(あた)えました。\nA: 良(よ)い影響(えいきょう)ですか、悪(わる)い影響(えいきょう)ですか？\nB: 両方(りょうほう)あります。メリットもデメリットもあります。",
     exampleSrc:"A: Reform is needed to build competitiveness.\nB: Which area shall we start with?\nA: What kind of impact was there?\nB: It had a big impact on society as a whole.\nA: A good impact or a bad impact?\nB: Both. There are both merits and demerits.",
     funFact:"にほんのきょうそうりょく (Japan's competitiveness) was a major topic when Japan's global ranking dropped from first in 1990 to the 30s by 2020. Rebuilding きょうそうりょく through デジタルか (digitalization) and イノベーション (innovation) is a national priority."},

    {type:"teach", trg:"しゅうえき", src:"revenue / earnings / profit", pos:"noun", gender:null,
     note:"Kanji: 収益. しゅうえきせい = profitability.\nしゅうえきこうぞう = revenue structure.",
     example:"A: しゅうえきがかいぜんしました。\nB: どのじぎょうぶもんですか？\nA: 具体的(ぐたいてき)にはどういうことですか？\nB: つまり、状況(じょうきょう)に応(おう)じて対応(たいおう)を変(か)える必要(ひつよう)があるということです。\nA: なるほど。それは確(たし)かにそうですね。\nB: ええ、柔軟(じゅうなん)な対応(たいおう)が大切(たいせつ)だと思(おも)います。",
     exampleSrc:"A: Revenue improved.\nB: Which business division?\nA: What do you mean specifically?\nB: I mean we need to change our approach depending on the situation.\nA: I see. That is certainly true.\nB: Yes, I think flexible response is important.",
     funFact:"しゅうえき (収益) is broader than りえき (profit). しゅうえき includes all income before deductions, while りえき is what remains after costs. Financial analysts focus on しゅうえきせい (profitability ratio) to judge corporate health. けいじょうしゅうえき (ordinary revenue) is a key metric in Japanese accounting."},

    {type:"teach", trg:"ゆうし", src:"financing / lending / loan", pos:"noun", gender:null,
     note:"Kanji: 融資. ゆうしをうける = to receive financing.\nぎんこうゆうし = bank loan.",
     example:"A: じぎょうかくだいのためにゆうしをうけます。\nB: じょうけんはどうですか？\nA: それについてもう少(すこ)し詳(くわ)しく教(おし)えてください。\nB: 例(たと)えば、最近(さいきん)の事例(じれい)を見(み)ると、変化(へんか)が激(はげ)しいです。\nA: そうですか。どう対処(たいしょ)すればいいでしょうか。\nB: まず現状(げんじょう)を把握(はあく)してから、計画(けいかく)を立(た)てましょう。",
     exampleSrc:"A: We will receive financing for business expansion.\nB: What are the terms?\nA: Please tell me more about that.\nB: For example, looking at recent cases, the changes are dramatic.\nA: Is that so? How should we handle it?\nB: Let's first grasp the current situation, then make a plan.",
     funFact:"ゆうし (融資) is distinct from とうし (investment). ゆうし means lending money that must be repaid; とうし means putting money in for potential returns. Japanese ちゅうしょうきぎょう (small businesses) rely heavily on ぎんこうゆうし. Government ゆうし programs support entrepreneurs."},

    {type:"fb", s:"あたらしいじぎょうに{1}します。\n(We will invest in a new business.)", a:"とうし", opts:["とうし","ゆうし","ばいしゅう","ざいむ"], sSrc:"We will invest in a new business.",
     hint:"This word means putting resources into something with the expectation of future returns."},

    {type:"teach", trg:"さいむ", src:"debt / liabilities", pos:"noun", gender:null,
     note:"Kanji: 債務. さいむちょうか = excess debt.\nOpposite of しさん (assets).",
     example:"A: さいむをさくげんするひつようがあります。\nB: どのようなほうほうがありますか？\nA: どのような方法(ほうほう)がありますか？\nB: いくつかの選択肢(せんたくし)があります。一番(いちばん)効果的(こうかてき)なのは実践(じっせん)です。\nA: 実践(じっせん)というのは、具体的(ぐたいてき)に何(なに)をすればいいですか？\nB: 毎日(まいにち)少(すこ)しずつ取(と)り組(く)むことが重要(じゅうよう)です。",
     exampleSrc:"A: We need to reduce debt.\nB: What methods are available?\nA: What kinds of methods are there?\nB: There are several options. The most effective is practice.\nA: What specifically should we do in practice?\nB: It is important to work on it a little each day.",
     funFact:"さいむ is the balance sheet opposite of しさん. Japan's national さいむ is over 1,200 trillion yen, the highest ratio to GDP among developed countries. However, most is domestically held. さいむせいり (debt restructuring) is a common business recovery strategy."},

    {type:"teach", trg:"はさん", src:"bankruptcy / insolvency", pos:"noun", gender:null,
     note:"Kanji: 破産. はさんする = to go bankrupt.\nじこはさん = personal bankruptcy.",
     example:"A: そのかいしゃははさんしました。\nB: じゅうぎょういんはどうなりますか？\nA: それはいつごろから始(はじ)まったのですか？\nB: 数年前(すうねんまえ)からですが、最近(さいきん)特(とく)に注目(ちゅうもく)されています。\nA: 今後(こんご)どうなると思(おも)いますか？\nB: さらに発展(はってん)すると予想(よそう)されています。",
     exampleSrc:"A: That company went bankrupt.\nB: What happens to the employees?\nA: When did that start?\nB: It started a few years ago, but it has been getting particular attention recently.\nA: What do you think will happen going forward?\nB: It is expected to develop further.",
     funFact:"はさん (破産) literally means 'broken production.' Japan's biggest はさん was JAL (Japan Airlines) in 2010. The かいしゃこうせいほう (Corporate Rehabilitation Act) allows restructuring before はさん. じこはさん (personal bankruptcy) carries heavy social stigma in Japan."},

    {type:"match", pairs:[{trg:"とうし",src:"investment"},{trg:"しさん",src:"assets"},{trg:"さいむ",src:"debt"},{trg:"ゆうし",src:"financing/loan"},{trg:"しゅうえき",src:"revenue"}],
     hint:"Match each financial term with its English meaning."},

    {type:"mc", q:"What is the difference between せんりゃく and せんじゅつ?", opts:["Strategy (big picture) vs. Tactics (details)","They mean the same thing","せんりゃく is military, せんじゅつ is business","せんりゃく is short-term, せんじゅつ is long-term"], ans:"Strategy (big picture) vs. Tactics (details)",
     hint:"Both have military origins: one plans the war, the other plans the battle."},

    {type:"fb", s:"きぎょう{1}がおこなわれました。\n(A corporate acquisition took place.)", a:"ばいしゅう", opts:["ばいしゅう","はさん","せんりゃく","ゆうし"], sSrc:"A corporate acquisition took place.",
     hint:"This word means buying and taking over another company."},

    {type:"mc", q:"What does はさん mean?", opts:["Bankruptcy / insolvency","Merger","Profit","Investment"], ans:"Bankruptcy / insolvency",
     hint:"The kanji literally mean 'broken production,' indicating a company can no longer operate."}
  ]
};
export default BATCH8_L1;
