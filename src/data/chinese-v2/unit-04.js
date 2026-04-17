// Unit 4: Food and Drink
// Level: A1.2 (HSK 1)
// Chinese (Mandarin) V2 format with hanzi+pinyin notation
// Vocab: 吃, 喝, 水, 茶, 米饭, 菜, 想, 要, 请, 一点儿, 很, 也, 都, 可以, 杯

const UNIT_04 = {
n:4, lang:"zh", srcLang:"en", track:"v2",
title:"\u6211\u60F3\u5403... I Want to Eat...", sub:"Food and Ordering",
icon:"\uD83E\uDD62", level:"A1.2", color:"#7B5EE8",
lessons:[

// ═══ L1: Eating and Drinking ═══
{id:"zhv2_u4l1", title:"Eating and Drinking", icon:"\uD83C\uDF5A", xp:15, board:true, steps:[
{type:"intro", title:"Eating and Drinking",
 desc:"Food is at the heart of Chinese culture. Learn the basic verbs for eating and drinking, plus essential food and drink vocabulary.",
 goals:["Say 'eat' and 'drink' in Chinese","Name basic foods and drinks","Build simple sentences about meals"]},

{type:"teach", trg:"\u5403(ch\u012B)", src:"to eat", pos:"verb", gender:null,
 note:"First tone (high flat). One of the first verbs every learner needs.\n\u5403\u996D = to eat a meal.",
 example:"A: \u4F60(n\u01D0)\u5403(ch\u012B)\u4E86(le)\u5417(ma)?\nB: \u6211(w\u01D2)\u5403(ch\u012B)\u4E86(le)!",
 exampleSrc:"A: Have you eaten?\nB: I have eaten!",
 funFact:"\u4F60\u5403\u4E86\u5417 (Have you eaten?) is a traditional Chinese greeting, as common as 'How are you?' in English. In a culture where food security was historically uncertain, asking about meals showed genuine care."},

{type:"teach", trg:"\u559D(h\u0113)", src:"to drink", pos:"verb", gender:null,
 note:"First tone (high flat). Used for all liquids.\n\u559D\u6C34 = drink water. \u559D\u8336 = drink tea.",
 example:"A: \u4F60(n\u01D0)\u559D(h\u0113)\u4EC0\u4E48(sh\u00E9nme)?\nB: \u6211(w\u01D2)\u559D(h\u0113)\u8336(ch\u00E1)\u3002",
 exampleSrc:"A: What are you drinking?\nB: I am drinking tea.",
 funFact:"The character \u559D has the mouth radical (\u53E3) on the left, showing it involves the mouth. Many Chinese characters related to eating, drinking, and speaking contain this radical."},

{type:"teach", trg:"\u6C34(shu\u01D0)", src:"water", pos:"noun", gender:null,
 note:"Third tone (dipping). The most basic drink.\nAlso a common radical in other characters.",
 example:"A: \u6211(w\u01D2)\u8981(y\u00E0o)\u559D(h\u0113)\u6C34(shu\u01D0)\u3002\nB: \u597D(h\u01CEo)\u7684(de)!",
 exampleSrc:"A: I want to drink water.\nB: Okay!",
 funFact:"The character \u6C34 depicts flowing water with a central stream and splashes on each side. As a radical (\u6C35), it appears in hundreds of characters: \u6CB3 (river), \u6D77 (sea), \u6E56 (lake), \u6C64 (soup)."},

{type:"teach", trg:"\u8336(ch\u00E1)", src:"tea", pos:"noun", gender:null,
 note:"Second tone (rising). Tea is central to Chinese culture.\nChina is the birthplace of tea.",
 example:"A: \u4F60(n\u01D0)\u559D(h\u0113)\u8336(ch\u00E1)\u5417(ma)?\nB: \u597D(h\u01CEo)\u7684(de), \u8C22\u8C22(xi\u00E8xie)!",
 exampleSrc:"A: Would you like tea?\nB: Sure, thanks!",
 funFact:"The English word 'tea' comes from the Chinese character \u8336. In the Fujian dialect, it is pronounced 'te,' which gave English, French, and Dutch their word. The Mandarin 'cha' gave Russian, Turkish, and Hindi their versions."},

{type:"teach", trg:"\u7C73\u996D(m\u01D0f\u00E0n)", src:"rice (cooked)", pos:"noun", gender:null,
 note:"\u7C73 = rice grain. \u996D = meal/cooked food.\nTogether: cooked rice, the staple food.",
 example:"A: \u4F60(n\u01D0)\u5403(ch\u012B)\u7C73\u996D(m\u01D0f\u00E0n)\u5417(ma)?\nB: \u6211(w\u01D2)\u5403(ch\u012B)\u7C73\u996D(m\u01D0f\u00E0n)\u3002",
 exampleSrc:"A: Do you eat rice?\nB: I eat rice.",
 funFact:"Rice is so central to Chinese life that \u996D can mean both 'cooked rice' and 'meal' in general. \u5403\u996D literally means 'eat rice' but actually means 'have a meal.' Even if you eat noodles, you are still \u5403\u996D."},

{type:"teach", trg:"\u83DC(c\u00E0i)", src:"dish / vegetable", pos:"noun", gender:null,
 note:"Fourth tone (falling). Means both 'vegetable' and 'a cooked dish.'\nContext determines which meaning.",
 example:"A: \u8FD9(zh\u00E8)\u4E2A(g\u00E8)\u83DC(c\u00E0i)\u597D(h\u01CEo)\u5403(ch\u012B)!\nB: \u8C22\u8C22(xi\u00E8xie)!",
 exampleSrc:"A: This dish is delicious!\nB: Thanks!",
 funFact:"\u83DC has the grass radical (\u8279) on top, showing its plant origin. The double meaning is practical: \u4E70\u83DC means 'buy vegetables' (at the market), while \u70B9\u83DC means 'order dishes' (at a restaurant)."},

{type:"mc", q:"What does \u4F60\u5403\u4E86\u5417 literally ask?",
 opts:["What is your name?","How are you?","Have you eaten?","Where are you going?"],
 ans:"Have you eaten?",
 hint:"This question uses the verb for eating. It functions as a common daily greeting in Chinese."},

{type:"match", pairs:[
  {trg:"\u5403(ch\u012B)", src:"to eat"},
  {trg:"\u559D(h\u0113)", src:"to drink"},
  {trg:"\u6C34(shu\u01D0)", src:"water"},
  {trg:"\u8336(ch\u00E1)", src:"tea"},
  {trg:"\u7C73\u996D(m\u01D0f\u00E0n)", src:"rice (cooked)"}
]},

{type:"fb", s:"\u6211(w\u01D2){1}\u8336(ch\u00E1)\u3002",
 a:["\u559D(h\u0113)"],
 opts:["\u559D(h\u0113)","\u5403(ch\u012B)","\u662F(sh\u00EC)","\u6709(y\u01D2u)"],
 hint:"Which verb is used for liquids? Tea is a drink, not a food.",
 sSrc:"I {1} tea."},

{type:"mc", q:"\u7C73\u996D(m\u01D0f\u00E0n) refers to:",
 opts:["cooked rice","noodles","bread","raw rice grains"],
 ans:"cooked rice",
 hint:"\u7C73 means ___ grain and \u996D means meal. Together they refer to the prepared staple food."},

{type:"fb", s:"\u4F60(n\u01D0){1}\u4EC0\u4E48(sh\u00E9nme)? \u6211(w\u01D2)\u5403(ch\u012B)\u7C73\u996D(m\u01D0f\u00E0n)\u3002",
 a:["\u5403(ch\u012B)"],
 opts:["\u5403(ch\u012B)","\u559D(h\u0113)","\u662F(sh\u00EC)","\u53EB(ji\u00E0o)"],
 hint:"The answer involves rice, which is a food. Which verb goes with solid foods?",
 sSrc:"What do you {1}? I eat rice."},

{type:"mc", q:"\u83DC(c\u00E0i) can mean both:",
 opts:["water and tea","rice and noodles","vegetable and dish","meat and fish"],
 ans:"vegetable and dish",
 hint:"This character covers both the raw ingredient from the garden and the prepared item on the table."},

{type:"match", pairs:[
  {trg:"\u83DC(c\u00E0i)", src:"dish / vegetable"},
  {trg:"\u8336(ch\u00E1)", src:"tea"},
  {trg:"\u7C73\u996D(m\u01D0f\u00E0n)", src:"rice (cooked)"},
  {trg:"\u6C34(shu\u01D0)", src:"water"}
]}
]},

// ═══ L2: I Want... ═══
{id:"zhv2_u4l2", title:"I Want...", icon:"\uD83D\uDE0B", xp:15, board:true, steps:[
{type:"intro", title:"I Want...",
 desc:"Learn to express what you want with \u60F3 and \u8981, and how to ask politely with \u8BF7. These three words will get you through any restaurant in China.",
 goals:["Express desires with \u60F3 and \u8981","Ask politely using \u8BF7","Understand the difference between \u60F3 and \u8981"]},

{type:"teach", trg:"\u60F3(xi\u01CEng)", src:"to want / to think", pos:"verb", gender:null,
 note:"Third tone. Softer, more polite way to express a wish.\n\u60F3 + verb = want to do something.",
 example:"A: \u4F60(n\u01D0)\u60F3(xi\u01CEng)\u5403(ch\u012B)\u4EC0\u4E48(sh\u00E9nme)?\nB: \u6211(w\u01D2)\u60F3(xi\u01CEng)\u5403(ch\u012B)\u7C73\u996D(m\u01D0f\u00E0n)\u3002",
 exampleSrc:"A: What do you want to eat?\nB: I want to eat rice.",
 funFact:"\u60F3 contains the heart/mind radical (\u5FC3) at the bottom, showing that wanting comes from the heart. It also means 'to think' or 'to miss someone,' connecting desire, thought, and longing in one character."},

{type:"teach", trg:"\u8981(y\u00E0o)", src:"to want / to need / will", pos:"verb", gender:null,
 note:"Fourth tone. More direct and assertive than \u60F3.\nAlso used for 'will' (future).",
 example:"A: \u4F60(n\u01D0)\u8981(y\u00E0o)\u559D(h\u0113)\u6C34(shu\u01D0)\u5417(ma)?\nB: \u6211(w\u01D2)\u8981(y\u00E0o)\u559D(h\u0113)\u8336(ch\u00E1)\u3002",
 exampleSrc:"A: Do you want to drink water?\nB: I want to drink tea.",
 funFact:"\u8981 is one of the most versatile words in Chinese. It can mean 'want,' 'need,' 'will,' 'should,' or 'important' depending on context. At A1, focus on the 'want/need' meaning when ordering food."},

{type:"teach", trg:"\u8BF7(q\u01D0ng)", src:"please / to invite", pos:"verb", gender:null,
 note:"Third tone. Makes any request polite.\n\u8BF7\u8FDB = please come in. \u8BF7\u5750 = please sit.",
 example:"A: \u8BF7(q\u01D0ng)\u559D(h\u0113)\u8336(ch\u00E1)\u3002\nB: \u8C22\u8C22(xi\u00E8xie)!",
 exampleSrc:"A: Please have some tea.\nB: Thank you!",
 funFact:"\u8BF7 is the magic word of Chinese hospitality. When you visit a Chinese home, you will hear \u8BF7\u8FDB (please enter), \u8BF7\u5750 (please sit), and \u8BF7\u559D\u8336 (please drink tea). It transforms any command into a warm invitation."},

{type:"tip", title:"\u60F3 vs \u8981: Two Ways to Say 'Want'",
 text:"\u60F3(xi\u01CEng) and \u8981(y\u00E0o) both mean 'want,' but they feel different:\n\n\u60F3: softer, a wish or desire\n\u6211\u60F3\u5403\u7C73\u996D = I would like to eat rice\n\u6211\u60F3\u559D\u8336 = I feel like having tea\n\n\u8981: stronger, a clear decision or need\n\u6211\u8981\u5403\u7C73\u996D = I want to eat rice (decided)\n\u6211\u8981\u559D\u6C34 = I need water\n\nIn restaurants, both are fine. \u60F3 sounds a touch more polite.",
 deepDive:{title:"More about \u8981",
  text:"\u8981 has multiple uses beyond 'want':\n\n1. Want/need: \u6211\u8981\u8336 = I want tea\n2. Will (future): \u6211\u8981\u8D70\u4E86 = I am about to leave\n3. Should: \u4F60\u8981\u5403\u996D = You should eat\n4. Important: \u91CD\u8981 = important (zh\u00F2ngy\u00E0o)\n\nAt A1, focus on meaning 1 (want/need). The other meanings will come naturally at A2 and B1."}},

{type:"mc", q:"Which word is a softer, more polite way to express a wish?",
 opts:["\u559D(h\u0113)","\u60F3(xi\u01CEng)","\u8BF7(q\u01D0ng)","\u8981(y\u00E0o)"],
 ans:"\u60F3(xi\u01CEng)",
 hint:"One of the two 'want' words contains the heart radical and feels more like 'would like to.'"},

{type:"fb", s:"\u6211(w\u01D2){1}\u5403(ch\u012B)\u7C73\u996D(m\u01D0f\u00E0n)\u3002",
 a:["\u60F3(xi\u01CEng)"],
 opts:["\u60F3(xi\u01CEng)","\u8981(y\u00E0o)","\u662F(sh\u00EC)","\u6709(y\u01D2u)"],
 hint:"Which 'want' word is the softer, more wish-like option? It also means 'to think.'",
 sSrc:"I want to eat rice."},

{type:"teach", trg:"\u5F88(h\u011Bn)", src:"very", pos:"adv", gender:null,
 note:"Third tone. Goes before adjectives.\n\u5F88\u597D = very good. \u5F88\u5927 = very big.",
 example:"A: \u8FD9(zh\u00E8)\u4E2A(g\u00E8)\u83DC(c\u00E0i)\u5F88(h\u011Bn)\u597D(h\u01CEo)\u5403(ch\u012B)!\nB: \u8C22\u8C22(xi\u00E8xie)!",
 exampleSrc:"A: This dish is very delicious!\nB: Thank you!",
 funFact:"\u5F88 is often used as a filler before adjectives even when you do not mean 'very.' Chinese typically avoids using adjectives alone as predicates. Instead of just \u8FD9\u4E2A\u597D (This is good), Chinese speakers say \u8FD9\u4E2A\u5F88\u597D (This is very good) as the default."},

{type:"teach", trg:"\u4E5F(y\u011B)", src:"also", pos:"adv", gender:null,
 note:"Third tone. Goes BEFORE the verb.\n\u6211\u4E5F\u8981 = I also want.",
 example:"A: \u6211(w\u01D2)\u8981(y\u00E0o)\u559D(h\u0113)\u8336(ch\u00E1)\u3002\nB: \u6211(w\u01D2)\u4E5F(y\u011B)\u8981(y\u00E0o)\u559D(h\u0113)\u8336(ch\u00E1)!",
 exampleSrc:"A: I want to drink tea.\nB: I also want to drink tea!",
 funFact:"\u4E5F always comes BEFORE the verb: \u6211\u4E5F\u5403 (I also eat), never \u6211\u5403\u4E5F. This is the opposite of English, where 'also' can go in various positions. In Chinese, the word order is fixed."},

{type:"teach", trg:"\u90FD(d\u014Du)", src:"all / both", pos:"adv", gender:null,
 note:"First tone. Goes BEFORE the verb. Refers to all items previously mentioned.\n\u6211\u4EEC\u90FD = we all.",
 example:"A: \u7238\u7238(b\u00E0ba)\u548C(h\u00E9)\u5988\u5988(m\u0101ma)\u90FD(d\u014Du)\u5403(ch\u012B)\u7C73\u996D(m\u01D0f\u00E0n)\u3002\nB: \u6211(w\u01D2)\u4E5F(y\u011B)\u5403(ch\u012B)\u7C73\u996D(m\u01D0f\u00E0n)!",
 exampleSrc:"A: Dad and Mom both eat rice.\nB: I also eat rice!",
 funFact:"\u90FD refers back to a plural subject. \u4ED6\u4EEC\u90FD\u559D\u8336 means 'They ALL drink tea.' It summarizes the group. Unlike English 'all,' \u90FD always appears after the subject and before the verb."},

{type:"mc", q:"\u8FD9(zh\u00E8)\u4E2A(g\u00E8)\u83DC(c\u00E0i)\u5F88(h\u011Bn)\u597D(h\u01CEo)\u5403(ch\u012B)! What does this mean?",
 opts:["This dish is very big","This dish is terrible","This dish is very hot","This dish is very delicious"],
 ans:"This dish is very delicious",
 hint:"\u5F88 means 'very' and \u597D\u5403 literally means 'good to eat.' What is the sentence praising?"},

{type:"fb", s:"\u6211(w\u01D2){1}\u8981(y\u00E0o)\u559D(h\u0113)\u8336(ch\u00E1)!",
 a:["\u4E5F(y\u011B)"],
 opts:["\u4E5F(y\u011B)","\u90FD(d\u014Du)","\u5F88(h\u011Bn)","\u7684(de)"],
 hint:"Someone else wants tea, and so do you. Which word means 'also' and goes before the verb?",
 sSrc:"I {1} want to drink tea!"},

{type:"match", pairs:[
  {trg:"\u60F3(xi\u01CEng)", src:"to want / to think"},
  {trg:"\u8981(y\u00E0o)", src:"to want / to need"},
  {trg:"\u8BF7(q\u01D0ng)", src:"please / to invite"},
  {trg:"\u5F88(h\u011Bn)", src:"very"},
  {trg:"\u4E5F(y\u011B)", src:"also"}
]},

{type:"fb", s:"\u7238\u7238(b\u00E0ba)\u548C(h\u00E9)\u5988\u5988(m\u0101ma){1}\u5403(ch\u012B)\u7C73\u996D(m\u01D0f\u00E0n)\u3002",
 a:["\u90FD(d\u014Du)"],
 opts:["\u90FD(d\u014Du)","\u4E5F(y\u011B)","\u5F88(h\u011Bn)","\u60F3(xi\u01CEng)"],
 hint:"Dad AND Mom eat rice. Which word means 'both/all' and refers to the entire group?",
 sSrc:"Dad and Mom {1} eat rice."},

{type:"mc", q:"Where does \u4E5F(y\u011B) go in a Chinese sentence?",
 opts:["After the verb","Before the subject","At the end","Before the verb"],
 ans:"Before the verb",
 hint:"Chinese ad___s like \u4E5F and \u90FD have a fixed position. They always come between subject and ___."},

{type:"fb", s:"{1}\u559D(h\u0113)\u8336(ch\u00E1)\u3002",
 a:["\u8BF7(q\u01D0ng)"],
 opts:["\u8BF7(q\u01D0ng)","\u60F3(xi\u01CEng)","\u5F88(h\u011Bn)","\u90FD(d\u014Du)"],
 hint:"You are offering tea to a guest politely. Which word makes it a courteous invitation?",
 sSrc:"Please have some tea."}
]},

// ═══ L3: At the Restaurant ═══
{id:"zhv2_u4l3", title:"At the Restaurant", icon:"\uD83C\uDF7D\uFE0F", xp:15, board:true, steps:[
{type:"intro", title:"At the Restaurant",
 desc:"Learn to order food and drinks at a Chinese restaurant. Master measure words for drinks, the useful \u53EF\u4EE5 (can/may), and the phrase \u4E00\u70B9\u513F (a little).",
 goals:["Order food and drinks politely","Use measure words for cups and drinks","Say 'a little' with \u4E00\u70B9\u513F"]},

{type:"teach", trg:"\u53EF\u4EE5(k\u011By\u01D0)", src:"can / may", pos:"verb", gender:null,
 note:"Expresses permission or ability.\n\u53EF\u4EE5\u5417? = May I? / Is it okay?",
 example:"A: \u6211(w\u01D2)\u53EF\u4EE5(k\u011By\u01D0)\u559D(h\u0113)\u8336(ch\u00E1)\u5417(ma)?\nB: \u53EF\u4EE5(k\u011By\u01D0)!",
 exampleSrc:"A: May I drink tea?\nB: Yes, you may!",
 funFact:"\u53EF\u4EE5 is one of the most useful phrases in China. \u53EF\u4EE5\u5417 (Is it okay?) works for asking permission in almost any situation: Can I sit here? Can I take a photo? Can I try this food?"},

{type:"teach", trg:"\u676F(b\u0113i)", src:"cup (measure word)", pos:"part", gender:null,
 note:"Measure word for cups and glasses of liquid.\n\u4E00\u676F\u8336 = one cup of tea. \u4E24\u676F\u6C34 = two cups of water.",
 example:"A: \u4F60(n\u01D0)\u8981(y\u00E0o)\u51E0(j\u01D0)\u676F(b\u0113i)\u8336(ch\u00E1)?\nB: \u4E24(li\u01CEng)\u676F(b\u0113i), \u8C22\u8C22(xi\u00E8xie)\u3002",
 exampleSrc:"A: How many cups of tea do you want?\nB: Two cups, thanks.",
 funFact:"\u676F has the wood radical (\u6728) on the left, because cups were traditionally made of wood or bamboo. Today \u676F\u5B50 (b\u0113izi, cup) refers to any cup or glass regardless of material."},

{type:"teach", trg:"\u4E00\u70B9\u513F(y\u00ECdi\u01CEnr)", src:"a little", pos:"adv", gender:null,
 note:"Very useful for being polite or modest.\n\u6211\u60F3\u5403\u4E00\u70B9\u513F = I want to eat a little.",
 example:"A: \u4F60(n\u01D0)\u8981(y\u00E0o)\u559D(h\u0113)\u6C34(shu\u01D0)\u5417(ma)?\nB: \u6211(w\u01D2)\u559D(h\u0113)\u4E00\u70B9\u513F(y\u00ECdi\u01CEnr)\u3002",
 exampleSrc:"A: Do you want to drink water?\nB: I will have a little.",
 funFact:"The \u513F at the end is the famous Beijing 'er' sound (erhua). It makes the word sound softer and more casual. In southern China, people often say \u4E00\u70B9 without the \u513F. Both are correct."},

{type:"tip", title:"Ordering at a Chinese Restaurant",
 text:"Key phrases for ordering food:\n\n\u8BF7\u7ED9\u6211... = Please give me...\n\u6211\u8981... = I want...\n\u6211\u60F3\u5403... = I would like to eat...\n\u4E00\u676F\u8336 = one cup of tea\n\u4E24\u676F\u6C34 = two cups of water\n\n\u53EF\u4EE5\u5417? = Is that okay?\n\u591F\u4E86 = That is enough\n\n\u8C22\u8C22 = Thank you (always appreciated!)",
 deepDive:{title:"Chinese restaurant culture",
  text:"In China, meals are shared. Dishes are ordered for the table, not per person. Everyone eats from shared plates using chopsticks.\n\nThe host usually orders for everyone and always orders too much food. Having leftover food shows generosity. An empty table suggests the host was stingy.\n\nTipping is not expected and can even be considered rude in mainland China. The price on the menu is what you pay."}},

{type:"mc", q:"How do you ask 'May I?' in Chinese?",
 opts:["\u4F60\u597D(n\u01D0h\u01CEo)?","\u5BF9\u4E0D\u8D77(du\u00ECbuq\u01D0)?","\u8C22\u8C22(xi\u00E8xie)?","\u53EF\u4EE5(k\u011By\u01D0)\u5417(ma)?"],
 ans:"\u53EF\u4EE5(k\u011By\u01D0)\u5417(ma)?",
 hint:"This two-character word means 'can/may.' Add \u5417 to make it a yes/no question."},

{type:"fb", s:"\u6211(w\u01D2)\u8981(y\u00E0o)\u4E00(y\u00EC){1}\u8336(ch\u00E1)\u3002",
 a:["\u676F(b\u0113i)"],
 opts:["\u676F(b\u0113i)","\u4E2A(g\u00E8)","\u5C81(su\u00EC)","\u7684(de)"],
 hint:"Which measure word is used specifically for cups of liquid?",
 sSrc:"I want one {1} of tea."},

{type:"mc", q:"\u6211\u559D\u4E00\u70B9\u513F\u3002 What does this mean?",
 opts:["I do not drink","I drink a lot","I want to drink","I drink a little"],
 ans:"I drink a little",
 hint:"\u4E00\u70B9\u513F means a small amount. The speaker is being modest about the quantity."},

{type:"fb", s:"\u6211(w\u01D2){1}\u559D(h\u0113)\u8336(ch\u00E1)\u5417(ma)?",
 a:["\u53EF\u4EE5(k\u011By\u01D0)"],
 opts:["\u53EF\u4EE5(k\u011By\u01D0)","\u60F3(xi\u01CEng)","\u5F88(h\u011Bn)","\u90FD(d\u014Du)"],
 hint:"You are asking for permission. Which word means 'can/may'?",
 sSrc:"{1} I drink tea?"},

{type:"match", pairs:[
  {trg:"\u53EF\u4EE5(k\u011By\u01D0)", src:"can / may"},
  {trg:"\u676F(b\u0113i)", src:"cup (measure word)"},
  {trg:"\u4E00\u70B9\u513F(y\u00ECdi\u01CEnr)", src:"a little"},
  {trg:"\u90FD(d\u014Du)", src:"all / both"},
  {trg:"\u8BF7(q\u01D0ng)", src:"please"}
]},

{type:"mc", q:"\u4F60(n\u01D0)\u8981(y\u00E0o)\u51E0(j\u01D0)\u676F(b\u0113i)\u6C34(shu\u01D0)? What is being asked?",
 opts:["How many cups of water do you want?","Is the water good?","Where is the water?","Do you want water?"],
 ans:"How many cups of water do you want?",
 hint:"\u51E0 asks 'how ___' and \u676F is the measure word for ___. The question asks about quantity."},

{type:"fb", s:"\u6211(w\u01D2)\u60F3(xi\u01CEng)\u5403(ch\u012B){1}\u83DC(c\u00E0i)\u3002",
 a:["\u4E00\u70B9\u513F(y\u00ECdi\u01CEnr)"],
 opts:["\u4E00\u70B9\u513F(y\u00ECdi\u01CEnr)","\u5F88(h\u011Bn)","\u90FD(d\u014Du)","\u4E5F(y\u011B)"],
 hint:"The speaker wants to eat just a small amount of dishes. Which phrase means 'a little'?",
 sSrc:"I want to eat {1} dishes."},

{type:"mc", q:"Which measure word is correct? \u4E24_\u8336",
 opts:["\u5C81(su\u00EC)","\u70B9(di\u01CEn)","\u676F(b\u0113i)","\u4E2A(g\u00E8)"],
 ans:"\u676F(b\u0113i)",
 hint:"Tea is a liquid served in cups. Which measure word counts cups of liquid?"},

{type:"fb", s:"\u7238\u7238(b\u00E0ba)\u548C(h\u00E9)\u5988\u5988(m\u0101ma){1}\u8981(y\u00E0o)\u559D(h\u0113)\u8336(ch\u00E1)\u3002",
 a:["\u90FD(d\u014Du)"],
 opts:["\u90FD(d\u014Du)","\u4E5F(y\u011B)","\u5F88(h\u011Bn)","\u7684(de)"],
 hint:"Both Dad and Mom want tea. Which word means 'both/all' for a group?",
 sSrc:"Dad and Mom {1} want to drink tea."}
]},

// ═══ L4: Food Review ═══
{id:"zhv2_u4l4", title:"Food Review", icon:"\u2B50", xp:15, board:true, steps:[
{type:"intro", title:"Food Review",
 desc:"Review all food vocabulary, ordering phrases, and adverbs from this unit. Put it all together in realistic restaurant and mealtime scenarios.",
 goals:["Recall all food and drink vocabulary","Use \u60F3, \u8981, \u53EF\u4EE5, \u8BF7 correctly","Build complete ordering sentences"]},

{type:"match", pairs:[
  {trg:"\u5403(ch\u012B)", src:"to eat"},
  {trg:"\u559D(h\u0113)", src:"to drink"},
  {trg:"\u6C34(shu\u01D0)", src:"water"},
  {trg:"\u8336(ch\u00E1)", src:"tea"},
  {trg:"\u7C73\u996D(m\u01D0f\u00E0n)", src:"rice (cooked)"}
]},

{type:"match", pairs:[
  {trg:"\u60F3(xi\u01CEng)", src:"to want (soft)"},
  {trg:"\u8981(y\u00E0o)", src:"to want (direct)"},
  {trg:"\u8BF7(q\u01D0ng)", src:"please"},
  {trg:"\u53EF\u4EE5(k\u011By\u01D0)", src:"can / may"},
  {trg:"\u676F(b\u0113i)", src:"cup (MW)"}
]},

{type:"mc", q:"\u6211(w\u01D2)\u60F3(xi\u01CEng)\u559D(h\u0113)\u4E00(y\u00EC)\u676F(b\u0113i)\u8336(ch\u00E1)\u3002 What does the speaker want?",
 opts:["to eat rice","to drink one cup of tea","to drink two cups of water","to eat a dish"],
 ans:"to drink one cup of tea",
 hint:"Identify the verb (\u559D), the quantity (\u4E00), the measure word (\u676F), and the item (\u8336) to decode."},

{type:"fb", s:"\u4F60(n\u01D0)\u60F3(xi\u01CEng)\u5403(ch\u012B)\u4EC0\u4E48(sh\u00E9nme)? \u6211(w\u01D2)\u60F3(xi\u01CEng)\u5403(ch\u012B){1}\u3002",
 a:["\u7C73\u996D(m\u01D0f\u00E0n)"],
 opts:["\u7C73\u996D(m\u01D0f\u00E0n)","\u8336(ch\u00E1)","\u6C34(shu\u01D0)","\u676F(b\u0113i)"],
 hint:"The verb is \u5403 (eat). Which food item is the staple grain dish?",
 sSrc:"What do you want to eat? I want to eat {1}."},

{type:"mc", q:"\u8BF7(q\u01D0ng)\u559D(h\u0113)\u8336(ch\u00E1)\u3002 This sentence is:",
 opts:["a command","a negative statement","a polite offer","a question"],
 ans:"a polite offer",
 hint:"\u8BF7 at the beginning turns the sentence into a courteous invitation, not a demand."},

{type:"fb", s:"\u8FD9(zh\u00E8)\u4E2A(g\u00E8)\u83DC(c\u00E0i){1}\u597D(h\u01CEo)\u5403(ch\u012B)!",
 a:["\u5F88(h\u011Bn)"],
 opts:["\u5F88(h\u011Bn)","\u4E5F(y\u011B)","\u90FD(d\u014Du)","\u6CA1(m\u00E9i)"],
 hint:"This dish is ___ delicious. Which adverb intensifies the adjective?",
 sSrc:"This dish is {1} delicious!"},

{type:"mc", q:"\u6211(w\u01D2)\u4E5F(y\u011B)\u60F3(xi\u01CEng)\u5403(ch\u012B)\u83DC(c\u00E0i)\u3002 What does \u4E5F mean here?",
 opts:["very","all","also","not"],
 ans:"also",
 hint:"Someone else wants to eat dishes, and the speaker does too. This word adds the speaker to the group."},

{type:"fb", s:"\u6211(w\u01D2){1}\u559D(h\u0113)\u8336(ch\u00E1)\u5417(ma)?",
 a:["\u53EF\u4EE5(k\u011By\u01D0)"],
 opts:["\u53EF\u4EE5(k\u011By\u01D0)","\u60F3(xi\u01CEng)","\u8981(y\u00E0o)","\u4E5F(y\u011B)"],
 hint:"You are asking for permission to drink tea. Which word means 'can/may'?",
 sSrc:"{1} I drink tea?"},

{type:"mc", q:"\u4ED6(t\u0101)\u8981(y\u00E0o)\u4E24(li\u01CEng)\u676F(b\u0113i)\u6C34(shu\u01D0)\u3002 How many cups of water does he want?",
 opts:["five","two","one","three"],
 ans:"two",
 hint:"Look at the number before the measure word \u676F. \u4E24 is the form of 'two' used before measure words."},

{type:"fb", s:"\u6211(w\u01D2)\u60F3(xi\u01CEng)\u559D(h\u0113){1}\u6C34(shu\u01D0)\u3002",
 a:["\u4E00\u70B9\u513F(y\u00ECdi\u01CEnr)"],
 opts:["\u4E00\u70B9\u513F(y\u00ECdi\u01CEnr)","\u5F88(h\u011Bn)","\u90FD(d\u014Du)","\u4E5F(y\u011B)"],
 hint:"The speaker wants just a small amount of water. Which phrase means 'a little'?",
 sSrc:"I want to drink {1} water."},

{type:"match", pairs:[
  {trg:"\u5F88(h\u011Bn)", src:"very"},
  {trg:"\u4E5F(y\u011B)", src:"also"},
  {trg:"\u90FD(d\u014Du)", src:"all / both"},
  {trg:"\u4E00\u70B9\u513F(y\u00ECdi\u01CEnr)", src:"a little"},
  {trg:"\u83DC(c\u00E0i)", src:"dish / vegetable"}
]},

{type:"mc", q:"Which sentence correctly uses \u90FD?",
 opts:["\u90FD\u6211\u4EEC\u5403\u7C73\u996D","\u6211\u4EEC\u5403\u90FD\u7C73\u996D","\u6211\u4EEC\u90FD\u5403\u7C73\u996D","\u6211\u4EEC\u7C73\u996D\u90FD\u5403"],
 ans:"\u6211\u4EEC\u90FD\u5403\u7C73\u996D",
 hint:"\u90FD goes after the subject and before the verb. The subject is 'we all.'"},

{type:"fb", s:"\u7238\u7238(b\u00E0ba)\u559D(h\u0113)\u8336(ch\u00E1), \u6211(w\u01D2){1}\u559D(h\u0113)\u8336(ch\u00E1)\u3002",
 a:["\u4E5F(y\u011B)"],
 opts:["\u4E5F(y\u011B)","\u90FD(d\u014Du)","\u5F88(h\u011Bn)","\u8BF7(q\u01D0ng)"],
 hint:"Dad drinks tea, and the speaker does the same. Which word means 'also'?",
 sSrc:"Dad drinks tea, I {1} drink tea."},

{type:"mc", q:"\u8BF7(q\u01D0ng)\u5403(ch\u012B)\u7C73\u996D(m\u01D0f\u00E0n)\u3002 A host says this to you. They are:",
 opts:["saying goodbye","apologizing","asking your name","inviting you to eat"],
 ans:"inviting you to eat",
 hint:"\u8BF7 makes any statement into a polite invitation. Combined with '___ rice,' it is a warm welcome to a meal."}
]}

]};

export default UNIT_04;
