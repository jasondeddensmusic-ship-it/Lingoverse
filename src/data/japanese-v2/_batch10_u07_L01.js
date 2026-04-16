// Batch 10 – Unit 07 (A2.1 Time): Days & Calendar Vocabulary
const BATCH10_L1 = {
  id:"jav2_u07l_b10_1", title:"カレンダー", icon:"📅", xp:15, board:true,
  steps:[
    {type:"intro", title:"カレンダー",
     desc:"Master calendar vocabulary including days of the month, special date readings, and scheduling expressions used in daily Japanese life.",
     goals:["Read dates in Japanese","Schedule appointments","Understand special date readings"]},

    {type:"teach", trg:"ついたち", src:"the 1st (of the month)", pos:"noun", gender:null,
     note:"Irregular reading! Not いちにち.\nがつついたち = the 1st of a month.",
     example:"A: つぎのかいぎはいつですか？\nB: しがつついたちです。",
     exampleSrc:"A: When is the next meeting?\nB: April 1st.",
     funFact:"ついたち is one of the trickiest Japanese date readings. It comes from つきたち (moon-standing), meaning the day the new moon appears. Days 2-10 also have special readings: ふつか, みっか, よっか, いつか, むいか, なのか, ようか, ここのか, とおか."},

    {type:"teach", trg:"はつか", src:"the 20th (of the month)", pos:"noun", gender:null,
     note:"Another irregular date reading.\nはつか is also used in はつかだいこん = radish.",
     example:"A: しめきりはいつですか？\nB: いちがつはつかです。",
     exampleSrc:"A: When is the deadline?\nB: January 20th.",
     funFact:"はつか (二十日) is the last irregular date reading. From the 11th onward, most dates use regular number + にち: じゅういちにち, じゅうににち, etc. But はつか remains special. はつかねずみ (twenty-day mouse) means a small mouse that supposedly matures in 20 days."},

    {type:"teach", trg:"よてい", src:"plan / schedule", pos:"noun", gender:null,
     note:"よていがある = to have plans.\nよていひょう = schedule/timetable.",
     example:"A: あしたのよていはなんですか？\nB: ともだちとあいます。",
     exampleSrc:"A: What are your plans for tomorrow?\nB: I am meeting a friend.",
     funFact:"よてい (予定) combines 予 (beforehand) and 定 (decide). Japanese people are known for careful scheduling. Google カレンダー (Google Calendar) and paper てちょう (planners) are both widely used. Many Japanese buy new てちょう in October for the following year."},

    {type:"teach", trg:"やくそく", src:"promise / appointment", pos:"noun", gender:null,
     note:"やくそくする = to make a promise.\nやくそくのじかん = the agreed time.",
     example:"A: やくそくをわすれないでね。\nB: だいじょうぶ、おぼえています。",
     exampleSrc:"A: Do not forget our promise.\nB: Don't worry, I remember.",
     funFact:"やくそく (約束) is taken very seriously in Japan. Breaking a やくそく, even a casual one, damages trust. Children learn ゆびきりげんまん (pinky promise) with a rhyme that threatens punishment for breaking promises. In business, やくそく is as binding as a contract."},

    {type:"teach", trg:"まにあう", src:"to be on time / to make it", pos:"verb", gender:null,
     note:"でんしゃにまにあう = to catch the train.\nまにあわない = to not make it in time.",
     example:"A: かいぎにまにあいますか？\nB: はい、ぎりぎりまにあいます。",
     exampleSrc:"A: Will you make it to the meeting on time?\nB: Yes, I will barely make it.",
     funFact:"まにあう (間に合う) literally means 'to fit in the interval.' Punctuality is extremely important in Japan, where trains run with seconds of precision. The word ぎりぎり (just barely) often pairs with まにあう: ぎりぎりまにあった means 'I just barely made it.'"},

    {type:"teach", trg:"おくれる", src:"to be late / to be delayed", pos:"verb", gender:null,
     note:"ちこくする = to arrive late (more formal).\nでんしゃがおくれる = the train is delayed.",
     example:"A: ごめん、じゅっぷんおくれます。\nB: だいじょうぶですよ。",
     exampleSrc:"A: Sorry, I will be ten minutes late.\nB: It is okay.",
     funFact:"おくれる (遅れる) is something Japanese people try hard to avoid. When trains are おくれる, stations issue ちえんしょうめいしょ (delay certificates) so passengers can prove to their employers they were not at fault. Even a 5-minute delay gets a certificate."},

    {type:"teach", trg:"ひにち", src:"date / the day", pos:"noun", gender:null,
     note:"ひにちをきめる = to set a date.\nひにちがかわる = the date changes.",
     example:"A: ひにちはきまりましたか？\nB: まだきまっていません。",
     exampleSrc:"A: Has the date been decided?\nB: Not yet.",
     funFact:"ひにち (日にち) is the general word for 'a date' on the calendar. To ask 'what date?' you say なんにちですか. The word にちじ (日時) means 'date and time' together and is commonly used on invitations and official notices."},

    {type:"teach", trg:"さらいしゅう", src:"the week after next", pos:"noun", gender:null,
     note:"らいしゅう = next week, さらいしゅう = week after next.\nさらいねん = year after next.",
     example:"A: さらいしゅうひまですか？\nB: かようびならひまです。",
     exampleSrc:"A: Are you free the week after next?\nB: I am free on Tuesday.",
     funFact:"Japanese has neat prefixes for relative time: せん (2 before), さく/きょ (previous), こん (this), らい (next), さらい (the one after next). So: おととい, きのう, きょう, あした, あさって for days; せんしゅう, せんしゅう, こんしゅう, らいしゅう, さらいしゅう for weeks."},

    {type:"mc", q:"How do you say 'the 1st' of the month in Japanese?", opts:["ついたち","いちにち","ひとつ","はじめ"], ans:"ついたち",
     hint:"This is an irregular reading that comes from an old word meaning 'moon standing.'"},

    {type:"fb", s:"かいぎに{1}ますか？\n(Will you make it to the meeting on time?)", a:"まにあい", opts:["まにあい","おくれ","やくそくし","つき"], sSrc:"Will you make it to the meeting on time?",
     hint:"This verb literally means 'to fit in the interval' and refers to arriving before the deadline."},

    {type:"match", pairs:[
      {trg:"よてい", src:"plan/schedule"},
      {trg:"やくそく", src:"promise"},
      {trg:"まにあう", src:"to be on time"},
      {trg:"おくれる", src:"to be late"}
    ]},

    {type:"mc", q:"What does a Japanese train station issue when trains are delayed?", opts:["ちえんしょうめいしょ (delay certificate)","おわびのてがみ (apology letter)","わりびきけん (discount ticket)","りょうしゅうしょ (receipt)"], ans:"ちえんしょうめいしょ (delay certificate)",
     hint:"Passengers use this document to prove to employers that the d... was not their fault."}
  ]
};
export default BATCH10_L1;
