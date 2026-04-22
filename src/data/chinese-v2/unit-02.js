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
   example:"A: 一(yī)、二(èr)、三(sān)！\nB: 很(hěn)好(hǎo)！",
   exampleSrc:"A: One, two, three!\nB: Very good!",
   funFact:"The character 一 is literally one horizontal line. Two lines stacked = 二 (two). Three lines = 三 (three). Ancient Chinese counting made visible."},

  {type:"teach", trg:"二(èr)", src:"two", pos:"num", gender:null,
   note:"Two horizontal strokes. Tone 4 (falling).\nUsed when counting or in numbers like 12, 22.",
   example:"A: 你(nǐ)有(yǒu)几(jǐ)个(gè)?\nB: 我(wǒ)有(yǒu)二(èr)个(gè)。",
   exampleSrc:"A: How many do you have?\nB: I have two.",
   funFact:"二 is used for counting and in larger numbers (12 = 十二). But when you say 'two of something,' you often use 两 (liǎng) instead. More on that later."},

  {type:"teach", trg:"三(sān)", src:"three", pos:"num", gender:null,
   note:"Three horizontal strokes. Tone 1 (high flat).",
   example:"A: 一(yī)、二(èr)、三(sān)！\nB: 好(hǎo)，是(shì)三(sān)！",
   exampleSrc:"A: One, two, three!\nB: Good, that is three!",
   funFact:"After 三, the pattern of stacking lines stops. Four is NOT four lines. Instead, Chinese uses a completely different character: 四. Why? Four lines would be too hard to distinguish from three."},

  {type:"teach", trg:"四(sì)", src:"four", pos:"num", gender:null,
   note:"Tone 4 (falling). Often considered unlucky in Chinese culture.",
   example:"A: 三(sān)、四(sì)、五(wǔ)？\nB: 是(shì)，三(sān)、四(sì)、五(wǔ)！",
   exampleSrc:"A: Three, four, five?\nB: Yes, three, four, five!",
   funFact:"Four sounds like 死 (sǐ, death). Many Chinese buildings skip the 4th floor, just as some Western buildings skip 13. Phone numbers and license plates with 四 are cheaper."},

  {type:"teach", trg:"五(wǔ)", src:"five", pos:"num", gender:null,
   note:"Tone 3 (dipping). The middle number when counting on one hand.",
   example:"A: 我(wǒ)有(yǒu)五(wǔ)个(gè)。\nB: 五(wǔ)个(gè)？好(hǎo)！",
   exampleSrc:"A: I have five.\nB: Five? Great!",
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
   example:"A: 四(sì)、五(wǔ)、六(liù)！\nB: 好(hǎo)！六(liù)是(shì)好(hǎo)！",
   exampleSrc:"A: Four, five, six!\nB: Good! Six is lucky!",
   funFact:"六 is lucky because it sounds like 溜 (liù, smooth/flowing). The phrase 六六大顺 means 'everything goes smoothly.' Many Chinese people love the number 6."},

  {type:"teach", trg:"七(qī)", src:"seven", pos:"num", gender:null,
   note:"Tone 1 (high flat). The hand gesture looks like pointing a finger.",
   example:"A: 一(yī)个(gè)星期(xīngqī)有(yǒu)七(qī)天(tiān)。\nB: 对(duì)!",
   exampleSrc:"A: One week has seven days.\nB: Correct!",
   funFact:"The Qixi Festival (七夕, seventh evening) on the 7th day of the 7th month is Chinese Valentine's Day. Seven has romantic associations in Chinese culture."},

  {type:"teach", trg:"八(bā)", src:"eight", pos:"num", gender:null,
   note:"Tone 1 (high flat). The luckiest number in Chinese culture.",
   example:"A: 八(bā)是(shì)很(hěn)好(hǎo)！\nB: 是(shì)，八(bā)八(bā)好(hǎo)！",
   exampleSrc:"A: Eight is very lucky!\nB: Yes, double eight is great!",
   funFact:"八 sounds like 发 (fā, prosper/wealth). The Beijing Olympics opened on 08/08/08 at 8:08 PM. Phone numbers with 8s sell for thousands of dollars."},

  {type:"teach", trg:"九(jiǔ)", src:"nine", pos:"num", gender:null,
   note:"Tone 3 (dipping). Associated with longevity.",
   example:"A: 七(qī)、八(bā)、九(jiǔ)！\nB: 好(hǎo)！九(jiǔ)很(hěn)好(hǎo)！",
   exampleSrc:"A: Seven, eight, nine!\nB: Good! Nine is great!",
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
   example:"A: 一(yī)零(líng)一(yī)！\nB: 好(hǎo)！是(shì)一(yī)、零(líng)、一(yī)。",
   exampleSrc:"A: One zero one!\nB: Good! It is one, zero, one.",
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
   opts:["三(sān)","四(sì)","七(qī)","九(jiǔ)"],
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
   opts:["九(jiǔ)","七(qī)","八(bā)","六(liù)"],
   ans:"八(bā)",
   hint:"This is a simple addition problem: 3 + 5 = ?"},

  {type:"mc",
   q:"What does 零(líng) mean?",
   opts:["one","five","ten","zero"],
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
   example:"A: 你(nǐ)多(duō)大(dà)?\nB: 我(wǒ)十(shí)岁(suì)。",
   exampleSrc:"A: How old are you?\nB: I am ten years old.",
   funFact:"多 is incredibly versatile. 多大 (how big/old), 多少 (how many/much), 多长 (how long), 多远 (how far). It turns any adjective into a 'how much' question."},

  {type:"teach", trg:"大(dà)", src:"big, old (for age)", pos:"adj", gender:null,
   note:"Means 'big' literally. In 多大, it means 'how old.'\nTone 4 (falling).",
   example:"A: 他(tā)多(duō)大(dà)?\nB: 他(tā)十(shí)岁(suì)。",
   exampleSrc:"A: How old is he?\nB: He is ten years old.",
   funFact:"大 means 'big' but in the phrase 多大, it asks about age. Chinese uses size metaphors for age. A 'big' person is older. 大人 (dàrén) means 'adult,' literally 'big person.'"},

  {type:"mc",
   q:"How do you ask a child 'How old are you?'",
   opts:["你(nǐ)几(jǐ)岁(suì)?","你(nǐ)是(shì)谁(shuí)?","你(nǐ)好(hǎo)吗(ma)?","你(nǐ)叫(jiào)什么(shénme)?"],
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
   opts:["我(wǒ)有(yǒu)二(èr)","我(wǒ)有(yǒu)两(liǎng)个(gè)","我(wǒ)有(yǒu)多(duō)个(gè)","我(wǒ)有(yǒu)二(èr)个(gè)"],
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
   opts:["He wants three.","He is three meters tall.","He is three years old.","He has three."],
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
   opts:["When talking about age","Before measure words","Before nouns","When counting: 1, 2, 3..."],
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
   opts:["九(jiǔ)","七(qī)","八(bā)","十(shí)"],
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
   opts:["three","two","zero","one"],
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
   opts:["seven","five","six","eight"],
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
   opts:["十(shí)","九(jiǔ)","七(qī)","八(bā)"],
   ans:"八(bā)",
   hint:"Add the numbers: 2 + 6 = ? The result is the luckiest number in Chinese."},

  {type:"mc",
   q:"Which of these is NOT a correct use of 两(liǎng)?",
   opts:["一、两、三 (counting 1, 2, 3)","两个人 (two people)","两个 (two items)","两杯 (two cups)"],
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
   opts:["How tall is she?","How old is she?","Where is she?","What is her name?"],
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
   opts:["A circle","Three horizontal lines","A cross / plus sign","Two vertical lines"],
   ans:"A cross / plus sign",
   hint:"This character for ten has one horizontal and one vertical stroke intersecting."}
]},

