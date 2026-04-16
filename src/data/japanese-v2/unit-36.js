// Japanese V2 Unit 36. そうかつ (Comprehensive Review)
import BATCH2_L02 from './_batch2_u36_L02.js';
import BATCH2_L01 from './_batch2_u36_L01.js';
// Level: B2.4. JLPT N2/N1 aligned.
// Cross-domain review: philosophy, law, medicine, literature, international relations, technology.

const UNIT_36 = {
  n:36, lang:"ja", srcLang:"en", track:"v2",
  title:"そうかつ", sub:"Comprehensive Review",
  icon:"🎓", level:"B2.4", color:"#7B5EE8",
  lessons:[

// ═══ L1: Academic & Formal Register Mastery ═══
{id:"jav2_u36l1", title:"Academic Register", icon:"📚", xp:15, board:true, steps:[
  {type:"intro", title:"Academic & Formal Register Mastery",
   desc:"This comprehensive review consolidates vocabulary from philosophy, law, medicine, literature, international relations, and technology. At B2 level, you should be able to move fluidly between these domains using formal academic register. This lesson focuses on cross-domain connective expressions and register-appropriate language for essays, presentations, and JLPT N1 preparation.",
   goals:["Review and connect B2 vocabulary across domains","Master formal connective expressions","Practice register-appropriate academic language"]},

  {type:"teach", trg:"すなわち", src:"namely / that is to say / in other words", pos:"conj", gender:null,
   note:"Formal written connector. Used to restate or clarify.\nSimilar to つまり but more formal.",
   example:"A: けんぽうのきほんげんそく、すなわちこくみんしゅけん、へいわしゅぎ、じんけんそんちょうについてぎろんしましょう。\nB: まずこくみんしゅけんからはじめましょう。",
   exampleSrc:"A: Let us discuss the basic principles of the constitution, namely popular sovereignty, pacifism, and respect for human rights.\nB: Let us start with popular sovereignty.",
   funFact:"すなわち is written 即ち in kanji. It is one of the most formal connective expressions in Japanese, used primarily in academic writing, legal documents, and formal speeches. In everyday conversation, つまり or いいかえれば (to rephrase) are more natural. JLPT N1 reading passages frequently use すなわち to introduce definitions or restatements."},

  {type:"teach", trg:"いっぽう", src:"on the other hand / meanwhile", pos:"conj", gender:null,
   note:"Kanji: 一方. Used to contrast two different aspects or situations.\nいっぽうで = on the other hand.",
   example:"A: じんこうちのうはせいかつをべんりにします。いっぽうで、しごとがうしなわれるきけんもあります。\nB: バランスのとれたぎろんがひつようですね。",
   exampleSrc:"A: AI makes life convenient. On the other hand, there is also the risk of job losses.\nB: A balanced discussion is needed.",
   funFact:"一方 uses 一 (one) and 方 (direction/side). It introduces the 'other direction' of an argument. This connector is indispensable in Japanese academic writing and formal presentations. It signals that the writer is presenting a balanced view by acknowledging multiple perspectives. JLPT reading comprehension often tests understanding of いっぽう transitions."},

  {type:"teach", trg:"したがって", src:"therefore / consequently / accordingly", pos:"conj", gender:null,
   note:"Formal logical connector. Stronger than だから.\nUsed in academic writing and formal reasoning.",
   example:"A: しょうこがふじゅうぶんでした。したがって、ひこくにんはむざいとなりました。\nB: ほうりつにしたがったけつろんですね。",
   exampleSrc:"A: The evidence was insufficient. Therefore, the defendant was found not guilty.\nB: That is a conclusion in accordance with the law.",
   funFact:"したがって comes from the verb したがう (従う, to follow/obey). As a conjunction, it means 'following from that' or 'therefore.' It is one of the key logical connectors in Japanese academic writing, along with ゆえに (hence, even more formal) and そのけっか (as a result). Mastering these connectors is essential for JLPT N1 essay writing."},

  {type:"mc", q:"すなわち is best translated as:", opts:["namely / that is to say","however","in addition","as a result"], ans:"namely / that is to say",
   hint:"This formal connector is used to restate or define something in different words."},

  {type:"teach", trg:"むしろ", src:"rather / if anything / on the contrary", pos:"adv", gender:null,
   note:"Used to correct or redirect a statement.\nむしろぎゃくだ = it is rather the opposite.",
   example:"A: じんこうちのうはきけんではないですか？\nB: きけんというよりむしろ、つかいかたがもんだいだとおもいます。",
   exampleSrc:"A: Isn't AI dangerous?\nB: Rather than dangerous, I think the issue is how it is used.",
   funFact:"むしろ is written 寧ろ in kanji, though the kana form is far more common. It redirects the conversation from one perspective to a preferred or more accurate one. In debates and essays, むしろ is powerful for politely correcting a misconception while offering an alternative view. It is less confrontational than 'you are wrong' and more nuanced than a simple negation."},

  {type:"teach", trg:"かならずしも", src:"not necessarily / not always", pos:"adv", gender:null,
   note:"Always used with a negative verb. かならずしも...ない = not necessarily.\nPartial negation pattern.",
   example:"A: けいざいせいちょうはかならずしもこくみんのしあわせにつながるとはかぎりません。\nB: ふくしやかんきょうもたいせつですね。",
   exampleSrc:"A: Economic growth does not necessarily lead to the happiness of citizens.\nB: Welfare and the environment are also important.",
   funFact:"かならずしも uses かならず (necessarily/definitely) with the particle しも (an emphatic particle). Combined with a negative ending, it creates a nuanced partial negation: 'not entirely' or 'not always.' This pattern is a hallmark of sophisticated Japanese argumentation, avoiding absolute statements in favor of measured, qualified claims."},

  {type:"fb", s:"じんこうちのうはせいかつをべんりにします。{1}で、しごとがうしなわれるきけんもあります。\n(AI makes life convenient. On the other hand, there is the risk of job losses.)", a:"いっぽう", opts:["いっぽう","したがって","すなわち","むしろ"], sSrc:"AI makes life convenient. On the other hand, there is the risk of job losses.",
   hint:"The connector that introduces a contrasting viewpoint, meaning 'on the other hand.'"},

  {type:"teach", trg:"にもかかわらず", src:"despite / in spite of / nevertheless", pos:"conj", gender:null,
   note:"Formal concessive connector. More formal than のに.\nUsed in academic and legal writing.",
   example:"A: おおくのどりょくにもかかわらず、きこうへんどうのもんだいはかいけつしていません。\nB: こくさいてきなきょうりょくをもっとつよめるべきです。",
   exampleSrc:"A: Despite many efforts, the problem of climate change has not been resolved.\nB: We should strengthen international cooperation further.",
   funFact:"にもかかわらず is one of the most formal concessive expressions in Japanese. It can follow nouns, verbs, and adjectives. In legal writing, it appears frequently: けいこくにもかかわらず (despite the warning). For JLPT N1, this pattern is tested both in reading comprehension and grammar sections. The casual equivalent のに sounds too informal for academic contexts."},

  {type:"teach", trg:"もとづく", src:"to be based on / to be grounded in", pos:"verb", gender:null,
   note:"Kanji: 基づく. にもとづいて = based on (te-form).\nじじつにもとづく = based on facts.",
   example:"A: このけんきゅうはかがくてきなこんきょにもとづいています。\nB: しんらいできるけっかですね。",
   exampleSrc:"A: This research is based on scientific evidence.\nB: Those are trustworthy results.",
   funFact:"基づく uses 基 (foundation/base) and づく (attach/reach). 'To reach the foundation.' This verb is essential in academic and legal Japanese. にもとづいて (based on) appears in legal texts, research papers, and policy documents. It carries more formal weight than をもとにして (using as a basis), which is more conversational."},

  {type:"mc", q:"かならずしも is always followed by:", opts:["a positive statement","a negative form","a question","a request"], ans:"a negative form",
   hint:"This adverb creates a partial negation pattern meaning 'not necessarily' or 'not always.'"},

  {type:"teach", trg:"いわゆる", src:"so-called / what is known as", pos:"adj", gender:null,
   note:"Used to introduce a commonly known term or concept.\nPrecedes the term being introduced.",
   example:"A: いわゆるデジタルデバイドがこうれいしゃにえいきょうしています。\nB: じょうほうかくさのかいしょうがきゅうむです。",
   exampleSrc:"A: The so-called digital divide is affecting elderly people.\nB: Eliminating the information gap is an urgent task.",
   funFact:"いわゆる comes from いう (to say) in its classical passive form: 'what is said to be.' It introduces terms that the audience likely knows by name. In academic writing, いわゆる signals that the writer is using a recognized term rather than inventing one. It can also carry slight irony: いわゆるせんもんか (so-called experts) implies skepticism."},

  {type:"match", pairs:[{trg:"すなわち",src:"namely"},{trg:"いっぽう",src:"on the other hand"},{trg:"したがって",src:"therefore"},{trg:"むしろ",src:"rather"}]},

  {type:"fb", s:"おおくのどりょくに{1}、もんだいはかいけつしていません。\n(Despite many efforts, the problem has not been resolved.)", a:"もかかわらず", opts:["もかかわらず","したがって","いっぽう","もとづいて"], sSrc:"Despite many efforts, the problem has not been resolved.",
   hint:"The formal concessive connector meaning 'despite' or 'in spite of.'"},

  {type:"match", pairs:[{trg:"にもかかわらず",src:"despite"},{trg:"もとづく",src:"to be based on"},{trg:"かならずしも",src:"not necessarily"},{trg:"いわゆる",src:"so-called"}]},

  {type:"mc", q:"にもかかわらず expresses:", opts:["cause and effect","addition","concession (despite)","time sequence"], ans:"concession (despite)",
   hint:"This connector introduces an unexpected result that contradicts what came before."},

  {type:"mc", q:"じじつにもとづく means:", opts:["unrelated to facts","contrary to facts","in spite of facts","based on facts"], ans:"based on facts",
   hint:"もとづく means 'to be grounded in,' and じじつ is the word for 'f....'"},
]},

// ═══ L2: Cross-Domain Synthesis & Exam Preparation ═══
{id:"jav2_u36l2", title:"Synthesis & Exam Prep", icon:"🎯", xp:15, board:true, steps:[
  {type:"intro", title:"Cross-Domain Synthesis & Exam Preparation",
   desc:"This final B2 lesson synthesizes vocabulary from all domains covered in the B2 track. You will practice using philosophical, legal, medical, literary, diplomatic, and technological vocabulary in mixed contexts, simulating the diverse reading passages found on the JLPT N1. Strong performance here demonstrates B2 mastery and readiness for advanced study.",
   goals:["Connect vocabulary across all B2 domains","Practice JLPT-style comprehension tasks","Demonstrate B2-level reading and reasoning"]},

  {type:"teach", trg:"けんかい", src:"opinion / view / interpretation", pos:"noun", gender:null,
   note:"Kanji: 見解. けんかいをしめす = to express a view.\nMore formal than いけん (opinion).",
   example:"A: このもんだいについてせいふのけんかいをうかがいたいのですが。\nB: こうしきなけんかいはまだはっぴょうされていません。",
   exampleSrc:"A: I would like to hear the government's view on this issue.\nB: An official view has not been announced yet.",
   funFact:"見解 uses 見 (see/view) and 解 (understand/untie). A けんかい is a considered, often official view, more weighty than いけん (opinion). In Japanese bureaucratic and legal language, こうしきけんかい (official view) carries institutional authority. Media often reports on government けんかい regarding policy changes, international incidents, and social issues."},

  {type:"teach", trg:"てきようする", src:"to apply / to put into practice", pos:"verb", gender:null,
   note:"Kanji: 適用. ほうりつをてきようする = to apply a law.\nてきようはんい = scope of application.",
   example:"A: このほうりつはすべてのこくみんにてきようされます。\nB: がいこくじんにもてきようされますか？",
   exampleSrc:"A: This law applies to all citizens.\nB: Does it also apply to foreign nationals?",
   funFact:"適用 uses 適 (suitable/fit) and 用 (use). To 'use suitably.' In legal contexts, てきよう determines whether a law or regulation covers a particular case. In technology, てきよう describes deploying a solution. In medicine, ちりょうほうのてきよう means applying a treatment. This versatile term bridges multiple professional domains."},

  {type:"teach", trg:"こうさつ", src:"consideration / examination / analysis", pos:"noun", gender:null,
   note:"Kanji: 考察. こうさつする = to examine / to analyze.\nUsed in research papers and essays.",
   example:"A: じっけんけっかにもとづいてこうさつをおこないました。\nB: どのようなけつろんにたっしましたか？",
   exampleSrc:"A: We conducted an analysis based on the experimental results.\nB: What conclusion did you reach?",
   funFact:"考察 combines 考 (think) and 察 (investigate/observe). In Japanese academic papers, the こうさつ section follows the けっか (results) section and is where the researcher interprets findings. Writing a strong こうさつ is considered one of the most important skills in Japanese academic training, requiring logical reasoning and connection to prior research."},

  {type:"mc", q:"こうさつ in a research paper refers to:", opts:["the analysis/discussion section","the methods section","the introduction section","the references section"], ans:"the analysis/discussion section",
   hint:"This s... comes after results and involves examining and interpreting what was found."},

  {type:"teach", trg:"とうごう", src:"integration / unification", pos:"noun", gender:null,
   note:"Kanji: 統合. とうごうする = to integrate.\nEUとうごう = European integration.",
   example:"A: いりょうとテクノロジーのとうごうがすすんでいます。\nB: AIしんだんやロボットしゅじゅつがそのれいですね。",
   exampleSrc:"A: The integration of medicine and technology is advancing.\nB: AI diagnosis and robotic surgery are examples of that.",
   funFact:"統合 uses 統 (unite/govern) and 合 (combine/match). とうごう appears across domains: EU統合 (European integration), システムとうごう (system integration), とうごういがく (integrative medicine). The concept of bringing disparate elements into a unified whole is valued in Japanese organizational culture, where harmony (わ) and coordination are priorities."},

  {type:"teach", trg:"ぜんたいぞう", src:"overall picture / big picture", pos:"noun", gender:null,
   note:"Kanji: 全体像. ぜんたいぞうをつかむ = to grasp the big picture.\nUsed in analysis and planning.",
   example:"A: まずもんだいのぜんたいぞうをりかいしましょう。\nB: そのうえでかくぶぶんをぶんせきするのがいいですね。",
   exampleSrc:"A: First, let us understand the overall picture of the problem.\nB: Then it would be good to analyze each part.",
   funFact:"全体像 uses 全体 (whole/entire) and 像 (image/figure). Grasping the ぜんたいぞう before diving into details is a valued intellectual skill in Japanese academic and business culture. It aligns with the emphasis on もくてきいしき (purpose awareness) and the big-picture strategic thinking that Japanese management philosophy promotes."},

  {type:"teach", trg:"たんてき", src:"concise / straightforward / frank", pos:"adj", gender:null,
   note:"Kanji: 端的. たんてきにいうと = to put it concisely.\nUsed in formal speech and writing.",
   example:"A: たんてきにいうと、このけいかくにはむりがあります。\nB: ぐたいてきにどのてんがもんだいですか？",
   exampleSrc:"A: To put it concisely, this plan is unrealistic.\nB: Specifically, which points are problematic?",
   funFact:"端的 uses 端 (edge/point) and 的 (target). Getting to the 'point of the target.' In Japanese business communication, being たんてき is valued in presentations and reports, though it must be balanced with politeness. The phrase たんてきにもうしますと (to state it concisely, humble form) is common in formal meetings when delivering direct assessments."},

  {type:"fb", s:"まずもんだいの{1}をりかいしましょう。\n(First, let us understand the overall picture of the problem.)", a:"ぜんたいぞう", opts:["ぜんたいぞう","こうさつ","けんかい","けつろん"], sSrc:"First, let us understand the overall picture of the problem.",
   hint:"The compound meaning 'overall picture' or 'big picture,' the complete image of something."},

  {type:"teach", trg:"はいけい", src:"background / context / backdrop", pos:"noun", gender:null,
   note:"Kanji: 背景. じだいはいけい = historical background.\nもんだいのはいけい = background of a problem.",
   example:"A: このふんそうのはいけいにはふくざつなれきしがあります。\nB: はいけいをりかいしなければかいけつはできません。",
   exampleSrc:"A: There is a complex history in the background of this conflict.\nB: Without understanding the background, it cannot be resolved.",
   funFact:"背景 uses 背 (back/behind) and 景 (scene/view). The 'scene behind' something. In academic writing, the はいけい section explains why research is needed. In art, はいけい means the literal background of a painting. In social analysis, understanding the はいけい of events is considered essential before proposing solutions, reflecting the Japanese value of thorough context-gathering."},

  {type:"teach", trg:"ちくせき", src:"accumulation / building up", pos:"noun", gender:null,
   note:"Kanji: 蓄積. ちくせきする = to accumulate.\nちしきのちくせき = accumulation of knowledge.",
   example:"A: ちしきのちくせきがせんもんかとしてのきそです。\nB: けいけんもおなじくらいたいせつですね。",
   exampleSrc:"A: The accumulation of knowledge is the foundation of being a specialist.\nB: Experience is equally important.",
   funFact:"蓄積 uses 蓄 (store/save) and 積 (pile up/accumulate). Japan's ものづくり tradition values ちくせき of skills and knowledge over generations. The concept of カイゼン (continuous improvement) relies on ちくせき of small improvements. In language learning, vocabulary ちくせき is the key to moving from intermediate to advanced levels."},

  {type:"mc", q:"たんてきにいうと means:", opts:["to speak indirectly","to put it concisely","to speak emotionally","to repeat oneself"], ans:"to put it concisely",
   hint:"This phrase uses the adjective meaning 'straightforward' with the verb for speaking."},

  {type:"teach", trg:"きょうよう", src:"liberal arts education / general knowledge / culture", pos:"noun", gender:null,
   note:"Kanji: 教養. きょうようがある = to be well-educated/cultured.\nきょうようかもく = liberal arts subjects.",
   example:"A: きょうようはせんもんちしきとおなじくらいたいせつです。\nB: はばひろいぶんやのちしきがそうごうてきなはんだんりょくをうみますね。",
   exampleSrc:"A: Liberal arts education is as important as specialized knowledge.\nB: Knowledge across a wide range of fields produces comprehensive judgment.",
   funFact:"教養 uses 教 (teach) and 養 (nurture/raise). In Japan, きょうよう refers to the breadth of knowledge that makes someone a well-rounded, cultured person. Japanese universities have きょうようかもく (liberal arts courses) that all students take regardless of major. The concept encompasses not just academic knowledge but also cultural literacy, ethical thinking, and social awareness."},

  {type:"match", pairs:[{trg:"けんかい",src:"opinion/view"},{trg:"こうさつ",src:"analysis"},{trg:"とうごう",src:"integration"},{trg:"ちくせき",src:"accumulation"}]},

  {type:"fb", s:"このふんそうの{1}にはふくざつなれきしがあります。\n(There is a complex history in the background of this conflict.)", a:"はいけい", opts:["はいけい","ぜんたいぞう","こうさつ","けんかい"], sSrc:"There is a complex history in the background of this conflict.",
   hint:"The noun meaning 'background' or 'context,' the circumstances behind a situation."},

  {type:"match", pairs:[{trg:"てきようする",src:"to apply"},{trg:"たんてき",src:"concise"},{trg:"はいけい",src:"background"},{trg:"きょうよう",src:"liberal arts/culture"}]},

  {type:"mc", q:"Which pair of connectors shows contrast vs. cause-effect?", opts:["すなわち / むしろ","したがって / すなわち","いっぽう / したがって","むしろ / いわゆる"], ans:"いっぽう / したがって",
   hint:"One means 'on the other hand' (contrast) and the other means 'therefore' (logical consequence)."},

  {type:"mc", q:"こうしきなけんかいをしめす means:", opts:["to hide an official view","to request an official view","to change an official view","to express an official view"], ans:"to express an official view",
   hint:"しめす means 'to show' or 'to indicate,' and けんかい is a considered, formal opinion."},

  {type:"fb", s:"このほうりつはすべてのこくみんに{1}されます。\n(This law applies to all citizens.)", a:"てきよう", opts:["てきよう","はいけい","とうごう","ちくせき"], sSrc:"This law applies to all citizens.",
   hint:"The noun meaning 'application,' used when a law or rule is put into effect for a specific case."},

  {type:"mc", q:"いりょうとテクノロジーのとうごう means:", opts:["integration of medicine and technology","competition between medicine and technology","difference between medicine and technology","history of medicine and technology"], ans:"integration of medicine and technology",
   hint:"とうごう combines 'unite' and 'combine,' describing the merging of two domains into a unified whole."},

  {type:"mc", q:"ちしきのちくせき means:", opts:["loss of knowledge","accumulation of knowledge","testing of knowledge","transfer of knowledge"], ans:"accumulation of knowledge",
   hint:"ちくせき combines two kanji both meaning 'to store/pile up,' and ちしき means k...."},

  {type:"mc", q:"きょうようがある describes a person who:", opts:["is highly specialized in one field","has a university degree","is well-educated and broadly cultured","works in academia"], ans:"is well-educated and broadly cultured",
   hint:"きょうよう refers to breadth of cultural and intellectual knowledge, not just one field of expertise."},

  {type:"tip", title:"B2 Completion: Your Japanese Toolkit",
   text:"Congratulations on reaching the end of B2. You now have vocabulary across six major domains:\n\n1. てつがく: そんざい, がいねん, ろんり, ほんしつ, かち\n2. ほうりつ: けんぽう, さいばん, けんり, ぎむ, はんけつ\n3. いがく: しんさつ, ちりょう, しゅじゅつ, めんえき, いでんし\n4. ぶんがく: さっか, しょうせつ, し, ひゆ, むじょう\n5. こくさいかんけい: がいこう, ふんそう, こうしょう, じょうやく\n6. じょうほうしゃかい: じんこうちのう, プライバシー, サイバーこうげき\n\nPlus formal connectors: すなわち, いっぽう, したがって, にもかかわらず",
   deepDive:{title:"Path to JLPT N1",
    text:"B2 completion positions you well for JLPT N1 preparation. Key areas to continue developing:\n\nReading: Practice long-form texts (newspaper editorials, academic abstracts, literary criticism). Focus on understanding the author's しゅちょう (main argument) and logical structure.\n\nListening: Watch NHK news, academic lectures, and panel discussions. Train your ear for formal register and technical vocabulary.\n\nVocabulary: Continue expanding domain-specific vocabulary. JLPT N1 tests approximately 10,000 words. The B2 domains you have studied are heavily represented.\n\nGrammar: Master the formal patterns covered here (にもかかわらず, もとづく, かならずしも...ない) plus additional N1 grammar like ものの, にほかならない, をもって.\n\nThe key at this level is quantity of input. Read widely, listen daily, and review vocabulary systematically."}},
]},

,BATCH2_L01
,BATCH2_L02
]};
export default UNIT_36;
