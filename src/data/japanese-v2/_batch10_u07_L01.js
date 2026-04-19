// Batch 10 – Unit 07 (A2.1 Time): Days & Calendar Vocabulary
const BATCH10_L1 = {
  id:"jav2_u07l_b10_1", title:"カレンダー", icon:"📅", xp:15, board:true,
  steps:[
    {type:"intro", title:"カレンダー",
     desc:"Master calendar vocabulary including days of the month, special date readings, and scheduling expressions used in daily Japanese life.",
     goals:["Read dates in Japanese","Schedule appointments","Understand special date readings"]},

    {type:"teach", trg:"1日(ついたち)", src:"the 1st (of the month)", pos:"noun", gender:null,
     note:"Irregular reading! Not いちにち.\n〜月(がつ)1日(ついたち) = the 1st of a month.",
     example:"A: 次(つぎ)の会議(かいぎ)はいつですか？\nB: 4月(しがつ)1日(ついたち)です。",
     exampleSrc:"A: When is the next meeting?\nB: April 1st.",
     funFact:"1日(ついたち) is one of the trickiest Japanese date readings. It comes from 月立(つきたち) (moon-standing), meaning the day the new moon appears. Days 2-10 also have special readings: 2日(ふつか), 3日(みっか), 4日(よっか), 5日(いつか), 6日(むいか), 7日(なのか), 8日(ようか), 9日(ここのか), 10日(とおか)."},

    {type:"teach", trg:"20日(はつか)", src:"the 20th (of the month)", pos:"noun", gender:null,
     note:"Another irregular date reading.\n20日(はつか) is also used in 20日大根(はつかだいこん) = radish.",
     example:"A: 締切(しめきり)はいつですか？\nB: 1月(いちがつ)20日(はつか)です。",
     exampleSrc:"A: When is the deadline?\nB: January 20th.",
     funFact:"20日(はつか) is the last irregular date reading. From the 11th onward, most dates use regular number + 日(にち): 11日(じゅういちにち), 12日(じゅうににち), etc. But 20日(はつか) remains special. 20日鼠(はつかねずみ) (twenty-day mouse) means a small mouse that supposedly matures in 20 days."},

    {type:"teach", trg:"予定(よてい)", src:"plan / schedule", pos:"noun", gender:null,
     note:"予定(よてい)がある = to have plans.\n予定表(よていひょう) = schedule/timetable.",
     example:"A: 明日(あした)の予定(よてい)は何(なん)ですか？\nB: 友達(ともだち)と会(あ)います。",
     exampleSrc:"A: What are your plans for tomorrow?\nB: I am meeting a friend.",
     funFact:"予定(よてい) combines 予(あらかじ)め (beforehand) and 定(さだ)める (decide). Japanese people are known for careful scheduling. Google カレンダー (Google Calendar) and paper 手帳(てちょう) (planners) are both widely used. Many Japanese buy new 手帳(てちょう) in October for the following year."},

    {type:"teach", trg:"約束(やくそく)", src:"promise / appointment", pos:"noun", gender:null,
     note:"約束(やくそく)する = to make a promise.\n約束(やくそく)の時間(じかん) = the agreed time.",
     example:"A: 約束(やくそく)を忘(わす)れないでね。\nB: 大丈夫(だいじょうぶ)、覚(おぼ)えています。",
     exampleSrc:"A: Do not forget our promise.\nB: Don't worry, I remember.",
     funFact:"約束(やくそく) is taken very seriously in Japan. Breaking a 約束(やくそく), even a casual one, damages trust. Children learn 指切(ゆびき)りげんまん (pinky promise) with a rhyme that threatens punishment for breaking promises. In business, 約束(やくそく) is as binding as a contract."},

    {type:"teach", trg:"間(ま)に合(あ)う", src:"to be on time / to make it", pos:"verb", gender:null,
     note:"電車(でんしゃ)に間(ま)に合(あ)う = to catch the train.\n間(ま)に合(あ)わない = to not make it in time.",
     example:"A: 会議(かいぎ)に間(ま)に合(あ)いますか？\nB: はい、ぎりぎり間(ま)に合(あ)います。",
     exampleSrc:"A: Will you make it to the meeting on time?\nB: Yes, I will barely make it.",
     funFact:"間(ま)に合(あ)う literally means 'to fit in the interval.' Punctuality is extremely important in Japan, where trains run with seconds of precision. The word ぎりぎり (just barely) often pairs with 間(ま)に合(あ)う: ぎりぎり間(ま)に合(あ)った means 'I just barely made it.'"},

    {type:"teach", trg:"遅(おく)れる", src:"to be late / to be delayed", pos:"verb", gender:null,
     note:"遅刻(ちこく)する = to arrive late (more formal).\n電車(でんしゃ)が遅(おく)れる = the train is delayed.",
     example:"A: ごめん、10分(じゅっぷん)遅(おく)れます。\nB: 大丈夫(だいじょうぶ)ですよ。",
     exampleSrc:"A: Sorry, I will be ten minutes late.\nB: It is okay.",
     funFact:"遅(おく)れる is something Japanese people try hard to avoid. When trains are 遅(おく)れる, stations issue 遅延証明書(ちえんしょうめいしょ) (delay certificates) so passengers can prove to their employers they were not at fault. Even a 5-minute delay gets a certificate."},

    {type:"teach", trg:"日(ひ)にち", src:"date / the day", pos:"noun", gender:null,
     note:"日(ひ)にちを決(き)める = to set a date.\n日(ひ)にちが変(か)わる = the date changes.",
     example:"A: 日(ひ)にちは決(き)まりましたか？\nB: まだ決(き)まっていません。",
     exampleSrc:"A: Has the date been decided?\nB: Not yet.",
     funFact:"日(ひ)にち is the general word for 'a date' on the calendar. To ask 'what date?' you say 何日(なんにち)ですか. The word 日時(にちじ) (日時) means 'date and time' together and is commonly used on invitations and official notices."},

    {type:"teach", trg:"再来週(さらいしゅう)", src:"the week after next", pos:"noun", gender:null,
     note:"来週(らいしゅう) = next week, 再来週(さらいしゅう) = week after next.\n再来年(さらいねん) = year after next.",
     example:"A: 再来週(さらいしゅう)暇(ひま)ですか？\nB: 火曜日(かようび)なら暇(ひま)です。",
     exampleSrc:"A: Are you free the week after next?\nB: I am free on Tuesday.",
     funFact:"Japanese has neat prefixes for relative time: 先(せん) (2 before), 昨/去(さく/きょ) (previous), 今(こん) (this), 来(らい) (next), 再来(さらい) (the one after next). So: おととい, 昨日(きのう), 今日(きょう), 明日(あした), 明後日(あさって) for days; 先週(せんしゅう), 先週(せんしゅう), 今週(こんしゅう), 来週(らいしゅう), 再来週(さらいしゅう) for weeks."},

    {type:"mc", q:"How do you say 'the 1st' of the month in Japanese?", opts:["1日(ついたち)","1日(いちにち)","1つ(ひとつ)","始(はじ)め"], ans:"1日(ついたち)",
     hint:"This is an irregular reading that comes from an old word meaning 'moon standing.'"},

    {type:"fb", s:"会議(かいぎ)に{1}ますか？\n(Will you make it to the meeting on time?)", a:"間(ま)に合(あ)い", opts:["間(ま)に合(あ)い","遅(おく)れ","約束(やくそく)し","つき"], sSrc:"Will you make it to the meeting on time?",
     hint:"This verb literally means 'to fit in the interval' and refers to arriving before the deadline."},

    {type:"match", pairs:[
      {trg:"予定(よてい)", src:"plan/schedule"},
      {trg:"約束(やくそく)", src:"promise"},
      {trg:"間(ま)に合(あ)う", src:"to be on time"},
      {trg:"遅(おく)れる", src:"to be late"}
    ]},

    {type:"mc", q:"What does a Japanese train station issue when trains are delayed?", opts:["遅延証明書(ちえんしょうめいしょ) (delay certificate)","お詫(わ)びの手紙(てがみ) (apology letter)","割引券(わりびきけん) (discount ticket)","領収書(りょうしゅうしょ) (receipt)"], ans:"遅延証明書(ちえんしょうめいしょ) (delay certificate)",
     hint:"Passengers use this document to prove to employers that the d... was not their fault."}
  ,{type:"fb", s:"すみません、10分(じゅっぷん){1}てしまいました。",
    a:["遅(おく)れる"],
    opts:["遅(おく)れる","間(ま)に合(あ)う","急(いそ)ぐ","忘(わす)れる"],
    hint:"You arrived ten minutes after the agreed time. This verb means 'to be late' or 'to be delayed.'",
    sSrc:"I am sorry, I ended up being {1} by ten minutes."}
  ,{type:"match",pairs:[{trg:"20日(はつか)",src:"the 20th (of the month)"},{trg:"日(ひ)にち",src:"date / the day"},{trg:"再来週(さらいしゅう)",src:"the week after next"}]}]
};
export default BATCH10_L1;
