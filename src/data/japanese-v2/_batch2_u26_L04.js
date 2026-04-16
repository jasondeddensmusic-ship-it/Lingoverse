// Unit 26 Batch 2 Lesson 4: ほうそうとSNS (Broadcasting & Social Media)
const BATCH2_L_4 = {
  id:"jav2_u26l_b2_4", title:"ほうそうとSNS", icon:"📺", xp:15, board:true,
  steps:[
    {type:"intro", title:"ほうそうとSNS",
     desc:"Japanese media landscape spans traditional broadcasting and modern social media. Learn vocabulary for TV programs, online platforms, viral content, and the unique terminology of Japanese internet culture. This vocabulary is essential for understanding contemporary Japanese society.",
     goals:["Use broadcasting and TV vocabulary","Discuss social media in Japanese","Understand Japanese internet culture terms"]},

    {type:"teach", trg:"ほうそう", src:"broadcast / broadcasting", pos:"noun", gender:null,
     note:"Kanji: 放送. ほうそうする = to broadcast.\nなまほうそう = live broadcast.",
     example:"A: このばんぐみはなまほうそうです。\nB: CMなしでほうそうされるんですね。",
     exampleSrc:"A: This program is a live broadcast.\nB: It is broadcast without commercials.",
     funFact:"放送 uses 放 (release) and 送 (send). NHK (日本放送協会) is Japan's public broadcaster, funded by viewer fees (受信料, jushinnryou) rather than advertising. This unique funding model has been debated for decades. Japanese broadcasting includes both ちじょうは (terrestrial) and えいせいほうそう (satellite) channels."},

    {type:"teach", trg:"ばんぐみ", src:"program / show (TV/radio)", pos:"noun", gender:null,
     note:"Kanji: 番組. にんきばんぐみ = popular program.\nバラエティーばんぐみ = variety show.",
     example:"A: おすすめのばんぐみはありますか？\nB: ドキュメンタリーばんぐみがおもしろいですよ。",
     exampleSrc:"A: Are there any programs you recommend?\nB: Documentary programs are interesting.",
     funFact:"番組 uses 番 (number/order) and 組 (group/set). Japanese TV is dominated by variety shows (バラエティー) featuring comedian panels, food segments, and travel reports. The ゴールデンタイム (golden time, prime time 7-10 PM) is fiercely competitive. Japanese TV culture has heavily influenced the formats adopted globally, including game show concepts."},

    {type:"teach", trg:"しちょうりつ", src:"viewer rating / audience share", pos:"noun", gender:null,
     note:"Kanji: 視聴率. しちょうりつがたかい = high ratings.\nMeasured by Video Research Ltd. in Japan.",
     example:"A: このドラマのしちょうりつはにじゅうパーセントをこえました。\nB: だいヒットですね。",
     exampleSrc:"A: This drama's viewer rating exceeded 20%.\nB: That is a major hit.",
     funFact:"視聴率 uses 視聴 (viewing/watching) and 率 (rate). In Japan, achieving over 20% しちょうりつ is considered a major success. The measurement system is dominated by Video Research, whose numbers determine advertising rates. The shift to streaming services has complicated しちょうりつ measurements, but traditional TV ratings remain influential in Japanese media business."},

    {type:"mc", q:"なまほうそう means:", opts:["Live broadcast","Recorded broadcast","Repeat broadcast","Emergency broadcast"], ans:"Live broadcast",
     hint:"なま means 'l.../raw/fresh,' combined with the word for broadcasting."},

    {type:"teach", trg:"はいしん", src:"streaming / distribution (digital content)", pos:"noun", gender:null,
     note:"Kanji: 配信. はいしんする = to stream/distribute.\nどうがはいしん = video streaming.",
     example:"A: さいきんはテレビよりどうがはいしんサービスをみるひとがふえています。\nB: じぶんのすきなじかんにみられますからね。",
     exampleSrc:"A: Recently more people watch streaming services than TV.\nB: Because you can watch at your own preferred time.",
     funFact:"配信 uses 配 (distribute) and 信 (message/information). Japan's streaming market includes Netflix, Amazon Prime, and domestic services like Hulu Japan, U-NEXT, and ABEMA. The Japanese term オンデマンド (on-demand) is used alongside はいしん. The shift from ほうそう to はいしん represents one of the biggest changes in Japanese media consumption."},

    {type:"teach", trg:"かきこみ", src:"online comment / post / entry", pos:"noun", gender:null,
     note:"From かきこむ (to write in). ネットにかきこむ = to post online.\nいちばんのかきこみ = anonymous posts on forums.",
     example:"A: ネットのかきこみをすべてしんじてはいけません。\nB: とくにいめいのかきこみにはちゅういがひつようです。",
     exampleSrc:"A: You should not believe everything posted online.\nB: Anonymous posts especially require caution.",
     funFact:"書き込み comes from 書く (write) + 込む (put into). Japan has a unique online comment culture, historically centered on いちばん (2channel/5channel), one of the world's oldest internet forums. いめい (anonymous) posting is the norm in Japanese internet culture, which creates both uninhibited discussion and online harassment challenges."},

    {type:"teach", trg:"えんじょう", src:"flaming / online backlash / going viral negatively", pos:"noun", gender:null,
     note:"Kanji: 炎上. Literally 'catching fire.' えんじょうする = to get flamed.\nSNSでえんじょう = backlash on social media.",
     example:"A: あのタレントのはつげんがSNSでえんじょうしています。\nB: ふようないなはつげんだったようですね。",
     exampleSrc:"A: That celebrity's statement is causing a firestorm on social media.\nB: It seems to have been a careless remark.",
     funFact:"炎上 literally means 'going up in flames.' In Japanese internet culture, it specifically describes the rapid spread of criticism and outrage online. Companies fear SNSえんじょう because it can destroy reputations overnight. Japan's hyper-connected society means えんじょう can move from online to mainstream news within hours."},

    {type:"fb", s:"あのタレントのはつげんがSNSで{1}しています。\n(That celebrity's statement is causing a firestorm on social media.)", a:"えんじょう", opts:["えんじょう","はいしん","ほうそう","かきこみ"], sSrc:"That celebrity's statement is causing a firestorm on social media.",
     hint:"The internet term meaning 'going up in flames,' describing a wave of online criticism."},

    {type:"teach", trg:"はつげん", src:"statement / remark / utterance", pos:"noun", gender:null,
     note:"Kanji: 発言. はつげんする = to make a statement.\nもんだいはつげん = problematic remark.",
     example:"A: こうかいのばでのはつげんにはきをつけましょう。\nB: いちどいったことはけせませんからね。",
     exampleSrc:"A: Let us be careful with statements in public.\nB: Because once said, words cannot be erased.",
     funFact:"発言 uses 発 (emit/release) and 言 (speak/word). In Japanese politics and business, はつげん carries weight. The phrase はつげんをてっかいする (to retract a statement) is common in press conferences. もんだいはつげん (problematic statement) can end careers, as Japanese public figures face intense scrutiny."},

    {type:"teach", trg:"いめい", src:"anonymous / anonymity", pos:"noun", gender:null,
     note:"Kanji: 匿名. いめいせい = anonymity.\nいめいのかきこみ = anonymous post.",
     example:"A: いめいせいがネットじょうのひぼうちゅうしょうをたすちょうしている。\nB: じつめいせいをきょうかすべきだというけんかいもあります。",
     exampleSrc:"A: Anonymity facilitates online defamation.\nB: There are also views that real-name policies should be strengthened.",
     funFact:"匿名 uses 匿 (hide/conceal) and 名 (name). Japan's internet culture has deep roots in いめいせい. Unlike Facebook (which requires real names), Japanese platforms like にちゃんねる and Twitter (now X) thrived on anonymity. This creates a unique tension: いめい enables honest discussion but also enables cyberbullying."},

    {type:"mc", q:"はいしん differs from ほうそう in that:", opts:["はいしん is digital on-demand, ほうそう is traditional broadcast","They are exactly the same","はいしん is radio, ほうそう is TV","はいしん is only for music"], ans:"はいしん is digital on-demand, ほうそう is traditional broadcast",
     hint:"One is the t... sending of content over airwaves, the other is d... distribution."},

    {type:"teach", trg:"ひぼうちゅうしょう", src:"defamation / slander / libel", pos:"noun", gender:null,
     note:"Kanji: 誹謗中傷. ネットじょうのひぼうちゅうしょう = online defamation.\nA serious legal and social issue in Japan.",
     example:"A: ネットじょうのひぼうちゅうしょうはほうりつでばっせられます。\nB: SNSのつかいかたにきをつけなければなりませんね。",
     exampleSrc:"A: Online defamation is punishable by law.\nB: We must be careful about how we use social media.",
     funFact:"誹謗中傷 is a four-kanji compound: 誹 (slander), 謗 (defame), 中 (hit), 傷 (wound). After the tragic death of a reality TV star due to online harassment in 2020, Japan strengthened laws against ひぼうちゅうしょう. The Penal Code now includes harsher penalties for online insults, and victims can more easily obtain poster identification through court orders."},

    {type:"fb", s:"ネットじょうの{1}はほうりつでばっせられます。\n(Online defamation is punishable by law.)", a:"ひぼうちゅうしょう", opts:["ひぼうちゅうしょう","えんじょう","かきこみ","はつげん"], sSrc:"Online defamation is punishable by law.",
     hint:"The legal term for harmful speech that damages someone's reputation."},

    {type:"match", pairs:[{trg:"ほうそう",src:"broadcast"},{trg:"はいしん",src:"streaming"},{trg:"しちょうりつ",src:"viewer rating"},{trg:"えんじょう",src:"online firestorm"}]},

    {type:"fb", s:"このドラマの{1}はにじゅうパーセントをこえました。\n(This drama's viewer rating exceeded 20%.)", a:"しちょうりつ", opts:["しちょうりつ","ばんぐみ","ほうそう","はいしん"], sSrc:"This drama's viewer rating exceeded 20%.",
     hint:"The noun for the numerical measure of how many people watch a program."},

    {type:"match", pairs:[{trg:"かきこみ",src:"online comment"},{trg:"いめい",src:"anonymous"},{trg:"はつげん",src:"statement"},{trg:"ひぼうちゅうしょう",src:"defamation"}]},

    {type:"mc", q:"Japan strengthened online defamation laws after:", opts:["A corporate scandal","The death of a reality TV star due to cyberbullying","A government data breach","A newspaper lawsuit"], ans:"The death of a reality TV star due to cyberbullying",
     hint:"This tragic 2020 event led to legal reforms making online insults more harshly punishable."},
  ]
};
export default BATCH2_L_4;
