// Japanese V2 Unit 32. 医学(いがく) (Medicine & Health Science)
import BATCH11_L1 from './_batch11_u32_L01.js';
import BATCH10_L1 from './_batch10_u32_L01.js';
import BATCH9_L1 from './_batch9_u32_L01.js';
import BATCH7_L1 from './_batch7_u32_L01.js';
import BATCH8_L1 from './_batch8_u32_L01.js';
import BATCH6_L1 from './_batch6_u32_L01.js';
import BATCH5_L02 from './_batch5_u32_L02.js';
import BATCH5_L01 from './_batch5_u32_L01.js';
import BATCH2_L02 from './_batch2_u32_L02.js';
import BATCH2_L01 from './_batch2_u32_L01.js';
// Level: B2.4. JLPT N2/N1 aligned.
// 診察, 症状, 手術, 薬, 健康診断, 予防, 治療.

const UNIT_32 = {
  n:32, lang:"ja", srcLang:"en", track:"v2",
  title:"医学(いがく)", sub:"Medicine & Health Science",
  icon:"🏥", level:"B2.4", color:"#7B5EE8",
  lessons:[

// ═══ L1: Medical Vocabulary & Healthcare ═══
{id:"jav2_u32l1", title:"Medical Vocabulary", icon:"🩺", xp:15, board:true, steps:[
  {type:"intro", title:"Medical Vocabulary & Healthcare",
   desc:"Japan's healthcare system is one of the most advanced in the world, with universal coverage since 1961. Understanding medical vocabulary like 診察(しんさつ) (examination), 症状(しょうじょう) (symptoms), and 治療(ちりょう) (treatment) is practical for daily life in Japan and essential for JLPT N1 reading passages about health and science.",
   goals:["Use core medical vocabulary accurately","Describe symptoms and treatments","Understand Japan's healthcare system vocabulary"]},

  {type:"teach", trg:"医学(いがく)", src:"medical science / medicine (as a field)", pos:"noun", gender:null,
   note:"Kanji: 医学. 医学部(いがくぶ) = medical school/department.\n医学博士(いがくはかせ) = doctor of medicine (PhD).",
   example:"A: 医学(いがく)の進歩(しんぽ)は目覚(めざ)ましいものがあります。\nB: 特(とく)に遺伝子治療(いでんしちりょう)の分野(ぶんや)が注目(ちゅうもく)されていますね。\nA: 具体的(ぐたいてき)にはどういうことですか？\nB: つまり、状況(じょうきょう)に応(おう)じて対応(たいおう)を変(か)える必要(ひつよう)があるということです。\nA: なるほど。それは確(たし)かにそうですね。\nB: ええ、柔軟(じゅうなん)な対応(たいおう)が大切(たいせつ)だと思(おも)います。",
   exampleSrc:"A: The progress of medical science is remarkable.\nB: The field of gene therapy is especially attracting attention.\nA: What do you mean specifically?\nB: I mean we need to change our approach depending on the situation.\nA: I see. That is certainly true.\nB: Yes, I think flexible response is important.",
   funFact:"医学 combines 医 (medicine/doctor) and 学 (study). The character 医 originally depicted an arrow (矢) being removed from a wound, representing surgical treatment. Japan's medical education system requires 6 years of university, followed by 2 years of mandatory residency, modeled on a mix of German and American systems."},

  {type:"teach", trg:"診察(しんさつ)", src:"medical examination / consultation", pos:"noun", gender:null,
   note:"Kanji: 診察. 診察(しんさつ)する = to examine (a patient).\n診察室(しんさつしつ) = examination room.",
   example:"A: 予約(よやく)なしで診察(しんさつ)してもらえますか？\nB: 急患(きゅうかん)の場合(ばあい)は応急外来(おうきゅうがいらい)へどうぞ。\nA: それについてもう少(すこ)し詳(くわ)しく教(おし)えてください。\nB: 例(たと)えば、最近(さいきん)の事例(じれい)を見(み)ると、変化(へんか)が激(はげ)しいです。\nA: そうですか。どう対処(たいしょ)すればいいでしょうか。\nB: まず現状(げんじょう)を把握(はあく)してから、計画(けいかく)を立(た)てましょう。",
   exampleSrc:"A: Can I get an examination without an appointment?\nB: For urgent cases, please go to the emergency outpatient department.\nA: Please tell me more about that.\nB: For example, looking at recent cases, the changes are dramatic.\nA: Is that so? How should we handle it?\nB: Let's first grasp the current situation, then make a plan.",
   funFact:"診察 uses 診 (diagnose/examine) and 察 (observe/investigate). Japanese clinics typically operate on a first-come-first-served basis, and wait times can be long. The phrase 三時間待(さんじかんま)ち三分診察(さんぷんしんさつ) (3 hours waiting, 3 minutes examination) is a well-known complaint about Japanese healthcare, though the quality of care is generally high."},

  {type:"teach", trg:"症状(しょうじょう)", src:"symptom(s)", pos:"noun", gender:null,
   note:"Kanji: 症状. 症状(しょうじょう)が出(で)る = symptoms appear.\n症状(しょうじょう)が改善(かいぜん)する = symptoms improve.",
   example:"A: どのような症状(しょうじょう)がありますか？\nB: 頭(あたま)が痛(いた)くて、熱(ねつ)もあります。\nA: どのような方法(ほうほう)がありますか？\nB: いくつかの選択肢(せんたくし)があります。一番(いちばん)効果的(こうかてき)なのは実践(じっせん)です。\nA: 実践(じっせん)というのは、具体的(ぐたいてき)に何(なに)をすればいいですか？\nB: 毎日(まいにち)少(すこ)しずつ取(と)り組(く)むことが重要(じゅうよう)です。",
   exampleSrc:"A: What kind of symptoms do you have?\nB: I have a headache and a fever.\nA: What kinds of methods are there?\nB: There are several options. The most effective is practice.\nA: What specifically should we do in practice?\nB: It is important to work on it a little each day.",
   funFact:"症状 combines 症 (illness/disease) and 状 (condition/state). In Japanese medical consultations, describing your 症状(しょうじょう) clearly is important because doctors rely heavily on patient reporting. The phrase 自覚症状(じかくしょうじょう) (self-perceived symptoms) vs. 他覚症状(たかくしょうじょう) (observable symptoms) is a key distinction in diagnosis."},

  {type:"mc", q:"診察室(しんさつしつ) means:", opts:["examination room","waiting room","operating room","pharmacy"], ans:"examination room",
   hint:"室(しつ) means 'r...,' combined with the word for medical e.../consultation."},

  {type:"teach", trg:"治療(ちりょう)", src:"treatment / therapy / cure", pos:"noun", gender:null,
   note:"Kanji: 治療. 治療(ちりょう)する = to treat (medically).\n治療法(ちりょうほう) = treatment method/therapy.",
   example:"A: 新(あたら)しい治療法(ちりょうほう)が開発(かいはつ)されました。\nB: 患者(かんじゃ)さんにとって希望(きぼう)ですね。\nA: それはいつごろから始(はじ)まったのですか？\nB: 数年前(すうねんまえ)からですが、最近(さいきん)特(とく)に注目(ちゅうもく)されています。\nA: 今後(こんご)どうなると思(おも)いますか？\nB: さらに発展(はってん)すると予想(よそう)されています。",
   exampleSrc:"A: A new treatment method has been developed.\nB: That is hope for patients.\nA: When did that start?\nB: It started a few years ago, but it has been getting particular attention recently.\nA: What do you think will happen going forward?\nB: It is expected to develop further.",
   funFact:"治療 uses 治 (heal/govern) and 療 (heal/treat). Both characters relate to healing, reinforcing the meaning. Interestingly, 治 also means 'to govern,' reflecting an ancient Chinese belief that governing a nation and healing the body follow similar principles. The word 政治(せいじ) (politics) also uses this same 治."},

  {type:"teach", trg:"手術(しゅじゅつ)", src:"surgery / operation", pos:"noun", gender:null,
   note:"Kanji: 手術. 手術(しゅじゅつ)する = to perform surgery.\n手術室(しゅじゅつしつ) = operating room.",
   example:"A: 手術(しゅじゅつ)は成功(せいこう)しました。\nB: よかった、安心(あんしん)しました。\nA: 何(なに)か問題(もんだい)はありませんでしたか？\nB: いくつか課題(かだい)がありましたが、解決(かいけつ)しました。\nA: どのように解決(かいけつ)したのですか？\nB: チーム全体(ぜんたい)で話(はな)し合(あ)って、最善(さいぜん)の方法(ほうほう)を見(み)つけました。",
   exampleSrc:"A: The surgery was successful.\nB: Good, I am relieved.\nA: Were there any problems?\nB: There were some issues, but we resolved them.\nA: How did you resolve them?\nB: We discussed it as a whole team and found the best method.",
   funFact:"手術 combines 手 (hand) and 術 (technique/art). Surgery is literally 'hand technique.' Japan is a leader in robotic surgery, with the da Vinci system widely used. Japanese surgeons are known for meticulous precision, and the country pioneered several techniques in microsurgery and organ transplantation."},

  {type:"teach", trg:"薬(くすり)", src:"medicine / drug / medication", pos:"noun", gender:null,
   note:"Kanji: 薬. 薬(くすり)を飲(の)む = to take medicine.\n薬局(やっきょく) = pharmacy. 処方箋(しょほうせん) = prescription.",
   example:"A: この薬(くすり)を一日(いちにち)三回(さんかい)、食後(しょくご)に飲(の)んでください。\nB: 副作用(ふくさよう)はありますか？\nA: その点(てん)について、もう少(すこ)し説明(せつめい)していただけますか？\nB: もちろんです。重要(じゅうよう)なのは準備(じゅんび)と計画(けいかく)です。\nA: 準備(じゅんび)にはどのくらい時間(じかん)がかかりますか？\nB: 通常(つうじょう)、一週間(いっしゅうかん)から二週間(にしゅうかん)程度(ていど)です。",
   exampleSrc:"A: Please take this medicine three times a day, after meals.\nB: Are there any side effects?\nA: Could you explain that point a bit more?\nB: Of course. What is important is preparation and planning.\nA: How long does preparation take?\nB: Usually about one to two weeks.",
   funFact:"The kanji 薬 has the grass radical (艹) on top, reflecting that traditional medicines came from plants. Japan has a dual system: Western medicine (西洋医学(せいよういがく)) and traditional Chinese medicine (漢方医学(かんぽういがく)). Many Japanese people use both. Kampo medicines are covered by national health insurance, making Japan unique among developed nations."},

  {type:"fb", s:"どのような{1}がありますか？\n(What kind of symptoms do you have?)", a:"症状(しょうじょう)", opts:["症状(しょうじょう)","治療(ちりょう)","手術(しゅじゅつ)","診察(しんさつ)"], sSrc:"What kind of symptoms do you have?",
   hint:"The noun meaning 'symptoms,' what a doctor asks about to understand your condition."},

  {type:"teach", trg:"予防(よぼう)", src:"prevention / precaution", pos:"noun", gender:null,
   note:"Kanji: 予防. 予防(よぼう)する = to prevent.\n予防接種(よぼうせっしゅ) = vaccination. 予防医学(よぼういがく) = preventive medicine.",
   example:"A: 病気(びょうき)の予防(よぼう)には運動(うんどう)と栄養(えいよう)が大切(たいせつ)です。\nB: 定期検診(ていきけんしん)も忘(わす)れないでください。\nA: それは素晴(すば)らしい結果(けっか)ですね。\nB: ありがとうございます。チーム全員(ぜんいん)の努力(どりょく)のおかげです。\nA: 今後(こんご)の目標(もくひょう)は何(なん)ですか？\nB: さらに品質(ひんしつ)を向上(こうじょう)させることです。",
   exampleSrc:"A: Exercise and nutrition are important for disease prevention.\nB: Please do not forget regular checkups either.\nA: That is an excellent result.\nB: Thank you. It is thanks to the effort of the whole team.\nA: What are the future goals?\nB: To further improve quality.",
   funFact:"予防 uses 予 (beforehand) and 防 (defend/prevent). Japan excels in 予防医学(よぼういがく) (preventive medicine). Annual health checkups (健康診断(けんこうしんだん)) are mandatory for employees, and municipalities offer free cancer screenings. This prevention-focused approach contributes to Japan having the highest life expectancy in the world."},

  {type:"teach", trg:"健康診断(けんこうしんだん)", src:"health checkup / medical examination", pos:"noun", gender:null,
   note:"Kanji: 健康診断. Required annually for all employees in Japan.\n人間(にんげん)ドック = comprehensive health screening.",
   example:"A: 会社(かいしゃ)の健康診断(けんこうしんだん)で異常(いじょう)が見(み)つかりました。\nB: すぐに専門医(せんもんい)に診察(しんさつ)してもらってください。\nA: 他(ほか)に何(なに)か気(き)をつけることはありますか？\nB: はい、期限(きげん)を守(まも)ることが一番(いちばん)大切(たいせつ)です。\nA: 期限(きげん)に間(ま)に合(あ)わない場合(ばあい)はどうしますか？\nB: 早(はや)めに上司(じょうし)に相談(そうだん)して、調整(ちょうせい)をお願(ねが)いします。",
   exampleSrc:"A: An abnormality was found in the company health checkup.\nB: Please see a specialist immediately.\nA: Is there anything else to be careful about?\nB: Yes, meeting deadlines is the most important thing.\nA: What do you do if you cannot meet the deadline?\nB: Consult your supervisor early and ask for an adjustment.",
   funFact:"健康診断 is a four-kanji compound: 健 (healthy), 康 (peace), 診 (examine), 断 (judge). Annual 健康診断(けんこうしんだん) is legally required for Japanese workers under the Industrial Safety and Health Act. The more thorough 人間(にんげん)ドック (human dock, from dry dock for ships) is a comprehensive multi-hour screening popular with health-conscious adults."},

  {type:"mc", q:"予防接種(よぼうせっしゅ) means:", opts:["blood test","vaccination","surgery","diagnosis"], ans:"vaccination",
   hint:"予防(よぼう) means 'prevention' and 接種(せっしゅ) means 'inoculation' or 'injection.'"},

  {type:"teach", trg:"副作用(ふくさよう)", src:"side effect(s)", pos:"noun", gender:null,
   note:"Kanji: 副作用. 副作用(ふくさよう)が出(で)る = side effects appear.\nUsed for medicines, treatments, and even policies.",
   example:"A: この薬(くすり)には副作用(ふくさよう)がありますか？\nB: まれにめまいや吐(は)き気(け)が出(で)ることがあります。\nA: その件(けん)について進捗(しんちょく)はありますか？\nB: はい、順調(じゅんちょう)に進(すす)んでいます。\nA: 完了(かんりょう)の見込(みこ)みはいつごろですか？\nB: 来月(らいげつ)の初(はじ)めには完了(かんりょう)できる予定(よてい)です。",
   exampleSrc:"A: Does this medicine have side effects?\nB: Rarely, dizziness or nausea may occur.\nA: Is there any progress on that matter?\nB: Yes, it is progressing smoothly.\nA: When is it expected to be completed?\nB: It is scheduled to be completed by the beginning of next month.",
   funFact:"副作用 breaks down as 副 (secondary/vice), 作 (make/produce), and 用 (use/effect). The 'secondary effect' of a medicine. Japanese pharmacists (薬剤師(やくざいし)) are legally required to explain 副作用(ふくさよう) when dispensing prescription drugs. The concept is also used metaphorically: economic policies can have 副作用(ふくさよう) on society."},

  {type:"match", pairs:[{trg:"診察(しんさつ)",src:"examination"},{trg:"治療(ちりょう)",src:"treatment"},{trg:"手術(しゅじゅつ)",src:"surgery"},{trg:"薬(くすり)",src:"medicine"}]},

  {type:"fb", s:"病気(びょうき)の{1}には運動(うんどう)と栄養(えいよう)が大切(たいせつ)です。\n(Exercise and nutrition are important for disease prevention.)", a:"予防(よぼう)", opts:["予防(よぼう)","治療(ちりょう)","診察(しんさつ)","手術(しゅじゅつ)"], sSrc:"Exercise and nutrition are important for disease prevention.",
   hint:"The noun meaning 'prevention,' acting before something bad happens."},

  {type:"match", pairs:[{trg:"予防(よぼう)",src:"prevention"},{trg:"副作用(ふくさよう)",src:"side effect"},{trg:"健康診断(けんこうしんだん)",src:"health checkup"},{trg:"症状(しょうじょう)",src:"symptoms"}]},

  {type:"mc", q:"治療(ちりょう)する means:", opts:["to diagnose","to prescribe","to treat medically","to operate"], ans:"to treat medically",
   hint:"The verb form of the noun that uses two kanji both meaning 'to heal.'"},
]},

// ═══ L2: Research & Scientific Terminology ═══
{id:"jav2_u32l2", title:"Science & Research", icon:"🔬", xp:15, board:true, steps:[
  {type:"intro", title:"Research & Scientific Terminology",
   desc:"Scientific research vocabulary is crucial for reading Japanese academic texts and news about medical breakthroughs. Terms like 研究(けんきゅう) (research), 実験(じっけん) (experiment), and 臨床(りんしょう) (clinical) appear in JLPT N1 passages and are increasingly relevant as Japan leads in areas like iPS cell research and robotics-assisted medicine.",
   goals:["Use scientific research vocabulary","Discuss clinical trials and experiments","Understand medical research terminology"]},

  {type:"teach", trg:"研究(けんきゅう)", src:"research / study", pos:"noun", gender:null,
   note:"Kanji: 研究. 研究者(けんきゅうしゃ) = researcher.\n研究室(けんきゅうしつ) = research lab/office.",
   example:"A: この研究(けんきゅう)は癌(がん)治療(ちりょう)に革命(かくめい)をもたらすかもしれません。\nB: 臨床試験(りんしょうしけん)の結果(けっか)が楽(たの)しみですね。\nA: 以前(いぜん)と比(くら)べてどう変(か)わりましたか？\nB: かなり改善(かいぜん)されました。効率(こうりつ)が上(あ)がりました。\nA: その改善(かいぜん)の要因(よういん)は何(なん)ですか？\nB: 新(あたら)しいシステムの導入(どうにゅう)が大(おお)きかったです。",
   exampleSrc:"A: This research may bring a revolution to cancer treatment.\nB: I look forward to the results of the clinical trials.\nA: How has it changed compared to before?\nB: It has improved considerably. Efficiency has increased.\nA: What was the cause of that improvement?\nB: The introduction of the new system was a big factor.",
   funFact:"研究 combines 研 (polish/sharpen) and 究 (investigate thoroughly). Research is 'polishing through thorough investigation.' Japan has produced numerous Nobel Prize winners in science and medicine, including Yamanaka Shinya for iPS cells (2012) and Omura Satoshi for parasitic disease treatments (2015)."},

  {type:"teach", trg:"実験(じっけん)", src:"experiment", pos:"noun", gender:null,
   note:"Kanji: 実験. 実験(じっけん)する = to experiment.\n実験室(じっけんしつ) = laboratory.",
   example:"A: 実験(じっけん)の結果(けっか)は仮説(かせつ)を支持(しじ)していますか？\nB: はい、統計的(とうけいてき)に有意(ゆうい)な結果(けっか)が得(え)られました。\nA: ご意見(いけん)をお聞(き)かせいただけますか？\nB: 私(わたし)の考(かんが)えでは、もう少(すこ)し検討(けんとう)が必要(ひつよう)だと思(おも)います。\nA: どの点(てん)を検討(けんとう)すべきでしょうか？\nB: 予算(よさん)と人員(じんいん)の面(めん)をもう一度(いちど)見直(みなお)す必要(ひつよう)があります。",
   exampleSrc:"A: Do the experimental results support the hypothesis?\nB: Yes, statistically significant results were obtained.\nA: Could you share your opinion?\nB: In my opinion, I think a bit more consideration is needed.\nA: Which points should be considered?\nB: We need to review the budget and staffing aspects once more.",
   funFact:"実験 uses 実 (truth/fruit) and 験 (test/effect). An experiment tests the truth. The word 経験(けいけん) (経験, experience) shares the 験 character, as experience is also a form of testing reality. Japanese research institutions are known for meticulous 実験(じっけん) methodology and thorough documentation."},

  {type:"teach", trg:"臨床(りんしょう)", src:"clinical", pos:"noun", gender:null,
   note:"Kanji: 臨床. 臨床試験(りんしょうしけん) = clinical trial.\n臨床医学(りんしょういがく) = clinical medicine.",
   example:"A: 新(あたら)しい薬(くすり)の臨床試験(りんしょうしけん)が始(はじ)まりました。\nB: 何人(なんにん)の患者(かんじゃ)が参加(さんか)していますか？\nA: 何(なに)か良(よ)い方法(ほうほう)はありませんか？\nB: 一(ひと)つ提案(ていあん)があります。段階的(だんかいてき)に進(すす)めてはどうでしょうか。\nA: 段階的(だんかいてき)に、というのはどういうことですか？\nB: まず小規模(しょうきぼ)で試(ため)してから、徐々(じょじょ)に拡大(かくだい)するということです。",
   exampleSrc:"A: Clinical trials for a new drug have started.\nB: How many patients are participating?\nA: Is there a good method?\nB: I have one suggestion. How about proceeding step by step?\nA: What do you mean by step by step?\nB: It means trying it on a small scale first, then gradually expanding.",
   funFact:"臨床 uses 臨 (face/approach) and 床 (bed/floor). 'Facing the bedside' captures the essence of clinical medicine: working directly with patients. Japan's 臨床試験(りんしょうしけん) (clinical trial) system has become more standardized since joining the International Council for Harmonisation of Technical Requirements for Pharmaceuticals."},

  {type:"mc", q:"実験室(じっけんしつ) means:", opts:["laboratory","classroom","hospital","pharmacy"], ans:"laboratory",
   hint:"室(しつ) means 'room,' combined with the word for experiment."},

  {type:"teach", trg:"仮説(かせつ)", src:"hypothesis", pos:"noun", gender:null,
   note:"Kanji: 仮説. 仮説(かせつ)を立(た)てる = to formulate a hypothesis.\n仮説(かせつ)を検証(けんしょう)する = to verify a hypothesis.",
   example:"A: この仮説(かせつ)はまだ検証(けんしょう)されていません。\nB: どのような実験(じっけん)で検証(けんしょう)できますか？\nA: この問題(もんだい)をどう思(おも)いますか？\nB: 複雑(ふくざつ)な問題(もんだい)ですが、解決策(かいけつさく)はあると思(おも)います。\nA: どのような解決策(かいけつさく)を考(かんが)えていますか？\nB: 関係者(かんけいしゃ)全員(ぜんいん)で話(はな)し合(あ)いの場(ば)を設(もう)けることが第一歩(だいいっぽ)です。",
   exampleSrc:"A: This hypothesis has not been verified yet.\nB: What kind of experiment could verify it?\nA: What do you think about this issue?\nB: It is a complex issue, but I think there are solutions.\nA: What kind of solutions are you thinking of?\nB: The first step is to set up a discussion forum for all stakeholders.",
   funFact:"仮説 combines 仮 (temporary/provisional) and 説 (theory/explain). A hypothesis is a 'provisional explanation.' The scientific method in Japanese follows the cycle: 仮説(かせつ) (hypothesis), 実験(じっけん) (experiment), 検証(けんしょう) (verification), 結論(けつろん) (conclusion). This terminology mirrors Western scientific methodology perfectly."},

  {type:"teach", trg:"細胞(さいぼう)", src:"cell (biological)", pos:"noun", gender:null,
   note:"Kanji: 細胞. 幹細胞(かんさいぼう) = stem cell.\niPS細胞(さいぼう) = induced pluripotent stem cell.",
   example:"A: iPS細胞(さいぼう)の研究(けんきゅう)は日本(にほん)が世界(せかい)をリードしています。\nB: 山中伸弥(やまなかしんや)教授(きょうじゅ)のノーベル賞(しょう)がきっかけでしたね。\nA: 最近(さいきん)の動向(どうこう)はいかがですか？\nB: 全体的(ぜんたいてき)には好調(こうちょう)ですが、一部(いちぶ)課題(かだい)もあります。\nA: どのような課題(かだい)がありますか？\nB: 人材(じんざい)の確保(かくほ)が最(もっと)も大(おお)きな課題(かだい)です。",
   exampleSrc:"A: Japan leads the world in iPS cell research.\nB: Professor Yamanaka Shinya's Nobel Prize was the catalyst.\nA: How are the recent trends?\nB: Overall things are going well, but there are some issues.\nA: What kinds of issues are there?\nB: Securing human resources is the biggest challenge.",
   funFact:"細胞 uses 細 (thin/detailed) and 胞 (placenta/cell). iPS cells (人工多能性幹細胞) were discovered by Kyoto University's Yamanaka Shinya in 2006, earning him the Nobel Prize in 2012. This breakthrough allows adult cells to be reprogrammed into stem cells, potentially revolutionizing organ transplantation and disease treatment."},

  {type:"teach", trg:"免疫(めんえき)", src:"immunity / immune system", pos:"noun", gender:null,
   note:"Kanji: 免疫. 免疫力(めんえきりょく) = immune strength.\n免疫学(めんえきがく) = immunology.",
   example:"A: 免疫力(めんえきりょく)を高(たか)めるにはどうすればいいですか？\nB: 十分(じゅうぶん)な睡眠(すいみん)とバランスのよい食事(しょくじ)が大切(たいせつ)です。\nA: それは興味深(きょうみぶか)いですね。\nB: ええ、日本(にほん)ならではの特徴(とくちょう)だと思(おも)います。\nA: 海外(かいがい)ではどうなのでしょうか？\nB: 国(くに)によって異(こと)なりますが、共通(きょうつう)する部分(ぶぶん)もあります。",
   exampleSrc:"A: How can I boost my immunity?\nB: Adequate sleep and a balanced diet are important.\nA: That is interesting.\nB: Yes, I think it is a characteristic unique to Japan.\nA: I wonder how it is overseas?\nB: It differs by country, but there are also common aspects.",
   funFact:"免疫 uses 免 (escape/exempt) and 疫 (epidemic/plague). Immunity is 'escaping the plague.' Japanese immunologist Honjo Tasuku won the 2018 Nobel Prize for discovering PD-1 immune checkpoint therapy, which revolutionized cancer treatment. His work showed that removing the 'brakes' on the immune system could help it fight cancer."},

  {type:"fb", s:"この{1}はまだ検証(けんしょう)されていません。\n(This hypothesis has not been verified yet.)", a:"仮説(かせつ)", opts:["仮説(かせつ)","結論(けつろん)","実験(じっけん)","研究(けんきゅう)"], sSrc:"This hypothesis has not been verified yet.",
   hint:"The noun meaning 'hypothesis,' a provisional explanation that needs testing."},

  {type:"teach", trg:"遺伝子(いでんし)", src:"gene", pos:"noun", gender:null,
   note:"Kanji: 遺伝子. 遺伝子組(く)み換(か)え = genetic modification.\n遺伝子治療(いでんしちりょう) = gene therapy.",
   example:"A: 遺伝子治療(いでんしちりょう)は将来(しょうらい)多(おお)くの病気(びょうき)を治(なお)せるかもしれません。\nB: 倫理的(りんりてき)な問題(もんだい)もありますが、期待(きたい)が大(おお)きいですね。\nA: その経験(けいけん)から何(なに)を学(まな)びましたか？\nB: 事前(じぜん)の準備(じゅんび)がいかに重要(じゅうよう)かを学(まな)びました。\nA: 具体的(ぐたいてき)にどんな準備(じゅんび)をすべきですか？\nB: まず情報収集(じょうほうしゅうしゅう)をして、それから計画(けいかく)を練(ね)ることが大事(だいじ)です。",
   exampleSrc:"A: Gene therapy may be able to cure many diseases in the future.\nB: There are ethical issues, but expectations are high.\nA: What did you learn from that experience?\nB: I learned how important advance preparation is.\nA: What kind of preparation should be done specifically?\nB: First, gather information, then it is important to develop a plan.",
   funFact:"遺伝子 breaks down as 遺 (leave behind/bequeath), 伝 (transmit), and 子 (child/small thing). Genes are 'the small things transmitted as a legacy.' Japan was an early participant in the Human Genome Project and continues to be a major contributor to genomics research, particularly in understanding genetic factors in diseases common in Asian populations."},

  {type:"teach", trg:"倫理(りんり)", src:"ethics", pos:"noun", gender:null,
   note:"Kanji: 倫理. 倫理的(りんりてき) = ethical.\n生命倫理(せいめいりんり) = bioethics.",
   example:"A: 生命倫理(せいめいりんり)の問題(もんだい)はますます重要(じゅうよう)になっています。\nB: テクノロジーの進歩(しんぽ)に倫理(りんり)が追(お)いつかなければなりません。\nA: 今後(こんご)の展望(てんぼう)についてお聞(き)かせください。\nB: 今後(こんご)はさらに国際化(こくさいか)が進(すす)むと思(おも)います。\nA: それに対(たい)してどのような対策(たいさく)が必要(ひつよう)ですか？\nB: 語学力(ごがくりょく)の向上(こうじょう)と異文化理解(いぶんかりかい)が不可欠(ふかけつ)です。",
   exampleSrc:"A: Bioethics issues are becoming increasingly important.\nB: Ethics must keep up with technological progress.\nA: Please tell me about future prospects.\nB: I think internationalization will progress further going forward.\nA: What measures are needed for that?\nB: Improving language skills and cross-cultural understanding are essential.",
   funFact:"倫理 uses 倫 (ethics/companion) and 理 (reason/principle). As Japan advances in iPS cells, gene therapy, and AI-assisted medicine, 倫理(りんり) (ethics) has become a hot topic. Japanese universities now require 倫理審査(りんりしんさ) (ethics review) for all research involving human subjects, and the field of 生命倫理(せいめいりんり) (bioethics) is growing rapidly."},

  {type:"teach", trg:"感染(かんせん)", src:"infection / contagion", pos:"noun", gender:null,
   note:"Kanji: 感染. 感染(かんせん)する = to become infected.\n感染症(かんせんしょう) = infectious disease.",
   example:"A: 感染症(かんせんしょう)の予防(よぼう)には手洗(てあら)いが最(もっと)も効果的(こうかてき)です。\nB: マスクも効果(こうか)がありますか？\nA: それは予想外(よそうがい)の結果(けっか)ですね。\nB: はい、私(わたし)も驚(おどろ)きました。原因(げんいん)を調(しら)べています。\nA: いつごろ原因(げんいん)が分(わ)かりそうですか？\nB: 今週中(こんしゅうちゅう)には分析(ぶんせき)結果(けっか)が出(で)る予定(よてい)です。",
   exampleSrc:"A: Handwashing is the most effective prevention for infectious diseases.\nB: Are masks also effective?\nA: That is an unexpected result.\nB: Yes, I was surprised too. We are investigating the cause.\nA: When do you think you will know the cause?\nB: The analysis results are expected to come out by the end of this week.",
   funFact:"感染 combines 感 (feel/sense) and 染 (dye/stain). Infection 'stains' the body. Japan's response to infectious diseases has been shaped by cultural practices: mask-wearing was common long before global pandemics, originating from the 1918 Spanish Flu. The phrase 感染対策(かんせんたいさく) (infection countermeasures) became ubiquitous vocabulary during the COVID-19 pandemic."},

  {type:"mc", q:"生命倫理(せいめいりんり) means:", opts:["biology","bioethics","biochemistry","biotechnology"], ans:"bioethics",
   hint:"生命(せいめい) means 'life' combined with the word for ethics, creating the field that examines moral issues in life sciences."},

  {type:"match", pairs:[{trg:"研究(けんきゅう)",src:"research"},{trg:"実験(じっけん)",src:"experiment"},{trg:"仮説(かせつ)",src:"hypothesis"},{trg:"臨床(りんしょう)",src:"clinical"}]},

  {type:"fb", s:"感染症(かんせんしょう)の{1}には手洗(てあら)いが最(もっと)も効果的(こうかてき)です。\n(Handwashing is the most effective prevention for infectious diseases.)", a:"予防(よぼう)", opts:["予防(よぼう)","治療(ちりょう)","研究(けんきゅう)","臨床(りんしょう)"], sSrc:"Handwashing is the most effective prevention for infectious diseases.",
   hint:"The noun meaning 'prevention,' the act of stopping something before it happens."},

  {type:"match", pairs:[{trg:"細胞(さいぼう)",src:"cell"},{trg:"遺伝子(いでんし)",src:"gene"},{trg:"免疫(めんえき)",src:"immunity"},{trg:"感染(かんせん)",src:"infection"}]},

  {type:"mc", q:"Which Japanese scientist won the Nobel Prize for iPS cell research?", opts:["Honjo Tasuku","Omura Satoshi","Yamanaka Shinya","Akasaki Isamu"], ans:"Yamanaka Shinya",
   hint:"This Kyoto University professor discovered how to reprogram adult cells into stem cells in 2006."},

  {type:"mc", q:"臨床試験(りんしょうしけん) means:", opts:["laboratory experiment","computer simulation","field study","clinical trial"], ans:"clinical trial",
   hint:"臨床(りんしょう) means 'facing the bedside,' so this compound describes a test conducted directly with patients."},

  {type:"mc", q:"免疫力(めんえきりょく) refers to:", opts:["immune strength","blood pressure","lung capacity","bone density"], ans:"immune strength",
   hint:"免疫(めんえき) refers to the body's defense system. The second part 力(りょく) means power or capacity."},

  {type:"fb", s:"遺伝子(いでんし){1}は将来(しょうらい)多(おお)くの病気(びょうき)を治(なお)せるかもしれません。\n(Gene therapy may be able to cure many diseases in the future.)", a:"治療(ちりょう)", opts:["治療(ちりょう)","研究(けんきゅう)","診察(しんさつ)","予防(よぼう)"], sSrc:"Gene therapy may be able to cure many diseases in the future.",
   hint:"The noun for medical treatment, combining two kanji that both mean 'to heal.'"},

  {type:"mc", q:"感染(かんせん)する means:", opts:["to vaccinate","to become infected","to recover","to disinfect"], ans:"to become infected",
   hint:"The verb form of 感染(かんせん), which combines 'stain' with 'feel,' describing how illness spreads to the body."},

  {type:"fb", s:"ウイルスの{1}を防(ふせ)ぐためにマスクをつけましょう。", a:"感染(かんせん)", opts:["感染(かんせん)","治療(ちりょう)","免疫(めんえき)","遺伝子(いでんし)"], sSrc:"Let's wear masks to prevent virus infection.",
   hint:"The noun describing how a pathogen spreads from one person to another."},
{type:"match",pairs:[{trg:"医学(いがく)",src:"medical science / medicine (as a field)"},{trg:"倫理(りんり)",src:"ethics"}]}]},

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
export default UNIT_32;
