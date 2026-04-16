// Batch 2 expansion for Unit 16 (Plans) — more future plans, intentions, promises, schedules
const BATCH2_L_1 = {
  id:"jav2_u16l_b2_1", title:"みらいのはなし", icon:"🔭", xp:15, board:true,
  steps:[
  {type:"intro", title:"みらいのはなし",
   desc:"Expand your planning vocabulary with words for scheduling, making commitments, discussing career goals, and talking about life milestones. These expressions help you discuss the future with confidence and nuance.",
   goals:["Talk about career and life milestones","Express strong commitments and promises","Discuss future events with time expressions"]},

  {type:"teach", trg:"らいねん", src:"next year", pos:"noun", gender:null,
   note:"Time word: らい (coming) + ねん (year). No particle needed.\nKanji: 来年.",
   example:"A: らいねんなにをするつもりですか？\nB: にほんにりょこうするつもりです。",
   exampleSrc:"A: What do you intend to do next year?\nB: I intend to travel to Japan.",
   funFact:"来年 follows the pattern: 去年 (last year), 今年 (this year), 来年 (next year). らい (coming) appears in 来月 (next month), 来週 (next week). Time words with 来 all face the future. Japanese fiscal and school years start in April, so 来年 often means 'next April' in context."},

  {type:"teach", trg:"らいげつ", src:"next month", pos:"noun", gender:null,
   note:"Time word: らい (coming) + げつ (month). No particle needed.\nKanji: 来月.",
   example:"A: らいげつひっこしするよていです。\nB: どこにひっこしますか？",
   exampleSrc:"A: I plan to move next month.\nB: Where are you moving?",
   funFact:"来月 is essential for planning conversations. Japanese people plan ahead meticulously. You will hear らいげつの予定 (next month's schedule) in both business and personal contexts. Monthly planning is a cultural norm, with many people using detailed planner books (手帳)."},

  {type:"teach", trg:"らいしゅう", src:"next week", pos:"noun", gender:null,
   note:"Time word: らい (coming) + しゅう (week). No particle needed.\nKanji: 来週.",
   example:"A: らいしゅうあいていますか？\nB: すいようびならあいています。",
   exampleSrc:"A: Are you free next week?\nB: I am free on Wednesday.",
   funFact:"来週 is the go-to time frame for making plans with friends. Japanese social planning typically happens one to two weeks in advance. Last-minute invitations (当日) are less common. The phrase 来週のいつがいい？ (When is good next week?) starts many planning conversations."},

  {type:"teach", trg:"しゅうしょくする", src:"to get a job / to find employment", pos:"verb", gender:null,
   note:"する-verb. しゅうしょく = employment. A major life milestone.\nKanji: 就職する.",
   example:"A: そつぎょうしたらしゅうしょくするつもりです。\nB: どんなしごとがしたいですか？",
   exampleSrc:"A: I intend to get a job after graduating.\nB: What kind of work do you want to do?",
   funFact:"就職 combines 就 (take up) and 職 (occupation). Japanese job hunting (就活, shuukatsu) is a massive, organized process. University students begin job hunting in their third year with standardized suits, resume formats, and group interviews. Companies hire in batches every April."},

  {type:"mc", q:"らいねん means:", opts:["last year","this year","next year","every year"], ans:"next year",
   hint:"The time word using 来 (coming) + 年 (y...), pointing to the future."},

  {type:"teach", trg:"にゅうがくする", src:"to enter school / to enroll", pos:"verb", gender:null,
   note:"する-verb. にゅうがく = school enrollment. Opposite: そつぎょう (graduation).\nKanji: 入学する.",
   example:"A: むすこはらいねんしょうがっこうににゅうがくします。\nB: おめでとうございます！",
   exampleSrc:"A: My son will enter elementary school next year.\nB: Congratulations!",
   funFact:"入学 combines 入 (enter) and 学 (study). にゅうがくしき (entrance ceremony) in April is a major family event. Parents take photos of children in new uniforms under cherry blossoms. Japanese school entrance is determined by age: all children born in the same year start together."},

  {type:"teach", trg:"ひっこしする", src:"to move (to a new home)", pos:"verb", gender:null,
   note:"する-verb. ひっこし = a move/relocation.\nKanji: 引っ越しする.",
   example:"A: らいげつひっこしするよていです。\nB: たいへんですね。てつだいましょうか？",
   exampleSrc:"A: I plan to move next month.\nB: That is tough. Shall I help?",
   funFact:"引っ越し combines 引く (pull) and 越す (cross over), literally 'pulling things across.' Moving season in Japan peaks in March-April as the school and fiscal year changes. Moving companies are extremely professional, wrapping everything meticulously and even rearranging furniture."},

  {type:"teach", trg:"たいいんする", src:"to leave the hospital / to be discharged", pos:"verb", gender:null,
   note:"する-verb. たいいん = hospital discharge. Opposite: にゅういん (hospitalization).\nKanji: 退院する.",
   example:"A: おばあさんはいつたいいんしますか？\nB: らいしゅうたいいんするよていです。",
   exampleSrc:"A: When will your grandmother be discharged?\nB: She is planned to be discharged next week.",
   funFact:"退院 combines 退 (retreat/leave) and 院 (institution). Japanese hospitals keep patients longer than Western ones. A broken arm might mean a week-long stay. Upon discharge, patients and families often bring gifts (orei) to the nurses and doctors as thanks."},

  {type:"fb", s:"{1}にほんにりょこうするつもりです。\n(I intend to travel to Japan next year.)", a:"らいねん", opts:["らいねん","きょねん","ことし","まいとし"], sSrc:"I intend to travel to Japan next year.",
   hint:"The future time word combining 'coming' with 'year.'"},

  {type:"teach", trg:"まにあう", src:"to be on time / to make it", pos:"verb", gender:null,
   note:"Group 1 verb. Opposite: まにあわない (will not make it).\nKanji: 間に合う.",
   example:"A: でんしゃにまにあいますか？\nB: いそげばまにあいます！",
   exampleSrc:"A: Will you make it to the train?\nB: If I hurry, I will make it!",
   funFact:"間に合う literally means 'to fit within the space/time.' Japanese trains run on exact schedules, so まにあう/まにあわない is a daily concern. Being even one minute late means missing the train. まにあった！ (I made it!) is the sweet sound of relief on the platform."},

  {type:"teach", trg:"いそぐ", src:"to hurry / to rush", pos:"verb", gender:null,
   note:"Group 1 verb. いそいでください = please hurry.\nKanji: 急ぐ.",
   example:"A: いそがないとまにあいません。\nB: わかりました。いそぎましょう！",
   exampleSrc:"A: If we do not hurry, we will not make it.\nB: Understood. Let us hurry!",
   funFact:"急ぐ uses the kanji 急 (urgent), which also appears in 急行 (express train), 急病 (sudden illness), and 救急車 (ambulance). Japanese society values punctuality, but rushing is also seen as undignified. The ideal is to plan well enough that you never need to いそぐ."},

  {type:"teach", trg:"やくそく", src:"promise / appointment", pos:"noun", gender:null,
   note:"Both a promise between people and a scheduled meeting.\nKanji: 約束. やくそくする = to promise.",
   example:"A: ともだちとのやくそくがあります。\nB: なんじにあうやくそくですか？",
   exampleSrc:"A: I have an appointment with a friend.\nB: What time are you meeting?",
   funFact:"約束 combines 約 (approximately/promise) and 束 (bundle/bind). A promise is literally 'binding together.' Breaking a やくそく is taken very seriously in Japanese culture. The childhood pinky promise (ゆびきりげんまん) has a dark traditional penalty song about swallowing needles."},

  {type:"teach", trg:"たいせつにする", src:"to cherish / to take care of", pos:"verb", gender:null,
   note:"たいせつ (important) + にする (to make it so). Treating something with care.\nKanji: 大切にする.",
   example:"A: このけいけんをたいせつにしてください。\nB: はい、わすれません。",
   exampleSrc:"A: Please cherish this experience.\nB: Yes, I will not forget it.",
   funFact:"大切にする goes beyond just 'valuing' something. It means actively taking care of it, nurturing it. You can たいせつにする relationships, memories, objects, and traditions. ものをたいせつにする (taking care of things) is a core Japanese value taught from childhood, related to mottainai (what a waste)."},

  {type:"mc", q:"まにあう means:", opts:["to be late","to be on time","to wait","to cancel"], ans:"to be on time",
   hint:"Literally 'to fit within the t.../space,' describing arriving before the deadline."},

  {type:"match", pairs:[{trg:"らいねん",src:"next year"},{trg:"らいげつ",src:"next month"},{trg:"らいしゅう",src:"next week"},{trg:"やくそく",src:"promise"}]},

  {type:"match", pairs:[{trg:"しゅうしょくする",src:"get a job"},{trg:"にゅうがくする",src:"enter school"},{trg:"ひっこしする",src:"move house"},{trg:"まにあう",src:"make it on time"}]},

  {type:"fb", s:"でんしゃに{1}ますか？\n(Will you make it to the train?)", a:"まにあい", opts:["まにあい","いそぎ","おくれ","のり"], sSrc:"Will you make it to the train?",
   hint:"The polite stem of the verb meaning 'to be on time' or 'to catch (a train).'"},

  {type:"mc", q:"やくそく covers:", opts:["only formal contracts","only casual promises","both promises and appointments","only work meetings"], ans:"both promises and appointments",
   hint:"This word serves for both interpersonal commitments and scheduled meetings."},

  {type:"fb", s:"{1}しないとまにあいません。\n(If we do not hurry, we will not make it.)", a:"いそが", opts:["いそが","まにあわ","おくれ","やめ"], sSrc:"If we do not hurry, we will not make it.",
   hint:"The negative conditional stem of the verb meaning 'to rush.'"},
]};
export default BATCH2_L_1;
