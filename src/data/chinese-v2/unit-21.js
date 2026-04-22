// Unit 21: Culture and Customs
// Level: B1.2 (HSK 3)
// Chinese (Mandarin) V2 format with hanzi+pinyin notation

const UNIT_21 = {
n:21, lang:"zh", srcLang:"en", track:"v2",
title:"中国文化 Chinese Culture", sub:"Traditions and Festivals",
icon:"🏮", level:"B1.2", color:"#7B5EE8",
lessons:[

// ─── L1: Festivals and Celebrations ───
{id:"zhv2_u21l1", title:"过节 Celebrating Festivals", icon:"🧧", xp:15, board:true, steps:[
{type:"intro", title:"过节 Celebrating Festivals",
 desc:"Learn vocabulary for China's most important festivals: Spring Festival and Mid-Autumn Festival. Understand the traditions of red envelopes, dumplings, and mooncakes.",
 goals:["Name major Chinese festivals and their traditions","Talk about holiday activities with 过节 and 放假","Understand the cultural significance of 春节 and 中秋节"]},

{type:"tip", title:"The Chinese Festival Calendar",
 text:"China follows two calendars: the solar (Western) calendar and the lunar calendar. Most traditional festivals follow the lunar calendar, so their dates shift each year:\n\n春节(Chūnjié) = Spring Festival (January/February)\nThe biggest holiday. Family reunion, red envelopes, dumplings, fireworks.\n\n中秋节(Zhōngqiūjié) = Mid-Autumn Festival (September/October)\nMooncakes, family gathering, moon viewing.\n\n端午节(Duānwǔjié) = Dragon Boat Festival (June)\n元宵节(Yuánxiāojié) = Lantern Festival (February)\n清明节(Qīngmíngjié) = Tomb-Sweeping Day (April)\n\nSpring Festival and Mid-Autumn Festival are the two most important for family reunions.",
 deepDive:{title:"Spring Festival: The World's Largest Migration",
  text:"Spring Festival (Chinese New Year) triggers 春运(Chūnyùn), the Spring Festival travel rush. Hundreds of millions of people travel home to be with family, making it the largest annual human migration on the planet.\n\nThe holiday lasts about 15 days. Key traditions include:\n\nCleaning the house to sweep away bad luck.\nPutting up red decorations and 对联(duìlián) couplets.\nEating 年夜饭(niányèfàn), the New Year's Eve dinner.\nGiving 红包(hóngbāo) red envelopes with money.\nSetting off fireworks at midnight.\n\nThe greeting is 新年快乐(Xīnnián kuàilè), Happy New Year, or 恭喜发财(Gōngxǐ fācái), Wishing you prosperity."}},

{type:"teach", trg:"春节(Chūnjié)", src:"Spring Festival / Chinese New Year", pos:"noun", gender:null,
 note:"Spring + festival. The most important Chinese holiday.\nAlso called 过年(guònián), passing the year.",
 example:"A: 春节(Chūnjié)你(nǐ)回家(huíjiā)吗(ma)？\nB: 当然(dāngrán)，春节(Chūnjié)一定(yídìng)要(yào)和(hé)家人(jiārén)一起(yīqǐ)过(guò)。",
 exampleSrc:"A: Will you go home for Spring Festival?\nB: Of course, you must spend Spring Festival with family.",
 funFact:"春节 originally marked the start of spring in the agricultural calendar. The character 春 shows the sun (日) pushing new growth (屯) upward. Even today, many Spring Festival foods symbolize new beginnings and fresh starts."},

{type:"teach", trg:"中秋节(Zhōngqiūjié)", src:"Mid-Autumn Festival", pos:"noun", gender:null,
 note:"Middle + autumn + festival. Falls on the 15th of the 8th lunar month.\nA time for family reunion and moon viewing.",
 example:"A: 中秋节(Zhōngqiūjié)你们(nǐmen)吃(chī)月饼(yuèbǐng)吗(ma)？\nB: 吃(chī)啊(a)，还(hái)一起(yīqǐ)赏月(shǎngyuè)。",
 exampleSrc:"A: Do you eat mooncakes at Mid-Autumn Festival?\nB: Yes, and we also view the moon together.",
 funFact:"The full moon on this night symbolizes family togetherness because its round shape represents completeness and unity. The famous poet Li Bai wrote about missing family while gazing at the moon. Moon viewing parties with tea and mooncakes remain a living tradition."},

{type:"teach", trg:"红包(hóngbāo)", src:"red envelope", pos:"noun", gender:null,
 note:"Red + packet. A gift of money in a red envelope.\nNow also digital: WeChat red envelopes are hugely popular.",
 example:"A: 过年(guònián)的(de)时候(shíhou)，长辈(zhǎngbèi)会(huì)给(gěi)孩子(háizi)红包(hóngbāo)。\nB: 对(duì)，我(wǒ)小时候(xiǎoshíhou)最(zuì)喜欢(xǐhuan)收(shōu)红包(hóngbāo)了(le)。",
 exampleSrc:"A: During New Year, elders give children red envelopes.\nB: Right, when I was young I loved receiving red envelopes.",
 funFact:"Red is the luckiest color in Chinese culture. Digital 红包 on WeChat have become a cultural phenomenon. During Spring Festival 2024, billions of digital red envelopes were sent. Common lucky amounts include 88 yuan (8 sounds like 'fortune') and 168 yuan (sounds like 'road to prosperity')."},

{type:"teach", trg:"饺子(jiǎozi)", src:"dumplings", pos:"noun", gender:null,
 note:"A northern Chinese staple, especially during Spring Festival.\nShaped like ancient gold ingots, symbolizing wealth.",
 example:"A: 你(nǐ)会(huì)包(bāo)饺子(jiǎozi)吗(ma)？\nB: 会(huì)，我(wǒ)妈妈(māma)教(jiāo)我(wǒ)的(de)。",
 exampleSrc:"A: Can you make dumplings?\nB: Yes, my mom taught me.",
 funFact:"The word 饺子 sounds similar to 交子(jiāozǐ), the name of an ancient Chinese currency and also meaning 'transition of the year.' Eating dumplings at midnight on New Year's Eve symbolizes wealth and the transition from old to new."},

{type:"teach", trg:"月饼(yuèbǐng)", src:"mooncake", pos:"noun", gender:null,
 note:"Moon + cake. A round pastry eaten during Mid-Autumn Festival.\nTraditional filling: lotus seed paste with salted egg yolk.",
 example:"A: 你(nǐ)喜欢(xǐhuan)吃(chī)什么(shénme)口味(kǒuwèi)的(de)月饼(yuèbǐng)？\nB: 我(wǒ)喜欢(xǐhuan)吃(chī)五仁(wǔrén)的(de)。",
 exampleSrc:"A: What flavor mooncake do you like?\nB: I like five-nut flavor.",
 funFact:"Mooncakes played a role in history. Legend says that during the Yuan Dynasty, secret messages were hidden inside mooncakes to coordinate a rebellion against Mongol rule. Whether true or not, the story makes mooncakes one of the most culturally symbolic foods in China."},

{type:"teach", trg:"放假(fàngjià)", src:"to have a holiday / vacation", pos:"verb", gender:null,
 note:"Release + vacation. A verb-object compound.\n放 = release, 假 = leave/vacation. Can be split: 放了三天假.",
 example:"A: 春节(Chūnjié)放假(fàngjià)几天(jǐtiān)？\nB: 一般(yībān)放(fàng)七天(qītiān)假(jià)。",
 exampleSrc:"A: How many days off for Spring Festival?\nB: Usually seven days off.",
 funFact:"China has seven official public holidays totaling about 29 days off per year, but some are created by swapping with weekends, so workers sometimes have to work on Saturdays or Sundays to compensate. This system is called 调休(tiáoxiū), adjusted rest."},

{type:"mc", q:"Which festival involves eating 月饼(yuèbǐng) and viewing the moon?",
 opts:["春节(Chūnjié)","中秋节(Zhōngqiūjié)","端午节(Duānwǔjié)","元宵节(Yuánxiāojié)"],
 ans:"中秋节(Zhōngqiūjié)",
 hint:"This festival falls in mid-autumn. Its name literally contains the characters for 'middle' and 'autumn.'"},

{type:"match", pairs:[
  {trg:"春节(Chūnjié)", src:"Spring Festival"},
  {trg:"中秋节(Zhōngqiūjié)", src:"Mid-Autumn Festival"},
  {trg:"红包(hóngbāo)", src:"red envelope"},
  {trg:"饺子(jiǎozi)", src:"dumplings"},
  {trg:"月饼(yuèbǐng)", src:"mooncake"},
  {trg:"放假(fàngjià)", src:"to have holiday"}
]},

{type:"fb", s:"过年(guònián)的(de)时候(shíhou)，爷爷(yéye)给(gěi)了(le)我(wǒ)一个(yígè){1}。",
 a:["红包(hóngbāo)"],
 opts:["红包(hóngbāo)","月饼(yuèbǐng)","饺子(jiǎozi)","龙(lóng)"],
 hint:"Elders give these to younger family members during New Year. They are red and contain money.",
 sSrc:"During New Year, grandpa gave me a {1}."},

{type:"mc", q:"饺子(jiǎozi) are especially associated with Spring Festival because:",
 opts:["They are shaped like ancient gold ingots, symbolizing wealth","They are made from rice, the symbol of spring","They are the cheapest food available","They were invented during Spring Festival"],
 ans:"They are shaped like ancient gold ingots, symbolizing wealth",
 hint:"The crescent shape of these dumplings resembles something valuable from ___ China, and the name sounds ___ an old word for currency."},

{type:"fb", s:"春节(Chūnjié)一般(yībān){1}七天(qītiān)。",
 a:["放假(fàngjià)"],
 opts:["放假(fàngjià)","庆祝(qìngzhù)","过年(guònián)","春节(Chūnjié)"],
 hint:"This verb-object compound means 'to have time off from work.' It describes the holiday break.",
 sSrc:"Spring Festival usually has {1} for seven days."}
]},

// ─── L2: Cultural Symbols ───
{id:"zhv2_u21l2", title:"龙和传统 Dragons and Traditions", icon:"🐉", xp:15, board:true, steps:[
{type:"intro", title:"龙和传统 Dragons and Traditions",
 desc:"Learn about Chinese cultural symbols like the dragon, traditions, and the concept of culture itself. Understand how to talk about customs and what makes something traditional.",
 goals:["Talk about Chinese cultural symbols","Use 文化 and 传统 in conversation","Understand the significance of 龙 in Chinese culture"]},

{type:"teach", trg:"文化(wénhuà)", src:"culture", pos:"noun", gender:null,
 note:"Writing/pattern + transform. Culture as the transformative power of learning.\n中国文化 = Chinese culture. 文化差异 = cultural differences.",
 example:"A: 你(nǐ)对(duì)中国(Zhōngguó)文化(wénhuà)感兴趣(gǎnxìngqù)吗(ma)？\nB: 非常(fēicháng)感兴趣(gǎnxìngqù)，特别(tèbié)是(shì)饮食(yǐnshí)文化(wénhuà)。",
 exampleSrc:"A: Are you interested in Chinese culture?\nB: Very interested, especially food culture.",
 funFact:"文 originally meant patterns or lines carved on objects, then evolved to mean writing and literature. 化 means transformation. So 文化 literally means 'transformation through writing/learning.' This reflects the Confucian belief that civilization comes through education and literacy."},

{type:"teach", trg:"传统(chuántǒng)", src:"tradition / traditional", pos:"noun", gender:null,
 note:"Pass on + unite/govern. Practices handed down through generations.\nBoth a noun and an adjective: 传统文化 = traditional culture.",
 example:"A: 过年(guònián)吃(chī)饺子(jiǎozi)是(shì)中国(Zhōngguó)的(de)传统(chuántǒng)。\nB: 对(duì)，这个(zhège)传统(chuántǒng)已经(yǐjīng)有(yǒu)几千年(jǐqiānnián)了(le)。",
 exampleSrc:"A: Eating dumplings during New Year is a Chinese tradition.\nB: Right, this tradition is already thousands of years old.",
 funFact:"传 means to pass on or transmit, and 统 means to unite or govern. A tradition is something that unifies people as it is passed from generation to generation. China takes great pride in its 5,000 years of unbroken cultural traditions."},

{type:"teach", trg:"龙(lóng)", src:"dragon", pos:"noun", gender:null,
 note:"One of the most important symbols in Chinese culture.\nCompletely different from Western dragons: a benevolent, auspicious creature.",
 example:"A: 中国人(Zhōngguórén)为什么(wèishénme)喜欢(xǐhuan)龙(lóng)？\nB: 因为(yīnwèi)龙(lóng)在(zài)中国(Zhōngguó)文化(wénhuà)里(lǐ)代表(dàibiǎo)力量(lìliàng)和(hé)好运(hǎoyùn)。",
 exampleSrc:"A: Why do Chinese people like dragons?\nB: Because in Chinese culture dragons represent power and good luck.",
 funFact:"Chinese dragons are nothing like Western dragons. They do not breathe fire or guard treasure. They are wise, benevolent water spirits that bring rain and good fortune. Chinese people call themselves 龙的传人(lóng de chuánrén), descendants of the dragon. The Year of the Dragon is the most popular year to have children."},

{type:"teach", trg:"庆祝(qìngzhù)", src:"to celebrate", pos:"verb", gender:null,
 note:"Celebrate + wish. Used for festivals, birthdays, and achievements.\n庆祝生日 = celebrate a birthday. 庆祝节日 = celebrate a holiday.",
 example:"A: 你们(nǐmen)怎么(zěnme)庆祝(qìngzhù)春节(Chūnjié)？\nB: 我们(wǒmen)全家(quánjiā)一起(yīqǐ)吃(chī)年夜饭(niányèfàn)。",
 exampleSrc:"A: How do you celebrate Spring Festival?\nB: Our whole family eats the New Year's Eve dinner together.",
 funFact:"庆 contains the heart radical, because celebration comes from the heart. In traditional celebrations, red is the dominant color because it symbolizes luck, joy, and prosperity. Red lanterns, red couplets, red envelopes, red firecrackers: red is everywhere during Chinese festivals."},

{type:"teach", trg:"习惯(xíguàn)", src:"habit / custom / to be used to", pos:"noun", gender:null,
 note:"Practice + accustomed. Both a noun and a verb.\nAs a verb: 习惯了 = got used to something.",
 example:"A: 你(nǐ)习惯(xíguàn)用(yòng)筷子(kuàizi)吃饭(chīfàn)吗(ma)？\nB: 刚(gāng)开始(kāishǐ)不(bù)习惯(xíguàn)，现在(xiànzài)习惯(xíguàn)了(le)。",
 exampleSrc:"A: Are you used to eating with chopsticks?\nB: At first I was not used to it, now I am.",
 funFact:"习 originally meant a young bird practicing flight, with repeated wing flaps. Combined with 惯 (accustomed), it captures the idea that customs are practices repeated until they become second nature. 习惯 bridges personal habits and cultural customs in one word."},

{type:"mc", q:"How does the Chinese 龙(lóng) differ from Western dragons?",
 opts:["Chinese dragons are benevolent and bring good luck","Chinese dragons breathe fire","Chinese dragons guard gold","Chinese dragons have wings"],
 ans:"Chinese dragons are benevolent and bring good luck",
 hint:"In ___ culture, this creature is associated with water, rain, wisdom, and ___ fortune, not destruction."},

{type:"match", pairs:[
  {trg:"文化(wénhuà)", src:"culture"},
  {trg:"传统(chuántǒng)", src:"tradition"},
  {trg:"龙(lóng)", src:"dragon"},
  {trg:"庆祝(qìngzhù)", src:"to celebrate"},
  {trg:"习惯(xíguàn)", src:"habit / custom"}
]},

{type:"fb", s:"吃(chī)饺子(jiǎozi)是(shì)春节(Chūnjié)的(de){1}。",
 a:["传统(chuántǒng)"],
 opts:["传统(chuántǒng)","文化(wénhuà)","庆祝(qìngzhù)","习惯(xíguàn)"],
 hint:"This word describes a practice that has been passed down through many generations.",
 sSrc:"Eating dumplings is a Spring Festival {1}."},

{type:"mc", q:"文化(wénhuà) literally means:",
 opts:["transformation through writing/learning","old stories","festival traditions","family customs"],
 ans:"transformation through writing/learning",
 hint:"文 relates to … and patterns, while 化 means … or change."},

{type:"fb", s:"我(wǒ)已经(yǐjīng){1}了(le)中国(Zhōngguó)的(de)生活(shēnghuó)。",
 a:["习惯(xíguàn)"],
 opts:["习惯(xíguàn)","传统(chuántǒng)","文化(wénhuà)","庆祝(qìngzhù)"],
 hint:"This word can be both a noun (custom) and a verb (to become accustomed to). Here it is used as a verb with 了.",
 sSrc:"I have already gotten {1} to life in China."},

{type:"mc", q:"我们(wǒmen)怎么(zěnme)庆祝(qìngzhù)你(nǐ)的(de)生日(shēngrì)？ This asks:",
 opts:["How shall we celebrate your birthday?","When is your birthday?","Where is the birthday party?","Do you want a birthday gift?"],
 ans:"How shall we celebrate your birthday?",
 hint:"怎么 asks 'how,' and 庆祝 means 'to ___.' The question is about the method of celebration."},

{type:"fb", s:"中国(Zhōngguó){1}有(yǒu)五千年(wǔqiānnián)的(de)历史(lìshǐ)。",
 a:["文化(wénhuà)"],
 opts:["文化(wénhuà)","传统(chuántǒng)","习惯(xíguàn)","龙(lóng)"],
 hint:"This word means the entire body of arts, beliefs, and practices of a civilization.",
 sSrc:"Chinese {1} has five thousand years of history."}
]},

// ─── L3: Social Customs ───
{id:"zhv2_u21l3", title:"做客 Being a Guest", icon:"🎁", xp:15, board:true, steps:[
{type:"intro", title:"做客 Being a Guest",
 desc:"Learn about Chinese social customs around gift-giving, showing respect, and being a good guest. These social skills are essential for navigating Chinese culture.",
 goals:["Talk about gift-giving customs","Use 尊重 to discuss showing respect","Describe events as 热闹 (lively and bustling)"]},

{type:"teach", trg:"礼物(lǐwù)", src:"gift / present", pos:"noun", gender:null,
 note:"Ceremony/politeness + thing. A gift given as a social courtesy.\n送礼物 = to give a gift. 收礼物 = to receive a gift.",
 example:"A: 去(qù)朋友(péngyou)家(jiā)做客(zuòkè)要(yào)带(dài)礼物(lǐwù)吗(ma)？\nB: 最好(zuìhǎo)带(dài)一些(yīxiē)水果(shuǐguǒ)或者(huòzhě)点心(diǎnxin)。",
 exampleSrc:"A: Should you bring a gift when visiting a friend's home?\nB: It is best to bring some fruit or pastries.",
 funFact:"In Chinese culture, gifts should be given and received with both hands. Refusing a gift once or twice before accepting is considered polite. You should never open a gift in front of the giver. And never give clocks as gifts: 送钟(sòng zhōng) sounds like 送终(sòngzhōng), attending a funeral."},

{type:"teach", trg:"客人(kèrén)", src:"guest / visitor", pos:"noun", gender:null,
 note:"Guest + person. A visitor to your home or establishment.\nRelated: 做客(zuòkè) = to be a guest, 请客(qǐngkè) = to treat someone.",
 example:"A: 今天(jīntiān)家(jiā)里(lǐ)来(lái)了(le)客人(kèrén)。\nB: 是(shì)谁(shéi)来(lái)了(le)？\nA: 爸爸(bàba)的(de)同事(tóngshì)。",
 exampleSrc:"A: We have guests at home today.\nB: Who came?\nA: Dad's colleagues.",
 funFact:"Chinese hospitality culture runs deep. A host will repeatedly offer food and drink, and a polite guest will decline once or twice before accepting. The phrase 有朋自远方来(yǒu péng zì yuǎnfāng lái), 'When friends come from afar,' from Confucius, captures the joy of hosting visitors."},

{type:"teach", trg:"尊重(zūnzhòng)", src:"to respect", pos:"verb", gender:null,
 note:"Revere + heavy/important. To treat with honor and consideration.\nAlso a noun: 尊重 = respect. 互相尊重 = mutual respect.",
 example:"A: 我们(wǒmen)应该(yīnggāi)尊重(zūnzhòng)不同(bùtóng)国家(guójiā)的(de)文化(wénhuà)。\nB: 对(duì)，每个(měigè)文化(wénhuà)都(dōu)有(yǒu)它(tā)的(de)价值(jiàzhí)。",
 exampleSrc:"A: We should respect the cultures of different countries.\nB: Right, every culture has its value.",
 funFact:"尊 originally depicted a vessel for ritual wine offerings to ancestors. Showing respect 尊重 in Chinese culture begins with respecting elders and ancestors. The concepts of filial piety (孝, xiào) and respect for age (尊老爱幼, zūnlǎo àiyòu) are core Chinese values."},

{type:"teach", trg:"热闹(rènao)", src:"lively / bustling", pos:"adj", gender:null,
 note:"Hot + noisy. Describes a joyful, energetic atmosphere.\nOpposite: 冷清(lěngqīng), cold and quiet.",
 example:"A: 春节(Chūnjié)的(de)时候(shíhou)街上(jiēshàng)很(hěn)热闹(rènao)。\nB: 是(shì)啊(a)，到处(dàochù)都是(dōushì)灯笼(dēnglong)和(hé)人(rén)。",
 exampleSrc:"A: During Spring Festival the streets are very lively.\nB: Yes, everywhere there are lanterns and people.",
 funFact:"热闹 is always positive in Chinese. A festive market, a crowded celebration, a noisy family dinner: all are 热闹. Chinese culture generally values togetherness and energy. A 冷清 (cold and quiet) gathering would be considered unfortunate, especially during festivals."},

{type:"tip", title:"Gift-Giving Etiquette in China",
 text:"When visiting a Chinese home or giving gifts, remember these customs:\n\nDO:\n- Bring fruit, tea, or pastries when visiting\n- Give and receive with BOTH hands\n- Wrap gifts in red or gold paper (lucky colors)\n- Decline a gift once before accepting (polite ritual)\n\nDO NOT:\n- Give clocks (sounds like 'funeral')\n- Give pears to share (sounds like 'separation')\n- Wrap gifts in white paper (associated with funerals)\n- Open a gift in front of the giver\n\nThese rules come from deeply rooted cultural values about face, respect, and symbolic meaning.",
 deepDive:{title:"The Concept of 面子(miànzi): Face",
  text:"Much of Chinese social behavior revolves around 面子(miànzi), or 'face.' Face is your social reputation, dignity, and standing.\n\nGiving face: praising someone publicly, showing respect.\nLosing face: embarrassment, being corrected publicly.\nSaving face: avoiding direct confrontation.\n\nGift-giving, hosting guests, and polite refusals all connect to face. When a host insists you eat more, declining too quickly could make them lose face (suggesting their food is not good). Accepting after polite resistance gives both sides face."}},

{type:"mc", q:"In Chinese culture, when should you open a gift?",
 opts:["Immediately in front of the giver","Later, in private","Only if the giver asks you to","After saying thank you three times"],
 ans:"Later, in private",
 hint:"Chinese etiquette differs from Western customs here. Opening a gift right away could seem greedy or create awkwardness."},

{type:"match", pairs:[
  {trg:"礼物(lǐwù)", src:"gift / present"},
  {trg:"客人(kèrén)", src:"guest / visitor"},
  {trg:"尊重(zūnzhòng)", src:"to respect"},
  {trg:"热闹(rènao)", src:"lively / bustling"}
]},

{type:"fb", s:"去(qù)别人(biérén)家(jiā)做客(zuòkè)，应该(yīnggāi)带(dài){1}。",
 a:["礼物(lǐwù)"],
 opts:["礼物(lǐwù)","客人(kèrén)","红包(hóngbāo)","饺子(jiǎozi)"],
 hint:"When visiting someone's home, you should bring something to show appreciation. This word means 'present.'",
 sSrc:"When visiting someone's home, you should bring a {1}."},

{type:"mc", q:"热闹(rènao) describes:",
 opts:["A lively, energetic atmosphere","A quiet, peaceful atmosphere","A sad, lonely atmosphere","A dangerous, chaotic atmosphere"],
 ans:"A lively, energetic atmosphere",
 hint:"This word combines 'hot' and 'noisy.' In Chinese culture, this kind of ___ is always positive and festive."},

{type:"fb", s:"我们(wǒmen)应该(yīnggāi){1}每个(měigè)国家(guójiā)的(de)传统(chuántǒng)。",
 a:["尊重(zūnzhòng)"],
 opts:["尊重(zūnzhòng)","庆祝(qìngzhù)","习惯(xíguàn)","热闹(rènao)"],
 hint:"This verb means to treat something or someone with honor and consideration.",
 sSrc:"We should {1} every country's traditions."},

{type:"mc", q:"家(jiā)里(lǐ)来(lái)了(le)客人(kèrén)。 What happened?",
 opts:["Guests came to the house","The family went out","The house became empty","The guests left"],
 ans:"Guests came to the house",
 hint:"来了 means '___.' 客人 means '___.' The sentence describes visitors arriving at someone's home."},

{type:"fb", s:"过年(guònián)的(de)时候(shíhou)，到处(dàochù)都(dōu)很(hěn){1}。",
 a:["热闹(rènao)"],
 opts:["热闹(rènao)","客人(kèrén)","尊重(zūnzhòng)","礼物(lǐwù)"],
 hint:"During New Year, everywhere is lively, energetic, and full of festive noise and color.",
 sSrc:"During New Year, everywhere is very {1}."},

{type:"drag_fill",
 s:"去(qù)朋友(péngyou)家(jiā)做(zuò){1}，要(yào)带(dài){2}，还要(háiyào){3}他们(tāmen)的(de){4}。",
 blanks:{"1":"客(kè)","2":"礼物(lǐwù)","3":"尊重(zūnzhòng)","4":"习惯(xíguàn)"},
 pool:["客(kè)","礼物(lǐwù)","尊重(zūnzhòng)","习惯(xíguàn)"],
 hint:"When being a guest at a friend's home, bring a present, and respect their customs."}
]},

// ─── L4: Unit 21 Review ───
{id:"zhv2_u21l4", title:"文化复习 Culture Review", icon:"🔄", xp:15, board:true, steps:[
{type:"intro", title:"文化复习 Culture Review",
 desc:"Review all culture and customs vocabulary from this unit. Test your knowledge of Chinese festivals, traditions, and social etiquette.",
 goals:["Review all 15 culture and customs words","Connect vocabulary to cultural practices","Demonstrate understanding of Chinese social norms"]},

{type:"match", pairs:[
  {trg:"春节(Chūnjié)", src:"Spring Festival"},
  {trg:"月饼(yuèbǐng)", src:"mooncake"},
  {trg:"龙(lóng)", src:"dragon"},
  {trg:"传统(chuántǒng)", src:"tradition"},
  {trg:"文化(wénhuà)", src:"culture"}
]},

{type:"mc", q:"红包(hóngbāo) are given during Spring Festival by:",
 opts:["Elders to younger family members","Children to their parents","Friends to strangers","Teachers to students"],
 ans:"Elders to younger family members",
 hint:"This is a traditional practice where the older generation passes money in red envelopes to the ___ generation."},

{type:"fb", s:"中秋节(Zhōngqiūjié)的(de)时候(shíhou)，我们(wǒmen)一起(yīqǐ)吃(chī){1}。",
 a:["月饼(yuèbǐng)"],
 opts:["月饼(yuèbǐng)","饺子(jiǎozi)","红包(hóngbāo)","礼物(lǐwù)"],
 hint:"This round pastry is the signature food of Mid-Autumn Festival, named after the celestial body you view that night.",
 sSrc:"During Mid-Autumn Festival, we eat {1} together."},

{type:"mc", q:"Which word means both 'habit' and 'to be used to something'?",
 opts:["传统(chuántǒng)","习惯(xíguàn)","文化(wénhuà)","庆祝(qìngzhù)"],
 ans:"习惯(xíguàn)",
 hint:"This word functions as both a noun (custom/habit) and a verb (to get accustomed to). Adding 了 makes it a verb."},

{type:"fb", s:"我们(wǒmen)全家(quánjiā){1}春节(Chūnjié)。",
 a:["庆祝(qìngzhù)"],
 opts:["庆祝(qìngzhù)","放假(fàngjià)","尊重(zūnzhòng)","习惯(xíguàn)"],
 hint:"This verb means to observe or mark a happy occasion with festivities.",
 sSrc:"Our whole family {1} Spring Festival."},

{type:"match", pairs:[
  {trg:"红包(hóngbāo)", src:"red envelope"},
  {trg:"饺子(jiǎozi)", src:"dumplings"},
  {trg:"放假(fàngjià)", src:"to have holiday"},
  {trg:"庆祝(qìngzhù)", src:"to celebrate"},
  {trg:"热闹(rènao)", src:"lively / bustling"}
]},

{type:"mc", q:"In Chinese culture, 龙(lóng) represents:",
 opts:["Power and good fortune","Danger and destruction","Fire and war","Fear and darkness"],
 ans:"Power and good fortune",
 hint:"Unlike Western mythology, the Chinese version of this creature is a positive, benevolent symbol associated with water and prosperity."},

{type:"fb", s:"今天(jīntiān)家(jiā)里(lǐ)来(lái)了(le)很多(hěnduō){1}。",
 a:["客人(kèrén)"],
 opts:["客人(kèrén)","礼物(lǐwù)","龙(lóng)","传统(chuántǒng)"],
 hint:"This noun means visitors or guests. It combines the character for 'guest' with the character for 'person.'",
 sSrc:"Many {1} came to the house today."},

{type:"mc", q:"春节(Chūnjié)放假(fàngjià)几天(jǐtiān)？ This asks:",
 opts:["How many days off for Spring Festival?","When is Spring Festival?","Where do you go for Spring Festival?","How do you celebrate Spring Festival?"],
 ans:"How many days off for Spring Festival?",
 hint:"几天 asks 'how ___ ___,' and 放假 means 'to have holiday.' The question is about the length of the break."},

{type:"fb", s:"每个(měigè)国家(guójiā)都(dōu)有(yǒu)自己(zìjǐ)的(de){1}和(hé)传统(chuántǒng)。",
 a:["文化(wénhuà)"],
 opts:["文化(wénhuà)","龙(lóng)","客人(kèrén)","热闹(rènao)"],
 hint:"Every country has its own body of arts, beliefs, and practices. This word starts the pair.",
 sSrc:"Every country has its own {1} and traditions."},

{type:"drag_fill",
 s:"春节(Chūnjié)是(shì)中国(Zhōngguó)最(zuì)重要(zhòngyào)的(de){1}，人们(rénmen){2}，吃(chī){3}，给(gěi)孩子(háizi){4}。",
 blanks:{"1":"传统(chuántǒng)","2":"庆祝(qìngzhù)","3":"饺子(jiǎozi)","4":"红包(hóngbāo)"},
 pool:["传统(chuántǒng)","庆祝(qìngzhù)","饺子(jiǎozi)","红包(hóngbāo)"],
 hint:"Spring Festival is the most important tradition. People celebrate, eat the signature food, and give children money in red envelopes."},

{type:"mc", q:"尊重(zūnzhòng) is especially important in Chinese culture because:",
 opts:["Respecting elders and ancestors is a core Confucian value","It is required by law","It only applies to strangers","It is a modern Western import"],
 ans:"Respecting elders and ancestors is a core Confucian value",
 hint:"This concept connects to filial piety and the deep tradition of honoring those who came before you."}
]}

]};

export default UNIT_21;
