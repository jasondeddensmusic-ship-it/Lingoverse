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
import COVERAGE_U25 from './_coverage_u25.js';
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
   example:"A: 午前(ごぜん)十時(じゅうじ)から会議(かいぎ)があります。\nB: 資料(しりょう)は準備(じゅんび)できましたか？\nA: それについてもう少(すこ)し詳(くわ)しく教(おし)えてください。\nB: 例(たと)えば、最近(さいきん)の事例(じれい)を見(み)ると、変化(へんか)が激(はげ)しいです。\nA: そうですか。どう対処(たいしょ)すればいいでしょうか。\nB: まず現状(げんじょう)を把握(はあく)してから、計画(けいかく)を立(た)てましょう。",
   exampleSrc:"A: There is a meeting from 10 AM.\nB: Are the materials ready?\nA: Please tell me more about that.\nB: For example, looking at recent cases, the changes are dramatic.\nA: Is that so? How should we handle it?\nB: Let's first grasp the current situation, then make a plan.",
   funFact:"会議 uses 会 (meet) and 議 (discuss). Japanese companies are famous for their meeting culture. Some have 朝会 (asa-kai, morning meetings), 定例会 (teirei-kai, regular meetings), and 根回し (nemawashi, pre-meeting consensus building). Decisions are often made before the actual meeting."},

  {type:"teach", trg:"資料(しりょう)", src:"materials / documents / data", pos:"noun", gender:null,
   note:"Kanji: 資料. 資料(しりょう)を作(つく)る = prepare materials.\n資料(しりょう)を配(くば)る = distribute materials.",
   example:"A: 会議(かいぎ)の資料(しりょう)をメールで送(おく)りました。\nB: ありがとうございます。確認(かくにん)します。\nA: どのような方法(ほうほう)がありますか？\nB: いくつかの選択肢(せんたくし)があります。一番(いちばん)効果的(こうかてき)なのは実践(じっせん)です。\nA: 実践(じっせん)というのは、具体的(ぐたいてき)に何(なに)をすればいいですか？\nB: 毎日(まいにち)少(すこ)しずつ取(と)り組(く)むことが重要(じゅうよう)です。",
   exampleSrc:"A: I sent the meeting materials by email.\nB: Thank you. I will check them.\nA: What kinds of methods are there?\nB: There are several options. The most effective is practice.\nA: What specifically should we do in practice?\nB: It is important to work on it a little each day.",
   funFact:"資料 combines 資 (resources) and 料 (material). In Japanese offices, creating polished 資料(しりょう) is almost an art form. PowerPoint presentations, handouts, and spreadsheets are prepared meticulously. The phrase 資料(しりょう)をまとめる (compile materials) is a daily task for many office workers."},

  {type:"teach", trg:"提案(ていあん)", src:"proposal / suggestion", pos:"noun", gender:null,
   note:"Kanji: 提案. 提案(ていあん)する = to propose.\n新(あたら)しい提案(ていあん) = a new proposal.",
   example:"A: 新(あたら)しいプロジェクトの提案(ていあん)をしたいのですが。\nB: では、来週(らいしゅう)の会議(かいぎ)でプレゼンしてください。\nA: それはいつごろから始(はじ)まったのですか？\nB: 数年前(すうねんまえ)からですが、最近(さいきん)特(とく)に注目(ちゅうもく)されています。\nA: 今後(こんご)どうなると思(おも)いますか？\nB: さらに発展(はってん)すると予想(よそう)されています。",
   exampleSrc:"A: I would like to make a proposal for a new project.\nB: Then please present it at next week's meeting.\nA: When did that start?\nB: It started a few years ago, but it has been getting particular attention recently.\nA: What do you think will happen going forward?\nB: It is expected to develop further.",
   funFact:"提案 uses 提 (present/submit) and 案 (idea/plan). The 案 kanji appears in many planning words: 起案(きあん) (draft), 対案(たいあん) (alternative plan), 原案(げんあん) (original plan). In Japanese business, proposals are rarely rejected directly. Instead, they are 'considered' (検討します, kentou shimasu), which sometimes means a polite no."},

  {type:"mc", q:"資料(しりょう)を配(くば)る means:", opts:["To hand out materials to people","To prepare materials","To discard materials","To request materials"], ans:"To hand out materials to people",
   hint:"配(くば)る means to pass something around to multiple recipients."},

  {type:"teach", trg:"報告(ほうこく)", src:"report", pos:"noun", gender:null,
   note:"Kanji: 報告. 報告(ほうこく)する = to report.\n報告書(ほうこくしょ) = written report. Very common in business.",
   example:"A: 週間(しゅうかん)報告(ほうこく)を提出(ていしゅつ)してください。\nB: はい、金曜日(きんようび)までに出(だ)します。\nA: 何(なに)か問題(もんだい)はありませんでしたか？\nB: いくつか課題(かだい)がありましたが、解決(かいけつ)しました。\nA: どのように解決(かいけつ)したのですか？\nB: チーム全体(ぜんたい)で話(はな)し合(あ)って、最善(さいぜん)の方法(ほうほう)を見(み)つけました。",
   exampleSrc:"A: Please submit the weekly report.\nB: Yes, I will submit it by Friday.\nA: Were there any problems?\nB: There were some issues, but we resolved them.\nA: How did you resolve them?\nB: We discussed it as a whole team and found the best method.",
   funFact:"報告 is part of the famous Japanese business acronym ほうれんそう (報連相), which stands for 報告 (report), 連絡 (contact), 相談 (consult). This trio is drilled into every new employee. The word also sounds like ほうれんそう (spinach), making it a memorable pun that appears on office posters."},

  {type:"tip", title:"ほうれんそう: The Business Communication Triangle",
   text:"Every Japanese workplace teaches ほうれんそう:\n\n報告(ほうこく) (報告) = Report. Tell your boss the result.\n連絡(れんらく) (連絡) = Contact. Share relevant information.\n相談(そうだん) (相談) = Consult. Ask before deciding.\n\nThis framework ensures nothing falls through the cracks. New employees who fail to practice ほうれんそう are seen as unreliable, regardless of their actual work quality.",
   deepDive:{title:"Why ほうれんそう Matters",
    text:"Japanese corporate culture values information flow over individual brilliance. A talented employee who does not report progress is viewed less favorably than an average employee who communicates proactively.\n\nThe 報告(ほうこく) part means reporting results, not just problems. Good news and bad news both get reported.\n\n連絡(れんらく) means keeping everyone in the loop, even for small updates.\n\n相談(そうだん) is perhaps the most important: asking for input before making decisions. This ties into the broader Japanese value of 根回(ねまわ)し (nemawashi), building consensus before formal decisions."}},

  {type:"teach", trg:"プレゼン", src:"presentation", pos:"noun", gender:null,
   note:"Short for プレゼンテーション. Loanword from English 'presentation.'\nプレゼンをする = to give a presentation.",
   example:"A: 明日(あした)のプレゼンの準備(じゅんび)はできましたか？\nB: はい、資料(しりょう)もスライドも完成(かんせい)しました。\nA: その点(てん)について、もう少(すこ)し説明(せつめい)していただけますか？\nB: もちろんです。重要(じゅうよう)なのは準備(じゅんび)と計画(けいかく)です。\nA: 準備(じゅんび)にはどのくらい時間(じかん)がかかりますか？\nB: 通常(つうじょう)、一週間(いっしゅうかん)から二週間(にしゅうかん)程度(ていど)です。",
   exampleSrc:"A: Are you ready for tomorrow's presentation?\nB: Yes, both the materials and slides are complete.\nA: Could you explain that point a bit more?\nB: Of course. What is important is preparation and planning.\nA: How long does preparation take?\nB: Usually about one to two weeks.",
   funFact:"Japanese loves to shorten loanwords. プレゼンテーション becomes プレゼン, コンビニエンスストア becomes コンビニ, パーソナルコンピューター becomes パソコン. These abbreviations follow a pattern: keep 3-4 syllables from each component word. This shortening is so systematic it has a name: 略語 (ryakugo)."},

  {type:"fb", s:"新(あたら)しいプロジェクトの{1}をしたいのですが。\n(I would like to make a proposal for a new project.)", a:"提案(ていあん)", opts:["提案(ていあん)","報告(ほうこく)","資料(しりょう)","会議(かいぎ)"], sSrc:"I would like to make a proposal for a new project.",
   hint:"The business noun meaning a formal suggestion or plan submitted for consideration."},

  {type:"teach", trg:"提出(ていしゅつ)", src:"submission", pos:"noun", gender:null,
   note:"Kanji: 提出. 提出(ていしゅつ)する = to submit.\n締(し)め切(き)り = deadline. 提出期限(ていしゅつきげん) = submission deadline.",
   example:"A: レポートの提出期限(ていしゅつきげん)はいつですか？\nB: 来週(らいしゅう)の月曜日(げつようび)です。\nA: それは素晴(すば)らしい結果(けっか)ですね。\nB: ありがとうございます。チーム全員(ぜんいん)の努力(どりょく)のおかげです。\nA: 今後(こんご)の目標(もくひょう)は何(なん)ですか？\nB: さらに品質(ひんしつ)を向上(こうじょう)させることです。",
   exampleSrc:"A: When is the report submission deadline?\nB: Next Monday.\nA: That is an excellent result.\nB: Thank you. It is thanks to the effort of the whole team.\nA: What are the future goals?\nB: To further improve quality.",
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
   example:"A: 契約書(けいやくしょ)の内容(ないよう)を確認(かくにん)してください。\nB: はい、法務部(ほうむぶ)にも確認(かくにん)をお願(ねが)いします。\nA: 他(ほか)に何(なに)か気(き)をつけることはありますか？\nB: はい、期限(きげん)を守(まも)ることが一番(いちばん)大切(たいせつ)です。\nA: 期限(きげん)に間(ま)に合(あ)わない場合(ばあい)はどうしますか？\nB: 早(はや)めに上司(じょうし)に相談(そうだん)して、調整(ちょうせい)をお願(ねが)いします。",
   exampleSrc:"A: Please check the contents of the contract.\nB: Yes, please also have the legal department check it.\nA: Is there anything else to be careful about?\nB: Yes, meeting deadlines is the most important thing.\nA: What do you do if you cannot meet the deadline?\nB: Consult your supervisor early and ask for an adjustment.",
   funFact:"契約 uses 契 (pledge) and 約 (promise). The verb 結(むす)ぶ (to tie/bind) is used with contracts because agreements are seen as something that binds parties together. In Japan, personal seals (はんこ or 印鑑(いんかん)) are still used alongside signatures to make contracts official."},

  {type:"teach", trg:"納期(のうき)", src:"delivery date / deadline", pos:"noun", gender:null,
   note:"Kanji: 納期. 納期(のうき)を守(まも)る = to meet a deadline.\n納期(のうき)に間(ま)に合(あ)う = to make the deadline in time.",
   example:"A: 納期(のうき)はいつですか？\nB: 三月末(さんがつまつ)までにお願(ねが)いします。\nA: その件(けん)について進捗(しんちょく)はありますか？\nB: はい、順調(じゅんちょう)に進(すす)んでいます。\nA: 完了(かんりょう)の見込(みこ)みはいつごろですか？\nB: 来月(らいげつ)の初(はじ)めには完了(かんりょう)できる予定(よてい)です。",
   exampleSrc:"A: When is the delivery date?\nB: By the end of March, please.\nA: Is there any progress on that matter?\nB: Yes, it is progressing smoothly.\nA: When is it expected to be completed?\nB: It is scheduled to be completed by the beginning of next month.",
   funFact:"納期 combines 納 (deliver/pay) and 期 (period). The 納 kanji also appears in 納品 (nouhin, delivery of goods), 納税 (nouzei, tax payment), and 納得 (nattoku, understanding/acceptance). Meeting 納期(のうき) is considered a sacred obligation in Japanese business culture."},

  {type:"teach", trg:"法務部(ほうむぶ)", src:"legal department", pos:"noun", gender:null,
   note:"Kanji: 法務部. 法 (law) + 務 (duty) + 部 (department).\nOther departments: 営業部(えいぎょうぶ) (sales), 人事部(じんじぶ) (HR).",
   example:"A: この契約(けいやく)は法務部(ほうむぶ)の承認(しょうにん)が必要(ひつよう)です。\nB: 分(わ)かりました。書類(しょるい)を回(まわ)します。\nA: 以前(いぜん)と比(くら)べてどう変(か)わりましたか？\nB: かなり改善(かいぜん)されました。効率(こうりつ)が上(あ)がりました。\nA: その改善(かいぜん)の要因(よういん)は何(なん)ですか？\nB: 新(あたら)しいシステムの導入(どうにゅう)が大(おお)きかったです。",
   exampleSrc:"A: This contract requires legal department approval.\nB: Understood. I will circulate the documents.\nA: How has it changed compared to before?\nB: It has improved considerably. Efficiency has increased.\nA: What was the cause of that improvement?\nB: The introduction of the new system was a big factor.",
   funFact:"Japanese companies use 部 (bu, department) as their main organizational unit. Common ones: 営業部 (sales), 人事部 (HR), 経理部 (accounting), 総務部 (general affairs), 開発部 (development). The department you belong to often defines your identity more than your job title."},

  {type:"mc", q:"契約(けいやく)を結(むす)ぶ means:", opts:["To formally enter into an agreement","To review an agreement","To break an agreement","To propose an agreement"], ans:"To formally enter into an agreement",
   hint:"結(むす)ぶ means to tie or bind, used for establishing formal binding arrangements."},

  {type:"teach", trg:"確認(かくにん)", src:"confirmation / verification", pos:"noun", gender:null,
   note:"Kanji: 確認. 確認(かくにん)する = to confirm/check.\nExtremely common in business and daily life.",
   example:"A: スケジュールの確認(かくにん)をお願(ねが)いします。\nB: はい、すぐに確認(かくにん)いたします。\nA: ご意見(いけん)をお聞(き)かせいただけますか？\nB: 私(わたし)の考(かんが)えでは、もう少(すこ)し検討(けんとう)が必要(ひつよう)だと思(おも)います。\nA: どの点(てん)を検討(けんとう)すべきでしょうか？\nB: 予算(よさん)と人員(じんいん)の面(めん)をもう一度(いちど)見直(みなお)す必要(ひつよう)があります。",
   exampleSrc:"A: Please confirm the schedule.\nB: Yes, I will confirm it right away.\nA: Could you share your opinion?\nB: In my opinion, I think a bit more consideration is needed.\nA: Which points should be considered?\nB: We need to review the budget and staffing aspects once more.",
   funFact:"確認 is arguably the most-used business verb in Japan. Emails often end with ご確認(かくにん)ください (please confirm). The いたします in the response is humble keigo for します. Japanese workers 確認(かくにん) everything: emails, schedules, addresses, orders. When in doubt, 確認(かくにん)."},

  {type:"teach", trg:"いたします", src:"(I) will do (humble keigo)", pos:"verb", gender:null,
   note:"Humble form of します. Used when the speaker's action serves the listener.\n送(おく)ります → お送(おく)りいたします.",
   example:"A: お返事(へんじ)はいつごろいただけますか？\nB: 明日中(あしたじゅう)にご連絡(れんらく)いたします。\nA: 何(なに)か良(よ)い方法(ほうほう)はありませんか？\nB: 一(ひと)つ提案(ていあん)があります。段階的(だんかいてき)に進(すす)めてはどうでしょうか。\nA: 段階的(だんかいてき)に、というのはどういうことですか？\nB: まず小規模(しょうきぼ)で試(ため)してから、徐々(じょじょ)に拡大(かくだい)するということです。",
   exampleSrc:"A: When can I receive a reply?\nB: I will contact you by the end of tomorrow.\nA: Is there a good method?\nB: I have one suggestion. How about proceeding step by step?\nA: What do you mean by step by step?\nB: It means trying it on a small scale first, then gradually expanding.",
   funFact:"いたす is the humble (謙譲語, kenjougo) form of する. In business keigo, you lower yourself to raise the listener. する → いたす, いく → まいる, たべる → いただく. New employees spend weeks mastering these forms. Getting keigo wrong in business is considered a serious faux pas."},

  {type:"tip", title:"Business Keigo Essentials",
   text:"Three core keigo transformations for business:\n\nHumble (lower yourself):\nする → いたす: 確認(かくにん)いたします\nいう → 申(もう)す: 申(もう)し訳(わけ)ございません\nいく → 参(まい)る: すぐに参(まい)ります\n\nRespectful (raise the other person):\nする → なさる: 何(なに)をなさいますか\nいう → おっしゃる: おっしゃるとおりです\nいく → いらっしゃる: いつごろいらっしゃいますか\n\nPolite prefix お/ご:\n電話(でんわ) → お電話(でんわ), 連絡(れんらく) → ご連絡(れんらく)",
   deepDive:{title:"When to Use Which Level",
    text:"Business keigo has layers:\n\nWith your boss (internal): Polite form (-ます) is usually enough. Light keigo for formal situations.\n\nWith clients (external): Full keigo is expected. Use humble forms for your own actions, respectful forms for theirs.\n\nWith colleagues: Casual at the desk, polite in meetings.\n\nCommon mistakes:\n- Using respectful keigo about yourself (いらっしゃいます about your own actions)\n- Using humble keigo about the client (いたします about their actions)\n- Overdoing keigo so much that the meaning gets lost\n\nThe safest rule: humble for yourself, respectful for them."}},

  {type:"teach", trg:"承認(しょうにん)", src:"approval", pos:"noun", gender:null,
   note:"Kanji: 承認. 承認(しょうにん)する = to approve.\nUsed for official approvals in companies and government.",
   example:"A: 部長(ぶちょう)の承認(しょうにん)をもらいましたか？\nB: まだです。明日(あした)お願(ねが)いする予定(よてい)です。\nA: この問題(もんだい)をどう思(おも)いますか？\nB: 複雑(ふくざつ)な問題(もんだい)ですが、解決策(かいけつさく)はあると思(おも)います。\nA: どのような解決策(かいけつさく)を考(かんが)えていますか？\nB: 関係者(かんけいしゃ)全員(ぜんいん)で話(はな)し合(あ)いの場(ば)を設(もう)けることが第一歩(だいいっぽ)です。",
   exampleSrc:"A: Did you get the department head's approval?\nB: Not yet. I plan to ask tomorrow.\nA: What do you think about this issue?\nB: It is a complex issue, but I think there are solutions.\nA: What kind of solutions are you thinking of?\nB: The first step is to set up a discussion forum for all stakeholders.",
   funFact:"承認 uses 承 (accept/receive) and 認 (recognize). Japanese organizations often require multiple levels of 承認(しょうにん) before anything proceeds. This approval culture is called 稟議 (ringi), where a proposal circulates through various managers who stamp it with their seal. It can be slow but ensures consensus."},

  {type:"fb", s:"納期(のうき)は{1}までにお願(ねが)いします。\n(The delivery date is by the end of March, please.)", a:"三月末(さんがつまつ)", opts:["三月末(さんがつまつ)","会議(かいぎ)","報告(ほうこく)","提案(ていあん)"], sSrc:"The delivery date is by the end of March, please.",
   hint:"The Japanese phrase for 'end of March,' combining the month with the word for end."},

  {type:"teach", trg:"三月末(さんがつまつ)", src:"end of March", pos:"noun", gender:null,
   note:"〜末(まつ) = end of. 月(がつ) = month counter.\n年末(ねんまつ) = year-end. 月末(げつまつ) = month-end.",
   example:"A: 日本(にほん)では三月末(さんがつまつ)が会計年度(かいけいねんど)の終(お)わりです。\nB: 四月(しがつ)から新(あたら)しい年度(ねんど)ですね。\nA: 最近(さいきん)の動向(どうこう)はいかがですか？\nB: 全体的(ぜんたいてき)には好調(こうちょう)ですが、一部(いちぶ)課題(かだい)もあります。\nA: どのような課題(かだい)がありますか？\nB: 人材(じんざい)の確保(かくほ)が最(もっと)も大(おお)きな課題(かだい)です。",
   exampleSrc:"A: In Japan, the end of March is the end of the fiscal year.\nB: The new fiscal year starts in April.\nA: How are the recent trends?\nB: Overall things are going well, but there are some issues.\nA: What kinds of issues are there?\nB: Securing human resources is the biggest challenge.",
   funFact:"Japan's fiscal year runs April to March, unlike most Western countries (January to December). This means March is incredibly busy: companies close books, employees get transferred, and students graduate. The phrase 年度末 (nendo-matsu, fiscal year-end) is synonymous with chaos in Japanese offices."},

  {type:"mc", q:"The keigo verb いたす is used in place of which everyday verb?", opts:["います","します","きます","みます"], ans:"します",
   hint:"This humble verb replaces the plain verb for doing or performing an action."},

  {type:"match", pairs:[{trg:"契約(けいやく)",src:"contract"},{trg:"納期(のうき)",src:"delivery date"},{trg:"いたします",src:"will do (humble)"},{trg:"承認(しょうにん)",src:"approval"}]},

  {type:"fb", s:"すぐに確認(かくにん){1}。\n(I will confirm it right away.)", a:"いたします", opts:["いたします","します","なさいます","ください"], sSrc:"I will confirm it right away.",
   hint:"The humble keigo form of します, used when your action serves the listener."},

  {type:"mc", q:"法務部(ほうむぶ) means:", opts:["Sales department","Accounting department","Legal department","Human resources"], ans:"Legal department",
   hint:"法(ほう) (法) relates to law, 務(む) (務) to duty, and 部(ぶ) (部) to section within a company."},
{type:"match",pairs:[{trg:"プレゼン",src:"presentation"},{trg:"提出(ていしゅつ)",src:"submission"},{trg:"法務部(ほうむぶ)",src:"legal department"},{trg:"確認(かくにん)",src:"confirmation / verification"}]}]},


