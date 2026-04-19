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
 hint:"\u54EA\u513F is the question word for '___' and \u5728 asks about location."},

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
 hint:"\u65C1\u8FB9 means 'beside' or '___ to.' The restaurant is alongside the ___."},

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
 hint:"\u5750\u8F66 literally means 'sit ___' and is the standard way to say 'take a ___.'"},

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
 hint:"\u5230\u4E86 means '___' and \u5728...\u91CC tells you the current location."}
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
 hint:"\u4E0D\u8FDC = not far. \u8D70\u8DEF = ___. \u5341\u5206\u949F = ___ minutes."},

{type:"fb", s:"\u5B66\u6821(xu\u00E9xi\u00E0o)\u4E0D(b\u00F9){1}\uFF0C\u8D70(z\u01D2u)\u8DEF(l\u00F9)\u53BB(q\u00F9)\u5427(ba)\u3002",
 a:["\u8FDC(yu\u01CEn)"],
 opts:["\u8FDC(yu\u01CEn)","\u8FD1(j\u00ECn)","\u597D(h\u01CEo)","\u5927(d\u00E0)"],
 hint:"The school is not __. Since it is close, let us walk. Which adjective means 'far'?",
 sSrc:"The school is not {1}, let us walk."},

{type:"mc", q:"\u533B\u9662(y\u012Byu\u00E0n)\u5728(z\u00E0i)\u5B66\u6821(xu\u00E9xi\u00E0o)\u540E\u9762(h\u00F2umi\u00E0n)\u3002 Where is the hospital?",
 opts:["In front of the school","Next to the school","Behind the school","Inside the school"],
 ans:"Behind the school",
 hint:"\u540E\u9762 means '___' or 'at the back of.'"},

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
 hint:"\u5750\u8F66 = take a ___. \u5230\u4E86 = ___. The action is complete."},

{type:"fb", s:"\u5546\u5E97(sh\u0101ngdi\u00E0n)\u5728(z\u00E0i)\u996D\u5E97(f\u00E0ndi\u00E0n){1}\u3002",
 a:["\u65C1\u8FB9(p\u00E1ngbi\u0101n)"],
 opts:["\u65C1\u8FB9(p\u00E1ngbi\u0101n)","\u524D\u9762(qi\u00E1nmi\u00E0n)","\u540E\u9762(h\u00F2umi\u00E0n)","\u91CC(l\u01D0)"],
 hint:"The shop is alongside the restaurant. Which position word means 'next to'?",
 sSrc:"The shop is {1} the restaurant."},

{type:"mc", q:"\u4F60(n\u01D0)\u53BB(q\u00F9)\u54EA\u513F(n\u01CEr)\uFF1F \u6211(w\u01D2)\u53BB(q\u00F9)\u996D\u5E97(f\u00E0ndi\u00E0n)\u3002 What is happening?",
 opts:["Someone is asking the time","Someone is ordering food","Someone is at the hospital","Someone is asking directions and gets an answer"],
 ans:"Someone is asking directions and gets an answer",
 hint:"\u53BB\u54EA\u513F means 'going where' and the ___ names a specific place."},

{type:"match", pairs:[
  {trg:"\u54EA\u513F(n\u01CEr)", src:"where"},
  {trg:"\u8FD9\u513F(zh\u00E8r)", src:"here"},
  {trg:"\u90A3\u513F(n\u00E0r)", src:"there"},
  {trg:"\u8FDC(yu\u01CEn)", src:"far"},
  {trg:"\u8FD1(j\u00ECn)", src:"near"}
]}
]},

