// Unit 29: Law and Justice
// Level: B2.1 (HSK 4)
// Chinese (Mandarin) V2 format with hanzi+pinyin notation

const UNIT_29 = {
n:29, lang:"zh", srcLang:"en", track:"v2",
title:"法律与正义 Law and Justice", sub:"Legal System",
icon:"⚖️", level:"B2.1", color:"#7B5EE8",
lessons:[

// ─── L1: Legal Professions and Concepts ───
{id:"zhv2_u29l1", title:"法律人物 Legal Figures", icon:"👨‍⚖️", xp:15, board:true, steps:[
{type:"intro", title:"法律人物 Legal Figures",
 desc:"Learn to discuss courts, judges, lawyers, and core legal concepts in Chinese. Understanding legal vocabulary is essential for reading news and navigating formal situations.",
 goals:["Identify legal professionals with 法官 and 律师","Distinguish 合法 from 违法","Discuss crime and evidence with 犯罪 and 证据"]},

{type:"teach", trg:"法官(fǎguān)", src:"judge", pos:"noun", gender:null,
 note:"法 = law, 官 = official.\nThe person who presides over a court case.",
 example:"A: 法官(fǎguān)宣布(xuānbù)了(le)判决(pànjué)。\nB: 被告(bèigào)对(duì)结果(jiéguǒ)不(bù)满意(mǎnyì)。",
 exampleSrc:"A: The judge announced the verdict.\nB: The defendant was not satisfied with the result.",
 funFact:"In ancient China, the local magistrate (县官) served as judge, jury, and prosecutor all in one. The modern separation of legal roles was introduced during the late Qing dynasty reforms in the early 1900s."},

{type:"teach", trg:"律师(lǜshī)", src:"lawyer", pos:"noun", gender:null,
 note:"律 = law/rule, 师 = master/teacher.\nThe professional who represents clients in legal matters.",
 example:"A: 你(nǐ)需要(xūyào)请(qǐng)一(yí)个(gè)律师(lǜshī)。\nB: 好(hǎo)的(de)，我(wǒ)朋友(péngyou)认识(rènshi)一(yí)位(wèi)很(hěn)好(hǎo)的(de)律师(lǜshī)。",
 exampleSrc:"A: You need to hire a lawyer.\nB: Okay, my friend knows a very good lawyer.",
 funFact:"The 师 suffix appears in many respected professions: 老师(lǎoshī) teacher, 医师(yīshī) doctor, 工程师(gōngchéngshī) engineer. It carries the meaning of 'master' or 'skilled person.'"},

{type:"teach", trg:"合法(héfǎ)", src:"legal / lawful", pos:"adj", gender:null,
 note:"合 = conform to, 法 = law.\nDescribes something that is within the law.",
 example:"A: 这(zhè)种(zhǒng)做法(zuòfǎ)合法(héfǎ)吗(ma)？\nB: 完全(wánquán)合法(héfǎ)，不(bù)用(yòng)担心(dānxīn)。",
 exampleSrc:"A: Is this practice legal?\nB: Completely legal, do not worry.",
 funFact:"合 means 'to conform to' or 'to match.' It appears in many useful compounds: 合适(héshì) suitable, 合作(hézuò) cooperation, 合同(hétong) contract. The idea is always about things fitting together properly."},

{type:"teach", trg:"违法(wéifǎ)", src:"illegal / to break the law", pos:"adj", gender:null,
 note:"违 = violate/go against, 法 = law.\nThe opposite of 合法. Can be adjective or verb.",
 example:"A: 违法(wéifǎ)的(de)行为(xíngwéi)会(huì)受到(shòudào)惩罚(chéngfá)。\nB: 所以(suǒyǐ)我们(wǒmen)要(yào)遵守(zūnshǒu)法律(fǎlǜ)。",
 exampleSrc:"A: Illegal behavior will be punished.\nB: So we must obey the law.",
 funFact:"违 means 'to go against.' The opposite pair 合法/违法 shows how Chinese builds vocabulary through logical antonyms: 合(conform) vs 违(violate), both paired with 法(law)."},

{type:"teach", trg:"犯罪(fànzuì)", src:"to commit a crime / crime", pos:"verb", gender:null,
 note:"犯 = commit/offend, 罪 = crime/sin.\nCan be used as both verb and noun.",
 example:"A: 犯罪(fànzuì)率(lǜ)在(zài)下降(xiàjiàng)。\nB: 这(zhè)说明(shuōmíng)社会(shèhuì)越来越(yuèláiyuè)安全(ānquán)了(le)。",
 exampleSrc:"A: The crime rate is decreasing.\nB: This shows society is becoming safer.",
 funFact:"The character 罪 originally depicted a fishing net on top (网) and a nose below (自). The ancient meaning was 'to be caught' like a fish in a net. Over time it came to mean crime or guilt."},

{type:"teach", trg:"证据(zhèngjù)", src:"evidence / proof", pos:"noun", gender:null,
 note:"证 = prove/testify, 据 = basis/according to.\nThe foundation of any legal argument.",
 example:"A: 警察(jǐngchá)找到(zhǎodào)了(le)重要(zhòngyào)的(de)证据(zhèngjù)。\nB: 这(zhè)对(duì)案件(ànjiàn)很(hěn)关键(guānjiàn)。",
 exampleSrc:"A: The police found important evidence.\nB: This is crucial for the case.",
 funFact:"In ancient Chinese courts, evidence was less important than confessions. The saying '口供为王' (confession is king) reflected old legal culture. Modern Chinese law has shifted to evidence-based proceedings."},

{type:"mc", q:"合法(héfǎ) and 违法(wéifǎ) are opposites. What makes them opposites?",
 opts:["合(conform) vs 违(violate)","法(law) vs 律(rule)","The tone difference","Different sentence positions"],
 ans:"合(conform) vs 违(violate)",
 hint:"Both words share the same second character 法 (law). The first character determines whether something conforms to or violates the law."},

{type:"match", pairs:[
  {trg:"法官(fǎguān)", src:"judge"},
  {trg:"律师(lǜshī)", src:"lawyer"},
  {trg:"合法(héfǎ)", src:"legal"},
  {trg:"违法(wéifǎ)", src:"illegal"},
  {trg:"犯罪(fànzuì)", src:"crime"},
  {trg:"证据(zhèngjù)", src:"evidence"}
]},

{type:"fb", s:"警察(jǐngchá)找到(zhǎodào)了(le)重要(zhòngyào)的(de){1}。",
 a:["证据(zhèngjù)"],
 opts:["证据(zhèngjù)","犯罪(fànzuì)","法官(fǎguān)","律师(lǜshī)"],
 hint:"What do police search for to prove that a crime occurred?",
 sSrc:"The police found important {1}."},

{type:"mc", q:"你(nǐ)需要(xūyào)请(qǐng)一(yí)个(gè)律师(lǜshī)。 What does this advise?",
 opts:["The evidence is important","You need to hire a lawyer","You need to see a judge","The crime was illegal"],
 ans:"You need to hire a lawyer",
 hint:"请 here means 'to ___' or 'to invite.' 律师 is the legal professional who represents you."},

{type:"fb", s:"{1}的(de)行为(xíngwéi)会(huì)受到(shòudào)惩罚(chéngfá)。",
 a:["违法(wéifǎ)"],
 opts:["违法(wéifǎ)","合法(héfǎ)","犯罪(fànzuì)","公正(gōngzhèng)"],
 hint:"Which adjective describes behavior that goes against the law?",
 sSrc:"{1} behavior will be punished."}
]},

// ─── L2: Verdicts and Rights ───
{id:"zhv2_u29l2", title:"判决与权利 Verdicts and Rights", icon:"📋", xp:15, board:true, steps:[
{type:"intro", title:"判决与权利 Verdicts and Rights",
 desc:"Learn to discuss court verdicts, legal cases, and citizens' rights. These words help you understand news reports and legal discussions.",
 goals:["Discuss verdicts with 判决 and 案件","Talk about rights and guarantees using 权利 and 保障","Use 公正 to discuss fairness"]},

{type:"teach", trg:"判决(pànjué)", src:"verdict / to sentence", pos:"noun", gender:null,
 note:"判 = judge/decide, 决 = determine.\nThe final decision in a court case.",
 example:"A: 法院(fǎyuàn)的(de)判决(pànjué)公正(gōngzhèng)吗(ma)？\nB: 大多数(dàduōshù)人(rén)认为(rènwéi)是(shì)公正(gōngzhèng)的(de)。",
 exampleSrc:"A: Was the court's verdict fair?\nB: Most people think it was fair.",
 funFact:"The character 判 shows a knife (刂) on the right, reflecting the original meaning of 'to cut' or 'to divide.' A verdict 'cuts through' confusion to reach a clear decision."},

{type:"teach", trg:"案件(ànjiàn)", src:"case (legal)", pos:"noun", gender:null,
 note:"案 = case/desk, 件 = item/matter.\nRefers to a legal case or court matter.",
 example:"A: 这(zhè)个(gè)案件(ànjiàn)很(hěn)复杂(fùzá)。\nB: 律师(lǜshī)需要(xūyào)更(gèng)多(duō)时间(shíjiān)准备(zhǔnbèi)。",
 exampleSrc:"A: This case is very complex.\nB: The lawyer needs more time to prepare.",
 funFact:"案 originally meant 'a flat desk or table.' Legal documents were placed on the official's desk for review, so 案 came to mean 'a case under review.' The physical desk became the metaphor for legal proceedings."},

{type:"teach", trg:"权利(quánlì)", src:"rights", pos:"noun", gender:null,
 note:"权 = power/authority, 利 = benefit/interest.\nLegal or civil rights that belong to individuals.",
 example:"A: 每(měi)个(gè)公民(gōngmín)都(dōu)有(yǒu)受(shòu)教育(jiàoyù)的(de)权利(quánlì)。\nB: 这(zhè)是(shì)宪法(xiànfǎ)规定(guīdìng)的(de)。",
 exampleSrc:"A: Every citizen has the right to education.\nB: This is stipulated by the constitution.",
 funFact:"Be careful not to confuse 权利(quánlì) 'rights' with 权力(quánlì) 'power.' They sound identical but use different second characters: 利(benefit) vs 力(force). This homophone pair often appears in exams."},

{type:"teach", trg:"保障(bǎozhàng)", src:"to guarantee / safeguard", pos:"verb", gender:null,
 note:"保 = protect, 障 = shield/barrier.\nTo ensure or protect rights, safety, or welfare.",
 example:"A: 法律(fǎlǜ)保障(bǎozhàng)公民(gōngmín)的(de)权利(quánlì)。\nB: 这(zhè)是(shì)法治(fǎzhì)社会(shèhuì)的(de)基础(jīchǔ)。",
 exampleSrc:"A: The law safeguards citizens' rights.\nB: This is the foundation of a society governed by law.",
 funFact:"障 contains the ear radical (耳) on the left. The original meaning related to 'obstructing sound.' It evolved to mean any barrier or shield. 保障 pairs 'protect' with 'shield' for emphasis."},

{type:"teach", trg:"公正(gōngzhèng)", src:"justice / fair", pos:"adj", gender:null,
 note:"公 = public/fair, 正 = correct/upright.\nDescribes fairness and impartiality.",
 example:"A: 我们(wǒmen)需要(xūyào)一(yí)个(gè)公正(gōngzhèng)的(de)审判(shěnpàn)。\nB: 法官(fǎguān)会(huì)根据(gēnjù)证据(zhèngjù)做出(zuòchū)判决(pànjué)。",
 exampleSrc:"A: We need a fair trial.\nB: The judge will make a verdict based on the evidence.",
 funFact:"公 originally depicted a container dividing something equally. Combined with 正 (upright/straight), 公正 paints a picture of dividing things equally while standing upright. Justice is both equal distribution and moral uprightness."},

{type:"teach", trg:"规定(guīdìng)", src:"regulation / to stipulate", pos:"noun", gender:null,
 note:"规 = rule/standard, 定 = determine/fixed.\nOfficial rules or established requirements.",
 example:"A: 公司(gōngsī)有(yǒu)什么(shénme)新(xīn)规定(guīdìng)？\nB: 员工(yuángōng)必须(bìxū)每(měi)天(tiān)打卡(dǎkǎ)。",
 exampleSrc:"A: What new regulations does the company have?\nB: Employees must clock in every day.",
 funFact:"规 originally meant a compass used for drawing circles. The compass sets a standard. From this tool meaning, 规 expanded to mean any rule or standard that shapes behavior."},

{type:"tip", title:"Legal Vocabulary Structure",
 text:"Chinese legal vocabulary follows clear compound patterns:\n\nPerson + Role:\n法(law) + 官(official) = 法官(fǎguān) judge\n律(rule) + 师(master) = 律师(lǜshī) lawyer\n\nAction + Result:\n判(judge) + 决(decide) = 判决(pànjué) verdict\n犯(commit) + 罪(crime) = 犯罪(fànzuì) crime\n\nConform/Violate + Law:\n合(fit) + 法(law) = 合法(héfǎ) legal\n违(violate) + 法(law) = 违法(wéifǎ) illegal\n\nKnowing these patterns helps you decode new legal terms.",
 deepDive:{title:"Chinese Legal Tradition",
  text:"China's legal system has undergone dramatic changes over its 5,000-year history. Ancient legalism (法家) treated law as a tool of state control, not individual rights. The concept of 权利 (rights belonging to individuals) was introduced from Western legal philosophy in the late 1800s.\n\nModern Chinese law blends continental European legal traditions (especially German civil law) with Chinese characteristics. Understanding this hybrid background helps explain why some legal concepts have different emphases than in common law countries like the US or UK."}},

{type:"mc", q:"法律(fǎlǜ)保障(bǎozhàng)公民(gōngmín)的(de)权利(quánlì)。 What does this mean?",
 opts:["The law safeguards citizens' rights","The judge announced the verdict","The lawyer found evidence","The crime rate decreased"],
 ans:"The law safeguards citizens' rights",
 hint:"保障 means 'to safeguard,' 公民 means 'citizen,' and 权利 means '___.'"},

{type:"match", pairs:[
  {trg:"判决(pànjué)", src:"verdict"},
  {trg:"案件(ànjiàn)", src:"case"},
  {trg:"权利(quánlì)", src:"rights"},
  {trg:"保障(bǎozhàng)", src:"to guarantee"},
  {trg:"公正(gōngzhèng)", src:"fair/just"},
  {trg:"规定(guīdìng)", src:"regulation"}
]},

{type:"fb", s:"这(zhè)个(gè){1}很(hěn)复杂(fùzá)，律师(lǜshī)需要(xūyào)更(gèng)多(duō)时间(shíjiān)。",
 a:["案件(ànjiàn)"],
 opts:["案件(ànjiàn)","判决(pànjué)","权利(quánlì)","规定(guīdìng)"],
 hint:"Which noun refers to a legal matter or case being handled in court?",
 sSrc:"This {1} is very complex, the lawyer needs more time."},

{type:"mc", q:"公正(gōngzhèng) combines which two meanings?",
 opts:["Evidence + proof","Public/fair + correct/upright","Crime + punishment","Law + power"],
 ans:"Public/fair + correct/upright",
 hint:"Break the word into its two characters: 公 and 正. What does each one mean on its own?"},

{type:"fb", s:"法官(fǎguān)会(huì)根据(gēnjù)证据(zhèngjù)做出(zuòchū){1}。",
 a:["判决(pànjué)"],
 opts:["判决(pànjué)","犯罪(fànzuì)","案件(ànjiàn)","规定(guīdìng)"],
 hint:"What is the final decision that a judge announces in court?",
 sSrc:"The judge will make a {1} based on the evidence."}
]},

// ─── L3: Legal Actions and Agreements ───
{id:"zhv2_u29l3", title:"法律行动 Legal Actions", icon:"📝", xp:15, board:true, steps:[
{type:"intro", title:"法律行动 Legal Actions",
 desc:"Learn vocabulary for lawsuits, compensation, and legal agreements. These terms are essential for understanding contracts and dispute resolution.",
 goals:["Use 起诉 and 赔偿 for lawsuits and compensation","Discuss agreements with 协议","Combine all legal vocabulary in context"]},

{type:"teach", trg:"起诉(qǐsù)", src:"to sue / to prosecute", pos:"verb", gender:null,
 note:"起 = to start/rise, 诉 = to accuse/tell.\nTo initiate legal proceedings against someone.",
 example:"A: 他(tā)决定(juédìng)起诉(qǐsù)那(nà)家(jiā)公司(gōngsī)。\nB: 律师(lǜshī)说(shuō)他(tā)有(yǒu)足够(zúgòu)的(de)证据(zhèngjù)。",
 exampleSrc:"A: He decided to sue that company.\nB: The lawyer says he has enough evidence.",
 funFact:"诉 contains the speech radical (讠) because suing involves 'speaking out' grievances. In ancient China, commoners had to beat a drum outside the magistrate's office to file a complaint, literally making noise to be heard."},

{type:"teach", trg:"赔偿(péicháng)", src:"compensation / to compensate", pos:"noun", gender:null,
 note:"赔 = compensate/pay for, 偿 = repay.\nPayment for damages or losses.",
 example:"A: 法院(fǎyuàn)判(pàn)公司(gōngsī)赔偿(péicháng)损失(sǔnshī)。\nB: 赔偿(péicháng)金额(jīn'é)是(shì)多少(duōshao)？",
 exampleSrc:"A: The court ruled the company must pay compensation for losses.\nB: What is the compensation amount?",
 funFact:"赔 contains the shell radical (贝) which appears in many money-related characters. In ancient China, cowrie shells were used as currency. Characters like 买(buy), 卖(sell), 贵(expensive) all contain this 'shell money' component."},

{type:"teach", trg:"协议(xiéyì)", src:"agreement / accord", pos:"noun", gender:null,
 note:"协 = cooperate/assist, 议 = discuss.\nA formal agreement reached through discussion.",
 example:"A: 双方(shuāngfāng)签(qiān)了(le)一(yí)份(fèn)协议(xiéyì)。\nB: 协议(xiéyì)的(de)内容(nèiróng)对(duì)双方(shuāngfāng)都(dōu)公正(gōngzhèng)。",
 exampleSrc:"A: Both parties signed an agreement.\nB: The content of the agreement is fair to both sides.",
 funFact:"协 shows three 力 (force/effort) components, suggesting multiple forces working together. An agreement requires cooperation from all parties, and the character itself visually represents this collective effort."},

{type:"mc", q:"他(tā)决定(juédìng)起诉(qǐsù)那(nà)家(jiā)公司(gōngsī)。 What did he decide?",
 opts:["To sue that company","To join that company","To compensate that company","To sign an agreement with that company"],
 ans:"To sue that company",
 hint:"起诉 means to initiate legal action against someone. 决定 means 'decided.'"},

{type:"match", pairs:[
  {trg:"起诉(qǐsù)", src:"to sue"},
  {trg:"赔偿(péicháng)", src:"compensation"},
  {trg:"协议(xiéyì)", src:"agreement"}
]},

{type:"fb", s:"法院(fǎyuàn)判(pàn)公司(gōngsī){1}损失(sǔnshī)。",
 a:["赔偿(péicháng)"],
 opts:["赔偿(péicháng)","起诉(qǐsù)","协议(xiéyì)","判决(pànjué)"],
 hint:"The court ordered the company to pay for the damages. What word means to compensate?",
 sSrc:"The court ruled the company must {1} the losses."},

{type:"mc", q:"协议(xiéyì) contains the concept of:",
 opts:["Physical evidence","Cooperative discussion","Single authority","Criminal punishment"],
 ans:"Cooperative discussion",
 hint:"协 means 'cooperate' and 议 means 'discuss.' What does a formal agreement require?"},

{type:"fb", s:"双方(shuāngfāng)签(qiān)了(le)一(yí)份(fèn){1}。",
 a:["协议(xiéyì)"],
 opts:["协议(xiéyì)","判决(pànjué)","证据(zhèngjù)","犯罪(fànzuì)"],
 hint:"Both parties put their signatures on a formal document. What is it called?",
 sSrc:"Both parties signed an {1}."},

{type:"drag_fill",
 s:"{1}根据(gēnjù){2}做出(zuòchū)了(le)公正(gōngzhèng)的(de)判决(pànjué)。",
 blanks:{"1":"法官(fǎguān)","2":"证据(zhèngjù)"},
 pool:["法官(fǎguān)","证据(zhèngjù)","律师(lǜshī)","协议(xiéyì)"],
 hint:"The person who presides over court made a decision based on proof."},

{type:"mc", q:"Which pair are logical opposites?",
 opts:["起诉(qǐsù) / 赔偿(péicháng)","证据(zhèngjù) / 案件(ànjiàn)","合法(héfǎ) / 违法(wéifǎ)","法官(fǎguān) / 律师(lǜshī)"],
 ans:"合法(héfǎ) / 违法(wéifǎ)",
 hint:"One means 'conforming to law' and the other means 'violating law.' They share the same second character."},

{type:"match", pairs:[
  {trg:"法官(fǎguān)", src:"judge"},
  {trg:"合法(héfǎ)", src:"legal"},
  {trg:"权利(quánlì)", src:"rights"},
  {trg:"起诉(qǐsù)", src:"to sue"},
  {trg:"赔偿(péicháng)", src:"compensation"}
]}
]}

]};

export default UNIT_29;
