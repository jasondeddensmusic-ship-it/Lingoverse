// Japanese V2 Unit 25. ビジネス (Business Japanese)
import BATCH10_L1 from './_batch10_u25_L01.js';
import BATCH9_L1 from './_batch9_u25_L01.js';
import BATCH7_L1 from './_batch7_u25_L01.js';
import BATCH8_L1 from './_batch8_u25_L01.js';
import BATCH6_L1 from './_batch6_u25_L01.js';
import BATCH5_L02 from './_batch5_u25_L02.js';
import BATCH5_L01 from './_batch5_u25_L01.js';
import BATCH2_L04 from './_batch2_u25_L04.js';
import BATCH2_L03 from './_batch2_u25_L03.js';
import EXP_L3 from './_temp_u25_expand_L01.js';import EXP_L4 from './_temp_u25_expand_L02.js';import EXP_L5 from './_temp_u25_expand_L03.js';
// Level: B2.1. JLPT N2 aligned.
// かいぎ, しりょう, ていあん, ほうこく, けいやく, のうき, keigo in business.

const UNIT_25 = {
  n:25, lang:"ja", srcLang:"en", track:"v2",
  title:"ビジネス", sub:"Business Japanese",
  icon:"💼", level:"B2.1", color:"#7B5EE8",
  lessons:[

// ═══ L1: Office Essentials ═══
{id:"jav2_u25l1", title:"Office Essentials", icon:"🏢", xp:15, board:true, steps:[
  {type:"intro", title:"Office Essentials",
   desc:"Japanese business culture has its own vocabulary and etiquette. Master the core nouns of corporate life: meetings, materials, proposals, and reports. These words appear daily in any Japanese workplace and are heavily tested on JLPT N2.",
   goals:["Use かいぎ, しりょう, ていあん, ほうこく in context","Understand basic business keigo patterns","Navigate meeting-related vocabulary"]},

  {type:"teach", trg:"かいぎ", src:"meeting / conference", pos:"noun", gender:null,
   note:"Kanji: 会議. かいぎをひらく = hold a meeting.\nかいぎしつ = meeting room.",
   example:"A: ごぜんじゅうじからかいぎがあります。\nB: しりょうはじゅんびできましたか？",
   exampleSrc:"A: There is a meeting from 10 AM.\nB: Are the materials ready?",
   funFact:"会議 uses 会 (meet) and 議 (discuss). Japanese companies are famous for their meeting culture. Some have 朝会 (asa-kai, morning meetings), 定例会 (teirei-kai, regular meetings), and 根回し (nemawashi, pre-meeting consensus building). Decisions are often made before the actual meeting."},

  {type:"teach", trg:"しりょう", src:"materials / documents / data", pos:"noun", gender:null,
   note:"Kanji: 資料. しりょうをつくる = prepare materials.\nしりょうをくばる = distribute materials.",
   example:"A: かいぎのしりょうをメールでおくりました。\nB: ありがとうございます。かくにんします。",
   exampleSrc:"A: I sent the meeting materials by email.\nB: Thank you. I will check them.",
   funFact:"資料 combines 資 (resources) and 料 (material). In Japanese offices, creating polished しりょう is almost an art form. PowerPoint presentations, handouts, and spreadsheets are prepared meticulously. The phrase しりょうをまとめる (compile materials) is a daily task for many office workers."},

  {type:"teach", trg:"ていあん", src:"proposal / suggestion", pos:"noun", gender:null,
   note:"Kanji: 提案. ていあんする = to propose.\nあたらしいていあん = a new proposal.",
   example:"A: あたらしいプロジェクトのていあんをしたいのですが。\nB: では、らいしゅうのかいぎでプレゼンしてください。",
   exampleSrc:"A: I would like to make a proposal for a new project.\nB: Then please present it at next week's meeting.",
   funFact:"提案 uses 提 (present/submit) and 案 (idea/plan). The 案 kanji appears in many planning words: きあん (draft), たいあん (alternative plan), げんあん (original plan). In Japanese business, proposals are rarely rejected directly. Instead, they are 'considered' (検討します, kentou shimasu), which sometimes means a polite no."},

  {type:"mc", q:"しりょうをくばる means:", opts:["To hand out materials to people","To prepare materials","To discard materials","To request materials"], ans:"To hand out materials to people",
   hint:"くばる means to pass something around to multiple recipients."},

  {type:"teach", trg:"ほうこく", src:"report", pos:"noun", gender:null,
   note:"Kanji: 報告. ほうこくする = to report.\nほうこくしょ = written report. Very common in business.",
   example:"A: しゅうかんほうこくをていしゅつしてください。\nB: はい、きんようびまでにだします。",
   exampleSrc:"A: Please submit the weekly report.\nB: Yes, I will submit it by Friday.",
   funFact:"報告 is part of the famous Japanese business acronym ほうれんそう (報連相), which stands for 報告 (report), 連絡 (contact), 相談 (consult). This trio is drilled into every new employee. The word also sounds like ほうれんそう (spinach), making it a memorable pun that appears on office posters."},

  {type:"tip", title:"ほうれんそう: The Business Communication Triangle",
   text:"Every Japanese workplace teaches ほうれんそう:\n\nほうこく (報告) = Report. Tell your boss the result.\nれんらく (連絡) = Contact. Share relevant information.\nそうだん (相談) = Consult. Ask before deciding.\n\nThis framework ensures nothing falls through the cracks. New employees who fail to practice ほうれんそう are seen as unreliable, regardless of their actual work quality.",
   deepDive:{title:"Why ほうれんそう Matters",
    text:"Japanese corporate culture values information flow over individual brilliance. A talented employee who does not report progress is viewed less favorably than an average employee who communicates proactively.\n\nThe ほうこく part means reporting results, not just problems. Good news and bad news both get reported.\n\nれんらく means keeping everyone in the loop, even for small updates.\n\nそうだん is perhaps the most important: asking for input before making decisions. This ties into the broader Japanese value of 根回し (nemawashi), building consensus before formal decisions."}},

  {type:"teach", trg:"プレゼン", src:"presentation", pos:"noun", gender:null,
   note:"Short for プレゼンテーション. Loanword from English 'presentation.'\nプレゼンをする = to give a presentation.",
   example:"A: あしたのプレゼンのじゅんびはできましたか？\nB: はい、しりょうもスライドもかんせいしました。",
   exampleSrc:"A: Are you ready for tomorrow's presentation?\nB: Yes, both the materials and slides are complete.",
   funFact:"Japanese loves to shorten loanwords. プレゼンテーション becomes プレゼン, コンビニエンスストア becomes コンビニ, パーソナルコンピューター becomes パソコン. These abbreviations follow a pattern: keep 3-4 syllables from each component word. This shortening is so systematic it has a name: 略語 (ryakugo)."},

  {type:"fb", s:"あたらしいプロジェクトの{1}をしたいのですが。\n(I would like to make a proposal for a new project.)", a:"ていあん", opts:["ていあん","ほうこく","しりょう","かいぎ"], sSrc:"I would like to make a proposal for a new project.",
   hint:"The business noun meaning a formal suggestion or plan submitted for consideration."},

  {type:"teach", trg:"ていしゅつ", src:"submission", pos:"noun", gender:null,
   note:"Kanji: 提出. ていしゅつする = to submit.\nしめきり = deadline. ていしゅつきげん = submission deadline.",
   example:"A: レポートのていしゅつきげんはいつですか？\nB: らいしゅうのげつようびです。",
   exampleSrc:"A: When is the report submission deadline?\nB: Next Monday.",
   funFact:"提出 shares the 提 kanji with 提案 (proposal). Both involve presenting something to someone. In Japanese schools and offices, ていしゅつ is a daily word. Students submit homework (しゅくだいをていしゅつする), employees submit reports, and citizens submit forms at city hall."},

  {type:"mc", q:"ほうれんそう in business stands for:", opts:["Meeting, Materials, Proposal","Report, Contact, Consult","Spinach, lettuce, carrots","Planning, Doing, Checking"], ans:"Report, Contact, Consult",
   hint:"This communication framework has three components: ほうこく, れんらく, そうだん."},

  {type:"match", pairs:[{trg:"かいぎ",src:"meeting"},{trg:"しりょう",src:"materials"},{trg:"ていあん",src:"proposal"},{trg:"ほうこく",src:"report"}]},

  {type:"fb", s:"しゅうかん{1}をていしゅつしてください。\n(Please submit the weekly report.)", a:"ほうこく", opts:["ほうこく","ていあん","しりょう","プレゼン"], sSrc:"Please submit the weekly report.",
   hint:"The business noun for a formal account of what has happened or been accomplished."},
]},

// ═══ L2: Contracts & Keigo ═══
{id:"jav2_u25l2", title:"Contracts & Keigo", icon:"📋", xp:15, board:true, steps:[
  {type:"intro", title:"Contracts & Keigo",
   desc:"Business Japanese requires specific vocabulary for contracts, deadlines, and deliverables. It also demands polished keigo (honorific language). Learn the nouns that make deals happen and the speech patterns that make you sound professional.",
   goals:["Use けいやく, のうき in business contexts","Apply basic business keigo patterns","Navigate contract and deadline vocabulary"]},

  {type:"teach", trg:"けいやく", src:"contract / agreement", pos:"noun", gender:null,
   note:"Kanji: 契約. けいやくをむすぶ = to sign/conclude a contract.\nけいやくしょ = contract document.",
   example:"A: けいやくしょのないようをかくにんしてください。\nB: はい、ほうむぶにもかくにんをおねがいします。",
   exampleSrc:"A: Please check the contents of the contract.\nB: Yes, please also have the legal department check it.",
   funFact:"契約 uses 契 (pledge) and 約 (promise). The verb むすぶ (to tie/bind) is used with contracts because agreements are seen as something that binds parties together. In Japan, personal seals (はんこ or いんかん) are still used alongside signatures to make contracts official."},

  {type:"teach", trg:"のうき", src:"delivery date / deadline", pos:"noun", gender:null,
   note:"Kanji: 納期. のうきをまもる = to meet a deadline.\nのうきにまにあう = to make the deadline in time.",
   example:"A: のうきはいつですか？\nB: さんがつまつまでにおねがいします。",
   exampleSrc:"A: When is the delivery date?\nB: By the end of March, please.",
   funFact:"納期 combines 納 (deliver/pay) and 期 (period). The 納 kanji also appears in 納品 (nouhin, delivery of goods), 納税 (nouzei, tax payment), and 納得 (nattoku, understanding/acceptance). Meeting のうき is considered a sacred obligation in Japanese business culture."},

  {type:"teach", trg:"ほうむぶ", src:"legal department", pos:"noun", gender:null,
   note:"Kanji: 法務部. 法 (law) + 務 (duty) + 部 (department).\nOther departments: えいぎょうぶ (sales), じんじぶ (HR).",
   example:"A: このけいやくはほうむぶのしょうにんがひつようです。\nB: わかりました。しょるいをまわします。",
   exampleSrc:"A: This contract requires legal department approval.\nB: Understood. I will circulate the documents.",
   funFact:"Japanese companies use 部 (bu, department) as their main organizational unit. Common ones: 営業部 (sales), 人事部 (HR), 経理部 (accounting), 総務部 (general affairs), 開発部 (development). The department you belong to often defines your identity more than your job title."},

  {type:"mc", q:"けいやくをむすぶ means:", opts:["To formally enter into an agreement","To review an agreement","To break an agreement","To propose an agreement"], ans:"To formally enter into an agreement",
   hint:"むすぶ means to tie or bind, used for establishing formal binding arrangements."},

  {type:"teach", trg:"かくにん", src:"confirmation / verification", pos:"noun", gender:null,
   note:"Kanji: 確認. かくにんする = to confirm/check.\nExtremely common in business and daily life.",
   example:"A: スケジュールのかくにんをおねがいします。\nB: はい、すぐにかくにんいたします。",
   exampleSrc:"A: Please confirm the schedule.\nB: Yes, I will confirm it right away.",
   funFact:"確認 is arguably the most-used business verb in Japan. Emails often end with ごかくにんください (please confirm). The いたします in the response is humble keigo for します. Japanese workers かくにん everything: emails, schedules, addresses, orders. When in doubt, かくにん."},

  {type:"teach", trg:"いたします", src:"(I) will do (humble keigo)", pos:"verb", gender:null,
   note:"Humble form of します. Used when the speaker's action serves the listener.\nおくります → おおくりいたします.",
   example:"A: おへんじはいつごろいただけますか？\nB: あしたちゅうにごれんらくいたします。",
   exampleSrc:"A: When can I receive a reply?\nB: I will contact you by the end of tomorrow.",
   funFact:"いたす is the humble (謙譲語, kenjougo) form of する. In business keigo, you lower yourself to raise the listener. する → いたす, いく → まいる, たべる → いただく. New employees spend weeks mastering these forms. Getting keigo wrong in business is considered a serious faux pas."},

  {type:"tip", title:"Business Keigo Essentials",
   text:"Three core keigo transformations for business:\n\nHumble (lower yourself):\nする → いたす: かくにんいたします\nいう → もうす: もうしわけございません\nいく → まいる: すぐにまいります\n\nRespectful (raise the other person):\nする → なさる: なにをなさいますか\nいう → おっしゃる: おっしゃるとおりです\nいく → いらっしゃる: いつごろいらっしゃいますか\n\nPolite prefix お/ご:\nでんわ → おでんわ, れんらく → ごれんらく",
   deepDive:{title:"When to Use Which Level",
    text:"Business keigo has layers:\n\nWith your boss (internal): Polite form (-ます) is usually enough. Light keigo for formal situations.\n\nWith clients (external): Full keigo is expected. Use humble forms for your own actions, respectful forms for theirs.\n\nWith colleagues: Casual at the desk, polite in meetings.\n\nCommon mistakes:\n- Using respectful keigo about yourself (いらっしゃいます about your own actions)\n- Using humble keigo about the client (いたします about their actions)\n- Overdoing keigo so much that the meaning gets lost\n\nThe safest rule: humble for yourself, respectful for them."}},

  {type:"teach", trg:"しょうにん", src:"approval", pos:"noun", gender:null,
   note:"Kanji: 承認. しょうにんする = to approve.\nUsed for official approvals in companies and government.",
   example:"A: ぶちょうのしょうにんをもらいましたか？\nB: まだです。あしたおねがいするよていです。",
   exampleSrc:"A: Did you get the department head's approval?\nB: Not yet. I plan to ask tomorrow.",
   funFact:"承認 uses 承 (accept/receive) and 認 (recognize). Japanese organizations often require multiple levels of しょうにん before anything proceeds. This approval culture is called 稟議 (ringi), where a proposal circulates through various managers who stamp it with their seal. It can be slow but ensures consensus."},

  {type:"fb", s:"のうきは{1}までにおねがいします。\n(The delivery date is by the end of March, please.)", a:"さんがつまつ", opts:["さんがつまつ","かいぎ","ほうこく","ていあん"], sSrc:"The delivery date is by the end of March, please.",
   hint:"The Japanese phrase for 'end of March,' combining the month with the word for end."},

  {type:"teach", trg:"さんがつまつ", src:"end of March", pos:"noun", gender:null,
   note:"〜まつ = end of. がつ = month counter.\nねんまつ = year-end. げつまつ = month-end.",
   example:"A: にほんではさんがつまつがかいけいねんどのおわりです。\nB: しがつからあたらしいねんどですね。",
   exampleSrc:"A: In Japan, the end of March is the end of the fiscal year.\nB: The new fiscal year starts in April.",
   funFact:"Japan's fiscal year runs April to March, unlike most Western countries (January to December). This means March is incredibly busy: companies close books, employees get transferred, and students graduate. The phrase 年度末 (nendo-matsu, fiscal year-end) is synonymous with chaos in Japanese offices."},

  {type:"mc", q:"The keigo verb いたす is used in place of which everyday verb?", opts:["います","します","きます","みます"], ans:"します",
   hint:"This humble verb replaces the plain verb for doing or performing an action."},

  {type:"match", pairs:[{trg:"けいやく",src:"contract"},{trg:"のうき",src:"delivery date"},{trg:"いたします",src:"will do (humble)"},{trg:"しょうにん",src:"approval"}]},

  {type:"fb", s:"すぐにかくにん{1}。\n(I will confirm it right away.)", a:"いたします", opts:["いたします","します","なさいます","ください"], sSrc:"I will confirm it right away.",
   hint:"The humble keigo form of します, used when your action serves the listener."},

  {type:"mc", q:"ほうむぶ means:", opts:["Sales department","Accounting department","Legal department","Human resources"], ans:"Legal department",
   hint:"ほう (法) relates to law, む (務) to duty, and ぶ (部) to section within a company."},
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
]};
export default UNIT_25;
