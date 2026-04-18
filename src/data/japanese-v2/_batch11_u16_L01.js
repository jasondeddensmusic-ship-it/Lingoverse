// Batch 11 – Unit 16 (A2.2 Plans & Intentions): Future Plans & Scheduling
const BATCH11_L1 = {
  id:"jav2_u16l_b11_1", title:"予定(よてい)と計画(けいかく)", icon:"📆", xp:15, board:true,
  steps:[
    {type:"intro", title:"予定(よてい)と計画(けいかく)",
     desc:"Learn vocabulary for making plans, scheduling events, and talking about future intentions. Essential for social and professional life in Japan.",
     goals:["Use planning vocabulary: 予定(よてい), 計画(けいかく), 約束(やくそく)","Express future plans with つもり and 予定(よてい)","Make and confirm appointments"]},

    {type:"teach", trg:"予定(よてい)", src:"plan / schedule", pos:"noun", gender:null,
     note:"予定(よてい)がある = have plans. 予定(よてい)どおり = as planned.\nMore concrete than 計画(けいかく).",
     example:"A: 今週末(こんしゅうまつ)の予定(よてい)はありますか？\nB: 土曜日(どようび)に友達(ともだち)に会(あ)う予定(よてい)です。\nA: どのくらいかかりましたか？\nB: だいたい二時間(にじかん)ぐらいです。",
     exampleSrc:"A: Do you have plans this weekend?\nB: I plan to meet a friend on Saturday.\nA: How long did it take?\nB: About two hours.",
     funFact:"予定(よてい) is for concrete, scheduled plans (like calendar items). 計画(けいかく) is for broader plans or strategies. In business, 予定表(よていひょう) (schedule table) is a common document. Japanese people are meticulous planners, and asking about 予定(よてい) is the standard way to organize group activities."},

    {type:"teach", trg:"約束(やくそく)", src:"promise / appointment", pos:"noun", gender:null,
     note:"約束(やくそく)する = to promise/make an appointment.\n指切(ゆびき)り = pinky promise.",
     example:"A: 明日(あした)の約束(やくそく)を忘(わす)れないでください。\nB: もちろん、十時(じゅうじ)に行(い)きます。\nA: 難(むずか)しかったですか？\nB: 最初(さいしょ)は難(むずか)しかったですが、慣(な)れました。",
     exampleSrc:"A: Please don't forget tomorrow's appointment.\nB: Of course, I will be there at 10.\nA: Was it difficult?\nB: It was difficult at first, but I got used to it.",
     funFact:"約束(やくそく) covers both promises and appointments. 指切(ゆびき)りげんまん (pinky promise) is a famous children's rhyme where breaking a promise means 'swallowing a thousand needles.' 約束(やくそく)の時間(じかん) (the promised time) being late in Japan is a serious social offense."},

    {type:"teach", trg:"つもり", src:"intention / plan to", pos:"noun", gender:null,
     note:"Verb (dictionary form) + つもりです = I intend to...\nExpresses personal intention.",
     example:"A: 夏休(なつやす)みに何(なに)をするつもりですか？\nB: 日本(にほん)に行(い)くつもりです。\nA: おすすめですか？\nB: はい、ぜひ試(ため)してみてください。",
     exampleSrc:"A: What do you intend to do during summer vacation?\nB: I intend to go to Japan.\nA: Do you recommend it?\nB: Yes, please try it.",
     funFact:"つもり expresses firm personal intention: 行(い)くつもり = I intend to go. It can also describe mistaken self-perception: わかったつもり = I THINK I understand (but maybe don't). This second usage reveals a philosophical depth: people often believe they understand more than they actually do."},

    {type:"teach", trg:"準備(じゅんび)", src:"preparation", pos:"noun", gender:null,
     note:"準備(じゅんび)する = to prepare.\n準備(じゅんび)ができた = preparations are done.",
     example:"A: 旅行(りょこう)の準備(じゅんび)はできましたか？\nB: まだです。荷物(にもつ)を詰(つ)めなければなりません。\nA: 一緒(いっしょ)に行(い)きませんか？\nB: いいですね。行(い)きましょう。",
     exampleSrc:"A: Are the travel preparations done?\nB: Not yet. I still need to pack.\nA: Shall we go together?\nB: That sounds good. Let's go.",
     funFact:"準備(じゅんび) (preparation) is almost a philosophy in Japan. The concept of 段取(だんど)り (systematic preparation) is valued in workplaces. Japanese festivals require months of 準備(じゅんび). Even daily tasks like making tea have proper preparation rituals. Being unprepared (準備不足(じゅんびぶそく)) is considered a serious failing."},

    {type:"teach", trg:"決(き)める", src:"to decide", pos:"verb", gender:null,
     note:"Group 2 verb. て-form: 決(き)めて.\n決(き)まった = it's decided / settled.",
     example:"A: レストランは決(き)めましたか？\nB: はい、イタリアンに決(き)めました。\nA: どこがおすすめですか？\nB: 京都(きょうと)がおすすめです。",
     exampleSrc:"A: Have you decided on a restaurant?\nB: Yes, I decided on Italian.\nA: Where do you recommend?\nB: I recommend Kyoto.",
     funFact:"決(き)める (to decide) and 決(き)まる (to be decided) form an important transitive/intransitive pair. 私(わたし)が決(き)めた = I decided (active). 時間(じかん)が決(き)まった = The time was decided (the time settled itself). Japanese often uses the intransitive form to avoid attributing decisions to specific people, maintaining group harmony."},

    {type:"teach", trg:"誘(さそ)う", src:"to invite / to ask someone to join", pos:"verb", gender:null,
     note:"Group 1 verb. て-form: 誘(さそ)って.\nお誘(さそ)い = invitation (polite noun form).",
     example:"A: 一緒(いっしょ)にカラオケに行(い)きませんか？\nB: 誘(さそ)ってくれてありがとう！行(い)きます。\nA: 何(なに)が一番(いちばん)良(よ)かったですか？\nB: 食(た)べ物(もの)が一番(いちばん)おいしかったです。",
     exampleSrc:"A: Won't you come to karaoke with us?\nB: Thank you for inviting me! I'll go.\nA: What was the best part?\nB: The food was the most delicious.",
     funFact:"Japanese has multiple invitation levels: 誘(さそ)う (actively invite), 呼(よ)ぶ (call/summon), 招待(しょうたい)する (formally invite). The polite way to invite is ...ませんか (Won't you...?) rather than a direct command. Declining invitations requires skillful indirect language to avoid hurting feelings."},

    {type:"teach", trg:"断(ことわ)る", src:"to refuse / to decline", pos:"verb", gender:null,
     note:"Group 1 verb. て-form: 断(ことわ)って.\n丁寧(ていねい)に断(ことわ)る = decline politely.",
     example:"A: 飲(の)み会(かい)に行(い)きませんか？\nB: すみません、今日(きょう)はちょっと... またこんどお願(ねが)いします。\nA: よく行(い)きますか？\nB: 月(つき)に一回(いっかい)ぐらい行(い)きます。",
     exampleSrc:"A: Won't you come to the drinking party?\nB: Sorry, today is a bit... Maybe next time.\nA: Do you go often?\nB: I go about once a month.",
     funFact:"Directly saying いいえ (no) or 断(ことわ)ります (I decline) feels very harsh in Japanese. Instead, people use ちょっと... (a little...) and trail off, letting the listener understand the refusal. またこんど (next time) is often a polite way to decline without committing. Reading these signals is essential cultural literacy."},

    {type:"teach", trg:"確認(かくにん)", src:"confirmation / checking", pos:"noun", gender:null,
     note:"確認(かくにん)する = to confirm/verify.\n確認(かくにん)してください = please check.",
     example:"A: 予約(よやく)の確認(かくにん)をお願(ねが)いします。\nB: はい、ご予約(よやく)は三名様(さんめいさま)です。\nA: 誰(だれ)と行(い)きましたか？\nB: 友達(ともだち)と一緒(いっしょ)に行(い)きました。",
     exampleSrc:"A: I'd like to confirm my reservation.\nB: Yes, your reservation is for three people.\nA: Who did you go with?\nB: I went with a friend.",
     funFact:"確認(かくにん) (confirmation) is a ritual in Japanese business culture. Emails are followed by phone calls to confirm receipt. Meetings end with a summary to confirm understanding. This thoroughness (念入(ねんい)り) prevents miscommunication and is a key reason for Japan's high service quality."},

    {type:"teach", trg:"変更(へんこう)", src:"change / modification", pos:"noun", gender:null,
     note:"変更(へんこう)する = to change/modify.\n予定(よてい)を変更(へんこう)する = change the schedule.",
     example:"A: 予定(よてい)を変更(へんこう)してもいいですか？\nB: 大丈夫(だいじょうぶ)です。いつがいいですか？\nA: それは大変(たいへん)でしたね。\nB: はい、でもいい勉強(べんきょう)になりました。",
     exampleSrc:"A: May I change the schedule?\nB: That's fine. When would be good?\nA: That must have been tough.\nB: Yes, but it was a good learning experience.",
     funFact:"変更(へんこう) is the formal word for modifying plans, schedules, or orders. In business, 変更依頼(へんこういらい) (change request) is a formal document. Japanese service culture handles changes gracefully, but last-minute changes (直前(ちょくぜん)の変更(へんこう)) are considered troublesome and should be avoided when possible."},

    {type:"teach", trg:"遅刻(ちこく)", src:"being late / tardiness", pos:"noun", gender:null,
     note:"遅刻(ちこく)する = to be late.\n遅刻(ちこく)してすみません = sorry for being late.",
     example:"A: 遅刻(ちこく)してすみません！\nB: 大丈夫(だいじょうぶ)ですよ。さっき着(つ)いたばかりです。\nA: 本当(ほんとう)ですか？すごいですね。\nB: ありがとうございます。頑張(がんば)りました。",
     exampleSrc:"A: Sorry for being late!\nB: It's okay. I just arrived myself.\nA: Really? That is amazing.\nB: Thank you. I worked hard.",
     funFact:"遅刻(ちこく) is taken very seriously in Japan. Many schools record lateness, and repeated 遅刻(ちこく) can affect job prospects. Japanese trains issue late certificates (遅延証明書(ちえんしょうめいしょ)) so commuters can prove their tardiness was the train's fault, not their own. This document is presented to employers without shame."},

    {type:"teach", trg:"キャンセル", src:"cancellation", pos:"noun", gender:null,
     note:"キャンセルする = to cancel.\nキャンセル料(りょう) = cancellation fee.",
     example:"A: 予約(よやく)をキャンセルしたいのですが。\nB: キャンセル料(りょう)がかかりますがよろしいですか？\nA: 私(わたし)も興味(きょうみ)があります。\nB: じゃあ、今度(こんど)一緒(いっしょ)にどうですか？",
     exampleSrc:"A: I would like to cancel my reservation.\nB: There will be a cancellation fee. Is that okay?\nA: I am also interested.\nB: Then, how about doing it together next time?",
     funFact:"Japan's cancellation culture is formal: hotels, restaurants, and events have clear キャンセルポリシー (cancellation policies). ドタキャン (last-minute cancellation, from 土壇場(どたんば)キャンセル) is considered extremely rude. Some restaurants now require credit card deposits to prevent ドタキャン, especially after the rise of no-show problems."},

    // Quiz steps
    {type:"mc", q:"「予定(よてい)」と「計画(けいかく)」はどう違(ちが)いますか？",
     opts:["予定(よてい) is more concrete/scheduled, 計画(けいかく) is broader","They are the same","予定(よてい) is casual, 計画(けいかく) is formal","予定(よてい) is for work, 計画(けいかく) is for personal"],
     ans:"予定(よてい) is more concrete/scheduled, 計画(けいかく) is broader",
     hint:"Think calendar appointment vs strategic plan. One is specific and time-bound, the other is a general plan."},

    {type:"fb", s:"夏休(なつやす)みに日本(にほん)に{1}つもりです。",
     a:["行(い)く"],
     opts:["行(い)く","行(い)った","行(い)って","行(い)きます"],
     hint:"With つもり, use the dictionary (plain present) form of the verb to express intention.",
     sSrc:"I intend to go to Japan during summer vacation."},

    {type:"match", pairs:[
      {trg:"誘(さそ)う", src:"to invite"},
      {trg:"断(ことわ)る", src:"to decline"},
      {trg:"確認(かくにん)", src:"confirmation"},
      {trg:"キャンセル", src:"cancellation"}
    ]},

    {type:"mc", q:"日本(にほん)で遅(おく)れたとき、電車(でんしゃ)の会社(かいしゃ)は何(なに)を出(だ)しますか？",
     opts:["Late certificate (遅延証明書(ちえんしょうめいしょ))","A free ticket","An apology letter","A discount coupon"],
     ans:"Late certificate (遅延証明書(ちえんしょうめいしょ))",
     hint:"This document proves to employers that the commuter's tardiness was caused by the train, not personal responsibility."},

    {type:"fb", s:"飲(の)み会(かい)に行(い)きませんか？すみません、今日(きょう)は{1}...",
     a:["ちょっと"],
     opts:["ちょっと","はい","いいえ","だめ"],
     hint:"Japanese people rarely refuse directly. Instead, they use a soft trailing phrase meaning 'a little...' to imply they cannot attend.",
     sSrc:"Won't you come to the drinking party? Sorry, today is a bit..."},

    {type:"mc", q:"「ドタキャン」はなんですか？",
     opts:["Last-minute cancellation","A type of dance","A card game","A morning exercise"],
     ans:"Last-minute cancellation",
     hint:"This slang word combines 'l... moment' with 'cancel' and describes something considered very rude in Japanese culture."}
  ,{type:"match",pairs:[{trg:"約束(やくそく)",src:"promise / appointment"},{trg:"つもり",src:"intention / plan to"},{trg:"準備(じゅんび)",src:"preparation"},{trg:"決(き)める",src:"to decide"},{trg:"変更(へんこう)",src:"change / modification"},{trg:"遅刻(ちこく)",src:"being late / tardiness"}]}]
};
export default BATCH11_L1;
