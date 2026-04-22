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
 opts:["\u54E5\u54E5(g\u0113ge)","\u5F1F\u5F1F(d\u00ECdi)","\u59B9\u59B9(m\u00E8imei)","\u59D0\u59D0(ji\u011Bjie)"],
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
 opts:["younger sister","older brother","older sister","younger brother"],
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
 example:"A: \u8FD9(zh\u00E8)\u662F(sh\u00EC)\u8C01(sh\u00E9i)\u7684(de)\u54E5\u54E5(g\u0113ge)?\nB: \u8FD9(zh\u00E8)\u662F(sh\u00EC)\u6211(w\u01D2)\u7684(de)\u54E5\u54E5(g\u0113ge)\u3002",
 exampleSrc:"A: Whose older brother is this?\nB: This is my older brother.",
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
 opts:["She does not have a younger brother","She is a younger brother","She wants a younger brother","She has a younger brother"],
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
 opts:["four","five","six","three"],
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
 opts:["Who is that person?","Where is that person?","What does that person have?","How old is that person?"],
 ans:"Who is that person?",
 hint:"The question word \u8C01 asks about identity. The sentence wants to know WHO someone is."},

{type:"fb", s:"\u90A3(n\u00E0)\u4E2A(g\u00E8){1}\u662F(sh\u00EC)\u6211(w\u01D2)\u7684(de)\u59D0\u59D0(ji\u011Bjie)\u3002",
 a:["\u4EBA(r\u00E9n)"],
 opts:["\u4EBA(r\u00E9n)","\u5BB6(ji\u0101)","\u7238\u7238(b\u00E0ba)","\u597D(h\u01CEo)"],
 hint:"Which word means 'person' and fits between the measure word and \u662F?",
 sSrc:"That {1} is my older sister."},

{type:"mc", q:"How many people are in this family? \u6211(w\u01D2)\u7684(de)\u5BB6(ji\u0101)\u6709(y\u01D2u)\u7238\u7238(b\u00E0ba)\u3001\u5988\u5988(m\u0101ma)\u3001\u54E5\u54E5(g\u0113ge)\u548C(h\u00E9)\u6211(w\u01D2)\u3002",
 opts:["six","four","five","three"],
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
 opts:["\u6211\u6709\u4E00\u4E2A\u54E5\u54E5","\u8FD9\u662F\u6211\u7684\u5988\u5988","\u6211\u6CA1\u6709\u54E5\u54E5","\u6211\u4E0D\u6709\u54E5\u54E5"],
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
 opts:["It asks a question","It negates the sentence","It connects two sentences","It shows possession: my"],
 ans:"It shows possession: my",
 hint:"\u7684 links the pronoun \u6211 to \u5BB6, showing that the family belongs to the speaker."}
]},

