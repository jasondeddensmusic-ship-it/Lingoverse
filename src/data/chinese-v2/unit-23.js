// Unit 23: News and Media
// Level: B1.2 (HSK 3-4)
// Chinese (Mandarin) V2 format with hanzi+pinyin notation
// Vocab: 新闻, 报纸, 网络, 社会, 经济, 政治, 国际, 发生, 报道, 讨论, 意见, 公众, 现象, 趋势, 关注

const UNIT_23 = {
n:23, lang:"zh", srcLang:"en", track:"v2",
title:"今天的新闻 Today's News", sub:"Media and Current Events",
icon:"📰", level:"B1.2", color:"#7B5EE8",
lessons:[

// ─── L1: Media Sources ───
{id:"zhv2_u23l1", title:"消息来源 News Sources", icon:"📡", xp:15, board:true, steps:[
{type:"intro", title:"消息来源 News Sources",
 desc:"Learn the vocabulary for news and media in Chinese. Understand how to talk about newspapers, the internet, and news reports. China's media landscape is unique and these words are essential for understanding daily life.",
 goals:["Name media sources with 新闻, 报纸, and 网络","Use 报道 to discuss news reporting","Talk about what is happening with 发生"]},

{type:"tip", title:"Media in Modern China",
 text:"China's media landscape has transformed dramatically:\n\nTraditional media:\n报纸(bàozhǐ) = newspaper. Major papers include 人民日报 and 环球时报.\n电视(diànshì) = television. CCTV is the state broadcaster.\n广播(guǎngbō) = radio broadcast.\n\nDigital media:\n微信(Wēixìn) = WeChat. Over a billion users. News, payments, social media, all in one.\n微博(Wēibó) = Weibo. China's microblogging platform.\n抖音(Dǒuyīn) = Douyin (TikTok's Chinese version).\n\nMost young Chinese get news through social media, especially WeChat and Weibo. 自媒体(zìméitǐ), self-media or independent content creators, have become a major news source.",
 deepDive:{title:"WeChat: China's Super App",
  text:"WeChat (微信) is much more than a messaging app. It handles mobile payments, ride-hailing, food delivery, bill payments, government services, and news. Most Chinese people use WeChat dozens of times per day.\n\nFor news, WeChat's 公众号(gōngzhònghào) system lets organizations and individuals publish articles that subscribers receive. Many people's primary news source is whatever their WeChat contacts share in group chats or Moments (朋友圈, péngyouquān)."}},

{type:"teach", trg:"新闻(xīnwén)", src:"news", pos:"noun", gender:null,
 note:"New + hear/smell. Things newly heard or learned.\n看新闻 = read/watch the news. 新闻报道 = news report.",
 example:"A: 你(nǐ)每天(měitiān)看(kàn)新闻(xīnwén)吗(ma)？\nB: 看(kàn)，我(wǒ)一般(yībān)在(zài)手机(shǒujī)上(shàng)看(kàn)。",
 exampleSrc:"A: Do you read the news every day?\nB: Yes, I usually read it on my phone.",
 funFact:"闻 originally meant 'to hear' (not 'to smell,' which came later). So 新闻 literally means 'newly heard.' In ancient China, news traveled by word of mouth, horse messenger, or signal fire. The character 闻 has an ear radical (耳) inside a gate (门), picturing someone listening at the door."},

{type:"teach", trg:"报纸(bàozhǐ)", src:"newspaper", pos:"noun", gender:null,
 note:"Report + paper. A printed publication of daily news.\n日报 = daily paper. 晚报 = evening paper.",
 example:"A: 你(nǐ)还(hái)看(kàn)报纸(bàozhǐ)吗(ma)？\nB: 很少(hěnshǎo)了(le)，现在(xiànzài)都(dōu)看(kàn)手机(shǒujī)新闻(xīnwén)。",
 exampleSrc:"A: Do you still read newspapers?\nB: Rarely, now I read news on my phone.",
 funFact:"报 means to report or inform. China's first modern newspaper, 申报 (Shenbao), was founded in Shanghai in 1872. It ran for 77 years. Today, printed newspapers are declining rapidly as mobile news dominates, but the word 报 lives on in words like 报道 (to report) and 报告 (report)."},

{type:"teach", trg:"网络(wǎngluò)", src:"internet / network", pos:"noun", gender:null,
 note:"Net + connection. The interconnected web of communication.\n网络用语 = internet slang. 社交网络 = social network.",
 example:"A: 现在(xiànzài)网络(wǎngluò)新闻(xīnwén)比(bǐ)报纸(bàozhǐ)快(kuài)多(duō)了(le)。\nB: 对(duì)，发生(fāshēng)什么(shénme)事(shì)马上(mǎshàng)就(jiù)能(néng)看到(kàndào)。",
 exampleSrc:"A: Now internet news is much faster than newspapers.\nB: Right, when something happens you can see it immediately.",
 funFact:"网 originally meant a fishing net. The internet is literally a 'net of connections.' China has over a billion internet users, the most of any country. Chinese internet culture has its own vocabulary, memes, and platforms that are largely separate from the Western internet."},

{type:"teach", trg:"发生(fāshēng)", src:"to happen / to occur", pos:"verb", gender:null,
 note:"Send out + produce. For events that take place.\n发生了什么事？= What happened? Always describes events, not people.",
 example:"A: 昨天(zuótiān)发生(fāshēng)了(le)什么(shénme)事(shì)？\nB: 城市(chéngshì)里(lǐ)发生(fāshēng)了(le)一次(yícì)大(dà)地震(dìzhèn)。",
 exampleSrc:"A: What happened yesterday?\nB: A big earthquake occurred in the city.",
 funFact:"发生 is a verb that only takes events as its subject, never people. You cannot say 'I happened.' This is different from English where 'happen' is more flexible. The phrase 发生了什么 (what happened?) is one of the most useful questions for following Chinese news."},

{type:"teach", trg:"报道(bàodào)", src:"to report / news report", pos:"verb", gender:null,
 note:"Report + guide/way. Both a verb and a noun.\n新闻报道 = news coverage. 据报道 = according to reports.",
 example:"A: 这件(zhèjiàn)事(shì)新闻(xīnwén)报道(bàodào)了(le)吗(ma)？\nB: 报道(bàodào)了(le)，很多(hěnduō)媒体(méitǐ)都(dōu)在(zài)讨论(tǎolùn)。",
 exampleSrc:"A: Was this event reported in the news?\nB: Yes, many media outlets are discussing it.",
 funFact:"报 means to report, and 道 means way or path. A news report is the 'way of reporting.' 道 appears in many compounds: 知道 (to know), 道理 (reason), 道德 (morality). It is also the 'Dao' of Daoism, meaning the way or path of nature."},

{type:"mc", q:"新闻(xīnwén) literally means:",
 opts:["newly heard","old stories","written record","public announcement"],
 ans:"newly heard",
 hint:"新 means 'new,' and 闻 originally meant 'to hear.' News is what has been newly heard or learned."},

{type:"match", pairs:[
  {trg:"新闻(xīnwén)", src:"news"},
  {trg:"报纸(bàozhǐ)", src:"newspaper"},
  {trg:"网络(wǎngluò)", src:"internet / network"},
  {trg:"发生(fāshēng)", src:"to happen"},
  {trg:"报道(bàodào)", src:"to report"}
]},

{type:"fb", s:"昨天(zuótiān){1}了(le)一件(yíjiàn)大(dà)事(shì)。",
 a:["发生(fāshēng)"],
 opts:["发生(fāshēng)","报道(bàodào)","新闻(xīnwén)","网络(wǎngluò)"],
 hint:"This verb describes events taking place or occurring. It is never used with people as the subject.",
 sSrc:"A big event {1} yesterday."},

{type:"mc", q:"你(nǐ)还(hái)看(kàn)报纸(bàozhǐ)吗(ma)？ 很少(hěnshǎo)了(le)。 What does this exchange tell us?",
 opts:["The person rarely reads newspapers anymore","The person reads newspapers every day","The person never reads anything","The person only reads newspapers"],
 ans:"The person rarely reads newspapers anymore",
 hint:"还 asks 'still,' and 很少了 means 'rarely now.' The 了 suggests a change from a previous habit."},

{type:"fb", s:"很多(hěnduō)媒体(méitǐ)都(dōu){1}了(le)这件(zhèjiàn)事(shì)。",
 a:["报道(bàodào)"],
 opts:["报道(bàodào)","发生(fāshēng)","新闻(xīnwén)","网络(wǎngluò)"],
 hint:"This verb means for media outlets to cover or announce an event. It can also be used as a noun.",
 sSrc:"Many media outlets {1} this event."},

{type:"fb", s:"我(wǒ)一般(yībān)在(zài){1}上(shàng)看(kàn)新闻(xīnwén)。",
 a:["网络(wǎngluò)"],
 opts:["网络(wǎngluò)","报纸(bàozhǐ)","报道(bàodào)","发生(fāshēng)"],
 hint:"This word means the internet or the web. Most young Chinese people use this, not printed media, for news.",
 sSrc:"I usually read news on the {1}."}
]},

// ─── L2: Society and Topics ───
{id:"zhv2_u23l2", title:"社会话题 Social Topics", icon:"🌍", xp:15, board:true, steps:[
{type:"intro", title:"社会话题 Social Topics",
 desc:"Learn to discuss major news topics: society, economy, politics, and international affairs. These are the categories that structure news reporting in Chinese media.",
 goals:["Name news categories with 社会, 经济, 政治, and 国际","Discuss issues and opinions with 讨论 and 意见","Talk about the public with 公众"]},

{type:"teach", trg:"社会(shèhuì)", src:"society", pos:"noun", gender:null,
 note:"Association + gathering. The community of people living together.\n社会问题 = social issues. 社会发展 = social development.",
 example:"A: 这(zhè)是(shì)一个(yígè)重要(zhòngyào)的(de)社会(shèhuì)问题(wèntí)。\nB: 对(duì)，很多(hěnduō)人(rén)都(dōu)在(zài)关注(guānzhù)。",
 exampleSrc:"A: This is an important social issue.\nB: Right, many people are paying attention to it.",
 funFact:"社 originally referred to the god of the earth, worshipped in community rituals. 会 means gathering. So 社会 is literally 'a gathering around the earth god,' capturing the communal nature of society. In modern Chinese, 社会 appears in countless compounds from 社会科学 (social science) to 社会主义 (socialism)."},

{type:"teach", trg:"经济(jīngjì)", src:"economy / economics", pos:"noun", gender:null,
 note:"Manage + aid. Running affairs to help the people.\n经济学 = economics. 经济增长 = economic growth.",
 example:"A: 今年(jīnnián)中国(Zhōngguó)经济(jīngjì)怎么样(zěnmeyàng)？\nB: 经济(jīngjì)在(zài)恢复(huīfù)，增长(zēngzhǎng)比(bǐ)去年(qùnián)快(kuài)。",
 exampleSrc:"A: How is China's economy this year?\nB: The economy is recovering, growth is faster than last year.",
 funFact:"经济 comes from 经世济民, meaning 'to govern the world and help the people.' The abbreviated form 经济 entered modern Chinese via Japanese, which borrowed and repackaged the ancient Chinese concept. China's economy is the world's second-largest, and economic news dominates Chinese media."},

{type:"teach", trg:"政治(zhèngzhì)", src:"politics", pos:"noun", gender:null,
 note:"Govern + order. The management of public affairs.\n政治家 = politician. 政治制度 = political system.",
 example:"A: 你(nǐ)对(duì)政治(zhèngzhì)新闻(xīnwén)感兴趣(gǎnxìngqù)吗(ma)？\nB: 有(yǒu)一点(yīdiǎn)，但(dàn)我(wǒ)更(gèng)关注(guānzhù)经济(jīngjì)新闻(xīnwén)。",
 exampleSrc:"A: Are you interested in political news?\nB: A little, but I pay more attention to economic news.",
 funFact:"政 comes from 正 (upright, correct) and means governing or correcting. 治 means to manage or bring to order. Together, 政治 means 'governing and ordering.' The ideal in Chinese political philosophy is 天下太平 (the world at peace), achievable through virtuous governance."},

{type:"teach", trg:"国际(guójì)", src:"international", pos:"adj", gender:null,
 note:"Country + border/between. Between nations.\n国际新闻 = international news. 国际关系 = international relations.",
 example:"A: 这个(zhège)国际(guójì)会议(huìyì)有(yǒu)多少(duōshao)国家(guójiā)参加(cānjiā)？\nB: 有(yǒu)三十多个(sānshíduōge)国家(guójiā)。",
 exampleSrc:"A: How many countries are attending this international conference?\nB: More than thirty countries.",
 funFact:"际 means border, edge, or the space between. 国际 is literally 'between nations.' The word entered modern Chinese in the late 19th century when China began engaging with the global system of nation-states. 国际化 (internationalization) has been a major theme in Chinese development."},

{type:"teach", trg:"讨论(tǎolùn)", src:"to discuss / discussion", pos:"verb", gender:null,
 note:"Seek/demand + discuss. To exchange views on a topic.\nBoth a noun and a verb. 讨论会 = discussion meeting.",
 example:"A: 大家(dàjiā)都(dōu)在(zài)讨论(tǎolùn)这个(zhège)新闻(xīnwén)。\nB: 是(shì)啊(a)，每个(měigè)人(rén)都(dōu)有(yǒu)自己(zìjǐ)的(de)意见(yìjiàn)。",
 exampleSrc:"A: Everyone is discussing this news.\nB: Yes, everyone has their own opinion.",
 funFact:"讨 means to seek out or demand, and 论 means to discuss or reason. Discussion is literally 'seeking out reasoning.' The character 论 appears in 论语(Lúnyǔ), The Analects of Confucius, one of the most influential texts in Chinese civilization. 论 implies careful, reasoned discourse."},

{type:"teach", trg:"意见(yìjiàn)", src:"opinion / view", pos:"noun", gender:null,
 note:"Meaning/intention + view. A personal viewpoint on something.\n有意见 = to have an objection. 发表意见 = to express an opinion.",
 example:"A: 你(nǐ)对(duì)这件(zhèjiàn)事(shì)有(yǒu)什么(shénme)意见(yìjiàn)？\nB: 我(wǒ)觉得(juéde)应该(yīnggāi)多(duō)听听(tīngtīng)公众(gōngzhòng)的(de)意见(yìjiàn)。",
 exampleSrc:"A: What opinion do you have about this matter?\nB: I think we should listen more to the public's opinions.",
 funFact:"意 means intention or meaning (it contains the heart radical 心, since intentions come from the heart), and 见 means to see or view. An opinion is 'what the heart sees.' Interestingly, 有意见 can also mean 'to have a complaint,' so context matters."},

{type:"teach", trg:"公众(gōngzhòng)", src:"the public / public", pos:"noun", gender:null,
 note:"Public + multitude. The general population.\n公众意见 = public opinion. 公众人物 = public figure.",
 example:"A: 这个(zhège)事件(shìjiàn)引起(yǐnqǐ)了(le)公众(gōngzhòng)的(de)关注(guānzhù)。\nB: 是(shì)的(de)，网上(wǎngshàng)讨论(tǎolùn)非常(fēicháng)热烈(rèliè)。",
 exampleSrc:"A: This event has drawn the public's attention.\nB: Yes, the online discussion is very intense.",
 funFact:"公 means public or shared (as opposed to 私, private), and 众 means many or multitude (it depicts three people stacked). Together they mean 'the shared multitude.' In Chinese civic discourse, 公众利益 (public interest) is frequently cited as a guiding principle for decision-making."},

{type:"mc", q:"经济(jīngjì) originally meant:",
 opts:["To govern the world and help the people","To make money","To save resources","To count wealth"],
 ans:"To govern the world and help the people",
 hint:"The full classical phrase is 经世济民. It was about governance and welfare, not just money."},

{type:"match", pairs:[
  {trg:"社会(shèhuì)", src:"society"},
  {trg:"经济(jīngjì)", src:"economy"},
  {trg:"政治(zhèngzhì)", src:"politics"},
  {trg:"国际(guójì)", src:"international"},
  {trg:"讨论(tǎolùn)", src:"to discuss"}
]},

{type:"fb", s:"大家(dàjiā)都(dōu)在(zài){1}这个(zhège)社会(shèhuì)问题(wèntí)。",
 a:["讨论(tǎolùn)"],
 opts:["讨论(tǎolùn)","意见(yìjiàn)","报道(bàodào)","发生(fāshēng)"],
 hint:"This verb means to exchange views and ideas about a topic. Everyone is doing it about this issue.",
 sSrc:"Everyone is {1} this social issue."},

{type:"mc", q:"你(nǐ)对(duì)这件(zhèjiàn)事(shì)有(yǒu)什么(shénme)意见(yìjiàn)？ This asks:",
 opts:["What is your opinion about this?","Did you hear about this?","Are you interested in this?","Did you report this?"],
 ans:"What is your opinion about this?",
 hint:"意见 means opinion or view. The question asks for your personal viewpoint on the matter."},

{type:"fb", s:"这件(zhèjiàn)事(shì)引起(yǐnqǐ)了(le){1}的(de)关注(guānzhù)。",
 a:["公众(gōngzhòng)"],
 opts:["公众(gōngzhòng)","社会(shèhuì)","国际(guójì)","政治(zhèngzhì)"],
 hint:"This word means the general population, the mass of ordinary people. It combines 'public' with 'multitude.'",
 sSrc:"This event drew the {1}'s attention."},

{type:"fb", s:"他(tā)更(gèng)关注(guānzhù){1}新闻(xīnwén)，特别(tèbié)是(shì)不同(bùtóng)国家(guójiā)之间(zhījiān)的(de)关系(guānxi)。",
 a:["国际(guójì)"],
 opts:["国际(guójì)","政治(zhèngzhì)","经济(jīngjì)","社会(shèhuì)"],
 hint:"This adjective describes things that are 'between nations.' It relates to global affairs and foreign relations.",
 sSrc:"He pays more attention to {1} news, especially relations between different countries."}
]},

// ─── L3: Trends and Attention ───
{id:"zhv2_u23l3", title:"热点话题 Hot Topics", icon:"🔥", xp:15, board:true, steps:[
{type:"intro", title:"热点话题 Hot Topics",
 desc:"Learn to discuss trending topics, phenomena, and what people are paying attention to. These words help you navigate conversations about current events and social trends.",
 goals:["Describe trends and phenomena with 趋势 and 现象","Express paying attention with 关注","Connect media vocabulary to broader discussions"]},

{type:"teach", trg:"现象(xiànxiàng)", src:"phenomenon", pos:"noun", gender:null,
 note:"Appear + image. Something observable that draws attention.\n社会现象 = social phenomenon. 自然现象 = natural phenomenon.",
 example:"A: 年轻人(niánqīngrén)不(bù)想(xiǎng)结婚(jiéhūn)是(shì)一个(yígè)社会(shèhuì)现象(xiànxiàng)。\nB: 对(duì)，这个(zhège)现象(xiànxiàng)越来越(yuèláiyuè)普遍(pǔbiàn)了(le)。",
 exampleSrc:"A: Young people not wanting to marry is a social phenomenon.\nB: Right, this phenomenon is becoming more and more common.",
 funFact:"现 means to appear or show, and 象 means image or elephant (one of the most ancient pictographs). A phenomenon is an 'appearing image.' The character 象 was originally a drawing of an elephant, the largest thing ancient people could see. It evolved to mean 'form' or 'appearance.'"},

{type:"teach", trg:"趋势(qūshì)", src:"trend / tendency", pos:"noun", gender:null,
 note:"Move toward + force/momentum. The direction things are heading.\n发展趋势 = development trend. 全球趋势 = global trend.",
 example:"A: 网络(wǎngluò)购物(gòuwù)是(shì)现在(xiànzài)的(de)趋势(qūshì)。\nB: 是(shì)的(de)，越来越(yuèláiyuè)多(duō)的(de)人(rén)在(zài)网上(wǎngshàng)买(mǎi)东西(dōngxi)。",
 exampleSrc:"A: Online shopping is the current trend.\nB: Yes, more and more people buy things online.",
 funFact:"趋 means to hasten toward something, and 势 means power or momentum. A trend is the 'direction of momentum.' Chinese business and media love this word. Spotting trends early, called 抓住趋势 (seize the trend), is considered a key to success in China's fast-changing market."},

{type:"teach", trg:"关注(guānzhù)", src:"to pay attention to / to follow", pos:"verb", gender:null,
 note:"Close/relate + focus. To fix your attention on something.\n关注度 = level of attention. On social media: 关注 = follow.",
 example:"A: 你(nǐ)最近(zuìjìn)关注(guānzhù)什么(shénme)新闻(xīnwén)？\nB: 我(wǒ)最近(zuìjìn)关注(guānzhù)经济(jīngjì)发展(fāzhǎn)的(de)趋势(qūshì)。",
 exampleSrc:"A: What news have you been following recently?\nB: I have been following the trend of economic development.",
 funFact:"关注 has gained a new meaning in the digital age. On Chinese social media platforms, 关注 is the button you press to follow someone, equivalent to 'subscribe' or 'follow.' Influencers ask viewers to 点关注 (click follow). The word bridges traditional media consumption and modern social media behavior."},

{type:"mc", q:"网络(wǎngluò)购物(gòuwù)是(shì)现在(xiànzài)的(de)趋势(qūshì)。 What is described as a trend?",
 opts:["Online shopping","Reading newspapers","Watching television","Listening to radio"],
 ans:"Online shopping",
 hint:"网络 means internet/online, and 购物 means shopping. The sentence describes the direction consumer behavior is heading."},

{type:"match", pairs:[
  {trg:"现象(xiànxiàng)", src:"phenomenon"},
  {trg:"趋势(qūshì)", src:"trend"},
  {trg:"关注(guānzhù)", src:"to pay attention to"},
  {trg:"意见(yìjiàn)", src:"opinion"},
  {trg:"公众(gōngzhòng)", src:"the public"}
]},

{type:"fb", s:"年轻人(niánqīngrén)晚(wǎn)结婚(jiéhūn)是(shì)一个(yígè)社会(shèhuì){1}。",
 a:["现象(xiànxiàng)"],
 opts:["现象(xiànxiàng)","趋势(qūshì)","关注(guānzhù)","新闻(xīnwén)"],
 hint:"This word describes something observable happening in society. Its characters mean 'appearing image.'",
 sSrc:"Young people marrying late is a social {1}."},

{type:"mc", q:"关注(guānzhù) on Chinese social media means:",
 opts:["To follow or subscribe","To block someone","To report content","To share a post"],
 ans:"To follow or subscribe",
 hint:"This word has gained a digital meaning. It is the button you press when you want to see someone's future posts."},

{type:"fb", s:"很多(hěnduō)人(rén)都(dōu)在(zài){1}这个(zhège)问题(wèntí)。",
 a:["关注(guānzhù)"],
 opts:["关注(guānzhù)","现象(xiànxiàng)","趋势(qūshì)","意见(yìjiàn)"],
 hint:"This verb means to focus your attention on something. Many people are watching and following this issue.",
 sSrc:"Many people are {1} this issue."},

{type:"fb", s:"在线(zàixiàn)教育(jiàoyù)是(shì)一个(yígè)新(xīn)的(de){1}。",
 a:["趋势(qūshì)"],
 opts:["趋势(qūshì)","现象(xiànxiàng)","新闻(xīnwén)","意见(yìjiàn)"],
 hint:"This word describes the direction or momentum in which something is developing. Online education is heading this way.",
 sSrc:"Online education is a new {1}."},

{type:"mc", q:"现象(xiànxiàng) contains the character 象(xiàng), which originally depicted:",
 opts:["An elephant","A dragon","A horse","A tiger"],
 ans:"An elephant",
 hint:"This character is one of the oldest pictographs. It showed the largest animal ancient people could see, then evolved to mean 'form' or 'appearance.'"}
]},

// ─── L4: Unit 23 Review ───
{id:"zhv2_u23l4", title:"新闻复习 News Review", icon:"🔄", xp:15, board:true, steps:[
{type:"intro", title:"新闻复习 News Review",
 desc:"Review all news and media vocabulary from this unit. Test your ability to discuss news sources, social topics, and current trends in Chinese.",
 goals:["Review all 15 news and media words","Connect media vocabulary to social topics","Discuss current events using the full range of vocabulary"]},

{type:"match", pairs:[
  {trg:"新闻(xīnwén)", src:"news"},
  {trg:"报纸(bàozhǐ)", src:"newspaper"},
  {trg:"社会(shèhuì)", src:"society"},
  {trg:"趋势(qūshì)", src:"trend"},
  {trg:"关注(guānzhù)", src:"to pay attention to"}
]},

{type:"mc", q:"发生(fāshēng) can only be used with:",
 opts:["Events as the subject, never people","People as the subject, never events","Both people and events","Only weather phenomena"],
 ans:"Events as the subject, never people",
 hint:"This verb describes things that happen or occur. It takes events, incidents, and changes as its subject."},

{type:"fb", s:"每个(měigè)人(rén)对(duì)这件(zhèjiàn)事(shì)都(dōu)有(yǒu)不同(bùtóng)的(de){1}。",
 a:["意见(yìjiàn)"],
 opts:["意见(yìjiàn)","新闻(xīnwén)","报道(bàodào)","社会(shèhuì)"],
 hint:"This word means a personal viewpoint or opinion. Its characters combine 'meaning' and 'view.'",
 sSrc:"Everyone has a different {1} about this matter."},

{type:"mc", q:"这件(zhèjiàn)事(shì)引起(yǐnqǐ)了(le)公众(gōngzhòng)的(de)关注(guānzhù)。 What happened?",
 opts:["The event drew the public's attention","The public caused the event","The news was censored","A new trend appeared"],
 ans:"The event drew the public's attention",
 hint:"引起 means 'to cause' or 'to draw.' The sentence describes an event that attracted widespread public interest."},

{type:"fb", s:"他(tā)每天(měitiān)在(zài){1}上(shàng)看(kàn)新闻(xīnwén)。",
 a:["网络(wǎngluò)"],
 opts:["网络(wǎngluò)","报纸(bàozhǐ)","社会(shèhuì)","国际(guójì)"],
 hint:"This word means the internet, the digital network where most people now consume news.",
 sSrc:"He reads news on the {1} every day."},

{type:"match", pairs:[
  {trg:"网络(wǎngluò)", src:"internet / network"},
  {trg:"经济(jīngjì)", src:"economy"},
  {trg:"政治(zhèngzhì)", src:"politics"},
  {trg:"国际(guójì)", src:"international"},
  {trg:"现象(xiànxiàng)", src:"phenomenon"}
]},

{type:"fb", s:"很多(hěnduō)媒体(méitǐ)都(dōu){1}了(le)这个(zhège)事件(shìjiàn)。",
 a:["报道(bàodào)"],
 opts:["报道(bàodào)","讨论(tǎolùn)","关注(guānzhù)","发生(fāshēng)"],
 hint:"This verb means for media outlets to cover and announce a story. It is what journalists do.",
 sSrc:"Many media outlets {1} this event."},

{type:"mc", q:"社会(shèhuì) originally referred to:",
 opts:["A gathering around the earth god","A government building","A marketplace","A school"],
 ans:"A gathering around the earth god",
 hint:"社 originally meant the god of the earth. 会 means gathering. The word captures the communal nature of living together."},

{type:"drag_fill",
 s:"最近(zuìjìn)网上(wǎngshàng){1}了(le)一个(yígè)新(xīn)的(de)社会(shèhuì){2}，很多(hěnduō)人(rén)都(dōu)在(zài){3}，每个(měigè)人(rén)都(dōu)有(yǒu)不同(bùtóng)的(de){4}。",
 blanks:{"1":"报道(bàodào)","2":"现象(xiànxiàng)","3":"讨论(tǎolùn)","4":"意见(yìjiàn)"},
 pool:["报道(bàodào)","现象(xiànxiàng)","讨论(tǎolùn)","意见(yìjiàn)"],
 hint:"Recently online media reported a new social phenomenon, many people are discussing it, and everyone has different opinions."},

{type:"mc", q:"趋势(qūshì) describes:",
 opts:["The direction or momentum of a development","A single news event","A fixed tradition","A personal habit"],
 ans:"The direction or momentum of a development",
 hint:"趋 means to hasten toward, and 势 means momentum or power. Together they describe where things are heading."}
]}

]};

export default UNIT_23;
