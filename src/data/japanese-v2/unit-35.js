// Japanese V2 Unit 35. 情報社会(じょうほうしゃかい) (Information Society)
import BATCH11_L1 from './_batch11_u35_L01.js';
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
  title:"情報社会(じょうほうしゃかい)", sub:"Information Society",
  icon:"\u{1F4BB}", level:"B2.4", color:"#7B5EE8",
  lessons:[

// ═══ L1: AI, Privacy & Digital Ethics ═══
{id:"jav2_u35l1", title:"AI & Digital Ethics", icon:"\u{1F916}", xp:15, board:true, steps:[
  {type:"intro", title:"AI, Privacy & Digital Ethics",
   desc:"The information society brings both opportunities and challenges. In Japanese, discussions about 人工知能(じんこうちのう) (AI), プライバシー (privacy), and デジタル倫理(りんり) (digital ethics) are increasingly common in news, business, and academia. Many of these terms are loanwords adapted into Japanese, while others use traditional kanji compounds.",
   goals:["Use technology vocabulary in Japanese","Discuss AI ethics and privacy concerns","Understand Japan's approach to the digital society"]},

  {type:"teach", trg:"人工知能(じんこうちのう)", src:"artificial intelligence (AI)", pos:"noun", gender:null,
   note:"Kanji: 人工知能. Abbreviated as AI (エーアイ).\n人工知能学会(じんこうちのうがっかい) = AI society/conference.",
   example:"A: 人工知能(じんこうちのう)が私(わたし)たちの生活(せいかつ)を大(おお)きく変(か)えつつあります。\nB: 倫理的(りんりてき)な問題(もんだい)も考(かんが)えなければなりませんね。",
   exampleSrc:"A: Artificial intelligence is greatly changing our lives.\nB: We must also consider the ethical issues.",
   funFact:"人工知能 breaks down as 人工 (artificial/man-made) and 知能 (intelligence). Japan has been a leader in robotics and AI research since the 1970s. The Fifth Generation Computer project (1982-1992) was one of the world's first major AI initiatives. Today, Japan's AI strategy focuses on Society 5.0 (ソサエティ5.0), a vision where AI and IoT solve social challenges like aging population and labor shortages."},

  {type:"teach", trg:"プライバシー", src:"privacy", pos:"noun", gender:null,
   note:"Loanword from English. 個人(こじん)のプライバシー = personal privacy.\nプライバシー保護(ほご) = privacy protection.",
   example:"A: インターネット時代(じだい)にプライバシーを守(まも)るのは難(むずか)しくなっています。\nB: 個人情報(こじんじょうほう)の管理(かんり)が重要(じゅうよう)ですね。",
   exampleSrc:"A: Protecting privacy has become more difficult in the internet age.\nB: Management of personal information is important.",
   funFact:"プライバシー entered Japanese from English 'privacy.' Japan's concept of プライバシー was strengthened by the 個人情報保護法(こじんじょうほうほごほう) (Personal Information Protection Act, 2003). However, Japanese culture has a complex relationship with privacy: public baths (温泉(おんせん)), cramped housing, and open-plan offices have historically meant less physical privacy, while social privacy (not prying into others' affairs) is deeply valued."},

  {type:"teach", trg:"個人情報(こじんじょうほう)", src:"personal information / personal data", pos:"noun", gender:null,
   note:"Kanji: 個人情報. 個人情報保護法(こじんじょうほうほごほう) = Personal Information Protection Act.\n個人情報(こじんじょうほう)の漏洩(ろうえい) = data leak.",
   example:"A: 個人情報(こじんじょうほう)の漏洩事件(ろうえいじけん)が増(ふ)えています。\nB: パスワード管理(かんり)を徹底(てってい)しなければなりません。",
   exampleSrc:"A: Personal data leak incidents are increasing.\nB: We must be thorough with password management.",
   funFact:"個人情報 is a four-kanji compound: 個 (individual), 人 (person), 情 (feeling/information), 報 (report). Japan's 個人情報保護法(こじんじょうほうほごほう) was significantly revised in 2022 to strengthen data protection, introducing mandatory breach notification and stricter penalties. The law reflects growing concern about how companies collect and use 個人情報(こじんじょうほう) in the digital age."},

  {type:"mc", q:"プライバシー保護(ほご) means:", opts:["privacy protection","privacy violation","privacy invasion","privacy setting"], ans:"privacy protection",
   hint:"保護(ほご) means 'p...' or 'conservation,' combined with the loanword for p...."},

  {type:"teach", trg:"サイバー攻撃(こうげき)", src:"cyberattack", pos:"noun", gender:null,
   note:"Mixed word: サイバー (cyber) + 攻撃(こうげき) (attack).\nサイバーセキュリティー = cybersecurity.",
   example:"A: 企業(きぎょう)へのサイバー攻撃(こうげき)が増加(ぞうか)しています。\nB: セキュリティー対策(たいさく)の強化(きょうか)が急務(きゅうむ)です。",
   exampleSrc:"A: Cyberattacks against companies are increasing.\nB: Strengthening security measures is an urgent task.",
   funFact:"サイバー攻撃 mixes the English loanword 'cyber' with the kanji compound 攻撃(こうげき) (attack). Japan established the National Center of Incident Readiness and Strategy for Cybersecurity (NISC) in 2014. Despite being a technology leader, Japan has faced criticism for lagging in サイバーセキュリティー, particularly after high-profile incidents affecting government systems and major corporations."},

  {type:"teach", trg:"ビッグデータ", src:"big data", pos:"noun", gender:null,
   note:"Loanword from English. ビッグデータ解析(かいせき) = big data analysis.\nデータ活用(かつよう) = data utilization.",
   example:"A: ビッグデータの活用(かつよう)は医療分野(いりょうぶんや)でも進(すす)んでいます。\nB: 病気(びょうき)の予防(よぼう)に役立(やくだ)つ可能性(かのうせい)がありますね。",
   exampleSrc:"A: The utilization of big data is advancing in the medical field too.\nB: It has the potential to help with disease prevention.",
   funFact:"ビッグデータ is a direct English loanword. Japan's Society 5.0 vision relies heavily on ビッグデータ analysis combined with AI and IoT to address social challenges. Japanese companies like Rakuten, LINE, and NTT Data are leaders in ビッグデータ utilization, though concerns about data privacy and consent continue to spark public debate."},

  {type:"teach", trg:"アルゴリズム", src:"algorithm", pos:"noun", gender:null,
   note:"Loanword from English. アルゴリズムのバイアス = algorithmic bias.\nSNSのアルゴリズム = social media algorithm.",
   example:"A: SNSのアルゴリズムは利用者(りようしゃ)の行動(こうどう)に影響(えいきょう)を与(あた)えます。\nB: 自分(じぶん)が何(なに)を見(み)ているか意識(いしき)することが大切(たいせつ)です。",
   exampleSrc:"A: Social media algorithms influence user behavior.\nB: It is important to be aware of what you are being shown.",
   funFact:"アルゴリズム comes from the name of the 9th-century Persian mathematician al-Khwarizmi. In Japanese tech discourse, concerns about アルゴリズム bias (バイアス) are growing, especially regarding how recommendation systems can create filter bubbles (フィルターバブル) and echo chambers (エコーチェンバー) that limit exposure to diverse viewpoints."},

  {type:"fb", s:"企業(きぎょう)への{1}が増加(ぞうか)しています。\n(Cyberattacks against companies are increasing.)", a:"サイバー攻撃(こうげき)", opts:["サイバー攻撃(こうげき)","ビッグデータ","人工知能(じんこうちのう)","プライバシー"], sSrc:"Cyberattacks against companies are increasing.",
   hint:"The compound noun combining the English word for digital network threats with the Japanese word for attack."},

  {type:"teach", trg:"フェイクニュース", src:"fake news / disinformation", pos:"noun", gender:null,
   note:"Loanword from English. 情報(じょうほう)リテラシー = information literacy.\nデマ情報(じょうほう) = false information (native term).",
   example:"A: フェイクニュースを見分(みわ)ける能力(のうりょく)が求(もと)められています。\nB: 情報(じょうほう)リテラシー教育(きょういく)が大切(たいせつ)ですね。",
   exampleSrc:"A: The ability to distinguish fake news is being demanded.\nB: Information literacy education is important.",
   funFact:"フェイクニュース is a direct English loanword that became common in Japanese from around 2017. Japan also uses the native term デマ情報(じょうほう) (false information) and the older word デマ (rumor, from German 'Demagogie'). During disasters, フェイクニュース can cause panic, so Japanese media actively promotes ファクトチェック (fact-checking) and 情報(じょうほう)リテラシー (information literacy)."},

  {type:"teach", trg:"自動化(じどうか)", src:"automation", pos:"noun", gender:null,
   note:"Kanji: 自動化. 自動化(じどうか)する = to automate.\n業務(ぎょうむ)の自動化(じどうか) = business process automation.",
   example:"A: 自動化(じどうか)によって多(おお)くの仕事(しごと)が変(か)わるでしょう。\nB: 新(あたら)しいスキルを身(み)につける必要(ひつよう)がありますね。",
   exampleSrc:"A: Many jobs will change due to automation.\nB: We need to acquire new skills.",
   funFact:"自動化 uses 自 (self), 動 (move), and 化 (transform). Japan faces a unique 自動化(じどうか) challenge: with a declining population and labor shortage, automation is not just efficient but necessary. Japanese factories pioneered industrial robotics in the 1960s-70s, and today Japan leads in deploying robots in services from hotels to hospitals."},

  {type:"mc", q:"情報(じょうほう)リテラシー means:", opts:["information overload","information literacy","information technology","information security"], ans:"information literacy",
   hint:"リテラシー is a loanword meaning 'l...,' the ability to understand and evaluate something."},

  {type:"match", pairs:[{trg:"人工知能(じんこうちのう)",src:"artificial intelligence"},{trg:"プライバシー",src:"privacy"},{trg:"ビッグデータ",src:"big data"},{trg:"フェイクニュース",src:"fake news"}]},

  {type:"fb", s:"人工知能(じんこうちのう)が私(わたし)たちの生活(せいかつ)を大(おお)きく変(か)え{1}あります。\n(Artificial intelligence is greatly changing our lives.)", a:"つつ", opts:["つつ","ながら","ために","ように"], sSrc:"Artificial intelligence is greatly changing our lives.",
   hint:"The progressive auxiliary meaning 'in the process of,' used with the stem form of verbs."},

  {type:"match", pairs:[{trg:"サイバー攻撃(こうげき)",src:"cyberattack"},{trg:"アルゴリズム",src:"algorithm"},{trg:"自動化(じどうか)",src:"automation"},{trg:"個人情報(こじんじょうほう)",src:"personal data"}]},

  {type:"mc", q:"アルゴリズムのバイアス means:", opts:["algorithmic speed","algorithmic update","algorithmic bias","algorithmic encryption"], ans:"algorithmic bias",
   hint:"バイアス is a loanword meaning 'b...' or 'prejudice,' describing unfair patterns in automated decision-making."},

  {type:"mc", q:"フェイクニュースを見分(みわ)ける means:", opts:["to spread fake news","to create fake news","to report fake news","to distinguish fake news"], ans:"to distinguish fake news",
   hint:"見分(みわ)ける means 'to tell apart' or 'to identify correctly,' a critical information literacy skill."},

  {type:"mc", q:"自動化(じどうか) is especially important in Japan because:", opts:["Japan faces a declining population and labor shortage","Japan has too many workers and wants to reduce employment","Japan wants to export automation technology to other countries","Japan has low wages and needs machines to boost productivity"], ans:"Japan faces a declining population and labor shortage",
   hint:"Think about the country's demographic trend: fewer young workers entering the workforce each year, more elderly needing care."},

  {type:"fb", s:"工場(こうじょう)の{1}が進(すす)んで、ロボットが多(おお)くの作業(さぎょう)を行(おこな)っています。", a:"自動化(じどうか)", opts:["自動化(じどうか)","デジタル化(か)","工業化(こうぎょうか)","機械化(きかいか)"], sSrc:"Factory automation has progressed, and robots perform many operations.",
   hint:"The process of making things run by themselves without human intervention. Uses kanji for 'self' + 'move' + 'change.'"},
]},

// ═══ L2: Digital Society & Future Technology ═══
{id:"jav2_u35l2", title:"Digital Society", icon:"\u{1F4F1}", xp:15, board:true, steps:[
  {type:"intro", title:"Digital Society & Future Technology",
   desc:"Japan is navigating the transition to a fully digital society while balancing tradition with innovation. Terms like デジタル化(か) (digitalization), ロボット (robot), and テレワーク (remote work) define modern Japanese workplace and social discussions. This vocabulary is essential for business Japanese and understanding contemporary news.",
   goals:["Discuss digital transformation in Japanese","Use workplace technology vocabulary","Understand Japan's digital society challenges"]},

  {type:"teach", trg:"デジタル化(か)", src:"digitalization / going digital", pos:"noun", gender:null,
   note:"Mixed: デジタル (digital) + 化(か) (transformation).\nDXとも (Digital Transformation). デジタル庁(ちょう) = Digital Agency.",
   example:"A: 日本政府(にほんせいふ)はデジタル化(か)を推進(すいしん)しています。\nB: でも、高齢者(こうれいしゃ)にとっては課題(かだい)が多(おお)いですね。",
   exampleSrc:"A: The Japanese government is promoting digitalization.\nB: But there are many challenges for elderly people.",
   funFact:"デジタル化 combines the English loanword with the Japanese suffix 化 (-ization). Japan established the デジタル庁(ちょう) (Digital Agency) in 2021 to accelerate government DX. Ironically, Japan, a tech powerhouse, lagged in administrative digitalization: many government procedures still required physical stamps (判子(はんこ)) and paper forms until recently. The マイナンバーカード (My Number Card) system aims to change this."},

  {type:"teach", trg:"テレワーク", src:"remote work / telework", pos:"noun", gender:null,
   note:"Loanword from English. 在宅勤務(ざいたくきんむ) = working from home (native term).\nリモートワーク also used.",
   example:"A: コロナ以降(いこう)テレワークが普及(ふきゅう)しました。\nB: 通勤時間(つうきんじかん)が減(へ)って生活(せいかつ)の質(しつ)が上(あ)がりました。",
   exampleSrc:"A: Remote work became widespread after COVID.\nB: Commute time decreased and quality of life improved.",
   funFact:"テレワーク was already a known term in Japanese business before the pandemic, but adoption was low. Japanese work culture valued 顔(かお)を合(あ)わせる (meeting face-to-face) and 直接(ちょくせつ)のコミュニケーション (direct communication). The pandemic forced rapid adoption, and many companies now offer hybrid arrangements, though some traditional industries have returned to full office attendance."},

  {type:"teach", trg:"ロボット", src:"robot", pos:"noun", gender:null,
   note:"Loanword from Czech via English. 産業用(さんぎょうよう)ロボット = industrial robot.\n介護(かいご)ロボット = care robot.",
   example:"A: 日本(にほん)はロボット技術(ぎじゅつ)で世界(せかい)をリードしています。\nB: 介護分野(かいごぶんや)でのロボット活用(かつよう)が期待(きたい)されています。",
   exampleSrc:"A: Japan leads the world in robot technology.\nB: Robot utilization in the care sector is expected.",
   funFact:"ロボット entered Japanese in the 1920s from Karel Capek's play. Japan's unique relationship with robots, influenced by manga like Astro Boy (鉄腕(てつわん)アトム), means Japanese people tend to view robots more positively than many Western cultures. Japan has the highest density of industrial ロボット per worker and is pioneering 介護(かいご)ロボット (care robots) for its aging population."},

  {type:"mc", q:"テレワーク became widespread in Japan mainly due to:", opts:["the COVID-19 pandemic","the 2011 earthquake","government mandate","labor shortage"], ans:"the COVID-19 pandemic",
   hint:"A global health crisis forced rapid adoption of remote work practices worldwide."},

  {type:"teach", trg:"電子決済(でんしけっさい)", src:"electronic payment / cashless payment", pos:"noun", gender:null,
   note:"Kanji: 電子決済. キャッシュレス = cashless.\nQRコード決済(けっさい) = QR code payment.",
   example:"A: 日本(にほん)の電子決済(でんしけっさい)普及率(ふきゅうりつ)はまだ低(ひく)いです。\nB: 現金主義(げんきんしゅぎ)の文化(ぶんか)が強(つよ)いですからね。",
   exampleSrc:"A: Japan's electronic payment adoption rate is still low.\nB: That is because the cash-oriented culture is strong.",
   funFact:"電子決済 uses 電子 (electronic) and 決済 (settlement/payment). Despite being a tech leader, Japan was slow to adopt キャッシュレス (cashless) payment. Cash still accounts for a significant portion of transactions. The government set a target of 40% cashless transactions, promoting services like PayPay, Suica, and LINE Pay. The love of 現金(げんきん) (cash) reflects trust in physical currency and the safety of Japan's society."},

  {type:"teach", trg:"IoT", src:"Internet of Things", pos:"noun", gender:null,
   note:"Pronounced アイ・オー・ティー in Japanese.\nIoT機器(きき) = IoT devices. 物(もの)のインターネット = Japanese translation.",
   example:"A: IoT技術(ぎじゅつ)で家(いえ)の家電(かでん)がスマートフォンで操作(そうさ)できます。\nB: 便利(べんり)ですが、セキュリティーリスクもありますね。",
   exampleSrc:"A: With IoT technology, home appliances can be operated from a smartphone.\nB: It is convenient, but there are also security risks.",
   funFact:"IoT is used as-is in Japanese, pronounced letter by letter. Japan's ものづくり (manufacturing) tradition gives it an advantage in IoT development. Japanese companies like Sony, Panasonic, and Toyota are integrating IoT into everything from smart homes to connected cars. The concept ties directly into Japan's Society 5.0 vision of a super-smart society."},

  {type:"teach", trg:"情報格差(じょうほうかくさ)", src:"digital divide / information gap", pos:"noun", gender:null,
   note:"Kanji: 情報格差. Also: デジタルデバイド (loanword).\n世代間(せだいかん)の情報格差(じょうほうかくさ) = generational digital divide.",
   example:"A: 高齢者(こうれいしゃ)と若(わか)い世代(せだい)の間(あいだ)に情報格差(じょうほうかくさ)があります。\nB: デジタル教育(きょういく)の充実(じゅうじつ)が必要(ひつよう)ですね。",
   exampleSrc:"A: There is a digital divide between elderly and younger generations.\nB: Enrichment of digital education is needed.",
   funFact:"情報格差 uses 情報 (information) and 格差 (gap/disparity). Japan's rapidly aging population makes 情報格差(じょうほうかくさ) a pressing social issue. While young Japanese are digital natives, many elderly citizens struggle with smartphones and online services. The government has launched デジタル活用支援(かつようしえん) (digital utilization support) programs to bridge this gap."},

  {type:"fb", s:"日本政府(にほんせいふ)は{1}を推進(すいしん)しています。\n(The Japanese government is promoting digitalization.)", a:"デジタル化(か)", opts:["デジタル化(か)","テレワーク","自動化(じどうか)","人工知能(じんこうちのう)"], sSrc:"The Japanese government is promoting digitalization.",
   hint:"The noun meaning 'digitalization,' the process of converting to digital systems."},

  {type:"teach", trg:"スマートシティ", src:"smart city", pos:"noun", gender:null,
   note:"Loanword from English. IoT, AI, ビッグデータを活用(かつよう)したまちづくり.\nSociety 5.0の実現(じつげん) = realization of Society 5.0.",
   example:"A: 日本各地(にほんかくち)でスマートシティの計画(けいかく)が進(すす)んでいます。\nB: エネルギー効率(こうりつ)や交通最適化(こうつうさいてきか)が期待(きたい)されています。",
   exampleSrc:"A: Smart city plans are progressing throughout Japan.\nB: Energy efficiency and transportation optimization are expected.",
   funFact:"スマートシティ is a direct loanword. Japan's スマートシティ initiatives connect to disaster preparedness, a uniquely Japanese priority. Cities like Kashiwa-no-ha (柏(かしわ)の葉(は)) and Fujisawa (藤沢(ふじさわ)) are test beds integrating IoT sensors for earthquake early warning, energy management, and elderly monitoring. Toyota's Woven City (ウーブンシティ) at the foot of Mt. Fuji aims to be a living laboratory for autonomous vehicles and smart living."},

  {type:"teach", trg:"特異点(とくいてん)", src:"singularity (technological)", pos:"noun", gender:null,
   note:"Kanji: 特異点. AIが人間(にんげん)の知能(ちのう)を超(こ)える点(てん).\nAlso: シンギュラリティ (loanword).",
   example:"A: 特異点(とくいてん)はいつ来(く)ると思(おも)いますか？\nB: 専門家(せんもんか)の間(あいだ)でも意見(いけん)が分(わ)かれています。",
   exampleSrc:"A: When do you think the singularity will come?\nB: Opinions are divided even among experts.",
   funFact:"特異点 uses 特 (special), 異 (different), and 点 (point). The technological singularity concept, popularized by Ray Kurzweil, is actively discussed in Japanese tech circles. Both 特異点(とくいてん) and the loanword シンギュラリティ are used. Japan's AI strategy acknowledges the possibility while focusing on 'human-centric AI' (人間中心(にんげんちゅうしん)のAI) that augments rather than replaces human capabilities."},

  {type:"mc", q:"情報格差(じょうほうかくさ) means:", opts:["information overload","digital divide","data breach","internet addiction"], ans:"digital divide",
   hint:"This compound uses 'information' plus 'gap/disparity' to describe unequal access to technology."},

  {type:"match", pairs:[{trg:"デジタル化(か)",src:"digitalization"},{trg:"テレワーク",src:"remote work"},{trg:"ロボット",src:"robot"},{trg:"電子決済(でんしけっさい)",src:"electronic payment"}]},

  {type:"fb", s:"高齢者(こうれいしゃ)と若(わか)い世代(せだい)の間(あいだ)に{1}があります。\n(There is a digital divide between elderly and younger generations.)", a:"情報格差(じょうほうかくさ)", opts:["情報格差(じょうほうかくさ)","プライバシー","サイバー攻撃(こうげき)","デジタル化(か)"], sSrc:"There is a digital divide between elderly and younger generations.",
   hint:"The compound meaning 'information gap' or 'digital divide,' describing unequal technology access."},

  {type:"match", pairs:[{trg:"IoT",src:"Internet of Things"},{trg:"情報格差(じょうほうかくさ)",src:"digital divide"},{trg:"スマートシティ",src:"smart city"},{trg:"特異点(とくいてん)",src:"singularity"}]},

  {type:"mc", q:"Japan has a positive cultural view of ロボット partly because of:", opts:["large government subsidies for robot research programs","widespread public fear of labor shortages and aging","the manga character 鉄腕(てつわん)アトム (Astro Boy)","the influence of World War II military technology history"], ans:"the manga character 鉄腕(てつわん)アトム (Astro Boy)",
   hint:"Tezuka Osamu's 1950s comic series depicted a friendly child-like robot, shaping positive public attitudes for decades."},

  {type:"mc", q:"電子決済(でんしけっさい) means:", opts:["digital banking","internet transfer","online shopping","electronic payment"], ans:"electronic payment",
   hint:"電子(でんし) (e...) plus 決済(けっさい) (settlement/p...), covering QR codes, IC cards, and mobile pay."},

  {type:"fb", s:"日本各地(にほんかくち)でスマート{1}の計画(けいかく)が進(すす)んでいます。\n(Smart city plans are progressing throughout Japan.)", a:"シティ", opts:["シティ", "センター","タウン","ゾーン"], sSrc:"Smart city plans are progressing throughout Japan.",
   hint:"The second part of the English loanword compound meaning an intelligent, technology-integrated urban area."},

  {type:"mc", q:"特異点(とくいてん) refers to:", opts:["the technological singularity","a government policy goal","a type of AI program","a data privacy law"], ans:"the technological singularity",
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
,BATCH11_L1
]};
export default UNIT_35;
