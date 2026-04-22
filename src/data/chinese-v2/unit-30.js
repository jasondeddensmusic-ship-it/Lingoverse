// Unit 30: Philosophy and Thought
// Level: B2.2 (HSK 4)
// Chinese (Mandarin) V2 format with hanzi+pinyin notation

const UNIT_30 = {
n:30, lang:"zh", srcLang:"en", track:"v2",
title:"思想与哲学 Thought and Philosophy", sub:"Chinese Philosophy",
icon:"🧠", level:"B2.2", color:"#7B5EE8",
lessons:[

// ─── L1: Foundations of Chinese Philosophy ───
{id:"zhv2_u30l1", title:"哲学基础 Philosophical Foundations", icon:"📖", xp:15, board:true, steps:[
{type:"intro", title:"哲学基础 Philosophical Foundations",
 desc:"Explore the core vocabulary of Chinese philosophy. These concepts have shaped Chinese culture for over 2,000 years and remain central to everyday thinking and values.",
 goals:["Discuss philosophy with 哲学, 思想, and 道","Identify major schools: 儒家 and 佛教","Understand 价值 and 智慧 in philosophical contexts"]},

{type:"teach", trg:"哲学(zhéxué)", src:"philosophy", pos:"noun", gender:null,
 note:"哲 = wise/sagacious, 学 = study/learning.\nThe systematic study of fundamental questions.",
 example:"A: 你(nǐ)对(duì)哲学(zhéxué)感(gǎn)兴趣(xìngqù)吗(ma)？\nB: 很(hěn)感(gǎn)兴趣(xìngqù)，特别(tèbié)是(shì)中国(Zhōngguó)哲学(zhéxué)。",
 exampleSrc:"A: Are you interested in philosophy?\nB: Very interested, especially Chinese philosophy.",
 funFact:"The word 哲学 was coined in Japanese (tetsugaku) in the 1870s to translate the Western concept of 'philosophy.' China later borrowed this translation. Before that, Chinese thinkers did not have a single word for what we now call philosophy."},

{type:"teach", trg:"思想(sīxiǎng)", src:"thought / ideology", pos:"noun", gender:null,
 note:"思 = think, 想 = think/imagine.\nBoth characters mean 'think,' creating emphasis.\nRefers to ideas, ideology, or worldview.",
 example:"A: 孔子(Kǒngzǐ)的(de)思想(sīxiǎng)影响(yǐngxiǎng)了(le)整(zhěng)个(gè)东亚(Dōngyà)。\nB: 是(shì)的(de)，他(tā)的(de)思想(sīxiǎng)至今(zhìjīn)仍然(réngrán)很(hěn)重要(zhòngyào)。",
 exampleSrc:"A: Confucius's thought influenced all of East Asia.\nB: Yes, his ideas are still important today.",
 funFact:"思 contains the heart radical (心) at the bottom because in Chinese tradition, thinking was believed to happen in the heart, not the brain. The character literally means 'heart-field,' suggesting thoughts grow from the heart like crops from soil."},

{type:"teach", trg:"道(dào)", src:"the way / Tao / path", pos:"noun", gender:null,
 note:"One of the most important characters in Chinese.\nMeans road, way, principle, or the Tao of Daoist philosophy.",
 example:"A: 道(dào)可(kě)道(dào)，非(fēi)常(cháng)道(dào)。\nB: 这(zhè)是(shì)《道德经(Dàodéjīng)》最(zuì)有名(yǒumíng)的(de)一(yì)句(jù)话(huà)。",
 exampleSrc:"A: The Tao that can be spoken is not the eternal Tao.\nB: This is the most famous line from the Tao Te Ching.",
 funFact:"道 appears everywhere in Chinese: 道路(dàolù) road, 道理(dàolǐ) reason, 知道(zhīdào) to know, 道德(dàodé) morality. It combines the radical for 'movement' with 'head,' suggesting a head leading the way forward."},

{type:"teach", trg:"儒家(Rújiā)", src:"Confucianism", pos:"noun", gender:null,
 note:"儒 = scholar/Confucian, 家 = school/family.\nThe philosophical school founded on Confucius's teachings.",
 example:"A: 儒家(Rújiā)思想(sīxiǎng)强调(qiángdiào)什么(shénme)？\nB: 强调(qiángdiào)仁(rén)、义(yì)、礼(lǐ)。",
 exampleSrc:"A: What does Confucianism emphasize?\nB: It emphasizes benevolence, righteousness, and ritual propriety.",
 funFact:"The character 儒 contains the person radical (亻) and 需 (need). A 儒 was someone people needed: an educated scholar who could advise rulers and teach ethics. Confucius himself was the first professional teacher in Chinese history."},

{type:"teach", trg:"佛教(Fójiào)", src:"Buddhism", pos:"noun", gender:null,
 note:"佛 = Buddha, 教 = teaching/religion.\nThe religion and philosophy introduced from India.",
 example:"A: 佛教(Fójiào)什么(shénme)时候(shíhou)传入(chuánrù)中国(Zhōngguó)的(de)？\nB: 大约(dàyuē)两千(liǎngqiān)年(nián)前(qián)，汉朝(Hàncháo)的(de)时候(shíhou)。",
 exampleSrc:"A: When was Buddhism introduced to China?\nB: About two thousand years ago, during the Han dynasty.",
 funFact:"佛 is a transliteration of the Sanskrit word 'Buddha.' The character was specially created for this purpose. Chinese Buddhism developed its own unique schools like Chan (Zen), which later spread to Japan and Korea."},

{type:"teach", trg:"价值(jiàzhí)", src:"value", pos:"noun", gender:null,
 note:"价 = price/value, 值 = worth.\nUsed for both monetary worth and moral/philosophical values.",
 example:"A: 每(měi)个(gè)人(rén)都(dōu)有(yǒu)自己(zìjǐ)的(de)价值(jiàzhí)观(guān)。\nB: 对(duì)，价值(jiàzhí)观(guān)受(shòu)文化(wénhuà)影响(yǐngxiǎng)很(hěn)大(dà)。",
 exampleSrc:"A: Everyone has their own values.\nB: Right, values are greatly influenced by culture.",
 funFact:"价值观(jiàzhíguān) means 'values' (philosophical outlook). 观 means 'view/outlook.' Chinese adds 观 to many abstract nouns to create 'worldview' compounds: 世界观(shìjièguān) worldview, 人生观(rénshēngguān) outlook on life."},

{type:"teach", trg:"智慧(zhìhuì)", src:"wisdom", pos:"noun", gender:null,
 note:"智 = intellect/knowledge, 慧 = clever/understanding.\nDeep understanding that goes beyond mere knowledge.",
 example:"A: 古代(gǔdài)哲学家(zhéxuéjiā)留下(liúxià)了(le)很(hěn)多(duō)智慧(zhìhuì)。\nB: 这些(zhèxiē)智慧(zhìhuì)今天(jīntiān)还(hái)有(yǒu)价值(jiàzhí)。",
 exampleSrc:"A: Ancient philosophers left behind much wisdom.\nB: This wisdom still has value today.",
 funFact:"智 and 慧 are near-synonyms paired for emphasis. 智 leans toward intellectual knowledge while 慧 leans toward intuitive understanding. True 智慧 requires both the rational and the intuitive working together."},

{type:"tip", title:"The Three Teachings of China",
 text:"Chinese culture is built on three philosophical traditions:\n\n1. 儒家(Rújiā) Confucianism: Social harmony, education, respect for elders, moral duty.\n2. 道家(Dàojiā) Daoism: Nature, spontaneity, balance, the Way (道).\n3. 佛教(Fójiào) Buddhism: Compassion, mindfulness, letting go of attachment.\n\nThe Chinese saying 三教合一(sānjiào héyī) means 'three teachings merge into one.' Most Chinese people blend elements from all three traditions rather than following just one.",
 deepDive:{title:"Philosophy in Daily Chinese",
  text:"Chinese philosophy is not just for academics. It lives in everyday language:\n\n道理(dàolǐ) reason/principle: 'That makes sense' = 有道理\n阴阳(yīnyáng) yin and yang: balance in medicine, food, relationships\n缘分(yuánfèn) fate/destiny: explains chance meetings and relationships\n面子(miànzi) face: social reputation, central to all interactions\n\nWhen Chinese people say 这不合道理 (this does not conform to reason), they are using a concept that reaches back to Confucius himself."}},

{type:"mc", q:"道(dào)可(kě)道(dào)，非(fēi)常(cháng)道(dào) comes from which text?",
 opts:["道德经 (Tao Te Ching)","论语 (The Analerta)","孙子兵法 (Art of War)","西游记 (Journey to the West)"],
 ans:"道德经 (Tao Te Ching)",
 hint:"This is the opening line of the foundational text of Daoism, attributed to Laozi."},

{type:"match", pairs:[
  {trg:"哲学(zhéxué)", src:"philosophy"},
  {trg:"思想(sīxiǎng)", src:"thought/ideology"},
  {trg:"道(dào)", src:"the way/Tao"},
  {trg:"儒家(Rújiā)", src:"Confucianism"},
  {trg:"佛教(Fójiào)", src:"Buddhism"},
  {trg:"价值(jiàzhí)", src:"value"}
]},

{type:"fb", s:"孔子(Kǒngzǐ)的(de){1}影响(yǐngxiǎng)了(le)整(zhěng)个(gè)东亚(Dōngyà)。",
 a:["思想(sīxiǎng)"],
 opts:["思想(sīxiǎng)","哲学(zhéxué)","智慧(zhìhuì)","道(dào)"],
 hint:"Which word refers to an organized system of ideas or ideology?",
 sSrc:"Confucius's {1} influenced all of East Asia."},

{type:"mc", q:"儒家(Rújiā)思想(sīxiǎng)强调(qiángdiào) 仁(rén)、义(yì)、礼(lǐ)。 What values are these?",
 opts:["Compassion, meditation, detachment","Benevolence, righteousness, ritual propriety","Wealth, power, fame","Nature, balance, spontaneity"],
 ans:"Benevolence, righteousness, ritual propriety",
 hint:"These are the three core Confucian virtues that focus on human relationships and moral conduct."},

{type:"fb", s:"古代(gǔdài)哲学家(zhéxuéjiā)留下(liúxià)了(le)很(hěn)多(duō){1}。",
 a:["智慧(zhìhuì)"],
 opts:["智慧(zhìhuì)","价值(jiàzhí)","佛教(Fójiào)","儒家(Rújiā)"],
 hint:"What deep understanding did ancient philosophers pass down to us?",
 sSrc:"Ancient philosophers left behind much {1}."}
]},

// ─── L2: Principles and Spirit ───
{id:"zhv2_u30l2", title:"道理与精神 Principles and Spirit", icon:"✨", xp:15, board:true, steps:[
{type:"intro", title:"道理与精神 Principles and Spirit",
 desc:"Explore vocabulary for discussing reason, destiny, spirit, and personal cultivation. These concepts appear daily in Chinese conversation and literature.",
 goals:["Use 道理 and 命运 to discuss reason and fate","Understand 精神 and 境界 as philosophical concepts","Discuss self-cultivation with 修养 and 和谐"]},

{type:"teach", trg:"道理(dàolǐ)", src:"principle / reason / truth", pos:"noun", gender:null,
 note:"道 = way, 理 = principle.\nThe underlying logic or reason behind things.",
 example:"A: 你(nǐ)说(shuō)的(de)很(hěn)有(yǒu)道理(dàolǐ)。\nB: 道理(dàolǐ)谁(shéi)都(dōu)懂(dǒng)，做(zuò)到(dào)很(hěn)难(nán)。",
 exampleSrc:"A: What you said makes a lot of sense.\nB: Everyone understands the principle, but doing it is hard.",
 funFact:"The phrase 有道理 (has reason/makes sense) is one of the most common expressions in daily Chinese. When someone says something logical, you nod and say 有道理. It is the Chinese equivalent of 'good point.'"},

{type:"teach", trg:"命运(mìngyùn)", src:"fate / destiny", pos:"noun", gender:null,
 note:"命 = life/fate, 运 = movement/luck.\nThe course of one's life, whether predetermined or shaped by effort.",
 example:"A: 你(nǐ)相信(xiāngxìn)命运(mìngyùn)吗(ma)？\nB: 我(wǒ)觉得(juéde)命运(mìngyùn)掌握(zhǎngwò)在(zài)自己(zìjǐ)手(shǒu)中(zhōng)。",
 exampleSrc:"A: Do you believe in fate?\nB: I think destiny is in our own hands.",
 funFact:"Chinese culture has a complex relationship with fate. Confucianism teaches that effort matters (知命而为), while folk religion emphasizes predetermined destiny (命中注定). Most Chinese blend both views: work hard, but accept what cannot be changed."},

{type:"teach", trg:"精神(jīngshén)", src:"spirit / mind / essence", pos:"noun", gender:null,
 note:"精 = refined/essence, 神 = spirit/god.\nCan mean mental state, spirit, or the essence of something.",
 example:"A: 他(tā)虽然(suīrán)年纪(niánjì)大(dà)了(le)，但是(dànshì)精神(jīngshén)很(hěn)好(hǎo)。\nB: 因为(yīnwèi)他(tā)一直(yìzhí)保持(bǎochí)锻炼(duànliàn)。",
 exampleSrc:"A: Although he is old, his spirit is very good.\nB: Because he has always kept exercising.",
 funFact:"精神 has two pronunciations with different meanings. As jīngshén it means 'spirit/vitality.' As jīngshen (neutral second tone) it means 'energetic/lively.' Context tells you which meaning is intended."},

{type:"teach", trg:"境界(jìngjiè)", src:"realm / level / state", pos:"noun", gender:null,
 note:"境 = boundary/territory, 界 = boundary/world.\nA level of achievement, especially in art, wisdom, or character.",
 example:"A: 他(tā)的(de)书法(shūfǎ)已经(yǐjīng)达到(dádào)了(le)很(hěn)高(gāo)的(de)境界(jìngjiè)。\nB: 这(zhè)需要(xūyào)多年(duōnián)的(de)修养(xiūyǎng)。",
 exampleSrc:"A: His calligraphy has already reached a very high level.\nB: This requires many years of cultivation.",
 funFact:"境界 is a uniquely Chinese aesthetic concept. In art criticism, a painting with high 境界 transcends technique to capture the spirit of the subject. It suggests a state of mastery that goes beyond skill into something almost spiritual."},

{type:"teach", trg:"修养(xiūyǎng)", src:"cultivation / accomplishment", pos:"noun", gender:null,
 note:"修 = cultivate/repair, 养 = nourish/raise.\nPersonal refinement through education, practice, and moral effort.",
 example:"A: 一(yí)个(gè)人(rén)的(de)修养(xiūyǎng)不(bù)是(shì)天生(tiānshēng)的(de)。\nB: 对(duì)，需要(xūyào)不断(búduàn)学习(xuéxí)和(hé)反思(fǎnsī)。",
 exampleSrc:"A: A person's cultivation is not innate.\nB: Right, it requires constant learning and reflection.",
 funFact:"修养 is deeply valued in Chinese culture. A person of high 修养 is educated, well-mannered, morally upright, and emotionally composed. It is considered more important than wealth or status as a measure of character."},

{type:"teach", trg:"和谐(héxié)", src:"harmony / harmonious", pos:"adj", gender:null,
 note:"和 = peace/harmony, 谐 = in tune/harmonious.\nA central value in Chinese culture and philosophy.",
 example:"A: 和谐(héxié)的(de)社会(shèhuì)需要(xūyào)每(měi)个(gè)人(rén)的(de)努力(nǔlì)。\nB: 从(cóng)家庭(jiātíng)到(dào)社会(shèhuì)，和谐(héxié)都(dōu)很(hěn)重要(zhòngyào)。",
 exampleSrc:"A: A harmonious society requires everyone's effort.\nB: From family to society, harmony is very important.",
 funFact:"和谐 has been a political keyword in modern China. 'Harmonious society' (和谐社会) was a major government initiative. The concept traces back to Confucius, who taught that social harmony comes from each person fulfilling their proper role."},

{type:"teach", trg:"矛盾(máodùn)", src:"contradiction / conflicting", pos:"noun", gender:null,
 note:"矛 = spear, 盾 = shield.\nComes from a famous ancient fable about a paradox.",
 example:"A: 他(tā)的(de)话(huà)很(hěn)矛盾(máodùn)。\nB: 是(shì)的(de)，前后(qiánhòu)说(shuō)的(de)不(bù)一样(yíyàng)。",
 exampleSrc:"A: His words are very contradictory.\nB: Yes, what he said before and after is not the same.",
 funFact:"矛盾 comes from an ancient story: a merchant boasted his spear (矛) could pierce anything, then claimed his shield (盾) could block anything. A bystander asked: what happens if you use your spear against your shield? This paradox gave Chinese the word for contradiction."},

{type:"teach", trg:"辩证(biànzhèng)", src:"dialectical", pos:"adj", gender:null,
 note:"辩 = debate/argue, 证 = prove/evidence.\nSeeing both sides of an issue. Used in philosophy and logic.",
 example:"A: 我们(wǒmen)要(yào)辩证(biànzhèng)地(de)看(kàn)问题(wèntí)。\nB: 对(duì)，任何(rènhé)事情(shìqing)都(dōu)有(yǒu)两(liǎng)面(miàn)。",
 exampleSrc:"A: We should look at issues dialectically.\nB: Right, everything has two sides.",
 funFact:"辩证 thinking is central to Chinese philosophy. The yin-yang symbol itself represents dialectical thinking: opposing forces contain seeds of each other. This concept predates Western dialectics by centuries."},

{type:"mc", q:"矛盾(máodùn) literally refers to which two objects?",
 opts:["A spear and a shield","A sword and an arrow","A bow and a cup","A pen and a book"],
 ans:"A spear and a shield",
 hint:"This word comes from a fable about a merchant who made impossible claims about two weapons."},

{type:"match", pairs:[
  {trg:"道理(dàolǐ)", src:"principle/reason"},
  {trg:"命运(mìngyùn)", src:"fate/destiny"},
  {trg:"精神(jīngshén)", src:"spirit"},
  {trg:"境界(jìngjiè)", src:"realm/level"},
  {trg:"修养(xiūyǎng)", src:"cultivation"},
  {trg:"和谐(héxié)", src:"harmony"},
  {trg:"矛盾(máodùn)", src:"contradiction"}
]},

{type:"fb", s:"你(nǐ)说(shuō)的(de)很(hěn)有(yǒu){1}。",
 a:["道理(dàolǐ)"],
 opts:["道理(dàolǐ)","命运(mìngyùn)","精神(jīngshén)","修养(xiūyǎng)"],
 hint:"What word means 'reason' or 'sense'? This phrase means 'what you said makes sense.'",
 sSrc:"What you said makes a lot of {1}."},

{type:"mc", q:"和谐(héxié)的(de)社会(shèhuì)需要(xūyào)每(měi)个(gè)人(rén)的(de)努力(nǔlì)。 What is the message?",
 opts:["Philosophy is for scholars only","A harmonious society needs everyone's effort","Contradictions are unavoidable","Fate determines everything"],
 ans:"A harmonious society needs everyone's effort",
 hint:"和谐 means '___' and 需要 means '___.' What kind of ___ is being discussed?"},

{type:"fb", s:"我们(wǒmen)要(yào){1}地(de)看(kàn)问题(wèntí)。",
 a:["辩证(biànzhèng)"],
 opts:["辩证(biànzhèng)","矛盾(máodùn)","和谐(héxié)","修养(xiūyǎng)"],
 hint:"Which word means seeing both sides of an issue, related to dialectical thinking?",
 sSrc:"We should look at issues {1}."},

{type:"mc", q:"修养(xiūyǎng) refers to:",
 opts:["Political power and authority","Scientific knowledge and technology","Personal cultivation through learning and moral effort","Physical exercise and diet"],
 ans:"Personal cultivation through learning and moral effort",
 hint:"修 means 'to cultivate' and 养 means 'to nourish.' This is about refining oneself as a person."},

{type:"drag_fill",
 s:"他(tā)的(de)书法(shūfǎ)达到(dádào)了(le)很(hěn)高(gāo)的(de){1}，这(zhè)需要(xūyào)多年(duōnián)的(de){2}。",
 blanks:{"1":"境界(jìngjiè)","2":"修养(xiūyǎng)"},
 pool:["境界(jìngjiè)","修养(xiūyǎng)","矛盾(máodùn)","命运(mìngyùn)"],
 hint:"His calligraphy reached a high level of mastery through years of personal cultivation."}
]}

,

// ─── L3: Writing About Personal Significance ───
{id:"zhv2_u30l3", title:"个人意义(gèrén yìyì)", icon:"💭", xp:15, board:true, steps:[
{type:"intro", title:"Writing About Personal Significance",
 desc:"Learn to write about meaningful experiences, memories, and values in Mandarin. Essential for HSK 5 autobiographical writing and personal reflections.",
 goals:["Express what matters to you","Reflect on formative memories","Describe your personal values"]},

{type:"teach", trg:"意义(yìyì)", src:"meaning / significance", pos:"noun", gender:null,
 note:"意 = meaning/intention, 义 = righteousness/meaning.\nRefers to the deeper significance or purpose of something.",
 example:"A: 这(zhè)段(duàn)经历(jīnglì)对(duì)你(nǐ)有(yǒu)什么(shénme)意义(yìyì)？\nB: 它(tā)让(ràng)我(wǒ)明白(míngbai)了(le)什么(shénme)最(zuì)重要(zhòngyào)。",
 exampleSrc:"A: What significance does this experience hold for you?\nB: It made me understand what matters most.",
 funFact:"意义 combines two characters meaning 'intention' and 'principle.' The phrase 有意义 (yǒu yìyì) means 'meaningful' and is the opposite of 没意思 (méi yìsi, meaningless). Note that 意思 (yìsi, meaning/idea) and 意义 (yìyì, significance) are related but 意义 carries greater philosophical weight."},

{type:"teach", trg:"回忆(huíyì)", src:"memory / recollection", pos:"noun", gender:null,
 note:"回 = return, 忆 = remember.\nThe act of returning to a past memory. Can also be a verb: to recall.",
 example:"A: 这(zhè)段(duàn)经历(jīnglì)对(duì)你(nǐ)有(yǒu)什么(shénme)意义(yìyì)？\nB: 这(zhè)是(shì)我(wǒ)心(xīn)中(zhōng)最(zuì)重要(zhòngyào)的(de)回忆(huíyì)。",
 exampleSrc:"A: What significance does this experience hold for you?\nB: This is the most important memory in my heart.",
 funFact:"The verb 回忆 takes the meaning 'to look back' quite literally. 回 means 'to return,' so 回忆 is like mentally traveling back in time. The noun form means a memory or recollection. Compare 记忆(jìyì), which refers to memory as a cognitive ability or faculty."},

{type:"teach", trg:"情感(qínggǎn)", src:"emotion (formal) / sentiment", pos:"noun", gender:null,
 note:"情 = emotion/feeling, 感 = sense/feeling.\nA formal register word for emotion; more literary than 感觉(gǎnjué).",
 example:"A: 写(xiě)作(zuò)能(néng)帮助(bāngzhù)你(nǐ)表达(biǎodá)复杂(fùzá)的(de)情感(qínggǎn)。\nB: 是(shì)的(de)，有些(yǒuxiē)情感(qínggǎn)很难(hěn nán)用(yòng)语言(yǔyán)说(shuō)清楚(qīngchǔ)。",
 exampleSrc:"A: Writing can help you express complex emotions.\nB: Yes, some emotions are hard to put into words.",
 funFact:"情感 appears in formal writing, psychology, and literature. In everyday speech, Chinese people more often say 感情(gǎnqíng, affection/feelings between people) for interpersonal feelings, or 心情(xīnqíng, mood) for current emotional state. 情感 is the most literary and abstract of the three."},

{type:"teach", trg:"难忘(nánwàng)", src:"unforgettable", pos:"adj", gender:null,
 note:"难 = difficult, 忘 = to forget.\nLiterally: difficult to forget. Used before or after a noun.",
 example:"A: 那(nà)次(cì)旅行(lǚxíng)真(zhēn)的(de)很(hěn)难忘(nánwàng)。\nB: 是(shì)的(de)，这(zhè)段(duàn)经历(jīnglì)很(hěn)有(yǒu)意义(yìyì)，很(hěn)难忘(nánwàng)。",
 exampleSrc:"A: That trip was truly unforgettable.\nB: Yes, this experience is very meaningful and hard to forget.",
 funFact:"难忘 follows a productive Chinese pattern: 难 + verb = hard to do that action. So 难懂(nán dǒng) = hard to understand, 难学(nán xué) = hard to learn, 难忘(nánwàng) = hard to forget (unforgettable). This pattern lets you build new adjectives by combining 难 with any verb."},

{type:"teach", trg:"感动(gǎndòng)", src:"to be moved (emotionally) / touching", pos:"verb", gender:null,
 note:"感 = feel/sense, 动 = move.\nTo be emotionally moved by something. Can be used as adj: very touching.",
 example:"A: 他(tā)的(de)故事(gùshi)让(ràng)我(wǒ)非常(fēicháng)感动(gǎndòng)。\nB: 真(zhēn)正(zhèng)的(de)情感(qínggǎn)最(zuì)容易(róngyì)让(ràng)人(rén)感动(gǎndòng)。",
 exampleSrc:"A: His story moved me deeply.\nB: Genuine emotion is what most easily moves people.",
 funFact:"感动 can be both a verb (to move someone emotionally) and an adjective (touching/moving). 感动了我 means 'moved me.' 很感动 means 'very touched.' In Chinese culture, being openly moved (感动) is seen as a mark of depth and empathy, not weakness."},

{type:"teach", trg:"价值观(jiàzhíguān)", src:"value system / personal values", pos:"noun", gender:null,
 note:"价值(jiàzhí) = value + 观(guān) = outlook/view.\nExtended from 价值(jiàzhí) taught earlier. Refers to one's philosophical outlook on what matters.",
 example:"A: 你(nǐ)的(de)价值观(jiàzhíguān)是(shì)什么(shénme)？\nB: 我(wǒ)的(de)价值观(jiàzhíguān)受(shòu)了(le)家人(jiārén)很(hěn)大(dà)的(de)影响(yǐngxiǎng)。",
 exampleSrc:"A: What are your values?\nB: My values were greatly influenced by my family.",
 funFact:"In Chinese, 观 (outlook/view) is added to abstract nouns to form worldview compounds: 世界观(shìjièguān) = worldview, 人生观(rénshēngguān) = life outlook, 价值观(jiàzhíguān) = value system. This productive suffix turns a noun into a philosophical 'lens.' It is central vocabulary for HSK 5-6 autobiographical and opinion writing."},

{type:"teach", trg:"塑造(sùzào)", src:"to shape / to mold (metaphorically)", pos:"verb", gender:null,
 note:"塑 = sculpt/shape, 造 = create/build.\nLiterally: to sculpt and create. Used metaphorically for forming character or identity.",
 example:"A: 是(shì)什么(shénme)经历(jīnglì)塑造(sùzào)了(le)你(nǐ)？\nB: 难忘(nánwàng)的(de)回忆(huíyì)和(hé)真(zhēn)实(shí)的(de)情感(qínggǎn)塑造(sùzào)了(le)我(wǒ)的(de)价值观(jiàzhíguān)。",
 exampleSrc:"A: What experiences shaped you?\nB: Unforgettable memories and genuine emotions shaped my values.",
 funFact:"塑造 literally refers to sculpting or modeling clay. Its metaphorical use (shaping character, identity, culture) became standard in modern Chinese. The related noun 塑造力(sùzàolì) means 'shaping power.' You will also see 塑造形象(sùzào xíngxiàng), to construct an image or persona."},

{type:"tip", title:"Writing Personal Reflection in Chinese",
 text:"HSK 5-6 writing tasks often ask you to reflect on formative experiences. Three key patterns:\n\n1. Stating significance:\n对(duì)我(wǒ)来说(láishuō)，这(zhè)段(duàn)经历(jīnglì)非常(fēicháng)有(yǒu)意义(yìyì)。\n(For me, this experience is very meaningful.)\n\n2. Expressing emotional impact:\n这(zhè)件(jiàn)事(shì)让(ràng)我(wǒ)深深地(shēn shēn de)感动(gǎndòng)。\n(This thing moved me deeply.)\n\n3. Connecting memory to values:\n那(nà)段(duàn)难忘(nánwàng)的(de)回忆(huíyì)塑造(sùzào)了(le)我(wǒ)的(de)价值观(jiàzhíguān)。\n(That unforgettable memory shaped my values.)",
 deepDive:{title:"Emotional Vocabulary Register in Chinese",
  text:"Chinese has a rich hierarchy of emotion words:\n\nCasual: 开心(kāixīn) happy, 难过(nánguò) sad, 生气(shēngqì) angry\nFormal: 喜悦(xǐyuè) joy, 悲伤(bēishāng) grief, 愤怒(fènnù) rage\nLiterary: 情感(qínggǎn) emotion, 感慨(gǎnkǎi) sigh with emotion, 触动(chùdòng) touch the heart\n\nFor autobiographical writing and personal essays, the formal and literary registers signal maturity. Mixing registers (casual conversation + literary reflection) is natural in Chinese personal writing and does not sound inconsistent."}},

{type:"mc", q:"Which word means 'difficult to forget'?",
 opts:["难忘(nánwàng)","回忆(huíyì)","感动(gǎndòng)","塑造(sùzào)"],
 ans:"难忘(nánwàng)",
 hint:"Break down the characters: 难 means 'difficult' and 忘 means 'to forget.'"},

{type:"mc", q:"写(xiě)作(zuò)能(néng)帮助(bāngzhù)你(nǐ)表达(biǎodá)复杂(fùzá)的(de)___。 Which word completes the sentence?",
 opts:["塑造(sùzào)","情感(qínggǎn)","价值观(jiàzhíguān)","意义(yìyì)"],
 ans:"情感(qínggǎn)",
 hint:"The sentence means 'Writing can help you express complex ___.' Which word refers to emotions or sentiments in an elevated register?"},

{type:"fb", s:"那(nà)段(duàn){1}的(de)经历(jīnglì)对(duì)我(wǒ)来说(láishuō)很(hěn)有(yǒu)意义(yìyì)。",
 a:["难忘(nánwàng)"],
 opts:["难忘(nánwàng)","情感(qínggǎn)","塑造(sùzào)","回忆(huíyì)"],
 hint:"Which adjective means 'unforgettable'? The 难 + verb pattern means 'hard to do.'",
 sSrc:"That {1} experience is very meaningful to me."},

{type:"fb", s:"是(shì)什么(shénme)经历(jīnglì){1}了(le)你(nǐ)的(de)价值观(jiàzhíguān)？",
 a:["塑造(sùzào)"],
 opts:["塑造(sùzào)","感动(gǎndòng)","回忆(huíyì)","情感(qínggǎn)"],
 hint:"Which verb means 'to shape or mold'? Think of sculpting something from clay.",
 sSrc:"What experiences {1} your value system?"},

{type:"match", pairs:[
  {trg:"意义(yìyì)", src:"meaning/significance"},
  {trg:"回忆(huíyì)", src:"memory/recollection"},
  {trg:"难忘(nánwàng)", src:"unforgettable"},
  {trg:"感动(gǎndòng)", src:"to be moved emotionally"},
  {trg:"价值观(jiàzhíguān)", src:"value system/personal values"},
  {trg:"塑造(sùzào)", src:"to shape/mold"}
]},

{type:"fb", s:"他(tā)的(de)故事(gùshi)让(ràng)我(wǒ)非常(fēicháng){1}。",
 a:["感动(gǎndòng)"],
 opts:["感动(gǎndòng)","难忘(nánwàng)","塑造(sùzào)","意义(yìyì)"],
 hint:"Which word means 'to be moved emotionally'? His story triggered this feeling in me.",
 sSrc:"His story {1} me deeply."},

{type:"mc", q:"价值观(jiàzhíguān) extends which word taught in Lesson 1 of this unit?",
 opts:["道(dào)","智慧(zhìhuì)","价值(jiàzhí)","哲学(zhéxué)"],
 ans:"价值(jiàzhí)",
 hint:"The suffix 观(guān) meaning 'outlook' is added to a word meaning 'value' that you already learned."}
]}

]};

export default UNIT_30;
