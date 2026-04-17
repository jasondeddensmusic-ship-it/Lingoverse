// Unit 40: How to Do It
// Level: B1.2 (HSK 3)
// Chinese (Mandarin) V2 format with hanzi+pinyin notation

const UNIT_40 = {
n:40, lang:"zh", srcLang:"en", track:"v2",
title:"怎么做 How to Do It", sub:"Instructions and Processes",
icon:"📍", level:"B1.2", color:"#7B5EE8",
lessons:[

// ─── L1: Giving Directions ───
{id:"zhv2_u40l1", title:"Giving Directions", icon:"🧭", xp:15, board:true, steps:[
{type:"intro", title:"Giving Directions",
 desc:"Learn to tell someone where to go. Turn left, go straight, head toward the subway. These are the words of every city tourist conversation.",
 goals:["Direct someone through a city","Use 向 and 往 correctly","Combine turns and directions"]},

{type:"teach", trg:"向(xiàng)", src:"toward / facing", pos:"prep", gender:null,
 note:"Preposition meaning 'facing in direction of.'\nSlightly more formal than 往.",
 example:"A: 请(qǐng)向(xiàng)前(qián)走(zǒu)。\nB: 好(hǎo)的(de)，谢谢(xièxie)。",
 exampleSrc:"A: Please walk forward.\nB: Okay, thank you.",
 funFact:"向 originally depicted a window in a house, suggesting the idea of orientation toward something. Over time it became the general preposition for direction, used for both physical and abstract goals: 向好发展 (develop toward the good)."},

{type:"teach", trg:"往(wǎng)", src:"toward / in the direction of", pos:"prep", gender:null,
 note:"Preposition for direction. Everyday choice.\n往 + direction + verb: 往左拐 (turn left).",
 example:"A: 往(wǎng)前(qián)走(zǒu)一百(yìbǎi)米(mǐ)就(jiù)到(dào)了(le)。\nB: 一百(yìbǎi)米(mǐ)，明白(míngbai)了(le)。",
 exampleSrc:"A: Walk forward 100 meters and you will arrive.\nB: One hundred meters, understood.",
 funFact:"往 and 向 overlap but 往 is more common in everyday spoken Chinese. 往 literally means 'to go,' making 往前走 feel like 'go walk to the front,' a slightly more dynamic framing than 向前走."},

{type:"teach", trg:"一直(yìzhí)", src:"straight / continuously / all along", pos:"adv", gender:null,
 note:"一 (one) + 直 (straight).\nContinue without stopping or turning.",
 example:"A: 一直(yìzhí)往(wǎng)前(qián)走(zǒu)，然后(ránhòu)你(nǐ)会(huì)看到(kàndào)一(yí)家(jiā)书店(shūdiàn)。\nB: 一直(yìzhí)向(xiàng)前(qián)，明白(míngbai)。",
 exampleSrc:"A: Keep walking straight forward, and then you will see a bookstore.\nB: Straight forward. Understood.",
 funFact:"一直 has two meanings. Physically, it means 'straight' (straight line, straight ahead). In time, it means 'continuously': 我(wǒ)一直(yìzhí)在(zài)等(děng)你(nǐ) = 'I have been waiting for you all along.'"},

{type:"teach", trg:"转(zhuǎn)", src:"to turn", pos:"verb", gender:null,
 note:"Primary verb for changing direction.\nAlso 拐 (guǎi) in spoken speech.",
 example:"A: 到(dào)了(le)路口(lùkǒu)，请(qǐng)往(wǎng)左(zuǒ)转(zhuǎn)。\nB: 左(zuǒ)转(zhuǎn)，好(hǎo)的(de)。",
 exampleSrc:"A: At the intersection, please turn left.\nB: Turn left, okay.",
 funFact:"转 has many related meanings: 转身 (turn around one's body), 转弯 (turn at a corner), 转机 (change planes / a turn of fortune). The unifying idea is a change of direction, physical or figurative."},

{type:"teach", trg:"左边(zuǒbiān)", src:"left side", pos:"noun", gender:null,
 note:"左 (left) + 边 (side).\nUsed in compounds: 左边的 = the one on the left.",
 example:"A: 卫生间(wèishēngjiān)在(zài)左边(zuǒbiān)。\nB: 谢谢(xièxie)。",
 exampleSrc:"A: The bathroom is on the left.\nB: Thank you.",
 funFact:"Traditionally in China, the left side was considered the position of honor at formal occasions, especially in older writing. Modern etiquette has mostly dropped this, but it lingers in ceremonial seating arrangements."},

{type:"teach", trg:"右边(yòubiān)", src:"right side", pos:"noun", gender:null,
 note:"右 (right) + 边 (side).\nSame structure as 左边.",
 example:"A: 那(nà)个(gè)银行(yínháng)在(zài)右边(yòubiān)。\nB: 在(zài)右边(yòubiān)，看到(kàndào)了(le)。",
 exampleSrc:"A: That bank is on the right.\nB: On the right. I see it.",
 funFact:"The character 右 originated as a pictograph of a right hand holding a mouth. Some scholars think it evoked the idea of the dominant hand (what most people use to eat). 左 similarly shows a left hand holding a work tool."},

{type:"mc", q:"一直(yìzhí) has two meanings. Which two?",
 opts:["quickly and slowly","straight and continuously","high and low","before and after"],
 ans:"straight and continuously",
 hint:"One meaning is physical (line), one is temporal (time). Think of 'keep going' in two senses."},

{type:"mc", q:"In 往前走, 往 functions as a:",
 opts:["verb","adjective","preposition","noun"],
 ans:"preposition",
 hint:"It connects the movement (走) to the direction (前). Grammatically it is a relationship word."},

{type:"fb", s:"到(dào)路口(lùkǒu)请(qǐng)往(wǎng)右(yòu){1}，然后(ránhòu)一直(yìzhí)走(zǒu)。",
 a:["转(zhuǎn)"],
 opts:["转(zhuǎn)","走(zǒu)","看(kàn)","放(fàng)"],
 hint:"The verb for changing direction. Used at intersections.",
 sSrc:"At the intersection please {1} right, then walk straight."},

{type:"match", pairs:[
  {trg:"向(xiàng)", src:"toward (formal)"},
  {trg:"往(wǎng)", src:"toward (casual)"},
  {trg:"一直(yìzhí)", src:"straight / continuously"},
  {trg:"转(zhuǎn)", src:"to turn"},
  {trg:"左边(zuǒbiān)", src:"left side"},
  {trg:"右边(yòubiān)", src:"right side"}
]},

{type:"story", speaker:"narrator", mood:"helpful", art:"zh-giving-directions",
 trg:"\"请问(qǐngwèn)，地铁站(dìtiězhàn)怎么(zěnme)走(zǒu)？\"外国(wàiguó)游客(yóukè)问(wèn)。老(lǎo)先生(xiānsheng)微笑(wēixiào)着(zhe)回答(huídá)：\"您(nín)往(wǎng)前(qián)一直(yìzhí)走(zǒu)，到(dào)第(dì)二(èr)个(gè)路口(lùkǒu)往(wǎng)左(zuǒ)转(zhuǎn)，地铁站(dìtiězhàn)就(jiù)在(zài)右边(yòubiān)。\"",
 src:"'Excuse me, how do I get to the subway station?' the foreign tourist asked. The elderly gentleman smiled and answered, 'Walk straight forward, turn left at the second intersection, and the subway station will be on the right.'"}

]},

// ─── L2: Sequence of Steps ───
{id:"zhv2_u40l2", title:"Sequence of Steps", icon:"📋", xp:15, board:true, steps:[
{type:"intro", title:"Sequence of Steps",
 desc:"When explaining a process, Chinese uses sequence words like 'first,' 'next,' and 'finally.' These structure any instruction, recipe, or plan.",
 goals:["Order steps with first/next/finally","Describe a process clearly","Use sequence vocabulary"]},

{type:"teach", trg:"首先(shǒuxiān)", src:"first / firstly", pos:"adv", gender:null,
 note:"首 (head) + 先 (before).\nThe head of the sequence. Formal than 先 alone.",
 example:"A: 首先(shǒuxiān)，请(qǐng)打开(dǎkāi)你(nǐ)的(de)电脑(diànnǎo)。\nB: 打开(dǎkāi)了(le)。",
 exampleSrc:"A: Firstly, please turn on your computer.\nB: Done.",
 funFact:"首先 is the formal sequence opener, often used in presentations, essays, and instructions. In casual speech, 先 (xiān) alone does the same job: 先看一下 (have a look first)."},

{type:"teach", trg:"接着(jiēzhe)", src:"next / then / following", pos:"adv", gender:null,
 note:"接 (connect/follow) + 着 (aspect marker).\nConnecting the next step to the previous one.",
 example:"A: 接着(jiēzhe)，请(qǐng)输入(shūrù)你(nǐ)的(de)密码(mìmǎ)。\nB: 好(hǎo)。",
 exampleSrc:"A: Next, please enter your password.\nB: Okay.",
 funFact:"接着 literally suggests 'continuing while attached to' the previous action. The 着 adds a sense of ongoing flow, making the steps feel continuous rather than separate."},

{type:"teach", trg:"最后(zuìhòu)", src:"finally / lastly", pos:"adv", gender:null,
 note:"最 (most) + 后 (after).\nThe most after. The last in the sequence.",
 example:"A: 最后(zuìhòu)，请(qǐng)点击(diǎnjī)\"确定(quèdìng)\"按钮(ànniǔ)。\nB: 点击(diǎnjī)好(hǎo)了(le)，成功(chénggōng)！",
 exampleSrc:"A: Finally, please click the 'Confirm' button.\nB: Clicked. Success!",
 funFact:"最后 literally means 'most after,' which elegantly expresses 'last in sequence.' Chinese often uses 最 (most) for superlatives: 最好 (best), 最多 (most), 最快 (fastest)."},

{type:"teach", trg:"步骤(bùzhòu)", src:"step / procedure", pos:"noun", gender:null,
 note:"步 (step) + 骤 (gallop/sudden).\nA step in a procedure.",
 example:"A: 这(zhè)个(gè)步骤(bùzhòu)很(hěn)重要(zhòngyào)，不能(bùnéng)跳过(tiàoguò)。\nB: 我(wǒ)记下(jìxià)来(lái)了(le)。",
 exampleSrc:"A: This step is very important and cannot be skipped.\nB: I have written it down.",
 funFact:"步骤 combines 步 (physical step, like walking) with 骤 (rapid sequence). The word suggests steps that must follow one after another in ordered succession, not a random walk."},

{type:"teach", trg:"按照(ànzhào)", src:"according to / in accordance with", pos:"prep", gender:null,
 note:"按 (press/according) + 照 (shine/follow).\nFollowing something as a guide.",
 example:"A: 按照(ànzhào)说明书(shuōmíngshū)操作(cāozuò)就(jiù)可以(kěyǐ)。\nB: 好(hǎo)，我(wǒ)仔细(zǐxì)看看(kànkan)。",
 exampleSrc:"A: Just operate according to the instructions.\nB: Okay, I will read carefully.",
 funFact:"按照 is a workhorse preposition for 'following rules/methods/orders.' It shows up in legal language, office memos, and recipes. The shorter 按 alone has the same function in casual speech."},

{type:"teach", trg:"完成(wánchéng)", src:"to complete / to finish", pos:"verb", gender:null,
 note:"完 (finish/whole) + 成 (become/accomplish).\nTo bring to completion.",
 example:"A: 这(zhè)个(gè)项目(xiàngmù)下周(xiàzhōu)能(néng)完成(wánchéng)吗(ma)？\nB: 没(méi)问题(wèntí)，按照(ànzhào)计划(jìhuà)进行(jìnxíng)。",
 exampleSrc:"A: Can this project be completed next week?\nB: No problem, we are proceeding according to plan.",
 funFact:"完成 is the formal verb for finishing a task, project, or goal. In casual speech, 做完 (zuòwán, 'do until done') is more common. 完成 is better for larger, more intentional accomplishments."},

{type:"mc", q:"最后(zuìhòu) literally means:",
 opts:["most early","most after","first time","last chance"],
 ans:"most after",
 hint:"最 means most, 后 means after. Combine them literally."},

{type:"mc", q:"To say 'next, please enter password,' you start with:",
 opts:["首先(shǒuxiān)","接着(jiēzhe)","最后(zuìhòu)","完成(wánchéng)"],
 ans:"接着(jiēzhe)",
 hint:"The word for 'following along,' connecting one step to the next."},

{type:"fb", s:"{1}，请(qǐng)打开(dǎkāi)你(nǐ)的(de)电脑(diànnǎo)，然后(ránhòu)登录(dēnglù)你(nǐ)的(de)账户(zhànghù)。",
 a:["首先(shǒuxiān)"],
 opts:["首先(shǒuxiān)","接着(jiēzhe)","最后(zuìhòu)","按照(ànzhào)"],
 hint:"The sequence word meaning 'to begin.' Combines 'head' and 'before.'",
 sSrc:"{1}, please open your computer, then log into your account."},

{type:"match", pairs:[
  {trg:"首先(shǒuxiān)", src:"firstly"},
  {trg:"接着(jiēzhe)", src:"next"},
  {trg:"最后(zuìhòu)", src:"finally"},
  {trg:"步骤(bùzhòu)", src:"step / procedure"},
  {trg:"按照(ànzhào)", src:"according to"},
  {trg:"完成(wánchéng)", src:"to complete"}
]}

]},

// ─── L3: Operating and Using ───
{id:"zhv2_u40l3", title:"Operating and Using", icon:"⚙️", xp:15, board:true, steps:[
{type:"intro", title:"Operating and Using",
 desc:"Learn the verbs and nouns for handling devices, following processes, and being careful while doing them. The grammar of real-world instructions.",
 goals:["Describe operating devices","Use 仔细 and 过程 correctly","Press buttons and follow procedures"]},

{type:"teach", trg:"操作(cāozuò)", src:"to operate / operation", pos:"verb", gender:null,
 note:"操 (handle) + 作 (do/make).\nTo handle and do. Used for machinery, software, any device.",
 example:"A: 这(zhè)台(tái)机器(jīqì)怎么(zěnme)操作(cāozuò)？\nB: 别(bié)担心(dānxīn)，操作(cāozuò)很(hěn)简单(jiǎndān)。",
 exampleSrc:"A: How do you operate this machine?\nB: Do not worry, the operation is very simple.",
 funFact:"操作 is the formal verb for running a device. For software, you might hear 操作电脑 (operate computer). In gaming contexts, 操作 can even refer to player skill: 他的操作很厉害 means 'his gameplay controls are impressive.'"},

{type:"teach", trg:"过程(guòchéng)", src:"process / course", pos:"noun", gender:null,
 note:"过 (pass through) + 程 (journey/distance).\nThe journey a thing passes through.",
 example:"A: 这(zhè)个(gè)过程(guòchéng)需要(xūyào)多(duō)长(cháng)时间(shíjiān)？\nB: 大概(dàgài)两(liǎng)个(gè)小时(xiǎoshí)。",
 exampleSrc:"A: How long does this process take?\nB: About two hours.",
 funFact:"过程 captures both physical processes (assembly line) and abstract ones (learning process). It emphasizes the journey rather than the endpoint, fitting Chinese cultural valuation of gradual cultivation."},

{type:"teach", trg:"仔细(zǐxì)", src:"careful / meticulous", pos:"adj", gender:null,
 note:"仔 (careful) + 细 (fine/detailed).\nFine attention to detail. Used as adverb or adjective.",
 example:"A: 请(qǐng)仔细(zǐxì)看(kàn)一下(yíxià)说明书(shuōmíngshū)。\nB: 好(hǎo)的(de)，我(wǒ)仔细(zǐxì)看(kàn)。",
 exampleSrc:"A: Please read the instructions carefully.\nB: Okay, I will read carefully.",
 funFact:"仔细 focuses on fine detail. A related word is 小心 (xiǎoxīn, careful about safety). A surgeon is 仔细 (careful about precision). Someone crossing a street is 小心 (careful about danger)."},

{type:"teach", trg:"按(àn)", src:"to press / to push (a button)", pos:"verb", gender:null,
 note:"Single character. Used for buttons, keys, bells.\nAlso short for 按照 (according to) in some contexts.",
 example:"A: 请(qǐng)按(àn)一下(yíxià)那(nà)个(gè)红色(hóngsè)的(de)按钮(ànniǔ)。\nB: 按(àn)了(le)，没(méi)有(yǒu)反应(fǎnyìng)。",
 exampleSrc:"A: Please press that red button.\nB: Pressed. No response.",
 funFact:"按 also features in 按摩 (massage, literally 'press and rub'). The character originally depicted a hand 手 pressing down with force. The physical action extends metaphorically to 'press on' with a plan or rule."},

{type:"teach", trg:"检查(jiǎnchá)", src:"to check / to inspect", pos:"verb", gender:null,
 note:"检 (examine) + 查 (investigate).\nDouble word meaning examine thoroughly.",
 example:"A: 完成(wánchéng)后(hòu)请(qǐng)检查(jiǎnchá)一下(yíxià)。\nB: 好(hǎo)，我(wǒ)会(huì)仔细(zǐxì)检查(jiǎnchá)。",
 exampleSrc:"A: After finishing, please check it.\nB: Okay, I will check carefully.",
 funFact:"检查 covers everything from medical checkups (身体检查) to homework review (检查作业). It implies both noticing and verifying. In school, teachers often ask students to 检查 their work before submitting it."},

{type:"teach", trg:"注意(zhùyì)", src:"to pay attention / to note / attention", pos:"verb", gender:null,
 note:"注 (pour/focus) + 意 (meaning/intention).\nPour your attention on something.",
 example:"A: 操作(cāozuò)时(shí)请(qǐng)注意(zhùyì)安全(ānquán)。\nB: 明白(míngbai)了(le)，我(wǒ)会(huì)小心(xiǎoxīn)。",
 exampleSrc:"A: While operating, please pay attention to safety.\nB: Understood, I will be careful.",
 funFact:"请(qǐng)注意(zhùyì) is a standard opener for announcements at airports, train stations, and offices. It politely alerts the audience that important information follows, like English 'please note' or 'attention, please.'"},

{type:"mc", q:"Which verb means to physically press a button?",
 opts:["操作(cāozuò)","按(àn)","检查(jiǎnchá)","完成(wánchéng)"],
 ans:"按(àn)",
 hint:"Single character verb. The image is pressing down with the hand."},

{type:"mc", q:"仔细(zǐxì) suggests being careful about:",
 opts:["safety","speed","fine details","social rules"],
 ans:"fine details",
 hint:"The second character 细 means 'fine' or 'slender.' Think of precision work, not physical danger."},

{type:"fb", s:"操作(cāozuò)机器(jīqì)时(shí)，请(qǐng)一定(yídìng){1}安全(ānquán)。",
 a:["注意(zhùyì)"],
 opts:["注意(zhùyì)","完成(wánchéng)","按(àn)","检查(jiǎnchá)"],
 hint:"The verb for directing attention or being alert to something important.",
 sSrc:"When operating the machine, please definitely {1} safety."},

{type:"tip", title:"仔细 vs 小心",
 text:"Both translate to 'careful' but differ.\n仔细 (zǐxì): careful about PRECISION. Read carefully, check carefully.\n小心 (xiǎoxīn): careful about SAFETY or risk. Be careful crossing the street.\nA student is 仔细 with homework. A hiker is 小心 on a cliff.",
 deepDive:"The character 细 means 'fine' or 'slender,' while 心 means 'heart.' 仔细 cares about fine detail. 小心 carries a heart that is small and alert, ready for danger. This distinction captures two different kinds of attention Chinese takes seriously."},

{type:"story", speaker:"narrator", mood:"focused", art:"zh-operating-device",
 trg:"小(xiǎo)李(Lǐ)第一(dìyī)次(cì)使用(shǐyòng)新(xīn)机器(jīqì)，他(tā)按照(ànzhào)说明书(shuōmíngshū)仔细(zǐxì)操作(cāozuò)。首先(shǒuxiān)按(àn)开关(kāiguān)，接着(jiēzhe)选择(xuǎnzé)程序(chéngxù)，最后(zuìhòu)检查(jiǎnchá)结果(jiéguǒ)。整个(zhěnggè)过程(guòchéng)很(hěn)顺利(shùnlì)。",
 src:"Xiao Li used the new machine for the first time, following the instructions carefully. First he pressed the switch, next he selected the program, and finally he checked the result. The whole process went smoothly."}

]}

]};

export default UNIT_40;
