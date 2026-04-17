// Unit 38: Around the House
// Level: A2.2 (HSK 2-3)
// Chinese (Mandarin) V2 format with hanzi+pinyin notation

const UNIT_38 = {
n:38, lang:"zh", srcLang:"en", track:"v2",
title:"家里 Around the House", sub:"Home Life",
icon:"🏠", level:"A2.2", color:"#7B5EE8",
lessons:[

// ─── L1: Rooms of the House ───
{id:"zhv2_u38l1", title:"Rooms of the House", icon:"🚪", xp:15, board:true, steps:[
{type:"intro", title:"Rooms of the House",
 desc:"Learn the names of rooms in a Chinese home. From bedroom to kitchen, these words let you describe where you are and where things happen in daily life.",
 goals:["Name the main rooms of a house","Describe which room activities happen in","Give tours of your home"]},

{type:"teach", trg:"房间(fángjiān)", src:"room", pos:"noun", gender:null,
 note:"房 (house/room) + 间 (space between / measure word).\nThe generic word for any room.",
 example:"A: 这(zhè)个(gè)房间(fángjiān)很(hěn)大(dà)。\nB: 是(shì)的(de)，而且(érqiě)很(hěn)明亮(míngliàng)。",
 exampleSrc:"A: This room is very big.\nB: Yes, and it is very bright.",
 funFact:"间 is also the measure word for rooms: 一间房间 (one room). The character 间 shows the sun 日 coming through a gate 门, originally 'the space between.' Rooms are the spaces between walls."},

{type:"teach", trg:"卧室(wòshì)", src:"bedroom", pos:"noun", gender:null,
 note:"卧 (lie down) + 室 (room).\nThe room for lying down.",
 example:"A: 我(wǒ)的(de)卧室(wòshì)在(zài)二(èr)楼(lóu)。\nB: 窗户(chuānghu)朝(cháo)哪(nǎ)边(biān)？",
 exampleSrc:"A: My bedroom is on the second floor.\nB: Which direction do the windows face?",
 funFact:"室 (room) appears in many formal room names: 教室 (classroom), 办公室 (office), 浴室 (bathroom). It is more formal than 房间. Real estate listings always use 室 to describe floor plans."},

{type:"teach", trg:"厨房(chúfáng)", src:"kitchen", pos:"noun", gender:null,
 note:"厨 (kitchen/cook) + 房 (room).\nThe cooking room.",
 example:"A: 妈妈(māma)在(zài)厨房(chúfáng)做(zuò)饭(fàn)。\nB: 今天(jīntiān)吃(chī)什么(shénme)？",
 exampleSrc:"A: Mom is cooking in the kitchen.\nB: What are we having today?",
 funFact:"Traditional Chinese kitchens were often smaller and more utilitarian than Western ones. Modern urban Chinese apartments increasingly feature open-plan kitchens, a clear cultural shift toward Western-style entertaining."},

{type:"teach", trg:"客厅(kètīng)", src:"living room", pos:"noun", gender:null,
 note:"客 (guest) + 厅 (hall).\nThe guest hall. Where you receive visitors.",
 example:"A: 客人(kèrén)在(zài)客厅(kètīng)等(děng)你(nǐ)。\nB: 好(hǎo)的(de)，我(wǒ)马上(mǎshàng)过去(guòqù)。",
 exampleSrc:"A: The guests are waiting for you in the living room.\nB: Okay, I will come right over.",
 funFact:"In older Chinese homes, the 客厅 was strictly for receiving guests. Family living happened elsewhere. Modern Chinese living rooms have absorbed Western functions (TV, relaxation) while retaining the name 'guest hall.'"},

{type:"teach", trg:"卫生间(wèishēngjiān)", src:"bathroom / toilet", pos:"noun", gender:null,
 note:"卫生 (sanitation) + 间 (room).\nThe sanitation room. Polite and common.",
 example:"A: 请问(qǐngwèn)卫生间(wèishēngjiān)在(zài)哪里(nǎlǐ)？\nB: 往(wǎng)右(yòu)拐(guǎi)就(jiù)是(shì)。",
 exampleSrc:"A: Excuse me, where is the bathroom?\nB: Turn right and it is there.",
 funFact:"卫生间 is the standard polite term. 洗手间 (washing-hands room) is even softer, like 'restroom' in English. 厕所 (cèsuǒ) is the blunt direct word, common in homes but avoided in formal places."},

{type:"mc", q:"卧室(wòshì) literally describes a room for what action?",
 opts:["eating","cooking","lying down","washing"],
 ans:"lying down",
 hint:"The first character 卧 depicts a body in a horizontal position. Think about what you do at night."},

{type:"mc", q:"Which word contains the character for 'guest'?",
 opts:["厨房(chúfáng)","客厅(kètīng)","卧室(wòshì)","卫生间(wèishēngjiān)"],
 ans:"客厅(kètīng)",
 hint:"This word names the room where you receive visitors. 客 means 'guest.'"},

{type:"fb", s:"爸爸(bàba)在(zài){1}做(zuò)饭(fàn)，很(hěn)香(xiāng)。",
 a:["厨房(chúfáng)"],
 opts:["厨房(chúfáng)","卧室(wòshì)","客厅(kètīng)","卫生间(wèishēngjiān)"],
 hint:"The room where cooking happens. 厨 (cook) + 房 (room).",
 sSrc:"Dad is cooking in the {1}. It smells wonderful."},

{type:"match", pairs:[
  {trg:"房间(fángjiān)", src:"room (generic)"},
  {trg:"卧室(wòshì)", src:"bedroom"},
  {trg:"厨房(chúfáng)", src:"kitchen"},
  {trg:"客厅(kètīng)", src:"living room"},
  {trg:"卫生间(wèishēngjiān)", src:"bathroom"}
]}

]},

// ─── L2: Furniture and Fixtures ───
{id:"zhv2_u38l2", title:"Furniture and Fixtures", icon:"🛋️", xp:15, board:true, steps:[
{type:"intro", title:"Furniture and Fixtures",
 desc:"Learn the essential furniture words: tables, chairs, beds, doors, windows. With these, you can describe any room in any home.",
 goals:["Name common furniture","Describe the layout of a room","Ask about home features"]},

{type:"teach", trg:"桌子(zhuōzi)", src:"table / desk", pos:"noun", gender:null,
 note:"桌 (table) + 子 (noun suffix).\nCovers both dining tables and desks.",
 example:"A: 请(qǐng)把(bǎ)书(shū)放(fàng)在(zài)桌子(zhuōzi)上(shàng)。\nB: 好(hǎo)的(de)，放(fàng)好(hǎo)了(le)。",
 exampleSrc:"A: Please put the books on the table.\nB: Okay, I have placed them.",
 funFact:"Chinese often distinguishes: 书桌 (study desk), 餐桌 (dining table), 茶桌 (tea table). But just 桌子 on its own is the catch-all for any table-shaped surface."},

{type:"teach", trg:"椅子(yǐzi)", src:"chair", pos:"noun", gender:null,
 note:"椅 (chair) + 子 (noun suffix).\nThe generic word for any chair.",
 example:"A: 请(qǐng)坐(zuò)，这(zhè)把(bǎ)椅子(yǐzi)很(hěn)舒服(shūfu)。\nB: 谢谢(xièxie)。",
 exampleSrc:"A: Please sit. This chair is very comfortable.\nB: Thank you.",
 funFact:"Chairs arrived relatively late in Chinese culture, around the Tang dynasty. Before that, Chinese people sat on mats on the floor. The word 椅 was coined specifically for this new imported piece of furniture."},

{type:"teach", trg:"床(chuáng)", src:"bed", pos:"noun", gender:null,
 note:"Single character. Used alone, not with 子.\nMeasure word: 张 (zhāng).",
 example:"A: 这(zhè)张(zhāng)床(chuáng)很(hěn)舒服(shūfu)。\nB: 是(shì)的(de)，我(wǒ)睡(shuì)得(de)很(hěn)好(hǎo)。",
 exampleSrc:"A: This bed is very comfortable.\nB: Yes, I sleep very well.",
 funFact:"Traditional Chinese beds were sometimes elaborate platforms with curtained canopies, almost like small rooms within rooms. Some antique 拔步床 (walk-in beds) could hold chairs and a small table alongside the bed."},

{type:"teach", trg:"门(mén)", src:"door / gate", pos:"noun", gender:null,
 note:"Single character. Pictograph of a double door.\nMeasure word: 扇 (shàn).",
 example:"A: 请(qǐng)关(guān)上(shàng)门(mén)。\nB: 好(hǎo)，我(wǒ)关(guān)上(shàng)了(le)。",
 exampleSrc:"A: Please close the door.\nB: Okay, I have closed it.",
 funFact:"The character 门 is a perfect pictograph of a traditional Chinese double door. It appears in many compound words: 门口 (doorway), 出门 (go out), 开门 (open). It is also the radical in 间, 问, 闻, and many more."},

{type:"teach", trg:"窗户(chuānghu)", src:"window", pos:"noun", gender:null,
 note:"窗 (window) + 户 (door/household).\nWindow-door. Can also be written 窗子.",
 example:"A: 打开(dǎkāi)窗户(chuānghu)，让(ràng)新鲜(xīnxiān)空气(kōngqì)进来(jìnlái)。\nB: 好(hǎo)主意(zhǔyi)。",
 exampleSrc:"A: Open the window and let the fresh air in.\nB: Good idea.",
 funFact:"户 originally showed a single-panel door (half of 门). Combining 窗 with 户 suggests a window that acts like a small door for air. 户 also means 'household,' surviving in words like 户口 (household registration)."},

{type:"teach", trg:"电视(diànshì)", src:"television / TV", pos:"noun", gender:null,
 note:"电 (electric) + 视 (vision).\nElectric vision. Short for 电视机.",
 example:"A: 晚上(wǎnshang)我(wǒ)喜欢(xǐhuan)看(kàn)电视(diànshì)。\nB: 你(nǐ)最(zuì)喜欢(xǐhuan)什么(shénme)节目(jiémù)？",
 exampleSrc:"A: I like watching TV in the evening.\nB: What is your favorite program?",
 funFact:"电 (electric) creates the word for many modern devices: 电话 (phone), 电脑 (computer, electric brain), 电影 (movie, electric shadow). Each coins a Chinese metaphor for a Western invention."},

{type:"teach", trg:"冰箱(bīngxiāng)", src:"refrigerator / fridge", pos:"noun", gender:null,
 note:"冰 (ice) + 箱 (box).\nAn ice box.",
 example:"A: 冰箱(bīngxiāng)里(lǐ)有(yǒu)什么(shénme)吃(chī)的(de)？\nB: 有(yǒu)水果(shuǐguǒ)和(hé)酸奶(suānnǎi)。",
 exampleSrc:"A: What is there to eat in the fridge?\nB: There is fruit and yogurt.",
 funFact:"箱 (box) is used for many boxy containers: 箱子 (suitcase), 工具箱 (toolbox), 信箱 (mailbox). 冰箱 is a naturally descriptive compound, just like English 'icebox' before 'refrigerator' took over."},

{type:"mc", q:"电视(diànshì) literally means:",
 opts:["electric vision","electric box","moving picture","home screen"],
 ans:"electric vision",
 hint:"电 means electric. 视 means to see or vision. Combine them literally."},

{type:"fb", s:"请(qǐng)把(bǎ)书(shū)放(fàng)在(zài){1}上(shàng)。",
 a:["桌子(zhuōzi)"],
 opts:["桌子(zhuōzi)","椅子(yǐzi)","床(chuáng)","冰箱(bīngxiāng)"],
 hint:"A flat surface at waist height. You eat or write on it.",
 sSrc:"Please put the book on the {1}."},

{type:"match", pairs:[
  {trg:"桌子(zhuōzi)", src:"table"},
  {trg:"椅子(yǐzi)", src:"chair"},
  {trg:"床(chuáng)", src:"bed"},
  {trg:"门(mén)", src:"door"},
  {trg:"窗户(chuānghu)", src:"window"}
]}

]},

// ─── L3: Keeping House ───
{id:"zhv2_u38l3", title:"Keeping House", icon:"🧹", xp:15, board:true, steps:[
{type:"intro", title:"Keeping House",
 desc:"Learn vocabulary for cleaning, tidying, and keeping a home in order. These are the verbs and adjectives of everyday home life.",
 goals:["Describe a clean or messy home","Talk about cleaning activities","Use home-related verbs"]},

{type:"teach", trg:"干净(gānjìng)", src:"clean", pos:"adj", gender:null,
 note:"干 (dry) + 净 (pure).\nDry and pure.",
 example:"A: 你(nǐ)的(de)房间(fángjiān)很(hěn)干净(gānjìng)。\nB: 我(wǒ)每(měi)天(tiān)都(dōu)打扫(dǎsǎo)。",
 exampleSrc:"A: Your room is very clean.\nB: I clean it every day.",
 funFact:"干净 can describe physical cleanliness, but also figurative purity: 做事干净 (doing things cleanly, without leaving a mess) is high praise for someone's character or work style."},

{type:"teach", trg:"打扫(dǎsǎo)", src:"to clean / to sweep", pos:"verb", gender:null,
 note:"打 (do/make) + 扫 (sweep).\nTo do the sweeping. The verb for cleaning a room.",
 example:"A: 今天(jīntiān)我(wǒ)要(yào)打扫(dǎsǎo)卧室(wòshì)。\nB: 我(wǒ)来(lái)帮(bāng)你(nǐ)。",
 exampleSrc:"A: Today I need to clean the bedroom.\nB: I will help you.",
 funFact:"Before Chinese New Year, families do a big 大扫除 (dàsǎochú, major cleaning) to sweep away the old year's bad luck. It is considered important to finish before New Year's Day, so as not to sweep good fortune away."},

{type:"teach", trg:"整理(zhěnglǐ)", src:"to tidy / to organize / to sort", pos:"verb", gender:null,
 note:"整 (whole/orderly) + 理 (arrange/manage).\nTo arrange into order. Different from 打扫.",
 example:"A: 请(qǐng)整理(zhěnglǐ)一下(yíxià)你(nǐ)的(de)桌子(zhuōzi)。\nB: 好(hǎo)，我(wǒ)马上(mǎshàng)整理(zhěnglǐ)。",
 exampleSrc:"A: Please tidy your desk a bit.\nB: Okay, I will organize it right away.",
 funFact:"整理 implies sorting and organizing, not physical cleaning. You 整理 papers, clothes, or ideas. You 打扫 floors and dust. Knowing which to use signals real fluency."},

{type:"teach", trg:"放(fàng)", src:"to put / to place", pos:"verb", gender:null,
 note:"Everyday verb. Usually followed by 在 (at/on) + location.\nAlso means 'to release / to let go.'",
 example:"A: 把(bǎ)钥匙(yàoshi)放(fàng)在(zài)桌子(zhuōzi)上(shàng)。\nB: 放(fàng)好(hǎo)了(le)。",
 exampleSrc:"A: Put the keys on the table.\nB: They are placed.",
 funFact:"放 appears everywhere: 放假 (have a holiday, 'release the days off'), 放心 (relax, 'release the heart from worry'), 放手 (let go, 'release the hand'). The image is always of letting something settle into place."},

{type:"teach", trg:"关(guān)", src:"to close / to turn off", pos:"verb", gender:null,
 note:"Used for doors, windows, and electronics.\nOpposite: 开 (kāi) to open / turn on.",
 example:"A: 太(tài)晚(wǎn)了(le)，请(qǐng)关(guān)上(shàng)电视(diànshì)。\nB: 好(hǎo)，关(guān)了(le)。",
 exampleSrc:"A: It is too late. Please turn off the TV.\nB: Okay, turned off.",
 funFact:"关 started as the word for closing a gate with a heavy bolt. Modern use extended to closing any enclosure, then to switching off devices. The word for 'customs' (海关) also uses 关: a national gate you must pass through."},

{type:"teach", trg:"开(kāi)", src:"to open / to turn on", pos:"verb", gender:null,
 note:"Partner to 关. Opens doors, devices, meetings, and cars.\n开车 (drive a car), 开会 (have a meeting).",
 example:"A: 太(tài)热(rè)了(le)，开(kāi)一下(yíxià)窗户(chuānghu)吧(ba)。\nB: 好(hǎo)，我(wǒ)开(kāi)。",
 exampleSrc:"A: It is too hot. Let us open the window.\nB: Okay, I will open it.",
 funFact:"开 is one of the busiest verbs in Chinese. 开始 (begin), 开心 (happy, 'open heart'), 开学 (start school), 开玩笑 (joke, 'open a joke'). It generally means to initiate or unlock something."},

{type:"mc", q:"Which word means physical cleaning, like sweeping floors?",
 opts:["整理(zhěnglǐ)","打扫(dǎsǎo)","干净(gānjìng)","放(fàng)"],
 ans:"打扫(dǎsǎo)",
 hint:"This verb's second character 扫 means 'to sweep.' It is the action, not the result."},

{type:"mc", q:"To turn OFF the TV, you say:",
 opts:["开电视","放电视","关电视","整理电视"],
 ans:"关电视",
 hint:"The verb for shutting a door or switching off a device. Opposite of 开."},

{type:"fb", s:"请(qǐng)把(bǎ)衣服(yīfu){1}一下(yíxià)，放(fàng)在(zài)衣柜(yīguì)里(lǐ)。",
 a:["整理(zhěnglǐ)"],
 opts:["整理(zhěnglǐ)","打扫(dǎsǎo)","关(guān)","开(kāi)"],
 hint:"The verb for sorting and organizing, not physical cleaning. 整 (orderly) + 理 (arrange).",
 sSrc:"Please {1} your clothes a bit and put them in the wardrobe."},

{type:"tip", title:"打扫 vs 整理",
 text:"Both relate to keeping things in order, but they are not interchangeable.\n打扫: physical cleaning. Sweeping, mopping, dusting.\n整理: organizing, sorting, tidying. Not about dirt, about order.\nYou might 打扫 the floor after 整理 the clothes.",
 deepDive:"A room can be 干净 (clean) but still messy (not 整齐). It can be 整齐 (orderly) but still dusty. Real cleaning involves both. This distinction shows how Chinese often splits concepts English bundles into one word."},

{type:"story", speaker:"narrator", mood:"cozy", art:"zh-home-cleaning",
 trg:"周末(zhōumò)早上(zǎoshang)，妈妈(māma)打扫(dǎsǎo)客厅(kètīng)，爸爸(bàba)整理(zhěnglǐ)书(shū)房(fáng)。小(xiǎo)明(Míng)打开(dǎkāi)窗户(chuānghu)，让(ràng)新鲜(xīnxiān)的(de)空气(kōngqì)进来(jìnlái)。家里(jiālǐ)又(yòu)干净(gānjìng)又(yòu)温暖(wēnnuǎn)。",
 src:"On Saturday morning, Mom cleans the living room while Dad tidies the study. Xiao Ming opens the windows to let fresh air in. The home is both clean and warm."}

]}

]};

export default UNIT_38;
