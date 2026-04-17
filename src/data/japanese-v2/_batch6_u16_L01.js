// Batch 6 – Unit 16 (A2.2 Plans & Intentions): Appointments & Scheduling
const BATCH6_L1 = {
  id:"jav2_u16l_b6_1", title:"予約(よやく)とスケジュール", icon:"📅", xp:15, board:true,
  steps:[
    {type:"intro", title:"予約(よやく)とスケジュール",
     desc:"Master the vocabulary for making appointments, scheduling meetings, and managing your calendar. These skills are essential for daily life in Japan where reservations are the norm.",
     goals:["Make and change appointments","Use scheduling vocabulary confidently","Handle phone reservation interactions"]},

    {type:"teach", trg:"予約(よやく)", src:"reservation / appointment / booking", pos:"noun", gender:null,
     note:"Kanji: 予約. 予約(よやく)する = to make a reservation.\n予約(よやく)を取(と)る = to book.",
     example:"A: レストランの予約(よやく)をしたいのですが。\nB: 何日(なんにち)の何時(なんじ)がよろしいですか？",
     exampleSrc:"A: I would like to make a restaurant reservation.\nB: What date and time would you prefer?",
     funFact:"Japan is a 予約(よやく) culture. Restaurants, hair salons, dentists, and even some ramen shops take reservations. No-shows (ノーショー) are considered very rude. Many restaurants now use online reservation systems like ぐるなび and ホットペッパー."},

    {type:"teach", trg:"約束(やくそく)", src:"promise / appointment (with a person)", pos:"noun", gender:null,
     note:"Kanji: 約束. 約束(やくそく)を守(まも)る = to keep a promise.\nDifferent from 予約(よやく) (booking with a business).",
     example:"A: 明日(あした)友達(ともだち)と約束(やくそく)があります。\nB: 何(なに)をするのですか？",
     exampleSrc:"A: I have plans with a friend tomorrow.\nB: What are you going to do?",
     funFact:"約束(やくそく) is personal: a promise to a friend, a date, a meeting. 予約(よやく) is transactional: a booking at a restaurant. Children seal promises with 指切(ゆびき)りげんまん (pinky promise), a ritual where you link little fingers and chant a pledge. Breaking a 約束(やくそく) damages trust deeply."},

    {type:"teach", trg:"日にち(ひにち)", src:"date / day", pos:"noun", gender:null,
     note:"Kanji: 日にち. 日にち(ひにち)を決(き)める = to set a date.\n日にち(ひにち)を変(か)える = to change the date.",
     example:"A: 日にち(ひにち)はいつがいいですか？\nB: 来週(らいしゅう)の金曜日(きんようび)はどうですか？",
     exampleSrc:"A: What date works for you?\nB: How about next Friday?",
     funFact:"Japanese dates follow year-month-day order: 2026年(ねん)4月(がつ)16日(にち). Japan uses both Western years and the Japanese era system: 2026 is also 令和(れいわ)8年(ねん) (Reiwa 8). Official documents often require the era year."},

    {type:"teach", trg:"都合(つごう)", src:"convenience / circumstances / availability", pos:"noun", gender:null,
     note:"Kanji: 都合. 都合(つごう)がいい = convenient/available.\n都合(つごう)が悪(わる)い = inconvenient/unavailable.",
     example:"A: 土曜日(どようび)の都合(つごう)はどうですか？\nB: 土曜日(どようび)は都合(つごう)が悪(わる)いです。日曜日(にちようび)はどうですか？",
     exampleSrc:"A: How is Saturday for you?\nB: Saturday is not convenient. How about Sunday?",
     funFact:"都合(つごう) is the diplomatic way to discuss availability. 都合(つごう)が悪(わる)い (inconvenient) is the polite way to decline without explaining why. In business, 都合(つごう)により (due to circumstances) is used to cancel or postpone without giving details. This vagueness is intentionally polite."},

    {type:"teach", trg:"変更(へんこう)", src:"change / alteration", pos:"noun", gender:null,
     note:"Kanji: 変更. 予約(よやく)を変更(へんこう)する = to change a reservation.\nスケジュールの変更(へんこう) = schedule change.",
     example:"A: 予約(よやく)の日にち(ひにち)を変更(へんこう)したいのですが。\nB: いつに変更(へんこう)しますか？",
     exampleSrc:"A: I would like to change the reservation date.\nB: What date would you like to change it to?",
     funFact:"変更(へんこう) combines 変(へん) (change) and 更(こう) (renew). In business Japanese, 変更(へんこう) often requires formal notification (通知(つうち)). Flight changes (フライト変更(へんこう)), address changes (住所(じゅうしょ)変更(へんこう)), and name changes (名義(めいぎ)変更(へんこう)) all use this word."},

    {type:"mc", q:"都合(つごう)が悪(わる)い means:", opts:["Not available / inconvenient","Available / convenient","Very busy","Very free"], ans:"Not available / inconvenient",
     hint:"都合(つごう) means availability, and 悪(わる)い means bad. Together they politely decline."},

    {type:"teach", trg:"キャンセル", src:"cancellation", pos:"noun", gender:null,
     note:"Katakana loanword. キャンセルする = to cancel.\nキャンセル料(りょう) = cancellation fee.",
     example:"A: 予約(よやく)をキャンセルしたいのですが。\nB: キャンセル料(りょう)がかかりますが、よろしいですか？",
     exampleSrc:"A: I would like to cancel my reservation.\nB: There will be a cancellation fee. Is that okay?",
     funFact:"キャンセル料(りょう) (cancellation fees) are common in Japan, especially for hotels, restaurants, and events. Some 旅館(りょかん) (traditional inns) charge up to 100% for same-day cancellations. The phrase キャンセル待(ま)ち (cancellation waiting list) means hoping someone else cancels so you get a spot."},

    {type:"teach", trg:"確認(かくにん)", src:"confirmation / verification", pos:"noun", gender:null,
     note:"Kanji: 確認. 確認(かくにん)する = to confirm/verify.\n予約(よやく)の確認(かくにん) = reservation confirmation.",
     example:"A: 予約(よやく)の確認(かくにん)をお願(ねが)いします。\nB: お名前(なまえ)を教(おし)えてください。",
     exampleSrc:"A: I would like to confirm my reservation.\nB: Please tell me your name.",
     funFact:"確認(かくにん) is a workplace staple. Before any action, Japanese professionals 確認(かくにん) everything: schedules, data, instructions. ダブルチェック (double-check) is standard. The phrase 確認(かくにん)ですが (just to confirm) opens many business conversations. This thoroughness prevents errors."},

    {type:"teach", trg:"遅(おく)らせる", src:"to delay / to postpone", pos:"verb", gender:null,
     note:"Group 2 verb. Causative of 遅(おく)れる.\n会議(かいぎ)を遅(おく)らせる = to delay a meeting.",
     example:"A: 会議(かいぎ)を30分(さんじゅっぷん)遅(おく)らせてもいいですか？\nB: はい、問題(もんだい)ありません。",
     exampleSrc:"A: May I delay the meeting by 30 minutes?\nB: Yes, no problem.",
     funFact:"遅(おく)らせる is the transitive/causative form: you cause the delay. Compare with 遅(おく)れる (intransitive: to be late). In business, 延(の)ばす (to extend/postpone) is also common: 期限(きげん)を延(の)ばす (to extend a deadline). Japanese business culture values punctuality, so delays are formally communicated."},

    {type:"teach", trg:"繰(く)り返(かえ)す", src:"to repeat", pos:"verb", gender:null,
     note:"Group 1 verb. もう一度(いちど)繰(く)り返(かえ)してください = please repeat once more.\nKanji: 繰り返す.",
     example:"A: すみません、もう一度(いちど)繰(く)り返(かえ)してもらえますか？\nB: はい、予約(よやく)は4月(がつ)20日(にち)です。",
     exampleSrc:"A: Excuse me, could you repeat that once more?\nB: Yes, the reservation is April 20th.",
     funFact:"繰(く)り返(かえ)す combines 繰(く)り (reel in) and 返(かえ)す (return). It describes both physical repetition and life patterns: 同(おな)じ間違(まちが)いを繰(く)り返(かえ)す (to repeat the same mistake). In language learning, 繰(く)り返(かえ)し (repetition) is the key to mastery."},

    {type:"fb", s:"レストランの{1}をしたいのですが。\n(I would like to make a restaurant reservation.)", a:"予約(よやく)", opts:["予約(よやく)","約束(やくそく)","変更(へんこう)","確認(かくにん)"], sSrc:"I would like to make a restaurant reservation.",
     hint:"The word for making a booking at a business establishment."},

    {type:"teach", trg:"空(あ)いている", src:"to be open / to be available (time/space)", pos:"verb", gender:null,
     note:"て-form of 空(あ)く (to open/be free). 窓(まど)が空(あ)いている = the window is open.\n時間(じかん)が空(あ)いている = have free time.",
     example:"A: 水曜日(すいようび)は空(あ)いていますか？\nB: 午後(ごご)なら空(あ)いています。",
     exampleSrc:"A: Are you free on Wednesday?\nB: I am free in the afternoon.",
     funFact:"空(あ)いている is used for both physical openness (door, window) and schedule availability. すみません、この席(せき)は空(あ)いていますか (excuse me, is this seat available?) is one of the most frequently used phrases on trains and in cafes. The double meaning makes it very versatile."},

    {type:"teach", trg:"折(お)り返(かえ)し", src:"return (call/contact)", pos:"noun", gender:null,
     note:"折(お)り返(かえ)し電話(でんわ)する = to call back.\nLiterally: folding back.",
     example:"A: 折(お)り返(かえ)しお電話(でんわ)いただけますか？\nB: はい、何時(なんじ)ごろがよろしいですか？",
     exampleSrc:"A: Could you call me back?\nB: Yes, what time would be good?",
     funFact:"折(お)り返(かえ)し literally means 'folding back,' like a letter being folded and returned. In business, 折(お)り返(かえ)し電話(でんわ) (return call) is standard practice. 折(お)り返(かえ)し連絡(れんらく)します (I will get back to you) is a common way to buy time before committing."},

    {type:"mc", q:"確認(かくにん) means:", opts:["Confirmation or verification","Cancellation","Reservation","Change"], ans:"Confirmation or verification",
     hint:"This word is about checking and making sure something is correct."},

    {type:"match", pairs:[
      {trg:"予約(よやく)", src:"reservation"},
      {trg:"約束(やくそく)", src:"promise / plans with someone"},
      {trg:"キャンセル", src:"cancellation"},
      {trg:"変更(へんこう)", src:"change"},
      {trg:"確認(かくにん)", src:"confirmation"}
    ]},

    {type:"fb", s:"水曜日(すいようび)は{1}いますか？\n(Are you free on Wednesday?)", a:"空(あ)いて", opts:["空(あ)いて","開(あ)けて","閉(し)めて","決(き)めて"], sSrc:"Are you free on Wednesday?",
     hint:"The て-form of 空(あ)く, describing being available or open."},

    {type:"mc", q:"折(お)り返(かえ)し relates to:", opts:["Returning a call or message","Making a new reservation","Arriving on time","Going to sleep"], ans:"Returning a call or message",
     hint:"This word literally means 'folding back' and is used for return contact."}
  ]
};
export default BATCH6_L1;
