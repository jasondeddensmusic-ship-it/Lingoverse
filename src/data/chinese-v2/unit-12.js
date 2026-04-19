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
 hint:"机 is short for 飞机 (airplane), and 场 means a flat open area or field."},

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
 hint:"离 expresses the distance gap between two locations — no movement, just separation."},

{type:"match", pairs:[
  {trg:"火车站(huǒchēzhàn)", src:"train station"},
  {trg:"房子(fángzi)", src:"house"},
  {trg:"近(jìn)", src:"near"},
  {trg:"远(yuǎn)", src:"far"},
  {trg:"离(lí)", src:"distance from"}
]}
]}

]};

export default UNIT_12;
