// Japanese V2 Unit 35. じょうほうしゃかい (Information Society)
import BATCH10_L1 from './_batch10_u35_L01.js';
import BATCH9_L1 from './_batch9_u35_L01.js';
import BATCH7_L1 from './_batch7_u35_L01.js';
import BATCH8_L1 from './_batch8_u35_L01.js';
import BATCH6_L1 from './_batch6_u35_L01.js';
import BATCH5_L02 from './_batch5_u35_L02.js';
import BATCH5_L01 from './_batch5_u35_L01.js';
import BATCH2_L02 from './_batch2_u35_L02.js';
import BATCH2_L01 from './_batch2_u35_L01.js';
// Level: B2.4. JLPT N2/N1 aligned.
// じんこうちのう, プライバシー, サイバー, デジタル, こじんじょうほう, フェイクニュース, ビッグデータ.

const UNIT_35 = {
  n:35, lang:"ja", srcLang:"en", track:"v2",
  title:"じょうほうしゃかい", sub:"Information Society",
  icon:"💻", level:"B2.4", color:"#7B5EE8",
  lessons:[

// ═══ L1: AI, Privacy & Digital Ethics ═══
{id:"jav2_u35l1", title:"AI & Digital Ethics", icon:"🤖", xp:15, board:true, steps:[
  {type:"intro", title:"AI, Privacy & Digital Ethics",
   desc:"The information society brings both opportunities and challenges. In Japanese, discussions about じんこうちのう (AI), プライバシー (privacy), and デジタルりんり (digital ethics) are increasingly common in news, business, and academia. Many of these terms are loanwords adapted into Japanese, while others use traditional kanji compounds.",
   goals:["Use technology vocabulary in Japanese","Discuss AI ethics and privacy concerns","Understand Japan's approach to the digital society"]},

  {type:"teach", trg:"じんこうちのう", src:"artificial intelligence (AI)", pos:"noun", gender:null,
   note:"Kanji: 人工知能. Abbreviated as AI (エーアイ).\nじんこうちのうがくかい = AI society/conference.",
   example:"A: じんこうちのうがわたしたちのせいかつをおおきくかえつつあります。\nB: りんりてきなもんだいもかんがえなければなりませんね。",
   exampleSrc:"A: Artificial intelligence is greatly changing our lives.\nB: We must also consider the ethical issues.",
   funFact:"人工知能 breaks down as 人工 (artificial/man-made) and 知能 (intelligence). Japan has been a leader in robotics and AI research since the 1970s. The Fifth Generation Computer project (1982-1992) was one of the world's first major AI initiatives. Today, Japan's AI strategy focuses on Society 5.0 (ソサエティ5.0), a vision where AI and IoT solve social challenges like aging population and labor shortages."},

  {type:"teach", trg:"プライバシー", src:"privacy", pos:"noun", gender:null,
   note:"Loanword from English. こじんのプライバシー = personal privacy.\nプライバシーほご = privacy protection.",
   example:"A: インターネットじだいにプライバシーをまもるのはむずかしくなっています。\nB: こじんじょうほうのかんりがじゅうようですね。",
   exampleSrc:"A: Protecting privacy has become more difficult in the internet age.\nB: Management of personal information is important.",
   funFact:"プライバシー entered Japanese from English 'privacy.' Japan's concept of プライバシー was strengthened by the こじんじょうほうほごほう (Personal Information Protection Act, 2003). However, Japanese culture has a complex relationship with privacy: public baths (おんせん), cramped housing, and open-plan offices have historically meant less physical privacy, while social privacy (not prying into others' affairs) is deeply valued."},

  {type:"teach", trg:"こじんじょうほう", src:"personal information / personal data", pos:"noun", gender:null,
   note:"Kanji: 個人情報. こじんじょうほうほごほう = Personal Information Protection Act.\nこじんじょうほうのろうえい = data leak.",
   example:"A: こじんじょうほうのろうえいじけんがふえています。\nB: パスワードかんりをてっていしなければなりません。",
   exampleSrc:"A: Personal data leak incidents are increasing.\nB: We must be thorough with password management.",
   funFact:"個人情報 is a four-kanji compound: 個 (individual), 人 (person), 情 (feeling/information), 報 (report). Japan's こじんじょうほうほごほう was significantly revised in 2022 to strengthen data protection, introducing mandatory breach notification and stricter penalties. The law reflects growing concern about how companies collect and use こじんじょうほう in the digital age."},

  {type:"mc", q:"プライバシーほご means:", opts:["privacy protection","privacy violation","privacy invasion","privacy setting"], ans:"privacy protection",
   hint:"ほご means 'p...' or 'conservation,' combined with the loanword for p...."},

  {type:"teach", trg:"サイバーこうげき", src:"cyberattack", pos:"noun", gender:null,
   note:"Mixed word: サイバー (cyber) + こうげき (attack, 攻撃).\nサイバーセキュリティー = cybersecurity.",
   example:"A: きぎょうへのサイバーこうげきがぞうかしています。\nB: セキュリティーたいさくのきょうかがきゅうむです。",
   exampleSrc:"A: Cyberattacks against companies are increasing.\nB: Strengthening security measures is an urgent task.",
   funFact:"サイバー攻撃 mixes the English loanword 'cyber' with the kanji compound こうげき (attack). Japan established the National Center of Incident Readiness and Strategy for Cybersecurity (NISC) in 2014. Despite being a technology leader, Japan has faced criticism for lagging in サイバーセキュリティー, particularly after high-profile incidents affecting government systems and major corporations."},

  {type:"teach", trg:"ビッグデータ", src:"big data", pos:"noun", gender:null,
   note:"Loanword from English. ビッグデータかいせき = big data analysis.\nデータかつよう = data utilization.",
   example:"A: ビッグデータのかつようはいりょうぶんやでもすすんでいます。\nB: びょうきのよぼうにやくだつかのうせいがありますね。",
   exampleSrc:"A: The utilization of big data is advancing in the medical field too.\nB: It has the potential to help with disease prevention.",
   funFact:"ビッグデータ is a direct English loanword. Japan's Society 5.0 vision relies heavily on ビッグデータ analysis combined with AI and IoT to address social challenges. Japanese companies like Rakuten, LINE, and NTT Data are leaders in ビッグデータ utilization, though concerns about data privacy and consent continue to spark public debate."},

  {type:"teach", trg:"アルゴリズム", src:"algorithm", pos:"noun", gender:null,
   note:"Loanword from English. アルゴリズムのバイアス = algorithmic bias.\nSNSのアルゴリズム = social media algorithm.",
   example:"A: SNSのアルゴリズムはりようしゃのこうどうにえいきょうをあたえます。\nB: じぶんがなにをみているかいしきすることがたいせつです。",
   exampleSrc:"A: Social media algorithms influence user behavior.\nB: It is important to be aware of what you are being shown.",
   funFact:"アルゴリズム comes from the name of the 9th-century Persian mathematician al-Khwarizmi. In Japanese tech discourse, concerns about アルゴリズム bias (バイアス) are growing, especially regarding how recommendation systems can create filter bubbles (フィルターバブル) and echo chambers (エコーチェンバー) that limit exposure to diverse viewpoints."},

  {type:"fb", s:"きぎょうへの{1}がぞうかしています。\n(Cyberattacks against companies are increasing.)", a:"サイバーこうげき", opts:["サイバーこうげき","ビッグデータ","じんこうちのう","プライバシー"], sSrc:"Cyberattacks against companies are increasing.",
   hint:"The compound noun combining the English word for digital network threats with the Japanese word for attack."},

  {type:"teach", trg:"フェイクニュース", src:"fake news / disinformation", pos:"noun", gender:null,
   note:"Loanword from English. じょうほうリテラシー = information literacy.\nでまじょうほう = false information (native term).",
   example:"A: フェイクニュースをみわけるのうりょくがもとめられています。\nB: じょうほうリテラシーきょういくがたいせつですね。",
   exampleSrc:"A: The ability to distinguish fake news is being demanded.\nB: Information literacy education is important.",
   funFact:"フェイクニュース is a direct English loanword that became common in Japanese from around 2017. Japan also uses the native term でまじょうほう (false information) and the older word デマ (rumor, from German 'Demagogie'). During disasters, フェイクニュース can cause panic, so Japanese media actively promotes ファクトチェック (fact-checking) and じょうほうリテラシー (information literacy)."},

  {type:"teach", trg:"じどうか", src:"automation", pos:"noun", gender:null,
   note:"Kanji: 自動化. じどうかする = to automate.\nぎょうむのじどうか = business process automation.",
   example:"A: じどうかによっておおくのしごとがかわるでしょう。\nB: あたらしいスキルをみにつけるひつようがありますね。",
   exampleSrc:"A: Many jobs will change due to automation.\nB: We need to acquire new skills.",
   funFact:"自動化 uses 自 (self), 動 (move), and 化 (transform). Japan faces a unique じどうか challenge: with a declining population and labor shortage, automation is not just efficient but necessary. Japanese factories pioneered industrial robotics in the 1960s-70s, and today Japan leads in deploying robots in services from hotels to hospitals."},

  {type:"mc", q:"じょうほうリテラシー means:", opts:["information overload","information literacy","information technology","information security"], ans:"information literacy",
   hint:"リテラシー is a loanword meaning 'l...,' the ability to understand and evaluate something."},

  {type:"match", pairs:[{trg:"じんこうちのう",src:"artificial intelligence"},{trg:"プライバシー",src:"privacy"},{trg:"ビッグデータ",src:"big data"},{trg:"フェイクニュース",src:"fake news"}]},

  {type:"fb", s:"じんこうちのうがわたしたちのせいかつをおおきくかえ{1}あります。\n(Artificial intelligence is greatly changing our lives.)", a:"つつ", opts:["つつ","ながら","ために","ように"], sSrc:"Artificial intelligence is greatly changing our lives.",
   hint:"The progressive auxiliary meaning 'in the process of,' used with the stem form of verbs."},

  {type:"match", pairs:[{trg:"サイバーこうげき",src:"cyberattack"},{trg:"アルゴリズム",src:"algorithm"},{trg:"じどうか",src:"automation"},{trg:"こじんじょうほう",src:"personal data"}]},

  {type:"mc", q:"アルゴリズムのバイアス means:", opts:["algorithmic speed","algorithmic update","algorithmic bias","algorithmic encryption"], ans:"algorithmic bias",
   hint:"バイアス is a loanword meaning 'b...' or 'prejudice,' describing unfair patterns in automated decision-making."},

  {type:"mc", q:"フェイクニュースをみわける means:", opts:["to spread fake news","to create fake news","to report fake news","to distinguish fake news"], ans:"to distinguish fake news",
   hint:"みわける means 'to tell apart' or 'to identify correctly,' a critical information literacy skill."},

  {type:"mc", q:"じどうか is especially important in Japan because:", opts:["Japan faces a declining population and labor shortage","Japan has too many workers and wants to reduce employment","Japan wants to export automation technology to other countries","Japan has low wages and needs machines to boost productivity"], ans:"Japan faces a declining population and labor shortage",
   hint:"Think about the country's demographic trend: fewer young workers entering the workforce each year, more elderly needing care."},

  {type:"fb", s:"こうじょうの{1}がすすんで、ロボットがおおくのさぎょうをおこなっています。", a:"じどうか", opts:["じどうか","デジタルか","こうぎょうか","きかいか"], sSrc:"Factory automation has progressed, and robots perform many operations.",
   hint:"The process of making things run by themselves without human intervention. Uses kanji for 'self' + 'move' + 'change.'"},
]},

// ═══ L2: Digital Society & Future Technology ═══
{id:"jav2_u35l2", title:"Digital Society", icon:"📱", xp:15, board:true, steps:[
  {type:"intro", title:"Digital Society & Future Technology",
   desc:"Japan is navigating the transition to a fully digital society while balancing tradition with innovation. Terms like デジタルか (digitalization), ロボット (robot), and テレワーク (remote work) define modern Japanese workplace and social discussions. This vocabulary is essential for business Japanese and understanding contemporary news.",
   goals:["Discuss digital transformation in Japanese","Use workplace technology vocabulary","Understand Japan's digital society challenges"]},

  {type:"teach", trg:"デジタルか", src:"digitalization / going digital", pos:"noun", gender:null,
   note:"Mixed: デジタル (digital) + 化 (transformation).\nDXとも (Digital Transformation). デジタルちょう = Digital Agency.",
   example:"A: にほんせいふはデジタルかをすいしんしています。\nB: でも、こうれいしゃにとってはかだいがおおいですね。",
   exampleSrc:"A: The Japanese government is promoting digitalization.\nB: But there are many challenges for elderly people.",
   funFact:"デジタル化 combines the English loanword with the Japanese suffix 化 (-ization). Japan established the デジタルちょう (Digital Agency) in 2021 to accelerate government DX. Ironically, Japan, a tech powerhouse, lagged in administrative digitalization: many government procedures still required physical stamps (はんこ) and paper forms until recently. The マイナンバーカード (My Number Card) system aims to change this."},

  {type:"teach", trg:"テレワーク", src:"remote work / telework", pos:"noun", gender:null,
   note:"Loanword from English. ざいたくきんむ = working from home (native term).\nリモートワーク also used.",
   example:"A: コロナいこうテレワークがふきゅうしました。\nB: つうきんじかんがへってせいかつのしつがあがりました。",
   exampleSrc:"A: Remote work became widespread after COVID.\nB: Commute time decreased and quality of life improved.",
   funFact:"テレワーク was already a known term in Japanese business before the pandemic, but adoption was low. Japanese work culture valued かおをあわせる (meeting face-to-face) and ちょくせつのコミュニケーション (direct communication). The pandemic forced rapid adoption, and many companies now offer hybrid arrangements, though some traditional industries have returned to full office attendance."},

  {type:"teach", trg:"ロボット", src:"robot", pos:"noun", gender:null,
   note:"Loanword from Czech via English. さんぎょうようロボット = industrial robot.\nかいごロボット = care robot.",
   example:"A: にほんはロボットぎじゅつでせかいをリードしています。\nB: かいごぶんやでのロボットかつようがきたいされています。",
   exampleSrc:"A: Japan leads the world in robot technology.\nB: Robot utilization in the care sector is expected.",
   funFact:"ロボット entered Japanese in the 1920s from Karel Capek's play. Japan's unique relationship with robots, influenced by manga like Astro Boy (てつわんアトム), means Japanese people tend to view robots more positively than many Western cultures. Japan has the highest density of industrial ロボット per worker and is pioneering かいごロボット (care robots) for its aging population."},

  {type:"mc", q:"テレワーク became widespread in Japan mainly due to:", opts:["the COVID-19 pandemic","the 2011 earthquake","government mandate","labor shortage"], ans:"the COVID-19 pandemic",
   hint:"A global health crisis forced rapid adoption of remote work practices worldwide."},

  {type:"teach", trg:"でんしけっさい", src:"electronic payment / cashless payment", pos:"noun", gender:null,
   note:"Kanji: 電子決済. キャッシュレス = cashless.\nQRコードけっさい = QR code payment.",
   example:"A: にほんのでんしけっさいふきゅうりつはまだひくいです。\nB: げんきんしゅぎのぶんかがつよいですからね。",
   exampleSrc:"A: Japan's electronic payment adoption rate is still low.\nB: That is because the cash-oriented culture is strong.",
   funFact:"電子決済 uses 電子 (electronic) and 決済 (settlement/payment). Despite being a tech leader, Japan was slow to adopt キャッシュレス (cashless) payment. Cash still accounts for a significant portion of transactions. The government set a target of 40% cashless transactions, promoting services like PayPay, Suica, and LINE Pay. The love of げんきん (cash) reflects trust in physical currency and the safety of Japan's society."},

  {type:"teach", trg:"IoT", src:"Internet of Things", pos:"noun", gender:null,
   note:"Pronounced アイ・オー・ティー in Japanese.\nIoTきき = IoT devices. もののインターネット = Japanese translation.",
   example:"A: IoTぎじゅつでいえのかでんがスマートフォンでそうさできます。\nB: べんりですが、セキュリティーリスクもありますね。",
   exampleSrc:"A: With IoT technology, home appliances can be operated from a smartphone.\nB: It is convenient, but there are also security risks.",
   funFact:"IoT is used as-is in Japanese, pronounced letter by letter. Japan's ものづくり (manufacturing) tradition gives it an advantage in IoT development. Japanese companies like Sony, Panasonic, and Toyota are integrating IoT into everything from smart homes to connected cars. The concept ties directly into Japan's Society 5.0 vision of a super-smart society."},

  {type:"teach", trg:"じょうほうかくさ", src:"digital divide / information gap", pos:"noun", gender:null,
   note:"Kanji: 情報格差. Also: デジタルデバイド (loanword).\nせだいかんのじょうほうかくさ = generational digital divide.",
   example:"A: こうれいしゃとわかいせだいのあいだにじょうほうかくさがあります。\nB: デジタルきょういくのじゅうじつがひつようですね。",
   exampleSrc:"A: There is a digital divide between elderly and younger generations.\nB: Enrichment of digital education is needed.",
   funFact:"情報格差 uses 情報 (information) and 格差 (gap/disparity). Japan's rapidly aging population makes じょうほうかくさ a pressing social issue. While young Japanese are digital natives, many elderly citizens struggle with smartphones and online services. The government has launched デジタルかつよう支援 (digital utilization support) programs to bridge this gap."},

  {type:"fb", s:"にほんせいふは{1}をすいしんしています。\n(The Japanese government is promoting digitalization.)", a:"デジタルか", opts:["デジタルか","テレワーク","じどうか","じんこうちのう"], sSrc:"The Japanese government is promoting digitalization.",
   hint:"The noun meaning 'digitalization,' the process of converting to digital systems."},

  {type:"teach", trg:"スマートシティ", src:"smart city", pos:"noun", gender:null,
   note:"Loanword from English. IoT, AI, ビッグデータを活用したまちづくり.\nSociety 5.0のじつげん = realization of Society 5.0.",
   example:"A: にほんかくちでスマートシティのけいかくがすすんでいます。\nB: えねるぎーこうりつやこうつうさいてきかがきたいされています。",
   exampleSrc:"A: Smart city plans are progressing throughout Japan.\nB: Energy efficiency and transportation optimization are expected.",
   funFact:"スマートシティ is a direct loanword. Japan's スマートシティ initiatives connect to disaster preparedness, a uniquely Japanese priority. Cities like Kashiwa-no-ha (柏の葉) and Fujisawa (藤沢) are test beds integrating IoT sensors for earthquake early warning, energy management, and elderly monitoring. Toyota's Woven City (ウーブンシティ) at the foot of Mt. Fuji aims to be a living laboratory for autonomous vehicles and smart living."},

  {type:"teach", trg:"とくいてん", src:"singularity (technological)", pos:"noun", gender:null,
   note:"Kanji: 特異点. AIがにんげんのちのうをこえるてん.\nAlso: シンギュラリティ (loanword).",
   example:"A: とくいてんはいつくるとおもいますか？\nB: せんもんかのあいだでもいけんがわかれています。",
   exampleSrc:"A: When do you think the singularity will come?\nB: Opinions are divided even among experts.",
   funFact:"特異点 uses 特 (special), 異 (different), and 点 (point). The technological singularity concept, popularized by Ray Kurzweil, is actively discussed in Japanese tech circles. Both とくいてん and the loanword シンギュラリティ are used. Japan's AI strategy acknowledges the possibility while focusing on 'human-centric AI' (にんげんちゅうしんのAI) that augments rather than replaces human capabilities."},

  {type:"mc", q:"じょうほうかくさ means:", opts:["information overload","digital divide","data breach","internet addiction"], ans:"digital divide",
   hint:"This compound uses 'information' plus 'gap/disparity' to describe unequal access to technology."},

  {type:"match", pairs:[{trg:"デジタルか",src:"digitalization"},{trg:"テレワーク",src:"remote work"},{trg:"ロボット",src:"robot"},{trg:"でんしけっさい",src:"electronic payment"}]},

  {type:"fb", s:"こうれいしゃとわかいせだいのあいだに{1}があります。\n(There is a digital divide between elderly and younger generations.)", a:"じょうほうかくさ", opts:["じょうほうかくさ","プライバシー","サイバーこうげき","デジタルか"], sSrc:"There is a digital divide between elderly and younger generations.",
   hint:"The compound meaning 'information gap' or 'digital divide,' describing unequal technology access."},

  {type:"match", pairs:[{trg:"IoT",src:"Internet of Things"},{trg:"じょうほうかくさ",src:"digital divide"},{trg:"スマートシティ",src:"smart city"},{trg:"とくいてん",src:"singularity"}]},

  {type:"mc", q:"Japan has a positive cultural view of ロボット partly because of:", opts:["large government subsidies for robot research programs","widespread public fear of labor shortages and aging","the manga character てつわんアトム (Astro Boy)","the influence of World War II military technology history"], ans:"the manga character てつわんアトム (Astro Boy)",
   hint:"Tezuka Osamu's 1950s comic series depicted a friendly child-like robot, shaping positive public attitudes for decades."},

  {type:"mc", q:"でんしけっさい means:", opts:["digital banking","internet transfer","online shopping","electronic payment"], ans:"electronic payment",
   hint:"でんし (e...) plus けっさい (settlement/p...), covering QR codes, IC cards, and mobile pay."},

  {type:"fb", s:"にほんかくちでスマート{1}のけいかくがすすんでいます。\n(Smart city plans are progressing throughout Japan.)", a:"シティ", opts:["シティ", "センター","タウン","ゾーン"], sSrc:"Smart city plans are progressing throughout Japan.",
   hint:"The second part of the English loanword compound meaning an intelligent, technology-integrated urban area."},

  {type:"mc", q:"とくいてん refers to:", opts:["the technological singularity","a government policy goal","a type of AI program","a data privacy law"], ans:"the technological singularity",
   hint:"The kanji compound for 'special anomalous point,' also expressed as the loanword シンギュラリティ."},
]},

,BATCH2_L01
,BATCH2_L02
,BATCH5_L01
,BATCH5_L02
,BATCH6_L1
,BATCH8_L1
,BATCH7_L1
,BATCH9_L1
,BATCH10_L1
]};
export default UNIT_35;
