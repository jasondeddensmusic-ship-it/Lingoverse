// Japanese V2 Unit 31. 法律(ほうりつ) (Law & Legal System)
import BATCH11_L1 from './_batch11_u31_L01.js';
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
// 法, 憲法, 裁判, 弁護士, 判決, 権利, 義務.

const UNIT_31 = {
  n:31, lang:"ja", srcLang:"en", track:"v2",
  title:"法律(ほうりつ)", sub:"Law & Legal System",
  icon:"⚖️", level:"B2.3", color:"#7B5EE8",
  lessons:[

// ═══ L1: Legal Foundations & Rights ═══
{id:"jav2_u31l1", title:"Legal Foundations", icon:"📜", xp:15, board:true, steps:[
  {type:"intro", title:"Legal Foundations & Rights",
   desc:"Understanding legal vocabulary is essential for life in Japan and for JLPT N1 reading passages. Japan's legal system blends Western civil law traditions with uniquely Japanese principles. Words like 憲法(けんぽう) (constitution), 権利(けんり) (rights), and 義務(ぎむ) (obligations) form the backbone of legal discourse and appear frequently in news and formal writing.",
   goals:["Use core legal vocabulary accurately","Discuss rights and obligations in Japanese","Understand the structure of Japan's legal system"]},

  {type:"teach", trg:"法律(ほうりつ)", src:"law / statute", pos:"noun", gender:null,
   note:"Kanji: 法律. 法律(ほうりつ)を守(まも)る = to obey the law.\n法律(ほうりつ)に反(はん)する = to violate the law.",
   example:"A: 新(あたら)しい法律(ほうりつ)が来月(らいげつ)施行(しこう)されます。\nB: どのような内容(ないよう)ですか？\nA: それはいつごろから始(はじ)まったのですか？\nB: 数年前(すうねんまえ)からですが、最近(さいきん)特(とく)に注目(ちゅうもく)されています。\nA: 今後(こんご)どうなると思(おも)いますか？\nB: さらに発展(はってん)すると予想(よそう)されています。",
   exampleSrc:"A: A new law will take effect next month.\nB: What kind of content does it have?\nA: When did that start?\nB: It started a few years ago, but it has been getting particular attention recently.\nA: What do you think will happen going forward?\nB: It is expected to develop further.",
   funFact:"法律 combines 法 (law/method) and 律 (rule/regulate). The character 法 originally depicted water flowing in a fixed channel, suggesting rules that guide behavior like banks guide a river. Japan's modern legal system was established during the Meiji era, heavily influenced by German and French civil law."},

  {type:"teach", trg:"憲法(けんぽう)", src:"constitution", pos:"noun", gender:null,
   note:"Kanji: 憲法. 日本国憲法(にほんこくけんぽう) = Constitution of Japan.\n憲法改正(けんぽうかいせい) = constitutional amendment.",
   example:"A: 日本国憲法(にほんこくけんぽう)は第九条(だいきゅうじょう)が有名(ゆうめい)です。\nB: 平和主義(へいわしゅぎ)の条項(じょうこう)ですね。\nA: 何(なに)か問題(もんだい)はありませんでしたか？\nB: いくつか課題(かだい)がありましたが、解決(かいけつ)しました。\nA: どのように解決(かいけつ)したのですか？\nB: チーム全体(ぜんたい)で話(はな)し合(あ)って、最善(さいぜん)の方法(ほうほう)を見(み)つけました。",
   exampleSrc:"A: Article 9 of Japan's Constitution is famous.\nB: That is the pacifism clause.\nA: Were there any problems?\nB: There were some issues, but we resolved them.\nA: How did you resolve them?\nB: We discussed it as a whole team and found the best method.",
   funFact:"Japan's postwar Constitution (1947) is unique for Article 9, which renounces war and prohibits maintaining military forces. It has never been amended since adoption, making it one of the oldest unamended constitutions in the world. The debate over 憲法改正(けんぽうかいせい) (amendment) remains one of Japan's most divisive political issues."},

  {type:"teach", trg:"権利(けんり)", src:"right / legal right", pos:"noun", gender:null,
   note:"Kanji: 権利. 基本的権利(きほんてきけんり) = fundamental rights.\n権利(けんり)を主張(しゅちょう)する = to assert one's rights.",
   example:"A: すべての人(ひと)に表現(ひょうげん)の自由(じゆう)の権利(けんり)があります。\nB: しかし、他人(たにん)の権利(けんり)も尊重(そんちょう)しなければなりません。\nA: その点(てん)について、もう少(すこ)し説明(せつめい)していただけますか？\nB: もちろんです。重要(じゅうよう)なのは準備(じゅんび)と計画(けいかく)です。\nA: 準備(じゅんび)にはどのくらい時間(じかん)がかかりますか？\nB: 通常(つうじょう)、一週間(いっしゅうかん)から二週間(にしゅうかん)程度(ていど)です。",
   exampleSrc:"A: All people have the right to freedom of expression.\nB: However, we must also respect the rights of others.\nA: Could you explain that point a bit more?\nB: Of course. What is important is preparation and planning.\nA: How long does preparation take?\nB: Usually about one to two weeks.",
   funFact:"権利 uses 権 (authority/power) and 利 (benefit/advantage). The concept of individual 権利(けんり) was introduced to Japan during the Meiji era. Before that, Japanese society emphasized 義務 (ぎむ, duty) over rights. The tension between 権利(けんり) and 義務(ぎむ) continues to shape Japanese legal and social philosophy."},

  {type:"mc", q:"憲法(けんぽう) means:", opts:["constitution","criminal law","court ruling","lawyer"], ans:"constitution",
   hint:"The foundational legal document that establishes the basic principles and structure of government."},

  {type:"teach", trg:"義務(ぎむ)", src:"duty / obligation", pos:"noun", gender:null,
   note:"Kanji: 義務. 義務教育(ぎむきょういく) = compulsory education.\n義務(ぎむ)を果(は)たす = to fulfill one's duty.",
   example:"A: 納税(のうぜい)は国民(こくみん)の義務(ぎむ)です。\nB: 日本(にほん)では教育(きょういく)も義務(ぎむ)ですよね。\nA: それは素晴(すば)らしい結果(けっか)ですね。\nB: ありがとうございます。チーム全員(ぜんいん)の努力(どりょく)のおかげです。\nA: 今後(こんご)の目標(もくひょう)は何(なん)ですか？\nB: さらに品質(ひんしつ)を向上(こうじょう)させることです。",
   exampleSrc:"A: Paying taxes is a citizen's duty.\nB: In Japan, education is also compulsory, right?\nA: That is an excellent result.\nB: Thank you. It is thanks to the effort of the whole team.\nA: What are the future goals?\nB: To further improve quality.",
   funFact:"義務 combines 義 (righteousness/justice) and 務 (task/duty). Japan's Constitution specifies three major 義務: 納税(のうぜい) (paying taxes), 勤労(きんろう) (working), and 教育(きょういく)を受(う)けさせる (having children receive education). These three duties are taught to every Japanese schoolchild."},

  {type:"teach", trg:"裁判(さいばん)", src:"trial / court case", pos:"noun", gender:null,
   note:"Kanji: 裁判. 裁判所(さいばんしょ) = court (building).\n裁判官(さいばんかん) = judge. 裁判員制度(さいばんいんせいど) = lay judge system.",
   example:"A: 裁判(さいばん)は来週(らいしゅう)から始(はじ)まります。\nB: 弁護士(べんごし)はもう決(き)まりましたか？\nA: 他(ほか)に何(なに)か気(き)をつけることはありますか？\nB: はい、期限(きげん)を守(まも)ることが一番(いちばん)大切(たいせつ)です。\nA: 期限(きげん)に間(ま)に合(あ)わない場合(ばあい)はどうしますか？\nB: 早(はや)めに上司(じょうし)に相談(そうだん)して、調整(ちょうせい)をお願(ねが)いします。",
   exampleSrc:"A: The trial starts next week.\nB: Has a lawyer been decided yet?\nA: Is there anything else to be careful about?\nB: Yes, meeting deadlines is the most important thing.\nA: What do you do if you cannot meet the deadline?\nB: Consult your supervisor early and ask for an adjustment.",
   funFact:"裁判 uses 裁 (judge/cut) and 判 (judge/stamp). Japan introduced the 裁判員制度(さいばんいんせいど) (lay judge system) in 2009, allowing ordinary citizens to participate in serious criminal trials alongside professional judges. This was a major reform in a system that had been entirely judge-driven for over a century."},

  {type:"teach", trg:"弁護士(べんごし)", src:"lawyer / attorney", pos:"noun", gender:null,
   note:"Kanji: 弁護士. One of Japan's most prestigious professions.\nPassing the bar exam is extremely difficult.",
   example:"A: 弁護士(べんごし)に相談(そうだん)したほうがいいですよ。\nB: 知(し)っている弁護士(べんごし)がいないのですが。\nA: その件(けん)について進捗(しんちょく)はありますか？\nB: はい、順調(じゅんちょう)に進(すす)んでいます。\nA: 完了(かんりょう)の見込(みこ)みはいつごろですか？\nB: 来月(らいげつ)の初(はじ)めには完了(かんりょう)できる予定(よてい)です。",
   exampleSrc:"A: You should consult a lawyer.\nB: But I do not know any lawyers.\nA: Is there any progress on that matter?\nB: Yes, it is progressing smoothly.\nA: When is it expected to be completed?\nB: It is scheduled to be completed by the beginning of next month.",
   funFact:"弁護士 uses 弁 (speech/valve), 護 (protect), and 士 (person/samurai). A lawyer is literally 'a person who protects through speech.' The Japanese bar exam (司法試験(しほうしけん)) is one of the hardest professional exams in the world, with a pass rate historically below 3%. Recent reforms have increased it, but it remains extremely competitive."},

  {type:"fb", s:"納税(のうぜい)は国民(こくみん)の{1}です。\n(Paying taxes is a citizen's duty.)", a:"義務(ぎむ)", opts:["義務(ぎむ)","権利(けんり)","法律(ほうりつ)","裁判(さいばん)"], sSrc:"Paying taxes is a citizen's duty.",
   hint:"The noun meaning 'duty' or 'obligation,' something you are required to do."},

  {type:"teach", trg:"犯罪(はんざい)", src:"crime / criminal offense", pos:"noun", gender:null,
   note:"Kanji: 犯罪. 犯罪者(はんざいしゃ) = criminal.\n犯罪率(はんざいりつ) = crime rate.",
   example:"A: 日本(にほん)は犯罪率(はんざいりつ)が低(ひく)い国(くに)として知(し)られています。\nB: 安全(あんぜん)な社会(しゃかい)ですよね。\nA: 以前(いぜん)と比(くら)べてどう変(か)わりましたか？\nB: かなり改善(かいぜん)されました。効率(こうりつ)が上(あ)がりました。\nA: その改善(かいぜん)の要因(よういん)は何(なん)ですか？\nB: 新(あたら)しいシステムの導入(どうにゅう)が大(おお)きかったです。",
   exampleSrc:"A: Japan is known as a country with a low crime rate.\nB: It is a safe society, isn't it?\nA: How has it changed compared to before?\nB: It has improved considerably. Efficiency has increased.\nA: What was the cause of that improvement?\nB: The introduction of the new system was a big factor.",
   funFact:"犯罪 uses 犯 (commit/violate) and 罪 (crime/sin). Japan consistently ranks among the safest countries globally, with one of the lowest 犯罪率(はんざいりつ) in the developed world. The 交番 (こうばん, police box) system, where small police stations dot every neighborhood, is credited as one reason for this safety."},

  {type:"teach", trg:"施行(しこう)", src:"enforcement / implementation (of a law)", pos:"noun", gender:null,
   note:"Kanji: 施行. 施行(しこう)する = to enforce / to implement.\n施行日(しこうび) = effective date.",
   example:"A: この法律(ほうりつ)は来年(らいねん)の四月(しがつ)から施行(しこう)されます。\nB: 準備期間(じゅんびきかん)がありますね。\nA: ご意見(いけん)をお聞(き)かせいただけますか？\nB: 私(わたし)の考(かんが)えでは、もう少(すこ)し検討(けんとう)が必要(ひつよう)だと思(おも)います。\nA: どの点(てん)を検討(けんとう)すべきでしょうか？\nB: 予算(よさん)と人員(じんいん)の面(めん)をもう一度(いちど)見直(みなお)す必要(ひつよう)があります。",
   exampleSrc:"A: This law will be enforced starting next April.\nB: There is a preparation period.\nA: Could you share your opinion?\nB: In my opinion, I think a bit more consideration is needed.\nA: Which points should be considered?\nB: We need to review the budget and staffing aspects once more.",
   funFact:"施行 uses 施 (carry out/bestow) and 行 (go/act). When a new law passes the Diet, it does not take effect immediately. The 施行日(しこうび) (enforcement date) is set later, giving society time to prepare. Major legal reforms often have a 施行期間(しこうきかん) (enforcement period) of months or even years."},

  {type:"mc", q:"弁護士(べんごし) literally means:", opts:["a person who writes laws","a person who protects through speech","a person who judges crimes","a person who studies justice"], ans:"a person who protects through speech",
   hint:"The kanji break down as s... + protect + p...."},

  {type:"match", pairs:[{trg:"権利(けんり)",src:"right"},{trg:"義務(ぎむ)",src:"duty"},{trg:"裁判(さいばん)",src:"trial"},{trg:"弁護士(べんごし)",src:"lawyer"}]},

  {type:"fb", s:"日本(にほん)は犯罪率(はんざいりつ)が{1}国(くに)として知(し)られています。\n(Japan is known as a country with a low crime rate.)", a:"低(ひく)い", opts:["低(ひく)い","高(たか)い","大(おお)きい","強(つよ)い"], sSrc:"Japan is known as a country with a low crime rate.",
   hint:"The adjective meaning 'low,' describing something that is small in degree or level."},

  {type:"match", pairs:[{trg:"法律(ほうりつ)",src:"law"},{trg:"憲法(けんぽう)",src:"constitution"},{trg:"犯罪(はんざい)",src:"crime"},{trg:"施行(しこう)",src:"enforcement"}]},

  {type:"mc", q:"法律(ほうりつ)を守(まも)る means:", opts:["to break the law","to create a law","to obey the law","to study the law"], ans:"to obey the law",
   hint:"守(まも)る means 'to protect' or 'to follow,' so this phrase means acting in accordance with the rules."},

  {type:"fb", s:"新(あたら)しい{1}が国会(こっかい)で可決(かけつ)されました。", a:"法律(ほうりつ)", opts:["法律(ほうりつ)","憲法(けんぽう)","裁判(さいばん)","犯罪(はんざい)"], sSrc:"A new law was passed in the National Diet.",
   hint:"The general term for a rule enacted by parliament that citizens must follow."},
]},

// ═══ L2: Court Proceedings & Justice ═══
{id:"jav2_u31l2", title:"Court & Justice", icon:"🏛️", xp:15, board:true, steps:[
  {type:"intro", title:"Court Proceedings & Justice",
   desc:"Dive deeper into Japan's justice system with vocabulary for court proceedings, sentencing, and legal principles. Words like 判決(はんけつ) (verdict), 証拠(しょうこ) (evidence), and 無罪(むざい) (not guilty) appear in news reports, crime dramas, and JLPT reading passages about social issues.",
   goals:["Understand courtroom vocabulary","Discuss verdicts and sentencing","Express legal principles and outcomes"]},

  {type:"teach", trg:"判決(はんけつ)", src:"verdict / judgment / ruling", pos:"noun", gender:null,
   note:"Kanji: 判決. 判決(はんけつ)を下(くだ)す = to hand down a verdict.\n有罪判決(ゆうざいはんけつ) = guilty verdict.",
   example:"A: 裁判所(さいばんしょ)が判決(はんけつ)を下(くだ)しました。\nB: 結果(けっか)はどうでしたか？\nA: 何(なに)か良(よ)い方法(ほうほう)はありませんか？\nB: 一(ひと)つ提案(ていあん)があります。段階的(だんかいてき)に進(すす)めてはどうでしょうか。\nA: 段階的(だんかいてき)に、というのはどういうことですか？\nB: まず小規模(しょうきぼ)で試(ため)してから、徐々(じょじょ)に拡大(かくだい)するということです。",
   exampleSrc:"A: The court handed down its verdict.\nB: What was the result?\nA: Is there a good method?\nB: I have one suggestion. How about proceeding step by step?\nA: What do you mean by step by step?\nB: It means trying it on a small scale first, then gradually expanding.",
   funFact:"判決 uses 判 (judge/stamp) and 決 (decide/settle). In Japan's criminal justice system, the conviction rate exceeds 99%, meaning almost everyone who goes to trial is found guilty. This is partly because prosecutors only bring cases they are extremely confident about, and partly because of the strong role of confessions in Japanese criminal procedure."},

  {type:"teach", trg:"証拠(しょうこ)", src:"evidence / proof", pos:"noun", gender:null,
   note:"Kanji: 証拠. 物証(ぶっしょう) = physical evidence.\n証拠不十分(しょうこふじゅうぶん) = insufficient evidence.",
   example:"A: 証拠(しょうこ)が不十分(ふじゅうぶん)で不起訴(ふきそ)になりました。\nB: それは公平(こうへい)な結論(けつろん)ですね。\nA: この問題(もんだい)をどう思(おも)いますか？\nB: 複雑(ふくざつ)な問題(もんだい)ですが、解決策(かいけつさく)はあると思(おも)います。\nA: どのような解決策(かいけつさく)を考(かんが)えていますか？\nB: 関係者(かんけいしゃ)全員(ぜんいん)で話(はな)し合(あ)いの場(ば)を設(もう)けることが第一歩(だいいっぽ)です。",
   exampleSrc:"A: Due to insufficient evidence, no charges were filed.\nB: That is a fair conclusion.\nA: What do you think about this issue?\nB: It is a complex issue, but I think there are solutions.\nA: What kind of solutions are you thinking of?\nB: The first step is to set up a discussion forum for all stakeholders.",
   funFact:"証拠 combines 証 (proof/certificate) and 拠 (base/depend on). In Japanese criminal law, the principle of 証拠裁判主義(しょうこさいばんしゅぎ) (evidence-based trials) means verdicts must be based on evidence presented in court. However, critics note that confession-based evidence (自白(じはく)) has historically played an outsized role in Japanese convictions."},

  {type:"teach", trg:"有罪(ゆうざい)", src:"guilty", pos:"noun", gender:null,
   note:"Kanji: 有罪. 有罪判決(ゆうざいはんけつ) = guilty verdict.\nOpposite: 無罪(むざい) (not guilty).",
   example:"A: 被告人(ひこくにん)は有罪(ゆうざい)と判断(はんだん)されました。\nB: どのような刑(けい)が科(か)されましたか？\nA: 最近(さいきん)の動向(どうこう)はいかがですか？\nB: 全体的(ぜんたいてき)には好調(こうちょう)ですが、一部(いちぶ)課題(かだい)もあります。\nA: どのような課題(かだい)がありますか？\nB: 人材(じんざい)の確保(かくほ)が最(もっと)も大(おお)きな課題(かだい)です。",
   exampleSrc:"A: The defendant was found guilty.\nB: What kind of sentence was imposed?\nA: How are the recent trends?\nB: Overall things are going well, but there are some issues.\nA: What kinds of issues are there?\nB: Securing human resources is the biggest challenge.",
   funFact:"有罪 uses 有 (have/exist) and 罪 (crime/sin). The character 罪 has the radical 罒 (net) on top, suggesting a net that catches wrongdoers. Japan's extremely high 有罪(ゆうざい) rate has earned it the nickname 'hostage justice' (人質司法(ひとじちしほう)) from critics who argue the system pressures suspects into confessing."},

  {type:"mc", q:"証拠不十分(しょうこふじゅうぶん) means:", opts:["insufficient evidence","sufficient evidence","overwhelming evidence","fabricated evidence"], ans:"insufficient evidence",
   hint:"不十分(ふじゅうぶん) means 'not enough' or 'i...,' combined with the word for e...."},

  {type:"teach", trg:"無罪(むざい)", src:"not guilty / innocent", pos:"noun", gender:null,
   note:"Kanji: 無罪. 無罪放免(むざいほうめん) = acquittal.\n推定無罪(すいていむざい) = presumption of innocence.",
   example:"A: 被告人(ひこくにん)は無罪(むざい)を主張(しゅちょう)しています。\nB: 推定無罪(すいていむざい)の原則(げんそく)を忘(わす)れてはいけません。\nA: それは興味深(きょうみぶか)いですね。\nB: ええ、日本(にほん)ならではの特徴(とくちょう)だと思(おも)います。\nA: 海外(かいがい)ではどうなのでしょうか？\nB: 国(くに)によって異(こと)なりますが、共通(きょうつう)する部分(ぶぶん)もあります。",
   exampleSrc:"A: The defendant is claiming innocence.\nB: We must not forget the principle of presumed innocence.\nA: That is interesting.\nB: Yes, I think it is a characteristic unique to Japan.\nA: I wonder how it is overseas?\nB: It differs by country, but there are also common aspects.",
   funFact:"無罪 uses 無 (without) and 罪 (crime). Despite the 推定無罪(すいていむざい) (presumption of innocence) principle, Japan's legal culture has been criticized for assuming guilt early in the process. The long periods of pretrial detention (最大23日, up to 23 days without charges) allow intense interrogation, which reform advocates seek to change."},

  {type:"teach", trg:"被告人(ひこくにん)", src:"defendant / the accused", pos:"noun", gender:null,
   note:"Kanji: 被告人. Used in criminal cases.\nCivil cases use 被告(ひこく) (被告, defendant).",
   example:"A: 被告人(ひこくにん)には弁護士(べんごし)をつける権利(けんり)があります。\nB: それは憲法(けんぽう)で保障(ほしょう)されていますね。\nA: その経験(けいけん)から何(なに)を学(まな)びましたか？\nB: 事前(じぜん)の準備(じゅんび)がいかに重要(じゅうよう)かを学(まな)びました。\nA: 具体的(ぐたいてき)にどんな準備(じゅんび)をすべきですか？\nB: まず情報収集(じょうほうしゅうしゅう)をして、それから計画(けいかく)を練(ね)ることが大事(だいじ)です。",
   exampleSrc:"A: The defendant has the right to have a lawyer.\nB: That is guaranteed by the constitution.\nA: What did you learn from that experience?\nB: I learned how important advance preparation is.\nA: What kind of preparation should be done specifically?\nB: First, gather information, then it is important to develop a plan.",
   funFact:"被告人 breaks down as 被 (receive/suffer), 告 (tell/accuse), and 人 (person). The 'person who receives the accusation.' In Japanese courts, the 被告人(ひこくにん) sits in a specific seat called the 被告人席(ひこくにんせき), facing the judges. The physical layout of Japanese courtrooms follows strict protocols established by law."},

  {type:"teach", trg:"刑罰(けいばつ)", src:"punishment / penalty", pos:"noun", gender:null,
   note:"Kanji: 刑罰. 死刑(しけい) = death penalty.\n懲役(ちょうえき) = imprisonment. 罰金(ばっきん) = fine.",
   example:"A: 犯罪(はんざい)の重(おも)さに応(おう)じた刑罰(けいばつ)が必要(ひつよう)です。\nB: 公平(こうへい)な量刑(りょうけい)が大切(たいせつ)ですね。\nA: 今後(こんご)の展望(てんぼう)についてお聞(き)かせください。\nB: 今後(こんご)はさらに国際化(こくさいか)が進(すす)むと思(おも)います。\nA: それに対(たい)してどのような対策(たいさく)が必要(ひつよう)ですか？\nB: 語学力(ごがくりょく)の向上(こうじょう)と異文化理解(いぶんかりかい)が不可欠(ふかけつ)です。",
   exampleSrc:"A: Punishment appropriate to the severity of the crime is necessary.\nB: Fair sentencing is important.\nA: Please tell me about future prospects.\nB: I think internationalization will progress further going forward.\nA: What measures are needed for that?\nB: Improving language skills and cross-cultural understanding are essential.",
   funFact:"刑罰 combines 刑 (punishment/penalty) and 罰 (punishment). Japan is one of the few developed democracies that still uses the 死刑(しけい) (death penalty), carried out by hanging. Prisoners on death row are not told their execution date until the morning of. This practice has been criticized by international human rights organizations."},

  {type:"fb", s:"被告人(ひこくにん)は{1}を主張(しゅちょう)しています。\n(The defendant is claiming innocence.)", a:"無罪(むざい)", opts:["無罪(むざい)","有罪(ゆうざい)","証拠(しょうこ)","判決(はんけつ)"], sSrc:"The defendant is claiming innocence.",
   hint:"The legal term meaning 'not guilty' or 'innocent,' the opposite of 有罪(ゆうざい)."},

  {type:"teach", trg:"起訴(きそ)", src:"prosecution / indictment", pos:"noun", gender:null,
   note:"Kanji: 起訴. 起訴(きそ)する = to prosecute / to indict.\n不起訴(ふきそ) = non-prosecution / no charges filed.",
   example:"A: 検察(けんさつ)は容疑者(ようぎしゃ)を起訴(きそ)しました。\nB: 裁判(さいばん)はいつ始(はじ)まりますか？\nA: それは予想外(よそうがい)の結果(けっか)ですね。\nB: はい、私(わたし)も驚(おどろ)きました。原因(げんいん)を調(しら)べています。\nA: いつごろ原因(げんいん)が分(わ)かりそうですか？\nB: 今週中(こんしゅうちゅう)には分析(ぶんせき)結果(けっか)が出(で)る予定(よてい)です。",
   exampleSrc:"A: The prosecution indicted the suspect.\nB: When does the trial begin?\nA: That is an unexpected result.\nB: Yes, I was surprised too. We are investigating the cause.\nA: When do you think you will know the cause?\nB: The analysis results are expected to come out by the end of this week.",
   funFact:"起訴 uses 起 (rise/begin) and 訴 (accuse/sue). Japanese prosecutors have enormous discretion in deciding whether to 起訴(きそ). The 不起訴(ふきそ) (non-prosecution) rate is high because prosecutors prefer not to lose. The 検察審査会 (けんさつしんさかい, Prosecution Review Commission) allows citizens to challenge 不起訴(ふきそ) decisions."},

  {type:"teach", trg:"検察(けんさつ)", src:"prosecution / public prosecutor's office", pos:"noun", gender:null,
   note:"Kanji: 検察. 検察官(けんさつかん) = prosecutor.\n検察庁(けんさつちょう) = Prosecutor General.",
   example:"A: 検察側(けんさつがわ)は懲役(ちょうえき)十年(じゅうねん)を求(もと)めました。\nB: 弁護側(べんごがわ)はどう反論(はんろん)しますか？\nA: その分野(ぶんや)についてどのくらいご存(ぞん)じですか？\nB: 専門(せんもん)ではありませんが、基本的(きほんてき)な知識(ちしき)はあります。\nA: もっと詳(くわ)しく知(し)りたい場合(ばあい)は、どうすればいいですか？\nB: 専門家(せんもんか)に相談(そうだん)するか、関連(かんれん)の書籍(しょせき)を読(よ)むことをお勧(すす)めします。",
   exampleSrc:"A: The prosecution requested ten years imprisonment.\nB: How will the defense counter?\nA: How much do you know about that field?\nB: It is not my specialty, but I have basic knowledge.\nA: If I want to know more in detail, what should I do?\nB: I recommend consulting a specialist or reading related books.",
   funFact:"検察 combines 検 (examine/inspect) and 察 (investigate/guess). Japanese 検察官(けんさつかん) (prosecutors) are among the most powerful legal officials in the country. They can hold suspects for up to 23 days before charging them, conduct interrogations without recording, and decide independently whether to prosecute."},

  {type:"teach", trg:"条約(じょうやく)", src:"treaty / convention", pos:"noun", gender:null,
   note:"Kanji: 条約. 国際条約(こくさいじょうやく) = international treaty.\n条約(じょうやく)を締結(ていけつ)する = to conclude a treaty.",
   example:"A: 日本(にほん)は多(おお)くの国際条約(こくさいじょうやく)に加盟(かめい)しています。\nB: 人権(じんけん)に関(かん)する条約(じょうやく)も含(ふく)まれますか？\nA: どのような影響(えいきょう)がありましたか？\nB: 社会全体(しゃかいぜんたい)に大(おお)きな影響(えいきょう)を与(あた)えました。\nA: 良(よ)い影響(えいきょう)ですか、悪(わる)い影響(えいきょう)ですか？\nB: 両方(りょうほう)あります。メリットもデメリットもあります。",
   exampleSrc:"A: Japan is a member of many international treaties.\nB: Does that include treaties related to human rights?\nA: What kind of impact was there?\nB: It had a big impact on society as a whole.\nA: A good impact or a bad impact?\nB: Both. There are both merits and demerits.",
   funFact:"条約 uses 条 (article/clause) and 約 (promise/agreement). Japan's most consequential 条約(じょうやく) is the 日米安保条約(にちべいあんぽじょうやく) (US-Japan Security Treaty), which has shaped Japan's foreign and defense policy since 1960. Treaty ratification requires approval by both houses of the Diet."},

  {type:"mc", q:"起訴(きそ)する means:", opts:["to defend","to prosecute","to acquit","to appeal"], ans:"to prosecute",
   hint:"This verb describes the act of formally bringing criminal charges against someone in court."},

  {type:"match", pairs:[{trg:"有罪(ゆうざい)",src:"guilty"},{trg:"無罪(むざい)",src:"not guilty"},{trg:"証拠(しょうこ)",src:"evidence"},{trg:"判決(はんけつ)",src:"verdict"}]},

  {type:"fb", s:"裁判所(さいばんしょ)が{1}を下(くだ)しました。\n(The court handed down its verdict.)", a:"判決(はんけつ)", opts:["判決(はんけつ)","証拠(しょうこ)","起訴(きそ)","条約(じょうやく)"], sSrc:"The court handed down its verdict.",
   hint:"The noun meaning 'verdict' or 'judgment,' the final decision in a court case."},

  {type:"match", pairs:[{trg:"起訴(きそ)",src:"prosecution"},{trg:"検察(けんさつ)",src:"prosecutor's office"},{trg:"刑罰(けいばつ)",src:"punishment"},{trg:"条約(じょうやく)",src:"treaty"}]},

  {type:"mc", q:"Japan's criminal conviction rate is approximately:", opts:["50%","75%","Over 99%","90%"], ans:"Over 99%",
   hint:"Japanese prosecutors are extremely selective, only pursuing cases they are confident of winning."},

  {type:"mc", q:"刑罰(けいばつ) means:", opts:["evidence","prosecution","verdict","punishment"], ans:"punishment",
   hint:"The compound of two kanji both relating to penalties, including death by hanging and imprisonment."},

  {type:"mc", q:"国際条約(こくさいじょうやく) means:", opts:["international treaty","international law","international trade","international court"], ans:"international treaty",
   hint:"条約(じょうやく) is the word for a formal agreement between nations, requiring Diet ratification."},
{type:"match",pairs:[{trg:"被告人(ひこくにん)",src:"defendant / the accused"}]}]},BATCH2_L01
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
export default UNIT_31;
