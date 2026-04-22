// Unit 31: History and Heritage
// Level: B2.2 (HSK 4)
// Chinese (Mandarin) V2 format with hanzi+pinyin notation

const UNIT_31 = {
n:31, lang:"zh", srcLang:"en", track:"v2",
title:"历史长河 The River of History", sub:"Chinese History",
icon:"🏛️", level:"B2.2", color:"#7B5EE8",
lessons:[

// ─── L1: Dynasties and Eras ───
{id:"zhv2_u31l1", title:"朝代更替 Dynastic Change", icon:"👑", xp:15, board:true, steps:[
{type:"intro", title:"朝代更替 Dynastic Change",
 desc:"Learn to discuss Chinese history, dynasties, and the cycles of war and peace. These words appear constantly in Chinese literature, media, and everyday references.",
 goals:["Discuss history and dynasties with 历史, 朝代, and 皇帝","Talk about war and peace with 战争 and 和平","Distinguish 古代 from 现代"]},

{type:"teach", trg:"历史(lìshǐ)", src:"history", pos:"noun", gender:null,
 note:"历 = experience/go through, 史 = history/records.\nBoth the subject and the events themselves.",
 example:"A: 中国(Zhōngguó)有(yǒu)五千(wǔqiān)年(nián)的(de)历史(lìshǐ)。\nB: 是(shì)世界(shìjiè)上(shàng)历史(lìshǐ)最(zuì)悠久(yōujiǔ)的(de)文明(wénmíng)之一(zhīyī)。",
 exampleSrc:"A: China has five thousand years of history.\nB: It is one of the oldest civilizations in the world.",
 funFact:"The character 史 depicts a hand holding a container. Ancient historians were scribes who recorded events. The first great historian of China, Sima Qian, wrote his Records of the Grand Historian (史记) around 100 BC, covering 2,000 years."},

{type:"teach", trg:"朝代(cháodài)", src:"dynasty", pos:"noun", gender:null,
 note:"朝 = dynasty/morning/court, 代 = generation/era.\nA ruling period of one imperial family.",
 example:"A: 你(nǐ)知道(zhīdào)中国(Zhōngguó)有(yǒu)多少(duōshao)个(gè)朝代(cháodài)吗(ma)？\nB: 从(cóng)夏朝(Xiàcháo)到(dào)清朝(Qīngcháo)，大约(dàyuē)有(yǒu)二十(èrshí)多(duō)个(gè)。",
 exampleSrc:"A: Do you know how many dynasties China has had?\nB: From the Xia to the Qing, about twenty or more.",
 funFact:"Chinese schoolchildren memorize a dynasty song listing all major dynasties in order. It begins: 夏商周，秦汉三国... (Xia, Shang, Zhou, Qin, Han, Three Kingdoms...). This song is one of the first things children learn about history."},

{type:"teach", trg:"皇帝(huángdì)", src:"emperor", pos:"noun", gender:null,
 note:"皇 = august/imperial, 帝 = sovereign/emperor.\nThe supreme ruler of imperial China.",
 example:"A: 中国(Zhōngguó)第一(dìyī)个(gè)皇帝(huángdì)是(shì)谁(shéi)？\nB: 是(shì)秦始皇(Qínshǐhuáng)，他(tā)统一(tǒngyī)了(le)中国(Zhōngguó)。",
 exampleSrc:"A: Who was China's first emperor?\nB: It was Qin Shi Huang, he unified China.",
 funFact:"Before Qin Shi Huang, rulers used the title 王(wáng), king. He combined 皇 (from the legendary sage kings) with 帝 (from the ancient deity kings) to create a title grander than any before: 皇帝, emperor. Every ruler after him used this title until 1912."},

{type:"teach", trg:"战争(zhànzhēng)", src:"war", pos:"noun", gender:null,
 note:"战 = battle/fight, 争 = contend/struggle.\nArmed conflict between nations or groups.",
 example:"A: 战争(zhànzhēng)给(gěi)人民(rénmín)带来(dàilái)了(le)很(hěn)大(dà)的(de)痛苦(tòngkǔ)。\nB: 所以(suǒyǐ)和平(hépíng)非常(fēicháng)珍贵(zhēnguì)。",
 exampleSrc:"A: War brought great suffering to the people.\nB: So peace is extremely precious.",
 funFact:"China's most famous military text, The Art of War (孙子兵法) by Sun Tzu, paradoxically teaches that the best victory is one won without fighting. This reflects deep Chinese ambivalence about warfare."},

{type:"teach", trg:"和平(hépíng)", src:"peace", pos:"noun", gender:null,
 note:"和 = harmony, 平 = level/calm.\nThe absence of war, or a state of calm and stability.",
 example:"A: 我们(wǒmen)都(dōu)希望(xīwàng)世界(shìjiè)和平(hépíng)。\nB: 和平(hépíng)需要(xūyào)各(gè)国(guó)共同(gòngtóng)努力(nǔlì)。",
 exampleSrc:"A: We all hope for world peace.\nB: Peace requires the joint effort of all nations.",
 funFact:"和 is one of the most loaded characters in Chinese culture. It appears in 和谐 (harmony), 和气 (amiable), 和平 (peace), and even 中华 (China). The ideal state in Chinese philosophy is always some form of 和."},

{type:"teach", trg:"古代(gǔdài)", src:"ancient times", pos:"noun", gender:null,
 note:"古 = old/ancient, 代 = era/generation.\nRefers to the historical period before modern times.",
 example:"A: 古代(gǔdài)中国(Zhōngguó)有(yǒu)很(hěn)多(duō)伟大(wěidà)的(de)发明(fāmíng)。\nB: 比如(bǐrú)造纸术(zàozhǐshù)、印刷术(yìnshuāshù)、火药(huǒyào)和(hé)指南针(zhǐnánzhēn)。",
 exampleSrc:"A: Ancient China had many great inventions.\nB: Such as papermaking, printing, gunpowder, and the compass.",
 funFact:"The Four Great Inventions (四大发明) are a source of immense cultural pride. Papermaking, printing, gunpowder, and the compass all originated in China centuries before they appeared in Europe. They fundamentally changed the course of world history."},

{type:"teach", trg:"现代(xiàndài)", src:"modern (times)", pos:"noun", gender:null,
 note:"现 = present/current, 代 = era/generation.\nThe modern period, typically from the early 1900s onward.",
 example:"A: 现代(xiàndài)中国(Zhōngguó)发展(fāzhǎn)得(de)很(hěn)快(kuài)。\nB: 特别(tèbié)是(shì)最近(zuìjìn)四十(sìshí)年(nián)的(de)变化(biànhuà)。",
 exampleSrc:"A: Modern China has developed very rapidly.\nB: Especially the changes of the last forty years.",
 funFact:"古代 and 现代 form a natural pair, with 近代(jìndài) 'recent times' in between. In Chinese historiography, 近代 specifically covers roughly 1840 to 1949, a period of dramatic upheaval."},

{type:"tip", title:"Timeline of Chinese History",
 text:"Key periods to know:\n\n古代(gǔdài) Ancient: ~2100 BC to 1840 AD\nIncluding all imperial dynasties.\n\n近代(jìndài) Recent: 1840 to 1949\nOpium Wars through civil war.\n\n现代(xiàndài) Modern: 1949 to present\nPeople's Republic era.\n\nMajor dynasties in order:\n秦(Qín) > 汉(Hàn) > 唐(Táng) > 宋(Sòng) > 元(Yuán) > 明(Míng) > 清(Qīng)\n\nThe Tang dynasty is often considered China's golden age.",
 deepDive:{title:"Why Dynasties Matter Today",
  text:"Dynasties are not just history in China. They are cultural reference points. When someone says 唐诗 (Tang poetry) or 宋词 (Song lyrics), they evoke entire aesthetic traditions. When someone mentions 清朝 (Qing dynasty), associations of both grandeur and decline come to mind.\n\nDynastic names also appear in daily life: 汉字 (Han characters, meaning Chinese characters), 唐人街 (Tang person street, meaning Chinatown), 宋体 (Song typeface, a common font). History is woven into the language itself."}},

{type:"mc", q:"中国(Zhōngguó)第一(dìyī)个(gè)皇帝(huángdì)是(shì)谁(shéi)？",
 opts:["秦始皇(Qínshǐhuáng)","孔子(Kǒngzǐ)","唐太宗(Tángtàizōng)","汉武帝(Hànwǔdì)"],
 ans:"秦始皇(Qínshǐhuáng)",
 hint:"This ruler created the title 皇帝 itself and was the first to unify China under one empire."},

{type:"match", pairs:[
  {trg:"历史(lìshǐ)", src:"history"},
  {trg:"朝代(cháodài)", src:"dynasty"},
  {trg:"皇帝(huángdì)", src:"emperor"},
  {trg:"战争(zhànzhēng)", src:"war"},
  {trg:"和平(hépíng)", src:"peace"},
  {trg:"古代(gǔdài)", src:"ancient times"},
  {trg:"现代(xiàndài)", src:"modern"}
]},

{type:"fb", s:"中国(Zhōngguó)有(yǒu)五千(wǔqiān)年(nián)的(de){1}。",
 a:["历史(lìshǐ)"],
 opts:["历史(lìshǐ)","朝代(cháodài)","战争(zhànzhēng)","和平(hépíng)"],
 hint:"What word means 'history,' referring to the recorded past of a civilization?",
 sSrc:"China has five thousand years of {1}."},

{type:"mc", q:"古代(gǔdài) and 现代(xiàndài) are opposites. What divides them?",
 opts:["They refer to the same time period","The character 代 means 'era'; 古 means 'old' and 现 means 'present'","They use different tones","One is a verb and one is a noun"],
 ans:"The character 代 means 'era'; 古 means 'old' and 现 means 'present'",
 hint:"Both words share 代 (___/gen___tion). The first ___ tells you WHICH ___."},

{type:"fb", s:"{1}给(gěi)人民(rénmín)带来(dàilái)了(le)很(hěn)大(dà)的(de)痛苦(tòngkǔ)。",
 a:["战争(zhànzhēng)"],
 opts:["战争(zhànzhēng)","和平(hépíng)","朝代(cháodài)","皇帝(huángdì)"],
 hint:"Which word refers to armed conflict that causes suffering?",
 sSrc:"{1} brought great suffering to the people."}
]},

// ─── L2: Influence and Legacy ───
{id:"zhv2_u31l2", title:"影响与遗产 Influence and Legacy", icon:"🌟", xp:15, board:true, steps:[
{type:"intro", title:"影响与遗产 Influence and Legacy",
 desc:"Learn to discuss historical influence, cultural heritage, and the processes of reform and revolution. These words connect past events to the present.",
 goals:["Discuss influence and civilization with 影响 and 文明","Talk about heritage and reform with 遗产, 改革, and 革命","Use 统一, 独立, and 纪念 in historical context"]},

{type:"teach", trg:"影响(yǐngxiǎng)", src:"influence / to influence", pos:"noun", gender:null,
 note:"影 = shadow/image, 响 = sound/echo.\nBoth visible and audible effects. Used as noun and verb.",
 example:"A: 唐朝(Tángcháo)对(duì)日本(Rìběn)文化(wénhuà)有(yǒu)很(hěn)大(dà)的(de)影响(yǐngxiǎng)。\nB: 日语(Rìyǔ)中(zhōng)还(hái)保留(bǎoliú)了(le)很(hěn)多(duō)汉字(Hànzì)。",
 exampleSrc:"A: The Tang dynasty had a great influence on Japanese culture.\nB: Japanese still retains many Chinese characters.",
 funFact:"影 (shadow) and 响 (echo) together create 'influence': the shadow something casts and the echo it leaves. This poetic image captures how influence works both visibly and invisibly."},

{type:"teach", trg:"文明(wénmíng)", src:"civilization / civilized", pos:"noun", gender:null,
 note:"文 = culture/writing, 明 = bright/clear.\nBoth a noun (civilization) and adjective (civilized).",
 example:"A: 中华(Zhōnghuá)文明(wénmíng)是(shì)世界(shìjiè)上(shàng)最(zuì)古老(gǔlǎo)的(de)文明(wénmíng)之一(zhīyī)。\nB: 而且(érqiě)从未(cóngwèi)中断(zhōngduàn)过(guò)。",
 exampleSrc:"A: Chinese civilization is one of the oldest in the world.\nB: And it has never been interrupted.",
 funFact:"Chinese civilization is unique among the world's ancient civilizations in being the only one with an unbroken continuity. Egyptian, Mesopotamian, and Indus civilizations all had periods of discontinuity. Chinese cultural tradition has persisted for over 5,000 years."},

{type:"teach", trg:"遗产(yíchǎn)", src:"heritage / legacy", pos:"noun", gender:null,
 note:"遗 = leave behind, 产 = property/produce.\nCultural or material things passed down from the past.",
 example:"A: 长城(Chángchéng)是(shì)重要(zhòngyào)的(de)文化(wénhuà)遗产(yíchǎn)。\nB: 它(tā)已经(yǐjīng)被(bèi)列入(lièrù)世界(shìjiè)遗产(yíchǎn)名录(mínglù)。",
 exampleSrc:"A: The Great Wall is an important cultural heritage.\nB: It has been listed as a World Heritage site.",
 funFact:"China has the world's largest number of UNESCO World Heritage sites alongside Italy. From the Great Wall to the Forbidden City to the Terracotta Warriors, these 遗产 sites attract millions of visitors and represent millennia of civilization."},

{type:"teach", trg:"革命(gémìng)", src:"revolution", pos:"noun", gender:null,
 note:"革 = change/reform, 命 = fate/mandate.\nA fundamental change in political or social systems.",
 example:"A: 辛亥革命(Xīnhài Gémìng)结束(jiéshù)了(le)两千(liǎngqiān)多(duō)年(nián)的(de)帝制(dìzhì)。\nB: 那(nà)是(shì)1911年(nián)的(de)事(shì)。",
 exampleSrc:"A: The Xinhai Revolution ended over two thousand years of imperial rule.\nB: That was in 1911.",
 funFact:"革命 literally means 'change the mandate.' In Chinese philosophy, the 天命 (Mandate of Heaven) gave rulers their authority. When a ruler failed, heaven withdrew its mandate, justifying revolution. This ancient concept legitimized dynastic change for thousands of years."},

{type:"teach", trg:"改革(gǎigé)", src:"reform", pos:"noun", gender:null,
 note:"改 = change/correct, 革 = reform/leather.\nGradual change within a system, not overthrow.",
 example:"A: 改革(gǎigé)开放(kāifàng)改变(gǎibiàn)了(le)中国(Zhōngguó)。\nB: 是(shì)的(de)，经济(jīngjì)发展(fāzhǎn)非常(fēicháng)迅速(xùnsù)。",
 exampleSrc:"A: Reform and Opening Up changed China.\nB: Yes, economic development was extremely rapid.",
 funFact:"改革开放 (Reform and Opening Up), initiated in 1978, is perhaps the most referenced historical event in modern China. It transformed China from a planned economy to the world's second-largest economy in just a few decades."},

{type:"teach", trg:"统一(tǒngyī)", src:"unification / to unify", pos:"verb", gender:null,
 note:"统 = system/govern, 一 = one.\nBringing separate parts under one rule or system.",
 example:"A: 秦始皇(Qínshǐhuáng)统一(tǒngyī)了(le)中国(Zhōngguó)。\nB: 他(tā)还(hái)统一(tǒngyī)了(le)文字(wénzì)和(hé)度量衡(dùliànghéng)。",
 exampleSrc:"A: Qin Shi Huang unified China.\nB: He also unified the writing system and weights and measures.",
 funFact:"Qin Shi Huang did not just unite territory. He standardized Chinese writing, currency, weights, measures, and even the width of cart axles. These standardizations are why China maintained cultural unity across vast distances."},

{type:"teach", trg:"独立(dúlì)", src:"independence / independent", pos:"adj", gender:null,
 note:"独 = alone/single, 立 = stand.\nLiterally: to stand alone. Self-governing or self-reliant.",
 example:"A: 很(hěn)多(duō)国家(guójiā)在(zài)二十(èrshí)世纪(shìjì)获得(huòdé)了(le)独立(dúlì)。\nB: 独立(dúlì)是(shì)每(měi)个(gè)民族(mínzú)的(de)权利(quánlì)。",
 exampleSrc:"A: Many countries gained independence in the twentieth century.\nB: Independence is the right of every nation.",
 funFact:"独立 literally means 'stand alone.' The image is of standing on your own two feet without leaning on anyone. Beyond politics, 独立 also describes personal independence: 经济独立 (financially independent) is a major life goal for young Chinese adults."},

{type:"teach", trg:"纪念(jìniàn)", src:"to commemorate / memorial", pos:"verb", gender:null,
 note:"纪 = record/era, 念 = think of/remember.\nTo remember and honor past events or people.",
 example:"A: 每(měi)年(nián)十月(shíyuè)一(yī)号(hào)是(shì)国庆(guóqìng)纪念(jìniàn)日(rì)。\nB: 人们(rénmen)用(yòng)各种(gèzhǒng)方式(fāngshì)纪念(jìniàn)这(zhè)个(gè)日子(rìzi)。",
 exampleSrc:"A: October 1st every year is National Day.\nB: People commemorate this day in various ways.",
 funFact:"China has many 纪念日 (memorial days) linked to historical events. Tomb Sweeping Day (清明节) is perhaps the most personal, when families visit ancestral graves to honor and remember those who came before them."},

{type:"mc", q:"革命(gémìng) literally means 'change the ____.'",
 opts:["mandate","law","leader","army"],
 ans:"mandate",
 hint:"命 can mean 'fate' or '___.' In Chinese philosophy, the ___ of Heaven gave rulers authority."},

{type:"match", pairs:[
  {trg:"影响(yǐngxiǎng)", src:"influence"},
  {trg:"文明(wénmíng)", src:"civilization"},
  {trg:"遗产(yíchǎn)", src:"heritage"},
  {trg:"革命(gémìng)", src:"revolution"},
  {trg:"改革(gǎigé)", src:"reform"},
  {trg:"统一(tǒngyī)", src:"unification"},
  {trg:"独立(dúlì)", src:"independence"},
  {trg:"纪念(jìniàn)", src:"to commemorate"}
]},

{type:"fb", s:"长城(Chángchéng)是(shì)重要(zhòngyào)的(de)文化(wénhuà){1}。",
 a:["遗产(yíchǎn)"],
 opts:["遗产(yíchǎn)","文明(wénmíng)","影响(yǐngxiǎng)","历史(lìshǐ)"],
 hint:"What word means something valuable passed down from the past, like a cultural treasure?",
 sSrc:"The Great Wall is an important cultural {1}."},

{type:"mc", q:"改革(gǎigé) and 革命(gémìng) both contain 革. How do they differ?",
 opts:["改革 applies only to economics","改革 is gradual change within a system; 革命 is fundamental overthrow","They mean exactly the same thing","改革 is violent and 革命 is peaceful"],
 ans:"改革 is gradual change within a system; 革命 is fundamental overthrow",
 hint:"改 means 'correct/adjust' while 命 means 'mandate/fate.' One corrects ___ the ___, the other changes it entirely."},

{type:"fb", s:"秦始皇(Qínshǐhuáng){1}了(le)中国(Zhōngguó)。",
 a:["统一(tǒngyī)"],
 opts:["统一(tǒngyī)","独立(dúlì)","革命(gémìng)","纪念(jìniàn)"],
 hint:"What did the first emperor do to the separate warring states? He brought them all under one rule.",
 sSrc:"Qin Shi Huang {1} China."},

{type:"drag_fill",
 s:"唐朝(Tángcháo)对(duì)日本(Rìběn)文化(wénhuà)有(yǒu)很(hěn)大(dà)的(de){1}，是(shì)中华(Zhōnghuá){2}的(de)辉煌(huīhuáng)时期(shíqī)。",
 blanks:{"1":"影响(yǐngxiǎng)","2":"文明(wénmíng)"},
 pool:["影响(yǐngxiǎng)","文明(wénmíng)","遗产(yíchǎn)","改革(gǎigé)"],
 hint:"The Tang dynasty had a great effect on Japanese culture and was a brilliant period of Chinese civilization."}
]}

]};

export default UNIT_31;
