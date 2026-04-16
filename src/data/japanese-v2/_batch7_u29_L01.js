// Batch 7 – Unit 29 (B2.1 Economy): Financial & Economic Terms
const BATCH7_L1 = {
  id:"jav2_u29l_b7_1", title:"けいざいようご", icon:"💹", xp:15, board:true,
  steps:[
    {type:"intro", title:"けいざいようご",
     desc:"Learn financial and economic vocabulary for understanding news, discussing market trends, and navigating Japan's economy. These JLPT N2 terms appear in business and media daily.",
     goals:["Discuss economic trends and indicators","Use financial terminology accurately","Analyze market situations with proper vocabulary"]},

    {type:"teach", trg:"けいき", src:"economic conditions / business climate", pos:"noun", gender:null,
     note:"けいきがいい = economy is good. ふけいき = recession.\nけいきかいふく = economic recovery.",
     example:"A: さいきんけいきはどうですか？\nB: すこしかいふくしてきています。",
     exampleSrc:"A: How is the economy recently?\nB: It is recovering a little.",
     funFact:"けいき (景気) uses 景 (scenery/view) and 気 (spirit/energy). The economy's 'mood' or 'energy.' Japanese people discuss けいき like weather. けいきDI (Diffusion Index) is closely watched. The famous 'Tankan' survey by the Bank of Japan measures business けいき quarterly."},

    {type:"teach", trg:"ぶっか", src:"prices (general price level)", pos:"noun", gender:null,
     note:"ぶっかじょうしょう = price increase/inflation.\nぶっかかとく = price stability.",
     example:"A: さいきんぶっかがあがっていますね。\nB: とくにしょくひんのぶっかがたかくなりました。",
     exampleSrc:"A: Prices have been rising recently.\nB: Food prices especially have become high.",
     funFact:"ぶっか (物価) literally means 'thing-price.' Japan experienced decades of deflation (デフレ) where ぶっか fell or stagnated. After 2022, ぶっか started rising significantly for the first time in 30 years. Japanese consumers, accustomed to stable prices, found ぶっかじょうしょう shocking."},

    {type:"teach", trg:"かぶしき", src:"stocks / shares", pos:"noun", gender:null,
     note:"かぶしきしじょう = stock market. かぶか = stock price.\nかぶしきがいしゃ = corporation (stock company).",
     example:"A: きょうのかぶかはどうでしたか？\nB: にっけいへいきんがあがりました。",
     exampleSrc:"A: How were stock prices today?\nB: The Nikkei average went up.",
     funFact:"かぶしき (株式) uses 株 (stump/share) and 式 (style/form). The Tokyo Stock Exchange (東京証券取引所) is the world's third largest. にっけいへいきん (Nikkei 225) is Japan's main stock index. Japanese individual investment in かぶしき was historically low but is growing rapidly with NISA tax incentives."},

    {type:"teach", trg:"きんゆう", src:"finance / banking", pos:"noun", gender:null,
     note:"きんゆうきかん = financial institution.\nきんゆうせいさく = monetary policy.",
     example:"A: にほんぎんこうのきんゆうせいさくがかわりました。\nB: きんりにえいきょうがありますね。",
     exampleSrc:"A: The Bank of Japan's monetary policy changed.\nB: It affects interest rates.",
     funFact:"きんゆう (金融) combines 金 (gold/money) and 融 (melt/blend). Finance 'melts' money into the economy. Japan's きんゆう system includes megabanks (三菱UFJ, みずほ, 三井住友), regional banks, and the powerful Bank of Japan (日本銀行). Zero interest rates lasted over a decade, reshaping savings culture."},

    {type:"teach", trg:"ぼうえき", src:"trade / foreign trade", pos:"noun", gender:null,
     note:"ぼうえきしゅうし = trade balance. ゆしゅつ = export. ゆにゅう = import.",
     example:"A: にほんはぼうえきのくにです。\nB: しげんをゆにゅうし、せいひんをゆしゅつしています。",
     exampleSrc:"A: Japan is a trading nation.\nB: It imports resources and exports products.",
     funFact:"ぼうえき (貿易) has defined Japan since the Meiji era. Japan transforms imported raw materials into high-value exports (cars, electronics, machinery). The trade surplus peaked in the 1980s, causing friction with the US. Today, Japan imports more energy post-Fukushima, shifting the ぼうえきしゅうし."},

    {type:"teach", trg:"ぜいきん", src:"tax", pos:"noun", gender:null,
     note:"しょとくぜい = income tax. しょうひぜい = consumption tax.\nぜいきんをおさめる = to pay taxes.",
     example:"A: しょうひぜいがあがりましたね。\nB: かけいにえいきょうがおおきいです。",
     exampleSrc:"A: Consumption tax went up.\nB: The impact on household budgets is large.",
     funFact:"ぜいきん (税金) debates dominate Japanese politics. Consumption tax rose from 3% (1989) to 5% to 8% to 10%. Each increase sparked public outcry. Japan's ぜいきん structure combines national and local taxes. The ふるさとのうぜい (hometown tax donation) system lets people direct tax payments to rural areas and receive local products in return."},

    {type:"teach", trg:"よさん", src:"budget", pos:"noun", gender:null,
     note:"こっかよさん = national budget. よさんあん = budget proposal.\nよさんをくむ = to draft a budget.",
     example:"A: らいねんどのよさんあんがはっぴょうされました。\nB: きょういくよさんはふえましたか？",
     exampleSrc:"A: Next year's budget proposal was announced.\nB: Did the education budget increase?",
     funFact:"よさん (予算) debates in the Japanese Diet (国会) are major political events. Japan's national よさん exceeds 100 trillion yen. About one-third goes to social security (社会保障). The massive national debt (over 250% of GDP) makes よさん discussions about balancing services and fiscal responsibility increasingly urgent."},

    {type:"teach", trg:"さいむ", src:"debt / liabilities", pos:"noun", gender:null,
     note:"こっかさいむ = national debt. さいむしゃ = debtor.\nさいむせいり = debt restructuring.",
     example:"A: にほんのこっかさいむはおおきいですね。\nB: GDPの250パーセントいじょうです。",
     exampleSrc:"A: Japan's national debt is large.\nB: Over 250% of GDP.",
     funFact:"Japan has the world's highest government さいむ (debt) to GDP ratio. Despite this, Japanese government bonds remain stable because over 90% are held domestically. The debate between fiscal hawks (ざいせいけんぜんは) and growth-first advocates (せいちょうゆうせん) defines economic policy discussions."},

    {type:"teach", trg:"ちんぎん", src:"wages / pay", pos:"noun", gender:null,
     note:"ちんぎんいんあげ = wage increase.\nさいていちんぎん = minimum wage.",
     example:"A: ちんぎんがあがらないのにぶっかがあがっています。\nB: じっしつちんぎんがさがっていますね。",
     exampleSrc:"A: Prices rise while wages do not.\nB: Real wages are declining.",
     funFact:"ちんぎん (賃金) stagnation is Japan's defining economic challenge. Wages barely grew for 30 years. 春闘 (しゅんとう, spring wage negotiations) between unions and companies are annual events. PM Kishida made ちんぎんいんあげ (wage increases) a top priority. The phrase 失われた30年 (lost 30 years) describes this era."},

    {type:"teach", trg:"スタートアップ", src:"startup (company)", pos:"noun", gender:null,
     note:"Katakana loanword. スタートアップきぎょう = startup company.\nスタートアップしえん = startup support.",
     example:"A: にほんでもスタートアップがふえています。\nB: しぶやがスタートアップのちゅうしんちです。",
     exampleSrc:"A: Startups are increasing in Japan too.\nB: Shibuya is the startup center.",
     funFact:"Japan's スタートアップ ecosystem is growing but still small compared to the US and China. The government declared a 'Startup Development Five-Year Plan' in 2022, aiming to create 100,000 new startups. Risk-averse culture and the security of large company employment slow growth. Shibuya's 'Bit Valley' is Japan's startup hub."},

    {type:"teach", trg:"フリーランス", src:"freelancer", pos:"noun", gender:null,
     note:"Katakana loanword. フリーランスではたらく = to work freelance.\nフリーランスのほうがじゆう = freelancing is freer.",
     example:"A: フリーランスにてんしょくしました。\nB: じゆうなはたらきかたですね。",
     exampleSrc:"A: I switched to freelancing.\nB: A free way of working.",
     funFact:"フリーランス is a growing work style in Japan, with over 4 million people. The Freelance Protection Law (2023) gives them better legal standing. Remote work acceleration during COVID expanded フリーランス opportunities. However, lack of benefits (けんこうほけん, ねんきん) remains a challenge."},

    {type:"teach", trg:"じっしつちんぎん", src:"real wages (adjusted for inflation)", pos:"noun", gender:null,
     note:"じっしつ = real/actual. ちんぎん = wages.\nめいもくちんぎん = nominal wages.",
     example:"A: じっしつちんぎんがさがりつづけています。\nB: ぶっかじょうしょうがげんいんですね。",
     exampleSrc:"A: Real wages continue to decline.\nB: Price increases are the cause.",
     funFact:"じっしつちんぎん (実質賃金) is the true measure of purchasing power. Even if nominal wages rise, if ぶっか rises faster, じっしつちんぎん falls. Japan has experienced じっしつちんぎん decline for consecutive months, creating the painful combination of higher prices and stagnant real income."},

    // Quiz steps
    {type:"mc", q:"Japan's national debt exceeds:",
     opts:["250% of GDP","100% of GDP","50% of GDP","500% of GDP"],
     ans:"250% of GDP",
     hint:"Despite being the world's highest ratio, Japanese bonds remain stable because most are held domestically."},

    {type:"match", pairs:[
      {trg:"けいき", src:"economic conditions"},
      {trg:"ぶっか", src:"prices"},
      {trg:"かぶしき", src:"stocks"},
      {trg:"ぼうえき", src:"trade"},
      {trg:"ぜいきん", src:"tax"}
    ]},

    {type:"fb", s:"さいきん{1}があがっていますね。とくにしょくひんが。",
     a:["ぶっか"],
     opts:["ぶっか","ちんぎん","かぶか","よさん"],
     hint:"General price levels have been rising, especially food. This word means 'prices.'",
     sSrc:"Recently {1} have been rising. Especially food."},

    {type:"mc", q:"春闘 (shuntou) is:",
     opts:["Annual spring wage negotiations","A spring festival","A sumo tournament","A cherry blossom event"],
     ans:"Annual spring wage negotiations",
     hint:"Unions and companies negotiate ちんぎん increases every s... in this ritual."},

    {type:"fb", s:"にほんぎんこうの{1}せいさくがかわりました。",
     a:["きんゆう"],
     opts:["きんゆう","ぼうえき","ぜいきん","けいき"],
     hint:"The Bank of Japan changed its monetary policy. This word means 'finance/banking.'",
     sSrc:"The Bank of Japan's {1} policy changed."},

    {type:"mc", q:"ふるさとのうぜい lets people:",
     opts:["Direct tax payments to rural areas and receive local products","Avoid paying taxes entirely","Pay taxes to foreign countries","Get tax refunds automatically"],
     ans:"Direct tax payments to rural areas and receive local products",
     hint:"This unique Japanese system lets taxpayers support r... communities in exchange for regional specialties."},

    {type:"match", pairs:[
      {trg:"きんゆう", src:"finance"},
      {trg:"よさん", src:"budget"},
      {trg:"さいむ", src:"debt"},
      {trg:"ちんぎん", src:"wages"},
      {trg:"じっしつちんぎん", src:"real wages"}
    ]},

    {type:"fb", s:"にほんでも{1}がふえています。しぶやがちゅうしんちです。",
     a:["スタートアップ"],
     opts:["スタートアップ","フリーランス","ぼうえき","きんゆう"],
     hint:"New innovative companies are growing in Japan, especially in Shibuya.",
     sSrc:"{1} are increasing in Japan too. Shibuya is the center."}
  ]
};
export default BATCH7_L1;