// ═══ L5: People and Places — HSK 1 Essentials ═══
{id:"zhv2_u6l5", title:"中国和北京 China and Beijing", icon:"🏙️", xp:15, board:true, steps:[
{type:"intro", title:"中国和北京 China and Beijing",
 desc:"Learn six essential HSK 1 words: China, Beijing, where you live, two polite titles, and how to ask for a doctor. These words are fundamental to basic conversation in Chinese.",
 goals:["Name China and Beijing in Chinese","Say where you live with 住","Use polite titles 先生 and 小姐"]},

{type:"teach", trg:"中国(Zhōngguó)", src:"China", pos:"noun", gender:null,
 note:"中 (middle) + 国 (country). Literally: Middle Kingdom.\nChina refers to itself as the country at the center of the world.",
 example:"A: 你(nǐ)是(shì)中国(Zhōngguó)人(rén)吗(ma)？\nB: 是(shì)，我(wǒ)是(shì)中国(Zhōngguó)人(rén)。",
 exampleSrc:"A: Are you Chinese?\nB: Yes, I am Chinese.",
 funFact:"中国 (Middle Kingdom) reflects the ancient Chinese worldview that China was the civilized center of the world. The Chinese name predates Western contact by thousands of years. The English word 'China' likely comes from 'Qin' (秦), the first unified dynasty."},

{type:"teach", trg:"北京(Běijīng)", src:"Beijing", pos:"noun", gender:null,
 note:"北 (north) + 京 (capital). Literally: Northern Capital.\nCapital of China since 1421 (Ming dynasty).",
 example:"A: 你(nǐ)住(zhù)在(zài)北京(Běijīng)吗(ma)？\nB: 没有(méiyǒu)，我(wǒ)想(xiǎng)去(qù)北京(Běijīng)！",
 exampleSrc:"A: Do you live in Beijing?\nB: No, but I want to go to Beijing!",
 funFact:"Beijing is written with 北 (north) + 京 (capital). Japan's 東京 (Tokyo) uses the same 京 character, meaning 'Eastern Capital.' Both cities are named by their direction from ancient power centers. China had both a Northern and Southern capital at different times."},

{type:"teach", trg:"住(zhù)", src:"to live / to reside", pos:"verb", gender:null,
 note:"Fourth tone. Used for where you live.\n你住哪儿？ = Where do you live?",
 example:"A: 你(nǐ)住(zhù)在(zài)哪儿(nǎr)？\nB: 我(wǒ)住(zhù)在(zài)北京(Běijīng)。",
 exampleSrc:"A: Where do you live?\nB: I live in Beijing.",
 funFact:"住 contains the person radical (亻) on the left and the character 主 (master/main) on the right. Literally: where a person establishes their main position. Living somewhere is about putting down roots and being the master of your space."},

{type:"teach", trg:"医生(yīshēng)", src:"doctor", pos:"noun", gender:null,
 note:"医 (medicine) + 生 (student/professional). Literally: medicine student/professional.\nMore formal than 大夫(dàifu) in most regions.",
 example:"A: 我(wǒ)想(xiǎng)去(qù)医院(yīyuàn)，要(yào)医生(yīshēng)。\nB: 医院(yīyuàn)在(zài)前面(qiánmiàn)。",
 exampleSrc:"A: I want to go to the hospital, I need a doctor.\nB: The hospital is ahead.",
 funFact:"看医生 literally means 'look at the doctor' but means 'see a doctor.' Chinese uses 看 for all kinds of consulting and viewing. You 看 a doctor the same way you 看 a movie. Both are about turning your attention toward something."},

{type:"teach", trg:"先生(xiānsheng)", src:"mister / sir / husband", pos:"noun", gender:null,
 note:"先 (before) + 生 (born/life). Originally: one born before = elder/teacher.\nNow: polite title for men. Also: husband (in certain contexts).",
 example:"A: 请问(qǐngwèn)，您(nín)是(shì)王(Wáng)先生(xiānsheng)吗(ma)？\nB: 是(shì)，我(wǒ)是(shì)。",
 exampleSrc:"A: Excuse me, are you Mr. Wang?\nB: Yes, I am.",
 funFact:"先生 originally meant 'teacher' or 'elder.' Confucius is called 孔子先生 (Master Kong). In modern usage, it is a formal title for men, like 'mister.' In Taiwan and among older generations, 先生 also means husband. In mainland China, 老公(lǎogōng) is more common for husband."},

{type:"teach", trg:"小姐(xiǎojiě)", src:"Miss / young lady", pos:"noun", gender:null,
 note:"小 (small/little) + 姐 (older sister). Originally: little sister.\nPolite address for young women. Usage has shifted — see funFact.",
 example:"A: 这位(zhè wèi)是(shì)李(Lǐ)小姐(xiǎojiě)。\nB: 你好(nǐhǎo)，李(Lǐ)小姐(xiǎojiě)！",
 exampleSrc:"A: This is Miss Li.\nB: Hello, Miss Li!",
 funFact:"小姐 was the standard polite term for women until the 1990s, when it acquired associations with service workers and sometimes inappropriate connotations in mainland China. Today, 女士 (nǚshì, Ms./lady) is preferred in formal contexts. 小姐 is still widely used in Taiwan and appears on HSK 1."},

{type:"mc", q:"中国(Zhōngguó) literally means:",
 opts:["Eastern Country","Great Nation","Middle Kingdom","Ancient Land"],
 ans:"Middle Kingdom",
 hint:"中 means 'middle' and 国 means 'country.' The name reflects China's historical view of itself."},

{type:"match", pairs:[
  {trg:"中国(Zhōngguó)", src:"China"},
  {trg:"北京(Běijīng)", src:"Beijing"},
  {trg:"住(zhù)", src:"to live / to reside"},
  {trg:"医生(yīshēng)", src:"doctor"},
  {trg:"先生(xiānsheng)", src:"mister / sir"}
]},

{type:"fb", s:"你(nǐ){1}在(zài)哪儿(nǎr)？",
 a:["住(zhù)"],
 opts:["住(zhù)","去(qù)","来(lái)","是(shì)"],
 hint:"Which verb asks about someone's permanent residence — where they live?",
 sSrc:"Where do you live?"},

{type:"mc", q:"How do you say 'I want to see a doctor'?",
 opts:["我想看医院。","我想看医生。","我是医生。","我住在医院。"],
 ans:"我想看医生。",
 hint:"看医生 means 'see a doctor.' Which sentence uses 看 (see) with the word for doctor?"},

{type:"fb", s:"我(wǒ)住(zhù)在(zài){1}。",
 a:["北京(Běijīng)"],
 opts:["北京(Běijīng)","中国(Zhōngguó)","医生(yīshēng)","先生(xiānsheng)"],
 hint:"Which specific city is the capital of China? The one with 北 (north) in its name.",
 sSrc:"I live in {1}."},

{type:"mc", q:"先生(xiānsheng) originally meant:",
 opts:["young man","rich person","elder / teacher","worker"],
 ans:"elder / teacher",
 hint:"先 means 'before' and 生 means 'born.' Someone born before you is an ___."},

{type:"fb", s:"这位(zhè wèi)是(shì)李(Lǐ){1}。",
 a:["小姐(xiǎojiě)"],
 opts:["小姐(xiǎojiě)","先生(xiānsheng)","医生(yīshēng)","住(zhù)"],
 hint:"A polite title for a young woman, like 'Miss.' Used with surnames.",
 sSrc:"This is Miss Li."}
]},

