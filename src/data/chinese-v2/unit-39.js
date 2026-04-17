// Unit 39: What Kind of Person
// Level: B1.2 (HSK 3)
// Chinese (Mandarin) V2 format with hanzi+pinyin notation

const UNIT_39 = {
n:39, lang:"zh", srcLang:"en", track:"v2",
title:"什么样的人 What Kind of Person", sub:"Personality and Appearance",
icon:"👤", level:"B1.2", color:"#7B5EE8",
lessons:[

// ─── L1: Personality Core ───
{id:"zhv2_u39l1", title:"Personality Core", icon:"🧠", xp:15, board:true, steps:[
{type:"intro", title:"Personality Core",
 desc:"Learn to describe what someone is like inside. These words go beyond simple 'good' or 'bad' to capture personality types Chinese speakers actually use.",
 goals:["Describe basic personality types","Talk about someone's temper","Compare different personalities"]},

{type:"teach", trg:"性格(xìnggé)", src:"personality / disposition", pos:"noun", gender:null,
 note:"性 (nature) + 格 (pattern/grid).\nThe patterns of someone's nature.",
 example:"A: 他(tā)的(de)性格(xìnggé)怎么样(zěnmeyàng)？\nB: 他(tā)性格(xìnggé)很(hěn)好(hǎo)，跟(gēn)谁(shéi)都(dōu)能(néng)做(zuò)朋友(péngyou)。",
 exampleSrc:"A: What is his personality like?\nB: He has a great personality. He can be friends with anyone.",
 funFact:"Chinese speakers care deeply about 性格. Marriage and business partners are often assessed by 性格合不合 (whether personalities match). The word is abstract but culturally weighty."},

{type:"teach", trg:"脾气(píqi)", src:"temper / temperament", pos:"noun", gender:null,
 note:"脾 (spleen) + 气 (qi/energy).\nIn Chinese medicine, spleen energy governs emotion.",
 example:"A: 他(tā)脾气(píqi)不好(bùhǎo)，容易(róngyì)生气(shēngqì)。\nB: 那(nà)我(wǒ)们(men)小心(xiǎoxīn)一点(yìdiǎn)。",
 exampleSrc:"A: He has a bad temper and gets angry easily.\nB: Then we should be careful.",
 funFact:"脾气 comes from traditional Chinese medicine, where the spleen was believed to control emotional balance. A person with 好脾气 (good temper) is calm. 发脾气 means 'to lose your temper,' literally 'to release your spleen qi.'"},

{type:"teach", trg:"热情(rèqíng)", src:"enthusiastic / warm / hospitable", pos:"adj", gender:null,
 note:"热 (hot) + 情 (feeling).\nHot feelings. Warm and welcoming toward others.",
 example:"A: 北方(běifāng)人(rén)很(hěn)热情(rèqíng)。\nB: 是(shì)的(de)，他们(tāmen)特别(tèbié)喜欢(xǐhuan)请(qǐng)朋友(péngyou)吃饭(chīfàn)。",
 exampleSrc:"A: People from the north are very warm and hospitable.\nB: Yes, they especially love inviting friends to meals.",
 funFact:"热情 is a powerful compliment in Chinese culture. It describes someone who goes out of their way for others. It also applies to professions: a 热情 shopkeeper will chat, offer tea, and treat you like a guest."},

{type:"teach", trg:"冷静(lěngjìng)", src:"calm / cool-headed", pos:"adj", gender:null,
 note:"冷 (cold) + 静 (quiet/still).\nCold and still. The ability to stay composed.",
 example:"A: 请(qǐng)冷静(lěngjìng)一点(yìdiǎn)，我们(wǒmen)慢慢(mànmàn)谈(tán)。\nB: 对不起(duìbuqǐ)，我(wǒ)刚才(gāngcái)太(tài)激动(jīdòng)了(le)。",
 exampleSrc:"A: Please calm down. Let us talk slowly.\nB: Sorry. I was too worked up just now.",
 funFact:"冷静 is treated positively in Chinese culture, especially in a crisis. Unlike English, where 'cold' can be an insult, Chinese 冷 in 冷静 is admired: an untroubled clarity of mind."},

{type:"teach", trg:"聪明(cōngming)", src:"smart / intelligent / clever", pos:"adj", gender:null,
 note:"聪 (keen hearing) + 明 (bright).\nGood ears and a bright mind.",
 example:"A: 你(nǐ)的(de)孩子(háizi)真(zhēn)聪明(cōngming)！\nB: 谢谢(xièxie)，他(tā)确实(quèshí)学(xué)东西(dōngxi)很(hěn)快(kuài)。",
 exampleSrc:"A: Your child is really smart!\nB: Thank you. He really does learn things quickly.",
 funFact:"聪 (keen of hearing) combined with 明 (bright of vision) creates a holistic view of intelligence. A 聪明 person listens well and sees clearly. Intelligence is sensory, not just cognitive."},

{type:"teach", trg:"诚实(chéngshí)", src:"honest", pos:"adj", gender:null,
 note:"诚 (sincere) + 实 (real/solid).\nSincere and real. Not deceitful.",
 example:"A: 他(tā)是(shì)一(yí)个(gè)非常(fēicháng)诚实(chéngshí)的(de)人(rén)。\nB: 这(zhè)样(yàng)的(de)人(rén)值得(zhíde)信任(xìnrèn)。",
 exampleSrc:"A: He is a very honest person.\nB: A person like this deserves trust.",
 funFact:"诚 is one of the highest Confucian virtues: to be true both to others and to oneself. 诚实 goes beyond not lying — it means living authentically according to one's principles."},

{type:"mc", q:"热情(rèqíng) literally combines 'hot' with which character?",
 opts:["heart","feeling","fire","word"],
 ans:"feeling",
 hint:"The second character 情 appears in words about emotion, like 爱情 (love)."},

{type:"mc", q:"Which word describes someone who stays cool under pressure?",
 opts:["热情(rèqíng)","聪明(cōngming)","冷静(lěngjìng)","诚实(chéngshí)"],
 ans:"冷静(lěngjìng)",
 hint:"This word literally means 'cold and still.' Think of the attitude a surgeon needs."},

{type:"fb", s:"他(tā)的(de){1}很(hěn)好(hǎo)，从来(cónglái)不(bù)生气(shēngqì)。",
 a:["脾气(píqi)"],
 opts:["脾气(píqi)","性格(xìnggé)","聪明(cōngming)","诚实(chéngshí)"],
 hint:"The noun for temperament, based on the traditional Chinese medicine concept of spleen qi.",
 sSrc:"His {1} is great. He never gets angry."},

{type:"match", pairs:[
  {trg:"性格(xìnggé)", src:"personality"},
  {trg:"脾气(píqi)", src:"temper"},
  {trg:"热情(rèqíng)", src:"enthusiastic / warm"},
  {trg:"冷静(lěngjìng)", src:"calm / cool-headed"},
  {trg:"聪明(cōngming)", src:"smart / clever"},
  {trg:"诚实(chéngshí)", src:"honest"}
]}

]},

// ─── L2: Social Personalities ───
{id:"zhv2_u39l2", title:"Social Personalities", icon:"🎭", xp:15, board:true, steps:[
{type:"intro", title:"Social Personalities",
 desc:"How do people interact with others? Some tell jokes, some hide in corners. Learn to describe social styles with precision.",
 goals:["Describe humor and shyness","Distinguish introverts from extroverts","Talk about social behavior"]},

{type:"teach", trg:"幽默(yōumò)", src:"humorous / humor", pos:"adj", gender:null,
 note:"Phonetic loan from English 'humor.'\nRelatively modern word, coined in the 20th century.",
 example:"A: 他(tā)很(hěn)幽默(yōumò)，大家(dàjiā)都(dōu)喜欢(xǐhuan)跟(gēn)他(tā)聊天(liáotiān)。\nB: 是(shì)的(de)，他(tā)讲(jiǎng)的(de)笑话(xiàohuà)总是(zǒngshì)很(hěn)好笑(hǎoxiào)。",
 exampleSrc:"A: He is very humorous. Everyone enjoys chatting with him.\nB: Yes, his jokes are always funny.",
 funFact:"幽默 was coined by Chinese writer Lin Yutang in 1924 as a phonetic adaptation of English 'humor.' The characters 幽 (secluded) + 默 (silent) literally suggest quiet depth, fitting the subtle nature of good humor."},

{type:"teach", trg:"害羞(hàixiū)", src:"shy", pos:"adj", gender:null,
 note:"害 (afraid/harm) + 羞 (shame).\nFearful of embarrassment.",
 example:"A: 她(tā)很(hěn)害羞(hàixiū)，不(bù)喜欢(xǐhuan)在(zài)大家(dàjiā)面前(miànqián)说话(shuōhuà)。\nB: 我们(wǒmen)给(gěi)她(tā)一点(yìdiǎn)时间(shíjiān)适应(shìyìng)。",
 exampleSrc:"A: She is very shy and does not like speaking in front of everyone.\nB: Let us give her some time to adjust.",
 funFact:"Unlike English 'shy,' which is neutral, 害羞 carries a slight positive-cute connotation in Chinese. A 害羞 person is often seen as modest or endearing, especially applied to young people or women."},

{type:"teach", trg:"外向(wàixiàng)", src:"outgoing / extroverted", pos:"adj", gender:null,
 note:"外 (outside) + 向 (facing/toward).\nFacing outward. Energy directed toward others.",
 example:"A: 你(nǐ)觉得(juéde)自己(zìjǐ)是(shì)外向(wàixiàng)的(de)人(rén)吗(ma)？\nB: 算(suàn)是(shì)吧(ba)，我(wǒ)喜欢(xǐhuan)认识(rènshi)新(xīn)朋友(péngyou)。",
 exampleSrc:"A: Do you think you are an outgoing person?\nB: I guess so. I like meeting new friends.",
 funFact:"外向 and 内向 are direct translations of the psychological terms 'extrovert' and 'introvert.' They were introduced through Jung's work in the early 20th century and have become standard vocabulary."},

{type:"teach", trg:"内向(nèixiàng)", src:"introverted", pos:"adj", gender:null,
 note:"内 (inside) + 向 (facing/toward).\nFacing inward. Energy directed inward.",
 example:"A: 我(wǒ)是(shì)一个(yígè)内向(nèixiàng)的(de)人(rén)，喜欢(xǐhuan)安静(ānjìng)。\nB: 那(nà)我(wǒ)们(men)找(zhǎo)一(yí)个(gè)安静(ānjìng)的(de)咖啡馆(kāfēiguǎn)聊天(liáotiān)吧(ba)。",
 exampleSrc:"A: I am an introverted person. I like quiet.\nB: Then let us find a quiet cafe to chat.",
 funFact:"内向 is increasingly destigmatized in modern China. Younger generations proudly identify as 内向 on social media, pushing back against older expectations that everyone should be socially outgoing."},

{type:"teach", trg:"开朗(kāilǎng)", src:"cheerful / open / sunny", pos:"adj", gender:null,
 note:"开 (open) + 朗 (bright).\nOpen and bright. More than just happy — fundamentally sunny.",
 example:"A: 她(tā)性格(xìnggé)很(hěn)开朗(kāilǎng)，总是(zǒngshì)笑(xiào)着(zhe)。\nB: 跟(gēn)开朗(kāilǎng)的(de)人(rén)在(zài)一起(yìqǐ)，心情(xīnqíng)也(yě)会(huì)变(biàn)好(hǎo)。",
 exampleSrc:"A: Her personality is very cheerful. She is always smiling.\nB: Being around cheerful people lifts your mood too.",
 funFact:"开朗 is often used to describe both weather (a clear, open sky) and personality. The metaphor is the same: nothing blocking the light. It is one of the most positive personality descriptors in Chinese."},

{type:"mc", q:"幽默(yōumò) is a phonetic loan word from which language?",
 opts:["Japanese","English","French","Russian"],
 ans:"English",
 hint:"This 20th-century word was coined by a Chinese writer to match a Western concept. Try saying the Chinese syllables quickly."},

{type:"mc", q:"An introverted person in Chinese is called:",
 opts:["外向(wàixiàng)","内向(nèixiàng)","害羞(hàixiū)","开朗(kāilǎng)"],
 ans:"内向(nèixiàng)",
 hint:"The word combining 'inside' with 'facing.' Energy directed inward."},

{type:"fb", s:"他(tā)很(hěn){1}，讲(jiǎng)笑话(xiàohuà)总是(zǒngshì)逗(dòu)大家(dàjiā)笑(xiào)。",
 a:["幽默(yōumò)"],
 opts:["幽默(yōumò)","害羞(hàixiū)","内向(nèixiàng)","冷静(lěngjìng)"],
 hint:"The adjective for funny or humorous. A phonetic loan from English.",
 sSrc:"He is very {1}. His jokes always make everyone laugh."},

{type:"tip", title:"外向 vs 开朗",
 text:"These look similar but are different.\n外向: outgoing, gets energy from being with people.\n开朗: cheerful, sunny disposition regardless of setting.\nSomeone can be 外向 but not 开朗 (social but sometimes moody), or 开朗 but 内向 (sunny but introverted).",
 deepDive:"Western psychology tends to treat introvert/extrovert as the main axis. Chinese descriptions add a separate axis of 开朗 vs 忧郁 (sunny vs gloomy). This gives a more two-dimensional map of personality with more expressive range."},

{type:"story", speaker:"narrator", mood:"playful", art:"zh-personality-contrast",
 trg:"小(xiǎo)美(Měi)性格(xìnggé)很(hěn)外向(wàixiàng)，喜欢(xǐhuan)在(zài)聚会(jùhuì)上(shàng)跟(gēn)大家(dàjiā)聊天(liáotiān)。小(xiǎo)林(Lín)比较(bǐjiào)内向(nèixiàng)，但是(dànshì)特别(tèbié)幽默(yōumò)，一(yì)开口(kāikǒu)就(jiù)让(ràng)大家(dàjiā)笑(xiào)。",
 src:"Xiao Mei has an outgoing personality and loves chatting with everyone at parties. Xiao Lin is more introverted, but especially humorous. The moment he speaks, he has everyone laughing."}

]},

// ─── L3: Appearance and Looks ───
{id:"zhv2_u39l3", title:"Appearance and Looks", icon:"👀", xp:15, board:true, steps:[
{type:"intro", title:"Appearance and Looks",
 desc:"Describe how people look. Height, build, attractiveness. Chinese has specific words for these descriptions — let us learn the common ones.",
 goals:["Describe physical appearance","Compare heights and builds","Express attractiveness"]},

{type:"teach", trg:"样子(yàngzi)", src:"appearance / look / way", pos:"noun", gender:null,
 note:"样 (appearance/kind) + 子 (noun suffix).\nThe way someone looks. Also 'manner / style.'",
 example:"A: 他(tā)的(de)样子(yàngzi)怎么样(zěnmeyàng)？\nB: 个子(gèzi)高(gāo)高(gāo)的(de)，戴(dài)着(zhe)眼镜(yǎnjìng)。",
 exampleSrc:"A: What does he look like?\nB: He is tall and wears glasses.",
 funFact:"样子 has a flexible meaning. It covers physical appearance (看样子 = 'looks like'), but also manner or attitude: 那是什么样子？ (What kind of behavior is that?). Context decides which sense applies."},

{type:"teach", trg:"矮(ǎi)", src:"short (in height)", pos:"adj", gender:null,
 note:"Single character. Only for HEIGHT.\nFor short objects or duration, use 短 (duǎn) instead.",
 example:"A: 我(wǒ)比(bǐ)我(wǒ)哥哥(gēge)矮(ǎi)一点(yìdiǎn)。\nB: 没(méi)关系(guānxì)，你(nǐ)还(hái)在(zài)长(zhǎng)。",
 exampleSrc:"A: I am slightly shorter than my older brother.\nB: No matter, you are still growing.",
 funFact:"Chinese strictly separates 矮 (short in height) from 短 (short in length). A short person is 矮. A short pencil is 短. Mixing them up is one of the clearest signs of a learner still thinking in English."},

{type:"teach", trg:"瘦(shòu)", src:"thin / slim", pos:"adj", gender:null,
 note:"Single character. Can describe people, animals, or portions.\nNeutral, not negative.",
 example:"A: 他(tā)最近(zuìjìn)瘦(shòu)了(le)很(hěn)多(duō)。\nB: 可能(kěnéng)工作(gōngzuò)太(tài)忙(máng)了(le)。",
 exampleSrc:"A: He has gotten much thinner recently.\nB: Maybe work has been too busy.",
 funFact:"瘦 is often a compliment in urban China, where slim figures are fashionable. But in rural or older contexts, being 瘦 can worry family members, who may associate thinness with poor health or inadequate meals."},

{type:"teach", trg:"胖(pàng)", src:"fat / heavy-set", pos:"adj", gender:null,
 note:"Only for people and animals. Food portions use 多 (many).\nNot as harsh as English 'fat' among family/friends.",
 example:"A: 我(wǒ)最近(zuìjìn)胖(pàng)了(le)两(liǎng)公斤(gōngjīn)。\nB: 那(nà)我(wǒ)们(men)一起(yìqǐ)去(qù)跑步(pǎobù)吧(ba)。",
 exampleSrc:"A: I have gained two kilograms recently.\nB: Then let us go running together.",
 funFact:"胖 can be a term of affection in Chinese, especially for babies (胖胖的 = chubby-cute) or friends (小胖 = 'little fatty' as a nickname). Public directness about weight is culturally milder than in the West."},

{type:"teach", trg:"帅(shuài)", src:"handsome / cool", pos:"adj", gender:null,
 note:"Originally 'general' (military commander).\nNow the standard word for male attractiveness.",
 example:"A: 这(zhè)个(gè)演员(yǎnyuán)很(hěn)帅(shuài)！\nB: 是(shì)啊(a)，他(tā)是(shì)我(wǒ)最(zuì)喜欢(xǐhuan)的(de)明星(míngxīng)。",
 exampleSrc:"A: This actor is so handsome!\nB: Yeah. He is my favorite celebrity.",
 funFact:"帅 also slangs to mean 'cool' in a broader sense: 这(zhè)个(gè)车(chē)真(zhēn)帅(shuài) means 'this car is really cool.' The character's original military meaning evolved into the modern idea of attractive confidence."},

{type:"teach", trg:"漂亮(piàoliang)", src:"pretty / beautiful", pos:"adj", gender:null,
 note:"漂 (float/bleach) + 亮 (bright).\nBright and radiant.",
 example:"A: 她(tā)今天(jīntiān)穿(chuān)的(de)衣服(yīfu)真(zhēn)漂亮(piàoliang)！\nB: 谢谢(xièxie)，这(zhè)是(shì)新(xīn)买(mǎi)的(de)。",
 exampleSrc:"A: The clothes she is wearing today are so beautiful!\nB: Thank you, I just bought them.",
 funFact:"漂亮 covers a broad range: beautiful people, pretty flowers, well-done work (这件事做得漂亮, this was done beautifully). It is a warmer compliment than the more formal 美丽 (měilì)."},

{type:"mc", q:"Which word means SHORT in HEIGHT?",
 opts:["短(duǎn)","矮(ǎi)","瘦(shòu)","小(xiǎo)"],
 ans:"矮(ǎi)",
 hint:"This word is only for vertical height, not length or duration."},

{type:"mc", q:"帅(shuài) comes from which older word?",
 opts:["king","general","scholar","guest"],
 ans:"general",
 hint:"The character originally named a military commander. The idea of authority and cool leadership shifted to 'handsome.'"},

{type:"fb", s:"他(tā)最近(zuìjìn){1}了(le)，大概(dàgài)因为(yīnwèi)工作(gōngzuò)太(tài)忙(máng)没(méi)好(hǎo)好(hǎo)吃饭(chīfàn)。",
 a:["瘦(shòu)"],
 opts:["瘦(shòu)","胖(pàng)","矮(ǎi)","帅(shuài)"],
 hint:"The adjective for losing weight or being slim.",
 sSrc:"He has become {1} recently, probably because work has been too busy for proper meals."},

{type:"match", pairs:[
  {trg:"样子(yàngzi)", src:"appearance"},
  {trg:"矮(ǎi)", src:"short (height)"},
  {trg:"瘦(shòu)", src:"thin"},
  {trg:"胖(pàng)", src:"fat"},
  {trg:"帅(shuài)", src:"handsome"},
  {trg:"漂亮(piàoliang)", src:"pretty"}
]},

{type:"story", speaker:"narrator", mood:"warm", art:"zh-appearance-describe",
 trg:"在(zài)公园(gōngyuán)里(lǐ)，小(xiǎo)美(Měi)看见(kànjiàn)一(yí)个(gè)又(yòu)高(gāo)又(yòu)帅(shuài)的(de)男(nán)孩(hái)。他(tā)的(de)性格(xìnggé)很(hěn)开朗(kāilǎng)，对(duì)每(měi)个(gè)人(rén)都(dōu)很(hěn)热情(rèqíng)。\"他(tā)的(de)样子(yàngzi)真(zhēn)好看(hǎokàn)，\"她(tā)想(xiǎng)，\"心(xīn)也(yě)一定(yídìng)很(hěn)好(hǎo)。\"",
 src:"In the park, Xiao Mei saw a tall and handsome boy. His personality was cheerful, warm to everyone. 'His appearance is really nice,' she thought, 'and his heart must be good too.'"}

]}

]};

export default UNIT_39;
