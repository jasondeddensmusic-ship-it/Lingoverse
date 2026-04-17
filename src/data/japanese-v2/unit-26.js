// Japanese V2 Unit 26. ニュース (News & Media)
import BATCH11_L1 from './_batch11_u26_L01.js';
import BATCH10_L1 from './_batch10_u26_L01.js';
import BATCH9_L1 from './_batch9_u26_L01.js';
import BATCH7_L1 from './_batch7_u26_L01.js';
import BATCH8_L1 from './_batch8_u26_L01.js';
import BATCH6_L1 from './_batch6_u26_L01.js';
import BATCH5_L02 from './_batch5_u26_L02.js';
import BATCH5_L01 from './_batch5_u26_L01.js';
import BATCH2_L04 from './_batch2_u26_L04.js';
import BATCH2_L03 from './_batch2_u26_L03.js';
import EXP_L3 from './_temp_u26_expand_L01.js';import EXP_L4 from './_temp_u26_expand_L02.js';import EXP_L5 from './_temp_u26_expand_L03.js';
// Level: B2.1. JLPT N2 aligned.
// 報道, 記事, 特集, 社説, 政策, 国会, formal expressions.

const UNIT_26 = {
  n:26, lang:"ja", srcLang:"en", track:"v2",
  title:"ニュース", sub:"News & Media",
  icon:"📰", level:"B2.1", color:"#7B5EE8",
  lessons:[

// ═══ L1: Media Vocabulary ═══
{id:"jav2_u26l1", title:"Media Vocabulary", icon:"📺", xp:15, board:true, steps:[
  {type:"intro", title:"Media Vocabulary",
   desc:"Reading and understanding Japanese news requires specific vocabulary that differs from everyday conversation. Learn the core nouns of journalism: reporting, articles, features, and editorials. These words unlock NHK broadcasts and newspaper reading.",
   goals:["Use 報道, 記事, 特集, 社説 correctly","Understand news-style sentence structures","Distinguish between types of media content"]},

  {type:"teach", trg:"報道(ほうどう)", src:"news reporting / coverage", pos:"noun", gender:null,
   note:"Kanji: 報道. 報道(ほうどう)する = to report (news).\n報道機関(ほうどうきかん) = news organization.",
   example:"A: この事件(じけん)についての報道(ほうどう)を見(み)ましたか？\nB: はい、今朝(けさ)のニュースでやっていました。",
   exampleSrc:"A: Did you see the reporting on this incident?\nB: Yes, it was on this morning's news.",
   funFact:"報道 combines 報 (inform) and 道 (way/path). Japanese media has a unique system called 記者クラブ (kisha club, press club), where only accredited journalists get access to government briefings. This system has been criticized for limiting press freedom but remains deeply entrenched."},

  {type:"teach", trg:"記事(きじ)", src:"article (newspaper/magazine)", pos:"noun", gender:null,
   note:"Kanji: 記事. 記事(きじ)を書(か)く = to write an article.\n記事(きじ)を読(よ)む = to read an article.",
   example:"A: 面白(おもしろ)い記事(きじ)を見(み)つけました。\nB: 何(なん)の記事(きじ)ですか？",
   exampleSrc:"A: I found an interesting article.\nB: What is the article about?",
   funFact:"記事 uses 記 (record) and 事 (matter). Japanese newspapers are still widely read in print. The big five (朝日, 毎日, 読売, 日経, 産経) have a combined daily circulation of millions. Japan has one of the highest newspaper readership rates in the world, though digital is growing."},

  {type:"teach", trg:"特集(とくしゅう)", src:"special feature / special edition", pos:"noun", gender:null,
   note:"Kanji: 特集. 特集記事(とくしゅうきじ) = feature article.\n特集番組(とくしゅうばんぐみ) = special feature program.",
   example:"A: 今月(こんげつ)の雑誌(ざっし)に環境問題(かんきょうもんだい)の特集(とくしゅう)があります。\nB: 読(よ)んでみたいですね。",
   exampleSrc:"A: This month's magazine has a special feature on environmental issues.\nB: I would like to read it.",
   funFact:"特集 combines 特 (special) and 集 (gather/collect). Japanese magazines love 特集(とくしゅう) issues. Fashion magazines have seasonal 特集(とくしゅう), news magazines have topical ones. TV networks run 特集番組 (special feature programs) on holidays, often 3-4 hours long."},

  {type:"mc", q:"報道機関(ほうどうきかん) means:", opts:["An entity dedicated to covering events","A newspaper article","A television program","A press conference"], ans:"An entity dedicated to covering events",
   hint:"報道(ほうどう) (reporting) + 機関(きかん) (institution) form a compound for bodies producing journalism."},

  {type:"teach", trg:"社説(しゃせつ)", src:"editorial / opinion column", pos:"noun", gender:null,
   note:"Kanji: 社説. 社 (company/newspaper) + 説 (opinion/theory).\nThe newspaper's official stance on an issue.",
   example:"A: 今日(きょう)の社説(しゃせつ)は教育問題(きょういくもんだい)についてでした。\nB: 賛成(さんせい)できる内容(ないよう)でしたか？",
   exampleSrc:"A: Today's editorial was about education issues.\nB: Did you agree with the content?",
   funFact:"社説 literally means 'the company's opinion.' Each major Japanese newspaper has a distinct political leaning visible in its 社説(しゃせつ). Yomiuri Shimbun tends conservative, Asahi Shimbun tends liberal. Reading 社説(しゃせつ) from different papers on the same topic reveals how the same facts can support opposite conclusions."},

  {type:"teach", trg:"事件(じけん)", src:"incident / case / event", pos:"noun", gender:null,
   note:"Kanji: 事件. Used for newsworthy events, especially crimes or scandals.\n事件(じけん)が起(お)きる = an incident occurs.",
   example:"A: 昨夜(さくや)大(おお)きな事件(じけん)が起(お)きました。\nB: 怪我人(けがにん)はいますか？",
   exampleSrc:"A: A major incident occurred last night.\nB: Are there any injuries?",
   funFact:"事件 is the standard news word for incidents, especially negative ones. It contrasts with 事故 (jiko, accident, unintentional). A car crash is 事故(じこ), a robbery is 事件(じけん). The famous phrase 事件は会議室で起きてるんじゃない (the incident is not happening in the meeting room) comes from a popular police drama."},

  {type:"fb", s:"今月(こんげつ)の雑誌(ざっし)に環境問題(かんきょうもんだい)の{1}があります。\n(This month's magazine has a special feature on environmental issues.)", a:"特集(とくしゅう)", opts:["特集(とくしゅう)","社説(しゃせつ)","記事(きじ)","報道(ほうどう)"], sSrc:"This month's magazine has a special feature on environmental issues.",
   hint:"The media term for a dedicated, in-depth coverage of a single topic."},

  {type:"teach", trg:"雑誌(ざっし)", src:"magazine", pos:"noun", gender:null,
   note:"Kanji: 雑誌. 雑誌(ざっし) = general term for any magazine.\n週刊誌(しゅうかんし) = weekly magazine. 月刊誌(げっかんし) = monthly.",
   example:"A: この雑誌(ざっし)は毎月(まいつき)買(か)っています。\nB: 何(なん)の雑誌(ざっし)ですか？",
   exampleSrc:"A: I buy this magazine every month.\nB: What kind of magazine is it?",
   funFact:"雑誌 uses 雑 (miscellaneous) and 誌 (journal), reflecting how magazines cover varied topics. Japan's magazine industry is enormous. Convenience stores devote entire aisles to 雑誌(ざっし). The category of 漫画雑誌 (manga magazines) like Weekly Shonen Jump sells millions weekly."},

  {type:"mc", q:"社説(しゃせつ) is:", opts:["A news reporter","The official stance published by a paper","A magazine subscription","A breaking news alert"], ans:"The official stance published by a paper",
   hint:"社 (company) + 説 (theory) combine to mean the publication's formal position on an issue."},

  {type:"match", pairs:[{trg:"報道(ほうどう)",src:"news reporting"},{trg:"記事(きじ)",src:"article"},{trg:"特集(とくしゅう)",src:"special feature"},{trg:"社説(しゃせつ)",src:"editorial"}]},

  {type:"fb", s:"この事件(じけん)についての{1}を見(み)ましたか？\n(Did you see the reporting on this incident?)", a:"報道(ほうどう)", opts:["報道(ほうどう)","記事(きじ)","社説(しゃせつ)","特集(とくしゅう)"], sSrc:"Did you see the reporting on this incident?",
   hint:"The general term for news coverage or reporting on a topic."},

  {type:"match", pairs:[{trg:"事件(じけん)",src:"incident"},{trg:"雑誌(ざっし)",src:"magazine"},{trg:"報道(ほうどう)",src:"coverage"},{trg:"記事(きじ)",src:"article"}]},
]},

// ═══ L2: Politics & Formal Expressions ═══
{id:"jav2_u26l2", title:"Politics & Formal Style", icon:"🏛️", xp:15, board:true, steps:[
  {type:"intro", title:"Politics & Formal Expressions",
   desc:"News about politics uses vocabulary and grammar structures distinct from daily conversation. Learn the key political terms (policy, parliament) and the formal expressions that characterize news Japanese, including passive voice and nominalized sentences.",
   goals:["Use 政策, 国会 in context","Recognize news-style formal expressions","Understand passive constructions in news"]},

  {type:"teach", trg:"政策(せいさく)", src:"policy", pos:"noun", gender:null,
   note:"Kanji: 政策. 政策(せいさく)を立(た)てる = to formulate policy.\n経済政策(けいざいせいさく) = economic policy.",
   example:"A: 政府(せいふ)は新(あたら)しい環境政策(かんきょうせいさく)を発表(はっぴょう)しました。\nB: 詳(くわ)しい内容(ないよう)はまだ分(わ)かりません。",
   exampleSrc:"A: The government announced a new environmental policy.\nB: The detailed contents are not yet known.",
   funFact:"政策 combines 政 (government/politics) and 策 (plan/strategy). Japanese policy-making is heavily influenced by bureaucrats (官僚, kanryou) who draft most legislation. Politicians often rely on ministry experts for the details. This bureaucrat-led style is sometimes called 官僚主導 (kanryou shudou)."},

  {type:"teach", trg:"国会(こっかい)", src:"parliament / national diet", pos:"noun", gender:null,
   note:"Kanji: 国会. 日本(にほん)の国会(こっかい) = Japan's parliament.\n国会議員(こっかいぎいん) = member of parliament.",
   example:"A: 国会(こっかい)で新(あたら)しい法案(ほうあん)が審議(しんぎ)されています。\nB: いつ可決(かけつ)されますか？",
   exampleSrc:"A: A new bill is being deliberated in parliament.\nB: When will it be decided?",
   funFact:"Japan's parliament is called the 国会 (Diet), from German Reichstag influence during the Meiji era. It has two houses: 衆議院 (House of Representatives) and 参議院 (House of Councillors). The Diet Building in Tokyo, completed in 1936, took 17 years to build and uses only Japanese materials."},

  {type:"teach", trg:"発表(はっぴょう)", src:"announcement / presentation", pos:"noun", gender:null,
   note:"Kanji: 発表. 発表(はっぴょう)する = to announce.\n結果(けっか)を発表(はっぴょう)する = to announce results.",
   example:"A: 明日(あした)の記者会見(きしゃかいけん)で発表(はっぴょう)があるそうです。\nB: どんな内容(ないよう)でしょうか。",
   exampleSrc:"A: I heard there will be an announcement at tomorrow's press conference.\nB: I wonder what the content will be.",
   funFact:"発表 uses 発 (emit/start) and 表 (surface/express). This word bridges business and media: students give 発表(はっぴょう) in class, companies 発表(はっぴょう) products, governments 発表(はっぴょう) policies. The related 記者会見 (kisha kaiken, press conference) is where officials make formal 発表(はっぴょう) to the media."},

  {type:"mc", q:"国会(こっかい)で新(あたら)しい法案(ほうあん)が審議(しんぎ)されている means:", opts:["A proposed law is now under examination in the legislature","The legislature rejected the proposed law","The legislature announced a passed law","The legislature complex was recently built"], ans:"A proposed law is now under examination in the legislature",
   hint:"審議(しんぎ)されている is the passive progressive, showing an ongoing deliberation process."},

  {type:"teach", trg:"法案(ほうあん)", src:"bill / legislative proposal", pos:"noun", gender:null,
   note:"Kanji: 法案. 法 (law) + 案 (proposal).\n法案(ほうあん)を可決(かけつ)する = to pass a bill into law.",
   example:"A: この法案(ほうあん)に賛成(さんせい)ですか？\nB: 私(わたし)は反対(はんたい)の立場(たちば)です。",
   exampleSrc:"A: Are you in favor of this bill?\nB: I am in the opposing position.",
   funFact:"法案 becomes 法律 (houritsu, law) once it passes parliament. The journey from 法案(ほうあん) to 法律(ほうりつ) involves committee review, floor debate, and votes in both houses. Japan's legislative process was modeled on European systems during the Meiji period, blending German and British parliamentary traditions."},

  {type:"teach", trg:"記者会見(きしゃかいけん)", src:"press conference", pos:"noun", gender:null,
   note:"Kanji: 記者会見. 記者(きしゃ) (journalist) + 会見(かいけん) (meeting/interview).\nA formal media event where officials take questions.",
   example:"A: 首相(しゅしょう)が記者会見(きしゃかいけん)を開(ひら)きました。\nB: 何(なに)について話(はな)しましたか？",
   exampleSrc:"A: The prime minister held a press conference.\nB: What did he talk about?",
   funFact:"記者会見 literally means 'journalist meeting.' Japanese press conferences follow strict protocols. Reporters often ask pre-arranged questions. The 記者クラブ system means only club members attend official government conferences. This has been called one of the most closed press systems among democracies."},

  {type:"fb", s:"政府(せいふ)は新(あたら)しい環境(かんきょう){1}を発表(はっぴょう)しました。\n(The government announced a new environmental policy.)", a:"政策(せいさく)", opts:["政策(せいさく)","法案(ほうあん)","報道(ほうどう)","記事(きじ)"], sSrc:"The government announced a new environmental policy.",
   hint:"The noun for a government's plan or strategy on a particular issue."},

  {type:"teach", trg:"賛成(さんせい)", src:"agreement / approval / being in favor", pos:"noun", gender:null,
   note:"Kanji: 賛成. 賛成(さんせい)する = to agree/approve.\nOpposite: 反対(はんたい) (opposition).",
   example:"A: この計画(けいかく)に賛成(さんせい)ですか？\nB: はい、賛成(さんせい)です。",
   exampleSrc:"A: Do you agree with this plan?\nB: Yes, I am in favor.",
   funFact:"賛成 and 反対(はんたい) (反対) are the yin and yang of Japanese debate. In meetings, votes are often taken with a show of hands: 賛成(さんせい)の方(かた)？反対(はんたい)の方(かた)？ (Those in favor? Those opposed?). The culture generally avoids direct 反対(はんたい), preferring softer expressions like ちょっと難(むずか)しいかもしれません (it might be a little difficult)."},

  {type:"mc", q:"法案(ほうあん) is different from 法律(ほうりつ) because:", opts:["法案(ほうあん) is an older law","法案(ほうあん) is a bill not yet passed into law","They mean the same thing","法案(ほうあん) only applies to criminal law"], ans:"法案(ほうあん) is a bill not yet passed into law",
   hint:"The 案 (proposal) kanji indicates this is still at the proposal stage."},

  {type:"match", pairs:[{trg:"政策(せいさく)",src:"policy"},{trg:"国会(こっかい)",src:"parliament"},{trg:"発表(はっぴょう)",src:"announcement"},{trg:"法案(ほうあん)",src:"bill (legislative)"}]},

  {type:"fb", s:"首相(しゅしょう)が{1}を開(ひら)きました。\n(The prime minister held a press conference.)", a:"記者会見(きしゃかいけん)", opts:["記者会見(きしゃかいけん)","発表(はっぴょう)","国会(こっかい)","報道(ほうどう)"], sSrc:"The prime minister held a press conference.",
   hint:"The compound noun for a formal event where officials answer journalists' questions."},

  {type:"match", pairs:[{trg:"記者会見(きしゃかいけん)",src:"press conference"},{trg:"賛成(さんせい)",src:"agreement"},{trg:"事件(じけん)",src:"incident"},{trg:"政策(せいさく)",src:"policy"}]},
]},

,EXP_L3,EXP_L4,EXP_L5
,BATCH2_L03
,BATCH2_L04
,BATCH5_L01
,BATCH5_L02
,BATCH6_L1
,BATCH8_L1
,BATCH7_L1
,BATCH9_L1
,BATCH10_L1
,BATCH11_L1
]};
export default UNIT_26;