// ═══ L5: Family Conversations. HSK 1 Essentials ═══
{id:"zhv2_u3l5", title:"Who? Pets? Essential Words", icon:"🐾", xp:15, board:true, steps:[
{type:"intro", title:"Who? Pets? Essential Words",
 desc:"Learn five essential HSK 1 words: the question word 'who,' the negative 'don't have,' plus the Chinese words for dog, cat, and the Chinese language itself.",
 goals:["Ask 'who' with 谁","Use 没有 as a standalone negative","Name common pets in Chinese"]},

{type:"teach", trg:"谁(shuí)", src:"who", pos:"pron", gender:null,
 note:"Question word meaning 'who' or 'whose.'\nStays in the same position as the answer.",
 example:"A: 那(nà)个(gè)人(rén)是(shì)谁(shuí)？\nB: 那(nà)是(shì)我(wǒ)的(de)妈妈(māma)。",
 exampleSrc:"A: Who is that person?\nB: That is my mom.",
 funFact:"谁 can also be pronounced shéi, both tones are correct. You will hear both in natural speech. The shéi pronunciation is more common in northern China."},

{type:"teach", trg:"没有(méiyǒu)", src:"to not have / there is no", pos:"verb", gender:null,
 note:"The complete negative form of 有 (to have).\n没有 = do not have. 没 alone also appears before 有 in sentences.",
 example:"A: 你(nǐ)有(yǒu)弟弟(dìdi)吗(ma)？\nB: 没有(méiyǒu)，我(wǒ)没有(méiyǒu)弟弟(dìdi)。",
 exampleSrc:"A: Do you have a younger brother?\nB: No, I do not have a younger brother.",
 funFact:"没有 is often used as a one-word answer to yes/no questions with 有: 'Do you have a car?' '没有.' It works like English 'nope', short, complete, and conversational."},

{type:"teach", trg:"狗(gǒu)", src:"dog", pos:"noun", gender:null,
 note:"Third tone (dipping). The most common pet in China.\nThe dog radical 犬 appears in many animal characters.",
 example:"A: 你(nǐ)家(jiā)有(yǒu)狗(gǒu)吗(ma)？\nB: 有(yǒu)，我(wǒ)家(jiā)有(yǒu)狗(gǒu)。",
 exampleSrc:"A: Does your family have a dog?\nB: Yes, my family has a dog.",
 funFact:"The year of the Dog (狗年) in the Chinese zodiac comes every twelve years. People born in Dog years are said to be loyal, honest, and hardworking. The dog has been a close companion in China for thousands of years."},

{type:"teach", trg:"猫(māo)", src:"cat", pos:"noun", gender:null,
 note:"First tone (high flat). Cats are beloved pets in China.\n猫 sounds somewhat like a meow, it may be onomatopoeic.",
 example:"A: 你(nǐ)喜欢(xǐhuan)狗(gǒu)还是(háishi)猫(māo)？\nB: 我(wǒ)喜欢(xǐhuan)猫(māo)！",
 exampleSrc:"A: Do you prefer dogs or cats?\nB: I like cats!",
 funFact:"The Chinese internet has a famous saying: 吸猫 (xī māo), literally 'cat sniffing,' meaning the joy of being around cats. Chinese social media is full of cat content, just like everywhere else in the world."},

{type:"teach", trg:"汉语(Hànyǔ)", src:"Chinese language / Mandarin", pos:"noun", gender:null,
 note:"汉 = Han (ethnic Chinese). 语 = language.\nAlso called 普通话(pǔtōnghuà) for standard Mandarin.",
 example:"A: 这(zhè)是(shì)汉语(Hànyǔ)吗(ma)？\nB: 是(shì)，这(zhè)是(shì)汉语(Hànyǔ)！",
 exampleSrc:"A: Is this Chinese?\nB: Yes, this is Chinese!",
 funFact:"汉语 is named after the Han dynasty (206 BCE–220 CE), which unified China and spread Chinese culture. The Han people make up about 92% of China's population today, making 汉语 the world's most-spoken first language."},

{type:"mc", q:"你家有没有狗(gǒu)？ What is this question asking?",
 opts:["Does your family have a dog?","Where is your dog?","How many dogs do you have?","Do you have a cat?"],
 ans:"Does your family have a dog?",
 hint:"家 is the word for household members. 有没有 is a yes/no pattern. Check which animal appears."},

{type:"match", pairs:[
  {trg:"谁(shuí)", src:"who"},
  {trg:"没有(méiyǒu)", src:"to not have"},
  {trg:"狗(gǒu)", src:"dog"},
  {trg:"猫(māo)", src:"cat"},
  {trg:"汉语(Hànyǔ)", src:"Chinese language"}
]},

{type:"fb", s:"那(nà)个(gè)人(rén)是(shì){1}？",
 a:["谁(shuí)"],
 opts:["谁(shuí)","什么(shénme)","哪(nǎ)","这(zhè)"],
 hint:"Which question word asks about a person's identity, 'who' rather than 'what' or 'which'?",
 sSrc:"Who is that person?"},

{type:"mc", q:"没有(méiyǒu) is the negative form of which verb?",
 opts:["不(bù)","有(yǒu)","好(hǎo)","是(shì)"],
 ans:"有(yǒu)",
 hint:"This verb means 'to have.' Its special negative is 没有, not 不有."},

{type:"fb", s:"A: 你(nǐ)有(yǒu)猫(māo)吗(ma)？\nB: {1}，我(wǒ)没(méi)有(yǒu)猫(māo)。",
 a:["没有(méiyǒu)"],
 opts:["没有(méiyǒu)","不是(búshì)","有(yǒu)","好(hǎo)"],
 hint:"This is a negative answer to 'do you have.' The verb 有 takes a special short negation word, not the general 不.",
 sSrc:"A: Do you have a cat?\nB: {1}, I do not have a cat."},

{type:"mc", q:"汉语(Hànyǔ) is named after which Chinese dynasty?",
 opts:["Qin dynasty","Ming dynasty","Han dynasty","Tang dynasty"],
 ans:"Han dynasty",
 hint:"The 汉 in 汉语 names the ruling group whose period (206 BCE–220 CE) unified the country."}
]},

