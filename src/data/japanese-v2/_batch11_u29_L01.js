// Batch 11 – Unit 29 (B2.2 Economy): Economic & Financial Terms
const BATCH11_L1 = {
  id:"jav2_u29l_b11_1", title:"けいざいようご", icon:"💹", xp:15, board:true,
  steps:[
    {type:"intro", title:"けいざいようご",
     desc:"Learn essential economic and financial vocabulary. These terms appear frequently in news, business discussions, and JLPT N2 reading passages.",
     goals:["Discuss economic trends and indicators","Use financial vocabulary in context","Understand economic news reports"]},

    {type:"teach", trg:"けいき", src:"economy / business conditions", pos:"noun", gender:null,
     note:"けいきがいい = economy is good.\nふけいき = recession.",
     example:"A: さいきんのけいきはどうですか？\nB: すこしかいふくしてきています。\nA: 具体的(ぐたいてき)にはどういうことですか？\nB: つまり、状況(じょうきょう)に応(おう)じて対応(たいおう)を変(か)える必要(ひつよう)があるということです。\nA: なるほど。それは確(たし)かにそうですね。\nB: ええ、柔軟(じゅうなん)な対応(たいおう)が大切(たいせつ)だと思(おも)います。",
     exampleSrc:"A: How is the economy recently?\nB: It is recovering a little.\nA: What do you mean specifically?\nB: I mean we need to change our approach depending on the situation.\nA: I see. That is certainly true.\nB: Yes, I think flexible response is important.",
     funFact:"けいき (景気) literally means 'scene spirit' (景 = scenery, 気 = spirit). When the economic 'scenery' looks bright, けいきがいい. Japan's けいき cycles include the famous バブルけいき (bubble economy, 1986-91) and the subsequent うしなわれたにじゅうねん (lost two decades) of stagnation."},

    {type:"teach", trg:"ぶっか", src:"prices / cost of living", pos:"noun", gender:null,
     note:"ぶっかじょうしょう = price increase / inflation.\nぶっかがあがる = prices rise.",
     example:"A: さいきんぶっかがあがっていますね。\nB: とくにしょくりょうひんがたかくなりました。\nA: それについてもう少(すこ)し詳(くわ)しく教(おし)えてください。\nB: 例(たと)えば、最近(さいきん)の事例(じれい)を見(み)ると、変化(へんか)が激(はげ)しいです。\nA: そうですか。どう対処(たいしょ)すればいいでしょうか。\nB: まず現状(げんじょう)を把握(はあく)してから、計画(けいかく)を立(た)てましょう。",
     exampleSrc:"A: Prices have been rising recently.\nB: Food products especially have become expensive.\nA: Please tell me more about that.\nB: For example, looking at recent cases, the changes are dramatic.\nA: Is that so? How should we handle it?\nB: Let's first grasp the current situation, then make a plan.",
     funFact:"ぶっか (物価) literally means 'thing prices.' Japan experienced decades of デフレ (deflation) where ぶっか actually dropped, unique among major economies. The government's goal of 2% inflation (インフレターゲット) became policy. ぶっかじょうしょう in 2022-23 ended Japan's deflation era."},

    {type:"teach", trg:"しゅうにゅう", src:"income / revenue", pos:"noun", gender:null,
     note:"ねんしゅう = annual income.\nしゅうにゅうげん = source of income.",
     example:"A: へいきんねんしゅうはどのくらいですか？\nB: にほんのへいきんはやくよんひゃくまんえんです。\nA: どのような方法(ほうほう)がありますか？\nB: いくつかの選択肢(せんたくし)があります。一番(いちばん)効果的(こうかてき)なのは実践(じっせん)です。\nA: 実践(じっせん)というのは、具体的(ぐたいてき)に何(なに)をすればいいですか？\nB: 毎日(まいにち)少(すこ)しずつ取(と)り組(く)むことが重要(じゅうよう)です。",
     exampleSrc:"A: What is the average annual income?\nB: Japan's average is about 4 million yen.\nA: What kinds of methods are there?\nB: There are several options. The most effective is practice.\nA: What specifically should we do in practice?\nB: It is important to work on it a little each day.",
     funFact:"Discussing しゅうにゅう (収入) is considered taboo in most Japanese social settings. ねんしゅう (annual income) is private information. However, anonymous surveys show Japan's average is about 4.4 million yen. The gap between しゅうにゅう in urban vs rural areas and between regular vs irregular workers drives social policy debates."},

    {type:"teach", trg:"ししゅつ", src:"expenditure / spending", pos:"noun", gender:null,
     note:"Opposite of しゅうにゅう.\nせいふのししゅつ = government spending.",
     example:"A: こんげつのししゅつがおおすぎます。\nB: かけいぼをつけてみてはどうですか？\nA: それはいつごろから始(はじ)まったのですか？\nB: 数年前(すうねんまえ)からですが、最近(さいきん)特(とく)に注目(ちゅうもく)されています。\nA: 今後(こんご)どうなると思(おも)いますか？\nB: さらに発展(はってん)すると予想(よそう)されています。",
     exampleSrc:"A: This month's spending is too much.\nB: How about trying to keep a household budget?\nA: When did that start?\nB: It started a few years ago, but it has been getting particular attention recently.\nA: What do you think will happen going forward?\nB: It is expected to develop further.",
     funFact:"Japanese households traditionally track ししゅつ in かけいぼ (household ledger books). This practice, invented in 1904 by journalist Hani Motoko, is still popular. Modern apps replace physical かけいぼ but the discipline of tracking every yen spent remains a Japanese financial virtue."},

    {type:"teach", trg:"とうし", src:"investment", pos:"noun", gender:null,
     note:"とうしする = to invest.\nかぶしきとうし = stock investment.",
     example:"A: とうしをはじめたいのですが。\nB: まずはしょうがくからはじめるのがいいですよ。\nA: 何(なに)か問題(もんだい)はありませんでしたか？\nB: いくつか課題(かだい)がありましたが、解決(かいけつ)しました。\nA: どのように解決(かいけつ)したのですか？\nB: チーム全体(ぜんたい)で話(はな)し合(あ)って、最善(さいぜん)の方法(ほうほう)を見(み)つけました。",
     exampleSrc:"A: I want to start investing.\nB: Starting with small amounts is good.\nA: Were there any problems?\nB: There were some issues, but we resolved them.\nA: How did you resolve them?\nB: We discussed it as a whole team and found the best method.",
     funFact:"Japanese households historically kept savings in ちょきん (bank deposits) rather than とうし. The government promotes NISA (少額投資非課税制度, small-amount tax-free investment system) to encourage とうし. Japan's stock market (東証) is the third largest globally. The cultural shift from ちょきん to とうし is ongoing."},

    {type:"teach", trg:"ぜいきん", src:"tax", pos:"noun", gender:null,
     note:"しょとくぜい = income tax.\nしょうひぜい = consumption tax (10%).",
     example:"A: にほんのしょうひぜいはなんパーセントですか？\nB: じゅうパーセントです。しょくりょうひんははちパーセントです。\nA: その点(てん)について、もう少(すこ)し説明(せつめい)していただけますか？\nB: もちろんです。重要(じゅうよう)なのは準備(じゅんび)と計画(けいかく)です。\nA: 準備(じゅんび)にはどのくらい時間(じかん)がかかりますか？\nB: 通常(つうじょう)、一週間(いっしゅうかん)から二週間(にしゅうかん)程度(ていど)です。",
     exampleSrc:"A: What is Japan's consumption tax?\nB: 10 percent. Food products are 8 percent.\nA: Could you explain that point a bit more?\nB: Of course. What is important is preparation and planning.\nA: How long does preparation take?\nB: Usually about one to two weeks.",
     funFact:"Japan's ぜいきん (税金) system includes しょうひぜい (consumption tax, 10%), しょとくぜい (income tax, progressive), and じゅうみんぜい (resident tax). The consumption tax rate has been a major political issue: raised from 5% to 8% (2014) to 10% (2019). The reduced 8% rate for food was a compromise."},

    {type:"teach", trg:"ゆしゅつ", src:"export", pos:"noun", gender:null,
     note:"ゆしゅつする = to export.\nOpposite: ゆにゅう (import).",
     example:"A: にほんのおもなゆしゅつひんはなんですか？\nB: じどうしゃやでんしぶひんです。\nA: それは素晴(すば)らしい結果(けっか)ですね。\nB: ありがとうございます。チーム全員(ぜんいん)の努力(どりょく)のおかげです。\nA: 今後(こんご)の目標(もくひょう)は何(なん)ですか？\nB: さらに品質(ひんしつ)を向上(こうじょう)させることです。",
     exampleSrc:"A: What are Japan's main exports?\nB: Automobiles and electronic parts.\nA: That is an excellent result.\nB: Thank you. It is thanks to the effort of the whole team.\nA: What are the future goals?\nB: To further improve quality.",
     funFact:"Japan's ゆしゅつ (輸出) economy is dominated by automobiles (Toyota, Honda), electronics, and machinery. Japan is the world's third-largest economy. The term ぼうえきしゅうし (trade balance) tracks ゆしゅつ vs ゆにゅう. Japan's trade relationships with the US and China dominate economic news."},

    {type:"teach", trg:"ゆにゅう", src:"import", pos:"noun", gender:null,
     note:"ゆにゅうする = to import.\nゆにゅうひん = imported goods.",
     example:"A: にほんはエネルギーをゆにゅうにたよっています。\nB: しぜんしげんがすくないですからね。\nA: 他(ほか)に何(なに)か気(き)をつけることはありますか？\nB: はい、期限(きげん)を守(まも)ることが一番(いちばん)大切(たいせつ)です。\nA: 期限(きげん)に間(ま)に合(あ)わない場合(ばあい)はどうしますか？\nB: 早(はや)めに上司(じょうし)に相談(そうだん)して、調整(ちょうせい)をお願(ねが)いします。",
     exampleSrc:"A: Japan relies on imports for energy.\nB: Because natural resources are scarce.\nA: Is there anything else to be careful about?\nB: Yes, meeting deadlines is the most important thing.\nA: What do you do if you cannot meet the deadline?\nB: Consult your supervisor early and ask for an adjustment.",
     funFact:"Japan ゆにゅう (imports) over 90% of its energy. This dependence shaped postwar policy: nuclear power was developed to reduce ゆにゅう reliance. After Fukushima, LNG imports surged. えんやす (weak yen) makes ゆにゅう more expensive, directly affecting consumer prices."},

    {type:"teach", trg:"えんだか", src:"strong yen / yen appreciation", pos:"noun", gender:null,
     note:"Opposite: えんやす (weak yen).\nえんだかになる = the yen strengthens.",
     example:"A: えんだかはゆしゅつきぎょうにとってたいへんです。\nB: かいがいりょこうにはいいですけどね。\nA: その件(けん)について進捗(しんちょく)はありますか？\nB: はい、順調(じゅんちょう)に進(すす)んでいます。\nA: 完了(かんりょう)の見込(みこ)みはいつごろですか？\nB: 来月(らいげつ)の初(はじ)めには完了(かんりょう)できる予定(よてい)です。",
     exampleSrc:"A: A strong yen is tough for export companies.\nB: But it's good for overseas travel.\nA: Is there any progress on that matter?\nB: Yes, it is progressing smoothly.\nA: When is it expected to be completed?\nB: It is scheduled to be completed by the beginning of next month.",
     funFact:"えんだか (円高, high yen) vs えんやす (円安, low yen) affects everyone. えんだか makes imports cheaper but hurts exporters. えんやす makes exports competitive but raises import costs. Japanese news reports daily えんそうば (yen exchange rate) because it directly impacts prices, travel costs, and corporate earnings."},

    {type:"teach", trg:"りそく", src:"interest (financial)", pos:"noun", gender:null,
     note:"きんり = interest rate.\nゼロきんり = zero interest rate.",
     example:"A: にほんのきんりはひくいですね。\nB: ながいあいだゼロきんりせいさくがつづいています。\nA: 以前(いぜん)と比(くら)べてどう変(か)わりましたか？\nB: かなり改善(かいぜん)されました。効率(こうりつ)が上(あ)がりました。\nA: その改善(かいぜん)の要因(よういん)は何(なん)ですか？\nB: 新(あたら)しいシステムの導入(どうにゅう)が大(おお)きかったです。",
     exampleSrc:"A: Japan's interest rates are low.\nB: Zero interest rate policy has continued for a long time.\nA: How has it changed compared to before?\nB: It has improved considerably. Efficiency has increased.\nA: What was the cause of that improvement?\nB: The introduction of the new system was a big factor.",
     funFact:"Japan's ゼロきんり (zero interest rate) policy, maintained for decades, means bank savings earn virtually nothing. This revolutionary monetary policy influenced global economics. The Bank of Japan (にちぎん) even experimented with マイナスきんり (negative interest rates). Japan's monetary policy is studied worldwide as a unique economic experiment."},

    {type:"teach", trg:"かへい", src:"currency", pos:"noun", gender:null,
     note:"かへいかち = currency value.\nがいか = foreign currency.",
     example:"A: にほんのかへいはえんです。\nB: しへいはせんえん、ごせんえん、いちまんえんのさんしゅるいです。\nA: ご意見(いけん)をお聞(き)かせいただけますか？\nB: 私(わたし)の考(かんが)えでは、もう少(すこ)し検討(けんとう)が必要(ひつよう)だと思(おも)います。\nA: どの点(てん)を検討(けんとう)すべきでしょうか？\nB: 予算(よさん)と人員(じんいん)の面(めん)をもう一度(いちど)見直(みなお)す必要(ひつよう)があります。",
     exampleSrc:"A: Japan's currency is the yen.\nB: Bills come in three types: 1,000, 5,000, and 10,000 yen.\nA: Could you share your opinion?\nB: In my opinion, I think a bit more consideration is needed.\nA: Which points should be considered?\nB: We need to review the budget and staffing aspects once more.",
     funFact:"Japanese かへい (currency) features historical and cultural figures on bills. The new 2024 series features Shibusawa Eiichi (10,000 yen), Tsuda Umeko (5,000 yen), and Kitasato Shibasaburo (1,000 yen). Japan remains one of the most cash-dependent developed economies despite efforts to promote キャッシュレス."},

    // Quiz steps
    {type:"mc", q:"にほんの「うしなわれたにじゅうねん」はなんですか？",
     opts:["Two decades of economic stagnation after the bubble burst","A holiday period","A historical war period","An education reform era"],
     ans:"Two decades of economic stagnation after the bubble burst",
     hint:"A... the バブルけいき collapsed in 1991, Japan entered a long period of e... difficulty that shaped modern Japanese society."},

    {type:"fb", s:"にほんのしょうひぜいは{1}パーセントです。",
     a:["じゅう"],
     opts:["じゅう","はち","ご","にじゅう"],
     hint:"Japan's general consumption tax rate was raised to this percentage in 2019. Food is taxed at a lower rate.",
     sSrc:"Japan's consumption tax is 10 percent."},

    {type:"match", pairs:[
      {trg:"ゆしゅつ", src:"export"},
      {trg:"ゆにゅう", src:"import"},
      {trg:"えんだか", src:"strong yen"},
      {trg:"りそく", src:"interest"}
    ]},

    {type:"mc", q:"「えんだか」はだれにとっていいですか？",
     opts:["Overseas travelers (imports become cheaper)","Export companies","Domestic manufacturers","Farmers"],
     ans:"Overseas travelers (imports become cheaper)",
     hint:"When the yen is strong, Japanese money has more purchasing power abroad, making foreign travel and imported goods c...."},

    {type:"fb", s:"さいきん{1}があがっていますね。とくにしょくりょうひんがたかくなりました。",
     a:["ぶっか"],
     opts:["ぶっか","ぜいきん","りそく","かへい"],
     hint:"The general level of prices for goods and services is rising. This term means 'prices' or 'cost of living.'",
     sSrc:"Prices have been rising recently. Food products especially have become expensive."},

    {type:"mc", q:"にほんじんのでんとうてきなかねのかんりほうほうはなんですか？",
     opts:["かけいぼ (household ledger)","Stock trading","Cryptocurrency","Credit cards only"],
     ans:"かけいぼ (household ledger)",
     hint:"This method of tracking every expenditure was invented in 1904 and remains popular in Japanese financial culture."}
  ]
};
export default BATCH11_L1;
