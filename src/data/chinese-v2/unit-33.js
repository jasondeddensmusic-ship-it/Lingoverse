// Unit 33: Formal Writing (Written Chinese)
// Level: B2.2 (HSK 4)
// Chinese (Mandarin) V2 format with hanzi+pinyin notation

const UNIT_33 = {
n:33, lang:"zh", srcLang:"en", track:"v2",
title:"书面语 Written Chinese", sub:"Formal Register",
icon:"✍️", level:"B2.2", color:"#7B5EE8",
lessons:[

// ─── L1: Connectors and Transitions ───
{id:"zhv2_u33l1", title:"连接词 Connectors", icon:"🔗", xp:15, board:true, steps:[
{type:"intro", title:"连接词 Connectors",
 desc:"Master the formal connectors that hold Chinese writing together. These words appear in essays, reports, news articles, and formal speeches. They are essential for B2-level reading and writing.",
 goals:["Use transition words: 此外, 总之, 因此, 然而","Understand formal vs casual register differences","Build structured paragraphs using connectors"]},

{type:"tip", title:"Written vs Spoken Chinese",
 text:"Chinese has a significant gap between written (书面语) and spoken (口语) registers:\n\nSpoken: 还有 (also) > Written: 此外 (furthermore)\nSpoken: 所以 (so) > Written: 因此 (therefore)\nSpoken: 但是 (but) > Written: 然而 (however)\nSpoken: 虽然 (although) > Written: 尽管 (despite)\n\nUsing written-register words in casual speech sounds overly formal. Using spoken-register words in formal writing sounds too casual. Knowing when to use each is a key B2 skill.",
 deepDive:{title:"Why Chinese Has Two Registers",
  text:"Classical Chinese (文言文) and spoken Chinese diverged thousands of years ago. When modern written Chinese was standardized in the early 1900s, it adopted many classical elements for formal contexts while using vernacular for casual writing.\n\nThis means formal Chinese writing contains words and structures that are rarely heard in conversation. It is similar to how English uses Latin-origin words (commence, demonstrate, facilitate) in formal writing but Germanic words (start, show, help) in speech."}},

{type:"teach", trg:"此外(cǐwài)", src:"furthermore / in addition", pos:"conj", gender:null,
 note:"此 = this, 外 = outside/beyond.\nAdds an additional point. Very common in formal writing.",
 example:"A: 这(zhè)家(jiā)餐厅(cāntīng)的(de)菜(cài)很(hěn)好吃(hǎochī)。此外(cǐwài)，价格(jiàgé)也(yě)很(hěn)合理(hélǐ)。\nB: 那(nà)我们(wǒmen)下次(xiàcì)再(zài)来(lái)。",
 exampleSrc:"A: This restaurant's food is delicious. Furthermore, the prices are reasonable.\nB: Then let us come again next time.",
 funFact:"此 is a literary form of 'this' (spoken Chinese uses 这). Whenever you see 此, you know you are in formal register territory. 此外 literally means 'outside of this,' meaning 'beyond what was just said.'"},

{type:"teach", trg:"总之(zǒngzhī)", src:"in short / in conclusion", pos:"conj", gender:null,
 note:"总 = total/overall, 之 = of (literary).\nSummarizes the main point. Used to wrap up an argument.",
 example:"A: 学习(xuéxí)很(hěn)重要(zhòngyào)，健康(jiànkāng)也(yě)很(hěn)重要(zhòngyào)。\nB: 总之(zǒngzhī)，我们(wǒmen)要(yào)均衡(jūnhéng)发展(fāzhǎn)。",
 exampleSrc:"A: Study is important, health is also important.\nB: In short, we need balanced development.",
 funFact:"总之 works like a verbal eraser that clears away details and leaves only the essence. It signals to the reader: 'Forget the specifics I just listed; here is what matters.' It appears at the start of concluding sentences in nearly every Chinese essay."},

{type:"teach", trg:"因此(yīncǐ)", src:"therefore / for this reason", pos:"conj", gender:null,
 note:"因 = because/cause, 此 = this.\nShows cause and effect. More formal than 所以.",
 example:"A: 他(tā)努力(nǔlì)学习(xuéxí)了(le)三(sān)年(nián)。因此(yīncǐ)，他(tā)通过(tōngguò)了(le)HSK六级(liùjí)。\nB: 努力(nǔlì)总(zǒng)会(huì)有(yǒu)回报(huíbào)。",
 exampleSrc:"A: He studied hard for three years. Therefore, he passed HSK level 6.\nB: Hard work always pays off.",
 funFact:"因此 and 所以 both mean 'therefore,' but they belong to different registers. Using 因此 in a text message to a friend would feel oddly stiff, while using 所以 in an academic paper would feel too casual."},

{type:"teach", trg:"然而(ránér)", src:"however / yet", pos:"conj", gender:null,
 note:"然 = so/thus, 而 = but/and.\nIntroduces a contrasting point. Formal equivalent of 但是.",
 example:"A: 这(zhè)个(gè)计划(jìhuà)听(tīng)起来(qǐlái)很(hěn)好(hǎo)。然而(ránér)，执行(zhíxíng)起来(qǐlái)很(hěn)困难(kùnnan)。\nB: 我们(wǒmen)需要(xūyào)更(gèng)详细(xiángxì)的(de)方案(fāng'àn)。",
 exampleSrc:"A: This plan sounds great. However, it is difficult to implement.\nB: We need a more detailed proposal.",
 funFact:"然而 has an elegant construction. 然 means 'so it is' and 而 adds 'but.' Together they create a smooth pivot: 'that may be so, and yet...' It is the preferred way to introduce contrast in formal Chinese writing."},

{type:"teach", trg:"尽管(jǐnguǎn)", src:"despite / even though", pos:"conj", gender:null,
 note:"尽 = exhaust/fully, 管 = regardless.\nConcedes a point before making a contrasting claim.\nMore formal than 虽然.",
 example:"A: 尽管(jǐnguǎn)困难(kùnnan)很(hěn)多(duō)，他们(tāmen)还是(háishi)成功(chénggōng)了(le)。\nB: 他们(tāmen)的(de)精神(jīngshén)值得(zhídé)学习(xuéxí)。",
 exampleSrc:"A: Despite many difficulties, they still succeeded.\nB: Their spirit is worth learning from.",
 funFact:"尽管 literally means 'fully regardless.' It is stronger than 虽然 because it emphasizes that even taking EVERYTHING into account, the contrast still holds. It often pairs with 还是 (still) or 仍然 (nevertheless) in the second clause."},

{type:"mc", q:"Which word is the formal equivalent of 但是 (but)?",
 opts:["然而(ránér)","因此(yīncǐ)","此外(cǐwài)","总之(zǒngzhī)"],
 ans:"然而(ránér)",
 hint:"This formal connector introduces a contrasting point, just like 'but' or 'however.'"},

{type:"match", pairs:[
  {trg:"此外(cǐwài)", src:"furthermore"},
  {trg:"总之(zǒngzhī)", src:"in short"},
  {trg:"因此(yīncǐ)", src:"therefore"},
  {trg:"然而(ránér)", src:"however"},
  {trg:"尽管(jǐnguǎn)", src:"despite"}
]},

{type:"fb", s:"他(tā)努力(nǔlì)学习(xuéxí)了(le)三(sān)年(nián)。{1}，他(tā)通过(tōngguò)了(le)考试(kǎoshì)。",
 a:["因此(yīncǐ)"],
 opts:["因此(yīncǐ)","然而(ránér)","此外(cǐwài)","尽管(jǐnguǎn)"],
 hint:"The second sentence is a result of the first. Which connector shows cause and effect?",
 sSrc:"He studied hard for three years. {1}, he passed the exam."},

{type:"mc", q:"尽管(jǐnguǎn)困难(kùnnan)很(hěn)多(duō)，他们(tāmen)还是(háishi)成功(chénggōng)了(le)。 What is the relationship?",
 opts:["Summary: in short, they succeeded","Concession: despite difficulties, they succeeded","Cause: difficulties caused success","Addition: difficulties and success"],
 ans:"Concession: despite difficulties, they succeeded",
 hint:"尽管 introduces a ___. It acknowledges one thing but then states a contrasting outcome."},

{type:"fb", s:"这(zhè)个(gè)计划(jìhuà)听(tīng)起来(qǐlái)很(hěn)好(hǎo)。{1}，执行(zhíxíng)起来(qǐlái)很(hěn)困难(kùnnan)。",
 a:["然而(ránér)"],
 opts:["然而(ránér)","因此(yīncǐ)","此外(cǐwài)","总之(zǒngzhī)"],
 hint:"The plan sounds good, but implementing it is hard. Which connector shows this contrast?",
 sSrc:"This plan sounds good. {1}, it is difficult to implement."},

{type:"mc", q:"In a formal essay conclusion, which word would you use to begin the summary?",
 opts:["因此(yīncǐ)","然而(ránér)","总之(zǒngzhī)","此外(cǐwài)"],
 ans:"总之(zǒngzhī)",
 hint:"This word means 'in short' or 'in conclusion' and is used to wrap up a discussion."}
]},

// ─── L2: Formal Prepositions and Markers ───
{id:"zhv2_u33l2", title:"介词与标记 Prepositions and Markers", icon:"📐", xp:15, board:true, steps:[
{type:"intro", title:"介词与标记 Prepositions and Markers",
 desc:"Learn the formal prepositions and reference markers that structure Chinese academic and professional writing. These words specify relationships between ideas.",
 goals:["Use 由于, 关于, and 根据 for formal reference","Master 通过 and 以及 as linking words","Understand how formal prepositions differ from spoken equivalents"]},

{type:"teach", trg:"由于(yóuyú)", src:"due to / because of", pos:"prep", gender:null,
 note:"由 = from/by, 于 = at/in.\nGives the reason for something. More formal than 因为.",
 example:"A: 由于(yóuyú)天气(tiānqì)原因(yuányīn)，航班(hángbān)延误(yánwù)了(le)。\nB: 我们(wǒmen)只能(zhǐnéng)在(zài)机场(jīchǎng)等(děng)了(le)。",
 exampleSrc:"A: Due to weather reasons, the flight was delayed.\nB: We can only wait at the airport.",
 funFact:"由于 and 因为 both mean 'because,' but 由于 feels impersonal and official. News anchors always say 由于, never 因为. If you want to sound like a news report, use 由于. If you are chatting with friends, use 因为."},

{type:"teach", trg:"关于(guānyú)", src:"regarding / about", pos:"prep", gender:null,
 note:"关 = related to, 于 = at/in.\nIntroduces the topic under discussion. Very common in titles.",
 example:"A: 关于(guānyú)这(zhè)个(gè)问题(wèntí)，我们(wǒmen)需要(xūyào)进一步(jìnyíbù)讨论(tǎolùn)。\nB: 好(hǎo)的(de)，明天(míngtiān)开(kāi)个(gè)会(huì)吧(ba)。",
 exampleSrc:"A: Regarding this issue, we need to discuss further.\nB: Okay, let us hold a meeting tomorrow.",
 funFact:"关于 appears in the titles of almost every official Chinese document: 关于...的通知 (Notice Regarding...), 关于...的决定 (Decision Regarding...). It is the single most common word in Chinese bureaucratic language."},

{type:"teach", trg:"根据(gēnjù)", src:"according to / based on", pos:"prep", gender:null,
 note:"根 = root, 据 = basis/evidence.\nRefers to a source, rule, or basis for a statement.",
 example:"A: 根据(gēnjù)调查(diàochá)结果(jiéguǒ)，大多数(dàduōshù)人(rén)支持(zhīchí)这(zhè)个(gè)方案(fāng'àn)。\nB: 那(nà)我们(wǒmen)就(jiù)按(àn)这(zhè)个(gè)方向(fāngxiàng)进行(jìnxíng)。",
 exampleSrc:"A: According to the survey results, most people support this plan.\nB: Then we will proceed in this direction.",
 funFact:"根据 literally means 'root basis.' When you cite a source using 根据, you are saying: 'This is the root from which my claim grows.' It appears in scientific papers, legal documents, and news reports whenever evidence is cited."},

{type:"teach", trg:"通过(tōngguò)", src:"through / by means of", pos:"prep", gender:null,
 note:"通 = pass through, 过 = cross/pass.\nDescribes the method or channel used to achieve something.",
 example:"A: 通过(tōngguò)学习(xuéxí)成语(chéngyǔ)，你(nǐ)可以(kěyǐ)更好(gènghǎo)地(de)理解(lǐjiě)中国(Zhōngguó)文化(wénhuà)。\nB: 我(wǒ)已经(yǐjīng)学(xué)了(le)十(shí)几(jǐ)个(gè)了(le)。",
 exampleSrc:"A: Through studying chengyu, you can better understand Chinese culture.\nB: I have already learned more than ten.",
 funFact:"通过 has both literal and abstract meanings. Literally: to pass through a door or gate. Abstractly: to achieve something by passing through a process. Even 'to pass an exam' uses 通过: 通过考试."},

{type:"teach", trg:"以及(yǐjí)", src:"as well as / and (formal)", pos:"conj", gender:null,
 note:"以 = with/by, 及 = reach/and.\nLinks items in a formal list. More elegant than 和.",
 example:"A: 本(běn)课程(kèchéng)包括(bāokuò)语法(yǔfǎ)、词汇(cíhuì)以及(yǐjí)听力(tīnglì)训练(xùnliàn)。\nB: 内容(nèiróng)很(hěn)丰富(fēngfù)。",
 exampleSrc:"A: This course includes grammar, vocabulary, as well as listening training.\nB: The content is very rich.",
 funFact:"以及 typically connects the last item in a formal list, similar to how English uses 'as well as' before the final item. In casual speech, you would simply use 和(hé) or 还有(háiyǒu)."},

{type:"mc", q:"Which word would a news anchor use instead of 因为?",
 opts:["由于(yóuyú)","关于(guānyú)","根据(gēnjù)","通过(tōngguò)"],
 ans:"由于(yóuyú)",
 hint:"This formal preposition gives a reason for something and is the written-register equivalent of 因为."},

{type:"match", pairs:[
  {trg:"由于(yóuyú)", src:"due to"},
  {trg:"关于(guānyú)", src:"regarding"},
  {trg:"根据(gēnjù)", src:"according to"},
  {trg:"通过(tōngguò)", src:"through"},
  {trg:"以及(yǐjí)", src:"as well as"}
]},

{type:"fb", s:"{1}调查(diàochá)结果(jiéguǒ)，大多数(dàduōshù)人(rén)支持(zhīchí)这(zhè)个(gè)方案(fāng'àn)。",
 a:["根据(gēnjù)"],
 opts:["根据(gēnjù)","关于(guānyú)","由于(yóuyú)","通过(tōngguò)"],
 hint:"Which preposition introduces a source or basis for a claim?",
 sSrc:"{1} the survey results, most people support this plan."},

{type:"mc", q:"{1}天气(tiānqì)原因(yuányīn)，航班(hángbān)延误(yánwù)了(le)。 Which word fills the blank?",
 opts:["以及(yǐjí)","由于(yóuyú)","关于(guānyú)","根据(gēnjù)"],
 ans:"由于(yóuyú)",
 hint:"The sentence gives a reason for the delay. Which formal preposition means 'because of'?"},

{type:"fb", s:"{1}这(zhè)个(gè)问题(wèntí)，我们(wǒmen)需要(xūyào)讨论(tǎolùn)。",
 a:["关于(guānyú)"],
 opts:["关于(guānyú)","由于(yóuyú)","根据(gēnjù)","通过(tōngguò)"],
 hint:"Which word introduces the topic of discussion, meaning 'regarding' or 'about'?",
 sSrc:"{1} this issue, we need to discuss."},

{type:"fb", s:"本(běn)课程(kèchéng)包括(bāokuò)语法(yǔfǎ)、词汇(cíhuì){1}听力(tīnglì)训练(xùnliàn)。",
 a:["以及(yǐjí)"],
 opts:["以及(yǐjí)","由于(yóuyú)","然而(ránér)","因此(yīncǐ)"],
 hint:"Which formal conjunction links the last item in a list, like 'as well as'?",
 sSrc:"This course includes grammar, vocabulary, {1} listening training."}
]},

// ─── L3: Literary Particles ───
{id:"zhv2_u33l3", title:"文言虚词 Literary Particles", icon:"📜", xp:15, board:true, steps:[
{type:"intro", title:"文言虚词 Literary Particles",
 desc:"Learn the classical Chinese particles that survive in modern formal writing. These small words carry great power in creating an elevated, polished register.",
 goals:["Understand the literary particles 即, 则, 之, 所, and 而","Recognize them in formal texts and fixed expressions","Combine formal connectors and particles in writing"]},

{type:"tip", title:"Classical Particles in Modern Chinese",
 text:"Modern formal Chinese preserves several particles from classical Chinese (文言文). They add precision and elegance:\n\n即(jí) = namely / that is\n则(zé) = then / in that case\n之(zhī) = of / possessive (literary 的)\n所(suǒ) = that which / what is\n而(ér) = and / but (literary connector)\n\nThese particles rarely appear in casual speech but are essential for reading newspapers, academic texts, contracts, and formal announcements.",
 deepDive:{title:"How Much Classical Chinese Do You Need?",
  text:"At B2 level, you do not need to read classical texts directly. However, you do need to recognize the classical particles that have survived into modern formal writing.\n\nThese particles appear in:\n1. News headlines and articles\n2. Legal and business documents\n3. Academic papers\n4. Fixed expressions and set phrases\n5. Formal speeches and presentations\n\nLearning these five particles will unlock a huge amount of formal Chinese text that might otherwise seem impenetrable."}},

{type:"teach", trg:"即(jí)", src:"namely / that is / i.e.", pos:"adv", gender:null,
 note:"Specifies or restates something more precisely.\nUsed before definitions, explanations, or equivalences.",
 example:"A: HSK，即(jí)汉语(Hànyǔ)水平(shuǐpíng)考试(kǎoshì)，是(shì)国际(guójì)公认(gōngrèn)的(de)中文(Zhōngwén)考试(kǎoshì)。\nB: 我(wǒ)准备(zhǔnbèi)考(kǎo)四级(sìjí)。",
 exampleSrc:"A: HSK, namely the Chinese Proficiency Test, is an internationally recognized Chinese exam.\nB: I am preparing for level four.",
 funFact:"即 packs enormous meaning into one character. In classical Chinese it meant 'to approach' or 'to be right at.' From this, it developed the meaning of 'is exactly/namely.' It is the Chinese equivalent of 'i.e.' in English."},

{type:"teach", trg:"则(zé)", src:"then / in that case (formal)", pos:"conj", gender:null,
 note:"A classical connector showing conditional or consequential relationship.\nMore formal than 就.",
 example:"A: 有(yǒu)志者(zhìzhě)，事(shì)竟(jìng)成(chéng)。无(wú)志(zhì)则(zé)一事无成(yìshìwúchéng)。\nB: 所以(suǒyǐ)目标(mùbiāo)很(hěn)重要(zhòngyào)。",
 exampleSrc:"A: Where there is a will, there is a way. Without will, then nothing is achieved.\nB: So goals are very important.",
 funFact:"则 appears in many classical proverbs that Chinese people still quote today. It creates a crisp, parallel structure: 'if A, then B.' Modern legal and regulatory texts still use 则 for conditional clauses instead of the spoken 就."},

{type:"teach", trg:"之(zhī)", src:"of (literary possessive)", pos:"part", gender:null,
 note:"The classical equivalent of 的.\nSurvives in set phrases, place names, and formal writing.",
 example:"A: 中国(Zhōngguó)之(zhī)大(dà)，无奇不有(wúqíbùyǒu)。\nB: 中国(Zhōngguó)确实(quèshí)是(shì)一(yí)个(gè)多样化(duōyànghuà)的(de)国家(guójiā)。",
 exampleSrc:"A: China is so vast that nothing is too strange to exist.\nB: China is indeed a diverse country.",
 funFact:"之 is one of the most common characters in classical Chinese. It served as a possessive ('of'), a pronoun ('it/him'), and even a meaningless filler for rhythm. In modern Chinese, it survives in hundreds of fixed expressions: 总之 (in short), 之间 (between), 之一 (one of)."},

{type:"teach", trg:"所(suǒ)", src:"that which / what is", pos:"part", gender:null,
 note:"Creates noun phrases from verbs.\n所 + verb = 'that which is [verb]-ed.'",
 example:"A: 这(zhè)就是(jiùshì)我(wǒ)所(suǒ)说(shuō)的(de)问题(wèntí)。\nB: 我(wǒ)明白(míngbai)你(nǐ)所(suǒ)担心(dānxīn)的(de)。",
 exampleSrc:"A: This is exactly the problem I was talking about.\nB: I understand what you are worried about.",
 funFact:"The 所...的 construction is one of the most useful classical survivals. It turns verbs into noun phrases: 所说的 (what was said), 所做的 (what was done), 所想的 (what was thought). It appears in both formal and moderately casual Chinese."},

{type:"teach", trg:"而(ér)", src:"and / but / yet (literary)", pos:"conj", gender:null,
 note:"A versatile literary connector.\nCan mean 'and,' 'but,' or 'yet' depending on context.",
 example:"A: 学(xué)而(ér)不(bù)思(sī)则(zé)罔(wǎng)，思(sī)而(ér)不(bù)学(xué)则(zé)殆(dài)。\nB: 这(zhè)是(shì)孔子(Kǒngzǐ)的(de)名言(míngyán)。",
 exampleSrc:"A: To study without thinking is futile; to think without studying is perilous.\nB: This is a famous quote from Confucius.",
 funFact:"This quote from Confucius uses both 而 and 则 in perfect parallel structure. 而 connects 'study' with 'not think,' and 则 shows the consequence. Classical Chinese proverbs like this are still quoted in modern essays, speeches, and even social media posts."},

{type:"mc", q:"之(zhī) in formal Chinese is the literary equivalent of:",
 opts:["的(de)","了(le)","吗(ma)","呢(ne)"],
 ans:"的(de)",
 hint:"This classical particle serves as a possessive marker, connecting a modifier to what it modifies."},

{type:"match", pairs:[
  {trg:"即(jí)", src:"namely / i.e."},
  {trg:"则(zé)", src:"then (formal)"},
  {trg:"之(zhī)", src:"of (literary)"},
  {trg:"所(suǒ)", src:"that which"},
  {trg:"而(ér)", src:"and/but (literary)"}
]},

{type:"fb", s:"HSK，{1}汉语(Hànyǔ)水平(shuǐpíng)考试(kǎoshì)，是(shì)中文(Zhōngwén)考试(kǎoshì)。",
 a:["即(jí)"],
 opts:["即(jí)","则(zé)","之(zhī)","所(suǒ)"],
 hint:"Which particle means 'namely' and introduces a definition or restatement?",
 sSrc:"HSK, {1} the Chinese Proficiency Test, is a Chinese exam."},

{type:"mc", q:"学(xué)而(ér)不(bù)思(sī)则(zé)罔(wǎng)。 What is the structure?",
 opts:["Think and study, then forget","Study and/but not think, then futile","Study or think, then succeed","Not study, not think, then wise"],
 ans:"Study and/but not think, then futile",
 hint:"而 connects '___' with 'not ___,' and 则 shows the consequence of this combination."},

{type:"fb", s:"这(zhè)就是(jiùshì)我(wǒ){1}说(shuō)的(de)问题(wèntí)。",
 a:["所(suǒ)"],
 opts:["所(suǒ)","之(zhī)","即(jí)","而(ér)"],
 hint:"Which particle turns 'said' into 'that which was said,' creating a noun phrase?",
 sSrc:"This is exactly the problem I {1} was talking about."},

{type:"drag_fill",
 s:"{1}调查(diàochá)，大多数(dàduōshù)学生(xuéshēng)认为(rènwéi)均衡(jūnhéng)的(de)饮食(yǐnshí){2}适当(shìdàng)的(de)锻炼(duànliàn)同样(tóngyàng)重要(zhòngyào)。",
 blanks:{"1":"根据(gēnjù)","2":"以及(yǐjí)"},
 pool:["根据(gēnjù)","以及(yǐjí)","由于(yóuyú)","然而(ránér)"],
 hint:"The sentence cites a survey as its basis and links two things with 'as well as.'"},

{type:"mc", q:"Which pair correctly shows the spoken/written register difference?",
 opts:["Spoken 根据 > Written 关于","Spoken 然而 > Written 但是","Spoken 因为 > Written 由于","Spoken 由于 > Written 因为"],
 ans:"Spoken 因为 > Written 由于",
 hint:"Both mean 'because,' but one is used in casual conversation and the other in formal documents and news."},

{type:"match", pairs:[
  {trg:"此外(cǐwài)", src:"furthermore"},
  {trg:"因此(yīncǐ)", src:"therefore"},
  {trg:"由于(yóuyú)", src:"due to"},
  {trg:"关于(guānyú)", src:"regarding"},
  {trg:"根据(gēnjù)", src:"according to"},
  {trg:"即(jí)", src:"namely"},
  {trg:"而(ér)", src:"and/but (literary)"}
]}
]},

{id:"zhv2_u33l_f11_resolve",title:"解决冲突 Resolving Disputes",icon:"🤝",xp:15,board:true,steps:[
{type:"intro",title:"Resolving Disputes",desc:"B2 Chinese for mediating conflicts: naming disputes, proposing compromises, apologizing, and forgiving. Essential for HSK 4+ communication.",goals:["Name disputes with 冲突 and 误会","Propose 妥协 (compromises)","Apologize and forgive: 道歉 and 原谅"]},
{type:"teach", trg:"冲突(chōngtū)", src:"conflict / clash", pos:"noun", gender:null,
 phonetic:"chōngtū",
 note:"Compound: 冲 (rush/surge) + 突 (sudden/break).\nUsed for personal, social, or military conflicts.",
 example:"A: 有(yǒu)冲突(chōngtū)吗(ma)？\nB: 有(yǒu)一(yí)个(gè)小(xiǎo)冲突(chōngtū)。",
 exampleSrc:"A: Is there a conflict?\nB: There is a small conflict.",
 funFact:"冲突 literally means 'rushing-sudden', the image of two forces colliding. Chinese business culture values harmony (和谐), so 'avoid conflicts' (避免冲突) is a core professional phrase."},
{type:"teach", trg:"误会(wùhuì)", src:"misunderstanding", pos:"noun", gender:null,
 phonetic:"wùhuì",
 note:"Compound: 误 (mistake/error) + 会 (meet/understand).\nAlso a verb: 误会 (to misunderstand).",
 example:"A: 是(shì)一(yí)个(gè)误会(wùhuì)吗(ma)？\nB: 是(shì)，只(zhǐ)是(shì)误会(wùhuì)。",
 exampleSrc:"A: Is it a misunderstanding?\nB: Yes, just a misunderstanding.",
 funFact:"误会 is one of the most important words for conflict resolution in Chinese. 'Just a misunderstanding' (只是误会) often precedes reconciliation."},
{type:"teach", trg:"妥协(tuǒxié)", src:"compromise", pos:"noun", gender:null,
 phonetic:"tuǒxié",
 note:"Compound: 妥 (appropriate/proper) + 协 (cooperate).\nAlso verb: 妥协 = to compromise.\n做出妥协 = to make a compromise.",
 example:"A: 你(nǐ)要(yào)妥协(tuǒxié)吗(ma)？\nB: 可以(kěyǐ)妥协(tuǒxié)。",
 exampleSrc:"A: Will you compromise?\nB: I can compromise.",
 funFact:"妥协 carries a nuanced cultural weight. In politics and negotiation it is praised as wisdom; in principles-based contexts it can imply weakness. Context determines tone."},
{type:"teach", trg:"道歉(dàoqiàn)", src:"to apologize / apology", pos:"verb", gender:null,
 phonetic:"dàoqiàn",
 note:"Compound: 道 (speak/say) + 歉 (regret).\nVerb and noun. 向 someone 道歉 = to apologize to someone.",
 example:"A: 你(nǐ)要(yào)道歉(dàoqiàn)吗(ma)？\nB: 我(wǒ)道歉(dàoqiàn)。",
 exampleSrc:"A: Do you want to apologize?\nB: I apologize.",
 funFact:"道歉 literally means 'to speak regret.' Chinese apologies often include the reason: 'I apologize because...' ('我道歉，因为...'). The bare 对不起 (sorry) is more casual."},
{type:"teach", trg:"原谅(yuánliàng)", src:"to forgive", pos:"verb", gender:null,
 phonetic:"yuánliàng",
 note:"Compound: 原 (origin/pardon) + 谅 (understand/forgive).\n原谅 someone = to forgive someone.\n请原谅 = please forgive.",
 example:"A: 请(qǐng)原谅(yuánliàng)我(wǒ)。\nB: 我(wǒ)原谅(yuánliàng)你(nǐ)。",
 exampleSrc:"A: Please forgive me.\nB: I forgive you.",
 funFact:"原谅 carries both meanings: to understand the other person's situation AND to pardon them. The dual meaning reflects the Chinese cultural emphasis on empathy before forgiveness."},
{type:"teach", trg:"和解(héjiě)", src:"to reconcile / reconciliation", pos:"verb", gender:null,
 phonetic:"héjiě",
 note:"Compound: 和 (harmony) + 解 (resolve).\nBoth verb and noun.\n达成和解 = to reach reconciliation.",
 example:"A: 他们(tāmen)和解(héjiě)了(le)吗(ma)？\nB: 是(shì)，他们(tāmen)已经(yǐjīng)和解(héjiě)了(le)。",
 exampleSrc:"A: Have they reconciled?\nB: Yes, they have already reconciled.",
 funFact:"和解 combines 和 (harmony, one of the most valued Chinese cultural concepts) with 解 (resolve). Legal and diplomatic Chinese uses 和解 for formal settlements."},
{type:"teach", trg:"同意(tóngyì)", src:"to agree / agreement", pos:"verb", gender:null,
 phonetic:"tóngyì",
 note:"Compound: 同 (same) + 意 (meaning/intention).\nVerb and noun.\n同意的 = agreed.",
 example:"A: 你(nǐ)同意(tóngyì)吗(ma)？\nB: 我(wǒ)同意(tóngyì)。",
 exampleSrc:"A: Do you agree?\nB: I agree.",
 funFact:"同意 literally means 'same intention.' Chinese agreement requires alignment of intent, not just passive acceptance. This shapes how Chinese business deals are sealed."},
{type:"tip", title:"Diplomatic Register: Chinese Dispute Resolution",
 text:"B2 Chinese dispute resolution follows a pattern:\n\n1. Name it: 是(shì)误会(wùhuì), it's a misunderstanding\n2. Apologize: 我(wǒ)道歉(dàoqiàn). I apologize\n3. Compromise: 我们(wǒmen)妥协(tuǒxié), we compromise\n4. Reconcile: 我们(wǒmen)和解(héjiě), we reconcile\n\nHSK 4+ writing expects this vocabulary.",
 deepDive:{title:"和 (harmony) in Chinese dispute resolution",
  text:"和 appears in 和解 (reconcile), 和平 (peace), 和谐 (harmony), 和好 (make up). This single character underpins the entire Chinese approach to conflict: restoration of harmony is the goal, not winning."}},
{type:"mc", q:"哪(nǎ)个(gè)词(cí)意思(yìsi)是(shì) 'conflict'?",
 opts:["冲突(chōngtū)","误会(wùhuì)","妥协(tuǒxié)","和解(héjiě)"],
 ans:"冲突(chōngtū)",
 hint:"Compound: rush + sudden. Image of two forces colliding."},
{type:"mc", q:"哪(nǎ)个(gè)动词(dòngcí)意思(yìsi)是(shì) 'to forgive'?",
 opts:["道歉(dàoqiàn)","原谅(yuánliàng)","同意(tóngyì)","妥协(tuǒxié)"],
 ans:"原谅(yuánliàng)",
 hint:"Compound: pardon + understand. 'Please forgive' = 请原谅."},
{type:"fb", s:"是(shì)一(yí)个(gè){1}吗(ma)？", a:"误会(wùhuì)", opts:["误会(wùhuì)","冲突(chōngtū)","妥协(tuǒxié)","和解(héjiě)"],
 hint:"Noun for 'mistake-meeting', a failure to understand each other.", sSrc:"Is it a {1}?"},
{type:"fb", s:"我(wǒ){1}你(nǐ)。", a:"原谅(yuánliàng)", opts:["原谅(yuánliàng)","道歉(dàoqiàn)","同意(tóngyì)","妥协(tuǒxié)"],
 hint:"Verb meaning 'to forgive' (someone).", sSrc:"I {1} you."},
{type:"fb", s:"他们(tāmen){1}了(le)。", a:"和解(héjiě)", opts:["和解(héjiě)","妥协(tuǒxié)","冲突(chōngtū)","误会(wùhuì)"],
 hint:"Verb: harmony + resolve, the endpoint of dispute resolution.", sSrc:"They have {1}."},
{type:"fb", s:"你(nǐ){1}吗(ma)？", a:"同意(tóngyì)", opts:["同意(tóngyì)","道歉(dàoqiàn)","原谅(yuánliàng)","和解(héjiě)"],
 hint:"Verb: same + intention, to agree.", sSrc:"Do you {1}?"},
{type:"match", pairs:[
  {trg:"冲突(chōngtū)", src:"conflict"},
  {trg:"误会(wùhuì)", src:"misunderstanding"},
  {trg:"妥协(tuǒxié)", src:"compromise"},
  {trg:"和解(héjiě)", src:"reconcile"}
]},
{type:"match", pairs:[
  {trg:"道歉(dàoqiàn)", src:"to apologize"},
  {trg:"原谅(yuánliàng)", src:"to forgive"},
  {trg:"同意(tóngyì)", src:"to agree"}
]}
]}

]};

export default UNIT_33;
