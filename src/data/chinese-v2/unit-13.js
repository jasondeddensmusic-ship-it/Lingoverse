// Unit 13: Describing and Comparing
// Level: B1.1 (HSK 3)
// Chinese (Mandarin) V2 format with hanzi+pinyin notation
// Vocab: 越来越, 虽然...但是, 一边...一边, 特别, 其实, 一定, 总是, 差不多, 够, 只, 另外, 重要, 容易, 难, 清楚

const UNIT_13 = {
n:13, lang:"zh", srcLang:"en", track:"v2",
title:"越来越好 Better and Better", sub:"Advanced Descriptions",
icon:"\uD83D\uDCCA", level:"B1.1", color:"#7B5EE8",
lessons:[

// === L1: Degree and Emphasis ===
{id:"zhv2_u13l1", title:"特别好！ Especially Good!", icon:"\u2B50", xp:15, board:true, steps:[
{type:"intro", title:"特别好！ Especially Good!",
 desc:"Move beyond 很 (very) to express degree and emphasis with more nuance. Learn words like 'especially,' 'actually,' 'definitely,' 'always,' and 'only' to make your Chinese more expressive.",
 goals:["Emphasize with 特别 (especially) and 一定 (definitely)","Correct assumptions with 其实 (actually)","Express habits with 总是 (always) and limits with 只 (only)"]},

{type:"teach", trg:"特别(tèbié)", src:"especially / particularly", pos:"adv", gender:null,
 note:"Used before adjectives and verbs for strong emphasis.\nStronger than 很, gentler than 最 (most).",
 example:"A: 今天(jīntiān)天气(tiānqì)怎么样(zěnmeyàng)？\nB: 今天(jīntiān)特别(tèbié)冷(lěng)！",
 exampleSrc:"A: How is the weather today?\nB: It is especially cold today!",
 funFact:"特别 can also be used as an adjective meaning 'special' or 'unusual.' 这个人很特别 means 'this person is very special.' Context determines whether it means 'especially' or 'special.'"},

{type:"teach", trg:"其实(qíshí)", src:"actually / in fact", pos:"adv", gender:null,
 note:"Used at the start of a sentence to correct a misunderstanding.\nSignals that reality differs from assumption.",
 example:"A: 中文(zhōngwén)很(hěn)难(nán)吧(ba)？\nB: 其实(qíshí)中文(zhōngwén)语法(yǔfǎ)不(bù)难(nán)。",
 exampleSrc:"A: Chinese is really difficult, right?\nB: Actually, Chinese grammar is not difficult.",
 funFact:"其实 literally means 'its reality.' It is the Chinese equivalent of 'actually' or 'to tell you the truth.' Using it signals you are about to say something the listener may not expect."},

{type:"teach", trg:"一定(yídìng)", src:"definitely / certainly", pos:"adv", gender:null,
 note:"Expresses certainty or strong intention.\nAlso used for strong promises: 我一定来 = I will definitely come.",
 example:"A: 你(nǐ)明天(míngtiān)来(lái)吗(ma)？\nB: 我(wǒ)一定(yídìng)来(lái)！",
 exampleSrc:"A: Are you coming tomorrow?\nB: I will definitely come!",
 funFact:"一定 combines 一 (one/single) and 定 (fixed/settled). Something 'fixed as one' is certain. In negative form, 不一定 means 'not necessarily,' a very useful phrase for softening statements."},

{type:"teach", trg:"总是(zǒngshì)", src:"always", pos:"adv", gender:null,
 note:"Describes habitual actions. Goes before the verb.\nSlightly stronger than 常常 (often).",
 example:"A: 他(tā)怎么(zěnme)总是(zǒngshì)迟到(chídào)？\nB: 他(tā)家(jiā)很(hěn)远(yuǎn)。",
 exampleSrc:"A: Why is he always late?\nB: His home is very far.",
 funFact:"总 originally meant 'to gather together' or 'general/overall.' 总是 evolved to mean 'always' from the idea of 'in all cases.' Chinese frequently builds adverbs from concrete concepts."},

{type:"teach", trg:"只(zhǐ)", src:"only / just", pos:"adv", gender:null,
 note:"Limits the scope. Goes before the verb.\n只有 = only have. 只是 = just/merely.",
 example:"A: 你(nǐ)有(yǒu)几(jǐ)个(gè)孩子(háizi)？\nB: 我(wǒ)只(zhǐ)有(yǒu)一(yí)个(gè)。",
 exampleSrc:"A: How many children do you have?\nB: I only have one.",
 funFact:"只 is one of those characters with multiple pronunciations. As zhǐ it means 'only.' As zhī it is a measure word for animals and certain objects. Pronunciation determines meaning entirely."},

{type:"mc", q:"今天(jīntiān)特别(tèbié)热(rè)！ How is the weather?",
 opts:["A bit warm","Especially hot","Not very hot","Cool"],
 ans:"Especially hot",
 hint:"特别 means 'especially' or 'particularly,' indicating a strong degree. Combined with 热 (hot), it means extremely hot."},

{type:"match", pairs:[
  {trg:"特别(tèbié)", src:"especially"},
  {trg:"其实(qíshí)", src:"actually"},
  {trg:"一定(yídìng)", src:"definitely"},
  {trg:"总是(zǒngshì)", src:"always"},
  {trg:"只(zhǐ)", src:"only"}
]},

{type:"fb", s:"A: 中文(zhōngwén)很(hěn)难(nán)吧(ba)？\nB: {1}不(bù)难(nán)。",
 a:["其实(qíshí)"],
 opts:["其实(qíshí)","特别(tèbié)","一定(yídìng)","总是(zǒngshì)"],
 hint:"The speaker is correcting a misunderstanding. Which word means 'actually' or 'in fact'?",
 sSrc:"A: Chinese is really hard, right?\nB: {1} it is not hard."},

{type:"mc", q:"我(wǒ)一定(yídìng)来(lái)！ What does the speaker promise?",
 opts:["Maybe I will come","I will definitely come","I only come sometimes","I actually came"],
 ans:"I will definitely come",
 hint:"一定 expresses certainty. The speaker is making a strong commitment."},

{type:"fb", s:"他(tā){1}迟到(chídào)，今天(jīntiān)也(yě)迟到(chídào)了(le)。",
 a:["总是(zǒngshì)"],
 opts:["总是(zǒngshì)","只(zhǐ)","其实(qíshí)","特别(tèbié)"],
 hint:"This person is late as a habit. Which word describes something that happens every time?",
 sSrc:"He is {1} late, and today he was late again."},

{type:"mc", q:"我(wǒ)只(zhǐ)有(yǒu)两(liǎng)个(gè)。 What does 只 tell us?",
 opts:["The speaker has many","The speaker has a total of exactly two","The speaker has at least two","The speaker has more than two"],
 ans:"The speaker has a total of exactly two",
 hint:"只 limits the quantity, meaning 'only' or 'just.' It emphasizes the number is small or limited."},

{type:"fb", s:"这(zhè)个(gè)地方(dìfang){1}好(hǎo)！我(wǒ)很(hěn)喜欢(xǐhuan)。",
 a:["特别(tèbié)"],
 opts:["特别(tèbié)","只(zhǐ)","总是(zǒngshì)","其实(qíshí)"],
 hint:"The speaker strongly likes this place. Which adverb means 'especially' before an adjective?",
 sSrc:"This place is {1} great! I really like it."}
]},

// === L2: Comparisons and Descriptions ===
{id:"zhv2_u13l2", title:"越来越好 Better and Better", icon:"\uD83D\uDCC8", xp:15, board:true, steps:[
{type:"intro", title:"越来越好 Better and Better",
 desc:"Learn to describe progressive change with 越来越, express 'enough' with 够, and describe things as 'almost' with 差不多. Master key descriptive adjectives for difficulty and importance.",
 goals:["Express progressive change with 越来越","Use 差不多 for approximate descriptions","Describe difficulty with 难/容易 and importance with 重要"]},

{type:"teach", trg:"越来越(yuèláiyuè)", src:"more and more", pos:"adv", gender:null,
 note:"Used before adjectives or verbs to show increasing change.\n越来越好 = better and better. 越来越冷 = colder and colder.",
 example:"A: 你(nǐ)的(de)中文(zhōngwén)怎么样(zěnmeyàng)了(le)？\nB: 越来越(yuèláiyuè)好(hǎo)了(le)！",
 exampleSrc:"A: How is your Chinese going?\nB: Better and better!",
 funFact:"越 originally meant 'to cross over' or 'to exceed.' The pattern 越来越 literally means 'exceeding as it comes, exceeding more.' It captures the idea of something growing beyond its previous state with each passing moment."},

{type:"teach", trg:"差不多(chàbuduō)", src:"almost / about the same", pos:"adv", gender:null,
 note:"差 = differ, 不多 = not much. Literally: differ not much.\nUsed for approximation and similarity.",
 example:"A: 你们(nǐmen)两(liǎng)个(gè)多(duō)大(dà)？\nB: 我们(wǒmen)差不多(chàbuduō)，都(dōu)二十五(èrshíwǔ)岁(suì)。",
 exampleSrc:"A: How old are you two?\nB: We are about the same, both around twenty-five.",
 funFact:"差不多 is one of the most commonly used expressions in daily Chinese. It works as 'almost,' 'approximately,' 'more or less,' and 'close enough.' Some cultural commentators call China a 差不多 culture, meaning things do not need to be exact."},

{type:"teach", trg:"够(gòu)", src:"enough", pos:"adj", gender:null,
 note:"Fourth tone. Can go before or after adjectives.\n够了 = that is enough. 不够 = not enough.",
 example:"A: 钱(qián)够(gòu)不(bu)够(gòu)？\nB: 够(gòu)了(le)，谢谢(xièxie)。",
 exampleSrc:"A: Is there enough money?\nB: It is enough, thanks.",
 funFact:"够 works both as an adjective and a verb. 够了 (enough, stop) is one of the most practical phrases you can learn. Parents say it to children, bosses say it in meetings, and friends say it when the food order is large enough."},

{type:"teach", trg:"重要(zhòngyào)", src:"important", pos:"adj", gender:null,
 note:"重 = heavy/important, 要 = want/need.\nLiterally: heavily needed. A formal, serious adjective.",
 example:"A: 这(zhè)件(jiàn)事(shì)重要(zhòngyào)吗(ma)？\nB: 很(hěn)重要(zhòngyào)！",
 exampleSrc:"A: Is this matter important?\nB: Very important!",
 funFact:"重 has two pronunciations: zhòng (heavy/important) and chóng (again/repeat). In 重要, it means 'weighty' or 'significant.' The same character in 重新 (chóngxīn) means 'again.' Pronunciation changes meaning."},

{type:"teach", trg:"容易(róngyì)", src:"easy", pos:"adj", gender:null,
 note:"The opposite of 难. Used for tasks, concepts, and situations.\n很容易 = very easy. 不容易 = not easy.",
 example:"A: 中文(zhōngwén)容易(róngyì)吗(ma)？\nB: 语法(yǔfǎ)容易(róngyì)，汉字(hànzì)不(bù)容易(róngyì)。",
 exampleSrc:"A: Is Chinese easy?\nB: Grammar is easy, characters are not easy.",
 funFact:"Chinese speakers often say 不容易 (not easy) as understatement praise. 'That was 不容易' means 'what you did was impressive and took real effort.' It acknowledges difficulty with admiration."},

{type:"teach", trg:"难(nán)", src:"difficult / hard", pos:"adj", gender:null,
 note:"Second tone. The opposite of 容易.\n很难 = very difficult. 难不难 = difficult or not?",
 example:"A: 这(zhè)个(gè)考试(kǎoshì)难(nán)不(bu)难(nán)？\nB: 有(yǒu)一点儿(yìdiǎnr)难(nán)。",
 exampleSrc:"A: Is this exam difficult or not?\nB: A little bit difficult.",
 funFact:"难 also means 'disaster' or 'suffering' when pronounced nàn (fourth tone). 困难 (kùnnan) means 'difficulty.' The same character carries both 'difficult' and 'hardship,' showing how Chinese connects concepts through shared characters."},

{type:"teach", trg:"清楚(qīngchu)", src:"clear / clearly", pos:"adj", gender:null,
 note:"清 = clear/pure, 楚 = clear/distinct.\nUsed for understanding, speech, and vision.",
 example:"A: 你(nǐ)听(tīng)清楚(qīngchu)了(le)吗(ma)？\nB: 听(tīng)清楚(qīngchu)了(le)。",
 exampleSrc:"A: Did you hear clearly?\nB: I heard clearly.",
 funFact:"清楚 works with many verbs: 看清楚 (see clearly), 听清楚 (hear clearly), 说清楚 (say clearly). It is a result complement, indicating the outcome of the action was clarity."},

{type:"mc", q:"你(nǐ)的(de)中文(zhōngwén)越来越(yuèláiyuè)好(hǎo)了(le)！ What is being said?",
 opts:["Your Chinese is bad","Your Chinese is getting worse","Your Chinese is getting better and better","Your Chinese is the same"],
 ans:"Your Chinese is getting better and better",
 hint:"越来越 describes something that increases progressively. Combined with 好, it means improving continuously."},

{type:"match", pairs:[
  {trg:"越来越(yuèláiyuè)", src:"more and more"},
  {trg:"差不多(chàbuduō)", src:"almost / about the same"},
  {trg:"够(gòu)", src:"enough"},
  {trg:"重要(zhòngyào)", src:"important"},
  {trg:"容易(róngyì)", src:"easy"}
]},

{type:"fb", s:"天气(tiānqì){1}冷(lěng)了(le)。",
 a:["越来越(yuèláiyuè)"],
 opts:["越来越(yuèláiyuè)","差不多(chàbuduō)","特别(tèbié)","总是(zǒngshì)"],
 hint:"The weather is getting progressively colder. Which pattern means 'more and more'?",
 sSrc:"The weather is getting {1} cold."},

{type:"mc", q:"钱(qián)够(gòu)不(bu)够(gòu)？ What is being asked?",
 opts:["Do you have money?","Is there enough money?","How much money?","Where is the money?"],
 ans:"Is there enough money?",
 hint:"够 means 'enough' and the A-不-A pattern asks a yes/no question about sufficiency."},

{type:"fb", s:"这(zhè)个(gè)考试(kǎoshì)不(bù)难(nán)，很(hěn){1}。",
 a:["容易(róngyì)"],
 opts:["容易(róngyì)","难(nán)","重要(zhòngyào)","清楚(qīngchu)"],
 hint:"The exam is not difficult. What is the opposite of 难?",
 sSrc:"This exam is not hard, very {1}."},

{type:"mc", q:"差不多(chàbuduō) literally means:",
 opts:["very different","differ not much","exactly the same","completely wrong"],
 ans:"differ not much",
 hint:"差 means 'differ,' 不 means 'not,' 多 means 'much.' Put the three parts together."},

{type:"fb", s:"你(nǐ)说(shuō){1}了(le)吗(ma)？我(wǒ)没(méi)听(tīng)懂(dǒng)。",
 a:["清楚(qīngchu)"],
 opts:["清楚(qīngchu)","容易(róngyì)","重要(zhòngyào)","差不多(chàbuduō)"],
 hint:"Did you speak in a way that is easy to understand? This word means 'clearly.'",
 sSrc:"Did you say it {1}? I did not understand."}
]},

// === L3: Compound Sentence Patterns ===
{id:"zhv2_u13l3", title:"虽然...但是 Although...But", icon:"\uD83D\uDD17", xp:15, board:true, steps:[
{type:"intro", title:"虽然...但是 Although...But",
 desc:"Learn two powerful sentence patterns that make your Chinese sound more natural and sophisticated: concession with 虽然...但是 and simultaneous actions with 一边...一边.",
 goals:["Build concession sentences with 虽然...但是","Describe simultaneous actions with 一边...一边","Use 另外 to add information"]},

{type:"teach", trg:"虽然...但是(suīrán...dànshì)", src:"although...but", pos:"conj", gender:null,
 note:"Two-part conjunction. 虽然 introduces the concession, 但是 introduces the contrast.\nBoth parts are required in Chinese (unlike English).",
 example:"A: 中文(zhōngwén)怎么样(zěnmeyàng)？\nB: 虽然(suīrán)难(nán)，但是(dànshì)很(hěn)有意思(yǒuyìsi)。",
 exampleSrc:"A: How is Chinese?\nB: Although it is difficult, it is very interesting.",
 funFact:"In English, you say either 'although' or 'but,' never both in the same sentence. In Chinese, you MUST use both 虽然 and 但是 together. 'Although X, but Y' is the correct Chinese pattern."},

{type:"tip", title:"虽然...但是 Pattern",
 text:"Chinese concession sentences use BOTH parts:\n\n虽然(suīrán) + concession, 但是(dànshì) + main point\n\nExamples:\n虽然(suīrán)很(hěn)远(yuǎn)，但是(dànshì)很(hěn)好(hǎo)。\nAlthough it is far, it is very good.\n\n虽然(suīrán)贵(guì)，但是(dànshì)值得(zhíde)。\nAlthough it is expensive, it is worth it.\n\nThe main idea always follows 但是. The 虽然 clause is the thing you acknowledge before making your real point.",
 deepDive:{title:"Why Both Parts Are Required",
  text:"English lets you drop one half: 'Although it is hard, I like it' (no 'but') or 'It is hard, but I like it' (no 'although').\n\nChinese requires both markers because they serve different grammatical roles. 虽然 flags the upcoming contrast, and 但是 introduces the speaker's real opinion. Dropping either part sounds incomplete to Chinese ears.\n\nSometimes 但是 is shortened to 但 or 可是 (kěshì). All three work as the 'but' half."}},

{type:"teach", trg:"一边...一边(yìbiān...yìbiān)", src:"while doing X, doing Y", pos:"adv", gender:null,
 note:"Describes two simultaneous actions.\nPattern: 一边 + verb1, 一边 + verb2.",
 example:"A: 你(nǐ)在(zài)做(zuò)什么(shénme)？\nB: 我(wǒ)一边(yìbiān)吃(chī)饭(fàn)，一边(yìbiān)看(kàn)书(shū)。",
 exampleSrc:"A: What are you doing?\nB: I am eating while reading.",
 funFact:"一边 literally means 'one side.' The pattern 一边...一边 means 'on one side doing X, on the other side doing Y.' It paints a picture of a person split between two activities happening at the same time."},

{type:"teach", trg:"另外(lìngwài)", src:"in addition / besides", pos:"adv", gender:null,
 note:"Used to add new information or a separate topic.\n另 = other/another, 外 = outside.",
 example:"A: 你(nǐ)还(hái)要(yào)什么(shénme)？\nB: 另外(lìngwài)，我(wǒ)想(xiǎng)要(yào)一(yì)杯(bēi)茶(chá)。",
 exampleSrc:"A: What else do you need?\nB: In addition, I would like a cup of tea.",
 funFact:"另外 can also work as an adjective meaning 'another' or 'other.' 另外一个人 means 'another person.' It is versatile: use it to add to a list, change topics, or mention something separate."},

{type:"mc", q:"虽然(suīrán)贵(guì)，但是(dànshì)很(hěn)好(hǎo)。 What is the speaker's overall opinion?",
 opts:["It is too expensive","It is good despite the price","It is cheap and good","It is bad"],
 ans:"It is good despite the price",
 hint:"The real opinion follows 但是. The speaker acknowledges the price but emphasizes the quality."},

{type:"fb", s:"{1}很(hěn)远(yuǎn)，但是(dànshì)很(hěn)好(hǎo)。",
 a:["虽然(suīrán)"],
 opts:["虽然(suīrán)","一边(yìbiān)","另外(lìngwài)","其实(qíshí)"],
 hint:"Which word starts the 'although' half of a concession sentence?",
 sSrc:"{1} it is very far, it is very good."},

{type:"mc", q:"我(wǒ)一边(yìbiān)走(zǒu)，一边(yìbiān)说话(shuōhuà)。 What is happening?",
 opts:["Walking, then talking","Talking while walking","Walking instead of talking","Neither walking nor talking"],
 ans:"Talking while walking",
 hint:"一边...一边 means two actions happen at the same time, simultaneously."},

{type:"fb", s:"我(wǒ)一边(yìbiān)吃(chī)饭(fàn)，{1}看(kàn)电视(diànshì)。",
 a:["一边(yìbiān)"],
 opts:["一边(yìbiān)","虽然(suīrán)","但是(dànshì)","另外(lìngwài)"],
 hint:"The second action in a simultaneous pattern needs the same word as the first.",
 sSrc:"I am eating {1} watching TV."},

{type:"match", pairs:[
  {trg:"虽然(suīrán)", src:"although"},
  {trg:"但是(dànshì)", src:"but"},
  {trg:"一边(yìbiān)", src:"while / at the same time"},
  {trg:"另外(lìngwài)", src:"in addition"},
  {trg:"清楚(qīngchu)", src:"clear / clearly"}
]},

{type:"mc", q:"另外(lìngwài)，我(wǒ)还(hái)要(yào)一(yí)个(gè)。 What does 另外 do here?",
 opts:["It disagrees with something","It asks a question","It adds extra information","It expresses doubt"],
 ans:"It adds extra information",
 hint:"另外 introduces something additional, like saying 'besides' or 'also' in English."},

{type:"fb", s:"虽然(suīrán)很(hěn)难(nán)，{1}我(wǒ)一定(yídìng)学(xué)好(hǎo)。",
 a:["但是(dànshì)"],
 opts:["但是(dànshì)","虽然(suīrán)","一边(yìbiān)","另外(lìngwài)"],
 hint:"This word introduces the main point after acknowledging a difficulty. It means 'but.'",
 sSrc:"Although it is very hard, {1} I will definitely learn it well."},

{type:"mc", q:"Which pattern describes doing two things at the same time?",
 opts:["虽然...但是","一边...一边","越来越","差不多"],
 ans:"一边...一边",
 hint:"This paired pattern puts a different action after each half, indicating simultaneous activities."},

{type:"fb", s:"这(zhè)件(jiàn)事(shì)很(hěn){1}，你(nǐ)一定(yídìng)要(yào)做(zuò)好(hǎo)。",
 a:["重要(zhòngyào)"],
 opts:["重要(zhòngyào)","容易(róngyì)","难(nán)","清楚(qīngchu)"],
 hint:"This matter needs serious attention. Which adjective means 'important'?",
 sSrc:"This matter is very {1}, you must definitely do it well."}
]},

// === L4: Unit Review ===
{id:"zhv2_u13l4", title:"说清楚 Say It Clearly", icon:"\uD83C\uDFAF", xp:15, board:true, steps:[
{type:"intro", title:"说清楚 Say It Clearly",
 desc:"Review all the advanced description vocabulary and sentence patterns from this unit. Test your ability to use degree words, comparisons, and compound sentences.",
 goals:["Use all degree adverbs correctly","Build compound sentences with paired conjunctions","Describe change, difficulty, and importance"]},

{type:"match", pairs:[
  {trg:"特别(tèbié)", src:"especially"},
  {trg:"其实(qíshí)", src:"actually"},
  {trg:"一定(yídìng)", src:"definitely"},
  {trg:"总是(zǒngshì)", src:"always"},
  {trg:"只(zhǐ)", src:"only"}
]},

{type:"mc", q:"虽然(suīrán)学校(xuéxiào)很(hěn)远(yuǎn)，但是(dànshì)他(tā)总是(zǒngshì)走(zǒu)。 What does this mean?",
 opts:["The school is close so he walks","Although school is far, he always walks","He sometimes walks to school","He never walks to school"],
 ans:"Although school is far, he always walks",
 hint:"虽然...但是 sets up a contrast. 总是 means he does this every time."},

{type:"fb", s:"天气(tiānqì){1}热(rè)了(le)，要(yào)多(duō)喝(hē)水(shuǐ)。",
 a:["越来越(yuèláiyuè)"],
 opts:["越来越(yuèláiyuè)","差不多(chàbuduō)","特别(tèbié)","只(zhǐ)"],
 hint:"The weather is progressively getting hotter. Which pattern means 'more and more'?",
 sSrc:"The weather is getting {1} hot, you should drink more water."},

{type:"mc", q:"A: 这(zhè)两(liǎng)个(gè)差不多(chàbuduō)吗(ma)？\nB: 差不多(chàbuduō)。 What does B mean?",
 opts:["They are completely different","They are about the same","They are exactly the same","They are unrelated"],
 ans:"They are about the same",
 hint:"差不多 indicates similarity without exact equivalence, meaning 'approximately' or 'more or less.'"},

{type:"fb", s:"{1}我(wǒ)不(bù)想(xiǎng)去(qù)，但是(dànshì)他(tā)一定(yídìng)要(yào)我(wǒ)去(qù)。",
 a:["虽然(suīrán)"],
 opts:["虽然(suīrán)","一边(yìbiān)","另外(lìngwài)","其实(qíshí)"],
 hint:"The sentence has a concession ('I do not want to go') followed by 但是. Which word starts the concession?",
 sSrc:"{1} I do not want to go, he insists I must go."},

{type:"match", pairs:[
  {trg:"越来越(yuèláiyuè)", src:"more and more"},
  {trg:"差不多(chàbuduō)", src:"almost / about the same"},
  {trg:"够(gòu)", src:"enough"},
  {trg:"难(nán)", src:"difficult"},
  {trg:"容易(róngyì)", src:"easy"}
]},

{type:"mc", q:"他(tā)一边(yìbiān)喝(hē)茶(chá)，一边(yìbiān)看(kàn)书(shū)。 What is happening?",
 opts:["He drinks tea, then reads","He drinks tea while reading","He either drinks tea or reads","He stopped drinking tea to read"],
 ans:"He drinks tea while reading",
 hint:"一边...一边 describes two actions happening simultaneously."},

{type:"fb", s:"钱(qián)不(bù){1}，我们(wǒmen)再(zài)想(xiǎng)想(xiang)。",
 a:["够(gòu)"],
 opts:["够(gòu)","多(duō)","远(yuǎn)","难(nán)"],
 hint:"The money is insufficient. Which word means 'enough' and is being negated here?",
 sSrc:"The money is not {1}, let us think again."},

{type:"mc", q:"其实(qíshí)这(zhè)个(gè)不(bù)难(nán)，很(hěn)容易(róngyì)。 What is the speaker doing?",
 opts:["Complaining about difficulty","Correcting a misconception about difficulty","Agreeing it is hard","Asking if it is hard"],
 ans:"Correcting a misconception about difficulty",
 hint:"其实 signals that reality is different from what was assumed. The speaker reveals it is actually easy."},

{type:"fb", s:"她(tā){1}有(yǒu)一(yí)个(gè)孩子(háizi)，不(bù)是(shì)两(liǎng)个(gè)。",
 a:["只(zhǐ)"],
 opts:["只(zhǐ)","总是(zǒngshì)","特别(tèbié)","一定(yídìng)"],
 hint:"She has a limited number. Which word means 'only' or 'just'?",
 sSrc:"She {1} has one child, not two."},

{type:"match", pairs:[
  {trg:"重要(zhòngyào)", src:"important"},
  {trg:"清楚(qīngchu)", src:"clear / clearly"},
  {trg:"虽然(suīrán)", src:"although"},
  {trg:"但是(dànshì)", src:"but"},
  {trg:"另外(lìngwài)", src:"in addition"}
]},

{type:"mc", q:"虽然(suīrán)容易(róngyì)，但是(dànshì)很(hěn)重要(zhòngyào)。 What is the main message?",
 opts:["It is easy and unimportant","It is difficult and important","It is easy but important","It is hard but unimportant"],
 ans:"It is easy but important",
 hint:"虽然 acknowledges the ease. The real point after 但是 is that it is important."},

{type:"fb", s:"{1}，我(wǒ)还(hái)想(xiǎng)说(shuō)一(yí)件(jiàn)事(shì)。",
 a:["另外(lìngwài)"],
 opts:["另外(lìngwài)","虽然(suīrán)","一边(yìbiān)","其实(qíshí)"],
 hint:"The speaker adds a new topic. Which word means 'in addition' or 'besides'?",
 sSrc:"{1}, I still want to mention one thing."}
]}

]};

export default UNIT_13;
