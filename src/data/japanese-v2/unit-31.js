// Japanese V2 Unit 31. ほうりつ (Law & Legal System)
import BATCH10_L1 from './_batch10_u31_L01.js';
import BATCH9_L1 from './_batch9_u31_L01.js';
import BATCH7_L1 from './_batch7_u31_L01.js';
import BATCH8_L1 from './_batch8_u31_L01.js';
import BATCH6_L1 from './_batch6_u31_L01.js';
import BATCH5_L02 from './_batch5_u31_L02.js';
import BATCH5_L01 from './_batch5_u31_L01.js';
import BATCH2_L02 from './_batch2_u31_L02.js';
import BATCH2_L01 from './_batch2_u31_L01.js';
// Level: B2.3. JLPT N2/N1 aligned.
// ほう, けんぽう, さいばん, べんごし, はんけつ, けんり, ぎむ.

const UNIT_31 = {
  n:31, lang:"ja", srcLang:"en", track:"v2",
  title:"ほうりつ", sub:"Law & Legal System",
  icon:"⚖️", level:"B2.3", color:"#7B5EE8",
  lessons:[

// ═══ L1: Legal Foundations & Rights ═══
{id:"jav2_u31l1", title:"Legal Foundations", icon:"📜", xp:15, board:true, steps:[
  {type:"intro", title:"Legal Foundations & Rights",
   desc:"Understanding legal vocabulary is essential for life in Japan and for JLPT N1 reading passages. Japan's legal system blends Western civil law traditions with uniquely Japanese principles. Words like けんぽう (constitution), けんり (rights), and ぎむ (obligations) form the backbone of legal discourse and appear frequently in news and formal writing.",
   goals:["Use core legal vocabulary accurately","Discuss rights and obligations in Japanese","Understand the structure of Japan's legal system"]},

  {type:"teach", trg:"ほうりつ", src:"law / statute", pos:"noun", gender:null,
   note:"Kanji: 法律. ほうりつをまもる = to obey the law.\nほうりつにはんする = to violate the law.",
   example:"A: あたらしいほうりつがらいげつしこうされます。\nB: どのようなないようですか？",
   exampleSrc:"A: A new law will take effect next month.\nB: What kind of content does it have?",
   funFact:"法律 combines 法 (law/method) and 律 (rule/regulate). The character 法 originally depicted water flowing in a fixed channel, suggesting rules that guide behavior like banks guide a river. Japan's modern legal system was established during the Meiji era, heavily influenced by German and French civil law."},

  {type:"teach", trg:"けんぽう", src:"constitution", pos:"noun", gender:null,
   note:"Kanji: 憲法. にほんこくけんぽう = Constitution of Japan.\nけんぽうかいせい = constitutional amendment.",
   example:"A: にほんこくけんぽうはだいきゅうじょうがゆうめいです。\nB: へいわしゅぎのじょうこうですね。",
   exampleSrc:"A: Article 9 of Japan's Constitution is famous.\nB: That is the pacifism clause.",
   funFact:"Japan's postwar Constitution (1947) is unique for Article 9, which renounces war and prohibits maintaining military forces. It has never been amended since adoption, making it one of the oldest unamended constitutions in the world. The debate over けんぽうかいせい (amendment) remains one of Japan's most divisive political issues."},

  {type:"teach", trg:"けんり", src:"right / legal right", pos:"noun", gender:null,
   note:"Kanji: 権利. きほんてきけんり = fundamental rights.\nけんりをしゅちょうする = to assert one's rights.",
   example:"A: すべてのひとにひょうげんのじゆうのけんりがあります。\nB: しかし、たにんのけんりもそんちょうしなければなりません。",
   exampleSrc:"A: All people have the right to freedom of expression.\nB: However, we must also respect the rights of others.",
   funFact:"権利 uses 権 (authority/power) and 利 (benefit/advantage). The concept of individual けんり was introduced to Japan during the Meiji era. Before that, Japanese society emphasized 義務 (ぎむ, duty) over rights. The tension between けんり and ぎむ continues to shape Japanese legal and social philosophy."},

  {type:"mc", q:"けんぽう means:", opts:["constitution","criminal law","court ruling","lawyer"], ans:"constitution",
   hint:"The foundational legal document that establishes the basic principles and structure of government."},

  {type:"teach", trg:"ぎむ", src:"duty / obligation", pos:"noun", gender:null,
   note:"Kanji: 義務. ぎむきょういく = compulsory education.\nぎむをはたす = to fulfill one's duty.",
   example:"A: のうぜいはこくみんのぎむです。\nB: にほんではきょういくもぎむですよね。",
   exampleSrc:"A: Paying taxes is a citizen's duty.\nB: In Japan, education is also compulsory, right?",
   funFact:"義務 combines 義 (righteousness/justice) and 務 (task/duty). Japan's Constitution specifies three major 義務: のうぜい (paying taxes), きんろう (working), and きょういくをうけさせる (having children receive education). These three duties are taught to every Japanese schoolchild."},

  {type:"teach", trg:"さいばん", src:"trial / court case", pos:"noun", gender:null,
   note:"Kanji: 裁判. さいばんしょ = court (building).\nさいばんかん = judge. さいばんいんせいど = lay judge system.",
   example:"A: さいばんはらいしゅうからはじまります。\nB: べんごしはもうきまりましたか？",
   exampleSrc:"A: The trial starts next week.\nB: Has a lawyer been decided yet?",
   funFact:"裁判 uses 裁 (judge/cut) and 判 (judge/stamp). Japan introduced the さいばんいんせいど (lay judge system) in 2009, allowing ordinary citizens to participate in serious criminal trials alongside professional judges. This was a major reform in a system that had been entirely judge-driven for over a century."},

  {type:"teach", trg:"べんごし", src:"lawyer / attorney", pos:"noun", gender:null,
   note:"Kanji: 弁護士. One of Japan's most prestigious professions.\nPassing the bar exam is extremely difficult.",
   example:"A: べんごしにそうだんしたほうがいいですよ。\nB: しっているべんごしがいないのですが。",
   exampleSrc:"A: You should consult a lawyer.\nB: But I do not know any lawyers.",
   funFact:"弁護士 uses 弁 (speech/valve), 護 (protect), and 士 (person/samurai). A lawyer is literally 'a person who protects through speech.' The Japanese bar exam (しほうしけん) is one of the hardest professional exams in the world, with a pass rate historically below 3%. Recent reforms have increased it, but it remains extremely competitive."},

  {type:"fb", s:"のうぜいはこくみんの{1}です。\n(Paying taxes is a citizen's duty.)", a:"ぎむ", opts:["ぎむ","けんり","ほうりつ","さいばん"], sSrc:"Paying taxes is a citizen's duty.",
   hint:"The noun meaning 'duty' or 'obligation,' something you are required to do."},

  {type:"teach", trg:"はんざい", src:"crime / criminal offense", pos:"noun", gender:null,
   note:"Kanji: 犯罪. はんざいしゃ = criminal.\nはんざいりつ = crime rate.",
   example:"A: にほんははんざいりつがひくいくにとしてしられています。\nB: あんぜんなしゃかいですよね。",
   exampleSrc:"A: Japan is known as a country with a low crime rate.\nB: It is a safe society, isn't it?",
   funFact:"犯罪 uses 犯 (commit/violate) and 罪 (crime/sin). Japan consistently ranks among the safest countries globally, with one of the lowest はんざいりつ in the developed world. The 交番 (こうばん, police box) system, where small police stations dot every neighborhood, is credited as one reason for this safety."},

  {type:"teach", trg:"しこう", src:"enforcement / implementation (of a law)", pos:"noun", gender:null,
   note:"Kanji: 施行. しこうする = to enforce / to implement.\nしこうび = effective date.",
   example:"A: このほうりつはらいねんのよんがつからしこうされます。\nB: じゅんびきかんがありますね。",
   exampleSrc:"A: This law will be enforced starting next April.\nB: There is a preparation period.",
   funFact:"施行 uses 施 (carry out/bestow) and 行 (go/act). When a new law passes the Diet, it does not take effect immediately. The しこうび (enforcement date) is set later, giving society time to prepare. Major legal reforms often have a しこうきかん (enforcement period) of months or even years."},

  {type:"mc", q:"べんごし literally means:", opts:["a person who writes laws","a person who protects through speech","a person who judges crimes","a person who studies justice"], ans:"a person who protects through speech",
   hint:"The kanji break down as s... + protect + p...."},

  {type:"match", pairs:[{trg:"けんり",src:"right"},{trg:"ぎむ",src:"duty"},{trg:"さいばん",src:"trial"},{trg:"べんごし",src:"lawyer"}]},

  {type:"fb", s:"にほんははんざいりつが{1}くにとしてしられています。\n(Japan is known as a country with a low crime rate.)", a:"ひくい", opts:["ひくい","たかい","おおきい","つよい"], sSrc:"Japan is known as a country with a low crime rate.",
   hint:"The adjective meaning 'low,' describing something that is small in degree or level."},

  {type:"match", pairs:[{trg:"ほうりつ",src:"law"},{trg:"けんぽう",src:"constitution"},{trg:"はんざい",src:"crime"},{trg:"しこう",src:"enforcement"}]},

  {type:"mc", q:"ほうりつをまもる means:", opts:["to break the law","to create a law","to obey the law","to study the law"], ans:"to obey the law",
   hint:"まもる means 'to protect' or 'to follow,' so this phrase means acting in accordance with the rules."},

  {type:"fb", s:"あたらしい{1}がこっかいでかけつされました。", a:"ほうりつ", opts:["ほうりつ","けんぽう","さいばん","はんざい"], sSrc:"A new law was passed in the National Diet.",
   hint:"The general term for a rule enacted by parliament that citizens must follow."},
]},

// ═══ L2: Court Proceedings & Justice ═══
{id:"jav2_u31l2", title:"Court & Justice", icon:"🏛️", xp:15, board:true, steps:[
  {type:"intro", title:"Court Proceedings & Justice",
   desc:"Dive deeper into Japan's justice system with vocabulary for court proceedings, sentencing, and legal principles. Words like はんけつ (verdict), しょうこ (evidence), and むざい (not guilty) appear in news reports, crime dramas, and JLPT reading passages about social issues.",
   goals:["Understand courtroom vocabulary","Discuss verdicts and sentencing","Express legal principles and outcomes"]},

  {type:"teach", trg:"はんけつ", src:"verdict / judgment / ruling", pos:"noun", gender:null,
   note:"Kanji: 判決. はんけつをくだす = to hand down a verdict.\nゆうざいはんけつ = guilty verdict.",
   example:"A: さいばんしょがはんけつをくだしました。\nB: けっかはどうでしたか？",
   exampleSrc:"A: The court handed down its verdict.\nB: What was the result?",
   funFact:"判決 uses 判 (judge/stamp) and 決 (decide/settle). In Japan's criminal justice system, the conviction rate exceeds 99%, meaning almost everyone who goes to trial is found guilty. This is partly because prosecutors only bring cases they are extremely confident about, and partly because of the strong role of confessions in Japanese criminal procedure."},

  {type:"teach", trg:"しょうこ", src:"evidence / proof", pos:"noun", gender:null,
   note:"Kanji: 証拠. ぶっしょう = physical evidence.\nしょうこふじゅうぶん = insufficient evidence.",
   example:"A: しょうこがふじゅうぶんでふきそになりました。\nB: それはこうへいなけつろんですね。",
   exampleSrc:"A: Due to insufficient evidence, no charges were filed.\nB: That is a fair conclusion.",
   funFact:"証拠 combines 証 (proof/certificate) and 拠 (base/depend on). In Japanese criminal law, the principle of しょうこさいばんしゅぎ (evidence-based trials) means verdicts must be based on evidence presented in court. However, critics note that confession-based evidence (じはく) has historically played an outsized role in Japanese convictions."},

  {type:"teach", trg:"ゆうざい", src:"guilty", pos:"noun", gender:null,
   note:"Kanji: 有罪. ゆうざいはんけつ = guilty verdict.\nOpposite: むざい (not guilty).",
   example:"A: ひこくにんはゆうざいとはんだんされました。\nB: どのようなけいがかされましたか？",
   exampleSrc:"A: The defendant was found guilty.\nB: What kind of sentence was imposed?",
   funFact:"有罪 uses 有 (have/exist) and 罪 (crime/sin). The character 罪 has the radical 罒 (net) on top, suggesting a net that catches wrongdoers. Japan's extremely high ゆうざい rate has earned it the nickname 'hostage justice' (ひとじちしほう) from critics who argue the system pressures suspects into confessing."},

  {type:"mc", q:"しょうこふじゅうぶん means:", opts:["insufficient evidence","sufficient evidence","overwhelming evidence","fabricated evidence"], ans:"insufficient evidence",
   hint:"ふじゅうぶん means 'not enough' or 'i...,' combined with the word for e...."},

  {type:"teach", trg:"むざい", src:"not guilty / innocent", pos:"noun", gender:null,
   note:"Kanji: 無罪. むざいほうめん = acquittal.\nすいていむざい = presumption of innocence.",
   example:"A: ひこくにんはむざいをしゅちょうしています。\nB: すいていむざいのげんそくをわすれてはいけません。",
   exampleSrc:"A: The defendant is claiming innocence.\nB: We must not forget the principle of presumed innocence.",
   funFact:"無罪 uses 無 (without) and 罪 (crime). Despite the すいていむざい (presumption of innocence) principle, Japan's legal culture has been criticized for assuming guilt early in the process. The long periods of pretrial detention (最大23日, up to 23 days without charges) allow intense interrogation, which reform advocates seek to change."},

  {type:"teach", trg:"ひこくにん", src:"defendant / the accused", pos:"noun", gender:null,
   note:"Kanji: 被告人. Used in criminal cases.\nCivil cases use ひこく (被告, defendant).",
   example:"A: ひこくにんにはべんごしをつけるけんりがあります。\nB: それはけんぽうでほしょうされていますね。",
   exampleSrc:"A: The defendant has the right to have a lawyer.\nB: That is guaranteed by the constitution.",
   funFact:"被告人 breaks down as 被 (receive/suffer), 告 (tell/accuse), and 人 (person). The 'person who receives the accusation.' In Japanese courts, the ひこくにん sits in a specific seat called the ひこくにんせき, facing the judges. The physical layout of Japanese courtrooms follows strict protocols established by law."},

  {type:"teach", trg:"けいばつ", src:"punishment / penalty", pos:"noun", gender:null,
   note:"Kanji: 刑罰. しけい = death penalty.\nちょうえき = imprisonment. ばっきん = fine.",
   example:"A: はんざいのじゅうさにおうじたけいばつがひつようです。\nB: こうへいなりょうけいがたいせつですね。",
   exampleSrc:"A: Punishment appropriate to the severity of the crime is necessary.\nB: Fair sentencing is important.",
   funFact:"刑罰 combines 刑 (punishment/penalty) and 罰 (punishment). Japan is one of the few developed democracies that still uses the しけい (death penalty), carried out by hanging. Prisoners on death row are not told their execution date until the morning of. This practice has been criticized by international human rights organizations."},

  {type:"fb", s:"ひこくにんは{1}をしゅちょうしています。\n(The defendant is claiming innocence.)", a:"むざい", opts:["むざい","ゆうざい","しょうこ","はんけつ"], sSrc:"The defendant is claiming innocence.",
   hint:"The legal term meaning 'not guilty' or 'innocent,' the opposite of ゆうざい."},

  {type:"teach", trg:"きそ", src:"prosecution / indictment", pos:"noun", gender:null,
   note:"Kanji: 起訴. きそする = to prosecute / to indict.\nふきそ = non-prosecution / no charges filed.",
   example:"A: けんさつはようぎしゃをきそしました。\nB: さいばんはいつはじまりますか？",
   exampleSrc:"A: The prosecution indicted the suspect.\nB: When does the trial begin?",
   funFact:"起訴 uses 起 (rise/begin) and 訴 (accuse/sue). Japanese prosecutors have enormous discretion in deciding whether to きそ. The ふきそ (non-prosecution) rate is high because prosecutors prefer not to lose. The 検察審査会 (けんさつしんさかい, Prosecution Review Commission) allows citizens to challenge ふきそ decisions."},

  {type:"teach", trg:"けんさつ", src:"prosecution / public prosecutor's office", pos:"noun", gender:null,
   note:"Kanji: 検察. けんさつかん = prosecutor.\nけんさつちょう = Prosecutor General.",
   example:"A: けんさつがわはちょうえきじゅうねんをもとめました。\nB: べんごがわはどうはんろんしますか？",
   exampleSrc:"A: The prosecution requested ten years imprisonment.\nB: How will the defense counter?",
   funFact:"検察 combines 検 (examine/inspect) and 察 (investigate/guess). Japanese けんさつかん (prosecutors) are among the most powerful legal officials in the country. They can hold suspects for up to 23 days before charging them, conduct interrogations without recording, and decide independently whether to prosecute."},

  {type:"teach", trg:"じょうやく", src:"treaty / convention", pos:"noun", gender:null,
   note:"Kanji: 条約. こくさいじょうやく = international treaty.\nじょうやくをていけつする = to conclude a treaty.",
   example:"A: にほんはおおくのこくさいじょうやくにかめいしています。\nB: じんけんにかんするじょうやくもふくまれますか？",
   exampleSrc:"A: Japan is a member of many international treaties.\nB: Does that include treaties related to human rights?",
   funFact:"条約 uses 条 (article/clause) and 約 (promise/agreement). Japan's most consequential じょうやく is the にちべいあんぽじょうやく (US-Japan Security Treaty), which has shaped Japan's foreign and defense policy since 1960. Treaty ratification requires approval by both houses of the Diet."},

  {type:"mc", q:"きそする means:", opts:["to defend","to prosecute","to acquit","to appeal"], ans:"to prosecute",
   hint:"This verb describes the act of formally bringing criminal charges against someone in court."},

  {type:"match", pairs:[{trg:"ゆうざい",src:"guilty"},{trg:"むざい",src:"not guilty"},{trg:"しょうこ",src:"evidence"},{trg:"はんけつ",src:"verdict"}]},

  {type:"fb", s:"さいばんしょが{1}をくだしました。\n(The court handed down its verdict.)", a:"はんけつ", opts:["はんけつ","しょうこ","きそ","じょうやく"], sSrc:"The court handed down its verdict.",
   hint:"The noun meaning 'verdict' or 'judgment,' the final decision in a court case."},

  {type:"match", pairs:[{trg:"きそ",src:"prosecution"},{trg:"けんさつ",src:"prosecutor's office"},{trg:"けいばつ",src:"punishment"},{trg:"じょうやく",src:"treaty"}]},

  {type:"mc", q:"Japan's criminal conviction rate is approximately:", opts:["50%","75%","Over 99%","90%"], ans:"Over 99%",
   hint:"Japanese prosecutors are extremely selective, only pursuing cases they are confident of winning."},

  {type:"mc", q:"けいばつ means:", opts:["evidence","prosecution","verdict","punishment"], ans:"punishment",
   hint:"The compound of two kanji both relating to penalties, including death by hanging and imprisonment."},

  {type:"mc", q:"こくさいじょうやく means:", opts:["international treaty","international law","international trade","international court"], ans:"international treaty",
   hint:"じょうやく is the word for a formal agreement between nations, requiring Diet ratification."},
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
]};
export default UNIT_31;
