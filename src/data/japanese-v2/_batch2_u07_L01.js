// Batch 2 expansion for Unit 07 (Time) — schedules, durations, frequency
const BATCH2_L_1 = {
  id:"jav2_u07l_b2_1", title:"どのくらい", icon:"⏱️", xp:15, board:true,
  steps:[
  {type:"intro", title:"どのくらい",
   desc:"Expand your time vocabulary with duration expressions, frequency words, and schedule-related terms. These words let you talk about how long things take, how often you do them, and when events are planned.",
   goals:["Express duration with jikan (hours) and fun (minutes)","Use frequency words: itsumo, tokidoki, amari","Talk about schedules with youbi (days of the week)"]},

  {type:"teach", trg:"〜じかん", src:"~ hour(s) (duration)", pos:"part", gender:null,
   note:"Duration counter. いちじかん = 1 hour, にじかん = 2 hours.\nDifferent from 〜じ (o'clock). Kanji: 時間.",
   example:"A: にほんまでなんじかんかかりますか？\nB: じゅうにじかんぐらいです。",
   exampleSrc:"A: How many hours does it take to Japan?\nB: About twelve hours.",
   funFact:"時間 means both 'time' (abstract) and 'hour' (duration counter). いちじかん = one hour of duration. いちじ = one o'clock (point in time). This distinction confuses many learners. Duration (how long) vs point (what time) is the key difference."},

  {type:"teach", trg:"どのくらい", src:"how long? / how much?", pos:"pron", gender:null,
   note:"General question for duration or quantity. Also written どのぐらい.\nUsed for time, distance, amount.",
   example:"A: えきまでどのくらいかかりますか？\nB: あるいてじゅっぷんぐらいです。",
   exampleSrc:"A: How long does it take to the station?\nB: About ten minutes on foot.",
   funFact:"どのくらい is incredibly versatile. It asks about time (how long?), distance (how far?), quantity (how much?), and even degree (to what extent?). The casual form どれくらい is also common. Both are essential for daily life in Japan."},

  {type:"teach", trg:"かかる", src:"to take (time/money)", pos:"verb", gender:null,
   note:"Group 1 verb. Used for time duration and costs.\nにじかんかかる = it takes 2 hours.",
   example:"A: しごとからうちまでどのくらいかかりますか？\nB: いちじかんぐらいかかります。",
   exampleSrc:"A: How long does it take from work to home?\nB: It takes about one hour.",
   funFact:"かかる works for both time and money: さんじかんかかる (takes 3 hours), せんえんかかる (costs 1,000 yen). It is one of those verbs you cannot live without in Japan. Every traveler's first question uses it."},

  {type:"teach", trg:"ぐらい", src:"about / approximately", pos:"part", gender:null,
   note:"Added after numbers for approximation. Also written くらい.\nごふんぐらい = about 5 minutes.",
   example:"A: なんにちぐらいいますか？\nB: いっしゅうかんぐらいです。",
   exampleSrc:"A: About how many days will you stay?\nB: About one week.",
   funFact:"ぐらい and くらい are interchangeable. Some speakers prefer one over the other, but there is no meaning difference. Adding ぐらい to any number makes it approximate, softening the precision. Japanese speakers use approximations frequently in conversation."},

  {type:"mc", q:"にじかん means:", opts:["2 o'clock","2 hours (duration)","2 minutes","2 days"], ans:"2 hours (duration)",
   hint:"じかん is the d... counter for h..., not a clock time."},

  {type:"teach", trg:"いっしゅうかん", src:"one week", pos:"num", gender:null,
   note:"いっ (one, doubled consonant) + しゅうかん (week counter).\nKanji: 一週間. にしゅうかん = 2 weeks.",
   example:"A: いっしゅうかんになんかいうんどうしますか？\nB: さんかいぐらいです。",
   exampleSrc:"A: How many times a week do you exercise?\nB: About three times.",
   funFact:"週間 (shuukan) is the counter for weeks. いっしゅうかん has a doubled consonant (geminate) before しゅう. The pattern continues: にしゅうかん (2 weeks), さんしゅうかん (3 weeks). Japanese duration counters always come after the number."},

  {type:"teach", trg:"いつも", src:"always", pos:"adv", gender:null,
   note:"Frequency adverb. Placed before the verb.\nNo particle needed.",
   example:"A: いつもなにをのみますか？\nB: いつもコーヒーをのみます。",
   exampleSrc:"A: What do you always drink?\nB: I always drink coffee.",
   funFact:"いつも sits at the top of the frequency scale in Japanese: いつも (always) > よく (often) > ときどき (sometimes) > たまに (rarely) > ぜんぜん...ない (never). These adverbs need no particle and come before the verb."},

  {type:"teach", trg:"よく", src:"often / well", pos:"adv", gender:null,
   note:"Dual meaning: frequency (often) and quality (well/skillfully).\nContext makes the meaning clear.",
   example:"A: よくえいがをみますか？\nB: はい、よくみます。",
   exampleSrc:"A: Do you often watch movies?\nB: Yes, I often do.",
   funFact:"よく has a useful double meaning. よくたべる can mean 'eat often' or 'eat well/heartily.' よくできました means 'well done!' (quality). よくわかりません means 'I do not understand well.' Listen for context to know which meaning applies."},

  {type:"teach", trg:"ときどき", src:"sometimes", pos:"adv", gender:null,
   note:"Mid-frequency adverb. Written 時々 in kanji.\nNo particle needed before the verb.",
   example:"A: ときどきにほんりょうりをつくりますか？\nB: はい、ときどきつくります。",
   exampleSrc:"A: Do you sometimes cook Japanese food?\nB: Yes, I sometimes do.",
   funFact:"時々 uses the kanji repetition mark 々, which means 'repeat the previous kanji.' So 時々 = 時時 (time time = sometimes). This mark appears in many words: 人々 (hitobito, people), 色々 (iroiro, various), 日々 (hibi, days/daily)."},

  {type:"fb", s:"えきまで{1}かかりますか？\n(How long does it take to the station?)", a:"どのくらい", opts:["どのくらい","なんじ","いくら","どこ"], sSrc:"How long does it take to the station?",
   hint:"The question phrase for asking about duration or amount."},

  {type:"teach", trg:"たまに", src:"rarely / once in a while", pos:"adv", gender:null,
   note:"Low-frequency adverb. Less often than ときどき.\nUsed with positive verbs.",
   example:"A: たまにがいしょくしますか？\nB: はい、たまにします。",
   exampleSrc:"A: Do you eat out once in a while?\nB: Yes, occasionally.",
   funFact:"たまに sits between ときどき (sometimes) and ぜんぜん (never) on the frequency scale. It suggests something you do, but not regularly. A common phrase is たまにはいいでしょう (once in a while is fine, right?), used to justify a treat or indulgence."},

  {type:"teach", trg:"あまり", src:"not very much / not often", pos:"adv", gender:null,
   note:"ALWAYS with negative verb. あまり...ません = do not much/often.\nContrast with ぜんぜん (not at all).",
   example:"A: よくうんどうしますか？\nB: あまりしません。",
   exampleSrc:"A: Do you exercise often?\nB: Not very much.",
   funFact:"あまり must pair with a negative verb. あまりたべません (do not eat much). Saying あまりたべます would be incorrect. It softens the negative: あまり (not very) is gentler than ぜんぜん (not at all). Japanese speakers often prefer the softer version."},

  {type:"teach", trg:"げつようび", src:"Monday", pos:"noun", gender:null,
   note:"First day of the Japanese work week. げつ = moon.\nKanji: 月曜日. Each day uses a celestial body.",
   example:"A: げつようびにかいぎがあります。\nB: なんじからですか？",
   exampleSrc:"A: There is a meeting on Monday.\nB: From what time?",
   funFact:"Japanese weekdays follow celestial bodies like many European languages: 月 (moon/Monday), 火 (fire/Mars/Tuesday), 水 (water/Mercury/Wednesday), 木 (wood/Jupiter/Thursday), 金 (gold/Venus/Friday), 土 (earth/Saturn/Saturday), 日 (sun/Sunday)."},

  {type:"teach", trg:"にちようび", src:"Sunday", pos:"noun", gender:null,
   note:"Day of rest. にち = sun/day.\nKanji: 日曜日. The 'sun day.'",
   example:"A: にちようびになにをしますか？\nB: かぞくとこうえんにいきます。",
   exampleSrc:"A: What do you do on Sunday?\nB: I go to the park with my family.",
   funFact:"Sunday is the 'sun day' in Japanese too (日 = sun). Japanese workers traditionally get Sunday off, though many service industry jobs do not. The phrase にちようだいく (Sunday carpenter) describes someone who does hobby woodworking on their day off."},

  {type:"mc", q:"あまり is used with:", opts:["positive verbs only","negative verbs only","any verb","no verbs"], ans:"negative verbs only",
   hint:"This frequency word always requires a n... verb ending to complete its meaning."},

  {type:"match", pairs:[{trg:"いつも",src:"always"},{trg:"よく",src:"often"},{trg:"ときどき",src:"sometimes"},{trg:"たまに",src:"rarely"}]},

  {type:"match", pairs:[{trg:"どのくらい",src:"how long?"},{trg:"かかる",src:"to take (time)"},{trg:"ぐらい",src:"about"},{trg:"いっしゅうかん",src:"one week"}]},

  {type:"fb", s:"{1}にかいぎがあります。\n(There is a meeting on Monday.)", a:"げつようび", opts:["げつようび","にちようび","きんようび","すいようび"], sSrc:"There is a meeting on Monday.",
   hint:"The weekday named after the moon, starting the work week."},

  {type:"mc", q:"ときどき means:", opts:["always","never","sometimes","rarely"], ans:"sometimes",
   hint:"This mid-frequency adverb uses the repetition mark 々 with the kanji for 'time.'"},

  {type:"fb", s:"よくえいがを{1}ますか？\n(Do you often watch movies?)", a:"み", opts:["み","いき","たべ","かき"], sSrc:"Do you often watch movies?",
   hint:"The polite stem of the verb for seeing or watching."},
]};
export default BATCH2_L_1;
