// Unit 44: Workplace Communication
// Level: B2.2 (HSK 4)
// Chinese (Mandarin) V2 format with hanzi+pinyin notation

const UNIT_44 = {
n:44, lang:"zh", srcLang:"en", track:"v2",
title:"职场沟通 Workplace Communication", sub:"Professional Chinese",
icon:"🏢", level:"B2.2", color:"#7B5EE8",
lessons:[

// ─── L1: Jobs and Careers ───
{id:"zhv2_u44l1", title:"Jobs and Careers", icon:"💼", xp:15, board:true, steps:[
{type:"intro", title:"Jobs and Careers",
 desc:"Navigate the professional world in Chinese. Learn the vocabulary for jobs, positions, and the key events in a career: applying, resigning, getting promoted.",
 goals:["Discuss career events","Use professional vocabulary","Describe job applications"]},

{type:"teach", trg:"职业(zhíyè)", src:"profession / career", pos:"noun", gender:null,
 note:"职 (duty/position) + 业 (industry/enterprise).\nFormal word for profession.",
 example:"A: 你(nǐ)的(de)职业(zhíyè)是(shì)什么(shénme)？\nB: 我(wǒ)是(shì)一(yì)名(míng)律师(lǜshī)。",
 exampleSrc:"A: What is your profession?\nB: I am a lawyer.",
 funFact:"职业 implies a deliberately chosen career path, contrasting with 工作 (job, any work). Someone might change 工作 many times but maintain a single 职业. The word carries weight of identity."},

{type:"teach", trg:"职位(zhíwèi)", src:"position / post", pos:"noun", gender:null,
 note:"职 (duty) + 位 (position).\nA specific job title or role within an organization.",
 example:"A: 这(zhè)个(gè)职位(zhíwèi)需要(xūyào)什么(shénme)经验(jīngyàn)？\nB: 至少(zhìshǎo)三(sān)年(nián)相关(xiāngguān)经验(jīngyàn)。",
 exampleSrc:"A: What experience does this position require?\nB: At least three years of relevant experience.",
 funFact:"位 (position) is also a respectful measure word for people: 这位老师 (this teacher). The use of 位 in 职位 subtly elevates the idea of a job title, making it sound like an honored seat, not just a task."},

{type:"teach", trg:"简历(jiǎnlì)", src:"resume / CV", pos:"noun", gender:null,
 note:"简 (brief) + 历 (experience/history).\nA brief history of your experience.",
 example:"A: 请(qǐng)把(bǎ)你(nǐ)的(de)简历(jiǎnlì)发(fā)给(gěi)我(wǒ)。\nB: 好(hǎo)的(de)，马上(mǎshàng)发(fā)到(dào)您(nín)的(de)邮箱(yóuxiāng)。",
 exampleSrc:"A: Please send me your resume.\nB: Okay, I will send it to your email right away.",
 funFact:"简历 is a smart compound: 'brief history' captures both the French 'résumé' (summary) and English 'CV' (curriculum vitae, course of life). The Chinese word avoided borrowing from either, coining its own elegant term."},

{type:"teach", trg:"应聘(yìngpìn)", src:"to apply for a job", pos:"verb", gender:null,
 note:"应 (respond) + 聘 (engage/hire).\nTo respond to a hiring call.",
 example:"A: 我(wǒ)想(xiǎng)应聘(yìngpìn)你(nǐ)们(men)公司(gōngsī)的(de)设计师(shèjìshī)职位(zhíwèi)。\nB: 好(hǎo)的(de)，请(qǐng)把(bǎ)简历(jiǎnlì)发(fā)过来(guòlái)。",
 exampleSrc:"A: I want to apply for the designer position at your company.\nB: Okay, please send your resume.",
 funFact:"聘 originally meant sending a formal delegation to engage someone's service, used for hiring scholars, generals, or ministers. Modern 应聘 preserves this formal flavor, giving job applications a slightly ceremonial weight."},

{type:"teach", trg:"辞职(cízhí)", src:"to resign / to quit a job", pos:"verb", gender:null,
 note:"辞 (decline/resign) + 职 (position).\nTo decline a position. Separable verb.",
 example:"A: 听说(tīngshuō)她(tā)要(yào)辞职(cízhí)了(le)。\nB: 是(shì)的(de)，她(tā)找(zhǎo)到(dào)了(le)更(gèng)好(hǎo)的(de)机会(jīhuì)。",
 exampleSrc:"A: I heard she is going to resign.\nB: Yes, she found a better opportunity.",
 funFact:"辞 also appears in 告辞 (take leave, polite goodbye) and 推辞 (decline politely). It always carries a note of respectful departure. 辞职 quitting keeps that flavor, leaving a role formally, not just walking away."},

{type:"teach", trg:"升职(shēngzhí)", src:"to be promoted", pos:"verb", gender:null,
 note:"升 (rise) + 职 (position).\nRising in position. Separable verb.",
 example:"A: 恭喜(gōngxǐ)你(nǐ)升职(shēngzhí)了(le)！\nB: 谢谢(xièxie)，这(zhè)是(shì)大家(dàjiā)的(de)帮助(bāngzhù)。",
 exampleSrc:"A: Congratulations on your promotion!\nB: Thank you. This is thanks to everyone's help.",
 funFact:"升 (rise) appears in many movement-up words: 升级 (upgrade), 升学 (advance in school), 升迁 (career advancement). The upward metaphor applies to careers, technology, and education alike."},

{type:"mc", q:"简历(jiǎnlì) literally means:",
 opts:["brief history","personal details","full story","life record"],
 ans:"brief history",
 hint:"简 means …. 历 means … or experience. Combine them."},

{type:"mc", q:"To resign from a job is:",
 opts:["升职(shēngzhí)","辞职(cízhí)","职位(zhíwèi)","应聘(yìngpìn)"],
 ans:"辞职(cízhí)",
 hint:"The first character 辞 means 'to decline' or 'to take leave.' The word conveys formal departure."},

{type:"fb", s:"我(wǒ)明天(míngtiān)要(yào){1}那(nà)家(jiā)公司(gōngsī)的(de)销售(xiāoshòu)经理(jīnglǐ)职位(zhíwèi)。",
 a:["应聘(yìngpìn)"],
 opts:["应聘(yìngpìn)","辞职(cízhí)","升职(shēngzhí)","汇报(huìbào)"],
 hint:"The verb for applying to a job. 应 (respond) + 聘 (engage).",
 sSrc:"Tomorrow I will {1} for that company's sales manager position."},

{type:"match", pairs:[
  {trg:"职业(zhíyè)", src:"profession"},
  {trg:"职位(zhíwèi)", src:"position"},
  {trg:"简历(jiǎnlì)", src:"resume"},
  {trg:"应聘(yìngpìn)", src:"to apply"},
  {trg:"辞职(cízhí)", src:"to resign"},
  {trg:"升职(shēngzhí)", src:"to be promoted"}
]}

]},

// ─── L2: Meetings and Reports ───
{id:"zhv2_u44l2", title:"Meetings and Reports", icon:"📊", xp:15, board:true, steps:[
{type:"intro", title:"Meetings and Reports",
 desc:"Chinese workplaces run on meetings, reports, and structured communication. Learn the words that make these everyday rituals run.",
 goals:["Use meeting and report vocabulary","Describe departments","Navigate workplace structure"]},

{type:"teach", trg:"汇报(huìbào)", src:"to report (to a superior)", pos:"verb", gender:null,
 note:"汇 (gather/remit) + 报 (report).\nTo gather and report up. Distinct from 报告.",
 example:"A: 我(wǒ)明天(míngtiān)要(yào)向(xiàng)经理(jīnglǐ)汇报(huìbào)工作(gōngzuò)。\nB: 祝(zhù)你(nǐ)好运(hǎoyùn)。",
 exampleSrc:"A: Tomorrow I need to report my work to the manager.\nB: Good luck.",
 funFact:"汇报 specifically means reporting upward to a superior, a directional nuance English lacks. 报告 can be peer-to-peer or downward. The word choice reveals the hierarchy automatically, without saying so."},

{type:"teach", trg:"会议(huìyì)", src:"meeting / conference", pos:"noun", gender:null,
 note:"会 (meet) + 议 (discuss).\nDouble word for formal gathering.",
 example:"A: 下午(xiàwǔ)的(de)会议(huìyì)几(jǐ)点(diǎn)开始(kāishǐ)？\nB: 三(sān)点(diǎn)，在(zài)大(dà)会议室(huìyìshì)。",
 exampleSrc:"A: What time does the afternoon meeting start?\nB: Three o'clock, in the big conference room.",
 funFact:"会议 is formal; 开会 (hold a meeting) is the more casual verbal version. Chinese office culture runs on 开会, with meetings often being the primary workplace activity. The joke 会海 ('sea of meetings') captures this."},

{type:"teach", trg:"部门(bùmén)", src:"department", pos:"noun", gender:null,
 note:"部 (section/part) + 门 (gate/branch).\nA section-branch. For both company and government.",
 example:"A: 你(nǐ)在(zài)哪(nǎ)个(gè)部门(bùmén)工作(gōngzuò)？\nB: 我(wǒ)在(zài)市场(shìchǎng)部(bù)，负责(fùzé)广告(guǎnggào)。",
 exampleSrc:"A: Which department do you work in?\nB: I am in the marketing department, handling advertising.",
 funFact:"部 is also the shortest form: 市场部 (marketing department). Government ministries use the same character: 外交部 (Ministry of Foreign Affairs). Whether corporate or governmental, 部 implies a major division with defined responsibilities."},

{type:"teach", trg:"合作(hézuò)", src:"to cooperate / cooperation", pos:"verb", gender:null,
 note:"合 (together) + 作 (do/make).\nWorking together. Essential workplace word.",
 example:"A: 我(wǒ)们(men)部门(bùmén)要(yào)跟(gēn)销售(xiāoshòu)部(bù)合作(hézuò)。\nB: 好(hǎo)，我(wǒ)来(lái)安排(ānpái)会议(huìyì)。",
 exampleSrc:"A: Our department needs to cooperate with the sales department.\nB: Okay, I will arrange a meeting.",
 funFact:"合作 extends beyond business: 合作伙伴 (cooperation partner) is a common concept, and 国际合作 (international cooperation) appears constantly in diplomatic language. Chinese culture traditionally prizes cooperation over competition."},

{type:"teach", trg:"协调(xiétiáo)", src:"to coordinate", pos:"verb", gender:null,
 note:"协 (harmony/assist) + 调 (adjust/coordinate).\nHarmonize and adjust. More refined than 合作.",
 example:"A: 这(zhè)个(gè)项目(xiàngmù)需要(xūyào)多(duō)个(gè)部门(bùmén)协调(xiétiáo)。\nB: 我(wǒ)来(lái)负责(fùzé)协调(xiétiáo)工作(gōngzuò)。",
 exampleSrc:"A: This project requires multiple departments to coordinate.\nB: I will be responsible for the coordination work.",
 funFact:"协调 implies actively aligning different parties rather than just working together. A 协调员 (coordinator) has a specific role: resolving conflicts and aligning schedules. It is one step more sophisticated than 合作."},

{type:"teach", trg:"同行(tóngháng)", src:"peer / person in same profession", pos:"noun", gender:null,
 note:"同 (same) + 行 (profession/line of work).\nSame profession. Different tone from 同事.",
 example:"A: 我(wǒ)们(men)是(shì)同行(tóngháng)，都(dōu)是(shì)老师(lǎoshī)。\nB: 那(nà)我(wǒ)们(men)可以(kěyǐ)交流(jiāoliú)教学(jiàoxué)经验(jīngyàn)。",
 exampleSrc:"A: We are in the same profession. Both of us are teachers.\nB: Then we can exchange teaching experiences.",
 funFact:"Unlike 同事 (colleagues, same company) and 同学 (classmates, same school), 同行 refers to professional peers across companies. Attending a 同行交流会 (peer exchange conference) means networking with industry counterparts."},

{type:"mc", q:"汇报(huìbào) and 报告(bàogào) differ in what way?",
 opts:["汇报 is specifically upward to a superior","They are identical","汇报 is more casual","汇报 is spoken, 报告 is written"],
 ans:"汇报 is specifically upward to a superior",
 hint:"The first character 汇 implies 'gathering and remitting ___.'"},

{type:"mc", q:"To coordinate between departments is:",
 opts:["合作(hézuò)","协调(xiétiáo)","汇报(huìbào)","会议(huìyì)"],
 ans:"协调(xiétiáo)",
 hint:"This word is more sophisticated than 'cooperate.' 协 (harmony) + 调 (adjust)."},

{type:"fb", s:"我(wǒ)在(zài)人力(rénlì)资源(zīyuán){1}工作(gōngzuò)。",
 a:["部门(bùmén)"],
 opts:["部门(bùmén)","会议(huìyì)","合作(hézuò)","同行(tóngháng)"],
 hint:"The word for a division within a company. 部 (section) + 门 (branch).",
 sSrc:"I work in the human resources {1}."},

{type:"match", pairs:[
  {trg:"汇报(huìbào)", src:"to report to a superior"},
  {trg:"会议(huìyì)", src:"meeting"},
  {trg:"部门(bùmén)", src:"department"},
  {trg:"合作(hézuò)", src:"to cooperate"},
  {trg:"协调(xiétiáo)", src:"to coordinate"},
  {trg:"同行(tóngháng)", src:"peer (same profession)"}
]}

]},

// ─── L3: Reports and Presentations ───
{id:"zhv2_u44l3", title:"Reports and Presentations", icon:"🎤", xp:15, board:true, steps:[
{type:"intro", title:"Reports and Presentations",
 desc:"Professional Chinese requires clear reports and confident presentations. Learn the words that let you deliver information effectively in business settings.",
 goals:["Structure a business report","Give formal presentations","Use business vocabulary"]},

{type:"teach", trg:"报告(bàogào)", src:"report / to report", pos:"noun", gender:null,
 note:"报 (report/inform) + 告 (tell/announce).\nBoth noun and verb. Flexible direction.",
 example:"A: 这(zhè)份(fèn)报告(bàogào)请(qǐng)在(zài)周五(zhōuwǔ)前(qián)提交(tíjiāo)。\nB: 好(hǎo)的(de)，我(wǒ)会(huì)按时(ànshí)完成(wánchéng)。",
 exampleSrc:"A: Please submit this report before Friday.\nB: Okay, I will complete it on time.",
 funFact:"Unlike 汇报 (report upward), 报告 is bidirectional. It names the document (written report) as well as the act (presenting to any audience). Government 工作报告 (work reports) are delivered publicly each year to the whole nation."},

{type:"teach", trg:"演讲(yǎnjiǎng)", src:"presentation / speech / to give a speech", pos:"noun", gender:null,
 note:"演 (perform) + 讲 (speak).\nPerforming speech. Used for public speaking and presentations.",
 example:"A: 下(xià)周(zhōu)我(wǒ)要(yào)做(zuò)一(yí)个(gè)演讲(yǎnjiǎng)。\nB: 关于(guānyú)什么(shénme)内容(nèiróng)？",
 exampleSrc:"A: Next week I have to give a presentation.\nB: About what?",
 funFact:"演 (perform) reveals how Chinese thinks about speeches: not mere talking but performance. A good 演讲 is expected to be engaging, rehearsed, and impactful, much like a theatrical performance."},

{type:"teach", trg:"商务(shāngwù)", src:"business affairs / commercial", pos:"noun", gender:null,
 note:"商 (commerce) + 务 (affairs).\nCommerce matters. Attributive: 商务会议 = business meeting.",
 example:"A: 明天(míngtiān)我(wǒ)有(yǒu)一(yí)个(gè)商务(shāngwù)会议(huìyì)。\nB: 希望(xīwàng)一切(yíqiè)顺利(shùnlì)。",
 exampleSrc:"A: Tomorrow I have a business meeting.\nB: Hope everything goes smoothly.",
 funFact:"商务 is the formal business sphere: 商务舱 (business class), 商务旅行 (business trip), 商务宴请 (business banquet). It has a more polished, professional feel than the plainer 生意 (shēngyi, business/trade)."},

{type:"teach", trg:"提交(tíjiāo)", src:"to submit", pos:"verb", gender:null,
 note:"提 (lift/raise) + 交 (hand over).\nLift and hand over. Formal submission verb.",
 example:"A: 我(wǒ)已经(yǐjīng)提交(tíjiāo)了(le)申请(shēnqǐng)。\nB: 什么(shénme)时候(shíhou)能(néng)有(yǒu)结果(jiéguǒ)？",
 exampleSrc:"A: I have already submitted the application.\nB: When will I have a result?",
 funFact:"提交 works in many formal contexts: 提交报告 (submit a report), 提交论文 (submit a thesis), 提交申请 (submit an application). The word has a bureaucratic weight that plainer verbs like 交 (hand over) lack."},

{type:"teach", trg:"讨论(tǎolùn)", src:"to discuss / discussion", pos:"verb", gender:null,
 note:"讨 (request/discuss) + 论 (argue/theory).\nDiscussion with depth.",
 example:"A: 我们(wǒmen)今天(jīntiān)讨论(tǎolùn)一下(yíxià)新(xīn)方案(fāng'àn)。\nB: 好(hǎo)，大家(dàjiā)都(dōu)可以(kěyǐ)提(tí)意见(yìjiàn)。",
 exampleSrc:"A: Today let us discuss the new plan.\nB: Okay, everyone can offer suggestions.",
 funFact:"讨论 implies substantive discussion, not casual chatting. Meetings in Chinese offices often alternate between 讨论 (discuss) and 汇报 (report). Knowing the difference helps you predict meeting style."},

{type:"teach", trg:"方案(fāng'àn)", src:"plan / proposal / scheme", pos:"noun", gender:null,
 note:"方 (method) + 案 (case/plan).\nA specific plan for action.",
 example:"A: 这(zhè)个(gè)方案(fāng'àn)很(hěn)好(hǎo)，我(wǒ)同意(tóngyì)。\nB: 那(nà)我(wǒ)们(men)就(jiù)按(àn)这(zhè)个(gè)方案(fāng'àn)执行(zhíxíng)。",
 exampleSrc:"A: This plan is very good. I agree.\nB: Then let us execute according to this plan.",
 funFact:"方案 is a concrete, detailed plan for a specific task, while 计划 (jìhuà) is a broader strategic plan. In project management, you 制定方案 (formulate plans) as specific responses to problems identified in the broader 计划."},

{type:"mc", q:"Which word specifically describes a formal presentation or speech?",
 opts:["演讲(yǎnjiǎng)","汇报(huìbào)","讨论(tǎolùn)","报告(bàogào)"],
 ans:"演讲(yǎnjiǎng)",
 hint:"The first character 演 means 'perform.' This word implies performative speaking."},

{type:"mc", q:"商务(shāngwù) literally means:",
 opts:["shopping matters","commerce affairs","rich affairs","working arrangements"],
 ans:"commerce affairs",
 hint:"商 means … or trade. 务 means … or business."},

{type:"fb", s:"请(qǐng)在(zài)周五(zhōuwǔ)前(qián){1}你(nǐ)的(de)报告(bàogào)。",
 a:["提交(tíjiāo)"],
 opts:["提交(tíjiāo)","讨论(tǎolùn)","演讲(yǎnjiǎng)","协调(xiétiáo)"],
 hint:"The formal verb for handing in a document. 提 (lift) + 交 (hand over).",
 sSrc:"Please {1} your report before Friday."},

{type:"match", pairs:[
  {trg:"报告(bàogào)", src:"report"},
  {trg:"演讲(yǎnjiǎng)", src:"presentation"},
  {trg:"商务(shāngwù)", src:"business affairs"},
  {trg:"提交(tíjiāo)", src:"to submit"},
  {trg:"讨论(tǎolùn)", src:"to discuss"},
  {trg:"方案(fāng'àn)", src:"plan / proposal"}
]},

{type:"tip", title:"汇报 vs 报告",
 text:"Both involve reporting, but differ.\n汇报: specifically upward to a superior. Spoken or informal.\n报告: can be any direction. Often written documents or formal presentations.\nA subordinate 汇报 to a boss. A consultant delivers a 报告 to a client.",
 deepDive:"The hierarchy implied in 汇报 is an important Chinese business concept. Understanding whether a task requires 汇报 (reporting up) or 报告 (neutral reporting) tells you the expected tone, formality, and stakes."},

{type:"story", speaker:"narrator", mood:"professional", art:"zh-business-meeting",
 trg:"李(Lǐ)经理(jīnglǐ)在(zài)商务(shāngwù)会议(huìyì)上(shàng)做(zuò)了(le)一(yí)个(gè)演讲(yǎnjiǎng)。他(tā)向(xiàng)大家(dàjiā)汇报(huìbào)了(le)新(xīn)方案(fāng'àn)，然后(ránhòu)各(gè)部门(bùmén)讨论(tǎolùn)合作(hézuò)的(de)细节(xìjié)。会议(huìyì)结束(jiéshù)后(hòu)，每(měi)个人(gèrén)都(dōu)要(yào)提交(tíjiāo)自己(zìjǐ)的(de)工作(gōngzuò)报告(bàogào)。",
 src:"Manager Li gave a presentation at the business meeting. He reported the new plan to everyone, and then each department discussed the details of cooperation. After the meeting, everyone had to submit their own work report."}

]}

]};

export default UNIT_44;