// ═══ L5b: Siblings and Parents. Hierarchy Focus ═══
{id:"zhv2_u3l_sib", title:"兄弟姐妹(xiōngdì jiěmèi)", icon:"👨‍👩‍👧‍👦", xp:15, board:true, steps:[
{type:"intro", title:"Siblings and Parents",
 desc:"Master the Chinese words for siblings and parents. Chinese distinguishes older vs younger siblings, a key cultural concept rooted in Confucian family hierarchy.",
 goals:["Master older/younger sibling distinction","Review parent vocabulary","Describe your family members"]},

{type:"tip", title:"Chinese Family Hierarchy",
 text:"Chinese family vocabulary encodes birth order by design.\n\n哥哥(gēge) = older brother\n弟弟(dìdi) = younger brother\n姐姐(jiějie) = older sister\n妹妹(mèimei) = younger sister\n\nThere is no single word for 'brother' or 'sister.' You must always specify older or younger. This reflects Confucian values: the older sibling holds authority and responsibility; the younger sibling shows respect.\n\nParents reinforce this structure:\n爸爸(bàba) = dad\n妈妈(māma) = mom\n\nIn Chinese families, addressing relatives by their exact hierarchical title (not just their name) is a mark of respect.",
 deepDive:{title:"Birth order in Chinese culture",
  text:"The four sibling words reveal how deeply birth order shapes Chinese social life.\n\nOlder siblings (哥/姐) are expected to set an example and look after younger ones. Younger siblings (弟/妹) show deference in speech and at the dinner table.\n\nThe formal written compounds 兄弟(xiōngdì, brothers) and 姐妹(jiěmèi, sisters) always list the older sibling character first. Order matters in the language because it mirrors real family structure.\n\nFormal titles matter too: calling an older person 哥哥 or 姐姐 even outside the family, as a store clerk or coworker, is a compliment that signals friendly respect."}},

{type:"mc", q:"Chinese has no single word for 'brother.' Which two words together cover the concept?",
 opts:["哥哥(gēge) and 弟弟(dìdi)","妹妹(mèimei) and 弟弟(dìdi)","爸爸(bàba) and 妈妈(māma)","哥哥(gēge) and 姐姐(jiějie)"],
 ans:"哥哥(gēge) and 弟弟(dìdi)",
 hint:"Chinese has two male-sibling words, one per birth-order position. Neither is for a female family member."},

{type:"match", pairs:[
  {trg:"哥哥(gēge)", src:"older brother"},
  {trg:"姐姐(jiějie)", src:"older sister"},
  {trg:"弟弟(dìdi)", src:"younger brother"},
  {trg:"妹妹(mèimei)", src:"younger sister"},
  {trg:"爸爸(bàba)", src:"dad"}
]},

{type:"fb", s:"我(wǒ)有(yǒu)一(yī)个(gè){1}和(hé)一(yī)个(gè)妹妹(mèimei)。",
 a:["哥哥(gēge)"],
 opts:["哥哥(gēge)","弟弟(dìdi)","姐姐(jiějie)","妈妈(māma)"],
 hint:"The blank is a male sibling who came before the speaker in birth order. The next word is 妹妹.",
 sSrc:"I have one {1} and one younger sister."},

{type:"mc", q:"你(nǐ)有(yǒu)姐姐(jiějie)吗(ma)？ What is the question asking?",
 opts:["Do you have a younger brother?","Do you have an older sister?","Do you have an older brother?","Do you have a younger sister?"],
 ans:"Do you have an older sister?",
 hint:"The character 姐 encodes birth position and gender. The 女 radical points to which sex. Check which answer option matches both clues."},

{type:"fb", s:"爸爸(bàba)和(hé){1}都(dōu)在(zài)家(jiā)。",
 a:["妈妈(māma)"],
 opts:["妈妈(māma)","哥哥(gēge)","儿子(érzi)","弟弟(dìdi)"],
 hint:"Which word pairs with 爸爸 to name both parents? Think of the other parent.",
 sSrc:"Dad and {1} are both at home."},

{type:"mc", q:"Why does Chinese distinguish older vs younger siblings in its vocabulary?",
 opts:["Because older and younger sound completely different in pronunciation","To match grammatical gender like European languages","Because Confucian values tie birth order to family authority and responsibility","To make learning easier for beginners"],
 ans:"Because Confucian values tie birth order to family authority and responsibility",
 hint:"The tip describes a Chinese philosophical tradition. The correct option names a specific teaching about society and the role each person plays within it."},

{type:"fb", s:"她(tā)没有(méiyǒu){1}，但(dàn)她(tā)有(yǒu)一(yī)个(gè)弟弟(dìdi)。",
 a:["姐姐(jiějie)"],
 opts:["姐姐(jiějie)","哥哥(gēge)","妈妈(māma)","妹妹(mèimei)"],
 hint:"The sentence describes a female relative that she does not have. The second clause gives a clue about the gender and direction of the missing person.",
 sSrc:"She does not have an {1}, but she has a younger brother."},

{type:"match", pairs:[
  {trg:"妈妈(māma)", src:"mom"},
  {trg:"姐姐(jiějie)", src:"older sister"},
  {trg:"弟弟(dìdi)", src:"younger brother"},
  {trg:"妹妹(mèimei)", src:"younger sister"},
  {trg:"哥哥(gēge)", src:"older brother"}
]},

{type:"mc", q:"兄弟(xiōngdì) means brothers in formal Chinese. Which character always comes first, and why?",
 opts:["The order is random in formal Chinese","兄弟 refers to sisters, not brothers","弟 comes first, younger siblings are more important","兄 comes first, the older sibling is listed first, reflecting hierarchy"],
 ans:"兄 comes first, the older sibling is listed first, reflecting hierarchy",
 hint:"The deep dive explains which character in 兄弟 leads the compound. Notice that Chinese social structure influenced the written sequence of these two characters."}
]},

