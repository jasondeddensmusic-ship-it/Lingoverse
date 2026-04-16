// Batch 7 – Unit 35 (B2.2 Information Society): Digital & Technology Vocabulary
const BATCH7_L1 = {
  id:"jav2_u35l_b7_1", title:"デジタルしゃかい", icon:"💻", xp:15, board:true,
  steps:[
    {type:"intro", title:"デジタルしゃかい",
     desc:"Learn vocabulary for the digital age: AI, data, privacy, and technology ethics. These terms are essential for understanding modern Japan's relationship with technology.",
     goals:["Discuss AI and digital technology","Use privacy and data vocabulary","Express opinions about technology's role in society"]},

    {type:"teach", trg:"じんこうちのう", src:"artificial intelligence (AI)", pos:"noun", gender:null,
     note:"Also: AI (エーアイ). じんこうちのうぎじゅつ = AI technology.\nAIかつよう = AI utilization.",
     example:"A: じんこうちのうがしゃかいをかえています。\nB: きかいもあればリスクもありますね。",
     exampleSrc:"A: AI is changing society.\nB: There are opportunities and risks.",
     funFact:"じんこうちのう (人工知能) research is a Japanese government priority. Japan's Society 5.0 vision integrates AI into every sector. However, Japan lags behind the US and China in AI development. Anime and manga (Astro Boy, Ghost in the Shell) explored AI concepts decades before the current boom, shaping Japanese attitudes toward AI."},

    {type:"teach", trg:"じどうか", src:"automation", pos:"noun", gender:null,
     note:"こうじょうのじどうか = factory automation.\nぎょうむじどうか = business process automation.",
     example:"A: じどうかによってせいさんせいがあがりました。\nB: しかしこようへのえいきょうもあります。",
     exampleSrc:"A: Automation increased productivity.\nB: However, there is impact on employment.",
     funFact:"Japan pioneered industrial じどうか (自動化) with robotics in the 1970s-80s. Japanese factories have more robots per worker than almost any country. Now, じどうか extends to services: automated checkout (セルフレジ), robot hotels, and AI customer service. Japan views じどうか as an answer to labor shortages from the aging population."},

    {type:"teach", trg:"こじんじょうほう", src:"personal information / personal data", pos:"noun", gender:null,
     note:"こじんじょうほうほごほう = Personal Information Protection Law.\nろうえい = data leak.",
     example:"A: こじんじょうほうのかんりはだいじです。\nB: ろうえいじこがふえていますね。",
     exampleSrc:"A: Managing personal data is important.\nB: Data leak incidents are increasing.",
     funFact:"こじんじょうほう (個人情報) protection became law in 2003, updated significantly in 2022. Japan received an EU 'adequacy' decision, meaning data can flow freely between Japan and EU. The number of こじんじょうほうろうえい incidents grows annually. Companies face fines and reputational damage for mishandling data."},

    {type:"teach", trg:"でんししょめい", src:"digital signature / electronic signature", pos:"noun", gender:null,
     note:"Also: でんしサイン. でんししょめいほう = Digital Signature Law.\nオンラインけいやく = online contracts.",
     example:"A: でんししょめいでけいやくができます。\nB: はんこがいらなくなりましたね。",
     exampleSrc:"A: Contracts can be made with digital signatures.\nB: Personal seals are no longer needed.",
     funFact:"でんししょめい (電子署名) is slowly replacing はんこ (personal seals) in Japan. The COVID pandemic accelerated this shift when working from home made physical seal-stamping impractical. The 'digital minister' (デジタル大臣) position was created in 2021 to drive digital transformation. Japan's はんこ culture resists change."},

    {type:"teach", trg:"クラウド", src:"cloud (computing)", pos:"noun", gender:null,
     note:"Katakana loanword. クラウドコンピューティング = cloud computing.\nクラウドサービス = cloud services.",
     example:"A: データはクラウドにほぞんしましょう。\nB: セキュリティはだいじょうぶですか？",
     exampleSrc:"A: Let us save data to the cloud.\nB: Is the security okay?",
     funFact:"クラウド adoption in Japan was slower than in the US due to security concerns and preference for on-premises systems. The government's 'Cloud by Default' policy (2018) pushed adoption. Japanese companies increasingly use AWS, Azure, and domestic providers. Data sovereignty (データしゅけん) concerns influence クラウド decisions."},

    {type:"teach", trg:"キャッシュレスか", src:"going cashless / cashless transition", pos:"noun", gender:null,
     note:"キャッシュレスけっさい = cashless payment.\nQRコードけっさい = QR code payment.",
     example:"A: にほんでもキャッシュレスかがすすんでいます。\nB: でもまだげんきんがすきなひともおおいです。",
     exampleSrc:"A: Cashless transition is progressing in Japan too.\nB: But many people still prefer cash.",
     funFact:"Japan's キャッシュレス (cashless) rate jumped from 24% (2019) to over 36% during COVID. PayPay (QR code payment) became ubiquitous. However, Japan still lags behind China (80%+) and South Korea (90%+). Elderly resistance, love of cash, and the reliability of ATMs slow the transition. The government targets 40% by 2025."},

    {type:"teach", trg:"ブロックチェーン", src:"blockchain", pos:"noun", gender:null,
     note:"Katakana loanword. ぶんさんがたちょうぼ = distributed ledger.\nかそうつうか = cryptocurrency.",
     example:"A: ブロックチェーンぎじゅつにちゅうもくしています。\nB: きんゆういがいのかつようもきたいされていますね。",
     exampleSrc:"A: I am paying attention to blockchain technology.\nB: Applications beyond finance are expected.",
     funFact:"Japan was an early ブロックチェーン adopter. Mt. Gox (the early Bitcoin exchange) was based in Tokyo. After its 2014 collapse, Japan created the world's first crypto exchange regulatory framework. NFTs (非代替性トークン) generated art and gaming interest. Japan views ブロックチェーン as infrastructure for Web3."},

    {type:"teach", trg:"じょうほうかくさ", src:"digital divide / information gap", pos:"noun", gender:null,
     note:"デジタルデバイド = digital divide (loanword).\nせだいかんかくさ = generational gap.",
     example:"A: こうれいしゃとわかものでじょうほうかくさがあります。\nB: デジタルきょうしつがひつようですね。",
     exampleSrc:"A: There is a digital divide between elderly and young.\nB: Digital literacy classes are needed.",
     funFact:"じょうほうかくさ (情報格差) is significant in Japan's aging society. While young people are digitally fluent, many elderly struggle with smartphones and online services. The government's マイナンバーカード (My Number Card, digital ID) rollout exposed this gap. Local governments offer デジタルかつようしえん (digital usage support) classes."},

    {type:"teach", trg:"テレワーク", src:"telework / remote work", pos:"noun", gender:null,
     note:"Katakana loanword. Also: リモートワーク.\nテレワークどうにゅう = telework implementation.",
     example:"A: コロナのあとテレワークがふえました。\nB: つうきんじかんがへってよかったです。",
     exampleSrc:"A: Telework increased after COVID.\nB: It was good that commuting time decreased.",
     funFact:"テレワーク transformed Japanese work culture almost overnight during COVID. Pre-pandemic, remote work was rare (under 10%). At peak, it reached 30%+ in Tokyo. Many companies now offer hybrid arrangements. However, traditional management culture (見える化, making work visible) and はんこ requirements slowed adoption."},

    {type:"teach", trg:"サイバーこうげき", src:"cyber attack", pos:"noun", gender:null,
     note:"サイバーセキュリティ = cybersecurity.\nランサムウェア = ransomware.",
     example:"A: きぎょうへのサイバーこうげきがふえています。\nB: セキュリティたいさくがきゅうむです。",
     exampleSrc:"A: Cyber attacks on companies are increasing.\nB: Security measures are urgent.",
     funFact:"サイバーこうげき against Japan has increased dramatically. The 2022 attack on Toyota's supply chain shut down all Japanese factories for a day. Government and military systems face constant threats. Japan created a サイバーセキュリティ strategy and actively develops defense capabilities. Shortage of cybersecurity professionals is a critical challenge."},

    {type:"teach", trg:"ロボットこうがく", src:"robotics / robot engineering", pos:"noun", gender:null,
     note:"ロボット = robot. こうがく = engineering.\nさんぎょうようロボット = industrial robot.",
     example:"A: にほんはロボットこうがくのせんしんこくです。\nB: かいごロボットやさんぎょうようロボットがゆうめいです。",
     exampleSrc:"A: Japan is a leader in robotics.\nB: Care robots and industrial robots are famous.",
     funFact:"Japan has the world's highest robot density in manufacturing. Beyond factories, Japan develops ロボット for eldercare (介護ロボット), disaster response, and companionship. The cultural acceptance of robots (influenced by Astro Boy and Doraemon) makes Japan uniquely receptive. ASIMO, Pepper, and AIBO represent Japan's ロボット innovation."},

    {type:"teach", trg:"じどううんてん", src:"autonomous driving / self-driving", pos:"noun", gender:null,
     note:"じどううんてんしゃ = self-driving car.\nレベル4じどううんてん = Level 4 autonomy.",
     example:"A: じどううんてんのじっけんがすすんでいます。\nB: かそちいきでのかつようがきたいされています。",
     exampleSrc:"A: Self-driving experiments are progressing.\nB: Use in rural areas is expected.",
     funFact:"Japan approved Level 4 じどううんてん (autonomous driving) in 2023, among the first countries to do so. The focus is rural areas where elderly drivers face accident risks and public transport is limited. Toyota, Honda, and Nissan invest heavily. Japan's detailed traffic laws and narrow roads create unique じどううんてん challenges."},

    // Quiz steps
    {type:"mc", q:"Japan's cashless payment rate is approximately:",
     opts:["36%","80%","10%","60%"],
     ans:"36%",
     hint:"Still lower than China (80%+) and South Korea (90%+), though growing rapidly post-COVID."},

    {type:"match", pairs:[
      {trg:"じんこうちのう", src:"AI"},
      {trg:"じどうか", src:"automation"},
      {trg:"クラウド", src:"cloud computing"},
      {trg:"テレワーク", src:"remote work"},
      {trg:"ロボットこうがく", src:"robotics"}
    ]},

    {type:"fb", s:"{1}のかんりはだいじです。ろうえいじこがふえています。",
     a:["こじんじょうほう"],
     opts:["こじんじょうほう","でんししょめい","ブロックチェーン","クラウド"],
     hint:"Personal data management is critical as leak incidents increase.",
     sSrc:"{1} management is important. Leak incidents are increasing."},

    {type:"mc", q:"はんこ culture in Japan is being challenged by:",
     opts:["Digital signatures and remote work","New seal designs","Faster ink","Larger stamps"],
     ans:"Digital signatures and remote work",
     hint:"COVID made physical seal-stamping impractical, accelerating the shift to でんししょめい."},

    {type:"fb", s:"こうれいしゃとわかもので{1}があります。",
     a:["じょうほうかくさ"],
     opts:["じょうほうかくさ","テレワーク","キャッシュレス","クラウド"],
     hint:"The gap in digital literacy between elderly and young people.",
     sSrc:"There is a {1} between elderly and young people."},

    {type:"mc", q:"Japan approved Level 4 autonomous driving in 2023 primarily for:",
     opts:["Rural areas where elderly face transportation challenges","Tokyo highway traffic","Racing competitions","Delivery drones"],
     ans:"Rural areas where elderly face transportation challenges",
     hint:"The focus is solving mobility issues in a... with limited public transport and aging drivers."},

    {type:"match", pairs:[
      {trg:"こじんじょうほう", src:"personal data"},
      {trg:"でんししょめい", src:"digital signature"},
      {trg:"サイバーこうげき", src:"cyber attack"},
      {trg:"じどううんてん", src:"autonomous driving"},
      {trg:"じょうほうかくさ", src:"digital divide"}
    ]},

    {type:"fb", s:"きぎょうへの{1}がふえています。セキュリティがきゅうむです。",
     a:["サイバーこうげき"],
     opts:["サイバーこうげき","テレワーク","じどうか","キャッシュレス"],
     hint:"Attacks on corporate computer systems are increasing. Security is urgent.",
     sSrc:"{1} on companies are increasing. Security is urgent."}
  ]
};
export default BATCH7_L1;
