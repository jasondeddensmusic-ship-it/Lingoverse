// Unit 17: 把 and 被 Constructions
// Level: B1.1 (HSK 3)
// Chinese (Mandarin) V2 format with hanzi+pinyin notation

const UNIT_17 = {
n:17, lang:"zh", srcLang:"en", track:"v2",
title:"把书放在桌子上 Put the Book on the Table", sub:"Object Manipulation",
icon:"🔄", level:"B1.1", color:"#7B5EE8",
lessons:[

// ─── L1: The 把 Construction ───
{id:"zhv2_u17l1", title:"把 Disposal Construction", icon:"✋", xp:15, board:true, steps:[
{type:"intro", title:"把 Disposal Construction",
 desc:"The 把 construction is one of Chinese's most distinctive grammar patterns. It moves the object BEFORE the verb, emphasizing what happens TO it. Master this and your Chinese will sound much more natural.",
 goals:["Understand why Chinese uses the 把 construction","Form basic 把 sentences with result complements","Use 把 with placement verbs 放 and 拿"]},

{type:"teach", trg:"把(bǎ)", src:"(object marker)", pos:"part", gender:null,
 note:"Moves the object before the verb to emphasize the action done to it.\nPattern: Subject + 把 + Object + Verb + Result.",
 example:"A: 请(qǐng)把(bǎ)门(mén)关(guān)上(shàng)。\nB: 好(hǎo)的(de)，我(wǒ)马上(mǎshàng)关(guān)。",
 exampleSrc:"A: Please close the door.\nB: Okay, I will close it right away.",
 funFact:"把 literally means 'to grab' or 'to hold.' In the 把 construction, you 'grab' the object and do something to it. This grabbing metaphor explains why 把 requires a definite, specific object."},

{type:"tip", title:"How the 把 Construction Works",
 text:"Normal word order:\nSubject + Verb + Object\n我(wǒ)吃(chī)了(le)苹果(píngguǒ)。 I ate the apple.\n\n把 word order:\nSubject + 把 + Object + Verb + Result\n我(wǒ)把(bǎ)苹果(píngguǒ)吃(chī)了(le)。 I ate the apple (up).\n\nWhen to use 把:\n1. The object is changed, moved, or affected\n2. There is a clear result or destination\n3. The object is specific (not 'an apple' but 'THE apple')",
 deepDive:{title:"Why 把 Exists",
  text:"English handles this naturally: 'Put the book ON THE TABLE.' The destination goes after the verb. But Chinese verbs cannot hold both an object AND a destination after them. So Chinese 'grabs' the object with 把 and moves it before the verb, freeing up the post-verb position for the result or destination.\n\n我(wǒ)把(bǎ)书(shū)放(fàng)在(zài)桌子(zhuōzi)上(shàng)。\nI + grab + book + put + on + table + top.\n\nWithout 把, Chinese cannot express 'put X somewhere.' This is not optional decoration, it is structural necessity."}},

{type:"teach", trg:"放(fàng)", src:"to put / to place", pos:"verb", gender:null,
 note:"One of the most common 把 verbs. Always needs a destination.\nOften followed by 在 (at/on) + location.",
 example:"A: 我(wǒ)的(de)手机(shǒujī)在(zài)哪里(nǎlǐ)？\nB: 我(wǒ)把(bǎ)它(tā)放(fàng)在(zài)桌子(zhuōzi)上(shàng)了(le)。",
 exampleSrc:"A: Where is my phone?\nB: I put it on the table.",
 funFact:"放 has a wonderful range of meanings: 'to put,' 'to release,' 'to let go.' 放假 means 'release a holiday' (have a vacation). 放心 means 'put your heart down' (relax/do not worry)."},

{type:"teach", trg:"拿(ná)", src:"to take / to hold", pos:"verb", gender:null,
 note:"To pick up, take, or hold something with your hand.\nOften contrasts with 放: take vs. put.",
 example:"A: 请(qǐng)把(bǎ)那(nà)本(běn)书(shū)拿(ná)给(gěi)我(wǒ)。\nB: 好(hǎo)的(de)，给(gěi)你(nǐ)。",
 exampleSrc:"A: Please take that book and give it to me.\nB: Okay, here you go.",
 funFact:"拿 is one of the few Chinese characters that looks like what it means: the top part shows a hand grasping, and the bottom means 'to combine.' Literally: a hand grabbing and combining."},

{type:"teach", trg:"打开(dǎkāi)", src:"to open", pos:"verb", gender:null,
 note:"Works for doors, windows, books, apps, and containers.\n打 = hit/strike, 开 = open. Literally: strike open.",
 example:"A: 请(qǐng)把(bǎ)窗户(chuānghu)打开(dǎkāi)。\nB: 好(hǎo)的(de)，外面(wàimian)空气(kōngqì)很(hěn)好(hǎo)。",
 exampleSrc:"A: Please open the window.\nB: Okay, the air outside is nice.",
 funFact:"打 (to hit/strike) appears in dozens of action verbs: 打开 (open), 打电话 (make a phone call), 打扫 (clean), 打工 (work a job). Originally it meant striking with the fist, but now it just signals 'doing an action.'"},

{type:"teach", trg:"关(guān)", src:"to close / to turn off", pos:"verb", gender:null,
 note:"Opposite of 打开. Works for doors, lights, devices.\n关 also means 'to relate to' in other contexts.",
 example:"A: 太(tài)冷(lěng)了(le)，请(qǐng)把(bǎ)窗户(chuānghu)关(guān)上(shàng)。\nB: 我(wǒ)马上(mǎshàng)把(bǎ)它(tā)关(guān)上(shàng)。",
 exampleSrc:"A: It is too cold, please close the window.\nB: I will close it right away.",
 funFact:"关 means both 'to close' and 'to concern/relate.' This dual meaning comes from the ancient meaning of a mountain pass (关): it closes the road AND it is a critical point of connection. The Great Wall had many famous 关 (passes)."},

{type:"mc", q:"请(qǐng)___门(mén)关(guān)上(shàng)。 (Please close the door.)",
 opts:["把(bǎ)","被(bèi)","在(zài)","给(gěi)"],
 ans:"把(bǎ)",
 hint:"Which particle moves the object before the verb to show disposal or action upon it?"},

{type:"fb", s:"我(wǒ)把(bǎ)书(shū){1}在(zài)桌子(zhuōzi)上(shàng)了(le)。",
 a:["放(fàng)"],
 opts:["放(fàng)","拿(ná)","关(guān)","打开(dǎkāi)"],
 hint:"Which verb means 'to put' or 'to place' something at a location?",
 sSrc:"I put the book on the table."},

{type:"match", pairs:[
  {trg:"把(bǎ)", src:"object marker (disposal)"},
  {trg:"放(fàng)", src:"to put / to place"},
  {trg:"拿(ná)", src:"to take / to hold"},
  {trg:"打开(dǎkāi)", src:"to open"},
  {trg:"关(guān)", src:"to close / turn off"}
]},

{type:"mc", q:"Which sentence correctly uses 把?",
 opts:["我(wǒ)把(bǎ)窗户(chuānghu)打开(dǎkāi)了(le)。","我(wǒ)打开(dǎkāi)把(bǎ)窗户(chuānghu)了(le)。","把(bǎ)我(wǒ)窗户(chuānghu)打开(dǎkāi)了(le)。","我(wǒ)窗户(chuānghu)打开(dǎkāi)把(bǎ)了(le)。"],
 ans:"我(wǒ)把(bǎ)窗户(chuānghu)打开(dǎkāi)了(le)。",
 hint:"The correct order is: Subject + 把 + Object + Verb + Result."},

{type:"fb", s:"请(qǐng)把(bǎ)那(nà)本(běn)书(shū){1}给(gěi)我(wǒ)。",
 a:["拿(ná)"],
 opts:["拿(ná)","放(fàng)","关(guān)","打开(dǎkāi)"],
 hint:"Which verb means 'to take' or 'to pick up' something with your hand?",
 sSrc:"Please take that book and give it to me."},

{type:"mc", q:"我(wǒ)把(bǎ)灯(dēng)___了(le)。 (I turned off the light.)",
 opts:["关(guān)","打开(dǎkāi)","放(fàng)","拿(ná)"],
 ans:"关(guān)",
 hint:"Which verb means 'to close' or 'to turn off' and is the opposite of 打开?"}
]},

// ─── L2: 被 Passive and More 把 Verbs ───
{id:"zhv2_u17l2", title:"被 Passive Construction", icon:"🔄", xp:15, board:true, steps:[
{type:"intro", title:"被 Passive Construction",
 desc:"Learn the 被 passive, which tells what happened TO something. Also expand your 把 vocabulary with verbs for giving, borrowing, and exchanging.",
 goals:["Form passive sentences with 被","Use 送, 借, and 换 in 把/被 patterns","Compare 把 (active disposal) with 被 (passive)"]},

{type:"teach", trg:"被(bèi)", src:"(passive marker)", pos:"part", gender:null,
 note:"Marks the passive voice: something was done TO the subject.\nPattern: Object + 被 + (Agent) + Verb + Result.",
 example:"A: 我(wǒ)的(de)手机(shǒujī)被(bèi)偷(tōu)了(le)！\nB: 真(zhēn)的(de)吗(ma)？赶快(gǎnkuài)报警(bàojǐng)！",
 exampleSrc:"A: My phone was stolen!\nB: Really? Call the police quickly!",
 funFact:"被 originally carried a negative feeling. 'Being done to' implied being a victim. Modern Chinese uses it more neutrally, but you still hear it more with bad events than good ones."},

{type:"tip", title:"把 vs. 被: Active vs. Passive",
 text:"把 = I do something TO an object (active disposal)\n被 = Something is done TO me (passive)\n\n把 (active): 我(wǒ)把(bǎ)杯子(bēizi)打(dǎ)破(pò)了(le)。\nI broke the cup. (I did it.)\n\n被 (passive): 杯子(bēizi)被(bèi)我(wǒ)打(dǎ)破(pò)了(le)。\nThe cup was broken by me. (It happened to the cup.)\n\nBoth describe the same event, but the perspective shifts.\n把 focuses on the doer. 被 focuses on the receiver.",
 deepDive:{title:"When to Use 被",
  text:"Use 被 when:\n1. The receiver of the action is more important than the doer\n2. The doer is unknown: 钱(qián)被(bèi)偷(tōu)了(le) (The money was stolen)\n3. Something unfortunate happened: 他(tā)被(bèi)批评(pīpíng)了(le) (He was criticized)\n4. In formal writing for neutral events\n\nThe agent (doer) is optional. You can say 被 + verb without naming who did it. This is very common when the doer is unknown or unimportant."}},

{type:"teach", trg:"送(sòng)", src:"to give (as gift) / to send", pos:"verb", gender:null,
 note:"To give as a gift or to deliver/send someone somewhere.\n送 has a warm, generous feeling.",
 example:"A: 这(zhè)是(shì)谁(shéi)送(sòng)给(gěi)你(nǐ)的(de)？\nB: 朋友(péngyou)送(sòng)给(gěi)我(wǒ)的(de)生日(shēngrì)礼物(lǐwù)。",
 exampleSrc:"A: Who gave this to you?\nB: A birthday gift from a friend.",
 funFact:"送 also means 'to see someone off.' 送你回家 means 'walk you home' or 'give you a ride home.' In Chinese culture, physically accompanying someone part of their journey home is a sign of care."},

{type:"teach", trg:"借(jiè)", src:"to lend / to borrow", pos:"verb", gender:null,
 note:"Context determines direction: 借给 = lend to, 借 = borrow from.\nOne word, two directions.",
 example:"A: 你(nǐ)能(néng)把(bǎ)你(nǐ)的(de)笔(bǐ)借(jiè)给(gěi)我(wǒ)吗(ma)？\nB: 当然(dāngrán)可以(kěyǐ)，给(gěi)你(nǐ)。",
 exampleSrc:"A: Can you lend me your pen?\nB: Of course, here you go.",
 funFact:"Chinese uses one word where English needs two. 借 means both 'lend' and 'borrow.' The direction is shown by 给 (to) or 从 (from): 借给你 = lend to you. 向你借 = borrow from you."},

{type:"teach", trg:"换(huàn)", src:"to exchange / to change", pos:"verb", gender:null,
 note:"To swap, exchange, or switch something.\nWorks for money, clothes, opinions, and more.",
 example:"A: 我(wǒ)想(xiǎng)把(bǎ)美元(měiyuán)换(huàn)成(chéng)人民币(rénmínbì)。\nB: 银行(yínháng)可以(kěyǐ)换(huàn)。",
 exampleSrc:"A: I want to exchange dollars for RMB.\nB: The bank can exchange it.",
 funFact:"人民币 (RMB) literally means 'the people's currency.' 人民 = people, 币 = currency. The formal name reflects the founding ideology. Everyday conversation often just says 块 (kuai) for the basic unit."},

{type:"teach", trg:"修(xiū)", src:"to repair / to fix", pos:"verb", gender:null,
 note:"To repair, mend, or fix something broken.\nAlso means 'to build' (roads) or 'to study' (Buddhism).",
 example:"A: 电脑(diànnǎo)坏(huài)了(le)。\nB: 我(wǒ)把(bǎ)它(tā)拿(ná)去(qù)修(xiū)一下(yíxià)。",
 exampleSrc:"A: The computer is broken.\nB: I will take it to get it fixed.",
 funFact:"修 originally meant 'to cultivate' or 'to study deeply.' A Buddhist monk 修行 (cultivates practice). Repairing a machine and cultivating the mind share the same character because both restore something to its proper state."},

{type:"mc", q:"我(wǒ)的(de)钱包(qiánbāo)被(bèi)___了(le)！ (My wallet was ___!)",
 opts:["偷(tōu) stolen","修(xiū) repaired","送(sòng) given","换(huàn) exchanged"],
 ans:"偷(tōu) stolen",
 hint:"被 often appears with negative events. Which unfortunate action happened to the wallet?"},

{type:"fb", s:"请(qǐng)把(bǎ)你(nǐ)的(de)书(shū){1}给(gěi)我(wǒ)，我(wǒ)想(xiǎng)看看(kànkan)。",
 a:["借(jiè)"],
 opts:["借(jiè)","送(sòng)","换(huàn)","修(xiū)"],
 hint:"Which verb means both 'to lend' and 'to borrow,' with direction shown by context?",
 sSrc:"Please lend me your book, I would like to take a look."},

{type:"match", pairs:[
  {trg:"被(bèi)", src:"passive marker"},
  {trg:"送(sòng)", src:"to give (gift) / send"},
  {trg:"借(jiè)", src:"to lend / borrow"},
  {trg:"换(huàn)", src:"to exchange / change"},
  {trg:"修(xiū)", src:"to repair / fix"}
]},

{type:"mc", q:"我(wǒ)想(xiǎng)把(bǎ)美元(měiyuán)___成(chéng)欧元(ōuyuán)。",
 opts:["换(huàn)","借(jiè)","送(sòng)","修(xiū)"],
 ans:"换(huàn)",
 hint:"Which verb means 'to exchange' one thing for another?"},

{type:"fb", s:"这(zhè)个(ge)礼物(lǐwù)是(shì)妈妈(māma){1}给(gěi)我(wǒ)的(de)。",
 a:["送(sòng)"],
 opts:["送(sòng)","借(jiè)","换(huàn)","拿(ná)"],
 hint:"Which verb means 'to give as a gift'?",
 sSrc:"This gift was given to me by mom."},

{type:"mc", q:"杯子(bēizi)被(bèi)打(dǎ)破(pò)了(le)。 What happened?",
 opts:["The cup was broken","The cup was repaired","The cup was given away","The cup was exchanged"],
 ans:"The cup was broken",
 hint:"被 marks the passive. 打破 means 'hit-___.' What happened to the ___?"},

{type:"drag_fill",
 s:"电脑(diànnǎo)坏(huài)了(le)，我(wǒ){1}它(tā)拿(ná)去(qù){2}了(le)。",
 blanks:{"1":"把(bǎ)","2":"修(xiū)"},
 pool:["把(bǎ)","被(bèi)","修(xiū)","送(sòng)"],
 hint:"The computer broke, so I took it to get repaired. Use the active disposal marker and the repair verb."}
]},

// ─── L3: Resultative Complements with 把/被 ───
{id:"zhv2_u17l3", title:"Result Complements", icon:"✅", xp:15, board:true, steps:[
{type:"intro", title:"Result Complements with 把 and 被",
 desc:"The 把 and 被 constructions almost always require a result after the verb. Learn the key result complements that complete these patterns: clean, tidy, broken, lost.",
 goals:["Use result complements 干净, 整齐, 破 after verbs","Express accidental loss with 丢","Use 弄 as a casual all-purpose action verb"]},

{type:"teach", trg:"干净(gānjìng)", src:"clean", pos:"adj", gender:null,
 note:"Often used as a result complement after verbs: wash clean, wipe clean.\n干 = dry, 净 = clean/pure.",
 example:"A: 盘子(pánzi)洗(xǐ)干净(gānjìng)了(le)吗(ma)？\nB: 我(wǒ)已经(yǐjīng)把(bǎ)盘子(pánzi)洗(xǐ)干净(gānjìng)了(le)。",
 exampleSrc:"A: Are the dishes washed clean?\nB: I have already washed the dishes clean.",
 funFact:"干净 combines 干 (dry) and 净 (pure/clean). The idea: something truly clean is completely dry and spotless. Chinese homes traditionally valued keeping floors dry as a sign of cleanliness."},

{type:"teach", trg:"整齐(zhěngqí)", src:"tidy / neat", pos:"adj", gender:null,
 note:"Describes orderly arrangement. Often a result complement: arrange neatly.\n整 = whole/neat, 齐 = even/aligned.",
 example:"A: 房间(fángjiān)太(tài)乱(luàn)了(le)。\nB: 我(wǒ)把(bǎ)东西(dōngxi)摆(bǎi)整齐(zhěngqí)了(le)。",
 exampleSrc:"A: The room is too messy.\nB: I arranged everything neatly.",
 funFact:"齐 originally depicted grain growing to the same height in a field. Things aligned perfectly. From this farming image comes the modern meaning: orderly, even, and uniform."},

{type:"teach", trg:"破(pò)", src:"broken / torn", pos:"adj", gender:null,
 note:"Describes physical damage: broken, torn, cracked.\nUsed as result complement: 打破 = hit and break.",
 example:"A: 谁(shéi)把(bǎ)杯子(bēizi)打(dǎ)破(pò)了(le)？\nB: 对不起(duìbuqǐ)，是(shì)我(wǒ)不(bù)小心(xiǎoxīn)打(dǎ)破(pò)的(de)。",
 exampleSrc:"A: Who broke the cup?\nB: Sorry, I accidentally broke it.",
 funFact:"破 shows a stone radical on the left and skin on the right. The original meaning: a stone piercing through skin. From 'pierced' came 'broken,' and from there 'to break through' (breakthrough = 突破)."},

{type:"teach", trg:"丢(diū)", src:"to lose / to throw away", pos:"verb", gender:null,
 note:"Both 'to lose' (accidentally) and 'to discard' (intentionally).\nContext determines which meaning.",
 example:"A: 我(wǒ)把(bǎ)钥匙(yàoshi)丢(diū)了(le)！\nB: 你(nǐ)再(zài)找找(zhǎozhao)，也许(yěxǔ)在(zài)包(bāo)里(lǐ)。",
 exampleSrc:"A: I lost my keys!\nB: Look again, maybe they are in your bag.",
 funFact:"丢脸 means 'lose face' and 丢人 means 'lose person (dignity).' Both describe public embarrassment. Face (面子) is one of the most important social concepts in Chinese culture."},

{type:"teach", trg:"弄(nòng)", src:"to make / to do (casual)", pos:"verb", gender:null,
 note:"An all-purpose casual verb meaning 'to do/make/handle.'\nOften implies accidental or clumsy action.",
 example:"A: 你(nǐ)怎么(zěnme)把(bǎ)衣服(yīfu)弄(nòng)脏(zāng)了(le)？\nB: 不(bù)小心(xiǎoxīn)弄(nòng)的(de)。",
 exampleSrc:"A: How did you get your clothes dirty?\nB: I did it by accident.",
 funFact:"弄 is the Swiss Army knife of Chinese verbs. It can replace almost any action verb in casual speech. 弄坏 = break, 弄丢 = lose, 弄脏 = make dirty, 弄好 = fix up. If you forget the specific verb, 弄 is your rescue word."},

{type:"tip", title:"Result Complements with 把",
 text:"把 sentences almost always need a result after the verb. The result shows WHAT HAPPENED to the object:\n\n把(bǎ) + Object + Verb + Result\n\n把(bǎ)衣服(yīfu)洗(xǐ)干净(gānjìng)了(le) = washed the clothes clean\n把(bǎ)房间(fángjiān)打扫(dǎsǎo)干净(gānjìng)了(le) = cleaned the room clean\n把(bǎ)书(shū)放(fàng)整齐(zhěngqí)了(le) = placed the books neatly\n把(bǎ)杯子(bēizi)打(dǎ)破(pò)了(le) = broke the cup\n把(bǎ)钥匙(yàoshi)弄(nòng)丢(diū)了(le) = lost the keys",
 deepDive:{title:"Why 把 Needs a Result",
  text:"A bare 把 sentence sounds incomplete:\n\n我把书放了 (I put the book...) Where? This feels unfinished.\n我把书放在桌子上了 (I put the book on the table.) Now it is complete.\n\nThe rule: 把 sentences must tell us the outcome. The verb alone is not enough. You need:\n1. A location: 放在桌子上 (put on the table)\n2. A state change: 洗干净 (wash clean)\n3. A completion marker: 吃完 (eat finished)\n4. A direction: 拿走 (take away)\n\nThink of it this way: 把 announces 'something will happen to this object.' The listener needs to hear WHAT happened."}},

{type:"mc", q:"我(wǒ)把(bǎ)衣服(yīfu)洗(xǐ)___了(le)。 (I washed the clothes ___.)",
 opts:["干净(gānjìng)","整齐(zhěngqí)","破(pò)","丢(diū)"],
 ans:"干净(gānjìng)",
 hint:"After washing, clothes should be ___. Which adjective means 'clean'?"},

{type:"fb", s:"谁(shéi)把(bǎ)窗户(chuānghu)打(dǎ){1}了(le)？",
 a:["破(pò)"],
 opts:["破(pò)","干净(gānjìng)","整齐(zhěngqí)","丢(diū)"],
 hint:"Someone hit the window and it is now damaged. Which word means 'broken'?",
 sSrc:"Who broke the window?"},

{type:"match", pairs:[
  {trg:"干净(gānjìng)", src:"clean"},
  {trg:"整齐(zhěngqí)", src:"tidy / neat"},
  {trg:"破(pò)", src:"broken / torn"},
  {trg:"丢(diū)", src:"to lose / throw away"},
  {trg:"弄(nòng)", src:"to make / do (casual)"}
]},

{type:"mc", q:"我(wǒ)不(bù)小心(xiǎoxīn)把(bǎ)钥匙(yàoshi)弄(nòng)___了(le)。",
 opts:["丢(diū)","干净(gānjìng)","整齐(zhěngqí)","破(pò)"],
 ans:"丢(diū)",
 hint:"You accidentally did something to your keys, and now you cannot find them. Which result means 'lost'?"},

{type:"fb", s:"请(qǐng)把(bǎ)你(nǐ)的(de)房间(fángjiān)收拾(shōushi){1}。",
 a:["整齐(zhěngqí)"],
 opts:["整齐(zhěngqí)","干净(gānjìng)","破(pò)","丢(diū)"],
 hint:"Please tidy your room. Which result complement means 'neat' or 'tidy'?",
 sSrc:"Please tidy up your room."},

{type:"mc", q:"她(tā)把(bǎ)衣服(yīfu)弄(nòng)脏(zāng)了(le)。 What happened?",
 opts:["She got her clothes dirty","She washed her clothes","She lost her clothes","She repaired her clothes"],
 ans:"She got her clothes dirty",
 hint:"弄 is the casual all-purpose verb. 脏 means '___.' What did ___ do to the ___?"},

{type:"drag_fill",
 s:"他(tā)不(bù)小心(xiǎoxīn){1}手机(shǒujī){2}了(le)。",
 blanks:{"1":"把(bǎ)","2":"弄(nòng)丢(diū)"},
 pool:["把(bǎ)","被(bèi)","弄(nòng)丢(diū)","弄(nòng)破(pò)"],
 hint:"He accidentally lost his phone. Use the disposal marker and the casual verb for 'lost.'"},

{type:"mc", q:"被(bèi) is more commonly associated with:",
 opts:["Unfortunate or negative events","Happy celebrations","Polite requests","Future plans"],
 ans:"Unfortunate or negative events",
 hint:"Historically this passive marker carried a sense of being subjected to something. What kind of ___?"},

{type:"fb", s:"花瓶(huāpíng)被(bèi)猫(māo)打(dǎ){1}了(le)。",
 a:["破(pò)"],
 opts:["破(pò)","干净(gānjìng)","整齐(zhěngqí)","丢(diū)"],
 hint:"The vase was knocked over by the cat. What result happened to the vase?",
 sSrc:"The vase was broken by the cat."}
]}

]};

export default UNIT_17;
