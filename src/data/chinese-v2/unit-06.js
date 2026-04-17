// Unit 6: Places and Getting Around
// Level: A1.2 (HSK 1)
// Chinese (Mandarin) V2 format with hanzi+pinyin notation

const UNIT_06 = {
n:6, lang:"zh", srcLang:"en", track:"v2",
title:"\u53BB\u54EA\u513F\uFF1F Where Are You Going?", sub:"Places and Directions",
icon:"\uD83D\uDDFA\uFE0F", level:"A1.2", color:"#7B5EE8",
lessons:[

// === L1: Places Around Town ===
{id:"zhv2_u6l1", title:"\u5B66\u6821\u548C\u5546\u5E97 School and Shop", icon:"\uD83C\uDFEB", xp:15, board:true, steps:[
{type:"intro", title:"\u5B66\u6821\u548C\u5546\u5E97 School and Shop",
 desc:"Learn the names of common places in Chinese. All of these are compound words built from characters you can break apart and understand.",
 goals:["Name four common places: school, hospital, shop, restaurant","Understand how Chinese builds place names from character pairs","Use \u53BB + place to say where you are going"]},

{type:"teach", trg:"\u5B66\u6821(xu\u00E9xi\u00E0o)", src:"school", pos:"noun", gender:null,
 note:"\u5B66 = study, \u6821 = school/building. Literally 'study building.'\nThe most common place word in Chinese.",
 example:"A: \u4F60(n\u01D0)\u53BB(q\u00F9)\u5B66\u6821(xu\u00E9xi\u00E0o)\u5417(ma)\uFF1F\nB: \u5BF9(du\u00EC)\uFF0C\u6211(w\u01D2)\u4E0A\u5348(sh\u00E0ngw\u01D4)\u53BB(q\u00F9)\u5B66\u6821(xu\u00E9xi\u00E0o)\u3002",
 exampleSrc:"A: Are you going to school?\nB: Yes, I am going to school in the morning.",
 funFact:"Chinese place names are beautifully logical. \u5B66\u6821 = study + school. \u5927\u5B66 = big + study = university. \u4E2D\u5B66 = middle + study = middle school. \u5C0F\u5B66 = small + study = elementary school. Size tells you the level!"},

{type:"teach", trg:"\u533B\u9662(y\u012Byu\u00E0n)", src:"hospital", pos:"noun", gender:null,
 note:"\u533B = medical/doctor, \u9662 = courtyard/institution.\nLiterally 'medical institution.'",
 example:"A: \u4ED6(t\u0101)\u53BB(q\u00F9)\u533B\u9662(y\u012Byu\u00E0n)\u4E86(le)\u3002\nB: \u4ED6(t\u0101)\u600E\u4E48(z\u011Bnme)\u4E86(le)\uFF1F",
 exampleSrc:"A: He went to the hospital.\nB: What happened to him?",
 funFact:"\u9662 (courtyard/institution) appears in many place words: \u533B\u9662 (hospital), \u5B66\u9662 (college), \u7535\u5F71\u9662 (cinema). Once you know \u9662, you can recognize institutions everywhere."},

{type:"teach", trg:"\u5546\u5E97(sh\u0101ngdi\u00E0n)", src:"shop / store", pos:"noun", gender:null,
 note:"\u5546 = commerce/business, \u5E97 = shop/store.\nLiterally 'commerce store.' A general term for any shop.",
 example:"A: \u6211(w\u01D2)\u53BB(q\u00F9)\u5546\u5E97(sh\u0101ngdi\u00E0n)\u4E70(m\u01CEi)\u4E1C\u897F(d\u014Dngxi)\u3002\nB: \u597D(h\u01CEo)\uFF0C\u6211(w\u01D2)\u4E5F(y\u011B)\u53BB(q\u00F9)\uFF01",
 exampleSrc:"A: I am going to the shop to buy things.\nB: Okay, I will go too!",
 funFact:"\u5E97 (shop/store) is another building block character: \u4E66\u5E97 (bookstore), \u836F\u5E97 (pharmacy), \u9152\u5E97 (hotel, literally 'wine shop'). Learn \u5E97 and you unlock a whole family of places."},

{type:"teach", trg:"\u996D\u5E97(f\u00E0ndi\u00E0n)", src:"restaurant / hotel", pos:"noun", gender:null,
 note:"\u996D = food/meal, \u5E97 = shop/store.\nCan mean restaurant OR hotel depending on context.",
 example:"A: \u6211\u4EEC(w\u01D2men)\u53BB(q\u00F9)\u996D\u5E97(f\u00E0ndi\u00E0n)\u5403(ch\u012B)\u996D(f\u00E0n)\u5417(ma)\uFF1F\nB: \u597D(h\u01CEo)\uFF0C\u6211(w\u01D2)\u60F3(xi\u01CEng)\u5403(ch\u012B)\u4E2D\u56FD(Zh\u014Dnggu\u00F3)\u83DC(c\u00E0i)\u3002",
 exampleSrc:"A: Shall we go to the restaurant to eat?\nB: Great, I want to eat Chinese food.",
 funFact:"\u996D\u5E97 can mean both 'restaurant' and 'hotel' because Chinese inns historically served food and provided lodging. A large \u996D\u5E97 is usually a hotel. A small one is a restaurant. Context and size make the difference clear."},

{type:"tip", title:"How Chinese Builds Place Names",
 text:"Chinese creates place names by combining meaningful characters:\n\n\u5B66\u6821 = study + school = school\n\u533B\u9662 = medical + institution = hospital\n\u5546\u5E97 = commerce + store = shop\n\u996D\u5E97 = food + store = restaurant\n\nOnce you know the building blocks (\u5E97, \u9662, \u6821), you can guess new place names. This is one of the great advantages of Chinese: compound words make sense when you know the parts.",
 deepDive:{title:"The \u5E97 Family of Places",
  text:"\u5E97 (di\u00E0n, store/shop) appears in dozens of place names:\n\n\u5546\u5E97 = commerce store (general shop)\n\u996D\u5E97 = food store (restaurant/hotel)\n\u4E66\u5E97 = book store (bookshop)\n\u836F\u5E97 = medicine store (pharmacy)\n\u9152\u5E97 = wine store (hotel)\n\u5496\u5561\u5E97 = coffee store (cafe)\n\u82B1\u5E97 = flower store (florist)\n\nKnowing \u5E97 unlocks this entire family of words. You will encounter many of these at A2 level."}},

{type:"mc", q:"\u5B66\u6821(xu\u00E9xi\u00E0o) literally means:",
 opts:["big building","reading place","children house","study building"],
 ans:"study building",
 hint:"Break the word into its two characters: \u5B66 (study) + \u6821 (school/building)."},

{type:"match", pairs:[
  {trg:"\u5B66\u6821(xu\u00E9xi\u00E0o)", src:"school"},
  {trg:"\u533B\u9662(y\u012Byu\u00E0n)", src:"hospital"},
  {trg:"\u5546\u5E97(sh\u0101ngdi\u00E0n)", src:"shop / store"},
  {trg:"\u996D\u5E97(f\u00E0ndi\u00E0n)", src:"restaurant / hotel"}
]},

{type:"fb", s:"\u6211(w\u01D2)\u53BB(q\u00F9){1}\u4E70(m\u01CEi)\u4E1C\u897F(d\u014Dngxi)\u3002",
 a:["\u5546\u5E97(sh\u0101ngdi\u00E0n)"],
 opts:["\u5546\u5E97(sh\u0101ngdi\u00E0n)","\u5B66\u6821(xu\u00E9xi\u00E0o)","\u533B\u9662(y\u012Byu\u00E0n)","\u996D\u5E97(f\u00E0ndi\u00E0n)"],
 hint:"You go to this place when you need to buy things. It is a general store.",
 sSrc:"I am going to the {1} to buy things."},

{type:"mc", q:"\u4ED6(t\u0101)\u53BB(q\u00F9)\u533B\u9662(y\u012Byu\u00E0n)\u4E86(le)\u3002 Where did he go?",
 opts:["hospital","school","shop","restaurant"],
 ans:"hospital",
 hint:"\u533B means 'medical' and \u9662 means 'institution.' This is where you go when you are sick."},

{type:"fb", s:"\u6211\u4EEC(w\u01D2men)\u53BB(q\u00F9){1}\u5403(ch\u012B)\u996D(f\u00E0n)\u5417(ma)\uFF1F",
 a:["\u996D\u5E97(f\u00E0ndi\u00E0n)"],
 opts:["\u996D\u5E97(f\u00E0ndi\u00E0n)","\u5B66\u6821(xu\u00E9xi\u00E0o)","\u5546\u5E97(sh\u0101ngdi\u00E0n)","\u533B\u9662(y\u012Byu\u00E0n)"],
 hint:"This is where you go to eat a meal. The first character means 'food.'",
 sSrc:"Shall we go to the {1} to eat?"},

{type:"mc", q:"Which character means 'store/shop' and appears in \u5546\u5E97 and \u996D\u5E97?",
 opts:["\u5546(sh\u0101ng)","\u996D(f\u00E0n)","\u5E97(di\u00E0n)","\u9662(yu\u00E0n)"],
 ans:"\u5E97(di\u00E0n)",
 hint:"This character is the second part of both words and means a place where goods or services are offered."},

{type:"fb", s:"\u4ED6(t\u0101)\u4E0A\u5348(sh\u00E0ngw\u01D4)\u53BB(q\u00F9){1}\u3002",
 a:["\u5B66\u6821(xu\u00E9xi\u00E0o)"],
 opts:["\u5B66\u6821(xu\u00E9xi\u00E0o)","\u996D\u5E97(f\u00E0ndi\u00E0n)","\u5546\u5E97(sh\u0101ngdi\u00E0n)","\u533B\u9662(y\u012Byu\u00E0n)"],
 hint:"In the morning, students go to this place to study.",
 sSrc:"He goes to {1} in the morning."}
]},

// === L2: Where Is It? ===
{id:"zhv2_u6l2", title:"\u54EA\u513F\uFF1F\u8FD9\u513F\uFF01 Where? Here!", icon:"\uD83D\uDCCD", xp:15, board:true, steps:[
{type:"intro", title:"\u54EA\u513F\uFF1F\u8FD9\u513F\uFF01 Where? Here!",
 desc:"Learn to ask and answer 'where' questions with location words. Master the three essential question-answer pairs: where, here, there.",
 goals:["Ask where with \u54EA\u513F","Answer with \u8FD9\u513F (here) and \u90A3\u513F (there)","Describe positions with front, behind, and beside"]},

{type:"teach", trg:"\u54EA\u513F(n\u01CEr)", src:"where", pos:"pron", gender:null,
 note:"Question word for place. \u54EA = which, \u513F = suffix.\n\u4F60\u53BB\u54EA\u513F\uFF1F = Where are you going?",
 example:"A: \u4F60(n\u01D0)\u53BB(q\u00F9)\u54EA\u513F(n\u01CEr)\uFF1F\nB: \u6211(w\u01D2)\u53BB(q\u00F9)\u5B66\u6821(xu\u00E9xi\u00E0o)\u3002",
 exampleSrc:"A: Where are you going?\nB: I am going to school.",
 funFact:"\u513F is the Beijing 'erhua' suffix that adds a soft 'r' sound. In southern Chinese dialects, people say \u54EA\u91CC instead. Both are correct. \u54EA\u513F is standard Mandarin and more common in northern China."},

{type:"teach", trg:"\u8FD9\u513F(zh\u00E8r)", src:"here", pos:"pron", gender:null,
 note:"\u8FD9 = this, \u513F = suffix. Points to the speaker's current location.\nSouthern variant: \u8FD9\u91CC.",
 example:"A: \u5546\u5E97(sh\u0101ngdi\u00E0n)\u5728(z\u00E0i)\u54EA\u513F(n\u01CEr)\uFF1F\nB: \u5546\u5E97(sh\u0101ngdi\u00E0n)\u5728(z\u00E0i)\u8FD9\u513F(zh\u00E8r)\u3002",
 exampleSrc:"A: Where is the shop?\nB: The shop is here.",
 funFact:"\u8FD9 (this) and \u90A3 (that) are the foundation of Chinese spatial language. Add \u513F to get 'here/there,' add \u4E2A to get 'this one/that one.' They are two of the most versatile demonstratives in any language."},

{type:"teach", trg:"\u90A3\u513F(n\u00E0r)", src:"there", pos:"pron", gender:null,
 note:"\u90A3 = that, \u513F = suffix. Points to a distant location.\nSouthern variant: \u90A3\u91CC.",
 example:"A: \u5B66\u6821(xu\u00E9xi\u00E0o)\u5728(z\u00E0i)\u54EA\u513F(n\u01CEr)\uFF1F\nB: \u5728(z\u00E0i)\u90A3\u513F(n\u00E0r)\uFF0C\u4E0D(b\u00F9)\u8FDC(yu\u01CEn)\u3002",
 exampleSrc:"A: Where is the school?\nB: Over there, not far.",
 funFact:"Notice the beautiful pattern: \u54EA\u513F (where?), \u8FD9\u513F (here), \u90A3\u513F (there). The question word \u54EA and the answer words \u8FD9/\u90A3 share the same structure with \u513F. Chinese loves this kind of symmetry."},

{type:"teach", trg:"\u524D\u9762(qi\u00E1nmi\u00E0n)", src:"in front / ahead", pos:"noun", gender:null,
 note:"\u524D = front/before, \u9762 = face/side.\nLiterally 'front face.' Used after a reference point.",
 example:"A: \u5B66\u6821(xu\u00E9xi\u00E0o)\u5728(z\u00E0i)\u54EA\u513F(n\u01CEr)\uFF1F\nB: \u5728(z\u00E0i)\u5546\u5E97(sh\u0101ngdi\u00E0n)\u524D\u9762(qi\u00E1nmi\u00E0n)\u3002",
 exampleSrc:"A: Where is the school?\nB: It is in front of the shop.",
 funFact:"\u9762 means 'face' or 'surface.' It appears in all position words: \u524D\u9762 (front face), \u540E\u9762 (back face), \u4E0A\u9762 (top face), \u4E0B\u9762 (bottom face). Chinese thinks of positions as 'faces' of an object."},

{type:"teach", trg:"\u540E\u9762(h\u00F2umi\u00E0n)", src:"behind / at the back", pos:"noun", gender:null,
 note:"\u540E = back/after, \u9762 = face/side.\nLiterally 'back face.' The opposite of \u524D\u9762.",
 example:"A: \u533B\u9662(y\u012Byu\u00E0n)\u5728(z\u00E0i)\u54EA\u513F(n\u01CEr)\uFF1F\nB: \u5728(z\u00E0i)\u5B66\u6821(xu\u00E9xi\u00E0o)\u540E\u9762(h\u00F2umi\u00E0n)\u3002",
 exampleSrc:"A: Where is the hospital?\nB: It is behind the school.",
 funFact:"\u524D and \u540E work for both space and time. \u524D\u9762 = in front (space) or before (time). \u540E\u9762 = behind (space) or after (time). \u4EE5\u524D = before/in the past. \u4EE5\u540E = after/in the future."},

{type:"teach", trg:"\u65C1\u8FB9(p\u00E1ngbi\u0101n)", src:"beside / next to", pos:"noun", gender:null,
 note:"\u65C1 = side, \u8FB9 = edge/side.\nLiterally 'side edge.' Means next to something.",
 example:"A: \u996D\u5E97(f\u00E0ndi\u00E0n)\u5728(z\u00E0i)\u54EA\u513F(n\u01CEr)\uFF1F\nB: \u5728(z\u00E0i)\u5546\u5E97(sh\u0101ngdi\u00E0n)\u65C1\u8FB9(p\u00E1ngbi\u0101n)\u3002",
 exampleSrc:"A: Where is the restaurant?\nB: It is next to the shop.",
 funFact:"\u8FB9 (edge/side) appears in many location words: \u65C1\u8FB9 (beside), \u8FD9\u8FB9 (this side), \u90A3\u8FB9 (that side), \u5DE6\u8FB9 (left side), \u53F3\u8FB9 (right side). It is the universal 'side' marker."},

{type:"tip", title:"Asking and Answering 'Where'",
 text:"The pattern for 'where' questions:\n\n...\u5728(z\u00E0i)\u54EA\u513F(n\u01CEr)\uFF1F = Where is...?\n\nAnswers use position words:\n\u5728(z\u00E0i) + reference + position word\n\n\u5728(z\u00E0i)\u8FD9\u513F(zh\u00E8r)\u3002 It is here.\n\u5728(z\u00E0i)\u5B66\u6821(xu\u00E9xi\u00E0o)\u524D\u9762(qi\u00E1nmi\u00E0n)\u3002 In front of the school.\n\u5728(z\u00E0i)\u5546\u5E97(sh\u0101ngdi\u00E0n)\u540E\u9762(h\u00F2umi\u00E0n)\u3002 Behind the shop.\n\u5728(z\u00E0i)\u533B\u9662(y\u012Byu\u00E0n)\u65C1\u8FB9(p\u00E1ngbi\u0101n)\u3002 Next to the hospital.",
 deepDive:{title:"Position Words Come AFTER the Reference",
  text:"English puts position words before the reference: 'in front OF the school.' Chinese puts them after: '\u5B66\u6821\u524D\u9762' (school front-face).\n\nThis is one of the biggest differences between English and Chinese word order for locations. The reference point comes first, then the position.\n\n\u5546\u5E97 + \u524D\u9762 = in front of the shop\n\u5B66\u6821 + \u540E\u9762 = behind the school\n\u533B\u9662 + \u65C1\u8FB9 = beside the hospital\n\nAlways: PLACE + POSITION."}},

{type:"mc", q:"\u5B66\u6821(xu\u00E9xi\u00E0o)\u5728(z\u00E0i)\u54EA\u513F(n\u01CEr)\uFF1F What is this asking?",
 opts:["When is school?","How is the school?","Where is the school?","What school?"],
 ans:"Where is the school?",
 hint:"\u54EA\u513F is the question word for 'where' and \u5728 asks about location."},

{type:"match", pairs:[
  {trg:"\u54EA\u513F(n\u01CEr)", src:"where"},
  {trg:"\u8FD9\u513F(zh\u00E8r)", src:"here"},
  {trg:"\u90A3\u513F(n\u00E0r)", src:"there"},
  {trg:"\u524D\u9762(qi\u00E1nmi\u00E0n)", src:"in front"},
  {trg:"\u540E\u9762(h\u00F2umi\u00E0n)", src:"behind"}
]},

{type:"fb", s:"\u533B\u9662(y\u012Byu\u00E0n)\u5728(z\u00E0i)\u5B66\u6821(xu\u00E9xi\u00E0o){1}\u3002",
 a:["\u540E\u9762(h\u00F2umi\u00E0n)"],
 opts:["\u540E\u9762(h\u00F2umi\u00E0n)","\u524D\u9762(qi\u00E1nmi\u00E0n)","\u65C1\u8FB9(p\u00E1ngbi\u0101n)","\u91CC(l\u01D0)"],
 hint:"The hospital is at the back of the school. Which position word means 'behind'?",
 sSrc:"The hospital is {1} the school."},

{type:"mc", q:"\u996D\u5E97(f\u00E0ndi\u00E0n)\u5728(z\u00E0i)\u5546\u5E97(sh\u0101ngdi\u00E0n)\u65C1\u8FB9(p\u00E1ngbi\u0101n)\u3002 Where is the restaurant?",
 opts:["In front of the shop","Behind the shop","Inside the shop","Next to the shop"],
 ans:"Next to the shop",
 hint:"\u65C1\u8FB9 means 'beside' or 'next to.' The restaurant is alongside the shop."},

{type:"fb", s:"\u5546\u5E97(sh\u0101ngdi\u00E0n)\u5728(z\u00E0i){1}\uFF0C\u4E0D(b\u00F9)\u8FDC(yu\u01CEn)\u3002",
 a:["\u90A3\u513F(n\u00E0r)"],
 opts:["\u90A3\u513F(n\u00E0r)","\u8FD9\u513F(zh\u00E8r)","\u54EA\u513F(n\u01CEr)","\u91CC(l\u01D0)"],
 hint:"The speaker is pointing to a distant location. Which word means 'there' or 'over there'?",
 sSrc:"The shop is {1}, not far."},

{type:"mc", q:"In Chinese, position words come:",
 opts:["Before the reference place","At the start of the sentence","Position does not matter","After the reference place"],
 ans:"After the reference place",
 hint:"Chinese says '\u5B66\u6821\u524D\u9762' (school front-face), not 'front-face school.'"},

{type:"fb", s:"\u5B66\u6821(xu\u00E9xi\u00E0o)\u5728(z\u00E0i)\u5546\u5E97(sh\u0101ngdi\u00E0n){1}\u3002",
 a:["\u524D\u9762(qi\u00E1nmi\u00E0n)"],
 opts:["\u524D\u9762(qi\u00E1nmi\u00E0n)","\u540E\u9762(h\u00F2umi\u00E0n)","\u65C1\u8FB9(p\u00E1ngbi\u0101n)","\u91CC(l\u01D0)"],
 hint:"The school is at the front of the shop. Which position word means 'in front'?",
 sSrc:"The school is in front of the shop."},

{type:"match", pairs:[
  {trg:"\u65C1\u8FB9(p\u00E1ngbi\u0101n)", src:"beside"},
  {trg:"\u5B66\u6821(xu\u00E9xi\u00E0o)", src:"school"},
  {trg:"\u533B\u9662(y\u012Byu\u00E0n)", src:"hospital"},
  {trg:"\u5546\u5E97(sh\u0101ngdi\u00E0n)", src:"shop"},
  {trg:"\u996D\u5E97(f\u00E0ndi\u00E0n)", src:"restaurant"}
]}
]},

// === L3: Getting Around ===
{id:"zhv2_u6l3", title:"\u600E\u4E48\u53BB\uFF1F How Do I Get There?", icon:"\uD83D\uDE8C", xp:15, board:true, steps:[
{type:"intro", title:"\u600E\u4E48\u53BB\uFF1F How Do I Get There?",
 desc:"Learn to ask how to get somewhere and describe basic ways of getting around: walking, sitting (taking transport), and arriving.",
 goals:["Ask how with \u600E\u4E48","Use \u8D70 (walk) and \u5750 (sit/take transport)","Say you arrived with \u5230"]},

{type:"teach", trg:"\u600E\u4E48(z\u011Bnme)", src:"how / how come", pos:"pron", gender:null,
 note:"Question word for method or manner.\n\u4F60\u600E\u4E48\u53BB\uFF1F = How do you get there?",
 example:"A: \u4F60(n\u01D0)\u600E\u4E48(z\u011Bnme)\u53BB(q\u00F9)\u5B66\u6821(xu\u00E9xi\u00E0o)\uFF1F\nB: \u6211(w\u01D2)\u8D70(z\u01D2u)\u8DEF(l\u00F9)\u53BB(q\u00F9)\u3002",
 exampleSrc:"A: How do you get to school?\nB: I walk there.",
 funFact:"\u600E\u4E48 asks 'how' for methods: \u4F60\u600E\u4E48\u53BB? (How do you go?) But it also asks 'how come': \u4F60\u600E\u4E48\u6765\u4E86? (How come you came?) Context tells you which meaning applies."},

{type:"teach", trg:"\u8D70(z\u01D2u)", src:"to walk / to go", pos:"verb", gender:null,
 note:"Tone 3 (dipping). Means both 'to walk' and 'to leave.'\n\u8D70\u8DEF = walk (on the road).",
 example:"A: \u6211\u4EEC(w\u01D2men)\u8D70(z\u01D2u)\u8DEF(l\u00F9)\u53BB(q\u00F9)\u5417(ma)\uFF1F\nB: \u597D(h\u01CEo)\uFF0C\u4E0D(b\u00F9)\u8FDC(yu\u01CEn)\uFF0C\u8D70(z\u01D2u)\u8DEF(l\u00F9)\u53BB(q\u00F9)\u5427(ba)\u3002",
 exampleSrc:"A: Shall we walk there?\nB: Sure, it is not far, let us walk.",
 funFact:"\u8D70 has two common meanings that seem opposite: 'to walk' (slow movement) and 'to leave' (\u6211\u8D70\u4E86 = I am leaving). The original meaning was 'to run' in classical Chinese. Over time it softened to 'walk.'"},

{type:"teach", trg:"\u5750(zu\u00F2)", src:"to sit / to take (transport)", pos:"verb", gender:null,
 note:"Tone 4 (falling). Means 'to sit' literally.\nAlso means 'to take' for transport: \u5750\u8F66 = take a car.",
 example:"A: \u4F60(n\u01D0)\u600E\u4E48(z\u011Bnme)\u53BB(q\u00F9)\u533B\u9662(y\u012Byu\u00E0n)\uFF1F\nB: \u6211(w\u01D2)\u5750(zu\u00F2)\u8F66(ch\u0113)\u53BB(q\u00F9)\u3002",
 exampleSrc:"A: How do you get to the hospital?\nB: I take a car to get there.",
 funFact:"Chinese uses \u5750 (sit) for taking transport because you sit in/on vehicles. \u5750\u8F66 (sit-car) = take a car. \u5750\u98DE\u673A (sit-airplane) = take a plane. \u5750\u706B\u8F66 (sit-fire-car) = take a train. The logic is wonderfully literal."},

{type:"teach", trg:"\u5230(d\u00E0o)", src:"to arrive / to", pos:"verb", gender:null,
 note:"Tone 4 (falling). Indicates reaching a destination.\n\u5230\u4E86 = arrived. \u5230 + place = arrive at.",
 example:"A: \u4F60(n\u01D0)\u5230(d\u00E0o)\u4E86(le)\u5417(ma)\uFF1F\nB: \u5230(d\u00E0o)\u4E86(le)\uFF01\u6211(w\u01D2)\u5728(z\u00E0i)\u5B66\u6821(xu\u00E9xi\u00E0o)\u91CC(l\u01D0)\u3002",
 exampleSrc:"A: Have you arrived?\nB: Yes! I am at school.",
 funFact:"\u5230 is both a verb (to arrive) and a preposition (to/at). '\u6211\u5230\u4E86' means 'I have arrived.' '\u6211\u5230\u5B66\u6821\u53BB' means 'I go to school.' This dual nature makes \u5230 extremely useful and extremely common."},

{type:"tip", title:"Transport Pattern: \u5750 + Vehicle + \u53BB",
 text:"To say how you travel somewhere:\n\nSubject + \u5750(zu\u00F2) + vehicle + \u53BB(q\u00F9) + destination\n\n\u6211(w\u01D2)\u5750(zu\u00F2)\u8F66(ch\u0113)\u53BB(q\u00F9)\u3002 I take a car to go.\n\u4ED6(t\u0101)\u5750(zu\u00F2)\u8F66(ch\u0113)\u53BB(q\u00F9)\u533B\u9662(y\u012Byu\u00E0n)\u3002 He takes a car to the hospital.\n\nFor walking: \u8D70(z\u01D2u)\u8DEF(l\u00F9)\u53BB(q\u00F9) = walk there (literally 'walk road go')\n\nTo ask how: \u4F60(n\u01D0)\u600E\u4E48(z\u011Bnme)\u53BB(q\u00F9)\uFF1F How do you get there?",
 deepDive:{title:"Why Chinese Says 'Sit a Car'",
  text:"English 'takes' transport, French 'takes' it too (prendre), German 'drives' it (fahren). Chinese 'sits' it (\u5750).\n\nThe logic is physical: you sit in a car, sit on a bus, sit in a plane. Chinese describes the actual posture rather than the abstract concept of 'taking' transport.\n\nThis extends to other verbs too: \u9A91\u8F66 means 'ride a bike' (literally 'straddle a vehicle'), because you straddle a bicycle. Each transport verb describes the physical relationship between person and vehicle."}},

{type:"mc", q:"\u4F60(n\u01D0)\u600E\u4E48(z\u011Bnme)\u53BB(q\u00F9)\u5B66\u6821(xu\u00E9xi\u00E0o)\uFF1F What is this asking?",
 opts:["How do you get to school?","When do you go to school?","Where is the school?","Why do you go to school?"],
 ans:"How do you get to school?",
 hint:"\u600E\u4E48 is the question word for 'how' or 'by what method.'"},

{type:"fb", s:"\u6211(w\u01D2){1}\u8DEF(l\u00F9)\u53BB(q\u00F9)\u5B66\u6821(xu\u00E9xi\u00E0o)\u3002",
 a:["\u8D70(z\u01D2u)"],
 opts:["\u8D70(z\u01D2u)","\u5750(zu\u00F2)","\u5230(d\u00E0o)","\u56DE(hu\u00ED)"],
 hint:"The speaker gets to school on foot. Which verb means 'to walk'?",
 sSrc:"I {1} to school."},

{type:"match", pairs:[
  {trg:"\u600E\u4E48(z\u011Bnme)", src:"how"},
  {trg:"\u8D70(z\u01D2u)", src:"to walk"},
  {trg:"\u5750(zu\u00F2)", src:"to sit / take"},
  {trg:"\u5230(d\u00E0o)", src:"to arrive"}
]},

{type:"mc", q:"\u6211(w\u01D2)\u5750(zu\u00F2)\u8F66(ch\u0113)\u53BB(q\u00F9)\u533B\u9662(y\u012Byu\u00E0n)\u3002 How is the speaker getting to the hospital?",
 opts:["Walking","By car","By bicycle","Running"],
 ans:"By car",
 hint:"\u5750\u8F66 literally means 'sit car' and is the standard way to say 'take a car.'"},

{type:"fb", s:"\u4F60(n\u01D0){1}\u4E86(le)\u5417(ma)\uFF1F",
 a:["\u5230(d\u00E0o)"],
 opts:["\u5230(d\u00E0o)","\u53BB(q\u00F9)","\u8D70(z\u01D2u)","\u6765(l\u00E1i)"],
 hint:"The speaker is asking if someone has reached their destination. Which verb means 'to arrive'?",
 sSrc:"Have you {1}?"},

{type:"mc", q:"\u8D70(z\u01D2u) can mean both:",
 opts:["to eat and to drink","to sit and to stand","to walk and to leave","to come and to go"],
 ans:"to walk and to leave",
 hint:"This verb covers slow movement on foot AND the act of departing from a place."},

{type:"fb", s:"\u4ED6(t\u0101){1}\u8F66(ch\u0113)\u53BB(q\u00F9)\u996D\u5E97(f\u00E0ndi\u00E0n)\u3002",
 a:["\u5750(zu\u00F2)"],
 opts:["\u5750(zu\u00F2)","\u8D70(z\u01D2u)","\u5230(d\u00E0o)","\u56DE(hu\u00ED)"],
 hint:"He 'sits' a vehicle to get to the restaurant. Which verb means 'to take transport'?",
 sSrc:"He takes a car to the restaurant."},

{type:"mc", q:"\u5230(d\u00E0o)\u4E86(le)\uFF01\u6211(w\u01D2)\u5728(z\u00E0i)\u5B66\u6821(xu\u00E9xi\u00E0o)\u91CC(l\u01D0)\u3002 What is the speaker saying?",
 opts:["I am leaving school","I want to go to school","I cannot find school","I arrived! I am at school."],
 ans:"I arrived! I am at school.",
 hint:"\u5230\u4E86 means 'arrived' and \u5728...\u91CC tells you the current location."}
]},

// === L4: Near and Far + Review ===
{id:"zhv2_u6l4", title:"\u8FDC\u8FD8\u662F\u8FD1\uFF1F Far or Near?", icon:"\uD83D\uDCCF", xp:15, board:true, steps:[
{type:"intro", title:"\u8FDC\u8FD8\u662F\u8FD1\uFF1F Far or Near?",
 desc:"Learn to describe distances with far and near. Then review all places, directions, and transport vocabulary from this unit.",
 goals:["Use \u8FDC (far) and \u8FD1 (near) to describe distance","Combine location and transport vocabulary","Ask for and give directions in Chinese"]},

{type:"teach", trg:"\u8FDC(yu\u01CEn)", src:"far", pos:"adj", gender:null,
 note:"Tone 3 (dipping). Used to describe distance.\n\u5F88\u8FDC = very far. \u4E0D\u8FDC = not far.",
 example:"A: \u5B66\u6821(xu\u00E9xi\u00E0o)\u8FDC(yu\u01CEn)\u5417(ma)\uFF1F\nB: \u4E0D(b\u00F9)\u8FDC(yu\u01CEn)\uFF0C\u8D70(z\u01D2u)\u8DEF(l\u00F9)\u5341(sh\u00ED)\u5206(f\u0113n)\u949F(zh\u014Dng)\u3002",
 exampleSrc:"A: Is the school far?\nB: Not far, a ten-minute walk.",
 funFact:"\u8FDC has the \u8FB6 radical (movement/road) on the left, showing it relates to distance and travel. The right part provides the pronunciation. In classical Chinese, \u8FDC also meant 'to distance oneself from' something."},

{type:"teach", trg:"\u8FD1(j\u00ECn)", src:"near / close", pos:"adj", gender:null,
 note:"Tone 4 (falling). The opposite of \u8FDC.\n\u5F88\u8FD1 = very close. \u79BB\u8FD9\u513F\u5F88\u8FD1 = close to here.",
 example:"A: \u996D\u5E97(f\u00E0ndi\u00E0n)\u8FD1(j\u00ECn)\u5417(ma)\uFF1F\nB: \u5F88(h\u011Bn)\u8FD1(j\u00ECn)\uFF0C\u5C31(ji\u00F9)\u5728(z\u00E0i)\u65C1\u8FB9(p\u00E1ngbi\u0101n)\u3002",
 exampleSrc:"A: Is the restaurant close?\nB: Very close, it is right next door.",
 funFact:"\u8FD1 also uses the \u8FB6 (road) radical, just like \u8FDC. The pair \u8FDC\u8FD1 (far-near) is a natural opposite set. Chinese loves these pairings: \u5927\u5C0F (big-small), \u4E0A\u4E0B (up-down), \u524D\u540E (front-back). Opposites are learned together."},

{type:"tip", title:"Asking About Distance",
 text:"To ask if a place is far:\n\n...\u8FDC(yu\u01CEn)\u5417(ma)\uFF1F = Is ... far?\n...\u8FD1(j\u00ECn)\u5417(ma)\uFF1F = Is ... near?\n\nAnswers:\n\u5F88(h\u011Bn)\u8FDC(yu\u01CEn)\u3002 Very far.\n\u4E0D(b\u00F9)\u8FDC(yu\u01CEn)\u3002 Not far.\n\u5F88(h\u011Bn)\u8FD1(j\u00ECn)\u3002 Very close.\n\n\u4E0D\u8FDC (not far) is much more common than \u5F88\u8FD1 (very close) in everyday Chinese. People reassure each other that places are 'not far' rather than saying they are 'very close.'",
 deepDive:{title:"A Complete Directions Conversation",
  text:"Here is a natural exchange combining everything from this unit:\n\nA: \u8BF7\u95EE\uFF0C\u533B\u9662\u5728\u54EA\u513F\uFF1F (Excuse me, where is the hospital?)\nB: \u5728\u5B66\u6821\u540E\u9762\u3002 (Behind the school.)\nA: \u8FDC\u5417\uFF1F (Is it far?)\nB: \u4E0D\u8FDC\uFF0C\u8D70\u8DEF\u4E94\u5206\u949F\u3002 (Not far, a five-minute walk.)\nA: \u600E\u4E48\u53BB\uFF1F (How do I get there?)\nB: \u4E00\u76F4\u8D70\uFF0C\u5B66\u6821\u540E\u9762\u5C31\u662F\u3002 (Go straight, it is right behind the school.)\n\nYou now have all the vocabulary needed for this conversation!"}},

{type:"mc", q:"\u5B66\u6821(xu\u00E9xi\u00E0o)\u8FDC(yu\u01CEn)\u5417(ma)\uFF1F What is this asking?",
 opts:["Where is the school?","Is the school far?","Is the school big?","When does school start?"],
 ans:"Is the school far?",
 hint:"\u8FDC means 'far' and \u5417 makes it a yes/no question about distance."},

{type:"fb", s:"\u996D\u5E97(f\u00E0ndi\u00E0n)\u5F88(h\u011Bn){1}\uFF0C\u5C31(ji\u00F9)\u5728(z\u00E0i)\u65C1\u8FB9(p\u00E1ngbi\u0101n)\u3002",
 a:["\u8FD1(j\u00ECn)"],
 opts:["\u8FD1(j\u00ECn)","\u8FDC(yu\u01CEn)","\u597D(h\u01CEo)","\u5927(d\u00E0)"],
 hint:"The restaurant is right next door. Which adjective describes a short distance?",
 sSrc:"The restaurant is very {1}, it is right next door."},

{type:"match", pairs:[
  {trg:"\u8FDC(yu\u01CEn)", src:"far"},
  {trg:"\u8FD1(j\u00ECn)", src:"near / close"},
  {trg:"\u524D\u9762(qi\u00E1nmi\u00E0n)", src:"in front"},
  {trg:"\u540E\u9762(h\u00F2umi\u00E0n)", src:"behind"},
  {trg:"\u65C1\u8FB9(p\u00E1ngbi\u0101n)", src:"beside"}
]},

{type:"mc", q:"\u4E0D(b\u00F9)\u8FDC(yu\u01CEn)\uFF0C\u8D70(z\u01D2u)\u8DEF(l\u00F9)\u5341(sh\u00ED)\u5206(f\u0113n)\u949F(zh\u014Dng)\u3002 What does this mean?",
 opts:["Very far, take a car","Not far, a ten-minute walk","Close by, five minutes","Too far to walk"],
 ans:"Not far, a ten-minute walk",
 hint:"\u4E0D\u8FDC = not far. \u8D70\u8DEF = walk. \u5341\u5206\u949F = ten minutes."},

{type:"fb", s:"\u5B66\u6821(xu\u00E9xi\u00E0o)\u4E0D(b\u00F9){1}\uFF0C\u8D70(z\u01D2u)\u8DEF(l\u00F9)\u53BB(q\u00F9)\u5427(ba)\u3002",
 a:["\u8FDC(yu\u01CEn)"],
 opts:["\u8FDC(yu\u01CEn)","\u8FD1(j\u00ECn)","\u597D(h\u01CEo)","\u5927(d\u00E0)"],
 hint:"The school is not __. Since it is close, let us walk. Which adjective means 'far'?",
 sSrc:"The school is not {1}, let us walk."},

{type:"mc", q:"\u533B\u9662(y\u012Byu\u00E0n)\u5728(z\u00E0i)\u5B66\u6821(xu\u00E9xi\u00E0o)\u540E\u9762(h\u00F2umi\u00E0n)\u3002 Where is the hospital?",
 opts:["In front of the school","Next to the school","Behind the school","Inside the school"],
 ans:"Behind the school",
 hint:"\u540E\u9762 means 'behind' or 'at the back of.'"},

{type:"fb", s:"\u4F60(n\u01D0){1}\u53BB(q\u00F9)\u5546\u5E97(sh\u0101ngdi\u00E0n)\uFF1F",
 a:["\u600E\u4E48(z\u011Bnme)"],
 opts:["\u600E\u4E48(z\u011Bnme)","\u54EA\u513F(n\u01CEr)","\u4EC0\u4E48(sh\u00E9nme)","\u51E0(j\u01D0)"],
 hint:"The speaker is asking about the method or way to reach the shop.",
 sSrc:"{1} do you get to the shop?"},

{type:"match", pairs:[
  {trg:"\u5B66\u6821(xu\u00E9xi\u00E0o)", src:"school"},
  {trg:"\u533B\u9662(y\u012Byu\u00E0n)", src:"hospital"},
  {trg:"\u8D70(z\u01D2u)", src:"to walk"},
  {trg:"\u5750(zu\u00F2)", src:"to sit / take"},
  {trg:"\u5230(d\u00E0o)", src:"to arrive"}
]},

{type:"mc", q:"\u6211(w\u01D2)\u5750(zu\u00F2)\u8F66(ch\u0113)\u5230(d\u00E0o)\u4E86(le)\u5B66\u6821(xu\u00E9xi\u00E0o)\u3002 What happened?",
 opts:["I walked to school","I am waiting for a car to school","I took a car and arrived at school","I cannot get to school"],
 ans:"I took a car and arrived at school",
 hint:"\u5750\u8F66 = take a car. \u5230\u4E86 = arrived. The action is complete."},

{type:"fb", s:"\u5546\u5E97(sh\u0101ngdi\u00E0n)\u5728(z\u00E0i)\u996D\u5E97(f\u00E0ndi\u00E0n){1}\u3002",
 a:["\u65C1\u8FB9(p\u00E1ngbi\u0101n)"],
 opts:["\u65C1\u8FB9(p\u00E1ngbi\u0101n)","\u524D\u9762(qi\u00E1nmi\u00E0n)","\u540E\u9762(h\u00F2umi\u00E0n)","\u91CC(l\u01D0)"],
 hint:"The shop is alongside the restaurant. Which position word means 'next to'?",
 sSrc:"The shop is {1} the restaurant."},

{type:"mc", q:"\u4F60(n\u01D0)\u53BB(q\u00F9)\u54EA\u513F(n\u01CEr)\uFF1F \u6211(w\u01D2)\u53BB(q\u00F9)\u996D\u5E97(f\u00E0ndi\u00E0n)\u3002 What is happening?",
 opts:["Someone is asking the time","Someone is ordering food","Someone is at the hospital","Someone is asking directions and gets an answer"],
 ans:"Someone is asking directions and gets an answer",
 hint:"\u53BB\u54EA\u513F means 'going where' and the answer names a specific place."},

{type:"match", pairs:[
  {trg:"\u54EA\u513F(n\u01CEr)", src:"where"},
  {trg:"\u8FD9\u513F(zh\u00E8r)", src:"here"},
  {trg:"\u90A3\u513F(n\u00E0r)", src:"there"},
  {trg:"\u8FDC(yu\u01CEn)", src:"far"},
  {trg:"\u8FD1(j\u00ECn)", src:"near"}
]}
]}

]};

export default UNIT_06;
