// Unit 42: The AI Era
// Level: B2.1 (HSK 4)
// Chinese (Mandarin) V2 format with hanzi+pinyin notation

const UNIT_42 = {
n:42, lang:"zh", srcLang:"en", track:"v2",
title:"智能时代 The AI Era", sub:"Modern Technology",
icon:"🤖", level:"B2.1", color:"#7B5EE8",
lessons:[

// ─── L1: Intelligence and Automation ───
{id:"zhv2_u42l1", title:"Intelligence and Automation", icon:"🧠", xp:15, board:true, steps:[
{type:"intro", title:"Intelligence and Automation",
 desc:"Modern Chinese has developed rich vocabulary for the AI age. Learn the words for smart systems, robots, and automatic technology.",
 goals:["Discuss AI and automation","Use tech-industry vocabulary","Describe digital concepts"]},

{type:"teach", trg:"智能(zhìnéng)", src:"intelligence (artificial) / smart (device)", pos:"noun", gender:null,
 note:"智 (wisdom) + 能 (ability).\nWisdom-ability. Often attributive: 智能手机 = smartphone.",
 example:"A: 人工(réngōng)智能(zhìnéng)发展(fāzhǎn)得(de)很(hěn)快(kuài)。\nB: 是(shì)的(de)，已经(yǐjīng)改变(gǎibiàn)了(le)很多(hěnduō)行业(hángyè)。",
 exampleSrc:"A: Artificial intelligence is developing very quickly.\nB: Yes, it has already changed many industries.",
 funFact:"智能 is the Chinese equivalent of 'smart.' It prefixes many modern products: 智能手机 (smartphone), 智能家居 (smart home), 智能手表 (smartwatch). The word has exploded in use in the past decade alongside the tech industry."},

{type:"teach", trg:"机器人(jīqìrén)", src:"robot", pos:"noun", gender:null,
 note:"机器 (machine) + 人 (person).\nLiterally a machine-person.",
 example:"A: 未来(wèilái)会(huì)有(yǒu)很多(hěnduō)机器人(jīqìrén)工作(gōngzuò)。\nB: 那(nà)我们(wǒmen)人类(rénlèi)做(zuò)什么(shénme)呢(ne)？",
 exampleSrc:"A: In the future many robots will be working.\nB: Then what will we humans do?",
 funFact:"The Chinese word 机器人 is a direct calque of 'robot.' The original English word comes from Czech 'robota' (forced labor). Chinese stepped away from that connotation, choosing the more neutral 'machine-person.'"},

{type:"teach", trg:"自动(zìdòng)", src:"automatic / automatically", pos:"adj", gender:null,
 note:"自 (self) + 动 (move).\nSelf-moving. Either attributive or adverbial.",
 example:"A: 这(zhè)个(gè)门(mén)是(shì)自动(zìdòng)的(de)吗(ma)？\nB: 是(shì)，人(rén)一(yí)走近(zǒujìn)就(jiù)自动(zìdòng)打开(dǎkāi)。",
 exampleSrc:"A: Is this door automatic?\nB: Yes, it opens automatically when a person approaches.",
 funFact:"自动 shows up everywhere in Chinese tech: 自动驾驶 (self-driving), 自动化 (automation), 自动取款机 (ATM). The 自 (self) prefix effectively creates the 'auto-' prefix in Chinese."},

{type:"teach", trg:"数字(shùzì)", src:"digital / number", pos:"noun", gender:null,
 note:"数 (count/number) + 字 (character/digit).\nBoth 'number' and 'digital' as prefix.",
 example:"A: 我们(wǒmen)已经(yǐjīng)进入(jìnrù)了(le)数字(shùzì)时代(shídài)。\nB: 没错(méicuò)，几乎(jīhū)所有(suǒyǒu)东西(dōngxi)都(dōu)数字化(shùzìhuà)了(le)。",
 exampleSrc:"A: We have already entered the digital era.\nB: That is right. Almost everything has been digitized.",
 funFact:"数字 doubles as 'numeric digit' and 'digital.' 数字化 = digitize. 数字经济 = digital economy. The word stretched naturally from counting to computing, since digital technology is grounded in numbers."},

{type:"teach", trg:"算法(suànfǎ)", src:"algorithm", pos:"noun", gender:null,
 note:"算 (calculate) + 法 (method).\nCalculation method. The core concept behind AI.",
 example:"A: 这(zhè)个(gè)软件(ruǎnjiàn)的(de)算法(suànfǎ)很(hěn)先进(xiānjìn)。\nB: 这(zhè)就(jiù)是(shì)它(tā)为(wèi)什么(shénme)这么(zhème)准确(zhǔnquè)。",
 exampleSrc:"A: This software's algorithm is very advanced.\nB: That is why it is so accurate.",
 funFact:"算法 is an ancient word, not a modern coinage. Classical Chinese math texts used it centuries before computers existed. The word has simply found a vast new home in the digital age."},

{type:"teach", trg:"虚拟(xūnǐ)", src:"virtual", pos:"adj", gender:null,
 note:"虚 (empty/hollow) + 拟 (imitate).\nEmpty imitation. Virtual reality, virtual world.",
 example:"A: 虚拟(xūnǐ)现实(xiànshí)技术(jìshù)会(huì)改变(gǎibiàn)教育(jiàoyù)吗(ma)？\nB: 我(wǒ)相信(xiāngxìn)会(huì)，特别(tèbié)是(shì)对(duì)培训(péixùn)很(hěn)有(yǒu)帮助(bāngzhù)。",
 exampleSrc:"A: Will virtual reality technology change education?\nB: I believe so, especially for training.",
 funFact:"虚 also appears in philosophical contexts in Chinese: 虚心 (humble, 'empty heart'). The idea of emptiness is not negative but open and ready. Fittingly, 虚拟 describes spaces that feel real while being empty of physical substance."},

{type:"mc", q:"机器人(jīqìrén) literally means:",
 opts:["machine person","smart tool","digital helper","computer brain"],
 ans:"machine person",
 hint:"机器 means …. 人 means …. Combine them literally."},

{type:"mc", q:"The character 自 in 自动 means:",
 opts:["new","self","fast","ready"],
 ans:"self",
 hint:"Automatic in Chinese is '…-moving.' The first character carries the reflexive meaning."},

{type:"fb", s:"这(zhè)家(jiā)公司(gōngsī)开发(kāifā)了(le)一个(yígè)新(xīn)的(de){1}，处理(chǔlǐ)速度(sùdù)非常(fēicháng)快(kuài)。",
 a:["算法(suànfǎ)"],
 opts:["算法(suànfǎ)","虚拟(xūnǐ)","数字(shùzì)","机器人(jīqìrén)"],
 hint:"The word for a calculation method that powers modern AI. 算 (calculate) + 法 (method).",
 sSrc:"This company developed a new {1}. Its processing speed is very fast."},

{type:"match", pairs:[
  {trg:"智能(zhìnéng)", src:"intelligence / smart"},
  {trg:"机器人(jīqìrén)", src:"robot"},
  {trg:"自动(zìdòng)", src:"automatic"},
  {trg:"数字(shùzì)", src:"digital / number"},
  {trg:"算法(suànfǎ)", src:"algorithm"},
  {trg:"虚拟(xūnǐ)", src:"virtual"}
]}

]},

// ─── L2: Software and Hardware ───
{id:"zhv2_u42l2", title:"Software and Hardware", icon:"💻", xp:15, board:true, steps:[
{type:"intro", title:"Software and Hardware",
 desc:"The vocabulary of the tech industry: software, hardware, programs, engineers. These words power daily conversations in any modern Chinese workplace.",
 goals:["Distinguish software from hardware","Discuss programs and development","Name tech roles"]},

{type:"teach", trg:"软件(ruǎnjiàn)", src:"software", pos:"noun", gender:null,
 note:"软 (soft) + 件 (piece/item).\nSoft pieces. Direct calque of English 'software.'",
 example:"A: 我(wǒ)需要(xūyào)下载(xiàzài)一(yí)个(gè)新(xīn)的(de)软件(ruǎnjiàn)。\nB: 什么(shénme)软件(ruǎnjiàn)？",
 exampleSrc:"A: I need to download a new software.\nB: What software?",
 funFact:"软件 and 硬件 are a beautifully symmetrical pair: soft pieces vs hard pieces. Chinese kept the logic of English 'software/hardware' while creating native compounds instead of borrowing the words phonetically."},

{type:"teach", trg:"硬件(yìngjiàn)", src:"hardware", pos:"noun", gender:null,
 note:"硬 (hard) + 件 (piece/item).\nHard pieces. Partner word to 软件.",
 example:"A: 这(zhè)台(tái)电脑(diànnǎo)的(de)硬件(yìngjiàn)配置(pèizhì)怎么样(zěnmeyàng)？\nB: 很(hěn)好(hǎo)，运行(yùnxíng)什么(shénme)都(dōu)很(hěn)流畅(liúchàng)。",
 exampleSrc:"A: What are the hardware specs of this computer?\nB: Very good. Everything runs smoothly.",
 funFact:"硬件 extends beyond computers: in business, it refers to physical infrastructure (硬件设施), while 软件 can mean organizational culture or systems. The metaphor of hard vs soft structures has become part of broader Chinese business thinking."},

{type:"teach", trg:"程序(chéngxù)", src:"program / procedure", pos:"noun", gender:null,
 note:"程 (procedure) + 序 (order/sequence).\nOrdered procedure. Both software and workflow.",
 example:"A: 这(zhè)个(gè)程序(chéngxù)有(yǒu)点(diǎn)慢(màn)。\nB: 可能(kěnéng)需要(xūyào)更新(gēngxīn)一下(yíxià)。",
 exampleSrc:"A: This program is a bit slow.\nB: Maybe it needs to be updated.",
 funFact:"程序 has two senses. In tech, it means a computer program. In formal contexts, it means 'procedure' (法律程序 = legal procedure). Programming a computer and following a legal process share the same Chinese word because both are ordered sequences of steps."},

{type:"teach", trg:"开发(kāifā)", src:"to develop / development", pos:"verb", gender:null,
 note:"开 (open) + 发 (emit/develop).\nOpen up and bring forth. Used for software, land, markets.",
 example:"A: 我(wǒ)们(men)正在(zhèngzài)开发(kāifā)一(yí)款(kuǎn)新(xīn)的(de)应用(yìngyòng)。\nB: 什么(shénme)时候(shíhou)发布(fābù)？",
 exampleSrc:"A: We are developing a new app.\nB: When will it be released?",
 funFact:"开发 carries a sense of 'unlocking potential.' The word is used for software (开发软件), real estate (房地产开发), and personal growth (开发潜能, develop potential). The mindset is always about pulling latent capacity into use."},

{type:"teach", trg:"工程师(gōngchéngshī)", src:"engineer", pos:"noun", gender:null,
 note:"工 (work) + 程 (process) + 师 (teacher/master).\nA master of work processes.",
 example:"A: 他(tā)是(shì)软件(ruǎnjiàn)工程师(gōngchéngshī)吗(ma)？\nB: 是(shì)的(de)，他(tā)在(zài)一(yì)家(jiā)科技(kējì)公司(gōngsī)工作(gōngzuò)。",
 exampleSrc:"A: Is he a software engineer?\nB: Yes, he works at a tech company.",
 funFact:"In China, 工程师 was historically one of the most respected job titles, a 高级工程师 (senior engineer) was a high-status certification. The term still carries weight, even as job titles evolve."},

{type:"teach", trg:"用户(yònghù)", src:"user", pos:"noun", gender:null,
 note:"用 (use) + 户 (household/account).\nUsing-account. Standard word for platform users.",
 example:"A: 这(zhè)个(gè)应用(yìngyòng)有(yǒu)多少(duōshao)用户(yònghù)？\nB: 听说(tīngshuō)超过(chāoguò)一亿(yíyì)。",
 exampleSrc:"A: How many users does this app have?\nB: I hear it has over 100 million.",
 funFact:"户 originally meant 'household' (a single door in a village census). In modern tech, 户 is the unit of user accounts: 单户 (single user), 用户 (general user), 账户 (account). The ancient idea of counted households survives digitally."},

{type:"mc", q:"软件 and 硬件 both contain the character 件. What does 件 mean?",
 opts:["thing/piece","machine","system","device"],
 ans:"thing/piece",
 hint:"The contrast is 'soft pieces vs hard pieces.' 件 is the measure word for items."},

{type:"mc", q:"工程师(gōngchéngshī) literally means a master of:",
 opts:["computers","work processes","technology","mathematics"],
 ans:"work processes",
 hint:"The characters are 工 (___) + 程 (process) + 师 (master)."},

{type:"fb", s:"我们(wǒmen)公司(gōngsī)正在(zhèngzài){1}一(yí)款(kuǎn)新(xīn)软件(ruǎnjiàn)。",
 a:["开发(kāifā)"],
 opts:["开发(kāifā)","使用(shǐyòng)","学习(xuéxí)","检查(jiǎnchá)"],
 hint:"The verb for creating new products or technology. 开 (open) + 发 (bring forth).",
 sSrc:"Our company is currently {1} a new software."},

{type:"match", pairs:[
  {trg:"软件(ruǎnjiàn)", src:"software"},
  {trg:"硬件(yìngjiàn)", src:"hardware"},
  {trg:"程序(chéngxù)", src:"program"},
  {trg:"开发(kāifā)", src:"to develop"},
  {trg:"工程师(gōngchéngshī)", src:"engineer"},
  {trg:"用户(yònghù)", src:"user"}
]}

]},

// ─── L3: Connected World ───
{id:"zhv2_u42l3", title:"Connected World", icon:"🌐", xp:15, board:true, steps:[
{type:"intro", title:"Connected World",
 desc:"Online platforms, remote work, and digital users shape modern life. Learn the vocabulary for the connected world we now live in.",
 goals:["Describe online platforms","Discuss remote work","Use network-related vocabulary"]},

{type:"teach", trg:"远程(yuǎnchéng)", src:"remote / long-distance", pos:"adj", gender:null,
 note:"远 (far) + 程 (distance/journey).\nFar distance. Used for remote work, remote control.",
 example:"A: 我(wǒ)在(zài)家(jiā)里(lǐ)远程(yuǎnchéng)工作(gōngzuò)。\nB: 效率(xiàolǜ)怎么样(zěnmeyàng)？",
 exampleSrc:"A: I work remotely from home.\nB: How is your productivity?",
 funFact:"远程工作 (remote work) exploded in Chinese tech vocabulary during the 2020 pandemic. Before that, 远程 mostly described telescopes (远程镜) or long-distance learning (远程教育). The social shift brought a whole new usage."},

{type:"teach", trg:"在线(zàixiàn)", src:"online", pos:"adj", gender:null,
 note:"在 (at/on) + 线 (line).\nOn the line. Opposite: 离线 (offline).",
 example:"A: 老师(lǎoshī)在线(zàixiàn)吗(ma)？\nB: 应该(yīnggāi)在(zài)，她(tā)的(de)头像(tóuxiàng)是(shì)绿色(lǜsè)的(de)。",
 exampleSrc:"A: Is the teacher online?\nB: She should be. Her avatar is green.",
 funFact:"线 originally meant 'thread' or 'string.' Telegraph wires and later phone lines kept the metaphor of a literal connecting thread. Modern 在线 (on the line) preserves this beautifully, even when the connection is wireless."},

{type:"teach", trg:"平台(píngtái)", src:"platform", pos:"noun", gender:null,
 note:"平 (flat) + 台 (stage/platform).\nFlat stage. From physical platforms to digital ones.",
 example:"A: 这(zhè)个(gè)购物(gòuwù)平台(píngtái)很(hěn)好用(hǎoyòng)。\nB: 对(duì)，我(wǒ)最(zuì)喜欢(xǐhuan)在(zài)这(zhè)里(lǐ)买(mǎi)东西(dōngxi)。",
 exampleSrc:"A: This shopping platform is very easy to use.\nB: Yes, I love buying things here the most.",
 funFact:"The Chinese concept of 平台 has stretched from physical stages to economic concepts. 平台经济 (platform economy) describes how apps like WeChat, Taobao, and Didi connect users and services on shared digital ground."},

{type:"teach", trg:"应用(yìngyòng)", src:"application / app", pos:"noun", gender:null,
 note:"应 (respond) + 用 (use).\nResponse-use. Also a verb: to apply.",
 example:"A: 这(zhè)个(gè)应用(yìngyòng)可以(kěyǐ)翻译(fānyì)多(duō)少(shǎo)种(zhǒng)语言(yǔyán)？\nB: 超过(chāoguò)一百(yìbǎi)种(zhǒng)。",
 exampleSrc:"A: How many languages can this app translate?\nB: Over one hundred.",
 funFact:"应用 serves double duty. As a noun, it means 'app' or 'application' (download an app). As a verb, it means 'to apply or use' (应用知识 = apply knowledge). Both senses fit under one word."},

{type:"teach", trg:"网络(wǎngluò)", src:"network / internet", pos:"noun", gender:null,
 note:"网 (net) + 络 (web).\nNet-web. Both physical networks and the Internet.",
 example:"A: 这(zhè)里(lǐ)的(de)网络(wǎngluò)很(hěn)快(kuài)。\nB: 太(tài)好(hǎo)了(le)，我(wǒ)可以(kěyǐ)开(kāi)视频(shìpín)会议(huìyì)。",
 exampleSrc:"A: The network here is very fast.\nB: Great, I can hold video meetings.",
 funFact:"网 (net) is one of the oldest characters still in active use. Originally a pictograph of a fishing net, it now covers everything net-shaped: 蜘蛛网 (spider web), 互联网 (interconnected net = internet), 网络 (network)."},

{type:"teach", trg:"下载(xiàzài)", src:"to download", pos:"verb", gender:null,
 note:"下 (down) + 载 (load/carry).\nDown-load. Direct calque of English.",
 example:"A: 你(nǐ)下载(xiàzài)那(nà)个(gè)软件(ruǎnjiàn)了(le)吗(ma)？\nB: 下载(xiàzài)了(le)，但是(dànshì)还(hái)没(méi)安装(ānzhuāng)。",
 exampleSrc:"A: Have you downloaded that software?\nB: I downloaded it, but I have not installed it yet.",
 funFact:"下载 and 上传 (upload, up-load) are perfect calques of English tech terms. Chinese adopted the directional metaphor wholesale: down from the cloud to your device, up from your device to the cloud."},

{type:"mc", q:"在线(zàixiàn) literally means:",
 opts:["on the line","at the station","on the air","over the hill"],
 ans:"on the line",
 hint:"在 means 'on' or 'at.' 线 means '….' This echoes the telegraph-era metaphor."},

{type:"mc", q:"To download is 下载. To upload is:",
 opts:["上载(shàngzài)","上传(shàngchuán)","大载(dàzài)","远载(yuǎnzài)"],
 ans:"上传(shàngchuán)",
 hint:"The opposite direction of 下载. Think 'up' (上) plus a word meaning 'transmit' or 'deliver.'"},

{type:"fb", s:"这(zhè)个(gè)购物(gòuwù){1}有(yǒu)超过(chāoguò)一(yí)亿(yì)的(de)用户(yònghù)。",
 a:["平台(píngtái)"],
 opts:["平台(píngtái)","软件(ruǎnjiàn)","网络(wǎngluò)","应用(yìngyòng)"],
 hint:"The word for a digital marketplace or shared space. 平 (flat) + 台 (stage).",
 sSrc:"This shopping {1} has over 100 million users."},

{type:"match", pairs:[
  {trg:"远程(yuǎnchéng)", src:"remote"},
  {trg:"在线(zàixiàn)", src:"online"},
  {trg:"平台(píngtái)", src:"platform"},
  {trg:"应用(yìngyòng)", src:"application / app"},
  {trg:"网络(wǎngluò)", src:"network / internet"},
  {trg:"下载(xiàzài)", src:"to download"}
]},

{type:"story", speaker:"narrator", mood:"modern", art:"zh-tech-workplace",
 trg:"张(Zhāng)工程师(gōngchéngshī)在(zài)家(jiā)里(lǐ)远程(yuǎnchéng)工作(gōngzuò)。他(tā)打开(dǎkāi)电脑(diànnǎo)，登录(dēnglù)公司(gōngsī)的(de)在线(zàixiàn)平台(píngtái)，然后(ránhòu)开始(kāishǐ)开发(kāifā)新(xīn)软件(ruǎnjiàn)。这(zhè)个(gè)应用(yìngyòng)使用(shǐyòng)人工(réngōng)智能(zhìnéng)算法(suànfǎ)，能(néng)自动(zìdòng)帮助(bāngzhù)用户(yònghù)工作(gōngzuò)。",
 src:"Engineer Zhang works remotely from home. He opens his computer, logs into the company's online platform, and begins developing new software. This app uses artificial intelligence algorithms and can automatically help users work."}

]}

]};

export default UNIT_42;
