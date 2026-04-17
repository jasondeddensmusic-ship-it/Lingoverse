// Unit 19: Technology and Communication
// Level: B1.2 (HSK 3)
// Chinese (Mandarin) V2 format with hanzi+pinyin notation

const UNIT_19 = {
n:19, lang:"zh", srcLang:"en", track:"v2",
title:"手机和电脑 Phones and Computers", sub:"Digital Life",
icon:"📱", level:"B1.2", color:"#7B5EE8",
lessons:[

// ─── L1: Digital Basics ───
{id:"zhv2_u19l1", title:"数码生活 Digital Life", icon:"💻", xp:15, board:true, steps:[
{type:"intro", title:"数码生活 Digital Life",
 desc:"Learn the core vocabulary for phones, computers, and going online. These words are part of daily life in modern China, where mobile technology leads the world.",
 goals:["Name essential digital devices in Chinese","Talk about going online and using technology","Understand how Chinese creates tech vocabulary from existing characters"]},

{type:"tip", title:"How Chinese Builds Tech Words",
 text:"Chinese creates technology vocabulary by combining existing characters with concrete meanings:\n\n电(diàn) = electricity/electric\n电话(diànhuà) = electric + speech = telephone\n电脑(diànnǎo) = electric + brain = computer\n电视(diànshì) = electric + vision = television\n\n手(shǒu) = hand\n手机(shǒujī) = hand + machine = mobile phone\n\nUnlike English, which borrows Greek and Latin roots, Chinese builds new words from everyday characters. You can often guess a tech word's meaning from its parts.",
 deepDive:{title:"China's Digital Revolution",
  text:"China has over 1 billion smartphone users. Mobile payments through WeChat Pay and Alipay have largely replaced cash in cities. QR codes are everywhere: menus, transit, even street vendors.\n\nThis means tech vocabulary is not optional in modern Chinese. Words like 手机, 上网, and 下载 are as essential as basic greetings. Many Chinese people access the internet primarily through their phones rather than computers."}},

{type:"teach", trg:"手机(shǒujī)", src:"mobile phone", pos:"noun", gender:null,
 note:"Hand + machine. The most common word for phone in modern Chinese.\nAlmost always means smartphone today.",
 example:"A: 你(nǐ)的(de)手机(shǒujī)是(shì)什么(shénme)牌子(páizi)的(de)？\nB: 我(wǒ)的(de)手机(shǒujī)是(shì)华为(Huáwéi)的(de)。",
 exampleSrc:"A: What brand is your phone?\nB: My phone is a Huawei.",
 funFact:"手机 literally means 'hand machine.' Before smartphones, 大哥大(dàgēdà) meaning 'big brother' was slang for the bulky early mobile phones of the 1990s, because only wealthy 'big shots' could afford them."},

{type:"teach", trg:"电脑(diànnǎo)", src:"computer", pos:"noun", gender:null,
 note:"Electric + brain. Covers desktops, laptops, and tablets.\nLaptop specifically: 笔记本电脑(bǐjìběn diànnǎo), notebook computer.",
 example:"A: 你(nǐ)用(yòng)电脑(diànnǎo)做(zuò)什么(shénme)？\nB: 我(wǒ)用(yòng)电脑(diànnǎo)工作(gōngzuò)和(hé)学习(xuéxí)。",
 exampleSrc:"A: What do you use your computer for?\nB: I use my computer for work and studying.",
 funFact:"Taiwan uses 电脑 too, but also says 计算机(jìsuànjī) meaning 'calculating machine,' which is the more technical term in mainland China. Both refer to the same device, just different naming logic."},

{type:"teach", trg:"上网(shàngwǎng)", src:"to go online", pos:"verb", gender:null,
 note:"Up/on + net. A verb-object compound.\nCan also be split: 上了网 (went online).",
 example:"A: 你(nǐ)每天(měitiān)上网(shàngwǎng)多长(duōcháng)时间(shíjiān)？\nB: 大概(dàgài)三(sān)四(sì)个(gè)小时(xiǎoshí)。",
 exampleSrc:"A: How long do you go online every day?\nB: About three or four hours.",
 funFact:"上 means 'up' or 'onto.' Chinese uses this spatial metaphor for the internet: you go UP onto the net. Similarly, 上班 means 'go to work' (go up to your shift) and 上课 means 'go to class.'"},

{type:"teach", trg:"网站(wǎngzhàn)", src:"website", pos:"noun", gender:null,
 note:"Net + station. Like a 'station' on the web.\nRelated: 网页(wǎngyè) = web page, 网络(wǎngluò) = network.",
 example:"A: 你(nǐ)经常(jīngcháng)看(kàn)什么(shénme)网站(wǎngzhàn)？\nB: 我(wǒ)经常(jīngcháng)看(kàn)新闻(xīnwén)网站(wǎngzhàn)。",
 exampleSrc:"A: What websites do you often visit?\nB: I often visit news websites.",
 funFact:"China has its own ecosystem of major websites. Instead of Google there is Baidu, instead of Amazon there is Taobao, and instead of YouTube there is Bilibili. Most Western platforms are not accessible without a VPN."},

{type:"teach", trg:"下载(xiàzǎi)", src:"to download", pos:"verb", gender:null,
 note:"Down + load. The opposite is 上传(shàngchuán), to upload.\nA separable verb: 下载了 (downloaded).",
 example:"A: 你(nǐ)下载(xiàzǎi)了(le)那个(nàge)软件(ruǎnjiàn)吗(ma)？\nB: 下载(xiàzǎi)了(le)，很(hěn)好用(hǎoyòng)。",
 exampleSrc:"A: Did you download that software?\nB: Downloaded it, very useful.",
 funFact:"下 means 'down' and 载 means 'to carry/load.' Upload is the mirror image: 上传, where 上 means 'up' and 传 means 'to transmit.' Chinese builds these pairs from directional logic."},

{type:"mc", q:"手机(shǒujī) literally means:",
 opts:["electric brain","hand machine","small phone","pocket device"],
 ans:"hand machine",
 hint:"Break the compound into its two characters: 手 means hand, and 机 means machine."},

{type:"match", pairs:[
  {trg:"手机(shǒujī)", src:"mobile phone"},
  {trg:"电脑(diànnǎo)", src:"computer"},
  {trg:"上网(shàngwǎng)", src:"to go online"},
  {trg:"网站(wǎngzhàn)", src:"website"},
  {trg:"下载(xiàzǎi)", src:"to download"}
]},

{type:"mc", q:"电脑(diànnǎo) literally translates as:",
 opts:["electric brain","electric box","computing machine","smart device"],
 ans:"electric brain",
 hint:"电 means electricity, and the second character refers to a body part you think with."},

{type:"fb", s:"我(wǒ)每天(měitiān)都(dōu){1}看(kàn)新闻(xīnwén)。",
 a:["上网(shàngwǎng)"],
 opts:["上网(shàngwǎng)","下载(xiàzǎi)","手机(shǒujī)","网站(wǎngzhàn)"],
 hint:"This verb means 'to go online' and uses the directional character for 'up/onto.'",
 sSrc:"I {1} to read news every day."},

{type:"mc", q:"What is the opposite of 下载(xiàzǎi) (download)?",
 opts:["上传(shàngchuán)","上网(shàngwǎng)","收到(shōudào)","发(fā)"],
 ans:"上传(shàngchuán)",
 hint:"If downloading uses the character for 'down,' the opposite action uses the character for 'up' plus 'transmit.'"},

{type:"fb", s:"这个(zhège){1}很(hěn)有用(yǒuyòng)，你(nǐ)应该(yīnggāi)看看(kànkan)。",
 a:["网站(wǎngzhàn)"],
 opts:["网站(wǎngzhàn)","手机(shǒujī)","电脑(diànnǎo)","下载(xiàzǎi)"],
 hint:"This noun means a location on the internet, built from 'net' plus 'station.'",
 sSrc:"This {1} is very useful, you should take a look."}
]},

// ─── L2: Digital Communication ───
{id:"zhv2_u19l2", title:"发消息 Sending Messages", icon:"📨", xp:15, board:true, steps:[
{type:"intro", title:"发消息 Sending Messages",
 desc:"Learn to talk about sending and receiving messages, emails, and staying in contact. In China, WeChat has replaced email for most personal communication.",
 goals:["Use 发 and 收到 for sending and receiving","Distinguish between 短信, 邮件, and 消息","Talk about contacting people with 联系"]},

{type:"teach", trg:"发(fā)", src:"to send", pos:"verb", gender:null,
 note:"A versatile verb. 发短信 = send a text. 发邮件 = send an email.\n发 also means 'to emit' or 'to issue.'",
 example:"A: 你(nǐ)发(fā)邮件(yóujiàn)了(le)吗(ma)？\nB: 发(fā)了(le)，你(nǐ)查(chá)一下(yíxià)。",
 exampleSrc:"A: Did you send the email?\nB: Sent it, check it.",
 funFact:"发 appears in many expressions: 发现(fāxiàn) discover, 发展(fāzhǎn) develop, 发明(fāmíng) invent. The core meaning is 'to send out' or 'to emit,' which extends metaphorically to discovering and developing."},

{type:"teach", trg:"收到(shōudào)", src:"to receive", pos:"verb", gender:null,
 note:"Collect + arrive. A result complement verb.\n收 alone means to collect. 到 confirms arrival/completion.",
 example:"A: 你(nǐ)收到(shōudào)我(wǒ)的(de)消息(xiāoxi)了(le)吗(ma)？\nB: 收到(shōudào)了(le)！",
 exampleSrc:"A: Did you receive my message?\nB: Received it!",
 funFact:"In Chinese workplaces and group chats, replying with just 收到 (received) is extremely common. It is the Chinese equivalent of 'Roger that' or 'Got it.' One of the most frequently typed phrases on WeChat."},

{type:"teach", trg:"短信(duǎnxìn)", src:"text message / SMS", pos:"noun", gender:null,
 note:"Short + message. Traditional text messages via phone network.\nLess common now due to WeChat, but still used for verification codes.",
 example:"A: 我(wǒ)给(gěi)你(nǐ)发(fā)了(le)一(yī)条(tiáo)短信(duǎnxìn)。\nB: 我(wǒ)没(méi)收到(shōudào)，再(zài)发(fā)一次(yícì)吧(ba)。",
 exampleSrc:"A: I sent you a text message.\nB: I did not receive it, send it again.",
 funFact:"短信 has become less common for personal messages since WeChat took over. However, banks, hospitals, and government services still rely on 短信 for verification codes and official notices."},

{type:"teach", trg:"邮件(yóujiàn)", src:"email", pos:"noun", gender:null,
 note:"Mail + piece. Short for 电子邮件(diànzǐ yóujiàn), electronic mail.\nUsed mainly for work, not personal chat.",
 example:"A: 请(qǐng)把(bǎ)文件(wénjiàn)发(fā)到(dào)我(wǒ)的(de)邮件(yóujiàn)。\nB: 好(hǎo)的(de)，马上(mǎshàng)发(fā)。",
 exampleSrc:"A: Please send the file to my email.\nB: Okay, sending right away.",
 funFact:"Email is mostly a business tool in China. For personal communication, almost everyone uses WeChat. Many young Chinese people rarely check email outside of work. This is the opposite of many Western countries."},

{type:"teach", trg:"消息(xiāoxi)", src:"message / news", pos:"noun", gender:null,
 note:"Disappear + news. Can mean a chat message or general news.\n发消息 = send a message (on an app).",
 example:"A: 你(nǐ)看(kàn)到(dào)那个(nàge)消息(xiāoxi)了(le)吗(ma)？\nB: 什么(shénme)消息(xiāoxi)？我(wǒ)还(hái)没(méi)看(kàn)。",
 exampleSrc:"A: Did you see that message?\nB: What message? I have not looked yet.",
 funFact:"消息 can mean both a personal message and a piece of news. If someone says 有个好消息(yǒu ge hǎo xiāoxi), it means 'there is good news.' Context determines whether it refers to a chat message or news in general."},

{type:"teach", trg:"联系(liánxì)", src:"to contact", pos:"verb", gender:null,
 note:"Connect + relate. Also used as a noun: 联系方式 = contact information.\nKeep in touch: 保持联系(bǎochí liánxì).",
 example:"A: 你(nǐ)怎么(zěnme)联系(liánxì)他(tā)？\nB: 我(wǒ)可以(kěyǐ)给(gěi)他(tā)发(fā)消息(xiāoxi)。",
 exampleSrc:"A: How do you contact him?\nB: I can send him a message.",
 funFact:"When Chinese people exchange contact info, they almost always mean WeChat. Instead of asking for a phone number, people say 加个微信吧(jiā ge Wēixìn ba), meaning 'let us add each other on WeChat.' It functions like a phone number, email, and social media combined."},

{type:"mc", q:"收到(shōudào) is commonly used in Chinese group chats to mean:",
 opts:["Goodbye","Received / Got it","Send again","Thank you"],
 ans:"Received / Got it",
 hint:"This two-character reply confirms you have gotten the message. Think of it as the Chinese 'roger that.'"},

{type:"match", pairs:[
  {trg:"发(fā)", src:"to send"},
  {trg:"收到(shōudào)", src:"to receive"},
  {trg:"短信(duǎnxìn)", src:"text message"},
  {trg:"邮件(yóujiàn)", src:"email"},
  {trg:"消息(xiāoxi)", src:"message / news"},
  {trg:"联系(liánxì)", src:"to contact"}
]},

{type:"fb", s:"我(wǒ)给(gěi)你(nǐ){1}了(le)一封(yīfēng)邮件(yóujiàn)，请(qǐng)查收(cháshōu)。",
 a:["发(fā)"],
 opts:["发(fā)","收到(shōudào)","联系(liánxì)","下载(xiàzǎi)"],
 hint:"This verb means to send something. It pairs with different nouns for different kinds of messages.",
 sSrc:"I {1} you an email, please check it."},

{type:"mc", q:"Which word specifically means SMS text message?",
 opts:["消息(xiāoxi)","短信(duǎnxìn)","邮件(yóujiàn)","联系(liánxì)"],
 ans:"短信(duǎnxìn)",
 hint:"This compound literally means 'short message' and refers to phone network texts, not app messages."},

{type:"fb", s:"你(nǐ){1}我(wǒ)的(de)消息(xiāoxi)了(le)吗(ma)？",
 a:["收到(shōudào)"],
 opts:["收到(shōudào)","发(fā)","联系(liánxì)","上网(shàngwǎng)"],
 hint:"This verb means 'to receive' and includes a result complement showing completion.",
 sSrc:"Did you {1} my message?"},

{type:"mc", q:"你(nǐ)怎么(zěnme)联系(liánxì)他(tā)？ What does this sentence ask?",
 opts:["When will you contact him?","How do you contact him?","Why did you contact him?","Did you contact him?"],
 ans:"How do you contact him?",
 hint:"The question word 怎么 asks about the method or manner of doing something."},

{type:"fb", s:"有(yǒu)什么(shénme)事(shì)请(qǐng)随时(suíshí){1}我(wǒ)。",
 a:["联系(liánxì)"],
 opts:["联系(liánxì)","发(fā)","收到(shōudào)","消息(xiāoxi)"],
 hint:"This verb means 'to contact' or 'to get in touch with' someone.",
 sSrc:"If there is anything, please {1} me anytime."},

{type:"drag_fill",
 s:"我(wǒ)给(gěi)他(tā){1}了(le)一条(yītiáo){2}，但是(dànshì)他(tā)没(méi){3}。",
 blanks:{"1":"发(fā)","2":"短信(duǎnxìn)","3":"收到(shōudào)"},
 pool:["发(fā)","短信(duǎnxìn)","收到(shōudào)","联系(liánxì)"],
 hint:"Someone sent a text but the other person did not get it. Place the send verb, the message type, and the receive verb."}
]},

// ─── L3: Describing Technology ───
{id:"zhv2_u19l3", title:"方便不方便 Convenient or Not?", icon:"⚙️", xp:15, board:true, steps:[
{type:"intro", title:"方便不方便 Convenient or Not?",
 desc:"Learn to describe technology as convenient, simple, or complex. Master the A-not-A question pattern and express opinions about digital tools.",
 goals:["Describe things as convenient, simple, or complex","Use the A-not-A question pattern","Talk about passwords and digital security"]},

{type:"teach", trg:"方便(fāngbiàn)", src:"convenient", pos:"adj", gender:null,
 note:"Direction + convenient. Very common in daily Chinese.\nAlso a verb: 方便 can mean 'to suit/accommodate.'",
 example:"A: 用(yòng)手机(shǒujī)上网(shàngwǎng)方便(fāngbiàn)不(bu)方便(fāngbiàn)？\nB: 很(hěn)方便(fāngbiàn)，随时(suíshí)都(dōu)可以(kěyǐ)用(yòng)。",
 exampleSrc:"A: Is it convenient to go online with a phone?\nB: Very convenient, you can use it anytime.",
 funFact:"方便面(fāngbiànmiàn) means 'convenience noodles,' better known as instant noodles. The word 方便 appears everywhere in Chinese marketing because convenience is highly valued in modern Chinese consumer culture."},

{type:"teach", trg:"简单(jiǎndān)", src:"simple / easy", pos:"adj", gender:null,
 note:"Simple + single. Describes something uncomplicated.\nOpposite: 复杂(fùzá), complex.",
 example:"A: 这个(zhège)软件(ruǎnjiàn)好用(hǎoyòng)吗(ma)？\nB: 很(hěn)简单(jiǎndān)，谁(shéi)都(dōu)会(huì)用(yòng)。",
 exampleSrc:"A: Is this software easy to use?\nB: Very simple, anyone can use it.",
 funFact:"简单 contrasts with 容易(róngyì) which also means 'easy.' The difference: 简单 describes something that IS uncomplicated by nature, while 容易 describes something that is easy TO DO. A task can be 简单 (simple) but not 容易 (easy) if it requires skill."},

{type:"teach", trg:"复杂(fùzá)", src:"complex / complicated", pos:"adj", gender:null,
 note:"Repeat + mixed. Describes something with many intertwined parts.\nOften used for systems, relationships, and situations.",
 example:"A: 你(nǐ)觉得(juéde)学(xué)编程(biānchéng)难(nán)吗(ma)？\nB: 有点(yǒudiǎn)复杂(fùzá)，但是(dànshì)很(hěn)有趣(yǒuqù)。",
 exampleSrc:"A: Do you think learning programming is hard?\nB: A bit complex, but very interesting.",
 funFact:"复杂 is built from 复 (to repeat/duplicate) and 杂 (mixed/various). The idea is that complexity comes from many repeated, overlapping elements tangled together. Chinese philosophy values 简单 (simplicity) and sees 复杂 as something to untangle."},

{type:"teach", trg:"密码(mìmǎ)", src:"password", pos:"noun", gender:null,
 note:"Secret + code. Used for all types of passwords and PINs.\nWiFi password: WiFi密码. Phone unlock code: 手机密码.",
 example:"A: 你(nǐ)知道(zhīdào)WiFi密码(mìmǎ)吗(ma)？\nB: 密码(mìmǎ)是(shì)12345678。",
 exampleSrc:"A: Do you know the WiFi password?\nB: The password is 12345678.",
 funFact:"密码 literally means 'secret code.' In ancient China, military messages used complex cipher systems called 密码. Today the same word covers everything from phone PINs to bank passwords. Chinese internet security often uses 6-digit PINs rather than complex passwords."},

{type:"tip", title:"A-not-A Questions: 方便不方便?",
 text:"Chinese has a unique way to ask yes/no questions by repeating the verb or adjective with 不 in between:\n\n方便(fāngbiàn)不方便(fāngbiàn)？ Convenient or not?\n简单(jiǎndān)不简单(jiǎndān)？ Simple or not?\n好(hǎo)不好(hǎo)？ Good or not?\n\nThis is called the A-not-A pattern. It gives the listener both options:\nStatement: 这个很方便。 This is very convenient.\nQuestion: 这个方便不方便？ Is this convenient (or not)?\n\nYou can answer simply:\n方便。 (Yes, convenient.)\n不方便。 (No, not convenient.)",
 deepDive:{title:"A-not-A vs. 吗 Questions",
  text:"Chinese has two main ways to form yes/no questions:\n\n1. Add 吗(ma) at the end (neutral):\n这个方便吗？ Is this convenient?\n\n2. A-not-A pattern (offering a choice):\n这个方便不方便？ Is this convenient or not?\n\nBoth are correct, but A-not-A feels slightly more direct. It is especially common when genuinely asking for an opinion rather than expecting a 'yes.' In everyday speech, both are interchangeable. Use whichever feels natural."}},

{type:"mc", q:"方便(fāngbiàn)不(bu)方便(fāngbiàn)？ This question pattern is called:",
 opts:["The 吗 question","The A-not-A question","The 什么 question","The topic-comment pattern"],
 ans:"The A-not-A question",
 hint:"This pattern repeats the same word with a negation in between, offering both options to the listener."},

{type:"match", pairs:[
  {trg:"方便(fāngbiàn)", src:"convenient"},
  {trg:"简单(jiǎndān)", src:"simple"},
  {trg:"复杂(fùzá)", src:"complex"},
  {trg:"密码(mìmǎ)", src:"password"}
]},

{type:"fb", s:"这个(zhège)网站(wǎngzhàn)太(tài){1}了(le)，我(wǒ)找(zhǎo)不到(búdào)我(wǒ)要(yào)的(de)东西(dōngxi)。",
 a:["复杂(fùzá)"],
 opts:["复杂(fùzá)","简单(jiǎndān)","方便(fāngbiàn)","密码(mìmǎ)"],
 hint:"The speaker cannot find what they need. This adjective describes something with too many complicated parts.",
 sSrc:"This website is too {1}, I cannot find what I need."},

{type:"mc", q:"简单(jiǎndān) and 容易(róngyì) both relate to 'easy.' What is the difference?",
 opts:["简单 means a thing IS uncomplicated, 容易 means a thing is easy TO DO","They are exactly the same","简单 is formal, 容易 is casual","简单 is for objects, 容易 is for people"],
 ans:"简单 means a thing IS uncomplicated, 容易 means a thing is easy TO DO",
 hint:"One describes the inherent nature of something, while the other describes the experience of doing something."},

{type:"fb", s:"你(nǐ)知道(zhīdào)WiFi{1}吗(ma)？",
 a:["密码(mìmǎ)"],
 opts:["密码(mìmǎ)","手机(shǒujī)","消息(xiāoxi)","网站(wǎngzhàn)"],
 hint:"This word means 'secret code' and is used for login credentials and PINs.",
 sSrc:"Do you know the WiFi {1}?"},

{type:"mc", q:"Which is the correct A-not-A form of 这个简单吗?",
 opts:["这个简单不简单？","这个不简单吗？","这个简单吗不？","不这个简单？"],
 ans:"这个简单不简单？",
 hint:"The A-not-A pattern places the adjective, then 不, then the same adjective again, right after the topic."},

{type:"fb", s:"用(yòng)手机(shǒujī)买(mǎi)东西(dōngxi)很(hěn){1}，不用(búyòng)去(qù)商店(shāngdiàn)。",
 a:["方便(fāngbiàn)"],
 opts:["方便(fāngbiàn)","复杂(fùzá)","简单(jiǎndān)","密码(mìmǎ)"],
 hint:"Shopping by phone saves you a trip to the store. This adjective describes that time-saving quality.",
 sSrc:"Using a phone to buy things is very {1}, no need to go to the store."},

{type:"drag_fill",
 s:"这个(zhège)软件(ruǎnjiàn)很(hěn){1}，不(bù){2}，下载(xiàzǎi)也(yě)很(hěn){3}。",
 blanks:{"1":"简单(jiǎndān)","2":"复杂(fùzá)","3":"方便(fāngbiàn)"},
 pool:["简单(jiǎndān)","复杂(fùzá)","方便(fāngbiàn)","密码(mìmǎ)"],
 hint:"The software is easy to use (simple), not hard to understand (not complex), and easy to get (convenient to download)."}
]},

// ─── L4: Unit 19 Review ───
{id:"zhv2_u19l4", title:"数码世界复习 Digital World Review", icon:"🔄", xp:15, board:true, steps:[
{type:"intro", title:"数码世界复习 Digital World Review",
 desc:"Review all technology and communication vocabulary from this unit. Test your ability to use these words in real-world digital scenarios.",
 goals:["Review all 15 tech vocabulary words","Use tech words in context","Demonstrate mastery of A-not-A questions"]},

{type:"match", pairs:[
  {trg:"手机(shǒujī)", src:"mobile phone"},
  {trg:"电脑(diànnǎo)", src:"computer"},
  {trg:"下载(xiàzǎi)", src:"to download"},
  {trg:"密码(mìmǎ)", src:"password"},
  {trg:"联系(liánxì)", src:"to contact"}
]},

{type:"mc", q:"我(wǒ)给(gěi)你(nǐ)发(fā)了(le)一封(yīfēng)邮件(yóujiàn)。 What did I do?",
 opts:["Sent you an email","Received your email","Downloaded an email","Deleted an email"],
 ans:"Sent you an email",
 hint:"The verb 发 means to send, and 邮件 means ___. The 了 indicates the action is completed."},

{type:"fb", s:"你(nǐ)可以(kěyǐ)在(zài)这个(zhège){1}上(shàng)找到(zhǎodào)很多(hěnduō)信息(xìnxī)。",
 a:["网站(wǎngzhàn)"],
 opts:["网站(wǎngzhàn)","密码(mìmǎ)","短信(duǎnxìn)","手机(shǒujī)"],
 hint:"This is a place on the internet where you can find information. Built from 'net' plus 'station.'",
 sSrc:"You can find a lot of information on this {1}."},

{type:"mc", q:"短信(duǎnxìn) literally means:",
 opts:["short message","phone message","quick letter","small news"],
 ans:"short message",
 hint:"Break down the compound: 短 means short in length, and 信 means letter or message."},

{type:"fb", s:"这个(zhège)软件(ruǎnjiàn){1}不(bu)方便(fāngbiàn)？",
 a:["方便(fāngbiàn)"],
 opts:["方便(fāngbiàn)","简单(jiǎndān)","复杂(fùzá)","密码(mìmǎ)"],
 hint:"This is the first half of an A-not-A question. The same word appears before and after 不.",
 sSrc:"Is this software {1} or not?"},

{type:"match", pairs:[
  {trg:"发(fā)", src:"to send"},
  {trg:"收到(shōudào)", src:"to receive"},
  {trg:"简单(jiǎndān)", src:"simple"},
  {trg:"复杂(fùzá)", src:"complex"},
  {trg:"方便(fāngbiàn)", src:"convenient"}
]},

{type:"mc", q:"你(nǐ)怎么(zěnme)联系(liánxì)他(tā)？ The best answer is:",
 opts:["我(wǒ)收到(shōudào)了(le)","我(wǒ)可以(kěyǐ)给(gěi)他(tā)发(fā)消息(xiāoxi)","他(tā)很(hěn)方便(fāngbiàn)","密码(mìmǎ)是(shì)12345"],
 ans:"我(wǒ)可以(kěyǐ)给(gěi)他(tā)发(fā)消息(xiāoxi)",
 hint:"The question asks HOW you contact someone. The answer should describe a method of communication."},

{type:"fb", s:"我(wǒ)想(xiǎng){1}一个(yígè)新(xīn)的(de)软件(ruǎnjiàn)。",
 a:["下载(xiàzǎi)"],
 opts:["下载(xiàzǎi)","上网(shàngwǎng)","发(fā)","联系(liánxì)"],
 hint:"This verb means to get a file or app from the internet onto your device. It uses the character for 'down.'",
 sSrc:"I want to {1} a new piece of software."},

{type:"drag_fill",
 s:"用(yòng){1}上网(shàngwǎng)很(hěn){2}，可以(kěyǐ)随时(suíshí){3}朋友(péngyou)。",
 blanks:{"1":"手机(shǒujī)","2":"方便(fāngbiàn)","3":"联系(liánxì)"},
 pool:["手机(shǒujī)","方便(fāngbiàn)","联系(liánxì)","密码(mìmǎ)"],
 hint:"Going online with your phone is handy because you can stay in touch with friends anytime."},

{type:"mc", q:"消息(xiāoxi) can mean both:",
 opts:["A chat message AND general news","A password AND a code","An email AND a letter","A download AND an upload"],
 ans:"A chat message AND general news",
 hint:"This word has a dual meaning depending on context. It covers both personal messages and broader information."},

{type:"fb", s:"请(qǐng)输入(shūrù)你(nǐ)的(de){1}。",
 a:["密码(mìmǎ)"],
 opts:["密码(mìmǎ)","消息(xiāoxi)","邮件(yóujiàn)","短信(duǎnxìn)"],
 hint:"When logging in, you need to type in your secret code to access your account.",
 sSrc:"Please enter your {1}."}
]}

]};

export default UNIT_19;
