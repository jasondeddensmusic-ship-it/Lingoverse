// Unit 37: Friends and Colleagues
// Level: A2.2 (HSK 2-3)
// Chinese (Mandarin) V2 format with hanzi+pinyin notation

const UNIT_37 = {
n:37, lang:"zh", srcLang:"en", track:"v2",
title:"朋友和同事 Friends and Colleagues", sub:"Relationships",
icon:"👥", level:"A2.2", color:"#7B5EE8",
lessons:[

// ─── L1: People in Your Life ───
{id:"zhv2_u37l1", title:"People in Your Life", icon:"🧑‍🤝‍🧑", xp:15, board:true, steps:[
{type:"intro", title:"People in Your Life",
 desc:"Build vocabulary for the people around you in daily life: close friends, work colleagues, and neighbors. Learn to describe your social circles clearly.",
 goals:["Name different types of social relationships","Distinguish friends from colleagues","Talk about people in your neighborhood"]},

{type:"teach", trg:"朋友(péngyou)", src:"friend", pos:"noun", gender:null,
 note:"朋 (friend) + 友 (friend).\nDouble emphasis on friendship. The most common word for 'friend.'",
 example:"A: 他(tā)是(shì)我(wǒ)的(de)朋友(péngyou)。\nB: 你们(nǐmen)认识(rènshi)多(duō)久(jiǔ)了(le)？",
 exampleSrc:"A: He is my friend.\nB: How long have you known each other?",
 funFact:"朋 originally depicted two strings of cowrie shells hung side by side: an image of two things of equal value together. 友 shows two right hands clasping. Friendship as parallel and hand-in-hand."},

{type:"teach", trg:"同事(tóngshì)", src:"colleague / coworker", pos:"noun", gender:null,
 note:"同 (same) + 事 (matter/work).\nPeople who work on the same matters with you.",
 example:"A: 她(tā)是(shì)我(wǒ)的(de)同事(tóngshì)。\nB: 你们(nǐmen)在(zài)同(tóng)一(yí)个(gè)部门(bùmén)吗(ma)？",
 exampleSrc:"A: She is my colleague.\nB: Are you in the same department?",
 funFact:"Many Chinese relationship words start with 同 (same): 同学 (classmate, same study), 同事 (colleague, same work), 同乡 (person from same hometown). The prefix marks shared context."},

{type:"teach", trg:"邻居(línjū)", src:"neighbor", pos:"noun", gender:null,
 note:"邻 (neighboring) + 居 (reside/dwell).\nThe people who dwell next to you.",
 example:"A: 我(wǒ)的(de)邻居(línjū)很(hěn)热情(rèqíng)。\nB: 真(zhēn)好(hǎo)，我(wǒ)的(de)邻居(línjū)很(hěn)安静(ānjìng)。",
 exampleSrc:"A: My neighbor is very warm and friendly.\nB: That is nice. My neighbors are very quiet.",
 funFact:"A Chinese saying goes 远亲不如近邻 (a distant relative is not as good as a close neighbor). Good neighbors have traditionally been seen as more practically valuable than far-away family."},

{type:"teach", trg:"认识(rènshi)", src:"to know (a person) / to be acquainted with", pos:"verb", gender:null,
 note:"认 (recognize) + 识 (know/recognize).\nFor knowing PEOPLE, not facts. Use 知道 for information.",
 example:"A: 你(nǐ)认识(rènshi)王(Wáng)老师(lǎoshī)吗(ma)？\nB: 认识(rènshi)，我(wǒ)们(men)是(shì)老(lǎo)朋友(péngyou)。",
 exampleSrc:"A: Do you know Teacher Wang?\nB: Yes, we are old friends.",
 funFact:"认识 is only for people and places you have personally encountered. 知道 is for knowing facts. You 认识 a person but 知道 their name. Mixing them up is a common learner error."},

{type:"teach", trg:"介绍(jièshào)", src:"to introduce / introduction", pos:"verb", gender:null,
 note:"介 (between/go between) + 绍 (continue/connect).\nConnecting two people who do not yet know each other.",
 example:"A: 我(wǒ)来(lái)介绍(jièshào)一下(yíxià)，这(zhè)是(shì)我(wǒ)的(de)同事(tóngshì)李(Lǐ)明(Míng)。\nB: 你(nǐ)好(hǎo)，很(hěn)高兴(gāoxìng)认识(rènshi)你(nǐ)。",
 exampleSrc:"A: Let me introduce. This is my colleague Li Ming.\nB: Hello, nice to meet you.",
 funFact:"我来介绍一下 (let me introduce) is the standard polite opener when bringing two people together. The 一下 softens it, making the formality feel lighter and more natural."},

{type:"mc", q:"朋友(péngyou) literally contains two characters that both mean:",
 opts:["work","same","home","friend"],
 ans:"friend",
 hint:"The word doubles the same concept. Both characters carry the same meaning as the word itself."},

{type:"mc", q:"To say 'my neighbor,' you use:",
 opts:["朋友(péngyou)","同事(tóngshì)","邻居(línjū)","老师(lǎoshī)"],
 ans:"邻居(línjū)",
 hint:"This word combines 'neighboring' + 'reside.' People who dwell next to you."},

{type:"fb", s:"她(tā)是(shì)我(wǒ)的(de){1}，我们(wǒmen)在(zài)同(tóng)一(yí)家(jiā)公司(gōngsī)。",
 a:["同事(tóngshì)"],
 opts:["同事(tóngshì)","朋友(péngyou)","邻居(línjū)","老师(lǎoshī)"],
 hint:"The word for someone who works at the same place as you. 同 (same) + 事 (work).",
 sSrc:"She is my {1}. We work at the same company."},

{type:"match", pairs:[
  {trg:"朋友(péngyou)", src:"friend"},
  {trg:"同事(tóngshì)", src:"colleague"},
  {trg:"邻居(línjū)", src:"neighbor"},
  {trg:"认识(rènshi)", src:"to know (a person)"},
  {trg:"介绍(jièshào)", src:"to introduce"}
]},

{type:"story", speaker:"narrator", mood:"warm", art:"zh-social-intro",
 trg:"在(zài)办公室(bàngōngshì)里(lǐ)，王(Wáng)经理(jīnglǐ)介绍(jièshào)新(xīn)同事(tóngshì)：\"这(zhè)是(shì)张(Zhāng)明(Míng)，他(tā)是(shì)我(wǒ)的(de)老(lǎo)朋友(péngyou)，也(yě)是(shì)你们(nǐmen)的(de)新(xīn)同事(tóngshì)。\"",
 src:"In the office, Manager Wang introduced a new colleague: 'This is Zhang Ming. He is my old friend, and also your new colleague.'"}

]},

// ─── L2: Social Interactions ───
{id:"zhv2_u37l2", title:"Social Interactions", icon:"💬", xp:15, board:true, steps:[
{type:"intro", title:"Social Interactions",
 desc:"Learn the verbs of everyday social life: chatting, meeting up, helping each other, and making plans together. These are the actions that build friendships.",
 goals:["Use verbs for chatting and meeting","Arrange meetings with friends","Express helping and caring"]},

{type:"teach", trg:"聊天(liáotiān)", src:"to chat", pos:"verb", gender:null,
 note:"聊 (chat) + 天 (sky/heaven).\nChatting so freely that you talk about the sky. Separable verb.",
 example:"A: 我们(wǒmen)一起(yìqǐ)喝(hē)茶(chá)聊天(liáotiān)吧(ba)。\nB: 好(hǎo)主意(zhǔyi)，去(qù)哪(nǎ)家(jiā)茶馆(cháguǎn)？",
 exampleSrc:"A: Let us have tea and chat together.\nB: Good idea. Which teahouse shall we go to?",
 funFact:"聊天 is a separable verb: you can say 聊了一个小时的天 (chatted for an hour). The 天 (sky) part emphasizes how wide-ranging and informal chat can be, like sky with no borders."},

{type:"teach", trg:"见面(jiànmiàn)", src:"to meet (someone)", pos:"verb", gender:null,
 note:"见 (see) + 面 (face).\nSeeing each other's faces. Separable verb.",
 example:"A: 我们(wǒmen)明天(míngtiān)见面(jiànmiàn)吧(ba)？\nB: 好(hǎo)，几(jǐ)点(diǎn)在(zài)哪里(nǎlǐ)？",
 exampleSrc:"A: Shall we meet tomorrow?\nB: Okay. What time and where?",
 funFact:"见面 is separable: 见了一次面 (met once). Unlike English 'meet,' which can mean first meeting or any reunion, 见面 is used broadly for any in-person meeting after having been apart."},

{type:"teach", trg:"聊(liáo)", src:"to chat / to talk informally", pos:"verb", gender:null,
 note:"Shorter form, often used with objects: 聊一会儿 (chat for a while), 聊工作 (talk about work).",
 example:"A: 我(wǒ)想(xiǎng)跟(gēn)你(nǐ)聊(liáo)一(yí)下(xià)。\nB: 好(hǎo)的(de)，你(nǐ)说(shuō)。",
 exampleSrc:"A: I want to chat with you for a moment.\nB: Okay, go ahead.",
 funFact:"聊一下 (chat briefly) is a common soft opener for serious conversations. The 一下 (for a moment) makes the approach feel casual, even when the content is important."},

{type:"teach", trg:"帮助(bāngzhù)", src:"to help / help", pos:"verb", gender:null,
 note:"帮 (help) + 助 (assist).\nDouble emphasis on helping. Both a verb and a noun.",
 example:"A: 谢谢(xièxie)你(nǐ)的(de)帮助(bāngzhù)。\nB: 不(bú)客气(kèqi)，朋友(péngyou)之间(zhījiān)应该(yīnggāi)互相(hùxiāng)帮助(bāngzhù)。",
 exampleSrc:"A: Thank you for your help.\nB: You are welcome. Friends should help each other.",
 funFact:"帮助 is the formal version. In casual speech, 帮 alone is more common: 帮我 (help me). The longer form adds a slight weight and formality to the request."},

{type:"teach", trg:"约(yuē)", src:"to make an appointment / to arrange", pos:"verb", gender:null,
 note:"Used for arranging meetings: 约时间 (set a time), 约见面 (arrange to meet).",
 example:"A: 我们(wǒmen)约(yuē)个(gè)时间(shíjiān)吃(chī)饭(fàn)吧(ba)？\nB: 这(zhè)个(gè)周末(zhōumò)怎么样(zěnmeyàng)？",
 exampleSrc:"A: Shall we set a time to have a meal?\nB: How about this weekend?",
 funFact:"约 has evolved a modern meaning too: in youth slang, 约 can mean 'to date' or 'to hook up,' giving the word both innocent and romantic shades depending on context."},

{type:"teach", trg:"打电话(dǎdiànhuà)", src:"to make a phone call", pos:"verb", gender:null,
 note:"打 (hit/make) + 电话 (phone).\nLiterally 'to hit the telephone.' Separable.",
 example:"A: 我(wǒ)给(gěi)你(nǐ)打(dǎ)个(gè)电话(diànhuà)吧(ba)。\nB: 好(hǎo)，晚上(wǎnshang)八(bā)点(diǎn)。",
 exampleSrc:"A: I will give you a phone call.\nB: Okay, eight o'clock tonight.",
 funFact:"打 appears in many verbs involving tools or devices: 打字 (to type, hit characters), 打伞 (to use umbrella), 打的 (to take a taxi). It originally meant 'strike' but has become a generic action marker."},

{type:"mc", q:"聊天(liáotiān) literally means to chat so much you talk about:",
 opts:["work","food","the sky","family"],
 ans:"the sky",
 hint:"The second character is 天. This character refers to the vast thing above us all."},

{type:"fb", s:"我(wǒ)们(men)明天(míngtiān){1}吧(ba)，在(zài)咖啡(kāfēi)店(diàn)。",
 a:["见面(jiànmiàn)"],
 opts:["见面(jiànmiàn)","帮助(bāngzhù)","介绍(jièshào)","认识(rènshi)"],
 hint:"The word for meeting in person. Literally 'see face.'",
 sSrc:"Let us {1} tomorrow, at the cafe."},

{type:"fb", s:"谢谢(xièxie)你(nǐ)的(de){1}，你(nǐ)真(zhēn)是(shì)个(gè)好(hǎo)朋友(péngyou)。",
 a:["帮助(bāngzhù)"],
 opts:["帮助(bāngzhù)","聊天(liáotiān)","见面(jiànmiàn)","介绍(jièshào)"],
 hint:"The noun for assistance. Two characters that both mean the same thing.",
 sSrc:"Thank you for your {1}. You are a true friend."}

]},

// ─── L3: Gatherings and Celebrations ───
{id:"zhv2_u37l3", title:"Gatherings and Celebrations", icon:"🎉", xp:15, board:true, steps:[
{type:"intro", title:"Gatherings and Celebrations",
 desc:"Learn to talk about parties, birthdays, and special occasions. This includes how to congratulate, how to show care, and how to organize social events.",
 goals:["Invite friends to gatherings","Express congratulations","Show you care about someone"]},

{type:"teach", trg:"聚会(jùhuì)", src:"gathering / party", pos:"noun", gender:null,
 note:"聚 (gather) + 会 (meet).\nA gathering meeting. Usually friends, family, or colleagues together.",
 example:"A: 周末(zhōumò)我(wǒ)家(jiā)有(yǒu)聚会(jùhuì)，你(nǐ)来(lái)吗(ma)？\nB: 当然(dāngrán)来(lái)，几(jǐ)点(diǎn)开始(kāishǐ)？",
 exampleSrc:"A: There is a gathering at my place this weekend. Are you coming?\nB: Of course. What time does it start?",
 funFact:"聚会 ranges from a small dinner among friends to a big family reunion. Chinese culture values 团聚 (togetherness), and 聚会 is the concrete expression of that value."},

{type:"teach", trg:"生日(shēngrì)", src:"birthday", pos:"noun", gender:null,
 note:"生 (born/birth) + 日 (day).\nThe day of being born.",
 example:"A: 今天(jīntiān)是(shì)我(wǒ)的(de)生日(shēngrì)！\nB: 生日(shēngrì)快乐(kuàilè)！",
 exampleSrc:"A: Today is my birthday!\nB: Happy birthday!",
 funFact:"Traditional Chinese birthdays were counted by the lunar calendar. Even today, some families celebrate both 阳历生日 (solar calendar birthday) and 农历生日 (lunar calendar birthday), giving people two birthdays per year."},

{type:"teach", trg:"祝贺(zhùhè)", src:"to congratulate / congratulations", pos:"verb", gender:null,
 note:"祝 (wish/pray for) + 贺 (congratulate).\nFormal congratulations. Casual form: 恭喜 (gōngxǐ).",
 example:"A: 祝贺(zhùhè)你(nǐ)升职(shēngzhí)！\nB: 谢谢(xièxie)，这(zhè)离不开(líbùkāi)大家(dàjiā)的(de)帮助(bāngzhù)。",
 exampleSrc:"A: Congratulations on your promotion!\nB: Thank you. I could not have done it without everyone's help.",
 funFact:"祝贺 is more formal than 恭喜. You would use 祝贺 for achievements at work or in writing. 恭喜 is warmer and more spoken, especially 恭喜恭喜 during Chinese New Year."},

{type:"teach", trg:"关心(guānxīn)", src:"to care about / to show concern", pos:"verb", gender:null,
 note:"关 (relate to) + 心 (heart).\nTo have your heart connected to someone.",
 example:"A: 谢谢(xièxie)你(nǐ)的(de)关心(guānxīn)。\nB: 我(wǒ)们(men)是(shì)朋友(péngyou)，当然(dāngrán)要(yào)关心(guānxīn)你(nǐ)。",
 exampleSrc:"A: Thank you for your concern.\nB: We are friends. Of course I care about you.",
 funFact:"关心 is one of the warmest ways to describe a relationship. Chinese parents often tell children 我是为你好 (I am doing this for your good) as an expression of 关心, sometimes leading to humorous generational misunderstandings."},

{type:"teach", trg:"热情(rèqíng)", src:"warm / enthusiastic / hospitable", pos:"adj", gender:null,
 note:"热 (hot) + 情 (feeling).\nHot feelings. Both emotional warmth and social hospitality.",
 example:"A: 你(nǐ)的(de)朋友(péngyou)真(zhēn)热情(rèqíng)！\nB: 他(tā)就(jiù)是(shì)这么(zhème)一(yí)个(gè)人(rén)。",
 exampleSrc:"A: Your friend is so warm and hospitable!\nB: He is just that kind of person.",
 funFact:"热情 is a complimentary word. Calling someone 热情 means they go out of their way to welcome you. Its opposite, 冷淡 (cold), suggests someone cool or distant."},

{type:"mc", q:"关心(guānxīn) connects which organ of the body to meaning?",
 opts:["head","stomach","heart","hand"],
 ans:"heart",
 hint:"The second character 心 refers to a vital internal organ that Chinese culture links to emotions."},

{type:"fb", s:"今天(jīntiān)是(shì)我(wǒ)朋友(péngyou)的(de){1}，我(wǒ)要(yào)给(gěi)他(tā)买(mǎi)礼物(lǐwù)。",
 a:["生日(shēngrì)"],
 opts:["生日(shēngrì)","聚会(jùhuì)","关心(guānxīn)","祝贺(zhùhè)"],
 hint:"The day someone was born. 生 (born) + 日 (day).",
 sSrc:"Today is my friend's {1}. I want to buy him a present."},

{type:"match", pairs:[
  {trg:"聚会(jùhuì)", src:"gathering / party"},
  {trg:"生日(shēngrì)", src:"birthday"},
  {trg:"祝贺(zhùhè)", src:"to congratulate"},
  {trg:"关心(guānxīn)", src:"to care about"},
  {trg:"热情(rèqíng)", src:"warm / enthusiastic"}
]},

{type:"tip", title:"Congratulations Words",
 text:"Chinese has several ways to congratulate someone.\n祝贺 (zhùhè): formal, written or workplace context.\n恭喜 (gōngxǐ): warm and spoken, especially for good news.\n生日快乐 (shēngrì kuàilè): happy birthday.\nAt Chinese New Year, 恭喜发财 (gōngxǐ fācái) wishes prosperity.",
 deepDive:"The word 恭喜 literally means 'respectfully share joy.' It is the default celebration word for weddings, new babies, promotions, and any milestone. 祝贺 feels more distant, appropriate for formal letters. Match the word to how close you are to the person."},

{type:"story", speaker:"narrator", mood:"cheerful", art:"zh-birthday-party",
 trg:"周末(zhōumò)的(de)聚会(jùhuì)上(shang)，大家(dàjiā)一起(yìqǐ)祝(zhù)小(Xiǎo)王(Wáng)生日(shēngrì)快乐(kuàilè)。朋友们(péngyoumen)都(dōu)很(hěn)热情(rèqíng)，小(Xiǎo)王(Wáng)非常(fēicháng)感动(gǎndòng)。",
 src:"At the weekend gathering, everyone wished Xiao Wang a happy birthday together. The friends were all so warm, and Xiao Wang was very moved."}

]}

]};

export default UNIT_37;
