// Unit 36: Bringing It All Together (Capstone)
// Level: B2.2 (HSK 4)
// Chinese (Mandarin) V2 format with hanzi+pinyin notation

const UNIT_36 = {
n:36, lang:"zh", srcLang:"en", track:"v2",
title:"融会贯通 Bringing It All Together", sub:"Comprehensive Review",
icon:"🏆", level:"B2.2", color:"#7B5EE8",
lessons:[

// ─── L1: Looking Back ───
{id:"zhv2_u36l1", title:"Looking Back", icon:"🔙", xp:15, board:true, steps:[
{type:"intro", title:"Looking Back",
 desc:"Reflect on your Chinese learning journey. Build vocabulary for discussing progress, achievement, and the experience of learning a language. This is the beginning of the final unit.",
 goals:["Discuss personal progress in Chinese","Express achievement and reflection","Describe language learning experiences"]},

{type:"teach", trg:"总结(zǒngjié)", src:"to summarize / summary", pos:"verb", gender:null,
 note:"总 (overall/general) + 结 (tie/conclude).\nTying everything together. Both a verb and a noun.",
 example:"A: 让(ràng)我们(wǒmen)总结(zǒngjié)一下(yíxià)今天(jīntiān)学(xué)的(de)内容(nèiróng)。\nB: 好(hǎo)的(de)，我们(wǒmen)学(xué)了(le)十五(shíwǔ)个(gè)新(xīn)词(cí)。",
 exampleSrc:"A: Let us summarize what we learned today.\nB: Okay, we learned fifteen new words.",
 funFact:"总结 literally means 'overall tying together.' In Chinese workplaces, 年终总结 (year-end summary) is a major annual ritual where every employee reviews and reflects on the year's work."},

{type:"teach", trg:"回顾(huígù)", src:"to review / to look back", pos:"verb", gender:null,
 note:"回 (return) + 顾 (look/regard).\nTurning your head to look at where you have been.",
 example:"A: 回顾(huígù)这(zhè)一(yì)年(nián)，你(nǐ)有(yǒu)什么(shénme)感受(gǎnshòu)？\nB: 我(wǒ)觉得(juéde)进步(jìnbù)了(le)很(hěn)多(duō)。",
 exampleSrc:"A: Looking back on this year, how do you feel?\nB: I feel I have made a lot of progress.",
 funFact:"回 (return) + 顾 (look at). The image is physically turning around to gaze at where you came from. More reflective than simply 'reviewing.' It carries emotional weight."},

{type:"teach", trg:"进步(jìnbù)", src:"progress / to make progress", pos:"noun", gender:null,
 note:"进 (advance/enter) + 步 (step).\nLiterally 'advancing steps.' Moving forward.",
 example:"A: 你(nǐ)的(de)中文(Zhōngwén)进步(jìnbù)很(hěn)大(dà)。\nB: 谢谢(xièxie)，我(wǒ)每天(měitiān)都(dōu)在(zài)练习(liànxí)。",
 exampleSrc:"A: Your Chinese has made great progress.\nB: Thank you, I practice every day.",
 funFact:"进步 is one of the most encouraging words a Chinese teacher can say to a student. Each character represents one step forward: 进 (advance into) + 步 (step). Progress is measured in footsteps, not leaps."},

{type:"teach", trg:"成就(chéngjiù)", src:"achievement / accomplishment", pos:"noun", gender:null,
 note:"成 (become/accomplish) + 就 (accomplish/achieve).\nDouble emphasis on accomplishing something.",
 example:"A: 学(xué)一(yì)门(mén)新(xīn)语言(yǔyán)是(shì)很(hěn)大(dà)的(de)成就(chéngjiù)。\nB: 特别(tèbié)是(shì)像(xiàng)中文(Zhōngwén)这么(zhème)难(nán)的(de)语言(yǔyán)。",
 exampleSrc:"A: Learning a new language is a great achievement.\nB: Especially a language as difficult as Chinese.",
 funFact:"Both characters individually mean 'to accomplish.' Doubling the concept intensifies it. A 成就 is not a small win but a significant accomplishment that required sustained effort."},

{type:"teach", trg:"水平(shuǐpíng)", src:"level / standard / proficiency", pos:"noun", gender:null,
 note:"水 (water) + 平 (flat/level).\nLiterally 'water level.' How high your ability rises.",
 example:"A: 你(nǐ)的(de)中文(Zhōngwén)水平(shuǐpíng)怎么样(zěnmeyàng)？\nB: 大概(dàgài)是(shì)中级(zhōngjí)水平(shuǐpíng)。",
 exampleSrc:"A: What is your Chinese proficiency level?\nB: Probably intermediate level.",
 funFact:"The metaphor is perfect: water always finds its true level. Your 水平 is the natural level your ability settles at. A spirit level tool in Chinese is also called 水平仪, using the same logic."},

{type:"mc", q:"进步(jìnbù) literally means:",
 opts:["big change","advancing steps","looking back","good student"],
 ans:"advancing steps",
 hint:"进 means to advance or enter. 步 means step. Together they describe forward movement."},

{type:"match", pairs:[
  {trg:"总结(zǒngjié)", src:"to summarize"},
  {trg:"回顾(huígù)", src:"to look back"},
  {trg:"进步(jìnbù)", src:"progress"},
  {trg:"成就(chéngjiù)", src:"achievement"},
  {trg:"水平(shuǐpíng)", src:"level / proficiency"}
]},

{type:"fb", s:"回顾(huígù)这(zhè)一(yì)年(nián)，我(wǒ)的(de)中文(Zhōngwén){1}了(le)很(hěn)多(duō)。",
 a:["进步(jìnbù)"],
 opts:["进步(jìnbù)","总结(zǒngjié)","回顾(huígù)","成就(chéngjiù)"],
 hint:"The word for making forward progress. 进 (advance) + 步 (step).",
 sSrc:"Looking back on this year, my Chinese has {1} a lot."},

{type:"teach", trg:"流利(liúlì)", src:"fluent / fluently", pos:"adj", gender:null,
 note:"流 (flow) + 利 (sharp/smooth).\nWhen speech flows smoothly like water.",
 example:"A: 你(nǐ)的(de)中文(Zhōngwén)说(shuō)得(de)很(hěn)流利(liúlì)。\nB: 还(hái)差(chà)得(de)远(yuǎn)呢(ne)，还(hái)要(yào)继续(jìxù)学(xué)。",
 exampleSrc:"A: You speak Chinese very fluently.\nB: I still have a long way to go; I need to keep studying.",
 funFact:"流 means 'flow' (like a river), 利 means 'sharp' or 'smooth.' Fluent speech flows like a smooth river. The same metaphor exists in English ('fluent' comes from Latin 'fluere,' to flow)."},

{type:"teach", trg:"地道(dìdao)", src:"authentic / native-like / idiomatic", pos:"adj", gender:null,
 note:"地 (earth/local) + 道 (way/path).\nThe way locals actually speak and do things.",
 example:"A: 你(nǐ)说(shuō)的(de)中文(Zhōngwén)很(hěn)地道(dìdao)！\nB: 我(wǒ)在(zài)中国(Zhōngguó)住(zhù)了(le)三(sān)年(nián)。",
 exampleSrc:"A: Your Chinese sounds very authentic!\nB: I lived in China for three years.",
 funFact:"地道 is the highest compliment for a language learner. It means you sound like a local, not a textbook. It also applies to food: 地道的四川菜 means authentic Sichuan food, the way locals actually make it."},

{type:"teach", trg:"表达(biǎodá)", src:"to express / expression", pos:"verb", gender:null,
 note:"表 (surface/express) + 达 (reach/arrive).\nMaking inner thoughts reach the surface.",
 example:"A: 我(wǒ)不(bù)知道(zhīdào)怎么(zěnme)表达(biǎodá)这(zhè)个(gè)意思(yìsi)。\nB: 你(nǐ)可以(kěyǐ)用(yòng)简单(jiǎndān)的(de)词(cí)来(lái)表达(biǎodá)。",
 exampleSrc:"A: I do not know how to express this meaning.\nB: You can use simple words to express it.",
 funFact:"表 means 'surface' and 达 means 'to reach.' Expression is making inner thoughts arrive at the surface where others can perceive them. A beautiful metaphor for communication."},

{type:"mc", q:"Which word is the highest compliment for a language learner's Chinese?",
 opts:["流利(liúlì)","水平(shuǐpíng)","地道(dìdao)","进步(jìnbù)"],
 ans:"地道(dìdao)",
 hint:"This word means 'authentic' or 'native-like.' It means you sound like a local, not a textbook."},

{type:"fb", s:"我(wǒ)不(bù)知道(zhīdào)怎么(zěnme){1}我(wǒ)的(de)感受(gǎnshòu)。",
 a:["表达(biǎodá)"],
 opts:["表达(biǎodá)","总结(zǒngjié)","回顾(huígù)","进步(jìnbù)"],
 hint:"To make inner thoughts reach the outside. 表 (surface) + 达 (reach).",
 sSrc:"I do not know how to {1} my feelings."},

{type:"fb", s:"你(nǐ)的(de)中文(Zhōngwén)说(shuō)得(de)很(hěn){1}，像(xiàng)中国(Zhōngguó)人(rén)一样(yíyàng)。",
 a:["流利(liúlì)"],
 opts:["流利(liúlì)","地道(dìdao)","表达(biǎodá)","进步(jìnbù)"],
 hint:"When speech flows smoothly, like water running without obstruction. 流 (flow) + 利 (smooth).",
 sSrc:"Your Chinese is very {1}, like a native speaker."},

{type:"match", pairs:[
  {trg:"流利(liúlì)", src:"fluent"},
  {trg:"地道(dìdao)", src:"authentic / native-like"},
  {trg:"表达(biǎodá)", src:"to express"},
  {trg:"水平(shuǐpíng)", src:"level / proficiency"},
  {trg:"成就(chéngjiù)", src:"achievement"}
]},

{type:"mc", q:"水平(shuǐpíng) uses the metaphor of water because:",
 opts:["Water is clear and transparent","Water always finds its true level","Water flows quickly like speech","Water is necessary for life"],
 ans:"Water always finds its true level",
 hint:"A spirit ___ uses ___ to find the ___ horizontal. Similarly, your 水平 represents the ___ ___ your ability naturally settles at."}
]},

// ─── L2: The Art of Communication ───
{id:"zhv2_u36l2", title:"The Art of Communication", icon:"💬", xp:15, board:true, steps:[
{type:"intro", title:"The Art of Communication",
 desc:"Master the vocabulary of communication and understanding. These words describe not just knowing a language, but truly connecting with people through it.",
 goals:["Describe communication skills in Chinese","Express the difference between knowing and understanding","Discuss intercultural exchange"]},

{type:"teach", trg:"交流(jiāoliú)", src:"to communicate / exchange / interaction", pos:"verb", gender:null,
 note:"交 (cross/exchange) + 流 (flow).\nTwo streams crossing and flowing together.",
 example:"A: 语言(yǔyán)是(shì)交流(jiāoliú)的(de)工具(gōngjù)。\nB: 对(duì)，没有(méiyǒu)语言(yǔyán)，交流(jiāoliú)很(hěn)困难(kùnnan)。",
 exampleSrc:"A: Language is a tool for communication.\nB: Yes, without language, communication is very difficult.",
 funFact:"The image of 交流 is two rivers meeting and flowing together. Communication is not one-directional but an exchange where both sides flow into each other. Also used for cultural exchange: 文化交流."},

{type:"teach", trg:"理解(lǐjiě)", src:"to understand / understanding", pos:"verb", gender:null,
 note:"理 (logic/principle) + 解 (untie/solve).\nUntying the logic of something. Deep comprehension.",
 example:"A: 你(nǐ)理解(lǐjiě)这(zhè)个(gè)语法(yǔfǎ)了(le)吗(ma)？\nB: 理解(lǐjiě)了(le)，但是(dànshì)用(yòng)起来(qǐlái)还(hái)不(bù)太(tài)熟练(shúliàn)。",
 exampleSrc:"A: Do you understand this grammar point?\nB: I understand it, but I am not yet skilled at using it.",
 funFact:"理解 goes deeper than 明白 (míngbai, to understand). 明白 is surface clarity. 理解 is untying the underlying logic, reaching the principle beneath. You can 明白 the words but not 理解 the deeper meaning."},

{type:"teach", trg:"坚持(jiānchí)", src:"to persist / to keep at it", pos:"verb", gender:null,
 note:"坚 (firm/solid) + 持 (hold/maintain).\nHolding firm. Not letting go.",
 example:"A: 学(xué)中文(Zhōngwén)最(zuì)重要(zhòngyào)的(de)是(shì)什么(shénme)？\nB: 坚持(jiānchí)。每天(měitiān)坚持(jiānchí)学(xué)一点(yìdiǎn)。",
 exampleSrc:"A: What is the most important thing in learning Chinese?\nB: Persistence. Keep at it and learn a little every day.",
 funFact:"坚 means 'hard as rock' and 持 means 'to hold.' Together: holding on with stone-like firmness. A teacher's favorite advice. The difference between those who learn Chinese and those who quit is always 坚持."},

{type:"teach", trg:"信心(xìnxīn)", src:"confidence / faith", pos:"noun", gender:null,
 note:"信 (trust/believe) + 心 (heart).\nA trusting heart. Belief in oneself.",
 example:"A: 你(nǐ)有(yǒu)信心(xìnxīn)通过(tōngguò)考试(kǎoshì)吗(ma)？\nB: 有(yǒu)，我(wǒ)准备(zhǔnbèi)得(de)很(hěn)充分(chōngfèn)。",
 exampleSrc:"A: Do you have confidence you will pass the exam?\nB: Yes, I have prepared thoroughly.",
 funFact:"信心 is trust (信) living in the heart (心). Not arrogance but quiet inner belief. The expression 有信心 (to have confidence) and 没有信心 (to lack confidence) are used constantly in daily Chinese."},

{type:"teach", trg:"继续(jìxù)", src:"to continue / to carry on", pos:"verb", gender:null,
 note:"继 (succeed/follow) + 续 (continue/extend).\nFollowing on and extending further.",
 example:"A: 你(nǐ)会(huì)继续(jìxù)学(xué)中文(Zhōngwén)吗(ma)？\nB: 当然(dāngrán)，我(wǒ)会(huì)一直(yìzhí)继续(jìxù)学(xué)下去(xiàqù)。",
 exampleSrc:"A: Will you continue studying Chinese?\nB: Of course, I will keep studying.",
 funFact:"继 means 'to follow' or 'to succeed' and 续 means 'to extend.' Together they mean to follow on without stopping. This is the verb of commitment: 继续努力 (keep working hard) is one of the most common encouraging phrases in Chinese."},

{type:"mc", q:"理解(lǐjiě) goes deeper than 明白(míngbai) because:",
 opts:["理解 is more formal","理解 means surface clarity","理解 means untying the underlying logic","理解 only applies to grammar"],
 ans:"理解 means untying the underlying logic",
 hint:"理 ___ ___ or principle, 解 ___ to untie or solve. The compound describes reaching the deep structure of meaning."},

{type:"match", pairs:[
  {trg:"交流(jiāoliú)", src:"to communicate"},
  {trg:"理解(lǐjiě)", src:"to understand"},
  {trg:"坚持(jiānchí)", src:"to persist"},
  {trg:"信心(xìnxīn)", src:"confidence"},
  {trg:"继续(jìxù)", src:"to continue"}
]},

{type:"fb", s:"学(xué)中文(Zhōngwén)最(zuì)重要(zhòngyào)的(de)是(shì){1}，不能(bùnéng)放弃(fàngqì)。",
 a:["坚持(jiānchí)"],
 opts:["坚持(jiānchí)","信心(xìnxīn)","交流(jiāoliú)","理解(lǐjiě)"],
 hint:"The word for holding on firmly and not giving up. 坚 (firm) + 持 (hold).",
 sSrc:"The most important thing in learning Chinese is {1}; you cannot give up."},

{type:"fb", s:"语言(yǔyán)是(shì){1}的(de)工具(gōngjù)。",
 a:["交流(jiāoliú)"],
 opts:["交流(jiāoliú)","理解(lǐjiě)","表达(biǎodá)","总结(zǒngjié)"],
 hint:"Two streams crossing and flowing together. The word for communication and exchange.",
 sSrc:"Language is a tool for {1}."},

{type:"mc", q:"信心(xìnxīn) literally means:",
 opts:["strong head","trusting heart","brave face","clear mind"],
 ans:"trusting heart",
 hint:"信 means trust or belief. 心 means …. What lives in the … when you believe in yourself?"},

{type:"fb", s:"我(wǒ)会(huì){1}学(xué)中文(Zhōngwén)，不(bú)会(huì)停(tíng)下来(xiàlái)。",
 a:["继续(jìxù)"],
 opts:["继续(jìxù)","坚持(jiānchí)","回顾(huígù)","总结(zǒngjié)"],
 hint:"To follow on and extend further. The verb of carrying on without stopping. 继 (follow) + 续 (extend).",
 sSrc:"I will {1} studying Chinese; I will not stop."},

{type:"tip", title:"Grammar Review: Key B2 Patterns",
 text:"You have learned many advanced patterns. Here is a quick review of key structures:\n\n1. 越来越(yuèláiyuè) + adj = more and more\n我(wǒ)的(de)中文(Zhōngwén)越来越(yuèláiyuè)好(hǎo)了(le)。\n\n2. 是(shì)...的(de) for emphasis:\n我(wǒ)是(shì)去年(qùnián)开始(kāishǐ)学(xué)的(de)。\n(It was last year that I started learning.)\n\n3. 不但(búdàn)...而且(érqiě)... = not only...but also:\n不但(búdàn)会(huì)说(shuō)，而且(érqiě)会(huì)写(xiě)。\n\n4. 虽然(suīrán)...但是(dànshì)... = although...but:\n虽然(suīrán)很(hěn)难(nán)，但是(dànshì)我(wǒ)不(bú)会(huì)放弃(fàngqì)。",
 deepDive:{title:"The Journey From A1 to B2",
  text:"At A1, you learned single characters and basic greetings: 你好, 谢谢, 再见.\n\nAt A2, you built simple sentences with 是, 有, and basic question words.\n\nAt B1, you handled compound sentences, time expressions, and comparison patterns.\n\nNow at B2, you can discuss abstract topics like economics, culture, philosophy, and geography. You understand how characters combine into compounds, how compounds combine into four-character idioms, and how the language builds meaning through logical compounding.\n\nThis is exactly how native speakers build their vocabulary too. The foundation of characters supports everything above it."}},

{type:"mc", q:"Which grammar pattern means 'not only...but also...'?",
 opts:["越来越...","虽然...但是...","不但...而且...","因为...所以..."],
 ans:"不但...而且...",
 hint:"The first part introduces something, and the second part adds something more. Both halves are positive."},

{type:"drag_fill", s:"{1}中文(Zhōngwén)很(hěn)难(nán)，{2}我(wǒ)不(bú)会(huì)放弃(fàngqì)。",
 blanks:{"1":"虽然(suīrán)","2":"但是(dànshì)"},
 pool:["虽然(suīrán)","但是(dànshì)","不但(búdàn)","而且(érqiě)","因为(yīnwèi)","所以(suǒyǐ)"],
 hint:"The first word means 'although.' The second means 'but.' Together they form a concession pattern."},

{type:"match", pairs:[
  {trg:"坚持(jiānchí)", src:"to persist"},
  {trg:"继续(jìxù)", src:"to continue"},
  {trg:"交流(jiāoliú)", src:"to communicate"},
  {trg:"信心(xìnxīn)", src:"confidence"},
  {trg:"理解(lǐjiě)", src:"to understand"}
]}
]},

// ─── L3: Dreams and the Future ───
{id:"zhv2_u36l3", title:"Dreams and the Future", icon:"🌟", xp:15, board:true, steps:[
{type:"intro", title:"Dreams and the Future",
 desc:"The final lesson. Look forward to where your Chinese will take you. These words are about dreams, ambition, and the future. Every language journey continues beyond the classroom.",
 goals:["Express future goals and aspirations","Discuss dreams and ambitions in Chinese","Celebrate the completion of the B2 course"]},

{type:"teach", trg:"未来(wèilái)", src:"future", pos:"noun", gender:null,
 note:"未 (not yet) + 来 (come).\nThat which has not yet arrived. The time ahead.",
 example:"A: 你(nǐ)对(duì)未来(wèilái)有(yǒu)什么(shénme)计划(jìhuà)？\nB: 我(wǒ)想(xiǎng)去(qù)中国(Zhōngguó)工作(gōngzuò)。",
 exampleSrc:"A: What plans do you have for the future?\nB: I want to go work in China.",
 funFact:"未来 is one of the most elegant compounds in Chinese. 未 means 'not yet' and 来 means 'to come.' The future is literally 'that which has not yet come.' No anxiety, no rushing. Just patient expectation."},

{type:"teach", trg:"梦想(mèngxiǎng)", src:"dream / aspiration", pos:"noun", gender:null,
 note:"梦 (dream) + 想 (think/wish).\nA dream you actively think about. More than a sleeping dream.",
 example:"A: 你(nǐ)的(de)梦想(mèngxiǎng)是(shì)什么(shénme)？\nB: 我(wǒ)的(de)梦想(mèngxiǎng)是(shì)能(néng)用(yòng)中文(Zhōngwén)自由(zìyóu)地(de)交流(jiāoliú)。",
 exampleSrc:"A: What is your dream?\nB: My dream is to communicate freely in Chinese.",
 funFact:"梦 alone means a dream during sleep. Add 想 (to think/wish) and it becomes an aspiration, a waking dream you actively work toward. 中国梦 (Chinese Dream) is a national slogan echoing this compound."},

{type:"teach", trg:"信心(xìnxīn)", src:"confidence / faith", pos:"noun", gender:null,
 note:"Review word. 信 (trust/believe) + 心 (heart).\nBelief that lives in the heart.",
 example:"A: 有(yǒu)了(le)信心(xìnxīn)，什么(shénme)都(dōu)能(néng)做到(zuòdào)。\nB: 你(nǐ)说(shuō)得(de)对(duì)。",
 exampleSrc:"A: With confidence, you can accomplish anything.\nB: You are right.",
 funFact:"Revisiting this word from earlier in the unit. After a full B2 course, 信心 should be what you feel. Trust in your own heart and abilities."},

{type:"mc", q:"未来(wèilái) literally means:",
 opts:["tomorrow morning","next year","not yet come","already passed"],
 ans:"not yet come",
 hint:"未 means 'not yet.' 来 means 'to approach / arrive.' Put them together for a poetic description of the future."},

{type:"fb", s:"我(wǒ)的(de){1}是(shì)能(néng)用(yòng)中文(Zhōngwén)自由(zìyóu)地(de)交流(jiāoliú)。",
 a:["梦想(mèngxiǎng)"],
 opts:["梦想(mèngxiǎng)","未来(wèilái)","信心(xìnxīn)","成就(chéngjiù)"],
 hint:"A dream you actively work toward. 梦 (dream) + 想 (think/wish).",
 sSrc:"My {1} is to communicate freely in Chinese."},

{type:"match", pairs:[
  {trg:"未来(wèilái)", src:"future"},
  {trg:"梦想(mèngxiǎng)", src:"dream / aspiration"},
  {trg:"总结(zǒngjié)", src:"to summarize"},
  {trg:"回顾(huígù)", src:"to look back"},
  {trg:"进步(jìnbù)", src:"progress"}
]},

{type:"tip", title:"Four-Character Expressions: The Heart of Chinese",
 text:"Chinese loves four-character expressions (成语 chéngyǔ). You have already learned several:\n\n改革开放(gǎigé kāifàng) = Reform and Opening Up\n独生子女(dúshēng zǐnǚ) = only child\n融会贯通(rónghuì guàntōng) = thorough understanding\n\nFour-character patterns are the backbone of formal and literary Chinese. Each character carries weight, and four together create rhythm and balance.\n\nLearning to recognize and use 成语 is the next step on your journey beyond B2.",
 deepDive:{title:"Why Four Characters?",
  text:"Mandarin Chinese naturally gravitates toward pairs and multiples of two.\n\nTwo-character words dominate the modern vocabulary.\nFour-character idioms (成语) are the literary gold standard.\n\nThis comes from the rhythm of Chinese poetry, where lines of 4, 5, or 7 characters have been standard for over 2,000 years.\n\nThe four-character pattern also allows elegant parallelism. In 改革开放: 改 pairs with 开 (both about initiating change), and 革 pairs with 放 (both about releasing the old). Symmetry within brevity."}},

{type:"fb", s:"对(duì){1}充满(chōngmǎn)了(le)希望(xīwàng)。",
 a:["未来(wèilái)"],
 opts:["未来(wèilái)","梦想(mèngxiǎng)","过去(guòqù)","现在(xiànzài)"],
 hint:"That which has not yet arrived. The time still to come. 未 (not yet) + 来 (come).",
 sSrc:"Full of hope for the {1}."},

{type:"mc", q:"成语(chéngyǔ) are typically how many characters?",
 opts:["Two","Three","Four","Five"],
 ans:"Four",
 hint:"These idiomatic expressions follow the rhythmic pattern that Chinese literature has favored for thousands of years."},

{type:"drag_fill", s:"回顾(huígù)过去(guòqù)，我(wǒ)的(de){1}很(hěn)大(dà)。展望(zhǎnwàng){2}，我(wǒ)充满(chōngmǎn){3}。",
 blanks:{"1":"进步(jìnbù)","2":"未来(wèilái)","3":"信心(xìnxīn)"},
 pool:["进步(jìnbù)","未来(wèilái)","信心(xìnxīn)","梦想(mèngxiǎng)","成就(chéngjiù)","水平(shuǐpíng)"],
 hint:"Looking back: great forward movement. Looking ahead to what has not yet come: full of belief in the heart."},

{type:"mc", q:"Which sentence best uses 坚持(jiānchí)?",
 opts:["坚持(jiānchí)了(le)一天(yìtiān)就(jiù)放弃(fàngqì)了(le)","只要(zhǐyào)坚持(jiānchí)，就(jiù)能(néng)成功(chénggōng)","坚持(jiānchí)不(bù)重要(zhòngyào)","坚持(jiānchí)是(shì)一(yí)个(gè)地方(dìfang)"],
 ans:"只要(zhǐyào)坚持(jiānchí)，就(jiù)能(néng)成功(chénggōng)",
 hint:"坚持 means to persist with firm resolve. Which sentence treats it as the key to success?"},

{type:"fb", s:"学(xué)一(yì)门(mén)新(xīn)语言(yǔyán)是(shì)很(hěn)大(dà)的(de){1}。",
 a:["成就(chéngjiù)"],
 opts:["成就(chéngjiù)","梦想(mèngxiǎng)","水平(shuǐpíng)","交流(jiāoliú)"],
 hint:"A significant accomplishment. Both characters individually mean 'to accomplish,' doubling the impact.",
 sSrc:"Learning a new language is a great {1}."},

{type:"match", pairs:[
  {trg:"流利(liúlì)", src:"fluent"},
  {trg:"地道(dìdao)", src:"authentic / native-like"},
  {trg:"表达(biǎodá)", src:"to express"},
  {trg:"坚持(jiānchí)", src:"to persist"},
  {trg:"梦想(mèngxiǎng)", src:"dream / aspiration"}
]},

{type:"mc", q:"You have completed B2. Which word describes your Chinese journey from A1 to now?",
 opts:["总结(zǒngjié) - to summarize","回顾(huígù) - to look back","进步(jìnbù) - progress","水平(shuǐpíng) - level"],
 ans:"进步(jìnbù) - progress",
 hint:"This word means advancing steps, moving forward. It captures the steady forward movement from beginner to upper-intermediate."},

{type:"drag_fill", s:"我(wǒ)不但(búdàn)能(néng){1}中文(Zhōngwén)，而且(érqiě)说(shuō)得(de)越来越(yuèláiyuè){2}。",
 blanks:{"1":"理解(lǐjiě)","2":"流利(liúlì)"},
 pool:["理解(lǐjiě)","流利(liúlì)","总结(zǒngjié)","回顾(huígù)","地道(dìdao)","信心(xìnxīn)"],
 hint:"Not only can I deeply comprehend Chinese, but I speak it more and more smoothly."},

{type:"fb", s:"这(zhè)不(bú)是(shì)结束(jiéshù)，而是(érshì)一(yí)个(gè)新(xīn)的(de)开始(kāishǐ)。{1}学(xué)下去(xiàqù)！",
 a:["继续(jìxù)"],
 opts:["继续(jìxù)","坚持(jiānchí)","回顾(huígù)","总结(zǒngjié)"],
 hint:"To follow on and extend further. The verb of carrying on without stopping.",
 sSrc:"This is not the end, but a new beginning. {1} studying!"}
]}

]};

export default UNIT_36;
