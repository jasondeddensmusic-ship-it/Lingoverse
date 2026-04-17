// Chinese V2 Unit 02. Numbers, Age and Time (A1.1)
// HSK 1 aligned. Hanzi+pinyin notation throughout.

const UNIT_02 = {
  n:2, lang:"zh", srcLang:"en", track:"v2",
  title:"一二三", sub:"Numbers, Age and Time",
  icon:"\uD83D\uDD22", level:"A1.1", color:"#7B5EE8",
  lessons:[

// ═══ Lesson 1: Numbers 1-10 ═══
{id:"zhv2_u2l1", title:"一二三 Numbers 1-10", icon:"\uD83D\uDD22", xp:15, board:true, steps:[
  {type:"intro", title:"一二三 Numbers 1-10",
   desc:"Learn to count from zero to ten in Chinese. Numbers are the building blocks of dates, prices, phone numbers, and ages.",
   goals:["Count from zero to ten in Chinese","Recognize Chinese number characters","Understand the logic of the Chinese number system"]},

  {type:"tip", title:"Chinese Numbers: Beautifully Simple",
   text:"Chinese numbers are one of the easiest parts of the language. Each number from 0-10 is a single character with a single syllable.\n\nUnlike English (eleven, twelve, thirteen...), Chinese builds ALL larger numbers from these 11 building blocks:\n\n11 = ten-one (十一)\n20 = two-ten (二十)\n99 = nine-ten-nine (九十九)\n\nMaster 0-10 and you can count to 99.",
   deepDive:{title:"Why Chinese math is easier",
    text:"Studies show Chinese-speaking children learn to count faster than English-speaking children. The reason is transparency.\n\nEnglish: eleven, twelve, thirteen (irregular names)\nChinese: 十一 (ten-one), 十二 (ten-two), 十三 (ten-three)\n\nThe Chinese system makes the base-10 structure visible. A child hearing 二十三 (two-ten-three) immediately understands 23 = 2 tens + 3 ones. An English child hearing 'twenty-three' has no such clue."}},

  {type:"teach", trg:"一(yī)", src:"one", pos:"num", gender:null,
   note:"The simplest character: one horizontal stroke.\nTone 1 (high flat) when counting.",
   example:"A: 一(yī)、二(èr)、三(sān)!\nB: 好(hǎo)! 你(nǐ)会(huì)数(shǔ)数(shù)了(le)!",
   exampleSrc:"A: One, two, three!\nB: Great! You can count now!",
   funFact:"The character 一 is literally one horizontal line. Two lines stacked = 二 (two). Three lines = 三 (three). Ancient Chinese counting made visible."},

  {type:"teach", trg:"二(èr)", src:"two", pos:"num", gender:null,
   note:"Two horizontal strokes. Tone 4 (falling).\nUsed when counting or in numbers like 12, 22.",
   example:"A: 你(nǐ)有(yǒu)几(jǐ)个(gè)?\nB: 我(wǒ)有(yǒu)二(èr)个(gè)。",
   exampleSrc:"A: How many do you have?\nB: I have two.",
   funFact:"二 is used for counting and in larger numbers (12 = 十二). But when you say 'two of something,' you often use 两 (liǎng) instead. More on that later."},

  {type:"teach", trg:"三(sān)", src:"three", pos:"num", gender:null,
   note:"Three horizontal strokes. Tone 1 (high flat).",
   example:"A: 三(sān)加(jiā)三(sān)是(shì)几(jǐ)?\nB: 三(sān)加(jiā)三(sān)是(shì)六(liù)!",
   exampleSrc:"A: What is three plus three?\nB: Three plus three is six!",
   funFact:"After 三, the pattern of stacking lines stops. Four is NOT four lines. Instead, Chinese uses a completely different character: 四. Why? Four lines would be too hard to distinguish from three."},

  {type:"teach", trg:"四(sì)", src:"four", pos:"num", gender:null,
   note:"Tone 4 (falling). Often considered unlucky in Chinese culture.",
   example:"A: 你(nǐ)住(zhù)几(jǐ)楼(lóu)?\nB: 我(wǒ)住(zhù)四(sì)楼(lóu)。",
   exampleSrc:"A: Which floor do you live on?\nB: I live on the fourth floor.",
   funFact:"Four sounds like 死 (sǐ, death). Many Chinese buildings skip the 4th floor, just as some Western buildings skip 13. Phone numbers and license plates with 四 are cheaper."},

  {type:"teach", trg:"五(wǔ)", src:"five", pos:"num", gender:null,
   note:"Tone 3 (dipping). The middle number when counting on one hand.",
   example:"A: 五(wǔ)个(gè)人(rén)。\nB: 好(hǎo)的(de)!",
   exampleSrc:"A: Five people.\nB: All right!",
   funFact:"In Chinese hand gestures, five is shown with an open palm, all five fingers up. The same as in the West. But 6-10 are shown on ONE hand using special gestures unique to China."},

  {type:"match", pairs:[
    {trg:"一(yī)", src:"one"},
    {trg:"二(èr)", src:"two"},
    {trg:"三(sān)", src:"three"},
    {trg:"四(sì)", src:"four"},
    {trg:"五(wǔ)", src:"five"}
  ]},

  {type:"teach", trg:"六(liù)", src:"six", pos:"num", gender:null,
   note:"Tone 4 (falling). Considered a lucky number.",
   example:"A: 六(liù)是(shì)好(hǎo)数字(shùzì)!\nB: 对(duì)! 六(liù)六(liù)大(dà)顺(shùn)!",
   exampleSrc:"A: Six is a good number!\nB: Right! Double six, great luck!",
   funFact:"六 is lucky because it sounds like 溜 (liù, smooth/flowing). The phrase 六六大顺 means 'everything goes smoothly.' Many Chinese people love the number 6."},

  {type:"teach", trg:"七(qī)", src:"seven", pos:"num", gender:null,
   note:"Tone 1 (high flat). The hand gesture looks like pointing a finger.",
   example:"A: 一(yī)个(gè)星期(xīngqī)有(yǒu)七(qī)天(tiān)。\nB: 对(duì)!",
   exampleSrc:"A: One week has seven days.\nB: Correct!",
   funFact:"The Qixi Festival (七夕, seventh evening) on the 7th day of the 7th month is Chinese Valentine's Day. Seven has romantic associations in Chinese culture."},

  {type:"teach", trg:"八(bā)", src:"eight", pos:"num", gender:null,
   note:"Tone 1 (high flat). The luckiest number in Chinese culture.",
   example:"A: 八(bā)是(shì)最(zuì)好(hǎo)的(de)数字(shùzì)!\nB: 对(duì), 八(bā)八(bā)大(dà)发(fā)!",
   exampleSrc:"A: Eight is the best number!\nB: Right, double eight, great fortune!",
   funFact:"八 sounds like 发 (fā, prosper/wealth). The Beijing Olympics opened on 08/08/08 at 8:08 PM. Phone numbers with 8s sell for thousands of dollars."},

  {type:"teach", trg:"九(jiǔ)", src:"nine", pos:"num", gender:null,
   note:"Tone 3 (dipping). Associated with longevity.",
   example:"A: 九(jiǔ)加(jiā)一(yī)是(shì)十(shí)。\nB: 对(duì)!",
   exampleSrc:"A: Nine plus one is ten.\nB: Correct!",
   funFact:"九 sounds like 久 (jiǔ, long-lasting). The number 9 symbolizes eternity. The Forbidden City has 9,999 rooms. Gifts of 99 or 999 roses mean 'forever love.'"},

  {type:"teach", trg:"十(shí)", src:"ten", pos:"num", gender:null,
   note:"Tone 2 (rising). Looks like a cross or plus sign.",
   example:"A: 我(wǒ)有(yǒu)十(shí)个(gè)!\nB: 十(shí)个(gè)? 好(hǎo)多(duō)!",
   exampleSrc:"A: I have ten!\nB: Ten? So many!",
   funFact:"The character 十 looks like a cross. Some scholars believe it represents the four directions plus the center. All numbers from 11-99 are built using 十 as the base."},

  {type:"match", pairs:[
    {trg:"六(liù)", src:"six"},
    {trg:"七(qī)", src:"seven"},
    {trg:"八(bā)", src:"eight"},
    {trg:"九(jiǔ)", src:"nine"},
    {trg:"十(shí)", src:"ten"}
  ]},

  {type:"teach", trg:"零(líng)", src:"zero", pos:"num", gender:null,
   note:"Tone 2 (rising). Used in phone numbers, room numbers, and math.",
   example:"A: 你(nǐ)的(de)房间(fángjiān)是(shì)零(líng)五(wǔ)号(hào)。\nB: 好(hǎo)的(de), 谢谢(xièxie)!",
   exampleSrc:"A: Your room is number 05.\nB: OK, thanks!",
   funFact:"The concept of zero reached China from India via the Silk Road. In phone numbers, Chinese people often say 零 (líng) for each 0, or sometimes 洞 (dòng, hole) in military contexts."},

  {type:"tip", title:"Chinese Number Hand Gestures",
   text:"Chinese people can show numbers 1-10 on ONE hand:\n\n1-5: Same as Western (hold up 1-5 fingers)\n6: Thumb + pinky extended (like a phone gesture)\n7: Thumb + index + middle fingertips touching\n8: Thumb + index finger in an L shape\n9: Index finger curled like a hook\n10: Fist, or cross index fingers to form 十\n\nThese gestures are essential at markets where it is too noisy to talk."},

  {type:"mc",
   q:"八(bā) is considered the luckiest number. What does it sound like?",
   opts:["发(fā) prosper","好(hǎo) good","死(sǐ) death","久(jiǔ) long-lasting"],
   ans:"发(fā) prosper",
   hint:"This is why the Beijing Olympics started on 08/08/08 at 8:08 PM."},

  {type:"fb",
   s:"一(yī)、二(èr)、三(sān)、{1}、五(wǔ)",
   a:["四(sì)"],
   opts:["四(sì)","六(liù)","八(bā)","十(shí)"],
   hint:"Count in order. Which number comes between three and five?",
   sSrc:"One, two, three, {1}, five"},

  {type:"mc",
   q:"Which number is considered unlucky because it sounds like 'death'?",
   opts:["九(jiǔ)","三(sān)","四(sì)","七(qī)"],
   ans:"四(sì)",
   hint:"Many buildings in China skip this floor number entirely."},

  {type:"fb",
   s:"六(liù)、七(qī)、{1}、九(jiǔ)、十(shí)",
   a:["八(bā)"],
   opts:["八(bā)","五(wǔ)","三(sān)","零(líng)"],
   hint:"Count in order. Which number fits between seven and nine?",
   sSrc:"Six, seven, {1}, nine, ten"},

  {type:"match", pairs:[
    {trg:"零(líng)", src:"zero"},
    {trg:"四(sì)", src:"four"},
    {trg:"八(bā)", src:"eight"},
    {trg:"十(shí)", src:"ten"},
    {trg:"六(liù)", src:"six"}
  ]},

  {type:"mc",
   q:"三(sān) 加(jiā) 五(wǔ) 是(shì) 几(jǐ)?",
   opts:["六(liù)","九(jiǔ)","七(qī)","八(bā)"],
   ans:"八(bā)",
   hint:"This is a simple addition problem: 3 + 5 = ?"},

  {type:"mc",
   q:"What does 零(líng) mean?",
   opts:["ten","zero","one","five"],
   ans:"zero",
   hint:"This number represents nothing. Used in phone numbers and room numbers."}
]},

// ═══ Lesson 2: How Old Are You? ═══
{id:"zhv2_u2l2", title:"你几岁？ How Old Are You?", icon:"\uD83C\uDF82", xp:15, board:true, steps:[
  {type:"intro", title:"你几岁？ How Old Are You?",
   desc:"Learn to ask and tell your age, use measure words, and understand the difference between 二 and 两. Age is one of the first things Chinese people ask about.",
   goals:["Ask and answer questions about age","Understand Chinese measure words","Know when to use 两 vs 二"]},

  {type:"teach", trg:"几(jǐ)", src:"how many (small number)", pos:"pron", gender:null,
   note:"Question word for small numbers (usually under 10).\nTone 3 (dipping).",
   example:"A: 你(nǐ)有(yǒu)几(jǐ)个(gè)?\nB: 我(wǒ)有(yǒu)三(sān)个(gè)。",
   exampleSrc:"A: How many do you have?\nB: I have three.",
   funFact:"几 is for small, countable numbers. For larger quantities (How much money? How many people at a concert?), Chinese uses 多少 (duōshao) instead. Think of 几 as 'how many (on one hand).'"},

  {type:"teach", trg:"岁(suì)", src:"years old", pos:"noun", gender:null,
   note:"Measure word for age. Always follows the number.\n三岁 = three years old.",
   example:"A: 你(nǐ)几(jǐ)岁(suì)?\nB: 我(wǒ)五(wǔ)岁(suì)!",
   exampleSrc:"A: How old are you?\nB: I am five years old!",
   funFact:"Asking age is very common and not considered rude in China. People ask children, friends, and even new acquaintances their age. It helps establish social hierarchy and proper terms of address."},

  {type:"tip", title:"Asking Age in Chinese",
   text:"Chinese has different ways to ask age depending on who you are talking to:\n\nTo children (under ~10): 你几岁? (How many years old?)\nTo peers/adults: 你多大? (How old are you?)\nTo elderly people: 您多大年纪? (What is your age? very polite)\n\nUsing the wrong form can be rude. 你几岁 to an adult sounds like you are treating them like a child.",
   deepDive:{title:"Why age matters in Chinese culture",
    text:"In Chinese culture, age determines social behavior. Older people are addressed differently (with titles like 哥 brother, 姐 sister, 叔叔 uncle, 阿姨 auntie) and given priority in social situations.\n\nKnowing someone's age helps you choose the right form of address. This is why asking age early in a conversation is normal and expected, not intrusive."}},

  {type:"teach", trg:"多(duō)", src:"many, much, how", pos:"adj", gender:null,
   note:"Used in questions about degree or quantity.\n多大 = how big/old. 多少 = how many.",
   example:"A: 你(nǐ)多(duō)大(dà)?\nB: 我(wǒ)二十(èrshí)岁(suì)。",
   exampleSrc:"A: How old are you?\nB: I am twenty years old.",
   funFact:"多 is incredibly versatile. 多大 (how big/old), 多少 (how many/much), 多长 (how long), 多远 (how far). It turns any adjective into a 'how much' question."},

  {type:"teach", trg:"大(dà)", src:"big, old (for age)", pos:"adj", gender:null,
   note:"Means 'big' literally. In 多大, it means 'how old.'\nTone 4 (falling).",
   example:"A: 他(tā)多(duō)大(dà)?\nB: 他(tā)十(shí)岁(suì)。",
   exampleSrc:"A: How old is he?\nB: He is ten years old.",
   funFact:"大 means 'big' but in the phrase 多大, it asks about age. Chinese uses size metaphors for age. A 'big' person is older. 大人 (dàrén) means 'adult,' literally 'big person.'"},

  {type:"mc",
   q:"How do you ask a child 'How old are you?'",
   opts:["你(nǐ)好(hǎo)吗(ma)?","你(nǐ)叫(jiào)什么(shénme)?","你(nǐ)几(jǐ)岁(suì)?","你(nǐ)是(shì)谁(shuí)?"],
   ans:"你(nǐ)几(jǐ)岁(suì)?",
   hint:"This form uses the 'how many' question word plus the age measure word."},

  {type:"teach", trg:"个(gè)", src:"(general measure word)", pos:"part", gender:null,
   note:"The most common measure word. Used between a number and a noun.\n三个人 = three people.",
   example:"A: 你(nǐ)要(yào)几(jǐ)个(gè)?\nB: 我(wǒ)要(yào)两(liǎng)个(gè)。",
   exampleSrc:"A: How many do you want?\nB: I want two.",
   funFact:"Every noun in Chinese needs a measure word between the number and the noun. English has some: 'a piece of paper,' 'a cup of tea.' Chinese does this for everything. 个 is the default when you do not know the specific one."},

  {type:"tip", title:"Measure Words: The Chinese Counting System",
   text:"In Chinese, you cannot say 'three people' directly. You must say 'three [measure word] people.'\n\n三个人 (three ge people) = three people\n五个苹果 (five ge apples) = five apples\n\n个 is the universal measure word. When in doubt, use 个. Native speakers will understand you even if the specific measure word is different.\n\nThink of it like English 'a pair of pants' or 'a sheet of paper,' but for every noun."},

  {type:"teach", trg:"两(liǎng)", src:"two (with measure words)", pos:"num", gender:null,
   note:"Use 两 before measure words. Use 二 for counting or math.\n两个人 = two people (NOT 二个人).",
   example:"A: 你(nǐ)有(yǒu)几(jǐ)个(gè)?\nB: 我(wǒ)有(yǒu)两(liǎng)个(gè)。",
   exampleSrc:"A: How many do you have?\nB: I have two.",
   funFact:"Chinese has TWO words for 'two.' 二 (èr) is the digit, used in math and phone numbers. 两 (liǎng) is used before measure words: 两个人 (two people), NOT 二个人. Mixing them up is a classic beginner mistake."},

  {type:"tip", title:"二 vs 两: When to Use Which",
   text:"Both mean 'two' but they are NOT interchangeable:\n\n二 (èr): counting, math, phone numbers, ordinal\n- 一、二、三... (counting: 1, 2, 3...)\n- 二加三 (2 + 3)\n- 第二 (second/2nd)\n\n两 (liǎng): before measure words\n- 两个人 (two people)\n- 两本书 (two books)\n- 两杯水 (two cups of water)\n\nRule of thumb: if a measure word follows, use 两."},

  {type:"mc",
   q:"你有几个? Which is the correct answer for 'I have two'?",
   opts:["我(wǒ)有(yǒu)多(duō)个(gè)","我(wǒ)有(yǒu)二(èr)个(gè)","我(wǒ)有(yǒu)二(èr)","我(wǒ)有(yǒu)两(liǎng)个(gè)"],
   ans:"我(wǒ)有(yǒu)两(liǎng)个(gè)",
   hint:"Before measure words, which version of 'two' do Chinese speakers use?"},

  {type:"fb",
   s:"她(tā){1}大(dà)?",
   a:["多(duō)"],
   opts:["多(duō)","几(jǐ)","大(dà)","好(hǎo)"],
   hint:"This word turns adjectives into 'how much/how' questions.",
   sSrc:"How old is she?"},

  {type:"fb",
   s:"我(wǒ)有(yǒu){1}个(gè)。",
   a:["两(liǎng)"],
   opts:["两(liǎng)","二(èr)","几(jǐ)","多(duō)"],
   hint:"When saying 'two' before a measure word, use this version, not the counting form.",
   sSrc:"I have two."},

  {type:"mc",
   q:"他(tā)三(sān)岁(suì)。 What does this mean?",
   opts:["He is three years old.","He has three.","He wants three.","He is three meters tall."],
   ans:"He is three years old.",
   hint:"岁 is the measure word specifically for age, counting ___ of life."},

  {type:"match", pairs:[
    {trg:"几(jǐ)", src:"how many"},
    {trg:"岁(suì)", src:"years old"},
    {trg:"个(gè)", src:"(measure word)"},
    {trg:"两(liǎng)", src:"two (with MW)"},
    {trg:"多(duō)", src:"many/how"}
  ]},

  {type:"fb",
   s:"他(tā)几(jǐ){1}?",
   a:["岁(suì)"],
   opts:["岁(suì)","个(gè)","大(dà)","好(hǎo)"],
   hint:"The age-specific measure word that means 'years old.'",
   sSrc:"How old is he?"},

  {type:"mc",
   q:"When do you use 二(èr) instead of 两(liǎng)?",
   opts:["Before measure words","Before nouns","When counting: 1, 2, 3...","When talking about age"],
   ans:"When counting: 1, 2, 3...",
   hint:"Think of reciting numbers in order, doing math, or reading phone numbers."}
]},

// ═══ Lesson 3: Numbers in Action (Review) ═══
{id:"zhv2_u2l3", title:"Numbers in Action", icon:"\uD83C\uDFAF", xp:15, board:true, steps:[
  {type:"intro", title:"Numbers in Action",
   desc:"Put all the numbers and age vocabulary together. Count, calculate, ask ages, and use measure words like a pro.",
   goals:["Recall all numbers from zero to ten","Use age expressions fluently","Apply measure words correctly"]},

  {type:"match", pairs:[
    {trg:"一(yī)", src:"one"},
    {trg:"三(sān)", src:"three"},
    {trg:"五(wǔ)", src:"five"},
    {trg:"七(qī)", src:"seven"},
    {trg:"九(jiǔ)", src:"nine"}
  ]},

  {type:"match", pairs:[
    {trg:"二(èr)", src:"two"},
    {trg:"四(sì)", src:"four"},
    {trg:"六(liù)", src:"six"},
    {trg:"八(bā)", src:"eight"},
    {trg:"十(shí)", src:"ten"}
  ]},

  {type:"mc",
   q:"五(wǔ) 加(jiā) 四(sì) 是(shì) 几(jǐ)?",
   opts:["十(shí)","九(jiǔ)","七(qī)","八(bā)"],
   ans:"九(jiǔ)",
   hint:"Simple addition: 5 + 4 = ? Think through the numbers."},

  {type:"fb",
   s:"七(qī) 加(jiā) 三(sān) 是(shì) {1}。",
   a:["十(shí)"],
   opts:["十(shí)","八(bā)","九(jiǔ)","六(liù)"],
   hint:"Calculate the sum: 7 + 3 = ? The result is the largest single digit plus one.",
   sSrc:"Seven plus three is {1}."},

  {type:"mc",
   q:"我(wǒ)有(yǒu)两(liǎng)个(gè)。How many does the speaker have?",
   opts:["one","three","two","zero"],
   ans:"two",
   hint:"两 appears before measure words and represents a specific small quantity."},

  {type:"fb",
   s:"你(nǐ)几(jǐ){1}?",
   a:["岁(suì)"],
   opts:["岁(suì)","个(gè)","大(dà)","好(hǎo)"],
   hint:"The measure word for years of age completes this 'how old' question.",
   sSrc:"How many {1} are you? (How old are you?)"},

  {type:"mc",
   q:"她(tā)多(duō)大(dà)? 她(tā)六(liù)岁(suì)。How old is she?",
   opts:["five","six","eight","seven"],
   ans:"six",
   hint:"Look at the number before 岁 in the answer sentence."},

  {type:"fb",
   s:"他(tā)不(bù)是(shì)三(sān)岁(suì), 他(tā)是(shì){1}岁(suì)。",
   a:["四(sì)"],
   opts:["四(sì)","二(èr)","一(yī)","七(qī)"],
   hint:"He is NOT three, he is the next number up.",
   sSrc:"He is not three years old, he is {1} years old."},

  {type:"match", pairs:[
    {trg:"零(líng)", src:"zero"},
    {trg:"岁(suì)", src:"years old"},
    {trg:"多(duō)", src:"many/how"},
    {trg:"大(dà)", src:"big/old"},
    {trg:"个(gè)", src:"(measure word)"}
  ]},

  {type:"mc",
   q:"二(èr) 加(jiā) 六(liù) 是(shì) 几(jǐ)?",
   opts:["八(bā)","十(shí)","九(jiǔ)","七(qī)"],
   ans:"八(bā)",
   hint:"Add the numbers: 2 + 6 = ? The result is the luckiest number in Chinese."},

  {type:"mc",
   q:"Which of these is NOT a correct use of 两(liǎng)?",
   opts:["两杯 (two cups)","一、两、三 (counting 1, 2, 3)","两个人 (two people)","两个 (two items)"],
   ans:"一、两、三 (counting 1, 2, 3)",
   hint:"When reciting numbers in sequence, you should use the other word for two."},

  {type:"fb",
   s:"九(jiǔ) 加(jiā) {1} 是(shì) 十(shí)。",
   a:["一(yī)"],
   opts:["一(yī)","二(èr)","三(sān)","零(líng)"],
   hint:"9 + ? = 10. Which number completes the equation?",
   sSrc:"Nine plus {1} is ten."},

  {type:"mc",
   q:"她(tā)多(duō)大(dà)? What is this sentence asking?",
   opts:["How old is she?","Where is she?","What is her name?","How tall is she?"],
   ans:"How old is she?",
   hint:"多大 literally means 'how big' but when asking about a person, it means age."},

  {type:"fb",
   s:"我(wǒ)有(yǒu){1}个(gè)。",
   a:["五(wǔ)"],
   opts:["五(wǔ)","二(èr)","岁(suì)","大(dà)"],
   hint:"The number 5 before the measure word. Remember: numbers (not 二) before 个.",
   sSrc:"I have five."},

  {type:"mc",
   q:"十(shí) looks like which symbol?",
   opts:["Three horizontal lines","A cross / plus sign","Two vertical lines","A circle"],
   ans:"A cross / plus sign",
   hint:"This character for ten has one horizontal and one vertical stroke intersecting."}
]}

]}; // end unit

export default UNIT_02;
