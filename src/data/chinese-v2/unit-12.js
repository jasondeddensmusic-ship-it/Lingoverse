// Unit 12: Travel and Transport
// Level: A2.2 (HSK 2)
// Chinese (Mandarin) V2 format with hanzi+pinyin notation

const UNIT_12 = {
n:12, lang:"zh", srcLang:"en", track:"v2",
title:"坐飞机去 By Plane", sub:"Travel and Transport",
icon:"✈️", level:"A2.2", color:"#7B5EE8",
lessons:[

// ─── L1: Vehicles and Transport ───
{id:"zhv2_u12l1", title:"Getting Around", icon:"🚗", xp:15, board:true, steps:[
{type:"intro", title:"Getting Around",
 desc:"Learn the vocabulary for major types of transportation in Chinese. Discover how Chinese builds transport words from logical building blocks.",
 goals:["Name common vehicles and transport types","Understand how compound transport words are built","Use 坐 (to sit/ride) with vehicles"]},

{type:"teach", trg:"飞机(fēijī)", src:"airplane", pos:"noun", gender:null,
 note:"飞 = fly + 机 = machine. Literally: flying machine.\nOne of the most logical compound words in Chinese.",
 example:"A: 你(nǐ)坐(zuò)飞机(fēijī)去(qù)吗(ma)？\nB: 是(shì)的(de)，坐(zuò)飞机(fēijī)去(qù)。",
 exampleSrc:"A: Are you going by plane?\nB: Yes, going by plane.",
 funFact:"Chinese builds many modern technology words from simple characters: 飞机 = flying machine (airplane), 手机(shǒujī) = hand machine (mobile phone), 电脑(diànnǎo) = electric brain (computer). The logic makes new words easy to learn."},

{type:"teach", trg:"火车(huǒchē)", src:"train", pos:"noun", gender:null,
 note:"火 = fire + 车 = vehicle. Literally: fire vehicle.\nNamed after the steam-powered trains that first came to China.",
 example:"A: 火车(huǒchē)几(jǐ)点(diǎn)开(kāi)？\nB: 火车(huǒchē)十(shí)点(diǎn)开(kāi)。",
 exampleSrc:"A: What time does the train leave?\nB: The train leaves at ten o'clock.",
 funFact:"When steam trains arrived in China in the 1800s, people named them 'fire vehicles' because of the flames and smoke. Even though modern trains are electric, the name stuck. Japan uses the same characters: 汽車 (steam vehicle)."},

{type:"teach", trg:"公共汽车(gōnggòng qìchē)", src:"bus", pos:"noun", gender:null,
 note:"公共 = public + 汽车 = automobile. Literally: public automobile.\nOften shortened to 公交车(gōngjiāochē) in speech.",
 example:"A: 公共汽车(gōnggòng qìchē)来(lái)了(le)！\nB: 好(hǎo)，我们(wǒmen)上车(shàng chē)吧(ba)！",
 exampleSrc:"A: The bus is coming!\nB: Good, let us get on!",
 funFact:"Chinese cities have extensive bus networks. In many cities, bus fare is just 1-2 yuan (about 15-30 cents USD). Most people pay by scanning their phone. Cash is almost never used anymore."},

{type:"teach", trg:"出租车(chūzūchē)", src:"taxi", pos:"noun", gender:null,
 note:"出租 = for rent + 车 = vehicle. Literally: vehicle for rent.\nAlso called 的士(díshì) in southern China (from English 'taxi').",
 example:"A: 我们(wǒmen)坐(zuò)出租车(chūzūchē)去(qù)吧(ba)。\nB: 好(hǎo)，我(wǒ)打(dǎ)车(chē)。",
 exampleSrc:"A: Let us take a taxi.\nB: Okay, I will hail one.",
 funFact:"打车(dǎ chē) means 'to hail a taxi,' using that versatile 打 verb again. But today most people use ride-hailing apps. 滴滴(Dīdī) is China's version of Uber and handles millions of rides daily."},

{type:"teach", trg:"地铁(dìtiě)", src:"subway / metro", pos:"noun", gender:null,
 note:"地 = ground/earth + 铁 = iron. Literally: ground iron (underground railway).\nChina has the world's largest metro network.",
 example:"A: 坐(zuò)地铁(dìtiě)去(qù)吗(ma)？\nB: 坐(zuò)地铁(dìtiě)很(hěn)快(kuài)！",
 exampleSrc:"A: Shall we go by subway?\nB: The subway is very fast!",
 funFact:"China has built more subway lines than any other country. Shanghai's metro is the longest in the world, and Beijing's moves over 10 million passengers daily. Many cities went from zero to massive networks in just 20 years."},

{type:"tip", title:"坐 (sit) = To Take Transport",
 text:"In Chinese, you 'sit' in vehicles to indicate riding them:\n\n坐(zuò)飞机(fēijī) = take a plane\n坐(zuò)火车(huǒchē) = take a train\n坐(zuò)地铁(dìtiě) = take the subway\n坐(zuò)公共汽车(gōnggòng qìchē) = take a bus\n坐(zuò)出租车(chūzūchē) = take a taxi\n\n坐 literally means 'to sit.' You sit in the vehicle. Simple!\n\nException: 骑(qí) is used for bicycles and motorcycles (you 'ride' them).",
 deepDive:{title:"Chinese Transport Word Building",
  text:"Chinese transport words follow beautiful logic:\n\n车(chē) = vehicle (the base word)\n火车 = fire + vehicle = train\n汽车 = steam + vehicle = car\n公共汽车 = public + steam vehicle = bus\n出租车 = rental + vehicle = taxi\n自行车(zìxíngchē) = self-moving + vehicle = bicycle\n\n机(jī) = machine\n飞机 = flying + machine = airplane\n手机 = hand + machine = phone\n\nOnce you know the building blocks, you can decode new words instantly."}},

{type:"mc", q:"火车(huǒchē) literally means:",
 opts:["fast vehicle","iron vehicle","fire vehicle","steam vehicle"],
 ans:"fire vehicle",
 hint:"火 is one of the most basic characters in Chinese, referring to flames and combustion."},

{type:"match", pairs:[
  {trg:"飞机(fēijī)", src:"airplane"},
  {trg:"火车(huǒchē)", src:"train"},
  {trg:"公共汽车(gōnggòng qìchē)", src:"bus"},
  {trg:"出租车(chūzūchē)", src:"taxi"},
  {trg:"地铁(dìtiě)", src:"subway"}
]},

{type:"fb", s:"我们(wǒmen){1}飞机(fēijī)去(qù)北京(Běijīng)。",
 a:["坐(zuò)"],
 opts:["坐(zuò)","打(dǎ)","看(kàn)","开(kāi)"],
 hint:"Which verb means 'to sit' and is used for taking public transport?",
 sSrc:"We {1} a plane to Beijing."},

{type:"mc", q:"地铁(dìtiě) combines 地 (ground) and 铁 (iron). This refers to:",
 opts:["An iron road on the ground","An underground iron railway","A metal bridge","A mine"],
 ans:"An underground iron railway",
 hint:"地 relates to the earth. 铁 is a metal. Think of where these trains operate."},

{type:"fb", s:"{1}来(lái)了(le)！我们(wǒmen)上车(shàng chē)吧(ba)！",
 a:["公共汽车(gōnggòng qìchē)"],
 opts:["公共汽车(gōnggòng qìchē)","飞机(fēijī)","地铁(dìtiě)","火车(huǒchē)"],
 hint:"Which public vehicle picks up passengers at stops along a city road?",
 sSrc:"The {1} is here! Let us get on!"},

{type:"mc", q:"打车(dǎ chē) means 'hail a taxi.' Which verb is used?",
 opts:["坐(zuò)","打(dǎ)","开(kāi)","去(qù)"],
 ans:"打(dǎ)",
 hint:"This is the same versatile verb used for basketball and phone calls. It means to hit or strike."}
]},

// ─── L2: Places and Tickets ───
{id:"zhv2_u12l2", title:"Stations and Tickets", icon:"🎫", xp:15, board:true, steps:[
{type:"intro", title:"Stations and Tickets",
 desc:"Learn the vocabulary for airports, stations, tickets, and roads. These are the essential words for navigating any trip in Chinese.",
 goals:["Name key travel locations like airports and stations","Buy tickets and ask about routes","Understand 路 and its uses"]},

{type:"teach", trg:"机场(jīchǎng)", src:"airport", pos:"noun", gender:null,
 note:"机 = machine (short for 飞机 airplane) + 场 = field/ground.\nLiterally: airplane field.",
 example:"A: 机场(jīchǎng)在(zài)哪里(nǎlǐ)？\nB: 机场(jīchǎng)在(zài)城市(chéngshì)南边(nánbiān)。",
 exampleSrc:"A: Where is the airport?\nB: The airport is south of the city.",
 funFact:"Beijing Daxing International Airport, opened in 2019, looks like a giant starfish from above. It was designed by Zaha Hadid and can handle 72 million passengers per year. Getting from one end to the other is an 8-minute walk."},

{type:"teach", trg:"车站(chēzhàn)", src:"station (bus/train)", pos:"noun", gender:null,
 note:"车 = vehicle + 站 = to stand/stop. Where vehicles stop.\n火车站 = train station. 汽车站 = bus station.",
 example:"A: 火车(huǒchē)站(zhàn)远(yuǎn)吗(ma)？\nB: 不(bù)远(yuǎn)，坐(zuò)地铁(dìtiě)两(liǎng)站(zhàn)。",
 exampleSrc:"A: Is the train station far?\nB: Not far, two stops by subway.",
 funFact:"站 means both 'to stand' and 'a station/stop.' The connection: a station is where you stand and wait. Chinese has many words where the noun meaning evolved naturally from the verb meaning."},

{type:"teach", trg:"票(piào)", src:"ticket", pos:"noun", gender:null,
 note:"Used for all types of tickets: 飞机票(fēijīpiào) = plane ticket,\n火车票(huǒchēpiào) = train ticket, 电影票(diànyǐngpiào) = movie ticket.",
 example:"A: 你(nǐ)买(mǎi)了(le)票(piào)吗(ma)？\nB: 买(mǎi)了(le)，两(liǎng)张(zhāng)票(piào)。",
 exampleSrc:"A: Did you buy tickets?\nB: Yes, two tickets.",
 funFact:"票 uses the measure word 张(zhāng) because tickets are flat objects. Chinese uses different measure words for different shapes: 张 for flat things, 本(běn) for books, 个(gè) for general objects. This is like English 'a sheet of paper' vs 'a loaf of bread.'"},

{type:"teach", trg:"路(lù)", src:"road / route", pos:"noun", gender:null,
 note:"Can mean a physical road or a route/way.\nAlso used in bus route numbers: 10路车 = bus route 10.",
 example:"A: 这(zhè)条(tiáo)路(lù)去(qù)机场(jīchǎng)吗(ma)？\nB: 是(shì)的(de)，一直(yìzhí)走(zǒu)。",
 exampleSrc:"A: Does this road go to the airport?\nB: Yes, go straight ahead.",
 funFact:"路 appears in many Chinese city street names. If you see a street sign with 路, it means 'road.' 南京路(Nánjīng Lù) in Shanghai is one of the most famous shopping streets in the world."},

{type:"mc", q:"机场(jīchǎng) literally means:",
 opts:["big field","flying field","airplane field","travel ground"],
 ans:"airplane field",
 hint:"机 is short for 飞机, and 场 means a flat open area or …."},

{type:"match", pairs:[
  {trg:"机场(jīchǎng)", src:"airport"},
  {trg:"车站(chēzhàn)", src:"station"},
  {trg:"票(piào)", src:"ticket"},
  {trg:"路(lù)", src:"road / route"}
]},

{type:"fb", s:"你(nǐ)买(mǎi)了(le){1}吗(ma)？",
 a:["票(piào)"],
 opts:["票(piào)","路(lù)","机场(jīchǎng)","车站(chēzhàn)"],
 hint:"What do you need to purchase before boarding a train or plane?",
 sSrc:"Did you buy a {1}?"},

{type:"mc", q:"火车站(huǒchēzhàn) combines which two words?",
 opts:["火 + 车站","火车 + 站","火 + 车 + 站","火车站 is one word"],
 ans:"火车 + 站",
 hint:"Take the word for 'train' and add the word meaning 'stop/station' to form the compound."},

{type:"fb", s:"{1}在(zài)城市(chéngshì)南边(nánbiān)。",
 a:["机场(jīchǎng)"],
 opts:["机场(jīchǎng)","车站(chēzhàn)","路(lù)","票(piào)"],
 hint:"Which location is where planes take off and land?",
 sSrc:"The {1} is south of the city."},

{type:"mc", q:"票(piào) uses the measure word 张(zhāng). This is because tickets are:",
 opts:["Round objects","Heavy objects","Flat objects","Long objects"],
 ans:"Flat objects",
 hint:"张 is a measure word chosen based on the physical shape of the item. Picture a ticket."}
]},

// ─── L3: Travel Plans ───
{id:"zhv2_u12l3", title:"Making Travel Plans", icon:"🗺️", xp:15, board:true, steps:[
{type:"intro", title:"Making Travel Plans",
 desc:"Learn the action verbs of travel: departing, preparing, and touring. Master the words that turn transport vocabulary into real travel conversations.",
 goals:["Use 旅游, 准备, and 出发","Talk about travel plans and departures","Describe speed with 快 and 慢"]},

{type:"teach", trg:"旅游(lǚyóu)", src:"to travel / tourism", pos:"verb", gender:null,
 note:"旅 = journey + 游 = to tour/wander. Both a verb and a noun.\nUsed for leisure travel, not business trips.",
 example:"A: 你(nǐ)喜欢(xǐhuan)旅游(lǚyóu)吗(ma)？\nB: 我(wǒ)很(hěn)喜欢(xǐhuan)旅游(lǚyóu)！",
 exampleSrc:"A: Do you like traveling?\nB: I like traveling very much!",
 funFact:"China has a week-long national holiday called Golden Week (黄金周 huángjīn zhōu) in October. Hundreds of millions of people travel at the same time. The Great Wall, West Lake, and other famous spots become incredibly crowded."},

{type:"teach", trg:"准备(zhǔnbèi)", src:"to prepare / preparation", pos:"verb", gender:null,
 note:"Works as both verb and noun. 准 = standard/accurate + 备 = to prepare.\n准备好了 = ready/prepared.",
 example:"A: 你(nǐ)准备(zhǔnbèi)好(hǎo)了(le)吗(ma)？\nB: 准备(zhǔnbèi)好(hǎo)了(le)！我们(wǒmen)走(zǒu)吧(ba)！",
 exampleSrc:"A: Are you ready?\nB: Ready! Let us go!",
 funFact:"准备好了吗 (Are you ready?) is one of the most useful travel phrases. You will hear it from tour guides, at boarding gates, and from friends gathering for a trip. The 好了 at the end means 'completed.'"},

{type:"teach", trg:"出发(chūfā)", src:"to depart / to set out", pos:"verb", gender:null,
 note:"出 = go out + 发 = to send/emit. Literally: go out and launch.\nUsed for starting a journey from your current location.",
 example:"A: 我们(wǒmen)什么(shénme)时候(shíhou)出发(chūfā)？\nB: 八(bā)点(diǎn)出发(chūfā)。",
 exampleSrc:"A: When do we depart?\nB: We depart at eight o'clock.",
 funFact:"出发 has a sense of beginning a new adventure. When Chinese friends leave for a road trip, someone will shout 出发！ (Let us go!) with enthusiasm. It is the Chinese equivalent of 'We are off!'"},

{type:"teach", trg:"快(kuài)", src:"fast / quick", pos:"adj", gender:null,
 note:"Fourth tone (falling). Describes speed or pace.\nAlso means 'soon': 快要...了 = about to.",
 example:"A: 飞机(fēijī)快(kuài)不(bu)快(kuài)？\nB: 飞机(fēijī)很(hěn)快(kuài)！",
 exampleSrc:"A: Is the plane fast?\nB: The plane is very fast!",
 funFact:"快 also appears in 快乐(kuàilè) meaning 'happy/joyful.' The connection: happiness arrives quickly, time flies when you are having fun. 快餐(kuàicān) = fast food. 快递(kuàidì) = express delivery."},

{type:"teach", trg:"慢(màn)", src:"slow", pos:"adj", gender:null,
 note:"Fourth tone. The opposite of 快.\n慢慢来(mànmànlái) = take it slow, no rush.",
 example:"A: 公共汽车(gōnggòng qìchē)慢(màn)不(bu)慢(màn)？\nB: 很(hěn)慢(màn)，坐(zuò)地铁(dìtiě)吧(ba)。",
 exampleSrc:"A: Is the bus slow?\nB: Very slow, let us take the subway.",
 funFact:"慢慢来 (take it slowly, no rush) is a beloved Chinese phrase. It reflects a cultural value of patience and not rushing through life. You will hear it in restaurants, shops, and from friends who want you to relax."},

{type:"mc", q:"准备(zhǔnbèi)好(hǎo)了(le)吗(ma)？ What is being asked?",
 opts:["Where are you going?","Are you ready?","What time is it?","How fast is it?"],
 ans:"Are you ready?",
 hint:"准备 means to prepare, and 好了 indicates completion. Together they ask about readiness."},

{type:"match", pairs:[
  {trg:"旅游(lǚyóu)", src:"to travel"},
  {trg:"准备(zhǔnbèi)", src:"to prepare"},
  {trg:"出发(chūfā)", src:"to depart"},
  {trg:"快(kuài)", src:"fast"},
  {trg:"慢(màn)", src:"slow"}
]},

{type:"fb", s:"我们(wǒmen)什么(shénme)时候(shíhou){1}？",
 a:["出发(chūfā)"],
 opts:["出发(chūfā)","准备(zhǔnbèi)","旅游(lǚyóu)","快(kuài)"],
 hint:"Which verb asks about the moment you begin your journey?",
 sSrc:"When do we {1}?"},

{type:"mc", q:"飞机(fēijī)很(hěn)快(kuài)，公共汽车(gōnggòng qìchē)很(hěn)慢(màn)。 This sentence compares:",
 opts:["The cost of two vehicles","The speed of two vehicles","The size of two vehicles","The color of two vehicles"],
 ans:"The speed of two vehicles",
 hint:"快 and 慢 are opposites that describe how rapidly something moves."},

{type:"fb", s:"你(nǐ)喜欢(xǐhuan){1}吗(ma)？我们(wǒmen)一起(yìqǐ)去(qù)吧(ba)！",
 a:["旅游(lǚyóu)"],
 opts:["旅游(lǚyóu)","出发(chūfā)","准备(zhǔnbèi)","快(kuài)"],
 hint:"Which verb-noun describes the activity of visiting new places for fun?",
 sSrc:"Do you like {1}? Let us go together!"},

{type:"mc", q:"慢慢来(mànmànlái) is a common phrase meaning:",
 opts:["Hurry up","Come here","Take it slow, no rush","Go away"],
 ans:"Take it slow, no rush",
 hint:"慢 is repeated for emphasis, and 来 means come. The phrase expresses a relaxed attitude."}
]},

// ─── L4: Planning a Trip ───
{id:"zhv2_u12l4", title:"Planning a Trip", icon:"📋", xp:15, board:true, steps:[
{type:"intro", title:"Planning a Trip",
 desc:"Put all travel vocabulary together. Learn to sequence events with 先...然后, plan a complete trip, and review all Unit 12 vocabulary.",
 goals:["Use 先...然后 to sequence travel steps","Plan a trip using all Unit 12 vocabulary","Combine transport, locations, and travel verbs"]},

{type:"teach", trg:"先(xiān)", src:"first / before", pos:"adv", gender:null,
 note:"Placed before the verb for the first action in a sequence.\nOften paired with 然后 to create 'first...then...'",
 example:"A: 先(xiān)买(mǎi)票(piào)。\nB: 好(hǎo)的(de)。",
 exampleSrc:"A: Buy tickets first.\nB: Okay.",
 funFact:"先 originally showed a person walking ahead of others. The meaning of 'first' or 'before' comes from being the one who goes ahead. 先生(xiānsheng) = Mr./sir, literally 'the one born first.'"},

{type:"teach", trg:"然后(ránhòu)", src:"then / after that", pos:"conj", gender:null,
 note:"Used after the first action to introduce the next step.\nPairs naturally with 先: 先...然后...",
 example:"A: 先(xiān)坐(zuò)地铁(dìtiě)去(qù)机场(jīchǎng)，然后(ránhòu)坐(zuò)飞机(fēijī)。\nB: 好(hǎo)的(de)！",
 exampleSrc:"A: First take the subway to the airport, then take the plane.\nB: Okay!",
 funFact:"然 means 'so/thus' and 后 means 'after.' Chinese has many sequence words built from simple pieces: 以后(yǐhòu) = after/later, 之后(zhīhòu) = after that, 最后(zuìhòu) = finally/lastly."},

{type:"tip", title:"先...然后...: First...Then...",
 text:"This structure sequences two or more actions:\n\n先(xiān) + Action 1, 然后(ránhòu) + Action 2\n\nExamples:\n先(xiān)准备(zhǔnbèi)，然后(ránhòu)出发(chūfā)。\nFirst prepare, then depart.\n\n先(xiān)坐(zuò)地铁(dìtiě)，然后(ránhòu)坐(zuò)火车(huǒchē)。\nFirst take the subway, then take the train.\n\nFor three steps, add 最后(zuìhòu) 'finally':\n先...然后...最后...",
 deepDive:{title:"Sequencing Beyond 先...然后",
  text:"Chinese has a full toolkit for ordering events:\n\n先(xiān) = first\n然后(ránhòu) = then\n接着(jiēzhe) = next/following that\n最后(zuìhòu) = finally/lastly\n\nExample of a full sequence:\n先买票，然后去车站，接着上车，最后到机场。\nFirst buy tickets, then go to the station, next board, finally arrive at the airport.\n\nThis is essential for giving directions, telling stories, and explaining processes."}},

{type:"mc", q:"先(xiān)买(mǎi)票(piào)，然后(ránhòu)去(qù)车站(chēzhàn)。 What is the correct order?",
 opts:["Go to the station, then buy tickets","Buy tickets and go to the station at the same time","Buy tickets first, then go to the station","Go to the station only"],
 ans:"Buy tickets first, then go to the station",
 hint:"先 marks the initial step, 然后 marks the subsequent step. Read the sequence logically."},

{type:"match", pairs:[
  {trg:"先(xiān)", src:"first"},
  {trg:"然后(ránhòu)", src:"then / after that"},
  {trg:"飞机(fēijī)", src:"airplane"},
  {trg:"火车(huǒchē)", src:"train"},
  {trg:"机场(jīchǎng)", src:"airport"},
  {trg:"车站(chēzhàn)", src:"station"}
]},

{type:"fb", s:"{1}准备(zhǔnbèi)好(hǎo)，然后(ránhòu)出发(chūfā)。",
 a:["先(xiān)"],
 opts:["先(xiān)","然后(ránhòu)","快(kuài)","慢(màn)"],
 hint:"Which word introduces the action that happens before everything else?",
 sSrc:"{1} get ready, then depart."},

{type:"mc", q:"坐(zuò)飞机(fēijī)快(kuài)，坐(zuò)火车(huǒchē)慢(màn)。 Based on this, which is better for a long trip?",
 opts:["Bus","Train","Plane","Taxi"],
 ans:"Plane",
 hint:"快 means fast. For covering a great distance, the faster option is more practical."},

{type:"drag_fill",
 s:"先(xiān)坐(zuò){1}去(qù)车站(chēzhàn)，然后(ránhòu)坐(zuò){2}去(qù)上海(Shànghǎi)。",
 blanks:{"1":"地铁(dìtiě)","2":"火车(huǒchē)"},
 pool:["地铁(dìtiě)","火车(huǒchē)","飞机(fēijī)","出租车(chūzūchē)"],
 hint:"One transport takes you to the station within the city. The other takes you on a long journey between cities."},

{type:"fb", s:"你(nǐ)准备(zhǔnbèi)好(hǎo)了(le)吗(ma)？我们(wǒmen)八(bā)点(diǎn){1}。",
 a:["出发(chūfā)"],
 opts:["出发(chūfā)","旅游(lǚyóu)","准备(zhǔnbèi)","快(kuài)"],
 hint:"Which verb means to leave, to set out on a journey?",
 sSrc:"Are you ready? We {1} at eight o'clock."},

{type:"mc", q:"Which sequence correctly plans a trip?",
 opts:["然后买票，先坐飞机","先买票，然后去机场，然后坐飞机","坐飞机，先买票，然后去机场","先坐飞机，然后买票"],
 ans:"先买票，然后去机场，然后坐飞机",
 hint:"Think logically: what must you do before you can board? And where must you go to find the plane?"},

{type:"drag_fill",
 s:"我(wǒ)喜欢(xǐhuan){1}，先(xiān)买(mǎi){2}，然后(ránhòu)出发(chūfā)！",
 blanks:{"1":"旅游(lǚyóu)","2":"票(piào)"},
 pool:["旅游(lǚyóu)","票(piào)","路(lù)","快(kuài)"],
 hint:"The first blank is the activity you enjoy. The second is what you purchase before traveling."},

{type:"match", pairs:[
  {trg:"坐(zuò)飞机(fēijī)", src:"take a plane"},
  {trg:"坐(zuò)火车(huǒchē)", src:"take a train"},
  {trg:"坐(zuò)地铁(dìtiě)", src:"take the subway"},
  {trg:"坐(zuò)出租车(chūzūchē)", src:"take a taxi"},
  {trg:"买(mǎi)票(piào)", src:"buy a ticket"}
]},

{type:"mc", q:"我们(wǒmen)先(xiān)坐(zuò)出租车(chūzūchē)去(qù)机场(jīchǎng)，然后(ránhòu)坐(zuò)飞机(fēijī)去(qù)北京(Běijīng)。 How many types of transport are used?",
 opts:["One","Two","Three","Four"],
 ans:"Two",
 hint:"Count each distinct vehicle mentioned in the sentence. The journey has two legs."},

{type:"fb", s:"公共汽车(gōnggòng qìchē)太(tài){1}了(le)，我们(wǒmen)坐(zuò)地铁(dìtiě)吧(ba)！",
 a:["慢(màn)"],
 opts:["慢(màn)","快(kuài)","好(hǎo)","忙(máng)"],
 hint:"The speaker wants to switch to a faster transport. What complaint about the bus motivates the switch?",
 sSrc:"The bus is too {1}, let us take the subway!"}
]},

// ─── L5: Train Station, Home, and Distances ───
{id:"zhv2_u12l5", title:"火车站和房子 Station and Home", icon:"🚉", xp:15, board:true, steps:[
{type:"intro", title:"Train Station and Home",
 desc:"Learn the key place words that appear throughout HSK 2 travel and daily life conversations: train station, house, and the essential near-far adjectives.",
 goals:["Use 火车站 for train station","Distinguish 房子 (house) from 家 (home)","Describe distances with 近 and 远"]},

{type:"teach", trg:"火车站(huǒchēzhàn)", src:"train station", pos:"noun", gender:null,
 note:"火车 (train) + 站 (station/stop).\nYou already know 火车 (fire vehicle). 站 means a stop or platform.",
 example:"A: 火车站(huǒchēzhàn)怎么(zěnme)走(zǒu)？\nB: 坐(zuò)地铁(dìtiě)，十(shí)分钟(fēnzhōng)就(jiù)到(dào)了(le)。",
 exampleSrc:"A: How do I get to the train station?\nB: Take the subway, you will be there in ten minutes.",
 funFact:"中国 has the world's longest high-speed rail network — over 40,000 kilometres of track, more than the rest of the world combined. The fastest trains reach 350 km/h. A journey from Beijing to Shanghai (1,318 km) takes just four hours by high-speed rail."},

{type:"teach", trg:"房子(fángzi)", src:"house / building", pos:"noun", gender:null,
 note:"房 (room/building) + 子 (noun suffix). Refers to a physical building.\nDifferent from 家(jiā) which means 'home' (the emotional concept or family).",
 example:"A: 那(nà)个(gè)房子(fángzi)很(hěn)大(dà)！\nB: 是(shì)的(de)，里面(lǐmiàn)有(yǒu)五(wǔ)个(gè)房间(fángjiān)。",
 exampleSrc:"A: That house is very big!\nB: Yes, inside there are five rooms.",
 funFact:"房子 is the physical structure, 家 is the emotional home. Chinese speakers say 我的家在北京 (my home is in Beijing) but 那个房子很大 (that house is big). This mirrors the English distinction between 'house' and 'home' — though Chinese learners often mix them up, just as English learners of Chinese do."},

{type:"teach", trg:"近(jìn)", src:"near / close", pos:"adj", gender:null,
 note:"Fourth tone (falling). Describes short distances.\n近 + place = close to somewhere. 很近 = very close.",
 example:"A: 火车站(huǒchēzhàn)离(lí)这(zhè)里(lǐ)近(jìn)吗(ma)？\nB: 很(hěn)近(jìn)，走路(zǒulù)五(wǔ)分钟(fēnzhōng)就(jiù)到(dào)了(le)。",
 exampleSrc:"A: Is the train station close to here?\nB: Very close, just five minutes on foot.",
 funFact:"近 contains the 辶 (movement) radical on the left. Many movement-related words share this radical: 进 (enter), 远 (far), 还 (still/return), 这 (this), 那 (that). The radical traces back to a crossroads symbol, showing paths and distances."},

{type:"teach", trg:"远(yuǎn)", src:"far / distant", pos:"adj", gender:null,
 note:"Third tone. The opposite of 近.\n远 + place = far from somewhere. 不远 = not far.",
 example:"A: 机场(jīchǎng)离(lí)市中心(shìzhōngxīn)远(yuǎn)吗(ma)？\nB: 比较(bǐjiào)远(yuǎn)，坐(zuò)地铁(dìtiě)要(yào)四十(sìshí)分钟(fēnzhōng)。",
 exampleSrc:"A: Is the airport far from the city centre?\nB: Fairly far, it takes forty minutes by subway.",
 funFact:"远 appears in the beautiful phrase 远在天边 (far to the edge of heaven) — used to describe something or someone who feels impossibly distant. Chinese poetry loves 远 as a symbol of longing, separation, and the vastness of the world. Even at A2, you are inheriting a rich literary tradition."},

{type:"tip", title:"离 (lí): Expressing Distance From",
 text:"To express distance between two points, Chinese uses 离:\n\n A + 离(lí) + B + distance\n\n火车站(huǒchēzhàn)离(lí)这里(zhèlǐ)很近(hěn jìn)。\nThe train station is very close to here.\n\n公司(gōngsī)离(lí)我家(wǒ jiā)很远(hěn yuǎn)。\nThe company is very far from my home.\n\n学校(xuéxiào)离(lí)这里(zhèlǐ)不远(bù yuǎn)。\nThe school is not far from here.\n\n离 = measured separation between two locations.",
 deepDive:{title:"离 vs 从",
  text:"Both involve spatial or temporal relationships, but they work differently:\n\n从(cóng) = starting point for movement: I go FROM here\n从这里到学校很近。 From here to school is close. (path)\n\n离(lí) = distance gap between two locations (no movement implied)\n这里离学校很近。 This place is close to school. (gap)\n\nQuick test: Can you replace with 'the distance between'? Then use 离. Are you describing movement? Then use 从...到."}},

{type:"mc", q:"火车站(huǒchēzhàn) is made of which three parts?",
 opts:["fire + car + stop","fly + machine + place","fire + machine + road","fire + iron + station"],
 ans:"fire + car + stop",
 hint:"You already know 火 and 车. 站 is the word for the platform or terminal."},

{type:"match", pairs:[
  {trg:"火车站(huǒchēzhàn)", src:"train station"},
  {trg:"房子(fángzi)", src:"house / building"},
  {trg:"近(jìn)", src:"near / close"},
  {trg:"远(yuǎn)", src:"far / distant"}
]},

{type:"fb", s:"公司(gōngsī)离(lí)我(wǒ)家(jiā)很(hěn){1}，我(wǒ)每(měi)天(tiān)坐(zuò)地铁(dìtiě)。",
 a:["远(yuǎn)"],
 opts:["远(yuǎn)","近(jìn)","快(kuài)","慢(màn)"],
 hint:"The speaker takes the subway every day — this suggests the company is not nearby. Which distance word fits?",
 sSrc:"My company is very {1} from home, I take the subway every day."},

{type:"mc", q:"那个房子(fángzi)很大。 What is being described?",
 opts:["The family is large","A room inside is large","The physical building is large","The home feels warm and big"],
 ans:"The physical building is large",
 hint:"房子 refers to a structure made of walls and a roof, not the family inside it."},

{type:"fb", s:"火车站(huǒchēzhàn)离(lí)这(zhè)里(lǐ)很(hěn){1}，走(zǒu)路(lù)五(wǔ)分钟(fēnzhōng)就(jiù)到(dào)了(le)。",
 a:["近(jìn)"],
 opts:["近(jìn)","远(yuǎn)","快(kuài)","大(dà)"],
 hint:"Five minutes on foot is a short distance. Which adjective means 'close' or 'nearby'?",
 sSrc:"The train station is very {1} from here, just five minutes on foot."},

{type:"mc", q:"公司(gōngsī)离(lí)我家(wǒ jiā)很远(hěn yuǎn)。 The pattern A + 离 + B + distance means:",
 opts:["A is moving toward B","B is inside A","The gap between A and B is large","A and B are the same place"],
 ans:"The gap between A and B is large",
 hint:"离 expresses the distance … between two locations — no movement, just separation."},

{type:"match", pairs:[
  {trg:"火车站(huǒchēzhàn)", src:"train station"},
  {trg:"房子(fángzi)", src:"house"},
  {trg:"近(jìn)", src:"near"},
  {trg:"远(yuǎn)", src:"far"},
  {trg:"离(lí)", src:"distance from"}
]}
]},

// ─── L6: Essential HSK 2–3 Words ───
{id:"zhv2_u12l_essential_hsk2_3", title:"核心词汇 Essential HSK 2–3 Words", icon:"📚", xp:20, board:true, steps:[
{type:"intro", title:"Essential HSK 2–3 Words",
 desc:"Master nine high-frequency HSK 2 and HSK 3 words that appear constantly in real Mandarin. These include key verbs, pronouns, adverbs, and abstract nouns that unlock natural Chinese conversation.",
 goals:["Use 给 as a verb meaning to give and as a preposition meaning for","Recognize 大家 as a collective pronoun for everyone","Use 成功, 内容, and 目的 in context","Express certainty with 当然 and logical steps with 经过 and 形成","Use 表示 to express or indicate something"]},

{type:"teach", trg:"给(gěi)", src:"to give / for / by", pos:"verb", gender:null,
 phonetic:"gěi",
 note:"给 has three main uses:\n1. Verb: 给 + recipient + thing (I give you something)\n2. Preposition for: 给我打电话 (call me / call for me)\n3. Passive marker at B1+: 杯子给打破了 (the cup got broken)",
 example:"A: 你(nǐ)给(gěi)我(wǒ)什么(shénme)？\nB: 我(wǒ)给(gěi)你(nǐ)一(yī)本(běn)书(shū)。",
 exampleSrc:"A: What are you giving me?\nB: I am giving you a book.",
 funFact:"给 is one of the most versatile words in Mandarin. As a verb it means 'give'; as a preposition it means 'for' or 'to' a recipient. Later at B1 it even acts like a passive marker. Mastering 给 early unlocks dozens of common sentence patterns."},

{type:"teach", trg:"大家(dàjiā)", src:"everyone / everybody", pos:"pron", gender:null,
 phonetic:"dàjiā",
 note:"大 = big / great + 家 = family/home. Literally: the big family.\nUsed to address or refer to a whole group. Always plural in meaning.",
 example:"A: 大家(dàjiā)好(hǎo)！\nB: 老师(lǎoshī)好(hǎo)！",
 exampleSrc:"A: Hello, everyone!\nB: Hello, teacher!",
 funFact:"大家好！ is the classic opening line Chinese teachers use at the start of every class. 大 (great/big) combined with 家 (family) expresses the idea of one big family — a warm, collective greeting rooted in Confucian values of group harmony."},

{type:"teach", trg:"成功(chénggōng)", src:"success / to succeed", pos:"noun", gender:null,
 phonetic:"chénggōng",
 note:"成 = to achieve/become + 功 = achievement/merit.\nWorks as both noun (success) and verb (to succeed).\n成功了！= We succeeded! / It worked!",
 example:"A: 你(nǐ)想(xiǎng)成功(chénggōng)吗(ma)？\nB: 想(xiǎng)！我(wǒ)要(yào)努力(nǔlì)！",
 exampleSrc:"A: Do you want to succeed?\nB: Yes! I will work hard!",
 funFact:"成功 appears constantly in Chinese motivational culture. The phrase 祝你成功 (zhù nǐ chénggōng — wishing you success) is as common as 'good luck' in English. 功 is also the root of 功夫 (gōngfu) — skill built through hard work and merit."},

{type:"teach", trg:"当然(dāngrán)", src:"of course / certainly", pos:"adv", gender:null,
 phonetic:"dāngrán",
 note:"当 = should/ought + 然 = so/thus. Literally: it should naturally be so.\nUsed to confirm something obvious or express strong agreement.",
 example:"A: 你(nǐ)喜欢(xǐhuan)旅游(lǚyóu)吗(ma)？\nB: 当然(dāngrán)！我(wǒ)很(hěn)喜欢(xǐhuan)！",
 exampleSrc:"A: Do you like traveling?\nB: Of course! I like it very much!",
 funFact:"当然 is one of the friendliest words in Mandarin. Saying 当然！makes the other person feel that their question had an obvious, positive answer. It is warmer and more enthusiastic than just 是 (yes). Overuse it and you will sound charmingly confident."},

{type:"teach", trg:"表示(biǎoshì)", src:"to express / to indicate", pos:"verb", gender:null,
 phonetic:"biǎoshì",
 note:"表 = to display/show + 示 = to indicate/point out.\nUsed when something conveys a meaning: a gesture, word, or action expresses something.",
 example:"A: 这(zhè)个(gè)词(cí)表示(biǎoshì)什么(shénme)？\nB: 这(zhè)个(gè)词(cí)表示(biǎoshì)成功(chénggōng)。",
 exampleSrc:"A: What does this word indicate?\nB: This word indicates success.",
 funFact:"表示 is heavily used in academic and formal Chinese — in textbooks, news reports, and speeches. Politicians 表示 their support; scientists 表示 their findings. At HSK 3, mastering this verb marks the shift from everyday chat to formal literacy."},

{type:"teach", trg:"经过(jīngguò)", src:"to pass through / via / after", pos:"prep", gender:null,
 phonetic:"jīngguò",
 note:"经 = to pass through/experience + 过 = to cross/pass.\nCan be a verb (pass through a place) or a preposition (via / after going through).",
 example:"A: 你(nǐ)怎么(zěnme)去(qù)车站(chēzhàn)？\nB: 我(wǒ)经过(jīngguò)公园(gōngyuán)去(qù)。",
 exampleSrc:"A: How do you get to the station?\nB: I go via the park.",
 funFact:"经过 shares its root 经 with 经验 (jīngyàn — experience) and 经济 (jīngjì — economy). The idea of passing through or traversing connects all three: you gain experience by passing through events; an economy is the flow of goods passing through society."},

{type:"teach", trg:"形成(xíngchéng)", src:"to form / to take shape", pos:"verb", gender:null,
 phonetic:"xíngchéng",
 note:"形 = shape/form + 成 = to become/achieve.\nDescribes how a pattern, habit, idea, or structure gradually develops.",
 example:"A: 好(hǎo)习惯(xíguàn)是(shì)怎么(zěnme)形成(xíngchéng)的(de)？\nB: 每(měi)天(tiān)练习(liànxí)就(jiù)能(néng)形成(xíngchéng)。",
 exampleSrc:"A: How do good habits form?\nB: Practicing every day is how they form.",
 funFact:"形成 is a favorite word in Chinese educational writing. Teachers talk about how knowledge forms, how character forms, how society forms. The character 形 originated as a pictograph of shadows cast by a shape — visual form emerging from light. Even abstract ideas have a visual root in Chinese."},

{type:"teach", trg:"内容(nèiróng)", src:"content / contents", pos:"noun", gender:null,
 phonetic:"nèiróng",
 note:"内 = inside/inner + 容 = to contain/hold. Literally: what is held inside.\nRefers to the substance or subject matter of a text, lesson, or communication.",
 example:"A: 这(zhè)本(běn)书(shū)的(de)内容(nèiróng)很(hěn)好(hǎo)。\nB: 好(hǎo)的(de)，我(wǒ)想(xiǎng)看(kàn)！",
 exampleSrc:"A: The content of this book is very good.\nB: Great, I want to read it!",
 funFact:"内容 is one of those words that feels abstract until you realise you use it daily: the content of a course, a song, a video, a speech. 内 (inner) also appears in 内部 (internal), 室内 (indoors), and 内心 (inner heart/feelings). The inside dimension runs through Chinese thought."},

{type:"teach", trg:"目的(mùdì)", src:"purpose / goal / objective", pos:"noun", gender:null,
 phonetic:"mùdì",
 note:"目 = eye/aim + 的 (dì in this word, not the particle de) = target.\nLiterally: the target the eye is aimed at. Used for goals, intentions, and purposes.",
 example:"A: 你(nǐ)学(xué)习(xí)中文(zhōngwén)的(de)目的(mùdì)是(shì)什么(shénme)？\nB: 我(wǒ)的(de)目的(mùdì)是(shì)去(qù)中国(Zhōngguó)工作(gōngzuò)。",
 exampleSrc:"A: What is your goal in learning Chinese?\nB: My goal is to work in China.",
 funFact:"The character 目 is one of the oldest pictographs in Chinese — it depicts a human eye turned sideways. A goal is literally 'what the eye aims at.' 的 (dì) as a suffix marks a target or destination (different from the particle 的 de), and it appears in 目的地 (mùdìdì — destination)."},

{type:"tip", title:"Abstract HSK 2–3 Nouns: 成功, 内容, 目的",
 text:"Three abstract nouns you just learned appear in HSK 2-3 exam questions and real Mandarin constantly:\n\n成功(chénggōng) = success (also a verb: to succeed)\n内容(nèiróng) = content (of a text, lesson, conversation)\n目的(mùdì) = purpose, goal, objective\n\nAll three describe outcomes and substance, not physical objects.\n\nUseful patterns:\n你的目的是什么？= What is your purpose?\n这本书的内容很好。= The content of this book is great.\n经过努力，他成功了。= After hard work, he succeeded.\n\n目的 and 成功 often appear together: 达到目的 = reach your goal.",
 deepDive:{title:"给(gěi) — Three Roles in One Word",
  text:"给 at HSK 2 means 'to give.' But it has two more roles worth knowing:\n\nRole 1 — Verb (give):\n我给你一本书。= I give you a book.\n\nRole 2 — Preposition (for / to):\n给我打电话。= Call me. (literally: make a call for/to me)\n我给大家介绍一下。= Let me introduce to everyone.\n\nRole 3 — Passive marker (B1+):\n书给他拿走了。= The book was taken away by him.\n\nAt A2, focus on Roles 1 and 2. The passive role comes naturally at B1 with more exposure."}},

{type:"mc", q:"我(wǒ)给(gěi)你(nǐ)一(yī)本(běn)书(shū)。 What is 给 doing in this sentence?",
 opts:["Acting as a preposition meaning for","Acting as a verb meaning to give","Acting as a passive marker","Acting as an adverb"],
 ans:"Acting as a verb meaning to give",
 hint:"The subject (I) performs an action transferring something to the recipient (you). Look at the structure: who acts, who receives, and what is transferred."},

{type:"fb", s:"大家(dàjiā){1}！",
 a:["好(hǎo)"],
 opts:["好(hǎo)","去(qù)","来(lái)","走(zǒu)"],
 hint:"This is the classic Chinese greeting used to address a whole group at once. One syllable completes it.",
 sSrc:"Hello, {1} everyone!"},

{type:"match", pairs:[
  {trg:"给(gěi)", src:"to give / for"},
  {trg:"大家(dàjiā)", src:"everyone"},
  {trg:"成功(chénggōng)", src:"success / to succeed"},
  {trg:"当然(dāngrán)", src:"of course"},
  {trg:"表示(biǎoshì)", src:"to express / to indicate"}
]},

{type:"fb", s:"你(nǐ)喜欢(xǐhuan)旅游(lǚyóu)吗(ma)？{1}！我(wǒ)很(hěn)喜欢(xǐhuan)！",
 a:["当然(dāngrán)"],
 opts:["当然(dāngrán)","成功(chénggōng)","内容(nèiróng)","目的(mùdì)"],
 hint:"The answer expresses enthusiastic, obvious agreement. Which adverb means of course or certainly?",
 sSrc:"{1}! I like it very much!"},

{type:"mc", q:"这(zhè)个(gè)词(cí)表示(biǎoshì)什么(shénme)？ What is being asked?",
 opts:["What time is this word?","What does this word indicate or mean?","Who said this word?","How do you write this word?"],
 ans:"What does this word indicate or mean?",
 hint:"Focus on 表示 and 什么. The question is asking about the communicative function or message that something conveys."},

{type:"fb", s:"我(wǒ)经过(jīngguò){1}去(qù)车站(chēzhàn)。",
 a:["公园(gōngyuán)"],
 opts:["公园(gōngyuán)","内容(nèiróng)","目的(mùdì)","成功(chénggōng)"],
 hint:"经过 means to pass through a place. Which option is a physical location you can walk through on the way?",
 sSrc:"I go to the station via the {1}."},

{type:"match", pairs:[
  {trg:"经过(jīngguò)", src:"to pass through / via"},
  {trg:"形成(xíngchéng)", src:"to form / to take shape"},
  {trg:"内容(nèiróng)", src:"content"},
  {trg:"目的(mùdì)", src:"purpose / goal"}
]},

{type:"fb", s:"你(nǐ)学(xué)习(xí)中文(zhōngwén)的(de){1}是(shì)什么(shénme)？",
 a:["目的(mùdì)"],
 opts:["目的(mùdì)","内容(nèiróng)","成功(chénggōng)","大家(dàjiā)"],
 hint:"The question asks why someone is studying Chinese. Which noun means the reason or objective behind an action?",
 sSrc:"What is your {1} in studying Chinese?"},

{type:"mc", q:"好习惯经过每天练习可以形成。 What does 形成 mean here?",
 opts:["to disappear","to form and take shape","to express","to pass through"],
 ans:"to form and take shape",
 hint:"形 is a pictograph of a visible outline, and 成 means to achieve or become. What happens when repeated practice gradually produces a stable pattern?"},

{type:"fb", s:"这(zhè)本(běn)书(shū)的(de){1}很(hěn)好(hǎo)，我(wǒ)很(hěn)喜欢(xǐhuan)。",
 a:["内容(nèiróng)"],
 opts:["内容(nèiróng)","目的(mùdì)","成功(chénggōng)","当然(dāngrán)"],
 hint:"The speaker praises the substance or subject matter of a book. Which noun means what is held inside — the material or subject?",
 sSrc:"The {1} of this book is great, I like it very much."},

{type:"mc", q:"经过努力，他成功了。 What caused the success?",
 opts:["Passing through the park","Hard work and effort","Giving something to someone","Forming a new habit"],
 ans:"Hard work and effort",
 hint:"经过 here functions as 'after going through.' 努力 describes the sustained, determined action he performed. What kind of input produces 成功?"}
]}

]};

export default UNIT_12;
