// Batch 6 – Unit 16 (A2.2 Plans & Intentions): Appointments & Scheduling
const BATCH6_L1 = {
  id:"jav2_u16l_b6_1", title:"よやくとスケジュール", icon:"📅", xp:15, board:true,
  steps:[
    {type:"intro", title:"よやくとスケジュール",
     desc:"Master the vocabulary for making appointments, scheduling meetings, and managing your calendar. These skills are essential for daily life in Japan where reservations are the norm.",
     goals:["Make and change appointments","Use scheduling vocabulary confidently","Handle phone reservation interactions"]},

    {type:"teach", trg:"よやく", src:"reservation / appointment / booking", pos:"noun", gender:null,
     note:"Kanji: 予約. よやくする = to make a reservation.\nよやくをとる = to book.",
     example:"A: レストランのよやくをしたいのですが。\nB: なんにちのなんじがよろしいですか？",
     exampleSrc:"A: I would like to make a restaurant reservation.\nB: What date and time would you prefer?",
     funFact:"Japan is a よやく culture. Restaurants, hair salons, dentists, and even some ramen shops take reservations. No-shows (ノーショー) are considered very rude. Many restaurants now use online reservation systems like ぐるなび and ホットペッパー."},

    {type:"teach", trg:"やくそく", src:"promise / appointment (with a person)", pos:"noun", gender:null,
     note:"Kanji: 約束. やくそくをまもる = to keep a promise.\nDifferent from よやく (booking with a business).",
     example:"A: あしたともだちとやくそくがあります。\nB: なにをするのですか？",
     exampleSrc:"A: I have plans with a friend tomorrow.\nB: What are you going to do?",
     funFact:"やくそく is personal: a promise to a friend, a date, a meeting. よやく is transactional: a booking at a restaurant. Children seal promises with ゆびきりげんまん (pinky promise), a ritual where you link little fingers and chant a pledge. Breaking a やくそく damages trust deeply."},

    {type:"teach", trg:"ひにち", src:"date / day", pos:"noun", gender:null,
     note:"Kanji: 日にち. ひにちをきめる = to set a date.\nひにちをかえる = to change the date.",
     example:"A: ひにちはいつがいいですか？\nB: らいしゅうのきんようびはどうですか？",
     exampleSrc:"A: What date works for you?\nB: How about next Friday?",
     funFact:"Japanese dates follow year-month-day order: 2026年4月16日 (April 16, 2026). Japan uses both Western years and the Japanese era system: 2026 is also れいわはちねん (Reiwa 8). Official documents often require the era year."},

    {type:"teach", trg:"つごう", src:"convenience / circumstances / availability", pos:"noun", gender:null,
     note:"Kanji: 都合. つごうがいい = convenient/available.\nつごうがわるい = inconvenient/unavailable.",
     example:"A: どようびのつごうはどうですか？\nB: どようびはつごうがわるいです。にちようびはどうですか？",
     exampleSrc:"A: How is Saturday for you?\nB: Saturday is not convenient. How about Sunday?",
     funFact:"つごう is the diplomatic way to discuss availability. つごうがわるい (inconvenient) is the polite way to decline without explaining why. In business, つごうにより (due to circumstances) is used to cancel or postpone without giving details. This vagueness is intentionally polite."},

    {type:"teach", trg:"へんこう", src:"change / alteration", pos:"noun", gender:null,
     note:"Kanji: 変更. よやくをへんこうする = to change a reservation.\nスケジュールのへんこう = schedule change.",
     example:"A: よやくのひにちをへんこうしたいのですが。\nB: いつにへんこうしますか？",
     exampleSrc:"A: I would like to change the reservation date.\nB: What date would you like to change it to?",
     funFact:"へんこう combines 変 (change) and 更 (renew). In business Japanese, へんこう often requires formal notification (つうち). Flight changes (フライトへんこう), address changes (じゅうしょへんこう), and name changes (めいぎへんこう) all use this word."},

    {type:"mc", q:"つごうがわるい means:", opts:["Not available / inconvenient","Available / convenient","Very busy","Very free"], ans:"Not available / inconvenient",
     hint:"つごう means availability, and わるい means bad. Together they politely decline."},

    {type:"teach", trg:"キャンセル", src:"cancellation", pos:"noun", gender:null,
     note:"Katakana loanword. キャンセルする = to cancel.\nキャンセルりょう = cancellation fee.",
     example:"A: よやくをキャンセルしたいのですが。\nB: キャンセルりょうがかかりますが、よろしいですか？",
     exampleSrc:"A: I would like to cancel my reservation.\nB: There will be a cancellation fee. Is that okay?",
     funFact:"キャンセルりょう (cancellation fees) are common in Japan, especially for hotels, restaurants, and events. Some ryokan (traditional inns) charge up to 100% for same-day cancellations. The phrase キャンセルまち (cancellation waiting list) means hoping someone else cancels so you get a spot."},

    {type:"teach", trg:"かくにん", src:"confirmation / verification", pos:"noun", gender:null,
     note:"Kanji: 確認. かくにんする = to confirm/verify.\nよやくのかくにん = reservation confirmation.",
     example:"A: よやくのかくにんをおねがいします。\nB: おなまえをおしえてください。",
     exampleSrc:"A: I would like to confirm my reservation.\nB: Please tell me your name.",
     funFact:"かくにん is a workplace staple. Before any action, Japanese professionals かくにん everything: schedules, data, instructions. ダブルチェック (double-check) is standard. The phrase かくにんですが (just to confirm) opens many business conversations. This thoroughness prevents errors."},

    {type:"teach", trg:"おくらせる", src:"to delay / to postpone", pos:"verb", gender:null,
     note:"Group 2 verb. Causative of おくれる.\nかいぎをおくらせる = to delay a meeting.",
     example:"A: かいぎをさんじゅっぷんおくらせてもいいですか？\nB: はい、もんだいありません。",
     exampleSrc:"A: May I delay the meeting by 30 minutes?\nB: Yes, no problem.",
     funFact:"おくらせる is the transitive/causative form: you cause the delay. Compare with おくれる (intransitive: to be late). In business, のばす (to extend/postpone) is also common: きげんをのばす (to extend a deadline). Japanese business culture values punctuality, so delays are formally communicated."},

    {type:"teach", trg:"くりかえす", src:"to repeat", pos:"verb", gender:null,
     note:"Group 1 verb. もういちどくりかえしてください = please repeat once more.\nKanji: 繰り返す.",
     example:"A: すみません、もういちどくりかえしてもらえますか？\nB: はい、よやくは4がつ20にちです。",
     exampleSrc:"A: Excuse me, could you repeat that once more?\nB: Yes, the reservation is April 20th.",
     funFact:"くりかえす (繰り返す) combines 繰り (reel in) and 返す (return). It describes both physical repetition and life patterns: おなじまちがいをくりかえす (to repeat the same mistake). In language learning, くりかえし (repetition) is the key to mastery."},

    {type:"fb", s:"レストランの{1}をしたいのですが。\n(I would like to make a restaurant reservation.)", a:"よやく", opts:["よやく","やくそく","へんこう","かくにん"], sSrc:"I would like to make a restaurant reservation.",
     hint:"The word for making a booking at a business establishment."},

    {type:"teach", trg:"あいている", src:"to be open / to be available (time/space)", pos:"verb", gender:null,
     note:"て-form of あく (to open/be free). まどがあいている = the window is open.\nじかんがあいている = have free time.",
     example:"A: すいようびはあいていますか？\nB: ごごならあいています。",
     exampleSrc:"A: Are you free on Wednesday?\nB: I am free in the afternoon.",
     funFact:"あいている is used for both physical openness (door, window) and schedule availability. すみません、このせきはあいていますか (excuse me, is this seat available?) is one of the most frequently used phrases on trains and in cafes. The double meaning makes it very versatile."},

    {type:"teach", trg:"おりかえし", src:"return (call/contact)", pos:"noun", gender:null,
     note:"おりかえしでんわする = to call back.\nLiterally: folding back.",
     example:"A: おりかえしおでんわいただけますか？\nB: はい、なんじごろがよろしいですか？",
     exampleSrc:"A: Could you call me back?\nB: Yes, what time would be good?",
     funFact:"おりかえし (折り返し) literally means 'folding back,' like a letter being folded and returned. In business, おりかえしでんわ (return call) is standard practice. Saying おりかえしれんらくします (I will get back to you) is a common way to buy time before committing."},

    {type:"mc", q:"かくにん means:", opts:["Confirmation or verification","Cancellation","Reservation","Change"], ans:"Confirmation or verification",
     hint:"This word is about checking and making sure something is correct."},

    {type:"match", pairs:[
      {trg:"よやく", src:"reservation"},
      {trg:"やくそく", src:"promise / plans with someone"},
      {trg:"キャンセル", src:"cancellation"},
      {trg:"へんこう", src:"change"},
      {trg:"かくにん", src:"confirmation"}
    ]},

    {type:"fb", s:"すいようびは{1}いますか？\n(Are you free on Wednesday?)", a:"あいて", opts:["あいて","あけて","しめて","きめて"], sSrc:"Are you free on Wednesday?",
     hint:"The て-form of あく, describing being available or open."},

    {type:"mc", q:"おりかえし relates to:", opts:["Returning a call or message","Making a new reservation","Arriving on time","Going to sleep"], ans:"Returning a call or message",
     hint:"This word literally means 'folding back' and is used for return contact."}
  ]
};
export default BATCH6_L1;