// ═══ Lesson 4: 填表 Filling Out Forms ═══
{id:"zhv2_u2l_form", title:"填表(tián biǎo)", icon:"📝", xp:15, board:true, steps:[
{type:"intro", title:"Filling Out Forms",
 desc:"Learn how to fill out basic forms in Chinese: name, address, phone, email, and date of birth. Essential for hotel check-in, HSK registration, and visa applications.",
 goals:["Read basic form field labels in Chinese","Fill in personal details on a form","Write a simple polite WeChat message"]},

{type:"teach", trg:"姓名(xìngmíng)", src:"full name (formal)", pos:"noun", gender:null,
 note:"Formal term for a person's full name. 姓 = surname, 名 = given name.\nUsed on official forms. Informal speech uses 名字.",
 example:"A: 请(qǐng)填(tián)写(xiě)您(nín)的(de)姓名(xìngmíng)。\nB: 好(hǎo)的(de)，我(wǒ)的(de)姓名(xìngmíng)是(shì)李(Lǐ)明(Míng)。",
 exampleSrc:"A: Please fill in your full name.\nB: Sure, my full name is Li Ming.",
 funFact:"Chinese names are written surname first: 李明 is family name 李 (Li) plus given name 明 (Ming). On English forms, Chinese people often reverse the order for Western audiences. The word 姓名 literally reminds you: surname comes first."},

{type:"teach", trg:"地址(dìzhǐ)", src:"address", pos:"noun", gender:null,
 note:"地 = place/ground, 址 = location/site.\nUsed for home, school, or any mailing address.",
 example:"A: 您(nín)的(de)地址(dìzhǐ)是(shì)什么(shénme)？\nB: 我(wǒ)的(de)地址(dìzhǐ)是(shì)北京(Běijīng)路(lù)五(wǔ)号(hào)。",
 exampleSrc:"A: What is your address?\nB: My address is No. 5, Beijing Road.",
 funFact:"Chinese addresses are written from largest to smallest: country, province, city, district, street, building number. This is the opposite of Western address format and reflects the Chinese priority of context over individual."},

{type:"teach", trg:"电话号码(diànhuà hàomǎ)", src:"phone number", pos:"noun", gender:null,
 note:"电话 = telephone, 号码 = number code.\nChinese mobile numbers are 11 digits.",
 example:"A: 您(nín)的(de)电话号码(diànhuà hàomǎ)是(shì)什么(shénme)？\nB: 一(yī)三(sān)八(bā)...",
 exampleSrc:"A: What is your phone number?\nB: 138...",
 funFact:"Chinese mobile numbers start with 1 and are 11 digits long. The second digit tells you the carrier: 3 is China Telecom, 5 is China Unicom, 8 is China Mobile. Foreigners registering a Chinese SIM card need their passport number too."},

{type:"teach", trg:"邮箱(yóuxiāng)", src:"email address", pos:"noun", gender:null,
 note:"邮 = mail/post, 箱 = box. Literally: mail box.\nShort form of 电子邮件(diànzǐ yóujiàn). Used in speech and forms.",
 example:"A: 您(nín)的(de)邮箱(yóuxiāng)是(shì)什么(shénme)？\nB: 我(wǒ)的(de)邮箱(yóuxiāng)是(shì)... 谢谢(xièxie)！",
 exampleSrc:"A: What is your email?\nB: My email is... Thank you!",
 funFact:"China's most popular email providers are 126.com and 163.com (both by NetEase) and QQ.com (by Tencent). Gmail is blocked in mainland China. For messaging, most Chinese people use WeChat rather than email for personal contact."},

{type:"teach", trg:"出生日期(chūshēng rìqī)", src:"date of birth", pos:"noun", gender:null,
 note:"出生 = born, 日期 = date. A compound noun used on all official forms.\nWritten as: year 年 + month 月 + day 日.",
 example:"A: 您(nín)的(de)出生日期(chūshēng rìqī)是(shì)什么(shénme)？\nB: 八(bā)月(yuè)三(sān)日(rì)。",
 exampleSrc:"A: What is your date of birth?\nB: August 3.",
 funFact:"Chinese dates always go year-month-day, matching the address pattern of largest to smallest. This format is also used in Japan and Korea. ISO 8601 (the international standard) chose this same order: 1995-03-08. China was doing it right all along."},

{type:"teach", trg:"填写(tiánxiě)", src:"to fill in / to fill out", pos:"verb", gender:null,
 note:"填 = to fill, 写 = to write. Together: to fill in by writing.\nAlways used with forms, blanks, and questionnaires.",
 example:"A: 请(qǐng)填写(tiánxiě)姓名(xìngmíng)。\nB: 好(hǎo)的(de)，我(wǒ)是(shì)李(Lǐ)明(Míng)。",
 exampleSrc:"A: Please fill in your full name.\nB: Sure, I am Li Ming.",
 funFact:"填 contains the earth radical 土 on the left. In ancient Chinese, 填 meant to fill a hole with earth. The meaning expanded from filling physical gaps to filling in written blanks. A perfectly practical metaphor for form-filling."},

{type:"teach", trg:"您好(nín hǎo)", src:"Hello (polite, formal)", pos:"intj", gender:null,
 note:"Polite version of 你好. 您 = respectful 'you.'\nUsed in formal messages, business, or with elders.",
 example:"A: 您好(nín hǎo)！我(wǒ)是(shì)李(Lǐ)明(Míng)。\nB: 您好(nín hǎo)！请(qǐng)问(wèn)有(yǒu)什么(shénme)可以(kěyǐ)帮(bāng)您(nín)？",
 exampleSrc:"A: Hello! I am Li Ming.\nB: Hello! How may I help you?",
 funFact:"您 is the formal second-person pronoun, combining 你 (you) with a heart radical 心 underneath. The idea: showing respect means speaking from the heart. 您好 is standard for starting a formal WeChat message, email, or greeting a stranger in a service context."},

{type:"tip", title:"Reading a Chinese Form",
 text:"Chinese registration forms use these standard field labels:\n\n姓名(xìngmíng) = Full name\n出生日期(chūshēng rìqī) = Date of birth\n地址(dìzhǐ) = Address\n电话号码(diànhuà hàomǎ) = Phone number\n邮箱(yóuxiāng) = Email\n\nDate format: year 年(nián) + month 月(yuè) + day 日(rì)\nExample: 1990年5月12日 = May 12, 1990\n\nPhone numbers are 11 digits. Read each digit separately: 一三八五六...",
 deepDive:{title:"WeChat vs Email in China",
  text:"In China, most personal and professional communication happens on WeChat (微信 Wēixìn), not email. Email is mainly for formal documents and government correspondence.\n\nA typical formal WeChat message opens with 您好 and closes with a polite phrase. Chinese business culture values proper greetings even in digital messages.\n\nWhen filling in forms for hotels, hospitals, or official services, you will see all seven field labels above. Recognizing them instantly makes every registration much faster."}},

{type:"mc", q:"Which field label on a Chinese form asks for your full name?",
 opts:["姓名(xìngmíng)","邮箱(yóuxiāng)","地址(dìzhǐ)","出生日期(chūshēng rìqī)"],
 ans:"姓名(xìngmíng)",
 hint:"This word combines the character for surname with the character for given name."},

{type:"mc", q:"On a Chinese form, 出生日期(chūshēng rìqī) asks for your:",
 opts:["Email address","Date of birth","Home address","Phone number"],
 ans:"Date of birth",
 hint:"出生 means 'born' and 日期 means 'when something happens.' What event is this asking about?"},

{type:"match", pairs:[
  {trg:"姓名(xìngmíng)", src:"full name"},
  {trg:"地址(dìzhǐ)", src:"address"},
  {trg:"电话号码(diànhuà hàomǎ)", src:"phone number"},
  {trg:"邮箱(yóuxiāng)", src:"email address"},
  {trg:"出生日期(chūshēng rìqī)", src:"date of birth"}
]},

{type:"fb", s:"请(qǐng){1}您(nín)的(de)姓名(xìngmíng)。",
 a:["填写(tiánxiě)"],
 opts:["填写(tiánxiě)","地址(dìzhǐ)","姓名(xìngmíng)","您好(nín hǎo)"],
 hint:"Which verb means 'to fill in' and is used specifically when completing a written form?",
 sSrc:"Please {1} your full name."},

{type:"fb", s:"您好(nín hǎo)！请(qǐng)填写(tiánxiě)您(nín)的(de){1}：liming@163.com",
 a:["邮箱(yóuxiāng)"],
 opts:["邮箱(yóuxiāng)","电话号码(diànhuà hàomǎ)","地址(dìzhǐ)","姓名(xìngmíng)"],
 hint:"A .com address goes here. Which field label refers to an electronic mail address?",
 sSrc:"Hello! Please fill in your {1}: liming@163.com"},

{type:"mc", q:"您好(nín hǎo) is used instead of 你好(nǐhǎo) when:",
 opts:["Talking to a child","Greeting a close friend","Starting a formal message or greeting an elder","Saying goodbye"],
 ans:"Starting a formal message or greeting an elder",
 hint:"您 is the respectful version of 你. It adds formality, similar to 'sir' or 'ma'am' in English."},

{type:"fb", s:"{1}！我(wǒ)想(xiǎng)预约(yùyuē)一(yī)下(xià)。",
 a:["您好(nín hǎo)"],
 opts:["您好(nín hǎo)","你好(nǐhǎo)","再见(zàijiàn)","谢谢(xièxie)"],
 hint:"You are opening a formal service message. Use the polite greeting, not the casual one.",
 sSrc:"{1}! I would like to make an appointment."}
]}

]}; // end unit

export default UNIT_02;
