// Unit 15: Opinions and Emotions
// Level: B1.1 (HSK 3)
// Chinese (Mandarin) V2 format with hanzi+pinyin notation
// Vocab: 觉得, 认为, 担心, 高兴, 生气, 难过, 害怕, 紧张, 满意, 失望, 同意, 反对, 希望, 相信, 理解

const UNIT_15 = {
n:15, lang:"zh", srcLang:"en", track:"v2",
title:"我觉得... I Think...", sub:"Expressing Views",
icon:"\uD83D\uDCAD", level:"B1.1", color:"#7B5EE8",
lessons:[

// === L1: Thinking and Feeling ===
{id:"zhv2_u15l1", title:"我觉得 I Feel/Think", icon:"\uD83E\uDD14", xp:15, board:true, steps:[
{type:"intro", title:"我觉得 I Feel/Think",
 desc:"Learn to express opinions with 觉得 and 认为, and start naming emotions beyond 好 and 不好. These words are essential for sharing your views and understanding how others feel.",
 goals:["Express opinions with 觉得 and 认为","Name happiness with 高兴 and anger with 生气","Understand the difference between casual and formal opinion verbs"]},

{type:"teach", trg:"觉得(juéde)", src:"to feel / to think", pos:"verb", gender:null,
 note:"The most common way to express an opinion.\n我觉得 = I think / I feel. Works for both thoughts and feelings.",
 example:"A: 你(nǐ)觉得(juéde)这(zhè)个(gè)怎么样(zěnmeyàng)？\nB: 我(wǒ)觉得(juéde)很(hěn)好(hǎo)。",
 exampleSrc:"A: What do you think of this?\nB: I think it is very good.",
 funFact:"觉得 is softer than 认为. It means 'I feel' or 'I sense' rather than 'I believe.' Chinese speakers prefer 觉得 in casual conversation because it sounds less assertive. It leaves room for the other person to disagree."},

{type:"teach", trg:"认为(rènwéi)", src:"to believe / to consider", pos:"verb", gender:null,
 note:"More formal and assertive than 觉得.\nUsed for strong opinions and formal contexts.",
 example:"A: 你(nǐ)认为(rènwéi)他(tā)说(shuō)得(de)对(duì)吗(ma)？\nB: 我(wǒ)认为(rènwéi)他(tā)说(shuō)得(de)对(duì)。",
 exampleSrc:"A: Do you think what he said is correct?\nB: I believe he is correct.",
 funFact:"认 means 'to recognize' and 为 means 'to be.' Together, 认为 means 'to recognize as true.' It carries more conviction than 觉得. In debates and formal writing, 认为 is the standard opinion verb."},

{type:"tip", title:"觉得 vs 认为: Casual vs Formal",
 text:"Both mean 'to think' but carry different weight:\n\n觉得(juéde): soft, personal feeling\n我觉得这个菜好吃。 I feel this dish is tasty.\n(casual, subjective, friendly)\n\n认为(rènwéi): firm, considered belief\n我认为这个很重要。 I believe this is important.\n(formal, assertive, intellectual)\n\nRule of thumb: 觉得 for daily life, 认为 for serious topics.\nBoth are followed directly by a clause (no 'that' word needed).",
 deepDive:{title:"Why Chinese Distinguishes These",
  text:"Chinese culture values indirectness and harmony. Using 觉得 softens your opinion, showing you are open to other views. This is not weakness but social intelligence.\n\n认为 signals you have thought deeply and are willing to defend your position. Using it in casual conversation can sound rigid or confrontational.\n\nAt B1, start with 觉得 for most situations. Reserve 认为 for essays, debates, and when you truly want to assert a position."}},

{type:"teach", trg:"高兴(gāoxìng)", src:"happy / glad", pos:"adj", gender:null,
 note:"高 = high, 兴 = mood/interest.\nThe most common word for happy in Chinese.",
 example:"A: 你(nǐ)看起来(kànqilai)很(hěn)高兴(gāoxìng)！\nB: 是(shì)的(de)，我(wǒ)很(hěn)高兴(gāoxìng)！",
 exampleSrc:"A: You look very happy!\nB: Yes, I am very happy!",
 funFact:"高兴 literally means 'high mood.' Chinese emotion words often use height metaphors: 高兴 (high interest = happy). English does the same: 'high spirits,' 'feeling down.' Both languages map emotions onto vertical space."},

{type:"teach", trg:"生气(shēngqì)", src:"angry / to get angry", pos:"adj", gender:null,
 note:"生 = produce, 气 = air/energy.\nLiterally: produce qi. Works as adjective and verb.",
 example:"A: 你(nǐ)别(bié)生气(shēngqì)。\nB: 我(wǒ)没(méi)生气(shēngqì)。",
 exampleSrc:"A: Do not get angry.\nB: I am not angry.",
 funFact:"生气 literally means 'generate qi (air/energy).' In Chinese medicine, anger is linked to rising qi in the liver. The idea is that anger produces excessive internal energy. Cool, controlled energy means calm."},

{type:"teach", trg:"担心(dānxīn)", src:"to worry / worried", pos:"verb", gender:null,
 note:"担 = carry/bear, 心 = heart.\nLiterally: carry on the heart. 别担心 = do not worry.",
 example:"A: 你(nǐ)担心(dānxīn)什么(shénme)？\nB: 我(wǒ)担心(dānxīn)考试(kǎoshì)。",
 exampleSrc:"A: What are you worried about?\nB: I am worried about the exam.",
 funFact:"担心 paints a vivid picture: 担 (carry a heavy load on a pole) + 心 (heart). Worry literally 'weighs on the heart.' The English expression 'heavy-hearted' captures the same metaphor."},

{type:"mc", q:"我(wǒ)觉得(juéde)很(hěn)好(hǎo)。 What is the speaker doing?",
 opts:["Sharing a personal opinion","Making a formal statement","Asking a question","Giving a command"],
 ans:"Sharing a personal opinion",
 hint:"觉得 introduces a casual, ___ view. The speaker feels something is good."},

{type:"match", pairs:[
  {trg:"觉得(juéde)", src:"to feel / to think"},
  {trg:"认为(rènwéi)", src:"to believe / to consider"},
  {trg:"高兴(gāoxìng)", src:"happy"},
  {trg:"生气(shēngqì)", src:"angry"},
  {trg:"担心(dānxīn)", src:"to worry"}
]},

{type:"fb", s:"A: 你(nǐ){1}这(zhè)个(gè)怎么样(zěnmeyàng)？\nB: 不错(búcuò)。",
 a:["觉得(juéde)"],
 opts:["觉得(juéde)","认为(rènwéi)","担心(dānxīn)","高兴(gāoxìng)"],
 hint:"The question asks for a casual opinion. Which opinion verb is soft and personal?",
 sSrc:"A: What do you {1} about this?\nB: Pretty good."},

{type:"mc", q:"Which opinion word is more formal and assertive?",
 opts:["觉得(juéde)","认为(rènwéi)","担心(dānxīn)","高兴(gāoxìng)"],
 ans:"认为(rènwéi)",
 hint:"One of these is used in debates and formal writing to express a firm, considered belief."},

{type:"fb", s:"别(bié){1}，考试(kǎoshì)不(bù)难(nán)。",
 a:["担心(dānxīn)"],
 opts:["担心(dānxīn)","生气(shēngqì)","高兴(gāoxìng)","觉得(juéde)"],
 hint:"The speaker tells someone not to feel anxious about the exam. Which word means 'worry'?",
 sSrc:"Do not {1}, the exam is not difficult."},

{type:"mc", q:"他(tā)生气(shēngqì)了(le)。 What happened?",
 opts:["He became sad","He became happy","He became angry","He became worried"],
 ans:"He became angry",
 hint:"生气 means to produce negative energy. 了 shows the state change just occurred."},

{type:"fb", s:"我(wǒ)很(hěn){1}，因为(yīnwèi)今天(jīntiān)是(shì)我(wǒ)的(de)生日(shēngrì)！",
 a:["高兴(gāoxìng)"],
 opts:["高兴(gāoxìng)","生气(shēngqì)","担心(dānxīn)","认为(rènwéi)"],
 hint:"It is the speaker's birthday. They feel a positive emotion. Which word means 'happy'?",
 sSrc:"I am very {1}, because today is my birthday!"}
]},

// === L2: Emotions Spectrum ===
{id:"zhv2_u15l2", title:"难过和害怕 Sadness and Fear", icon:"\uD83D\uDE22", xp:15, board:true, steps:[
{type:"intro", title:"难过和害怕 Sadness and Fear",
 desc:"Expand your emotional vocabulary with words for sadness, fear, nervousness, satisfaction, and disappointment. Being able to name emotions precisely is a sign of language maturity.",
 goals:["Express sadness with 难过 and fear with 害怕","Describe nervousness with 紧张","Use 满意 (satisfied) and 失望 (disappointed)"]},

{type:"teach", trg:"难过(nánguò)", src:"sad / upset", pos:"adj", gender:null,
 note:"难 = difficult, 过 = pass through.\nLiterally: hard to get through. Describes emotional pain.",
 example:"A: 你(nǐ)怎么(zěnme)了(le)？\nB: 我(wǒ)很(hěn)难过(nánguò)，他(tā)走(zǒu)了(le)。",
 exampleSrc:"A: What is wrong?\nB: I am very sad, he left.",
 funFact:"难过 literally means 'hard to pass through.' It describes a feeling so heavy it is difficult to move past. The Chinese view of sadness is physical: it is an obstacle on the road of life that takes effort to cross."},

{type:"teach", trg:"害怕(hàipà)", src:"afraid / scared", pos:"adj", gender:null,
 note:"害 = harm, 怕 = fear.\n我害怕 = I am scared. 不用害怕 = no need to be afraid.",
 example:"A: 你(nǐ)害怕(hàipà)什么(shénme)？\nB: 我(wǒ)害怕(hàipà)一(yí)个(gè)人(rén)走(zǒu)夜路(yèlù)。",
 exampleSrc:"A: What are you afraid of?\nB: I am afraid of walking at night alone.",
 funFact:"怕 alone also means 'afraid' and is more casual than 害怕. 我怕 = I am afraid (informal). 我害怕 = I am scared (stronger). Both are common. 害 adds intensity to the feeling."},

{type:"teach", trg:"紧张(jǐnzhāng)", src:"nervous / tense", pos:"adj", gender:null,
 note:"紧 = tight, 张 = stretch/expand.\nLiterally: tightly stretched. Describes anxiety and tension.",
 example:"A: 你(nǐ)紧张(jǐnzhāng)吗(ma)？\nB: 有(yǒu)一点儿(yìdiǎnr)紧张(jǐnzhāng)。",
 exampleSrc:"A: Are you nervous?\nB: A little nervous.",
 funFact:"紧张 works for both mental and physical tension. Before an exam, during a job interview, or when a rope is pulled tight, all are 紧张. The word captures how anxiety makes your body physically tense."},

{type:"teach", trg:"满意(mǎnyì)", src:"satisfied / content", pos:"adj", gender:null,
 note:"满 = full, 意 = meaning/intention.\nLiterally: meaning is full. 你满意吗 = Are you satisfied?",
 example:"A: 你(nǐ)对(duì)这(zhè)个(gè)满意(mǎnyì)吗(ma)？\nB: 很(hěn)满意(mǎnyì)！",
 exampleSrc:"A: Are you satisfied with this?\nB: Very satisfied!",
 funFact:"满 means 'full' and appears in many positive words: 满意 (satisfied, full of intent), 满足 (content, full of enough), 圆满 (perfect completion, round and full). Fullness is a positive concept in Chinese culture."},

{type:"teach", trg:"失望(shīwàng)", src:"disappointed", pos:"adj", gender:null,
 note:"失 = lose, 望 = hope/gaze.\nLiterally: lost hope. The opposite of 满意.",
 example:"A: 你(nǐ)失望(shīwàng)吗(ma)？\nB: 有(yǒu)一点儿(yìdiǎnr)失望(shīwàng)。",
 exampleSrc:"A: Are you disappointed?\nB: A little disappointed.",
 funFact:"失望 literally means 'lose hope.' 望 originally meant 'to gaze into the distance,' as when watching for someone's return. When hope is lost, you stop watching. The image is someone turning away from the horizon."},

{type:"mc", q:"我(wǒ)很(hěn)难过(nánguò)。 How does the speaker feel?",
 opts:["Sad","Nervous","Angry","Happy"],
 ans:"Sad",
 hint:"难过 describes emotional pain that is 'hard to get through,' meaning sadness or being upset."},

{type:"match", pairs:[
  {trg:"难过(nánguò)", src:"sad / upset"},
  {trg:"害怕(hàipà)", src:"afraid / scared"},
  {trg:"紧张(jǐnzhāng)", src:"nervous / tense"},
  {trg:"满意(mǎnyì)", src:"satisfied"},
  {trg:"失望(shīwàng)", src:"disappointed"}
]},

{type:"fb", s:"考试(kǎoshì)以前(yǐqián)我(wǒ)总是(zǒngshì)很(hěn){1}。",
 a:["紧张(jǐnzhāng)"],
 opts:["紧张(jǐnzhāng)","满意(mǎnyì)","高兴(gāoxìng)","失望(shīwàng)"],
 hint:"Before exams, the speaker always feels anxious and tense. Which word describes this?",
 sSrc:"Before exams I am always very {1}."},

{type:"mc", q:"她(tā)对(duì)结果(jiéguǒ)很(hěn)满意(mǎnyì)。 How does she feel about the result?",
 opts:["Nervous","Satisfied","Angry","Disappointed"],
 ans:"Satisfied",
 hint:"满意 means 'full of meaning/intent,' which translates to being content or pleased."},

{type:"fb", s:"别(bié){1}，我(wǒ)在(zài)这儿(zhèr)。",
 a:["害怕(hàipà)"],
 opts:["害怕(hàipà)","难过(nánguò)","失望(shīwàng)","紧张(jǐnzhāng)"],
 hint:"The speaker reassures someone not to be scared. Which word means 'afraid'?",
 sSrc:"Do not be {1}, I am here."},

{type:"mc", q:"失望(shīwàng) literally means:",
 opts:["full hope","lost anger","lost hope","full anger"],
 ans:"lost hope",
 hint:"失 means 'lose' and 望 means 'hope' or 'to gaze.' Combine them for the literal meaning."},

{type:"fb", s:"他(tā)走(zǒu)了(le)，我(wǒ)很(hěn){1}。",
 a:["难过(nánguò)"],
 opts:["难过(nánguò)","高兴(gāoxìng)","满意(mǎnyì)","紧张(jǐnzhāng)"],
 hint:"Someone left and the speaker feels emotional pain. Which word means 'sad'?",
 sSrc:"He left, I am very {1}."}
]},

// === L3: Agreeing and Disagreeing ===
{id:"zhv2_u15l3", title:"同意还是反对 Agree or Oppose", icon:"\u2696\uFE0F", xp:15, board:true, steps:[
{type:"intro", title:"同意还是反对 Agree or Oppose",
 desc:"Learn to express agreement, disagreement, hope, belief, and understanding. These words are the tools of mature conversation and debate.",
 goals:["Agree with 同意 and disagree with 反对","Express hope with 希望 and belief with 相信","Show understanding with 理解"]},

{type:"teach", trg:"同意(tóngyì)", src:"to agree", pos:"verb", gender:null,
 note:"同 = same, 意 = idea/meaning.\nLiterally: same idea. 我同意 = I agree.",
 example:"A: 你(nǐ)同意(tóngyì)吗(ma)？\nB: 我(wǒ)同意(tóngyì)！",
 exampleSrc:"A: Do you agree?\nB: I agree!",
 funFact:"同意 literally means 'same meaning' or 'same intent.' When you agree, your thoughts align with another person's. The character 同 appears in many 'togetherness' words: 同学 (classmate), 同事 (colleague), 同时 (at the same time)."},

{type:"teach", trg:"反对(fǎnduì)", src:"to oppose / to disagree", pos:"verb", gender:null,
 note:"反 = opposite/reverse, 对 = correct/toward.\nStronger than simply disagreeing. 我反对 = I oppose this.",
 example:"A: 你们(nǐmen)同意(tóngyì)还是(háishi)反对(fǎnduì)？\nB: 我(wǒ)反对(fǎnduì)。",
 exampleSrc:"A: Do you agree or oppose?\nB: I oppose.",
 funFact:"反对 is quite strong in Chinese. For mild disagreement, 不同意 (not agree) is more common and polite. 反对 suggests active opposition, like voting against something or protesting a decision."},

{type:"teach", trg:"希望(xīwàng)", src:"to hope / hope", pos:"verb", gender:null,
 note:"希 = rare/hope, 望 = gaze/expect.\nWorks as verb and noun. 我希望 = I hope.",
 example:"A: 你(nǐ)希望(xīwàng)以后(yǐhòu)做(zuò)什么(shénme)？\nB: 我(wǒ)希望(xīwàng)当(dāng)老师(lǎoshī)。",
 exampleSrc:"A: What do you hope to do in the future?\nB: I hope to become a teacher.",
 funFact:"望 appears in both 希望 (hope) and 失望 (disappointed). 希望 means 'to gaze with hope.' 失望 means 'to lose that gaze.' The two words are two sides of the same coin, linked by the act of looking forward with expectation."},

{type:"teach", trg:"相信(xiāngxìn)", src:"to believe / to trust", pos:"verb", gender:null,
 note:"相 = mutual, 信 = trust/believe.\n我相信你 = I believe you / I trust you.",
 example:"A: 你(nǐ)相信(xiāngxìn)他(tā)吗(ma)？\nB: 我(wǒ)相信(xiāngxìn)他(tā)。",
 exampleSrc:"A: Do you believe him?\nB: I believe him.",
 funFact:"信 is one of the most important characters in Chinese ethics. It means 'trust,' 'faith,' and 'letter' (message). A 人 (person) standing next to their 言 (word) creates 信: a person who keeps their word is trustworthy."},

{type:"teach", trg:"理解(lǐjiě)", src:"to understand / understanding", pos:"verb", gender:null,
 note:"理 = reason/logic, 解 = untangle/solve.\nDeeper than 懂. Implies emotional or intellectual comprehension.",
 example:"A: 你(nǐ)理解(lǐjiě)我(wǒ)的(de)意思(yìsi)吗(ma)？\nB: 我(wǒ)理解(lǐjiě)。",
 exampleSrc:"A: Do you understand what I mean?\nB: I understand.",
 funFact:"理解 and 懂 both mean 'understand,' but at different levels. 懂 is basic comprehension: 你懂吗 (Do you get it?). 理解 is deeper: understanding someone's feelings, motivations, or a complex concept. It implies empathy and effort."},

{type:"mc", q:"你(nǐ)同意(tóngyì)还是(háishi)反对(fǎnduì)？ What is being asked?",
 opts:["Do you agree or oppose?","Are you happy or sad?","Do you hope or fear?","Do you like it or not?"],
 ans:"Do you agree or oppose?",
 hint:"同意 means '___' and 反对 means '___.' The question asks you to pick a side."},

{type:"match", pairs:[
  {trg:"同意(tóngyì)", src:"to agree"},
  {trg:"反对(fǎnduì)", src:"to oppose"},
  {trg:"希望(xīwàng)", src:"to hope"},
  {trg:"相信(xiāngxìn)", src:"to believe"},
  {trg:"理解(lǐjiě)", src:"to understand (deeply)"}
]},

{type:"fb", s:"我(wǒ){1}你(nǐ)，你(nǐ)一定(yídìng)可以(kěyǐ)！",
 a:["相信(xiāngxìn)"],
 opts:["相信(xiāngxìn)","希望(xīwàng)","同意(tóngyì)","理解(lǐjiě)"],
 hint:"The speaker expresses trust and confidence in someone. Which verb means 'to believe/trust'?",
 sSrc:"I {1} you, you can definitely do it!"},

{type:"mc", q:"我(wǒ)希望(xīwàng)明天(míngtiān)天气(tiānqì)好(hǎo)。 What is the speaker expressing?",
 opts:["A command for good weather","A hope for good weather tomorrow","A belief about tomorrow's weather","Disappointment about the weather"],
 ans:"A hope for good weather tomorrow",
 hint:"希望 expresses a wish or hope about something that has not happened yet."},

{type:"fb", s:"我(wǒ)不(bù){1}，我(wǒ)觉得(juéde)这样(zhèyàng)不(bù)好(hǎo)。",
 a:["同意(tóngyì)"],
 opts:["同意(tóngyì)","理解(lǐjiě)","希望(xīwàng)","相信(xiāngxìn)"],
 hint:"The speaker disagrees. Which word, when negated, means 'do not agree'?",
 sSrc:"I do not {1}, I feel this way is not good."},

{type:"mc", q:"What is the difference between 理解 and 懂?",
 opts:["理解 means 'to forget'","They are exactly the same","理解 is deeper, 懂 is basic comprehension","懂 is more formal"],
 ans:"理解 is deeper, 懂 is basic comprehension",
 hint:"One implies ___ 'getting it,' while the other implies empathy and intellectual depth."},

{type:"fb", s:"我(wǒ){1}以后(yǐhòu)可以(kěyǐ)去(qù)中国(zhōngguó)。",
 a:["希望(xīwàng)"],
 opts:["希望(xīwàng)","反对(fǎnduì)","相信(xiāngxìn)","理解(lǐjiě)"],
 hint:"The speaker expresses a wish about the future. Which verb means 'to hope'?",
 sSrc:"I {1} I can go to China in the future."}
]},

// === L4: Unit Review ===
{id:"zhv2_u15l4", title:"说出你的想法 Speak Your Mind", icon:"\uD83C\uDFAF", xp:15, board:true, steps:[
{type:"intro", title:"说出你的想法 Speak Your Mind",
 desc:"Review all opinion verbs, emotions, and debate vocabulary from this unit. Combine them to express complex thoughts about how you feel and what you believe.",
 goals:["Use all opinion and emotion words correctly","Build sentences with multiple emotional layers","Express complex views using taught vocabulary"]},

{type:"match", pairs:[
  {trg:"觉得(juéde)", src:"to feel / to think"},
  {trg:"认为(rènwéi)", src:"to believe / to consider"},
  {trg:"高兴(gāoxìng)", src:"happy"},
  {trg:"生气(shēngqì)", src:"angry"},
  {trg:"担心(dānxīn)", src:"to worry"}
]},

{type:"mc", q:"虽然(suīrán)我(wǒ)紧张(jǐnzhāng)，但是(dànshì)我(wǒ)不(bù)害怕(hàipà)。 What is the speaker saying?",
 opts:["They are nervous but not afraid","They are not nervous but afraid","They are neither nervous nor afraid","They are both nervous and afraid"],
 ans:"They are nervous but not afraid",
 hint:"虽然 acknowledges nervousness. 但是 introduces the contrast: no fear. Two separate emotions."},

{type:"fb", s:"我(wǒ){1}他(tā)说(shuō)得(de)对(duì)。",
 a:["认为(rènwéi)"],
 opts:["认为(rènwéi)","担心(dānxīn)","害怕(hàipà)","失望(shīwàng)"],
 hint:"The speaker formally believes someone is correct. Which is the assertive opinion verb?",
 sSrc:"I {1} what he said is correct."},

{type:"match", pairs:[
  {trg:"难过(nánguò)", src:"sad / upset"},
  {trg:"害怕(hàipà)", src:"afraid"},
  {trg:"紧张(jǐnzhāng)", src:"nervous"},
  {trg:"满意(mǎnyì)", src:"satisfied"},
  {trg:"失望(shīwàng)", src:"disappointed"}
]},

{type:"mc", q:"她(tā)对(duì)结果(jiéguǒ)很(hěn)失望(shīwàng)，但是(dànshì)不(bù)后悔(hòuhuǐ)。 How does she feel?",
 opts:["Happy about the result","Disappointed but without regret","Angry and regretful","Satisfied and hopeful"],
 ans:"Disappointed but without regret",
 hint:"失望 is the emotion (disappointment). 不后悔 means she does not ___ the decision itself."},

{type:"fb", s:"你(nǐ){1}我(wǒ)的(de)意思(yìsi)吗(ma)？",
 a:["理解(lǐjiě)"],
 opts:["理解(lǐjiě)","同意(tóngyì)","希望(xīwàng)","反对(fǎnduì)"],
 hint:"The speaker asks if someone comprehends their meaning deeply. Which verb means 'to understand'?",
 sSrc:"Do you {1} what I mean?"},

{type:"mc", q:"我(wǒ)反对(fǎnduì)！ How strong is this statement?",
 opts:["Polite suggestion","Mild disagreement","Strong opposition","Casual indifference"],
 ans:"Strong opposition",
 hint:"反对 means 'to oppose,' which is much stronger than simply saying 不同意 (disagree)."},

{type:"fb", s:"我(wǒ){1}你(nǐ)能(néng)做(zuò)到(dào)！",
 a:["相信(xiāngxìn)"],
 opts:["相信(xiāngxìn)","反对(fǎnduì)","担心(dānxīn)","失望(shīwàng)"],
 hint:"The speaker has confidence and trust in someone's ability. Which verb means 'to believe in'?",
 sSrc:"I {1} you can do it!"},

{type:"match", pairs:[
  {trg:"同意(tóngyì)", src:"to agree"},
  {trg:"反对(fǎnduì)", src:"to oppose"},
  {trg:"希望(xīwàng)", src:"to hope"},
  {trg:"相信(xiāngxìn)", src:"to believe"},
  {trg:"理解(lǐjiě)", src:"to understand (deeply)"}
]},

{type:"mc", q:"我(wǒ)觉得(juéde)他(tā)说(shuō)得(de)对(duì)，我(wǒ)同意(tóngyì)。 What two things does the speaker express?",
 opts:["Hope and disappointment","Anger and regret","Worry and fear","An opinion and agreement"],
 ans:"An opinion and agreement",
 hint:"觉得 shares a personal view, and 同意 confirms alignment with what was said."},

{type:"fb", s:"我(wǒ)很(hěn){1}，因为(yīnwèi)他(tā)没(méi)来(lái)。",
 a:["失望(shīwàng)"],
 opts:["失望(shīwàng)","满意(mǎnyì)","高兴(gāoxìng)","紧张(jǐnzhāng)"],
 hint:"The speaker feels let down because someone did not come. Which word means 'disappointed'?",
 sSrc:"I am very {1}, because he did not come."},

{type:"mc", q:"别(bié)担心(dānxīn)，我(wǒ)相信(xiāngxìn)一切(yíqiè)都(dōu)会(huì)好(hǎo)的(de)。 What is the speaker doing?",
 opts:["Offering reassurance and confidence","Disagreeing with someone","Expressing disappointment","Expressing worry"],
 ans:"Offering reassurance and confidence",
 hint:"别担心 tells someone not to worry. 相信 expresses belief that things will be fine."},

{type:"fb", s:"我(wǒ){1}你(nǐ)的(de)想法(xiǎngfa)，但是(dànshì)我(wǒ)不(bù)同意(tóngyì)。",
 a:["理解(lǐjiě)"],
 opts:["理解(lǐjiě)","反对(fǎnduì)","担心(dānxīn)","希望(xīwàng)"],
 hint:"The speaker comprehends the other person's thinking but does not agree. Which verb means deep understanding?",
 sSrc:"I {1} your thinking, but I do not agree."},

{type:"mc", q:"Which pair of words are opposites?",
 opts:["觉得 and 认为","满意 and 失望","同意 and 相信","希望 and 理解"],
 ans:"满意 and 失望",
 hint:"One means 'satisfied' (full of meaning) and the other means 'disappointed' (lost hope). They are emotional opposites."}
]}

]};

export default UNIT_15;
