// Unit 9: Health and Body
// Level: A2.1 (HSK 2)
// Chinese (Mandarin) V2 format with hanzi+pinyin notation

const UNIT_09 = {
n:9, lang:"zh", srcLang:"en", track:"v2",
title:"我不舒服", sub:"Health and the Body",
icon:"🏥", level:"A2.1", color:"#7B5EE8",
lessons:[

// ─── L1: Body Parts ───
{id:"zhv2_u9l1", title:"身体 The Body", icon:"🧍", xp:15, board:true, steps:[
{type:"intro", title:"身体 The Body",
 desc:"Learn the names of common body parts in Chinese. These words are essential for describing how you feel and visiting a doctor.",
 goals:["Name key body parts: head, eyes, mouth, hands, feet","Understand 身体 as both 'body' and 'health'","Build vocabulary for describing physical sensations"]},

{type:"teach", trg:"身体(shēntǐ)", src:"body / health", pos:"noun", gender:null,
 note:"身 (body) + 体 (form/substance). Has two meanings:\n1. Physical body. 2. Health/physical condition.",
 example:"A: 你(nǐ)身体(shēntǐ)好(hǎo)吗(ma)？\nB: 我(wǒ)身体(shēntǐ)很(hěn)好(hǎo)，谢谢(xièxie)。",
 exampleSrc:"A: How is your health?\nB: My health is very good, thank you.",
 funFact:"身体好吗 is a common greeting among older Chinese, especially for people you have not seen in a while. It literally asks about the body but functions like 'How are you doing?' Health is a core part of Chinese social care."},

{type:"teach", trg:"头(tóu)", src:"head", pos:"noun", gender:null,
 note:"Second tone. One of the most common body parts in Chinese.\nAlso used as a suffix for many words.",
 example:"A: 你(nǐ)的(de)头(tóu)怎么(zěnme)了(le)？\nB: 我(wǒ)的(de)头(tóu)有(yǒu)一点儿(yìdiǎnr)疼(téng)。",
 exampleSrc:"A: What happened to your head?\nB: My head hurts a little.",
 funFact:"头 appears in many compound words: 头发 (hair, literally 'head hair'), 前头 (in front), 后头 (behind), 石头 (stone), 木头 (wood). As a suffix, it often creates nouns from other word types."},

{type:"teach", trg:"眼睛(yǎnjing)", src:"eyes", pos:"noun", gender:null,
 note:"Third tone + neutral tone. 眼 (eye) + 睛 (eyeball).\nBoth characters contain the 目 (eye) radical.",
 example:"A: 你(nǐ)的(de)眼睛(yǎnjing)很(hěn)大(dà)！\nB: 谢谢(xièxie)！",
 exampleSrc:"A: Your eyes are very big!\nB: Thank you!",
 funFact:"In Chinese culture, big eyes (大眼睛) are considered beautiful. Both characters 眼 and 睛 contain the radical 目, which is a pictograph of an eye turned sideways. Ancient oracle bone script shows it clearly as an eye shape."},

{type:"teach", trg:"嘴(zuǐ)", src:"mouth", pos:"noun", gender:null,
 note:"Third tone. Can mean mouth or beak.\nThe more formal compound is 嘴巴(zuǐba).",
 example:"A: 请(qǐng)张(zhāng)开(kāi)嘴(zuǐ)。\nB: 好(hǎo)的(de)。",
 exampleSrc:"A: Please open your mouth.\nB: Okay.",
 funFact:"嘴 has the mouth radical (口) on the left, which makes sense. The character 口 itself is a pictograph of an open mouth. You will see 口 in many speech-related characters: 吃 (eat), 喝 (drink), 叫 (call)."},

{type:"teach", trg:"手(shǒu)", src:"hand", pos:"noun", gender:null,
 note:"Third tone. A very common character that also serves as a radical.\nFound in many action-related characters.",
 example:"A: 请(qǐng)洗(xǐ)手(shǒu)。\nB: 好(hǎo)的(de)，我(wǒ)去(qù)洗(xǐ)手(shǒu)。",
 exampleSrc:"A: Please wash your hands.\nB: Okay, I will go wash my hands.",
 funFact:"手 is a pictograph of a hand with five fingers. As a radical (扌), it appears in hundreds of characters related to hand actions: 打 (hit), 拉 (pull), 推 (push), 拿 (hold), 找 (look for). Spotting this radical helps you guess meanings."},

{type:"teach", trg:"脚(jiǎo)", src:"foot / leg", pos:"noun", gender:null,
 note:"Third tone. Refers to the foot specifically.\n脚 has the flesh/body radical (月) on the left.",
 example:"A: 我(wǒ)的(de)脚(jiǎo)很(hěn)疼(téng)。\nB: 走(zǒu)了(le)太(tài)多(duō)了(le)吧(ba)？",
 exampleSrc:"A: My feet really hurt.\nB: You walked too much, right?",
 funFact:"Many body part characters share the 月 radical, which originally depicted a piece of flesh (肉). 脚 (foot), 脸 (face), 脑 (brain), 肚 (stomach) all have it. When you see 月 on the left of a character, think 'body part.'"},

{type:"mc", q:"你(nǐ)身体(shēntǐ)好(hǎo)吗(ma)？ is asking about your:",
 opts:["Name","Age","Health","Family"],
 ans:"Health",
 hint:"身体 means both 'body' and 'health.' This question is about your physical well-being."},

{type:"match", pairs:[
  {trg:"头(tóu)", src:"head"},
  {trg:"眼睛(yǎnjing)", src:"eyes"},
  {trg:"嘴(zuǐ)", src:"mouth"},
  {trg:"手(shǒu)", src:"hand"},
  {trg:"脚(jiǎo)", src:"foot"}
]},

{type:"fb", s:"请(qǐng)洗(xǐ){1}。",
 a:["手(shǒu)"],
 opts:["手(shǒu)","头(tóu)","脚(jiǎo)","嘴(zuǐ)"],
 hint:"Before eating, you are asked to wash which body part?",
 sSrc:"Please wash your {1}."},

{type:"mc", q:"Which radical (月) appears in many body part characters?",
 opts:["The fire radical","The water radical","The flesh/body radical","The sun radical"],
 ans:"The flesh/body radical",
 hint:"This radical originally depicted meat or flesh. It appears on the left side of characters like 脚, 脸, and 脑."},

{type:"fb", s:"你(nǐ)的(de){1}很(hěn)大(dà)！",
 a:["眼睛(yǎnjing)"],
 opts:["眼睛(yǎnjing)","嘴(zuǐ)","手(shǒu)","头(tóu)"],
 hint:"In Chinese culture, big ones of these are considered a compliment. They let you see the world.",
 sSrc:"Your {1} are very big!"},

{type:"mc", q:"我(wǒ)的(de)脚(jiǎo)很(hěn)疼(téng)。 What hurts?",
 opts:["My hand","My head","My foot","My mouth"],
 ans:"My foot",
 hint:"脚 is the body part at the bottom of your legs, used for walking and standing."},

{type:"match", pairs:[
  {trg:"身体(shēntǐ)", src:"body / health"},
  {trg:"头(tóu)", src:"head"},
  {trg:"手(shǒu)", src:"hand"},
  {trg:"脚(jiǎo)", src:"foot"}
]}
]},

// ─── L2: Feeling Sick ───
{id:"zhv2_u9l2", title:"我不舒服 I Don't Feel Well", icon:"🤒", xp:15, board:true, steps:[
{type:"intro", title:"我不舒服 I Don't Feel Well",
 desc:"Learn to describe symptoms and illnesses in Chinese. These phrases are crucial for communicating health problems to others or at a clinic.",
 goals:["Describe how you feel with 舒服 and 疼","Talk about common illnesses: cold, fever","Use 生病, 感冒, and 发烧"]},

{type:"teach", trg:"舒服(shūfu)", src:"comfortable / feeling well", pos:"adj", gender:null,
 note:"First tone + neutral tone. Often used in the negative: 不舒服.\n不舒服 is the go-to phrase for feeling unwell.",
 example:"A: 你(nǐ)怎么(zěnme)了(le)？\nB: 我(wǒ)不(bù)舒服(shūfu)。",
 exampleSrc:"A: What is wrong?\nB: I do not feel well.",
 funFact:"舒服 literally means 'stretch out comfortably.' 舒 means 'to unfold/stretch' and 服 means 'clothing/to submit.' When you are 舒服, you feel so relaxed that you can stretch out freely."},

{type:"teach", trg:"疼(téng)", src:"painful / to ache", pos:"adj", gender:null,
 note:"Second tone. Placed after the body part that hurts.\nPattern: body part + 疼 = that part hurts.",
 example:"A: 哪儿(nǎr)疼(téng)？\nB: 头(tóu)疼(téng)，也(yě)嘴(zuǐ)疼(téng)。",
 exampleSrc:"A: Where does it hurt?\nB: My head hurts, and my mouth hurts too.",
 funFact:"疼 has the illness radical (疒) on the outside, which looks like a person lying on a bed. Many illness-related characters share this radical: 病 (sick), 痛 (pain), 疲 (tired), 癌 (cancer). The radical itself tells a story of someone bedridden."},

{type:"teach", trg:"生病(shēngbìng)", src:"to be sick / to fall ill", pos:"verb", gender:null,
 note:"生 (to produce/give rise to) + 病 (illness).\nA verb phrase meaning to become ill.",
 example:"A: 他(tā)怎么(zěnme)没(méi)来(lái)？\nB: 他(tā)生病(shēngbìng)了(le)。",
 exampleSrc:"A: Why did he not come?\nB: He is sick.",
 funFact:"生 means 'to give birth to' or 'to produce.' So 生病 literally means 'to produce illness.' Chinese views sickness as something that arises within you, not something that attacks from outside."},

{type:"teach", trg:"感冒(gǎnmào)", src:"cold (illness) / to catch a cold", pos:"noun", gender:null,
 note:"Third tone + fourth tone. Both a noun and a verb.\n感冒了 = caught a cold (with 了 for completed action).",
 example:"A: 你(nǐ)怎么(zěnme)了(le)？\nB: 我(wǒ)感冒(gǎnmào)了(le)，头(tóu)疼(téng)。",
 exampleSrc:"A: What is wrong?\nB: I caught a cold, my head hurts.",
 funFact:"感 means 'to feel/sense' and 冒 means 'to emit/risk.' The combination suggests your body senses something and reacts. In Chinese medicine, colds are traditionally blamed on wind (风) entering the body."},

{type:"teach", trg:"发烧(fāshāo)", src:"to have a fever", pos:"verb", gender:null,
 note:"发 (to emit/send out) + 烧 (to burn). Literally: emit heat.\nUsed as a verb: 我发烧了 = I have a fever.",
 example:"A: 你(nǐ)发烧(fāshāo)了(le)吗(ma)？\nB: 发烧(fāshāo)了(le)，三十八(sānshíbā)度(dù)。",
 exampleSrc:"A: Do you have a fever?\nB: Yes, 38 degrees.",
 funFact:"China uses Celsius, so 38 degrees is a low fever and 40 degrees is dangerously high. When a Chinese person tells you their temperature, remember it is Celsius. 37 degrees Celsius (98.6 F) is normal body temperature."},

{type:"teach", trg:"药(yào)", src:"medicine", pos:"noun", gender:null,
 note:"Fourth tone. Covers all types of medicine: pills, liquid, herbal.\nThe grass radical (艹) on top hints at herbal origins.",
 example:"A: 你(nǐ)吃(chī)药(yào)了(le)吗(ma)？\nB: 吃(chī)了(le)，但是(dànshì)还是(háishi)不(bù)舒服(shūfu)。",
 exampleSrc:"A: Did you take medicine?\nB: I did, but I still feel unwell.",
 funFact:"Traditional Chinese medicine (中药) uses herbs, minerals, and animal products. The character 药 has the grass radical (艹) because ancient medicines were plant-based. Western medicine is called 西药 (west medicine)."},

{type:"tip", title:"Describing Symptoms",
 text:"Common symptom patterns:\n\n头(tóu)疼(téng) = headache\n嘴(zuǐ)疼(téng) = mouth hurts\n手(shǒu)疼(téng) = hand hurts\n脚(jiǎo)疼(téng) = foot hurts\n\nGeneral illness:\n我(wǒ)不(bù)舒服(shūfu)。 = I do not feel well.\n我(wǒ)生病(shēngbìng)了(le)。 = I am sick.\n我(wǒ)感冒(gǎnmào)了(le)。 = I caught a cold.\n我(wǒ)发烧(fāshāo)了(le)。 = I have a fever.\n\nThe pattern is simple: body part + 疼 for pain, or illness word + 了 for onset.",
 deepDive:{title:"Visiting a Doctor in China",
  text:"At a Chinese hospital or clinic, you will typically be asked:\n\n你哪儿不舒服？ Where do you feel unwell?\n你怎么了？ What is wrong?\n发烧吗？ Do you have a fever?\n\nChinese hospitals work differently from Western ones. You usually go directly to a specialist department rather than a general practitioner. Many people also visit traditional Chinese medicine doctors (中医) for herbs and acupuncture alongside Western medicine."}},

{type:"mc", q:"我(wǒ)不(bù)舒服(shūfu)。 What is this person saying?",
 opts:["I am very happy","I do not feel well","I am hungry","I am busy"],
 ans:"I do not feel well",
 hint:"舒服 means comfortable or feeling well. Adding 不 before it negates the feeling."},

{type:"match", pairs:[
  {trg:"舒服(shūfu)", src:"comfortable"},
  {trg:"疼(téng)", src:"painful / ache"},
  {trg:"生病(shēngbìng)", src:"to be sick"},
  {trg:"感冒(gǎnmào)", src:"cold (illness)"},
  {trg:"发烧(fāshāo)", src:"to have fever"}
]},

{type:"fb", s:"我(wǒ){1}了(le)，头(tóu)疼(téng)。",
 a:["感冒(gǎnmào)"],
 opts:["感冒(gǎnmào)","发烧(fāshāo)","舒服(shūfu)","生病(shēngbìng)"],
 hint:"You have a headache and typical cold symptoms. Which specific illness word describes catching a cold?",
 sSrc:"I caught a {1}, my head hurts."},

{type:"mc", q:"头(tóu)疼(téng) means:",
 opts:["Headache","Stomachache","Sore throat","Backache"],
 ans:"Headache",
 hint:"头 is the word for 'head' and 疼 means 'hurts.' Put them together."},

{type:"fb", s:"你(nǐ)吃(chī){1}了(le)吗(ma)？",
 a:["药(yào)"],
 opts:["药(yào)","菜(cài)","饭(fàn)","水(shuǐ)"],
 hint:"When you are sick, a doctor asks if you have taken something to help you get better.",
 sSrc:"Did you take {1}?"},

{type:"mc", q:"他(tā)发烧(fāshāo)了(le)，三十九(sānshíjiǔ)度(dù)。 How serious is this fever?",
 opts:["No fever at all","A mild fever","A significant fever","Normal temperature"],
 ans:"A significant fever",
 hint:"Normal is 37 C. This reading is two degrees above normal, which indicates a notable fever."},

{type:"fb", s:"他(tā)没(méi)来(lái)，他(tā){1}了(le)。",
 a:["生病(shēngbìng)"],
 opts:["生病(shēngbìng)","感冒(gǎnmào)","发烧(fāshāo)","舒服(shūfu)"],
 hint:"He is absent because he became ill. Which general verb phrase means 'to fall sick'?",
 sSrc:"He did not come, he {1}."},

{type:"match", pairs:[
  {trg:"药(yào)", src:"medicine"},
  {trg:"疼(téng)", src:"painful"},
  {trg:"发烧(fāshāo)", src:"fever"},
  {trg:"感冒(gǎnmào)", src:"cold (illness)"}
]}
]},

// ─── L3: Daily Health Routines ───
{id:"zhv2_u9l3", title:"休息一下 Take a Break", icon:"😴", xp:15, board:true, steps:[
{type:"intro", title:"休息一下 Take a Break",
 desc:"Learn words for daily health routines: sleeping, resting, waking up, and feeling tired. These verbs are part of everyday conversation in Chinese.",
 goals:["Use 睡觉 (sleep), 起床 (get up), and 休息 (rest)","Describe being tired with 累","Practice a full doctor visit dialogue"]},

{type:"teach", trg:"累(lèi)", src:"tired", pos:"adj", gender:null,
 note:"Fourth tone. Describes physical or mental exhaustion.\nVery common in daily conversation.",
 example:"A: 你(nǐ)累(lèi)不(bu)累(lèi)？\nB: 很(hěn)累(lèi)，我(wǒ)想(xiǎng)休息(xiūxi)。",
 exampleSrc:"A: Are you tired?\nB: Very tired, I want to rest.",
 funFact:"累 is one of the most frequently used adjectives among Chinese workers and students. The common complaint 好累啊 (so tired!) is heard everywhere in China, from offices to classrooms to chat messages."},

{type:"teach", trg:"休息(xiūxi)", src:"to rest", pos:"verb", gender:null,
 note:"休 (to rest) + 息 (to breathe/cease). Second syllable is neutral tone.\nBoth a verb and a noun.",
 example:"A: 你(nǐ)应该(yīnggāi)休息(xiūxi)一下(yíxià)。\nB: 好(hǎo)的(de)，我(wǒ)休息(xiūxi)一下(yíxià)。",
 exampleSrc:"A: You should take a break.\nB: Okay, I will rest a bit.",
 funFact:"休 shows a person (亻) leaning against a tree (木). Imagine a farmer taking a break under a tree. 息 means 'to breathe' or 'to cease.' Resting is literally a person under a tree catching their breath."},

{type:"teach", trg:"睡觉(shuìjiào)", src:"to sleep", pos:"verb", gender:null,
 note:"Fourth tone + fourth tone. 睡 (to sleep) + 觉 (sleep/nap).\nThe full verb phrase for sleeping.",
 example:"A: 你(nǐ)昨天(zuótiān)几(jǐ)点(diǎn)睡觉(shuìjiào)的(de)？\nB: 十一(shíyī)点(diǎn)睡觉(shuìjiào)的(de)。",
 exampleSrc:"A: What time did you go to sleep last night?\nB: I went to sleep at eleven.",
 funFact:"睡 has the eye radical (目) on the left, which seems odd for sleep. But the original meaning was 'to droop the eyes.' When your eyes droop and close, you are falling asleep. The radical makes perfect sense once you know the etymology."},

{type:"teach", trg:"起床(qǐchuáng)", src:"to get up / to get out of bed", pos:"verb", gender:null,
 note:"起 (to rise) + 床 (bed). Literally: rise from bed.\nThe opposite action of going to sleep.",
 example:"A: 你(nǐ)今天(jīntiān)几(jǐ)点(diǎn)起床(qǐchuáng)的(de)？\nB: 七(qī)点(diǎn)起床(qǐchuáng)的(de)。",
 exampleSrc:"A: What time did you get up today?\nB: I got up at seven.",
 funFact:"Chinese morning greetings sometimes reference getting up. 起来了吗 (Are you up?) is a casual way to check if someone is awake. Morning is literally called 早上, and the greeting 早 (early!) is like saying 'You are up early!'"},

{type:"tip", title:"Daily Routine Verbs",
 text:"A typical day in Chinese:\n\n起床(qǐchuáng) = get up\n吃(chī)早饭(zǎofàn) = eat breakfast\n去(qù)学校(xuéxiào) = go to school\n回(huí)家(jiā) = go home\n休息(xiūxi) = rest\n睡觉(shuìjiào) = sleep\n\nTime expressions pair naturally with these:\n七(qī)点(diǎn)起床(qǐchuáng) = get up at 7\n十一(shíyī)点(diǎn)睡觉(shuìjiào) = sleep at 11\n\nNotice how Chinese verbs never change form for tense. 了 or time words handle past/future.",
 deepDive:{title:"Chinese Views on Health",
  text:"Traditional Chinese health philosophy emphasizes balance and prevention. Key concepts:\n\n多休息 (rest more) is the most common health advice.\n多喝水 (drink more water) is prescribed for almost everything.\n不要熬夜 (do not stay up late) reflects the belief that sleep patterns directly affect health.\n\nChinese medicine also connects emotions to organs: anger harms the liver, worry harms the spleen, sadness harms the lungs. This holistic view treats body and mind as one system."}},

{type:"mc", q:"你(nǐ)累(lèi)不(bu)累(lèi)？ is asking:",
 opts:["Are you hungry?","Are you tired?","Are you sick?","Are you busy?"],
 ans:"Are you tired?",
 hint:"累 describes a feeling of exhaustion. The A-not-A pattern asks a yes/no question."},

{type:"match", pairs:[
  {trg:"累(lèi)", src:"tired"},
  {trg:"休息(xiūxi)", src:"to rest"},
  {trg:"睡觉(shuìjiào)", src:"to sleep"},
  {trg:"起床(qǐchuáng)", src:"to get up"}
]},

{type:"fb", s:"我(wǒ)很(hěn)累(lèi)，想(xiǎng){1}。",
 a:["休息(xiūxi)"],
 opts:["休息(xiūxi)","睡觉(shuìjiào)","起床(qǐchuáng)","生病(shēngbìng)"],
 hint:"You are tired and want to take a break for a short while. Which verb means 'to rest'?",
 sSrc:"I am very tired, I want to {1}."},

{type:"mc", q:"他(tā)每天(měitiān)七(qī)点(diǎn)起床(qǐchuáng)。 What does he do at 7?",
 opts:["He eats breakfast","He goes to school","He gets out of bed","He goes to sleep"],
 ans:"He gets out of bed",
 hint:"起 means 'to rise' and 床 means 'bed.' Rising from bed is the first action of the day."},

{type:"fb", s:"昨天(zuótiān)十二(shíèr)点(diǎn)才(cái){1}。",
 a:["睡觉(shuìjiào)"],
 opts:["睡觉(shuìjiào)","起床(qǐchuáng)","休息(xiūxi)","吃(chī)"],
 hint:"It was midnight before this action happened. Which verb describes going to bed?",
 sSrc:"Yesterday I did not {1} until twelve."},

{type:"mc", q:"休(xiū) in 休息(xiūxi) shows a person next to a tree. This represents:",
 opts:["Working hard","Resting under shade","Climbing a tree","Cutting wood"],
 ans:"Resting under shade",
 hint:"The character combines the person radical with the tree radical. Picture a farmer on a hot day."},

{type:"fb", s:"你(nǐ)生病(shēngbìng)了(le)，要(yào)多(duō){1}。",
 a:["休息(xiūxi)"],
 opts:["休息(xiūxi)","起床(qǐchuáng)","走(zǒu)","吃(chī)"],
 hint:"A doctor tells a sick patient to do more of this recovery activity.",
 sSrc:"You are sick, you need to {1} more."},

// ── Unit 9 Review Quiz ──
{type:"mc", q:"A: 你(nǐ)哪儿(nǎr)不(bù)舒服(shūfu)？\nB: 头(tóu)疼(téng)，也(yě)发烧(fāshāo)了(le)。\nWhat symptoms does B have?",
 opts:["Headache and fever","Stomachache and cough","Sore throat and cold","Back pain and fatigue"],
 ans:"Headache and fever",
 hint:"头疼 is head + pain, and 发烧 is emit + burn. Combine the two symptoms."},

{type:"match", pairs:[
  {trg:"身体(shēntǐ)", src:"body / health"},
  {trg:"舒服(shūfu)", src:"comfortable"},
  {trg:"药(yào)", src:"medicine"},
  {trg:"累(lèi)", src:"tired"},
  {trg:"休息(xiūxi)", src:"to rest"}
]},

{type:"fb", s:"我(wǒ)感冒(gǎnmào)了(le)，要(yào)吃(chī){1}。",
 a:["药(yào)"],
 opts:["药(yào)","菜(cài)","水(shuǐ)","饭(fàn)"],
 hint:"When you are sick with a cold, what does a doctor prescribe for you to take?",
 sSrc:"I caught a cold, I need to take {1}."},

{type:"mc", q:"Put these daily activities in the correct order:",
 opts:["起床(qǐchuáng) > 休息(xiūxi) > 睡觉(shuìjiào)","睡觉(shuìjiào) > 起床(qǐchuáng) > 休息(xiūxi)","休息(xiūxi) > 睡觉(shuìjiào) > 起床(qǐchuáng)","起床(qǐchuáng) > 睡觉(shuìjiào) > 休息(xiūxi)"],
 ans:"起床(qǐchuáng) > 休息(xiūxi) > 睡觉(shuìjiào)",
 hint:"Think about a normal day: first you rise from bed, then you take breaks during the day, then you go to sleep at night."},

{type:"fb", s:"我(wǒ)每天(měitiān)六(liù)点(diǎn){1}。",
 a:["起床(qǐchuáng)"],
 opts:["起床(qǐchuáng)","睡觉(shuìjiào)","休息(xiūxi)","生病(shēngbìng)"],
 hint:"At 6 AM every day, you do the first action of the morning. Which verb means getting out of bed?",
 sSrc:"I {1} at six every day."}
]}

]};

export default UNIT_09;
