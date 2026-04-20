// Unit 10: Work and Study
// Level: A2.2 (HSK 2)
// Chinese (Mandarin) V2 format with hanzi+pinyin notation

const UNIT_10 = {
n:10, lang:"zh", srcLang:"en", track:"v2",
title:"工作和学习 Work and Study", sub:"Jobs and Education",
icon:"💼", level:"A2.2", color:"#7B5EE8",
lessons:[

// ─── L1: Workplace Vocabulary ───
{id:"zhv2_u10l1", title:"At Work", icon:"🏢", xp:15, board:true, steps:[
{type:"intro", title:"At Work",
 desc:"Learn essential vocabulary for talking about work and jobs. By the end of this lesson, you can describe what you do and talk about being busy.",
 goals:["Learn key work-related nouns and verbs","Describe daily work activities","Use 忙 to talk about being busy"]},

{type:"teach", trg:"工作(gōngzuò)", src:"work / job", pos:"noun", gender:null,
 note:"Functions as both a noun (a job) and a verb (to work).\nVery common in daily conversation.",
 example:"A: 你(nǐ)的(de)工作(gōngzuò)是(shì)什么(shénme)？\nB: 我(wǒ)的(de)工作(gōngzuò)是(shì)老师(lǎoshī)。",
 exampleSrc:"A: What is your job?\nB: My job is a teacher.",
 funFact:"工 means 'work/labor' and 作 means 'to make/to do.' Together they cover both the action and the position. Chinese loves these two-character compound words."},

{type:"teach", trg:"忙(máng)", src:"busy", pos:"adj", gender:null,
 note:"Second tone (rising). Describes being occupied with tasks.\nOften used with 很(hěn) 'very': 很忙.",
 example:"A: 你(nǐ)忙(máng)吗(ma)？\nB: 我(wǒ)很(hěn)忙(máng)！",
 exampleSrc:"A: Are you busy?\nB: I am very busy!",
 funFact:"The character 忙 combines the heart radical 忄 with 亡 (to perish). When you are so busy your heart is dying, that is 忙. Ancient Chinese humor at its finest."},

{type:"teach", trg:"小时(xiǎoshí)", src:"hour", pos:"noun", gender:null,
 note:"Literally: small time. Used with numbers to express duration.\n两(liǎng)个(gè)小时 = two hours.",
 example:"A: 你(nǐ)每(měi)天(tiān)工作(gōngzuò)几(jǐ)个(gè)小时(xiǎoshí)？\nB: 我(wǒ)工作(gōngzuò)八(bā)个(gè)小时(xiǎoshí)。",
 exampleSrc:"A: How many hours do you work every day?\nB: I work eight hours.",
 funFact:"In ancient China, the day was divided into 12 double-hours called 时辰(shíchen). The modern 小时 (small time) was coined to distinguish Western-style single hours from the old system."},

{type:"teach", trg:"每(měi)", src:"every / each", pos:"pron", gender:null,
 note:"Placed before the noun it modifies. No measure word needed with some nouns.\n每天 = every day. 每个人 = everyone.",
 example:"A: 你(nǐ)每(měi)天(tiān)都(dōu)工作(gōngzuò)吗(ma)？\nB: 不(bù)是(shì)，每(měi)周(zhōu)工作(gōngzuò)五(wǔ)天(tiān)。",
 exampleSrc:"A: Do you work every day?\nB: No, I work five days every week.",
 funFact:"每 originally depicted a woman (母 = mother) with an ornamental hairpin on top. The meaning evolved from 'each mother in a family' to the general concept of 'every/each.'"},

{type:"teach", trg:"开始(kāishǐ)", src:"to begin / to start", pos:"verb", gender:null,
 note:"Can be used as a verb or a noun (the beginning).\nOften paired with a time: 九点开始 = starts at nine.",
 example:"A: 工作(gōngzuò)几(jǐ)点(diǎn)开始(kāishǐ)？\nB: 九(jiǔ)点(diǎn)开始(kāishǐ)。",
 exampleSrc:"A: What time does work start?\nB: It starts at nine o'clock.",
 funFact:"开 means 'to open' and 始 means 'beginning.' To start something is to 'open the beginning.' This pairing reflects how Chinese builds meaning by combining simple concepts."},

{type:"tip", title:"每 (every) + Time Words",
 text:"每 pairs naturally with time words to express routine:\n\n每天(měi tiān) = every day\n每周(měi zhōu) = every week\n每个(měi gè)月(yuè) = every month\n每年(měi nián) = every year\n\nNotice: 每天 and 每年 do not need 个, but 每个月 does. When in doubt, add 个.\n\nTo emphasize 'all/every single one,' add 都(dōu) after the subject:\n我(wǒ)每(měi)天(tiān)都(dōu)工作(gōngzuò)。\nI work every single day.",
 deepDive:{title:"都 (dou) as an Emphasizer",
  text:"都 is one of the most versatile words in Chinese. With 每, it emphasizes that something applies to every instance without exception.\n\nWithout 都: 我每天工作。 I work every day. (neutral statement)\nWith 都: 我每天都工作。 I work every single day. (emphasis, no exceptions)\n\n都 always comes AFTER the subject or topic it refers to, never before. This is a common mistake for learners."}},

{type:"mc", q:"工作(gōngzuò) can function as:",
 opts:["Only a noun","Only a verb","Both a noun and a verb","An adjective"],
 ans:"Both a noun and a verb",
 hint:"Consider the different ways this word is used: as a thing you have, and an action you do."},

{type:"match", pairs:[
  {trg:"工作(gōngzuò)", src:"work / job"},
  {trg:"忙(máng)", src:"busy"},
  {trg:"小时(xiǎoshí)", src:"hour"},
  {trg:"每(měi)", src:"every / each"},
  {trg:"开始(kāishǐ)", src:"to begin / to start"}
]},

{type:"fb", s:"你(nǐ){1}吗(ma)？",
 a:["忙(máng)"],
 opts:["忙(máng)","工作(gōngzuò)","开始(kāishǐ)","小时(xiǎoshí)"],
 hint:"Which adjective describes someone who has too many tasks and no free time?",
 sSrc:"Are you {1}?"},

{type:"mc", q:"我(wǒ)每(měi)天(tiān)工作(gōngzuò)八(bā)个(gè)小时(xiǎoshí)。 What does this mean?",
 opts:["I start work at eight o'clock","I work eight hours every day","I am busy eight days a week","I have eight jobs"],
 ans:"I work eight hours every day",
 hint:"每天 tells you the frequency. 个小时 tells you the duration. What does the number specify?"},

{type:"fb", s:"工作(gōngzuò)九(jiǔ)点(diǎn){1}。",
 a:["开始(kāishǐ)"],
 opts:["开始(kāishǐ)","忙(máng)","工作(gōngzuò)","每(měi)"],
 hint:"Which verb means something is about to commence or get underway?",
 sSrc:"Work {1} at nine o'clock."},

{type:"mc", q:"The character 忙(máng) contains the heart radical. Why?",
 opts:["Because busy people have big hearts","Because being busy affects your emotional state","Because it sounds like 'heart' in Chinese","Because it was originally a medical term"],
 ans:"Because being busy affects your emotional state",
 hint:"The heart radical appears in many characters related to feelings and mental states in Chinese."}
]},

// ─── L2: School Life ───
{id:"zhv2_u10l2", title:"School Life", icon:"🏫", xp:15, board:true, steps:[
{type:"intro", title:"School Life",
 desc:"Explore the vocabulary of education. Learn the words for teacher, student, classmate, and everything related to learning in Chinese.",
 goals:["Name key people in a school setting","Talk about classes and lessons","Use 学习 to describe studying"]},

{type:"teach", trg:"学习(xuéxí)", src:"to study / to learn", pos:"verb", gender:null,
 note:"The formal/general word for studying. Used for any type of learning.\n学 alone also means 'to learn.'",
 example:"A: 你(nǐ)在(zài)学习(xuéxí)什么(shénme)？\nB: 我(wǒ)在(zài)学习(xuéxí)中文(zhōngwén)。",
 exampleSrc:"A: What are you studying?\nB: I am studying Chinese.",
 funFact:"学 depicts a child (子) under two hands learning from above, with 冖 representing a roof. The idea: a child in a house being taught by two guiding hands. Education as shelter and guidance."},

{type:"teach", trg:"老师(lǎoshī)", src:"teacher", pos:"noun", gender:null,
 note:"A respectful title. Used for teachers at all levels.\nAlso used for doctors, lawyers, and experts as a sign of respect.",
 example:"A: 老师(lǎoshī)好(hǎo)！\nB: 同学们(tóngxuémen)好(hǎo)！",
 exampleSrc:"A: Hello, teacher!\nB: Hello, students!",
 funFact:"老 means 'old/venerable' and 师 means 'master.' The title reflects Confucian values: teachers rank alongside parents in respect. The saying goes: one day your teacher, a lifetime your parent."},

{type:"teach", trg:"学生(xuéshēng)", src:"student", pos:"noun", gender:null,
 note:"学 = study + 生 = life/person. A 'study-person.'\nCovers students at any level from primary school to university.",
 example:"A: 你(nǐ)是(shì)学生(xuéshēng)吗(ma)？\nB: 是(shì)的(de)，我(wǒ)是(shì)大学(dàxué)学生(xuéshēng)。",
 exampleSrc:"A: Are you a student?\nB: Yes, I am a university student.",
 funFact:"In Chinese, you become a 学生 the moment you start learning anything. Even an 80-year-old attending a calligraphy class is a 学生. The concept is lifelong, not age-bound."},

{type:"teach", trg:"同学(tóngxué)", src:"classmate", pos:"noun", gender:null,
 note:"同 = same + 学 = study. People who study together.\nAlso used as a general address: 'fellow student.'",
 example:"A: 她(tā)是(shì)你(nǐ)的(de)同学(tóngxué)吗(ma)？\nB: 是(shì)的(de)，我们(wǒmen)是(shì)同学(tóngxué)。",
 exampleSrc:"A: Is she your classmate?\nB: Yes, we are classmates.",
 funFact:"Chinese has a whole family of 同 compounds: 同事(tóngshì) = colleague, 同学 = classmate, 同伴(tóngbàn) = companion. The 同 always means 'same/together.'"},

{type:"teach", trg:"课(kè)", src:"class / lesson", pos:"noun", gender:null,
 note:"Refers to a scheduled class or lesson period.\n上课(shàng kè) = to attend class. 下课(xià kè) = class is over.",
 example:"A: 你(nǐ)今天(jīntiān)有(yǒu)几(jǐ)节(jié)课(kè)？\nB: 我(wǒ)有(yǒu)三(sān)节(jié)课(kè)。",
 exampleSrc:"A: How many classes do you have today?\nB: I have three classes.",
 funFact:"上课 literally means 'go up to class' and 下课 means 'go down from class.' Chinese uses 上/下 (up/down) for starting and ending many activities: 上班/下班 (start/end work) follows the same pattern."},

{type:"tip", title:"上 and 下 with Activities",
 text:"Chinese uses 上(shàng) and 下(xià) to mark the start and end of activities:\n\n上课(shàng kè) = class starts / attend class\n下课(xià kè) = class ends / leave class\n\n上班(shàng bān) = go to work / start work\n下班(xià bān) = get off work / finish work\n\nThink of 上 as 'entering into' an activity and 下 as 'stepping out of' it.",
 deepDive:{title:"The Logic Behind 上 and 下",
  text:"This up/down metaphor extends throughout Chinese:\n\n上车(shàng chē) = get on a vehicle\n下车(xià chē) = get off a vehicle\n上网(shàng wǎng) = go online (get on the net)\n下线(xià xiàn) = go offline (get off the line)\n\nThe pattern is consistent: 上 = engage/enter, 下 = disengage/exit. Once you see this pattern, you can predict many compound words."}},

{type:"mc", q:"What does 同学(tóngxué) literally mean?",
 opts:["Old study","Same study","New student","Good teacher"],
 ans:"Same study",
 hint:"Look at the two characters individually: 同 and 学. What concept does each one express?"},

{type:"match", pairs:[
  {trg:"学习(xuéxí)", src:"to study"},
  {trg:"老师(lǎoshī)", src:"teacher"},
  {trg:"学生(xuéshēng)", src:"student"},
  {trg:"同学(tóngxué)", src:"classmate"},
  {trg:"课(kè)", src:"class / lesson"}
]},

{type:"fb", s:"我(wǒ)在(zài){1}中文(zhōngwén)。",
 a:["学习(xuéxí)"],
 opts:["学习(xuéxí)","工作(gōngzuò)","开始(kāishǐ)","忙(máng)"],
 hint:"Which verb describes the act of gaining knowledge or skills?",
 sSrc:"I am {1} Chinese."},

{type:"mc", q:"老师(lǎoshī) can be used to address:",
 opts:["Only primary school teachers","Only university professors","Teachers at all levels, plus experts as a sign of respect","Only female teachers"],
 ans:"Teachers at all levels, plus experts as a sign of respect",
 hint:"This title reflects deep Confucian ___ and extends well beyond the classroom."},

{type:"fb", s:"你(nǐ)今天(jīntiān)有(yǒu)几(jǐ)节(jié){1}？",
 a:["课(kè)"],
 opts:["课(kè)","学生(xuéshēng)","老师(lǎoshī)","同学(tóngxué)"],
 hint:"Which noun refers to a scheduled period of instruction?",
 sSrc:"How many {1} do you have today?"},

{type:"mc", q:"下课(xià kè) means:",
 opts:["Go to class","Class is over","Skip class","Good class"],
 ans:"Class is over",
 hint:"下 means 'down' or 'exit from.' Combined with class, it signals the end of the activity."},

{type:"fb", s:"{1}好(hǎo)！今天(jīntiān)我们(wǒmen)学习(xuéxí)中文(zhōngwén)。",
 a:["老师(lǎoshī)"],
 opts:["老师(lǎoshī)","学生(xuéshēng)","同学(tóngxué)","工作(gōngzuò)"],
 hint:"Students greet this person at the start of class as a sign of respect.",
 sSrc:"{1}, hello! Today we study Chinese."}
]},

// ─── L3: Exams and Questions ───
{id:"zhv2_u10l3", title:"Exams and Questions", icon:"📝", xp:15, board:true, steps:[
{type:"intro", title:"Exams and Questions",
 desc:"Learn how to talk about tests, ask questions, and describe reading and writing in Chinese. Essential vocabulary for any academic setting.",
 goals:["Discuss exams and test-taking","Use 问题, 回答, 写, and 读","Ask and answer questions about school"]},

{type:"teach", trg:"考试(kǎoshì)", src:"exam / test", pos:"noun", gender:null,
 note:"Both a noun (the exam) and a verb (to take an exam).\n考 = to test. 试 = to try.",
 example:"A: 明天(míngtiān)有(yǒu)考试(kǎoshì)吗(ma)？\nB: 有(yǒu)，我(wǒ)很(hěn)忙(máng)！",
 exampleSrc:"A: Is there an exam tomorrow?\nB: Yes, I am very busy!",
 funFact:"In ancient China, the imperial exam system (科举 kējǔ) lasted over 1,300 years. Millions competed for just a few government positions. The modern word 考试 carries echoes of that intense tradition."},

{type:"teach", trg:"问题(wèntí)", src:"question / problem", pos:"noun", gender:null,
 note:"问 = to ask + 题 = topic/subject. Covers both 'question' and 'problem.'\nContext determines which meaning: exam context = question, life context = problem.",
 example:"A: 你(nǐ)有(yǒu)问题(wèntí)吗(ma)？\nB: 我(wǒ)有(yǒu)一(yí)个(gè)问题(wèntí)。",
 exampleSrc:"A: Do you have a question?\nB: I have one question.",
 funFact:"没问题(méi wèntí) is one of the most useful phrases in Chinese. It means 'no problem' and works as a confident 'sure thing' or 'you got it.' You will hear it constantly."},

{type:"teach", trg:"回答(huídá)", src:"to answer / to reply", pos:"verb", gender:null,
 note:"回 = to return + 答 = to respond. Literally: return a response.\nAlso works as a noun: the answer.",
 example:"A: 请(qǐng)回答(huídá)这(zhè)个(gè)问题(wèntí)。\nB: 好(hǎo)的(de)。",
 exampleSrc:"A: Please answer this question.\nB: Okay.",
 funFact:"回 originally depicted a whirlpool turning back on itself. The idea of 'returning' extends to conversation: you send words back to the person who asked."},

{type:"teach", trg:"写(xiě)", src:"to write", pos:"verb", gender:null,
 note:"Third tone. A fundamental literacy verb.\nUsed for writing characters, essays, and anything put to paper.",
 example:"A: 你(nǐ)会(huì)写(xiě)中文(zhōngwén)吗(ma)？\nB: 我(wǒ)会(huì)写(xiě)一(yì)点(diǎn)。",
 exampleSrc:"A: Can you write Chinese?\nB: I can write a little.",
 funFact:"Writing Chinese characters is considered an art form. Calligraphy (书法 shūfǎ) has been practiced for over 3,000 years. Even today, good handwriting is highly admired and reflects one's education."},

{type:"teach", trg:"读(dú)", src:"to read (aloud)", pos:"verb", gender:null,
 note:"Second tone (rising). Specifically means reading aloud or studying by reading.\nAlso means 'to attend' (a school).",
 example:"A: 请(qǐng)读(dú)这(zhè)个(gè)句子(jùzi)。\nB: 我(wǒ)每(měi)天(tiān)学习(xuéxí)中文(zhōngwén)。",
 exampleSrc:"A: Please read this sentence aloud.\nB: I study Chinese every day.",
 funFact:"读 carries the idea of vocalized reading. In ancient China, scholars memorized texts by reading them aloud repeatedly. The practice is called 朗读(lǎngdú) and is still a core part of Chinese education."},

{type:"teach", trg:"教(jiāo)", src:"to teach", pos:"verb", gender:null,
 note:"First tone when it means 'to teach.' Fourth tone (jiào) when used in 教室(jiàoshì) 'classroom.'\nThe tone changes the meaning!",
 example:"A: 谁(shéi)教(jiāo)你们(nǐmen)中文(zhōngwén)？\nB: 王(Wáng)老师(lǎoshī)教(jiāo)我们(wǒmen)。",
 exampleSrc:"A: Who teaches you Chinese?\nB: Teacher Wang teaches us.",
 funFact:"教 is one of the oldest characters in Chinese, found on oracle bones from 3,000 years ago. The right side shows a hand holding a stick, the left shows a child. Teaching was quite literal back then."},

{type:"mc", q:"问题(wèntí) can mean both 'question' and:",
 opts:["answer","teacher","problem","exam"],
 ans:"problem",
 hint:"This word covers two related concepts. In everyday life, it often refers to a difficulty or issue."},

{type:"match", pairs:[
  {trg:"考试(kǎoshì)", src:"exam / test"},
  {trg:"问题(wèntí)", src:"question / problem"},
  {trg:"回答(huídá)", src:"to answer"},
  {trg:"写(xiě)", src:"to write"},
  {trg:"读(dú)", src:"to read (aloud)"},
  {trg:"教(jiāo)", src:"to teach"}
]},

{type:"fb", s:"请(qǐng){1}这(zhè)个(gè)问题(wèntí)。",
 a:["回答(huídá)"],
 opts:["回答(huídá)","写(xiě)","读(dú)","考试(kǎoshì)"],
 hint:"Which verb means to provide a response to something that was asked?",
 sSrc:"Please {1} this question."},

{type:"mc", q:"你(nǐ)会(huì)写(xiě)中文(zhōngwén)吗(ma)？ What is being asked?",
 opts:["Can you speak Chinese?","Can you write Chinese?","Can you read Chinese?","Do you like Chinese?"],
 ans:"Can you write Chinese?",
 hint:"会 indicates ability. The verb after it describes putting characters to paper."},

{type:"fb", s:"明天(míngtiān)有(yǒu){1}，我(wǒ)很(hěn)忙(máng)。",
 a:["考试(kǎoshì)"],
 opts:["考试(kǎoshì)","问题(wèntí)","课(kè)","工作(gōngzuò)"],
 hint:"Which word refers to a formal assessment of knowledge, usually taken at school?",
 sSrc:"There is a {1} tomorrow, I am very busy."},

{type:"mc", q:"教(jiāo) changes meaning based on tone. First tone means 'to teach.' What happens with fourth tone?",
 opts:["It means 'to learn'","It is used in compound words like 教室 (classroom)","It means 'to test'","It becomes a noun meaning 'education'"],
 ans:"It is used in compound words like 教室 (classroom)",
 hint:"The fourth-tone version appears in a ___ word for the room where learning happens."},

{type:"fb", s:"王(Wáng)老师(lǎoshī){1}我们(wǒmen)中文(zhōngwén)。",
 a:["教(jiāo)"],
 opts:["教(jiāo)","学习(xuéxí)","写(xiě)","读(dú)"],
 hint:"Which verb describes the action a teacher performs in front of a class?",
 sSrc:"Teacher Wang {1} us Chinese."},

{type:"mc", q:"请(qǐng)读(dú)这(zhè)个(gè)句子(jùzi)。 What are you being asked to do?",
 opts:["Write this sentence","Read this sentence aloud","Answer this question","Teach this class"],
 ans:"Read this sentence aloud",
 hint:"读 involves vocalizing text. You are being asked to produce sound from written words."}
]},

// ─── L4: Daily Routines ───
{id:"zhv2_u10l4", title:"My Daily Routine", icon:"🔄", xp:15, board:true, steps:[
{type:"intro", title:"My Daily Routine",
 desc:"Put it all together. Describe a full day of work or school, talk about how many hours you study, and discuss your routine using 每.",
 goals:["Describe a work or school day","Combine time words with 每","Review all Unit 10 vocabulary in context"]},

{type:"tip", title:"Describing Your Daily Routine",
 text:"A typical routine description in Chinese follows this pattern:\n\n我(wǒ)每(měi)天(tiān) + time + activity\n\n我(wǒ)每(měi)天(tiān)八(bā)点(diǎn)开始(kāishǐ)工作(gōngzuò)。\nI start work at eight every day.\n\n我(wǒ)每(měi)天(tiān)学习(xuéxí)两(liǎng)个(gè)小时(xiǎoshí)。\nI study for two hours every day.\n\nTime expressions come BEFORE the verb in Chinese, never after.",
 deepDive:{title:"Chinese Word Order for Time",
  text:"Chinese has strict time placement rules:\n\nSubject + Time + Verb + Object\n\n我(wǒ) + 每天 + 学习 + 中文。\nI + every day + study + Chinese.\n\nYou can also put time at the very front for emphasis:\n每天我都学习中文。\nEvery day, I study Chinese.\n\nBut time NEVER goes after the verb like in English ('I study every day'). This is one of the most important word order rules for learners."}},

{type:"mc", q:"我(wǒ)每(měi)天(tiān)学习(xuéxí)三(sān)个(gè)小时(xiǎoshí)中文(zhōngwén)。 What does this mean?",
 opts:["I study Chinese three times a day","I study Chinese for three hours every day","I have three Chinese classes every day","I started studying Chinese three days ago"],
 ans:"I study Chinese for three hours every day",
 hint:"每天 is the frequency. 三个小时 is the duration. 中文 is the subject. Combine all pieces."},

{type:"fb", s:"我(wǒ)每(měi)天(tiān)八(bā)点(diǎn){1}工作(gōngzuò)。",
 a:["开始(kāishǐ)"],
 opts:["开始(kāishǐ)","学习(xuéxí)","忙(máng)","教(jiāo)"],
 hint:"Which verb means to commence or begin an activity?",
 sSrc:"I {1} work at eight o'clock every day."},

{type:"match", pairs:[
  {trg:"每天(měi tiān)", src:"every day"},
  {trg:"小时(xiǎoshí)", src:"hour"},
  {trg:"开始(kāishǐ)", src:"to begin"},
  {trg:"忙(máng)", src:"busy"},
  {trg:"考试(kǎoshì)", src:"exam"}
]},

{type:"mc", q:"Where does the time expression go in a Chinese sentence?",
 opts:["After the verb","At the end of the sentence","Before the verb","It does not matter"],
 ans:"Before the verb",
 hint:"Chinese has a strict rule about where time expressions go relative to the ___."},

{type:"fb", s:"老师(lǎoshī){1}我们(wǒmen)写(xiě)中文(zhōngwén)。",
 a:["教(jiāo)"],
 opts:["教(jiāo)","学习(xuéxí)","读(dú)","回答(huídá)"],
 hint:"Which verb describes the action of passing knowledge to others?",
 sSrc:"The teacher {1} us to write Chinese."},

{type:"mc", q:"Which pair correctly shows the start and end of a class?",
 opts:["上课 and 下课","大课 and 小课","好课 and 不课","开课 and 关课"],
 ans:"上课 and 下课",
 hint:"Chinese uses 上 (up/enter) and 下 (down/exit) to mark the beginning and end of activities."},

{type:"drag_fill",
 s:"我(wǒ)是(shì){1}，他(tā)是(shì)我(wǒ)的(de){2}。",
 blanks:{"1":"学生(xuéshēng)","2":"老师(lǎoshī)"},
 pool:["学生(xuéshēng)","老师(lǎoshī)","同学(tóngxué)","考试(kǎoshì)"],
 hint:"One person learns, the other person teaches. Fill in the roles."},

{type:"fb", s:"你(nǐ)有(yǒu){1}吗(ma)？我(wǒ)可以(kěyǐ)回答(huídá)。",
 a:["问题(wèntí)"],
 opts:["问题(wèntí)","考试(kǎoshì)","课(kè)","工作(gōngzuò)"],
 hint:"Which noun means a query that needs an answer?",
 sSrc:"Do you have a {1}? I can answer."},

{type:"mc", q:"她(tā)每(měi)天(tiān)都(dōu)很(hěn)忙(máng)。 The 都 in this sentence:",
 opts:["Means 'also'","Means 'but'","Emphasizes 'every single day without exception'","Has no meaning"],
 ans:"Emphasizes 'every single day without exception'",
 hint:"When paired with 每, this word stresses that the statement is true for all instances."},

{type:"match", pairs:[
  {trg:"工作(gōngzuò)", src:"work / job"},
  {trg:"学习(xuéxí)", src:"to study"},
  {trg:"写(xiě)", src:"to write"},
  {trg:"读(dú)", src:"to read aloud"},
  {trg:"回答(huídá)", src:"to answer"},
  {trg:"教(jiāo)", src:"to teach"}
]}
]},

// ─── L5: Company, Classroom, and Key Verbs ───
{id:"zhv2_u10l5", title:"公司和教室 Company and Classroom", icon:"🏢", xp:15, board:true, steps:[
{type:"intro", title:"Company and Classroom",
 desc:"Learn essential HSK 2 workplace and education words. Also master three key verbs: 知道, 结束, and the important modal 可以.",
 goals:["Distinguish 公司 (company) from 学校 (school)","Use 教室 for classroom","Express permission with 可以 and completion with 结束"]},

{type:"teach", trg:"公司(gōngsī)", src:"company / firm", pos:"noun", gender:null,
 note:"公 (public/official) + 司 (to manage). Literally: public management.\nRefers to any business company.",
 example:"A: 你(nǐ)在(zài)哪(nǎ)家(jiā)公司(gōngsī)工作(gōngzuò)？\nB: 我(wǒ)在(zài)一(yī)家(jiā)科技(kējì)公司(gōngsī)工作(gōngzuò)。",
 exampleSrc:"A: Which company do you work at?\nB: I work at a tech company.",
 funFact:"司 originally depicted a person kneeling with a mouth — someone managing affairs by speaking official words. Today 公司 is universal for any company: 大公司 (big company), 小公司 (small company). The word entered Chinese during the late Qing dynasty as Western business culture arrived."},

{type:"teach", trg:"教室(jiàoshì)", src:"classroom", pos:"noun", gender:null,
 note:"教 (teach, 4th tone here) + 室 (room). Literally: teaching room.\nNote: 教 is 1st tone (jiāo) as a verb but 4th tone (jiào) in this compound.",
 example:"A: 同学们(tóngxuémen)，进(jìn)教室(jiàoshì)吧(ba)！\nB: 好(hǎo)的(de)，老师(lǎoshī)！",
 exampleSrc:"A: Students, let us go into the classroom!\nB: Okay, teacher!",
 funFact:"室 appears in many formal room names: 教室 (classroom), 办公室 (office), 卧室 (bedroom), 浴室 (bathroom). It is more formal than 房间. You can always recognize a 室 as a purposeful, designated room — not just any room."},

{type:"teach", trg:"知道(zhīdào)", src:"to know (a fact)", pos:"verb", gender:null,
 note:"知 (know/understand) + 道 (way/path). Literally: know the way.\nUsed for knowing facts. 认识 is used for knowing people.",
 example:"A: 你(nǐ)知道(zhīdào)他(tā)家(jiā)在(zài)哪(nǎ)里(lǐ)吗(ma)？\nB: 我(wǒ)不(bù)知道(zhīdào)。",
 exampleSrc:"A: Do you know where his home is?\nB: I do not know.",
 funFact:"知道 vs 认识: 知道 is for facts and information, 认识 is for people and places. 我知道他 means 'I know of him' (have heard of him), while 我认识他 means 'I know him' (we have met). This distinction matters in Chinese and is a frequent topic in HSK exams."},

{type:"teach", trg:"结束(jiéshù)", src:"to finish / to end", pos:"verb", gender:null,
 note:"结 (tie/conclude) + 束 (bundle/end). Literally: tie up the bundle.\nOpposite of 开始 (to begin), which was taught in L1 of this unit.",
 example:"A: 工作(gōngzuò)几(jǐ)点(diǎn)结束(jiéshù)？\nB: 六(liù)点(diǎn)结束(jiéshù)。",
 exampleSrc:"A: When does work finish?\nB: It finishes at six.",
 funFact:"束 shows an arrow tied to a bundle — the idea of binding things together to close them. 结束 perfectly pairs with 开始 (begin): together they bracket any event, period, or task. Chinese learners should learn them as a matching pair from the very start."},

{type:"teach", trg:"可以(kěyǐ)", src:"can / may (permission)", pos:"aux", gender:null,
 note:"Expresses permission or possibility. Used when asking or giving permission.\nDifferent from 会(huì) = ability and 能(néng) = capability.",
 example:"A: 我(wǒ)可以(kěyǐ)进(jìn)来(lái)吗(ma)？\nB: 当然(dāngrán)可以(kěyǐ)！",
 exampleSrc:"A: May I come in?\nB: Of course you may!",
 funFact:"可以, 能, and 会 are three different Chinese modals. 可以 = permission (May I?). 能 = physical/situational ability (I can because conditions allow it). 会 = learned skill (I can because I know how). 我可以进来吗 (May I come in?) vs 我能进来吗 (Is it possible for me to enter?) vs 我会进来 (I know how to enter, for a learned skill). Getting this right is an A2-B1 milestone."},

{type:"teach", trg:"才(cái)", src:"only just / not until / only then", pos:"adv", gender:null,
 note:"Expresses that something happens later than expected or involves only a small amount.\n才 = only just, barely, not until.\nOpposite sense from 就 (already, right away).",
 example:"A: 你(nǐ)什么(shénme)时候(shíhou)到(dào)的(de)？\nB: 我(wǒ)才(cái)到(dào)，刚(gāng)进(jìn)门(mén)。",
 exampleSrc:"A: When did you arrive?\nB: I only just arrived, just walked in the door.",
 funFact:"才 and 就 are mirror opposites. 才 = later than expected or emphasizing smallness. 就 = sooner than expected or emphasizing readiness. 他八点才来 (He did not come until 8 — late!) vs 他八点就来了 (He came as early as 8 — early!). Same time, opposite emotional framing."},

{type:"tip", title:"可以 vs 能 vs 会: Three Ways of 'Can'",
 text:"Chinese has three modal verbs for ability:\n\n可以(kěyǐ) = permission\n你(nǐ)可以(kěyǐ)进(jìn)来(lái)。 You may come in.\n\n能(néng) = situational capability\n我(wǒ)今天(jīntiān)不(bù)能(néng)来(lái)。 I cannot come today (not possible).\n\n会(huì) = learned skill\n我(wǒ)会(huì)说(shuō)中文(zhōngwén)。 I can speak Chinese (I learned it).\n\nAt A2, focus on 可以 for asking permission and 会 for skills.",
 deepDive:{title:"Why Three Modals?",
  text:"English 'can' covers all three meanings at once. Chinese keeps them separate because the reasons for ability differ:\n\n可以: External permission — someone allows it.\n能: External/internal conditions — circumstances allow it.\n会: Internal knowledge — you learned how.\n\n我可以游泳 = I am allowed to swim.\n我能游泳 = I am capable of swimming right now.\n我会游泳 = I know how to swim.\n\nAt B1 you will see them overlap in casual speech. At A2, keeping them separate is the clean, exam-correct approach."}},

{type:"mc", q:"What is the main difference between 公司(gōngsī) and 学校(xuéxiào)?",
 opts:["公司 is smaller","学校 is for working, 公司 is for studying","公司 is for business work, 学校 is for education","They mean the same thing"],
 ans:"公司 is for business work, 学校 is for education",
 hint:"One is where you earn money doing a job, the other is where students go to learn."},

{type:"match", pairs:[
  {trg:"公司(gōngsī)", src:"company"},
  {trg:"教室(jiàoshì)", src:"classroom"},
  {trg:"知道(zhīdào)", src:"to know a fact"},
  {trg:"结束(jiéshù)", src:"to finish / end"},
  {trg:"可以(kěyǐ)", src:"may / can (permission)"}
]},

{type:"fb", s:"我(wǒ)不(bù){1}他(tā)在(zài)哪(nǎ)里(lǐ)。",
 a:["知道(zhīdào)"],
 opts:["知道(zhīdào)","结束(jiéshù)","可以(kěyǐ)","教(jiāo)"],
 hint:"Which verb means to have information about a fact?",
 sSrc:"I do not {1} where he is."},

{type:"mc", q:"我可以进来吗？ What is the speaker asking for?",
 opts:["Asking if they are able to enter","Asking if they know the way in","Asking permission to enter","Asking when to enter"],
 ans:"Asking permission to enter",
 hint:"可以 specifically asks whether an action is allowed by social rules or authority."},

{type:"fb", s:"课(kè){1}了(le)，同学们(tóngxuémen)可以(kěyǐ)走(zǒu)了(le)。",
 a:["结束(jiéshù)"],
 opts:["结束(jiéshù)","开始(kāishǐ)","知道(zhīdào)","教(jiāo)"],
 hint:"Which verb means the class has come to an end? It is the opposite of 开始.",
 sSrc:"Class has {1}, students may leave now."},

{type:"mc", q:"她(tā)才(cái)到(dào)，刚(gāng)进(jìn)门(mén)。 What does 才 tell you here?",
 opts:["She arrived very early","She arrived right on time","She only just arrived — a moment ago","She arrived a long time ago"],
 ans:"She only just arrived — a moment ago",
 hint:"才 emphasizes that the action happened very recently or later than expected — not earlier."},

{type:"match", pairs:[
  {trg:"知道(zhīdào)", src:"to know a fact"},
  {trg:"结束(jiéshù)", src:"to finish"},
  {trg:"可以(kěyǐ)", src:"may / permission"},
  {trg:"才(cái)", src:"only just / not until"},
  {trg:"教室(jiàoshì)", src:"classroom"}
]}
]}

,

// ─── L5: Writing Short Informal Messages ───
{id:"zhv2_u10l5_letter", title:"短信(duǎnxìn)", icon:"✉️", xp:15, board:true, steps:[
{type:"intro", title:"Writing Short Informal Messages",
 desc:"Learn to write short informal messages in Mandarin: WeChat messages, casual notes, short letters. Essential for HSK 3 and everyday digital communication.",
 goals:["Open a message casually","Use common body phrases","Close with an appropriate farewell"]},

{type:"teach", trg:"短信(duǎnxìn)", src:"short message / text", pos:"noun", gender:null,
 note:"The everyday word for a text message or brief written message.\n短 means short; 信 means letter or message.",
 example:"A: 你(nǐ)发(fā)短信(duǎnxìn)给(gěi)我(wǒ)了(le)吗(ma)？\nB: 对(duì)，我(wǒ)发(fā)了(le)一(yī)条(tiáo)短信(duǎnxìn)。",
 exampleSrc:"A: Did you send me a text message?\nB: Yes, I sent one message.",
 funFact:"短信 originally referred to SMS texts but is now used for any short written message, including WeChat. It literally means 'short letter.'"},

{type:"teach", trg:"你好吗？(nǐ hǎo ma?)", src:"How are you?", pos:"intj", gender:null,
 note:"A casual written greeting used in informal notes and messages.\nMore common in writing than in speech.",
 example:"A: 你好吗(nǐ hǎo ma)？好久(hǎojiǔ)没(méi)见(jiàn)你(nǐ)了(le)。\nB: 我(wǒ)很(hěn)好(hǎo)，谢谢(xièxie)你(nǐ)！",
 exampleSrc:"A: How are you? I haven't seen you in a long time.\nB: I'm very well, thank you!",
 funFact:"In spoken Chinese, people rarely open conversations with 你好吗 — it sounds a bit formal. But in written messages, especially to friends you haven't contacted in a while, it fits naturally."},

{type:"teach", trg:"好久不见(hǎojiǔ bújiàn)", src:"Long time no see", pos:"intj", gender:null,
 note:"A fixed phrase for reconnecting after a long absence.\n好久 = a long time; 不见 = haven't seen (each other).",
 example:"A: 好久不见(hǎojiǔ bújiàn)！你(nǐ)最近(zuìjìn)好(hǎo)吗(ma)？\nB: 好久不见(hǎojiǔ bújiàn)！我(wǒ)很(hěn)好(hǎo)。",
 exampleSrc:"A: Long time no see! How have you been recently?\nB: Long time no see! I am very well.",
 funFact:"This phrase was actually borrowed INTO English as 'long time no see' by Chinese labourers in the 1800s — the English phrase is a direct calque of the Mandarin structure."},

{type:"teach", trg:"想你(xiǎng nǐ)", src:"I miss you", pos:"intj", gender:null,
 note:"Literally 'think of you' or 'want you.' Common in warm informal messages.\nUsed between close friends, family, and partners.",
 example:"A: 我(wǒ)很(hěn)想你(xiǎng nǐ)，你(nǐ)什么(shénme)时候(shíhou)回来(huílái)？\nB: 我(wǒ)也(yě)想你(xiǎng nǐ)！",
 exampleSrc:"A: I really miss you. When are you coming back?\nB: I miss you too!",
 funFact:"想 is one of those Chinese characters that combines meaning with structure: the top part 木 (tree/stand) plus 目 (eye) over 心 (heart). Looking with your heart — the image of longing."},

{type:"tip", title:"Structure of a Short Chinese Message",
 text:"Informal Mandarin messages follow a simple three-part structure:\n1. Opening: 你好吗？ or 好久不见！\n2. Main point: state your news, ask a question, or share a feeling\n3. Closing: 想你 / 保重 / 下次见\n\nYou do not need 亲爱的 (dear) in a WeChat message to a friend. That register belongs to formal letters.",
 deepDive:"WeChat messages are Chinese daily digital life. Even older generations send long voice notes and text. Short written messages mix formal openers with casual closers freely — there are no strict rules, just common patterns."},

{type:"teach", trg:"保重(bǎozhòng)", src:"take care / stay safe", pos:"intj", gender:null,
 note:"A warm closing phrase meaning 'take care of yourself.'\n保 = protect; 重 = important / serious.",
 example:"A: 你(nǐ)要(yào)走(zǒu)了(le)，多(duō)保重(bǎozhòng)！\nB: 谢谢(xièxie)，你(nǐ)也(yě)保重(bǎozhòng)！",
 exampleSrc:"A: You are leaving now. Take good care!\nB: Thank you, you take care too!",
 funFact:"保重 is the standard warm farewell in Chinese correspondence. It appears in the closing line of letters, emails, and WeChat messages alike. The equivalent of 'take care' in English — genuine, not just filler."},

{type:"teach", trg:"下次见(xià cì jiàn)", src:"See you next time", pos:"intj", gender:null,
 note:"A casual closing meaning 'until we meet again.'\n下次 = next time; 见 = to see / to meet.",
 example:"A: 好(hǎo)，我(wǒ)要(yào)走(zǒu)了(le)，下次见(xià cì jiàn)！\nB: 好的(hǎo)！下次见(xià cì jiàn)！",
 exampleSrc:"A: OK, I have to go now. See you next time!\nB: Sure! See you next time!",
 funFact:"下次见 is lighter and less final than 再见. Use it when you plan to be in touch again soon. For longer separations or more formal contexts, 再见 is the better choice."},

{type:"teach", trg:"回信(huí xìn)", src:"to reply / to write back", pos:"verb", gender:null,
 note:"Means to send a reply to a letter or message.\n回 = to return / reply; 信 = letter / message.",
 example:"A: 你(nǐ)回信(huí xìn)了(le)吗(ma)？我(wǒ)等(děng)了(le)很(hěn)久(jiǔ)。\nB: 对不起(duìbuqǐ)！我(wǒ)现在(xiànzài)就(jiù)回信(huí xìn)。",
 exampleSrc:"A: Did you write back? I've been waiting a long time.\nB: Sorry! I'll reply right now.",
 funFact:"回 is a fascinatingly symmetric character: a small square inside a large square. Scholars believe it originally depicted a whirlpool or spiral, giving it the core meaning of 'turning back' or 'returning.'"},

{type:"mc", q:"Which phrase is used to reconnect with someone after a long absence?",
 opts:["你好吗？(nǐ hǎo ma?)","好久不见(hǎojiǔ bújiàn)","保重(bǎozhòng)","回信(huí xìn)"],
 ans:"好久不见(hǎojiǔ bújiàn)",
 hint:"Think of the phrase that literally means you haven't seen someone in a long time."},

{type:"mc", q:"保重(bǎozhòng) is best used as:",
 opts:["An opening greeting in a formal letter","A warm closing phrase wishing someone well","A way to say you miss someone","A phrase meaning you will reply soon"],
 ans:"A warm closing phrase wishing someone well",
 hint:"保重 belongs at the end of a message, not the beginning. It signals care and warmth as you say goodbye."},

{type:"fb", s:"好久不见！你(nǐ)最近(zuìjìn){1}吗(ma)？",
 a:["好(hǎo)"],
 opts:["好(hǎo)","忙(máng)","冷(lěng)","贵(guì)"],
 hint:"Which word completes 'How are you recently?' in a standard greeting? It describes being well or in a good state.",
 sSrc:"Long time no see! Have you been {1} recently?"},

{type:"fb", s:"我(wǒ)很(hěn){1}，什么(shénme)时候(shíhou)回来(huílái)？",
 a:["想你(xiǎng nǐ)"],
 opts:["想你(xiǎng nǐ)","好久不见(hǎojiǔ bújiàn)","保重(bǎozhòng)","下次见(xià cì jiàn)"],
 hint:"Fill in the phrase expressing that the writer misses the reader and wants them to come back.",
 sSrc:"I really {1}. When are you coming back?"},

{type:"fb", s:"要(yào)出发(chūfā)了(le)，多(duō){1}！",
 a:["保重(bǎozhòng)"],
 opts:["保重(bǎozhòng)","回信(huí xìn)","下次见(xià cì jiàn)","短信(duǎnxìn)"],
 hint:"Which closing phrase means 'take care of yourself' and is used when someone is leaving?",
 sSrc:"Time to set off. {1}!"},

{type:"mc", q:"你发短信给我了吗？ What is being asked?",
 opts:["Did you call me?","Did you send me a text?","Did you reply to me?","Did you write me a letter?"],
 ans:"Did you send me a text?",
 hint:"短信 is the key word. Focus on which action the speaker completed: calling, replying, texting, or writing a physical letter."},

{type:"mc", q:"Which phrase is the most natural way to close a WeChat message to a friend you plan to see again soon?",
 opts:["保重(bǎozhòng)","你好吗？(nǐ hǎo ma?)","下次见(xià cì jiàn)","好久不见(hǎojiǔ bújiàn)"],
 ans:"下次见(xià cì jiàn)",
 hint:"Which closing phrase specifically points forward to the next meeting? It is lighter and shorter than the standard goodbye."},

{type:"match", pairs:[
  {trg:"短信(duǎnxìn)", src:"short message / text"},
  {trg:"你好吗？(nǐ hǎo ma?)", src:"How are you?"},
  {trg:"好久不见(hǎojiǔ bújiàn)", src:"long time no see"},
  {trg:"想你(xiǎng nǐ)", src:"I miss you"},
  {trg:"保重(bǎozhòng)", src:"take care"},
  {trg:"下次见(xià cì jiàn)", src:"see you next time"},
  {trg:"回信(huí xìn)", src:"to reply / write back"}
]}
]},

// ─── L7: Mental Verbs ───
{id:"zhv2_u10l7", title:"思维动词 Mental Verbs", icon:"🧠", xp:15, board:true, steps:[
{type:"intro", title:"Mental Verbs",
 desc:"Learn the core verbs for expressing what you need, think, believe, hope, decide, feel, and remember. These are essential for work and study conversations.",
 goals:["Learn 7 key mental verbs","Use them in sentences about work and school","Practice producing target-language answers in fill-in exercises"]},

{type:"teach", trg:"需要(xūyào)", src:"to need", pos:"verb", gender:null,
 note:"Expresses necessity or a requirement.\n需 = to need; 要 = to want / require. Together: to have a need for.",
 example:"A: 你(nǐ)工作(gōngzuò)需要(xūyào)什么(shénme)？\nB: 我(wǒ)需要(xūyào)一(yī)台(tái)电脑(diànnǎo)。",
 exampleSrc:"A: What do you need for work?\nB: I need a computer.",
 funFact:"需要 is often the more formal or objective 'need,' while 要 alone sounds like 'want.' In job applications and official forms, 需要 is always preferred over 要."},

{type:"teach", trg:"相信(xiāngxìn)", src:"to believe / to trust", pos:"verb", gender:null,
 note:"Means to have faith in a person or statement.\n相 = mutual; 信 = trust / letter. To 'mutually trust' someone.",
 example:"A: 你(nǐ)相信(xiāngxìn)他(tā)吗(ma)？\nB: 我(wǒ)相信(xiāngxìn)他(tā)，他(tā)是(shì)好(hǎo)老师(lǎoshī)。",
 exampleSrc:"A: Do you believe him?\nB: I believe him. He is a good teacher.",
 funFact:"The character 信 (trust) also means 'letter.' In ancient China, a letter was a personal message carried by a trusted messenger. Trust and written words were inseparable."},

{type:"teach", trg:"希望(xīwàng)", src:"to hope / hope", pos:"verb", gender:null,
 note:"Functions as both a verb ('I hope that...') and a noun ('a hope / wish').\nFollowed by a clause: 希望你好 = I hope you are well.",
 example:"A: 你(nǐ)希望(xīwàng)学(xué)什么(shénme)？\nB: 我(wǒ)希望(xīwàng)学(xué)汉语(Hànyǔ)。",
 exampleSrc:"A: What do you hope to study?\nB: I hope to study Chinese.",
 funFact:"希 literally means 'rare / to hope for something scarce.' 望 means 'to gaze into the distance.' Together they paint hope as looking far ahead for something precious. Poetic and practical at once."},

{type:"teach", trg:"决定(juédìng)", src:"to decide / decision", pos:"verb", gender:null,
 note:"Both a verb ('to decide') and a noun ('a decision').\n决 = to resolve; 定 = fixed / settled.",
 example:"A: 你(nǐ)决定(juédìng)了(le)吗(ma)？\nB: 我(wǒ)决定(juédìng)去(qù)学(xué)汉语(Hànyǔ)。",
 exampleSrc:"A: Have you decided?\nB: I have decided to go study Chinese.",
 funFact:"决 contains the water radical 氵, evoking a river breaking through a dam. Once decided, the flow cannot be stopped. The character visually captures the moment of commitment."},

{type:"teach", trg:"觉得(juéde)", src:"to feel / to think (opinion)", pos:"verb", gender:null,
 note:"Expresses a personal feeling or subjective opinion.\nDo NOT use for factual knowledge — use 知道(zhīdào) for that.",
 example:"A: 你(nǐ)觉得(juéde)这(zhè)门(mén)课(kè)怎么样(zěnmeyàng)？\nB: 我(wǒ)觉得(juéde)很(hěn)好(hǎo)，老师(lǎoshī)教(jiāo)得(de)好(hǎo)。",
 exampleSrc:"A: How do you feel about this class?\nB: I think it is very good. The teacher teaches well.",
 funFact:"觉 shares its root with 睡觉(shuìjiào), 'to sleep.' Both involve a state of consciousness. 觉得 is the waking, conscious sense of something, while 睡觉 is surrendering that awareness."},

{type:"teach", trg:"以为(yǐwéi)", src:"to think mistakenly / to assume", pos:"verb", gender:null,
 note:"Used when someone THOUGHT something that turned out to be wrong.\nNever use 以为 for correct beliefs. Use 认为(rènwéi) for reasoned opinion.",
 example:"A: 你(nǐ)以为(yǐwéi)考试(kǎoshì)今天(jīntiān)吗(ma)？\nB: 对(duì)，我(wǒ)以为(yǐwéi)是(shì)今天(jīntiān)，但是(dànshì)是(shì)明天(míngtiān)。",
 exampleSrc:"A: Did you think the exam was today?\nB: Yes, I assumed it was today, but it is tomorrow.",
 funFact:"以为 is the classic 'oops' verb of Chinese. Native speakers say 我以为... whenever something surprises them. It carries a light self-deprecating tone, making it very natural in informal speech."},

{type:"teach", trg:"记得(jìde)", src:"to remember", pos:"verb", gender:null,
 note:"To recall something from memory. Opposite: 忘(wàng) 'to forget.'\n记 = to record / remember; 得 = to obtain / achieve.",
 example:"A: 你(nǐ)记得(jìde)老师(lǎoshī)叫(jiào)什么(shénme)名字(míngzi)吗(ma)？\nB: 记得(jìde)！他(tā)叫(jiào)王(Wáng)先生(xiānsheng)。",
 exampleSrc:"A: Do you remember the teacher's name?\nB: Yes! His name is Mr. Wang.",
 funFact:"记 contains the word radical 言 (speech/words) and 己 (oneself). To remember something is literally to 'speak words to yourself.' Memorization was historically tied to recitation in Chinese education."},

{type:"tip", title:"Mental Verbs: Which One to Use?",
 text:"Four verbs cover 'thinking' in Chinese, each with a different angle:\n\n觉得(juéde): personal feeling or opinion. 'I feel that...'\n以为(yǐwéi): a mistaken assumption. 'I thought (wrongly) that...'\n相信(xiāngxìn): trust and belief in a person or statement.\n决定(juédìng): a commitment. 'I have decided.'\n\nThe key contrast: 觉得 is fluid and ongoing. 决定 is final and committed. 以为 always implies being proven wrong.",
 deepDive:{title:"以为 vs 觉得 vs 认为",
  text:"These three overlap but differ in register and implication.\n\n以为 (yǐwéi): subjective assumption, often wrong. Used in everyday speech.\n觉得 (juéde): gut feeling or casual opinion. Very common in conversation.\n认为 (rènwéi): considered, reasoned opinion. Formal. Used in writing and debate.\n\nExample set:\n我以为今天有课。I assumed there was class today. (probably wrong)\n我觉得这很难。I feel this is difficult. (personal impression)\n我认为这个方法更好。I consider this method better. (argued position)"}},

{type:"mc", q:"Which verb describes having an incorrect assumption?",
 opts:["希望(xīwàng)","以为(yǐwéi)","相信(xiāngxìn)","决定(juédìng)"],
 ans:"以为(yǐwéi)",
 hint:"Think about the verb that native speakers use right after discovering they were wrong about something."},

{type:"mc", q:"我(wǒ)觉得(juéde)这(zhè)门(mén)课(kè)很(hěn)难(nán)。 What is being expressed?",
 opts:["A factual statement that the class is difficult","A personal opinion that the class feels difficult","A decision to drop the class","A belief that the teacher is wrong"],
 ans:"A personal opinion that the class feels difficult",
 hint:"觉得 is the key word. It signals the speaker's own subjective sense, not an objective fact."},

{type:"fb", s:"我(wǒ){1}买(mǎi)一(yī)本(běn)新(xīn)书(shū)。",
 a:["需要(xūyào)"],
 opts:["需要(xūyào)","以为(yǐwéi)","记得(jìde)","决定(juédìng)"],
 hint:"Which mental verb expresses that something is required or necessary? The speaker lacks an item and must obtain it.",
 sSrc:"I {1} to buy a new book."},

{type:"fb", s:"你(nǐ){1}今天(jīntiān)有(yǒu)考试(kǎoshì)吗(ma)？",
 a:["记得(jìde)"],
 opts:["记得(jìde)","希望(xīwàng)","决定(juédìng)","相信(xiāngxìn)"],
 hint:"Which verb asks whether something is held in memory? The question checks whether a fact has been retained.",
 sSrc:"Do you {1} that there is an exam today?"},

{type:"mc", q:"希望(xīwàng) is best described as:",
 opts:["A certainty about the future","A forward-looking wish for what you do not yet have","A mistaken belief","A firm commitment"],
 ans:"A forward-looking wish for what you do not yet have",
 hint:"希望 is neither a decision nor a guarantee. It expresses wanting what lies ahead without controlling whether it happens."},

{type:"fb", s:"他(tā)已经(yǐjīng){1}去(qù)北京(Běijīng)工作(gōngzuò)了(le)。",
 a:["决定(juédìng)"],
 opts:["决定(juédìng)","以为(yǐwéi)","需要(xūyào)","希望(xīwàng)"],
 hint:"Which verb signals that a final choice has been made and acted on? The particle 了 confirms completion.",
 sSrc:"He has already {1} to go to Beijing to work."},

{type:"mc", q:"我(wǒ)以为(yǐwéi)今天(jīntiān)没有(méiyǒu)课(kè)，但是(dànshì)有(yǒu)课(kè)。 What does this tell us?",
 opts:["The speaker knew about the class in advance","The speaker assumed there was no class but was wrong","The speaker decided not to attend class","The speaker hopes there is no class"],
 ans:"The speaker assumed there was no class but was wrong",
 hint:"以为 always carries the meaning that the assumption turned out to be incorrect. The second clause confirms the surprise."},

{type:"match", pairs:[
  {trg:"需要(xūyào)", src:"to need"},
  {trg:"相信(xiāngxìn)", src:"to believe / to trust"},
  {trg:"希望(xīwàng)", src:"to hope"},
  {trg:"决定(juédìng)", src:"to decide"},
  {trg:"觉得(juéde)", src:"to feel / to think (opinion)"},
  {trg:"以为(yǐwéi)", src:"to think mistakenly"},
  {trg:"记得(jìde)", src:"to remember"}
]}
]}

]};

export default UNIT_10;
