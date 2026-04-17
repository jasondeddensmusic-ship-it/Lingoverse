// Japanese V2 Unit 36. 総括(そうかつ) (Comprehensive Review)
import BATCH11_L1 from './_batch11_u36_L01.js';
import BATCH10_L1 from './_batch10_u36_L01.js';
import BATCH9_L1 from './_batch9_u36_L01.js';
import BATCH7_L1 from './_batch7_u36_L01.js';
import BATCH8_L1 from './_batch8_u36_L01.js';
import BATCH6_L1 from './_batch6_u36_L01.js';
import BATCH5_L02 from './_batch5_u36_L02.js';
import BATCH5_L01 from './_batch5_u36_L01.js';
import BATCH2_L02 from './_batch2_u36_L02.js';
import BATCH2_L01 from './_batch2_u36_L01.js';
// Level: B2.4. JLPT N2/N1 aligned.
// Cross-domain review: philosophy, law, medicine, literature, international relations, technology.

const UNIT_36 = {
  n:36, lang:"ja", srcLang:"en", track:"v2",
  title:"総括(そうかつ)", sub:"Comprehensive Review",
  icon:"\u{1F393}", level:"B2.4", color:"#7B5EE8",
  lessons:[

// ═══ L1: Academic & Formal Register Mastery ═══
{id:"jav2_u36l1", title:"Academic Register", icon:"\u{1F4DA}", xp:15, board:true, steps:[
  {type:"intro", title:"Academic & Formal Register Mastery",
   desc:"This comprehensive review consolidates vocabulary from philosophy, law, medicine, literature, international relations, and technology. At B2 level, you should be able to move fluidly between these domains using formal academic register. This lesson focuses on cross-domain connective expressions and register-appropriate language for essays, presentations, and JLPT N1 preparation.",
   goals:["Review and connect B2 vocabulary across domains","Master formal connective expressions","Practice register-appropriate academic language"]},

  {type:"teach", trg:"即(すなわ)ち", src:"namely / that is to say / in other words", pos:"conj", gender:null,
   note:"Formal written connector. Used to restate or clarify.\nSimilar to つまり but more formal.",
   example:"A: 憲法(けんぽう)の基本原則(きほんげんそく)、即(すなわ)ち国民主権(こくみんしゅけん)、平和主義(へいわしゅぎ)、人権尊重(じんけんそんちょう)について議論(ぎろん)しましょう。\nB: まず国民主権(こくみんしゅけん)から始(はじ)めましょう。",
   exampleSrc:"A: Let us discuss the basic principles of the constitution, namely popular sovereignty, pacifism, and respect for human rights.\nB: Let us start with popular sovereignty.",
   funFact:"すなわち is written 即ち in kanji. It is one of the most formal connective expressions in Japanese, used primarily in academic writing, legal documents, and formal speeches. In everyday conversation, つまり or 言(い)い換(か)えれば (to rephrase) are more natural. JLPT N1 reading passages frequently use すなわち to introduce definitions or restatements."},

  {type:"teach", trg:"一方(いっぽう)", src:"on the other hand / meanwhile", pos:"conj", gender:null,
   note:"Kanji: 一方. Used to contrast two different aspects or situations.\n一方(いっぽう)で = on the other hand.",
   example:"A: 人工知能(じんこうちのう)は生活(せいかつ)を便利(べんり)にします。一方(いっぽう)で、仕事(しごと)が失(うしな)われる危険(きけん)もあります。\nB: バランスのとれた議論(ぎろん)が必要(ひつよう)ですね。",
   exampleSrc:"A: AI makes life convenient. On the other hand, there is also the risk of job losses.\nB: A balanced discussion is needed.",
   funFact:"一方 uses 一 (one) and 方 (direction/side). It introduces the 'other direction' of an argument. This connector is indispensable in Japanese academic writing and formal presentations. It signals that the writer is presenting a balanced view by acknowledging multiple perspectives. JLPT reading comprehension often tests understanding of 一方(いっぽう) transitions."},

  {type:"teach", trg:"従(したが)って", src:"therefore / consequently / accordingly", pos:"conj", gender:null,
   note:"Formal logical connector. Stronger than だから.\nUsed in academic writing and formal reasoning.",
   example:"A: 証拠(しょうこ)が不十分(ふじゅうぶん)でした。従(したが)って、被告人(ひこくにん)は無罪(むざい)となりました。\nB: 法律(ほうりつ)に従(したが)った結論(けつろん)ですね。",
   exampleSrc:"A: The evidence was insufficient. Therefore, the defendant was found not guilty.\nB: That is a conclusion in accordance with the law.",
   funFact:"したがって comes from the verb 従(したが)う (to follow/obey). As a conjunction, it means 'following from that' or 'therefore.' It is one of the key logical connectors in Japanese academic writing, along with ゆえに (hence, even more formal) and その結果(けっか) (as a result). Mastering these connectors is essential for JLPT N1 essay writing."},

  {type:"mc", q:"即(すなわ)ち is best translated as:", opts:["namely / that is to say","however","in addition","as a result"], ans:"namely / that is to say",
   hint:"This formal connector is used to restate or define something in different words."},

  {type:"teach", trg:"寧(むし)ろ", src:"rather / if anything / on the contrary", pos:"adv", gender:null,
   note:"Used to correct or redirect a statement.\n寧(むし)ろ逆(ぎゃく)だ = it is rather the opposite.",
   example:"A: 人工知能(じんこうちのう)は危険(きけん)ではないですか？\nB: 危険(きけん)というより寧(むし)ろ、使(つか)い方(かた)が問題(もんだい)だと思(おも)います。",
   exampleSrc:"A: Isn't AI dangerous?\nB: Rather than dangerous, I think the issue is how it is used.",
   funFact:"むしろ is written 寧ろ in kanji, though the kana form is far more common. It redirects the conversation from one perspective to a preferred or more accurate one. In debates and essays, むしろ is powerful for politely correcting a misconception while offering an alternative view. It is less confrontational than 'you are wrong' and more nuanced than a simple negation."},

  {type:"teach", trg:"必(かなら)ずしも", src:"not necessarily / not always", pos:"adv", gender:null,
   note:"Always used with a negative verb. 必(かなら)ずしも...ない = not necessarily.\nPartial negation pattern.",
   example:"A: 経済成長(けいざいせいちょう)は必(かなら)ずしも国民(こくみん)の幸(しあわ)せにつながるとは限(かぎ)りません。\nB: 福祉(ふくし)や環境(かんきょう)も大切(たいせつ)ですね。",
   exampleSrc:"A: Economic growth does not necessarily lead to the happiness of citizens.\nB: Welfare and the environment are also important.",
   funFact:"必ずしも uses 必ず (necessarily/definitely) with the particle しも (an emphatic particle). Combined with a negative ending, it creates a nuanced partial negation: 'not entirely' or 'not always.' This pattern is a hallmark of sophisticated Japanese argumentation, avoiding absolute statements in favor of measured, qualified claims."},

  {type:"fb", s:"人工知能(じんこうちのう)は生活(せいかつ)を便利(べんり)にします。{1}で、仕事(しごと)が失(うしな)われる危険(きけん)もあります。\n(AI makes life convenient. On the other hand, there is the risk of job losses.)", a:"一方(いっぽう)", opts:["一方(いっぽう)","従(したが)って","即(すなわ)ち","寧(むし)ろ"], sSrc:"AI makes life convenient. On the other hand, there is the risk of job losses.",
   hint:"The connector that introduces a contrasting viewpoint, meaning 'on the other hand.'"},

  {type:"teach", trg:"にも拘(かか)わらず", src:"despite / in spite of / nevertheless", pos:"conj", gender:null,
   note:"Formal concessive connector. More formal than のに.\nUsed in academic and legal writing.",
   example:"A: 多(おお)くの努力(どりょく)にも拘(かか)わらず、気候変動(きこうへんどう)の問題(もんだい)は解決(かいけつ)していません。\nB: 国際的(こくさいてき)な協力(きょうりょく)をもっと強(つよ)めるべきです。",
   exampleSrc:"A: Despite many efforts, the problem of climate change has not been resolved.\nB: We should strengthen international cooperation further.",
   funFact:"にもかかわらず is one of the most formal concessive expressions in Japanese. It can follow nouns, verbs, and adjectives. In legal writing, it appears frequently: 警告(けいこく)にもかかわらず (despite the warning). For JLPT N1, this pattern is tested both in reading comprehension and grammar sections. The casual equivalent のに sounds too informal for academic contexts."},

  {type:"teach", trg:"基(もと)づく", src:"to be based on / to be grounded in", pos:"verb", gender:null,
   note:"Kanji: 基づく. に基(もと)づいて = based on (te-form).\n事実(じじつ)に基(もと)づく = based on facts.",
   example:"A: この研究(けんきゅう)は科学的(かがくてき)な根拠(こんきょ)に基(もと)づいています。\nB: 信頼(しんらい)できる結果(けっか)ですね。",
   exampleSrc:"A: This research is based on scientific evidence.\nB: Those are trustworthy results.",
   funFact:"基づく uses 基 (foundation/base) and づく (attach/reach). 'To reach the foundation.' This verb is essential in academic and legal Japanese. に基(もと)づいて (based on) appears in legal texts, research papers, and policy documents. It carries more formal weight than をもとにして (using as a basis), which is more conversational."},

  {type:"mc", q:"必(かなら)ずしも is always followed by:", opts:["a positive statement","a negative form","a question","a request"], ans:"a negative form",
   hint:"This adverb creates a partial negation pattern meaning 'not necessarily' or 'not always.'"},

  {type:"teach", trg:"所謂(いわゆる)", src:"so-called / what is known as", pos:"adj", gender:null,
   note:"Used to introduce a commonly known term or concept.\nPrecedes the term being introduced.",
   example:"A: 所謂(いわゆる)デジタルデバイドが高齢者(こうれいしゃ)に影響(えいきょう)しています。\nB: 情報格差(じょうほうかくさ)の解消(かいしょう)が急務(きゅうむ)です。",
   exampleSrc:"A: The so-called digital divide is affecting elderly people.\nB: Eliminating the information gap is an urgent task.",
   funFact:"いわゆる comes from 言(い)う (to say) in its classical passive form: 'what is said to be.' It introduces terms that the audience likely knows by name. In academic writing, いわゆる signals that the writer is using a recognized term rather than inventing one. It can also carry slight irony: 所謂(いわゆる)専門家(せんもんか) (so-called experts) implies skepticism."},

  {type:"match", pairs:[{trg:"即(すなわ)ち",src:"namely"},{trg:"一方(いっぽう)",src:"on the other hand"},{trg:"従(したが)って",src:"therefore"},{trg:"寧(むし)ろ",src:"rather"}]},

  {type:"fb", s:"多(おお)くの努力(どりょく)に{1}、問題(もんだい)は解決(かいけつ)していません。\n(Despite many efforts, the problem has not been resolved.)", a:"も拘(かか)わらず", opts:["も拘(かか)わらず","従(したが)って","一方(いっぽう)","基(もと)づいて"], sSrc:"Despite many efforts, the problem has not been resolved.",
   hint:"The formal concessive connector meaning 'despite' or 'in spite of.'"},

  {type:"match", pairs:[{trg:"にも拘(かか)わらず",src:"despite"},{trg:"基(もと)づく",src:"to be based on"},{trg:"必(かなら)ずしも",src:"not necessarily"},{trg:"所謂(いわゆる)",src:"so-called"}]},

  {type:"mc", q:"にも拘(かか)わらず expresses:", opts:["cause and effect","addition","concession (despite)","time sequence"], ans:"concession (despite)",
   hint:"This connector introduces an unexpected result that contradicts what came before."},

  {type:"mc", q:"事実(じじつ)に基(もと)づく means:", opts:["unrelated to facts","contrary to facts","in spite of facts","based on facts"], ans:"based on facts",
   hint:"基(もと)づく means 'to be grounded in,' and 事実(じじつ) is the word for 'f....'"},
]},

// ═══ L2: Cross-Domain Synthesis & Exam Preparation ═══
{id:"jav2_u36l2", title:"Synthesis & Exam Prep", icon:"\u{1F3AF}", xp:15, board:true, steps:[
  {type:"intro", title:"Cross-Domain Synthesis & Exam Preparation",
   desc:"This final B2 lesson synthesizes vocabulary from all domains covered in the B2 track. You will practice using philosophical, legal, medical, literary, diplomatic, and technological vocabulary in mixed contexts, simulating the diverse reading passages found on the JLPT N1. Strong performance here demonstrates B2 mastery and readiness for advanced study.",
   goals:["Connect vocabulary across all B2 domains","Practice JLPT-style comprehension tasks","Demonstrate B2-level reading and reasoning"]},

  {type:"teach", trg:"見解(けんかい)", src:"opinion / view / interpretation", pos:"noun", gender:null,
   note:"Kanji: 見解. 見解(けんかい)を示(しめ)す = to express a view.\nMore formal than 意見(いけん) (opinion).",
   example:"A: この問題(もんだい)について政府(せいふ)の見解(けんかい)を伺(うかが)いたいのですが。\nB: 公式(こうしき)な見解(けんかい)はまだ発表(はっぴょう)されていません。",
   exampleSrc:"A: I would like to hear the government's view on this issue.\nB: An official view has not been announced yet.",
   funFact:"見解 uses 見 (see/view) and 解 (understand/untie). A 見解(けんかい) is a considered, often official view, more weighty than 意見(いけん) (opinion). In Japanese bureaucratic and legal language, 公式見解(こうしきけんかい) (official view) carries institutional authority. Media often reports on government 見解(けんかい) regarding policy changes, international incidents, and social issues."},

  {type:"teach", trg:"適用(てきよう)する", src:"to apply / to put into practice", pos:"verb", gender:null,
   note:"Kanji: 適用. 法律(ほうりつ)を適用(てきよう)する = to apply a law.\n適用範囲(てきようはんい) = scope of application.",
   example:"A: この法律(ほうりつ)はすべての国民(こくみん)に適用(てきよう)されます。\nB: 外国人(がいこくじん)にも適用(てきよう)されますか？",
   exampleSrc:"A: This law applies to all citizens.\nB: Does it also apply to foreign nationals?",
   funFact:"適用 uses 適 (suitable/fit) and 用 (use). To 'use suitably.' In legal contexts, 適用(てきよう) determines whether a law or regulation covers a particular case. In technology, 適用(てきよう) describes deploying a solution. In medicine, 治療法(ちりょうほう)の適用(てきよう) means applying a treatment. This versatile term bridges multiple professional domains."},

  {type:"teach", trg:"考察(こうさつ)", src:"consideration / examination / analysis", pos:"noun", gender:null,
   note:"Kanji: 考察. 考察(こうさつ)する = to examine / to analyze.\nUsed in research papers and essays.",
   example:"A: 実験結果(じっけんけっか)に基(もと)づいて考察(こうさつ)を行(おこな)いました。\nB: どのような結論(けつろん)に達(たっ)しましたか？",
   exampleSrc:"A: We conducted an analysis based on the experimental results.\nB: What conclusion did you reach?",
   funFact:"考察 combines 考 (think) and 察 (investigate/observe). In Japanese academic papers, the 考察(こうさつ) section follows the 結果(けっか) (results) section and is where the researcher interprets findings. Writing a strong 考察(こうさつ) is considered one of the most important skills in Japanese academic training, requiring logical reasoning and connection to prior research."},

  {type:"mc", q:"考察(こうさつ) in a research paper refers to:", opts:["the analysis/discussion section","the methods section","the introduction section","the references section"], ans:"the analysis/discussion section",
   hint:"This s... comes after results and involves examining and interpreting what was found."},

  {type:"teach", trg:"統合(とうごう)", src:"integration / unification", pos:"noun", gender:null,
   note:"Kanji: 統合. 統合(とうごう)する = to integrate.\nEU統合(とうごう) = European integration.",
   example:"A: 医療(いりょう)とテクノロジーの統合(とうごう)が進(すす)んでいます。\nB: AI診断(しんだん)やロボット手術(しゅじゅつ)がその例(れい)ですね。",
   exampleSrc:"A: The integration of medicine and technology is advancing.\nB: AI diagnosis and robotic surgery are examples of that.",
   funFact:"統合 uses 統 (unite/govern) and 合 (combine/match). 統合(とうごう) appears across domains: EU統合(とうごう) (European integration), システム統合(とうごう) (system integration), 統合医学(とうごういがく) (integrative medicine). The concept of bringing disparate elements into a unified whole is valued in Japanese organizational culture, where harmony (和(わ)) and coordination are priorities."},

  {type:"teach", trg:"全体像(ぜんたいぞう)", src:"overall picture / big picture", pos:"noun", gender:null,
   note:"Kanji: 全体像. 全体像(ぜんたいぞう)を掴(つか)む = to grasp the big picture.\nUsed in analysis and planning.",
   example:"A: まず問題(もんだい)の全体像(ぜんたいぞう)を理解(りかい)しましょう。\nB: その上(うえ)で各部分(かくぶぶん)を分析(ぶんせき)するのがいいですね。",
   exampleSrc:"A: First, let us understand the overall picture of the problem.\nB: Then it would be good to analyze each part.",
   funFact:"全体像 uses 全体 (whole/entire) and 像 (image/figure). Grasping the 全体像(ぜんたいぞう) before diving into details is a valued intellectual skill in Japanese academic and business culture. It aligns with the emphasis on 目的意識(もくてきいしき) (purpose awareness) and the big-picture strategic thinking that Japanese management philosophy promotes."},

  {type:"teach", trg:"端的(たんてき)", src:"concise / straightforward / frank", pos:"adj", gender:null,
   note:"Kanji: 端的. 端的(たんてき)に言(い)うと = to put it concisely.\nUsed in formal speech and writing.",
   example:"A: 端的(たんてき)に言(い)うと、この計画(けいかく)には無理(むり)があります。\nB: 具体的(ぐたいてき)にどの点(てん)が問題(もんだい)ですか？",
   exampleSrc:"A: To put it concisely, this plan is unrealistic.\nB: Specifically, which points are problematic?",
   funFact:"端的 uses 端 (edge/point) and 的 (target). Getting to the 'point of the target.' In Japanese business communication, being 端的(たんてき) is valued in presentations and reports, though it must be balanced with politeness. The phrase 端的(たんてき)に申(もう)しますと (to state it concisely, humble form) is common in formal meetings when delivering direct assessments."},

  {type:"fb", s:"まず問題(もんだい)の{1}を理解(りかい)しましょう。\n(First, let us understand the overall picture of the problem.)", a:"全体像(ぜんたいぞう)", opts:["全体像(ぜんたいぞう)","考察(こうさつ)","見解(けんかい)","結論(けつろん)"], sSrc:"First, let us understand the overall picture of the problem.",
   hint:"The compound meaning 'overall picture' or 'big picture,' the complete image of something."},

  {type:"teach", trg:"背景(はいけい)", src:"background / context / backdrop", pos:"noun", gender:null,
   note:"Kanji: 背景. 時代背景(じだいはいけい) = historical background.\n問題(もんだい)の背景(はいけい) = background of a problem.",
   example:"A: この紛争(ふんそう)の背景(はいけい)には複雑(ふくざつ)な歴史(れきし)があります。\nB: 背景(はいけい)を理解(りかい)しなければ解決(かいけつ)はできません。",
   exampleSrc:"A: There is a complex history in the background of this conflict.\nB: Without understanding the background, it cannot be resolved.",
   funFact:"背景 uses 背 (back/behind) and 景 (scene/view). The 'scene behind' something. In academic writing, the 背景(はいけい) section explains why research is needed. In art, 背景(はいけい) means the literal background of a painting. In social analysis, understanding the 背景(はいけい) of events is considered essential before proposing solutions, reflecting the Japanese value of thorough context-gathering."},

  {type:"teach", trg:"蓄積(ちくせき)", src:"accumulation / building up", pos:"noun", gender:null,
   note:"Kanji: 蓄積. 蓄積(ちくせき)する = to accumulate.\n知識(ちしき)の蓄積(ちくせき) = accumulation of knowledge.",
   example:"A: 知識(ちしき)の蓄積(ちくせき)が専門家(せんもんか)としての基礎(きそ)です。\nB: 経験(けいけん)も同(おな)じくらい大切(たいせつ)ですね。",
   exampleSrc:"A: The accumulation of knowledge is the foundation of being a specialist.\nB: Experience is equally important.",
   funFact:"蓄積 uses 蓄 (store/save) and 積 (pile up/accumulate). Japan's ものづくり tradition values 蓄積(ちくせき) of skills and knowledge over generations. The concept of カイゼン (continuous improvement) relies on 蓄積(ちくせき) of small improvements. In language learning, vocabulary 蓄積(ちくせき) is the key to moving from intermediate to advanced levels."},

  {type:"mc", q:"端的(たんてき)に言(い)うと means:", opts:["to speak indirectly","to put it concisely","to speak emotionally","to repeat oneself"], ans:"to put it concisely",
   hint:"This phrase uses the adjective meaning 'straightforward' with the verb for speaking."},

  {type:"teach", trg:"教養(きょうよう)", src:"liberal arts education / general knowledge / culture", pos:"noun", gender:null,
   note:"Kanji: 教養. 教養(きょうよう)がある = to be well-educated/cultured.\n教養科目(きょうようかもく) = liberal arts subjects.",
   example:"A: 教養(きょうよう)は専門知識(せんもんちしき)と同(おな)じくらい大切(たいせつ)です。\nB: 幅広(はばひろ)い分野(ぶんや)の知識(ちしき)が総合的(そうごうてき)な判断力(はんだんりょく)を生(う)みますね。",
   exampleSrc:"A: Liberal arts education is as important as specialized knowledge.\nB: Knowledge across a wide range of fields produces comprehensive judgment.",
   funFact:"教養 uses 教 (teach) and 養 (nurture/raise). In Japan, 教養(きょうよう) refers to the breadth of knowledge that makes someone a well-rounded, cultured person. Japanese universities have 教養科目(きょうようかもく) (liberal arts courses) that all students take regardless of major. The concept encompasses not just academic knowledge but also cultural literacy, ethical thinking, and social awareness."},

  {type:"match", pairs:[{trg:"見解(けんかい)",src:"opinion/view"},{trg:"考察(こうさつ)",src:"analysis"},{trg:"統合(とうごう)",src:"integration"},{trg:"蓄積(ちくせき)",src:"accumulation"}]},

  {type:"fb", s:"この紛争(ふんそう)の{1}には複雑(ふくざつ)な歴史(れきし)があります。\n(There is a complex history in the background of this conflict.)", a:"背景(はいけい)", opts:["背景(はいけい)","全体像(ぜんたいぞう)","考察(こうさつ)","見解(けんかい)"], sSrc:"There is a complex history in the background of this conflict.",
   hint:"The noun meaning 'background' or 'context,' the circumstances behind a situation."},

  {type:"match", pairs:[{trg:"適用(てきよう)する",src:"to apply"},{trg:"端的(たんてき)",src:"concise"},{trg:"背景(はいけい)",src:"background"},{trg:"教養(きょうよう)",src:"liberal arts/culture"}]},

  {type:"mc", q:"Which pair of connectors shows contrast vs. cause-effect?", opts:["即(すなわ)ち / 寧(むし)ろ","従(したが)って / 即(すなわ)ち","一方(いっぽう) / 従(したが)って","寧(むし)ろ / 所謂(いわゆる)"], ans:"一方(いっぽう) / 従(したが)って",
   hint:"One means 'on the other hand' (contrast) and the other means 'therefore' (logical consequence)."},

  {type:"mc", q:"公式(こうしき)な見解(けんかい)を示(しめ)す means:", opts:["to hide an official view","to request an official view","to change an official view","to express an official view"], ans:"to express an official view",
   hint:"示(しめ)す means 'to show' or 'to indicate,' and 見解(けんかい) is a considered, formal opinion."},

  {type:"fb", s:"この法律(ほうりつ)はすべての国民(こくみん)に{1}されます。\n(This law applies to all citizens.)", a:"適用(てきよう)", opts:["適用(てきよう)","背景(はいけい)","統合(とうごう)","蓄積(ちくせき)"], sSrc:"This law applies to all citizens.",
   hint:"The noun meaning 'application,' used when a law or rule is put into effect for a specific case."},

  {type:"mc", q:"医療(いりょう)とテクノロジーの統合(とうごう) means:", opts:["integration of medicine and technology","competition between medicine and technology","difference between medicine and technology","history of medicine and technology"], ans:"integration of medicine and technology",
   hint:"統合(とうごう) combines 'unite' and 'combine,' describing the merging of two domains into a unified whole."},

  {type:"mc", q:"知識(ちしき)の蓄積(ちくせき) means:", opts:["loss of knowledge","accumulation of knowledge","testing of knowledge","transfer of knowledge"], ans:"accumulation of knowledge",
   hint:"蓄積(ちくせき) combines two kanji both meaning 'to store/pile up,' and 知識(ちしき) means k...."},

  {type:"mc", q:"教養(きょうよう)がある describes a person who:", opts:["is highly specialized in one field","has a university degree","is well-educated and broadly cultured","works in academia"], ans:"is well-educated and broadly cultured",
   hint:"教養(きょうよう) refers to breadth of cultural and intellectual knowledge, not just one field of expertise."},

  {type:"tip", title:"B2 Completion: Your Japanese Toolkit",
   text:"Congratulations on reaching the end of B2. You now have vocabulary across six major domains:\n\n1. 哲学(てつがく): 存在(そんざい), 概念(がいねん), 論理(ろんり), 本質(ほんしつ), 価値(かち)\n2. 法律(ほうりつ): 憲法(けんぽう), 裁判(さいばん), 権利(けんり), 義務(ぎむ), 判決(はんけつ)\n3. 医学(いがく): 診察(しんさつ), 治療(ちりょう), 手術(しゅじゅつ), 免疫(めんえき), 遺伝子(いでんし)\n4. 文学(ぶんがく): 作家(さっか), 小説(しょうせつ), 詩(し), 比喩(ひゆ), 無常(むじょう)\n5. 国際関係(こくさいかんけい): 外交(がいこう), 紛争(ふんそう), 交渉(こうしょう), 条約(じょうやく)\n6. 情報社会(じょうほうしゃかい): 人工知能(じんこうちのう), プライバシー, サイバー攻撃(こうげき)\n\nPlus formal connectors: 即(すなわ)ち, 一方(いっぽう), 従(したが)って, にも拘(かか)わらず",
   deepDive:{title:"Path to JLPT N1",
    text:"B2 completion positions you well for JLPT N1 preparation. Key areas to continue developing:\n\nReading: Practice long-form texts (newspaper editorials, academic abstracts, literary criticism). Focus on understanding the author's 主張(しゅちょう) (main argument) and logical structure.\n\nListening: Watch NHK news, academic lectures, and panel discussions. Train your ear for formal register and technical vocabulary.\n\nVocabulary: Continue expanding domain-specific vocabulary. JLPT N1 tests approximately 10,000 words. The B2 domains you have studied are heavily represented.\n\nGrammar: Master the formal patterns covered here (にもかかわらず, 基(もと)づく, 必(かなら)ずしも...ない) plus additional N1 grammar like ものの, にほかならない, をもって.\n\nThe key at this level is quantity of input. Read widely, listen daily, and review vocabulary systematically."}},
]},

,BATCH2_L01
,BATCH2_L02
,BATCH5_L01
,BATCH5_L02
,BATCH6_L1
,BATCH8_L1
,BATCH7_L1
,BATCH9_L1
,BATCH10_L1
,BATCH11_L1
]};
export default UNIT_36;
