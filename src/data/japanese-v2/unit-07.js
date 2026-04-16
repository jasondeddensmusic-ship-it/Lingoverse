// Japanese V2 Unit 07. じかん (Time & Daily Routine)
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
  title:"じかん", sub:"Time & Daily Routine",
  icon:"⏰", level:"A1.2", color:"#7B5EE8",
  lessons:[

// ═══ L1: なんじですか (Telling Time) ═══
{id:"jav2_u7l1", title:"なんじですか", icon:"🕐", xp:15, board:true, steps:[
  {type:"intro", title:"なんじですか",
   desc:"Learn to tell time in Japanese. Hours use the counter ji, and minutes use fun/pun with sound changes. You will also learn AM/PM and the essential question 'what time?'",
   goals:["Ask and tell the time with nanji","Use ji (hours) and fun/pun (minutes)","Distinguish gozen (AM) and gogo (PM)"]},

  {type:"teach", trg:"いま", src:"now", pos:"adv", gender:null,
   note:"Very common time word. Often starts time questions.\nKanji: 今.",
   example:"A: いま、なんじですか？\nB: ごごさんじです。",
   exampleSrc:"A: What time is it now?\nB: It is 3 PM.",
   funFact:"今 shows a lid covering something, suggesting 'this very moment being contained.' Ima appears in many compounds: ima-made (until now), ima-kara (from now), konnichi (today, literally 'this day'), kongetsu (this month)."},

  {type:"teach", trg:"なんじ", src:"what time?", pos:"pron", gender:null,
   note:"Question word: nan (what) + ji (hour/o'clock). Used to ask the current time.\nKanji: 何時.",
   example:"A: あしたはなんじにおきますか？\nB: しちじにおきます。",
   exampleSrc:"A: What time will you wake up tomorrow?\nB: I will wake up at 7 o'clock.",
   funFact:"Nan replaces the number in any counter to form a question. Nanji (what hour?), nanpun (how many minutes?), nanyoubi (what day of the week?). This pattern is completely regular and works with every Japanese counter."},

  {type:"teach", trg:"〜じ", src:"o'clock (hour counter)", pos:"part", gender:null,
   note:"Attach to numbers: いちじ (1:00), にじ (2:00), さんじ (3:00).\nIrregulars: 4 = よじ, 7 = しちじ, 9 = くじ.\nKanji: 時.",
   example:"A: いまさんじです。\nB: もうさんじですか！",
   exampleSrc:"A: It is 3 o'clock now.\nB: It is already 3 o'clock?!",
   funFact:"時 shows the sun (日) next to a hand reaching for a temple (寺). Three hours have irregular readings: yo-ji (4), shichi-ji (7), and ku-ji (9). The rest are regular: ichi-ji, ni-ji, san-ji, go-ji, roku-ji, hachi-ji, juu-ji."},

  {type:"teach", trg:"〜ふん/ぷん", src:"minute(s)", pos:"part", gender:null,
   note:"Sound changes: 1 = いっぷん, 3 = さんぷん, 4 = よんぷん, 6 = ろっぷん,\n8 = はっぷん/はちふん, 10 = じゅっぷん.\nKanji: 分.",
   example:"A: いまなんじですか？\nB: くじじゅっぷんです。",
   exampleSrc:"A: What time is it?\nB: It is 9:10.",
   funFact:"分 means both 'minute' and 'to divide/understand.' The sound alternates between fun and pun depending on the preceding number. This rendaku (sound change) follows the same pattern as other counters: numbers ending in certain sounds trigger voicing."},

  {type:"mc", q:"なんじですか means:", opts:["What time is it?","Where is it?","How many?","Who is it?"], ans:"What time is it?",
   hint:"Nan (what) + ji (hour) = a question about the clock."},

  {type:"teach", trg:"ごぜん", src:"AM / morning", pos:"noun", gender:null,
   note:"Placed BEFORE the time: ごぜんくじ = 9 AM. Opposite: ごご.\nKanji: 午前.",
   example:"A: かいぎはごぜんじゅうじからです。\nB: わかりました。",
   exampleSrc:"A: The meeting is from 10 AM.\nB: Understood.",
   funFact:"午前 literally means 'before noon.' 午 (go) originally meant the Horse hour (11 AM to 1 PM) in the old Chinese zodiac time system. Japan used animal-based time divisions until adopting Western clocks in the Meiji era."},

  {type:"teach", trg:"ごご", src:"PM / afternoon", pos:"noun", gender:null,
   note:"Placed BEFORE the time: ごごさんじ = 3 PM.\nKanji: 午後.",
   example:"A: ごごなにをしますか？\nB: えいがをみます。",
   exampleSrc:"A: What will you do in the afternoon?\nB: I will watch a movie.",
   funFact:"午後 means 'after noon.' In everyday speech, Japanese people often skip gozen/gogo when the context is clear. But in formal settings (train schedules, appointments), they always specify. The 24-hour clock is also common in Japan for schedules."},

  {type:"teach", trg:"はん", src:"half (past)", pos:"noun", gender:null,
   note:"Added after ji to mean 'half past.' くじはん = 9:30.\nKanji: 半.",
   example:"A: いまなんじですか？\nB: しちじはんです。",
   exampleSrc:"A: What time is it?\nB: It is 7:30.",
   funFact:"半 shows a line cutting something in two, meaning 'half.' Han is the easiest way to say 30 minutes: roku-ji han (6:30). You can also say roku-ji sanjuppun (6 hours 30 minutes), but han is much more natural in conversation."},

  {type:"fb", s:"いま、{1}ですか？\n(What time is it now?)", a:"なんじ", opts:["なんじ","いくら","なんにん","どこ"], sSrc:"What time is it now?",
   hint:"The question word that combines 'what' with the hour counter."},

  {type:"teach", trg:"に", src:"at (time particle)", pos:"part", gender:null,
   note:"Marks a specific point in time: しちじに = at 7 o'clock.\nUsed with clock times, days, months. NOT with relative times (today, tomorrow).",
   example:"A: なんじにおきますか？\nB: ろくじにおきます。",
   exampleSrc:"A: What time do you wake up?\nB: I wake up at 6 o'clock.",
   funFact:"Ni has many uses, but as a time particle it works like English 'at.' Use ni with specific times (shichi-ji ni = at 7), specific days (getsuyoubi ni = on Monday), and dates. Do NOT use ni with relative words: kyou (today), ashita (tomorrow), ima (now)."},

  {type:"teach", trg:"から", src:"from (starting point)", pos:"part", gender:null,
   note:"Marks a starting point in time or space: くじから = from 9 o'clock.",
   example:"A: しごとはなんじからですか？\nB: くじからです。",
   exampleSrc:"A: What time does work start?\nB: From 9 o'clock.",
   funFact:"Kara marks both time and place starting points: Tokyo kara (from Tokyo), kuji kara (from 9 o'clock). It pairs with made (until/to): kuji kara goji made = from 9 to 5. This kara...made pair is one of the most useful structures in Japanese."},

  {type:"teach", trg:"まで", src:"until / to (ending point)", pos:"part", gender:null,
   note:"Marks an ending point. Often paired with から: くじからごじまで = from 9 to 5.",
   example:"A: じゅぎょうはなんじまでですか？\nB: さんじまでです。",
   exampleSrc:"A: Until what time is the class?\nB: Until 3 o'clock.",
   funFact:"Made can express both time and space endpoints: Tokyo made (to Tokyo), goji made (until 5 o'clock). It also means 'even' in a different usage: kodomo made shitteiru (even children know). Context makes the meaning clear."},

  {type:"mc", q:"ごぜんくじ means:", opts:["9 PM","9 AM","9:30","9 minutes"], ans:"9 AM",
   hint:"Gozen (before noon) + ku-ji (9 o'clock)."},

  {type:"match", pairs:[{trg:"いま",src:"now"},{trg:"ごぜん",src:"AM"},{trg:"ごご",src:"PM"},{trg:"はん",src:"half past"}]},

  {type:"match", pairs:[{trg:"に",src:"at (time)"},{trg:"から",src:"from"},{trg:"まで",src:"until"},{trg:"なんじ",src:"what time?"}]},

  {type:"fb", s:"くじ{1}ごじまでです。\n(From 9 to 5.)", a:"から", opts:["から","まで","に","で"], sSrc:"From 9 to 5.",
   hint:"The particle that marks the starting point of a time range."},

  {type:"mc", q:"しちじはん means:", opts:["7 AM","7 minutes","7:30","7 PM"], ans:"7:30",
   hint:"Shichi-ji (7 o'clock) + han (half)."},

  {type:"tip", title:"Time Particle Rules",
   text:"Use に with specific clock times:\nしちじに おきます。(I wake up at 7.)\n\nUse から...まで for ranges:\nくじから ごじまで はたらきます。(I work from 9 to 5.)\n\nDo NOT use に with:\nきょう (today), あした (tomorrow), いま (now)\nThese relative time words need no particle.",
   deepDive:{title:"Why no ni with kyou?",
    text:"Specific times (7 o'clock, Monday, March 3rd) need ni because they are fixed points on a calendar or clock.\n\nRelative times (today, tomorrow, now, last week) do not need ni because they shift depending on when you speak.\n\nThink of it this way: if you can point to it on a calendar or clock, use ni. If it moves with you, skip ni."}},
]},

// ═══ L2: まいにちのせいかつ (Daily Routine) ═══
{id:"jav2_u7l2", title:"まいにちのせいかつ", icon:"🌅", xp:15, board:true, steps:[
  {type:"intro", title:"まいにちのせいかつ",
   desc:"Learn the verbs for your daily routine in Japanese. Wake up, eat, study, go, come back, and sleep. These are the verbs you will use every single day.",
   goals:["Describe your daily routine with common verbs","Use time expressions with routine verbs","Tell someone your typical schedule"]},

  {type:"teach", trg:"おきる", src:"to wake up / to get up", pos:"verb", gender:null,
   note:"A ru-verb (ichidan). Polite: おきます. Also means 'to occur' (events).\nKanji: 起きる.",
   example:"A: まいあさなんじにおきますか？\nB: ろくじにおきます。",
   exampleSrc:"A: What time do you wake up every morning?\nB: I wake up at 6.",
   funFact:"起 shows a person (己) running (走) with energy, suggesting rising up. Okiru is a ru-verb, so conjugation is simple: oki-masu, oki-nai, oki-ta. It doubles as 'to occur': jishin ga okita (an earthquake occurred)."},

  {type:"teach", trg:"ねる", src:"to sleep / to go to bed", pos:"verb", gender:null,
   note:"A ru-verb (ichidan). Polite: ねます. Means both falling asleep and lying down.\nKanji: 寝る.",
   example:"A: まいばんなんじにねますか？\nB: じゅういちじにねます。",
   exampleSrc:"A: What time do you go to bed every night?\nB: I go to bed at 11.",
   funFact:"寝 shows a person lying under a roof on a bed. Neru covers both 'go to bed' and 'sleep.' For deeper sleep emphasis, use nemuru (眠る). The polite nemasu form is used in daily conversation much more than the dictionary form neru."},

  {type:"teach", trg:"いく", src:"to go", pos:"verb", gender:null,
   note:"A u-verb (godan). Polite: いきます. One of the most used verbs.\nKanji: 行く.",
   example:"A: がっこうにいきますか？\nB: はい、まいにちいきます。",
   exampleSrc:"A: Do you go to school?\nB: Yes, I go every day.",
   funFact:"行 shows a crossroads, representing travel/going. Iku has an irregular te-form: itte (not iite). This is one of only two u-verbs with an irregular te-form (the other is kuru becoming kite). Pattern: place + ni + ikimasu."},

  {type:"mc", q:"おきる means:", opts:["to wake up","to eat","to sleep","to go"], ans:"to wake up",
   hint:"This ru-verb describes the action of rising from bed in the morning."},

  {type:"teach", trg:"かえる", src:"to return / to go home", pos:"verb", gender:null,
   note:"A u-verb (godan). Polite: かえります. Specifically means returning to your base (home).\nKanji: 帰る.",
   example:"A: なんじにうちにかえりますか？\nB: ごごろくじにかえります。",
   exampleSrc:"A: What time do you go home?\nB: I go home at 6 PM.",
   funFact:"帰 contains elements suggesting 'returning to where you started.' Kaeru specifically means returning to your home base, unlike modoru (to go back to any place). When Japanese workers say 'kaerimasu,' everyone knows they mean going home."},

  {type:"teach", trg:"べんきょうする", src:"to study", pos:"verb", gender:null,
   note:"A suru-verb (irregular). Polite: べんきょうします.\nKanji: 勉強する. Literally 'strengthen by effort.'",
   example:"A: まいにちにほんごをべんきょうしますか？\nB: はい、いちじかんべんきょうします。",
   exampleSrc:"A: Do you study Japanese every day?\nB: Yes, I study for one hour.",
   funFact:"勉強 combines 勉 (effort/diligence) and 強 (strong). Literally 'effort-strengthening.' Suru verbs are easy: take any noun and add suru to make a verb. Ryouri-suru (to cook), unten-suru (to drive), sanpo-suru (to take a walk)."},

  {type:"teach", trg:"まいにち", src:"every day", pos:"adv", gender:null,
   note:"Time word: mai (every) + nichi (day). No particle needed.\nKanji: 毎日.",
   example:"A: まいにちなにをしますか？\nB: にほんごをべんきょうします。",
   exampleSrc:"A: What do you do every day?\nB: I study Japanese.",
   funFact:"Mai (every) combines with time words to make frequency expressions: mai-nichi (every day), mai-asa (every morning), mai-ban (every evening), mai-shuu (every week), mai-tsuki (every month), mai-toshi (every year). All are adverbs needing no particle."},

  {type:"fb", s:"まいあさろくじに{1}ます。\n(I wake up at 6 every morning.)", a:"おき", opts:["おき","ね","いき","たべ"], sSrc:"I wake up at 6 every morning.",
   hint:"The polite stem of the verb for rising from bed."},

  {type:"teach", trg:"まいあさ", src:"every morning", pos:"adv", gender:null,
   note:"Mai (every) + asa (morning). No particle needed.\nKanji: 毎朝.",
   example:"A: まいあさなにをのみますか？\nB: コーヒーをのみます。",
   exampleSrc:"A: What do you drink every morning?\nB: I drink coffee.",
   funFact:"朝 originally depicted the sun rising between plants, capturing dawn. Japanese mornings have specific cultural rituals: rajio taisou (radio exercises) at 6:30 AM has been broadcast continuously since 1928. Many Japanese still exercise to it daily."},

  {type:"teach", trg:"まいばん", src:"every evening / every night", pos:"adv", gender:null,
   note:"Mai (every) + ban (evening/night). No particle needed.\nKanji: 毎晩.",
   example:"A: まいばんなにをしますか？\nB: テレビをみます。",
   exampleSrc:"A: What do you do every evening?\nB: I watch TV.",
   funFact:"Ban and yoru both mean night/evening. Ban is used more in compounds (konban = tonight, maiban = every night) while yoru stands alone more often. Konbanwa (good evening) uses kon (this) + ban (evening) + wa (topic particle)."},

  {type:"mc", q:"べんきょうする is what type of verb?", opts:["A ru-verb","A suru-verb","A u-verb","An irregular verb"], ans:"A suru-verb",
   hint:"This v... is made by adding s... to a noun meaning 'study/effort.'"},

  {type:"teach", trg:"しごと", src:"work / job", pos:"noun", gender:null,
   note:"Can become a verb: しごとをする (to work). Very common word.\nKanji: 仕事.",
   example:"A: しごとはなんじからですか？\nB: くじからごじまでです。",
   exampleSrc:"A: What time is work from?\nB: From 9 to 5.",
   funFact:"仕事 combines 仕 (to serve) and 事 (matter/thing). Japanese work culture is famous for long hours, though this is changing. The concept of ikigai (purpose/reason for living) is deeply connected to meaningful work in Japanese philosophy."},

  {type:"teach", trg:"がっこう", src:"school", pos:"noun", gender:null,
   note:"Where students study. Types: しょうがっこう (elementary), ちゅうがっこう (middle), こうこう (high).\nKanji: 学校.",
   example:"A: がっこうにはなんじにいきますか？\nB: はちじにいきます。",
   exampleSrc:"A: What time do you go to school?\nB: I go at 8.",
   funFact:"学校 combines 学 (learning) and 校 (school building). Japanese school years start in April (not September) because cherry blossoms symbolize new beginnings. Students clean their own classrooms, eat lunch together, and often join after-school clubs called bukatsu."},

  {type:"fb", s:"まいにちにほんごを{1}します。\n(I study Japanese every day.)", a:"べんきょう", opts:["べんきょう","しごと","がっこう","じかん"], sSrc:"I study Japanese every day.",
   hint:"The noun part of the suru-verb meaning 'to study.'"},

  {type:"match", pairs:[{trg:"おきる",src:"to wake up"},{trg:"ねる",src:"to sleep"},{trg:"いく",src:"to go"},{trg:"かえる",src:"to go home"}]},

  {type:"match", pairs:[{trg:"まいにち",src:"every day"},{trg:"まいあさ",src:"every morning"},{trg:"まいばん",src:"every evening"},{trg:"しごと",src:"work"}]},

  {type:"mc", q:"かえる specifically means:", opts:["to go anywhere","to come here","to return home","to leave"], ans:"to return home",
   hint:"This verb is about returning to your base or h..., not going to a new place."},

  {type:"fb", s:"なんじにうちに{1}ますか？\n(What time do you go home?)", a:"かえり", opts:["かえり","いき","おき","ね"], sSrc:"What time do you go home?",
   hint:"The polite stem of the verb specifically for returning to your home base."},

  {type:"tip", title:"A Typical Japanese Day",
   text:"Here is a sample daily routine:\nろくじに おきます。(Wake up at 6.)\nろくじはんに あさごはんを たべます。(Eat breakfast at 6:30.)\nはちじに がっこうに いきます。(Go to school at 8.)\nさんじに うちに かえります。(Go home at 3.)\nしちじに ばんごはんを たべます。(Eat dinner at 7.)\nじゅういちじに ねます。(Go to bed at 11.)",
   deepDive:{title:"Japanese daily life patterns",
    text:"Japanese daily schedules tend to be very regular. Many people wake up early and commute long distances by train.\n\nKey cultural patterns:\nAsa-gohan (morning rice = breakfast) is often simple: rice, miso soup, pickles, fish.\nBento (packed lunch) is an art form, especially for school children.\nOfuro (bath) before bed is a daily ritual, not just hygiene."}},

  {type:"mc", q:"Which sentence means 'I go to school at 8'?", opts:["はちじにねます","はちじにたべます","はちじにかえります","はちじにがっこうにいきます"], ans:"はちじにがっこうにいきます",
   hint:"Hachi-ji ni (at 8) + gakkou ni (to school) + ikimasu (go)."},
]},

,BATCH2_L1
,BATCH4_L01
,BATCH4_L02
,BATCH6_L1
,BATCH8_L1
,BATCH7_L1
,BATCH9_L1
,BATCH10_L1
]};
export default UNIT_07;
