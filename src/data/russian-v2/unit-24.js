// Russian V2 Unit 24 — Verbs of Motion (B1.2)
const UNIT_24 = {n:24, lang:"ru", srcLang:"en", track:"v2", title:"Глаголы движения", sub:"Verbs of Motion",
 icon:"🚶", level:"B1.2", color:"#7B5EE8",
 lessons:[

{id:"ruv2_u24l1", title:"Идти vs Ходить", icon:"🚶", xp:15, board:true, steps:[

{type:"intro", title:"Russian Motion Verbs",
 desc:"Russian has TWO verbs for every mode of motion: one for ongoing/one-way trip (идти) and one for habitual/round-trip (ходить). This is a major Russian feature.",
 goals:["Distinguish идти/ходить","Apply to other motion verbs","Use prefix combinations"]},

{type:"teach", trg:"идти", src:"to go (one-way, on foot)", pos:"verb", gender:null,
 note:"Unidirectional: going in one direction right now.\nЯ иду, ты идёшь, он идёт.",
 example:"A: Куда ты идёшь?\nB: Иду в магазин.",
 exampleSrc:"A: Where are you going?\nB: Going to the store.",
 funFact:"Идти = right now, in one direction. The moment you start heading somewhere, you use идти. Past tense: шёл/шла/шли."},

{type:"teach", trg:"ходить", src:"to go (habitual, round-trip)", pos:"verb", gender:null,
 note:"Multidirectional: walking around, habitual going.\nЯ хожу, ты ходишь.",
 example:"A: Куда ты ходишь каждый день?\nB: На работу.",
 exampleSrc:"A: Where do you go every day?\nB: To work.",
 funFact:"Ходить = habitual OR walking around. 'Я хожу в школу' (I go to school, habit, round-trips) vs 'я иду в школу' (I'm going to school, right now)."},

{type:"teach", trg:"ехать", src:"to go (one-way, by vehicle)", pos:"verb", gender:null,
 note:"Unidirectional motorized travel.\nЯ еду, ты едешь.",
 example:"A: Куда едешь?\nB: В аэропорт.",
 exampleSrc:"A: Where are you going (by vehicle)?\nB: To the airport.",
 funFact:"Ехать's conjugation: я еду, ты едешь, он едет, мы едем, вы едете, они едут. Past: ехал/ехала/ехали."},

{type:"teach", trg:"ездить", src:"to go (habitual, by vehicle)", pos:"verb", gender:null,
 note:"Multidirectional motorized travel.\nЯ езжу, ты ездишь.",
 example:"A: Ты часто ездишь в Москву?\nB: Раз в месяц.",
 exampleSrc:"A: Do you often go to Moscow?\nB: Once a month.",
 funFact:"Ездить implies repeated round-trips. 'Я езжу на работу' (I go to work, habit). 'Я еду на работу' (I'm going to work right now)."},

{type:"teach", trg:"лететь", src:"to fly (one-way)", pos:"verb", gender:null,
 note:"Unidirectional flying.\nЯ лечу, ты летишь.",
 example:"A: Когда летишь?\nB: Завтра утром.",
 exampleSrc:"A: When are you flying?\nB: Tomorrow morning.",
 funFact:"Лететь for birds, planes, anything airborne. 'Самолёт летит' (the plane is flying). Russian distinguishes this from ходить (walk) even for birds."},

{type:"teach", trg:"летать", src:"to fly (habitual)", pos:"verb", gender:null,
 note:"Multidirectional flying.\nЯ летаю, ты летаешь.",
 example:"A: Как часто ты летаешь?\nB: Несколько раз в год.",
 exampleSrc:"A: How often do you fly?\nB: Several times a year.",
 funFact:"Летать is for habitual flying OR flying around. Dragons in fairy tales 'летают.' Occasional fliers also use this verb."},

{type:"tip", title:"Motion Verb Pairs",
 text:"RUSSIAN MOTION VERBS: TWO FORMS EACH\n\nUNIDIRECTIONAL (right now, one way):\n- идти (go on foot)\n- ехать (go by vehicle)\n- лететь (fly)\n- плыть (swim, sail)\n- бежать (run)\n- нести (carry)\n- вести (lead)\n- везти (transport)\n\nMULTIDIRECTIONAL (habitual, round-trip, wandering):\n- ходить\n- ездить\n- летать\n- плавать\n- бегать\n- носить\n- водить\n- возить\n\nKEY DIFFERENCES:\n• Unidirectional: in-progress, one-way, specific destination.\n• Multidirectional: habitual, round-trip, no specific destination.\n\nEXAMPLES:\n'Я иду в школу.' — I'm going to school now.\n'Я хожу в школу.' — I go to school (every day).\n'Я еду в Москву.' — I'm going to Moscow now.\n'Я езжу в Москву.' — I go to Moscow regularly.\n\nThese are IMPERFECTIVE both. Perfective forms come from prefixed verbs (пойти, поехать — which we'll learn).",
 icon:"🚶"},

{type:"mc", q:"'I go to work every day' — which verb?",
 opts:["иду","хожу","еду","езжу"],
 ans:"хожу",
 hint:"'Every day' = habit. On foot = ходить, not ездить."},

{type:"mc", q:"'I'm driving to the airport' — which?",
 opts:["иду","еду","ездить","ходить"],
 ans:"еду",
 hint:"By vehicle + right now + one direction = ехать (еду)."},

{type:"fb", s:"A: Куда ты {1}?\nB: Иду в магазин.",
 a:["идёшь"],
 opts:["идёшь","ходишь","едешь","ездишь"],
 hint:"Present tense 'going' right now, on foot.",
 sSrc:"A: Where are you going?\nB: Going to the store."},

{type:"fb", s:"Я каждый день {1} в школу.",
 a:["хожу"],
 opts:["хожу","иду","езжу","еду"],
 hint:"'Каждый день' = habitual. On foot + habitual = ходить.",
 sSrc:"I go to school every day."},

{type:"match", pairs:[
  {trg:"идти", src:"go (one-way, foot)"},
  {trg:"ходить", src:"go (habitual, foot)"},
  {trg:"ехать", src:"go (one-way, vehicle)"},
  {trg:"ездить", src:"go (habitual, vehicle)"},
  {trg:"лететь", src:"fly (one-way)"}
]}
]},

{id:"ruv2_u24l2", title:"Prefixes with Motion", icon:"↔️", xp:15, board:true, steps:[

{type:"intro", title:"Adding Prefixes to Motion Verbs",
 desc:"Prefixes change the meaning of motion verbs precisely. 'По-' starts motion. 'При-' means arrival. 'У-' means leaving. Each prefix adds a specific motion concept.",
 goals:["Know common motion prefixes","Form prefixed perfective motion","Contrast with simple motion"]},

{type:"teach", trg:"пойти", src:"to go (start moving)", pos:"verb", gender:null,
 note:"Perfective! One-time departure.\nFuture: пойду, пойдёшь.",
 example:"A: Куда ты пошёл?\nB: В магазин, вернусь скоро.",
 exampleSrc:"A: Where did you go?\nB: To the store, will be back soon.",
 funFact:"По- prefix + идти = пойти (perfective). Future: пойду. Past: пошёл/пошла. Common: 'Пойдём!' (Let's go!) uses this form."},

{type:"teach", trg:"прийти", src:"to come (arrive)", pos:"verb", gender:null,
 note:"Perfective arrival.\nFuture: приду, придёшь. Past: пришёл/пришла.",
 example:"A: Во сколько придёшь?\nB: К семи.",
 exampleSrc:"A: When will you arrive?\nB: By seven.",
 funFact:"При- prefix = arrival. Прийти (arrive on foot), приехать (arrive by vehicle), прилететь (arrive by flying). Universal pattern."},

{type:"teach", trg:"уйти", src:"to leave (on foot)", pos:"verb", gender:null,
 note:"Perfective departure.\nУ- prefix = away/out.",
 example:"A: Когда он уйдёт?\nB: В пять часов.",
 exampleSrc:"A: When will he leave?\nB: At five o'clock.",
 funFact:"У- prefix means 'away from.' Уйти (leave on foot), уехать (leave by vehicle), улететь (fly away). Often final departure."},

{type:"teach", trg:"приехать", src:"to arrive (by vehicle)", pos:"verb", gender:null,
 note:"Perfective vehicular arrival.\nFuture: приеду, приедешь.",
 example:"A: Когда вы приедете?\nB: В воскресенье вечером.",
 exampleSrc:"A: When will you arrive?\nB: Sunday evening.",
 funFact:"'Приехали!' (We've arrived!) is the classic announcement on long trains. Russians on a Transsib journey wait for this moment."},

{type:"teach", trg:"выйти", src:"to go out / exit", pos:"verb", gender:null,
 note:"Вы- prefix = out.\nFuture: выйду, выйдешь. Past: вышел/вышла.",
 example:"A: Когда выйдешь?\nB: Через пять минут.",
 exampleSrc:"A: When will you come out?\nB: In five minutes.",
 funFact:"Вы- = out/exit. Выйти из дома (leave home), выйти из автобуса (get off bus), выйти на улицу (go outside). Essential everyday verb."},

{type:"teach", trg:"войти", src:"to enter / come in", pos:"verb", gender:null,
 note:"В- prefix = into.\nFuture: войду. Past: вошёл/вошла.",
 example:"A: Можно войти?\nB: Пожалуйста, входите.",
 exampleSrc:"A: May I come in?\nB: Please, do enter.",
 funFact:"'Входите!' is standard invitation when someone knocks. 'Можно войти?' is the polite knock-question. Russian doorway etiquette."},

{type:"teach", trg:"вернуться", src:"to return", pos:"verb", gender:null,
 note:"Reflexive! Always with ся.\nFuture: вернусь, вернёшься.",
 example:"A: Когда вернёшься?\nB: Поздно вечером.",
 exampleSrc:"A: When will you return?\nB: Late in the evening.",
 funFact:"'Вернусь скоро' (I'll be back soon) — common parting phrase. Originally reflexive because 'returning oneself' (вернуть = to return something; вернуться = to return oneself)."},

{type:"tip", title:"Motion Prefixes: The System",
 text:"PREFIXES ON MOTION VERBS:\n\nПО- (start, go):\nпойти (go), поехать (go by veh), пойдём! (let's go!).\n\nПРИ- (arrive):\nприйти (arrive on foot), приехать (arrive by veh).\n\nУ- (leave, away):\nуйти (leave on foot), уехать (leave by veh).\n\nВЫ- (exit, out):\nвыйти (go out), выехать (drive out).\n\nВ- (enter, into):\nвойти (enter), въехать (drive in).\n\nПЕРЕ- (across):\nперейти (cross on foot), переехать (move / cross by car).\n\nПОД- (approach):\nподойти (approach on foot), подъехать (drive up).\n\nOТ- (move away from):\nотойти (step away), отъехать (drive away).\n\nEach prefix makes the verb PERFECTIVE. To make them imperfective, go back to the base multidirectional form: пойти → ходить, приехать → приезжать.\n\nRussian motion verb system is systematic once you see the logic.",
 icon:"↔️"},

{type:"mc", q:"Which prefix means 'to arrive'?",
 opts:["по-","при-","у-","вы-"],
 ans:"при-",
 hint:"'Arrive' = motion ending at destination. Прийти, приехать, прилететь."},

{type:"mc", q:"'I'll come back' in Russian uses which verb?",
 opts:["прийти","уйти","вернуться","пойти"],
 ans:"вернуться",
 hint:"Specifically 'return' = вернуться (reflexive). With future conjugation."},

{type:"fb", s:"A: Когда ты {1}?\nB: Завтра в пять.",
 a:["придёшь"],
 opts:["придёшь","уйдёшь","пойдёшь","выйдешь"],
 hint:"Arrival at a specific time — the 'arrive' prefix.",
 sSrc:"A: When will you arrive?\nB: Tomorrow at five."},

{type:"fb", s:"A: Можно {1}?\nB: Пожалуйста.",
 a:["войти"],
 opts:["войти","выйти","пойти","уйти"],
 hint:"Asking permission to enter a room.",
 sSrc:"A: May I come in?\nB: Please."},

{type:"match", pairs:[
  {trg:"пойти", src:"to start going"},
  {trg:"прийти", src:"to arrive"},
  {trg:"уйти", src:"to leave"},
  {trg:"выйти", src:"to exit"},
  {trg:"войти", src:"to enter"}
]}
,{type:"match",pairs:[{trg:"летать",src:"to fly (habitual)"}]}]}

]};
export default UNIT_24;
