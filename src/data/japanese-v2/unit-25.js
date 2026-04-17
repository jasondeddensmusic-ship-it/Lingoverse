// Japanese V2 Unit 25. ビジネス (Business Japanese)
import BATCH11_L1 from './_batch11_u25_L01.js';
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
// 会議, 資料, 提案, 報告, 契約, 納期, keigo in business.

const UNIT_25 = {
  n:25, lang:"ja", srcLang:"en", track:"v2",
  title:"ビジネス", sub:"Business Japanese",
  icon:"💼", level:"B2.1", color:"#7B5EE8",
  lessons:[

// ═══ L1: Office Essentials ═══
{id:"jav2_u25l1", title:"Office Essentials", icon:"🏢", xp:15, board:true, steps:[
  {type:"intro", title:"Office Essentials",
   desc:"Japanese business culture has its own vocabulary and etiquette. Master the core nouns of corporate life: meetings, materials, proposals, and reports. These words appear daily in any Japanese workplace and are heavily tested on JLPT N2.",
   goals:["Use 会議, 資料, 提案, 報告 in context","Understand basic business keigo patterns","Navigate meeting-related vocabulary"]},

  {type:"teach", trg:"会議(かいぎ)", src:"meeting / conference", pos:"noun", gender:null,
   note:"Kanji: 会議. 会議(かいぎ)を開(ひら)く = hold a meeting.\n会議室(かいぎしつ) = meeting room.",
   example:"A: 午前(ごぜん)十時(じゅうじ)から会議(かいぎ)があります。\nB: 資料(しりょう)は準備(じゅんび)できましたか？",
   exampleSrc:"A: There is a meeting from 10 AM.\nB: Are the materials ready?",
   funFact:"会議 uses 会 (meet) and 議 (discuss). Japanese companies are famous for their meeting culture. Some have 朝会 (asa-kai, morning meetings), 定例会 (teirei-kai, regular meetings), and 根回し (nemawashi, pre-meeting consensus building). Decisions are often made before the actual meeting."},

  {type:"teach", trg:"資料(しりょう)", src:"materials / documents / data", pos:"noun", gender:null,
   note:"Kanji: 資料. 資料(しりょう)を作(つく)る = prepare materials.\n資料(しりょう)を配(くば)る = distribute materials.",
   example:"A: 会議(かいぎ)の資料(しりょう)をメールで送(おく)りました。\nB: ありがとうございます。確認(かくにん)します。",
   exampleSrc:"A: I sent the meeting materials by email.\nB: Thank you. I will check them.",
   funFact:"資料 combines 資 (resources) and 料 (material). In Japanese offices, creating polished 資料(しりょう) is almost an art form. PowerPoint presentations, handouts, and spreadsheets are prepared meticulously. The phrase 資料(しりょう)をまとめる (compile materials) is a daily task for many office workers."},

  {type:"teach", trg:"提案(ていあん)", src:"proposal / suggestion", pos:"noun", gender:null,
   note:"Kanji: 提案. 提案(ていあん)する = to propose.\n新(あたら)しい提案(ていあん) = a new proposal.",
   example:"A: 新(あたら)しいプロジェクトの提案(ていあん)をしたいのですが。\nB: では、来週(らいしゅう)の会議(かいぎ)でプレゼンしてください。",
   exampleSrc:"A: I would like to make a proposal for a new project.\nB: Then please present it at next week's meeting.",
   funFact:"提案 uses 提 (present/submit) and 案 (idea/plan). The 案 kanji appears in many planning words: 起案(きあん) (draft), 対案(たいあん) (alternative plan), 原案(げんあん) (original plan). In Japanese business, proposals are rarely rejected directly. Instead, they are 'considered' (検討します, kentou shimasu), which sometimes means a polite no."},

  {type:"mc", q:"資料(しりょう)を配(くば)る means:", opts:["To hand out materials to people","To prepare materials","To discard materials","To request materials"], ans:"To hand out materials to people",
   hint:"配(くば)る means to pass something around to multiple recipients."},

  {type:"teach", trg:"報告(ほうこく)", src:"report", pos:"noun", gender:null,
   note:"Kanji: 報告. 報告(ほうこく)する = to report.\n報告書(ほうこくしょ) = written report. Very common in business.",
   example:"A: 週間(しゅうかん)報告(ほうこく)を提出(ていしゅつ)してください。\nB: はい、金曜日(きんようび)までに出(だ)します。",
   exampleSrc:"A: Please submit the weekly report.\nB: Yes, I will submit it by Friday.",
   funFact:"報告 is part of the famous Japanese business acronym ほうれんそう (報連相), which stands for 報告 (report), 連絡 (contact), 相談 (consult). This trio is drilled into every new employee. The word also sounds like ほうれんそう (spinach), making it a memorable pun that appears on office posters."},

  {type:"tip", title:"ほうれんそう: The Business Communication Triangle",
   text:"Every Japanese workplace teaches ほうれんそう:\n\n報告(ほうこく) (報告) = Report. Tell your boss the result.\n連絡(れんらく) (連絡) = Contact. Share relevant information.\n相談(そうだん) (相談) = Consult. Ask before deciding.\n\nThis framework ensures nothing falls through the cracks. New employees who fail to practice ほうれんそう are seen as unreliable, regardless of their actual work quality.",
   deepDive:{title:"Why ほうれんそう Matters",
    text:"Japanese corporate culture values information flow over individual brilliance. A talented employee who does not report progress is viewed less favorably than an average employee who communicates proactively.\n\nThe 報告(ほうこく) part means reporting results, not just problems. Good news and bad news both get reported.\n\n連絡(れんらく) means keeping everyone in the loop, even for small updates.\n\n相談(そうだん) is perhaps the most important: asking for input before making decisions. This ties into the broader Japanese value of 根回(ねまわ)し (nemawashi), building consensus before formal decisions."}},

  {type:"teach", trg:"プレゼン", src:"presentation", pos:"noun", gender:null,
   note:"Short for プレゼンテーション. Loanword from English 'presentation.'\nプレゼンをする = to give a presentation.",
   example:"A: 明日(あした)のプレゼンの準備(じゅんび)はできましたか？\nB: はい、資料(しりょう)もスライドも完成(かんせい)しました。",
   exampleSrc:"A: Are you ready for tomorrow's presentation?\nB: Yes, both the materials and slides are complete.",
   funFact:"Japanese loves to shorten loanwords. プレゼンテーション becomes プレゼン, コンビニエンスストア becomes コンビニ, パーソナルコンピューター becomes パソコン. These abbreviations follow a pattern: keep 3-4 syllables from each component word. This shortening is so systematic it has a name: 略語 (ryakugo)."},

  {type:"fb", s:"新(あたら)しいプロジェクトの{1}をしたいのですが。\n(I would like to make a proposal for a new project.)", a:"提案(ていあん)", opts:["提案(ていあん)","報告(ほうこく)","資料(しりょう)","会議(かいぎ)"], sSrc:"I would like to make a proposal for a new project.",
   hint:"The business noun meaning a formal suggestion or plan submitted for consideration."},

  {type:"teach", trg:"提出(ていしゅつ)", src:"submission", pos:"noun", gender:null,
   note:"Kanji: 提出. 提出(ていしゅつ)する = to submit.\n締(し)め切(き)り = deadline. 提出期限(ていしゅつきげん) = submission deadline.",
   example:"A: レポートの提出期限(ていしゅつきげん)はいつですか？\nB: 来週(らいしゅう)の月曜日(げつようび)です。",
   exampleSrc:"A: When is the report submission deadline?\nB: Next Monday.",
   funFact:"提出 shares the 提 kanji with 提案 (proposal). Both involve presenting something to someone. In Japanese schools and offices, 提出(ていしゅつ) is a daily word. Students submit homework (宿題(しゅくだい)を提出(ていしゅつ)する), employees submit reports, and citizens submit forms at city hall."},

  {type:"mc", q:"ほうれんそう in business stands for:", opts:["Meeting, Materials, Proposal","Report, Contact, Consult","Spinach, lettuce, carrots","Planning, Doing, Checking"], ans:"Report, Contact, Consult",
   hint:"This communication framework has three components: 報告(ほうこく), 連絡(れんらく), 相談(そうだん)."},

  {type:"match", pairs:[{trg:"会議(かいぎ)",src:"meeting"},{trg:"資料(しりょう)",src:"materials"},{trg:"提案(ていあん)",src:"proposal"},{trg:"報告(ほうこく)",src:"report"}]},

  {type:"fb", s:"週間(しゅうかん){1}を提出(ていしゅつ)してください。\n(Please submit the weekly report.)", a:"報告(ほうこく)", opts:["報告(ほうこく)","提案(ていあん)","資料(しりょう)","プレゼン"], sSrc:"Please submit the weekly report.",
   hint:"The business noun for a formal account of what has happened or been accomplished."},
]},

// ═══ L2: Contracts & Keigo ═══
{id:"jav2_u25l2", title:"Contracts & Keigo", icon:"📋", xp:15, board:true, steps:[
  {type:"intro", title:"Contracts & Keigo",
   desc:"Business Japanese requires specific vocabulary for contracts, deadlines, and deliverables. It also demands polished keigo (honorific language). Learn the nouns that make deals happen and the speech patterns that make you sound professional.",
   goals:["Use 契約, 納期 in business contexts","Apply basic business keigo patterns","Navigate contract and deadline vocabulary"]},

  {type:"teach", trg:"契約(けいやく)", src:"contract / agreement", pos:"noun", gender:null,
   note:"Kanji: 契約. 契約(けいやく)を結(むす)ぶ = to sign/conclude a contract.\n契約書(けいやくしょ) = contract document.",
   example:"A: 契約書(けいやくしょ)の内容(ないよう)を確認(かくにん)してください。\nB: はい、法務部(ほうむぶ)にも確認(かくにん)をお願(ねが)いします。",
   exampleSrc:"A: Please check the contents of the contract.\nB: Yes, please also have the legal department check it.",
   funFact:"契約 uses 契 (pledge) and 約 (promise). The verb 結(むす)ぶ (to tie/bind) is used with contracts because agreements are seen as something that binds parties together. In Japan, personal seals (はんこ or 印鑑(いんかん)) are still used alongside signatures to make contracts official."},

  {type:"teach", trg:"納期(のうき)", src:"delivery date / deadline", pos:"noun", gender:null,
   note:"Kanji: 納期. 納期(のうき)を守(まも)る = to meet a deadline.\n納期(のうき)に間(ま)に合(あ)う = to make the deadline in time.",
   example:"A: 納期(のうき)はいつですか？\nB: 三月末(さんがつまつ)までにお願(ねが)いします。",
   exampleSrc:"A: When is the delivery date?\nB: By the end of March, please.",
   funFact:"納期 combines 納 (deliver/pay) and 期 (period). The 納 kanji also appears in 納品 (nouhin, delivery of goods), 納税 (nouzei, tax payment), and 納得 (nattoku, understanding/acceptance). Meeting 納期(のうき) is considered a sacred obligation in Japanese business culture."},

  {type:"teach", trg:"法務部(ほうむぶ)", src:"legal department", pos:"noun", gender:null,
   note:"Kanji: 法務部. 法 (law) + 務 (duty) + 部 (department).\nOther departments: 営業部(えいぎょうぶ) (sales), 人事部(じんじぶ) (HR).",
   example:"A: この契約(けいやく)は法務部(ほうむぶ)の承認(しょうにん)が必要(ひつよう)です。\nB: 分(わ)かりました。書類(しょるい)を回(まわ)します。",
   exampleSrc:"A: This contract requires legal department approval.\nB: Understood. I will circulate the documents.",
   funFact:"Japanese companies use 部 (bu, department) as their main organizational unit. Common ones: 営業部 (sales), 人事部 (HR), 経理部 (accounting), 総務部 (general affairs), 開発部 (development). The department you belong to often defines your identity more than your job title."},

  {type:"mc", q:"契約(けいやく)を結(むす)ぶ means:", opts:["To formally enter into an agreement","To review an agreement","To break an agreement","To propose an agreement"], ans:"To formally enter into an agreement",
   hint:"結(むす)ぶ means to tie or bind, used for establishing formal binding arrangements."},

  {type:"teach", trg:"確認(かくにん)", src:"confirmation / verification", pos:"noun", gender:null,
   note:"Kanji: 確認. 確認(かくにん)する = to confirm/check.\nExtremely common in business and daily life.",
   example:"A: スケジュールの確認(かくにん)をお願(ねが)いします。\nB: はい、すぐに確認(かくにん)いたします。",
   exampleSrc:"A: Please confirm the schedule.\nB: Yes, I will confirm it right away.",
   funFact:"確認 is arguably the most-used business verb in Japan. Emails often end with ご確認(かくにん)ください (please confirm). The いたします in the response is humble keigo for します. Japanese workers 確認(かくにん) everything: emails, schedules, addresses, orders. When in doubt, 確認(かくにん)."},

  {type:"teach", trg:"いたします", src:"(I) will do (humble keigo)", pos:"verb", gender:null,
   note:"Humble form of します. Used when the speaker's action serves the listener.\n送(おく)ります → お送(おく)りいたします.",
   example:"A: お返事(へんじ)はいつごろいただけますか？\nB: 明日中(あしたじゅう)にご連絡(れんらく)いたします。",
   exampleSrc:"A: When can I receive a reply?\nB: I will contact you by the end of tomorrow.",
   funFact:"いたす is the humble (謙譲語, kenjougo) form of する. In business keigo, you lower yourself to raise the listener. する → いたす, いく → まいる, たべる → いただく. New employees spend weeks mastering these forms. Getting keigo wrong in business is considered a serious faux pas."},

  {type:"tip", title:"Business Keigo Essentials",
   text:"Three core keigo transformations for business:\n\nHumble (lower yourself):\nする → いたす: 確認(かくにん)いたします\nいう → 申(もう)す: 申(もう)し訳(わけ)ございません\nいく → 参(まい)る: すぐに参(まい)ります\n\nRespectful (raise the other person):\nする → なさる: 何(なに)をなさいますか\nいう → おっしゃる: おっしゃるとおりです\nいく → いらっしゃる: いつごろいらっしゃいますか\n\nPolite prefix お/ご:\n電話(でんわ) → お電話(でんわ), 連絡(れんらく) → ご連絡(れんらく)",
   deepDive:{title:"When to Use Which Level",
    text:"Business keigo has layers:\n\nWith your boss (internal): Polite form (-ます) is usually enough. Light keigo for formal situations.\n\nWith clients (external): Full keigo is expected. Use humble forms for your own actions, respectful forms for theirs.\n\nWith colleagues: Casual at the desk, polite in meetings.\n\nCommon mistakes:\n- Using respectful keigo about yourself (いらっしゃいます about your own actions)\n- Using humble keigo about the client (いたします about their actions)\n- Overdoing keigo so much that the meaning gets lost\n\nThe safest rule: humble for yourself, respectful for them."}},

  {type:"teach", trg:"承認(しょうにん)", src:"approval", pos:"noun", gender:null,
   note:"Kanji: 承認. 承認(しょうにん)する = to approve.\nUsed for official approvals in companies and government.",
   example:"A: 部長(ぶちょう)の承認(しょうにん)をもらいましたか？\nB: まだです。明日(あした)お願(ねが)いする予定(よてい)です。",
   exampleSrc:"A: Did you get the department head's approval?\nB: Not yet. I plan to ask tomorrow.",
   funFact:"承認 uses 承 (accept/receive) and 認 (recognize). Japanese organizations often require multiple levels of 承認(しょうにん) before anything proceeds. This approval culture is called 稟議 (ringi), where a proposal circulates through various managers who stamp it with their seal. It can be slow but ensures consensus."},

  {type:"fb", s:"納期(のうき)は{1}までにお願(ねが)いします。\n(The delivery date is by the end of March, please.)", a:"三月末(さんがつまつ)", opts:["三月末(さんがつまつ)","会議(かいぎ)","報告(ほうこく)","提案(ていあん)"], sSrc:"The delivery date is by the end of March, please.",
   hint:"The Japanese phrase for 'end of March,' combining the month with the word for end."},

  {type:"teach", trg:"三月末(さんがつまつ)", src:"end of March", pos:"noun", gender:null,
   note:"〜末(まつ) = end of. 月(がつ) = month counter.\n年末(ねんまつ) = year-end. 月末(げつまつ) = month-end.",
   example:"A: 日本(にほん)では三月末(さんがつまつ)が会計年度(かいけいねんど)の終(お)わりです。\nB: 四月(しがつ)から新(あたら)しい年度(ねんど)ですね。",
   exampleSrc:"A: In Japan, the end of March is the end of the fiscal year.\nB: The new fiscal year starts in April.",
   funFact:"Japan's fiscal year runs April to March, unlike most Western countries (January to December). This means March is incredibly busy: companies close books, employees get transferred, and students graduate. The phrase 年度末 (nendo-matsu, fiscal year-end) is synonymous with chaos in Japanese offices."},

  {type:"mc", q:"The keigo verb いたす is used in place of which everyday verb?", opts:["います","します","きます","みます"], ans:"します",
   hint:"This humble verb replaces the plain verb for doing or performing an action."},

  {type:"match", pairs:[{trg:"契約(けいやく)",src:"contract"},{trg:"納期(のうき)",src:"delivery date"},{trg:"いたします",src:"will do (humble)"},{trg:"承認(しょうにん)",src:"approval"}]},

  {type:"fb", s:"すぐに確認(かくにん){1}。\n(I will confirm it right away.)", a:"いたします", opts:["いたします","します","なさいます","ください"], sSrc:"I will confirm it right away.",
   hint:"The humble keigo form of します, used when your action serves the listener."},

  {type:"mc", q:"法務部(ほうむぶ) means:", opts:["Sales department","Accounting department","Legal department","Human resources"], ans:"Legal department",
   hint:"法(ほう) (法) relates to law, 務(む) (務) to duty, and 部(ぶ) (部) to section within a company."},
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
export default UNIT_25;
