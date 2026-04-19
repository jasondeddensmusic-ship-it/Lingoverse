// Unit 16: Cause and Effect
// Level: B1.1 (HSK 3)
// Chinese (Mandarin) V2 format with hanzi+pinyin notation

const UNIT_16 = {
n:16, lang:"zh", srcLang:"en", track:"v2",
title:"因为...所以... Because...Therefore...", sub:"Complex Sentences",
icon:"🔗", level:"B1.1", color:"#7B5EE8",
lessons:[

// ─── L1: Cause and Result ───
{id:"zhv2_u16l1", title:"因为...所以... Because...So...", icon:"🔗", xp:15, board:true, steps:[
{type:"intro", title:"因为...所以... Because...So...",
 desc:"Learn to express cause and effect in Chinese. The paired connector 因为...所以 is one of the most important sentence patterns at the intermediate level.",
 goals:["Express reasons with 因为...所以","Use 结果 and 原因 to discuss outcomes","Build complex sentences with cause-effect logic"]},

{type:"teach", trg:"因为(yīnwèi)", src:"because", pos:"conj", gender:null,
 note:"Introduces the cause/reason clause. Almost always paired with 所以.\n因 = cause, 为 = for/because of.",
 example:"A: 你(nǐ)为什么(wèishénme)迟到(chídào)了(le)？\nB: 因为(yīnwèi)下雨(xiàyǔ)了(le)。",
 exampleSrc:"A: Why were you late?\nB: Because it rained.",
 funFact:"Unlike English, Chinese can use BOTH 'because' and 'therefore' in one sentence. In English you pick one. In Chinese you use the pair together."},

{type:"teach", trg:"所以(suǒyǐ)", src:"therefore / so", pos:"conj", gender:null,
 note:"Introduces the result clause. Paired with 因为 in formal usage.\n所 = place/that which, 以 = by means of.",
 example:"A: 今天(jīntiān)很(hěn)冷(lěng)。\nB: 所以(suǒyǐ)我(wǒ)穿(chuān)了(le)很(hěn)多(duō)衣服(yīfu)。",
 exampleSrc:"A: Today is very cold.\nB: So I wore lots of clothes.",
 funFact:"You can drop 因为 and start with 所以 alone when the reason is already obvious from context. This is very common in everyday speech."},

{type:"tip", title:"The 因为...所以 Pattern",
 text:"This is Chinese's primary cause-effect structure:\n\n因为(yīnwèi) + [reason], 所以(suǒyǐ) + [result]\n\nFull: 因为(yīnwèi)下雨(xiàyǔ)了(le)，所以(suǒyǐ)我(wǒ)没(méi)去(qù)。\nBecause it rained, so I did not go.\n\nYou can drop either half:\n因为(yīnwèi)下雨(xiàyǔ)了(le)，我(wǒ)没(méi)去(qù)。\n下雨(xiàyǔ)了(le)，所以(suǒyǐ)我(wǒ)没(méi)去(qù)。\n\nAll three versions are correct and natural.",
 deepDive:{title:"Paired Connectors in Chinese",
  text:"Chinese loves paired connectors (called correlative conjunctions). They frame the logical relationship clearly:\n\n因为...所以 = because...therefore\n如果...就 = if...then\n虽然...但是 = although...but\n不但...而且 = not only...but also\n\nThink of them like bookends: the first word opens the logic, the second word delivers the conclusion. You will learn several more pairs in this unit."}},

{type:"teach", trg:"结果(jiéguǒ)", src:"result / outcome", pos:"noun", gender:null,
 note:"Can also function as a conjunction meaning 'as a result.'\n结 = tie/conclude, 果 = fruit/outcome.",
 example:"A: 考试(kǎoshì)的(de)结果(jiéguǒ)怎么样(zěnmeyàng)？\nB: 结果(jiéguǒ)很(hěn)好(hǎo)，我(wǒ)通过(tōngguò)了(le)。",
 exampleSrc:"A: How was the exam result?\nB: The result was good, I passed.",
 funFact:"果 originally depicted fruit hanging from a tree. Results are the 'fruit' of your actions. This metaphor exists in many languages, including English: 'the fruits of your labor.'"},

{type:"teach", trg:"原因(yuányīn)", src:"reason / cause", pos:"noun", gender:null,
 note:"The noun form for 'reason.' More formal than 因为.\n原 = original/source, 因 = cause.",
 example:"A: 你(nǐ)知道(zhīdào)原因(yuányīn)吗(ma)？\nB: 主要(zhǔyào)原因(yuányīn)是(shì)时间(shíjiān)不够(búgòu)。",
 exampleSrc:"A: Do you know the reason?\nB: The main reason is not enough time.",
 funFact:"原 means 'source' or 'origin,' and 因 means 'cause.' Together they mean 'the original cause.' Chinese loves building words from meaningful character pairs."},

{type:"teach", trg:"影响(yǐngxiǎng)", src:"influence / to affect", pos:"noun", gender:null,
 note:"Works as both noun and verb. Very common in formal speech.\n影 = shadow, 响 = sound/echo.",
 example:"A: 天气(tiānqì)对(duì)你(nǐ)有(yǒu)影响(yǐngxiǎng)吗(ma)？\nB: 有(yǒu)，下雨(xiàyǔ)影响(yǐngxiǎng)了(le)我(wǒ)的(de)心情(xīnqíng)。",
 exampleSrc:"A: Does the weather affect you?\nB: Yes, the rain affected my mood.",
 funFact:"影 (shadow) plus 响 (echo) creates 'influence.' The idea: influence is like a shadow or an echo, something you feel even when you cannot see the source directly."},

{type:"mc", q:"因为(yīnwèi)今天(jīntiān)下雨(xiàyǔ)，___我(wǒ)带(dài)了(le)伞(sǎn)。",
 opts:["所以(suǒyǐ)","因为(yīnwèi)","但是(dànshì)","可是(kěshì)"],
 ans:"所以(suǒyǐ)",
 hint:"The first half gives the cause with 因为. What word introduces the resulting action?"},

{type:"fb", s:"{1}今天(jīntiān)很(hěn)热(rè)，所以(suǒyǐ)我(wǒ)喝(hē)了(le)很(hěn)多(duō)水(shuǐ)。",
 a:["因为(yīnwèi)"],
 opts:["因为(yīnwèi)","所以(suǒyǐ)","但是(dànshì)","如果(rúguǒ)"],
 hint:"Which conjunction introduces the reason or cause at the start of a sentence?",
 sSrc:"{1} today is very hot, so I drank a lot of water."},

{type:"match", pairs:[
  {trg:"因为(yīnwèi)", src:"because"},
  {trg:"所以(suǒyǐ)", src:"therefore / so"},
  {trg:"结果(jiéguǒ)", src:"result / outcome"},
  {trg:"原因(yuányīn)", src:"reason / cause"},
  {trg:"影响(yǐngxiǎng)", src:"influence / to affect"}
]},

{type:"mc", q:"这(zhè)件(jiàn)事(shì)的(de)___是(shì)什么(shénme)？ (What is the ___ of this matter?)",
 opts:["结果(jiéguǒ)","因为(yīnwèi)","所以(suǒyǐ)","影响(yǐngxiǎng)"],
 ans:"原因(yuányīn)",
 hint:"You are asking about the underlying cause. Which noun means 'reason' or 'cause'?"},

{type:"fb", s:"考试(kǎoshì)的(de){1}出来(chūlái)了(le)，我(wǒ)考(kǎo)得(de)很(hěn)好(hǎo)。",
 a:["结果(jiéguǒ)"],
 opts:["结果(jiéguǒ)","原因(yuányīn)","影响(yǐngxiǎng)","所以(suǒyǐ)"],
 hint:"The exam's ___ came out. Which noun means 'result' or 'outcome'?",
 sSrc:"The exam {1} came out, I did very well."},

{type:"mc", q:"天气(tiānqì)对(duì)我(wǒ)的(de)计划(jìhuà)有(yǒu)很(hěn)大(dà)的(de)___。",
 opts:["影响(yǐngxiǎng)","原因(yuányīn)","结果(jiéguǒ)","因为(yīnwèi)"],
 ans:"影响(yǐngxiǎng)",
 hint:"The weather has a big ___ on my plans. Which word means 'influence' or 'effect'?"}
]},

// ─── L2: Conditional and Compound Patterns ───
{id:"zhv2_u16l2", title:"如果...就 If...Then", icon:"🔀", xp:15, board:true, steps:[
{type:"intro", title:"如果...就 If...Then",
 desc:"Express hypothetical situations and compound ideas. Learn to say 'if...then,' 'not only...but also,' and 'as long as.' These connectors give your Chinese real sophistication.",
 goals:["Express conditions with 如果...就","Connect ideas with 不但...而且","Use 只要...就 for sufficient conditions"]},

{type:"teach", trg:"如果(rúguǒ)", src:"if", pos:"conj", gender:null,
 note:"Opens a conditional clause. Paired with 就 for the result.\n如 = like/as if, 果 = fruit/result.",
 example:"A: 如果(rúguǒ)明天(míngtiān)下雨(xiàyǔ)怎么办(zěnmebàn)？\nB: 如果(rúguǒ)下雨(xiàyǔ)，我们(wǒmen)就(jiù)在(zài)家(jiā)看(kàn)电影(diànyǐng)。",
 exampleSrc:"A: What if it rains tomorrow?\nB: If it rains, then we will watch a movie at home.",
 funFact:"如 means 'as if' and 果 means 'result.' Together: 'as if the result were.' Chinese conditional thinking is built around imagining outcomes."},

{type:"teach", trg:"就(jiù)", src:"then / right away", pos:"adv", gender:null,
 note:"In conditionals, marks the result clause. Also means 'immediately.'\nOne of the most versatile words in Chinese.",
 example:"A: 你(nǐ)准备(zhǔnbèi)好(hǎo)了(le)吗(ma)？\nB: 如果(rúguǒ)你(nǐ)准备(zhǔnbèi)好(hǎo)了(le)，我们(wǒmen)就(jiù)走(zǒu)吧(ba)。",
 exampleSrc:"A: Are you ready?\nB: If you are ready, then let us go.",
 funFact:"就 has over 10 meanings depending on context: 'then,' 'right away,' 'only,' 'exactly,' 'even if.' It is one of the hardest Chinese words for learners because of this flexibility."},

{type:"teach", trg:"不但(búdàn)", src:"not only", pos:"conj", gender:null,
 note:"First half of the 不但...而且 pair.\n不 = not, 但 = only/but. Together: 'not merely.'",
 example:"A: 她(tā)学(xué)得(de)怎么样(zěnmeyàng)？\nB: 她(tā)不但(búdàn)聪明(cōngmíng)，而且(érqiě)很(hěn)努力(nǔlì)。",
 exampleSrc:"A: How is her learning going?\nB: She is not only smart, but also very hardworking.",
 funFact:"This pattern always builds upward: the second part should be MORE impressive or surprising than the first. Putting the weaker point first is the Chinese rhetorical convention."},

{type:"teach", trg:"而且(érqiě)", src:"but also / moreover", pos:"conj", gender:null,
 note:"Second half of 不但...而且. Adds emphasis to the second point.\n而 = and/but, 且 = also/moreover.",
 example:"A: 这(zhè)个(ge)餐厅(cāntīng)好(hǎo)吗(ma)？\nB: 不但(búdàn)好吃(hǎochī)，而且(érqiě)很(hěn)便宜(piányi)。",
 exampleSrc:"A: Is this restaurant good?\nB: Not only delicious, but also very cheap.",
 funFact:"而且 can also stand alone without 不但, meaning 'moreover' or 'furthermore.' It works as a general intensifier when adding information."},

{type:"teach", trg:"只要(zhǐyào)", src:"as long as", pos:"conj", gender:null,
 note:"Expresses a sufficient condition. Paired with 就.\n只 = only, 要 = need. Literally: only need to.",
 example:"A: 学(xué)中文(zhōngwén)难(nán)吗(ma)？\nB: 只要(zhǐyào)你(nǐ)每天(měitiān)练习(liànxí)，就(jiù)不(bù)难(nán)。",
 exampleSrc:"A: Is learning Chinese hard?\nB: As long as you practice every day, it is not hard.",
 funFact:"只要 sets a minimum threshold: 'you only need this ONE thing.' It implies the condition is achievable, making it encouraging. Teachers love using it with students."},

{type:"tip", title:"Conditional Patterns Compared",
 text:"Three conditional patterns, each with a different nuance:\n\n如果(rúguǒ)...就(jiù) = if...then (general hypothesis)\n只要(zhǐyào)...就(jiù) = as long as...then (minimum condition)\n除了(chúle)...以外(yǐwài) = besides/except... (coming next lesson)\n\nExamples:\n如果(rúguǒ)有(yǒu)时间(shíjiān)，我(wǒ)就(jiù)去(qù)。\nIf I have time, then I will go.\n\n只要(zhǐyào)努力(nǔlì)，就(jiù)能(néng)成功(chénggōng)。\nAs long as you work hard, you can succeed.",
 deepDive:{title:"就 as the Result Marker",
  text:"Notice that 就 appears in BOTH patterns as the result marker. This is a key insight: in Chinese conditional sentences, 就 is the signal that tells the listener 'here comes the consequence.'\n\nThink of 就 as a logical arrow pointing from condition to result. The word before 就 sets up the situation. Everything after 就 is what happens because of it.\n\nThis is different from English 'then,' which is optional. In Chinese, dropping 就 in these patterns sounds incomplete."}},

{type:"mc", q:"如果(rúguǒ)明天(míngtiān)有(yǒu)时间(shíjiān)，我们(wǒmen)___去(qù)公园(gōngyuán)。",
 opts:["就(jiù)","才(cái)","因为(yīnwèi)","而且(érqiě)"],
 ans:"就(jiù)",
 hint:"In a conditional sentence, this word marks the result clause after the 'if' condition."},

{type:"fb", s:"她(tā){1}会(huì)说(shuō)英语(yīngyǔ)，而且(érqiě)会(huì)说(shuō)法语(fǎyǔ)。",
 a:["不但(búdàn)"],
 opts:["不但(búdàn)","因为(yīnwèi)","如果(rúguǒ)","只要(zhǐyào)"],
 hint:"This paired connector means 'not only' and is followed by 'but also' in the second half.",
 sSrc:"She {1} can speak English, but also can speak French."},

{type:"match", pairs:[
  {trg:"如果(rúguǒ)", src:"if"},
  {trg:"就(jiù)", src:"then"},
  {trg:"不但(búdàn)", src:"not only"},
  {trg:"而且(érqiě)", src:"but also"},
  {trg:"只要(zhǐyào)", src:"as long as"}
]},

{type:"mc", q:"___你(nǐ)每天(měitiān)复习(fùxí)，就(jiù)能(néng)记住(jìzhù)。",
 opts:["只要(zhǐyào)","不但(búdàn)","所以(suǒyǐ)","而且(érqiě)"],
 ans:"只要(zhǐyào)",
 hint:"This connector sets a minimum condition: 'you only need to do this one thing' for the result."},

{type:"fb", s:"这(zhè)个(ge)地方(dìfang)不但(búdàn)漂亮(piàoliang)，{1}很(hěn)安静(ānjìng)。",
 a:["而且(érqiě)"],
 opts:["而且(érqiě)","所以(suǒyǐ)","就(jiù)","因为(yīnwèi)"],
 hint:"Which connector completes the 'not only...but also' pair?",
 sSrc:"This place is not only beautiful, {1} very quiet."},

{type:"mc", q:"Which sentence correctly uses 如果...就?",
 opts:["如果(rúguǒ)你(nǐ)来(lái)，我(wǒ)就(jiù)很(hěn)高兴(gāoxìng)。","就(jiù)你(nǐ)来(lái)，如果(rúguǒ)我(wǒ)高兴(gāoxìng)。","我(wǒ)如果(rúguǒ)就(jiù)来(lái)你(nǐ)高兴(gāoxìng)。","因为(yīnwèi)你(nǐ)来(lái)，而且(érqiě)我(wǒ)高兴(gāoxìng)。"],
 ans:"如果(rúguǒ)你(nǐ)来(lái)，我(wǒ)就(jiù)很(hěn)高兴(gāoxìng)。",
 hint:"The condition goes after 如果, then a comma, then 就 introduces the result."},

{type:"drag_fill",
 s:"她(tā){1}学习(xuéxí)好(hǎo)，{2}很(hěn)会(huì)画画(huàhuà)。",
 blanks:{"1":"不但(búdàn)","2":"而且(érqiě)"},
 pool:["不但(búdàn)","而且(érqiě)","因为(yīnwèi)","所以(suǒyǐ)"],
 hint:"This sentence says someone is not only good at studying but also good at painting."}
]},

// ─── L3: Formal Connectors and Problem-Solving ───
{id:"zhv2_u16l3", title:"解决问题 Solving Problems", icon:"🧩", xp:15, board:true, steps:[
{type:"intro", title:"解决问题 Solving Problems",
 desc:"Learn formal cause-effect vocabulary for discussing problems, solutions, and situations. These words appear frequently in news, exams, and professional conversations.",
 goals:["Use 除了...以外 for exceptions and additions","Discuss problems with 情况, 办法, 关系","Express formal causation with 因此 and 导致"]},

{type:"teach", trg:"除了(chúle)", src:"besides / except", pos:"prep", gender:null,
 note:"Opens an exception or addition clause. Paired with 以外.\n除 = remove/exclude, 了 = completion marker.",
 example:"A: 你(nǐ)会(huì)什么(shénme)语言(yǔyán)？\nB: 除了(chúle)中文(zhōngwén)以外(yǐwài)，我(wǒ)还(hái)会(huì)英语(yīngyǔ)。",
 exampleSrc:"A: What languages do you speak?\nB: Besides Chinese, I also speak English.",
 funFact:"除了...以外 has two opposite meanings depending on context. With 还/也, it means 'in addition to.' With 都, it means 'except for.' Context is everything."},

{type:"teach", trg:"以外(yǐwài)", src:"beyond / besides", pos:"noun", gender:null,
 note:"Closes the 除了...以外 frame. Literally: beyond the outside.\n以 = by means of, 外 = outside.",
 example:"A: 除了(chúle)周末(zhōumò)以外(yǐwài)，你(nǐ)都(dōu)要(yào)上班(shàngbān)吗(ma)？\nB: 对(duì)，周一(zhōuyī)到(dào)周五(zhōuwǔ)都(dōu)要(yào)上班(shàngbān)。",
 exampleSrc:"A: Except for weekends, do you work every day?\nB: Yes, Monday to Friday I work every day.",
 funFact:"以外 literally means 'using the outside.' When paired with 除了, it creates a frame: 除了 opens the exception, 以外 closes it. Everything inside is excluded or added."},

{type:"teach", trg:"因此(yīncǐ)", src:"therefore (formal)", pos:"conj", gender:null,
 note:"Formal equivalent of 所以. Common in writing and speeches.\n因 = cause, 此 = this.",
 example:"A: 他(tā)工作(gōngzuò)很(hěn)努力(nǔlì)，因此(yīncǐ)得到(dédào)了(le)升职(shēngzhí)。\nB: 他(tā)应得(yīngdé)的(de)。",
 exampleSrc:"A: He worked very hard, therefore he got a promotion.\nB: He deserved it.",
 funFact:"因此 is the connector you see in Chinese newspapers, academic papers, and formal speeches. Using it in conversation sounds educated but slightly stiff, like saying 'consequently' in everyday English."},

{type:"teach", trg:"导致(dǎozhì)", src:"to cause / to lead to", pos:"verb", gender:null,
 note:"Formal verb for causation. Often used for negative outcomes.\n导 = guide/lead, 致 = arrive at/cause.",
 example:"A: 什么(shénme)导致(dǎozhì)了(le)这(zhè)个(ge)问题(wèntí)？\nB: 交通(jiāotōng)拥堵(yōngdǔ)导致(dǎozhì)了(le)迟到(chídào)。",
 exampleSrc:"A: What caused this problem?\nB: Traffic congestion caused the delay.",
 funFact:"导致 carries a slightly negative tone. It usually introduces unwanted consequences. For positive outcomes, Chinese speakers prefer 使 (to make/cause) or 让 (to let/make)."},

{type:"teach", trg:"解决(jiějué)", src:"to solve / to resolve", pos:"verb", gender:null,
 note:"Used for problems, conflicts, and difficulties.\n解 = untie/explain, 决 = decide/determine.",
 example:"A: 这(zhè)个(ge)问题(wèntí)怎么(zěnme)解决(jiějué)？\nB: 我们(wǒmen)一起(yìqǐ)想(xiǎng)办法(bànfǎ)解决(jiějué)。",
 exampleSrc:"A: How do we solve this problem?\nB: Let us think of a way to solve it together.",
 funFact:"解 originally meant 'to cut apart an ox' and later 'to untie knots.' Solving a problem in Chinese is literally 'untying and deciding,' pulling the knot apart to find the answer."},

{type:"teach", trg:"办法(bànfǎ)", src:"method / way / solution", pos:"noun", gender:null,
 note:"A practical approach or method for handling something.\n办 = handle/manage, 法 = method/law.",
 example:"A: 你(nǐ)有(yǒu)什么(shénme)好(hǎo)办法(bànfǎ)吗(ma)？\nB: 我(wǒ)想(xiǎng)到(dào)了(le)一(yí)个(gè)办法(bànfǎ)。",
 exampleSrc:"A: Do you have any good ideas?\nB: I thought of a method.",
 funFact:"没办法 (no way/no solution) is one of the most commonly heard Chinese phrases. It expresses helplessness: 'There is nothing that can be done.' You will hear it in daily life constantly."},

{type:"teach", trg:"情况(qíngkuàng)", src:"situation / condition", pos:"noun", gender:null,
 note:"Describes the state of affairs or circumstances.\n情 = feeling/situation, 况 = condition.",
 example:"A: 现在(xiànzài)的(de)情况(qíngkuàng)怎么样(zěnmeyàng)？\nB: 情况(qíngkuàng)不(bù)太(tài)好(hǎo)。",
 exampleSrc:"A: How is the situation now?\nB: The situation is not very good.",
 funFact:"情 appears in many important Chinese words: 感情 (feelings), 事情 (matter/affair), 情况 (situation), 爱情 (romantic love). It is one of the most productive characters in the language."},

{type:"teach", trg:"关系(guānxi)", src:"relationship / connection", pos:"noun", gender:null,
 note:"One of the most culturally loaded Chinese words.\n关 = close/relate, 系 = connect/tie.",
 example:"A: 这(zhè)件(jiàn)事(shì)跟(gēn)你(nǐ)有(yǒu)关系(guānxi)吗(ma)？\nB: 没有(méiyǒu)关系(guānxi)，跟(gēn)我(wǒ)无关(wúguān)。",
 exampleSrc:"A: Does this matter have anything to do with you?\nB: It has no connection, it has nothing to do with me.",
 funFact:"关系 (guanxi) is a cornerstone of Chinese social culture. Your 'guanxi network' (personal connections) can determine job opportunities, business deals, and social standing. It is studied in business schools worldwide."},

{type:"mc", q:"除了(chúle)小王(Xiǎo Wáng)以外(yǐwài)，大家(dàjiā)都(dōu)来(lái)了(le)。 What does this mean?",
 opts:["Everyone came, including Xiao Wang","Everyone came except Xiao Wang","Only Xiao Wang came","Nobody came besides Xiao Wang"],
 ans:"Everyone came except Xiao Wang",
 hint:"When 除了...以外 is followed by 都, it creates an exclusion. ___ did something, but one person did not."},

{type:"fb", s:"交通(jiāotōng)问题(wèntí){1}了(le)很(hěn)多(duō)人(rén)迟到(chídào)。",
 a:["导致(dǎozhì)"],
 opts:["导致(dǎozhì)","解决(jiějué)","影响(yǐngxiǎng)","因此(yīncǐ)"],
 hint:"Which verb means 'to cause' or 'to lead to,' often for negative outcomes?",
 sSrc:"The traffic problem {1} many people to be late."},

{type:"match", pairs:[
  {trg:"除了(chúle)...以外(yǐwài)", src:"besides / except"},
  {trg:"因此(yīncǐ)", src:"therefore (formal)"},
  {trg:"导致(dǎozhì)", src:"to cause / lead to"},
  {trg:"解决(jiějué)", src:"to solve"},
  {trg:"办法(bànfǎ)", src:"method / way"}
]},

{type:"mc", q:"我们(wǒmen)需要(xūyào)想(xiǎng)一(yí)个(gè)___来(lái)解决(jiějué)这(zhè)个(ge)问题(wèntí)。",
 opts:["办法(bànfǎ)","结果(jiéguǒ)","原因(yuányīn)","情况(qíngkuàng)"],
 ans:"办法(bànfǎ)",
 hint:"We need to think of a ___ to solve this problem. Which word means 'method' or 'solution'?"},

{type:"fb", s:"他(tā)很(hěn)努力(nǔlì)，{1}成绩(chéngjì)很(hěn)好(hǎo)。",
 a:["因此(yīncǐ)"],
 opts:["因此(yīncǐ)","导致(dǎozhì)","而且(érqiě)","除了(chúle)"],
 hint:"Which formal conjunction means 'therefore,' often used in writing?",
 sSrc:"He is very hardworking, {1} his grades are very good."},

{type:"mc", q:"现在(xiànzài)的(de)___怎么样(zěnmeyàng)了(le)？",
 opts:["情况(qíngkuàng)","办法(bànfǎ)","关系(guānxi)","导致(dǎozhì)"],
 ans:"情况(qíngkuàng)",
 hint:"You are asking 'How is the current ___?' Which noun describes the state of affairs?"},

{type:"fb", s:"这(zhè)件(jiàn)事(shì)跟(gēn)我(wǒ)没有(méiyǒu){1}。",
 a:["关系(guānxi)"],
 opts:["关系(guānxi)","办法(bànfǎ)","情况(qíngkuàng)","结果(jiéguǒ)"],
 hint:"This matter has no ___ to me. Which culturally important word means 'connection'?",
 sSrc:"This matter has no {1} to me."},

{type:"drag_fill",
 s:"{1}天气(tiānqì)不(bù)好(hǎo)，{2}我们(wǒmen)取消(qǔxiāo)了(le)活动(huódòng)。",
 blanks:{"1":"因为(yīnwèi)","2":"所以(suǒyǐ)"},
 pool:["因为(yīnwèi)","所以(suǒyǐ)","不但(búdàn)","而且(érqiě)"],
 hint:"The weather was bad (cause), so the activity was canceled (effect). Use the cause-effect pair."},

{type:"mc", q:"Which word carries a negative tone and is used for unwanted consequences?",
 opts:["导致(dǎozhì)","解决(jiějué)","办法(bànfǎ)","关系(guānxi)"],
 ans:"导致(dǎozhì)",
 hint:"This verb means 'to cause' or 'to lead to' and usually introduces bad results."}
]}

,

// ─── L4: HSK 3核心词汇 Core Vocabulary ───
{id:"zhv2_u16l4", title:"HSK 3核心词汇(héxīn cíhuì) Core Words", icon:"📚", xp:15, board:true, steps:[
{type:"intro", title:"HSK 3 Core Vocabulary",
 desc:"Learn 7 essential HSK 3 words for expressing actions, purposes, and locations. These high-frequency words appear in daily conversation, essays, and the HSK 3 exam.",
 goals:["Master 7 core HSK 3 words","Use 为了 to state purpose","Describe location with 附近"]},

{type:"teach", trg:"表示(biǎoshì)", src:"to express / to indicate", pos:"verb", gender:null,
 note:"Used to show feelings, opinions, or meanings.\n表 = surface/show, 示 = indicate.",
 example:"A: 你(nǐ)觉得(juéde)这(zhè)次(cì)考试(kǎoshì)难(nán)吗(ma)？\nB: 我(wǒ)表示(biǎoshì)很(hěn)满意(mǎnyì)，结果(jiéguǒ)很(hěn)好(hǎo)。",
 exampleSrc:"A: Do you think this exam was hard?\nB: I express great satisfaction, the result was very good.",
 funFact:"表示 appears everywhere in formal Chinese: news anchors say 政府表示 (the government indicates), friends say 我表示理解 (I express understanding). It is the all-purpose verb for showing attitudes."},

{type:"teach", trg:"参加(cānjiā)", src:"to participate / to attend", pos:"verb", gender:null,
 note:"Used for events, activities, and groups.\n参 = join/participate, 加 = add.",
 example:"A: 你(nǐ)今天(jīntiān)参加(cānjiā)考试(kǎoshì)吗(ma)？\nB: 对(duì)，我(wǒ)准备(zhǔnbèi)好(hǎo)了(le)。",
 exampleSrc:"A: Are you taking the exam today?\nB: Yes, I am prepared.",
 funFact:"加 means 'to add,' so 参加 literally means 'to add yourself to something.' When you join an event, you are adding one more person to the group. HSK 3 tests this word extensively."},

{type:"teach", trg:"发现(fāxiàn)", src:"to discover / to find", pos:"verb", gender:null,
 note:"Used for discovering facts, noticing things, or making findings.\n发 = emit/start, 现 = appear.",
 example:"A: 你(nǐ)发现(fāxiàn)了(le)什么(shénme)问题(wèntí)吗(ma)？\nB: 我(wǒ)发现(fāxiàn)这(zhè)个(ge)办法(bànfǎ)不(bù)好(hǎo)。",
 exampleSrc:"A: Did you discover any problems?\nB: I found that this method is not good.",
 funFact:"发现 covers both 'discover' (Columbus discovered America) and 'notice' (I found my keys). English uses two different verbs; Chinese uses one. This flexibility makes 发现 extremely common."},

{type:"teach", trg:"生活(shēnghuó)", src:"life / to live", pos:"noun", gender:null,
 note:"Works as both a noun (life/living) and a verb (to live/lead a life).\n生 = born/life, 活 = alive/live.",
 example:"A: 你(nǐ)觉得(juéde)现在(xiànzài)的(de)生活(shēnghuó)怎么样(zěnmeyàng)？\nB: 生活(shēnghuó)很(hěn)好(hǎo)，我(wǒ)很(hěn)满意(mǎnyì)。",
 exampleSrc:"A: How do you feel about your current life?\nB: Life is good, I am very satisfied.",
 funFact:"生活 can be a noun (daily life) or a verb (to live a life). 我生活在北京 means 'I live in Beijing' with a focus on lifestyle, while 我住在北京 just states location. The nuance matters at B1."},

{type:"teach", trg:"目的(mùdì)", src:"purpose / goal", pos:"noun", gender:null,
 note:"Refers to an aim or intention, often used in formal contexts.\n目 = eye/aim, 的 = target.",
 example:"A: 你(nǐ)学习(xuéxí)中文(zhōngwén)的(de)目的(mùdì)是(shì)什么(shénme)？\nB: 我(wǒ)的(de)目的(mùdì)是(shì)通过(tōngguò)考试(kǎoshì)。",
 exampleSrc:"A: What is your purpose for learning Chinese?\nB: My goal is to pass the exam.",
 funFact:"的 in 目的 is a different character from the possessive 的 particle. This 的 originally meant 'target' or 'bull's-eye,' giving 目的 its meaning of 'the target your eye is aiming at.'"},

{type:"teach", trg:"附近(fùjìn)", src:"nearby / vicinity", pos:"noun", gender:null,
 note:"Describes location close to a reference point. Very common in daily speech.\n附 = attach/near, 近 = close.",
 example:"A: 图书馆(túshūguǎn)在(zài)哪里(nǎlǐ)？\nB: 就(jiù)在(zài)地铁(dìtiě)站(zhàn)附近(fùjìn)。",
 exampleSrc:"A: Where is the library?\nB: It is right near the subway station.",
 funFact:"附近 is so common that Chinese speakers use it constantly for giving directions. You will hear 在...附近 (near...) in every city. 附 means 'attached to,' so something 附近 is 'attached close by.'"},

{type:"teach", trg:"为了(wèile)", src:"in order to / for (the sake of)", pos:"prep", gender:null,
 note:"States the purpose or motivation for an action. Always followed by a goal.\n为 = for, 了 = completion/purpose marker.",
 example:"A: 你(nǐ)为什么(wèishénme)这(zhè)么(me)努力(nǔlì)学习(xuéxí)？\nB: 为了(wèile)通过(tōngguò)考试(kǎoshì)，我(wǒ)每天(měitiān)学习(xuéxí)。",
 exampleSrc:"A: Why are you studying so hard?\nB: In order to pass the exam, I study every day.",
 funFact:"为了 always looks forward. It states purpose before action. Compare: 因为 (because, looks back at cause) vs 为了 (in order to, looks forward to goal). Mandarin learners often confuse these two."},

{type:"tip", title:"为了 vs 因为: Purpose vs Reason",
 text:"These two words answer different questions:\n\n因为(yīnwèi) answers WHY (past reason):\n因为(yīnwèi)下雨(xiàyǔ)，我(wǒ)没(méi)去(qù)。\nBecause it rained, I did not go.\n\n为了(wèile) answers WHAT FOR (future goal):\n为了(wèile)学习(xuéxí)，我(wǒ)去(qù)图书馆(túshūguǎn)。\nIn order to study, I go to the library.\n\n因为 explains a cause. 为了 explains a goal.",
 deepDive:{title:"目的 vs 原因: Goal vs Reason",
  text:"Just as 为了/因为 are contrasted in connectors, 目的 and 原因 form a parallel noun pair:\n\n原因(yuányīn) = reason (why something happened)\n目的(mùdì) = purpose (what you are trying to achieve)\n\n你(nǐ)的(de)原因(yuányīn)是(shì)什么(shénme)？\nWhat is your reason? (Why did it happen?)\n\n你(nǐ)的(de)目的(mùdì)是(shì)什么(shénme)？\nWhat is your goal? (What are you aiming for?)\n\nUsing the right word shows precision in formal writing and the HSK 3 exam."}},

{type:"mc", q:"我(wǒ)___参加(cānjiā)了(le)考试(kǎoshì)，但(dàn)结果(jiéguǒ)不(bù)好(hǎo)。",
 opts:["发现(fāxiàn)","表示(biǎoshì)","终于(zhōngyú)","为了(wèile)"],
 ans:"终于(zhōngyú)",
 hint:"I ___ took the exam (finally, after waiting). Which word expresses relief after a long wait?"},

{type:"fb", s:"{1}通过(tōngguò)考试(kǎoshì)，我(wǒ)每天(měitiān)学习(xuéxí)。",
 a:["为了(wèile)"],
 opts:["为了(wèile)","因为(yīnwèi)","所以(suǒyǐ)","目的(mùdì)"],
 hint:"Which connector states a future goal or purpose before the action?",
 sSrc:"{1} pass the exam, I study every day."},

{type:"match", pairs:[
  {trg:"表示(biǎoshì)", src:"to express / to indicate"},
  {trg:"参加(cānjiā)", src:"to participate / to attend"},
  {trg:"发现(fāxiàn)", src:"to discover / to find"},
  {trg:"生活(shēnghuó)", src:"life / to live"},
  {trg:"目的(mùdì)", src:"purpose / goal"},
  {trg:"附近(fùjìn)", src:"nearby / vicinity"},
  {trg:"为了(wèile)", src:"in order to / for"}
]},

{type:"mc", q:"图书馆(túshūguǎn)就(jiù)在(zài)公园(gōngyuán)___，走路(zǒulù)五(wǔ)分钟(fēnzhōng)。",
 opts:["附近(fùjìn)","目的(mùdì)","生活(shēnghuó)","情况(qíngkuàng)"],
 ans:"附近(fùjìn)",
 hint:"The library is ___ the park, five minutes on foot. Which word describes a close location?"},

{type:"fb", s:"我(wǒ)发现(fāxiàn)了(le)一(yí)个(gè)好(hǎo){1}，可以(kěyǐ)解决(jiějué)这(zhè)个(ge)问题(wèntí)。",
 a:["办法(bànfǎ)"],
 opts:["办法(bànfǎ)","目的(mùdì)","生活(shēnghuó)","原因(yuányīn)"],
 hint:"I discovered a good ___ to solve the problem. Which noun means 'method' or 'way'?",
 sSrc:"I discovered a good {1} that can solve this problem."},

{type:"mc", q:"你(nǐ)学习(xuéxí)汉语(Hànyǔ)的(de)___是(shì)什么(shénme)？",
 opts:["目的(mùdì)","附近(fùjìn)","生活(shēnghuó)","参加(cānjiā)"],
 ans:"目的(mùdì)",
 hint:"What is your ___ for learning Chinese? Which noun means 'purpose' or 'goal'?"},

{type:"fb", s:"他(tā)___自己(zìjǐ)的(de)学习(xuéxí)情况(qíngkuàng)很(hěn)满意(mǎnyì)。",
 a:["表示(biǎoshì)"],
 opts:["表示(biǎoshì)","参加(cānjiā)","发现(fāxiàn)","解决(jiějué)"],
 hint:"He ___ satisfaction with his learning situation. Which verb means 'to express' or 'to indicate'?",
 sSrc:"He {1} satisfaction with his own learning situation."}
]}

]};

export default UNIT_16;
