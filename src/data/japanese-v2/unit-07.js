// Japanese V2 Unit 07. 時間(じかん) (Time & Daily Routine)
import BATCH11_L1 from './_batch11_u07_L01.js';
import BATCH10_L1 from './_batch10_u07_L01.js';
import BATCH9_L1 from './_batch9_u07_L01.js';
import BATCH7_L1 from './_batch7_u07_L01.js';
import BATCH8_L1 from './_batch8_u07_L01.js';
import BATCH6_L1 from './_batch6_u07_L01.js';
import BATCH4_L02 from './_batch4_u07_L02.js';
import BATCH4_L01 from './_batch4_u07_L01.js';
import BATCH2_L1 from './_batch2_u07_L01.js';
// Level: A1.2. JLPT N5 aligned.
// Telling time, daily routine verbs, time particles ni/kara/made.

const UNIT_07 = {
  n:7, lang:"ja", srcLang:"en", track:"v2",
  title:"時間(じかん)", sub:"Time & Daily Routine",
  icon:"\u23F0", level:"A1.2", color:"#7B5EE8",
  lessons:[

// ═══ L1: 何時(なんじ)ですか (Telling Time) ═══
{id:"jav2_u7l1", title:"何時(なんじ)ですか", icon:"\u{1F550}", xp:15, board:true, steps:[
  {type:"intro", title:"何時(なんじ)ですか",
   desc:"Learn to tell time in Japanese. Hours use the counter ji, and minutes use fun/pun with sound changes. You will also learn AM/PM and the essential question 'what time?'",
   goals:["Ask and tell the time with nanji","Use ji (hours) and fun/pun (minutes)","Distinguish gozen (AM) and gogo (PM)"]},

  {type:"teach", trg:"今(いま)", src:"now", pos:"adv", gender:null,
   note:"Very common time word. Often starts time questions.\nKanji: 今.",
   example:"A: 今(いま)、何時(なんじ)ですか?\nB: 午後(ごご)三時(さんじ)です。",
   exampleSrc:"A: What time is it now?\nB: It is 3 PM.",
   funFact:"今 shows a lid covering something, suggesting 'this very moment being contained.' Ima appears in many compounds: ima-made (until now), ima-kara (from now), konnichi (today, literally 'this day'), kongetsu (this month)."},

  {type:"teach", trg:"何時(なんじ)", src:"what time?", pos:"pron", gender:null,
   note:"Question word: nan (what) + ji (hour/o'clock). Used to ask the current time.\nKanji: 何時.",
   example:"A: 明日(あした)は何時(なんじ)に起(お)きますか?\nB: 七時(しちじ)に起(お)きます。",
   exampleSrc:"A: What time will you wake up tomorrow?\nB: I will wake up at 7 o'clock.",
   funFact:"Nan replaces the number in any counter to form a question. Nanji (what hour?), nanpun (how many minutes?), nanyoubi (what day of the week?). This pattern is completely regular and works with every Japanese counter."},

  {type:"teach", trg:"\u301C時(じ)", src:"o'clock (hour counter)", pos:"part", gender:null,
   note:"Attach to numbers: 一時(いちじ) (1:00), 二時(にじ) (2:00), 三時(さんじ) (3:00).\nIrregulars: 4 = 四時(よじ), 7 = 七時(しちじ), 9 = 九時(くじ).\nKanji: 時.",
   example:"A: 今(いま)三時(さんじ)です。\nB: もう三時(さんじ)ですか!",
   exampleSrc:"A: It is 3 o'clock now.\nB: It is already 3 o'clock?!",
   funFact:"時 shows the sun (日) next to a hand reaching for a temple (寺). Three hours have irregular readings: yo-ji (4), shichi-ji (7), and ku-ji (9). The rest are regular: ichi-ji, ni-ji, san-ji, go-ji, roku-ji, hachi-ji, juu-ji."},

  {type:"teach", trg:"\u301C分(ふん)/分(ぷん)", src:"minute(s)", pos:"part", gender:null,
   note:"Sound changes: 1 = 一分(いっぷん), 3 = 三分(さんぷん), 4 = 四分(よんぷん), 6 = 六分(ろっぷん),\n8 = 八分(はっぷん)/八分(はちふん), 10 = 十分(じゅっぷん).\nKanji: 分.",
   example:"A: 今(いま)何時(なんじ)ですか?\nB: 九時(くじ)十分(じゅっぷん)です。",
   exampleSrc:"A: What time is it?\nB: It is 9:10.",
   funFact:"分 means both 'minute' and 'to divide/understand.' The sound alternates between fun and pun depending on the preceding number. This rendaku (sound change) follows the same pattern as other counters: numbers ending in certain sounds trigger voicing."},

  {type:"mc", q:"何時(なんじ)ですか means:", opts:["What time is it?","Where is it?","How many?","Who is it?"], ans:"What time is it?",
   hint:"Nan (what) + ji (hour) = a question about the clock."},

  {type:"teach", trg:"午前(ごぜん)", src:"AM / morning", pos:"noun", gender:null,
   note:"Placed BEFORE the time: 午前(ごぜん)九時(くじ) = 9 AM. Opposite: 午後(ごご).\nKanji: 午前.",
   example:"A: 会議(かいぎ)は午前(ごぜん)十時(じゅうじ)からです。\nB: わかりました。",
   exampleSrc:"A: The meeting is from 10 AM.\nB: Understood.",
   funFact:"午前 literally means 'before noon.' 午 (go) originally meant the Horse hour (11 AM to 1 PM) in the old Chinese zodiac time system. Japan used animal-based time divisions until adopting Western clocks in the Meiji era."},

  {type:"teach", trg:"午後(ごご)", src:"PM / afternoon", pos:"noun", gender:null,
   note:"Placed BEFORE the time: 午後(ごご)三時(さんじ) = 3 PM.\nKanji: 午後.",
   example:"A: 午後(ごご)何(なに)をしますか?\nB: 映画(えいが)を見(み)ます。",
   exampleSrc:"A: What will you do in the afternoon?\nB: I will watch a movie.",
   funFact:"午後 means 'after noon.' In everyday speech, Japanese people often skip gozen/gogo when the context is clear. But in formal settings (train schedules, appointments), they always specify. The 24-hour clock is also common in Japan for schedules."},

  {type:"teach", trg:"半(はん)", src:"half (past)", pos:"noun", gender:null,
   note:"Added after ji to mean 'half past.' 九時半(くじはん) = 9:30.\nKanji: 半.",
   example:"A: 今(いま)何時(なんじ)ですか?\nB: 七時半(しちじはん)です。",
   exampleSrc:"A: What time is it?\nB: It is 7:30.",
   funFact:"半 shows a line cutting something in two, meaning 'half.' Han is the easiest way to say 30 minutes: roku-ji han (6:30). You can also say roku-ji sanjuppun (6 hours 30 minutes), but han is much more natural in conversation."},

  {type:"fb", s:"今(いま)、{1}ですか?\n(What time is it now?)", a:"何時(なんじ)", opts:["何時(なんじ)","いくら","何人(なんにん)","どこ"], sSrc:"What time is it now?",
   hint:"The question word that combines 'what' with the hour counter."},

  {type:"teach", trg:"に", src:"at (time particle)", pos:"part", gender:null,
   note:"Marks a specific point in time: 七時(しちじ)に = at 7 o'clock.\nUsed with clock times, days, months. NOT with relative times (today, tomorrow).",
   example:"A: 何時(なんじ)に起(お)きますか?\nB: 六時(ろくじ)に起(お)きます。",
   exampleSrc:"A: What time do you wake up?\nB: I wake up at 6 o'clock.",
   funFact:"Ni has many uses, but as a time particle it works like English 'at.' Use ni with specific times (shichi-ji ni = at 7), specific days (getsuyoubi ni = on Monday), and dates. Do NOT use ni with relative words: kyou (today), ashita (tomorrow), ima (now)."},

  {type:"teach", trg:"から", src:"from (starting point)", pos:"part", gender:null,
   note:"Marks a starting point in time or space: 九時(くじ)から = from 9 o'clock.",
   example:"A: 仕事(しごと)は何時(なんじ)からですか?\nB: 九時(くじ)からです。",
   exampleSrc:"A: What time does work start?\nB: From 9 o'clock.",
   funFact:"Kara marks both time and place starting points: Tokyo kara (from Tokyo), kuji kara (from 9 o'clock). It pairs with made (until/to): kuji kara goji made = from 9 to 5. This kara...made pair is one of the most useful structures in Japanese."},

  {type:"teach", trg:"まで", src:"until / to (ending point)", pos:"part", gender:null,
   note:"Marks an ending point. Often paired with から: 九時(くじ)から五時(ごじ)まで = from 9 to 5.",
   example:"A: 授業(じゅぎょう)は何時(なんじ)までですか?\nB: 三時(さんじ)までです。",
   exampleSrc:"A: Until what time is the class?\nB: Until 3 o'clock.",
   funFact:"Made can express both time and space endpoints: Tokyo made (to Tokyo), goji made (until 5 o'clock). It also means 'even' in a different usage: kodomo made shitteiru (even children know). Context makes the meaning clear."},

  {type:"mc", q:"午前(ごぜん)九時(くじ) means:", opts:["9 PM","9 AM","9:30","9 minutes"], ans:"9 AM",
   hint:"Gozen (before noon) + ku-ji (9 o'clock)."},

  {type:"match", pairs:[{trg:"今(いま)",src:"now"},{trg:"午前(ごぜん)",src:"AM"},{trg:"午後(ごご)",src:"PM"},{trg:"半(はん)",src:"half past"}]},

  {type:"match", pairs:[{trg:"に",src:"at (time)"},{trg:"から",src:"from"},{trg:"まで",src:"until"},{trg:"何時(なんじ)",src:"what time?"}]},

  {type:"fb", s:"九時(くじ){1}五時(ごじ)までです。\n(From 9 to 5.)", a:"から", opts:["から","まで","に","で"], sSrc:"From 9 to 5.",
   hint:"The particle that marks the starting point of a time range."},

  {type:"mc", q:"七時半(しちじはん) means:", opts:["7 AM","7 minutes","7:30","7 PM"], ans:"7:30",
   hint:"Shichi-ji (7 o'clock) + han (half)."},

  {type:"tip", title:"Time Particle Rules",
   text:"Use に with specific clock times:\n七時(しちじ)に 起(お)きます。(I wake up at 7.)\n\nUse から...まで for ranges:\n九時(くじ)から 五時(ごじ)まで 働(はたら)きます。(I work from 9 to 5.)\n\nDo NOT use に with:\n今日(きょう) (today), 明日(あした) (tomorrow), 今(いま) (now)\nThese relative time words need no particle.",
   deepDive:{title:"Why no ni with kyou?",
    text:"Specific times (7 o'clock, Monday, March 3rd) need ni because they are fixed points on a calendar or clock.\n\nRelative times (today, tomorrow, now, last week) do not need ni because they shift depending on when you speak.\n\nThink of it this way: if you can point to it on a calendar or clock, use ni. If it moves with you, skip ni."}},
]},

// ═══ L2: 毎日(まいにち)の生活(せいかつ) (Daily Routine) ═══
{id:"jav2_u7l2", title:"毎日(まいにち)の生活(せいかつ)", icon:"\u{1F305}", xp:15, board:true, steps:[
  {type:"intro", title:"毎日(まいにち)の生活(せいかつ)",
   desc:"Learn the verbs for your daily routine in Japanese. Wake up, eat, study, go, come back, and sleep. These are the verbs you will use every single day.",
   goals:["Describe your daily routine with common verbs","Use time expressions with routine verbs","Tell someone your typical schedule"]},

  {type:"teach", trg:"起(お)きる", src:"to wake up / to get up", pos:"verb", gender:null,
   note:"A ru-verb (ichidan). Polite: 起(お)きます. Also means 'to occur' (events).\nKanji: 起きる.",
   example:"A: 毎朝(まいあさ)何時(なんじ)に起(お)きますか?\nB: 六時(ろくじ)に起(お)きます。",
   exampleSrc:"A: What time do you wake up every morning?\nB: I wake up at 6.",
   funFact:"起 shows a person (己) running (走) with energy, suggesting rising up. Okiru is a ru-verb, so conjugation is simple: oki-masu, oki-nai, oki-ta. It doubles as 'to occur': jishin ga okita (an earthquake occurred)."},

  {type:"teach", trg:"寝(ね)る", src:"to sleep / to go to bed", pos:"verb", gender:null,
   note:"A ru-verb (ichidan). Polite: 寝(ね)ます. Means both falling asleep and lying down.\nKanji: 寝る.",
   example:"A: 毎晩(まいばん)何時(なんじ)に寝(ね)ますか?\nB: 十一時(じゅういちじ)に寝(ね)ます。",
   exampleSrc:"A: What time do you go to bed every night?\nB: I go to bed at 11.",
   funFact:"寝 shows a person lying under a roof on a bed. Neru covers both 'go to bed' and 'sleep.' For deeper sleep emphasis, use nemuru (眠る). The polite nemasu form is used in daily conversation much more than the dictionary form neru."},

  {type:"teach", trg:"行(い)く", src:"to go", pos:"verb", gender:null,
   note:"A u-verb (godan). Polite: 行(い)きます. One of the most used verbs.\nKanji: 行く.",
   example:"A: 学校(がっこう)に行(い)きますか?\nB: はい、毎日(まいにち)行(い)きます。",
   exampleSrc:"A: Do you go to school?\nB: Yes, I go every day.",
   funFact:"行 shows a crossroads, representing travel/going. Iku has an irregular te-form: itte (not iite). This is one of only two u-verbs with an irregular te-form (the other is kuru becoming kite). Pattern: place + ni + ikimasu."},

  {type:"mc", q:"起(お)きる means:", opts:["to wake up","to eat","to sleep","to go"], ans:"to wake up",
   hint:"This ru-verb describes the action of rising from bed in the morning."},

  {type:"teach", trg:"帰(かえ)る", src:"to return / to go home", pos:"verb", gender:null,
   note:"A u-verb (godan). Polite: 帰(かえ)ります. Specifically means returning to your base (home).\nKanji: 帰る.",
   example:"A: 何時(なんじ)にうちに帰(かえ)りますか?\nB: 午後(ごご)六時(ろくじ)に帰(かえ)ります。",
   exampleSrc:"A: What time do you go home?\nB: I go home at 6 PM.",
   funFact:"帰 contains elements suggesting 'returning to where you started.' Kaeru specifically means returning to your home base, unlike modoru (to go back to any place). When Japanese workers say 'kaerimasu,' everyone knows they mean going home."},

  {type:"teach", trg:"勉強(べんきょう)する", src:"to study", pos:"verb", gender:null,
   note:"A suru-verb (irregular). Polite: 勉強(べんきょう)します.\nKanji: 勉強する. Literally 'strengthen by effort.'",
   example:"A: 毎日(まいにち)日本語(にほんご)を勉強(べんきょう)しますか?\nB: はい、一時間(いちじかん)勉強(べんきょう)します。",
   exampleSrc:"A: Do you study Japanese every day?\nB: Yes, I study for one hour.",
   funFact:"勉強 combines 勉 (effort/diligence) and 強 (strong). Literally 'effort-strengthening.' Suru verbs are easy: take any noun and add suru to make a verb. Ryouri-suru (to cook), unten-suru (to drive), sanpo-suru (to take a walk)."},

  {type:"teach", trg:"毎日(まいにち)", src:"every day", pos:"adv", gender:null,
   note:"Time word: mai (every) + nichi (day). No particle needed.\nKanji: 毎日.",
   example:"A: 毎日(まいにち)何(なに)をしますか?\nB: 日本語(にほんご)を勉強(べんきょう)します。",
   exampleSrc:"A: What do you do every day?\nB: I study Japanese.",
   funFact:"Mai (every) combines with time words to make frequency expressions: mai-nichi (every day), mai-asa (every morning), mai-ban (every evening), mai-shuu (every week), mai-tsuki (every month), mai-toshi (every year). All are adverbs needing no particle."},

  {type:"fb", s:"毎朝(まいあさ)六時(ろくじ)に{1}ます。\n(I wake up at 6 every morning.)", a:"起(お)き", opts:["起(お)き","寝(ね)","行(い)き","食(た)べ"], sSrc:"I wake up at 6 every morning.",
   hint:"The polite stem of the verb for rising from bed."},

  {type:"teach", trg:"毎朝(まいあさ)", src:"every morning", pos:"adv", gender:null,
   note:"Mai (every) + asa (morning). No particle needed.\nKanji: 毎朝.",
   example:"A: 毎朝(まいあさ)何(なに)を飲(の)みますか?\nB: コーヒーを飲(の)みます。",
   exampleSrc:"A: What do you drink every morning?\nB: I drink coffee.",
   funFact:"朝 originally depicted the sun rising between plants, capturing dawn. Japanese mornings have specific cultural rituals: rajio taisou (radio exercises) at 6:30 AM has been broadcast continuously since 1928. Many Japanese still exercise to it daily."},

  {type:"teach", trg:"毎晩(まいばん)", src:"every evening / every night", pos:"adv", gender:null,
   note:"Mai (every) + ban (evening/night). No particle needed.\nKanji: 毎晩.",
   example:"A: 毎晩(まいばん)何(なに)をしますか?\nB: テレビを見(み)ます。",
   exampleSrc:"A: What do you do every evening?\nB: I watch TV.",
   funFact:"Ban and yoru both mean night/evening. Ban is used more in compounds (konban = tonight, maiban = every night) while yoru stands alone more often. Konbanwa (good evening) uses kon (this) + ban (evening) + wa (topic particle)."},

  {type:"mc", q:"勉強(べんきょう)する is what type of verb?", opts:["A ru-verb","A suru-verb","A u-verb","An irregular verb"], ans:"A suru-verb",
   hint:"This v... is made by adding s... to a noun meaning 'study/effort.'"},

  {type:"teach", trg:"仕事(しごと)", src:"work / job", pos:"noun", gender:null,
   note:"Can become a verb: 仕事(しごと)をする (to work). Very common word.\nKanji: 仕事.",
   example:"A: 仕事(しごと)は何時(なんじ)からですか?\nB: 九時(くじ)から五時(ごじ)までです。",
   exampleSrc:"A: What time is work from?\nB: From 9 to 5.",
   funFact:"仕事 combines 仕 (to serve) and 事 (matter/thing). Japanese work culture is famous for long hours, though this is changing. The concept of ikigai (purpose/reason for living) is deeply connected to meaningful work in Japanese philosophy."},

  {type:"teach", trg:"学校(がっこう)", src:"school", pos:"noun", gender:null,
   note:"Where students study. Types: 小学校(しょうがっこう) (elementary), 中学校(ちゅうがっこう) (middle), 高校(こうこう) (high).\nKanji: 学校.",
   example:"A: 学校(がっこう)には何時(なんじ)に行(い)きますか?\nB: 八時(はちじ)に行(い)きます。",
   exampleSrc:"A: What time do you go to school?\nB: I go at 8.",
   funFact:"学校 combines 学 (learning) and 校 (school building). Japanese school years start in April (not September) because cherry blossoms symbolize new beginnings. Students clean their own classrooms, eat lunch together, and often join after-school clubs called bukatsu."},

  {type:"fb", s:"毎日(まいにち)日本語(にほんご)を{1}します。\n(I study Japanese every day.)", a:"勉強(べんきょう)", opts:["勉強(べんきょう)","仕事(しごと)","学校(がっこう)","時間(じかん)"], sSrc:"I study Japanese every day.",
   hint:"The noun part of the suru-verb meaning 'to study.'"},

  {type:"match", pairs:[{trg:"起(お)きる",src:"to wake up"},{trg:"寝(ね)る",src:"to sleep"},{trg:"行(い)く",src:"to go"},{trg:"帰(かえ)る",src:"to go home"}]},

  {type:"match", pairs:[{trg:"毎日(まいにち)",src:"every day"},{trg:"毎朝(まいあさ)",src:"every morning"},{trg:"毎晩(まいばん)",src:"every evening"},{trg:"仕事(しごと)",src:"work"}]},

  {type:"mc", q:"帰(かえ)る specifically means:", opts:["to go anywhere","to come here","to return home","to leave"], ans:"to return home",
   hint:"This verb is about returning to your base or h..., not going to a new place."},

  {type:"fb", s:"何時(なんじ)にうちに{1}ますか?\n(What time do you go home?)", a:"帰(かえ)り", opts:["帰(かえ)り","行(い)き","起(お)き","寝(ね)"], sSrc:"What time do you go home?",
   hint:"The polite stem of the verb specifically for returning to your home base."},

  {type:"tip", title:"A Typical Japanese Day",
   text:"Here is a sample daily routine:\n六時(ろくじ)に 起(お)きます。(Wake up at 6.)\n六時半(ろくじはん)に 朝(あさ)ご飯(はん)を 食(た)べます。(Eat breakfast at 6:30.)\n八時(はちじ)に 学校(がっこう)に 行(い)きます。(Go to school at 8.)\n三時(さんじ)に うちに 帰(かえ)ります。(Go home at 3.)\n七時(しちじ)に 晩(ばん)ご飯(はん)を 食(た)べます。(Eat dinner at 7.)\n十一時(じゅういちじ)に 寝(ね)ます。(Go to bed at 11.)",
   deepDive:{title:"Japanese daily life patterns",
    text:"Japanese daily schedules tend to be very regular. Many people wake up early and commute long distances by train.\n\nKey cultural patterns:\n朝(あさ)ご飯(はん) (morning rice = breakfast) is often simple: rice, miso soup, pickles, fish.\nBento (packed lunch) is an art form, especially for school children.\nお風呂(ふろ) (bath) before bed is a daily ritual, not just hygiene."}},

  {type:"mc", q:"Which sentence means 'I go to school at 8'?", opts:["八時(はちじ)に寝(ね)ます","八時(はちじ)に食(た)べます","八時(はちじ)に帰(かえ)ります","八時(はちじ)に学校(がっこう)に行(い)きます"], ans:"八時(はちじ)に学校(がっこう)に行(い)きます",
   hint:"Hachi-ji ni (at 8) + gakkou ni (to school) + ikimasu (go)."},
{type:"match",pairs:[{trg:"\u301C時(じ)",src:"(review)"},{trg:"\u301C分(ふん)/分(ぷん)",src:"minute(s)"}]}]},

,BATCH2_L1
,BATCH4_L01
,BATCH4_L02
,BATCH6_L1
,BATCH8_L1
,BATCH7_L1
,BATCH9_L1
,BATCH10_L1
,BATCH11_L1
]};
export default UNIT_07;
