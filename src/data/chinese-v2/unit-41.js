// Unit 41: Chinese Cuisine
// Level: B1.2 (HSK 3)
// Chinese (Mandarin) V2 format with hanzi+pinyin notation

const UNIT_41 = {
n:41, lang:"zh", srcLang:"en", track:"v2",
title:"中国菜 Chinese Cuisine", sub:"Regional Food and Cooking",
icon:"🍲", level:"B1.2", color:"#7B5EE8",
lessons:[

// ─── L1: Tastes and Flavors ───
{id:"zhv2_u41l1", title:"Tastes and Flavors", icon:"👅", xp:15, board:true, steps:[
{type:"intro", title:"Tastes and Flavors",
 desc:"Chinese culinary tradition organizes flavors into distinct categories. Learn the six core tastes, plus 'fresh' and 'fragrant,' for real conversations about food.",
 goals:["Describe the five main flavors","Distinguish taste words","Comment on food quality"]},

{type:"teach", trg:"菜(cài)", src:"dish / cuisine / vegetable", pos:"noun", gender:null,
 note:"Single character. Context decides meaning: 点菜 (order dishes), 炒菜 (stir-fried vegetables), 中国菜 (Chinese cuisine).",
 example:"A: 这(zhè)家(jiā)餐厅(cāntīng)的(de)菜(cài)很(hěn)好吃(hǎochī)。\nB: 我们(wǒmen)再(zài)点(diǎn)一(yí)个(gè)菜(cài)吧(ba)。",
 exampleSrc:"A: The food at this restaurant is very tasty.\nB: Let us order one more dish.",
 funFact:"菜 is a word with three overlapping meanings. Originally 'vegetable,' it expanded to 'dish' (often vegetable-based) and then to entire cuisines. Context disambiguates: 买(mǎi)菜 is 'buy vegetables,' 做(zuò)菜 is 'cook a dish.'"},

{type:"teach", trg:"味道(wèidào)", src:"taste / flavor", pos:"noun", gender:null,
 note:"味 (taste) + 道 (way/path).\nThe way something tastes.",
 example:"A: 这(zhè)个(gè)菜(cài)味道(wèidào)真(zhēn)好(hǎo)！\nB: 是(shì)妈妈(māma)做(zuò)的(de)家常菜(jiāchángcài)。",
 exampleSrc:"A: This dish has such a great flavor!\nB: It is Mom's home-style cooking.",
 funFact:"味道 has a figurative sense too: 有味道 ('has flavor') can describe music, art, or a person's charm that makes them interesting and layered. A song can have 味道 the way a soup does."},

{type:"teach", trg:"甜(tián)", src:"sweet", pos:"adj", gender:null,
 note:"Single character. Used for food, but also figuratively.\n甜言蜜语 = sweet words (flattery).",
 example:"A: 这(zhè)个(gè)蛋糕(dàngāo)太(tài)甜(tián)了(le)。\nB: 是(shì)的(de)，我(wǒ)觉得(juéde)糖(táng)放(fàng)多(duō)了(le)。",
 exampleSrc:"A: This cake is too sweet.\nB: Yes, I think too much sugar was added.",
 funFact:"In some regions (notably Jiangsu and Shanghai), sugar finds its way into savory dishes. In others (like Sichuan and Hunan), sweet is generally reserved for desserts. The word 甜 has the same boundaries as English 'sweet.'"},

{type:"teach", trg:"酸(suān)", src:"sour", pos:"adj", gender:null,
 note:"Single character. Vinegar, unripe fruit, fermented foods.\nAlso describes muscle soreness.",
 example:"A: 我(wǒ)喜欢(xǐhuan)酸(suān)辣(là)汤(tāng)。\nB: 我(wǒ)也(yě)是(shì)，又(yòu)酸(suān)又(yòu)辣(là)最(zuì)好吃(hǎochī)。",
 exampleSrc:"A: I love hot and sour soup.\nB: Me too. Sour and spicy at the same time is the best.",
 funFact:"酸 has a second meaning: feeling physically sore (腰(yāo)酸(suān) = sore back). It can also mean emotional bitterness or envy, similar to English 'sour grapes.' One character carries three related but distinct senses."},

{type:"teach", trg:"苦(kǔ)", src:"bitter", pos:"adj", gender:null,
 note:"Single character. Bitter melon, black coffee, dark greens.\nAlso means 'suffering' or 'hardship.'",
 example:"A: 苦(kǔ)瓜(guā)虽然(suīrán)苦(kǔ)，但(dàn)对(duì)身体(shēntǐ)很(hěn)好(hǎo)。\nB: 我(wǒ)妈妈(māma)也(yě)这样(zhèyàng)说(shuō)。",
 exampleSrc:"A: Bitter melon, although bitter, is very good for your health.\nB: My mom says the same thing.",
 funFact:"苦 is one of the most philosophically important flavors in Chinese culture. 吃(chī)苦(kǔ) literally means 'eat bitterness' and figuratively 'endure hardship.' A person who can 吃苦 is considered strong and admirable."},

{type:"teach", trg:"辣(là)", src:"spicy / hot", pos:"adj", gender:null,
 note:"Single character. Chili, Sichuan peppercorn heat.\n辣椒 = chili pepper.",
 example:"A: 四川菜(Sìchuāncài)特别(tèbié)辣(là)。\nB: 我(wǒ)最(zuì)喜欢(xǐhuan)吃(chī)辣(là)的(de)！",
 exampleSrc:"A: Sichuan cuisine is especially spicy.\nB: I love eating spicy food the most!",
 funFact:"Chinese divides 'spicy' into different types: 辣 (chili heat), 麻 (málà, tongue-numbing heat from Sichuan peppercorn), and their combination 麻辣. Western cuisine lacks precise terms for the mouth-numbing sensation of 麻."},

{type:"teach", trg:"咸(xián)", src:"salty", pos:"adj", gender:null,
 note:"Single character. Salt, soy sauce, cured foods.\nOpposite: 淡 (dàn, bland).",
 example:"A: 这(zhè)个(gè)汤(tāng)有点(yǒudiǎn)咸(xián)。\nB: 加(jiā)点(diǎn)水(shuǐ)稀释(xīshì)一下(yíxià)。",
 exampleSrc:"A: This soup is a bit salty.\nB: Add some water to dilute it.",
 funFact:"Northern Chinese cuisine tends to be saltier (preserving food through long winters), while Southern cuisine emphasizes fresher, subtler flavors. A popular saying: 南甜北咸 (south sweet, north salty)."},

{type:"teach", trg:"新鲜(xīnxiān)", src:"fresh", pos:"adj", gender:null,
 note:"新 (new) + 鲜 (fresh/seafood).\nNewly fresh. For food, also figuratively for news.",
 example:"A: 这(zhè)些(xiē)鱼(yú)真(zhēn)新鲜(xīnxiān)！\nB: 是(shì)早上(zǎoshang)刚(gāng)从(cóng)海(hǎi)里(lǐ)捞(lāo)上来(shànglai)的(de)。",
 exampleSrc:"A: These fish are so fresh!\nB: They were just pulled from the sea this morning.",
 funFact:"鲜 originally combined 鱼 (fish) and 羊 (sheep), the two foods prized in ancient China for their delicate flavor. The character captured the idea of freshness perfectly: two proteins that go bad quickly."},

{type:"teach", trg:"香(xiāng)", src:"fragrant / aromatic / tasty-smelling", pos:"adj", gender:null,
 note:"Single character. Describes food aroma, perfume, even tasty food generally.\n很香 = smells wonderful / tastes great.",
 example:"A: 厨房(chúfáng)里(lǐ)好(hǎo)香(xiāng)啊(a)！\nB: 妈妈(māma)在(zài)做(zuò)红烧(hóngshāo)牛肉(niúròu)。",
 exampleSrc:"A: The kitchen smells so good!\nB: Mom is making braised beef.",
 funFact:"香 uniquely covers both smell and taste. You can describe a perfume as 香 or a bowl of rice as 香. There is no direct English equivalent: 'fragrant,' 'savory,' and 'delicious' overlap into one Chinese word."},

{type:"teach", trg:"口味(kǒuwèi)", src:"taste preference / flavor profile", pos:"noun", gender:null,
 note:"口 (mouth) + 味 (taste).\nMouth-taste. What your mouth prefers.",
 example:"A: 每(měi)个(gè)人(rén)的(de)口味(kǒuwèi)不(bù)一样(yíyàng)。\nB: 有(yǒu)的(de)人(rén)喜欢(xǐhuan)辣(là)，有(yǒu)的(de)人(rén)喜欢(xǐhuan)甜(tián)。",
 exampleSrc:"A: Everyone's taste is different.\nB: Some like spicy, some like sweet.",
 funFact:"口味 can refer to a person's preferences (一道合你口味的菜 = a dish to your taste) or to a cuisine's general character (川菜的口味 = Sichuan cuisine's flavor profile). It is both personal and categorical."},

{type:"mc", q:"Which character means 'spicy' in Chinese food contexts?",
 opts:["甜(tián)","咸(xián)","辣(là)","苦(kǔ)"],
 ans:"辣(là)",
 hint:"The character refers to chili heat. Sichuan cuisine is known for it."},

{type:"mc", q:"香 uniquely describes both:",
 opts:["sweet and sour","smell and taste","hot and cold","liquid and solid"],
 ans:"smell and taste",
 hint:"This character has no single English equivalent. It covers what you smell AND what you taste."},

{type:"fb", s:"这(zhè)个(gè)汤(tāng)太(tài){1}了(le)，需要(xūyào)加(jiā)点(diǎn)水(shuǐ)。",
 a:["咸(xián)"],
 opts:["咸(xián)","甜(tián)","酸(suān)","苦(kǔ)"],
 hint:"The taste word associated with salt. Think about what too much salt does.",
 sSrc:"This soup is too {1}. It needs some water."},

{type:"match", pairs:[
  {trg:"甜(tián)", src:"sweet"},
  {trg:"酸(suān)", src:"sour"},
  {trg:"苦(kǔ)", src:"bitter"},
  {trg:"辣(là)", src:"spicy"},
  {trg:"咸(xián)", src:"salty"},
  {trg:"新鲜(xīnxiān)", src:"fresh"}
]}

]},

// ─── L2: Cooking Methods ───
{id:"zhv2_u41l2", title:"Cooking Methods", icon:"🍳", xp:15, board:true, steps:[
{type:"intro", title:"Cooking Methods",
 desc:"Chinese cuisine has a rich vocabulary for how to prepare food. Stir-fry, boil, steam — each method produces distinct textures and flavors.",
 goals:["Name major Chinese cooking methods","Distinguish techniques","Describe kitchen actions"]},

{type:"teach", trg:"做饭(zuòfàn)", src:"to cook / to prepare a meal", pos:"verb", gender:null,
 note:"做 (do/make) + 饭 (rice/meal).\nSeparable verb. Generic 'to cook.'",
 example:"A: 你(nǐ)会(huì)做饭(zuòfàn)吗(ma)？\nB: 会(huì)一点(yìdiǎn)，简单(jiǎndān)的(de)菜(cài)没(méi)问题(wèntí)。",
 exampleSrc:"A: Do you know how to cook?\nB: A little. Simple dishes are no problem.",
 funFact:"饭 (rice) stands in for 'meal' in many expressions: 吃饭 (eat a meal), 做饭 (cook a meal), 请客吃饭 (invite someone to eat). Rice is so central to meals that the word for grain became the word for food itself."},

{type:"teach", trg:"炒(chǎo)", src:"to stir-fry", pos:"verb", gender:null,
 note:"The quintessential Chinese cooking method.\n炒菜 = stir-fried dish, 炒饭 = fried rice.",
 example:"A: 我(wǒ)来(lái)炒(chǎo)几(jǐ)个(gè)菜(cài)吧(ba)。\nB: 好(hǎo)，你(nǐ)的(de)炒菜(chǎocài)最(zuì)好吃(hǎochī)。",
 exampleSrc:"A: Let me stir-fry a few dishes.\nB: Great, your stir-fried dishes are the best.",
 funFact:"炒 requires a 锅 (wok) and high heat. The technique is so signature to Chinese cuisine that the word 炒作 ('to stir-fry') has become slang for media hype, i.e. heating up something quickly for attention."},

{type:"teach", trg:"煮(zhǔ)", src:"to boil / to cook in water", pos:"verb", gender:null,
 note:"For rice, noodles, eggs, dumplings.\n煮饭 = cook rice, 煮水 = boil water.",
 example:"A: 妈妈(māma)在(zài)煮(zhǔ)饺子(jiǎozi)。\nB: 煮(zhǔ)多(duō)长(cháng)时间(shíjiān)？",
 exampleSrc:"A: Mom is boiling dumplings.\nB: For how long?",
 funFact:"煮 is the most ancient cooking method and the word goes back thousands of years. Archaeological evidence shows early Chinese people cooking grain in ceramic pots over open fires, exactly the 煮 technique."},

{type:"teach", trg:"蒸(zhēng)", src:"to steam", pos:"verb", gender:null,
 note:"Signature method for buns, dumplings, fish.\n蒸馒头 = steam mantou buns.",
 example:"A: 今(jīn)天(tiān)我(wǒ)想(xiǎng)蒸(zhēng)鱼(yú)。\nB: 好(hǎo)主意(zhǔyi)，蒸鱼(zhēngyú)最(zuì)能(néng)保(bǎo)持(chí)鲜味(xiānwèi)。",
 exampleSrc:"A: Today I want to steam fish.\nB: Good idea. Steaming fish preserves the freshness best.",
 funFact:"Chinese bamboo steamers (蒸笼) can stack up to six or seven levels, letting a chef cook multiple dishes over a single pot of boiling water. This efficiency predates modern multi-cookers by over 2000 years."},

{type:"teach", trg:"尝(cháng)", src:"to taste / to try (food)", pos:"verb", gender:null,
 note:"Specifically for tasting food.\n尝一口 = take a taste.",
 example:"A: 你(nǐ)尝(cháng)一下(yíxià)这(zhè)个(gè)汤(tāng)，咸(xián)不(bù)咸(xián)？\nB: 正(zhèng)好(hǎo)，不(bù)咸(xián)不(bù)淡(dàn)。",
 exampleSrc:"A: Please taste this soup. Is it salty?\nB: Just right, not too salty, not too bland.",
 funFact:"尝 originally depicted a sage tasting grain. The ancient Emperor 神农 (Shen Nong), 'Divine Farmer,' was said to have personally tasted hundreds of herbs to teach humans medicine. The word still carries this weight of discovery."},

{type:"teach", trg:"材料(cáiliào)", src:"ingredients / materials", pos:"noun", gender:null,
 note:"材 (material) + 料 (materials).\nFor cooking, construction, research.",
 example:"A: 做(zuò)这(zhè)个(gè)菜(cài)需要(xūyào)什么(shénme)材料(cáiliào)？\nB: 新鲜(xīnxiān)的(de)蔬菜(shūcài)和(hé)一点(yìdiǎn)肉(ròu)。",
 exampleSrc:"A: What ingredients do I need to make this dish?\nB: Fresh vegetables and a little meat.",
 funFact:"材料 is a general word covering cooking ingredients, building materials, and research data. In cooking contexts, 食材 (shícái, food material) is a more specific synonym emphasizing edible components."},

{type:"mc", q:"Which cooking method produces stir-fried dishes?",
 opts:["煮(zhǔ)","蒸(zhēng)","炒(chǎo)","烤(kǎo)"],
 ans:"炒(chǎo)",
 hint:"The signature Chinese method using a wok and high heat."},

{type:"mc", q:"蒸(zhēng) is typically used for which food?",
 opts:["rice","steamed buns","fried rice","pan-seared meat"],
 ans:"steamed buns",
 hint:"The method is steaming. The answer needs to be something classically prepared that way."},

{type:"fb", s:"妈妈(māma)在(zài)厨房(chúfáng){1}饺子(jiǎozi)，水(shuǐ)已经(yǐjīng)开(kāi)了(le)。",
 a:["煮(zhǔ)"],
 opts:["煮(zhǔ)","炒(chǎo)","蒸(zhēng)","尝(cháng)"],
 hint:"The cooking method that uses boiling water. Dumplings are cooked this way.",
 sSrc:"Mom is {1} dumplings in the kitchen. The water is already boiling."},

{type:"match", pairs:[
  {trg:"做饭(zuòfàn)", src:"to cook a meal"},
  {trg:"炒(chǎo)", src:"to stir-fry"},
  {trg:"煮(zhǔ)", src:"to boil"},
  {trg:"蒸(zhēng)", src:"to steam"},
  {trg:"尝(cháng)", src:"to taste"},
  {trg:"材料(cáiliào)", src:"ingredients"}
]},

{type:"story", speaker:"narrator", mood:"warm", art:"zh-cooking-together",
 trg:"周日(zhōurì)晚上(wǎnshang)，爸爸(bàba)和(hé)妈妈(māma)一起(yìqǐ)做(zuò)饭(fàn)。爸爸(bàba)炒(chǎo)菜(cài)，妈妈(māma)蒸(zhēng)鱼(yú)。小(xiǎo)美(Měi)帮(bāng)忙(máng)准备(zhǔnbèi)材料(cáiliào)。厨房(chúfáng)里(lǐ)又(yòu)热闹(rènào)又(yòu)香(xiāng)，一家(yìjiā)人(rén)都(dōu)很(hěn)开心(kāixīn)。",
 src:"Sunday evening, Dad and Mom cooked together. Dad stir-fried vegetables while Mom steamed fish. Xiao Mei helped prepare the ingredients. The kitchen was both lively and fragrant, and the whole family was happy."}

]},

// ─── L3: Regional Cuisine ───
{id:"zhv2_u41l3", title:"Regional Cuisine", icon:"🥘", xp:15, board:true, steps:[
{type:"intro", title:"Regional Cuisine",
 desc:"Chinese food is not one cuisine but many. Each region has distinct ingredients, techniques, and flavor priorities. Explore the regional diversity.",
 goals:["Name major Chinese regional cuisines","Associate regions with flavors","Discuss food preferences"]},

{type:"teach", trg:"川菜(Chuāncài)", src:"Sichuan cuisine", pos:"noun", gender:null,
 note:"川 (short for 四川) + 菜 (cuisine).\nFamous for 麻辣 (numbing-spicy) flavors.",
 example:"A: 你(nǐ)喜欢(xǐhuan)吃(chī)川菜(Chuāncài)吗(ma)？\nB: 喜欢(xǐhuan)，越(yuè)辣(là)越(yuè)好(hǎo)！",
 exampleSrc:"A: Do you like Sichuan cuisine?\nB: Yes, the spicier the better!",
 funFact:"Sichuan cuisine's signature 花椒 (Sichuan peppercorn) creates a tingling, numbing sensation called 麻. Combined with 辣 (chili heat), you get 麻辣 — a taste entirely unique to Sichuan and nearly impossible to describe in English."},

{type:"teach", trg:"粤菜(Yuècài)", src:"Cantonese cuisine", pos:"noun", gender:null,
 note:"粤 (Guangdong) + 菜 (cuisine).\nKnown for freshness, delicate flavors, dim sum.",
 example:"A: 粤菜(Yuècài)的(de)特点(tèdiǎn)是(shì)什么(shénme)？\nB: 清淡(qīngdàn)，追求(zhuīqiú)食物(shíwù)本来(běnlái)的(de)鲜味(xiānwèi)。",
 exampleSrc:"A: What is special about Cantonese cuisine?\nB: Light flavors. It emphasizes the natural freshness of ingredients.",
 funFact:"Cantonese cuisine has a saying: 不时不食 ('out of season, do not eat'). The philosophy prioritizes fresh, seasonal ingredients cooked simply, the opposite of the bold spicing in Sichuan cuisine."},

{type:"teach", trg:"清淡(qīngdàn)", src:"light / plain / mild (in flavor)", pos:"adj", gender:null,
 note:"清 (clear) + 淡 (bland/light).\nNot heavy, not oily, not strongly flavored.",
 example:"A: 医生(yīshēng)说(shuō)我(wǒ)要(yào)吃(chī)清淡(qīngdàn)点(diǎn)。\nB: 那(nà)就(jiù)少(shǎo)吃(chī)油腻(yóunì)的(de)菜(cài)。",
 exampleSrc:"A: The doctor said I should eat lighter food.\nB: Then eat fewer oily dishes.",
 funFact:"清淡 is a health-positive term in Chinese. When recovering from illness, visiting family, or approaching old age, people intentionally 吃得清淡点 (eat more lightly). It connects diet to moral and physical well-being."},

{type:"teach", trg:"油腻(yóunì)", src:"oily / greasy / rich", pos:"adj", gender:null,
 note:"油 (oil) + 腻 (greasy/sticky).\nOpposite of 清淡.",
 example:"A: 这(zhè)个(gè)菜(cài)有点(yǒudiǎn)油腻(yóunì)。\nB: 确实(quèshí)，我(wǒ)下(xià)次(cì)少(shǎo)放(fàng)点(diǎn)油(yóu)。",
 exampleSrc:"A: This dish is a bit greasy.\nB: You are right. I will use less oil next time.",
 funFact:"油腻 evolved into slang: 油腻男 ('greasy guy') refers to middle-aged men who come across as inauthentic, try-hard, or socially awkward. The food metaphor extended into personality critique, showing how eating shapes Chinese thinking."},

{type:"teach", trg:"家常菜(jiāchángcài)", src:"home-style cooking", pos:"noun", gender:null,
 note:"家 (home) + 常 (often) + 菜 (dish).\nEveryday dishes families actually make at home.",
 example:"A: 我(wǒ)最(zuì)喜欢(xǐhuan)吃(chī)妈妈(māma)做(zuò)的(de)家常菜(jiāchángcài)。\nB: 对(duì)，家(jiā)的(de)味道(wèidào)最(zuì)温暖(wēnnuǎn)。",
 exampleSrc:"A: I love eating Mom's home-style cooking the most.\nB: True, the taste of home is the warmest.",
 funFact:"家常菜 is a protected cultural category in Chinese food: it represents comfort, nostalgia, and regional identity. Unlike restaurant food (餐厅菜), 家常菜 is often simpler but carries deeper emotional weight."},

{type:"teach", trg:"特色(tèsè)", src:"characteristic / specialty", pos:"noun", gender:null,
 note:"特 (special) + 色 (color/feature).\nSpecial feature. Used for food, culture, locations.",
 example:"A: 这(zhè)家(jiā)餐厅(cāntīng)有(yǒu)什么(shénme)特色(tèsè)菜(cài)？\nB: 他们(tāmen)的(de)北京(Běijīng)烤鸭(kǎoyā)非常(fēicháng)有名(yǒumíng)。",
 exampleSrc:"A: What are the specialty dishes at this restaurant?\nB: Their Beijing roast duck is very famous.",
 funFact:"Asking 有什么特色？ is a polite, informed way to order at a Chinese restaurant. It signals 'I want what you are known for' rather than asking for a standard menu. Every Chinese city claims multiple 特色 dishes."},

{type:"mc", q:"川菜(Chuāncài) is most famous for being:",
 opts:["sweet","light","spicy and numbing","sour"],
 ans:"spicy and numbing",
 hint:"Sichuan food uses chili for heat and peppercorn for tingling. Neither flavor is subtle."},

{type:"mc", q:"清淡(qīngdàn) is the opposite of:",
 opts:["热(rè)","甜(tián)","油腻(yóunì)","辣(là)"],
 ans:"油腻(yóunì)",
 hint:"清淡 means light/mild. Its opposite is heavy and greasy."},

{type:"fb", s:"妈妈(māma)做(zuò)的(de){1}菜(cài)最(zuì)好(hǎo)吃(chī)了(le)，简单(jiǎndān)但(dàn)温暖(wēnnuǎn)。",
 a:["家常(jiācháng)"],
 opts:["家常(jiācháng)","油腻(yóunì)","特色(tèsè)","清淡(qīngdàn)"],
 hint:"The word means 'home-style.' 家 (home) + 常 (often).",
 sSrc:"Mom's {1} cooking is the tastiest. Simple but warm."},

{type:"match", pairs:[
  {trg:"川菜(Chuāncài)", src:"Sichuan cuisine"},
  {trg:"粤菜(Yuècài)", src:"Cantonese cuisine"},
  {trg:"清淡(qīngdàn)", src:"light / mild"},
  {trg:"油腻(yóunì)", src:"oily / greasy"},
  {trg:"家常菜(jiāchángcài)", src:"home-style cooking"},
  {trg:"特色(tèsè)", src:"specialty"}
]},

{type:"tip", title:"The Eight Great Cuisines",
 text:"Chinese culinary tradition recognizes 八大菜系 (bā dà càixì), the Eight Great Cuisines.\n川 (Sichuan): spicy-numbing.\n粤 (Cantonese): fresh and light.\n鲁 (Shandong): salty, hearty, northern.\n苏 (Jiangsu): sweet, refined.\nEach is tied to a region's climate, ingredients, and history.",
 deepDive:"The Eight Great Cuisines framework dates to the Qing dynasty. It formalizes what Chinese have always known: food is regional, tied to climate, soil, and tradition. A traveling Chinese diner can tell where dishes come from within a few bites."}

]}

]};

export default UNIT_41;
