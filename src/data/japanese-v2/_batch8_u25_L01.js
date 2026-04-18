// Batch 8 – Unit 25 (B2.1 Business): Corporate Finance & Strategy
const BATCH8_L1 = {
  id:"jav2_u25l_b8_1", title:"財務(ざいむ)と戦略(せんりゃく)", icon:"📊", xp:15, board:true,
  steps:[
    {type:"intro", title:"財務(ざいむ)と戦略(せんりゃく)",
     desc:"Master corporate finance and strategy vocabulary essential for JLPT N2 business reading. These terms appear in financial news and corporate communications.",
     goals:["Discuss corporate finance in Japanese","Understand strategic business terminology","Navigate financial news vocabulary"]},

    {type:"teach", trg:"財務(ざいむ)", src:"finance / financial affairs", pos:"noun", gender:null,
     note:"Kanji: 財務. 財務(ざいむ)諸表(しょひょう) = financial statements.\n財務(ざいむ)大臣(だいじん) = Finance Minister.",
     example:"A: 財務(ざいむ)状況(じょうきょう)を報告(ほうこく)します。\nB: 売上(うりあげ)と利益(りえき)の数字(すうじ)をお願(ねが)いします。\nA: この問題(もんだい)をどう思(おも)いますか？\nB: 複雑(ふくざつ)な問題(もんだい)ですが、解決策(かいけつさく)はあると思(おも)います。\nA: どのような解決策(かいけつさく)を考(かんが)えていますか？\nB: 関係者(かんけいしゃ)全員(ぜんいん)で話(はな)し合(あ)いの場(ば)を設(もう)けることが第一歩(だいいっぽ)です。",
     exampleSrc:"A: I will report the financial situation.\nB: Please provide the sales and profit figures.\nA: What do you think about this issue?\nB: It is a complex issue, but I think there are solutions.\nA: What kind of solutions are you thinking of?\nB: The first step is to set up a discussion forum for all stakeholders.",
     funFact:"財務(ざいむ) is distinct from 経理(けいり) (accounting). 財務(ざいむ) deals with financial strategy and planning; 経理(けいり) handles day-to-day bookkeeping. The 財務省(ざいむしょう) (Ministry of Finance) is one of Japan's most powerful ministries, controlling national budget and tax policy."},

    {type:"teach", trg:"投資(とうし)", src:"investment", pos:"noun", gender:null,
     note:"Kanji: 投資. 投資(とうし)する = to invest.\n投資(とうし)信託(しんたく) = investment trust/mutual fund.",
     example:"A: 新(あたら)しい事業(じぎょう)に投資(とうし)します。\nB: どのくらいの額(がく)ですか？\nA: 最近(さいきん)の動向(どうこう)はいかがですか？\nB: 全体的(ぜんたいてき)には好調(こうちょう)ですが、一部(いちぶ)課題(かだい)もあります。\nA: どのような課題(かだい)がありますか？\nB: 人材(じんざい)の確保(かくほ)が最(もっと)も大(おお)きな課題(かだい)です。",
     exampleSrc:"A: We will invest in a new business.\nB: How much?\nA: How are the recent trends?\nB: Overall things are going well, but there are some issues.\nA: What kinds of issues are there?\nB: Securing human resources is the biggest challenge.",
     funFact:"投資(とうし) literally means 'throw resources.' Japanese households traditionally preferred 貯蓄(ちょちく) (savings) over 投資(とうし) (investment), keeping money in banks. The government's NISA program promotes individual 投資(とうし). The phrase 自己(じこ)投資(とうし) (self-investment) means investing in your own skills."},

    {type:"teach", trg:"資産(しさん)", src:"assets / property / wealth", pos:"noun", gender:null,
     note:"Kanji: 資産. 資産(しさん)運用(うんよう) = asset management.\n知的(ちてき)資産(しさん) = intellectual property.",
     example:"A: 会社(かいしゃ)の資産(しさん)は十億(じゅうおく)円(えん)です。\nB: 優良(ゆうりょう)な資産(しさん)ですね。\nA: それは興味深(きょうみぶか)いですね。\nB: ええ、日本(にほん)ならではの特徴(とくちょう)だと思(おも)います。\nA: 海外(かいがい)ではどうなのでしょうか？\nB: 国(くに)によって異(こと)なりますが、共通(きょうつう)する部分(ぶぶん)もあります。",
     exampleSrc:"A: The company's assets are 1 billion yen.\nB: Those are excellent assets.\nA: That is interesting.\nB: Yes, I think it is a characteristic unique to Japan.\nA: I wonder how it is overseas?\nB: It differs by country, but there are also common aspects.",
     funFact:"資産(しさん) includes tangible (有形(ゆうけい)資産(しさん): buildings, equipment) and intangible (無形(むけい)資産(しさん): patents, brand value). Japan's real estate 資産(しさん)バブル (asset bubble) in the late 1980s and its collapse shaped modern economics. 知的(ちてき)資産(しさん) (intellectual property) is increasingly valued."},

    {type:"teach", trg:"金融(きんゆう)", src:"finance / financial services", pos:"noun", gender:null,
     note:"Kanji: 金融. 金融(きんゆう)機関(きかん) = financial institution.\n金融(きんゆう)危機(きき) = financial crisis.",
     example:"A: 金融(きんゆう)市場(しじょう)が不安定(ふあんてい)です。\nB: 投資(とうし)には注意(ちゅうい)が必要(ひつよう)ですね。\nA: その経験(けいけん)から何(なに)を学(まな)びましたか？\nB: 事前(じぜん)の準備(じゅんび)がいかに重要(じゅうよう)かを学(まな)びました。\nA: 具体的(ぐたいてき)にどんな準備(じゅんび)をすべきですか？\nB: まず情報収集(じょうほうしゅうしゅう)をして、それから計画(けいかく)を練(ね)ることが大事(だいじ)です。",
     exampleSrc:"A: The financial market is unstable.\nB: Caution is needed for investments.\nA: What did you learn from that experience?\nB: I learned how important advance preparation is.\nA: What kind of preparation should be done specifically?\nB: First, gather information, then it is important to develop a plan.",
     funFact:"金融(きんゆう) literally means 'melting/flowing of money.' Japan's 金融(きんゆう)機関(きかん) include メガバンク (mega banks: MUFG, SMBC, Mizuho), 地方(ちほう)銀行(ぎんこう) (regional banks), and 信用(しんよう)金庫(きんこ) (credit unions). The 日本(にほん)銀行(ぎんこう) (Bank of Japan) sets monetary policy."},

    {type:"teach", trg:"株式(かぶしき)", src:"stock / shares / equity", pos:"noun", gender:null,
     note:"Kanji: 株式. 株式(かぶしき)会社(かいしゃ) = joint-stock company.\n株式(かぶしき)市場(しじょう) = stock market.",
     example:"A: 株式(かぶしき)市場(しじょう)が急落(きゅうらく)しました。\nB: 経済(けいざい)の先行(さきゆ)きが心配(しんぱい)です。\nA: 今後(こんご)の展望(てんぼう)についてお聞(き)かせください。\nB: 今後(こんご)はさらに国際化(こくさいか)が進(すす)むと思(おも)います。\nA: それに対(たい)してどのような対策(たいさく)が必要(ひつよう)ですか？\nB: 語学力(ごがくりょく)の向上(こうじょう)と異文化理解(いぶんかりかい)が不可欠(ふかけつ)です。",
     exampleSrc:"A: The stock market crashed.\nB: I am worried about the economic outlook.\nA: Please tell me about future prospects.\nB: I think internationalization will progress further going forward.\nA: What measures are needed for that?\nB: Improving language skills and cross-cultural understanding are essential.",
     funFact:"株式(かぶしき)会社(かいしゃ) (often abbreviated K.K.) is Japan's most common corporate form. The 東京(とうきょう)証券(しょうけん)取引所(とりひきじょ) (Tokyo Stock Exchange) is the world's third largest by market capitalization. Individual 株式(かぶしき)投資(とうし) (stock investment) has grown significantly since NISA was introduced."},

    {type:"mc", q:"What does 財務(ざいむ)諸表(しょひょう) mean?", opts:["Financial statements","Business card","Company rules","Employment contract"], ans:"Financial statements",
     hint:"These documents report a company's f... health, including balance sheets and income s...."},

    {type:"teach", trg:"買収(ばいしゅう)", src:"acquisition / buyout", pos:"noun", gender:null,
     note:"Kanji: 買収. 企業(きぎょう)買収(ばいしゅう) = corporate acquisition.\nM&A = mergers and acquisitions.",
     example:"A: 大社(たいしゃ)がベンチャーを買収(ばいしゅう)しました。\nB: いくらで買収(ばいしゅう)したんですか？\nA: それは予想外(よそうがい)の結果(けっか)ですね。\nB: はい、私(わたし)も驚(おどろ)きました。原因(げんいん)を調(しら)べています。\nA: いつごろ原因(げんいん)が分(わ)かりそうですか？\nB: 今週中(こんしゅうちゅう)には分析(ぶんせき)結果(けっか)が出(で)る予定(よてい)です。",
     exampleSrc:"A: The large company acquired a venture startup.\nB: How much did they acquire it for?\nA: That is an unexpected result.\nB: Yes, I was surprised too. We are investigating the cause.\nA: When do you think you will know the cause?\nB: The analysis results are expected to come out by the end of this week.",
     funFact:"M&A (買収(ばいしゅう) and 合併(がっぺい)) activity in Japan has increased dramatically. Historically, Japanese companies preferred organic growth, but cross-border 買収(ばいしゅう) has become common. SoftBank's 買収(ばいしゅう) of ARM Holdings and Takeda's acquisition of Shire were landmark deals."},

    {type:"teach", trg:"戦略(せんりゃく)", src:"strategy", pos:"noun", gender:null,
     note:"Kanji: 戦略. 経営(けいえい)戦略(せんりゃく) = management strategy.\n戦略的(せんりゃくてき) = strategic.",
     example:"A: 中期(ちゅうき)経営(けいえい)戦略(せんりゃく)を策定(さくてい)しました。\nB: 重要(じゅうよう)なポイントは何(なに)ですか？\nA: その分野(ぶんや)についてどのくらいご存(ぞん)じですか？\nB: 専門(せんもん)ではありませんが、基本的(きほんてき)な知識(ちしき)はあります。\nA: もっと詳(くわ)しく知(し)りたい場合(ばあい)は、どうすればいいですか？\nB: 専門家(せんもんか)に相談(そうだん)するか、関連(かんれん)の書籍(しょせき)を読(よ)むことをお勧(すす)めします。",
     exampleSrc:"A: We formulated a medium-term management strategy.\nB: What are the key points?\nA: How much do you know about that field?\nB: It is not my specialty, but I have basic knowledge.\nA: If I want to know more in detail, what should I do?\nB: I recommend consulting a specialist or reading related books.",
     funFact:"戦略(せんりゃく) has military origins: 戦 (war) + 略 (plan). In business, it contrasts with 戦術(せんじゅつ) (tactics): strategy is the big picture, tactics are the details. Japanese companies are known for 長期的(ちょうきてき)な戦略(せんりゃく) (long-term strategy) compared to Western quarterly focus."},

    {type:"teach", trg:"競争力(きょうそうりょく)", src:"competitiveness", pos:"noun", gender:null,
     note:"競争(きょうそう) (competition) + 力(りょく) (power).\n国際(こくさい)競争力(きょうそうりょく) = international competitiveness.",
     example:"A: 競争力(きょうそうりょく)をつけるために改革(かいかく)が必要(ひつよう)です。\nB: どの分野(ぶんや)から始(はじ)めますか？\nA: どのような影響(えいきょう)がありましたか？\nB: 社会全体(しゃかいぜんたい)に大(おお)きな影響(えいきょう)を与(あた)えました。\nA: 良(よ)い影響(えいきょう)ですか、悪(わる)い影響(えいきょう)ですか？\nB: 両方(りょうほう)あります。メリットもデメリットもあります。",
     exampleSrc:"A: Reform is needed to build competitiveness.\nB: Which area shall we start with?\nA: What kind of impact was there?\nB: It had a big impact on society as a whole.\nA: A good impact or a bad impact?\nB: Both. There are both merits and demerits.",
     funFact:"日本(にほん)の競争力(きょうそうりょく) (Japan's competitiveness) was a major topic when Japan's global ranking dropped from first in 1990 to the 30s by 2020. Rebuilding 競争力(きょうそうりょく) through デジタル化(か) (digitalization) and イノベーション (innovation) is a national priority."},

    {type:"teach", trg:"収益(しゅうえき)", src:"revenue / earnings / profit", pos:"noun", gender:null,
     note:"Kanji: 収益. 収益性(しゅうえきせい) = profitability.\n収益(しゅうえき)構造(こうぞう) = revenue structure.",
     example:"A: 収益(しゅうえき)が改善(かいぜん)しました。\nB: どの事業(じぎょう)部門(ぶもん)ですか？\nA: 具体的(ぐたいてき)にはどういうことですか？\nB: つまり、状況(じょうきょう)に応(おう)じて対応(たいおう)を変(か)える必要(ひつよう)があるということです。\nA: なるほど。それは確(たし)かにそうですね。\nB: ええ、柔軟(じゅうなん)な対応(たいおう)が大切(たいせつ)だと思(おも)います。",
     exampleSrc:"A: Revenue improved.\nB: Which business division?\nA: What do you mean specifically?\nB: I mean we need to change our approach depending on the situation.\nA: I see. That is certainly true.\nB: Yes, I think flexible response is important.",
     funFact:"収益(しゅうえき) is broader than 利益(りえき) (profit). 収益(しゅうえき) includes all income before deductions, while 利益(りえき) is what remains after costs. Financial analysts focus on 収益性(しゅうえきせい) (profitability ratio) to judge corporate health. 経常(けいじょう)収益(しゅうえき) (ordinary revenue) is a key metric in Japanese accounting."},

    {type:"teach", trg:"融資(ゆうし)", src:"financing / lending / loan", pos:"noun", gender:null,
     note:"Kanji: 融資. 融資(ゆうし)を受(う)ける = to receive financing.\n銀行(ぎんこう)融資(ゆうし) = bank loan.",
     example:"A: 事業(じぎょう)拡大(かくだい)のために融資(ゆうし)を受(う)けます。\nB: 条件(じょうけん)はどうですか？\nA: それについてもう少(すこ)し詳(くわ)しく教(おし)えてください。\nB: 例(たと)えば、最近(さいきん)の事例(じれい)を見(み)ると、変化(へんか)が激(はげ)しいです。\nA: そうですか。どう対処(たいしょ)すればいいでしょうか。\nB: まず現状(げんじょう)を把握(はあく)してから、計画(けいかく)を立(た)てましょう。",
     exampleSrc:"A: We will receive financing for business expansion.\nB: What are the terms?\nA: Please tell me more about that.\nB: For example, looking at recent cases, the changes are dramatic.\nA: Is that so? How should we handle it?\nB: Let's first grasp the current situation, then make a plan.",
     funFact:"融資(ゆうし) is distinct from 投資(とうし) (investment). 融資(ゆうし) means lending money that must be repaid; 投資(とうし) means putting money in for potential returns. Japanese 中小企業(ちゅうしょうきぎょう) (small businesses) rely heavily on 銀行(ぎんこう)融資(ゆうし). Government 融資(ゆうし) programs support entrepreneurs."},

    {type:"fb", s:"新(あたら)しい事業(じぎょう)に{1}します。\n(We will invest in a new business.)", a:"投資(とうし)", opts:["投資(とうし)","融資(ゆうし)","買収(ばいしゅう)","財務(ざいむ)"], sSrc:"We will invest in a new business.",
     hint:"This word means putting resources into something with the expectation of future returns."},

    {type:"teach", trg:"債務(さいむ)", src:"debt / liabilities", pos:"noun", gender:null,
     note:"Kanji: 債務. 債務(さいむ)超過(ちょうか) = excess debt.\nOpposite of 資産(しさん) (assets).",
     example:"A: 債務(さいむ)を削減(さくげん)する必要(ひつよう)があります。\nB: どのような方法(ほうほう)がありますか？\nA: どのような方法(ほうほう)がありますか？\nB: いくつかの選択肢(せんたくし)があります。一番(いちばん)効果的(こうかてき)なのは実践(じっせん)です。\nA: 実践(じっせん)というのは、具体的(ぐたいてき)に何(なに)をすればいいですか？\nB: 毎日(まいにち)少(すこ)しずつ取(と)り組(く)むことが重要(じゅうよう)です。",
     exampleSrc:"A: We need to reduce debt.\nB: What methods are available?\nA: What kinds of methods are there?\nB: There are several options. The most effective is practice.\nA: What specifically should we do in practice?\nB: It is important to work on it a little each day.",
     funFact:"債務(さいむ) is the balance sheet opposite of 資産(しさん). Japan's national 債務(さいむ) is over 1,200 trillion yen, the highest ratio to GDP among developed countries. However, most is domestically held. 債務(さいむ)整理(せいり) (debt restructuring) is a common business recovery strategy."},

    {type:"teach", trg:"破産(はさん)", src:"bankruptcy / insolvency", pos:"noun", gender:null,
     note:"Kanji: 破産. 破産(はさん)する = to go bankrupt.\n自己(じこ)破産(はさん) = personal bankruptcy.",
     example:"A: その会社(かいしゃ)は破産(はさん)しました。\nB: 従業員(じゅうぎょういん)はどうなりますか？\nA: それはいつごろから始(はじ)まったのですか？\nB: 数年前(すうねんまえ)からですが、最近(さいきん)特(とく)に注目(ちゅうもく)されています。\nA: 今後(こんご)どうなると思(おも)いますか？\nB: さらに発展(はってん)すると予想(よそう)されています。",
     exampleSrc:"A: That company went bankrupt.\nB: What happens to the employees?\nA: When did that start?\nB: It started a few years ago, but it has been getting particular attention recently.\nA: What do you think will happen going forward?\nB: It is expected to develop further.",
     funFact:"破産(はさん) literally means 'broken production.' Japan's biggest 破産(はさん) was JAL (Japan Airlines) in 2010. The 会社(かいしゃ)更生(こうせい)法(ほう) (Corporate Rehabilitation Act) allows restructuring before 破産(はさん). 自己(じこ)破産(はさん) (personal bankruptcy) carries heavy social stigma in Japan."},

    {type:"match", pairs:[{trg:"投資(とうし)",src:"investment"},{trg:"資産(しさん)",src:"assets"},{trg:"債務(さいむ)",src:"debt"},{trg:"融資(ゆうし)",src:"financing/loan"},{trg:"収益(しゅうえき)",src:"revenue"}],
     hint:"Match each financial term with its English meaning."},

    {type:"mc", q:"What is the difference between 戦略(せんりゃく) and 戦術(せんじゅつ)?", opts:["Strategy (big picture) vs. Tactics (details)","They mean the same thing","戦略(せんりゃく) is military, 戦術(せんじゅつ) is business","戦略(せんりゃく) is short-term, 戦術(せんじゅつ) is long-term"], ans:"Strategy (big picture) vs. Tactics (details)",
     hint:"Both have military origins: one plans the war, the other plans the battle."},

    {type:"fb", s:"企業(きぎょう){1}が行(おこな)われました。\n(A corporate acquisition took place.)", a:"買収(ばいしゅう)", opts:["買収(ばいしゅう)","破産(はさん)","戦略(せんりゃく)","融資(ゆうし)"], sSrc:"A corporate acquisition took place.",
     hint:"This word means buying and taking over another company."},

    {type:"mc", q:"What does 破産(はさん) mean?", opts:["Bankruptcy / insolvency","Merger","Profit","Investment"], ans:"Bankruptcy / insolvency",
     hint:"The kanji literally mean 'broken production,' indicating a company can no longer operate."}
  ,{type:"match",pairs:[{trg:"財務(ざいむ)",src:"finance / financial affairs"},{trg:"金融(きんゆう)",src:"finance / financial services"},{trg:"株式(かぶしき)",src:"stock / shares / equity"},{trg:"競争力(きょうそうりょく)",src:"competitiveness"},{trg:"破産(はさん)",src:"bankruptcy / insolvency"}]}]
};
export default BATCH8_L1;
