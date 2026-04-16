// Batch 8 – Unit 07 (A1.2 Time): Time Expressions & Scheduling
const BATCH8_L1 = {
  id:"jav2_u07l_b8_1", title:"よていとスケジュール", icon:"📅", xp:15, board:true,
  steps:[
    {type:"intro", title:"よていとスケジュール",
     desc:"Master time expressions for scheduling appointments, describing frequency, and talking about duration. These words turn time vocabulary into practical scheduling ability.",
     goals:["Use frequency expressions like sometimes, often, always","Describe duration and scheduling","Handle appointment-making phrases"]},

    {type:"teach", trg:"よてい", src:"plan / schedule / appointment", pos:"noun", gender:null,
     note:"Kanji: 予定. よていがある = to have plans.\nよていひょう = schedule/timetable.",
     example:"A: あしたのよていはなんですか？\nB: ともだちとえいがをみます。",
     exampleSrc:"A: What are your plans for tomorrow?\nB: I will watch a movie with a friend.",
     funFact:"よてい is one of the most useful planning words. Japanese people check よてい before committing to anything. The よていひょう (schedule board) is standard in Japanese offices. スケジュール (schedule, loanword) is used interchangeably in casual speech."},

    {type:"teach", trg:"よやく", src:"reservation / booking", pos:"noun", gender:null,
     note:"Kanji: 予約. よやくする = to make a reservation.\nよやくばんごう = reservation number.",
     example:"A: レストランをよやくしました。\nB: なんじですか？",
     exampleSrc:"A: I made a restaurant reservation.\nB: What time?",
     funFact:"よやく culture is strong in Japan. Popular restaurants, hotels, and even some ramen shops require よやく. Canceling without notice (むだんキャンセル) is considered very rude. Some restaurants charge キャンセルりょう (cancellation fees)."},

    {type:"teach", trg:"ときどき", src:"sometimes", pos:"adv", gender:null,
     note:"Kanji: 時々. Frequency between たまに and よく.\nSentence position is flexible.",
     example:"A: にほんりょうりをつくりますか？\nB: ときどきつくります。",
     exampleSrc:"A: Do you make Japanese food?\nB: I sometimes make it.",
     funFact:"Japanese frequency adverbs have a clear hierarchy: いつも (always) > よく (often) > ときどき (sometimes) > たまに (rarely) > ぜんぜん (never). These words do not need particles and can appear at the beginning or middle of sentences."},

    {type:"teach", trg:"たまに", src:"rarely / occasionally / once in a while", pos:"adv", gender:null,
     note:"Less frequent than ときどき. Implies something happens infrequently.\nたまにはいいでしょう = once in a while is fine.",
     example:"A: おさけをのみますか？\nB: たまにのみます。",
     exampleSrc:"A: Do you drink alcohol?\nB: I drink occasionally.",
     funFact:"たまに is useful for downplaying habits. If someone asks about an expensive hobby or unhealthy habit, Japanese people often soften with たまに even if they do it more often. たまには (with the topic particle) means 'for a change' as in 'let's do something different for once.'"},

    {type:"teach", trg:"しょっちゅう", src:"all the time / constantly / frequently", pos:"adv", gender:null,
     note:"More colloquial than いつも. Slightly negative nuance.\nしょっちゅうおくれる = to be late all the time.",
     example:"A: あのみせにいきますか？\nB: しょっちゅういきます。だいすきです。",
     exampleSrc:"A: Do you go to that shop?\nB: I go all the time. I love it.",
     funFact:"しょっちゅう is more casual and emphatic than よく or いつも. It often carries a slight nuance of excess: しょっちゅうけんかする (fighting constantly), しょっちゅうわすれる (always forgetting). It comes from 初中後 (beginning, middle, end), meaning always throughout."},

    {type:"mc", q:"Which word means 'sometimes' in terms of frequency?", opts:["ときどき","いつも","たまに","しょっちゅう"], ans:"ときどき",
     hint:"This word falls between よく (often) and たまに (rarely) on the frequency scale."},

    {type:"teach", trg:"おそくなる", src:"to be late / to become late", pos:"verb", gender:null,
     note:"From おそい (late/slow). おそくなってすみません = sorry for being late.\nCommon apology phrase.",
     example:"A: おそくなってすみません。\nB: だいじょうぶですよ。さあ、はじめましょう。",
     exampleSrc:"A: I am sorry for being late.\nB: It is okay. Well, let us begin.",
     funFact:"Being おそい (late) is taken very seriously in Japan. Trains apologize for delays of even 30 seconds. Students who are おくれる (late) must report to the teacher. The phrase おそくなってすみません is essential survival Japanese for anyone living in Japan."},

    {type:"teach", trg:"はやめに", src:"early / ahead of time", pos:"adv", gender:null,
     note:"From はやい (early). はやめにいく = to go early.\nはやめにねる = to go to bed early.",
     example:"A: あしたははやめにでましょう。\nB: なんじにでますか？",
     exampleSrc:"A: Let us leave early tomorrow.\nB: What time shall we leave?",
     funFact:"Japanese business culture values はやめ (earliness). Arriving 5 minutes before a meeting is standard. For job interviews, 10 to 15 minutes early is expected. The phrase はやめはやめにこうどうする (to act earlier and earlier) reflects the cultural emphasis on punctuality."},

    {type:"teach", trg:"やく", src:"approximately / about", pos:"adv", gender:null,
     note:"Kanji: 約. やくさんじかん = about 3 hours.\nMore formal than ぐらい/くらい.",
     example:"A: えきまでどのくらいですか？\nB: やくじゅっぷんです。",
     exampleSrc:"A: How far is it to the station?\nB: About 10 minutes.",
     funFact:"やく is the formal approximation word used in writing and news. In speech, ぐらい and くらい are more natural. くらい comes after numbers (さんじかんくらい), while やく comes before (やくさんじかん). Written Japanese prefers やく for its precision."},

    {type:"teach", trg:"まにあう", src:"to be on time / to make it (in time)", pos:"verb", gender:null,
     note:"Kanji: 間に合う. まにあわない = will not make it.\nでんしゃにまにあう = to catch the train.",
     example:"A: でんしゃにまにあいますか？\nB: はしればまにあいます。",
     exampleSrc:"A: Will we make it to the train?\nB: If we run, we will make it.",
     funFact:"まにあう literally means 'to fit in the space (of time).' It is one of the most satisfying words to use when you barely catch a train or meet a deadline. The opposite まにあわない carries real anxiety in punctuality-focused Japan."},

    {type:"teach", trg:"つごう", src:"convenience / availability / circumstances", pos:"noun", gender:null,
     note:"Kanji: 都合. つごうがいい = to be available/convenient.\nつごうがわるい = to be unavailable.",
     example:"A: どようびのつごうはどうですか？\nB: ごぜんちゅうならつごうがいいです。",
     exampleSrc:"A: How is your availability on Saturday?\nB: I am available in the morning.",
     funFact:"つごう is the polite way to discuss scheduling in Japanese. Instead of directly saying 'I am busy,' Japanese people say つごうがわるい (the circumstances are inconvenient). This indirect phrasing avoids making the other person feel rejected. ごつごう (with the honorific ご) is used for others."},

    {type:"fb", s:"レストランを{1}しました。\n(I made a restaurant reservation.)", a:"よやく", opts:["よやく","よてい","けいかく","やくそく"], sSrc:"I made a restaurant reservation.",
     hint:"This word specifically means booking or reserving a spot at a venue."},

    {type:"teach", trg:"かかる", src:"to take (time/money) / to cost", pos:"verb", gender:null,
     note:"じかんがかかる = it takes time. おかねがかかる = it costs money.\nどのくらいかかりますか = how long/how much?",
     example:"A: くうこうまでどのくらいかかりますか？\nB: でんしゃでやくいちじかんかかります。",
     exampleSrc:"A: How long does it take to the airport?\nB: It takes about one hour by train.",
     funFact:"かかる is versatile: time (じかんがかかる), money (おかねがかかる), effort (てまがかかる). It is always used with the particle が for the thing that is being consumed. The phrase てまひまかかる (takes time and effort) describes painstaking work."},

    {type:"teach", trg:"やくそく", src:"promise / appointment (casual)", pos:"noun", gender:null,
     note:"Kanji: 約束. やくそくする = to promise/make an appointment.\nゆびきりげんまん = pinky promise.",
     example:"A: ともだちとやくそくがあります。\nB: なんじにあいますか？",
     exampleSrc:"A: I have a promise to meet a friend.\nB: What time will you meet?",
     funFact:"やくそく covers both casual appointments and serious promises. Children do ゆびきりげんまん (pinky promise) with a song. Breaking a やくそく is serious: やくそくをやぶる (to break a promise) damages trust deeply. In business, やくそく means verbal commitments."},

    {type:"match", pairs:[{trg:"よてい",src:"plan/schedule"},{trg:"よやく",src:"reservation"},{trg:"まにあう",src:"to be on time"},{trg:"つごう",src:"availability"},{trg:"やくそく",src:"promise/appointment"}],
     hint:"Match each scheduling word with its English meaning."},

    {type:"mc", q:"What does はやめに mean?", opts:["Early / ahead of time","Late / behind schedule","On time / punctual","Sometimes / occasionally"], ans:"Early / ahead of time",
     hint:"Japanese business culture strongly values arriving with this mindset."},

    {type:"fb", s:"でんしゃに{1}ますか？\n(Will we make it to the train?)", a:"まにあい", opts:["まにあい","おそくなり","つき","のり"], sSrc:"Will we make it to the train?",
     hint:"This verb means to arrive or fit within the available time."},

    {type:"mc", q:"How would you politely ask about someone's availability?", opts:["ごつごうはいかがですか","いまなんじですか","よやくしましたか","おそくなりますか"], ans:"ごつごうはいかがですか",
     hint:"This phrase uses the honorific form of the word for convenience/availability."}
  ]
};
export default BATCH8_L1;
