// Unit 22: Education and Career
// Level: B1.2 (HSK 3-4)
// Chinese (Mandarin) V2 format with hanzi+pinyin notation
// Vocab: 大学, 专业, 毕业, 经验, 面试, 申请, 成绩, 研究, 发展, 提高, 机会, 竞争, 目标, 计划, 努力

const UNIT_22 = {
n:22, lang:"zh", srcLang:"en", track:"v2",
title:"学历和工作 Education and Careers", sub:"Academic and Professional Life",
icon:"🎓", level:"B1.2", color:"#7B5EE8",
lessons:[

// ─── L1: University Life ───
{id:"zhv2_u22l1", title:"大学生活 University Life", icon:"🏫", xp:15, board:true, steps:[
{type:"intro", title:"大学生活 University Life",
 desc:"Learn the core vocabulary for talking about university: majors, grades, graduation, and research. Chinese universities are fiercely competitive, and education is one of the most important topics in daily conversation.",
 goals:["Talk about university studies with 大学, 专业, and 成绩","Discuss graduation and research","Understand the importance of education in Chinese culture"]},

{type:"tip", title:"Education in Chinese Culture",
 text:"Education has been central to Chinese culture for over 2,000 years. The imperial examination system (科举, kējǔ) allowed anyone to rise through merit. Today, the 高考(gāokǎo), the national college entrance exam, determines university placement.\n\nKey vocabulary:\n高考(gāokǎo) = college entrance exam\n大学(dàxué) = university\n研究生(yánjiūshēng) = graduate student\n博士(bóshì) = PhD/doctorate\n\nChinese parents often say 读书改变命运 (reading changes your destiny). Education is not just learning: it is the path to a better life.",
 deepDive:{title:"The Gaokao: China's Most Important Exam",
  text:"The 高考(gāokǎo) is a two-day national exam taken in June by roughly 10 million students each year. Your score determines which universities you can attend. Top schools like Peking University and Tsinghua University accept less than 1% of applicants.\n\nThe pressure is immense. Students prepare for years. Parents and communities rally around test-takers. During the exam, construction sites go quiet, and police redirect traffic near testing centers. The phrase 千军万马过独木桥 (a thousand troops crossing a single-log bridge) describes the intensity of the competition."}},

{type:"teach", trg:"大学(dàxué)", src:"university", pos:"noun", gender:null,
 note:"Big + learning. A place of 'great learning.'\nAlso the title of a classic Confucian text.",
 example:"A: 你(nǐ)在(zài)哪个(nǎge)大学(dàxué)上学(shàngxué)？\nB: 我(wǒ)在(zài)北京(Běijīng)大学(dàxué)。",
 exampleSrc:"A: Which university do you study at?\nB: I study at Peking University.",
 funFact:"大学 literally means 'great learning.' It is also the name of one of the Four Books of Confucianism, a foundational text that every educated person in imperial China had to study. The opening line means 'The way of great learning lies in illuminating bright virtue.'"},

{type:"teach", trg:"专业(zhuānyè)", src:"major / specialty", pos:"noun", gender:null,
 note:"Specialized + profession. Your field of study or expertise.\nAlso an adjective meaning 'professional': 很专业 = very professional.",
 example:"A: 你(nǐ)的(de)专业(zhuānyè)是(shì)什么(shénme)？\nB: 我(wǒ)的(de)专业(zhuānyè)是(shì)计算机(jìsuànjī)科学(kēxué)。",
 exampleSrc:"A: What is your major?\nB: My major is computer science.",
 funFact:"The most popular majors in Chinese universities include computer science, business, and engineering. The phrase 热门专业 (hot major) describes fields with strong job prospects, while 冷门专业 (cold major) refers to less popular fields. Students often choose majors based on employment outlook rather than personal interest."},

{type:"teach", trg:"成绩(chéngjì)", src:"grades / results / achievements", pos:"noun", gender:null,
 note:"Completed + record. Academic scores or work performance.\n成绩单 = transcript. 好成绩 = good grades.",
 example:"A: 这(zhè)次(cì)考试(kǎoshì)你(nǐ)的(de)成绩(chéngjì)怎么样(zěnmeyàng)？\nB: 还(hái)不错(búcuò)，比(bǐ)上(shàng)次(cì)提高(tígāo)了(le)。",
 exampleSrc:"A: How were your grades on this exam?\nB: Not bad, improved compared to last time.",
 funFact:"成绩 extends far beyond the classroom. You can talk about sports results (比赛成绩), work performance (工作成绩), and national achievements (国家成绩). The word captures the Chinese emphasis on measurable accomplishment in every area of life."},

{type:"teach", trg:"毕业(bìyè)", src:"to graduate", pos:"verb", gender:null,
 note:"Complete + profession/studies. To finish a course of study.\n毕业典礼 = graduation ceremony. 毕业生 = graduate.",
 example:"A: 你(nǐ)什么(shénme)时候(shíhou)毕业(bìyè)？\nB: 明年(míngnián)六月(liùyuè)就(jiù)毕业(bìyè)了(le)。",
 exampleSrc:"A: When do you graduate?\nB: I will graduate next June.",
 funFact:"毕 means to finish or complete. In ancient China, 毕 depicted a net that had caught everything. So 毕业 literally means 'finishing the business of your studies.' After graduating, the big question is always 毕业以后做什么 (what will you do after graduation)?"},

{type:"teach", trg:"研究(yánjiū)", src:"research / to research", pos:"noun", gender:null,
 note:"Grind/study + investigate. Both a noun and a verb.\n研究生 = graduate student. 研究所 = research institute.",
 example:"A: 他(tā)在(zài)大学(dàxué)做(zuò)什么(shénme)研究(yánjiū)？\nB: 他(tā)研究(yánjiū)人工智能(réngōng zhìnéng)。",
 exampleSrc:"A: What research does he do at the university?\nB: He researches artificial intelligence.",
 funFact:"研 originally meant to grind or polish, and 究 means to investigate thoroughly. Research is literally 'grinding and investigating.' This captures the patience and persistence that research demands. China has become the world's second-largest spender on research and development."},

{type:"mc", q:"你(nǐ)的(de)专业(zhuānyè)是(shì)什么(shénme)？ This asks about your:",
 opts:["university major","favorite hobby","family background","daily schedule"],
 ans:"university major",
 hint:"专业 means your field of specialized study at university. It is the first question students ask each other."},

{type:"match", pairs:[
  {trg:"大学(dàxué)", src:"university"},
  {trg:"专业(zhuānyè)", src:"major / specialty"},
  {trg:"成绩(chéngjì)", src:"grades / results"},
  {trg:"毕业(bìyè)", src:"to graduate"},
  {trg:"研究(yánjiū)", src:"research"}
]},

{type:"fb", s:"他(tā)明年(míngnián)六月(liùyuè)就(jiù){1}了(le)。",
 a:["毕业(bìyè)"],
 opts:["毕业(bìyè)","研究(yánjiū)","成绩(chéngjì)","大学(dàxué)"],
 hint:"This verb means to finish your studies and leave school. It combines 'complete' with 'profession.'",
 sSrc:"He will {1} next June."},

{type:"mc", q:"成绩(chéngjì) can refer to:",
 opts:["Academic scores, work results, and sports records","Only exam scores","Only sports results","Only work performance"],
 ans:"Academic scores, work results, and sports records",
 hint:"This word covers measurable achievements across many areas of life, not just one context."},

{type:"fb", s:"我(wǒ)在(zài)北京(Běijīng){1}上学(shàngxué)。",
 a:["大学(dàxué)"],
 opts:["大学(dàxué)","专业(zhuānyè)","研究(yánjiū)","毕业(bìyè)"],
 hint:"This noun means a place of higher education. Its literal meaning is 'great learning.'",
 sSrc:"I study at Peking {1}."},

{type:"fb", s:"他(tā)在(zài)大学(dàxué)做(zuò)科学(kēxué){1}。",
 a:["研究(yánjiū)"],
 opts:["研究(yánjiū)","成绩(chéngjì)","专业(zhuānyè)","毕业(bìyè)"],
 hint:"This word means to study something deeply and systematically. It is what scientists and professors do.",
 sSrc:"He does scientific {1} at the university."}
]},

// ─── L2: Career and Interviews ───
{id:"zhv2_u22l2", title:"找工作 Job Hunting", icon:"💼", xp:15, board:true, steps:[
{type:"intro", title:"找工作 Job Hunting",
 desc:"Learn the vocabulary for finding a job in Chinese: interviews, applications, experience, and competition. The Chinese job market is highly competitive, and these words appear constantly in daily life.",
 goals:["Talk about job applications with 申请, 面试, and 经验","Describe workplace competition with 竞争 and 机会","Discuss career development and improvement"]},

{type:"teach", trg:"经验(jīngyàn)", src:"experience", pos:"noun", gender:null,
 note:"Pass through + verify. Knowledge gained from direct participation.\n有经验 = experienced. 工作经验 = work experience.",
 example:"A: 这个(zhège)工作(gōngzuò)需要(xūyào)工作(gōngzuò)经验(jīngyàn)吗(ma)？\nB: 需要(xūyào)两年(liǎngnián)以上(yǐshàng)的(de)经验(jīngyàn)。",
 exampleSrc:"A: Does this job require work experience?\nB: It requires more than two years of experience.",
 funFact:"经 means to pass through, and 验 means to verify or test. Experience is literally 'what you have passed through and tested.' The compound captures how real knowledge comes from doing, not just studying. The saying 经验丰富 (rich in experience) is a top compliment for professionals."},

{type:"teach", trg:"面试(miànshì)", src:"interview", pos:"noun", gender:null,
 note:"Face + test. A face-to-face examination.\nBoth a noun and a verb: 去面试 = to go for an interview.",
 example:"A: 你(nǐ)明天(míngtiān)有(yǒu)面试(miànshì)吗(ma)？\nB: 有(yǒu)，我(wǒ)很(hěn)紧张(jǐnzhāng)。",
 exampleSrc:"A: Do you have an interview tomorrow?\nB: Yes, I am very nervous.",
 funFact:"面 means face, and 试 means to test. An interview is literally a 'face test.' In Chinese culture, first impressions (第一印象) are extremely important. Many job seekers rehearse answers to common questions like 你有什么优点和缺点 (what are your strengths and weaknesses)?"},

{type:"teach", trg:"申请(shēnqǐng)", src:"to apply / application", pos:"verb", gender:null,
 note:"State + request. To formally request something.\n申请工作 = apply for a job. 申请签证 = apply for a visa.",
 example:"A: 你(nǐ)申请(shēnqǐng)了(le)几个(jǐge)公司(gōngsī)？\nB: 我(wǒ)申请(shēnqǐng)了(le)十个(shígè)，三个(sāngè)给(gěi)了(le)面试(miànshì)。",
 exampleSrc:"A: How many companies did you apply to?\nB: I applied to ten, three gave me interviews.",
 funFact:"申 originally depicted lightning, representing a powerful statement to heaven. 请 means to request. So 申请 is a formal, serious request. The word is used for everything from job applications to visa applications to university admissions."},

{type:"teach", trg:"竞争(jìngzhēng)", src:"competition", pos:"noun", gender:null,
 note:"Race + contend. Rivalry for the same objective.\nBoth a noun and a verb. 竞争对手 = competitor.",
 example:"A: 现在(xiànzài)找(zhǎo)工作(gōngzuò)竞争(jìngzhēng)很(hěn)大(dà)吗(ma)？\nB: 非常(fēicháng)大(dà)，一个(yígè)职位(zhíwèi)有(yǒu)几百(jǐbǎi)个(gè)人(rén)申请(shēnqǐng)。",
 exampleSrc:"A: Is the competition for jobs very intense now?\nB: Extremely intense, one position has hundreds of applicants.",
 funFact:"竞 and 争 both relate to striving and contending. Chinese students face intense competition from a young age. The phrase 内卷(nèijuǎn), meaning 'involution,' became a viral buzzword describing the exhausting cycle of ever-increasing competition for the same limited opportunities."},

{type:"teach", trg:"机会(jīhuì)", src:"opportunity / chance", pos:"noun", gender:null,
 note:"Machine/trigger + meeting. The right moment when things come together.\n好机会 = good opportunity. 抓住机会 = seize the opportunity.",
 example:"A: 这(zhè)是(shì)一个(yígè)很(hěn)好(hǎo)的(de)机会(jīhuì)。\nB: 对(duì)，我(wǒ)一定(yídìng)要(yào)抓住(zhuāzhù)这个(zhège)机会(jīhuì)。",
 exampleSrc:"A: This is a very good opportunity.\nB: Right, I must seize this opportunity.",
 funFact:"机 originally meant the trigger mechanism of a crossbow: the precise point where action begins. 会 means a meeting or convergence. An opportunity is when the trigger moment meets favorable conditions. The idiom 机不可失 (an opportunity must not be missed) reflects the Chinese emphasis on timing."},

{type:"mc", q:"面试(miànshì) literally means:",
 opts:["face test","written test","phone test","group test"],
 ans:"face test",
 hint:"面 is the character for face, and 试 means test or examination. This is a face-to-face evaluation."},

{type:"match", pairs:[
  {trg:"经验(jīngyàn)", src:"experience"},
  {trg:"面试(miànshì)", src:"interview"},
  {trg:"申请(shēnqǐng)", src:"to apply"},
  {trg:"竞争(jìngzhēng)", src:"competition"},
  {trg:"机会(jīhuì)", src:"opportunity"}
]},

{type:"fb", s:"我(wǒ)昨天(zuótiān)去(qù)了(le)一个(yígè)公司(gōngsī){1}。",
 a:["面试(miànshì)"],
 opts:["面试(miànshì)","申请(shēnqǐng)","竞争(jìngzhēng)","机会(jīhuì)"],
 hint:"This is a face-to-face meeting where a company evaluates whether you are right for the job.",
 sSrc:"I went to a company {1} yesterday."},

{type:"mc", q:"他(tā)有(yǒu)十年(shínián)的(de)工作(gōngzuò)经验(jīngyàn)。 This means:",
 opts:["He has ten years of work experience","He has been looking for work for ten years","He has ten jobs","He works ten hours a day"],
 ans:"He has ten years of work experience",
 hint:"工作经验 means professional experience. 十年 means ten years. The sentence describes someone's career history."},

{type:"fb", s:"我(wǒ)已经(yǐjīng){1}了(le)五个(wǔge)公司(gōngsī)。",
 a:["申请(shēnqǐng)"],
 opts:["申请(shēnqǐng)","面试(miànshì)","经验(jīngyàn)","竞争(jìngzhēng)"],
 hint:"This verb means to formally submit a request. You do this when you want a company to consider hiring you.",
 sSrc:"I have already {1} to five companies."},

{type:"fb", s:"现在(xiànzài)找(zhǎo)工作(gōngzuò)的(de){1}越来越(yuèláiyuè)大(dà)了(le)。",
 a:["竞争(jìngzhēng)"],
 opts:["竞争(jìngzhēng)","机会(jīhuì)","面试(miànshì)","经验(jīngyàn)"],
 hint:"This word describes the rivalry among many people chasing the same limited positions.",
 sSrc:"The {1} for finding jobs is getting bigger and bigger."}
]},

// ─── L3: Goals and Growth ───
{id:"zhv2_u22l3", title:"目标和进步 Goals and Progress", icon:"🎯", xp:15, board:true, steps:[
{type:"intro", title:"目标和进步 Goals and Progress",
 desc:"Learn to talk about personal and professional goals, making plans, working hard, and self-improvement. These words connect education and career to the broader theme of personal development.",
 goals:["Set goals with 目标 and make plans with 计划","Express hard work and improvement with 努力 and 提高","Discuss growth and development with 发展"]},

{type:"teach", trg:"目标(mùbiāo)", src:"goal / target / objective", pos:"noun", gender:null,
 note:"Eye + mark. Something your eyes are fixed on.\n人生目标 = life goal. 实现目标 = achieve a goal.",
 example:"A: 你(nǐ)今年(jīnnián)的(de)目标(mùbiāo)是(shì)什么(shénme)？\nB: 我(wǒ)的(de)目标(mùbiāo)是(shì)通过(tōngguò)HSK四级(sìjí)考试(kǎoshì)。",
 exampleSrc:"A: What is your goal for this year?\nB: My goal is to pass the HSK Level 4 exam.",
 funFact:"目 means eye, and 标 means a mark or sign. A goal is literally what your eyes are fixed upon. The character 目 is a pictograph of an eye turned sideways. When you see 目 in a compound, it often relates to vision, focus, or perception."},

{type:"teach", trg:"计划(jìhuà)", src:"plan / to plan", pos:"noun", gender:null,
 note:"Count/calculate + divide. To organize steps toward a goal.\nBoth a noun and a verb. 学习计划 = study plan.",
 example:"A: 毕业(bìyè)以后(yǐhòu)你(nǐ)有(yǒu)什么(shénme)计划(jìhuà)？\nB: 我(wǒ)计划(jìhuà)先(xiān)工作(gōngzuò)两年(liǎngnián)，然后(ránhòu)读(dú)研究生(yánjiūshēng)。",
 exampleSrc:"A: What plans do you have after graduation?\nB: I plan to work for two years first, then do a master's degree.",
 funFact:"计 means to calculate, and 划 means to divide or sketch out. A plan is literally a calculated division of steps. Five-year plans (五年计划) have been a defining feature of China's economic governance since 1953, guiding national development from agriculture to technology."},

{type:"teach", trg:"努力(nǔlì)", src:"to work hard / to make an effort", pos:"verb", gender:null,
 note:"Exert + strength. To put all your energy into something.\nAlso an adjective: 他很努力 = he is very hardworking.",
 example:"A: 你(nǐ)中文(Zhōngwén)进步(jìnbù)很(hěn)快(kuài)啊(a)！\nB: 谢谢(xièxie)，我(wǒ)每天(měitiān)都(dōu)很(hěn)努力(nǔlì)学习(xuéxí)。",
 exampleSrc:"A: Your Chinese is improving very fast!\nB: Thanks, I study very hard every day.",
 funFact:"努力 is one of the most valued traits in Chinese culture. The belief that hard work outweighs natural talent is deeply rooted. The saying 只要功夫深铁杵磨成针 (with enough effort, an iron pestle can be ground into a needle) encourages persistence through any difficulty."},

{type:"teach", trg:"提高(tígāo)", src:"to improve / to raise", pos:"verb", gender:null,
 note:"Lift + high. To raise something to a higher level.\n提高水平 = improve one's level. 提高效率 = improve efficiency.",
 example:"A: 怎么(zěnme)提高(tígāo)中文(Zhōngwén)水平(shuǐpíng)？\nB: 多(duō)听(tīng)多(duō)说(shuō)多(duō)读(dú)多(duō)写(xiě)。",
 exampleSrc:"A: How do you improve your Chinese level?\nB: Listen more, speak more, read more, write more.",
 funFact:"提 means to lift, and 高 means high. Improvement is literally 'lifting higher.' The answer in the example uses a classic Chinese learning formula: 多听多说多读多写 (more listening, more speaking, more reading, more writing). Repetition and practice are the foundation of Chinese educational philosophy."},

{type:"teach", trg:"发展(fāzhǎn)", src:"development / to develop", pos:"noun", gender:null,
 note:"Send out + unfold. Growth from potential to reality.\n经济发展 = economic development. 发展中国家 = developing country.",
 example:"A: 这个(zhège)城市(chéngshì)发展(fāzhǎn)得(de)很(hěn)快(kuài)。\nB: 是(shì)啊(a)，十年(shínián)前(qián)这里(zhèlǐ)还(hái)很(hěn)小(xiǎo)。",
 exampleSrc:"A: This city has developed very fast.\nB: Yes, ten years ago it was still very small.",
 funFact:"发展 is one of the most important words in modern Chinese. 发展是硬道理 (development is the hard truth) was a famous slogan by Deng Xiaoping that defined China's economic reform era. The word appears in everything from government reports to personal career discussions."},

{type:"mc", q:"毕业(bìyè)以后(yǐhòu)你(nǐ)有(yǒu)什么(shénme)计划(jìhuà)？ This asks:",
 opts:["What are your plans after graduation?","When will you graduate?","Where did you study?","What is your major?"],
 ans:"What are your plans after graduation?",
 hint:"以后 means 'after,' and 计划 means 'plans.' The question asks about future intentions following graduation."},

{type:"match", pairs:[
  {trg:"目标(mùbiāo)", src:"goal / target"},
  {trg:"计划(jìhuà)", src:"plan"},
  {trg:"努力(nǔlì)", src:"to work hard"},
  {trg:"提高(tígāo)", src:"to improve"},
  {trg:"发展(fāzhǎn)", src:"development"}
]},

{type:"fb", s:"我(wǒ)的(de){1}是(shì)当(dāng)一个(yígè)好(hǎo)老师(lǎoshī)。",
 a:["目标(mùbiāo)"],
 opts:["目标(mùbiāo)","计划(jìhuà)","发展(fāzhǎn)","努力(nǔlì)"],
 hint:"This word means a target or objective you are aiming for. Its characters mean 'eye' and 'mark.'",
 sSrc:"My {1} is to become a good teacher."},

{type:"mc", q:"努力(nǔlì) in Chinese culture is valued because:",
 opts:["Hard work is believed to outweigh natural talent","It is required by law","Only scholars need to work hard","It refers to physical strength only"],
 ans:"Hard work is believed to outweigh natural talent",
 hint:"Chinese culture deeply values persistence and effort. A famous saying compares this to grinding an iron rod into a needle."},

{type:"fb", s:"多(duō)练习(liànxí)可以(kěyǐ){1}你(nǐ)的(de)水平(shuǐpíng)。",
 a:["提高(tígāo)"],
 opts:["提高(tígāo)","发展(fāzhǎn)","努力(nǔlì)","目标(mùbiāo)"],
 hint:"This verb means to raise or lift something to a higher level. It combines 'lift' and 'high.'",
 sSrc:"More practice can {1} your level."},

{type:"fb", s:"这个(zhège)城市(chéngshì)的(de)经济(jīngjì){1}得(de)很(hěn)快(kuài)。",
 a:["发展(fāzhǎn)"],
 opts:["发展(fāzhǎn)","提高(tígāo)","计划(jìhuà)","目标(mùbiāo)"],
 hint:"This word means growth from potential to reality. It describes how cities, economies, and careers grow.",
 sSrc:"This city's economy has {1} very fast."},

{type:"mc", q:"我(wǒ)计划(jìhuà)先(xiān)工作(gōngzuò)，然后(ránhòu)读(dú)研究生(yánjiūshēng)。 What is the plan?",
 opts:["Work first, then study for a master's degree","Study first, then find work","Work and study at the same time","Quit work and travel"],
 ans:"Work first, then study for a master's degree",
 hint:"先 means 'first,' and 然后 means 'then.' 研究生 means graduate student. The sentence describes a two-step plan."}
]},

// ─── L4: Unit 22 Review ───
{id:"zhv2_u22l4", title:"学业复习 Education Review", icon:"🔄", xp:15, board:true, steps:[
{type:"intro", title:"学业复习 Education Review",
 desc:"Review all education and career vocabulary from this unit. Test your ability to talk about university, job hunting, and personal development in Chinese.",
 goals:["Review all 15 education and career words","Connect academic vocabulary to career vocabulary","Use education and career terms in context"]},

{type:"match", pairs:[
  {trg:"大学(dàxué)", src:"university"},
  {trg:"面试(miànshì)", src:"interview"},
  {trg:"努力(nǔlì)", src:"to work hard"},
  {trg:"目标(mùbiāo)", src:"goal"},
  {trg:"发展(fāzhǎn)", src:"development"}
]},

{type:"mc", q:"他(tā)有(yǒu)很(hěn)多(duō)工作(gōngzuò)经验(jīngyàn)。 This means he has:",
 opts:["A lot of work experience","Many jobs","A difficult work schedule","A long commute"],
 ans:"A lot of work experience",
 hint:"工作 means work, and 经验 means experience gained from direct participation. Together they describe professional background."},

{type:"fb", s:"她(tā)的(de){1}是(shì)英语(Yīngyǔ)教育(jiàoyù)。",
 a:["专业(zhuānyè)"],
 opts:["专业(zhuānyè)","大学(dàxué)","成绩(chéngjì)","研究(yánjiū)"],
 hint:"This word means your field of study at university, your major or specialty.",
 sSrc:"Her {1} is English education."},

{type:"mc", q:"申请(shēnqǐng) is used when you want to:",
 opts:["Formally request or apply for something","Casually ask a question","Complain about something","Accept an offer"],
 ans:"Formally request or apply for something",
 hint:"This word combines 'state' and 'request.' It is used for formal applications to jobs, schools, and visa offices."},

{type:"fb", s:"现在(xiànzài)找(zhǎo)工作(gōngzuò)的(de){1}很(hěn)激烈(jīliè)。",
 a:["竞争(jìngzhēng)"],
 opts:["竞争(jìngzhēng)","机会(jīhuì)","经验(jīngyàn)","计划(jìhuà)"],
 hint:"This word describes the intense rivalry when many people are pursuing the same limited positions.",
 sSrc:"The {1} for finding jobs now is very fierce."},

{type:"match", pairs:[
  {trg:"专业(zhuānyè)", src:"major / specialty"},
  {trg:"成绩(chéngjì)", src:"grades / results"},
  {trg:"申请(shēnqǐng)", src:"to apply"},
  {trg:"竞争(jìngzhēng)", src:"competition"},
  {trg:"机会(jīhuì)", src:"opportunity"}
]},

{type:"fb", s:"你(nǐ)要(yào){1}学习(xuéxí)，才(cái)能(néng)考(kǎo)好(hǎo)。",
 a:["努力(nǔlì)"],
 opts:["努力(nǔlì)","提高(tígāo)","发展(fāzhǎn)","计划(jìhuà)"],
 hint:"This word means to put all your energy and strength into something. It describes diligent effort.",
 sSrc:"You must {1} at studying to do well on the exam."},

{type:"mc", q:"机会(jīhuì) literally combines which two ideas?",
 opts:["Trigger mechanism + meeting","Good + luck","Open + door","Hand + reach"],
 ans:"Trigger mechanism + meeting",
 hint:"机 originally meant the trigger of a crossbow, representing a critical moment. 会 means meeting or convergence."},

{type:"fb", s:"毕业(bìyè)以后(yǐhòu)你(nǐ)有(yǒu)什么(shénme){1}？",
 a:["计划(jìhuà)"],
 opts:["计划(jìhuà)","目标(mùbiāo)","发展(fāzhǎn)","面试(miànshì)"],
 hint:"This word means a thought-out series of steps for achieving something. China's government is famous for five-year versions of these.",
 sSrc:"What {1} do you have after graduation?"},

{type:"drag_fill",
 s:"他(tā)从(cóng){1}毕业(bìyè)以后(yǐhòu)，{2}了(le)很多(hěnduō)公司(gōngsī)，经过(jīngguò){3}，终于(zhōngyú)找到(zhǎodào)了(le)一个(yígè)好(hǎo){4}。",
 blanks:{"1":"大学(dàxué)","2":"申请(shēnqǐng)","3":"面试(miànshì)","4":"机会(jīhuì)"},
 pool:["大学(dàxué)","申请(shēnqǐng)","面试(miànshì)","机会(jīhuì)"],
 hint:"After graduating from university, he applied to many companies, went through interviews, and finally found a good opportunity."},

{type:"mc", q:"这个(zhège)城市(chéngshì)发展(fāzhǎn)得(de)很(hěn)快(kuài)。 This means the city:",
 opts:["Has developed very quickly","Has many universities","Has lots of competition","Has good weather"],
 ans:"Has developed very quickly",
 hint:"发展 means development or growth. 得很快 describes something happening at a fast pace."}
]}

]};

export default UNIT_22;
