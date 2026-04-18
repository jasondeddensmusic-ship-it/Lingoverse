// Batch 8 – Unit 07 (A1.2 Time): Time Expressions & Scheduling
const BATCH8_L1 = {
  id:"jav2_u07l_b8_1", title:"予定(よてい)とスケジュール", icon:"📅", xp:15, board:true,
  steps:[
    {type:"intro", title:"予定(よてい)とスケジュール",
     desc:"Master time expressions for scheduling appointments, describing frequency, and talking about duration. These words turn time vocabulary into practical scheduling ability.",
     goals:["Use frequency expressions like sometimes, often, always","Describe duration and scheduling","Handle appointment-making phrases"]},

    {type:"teach", trg:"予定(よてい)", src:"plan / schedule / appointment", pos:"noun", gender:null,
     note:"Kanji: 予定. 予定(よてい)がある = to have plans.\n予定表(よていひょう) = schedule/timetable.",
     example:"A: 明日(あした)の予定(よてい)はなんですか？\nB: 友達(ともだち)と映画(えいが)を見(み)ます。",
     exampleSrc:"A: What are your plans for tomorrow?\nB: I will watch a movie with a friend.",
     funFact:"予定(よてい) is one of the most useful planning words. Japanese people check 予定(よてい) before committing to anything. The 予定表(よていひょう) (schedule board) is standard in Japanese offices. スケジュール (schedule, loanword) is used interchangeably in casual speech."},

    {type:"teach", trg:"予約(よやく)", src:"reservation / booking", pos:"noun", gender:null,
     note:"Kanji: 予約. 予約(よやく)する = to make a reservation.\n予約(よやく)番号(ばんごう) = reservation number.",
     example:"A: レストランを予約(よやく)しました。\nB: 何時(なんじ)ですか？",
     exampleSrc:"A: I made a restaurant reservation.\nB: What time?",
     funFact:"予約(よやく) culture is strong in Japan. Popular restaurants, hotels, and even some ramen shops require 予約(よやく). Canceling without notice (無断(むだん)キャンセル) is considered very rude. Some restaurants charge キャンセル料(りょう) (cancellation fees)."},

    {type:"teach", trg:"時々(ときどき)", src:"sometimes", pos:"adv", gender:null,
     note:"Kanji: 時々. Frequency between たまに and よく.\nSentence position is flexible.",
     example:"A: 日本(にほん)料理(りょうり)を作(つく)りますか？\nB: 時々(ときどき)作(つく)ります。",
     exampleSrc:"A: Do you make Japanese food?\nB: I sometimes make it.",
     funFact:"Japanese frequency adverbs have a clear hierarchy: いつも (always) > よく (often) > 時々(ときどき) (sometimes) > たまに (rarely) > ぜんぜん (never). These words do not need particles and can appear at the beginning or middle of sentences."},

    {type:"teach", trg:"たまに", src:"rarely / occasionally / once in a while", pos:"adv", gender:null,
     note:"Less frequent than 時々(ときどき). Implies something happens infrequently.\nたまにはいいでしょう = once in a while is fine.",
     example:"A: お酒(さけ)を飲(の)みますか？\nB: たまに飲(の)みます。",
     exampleSrc:"A: Do you drink alcohol?\nB: I drink occasionally.",
     funFact:"たまに is useful for downplaying habits. If someone asks about an expensive hobby or unhealthy habit, Japanese people often soften with たまに even if they do it more often. たまには (with the topic particle) means 'for a change' as in 'let's do something different for once.'"},

    {type:"teach", trg:"しょっちゅう", src:"all the time / constantly / frequently", pos:"adv", gender:null,
     note:"More colloquial than いつも. Slightly negative nuance.\nしょっちゅう遅(おく)れる = to be late all the time.",
     example:"A: あの店(みせ)に行(い)きますか？\nB: しょっちゅう行(い)きます。大好(だいす)きです。",
     exampleSrc:"A: Do you go to that shop?\nB: I go all the time. I love it.",
     funFact:"しょっちゅう is more casual and emphatic than よく or いつも. It often carries a slight nuance of excess: しょっちゅう喧嘩(けんか)する (fighting constantly), しょっちゅう忘(わす)れる (always forgetting). It comes from 初中後(しょちゅうご) (beginning, middle, end), meaning always throughout."},

    {type:"mc", q:"Which word means 'sometimes' in terms of frequency?", opts:["時々(ときどき)","いつも","たまに","しょっちゅう"], ans:"時々(ときどき)",
     hint:"This word falls between よく (often) and たまに (rarely) on the frequency scale."},

    {type:"teach", trg:"遅(おそ)くなる", src:"to be late / to become late", pos:"verb", gender:null,
     note:"From 遅(おそ)い (late/slow). 遅(おそ)くなってすみません = sorry for being late.\nCommon apology phrase.",
     example:"A: 遅(おそ)くなってすみません。\nB: だいじょうぶですよ。さあ、始(はじ)めましょう。",
     exampleSrc:"A: I am sorry for being late.\nB: It is okay. Well, let us begin.",
     funFact:"Being 遅(おそ)い (late) is taken very seriously in Japan. Trains apologize for delays of even 30 seconds. Students who are 遅(おく)れる (late) must report to the teacher. The phrase 遅(おそ)くなってすみません is essential survival Japanese for anyone living in Japan."},

    {type:"teach", trg:"早(はや)めに", src:"early / ahead of time", pos:"adv", gender:null,
     note:"From 早(はや)い (early). 早(はや)めに行(い)く = to go early.\n早(はや)めに寝(ね)る = to go to bed early.",
     example:"A: 明日(あした)は早(はや)めに出(で)ましょう。\nB: 何時(なんじ)に出(で)ますか？",
     exampleSrc:"A: Let us leave early tomorrow.\nB: What time shall we leave?",
     funFact:"Japanese business culture values 早(はや)め (earliness). Arriving 5 minutes before a meeting is standard. For job interviews, 10 to 15 minutes early is expected. The phrase 早(はや)め早(はや)めに行動(こうどう)する (to act earlier and earlier) reflects the cultural emphasis on punctuality."},

    {type:"teach", trg:"約(やく)", src:"approximately / about", pos:"adv", gender:null,
     note:"Kanji: 約. 約(やく)三時間(さんじかん) = about 3 hours.\nMore formal than ぐらい/くらい.",
     example:"A: 駅(えき)までどのくらいですか？\nB: 約(やく)十分(じゅっぷん)です。",
     exampleSrc:"A: How far is it to the station?\nB: About 10 minutes.",
     funFact:"約(やく) is the formal approximation word used in writing and news. In speech, ぐらい and くらい are more natural. くらい comes after numbers (三時間(さんじかん)くらい), while 約(やく) comes before (約(やく)三時間(さんじかん)). Written Japanese prefers 約(やく) for its precision."},

    {type:"teach", trg:"間(ま)に合(あ)う", src:"to be on time / to make it (in time)", pos:"verb", gender:null,
     note:"Kanji: 間に合う. 間(ま)に合(あ)わない = will not make it.\n電車(でんしゃ)に間(ま)に合(あ)う = to catch the train.",
     example:"A: 電車(でんしゃ)に間(ま)に合(あ)いますか？\nB: 走(はし)れば間(ま)に合(あ)います。",
     exampleSrc:"A: Will we make it to the train?\nB: If we run, we will make it.",
     funFact:"間(ま)に合(あ)う literally means 'to fit in the space (of time).' It is one of the most satisfying words to use when you barely catch a train or meet a deadline. The opposite 間(ま)に合(あ)わない carries real anxiety in punctuality-focused Japan."},

    {type:"teach", trg:"都合(つごう)", src:"convenience / availability / circumstances", pos:"noun", gender:null,
     note:"Kanji: 都合. 都合(つごう)がいい = to be available/convenient.\n都合(つごう)が悪(わる)い = to be unavailable.",
     example:"A: 土曜日(どようび)の都合(つごう)はどうですか？\nB: 午前中(ごぜんちゅう)なら都合(つごう)がいいです。",
     exampleSrc:"A: How is your availability on Saturday?\nB: I am available in the morning.",
     funFact:"都合(つごう) is the polite way to discuss scheduling in Japanese. Instead of directly saying 'I am busy,' Japanese people say 都合(つごう)が悪(わる)い (the circumstances are inconvenient). This indirect phrasing avoids making the other person feel rejected. ご都合(つごう) (with the honorific ご) is used for others."},

    {type:"fb", s:"レストランを{1}しました。\n(I made a restaurant reservation.)", a:"予約(よやく)", opts:["予約(よやく)","予定(よてい)","計画(けいかく)","約束(やくそく)"], sSrc:"I made a restaurant reservation.",
     hint:"This word specifically means booking or reserving a spot at a venue."},

    {type:"teach", trg:"掛(か)かる", src:"to take (time/money) / to cost", pos:"verb", gender:null,
     note:"時間(じかん)が掛(か)かる = it takes time. お金(かね)が掛(か)かる = it costs money.\nどのくらい掛(か)かりますか = how long/how much?",
     example:"A: 空港(くうこう)までどのくらい掛(か)かりますか？\nB: 電車(でんしゃ)で約(やく)一時間(いちじかん)掛(か)かります。",
     exampleSrc:"A: How long does it take to the airport?\nB: It takes about one hour by train.",
     funFact:"掛(か)かる is versatile: time (時間(じかん)が掛(か)かる), money (お金(かね)が掛(か)かる), effort (手間(てま)が掛(か)かる). It is always used with the particle が for the thing that is being consumed. The phrase 手間(てま)ひま掛(か)かる (takes time and effort) describes painstaking work."},

    {type:"teach", trg:"約束(やくそく)", src:"promise / appointment (casual)", pos:"noun", gender:null,
     note:"Kanji: 約束. 約束(やくそく)する = to promise/make an appointment.\n指切(ゆびき)りげんまん = pinky promise.",
     example:"A: 友達(ともだち)と約束(やくそく)があります。\nB: 何時(なんじ)に会(あ)いますか？",
     exampleSrc:"A: I have a promise to meet a friend.\nB: What time will you meet?",
     funFact:"約束(やくそく) covers both casual appointments and serious promises. Children do 指切(ゆびき)りげんまん (pinky promise) with a song. Breaking a 約束(やくそく) is serious: 約束(やくそく)を破(やぶ)る (to break a promise) damages trust deeply. In business, 約束(やくそく) means verbal commitments."},

    {type:"match", pairs:[{trg:"予定(よてい)",src:"plan/schedule"},{trg:"予約(よやく)",src:"reservation"},{trg:"間(ま)に合(あ)う",src:"to be on time"},{trg:"都合(つごう)",src:"availability"},{trg:"約束(やくそく)",src:"promise/appointment"}],
     hint:"Match each scheduling word with its English meaning."},

    {type:"mc", q:"What does 早(はや)めに mean?", opts:["Early / ahead of time","Late / behind schedule","On time / punctual","Sometimes / occasionally"], ans:"Early / ahead of time",
     hint:"Japanese business culture strongly values arriving with this mindset."},

    {type:"fb", s:"電車(でんしゃ)に{1}ますか？\n(Will we make it to the train?)", a:"間(ま)に合(あ)い", opts:["間(ま)に合(あ)い","遅(おそ)くなり","つき","乗(の)り"], sSrc:"Will we make it to the train?",
     hint:"This verb means to arrive or fit within the available time."},

    {type:"mc", q:"How would you politely ask about someone's availability?", opts:["ご都合(つごう)はいかがですか","いま何時(なんじ)ですか","予約(よやく)しましたか","遅(おそ)くなりますか"], ans:"ご都合(つごう)はいかがですか",
     hint:"This phrase uses the honorific form of the word for convenience/availability."}
  ,{type:"match",pairs:[{trg:"遅(おそ)くなる",src:"to be late / to become late"},{trg:"早(はや)めに",src:"early / ahead of time"},{trg:"約(やく)",src:"approximately / about"},{trg:"掛(か)かる",src:"to take (time/money) / to cost"}]}]
};
export default BATCH8_L1;
