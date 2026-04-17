// Unit 14: Experiences and the Past
// Level: B1.1 (HSK 3)
// Chinese (Mandarin) V2 format with hanzi+pinyin notation
// Vocab: 过, 以前, 以后, 刚, 一直, 记得, 忘, 经历, 变, 长大, 搬, 决定, 选择, 后悔, 终于

const UNIT_14 = {
n:14, lang:"zh", srcLang:"en", track:"v2",
title:"你去过中国吗？ Have You Been to China?", sub:"Past Experiences",
icon:"\uD83D\uDCD6", level:"B1.1", color:"#7B5EE8",
lessons:[

// === L1: The Experience Marker 过 ===
{id:"zhv2_u14l1", title:"你去过吗？ Have You Been?", icon:"\u2708\uFE0F", xp:15, board:true, steps:[
{type:"intro", title:"你去过吗？ Have You Been?",
 desc:"Learn the experience aspect marker 过, which lets you talk about things you have ever done in your life. Combined with time words like 以前 and 以后, you can narrate past and future events with precision.",
 goals:["Use 过 to talk about life experiences","Place events with 以前 (before) and 以后 (after)","Describe recent events with 刚 (just now)"]},

{type:"teach", trg:"过(guò)", src:"(experience aspect marker)", pos:"part", gender:null,
 note:"Added after a verb to mean 'have ever done.'\n去过 = have been to. 吃过 = have eaten before.",
 example:"A: 你(nǐ)去(qù)过(guò)中国(zhōngguó)吗(ma)？\nB: 去(qù)过(guò)，去(qù)过(guò)两(liǎng)次(cì)。",
 exampleSrc:"A: Have you been to China?\nB: Yes, I have been twice.",
 funFact:"过 as an experience marker is different from 了 (completion). 我吃了 means 'I ate' (a specific event). 我吃过 means 'I have eaten (that food) before' (life experience). 过 is about your overall history, not a single event."},

{type:"tip", title:"过 vs 了: Two Past Markers",
 text:"Chinese distinguishes between completed events and life experiences:\n\n了(le): Something happened (specific event)\n我(wǒ)吃(chī)了(le)。 I ate. (just now, today)\n\n过(guò): You have experienced something (in your life)\n我(wǒ)吃(chī)过(guò)。 I have eaten it before. (at some point)\n\nNegation:\n没去过 = have never been to\n没吃过 = have never eaten\n\nThe question pattern:\n你去过...吗？ = Have you ever been to...?",
 deepDive:{title:"The Philosophical Difference",
  text:"了 anchors an action in a specific moment. 过 zooms out to your entire life.\n\n我吃了中国菜 = I ate Chinese food (today, this meal).\n我吃过中国菜 = I have eaten Chinese food before (in my life).\n\nThis distinction does not exist clearly in English, where 'I ate' and 'I have eaten' blur together. Chinese makes the difference explicit with a single character. Think of 过 as meaning 'have passed through the experience of.'"}},

{type:"teach", trg:"以前(yǐqián)", src:"before / previously", pos:"noun", gender:null,
 note:"以 = using/by, 前 = front/before.\nGoes after a time or event: 三年以前 = three years ago.",
 example:"A: 你(nǐ)以前(yǐqián)住(zhù)在(zài)哪儿(nǎr)？\nB: 我(wǒ)以前(yǐqián)住(zhù)在(zài)北京(Běijīng)。",
 exampleSrc:"A: Where did you live before?\nB: I used to live in Beijing.",
 funFact:"以前 can mean 'before' (a specific event) or 'in the past' (generally). 来中国以前 = before coming to China. 以前我不会 = In the past I could not. Context makes the meaning clear."},

{type:"teach", trg:"以后(yǐhòu)", src:"after / later / in the future", pos:"noun", gender:null,
 note:"以 = using/by, 后 = back/after.\nGoes after a time or event: 吃饭以后 = after eating.",
 example:"A: 毕业(bìyè)以后(yǐhòu)你(nǐ)想(xiǎng)做(zuò)什么(shénme)？\nB: 我(wǒ)想(xiǎng)去(qù)中国(zhōngguó)。",
 exampleSrc:"A: What do you want to do after graduation?\nB: I want to go to China.",
 funFact:"以前 and 以后 are a perfect pair of opposites using the same 以 prefix. 以前 (using the front = before) and 以后 (using the back = after). Chinese time metaphors treat the past as 'in front' and the future as 'behind.'"},

{type:"teach", trg:"刚(gāng)", src:"just (now) / just recently", pos:"adv", gender:null,
 note:"First tone. Goes before the verb.\n刚来 = just arrived. 刚吃 = just ate.",
 example:"A: 你(nǐ)什么(shénme)时候(shíhou)到(dào)的(de)？\nB: 我(wǒ)刚(gāng)到(dào)。",
 exampleSrc:"A: When did you arrive?\nB: I just arrived.",
 funFact:"刚 indicates something happened very recently, often minutes ago. It is more precise than 以前 (before/past). Chinese has fine-grained time markers: 刚 (just now), 已经 (already), 以前 (before), 一直 (all along)."},

{type:"teach", trg:"一直(yìzhí)", src:"always / all along / continuously", pos:"adv", gender:null,
 note:"一 = one, 直 = straight. Literally: one straight line.\nDescribes actions that continue without interruption.",
 example:"A: 你(nǐ)一直(yìzhí)住(zhù)在(zài)这儿(zhèr)吗(ma)？\nB: 是(shì)的(de)，我(wǒ)一直(yìzhí)住(zhù)在(zài)这儿(zhèr)。",
 exampleSrc:"A: Have you always lived here?\nB: Yes, I have always lived here.",
 funFact:"一直 paints a picture of a straight, unbroken line. It implies no interruption or change. 总是 means 'always' for habitual actions, but 一直 means 'continuously without stopping.' Subtle but important difference at B1."},

{type:"mc", q:"你(nǐ)吃(chī)过(guò)北京烤鸭(Běijīng kǎoyā)吗(ma)？ What is this asking?",
 opts:["Are you eating Peking duck now?","Did you eat Peking duck yesterday?","Have you ever eaten Peking duck?","Do you want to eat Peking duck?"],
 ans:"Have you ever eaten Peking duck?",
 hint:"过 after the verb asks about lifetime experience, not a specific moment."},

{type:"match", pairs:[
  {trg:"过(guò)", src:"(experience marker)"},
  {trg:"以前(yǐqián)", src:"before / previously"},
  {trg:"以后(yǐhòu)", src:"after / later"},
  {trg:"刚(gāng)", src:"just (now)"},
  {trg:"一直(yìzhí)", src:"always / continuously"}
]},

{type:"fb", s:"我(wǒ)没(méi)去(qù){1}中国(zhōngguó)。",
 a:["过(guò)"],
 opts:["过(guò)","了(le)","吗(ma)","的(de)"],
 hint:"The speaker has never been to China in their life. Which marker indicates life experience?",
 sSrc:"I have never been to China."},

{type:"mc", q:"我(wǒ)刚(gāng)到(dào)。 When did the speaker arrive?",
 opts:["A long time ago","Yesterday","Just now","Tomorrow"],
 ans:"Just now",
 hint:"刚 indicates something happened very recently, within the last few minutes."},

{type:"fb", s:"毕业(bìyè){1}你(nǐ)想(xiǎng)做(zuò)什么(shénme)？",
 a:["以后(yǐhòu)"],
 opts:["以后(yǐhòu)","以前(yǐqián)","刚(gāng)","一直(yìzhí)"],
 hint:"The question asks about plans following graduation. Which word means 'after'?",
 sSrc:"What do you want to do {1} graduation?"},

{type:"mc", q:"他(tā)一直(yìzhí)在(zài)这儿(zhèr)工作(gōngzuò)。 What does 一直 tell us?",
 opts:["He just started working here","He sometimes works here","He has continuously worked here","He stopped working here"],
 ans:"He has continuously worked here",
 hint:"一直 means 'straight through' or 'without interruption.' The action has been ongoing."},

{type:"fb", s:"{1}我(wǒ)不(bù)会(huì)做(zuò)饭(fàn)，现在(xiànzài)会(huì)了(le)。",
 a:["以前(yǐqián)"],
 opts:["以前(yǐqián)","以后(yǐhòu)","刚(gāng)","一直(yìzhí)"],
 hint:"The speaker compares then and now. They could not cook in the past. Which word means 'before'?",
 sSrc:"{1} I could not cook, now I can."}
]},

// === L2: Memory and Change ===
{id:"zhv2_u14l2", title:"记得吗？ Do You Remember?", icon:"\uD83E\uDDE0", xp:15, board:true, steps:[
{type:"intro", title:"记得吗？ Do You Remember?",
 desc:"Learn to talk about remembering, forgetting, and how things change over time. These verbs are essential for narrating past experiences and personal growth.",
 goals:["Use 记得 (remember) and 忘 (forget)","Describe change with 变","Talk about growing up with 长大 and moving with 搬"]},

{type:"teach", trg:"记得(jìde)", src:"to remember", pos:"verb", gender:null,
 note:"记 = record/remember, 得 = (complement marker).\nWorks as a verb: 你记得吗 = Do you remember?",
 example:"A: 你(nǐ)记得(jìde)他(tā)吗(ma)？\nB: 记得(jìde)！他(tā)是(shì)我(wǒ)以前(yǐqián)的(de)老师(lǎoshī)。",
 exampleSrc:"A: Do you remember him?\nB: Yes! He was my teacher before.",
 funFact:"记 originally depicted a hand holding a brush to 'record' something. Memory and writing are linked in Chinese culture. To remember is to 'write in the mind.' 记录 means 'to record' and 日记 means 'diary.'"},

{type:"teach", trg:"忘(wàng)", src:"to forget", pos:"verb", gender:null,
 note:"Fourth tone. The opposite of 记得.\n忘了 = forgot. 别忘了 = do not forget.",
 example:"A: 你(nǐ)忘(wàng)了(le)吗(ma)？\nB: 对不起(duìbuqǐ)，我(wǒ)忘(wàng)了(le)！",
 exampleSrc:"A: Did you forget?\nB: Sorry, I forgot!",
 funFact:"忘 has the heart radical (心) at the bottom, plus 亡 (lost/dead) on top. Something that 'dies in the heart' is forgotten. Many emotion and thought words contain the heart radical, because Chinese sees the heart as the seat of both feeling and memory."},

{type:"teach", trg:"经历(jīnglì)", src:"experience / to experience", pos:"noun", gender:null,
 note:"经 = pass through, 历 = experience/history.\nWorks as both a noun and a verb.",
 example:"A: 这(zhè)是(shì)一(yí)个(gè)很(hěn)好(hǎo)的(de)经历(jīnglì)。\nB: 是(shì)的(de)，我(wǒ)一直(yìzhí)记得(jìde)。",
 exampleSrc:"A: This was a very good experience.\nB: Yes, I have always remembered it.",
 funFact:"经历 and 过 share the concept of 'passing through.' The experience marker 过 literally means 'to pass.' An 经历 is something you 'passed through.' Both words frame experience as a journey you survived."},

{type:"teach", trg:"变(biàn)", src:"to change / to become", pos:"verb", gender:null,
 note:"Fourth tone. Describes transformation or change.\n变好 = become better. 变大 = become bigger.",
 example:"A: 这(zhè)个(gè)地方(dìfang)变(biàn)了(le)很(hěn)多(duō)。\nB: 是(shì)的(de)，以前(yǐqián)不(bù)是(shì)这样(zhèyàng)。",
 exampleSrc:"A: This place has changed a lot.\nB: Yes, it was not like this before.",
 funFact:"变 is a powerful verb that covers English 'change,' 'become,' and 'transform.' 变化 (biànhuà) is the noun form meaning 'change.' Chinese philosophy values 变 deeply. The Book of Changes (易经) is one of the oldest texts."},

{type:"teach", trg:"长大(zhǎngdà)", src:"to grow up", pos:"verb", gender:null,
 note:"长 = grow (zhǎng), 大 = big.\nLiterally: grow big. Used for people growing up.",
 example:"A: 你(nǐ)在(zài)哪儿(nǎr)长大(zhǎngdà)的(de)？\nB: 我(wǒ)在(zài)上海(Shànghǎi)长大(zhǎngdà)的(de)。",
 exampleSrc:"A: Where did you grow up?\nB: I grew up in Shanghai.",
 funFact:"长 has two pronunciations: zhǎng (grow) and cháng (long). In 长大, it means 'to grow.' In 很长 (very long), it describes length. Context and tone distinguish the meanings."},

{type:"teach", trg:"搬(bān)", src:"to move (house)", pos:"verb", gender:null,
 note:"First tone. Specifically for moving residence or heavy objects.\n搬家 = move house.",
 example:"A: 你(nǐ)什么(shénme)时候(shíhou)搬(bān)家(jiā)？\nB: 下(xià)个(gè)月(yuè)搬(bān)。",
 exampleSrc:"A: When are you moving?\nB: Next month.",
 funFact:"搬 has the hand radical (扌) on the left, showing it involves physical effort. Moving house in Chinese culture involves many traditions: checking lucky dates, carrying a rice cooker first (symbolizing food), and lighting the stove immediately."},

{type:"mc", q:"你(nǐ)记得(jìde)他(tā)吗(ma)？ What is this asking?",
 opts:["Do you know him?","Do you remember him?","Do you like him?","Do you see him?"],
 ans:"Do you remember him?",
 hint:"记得 means 'to ___.' The question asks whether someone is in your memory."},

{type:"match", pairs:[
  {trg:"记得(jìde)", src:"to remember"},
  {trg:"忘(wàng)", src:"to forget"},
  {trg:"变(biàn)", src:"to change"},
  {trg:"长大(zhǎngdà)", src:"to grow up"},
  {trg:"搬(bān)", src:"to move (house)"}
]},

{type:"fb", s:"对不起(duìbuqǐ)，我(wǒ){1}了(le)。",
 a:["忘(wàng)"],
 opts:["忘(wàng)","记得(jìde)","变(biàn)","搬(bān)"],
 hint:"The speaker apologizes because they failed to remember something. Which verb means 'to forget'?",
 sSrc:"Sorry, I {1}."},

{type:"mc", q:"这(zhè)个(gè)地方(dìfang)变(biàn)了(le)很(hěn)多(duō)。 What happened?",
 opts:["The place is the same","The place has changed a lot","The place is gone","The place is new"],
 ans:"The place has changed a lot",
 hint:"变了 means something transformed. 很多 means 'a ___.' The ___ is significantly different."},

{type:"fb", s:"我(wǒ)在(zài)北京(Běijīng){1}的(de)。",
 a:["长大(zhǎngdà)"],
 opts:["长大(zhǎngdà)","搬(bān)","变(biàn)","忘(wàng)"],
 hint:"The speaker spent their childhood in Beijing. Which phrase means 'grew up'?",
 sSrc:"I {1} in Beijing."},

{type:"mc", q:"她(tā)下(xià)个(gè)月(yuè)搬(bān)家(jiā)。 What is she doing next month?",
 opts:["Buying a house","Moving house","Cleaning the house","Visiting home"],
 ans:"Moving house",
 hint:"搬家 means 'to move ___.' The action is planned for next month."},

{type:"fb", s:"这(zhè)是(shì)一(yí)个(gè)很(hěn)好(hǎo)的(de){1}。",
 a:["经历(jīnglì)"],
 opts:["经历(jīnglì)","记得(jìde)","变(biàn)","以前(yǐqián)"],
 hint:"The speaker describes something as a good ___. Which noun means 'experience'?",
 sSrc:"This was a very good {1}."}
]},

// === L3: Decisions and Feelings ===
{id:"zhv2_u14l3", title:"我决定了 I Have Decided", icon:"\u2705", xp:15, board:true, steps:[
{type:"intro", title:"我决定了 I Have Decided",
 desc:"Learn to express decisions, choices, regret, and finality. These words let you narrate personal stories and reflect on the past.",
 goals:["Express decisions with 决定 and choices with 选择","Talk about regret with 后悔","Celebrate outcomes with 终于 (finally)"]},

{type:"teach", trg:"决定(juédìng)", src:"to decide / decision", pos:"verb", gender:null,
 note:"决 = resolve, 定 = fix/settle.\nWorks as verb and noun. 我决定了 = I have decided.",
 example:"A: 你(nǐ)决定(juédìng)了(le)吗(ma)？\nB: 我(wǒ)决定(juédìng)去(qù)中国(zhōngguó)。",
 exampleSrc:"A: Have you decided?\nB: I have decided to go to China.",
 funFact:"决 contains the water radical (氵) and originally meant water bursting through a dam. A decision 'breaks through' indecision just as water breaks through barriers. Once the dam breaks, there is no going back."},

{type:"teach", trg:"选择(xuǎnzé)", src:"to choose / choice", pos:"verb", gender:null,
 note:"选 = select, 择 = pick.\nWorks as verb and noun. 你的选择 = your choice.",
 example:"A: 你(nǐ)选择(xuǎnzé)哪(nǎ)个(gè)？\nB: 我(wǒ)选择(xuǎnzé)这(zhè)个(gè)。",
 exampleSrc:"A: Which one do you choose?\nB: I choose this one.",
 funFact:"选 originally involved picking soldiers. The character contains the radical for movement (辶), suggesting going through options. Modern Chinese uses 选择 for any choice, from picking lunch to choosing a career."},

{type:"teach", trg:"后悔(hòuhuǐ)", src:"to regret", pos:"verb", gender:null,
 note:"后 = after/behind, 悔 = regret.\nLiterally: looking back with regret.",
 example:"A: 你(nǐ)后悔(hòuhuǐ)吗(ma)？\nB: 不(bù)后悔(hòuhuǐ)，这(zhè)是(shì)好(hǎo)的(de)经历(jīnglì)。",
 exampleSrc:"A: Do you regret it?\nB: No regrets, it was a good experience.",
 funFact:"悔 contains the heart radical (忄), linking regret to emotion. 后悔 literally means 'afterward-regret,' emphasizing that regret only comes after the fact. The Chinese saying 后悔也来不及了 means 'it is too late for regrets.'"},

{type:"teach", trg:"终于(zhōngyú)", src:"finally / at last", pos:"adv", gender:null,
 note:"终 = end, 于 = at.\nExpresses relief or satisfaction when something long-awaited happens.",
 example:"A: 他(tā)终于(zhōngyú)到(dào)了(le)！\nB: 我们(wǒmen)等(děng)了(le)很(hěn)长(cháng)时间(shíjiān)。",
 exampleSrc:"A: He finally arrived!\nB: We waited a very long time.",
 funFact:"终于 always carries emotion. It implies the speaker waited, hoped, or struggled for a long time. Saying 终于 is like exhaling with relief. Without the emotional weight, Chinese would use 最后 (zuìhòu, in the end) instead."},

{type:"mc", q:"我(wǒ)决定(juédìng)去(qù)中国(zhōngguó)。 What has the speaker done?",
 opts:["Decided to go to China","Chosen not to go to China","Regretted going to China","Finally arrived in China"],
 ans:"Decided to go to China",
 hint:"决定 means 'to decide.' The speaker has made up their mind about going."},

{type:"match", pairs:[
  {trg:"决定(juédìng)", src:"to decide"},
  {trg:"选择(xuǎnzé)", src:"to choose"},
  {trg:"后悔(hòuhuǐ)", src:"to regret"},
  {trg:"终于(zhōngyú)", src:"finally / at last"},
  {trg:"经历(jīnglì)", src:"experience"}
]},

{type:"fb", s:"你(nǐ){1}哪(nǎ)个(gè)？",
 a:["选择(xuǎnzé)"],
 opts:["选择(xuǎnzé)","决定(juédìng)","后悔(hòuhuǐ)","终于(zhōngyú)"],
 hint:"The question asks which one you pick from several options. Which verb means 'to choose'?",
 sSrc:"Which one do you {1}?"},

{type:"mc", q:"他(tā)终于(zhōngyú)到(dào)了(le)！ How does the speaker feel?",
 opts:["Angry that he arrived","Relieved he finally arrived","Surprised he left","Sad he arrived"],
 ans:"Relieved he finally arrived",
 hint:"终于 always carries a feeling of relief or satisfaction after a long wait."},

{type:"fb", s:"我(wǒ)不(bù){1}，这(zhè)是(shì)好(hǎo)的(de)经历(jīnglì)。",
 a:["后悔(hòuhuǐ)"],
 opts:["后悔(hòuhuǐ)","决定(juédìng)","选择(xuǎnzé)","忘(wàng)"],
 hint:"The speaker says they do not feel regret. Which verb means 'to regret'?",
 sSrc:"I do not {1}, it was a good experience."},

{type:"mc", q:"你(nǐ)决定(juédìng)了(le)吗(ma)？ vs 你(nǐ)选择(xuǎnzé)了(le)吗(ma)？ What is the difference?",
 opts:["They mean the same thing","决定 is about resolving, 选择 is about picking from options","选择 is more formal","决定 is about regret"],
 ans:"决定 is about resolving, 选择 is about picking from options",
 hint:"决定 means making a firm resolution. 选择 means selecting one thing from multiple ___."},

{type:"fb", s:"我(wǒ)等(děng)了(le)很(hěn)长(cháng)时间(shíjiān)，他(tā){1}来(lái)了(le)。",
 a:["终于(zhōngyú)"],
 opts:["终于(zhōngyú)","刚(gāng)","一直(yìzhí)","以前(yǐqián)"],
 hint:"After waiting a long time, he arrived at last. Which word expresses 'finally' with relief?",
 sSrc:"I waited a very long time, he {1} came."}
]},

// === L4: Unit Review ===
{id:"zhv2_u14l4", title:"回忆 Memories", icon:"\uD83C\uDF1F", xp:15, board:true, steps:[
{type:"intro", title:"回忆 Memories",
 desc:"Review all the vocabulary for talking about past experiences, time, memory, change, and decisions. Combine these words to tell stories about your life.",
 goals:["Use 过 and time markers correctly","Recall all memory and change vocabulary","Build complex sentences about past experiences"]},

{type:"match", pairs:[
  {trg:"过(guò)", src:"(experience marker)"},
  {trg:"以前(yǐqián)", src:"before / previously"},
  {trg:"以后(yǐhòu)", src:"after / later"},
  {trg:"刚(gāng)", src:"just (now)"},
  {trg:"一直(yìzhí)", src:"always / continuously"}
]},

{type:"mc", q:"我(wǒ)以前(yǐqián)住(zhù)在(zài)北京(Běijīng)，后来(hòulái)搬(bān)到(dào)了(le)上海(Shànghǎi)。 What happened?",
 opts:["The speaker lives in Beijing now","The speaker moved from Beijing to Shanghai","The speaker has never been to Shanghai","The speaker is moving to Beijing"],
 ans:"The speaker moved from Beijing to Shanghai",
 hint:"以前 marks the previous situation, and 搬到了 shows the move already happened."},

{type:"fb", s:"你(nǐ)去(qù){1}日本(Rìběn)吗(ma)？",
 a:["过(guò)"],
 opts:["过(guò)","了(le)","吗(ma)","的(de)"],
 hint:"The question asks about lifetime experience. Which marker goes after the verb for 'have ever done'?",
 sSrc:"Have you ever been to Japan?"},

{type:"mc", q:"她(tā)忘(wàng)了(le)带(dài)书(shū)。 What happened?",
 opts:["She remembered her book","She forgot to bring her book","She decided to bring her book","She chose a book"],
 ans:"She forgot to bring her book",
 hint:"忘了 means '___.' The object of forgetting is 带书 (to ___ the ___)."},

{type:"fb", s:"这(zhè)个(gè)地方(dìfang){1}了(le)很(hěn)多(duō)，我(wǒ)差不多(chàbuduō)不(bú)认识(rènshi)了(le)。",
 a:["变(biàn)"],
 opts:["变(biàn)","搬(bān)","忘(wàng)","长大(zhǎngdà)"],
 hint:"The place is so different the speaker barely recognizes it. Which verb means 'to change'?",
 sSrc:"This place has {1} a lot, I almost do not recognize it."},

{type:"match", pairs:[
  {trg:"记得(jìde)", src:"to remember"},
  {trg:"忘(wàng)", src:"to forget"},
  {trg:"变(biàn)", src:"to change"},
  {trg:"长大(zhǎngdà)", src:"to grow up"},
  {trg:"搬(bān)", src:"to move (house)"}
]},

{type:"mc", q:"我(wǒ)决定(juédìng)不(bù)后悔(hòuhuǐ)。 What is the speaker saying?",
 opts:["I decided to regret it","I decided not to regret it","I regret the decision","I cannot decide"],
 ans:"I decided not to regret it",
 hint:"决定 is the main verb (to decide), and 不后悔 (not ___) is what was ___."},

{type:"fb", s:"我(wǒ)在(zài)上海(Shànghǎi){1}的(de)。",
 a:["长大(zhǎngdà)"],
 opts:["长大(zhǎngdà)","搬(bān)","变(biàn)","决定(juédìng)"],
 hint:"The speaker spent their childhood in Shanghai. Which phrase means 'grew up'?",
 sSrc:"I {1} in Shanghai."},

{type:"mc", q:"他(tā)刚(gāng)搬(bān)到(dào)这儿(zhèr)。 When did he move here?",
 opts:["A long time ago","Just recently","Next month","He has not moved yet"],
 ans:"Just recently",
 hint:"刚 indicates something happened very ___. The move just took place."},

{type:"fb", s:"我(wǒ){1}来(lái)到(dào)了(le)中国(zhōngguó)！",
 a:["终于(zhōngyú)"],
 opts:["终于(zhōngyú)","刚(gāng)","一直(yìzhí)","以前(yǐqián)"],
 hint:"The speaker has been wanting to come to China for a long time. Which word expresses 'at last'?",
 sSrc:"I have {1} arrived in China!"},

{type:"match", pairs:[
  {trg:"决定(juédìng)", src:"to decide"},
  {trg:"选择(xuǎnzé)", src:"to choose"},
  {trg:"后悔(hòuhuǐ)", src:"to regret"},
  {trg:"终于(zhōngyú)", src:"finally"},
  {trg:"经历(jīnglì)", src:"experience"}
]},

{type:"mc", q:"虽然(suīrán)很(hěn)难(nán)，但是(dànshì)我(wǒ)不(bù)后悔(hòuhuǐ)这(zhè)个(gè)选择(xuǎnzé)。 How does the speaker feel?",
 opts:["Regretful about a hard choice","Satisfied with a hard choice","Angry about an easy choice","Unsure about the choice"],
 ans:"Satisfied with a hard choice",
 hint:"虽然...但是 acknowledges difficulty. 不后悔 means no regret. The speaker stands by their decision."},

{type:"fb", s:"你(nǐ){1}以前(yǐqián)的(de)老师(lǎoshī)吗(ma)？",
 a:["记得(jìde)"],
 opts:["记得(jìde)","忘(wàng)","变(biàn)","搬(bān)"],
 hint:"Do you recall your former teacher? Which verb means 'to remember'?",
 sSrc:"Do you {1} your previous teacher?"}
]}

]};

export default UNIT_14;
