// Unit 35: Contemporary China
// Level: B2.2 (HSK 4)
// Chinese (Mandarin) V2 format with hanzi+pinyin notation

const UNIT_35 = {
n:35, lang:"zh", srcLang:"en", track:"v2",
title:"当代中国 Contemporary China", sub:"Modern Society",
icon:"🏙️", level:"B2.2", color:"#7B5EE8",
lessons:[

// ─── L1: Economic Transformation ───
{id:"zhv2_u35l1", title:"Economic Transformation", icon:"📈", xp:15, board:true, steps:[
{type:"intro", title:"Economic Transformation",
 desc:"Explore the vocabulary of modern China's economic miracle. From Reform and Opening Up to the rise of e-commerce, understand the forces that transformed a nation in just four decades.",
 goals:["Discuss economic development in Chinese","Understand key historical and social terms","Describe urbanization and modernization"]},

{type:"teach", trg:"改革开放(gǎigé kāifàng)", src:"Reform and Opening Up", pos:"noun", gender:null,
 note:"改革 (reform) + 开放 (open up).\nThe policy that transformed China starting in 1978.",
 example:"A: 改革开放(gǎigé kāifàng)是(shì)什么(shénme)时候(shíhou)开始(kāishǐ)的(de)？\nB: 一九七八(yījiǔqībā)年(nián)。",
 exampleSrc:"A: When did Reform and Opening Up begin?\nB: In 1978.",
 funFact:"This four-character phrase is one of the most important terms in modern Chinese history. In 1978, China's GDP per capita was under $200. By 2024, it exceeded $12,000. The entire transformation traces back to this policy."},

{type:"teach", trg:"发展(fāzhǎn)", src:"development / to develop", pos:"noun", gender:null,
 note:"发 (send out/emit) + 展 (unfold/expand).\nCan be used as both a noun and a verb.",
 example:"A: 中国(Zhōngguó)的(de)经济(jīngjì)发展(fāzhǎn)很(hěn)快(kuài)。\nB: 对(duì)，过去(guòqù)四十(sìshí)年(nián)变化(biànhuà)很(hěn)大(dà)。",
 exampleSrc:"A: China's economic development has been very fast.\nB: Yes, the changes over the past forty years have been enormous.",
 funFact:"发展 appears in countless official slogans and policy documents. It captures the idea of something unfolding and expanding outward, like a flower opening. Both a noun ('development') and a verb ('to develop')."},

{type:"teach", trg:"城市化(chéngshìhuà)", src:"urbanization", pos:"noun", gender:null,
 note:"城市 (city) + 化 (-ization suffix).\nThe process of becoming urban.",
 example:"A: 中国(Zhōngguó)的(de)城市化(chéngshìhuà)速度(sùdù)很(hěn)快(kuài)。\nB: 很(hěn)多(duō)人(rén)从(cóng)农村(nóngcūn)搬(bān)到(dào)城市(chéngshì)了(le)。",
 exampleSrc:"A: China's urbanization has been very fast.\nB: Many people have moved from the countryside to cities.",
 funFact:"The suffix 化 turns nouns into '-ization' processes. 城市化 (urbanization), 全球化 (globalization), 现代化 (modernization). In 1980, about 20% of Chinese lived in cities. Today it is over 65%."},

{type:"teach", trg:"移民(yímín)", src:"migration / immigrant / to migrate", pos:"noun", gender:null,
 note:"移 (move/shift) + 民 (people).\nMovement of people, either internal or international.",
 example:"A: 很(hěn)多(duō)农村(nóngcūn)人(rén)移民(yímín)到(dào)大(dà)城市(chéngshì)了(le)。\nB: 是(shì)的(de)，这(zhè)是(shì)城市化(chéngshìhuà)的(de)结果(jiéguǒ)。",
 exampleSrc:"A: Many rural people have migrated to big cities.\nB: Yes, this is a result of urbanization.",
 funFact:"China has the largest internal migration in human history. Over 300 million people have moved from rural areas to cities since the 1980s. These internal migrants are called 农民工 (nóngmíngōng, rural migrant workers)."},

{type:"teach", trg:"独生子女(dúshēng zǐnǚ)", src:"only child", pos:"noun", gender:null,
 note:"独 (sole/only) + 生 (born) + 子女 (children).\nA generation shaped by the one-child policy.",
 example:"A: 你(nǐ)是(shì)独生子女(dúshēng zǐnǚ)吗(ma)？\nB: 是(shì)的(de)，我(wǒ)没有(méiyǒu)兄弟姐妹(xiōngdì jiěmèi)。",
 exampleSrc:"A: Are you an only child?\nB: Yes, I have no siblings.",
 funFact:"China's one-child policy (1980-2015) created an entire generation of only children, sometimes called 'little emperors.' The policy has now been relaxed, but its social effects, including a rapidly aging population, continue to shape society."},

{type:"mc", q:"改革开放(gǎigé kāifàng) began in which year?",
 opts:["1949","1966","1978","1989"],
 ans:"1978",
 hint:"This economic reform policy started in the late 1970s, transforming China from a planned economy toward a market economy."},

{type:"match", pairs:[
  {trg:"改革开放(gǎigé kāifàng)", src:"Reform and Opening Up"},
  {trg:"发展(fāzhǎn)", src:"development"},
  {trg:"城市化(chéngshìhuà)", src:"urbanization"},
  {trg:"移民(yímín)", src:"migration"},
  {trg:"独生子女(dúshēng zǐnǚ)", src:"only child"}
]},

{type:"fb", s:"中国(Zhōngguó)的(de)经济(jīngjì){1}很(hěn)快(kuài)。",
 a:["发展(fāzhǎn)"],
 opts:["发展(fāzhǎn)","改革开放(gǎigé kāifàng)","城市化(chéngshìhuà)","移民(yímín)"],
 hint:"The word for growth and progress. It means something unfolding and expanding outward.",
 sSrc:"China's economic {1} has been very fast."},

{type:"teach", trg:"老龄化(lǎolínghuà)", src:"aging (of population)", pos:"noun", gender:null,
 note:"老 (old) + 龄 (age) + 化 (-ization).\nThe process of a population growing older.",
 example:"A: 老龄化(lǎolínghuà)是(shì)一(yí)个(gè)严重(yánzhòng)的(de)问题(wèntí)。\nB: 对(duì)，年轻(niánqīng)人(rén)越来越(yuèláiyuè)少(shǎo)了(le)。",
 exampleSrc:"A: Population aging is a serious problem.\nB: Yes, there are fewer and fewer young people.",
 funFact:"By 2050, over 30% of China's population will be over 60 years old. The combination of the one-child policy and increased life expectancy has created one of the fastest-aging societies in history."},

{type:"mc", q:"The suffix 化(huà) in 城市化(chéngshìhuà) means:",
 opts:["city","change into / -ization","big","new"],
 ans:"change into / -ization",
 hint:"This suffix transforms a noun into a process word. Like English '-ization' turning 'urban' into 'urbanization.'"},

{type:"fb", s:"很(hěn)多(duō)农村(nóngcūn)人(rén){1}到(dào)大(dà)城市(chéngshì)。",
 a:["移民(yímín)"],
 opts:["移民(yímín)","发展(fāzhǎn)","城市化(chéngshìhuà)","老龄化(lǎolínghuà)"],
 hint:"The word for people moving from one place to another. 移 (move) + 民 (people).",
 sSrc:"Many rural people {1} to big cities."},

{type:"mc", q:"独生子女(dúshēng zǐnǚ) literally translates as:",
 opts:["big family child","first born child","sole born children","young generation"],
 ans:"sole born children",
 hint:"独 means ___ or only. 生 means ___. 子女 means ___ (sons and daughters)."},

{type:"fb", s:"{1}是(shì)一(yí)个(gè)严重(yánzhòng)的(de)社会(shèhuì)问题(wèntí)。",
 a:["老龄化(lǎolínghuà)"],
 opts:["老龄化(lǎolínghuà)","城市化(chéngshìhuà)","发展(fāzhǎn)","移民(yímín)"],
 hint:"The process of a population growing older. 老 (old) + 龄 (age) + 化 (-ization).",
 sSrc:"{1} is a serious social problem."},

{type:"match", pairs:[
  {trg:"老龄化(lǎolínghuà)", src:"population aging"},
  {trg:"发展(fāzhǎn)", src:"development"},
  {trg:"移民(yímín)", src:"migration"},
  {trg:"独生子女(dúshēng zǐnǚ)", src:"only child"},
  {trg:"城市化(chéngshìhuà)", src:"urbanization"}
]}
]},

// ─── L2: Technology and Innovation ───
{id:"zhv2_u35l2", title:"Technology and Innovation", icon:"📱", xp:15, board:true, steps:[
{type:"intro", title:"Technology and Innovation",
 desc:"Discover the vocabulary of China's technological revolution. From high-speed rail to mobile payments, learn how technology has reshaped daily life in modern China.",
 goals:["Discuss technology and innovation in Chinese","Describe modern economic concepts","Compare traditional and modern ways of life"]},

{type:"teach", trg:"高铁(gāotiě)", src:"high-speed rail", pos:"noun", gender:null,
 note:"高 (high) + 铁 (iron/rail).\nShort for 高速铁路 (high-speed railway).",
 example:"A: 你(nǐ)坐(zuò)过(guò)高铁(gāotiě)吗(ma)？\nB: 坐(zuò)过(guò)，从(cóng)北京(Běijīng)到(dào)上海(Shànghǎi)只(zhǐ)要(yào)四(sì)个(gè)半(bàn)小时(xiǎoshí)。",
 exampleSrc:"A: Have you ridden the high-speed rail?\nB: Yes, from Beijing to Shanghai it only takes four and a half hours.",
 funFact:"China has the world's largest high-speed rail network, over 42,000 kilometers. Beijing to Shanghai (1,318 km) takes about 4.5 hours by high-speed train versus 12 hours by regular train. The abbreviation 高铁 is used by everyone in daily life."},

{type:"teach", trg:"电子商务(diànzǐ shāngwù)", src:"e-commerce", pos:"noun", gender:null,
 note:"电子 (electronic) + 商务 (commerce/business).\nOften shortened to 电商(diànshāng).",
 example:"A: 中国(Zhōngguó)的(de)电子商务(diànzǐ shāngwù)非常(fēicháng)发达(fādá)。\nB: 对(duì)，很(hěn)多(duō)人(rén)在(zài)网上(wǎngshàng)买(mǎi)东西(dōngxi)。",
 exampleSrc:"A: China's e-commerce is very developed.\nB: Yes, many people shop online.",
 funFact:"China is the world's largest e-commerce market. Online shopping festivals like Singles' Day (11/11) generate more sales in one day than Black Friday and Cyber Monday combined."},

{type:"teach", trg:"移动支付(yídòng zhīfù)", src:"mobile payment", pos:"noun", gender:null,
 note:"移动 (mobile/moving) + 支付 (payment).\nPaying with your phone instead of cash or cards.",
 example:"A: 在(zài)中国(Zhōngguó)可以(kěyǐ)用(yòng)移动支付(yídòng zhīfù)吗(ma)？\nB: 当然(dāngrán)，几乎(jīhū)到处(dàochù)都(dōu)可以(kěyǐ)。",
 exampleSrc:"A: Can you use mobile payment in China?\nB: Of course, almost everywhere.",
 funFact:"China essentially skipped the credit card era and went straight from cash to mobile payments. Street vendors, taxi drivers, and even beggars accept phone payments. Cash is becoming increasingly rare in Chinese cities."},

{type:"teach", trg:"共享经济(gòngxiǎng jīngjì)", src:"sharing economy", pos:"noun", gender:null,
 note:"共享 (shared/sharing) + 经济 (economy).\nThe economic model of sharing resources.",
 example:"A: 共享(gòngxiǎng)单车(dānchē)是(shì)共享经济(gòngxiǎng jīngjì)的(de)例子(lìzi)。\nB: 对(duì)，共享(gòngxiǎng)充电宝(chōngdiànbǎo)也(yě)是(shì)。",
 exampleSrc:"A: Shared bikes are an example of the sharing economy.\nB: Yes, shared power banks are too.",
 funFact:"China took the sharing economy further than most countries. Beyond bikes and rides, there are shared power banks, shared umbrellas, shared massage chairs, and even shared basketballs in Chinese cities."},

{type:"teach", trg:"创业(chuàngyè)", src:"entrepreneurship / to start a business", pos:"noun", gender:null,
 note:"创 (create/initiate) + 业 (profession/business).\nCreating a new enterprise from scratch.",
 example:"A: 很(hěn)多(duō)年轻(niánqīng)人(rén)想(xiǎng)创业(chuàngyè)。\nB: 创业(chuàngyè)不(bù)容易(róngyì)，但是(dànshì)很(hěn)有(yǒu)意思(yìsi)。",
 exampleSrc:"A: Many young people want to start a business.\nB: Entrepreneurship is not easy, but it is very interesting.",
 funFact:"China has one of the most dynamic startup cultures in the world. Shenzhen, once a small fishing village, is now called the 'Silicon Valley of Hardware' and produces a significant portion of the world's electronics."},

{type:"mc", q:"高铁(gāotiě) is short for:",
 opts:["高速铁路(gāosù tiělù) (high-speed railway)","高大铁路(gāodà tiělù) (tall railway)","高级铁路(gāojí tiělù) (advanced railway)","高等铁路(gāoděng tiělù) (higher railway)"],
 ans:"高速铁路(gāosù tiělù) (high-speed railway)",
 hint:"高 means ___, and 铁 comes from the full word for ___. The missing part describes ___."},

{type:"match", pairs:[
  {trg:"高铁(gāotiě)", src:"high-speed rail"},
  {trg:"电子商务(diànzǐ shāngwù)", src:"e-commerce"},
  {trg:"移动支付(yídòng zhīfù)", src:"mobile payment"},
  {trg:"共享经济(gòngxiǎng jīngjì)", src:"sharing economy"},
  {trg:"创业(chuàngyè)", src:"entrepreneurship"}
]},

{type:"fb", s:"在(zài)中国(Zhōngguó)，几乎(jīhū)到处(dàochù)都(dōu)可以(kěyǐ)用(yòng){1}。",
 a:["移动支付(yídòng zhīfù)"],
 opts:["移动支付(yídòng zhīfù)","电子商务(diànzǐ shāngwù)","共享经济(gòngxiǎng jīngjì)","高铁(gāotiě)"],
 hint:"Paying with your phone instead of cash. 移动 means mobile, 支付 means payment.",
 sSrc:"In China, you can use {1} almost everywhere."},

{type:"teach", trg:"竞争力(jìngzhēnglì)", src:"competitiveness", pos:"noun", gender:null,
 note:"竞争 (compete/competition) + 力 (power/force).\nThe power to compete successfully.",
 example:"A: 中国(Zhōngguó)企业(qǐyè)的(de)竞争力(jìngzhēnglì)越来越(yuèláiyuè)强(qiáng)。\nB: 特别(tèbié)是(shì)在(zài)技术(jìshù)方面(fāngmiàn)。",
 exampleSrc:"A: Chinese companies are becoming more and more competitive.\nB: Especially in the technology sector.",
 funFact:"The suffix 力 (power) creates abstract nouns from verbs and adjectives: 竞争力 (competitiveness), 创造力 (creativity), 影响力 (influence). It names the force or capacity to do something."},

{type:"teach", trg:"可持续(kěchíxù)", src:"sustainable", pos:"adj", gender:null,
 note:"可 (can/able) + 持续 (continue/sustain).\nAble to continue over time.",
 example:"A: 可持续(kěchíxù)发展(fāzhǎn)很(hěn)重要(zhòngyào)。\nB: 对(duì)，我们(wǒmen)要(yào)保护(bǎohù)环境(huánjìng)。",
 exampleSrc:"A: Sustainable development is very important.\nB: Yes, we need to protect the environment.",
 funFact:"可持续发展 (sustainable development) is one of China's official policy priorities. The compound follows a logical pattern: 可 (able to) + 持续 (continue) = able to be maintained over time."},

{type:"teach", trg:"全球化(quánqiúhuà)", src:"globalization", pos:"noun", gender:null,
 note:"全球 (whole globe) + 化 (-ization).\nThe process of becoming globally connected.",
 example:"A: 全球化(quánqiúhuà)给(gěi)中国(Zhōngguó)带来(dàilái)了(le)很(hěn)多(duō)机会(jīhuì)。\nB: 也(yě)带来(dàilái)了(le)一些(yìxiē)挑战(tiǎozhàn)。",
 exampleSrc:"A: Globalization has brought many opportunities to China.\nB: It has also brought some challenges.",
 funFact:"全球 means 'whole globe' (全 = complete, 球 = ball/sphere). Add 化 and you get the process of the whole world becoming connected. China is now the world's largest trading nation by volume."},

{type:"teach", trg:"挑战(tiǎozhàn)", src:"challenge / to challenge", pos:"noun", gender:null,
 note:"挑 (pick/provoke) + 战 (battle/war).\nLiterally 'picking a fight.' A test to overcome.",
 example:"A: 现代(xiàndài)社会(shèhuì)面临(miànlín)很(hěn)多(duō)挑战(tiǎozhàn)。\nB: 比如(bǐrú)老龄化(lǎolínghuà)和(hé)环境(huánjìng)问题(wèntí)。",
 exampleSrc:"A: Modern society faces many challenges.\nB: For example, population aging and environmental problems.",
 funFact:"The character 战 (battle) appears in many important compounds: 战争 (war), 挑战 (challenge), 战略 (strategy). A 挑战 is literally someone throwing down the gauntlet, provoking a battle."},

{type:"fb", s:"全球化(quánqiúhuà)给(gěi)中国(Zhōngguó)带来(dàilái)了(le)机会(jīhuì)，也(yě)带来(dàilái)了(le){1}。",
 a:["挑战(tiǎozhàn)"],
 opts:["挑战(tiǎozhàn)","创业(chuàngyè)","高铁(gāotiě)","移民(yímín)"],
 hint:"The word for a difficulty or test to overcome. 挑 (provoke) + 战 (battle).",
 sSrc:"Globalization has brought opportunities to China, but also {1}."},

{type:"mc", q:"Which word uses the 力(lì) suffix meaning 'power' or 'force'?",
 opts:["全球化(quánqiúhuà)","可持续(kěchíxù)","竞争力(jìngzhēnglì)","挑战(tiǎozhàn)"],
 ans:"竞争力(jìngzhēnglì)",
 hint:"This suffix names the capacity or force to do something. Which word ends with 力?"},

{type:"fb", s:"{1}发展(fāzhǎn)很(hěn)重要(zhòngyào)，我们(wǒmen)要(yào)保护(bǎohù)环境(huánjìng)。",
 a:["可持续(kěchíxù)"],
 opts:["可持续(kěchíxù)","全球化(quánqiúhuà)","竞争力(jìngzhēnglì)","挑战(tiǎozhàn)"],
 hint:"An adjective meaning 'able to continue over time.' 可 (able) + 持续 (sustain).",
 sSrc:"{1} development is very important; we need to protect the environment."},

{type:"match", pairs:[
  {trg:"竞争力(jìngzhēnglì)", src:"competitiveness"},
  {trg:"可持续(kěchíxù)", src:"sustainable"},
  {trg:"全球化(quánqiúhuà)", src:"globalization"},
  {trg:"挑战(tiǎozhàn)", src:"challenge"},
  {trg:"创业(chuàngyè)", src:"entrepreneurship"}
]},

{type:"mc", q:"Which statement best describes China's payment technology?",
 opts:["China relies mainly on credit cards","China skipped credit cards and went from cash to mobile payments","China only accepts cash in most places","China uses the same payment systems as Europe"],
 ans:"China skipped credit cards and went from cash to mobile payments",
 hint:"Think about what made ___ payment adoption so rapid. The country did not go through a widespread ___ card phase first."}
]},

// ─── L3: Society and Change ───
{id:"zhv2_u35l3", title:"Society and Change", icon:"🔄", xp:15, board:true, steps:[
{type:"intro", title:"Society and Change",
 desc:"Put all the vocabulary together to discuss the complex realities of contemporary Chinese society. Explore the tensions between tradition and modernity, growth and sustainability.",
 goals:["Discuss social changes using advanced vocabulary","Analyze connections between economic and social trends","Express nuanced opinions about development"]},

{type:"tip", title:"越来越 (yuèláiyuè): More and More",
 text:"越来越(yuèláiyuè) expresses a trend of change:\n\n越来越(yuèláiyuè) + adjective = more and more [adjective]\n\n城市(chéngshì)越来越(yuèláiyuè)大(dà)。\nCities are getting bigger and bigger.\n\n人口(rénkǒu)越来越(yuèláiyuè)老(lǎo)。\nThe population is getting older and older.\n\n生活(shēnghuó)越来越(yuèláiyuè)方便(fāngbiàn)。\nLife is getting more and more convenient.\n\nThis pattern is essential for discussing social change and trends.",
 deepDive:{title:"Expressing Change Over Time",
  text:"Chinese has several patterns for expressing change:\n\n越来越(yuèláiyuè) + adj = more and more\n变得(biànde) + adj = to become\n从(cóng)...到(dào)... = from...to...\n\n中国(Zhōngguó)从(cóng)农业(nóngyè)社会(shèhuì)变成(biànchéng)了(le)工业(gōngyè)社会(shèhuì)。\nChina changed from an agricultural society to an industrial society.\n\nThese patterns help you describe transformations, which is essential vocabulary for discussing modern China."}},

{type:"fb", s:"中国(Zhōngguó)的(de)城市(chéngshì)越来越(yuèláiyuè){1}。",
 a:["大(dà)"],
 opts:["大(dà)","小(xiǎo)","旧(jiù)","少(shǎo)"],
 hint:"Chinese cities have been expanding rapidly for decades. Which adjective means big or large?",
 sSrc:"China's cities are getting bigger and bigger."},

{type:"mc", q:"越来越(yuèláiyuè) is used to express:",
 opts:["A sudden change","A gradual increasing trend","A comparison between two things","Something that happened in the past"],
 ans:"A gradual increasing trend",
 hint:"This pattern describes something that is progressively becoming more of something over time."},

{type:"drag_fill", s:"改革开放(gǎigé kāifàng)以后(yǐhòu)，中国(Zhōngguó)的(de){1}很(hěn)快(kuài)，{2}也(yě)越来越(yuèláiyuè)高(gāo)。",
 blanks:{"1":"发展(fāzhǎn)","2":"竞争力(jìngzhēnglì)"},
 pool:["发展(fāzhǎn)","竞争力(jìngzhēnglì)","老龄化(lǎolínghuà)","独生子女(dúshēng zǐnǚ)","沙漠(shāmò)","农村(nóngcūn)"],
 hint:"After the economic reforms, China experienced rapid growth and increasing ability to compete globally."},

{type:"mc", q:"Which two social issues are directly connected to the one-child policy?",
 opts:["城市化(chéngshìhuà) and 移民(yímín)","老龄化(lǎolínghuà) and 独生子女(dúshēng zǐnǚ)","全球化(quánqiúhuà) and 挑战(tiǎozhàn)","高铁(gāotiě) and 电子商务(diànzǐ shāngwù)"],
 ans:"老龄化(lǎolínghuà) and 独生子女(dúshēng zǐnǚ)",
 hint:"The one-child policy created a generation of only children and contributed to the rapid aging of the population."},

{type:"fb", s:"很(hěn)多(duō)年轻(niánqīng)人(rén)想(xiǎng){1}，自己(zìjǐ)当(dāng)老板(lǎobǎn)。",
 a:["创业(chuàngyè)"],
 opts:["创业(chuàngyè)","移民(yímín)","发展(fāzhǎn)","挑战(tiǎozhàn)"],
 hint:"To start your own business, to become an entrepreneur. 创 (create) + 业 (business).",
 sSrc:"Many young people want to {1}, to be their own boss."},

{type:"mc", q:"电子商务(diànzǐ shāngwù) can be shortened to:",
 opts:["电商(diànshāng)","电子(diànzǐ)","商务(shāngwù)","电务(diànwù)"],
 ans:"电商(diànshāng)",
 hint:"Chinese frequently abbreviates four-character compounds by taking one character from each pair."},

{type:"match", pairs:[
  {trg:"改革开放(gǎigé kāifàng)", src:"Reform and Opening Up"},
  {trg:"城市化(chéngshìhuà)", src:"urbanization"},
  {trg:"高铁(gāotiě)", src:"high-speed rail"},
  {trg:"移动支付(yídòng zhīfù)", src:"mobile payment"},
  {trg:"可持续(kěchíxù)", src:"sustainable"}
]},

{type:"fb", s:"{1}让(ràng)世界(shìjiè)变得(biànde)越来越(yuèláiyuè)小(xiǎo)。",
 a:["全球化(quánqiúhuà)"],
 opts:["全球化(quánqiúhuà)","城市化(chéngshìhuà)","老龄化(lǎolínghuà)","创业(chuàngyè)"],
 hint:"The process of the world becoming more connected. 全球 (whole globe) + 化 (-ization).",
 sSrc:"{1} is making the world smaller and smaller."},

{type:"drag_fill", s:"现代(xiàndài)中国(Zhōngguó)面临(miànlín)两(liǎng)个(gè)大(dà){1}：{2}和(hé)环境(huánjìng)问题(wèntí)。",
 blanks:{"1":"挑战(tiǎozhàn)","2":"老龄化(lǎolínghuà)"},
 pool:["挑战(tiǎozhàn)","老龄化(lǎolínghuà)","高铁(gāotiě)","创业(chuàngyè)","移民(yímín)","电商(diànshāng)"],
 hint:"Modern China faces two major difficulties. One is the aging population, the other is environmental."},

{type:"mc", q:"Which compound follows the pattern: noun + 化(huà) = process of becoming?",
 opts:["挑战(tiǎozhàn)","竞争力(jìngzhēnglì)","全球化(quánqiúhuà)","创业(chuàngyè)"],
 ans:"全球化(quánqiúhuà)",
 hint:"Look for the word that ends with 化, the suffix meaning '-ization' or 'process of becoming.'"},

{type:"match", pairs:[
  {trg:"发展(fāzhǎn)", src:"development"},
  {trg:"挑战(tiǎozhàn)", src:"challenge"},
  {trg:"竞争力(jìngzhēnglì)", src:"competitiveness"},
  {trg:"全球化(quánqiúhuà)", src:"globalization"},
  {trg:"共享经济(gòngxiǎng jīngjì)", src:"sharing economy"}
]},

{type:"fb", s:"共享(gòngxiǎng)单车(dānchē)是(shì){1}的(de)一(yí)个(gè)例子(lìzi)。",
 a:["共享经济(gòngxiǎng jīngjì)"],
 opts:["共享经济(gòngxiǎng jīngjì)","电子商务(diànzǐ shāngwù)","移动支付(yídòng zhīfù)","全球化(quánqiúhuà)"],
 hint:"The economic model based on sharing resources rather than individual ownership.",
 sSrc:"Shared bikes are an example of the {1}."}
]}

]};

export default UNIT_35;