// === L6: More Essential Places ===
{id:"zhv2_u6l_places", title:"地方(dìfāng) Essential Places", icon:"🏢", xp:15, board:true, steps:[
{type:"intro", title:"Essential Places",
 desc:"Learn four essential HSK 1 place nouns: supermarket, bank, library, and park. Plus inside and outside. These complete the core vocabulary for navigating daily life in China.",
 goals:["Name four more essential places: supermarket, bank, library, park","Use inside and outside with place nouns","Describe locations in full sentences"]},

{type:"teach", trg:"超市(chāoshì)", src:"supermarket", pos:"noun", gender:null,
 note:"超 = exceed/super, 市 = market.\nLiterally 'super market.' The most common daily shopping destination.",
 example:"A: 你(nǐ)去(qù)哪儿(nǎr)？\nB: 我(wǒ)去(qù)超市(chāoshì)买(mǎi)东西(dōngxi)。",
 exampleSrc:"A: Where are you going?\nB: I am going to the supermarket to buy things.",
 funFact:"超市 is short for 超级市场(chāojí shìchǎng), literally 'super market.' The abbreviation 超市 became standard in the 1990s as Western-style supermarkets spread across China. Before that, most shopping was done at specialized state-run stores."},

{type:"teach", trg:"银行(yínháng)", src:"bank", pos:"noun", gender:null,
 note:"银 = silver, 行 = professional institution.\nLiterally 'silver institution.' Historically, banks dealt in silver currency.",
 example:"A: 银行(yínháng)在(zài)哪儿(nǎr)？\nB: 在(zài)超市(chāoshì)旁边(pángbiān)。",
 exampleSrc:"A: Where is the bank?\nB: It is next to the supermarket.",
 funFact:"银行 uses 行(háng), meaning 'a line of business' or 'professional establishment.' The same 行 appears in 旅行(lǚxíng, travel), 银行(yínháng, bank), 行业(hángyè, industry). In this context it is pronounced háng, not xíng."},

{type:"teach", trg:"图书馆(túshūguǎn)", src:"library", pos:"noun", gender:null,
 note:"图书 = books/maps, 馆 = building/venue.\nLiterally 'books building.' The most common place for study.",
 example:"A: 你(nǐ)在(zài)哪儿(nǎr)看(kàn)书(shū)？\nB: 我(wǒ)在(zài)图书馆(túshūguǎn)看(kàn)书(shū)。",
 exampleSrc:"A: Where do you read?\nB: I read at the library.",
 funFact:"馆 (guǎn) is a building suffix that appears in many cultural venues: 图书馆 (library), 博物馆(bówùguǎn, museum), 美术馆(měishùguǎn, art gallery), 餐馆(cānguǎn, restaurant). If you see 馆, you know it is an institution or public building."},

{type:"teach", trg:"公园(gōngyuán)", src:"park", pos:"noun", gender:null,
 note:"公 = public, 园 = garden/enclosure.\nLiterally 'public garden.' Every Chinese city has large public parks.",
 example:"A: 你(nǐ)去(qù)哪儿(nǎr)？\nB: 我(wǒ)去(qù)公园(gōngyuán)。",
 exampleSrc:"A: Where are you going?\nB: I am going to the park.",
 funFact:"Chinese parks are central to daily social life. Older residents practice taichi in the morning, families gather in the evening, and people play chess or sing together. 公园 are free to enter in most cities. They are living rooms for the community, not just green spaces."},

{type:"teach", trg:"里面(lǐmiàn)", src:"inside", pos:"noun", gender:null,
 note:"里 = inside, 面 = face/surface.\nLiterally 'inner face.' Opposite of 外面.",
 example:"A: 医生(yīshēng)在(zài)哪儿(nǎr)？\nB: 在(zài)医院(yīyuàn)里面(lǐmiàn)。",
 exampleSrc:"A: Where is the doctor?\nB: The doctor is inside the hospital.",
 funFact:"里面 follows the same pattern as 前面 (front), 后面 (back), and 旁边 (beside). All Chinese position words describe the 'face' or 'side' of a reference point. 里面 describes the interior face. 外面 describes the exterior."},

{type:"teach", trg:"外面(wàimiàn)", src:"outside", pos:"noun", gender:null,
 note:"外 = outside, 面 = face/surface.\nLiterally 'outer face.' Opposite of 里面.",
 example:"A: 他(tā)在(zài)哪儿(nǎr)？\nB: 他(tā)在(zài)图书馆(túshūguǎn)外面(wàimiàn)等(děng)你(nǐ)。",
 exampleSrc:"A: Where is he?\nB: He is waiting for you outside the library.",
 funFact:"里外 (inside-outside) is a natural opposite pair in Chinese, just like 前后 (front-back) and 左右 (left-right). Chinese thinks spatially in paired opposites. Learning one immediately gives you the other."},

{type:"teach", trg:"地方(dìfāng)", src:"place / location", pos:"noun", gender:null,
 note:"地 = ground/land, 方 = direction/side.\nLiterally 'land-direction.' Used as a general word for any place.",
 example:"A: 这(zhè)是(shì)什么(shénme)地方(dìfāng)？\nB: 这(zhè)是(shì)图书馆(túshūguǎn)前面(qiánmiàn)的(de)公园(gōngyuán)。",
 exampleSrc:"A: What place is this?\nB: This is the park in front of the library.",
 funFact:"地方 has two pronunciations with different meanings: dìfāng (place, location) and dìfang (local, as in 地方政府 local government). The neutral-tone variant signals a different meaning. Context almost always makes the reading clear."},

{type:"tip", title:"The 馆 and 市 Building Blocks",
 text:"Two characters unlock many place names:\n\n馆(guǎn) = public building/venue:\n图书馆 = library\n博物馆 = museum\n美术馆 = art gallery\n\n市(shì) = market/city:\n超市 = supermarket\n城市 = city\n市场 = market\n\nWhen you see 馆 or 市, expect a public institution or marketplace. These two characters cover most of the cultural and commercial places you will encounter.",
 deepDive:{title:"公 = Public in Chinese",
  text:"公(gōng) marks something as shared or public:\n\n公园 = public garden (park)\n公司 = public/shared company\n公共汽车 = public bus\n公寓 = apartment building (public dwelling)\n公里 = kilometer (public measure)\n公民 = citizen (public person)\n\nWhenever you see 公 + place or thing, it signals something available to everyone. This reflects a Confucian value: certain resources and spaces belong to the community, not individuals."}},

{type:"mc", q:"超市(chāoshì) literally means:",
 opts:["small market","food store","super market","night market"],
 ans:"super market",
 hint:"超 means 'exceed' or 'super' and 市 means 'market.' Put them together."},

{type:"match", pairs:[
  {trg:"超市(chāoshì)", src:"supermarket"},
  {trg:"银行(yínháng)", src:"bank"},
  {trg:"图书馆(túshūguǎn)", src:"library"},
  {trg:"公园(gōngyuán)", src:"park"}
]},

{type:"fb", s:"我(wǒ)去(qù){1}看(kàn)书(shū)。",
 a:["图书馆(túshūguǎn)"],
 opts:["图书馆(túshūguǎn)","超市(chāoshì)","银行(yínháng)","公园(gōngyuán)"],
 hint:"You go to this place to read books. It has 馆 (building) in its name.",
 sSrc:"I go to the {1} to read."},

{type:"mc", q:"医生(yīshēng)在(zài)医院(yīyuàn)里面(lǐmiàn)。 Where is the doctor?",
 opts:["outside the hospital","next to the hospital","inside the hospital","behind the hospital"],
 ans:"inside the hospital",
 hint:"里面 means the interior of something. The opposite of 外面."},

{type:"fb", s:"他(tā)在(zài)银行(yínháng){1}等(děng)我(wǒ)。",
 a:["外面(wàimiàn)"],
 opts:["外面(wàimiàn)","里面(lǐmiàn)","前面(qiánmiàn)","后面(hòumiàn)"],
 hint:"He is waiting on the exterior of the bank, not inside it.",
 sSrc:"He is waiting for me {1} the bank."},

{type:"mc", q:"公园(gōngyuán) uses 公 because parks are:",
 opts:["expensive","very big","public spaces","far away"],
 ans:"public spaces",
 hint:"公 marks something belonging to everyone in the community. Think of the English word 'communal' or 'common.'"},

{type:"fb", s:"超市(chāoshì)在(zài)银行(yínháng){1}。",
 a:["旁边(pángbiān)"],
 opts:["旁边(pángbiān)","里面(lǐmiàn)","外面(wàimiàn)","后面(hòumiàn)"],
 hint:"The supermarket is alongside the bank. Which word means 'beside' or 'next to'?",
 sSrc:"The supermarket is {1} the bank."},

{type:"match", pairs:[
  {trg:"里面(lǐmiàn)", src:"inside"},
  {trg:"外面(wàimiàn)", src:"outside"},
  {trg:"地方(dìfāng)", src:"place / location"},
  {trg:"图书馆(túshūguǎn)", src:"library"},
  {trg:"公园(gōngyuán)", src:"park"}
]},

{type:"fb", s:"这(zhè)是(shì)什么(shénme){1}？",
 a:["地方(dìfāng)"],
 opts:["地方(dìfāng)","时候(shíhou)","东西(dōngxi)","问题(wèntí)"],
 hint:"The speaker is asking 'what ___ is this?' using the general word for any location.",
 sSrc:"What {1} is this?"}
]}

]};

export default UNIT_06;
