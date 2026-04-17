// Unit 1: Greetings & Self-Introduction
// Level: A1.1 (HSK 1)
// Chinese (Mandarin) V2 format with hanzi+pinyin notation

const UNIT_01 = {
n:1, lang:"zh", srcLang:"en", track:"v2",
title:"你好！", sub:"Greetings & Self-Introduction",
icon:"🇨🇳", level:"A1.1", color:"#7B5EE8",
lessons:[

// ─── L1: 你好! Hello! ───
{id:"zhv2_u1l1", title:"你好! Hello!", icon:"👋", xp:15, board:true, steps:[
{type:"intro", title:"你好! Hello!",
 desc:"Learn the most essential Chinese greetings. You will say hello, goodbye, and navigate your first conversation in Mandarin.",
 goals:["Greet people with 你好 and related phrases","Understand the four tones of Mandarin","Say goodbye with 再见"]},

{type:"tip", title:"How to Read Chinese in This Course",
 text:"Chinese characters (hanzi) always appear with their pronunciation (pinyin) in parentheses:\n\n你好(nǐhǎo) = hello\n\nThe characters before the parentheses are hanzi (meaning + sound).\nThe letters inside ( ) are pinyin with tone marks.\n\nPinyin uses four tones:\n1st tone (flat): \u0101 as in 妈(mā) mother\n2nd tone (rising): \u00e1 as in 麻(má) hemp\n3rd tone (dipping): \u01ce as in 马(mǎ) horse\n4th tone (falling): \u00e0 as in 骂(mà) scold\n\nThe same syllable 'ma' means four completely different things depending on the tone!",
 deepDive:{title:"Why Tones Matter",
  text:"Mandarin has about 400 unique syllables, but over 10,000 common characters. Tones multiply each syllable by four, giving the language around 1,600 distinct sounds.\n\nWithout tones, 'ma' could mean mother, hemp, horse, or scold. In context, Chinese speakers can often guess, but wrong tones can cause real confusion or unintentional humor.\n\nDo not worry about perfecting tones right away. Focus on recognizing the four patterns. Your ear will develop naturally as you practice."}},

{type:"teach", trg:"你好(nǐhǎo)", src:"hello", pos:"intj", gender:null,
 note:"The most common greeting. Works any time of day.\nLiterally: you good.",
 example:"A: 你好(nǐhǎo)！\nB: 你好(nǐhǎo)！",
 exampleSrc:"A: Hello!\nB: Hello!",
 funFact:"Unlike English, Chinese has no separate 'good morning' or 'good afternoon' in casual speech. One greeting covers it all."},

{type:"teach", trg:"你(nǐ)", src:"you", pos:"pron", gender:null,
 note:"Second person singular pronoun. Third tone (dipping).",
 example:"A: 你(nǐ)好(hǎo)！\nB: 你(nǐ)好(hǎo)！",
 exampleSrc:"A: Hello!\nB: Hello!",
 funFact:"The character 你 is made of the 'person' radical on the left and a phonetic component on the right. Many Chinese characters work this way: one part hints at meaning, the other at sound."},

{type:"teach", trg:"好(hǎo)", src:"good", pos:"adj", gender:null,
 note:"Third tone. One of the most common Chinese characters.\nAlso used in greetings and as 'okay.'",
 example:"A: 你(nǐ)好(hǎo)吗(ma)？\nB: 我(wǒ)很(hěn)好(hǎo)！",
 exampleSrc:"A: How are you?\nB: I am very good!",
 funFact:"The character 好 combines 女 (woman) and 子 (child). The ancient idea: a woman with a child is 'good.' One of the easiest characters to remember because of this visual story."},

{type:"teach", trg:"我(wǒ)", src:"I / me", pos:"pron", gender:null,
 note:"First person singular pronoun. Third tone.\nNo case change: 我 means both 'I' and 'me.'",
 example:"A: 你(nǐ)好(hǎo)！我(wǒ)是(shì)大卫(Dàwèi)。\nB: 你(nǐ)好(hǎo)！",
 exampleSrc:"A: Hello! I am David.\nB: Hello!",
 funFact:"Chinese pronouns never change form. 我 is 'I', 'me', and 'my' (with 的). English has I/me/my/mine, but Chinese keeps it simple with one character."},

{type:"teach", trg:"他(tā)", src:"he / him", pos:"pron", gender:null,
 note:"Third person masculine pronoun. First tone (flat).\nSounds identical to 她(tā) 'she.'",
 example:"A: 他(tā)是(shì)谁(shéi)？\nB: 他(tā)是(shì)我(wǒ)的(de)老师(lǎoshī)。",
 exampleSrc:"A: Who is he?\nB: He is my teacher.",
 funFact:"他 and 她 sound exactly the same: tā. You can only tell them apart in writing. This is why Chinese speakers sometimes mix up 'he' and 'she' in English: in spoken Chinese there is no difference."},

{type:"teach", trg:"她(tā)", src:"she / her", pos:"pron", gender:null,
 note:"Third person feminine pronoun. Same pronunciation as 他.\nOnly differs in writing: 女 (woman) radical.",
 example:"A: 她(tā)是(shì)谁(shéi)？\nB: 她(tā)是(shì)我(wǒ)的(de)朋友(péngyou)。",
 exampleSrc:"A: Who is she?\nB: She is my friend.",
 funFact:"The character 她 was actually invented in the early 1900s to translate Western literature. Classical Chinese only had 他 for all genders. The 女 radical was added to create a written feminine form."},

{type:"teach", trg:"再见(zàijiàn)", src:"goodbye", pos:"intj", gender:null,
 note:"The standard farewell. Literally: again see.\nWorks in any situation, formal or casual.",
 example:"A: 我(wǒ)走(zǒu)了(le)。再见(zàijiàn)！\nB: 再见(zàijiàn)！",
 exampleSrc:"A: I am leaving. Goodbye!\nB: Goodbye!",
 funFact:"再 means 'again' and 见 means 'to see.' So 再见 literally means 'see again.' Compare with French 'au revoir' (until seeing again) and German 'Auf Wiedersehen' (upon seeing again). Languages share this idea!"},

{type:"mc", q:"What does 你好(nǐhǎo) literally mean?",
 opts:["you good","I good","good day","thank you"],
 ans:"you good",
 hint:"Break this greeting into its two characters and translate each one separately."},

{type:"match", pairs:[
  {trg:"你(nǐ)", src:"you"},
  {trg:"我(wǒ)", src:"I / me"},
  {trg:"他(tā)", src:"he / him"},
  {trg:"她(tā)", src:"she / her"}
]},

{type:"mc", q:"他(tā) and 她(tā) sound the same. How do you tell them apart?",
 opts:["Different tones","Different characters in writing","Different spelling in pinyin","They cannot be told apart"],
 ans:"Different characters in writing",
 hint:"The pronunciation is identical. The distinction only exists in one form of the language."},

{type:"fb", s:"A: {1}！\nB: 你好(nǐhǎo)！",
 a:["你好(nǐhǎo)"],
 opts:["你好(nǐhǎo)","再见(zàijiàn)","谢谢(xièxie)","好(hǎo)"],
 hint:"Person B responds with the same greeting. What did person A say first?",
 sSrc:"A: {1}!\nB: Hello!"},

{type:"mc", q:"你好(nǐhǎo) can be used:",
 opts:["Only in the morning","Only in the afternoon","Only in the evening","Any time of day"],
 ans:"Any time of day",
 hint:"Unlike English, this Chinese greeting does not change based on the hour."},

{type:"fb", s:"我(wǒ)走(zǒu)了(le)。{1}！",
 a:["再见(zàijiàn)"],
 opts:["再见(zàijiàn)","你好(nǐhǎo)","谢谢(xièxie)","好(hǎo)"],
 hint:"You are leaving. What do you say as a farewell?",
 sSrc:"I am leaving. {1}!"},

{type:"match", pairs:[
  {trg:"你好(nǐhǎo)", src:"hello"},
  {trg:"再见(zàijiàn)", src:"goodbye"},
  {trg:"好(hǎo)", src:"good"},
  {trg:"我(wǒ)", src:"I / me"}
]}
]},

// ─── L2: 我叫... My Name Is... ───
{id:"zhv2_u1l2", title:"我叫... My Name Is...", icon:"🗣️", xp:15, board:true, steps:[
{type:"intro", title:"我叫... My Name Is...",
 desc:"Learn how to introduce yourself and ask someone's name in Chinese. Master the key verbs 是 and 叫.",
 goals:["Introduce yourself with 我叫...","Ask someone's name with 什么","Understand the difference between 是 and 叫"]},

{type:"teach", trg:"是(shì)", src:"to be", pos:"verb", gender:null,
 note:"Fourth tone (falling). The most common Chinese verb.\nLinks a subject to a noun: A 是 B.",
 example:"A: 你(nǐ)是(shì)学生(xuéshēng)吗(ma)？\nB: 是(shì)的(de)，我(wǒ)是(shì)学生(xuéshēng)。",
 exampleSrc:"A: Are you a student?\nB: Yes, I am a student.",
 funFact:"Chinese has no verb conjugation at all. 是 stays 是 whether the subject is I, you, he, she, or they. No am/is/are headaches. The same form works for past, present, and future."},

{type:"teach", trg:"叫(jiào)", src:"to be called", pos:"verb", gender:null,
 note:"Fourth tone. Used to give or ask for names.\n我叫... = My name is... (literally: I am called...)",
 example:"A: 你(nǐ)叫(jiào)什么(shénme)名字(míngzi)？\nB: 我(wǒ)叫(jiào)小明(Xiǎomíng)。",
 exampleSrc:"A: What is your name?\nB: My name is Xiaoming.",
 funFact:"叫 also means 'to shout' or 'to call out.' When you say 我叫大卫, you are literally saying 'I am called David,' as if people shout your name to get your attention."},

{type:"teach", trg:"什么(shénme)", src:"what", pos:"pron", gender:null,
 note:"Question word. Always stays in the same position as the answer.\nNo word order change for questions!",
 example:"A: 你(nǐ)叫(jiào)什么(shénme)名字(míngzi)？\nB: 我(wǒ)叫(jiào)丽萨(Lìsà)。",
 exampleSrc:"A: What is your name?\nB: My name is Lisa.",
 funFact:"Chinese questions keep the same word order as statements. 'You are called Lisa' becomes 'You are called what?' by swapping 'Lisa' with 什么. No rearranging needed."},

{type:"teach", trg:"名字(míngzi)", src:"name", pos:"noun", gender:null,
 note:"A compound word: 名 (name/fame) + 字 (character/word).\nUsed for personal names.",
 example:"A: 你(nǐ)的(de)名字(míngzi)是(shì)什么(shénme)？\nB: 我(wǒ)的(de)名字(míngzi)是(shì)王伟(Wáng Wěi)。",
 exampleSrc:"A: What is your name?\nB: My name is Wang Wei.",
 funFact:"In Chinese, the family name comes FIRST. 王伟 is family name 王 (Wang) + given name 伟 (Wei). This reflects the cultural value of family before individual."},

{type:"tip", title:"是 vs 叫: Two Ways to Introduce Yourself",
 text:"Chinese has two patterns for introductions:\n\n1. 我(wǒ)叫(jiào)... = I am called... (most natural for names)\n2. 我(wǒ)是(shì)... = I am... (for identity/role)\n\nExamples:\n我(wǒ)叫(jiào)大卫(Dàwèi)。 I am called David.\n我(wǒ)是(shì)学生(xuéshēng)。 I am a student.\n\n叫 is specifically for names. 是 links any subject to a noun.\nBoth are correct for names, but 叫 is more common in conversation.",
 deepDive:{title:"Chinese Has No Articles or Verb Changes",
  text:"Notice something missing? Chinese has:\n\nNo articles: no 'a' or 'the.'\nNo verb conjugation: 是 never changes form.\nNo plural markers on nouns: 学生 means both 'student' and 'students.'\nNo tenses on verbs: context and time words handle past/present/future.\n\nThis makes Chinese grammar simpler in some ways than European languages. The challenge is elsewhere: tones, characters, and measure words (which you will learn later)."}},

{type:"teach", trg:"不(bù)", src:"not / no", pos:"adv", gender:null,
 note:"Fourth tone normally, but changes to second tone before another fourth tone.\n不是(búshì) = am not / is not.",
 example:"A: 你(nǐ)是(shì)老师(lǎoshī)吗(ma)？\nB: 不(bú)是(shì)，我(wǒ)是(shì)学生(xuéshēng)。",
 exampleSrc:"A: Are you a teacher?\nB: No, I am a student.",
 funFact:"不 changes its tone depending on what follows. Before a 4th tone word, it becomes 2nd tone: 不是 is pronounced búshì, not bùshì. This is one of only two characters in Chinese that change tone by rule."},

{type:"mc", q:"How do you say 'My name is Lisa' in Chinese?",
 opts:["我(wǒ)好(hǎo)丽萨(Lìsà)","我(wǒ)你(nǐ)丽萨(Lìsà)","我(wǒ)叫(jiào)丽萨(Lìsà)","我(wǒ)再见(zàijiàn)丽萨(Lìsà)"],
 ans:"我(wǒ)叫(jiào)丽萨(Lìsà)",
 hint:"The verb meaning 'to be called' is placed between the subject and the name."},

{type:"fb", s:"你(nǐ)叫(jiào){1}名字(míngzi)？",
 a:["什么(shénme)"],
 opts:["什么(shénme)","好(hǎo)","是(shì)","不(bù)"],
 hint:"Which question word asks 'what' in Chinese?",
 sSrc:"What is your name? (Literally: You are called {1} name?)"},

{type:"mc", q:"Which sentence correctly uses 不(bù) to negate?",
 opts:["不(bù)我(wǒ)是(shì)老师(lǎoshī)","我(wǒ)是(shì)不(bù)老师(lǎoshī)","我(wǒ)是(shì)老师(lǎoshī)不(bù)","我(wǒ)不(bú)是(shì)老师(lǎoshī)"],
 ans:"我(wǒ)不(bú)是(shì)老师(lǎoshī)",
 hint:"In Chinese, the negation word goes directly BEFORE the verb it negates."},

{type:"match", pairs:[
  {trg:"是(shì)", src:"to be"},
  {trg:"叫(jiào)", src:"to be called"},
  {trg:"什么(shénme)", src:"what"},
  {trg:"名字(míngzi)", src:"name"},
  {trg:"不(bù)", src:"not / no"}
]},

{type:"fb", s:"我(wǒ){1}学生(xuéshēng)。",
 a:["是(shì)"],
 opts:["是(shì)","叫(jiào)","好(hǎo)","不(bù)"],
 hint:"Which verb links a subject to an identity or role, like English 'am'?",
 sSrc:"I {1} a student."},

{type:"mc", q:"你(nǐ)叫(jiào)什么(shénme)名字(míngzi)？ What does this sentence ask?",
 opts:["Where are you from?","Are you a student?","How old are you?","What is your name?"],
 ans:"What is your name?",
 hint:"The question word 什么 means 'what,' and 名字 means 'name.' Put them together."},

{type:"fb", s:"我(wǒ){1}大卫(Dàwèi)。",
 a:["叫(jiào)"],
 opts:["叫(jiào)","是(shì)","好(hǎo)","不(bù)"],
 hint:"Which verb specifically means 'to be called' and is used with personal names?",
 sSrc:"My name is David. (Literally: I am called David.)"}
]},

// ─── L3: 谢谢! Polite Phrases ───
{id:"zhv2_u1l3", title:"谢谢! Polite Phrases", icon:"🙏", xp:15, board:true, steps:[
{type:"intro", title:"谢谢! Polite Phrases",
 desc:"Master the essential polite expressions: thank you, sorry, you are welcome. These phrases will carry you through any social situation in Chinese.",
 goals:["Thank someone with 谢谢","Apologize with 对不起","Respond politely with 没关系 and 不客气"]},

{type:"teach", trg:"谢谢(xièxie)", src:"thank you", pos:"intj", gender:null,
 note:"The universal thank-you. The second 谢 is pronounced with a neutral tone.\nMore polite: 谢谢你(xièxie nǐ) (thank you, specifically to you).",
 example:"A: 这(zhè)是(shì)你(nǐ)的(de)书(shū)。\nB: 谢谢(xièxie)！",
 exampleSrc:"A: This is your book.\nB: Thank you!",
 funFact:"谢 originally meant 'to decline' or 'to fade away.' Thanking someone evolved from the idea of humbly withdrawing after receiving a favor. The repetition 谢谢 emphasizes sincerity."},

{type:"teach", trg:"客气(kèqi)", src:"polite / courteous", pos:"adj", gender:null,
 note:"Often used in the phrase 不客气 (you are welcome).\nLiterally: guest energy/manner.",
 example:"A: 谢谢(xièxie)你(nǐ)！\nB: 不(bú)客气(kèqi)！",
 exampleSrc:"A: Thank you!\nB: You are welcome!",
 funFact:"客 means 'guest' and 气 means 'air' or 'manner.' Being 客气 means behaving with guest-like formality. When someone says 不客气 (do not be polite), they mean: relax, no need for formality between us."},

{type:"teach", trg:"对不起(duìbuqǐ)", src:"sorry / excuse me", pos:"intj", gender:null,
 note:"A genuine apology. Literally: cannot face (you).\nStronger than a casual 'sorry.'",
 example:"A: 对不起(duìbuqǐ)，我(wǒ)来(lái)晚(wǎn)了(le)。\nB: 没关系(méi guānxi)！",
 exampleSrc:"A: Sorry, I came late.\nB: It is okay!",
 funFact:"对不起 literally means 'cannot face up to.' The feeling is: I have done something I cannot justify to you. This makes it a deeper apology than English 'sorry,' which can be very casual."},

{type:"teach", trg:"没关系(méi guānxi)", src:"it is okay / no problem", pos:"intj", gender:null,
 note:"Standard response to an apology. Literally: no relationship (to worry about).\n没 = not have. 关系 = connection/relationship.",
 example:"A: 对不起(duìbuqǐ)！\nB: 没关系(méi guānxi)！",
 exampleSrc:"A: Sorry!\nB: It is okay!",
 funFact:"关系 (guanxi) is one of the most important concepts in Chinese culture. It means 'relationship' or 'connections.' When you say 没关系, you are literally saying 'there is no relationship (between this mistake and our friendship).'"},

{type:"tip", title:"Polite Response Pairs",
 text:"Chinese polite phrases come in natural pairs:\n\nThanking:\n谢谢(xièxie) > 不(bú)客气(kèqi)\nThank you > You are welcome\n\nApologizing:\n对不起(duìbuqǐ) > 没关系(méi guānxi)\nSorry > It is okay\n\nLearn them as pairs and you will always know the right response!",
 deepDive:{title:"Levels of Politeness in Chinese",
  text:"Chinese has a gradient of formality, just like English:\n\nThanks (casual to formal):\n谢谢 = thank you (standard)\n谢谢你 = thank you (slightly warmer, specifying 'you')\n非常感谢 = extremely grateful (very formal)\n\nApologies (casual to formal):\n不好意思 = excuse me / my bad (mild)\n对不起 = sorry (genuine apology)\n非常抱歉 = deeply sorry (very formal)\n\nFor now, 谢谢 and 对不起 will cover all your needs at A1 level."}},

{type:"mc", q:"Someone says 谢谢(xièxie) to you. What is the natural response?",
 opts:["对不起(duìbuqǐ)","再见(zàijiàn)","没关系(méi guānxi)","不(bú)客气(kèqi)"],
 ans:"不(bú)客气(kèqi)",
 hint:"This response literally tells someone not to be overly formal or polite with you."},

{type:"fb", s:"A: 对不起(duìbuqǐ)！\nB: {1}！",
 a:["没关系(méi guānxi)"],
 opts:["没关系(méi guānxi)","不(bú)客气(kèqi)","谢谢(xièxie)","你好(nǐhǎo)"],
 hint:"This is the standard reassurance after someone apologizes. It means there is nothing to worry about.",
 sSrc:"A: Sorry!\nB: {1}!"},

{type:"match", pairs:[
  {trg:"谢谢(xièxie)", src:"thank you"},
  {trg:"不(bú)客气(kèqi)", src:"you are welcome"},
  {trg:"对不起(duìbuqǐ)", src:"sorry"},
  {trg:"没关系(méi guānxi)", src:"it is okay"}
]},

{type:"mc", q:"What does 对不起(duìbuqǐ) literally mean?",
 opts:["Cannot face (you)","Thank you very much","No relationship","You are good"],
 ans:"Cannot face (you)",
 hint:"对 means 'face/toward,' 不 means 'not,' and 起 means 'up/able to.' Combine them for the literal meaning."},

{type:"mc", q:"Which phrase means 'you are welcome' in Chinese?",
 opts:["对不起(duìbuqǐ)","不(bú)客气(kèqi)","没关系(méi guānxi)","再见(zàijiàn)"],
 ans:"不(bú)客气(kèqi)",
 hint:"This phrase uses the negation word 不 plus a word meaning 'polite' or 'courteous.'"},

{type:"fb", s:"A: 这(zhè)是(shì)你(nǐ)的(de)书(shū)。\nB: {1}！",
 a:["谢谢(xièxie)"],
 opts:["谢谢(xièxie)","对不起(duìbuqǐ)","再见(zàijiàn)","你好(nǐhǎo)"],
 hint:"Someone just gave you your book. What do you say to express gratitude?",
 sSrc:"A: This is your book.\nB: {1}!"},

{type:"mc", q:"关系(guānxi) in 没关系(méi guānxi) means:",
 opts:["problem","relationship / connection","sorry","goodbye"],
 ans:"relationship / connection",
 hint:"This word is one of the most important cultural concepts in Chinese society, referring to personal connections and networks."},

// ─── Unit 1 Review Quiz ───
{type:"mc", q:"How do you ask 'What is your name?' in Chinese?",
 opts:["你(nǐ)好(hǎo)吗(ma)？","你(nǐ)好(hǎo)！","你(nǐ)叫(jiào)什么(shénme)名字(míngzi)？","你(nǐ)是(shì)谁(shéi)？"],
 ans:"你(nǐ)叫(jiào)什么(shénme)名字(míngzi)？",
 hint:"This question uses the verb for 'to be called' plus the question word for 'what' plus the word for 'name.'"},

{type:"fb", s:"我(wǒ){1}李明(Lǐ Míng)。你(nǐ)叫(jiào)什么(shénme)名字(míngzi)？",
 a:["叫(jiào)"],
 opts:["叫(jiào)","是(shì)","好(hǎo)","不(bù)"],
 hint:"Which verb means 'to be called' and introduces a personal name?",
 sSrc:"My name is Li Ming. What is your name?"},

{type:"match", pairs:[
  {trg:"你好(nǐhǎo)", src:"hello"},
  {trg:"再见(zàijiàn)", src:"goodbye"},
  {trg:"谢谢(xièxie)", src:"thank you"},
  {trg:"对不起(duìbuqǐ)", src:"sorry"},
  {trg:"没关系(méi guānxi)", src:"it is okay"}
]},

{type:"mc", q:"我(wǒ)不(bú)是(shì)老师(lǎoshī)。 What does this mean?",
 opts:["I am a teacher","I am not a teacher","You are a teacher","He is not a teacher"],
 ans:"I am not a teacher",
 hint:"我 means 'I,' 不 negates the verb, and 是 means 'to be.' What identity is being denied?"},

{type:"fb", s:"{1}，我(wǒ)来(lái)晚(wǎn)了(le)。",
 a:["对不起(duìbuqǐ)"],
 opts:["对不起(duìbuqǐ)","谢谢(xièxie)","你好(nǐhǎo)","再见(zàijiàn)"],
 hint:"You arrived late and need to apologize. Which phrase expresses genuine regret?",
 sSrc:"{1}, I came late."}
]}

]};

export default UNIT_01;
