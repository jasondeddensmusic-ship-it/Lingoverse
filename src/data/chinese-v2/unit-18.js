// Unit 18: Potential and Ability
// Level: B1.2 (HSK 3)
// Chinese (Mandarin) V2 format with hanzi+pinyin notation

const UNIT_18 = {
n:18, lang:"zh", srcLang:"en", track:"v2",
title:"做得到吗？ Can You Do It?", sub:"Expressing Ability",
icon:"💪", level:"B1.2", color:"#7B5EE8",
lessons:[

// ─── L1: Modal Verbs: 能, 会, 可以 ───
{id:"zhv2_u18l1", title:"能 vs 会 vs 可以", icon:"🔑", xp:15, board:true, steps:[
{type:"intro", title:"能 vs 会 vs 可以",
 desc:"Chinese has three words for 'can,' each with a different shade of meaning. Understanding the difference between 能, 会, and 可以 is essential for sounding natural.",
 goals:["Distinguish 能 (physical ability/permission) from 会 (learned skill)","Use 可能 for probability","Ask and answer questions about abilities"]},

{type:"teach", trg:"能(néng)", src:"can (ability / permission)", pos:"aux", gender:null,
 note:"Indicates physical ability or circumstantial permission.\n能 = have the capacity/power to do something.",
 example:"A: 你(nǐ)能(néng)跑(pǎo)五(wǔ)公里(gōnglǐ)吗(ma)？\nB: 能(néng)，我(wǒ)每天(měitiān)都(dōu)跑步(pǎobù)。",
 exampleSrc:"A: Can you run five kilometers?\nB: Yes, I run every day.",
 funFact:"能 originally depicted a bear standing on its hind legs, showing strength and power. The idea: having the raw power to accomplish something. That is why 能 is about innate or physical capacity."},

{type:"teach", trg:"会(huì)", src:"can (learned skill) / will", pos:"aux", gender:null,
 note:"For abilities acquired through learning or practice.\nAlso means 'will' for future events.",
 example:"A: 你(nǐ)会(huì)游泳(yóuyǒng)吗(ma)？\nB: 会(huì)，我(wǒ)六(liù)岁(suì)就(jiù)学(xué)会(huì)了(le)。",
 exampleSrc:"A: Can you swim?\nB: Yes, I learned when I was six.",
 funFact:"会 also means 'to meet' and 'a meeting.' The connection: when you 'meet' a skill, you have acquired it. 学会 (learn-meet) means 'to have learned successfully.' The meeting metaphor is beautiful."},

{type:"tip", title:"能 vs 会: The Key Difference",
 text:"会(huì) = learned skill (requires practice)\nCan you swim? Can you cook? Can you drive?\n你(nǐ)会(huì)游泳(yóuyǒng)吗(ma)？\n\n能(néng) = physical ability or permission (situation-based)\nCan you run today? (Are you physically able?)\n你(nǐ)今天(jīntiān)能(néng)跑步(pǎobù)吗(ma)？\n\nTest: If you need to LEARN it, use 会.\nIf your body or the situation allows it, use 能.\n\n会(huì)游泳(yóuyǒng) = knows how to swim (learned)\n能(néng)游泳(yóuyǒng) = is able to swim (right now, physically)",
 deepDive:{title:"When Both Work",
  text:"Sometimes both 能 and 会 are grammatically correct, but the meaning shifts:\n\n你(nǐ)会(huì)开(kāi)车(chē)吗(ma)？ = Do you know how to drive? (Have you learned?)\n你(nǐ)能(néng)开(kāi)车(chē)吗(ma)？ = Can you drive? (Are you able to right now? Maybe you drank alcohol or are injured.)\n\nAnother example:\n他(tā)会(huì)做(zuò)菜(cài)。 = He knows how to cook. (Skill)\n他(tā)能(néng)做(zuò)菜(cài)。 = He is able to cook. (Circumstance allows it)\n\nPick 会 when the question is about skill acquisition. Pick 能 when the question is about current circumstances."}},

{type:"teach", trg:"可能(kěnéng)", src:"maybe / possible", pos:"adv", gender:null,
 note:"Expresses probability or possibility. Can be adverb or adjective.\n可 = can/may, 能 = ability.",
 example:"A: 明天(míngtiān)会(huì)下雨(xiàyǔ)吗(ma)？\nB: 可能(kěnéng)会(huì)，带(dài)把(bǎ)伞(sǎn)吧(ba)。",
 exampleSrc:"A: Will it rain tomorrow?\nB: Maybe, bring an umbrella.",
 funFact:"可能 is built from 可 (can/permissible) and 能 (able). Together: 'it is permissible to be able' which means 'it is possible.' Chinese builds abstract concepts by combining concrete characters."},

{type:"teach", trg:"应该(yīnggāi)", src:"should / ought to", pos:"aux", gender:null,
 note:"Expresses obligation or expectation. Softer than 必须.\n应 = should/respond, 该 = should/deserve.",
 example:"A: 我(wǒ)应该(yīnggāi)怎么(zěnme)做(zuò)？\nB: 你(nǐ)应该(yīnggāi)先(xiān)问问(wènwen)老师(lǎoshī)。",
 exampleSrc:"A: What should I do?\nB: You should ask the teacher first.",
 funFact:"应该 carries a sense of moral or logical obligation, like English 'should.' It implies expectation without force. Compare with 必须 (must), which is a hard command with no wiggle room."},

{type:"teach", trg:"必须(bìxū)", src:"must / have to", pos:"aux", gender:null,
 note:"Strong obligation. No choice involved.\n必 = certainly/must, 须 = need/require.",
 example:"A: 我(wǒ)可以(kěyǐ)明天(míngtiān)交(jiāo)作业(zuòyè)吗(ma)？\nB: 不(bù)行(xíng)，你(nǐ)必须(bìxū)今天(jīntiān)交(jiāo)。",
 exampleSrc:"A: Can I hand in the homework tomorrow?\nB: No, you must hand it in today.",
 funFact:"必 originally showed a heart pierced by a needle, meaning 'certain' or 'without doubt.' 须 meant the beard on a person's chin, later extended to 'need.' Together: 'certainly need to.'"},

{type:"mc", q:"你(nǐ)___游泳(yóuyǒng)吗(ma)？ (Can you swim? / Do you know how to swim?)",
 opts:["会(huì)","能(néng)","可能(kěnéng)","必须(bìxū)"],
 ans:"会(huì)",
 hint:"Swimming is a skill that requires learning and practice. Which modal is for learned abilities?"},

{type:"fb", s:"你(nǐ)今天(jīntiān){1}来(lái)上班(shàngbān)吗(ma)？",
 a:["能(néng)"],
 opts:["能(néng)","会(huì)","可能(kěnéng)","应该(yīnggāi)"],
 hint:"This asks about whether circumstances allow coming to work today, not about a learned skill.",
 sSrc:"Can you come to work today?"},

{type:"match", pairs:[
  {trg:"能(néng)", src:"can (ability/permission)"},
  {trg:"会(huì)", src:"can (learned skill)"},
  {trg:"可能(kěnéng)", src:"maybe / possible"},
  {trg:"应该(yīnggāi)", src:"should"},
  {trg:"必须(bìxū)", src:"must"}
]},

{type:"mc", q:"明天(míngtiān)___会(huì)下雨(xiàyǔ)。 (Tomorrow it ___ will rain.)",
 opts:["会(huì)","可能(kěnéng)","必须(bìxū)","能(néng)"],
 ans:"可能(kěnéng)",
 hint:"You are expressing uncertainty about the weather. Which word means 'maybe' or 'possibly'?"},

{type:"fb", s:"学生(xuéshēng){1}每天(měitiān)做(zuò)作业(zuòyè)。",
 a:["必须(bìxū)"],
 opts:["必须(bìxū)","可能(kěnéng)","会(huì)","能(néng)"],
 hint:"Students have no choice about this. Which modal means 'must' with no exceptions?",
 sSrc:"Students {1} do homework every day."},

{type:"mc", q:"你(nǐ)___先(xiān)休息(xiūxi)一下(yíxià)，别(bié)太(tài)累(lèi)了(le)。",
 opts:["可能(kěnéng)","能(néng)","应该(yīnggāi)","必须(bìxū)"],
 ans:"应该(yīnggāi)",
 hint:"This is friendly advice, not a strict command. Which modal means 'should' or 'ought to'?"}
]},

// ─── L2: Spoken Modals and Urgency ───
{id:"zhv2_u18l2", title:"得 and 需要 Need and Urgency", icon:"⏰", xp:15, board:true, steps:[
{type:"intro", title:"得 and 需要: Need and Urgency",
 desc:"Learn two more ways to express necessity: the colloquial 得 and the formal 需要. Also master 来得及 and 来不及 for talking about time pressure.",
 goals:["Use 得 as the spoken form of 'must'","Express needs with 需要","Talk about having (or not having) enough time with 来得及/来不及"]},

{type:"teach", trg:"得(děi)", src:"must / have to (spoken)", pos:"aux", gender:null,
 note:"Colloquial form of 必须. Very common in daily speech.\nPronounced děi (third tone), not dé or de.",
 example:"A: 你(nǐ)明天(míngtiān)几(jǐ)点(diǎn)起床(qǐchuáng)？\nB: 我(wǒ)得(děi)六(liù)点(diǎn)起(qǐ)，要(yào)赶(gǎn)早班(zǎobān)车(chē)。",
 exampleSrc:"A: What time do you get up tomorrow?\nB: I have to get up at six, I need to catch the early bus.",
 funFact:"得 has THREE different pronunciations: děi (must), dé (obtain), de (complement marker). Same character, three sounds, three meanings. Context tells you which one. This is one of Chinese's trickiest characters for learners."},

{type:"teach", trg:"需要(xūyào)", src:"to need / to require", pos:"verb", gender:null,
 note:"More formal than 得. Works as both verb and noun.\n需 = need/require, 要 = want/need.",
 example:"A: 你(nǐ)需要(xūyào)帮忙(bāngmáng)吗(ma)？\nB: 需要(xūyào)，我(wǒ)需要(xūyào)一(yí)个(gè)人(rén)帮(bāng)我(wǒ)搬(bān)东西(dōngxi)。",
 exampleSrc:"A: Do you need help?\nB: Yes, I need someone to help me move things.",
 funFact:"需 originally showed rain (雨) falling and a person waiting. The idea: someone standing in the rain, needing shelter. From this vivid image of necessity came the modern meaning."},

{type:"teach", trg:"来得及(láidejí)", src:"to have time to / in time", pos:"verb", gender:null,
 note:"Expresses that there IS enough time to do something.\n来 = come, 得 = able, 及 = reach in time.",
 example:"A: 现在(xiànzài)出发(chūfā)来得及(láidejí)吗(ma)？\nB: 来得及(láidejí)，还(hái)有(yǒu)一(yí)个(gè)小时(xiǎoshí)。",
 exampleSrc:"A: If we leave now, will we make it in time?\nB: Yes, there is still one hour.",
 funFact:"来得及 is a beautiful example of Chinese potential complements (V得C). The structure: come + able + reach. If you 'can come and reach,' you are in time. The negative 来不及 means you cannot make it."},

{type:"teach", trg:"来不及(láibùjí)", src:"not have time to / too late", pos:"verb", gender:null,
 note:"The negative of 来得及. Not enough time to do something.\n来 = come, 不 = not, 及 = reach in time.",
 example:"A: 快(kuài)点(diǎn)！来不及(láibùjí)了(le)！\nB: 我(wǒ)知道(zhīdào)！我(wǒ)在(zài)穿(chuān)鞋(xié)了(le)！",
 exampleSrc:"A: Hurry! There is no time!\nB: I know! I am putting on my shoes!",
 funFact:"来不及 is one of the most dramatic phrases in Chinese. You hear it in movies when bombs are ticking, in train stations when people are running, and at breakfast when kids are late for school. Pure urgency in three syllables."},

{type:"tip", title:"得 vs 必须 vs 需要: Three Levels of 'Must'",
 text:"Chinese has a gradient from casual to formal:\n\n得(děi) = gotta, have to (casual speech)\n我(wǒ)得(děi)走(zǒu)了(le)。 I gotta go.\n\n必须(bìxū) = must (firm, no negotiation)\n你(nǐ)必须(bìxū)按时(ànshí)完成(wánchéng)。 You must finish on time.\n\n需要(xūyào) = need to (neutral, practical)\n我们(wǒmen)需要(xūyào)更多(gèngduō)时间(shíjiān)。 We need more time.\n\nIn daily conversation, 得 is the most natural. In writing or formal speech, use 必须 or 需要.",
 deepDive:{title:"得(děi) and Its Chameleon Nature",
  text:"The character 得 is remarkable. Three pronunciations, three meanings:\n\n得(dé) = to obtain, to get\n我(wǒ)得(dé)到(dào)了(le)一(yí)个(gè)机会(jīhuì)。 I got an opportunity.\n\n得(děi) = must, have to\n我(wǒ)得(děi)走(zǒu)了(le)。 I have to go.\n\n得(de) = complement marker (structural)\n她(tā)跑(pǎo)得(de)很(hěn)快(kuài)。 She runs very fast.\n\nYou already know 得(de) from potential complements. Now you have met 得(děi). Context always makes the pronunciation clear."}},

{type:"mc", q:"我(wǒ)___走(zǒu)了(le)，不然(bùrán)要(yào)迟到(chídào)了(le)。 (I ___ go, otherwise I will be late.)",
 opts:["得(děi)","会(huì)","可能(kěnéng)","应该(yīnggāi)"],
 ans:"得(děi)",
 hint:"This is casual speech about urgency. Which colloquial modal means 'gotta' or 'have to'?"},

{type:"fb", s:"你(nǐ){1}帮忙(bāngmáng)吗(ma)？",
 a:["需要(xūyào)"],
 opts:["需要(xūyào)","得(děi)","会(huì)","可能(kěnéng)"],
 hint:"This is a polite, neutral question about whether someone needs help.",
 sSrc:"Do you {1} help?"},

{type:"match", pairs:[
  {trg:"得(děi)", src:"must (spoken)"},
  {trg:"需要(xūyào)", src:"to need / require"},
  {trg:"来得及(láidejí)", src:"have time to"},
  {trg:"来不及(láibùjí)", src:"not have time to"}
]},

{type:"mc", q:"快(kuài)点(diǎn)！飞机(fēijī)十(shí)点(diǎn)起飞(qǐfēi)，我们(wǒmen)___了(le)！",
 opts:["可能(kěnéng)","来不及(láibùjí)","来得及(láidejí)","需要(xūyào)"],
 ans:"来不及(láibùjí)",
 hint:"Hurry! The plane leaves at ten. Which phrase means 'there is no time' or 'we will be late'?"},

{type:"fb", s:"别(bié)着急(zhāojí)，我们(wǒmen)还(hái){1}。",
 a:["来得及(láidejí)"],
 opts:["来得及(láidejí)","来不及(láibùjí)","需要(xūyào)","得(děi)"],
 hint:"Do not worry, we still ___. Which phrase means 'have enough time'?",
 sSrc:"Do not worry, we still {1}."},

{type:"mc", q:"这(zhè)个(ge)工作(gōngzuò)___三(sān)个(gè)人(rén)一起(yìqǐ)做(zuò)。",
 opts:["可能(kěnéng)","会(huì)","需要(xūyào)","来不及(láibùjí)"],
 ans:"需要(xūyào)",
 hint:"This job ___ three people working together. Which verb means 'to need' or 'to require'?"},

{type:"drag_fill",
 s:"我(wǒ){1}早(zǎo)点(diǎn)出门(chūmén)，不然(bùrán){2}了(le)。",
 blanks:{"1":"得(děi)","2":"来不及(láibùjí)"},
 pool:["得(děi)","会(huì)","来不及(láibùjí)","来得及(láidejí)"],
 hint:"I ___ leave early, otherwise there will not be enough time. Use the spoken 'must' and the 'no time' phrase."}
]},

// ─── L3: Potential Complements V得/不C ───
{id:"zhv2_u18l3", title:"做得到 vs 做不到 Potential Complements", icon:"⚡", xp:15, board:true, steps:[
{type:"intro", title:"做得到 vs 做不到: Potential Complements",
 desc:"Chinese has a powerful system for expressing whether you CAN or CANNOT achieve a result. Insert 得 (can) or 不 (cannot) between a verb and its complement. This is one of Chinese grammar's most elegant features.",
 goals:["Form potential complements with V得C and V不C","Use 做得到/做不到, 听得懂/听不懂, 看得见/看不见","Express inability with 受不了 and 说不清楚"]},

{type:"teach", trg:"做得到(zuòdedào)", src:"able to do / achievable", pos:"verb", gender:null,
 note:"Verb + 得 + complement = CAN achieve the result.\n做 = do, 得 = able, 到 = arrive/achieve.",
 example:"A: 你(nǐ)一(yí)个(gè)人(rén)做得到(zuòdedào)吗(ma)？\nB: 做得到(zuòdedào)，放心(fàngxīn)吧(ba)。",
 exampleSrc:"A: Can you do it alone?\nB: I can do it, do not worry.",
 funFact:"The V得C pattern is one of Chinese's most productive structures. Any verb can be combined with almost any result complement using 得. It is like a grammar machine: plug in the verb, plug in the result, and 得 connects them."},

{type:"teach", trg:"做不到(zuòbudào)", src:"unable to do / unachievable", pos:"verb", gender:null,
 note:"Verb + 不 + complement = CANNOT achieve the result.\n做 = do, 不 = not, 到 = achieve.",
 example:"A: 请(qǐng)你(nǐ)明天(míngtiān)之前(zhīqián)完成(wánchéng)。\nB: 做不到(zuòbudào)，时间(shíjiān)太(tài)短(duǎn)了(le)。",
 exampleSrc:"A: Please finish before tomorrow.\nB: I cannot do it, the time is too short.",
 funFact:"做不到 is a common way to set boundaries politely. Instead of a flat 'no,' you say 'the result cannot be achieved.' It shifts blame from unwillingness to impossibility. Very useful in Chinese social navigation."},

{type:"tip", title:"The V得C / V不C System",
 text:"Insert 得 or 不 between verb and complement:\n\nPositive: Verb + 得 + Complement (CAN do)\n做(zuò)得到(dào) = can do it\n听(tīng)得懂(dǒng) = can understand (by listening)\n看(kàn)得见(jiàn) = can see\n\nNegative: Verb + 不 + Complement (CANNOT do)\n做(zuò)不到(dào) = cannot do it\n听(tīng)不懂(dǒng) = cannot understand\n看(kàn)不见(jiàn) = cannot see\n\nThe complement describes the RESULT of the action.\n到 = achieve, 懂 = understand, 见 = perceive, 完 = finish.",
 deepDive:{title:"Why Chinese Uses This Instead of Modal Verbs",
  text:"English says: 'I cannot hear you.' Chinese asks: 'Can my hearing REACH understanding?'\n\n听不懂(tīngbudǒng) = listen + cannot + understand\n\nThis is more precise than 'cannot hear.' It tells you WHERE the process breaks down. You can hear the sound (听得到), but you cannot understand the meaning (听不懂).\n\nMore examples:\n看得见(kàndéjiàn) = can see it (it is visible)\n看不清楚(kànbuqīngchu) = can see it but cannot see it clearly\n吃得完(chīdewán) = can finish eating it all\n吃不下(chībuxià) = cannot eat any more (too full)\n\nEach describes a specific point of success or failure."}},

{type:"teach", trg:"听得懂(tīngdedǒng)", src:"able to understand (by listening)", pos:"verb", gender:null,
 note:"Listen + able + understand. Can understand what you hear.\nThe opposite 听不懂 means cannot understand.",
 example:"A: 老师(lǎoshī)说(shuō)的(de)你(nǐ)听得懂(tīngdedǒng)吗(ma)？\nB: 大部分(dàbùfen)听得懂(tīngdedǒng)，有(yǒu)些(xiē)词(cí)不(bù)懂(dǒng)。",
 exampleSrc:"A: Can you understand what the teacher says?\nB: I can understand most of it, some words I do not know.",
 funFact:"This is the phrase Chinese language learners use most. When someone speaks too fast, you say 听不懂. When you finally understand, 听得懂 is your victory cry. Every Chinese learner's journey is measured in these two phrases."},

{type:"teach", trg:"看不见(kànbujiàn)", src:"cannot see", pos:"verb", gender:null,
 note:"Look + not + perceive. Cannot see something (too far, blocked).\n见 = perceive with the eyes.",
 example:"A: 你(nǐ)看得见(kàndéjiàn)黑板(hēibǎn)上(shàng)的(de)字(zì)吗(ma)？\nB: 看不见(kànbujiàn)，太(tài)小(xiǎo)了(le)。",
 exampleSrc:"A: Can you see the characters on the blackboard?\nB: I cannot see them, they are too small.",
 funFact:"见 is different from 看. 看 means 'to look at' (the action). 见 means 'to perceive/see' (the result). So 看不见 means: I am looking, but I cannot perceive the image. The action happens, but the result fails."},

{type:"teach", trg:"受不了(shòubuliǎo)", src:"cannot stand / unbearable", pos:"verb", gender:null,
 note:"Endure + not + finish. Cannot tolerate something.\n了 here is pronounced liǎo, meaning 'to finish/able.'",
 example:"A: 今天(jīntiān)太(tài)热(rè)了(le)！\nB: 是(shì)啊(a)，我(wǒ)也(yě)受不了(shòubuliǎo)了(le)。",
 exampleSrc:"A: Today is too hot!\nB: Yes, I cannot stand it either.",
 funFact:"受不了 is one of the most expressive Chinese complaints. People use it for heat, cold, noise, boredom, bad food, and annoying people. It literally means 'my endurance cannot complete,' a dramatic way to say 'I have reached my limit.'"},

{type:"teach", trg:"说不清楚(shuōbuqīngchu)", src:"cannot explain clearly", pos:"verb", gender:null,
 note:"Say + not + clear. Cannot express something in a clear way.\nThe positive is 说得清楚 (can explain clearly).",
 example:"A: 到底(dàodǐ)发生(fāshēng)了(le)什么(shénme)？\nB: 我(wǒ)也(yě)说不清楚(shuōbuqīngchu)，情况(qíngkuàng)很(hěn)复杂(fùzá)。",
 exampleSrc:"A: What on earth happened?\nB: I cannot explain clearly either, the situation is complicated.",
 funFact:"说不清楚 is the perfect phrase for complicated stories. Chinese people often start explanations with 这个说来话长 (this is a long story) when they feel something is 说不清楚. The inability to explain clearly implies the story deserves patience."},

{type:"mc", q:"老师(lǎoshī)说(shuō)得(de)太(tài)快(kuài)了(le)，我(wǒ)___。",
 opts:["听不懂(tīngbudǒng)","听得懂(tīngdedǒng)","看不见(kànbujiàn)","做得到(zuòdedào)"],
 ans:"听不懂(tīngbudǒng)",
 hint:"The teacher speaks too fast. You CANNOT understand by listening. Which phrase fits?"},

{type:"fb", s:"你(nǐ)一(yí)个(gè)人(rén){1}吗(ma)？放心(fàngxīn)，我(wǒ)能(néng)帮(bāng)你(nǐ)。",
 a:["做不到(zuòbudào)"],
 opts:["做不到(zuòbudào)","做得到(zuòdedào)","听不懂(tīngbudǒng)","受不了(shòubuliǎo)"],
 hint:"Asking if someone cannot manage alone. Which potential complement means 'unable to achieve it'?",
 sSrc:"You cannot do it alone? Do not worry, I can help you."},

{type:"match", pairs:[
  {trg:"做得到(zuòdedào)", src:"able to do"},
  {trg:"做不到(zuòbudào)", src:"unable to do"},
  {trg:"听得懂(tīngdedǒng)", src:"able to understand"},
  {trg:"看不见(kànbujiàn)", src:"cannot see"},
  {trg:"受不了(shòubuliǎo)", src:"cannot stand"}
]},

{type:"mc", q:"这(zhè)里(lǐ)太(tài)暗(àn)了(le)，我(wǒ)___。",
 opts:["说不清楚(shuōbuqīngchu)","看不见(kànbujiàn)","听不懂(tīngbudǒng)","做不到(zuòbudào)"],
 ans:"看不见(kànbujiàn)",
 hint:"It is too dark. Which potential complement describes being unable to see?"},

{type:"fb", s:"这(zhè)件(jiàn)事(shì)很(hěn)复杂(fùzá)，我(wǒ){1}。",
 a:["说不清楚(shuōbuqīngchu)"],
 opts:["说不清楚(shuōbuqīngchu)","看不见(kànbujiàn)","听不懂(tīngbudǒng)","做不到(zuòbudào)"],
 hint:"This matter is very complicated, I cannot ___ it. Which phrase means 'cannot explain clearly'?",
 sSrc:"This matter is very complicated, I {1}."},

{type:"mc", q:"今天(jīntiān)四十(sìshí)度(dù)，我(wǒ)真(zhēn)___了(le)！",
 opts:["看不见(kànbujiàn)","听不懂(tīngbudǒng)","受不了(shòubuliǎo)","做不到(zuòbudào)"],
 ans:"受不了(shòubuliǎo)",
 hint:"It is 40 degrees. Which phrase means 'cannot stand it' or 'unbearable'?"},

{type:"drag_fill",
 s:"她(tā)说(shuō)中文(zhōngwén)说(shuō)得(de)很(hěn)快(kuài)，我(wǒ){1}，但是(dànshì)我(wǒ){2}她(tā)写(xiě)的(de)字(zì)。",
 blanks:{"1":"听不懂(tīngbudǒng)","2":"看得懂(kàndedǒng)"},
 pool:["听不懂(tīngbudǒng)","听得懂(tīngdedǒng)","看得懂(kàndedǒng)","看不见(kànbujiàn)"],
 hint:"She speaks Chinese too fast for me to understand by ear, but I CAN understand what she writes."},

{type:"mc", q:"Which pair correctly shows the positive and negative potential complement?",
 opts:["做到得 / 做到不","得做到 / 不做到","做到(zuòdào)得(dé) / 做到(zuòdào)不(bù)","做得到(zuòdedào) / 做不到(zuòbudào)"],
 ans:"做得到(zuòdedào) / 做不到(zuòbudào)",
 hint:"The 得 or 不 goes BETWEEN the verb and the result complement, not before or after."}
]},

// ─── L4: Review and Combined Practice ───
{id:"zhv2_u18l4", title:"能力大复习 Ability Review", icon:"🎯", xp:15, board:true, steps:[
{type:"intro", title:"能力大复习 Ability Review",
 desc:"Put all the ability and potential expressions together. This lesson tests your understanding of modal verbs, potential complements, and the subtle differences between them.",
 goals:["Choose correctly between 能, 会, 应该, 必须, 得","Use potential complements in context","Combine modals and complements in natural sentences"]},

{type:"tip", title:"Complete Modal Verb Map",
 text:"From weakest to strongest obligation:\n\n可能(kěnéng) = might (possibility)\n会(huì) = can (learned skill) / will (prediction)\n能(néng) = can (physical ability / permission)\n应该(yīnggāi) = should (advice/expectation)\n需要(xūyào) = need to (practical necessity)\n得(děi) = gotta (spoken urgency)\n必须(bìxū) = must (no exceptions)\n\nPotential complements (V得C / V不C):\nThese describe whether a SPECIFIC RESULT can be achieved.\nThey are more precise than modal verbs.",
 deepDive:{title:"Modals vs Potential Complements",
  text:"Modal verbs and potential complements overlap but are not identical:\n\n我(wǒ)能(néng)听(tīng) = I can listen (general ability)\n我(wǒ)听得懂(tīngdedǒng) = I can understand what I hear (specific result)\n\n我(wǒ)不(bù)能(néng)做(zuò) = I cannot do it (circumstance prevents me)\n我(wǒ)做不到(zuòbudào) = I am unable to achieve the result (my capacity is insufficient)\n\nPotential complements are more natural in Chinese than modal verbs for expressing specific abilities. Instead of 'I cannot understand,' Chinese prefers to say exactly WHERE understanding fails: 听不懂 (listening fails), 看不懂 (reading fails), 说不清楚 (explaining fails)."}},

{type:"mc", q:"他(tā)小时候(xiǎoshíhou)学(xué)过(guo)钢琴(gāngqín)，所以(suǒyǐ)___弹(tán)。",
 opts:["会(huì)","能(néng)","得(děi)","必须(bìxū)"],
 ans:"会(huì)",
 hint:"He learned piano as a child. This is a skill acquired through practice. Which modal fits?"},

{type:"fb", s:"医生(yīshēng)说(shuō)我(wǒ){1}多(duō)休息(xiūxi)。",
 a:["应该(yīnggāi)"],
 opts:["应该(yīnggāi)","会(huì)","可能(kěnéng)","来不及(láibùjí)"],
 hint:"The doctor says I ___ rest more. This is professional advice, not a hard command.",
 sSrc:"The doctor says I {1} rest more."},

{type:"mc", q:"你(nǐ)说(shuō)得(de)太(tài)快(kuài)了(le)，请(qǐng)慢(màn)一点(yìdiǎn)，我(wǒ)___。",
 opts:["做不到(zuòbudào)","听不懂(tīngbudǒng)","看不见(kànbujiàn)","受不了(shòubuliǎo)"],
 ans:"听不懂(tīngbudǒng)",
 hint:"You are speaking too fast. The problem is with comprehending what is heard."},

{type:"fb", s:"快(kuài)九(jiǔ)点(diǎn)了(le)，我(wǒ){1}走(zǒu)了(le)！",
 a:["得(děi)"],
 opts:["得(děi)","会(huì)","可能(kěnéng)","需要(xūyào)"],
 hint:"It is almost nine. I ___ go now! Which casual modal expresses urgent necessity?",
 sSrc:"It is almost nine, I {1} go now!"},

{type:"mc", q:"他(tā)的(de)腿(tuǐ)受伤(shòushāng)了(le)，今天(jīntiān)___跑步(pǎobù)。",
 opts:["不(bù)必须(bìxū)","不(bù)得(děi)","不(bù)能(néng)","不(bù)会(huì)"],
 ans:"不(bù)能(néng)",
 hint:"His leg is injured. The circumstance prevents running. Which modal is about physical ability?"},

{type:"match", pairs:[
  {trg:"会(huì)", src:"can (learned skill)"},
  {trg:"能(néng)", src:"can (physical/circumstantial)"},
  {trg:"得(děi)", src:"must (spoken)"},
  {trg:"听得懂(tīngdedǒng)", src:"can understand (listening)"},
  {trg:"说不清楚(shuōbuqīngchu)", src:"cannot explain clearly"}
]},

{type:"fb", s:"这(zhè)个(ge)电影(diànyǐng)是(shì)中文(zhōngwén)的(de)，你(nǐ){1}吗(ma)？",
 a:["看得懂(kàndedǒng)"],
 opts:["看得懂(kàndedǒng)","看不见(kànbujiàn)","听不懂(tīngbudǒng)","做得到(zuòdedào)"],
 hint:"This movie is in Chinese. Can you understand it (by watching/reading)?",
 sSrc:"This movie is in Chinese, can you understand it?"},

{type:"mc", q:"如果(rúguǒ)你(nǐ)___，我们(wǒmen)可以(kěyǐ)换(huàn)一(yí)个(gè)计划(jìhuà)。",
 opts:["做得到(zuòdedào)","听得懂(tīngdedǒng)","来得及(láidejí)","做不到(zuòbudào)"],
 ans:"做不到(zuòbudào)",
 hint:"If you ___, we can change the plan. The conditional implies inability."},

{type:"drag_fill",
 s:"你(nǐ){1}开(kāi)车(chē)吗(ma)？我(wǒ)今天(jīntiān)喝(hē)了(le)酒(jiǔ)，{2}开(kāi)。",
 blanks:{"1":"会(huì)","2":"不(bù)能(néng)"},
 pool:["会(huì)","不(bù)能(néng)","得(děi)","可能(kěnéng)"],
 hint:"First question: do you know how to drive (learned skill)? Second: I drank alcohol today, I am not allowed to drive (circumstance)."},

{type:"mc", q:"噪音(zàoyīn)太(tài)大(dà)了(le)，我(wǒ)真(zhēn)___了(le)！",
 opts:["受不了(shòubuliǎo)","听不懂(tīngbudǒng)","看不见(kànbujiàn)","做不到(zuòbudào)"],
 ans:"受不了(shòubuliǎo)",
 hint:"The noise is too loud. Which phrase means you have reached your limit of tolerance?"},

{type:"fb", s:"火车(huǒchē)还(hái)有(yǒu)半(bàn)个(gè)小时(xiǎoshí)才(cái)开(kāi)，我们(wǒmen){1}。",
 a:["来得及(láidejí)"],
 opts:["来得及(láidejí)","来不及(láibùjí)","受不了(shòubuliǎo)","做不到(zuòbudào)"],
 hint:"The train does not leave for 30 more minutes. We still have time. Which phrase fits?",
 sSrc:"The train does not leave for half an hour, we {1}."}
]},

// ─── L5: Feelings, States & Character (HSK 3) ───
{id:"zhv2_u18l_hsk3_feelings", title:"心情与性格 Feelings and Character", icon:"😊", xp:20, board:true, steps:[
{type:"intro", title:"心情与性格: Feelings and Character",
 desc:"Chinese has precise vocabulary for emotional states and personality traits. This lesson covers nine essential HSK 3 words you will use every day in conversations about how people feel and what kind of person they are.",
 goals:["Describe emotional states: afraid, worried, happy, sad, angry, hungry, tired","Use character descriptors: clever, proud","Distinguish 开心 (colloquial happy) from 高兴 (formal happy)"]},

{type:"teach", trg:"害怕(hàipà)", src:"afraid / scared", pos:"adj", gender:null,
 note:"Describes fear or fright. Can be a verb (to be afraid of) or adjective.\n害 = harm, 怕 = fear.",
 example:"A: 你(nǐ)害怕(hàipà)什么(shénme)？\nB: 我(wǒ)不(bù)太(tài)害怕(hàipà)什么(shénme)，但是(dànshì)我(wǒ)害怕(hàipà)考试(kǎoshì)不(bù)好(hǎo)。",
 exampleSrc:"A: What are you afraid of?\nB: I am not too afraid of anything, but I am afraid of failing exams.",
 funFact:"害 originally meant 'harm' or 'injury.' 怕 shows a heart (忄) next to a white (白) color, suggesting someone turning pale with fright. Together: to be harmed into turning pale."},

{type:"teach", trg:"担心(dānxīn)", src:"to worry / worried", pos:"verb", gender:null,
 note:"To feel anxious about something. Often followed by the thing you worry about.\n担 = carry on shoulder, 心 = heart.",
 example:"A: 妈妈(māma)，别(bié)担心(dānxīn)。\nB: 我(wǒ)不(bù)能(néng)不(bù)担心(dānxīn)。",
 exampleSrc:"A: Mom, do not worry.\nB: I cannot not worry.",
 funFact:"担 shows a person carrying a heavy shoulder pole with two baskets. Worry is imagined as carrying a weight on your shoulders. In Chinese, you do not just feel worried, you are 'carrying that worry on your heart' (心)."},

{type:"teach", trg:"骄傲(jiāo'ào)", src:"proud / arrogant", pos:"adj", gender:null,
 note:"Can mean legitimately proud OR arrogant depending on context.\n骄 = proud horse, 傲 = haughty.",
 example:"A: 你(nǐ)的(de)孩子(háizi)成绩(chéngjì)那么(nàme)好(hǎo)！\nB: 是(shì)啊(a)，我(wǒ)非常(fēicháng)骄傲(jiāo'ào)，他(tā)很(hěn)努力(nǔlì)。",
 exampleSrc:"A: Your child has such good grades!\nB: Yes, I am very proud. He works very hard.",
 funFact:"骄 shows a horse that is too spirited to be controlled, representing pride that cannot be tamed. This dual meaning, both healthy pride and dangerous arrogance, reflects how Chinese culture views the fine line between self-respect and ego."},

{type:"teach", trg:"开心(kāixīn)", src:"happy / delighted (colloquial)", pos:"adj", gender:null,
 note:"Colloquial, warm happiness. More casual and intimate than 高兴.\n开 = open, 心 = heart: your heart opens up.",
 example:"A: 生日(shēngrì)快乐(kuàilè)！你(nǐ)开心(kāixīn)吗(ma)？\nB: 太(tài)开心(kāixīn)了(le)！",
 exampleSrc:"A: Happy birthday! Are you happy?\nB: So happy!",
 funFact:"开心 literally means 'open heart.' When you are happy in Chinese, your heart opens up and lets the good feelings flow. The imagery is beautiful: joy as the heart unlocking. 高兴 is more formal; 开心 is what you say to close friends and family."},

{type:"teach", trg:"伤心(shāngxīn)", src:"sad / heartbroken", pos:"adj", gender:null,
 note:"Deeper sadness than 难过. Often implies being hurt by someone or something.\n伤 = wound/injury, 心 = heart.",
 example:"A: 他(tā)今天(jīntiān)为什么(wèishénme)这么(zhème)伤心(shāngxīn)？\nB: 他(tā)的(de)朋友(péngyou)不(bù)在(zài)。",
 exampleSrc:"A: Why is he so sad today?\nB: His friend is not here.",
 funFact:"伤心 is literally a 'wounded heart.' Chinese emotional vocabulary often uses the heart (心) as the seat of all feelings. Compare 开心 (happy heart), 伤心 (wounded heart), 担心 (burdened heart). The heart is the emotional barometer in Chinese thought."},

{type:"teach", trg:"生气(shēngqì)", src:"angry / to get angry", pos:"adj", gender:null,
 note:"The most common word for anger. Can be a stative verb or adjective.\n生 = produce/generate, 气 = energy/breath.",
 example:"A: 你(nǐ)为什么(wèishénme)生气(shēngqì)了(le)？\nB: 他(tā)没(méi)来(lái)，我(wǒ)很(hěn)生气(shēngqì)。",
 exampleSrc:"A: Why are you angry?\nB: He did not come. I am very angry.",
 funFact:"生气 literally means 'producing energy' or 'generating breath.' When you are angry, you breathe hard and your energy surges. Interestingly, 生气 also means 'vitality' or 'life force' in another context, so the same word means both anger and being full of life."},

{type:"tip", title:"心 (xīn): The Heart Character",
 text:"Notice how many emotion words contain 心 (heart):\n\n担心(dānxīn) = worry ('heart burden')\n开心(kāixīn) = happy ('open heart')\n伤心(shāngxīn) = sad ('wounded heart')\n\nThis is not coincidence. Chinese philosophy places the heart at the center of thought and emotion. The character 心 appears in hundreds of emotional words. When you learn one, look for 心 and you will understand the emotional logic.\n\n生气(shēngqì) uses 气(breath/energy) instead, reflecting the physical sensation of rising anger.",
 deepDive:{title:"害怕 vs 担心: Fear vs Worry",
  text:"These two are easy to confuse:\n\n害怕(hàipà) = fear in the present moment, a reaction to something scary\n我(wǒ)害怕(hàipà)黑暗(hēi'àn)。 I am afraid of the dark.\n\n担心(dānxīn) = ongoing worry or anxiety about what might happen\n我(wǒ)担心(dānxīn)考试(kǎoshì)。 I am worried about the exam.\n\nHear a loud noise right now? 害怕. Nervous about tomorrow's presentation? 担心. Fear is a reaction; worry is an anticipation."}},

{type:"teach", trg:"饿(è)", src:"hungry", pos:"adj", gender:null,
 note:"Describes physical hunger. Use 很饿 for 'very hungry.'\n饿 contains 食 (eat/food) on the left side.",
 example:"A: 我(wǒ)很(hěn)饿(è)了(le)，你(nǐ)呢(ne)？\nB: 我(wǒ)也(yě)饿(è)了(le)，我们(wǒmen)去(qù)吃饭(chīfàn)吧(ba)。",
 exampleSrc:"A: I am very hungry. What about you?\nB: I am hungry too. Let us go eat.",
 funFact:"The left side of 饿 is 食 (food radical), and the right is 我 (I/me). So 饿 contains 'food' and 'I' together, almost as if it means 'I need food.' This makes the character surprisingly intuitive once you see it."},

{type:"teach", trg:"累(lèi)", src:"tired / exhausted", pos:"adj", gender:null,
 note:"Physical or mental tiredness. Very commonly used in daily speech.\nCan also be used as a verb: 累坏了 = completely worn out.",
 example:"A: 你(nǐ)很(hěn)累(lèi)吗(ma)？\nB: 是(shì)的(de)，工作(gōngzuò)太(tài)多(duō)了(le)，我(wǒ)很(hěn)累(lèi)。",
 exampleSrc:"A: Are you very tired?\nB: Yes, work is too much. I am very tired.",
 funFact:"累 was originally written with a field (田) stacked three times, showing repeated heavy labor in the fields. The original meaning was 'to pile up' or 'accumulate.' Over time it evolved to mean the exhaustion that comes from accumulated effort."},

{type:"teach", trg:"聪明(cōngming)", src:"clever / intelligent", pos:"adj", gender:null,
 note:"A genuine compliment in Chinese culture. Parents love hearing their child is 聪明.\n聪 = sharp senses, 明 = bright/clear.",
 example:"A: 这个(zhège)学生(xuésheng)很(hěn)聪明(cōngming)。\nB: 他(tā)又(yòu)聪明(cōngming)又(yòu)努力(nǔlì)。",
 exampleSrc:"A: This student is very clever.\nB: He is both clever and hardworking.",
 funFact:"聪 is a remarkable character: it contains 耳 (ear) at the top and components for eye, mouth, and heart below. To be clever in Chinese, you must have sharp ears, bright eyes, a quick tongue, and a clear mind. All four senses working together."},

{type:"mc", q:"妈妈(māma)，我(wǒ)一(yì)个(gè)人(rén)去(qù)旅行(lǚxíng)，你(nǐ)别(bié)___了(le)。",
 opts:["担心(dānxīn)","伤心(shāngxīn)","害怕(hàipà)","生气(shēngqì)"],
 ans:"担心(dānxīn)",
 hint:"Telling your mother not to feel anxious about your trip. Which word means ongoing worry or anxiety?"},

{type:"fb", s:"今天(jīntiān)是(shì)我(wǒ)的(de)生日(shēngrì)，我(wǒ)很(hěn){1}！",
 a:["开心(kāixīn)"],
 opts:["开心(kāixīn)","伤心(shāngxīn)","生气(shēngqì)","害怕(hàipà)"],
 hint:"It is your birthday. Which colloquial word means happy or delighted?",
 sSrc:"Today is my birthday, I am very {1}!"},

{type:"mc", q:"他(tā)的(de)成绩(chéngjì)这么(zhème)好(hǎo)，老师(lǎoshī)和(hé)父母(fùmǔ)都(dōu)很(hěn)___。",
 opts:["伤心(shāngxīn)","骄傲(jiāo'ào)","害怕(hàipà)","饿(è)"],
 ans:"骄傲(jiāo'ào)",
 hint:"His grades are very good. Teachers and parents both feel positive about him. Which word means proud?"},

{type:"fb", s:"我(wǒ)工作(gōngzuò)了(le)十(shí)个(gè)小时(xiǎoshí)，真(zhēn)的(de)很(hěn){1}了(le)。",
 a:["累(lèi)"],
 opts:["累(lèi)","饿(è)","开心(kāixīn)","担心(dānxīn)"],
 hint:"You worked for ten hours. Which word describes physical exhaustion?",
 sSrc:"I worked for ten hours, I am really {1}."},

{type:"mc", q:"她(tā)听到(tīngdào)这个(zhège)坏(huài)消息(xiāoxi)以后(yǐhòu)很(hěn)___，哭(kū)了(le)。",
 opts:["聪明(cōngming)","生气(shēngqì)","伤心(shāngxīn)","骄傲(jiāo'ào)"],
 ans:"伤心(shāngxīn)",
 hint:"She heard bad news and cried. Which word describes deep sadness or heartbreak?"},

{type:"fb", s:"我(wǒ)没(méi)吃(chī)早饭(zǎofàn)，现在(xiànzài)很(hěn){1}。",
 a:["饿(è)"],
 opts:["饿(è)","累(lèi)","生气(shēngqì)","害怕(hàipà)"],
 hint:"You did not eat breakfast. What are you feeling now?",
 sSrc:"I did not eat breakfast. I am very {1} now."},

{type:"match", pairs:[
  {trg:"害怕(hàipà)", src:"afraid"},
  {trg:"担心(dānxīn)", src:"worried"},
  {trg:"开心(kāixīn)", src:"happy (colloquial)"},
  {trg:"伤心(shāngxīn)", src:"sad"},
  {trg:"生气(shēngqì)", src:"angry"}
]},

{type:"mc", q:"这个(zhège)孩子(háizi)___，五(wǔ)岁(suì)就(jiù)会(huì)看书(kànshū)了(le)。",
 opts:["骄傲(jiāo'ào)","担心(dānxīn)","害怕(hàipà)","聪明(cōngming)"],
 ans:"聪明(cōngming)",
 hint:"This child can already read at age five. What character trait is being described?"},

{type:"fb", s:"他(tā)又(yòu)说(shuō)了(le)谎(huǎng)，我(wǒ)真(zhēn)的(de)很(hěn){1}。",
 a:["生气(shēngqì)"],
 opts:["生气(shēngqì)","开心(kāixīn)","聪明(cōngming)","饿(è)"],
 hint:"He lied again. You feel furious. Which word means angry?",
 sSrc:"He lied again. I am really very {1}."},

{type:"match", pairs:[
  {trg:"骄傲(jiāo'ào)", src:"proud"},
  {trg:"累(lèi)", src:"tired"},
  {trg:"饿(è)", src:"hungry"},
  {trg:"聪明(cōngming)", src:"clever"}
]},

{type:"drag_fill",
 s:"考试(kǎoshì)成绩(chéngjì)出来(chūlái)了(le)，我(wǒ)考(kǎo)得(de)很(hěn)好(hǎo)！我(wǒ)非常(fēicháng){1}，爸爸(bàba)也(yě)很(hěn){2}。",
 blanks:{"1":"开心(kāixīn)","2":"骄傲(jiāo'ào)"},
 pool:["开心(kāixīn)","骄傲(jiāo'ào)","伤心(shāngxīn)","担心(dānxīn)"],
 hint:"Exam results are out and you did well. You feel personally happy, and your father is proud of you."}
]}

]};

export default UNIT_18;
