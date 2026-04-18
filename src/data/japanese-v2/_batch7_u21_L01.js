// Batch 7 – Unit 21 (B1.2 Society & News): Social Issues Vocabulary
const BATCH7_L1 = {
  id:"jav2_u21l_b7_1", title:"社会(しゃかい)問題(もんだい)", icon:"📰", xp:15, board:true,
  steps:[
    {type:"intro", title:"社会(しゃかい)問題(もんだい)",
     desc:"Learn vocabulary for discussing social issues facing modern Japan. These words appear in news, documentaries, and daily conversation about society's challenges.",
     goals:["Discuss demographic and social challenges","Understand news vocabulary about society","Express opinions on social topics"]},

    {type:"teach", trg:"少子高齢化(しょうしこうれいか)", src:"declining birthrate and aging population", pos:"noun", gender:null,
     note:"少子(しょうし) = few children. 高齢化(こうれいか) = aging.\nJapan's biggest demographic challenge.",
     example:"A: 少子高齢化(しょうしこうれいか)が進(すす)んでいますね。\nB: はい、将来(しょうらい)の労働力(ろうどうりょく)が心配(しんぱい)です。\nA: いい思(おも)い出(で)ですね。\nB: はい、一生(いっしょう)忘(わす)れません。",
     exampleSrc:"A: The declining birthrate and aging are progressing.\nB: Yes, the future labor force is a worry.\nA: That is a nice memory.\nB: Yes, I will never forget it.",
     funFact:"少子高齢化(しょうしこうれいか) is Japan's defining social challenge. Nearly 30% of the population is over 65. The birthrate is about 1.2 children per woman. Some towns are offering up to 1 million yen per child as incentives. Robot caregivers and immigration are debated solutions."},

    {type:"teach", trg:"過剰労働(かこうろうどう)", src:"overwork / excessive labor", pos:"noun", gender:null,
     note:"過(か) = excess, 剰(こう) = excessive, 労働(ろうどう) = labor.\n過労死(かろうし) = death from overwork.",
     example:"A: 過剰労働(かこうろうどう)は健康(けんこう)によくないです。\nB: 働(はたら)き方改革(かたかいかく)が必要(ひつよう)ですね。\nA: どうでしたか？\nB: とても良(よ)かったです。",
     exampleSrc:"A: Overwork is bad for health.\nB: Work-style reform is needed.\nA: How was it?\nB: It was very good.",
     funFact:"過労死(かろうし) (death from overwork) is a recognized legal cause of death in Japan. The government set an overtime cap of 100 hours/month. 働(はたら)き方改革(かたかいかく) (work-style reform) became law in 2019. Despite progress, long hours remain common. Premium Friday (early leave on last Friday) had limited success."},

    {type:"teach", trg:"孤独死(こどくし)", src:"dying alone / solitary death", pos:"noun", gender:null,
     note:"孤独(こどく) = solitude. 死(し) = death.\nA growing social problem in aging Japan.",
     example:"A: 孤独死(こどくし)が増(ふ)えているそうです。\nB: 地域(ちいき)のつながりが大事(だいじ)ですね。\nA: いつですか？\nB: 去年(きょねん)の夏(なつ)でした。",
     exampleSrc:"A: I hear solitary deaths are increasing.\nB: Community connections are important.\nA: When was it?\nB: It was last summer.",
     funFact:"孤独死(こどくし) is a tragic reality of Japan's aging society. Elderly people living alone sometimes die undiscovered for weeks or months. Special cleaning services (特殊清掃(とくしゅせいそう)) handle these cases. Community watch programs (見守(みまも)り) and delivery services now check on elderly residents."},

    {type:"teach", trg:"いじめ", src:"bullying", pos:"noun", gender:null,
     note:"いじめる = to bully (verb).\n学校(がっこう)いじめ = school bullying. ネットいじめ = cyberbullying.",
     example:"A: いじめは絶対(ぜったい)に許(ゆる)されません。\nB: そうですね。みんなで止(と)めなければなりません。\nA: それはいいですね。\nB: はい、とても楽(たの)しかったです。",
     exampleSrc:"A: Bullying is absolutely unacceptable.\nB: That is right. We must stop it together.\nA: That is nice.\nB: Yes, it was very fun.",
     funFact:"いじめ (虐(いじ)め) is a serious issue in Japanese schools. The group-oriented culture can enable exclusion of 'different' students. 不登校(ふとうこう) (school refusal) is often linked to いじめ. Japan has a 24-hour いじめ hotline. Schools now have mandatory reporting and anti-いじめ programs."},

    {type:"teach", trg:"引(ひ)きこもり", src:"social withdrawal / shut-in", pos:"noun", gender:null,
     note:"引(ひ)く = to withdraw, こもる = to seclude.\nEstimated 1+ million 引(ひ)きこもり in Japan.",
     example:"A: 引(ひ)きこもりの支援(しえん)プログラムがあります。\nB: ぜひ参加(さんか)してほしいですね。\nA: そうですか。よかったですね。\nB: はい、いい経験(けいけん)でした。",
     exampleSrc:"A: There are support programs for hikikomori.\nB: I hope they participate.\nA: Is that so? That is good.\nB: Yes, it was a good experience.",
     funFact:"引(ひ)きこもり is a Japanese phenomenon with global recognition. People withdraw from society for months or years, staying in their rooms. The 8050 problem describes 80-year-old parents supporting 50-year-old 引(ひ)きこもり children. Causes include school pressure, work failure, and social anxiety. Support is growing."},

    {type:"teach", trg:"格差(かくさ)", src:"gap / disparity / inequality", pos:"noun", gender:null,
     note:"経済格差(けいざいかくさ) = economic disparity.\n格差社会(かくさしゃかい) = stratified society.",
     example:"A: 所得(しょとく)の格差(かくさ)が広(ひろ)がっています。\nB: 教育(きょういく)の機会均等(きかいきんとう)が大事(だいじ)です。\nA: また行(い)きたいですか？\nB: はい、ぜひ行(い)きたいです。",
     exampleSrc:"A: Income disparity is widening.\nB: Equal educational opportunities are important.\nA: Do you want to go again?\nB: Yes, I definitely want to go.",
     funFact:"格差(かくさ) describes Japan's growing inequality. Once seen as a homogeneous middle-class society, Japan now has 正規(せいき) (regular employees with benefits) vs 非正規(ひせいき) (irregular workers without). The 格差(かくさ) between urban and rural areas, generations, and employment types is a major political topic."},

    {type:"teach", trg:"ボランティア", src:"volunteer / volunteering", pos:"noun", gender:null,
     note:"ボランティア活動(かつどう) = volunteer activities.\nボランティアをする = to volunteer.",
     example:"A: 災害(さいがい)の後(あと)ボランティアに行(い)きました。\nB: すばらしいですね。\nA: どのくらいかかりましたか？\nB: だいたい二時間(にじかん)ぐらいです。",
     exampleSrc:"A: I went to volunteer after the disaster.\nB: That is wonderful.\nA: How long did it take?\nB: About two hours.",
     funFact:"Disaster ボランティア surged after the 1995 Kobe earthquake and 2011 Tohoku tsunami. Tens of thousands of ボランティア travel to disaster zones. Japan's ボランティア culture, once weak compared to Western countries, has grown significantly. Community clean-ups and elderly support are common ボランティア activities."},

    {type:"teach", trg:"持続可能(じぞくかのう)", src:"sustainable", pos:"adj", gender:null,
     note:"Na-adjective. 持続可能(じぞくかのう)な社会(しゃかい) = sustainable society.\nSDGs = 持続可能(じぞくかのう)な開発目標(かいはつもくひょう).",
     example:"A: 持続可能(じぞくかのう)な開発(かいはつ)が大事(だいじ)ですね。\nB: はい、未来(みらい)のために考(かんが)えなければ。\nA: 難(むずか)しかったですか？\nB: 最初(さいしょ)は難(むずか)しかったですが、慣(な)れました。",
     exampleSrc:"A: Sustainable development is important.\nB: Yes, we must think about the future.\nA: Was it difficult?\nB: It was difficult at first, but I got used to it.",
     funFact:"持続可能(じぞくかのう) became mainstream in Japan through the SDGs (Sustainable Development Goals). Japanese companies actively promote SDGs initiatives. Schools teach 持続可能(じぞくかのう)な生活(せいかつ) (sustainable living). The traditional もったいない spirit aligns naturally with modern sustainability."},

    {type:"teach", trg:"多様性(たようせい)", src:"diversity", pos:"noun", gender:null,
     note:"多(た) = many, 様(よう) = kinds, 性(せい) = nature.\n多様性(たようせい)のある社会(しゃかい) = a diverse society.",
     example:"A: 多様性(たようせい)を認(みと)める社会(しゃかい)が必要(ひつよう)です。\nB: そうですね。違(ちが)いを尊重(そんちょう)しましょう。\nA: おすすめですか？\nB: はい、ぜひ試(ため)してみてください。",
     exampleSrc:"A: A society that recognizes diversity is needed.\nB: Yes. Let us respect differences.\nA: Do you recommend it?\nB: Yes, please try it.",
     funFact:"多様性(たようせい) is a growing concept in traditionally homogeneous Japan. Gender diversity (ジェンダー), ethnic diversity, and neurodiversity are increasingly discussed. Some companies now have 多様性(たようせい) officers. Progress is slow but real, driven by younger generations and global business pressure."},

    {type:"teach", trg:"公共(こうきょう)の場(ば)", src:"public spaces / public venues", pos:"noun", gender:null,
     note:"公共(こうきょう) = public. 場(ば) = place.\n公共(こうきょう)のマナー = public manners.",
     example:"A: 公共(こうきょう)の場(ば)では静(しず)かにしましょう。\nB: 電車(でんしゃ)での電話(でんわ)は迷惑(めいわく)ですね。\nA: 一緒(いっしょ)に行(い)きませんか？\nB: いいですね。行(い)きましょう。",
     exampleSrc:"A: Let us be quiet in public spaces.\nB: Phone calls on trains are a bother.\nA: Shall we go together?\nB: That sounds good. Let's go.",
     funFact:"Japanese public space etiquette (公共(こうきょう)マナー) is remarkably strict. No phone calls on trains, no eating while walking, no loud conversations. Signs reminding of マナー are everywhere. This collective consideration creates the famously clean, quiet public spaces that visitors admire."},

    {type:"teach", trg:"防犯(ぼうはん)カメラ", src:"security camera", pos:"noun", gender:null,
     note:"防犯(ぼうはん) = crime prevention. Also: 監視(かんし)カメラ.\n防犯(ぼうはん)カメラ設置(せっち) = security camera installation.",
     example:"A: この町(まち)は防犯(ぼうはん)カメラが多(おお)いですね。\nB: 安全(あんぜん)のためですが、プライバシーも大事(だいじ)です。\nA: どこがおすすめですか？\nB: 京都(きょうと)がおすすめです。",
     exampleSrc:"A: This town has many security cameras.\nB: For safety, but privacy is also important.\nA: Where do you recommend?\nB: I recommend Kyoto.",
     funFact:"Japan has fewer 防犯(ぼうはん)カメラ per capita than the UK or China, but the number is growing. The debate between safety (安全(あんぜん)) and privacy (プライバシー) is ongoing. Japanese people generally accept cameras in public spaces as a fair trade for the low crime rate they help maintain."},

    {type:"teach", trg:"天災(てんさい)", src:"natural disaster", pos:"noun", gender:null,
     note:"天(てん) = heaven/nature. 災(さい) = disaster.\n天災大国(てんさいたいこく) = disaster-prone country.",
     example:"A: 日本(にほん)は天災(てんさい)が多(おお)い国(くに)です。\nB: そのため防災(ぼうさい)意識(いしき)が高(たか)いですね。\nA: 何(なに)が一番(いちばん)良(よ)かったですか？\nB: 食(た)べ物(もの)が一番(いちばん)おいしかったです。",
     exampleSrc:"A: Japan is a country with many natural disasters.\nB: That is why disaster awareness is high.\nA: What was the best part?\nB: The food was the most delicious.",
     funFact:"Japan faces earthquakes, tsunamis, typhoons, floods, and volcanic eruptions. The word 天災(てんさい) vs 人災(じんさい) (man-made disaster) is an important distinction. Japan's disaster preparedness (防災(ぼうさい)) is world-leading. Every household has an emergency bag (防災袋(ぼうさいぶくろ)). Schools run monthly drills."},

    // Quiz steps
    {type:"mc", q:"少子高齢化(しょうしこうれいか) describes:",
     opts:["Declining birthrate combined with aging population","Rapid population growth","Youth unemployment","Immigration increase"],
     ans:"Declining birthrate combined with aging population",
     hint:"Japan's biggest demographic challenge: fewer children being born while the elderly p... grows."},

    {type:"match", pairs:[
      {trg:"いじめ", src:"bullying"},
      {trg:"引(ひ)きこもり", src:"social withdrawal"},
      {trg:"格差(かくさ)", src:"disparity"},
      {trg:"多様性(たようせい)", src:"diversity"},
      {trg:"天災(てんさい)", src:"natural disaster"}
    ]},

    {type:"fb", s:"{1}な開発(かいはつ)が未来(みらい)のために大事(だいじ)です。",
     a:["持続可能(じぞくかのう)"],
     opts:["持続可能(じぞくかのう)","優秀(ゆうしゅう)","ふさわしい","珍(めずら)しい"],
     hint:"This na-adjective means 'sustainable,' as in the SDGs framework.",
     sSrc:"{1} development is important for the future."},

    {type:"mc", q:"過労死(かろうし) means:",
     opts:["Death from overwork","Retirement age","Sick leave","Job transfer"],
     ans:"Death from overwork",
     hint:"A legally recognized cause of d... unique to Japan, leading to labor reform laws."},

    {type:"fb", s:"災害(さいがい)の後(あと){1}に行(い)きました。",
     a:["ボランティア"],
     opts:["ボランティア","旅行(りょこう)","仕事(しごと)","買(か)い物(もの)"],
     hint:"Going to help after a disaster. This katakana word means 'volunteer.'",
     sSrc:"I went to {1} after the disaster."},

    {type:"mc", q:"公共(こうきょう)の場(ば)での電話(でんわ)は:",
     opts:["Considered rude on Japanese trains","Perfectly normal everywhere","Only banned in hospitals","Allowed at any volume"],
     ans:"Considered rude on Japanese trains",
     hint:"J... public manners strictly prohibit phone calls on t... as a form of 迷惑(めいわく)."},

    {type:"match", pairs:[
      {trg:"少子高齢化(しょうしこうれいか)", src:"declining birthrate/aging"},
      {trg:"過剰労働(かこうろうどう)", src:"overwork"},
      {trg:"孤独死(こどくし)", src:"dying alone"},
      {trg:"ボランティア", src:"volunteer"},
      {trg:"持続可能(じぞくかのう)", src:"sustainable"}
    ]},

    {type:"fb", s:"違(ちが)いを{1}する社会(しゃかい)が必要(ひつよう)です。",
     a:["尊重(そんちょう)"],
     opts:["尊重(そんちょう)","防止(ぼうし)","協力(きょうりょく)","招待(しょうたい)"],
     hint:"A society that respects differences is needed. This verb means 'to respect.'",
     sSrc:"A society that {1} differences is needed."}
  ,{type:"match",pairs:[{trg:"公共(こうきょう)の場(ば)",src:"public spaces / public venues"},{trg:"防犯(ぼうはん)カメラ",src:"security camera"}]}]
};
export default BATCH7_L1;