// ═══ L6: Spouses and Children. HSK 2 Family ═══
{id:"zhv2_u3l6", title:"妻子丈夫孩子 Spouses and Children", icon:"👨‍👩‍👧", xp:15, board:true, steps:[
{type:"intro", title:"Spouses and Children",
 desc:"Expand your family vocabulary to talk about spouses and children. Learn three essential HSK 2 family words and two adjectives for describing people.",
 goals:["Name spouses with 妻子 and 丈夫","Use 孩子 to talk about children","Describe people as young or cute"]},

{type:"teach", trg:"妻子(qīzi)", src:"wife", pos:"noun", gender:null,
 note:"Formal word for wife. 妻 is the base, 子 is a common noun suffix.\nMore informal: 老婆(lǎopo).",
 example:"A: 你(nǐ)妻子(qīzi)叫(jiào)什么(shénme)名字(míngzi)？\nB: 我(wǒ)妻子(qīzi)叫(jiào)李(Lǐ)梅(Méi)。",
 exampleSrc:"A: What is your wife's name?\nB: My wife's name is Li Mei.",
 funFact:"妻 is an ancient character showing a woman with a decorative hairpin being led by a hand, a reference to traditional wedding ceremonies. The modern meaning is simply 'wife,' and the character has appeared in Chinese texts for over 3,000 years."},

{type:"teach", trg:"丈夫(zhàngfu)", src:"husband", pos:"noun", gender:null,
 note:"Formal word for husband. The second syllable is neutral tone.\nMore informal: 老公(lǎogōng).",
 example:"A: 她(tā)丈夫(zhàngfu)在(zài)哪(nǎ)里(lǐ)工作(gōngzuò)？\nB: 她(tā)丈夫(zhàngfu)在(zài)学校(xuéxiào)工作(gōngzuò)。",
 exampleSrc:"A: Where does her husband work?\nB: Her husband works at a school.",
 funFact:"丈 is an old unit of length, about 3.3 metres, the height of a tall, impressive man. Historically, a 丈夫 was literally a 'man of stature.' The meaning shifted to 'husband,' but the idea of a capable, upstanding man remains embedded in the word."},

{type:"teach", trg:"孩子(háizi)", src:"child / children", pos:"noun", gender:null,
 note:"The most common word for child. Used for boys or girls.\n子 is a neutral noun suffix. Plural implied by context.",
 example:"A: 你(nǐ)有(yǒu)孩子(háizi)吗(ma)？\nB: 有(yǒu)，我(wǒ)有(yǒu)两(liǎng)个(gè)孩子(háizi)。",
 exampleSrc:"A: Do you have children?\nB: Yes, I have two children.",
 funFact:"孩 originally meant a baby who is still teething. The tooth radical 牙 is hidden inside 孩. Chinese etymology often encodes developmental stages: 孩子 captures that early period when a child is growing their first teeth, a universal milestone across cultures."},

{type:"teach", trg:"可爱(kě'ài)", src:"cute / adorable", pos:"adj", gender:null,
 note:"可 (can/worthy of) + 爱 (love). Literally: worthy of love.\nUsed for children, animals, and things that are sweet or charming.",
 example:"A: 你(nǐ)的(de)孩子(háizi)真(zhēn)可爱(kě'ài)！\nB: 谢谢(xièxie)，他(tā)很(hěn)活泼(huópo)。",
 exampleSrc:"A: Your child is really cute!\nB: Thank you, he is very lively.",
 funFact:"可爱 is one of the most widely used Chinese adjectives on social media. Short-video platforms are full of 可爱 videos of children, animals, and even food. The word jumped into East Asian pop culture globally, the Japanese word for cute, 可愛い (kawaii), uses the exact same characters."},

{type:"teach", trg:"年轻(niánqīng)", src:"young", pos:"adj", gender:null,
 note:"年 (year) + 轻 (light/mild). Literally: light in years.\nThe opposite of 老 (old, already taught in Unit 10).",
 example:"A: 她(tā)看(kàn)起来(qǐlái)很(hěn)年轻(niánqīng)！\nB: 是(shì)的(de)，她(tā)只有(zhǐyǒu)三十(sānshí)岁(suì)。",
 exampleSrc:"A: She looks very young!\nB: Yes, she is only thirty years old.",
 funFact:"轻 means 'light' in the sense of weight. To be young is to carry few years lightly. Chinese often uses physical weight metaphors for life stages: 年轻 (light years = young), while the burden of age grows heavier. A beautiful metaphor built into the word itself."},

{type:"mc", q:"Which word is the formal term for 'wife'?",
 opts:["妻子(qīzi)","年轻(niánqīng)","孩子(háizi)","丈夫(zhàngfu)"],
 ans:"妻子(qīzi)",
 hint:"This word refers to a female spouse. Think of the two characters: one is the base form for wife, the other is a common noun suffix."},

{type:"match", pairs:[
  {trg:"妻子(qīzi)", src:"wife"},
  {trg:"丈夫(zhàngfu)", src:"husband"},
  {trg:"孩子(háizi)", src:"child"},
  {trg:"可爱(kě'ài)", src:"cute"},
  {trg:"年轻(niánqīng)", src:"young"}
]},

{type:"fb", s:"你(nǐ)有(yǒu){1}吗(ma)？",
 a:["孩子(háizi)"],
 opts:["孩子(háizi)","妻子(qīzi)","丈夫(zhàngfu)","年轻(niánqīng)"],
 hint:"Which word means 'children' and would naturally follow 有 in a question about family?",
 sSrc:"Do you have {1}?"},

{type:"mc", q:"你的孩子(háizi)真(zhēn)可爱(kě'ài)！ What is the speaker saying?",
 opts:["Your child is very smart","Your child is really cute","Your child is very busy","Your child is very young"],
 ans:"Your child is really cute",
 hint:"可爱 combines 可 (worthy of) and 爱 (love). It describes something sweet and charming."},

{type:"fb", s:"她(tā)很(hěn){1}，只有(zhǐyǒu)二十五(èrshíwǔ)岁(suì)。",
 a:["年轻(niánqīng)"],
 opts:["年轻(niánqīng)","可爱(kě'ài)","忙(máng)","好(hǎo)"],
 hint:"Which adjective describes someone who has few years, the opposite of 老 (old)?",
 sSrc:"She is very {1}, only twenty-five years old."},

{type:"mc", q:"丈夫(zhàngfu) literally means:",
 opts:["a family man","a kind man","a man of stature (from an old unit of height)","a working man"],
 ans:"a man of stature (from an old unit of height)",
 hint:"丈 is an old measurement … for a tall person's …. The etymology reflects the idea of a capable, upstanding figure."},

{type:"match", pairs:[
  {trg:"妻子(qīzi)", src:"wife"},
  {trg:"丈夫(zhàngfu)", src:"husband"},
  {trg:"孩子(háizi)", src:"child"},
  {trg:"年轻(niánqīng)", src:"young"},
  {trg:"可爱(kě'ài)", src:"cute / adorable"}
]}
]}

]};

export default UNIT_03;
