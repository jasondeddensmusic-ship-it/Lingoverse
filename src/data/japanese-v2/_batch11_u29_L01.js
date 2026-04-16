// Batch 11 – Unit 29 (B2.2 Economy): Economic & Financial Terms
const BATCH11_L1 = {
  id:"jav2_u29l_b11_1", title:"けいざいようご", icon:"💹", xp:15, board:true,
  steps:[
    {type:"intro", title:"けいざいようご",
     desc:"Learn essential economic and financial vocabulary. These terms appear frequently in news, business discussions, and JLPT N2 reading passages.",
     goals:["Discuss economic trends and indicators","Use financial vocabulary in context","Understand economic news reports"]},

    {type:"teach", trg:"けいき", src:"economy / business conditions", pos:"noun", gender:null,
     note:"けいきがいい = economy is good.\nふけいき = recession.",
     example:"A: さいきんのけいきはどうですか？\nB: すこしかいふくしてきています。",
     exampleSrc:"A: How is the economy recently?\nB: It is recovering a little.",
     funFact:"けいき (景気) literally means 'scene spirit' (景 = scenery, 気 = spirit). When the economic 'scenery' looks bright, けいきがいい. Japan's けいき cycles include the famous バブルけいき (bubble economy, 1986-91) and the subsequent うしなわれたにじゅうねん (lost two decades) of stagnation."},

    {type:"teach", trg:"ぶっか", src:"prices / cost of living", pos:"noun", gender:null,
     note:"ぶっかじょうしょう = price increase / inflation.\nぶっかがあがる = prices rise.",
     example:"A: さいきんぶっかがあがっていますね。\nB: とくにしょくりょうひんがたかくなりました。",
     exampleSrc:"A: Prices have been rising recently.\nB: Food products especially have become expensive.",
     funFact:"ぶっか (物価) literally means 'thing prices.' Japan experienced decades of デフレ (deflation) where ぶっか actually dropped, unique among major economies. The government's goal of 2% inflation (インフレターゲット) became policy. ぶっかじょうしょう in 2022-23 ended Japan's deflation era."},

    {type:"teach", trg:"しゅうにゅう", src:"income / revenue", pos:"noun", gender:null,
     note:"ねんしゅう = annual income.\nしゅうにゅうげん = source of income.",
     example:"A: へいきんねんしゅうはどのくらいですか？\nB: にほんのへいきんはやくよんひゃくまんえんです。",
     exampleSrc:"A: What is the average annual income?\nB: Japan's average is about 4 million yen.",
     funFact:"Discussing しゅうにゅう (収入) is considered taboo in most Japanese social settings. ねんしゅう (annual income) is private information. However, anonymous surveys show Japan's average is about 4.4 million yen. The gap between しゅうにゅう in urban vs rural areas and between regular vs irregular workers drives social policy debates."},

    {type:"teach", trg:"ししゅつ", src:"expenditure / spending", pos:"noun", gender:null,
     note:"Opposite of しゅうにゅう.\nせいふのししゅつ = government spending.",
     example:"A: こんげつのししゅつがおおすぎます。\nB: かけいぼをつけてみてはどうですか？",
     exampleSrc:"A: This month's spending is too much.\nB: How about trying to keep a household budget?",
     funFact:"Japanese households traditionally track ししゅつ in かけいぼ (household ledger books). This practice, invented in 1904 by journalist Hani Motoko, is still popular. Modern apps replace physical かけいぼ but the discipline of tracking every yen spent remains a Japanese financial virtue."},

    {type:"teach", trg:"とうし", src:"investment", pos:"noun", gender:null,
     note:"とうしする = to invest.\nかぶしきとうし = stock investment.",
     example:"A: とうしをはじめたいのですが。\nB: まずはしょうがくからはじめるのがいいですよ。",
     exampleSrc:"A: I want to start investing.\nB: Starting with small amounts is good.",
     funFact:"Japanese households historically kept savings in ちょきん (bank deposits) rather than とうし. The government promotes NISA (少額投資非課税制度, small-amount tax-free investment system) to encourage とうし. Japan's stock market (東証) is the third largest globally. The cultural shift from ちょきん to とうし is ongoing."},

    {type:"teach", trg:"ぜいきん", src:"tax", pos:"noun", gender:null,
     note:"しょとくぜい = income tax.\nしょうひぜい = consumption tax (10%).",
     example:"A: にほんのしょうひぜいはなんパーセントですか？\nB: じゅうパーセントです。しょくりょうひんははちパーセントです。",
     exampleSrc:"A: What is Japan's consumption tax?\nB: 10 percent. Food products are 8 percent.",
     funFact:"Japan's ぜいきん (税金) system includes しょうひぜい (consumption tax, 10%), しょとくぜい (income tax, progressive), and じゅうみんぜい (resident tax). The consumption tax rate has been a major political issue: raised from 5% to 8% (2014) to 10% (2019). The reduced 8% rate for food was a compromise."},

    {type:"teach", trg:"ゆしゅつ", src:"export", pos:"noun", gender:null,
     note:"ゆしゅつする = to export.\nOpposite: ゆにゅう (import).",
     example:"A: にほんのおもなゆしゅつひんはなんですか？\nB: じどうしゃやでんしぶひんです。",
     exampleSrc:"A: What are Japan's main exports?\nB: Automobiles and electronic parts.",
     funFact:"Japan's ゆしゅつ (輸出) economy is dominated by automobiles (Toyota, Honda), electronics, and machinery. Japan is the world's third-largest economy. The term ぼうえきしゅうし (trade balance) tracks ゆしゅつ vs ゆにゅう. Japan's trade relationships with the US and China dominate economic news."},

    {type:"teach", trg:"ゆにゅう", src:"import", pos:"noun", gender:null,
     note:"ゆにゅうする = to import.\nゆにゅうひん = imported goods.",
     example:"A: にほんはエネルギーをゆにゅうにたよっています。\nB: しぜんしげんがすくないですからね。",
     exampleSrc:"A: Japan relies on imports for energy.\nB: Because natural resources are scarce.",
     funFact:"Japan ゆにゅう (imports) over 90% of its energy. This dependence shaped postwar policy: nuclear power was developed to reduce ゆにゅう reliance. After Fukushima, LNG imports surged. えんやす (weak yen) makes ゆにゅう more expensive, directly affecting consumer prices."},

    {type:"teach", trg:"えんだか", src:"strong yen / yen appreciation", pos:"noun", gender:null,
     note:"Opposite: えんやす (weak yen).\nえんだかになる = the yen strengthens.",
     example:"A: えんだかはゆしゅつきぎょうにとってたいへんです。\nB: かいがいりょこうにはいいですけどね。",
     exampleSrc:"A: A strong yen is tough for export companies.\nB: But it's good for overseas travel.",
     funFact:"えんだか (円高, high yen) vs えんやす (円安, low yen) affects everyone. えんだか makes imports cheaper but hurts exporters. えんやす makes exports competitive but raises import costs. Japanese news reports daily えんそうば (yen exchange rate) because it directly impacts prices, travel costs, and corporate earnings."},

    {type:"teach", trg:"りそく", src:"interest (financial)", pos:"noun", gender:null,
     note:"きんり = interest rate.\nゼロきんり = zero interest rate.",
     example:"A: にほんのきんりはひくいですね。\nB: ながいあいだゼロきんりせいさくがつづいています。",
     exampleSrc:"A: Japan's interest rates are low.\nB: Zero interest rate policy has continued for a long time.",
     funFact:"Japan's ゼロきんり (zero interest rate) policy, maintained for decades, means bank savings earn virtually nothing. This revolutionary monetary policy influenced global economics. The Bank of Japan (にちぎん) even experimented with マイナスきんり (negative interest rates). Japan's monetary policy is studied worldwide as a unique economic experiment."},

    {type:"teach", trg:"かへい", src:"currency", pos:"noun", gender:null,
     note:"かへいかち = currency value.\nがいか = foreign currency.",
     example:"A: にほんのかへいはえんです。\nB: しへいはせんえん、ごせんえん、いちまんえんのさんしゅるいです。",
     exampleSrc:"A: Japan's currency is the yen.\nB: Bills come in three types: 1,000, 5,000, and 10,000 yen.",
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
