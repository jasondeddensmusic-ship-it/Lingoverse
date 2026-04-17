// Unit 34: Chinese Geography
// Level: B2.2 (HSK 4)
// Chinese (Mandarin) V2 format with hanzi+pinyin notation

const UNIT_34 = {
n:34, lang:"zh", srcLang:"en", track:"v2",
title:"中国地理 Chinese Geography", sub:"Regions and Landscapes",
icon:"🗺️", level:"B2.2", color:"#7B5EE8",
lessons:[

// ─── L1: Land of Contrasts ───
{id:"zhv2_u34l1", title:"Land of Contrasts", icon:"🌍", xp:15, board:true, steps:[
{type:"intro", title:"Land of Contrasts",
 desc:"Explore the vast geography of China. Learn vocabulary for landscapes, regions, and the features that make China one of the most geographically diverse countries on Earth.",
 goals:["Describe geographical features in Chinese","Compare regions using directional vocabulary","Discuss climate and landscape differences"]},

{type:"teach", trg:"地理(dìlǐ)", src:"geography", pos:"noun", gender:null,
 note:"地 (earth/land) + 理 (principle/logic).\nThe logic of the land.",
 example:"A: 你(nǐ)对(duì)中国(Zhōngguó)的(de)地理(dìlǐ)了解(liǎojiě)多少(duōshao)？\nB: 我(wǒ)知道(zhīdào)中国(Zhōngguó)非常(fēicháng)大(dà)。",
 exampleSrc:"A: How much do you know about China's geography?\nB: I know that China is very large.",
 funFact:"China spans 9.6 million square kilometers across 5 time zones, yet officially uses only one: Beijing time. A farmer in western Xinjiang watches the sunrise at 10 AM Beijing time."},

{type:"teach", trg:"省(shěng)", src:"province", pos:"noun", gender:null,
 note:"Third tone. One of the most important administrative terms.\nChina has 23 provinces.",
 example:"A: 中国(Zhōngguó)有(yǒu)多少(duōshao)个(gè)省(shěng)？\nB: 二十三(èrshísān)个(gè)省(shěng)。",
 exampleSrc:"A: How many provinces does China have?\nB: Twenty-three provinces.",
 funFact:"The character 省 also means 'to save' or 'to omit' when pronounced as a different tone (xǐng means 'to reflect'). Context determines meaning. Administrative provinces date back over 700 years to the Yuan Dynasty."},

{type:"teach", trg:"城市(chéngshì)", src:"city", pos:"noun", gender:null,
 note:"城 (city wall/fortress) + 市 (market).\nA walled market. Ancient cities grew around both.",
 example:"A: 北京(Běijīng)是(shì)一(yí)个(gè)很(hěn)大(dà)的(de)城市(chéngshì)。\nB: 对(duì)，人口(rénkǒu)超过(chāoguò)两千万(liǎngqiānwàn)。",
 exampleSrc:"A: Beijing is a very large city.\nB: Yes, the population exceeds twenty million.",
 funFact:"Chinese cities were historically defined by walls (城) protecting markets (市). The compound perfectly captures this: a fortress that protects commerce. Many city names still end in 城."},

{type:"teach", trg:"农村(nóngcūn)", src:"countryside / rural area", pos:"noun", gender:null,
 note:"农 (agriculture/farming) + 村 (village).\nWhere farmers live and work.",
 example:"A: 你(nǐ)在(zài)农村(nóngcūn)长大(zhǎngdà)的(de)吗(ma)？\nB: 是(shì)的(de)，我(wǒ)小时候(xiǎoshíhou)住(zhù)在(zài)农村(nóngcūn)。",
 exampleSrc:"A: Did you grow up in the countryside?\nB: Yes, I lived in the countryside when I was young.",
 funFact:"About 40% of China's population still lives in rural areas. The gap between 城市 and 农村 is one of the defining social dynamics of modern China."},

{type:"teach", trg:"人口(rénkǒu)", src:"population", pos:"noun", gender:null,
 note:"人 (person) + 口 (mouth).\nLiterally 'people mouths.' Mouths to feed.",
 example:"A: 中国(Zhōngguó)的(de)人口(rénkǒu)有(yǒu)多少(duōshao)？\nB: 大约(dàyuē)十四亿(shísì yì)。",
 exampleSrc:"A: What is China's population?\nB: About 1.4 billion.",
 funFact:"The 口 (mouth) in 人口 reflects how ancient censuses counted people: by mouths to feed. The same character appears in 出口 (exit, literally 'go-out mouth') and 入口 (entrance, 'go-in mouth')."},

{type:"mc", q:"地理(dìlǐ) literally means:",
 opts:["earth principle","sky map","water way","mountain path"],
 ans:"earth principle",
 hint:"Break the compound into its two characters. 地 means earth or land, and 理 means principle or logic."},

{type:"match", pairs:[
  {trg:"地理(dìlǐ)", src:"geography"},
  {trg:"省(shěng)", src:"province"},
  {trg:"城市(chéngshì)", src:"city"},
  {trg:"农村(nóngcūn)", src:"countryside"},
  {trg:"人口(rénkǒu)", src:"population"}
]},

{type:"teach", trg:"面积(miànjī)", src:"area / surface area", pos:"noun", gender:null,
 note:"面 (surface/face) + 积 (accumulate/area).\nThe accumulated surface of something.",
 example:"A: 中国(Zhōngguó)的(de)面积(miànjī)有(yǒu)多(duō)大(dà)？\nB: 大约(dàyuē)九百六十万(jiǔbǎi liùshí wàn)平方公里(píngfāng gōnglǐ)。",
 exampleSrc:"A: How large is China's area?\nB: About 9.6 million square kilometers.",
 funFact:"China is almost exactly the same size as the United States. Both countries span about 9.6 million square kilometers but have very different population distributions."},

{type:"teach", trg:"气候(qìhòu)", src:"climate", pos:"noun", gender:null,
 note:"气 (air/energy) + 候 (season/wait).\nThe air patterns across seasons.",
 example:"A: 中国(Zhōngguó)的(de)气候(qìhòu)差别(chābié)很(hěn)大(dà)。\nB: 南方(nánfāng)热(rè)，北方(běifāng)冷(lěng)。",
 exampleSrc:"A: China's climate varies greatly.\nB: The south is hot, the north is cold.",
 funFact:"China has every climate zone from tropical to subarctic. Hainan Island in the south has beaches and coconut palms. Harbin in the north builds ice palaces in winter at minus 30 degrees."},

{type:"teach", trg:"南方(nánfāng)", src:"south / southern region", pos:"noun", gender:null,
 note:"南 (south) + 方 (direction/region).\nRefers broadly to southern China.",
 example:"A: 南方(nánfāng)人(rén)喜欢(xǐhuan)吃(chī)米饭(mǐfàn)。\nB: 北方(běifāng)人(rén)喜欢(xǐhuan)吃(chī)面条(miàntiáo)。",
 exampleSrc:"A: Southerners like to eat rice.\nB: Northerners like to eat noodles.",
 funFact:"The Qinling Mountains and Huai River form the traditional dividing line between north and south China. This line also roughly separates rice cultivation in the south from wheat in the north."},

{type:"teach", trg:"北方(běifāng)", src:"north / northern region", pos:"noun", gender:null,
 note:"北 (north) + 方 (direction/region).\nRefers broadly to northern China.",
 example:"A: 北方(běifāng)的(de)冬天(dōngtiān)很(hěn)冷(lěng)。\nB: 对(duì)，有时候(yǒu shíhou)零下(língxià)二十(èrshí)度(dù)。",
 exampleSrc:"A: The northern winter is very cold.\nB: Yes, sometimes minus twenty degrees.",
 funFact:"Northern and southern Chinese cultures differ in food, dialect, temperament, and even height. Northerners are statistically taller on average, possibly linked to wheat-based diets and colder climates."},

{type:"fb", s:"中国(Zhōngguó)的(de){1}差别(chābié)很(hěn)大(dà)，南方(nánfāng)热(rè)，北方(běifāng)冷(lěng)。",
 a:["气候(qìhòu)"],
 opts:["气候(qìhòu)","面积(miànjī)","人口(rénkǒu)","地理(dìlǐ)"],
 hint:"The word for weather patterns across seasons. Air + season.",
 sSrc:"China's {1} varies greatly: the south is hot, the north is cold."},

{type:"mc", q:"人口(rénkǒu) literally translates as:",
 opts:["people mouths","many people","big family","human count"],
 ans:"people mouths",
 hint:"人 means person/___. The second character means 'mouth.' Think about ancient census methods."},

{type:"fb", s:"{1}人(rén)喜欢(xǐhuan)吃(chī)米饭(mǐfàn)，北方(běifāng)人(rén)喜欢(xǐhuan)吃(chī)面条(miàntiáo)。",
 a:["南方(nánfāng)"],
 opts:["南方(nánfāng)","北方(běifāng)","城市(chéngshì)","农村(nóngcūn)"],
 hint:"Rice grows in warm, wet conditions. Which region of China is warmer and wetter?",
 sSrc:"{1} people like to eat rice, northerners like to eat noodles."},

{type:"match", pairs:[
  {trg:"面积(miànjī)", src:"area"},
  {trg:"气候(qìhòu)", src:"climate"},
  {trg:"南方(nánfāng)", src:"south"},
  {trg:"北方(běifāng)", src:"north"},
  {trg:"人口(rénkǒu)", src:"population"}
]},

{type:"mc", q:"Which sentence correctly describes China's north-south food divide?",
 opts:["南方(nánfāng)人(rén)吃(chī)面条(miàntiáo)，北方(běifāng)人(rén)吃(chī)米饭(mǐfàn)","南方(nánfāng)人(rén)吃(chī)米饭(mǐfàn)，北方(běifāng)人(rén)吃(chī)面条(miàntiáo)","南方(nánfāng)和(hé)北方(běifāng)都(dōu)吃(chī)面条(miàntiáo)","北方(běifāng)人(rén)吃(chī)米饭(mǐfàn)，南方(nánfāng)人(rén)不(bù)吃(chī)"],
 ans:"南方(nánfāng)人(rén)吃(chī)米饭(mǐfàn)，北方(běifāng)人(rén)吃(chī)面条(miàntiáo)",
 hint:"Rice needs warm, wet conditions found in southern China. Wheat grows better in the drier, cooler north."}
]},

// ─── L2: Rivers and Landscapes ───
{id:"zhv2_u34l2", title:"Rivers and Landscapes", icon:"🏔️", xp:15, board:true, steps:[
{type:"intro", title:"Rivers and Landscapes",
 desc:"Learn the vocabulary for China's great rivers and dramatic landscapes. From the Yangtze to the Gobi Desert, from high plateaus to vast plains.",
 goals:["Name China's major geographical features","Describe landscapes using specific vocabulary","Compare different terrain types"]},

{type:"teach", trg:"长江(Chángjiāng)", src:"Yangtze River", pos:"noun", gender:null,
 note:"长 (long) + 江 (river).\nLiterally 'the Long River.' The longest river in Asia.",
 example:"A: 长江(Chángjiāng)有(yǒu)多(duō)长(cháng)？\nB: 大约(dàyuē)六千三百(liùqiān sānbǎi)公里(gōnglǐ)。",
 exampleSrc:"A: How long is the Yangtze River?\nB: About 6,300 kilometers.",
 funFact:"The Yangtze is the third-longest river in the world. The name 'Yangtze' actually comes from a local dialect name for one section. Chinese people call the entire river 长江, the Long River."},

{type:"teach", trg:"黄河(Huánghé)", src:"Yellow River", pos:"noun", gender:null,
 note:"黄 (yellow) + 河 (river).\nNamed for the yellow silt it carries from the Loess Plateau.",
 example:"A: 黄河(Huánghé)为什么(wèishénme)是(shì)黄色(huángsè)的(de)？\nB: 因为(yīnwèi)河水(héshuǐ)里(lǐ)有(yǒu)很(hěn)多(duō)泥沙(níshā)。",
 exampleSrc:"A: Why is the Yellow River yellow?\nB: Because the river water contains a lot of silt.",
 funFact:"The Yellow River is called the 'Mother River of China' because Chinese civilization began along its banks. It is also called 'China's Sorrow' because of devastating historical floods."},

{type:"teach", trg:"沙漠(shāmò)", src:"desert", pos:"noun", gender:null,
 note:"沙 (sand) + 漠 (vast/barren).\nA vast expanse of sand.",
 example:"A: 中国(Zhōngguó)有(yǒu)沙漠(shāmò)吗(ma)？\nB: 有(yǒu)，戈壁(Gēbì)沙漠(shāmò)在(zài)北方(běifāng)。",
 exampleSrc:"A: Does China have deserts?\nB: Yes, the Gobi Desert is in the north.",
 funFact:"The Gobi Desert spans northern China and southern Mongolia. Its name comes from Mongolian, meaning 'waterless place.' Despite the harsh conditions, the Silk Road trade routes crossed through it for centuries."},

{type:"teach", trg:"高原(gāoyuán)", src:"plateau / highland", pos:"noun", gender:null,
 note:"高 (high) + 原 (plain/original).\nA high plain. Elevated flat land.",
 example:"A: 青藏(Qīngzàng)高原(gāoyuán)有(yǒu)多(duō)高(gāo)？\nB: 平均(píngjūn)海拔(hǎibá)四千(sìqiān)多(duō)米(mǐ)。",
 exampleSrc:"A: How high is the Qinghai-Tibet Plateau?\nB: The average elevation is over 4,000 meters.",
 funFact:"The Qinghai-Tibet Plateau is called the 'Roof of the World.' It is the highest and largest plateau on Earth, covering an area roughly four times the size of France."},

{type:"teach", trg:"平原(píngyuán)", src:"plain / flatland", pos:"noun", gender:null,
 note:"平 (flat/level) + 原 (plain/original).\nFlat, level land. China's agricultural heartland.",
 example:"A: 华北(Huáběi)平原(píngyuán)是(shì)中国(Zhōngguó)最(zuì)大(dà)的(de)平原(píngyuán)。\nB: 那里(nàlǐ)种(zhòng)了(le)很(hěn)多(duō)小麦(xiǎomài)。",
 exampleSrc:"A: The North China Plain is China's largest plain.\nB: A lot of wheat is grown there.",
 funFact:"Compare 高原 (high plain = plateau) with 平原 (flat plain = flatland). Same second character 原, but the first character completely changes the meaning. This is how Chinese builds vocabulary through logical compounding."},

{type:"mc", q:"长江(Chángjiāng) literally means:",
 opts:["Long River","Great River","Dragon River","Old River"],
 ans:"Long River",
 hint:"The first character 长 means 'long.' The second character 江 means 'river.' Put them together."},

{type:"match", pairs:[
  {trg:"长江(Chángjiāng)", src:"Yangtze River"},
  {trg:"黄河(Huánghé)", src:"Yellow River"},
  {trg:"沙漠(shāmò)", src:"desert"},
  {trg:"高原(gāoyuán)", src:"plateau"},
  {trg:"平原(píngyuán)", src:"plain"}
]},

{type:"fb", s:"青藏(Qīngzàng){1}是(shì)世界(shìjiè)上(shàng)最(zuì)高(gāo)的(de)高原(gāoyuán)。",
 a:["高原(gāoyuán)"],
 opts:["高原(gāoyuán)","平原(píngyuán)","沙漠(shāmò)","城市(chéngshì)"],
 hint:"An elevated flat expanse of land. 高 means high, 原 means plain.",
 sSrc:"The Qinghai-Tibet {1} is the highest plateau in the world."},

{type:"mc", q:"Why is the 黄河(Huánghé) called the Yellow River?",
 opts:["Because of gold deposits in the riverbed","Because of the yellow silt it carries","Because of yellow flowers along its banks","Because of a legend about a yellow dragon"],
 ans:"Because of the yellow silt it carries",
 hint:"The river flows through the Loess Plateau, picking up enormous amounts of fine ___ soil called ___."},

{type:"fb", s:"{1}为什么(wèishénme)是(shì)黄色(huángsè)的(de)？因为(yīnwèi)有(yǒu)很(hěn)多(duō)泥沙(níshā)。",
 a:["黄河(Huánghé)"],
 opts:["黄河(Huánghé)","长江(Chángjiāng)","沙漠(shāmò)","高原(gāoyuán)"],
 hint:"This river's name literally contains the character for 'yellow.' It carries yellow silt.",
 sSrc:"Why is the {1} yellow? Because it contains a lot of silt."},

{type:"mc", q:"高原(gāoyuán) and 平原(píngyuán) share the character 原. What does 原 mean?",
 opts:["mountain","water","plain / original","city"],
 ans:"plain / original",
 hint:"Both words describe expanses of land. The shared character gives the base meaning. The first character modifies it: high vs. flat."},

{type:"teach", trg:"特色(tèsè)", src:"characteristic / distinctive feature", pos:"noun", gender:null,
 note:"特 (special) + 色 (color/feature).\nWhat makes something unique.",
 example:"A: 每(měi)个(gè)省(shěng)都(dōu)有(yǒu)自己(zìjǐ)的(de)特色(tèsè)。\nB: 对(duì)，四川(Sìchuān)的(de)特色(tèsè)是(shì)辣(là)的(de)食物(shíwù)。",
 exampleSrc:"A: Every province has its own characteristics.\nB: Yes, Sichuan's characteristic is spicy food.",
 funFact:"色 originally means 'color' but extends to mean 'type' or 'feature.' A region's 特色 is its special color, its signature identity. The word appears everywhere: 特色菜 (signature dish), 特色产品 (specialty product)."},

{type:"fb", s:"四川(Sìchuān)的(de){1}是(shì)辣(là)的(de)食物(shíwù)。",
 a:["特色(tèsè)"],
 opts:["特色(tèsè)","气候(qìhòu)","地理(dìlǐ)","面积(miànjī)"],
 hint:"The distinctive feature or characteristic that makes something unique. 特 (special) + 色 (color/feature).",
 sSrc:"Sichuan's {1} is spicy food."},

{type:"drag_fill", s:"中国(Zhōngguó)有(yǒu){1}，有(yǒu){2}，也(yě)有(yǒu){3}。",
 blanks:{"1":"沙漠(shāmò)","2":"高原(gāoyuán)","3":"平原(píngyuán)"},
 pool:["沙漠(shāmò)","高原(gāoyuán)","平原(píngyuán)","城市(chéngshì)","农村(nóngcūn)","人口(rénkǒu)"],
 hint:"Three types of terrain. One is sandy and barren. One is elevated and flat. One is low and flat."},

{type:"match", pairs:[
  {trg:"长江(Chángjiāng)", src:"Long River (Yangtze)"},
  {trg:"黄河(Huánghé)", src:"Yellow River"},
  {trg:"特色(tèsè)", src:"characteristic"},
  {trg:"高原(gāoyuán)", src:"plateau"},
  {trg:"平原(píngyuán)", src:"plain"}
]}
]},

// ─── L3: Regions and Diversity ───
{id:"zhv2_u34l3", title:"Regions and Diversity", icon:"🧭", xp:15, board:true, steps:[
{type:"intro", title:"Regions and Diversity",
 desc:"Synthesize your geography vocabulary to discuss China's regional diversity. Compare north and south, city and countryside, and explore what makes each region distinctive.",
 goals:["Compare and contrast Chinese regions","Use geography vocabulary in complex sentences","Discuss regional differences with nuance"]},

{type:"tip", title:"Using 有 for Existence and 是...的 for Emphasis",
 text:"Two key patterns for describing geography:\n\n1. 有(yǒu) for stating what exists:\n中国(Zhōngguó)有(yǒu)很(hěn)多(duō)高山(gāoshān)。\nChina has many high mountains.\n\n2. 是(shì)...的(de) for emphasizing a fact:\n长江(Chángjiāng)是(shì)亚洲(Yàzhōu)最(zuì)长(cháng)的(de)河流(héliú)。\nThe Yangtze IS the longest river in Asia.\n\nThe 是...的 pattern stresses that the information is a known fact, not new information.",
 deepDive:{title:"Topic-Comment Structure in Chinese",
  text:"Chinese sentences often follow a topic-comment pattern rather than strict subject-verb-object:\n\n中国(Zhōngguó)的(de)气候(qìhòu)，南方(nánfāng)热(rè)，北方(běifāng)冷(lěng)。\n(As for) China's climate, the south is hot, the north is cold.\n\nThe topic comes first, then the comment follows. This is different from English, where you would say 'The south of China is hot.' In Chinese, you set up the topic and then describe it. This structure is natural for comparing regions."}},

{type:"mc", q:"Which pattern emphasizes a known fact in Chinese?",
 opts:["有...吗","是...的","在...里","从...到"],
 ans:"是...的",
 hint:"This two-part pattern wraps around the key information to stress that it is an established fact, not something new."},

{type:"fb", s:"长江(Chángjiāng){1}亚洲(Yàzhōu)最(zuì)长(cháng)的(de)河流(héliú)。",
 a:["是(shì)"],
 opts:["是(shì)","有(yǒu)","在(zài)","从(cóng)"],
 hint:"This verb links a subject to a description. Here it works with 的 at the end to emphasize a fact.",
 sSrc:"The Yangtze River {1} the longest river in Asia."},

{type:"mc", q:"中国(Zhōngguó)有(yǒu)多少(duōshao)个(gè)省(shěng)？",
 opts:["十三(shísān)个(gè)","二十三(èrshísān)个(gè)","三十三(sānshísān)个(gè)","四十三(sìshísān)个(gè)"],
 ans:"二十三(èrshísān)个(gè)",
 hint:"The number is in the twenties. Think about what you learned in the first lesson of this unit."},

{type:"fb", s:"每(měi)个(gè)省(shěng)都(dōu)有(yǒu)自己(zìjǐ)的(de){1}。",
 a:["特色(tèsè)"],
 opts:["特色(tèsè)","沙漠(shāmò)","长江(Chángjiāng)","面积(miànjī)"],
 hint:"Each province has its own distinctive feature or specialty. 特 (special) + 色 (color/type).",
 sSrc:"Every province has its own {1}."},

{type:"drag_fill", s:"中国(Zhōngguó)的(de){1}非常(fēicháng)大(dà)，{2}有(yǒu)十四亿(shísì yì)。",
 blanks:{"1":"面积(miànjī)","2":"人口(rénkǒu)"},
 pool:["面积(miànjī)","人口(rénkǒu)","气候(qìhòu)","特色(tèsè)","城市(chéngshì)","地理(dìlǐ)"],
 hint:"The first blank describes the size of land. The second describes how many people live there."},

{type:"mc", q:"Which pair of words are directional opposites?",
 opts:["城市(chéngshì) and 农村(nóngcūn)","南方(nánfāng) and 北方(běifāng)","高原(gāoyuán) and 沙漠(shāmò)","省(shěng) and 面积(miànjī)"],
 ans:"南方(nánfāng) and 北方(běifāng)",
 hint:"One means south/southern region, the other means north/northern region. Compass directions."},

{type:"fb", s:"戈壁(Gēbì){1}在(zài)中国(Zhōngguó)的(de)北方(běifāng)。",
 a:["沙漠(shāmò)"],
 opts:["沙漠(shāmò)","高原(gāoyuán)","平原(píngyuán)","城市(chéngshì)"],
 hint:"A vast barren landscape of sand. 沙 means sand, 漠 means vast/barren.",
 sSrc:"The Gobi {1} is in northern China."},

{type:"match", pairs:[
  {trg:"地理(dìlǐ)", src:"geography"},
  {trg:"气候(qìhòu)", src:"climate"},
  {trg:"特色(tèsè)", src:"characteristic"},
  {trg:"沙漠(shāmò)", src:"desert"},
  {trg:"农村(nóngcūn)", src:"countryside"}
]},

{type:"mc", q:"青藏(Qīngzàng)高原(gāoyuán)被(bèi)称为(chēngwéi)'世界屋脊(shìjiè wūjǐ).' What is the 'Roof of the World'?",
 opts:["The Gobi Desert","The North China Plain","The Qinghai-Tibet Plateau","The Yangtze River Delta"],
 ans:"The Qinghai-Tibet Plateau",
 hint:"This geographical feature is the highest and largest ___ on Earth, with an average elevation over 4,000 meters."},

{type:"drag_fill", s:"{1}是(shì)亚洲(Yàzhōu)最(zuì)长(cháng)的(de)河(hé)，{2}被(bèi)称为(chēngwéi)'母亲河(mǔqīn hé)。'",
 blanks:{"1":"长江(Chángjiāng)","2":"黄河(Huánghé)"},
 pool:["长江(Chángjiāng)","黄河(Huánghé)","沙漠(shāmò)","高原(gāoyuán)","平原(píngyuán)","面积(miànjī)"],
 hint:"Asia's longest river is the 'Long River.' The 'Mother River' is the one named for its color."},

{type:"mc", q:"城市(chéngshì) and 农村(nóngcūn) represent what contrast in Chinese society?",
 opts:["North versus south","Modern versus ancient","Urban versus rural","Mountain versus river"],
 ans:"Urban versus rural",
 hint:"One word combines 'wall/fortress' and 'market' for ___ areas. The other combines 'agriculture' and 'village' for ___ areas."},

{type:"fb", s:"中国(Zhōngguó)的(de){1}从(cóng)热带(rèdài)到(dào)亚寒带(yà hándài)都(dōu)有(yǒu)。",
 a:["气候(qìhòu)"],
 opts:["气候(qìhòu)","地理(dìlǐ)","人口(rénkǒu)","特色(tèsè)"],
 hint:"The word for weather patterns across seasons. China has everything from tropical to subarctic.",
 sSrc:"China's {1} ranges from tropical to subarctic."}
]}

]};

export default UNIT_34;
