// Japanese V2 Unit 26. ニュース (News & Media)
import BATCH6_L1 from './_batch6_u26_L01.js';
import BATCH5_L02 from './_batch5_u26_L02.js';
import BATCH5_L01 from './_batch5_u26_L01.js';
import BATCH2_L04 from './_batch2_u26_L04.js';
import BATCH2_L03 from './_batch2_u26_L03.js';
import EXP_L3 from './_temp_u26_expand_L01.js';import EXP_L4 from './_temp_u26_expand_L02.js';import EXP_L5 from './_temp_u26_expand_L03.js';
// Level: B2.1. JLPT N2 aligned.
// ほうどう, きじ, とくしゅう, しゃせつ, せいさく, こっかい, formal expressions.

const UNIT_26 = {
  n:26, lang:"ja", srcLang:"en", track:"v2",
  title:"ニュース", sub:"News & Media",
  icon:"📰", level:"B2.1", color:"#7B5EE8",
  lessons:[

// ═══ L1: Media Vocabulary ═══
{id:"jav2_u26l1", title:"Media Vocabulary", icon:"📺", xp:15, board:true, steps:[
  {type:"intro", title:"Media Vocabulary",
   desc:"Reading and understanding Japanese news requires specific vocabulary that differs from everyday conversation. Learn the core nouns of journalism: reporting, articles, features, and editorials. These words unlock NHK broadcasts and newspaper reading.",
   goals:["Use ほうどう, きじ, とくしゅう, しゃせつ correctly","Understand news-style sentence structures","Distinguish between types of media content"]},

  {type:"teach", trg:"ほうどう", src:"news reporting / coverage", pos:"noun", gender:null,
   note:"Kanji: 報道. ほうどうする = to report (news).\nほうどうきかん = news organization.",
   example:"A: このじけんについてのほうどうをみましたか？\nB: はい、けさのニュースでやっていました。",
   exampleSrc:"A: Did you see the reporting on this incident?\nB: Yes, it was on this morning's news.",
   funFact:"報道 combines 報 (inform) and 道 (way/path). Japanese media has a unique system called 記者クラブ (kisha club, press club), where only accredited journalists get access to government briefings. This system has been criticized for limiting press freedom but remains deeply entrenched."},

  {type:"teach", trg:"きじ", src:"article (newspaper/magazine)", pos:"noun", gender:null,
   note:"Kanji: 記事. きじをかく = to write an article.\nきじをよむ = to read an article.",
   example:"A: おもしろいきじをみつけました。\nB: なんのきじですか？",
   exampleSrc:"A: I found an interesting article.\nB: What is the article about?",
   funFact:"記事 uses 記 (record) and 事 (matter). Japanese newspapers are still widely read in print. The big five (朝日, 毎日, 読売, 日経, 産経) have a combined daily circulation of millions. Japan has one of the highest newspaper readership rates in the world, though digital is growing."},

  {type:"teach", trg:"とくしゅう", src:"special feature / special edition", pos:"noun", gender:null,
   note:"Kanji: 特集. とくしゅうきじ = feature article.\nとくしゅうばんぐみ = special feature program.",
   example:"A: こんげつのざっしにかんきょうもんだいのとくしゅうがあります。\nB: よんでみたいですね。",
   exampleSrc:"A: This month's magazine has a special feature on environmental issues.\nB: I would like to read it.",
   funFact:"特集 combines 特 (special) and 集 (gather/collect). Japanese magazines love とくしゅう issues. Fashion magazines have seasonal とくしゅう, news magazines have topical ones. TV networks run とくしゅう番組 (special feature programs) on holidays, often 3-4 hours long."},

  {type:"mc", q:"ほうどうきかん means:", opts:["An entity dedicated to covering events","A newspaper article","A television program","A press conference"], ans:"An entity dedicated to covering events",
   hint:"ほうどう (reporting) + きかん (institution) form a compound for bodies producing journalism."},

  {type:"teach", trg:"しゃせつ", src:"editorial / opinion column", pos:"noun", gender:null,
   note:"Kanji: 社説. 社 (company/newspaper) + 説 (opinion/theory).\nThe newspaper's official stance on an issue.",
   example:"A: きょうのしゃせつはきょういくもんだいについてでした。\nB: さんせいできるないようでしたか？",
   exampleSrc:"A: Today's editorial was about education issues.\nB: Did you agree with the content?",
   funFact:"社説 literally means 'the company's opinion.' Each major Japanese newspaper has a distinct political leaning visible in its しゃせつ. Yomiuri Shimbun tends conservative, Asahi Shimbun tends liberal. Reading しゃせつ from different papers on the same topic reveals how the same facts can support opposite conclusions."},

  {type:"teach", trg:"じけん", src:"incident / case / event", pos:"noun", gender:null,
   note:"Kanji: 事件. Used for newsworthy events, especially crimes or scandals.\nじけんがおきる = an incident occurs.",
   example:"A: さくやおおきなじけんがおきました。\nB: けがにんはいますか？",
   exampleSrc:"A: A major incident occurred last night.\nB: Are there any injuries?",
   funFact:"事件 is the standard news word for incidents, especially negative ones. It contrasts with 事故 (jiko, accident, unintentional). A car crash is じこ, a robbery is じけん. The famous phrase 事件は会議室で起きてるんじゃない (the incident is not happening in the meeting room) comes from a popular police drama."},

  {type:"fb", s:"こんげつのざっしにかんきょうもんだいの{1}があります。\n(This month's magazine has a special feature on environmental issues.)", a:"とくしゅう", opts:["とくしゅう","しゃせつ","きじ","ほうどう"], sSrc:"This month's magazine has a special feature on environmental issues.",
   hint:"The media term for a dedicated, in-depth coverage of a single topic."},

  {type:"teach", trg:"ざっし", src:"magazine", pos:"noun", gender:null,
   note:"Kanji: 雑誌. ざっし = general term for any magazine.\nしゅうかんし = weekly magazine. げっかんし = monthly.",
   example:"A: このざっしはまいつきかっています。\nB: なんのざっしですか？",
   exampleSrc:"A: I buy this magazine every month.\nB: What kind of magazine is it?",
   funFact:"雑誌 uses 雑 (miscellaneous) and 誌 (journal), reflecting how magazines cover varied topics. Japan's magazine industry is enormous. Convenience stores devote entire aisles to ざっし. The category of 漫画雑誌 (manga magazines) like Weekly Shonen Jump sells millions weekly."},

  {type:"mc", q:"しゃせつ is:", opts:["A news reporter","The official stance published by a paper","A magazine subscription","A breaking news alert"], ans:"The official stance published by a paper",
   hint:"社 (company) + 説 (theory) combine to mean the publication's formal position on an issue."},

  {type:"match", pairs:[{trg:"ほうどう",src:"news reporting"},{trg:"きじ",src:"article"},{trg:"とくしゅう",src:"special feature"},{trg:"しゃせつ",src:"editorial"}]},

  {type:"fb", s:"このじけんについての{1}をみましたか？\n(Did you see the reporting on this incident?)", a:"ほうどう", opts:["ほうどう","きじ","しゃせつ","とくしゅう"], sSrc:"Did you see the reporting on this incident?",
   hint:"The general term for news coverage or reporting on a topic."},

  {type:"match", pairs:[{trg:"じけん",src:"incident"},{trg:"ざっし",src:"magazine"},{trg:"ほうどう",src:"coverage"},{trg:"きじ",src:"article"}]},
]},

// ═══ L2: Politics & Formal Expressions ═══
{id:"jav2_u26l2", title:"Politics & Formal Style", icon:"🏛️", xp:15, board:true, steps:[
  {type:"intro", title:"Politics & Formal Expressions",
   desc:"News about politics uses vocabulary and grammar structures distinct from daily conversation. Learn the key political terms (policy, parliament) and the formal expressions that characterize news Japanese, including passive voice and nominalized sentences.",
   goals:["Use せいさく, こっかい in context","Recognize news-style formal expressions","Understand passive constructions in news"]},

  {type:"teach", trg:"せいさく", src:"policy", pos:"noun", gender:null,
   note:"Kanji: 政策. せいさくをたてる = to formulate policy.\nけいざいせいさく = economic policy.",
   example:"A: せいふはあたらしいかんきょうせいさくをはっぴょうしました。\nB: くわしいないようはまだわかりません。",
   exampleSrc:"A: The government announced a new environmental policy.\nB: The detailed contents are not yet known.",
   funFact:"政策 combines 政 (government/politics) and 策 (plan/strategy). Japanese policy-making is heavily influenced by bureaucrats (官僚, kanryou) who draft most legislation. Politicians often rely on ministry experts for the details. This bureaucrat-led style is sometimes called 官僚主導 (kanryou shudou)."},

  {type:"teach", trg:"こっかい", src:"parliament / national diet", pos:"noun", gender:null,
   note:"Kanji: 国会. にほんのこっかい = Japan's parliament.\nこっかいぎいん = member of parliament.",
   example:"A: こっかいであたらしいほうあんがしんぎされています。\nB: いつかけつされますか？",
   exampleSrc:"A: A new bill is being deliberated in parliament.\nB: When will it be decided?",
   funFact:"Japan's parliament is called the 国会 (Diet), from German Reichstag influence during the Meiji era. It has two houses: 衆議院 (House of Representatives) and 参議院 (House of Councillors). The Diet Building in Tokyo, completed in 1936, took 17 years to build and uses only Japanese materials."},

  {type:"teach", trg:"はっぴょう", src:"announcement / presentation", pos:"noun", gender:null,
   note:"Kanji: 発表. はっぴょうする = to announce.\nけっかをはっぴょうする = to announce results.",
   example:"A: あしたのきしゃかいけんではっぴょうがあるそうです。\nB: どんなないようでしょうか。",
   exampleSrc:"A: I heard there will be an announcement at tomorrow's press conference.\nB: I wonder what the content will be.",
   funFact:"発表 uses 発 (emit/start) and 表 (surface/express). This word bridges business and media: students give はっぴょう in class, companies はっぴょう products, governments はっぴょう policies. The related 記者会見 (kisha kaiken, press conference) is where officials make formal はっぴょう to the media."},

  {type:"mc", q:"こっかいであたらしいほうあんがしんぎされている means:", opts:["A proposed law is now under examination in the legislature","The legislature rejected the proposed law","The legislature announced a passed law","The legislature complex was recently built"], ans:"A proposed law is now under examination in the legislature",
   hint:"しんぎされている is the passive progressive, showing an ongoing deliberation process."},

  {type:"teach", trg:"ほうあん", src:"bill / legislative proposal", pos:"noun", gender:null,
   note:"Kanji: 法案. 法 (law) + 案 (proposal).\nほうあんをかけつする = to pass a bill into law.",
   example:"A: このほうあんにはさんせいですか？\nB: わたしははんたいのたちばです。",
   exampleSrc:"A: Are you in favor of this bill?\nB: I am in the opposing position.",
   funFact:"法案 becomes 法律 (houritsu, law) once it passes parliament. The journey from ほうあん to ほうりつ involves committee review, floor debate, and votes in both houses. Japan's legislative process was modeled on European systems during the Meiji period, blending German and British parliamentary traditions."},

  {type:"teach", trg:"きしゃかいけん", src:"press conference", pos:"noun", gender:null,
   note:"Kanji: 記者会見. きしゃ (journalist) + かいけん (meeting/interview).\nA formal media event where officials take questions.",
   example:"A: しゅしょうがきしゃかいけんをひらきました。\nB: なにについてはなしましたか？",
   exampleSrc:"A: The prime minister held a press conference.\nB: What did he talk about?",
   funFact:"記者会見 literally means 'journalist meeting.' Japanese press conferences follow strict protocols. Reporters often ask pre-arranged questions. The 記者クラブ system means only club members attend official government conferences. This has been called one of the most closed press systems among democracies."},

  {type:"fb", s:"せいふはあたらしいかんきょう{1}をはっぴょうしました。\n(The government announced a new environmental policy.)", a:"せいさく", opts:["せいさく","ほうあん","ほうどう","きじ"], sSrc:"The government announced a new environmental policy.",
   hint:"The noun for a government's plan or strategy on a particular issue."},

  {type:"teach", trg:"さんせい", src:"agreement / approval / being in favor", pos:"noun", gender:null,
   note:"Kanji: 賛成. さんせいする = to agree/approve.\nOpposite: はんたい (opposition).",
   example:"A: このけいかくにさんせいですか？\nB: はい、さんせいです。",
   exampleSrc:"A: Do you agree with this plan?\nB: Yes, I am in favor.",
   funFact:"賛成 and はんたい (反対) are the yin and yang of Japanese debate. In meetings, votes are often taken with a show of hands: さんせいのかた？はんたいのかた？ (Those in favor? Those opposed?). The culture generally avoids direct はんたい, preferring softer expressions like ちょっとむずかしいかもしれません (it might be a little difficult)."},

  {type:"mc", q:"ほうあん is different from ほうりつ because:", opts:["ほうあん is an older law","ほうあん is a bill not yet passed into law","They mean the same thing","ほうあん only applies to criminal law"], ans:"ほうあん is a bill not yet passed into law",
   hint:"The 案 (proposal) kanji indicates this is still at the proposal stage."},

  {type:"match", pairs:[{trg:"せいさく",src:"policy"},{trg:"こっかい",src:"parliament"},{trg:"はっぴょう",src:"announcement"},{trg:"ほうあん",src:"bill (legislative)"}]},

  {type:"fb", s:"しゅしょうが{1}をひらきました。\n(The prime minister held a press conference.)", a:"きしゃかいけん", opts:["きしゃかいけん","はっぴょう","こっかい","ほうどう"], sSrc:"The prime minister held a press conference.",
   hint:"The compound noun for a formal event where officials answer journalists' questions."},

  {type:"match", pairs:[{trg:"きしゃかいけん",src:"press conference"},{trg:"さんせい",src:"agreement"},{trg:"じけん",src:"incident"},{trg:"せいさく",src:"policy"}]},
]},

,EXP_L3,EXP_L4,EXP_L5
,BATCH2_L03
,BATCH2_L04
,BATCH5_L01
,BATCH5_L02
,BATCH6_L1
]};
export default UNIT_26;
