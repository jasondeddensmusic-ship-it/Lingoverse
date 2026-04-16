// Batch 7 – Unit 21 (B1.2 Society & News): Social Issues Vocabulary
const BATCH7_L1 = {
  id:"jav2_u21l_b7_1", title:"しゃかいもんだい", icon:"📰", xp:15, board:true,
  steps:[
    {type:"intro", title:"しゃかいもんだい",
     desc:"Learn vocabulary for discussing social issues facing modern Japan. These words appear in news, documentaries, and daily conversation about society's challenges.",
     goals:["Discuss demographic and social challenges","Understand news vocabulary about society","Express opinions on social topics"]},

    {type:"teach", trg:"しょうしこうれいか", src:"declining birthrate and aging population", pos:"noun", gender:null,
     note:"しょうし = few children. こうれいか = aging.\nJapan's biggest demographic challenge.",
     example:"A: しょうしこうれいかがすすんでいますね。\nB: はい、しょうらいのろうどうりょくがしんぱいです。",
     exampleSrc:"A: The declining birthrate and aging are progressing.\nB: Yes, the future labor force is a worry.",
     funFact:"しょうしこうれいか (少子高齢化) is Japan's defining social challenge. Nearly 30% of the population is over 65. The birthrate is about 1.2 children per woman. Some towns are offering up to 1 million yen per child as incentives. Robot caregivers and immigration are debated solutions."},

    {type:"teach", trg:"かこうろうどう", src:"overwork / excessive labor", pos:"noun", gender:null,
     note:"か = excess, こう = excessive, ろうどう = labor.\nかろうし = death from overwork.",
     example:"A: かこうろうどうはけんこうによくないです。\nB: はたらきかたかいかくがひつようですね。",
     exampleSrc:"A: Overwork is bad for health.\nB: Work-style reform is needed.",
     funFact:"かろうし (過労死, death from overwork) is a recognized legal cause of death in Japan. The government set an overtime cap of 100 hours/month. はたらきかたかいかく (work-style reform) became law in 2019. Despite progress, long hours remain common. Premium Friday (early leave on last Friday) had limited success."},

    {type:"teach", trg:"こどくし", src:"dying alone / solitary death", pos:"noun", gender:null,
     note:"こどく = solitude. し = death.\nA growing social problem in aging Japan.",
     example:"A: こどくしがふえているそうです。\nB: ちいきのつながりがだいじですね。",
     exampleSrc:"A: I hear solitary deaths are increasing.\nB: Community connections are important.",
     funFact:"こどくし (孤独死) is a tragic reality of Japan's aging society. Elderly people living alone sometimes die undiscovered for weeks or months. Special cleaning services (特殊清掃) handle these cases. Community watch programs (見守り) and delivery services now check on elderly residents."},

    {type:"teach", trg:"いじめ", src:"bullying", pos:"noun", gender:null,
     note:"いじめる = to bully (verb).\nがっこういじめ = school bullying. ネットいじめ = cyberbullying.",
     example:"A: いじめはぜったいにゆるされません。\nB: そうですね。みんなでとめなければなりません。",
     exampleSrc:"A: Bullying is absolutely unacceptable.\nB: That is right. We must stop it together.",
     funFact:"いじめ (虐め) is a serious issue in Japanese schools. The group-oriented culture can enable exclusion of 'different' students. 不登校 (ふとうこう, school refusal) is often linked to いじめ. Japan has a 24-hour いじめ hotline. Schools now have mandatory reporting and anti-いじめ programs."},

    {type:"teach", trg:"ひきこもり", src:"social withdrawal / shut-in", pos:"noun", gender:null,
     note:"ひく = to withdraw, こもる = to seclude.\nEstimated 1+ million ひきこもり in Japan.",
     example:"A: ひきこもりのしえんプログラムがあります。\nB: ぜひさんかしてほしいですね。",
     exampleSrc:"A: There are support programs for hikikomori.\nB: I hope they participate.",
     funFact:"ひきこもり is a Japanese phenomenon with global recognition. People withdraw from society for months or years, staying in their rooms. The 8050 problem describes 80-year-old parents supporting 50-year-old ひきこもり children. Causes include school pressure, work failure, and social anxiety. Support is growing."},

    {type:"teach", trg:"かくさ", src:"gap / disparity / inequality", pos:"noun", gender:null,
     note:"けいざいかくさ = economic disparity.\nかくさしゃかい = stratified society.",
     example:"A: しょとくのかくさがひろがっています。\nB: きょういくのきかいきんとうがだいじです。",
     exampleSrc:"A: Income disparity is widening.\nB: Equal educational opportunities are important.",
     funFact:"かくさ (格差) describes Japan's growing inequality. Once seen as a homogeneous middle-class society, Japan now has 正規 (regular employees with benefits) vs 非正規 (irregular workers without). The かくさ between urban and rural areas, generations, and employment types is a major political topic."},

    {type:"teach", trg:"ボランティア", src:"volunteer / volunteering", pos:"noun", gender:null,
     note:"ボランティアかつどう = volunteer activities.\nボランティアをする = to volunteer.",
     example:"A: さいがいのあとボランティアにいきました。\nB: すばらしいですね。",
     exampleSrc:"A: I went to volunteer after the disaster.\nB: That is wonderful.",
     funFact:"Disaster ボランティア surged after the 1995 Kobe earthquake and 2011 Tohoku tsunami. Tens of thousands of ボランティア travel to disaster zones. Japan's ボランティア culture, once weak compared to Western countries, has grown significantly. Community clean-ups and elderly support are common ボランティア activities."},

    {type:"teach", trg:"じぞくかのう", src:"sustainable", pos:"adj", gender:null,
     note:"Na-adjective. じぞくかのうなしゃかい = sustainable society.\nSDGs = じぞくかのうなかいはつもくひょう.",
     example:"A: じぞくかのうなかいはつがだいじですね。\nB: はい、みらいのためにかんがえなければ。",
     exampleSrc:"A: Sustainable development is important.\nB: Yes, we must think about the future.",
     funFact:"じぞくかのう (持続可能) became mainstream in Japan through the SDGs (Sustainable Development Goals). Japanese companies actively promote SDGs initiatives. Schools teach じぞくかのうなせいかつ (sustainable living). The traditional もったいない spirit aligns naturally with modern sustainability."},

    {type:"teach", trg:"たようせい", src:"diversity", pos:"noun", gender:null,
     note:"た = many, よう = kinds, せい = nature.\nたようせいのあるしゃかい = a diverse society.",
     example:"A: たようせいをみとめるしゃかいがひつようです。\nB: そうですね。ちがいをそんちょうしましょう。",
     exampleSrc:"A: A society that recognizes diversity is needed.\nB: Yes. Let us respect differences.",
     funFact:"たようせい (多様性) is a growing concept in traditionally homogeneous Japan. Gender diversity (ジェンダー), ethnic diversity, and neurodiversity are increasingly discussed. Some companies now have たようせい officers. Progress is slow but real, driven by younger generations and global business pressure."},

    {type:"teach", trg:"こうきょうのば", src:"public spaces / public venues", pos:"noun", gender:null,
     note:"こうきょう = public. ば = place.\nこうきょうのマナー = public manners.",
     example:"A: こうきょうのばではしずかにしましょう。\nB: でんしゃでのでんわはめいわくですね。",
     exampleSrc:"A: Let us be quiet in public spaces.\nB: Phone calls on trains are a bother.",
     funFact:"Japanese public space etiquette (公共マナー) is remarkably strict. No phone calls on trains, no eating while walking, no loud conversations. Signs reminding of マナー are everywhere. This collective consideration creates the famously clean, quiet public spaces that visitors admire."},

    {type:"teach", trg:"ぼうはんカメラ", src:"security camera", pos:"noun", gender:null,
     note:"ぼうはん = crime prevention. Also: かんしカメラ.\nぼうはんカメラせっち = security camera installation.",
     example:"A: このまちはぼうはんカメラがおおいですね。\nB: あんぜんのためですが、プライバシーもだいじです。",
     exampleSrc:"A: This town has many security cameras.\nB: For safety, but privacy is also important.",
     funFact:"Japan has fewer ぼうはんカメラ per capita than the UK or China, but the number is growing. The debate between safety (あんぜん) and privacy (プライバシー) is ongoing. Japanese people generally accept cameras in public spaces as a fair trade for the low crime rate they help maintain."},

    {type:"teach", trg:"てんさい", src:"natural disaster", pos:"noun", gender:null,
     note:"てん = heaven/nature. さい = disaster.\nてんさいたいこく = disaster-prone country.",
     example:"A: にほんはてんさいがおおいくにです。\nB: そのためぼうさいいしきがたかいですね。",
     exampleSrc:"A: Japan is a country with many natural disasters.\nB: That is why disaster awareness is high.",
     funFact:"Japan faces earthquakes, tsunamis, typhoons, floods, and volcanic eruptions. The word てんさい (天災) vs じんさい (人災, man-made disaster) is an important distinction. Japan's disaster preparedness (防災, ぼうさい) is world-leading. Every household has an emergency bag (防災袋). Schools run monthly drills."},

    // Quiz steps
    {type:"mc", q:"しょうしこうれいか describes:",
     opts:["Declining birthrate combined with aging population","Rapid population growth","Youth unemployment","Immigration increase"],
     ans:"Declining birthrate combined with aging population",
     hint:"Japan's biggest demographic challenge: fewer children being born while the elderly p... grows."},

    {type:"match", pairs:[
      {trg:"いじめ", src:"bullying"},
      {trg:"ひきこもり", src:"social withdrawal"},
      {trg:"かくさ", src:"disparity"},
      {trg:"たようせい", src:"diversity"},
      {trg:"てんさい", src:"natural disaster"}
    ]},

    {type:"fb", s:"{1}なかいはつがみらいのためにだいじです。",
     a:["じぞくかのう"],
     opts:["じぞくかのう","ゆうしゅう","ふさわしい","めずらしい"],
     hint:"This na-adjective means 'sustainable,' as in the SDGs framework.",
     sSrc:"{1} development is important for the future."},

    {type:"mc", q:"かろうし means:",
     opts:["Death from overwork","Retirement age","Sick leave","Job transfer"],
     ans:"Death from overwork",
     hint:"A legally recognized cause of d... unique to Japan, leading to labor reform laws."},

    {type:"fb", s:"さいがいのあと{1}にいきました。",
     a:["ボランティア"],
     opts:["ボランティア","りょこう","しごと","かいもの"],
     hint:"Going to help after a disaster. This katakana word means 'volunteer.'",
     sSrc:"I went to {1} after the disaster."},

    {type:"mc", q:"こうきょうのばでのでんわは:",
     opts:["Considered rude on Japanese trains","Perfectly normal everywhere","Only banned in hospitals","Allowed at any volume"],
     ans:"Considered rude on Japanese trains",
     hint:"J... public manners strictly prohibit phone calls on t... as a form of めいわく."},

    {type:"match", pairs:[
      {trg:"しょうしこうれいか", src:"declining birthrate/aging"},
      {trg:"かこうろうどう", src:"overwork"},
      {trg:"こどくし", src:"dying alone"},
      {trg:"ボランティア", src:"volunteer"},
      {trg:"じぞくかのう", src:"sustainable"}
    ]},

    {type:"fb", s:"ちがいを{1}するしゃかいがひつようです。",
     a:["そんちょう"],
     opts:["そんちょう","ぼうし","きょうりょく","しょうたい"],
     hint:"A society that respects differences is needed. This verb means 'to respect.'",
     sSrc:"A society that {1} differences is needed."}
  ]
};
export default BATCH7_L1;
