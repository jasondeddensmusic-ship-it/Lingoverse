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
]}

]};

export default UNIT_07;
