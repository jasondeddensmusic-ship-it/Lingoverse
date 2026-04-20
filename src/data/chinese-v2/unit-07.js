// Unit 7: Weather and Seasons
// Level: A2.1 (HSK 2)
// Chinese (Mandarin) V2 format with hanzi+pinyin notation

const UNIT_07 = {
n:7, lang:"zh", srcLang:"en", track:"v2",
title:"天气怎么样？", sub:"Weather and Seasons",
icon:"🌤️", level:"A2.1", color:"#7B5EE8",
lessons:[

// ─── L1: Weather Words ───
{id:"zhv2_u7l1", title:"天气怎么样？ How's the Weather?", icon:"☀️", xp:15, board:true, steps:[
{type:"intro", title:"天气怎么样？ How's the Weather?",
 desc:"Learn to talk about the weather in Chinese. You will describe hot, cold, rainy, and sunny days using everyday vocabulary.",
 goals:["Ask and answer about the weather","Describe temperature with 冷 and 热","Talk about rain, snow, and wind"]},

{type:"teach", trg:"天气(tiānqì)", src:"weather", pos:"noun", gender:null,
 note:"天 (sky/day) + 气 (air/energy). Literally: sky air.\nThe most common way to start talking about weather.",
 example:"A: 今天(jīntiān)天气(tiānqì)怎么样(zěnmeyàng)？\nB: 今天(jīntiān)天气(tiānqì)很(hěn)好(hǎo)！",
 exampleSrc:"A: How is the weather today?\nB: The weather today is very good!",
 funFact:"气 appears in many Chinese words. 天气 is weather (sky air), 生气 is angry (birth air), and 客气 is polite (guest air). The concept of qi (air/energy) runs deep in Chinese thinking."},

{type:"teach", trg:"冷(lěng)", src:"cold", pos:"adj", gender:null,
 note:"Third tone. Used for weather and temperature.\nVery common in daily conversation.",
 example:"A: 今天(jīntiān)冷(lěng)不(bu)冷(lěng)？\nB: 很(hěn)冷(lěng)！",
 exampleSrc:"A: Is it cold today?\nB: Very cold!",
 funFact:"The character 冷 has the ice radical (冫) on the left. Many cold-related characters share this radical: 冰 (ice), 冻 (freeze), 凉 (cool). The radical tells you the meaning family."},

{type:"teach", trg:"热(rè)", src:"hot", pos:"adj", gender:null,
 note:"Fourth tone. Describes hot weather or hot objects.\nAlso used figuratively: 热情 means 'enthusiastic.'",
 example:"A: 夏天(xiàtiān)很(hěn)热(rè)吗(ma)？\nB: 对(duì)，夏天(xiàtiān)很(hěn)热(rè)。",
 exampleSrc:"A: Is summer very hot?\nB: Yes, summer is very hot.",
 funFact:"热 combines the fire radical (灬) at the bottom with components on top. When you see those four dots at the bottom of a character, think fire or heat. They appear in 煮 (boil), 熟 (cooked), and 烈 (fierce)."},

{type:"teach", trg:"下雨(xià yǔ)", src:"to rain", pos:"verb", gender:null,
 note:"下 (to fall/down) + 雨 (rain). Literally: rain falls.\nUsed as a verb phrase, not a noun.",
 example:"A: 明天(míngtiān)下雨(xià yǔ)吗(ma)？\nB: 我(wǒ)不(bù)知道(zhīdào)，可能(kěnéng)下雨(xià yǔ)。",
 exampleSrc:"A: Will it rain tomorrow?\nB: I do not know, it might rain.",
 funFact:"雨 is a pictographic character. The top horizontal line represents the sky, the box below is a cloud, and the four dots are falling raindrops. It actually looks like rain falling from a cloud."},

{type:"teach", trg:"下雪(xià xuě)", src:"to snow", pos:"verb", gender:null,
 note:"下 (to fall) + 雪 (snow). Same pattern as 下雨.\nWeather events in Chinese always 'fall' (下).",
 example:"A: 冬天(dōngtiān)下雪(xià xuě)吗(ma)？\nB: 下雪(xià xuě)，冬天(dōngtiān)很(hěn)冷(lěng)。",
 exampleSrc:"A: Does it snow in winter?\nB: Yes it snows, winter is very cold.",
 funFact:"雪 combines 雨 (rain) on top with a component meaning 'hand sweeping' below. Snow is essentially rain you can sweep away. Chinese character logic can be surprisingly poetic."},

{type:"teach", trg:"晴天(qíngtiān)", src:"sunny day", pos:"noun", gender:null,
 note:"晴 (clear/sunny) + 天 (day/sky).\nThe 日 radical in 晴 means 'sun.'",
 example:"A: 今天(jīntiān)是(shì)晴天(qíngtiān)吗(ma)？\nB: 是(shì)的(de)，今天(jīntiān)是(shì)晴天(qíngtiān)！",
 exampleSrc:"A: Is it a sunny day today?\nB: Yes, today is a sunny day!",
 funFact:"晴 has the sun radical (日) on the left and 青 (blue/green) on the right. A sunny day is literally when the sun makes the sky blue. The logic of character composition is often visual."},

{type:"teach", trg:"刮风(guā fēng)", src:"to be windy", pos:"verb", gender:null,
 note:"刮 (to blow/scrape) + 风 (wind). A verb phrase like 下雨.\n风 alone means wind as a noun.",
 example:"A: 今天(jīntiān)刮风(guā fēng)了(le)。\nB: 对(duì)，风(fēng)很(hěn)大(dà)。",
 exampleSrc:"A: It is windy today.\nB: Yes, the wind is very strong.",
 funFact:"The traditional character for wind is 風, which contains the insect radical 虫 inside. Ancient Chinese believed insects came with the wind. The simplified form 风 keeps the outer frame but loses the insect."},

{type:"mc", q:"天气(tiānqì) is made up of which two concepts?",
 opts:["sky + air","fire + water","earth + rain","sun + cloud"],
 ans:"sky + air",
 hint:"The first character means ___ or day, and the second means ___ or energy."},

{type:"match", pairs:[
  {trg:"天气(tiānqì)", src:"weather"},
  {trg:"冷(lěng)", src:"cold"},
  {trg:"热(rè)", src:"hot"},
  {trg:"下雨(xià yǔ)", src:"to rain"},
  {trg:"下雪(xià xuě)", src:"to snow"}
]},

{type:"fb", s:"今天(jīntiān){1}怎么样(zěnmeyàng)？",
 a:["天气(tiānqì)"],
 opts:["天气(tiānqì)","下雨(xià yǔ)","冷(lěng)","热(rè)"],
 hint:"Which noun means 'weather' and fits between 'today' and 'how is it'?",
 sSrc:"How is the {1} today?"},

{type:"mc", q:"Which word describes weather that is the OPPOSITE of 热(rè)?",
 opts:["冷(lěng)","大(dà)","好(hǎo)","下雨(xià yǔ)"],
 ans:"冷(lěng)",
 hint:"If 热 means hot, think about what temperature word is its direct opposite."},

{type:"fb", s:"冬天(dōngtiān)常常(chángcháng){1}。",
 a:["下雪(xià xuě)"],
 opts:["下雪(xià xuě)","下雨(xià yǔ)","晴天(qíngtiān)","刮风(guā fēng)"],
 hint:"What weather event is typical for winter, involving white flakes falling from the sky?",
 sSrc:"In winter it often {1}."},

{type:"mc", q:"今天(jīntiān)是(shì)晴天(qíngtiān)。 What is the weather like?",
 opts:["It is raining","It is snowing","It is sunny","It is windy"],
 ans:"It is sunny",
 hint:"晴 contains the sun radical 日 on its left side. Think about what kind of day features the sun."},

{type:"match", pairs:[
  {trg:"晴天(qíngtiān)", src:"sunny day"},
  {trg:"刮风(guā fēng)", src:"to be windy"},
  {trg:"下雨(xià yǔ)", src:"to rain"},
  {trg:"下雪(xià xuě)", src:"to snow"}
]},

{type:"fb", s:"今天(jīntiān)很(hěn){1}，我(wǒ)不(bù)想(xiǎng)去(qù)。",
 a:["冷(lěng)"],
 opts:["冷(lěng)","热(rè)","好(hǎo)","大(dà)"],
 hint:"It is so uncomfortable outside that you do not want to go out. Which temperature word fits if it is chilly?",
 sSrc:"Today is very {1}, I do not want to go."}
]},

// ─── L2: Four Seasons ───
{id:"zhv2_u7l2", title:"四季 The Four Seasons", icon:"🍂", xp:15, board:true, steps:[
{type:"intro", title:"四季 The Four Seasons",
 desc:"Learn the names of the four seasons and describe typical weather in each one. Build on the weather vocabulary from Lesson 1.",
 goals:["Name all four seasons in Chinese","Describe weather for each season","Use 暖和 and 凉快 for mild temperatures"]},

{type:"teach", trg:"春天(chūntiān)", src:"spring", pos:"noun", gender:null,
 note:"春 (spring) + 天 (sky/season). First tone + first tone.\nAll four seasons use 天 as the second character.",
 example:"A: 你(nǐ)喜欢(xǐhuan)春天(chūntiān)吗(ma)？\nB: 喜欢(xǐhuan)！春天(chūntiān)很(hěn)暖和(nuǎnhuo)。",
 exampleSrc:"A: Do you like spring?\nB: Yes! Spring is very warm.",
 funFact:"春 depicts the sun warming the earth so plants sprout. The top part represents vegetation, and 日 (sun) is at the bottom. Spring is when the sun brings life back."},

{type:"teach", trg:"夏天(xiàtiān)", src:"summer", pos:"noun", gender:null,
 note:"夏 (summer) + 天 (sky/season). Fourth tone + first tone.\nThe hottest season in China.",
 example:"A: 夏天(xiàtiān)热(rè)吗(ma)？\nB: 夏天(xiàtiān)很(hěn)热(rè)，也(yě)下雨(xià yǔ)。",
 exampleSrc:"A: Is summer hot?\nB: Summer is very hot, and it rains too.",
 funFact:"In much of China, summer brings both extreme heat and heavy monsoon rains. The saying 三伏天(sānfútiān) refers to the hottest 30-40 days of summer, when temperatures can exceed 40 degrees Celsius."},

{type:"teach", trg:"秋天(qiūtiān)", src:"autumn / fall", pos:"noun", gender:null,
 note:"秋 (autumn) + 天 (sky/season). First tone + first tone.\nConsidered the most beautiful season.",
 example:"A: 秋天(qiūtiān)天气(tiānqì)怎么样(zěnmeyàng)？\nB: 秋天(qiūtiān)很(hěn)凉快(liángkuai)。",
 exampleSrc:"A: How is the weather in autumn?\nB: Autumn is very cool and refreshing.",
 funFact:"秋 combines 禾 (grain) and 火 (fire). Autumn is when grain ripens under the warm sun, ready for harvest. The character captures the agricultural heart of Chinese civilization."},

{type:"teach", trg:"冬天(dōngtiān)", src:"winter", pos:"noun", gender:null,
 note:"冬 (winter) + 天 (sky/season). First tone + first tone.\nThe coldest season, especially in northern China.",
 example:"A: 冬天(dōngtiān)冷(lěng)不(bu)冷(lěng)？\nB: 很(hěn)冷(lěng)，也(yě)下雪(xià xuě)。",
 exampleSrc:"A: Is winter cold?\nB: Very cold, and it snows too.",
 funFact:"Northern Chinese cities like Harbin have winters reaching minus 30 degrees Celsius. Harbin hosts a world-famous ice festival each January, with massive illuminated ice sculptures carved from the frozen Songhua River."},

{type:"teach", trg:"暖和(nuǎnhuo)", src:"warm", pos:"adj", gender:null,
 note:"A comfortable warm, not hot. The second syllable is neutral tone.\nUsed for pleasant warmth, like a spring day.",
 example:"A: 今天(jīntiān)暖和(nuǎnhuo)吗(ma)？\nB: 很(hěn)暖和(nuǎnhuo)，不(bù)冷(lěng)也(yě)不(bú)热(rè)。",
 exampleSrc:"A: Is it warm today?\nB: Very warm, not cold and not hot.",
 funFact:"暖 has the sun radical (日) on the left. The right side is a phonetic component. Compare with 热 (hot, with fire radical below). Warm vs hot is literally sun warmth vs fire heat."},

{type:"teach", trg:"凉快(liángkuai)", src:"cool / refreshing", pos:"adj", gender:null,
 note:"A pleasant cool, not cold. Second syllable is neutral tone.\nUsed for comfortable coolness, like autumn weather.",
 example:"A: 秋天(qiūtiān)凉快(liángkuai)吗(ma)？\nB: 对(duì)，秋天(qiūtiān)很(hěn)凉快(liángkuai)。",
 exampleSrc:"A: Is autumn cool and refreshing?\nB: Yes, autumn is very cool and refreshing.",
 funFact:"凉 has the ice radical (冫) just like 冷 (cold), but 凉快 is positive while 冷 can feel unpleasant. Chinese carefully distinguishes pleasant coolness from uncomfortable cold."},

{type:"tip", title:"The Temperature Scale in Chinese",
 text:"Chinese has a precise scale for temperature feelings:\n\n冷(lěng) = cold (uncomfortable)\n凉快(liángkuai) = cool (pleasant)\n暖和(nuǎnhuo) = warm (pleasant)\n热(rè) = hot (uncomfortable)\n\nNotice the pattern: the two-syllable words (凉快, 暖和) describe comfortable temperatures, while the single characters (冷, 热) describe extremes.",
 deepDive:{title:"Seasonal Patterns in China",
  text:"China spans enormous latitudes. Weather varies dramatically:\n\nNorth (Beijing): Harsh winters (minus 10 C), hot dry summers (35+ C).\nSouth (Guangzhou): Mild winters (10 C), hot humid summers (35+ C).\nWest (Chengdu): Overcast most of the year, mild temperatures.\n\nThis is why weather is such a common conversation topic. Two Chinese people from different regions may have completely different ideas of what 'cold' means."}},

{type:"match", pairs:[
  {trg:"春天(chūntiān)", src:"spring"},
  {trg:"夏天(xiàtiān)", src:"summer"},
  {trg:"秋天(qiūtiān)", src:"autumn"},
  {trg:"冬天(dōngtiān)", src:"winter"}
]},

{type:"mc", q:"Which season is described as 很(hěn)热(rè)也(yě)下雨(xià yǔ)?",
 opts:["春天(chūntiān)","夏天(xiàtiān)","秋天(qiūtiān)","冬天(dōngtiān)"],
 ans:"夏天(xiàtiān)",
 hint:"This season is very hot AND has rain. Think about which time of year is the hottest."},

{type:"fb", s:"{1}很(hěn)暖和(nuǎnhuo)，花(huā)很(hěn)多(duō)。",
 a:["春天(chūntiān)"],
 opts:["春天(chūntiān)","夏天(xiàtiān)","秋天(qiūtiān)","冬天(dōngtiān)"],
 hint:"Which season is warm and has many flowers blooming?",
 sSrc:"{1} is very warm, and there are many flowers."},

{type:"mc", q:"暖和(nuǎnhuo) and 凉快(liángkuai) both describe:",
 opts:["Extreme temperatures","Comfortable temperatures","Rainy weather","Windy conditions"],
 ans:"Comfortable temperatures",
 hint:"These two words sit in the middle of the temperature scale, between the extremes of cold and hot."},

{type:"fb", s:"秋天(qiūtiān)很(hěn){1}，不(bù)冷(lěng)也(yě)不(bú)热(rè)。",
 a:["凉快(liángkuai)"],
 opts:["凉快(liángkuai)","暖和(nuǎnhuo)","冷(lěng)","热(rè)"],
 hint:"Autumn is pleasantly cool. Which word describes a refreshing, comfortable coolness?",
 sSrc:"Autumn is very {1}, not cold and not hot."},

{type:"mc", q:"冬天(dōngtiān)很(hěn)冷(lěng)。 Which season is this?",
 opts:["Spring","Summer","Autumn","Winter"],
 ans:"Winter",
 hint:"冬 is the season associated with cold weather and snow."},

{type:"match", pairs:[
  {trg:"暖和(nuǎnhuo)", src:"warm (pleasant)"},
  {trg:"凉快(liángkuai)", src:"cool (pleasant)"},
  {trg:"冷(lěng)", src:"cold"},
  {trg:"热(rè)", src:"hot"}
]},

{type:"fb", s:"夏天(xiàtiān)很(hěn){1}，我(wǒ)想(xiǎng)喝(hē)冷(lěng)水(shuǐ)。",
 a:["热(rè)"],
 opts:["热(rè)","冷(lěng)","暖和(nuǎnhuo)","凉快(liángkuai)"],
 hint:"It is so warm in this season that you want a cold drink. Which extreme temperature word fits?",
 sSrc:"Summer is very {1}, I want to drink cold water."}
]},

// ─── L3: Comparing Weather ───
{id:"zhv2_u7l3", title:"比一比 Making Comparisons", icon:"⚖️", xp:15, board:true, steps:[
{type:"intro", title:"比一比 Making Comparisons",
 desc:"Learn to compare weather and seasons using 比, 更, and 最. These three words unlock a powerful grammar pattern used in everyday Chinese.",
 goals:["Compare two things with A 比 B + adjective","Intensify with 更 (even more)","Express superlatives with 最 (most)"]},

{type:"teach", trg:"比(bǐ)", src:"compared to", pos:"prep", gender:null,
 note:"Used to compare two things: A 比 B + adjective.\nA is MORE than B. Word order matters!",
 example:"A: 夏天(xiàtiān)比(bǐ)春天(chūntiān)热(rè)吗(ma)？\nB: 对(duì)，夏天(xiàtiān)比(bǐ)春天(chūntiān)热(rè)。",
 exampleSrc:"A: Is summer hotter than spring?\nB: Yes, summer is hotter than spring.",
 funFact:"The structure A 比 B + adj means 'A is more adj than B.' Unlike English, the adjective stays in its base form. There is no '-er' ending. 比 does all the work of comparison."},

{type:"teach", trg:"更(gèng)", src:"even more", pos:"adv", gender:null,
 note:"Fourth tone. Placed before an adjective to mean 'even more.'\nOften used with 比 comparisons for emphasis.",
 example:"A: 今天(jīntiān)冷(lěng)吗(ma)？\nB: 今天(jīntiān)冷(lěng)，明天(míngtiān)更(gèng)冷(lěng)。",
 exampleSrc:"A: Is it cold today?\nB: Today is cold, tomorrow will be even colder.",
 funFact:"更 is extremely versatile. You can say 更好 (even better), 更大 (even bigger), 更漂亮 (even more beautiful). It always comes right before the adjective, no exceptions."},

{type:"teach", trg:"最(zuì)", src:"most / the most", pos:"adv", gender:null,
 note:"Fourth tone. Creates superlatives: 最 + adjective = the most.\nNo special ending needed, unlike English '-est.'",
 example:"A: 你(nǐ)最(zuì)喜欢(xǐhuan)什么(shénme)天气(tiānqì)？\nB: 我(wǒ)最(zuì)喜欢(xǐhuan)晴天(qíngtiān)。",
 exampleSrc:"A: What weather do you like most?\nB: I like sunny days the most.",
 funFact:"最 works for everything. 最好 (best), 最冷 (coldest), 最大 (biggest). Chinese grammar handles comparatives and superlatives with just two adverbs (更 and 最) instead of English adjective changes."},

{type:"tip", title:"The Comparison System: 比, 更, 最",
 text:"Chinese has a clean, logical comparison system:\n\nBasic comparison: A 比(bǐ) B + adj\n夏天(xiàtiān) 比(bǐ) 春天(chūntiān) 热(rè)。\nSummer is hotter than spring.\n\nEven more: 更(gèng) + adj\n明天(míngtiān) 更(gèng) 冷(lěng)。\nTomorrow is even colder.\n\nSuperlative: 最(zuì) + adj\n冬天(dōngtiān) 最(zuì) 冷(lěng)。\nWinter is the coldest.\n\nNote: NEVER use 很 with 比 comparisons. Do not say 比...很热.",
 deepDive:{title:"Negative Comparisons",
  text:"To say A is NOT as adj as B, use 没有:\n\n春天(chūntiān) 没有(méiyǒu) 夏天(xiàtiān) 热(rè)。\nSpring is not as hot as summer.\n\nThis is the opposite of 比. While 比 says A is MORE, 没有 says A is LESS. You will practice this pattern more in later units."}},

{type:"mc", q:"夏天(xiàtiān)比(bǐ)冬天(dōngtiān)热(rè)。 What does this mean?",
 opts:["Summer is hotter than winter","Winter is hotter than summer","Summer and winter are equally hot","Summer is the hottest season"],
 ans:"Summer is hotter than winter",
 hint:"In the A 比 B + adj pattern, A is the one with MORE of the quality. Which word comes before 比?"},

{type:"fb", s:"冬天(dōngtiān){1}夏天(xiàtiān)冷(lěng)。",
 a:["比(bǐ)"],
 opts:["比(bǐ)","更(gèng)","最(zuì)","很(hěn)"],
 hint:"Which word goes between two things being compared?",
 sSrc:"Winter is colder than summer. (Winter {1} summer cold.)"},

{type:"mc", q:"明天(míngtiān)更(gèng)冷(lěng)。 What does 更 add to this sentence?",
 opts:["It means 'a little'","It means 'even more'","It means 'not'","It means 'the most'"],
 ans:"It means 'even more'",
 hint:"If today is already cold, this word intensifies the comparison for tomorrow."},

{type:"fb", s:"我(wǒ){1}喜欢(xǐhuan)春天(chūntiān)。",
 a:["最(zuì)"],
 opts:["最(zuì)","更(gèng)","比(bǐ)","很(hěn)"],
 hint:"Which word creates a superlative, meaning 'the most'?",
 sSrc:"I like spring {1} (the most)."},

{type:"mc", q:"Which sentence is INCORRECT?",
 opts:["冬天(dōngtiān)比(bǐ)夏天(xiàtiān)冷(lěng)","冬天(dōngtiān)最(zuì)冷(lěng)","冬天(dōngtiān)比(bǐ)夏天(xiàtiān)很(hěn)冷(lěng)","冬天(dōngtiān)更(gèng)冷(lěng)"],
 ans:"冬天(dōngtiān)比(bǐ)夏天(xiàtiān)很(hěn)冷(lěng)",
 hint:"One important rule about the 比 structure: a certain common adverb must NEVER be used with it."},

{type:"match", pairs:[
  {trg:"比(bǐ)", src:"compared to (A is more)"},
  {trg:"更(gèng)", src:"even more"},
  {trg:"最(zuì)", src:"most / the most"},
  {trg:"暖和(nuǎnhuo)", src:"warm"}
]},

{type:"fb", s:"今天(jīntiān)冷(lěng)，明天(míngtiān){1}冷(lěng)。",
 a:["更(gèng)"],
 opts:["更(gèng)","最(zuì)","比(bǐ)","很(hěn)"],
 hint:"Today is already cold. Tomorrow will be EVEN MORE so. Which intensifying adverb fits here?",
 sSrc:"Today is cold, tomorrow is {1} cold."},

{type:"mc", q:"秋天(qiūtiān)比(bǐ)夏天(xiàtiān)凉快(liángkuai)。 Who is cooler?",
 opts:["Autumn is cooler","Summer is cooler","They are equally cool","Neither is cool"],
 ans:"Autumn is cooler",
 hint:"In A 比 B + adj, the thing BEFORE 比 has more of the quality described."},

{type:"fb", s:"冬天(dōngtiān)是(shì){1}冷(lěng)的(de)季节(jìjié)。",
 a:["最(zuì)"],
 opts:["最(zuì)","更(gèng)","比(bǐ)","很(hěn)"],
 hint:"Winter is THE coldest season, the absolute extreme. Which word creates superlatives?",
 sSrc:"Winter is the {1} cold season."},

{type:"mc", q:"春天(chūntiān)比(bǐ)冬天(dōngtiān)暖和(nuǎnhuo)。 Translate this:",
 opts:["Spring is warmer than winter","Winter is warmer than spring","Spring and winter are warm","Spring is the warmest"],
 ans:"Spring is warmer than winter",
 hint:"The thing before 比 (___) has MORE of the quality. The adjective at the end tells you what quality."},

{type:"match", pairs:[
  {trg:"春天(chūntiān)比(bǐ)冬天(dōngtiān)暖和(nuǎnhuo)", src:"Spring is warmer than winter"},
  {trg:"夏天(xiàtiān)最(zuì)热(rè)", src:"Summer is the hottest"},
  {trg:"秋天(qiūtiān)很(hěn)凉快(liángkuai)", src:"Autumn is very cool"},
  {trg:"冬天(dōngtiān)更(gèng)冷(lěng)", src:"Winter is even colder"}
]}
]},

// ─── L4: Colors and Daily Actions ───
{id:"zhv2_u7l4", title:"颜色和动作 Colors and Daily Actions", icon:"🎨", xp:15, board:true, steps:[
{type:"intro", title:"颜色和动作 Colors and Daily Actions",
 desc:"Learn three core colors plus key everyday adjectives and verbs from HSK 2. You will describe objects, people, and what you do every day.",
 goals:["Use 黑, 白, and 蓝 to describe colors","Describe something old with 旧","Distinguish 男 for male people","Use 玩 for playing and 洗 for washing"]},

{type:"teach", trg:"黑(hēi)", src:"black", pos:"adj", gender:null,
 note:"First tone (high flat). Describes anything black in color.\n黑色(hēisè) = the color black. 黑 alone works as an adjective.",
 example:"A: 你(nǐ)喜欢(xǐhuan)黑(hēi)色(sè)吗(ma)？\nB: 喜欢(xǐhuan)！我(wǒ)很(hěn)喜欢(xǐhuan)黑(hēi)。",
 exampleSrc:"A: Do you like black?\nB: Yes! I really like black.",
 funFact:"The character 黑 is a pictograph of a face with charcoal marks on it (from ancient fire smoke). The top section represents a sooty face, the bottom 灬 is the fire radical. Black and fire have been linked since the character was invented."},

{type:"teach", trg:"白(bái)", src:"white", pos:"adj", gender:null,
 note:"Second tone (rising). Describes anything white.\n白色(báisè) = the color white. Also appears in names: 白 is a common Chinese surname.",
 example:"A: 你(nǐ)喜欢(xǐhuan)白(bái)色(sè)吗(ma)？\nB: 喜欢(xǐhuan)！白(bái)色(sè)很(hěn)好(hǎo)。",
 exampleSrc:"A: Do you like white?\nB: Yes! White is very nice.",
 funFact:"白 is one of the simplest Chinese characters. It depicts the sun just appearing above the horizon: the circle 日 with a single line below representing the horizon. That first sliver of sunlight is white. The character is pure visual poetry."},

{type:"teach", trg:"蓝(lán)", src:"blue", pos:"adj", gender:null,
 note:"Second tone (rising). The most common word for blue.\n蓝色(lánsè) = the color blue. Sky blue is 天蓝色(tiān lán sè).",
 example:"A: 你(nǐ)喜欢(xǐhuan)蓝(lán)色(sè)吗(ma)？\nB: 喜欢(xǐhuan)，蓝(lán)色(sè)比(bǐ)黑(hēi)色(sè)更(gèng)好(hǎo)！",
 exampleSrc:"A: Do you like blue?\nB: Yes, blue is even better than black!",
 funFact:"蓝 contains the grass radical (艹) at the top and a phonetic component below. Blue dye in ancient China came from a plant called indigo. The grass radical remembers that blue was originally a plant color, harvested from fields."},

{type:"teach", trg:"旧(jiù)", src:"old (used / worn)", pos:"adj", gender:null,
 note:"Fourth tone (falling). Describes objects that are old, used, or worn.\nNOT for people's age. Use 老(lǎo) for elderly people.",
 example:"A: 这(zhè)个(gè)杯子(bēizi)很(hěn)旧(jiù)了(le)。\nB: 对(duì)，我(wǒ)想(xiǎng)要(yào)一(yī)个(gè)好(hǎo)的(de)。",
 exampleSrc:"A: This cup is very old already.\nB: Yes, I want to get a good one.",
 funFact:"旧 combines 臼 (a mortar/pestle, a worn tool) with a phonetic element. A mortar becomes old from grinding grain day after day. The character captures wear through use. Compare with 新(xīn) new: they are natural antonyms."},

{type:"teach", trg:"男(nán)", src:"male / man", pos:"noun", gender:null,
 note:"Second tone (rising). Used in compounds: 男人(nánrén) = man, 男生(nánshēng) = male student.\n男 alone can describe gender: 男(nán)老师(lǎoshī) = male teacher.",
 example:"A: 那(nà)个(gè)男(nán)人(rén)是(shì)谁(shuí)？\nB: 他(tā)是(shì)我(wǒ)哥哥(gēge)。",
 exampleSrc:"A: Who is that man?\nB: He is my older brother.",
 funFact:"男 combines 田(tián) field at the top and 力(lì) strength at the bottom. In ancient agricultural China, men (males) were associated with working the fields with physical strength. The character tells a story about early society."},

{type:"teach", trg:"玩(wán)", src:"to play", pos:"verb", gender:null,
 note:"Second tone (rising). Used for leisure play, games, or having fun.\n今天(jīntiān)你(nǐ)玩(wán)什么(shénme)？ = What are you playing today?",
 example:"A: 你(nǐ)喜欢(xǐhuan)玩(wán)什么(shénme)？\nB: 我(wǒ)喜欢(xǐhuan)玩(wán)，在(zài)公园(gōngyuán)里(lǐ)玩(wán)最(zuì)好(hǎo)！",
 exampleSrc:"A: What do you like to play?\nB: I like to play. Playing in the park is the best!",
 funFact:"玩 has the jade radical (王) on the left. In ancient China, playing with precious jade pieces was a leisure activity of the upper class. Over time the character expanded to mean any kind of leisure play or having fun."},

{type:"teach", trg:"洗(xǐ)", src:"to wash", pos:"verb", gender:null,
 note:"Third tone (falling-rising). Used for washing hands, dishes, clothes, etc.\n洗手(xǐ shǒu) = wash hands. 洗衣服(xǐ yīfu) = do laundry.",
 example:"A: 你(nǐ)洗(xǐ)了(le)吗(ma)？\nB: 洗(xǐ)了(le)！我(wǒ)去(qù)洗(xǐ)了(le)。",
 exampleSrc:"A: Did you wash?\nB: Yes! I went and washed.",
 funFact:"洗 has the water radical (氵) on the left. Most verbs involving water carry this three-dot radical: 洗(xǐ) wash, 游(yóu) swim, 喝(hē) drink. The radical immediately signals the meaning family. Once you know it, you can guess many characters."},

{type:"tip", title:"Colors as Adjectives and Nouns",
 text:"Chinese colors work both as adjectives and nouns, depending on context:\n\nAdjective (before noun):\n黑(hēi)猫(māo) = black cat\n白(bái)色(sè)的(de)狗(gǒu) = white dog\n蓝(lán)天(tiān) = blue sky\n\nNoun (add 色):\n黑(hēi)色(sè) = the color black\n白(bái)色(sè) = the color white\n蓝(lán)色(sè) = the color blue\n\nWith 很 (as a predicate):\n天(tiān)很(hěn)蓝(lán)。 The sky is very blue.\n那(nà)个(gè)猫(māo)很(hěn)白(bái)。 That cat is very white.",
 deepDive:{title:"旧 vs 老: Two Ways to Say Old",
  text:"Chinese uses different words for old depending on what is old:\n\n旧(jiù) = old/worn (for objects)\n这(zhè)本(běn)书(shū)很(hěn)旧(jiù)。 This book is very old.\n\n老(lǎo) = old/elderly (for people, relationships, long-established things)\n他(tā)很(hěn)老(lǎo)了(le)。 He is very old.\n老朋友(lǎo péngyou) = old friend (long friendship, not age)\n\nUsing 旧 for a person sounds like you are calling them worn-out. Always use 老 for people."}},

{type:"mc", q:"Which sentence uses colors correctly to describe a clear sky?",
 opts:["天(tiān)很(hěn)旧(jiù)。","天(tiān)很(hěn)蓝(lán)。","天(tiān)很(hěn)男(nán)。","天(tiān)很(hěn)洗(xǐ)。"],
 ans:"天(tiān)很(hěn)蓝(lán)。",
 hint:"Which of the four words is a color that describes the sky on a clear day?"},

{type:"match", pairs:[
  {trg:"黑(hēi)", src:"black"},
  {trg:"白(bái)", src:"white"},
  {trg:"蓝(lán)", src:"blue"},
  {trg:"旧(jiù)", src:"old (used)"},
  {trg:"男(nán)", src:"male / man"}
]},

{type:"fb", s:"今天(jīntiān)是(shì)晴天(qíngtiān)，天(tiān)很(hěn){1}。",
 a:["蓝(lán)"],
 opts:["蓝(lán)","黑(hēi)","白(bái)","旧(jiù)"],
 hint:"On a clear sunny day, what color is the sky?",
 sSrc:"Today is a sunny day, the sky is very {1}."},

{type:"mc", q:"这(zhè)个(gè)杯子(bēizi)很(hěn)旧(jiù)了(le)。 What does 旧 tell us about the cup?",
 opts:["It is very new","It is very old / worn","It is very large","It is very black"],
 ans:"It is very old / worn",
 hint:"旧 describes the condition of an object that has been used over a long time."},

{type:"fb", s:"那(nà)个(gè){1}人(rén)是(shì)我(wǒ)哥哥(gēge)。",
 a:["男(nán)"],
 opts:["男(nán)","旧(jiù)","白(bái)","黑(hēi)"],
 hint:"Fill in the word that indicates the gender of the person being described.",
 sSrc:"That {1} person is my older brother."},

{type:"mc", q:"你(nǐ)喜欢(xǐhuan)玩(wán)吗(ma)？ What is this question asking?",
 opts:["Do you like to wash?","Do you like to play?","Do you like black?","Do you like old things?"],
 ans:"Do you like to play?",
 hint:"玩 is the key verb here. Think about what activity people do for fun and leisure."},

{type:"fb", s:"今天(jīntiān)很(hěn)热(rè)，我(wǒ)想(xiǎng)去(qù){1}。",
 a:["洗(xǐ)"],
 opts:["洗(xǐ)","玩(wán)","来(lái)","回(huí)"],
 hint:"It is hot and you want to clean yourself. Which action verb means to wash?",
 sSrc:"Today is very hot, I want to go and {1}."},

{type:"mc", q:"Which word describes a used, worn-out umbrella but NOT an elderly grandparent?",
 opts:["旧(jiù)","老(lǎo)","男(nán)","白(bái)"],
 ans:"旧(jiù)",
 hint:"One word applies to objects showing wear, while 老 is used for people. Which one is for worn objects only?"},

{type:"match", pairs:[
  {trg:"玩(wán)", src:"to play"},
  {trg:"洗(xǐ)", src:"to wash"},
  {trg:"男(nán)人(rén)", src:"man"},
  {trg:"旧(jiù)", src:"old (used)"}
]},

{type:"fb", s:"在(zài)公园(gōngyuán)里(lǐ){1}很(hěn)好(hǎo)！",
 a:["玩(wán)"],
 opts:["玩(wán)","洗(xǐ)","比(bǐ)","更(gèng)"],
 hint:"What activity is great to do in a park? Think about a leisure or fun verb.",
 sSrc:"Playing {1} in the park is great!"}
]}

]};

export default UNIT_07;
