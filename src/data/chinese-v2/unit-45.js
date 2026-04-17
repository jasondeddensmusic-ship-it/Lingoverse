// Unit 45: Global Perspective
// Level: B2.2 (HSK 4)
// Chinese (Mandarin) V2 format with hanzi+pinyin notation

const UNIT_45 = {
n:45, lang:"zh", srcLang:"en", track:"v2",
title:"世界视野 Global Perspective", sub:"International Affairs",
icon:"🌐", level:"B2.2", color:"#7B5EE8",
lessons:[

// ─── L1: Nations and Peoples ───
{id:"zhv2_u45l1", title:"Nations and Peoples", icon:"🕊️", xp:15, board:true, steps:[
{type:"intro", title:"Nations and Peoples",
 desc:"Engage with global affairs in Chinese. Learn the vocabulary to discuss countries, peoples, and the shared humanity that connects us all.",
 goals:["Discuss nations and peoples","Talk about humanity","Use international vocabulary"]},

{type:"teach", trg:"国家(guójiā)", src:"country / nation", pos:"noun", gender:null,
 note:"国 (country) + 家 (home/family).\nCountry-family. The nation as extended family.",
 example:"A: 每(měi)个(gè)国家(guójiā)都(dōu)有(yǒu)自己(zìjǐ)的(de)文化(wénhuà)。\nB: 这(zhè)就(jiù)是(shì)世界(shìjiè)的(de)美(měi)丽(lì)。",
 exampleSrc:"A: Every country has its own culture.\nB: That is the beauty of the world.",
 funFact:"The word 国家 elegantly captures a Confucian idea: the country is the extended family (国 + 家). Classical Chinese political thought saw the state as a larger household, with the ruler as father. The compound word preserves this philosophy."},

{type:"teach", trg:"民族(mínzú)", src:"ethnicity / ethnic group / nation (people)", pos:"noun", gender:null,
 note:"民 (people) + 族 (clan/tribe).\nA people-group. Cultural and ethnic sense.",
 example:"A: 中国(Zhōngguó)有(yǒu)五十六(wǔshíliù)个(gè)民族(mínzú)。\nB: 每(měi)个(gè)民族(mínzú)都(dōu)有(yǒu)独特(dútè)的(de)传统(chuántǒng)。",
 exampleSrc:"A: China has 56 ethnic groups.\nB: Each ethnic group has unique traditions.",
 funFact:"民族 can mean both 'ethnic group' and 'nation of people.' 中华民族 is a concept referring to all Chinese peoples as one large nation. The 民族 framework is central to how China formally describes its domestic diversity."},

{type:"teach", trg:"人类(rénlèi)", src:"humanity / humankind", pos:"noun", gender:null,
 note:"人 (person/human) + 类 (kind/category).\nThe human kind. Collective humanity.",
 example:"A: 这(zhè)是(shì)人类(rénlèi)共同(gòngtóng)面临(miànlín)的(de)挑战(tiǎozhàn)。\nB: 所以(suǒyǐ)我们(wǒmen)要(yào)合作(hézuò)。",
 exampleSrc:"A: This is a challenge humanity faces together.\nB: So we need to cooperate.",
 funFact:"人类 is often used in discussions of existential issues: 人类文明 (human civilization), 人类历史 (human history), 人类命运共同体 (community of shared human destiny — a phrase central to contemporary Chinese diplomacy)."},

{type:"teach", trg:"和平(hépíng)", src:"peace", pos:"noun", gender:null,
 note:"和 (harmony) + 平 (flat/peaceful).\nHarmony and calm. Both noun and adjective.",
 example:"A: 世界(shìjiè)和平(hépíng)是(shì)我们(wǒmen)共同(gòngtóng)的(de)愿望(yuànwàng)。\nB: 希望(xīwàng)所有(suǒyǒu)冲突(chōngtū)都(dōu)能(néng)结束(jiéshù)。",
 exampleSrc:"A: World peace is our shared wish.\nB: I hope all conflicts can end.",
 funFact:"和 is one of the most culturally loaded characters in Chinese: it means harmony, peace, and cooperation. 以和为贵 ('harmony is most precious') is a proverb that captures Chinese preference for consensus over confrontation."},

{type:"teach", trg:"冲突(chōngtū)", src:"conflict", pos:"noun", gender:null,
 note:"冲 (charge/rush) + 突 (sudden/break through).\nRushing collision. Used for wars, arguments, or clashes.",
 example:"A: 两(liǎng)个(gè)国家(guójiā)之间(zhījiān)有(yǒu)文化(wénhuà)冲突(chōngtū)。\nB: 我们(wǒmen)需要(xūyào)更(gèng)多(duō)的(de)交流(jiāoliú)。",
 exampleSrc:"A: There is cultural conflict between the two countries.\nB: We need more exchange.",
 funFact:"冲突 covers conflicts at many scales: armed war, workplace disputes, cultural clashes, even scheduling conflicts (时间冲突). The imagery of 'rushing collision' is vivid — two forces suddenly meeting with impact."},

{type:"teach", trg:"交流(jiāoliú)", src:"exchange / communication (cultural)", pos:"verb", gender:null,
 note:"交 (exchange) + 流 (flow).\nFlowing exchange. For ideas, cultures, experiences.",
 example:"A: 文化(wénhuà)交流(jiāoliú)非常(fēicháng)重要(zhòngyào)。\nB: 对(duì)，可以(kěyǐ)帮助(bāngzhù)我们(wǒmen)互相(hùxiāng)理解(lǐjiě)。",
 exampleSrc:"A: Cultural exchange is very important.\nB: Yes, it helps us understand each other.",
 funFact:"交流 is broader than just 'talk.' It implies mutual exchange of substance: ideas, culture, experience. A 学术交流 (academic exchange) or 文化交流 (cultural exchange) is a structured two-way flow, not just conversation."},

{type:"mc", q:"国家(guójiā) literally combines 'country' with which character?",
 opts:["government","people","home/family","territory"],
 ans:"home/family",
 hint:"The second character also means '___.' The word frames the nation as extended ___."},

{type:"mc", q:"人类(rénlèi) means:",
 opts:["people everywhere","humanity / humankind","our species","life forms"],
 ans:"humanity / humankind",
 hint:"The word refers to all humans collectively, as a category."},

{type:"fb", s:"我(wǒ)们(men)希望(xīwàng)世界(shìjiè){1}，没(méi)有(yǒu)战争(zhànzhēng)。",
 a:["和平(hépíng)"],
 opts:["和平(hépíng)","冲突(chōngtū)","交流(jiāoliú)","民族(mínzú)"],
 hint:"The noun for peace. 和 (harmony) + 平 (calm).",
 sSrc:"We hope for world {1}, with no war."},

{type:"match", pairs:[
  {trg:"国家(guójiā)", src:"country / nation"},
  {trg:"民族(mínzú)", src:"ethnicity"},
  {trg:"人类(rénlèi)", src:"humanity"},
  {trg:"和平(hépíng)", src:"peace"},
  {trg:"冲突(chōngtū)", src:"conflict"},
  {trg:"交流(jiāoliú)", src:"exchange"}
]}

]},

// ─── L2: Wealth and Inequality ───
{id:"zhv2_u45l2", title:"Wealth and Inequality", icon:"⚖️", xp:15, board:true, steps:[
{type:"intro", title:"Wealth and Inequality",
 desc:"Economic disparity shapes the modern world. Learn to discuss wealth, poverty, and the gaps between societies and individuals.",
 goals:["Discuss poverty and wealth","Talk about inequality","Describe development levels"]},

{type:"teach", trg:"贫困(pínkùn)", src:"poverty / impoverished", pos:"noun", gender:null,
 note:"贫 (poor) + 困 (trapped/difficulty).\nPoverty that traps.",
 example:"A: 这(zhè)个(gè)地区(dìqū)的(de)贫困(pínkùn)问题(wèntí)很(hěn)严重(yánzhòng)。\nB: 政府(zhèngfǔ)在(zài)推动(tuīdòng)扶贫(fúpín)工作(gōngzuò)。",
 exampleSrc:"A: The poverty problem in this region is very serious.\nB: The government is promoting poverty alleviation work.",
 funFact:"贫困 has strong development connotations. 脱贫 (escape poverty) and 扶贫 (support out of poverty) are central policy terms in modern China, where rural poverty reduction has been a major national campaign."},

{type:"teach", trg:"富裕(fùyù)", src:"wealth / prosperous / affluent", pos:"adj", gender:null,
 note:"富 (rich) + 裕 (abundant).\nDouble emphasis on affluence.",
 example:"A: 这(zhè)个(gè)家庭(jiātíng)很(hěn)富裕(fùyù)。\nB: 但是(dànshì)他们(tāmen)很(hěn)低调(dīdiào)，不(bù)显摆(xiǎnbai)。",
 exampleSrc:"A: This family is very affluent.\nB: But they are very understated and do not show off.",
 funFact:"Traditional Confucian values encouraged 富而好礼 (wealthy and courteous): becoming rich is acceptable, but only if paired with modesty and proper behavior. Modern Chinese culture still admires understated wealth more than flashy displays."},

{type:"teach", trg:"差距(chājù)", src:"gap / disparity", pos:"noun", gender:null,
 note:"差 (difference) + 距 (distance).\nA difference-distance. For wealth, skills, or abilities.",
 example:"A: 贫富(pínfù)差距(chājù)越(yuè)来(lái)越(yuè)大(dà)。\nB: 这(zhè)是(shì)一(yí)个(gè)全球(quánqiú)性(xìng)的(de)问题(wèntí)。",
 exampleSrc:"A: The wealth gap is getting bigger and bigger.\nB: This is a global issue.",
 funFact:"差距 is used broadly: 贫富差距 (wealth gap), 城乡差距 (urban-rural gap), 发展差距 (development gap). The word always implies a measurable, sometimes problematic difference between two groups or situations."},

{type:"teach", trg:"发达(fādá)", src:"developed", pos:"adj", gender:null,
 note:"发 (develop) + 达 (reach).\nDeveloped and arrived. For countries, economies, technology.",
 example:"A: 日本(Rìběn)是(shì)一(yí)个(gè)发达(fādá)国家(guójiā)。\nB: 是(shì)的(de)，经济(jīngjì)和(hé)科技(kējì)都(dōu)很(hěn)先进(xiānjìn)。",
 exampleSrc:"A: Japan is a developed country.\nB: Yes, both economy and technology are advanced.",
 funFact:"发达国家 (developed country) versus 发展中国家 (developing country) is the standard Chinese translation of the OECD framework. The contrast 发达 vs 发展中 captures 'arrived' versus 'still traveling' — an elegant translation philosophy."},

{type:"teach", trg:"不平等(bùpíngděng)", src:"inequality", pos:"noun", gender:null,
 note:"不 (not) + 平 (flat/equal) + 等 (equal/degree).\nNot-equal-equal. Triple emphasis on inequality.",
 example:"A: 我(wǒ)们(men)要(yào)消除(xiāochú)社会(shèhuì)不平等(bùpíngděng)。\nB: 这(zhè)是(shì)一(yí)个(gè)长期(chángqī)的(de)任务(rènwu)。",
 exampleSrc:"A: We must eliminate social inequality.\nB: This is a long-term task.",
 funFact:"平等 (equality) is one of the core values in modern Chinese political language, appearing in both socialist and constitutional contexts. Its negation 不平等 (inequality) frames everything from economic disparity to gender issues."},

{type:"teach", trg:"援助(yuánzhù)", src:"aid / assistance", pos:"noun", gender:null,
 note:"援 (help/aid) + 助 (assist).\nDouble word for aid. Often international.",
 example:"A: 他(tā)们(men)需要(xūyào)国际(guójì)援助(yuánzhù)。\nB: 我(wǒ)们(men)应该(yīnggāi)伸出(shēnchū)援手(yuánshǒu)。",
 exampleSrc:"A: They need international aid.\nB: We should lend a hand.",
 funFact:"援助 is the formal term used in diplomatic contexts: 对外援助 (foreign aid), 人道主义援助 (humanitarian aid). Everyday helping uses 帮助 instead. The formality tells you immediately whether the context is casual or institutional."},

{type:"mc", q:"不平等(bùpíngděng) contains how many characters emphasizing 'equal / not equal'?",
 opts:["one","two","three","four"],
 ans:"three",
 hint:"Each character contributes to the meaning. 不 (not) + 平 (flat/equal) + 等 (equal)."},

{type:"mc", q:"发达国家 refers to:",
 opts:["developing countries","developed countries","rich countries","Asian countries"],
 ans:"developed countries",
 hint:"发达 itself means '___' or 'advanced.' The opposite is 发展中 (developing)."},

{type:"fb", s:"贫富(pínfù){1}是(shì)许多(xǔduō)国家(guójiā)面临(miànlín)的(de)问题(wèntí)。",
 a:["差距(chājù)"],
 opts:["差距(chājù)","援助(yuánzhù)","冲突(chōngtū)","和平(hépíng)"],
 hint:"The noun for gap or disparity. 差 (difference) + 距 (distance).",
 sSrc:"The wealth {1} is an issue faced by many countries."},

{type:"match", pairs:[
  {trg:"贫困(pínkùn)", src:"poverty"},
  {trg:"富裕(fùyù)", src:"wealth / affluent"},
  {trg:"差距(chājù)", src:"gap / disparity"},
  {trg:"发达(fādá)", src:"developed"},
  {trg:"不平等(bùpíngděng)", src:"inequality"},
  {trg:"援助(yuánzhù)", src:"aid"}
]}

]},

// ─── L3: Values and Cooperation ───
{id:"zhv2_u45l3", title:"Values and Cooperation", icon:"🤝", xp:15, board:true, steps:[
{type:"intro", title:"Values and Cooperation",
 desc:"The final lesson of this course focuses on shared values. Learn vocabulary for global cooperation, diversity, and the principles that guide us forward.",
 goals:["Discuss values and cooperation","Embrace diversity","Complete your B2 journey"]},

{type:"teach", trg:"合作(hézuò)", src:"cooperation / to cooperate", pos:"noun", gender:null,
 note:"合 (together) + 作 (do/make).\nWorking together. For countries, companies, individuals.",
 example:"A: 国际(guójì)合作(hézuò)比(bǐ)任何(rènhé)时候(shíhou)都(dōu)重要(zhòngyào)。\nB: 没有(méiyǒu)一(yí)个(gè)国家(guójiā)能(néng)独自(dúzì)解决(jiějué)全球(quánqiú)问题(wèntí)。",
 exampleSrc:"A: International cooperation is more important than ever.\nB: No country can solve global problems alone.",
 funFact:"合作 has become a central concept in Chinese diplomatic language: 合作共赢 (cooperation, mutual victory) and 一带一路 (Belt and Road) both use it. The vocabulary reflects a worldview that prizes partnership over competition."},

{type:"teach", trg:"多元(duōyuán)", src:"diverse / pluralistic / multi-", pos:"adj", gender:null,
 note:"多 (many) + 元 (element/basic unit).\nMany elements. Used for diversity of all kinds.",
 example:"A: 我(wǒ)们(men)的(de)社会(shèhuì)越(yuè)来(lái)越(yuè)多元(duōyuán)。\nB: 这(zhè)是(shì)好(hǎo)事(shì)，不同(bùtóng)的(de)视角(shìjiǎo)让(ràng)我们(wǒmen)更(gèng)智慧(zhìhuì)。",
 exampleSrc:"A: Our society is becoming more and more diverse.\nB: That is a good thing. Different perspectives make us wiser.",
 funFact:"多元 is a modern term that emerged alongside globalization. 多元文化 (multicultural), 多元化 (diversify). It carries generally positive connotations — more Chinese cities now proudly describe themselves as 多元化."},

{type:"teach", trg:"价值观(jiàzhíguān)", src:"values (moral/cultural)", pos:"noun", gender:null,
 note:"价值 (value) + 观 (view).\nViews on value. What you consider important.",
 example:"A: 每(měi)个(gè)人(rén)的(de)价值观(jiàzhíguān)都(dōu)不(bù)一样(yíyàng)。\nB: 这(zhè)就(jiù)是(shì)为什么(wèishénme)我们(wǒmen)需要(xūyào)互相(hùxiāng)尊重(zūnzhòng)。",
 exampleSrc:"A: Everyone's values are different.\nB: That is why we need to respect each other.",
 funFact:"价值观 has become a heavily used term in Chinese public discourse: 核心价值观 (core values), 社会主义价值观 (socialist values), 普世价值观 (universal values). Debates about values drive much of contemporary cultural conversation."},

{type:"teach", trg:"尊重(zūnzhòng)", src:"to respect / respect", pos:"verb", gender:null,
 note:"尊 (honor) + 重 (heavy/weighty).\nTo treat as weighty and honored.",
 example:"A: 我(wǒ)们(men)应该(yīnggāi)尊重(zūnzhòng)不同(bùtóng)的(de)文化(wénhuà)。\nB: 尊重(zūnzhòng)是(shì)友谊(yǒuyì)的(de)基础(jīchǔ)。",
 exampleSrc:"A: We should respect different cultures.\nB: Respect is the foundation of friendship.",
 funFact:"尊重 is one of the most important words in Chinese interpersonal philosophy. It appears in almost every context: respect parents, respect culture, respect traditions, respect the law. The concept is central to Confucian ethics and remains so today."},

{type:"teach", trg:"理解(lǐjiě)", src:"to understand / understanding", pos:"verb", gender:null,
 note:"理 (reason/logic) + 解 (solve/explain).\nReason out and explain. Deeper than just 懂.",
 example:"A: 我(wǒ)理解(lǐjiě)你(nǐ)的(de)感受(gǎnshòu)。\nB: 谢谢(xièxie)你(nǐ)的(de)理解(lǐjiě)。",
 exampleSrc:"A: I understand your feelings.\nB: Thank you for your understanding.",
 funFact:"理解 is stronger than 明白 (understand a fact) or 懂 (get it). 理解 implies empathy and full grasp. 相互理解 (mutual understanding) is a cornerstone concept in both interpersonal relationships and international relations."},

{type:"teach", trg:"未来(wèilái)", src:"the future", pos:"noun", gender:null,
 note:"未 (not yet) + 来 (come).\nNot yet come. The not-yet-arrived.",
 example:"A: 我(wǒ)们(men)要(yào)为(wèi)未来(wèilái)做(zuò)好(hǎo)准备(zhǔnbèi)。\nB: 特别(tèbié)是(shì)给(gěi)下(xià)一代(yídài)一(yí)个(gè)更(gèng)好(hǎo)的(de)世界(shìjiè)。",
 exampleSrc:"A: We must prepare for the future.\nB: Especially to give the next generation a better world.",
 funFact:"未来 elegantly describes the future as 'what has not yet come.' This is different from English, which uses a direct directional word. Chinese frames the future as incoming, on its way to us, already on the horizon."},

{type:"mc", q:"多元(duōyuán) combines 'many' with which character?",
 opts:["language","culture","element","country"],
 ans:"element",
 hint:"The second character means 'basic unit' or '___.' Think of many basic components coming together."},

{type:"mc", q:"未来(wèilái) literally means:",
 opts:["year to come","time ahead","not yet come","coming soon"],
 ans:"not yet come",
 hint:"未 means 'not yet,' 来 means 'come.' The future has not yet arrived."},

{type:"fb", s:"不同(bùtóng)国家(guójiā)之间(zhījiān)要(yào)互相(hùxiāng){1}。",
 a:["尊重(zūnzhòng)"],
 opts:["尊重(zūnzhòng)","理解(lǐjiě)","合作(hézuò)","交流(jiāoliú)"],
 hint:"The verb for honoring someone or something. 尊 (honor) + 重 (weighty).",
 sSrc:"Different countries should {1} each other."},

{type:"match", pairs:[
  {trg:"合作(hézuò)", src:"cooperation"},
  {trg:"多元(duōyuán)", src:"diverse"},
  {trg:"价值观(jiàzhíguān)", src:"values"},
  {trg:"尊重(zūnzhòng)", src:"to respect"},
  {trg:"理解(lǐjiě)", src:"to understand"},
  {trg:"未来(wèilái)", src:"the future"}
]},

{type:"tip", title:"Closing the Course",
 text:"You have reached the end of this 45-unit Chinese journey.\nFrom greetings in Unit 1 to global values here, you now have the vocabulary for real Chinese life.\nContinue practicing: read, listen, speak, write. Every moment of contact with Chinese builds 水平 (level).\n继续(jìxù)加油(jiāyóu)！ (Keep going!)",
 deepDive:"Reaching B2.2 means you can handle abstract topics, follow news, discuss values, and express yourself in most situations. The next step is living with the language: watching Chinese films without subtitles, reading books, having long conversations. Fluency grows from there."},

{type:"story", speaker:"narrator", mood:"hopeful", art:"zh-global-future",
 trg:"我(wǒ)们(men)生活(shēnghuó)在(zài)一(yí)个(gè)多元(duōyuán)的(de)世界(shìjiè)。不同(bùtóng)的(de)民族(mínzú)，不同(bùtóng)的(de)价值观(jiàzhíguān)，却(què)有(yǒu)共同(gòngtóng)的(de)人类(rénlèi)未来(wèilái)。我们(wǒmen)需要(xūyào)互相(hùxiāng)理解(lǐjiě)，互相(hùxiāng)尊重(zūnzhòng)，通过(tōngguò)合作(hézuò)建设(jiànshè)一(yí)个(gè)更(gèng)好(hǎo)的(de)地球(dìqiú)。",
 src:"We live in a diverse world. Different peoples, different values, yet a shared human future. We need to understand each other, respect each other, and through cooperation build a better Earth."}

]}

]};

export default UNIT_45;