// ═══ L_DISP: Resolving Disputes & Mediating ═══
{id:"jav2_u25l_disp", title:"対立(たいりつ)を解決(かいけつ)する", icon:"🤝", xp:15, board:true, steps:[
  {type:"intro", title:"Resolving Disputes & Mediating",
   desc:"Learn to mediate conflicts diplomatically in Japanese: expressing disagreement politely (omote/ura), finding compromises, restoring trust. Essential for JLPT N2 speaking.",
   goals:["Express disagreement politely","Propose compromises","Use diplomatic Japanese in conflict"]},

  {type:"teach", trg:"対立(たいりつ)", src:"conflict / opposition", pos:"noun", gender:null,
   note:"Kanji: 対立(たいりつ). 対(たい) = opposing, 立(りつ) = stand.\n対立(たいりつ)が生(う)まれる = a conflict arises.",
   example:"A: 会議(かいぎ)で対立(たいりつ)が生(う)まれました。\nB: 問題(もんだい)を解決(かいけつ)するために話(はな)し合(あ)いましょう。",
   exampleSrc:"A: A conflict arose in the meeting.\nB: Let us discuss in order to resolve the problem.",
   funFact:"対立 uses 対 (face/oppose) and 立 (stand). It describes two sides standing face to face. In Japanese workplace culture, open 対立(たいりつ) is avoided because it disrupts wa (和, group harmony). Disagreements are usually expressed indirectly or resolved through a mediator rather than direct confrontation."},

  {type:"teach", trg:"誤解(ごかい)", src:"misunderstanding", pos:"noun", gender:null,
   note:"Kanji: 誤解(ごかい). 誤(ご) = mistake, 解(かい) = understanding.\n誤解(ごかい)が解(と)ける = the misunderstanding is resolved.",
   example:"A: これは誤解(ごかい)です。そう言(い)ったのではありません。\nB: 分(わ)かりました。もう一度(いちど)教(おし)えてください。",
   exampleSrc:"A: This is a misunderstanding. That is not what I said.\nB: I see. Please tell me once more.",
   funFact:"誤解 combines 誤 (mistake) and 解 (interpretation/understanding). It is the go-to word for clearing the air in Japan. Saying それは誤解(ごかい)です (that is a misunderstanding) is softer than saying 間違(まちが)っています (you are wrong). It shifts blame from the listener to the situation, preserving face for both sides."},

  {type:"teach", trg:"話(はな)し合(あ)い", src:"discussion / negotiation between parties", pos:"noun", gender:null,
   note:"Kanji: 話(はな)し合(あ)い. 話(はな)し合(あ)いをする / 持(も)つ = to hold a discussion.\nMore collaborative than 会議(かいぎ). Implies working something out.",
   example:"A: 今日(きょう)の話(はな)し合(あ)いで誤解(ごかい)が解(と)けてよかったです。\nB: はい、問題(もんだい)が解決(かいけつ)できてよかったです。",
   exampleSrc:"A: I am glad the misunderstanding was resolved in today's discussion.\nB: Yes, I am glad we could resolve the problem.",
   funFact:"話し合い (from 話す = speak + 合う = mutually) implies two-way communication, not a lecture. Japanese schools teach kids to resolve conflicts through 話し合い from an early age. It appears constantly in mediation contexts, union-management relations, and neighborhood disputes. The word itself signals a cooperative, non-adversarial approach."},

  {type:"teach", trg:"仲裁(ちゅうさい)する", src:"to mediate / to arbitrate", pos:"verb", gender:null,
   note:"Kanji: 仲裁(ちゅうさい)する. 仲(ちゅう) = relationship, 裁(さい) = judge/arbitrate.\n仲裁(ちゅうさい)に入(はい)る = to step in as mediator.",
   example:"A: 先生(せんせい)、この対立(たいりつ)を仲裁(ちゅうさい)していただけますか？\nB: 分(わ)かりました。問題(もんだい)の解決(かいけつ)のために意見(いけん)を聞(き)きます。",
   exampleSrc:"A: Teacher, could you mediate this conflict?\nB: Understood. I will listen to opinions in order to resolve the problem.",
   funFact:"仲裁 uses 仲 (relationship/middleman) and 裁 (judge). In Japanese labor law, 仲裁(ちゅうさい) is a formal dispute resolution mechanism alongside 調停(ちょうてい) (conciliation) and 審判(しんぱん) (adjudication). Outside formal legal contexts, asking a senior colleague to 仲裁(ちゅうさい)する is the most common way to resolve interpersonal conflicts at Japanese workplaces."},

  {type:"teach", trg:"謝(あやま)る", src:"to apologize", pos:"verb", gender:null,
   note:"Kanji: 謝(あやま)る. Plain verb form. 謝(あやま)ってください = please apologize.\n申(もう)し訳(わけ)ない is keigo form; 謝(あやま)る is the plain action verb.",
   example:"A: 誤解(ごかい)について謝(あやま)ってください。\nB: はい、申(もう)し訳(わけ)ありません。誤解(ごかい)させてしまいました。",
   exampleSrc:"A: Please apologize for the misunderstanding.\nB: Yes, I am sorry. I caused a misunderstanding.",
   funFact:"謝(あやま)る is the everyday verb for apologizing. Japan is famous for its apology culture. Public figures bow deeply (お辞儀(じぎ), ojigi) at press conferences. Shops open apology letters with 深(ふか)くお詫(わ)び申(もう)し上(あ)げます. Research shows Japanese speakers apologize roughly 5 times more often per day than American English speakers. Apology is social glue."},

  {type:"tip", title:"Omote and Ura in Conflict",
   text:"Japanese communication has two layers in conflict situations:\n\n表(おもて) omote = the surface / what is said publicly\n裏(うら) ura = the real intention / what is felt privately\n\nThis gap explains why direct confrontation is rare:\n- Direct criticism = destroys 面目(めんもく) (face)\n- Indirect hint = preserves harmony while signaling the problem\n\nUseful phrases:\nそれはちょっと難(むずか)しいですね = That is a bit difficult (= I disagree)\n善処(ぜんしょ)します = We will handle it well (= do not count on it)\n検討(けんとう)します = We will consider it (= probably no)\n\nWhen mediating: ask both sides to express 本音(ほんね) (true feelings) privately before any joint discussion.",
   deepDive:{title:"Why Indirect Refusal Works in Japan",
    text:"Japanese interpersonal conflict resolution follows a consistent pattern:\n\n1. Avoid direct confrontation (直接対決(ちょくせつたいけつ)を避(さ)ける)\n2. Use a go-between (仲裁者(ちゅうさいしゃ)) to carry messages\n3. Allow both sides to save face (面目(めんもく)を保(たも)つ)\n4. Reach a compromise (妥協(だきょう)) that no one is fully happy with but everyone accepts\n5. Restore the relationship (関係(かんけい)を修復(しゅうふく)する)\n\nThe word 根回(ねまわ)し (nemawashi, pre-meeting consensus building) is central. A skilled mediator arranges private conversations with each party before any formal meeting, so no one loses face publicly."}},

  {type:"teach", trg:"和解(わかい)", src:"reconciliation / settlement", pos:"noun", gender:null,
   note:"Kanji: 和解(わかい). 和(わ) = harmony, 解(かい) = resolution.\n和解(わかい)する = to reconcile. 和解(わかい)に達(たっ)する = to reach a settlement.",
   example:"A: 話(はな)し合(あ)いの末(すえ)に和解(わかい)しました。\nB: よかったです。問題(もんだい)が解決(かいけつ)しましたね。",
   exampleSrc:"A: After the discussion, we reconciled.\nB: That is good. The problem has been resolved.",
   funFact:"和解 uses 和 (harmony) and 解 (dissolve/resolve). In Japanese courts, 和解(わかい) is strongly encouraged before trial. Over 60% of civil disputes are resolved through court-assisted 和解(わかい) rather than a full verdict. This reflects the cultural value of maintaining relationships over winning arguments. The verb 和解(わかい)する can be used for personal, business, and legal reconciliation."},

  {type:"teach", trg:"訴(うった)える", src:"to appeal / to file a complaint / to take legal action", pos:"verb", gender:null,
   note:"Kanji: 訴(うった)える. 訴(うった)えを起(お)こす = to bring a lawsuit.\nAlso used informally: 上司(じょうし)に訴(うった)える = to report to the boss.",
   example:"A: このままでは上(うえ)に訴(うった)えるしかありません。\nB: その前(まえ)に和解(わかい)の可能性(かのうせい)を探(さが)りましょう。",
   exampleSrc:"A: At this rate, there is no choice but to escalate the complaint.\nB: Before that, let us explore the possibility of reconciliation.",
   funFact:"訴える has a wide range of use from 'to complain to someone' all the way to 'to sue.' In the workplace, 上司(じょうし)に訴(うった)える (report to a superior) is a common conflict-escalation step. Formally filing a legal 訴(うった)え is relatively rare in Japan compared to the US, because cultural pressure strongly favors 和解(わかい) over litigation."},

  {type:"mc", q:"誤解(ごかい)が解(と)ける means:", opts:["A misunderstanding is cleared up","A misunderstanding is created","A misunderstanding is ignored","A misunderstanding is reported"], ans:"A misunderstanding is cleared up",
   hint:"解(と)ける means to dissolve or come undone, so the … comes apart."},

  {type:"mc", q:"仲裁(ちゅうさい)に入(はい)る means:", opts:["To enter into a contract","To step in as a mediator","To join a discussion as an observer","To file a formal complaint"], ans:"To step in as a mediator",
   hint:"仲(ちゅう) refers to acting as the middle person between two parties in dispute."},

  {type:"mc", q:"訴(うった)える in a workplace context means:", opts:["To escalate a complaint to a superior","To hold a celebration","To sign a contract","To take a vacation"], ans:"To escalate a complaint to a superior",
   hint:"This verb covers both informal complaints and formal legal filings, from reporting to a manager up to filing legal action."},

  {type:"fb", s:"会議(かいぎ)で{1}が生(う)まれました。\n(A conflict arose in the meeting.)", a:"対立(たいりつ)", opts:["対立(たいりつ)","誤解(ごかい)","和解(わかい)","話(はな)し合(あ)い"], sSrc:"A conflict arose in the meeting.",
   hint:"The noun meaning two sides standing in opposition, facing each other."},

  {type:"fb", s:"話(はな)し合(あ)いの末(すえ)に{1}しました。\n(After the discussion, we reconciled.)", a:"和解(わかい)", opts:["和解(わかい)","仲裁(ちゅうさい)","対立(たいりつ)","謝(あやま)る"], sSrc:"After the discussion, we reconciled.",
   hint:"The noun meaning harmony restored, used for personal and legal reconciliation. Add する."},

  {type:"match", pairs:[{trg:"対立(たいりつ)",src:"conflict / opposition"},{trg:"誤解(ごかい)",src:"misunderstanding"},{trg:"仲裁(ちゅうさい)する",src:"to mediate"},{trg:"謝(あやま)る",src:"to apologize"},{trg:"和解(わかい)",src:"reconciliation"},{trg:"話(はな)し合(あ)い",src:"discussion / negotiation"},{trg:"訴(うった)える",src:"to appeal / file a complaint"}]},
]},

