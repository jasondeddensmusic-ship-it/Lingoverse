// Unit 32: Idioms and Proverbs (Chengyu)
// Level: B2.2 (HSK 4)
// Chinese (Mandarin) V2 format with hanzi+pinyin notation

const UNIT_32 = {
n:32, lang:"zh", srcLang:"en", track:"v2",
title:"成语故事 Chengyu Stories", sub:"Four-Character Idioms",
icon:"📜", level:"B2.2", color:"#7B5EE8",
lessons:[

// ─── L1: Classic Chengyu ───
{id:"zhv2_u32l1", title:"经典成语 Classic Chengyu", icon:"📕", xp:15, board:true, steps:[
{type:"intro", title:"经典成语 Classic Chengyu",
 desc:"Chengyu are four-character idioms, each with a story behind it. They are used constantly in Chinese writing and speech. Learning chengyu is essential for sounding natural at an advanced level.",
 goals:["Understand what 成语 are and how they work","Learn 5 classic chengyu with their origin stories","Use chengyu correctly in sentences"]},

{type:"tip", title:"What Are Chengyu?",
 text:"成语(chéngyǔ) are fixed four-character expressions, usually from ancient stories or classical texts.\n\nKey features:\n1. Always exactly four characters (with rare exceptions).\n2. Cannot be modified. You must use them as-is.\n3. Each has a story origin that explains its meaning.\n4. They add elegance and precision to speech and writing.\n\nUsing chengyu well is a sign of education and cultural literacy. Even native speakers study chengyu throughout school.",
 deepDive:{title:"How Chengyu Work in Sentences",
  text:"Chengyu can function as different parts of speech depending on context:\n\nAs a verb: 他半途而废了 (He gave up halfway)\nAs an adjective: 他是一个脚踏实地的人 (He is a down-to-earth person)\nAs an adverb: 她举一反三地学习 (She learns by analogy)\n\nSome chengyu are more commonly used in writing, others in speech. The ones in this unit are all frequently used in daily conversation."}},

{type:"teach", trg:"成语(chéngyǔ)", src:"four-character idiom", pos:"noun", gender:null,
 note:"成 = complete/accomplished, 语 = language/phrase.\nFixed expressions, almost always four characters.",
 example:"A: 你(nǐ)知道(zhīdào)多少(duōshao)个(gè)成语(chéngyǔ)？\nB: 大约(dàyuē)几百(jǐbǎi)个(gè)吧(ba)。中国(Zhōngguó)成语(chéngyǔ)太(tài)多(duō)了(le)。",
 exampleSrc:"A: How many chengyu do you know?\nB: About several hundred. There are so many Chinese chengyu.",
 funFact:"There are over 30,000 recorded chengyu in Chinese. Most educated adults know several thousand and actively use a few hundred. Chengyu dictionaries are as common as regular dictionaries in Chinese bookstores."},

{type:"teach", trg:"半途而废(bàntú'érfèi)", src:"to give up halfway", pos:"verb", gender:null,
 note:"半 = half, 途 = journey, 而 = and then, 废 = abandon.\nTo start something but not finish it.",
 example:"A: 学(xué)中文(Zhōngwén)不(bù)能(néng)半途而废(bàntú'érfèi)。\nB: 对(duì)，坚持(jiānchí)下去(xiàqu)就(jiù)会(huì)成功(chénggōng)。",
 exampleSrc:"A: You cannot give up learning Chinese halfway.\nB: Right, if you persist you will succeed.",
 funFact:"This chengyu comes from the story of a woman who cut the cloth she was weaving in half to teach her husband a lesson about quitting his studies. Just as cut cloth becomes useless, an abandoned project wastes all prior effort."},

{type:"teach", trg:"一举两得(yìjǔliǎngdé)", src:"to kill two birds with one stone", pos:"verb", gender:null,
 note:"一 = one, 举 = action/move, 两 = two, 得 = gain.\nTo achieve two goals with one action.",
 example:"A: 骑(qí)自行车(zìxíngchē)上班(shàngbān)，一举两得(yìjǔliǎngdé)。\nB: 既(jì)锻炼(duànliàn)了(le)身体(shēntǐ)，又(yòu)不(bú)堵车(dǔchē)。",
 exampleSrc:"A: Cycling to work kills two birds with one stone.\nB: You both exercise and avoid traffic jams.",
 funFact:"The English equivalent involves killing birds, but the Chinese version is more positive: one action, two gains. This reflects a general Chinese preference for framing idioms around achievement rather than destruction."},

{type:"teach", trg:"画蛇添足(huàshétiānzú)", src:"to ruin by adding unnecessary extras", pos:"verb", gender:null,
 note:"画 = draw, 蛇 = snake, 添 = add, 足 = feet.\nTo spoil something by overdoing it.",
 example:"A: 这(zhè)篇(piān)文章(wénzhāng)已经(yǐjīng)很(hěn)好(hǎo)了(le)，别(bié)画蛇添足(huàshétiānzú)。\nB: 好(hǎo)的(de)，我(wǒ)不(bù)再(zài)改(gǎi)了(le)。",
 exampleSrc:"A: This article is already very good, do not overdo it.\nB: Okay, I will not change it anymore.",
 funFact:"The story: in a drinking contest, whoever drew a snake fastest won the wine. One man finished first but, feeling confident, added legs to his snake. Another man finished while he drew legs, pointed out that snakes have no legs, and took the wine."},

{type:"teach", trg:"守株待兔(shǒuzhūdàitù)", src:"to wait passively for luck", pos:"verb", gender:null,
 note:"守 = guard, 株 = tree stump, 待 = wait for, 兔 = rabbit.\nTo rely on luck instead of effort.",
 example:"A: 你(nǐ)不(bù)能(néng)守株待兔(shǒuzhūdàitù)，要(yào)主动(zhǔdòng)找(zhǎo)工作(gōngzuò)。\nB: 你(nǐ)说(shuō)得(de)对(duì)，我(wǒ)明天(míngtiān)就(jiù)开始(kāishǐ)。",
 exampleSrc:"A: You cannot just wait for luck, you need to actively look for work.\nB: You are right, I will start tomorrow.",
 funFact:"A farmer once saw a rabbit run into a tree stump and die. He stopped farming and sat by the stump every day, waiting for another rabbit. Of course, no more rabbits came, and his fields went to ruin. The story teaches that success requires effort, not luck."},

{type:"teach", trg:"对牛弹琴(duìniútánqín)", src:"to cast pearls before swine", pos:"verb", gender:null,
 note:"对 = facing, 牛 = cow, 弹 = play, 琴 = zither.\nTo speak to an audience that cannot understand.",
 example:"A: 跟(gēn)他(tā)解释(jiěshì)这(zhè)个(gè)理论(lǐlùn)就是(jiùshì)对牛弹琴(duìniútánqín)。\nB: 他(tā)对(duì)科学(kēxué)完全(wánquán)没(méi)兴趣(xìngqù)。",
 exampleSrc:"A: Explaining this theory to him is like playing music to a cow.\nB: He has absolutely no interest in science.",
 funFact:"The image is wonderfully visual: a musician playing a beautiful zither piece for a cow that simply keeps chewing grass. Unlike the English 'casting pearls before swine,' the Chinese version emphasizes the mismatch of audience rather than the waste of valuable things."},

{type:"mc", q:"画蛇添足(huàshétiānzú) warns against:",
 opts:["Adding unnecessary things that ruin the result","Giving up too early","Waiting passively for success","Talking to the wrong audience"],
 ans:"Adding unnecessary things that ruin the result",
 hint:"The story involves drawing something extra on a snake. What body part do snakes NOT have?"},

{type:"match", pairs:[
  {trg:"半途而废(bàntú'érfèi)", src:"give up halfway"},
  {trg:"一举两得(yìjǔliǎngdé)", src:"two birds, one stone"},
  {trg:"画蛇添足(huàshétiānzú)", src:"overdo it"},
  {trg:"守株待兔(shǒuzhūdàitù)", src:"wait for luck"},
  {trg:"对牛弹琴(duìniútánqín)", src:"pearls before swine"}
]},

{type:"fb", s:"学(xué)中文(Zhōngwén)不(bù)能(néng){1}。",
 a:["半途而废(bàntú'érfèi)"],
 opts:["半途而废(bàntú'érfèi)","一举两得(yìjǔliǎngdé)","画蛇添足(huàshétiānzú)","守株待兔(shǒuzhūdàitù)"],
 hint:"Which chengyu means to abandon something before completing it?",
 sSrc:"You cannot {1} when learning Chinese."},

{type:"mc", q:"A farmer sat by a tree stump waiting for another rabbit. Which chengyu?",
 opts:["守株待兔(shǒuzhūdàitù)","对牛弹琴(duìniútánqín)","画蛇添足(huàshétiānzú)","半途而废(bàntú'érfèi)"],
 ans:"守株待兔(shǒuzhūdàitù)",
 hint:"The four characters literally mean: guard + stump + wait + rabbit."},

{type:"fb", s:"骑(qí)自行车(zìxíngchē)上班(shàngbān)，{1}。",
 a:["一举两得(yìjǔliǎngdé)"],
 opts:["一举两得(yìjǔliǎngdé)","半途而废(bàntú'érfèi)","对牛弹琴(duìniútánqín)","守株待兔(shǒuzhūdàitù)"],
 hint:"Cycling to work achieves two benefits at once: exercise and avoiding traffic.",
 sSrc:"Cycling to work, {1}."}
]},

// ─── L2: Wisdom and Character Chengyu ───
{id:"zhv2_u32l2", title:"智慧成语 Wisdom Chengyu", icon:"💡", xp:15, board:true, steps:[
{type:"intro", title:"智慧成语 Wisdom Chengyu",
 desc:"Learn chengyu about wisdom, honesty, flexibility, and character. These idioms are especially useful in formal writing, speeches, and thoughtful conversations.",
 goals:["Learn chengyu about adaptability and wisdom","Master idioms about honesty and character","Use multiple chengyu naturally in context"]},

{type:"teach", trg:"入乡随俗(rùxiāngsuísú)", src:"when in Rome, do as the Romans do", pos:"verb", gender:null,
 note:"入 = enter, 乡 = countryside/place, 随 = follow, 俗 = customs.\nAdapt to local customs when visiting.",
 example:"A: 在(zài)日本(Rìběn)吃(chī)面条(miàntiáo)可以(kěyǐ)发出(fāchū)声音(shēngyīn)。\nB: 入乡随俗(rùxiāngsuísú)嘛(ma)。",
 exampleSrc:"A: In Japan you can make noise when eating noodles.\nB: When in Rome, do as the Romans do.",
 funFact:"This chengyu predates the English equivalent by centuries. It appears in texts from the Three Kingdoms period (3rd century AD). The underlying wisdom is universal: respect local customs when you are a guest."},

{type:"teach", trg:"亡羊补牢(wángyángbǔláo)", src:"better late than never", pos:"verb", gender:null,
 note:"亡 = lose, 羊 = sheep, 补 = repair, 牢 = pen/enclosure.\nTo fix a problem after damage, but still worthwhile.",
 example:"A: 现在(xiànzài)开始(kāishǐ)存钱(cúnqián)还(hái)来得及(láidejí)吗(ma)？\nB: 亡羊补牢(wángyángbǔláo)，为时未晚(wéishíwèiwǎn)。",
 exampleSrc:"A: Is it too late to start saving money now?\nB: Better late than never, it is not too late.",
 funFact:"A shepherd lost sheep because his pen had a hole. A neighbor said: repair it now. He did, and lost no more sheep. The lesson: even after a loss, taking corrective action prevents further damage. The full phrase often adds 为时未晚 (it is not yet too late)."},

{type:"teach", trg:"自相矛盾(zìxiāngmáodùn)", src:"self-contradictory", pos:"adj", gender:null,
 note:"自 = self, 相 = mutual, 矛 = spear, 盾 = shield.\nLogically inconsistent with oneself.",
 example:"A: 他(tā)说(shuō)自己(zìjǐ)很(hěn)忙(máng)，但是(dànshì)每(měi)天(tiān)看(kàn)三(sān)个(gè)小时(xiǎoshí)电视(diànshì)。\nB: 真(zhēn)是(shì)自相矛盾(zìxiāngmáodùn)。",
 exampleSrc:"A: He says he is very busy, but watches TV three hours every day.\nB: That is truly self-contradictory.",
 funFact:"This chengyu uses the same 矛盾 (spear and shield) story from Unit 30. The addition of 自相 (self-mutual) specifies that the contradiction is within the same person or argument, not between two different things."},

{type:"teach", trg:"脚踏实地(jiǎotàshídì)", src:"down to earth / grounded", pos:"adj", gender:null,
 note:"脚 = foot, 踏 = step on, 实 = real/solid, 地 = ground.\nPractical and hardworking, not chasing fantasies.",
 example:"A: 成功(chénggōng)需要(xūyào)脚踏实地(jiǎotàshídì)的(de)努力(nǔlì)。\nB: 没有(méiyǒu)捷径(jiéjìng)可以(kěyǐ)走(zǒu)。",
 exampleSrc:"A: Success requires down-to-earth effort.\nB: There are no shortcuts to take.",
 funFact:"This chengyu paints a vivid physical image: feet stepping on solid ground. It is the opposite of 好高骛远 (aiming too high), which describes someone chasing grand ambitions without practical effort."},

{type:"teach", trg:"举一反三(jǔyīfǎnsān)", src:"to learn by analogy / infer broadly", pos:"verb", gender:null,
 note:"举 = raise/cite, 一 = one, 反 = turn/reverse, 三 = three.\nFrom one example, understand three more.",
 example:"A: 好(hǎo)学生(xuéshēng)能(néng)举一反三(jǔyīfǎnsān)。\nB: 对(duì)，不(bù)只是(zhǐshì)记(jì)答案(dá'àn)，而是(érshì)理解(lǐjiě)方法(fāngfǎ)。",
 exampleSrc:"A: Good students can learn by analogy.\nB: Right, not just memorizing answers, but understanding methods.",
 funFact:"This comes directly from Confucius's Analerta. He said: 'I raise one corner, and if the student cannot come back with the other three, I do not continue.' The master expected students to extrapolate, not just memorize."},

{type:"teach", trg:"马马虎虎(mǎmǎhūhū)", src:"so-so / careless", pos:"adj", gender:null,
 note:"马 = horse, 虎 = tiger.\nCasual, sloppy, or mediocre. Very common in daily speech.",
 example:"A: 你(nǐ)的(de)考试(kǎoshì)考(kǎo)得(de)怎么样(zěnmeyàng)？\nB: 马马虎虎(mǎmǎhūhū)吧(ba)，没(méi)考(kǎo)好(hǎo)也(yě)没(méi)考(kǎo)差(chà)。",
 exampleSrc:"A: How did your exam go?\nB: So-so. Not great, not terrible.",
 funFact:"The story goes: a painter drew an animal with a horse head and tiger body. When asked what it was, he said 马马虎虎, carelessly dismissing the question. The word became a description of sloppy, mediocre work. It is one of the most commonly used chengyu in casual speech."},

{type:"teach", trg:"不可思议(bùkěsīyì)", src:"incredible / unbelievable", pos:"adj", gender:null,
 note:"不 = not, 可 = can, 思 = think, 议 = discuss.\nSo amazing it cannot be imagined or discussed.",
 example:"A: 他(tā)三(sān)个(gè)月(yuè)就(jiù)学(xué)会(huì)了(le)流利(liúlì)的(de)中文(Zhōngwén)。\nB: 不可思议(bùkěsīyì)！怎么(zěnme)做到(zuòdào)的(de)？",
 exampleSrc:"A: He became fluent in Chinese in just three months.\nB: Incredible! How did he do it?",
 funFact:"不可思议 originally comes from Buddhist scripture, where it described the incomprehensible power of the Buddha. It migrated into everyday Chinese to describe anything beyond imagination or belief."},

{type:"teach", trg:"实事求是(shíshìqiúshì)", src:"seek truth from facts", pos:"verb", gender:null,
 note:"实 = real, 事 = matter, 求 = seek, 是 = truth.\nTo be practical and honest, based on reality.",
 example:"A: 我们(wǒmen)做(zuò)研究(yánjiū)要(yào)实事求是(shíshìqiúshì)。\nB: 对(duì)，不(bù)能(néng)夸大(kuādà)结果(jiéguǒ)。",
 exampleSrc:"A: We must seek truth from facts in our research.\nB: Right, we cannot exaggerate the results.",
 funFact:"实事求是 became one of the most important political slogans in modern China. It was adopted as a guiding principle of pragmatic governance, contrasting with ideological rigidity. The phrase itself comes from a Han dynasty text about historical research methods."},

{type:"teach", trg:"刻舟求剑(kèzhōuqiújiàn)", src:"to be inflexible / stuck in old ways", pos:"verb", gender:null,
 note:"刻 = carve, 舟 = boat, 求 = seek, 剑 = sword.\nTo fail to adapt to changing circumstances.",
 example:"A: 时代(shídài)变(biàn)了(le)，方法(fāngfǎ)也(yě)要(yào)变(biàn)。\nB: 对(duì)，不(bù)能(néng)刻舟求剑(kèzhōuqiújiàn)。",
 exampleSrc:"A: Times have changed, methods must change too.\nB: Right, we cannot be inflexible.",
 funFact:"A man dropped his sword into a river from a moving boat. He carved a mark on the boat where the sword fell, then later tried to find the sword by diving in at the mark. But the boat had moved! The story mocks people who ignore that circumstances change."},

{type:"mc", q:"马马虎虎(mǎmǎhūhū) is best translated as:",
 opts:["So-so / careless","Incredibly good","Very difficult","Extremely honest"],
 ans:"So-so / careless",
 hint:"This very common expression combines horse (马) and tiger (虎) to describe something mediocre or done carelessly."},

{type:"match", pairs:[
  {trg:"入乡随俗(rùxiāngsuísú)", src:"when in Rome..."},
  {trg:"亡羊补牢(wángyángbǔláo)", src:"better late than never"},
  {trg:"自相矛盾(zìxiāngmáodùn)", src:"self-contradictory"},
  {trg:"脚踏实地(jiǎotàshídì)", src:"down to earth"},
  {trg:"举一反三(jǔyīfǎnsān)", src:"learn by analogy"},
  {trg:"马马虎虎(mǎmǎhūhū)", src:"so-so"},
  {trg:"不可思议(bùkěsīyì)", src:"incredible"},
  {trg:"实事求是(shíshìqiúshì)", src:"seek truth from facts"}
]},

{type:"fb", s:"成功(chénggōng)需要(xūyào){1}的(de)努力(nǔlì)。",
 a:["脚踏实地(jiǎotàshídì)"],
 opts:["脚踏实地(jiǎotàshídì)","马马虎虎(mǎmǎhūhū)","不可思议(bùkěsīyì)","入乡随俗(rùxiāngsuísú)"],
 hint:"Which chengyu describes practical, grounded effort rather than chasing unrealistic dreams?",
 sSrc:"Success requires {1} effort."},

{type:"mc", q:"刻舟求剑(kèzhōuqiújiàn) criticizes someone who:",
 opts:["Fails to adapt to changing circumstances","Gives up too easily","Works too slowly","Talks to the wrong person"],
 ans:"Fails to adapt to changing circumstances",
 hint:"The man carved a mark on a moving boat to find a sword that fell in the water. What did he fail to realize?"},

{type:"fb", s:"我们(wǒmen)做(zuò)研究(yánjiū)要(yào){1}。",
 a:["实事求是(shíshìqiúshì)"],
 opts:["实事求是(shíshìqiúshì)","马马虎虎(mǎmǎhūhū)","半途而废(bàntú'érfèi)","对牛弹琴(duìniútánqín)"],
 hint:"Research demands honesty and practicality. Which chengyu means to base conclusions on facts?",
 sSrc:"We must {1} in our research."},

{type:"mc", q:"Which chengyu would you use when visiting a foreign country and respecting local customs?",
 opts:["入乡随俗(rùxiāngsuísú)","亡羊补牢(wángyángbǔláo)","自相矛盾(zìxiāngmáodùn)","举一反三(jǔyīfǎnsān)"],
 ans:"入乡随俗(rùxiāngsuísú)",
 hint:"This chengyu literally means: enter the village, follow the customs."},

{type:"drag_fill",
 s:"好(hǎo)学生(xuéshēng)能(néng){1}，不(bù)会(huì){2}。",
 blanks:{"1":"举一反三(jǔyīfǎnsān)","2":"半途而废(bàntú'érfèi)"},
 pool:["举一反三(jǔyīfǎnsān)","半途而废(bàntú'érfèi)","马马虎虎(mǎmǎhūhū)","画蛇添足(huàshétiānzú)"],
 hint:"Good students can learn broadly from examples and do not quit before finishing."}
,

{type:"match", pairs:[
  {trg:"成语(chéngyǔ)", src:"four-character idiom"},
  {trg:"刻舟求剑(kèzhōuqiújiàn)", src:"to be inflexible / stuck in old ways"}
]}]},

{id:"zhv2_u32l3_precision", title:"精确表达 Precision Vocabulary", icon:"🎯", xp:15, board:true, steps:[
{type:"intro", title:"Precision Vocabulary", desc:"Eight HSK 4/5 abstract words for describing quantity, structure, and scope with precision.", goals:["Use 数量 and 标准 for measurement","Describe structure with 结构","Express degree with 相当 and 普遍"]},
{type:"teach", trg:"数量(shùliàng)", src:"quantity / amount", pos:"noun", gender:null, phonetic:"shùliàng",
 note:"Compound: 数 (number) + 量 (measure).\nUsed for countable or measurable amounts.\n数量多 = large in number.",
 example:"A: 学生(xuésheng)的(de)数量(shùliàng)是(shì)多少(duōshao)？\nB: 一共(yīgòng)三十(sānshí)个(gè)。",
 exampleSrc:"A: What is the quantity of students?\nB: Thirty in total.",
 funFact:"数量 contrasts with 质量 (quality). Together they form a common pair in HSK 4 reading: 数量和质量 (quantity and quality)."},
{type:"teach", trg:"标准(biāozhǔn)", src:"standard / criterion", pos:"noun", gender:null, phonetic:"biāozhǔn",
 note:"Compound: 标 (mark) + 准 (accurate).\nAlso adjective: 标准的 = standard.\n国际标准 = international standard.",
 example:"A: 这(zhè)个(gè)是(shì)国际(guójì)标准(biāozhǔn)吗(ma)？\nB: 是(shì)。",
 exampleSrc:"A: Is this the international standard?\nB: Yes.",
 funFact:"标准 comes from 标 (post marker) + 准 (aim/accurate) — originally a marker-post that sets the measure. 标准汉语 means Standard Mandarin (Putonghua)."},
{type:"teach", trg:"结构(jiégòu)", src:"structure / framework", pos:"noun", gender:null, phonetic:"jiégòu",
 note:"Compound: 结 (tie) + 构 (build).\nUsed for physical and abstract structures.\n语法结构 = grammatical structure.",
 example:"A: 这(zhè)本(běn)书(shū)的(de)结构(jiégòu)很(hěn)清楚(qīngchu)。\nB: 我(wǒ)也(yě)觉得(juéde)。",
 exampleSrc:"A: The structure of this book is very clear.\nB: I think so too.",
 funFact:"结构 is the go-to word in academic Chinese for any organized framework — from molecules (分子结构) to essays (文章结构) to society (社会结构)."},
{type:"teach", trg:"程度(chéngdù)", src:"degree / extent", pos:"noun", gender:null, phonetic:"chéngdù",
 note:"Compound: 程 (process) + 度 (measure).\n到某种程度 = to a certain degree.\n程度副词 = degree adverb.",
 example:"A: 你(nǐ)的(de)中文(zhōngwén)学(xué)到(dào)什么(shénme)程度(chéngdù)了(le)？\nB: HSK四级(sìjí)。",
 exampleSrc:"A: To what degree have you studied Chinese?\nB: HSK 4.",
 funFact:"程度 as a grammar term refers to adverbs like 很 (very), 非常 (extremely), 比较 (relatively) — all 程度副词."},
{type:"teach", trg:"明确(míngquè)", src:"clear / explicit", pos:"adj", gender:null, phonetic:"míngquè",
 note:"Compound: 明 (bright/clear) + 确 (certain).\nMore formal than 清楚 (common word for clear).\n明确表示 = to state explicitly.",
 example:"A: 老师(lǎoshī)明确(míngquè)告诉(gàosu)我(wǒ)们(men)了(le)。\nB: 好(hǎo)的(de)。",
 exampleSrc:"A: The teacher explicitly told us.\nB: OK.",
 funFact:"明确 is academic register; 清楚 is everyday speech. In writing, 明确 appears in policy and legal texts where precision matters."},
{type:"teach", trg:"相当(xiāngdāng)", src:"rather / quite / equivalent to", pos:"adv", gender:null, phonetic:"xiāngdāng",
 note:"Adverb of degree: 相当+ADJ = quite/rather ADJ.\nAlso 相当于 = equivalent to.\n相当好 = rather good.",
 example:"A: 他(tā)的(de)汉语(hànyǔ)水平(shuǐpíng)相当(xiāngdāng)高(gāo)。\nB: 我(wǒ)知道(zhīdào)。",
 exampleSrc:"A: His Chinese level is quite high.\nB: I know.",
 funFact:"相当 sits between 比较 (relatively) and 非常 (extremely) on the degree scale. In HSK 4 writing, 相当 is the preferred formal alternative to 很."},
{type:"teach", trg:"巨大(jùdà)", src:"huge / enormous", pos:"adj", gender:null, phonetic:"jùdà",
 note:"Compound: 巨 (giant) + 大 (big).\nStronger than 大 — used for impact, change, differences.\n巨大的影响 = enormous influence.",
 example:"A: 这(zhè)件(jiàn)事(shì)的(de)影响(yǐngxiǎng)巨大(jùdà)。\nB: 我(wǒ)同意(tóngyì)。",
 exampleSrc:"A: The impact of this event is enormous.\nB: I agree.",
 funFact:"巨大 is mostly used with abstract nouns (impact, change, difference, pressure). For physical size, Chinese prefers 很大 or 非常大."},
{type:"teach", trg:"普遍(pǔbiàn)", src:"widespread / universal", pos:"adj", gender:null, phonetic:"pǔbiàn",
 note:"Compound: 普 (general) + 遍 (everywhere).\nCommon academic word.\n普遍现象 = widespread phenomenon.",
 example:"A: 这(zhè)是(shì)一(yī)个(gè)普遍(pǔbiàn)的(de)问题(wèntí)。\nB: 确实(quèshí)是(shì)。",
 exampleSrc:"A: This is a widespread problem.\nB: Indeed.",
 funFact:"普遍 is the academic parallel to 常见 (common). Policy documents and research papers use 普遍 almost exclusively for universal traits."},
{type:"tip", title:"Degree Scale: 比较 < 相当 < 非常 < 极其",
 text:"Chinese has a precise ladder for expressing degree:\n比较好 (relatively good) — soft\n相当好 (quite good) — formal, moderate-strong\n非常好 (very good) — everyday strong\n极其好 (extremely good) — highest formal\n\nAcademic essays prefer 相当 and 普遍. Casual speech uses 很 and 非常.",
 deepDive:{title:"Written vs spoken register",
  text:"HSK 5 writing expects precision. Use 明确 over 清楚, 相当 over 很, 巨大 over 大 when discussing abstract impacts.\nSpoken Chinese is simpler — 很 and 清楚 cover most needs."}},
{type:"mc", q:"Which word means widespread or universal?",
 opts:["相当(xiāngdāng)","明确(míngquè)","普遍(pǔbiàn)","巨大(jùdà)"],
 ans:"普遍(pǔbiàn)",
 hint:"Compound of 'general' plus 'everywhere' characters."},
{type:"mc", q:"In '这本书的_很清楚', which word fits?",
 opts:["数量(shùliàng)","标准(biāozhǔn)","结构(jiégòu)","程度(chéngdù)"],
 ans:"结构(jiégòu)",
 hint:"Books have a framework or organization — which word means that?"},
{type:"fb", s:"学生(xuésheng)的(de){1}是(shì)三十(sānshí)。", a:"数量(shùliàng)", opts:["数量(shùliàng)","标准(biāozhǔn)","程度(chéngdù)","结构(jiégòu)"],
 hint:"The answer denotes countable amount — compound of number + measure.", sSrc:"The {1} of students is thirty."},
{type:"fb", s:"他(tā)的(de)中文(zhōngwén){1}高(gāo)。", a:"相当(xiāngdāng)", opts:["相当(xiāngdāng)","巨大(jùdà)","明确(míngquè)","普遍(pǔbiàn)"],
 hint:"Adverb expressing a notable but moderate degree — formal register.", sSrc:"His Chinese {1} is high."},
{type:"fb", s:"这(zhè)件(jiàn)事(shì)的(de)影响(yǐngxiǎng){1}。", a:"巨大(jùdà)", opts:["巨大(jùdà)","相当(xiāngdāng)","普遍(pǔbiàn)","明确(míngquè)"],
 hint:"Adjective stronger than 大 — used for abstract impacts.", sSrc:"The event's impact is {1}."},
{type:"fb", s:"老师(lǎoshī){1}告诉(gàosu)我(wǒ)们(men)了(le)。", a:"明确(míngquè)", opts:["明确(míngquè)","普遍(pǔbiàn)","相当(xiāngdāng)","巨大(jùdà)"],
 hint:"Adverb meaning 'explicitly / clearly' — more formal than 清楚.", sSrc:"The teacher {1} told us."},
{type:"match", pairs:[
  {trg:"数量(shùliàng)", src:"quantity"},
  {trg:"标准(biāozhǔn)", src:"standard"},
  {trg:"结构(jiégòu)", src:"structure"},
  {trg:"程度(chéngdù)", src:"degree"}
]},
{type:"match", pairs:[
  {trg:"明确(míngquè)", src:"clear / explicit"},
  {trg:"相当(xiāngdāng)", src:"rather / quite"},
  {trg:"巨大(jùdà)", src:"huge / enormous"},
  {trg:"普遍(pǔbiàn)", src:"widespread / universal"}
]}
]}

]};

export default UNIT_32;
