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

]};

export default UNIT_16;