// ═══ N3 Abstract Verbs & Attitude Adjectives ═══
,{id:"jav2_u25l_n3_abstract_verbs", title:"N3 Verbs: Conviction & Prevention", icon:"🔷", xp:20, board:true, steps:[
  {type:"intro", title:"N3 Verbs: Conviction and Prevention",
   desc:"This lesson covers N3 verbs expressing belief, doubt, hope, and prevention, plus key attitude adjectives. These words appear frequently in JLPT N3 reading and listening and are essential for B1 communication.",
   goals:["Use 願う, 疑う, 防ぐ in context","Apply 完全, 真剣, 熱心, 積極的 as descriptors","Recognize 成長 as a standalone noun"]},

  {type:"teach", trg:"願(ねが)う", src:"to wish / to hope / to request", pos:"verb", gender:null,
   note:"願(ねが)う = wish from the heart. 〜を願(ねが)う = to hope for something.\n願(ねが)い = the noun form (a wish).",
   example:"A: 試験(しけん)に合格(ごうかく)できるよう願(ねが)っています。\nB: 一生懸命(いっしょうけんめい)頑張(がんば)れば、きっと大丈夫(だいじょうぶ)です。",
   exampleSrc:"A: I am hoping to pass the exam.\nB: If you work as hard as you can, I am sure it will be fine.",
   funFact:"願う uses the kanji 願(ねが), which also appears in お願(ねが)い (request / please). The difference between 願う (heartfelt wish or appeal) and 望(のぞ)む (directed desire/aspiration) is subtle: 願う emphasizes a prayer-like hope, while 望む describes aiming toward something. New Year prayers at shrines use 願(ねが)い."},

  {type:"teach", trg:"疑(うたが)う", src:"to doubt / to suspect", pos:"verb", gender:null,
   note:"疑(うたが)う = to cast doubt on. 〜を疑(うたが)う = to doubt something or someone.\n疑(うたが)い = noun: doubt, suspicion.",
   example:"A: 彼(かれ)の言葉(ことば)を疑(うたが)う理由(りゆう)がありますか？\nB: 特(とく)にはありませんが、確認(かくにん)したほうがいいと思(おも)います。",
   exampleSrc:"A: Is there a reason to doubt his words?\nB: Not particularly, but I think it would be better to confirm.",
   funFact:"疑う shares its root with 疑問(ぎもん) (doubt / question) and 疑惑(ぎわく) (suspicion). In Japanese, openly 疑う-ing someone is considered impolite because it implies distrust. The indirect phrase ちょっと確認(かくにん)させてください (let me just double-check) is culturally preferred. The passive 疑(うたが)われる (to be suspected) carries serious social weight."},

  {type:"teach", trg:"防(ふせ)ぐ", src:"to prevent / to protect against / to ward off", pos:"verb", gender:null,
   note:"防(ふせ)ぐ = block or stop something harmful before it occurs.\n〜を防(ふせ)ぐ = prevent something. 予防(よぼう) = prevention (noun).",
   example:"A: 病気(びょうき)を防(ふせ)ぐために、手(て)をよく洗(あら)ってください。\nB: はい、毎日(まいにち)の習慣(しゅうかん)が大切(たいせつ)ですね。",
   exampleSrc:"A: Please wash your hands well to prevent illness.\nB: Yes, daily habits are important.",
   funFact:"防ぐ uses the kanji 防(ふせ), which appears in 防火(ぼうか) (fire prevention), 防衛(ぼうえい) (defense), and 防犯(ぼうはん) (crime prevention). In public health messaging, 感染(かんせん)を防(ふせ)ぐ (prevent infection) is one of the most common uses. Note the て-form: 防(ふせ)いで, not 防(ふせ)ぎて, due to a voicing rule for gu-ending verbs."},

  {type:"mc", q:"Which verb means to prevent something harmful from happening?",
   opts:["願(ねが)う","疑(うたが)う","防(ふせ)ぐ","頑張(がんば)る"],
   ans:"防(ふせ)ぐ",
   hint:"This verb is used for blocking illness, accidents, or problems before they occur."},

  {type:"teach", trg:"成長(せいちょう)", src:"growth / development / maturation", pos:"noun", gender:null,
   note:"Noun form used alone. 成長(せいちょう)する = to grow (verb).\n子供(こども)の成長(せいちょう) = a child's growth. 個人(こじん)の成長(せいちょう) = personal growth.",
   example:"A: 一年間(いちねんかん)でずいぶん成長(せいちょう)しましたね。\nB: 失敗(しっぱい)から学(まな)んだことが大(おお)きかったです。",
   exampleSrc:"A: You have grown considerably over the past year.\nB: Learning from failures was a big part of it.",
   funFact:"成長(せいちょう) uses 成 (become) and 長 (grow). The same 成 appears in 成功(せいこう) (success) and 成熟(せいじゅく) (maturity). Japanese educational philosophy stresses growth through failure: the proverb 七転(ななころ)び八起(やお)き (fall seven times, rise eight) expresses this spirit. Personal growth (成長(せいちょう)) is a central theme in school graduation speeches and job interviews."},

  {type:"teach", trg:"完全(かんぜん)", src:"complete / perfect / total", pos:"adj", gender:null,
   note:"完全(かんぜん)な = complete (attributive). 完全(かんぜん)に = completely (adverb).\nNothing missing, no flaws.",
   example:"A: 完全(かんぜん)な準備(じゅんび)はできましたか？\nB: 完全(かんぜん)ではありませんが、できる限(かぎ)り頑張(がんば)りました。",
   exampleSrc:"A: Have you completed the preparations fully?\nB: Not completely, but I tried as hard as I could.",
   funFact:"完全 uses 完 (finish/complete) and 全 (all/whole). Both kanji reinforce the idea of nothing missing. 完全犯罪(かんぜんはんざい) (perfect crime) is a popular phrase from detective fiction. In daily speech, 完全(かんぜん)じゃない (not perfect) is said with humility when handing in work, even when it is excellent, reflecting Japanese modesty culture."},

  {type:"tip", title:"Conviction Verbs: Plain Form Pairs",
   text:"N3 verbs of belief and doubt often have matching nouns:\n\n願(ねが)う (verb) + 願(ねが)い (noun) = wish\n疑(うたが)う (verb) + 疑(うたが)い (noun) = doubt\n防(ふせ)ぐ (verb) + 予防(よぼう) (noun) = prevent / prevention\n\nLearning the verb-noun pair together helps with both reading and speaking tasks on JLPT.",
   deepDive:{title:"Verb Forms for N3 Practice",
    text:"These three verbs follow Group 1 (u-verb) conjugation:\n\n願(ねが)う: 願(ねが)います, 願(ねが)って, 願(ねが)わない\n疑(うたが)う: 疑(うたが)います, 疑(うたが)って, 疑(うたが)わない\n防(ふせ)ぐ: 防(ふせ)ぎます, 防(ふせ)いで, 防(ふせ)がない\n\nNote: 防ぐ takes the て-form 防(ふせ)いで, not 防(ふせ)ぎて. This voicing rule (gu endings become -ide in て-form) is tested on JLPT N3. Compare: 泳(およ)ぐ → 泳(およ)いで."}},

  {type:"teach", trg:"真剣(しんけん)", src:"serious / earnest / sincere", pos:"adj", gender:null,
   note:"真剣(しんけん)な = serious (attributive). 真剣(しんけん)に = seriously (adverb).\n真剣(しんけん)に取(と)り組(く)む = to tackle something seriously.",
   example:"A: 彼女(かのじょ)は仕事(しごと)に真剣(しんけん)に取(と)り組(く)んでいます。\nB: その積極的(せっきょくてき)な姿勢(しせい)が評価(ひょうか)されています。",
   exampleSrc:"A: She is tackling her work with earnest dedication.\nB: That proactive attitude is being recognized.",
   funFact:"真剣(しんけん) literally means 'real sword,' as opposed to 木刀(ぼくとう) (wooden practice sword). The metaphor is vivid: when you are 真剣(しんけん), you are not just practicing, you are using the real blade. The phrase 真剣勝負(しんけんしょうぶ) (a real contest, no holding back) comes from martial arts. In daily life, it signals that you mean business."},

  {type:"teach", trg:"熱心(ねっしん)", src:"enthusiastic / zealous / passionate", pos:"adj", gender:null,
   note:"熱心(ねっしん)な = enthusiastic (attributive). 熱心(ねっしん)に = enthusiastically.\n熱心(ねっしん)に勉強(べんきょう)する = to study with dedication.",
   example:"A: 田中(たなか)さんは熱心(ねっしん)に日本語(にほんご)を勉強(べんきょう)していますね。\nB: はい、毎日(まいにち)一時間(いちじかん)以上(いじょう)練習(れんしゅう)しているそうです。",
   exampleSrc:"A: Tanaka is studying Japanese very enthusiastically.\nB: Yes, apparently she practices more than one hour every day.",
   funFact:"熱心 uses 熱 (heat/fever) and 心 (heart). The image is of a heart burning with passion. Related words: 情熱(じょうねつ) (passion), 熱意(ねつい) (enthusiasm and drive). In job interviews, 何(なに)でも熱心(ねっしん)に取(と)り組(く)みます (I tackle everything with enthusiasm) is a standard self-description. Schools also value 熱心さ (dedication) as a core character trait."},

  {type:"teach", trg:"積極的(せっきょくてき)", src:"proactive / positive / assertive", pos:"adj", gender:null,
   note:"積極的(せっきょくてき)な = proactive. Opposite: 消極的(しょうきょくてき)な = passive.\n積極的(せっきょくてき)に参加(さんか)する = to participate actively.",
   example:"A: 会議(かいぎ)では積極的(せっきょくてき)に意見(いけん)を出(だ)してください。\nB: 分(わ)かりました。成長(せいちょう)のためにも積極的(せっきょくてき)に発言(はつげん)します。",
   exampleSrc:"A: Please proactively share your opinions in the meeting.\nB: Understood. I will speak up proactively for my own growth as well.",
   funFact:"積極的 uses 積 (accumulate), 極 (utmost), and 的 (adjectival suffix). Its opposite, 消極的(しょうきょくてき), combines 消 (extinguish) + 極 + 的. In modern Japanese workplaces and schools, being 積極的(せっきょくてき) is praised, while 消極的(しょうきょくてき) is gently corrected. JLPT N3 commonly tests this antonym pair."},

  {type:"fb", s:"彼女(かのじょ)は仕事(しごと)に{1}に取(と)り組(く)んでいます。\n(She is tackling her work seriously.)", a:"真剣(しんけん)", opts:["真剣(しんけん)","熱心(ねっしん)","積極的(せっきょくてき)","完全(かんぜん)"], sSrc:"She is tackling her work seriously.",
   hint:"The adjective literally meaning 'real sword,' used to express full seriousness, not just practice."},

  {type:"fb", s:"会議(かいぎ)では{1}に意見(いけん)を出(だ)してください。\n(Please proactively share your opinions in the meeting.)", a:"積極的(せっきょくてき)", opts:["積極的(せっきょくてき)","消極的(しょうきょくてき)","熱心(ねっしん)","真剣(しんけん)"], sSrc:"Please proactively share your opinions in the meeting.",
   hint:"The attitude adjective meaning active and forward-leaning, the opposite of passive."},

  {type:"fb", s:"病気(びょうき)を{1}ために、毎日(まいにち)手(て)を洗(あら)ってください。\n(Please wash your hands every day in order to prevent illness.)", a:"防(ふせ)ぐ", opts:["防(ふせ)ぐ","願(ねが)う","疑(うたが)う","成長(せいちょう)する"], sSrc:"Please wash your hands every day in order to prevent illness.",
   hint:"The verb for blocking or stopping something harmful before it can occur."},

  {type:"fb", s:"試験(しけん)に合格(ごうかく)できるよう{1}います。\n(I am hoping to pass the exam.)", a:"願(ねが)って", opts:["願(ねが)って","疑(うたが)って","防(ふせ)いで","終(お)わって"], sSrc:"I am hoping to pass the exam.",
   hint:"The te-form of the verb meaning to wish or hope from the heart."},

  {type:"mc", q:"田中(たなか)さんは日本語(にほんご)を熱心(ねっしん)に勉強(べんきょう)しています. Which best describes her?",
   opts:["She studies Japanese reluctantly","She studies Japanese with great enthusiasm","She has stopped studying Japanese","She is a Japanese teacher"],
   ans:"She studies Japanese with great enthusiasm",
   hint:"熱心(ねっしん) contains 熱 meaning heat or burning passion."},

  {type:"match", pairs:[
    {trg:"願(ねが)う", src:"to wish / to hope"},
    {trg:"疑(うたが)う", src:"to doubt / to suspect"},
    {trg:"防(ふせ)ぐ", src:"to prevent / to ward off"},
    {trg:"完全(かんぜん)", src:"complete / perfect"},
    {trg:"成長(せいちょう)", src:"growth / development"},
    {trg:"真剣(しんけん)", src:"serious / earnest"},
    {trg:"熱心(ねっしん)", src:"enthusiastic / zealous"},
    {trg:"積極的(せっきょくてき)", src:"proactive / assertive"}
  ]},
]}
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
, COVERAGE_U25]};
export default UNIT_25;
