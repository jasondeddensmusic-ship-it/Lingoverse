// Unit 3: Family and People
// Level: A1.1 (HSK 1)
// Chinese (Mandarin) V2 format with hanzi+pinyin notation
// Vocab: 家, 爸爸, 妈妈, 哥哥, 姐姐, 弟弟, 妹妹, 儿子, 女儿, 人, 有, 没, 的, 和, 这, 那

const UNIT_03 = {
n:3, lang:"zh", srcLang:"en", track:"v2",
title:"我的家 My Family", sub:"Family Members",
icon:"\uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC67\u200D\uD83D\uDC66", level:"A1.1", color:"#7B5EE8",
lessons:[

// ═══ L1: Family Members ═══
{id:"zhv2_u3l1", title:"Family Members", icon:"\uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC67", xp:15, board:true, steps:[
{type:"intro", title:"Family Members",
 desc:"Meet the Chinese family. Learn the words for parents, siblings, and close relatives. Chinese has separate words for older and younger siblings.",
 goals:["Name immediate family members in Chinese","Understand the older/younger sibling distinction","Use family vocabulary in simple sentences"]},

{type:"teach", trg:"\u5BB6(ji\u0101)", src:"home / family", pos:"noun", gender:null,
 note:"One of the most common characters in Chinese.\nMeans both 'home' (the place) and 'family' (the people).",
 example:"A: \u4F60(n\u01D0)\u7684(de)\u5BB6(ji\u0101)\u5728(z\u00E0i)\u54EA\u91CC(n\u01CEli)?\nB: \u6211(w\u01D2)\u7684(de)\u5BB6(ji\u0101)\u5728(z\u00E0i)\u5317\u4EAC(B\u011Bij\u012Bng)\u3002",
 exampleSrc:"A: Where is your home?\nB: My home is in Beijing.",
 funFact:"The character \u5BB6 shows a pig (\u8C55) under a roof (\u5B80). In ancient China, having a pig at home meant wealth and stability. A house with a pig = a proper home."},

{type:"teach", trg:"\u7238\u7238(b\u00E0ba)", src:"dad", pos:"noun", gender:null,
 note:"Informal word for father. The second syllable is neutral tone.\nMore formal: \u7236\u4EB2(f\u00F9q\u012Bn).",
 example:"A: \u7238\u7238(b\u00E0ba)\u5728(z\u00E0i)\u5BB6(ji\u0101)\u5417(ma)?\nB: \u7238\u7238(b\u00E0ba)\u4E0D(b\u00FA)\u5728(z\u00E0i)\u5BB6(ji\u0101)\u3002",
 exampleSrc:"A: Is Dad at home?\nB: Dad is not at home.",
 funFact:"The word \u7238\u7238 is one of the most universal sounds across human languages. 'Baba,' 'papa,' 'dada' exist in dozens of languages because these are among the first sounds babies can make."},

{type:"teach", trg:"\u5988\u5988(m\u0101ma)", src:"mom", pos:"noun", gender:null,
 note:"Informal word for mother. The second syllable is neutral tone.\nMore formal: \u6BCD\u4EB2(m\u01D4q\u012Bn).",
 example:"A: \u5988\u5988(m\u0101ma)\u5728(z\u00E0i)\u54EA\u91CC(n\u01CEli)?\nB: \u5988\u5988(m\u0101ma)\u5728(z\u00E0i)\u5BB6(ji\u0101)\u3002",
 exampleSrc:"A: Where is Mom?\nB: Mom is at home.",
 funFact:"\u5988 contains the \u5973 (woman) radical on the left and \u9A6C (horse, phonetic hint) on the right. Like \u7238\u7238, the word \u5988\u5988 is nearly universal across languages because babies naturally produce the 'mama' sound first."},

{type:"teach", trg:"\u54E5\u54E5(g\u0113ge)", src:"older brother", pos:"noun", gender:null,
 note:"Specifically for an OLDER brother. Second syllable neutral tone.\nChinese distinguishes older from younger siblings.",
 example:"A: \u4F60(n\u01D0)\u6709(y\u01D2u)\u54E5\u54E5(g\u0113ge)\u5417(ma)?\nB: \u6211(w\u01D2)\u6709(y\u01D2u)\u4E00(y\u012B)\u4E2A(g\u00E8)\u54E5\u54E5(g\u0113ge)\u3002",
 exampleSrc:"A: Do you have an older brother?\nB: I have one older brother.",
 funFact:"Chinese requires you to specify older or younger for siblings. There is no single word for just 'brother.' This reflects the importance of birth order in Chinese family hierarchy and Confucian values."},

{type:"teach", trg:"\u59D0\u59D0(ji\u011Bjie)", src:"older sister", pos:"noun", gender:null,
 note:"Specifically for an OLDER sister. Second syllable neutral tone.\nAlso used as a polite address for young women.",
 example:"A: \u59D0\u59D0(ji\u011Bjie)\u597D(h\u01CEo)!\nB: \u4F60(n\u01D0)\u597D(h\u01CEo)!",
 exampleSrc:"A: Hello, older sister!\nB: Hello!",
 funFact:"\u59D0\u59D0 is also used to politely address young women you are not related to, like a waitress or shop assistant. Calling someone \u59D0\u59D0 shows friendly respect and is very common in daily life."},

{type:"teach", trg:"\u5F1F\u5F1F(d\u00ECdi)", src:"younger brother", pos:"noun", gender:null,
 note:"Specifically for a YOUNGER brother. Second syllable neutral tone.",
 example:"A: \u5F1F\u5F1F(d\u00ECdi)\u51E0(j\u01D0)\u5C81(su\u00EC)?\nB: \u5F1F\u5F1F(d\u00ECdi)\u4E94(w\u01D4)\u5C81(su\u00EC)\u3002",
 exampleSrc:"A: How old is your younger brother?\nB: My younger brother is five years old.",
 funFact:"In traditional Chinese families, the oldest sibling has authority over the younger ones. The word \u54E5 (older) always comes before \u5F1F (younger) in compound words, reflecting the family hierarchy."},

{type:"teach", trg:"\u59B9\u59B9(m\u00E8imei)", src:"younger sister", pos:"noun", gender:null,
 note:"Specifically for a YOUNGER sister. Second syllable neutral tone.",
 example:"A: \u4F60(n\u01D0)\u7684(de)\u59B9\u59B9(m\u00E8imei)\u53EB(ji\u00E0o)\u4EC0\u4E48(sh\u00E9nme)\u540D\u5B57(m\u00EDngzi)?\nB: \u5979(t\u0101)\u53EB(ji\u00E0o)\u5C0F\u7EA2(Xi\u01CEoh\u00F3ng)\u3002",
 exampleSrc:"A: What is your younger sister's name?\nB: Her name is Xiaohong.",
 funFact:"Both \u59D0 and \u59B9 contain the \u5973 (woman) radical, while \u54E5 and \u5F1F do not. Chinese characters often embed gender information directly in the writing system through their radicals."},

{type:"mc", q:"Chinese has separate words for older and younger siblings. What is the word for 'older brother'?",
 opts:["\u59D0\u59D0(ji\u011Bjie)","\u5F1F\u5F1F(d\u00ECdi)","\u59B9\u59B9(m\u00E8imei)","\u54E5\u54E5(g\u0113ge)"],
 ans:"\u54E5\u54E5(g\u0113ge)",
 hint:"This word starts with a first-tone syllable and refers to a male sibling who is OLDER than you."},

{type:"match", pairs:[
  {trg:"\u7238\u7238(b\u00E0ba)", src:"dad"},
  {trg:"\u5988\u5988(m\u0101ma)", src:"mom"},
  {trg:"\u54E5\u54E5(g\u0113ge)", src:"older brother"},
  {trg:"\u59D0\u59D0(ji\u011Bjie)", src:"older sister"},
  {trg:"\u5F1F\u5F1F(d\u00ECdi)", src:"younger brother"}
]},

{type:"fb", s:"\u6211(w\u01D2)\u7684(de){1}\u5728(z\u00E0i)\u5BB6(ji\u0101)\u3002",
 a:["\u5988\u5988(m\u0101ma)"],
 opts:["\u5988\u5988(m\u0101ma)","\u597D(h\u01CEo)","\u662F(sh\u00EC)","\u53EB(ji\u00E0o)"],
 hint:"Which family word means 'mom'? She is at home.",
 sSrc:"My {1} is at home."},

{type:"mc", q:"\u59B9\u59B9(m\u00E8imei) refers to which family member?",
 opts:["older brother","older sister","younger brother","younger sister"],
 ans:"younger sister",
 hint:"This word contains the \u5973 radical and refers to a female sibling born after you."},

{type:"fb", s:"\u7238\u7238(b\u00E0ba)\u548C(h\u00E9){1}\u5728(z\u00E0i)\u5BB6(ji\u0101)\u3002",
 a:["\u5988\u5988(m\u0101ma)"],
 opts:["\u5988\u5988(m\u0101ma)","\u4EC0\u4E48(sh\u00E9nme)","\u597D(h\u01CEo)","\u4E0D(b\u00F9)"],
 hint:"Dad and who else is at home? Complete the pair of parents.",
 sSrc:"Dad and {1} are at home."},

{type:"match", pairs:[
  {trg:"\u59B9\u59B9(m\u00E8imei)", src:"younger sister"},
  {trg:"\u5BB6(ji\u0101)", src:"home / family"},
  {trg:"\u54E5\u54E5(g\u0113ge)", src:"older brother"},
  {trg:"\u7238\u7238(b\u00E0ba)", src:"dad"}
]}
]},

// ═══ L2: My Family ═══
{id:"zhv2_u3l2", title:"My Family", icon:"\u2764\uFE0F", xp:15, board:true, steps:[
{type:"intro", title:"My Family",
 desc:"Learn to talk about your family using possessive \u7684, the verb \u6709, and its negation \u6CA1\u6709. Describe who is in your family.",
 goals:["Use \u7684 to show possession","Say what you have with \u6709 and \u6CA1\u6709","Describe your family members"]},

{type:"teach", trg:"\u7684(de)", src:"(possessive particle)", pos:"part", gender:null,
 note:"Links a possessor to what they possess. Like English apostrophe-s.\n\u6211\u7684 = my. \u4F60\u7684 = your.",
 example:"A: \u8FD9(zh\u00E8)\u662F(sh\u00EC)\u8C01(sh\u00E9i)\u7684(de)\u4E66(sh\u016B)?\nB: \u8FD9(zh\u00E8)\u662F(sh\u00EC)\u6211(w\u01D2)\u7684(de)\u4E66(sh\u016B)\u3002",
 exampleSrc:"A: Whose book is this?\nB: This is my book.",
 funFact:"\u7684 is the single most frequently used character in modern Chinese. It appears in nearly every sentence. Think of it as the glue that connects a description to a noun: \u6211\u7684 (my), \u5927\u7684 (big one), \u7EA2\u7684 (red one)."},

{type:"teach", trg:"\u6709(y\u01D2u)", src:"to have", pos:"verb", gender:null,
 note:"Third tone. Negated with \u6CA1, NOT \u4E0D.\n\u6211\u6709 = I have. \u6211\u6CA1\u6709 = I do not have.",
 example:"A: \u4F60(n\u01D0)\u6709(y\u01D2u)\u54E5\u54E5(g\u0113ge)\u5417(ma)?\nB: \u6211(w\u01D2)\u6709(y\u01D2u)\u4E00(y\u012B)\u4E2A(g\u00E8)\u54E5\u54E5(g\u0113ge)\u3002",
 exampleSrc:"A: Do you have an older brother?\nB: I have one older brother.",
 funFact:"\u6709 is special: it is the ONLY common verb negated with \u6CA1 instead of \u4E0D. You say \u6211\u4E0D\u662F (I am not) and \u6211\u4E0D\u53EB (I am not called), but \u6211\u6CA1\u6709 (I do not have). Never say \u6211\u4E0D\u6709."},

{type:"teach", trg:"\u6CA1(m\u00E9i)", src:"not (with \u6709)", pos:"adv", gender:null,
 note:"Used specifically to negate \u6709. Tone 2 (rising).\n\u6CA1\u6709 = do not have.",
 example:"A: \u4F60(n\u01D0)\u6709(y\u01D2u)\u59B9\u59B9(m\u00E8imei)\u5417(ma)?\nB: \u6211(w\u01D2)\u6CA1(m\u00E9i)\u6709(y\u01D2u)\u59B9\u59B9(m\u00E8imei)\u3002",
 exampleSrc:"A: Do you have a younger sister?\nB: I do not have a younger sister.",
 funFact:"\u6CA1 originally meant 'to sink' or 'to submerge.' Over centuries it evolved to mean 'not have.' Chinese has two negation words: \u4E0D for general negation and \u6CA1 specifically for possession and completed actions."},

{type:"tip", title:"\u4E0D vs \u6CA1: Two Negation Words",
 text:"Chinese has two main negation words:\n\n\u4E0D(b\u00F9): general negation\n\u6211\u4E0D\u662F\u5B66\u751F = I am not a student\n\u6211\u4E0D\u53EB\u5C0F\u660E = I am not called Xiaoming\n\n\u6CA1(m\u00E9i): negates \u6709 (to have)\n\u6211\u6CA1\u6709\u54E5\u54E5 = I do not have an older brother\n\u6211\u6CA1\u6709\u4E66 = I do not have a book\n\nSimple rule: \u6709 always pairs with \u6CA1. Everything else uses \u4E0D.",
 deepDive:{title:"Why two negation words?",
  text:"\u4E0D and \u6CA1 have different origins and functions.\n\n\u4E0D negates states and habits: \u6211\u4E0D\u559D\u8336 (I do not drink tea, as a habit).\n\u6CA1 negates possession and past events: \u6211\u6CA1\u559D\u8336 (I did not drink tea, this time).\n\nAt A1 level, just remember: \u6709 takes \u6CA1. All other verbs you know (\u662F, \u53EB) take \u4E0D. This rule will serve you well until B1 when the distinction becomes more nuanced."}},

{type:"mc", q:"How do you say 'I do not have' in Chinese?",
 opts:["\u6211(w\u01D2)\u6709(y\u01D2u)\u4E0D(b\u00F9)","\u6211(w\u01D2)\u4E0D(b\u00F9)\u6709(y\u01D2u)","\u6211(w\u01D2)\u6CA1(m\u00E9i)\u6709(y\u01D2u)","\u6211(w\u01D2)\u6CA1(m\u00E9i)\u662F(sh\u00EC)"],
 ans:"\u6211(w\u01D2)\u6CA1(m\u00E9i)\u6709(y\u01D2u)",
 hint:"\u6709 is special. It pairs with a specific negation word, not the general \u4E0D."},

{type:"fb", s:"\u8FD9(zh\u00E8)\u662F(sh\u00EC)\u6211(w\u01D2){1}\u7238\u7238(b\u00E0ba)\u3002",
 a:["\u7684(de)"],
 opts:["\u7684(de)","\u6709(y\u01D2u)","\u6CA1(m\u00E9i)","\u548C(h\u00E9)"],
 hint:"Which particle connects 'I' to 'dad' to show possession, like 'my'?",
 sSrc:"This is my dad."},

{type:"teach", trg:"\u548C(h\u00E9)", src:"and", pos:"conj", gender:null,
 note:"Connects nouns or pronouns. Does NOT connect sentences.\n\u7238\u7238\u548C\u5988\u5988 = Dad and Mom.",
 example:"A: \u7238\u7238(b\u00E0ba)\u548C(h\u00E9)\u5988\u5988(m\u0101ma)\u5728(z\u00E0i)\u5BB6(ji\u0101)\u5417(ma)?\nB: \u7238\u7238(b\u00E0ba)\u5728(z\u00E0i), \u5988\u5988(m\u0101ma)\u4E0D(b\u00FA)\u5728(z\u00E0i)\u3002",
 exampleSrc:"A: Are Dad and Mom at home?\nB: Dad is, Mom is not.",
 funFact:"\u548C only links nouns: \u6211\u548C\u4F60 (you and I), \u7238\u7238\u548C\u5988\u5988 (Dad and Mom). Unlike English 'and,' you cannot use \u548C to connect two sentences. Chinese uses different words or commas for that."},

{type:"teach", trg:"\u513F\u5B50(\u00E9rzi)", src:"son", pos:"noun", gender:null,
 note:"\u513F means child, \u5B50 means child/offspring.\nTogether: specifically a male child, a son.",
 example:"A: \u4F60(n\u01D0)\u6709(y\u01D2u)\u513F\u5B50(\u00E9rzi)\u5417(ma)?\nB: \u6211(w\u01D2)\u6709(y\u01D2u)\u4E00(y\u012B)\u4E2A(g\u00E8)\u513F\u5B50(\u00E9rzi)\u3002",
 exampleSrc:"A: Do you have a son?\nB: I have one son.",
 funFact:"The character \u5B50 originally depicted a baby with outstretched arms. It is one of the oldest Chinese characters, found on oracle bones dating back over 3,000 years."},

{type:"teach", trg:"\u5973\u513F(n\u01DA\u00E9r)", src:"daughter", pos:"noun", gender:null,
 note:"\u5973 means female/woman, \u513F means child.\nTogether: specifically a female child, a daughter.",
 example:"A: \u4ED6(t\u0101)\u6709(y\u01D2u)\u5973\u513F(n\u01DA\u00E9r)\u5417(ma)?\nB: \u4ED6(t\u0101)\u6709(y\u01D2u)\u4E24(li\u01CEng)\u4E2A(g\u00E8)\u5973\u513F(n\u01DA\u00E9r)\u3002",
 exampleSrc:"A: Does he have a daughter?\nB: He has two daughters.",
 funFact:"\u5973\u513F literally means 'female child.' Chinese is very logical in building family words. The character \u5973 appears in many family terms: \u5988 (mom), \u59D0 (older sister), \u59B9 (younger sister), \u5973\u513F (daughter)."},

{type:"fb", s:"\u6211(w\u01D2)\u6709(y\u01D2u)\u4E00(y\u012B)\u4E2A(g\u00E8)\u54E5\u54E5(g\u0113ge){1}\u4E00(y\u012B)\u4E2A(g\u00E8)\u59B9\u59B9(m\u00E8imei)\u3002",
 a:["\u548C(h\u00E9)"],
 opts:["\u548C(h\u00E9)","\u7684(de)","\u6CA1(m\u00E9i)","\u662F(sh\u00EC)"],
 hint:"Which word connects two nouns, meaning 'and'?",
 sSrc:"I have one older brother {1} one younger sister."},

{type:"mc", q:"\u5979(t\u0101)\u6CA1(m\u00E9i)\u6709(y\u01D2u)\u5F1F\u5F1F(d\u00ECdi)\u3002 What does this mean?",
 opts:["She is a younger brother","She wants a younger brother","She has a younger brother","She does not have a younger brother"],
 ans:"She does not have a younger brother",
 hint:"\u6CA1\u6709 is the negation of 'to have.' The sentence denies possession of something."},

{type:"match", pairs:[
  {trg:"\u7684(de)", src:"(possessive particle)"},
  {trg:"\u6709(y\u01D2u)", src:"to have"},
  {trg:"\u6CA1(m\u00E9i)", src:"not (with \u6709)"},
  {trg:"\u548C(h\u00E9)", src:"and"},
  {trg:"\u513F\u5B50(\u00E9rzi)", src:"son"}
]},

{type:"fb", s:"\u4ED6(t\u0101){1}\u6709(y\u01D2u)\u5973\u513F(n\u01DA\u00E9r)\u3002",
 a:["\u6CA1(m\u00E9i)"],
 opts:["\u6CA1(m\u00E9i)","\u4E0D(b\u00F9)","\u7684(de)","\u548C(h\u00E9)"],
 hint:"Which negation word goes specifically before \u6709? Not the general one.",
 sSrc:"He does not have a daughter."},

{type:"mc", q:"\u6211(w\u01D2)\u7684(de)\u5BB6(ji\u0101)\u6709(y\u01D2u)\u4E94(w\u01D4)\u4E2A(g\u00E8)\u4EBA(r\u00E9n)\u3002 How many people are in the speaker's family?",
 opts:["three","four","five","six"],
 ans:"five",
 hint:"Look at the number before \u4E2A\u4EBA. That number tells you the family size."},

{type:"fb", s:"\u8FD9(zh\u00E8)\u662F(sh\u00EC)\u5979(t\u0101){1}\u5988\u5988(m\u0101ma)\u3002",
 a:["\u7684(de)"],
 opts:["\u7684(de)","\u6709(y\u01D2u)","\u548C(h\u00E9)","\u6CA1(m\u00E9i)"],
 hint:"Which particle shows that 'Mom' belongs to 'her'?",
 sSrc:"This is her mom."}
]},

// ═══ L3: This and That ═══
{id:"zhv2_u3l3", title:"This and That", icon:"\uD83D\uDC49", xp:15, board:true, steps:[
{type:"intro", title:"This and That",
 desc:"Learn to point things out with \u8FD9 (this) and \u90A3 (that), and introduce people. Also meet the word \u4EBA (person/people).",
 goals:["Use \u8FD9 and \u90A3 to point things out","Talk about people with \u4EBA","Combine demonstratives with family vocabulary"]},

{type:"teach", trg:"\u8FD9(zh\u00E8)", src:"this", pos:"pron", gender:null,
 note:"Fourth tone. Points to something nearby.\n\u8FD9\u662F = this is. \u8FD9\u4E2A = this one.",
 example:"A: \u8FD9(zh\u00E8)\u662F(sh\u00EC)\u8C01(sh\u00E9i)?\nB: \u8FD9(zh\u00E8)\u662F(sh\u00EC)\u6211(w\u01D2)\u7684(de)\u54E5\u54E5(g\u0113ge)\u3002",
 exampleSrc:"A: Who is this?\nB: This is my older brother.",
 funFact:"\u8FD9 and \u90A3 mirror English 'this/that' closely. However, Chinese uses them more flexibly. \u8FD9\u4E2A\u4EBA (this person) can also mean 'this guy' in casual speech."},

{type:"teach", trg:"\u90A3(n\u00E0)", src:"that", pos:"pron", gender:null,
 note:"Fourth tone. Points to something farther away.\n\u90A3\u662F = that is. \u90A3\u4E2A = that one.",
 example:"A: \u90A3(n\u00E0)\u662F(sh\u00EC)\u8C01(sh\u00E9i)?\nB: \u90A3(n\u00E0)\u662F(sh\u00EC)\u6211(w\u01D2)\u7684(de)\u59D0\u59D0(ji\u011Bjie)\u3002",
 exampleSrc:"A: Who is that?\nB: That is my older sister.",
 funFact:"\u90A3 is sometimes pronounced 'n\u00E8i' in casual speech, especially before measure words: \u90A3\u4E2A becomes 'n\u00E8ige.' This is a regional accent feature common in northern China."},

{type:"teach", trg:"\u4EBA(r\u00E9n)", src:"person / people", pos:"noun", gender:null,
 note:"Second tone (rising). Means both 'person' (singular) and 'people' (plural).\nContext determines the number.",
 example:"A: \u90A3(n\u00E0)\u4E2A(g\u00E8)\u4EBA(r\u00E9n)\u662F(sh\u00EC)\u8C01(sh\u00E9i)?\nB: \u90A3(n\u00E0)\u4E2A(g\u00E8)\u4EBA(r\u00E9n)\u662F(sh\u00EC)\u6211(w\u01D2)\u7684(de)\u7238\u7238(b\u00E0ba)\u3002",
 exampleSrc:"A: Who is that person?\nB: That person is my dad.",
 funFact:"The character \u4EBA looks like a person walking: two strokes forming an upside-down V, like two legs in motion. It is one of the most ancient and recognizable Chinese characters, found on the earliest oracle bones."},

{type:"tip", title:"\u8FD9 and \u90A3 with Measure Words",
 text:"\u8FD9 (this) and \u90A3 (that) follow the same rule as numbers: they need a measure word before a noun.\n\n\u8FD9\u4E2A\u4EBA = this person (\u4E2A = measure word)\n\u90A3\u4E2A\u4EBA = that person\n\u8FD9\u4E2A\u662F\u6211\u7684\u5988\u5988 = this is my mom\n\n\u8FD9\u662F without \u4E2A is also correct when introducing:\n\u8FD9\u662F\u6211\u5988\u5988 = This is my mom\n\nThe pattern: \u8FD9/\u90A3 + \u4E2A + noun."},

{type:"mc", q:"How do you say 'That is my dad' in Chinese?",
 opts:["\u6211(w\u01D2)\u662F(sh\u00EC)\u90A3(n\u00E0)\u7684(de)\u7238\u7238(b\u00E0ba)","\u8FD9(zh\u00E8)\u662F(sh\u00EC)\u6211(w\u01D2)\u7684(de)\u7238\u7238(b\u00E0ba)","\u90A3(n\u00E0)\u6709(y\u01D2u)\u6211(w\u01D2)\u7684(de)\u7238\u7238(b\u00E0ba)","\u90A3(n\u00E0)\u662F(sh\u00EC)\u6211(w\u01D2)\u7684(de)\u7238\u7238(b\u00E0ba)"],
 ans:"\u90A3(n\u00E0)\u662F(sh\u00EC)\u6211(w\u01D2)\u7684(de)\u7238\u7238(b\u00E0ba)",
 hint:"'That' points to something far away. Use the demonstrative for distance, then 'is,' then 'my dad.'"},

{type:"fb", s:"{1}\u662F(sh\u00EC)\u6211(w\u01D2)\u7684(de)\u59B9\u59B9(m\u00E8imei)\u3002",
 a:["\u8FD9(zh\u00E8)"],
 opts:["\u8FD9(zh\u00E8)","\u90A3(n\u00E0)","\u6709(y\u01D2u)","\u6CA1(m\u00E9i)"],
 hint:"The speaker is pointing to someone nearby. Which demonstrative means 'this'?",
 sSrc:"{1} is my younger sister."},

{type:"match", pairs:[
  {trg:"\u8FD9(zh\u00E8)", src:"this"},
  {trg:"\u90A3(n\u00E0)", src:"that"},
  {trg:"\u4EBA(r\u00E9n)", src:"person / people"},
  {trg:"\u5973\u513F(n\u01DA\u00E9r)", src:"daughter"},
  {trg:"\u513F\u5B50(\u00E9rzi)", src:"son"}
]},

{type:"mc", q:"\u90A3(n\u00E0)\u4E2A(g\u00E8)\u4EBA(r\u00E9n)\u662F(sh\u00EC)\u8C01(sh\u00E9i)? What does this sentence ask?",
 opts:["What does that person have?","How old is that person?","Who is that person?","Where is that person?"],
 ans:"Who is that person?",
 hint:"The question word \u8C01 asks about identity. The sentence wants to know WHO someone is."},

{type:"fb", s:"\u90A3(n\u00E0)\u4E2A(g\u00E8){1}\u662F(sh\u00EC)\u6211(w\u01D2)\u7684(de)\u59D0\u59D0(ji\u011Bjie)\u3002",
 a:["\u4EBA(r\u00E9n)"],
 opts:["\u4EBA(r\u00E9n)","\u5BB6(ji\u0101)","\u7238\u7238(b\u00E0ba)","\u597D(h\u01CEo)"],
 hint:"Which word means 'person' and fits between the measure word and \u662F?",
 sSrc:"That {1} is my older sister."},

{type:"mc", q:"How many people are in this family? \u6211(w\u01D2)\u7684(de)\u5BB6(ji\u0101)\u6709(y\u01D2u)\u7238\u7238(b\u00E0ba)\u3001\u5988\u5988(m\u0101ma)\u3001\u54E5\u54E5(g\u0113ge)\u548C(h\u00E9)\u6211(w\u01D2)\u3002",
 opts:["five","three","six","four"],
 ans:"four",
 hint:"Count each person mentioned: Dad, Mom, older brother, and the speaker. Add them up."},

{type:"fb", s:"\u6211(w\u01D2)\u6CA1(m\u00E9i)\u6709(y\u01D2u)\u5F1F\u5F1F(d\u00ECdi), \u6211(w\u01D2)\u6709(y\u01D2u)\u4E00(y\u012B)\u4E2A(g\u00E8){1}\u3002",
 a:["\u59D0\u59D0(ji\u011Bjie)"],
 opts:["\u59D0\u59D0(ji\u011Bjie)","\u7238\u7238(b\u00E0ba)","\u6CA1(m\u00E9i)","\u90A3(n\u00E0)"],
 hint:"The speaker does not have a younger brother but has one older female sibling.",
 sSrc:"I do not have a younger brother, I have one {1}."},

{type:"match", pairs:[
  {trg:"\u6211(w\u01D2)\u7684(de)\u5BB6(ji\u0101)", src:"my family"},
  {trg:"\u6CA1(m\u00E9i)\u6709(y\u01D2u)", src:"do not have"},
  {trg:"\u8FD9(zh\u00E8)\u4E2A(g\u00E8)\u4EBA(r\u00E9n)", src:"this person"},
  {trg:"\u90A3(n\u00E0)\u662F(sh\u00EC)", src:"that is"}
]}
]},

// ═══ L4: Family Review ═══
{id:"zhv2_u3l4", title:"Family Review", icon:"\u2B50", xp:15, board:true, steps:[
{type:"intro", title:"Family Review",
 desc:"Put everything together. Describe your family, introduce family members, and use all the grammar from this unit.",
 goals:["Describe a family using all vocabulary from this unit","Combine \u7684, \u6709/\u6CA1\u6709, \u8FD9/\u90A3 correctly","Answer questions about family"]},

{type:"match", pairs:[
  {trg:"\u7238\u7238(b\u00E0ba)", src:"dad"},
  {trg:"\u5988\u5988(m\u0101ma)", src:"mom"},
  {trg:"\u513F\u5B50(\u00E9rzi)", src:"son"},
  {trg:"\u5973\u513F(n\u01DA\u00E9r)", src:"daughter"},
  {trg:"\u4EBA(r\u00E9n)", src:"person"}
]},

{type:"match", pairs:[
  {trg:"\u54E5\u54E5(g\u0113ge)", src:"older brother"},
  {trg:"\u59D0\u59D0(ji\u011Bjie)", src:"older sister"},
  {trg:"\u5F1F\u5F1F(d\u00ECdi)", src:"younger brother"},
  {trg:"\u59B9\u59B9(m\u00E8imei)", src:"younger sister"},
  {trg:"\u5BB6(ji\u0101)", src:"home / family"}
]},

{type:"mc", q:"\u6211(w\u01D2)\u7684(de)\u5BB6(ji\u0101)\u6709(y\u01D2u)\u4E09(s\u0101n)\u4E2A(g\u00E8)\u4EBA(r\u00E9n): \u7238\u7238(b\u00E0ba)\u3001\u5988\u5988(m\u0101ma)\u548C(h\u00E9)\u6211(w\u01D2)\u3002 The speaker has:",
 opts:["no siblings","one older brother","two sisters","one younger sister"],
 ans:"no siblings",
 hint:"Three people total: Dad, Mom, and the speaker. Are there any brothers or sisters mentioned?"},

{type:"fb", s:"\u8FD9(zh\u00E8)\u662F(sh\u00EC)\u6211(w\u01D2)\u7684(de){1}\u3002\u5979(t\u0101)\u53EB(ji\u00E0o)\u5C0F\u7EA2(Xi\u01CEoh\u00F3ng)\u3002",
 a:["\u59B9\u59B9(m\u00E8imei)"],
 opts:["\u59B9\u59B9(m\u00E8imei)","\u54E5\u54E5(g\u0113ge)","\u7238\u7238(b\u00E0ba)","\u513F\u5B50(\u00E9rzi)"],
 hint:"The next sentence uses \u5979 (she). Which female sibling word fits here?",
 sSrc:"This is my {1}. Her name is Xiaohong."},

{type:"mc", q:"\u4ED6(t\u0101)\u6CA1(m\u00E9i)\u6709(y\u01D2u)\u59D0\u59D0(ji\u011Bjie), \u4ED6(t\u0101)\u6709(y\u01D2u)\u4E00(y\u012B)\u4E2A(g\u00E8)\u5F1F\u5F1F(d\u00ECdi)\u3002 What does this mean?",
 opts:["He has an older sister and a younger brother","He does not have an older sister but has a younger brother","He does not have a younger brother but has an older sister","He has no siblings"],
 ans:"He does not have an older sister but has a younger brother",
 hint:"\u6CA1\u6709 negates the first part, while \u6709 confirms the second. Read each clause separately."},

{type:"fb", s:"\u90A3(n\u00E0)\u4E2A(g\u00E8)\u4EBA(r\u00E9n)\u662F(sh\u00EC)\u6211(w\u01D2){1}\u5988\u5988(m\u0101ma)\u3002",
 a:["\u7684(de)"],
 opts:["\u7684(de)","\u6709(y\u01D2u)","\u548C(h\u00E9)","\u662F(sh\u00EC)"],
 hint:"Which particle shows possession between the pronoun and the family member?",
 sSrc:"That person is my mom."},

{type:"mc", q:"Which sentence is grammatically WRONG?",
 opts:["\u6211\u6CA1\u6709\u54E5\u54E5","\u6211\u4E0D\u6709\u54E5\u54E5","\u6211\u6709\u4E00\u4E2A\u54E5\u54E5","\u8FD9\u662F\u6211\u7684\u5988\u5988"],
 ans:"\u6211\u4E0D\u6709\u54E5\u54E5",
 hint:"\u6709 is negated with a specific word. Using the wrong negation word is a classic error."},

{type:"fb", s:"\u6211(w\u01D2){1}\u6709(y\u01D2u)\u59B9\u59B9(m\u00E8imei), \u4F46(d\u00E0n)\u6211(w\u01D2)\u6709(y\u01D2u)\u54E5\u54E5(g\u0113ge)\u3002",
 a:["\u6CA1(m\u00E9i)"],
 opts:["\u6CA1(m\u00E9i)","\u4E0D(b\u00F9)","\u7684(de)","\u548C(h\u00E9)"],
 hint:"Which word negates \u6709 specifically? The speaker lacks one sibling type but has another.",
 sSrc:"I do not have a younger sister, but I have an older brother."},

{type:"mc", q:"\u5979(t\u0101)\u6709(y\u01D2u)\u4E24(li\u01CEng)\u4E2A(g\u00E8)\u513F\u5B50(\u00E9rzi)\u548C(h\u00E9)\u4E00(y\u012B)\u4E2A(g\u00E8)\u5973\u513F(n\u01DA\u00E9r)\u3002 How many children does she have?",
 opts:["one","two","three","four"],
 ans:"three",
 hint:"Add up: two sons plus one daughter. Count the total number of children."},

{type:"match", pairs:[
  {trg:"\u6211\u7684\u5BB6(w\u01D2 de ji\u0101)", src:"my family"},
  {trg:"\u6CA1\u6709(m\u00E9i y\u01D2u)", src:"do not have"},
  {trg:"\u8FD9\u4E2A\u4EBA(zh\u00E8 g\u00E8 r\u00E9n)", src:"this person"},
  {trg:"\u548C(h\u00E9)", src:"and"},
  {trg:"\u90A3(n\u00E0)", src:"that"}
]},

{type:"fb", s:"\u6211(w\u01D2)\u7684(de)\u5BB6(ji\u0101)\u6709(y\u01D2u)\u56DB(s\u00EC)\u4E2A(g\u00E8){1}\u3002",
 a:["\u4EBA(r\u00E9n)"],
 opts:["\u4EBA(r\u00E9n)","\u5BB6(ji\u0101)","\u7238\u7238(b\u00E0ba)","\u6709(y\u01D2u)"],
 hint:"Which word means 'people' and completes the phrase 'four (measure word) ___'?",
 sSrc:"My family has four {1}."},

{type:"mc", q:"\u8FD9(zh\u00E8)\u662F(sh\u00EC)\u6211(w\u01D2)\u7684(de)\u5BB6(ji\u0101)\u3002 What does \u7684(de) do here?",
 opts:["It negates the sentence","It connects two sentences","It shows possession: my","It asks a question"],
 ans:"It shows possession: my",
 hint:"\u7684 links the pronoun \u6211 to \u5BB6, showing that the family belongs to the speaker."}
]}

]};

export default UNIT_03;
