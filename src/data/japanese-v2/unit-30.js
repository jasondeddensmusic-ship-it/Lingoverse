// Japanese V2 Unit 30. 哲学(てつがく) (Philosophy & Abstract Thought)
import BATCH11_L1 from './_batch11_u30_L01.js';
import BATCH10_L1 from './_batch10_u30_L01.js';
import BATCH9_L1 from './_batch9_u30_L01.js';
import BATCH7_L1 from './_batch7_u30_L01.js';
import BATCH8_L1 from './_batch8_u30_L01.js';
import BATCH6_L1 from './_batch6_u30_L01.js';
import BATCH5_L02 from './_batch5_u30_L02.js';
import BATCH5_L01 from './_batch5_u30_L01.js';
import BATCH2_L02 from './_batch2_u30_L02.js';
import BATCH2_L01 from './_batch2_u30_L01.js';
// Level: B2.3. JLPT N2/N1 aligned.
// 存在, 概念, 論理, 主観, 客観, 本質, 価値.

const UNIT_30 = {
  n:30, lang:"ja", srcLang:"en", track:"v2",
  title:"哲学(てつがく)", sub:"Philosophy & Abstract Thought",
  icon:"🤔", level:"B2.3", color:"#7B5EE8",
  lessons:[

// ═══ L1: Abstract Concepts & Reasoning ═══
{id:"jav2_u30l1", title:"Abstract Concepts", icon:"💭", xp:15, board:true, steps:[
  {type:"intro", title:"Abstract Concepts & Reasoning",
   desc:"Philosophy and abstract thought require a specialized vocabulary in any language. In Japanese, many philosophical terms use kanji compounds borrowed from classical Chinese. Mastering words like 存在(そんざい) (existence), 概念(がいねん) (concept), and 論理(ろんり) (logic) opens the door to academic discussions, essays, and JLPT N1-level reading comprehension.",
   goals:["Use philosophical vocabulary accurately","Discuss abstract concepts in Japanese","Distinguish subjective vs. objective perspectives"]},

  {type:"teach", trg:"哲学(てつがく)", src:"philosophy", pos:"noun", gender:null,
   note:"Kanji: 哲学. 哲学者(てつがくしゃ) = philosopher.\n哲学的(てつがくてき) = philosophical.",
   example:"A: 大学(だいがく)で哲学(てつがく)を専攻(せんこう)しました。\nB: どの哲学者(てつがくしゃ)が一番(いちばん)好(す)きですか？",
   exampleSrc:"A: I majored in philosophy at university.\nB: Which philosopher do you like the most?",
   funFact:"哲学 was coined by Meiji-era scholar Nishi Amane in 1874 to translate 'philosophy.' He combined 哲 (wise/clear) and 学 (study). Before this, Japan had no single word for Western philosophy as a discipline. The character 哲 originally meant 'discerning wisdom' in classical Chinese."},

  {type:"teach", trg:"存在(そんざい)", src:"existence / being", pos:"noun", gender:null,
   note:"Kanji: 存在. 存在(そんざい)する = to exist.\n存在感(そんざいかん) = sense of presence/existence.",
   example:"A: 人生(じんせい)の意味(いみ)や存在(そんざい)の目的(もくてき)について考(かんが)えたことはありますか？\nB: はい、誰(だれ)でも一度(いちど)は考(かんが)えますよね。",
   exampleSrc:"A: Have you ever thought about the meaning of life or the purpose of existence?\nB: Yes, everyone thinks about it at least once.",
   funFact:"存在 combines 存 (preserve/exist) and 在 (be located). In Japanese philosophy, 存在(そんざい) became central when Heidegger's 'Sein' (Being) was translated. The philosopher Nishida Kitaro (1870-1945) of the Kyoto School attempted to bridge Western and Eastern concepts of being through his idea of 'absolute nothingness.'"},

  {type:"teach", trg:"概念(がいねん)", src:"concept / notion", pos:"noun", gender:null,
   note:"Kanji: 概念. 概念的(がいねんてき) = conceptual.\n抽象的(ちゅうしょうてき)な概念(がいねん) = abstract concept.",
   example:"A: この概念(がいねん)は言葉(ことば)で説明(せつめい)するのが難(むずか)しい。\nB: 図(ず)を使(つか)って説明(せつめい)してみましょう。",
   exampleSrc:"A: This concept is difficult to explain in words.\nB: Let us try explaining it with a diagram.",
   funFact:"概念 uses 概 (approximate/general) and 念 (thought/idea). The word entered Japanese through the translation of Western philosophical texts in the Meiji era. Many abstract terms in modern Japanese were created during this period of intense intellectual exchange between Japan and Europe."},

  {type:"mc", q:"存在(そんざい)する means:", opts:["to exist","to disappear","to think","to believe"], ans:"to exist",
   hint:"This verb form adds する to the noun meaning 'existence' or 'being.'"},

  {type:"teach", trg:"論理(ろんり)", src:"logic / reasoning", pos:"noun", gender:null,
   note:"Kanji: 論理. 論理的(ろんりてき) = logical.\n論理学(ろんりがく) = formal logic (as a discipline).",
   example:"A: その主張(しゅちょう)には論理的(ろんりてき)な問題(もんだい)があります。\nB: どの点(てん)が問題(もんだい)ですか？",
   exampleSrc:"A: There is a logical problem with that argument.\nB: Which point is the problem?",
   funFact:"論理 combines 論 (argument/discussion) and 理 (principle/reason). Japanese academic writing places enormous emphasis on 論理的(ろんりてき) (logical) structure. The word 理屈(りくつ) also means 'logic' but in casual speech often carries a negative nuance: 理屈(りくつ)っぽい means 'overly argumentative.'"},

  {type:"teach", trg:"主観(しゅかん)", src:"subjectivity / subjective view", pos:"noun", gender:null,
   note:"Kanji: 主観. 主観的(しゅかんてき) = subjective.\nOpposite of 客観(きゃっかん) (objective).",
   example:"A: それは主観的(しゅかんてき)な意見(いけん)ではないですか？\nB: 確(たし)かに、データで証明(しょうめい)する必要(ひつよう)があります。",
   exampleSrc:"A: Isn't that a subjective opinion?\nB: True, we need to prove it with data.",
   funFact:"主観 uses 主 (master/main) and 観 (view/observe). The 'master's view' is subjective because it comes from one person's perspective. This term was another Meiji-era coinage, created to translate the Western philosophical distinction between subjective and objective knowledge."},

  {type:"teach", trg:"客観(きゃっかん)", src:"objectivity / objective view", pos:"noun", gender:null,
   note:"Kanji: 客観. 客観的(きゃっかんてき) = objective.\n客観的(きゃっかんてき)な事実(じじつ) = objective fact.",
   example:"A: 客観的(きゃっかんてき)なデータに基(もと)づいて判断(はんだん)しましょう。\nB: 賛成(さんせい)です。感情(かんじょう)ではなく事実(じじつ)で考(かんが)えましょう。",
   exampleSrc:"A: Let us make judgments based on objective data.\nB: I agree. Let us think with facts, not emotions.",
   funFact:"客観 uses 客 (guest/visitor) and 観 (view). The 'guest's view' is objective because a visitor sees things from the outside without personal attachment. Together, 主観(しゅかん) and 客観(きゃっかん) form a pair that appears constantly in Japanese academic essays, news analysis, and formal debates."},

  {type:"fb", s:"それは主観的(しゅかんてき)な{1}ではないですか？\n(Isn't that a subjective opinion?)", a:"意見(いけん)", opts:["意見(いけん)","事実(じじつ)","論理(ろんり)","感情(かんじょう)"], sSrc:"Isn't that a subjective opinion?",
   hint:"A personal view or judgment about something, often contrasted with facts."},

  {type:"teach", trg:"本質(ほんしつ)", src:"essence / true nature", pos:"noun", gender:null,
   note:"Kanji: 本質. 本質的(ほんしつてき) = essential / fundamental.\n問題(もんだい)の本質(ほんしつ) = the essence of the problem.",
   example:"A: この問題(もんだい)の本質(ほんしつ)は何(なん)だと思(おも)いますか？\nB: コミュニケーション不足(ぶそく)だと思(おも)います。",
   exampleSrc:"A: What do you think is the essence of this problem?\nB: I think it is a lack of communication.",
   funFact:"本質 combines 本 (root/origin) and 質 (quality/nature). In Japanese philosophical discourse, searching for the 本質(ほんしつ) of things echoes both Western essentialism and the Buddhist concept of 空 (ku, emptiness), which questions whether things even have a fixed essence."},

  {type:"teach", trg:"価値(かち)", src:"value / worth", pos:"noun", gender:null,
   note:"Kanji: 価値. 価値観(かちかん) = values / value system.\n価値(かち)がある = to have value.",
   example:"A: 人生(じんせい)で一番(いちばん)価値(かち)があるものは何(なん)ですか？\nB: 私(わたし)は健康(けんこう)だと思(おも)います。",
   exampleSrc:"A: What is the most valuable thing in life?\nB: I think it is health.",
   funFact:"価値 uses 価 (price/value) and 値 (value/worth). Both characters relate to value, making this a reinforced compound. 価値観(かちかん) (value system) is a key concept in Japanese sociology. The postwar shift in 価値観(かちかん) from collective duty to individual fulfillment is one of the defining cultural changes in modern Japan."},

  {type:"mc", q:"客観的(きゃっかんてき) means:", opts:["subjective","objective","emotional","philosophical"], ans:"objective",
   hint:"This adjective describes a viewpoint that comes from outside, like a guest observing without personal attachment."},

  {type:"teach", trg:"絶対(ぜったい)", src:"absolute / unconditional", pos:"noun", gender:null,
   note:"Kanji: 絶対. 絶対(ぜったい)に = absolutely / definitely.\nOpposite: 相対(そうたい) (relative).",
   example:"A: 絶対(ぜったい)に正(ただ)しい答(こた)えはあるのでしょうか？\nB: 哲学(てつがく)ではそれ自体(じたい)が疑問(ぎもん)です。",
   exampleSrc:"A: Is there an absolutely correct answer?\nB: In philosophy, that itself is a question.",
   funFact:"絶対 uses 絶 (sever/extreme) and 対 (versus/pair). It literally means 'cutting off the pairing,' meaning something that stands alone without comparison. In everyday Japanese, 絶対(ぜったい)に is very common: 絶対(ぜったい)に行(い)く (I will definitely go). The philosophical and casual uses coexist."},

  {type:"teach", trg:"相対(そうたい)", src:"relative / comparative", pos:"noun", gender:null,
   note:"Kanji: 相対. 相対的(そうたいてき) = relative.\n相対性理論(そうたいせいりろん) = theory of relativity.",
   example:"A: 幸(しあわ)せは相対的(そうたいてき)なものだと思(おも)います。\nB: 確(たし)かに、人(ひと)によって違(ちが)いますね。",
   exampleSrc:"A: I think happiness is something relative.\nB: True, it differs from person to person.",
   funFact:"相対 uses 相 (mutual) and 対 (face/versus). Things that are 相対的(そうたいてき) exist only in relation to something else. Einstein's theory of relativity is 相対性理論(そうたいせいりろん) in Japanese. The 絶対(ぜったい)/相対(そうたい) pair is fundamental in both physics and philosophy."},

  {type:"fb", s:"人生(じんせい)で一番(いちばん){1}があるものは何(なん)ですか？\n(What is the most valuable thing in life?)", a:"価値(かち)", opts:["価値(かち)","意味(いみ)","論理(ろんり)","概念(がいねん)"], sSrc:"What is the most valuable thing in life?",
   hint:"The noun meaning 'value' or 'worth,' written with the kanji for price and worth."},

  {type:"teach", trg:"意識(いしき)", src:"consciousness / awareness", pos:"noun", gender:null,
   note:"Kanji: 意識. 意識(いしき)する = to be conscious of / to be aware of.\n意識(いしき)が高(たか)い = highly aware.",
   example:"A: 環境問題(かんきょうもんだい)に対(たい)する意識(いしき)が高(たか)まっています。\nB: 若(わか)い世代(せだい)が特(とく)に関心(かんしん)を持(も)っていますね。",
   exampleSrc:"A: Awareness of environmental issues is increasing.\nB: The younger generation is especially interested.",
   funFact:"意識 combines 意 (intention/will) and 識 (know/discern). In medical contexts, 意識(いしき)を失(うしな)う means 'to lose consciousness.' In social contexts, 意識(いしき)が高(たか)い (high awareness) is used both positively (socially conscious) and sarcastically (pretentious). The slang 意識高(たか)い系(けい) mocks people who are overly self-aware."},

  {type:"match", pairs:[{trg:"主観(しゅかん)",src:"subjectivity"},{trg:"客観(きゃっかん)",src:"objectivity"},{trg:"絶対(ぜったい)",src:"absolute"},{trg:"相対(そうたい)",src:"relative"}]},

  {type:"mc", q:"本質的(ほんしつてき) means:", opts:["temporary","superficial","essential / fundamental","traditional"], ans:"essential / fundamental",
   hint:"The adjective form of the noun meaning 'essence' or 'true nature.'"},

  {type:"fb", s:"環境問題(かんきょうもんだい)に対(たい)する{1}が高(たか)まっています。\n(Awareness of environmental issues is increasing.)", a:"意識(いしき)", opts:["意識(いしき)","価値(かち)","論理(ろんり)","概念(がいねん)"], sSrc:"Awareness of environmental issues is increasing.",
   hint:"The noun meaning 'consciousness' or 'awareness,' used when talking about social awareness."},

  {type:"match", pairs:[{trg:"哲学(てつがく)",src:"philosophy"},{trg:"存在(そんざい)",src:"existence"},{trg:"本質(ほんしつ)",src:"essence"},{trg:"意識(いしき)",src:"consciousness"}]},

  {type:"mc", q:"哲学(てつがく) was coined in Japan to translate which concept?", opts:["science","history","mathematics","philosophy"], ans:"philosophy",
   hint:"Meiji-era scholar Nishi Amane created this kanji compound in 1874 to name a Western academic discipline."},

  {type:"fb", s:"この概念(がいねん)は言葉(ことば)で説明(せつめい)するのが{1}。\n(This concept is difficult to explain in words.)", a:"難(むずか)しい", opts:["難(むずか)しい","易(やさ)しい","楽(たの)しい","面白(おもしろ)い"], sSrc:"This concept is difficult to explain in words.",
   hint:"The i-adjective meaning 'difficult' or 'hard.'"},

  {type:"mc", q:"絶対(ぜったい) and 相対(そうたい) are opposites. 絶対(ぜったい) means:", opts:["absolute","temporary","relative","conditional"], ans:"absolute",
   hint:"Something that stands alone without comparison, severing all paired reference points."},

  {type:"mc", q:"相対的(そうたいてき) describes something that:", opts:["exists on its own","exists only in relation to something else","stands absolutely fixed","is philosophically certain"], ans:"exists only in relation to something else",
   hint:"The kanji uses 'mutual' and 'face each other,' suggesting a paired or comparative existence."},
]},

// ═══ L2: Philosophical Arguments & Debate ═══
{id:"jav2_u30l2", title:"Arguments & Debate", icon:"⚖️", xp:15, board:true, steps:[
  {type:"intro", title:"Philosophical Arguments & Debate",
   desc:"To engage with philosophical texts and debates in Japanese, you need vocabulary for argumentation: 主張(しゅちょう) (assertion), 反論(はんろん) (counterargument), 前提(ぜんてい) (premise), and 結論(けつろん) (conclusion). These words are essential for academic writing, formal discussions, and JLPT reading passages about social issues.",
   goals:["Build and deconstruct arguments in Japanese","Use formal debate vocabulary","Express complex logical relationships"]},

  {type:"teach", trg:"主張(しゅちょう)", src:"assertion / claim / argument", pos:"noun", gender:null,
   note:"Kanji: 主張. 主張(しゅちょう)する = to assert / to argue.\nUsed in debates, essays, and news.",
   example:"A: あなたの主張(しゅちょう)の根拠(こんきょ)は何(なん)ですか？\nB: 最近(さいきん)の調査結果(ちょうさけっか)に基(もと)づいています。",
   exampleSrc:"A: What is the basis for your argument?\nB: It is based on recent survey results.",
   funFact:"主張 uses 主 (master/main) and 張 (stretch/extend). To make a 主張(しゅちょう) is to 'stretch out your main point.' In Japanese academic writing, clearly stating your 主張(しゅちょう) early in the essay is considered good form, similar to the Western thesis statement."},

  {type:"teach", trg:"反論(はんろん)", src:"counterargument / objection", pos:"noun", gender:null,
   note:"Kanji: 反論. 反論(はんろん)する = to counter / to object.\n反論(はんろん)の余地(よち) = room for objection.",
   example:"A: その意見(いけん)に反論(はんろん)があります。\nB: どうぞ、お聞(き)かせください。",
   exampleSrc:"A: I have an objection to that opinion.\nB: Please, let me hear it.",
   funFact:"反論 combines 反 (anti/opposite) and 論 (argument). In Japanese debate culture, direct 反論(はんろん) can feel confrontational, so speakers often soften it: 'ちょっと違(ちが)う意見(いけん)があるのですが' (I have a slightly different opinion) is preferred over a blunt 反論(はんろん)します. This indirectness is deeply cultural."},

  {type:"teach", trg:"前提(ぜんてい)", src:"premise / precondition", pos:"noun", gender:null,
   note:"Kanji: 前提. 前提(ぜんてい)とする = to assume / to take as a premise.\n前提条件(ぜんていじょうけん) = prerequisite.",
   example:"A: その論理(ろんり)は間違(まちが)った前提(ぜんてい)に基(もと)づいています。\nB: では、正(ただ)しい前提(ぜんてい)は何(なん)でしょうか？",
   exampleSrc:"A: That reasoning is based on a wrong premise.\nB: Then, what is the correct premise?",
   funFact:"前提 uses 前 (before/front) and 提 (present/put forward). A premise is what you 'put forward before' the argument. In formal Japanese logic, 前提(ぜんてい) maps directly to the logical term 'premise' in syllogistic reasoning: 大前提(だいぜんてい) (major premise) and 小前提(しょうぜんてい) (minor premise)."},

  {type:"mc", q:"反論(はんろん)する means:", opts:["to make a counterargument","to agree completely","to summarize","to give up"], ans:"to make a counterargument",
   hint:"This verb combines the kanji for 'anti/opposite' with 'argument.'"},

  {type:"teach", trg:"結論(けつろん)", src:"conclusion", pos:"noun", gender:null,
   note:"Kanji: 結論. 結論(けつろん)を出(だ)す = to reach a conclusion.\n結論(けつろん)として = in conclusion.",
   example:"A: 結論(けつろん)として、教育(きょういく)への投資(とうし)が最(もっと)も必要(ひつよう)です。\nB: 私(わたし)も同(どう)意見(いけん)です。",
   exampleSrc:"A: In conclusion, investment in education is most necessary.\nB: I share the same opinion.",
   funFact:"結論 uses 結 (tie/bind) and 論 (argument). A conclusion 'ties up' the argument. The phrase 結論(けつろん)からいうと (speaking from the conclusion) is common in Japanese business presentations, where stating the conclusion first is valued for clarity. This 'conclusion-first' style is called 結論(けつろん)ファースト."},

  {type:"teach", trg:"根拠(こんきょ)", src:"basis / grounds / evidence", pos:"noun", gender:null,
   note:"Kanji: 根拠. 根拠(こんきょ)のある = well-grounded.\n科学的根拠(かがくてきこんきょ) = scientific evidence.",
   example:"A: その主張(しゅちょう)には科学的(かがくてき)な根拠(こんきょ)がありますか？\nB: はい、論文(ろんぶん)を参照(さんしょう)してください。",
   exampleSrc:"A: Is there scientific evidence for that claim?\nB: Yes, please refer to the research paper.",
   funFact:"根拠 uses 根 (root) and 拠 (base/depend on). Evidence is the 'root base' of an argument. In Japanese legal and academic contexts, 根拠(こんきょ) carries strong weight. The phrase 根拠(こんきょ)のない噂(うわさ) (baseless rumor) is a common way to dismiss unsubstantiated claims."},

  {type:"teach", trg:"議論(ぎろん)", src:"discussion / debate / argument", pos:"noun", gender:null,
   note:"Kanji: 議論. 議論(ぎろん)する = to debate / to discuss.\n議論(ぎろん)が分(わ)かれる = opinions are divided.",
   example:"A: このテーマについて議論(ぎろん)しましょう。\nB: 賛成派(さんせいは)と反対派(はんたいは)に分(わ)かれて議論(ぎろん)しませんか？",
   exampleSrc:"A: Let us discuss this topic.\nB: Shall we split into groups for and against?",
   funFact:"議論 combines 議 (deliberate) and 論 (argument). Unlike 反論(はんろん) (counterargument), 議論(ぎろん) is neutral and can be collaborative. The Diet (国会(こっかい)) is a place of 議論(ぎろん). In casual speech, saying 議論(ぎろん)になった can mean a discussion got heated without implying anyone was wrong."},

  {type:"fb", s:"その主張(しゅちょう)には科学的(かがくてき)な{1}がありますか？\n(Is there scientific evidence for that claim?)", a:"根拠(こんきょ)", opts:["根拠(こんきょ)","結論(けつろん)","前提(ぜんてい)","議論(ぎろん)"], sSrc:"Is there scientific evidence for that claim?",
   hint:"The noun meaning 'basis' or 'grounds,' the root foundation of an argument."},

  {type:"teach", trg:"定義(ていぎ)", src:"definition", pos:"noun", gender:null,
   note:"Kanji: 定義. 定義(ていぎ)する = to define.\n定義(ていぎ)が曖昧(あいまい) = the definition is vague.",
   example:"A: まず、自由(じゆう)の定義(ていぎ)を確認(かくにん)しましょう。\nB: 人(ひと)によって定義(ていぎ)が違(ちが)いますね。",
   exampleSrc:"A: First, let us confirm the definition of freedom.\nB: The definition differs depending on the person.",
   funFact:"定義 uses 定 (fix/determine) and 義 (meaning/righteousness). Defining terms is the first step in Japanese academic papers. The phrase 定義(ていぎ)づけ (defining/categorization) appears frequently in research methodology sections. Clear 定義(ていぎ) prevents misunderstanding in both philosophy and law."},

  {type:"teach", trg:"道徳(どうとく)", src:"morality / ethics", pos:"noun", gender:null,
   note:"Kanji: 道徳. 道徳的(どうとくてき) = moral / ethical.\n道徳教育(どうとくきょういく) = moral education.",
   example:"A: AIの開発(かいはつ)には道徳的(どうとくてき)な問題(もんだい)が伴(ともな)います。\nB: 例(たと)えば、プライバシーの問題(もんだい)がありますね。",
   exampleSrc:"A: The development of AI involves ethical issues.\nB: For example, there are privacy concerns.",
   funFact:"道徳 combines 道 (way/path) and 徳 (virtue). Japanese schools have a dedicated 道徳(どうとく) (moral education) class from elementary through middle school, covering topics like respect, responsibility, and community. This subject became an official graded course in 2018, sparking debate about whether morality can be assessed."},

  {type:"mc", q:"定義(ていぎ)が曖昧(あいまい) means:", opts:["the definition is clear","the definition is vague","the definition is correct","the definition is new"], ans:"the definition is vague",
   hint:"曖昧(あいまい) describes something that is unclear, ambiguous, or not precisely determined."},

  {type:"teach", trg:"真理(しんり)", src:"truth / psychological truth", pos:"noun", gender:null,
   note:"Kanji: 真理. 普遍(ふへん)の真理(しんり) = universal truth.\nAlso 心理 (psychology, different kanji).",
   example:"A: 科学(かがく)は真理(しんり)を探(さが)す学問(がくもん)です。\nB: でも、真理(しんり)は一(ひと)つではないかもしれません。",
   exampleSrc:"A: Science is the study of searching for truth.\nB: But truth might not be just one thing.",
   funFact:"真理 uses 真 (true) and 理 (principle). Be careful not to confuse it with 心理 (しんり, psychology), which uses 心 (heart) instead of 真 (true). Both are pronounced identically. Context determines which is meant. In philosophical texts, 真理(しんり) explores whether absolute truth exists."},

  {type:"teach", trg:"抽象的(ちゅうしょうてき)", src:"abstract", pos:"adj", gender:null,
   note:"Kanji: 抽象的. Opposite: 具体的(ぐたいてき) (concrete).\n抽象的(ちゅうしょうてき)な考(かんが)え = abstract thinking.",
   example:"A: もう少(すこ)し具体的(ぐたいてき)に説明(せつめい)してもらえますか？\nB: すみません、抽象的(ちゅうしょうてき)すぎましたね。",
   exampleSrc:"A: Could you explain a bit more concretely?\nB: Sorry, I was too abstract.",
   funFact:"抽象 uses 抽 (extract/draw out) and 象 (elephant/image). To abstract is to 'draw out the image' from concrete details. The opposite, 具体的(ぐたいてき) (具体的), uses 具 (tool/equipment) and 体 (body), suggesting something you can grasp with your hands. This pair appears in every academic discussion."},

  {type:"fb", s:"結論(けつろん)として、教育(きょういく)への{1}が最(もっと)も必要(ひつよう)です。\n(In conclusion, investment in education is most necessary.)", a:"投資(とうし)", opts:["投資(とうし)","議論(ぎろん)","前提(ぜんてい)","主張(しゅちょう)"], sSrc:"In conclusion, investment in education is most necessary.",
   hint:"The noun meaning 'investment,' putting resources into something for future returns."},

  {type:"match", pairs:[{trg:"主張(しゅちょう)",src:"assertion"},{trg:"反論(はんろん)",src:"counterargument"},{trg:"前提(ぜんてい)",src:"premise"},{trg:"結論(けつろん)",src:"conclusion"}]},

  {type:"mc", q:"抽象的(ちゅうしょうてき) is the opposite of:", opts:["主観的(しゅかんてき)","論理的(ろんりてき)","具体的(ぐたいてき)","客観的(きゃっかんてき)"], ans:"具体的(ぐたいてき)",
   hint:"The opposite of abstract is something tangible and specific, something you can grasp."},

  {type:"match", pairs:[{trg:"議論(ぎろん)",src:"discussion/debate"},{trg:"根拠(こんきょ)",src:"evidence/basis"},{trg:"定義(ていぎ)",src:"definition"},{trg:"道徳(どうとく)",src:"morality"}]},

  {type:"fb", s:"まず、自由(じゆう)の{1}を確認(かくにん)しましょう。\n(First, let us confirm the definition of freedom.)", a:"定義(ていぎ)", opts:["定義(ていぎ)","真理(しんり)","概念(がいねん)","本質(ほんしつ)"], sSrc:"First, let us confirm the definition of freedom.",
   hint:"The noun meaning 'definition,' the act of fixing the precise meaning of a term."},

  {type:"mc", q:"前提(ぜんてい) means:", opts:["conclusion","counterargument","definition","premise"], ans:"premise",
   hint:"The starting assumption you 'put forward before' building a logical argument."},

  {type:"mc", q:"道徳(どうとく) refers to:", opts:["morality and ethics","formal logic","the legal system","abstract art"], ans:"morality and ethics",
   hint:"The word combining 'way/path' and 'virtue,' also the name of a school subject in Japan."},
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
export default UNIT_30;
