// Batch 11 – Unit 16 (A2.2 Plans & Intentions): Future Plans & Scheduling
const BATCH11_L1 = {
  id:"jav2_u16l_b11_1", title:"よていとけいかく", icon:"📆", xp:15, board:true,
  steps:[
    {type:"intro", title:"よていとけいかく",
     desc:"Learn vocabulary for making plans, scheduling events, and talking about future intentions. Essential for social and professional life in Japan.",
     goals:["Use planning vocabulary: よてい, けいかく, やくそく","Express future plans with つもり and よてい","Make and confirm appointments"]},

    {type:"teach", trg:"よてい", src:"plan / schedule", pos:"noun", gender:null,
     note:"よていがある = have plans. よていどおり = as planned.\nMore concrete than けいかく.",
     example:"A: こんしゅうまつのよていはありますか？\nB: どようびにともだちにあうよていです。",
     exampleSrc:"A: Do you have plans this weekend?\nB: I plan to meet a friend on Saturday.",
     funFact:"よてい is for concrete, scheduled plans (like calendar items). けいかく is for broader plans or strategies. In business, よていひょう (schedule table) is a common document. Japanese people are meticulous planners, and asking about よてい is the standard way to organize group activities."},

    {type:"teach", trg:"やくそく", src:"promise / appointment", pos:"noun", gender:null,
     note:"やくそくする = to promise/make an appointment.\nゆびきり = pinky promise.",
     example:"A: あしたのやくそくをわすれないでください。\nB: もちろん、じゅうじにいきます。",
     exampleSrc:"A: Please don't forget tomorrow's appointment.\nB: Of course, I will be there at 10.",
     funFact:"やくそく covers both promises and appointments. ゆびきりげんまん (pinky promise) is a famous children's rhyme where breaking a promise means 'swallowing a thousand needles.' やくそくのじかん (the promised time) being late in Japan is a serious social offense."},

    {type:"teach", trg:"つもり", src:"intention / plan to", pos:"noun", gender:null,
     note:"Verb (dictionary form) + つもりです = I intend to...\nExpresses personal intention.",
     example:"A: なつやすみになにをするつもりですか？\nB: にほんにいくつもりです。",
     exampleSrc:"A: What do you intend to do during summer vacation?\nB: I intend to go to Japan.",
     funFact:"つもり expresses firm personal intention: いくつもり = I intend to go. It can also describe mistaken self-perception: わかったつもり = I THINK I understand (but maybe don't). This second usage reveals a philosophical depth: people often believe they understand more than they actually do."},

    {type:"teach", trg:"じゅんび", src:"preparation", pos:"noun", gender:null,
     note:"じゅんびする = to prepare.\nじゅんびができた = preparations are done.",
     example:"A: りょこうのじゅんびはできましたか？\nB: まだです。にもつをつめなければなりません。",
     exampleSrc:"A: Are the travel preparations done?\nB: Not yet. I still need to pack.",
     funFact:"じゅんび (preparation) is almost a philosophy in Japan. The concept of 段取り (danturi, systematic preparation) is valued in workplaces. Japanese festivals require months of じゅんび. Even daily tasks like making tea have proper preparation rituals. Being unprepared (準備不足) is considered a serious failing."},

    {type:"teach", trg:"きめる", src:"to decide", pos:"verb", gender:null,
     note:"Group 2 verb. て-form: きめて.\nきまった = it's decided / settled.",
     example:"A: レストランはきめましたか？\nB: はい、イタリアンにきめました。",
     exampleSrc:"A: Have you decided on a restaurant?\nB: Yes, I decided on Italian.",
     funFact:"きめる (to decide) and きまる (to be decided) form an important transitive/intransitive pair. わたしがきめた = I decided (active). じかんがきまった = The time was decided (the time settled itself). Japanese often uses the intransitive form to avoid attributing decisions to specific people, maintaining group harmony."},

    {type:"teach", trg:"さそう", src:"to invite / to ask someone to join", pos:"verb", gender:null,
     note:"Group 1 verb. て-form: さそって.\nおさそい = invitation (polite noun form).",
     example:"A: いっしょにカラオケにいきませんか？\nB: さそってくれてありがとう！いきます。",
     exampleSrc:"A: Won't you come to karaoke with us?\nB: Thank you for inviting me! I'll go.",
     funFact:"Japanese has multiple invitation levels: さそう (actively invite), よぶ (call/summon), しょうたいする (formally invite). The polite way to invite is ...ませんか (Won't you...?) rather than a direct command. Declining invitations requires skillful indirect language to avoid hurting feelings."},

    {type:"teach", trg:"ことわる", src:"to refuse / to decline", pos:"verb", gender:null,
     note:"Group 1 verb. て-form: ことわって.\nていねいにことわる = decline politely.",
     example:"A: のみかいにいきませんか？\nB: すみません、きょうはちょっと... またこんどおねがいします。",
     exampleSrc:"A: Won't you come to the drinking party?\nB: Sorry, today is a bit... Maybe next time.",
     funFact:"Directly saying いいえ (no) or ことわります (I decline) feels very harsh in Japanese. Instead, people use ちょっと... (a little...) and trail off, letting the listener understand the refusal. またこんど (next time) is often a polite way to decline without committing. Reading these signals is essential cultural literacy."},

    {type:"teach", trg:"かくにん", src:"confirmation / checking", pos:"noun", gender:null,
     note:"かくにんする = to confirm/verify.\nかくにんしてください = please check.",
     example:"A: よやくのかくにんをおねがいします。\nB: はい、ごよやくはさんめいさまです。",
     exampleSrc:"A: I'd like to confirm my reservation.\nB: Yes, your reservation is for three people.",
     funFact:"かくにん (confirmation) is a ritual in Japanese business culture. Emails are followed by phone calls to confirm receipt. Meetings end with a summary to confirm understanding. This thoroughness (念入り) prevents miscommunication and is a key reason for Japan's high service quality."},

    {type:"teach", trg:"へんこう", src:"change / modification", pos:"noun", gender:null,
     note:"へんこうする = to change/modify.\nよていをへんこうする = change the schedule.",
     example:"A: よていをへんこうしてもいいですか？\nB: だいじょうぶです。いつがいいですか？",
     exampleSrc:"A: May I change the schedule?\nB: That's fine. When would be good?",
     funFact:"へんこう is the formal word for modifying plans, schedules, or orders. In business, へんこういらい (change request) is a formal document. Japanese service culture handles changes gracefully, but last-minute changes (直前のへんこう) are considered troublesome and should be avoided when possible."},

    {type:"teach", trg:"ちこく", src:"being late / tardiness", pos:"noun", gender:null,
     note:"ちこくする = to be late.\nちこくしてすみません = sorry for being late.",
     example:"A: ちこくしてすみません！\nB: だいじょうぶですよ。さっきついたばかりです。",
     exampleSrc:"A: Sorry for being late!\nB: It's okay. I just arrived myself.",
     funFact:"ちこく is taken very seriously in Japan. Many schools record lateness, and repeated ちこく can affect job prospects. Japanese trains issue late certificates (遅延証明書) so commuters can prove their tardiness was the train's fault, not their own. This document is presented to employers without shame."},

    {type:"teach", trg:"キャンセル", src:"cancellation", pos:"noun", gender:null,
     note:"キャンセルする = to cancel.\nキャンセルりょう = cancellation fee.",
     example:"A: よやくをキャンセルしたいのですが。\nB: キャンセルりょうがかかりますがよろしいですか？",
     exampleSrc:"A: I would like to cancel my reservation.\nB: There will be a cancellation fee. Is that okay?",
     funFact:"Japan's cancellation culture is formal: hotels, restaurants, and events have clear キャンセルポリシー (cancellation policies). ドタキャン (last-minute cancellation, from 土壇場キャンセル) is considered extremely rude. Some restaurants now require credit card deposits to prevent ドタキャン, especially after the rise of no-show problems."},

    // Quiz steps
    {type:"mc", q:"「よてい」と「けいかく」はどうちがいますか？",
     opts:["よてい is more concrete/scheduled, けいかく is broader","They are the same","よてい is casual, けいかく is formal","よてい is for work, けいかく is for personal"],
     ans:"よてい is more concrete/scheduled, けいかく is broader",
     hint:"Think calendar appointment vs strategic plan. One is specific and time-bound, the other is a general plan."},

    {type:"fb", s:"なつやすみににほんに{1}つもりです。",
     a:["いく"],
     opts:["いく","いった","いって","いきます"],
     hint:"With つもり, use the dictionary (plain present) form of the verb to express intention.",
     sSrc:"I intend to go to Japan during summer vacation."},

    {type:"match", pairs:[
      {trg:"さそう", src:"to invite"},
      {trg:"ことわる", src:"to decline"},
      {trg:"かくにん", src:"confirmation"},
      {trg:"キャンセル", src:"cancellation"}
    ]},

    {type:"mc", q:"にほんでおくれたとき、でんしゃのかいしゃはなにをだしますか？",
     opts:["Late certificate (遅延証明書)","A free ticket","An apology letter","A discount coupon"],
     ans:"Late certificate (遅延証明書)",
     hint:"This document proves to employers that the commuter's tardiness was caused by the train, not personal responsibility."},

    {type:"fb", s:"のみかいにいきませんか？すみません、きょうは{1}...",
     a:["ちょっと"],
     opts:["ちょっと","はい","いいえ","だめ"],
     hint:"Japanese people rarely refuse directly. Instead, they use a soft trailing phrase meaning 'a little...' to imply they cannot attend.",
     sSrc:"Won't you come to the drinking party? Sorry, today is a bit..."},

    {type:"mc", q:"「ドタキャン」はなんですか？",
     opts:["Last-minute cancellation","A type of dance","A card game","A morning exercise"],
     ans:"Last-minute cancellation",
     hint:"This slang word combines 'l... moment' with 'cancel' and describes something considered very rude in Japanese culture."}
  ]
};
export default BATCH11_L1;
