// Unit 5: Daily Routines and Time
// Level: A1.2 (HSK 1)
// Chinese (Mandarin) V2 format with hanzi+pinyin notation

const UNIT_05 = {
n:5, lang:"zh", srcLang:"en", track:"v2",
title:"\u6BCF\u5929 Every Day", sub:"Daily Life",
icon:"\uD83C\uDF05", level:"A1.2", color:"#7B5EE8",
lessons:[

// === L1: Time Words ===
{id:"zhv2_u5l1", title:"\u4ECA\u5929\u660E\u5929 Today and Tomorrow", icon:"\uD83D\uDCC5", xp:15, board:true, steps:[
{type:"intro", title:"\u4ECA\u5929\u660E\u5929 Today and Tomorrow",
 desc:"Learn to talk about today, yesterday, and tomorrow. Time words in Chinese always come before the verb, making word order predictable and logical.",
 goals:["Say today, yesterday, and tomorrow","Talk about morning and afternoon","Understand Chinese time word placement"]},

{type:"tip", title:"Time Words Come First",
 text:"In Chinese, time words go BEFORE the verb:\n\n\u6211(w\u01D2) \u4ECA\u5929(j\u012Bnti\u0101n) \u53BB(q\u00F9)\u3002 I go today.\n\u4ED6(t\u0101) \u6628\u5929(zu\u00F3ti\u0101n) \u6765(l\u00E1i)\u4E86(le)\u3002 He came yesterday.\n\nThe pattern is: Subject + Time + Verb.\nThis is different from English, where time words are flexible.\n\nChinese word order is very consistent. Once you learn the pattern, you can build hundreds of sentences.",
 deepDive:{title:"Why Chinese Word Order Is Your Friend",
  text:"Chinese has almost no verb conjugation, no tenses, and no case endings. Instead, it relies on word order and context words to convey meaning.\n\nTime is handled by time words (today, yesterday, tomorrow) rather than verb forms (go, went, will go). This is why \u53BB always stays \u53BB regardless of when the action happens. The time word does all the heavy lifting."}},

{type:"teach", trg:"\u4ECA\u5929(j\u012Bnti\u0101n)", src:"today", pos:"noun", gender:null,
 note:"\u4ECA = now/present, \u5929 = day. Tone 1 + Tone 1.\nAlways placed before the verb.",
 example:"A: \u4F60(n\u01D0)\u4ECA\u5929(j\u012Bnti\u0101n)\u597D(h\u01CEo)\u5417(ma)\uFF1F\nB: \u6211(w\u01D2)\u4ECA\u5929(j\u012Bnti\u0101n)\u5F88(h\u011Bn)\u597D(h\u01CEo)\uFF01",
 exampleSrc:"A: How are you today?\nB: I am very good today!",
 funFact:"\u4ECA originally depicted a mouth issuing a command 'right now.' Combined with \u5929 (day), it becomes 'this day.' Chinese time words are all built from simple character combinations like this."},

{type:"teach", trg:"\u6628\u5929(zu\u00F3ti\u0101n)", src:"yesterday", pos:"noun", gender:null,
 note:"\u6628 = past/yesterday, \u5929 = day. Tone 2 + Tone 1.\nSame position as \u4ECA\u5929: before the verb.",
 example:"A: \u4F60(n\u01D0)\u6628\u5929(zu\u00F3ti\u0101n)\u5403(ch\u012B)\u4E86(le)\u4EC0\u4E48(sh\u00E9nme)\uFF1F\nB: \u6211(w\u01D2)\u6628\u5929(zu\u00F3ti\u0101n)\u5403(ch\u012B)\u4E86(le)\u7C73\u996D(m\u01D0f\u00E0n)\u3002",
 exampleSrc:"A: What did you eat yesterday?\nB: I ate rice yesterday.",
 funFact:"The \u65E5 radical on the left of \u6628 means 'sun' or 'day.' Many time-related characters share this radical: \u660E (bright/tomorrow), \u65F6 (time), \u665A (evening). The radical system helps you guess meanings."},

{type:"teach", trg:"\u660E\u5929(m\u00EDngti\u0101n)", src:"tomorrow", pos:"noun", gender:null,
 note:"\u660E = bright/next, \u5929 = day. Tone 2 + Tone 1.\n\u660E combines \u65E5 (sun) and \u6708 (moon).",
 example:"A: \u4F60(n\u01D0)\u660E\u5929(m\u00EDngti\u0101n)\u6765(l\u00E1i)\u5417(ma)\uFF1F\nB: \u597D(h\u01CEo)\uFF0C\u6211(w\u01D2)\u660E\u5929(m\u00EDngti\u0101n)\u6765(l\u00E1i)\uFF01",
 exampleSrc:"A: Are you coming tomorrow?\nB: Okay, I will come tomorrow!",
 funFact:"\u660E is one of the most beautiful characters: \u65E5 (sun) + \u6708 (moon) = bright. The next day is the 'bright day' ahead. This poetic logic makes \u660E\u5929 one of the easiest words to remember."},

{type:"teach", trg:"\u4E0A\u5348(sh\u00E0ngw\u01D4)", src:"morning (AM)", pos:"noun", gender:null,
 note:"\u4E0A = upper/above, \u5348 = noon. Literally 'above noon.'\nRefers to the time before noon.",
 example:"A: \u4F60(n\u01D0)\u4E0A\u5348(sh\u00E0ngw\u01D4)\u6709(y\u01D2u)\u65F6\u95F4(sh\u00EDji\u0101n)\u5417(ma)\uFF1F\nB: \u4E0A\u5348(sh\u00E0ngw\u01D4)\u6CA1(m\u00E9i)\u6709(y\u01D2u)\uFF0C\u4E0B\u5348(xi\u00E0w\u01D4)\u53EF\u4EE5(k\u011By\u01D0)\u3002",
 exampleSrc:"A: Do you have time in the morning?\nB: Not in the morning, the afternoon works.",
 funFact:"Chinese divides the day logically around noon (\u5348). \u4E0A\u5348 = above noon (morning). \u4E0B\u5348 = below noon (afternoon). \u4E2D\u5348 = middle of noon (noon itself). The system is perfectly symmetrical."},

{type:"teach", trg:"\u4E0B\u5348(xi\u00E0w\u01D4)", src:"afternoon (PM)", pos:"noun", gender:null,
 note:"\u4E0B = under/below, \u5348 = noon. Literally 'below noon.'\nRefers to the time after noon.",
 example:"A: \u4E0B\u5348(xi\u00E0w\u01D4)\u4E09(s\u0101n)\u70B9(di\u01CEn)\u597D(h\u01CEo)\u5417(ma)\uFF1F\nB: \u597D(h\u01CEo)\u7684(de)\uFF0C\u4E0B\u5348(xi\u00E0w\u01D4)\u4E09(s\u0101n)\u70B9(di\u01CEn)\u89C1(ji\u00E0n)\uFF01",
 exampleSrc:"A: Is 3 PM okay?\nB: Sure, see you at 3 PM!",
 funFact:"\u5348 originally meant 'the moment the sun is highest.' The Horse is the 7th zodiac animal and its hour is 11 AM to 1 PM, the 'noon horse hour.' This is why \u5348 means noon."},

{type:"mc", q:"Where do time words go in a Chinese sentence?",
 opts:["At the end","After the noun","Before the verb","Anywhere is fine"],
 ans:"Before the verb",
 hint:"Chinese follows a strict pattern: Subject + Time + ___. Time always precedes the action."},

{type:"match", pairs:[
  {trg:"\u4ECA\u5929(j\u012Bnti\u0101n)", src:"today"},
  {trg:"\u6628\u5929(zu\u00F3ti\u0101n)", src:"yesterday"},
  {trg:"\u660E\u5929(m\u00EDngti\u0101n)", src:"tomorrow"},
  {trg:"\u4E0A\u5348(sh\u00E0ngw\u01D4)", src:"morning (AM)"},
  {trg:"\u4E0B\u5348(xi\u00E0w\u01D4)", src:"afternoon (PM)"}
]},

{type:"fb", s:"\u6211(w\u01D2){1}\u5F88(h\u011Bn)\u597D(h\u01CEo)\uFF01",
 a:["\u4ECA\u5929(j\u012Bnti\u0101n)"],
 opts:["\u4ECA\u5929(j\u012Bnti\u0101n)","\u6628\u5929(zu\u00F3ti\u0101n)","\u660E\u5929(m\u00EDngti\u0101n)","\u4E0A\u5348(sh\u00E0ngw\u01D4)"],
 hint:"The speaker is describing how they feel right now, on this current day.",
 sSrc:"I am very good {1}!"},

{type:"mc", q:"\u660E(m\u00EDng) is made of \u65E5(r\u00EC) and \u6708(yu\u00E8). What does \u660E literally mean?",
 opts:["bright","dark","big","old"],
 ans:"bright",
 hint:"Sun plus moon together create a word describing something full of light."},

{type:"fb", s:"\u4ED6(t\u0101){1}\u5403(ch\u012B)\u4E86(le)\u7C73\u996D(m\u01D0f\u00E0n)\u3002",
 a:["\u6628\u5929(zu\u00F3ti\u0101n)"],
 opts:["\u6628\u5929(zu\u00F3ti\u0101n)","\u660E\u5929(m\u00EDngti\u0101n)","\u4ECA\u5929(j\u012Bnti\u0101n)","\u4E0B\u5348(xi\u00E0w\u01D4)"],
 hint:"The action already happened in the past. Which time word means 'the day before today'?",
 sSrc:"He ate rice {1}."},

{type:"mc", q:"\u4E0A\u5348(sh\u00E0ngw\u01D4) literally means:",
 opts:["below noon","middle of noon","before the sun","above noon"],
 ans:"above noon",
 hint:"\u4E0A means 'above' or 'upper,' and \u5348 means 'noon.' Put them together."},

{type:"fb", s:"{1}\u4E09(s\u0101n)\u70B9(di\u01CEn)\u597D(h\u01CEo)\u5417(ma)\uFF1F",
 a:["\u4E0B\u5348(xi\u00E0w\u01D4)"],
 opts:["\u4E0B\u5348(xi\u00E0w\u01D4)","\u4E0A\u5348(sh\u00E0ngw\u01D4)","\u6628\u5929(zu\u00F3ti\u0101n)","\u4ECA\u5929(j\u012Bnti\u0101n)"],
 hint:"This time of day means 'below noon' and refers to PM hours like 3 o'clock.",
 sSrc:"Is {1} 3 o'clock okay?"},

{type:"mc", q:"\u6211(w\u01D2)\u660E\u5929(m\u00EDngti\u0101n)\u6765(l\u00E1i)\u3002 When is the speaker coming?",
 opts:["today","yesterday","this morning","tomorrow"],
 ans:"tomorrow",
 hint:"\u660E\u5929 contains the character for 'bright' combined with 'day.'"}
]},

// === L2: Telling Time ===
{id:"zhv2_u5l2", title:"\u51E0\u70B9\u4E86\uFF1F What Time Is It?", icon:"\uD83D\uDD50", xp:15, board:true, steps:[
{type:"intro", title:"\u51E0\u70B9\u4E86\uFF1F What Time Is It?",
 desc:"Learn to tell time in Chinese. The system is logical: number + o'clock, number + minutes. No irregular words like 'quarter' or 'half' to memorize.",
 goals:["Tell time with \u70B9 (o'clock) and \u5206 (minutes)","Ask what time it is with \u51E0\u70B9","Use \u73B0\u5728 (now) in sentences"]},

{type:"teach", trg:"\u70B9(di\u01CEn)", src:"o'clock / point", pos:"part", gender:null,
 note:"Used after a number to indicate the hour.\n\u4E09\u70B9 = three o'clock. Also means 'dot' or 'point.'",
 example:"A: \u51E0(j\u01D0)\u70B9(di\u01CEn)\u4E86(le)\uFF1F\nB: \u4E09(s\u0101n)\u70B9(di\u01CEn)\u4E86(le)\u3002",
 exampleSrc:"A: What time is it?\nB: It is three o'clock.",
 funFact:"\u70B9 originally meant 'a dot of ink.' It evolved to mean any kind of point, including points on a clock. In restaurants, \u70B9\u83DC means 'to point at dishes' (to order food)."},

{type:"teach", trg:"\u5206(f\u0113n)", src:"minute", pos:"part", gender:null,
 note:"Used after a number to indicate minutes.\n\u4E09\u70B9\u5341\u5206 = 3:10. Also means 'to divide.'",
 example:"A: \u73B0\u5728(xi\u00E0nz\u00E0i)\u51E0(j\u01D0)\u70B9(di\u01CEn)\u51E0(j\u01D0)\u5206(f\u0113n)\uFF1F\nB: \u73B0\u5728(xi\u00E0nz\u00E0i)\u516B(b\u0101)\u70B9(di\u01CEn)\u4E8C\u5341(\u00E8rsh\u00ED)\u5206(f\u0113n)\u3002",
 exampleSrc:"A: What time is it now (hours and minutes)?\nB: It is now 8:20.",
 funFact:"\u5206 means 'to divide.' A minute is a 'division' of an hour. The same character is used for fractions, scores, and cents. Chinese loves reusing characters across contexts."},

{type:"teach", trg:"\u73B0\u5728(xi\u00E0nz\u00E0i)", src:"now", pos:"noun", gender:null,
 note:"\u73B0 = appear/present, \u5728 = at/exist.\nLiterally: 'present existence.' Used at the start of time questions.",
 example:"A: \u4F60(n\u01D0)\u73B0\u5728(xi\u00E0nz\u00E0i)\u53BB(q\u00F9)\u5417(ma)\uFF1F\nB: \u5BF9(du\u00EC)\uFF0C\u6211(w\u01D2)\u73B0\u5728(xi\u00E0nz\u00E0i)\u53BB(q\u00F9)\u3002",
 exampleSrc:"A: Are you going now?\nB: Yes, I am going now.",
 funFact:"\u73B0\u5728 breaks down beautifully: \u73B0 (appear/manifest) + \u5728 (exist/at). The present moment is what 'appears to exist' right now. Compare English 'present' from Latin praesens meaning 'being at hand.'"},

{type:"tip", title:"Telling Time in Chinese",
 text:"Chinese time is simple and logical:\n\n\u51E0(j\u01D0)\u70B9(di\u01CEn)\uFF1F = What time? (how-many o'clock?)\n\u4E09(s\u0101n)\u70B9(di\u01CEn) = 3 o'clock\n\u4E09(s\u0101n)\u70B9(di\u01CEn)\u5341(sh\u00ED)\u5206(f\u0113n) = 3:10\n\u4E09(s\u0101n)\u70B9(di\u01CEn)\u4E09\u5341(s\u0101nsh\u00ED)\u5206(f\u0113n) = 3:30\n\nPattern: [hour number]\u70B9 [minute number]\u5206\n\nNo AM/PM words needed if context is clear.\nWith AM/PM: \u4E0A\u5348\u4E09\u70B9 = 3 AM, \u4E0B\u5348\u4E09\u70B9 = 3 PM.",
 deepDive:{title:"Why Chinese Time Is Easier Than English",
  text:"English has irregular time expressions: half past, quarter to, o'clock, noon, midnight. Chinese just uses numbers.\n\n3:15 = \u4E09\u70B9\u5341\u4E94\u5206 (three point fifteen divide)\n3:30 = \u4E09\u70B9\u4E09\u5341\u5206 (three point thirty divide)\n3:45 = \u4E09\u70B9\u56DB\u5341\u4E94\u5206 (three point forty-five divide)\n\nThere is no 'quarter past' or 'half past.' Just say the numbers. Chinese speakers find English time expressions surprisingly complicated."}},

{type:"mc", q:"How do you say '5 o'clock' in Chinese?",
 opts:["\u4E94(w\u01D4)\u5206(f\u0113n)","\u4E94(w\u01D4)\u70B9(di\u01CEn)","\u4E94(w\u01D4)\u4E2A(g\u00E8)","\u4E94(w\u01D4)\u5C81(su\u00EC)"],
 ans:"\u4E94(w\u01D4)\u70B9(di\u01CEn)",
 hint:"The word after the number means 'o'clock' or 'point' and is used for hours."},

{type:"fb", s:"\u73B0\u5728(xi\u00E0nz\u00E0i){1}\u70B9(di\u01CEn)\u4E86(le)\u3002",
 a:["\u516B(b\u0101)"],
 opts:["\u516B(b\u0101)","\u5206(f\u0113n)","\u597D(h\u01CEo)","\u53BB(q\u00F9)"],
 hint:"Fill in the number to say 'It is now 8 o'clock.' Which number means eight?",
 sSrc:"It is now {1} o'clock."},

{type:"mc", q:"\u4E09(s\u0101n)\u70B9(di\u01CEn)\u4E8C\u5341(\u00E8rsh\u00ED)\u5206(f\u0113n) means:",
 opts:["3:02","3:12","2:30","3:20"],
 ans:"3:20",
 hint:"\u70B9 marks the hour (three) and \u5206 marks the minutes (twenty)."},

{type:"fb", s:"{1}\u51E0(j\u01D0)\u70B9(di\u01CEn)\u4E86(le)\uFF1F",
 a:["\u73B0\u5728(xi\u00E0nz\u00E0i)"],
 opts:["\u73B0\u5728(xi\u00E0nz\u00E0i)","\u4ECA\u5929(j\u012Bnti\u0101n)","\u660E\u5929(m\u00EDngti\u0101n)","\u6628\u5929(zu\u00F3ti\u0101n)"],
 hint:"Which word means 'now' or 'at this moment' and is used to ask the current time?",
 sSrc:"What time is it {1}?"},

{type:"match", pairs:[
  {trg:"\u70B9(di\u01CEn)", src:"o'clock"},
  {trg:"\u5206(f\u0113n)", src:"minute"},
  {trg:"\u73B0\u5728(xi\u00E0nz\u00E0i)", src:"now"},
  {trg:"\u4E0A\u5348(sh\u00E0ngw\u01D4)", src:"morning (AM)"},
  {trg:"\u4E0B\u5348(xi\u00E0w\u01D4)", src:"afternoon (PM)"}
]},

{type:"mc", q:"\u4F60(n\u01D0)\u73B0\u5728(xi\u00E0nz\u00E0i)\u53BB(q\u00F9)\u5417(ma)\uFF1F What is this asking?",
 opts:["Where are you going?","When did you go?","Are you going now?","Who is going?"],
 ans:"Are you going now?",
 hint:"\u73B0\u5728 means 'now' and \u5417 makes it a yes/no question. The verb \u53BB means 'to go.'"},

{type:"fb", s:"\u4E0B\u5348(xi\u00E0w\u01D4)\u4E24(li\u01CEng)\u70B9(di\u01CEn)\u5341(sh\u00ED){1}\u3002",
 a:["\u5206(f\u0113n)"],
 opts:["\u5206(f\u0113n)","\u70B9(di\u01CEn)","\u4E2A(g\u00E8)","\u5C81(su\u00EC)"],
 hint:"The word for 'minute' comes after the minute number to complete the time.",
 sSrc:"2:10 PM."},

{type:"mc", q:"\u4E0A\u5348(sh\u00E0ngw\u01D4)\u4E5D(ji\u01D4)\u70B9(di\u01CEn) means:",
 opts:["9 PM","9:00 minutes","9 days","9 AM"],
 ans:"9 AM",
 hint:"\u4E0A\u5348 means 'morning (AM).' Combine it with the hour number and \u70B9."}
]},

// === L3: Going and Coming ===
{id:"zhv2_u5l3", title:"\u53BB\u548C\u6765 Going and Coming", icon:"\uD83D\uDEB6", xp:15, board:true, steps:[
{type:"intro", title:"\u53BB\u548C\u6765 Going and Coming",
 desc:"Learn the essential verbs of motion: go, come, and return. These are among the most used verbs in Chinese and form the backbone of talking about daily activities.",
 goals:["Use \u53BB (go), \u6765 (come), and \u56DE (return)","Talk about locations with \u5728 and \u91CC","Understand directional verbs in Chinese"]},

{type:"teach", trg:"\u53BB(q\u00F9)", src:"to go", pos:"verb", gender:null,
 note:"Tone 4 (falling). One of the most common verbs.\n\u53BB + place = go to a place.",
 example:"A: \u4F60(n\u01D0)\u4ECA\u5929(j\u012Bnti\u0101n)\u53BB(q\u00F9)\u54EA\u513F(n\u01CEr)\uFF1F\nB: \u6211(w\u01D2)\u53BB(q\u00F9)\u5B66\u6821(xu\u00E9xi\u00E0o)\u3002",
 exampleSrc:"A: Where are you going today?\nB: I am going to school.",
 funFact:"\u53BB is a pictograph of a person walking away. The top part is a cover or roof, the bottom is a figure stepping through. When you \u53BB somewhere, you leave your current location for another."},

{type:"teach", trg:"\u6765(l\u00E1i)", src:"to come", pos:"verb", gender:null,
 note:"Tone 2 (rising). The opposite of \u53BB.\n\u6765 = movement TOWARD the speaker.",
 example:"A: \u4F60(n\u01D0)\u6765(l\u00E1i)\u6211(w\u01D2)\u5BB6(ji\u0101)\u5417(ma)\uFF1F\nB: \u597D(h\u01CEo)\uFF0C\u6211(w\u01D2)\u6765(l\u00E1i)\uFF01",
 exampleSrc:"A: Will you come to my house?\nB: Okay, I will come!",
 funFact:"\u53BB and \u6765 work like English 'go' and 'come.' \u6765 means toward the speaker, \u53BB means away. Chinese also uses them as direction complements after other verbs: \u56DE\u6765 (return here), \u56DE\u53BB (return there)."},

{type:"teach", trg:"\u56DE(hu\u00ED)", src:"to return / to go back", pos:"verb", gender:null,
 note:"Tone 2 (rising). Always implies returning to a familiar place.\n\u56DE\u5BB6 = go home (return home).",
 example:"A: \u4F60(n\u01D0)\u4EC0\u4E48(sh\u00E9nme)\u65F6\u5019(sh\u00EDhou)\u56DE(hu\u00ED)\u5BB6(ji\u0101)\uFF1F\nB: \u6211(w\u01D2)\u4E0B\u5348(xi\u00E0w\u01D4)\u4E94(w\u01D4)\u70B9(di\u01CEn)\u56DE(hu\u00ED)\u5BB6(ji\u0101)\u3002",
 exampleSrc:"A: When do you go home?\nB: I go home at 5 PM.",
 funFact:"\u56DE is a pictograph of a whirlpool, something that circles back to its starting point. The character looks like a spiral or a box within a box. \u56DE\u5BB6 (return home) is one of the most comforting phrases in Chinese."},

{type:"teach", trg:"\u5728(z\u00E0i)", src:"at / in / be at", pos:"prep", gender:null,
 note:"Tone 4. Indicates location. \u5728 + place = at/in a place.\nAlso works as a verb meaning 'to be at.'",
 example:"A: \u4F60(n\u01D0)\u5728(z\u00E0i)\u54EA\u513F(n\u01CEr)\uFF1F\nB: \u6211(w\u01D2)\u5728(z\u00E0i)\u5BB6(ji\u0101)\u91CC(l\u01D0)\u3002",
 exampleSrc:"A: Where are you?\nB: I am at home.",
 funFact:"\u5728 is one of the hardest words to translate because it covers 'at,' 'in,' 'on,' and 'be located at.' English needs four prepositions where Chinese uses one. Less to memorize!"},

{type:"teach", trg:"\u91CC(l\u01D0)", src:"inside / in", pos:"noun", gender:null,
 note:"Added after a noun to mean 'inside.'\n\u5BB6\u91CC = inside the home. \u5B66\u6821\u91CC = inside the school.",
 example:"A: \u4ED6(t\u0101)\u5728(z\u00E0i)\u5BB6(ji\u0101)\u91CC(l\u01D0)\u5417(ma)\uFF1F\nB: \u4E0D(b\u00FA)\u5728(z\u00E0i)\uFF0C\u4ED6(t\u0101)\u53BB(q\u00F9)\u5B66\u6821(xu\u00E9xi\u00E0o)\u4E86(le)\u3002",
 exampleSrc:"A: Is he at home?\nB: No, he went to school.",
 funFact:"\u91CC originally meant the inside of a village. In modern Chinese, it turns any noun into a location: \u5BB6\u91CC (in the home), \u5B66\u6821\u91CC (in the school). It is called a 'localizer' because it creates locations from nouns."},

{type:"tip", title:"Location Pattern: \u5728 + Place + \u91CC",
 text:"To say where something is, Chinese uses this pattern:\n\nSubject + \u5728(z\u00E0i) + Place + \u91CC(l\u01D0)\n\n\u6211(w\u01D2)\u5728(z\u00E0i)\u5BB6(ji\u0101)\u91CC(l\u01D0)\u3002 I am at home.\n\u4ED6(t\u0101)\u5728(z\u00E0i)\u5B66\u6821(xu\u00E9xi\u00E0o)\u91CC(l\u01D0)\u3002 He is at school.\n\n\u91CC is often optional for well-known places, but including it is always correct.\n\nTo negate: \u4E0D\u5728 (not at)\n\u4ED6(t\u0101)\u4E0D(b\u00FA)\u5728(z\u00E0i)\u5BB6(ji\u0101)\u3002 He is not at home.",
 deepDive:{title:"\u5728 as a Verb vs Preposition",
  text:"\u5728 does double duty in Chinese:\n\n1. As a verb (to be at): \u6211\u5728\u5BB6\u3002 I am at home.\n2. As a preposition (at/in): \u6211\u5728\u5BB6\u91CC\u5403\u996D\u3002 I eat at home.\n\nWhen \u5728 is the only verb, it means 'to be located at.' When another verb follows, \u5728 works like a preposition showing where the action happens. Context makes the difference clear."}},

{type:"mc", q:"\u6211(w\u01D2)\u53BB(q\u00F9)\u5B66\u6821(xu\u00E9xi\u00E0o)\u3002 What is the speaker doing?",
 opts:["Coming to school","Returning from school","Studying at school","Going to school"],
 ans:"Going to school",
 hint:"The verb \u53BB means movement away from the speaker toward a destination."},

{type:"fb", s:"\u4F60(n\u01D0){1}\u6211(w\u01D2)\u5BB6(ji\u0101)\u5417(ma)\uFF1F",
 a:["\u6765(l\u00E1i)"],
 opts:["\u6765(l\u00E1i)","\u53BB(q\u00F9)","\u56DE(hu\u00ED)","\u5728(z\u00E0i)"],
 hint:"The speaker is inviting someone toward their own home. Which verb means 'to come'?",
 sSrc:"Will you {1} to my house?"},

{type:"match", pairs:[
  {trg:"\u53BB(q\u00F9)", src:"to go"},
  {trg:"\u6765(l\u00E1i)", src:"to come"},
  {trg:"\u56DE(hu\u00ED)", src:"to return"},
  {trg:"\u5728(z\u00E0i)", src:"at / in"},
  {trg:"\u91CC(l\u01D0)", src:"inside"}
]},

{type:"mc", q:"\u4ED6(t\u0101)\u5728(z\u00E0i)\u5BB6(ji\u0101)\u91CC(l\u01D0)\u3002 What does this mean?",
 opts:["He is going home","He returned home","He left home","He is at home"],
 ans:"He is at home",
 hint:"\u5728 indicates location. The sentence describes where someone currently is."},

{type:"fb", s:"\u6211(w\u01D2)\u4E0B\u5348(xi\u00E0w\u01D4)\u4E94(w\u01D4)\u70B9(di\u01CEn){1}\u5BB6(ji\u0101)\u3002",
 a:["\u56DE(hu\u00ED)"],
 opts:["\u56DE(hu\u00ED)","\u53BB(q\u00F9)","\u6765(l\u00E1i)","\u5728(z\u00E0i)"],
 hint:"The speaker is going back to a familiar place, their home, at 5 PM.",
 sSrc:"I {1} home at 5 PM."},

{type:"mc", q:"\u4F60(n\u01D0)\u5728(z\u00E0i)\u54EA\u513F(n\u01CEr)\uFF1F What is this asking?",
 opts:["Where are you?","When are you leaving?","Who are you?","What do you want?"],
 ans:"Where are you?",
 hint:"\u5728 asks about location, and \u54EA\u513F means '___.'"},

{type:"fb", s:"\u4ED6(t\u0101)\u5728(z\u00E0i)\u5B66\u6821(xu\u00E9xi\u00E0o){1}\u3002",
 a:["\u91CC(l\u01D0)"],
 opts:["\u91CC(l\u01D0)","\u53BB(q\u00F9)","\u6765(l\u00E1i)","\u597D(h\u01CEo)"],
 hint:"This word is added after a place noun to mean 'inside' or 'in.'",
 sSrc:"He is at school (inside)."},

{type:"mc", q:"Which verb means 'to return' or 'to go back'?",
 opts:["\u53BB(q\u00F9)","\u56DE(hu\u00ED)","\u6765(l\u00E1i)","\u5728(z\u00E0i)"],
 ans:"\u56DE(hu\u00ED)",
 hint:"This verb specifically implies going back to a place you have been before, like home."}
]},

// === L4: The Completion Particle \u4E86 + Review ===
{id:"zhv2_u5l4", title:"\u505A\u4E86\u4EC0\u4E48\uFF1F What Did You Do?", icon:"\u2705", xp:15, board:true, steps:[
{type:"intro", title:"\u505A\u4E86\u4EC0\u4E48\uFF1F What Did You Do?",
 desc:"Learn the particle \u4E86 to indicate completed actions. Then put all the time and motion vocabulary together to describe your daily routine.",
 goals:["Use \u4E86 to mark completed actions","Combine time words with verbs of motion","Describe daily activities in Chinese"]},

{type:"teach", trg:"\u4E86(le)", src:"(completion particle)", pos:"part", gender:null,
 note:"Added after a verb to show the action is completed.\n\u53BB\u4E86 = went. \u6765\u4E86 = came. \u56DE\u4E86 = returned.",
 example:"A: \u4F60(n\u01D0)\u5403(ch\u012B)\u4E86(le)\u5417(ma)\uFF1F\nB: \u5403(ch\u012B)\u4E86(le)\uFF01\u6211(w\u01D2)\u5403(ch\u012B)\u4E86(le)\u7C73\u996D(m\u01D0f\u00E0n)\u3002",
 exampleSrc:"A: Have you eaten?\nB: Yes! I ate rice.",
 funFact:"\u4E86 is the most common particle in Chinese and one of the hardest for learners. At this level, just remember: verb + \u4E86 = the action happened. \u5403\u4E86 = ate, \u53BB\u4E86 = went. It does not change the verb itself."},

{type:"teach", trg:"\u65F6\u5019(sh\u00EDhou)", src:"time / when / moment", pos:"noun", gender:null,
 note:"Used in the pattern: ...\u7684\u65F6\u5019 = when/at the time of.\nAlso: \u4EC0\u4E48\u65F6\u5019 = when?",
 example:"A: \u4F60(n\u01D0)\u4EC0\u4E48(sh\u00E9nme)\u65F6\u5019(sh\u00EDhou)\u6765(l\u00E1i)\uFF1F\nB: \u6211(w\u01D2)\u660E\u5929(m\u00EDngti\u0101n)\u4E0A\u5348(sh\u00E0ngw\u01D4)\u6765(l\u00E1i)\u3002",
 exampleSrc:"A: When are you coming?\nB: I am coming tomorrow morning.",
 funFact:"\u65F6 means 'time' and \u5019 means 'wait/moment.' Together they describe a point or period in time. The question \u4EC0\u4E48\u65F6\u5019 (what time/when) is incredibly useful and works in almost any context."},

{type:"teach", trg:"\u4E0A(sh\u00E0ng)", src:"on / above / last", pos:"noun", gender:null,
 note:"Means 'up,' 'on,' 'above,' or 'previous.'\n\u4E0A\u5348 = morning. Can also mean 'last' (\u4E0A\u4E2A\u6708 = last month).",
 example:"A: \u4F60(n\u01D0)\u4E0A\u5348(sh\u00E0ngw\u01D4)\u53BB(q\u00F9)\u4E86(le)\u54EA\u513F(n\u01CEr)\uFF1F\nB: \u6211(w\u01D2)\u4E0A\u5348(sh\u00E0ngw\u01D4)\u53BB(q\u00F9)\u4E86(le)\u5B66\u6821(xu\u00E9xi\u00E0o)\u3002",
 exampleSrc:"A: Where did you go this morning?\nB: I went to school this morning.",
 funFact:"\u4E0A is one of the most versatile characters in Chinese. It means 'up' (\u4E0A\u9762 = above), 'get on' (\u4E0A\u8F66 = board a vehicle), 'previous' (\u4E0A\u4E2A\u661F\u671F = last week), and 'go to' (\u4E0A\u5B66 = go to school). Context determines which meaning applies."},

{type:"teach", trg:"\u4E0B(xi\u00E0)", src:"under / below / next", pos:"noun", gender:null,
 note:"Opposite of \u4E0A. Means 'down,' 'under,' 'below,' or 'next.'\n\u4E0B\u5348 = afternoon. \u4E0B\u4E2A\u6708 = next month.",
 example:"A: \u4E0B\u5348(xi\u00E0w\u01D4)\u4F60(n\u01D0)\u53BB(q\u00F9)\u54EA\u513F(n\u01CEr)\uFF1F\nB: \u4E0B\u5348(xi\u00E0w\u01D4)\u6211(w\u01D2)\u56DE(hu\u00ED)\u5BB6(ji\u0101)\u3002",
 exampleSrc:"A: Where are you going this afternoon?\nB: This afternoon I am going home.",
 funFact:"\u4E0A and \u4E0B form a perfect pair of opposites. \u4E0A points up, \u4E0B points down. They appear everywhere: \u4E0A\u5348/\u4E0B\u5348 (AM/PM), \u4E0A\u8BFE/\u4E0B\u8BFE (start/end class), \u4E0A\u73ED/\u4E0B\u73ED (start/end work). Learning one gives you the other free."},

{type:"tip", title:"How \u4E86 Works",
 text:"\u4E86 after a verb signals the action is done:\n\n\u4ED6(t\u0101)\u53BB(q\u00F9)\u4E86(le)\u3002 He went. (He has gone.)\n\u6211(w\u01D2)\u5403(ch\u012B)\u4E86(le)\u3002 I ate. (I have eaten.)\n\u5979(t\u0101)\u6765(l\u00E1i)\u4E86(le)\u3002 She came. (She has arrived.)\n\nTo negate a completed action, use \u6CA1(m\u00E9i) instead of \u4E0D, and DROP the \u4E86:\n\n\u4ED6(t\u0101)\u6CA1(m\u00E9i)\u53BB(q\u00F9)\u3002 He did not go.\n\u6211(w\u01D2)\u6CA1(m\u00E9i)\u5403(ch\u012B)\u3002 I did not eat.\n\nNever say \u6CA1\u53BB\u4E86. \u6CA1 and \u4E86 do not appear together.",
 deepDive:{title:"\u4E86 vs English Past Tense",
  text:"\u4E86 is NOT the same as English past tense. It marks completion, which can happen in the past, present, or even future.\n\nPast: \u6211\u5403\u4E86 (I have eaten / I ate)\nFuture: \u4F60\u5403\u4E86\u996D\u5C31\u53BB (After you eat, then go)\n\nDo not think of \u4E86 as '-ed.' Think of it as 'done' or 'completed.' This subtle difference matters more at higher levels, but for now, verb + \u4E86 = action happened is a safe rule."}},

{type:"mc", q:"\u4ED6(t\u0101)\u53BB(q\u00F9)\u4E86(le)\u5B66\u6821(xu\u00E9xi\u00E0o)\u3002 When did the action happen?",
 opts:["It will happen tomorrow","It is happening now","It already happened","It might happen"],
 ans:"It already happened",
 hint:"\u4E86 after the verb signals that the action has been completed."},

{type:"fb", s:"\u6211(w\u01D2)\u6628\u5929(zu\u00F3ti\u0101n)\u56DE(hu\u00ED){1}\u5BB6(ji\u0101)\u3002",
 a:["\u4E86(le)"],
 opts:["\u4E86(le)","\u53BB(q\u00F9)","\u5728(z\u00E0i)","\u6765(l\u00E1i)"],
 hint:"Yesterday the speaker returned home. Which particle marks the action as completed?",
 sSrc:"I returned home yesterday."},

{type:"mc", q:"How do you negate a completed action?",
 opts:["\u4E0D(b\u00F9) + verb + \u4E86(le)","verb + \u4E0D(b\u00F9) + \u4E86(le)","\u6CA1(m\u00E9i) + verb (no \u4E86)","\u4E86(le) + \u6CA1(m\u00E9i) + verb"],
 ans:"\u6CA1(m\u00E9i) + verb (no \u4E86)",
 hint:"When negating past actions, use \u6CA1 and remove \u4E86 entirely. They never appear together."},

{type:"fb", s:"\u4F60(n\u01D0)\u4EC0\u4E48(sh\u00E9nme){1}\u6765(l\u00E1i)\uFF1F",
 a:["\u65F6\u5019(sh\u00EDhou)"],
 opts:["\u65F6\u5019(sh\u00EDhou)","\u4ECA\u5929(j\u012Bnti\u0101n)","\u70B9(di\u01CEn)","\u4E86(le)"],
 hint:"This word means 'time' or 'moment' and combines with \u4EC0\u4E48 to ask 'when.'",
 sSrc:"When are you coming?"},

{type:"match", pairs:[
  {trg:"\u4E86(le)", src:"(completion)"},
  {trg:"\u65F6\u5019(sh\u00EDhou)", src:"time / when"},
  {trg:"\u4E0A(sh\u00E0ng)", src:"on / above / last"},
  {trg:"\u4E0B(xi\u00E0)", src:"under / below / next"},
  {trg:"\u56DE(hu\u00ED)", src:"to return"}
]},

{type:"mc", q:"\u5979(t\u0101)\u6CA1(m\u00E9i)\u6765(l\u00E1i)\u3002 What does this mean?",
 opts:["She will not come","She came","She is coming","She did not come"],
 ans:"She did not come",
 hint:"\u6CA1 negates a completed action. The absence of \u4E86 confirms the action did not happen."},

{type:"fb", s:"\u6211(w\u01D2){1}\u5348(w\u01D4)\u53BB(q\u00F9)\u4E86(le)\u5B66\u6821(xu\u00E9xi\u00E0o)\u3002",
 a:["\u4E0A(sh\u00E0ng)"],
 opts:["\u4E0A(sh\u00E0ng)","\u4E0B(xi\u00E0)","\u5728(z\u00E0i)","\u56DE(hu\u00ED)"],
 hint:"Combined with \u5348 (noon), this character forms 'morning (AM)' and comes before the verb.",
 sSrc:"I went to school this morning."},

{type:"mc", q:"\u6211(w\u01D2)\u5403(ch\u012B)\u4E86(le)\u7C73\u996D(m\u01D0f\u00E0n)\u3002 What happened?",
 opts:["I ate rice","I am eating rice","I want to eat rice","I did not eat rice"],
 ans:"I ate rice",
 hint:"The verb \u5403 (eat) is followed by \u4E86 (completed). The action is already done."},

{type:"fb", s:"\u4ED6(t\u0101)\u660E\u5929(m\u00EDngti\u0101n){1}\u5348(w\u01D4)\u6765(l\u00E1i)\u3002",
 a:["\u4E0B(xi\u00E0)"],
 opts:["\u4E0B(xi\u00E0)","\u4E0A(sh\u00E0ng)","\u5728(z\u00E0i)","\u91CC(l\u01D0)"],
 hint:"Combined with \u5348 (noon), this character forms 'afternoon (PM).'",
 sSrc:"He is coming tomorrow afternoon."},

{type:"match", pairs:[
  {trg:"\u4ECA\u5929(j\u012Bnti\u0101n)", src:"today"},
  {trg:"\u6628\u5929(zu\u00F3ti\u0101n)", src:"yesterday"},
  {trg:"\u660E\u5929(m\u00EDngti\u0101n)", src:"tomorrow"},
  {trg:"\u53BB(q\u00F9)", src:"to go"},
  {trg:"\u73B0\u5728(xi\u00E0nz\u00E0i)", src:"now"}
]},

{type:"mc", q:"\u4E0B\u5348(xi\u00E0w\u01D4)\u4E09(s\u0101n)\u70B9(di\u01CEn)\u4ED6(t\u0101)\u56DE(hu\u00ED)\u4E86(le)\u5BB6(ji\u0101)\u3002 What happened?",
 opts:["He is going home at 3 PM","He went home at 3 PM","He will go home at 3 PM","He is at home now"],
 ans:"He went home at 3 PM",
 hint:"\u4E86 after the verb \u56DE marks the action as completed. The time is \u4E0B\u5348\u4E09\u70B9 (3 PM)."},

{type:"fb", s:"\u5979(t\u0101)\u6628\u5929(zu\u00F3ti\u0101n)\u6CA1(m\u00E9i){1}\u5B66\u6821(xu\u00E9xi\u00E0o)\u3002",
 a:["\u53BB(q\u00F9)"],
 opts:["\u53BB(q\u00F9)","\u6765(l\u00E1i)","\u56DE(hu\u00ED)","\u5728(z\u00E0i)"],
 hint:"She did not go somewhere yesterday. Which verb means 'to go' toward a destination?",
 sSrc:"She did not go to school yesterday."}
]},

// ═══ L5: More Time Words — HSK 1 Essentials ═══
{id:"zhv2_u5l5", title:"年月日 Year, Month, Date", icon:"📅", xp:15, board:true, steps:[
{type:"intro", title:"年月日 Year, Month, Date",
 desc:"Complete your time vocabulary with five essential HSK 1 words: noon, year, minute, date numbers, and the handy phrase 'a moment.'",
 goals:["Say noon with 中午","Count years and minutes","Use 号 for dates and 一下 for brief actions"]},

{type:"teach", trg:"中午(zhōngwǔ)", src:"noon / midday", pos:"noun", gender:null,
 note:"中 (middle) + 午 (the horse hour, noon). Literally: middle of noon.\n上午 (morning) — 中午 (noon) — 下午 (afternoon).",
 example:"A: 你(nǐ)中午(zhōngwǔ)吃(chī)什么(shénme)？\nB: 我(wǒ)中午(zhōngwǔ)吃(chī)米饭(mǐfàn)。",
 exampleSrc:"A: What do you eat at noon?\nB: I eat rice at noon.",
 funFact:"午 comes from the Chinese zodiac hour system. The horse hour (午时, wǔshí) was 11am–1pm. Noon was the peak of the horse hour, so 中午 (middle of horse) came to mean midday. Chinese time divisions survive in everyday words."},

{type:"teach", trg:"年(nián)", src:"year", pos:"noun", gender:null,
 note:"Second tone (rising). Used for years, New Year, and age.\n今年 = this year. 明年 = next year. 去年 = last year.",
 example:"A: 今年(jīnnián)是(shì)哪(nǎ)年(nián)？\nB: 今年(jīnnián)是(shì)二零二六(èr líng èr liù)年(nián)。",
 exampleSrc:"A: What year is this year?\nB: This year is 2026.",
 funFact:"The character 年 depicts a person (人) carrying a sheaf of grain (禾). A year is one harvest cycle. Chinese New Year celebrations last 15 days — from New Year's Eve to the Lantern Festival — because the new year is the biggest annual event in Chinese culture."},

{type:"teach", trg:"分钟(fēnzhōng)", src:"minute", pos:"noun", gender:null,
 note:"分 (minute/divide) + 钟 (clock). Together: a minute on a clock.\n三分钟 = three minutes.",
 example:"A: 你(nǐ)还(hái)要(yào)多少(duōshao)分钟(fēnzhōng)？\nB: 再(zài)等(děng)五(wǔ)分钟(fēnzhōng)！",
 exampleSrc:"A: How many more minutes do you need?\nB: Wait five more minutes!",
 funFact:"分 also means 'point' or 'score.' In Chinese time, 三点十五分 means 3:15 — literally 'three-o'clock fifteen-minutes.' The same character covers minutes of time and decimal points in numbers."},

{type:"teach", trg:"号(hào)", src:"number / date (of month)", pos:"noun", gender:null,
 note:"Used for dates, room numbers, and phone numbers.\n三号 = the 3rd (of the month). 一号房间 = room 1.",
 example:"A: 今天(jīntiān)几(jǐ)号(hào)？\nB: 今天(jīntiān)是(shì)十五(shíwǔ)号(hào)。",
 exampleSrc:"A: What date is today?\nB: Today is the 15th.",
 funFact:"号 is used for dates in speech: 三月五号 = March 5th. In formal writing, 日 (rì) is used instead: 三月五日. So you will see both, but for speaking, 号 is the natural choice."},

{type:"teach", trg:"一下(yīxià)", src:"a moment / a bit / give it a try", pos:"adv", gender:null,
 note:"Makes a request sound softer and quicker.\n等一下 = wait a moment. 看一下 = have a look.",
 example:"A: 请(qǐng)等(děng)一下(yīxià)！\nB: 好(hǎo)，我(wǒ)等(děng)你(nǐ)。",
 exampleSrc:"A: Please wait a moment!\nB: Okay, I will wait for you.",
 funFact:"一下 is the ultimate politeness softener in Chinese. 看一下 (have a quick look), 想一下 (think for a moment), 试一下 (try it out once). Adding 一下 makes any verb sound casual, brief, and non-demanding."},

{type:"mc", q:"今天几号(hào)？ What is this question asking?",
 opts:["What is today's day of the week?","What year is it?","What is today's date?","What time is it?"],
 ans:"What is today's date?",
 hint:"号 is used for the day number within a month. 几号 asks which number (date) in the month."},

{type:"match", pairs:[
  {trg:"中午(zhōngwǔ)", src:"noon"},
  {trg:"年(nián)", src:"year"},
  {trg:"分钟(fēnzhōng)", src:"minute"},
  {trg:"号(hào)", src:"number / date"},
  {trg:"一下(yīxià)", src:"a moment"}
]},

{type:"fb", s:"我(wǒ)中午(zhōngwǔ)吃(chī){1}。",
 a:["米饭(mǐfàn)"],
 opts:["米饭(mǐfàn)","水(shuǐ)","茶(chá)","杯子(bēizi)"],
 hint:"What food item is the typical Chinese staple meal, served at noon?",
 sSrc:"I eat {1} at noon."},

{type:"mc", q:"How do you say 'Wait a moment, please' in Chinese?",
 opts:["请一下等。","请等一下。","一下请等。","等请一下。"],
 ans:"请等一下。",
 hint:"请 (please) comes first, then the verb 等 (wait), then 一下 to soften and shorten the request."},

{type:"fb", s:"我(wǒ)再(zài)等(děng){1}分钟(fēnzhōng)。",
 a:["五(wǔ)"],
 opts:["五(wǔ)","中午(zhōngwǔ)","号(hào)","年(nián)"],
 hint:"Five minutes of waiting. Which number completes the sentence?",
 sSrc:"I will wait {1} more minutes."},

{type:"mc", q:"今年(jīnnián) means:",
 opts:["last year","next year","this year","many years"],
 ans:"this year",
 hint:"今 means 'now' or 'this current.' You already know 今天 (today). Apply the same logic to 年."},

{type:"fb", s:"今天(jīntiān)是(shì){1}号(hào)。",
 a:["十五(shíwǔ)"],
 opts:["十五(shíwǔ)","中午(zhōngwǔ)","年(nián)","分钟(fēnzhōng)"],
 hint:"Today is the 15th. Which number means fifteen?",
 sSrc:"Today is the {1}th."}
]}

]};

export default UNIT_05;
