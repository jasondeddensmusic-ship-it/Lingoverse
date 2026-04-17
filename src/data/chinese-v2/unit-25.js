// Unit 25: Society and Values
// Level: B2.1 (HSK 4)
// Chinese (Mandarin) V2 format with hanzi+pinyin notation
// Vocab: 平等, 权利, 责任, 公平, 道德, 法律, 制度, 改革, 民主, 自由, 歧视, 尊重, 义务, 观念, 矛盾

const UNIT_25 = {
n:25, lang:"zh", srcLang:"en", track:"v2",
title:"社会问题 Social Issues", sub:"Values and Ethics",
icon:"⚖️", level:"B2.1", color:"#7B5EE8",
lessons:[

// ─── L1: Rights and Responsibilities ───
{id:"zhv2_u25l1", title:"权利与责任 Rights and Responsibilities", icon:"📜", xp:15, board:true, steps:[
{type:"intro", title:"权利与责任 Rights and Responsibilities",
 desc:"Enter the vocabulary of social values and ethics. Learn to discuss rights, responsibilities, fairness, and equality. These concepts are essential for B2-level discussion of social and political topics in Chinese.",
 goals:["Discuss rights and duties with 权利, 责任, and 义务","Talk about fairness and equality with 平等 and 公平","Understand the philosophical roots of these Chinese concepts"]},

{type:"tip", title:"Rights and Responsibilities in Chinese Thought",
 text:"Western and Chinese traditions approach rights differently:\n\nWestern emphasis: Individual rights come first, duties follow.\nChinese emphasis: Duties and social harmony come first.\n\nKey terms:\n权利(quánlì) = rights (right + benefit)\n义务(yìwù) = obligations (righteousness + duty)\n责任(zérèn) = responsibility (blame/duty + task)\n\nIn Confucian tradition, each relationship carries mutual obligations: ruler-subject, parent-child, husband-wife, elder-younger, friend-friend. Harmony comes when everyone fulfills their role.\n\nModern Chinese discourse blends these traditions. The concept of 公民权利 (citizen's rights) is well established, but it is always discussed alongside 公民义务 (citizen's duties).",
 deepDive:{title:"Confucian Ethics and Modern Society",
  text:"Confucian philosophy has shaped Chinese values for over 2,500 years. Key principles include:\n\n仁(rén) = benevolence, humaneness. The highest virtue.\n义(yì) = righteousness, doing what is right.\n礼(lǐ) = propriety, correct social behavior.\n智(zhì) = wisdom.\n信(xìn) = trustworthiness.\n\nThese Five Constants (五常, wǔcháng) form the ethical foundation of traditional Chinese society. Modern China blends Confucian values with contemporary legal frameworks. The tension and harmony between tradition and modernity is one of the great themes of modern Chinese society."}},

{type:"teach", trg:"平等(píngděng)", src:"equality / equal", pos:"noun", gender:null,
 note:"Level + equal. All people treated the same.\n男女平等 = gender equality. 平等权利 = equal rights.",
 example:"A: 每个(měigè)人(rén)都(dōu)应该(yīnggāi)被(bèi)平等(píngděng)对待(duìdài)。\nB: 没错(méicuò)，不管(bùguǎn)性别(xìngbié)、年龄(niánlíng)还是(háishi)背景(bèijǐng)。",
 exampleSrc:"A: Everyone should be treated equally.\nB: Exactly, regardless of gender, age, or background.",
 funFact:"平 means flat or level, and 等 means rank or grade. Equality is literally 'level ranking,' where no one stands above another. China's constitution guarantees equality, and 男女平等 (gender equality) has been a stated national goal since 1949. The phrase 人人平等 (all people are equal) is widely recognized."},

{type:"teach", trg:"权利(quánlì)", src:"rights", pos:"noun", gender:null,
 note:"Power/authority + benefit. Entitlements protected by law.\n人权 = human rights. 公民权利 = citizen's rights.",
 example:"A: 每个(měigè)公民(gōngmín)都(dōu)有(yǒu)受(shòu)教育(jiàoyù)的(de)权利(quánlì)。\nB: 是(shì)的(de)，这(zhè)是(shì)基本(jīběn)权利(quánlì)。",
 exampleSrc:"A: Every citizen has the right to education.\nB: Yes, this is a fundamental right.",
 funFact:"权 originally meant a steelyard weight, a tool for measuring and balancing. Rights are what give balance to society. 利 means benefit or advantage. Note the difference from 权力(quánlì, power/authority). These two words sound identical but have different second characters: 权利 (rights) versus 权力 (power). Context determines meaning."},

{type:"teach", trg:"责任(zérèn)", src:"responsibility / duty", pos:"noun", gender:null,
 note:"Blame/duty + task. An obligation you must fulfill.\n负责任 = to be responsible. 社会责任 = social responsibility.",
 example:"A: 保护(bǎohù)环境(huánjìng)是(shì)每个(měigè)人(rén)的(de)责任(zérèn)。\nB: 对(duì)，我们(wǒmen)都(dōu)应该(yīnggāi)做(zuò)到(dào)。",
 exampleSrc:"A: Protecting the environment is everyone's responsibility.\nB: Right, we all should do our part.",
 funFact:"责 originally meant to demand or hold accountable, and 任 means task or burden. Responsibility is a 'demanded task.' In Chinese culture, responsibility extends beyond the individual to family, community, and nation. 天下兴亡匹夫有责 (every person bears responsibility for the fate of the nation) is a famous saying from the Ming Dynasty scholar Gu Yanwu."},

{type:"teach", trg:"公平(gōngpíng)", src:"fair / fairness", pos:"adj", gender:null,
 note:"Public + level. Impartial treatment for all.\n公平竞争 = fair competition. 不公平 = unfair.",
 example:"A: 你(nǐ)觉得(juéde)这个(zhège)制度(zhìdù)公平(gōngpíng)吗(ma)？\nB: 不(bù)太(tài)公平(gōngpíng)，有些(yǒuxiē)人(rén)的(de)机会(jīhuì)更(gèng)多(duō)。",
 exampleSrc:"A: Do you think this system is fair?\nB: Not very fair, some people have more opportunities.",
 funFact:"公 means public (as opposed to private/selfish), and 平 means level or flat. Fairness is 'publicly level,' treating everyone without bias. The contrast with 私 (private, selfish) is key. Ancient Chinese philosophers debated 公 versus 私 extensively, arguing that good governance requires 公心 (a public-minded heart)."},

{type:"teach", trg:"义务(yìwù)", src:"obligation / duty", pos:"noun", gender:null,
 note:"Righteousness + task. Duties required by morality or law.\n义务教育 = compulsory education. 尽义务 = fulfill obligations.",
 example:"A: 在(zài)中国(Zhōngguó)，义务(yìwù)教育(jiàoyù)是(shì)九年(jiǔnián)。\nB: 也就是说(yějiùshìshuō)，小学(xiǎoxué)六年(liùnián)加上(jiāshàng)初中(chūzhōng)三年(sānnián)。",
 exampleSrc:"A: In China, compulsory education is nine years.\nB: That means six years of primary school plus three years of middle school.",
 funFact:"义 means righteousness or moral duty. It is one of the Five Constants of Confucianism. 务 means task or affair. An obligation is a 'task of righteousness.' The distinction between 权利 (rights) and 义务 (obligations) is fundamental in Chinese civic education. Students learn both concepts together from an early age."},

{type:"mc", q:"权利(quánlì) and 权力(quánlì) sound identical. The difference is:",
 opts:["权利 means rights, 权力 means power","They are the same word","权利 is formal, 权力 is informal","权利 is old, 权力 is new"],
 ans:"权利 means rights, 权力 means power",
 hint:"The second character differs: 利 (benefit) versus 力 (force/power). Same pronunciation, very different meanings."},

{type:"match", pairs:[
  {trg:"平等(píngděng)", src:"equality"},
  {trg:"权利(quánlì)", src:"rights"},
  {trg:"责任(zérèn)", src:"responsibility"},
  {trg:"公平(gōngpíng)", src:"fair"},
  {trg:"义务(yìwù)", src:"obligation"}
]},

{type:"fb", s:"保护(bǎohù)环境(huánjìng)是(shì)每个(měigè)人(rén)的(de){1}。",
 a:["责任(zérèn)"],
 opts:["责任(zérèn)","权利(quánlì)","平等(píngděng)","义务(yìwù)"],
 hint:"This word means a duty you must fulfill. It combines 'accountability' and 'task.'",
 sSrc:"Protecting the environment is everyone's {1}."},

{type:"mc", q:"每个(měigè)人(rén)都(dōu)应该(yīnggāi)被(bèi)平等(píngděng)对待(duìdài)。 This means:",
 opts:["Everyone should be treated equally","Everyone should get the same salary","Everyone should have the same job","Everyone should look the same"],
 ans:"Everyone should be treated equally",
 hint:"平等 means equal, and 对待 means to treat. The sentence advocates for equal treatment regardless of differences."},

{type:"fb", s:"你(nǐ)觉得(juéde)这个(zhège)制度(zhìdù){1}吗(ma)？",
 a:["公平(gōngpíng)"],
 opts:["公平(gōngpíng)","平等(píngděng)","权利(quánlì)","责任(zérèn)"],
 hint:"This adjective asks whether something is impartial and just. It combines 'public' and 'level.'",
 sSrc:"Do you think this system is {1}?"},

{type:"fb", s:"在(zài)中国(Zhōngguó)，{1}教育(jiàoyù)是(shì)九年(jiǔnián)。",
 a:["义务(yìwù)"],
 opts:["义务(yìwù)","权利(quánlì)","责任(zérèn)","平等(píngděng)"],
 hint:"This word means compulsory or obligatory. When paired with 教育, it describes the schooling that is required by law.",
 sSrc:"In China, {1} education is nine years."}
]},

// ─── L2: Law and Reform ───
{id:"zhv2_u25l2", title:"法律与改革 Law and Reform", icon:"⚖️", xp:15, board:true, steps:[
{type:"intro", title:"法律与改革 Law and Reform",
 desc:"Learn to discuss law, systems, morality, and reform. These words allow you to engage with discussions about how societies organize themselves and how they change over time.",
 goals:["Discuss law and morality with 法律 and 道德","Talk about systems and reform with 制度 and 改革","Connect these concepts to Chinese social development"]},

{type:"teach", trg:"道德(dàodé)", src:"morality / ethics", pos:"noun", gender:null,
 note:"Way/path + virtue. The moral principles of right conduct.\n道德标准 = moral standard. 道德观 = moral outlook.",
 example:"A: 道德(dàodé)和(hé)法律(fǎlǜ)有(yǒu)什么(shénme)不同(bùtóng)？\nB: 法律(fǎlǜ)是(shì)强制(qiángzhì)的(de)，道德(dàodé)靠(kào)自觉(zìjué)。",
 exampleSrc:"A: What is the difference between morality and law?\nB: Law is enforced, morality relies on self-awareness.",
 funFact:"道 is the Dao, the Way, the fundamental path of nature. 德 means virtue or moral character. Together, 道德 means 'the virtuous way.' This word connects to both Confucianism and Daoism. The 道德经(Dàodéjīng), the foundational text of Daoism, literally means 'The Classic of the Way and Virtue.'"},

{type:"teach", trg:"法律(fǎlǜ)", src:"law", pos:"noun", gender:null,
 note:"Law + regulation. The formal rules governing society.\n法律制度 = legal system. 遵守法律 = to obey the law.",
 example:"A: 每个(měigè)公民(gōngmín)都(dōu)应该(yīnggāi)遵守(zūnshǒu)法律(fǎlǜ)。\nB: 对(duì)，法律(fǎlǜ)面前(miànqián)人人(rénrén)平等(píngděng)。",
 exampleSrc:"A: Every citizen should obey the law.\nB: Right, everyone is equal before the law.",
 funFact:"法 originally depicted water flowing around an obstacle, representing fairness (like water finding its level). 律 means regulation or rhythm. Ancient Chinese legal philosophy distinguished 法 (codified law) from 礼 (ritual propriety). The debate over whether society should be governed primarily by law or by moral example is one of the oldest in Chinese thought."},

{type:"teach", trg:"制度(zhìdù)", src:"system / institution", pos:"noun", gender:null,
 note:"Make/control + measure/degree. An organized structure of rules.\n教育制度 = education system. 政治制度 = political system.",
 example:"A: 每个(měigè)国家(guójiā)的(de)教育(jiàoyù)制度(zhìdù)都(dōu)不(bù)一样(yíyàng)。\nB: 对(duì)，中国(Zhōngguó)的(de)制度(zhìdù)有(yǒu)自己(zìjǐ)的(de)特点(tèdiǎn)。",
 exampleSrc:"A: Every country's education system is different.\nB: Yes, China's system has its own characteristics.",
 funFact:"制 means to make, control, or regulate, and 度 means measure or standard. A system is 'controlled measurement.' China's history has seen many institutional changes, from the imperial examination system to land reform to the modern market economy. 制度创新 (institutional innovation) is a key concept in Chinese development theory."},

{type:"teach", trg:"改革(gǎigé)", src:"reform / to reform", pos:"noun", gender:null,
 note:"Change + leather/remove. To transform fundamentally.\n改革开放 = reform and opening up. 经济改革 = economic reform.",
 example:"A: 改革(gǎigé)开放(kāifàng)改变(gǎibiàn)了(le)中国(Zhōngguó)。\nB: 是(shì)的(de)，四十多年(sìshíduōnián)来(lái)变化(biànhuà)非常(fēicháng)大(dà)。",
 exampleSrc:"A: Reform and opening up changed China.\nB: Yes, the changes over the past forty-plus years have been enormous.",
 funFact:"改 means to change, and 革 means leather or to remove. The character 革 originally depicted an animal hide being stripped. Reform is literally 'changing by stripping away the old.' 改革开放 (reform and opening up), launched in 1978, is the defining event of modern China, transforming it from an agrarian economy into the world's second-largest economy."},

{type:"mc", q:"道德(dàodé) connects to which Chinese philosophical traditions?",
 opts:["Both Confucianism and Daoism","Only Confucianism","Only Daoism","Neither"],
 ans:"Both Confucianism and Daoism",
 hint:"道 is central to Daoism (the Way), and 德 (virtue) is central to Confucianism. The word bridges both traditions."},

{type:"match", pairs:[
  {trg:"道德(dàodé)", src:"morality"},
  {trg:"法律(fǎlǜ)", src:"law"},
  {trg:"制度(zhìdù)", src:"system"},
  {trg:"改革(gǎigé)", src:"reform"}
]},

{type:"fb", s:"每个(měigè)公民(gōngmín)都(dōu)应该(yīnggāi)遵守(zūnshǒu){1}。",
 a:["法律(fǎlǜ)"],
 opts:["法律(fǎlǜ)","道德(dàodé)","制度(zhìdù)","改革(gǎigé)"],
 hint:"This word means the formal, enforceable rules of society. Obeying these is mandatory, not optional.",
 sSrc:"Every citizen should obey the {1}."},

{type:"mc", q:"改革(gǎigé) literally means:",
 opts:["Changing by stripping away the old","Adding new rules","Keeping tradition","Going backwards"],
 ans:"Changing by stripping away the old",
 hint:"改 means to change, and 革 originally depicted stripping an animal hide. Reform removes what no longer works."},

{type:"fb", s:"中国(Zhōngguó)的(de)教育(jiàoyù){1}和(hé)美国(Měiguó)的(de)很(hěn)不同(bùtóng)。",
 a:["制度(zhìdù)"],
 opts:["制度(zhìdù)","法律(fǎlǜ)","改革(gǎigé)","道德(dàodé)"],
 hint:"This word means an organized structure of rules and procedures. Education, politics, and economics all have one.",
 sSrc:"China's education {1} is very different from America's."},

{type:"fb", s:"{1}和(hé)法律(fǎlǜ)不同(bùtóng)，因为(yīnwèi)它(tā)靠(kào)自觉(zìjué)。",
 a:["道德(dàodé)"],
 opts:["道德(dàodé)","制度(zhìdù)","改革(gǎigé)","公平(gōngpíng)"],
 hint:"This concept relies on personal conscience rather than external enforcement. It is about inner virtue.",
 sSrc:"{1} differs from law because it relies on self-awareness."}
]},

// ─── L3: Freedom and Contradiction ───
{id:"zhv2_u25l3", title:"自由与矛盾 Freedom and Contradiction", icon:"🗽", xp:15, board:true, steps:[
{type:"intro", title:"自由与矛盾 Freedom and Contradiction",
 desc:"Learn to discuss freedom, democracy, discrimination, respect, and social contradictions. These are the concepts needed for nuanced B2-level discussion of social issues.",
 goals:["Discuss freedom and democracy with 自由 and 民主","Talk about discrimination and respect with 歧视 and 尊重","Analyze contradictions and changing ideas with 矛盾 and 观念"]},

{type:"teach", trg:"自由(zìyóu)", src:"freedom / free", pos:"noun", gender:null,
 note:"Self + from/reason. Acting from one's own will.\n言论自由 = freedom of speech. 自由市场 = free market.",
 example:"A: 每个(měigè)人(rén)都(dōu)有(yǒu)选择(xuǎnzé)自己(zìjǐ)职业(zhíyè)的(de)自由(zìyóu)。\nB: 对(duì)，这(zhè)是(shì)很(hěn)重要(zhòngyào)的(de)权利(quánlì)。",
 exampleSrc:"A: Everyone has the freedom to choose their own career.\nB: Right, this is a very important right.",
 funFact:"自 means self, and 由 means from or reason. Freedom is 'from oneself' or 'according to one's own will.' The word entered modern Chinese in the 19th century, partly through Japanese translations of Western philosophy. In Chinese discourse, 自由 is often discussed alongside 责任 (responsibility), reflecting the belief that freedom and duty are inseparable."},

{type:"teach", trg:"民主(mínzhǔ)", src:"democracy", pos:"noun", gender:null,
 note:"People + master. The people as masters of governance.\n民主制度 = democratic system. 民主选举 = democratic election.",
 example:"A: 民主(mínzhǔ)是(shì)什么(shénme)意思(yìsi)？\nB: 就是(jiùshì)人民(rénmín)是(shì)国家(guójiā)的(de)主人(zhǔrén)。",
 exampleSrc:"A: What does democracy mean?\nB: It means the people are the masters of the country.",
 funFact:"民 means the people, and 主 means master or host. Democracy is literally 'the people are masters.' This is a direct, powerful Chinese translation of the Greek demos (people) + kratos (rule). The concept of 民本 (the people as the foundation) existed in ancient Chinese philosophy long before contact with Western democratic theory."},

{type:"teach", trg:"歧视(qíshì)", src:"discrimination", pos:"noun", gender:null,
 note:"Diverge + look at. To look at someone as different/lesser.\n性别歧视 = gender discrimination. 种族歧视 = racial discrimination.",
 example:"A: 我们(wǒmen)应该(yīnggāi)反对(fǎnduì)任何(rènhé)形式(xíngshì)的(de)歧视(qíshì)。\nB: 没错(méicuò)，每个(měigè)人(rén)都(dōu)值得(zhídé)尊重(zūnzhòng)。",
 exampleSrc:"A: We should oppose any form of discrimination.\nB: Exactly, everyone deserves respect.",
 funFact:"歧 means to diverge or branch off (from the norm), and 视 means to look at. Discrimination is 'looking at someone as divergent.' The word powerfully captures how prejudice works: treating someone as an outsider because they differ from an assumed standard."},

{type:"teach", trg:"尊重(zūnzhòng)", src:"respect / to respect", pos:"verb", gender:null,
 note:"Revere + heavy/important. To treat with dignity.\n互相尊重 = mutual respect. 尊重差异 = respect differences.",
 example:"A: 尊重(zūnzhòng)别人(biérén)的(de)意见(yìjiàn)很(hěn)重要(zhòngyào)。\nB: 对(duì)，即使(jíshǐ)我们(wǒmen)不(bù)同意(tóngyì)。",
 exampleSrc:"A: Respecting other people's opinions is very important.\nB: Right, even if we don't agree.",
 funFact:"尊 originally depicted a vessel for ritual wine offerings to ancestors. 重 means heavy or important. Respect is 'treating something as sacred and weighty.' In Chinese culture, 尊老爱幼 (respect the elderly, care for the young) is a core social principle that governs daily behavior from seating arrangements to meal etiquette."},

{type:"teach", trg:"观念(guānniàn)", src:"concept / idea / mindset", pos:"noun", gender:null,
 note:"View + thought. A way of thinking about something.\n传统观念 = traditional mindset. 改变观念 = change one's thinking.",
 example:"A: 现在(xiànzài)年轻人(niánqīngrén)的(de)观念(guānniàn)和(hé)老一辈(lǎoyíbèi)不(bù)一样(yíyàng)。\nB: 对(duì)，每(měi)一代(yīdài)人(rén)都(dōu)有(yǒu)自己(zìjǐ)的(de)想法(xiǎngfǎ)。",
 exampleSrc:"A: Young people's mindsets are different from the older generation's.\nB: Right, every generation has its own way of thinking.",
 funFact:"观 means to observe or view, and 念 means thought or to think of. A concept is 'viewed thought.' Generational shifts in 观念 are a major topic in China, where rapid modernization has created significant differences between grandparents who lived through poverty and grandchildren who grew up with smartphones and high-speed rail."},

{type:"teach", trg:"矛盾(máodùn)", src:"contradiction / conflict", pos:"noun", gender:null,
 note:"Spear + shield. Things that oppose each other.\n社会矛盾 = social contradictions. 自相矛盾 = self-contradictory.",
 example:"A: 发展(fāzhǎn)经济(jīngjì)和(hé)保护(bǎohù)环境(huánjìng)之间(zhījiān)有(yǒu)矛盾(máodùn)吗(ma)？\nB: 有(yǒu)一些(yīxiē)矛盾(máodùn)，但(dàn)可以(kěyǐ)找到(zhǎodào)平衡(pínghéng)。",
 exampleSrc:"A: Is there a contradiction between developing the economy and protecting the environment?\nB: There are some contradictions, but we can find a balance.",
 funFact:"矛 means spear and 盾 means shield. The word comes from an ancient fable: a merchant claimed his spear could pierce any shield, and his shield could block any spear. When asked what happens when the spear strikes the shield, he had no answer. This story, over 2,000 years old, gave Chinese the word for logical contradiction."},

{type:"mc", q:"矛盾(máodùn) comes from a story about:",
 opts:["A merchant selling a spear and a shield","Two countries at war","A broken weapon","A philosophical debate"],
 ans:"A merchant selling a spear and a shield",
 hint:"矛 means spear and 盾 means shield. The merchant made impossible claims about both, creating a logical paradox."},

{type:"match", pairs:[
  {trg:"自由(zìyóu)", src:"freedom"},
  {trg:"民主(mínzhǔ)", src:"democracy"},
  {trg:"歧视(qíshì)", src:"discrimination"},
  {trg:"尊重(zūnzhòng)", src:"respect"},
  {trg:"观念(guānniàn)", src:"concept / mindset"},
  {trg:"矛盾(máodùn)", src:"contradiction"}
]},

{type:"fb", s:"我们(wǒmen)应该(yīnggāi)反对(fǎnduì)任何(rènhé)形式(xíngshì)的(de){1}。",
 a:["歧视(qíshì)"],
 opts:["歧视(qíshì)","尊重(zūnzhòng)","自由(zìyóu)","矛盾(máodùn)"],
 hint:"This word means treating people unfairly because they are different. We should oppose all forms of it.",
 sSrc:"We should oppose any form of {1}."},

{type:"mc", q:"民主(mínzhǔ) literally means:",
 opts:["The people are masters","Government power","Free elections","Equal rights"],
 ans:"The people are masters",
 hint:"民 means people, and 主 means master or host. The word captures the idea that the people govern themselves."},

{type:"fb", s:"年轻人(niánqīngrén)和(hé)老一辈(lǎoyíbèi)的(de){1}很(hěn)不同(bùtóng)。",
 a:["观念(guānniàn)"],
 opts:["观念(guānniàn)","矛盾(máodùn)","自由(zìyóu)","权利(quánlì)"],
 hint:"This word means a way of thinking or a mindset. Different generations have different ones.",
 sSrc:"Young people and the older generation have very different {1}."},

{type:"fb", s:"发展(fāzhǎn)和(hé)保护(bǎohù)之间(zhījiān)有(yǒu){1}。",
 a:["矛盾(máodùn)"],
 opts:["矛盾(máodùn)","观念(guānniàn)","歧视(qíshì)","尊重(zūnzhòng)"],
 hint:"This word means a conflict between two opposing things. It comes from the spear-and-shield fable.",
 sSrc:"There are {1} between development and protection."}
]},

// ─── L4: Unit 25 Review ───
{id:"zhv2_u25l4", title:"社会复习 Society Review", icon:"🔄", xp:15, board:true, steps:[
{type:"intro", title:"社会复习 Society Review",
 desc:"Review all society and values vocabulary from this unit. Test your ability to discuss rights, law, reform, freedom, and social issues at the B2 level.",
 goals:["Review all 15 society and values words","Connect legal and ethical vocabulary","Discuss social issues with nuance and precision"]},

{type:"match", pairs:[
  {trg:"平等(píngděng)", src:"equality"},
  {trg:"法律(fǎlǜ)", src:"law"},
  {trg:"自由(zìyóu)", src:"freedom"},
  {trg:"矛盾(máodùn)", src:"contradiction"},
  {trg:"改革(gǎigé)", src:"reform"}
]},

{type:"mc", q:"法律(fǎlǜ)面前(miànqián)人人(rénrén)平等(píngděng)。 This means:",
 opts:["Everyone is equal before the law","The law is always fair","Laws never change","Only some people follow the law"],
 ans:"Everyone is equal before the law",
 hint:"面前 means 'in front of.' The sentence states that no one is above or below the law."},

{type:"fb", s:"每个(měigè)人(rén)都(dōu)有(yǒu)受(shòu)教育(jiàoyù)的(de){1}。",
 a:["权利(quánlì)"],
 opts:["权利(quánlì)","责任(zérèn)","义务(yìwù)","公平(gōngpíng)"],
 hint:"This word means an entitlement protected by law. Education is a fundamental one of these.",
 sSrc:"Everyone has the {1} to receive education."},

{type:"mc", q:"道德(dàodé) and 法律(fǎlǜ) differ because:",
 opts:["Morality relies on self-awareness, law is enforced externally","They are the same thing","Morality is stronger than law","Law came before morality"],
 ans:"Morality relies on self-awareness, law is enforced externally",
 hint:"道德 depends on personal conscience. 法律 has formal enforcement mechanisms."},

{type:"fb", s:"{1}开放(kāifàng)改变(gǎibiàn)了(le)中国(Zhōngguó)。",
 a:["改革(gǎigé)"],
 opts:["改革(gǎigé)","制度(zhìdù)","法律(fǎlǜ)","道德(dàodé)"],
 hint:"This word means to transform fundamentally by removing what no longer works. Combined with 'opening up,' it defines modern China.",
 sSrc:"{1} and opening up changed China."},

{type:"match", pairs:[
  {trg:"权利(quánlì)", src:"rights"},
  {trg:"责任(zérèn)", src:"responsibility"},
  {trg:"道德(dàodé)", src:"morality"},
  {trg:"歧视(qíshì)", src:"discrimination"},
  {trg:"尊重(zūnzhòng)", src:"respect"}
]},

{type:"fb", s:"即使(jíshǐ)意见(yìjiàn)不同(bùtóng)，我们(wǒmen)也(yě)应该(yīnggāi)互相(hùxiāng){1}。",
 a:["尊重(zūnzhòng)"],
 opts:["尊重(zūnzhòng)","歧视(qíshì)","矛盾(máodùn)","改革(gǎigé)"],
 hint:"This word means to treat others with dignity and honor, even when you disagree.",
 sSrc:"Even when opinions differ, we should mutually {1} each other."},

{type:"mc", q:"歧视(qíshì) literally means:",
 opts:["Looking at someone as divergent/different","Hitting someone","Ignoring someone","Praising someone"],
 ans:"Looking at someone as divergent/different",
 hint:"歧 means to diverge from the norm, and 视 means to look at. Discrimination is seeing someone as 'other.'"},

{type:"drag_fill",
 s:"每个(měigè)公民(gōngmín)都(dōu)有(yǒu){1}，也(yě)有(yǒu){2}。我们(wǒmen)应该(yīnggāi)在(zài){3}面前(miànqián)人人(rénrén){4}。",
 blanks:{"1":"权利(quánlì)","2":"义务(yìwù)","3":"法律(fǎlǜ)","4":"平等(píngděng)"},
 pool:["权利(quánlì)","义务(yìwù)","法律(fǎlǜ)","平等(píngděng)"],
 hint:"Every citizen has rights and also has obligations. Everyone should be equal before the law."},

{type:"mc", q:"自由(zìyóu) in Chinese discourse is often discussed alongside:",
 opts:["责任(zérèn) responsibility","金钱(jīnqián) money","旅行(lǚxíng) travel","食物(shíwù) food"],
 ans:"责任(zérèn) responsibility",
 hint:"In Chinese thought, freedom and duty are inseparable. One cannot exist meaningfully without the other."}
]}

]};

export default UNIT_25;
