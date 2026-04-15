// Unit 16 Expansion L4. Appointments & Time Management
// Scheduling, time expressions, being on time.

const LESSON_4 = {id:"jav2_u16l4", title:"スケジュール", icon:"⏰", xp:15, board:true, steps:[
  {type:"intro", title:"スケジュール",
   desc:"Master the vocabulary and patterns for managing your schedule in Japanese. Learn to set specific meeting times, discuss time frames, and navigate Japan's punctuality culture.",
   goals:["Set specific times for meetings and appointments","Use time-frame expressions: まで, までに, ごろ","Learn scheduling vocabulary for daily planning"]},

  {type:"teach", trg:"まちあわせ", src:"meeting up / rendezvous", pos:"noun", gender:null,
   note:"まちあわせする = to meet up (at a planned spot).\nまちあわせばしょ = meeting spot. Kanji: 待ち合わせ.",
   example:"A: まちあわせはなんじですか？\nB: ごごさんじにえきのまえでまちあわせしましょう。",
   exampleSrc:"A: What time are we meeting?\nB: Let us meet at 3 PM in front of the station.",
   funFact:"待ち合わせ combines 待つ (wait) and 合わせ (matching). Japan's meeting culture is precise: you name the exact spot, time, and exit. Famous meeting spots include Hachiko statue (Shibuya), the silver bell (Tokyo Station), and the big clock (Osaka Station). Being even 5 minutes late requires a message."},

  {type:"teach", trg:"〜ごろ", src:"around ~ (approximate time)", pos:"part", gender:null,
   note:"Time + ごろ = approximately that time.\nさんじごろ = around three o'clock.",
   example:"A: なんじごろにつきますか？\nB: よじごろにつくとおもいます。",
   exampleSrc:"A: Around what time will you arrive?\nB: I think I will arrive around four.",
   funFact:"ごろ softens time precision: さんじ (at 3) vs さんじごろ (around 3). It is appropriate for casual plans. For business meetings, precise times are expected. The similar word ぐらい (approximately) works for duration: さんじかんぐらい (about 3 hours). ごろ is for clock times only."},

  {type:"teach", trg:"〜までに", src:"by ~ (deadline)", pos:"part", gender:null,
   note:"Time/date + までに = by that deadline.\nDifferent from まで (until): までに emphasizes completion.",
   example:"A: きんようびまでにレポートをだしてください。\nB: わかりました。もくようびにだします。",
   exampleSrc:"A: Please submit the report by Friday.\nB: Understood. I will submit it on Thursday.",
   funFact:"までに (by) and まで (until) are commonly confused. ごじまで (until 5) means the action continues until 5. ごじまでに (by 5) means it must be done before the 5 o'clock deadline. This distinction matters greatly in work: 'work until 5' vs 'finish by 5' are very different instructions."},

  {type:"mc", q:"さんじごろ means:", opts:["Exactly at 3","Around 3 o'clock","Before 3","After 3"], ans:"Around 3 o'clock",
   hint:"ごろ makes a time approximate, meaning 'a...' that time."},

  {type:"teach", trg:"おくれる", src:"to be late", pos:"verb", gender:null,
   note:"Group 2 verb. おくれます = will be late. おくれてすみません = sorry for being late.\nKanji: 遅れる.",
   example:"A: すみません、じゅっぷんおくれます。\nB: だいじょうぶです。まっています。",
   exampleSrc:"A: Sorry, I will be ten minutes late.\nB: That is okay. I will wait.",
   funFact:"In Japan, even 5 minutes late requires a message or call. おくれてすみません (sorry for being late) is the standard apology. Trains that are even 1 minute late issue official delay certificates (ちえんしょうめいしょ) that passengers show their employers. Punctuality is deeply cultural."},

  {type:"teach", trg:"はやい", src:"early / fast", pos:"adj", gender:null,
   note:"い-adjective. はやくつく = arrive early. はやくおきる = wake up early.\nTwo kanji: 早い (early) and 速い (fast).",
   example:"A: すこしはやくつきました。\nB: はやいですね！ちょっとまってください。",
   exampleSrc:"A: I arrived a little early.\nB: You are early! Please wait a moment.",
   funFact:"Japanese has two kanji for はやい: 早い (early in time) and 速い (fast in speed). Arriving early is generally appreciated in Japan. For job interviews, arriving 10 minutes early is standard. For social events, arriving exactly on time or 5 minutes late is normal."},

  {type:"teach", trg:"よやく", src:"reservation / booking", pos:"noun", gender:null,
   note:"よやくする = to make a reservation. よやくばんごう = reservation number.\nKanji: 予約.",
   example:"A: レストランをよやくしましたか？\nB: はい、ろくじにふたりでよやくしました。",
   exampleSrc:"A: Did you make a restaurant reservation?\nB: Yes, I reserved for two at six.",
   funFact:"Reservations are taken very seriously in Japan. No-shows (ドタキャン, last-minute cancellation) are considered extremely rude and some restaurants charge cancellation fees. When making a reservation, you will be asked: なんめいさま (how many people), なんじ (what time), and おなまえ (your name)."},

  {type:"fb", s:"きんようび{1}にレポートをだしてください。\n(Please submit the report by Friday.)", a:"まで", opts:["まで","ごろ","から","より"], sSrc:"Please submit the report by Friday.",
   hint:"The particle marking a deadline that something must be completed before."},

  {type:"teach", trg:"キャンセルする", src:"to cancel", pos:"verb", gender:null,
   note:"From English 'cancel.' キャンセルりょうきん = cancellation fee.\nCommon loanword verb.",
   example:"A: すみません、よやくをキャンセルしたいんですが...\nB: いつのよやくですか？",
   exampleSrc:"A: Excuse me, I would like to cancel my reservation...\nB: Which reservation?",
   funFact:"キャンセル is a loanword from English 'cancel.' In polite Japanese, よやくをとりけす is the native equivalent. Japan's cancellation culture is strict: many places charge fees for late cancellations. ドタキャン (last-minute cancellation, from 土壇場 = last moment + キャンセル) is a social sin."},

  {type:"teach", trg:"かくにんする", src:"to confirm / to verify", pos:"verb", gender:null,
   note:"かくにん = confirmation. A key scheduling word.\nKanji: 確認する.",
   example:"A: よやくをかくにんしたいんですが。\nB: おなまえとよやくのひにちをおねがいします。",
   exampleSrc:"A: I would like to confirm my reservation.\nB: Your name and reservation date, please.",
   funFact:"確認 combines 確 (certain) and 認 (recognize). Confirming details is extremely important in Japanese business and daily life. Hotels, restaurants, and services often call to confirm reservations. The phrase かくにんさせてください (let me confirm) is heard constantly in customer service."},

  {type:"mc", q:"じゅっぷんおくれます means:", opts:["I will arrive 10 minutes early","I will be 10 minutes late","I will wait 10 minutes","I canceled 10 minutes ago"], ans:"I will be 10 minutes late",
   hint:"おくれる means to be l..., and じゅっぷん is 10 m...."},

  {type:"teach", trg:"ひにち", src:"date / day", pos:"noun", gender:null,
   note:"ひ (day) + にち (day). Used for scheduling specific dates.\nKanji: 日にち.",
   example:"A: ひにちがきまりましたか？\nB: はい、じゅうがつみっかにしましょう。",
   exampleSrc:"A: Has the date been decided?\nB: Yes, let us make it October 3rd.",
   funFact:"ひにち is the general word for 'date' in scheduling contexts. Japanese dates use year-month-day order: 2026年4月15日. The traditional era system (令和, Reiwa) is still used alongside Western dates. Offices and forms often require both formats."},

  {type:"teach", trg:"じかんどおり", src:"on time / on schedule", pos:"adv", gender:null,
   note:"じかん (time) + どおり (as per). Punctuality expression.\nKanji: 時間通り.",
   example:"A: かいぎはじかんどおりにはじまりますか？\nB: はい、じゅうじにはじまります。",
   exampleSrc:"A: Will the meeting start on time?\nB: Yes, it will start at ten.",
   funFact:"時間通り reflects Japan's obsession with punctuality. Trains run 時間通り (on schedule), meetings start 時間通り, and deliveries arrive 時間通り. This reliability is a source of national pride. When something does not run on time, it is noteworthy enough to make the news."},

  {type:"fb", s:"よやくを{1}したいんですが。\n(I would like to confirm my reservation.)", a:"かくにん", opts:["かくにん","キャンセル","よやく","へんこう"], sSrc:"I would like to confirm my reservation.",
   hint:"The word meaning 'to verify/confirm' something is correct."},

  {type:"match", pairs:[{trg:"まちあわせ",src:"meeting up"},{trg:"ごろ",src:"around (time)"},{trg:"までに",src:"by (deadline)"},{trg:"おくれる",src:"be late"}]},

  {type:"match", pairs:[{trg:"よやく",src:"reservation"},{trg:"キャンセルする",src:"to cancel"},{trg:"かくにんする",src:"to confirm"},{trg:"じかんどおり",src:"on time"}]},

  {type:"mc", q:"までに vs まで: きんようびまでにだす means:", opts:["Submit on Friday","Submit until Friday","Submit by Friday (deadline)","Submit after Friday"], ans:"Submit by Friday (deadline)",
   hint:"までに marks a d... by which something must be completed."},

  {type:"fb", s:"なんじ{1}につきますか？\n(Around what time will you arrive?)", a:"ごろ", opts:["ごろ","まで","から","ぐらい"], sSrc:"Around what time will you arrive?",
   hint:"The particle for approximate clock times, meaning 'around.'"},

  {type:"tip", title:"Scheduling Vocabulary",
   text:"Setting times:\nさんじに (at 3)\nさんじごろ (around 3)\nさんじまで (until 3)\nさんじまでに (by 3)\n\nMeeting up:\nまちあわせ (meet up)\nよやく (reservation)\nかくにん (confirm)\n\nPunctuality:\nじかんどおり (on time)\nおくれる (be late)\nはやい (early)\n\nChanges:\nキャンセルする (cancel)\nへんこうする (change/modify)",
   deepDive:{title:"まで vs までに clarity",
    text:"This is one of the trickiest particle distinctions:\n\nまで = until (duration continues)\nごじまではたらく (work UNTIL 5, then stop)\nThe action continues up to that point.\n\nまでに = by (deadline for completion)\nごじまでにおわらせる (finish BY 5)\nThe action must be complete before that point.\n\nThink of it this way:\nまで = the action fills the time up to the point\nまでに = the action must happen before the point\n\nA test: ごじまでまつ (wait until 5) vs ごじまでにくる (come by 5). Waiting is a duration (まで); arriving is a deadline (までに)."}},
]};
export default LESSON_4;
