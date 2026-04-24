// Batch 9 – Unit 29 (B2): 経済用語(けいざいようご)
const BATCH9_L1 = {
  id:"jav2_u29l_b9_1", title:"経済用語(けいざいようご)", icon:"💹", xp:15, board:true,
  steps:[
    {type:"intro", title:"経済用語(けいざいようご)",
     desc:"Economic terms and market vocabulary",
     goals:["Master key vocabulary for this topic","Use new words in context","Build reading comprehension"]},

    {type:"teach", trg:"インフレ", src:"inflation", pos:"noun", gender:null,
     note:"Short for インフレーション.\nJapan saw deflation 1991-2012; inflation returned 2022.",
     example:"A: インフレについて考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: ご意見(いけん)をお聞(き)かせいただけますか？\nB: 私(わたし)の考(かんが)えでは、もう少(すこ)し検討(けんとう)が必要(ひつよう)だと思(おも)います。\nA: どの点(てん)を検討(けんとう)すべきでしょうか？\nB: 予算(よさん)と人員(じんいん)の面(めん)をもう一度(いちど)見直(みなお)す必要(ひつよう)があります。",
     exampleSrc:"A: Let us think about inflation.\nB: It is an important theme.\nA: Could you share your opinion?\nB: In my opinion, I think a bit more consideration is needed.\nA: Which points should be considered?\nB: We need to review the budget and staffing aspects once more.",
     funFact:"Short for インフレーション. Japan spent 1991-2012 in a famous deflationary era (失(うしな)われた20年(にじゅうねん)). Inflation returning in 2022-2023 shocked a generation used to stable prices."},

    {type:"teach", trg:"デフレ", src:"deflation", pos:"noun", gender:null,
     note:"Short for デフレーション.\nJapan's textbook chronic deflation case.",
     example:"A: デフレについて考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: 何(なに)か良(よ)い方法(ほうほう)はありませんか？\nB: 一(ひと)つ提案(ていあん)があります。段階的(だんかいてき)に進(すす)めてはどうでしょうか。\nA: 段階的(だんかいてき)に、というのはどういうことですか？\nB: まず小規模(しょうきぼ)で試(ため)してから、徐々(じょじょ)に拡大(かくだい)するということです。",
     exampleSrc:"A: Let us think about deflation.\nB: It is an important theme.\nA: Is there a good method?\nB: I have one suggestion. How about proceeding step by step?\nA: What do you mean by step by step?\nB: It means trying it on a small scale first, then gradually expanding.",
     funFact:"Short for デフレーション. 日本(にほん) is the textbook case for chronic デフレ in a major economy. The Bank of Japan ran 量的緩和(りょうてきかんわ) (quantitative easing) for decades to escape it."},

    {type:"teach", trg:"円高(えんだか)", src:"strong yen", pos:"noun", gender:null,
     note:"円(えん) yen + 高(たか)い high.\nHurts exporters; helps importers.",
     example:"A: 円高(えんだか)について考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: この問題(もんだい)をどう思(おも)いますか？\nB: 複雑(ふくざつ)な問題(もんだい)ですが、解決策(かいけつさく)はあると思(おも)います。\nA: どのような解決策(かいけつさく)を考(かんが)えていますか？\nB: 関係者(かんけいしゃ)全員(ぜんいん)で話(はな)し合(あ)いの場(ば)を設(もう)けることが第一歩(だいいっぽ)です。",
     exampleSrc:"A: Let us think about strong yen.\nB: It is an important theme.\nA: What do you think about this issue?\nB: It is a complex issue, but I think there are solutions.\nA: What kind of solutions are you thinking of?\nB: The first step is to set up a discussion forum for all stakeholders.",
     funFact:"円(えん) (yen) + 高(たか)い (high/strong). Strong yen hurts exporters but helps importers and tourists heading overseas. The 1985 プラザ合意(ごうい) (Plaza Accord) triggered a historic 円高(えんだか) surge."},

    {type:"teach", trg:"円安(えんやす)", src:"weak yen", pos:"noun", gender:null,
     note:"円(えん) yen + 安(やす)い cheap.\nHelps exporters; raises import costs.",
     example:"A: 円安(えんやす)について考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: 最近(さいきん)の動向(どうこう)はいかがですか？\nB: 全体的(ぜんたいてき)には好調(こうちょう)ですが、一部(いちぶ)課題(かだい)もあります。\nA: どのような課題(かだい)がありますか？\nB: 人材(じんざい)の確保(かくほ)が最(もっと)も大(おお)きな課題(かだい)です。",
     exampleSrc:"A: Let us think about weak yen.\nB: It is an important theme.\nA: How are the recent trends?\nB: Overall things are going well, but there are some issues.\nA: What kinds of issues are there?\nB: Securing human resources is the biggest challenge.",
     funFact:"円(えん) (yen) + 安(やす)い (cheap/weak). Benefits exporters and inbound tourism. The post-2022 円安(えんやす) brought record tourist numbers but painful fuel and food import prices."},

    {type:"teach", trg:"景気後退(けいきこうたい)", src:"economic recovery", pos:"noun", gender:null,
     note:"景気(けいき) economic climate + 後退(こうたい) retreat.\nTwo consecutive quarters of negative GDP growth.",
     example:"A: 景気後退(けいきこうたい)について考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: それは興味深(きょうみぶか)いですね。\nB: ええ、日本(にほん)ならではの特徴(とくちょう)だと思(おも)います。\nA: 海外(かいがい)ではどうなのでしょうか？\nB: 国(くに)によって異(こと)なりますが、共通(きょうつう)する部分(ぶぶん)もあります。",
     exampleSrc:"A: Let us think about economic recovery.\nB: It is an important theme.\nA: That is interesting.\nB: Yes, I think it is a characteristic unique to Japan.\nA: I wonder how it is overseas?\nB: It differs by country, but there are also common aspects.",
     funFact:"景気(けいき) (economic climate) + 後退(こうたい) (retreat). Technically defined as two consecutive quarters of negative GDP growth. Japan entered 景気後退(けいきこうたい) briefly during COVID-19 shutdowns."},

    {type:"teach", trg:"不況(ふきょう)", src:"recession", pos:"noun", gender:null,
     note:"不(ふ) not + 況(きょう) state.\nBroader than 景気後退; 平成不況 = Heisei slump.",
     example:"A: 不況(ふきょう)について考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: その経験(けいけん)から何(なに)を学(まな)びましたか？\nB: 事前(じぜん)の準備(じゅんび)がいかに重要(じゅうよう)かを学(まな)びました。\nA: 具体的(ぐたいてき)にどんな準備(じゅんび)をすべきですか？\nB: まず情報収集(じょうほうしゅうしゅう)をして、それから計画(けいかく)を練(ね)ることが大事(だいじ)です。",
     exampleSrc:"A: Let us think about recession.\nB: It is an important theme.\nA: What did you learn from that experience?\nB: I learned how important advance preparation is.\nA: What kind of preparation should be done specifically?\nB: First, gather information, then it is important to develop a plan.",
     funFact:"不(ふ) (not) + 況(きょう) (state). Broader than 景気後退(けいきこうたい). Japanese economists distinguish 平成不況(へいせいふきょう) (Heisei recession 1991-) as a three-decade slump."},

    {type:"teach", trg:"GDP", src:"gross domestic product", pos:"noun", gender:null,
     note:"Japanese spells G-D-P.\nNative term: 国内総生産(こくないそうせいさん).",
     example:"A: GDPについて考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: 今後(こんご)の展望(てんぼう)についてお聞(き)かせください。\nB: 今後(こんご)はさらに国際化(こくさいか)が進(すす)むと思(おも)います。\nA: それに対(たい)してどのような対策(たいさく)が必要(ひつよう)ですか？\nB: 語学力(ごがくりょく)の向上(こうじょう)と異文化理解(いぶんかりかい)が不可欠(ふかけつ)です。",
     exampleSrc:"A: Let us think about gross domestic product.\nB: It is an important theme.\nA: Please tell me about future prospects.\nB: I think internationalization will progress further going forward.\nA: What measures are needed for that?\nB: Improving language skills and cross-cultural understanding are essential.",
     funFact:"Japanese news always spells out G-D-P in katakana 英字(えいじ). The native term is 国内総生産(こくないそうせいさん). Japan was the world's #2 economy until 2010 when China overtook it; #4 after Germany passed Japan in 2023."},

    {type:"teach", trg:"雇用率(こようりつ)", src:"employment rate", pos:"noun", gender:null,
     note:"雇用(こよう) employment + 率(りつ) rate.\nHigh in Japan; 非正規 (non-regular) share rising.",
     example:"A: 雇用率(こようりつ)について考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: それは予想外(よそうがい)の結果(けっか)ですね。\nB: はい、私(わたし)も驚(おどろ)きました。原因(げんいん)を調(しら)べています。\nA: いつごろ原因(げんいん)が分(わ)かりそうですか？\nB: 今週中(こんしゅうちゅう)には分析(ぶんせき)結果(けっか)が出(で)る予定(よてい)です。",
     exampleSrc:"A: Let us think about employment rate.\nB: It is an important theme.\nA: That is an unexpected result.\nB: Yes, I was surprised too. We are investigating the cause.\nA: When do you think you will know the cause?\nB: The analysis results are expected to come out by the end of this week.",
     funFact:"雇(やと)う (to hire) + 用(もち)いる (to use) + 率(りつ) (rate). Japan's 雇用率(こようりつ) is historically high, but 非正規(ひせいき) (non-regular) employment has grown from 20% to 40% since 1990."},

    {type:"mc", q:"What does インフレ mean?", opts:["inflation","deflation","strong yen","weak yen"], ans:"inflation",
     hint:"This is a key term in this unit's topic area."},

    {type:"fb", s:"{1}は重要(じゅうよう)です。\n(economic recovery is important.)", a:"景気後退(けいきこうたい)", opts:["景気後退(けいきこうたい)","不況(ふきょう)","GDP","インフレ"], sSrc:"economic recovery is important.",
     hint:"Think about which word matches the English translation."},

    {type:"match", pairs:[{trg:"インフレ",src:"inflation"},{trg:"デフレ",src:"deflation"},{trg:"円高(えんだか)",src:"strong yen"},{trg:"円安(えんやす)",src:"weak yen"},{trg:"GDP",src:"gross domestic product"}]},

    {type:"mc", q:"Which word means employment rate?", opts:["不況(ふきょう)","雇用率(こようりつ)","景気後退(けいきこうたい)","デフレ"], ans:"雇用率(こようりつ)",
     hint:"This term is essential vocabulary for this topic."}
  ]
};
export default BATCH9_L1;
