// Japanese V2 Unit 30. てつがく (Philosophy & Abstract Thought)
import BATCH2_L02 from './_batch2_u30_L02.js';
import BATCH2_L01 from './_batch2_u30_L01.js';
// Level: B2.3. JLPT N2/N1 aligned.
// そんざい, がいねん, ろんり, しゅかん, きゃっかん, ほんしつ, かち.

const UNIT_30 = {
  n:30, lang:"ja", srcLang:"en", track:"v2",
  title:"てつがく", sub:"Philosophy & Abstract Thought",
  icon:"🤔", level:"B2.3", color:"#7B5EE8",
  lessons:[

// ═══ L1: Abstract Concepts & Reasoning ═══
{id:"jav2_u30l1", title:"Abstract Concepts", icon:"💭", xp:15, board:true, steps:[
  {type:"intro", title:"Abstract Concepts & Reasoning",
   desc:"Philosophy and abstract thought require a specialized vocabulary in any language. In Japanese, many philosophical terms use kanji compounds borrowed from classical Chinese. Mastering words like そんざい (existence), がいねん (concept), and ろんり (logic) opens the door to academic discussions, essays, and JLPT N1-level reading comprehension.",
   goals:["Use philosophical vocabulary accurately","Discuss abstract concepts in Japanese","Distinguish subjective vs. objective perspectives"]},

  {type:"teach", trg:"てつがく", src:"philosophy", pos:"noun", gender:null,
   note:"Kanji: 哲学. てつがくしゃ = philosopher.\nてつがくてき = philosophical.",
   example:"A: だいがくでてつがくをせんこうしました。\nB: どのてつがくしゃがいちばんすきですか？",
   exampleSrc:"A: I majored in philosophy at university.\nB: Which philosopher do you like the most?",
   funFact:"哲学 was coined by Meiji-era scholar Nishi Amane in 1874 to translate 'philosophy.' He combined 哲 (wise/clear) and 学 (study). Before this, Japan had no single word for Western philosophy as a discipline. The character 哲 originally meant 'discerning wisdom' in classical Chinese."},

  {type:"teach", trg:"そんざい", src:"existence / being", pos:"noun", gender:null,
   note:"Kanji: 存在. そんざいする = to exist.\nそんざいかん = sense of presence/existence.",
   example:"A: じんせいのいみやそんざいのもくてきについてかんがえたことはありますか？\nB: はい、だれでもいちどはかんがえますよね。",
   exampleSrc:"A: Have you ever thought about the meaning of life or the purpose of existence?\nB: Yes, everyone thinks about it at least once.",
   funFact:"存在 combines 存 (preserve/exist) and 在 (be located). In Japanese philosophy, そんざい became central when Heidegger's 'Sein' (Being) was translated. The philosopher Nishida Kitaro (1870-1945) of the Kyoto School attempted to bridge Western and Eastern concepts of being through his idea of 'absolute nothingness.'"},

  {type:"teach", trg:"がいねん", src:"concept / notion", pos:"noun", gender:null,
   note:"Kanji: 概念. がいねんてき = conceptual.\nちゅうしょうてきながいねん = abstract concept.",
   example:"A: このがいねんはことばでせつめいするのがむずかしい。\nB: ずをつかってせつめいしてみましょう。",
   exampleSrc:"A: This concept is difficult to explain in words.\nB: Let us try explaining it with a diagram.",
   funFact:"概念 uses 概 (approximate/general) and 念 (thought/idea). The word entered Japanese through the translation of Western philosophical texts in the Meiji era. Many abstract terms in modern Japanese were created during this period of intense intellectual exchange between Japan and Europe."},

  {type:"mc", q:"そんざいする means:", opts:["to exist","to disappear","to think","to believe"], ans:"to exist",
   hint:"This verb form adds する to the noun meaning 'existence' or 'being.'"},

  {type:"teach", trg:"ろんり", src:"logic / reasoning", pos:"noun", gender:null,
   note:"Kanji: 論理. ろんりてき = logical.\nろんりがく = formal logic (as a discipline).",
   example:"A: そのしゅちょうにはろんりてきなもんだいがあります。\nB: どのてんがもんだいですか？",
   exampleSrc:"A: There is a logical problem with that argument.\nB: Which point is the problem?",
   funFact:"論理 combines 論 (argument/discussion) and 理 (principle/reason). Japanese academic writing places enormous emphasis on ろんりてき (logical) structure. The word りくつ also means 'logic' but in casual speech often carries a negative nuance: りくつっぽい means 'overly argumentative.'"},

  {type:"teach", trg:"しゅかん", src:"subjectivity / subjective view", pos:"noun", gender:null,
   note:"Kanji: 主観. しゅかんてき = subjective.\nOpposite of きゃっかん (objective).",
   example:"A: それはしゅかんてきないけんではないですか？\nB: たしかに、データでしょうめいするひつようがあります。",
   exampleSrc:"A: Isn't that a subjective opinion?\nB: True, we need to prove it with data.",
   funFact:"主観 uses 主 (master/main) and 観 (view/observe). The 'master's view' is subjective because it comes from one person's perspective. This term was another Meiji-era coinage, created to translate the Western philosophical distinction between subjective and objective knowledge."},

  {type:"teach", trg:"きゃっかん", src:"objectivity / objective view", pos:"noun", gender:null,
   note:"Kanji: 客観. きゃっかんてき = objective.\nきゃっかんてきなじじつ = objective fact.",
   example:"A: きゃっかんてきなデータにもとづいてはんだんしましょう。\nB: さんせいです。かんじょうではなくじじつでかんがえましょう。",
   exampleSrc:"A: Let us make judgments based on objective data.\nB: I agree. Let us think with facts, not emotions.",
   funFact:"客観 uses 客 (guest/visitor) and 観 (view). The 'guest's view' is objective because a visitor sees things from the outside without personal attachment. Together, しゅかん and きゃっかん form a pair that appears constantly in Japanese academic essays, news analysis, and formal debates."},

  {type:"fb", s:"それはしゅかんてきな{1}ではないですか？\n(Isn't that a subjective opinion?)", a:"いけん", opts:["いけん","じじつ","ろんり","かんじょう"], sSrc:"Isn't that a subjective opinion?",
   hint:"A personal view or judgment about something, often contrasted with facts."},

  {type:"teach", trg:"ほんしつ", src:"essence / true nature", pos:"noun", gender:null,
   note:"Kanji: 本質. ほんしつてき = essential / fundamental.\nもんだいのほんしつ = the essence of the problem.",
   example:"A: このもんだいのほんしつはなんだとおもいますか？\nB: コミュニケーションぶそくだとおもいます。",
   exampleSrc:"A: What do you think is the essence of this problem?\nB: I think it is a lack of communication.",
   funFact:"本質 combines 本 (root/origin) and 質 (quality/nature). In Japanese philosophical discourse, searching for the ほんしつ of things echoes both Western essentialism and the Buddhist concept of 空 (ku, emptiness), which questions whether things even have a fixed essence."},

  {type:"teach", trg:"かち", src:"value / worth", pos:"noun", gender:null,
   note:"Kanji: 価値. かちかん = values / value system.\nかちがある = to have value.",
   example:"A: じんせいでいちばんかちがあるものはなんですか？\nB: わたしはけんこうだとおもいます。",
   exampleSrc:"A: What is the most valuable thing in life?\nB: I think it is health.",
   funFact:"価値 uses 価 (price/value) and 値 (value/worth). Both characters relate to value, making this a reinforced compound. かちかん (value system) is a key concept in Japanese sociology. The postwar shift in かちかん from collective duty to individual fulfillment is one of the defining cultural changes in modern Japan."},

  {type:"mc", q:"きゃっかんてき means:", opts:["subjective","objective","emotional","philosophical"], ans:"objective",
   hint:"This adjective describes a viewpoint that comes from outside, like a guest observing without personal attachment."},

  {type:"teach", trg:"ぜったい", src:"absolute / unconditional", pos:"noun", gender:null,
   note:"Kanji: 絶対. ぜったいに = absolutely / definitely.\nOpposite: そうたい (relative).",
   example:"A: ぜったいにただしいこたえはあるのでしょうか？\nB: てつがくではそれじたいがぎもんです。",
   exampleSrc:"A: Is there an absolutely correct answer?\nB: In philosophy, that itself is a question.",
   funFact:"絶対 uses 絶 (sever/extreme) and 対 (versus/pair). It literally means 'cutting off the pairing,' meaning something that stands alone without comparison. In everyday Japanese, ぜったいに is very common: ぜったいにいく (I will definitely go). The philosophical and casual uses coexist."},

  {type:"teach", trg:"そうたい", src:"relative / comparative", pos:"noun", gender:null,
   note:"Kanji: 相対. そうたいてき = relative.\nそうたいせいりろん = theory of relativity.",
   example:"A: しあわせはそうたいてきなものだとおもいます。\nB: たしかに、ひとによってちがいますね。",
   exampleSrc:"A: I think happiness is something relative.\nB: True, it differs from person to person.",
   funFact:"相対 uses 相 (mutual) and 対 (face/versus). Things that are そうたいてき exist only in relation to something else. Einstein's theory of relativity is そうたいせいりろん in Japanese. The ぜったい/そうたい pair is fundamental in both physics and philosophy."},

  {type:"fb", s:"じんせいでいちばん{1}があるものはなんですか？\n(What is the most valuable thing in life?)", a:"かち", opts:["かち","いみ","ろんり","がいねん"], sSrc:"What is the most valuable thing in life?",
   hint:"The noun meaning 'value' or 'worth,' written with the kanji for price and worth."},

  {type:"teach", trg:"いしき", src:"consciousness / awareness", pos:"noun", gender:null,
   note:"Kanji: 意識. いしきする = to be conscious of / to be aware of.\nいしきがたかい = highly aware.",
   example:"A: かんきょうもんだいにたいするいしきがたかまっています。\nB: わかいせだいがとくにかんしんをもっていますね。",
   exampleSrc:"A: Awareness of environmental issues is increasing.\nB: The younger generation is especially interested.",
   funFact:"意識 combines 意 (intention/will) and 識 (know/discern). In medical contexts, いしきをうしなう means 'to lose consciousness.' In social contexts, いしきがたかい (high awareness) is used both positively (socially conscious) and sarcastically (pretentious). The slang いしきたかいけい mocks people who are overly self-aware."},

  {type:"match", pairs:[{trg:"しゅかん",src:"subjectivity"},{trg:"きゃっかん",src:"objectivity"},{trg:"ぜったい",src:"absolute"},{trg:"そうたい",src:"relative"}]},

  {type:"mc", q:"ほんしつてき means:", opts:["temporary","superficial","essential / fundamental","traditional"], ans:"essential / fundamental",
   hint:"The adjective form of the noun meaning 'essence' or 'true nature.'"},

  {type:"fb", s:"かんきょうもんだいにたいする{1}がたかまっています。\n(Awareness of environmental issues is increasing.)", a:"いしき", opts:["いしき","かち","ろんり","がいねん"], sSrc:"Awareness of environmental issues is increasing.",
   hint:"The noun meaning 'consciousness' or 'awareness,' used when talking about social awareness."},

  {type:"match", pairs:[{trg:"てつがく",src:"philosophy"},{trg:"そんざい",src:"existence"},{trg:"ほんしつ",src:"essence"},{trg:"いしき",src:"consciousness"}]},

  {type:"mc", q:"てつがく was coined in Japan to translate which concept?", opts:["science","history","mathematics","philosophy"], ans:"philosophy",
   hint:"Meiji-era scholar Nishi Amane created this kanji compound in 1874 to name a Western academic discipline."},

  {type:"fb", s:"このがいねんはことばでせつめいするのが{1}。\n(This concept is difficult to explain in words.)", a:"むずかしい", opts:["むずかしい","やさしい","たのしい","おもしろい"], sSrc:"This concept is difficult to explain in words.",
   hint:"The i-adjective meaning 'difficult' or 'hard.'"},

  {type:"mc", q:"ぜったい and そうたい are opposites. ぜったい means:", opts:["absolute","temporary","relative","conditional"], ans:"absolute",
   hint:"Something that stands alone without comparison, severing all paired reference points."},

  {type:"mc", q:"そうたいてき describes something that:", opts:["exists on its own","exists only in relation to something else","stands absolutely fixed","is philosophically certain"], ans:"exists only in relation to something else",
   hint:"The kanji uses 'mutual' and 'face each other,' suggesting a paired or comparative existence."},
]},

// ═══ L2: Philosophical Arguments & Debate ═══
{id:"jav2_u30l2", title:"Arguments & Debate", icon:"⚖️", xp:15, board:true, steps:[
  {type:"intro", title:"Philosophical Arguments & Debate",
   desc:"To engage with philosophical texts and debates in Japanese, you need vocabulary for argumentation: しゅちょう (assertion), はんろん (counterargument), ぜんてい (premise), and けつろん (conclusion). These words are essential for academic writing, formal discussions, and JLPT reading passages about social issues.",
   goals:["Build and deconstruct arguments in Japanese","Use formal debate vocabulary","Express complex logical relationships"]},

  {type:"teach", trg:"しゅちょう", src:"assertion / claim / argument", pos:"noun", gender:null,
   note:"Kanji: 主張. しゅちょうする = to assert / to argue.\nUsed in debates, essays, and news.",
   example:"A: あなたのしゅちょうのこんきょはなんですか？\nB: さいきんのちょうさけっかにもとづいています。",
   exampleSrc:"A: What is the basis for your argument?\nB: It is based on recent survey results.",
   funFact:"主張 uses 主 (master/main) and 張 (stretch/extend). To make a しゅちょう is to 'stretch out your main point.' In Japanese academic writing, clearly stating your しゅちょう early in the essay is considered good form, similar to the Western thesis statement."},

  {type:"teach", trg:"はんろん", src:"counterargument / objection", pos:"noun", gender:null,
   note:"Kanji: 反論. はんろんする = to counter / to object.\nはんろんのよち = room for objection.",
   example:"A: そのいけんにはんろんがあります。\nB: どうぞ、おきかせください。",
   exampleSrc:"A: I have an objection to that opinion.\nB: Please, let me hear it.",
   funFact:"反論 combines 反 (anti/opposite) and 論 (argument). In Japanese debate culture, direct はんろん can feel confrontational, so speakers often soften it: 'ちょっとちがういけんがあるのですが' (I have a slightly different opinion) is preferred over a blunt はんろんします. This indirectness is deeply cultural."},

  {type:"teach", trg:"ぜんてい", src:"premise / precondition", pos:"noun", gender:null,
   note:"Kanji: 前提. ぜんていとする = to assume / to take as a premise.\nぜんていじょうけん = prerequisite.",
   example:"A: そのろんりはまちがったぜんていにもとづいています。\nB: では、ただしいぜんていはなんでしょうか？",
   exampleSrc:"A: That reasoning is based on a wrong premise.\nB: Then, what is the correct premise?",
   funFact:"前提 uses 前 (before/front) and 提 (present/put forward). A premise is what you 'put forward before' the argument. In formal Japanese logic, ぜんてい maps directly to the logical term 'premise' in syllogistic reasoning: だいぜんてい (major premise) and しょうぜんてい (minor premise)."},

  {type:"mc", q:"はんろんする means:", opts:["to make a counterargument","to agree completely","to summarize","to give up"], ans:"to make a counterargument",
   hint:"This verb combines the kanji for 'anti/opposite' with 'argument.'"},

  {type:"teach", trg:"けつろん", src:"conclusion", pos:"noun", gender:null,
   note:"Kanji: 結論. けつろんをだす = to reach a conclusion.\nけつろんとして = in conclusion.",
   example:"A: けつろんとして、きょういくへのとうしがもっともひつようです。\nB: わたしもどういけんです。",
   exampleSrc:"A: In conclusion, investment in education is most necessary.\nB: I share the same opinion.",
   funFact:"結論 uses 結 (tie/bind) and 論 (argument). A conclusion 'ties up' the argument. The phrase けつろんからいうと (speaking from the conclusion) is common in Japanese business presentations, where stating the conclusion first is valued for clarity. This 'conclusion-first' style is called けつろんファースト."},

  {type:"teach", trg:"こんきょ", src:"basis / grounds / evidence", pos:"noun", gender:null,
   note:"Kanji: 根拠. こんきょのある = well-grounded.\nかがくてきこんきょ = scientific evidence.",
   example:"A: そのしゅちょうにはかがくてきなこんきょがありますか？\nB: はい、ろんぶんをさんしょうしてください。",
   exampleSrc:"A: Is there scientific evidence for that claim?\nB: Yes, please refer to the research paper.",
   funFact:"根拠 uses 根 (root) and 拠 (base/depend on). Evidence is the 'root base' of an argument. In Japanese legal and academic contexts, こんきょ carries strong weight. The phrase こんきょのないうわさ (baseless rumor) is a common way to dismiss unsubstantiated claims."},

  {type:"teach", trg:"ぎろん", src:"discussion / debate / argument", pos:"noun", gender:null,
   note:"Kanji: 議論. ぎろんする = to debate / to discuss.\nぎろんがわかれる = opinions are divided.",
   example:"A: このテーマについてぎろんしましょう。\nB: さんせいはとはんたいはにわかれてぎろんしませんか？",
   exampleSrc:"A: Let us discuss this topic.\nB: Shall we split into groups for and against?",
   funFact:"議論 combines 議 (deliberate) and 論 (argument). Unlike はんろん (counterargument), ぎろん is neutral and can be collaborative. The Diet (国会, こっかい) is a place of ぎろん. In casual speech, saying ぎろんになった can mean a discussion got heated without implying anyone was wrong."},

  {type:"fb", s:"そのしゅちょうにはかがくてきな{1}がありますか？\n(Is there scientific evidence for that claim?)", a:"こんきょ", opts:["こんきょ","けつろん","ぜんてい","ぎろん"], sSrc:"Is there scientific evidence for that claim?",
   hint:"The noun meaning 'basis' or 'grounds,' the root foundation of an argument."},

  {type:"teach", trg:"ていぎ", src:"definition", pos:"noun", gender:null,
   note:"Kanji: 定義. ていぎする = to define.\nていぎがあいまい = the definition is vague.",
   example:"A: まず、じゆうのていぎをかくにんしましょう。\nB: ひとによってていぎがちがいますね。",
   exampleSrc:"A: First, let us confirm the definition of freedom.\nB: The definition differs depending on the person.",
   funFact:"定義 uses 定 (fix/determine) and 義 (meaning/righteousness). Defining terms is the first step in Japanese academic papers. The phrase ていぎづけ (defining/categorization) appears frequently in research methodology sections. Clear ていぎ prevents misunderstanding in both philosophy and law."},

  {type:"teach", trg:"どうとく", src:"morality / ethics", pos:"noun", gender:null,
   note:"Kanji: 道徳. どうとくてき = moral / ethical.\nどうとくきょういく = moral education.",
   example:"A: AIのかいはつにはどうとくてきなもんだいがともないます。\nB: たとえば、プライバシーのもんだいがありますね。",
   exampleSrc:"A: The development of AI involves ethical issues.\nB: For example, there are privacy concerns.",
   funFact:"道徳 combines 道 (way/path) and 徳 (virtue). Japanese schools have a dedicated どうとく (moral education) class from elementary through middle school, covering topics like respect, responsibility, and community. This subject became an official graded course in 2018, sparking debate about whether morality can be assessed."},

  {type:"mc", q:"ていぎがあいまい means:", opts:["the definition is clear","the definition is vague","the definition is correct","the definition is new"], ans:"the definition is vague",
   hint:"あいまい describes something that is unclear, ambiguous, or not precisely determined."},

  {type:"teach", trg:"しんり", src:"truth / psychological truth", pos:"noun", gender:null,
   note:"Kanji: 真理. ふへんのしんり = universal truth.\nAlso 心理 (psychology, different kanji).",
   example:"A: かがくはしんりをさがすがくもんです。\nB: でも、しんりはひとつではないかもしれません。",
   exampleSrc:"A: Science is the study of searching for truth.\nB: But truth might not be just one thing.",
   funFact:"真理 uses 真 (true) and 理 (principle). Be careful not to confuse it with 心理 (しんり, psychology), which uses 心 (heart) instead of 真 (true). Both are pronounced identically. Context determines which is meant. In philosophical texts, 真理 explores whether absolute truth exists."},

  {type:"teach", trg:"ちゅうしょうてき", src:"abstract", pos:"adj", gender:null,
   note:"Kanji: 抽象的. Opposite: ぐたいてき (concrete).\nちゅうしょうてきなかんがえ = abstract thinking.",
   example:"A: もうすこしぐたいてきにせつめいしてもらえますか？\nB: すみません、ちゅうしょうてきすぎましたね。",
   exampleSrc:"A: Could you explain a bit more concretely?\nB: Sorry, I was too abstract.",
   funFact:"抽象 uses 抽 (extract/draw out) and 象 (elephant/image). To abstract is to 'draw out the image' from concrete details. The opposite, ぐたいてき (具体的), uses 具 (tool/equipment) and 体 (body), suggesting something you can grasp with your hands. This pair appears in every academic discussion."},

  {type:"fb", s:"けつろんとして、きょういくへの{1}がもっともひつようです。\n(In conclusion, investment in education is most necessary.)", a:"とうし", opts:["とうし","ぎろん","ぜんてい","しゅちょう"], sSrc:"In conclusion, investment in education is most necessary.",
   hint:"The noun meaning 'investment,' putting resources into something for future returns."},

  {type:"match", pairs:[{trg:"しゅちょう",src:"assertion"},{trg:"はんろん",src:"counterargument"},{trg:"ぜんてい",src:"premise"},{trg:"けつろん",src:"conclusion"}]},

  {type:"mc", q:"ちゅうしょうてき is the opposite of:", opts:["しゅかんてき","ろんりてき","ぐたいてき","きゃっかんてき"], ans:"ぐたいてき",
   hint:"The opposite of abstract is something tangible and specific, something you can grasp."},

  {type:"match", pairs:[{trg:"ぎろん",src:"discussion/debate"},{trg:"こんきょ",src:"evidence/basis"},{trg:"ていぎ",src:"definition"},{trg:"どうとく",src:"morality"}]},

  {type:"fb", s:"まず、じゆうの{1}をかくにんしましょう。\n(First, let us confirm the definition of freedom.)", a:"ていぎ", opts:["ていぎ","しんり","がいねん","ほんしつ"], sSrc:"First, let us confirm the definition of freedom.",
   hint:"The noun meaning 'definition,' the act of fixing the precise meaning of a term."},

  {type:"mc", q:"ぜんてい means:", opts:["conclusion","counterargument","definition","premise"], ans:"premise",
   hint:"The starting assumption you 'put forward before' building a logical argument."},

  {type:"mc", q:"どうとく refers to:", opts:["morality and ethics","formal logic","the legal system","abstract art"], ans:"morality and ethics",
   hint:"The word combining 'way/path' and 'virtue,' also the name of a school subject in Japan."},
]},

,BATCH2_L01
,BATCH2_L02
]};
export default UNIT_30;
