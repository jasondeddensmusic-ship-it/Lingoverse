// Unit 20: Environment and Nature
// Level: B1.2 (HSK 3)
// Chinese (Mandarin) V2 format with hanzi+pinyin notation

const UNIT_20 = {
n:20, lang:"zh", srcLang:"en", track:"v2",
title:"保护环境 Protecting the Environment", sub:"Nature and Ecology",
icon:"🌍", level:"B1.2", color:"#7B5EE8",
lessons:[

// ─── L1: The Natural World ───
{id:"zhv2_u20l1", title:"大自然 The Natural World", icon:"🌿", xp:15, board:true, steps:[
{type:"intro", title:"大自然 The Natural World",
 desc:"Learn vocabulary for animals, plants, forests, and the natural world. Chinese characters often contain visual clues about meaning, especially in nature words.",
 goals:["Name key elements of nature in Chinese","Understand how radicals reveal meaning in nature vocabulary","Describe the natural environment"]},

{type:"tip", title:"Nature Radicals in Chinese Characters",
 text:"Chinese characters use radicals (building blocks) that hint at meaning. Nature words share recognizable radicals:\n\n木(mù) = wood/tree\n森林(sēnlín) = forest (look: 木 appears five times!)\n植物(zhíwù) = plant (木 radical in 植)\n\n氵= water radical\n污染(wūrǎn) = pollution (氵in 污)\n\n土(tǔ) = earth/soil\n地球(dìqiú) = Earth (土 radical in 地)\n\nSpotting radicals helps you guess meanings of new characters, even ones you have never studied.",
 deepDive:{title:"The Three-Tree Forest",
  text:"One of the most elegant examples of Chinese character logic:\n\n木(mù) = one tree = wood/tree\n林(lín) = two trees = grove/woods\n森(sēn) = three trees = dense forest\n\n森林(sēnlín) combines both: a truly thick forest. This pattern of building meaning by repeating elements appears throughout Chinese. For example: 人(rén) = person, 从(cóng) = follow (two people), 众(zhòng) = crowd (three people)."}},

{type:"teach", trg:"自然(zìrán)", src:"nature / natural", pos:"noun", gender:null,
 note:"Self + so/thus. Something that is 'of itself,' without human interference.\nAlso an adverb: naturally, of course.",
 example:"A: 你(nǐ)喜欢(xǐhuan)大自然(dàzìrán)吗(ma)？\nB: 当然(dāngrán)喜欢(xǐhuan)，我(wǒ)周末(zhōumò)常常(chángcháng)去(qù)爬山(páshān)。",
 exampleSrc:"A: Do you like nature?\nB: Of course, I often go hiking on weekends.",
 funFact:"自然 literally means 'self-so,' the way things are by themselves. This reflects Daoist philosophy where the ideal state is 自然: things following their own nature without forced intervention. The concept is central to Chinese thought."},

{type:"teach", trg:"动物(dòngwù)", src:"animal", pos:"noun", gender:null,
 note:"Moving + thing. Animals are literally 'moving things.'\nPlant = 植物, a 'planted thing.' The contrast is elegant.",
 example:"A: 你(nǐ)最(zuì)喜欢(xǐhuan)什么(shénme)动物(dòngwù)？\nB: 我(wǒ)最(zuì)喜欢(xǐhuan)熊猫(xióngmāo)。",
 exampleSrc:"A: What animal do you like the most?\nB: I like pandas the most.",
 funFact:"熊猫(xióngmāo) means 'bear cat,' which is how Chinese describes the panda. Pandas are native to China's Sichuan province and are a national treasure. China loans pandas to other countries as diplomatic gifts, a practice called 'panda diplomacy.'"},

{type:"teach", trg:"植物(zhíwù)", src:"plant", pos:"noun", gender:null,
 note:"Planted + thing. The counterpart to 动物(dòngwù), animal.\n植 contains the wood radical 木, linking it to the plant world.",
 example:"A: 你(nǐ)家(jiā)里(lǐ)有(yǒu)植物(zhíwù)吗(ma)？\nB: 有(yǒu)，我(wǒ)养(yǎng)了(le)很多(hěnduō)植物(zhíwù)。",
 exampleSrc:"A: Do you have plants at home?\nB: Yes, I grow many plants.",
 funFact:"Chinese categorizes the living world into 动物 (moving things) and 植物 (planted things). This binary is beautifully simple: if it moves on its own, it is 动物. If it is rooted in place, it is 植物. The character 物 (thing) unifies both categories."},

{type:"teach", trg:"森林(sēnlín)", src:"forest", pos:"noun", gender:null,
 note:"Dense woods + grove. 森 = three trees stacked, 林 = two trees.\nTogether: a deep, thick forest.",
 example:"A: 中国(Zhōngguó)有(yǒu)很多(hěnduō)森林(sēnlín)吗(ma)？\nB: 有(yǒu)，特别(tèbié)是(shì)在(zài)南方(nánfāng)和(hé)东北(dōngběi)。",
 exampleSrc:"A: Does China have many forests?\nB: Yes, especially in the south and northeast.",
 funFact:"China has been running the world's largest reforestation program since the 1970s, called the 'Great Green Wall.' It aims to plant trees across northern China to stop desert expansion. Over 66 billion trees have been planted."},

{type:"teach", trg:"地球(dìqiú)", src:"earth (planet)", pos:"noun", gender:null,
 note:"Ground/land + ball/sphere. The planet Earth.\n地 uses the earth radical 土. 球 means sphere or ball.",
 example:"A: 地球(dìqiú)是(shì)我们(wǒmen)共同(gòngtóng)的(de)家(jiā)。\nB: 对(duì)，我们(wǒmen)应该(yīnggāi)保护(bǎohù)它(tā)。",
 exampleSrc:"A: The Earth is our shared home.\nB: Right, we should protect it.",
 funFact:"地球 literally means 'earth ball.' Chinese names for planets follow a pattern using the five classical elements: 火星(Huǒxīng) Mars (fire star), 水星(Shuǐxīng) Mercury (water star), 木星(Mùxīng) Jupiter (wood star), 金星(Jīnxīng) Venus (metal star), 土星(Tǔxīng) Saturn (earth star)."},

{type:"mc", q:"动物(dòngwù) literally means:",
 opts:["moving thing","living creature","natural being","breathing thing"],
 ans:"moving thing",
 hint:"The first character 动 means 'to move,' and 物 means 'thing.' Animals are defined by their ability to move."},

{type:"match", pairs:[
  {trg:"自然(zìrán)", src:"nature / natural"},
  {trg:"动物(dòngwù)", src:"animal"},
  {trg:"植物(zhíwù)", src:"plant"},
  {trg:"森林(sēnlín)", src:"forest"},
  {trg:"地球(dìqiú)", src:"earth (planet)"}
]},

{type:"fb", s:"这片(zhèpiàn){1}里(lǐ)有(yǒu)很多(hěnduō)种(zhǒng)动物(dòngwù)和(hé)植物(zhíwù)。",
 a:["森林(sēnlín)"],
 opts:["森林(sēnlín)","地球(dìqiú)","自然(zìrán)","动物(dòngwù)"],
 hint:"This word means a large area of trees. It is built from characters that literally show multiple trees.",
 sSrc:"This {1} has many kinds of animals and plants."},

{type:"mc", q:"Which pair correctly shows the contrast between animals and plants in Chinese?",
 opts:["动物 = moving things, 植物 = planted things","动物 = big things, 植物 = small things","动物 = wild things, 植物 = tame things","动物 = living things, 植物 = dead things"],
 ans:"动物 = moving things, 植物 = planted things",
 hint:"Both compounds end with 物 (thing). The first character describes the key difference: one moves, the other is rooted."},

{type:"fb", s:"我(wǒ)喜欢(xǐhuan)大{1}，经常(jīngcháng)去(qù)公园(gōngyuán)散步(sànbù)。",
 a:["自然(zìrán)"],
 opts:["自然(zìrán)","动物(dòngwù)","地球(dìqiú)","森林(sēnlín)"],
 hint:"This word means 'nature' in the broad sense. Adding 大 before it emphasizes the grandness of the natural world.",
 sSrc:"I like {1}, I often go for walks in the park."}
]},

// ─── L2: Environmental Issues ───
{id:"zhv2_u20l2", title:"环境问题 Environmental Problems", icon:"🏭", xp:15, board:true, steps:[
{type:"intro", title:"环境问题 Environmental Problems",
 desc:"Learn to discuss pollution, climate, and environmental challenges. These topics are central to public discussion in modern China.",
 goals:["Talk about pollution and environmental problems","Use 严重 to describe severity","Discuss air quality and climate"]},

{type:"teach", trg:"环境(huánjìng)", src:"environment", pos:"noun", gender:null,
 note:"Surround + border. Your surroundings, the world around you.\nAlso used for non-nature contexts: 工作环境 = work environment.",
 example:"A: 你(nǐ)觉得(juéde)这里(zhèlǐ)的(de)环境(huánjìng)怎么样(zěnmeyàng)？\nB: 环境(huánjìng)很(hěn)好(hǎo)，空气(kōngqì)也(yě)很(hěn)新鲜(xīnxiān)。",
 exampleSrc:"A: What do you think of the environment here?\nB: The environment is great, the air is also very fresh.",
 funFact:"环境保护 (environmental protection) is often shortened to 环保(huánbǎo) in daily Chinese. Products labeled 环保 are eco-friendly. China's Ministry of Ecology and Environment was established in 2018, showing the growing national focus on environmental issues."},

{type:"teach", trg:"空气(kōngqì)", src:"air", pos:"noun", gender:null,
 note:"Empty + gas. The gas that fills 'empty' space.\n空气质量(kōngqì zhìliàng) = air quality.",
 example:"A: 今天(jīntiān)的(de)空气(kōngqì)质量(zhìliàng)怎么样(zěnmeyàng)？\nB: 不太(bútài)好(hǎo)，有点(yǒudiǎn)污染(wūrǎn)。",
 exampleSrc:"A: How is the air quality today?\nB: Not great, there is some pollution.",
 funFact:"Air quality is a daily concern in many Chinese cities. People regularly check the AQI (Air Quality Index) on their phones. On bad pollution days, many people wear masks and keep windows closed. Beijing's air quality has improved significantly since 2015 due to strict regulations."},

{type:"teach", trg:"污染(wūrǎn)", src:"pollution", pos:"noun", gender:null,
 note:"Dirty + dye/contaminate. Both a noun and a verb.\n污染环境 = to pollute the environment.",
 example:"A: 这条(zhètiáo)河(hé)的(de)污染(wūrǎn)很(hěn)严重(yánzhòng)。\nB: 是(shì)啊(a)，以前(yǐqián)这里(zhèlǐ)的(de)水(shuǐ)很(hěn)干净(gānjìng)。",
 exampleSrc:"A: The pollution of this river is very serious.\nB: Yes, the water here used to be very clean.",
 funFact:"污 contains the water radical 氵because pollution was historically associated with dirty water. 染 means 'to dye' or 'to stain,' so 污染 literally means 'dirty staining.' China's war on pollution has been one of its top domestic priorities since 2013."},

{type:"teach", trg:"气候(qìhòu)", src:"climate", pos:"noun", gender:null,
 note:"Gas/air + wait/season. The long-term weather patterns of a region.\nDifferent from 天气(tiānqì) which means daily weather.",
 example:"A: 这个(zhège)地方(dìfang)的(de)气候(qìhòu)怎么样(zěnmeyàng)？\nB: 夏天(xiàtiān)很(hěn)热(rè)，冬天(dōngtiān)很(hěn)冷(lěng)。",
 exampleSrc:"A: What is the climate like in this place?\nB: Summers are very hot, winters are very cold.",
 funFact:"气候变化(qìhòu biànhuà) means 'climate change.' China is the world's largest emitter of CO2 but also the world's largest investor in renewable energy. It has pledged to reach carbon neutrality by 2060."},

{type:"teach", trg:"严重(yánzhòng)", src:"serious / severe", pos:"adj", gender:null,
 note:"Strict + heavy. Describes the severity of a problem.\nOften paired with problems: 严重的污染, 严重的问题.",
 example:"A: 空气(kōngqì)污染(wūrǎn)的(de)问题(wèntí)严重(yánzhòng)吗(ma)？\nB: 在(zài)一些(yīxiē)城市(chéngshì)非常(fēicháng)严重(yánzhòng)。",
 exampleSrc:"A: Is the air pollution problem serious?\nB: In some cities it is very serious.",
 funFact:"严重 combines 严 (strict/stern) and 重 (heavy/weighty). A 'strictly heavy' problem is a severe one. This word appears frequently in news reports and official statements about environmental, health, and economic issues."},

{type:"mc", q:"What is the difference between 天气(tiānqì) and 气候(qìhòu)?",
 opts:["天气 = daily weather, 气候 = long-term climate","天气 = hot weather, 气候 = cold weather","They mean the same thing","天气 = good weather, 气候 = bad weather"],
 ans:"天气 = daily weather, 气候 = long-term climate",
 hint:"One describes what is happening outside today. The other describes the overall weather patterns of a region over time."},

{type:"match", pairs:[
  {trg:"环境(huánjìng)", src:"environment"},
  {trg:"空气(kōngqì)", src:"air"},
  {trg:"污染(wūrǎn)", src:"pollution"},
  {trg:"气候(qìhòu)", src:"climate"},
  {trg:"严重(yánzhòng)", src:"serious / severe"}
]},

{type:"fb", s:"这个(zhège)城市(chéngshì)的(de){1}越来越(yuèláiyuè)差(chà)了(le)。",
 a:["空气(kōngqì)"],
 opts:["空气(kōngqì)","气候(qìhòu)","环境(huánjìng)","污染(wūrǎn)"],
 hint:"This word means 'air' and is often followed by 质量 (quality) when discussing how clean or dirty the air is.",
 sSrc:"The {1} in this city is getting worse and worse."},

{type:"mc", q:"污染(wūrǎn) contains the water radical because:",
 opts:["Pollution was historically linked to contaminated water","All environmental words have the water radical","It only refers to water pollution","The character was invented near a river"],
 ans:"Pollution was historically linked to contaminated water",
 hint:"The 氵radical in 污 connects the character to its original association with dirty or contaminated water."},

{type:"fb", s:"河(hé)里(lǐ)的(de){1}很(hěn)严重(yánzhòng)，鱼(yú)都(dōu)死(sǐ)了(le)。",
 a:["污染(wūrǎn)"],
 opts:["污染(wūrǎn)","环境(huánjìng)","气候(qìhòu)","空气(kōngqì)"],
 hint:"This word means contamination or pollution. The fish dying shows how bad the situation is.",
 sSrc:"The {1} in the river is very serious, the fish have all died."},

{type:"mc", q:"严重(yánzhòng) literally combines which two meanings?",
 opts:["strict + heavy","big + bad","very + serious","dark + difficult"],
 ans:"strict + heavy",
 hint:"The first character means strict or stern, and the second means heavy or weighty. Together they describe severity."}
]},

// ─── L3: Taking Action ───
{id:"zhv2_u20l3", title:"我们应该... We Should...", icon:"♻️", xp:15, board:true, steps:[
{type:"intro", title:"我们应该... We Should...",
 desc:"Learn to talk about protecting the environment, recycling, and saving resources. Master 应该 (should) to express obligation and responsibility.",
 goals:["Use 应该 to express what people should do","Talk about recycling and saving resources","Express environmental responsibility"]},

{type:"teach", trg:"应该(yīnggāi)", src:"should / ought to", pos:"aux", gender:null,
 note:"An auxiliary verb expressing obligation or expectation.\nPlaced before the main verb: 应该 + verb.",
 example:"A: 我们(wǒmen)应该(yīnggāi)怎么(zěnme)保护(bǎohù)环境(huánjìng)？\nB: 我们(wǒmen)应该(yīnggāi)少(shǎo)开车(kāichē)，多(duō)坐(zuò)公交(gōngjiāo)。",
 exampleSrc:"A: How should we protect the environment?\nB: We should drive less and take public transit more.",
 funFact:"应该 is softer than English 'must' but stronger than 'could.' It expresses what is proper or expected. Chinese culture values indirect suggestion, so 应该 is often preferred over the more forceful 必须(bìxū) meaning 'must' in everyday conversation."},

{type:"teach", trg:"保护(bǎohù)", src:"to protect", pos:"verb", gender:null,
 note:"Defend + guard. Used for the environment, people, and rights.\n保护环境 = protect the environment.",
 example:"A: 保护(bǎohù)森林(sēnlín)很(hěn)重要(zhòngyào)。\nB: 对(duì)，没有(méiyǒu)森林(sēnlín)，动物(dòngwù)就(jiù)没有(méiyǒu)家(jiā)了(le)。",
 exampleSrc:"A: Protecting forests is very important.\nB: Right, without forests, animals have no home.",
 funFact:"保护 appears in many important compound words: 保护区(bǎohùqū) = protected area/nature reserve, 保护动物(bǎohù dòngwù) = protected animal species. China has over 2,750 nature reserves covering about 15% of its land area."},

{type:"teach", trg:"节约(jiéyuē)", src:"to save / to economize", pos:"verb", gender:null,
 note:"Restrain + limit. To use less of something valuable.\n节约用水 = save water. 节约用电 = save electricity.",
 example:"A: 我们(wǒmen)应该(yīnggāi)节约(jiéyuē)用水(yòngshuǐ)。\nB: 对(duì)，水(shuǐ)资源(zīyuán)很(hěn)宝贵(bǎoguì)。",
 exampleSrc:"A: We should save water.\nB: Right, water resources are very precious.",
 funFact:"节约 is a deeply valued virtue in Chinese culture. The character 节 also means 'festival' (as in 春节 Spring Festival) and 'joint/section.' The connection: festivals mark the joints of the year, and being economical means knowing when to restrain yourself."},

{type:"teach", trg:"垃圾(lājī)", src:"garbage / trash", pos:"noun", gender:null,
 note:"A loanword-like compound. Both characters have the earth radical 土.\n垃圾分类(lājī fēnlèi) = trash sorting.",
 example:"A: 垃圾(lājī)应该(yīnggāi)扔(rēng)到(dào)垃圾桶(lājītǒng)里(lǐ)。\nB: 对(duì)，不要(búyào)乱(luàn)扔(rēng)垃圾(lājī)。",
 exampleSrc:"A: Trash should be thrown in the trash bin.\nB: Right, do not litter.",
 funFact:"Shanghai became the first Chinese city to mandate garbage sorting in 2019, with four categories: recyclable, food waste, hazardous, and residual. Residents face fines for incorrect sorting. The policy has since spread to other major cities."},

{type:"teach", trg:"回收(huíshōu)", src:"to recycle", pos:"verb", gender:null,
 note:"Return + collect. To collect things back for reuse.\n回收站 = recycling station (also means 'recycle bin' on a computer).",
 example:"A: 这些(zhèxiē)瓶子(píngzi)可以(kěyǐ)回收(huíshōu)吗(ma)？\nB: 可以(kěyǐ)，放到(fàngdào)回收(huíshōu)箱(xiāng)里(lǐ)吧(ba)。",
 exampleSrc:"A: Can these bottles be recycled?\nB: Yes, put them in the recycling bin.",
 funFact:"回收 literally means 'return-collect.' China is the world's largest recycler of certain materials, and a vast informal recycling economy exists. 回收站 on your computer desktop uses the same word: a place where deleted files are 'returned and collected.'"},

{type:"tip", title:"应该 in Environmental Sentences",
 text:"应该 (should) is placed before the verb to express obligation:\n\n我们(wǒmen)应该(yīnggāi)保护(bǎohù)环境(huánjìng)。\nWe should protect the environment.\n\n你(nǐ)应该(yīnggāi)节约(jiéyuē)用水(yòngshuǐ)。\nYou should save water.\n\nNegative: 不应该(bù yīnggāi) = should not.\n\n我们(wǒmen)不(bù)应该(yīnggāi)浪费(làngfèi)资源(zīyuán)。\nWe should not waste resources.\n\nThe pattern is always: Subject + 应该 + Verb + Object.",
 deepDive:{title:"Degrees of Obligation in Chinese",
  text:"Chinese has a scale of obligation:\n\n可以(kěyǐ) = can/may (permission)\n应该(yīnggāi) = should (expectation/duty)\n需要(xūyào) = need to (necessity)\n必须(bìxū) = must (absolute requirement)\n\nFor the environment:\n我们可以回收。 We can recycle.\n我们应该回收。 We should recycle.\n我们需要回收。 We need to recycle.\n我们必须回收。 We must recycle.\n\nEach level increases in urgency. 应该 is the most commonly used for everyday suggestions and social expectations."}},

{type:"mc", q:"应该(yīnggāi) expresses:",
 opts:["Obligation or what one should do","Permission to do something","Ability to do something","A past completed action"],
 ans:"Obligation or what one should do",
 hint:"This auxiliary verb tells what is proper, expected, or advisable, similar to English 'should' or 'ought to.'"},

{type:"match", pairs:[
  {trg:"应该(yīnggāi)", src:"should"},
  {trg:"保护(bǎohù)", src:"to protect"},
  {trg:"节约(jiéyuē)", src:"to save / economize"},
  {trg:"垃圾(lājī)", src:"garbage / trash"},
  {trg:"回收(huíshōu)", src:"to recycle"}
]},

{type:"fb", s:"我们(wǒmen){1}保护(bǎohù)地球(dìqiú)。",
 a:["应该(yīnggāi)"],
 opts:["应该(yīnggāi)","可以(kěyǐ)","喜欢(xǐhuan)","回收(huíshōu)"],
 hint:"This auxiliary verb means 'should' and expresses a moral obligation or strong suggestion.",
 sSrc:"We {1} protect the Earth."},

{type:"mc", q:"回收(huíshōu) literally means:",
 opts:["return + collect","again + use","throw + away","clean + sort"],
 ans:"return + collect",
 hint:"The first character means 'to return' and the second means 'to collect.' Together they describe gathering things back for reuse."},

{type:"fb", s:"这些(zhèxiē)塑料(sùliào)瓶(píng)可以(kěyǐ){1}。",
 a:["回收(huíshōu)"],
 opts:["回收(huíshōu)","保护(bǎohù)","节约(jiéyuē)","垃圾(lājī)"],
 hint:"Plastic bottles can be collected and processed for reuse. This verb describes that process.",
 sSrc:"These plastic bottles can be {1}."},

{type:"fb", s:"不要(búyào)乱(luàn)扔(rēng){1}。",
 a:["垃圾(lājī)"],
 opts:["垃圾(lājī)","回收(huíshōu)","环境(huánjìng)","保护(bǎohù)"],
 hint:"Do not throw this carelessly. This noun means waste or refuse.",
 sSrc:"Do not litter {1}."},

{type:"mc", q:"我们(wǒmen)不(bù)应该(yīnggāi)浪费(làngfèi)水(shuǐ)。 This means:",
 opts:["We should not waste water","We cannot drink water","We do not have water","We do not like water"],
 ans:"We should not waste water",
 hint:"不应该 means 'should not,' and 浪费 means 'to waste.' The sentence expresses what we ought to avoid doing."},

{type:"drag_fill",
 s:"我们(wǒmen){1}{2}环境(huánjìng)，{3}用水(yòngshuǐ)，{4}垃圾(lājī)。",
 blanks:{"1":"应该(yīnggāi)","2":"保护(bǎohù)","3":"节约(jiéyuē)","4":"回收(huíshōu)"},
 pool:["应该(yīnggāi)","保护(bǎohù)","节约(jiéyuē)","回收(huíshōu)"],
 hint:"We should protect the environment, save water, and recycle trash. Place the auxiliary verb first, then the three action verbs."}
]},

// ─── L4: Unit 20 Review ───
{id:"zhv2_u20l4", title:"环保复习 Environment Review", icon:"🔄", xp:15, board:true, steps:[
{type:"intro", title:"环保复习 Environment Review",
 desc:"Review all nature and environment vocabulary from this unit. Test your ability to discuss environmental topics and express what people should do.",
 goals:["Review all 15 environment vocabulary words","Express environmental obligation with 应该","Use nature and ecology words in context"]},

{type:"match", pairs:[
  {trg:"环境(huánjìng)", src:"environment"},
  {trg:"自然(zìrán)", src:"nature"},
  {trg:"森林(sēnlín)", src:"forest"},
  {trg:"地球(dìqiú)", src:"earth (planet)"},
  {trg:"气候(qìhòu)", src:"climate"}
]},

{type:"mc", q:"保护(bǎohù) is built from two characters meaning:",
 opts:["defend + guard","save + use","return + collect","keep + change"],
 ans:"defend + guard",
 hint:"Both characters relate to defense and shielding. Together they mean 'to protect.'"},

{type:"fb", s:"空气(kōngqì){1}是(shì)一个(yígè)很(hěn)严重(yánzhòng)的(de)问题(wèntí)。",
 a:["污染(wūrǎn)"],
 opts:["污染(wūrǎn)","保护(bǎohù)","节约(jiéyuē)","回收(huíshōu)"],
 hint:"This word means contamination or pollution, and it combines with 空气 to describe a major urban problem.",
 sSrc:"Air {1} is a very serious problem."},

{type:"mc", q:"Which sentence correctly uses 应该?",
 opts:["应该我们保护环境","我们应该保护环境","我们保护应该环境","我们保护环境应该"],
 ans:"我们应该保护环境",
 hint:"The auxiliary verb 应该 always comes AFTER the subject and BEFORE the main verb in Chinese word order."},

{type:"fb", s:"这个(zhège)城市(chéngshì)的(de){1}变化(biànhuà)很(hěn)大(dà)，冬天(dōngtiān)越来越(yuèláiyuè)暖(nuǎn)了(le)。",
 a:["气候(qìhòu)"],
 opts:["气候(qìhòu)","空气(kōngqì)","环境(huánjìng)","污染(wūrǎn)"],
 hint:"This word refers to long-term weather patterns, not daily weather or air quality.",
 sSrc:"The {1} change in this city is very big, winters are getting warmer and warmer."},

{type:"match", pairs:[
  {trg:"污染(wūrǎn)", src:"pollution"},
  {trg:"保护(bǎohù)", src:"to protect"},
  {trg:"节约(jiéyuē)", src:"to save"},
  {trg:"回收(huíshōu)", src:"to recycle"},
  {trg:"严重(yánzhòng)", src:"serious / severe"}
]},

{type:"mc", q:"动物(dòngwù) and 植物(zhíwù) both end in 物. What does 物 mean?",
 opts:["thing","life","nature","body"],
 ans:"thing",
 hint:"物 is a general classifier meaning 'thing' or 'matter.' It forms compounds with descriptive first characters."},

{type:"fb", s:"大家(dàjiā)应该(yīnggāi){1}用电(yòngdiàn)，不要(búyào)浪费(làngfèi)。",
 a:["节约(jiéyuē)"],
 opts:["节约(jiéyuē)","保护(bǎohù)","回收(huíshōu)","污染(wūrǎn)"],
 hint:"This verb means to use less of something, to economize. It applies to water, electricity, and other resources.",
 sSrc:"Everyone should {1} electricity, do not waste it."},

{type:"drag_fill",
 s:"{1}很(hěn){2}，我们(wǒmen)应该(yīnggāi){3}动物(dòngwù)和(hé)它们(tāmen)的(de){4}。",
 blanks:{"1":"污染(wūrǎn)","2":"严重(yánzhòng)","3":"保护(bǎohù)","4":"环境(huánjìng)"},
 pool:["污染(wūrǎn)","严重(yánzhòng)","保护(bǎohù)","环境(huánjìng)"],
 hint:"Pollution is very serious, so we should protect animals and their surroundings."},

{type:"mc", q:"垃圾分类(lājī fēnlèi) means:",
 opts:["garbage sorting","garbage collection","garbage burning","garbage reduction"],
 ans:"garbage sorting",
 hint:"分类 means to sort into categories. Combined with 垃圾 (trash), it describes the practice of separating waste types."}
]}

]};

export default UNIT_20;
