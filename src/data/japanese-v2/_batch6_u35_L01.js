// Batch 6 – Unit 35 (B2.4 Information Society): AI & Digital Transformation
const BATCH6_L1 = {
  id:"jav2_u35l_b6_1", title:"AIとデジタルへんかく", icon:"🤖", xp:15, board:true,
  steps:[
    {type:"intro", title:"AIとデジタルへんかく",
     desc:"Learn cutting-edge vocabulary for artificial intelligence, digital transformation, and the information society. These terms dominate Japanese news, business, and academic discourse.",
     goals:["Discuss AI and technology trends","Use vocabulary for digital transformation","Express opinions on technology and society"]},

    {type:"teach", trg:"じんこうちのう", src:"artificial intelligence (AI)", pos:"noun", gender:null,
     note:"Kanji: 人工知能. Abbreviated: AI (エーアイ).\nAIぎじゅつ = AI technology.",
     example:"A: じんこうちのうがわたしたちのせいかつをかえています。\nB: べんりになるはんめん、しつぎょうのふあんもありますね。",
     exampleSrc:"A: Artificial intelligence is changing our lives.\nB: It becomes convenient, but there are also worries about unemployment.",
     funFact:"じんこうちのう (人工知能) uses 人工 (artificial) and 知能 (intelligence). Japan was an early AI researcher (the Fifth Generation Computer Project, 1982). Today, Japan uses AI in manufacturing (ものづくり), healthcare (いりょう), and disaster prediction (さいがいよそく). The national AI strategy aims to make Japan a world leader."},

    {type:"teach", trg:"ビッグデータ", src:"big data", pos:"noun", gender:null,
     note:"Katakana loanword. ビッグデータかいせき = big data analysis.\nデータかつよう = data utilization.",
     example:"A: ビッグデータをかつようしてマーケティングをこうりつかしましょう。\nB: こきゃくのこうどうパターンがわかりますね。",
     exampleSrc:"A: Let us use big data to make marketing more efficient.\nB: We can understand customer behavior patterns.",
     funFact:"ビッグデータ has become a major buzzword in Japanese business. Companies analyze purchasing patterns, web behavior, and IoT sensor data. Japan's My Number system and government digitalization (デジタルちょう, Digital Agency, established 2021) aim to create a data-driven society while protecting privacy (プライバシー)."},

    {type:"teach", trg:"ロボット", src:"robot", pos:"noun", gender:null,
     note:"Katakana loanword. さんぎょうロボット = industrial robot.\nかいごロボット = care robot.",
     example:"A: にほんはロボットぎじゅつのせかいてきリーダーです。\nB: こうじょうだけでなく、かいごやサービスにもつかわれていますね。",
     exampleSrc:"A: Japan is a global leader in robot technology.\nB: They are used not only in factories but also in care and services.",
     funFact:"Japan loves ロボット. From Astro Boy (鉄腕アトム) to Pepper (the social robot), Japanese culture embraces robots as helpful companions rather than threats. Japan leads in industrial ロボット deployment. Aging society drives development of かいごロボット (care robots) and コミュニケーションロボット (companion robots)."},

    {type:"teach", trg:"じどうか", src:"automation", pos:"noun", gender:null,
     note:"Kanji: 自動化. じどうかする = to automate.\nこうじょうのじどうか = factory automation.",
     example:"A: じどうかによってせいさんせいがあがりました。\nB: いっぽうで、しごとがなくなるふあんもあります。",
     exampleSrc:"A: Productivity increased through automation.\nB: On the other hand, there are concerns about job losses.",
     funFact:"じどうか (自動化) combines 自動 (automatic) and 化 (transformation). Japan pioneered factory じどうか with Toyota's production system. Now, AI-driven じどうか extends to offices, agriculture, and logistics. じどううんてん (autonomous driving) is heavily invested in, with Japan aiming for Level 4 autonomy."},

    {type:"teach", trg:"プライバシー", src:"privacy", pos:"noun", gender:null,
     note:"Katakana loanword. こじんのプライバシー = personal privacy.\nプライバシーほご = privacy protection.",
     example:"A: ビッグデータかつようとプライバシーほごのバランスがむずかしいです。\nB: ほうせいびがひつようですね。",
     exampleSrc:"A: Balancing big data use and privacy protection is difficult.\nB: Legal frameworks are needed.",
     funFact:"プライバシー awareness is growing in Japan. The こじんじょうほうほごほう (Personal Information Protection Act) was strengthened in 2022. Japanese culture values privacy in some areas (home life) but shares more in others (workplace). The tension between データかつよう and プライバシー is a major societal debate."},

    {type:"mc", q:"じどうか means:", opts:["Automation","Digitalization","Artificial intelligence","Robotics"], ans:"Automation",
     hint:"This word describes making processes run by themselves without human intervention."},

    {type:"teach", trg:"かくしん", src:"innovation / revolution", pos:"noun", gender:null,
     note:"Kanji: 革新. ぎじゅつかくしん = technological innovation.\nかくしんてき = innovative.",
     example:"A: ぎじゅつかくしんのスピードがはやまっています。\nB: たいおうできるじんざいがひつようです。",
     exampleSrc:"A: The speed of technological innovation is accelerating.\nB: Personnel who can adapt are needed.",
     funFact:"かくしん (革新) uses 革 (leather/reform) and 新 (new). Japan faces an 'innovation dilemma': excelling at かいぜん (incremental improvement) but struggling with disruptive かくしん. Startups (スタートアップ) are being promoted by government. Silicon Valley-style かくしん culture is slowly growing in Japan."},

    {type:"teach", trg:"セキュリティ", src:"security (cyber/digital)", pos:"noun", gender:null,
     note:"Katakana loanword. サイバーセキュリティ = cybersecurity.\nセキュリティたいさく = security measures.",
     example:"A: サイバーセキュリティのきょうかがきゅうむです。\nB: パスワードかんりからはじめましょう。",
     exampleSrc:"A: Strengthening cybersecurity is urgent.\nB: Let us start with password management.",
     funFact:"サイバーセキュリティ is a national priority. Japan established the National Center of Incident Readiness and Strategy for Cybersecurity (NISC) and hosted cybersecurity measures for the Olympics. Despite being a tech leader, Japan lags in セキュリティ awareness among regular users. ランサムウェア (ransomware) attacks on Japanese companies increased dramatically."},

    {type:"teach", trg:"しんか", src:"evolution / advancement", pos:"noun", gender:null,
     note:"Kanji: 進化. しんかする = to evolve.\nぎじゅつのしんか = technological advancement.",
     example:"A: スマートフォンのしんかはめざましいです。\nB: じゅうねんまえとはぜんぜんちがいますね。",
     exampleSrc:"A: The evolution of smartphones is remarkable.\nB: It is completely different from 10 years ago.",
     funFact:"しんか (進化) combines 進 (advance) and 化 (change). In tech contexts, しんか describes rapid advancement. Japanese smartphones evolved uniquely: before the iPhone, Japan had advanced 'feature phones' (ガラケー, from Galapagos phone, unique to Japan's ecosystem). Now, スマホ (smartphone) penetration exceeds 90%."},

    {type:"teach", trg:"かそう", src:"virtual", pos:"adj", gender:null,
     note:"Kanji: 仮想. かそうげんじつ = virtual reality (VR).\nかそうくうかん = virtual space.",
     example:"A: かそうげんじつのぎじゅつがしんかしています。\nB: メタバースのじだいがきますね。",
     exampleSrc:"A: Virtual reality technology is evolving.\nB: The era of the metaverse is coming.",
     funFact:"かそう (仮想) uses 仮 (temporary/provisional) and 想 (imagine). Japan leads in VR content for gaming and entertainment. かそうつうか (virtual currency/cryptocurrency) regulation is among the world's most advanced, following the Mt. Gox collapse. VRチャット and メタバース platforms are growing communities."},

    {type:"fb", s:"ぎじゅつ{1}のスピードがはやまっています。\n(The speed of technological innovation is accelerating.)", a:"かくしん", opts:["かくしん","しんか","じどうか","かそう"], sSrc:"The speed of technological innovation is accelerating.",
     hint:"The word for revolutionary new developments in technology."},

    {type:"teach", trg:"つながる", src:"to connect / to be linked", pos:"verb", gender:null,
     note:"Group 1 verb. インターネットにつながる = to connect to the internet.\nKanji: 繋がる.",
     example:"A: このデバイスはWi-Fiにつながりますか？\nB: はい、せっていがひつようです。",
     exampleSrc:"A: Does this device connect to Wi-Fi?\nB: Yes, setup is required.",
     funFact:"つながる (to be connected) has become a defining word of the digital age. IoT (モノのインターネット) means everything つながる. Social media つながり (connections) complement real-world relationships. The pandemic showed that digital つながり can sustain communities. Japan aims for Society 5.0 where everything is seamlessly つながる."},

    {type:"mc", q:"かそうげんじつ is:", opts:["Virtual reality (VR)","Augmented reality","Actual reality","Simulated training"], ans:"Virtual reality (VR)",
     hint:"This term combines 'v...' and 'r...' for computer-generated environments."},

    {type:"match", pairs:[
      {trg:"じんこうちのう", src:"artificial intelligence"},
      {trg:"じどうか", src:"automation"},
      {trg:"かくしん", src:"innovation"},
      {trg:"プライバシー", src:"privacy"},
      {trg:"しんか", src:"evolution"}
    ]},

    {type:"fb", s:"インターネットに{1}りますか？\n(Does it connect to the internet?)", a:"つなが", opts:["つなが","つくり","つづき","つかい"], sSrc:"Does it connect to the internet?",
     hint:"The verb meaning to be connected or linked to something."},

    {type:"mc", q:"Japan faces an 'innovation dilemma' because:", opts:["It excels at incremental improvement but struggles with disruptive innovation","It has too many robots","It lacks internet access","Its population is too young"], ans:"It excels at incremental improvement but struggles with disruptive innovation",
     hint:"Japan's strength in kaizen (i...) does not always translate to radical new ideas."}
  ]
};
export default BATCH6_L1;
