// Unit 11: Hobbies and Interests
// Level: A2.2 (HSK 2)
// Chinese (Mandarin) V2 format with hanzi+pinyin notation

const UNIT_11 = {
n:11, lang:"zh", srcLang:"en", track:"v2",
title:"你喜欢什么？ What Do You Like?", sub:"Hobbies and Sports",
icon:"⚽", level:"A2.2", color:"#7B5EE8",
lessons:[

// ─── L1: Likes and Loves ───
{id:"zhv2_u11l1", title:"Likes and Loves", icon:"❤️", xp:15, board:true, steps:[
{type:"intro", title:"Likes and Loves",
 desc:"Learn how to express what you enjoy doing. Master the verbs 喜欢 and 爱, plus key entertainment vocabulary like movies, music, and books.",
 goals:["Express preferences with 喜欢 and 爱","Learn entertainment vocabulary","Describe what you enjoy doing"]},

{type:"teach", trg:"喜欢(xǐhuan)", src:"to like", pos:"verb", gender:null,
 note:"The most common way to express liking something.\nThe second syllable 欢 is often pronounced with a neutral tone.",
 example:"A: 你(nǐ)喜欢(xǐhuan)什么(shénme)？\nB: 我(wǒ)喜欢(xǐhuan)看(kàn)电影(diànyǐng)。",
 exampleSrc:"A: What do you like?\nB: I like watching movies.",
 funFact:"喜 means 'happy/joy' and 欢 means 'joyful/pleased.' To like something is literally to feel double joy about it. The character 喜 is famous in Chinese weddings, where the double happiness symbol 囍 is everywhere."},

{type:"teach", trg:"爱(ài)", src:"to love", pos:"verb", gender:null,
 note:"Stronger than 喜欢. Used for deep affection, passion, or hobbies you adore.\n我爱你 = I love you.",
 example:"A: 你(nǐ)爱(ài)什么(shénme)运动(yùndòng)？\nB: 我(wǒ)爱(ài)游泳(yóuyǒng)！",
 exampleSrc:"A: What sport do you love?\nB: I love swimming!",
 funFact:"The simplified character 爱 removed the 心 (heart) from the middle of the traditional form 愛. Some people joke that modern love has lost its heart. The traditional version is still used in Taiwan and Hong Kong."},

{type:"teach", trg:"看(kàn)", src:"to watch / to look at / to read", pos:"verb", gender:null,
 note:"One of the most versatile verbs in Chinese.\n看书 = read a book. 看电影 = watch a movie. 看医生 = see a doctor.",
 example:"A: 你(nǐ)在(zài)看(kàn)什么(shénme)？\nB: 我(wǒ)在(zài)看(kàn)书(shū)。",
 exampleSrc:"A: What are you looking at?\nB: I am reading a book.",
 funFact:"看 shows a hand (手) placed above the eye (目) to shade it while looking into the distance. This is exactly what people do when scanning the horizon. The character is a picture of looking."},

{type:"teach", trg:"听(tīng)", src:"to listen", pos:"verb", gender:null,
 note:"First tone (flat). Used for intentional listening.\n听音乐 = listen to music. 听老师 = listen to the teacher.",
 example:"A: 你(nǐ)喜欢(xǐhuan)听(tīng)什么(shénme)音乐(yīnyuè)？\nB: 我(wǒ)喜欢(xǐhuan)听(tīng)中文(zhōngwén)歌(gē)。",
 exampleSrc:"A: What music do you like listening to?\nB: I like listening to Chinese songs.",
 funFact:"The traditional form 聽 is one of the most complex common characters. It contains ear (耳), eye (目), heart (心), and the number one (一), suggesting true listening requires ears, eyes, heart, and undivided attention."},

{type:"teach", trg:"电影(diànyǐng)", src:"movie / film", pos:"noun", gender:null,
 note:"电 = electric + 影 = shadow. Literally: electric shadow.\nA poetic name for movies.",
 example:"A: 我们(wǒmen)去(qù)看(kàn)电影(diànyǐng)吧(ba)！\nB: 好(hǎo)的(de)！看(kàn)什么(shénme)电影(diànyǐng)？",
 exampleSrc:"A: Let us go watch a movie!\nB: Okay! What movie?",
 funFact:"When cinema first arrived in China around 1900, people saw moving shadows on a bright screen. They called it 电影, electric shadows. The name has stuck for over a century, even as the technology changed completely."},

{type:"teach", trg:"音乐(yīnyuè)", src:"music", pos:"noun", gender:null,
 note:"音 = sound + 乐 = joy/music. Literally: joyful sound.\nNote: 乐 is also read as lè meaning 'happy.'",
 example:"A: 你(nǐ)喜欢(xǐhuan)音乐(yīnyuè)吗(ma)？\nB: 我(wǒ)很(hěn)喜欢(xǐhuan)！",
 exampleSrc:"A: Do you like music?\nB: I like it very much!",
 funFact:"The character 乐 has two readings: yuè for music and lè for happiness. The ancient Chinese saw music and joy as the same concept. Confucius considered music essential to moral education and social harmony."},

{type:"teach", trg:"书(shū)", src:"book", pos:"noun", gender:null,
 note:"A fundamental character. 看书 = to read (a book).\nAlso appears in: 书法(shūfǎ) = calligraphy, 图书馆(túshūguǎn) = library.",
 example:"A: 这(zhè)本(běn)书(shū)有意思(yǒu yìsi)吗(ma)？\nB: 很(hěn)有意思(yǒu yìsi)！",
 exampleSrc:"A: Is this book interesting?\nB: Very interesting!",
 funFact:"The simplified 书 comes from the traditional 書, which showed a hand holding a brush writing on bamboo. Ancient Chinese books were literally bamboo strips tied together with cord."},

{type:"tip", title:"喜欢 vs 爱: Like vs Love",
 text:"Both express positive feelings, but at different intensities:\n\n喜欢(xǐhuan) = to like (moderate preference)\n我(wǒ)喜欢(xǐhuan)看(kàn)书(shū)。 I like reading.\n\n爱(ài) = to love (strong passion)\n我(wǒ)爱(ài)看(kàn)书(shū)。 I love reading.\n\nFor hobbies, both work. For people:\n喜欢 = to have a crush on\n爱 = to love (deep romantic or familial love)",
 deepDive:{title:"Expressing Degrees of Liking",
  text:"Chinese has a gradient of intensity:\n\n不喜欢(bù xǐhuan) = do not like\n还行(hái xíng) = it is okay\n喜欢(xǐhuan) = like\n很喜欢(hěn xǐhuan) = really like\n非常喜欢(fēicháng xǐhuan) = extremely like\n爱(ài) = love\n\nYou can also negate with 不太喜欢(bú tài xǐhuan) = do not really like. This is softer than 不喜欢 and more polite."}},

{type:"mc", q:"电影(diànyǐng) literally means:",
 opts:["moving picture","electric shadow","light show","screen art"],
 ans:"electric shadow",
 hint:"Break this word apart: 电 relates to electricity, and 影 relates to shadows or reflections."},

{type:"match", pairs:[
  {trg:"喜欢(xǐhuan)", src:"to like"},
  {trg:"爱(ài)", src:"to love"},
  {trg:"看(kàn)", src:"to watch / to read"},
  {trg:"听(tīng)", src:"to listen"},
  {trg:"电影(diànyǐng)", src:"movie"},
  {trg:"音乐(yīnyuè)", src:"music"},
  {trg:"书(shū)", src:"book"}
]},

{type:"fb", s:"我(wǒ){1}看(kàn)电影(diànyǐng)。",
 a:["喜欢(xǐhuan)"],
 opts:["喜欢(xǐhuan)","爱(ài)","听(tīng)","看(kàn)"],
 hint:"Which verb expresses a moderate preference for an activity?",
 sSrc:"I {1} watching movies."},

{type:"mc", q:"你(nǐ)在(zài)看(kàn)书(shū)吗(ma)？ What is being asked?",
 opts:["Are you buying a book?","Are you writing a book?","Are you reading a book?","Do you have a book?"],
 ans:"Are you reading a book?",
 hint:"看 combined with 书 means engaging visually with printed text on pages."},

{type:"fb", s:"你(nǐ)喜欢(xǐhuan){1}什么(shénme)音乐(yīnyuè)？",
 a:["听(tīng)"],
 opts:["听(tīng)","看(kàn)","写(xiě)","读(dú)"],
 hint:"Which verb involves perceiving sound with your ears?",
 sSrc:"What music do you like {1} to?"},

{type:"mc", q:"Which statement expresses stronger feelings?",
 opts:["我喜欢音乐","我爱音乐","They are exactly the same","Neither expresses feelings"],
 ans:"我爱音乐",
 hint:"One of these verbs indicates deep passion while the other shows moderate enjoyment."}
]},

// ─── L2: Sports and Activities ───
{id:"zhv2_u11l2", title:"Sports and Activities", icon:"🏃", xp:15, board:true, steps:[
{type:"intro", title:"Sports and Activities",
 desc:"Learn to name popular sports and physical activities in Chinese. Discover how Chinese uses different action verbs for different sports.",
 goals:["Name common sports in Chinese","Understand why different sports use different verbs","Use 跑步, 游泳, and ball sport vocabulary"]},

{type:"teach", trg:"游泳(yóuyǒng)", src:"to swim / swimming", pos:"verb", gender:null,
 note:"Both a verb (to swim) and a noun (swimming).\n游 = to swim/float + 泳 = to swim. Both characters have the water radical.",
 example:"A: 你(nǐ)喜欢(xǐhuan)游泳(yóuyǒng)吗(ma)？\nB: 我(wǒ)很(hěn)喜欢(xǐhuan)！",
 exampleSrc:"A: Do you like swimming?\nB: I like it very much!",
 funFact:"Both characters in 游泳 contain the water radical 氵on the left side. Chinese characters are logical: anything water-related usually carries this three-dot radical. It looks like water droplets."},

{type:"teach", trg:"跑步(pǎobù)", src:"to run / jogging", pos:"verb", gender:null,
 note:"跑 = to run + 步 = step. Literally: running steps.\nUsed for recreational running or jogging.",
 example:"A: 你(nǐ)每(měi)天(tiān)跑步(pǎobù)吗(ma)？\nB: 我(wǒ)每(měi)天(tiān)早上(zǎoshang)跑步(pǎobù)。",
 exampleSrc:"A: Do you run every day?\nB: I run every morning.",
 funFact:"跑 contains the foot radical 足 on the left. Just like the water radical marks water words, the foot radical marks movement words: 跑(pǎo) run, 跳(tiào) jump, 踢(tī) kick. The radical system is like a built-in dictionary."},

{type:"teach", trg:"唱歌(chàng gē)", src:"to sing", pos:"verb", gender:null,
 note:"唱 = to sing + 歌 = song. A verb-object compound.\nTo sing a specific song: 唱一首歌.",
 example:"A: 你(nǐ)喜欢(xǐhuan)唱歌(chàng gē)吗(ma)？\nB: 我(wǒ)爱(ài)唱歌(chàng gē)！",
 exampleSrc:"A: Do you like singing?\nB: I love singing!",
 funFact:"KTV (karaoke) is hugely popular in China. Friends rent private rooms and sing for hours. It is a standard way to socialize. The word 唱 has the mouth radical 口 on the left, naturally."},

{type:"teach", trg:"跳舞(tiào wǔ)", src:"to dance", pos:"verb", gender:null,
 note:"跳 = to jump + 舞 = dance. Another verb-object compound.\nLiterally: jump a dance.",
 example:"A: 她(tā)会(huì)跳舞(tiào wǔ)吗(ma)？\nB: 她(tā)跳舞(tiào wǔ)跳(tiào)得(de)很(hěn)好(hǎo)！",
 exampleSrc:"A: Can she dance?\nB: She dances very well!",
 funFact:"Square dancing (广场舞 guǎngchǎng wǔ) is a massive cultural phenomenon in China. Every evening, groups of people (mostly older women) gather in public squares to dance together. It is free exercise and community bonding."},

{type:"teach", trg:"打篮球(dǎ lánqiú)", src:"to play basketball", pos:"verb", gender:null,
 note:"打 = to hit/play + 篮球 = basketball. 打 is used for sports involving hands.\n篮 = basket + 球 = ball.",
 example:"A: 我们(wǒmen)去(qù)打篮球(dǎ lánqiú)吧(ba)！\nB: 好(hǎo)的(de)！",
 exampleSrc:"A: Let us go play basketball!\nB: Okay!",
 funFact:"Basketball is the most popular sport in China, even more than football. Yao Ming's NBA career in the 2000s made the sport a national obsession. Nearly every school and park has a basketball court."},

{type:"teach", trg:"踢足球(tī zúqiú)", src:"to play football/soccer", pos:"verb", gender:null,
 note:"踢 = to kick + 足球 = football. 踢 is used because soccer involves feet.\n足 = foot + 球 = ball.",
 example:"A: 你(nǐ)喜欢(xǐhuan)踢足球(tī zúqiú)吗(ma)？\nB: 喜欢(xǐhuan)，但是(dànshì)我(wǒ)踢(tī)得(de)不(bù)好(hǎo)。",
 exampleSrc:"A: Do you like playing soccer?\nB: Yes, but I do not play well.",
 funFact:"Ancient China invented a soccer-like game called 蹴鞠(cùjū) over 2,000 years ago during the Han Dynasty. FIFA officially recognized it as the origin of football. The game was played by soldiers for fitness training."},

{type:"tip", title:"Sport Verbs: 打, 踢, and Others",
 text:"Chinese uses different verbs for different types of sports:\n\n打(dǎ) = hit/play (hand sports)\n打篮球(dǎ lánqiú) basketball\n打乒乓球(dǎ pīngpāngqiú) table tennis\n打网球(dǎ wǎngqiú) tennis\n\n踢(tī) = kick (foot sports)\n踢足球(tī zúqiú) soccer/football\n\n游(yóu) = swim\n游泳(yóuyǒng) swimming\n\n跑(pǎo) = run\n跑步(pǎobù) running/jogging\n\nThe logic: what body part do you use? Hands = 打. Feet = 踢.",
 deepDive:{title:"Why 打 for Hand Sports?",
  text:"打 originally means 'to hit' or 'to strike.' It extended to any sport where your hands contact the ball, racket, or equipment.\n\nBut 打 also appears in surprising places:\n打电话(dǎ diànhuà) = make a phone call (hit the phone)\n打车(dǎ chē) = hail a taxi (flag down a car)\n打工(dǎ gōng) = work a part-time job (strike at work)\n\n打 is one of the most productive verbs in Chinese with dozens of compound meanings."}},

{type:"mc", q:"Why does basketball use 打(dǎ) while soccer uses 踢(tī)?",
 opts:["打 is for team sports, 踢 is for individual sports","打 is for indoor sports, 踢 is for outdoor sports","打 is for hand sports, 踢 is for foot sports","There is no logical reason"],
 ans:"打 is for hand sports, 踢 is for foot sports",
 hint:"Think about which body part is primarily used in each sport."},

{type:"match", pairs:[
  {trg:"游泳(yóuyǒng)", src:"to swim"},
  {trg:"跑步(pǎobù)", src:"to run / jog"},
  {trg:"唱歌(chàng gē)", src:"to sing"},
  {trg:"跳舞(tiào wǔ)", src:"to dance"},
  {trg:"打篮球(dǎ lánqiú)", src:"to play basketball"},
  {trg:"踢足球(tī zúqiú)", src:"to play soccer"}
]},

{type:"fb", s:"你(nǐ)每(měi)天(tiān){1}吗(ma)？",
 a:["跑步(pǎobù)"],
 opts:["跑步(pǎobù)","游泳(yóuyǒng)","唱歌(chàng gē)","跳舞(tiào wǔ)"],
 hint:"Which activity involves moving quickly on foot, step by step?",
 sSrc:"Do you {1} every day?"},

{type:"mc", q:"我们(wǒmen)去(qù)打篮球(dǎ lánqiú)吧(ba)！ What is the speaker suggesting?",
 opts:["Let us go watch basketball","Let us go buy a basketball","Let us go play basketball","Let us go to the basketball court"],
 ans:"Let us go play basketball",
 hint:"去 means 'to go,' 打 is the hand-sport verb, and 吧 turns a statement into a suggestion."},

{type:"fb", s:"她(tā)爱(ài){1}，每(měi)天(tiān)都(dōu)练习(liànxí)。",
 a:["跳舞(tiào wǔ)"],
 opts:["跳舞(tiào wǔ)","跑步(pǎobù)","游泳(yóuyǒng)","踢足球(tī zúqiú)"],
 hint:"Which activity combines jumping movements with music and rhythm?",
 sSrc:"She loves {1}, and practices every day."},

{type:"mc", q:"Both characters in 游泳(yóuyǒng) contain the water radical 氵. Why?",
 opts:["It is a coincidence","Both characters relate to movement in water","The water radical means 'sport'","All sport words have the water radical"],
 ans:"Both characters relate to movement in water",
 hint:"Chinese radicals categorize meaning. The three-dot ___ radical appears in ___ connected to ___."}
]},

// ─── L3: Expressing Preferences ───
{id:"zhv2_u11l3", title:"Expressing Preferences", icon:"💬", xp:15, board:true, steps:[
{type:"intro", title:"Expressing Preferences",
 desc:"Learn to say how often you do things and express what you find interesting. Combine 有意思, 经常, and 一起 to have richer conversations about hobbies.",
 goals:["Use 有意思 to describe things as interesting","Express frequency with 经常","Suggest doing things together with 一起"]},

{type:"teach", trg:"有意思(yǒu yìsi)", src:"interesting / fun", pos:"adj", gender:null,
 note:"有 = have + 意思 = meaning/interest. Literally: has meaning.\n没有意思(méiyǒu yìsi) or 没意思 = boring.",
 example:"A: 这(zhè)本(běn)书(shū)有意思(yǒu yìsi)吗(ma)？\nB: 很(hěn)有意思(yǒu yìsi)！",
 exampleSrc:"A: Is this book interesting?\nB: Very interesting!",
 funFact:"意思 on its own means 'meaning' or 'idea.' But it appears in many expressions: 有意思 = interesting, 不好意思 = embarrassed/excuse me, 什么意思 = what does it mean? One word, many faces."},

{type:"teach", trg:"经常(jīngcháng)", src:"often / frequently", pos:"adv", gender:null,
 note:"A common frequency adverb. Placed before the verb.\nStronger than 有时候(yǒushíhou) 'sometimes.'",
 example:"A: 你(nǐ)经常(jīngcháng)看(kàn)电影(diànyǐng)吗(ma)？\nB: 我(wǒ)经常(jīngcháng)看(kàn)。",
 exampleSrc:"A: Do you often watch movies?\nB: I often watch them.",
 funFact:"经 originally meant 'warp threads' on a loom, the constant threads that run through the whole fabric. 常 means 'constant.' Together they mean 'passing through constantly,' which is a beautiful way to say 'often.'"},

{type:"teach", trg:"一起(yìqǐ)", src:"together", pos:"adv", gender:null,
 note:"一 = one + 起 = rise/start. Literally: rise as one.\nUsed to suggest doing something jointly: 一起去！",
 example:"A: 我们(wǒmen)一起(yìqǐ)去(qù)游泳(yóuyǒng)吧(ba)！\nB: 好(hǎo)的(de)！",
 exampleSrc:"A: Let us go swimming together!\nB: Okay!",
 funFact:"一起 is the go-to word for togetherness. 一起吃饭 (eat together), 一起学习 (study together), 一起玩 (play together). It turns any solo activity into a social one with just two syllables."},

{type:"tip", title:"Frequency Words in Chinese",
 text:"Chinese frequency adverbs go between the subject and verb:\n\n从来不(cónglái bù) = never\n很少(hěn shǎo) = rarely\n有时候(yǒushíhou) = sometimes\n经常(jīngcháng) = often\n总是(zǒngshì) = always\n\nExample with each:\n我(wǒ)经常(jīngcháng)跑步(pǎobù)。 I often jog.\n我(wǒ)很少(hěn shǎo)游泳(yóuyǒng)。 I rarely swim.",
 deepDive:{title:"每天 vs 经常",
  text:"Both express regular activity, but differently:\n\n每天(měi tiān) = every day (specific, daily)\n经常(jīngcháng) = often (general, frequent)\n\n我每天跑步。 I run every day. (daily habit, no exceptions)\n我经常跑步。 I often run. (frequent but not necessarily daily)\n\n每天 is more precise, 经常 is more flexible. Use 每天 for strict routines and 经常 for general habits."}},

{type:"mc", q:"这(zhè)本(běn)书(shū)很(hěn)有意思(yǒu yìsi)。 What does this mean?",
 opts:["This book is expensive","This book is very long","This book is very interesting","This book has meaning"],
 ans:"This book is very interesting",
 hint:"有意思 describes something that captures your attention and is enjoyable."},

{type:"match", pairs:[
  {trg:"有意思(yǒu yìsi)", src:"interesting"},
  {trg:"经常(jīngcháng)", src:"often"},
  {trg:"一起(yìqǐ)", src:"together"}
]},

{type:"fb", s:"你(nǐ){1}看(kàn)电影(diànyǐng)吗(ma)？",
 a:["经常(jīngcháng)"],
 opts:["经常(jīngcháng)","一起(yìqǐ)","有意思(yǒu yìsi)","喜欢(xǐhuan)"],
 hint:"Which adverb asks about how frequently someone does something?",
 sSrc:"Do you {1} watch movies?"},

{type:"mc", q:"我们(wǒmen)一起(yìqǐ)去(qù)打篮球(dǎ lánqiú)吧(ba)！ The speaker is:",
 opts:["Refusing to play basketball","Asking about basketball rules","Suggesting they play basketball together","Saying they played basketball yesterday"],
 ans:"Suggesting they play basketball together",
 hint:"一起 indicates joint activity, and 吧 signals this is an invitation to do something."},

{type:"fb", s:"我们(wǒmen){1}去(qù)唱歌(chàng gē)吧(ba)！",
 a:["一起(yìqǐ)"],
 opts:["一起(yìqǐ)","经常(jīngcháng)","有意思(yǒu yìsi)","喜欢(xǐhuan)"],
 hint:"Which word turns a solo activity into a group activity?",
 sSrc:"Let us go sing {1}!"},

{type:"mc", q:"没意思(méi yìsi) is the opposite of 有意思(yǒu yìsi). It means:",
 opts:["Very interesting","Quite good","Boring / not interesting","Meaningless"],
 ans:"Boring / not interesting",
 hint:"没 negates 有 (to have). If something 'has meaning' is interesting, then 'not having meaning' is the opposite."},

{type:"fb", s:"这(zhè)个(gè)电影(diànyǐng)很(hěn){1}！",
 a:["有意思(yǒu yìsi)"],
 opts:["有意思(yǒu yìsi)","经常(jīngcháng)","一起(yìqǐ)","喜欢(xǐhuan)"],
 hint:"Which expression describes something as enjoyable and worth your attention?",
 sSrc:"This movie is very {1}!"}
]},

// ─── L4: Hobby Conversations ───
{id:"zhv2_u11l4", title:"Talking About Hobbies", icon:"🎯", xp:15, board:true, steps:[
{type:"intro", title:"Talking About Hobbies",
 desc:"Put everything together in real conversations about hobbies. Review all Unit 11 vocabulary and practice combining preference words with activities.",
 goals:["Have a complete conversation about hobbies","Combine 喜欢/爱 with sport and entertainment verbs","Review all Unit 11 vocabulary"]},

{type:"mc", q:"我(wǒ)爱(ài)听(tīng)音乐(yīnyuè)，经常(jīngcháng)听(tīng)。 What does this person do?",
 opts:["They love playing music and do it often","They love listening to music and do it often","They sometimes listen to music","They want to start listening to music"],
 ans:"They love listening to music and do it often",
 hint:"爱 expresses strong fondness, 听 means to listen, and 经常 indicates high frequency."},

{type:"fb", s:"你(nǐ)喜欢(xǐhuan)什么(shénme){1}？",
 a:["音乐(yīnyuè)"],
 opts:["音乐(yīnyuè)","电影(diànyǐng)","书(shū)","游泳(yóuyǒng)"],
 hint:"Which noun refers to organized sound, songs, and melodies?",
 sSrc:"What {1} do you like?"},

{type:"match", pairs:[
  {trg:"喜欢(xǐhuan)", src:"to like"},
  {trg:"爱(ài)", src:"to love"},
  {trg:"经常(jīngcháng)", src:"often"},
  {trg:"一起(yìqǐ)", src:"together"},
  {trg:"有意思(yǒu yìsi)", src:"interesting"}
]},

{type:"mc", q:"Which sentence is correct Chinese word order?",
 opts:["我跑步经常。","经常我跑步。","我经常跑步。","跑步我经常。"],
 ans:"我经常跑步。",
 hint:"In Chinese, frequency adverbs go between the subject and the verb."},

{type:"drag_fill",
 s:"我(wǒ)喜欢(xǐhuan){1}，她(tā)喜欢(xǐhuan){2}。",
 blanks:{"1":"看(kàn)书(shū)","2":"跳舞(tiào wǔ)"},
 pool:["看(kàn)书(shū)","跳舞(tiào wǔ)","老师(lǎoshī)","工作(gōngzuò)"],
 hint:"One hobby involves reading pages, the other involves moving to music."},

{type:"fb", s:"这(zhè)个(gè)电影(diànyǐng)很(hěn)有意思(yǒu yìsi)，我们(wǒmen){1}去(qù)看(kàn)吧(ba)！",
 a:["一起(yìqǐ)"],
 opts:["一起(yìqǐ)","经常(jīngcháng)","每(měi)","喜欢(xǐhuan)"],
 hint:"Which word invites someone to do something jointly with you?",
 sSrc:"This movie is very interesting, let us go watch it {1}!"},

{type:"mc", q:"打篮球(dǎ lánqiú) uses 打, and 踢足球(tī zúqiú) uses 踢. 唱歌(chàng gē) uses 唱. What pattern do these follow?",
 opts:["Each sport has a random verb","The verb describes the primary physical action","The verb indicates the difficulty level","Older sports use different verbs"],
 ans:"The verb describes the primary physical action",
 hint:"打 = hit (hands), 踢 = kick (feet), 唱 = sing (voice). The ___ matches the body part or ___."},

{type:"match", pairs:[
  {trg:"看(kàn)电影(diànyǐng)", src:"watch a movie"},
  {trg:"听(tīng)音乐(yīnyuè)", src:"listen to music"},
  {trg:"看(kàn)书(shū)", src:"read a book"},
  {trg:"唱歌(chàng gē)", src:"sing"},
  {trg:"跑步(pǎobù)", src:"run / jog"},
  {trg:"游泳(yóuyǒng)", src:"swim"}
]},

{type:"fb", s:"他(tā){1}踢足球(tī zúqiú)，每(měi)周(zhōu)踢(tī)三(sān)次(cì)。",
 a:["经常(jīngcháng)"],
 opts:["经常(jīngcháng)","一起(yìqǐ)","喜欢(xǐhuan)","有意思(yǒu yìsi)"],
 hint:"Which adverb indicates that someone does something with high frequency?",
 sSrc:"He {1} plays soccer, three times every week."},

{type:"mc", q:"我(wǒ)喜欢(xǐhuan)游泳(yóuyǒng)，但是(dànshì)我(wǒ)不(bù)喜欢(xǐhuan)跑步(pǎobù)。 What are this person's preferences?",
 opts:["They like both swimming and running","They dislike both swimming and running","They like swimming but not running","They like running but not swimming"],
 ans:"They like swimming but not running",
 hint:"但是 means 'but,' signaling a contrast between two preferences."},

{type:"drag_fill",
 s:"A: 你(nǐ){1}什么(shénme)运动(yùndòng)？\nB: 我(wǒ){2}游泳(yóuyǒng)！",
 blanks:{"1":"喜欢(xǐhuan)","2":"爱(ài)"},
 pool:["喜欢(xǐhuan)","爱(ài)","经常(jīngcháng)","一起(yìqǐ)"],
 hint:"A asks with the moderate preference verb. B responds with the stronger passion verb."}
]},

// ─── L5: What Are You Doing Right Now? ───
{id:"zhv2_u11l5", title:"正在做什么？ What Are You Doing?", icon:"🎬", xp:20, board:true, steps:[
{type:"intro", title:"正在做什么？ What Are You Doing?",
 desc:"Learn two essential ways to describe actions in progress. Chinese uses 正在 for actions happening right now and 着 for ongoing states or sustained postures.",
 goals:["Use 正在 to say what is happening now","Use 着 for ongoing states and postures","Ask and answer 正在做什么 questions"]},

{type:"teach", trg:"正在(zhèngzài)", src:"right now / in the middle of (doing)", pos:"adv", gender:null,
 note:"Marks an action as happening at this very moment.\n正在 + verb = is currently doing.",
 example:"A: 你(nǐ)正在(zhèngzài)做(zuò)什么(shénme)？\nB: 我(wǒ)正在(zhèngzài)听(tīng)音乐(yīnyuè)。",
 exampleSrc:"A: What are you doing right now?\nB: I am listening to music.",
 funFact:"正 means 'correct, upright, exact' and 在 means 'at/located.' Together, they pinpoint the present moment exactly. Think of it as Chinese's way of saying 'right at this point in time.'"},

{type:"teach", trg:"着(zhe)", src:"(ongoing state marker)", pos:"part", gender:null,
 note:"Attaches to a verb to show a continuous state or held posture.\nVerb + 着 = is in the state of doing.",
 example:"A: 她(tā)在(zài)看(kàn)着(zhe)你(nǐ)。\nB: 是(shì)吗(ma)？",
 exampleSrc:"A: She is looking at you (ongoing).\nB: Is that so?",
 funFact:"着 originally meant 'to wear' or 'to be attached to.' This evolved into a grammatical marker showing that an action clings to a moment — it is not finished but suspended in ongoing time."},

{type:"tip", title:"正在 vs 着: Action vs State",
 text:"Both 正在 and 着 describe ongoing situations, but they work differently:\n\n正在 emphasizes the action is happening NOW:\n我(wǒ)正在(zhèngzài)跑步(pǎobù)。 I am (right now) running.\n她(tā)正在(zhèngzài)唱歌(chàng gē)。 She is (right now) singing.\n\n着 marks a sustained state or posture:\n他(tā)站(zhàn)着(zhe)。 He is standing (posture).\n门(mén)开(kāi)着(zhe)。 The door is open (ongoing state).\n她(tā)看(kàn)着(zhe)我(wǒ)。 She is looking at me (continuous gaze).\n\nRule of thumb: 正在 = action in progress. 着 = state being held.",
 deepDive:{title:"When can they combine?",
  text:"Sometimes both appear together for extra emphasis:\n他(tā)正在(zhèngzài)睡觉(shuìjiào)呢(ne)。 He is sleeping right now.\n她(tā)正(zhèng)看(kàn)着(zhe)我(wǒ)呢(ne)。 She is right in the middle of watching me.\n\nThe particle 呢 at the end adds a gentle emphasis, like English 'you know' or '...isn't that so.' It makes the ongoing nature feel very immediate and conversational.\n\nAt A2 level, use 正在 for actions and 着 for postures and states. The combination comes naturally at B1."}},

{type:"mc", q:"Which sentence means 'I am currently watching a movie'?",
 opts:["我看过电影。","我正在看电影。","我喜欢看电影。","我看了电影。"],
 ans:"我正在看电影。",
 hint:"One of these uses the word that pinpoints the present moment — 'right now, in progress.'"},

{type:"fb", s:"A: 你(nǐ){1}做(zuò)什么(shénme)？\nB: 我(wǒ)正在(zhèngzài)游泳(yóuyǒng)！",
 a:["正在(zhèngzài)"],
 opts:["正在(zhèngzài)","经常(jīngcháng)","一起(yìqǐ)","喜欢(xǐhuan)"],
 hint:"Which word marks an action as happening at this exact moment, right now?",
 sSrc:"A: What are you {1} doing?\nB: I am swimming!"},

{type:"mc", q:"他(tā)站(zhàn)着(zhe)。 What does 着 add to 站 here?",
 opts:["It shows the action happened before","It turns the verb into a question","It shows a sustained posture being held","It makes the action stronger"],
 ans:"It shows a sustained posture being held",
 hint:"着 makes the verb describe a state that is continuing — not one that just started, but one the subject keeps up."},

{type:"fb", s:"门(mén)开(kāi){1}。",
 a:["着(zhe)"],
 opts:["着(zhe)","了(le)","过(guò)","正在(zhèngzài)"],
 hint:"The door is open as an ongoing state — not 'was opened' but 'remains open.' Which marker shows an ongoing state?",
 sSrc:"The door is open (ongoing state)."},

{type:"tip", title:"Asking 'What Are You Doing?'",
 text:"The most useful question pattern with 正在:\n\n你(nǐ)正在(zhèngzài)做(zuò)什么(shénme)？ What are you doing right now?\n\nCommon answers:\n我(wǒ)正在(zhèngzài)听(tīng)音乐(yīnyuè)。 I am listening to music.\n她(tā)正在(zhèngzài)看(kàn)书(shū)。 She is reading a book.\n他(tā)正在(zhèngzài)打篮球(dǎ lánqiú)。 He is playing basketball.\n\nNote that 做什么 (do what) stays in the same word order as a statement. No inversion needed in Chinese questions!"},

{type:"mc", q:"How do you say 'She is reading a book right now'?",
 opts:["她看过书。","她喜欢看书。","她正在看书。","她看了书。"],
 ans:"她正在看书。",
 hint:"Look for the form that shows an action happening at this very moment, using 正在."},

{type:"fb", s:"她(tā)正在(zhèngzài){1}音乐(yīnyuè)。",
 a:["听(tīng)"],
 opts:["听(tīng)","看(kàn)","爱(ài)","跑步(pǎobù)"],
 hint:"Which verb means 'to listen'? It pairs with 音乐 (music) and is followed by the object.",
 sSrc:"She is currently {1} to music."},

{type:"match", pairs:[
  {trg:"正在(zhèngzài)", src:"right now / in the middle of"},
  {trg:"着(zhe)", src:"(ongoing state marker)"},
  {trg:"做(zuò)", src:"to do"},
  {trg:"站(zhàn)", src:"to stand"}
]},

{type:"mc", q:"你正在做什么？ What is this question asking?",
 opts:["What do you like to do?","What did you just do?","What are you doing right now?","What will you do?"],
 ans:"What are you doing right now?",
 hint:"正在 marks the present moment. The question is about what is happening NOW, not in the past or future."},

{type:"drag_fill",
 s:"A: 她(tā){1}做(zuò)什么(shénme)？\nB: 她(tā)正在(zhèngzài){2}。",
 blanks:{"1":"正在(zhèngzài)","2":"唱歌(chàng gē)"},
 pool:["正在(zhèngzài)","唱歌(chàng gē)","经常(jīngcháng)","跳舞(tiào wǔ)"],
 hint:"A asks about what she is doing right now. B says she is singing."}
]},

// ─── L6: 笑和哭 Laughter and Tears ───
{id:"zhv2_u11l6", title:"笑和哭 Laughter and Tears", icon:"😂", xp:15, board:true, steps:[
{type:"intro", title:"Laughter and Tears",
 desc:"Learn how to describe emotional reactions while watching or hearing things you enjoy. Master the verbs for laughing and crying — two of the most natural human responses to stories, movies, and music.",
 goals:["Use 笑 to describe laughing","Use 哭 to describe crying","Combine emotional reactions with activities from this unit"]},

{type:"teach", trg:"笑(xiào)", src:"to laugh / to smile", pos:"verb", gender:null,
 note:"Fourth tone (falling). Covers both laughing and smiling.\n笑着 = smiling. 大笑 = laugh loudly. 笑话 = joke (laugh-talk).",
 example:"A: 这(zhè)个(gè)电影(diànyǐng)很(hěn)好笑(hǎoxiào)！\nB: 是(shì)的(de)，我(wǒ)看(kàn)了(le)一(yī)直(zhí)在(zài)笑(xiào)。",
 exampleSrc:"A: This movie is very funny!\nB: Yes, I kept laughing the whole time.",
 funFact:"The character 笑 shows bamboo (竹) bending over a person (夭) who is bending forward in laughter. Bamboo sways flexibly in the wind, and a laughing person sways the same way — a beautiful visual metaphor. 笑 is also one of the most common characters in Chinese internet slang."},

{type:"teach", trg:"哭(kū)", src:"to cry / to weep", pos:"verb", gender:null,
 note:"First tone (high flat). Describes crying with tears.\n哭鼻子(kū bízi) = cry one's nose (informal, like 'cry your eyes out').",
 example:"A: 这(zhè)个(gè)电影(diànyǐng)让(ràng)你(nǐ)哭(kū)了(le)吗(ma)？\nB: 哭(kū)了(le)！结局(jiéjú)太(tài)感人(gǎnrén)了(le)。",
 exampleSrc:"A: Did this movie make you cry?\nB: I cried! The ending was so moving.",
 funFact:"哭 combines 口 (mouth, twice — representing wailing sounds) and 犬 (dog, thought to represent a crying sound or grief). The character visually captures the sound of someone crying out loud. In Chinese culture, crying at a moving film or story is considered a sign of genuine feeling, not weakness."},

{type:"tip", title:"Emotional Reactions to Entertainment",
 text:"Chinese has a rich set of expressions for reacting to media:\n\n好笑(hǎoxiào) = funny (good-laugh)\n感人(gǎnrén) = moving / touching\n有意思(yǒu yìsi) = interesting\n没意思(méi yìsi) = boring\n\nWith verbs:\n让(ràng)我(wǒ)笑(xiào) = made me laugh (lit. let me laugh)\n让(ràng)我(wǒ)哭(kū) = made me cry (lit. let me cry)\n\nThe pattern 让 + person + verb means 'cause someone to do something.' Very common for describing emotional effects.",
 deepDive:{title:"让 (ràng): The Causative Verb",
  text:"让 is one of Chinese's most versatile verbs:\n\n1. Permission: 妈妈让我去 = Mom lets me go\n2. Causative: 这个故事让我哭了 = This story made me cry\n3. Request: 请让一下 = Please move aside\n\nAt A2, learn 让 mainly in the causative sense (made someone do something) and permission sense (someone allows something). Both appear constantly in descriptions of reactions and interactions."}},

{type:"mc", q:"Which sentence means 'This joke is very funny'?",
 opts:["这个笑话很感人。","这个笑话很有意思。","这个笑话很好笑。","这个笑话让我哭了。"],
 ans:"这个笑话很好笑。",
 hint:"The word 好笑 means funny — it combines 好 (good) and 笑 (laugh). A 'good laugh' thing."},

{type:"match", pairs:[
  {trg:"笑(xiào)", src:"to laugh / smile"},
  {trg:"哭(kū)", src:"to cry"},
  {trg:"好笑(hǎoxiào)", src:"funny"},
  {trg:"感人(gǎnrén)", src:"moving / touching"}
]},

{type:"fb", s:"这(zhè)个(gè)电影(diànyǐng)让(ràng)我(wǒ){1}了(le)！太(tài)感人(gǎnrén)了(le)。",
 a:["哭(kū)"],
 opts:["哭(kū)","笑(xiào)","唱歌(chàng gē)","跳舞(tiào wǔ)"],
 hint:"The movie is described as touching (感人). Which emotional reaction involves tears?",
 sSrc:"This movie made me {1}! It is so touching."},

{type:"mc", q:"她(tā)正在(zhèngzài)笑(xiào)着(zhe)。 What is she doing?",
 opts:["She is crying","She is singing","She is smiling right now","She is dancing"],
 ans:"She is smiling right now",
 hint:"正在 marks an action happening now. 着 marks a sustained state. Together they show an ongoing smiling expression."},

{type:"fb", s:"这(zhè)个(gè)笑话(xiàohua)很(hěn){1}，我(wǒ)一(yī)直(zhí)在(zài)笑(xiào)。",
 a:["好笑(hǎoxiào)"],
 opts:["好笑(hǎoxiào)","感人(gǎnrén)","忙(máng)","有意思(yǒu yìsi)"],
 hint:"The person kept laughing. Which word describes something that causes laughter?",
 sSrc:"This joke is very {1}, I kept laughing."},

{type:"mc", q:"哭 combines which elements?",
 opts:["Eye + water","Two mouths + dog (representing crying sounds)","Heart + eye","Mouth + tear"],
 ans:"Two mouths + dog (representing crying sounds)",
 hint:"The character encodes both the sound of crying (through the two 口 components) and an ancient reference to vocal grief."},

{type:"match", pairs:[
  {trg:"笑(xiào)", src:"to laugh"},
  {trg:"哭(kū)", src:"to cry"},
  {trg:"让(ràng)我(wǒ)笑(xiào)", src:"made me laugh"},
  {trg:"让(ràng)我(wǒ)哭(kū)", src:"made me cry"}
]}
]}

]};

export default UNIT_11;
