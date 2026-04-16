// Japanese V2 Unit 32. いがく (Medicine & Health Science)
import BATCH6_L1 from './_batch6_u32_L01.js';
import BATCH5_L02 from './_batch5_u32_L02.js';
import BATCH5_L01 from './_batch5_u32_L01.js';
import BATCH2_L02 from './_batch2_u32_L02.js';
import BATCH2_L01 from './_batch2_u32_L01.js';
// Level: B2.4. JLPT N2/N1 aligned.
// しんさつ, しょうじょう, しゅじゅつ, くすり, けんこうしんだん, よぼう, ちりょう.

const UNIT_32 = {
  n:32, lang:"ja", srcLang:"en", track:"v2",
  title:"いがく", sub:"Medicine & Health Science",
  icon:"🏥", level:"B2.4", color:"#7B5EE8",
  lessons:[

// ═══ L1: Medical Vocabulary & Healthcare ═══
{id:"jav2_u32l1", title:"Medical Vocabulary", icon:"🩺", xp:15, board:true, steps:[
  {type:"intro", title:"Medical Vocabulary & Healthcare",
   desc:"Japan's healthcare system is one of the most advanced in the world, with universal coverage since 1961. Understanding medical vocabulary like しんさつ (examination), しょうじょう (symptoms), and ちりょう (treatment) is practical for daily life in Japan and essential for JLPT N1 reading passages about health and science.",
   goals:["Use core medical vocabulary accurately","Describe symptoms and treatments","Understand Japan's healthcare system vocabulary"]},

  {type:"teach", trg:"いがく", src:"medical science / medicine (as a field)", pos:"noun", gender:null,
   note:"Kanji: 医学. いがくぶ = medical school/department.\nいがくはかせ = doctor of medicine (PhD).",
   example:"A: いがくのしんぽはめざましいものがあります。\nB: とくにいでんしちりょうのぶんやがちゅうもくされていますね。",
   exampleSrc:"A: The progress of medical science is remarkable.\nB: The field of gene therapy is especially attracting attention.",
   funFact:"医学 combines 医 (medicine/doctor) and 学 (study). The character 医 originally depicted an arrow (矢) being removed from a wound, representing surgical treatment. Japan's medical education system requires 6 years of university, followed by 2 years of mandatory residency, modeled on a mix of German and American systems."},

  {type:"teach", trg:"しんさつ", src:"medical examination / consultation", pos:"noun", gender:null,
   note:"Kanji: 診察. しんさつする = to examine (a patient).\nしんさつしつ = examination room.",
   example:"A: よやくなしでしんさつしてもらえますか？\nB: きゅうかんのばあいはおうきゅうがいらいへどうぞ。",
   exampleSrc:"A: Can I get an examination without an appointment?\nB: For urgent cases, please go to the emergency outpatient department.",
   funFact:"診察 uses 診 (diagnose/examine) and 察 (observe/investigate). Japanese clinics typically operate on a first-come-first-served basis, and wait times can be long. The phrase さんじかんまちさんぷんしんさつ (3 hours waiting, 3 minutes examination) is a well-known complaint about Japanese healthcare, though the quality of care is generally high."},

  {type:"teach", trg:"しょうじょう", src:"symptom(s)", pos:"noun", gender:null,
   note:"Kanji: 症状. しょうじょうがでる = symptoms appear.\nしょうじょうがかいぜんする = symptoms improve.",
   example:"A: どのようなしょうじょうがありますか？\nB: あたまがいたくて、ねつもあります。",
   exampleSrc:"A: What kind of symptoms do you have?\nB: I have a headache and a fever.",
   funFact:"症状 combines 症 (illness/disease) and 状 (condition/state). In Japanese medical consultations, describing your しょうじょう clearly is important because doctors rely heavily on patient reporting. The phrase じかくしょうじょう (self-perceived symptoms) vs. たかくしょうじょう (observable symptoms) is a key distinction in diagnosis."},

  {type:"mc", q:"しんさつしつ means:", opts:["examination room","waiting room","operating room","pharmacy"], ans:"examination room",
   hint:"しつ means 'r...,' combined with the word for medical e.../consultation."},

  {type:"teach", trg:"ちりょう", src:"treatment / therapy / cure", pos:"noun", gender:null,
   note:"Kanji: 治療. ちりょうする = to treat (medically).\nちりょうほう = treatment method/therapy.",
   example:"A: あたらしいちりょうほうがかいはつされました。\nB: かんじゃさんにとってきぼうですね。",
   exampleSrc:"A: A new treatment method has been developed.\nB: That is hope for patients.",
   funFact:"治療 uses 治 (heal/govern) and 療 (heal/treat). Both characters relate to healing, reinforcing the meaning. Interestingly, 治 also means 'to govern,' reflecting an ancient Chinese belief that governing a nation and healing the body follow similar principles. The word せいじ (politics) also uses this same 治."},

  {type:"teach", trg:"しゅじゅつ", src:"surgery / operation", pos:"noun", gender:null,
   note:"Kanji: 手術. しゅじゅつする = to perform surgery.\nしゅじゅつしつ = operating room.",
   example:"A: しゅじゅつはせいこうしました。\nB: よかった、あんしんしました。",
   exampleSrc:"A: The surgery was successful.\nB: Good, I am relieved.",
   funFact:"手術 combines 手 (hand) and 術 (technique/art). Surgery is literally 'hand technique.' Japan is a leader in robotic surgery, with the da Vinci system widely used. Japanese surgeons are known for meticulous precision, and the country pioneered several techniques in microsurgery and organ transplantation."},

  {type:"teach", trg:"くすり", src:"medicine / drug / medication", pos:"noun", gender:null,
   note:"Kanji: 薬. くすりをのむ = to take medicine.\nやっきょく = pharmacy. しょほうせん = prescription.",
   example:"A: このくすりをいちにちさんかい、しょくごにのんでください。\nB: ふくさようはありますか？",
   exampleSrc:"A: Please take this medicine three times a day, after meals.\nB: Are there any side effects?",
   funFact:"The kanji 薬 has the grass radical (艹) on top, reflecting that traditional medicines came from plants. Japan has a dual system: Western medicine (せいよういがく) and traditional Chinese medicine (かんぽういがく). Many Japanese people use both. Kampo medicines are covered by national health insurance, making Japan unique among developed nations."},

  {type:"fb", s:"どのような{1}がありますか？\n(What kind of symptoms do you have?)", a:"しょうじょう", opts:["しょうじょう","ちりょう","しゅじゅつ","しんさつ"], sSrc:"What kind of symptoms do you have?",
   hint:"The noun meaning 'symptoms,' what a doctor asks about to understand your condition."},

  {type:"teach", trg:"よぼう", src:"prevention / precaution", pos:"noun", gender:null,
   note:"Kanji: 予防. よぼうする = to prevent.\nよぼうせっしゅ = vaccination. よぼういがく = preventive medicine.",
   example:"A: びょうきのよぼうにはうんどうとえいようがたいせつです。\nB: ていきけんしんもわすれないでください。",
   exampleSrc:"A: Exercise and nutrition are important for disease prevention.\nB: Please do not forget regular checkups either.",
   funFact:"予防 uses 予 (beforehand) and 防 (defend/prevent). Japan excels in よぼういがく (preventive medicine). Annual health checkups (けんこうしんだん) are mandatory for employees, and municipalities offer free cancer screenings. This prevention-focused approach contributes to Japan having the highest life expectancy in the world."},

  {type:"teach", trg:"けんこうしんだん", src:"health checkup / medical examination", pos:"noun", gender:null,
   note:"Kanji: 健康診断. Required annually for all employees in Japan.\nにんげんドック = comprehensive health screening.",
   example:"A: かいしゃのけんこうしんだんでいじょうがみつかりました。\nB: すぐにせんもんいにしんさつしてもらってください。",
   exampleSrc:"A: An abnormality was found in the company health checkup.\nB: Please see a specialist immediately.",
   funFact:"健康診断 is a four-kanji compound: 健 (healthy), 康 (peace), 診 (examine), 断 (judge). Annual けんこうしんだん is legally required for Japanese workers under the Industrial Safety and Health Act. The more thorough にんげんドック (human dock, from dry dock for ships) is a comprehensive multi-hour screening popular with health-conscious adults."},

  {type:"mc", q:"よぼうせっしゅ means:", opts:["blood test","vaccination","surgery","diagnosis"], ans:"vaccination",
   hint:"よぼう means 'prevention' and せっしゅ means 'inoculation' or 'injection.'"},

  {type:"teach", trg:"ふくさよう", src:"side effect(s)", pos:"noun", gender:null,
   note:"Kanji: 副作用. ふくさようがでる = side effects appear.\nUsed for medicines, treatments, and even policies.",
   example:"A: このくすりにはふくさようがありますか？\nB: まれにめまいやはきけがでることがあります。",
   exampleSrc:"A: Does this medicine have side effects?\nB: Rarely, dizziness or nausea may occur.",
   funFact:"副作用 breaks down as 副 (secondary/vice), 作 (make/produce), and 用 (use/effect). The 'secondary effect' of a medicine. Japanese pharmacists (やくざいし) are legally required to explain ふくさよう when dispensing prescription drugs. The concept is also used metaphorically: economic policies can have ふくさよう on society."},

  {type:"match", pairs:[{trg:"しんさつ",src:"examination"},{trg:"ちりょう",src:"treatment"},{trg:"しゅじゅつ",src:"surgery"},{trg:"くすり",src:"medicine"}]},

  {type:"fb", s:"びょうきの{1}にはうんどうとえいようがたいせつです。\n(Exercise and nutrition are important for disease prevention.)", a:"よぼう", opts:["よぼう","ちりょう","しんさつ","しゅじゅつ"], sSrc:"Exercise and nutrition are important for disease prevention.",
   hint:"The noun meaning 'prevention,' acting before something bad happens."},

  {type:"match", pairs:[{trg:"よぼう",src:"prevention"},{trg:"ふくさよう",src:"side effect"},{trg:"けんこうしんだん",src:"health checkup"},{trg:"しょうじょう",src:"symptoms"}]},

  {type:"mc", q:"ちりょうする means:", opts:["to diagnose","to prescribe","to treat medically","to operate"], ans:"to treat medically",
   hint:"The verb form of the noun that uses two kanji both meaning 'to heal.'"},
]},

// ═══ L2: Research & Scientific Terminology ═══
{id:"jav2_u32l2", title:"Science & Research", icon:"🔬", xp:15, board:true, steps:[
  {type:"intro", title:"Research & Scientific Terminology",
   desc:"Scientific research vocabulary is crucial for reading Japanese academic texts and news about medical breakthroughs. Terms like けんきゅう (research), じっけん (experiment), and りんしょう (clinical) appear in JLPT N1 passages and are increasingly relevant as Japan leads in areas like iPS cell research and robotics-assisted medicine.",
   goals:["Use scientific research vocabulary","Discuss clinical trials and experiments","Understand medical research terminology"]},

  {type:"teach", trg:"けんきゅう", src:"research / study", pos:"noun", gender:null,
   note:"Kanji: 研究. けんきゅうしゃ = researcher.\nけんきゅうしつ = research lab/office.",
   example:"A: このけんきゅうはがんちりょうにかくめいをもたらすかもしれません。\nB: りんしょうしけんのけっかがたのしみですね。",
   exampleSrc:"A: This research may bring a revolution to cancer treatment.\nB: I look forward to the results of the clinical trials.",
   funFact:"研究 combines 研 (polish/sharpen) and 究 (investigate thoroughly). Research is 'polishing through thorough investigation.' Japan has produced numerous Nobel Prize winners in science and medicine, including Yamanaka Shinya for iPS cells (2012) and Omura Satoshi for parasitic disease treatments (2015)."},

  {type:"teach", trg:"じっけん", src:"experiment", pos:"noun", gender:null,
   note:"Kanji: 実験. じっけんする = to experiment.\nじっけんしつ = laboratory.",
   example:"A: じっけんのけっかはかせつをしじしていますか？\nB: はい、とうけいてきにゆういなけっかがえられました。",
   exampleSrc:"A: Do the experimental results support the hypothesis?\nB: Yes, statistically significant results were obtained.",
   funFact:"実験 uses 実 (truth/fruit) and 験 (test/effect). An experiment tests the truth. The word けいけん (経験, experience) shares the 験 character, as experience is also a form of testing reality. Japanese research institutions are known for meticulous じっけん methodology and thorough documentation."},

  {type:"teach", trg:"りんしょう", src:"clinical", pos:"noun", gender:null,
   note:"Kanji: 臨床. りんしょうしけん = clinical trial.\nりんしょういがく = clinical medicine.",
   example:"A: あたらしいくすりのりんしょうしけんがはじまりました。\nB: なんにんのかんじゃがさんかしていますか？",
   exampleSrc:"A: Clinical trials for a new drug have started.\nB: How many patients are participating?",
   funFact:"臨床 uses 臨 (face/approach) and 床 (bed/floor). 'Facing the bedside' captures the essence of clinical medicine: working directly with patients. Japan's りんしょうしけん (clinical trial) system has become more standardized since joining the International Council for Harmonisation of Technical Requirements for Pharmaceuticals."},

  {type:"mc", q:"じっけんしつ means:", opts:["laboratory","classroom","hospital","pharmacy"], ans:"laboratory",
   hint:"しつ means 'room,' combined with the word for experiment."},

  {type:"teach", trg:"かせつ", src:"hypothesis", pos:"noun", gender:null,
   note:"Kanji: 仮説. かせつをたてる = to formulate a hypothesis.\nかせつをけんしょうする = to verify a hypothesis.",
   example:"A: このかせつはまだけんしょうされていません。\nB: どのようなじっけんでけんしょうできますか？",
   exampleSrc:"A: This hypothesis has not been verified yet.\nB: What kind of experiment could verify it?",
   funFact:"仮説 combines 仮 (temporary/provisional) and 説 (theory/explain). A hypothesis is a 'provisional explanation.' The scientific method in Japanese follows the cycle: かせつ (hypothesis), じっけん (experiment), けんしょう (verification), けつろん (conclusion). This terminology mirrors Western scientific methodology perfectly."},

  {type:"teach", trg:"さいぼう", src:"cell (biological)", pos:"noun", gender:null,
   note:"Kanji: 細胞. かんさいぼう = stem cell.\niPSさいぼう = induced pluripotent stem cell.",
   example:"A: iPSさいぼうのけんきゅうはにほんがせかいをリードしています。\nB: やまなかしんやきょうじゅのノーベルしょうがきっかけでしたね。",
   exampleSrc:"A: Japan leads the world in iPS cell research.\nB: Professor Yamanaka Shinya's Nobel Prize was the catalyst.",
   funFact:"細胞 uses 細 (thin/detailed) and 胞 (placenta/cell). iPS cells (人工多能性幹細胞) were discovered by Kyoto University's Yamanaka Shinya in 2006, earning him the Nobel Prize in 2012. This breakthrough allows adult cells to be reprogrammed into stem cells, potentially revolutionizing organ transplantation and disease treatment."},

  {type:"teach", trg:"めんえき", src:"immunity / immune system", pos:"noun", gender:null,
   note:"Kanji: 免疫. めんえきりょく = immune strength.\nめんえきがく = immunology.",
   example:"A: めんえきりょくをたかめるにはどうすればいいですか？\nB: じゅうぶんなすいみんとバランスのよいしょくじがたいせつです。",
   exampleSrc:"A: How can I boost my immunity?\nB: Adequate sleep and a balanced diet are important.",
   funFact:"免疫 uses 免 (escape/exempt) and 疫 (epidemic/plague). Immunity is 'escaping the plague.' Japanese immunologist Honjo Tasuku won the 2018 Nobel Prize for discovering PD-1 immune checkpoint therapy, which revolutionized cancer treatment. His work showed that removing the 'brakes' on the immune system could help it fight cancer."},

  {type:"fb", s:"この{1}はまだけんしょうされていません。\n(This hypothesis has not been verified yet.)", a:"かせつ", opts:["かせつ","けつろん","じっけん","けんきゅう"], sSrc:"This hypothesis has not been verified yet.",
   hint:"The noun meaning 'hypothesis,' a provisional explanation that needs testing."},

  {type:"teach", trg:"いでんし", src:"gene", pos:"noun", gender:null,
   note:"Kanji: 遺伝子. いでんしくみかえ = genetic modification.\nいでんしちりょう = gene therapy.",
   example:"A: いでんしちりょうはしょうらいおおくのびょうきをなおせるかもしれません。\nB: りんりてきなもんだいもありますが、きたいがおおきいですね。",
   exampleSrc:"A: Gene therapy may be able to cure many diseases in the future.\nB: There are ethical issues, but expectations are high.",
   funFact:"遺伝子 breaks down as 遺 (leave behind/bequeath), 伝 (transmit), and 子 (child/small thing). Genes are 'the small things transmitted as a legacy.' Japan was an early participant in the Human Genome Project and continues to be a major contributor to genomics research, particularly in understanding genetic factors in diseases common in Asian populations."},

  {type:"teach", trg:"りんり", src:"ethics", pos:"noun", gender:null,
   note:"Kanji: 倫理. りんりてき = ethical.\nせいめいりんり = bioethics.",
   example:"A: せいめいりんりのもんだいはますますじゅうようになっています。\nB: テクノロジーのしんぽにりんりがおいつかなければなりません。",
   exampleSrc:"A: Bioethics issues are becoming increasingly important.\nB: Ethics must keep up with technological progress.",
   funFact:"倫理 uses 倫 (ethics/companion) and 理 (reason/principle). As Japan advances in iPS cells, gene therapy, and AI-assisted medicine, りんり (ethics) has become a hot topic. Japanese universities now require りんりしんさ (ethics review) for all research involving human subjects, and the field of せいめいりんり (bioethics) is growing rapidly."},

  {type:"teach", trg:"かんせん", src:"infection / contagion", pos:"noun", gender:null,
   note:"Kanji: 感染. かんせんする = to become infected.\nかんせんしょう = infectious disease.",
   example:"A: かんせんしょうのよぼうにはてあらいがもっともこうかてきです。\nB: マスクもこうかがありますか？",
   exampleSrc:"A: Handwashing is the most effective prevention for infectious diseases.\nB: Are masks also effective?",
   funFact:"感染 combines 感 (feel/sense) and 染 (dye/stain). Infection 'stains' the body. Japan's response to infectious diseases has been shaped by cultural practices: mask-wearing was common long before global pandemics, originating from the 1918 Spanish Flu. The phrase かんせんたいさく (infection countermeasures) became ubiquitous vocabulary during the COVID-19 pandemic."},

  {type:"mc", q:"せいめいりんり means:", opts:["biology","bioethics","biochemistry","biotechnology"], ans:"bioethics",
   hint:"せいめい means 'life' combined with the word for ethics, creating the field that examines moral issues in life sciences."},

  {type:"match", pairs:[{trg:"けんきゅう",src:"research"},{trg:"じっけん",src:"experiment"},{trg:"かせつ",src:"hypothesis"},{trg:"りんしょう",src:"clinical"}]},

  {type:"fb", s:"かんせんしょうの{1}にはてあらいがもっともこうかてきです。\n(Handwashing is the most effective prevention for infectious diseases.)", a:"よぼう", opts:["よぼう","ちりょう","けんきゅう","りんしょう"], sSrc:"Handwashing is the most effective prevention for infectious diseases.",
   hint:"The noun meaning 'prevention,' the act of stopping something before it happens."},

  {type:"match", pairs:[{trg:"さいぼう",src:"cell"},{trg:"いでんし",src:"gene"},{trg:"めんえき",src:"immunity"},{trg:"かんせん",src:"infection"}]},

  {type:"mc", q:"Which Japanese scientist won the Nobel Prize for iPS cell research?", opts:["Honjo Tasuku","Omura Satoshi","Yamanaka Shinya","Akasaki Isamu"], ans:"Yamanaka Shinya",
   hint:"This Kyoto University professor discovered how to reprogram adult cells into stem cells in 2006."},

  {type:"mc", q:"りんしょうしけん means:", opts:["laboratory experiment","computer simulation","field study","clinical trial"], ans:"clinical trial",
   hint:"りんしょう means 'facing the bedside,' so this compound describes a test conducted directly with patients."},

  {type:"mc", q:"めんえきりょく refers to:", opts:["immune strength","blood pressure","lung capacity","bone density"], ans:"immune strength",
   hint:"めんえき refers to the body's defense system. The second part りょく means power or capacity."},

  {type:"fb", s:"いでんし{1}はしょうらいおおくのびょうきをなおせるかもしれません。\n(Gene therapy may be able to cure many diseases in the future.)", a:"ちりょう", opts:["ちりょう","けんきゅう","しんさつ","よぼう"], sSrc:"Gene therapy may be able to cure many diseases in the future.",
   hint:"The noun for medical treatment, combining two kanji that both mean 'to heal.'"},

  {type:"mc", q:"かんせんする means:", opts:["to vaccinate","to become infected","to recover","to disinfect"], ans:"to become infected",
   hint:"The verb form of かんせん, which combines 'stain' with 'feel,' describing how illness spreads to the body."},

  {type:"fb", s:"ウイルスの{1}をふせぐためにマスクをつけましょう。", a:"かんせん", opts:["かんせん","ちりょう","めんえき","いでんし"], sSrc:"Let's wear masks to prevent virus infection.",
   hint:"The noun describing how a pathogen spreads from one person to another."},
]},

,BATCH2_L01
,BATCH2_L02
,BATCH5_L01
,BATCH5_L02
,BATCH6_L1
]};
export default UNIT_32;
