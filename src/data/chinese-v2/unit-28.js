// Unit 28: Health and Wellness
// Level: B2.1 (HSK 4)
// Chinese (Mandarin) V2 format with hanzi+pinyin notation

const UNIT_28 = {
n:28, lang:"zh", srcLang:"en", track:"v2",
title:"健康生活 Healthy Living", sub:"Wellness and Prevention",
icon:"🏃", level:"B2.1", color:"#7B5EE8",
lessons:[

// ─── L1: Body and Health Basics ───
{id:"zhv2_u28l1", title:"身体健康 Physical Health", icon:"💪", xp:15, board:true, steps:[
{type:"intro", title:"身体健康 Physical Health",
 desc:"Learn to discuss health, exercise, and diet in Chinese. These words appear constantly in everyday conversation about lifestyle and wellness.",
 goals:["Describe health conditions with 健康 and 症状","Talk about exercise and diet","Use 预防 and 治疗 to discuss prevention and treatment"]},

{type:"teach", trg:"健康(jiànkāng)", src:"health / healthy", pos:"noun", gender:null,
 note:"Can function as both noun and adjective.\n健 = strong, 康 = peaceful/well.",
 example:"A: 你(nǐ)的(de)身体(shēntǐ)健康(jiànkāng)吗(ma)？\nB: 还(hái)不(bú)错(cuò)，我(wǒ)每(měi)天(tiān)锻炼(duànliàn)。",
 exampleSrc:"A: Is your body healthy?\nB: Not bad, I exercise every day.",
 funFact:"The character 康 appears in the name of the famous Kangxi Emperor (康熙), whose name literally means 'peaceful prosperity.' Health and peace share the same root concept."},

{type:"teach", trg:"锻炼(duànliàn)", src:"to exercise / to work out", pos:"verb", gender:null,
 note:"Originally meant to forge metal (锻 = forge, 炼 = refine).\nNow commonly means physical exercise.",
 example:"A: 你(nǐ)经常(jīngcháng)锻炼(duànliàn)吗(ma)？\nB: 我(wǒ)每(měi)周(zhōu)锻炼(duànliàn)三(sān)次(cì)。",
 exampleSrc:"A: Do you exercise often?\nB: I exercise three times a week.",
 funFact:"Both characters contain the metal radical (金). The original meaning was 'to forge and refine metal.' The metaphor is powerful: exercise forges and refines your body the way fire tempers steel."},

{type:"teach", trg:"饮食(yǐnshí)", src:"diet / food and drink", pos:"noun", gender:null,
 note:"A formal compound: 饮 = drink, 食 = eat.\nUsed for discussing dietary habits, not a single meal.",
 example:"A: 健康(jiànkāng)的(de)饮食(yǐnshí)很(hěn)重要(zhòngyào)。\nB: 对(duì)，要(yào)多(duō)吃(chī)蔬菜(shūcài)。",
 exampleSrc:"A: A healthy diet is very important.\nB: Right, you should eat more vegetables.",
 funFact:"Traditional Chinese medicine considers food and medicine to be closely related. The saying 药食同源(yàoshítóngyuán) means 'medicine and food share the same origin,' reflecting how Chinese culture views diet as the first line of healthcare."},

{type:"teach", trg:"营养(yíngyǎng)", src:"nutrition / nourishment", pos:"noun", gender:null,
 note:"营 = manage/operate, 养 = nourish/raise.\nOften paired with 丰富(fēngfù) 'rich' or 均衡(jūnhéng) 'balanced.'",
 example:"A: 这(zhè)种(zhǒng)水果(shuǐguǒ)营养(yíngyǎng)丰富(fēngfù)。\nB: 我(wǒ)每(měi)天(tiān)都(dōu)吃(chī)。",
 exampleSrc:"A: This kind of fruit is rich in nutrition.\nB: I eat it every day.",
 funFact:"The character 养 also appears in 养生(yǎngshēng), meaning 'nourishing life' or 'health preservation.' Chinese culture has a whole philosophy around 养, from raising children to cultivating the body."},

{type:"teach", trg:"症状(zhèngzhuàng)", src:"symptom", pos:"noun", gender:null,
 note:"症 = disease/illness, 状 = condition/shape.\nUsed when describing signs of illness.",
 example:"A: 你(nǐ)有(yǒu)什么(shénme)症状(zhèngzhuàng)？\nB: 我(wǒ)头疼(tóuténg)，还(hái)有(yǒu)点(diǎn)发烧(fāshāo)。",
 exampleSrc:"A: What symptoms do you have?\nB: I have a headache and a slight fever.",
 funFact:"Chinese medicine traditionally grouped symptoms into 'patterns' rather than diseases. A doctor would treat the pattern of symptoms as a whole system, not isolate individual complaints. This holistic approach still influences modern Chinese healthcare."},

{type:"tip", title:"Talking About Health in Chinese",
 text:"Chinese uses several structures to discuss health:\n\nDescribing condition:\n身体(shēntǐ)很(hěn)健康(jiànkāng) = The body is very healthy\n身体(shēntǐ)不(bù)太(tài)好(hǎo) = Not feeling too well\n\nAsking about symptoms:\n你(nǐ)哪里(nǎlǐ)不(bù)舒服(shūfu)？ = Where are you uncomfortable?\n你(nǐ)有(yǒu)什么(shénme)症状(zhèngzhuàng)？ = What symptoms do you have?\n\nGiving advice:\n你(nǐ)应该(yīnggāi)多(duō)锻炼(duànliàn) = You should exercise more\n你(nǐ)要(yào)注意(zhùyì)饮食(yǐnshí) = You need to watch your diet",
 deepDive:{title:"The Chinese Health Conversation",
  text:"When Chinese people ask about your health, the conversation often goes deeper than in Western cultures. Asking 你吃了吗 (have you eaten?) is actually a traditional greeting that shows care for wellbeing.\n\nHealth advice is also given more freely. Friends and family will openly comment on what you eat, how you dress (wear more layers!), and whether you drink enough hot water. This is not considered intrusive but rather an expression of genuine concern."}},

{type:"mc", q:"锻炼(duànliàn) originally meant:",
 opts:["To forge and refine metal","To run and jump","To eat healthy food","To sleep well"],
 ans:"To forge and refine metal",
 hint:"Both characters in this word contain the ___ radical. Think about what happens to ___ in a furnace."},

{type:"match", pairs:[
  {trg:"健康(jiànkāng)", src:"health / healthy"},
  {trg:"锻炼(duànliàn)", src:"to exercise"},
  {trg:"饮食(yǐnshí)", src:"diet"},
  {trg:"营养(yíngyǎng)", src:"nutrition"},
  {trg:"症状(zhèngzhuàng)", src:"symptom"}
]},

{type:"fb", s:"你(nǐ)有(yǒu)什么(shénme){1}？",
 a:["症状(zhèngzhuàng)"],
 opts:["症状(zhèngzhuàng)","健康(jiànkāng)","锻炼(duànliàn)","营养(yíngyǎng)"],
 hint:"A doctor would ask this to find out what signs of illness you are experiencing.",
 sSrc:"What {1} do you have?"},

{type:"mc", q:"健康(jiànkāng)的(de)饮食(yǐnshí)很(hěn)重要(zhòngyào)。 What does this mean?",
 opts:["A healthy diet is very important","Exercise is very healthy","Nutrition is not important","Symptoms are very serious"],
 ans:"A healthy diet is very important",
 hint:"健康 modifies 饮食 as an adjective here. 重要 means '___.'"},

{type:"fb", s:"我(wǒ)每(měi)天(tiān)都(dōu){1}。",
 a:["锻炼(duànliàn)"],
 opts:["锻炼(duànliàn)","症状(zhèngzhuàng)","饮食(yǐnshí)","营养(yíngyǎng)"],
 hint:"What physical activity do you do every day to stay healthy?",
 sSrc:"I {1} every day."}
]},

// ─── L2: Prevention and Treatment ───
{id:"zhv2_u28l2", title:"预防和治疗 Prevention and Treatment", icon:"🏥", xp:15, board:true, steps:[
{type:"intro", title:"预防和治疗 Prevention and Treatment",
 desc:"Learn to discuss medical prevention, treatment, and examinations. These are essential for navigating healthcare conversations in Chinese.",
 goals:["Use 预防 and 治疗 in medical contexts","Discuss check-ups with 检查","Understand the Chinese concept of 养生"]},

{type:"teach", trg:"预防(yùfáng)", src:"to prevent / prevention", pos:"verb", gender:null,
 note:"预 = in advance, 防 = defend/guard.\nUsed for disease prevention and safety measures.",
 example:"A: 预防(yùfáng)疾病(jíbìng)比(bǐ)治疗(zhìliáo)更(gèng)重要(zhòngyào)。\nB: 所以(suǒyǐ)我(wǒ)每(měi)年(nián)都(dōu)做(zuò)检查(jiǎnchá)。",
 exampleSrc:"A: Prevention is more important than treatment.\nB: That is why I get a check-up every year.",
 funFact:"The Chinese proverb 预防胜于治疗 (prevention is better than cure) mirrors the English saying but reflects a deeper cultural commitment. Traditional Chinese medicine has always prioritized prevention over cure."},

{type:"teach", trg:"治疗(zhìliáo)", src:"to treat / treatment", pos:"verb", gender:null,
 note:"治 = govern/cure, 疗 = heal/treat.\nUsed for medical treatment of illness or injury.",
 example:"A: 这(zhè)种(zhǒng)病(bìng)怎么(zěnme)治疗(zhìliáo)？\nB: 医生(yīshēng)说(shuō)需要(xūyào)吃药(chīyào)。",
 exampleSrc:"A: How is this illness treated?\nB: The doctor says medication is needed.",
 funFact:"The character 治 also means 'to govern' a country. In Chinese philosophy, governing the body and governing the state follow the same principles of balance and harmony."},

{type:"teach", trg:"检查(jiǎnchá)", src:"to examine / check-up", pos:"verb", gender:null,
 note:"检 = inspect, 查 = investigate.\nUsed for medical exams, security checks, and inspections.",
 example:"A: 你(nǐ)应该(yīnggāi)去(qù)医院(yīyuàn)检查(jiǎnchá)一下(yíxià)。\nB: 好(hǎo)的(de)，我(wǒ)明天(míngtiān)就(jiù)去(qù)。",
 exampleSrc:"A: You should go to the hospital for a check-up.\nB: Okay, I will go tomorrow.",
 funFact:"Annual health check-ups are extremely common in China. Many companies require yearly physicals for all employees. The Chinese term 体检(tǐjiǎn) specifically means a physical examination."},

{type:"teach", trg:"压力(yālì)", src:"pressure / stress", pos:"noun", gender:null,
 note:"压 = press, 力 = force/power.\nUsed for both physical pressure and psychological stress.",
 example:"A: 你(nǐ)最近(zuìjìn)压力(yālì)大(dà)吗(ma)？\nB: 工作(gōngzuò)压力(yālì)很(hěn)大(dà)，需要(xūyào)好好(hǎohǎo)休息(xiūxi)。",
 exampleSrc:"A: Have you been stressed lately?\nB: Work pressure is very high, I need to rest well.",
 funFact:"压力 literally means 'pressing force.' In physics it means pressure. In daily life it means stress. Chinese college students famously experience 学习压力(xuéxí yālì), or study pressure, especially before the gaokao entrance exam."},

{type:"teach", trg:"心理(xīnlǐ)", src:"psychology / mental", pos:"noun", gender:null,
 note:"心 = heart/mind, 理 = principle/reason.\nRefers to the psychological or mental aspect.",
 example:"A: 心理(xīnlǐ)健康(jiànkāng)和(hé)身体(shēntǐ)健康(jiànkāng)一样(yíyàng)重要(zhòngyào)。\nB: 没(méi)错(cuò)，我们(wǒmen)不(bù)能(néng)忽视(hūshì)心理(xīnlǐ)问题(wèntí)。",
 exampleSrc:"A: Mental health is just as important as physical health.\nB: Exactly, we cannot ignore psychological issues.",
 funFact:"In Chinese, the heart (心) is the seat of both emotion and thought. 心理 literally means 'heart principles.' This reflects the traditional Chinese view that the mind and heart are not separate but work together."},

{type:"teach", trg:"养生(yǎngshēng)", src:"health preservation / wellness", pos:"noun", gender:null,
 note:"养 = nourish, 生 = life.\nA traditional Chinese concept of maintaining health through lifestyle.",
 example:"A: 中国(Zhōngguó)人(rén)很(hěn)注重(zhùzhòng)养生(yǎngshēng)。\nB: 对(duì)，比如(bǐrú)喝(hē)热水(rèshuǐ)、打(dǎ)太极(tàijí)。",
 exampleSrc:"A: Chinese people value health preservation greatly.\nB: Yes, for example drinking hot water, doing tai chi.",
 funFact:"养生 is a uniquely Chinese concept with no exact English equivalent. It encompasses diet, exercise, sleep, emotional balance, and seasonal living. Drinking hot water, a habit famous among Chinese people, is rooted in 养生 philosophy."},

{type:"tip", title:"Prevention vs. Treatment in Chinese Culture",
 text:"Chinese medicine has a famous saying:\n\n上医治未病(shàngyī zhì wèi bìng)\n'A superior doctor treats illness before it arises.'\n\nThis reflects the cultural priority:\n预防(yùfáng) prevention > 治疗(zhìliáo) treatment\n\nRelated structures:\n做(zuò)检查(jiǎnchá) = to get a check-up\n看(kàn)医生(yīshēng) = to see a doctor\n吃药(chīyào) = to take medicine (literally: eat medicine)\n注意(zhùyì)养生(yǎngshēng) = to pay attention to health preservation",
 deepDive:{title:"Hot Water and Chinese Wellness",
  text:"If you visit China, someone will inevitably offer you 热水(rèshuǐ), hot water. This is not just hospitality but a core 养生 belief. Traditional Chinese medicine holds that cold drinks harm the stomach and disrupt the body's internal balance.\n\nOther common 养生 practices include eating seasonal foods, sleeping before 11 PM (when the liver is believed to regenerate), and avoiding 'cold' foods during winter. These ideas blend ancient philosophy with daily life in ways that still shape modern Chinese behavior."}},

{type:"mc", q:"预防(yùfáng)疾病(jíbìng)比(bǐ)治疗(zhìliáo)更(gèng)重要(zhòngyào)。 What does this mean?",
 opts:["Preventing illness is more important than treating it","Treatment is more expensive than prevention","The doctor will examine you","Mental health is important"],
 ans:"Preventing illness is more important than treating it",
 hint:"比...更 is a comparison structure meaning 'more...than.' What two things are being compared?"},

{type:"match", pairs:[
  {trg:"预防(yùfáng)", src:"prevention"},
  {trg:"治疗(zhìliáo)", src:"treatment"},
  {trg:"检查(jiǎnchá)", src:"to examine"},
  {trg:"压力(yālì)", src:"stress"},
  {trg:"心理(xīnlǐ)", src:"psychology"},
  {trg:"养生(yǎngshēng)", src:"health preservation"}
]},

{type:"fb", s:"你(nǐ)应该(yīnggāi)去(qù)医院(yīyuàn){1}一下(yíxià)。",
 a:["检查(jiǎnchá)"],
 opts:["检查(jiǎnchá)","治疗(zhìliáo)","预防(yùfáng)","养生(yǎngshēng)"],
 hint:"The doctor wants to look at your condition. Which word means to examine or inspect?",
 sSrc:"You should go to the hospital for a {1}."},

{type:"mc", q:"养生(yǎngshēng) literally means:",
 opts:["Nourish life","Strong body","Eat medicine","Prevent disease"],
 ans:"Nourish life",
 hint:"养 means 'to … or raise' and 生 means '….' Combine the two characters."},

{type:"fb", s:"工作(gōngzuò){1}很(hěn)大(dà)，我(wǒ)需要(xūyào)休息(xiūxi)。",
 a:["压力(yālì)"],
 opts:["压力(yālì)","心理(xīnlǐ)","健康(jiànkāng)","养生(yǎngshēng)"],
 hint:"What word describes the mental burden or tension from work?",
 sSrc:"Work {1} is very high, I need to rest."},

{type:"mc", q:"心理(xīnlǐ)健康(jiànkāng)和(hé)身体(shēntǐ)健康(jiànkāng)一样(yíyàng)重要(zhòngyào)。 What is being said?",
 opts:["Mental health and physical health are equally important","Mental health is more important than physical health","The doctor treats both mind and body","Prevention is better than cure"],
 ans:"Mental health and physical health are equally important",
 hint:"一样重要 means '___ ___.' Two types of 健康 are being compared."}
]},

// ─── L3: Weight, Diet, and Balance ───
{id:"zhv2_u28l3", title:"均衡生活 Balanced Living", icon:"⚖️", xp:15, board:true, steps:[
{type:"intro", title:"均衡生活 Balanced Living",
 desc:"Learn vocabulary for weight management, balanced nutrition, and appropriate lifestyle choices. Practice combining health vocabulary in real conversations.",
 goals:["Discuss weight and diet with 体重, 减肥, and 均衡","Use 适当 to describe appropriate amounts","Combine all health vocabulary in context"]},

{type:"teach", trg:"体重(tǐzhòng)", src:"body weight", pos:"noun", gender:null,
 note:"体 = body, 重 = heavy/weight.\nA neutral, medical term for discussing weight.",
 example:"A: 我(wǒ)最近(zuìjìn)体重(tǐzhòng)增加(zēngjiā)了(le)。\nB: 你(nǐ)要(yào)注意(zhùyì)饮食(yǐnshí)和(hé)锻炼(duànliàn)。",
 exampleSrc:"A: My body weight has increased recently.\nB: You need to pay attention to diet and exercise.",
 funFact:"In China, discussing weight is much less taboo than in many Western cultures. Friends and even acquaintances may openly comment on weight changes. It is usually meant as concern, not criticism."},

{type:"teach", trg:"减肥(jiǎnféi)", src:"to lose weight / to diet", pos:"verb", gender:null,
 note:"减 = reduce, 肥 = fat.\nVery common in daily conversation about dieting.",
 example:"A: 你(nǐ)在(zài)减肥(jiǎnféi)吗(ma)？\nB: 是(shì)的(de)，我(wǒ)在(zài)控制(kòngzhì)饮食(yǐnshí)。",
 exampleSrc:"A: Are you trying to lose weight?\nB: Yes, I am controlling my diet.",
 funFact:"减肥 is so common in Chinese culture that it has spawned countless internet memes. The phrase '我明天开始减肥' (I will start my diet tomorrow) is a running joke about perpetual procrastination."},

{type:"teach", trg:"均衡(jūnhéng)", src:"balanced / equilibrium", pos:"adj", gender:null,
 note:"均 = equal/even, 衡 = balance.\nOften used with 饮食 or 营养 for 'balanced diet/nutrition.'",
 example:"A: 均衡(jūnhéng)的(de)营养(yíngyǎng)对(duì)健康(jiànkāng)很(hěn)重要(zhòngyào)。\nB: 我(wǒ)尽量(jǐnliàng)每(měi)顿(dùn)饭(fàn)都(dōu)吃(chī)蔬菜(shūcài)。",
 exampleSrc:"A: Balanced nutrition is very important for health.\nB: I try to eat vegetables at every meal.",
 funFact:"Balance (衡) is a core concept in Chinese philosophy. The traditional weighing scale (秤) used a horizontal bar and counterweights. This image of physical balance became a metaphor for fairness, justice, and health."},

{type:"teach", trg:"适当(shìdàng)", src:"appropriate / moderate", pos:"adj", gender:null,
 note:"适 = suitable, 当 = proper.\nMeans 'the right amount' or 'appropriate.'",
 example:"A: 适当(shìdàng)的(de)锻炼(duànliàn)有(yǒu)助于(zhùyú)健康(jiànkāng)。\nB: 对(duì)，但是(dànshì)不(bù)要(yào)过度(guòdù)。",
 exampleSrc:"A: Moderate exercise helps with health.\nB: Right, but do not overdo it.",
 funFact:"The concept of 适当 reflects the Confucian ideal of the Middle Way (中庸). Excess in any direction is harmful. Even good things like exercise and study should be done in moderation."},

{type:"mc", q:"减肥(jiǎnféi) literally means:",
 opts:["Reduce fat","Increase weight","Balanced diet","Strong body"],
 ans:"Reduce fat",
 hint:"减 means '…' and 肥 means '….' Put the two characters together literally."},

{type:"match", pairs:[
  {trg:"体重(tǐzhòng)", src:"body weight"},
  {trg:"减肥(jiǎnféi)", src:"to lose weight"},
  {trg:"均衡(jūnhéng)", src:"balanced"},
  {trg:"适当(shìdàng)", src:"appropriate"}
]},

{type:"fb", s:"{1}的(de)营养(yíngyǎng)对(duì)健康(jiànkāng)很(hěn)重要(zhòngyào)。",
 a:["均衡(jūnhéng)"],
 opts:["均衡(jūnhéng)","适当(shìdàng)","减肥(jiǎnféi)","体重(tǐzhòng)"],
 hint:"Which adjective describes nutrition that is evenly distributed and in proper proportion?",
 sSrc:"{1} nutrition is very important for health."},

{type:"mc", q:"适当(shìdàng)的(de)锻炼(duànliàn)有(yǒu)助于(zhùyú)健康(jiànkāng)。 What is the advice?",
 opts:["Moderate exercise helps with health","Too much exercise is harmful","You should stop exercising","Diet is more important than exercise"],
 ans:"Moderate exercise helps with health",
 hint:"适当 means 'appropriate/___' and 有助于 means '___ with.' What kind of ___ is being recommended?"},

{type:"fb", s:"我(wǒ)最近(zuìjìn){1}增加(zēngjiā)了(le)。",
 a:["体重(tǐzhòng)"],
 opts:["体重(tǐzhòng)","减肥(jiǎnféi)","均衡(jūnhéng)","压力(yālì)"],
 hint:"What medical term refers to how much your body weighs?",
 sSrc:"My {1} has increased recently."},

{type:"drag_fill",
 s:"预防(yùfáng)疾病(jíbìng)要(yào)注意(zhùyì){1}的(de)饮食(yǐnshí)和(hé){2}的(de)锻炼(duànliàn)。",
 blanks:{"1":"均衡(jūnhéng)","2":"适当(shìdàng)"},
 pool:["均衡(jūnhéng)","适当(shìdàng)","减肥(jiǎnféi)","心理(xīnlǐ)"],
 hint:"To prevent illness, you need a balanced diet and moderate exercise."},

{type:"mc", q:"Which combination best completes the health advice: '要(yào)注意(zhùyì) _____ 和(hé) _____ 健康(jiànkāng)'?",
 opts:["身体(shēntǐ)...心理(xīnlǐ)","减肥(jiǎnféi)...体重(tǐzhòng)","锻炼(duànliàn)...饮食(yǐnshí)","症状(zhèngzhuàng)...治疗(zhìliáo)"],
 ans:"身体(shēntǐ)...心理(xīnlǐ)",
 hint:"The advice is about paying attention to two types of health: physical and mental."},

{type:"match", pairs:[
  {trg:"预防(yùfáng)", src:"prevention"},
  {trg:"治疗(zhìliáo)", src:"treatment"},
  {trg:"健康(jiànkāng)", src:"healthy"},
  {trg:"症状(zhèngzhuàng)", src:"symptom"},
  {trg:"养生(yǎngshēng)", src:"wellness"}
]}
]}

]};

export default UNIT_28;
