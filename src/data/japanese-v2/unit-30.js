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
   example:"A: 大学(だいがく)で哲学(てつがく)を専攻(せんこう)しました。\nB: どの哲学者(てつがくしゃ)が一番(いちばん)好(す)きですか？\nA: どのような方法(ほうほう)がありますか？\nB: いくつかの選択肢(せんたくし)があります。一番(いちばん)効果的(こうかてき)なのは実践(じっせん)です。\nA: 実践(じっせん)というのは、具体的(ぐたいてき)に何(なに)をすればいいですか？\nB: 毎日(まいにち)少(すこ)しずつ取(と)り組(く)むことが重要(じゅうよう)です。",
   exampleSrc:"A: I majored in philosophy at university.\nB: Which philosopher do you like the most?\nA: What kinds of methods are there?\nB: There are several options. The most effective is practice.\nA: What specifically should we do in practice?\nB: It is important to work on it a little each day.",
   funFact:"哲学 was coined by Meiji-era scholar Nishi Amane in 1874 to translate 'philosophy.' He combined 哲 (wise/clear) and 学 (study). Before this, Japan had no single word for Western philosophy as a discipline. The character 哲 originally meant 'discerning wisdom' in classical Chinese."},

  {type:"teach", trg:"存在(そんざい)", src:"existence / being", pos:"noun", gender:null,
   note:"Kanji: 存在. 存在(そんざい)する = to exist.\n存在感(そんざいかん) = sense of presence/existence.",
   example:"A: 人生(じんせい)の意味(いみ)や存在(そんざい)の目的(もくてき)について考(かんが)えたことはありますか？\nB: はい、誰(だれ)でも一度(いちど)は考(かんが)えますよね。\nA: それはいつごろから始(はじ)まったのですか？\nB: 数年前(すうねんまえ)からですが、最近(さいきん)特(とく)に注目(ちゅうもく)されています。\nA: 今後(こんご)どうなると思(おも)いますか？\nB: さらに発展(はってん)すると予想(よそう)されています。",
   exampleSrc:"A: Have you ever thought about the meaning of life or the purpose of existence?\nB: Yes, everyone thinks about it at least once.\nA: When did that start?\nB: It started a few years ago, but it has been getting particular attention recently.\nA: What do you think will happen going forward?\nB: It is expected to develop further.",
   funFact:"存在 combines 存 (preserve/exist) and 在 (be located). In Japanese philosophy, 存在(そんざい) became central when Heidegger's 'Sein' (Being) was translated. The philosopher Nishida Kitaro (1870-1945) of the Kyoto School attempted to bridge Western and Eastern concepts of being through his idea of 'absolute nothingness.'"},

  {type:"teach", trg:"概念(がいねん)", src:"concept / notion", pos:"noun", gender:null,
   note:"Kanji: 概念. 概念的(がいねんてき) = conceptual.\n抽象的(ちゅうしょうてき)な概念(がいねん) = abstract concept.",
   example:"A: この概念(がいねん)は言葉(ことば)で説明(せつめい)するのが難(むずか)しい。\nB: 図(ず)を使(つか)って説明(せつめい)してみましょう。\nA: 何(なに)か問題(もんだい)はありませんでしたか？\nB: いくつか課題(かだい)がありましたが、解決(かいけつ)しました。\nA: どのように解決(かいけつ)したのですか？\nB: チーム全体(ぜんたい)で話(はな)し合(あ)って、最善(さいぜん)の方法(ほうほう)を見(み)つけました。",
   exampleSrc:"A: This concept is difficult to explain in words.\nB: Let us try explaining it with a diagram.\nA: Were there any problems?\nB: There were some issues, but we resolved them.\nA: How did you resolve them?\nB: We discussed it as a whole team and found the best method.",
   funFact:"概念 uses 概 (approximate/general) and 念 (thought/idea). The word entered Japanese through the translation of Western philosophical texts in the Meiji era. Many abstract terms in modern Japanese were created during this period of intense intellectual exchange between Japan and Europe."},

  {type:"mc", q:"存在(そんざい)する means:", opts:["to exist","to disappear","to think","to believe"], ans:"to exist",
   hint:"This verb form adds する to the noun meaning 'existence' or 'being.'"},

  {type:"teach", trg:"論理(ろんり)", src:"logic / reasoning", pos:"noun", gender:null,
   note:"Kanji: 論理. 論理的(ろんりてき) = logical.\n論理学(ろんりがく) = formal logic (as a discipline).",
   example:"A: その主張(しゅちょう)には論理的(ろんりてき)な問題(もんだい)があります。\nB: どの点(てん)が問題(もんだい)ですか？\nA: その点(てん)について、もう少(すこ)し説明(せつめい)していただけますか？\nB: もちろんです。重要(じゅうよう)なのは準備(じゅんび)と計画(けいかく)です。\nA: 準備(じゅんび)にはどのくらい時間(じかん)がかかりますか？\nB: 通常(つうじょう)、一週間(いっしゅうかん)から二週間(にしゅうかん)程度(ていど)です。",
   exampleSrc:"A: There is a logical problem with that argument.\nB: Which point is the problem?\nA: Could you explain that point a bit more?\nB: Of course. What is important is preparation and planning.\nA: How long does preparation take?\nB: Usually about one to two weeks.",
   funFact:"論理 combines 論 (argument/discussion) and 理 (principle/reason). Japanese academic writing places enormous emphasis on 論理的(ろんりてき) (logical) structure. The word 理屈(りくつ) also means 'logic' but in casual speech often carries a negative nuance: 理屈(りくつ)っぽい means 'overly argumentative.'"},

  {type:"teach", trg:"主観(しゅかん)", src:"subjectivity / subjective view", pos:"noun", gender:null,
   note:"Kanji: 主観. 主観的(しゅかんてき) = subjective.\nOpposite of 客観(きゃっかん) (objective).",
   example:"A: それは主観的(しゅかんてき)な意見(いけん)ではないですか？\nB: 確(たし)かに、データで証明(しょうめい)する必要(ひつよう)があります。\nA: それは素晴(すば)らしい結果(けっか)ですね。\nB: ありがとうございます。チーム全員(ぜんいん)の努力(どりょく)のおかげです。\nA: 今後(こんご)の目標(もくひょう)は何(なん)ですか？\nB: さらに品質(ひんしつ)を向上(こうじょう)させることです。",
   exampleSrc:"A: Isn't that a subjective opinion?\nB: True, we need to prove it with data.\nA: That is an excellent result.\nB: Thank you. It is thanks to the effort of the whole team.\nA: What are the future goals?\nB: To further improve quality.",
   funFact:"主観 uses 主 (master/main) and 観 (view/observe). The 'master's view' is subjective because it comes from one person's perspective. This term was another Meiji-era coinage, created to translate the Western philosophical distinction between subjective and objective knowledge."},

  {type:"teach", trg:"客観(きゃっかん)", src:"objectivity / objective view", pos:"noun", gender:null,
   note:"Kanji: 客観. 客観的(きゃっかんてき) = objective.\n客観的(きゃっかんてき)な事実(じじつ) = objective fact.",
   example:"A: 客観的(きゃっかんてき)なデータに基(もと)づいて判断(はんだん)しましょう。\nB: 賛成(さんせい)です。感情(かんじょう)ではなく事実(じじつ)で考(かんが)えましょう。\nA: 他(ほか)に何(なに)か気(き)をつけることはありますか？\nB: はい、期限(きげん)を守(まも)ることが一番(いちばん)大切(たいせつ)です。\nA: 期限(きげん)に間(ま)に合(あ)わない場合(ばあい)はどうしますか？\nB: 早(はや)めに上司(じょうし)に相談(そうだん)して、調整(ちょうせい)をお願(ねが)いします。",
   exampleSrc:"A: Let us make judgments based on objective data.\nB: I agree. Let us think with facts, not emotions.\nA: Is there anything else to be careful about?\nB: Yes, meeting deadlines is the most important thing.\nA: What do you do if you cannot meet the deadline?\nB: Consult your supervisor early and ask for an adjustment.",
   funFact:"客観 uses 客 (guest/visitor) and 観 (view). The 'guest's view' is objective because a visitor sees things from the outside without personal attachment. Together, 主観(しゅかん) and 客観(きゃっかん) form a pair that appears constantly in Japanese academic essays, news analysis, and formal debates."},

  {type:"fb", s:"それは主観的(しゅかんてき)な{1}ではないですか？\n(Isn't that a subjective opinion?)", a:"意見(いけん)", opts:["意見(いけん)","事実(じじつ)","論理(ろんり)","感情(かんじょう)"], sSrc:"Isn't that a subjective opinion?",
   hint:"A personal view or judgment about something, often contrasted with facts."},

  {type:"teach", trg:"本質(ほんしつ)", src:"essence / true nature", pos:"noun", gender:null,
   note:"Kanji: 本質. 本質的(ほんしつてき) = essential / fundamental.\n問題(もんだい)の本質(ほんしつ) = the essence of the problem.",
   example:"A: この問題(もんだい)の本質(ほんしつ)は何(なん)だと思(おも)いますか？\nB: コミュニケーション不足(ぶそく)だと思(おも)います。\nA: その件(けん)について進捗(しんちょく)はありますか？\nB: はい、順調(じゅんちょう)に進(すす)んでいます。\nA: 完了(かんりょう)の見込(みこ)みはいつごろですか？\nB: 来月(らいげつ)の初(はじ)めには完了(かんりょう)できる予定(よてい)です。",
   exampleSrc:"A: What do you think is the essence of this problem?\nB: I think it is a lack of communication.\nA: Is there any progress on that matter?\nB: Yes, it is progressing smoothly.\nA: When is it expected to be completed?\nB: It is scheduled to be completed by the beginning of next month.",
   funFact:"本質 combines 本 (root/origin) and 質 (quality/nature). In Japanese philosophical discourse, searching for the 本質(ほんしつ) of things echoes both Western essentialism and the Buddhist concept of 空 (ku, emptiness), which questions whether things even have a fixed essence."},

  {type:"teach", trg:"価値(かち)", src:"value / worth", pos:"noun", gender:null,
   note:"Kanji: 価値. 価値観(かちかん) = values / value system.\n価値(かち)がある = to have value.",
   example:"A: 人生(じんせい)で一番(いちばん)価値(かち)があるものは何(なん)ですか？\nB: 私(わたし)は健康(けんこう)だと思(おも)います。\nA: 以前(いぜん)と比(くら)べてどう変(か)わりましたか？\nB: かなり改善(かいぜん)されました。効率(こうりつ)が上(あ)がりました。\nA: その改善(かいぜん)の要因(よういん)は何(なん)ですか？\nB: 新(あたら)しいシステムの導入(どうにゅう)が大(おお)きかったです。",
   exampleSrc:"A: What is the most valuable thing in life?\nB: I think it is health.\nA: How has it changed compared to before?\nB: It has improved considerably. Efficiency has increased.\nA: What was the cause of that improvement?\nB: The introduction of the new system was a big factor.",
   funFact:"価値 uses 価 (price/value) and 値 (value/worth). Both characters relate to value, making this a reinforced compound. 価値観(かちかん) (value system) is a key concept in Japanese sociology. The postwar shift in 価値観(かちかん) from collective duty to individual fulfillment is one of the defining cultural changes in modern Japan."},

  {type:"mc", q:"客観的(きゃっかんてき) means:", opts:["subjective","objective","emotional","philosophical"], ans:"objective",
   hint:"This adjective describes a viewpoint that comes from outside, like a guest observing without personal attachment."},

  {type:"teach", trg:"絶対(ぜったい)", src:"absolute / unconditional", pos:"noun", gender:null,
   note:"Kanji: 絶対. 絶対(ぜったい)に = absolutely / definitely.\nOpposite: 相対(そうたい) (relative).",
   example:"A: 絶対(ぜったい)に正(ただ)しい答(こた)えはあるのでしょうか？\nB: 哲学(てつがく)ではそれ自体(じたい)が疑問(ぎもん)です。\nA: ご意見(いけん)をお聞(き)かせいただけますか？\nB: 私(わたし)の考(かんが)えでは、もう少(すこ)し検討(けんとう)が必要(ひつよう)だと思(おも)います。\nA: どの点(てん)を検討(けんとう)すべきでしょうか？\nB: 予算(よさん)と人員(じんいん)の面(めん)をもう一度(いちど)見直(みなお)す必要(ひつよう)があります。",
   exampleSrc:"A: Is there an absolutely correct answer?\nB: In philosophy, that itself is a question.\nA: Could you share your opinion?\nB: In my opinion, I think a bit more consideration is needed.\nA: Which points should be considered?\nB: We need to review the budget and staffing aspects once more.",
   funFact:"絶対 uses 絶 (sever/extreme) and 対 (versus/pair). It literally means 'cutting off the pairing,' meaning something that stands alone without comparison. In everyday Japanese, 絶対(ぜったい)に is very common: 絶対(ぜったい)に行(い)く (I will definitely go). The philosophical and casual uses coexist."},

  {type:"teach", trg:"相対(そうたい)", src:"relative / comparative", pos:"noun", gender:null,
   note:"Kanji: 相対. 相対的(そうたいてき) = relative.\n相対性理論(そうたいせいりろん) = theory of relativity.",
   example:"A: 幸(しあわ)せは相対的(そうたいてき)なものだと思(おも)います。\nB: 確(たし)かに、人(ひと)によって違(ちが)いますね。\nA: 何(なに)か良(よ)い方法(ほうほう)はありませんか？\nB: 一(ひと)つ提案(ていあん)があります。段階的(だんかいてき)に進(すす)めてはどうでしょうか。\nA: 段階的(だんかいてき)に、というのはどういうことですか？\nB: まず小規模(しょうきぼ)で試(ため)してから、徐々(じょじょ)に拡大(かくだい)するということです。",
   exampleSrc:"A: I think happiness is something relative.\nB: True, it differs from person to person.\nA: Is there a good method?\nB: I have one suggestion. How about proceeding step by step?\nA: What do you mean by step by step?\nB: It means trying it on a small scale first, then gradually expanding.",
   funFact:"相対 uses 相 (mutual) and 対 (face/versus). Things that are 相対的(そうたいてき) exist only in relation to something else. Einstein's theory of relativity is 相対性理論(そうたいせいりろん) in Japanese. The 絶対(ぜったい)/相対(そうたい) pair is fundamental in both physics and philosophy."},

  {type:"fb", s:"人生(じんせい)で一番(いちばん){1}があるものは何(なん)ですか？\n(What is the most valuable thing in life?)", a:"価値(かち)", opts:["価値(かち)","意味(いみ)","論理(ろんり)","概念(がいねん)"], sSrc:"What is the most valuable thing in life?",
   hint:"The noun meaning 'value' or 'worth,' written with the kanji for price and worth."},

  {type:"teach", trg:"意識(いしき)", src:"consciousness / awareness", pos:"noun", gender:null,
   note:"Kanji: 意識. 意識(いしき)する = to be conscious of / to be aware of.\n意識(いしき)が高(たか)い = highly aware.",
   example:"A: 環境問題(かんきょうもんだい)に対(たい)する意識(いしき)が高(たか)まっています。\nB: 若(わか)い世代(せだい)が特(とく)に関心(かんしん)を持(も)っていますね。\nA: この問題(もんだい)をどう思(おも)いますか？\nB: 複雑(ふくざつ)な問題(もんだい)ですが、解決策(かいけつさく)はあると思(おも)います。\nA: どのような解決策(かいけつさく)を考(かんが)えていますか？\nB: 関係者(かんけいしゃ)全員(ぜんいん)で話(はな)し合(あ)いの場(ば)を設(もう)けることが第一歩(だいいっぽ)です。",
   exampleSrc:"A: Awareness of environmental issues is increasing.\nB: The younger generation is especially interested.\nA: What do you think about this issue?\nB: It is a complex issue, but I think there are solutions.\nA: What kind of solutions are you thinking of?\nB: The first step is to set up a discussion forum for all stakeholders.",
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
   example:"A: あなたの主張(しゅちょう)の根拠(こんきょ)は何(なん)ですか？\nB: 最近(さいきん)の調査結果(ちょうさけっか)に基(もと)づいています。\nA: 最近(さいきん)の動向(どうこう)はいかがですか？\nB: 全体的(ぜんたいてき)には好調(こうちょう)ですが、一部(いちぶ)課題(かだい)もあります。\nA: どのような課題(かだい)がありますか？\nB: 人材(じんざい)の確保(かくほ)が最(もっと)も大(おお)きな課題(かだい)です。",
   exampleSrc:"A: What is the basis for your argument?\nB: It is based on recent survey results.\nA: How are the recent trends?\nB: Overall things are going well, but there are some issues.\nA: What kinds of issues are there?\nB: Securing human resources is the biggest challenge.",
   funFact:"主張 uses 主 (master/main) and 張 (stretch/extend). To make a 主張(しゅちょう) is to 'stretch out your main point.' In Japanese academic writing, clearly stating your 主張(しゅちょう) early in the essay is considered good form, similar to the Western thesis statement."},

  {type:"teach", trg:"反論(はんろん)", src:"counterargument / objection", pos:"noun", gender:null,
   note:"Kanji: 反論. 反論(はんろん)する = to counter / to object.\n反論(はんろん)の余地(よち) = room for objection.",
   example:"A: その意見(いけん)に反論(はんろん)があります。\nB: どうぞ、お聞(き)かせください。\nA: それは興味深(きょうみぶか)いですね。\nB: ええ、日本(にほん)ならではの特徴(とくちょう)だと思(おも)います。\nA: 海外(かいがい)ではどうなのでしょうか？\nB: 国(くに)によって異(こと)なりますが、共通(きょうつう)する部分(ぶぶん)もあります。",
   exampleSrc:"A: I have an objection to that opinion.\nB: Please, let me hear it.\nA: That is interesting.\nB: Yes, I think it is a characteristic unique to Japan.\nA: I wonder how it is overseas?\nB: It differs by country, but there are also common aspects.",
   funFact:"反論 combines 反 (anti/opposite) and 論 (argument). In Japanese debate culture, direct 反論(はんろん) can feel confrontational, so speakers often soften it: 'ちょっと違(ちが)う意見(いけん)があるのですが' (I have a slightly different opinion) is preferred over a blunt 反論(はんろん)します. This indirectness is deeply cultural."},

  {type:"teach", trg:"前提(ぜんてい)", src:"premise / precondition", pos:"noun", gender:null,
   note:"Kanji: 前提. 前提(ぜんてい)とする = to assume / to take as a premise.\n前提条件(ぜんていじょうけん) = prerequisite.",
   example:"A: その論理(ろんり)は間違(まちが)った前提(ぜんてい)に基(もと)づいています。\nB: では、正(ただ)しい前提(ぜんてい)は何(なん)でしょうか？\nA: その経験(けいけん)から何(なに)を学(まな)びましたか？\nB: 事前(じぜん)の準備(じゅんび)がいかに重要(じゅうよう)かを学(まな)びました。\nA: 具体的(ぐたいてき)にどんな準備(じゅんび)をすべきですか？\nB: まず情報収集(じょうほうしゅうしゅう)をして、それから計画(けいかく)を練(ね)ることが大事(だいじ)です。",
   exampleSrc:"A: That reasoning is based on a wrong premise.\nB: Then, what is the correct premise?\nA: What did you learn from that experience?\nB: I learned how important advance preparation is.\nA: What kind of preparation should be done specifically?\nB: First, gather information, then it is important to develop a plan.",
   funFact:"前提 uses 前 (before/front) and 提 (present/put forward). A premise is what you 'put forward before' the argument. In formal Japanese logic, 前提(ぜんてい) maps directly to the logical term 'premise' in syllogistic reasoning: 大前提(だいぜんてい) (major premise) and 小前提(しょうぜんてい) (minor premise)."},

  {type:"mc", q:"反論(はんろん)する means:", opts:["to make a counterargument","to agree completely","to summarize","to give up"], ans:"to make a counterargument",
   hint:"This verb combines the kanji for 'anti/opposite' with 'argument.'"},

  {type:"teach", trg:"結論(けつろん)", src:"conclusion", pos:"noun", gender:null,
   note:"Kanji: 結論. 結論(けつろん)を出(だ)す = to reach a conclusion.\n結論(けつろん)として = in conclusion.",
   example:"A: 結論(けつろん)として、教育(きょういく)への投資(とうし)が最(もっと)も必要(ひつよう)です。\nB: 私(わたし)も同(どう)意見(いけん)です。\nA: 今後(こんご)の展望(てんぼう)についてお聞(き)かせください。\nB: 今後(こんご)はさらに国際化(こくさいか)が進(すす)むと思(おも)います。\nA: それに対(たい)してどのような対策(たいさく)が必要(ひつよう)ですか？\nB: 語学力(ごがくりょく)の向上(こうじょう)と異文化理解(いぶんかりかい)が不可欠(ふかけつ)です。",
   exampleSrc:"A: In conclusion, investment in education is most necessary.\nB: I share the same opinion.\nA: Please tell me about future prospects.\nB: I think internationalization will progress further going forward.\nA: What measures are needed for that?\nB: Improving language skills and cross-cultural understanding are essential.",
   funFact:"結論 uses 結 (tie/bind) and 論 (argument). A conclusion 'ties up' the argument. The phrase 結論(けつろん)からいうと (speaking from the conclusion) is common in Japanese business presentations, where stating the conclusion first is valued for clarity. This 'conclusion-first' style is called 結論(けつろん)ファースト."},

  {type:"teach", trg:"根拠(こんきょ)", src:"basis / grounds / evidence", pos:"noun", gender:null,
   note:"Kanji: 根拠. 根拠(こんきょ)のある = well-grounded.\n科学的根拠(かがくてきこんきょ) = scientific evidence.",
   example:"A: その主張(しゅちょう)には科学的(かがくてき)な根拠(こんきょ)がありますか？\nB: はい、論文(ろんぶん)を参照(さんしょう)してください。\nA: それは予想外(よそうがい)の結果(けっか)ですね。\nB: はい、私(わたし)も驚(おどろ)きました。原因(げんいん)を調(しら)べています。\nA: いつごろ原因(げんいん)が分(わ)かりそうですか？\nB: 今週中(こんしゅうちゅう)には分析(ぶんせき)結果(けっか)が出(で)る予定(よてい)です。",
   exampleSrc:"A: Is there scientific evidence for that claim?\nB: Yes, please refer to the research paper.\nA: That is an unexpected result.\nB: Yes, I was surprised too. We are investigating the cause.\nA: When do you think you will know the cause?\nB: The analysis results are expected to come out by the end of this week.",
   funFact:"根拠 uses 根 (root) and 拠 (base/depend on). Evidence is the 'root base' of an argument. In Japanese legal and academic contexts, 根拠(こんきょ) carries strong weight. The phrase 根拠(こんきょ)のない噂(うわさ) (baseless rumor) is a common way to dismiss unsubstantiated claims."},

  {type:"teach", trg:"議論(ぎろん)", src:"discussion / debate / argument", pos:"noun", gender:null,
   note:"Kanji: 議論. 議論(ぎろん)する = to debate / to discuss.\n議論(ぎろん)が分(わ)かれる = opinions are divided.",
   example:"A: このテーマについて議論(ぎろん)しましょう。\nB: 賛成派(さんせいは)と反対派(はんたいは)に分(わ)かれて議論(ぎろん)しませんか？\nA: その分野(ぶんや)についてどのくらいご存(ぞん)じですか？\nB: 専門(せんもん)ではありませんが、基本的(きほんてき)な知識(ちしき)はあります。\nA: もっと詳(くわ)しく知(し)りたい場合(ばあい)は、どうすればいいですか？\nB: 専門家(せんもんか)に相談(そうだん)するか、関連(かんれん)の書籍(しょせき)を読(よ)むことをお勧(すす)めします。",
   exampleSrc:"A: Let us discuss this topic.\nB: Shall we split into groups for and against?\nA: How much do you know about that field?\nB: It is not my specialty, but I have basic knowledge.\nA: If I want to know more in detail, what should I do?\nB: I recommend consulting a specialist or reading related books.",
   funFact:"議論 combines 議 (deliberate) and 論 (argument). Unlike 反論(はんろん) (counterargument), 議論(ぎろん) is neutral and can be collaborative. The Diet (国会(こっかい)) is a place of 議論(ぎろん). In casual speech, saying 議論(ぎろん)になった can mean a discussion got heated without implying anyone was wrong."},

  {type:"fb", s:"その主張(しゅちょう)には科学的(かがくてき)な{1}がありますか？\n(Is there scientific evidence for that claim?)", a:"根拠(こんきょ)", opts:["根拠(こんきょ)","結論(けつろん)","前提(ぜんてい)","議論(ぎろん)"], sSrc:"Is there scientific evidence for that claim?",
   hint:"The noun meaning 'basis' or 'grounds,' the root foundation of an argument."},

  {type:"teach", trg:"定義(ていぎ)", src:"definition", pos:"noun", gender:null,
   note:"Kanji: 定義. 定義(ていぎ)する = to define.\n定義(ていぎ)が曖昧(あいまい) = the definition is vague.",
   example:"A: まず、自由(じゆう)の定義(ていぎ)を確認(かくにん)しましょう。\nB: 人(ひと)によって定義(ていぎ)が違(ちが)いますね。\nA: どのような影響(えいきょう)がありましたか？\nB: 社会全体(しゃかいぜんたい)に大(おお)きな影響(えいきょう)を与(あた)えました。\nA: 良(よ)い影響(えいきょう)ですか、悪(わる)い影響(えいきょう)ですか？\nB: 両方(りょうほう)あります。メリットもデメリットもあります。",
   exampleSrc:"A: First, let us confirm the definition of freedom.\nB: The definition differs depending on the person.\nA: What kind of impact was there?\nB: It had a big impact on society as a whole.\nA: A good impact or a bad impact?\nB: Both. There are both merits and demerits.",
   funFact:"定義 uses 定 (fix/determine) and 義 (meaning/righteousness). Defining terms is the first step in Japanese academic papers. The phrase 定義(ていぎ)づけ (defining/categorization) appears frequently in research methodology sections. Clear 定義(ていぎ) prevents misunderstanding in both philosophy and law."},

  {type:"teach", trg:"道徳(どうとく)", src:"morality / ethics", pos:"noun", gender:null,
   note:"Kanji: 道徳. 道徳的(どうとくてき) = moral / ethical.\n道徳教育(どうとくきょういく) = moral education.",
   example:"A: AIの開発(かいはつ)には道徳的(どうとくてき)な問題(もんだい)が伴(ともな)います。\nB: 例(たと)えば、プライバシーの問題(もんだい)がありますね。\nA: 具体的(ぐたいてき)にはどういうことですか？\nB: つまり、状況(じょうきょう)に応(おう)じて対応(たいおう)を変(か)える必要(ひつよう)があるということです。\nA: なるほど。それは確(たし)かにそうですね。\nB: ええ、柔軟(じゅうなん)な対応(たいおう)が大切(たいせつ)だと思(おも)います。",
   exampleSrc:"A: The development of AI involves ethical issues.\nB: For example, there are privacy concerns.\nA: What do you mean specifically?\nB: I mean we need to change our approach depending on the situation.\nA: I see. That is certainly true.\nB: Yes, I think flexible response is important.",
   funFact:"道徳 combines 道 (way/path) and 徳 (virtue). Japanese schools have a dedicated 道徳(どうとく) (moral education) class from elementary through middle school, covering topics like respect, responsibility, and community. This subject became an official graded course in 2018, sparking debate about whether morality can be assessed."},

  {type:"mc", q:"定義(ていぎ)が曖昧(あいまい) means:", opts:["the definition is clear","the definition is vague","the definition is correct","the definition is new"], ans:"the definition is vague",
   hint:"曖昧(あいまい) describes something that is unclear, ambiguous, or not precisely determined."},

  {type:"teach", trg:"真理(しんり)", src:"truth / psychological truth", pos:"noun", gender:null,
   note:"Kanji: 真理. 普遍(ふへん)の真理(しんり) = universal truth.\nAlso 心理 (psychology, different kanji).",
   example:"A: 科学(かがく)は真理(しんり)を探(さが)す学問(がくもん)です。\nB: でも、真理(しんり)は一(ひと)つではないかもしれません。\nA: それについてもう少(すこ)し詳(くわ)しく教(おし)えてください。\nB: 例(たと)えば、最近(さいきん)の事例(じれい)を見(み)ると、変化(へんか)が激(はげ)しいです。\nA: そうですか。どう対処(たいしょ)すればいいでしょうか。\nB: まず現状(げんじょう)を把握(はあく)してから、計画(けいかく)を立(た)てましょう。",
   exampleSrc:"A: Science is the study of searching for truth.\nB: But truth might not be just one thing.\nA: Please tell me more about that.\nB: For example, looking at recent cases, the changes are dramatic.\nA: Is that so? How should we handle it?\nB: Let's first grasp the current situation, then make a plan.",
   funFact:"真理 uses 真 (true) and 理 (principle). Be careful not to confuse it with 心理 (しんり, psychology), which uses 心 (heart) instead of 真 (true). Both are pronounced identically. Context determines which is meant. In philosophical texts, 真理(しんり) explores whether absolute truth exists."},

  {type:"teach", trg:"抽象的(ちゅうしょうてき)", src:"abstract", pos:"adj", gender:null,
   note:"Kanji: 抽象的. Opposite: 具体的(ぐたいてき) (concrete).\n抽象的(ちゅうしょうてき)な考(かんが)え = abstract thinking.",
   example:"A: もう少(すこ)し具体的(ぐたいてき)に説明(せつめい)してもらえますか？\nB: すみません、抽象的(ちゅうしょうてき)すぎましたね。\nA: どのような方法(ほうほう)がありますか？\nB: いくつかの選択肢(せんたくし)があります。一番(いちばん)効果的(こうかてき)なのは実践(じっせん)です。\nA: 実践(じっせん)というのは、具体的(ぐたいてき)に何(なに)をすればいいですか？\nB: 毎日(まいにち)少(すこ)しずつ取(と)り組(く)むことが重要(じゅうよう)です。",
   exampleSrc:"A: Could you explain a bit more concretely?\nB: Sorry, I was too abstract.\nA: What kinds of methods are there?\nB: There are several options. The most effective is practice.\nA: What specifically should we do in practice?\nB: It is important to work on it a little each day.",
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
