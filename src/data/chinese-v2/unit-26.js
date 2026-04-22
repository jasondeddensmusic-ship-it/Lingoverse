// Unit 26: Science and Innovation
// Level: B2.1 (HSK 4)
// Chinese (Mandarin) V2 format with hanzi+pinyin notation
// Vocab: 科技, 发明, 实验, 数据, 理论, 证明, 方法, 过程, 效果, 进步, 人工智能, 基因, 网络, 系统, 创新

const UNIT_26 = {
n:26, lang:"zh", srcLang:"en", track:"v2",
title:"科技发展 Technological Progress", sub:"Science and Research",
icon:"🔬", level:"B2.1", color:"#7B5EE8",
lessons:[

// ─── L1: Scientific Foundations ───
{id:"zhv2_u26l1", title:"科学基础 Scientific Foundations", icon:"🧪", xp:15, board:true, steps:[
{type:"intro", title:"科学基础 Scientific Foundations",
 desc:"Learn the core vocabulary of science and research. These words allow you to discuss experiments, theories, data, and proof. China has become a global leader in science and technology, making this vocabulary essential.",
 goals:["Discuss science and technology with 科技, 发明, and 实验","Talk about data and theory with 数据 and 理论","Use 证明 to discuss proof and evidence"]},

{type:"tip", title:"China's Four Great Inventions",
 text:"China takes great pride in its 四大发明(sìdà fāmíng), the Four Great Inventions:\n\n造纸术(zàozhǐshù) = papermaking (circa 105 CE)\n印刷术(yìnshuāshù) = printing (circa 960 CE, movable type)\n火药(huǒyào) = gunpowder (circa 850 CE)\n指南针(zhǐnánzhēn) = the compass (circa 200 BCE)\n\nThese inventions spread worldwide and transformed civilization. Chinese children learn about them from elementary school. Modern China is now adding to this legacy with advances in AI, quantum computing, space exploration, and renewable energy.",
 deepDive:{title:"Modern Chinese Science and Technology",
  text:"China has invested heavily in science and technology. Key achievements include:\n\nSpace program: The Tiangong space station is fully operational. Chang'e missions have landed on the far side of the moon.\n\nQuantum computing: China built one of the world's fastest quantum computers.\n\n5G networks: China leads in 5G infrastructure deployment.\n\nRenewable energy: China is the world's largest producer of solar panels and electric vehicles.\n\nThe term 科技强国 (becoming a science and technology powerhouse) reflects the national ambition. China now produces more scientific papers annually than any other country."}},

{type:"teach", trg:"科技(kējì)", src:"technology / science and technology", pos:"noun", gender:null,
 note:"Science + skill. Short for 科学技术.\n科技发展 = technological development. 高科技 = high-tech.",
 example:"A: 科技(kējì)发展(fāzhǎn)改变(gǎibiàn)了(le)我们(wǒmen)的(de)生活(shēnghuó)。\nB: 是(shì)的(de)，特别(tèbié)是(shì)手机(shǒujī)和(hé)网络(wǎngluò)。",
 exampleSrc:"A: Technological development has changed our lives.\nB: Yes, especially smartphones and the internet.",
 funFact:"科 means a branch of study or a category, and 技 means skill or technique. 科技 abbreviates 科学技术 (science and technology). The word 科 contains the grain radical (禾), because ancient classification systems began with sorting different types of grain. Science is literally 'the skill of categorizing knowledge.'"},

{type:"teach", trg:"发明(fāmíng)", src:"invention / to invent", pos:"noun", gender:null,
 note:"Send out + bright/clear. To bring something new into the light.\n发明家 = inventor. 发明专利 = invention patent.",
 example:"A: 你(nǐ)觉得(juéde)最(zuì)伟大(wěidà)的(de)发明(fāmíng)是(shì)什么(shénme)？\nB: 我(wǒ)觉得(juéde)是(shì)互联网(hùliánwǎng)。",
 exampleSrc:"A: What do you think is the greatest invention?\nB: I think it is the internet.",
 funFact:"发 means to send out or emit, and 明 means bright or clear. An invention is 'sending something into the light,' making visible what was previously unknown. China's ancient inventions of paper, printing, gunpowder, and the compass are celebrated as contributions that transformed human civilization."},

{type:"teach", trg:"实验(shíyàn)", src:"experiment", pos:"noun", gender:null,
 note:"Real/actual + verify. Testing something in practice.\n做实验 = to do an experiment. 实验室 = laboratory.",
 example:"A: 这个(zhège)实验(shíyàn)需要(xūyào)多长(duōcháng)时间(shíjiān)？\nB: 大概(dàgài)需要(xūyào)三个月(sāngèyuè)。",
 exampleSrc:"A: How long does this experiment take?\nB: About three months.",
 funFact:"实 means real or solid, and 验 means to verify or test. An experiment is 'real verification.' The word captures the scientific method: you do not just theorize, you test in reality. China's earliest experimental traditions date back to ancient alchemy (炼丹术, liàndānshù), which sought the elixir of immortality through chemical experimentation."},

{type:"teach", trg:"数据(shùjù)", src:"data", pos:"noun", gender:null,
 note:"Number + basis/evidence. Factual information in numerical form.\n大数据 = big data. 数据分析 = data analysis.",
 example:"A: 我们(wǒmen)需要(xūyào)更(gèng)多(duō)的(de)数据(shùjù)来(lái)支持(zhīchí)这个(zhège)理论(lǐlùn)。\nB: 好(hǎo)的(de)，我(wǒ)会(huì)继续(jìxù)收集(shōují)。",
 exampleSrc:"A: We need more data to support this theory.\nB: OK, I will continue collecting.",
 funFact:"数 means number, and 据 means basis or evidence. Data is 'numerical evidence.' In the age of 大数据 (big data), China has become a global leader in data-driven technology. The sheer scale of China's internet users generates enormous datasets that fuel advances in AI and machine learning."},

{type:"teach", trg:"理论(lǐlùn)", src:"theory", pos:"noun", gender:null,
 note:"Principle + discuss. A systematic explanation of phenomena.\n理论上 = in theory. 理论与实践 = theory and practice.",
 example:"A: 理论(lǐlùn)上(shàng)这个(zhège)方法(fāngfǎ)应该(yīnggāi)有效(yǒuxiào)。\nB: 但是(dànshì)我们(wǒmen)还(hái)需要(xūyào)通过(tōngguò)实验(shíyàn)来(lái)证明(zhèngmíng)。",
 exampleSrc:"A: In theory, this method should be effective.\nB: But we still need to prove it through experiments.",
 funFact:"理 means principle or reason (it originally meant the veins in jade, the natural patterns of things), and 论 means to discuss. A theory is a 'discussion of principles.' Chinese philosophy has always valued the connection between theory and practice: 理论联系实际 (connecting theory with reality) is a widely cited principle."},

{type:"teach", trg:"证明(zhèngmíng)", src:"to prove / proof", pos:"verb", gender:null,
 note:"Certify + clear/bright. To make something clearly verified.\n证明文件 = certificate/proof document. 事实证明 = facts prove.",
 example:"A: 你(nǐ)能(néng)证明(zhèngmíng)这个(zhège)理论(lǐlùn)是(shì)正确(zhèngquè)的(de)吗(ma)？\nB: 能(néng)，实验(shíyàn)数据(shùjù)已经(yǐjīng)证明(zhèngmíng)了(le)。",
 exampleSrc:"A: Can you prove this theory is correct?\nB: Yes, experimental data has already proved it.",
 funFact:"证 means to certify or bear witness, and 明 means clear or bright. To prove is to 'make clearly certified.' In both science and law, 证明 is essential. The scientific demand for 证明 through evidence is expressed in the phrase 用事实说话 (let the facts speak)."},

{type:"mc", q:"科技(kējì) is an abbreviation of:",
 opts:["科学技术 (science and technology)","科目技能 (subject skills)","科研技巧 (research techniques)","科室技工 (department technicians)"],
 ans:"科学技术 (science and technology)",
 hint:"科 comes from 科学 (___), and 技 comes from 技术 (___). The compound combines both fields."},

{type:"match", pairs:[
  {trg:"科技(kējì)", src:"technology"},
  {trg:"发明(fāmíng)", src:"invention"},
  {trg:"实验(shíyàn)", src:"experiment"},
  {trg:"数据(shùjù)", src:"data"},
  {trg:"理论(lǐlùn)", src:"theory"},
  {trg:"证明(zhèngmíng)", src:"to prove"}
]},

{type:"fb", s:"我们(wǒmen)需要(xūyào)通过(tōngguò){1}来(lái)验证(yànzhèng)这个(zhège)理论(lǐlùn)。",
 a:["实验(shíyàn)"],
 opts:["实验(shíyàn)","数据(shùjù)","发明(fāmíng)","科技(kējì)"],
 hint:"This word means testing something in practice. Scientists do these in a laboratory to verify their ideas.",
 sSrc:"We need to verify this theory through {1}."},

{type:"mc", q:"数据(shùjù) literally means:",
 opts:["Historical records","Numerical evidence","Written notes","Personal opinions"],
 ans:"Numerical evidence",
 hint:"数 means number, and 据 means basis or …. Data is factual information in measurable form."},

{type:"fb", s:"{1}数据(shùjù)已经(yǐjīng)证明(zhèngmíng)了(le)这个(zhège)理论(lǐlùn)。",
 a:["实验(shíyàn)"],
 opts:["实验(shíyàn)","科技(kējì)","发明(fāmíng)","方法(fāngfǎ)"],
 hint:"This type of data comes from controlled testing in a lab. It is the strongest form of scientific evidence.",
 sSrc:"{1} data has already proved this theory."}
]},

// ─── L2: Methods and Progress ───
{id:"zhv2_u26l2", title:"方法与进步 Methods and Progress", icon:"📊", xp:15, board:true, steps:[
{type:"intro", title:"方法与进步 Methods and Progress",
 desc:"Learn to discuss methods, processes, effects, and progress. These words connect the scientific process to real-world outcomes and improvements.",
 goals:["Describe methods and processes with 方法 and 过程","Discuss results and effects with 效果","Talk about progress with 进步"]},

{type:"teach", trg:"方法(fāngfǎ)", src:"method / approach", pos:"noun", gender:null,
 note:"Direction + law/way. A systematic approach to doing something.\n学习方法 = study method. 解决方法 = solution method.",
 example:"A: 你(nǐ)有(yǒu)什么(shénme)好(hǎo)的(de)学习(xuéxí)方法(fāngfǎ)？\nB: 我(wǒ)觉得(juéde)每天(měitiān)练习(liànxí)是(shì)最好(zuìhǎo)的(de)方法(fāngfǎ)。",
 exampleSrc:"A: Do you have any good study methods?\nB: I think practicing every day is the best method.",
 funFact:"方 means direction or square (suggesting order), and 法 means law or way. A method is a 'directional law,' a systematic path toward a goal. 法 is one of the most productive characters in Chinese, appearing in 法律 (law), 语法 (grammar), 书法 (calligraphy), and 方法 (method)."},

{type:"teach", trg:"过程(guòchéng)", src:"process / course", pos:"noun", gender:null,
 note:"Pass through + journey. The progression from start to finish.\n学习过程 = learning process. 发展过程 = development process.",
 example:"A: 学(xué)中文(Zhōngwén)的(de)过程(guòchéng)虽然(suīrán)难(nán)，但是(dànshì)很(hěn)有趣(yǒuqù)。\nB: 对(duì)，享受(xiǎngshòu)过程(guòchéng)很(hěn)重要(zhòngyào)。",
 exampleSrc:"A: The process of learning Chinese is difficult but very interesting.\nB: Right, enjoying the process is very important.",
 funFact:"过 means to pass through, and 程 means a journey or stage. A process is 'the journey of passing through.' The word emphasizes that results come from the journey, not just the destination. 享受过程 (enjoy the process) is common advice in Chinese, reflecting a Daoist appreciation for the path itself."},

{type:"teach", trg:"效果(xiàoguǒ)", src:"effect / result", pos:"noun", gender:null,
 note:"Effect + fruit. The outcome or impact of an action.\n有效果 = effective. 没有效果 = ineffective.",
 example:"A: 这个(zhège)新(xīn)方法(fāngfǎ)的(de)效果(xiàoguǒ)怎么样(zěnmeyàng)？\nB: 效果(xiàoguǒ)很(hěn)好(hǎo)，学生(xuéshēng)的(de)成绩(chéngjì)提高(tígāo)了(le)。",
 exampleSrc:"A: How is the effect of this new method?\nB: The effect is very good, students' grades improved.",
 funFact:"效 means effect or to imitate, and 果 means fruit or result. An effect is 'the fruit of action.' The metaphor of fruit is powerful: just as a tree bears fruit, actions produce results. 效果 is used everywhere from medicine (药物效果, drug effectiveness) to education to advertising."},

{type:"teach", trg:"进步(jìnbù)", src:"progress / to progress", pos:"noun", gender:null,
 note:"Advance + step. Moving forward step by step.\n社会进步 = social progress. 你进步了 = you have improved.",
 example:"A: 你(nǐ)的(de)中文(Zhōngwén)进步(jìnbù)很(hěn)大(dà)！\nB: 谢谢(xièxie)，我(wǒ)每天(měitiān)都(dōu)在(zài)努力(nǔlì)。",
 exampleSrc:"A: Your Chinese has improved a lot!\nB: Thanks, I work hard every day.",
 funFact:"进 means to advance or enter, and 步 means a step. Progress is 'advancing steps.' The word captures the Chinese belief that improvement comes through incremental effort, one step at a time. 进步 is also used as a compliment: telling someone 你进步了 is one of the kindest things you can say to a language learner."},

{type:"mc", q:"效果(xiàoguǒ) uses the character 果(guǒ), which means:",
 opts:["Fruit / result","Flower","Root","Leaf"],
 ans:"Fruit / result",
 hint:"果 literally means …. An effect is 'the … of action,' what grows from what you do."},

{type:"match", pairs:[
  {trg:"方法(fāngfǎ)", src:"method"},
  {trg:"过程(guòchéng)", src:"process"},
  {trg:"效果(xiàoguǒ)", src:"effect / result"},
  {trg:"进步(jìnbù)", src:"progress"}
]},

{type:"fb", s:"每天(měitiān)练习(liànxí)是(shì)最好(zuìhǎo)的(de)学习(xuéxí){1}。",
 a:["方法(fāngfǎ)"],
 opts:["方法(fāngfǎ)","过程(guòchéng)","效果(xiàoguǒ)","进步(jìnbù)"],
 hint:"This word means a systematic approach to doing something. It combines 'direction' and 'law.'",
 sSrc:"Practicing every day is the best study {1}."},

{type:"mc", q:"你(nǐ)的(de)中文(Zhōngwén)进步(jìnbù)很(hěn)大(dà)！ This is:",
 opts:["A suggestion about study","A compliment about improvement","A criticism about mistakes","A question about plans"],
 ans:"A compliment about improvement",
 hint:"进步 means progress or ___. 很大 means very big. Telling someone they have improved a lot is a warm ___."},

{type:"fb", s:"学(xué)中文(Zhōngwén)的(de){1}虽然(suīrán)慢(màn)，但是(dànshì)很(hěn)有趣(yǒuqù)。",
 a:["过程(guòchéng)"],
 opts:["过程(guòchéng)","方法(fāngfǎ)","效果(xiàoguǒ)","进步(jìnbù)"],
 hint:"This word means the journey from start to finish. It describes the experience of going through something step by step.",
 sSrc:"The {1} of learning Chinese is slow but very interesting."},

{type:"fb", s:"这个(zhège)新(xīn)药(yào)的(de){1}非常(fēicháng)好(hǎo)。",
 a:["效果(xiàoguǒ)"],
 opts:["效果(xiàoguǒ)","过程(guòchéng)","方法(fāngfǎ)","进步(jìnbù)"],
 hint:"This word means the outcome or impact of an action. The new medicine produced very good ones.",
 sSrc:"The {1} of this new medicine is very good."}
]},

// ─── L3: Innovation and the Future ───
{id:"zhv2_u26l3", title:"创新未来 Innovating the Future", icon:"🚀", xp:15, board:true, steps:[
{type:"intro", title:"创新未来 Innovating the Future",
 desc:"Learn vocabulary for cutting-edge science: artificial intelligence, genetics, innovation, and systems. These concepts define the future and are increasingly important in Chinese discourse.",
 goals:["Discuss AI with 人工智能","Talk about genetics and networks with 基因 and 网络","Use 创新 and 系统 to discuss innovation"]},

{type:"teach", trg:"人工智能(réngōng zhìnéng)", src:"artificial intelligence / AI", pos:"noun", gender:null,
 note:"Human + work + wisdom + ability. Machine intelligence.\nOften abbreviated as AI. 人工智能技术 = AI technology.",
 example:"A: 人工智能(réngōng zhìnéng)会(huì)取代(qǔdài)人类(rénlèi)的(de)工作(gōngzuò)吗(ma)？\nB: 一些(yīxiē)简单(jiǎndān)的(de)工作(gōngzuò)可能(kěnéng)会(huì)，但(dàn)创造性(chuàngzàoxìng)的(de)工作(gōngzuò)不会(búhuì)。",
 exampleSrc:"A: Will AI replace human jobs?\nB: Some simple jobs possibly, but creative work will not be replaced.",
 funFact:"人工 means 'human-made' (as opposed to natural), and 智能 means 'wisdom and ability.' AI is literally 'human-made wisdom.' China is one of the world's leading countries in AI research and application. Chinese companies have developed AI for facial recognition, autonomous driving, language translation, and medical diagnosis."},

{type:"teach", trg:"基因(jīyīn)", src:"gene", pos:"noun", gender:null,
 note:"Foundation + cause. The basic unit of heredity.\n基因技术 = genetic technology. 基因编辑 = gene editing.",
 example:"A: 基因(jīyīn)技术(jìshù)可以(kěyǐ)治疗(zhìliáo)很多(hěnduō)疾病(jíbìng)。\nB: 是(shì)的(de)，但是(dànshì)也(yě)有(yǒu)道德(dàodé)问题(wèntí)。",
 exampleSrc:"A: Genetic technology can treat many diseases.\nB: Yes, but there are also ethical issues.",
 funFact:"基 means foundation or base, and 因 means cause or reason. A gene is the 'foundational cause' of biological traits. The word was coined as a translation of the English 'gene.' China has become a major player in genetic research, though gene editing has also sparked intense ethical debates about the boundaries of scientific intervention."},

{type:"teach", trg:"系统(xìtǒng)", src:"system", pos:"noun", gender:null,
 note:"Connect/relate + unite. An organized whole of interconnected parts.\n操作系统 = operating system. 教育系统 = education system.",
 example:"A: 这个(zhège)操作(cāozuò)系统(xìtǒng)很(hěn)好用(hǎoyòng)。\nB: 对(duì)，而且(érqiě)更新(gēngxīn)很(hěn)快(kuài)。",
 exampleSrc:"A: This operating system is very user-friendly.\nB: Yes, and it updates very quickly.",
 funFact:"系 means to connect or relate (it originally depicted a silk thread), and 统 means to unite or govern. A system is 'connected and unified.' The character 系 represents a thread binding things together. From computer operating systems (操作系统) to the solar system (太阳系), the word describes any organized, interconnected structure."},

{type:"teach", trg:"创新(chuàngxīn)", src:"innovation / to innovate", pos:"noun", gender:null,
 note:"Begin/initiate + new. Creating something genuinely new.\n技术创新 = technological innovation. 创新精神 = innovative spirit.",
 example:"A: 创新(chuàngxīn)是(shì)经济(jīngjì)发展(fāzhǎn)的(de)动力(dònglì)。\nB: 没错(méicuò)，没有(méiyǒu)创新(chuàngxīn)就(jiù)没有(méiyǒu)进步(jìnbù)。",
 exampleSrc:"A: Innovation is the driving force of economic development.\nB: Exactly, without innovation there is no progress.",
 funFact:"创 means to begin or initiate (it also meant to wound, as creating something new breaks through the old), and 新 means new. Innovation is 'initiating the new.' 创新驱动发展 (innovation-driven development) is a national strategy in China. The word 创 appears in 创作 (to create art), 创业 (to start a business), and 创造 (to create), all sharing the idea of bringing something new into existence."},

{type:"mc", q:"人工智能(réngōng zhìnéng) literally translates as:",
 opts:["Human-made wisdom and ability","Computer brain","Smart machine","Robot worker"],
 ans:"Human-made wisdom and ability",
 hint:"人工 = ___-___ (not natural). 智能 = ___ + ___. Together they describe machine intelligence."},

{type:"match", pairs:[
  {trg:"人工智能(réngōng zhìnéng)", src:"artificial intelligence"},
  {trg:"基因(jīyīn)", src:"gene"},
  {trg:"系统(xìtǒng)", src:"system"},
  {trg:"创新(chuàngxīn)", src:"innovation"}
]},

{type:"fb", s:"{1}是(shì)经济(jīngjì)发展(fāzhǎn)的(de)动力(dònglì)。",
 a:["创新(chuàngxīn)"],
 opts:["创新(chuàngxīn)","系统(xìtǒng)","基因(jīyīn)","人工智能(réngōng zhìnéng)"],
 hint:"This word means creating something genuinely new. It is considered the driving force of economic growth.",
 sSrc:"{1} is the driving force of economic development."},

{type:"mc", q:"基因(jīyīn)技术(jìshù)的(de)发展(fāzhǎn)带来(dàilái)了(le)道德(dàodé)问题(wèntí)。 This means:",
 opts:["Gene editing is illegal","Genetic technology's development has brought ethical issues","Gene technology is too expensive","Genetic research has stopped"],
 ans:"Genetic technology's development has brought ethical issues",
 hint:"道德问题 means moral/… …. The sentence acknowledges that scientific progress raises … questions."},

{type:"fb", s:"这个(zhège)操作(cāozuò){1}很(hěn)好用(hǎoyòng)。",
 a:["系统(xìtǒng)"],
 opts:["系统(xìtǒng)","创新(chuàngxīn)","科技(kējì)","方法(fāngfǎ)"],
 hint:"This word means an organized whole of interconnected parts. Computers and phones run on one of these.",
 sSrc:"This operating {1} is very user-friendly."},

{type:"fb", s:"{1}会(huì)改变(gǎibiàn)很多(hěnduō)行业(hángyè)的(de)未来(wèilái)。",
 a:["人工智能(réngōng zhìnéng)"],
 opts:["人工智能(réngōng zhìnéng)","基因(jīyīn)","系统(xìtǒng)","创新(chuàngxīn)"],
 hint:"This four-character term describes machines that can think and learn. It will transform many industries.",
 sSrc:"{1} will change the future of many industries."}
]},

// ─── L4: Unit 26 Review ───
{id:"zhv2_u26l4", title:"科技复习 Science Review", icon:"🔄", xp:15, board:true, steps:[
{type:"intro", title:"科技复习 Science Review",
 desc:"Review all science and innovation vocabulary from this unit. Test your ability to discuss scientific methods, technological progress, and cutting-edge innovation.",
 goals:["Review all 15 science and innovation words","Connect scientific process vocabulary to outcomes","Discuss technology and innovation at the B2 level"]},

{type:"match", pairs:[
  {trg:"科技(kējì)", src:"technology"},
  {trg:"实验(shíyàn)", src:"experiment"},
  {trg:"方法(fāngfǎ)", src:"method"},
  {trg:"创新(chuàngxīn)", src:"innovation"},
  {trg:"人工智能(réngōng zhìnéng)", src:"AI"}
]},

{type:"mc", q:"发明(fāmíng) literally means:",
 opts:["Sending something into the light","Building a machine","Copying an idea","Teaching a class"],
 ans:"Sending something into the light",
 hint:"发 means to send out or emit, and 明 means bright or clear. An invention brings … new into visibility."},

{type:"fb", s:"我们(wǒmen)需要(xūyào)更(gèng)多(duō)的(de){1}来(lái)支持(zhīchí)这个(zhège)理论(lǐlùn)。",
 a:["数据(shùjù)"],
 opts:["数据(shùjù)","方法(fāngfǎ)","过程(guòchéng)","效果(xiàoguǒ)"],
 hint:"This word means factual information in numerical form. Scientists collect these to support their theories.",
 sSrc:"We need more {1} to support this theory."},

{type:"mc", q:"过程(guòchéng) emphasizes:",
 opts:["The cost of something","The journey from start to finish","Only the final result","Only the beginning"],
 ans:"The journey from start to finish",
 hint:"过 means to pass through, and 程 means ___. The word describes the full progression of an experience."},

{type:"fb", s:"实验(shíyàn){1}已经(yǐjīng)证明(zhèngmíng)了(le)这个(zhège)理论(lǐlùn)是(shì)正确(zhèngquè)的(de)。",
 a:["数据(shùjù)"],
 opts:["数据(shùjù)","方法(fāngfǎ)","效果(xiàoguǒ)","进步(jìnbù)"],
 hint:"This word means numerical evidence. It is what experiments produce as measurable proof.",
 sSrc:"Experimental {1} has already proved this theory is correct."},

{type:"match", pairs:[
  {trg:"发明(fāmíng)", src:"invention"},
  {trg:"数据(shùjù)", src:"data"},
  {trg:"理论(lǐlùn)", src:"theory"},
  {trg:"证明(zhèngmíng)", src:"to prove"},
  {trg:"进步(jìnbù)", src:"progress"}
]},

{type:"fb", s:"你(nǐ)的(de)中文(Zhōngwén){1}很(hěn)大(dà)！",
 a:["进步(jìnbù)"],
 opts:["进步(jìnbù)","效果(xiàoguǒ)","过程(guòchéng)","方法(fāngfǎ)"],
 hint:"This word means improvement or advancement. Telling a learner they have made a big one is a warm compliment.",
 sSrc:"Your Chinese {1} is big!"},

{type:"mc", q:"系统(xìtǒng) originally involves the image of:",
 opts:["A flowing river","A growing tree","A silk thread connecting things","A stone wall"],
 ans:"A silk thread connecting things",
 hint:"系 originally depicted a ___ ___. A system is ___ bound together, unified and connected."},

{type:"drag_fill",
 s:"科学家(kēxuéjiā)用(yòng)新(xīn)的(de){1}做(zuò)了(le){2}，收集(shōují)了(le)很多(hěnduō){3}，{4}了(le)这个(zhège)理论(lǐlùn)是(shì)正确(zhèngquè)的(de)。",
 blanks:{"1":"方法(fāngfǎ)","2":"实验(shíyàn)","3":"数据(shùjù)","4":"证明(zhèngmíng)"},
 pool:["方法(fāngfǎ)","实验(shíyàn)","数据(shùjù)","证明(zhèngmíng)"],
 hint:"Scientists used a new method, conducted experiments, collected lots of data, and proved the theory correct."},

{type:"mc", q:"创新(chuàngxīn) shares the character 创(chuàng) with 创作(chuàngzuò). Both words share the idea of:",
 opts:["Destroying something old","Copying something","Analyzing something","Bringing something new into existence"],
 ans:"Bringing something new into existence",
 hint:"创 means to initiate or begin ___ new. Both 创新 and 创作 involve original creation."}
]}

]};

export default UNIT_26;
