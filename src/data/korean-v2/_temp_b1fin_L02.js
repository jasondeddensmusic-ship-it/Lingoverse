// Korean B1 Final Gap - Lesson 2: Time & History
const LESSON_2 = {
  id:"kov2_b1fin_l2", title:"시간과 역사", icon:"⏳", xp:15, board:true,
  steps:[
    {type:"intro", title:"Time & History",
     desc:"Master vocabulary for talking about the past, present, and the passage of time. These words are essential for narrating events and understanding Korean news.",
     goals:["Learn 20 time-related and historical terms","Understand temporal markers like formerly and nowadays","Express duration and historical periods"]},

    {type:"teach", trg:"역사가", src:"historian", pos:"noun", gender:null,
     note:"Sino-Korean (歷史家). 가 (家) means specialist or expert.",
     example:"A: 유명한 역사가를 알아요?\nB: 네, 이이화 선생님이 유명한 역사가예요.",
     exampleSrc:"A: Do you know a famous historian?\nB: Yes, Teacher Lee I-hwa is a famous historian.",
     funFact:"The suffix 가 (家) marks expertise: 작가 (writer), 음악가 (musician), 역사가 (historian). It implies mastery of a craft."},

    {type:"teach", trg:"역사적", src:"historic, historical", pos:"noun", gender:null,
     note:"Sino-Korean (歷史的). The 적 (的) suffix makes adjective-like nouns.",
     example:"A: 이곳은 역사적으로 중요한 곳이에요?\nB: 네, 역사적 의미가 큰 장소예요.",
     exampleSrc:"A: Is this a historically important place?\nB: Yes, it's a place of great historical significance.",
     funFact:"The suffix 적 (的) works like English '-ic' or '-al.' 과학적 (scientific), 역사적 (historical), 개인적 (personal)."},

    {type:"teach", trg:"예전", src:"the old days, formerly", pos:"noun", gender:null,
     note:"Used to refer to a past time period. Often with 에 particle.",
     example:"A: 예전에 여기 살았어요?\nB: 네, 예전에는 이 동네에 살았어요.",
     exampleSrc:"A: Did you live here before?\nB: Yes, I used to live in this neighborhood.",
     funFact:"예전 refers to a time that feels personally distant. It is softer than 옛날 (once upon a time) and more conversational."},

    {type:"teach", trg:"옛", src:"old, ancient, former", pos:"adj", gender:null,
     note:"Native Korean determiner. Placed before nouns: 옛날, 옛 친구.",
     example:"A: 이건 옛 건물이에요?\nB: 네, 조선 시대의 옛 건물이에요.",
     exampleSrc:"A: Is this an old building?\nB: Yes, it's an old building from the Joseon era.",
     funFact:"옛날 옛적에 means 'once upon a time' and starts every Korean fairy tale. Children hear this phrase from a very young age."},

    {type:"mc",
     q:"'예전'과 비슷한 의미의 단어는?",
     opts:["옛","현대","이후","오늘날"],
     ans:"옛",
     hint:"Both words refer to something from the past. One is a determiner placed before nouns."},

    {type:"teach", trg:"오늘날", src:"nowadays, today (in general)", pos:"noun", gender:null,
     note:"Compound: 오늘 (today) + 날 (day). Means 'in present times.'",
     example:"A: 오늘날 젊은이들은 어때요?\nB: 오늘날에는 많이 달라졌어요.",
     exampleSrc:"A: How are young people nowadays?\nB: Things have changed a lot nowadays.",
     funFact:"Unlike 오늘 (today, this specific day), 오늘날 means 'the current era' or 'these days.' It is used in essays and speeches."},

    {type:"teach", trg:"오래전", src:"a long time ago", pos:"noun", gender:null,
     note:"Compound: 오래 (long) + 전 (before). Fixed time expression.",
     example:"A: 한국에 언제 왔어요?\nB: 오래전에 왔어요. 10년도 넘었어요.",
     exampleSrc:"A: When did you come to Korea?\nB: I came a long time ago. It's been over 10 years.",
     funFact:"Koreans often say 오래전 일이에요 (it happened long ago) to downplay past events or signal that something is no longer relevant."},

    {type:"teach", trg:"오랜", src:"long (duration), long-standing", pos:"adj", gender:null,
     note:"Determiner form of 오래. Used before nouns: 오랜 친구, 오랜 시간.",
     example:"A: 오랜 친구를 만났어요?\nB: 네, 오랜만에 만나서 반가웠어요.",
     exampleSrc:"A: Did you meet an old friend?\nB: Yes, it was nice meeting after a long time.",
     funFact:"오랜만이에요 (long time no see) is one of the most common Korean greetings. It literally means 'it has been a long while.'"},

    {type:"teach", trg:"오랫동안", src:"for a long time", pos:"noun", gender:null,
     note:"Compound: 오래 + 동안 (during). Duration marker.",
     example:"A: 오랫동안 기다렸어요?\nB: 네, 한 시간이나 기다렸어요.",
     exampleSrc:"A: Did you wait for a long time?\nB: Yes, I waited for a whole hour.",
     funFact:"동안 is the key duration word in Korean. It attaches to time periods: 3년 동안 (for 3 years), 여름 동안 (during summer)."},

    {type:"fb",
     s:"{1} 한국의 기술이 크게 발전했어요.",
     a:["오늘날"],
     opts:["오늘날","오래전","예전","이전"],
     hint:"This word means 'nowadays' or 'in the current era,' not a specific past time.",
     sSrc:"{1}, Korea's technology has developed greatly."},

    {type:"teach", trg:"이전", src:"before, prior, previous", pos:"noun", gender:null,
     note:"Sino-Korean (以前). Formal way to say 'before a point in time.'",
     example:"A: 이전에 이 일을 해 본 적 있어요?\nB: 네, 이전 직장에서 했어요.",
     exampleSrc:"A: Have you done this work before?\nB: Yes, I did it at my previous job.",
     funFact:"이전 is the formal counterpart of 전에. News and official documents almost always use 이전 instead of the casual 전에."},

    {type:"teach", trg:"이후", src:"after, since, from now on", pos:"noun", gender:null,
     note:"Sino-Korean (以後). Opposite of 이전. After a point in time.",
     example:"A: 졸업 이후에 뭘 할 거예요?\nB: 이후에는 취업 준비를 할 거예요.",
     exampleSrc:"A: What will you do after graduation?\nB: After that, I'll prepare for job hunting.",
     funFact:"이후 is often paired with specific events: 전쟁 이후 (after the war), 결혼 이후 (after marriage). It sets a clear timeline."},

    {type:"teach", trg:"이날", src:"this day, that day", pos:"noun", gender:null,
     note:"Compound: 이 (this) + 날 (day). Used in narratives for emphasis.",
     example:"A: 이날은 특별한 날이에요?\nB: 네, 이날이 우리 결혼기념일이에요.",
     exampleSrc:"A: Is this day special?\nB: Yes, this day is our wedding anniversary.",
     funFact:"In Korean storytelling, 이날 is used to highlight a pivotal moment: 이날부터 모든 것이 달라졌다 (from this day, everything changed)."},

    {type:"teach", trg:"이튿날", src:"the next day, the following day", pos:"noun", gender:null,
     note:"Native Korean. 이튿 = the following. Used in written narratives.",
     example:"A: 파티 다음 날 어땠어요?\nB: 이튿날 너무 피곤했어요.",
     exampleSrc:"A: How was the day after the party?\nB: I was so tired the next day.",
     funFact:"이튿날 is slightly literary. In casual speech, Koreans prefer 다음 날 (next day), but 이튿날 appears often in novels and news."},

    {type:"teach", trg:"이틀", src:"two days", pos:"noun", gender:null,
     note:"Native Korean counter for two days. Part of: 하루, 이틀, 사흘, 나흘...",
     example:"A: 이틀 동안 뭐 했어요?\nB: 이틀 동안 부산에 다녀왔어요.",
     exampleSrc:"A: What did you do for two days?\nB: I went to Busan for two days.",
     funFact:"Korean has native day counters: 하루 (1 day), 이틀 (2), 사흘 (3), 나흘 (4). After that, most people switch to Sino-Korean numbers."},

    {type:"match", pairs:[
      {trg:"이전", src:"before/prior"},
      {trg:"이후", src:"after/since"},
      {trg:"이튿날", src:"the next day"},
      {trg:"이틀", src:"two days"},
      {trg:"오랫동안", src:"for a long time"}
    ]},

    {type:"teach", trg:"지난해", src:"last year", pos:"noun", gender:null,
     note:"Compound: 지난 (past) + 해 (year). Common in news reports.",
     example:"A: 지난해에 비해 매출이 올랐어요?\nB: 네, 지난해보다 20% 올랐어요.",
     exampleSrc:"A: Did sales increase compared to last year?\nB: Yes, they went up 20% from last year.",
     funFact:"News anchors always say 지난해 rather than the casual 작년. Both mean the same thing, but 지난해 sounds more formal."},

    {type:"teach", trg:"한동안", src:"for a while, for some time", pos:"noun", gender:null,
     note:"Compound: 한 (a) + 동안 (while). Vague but significant duration.",
     example:"A: 한동안 연락이 없었죠?\nB: 네, 한동안 바빠서 연락을 못 했어요.",
     exampleSrc:"A: You were out of touch for a while, right?\nB: Yes, I was busy for a while so I couldn't reach out.",
     funFact:"한동안 implies a noticeable absence or gap. It is longer than 잠시 (a moment) but shorter than 오랫동안 (a long time)."},

    {type:"teach", trg:"한참", src:"quite a while, a good while", pos:"noun", gender:null,
     note:"Native Korean. Implies the duration was longer than expected.",
     example:"A: 오래 기다렸어요?\nB: 한참을 기다렸어요. 버스가 안 왔어요.",
     exampleSrc:"A: Did you wait long?\nB: I waited quite a while. The bus didn't come.",
     funFact:"한참 carries a tone of mild complaint or surprise. It suggests the waiting felt longer than it should have been."},

    {type:"teach", trg:"해마다", src:"every year, annually", pos:"adv", gender:null,
     note:"Compound: 해 (year) + 마다 (every). Regular yearly occurrence.",
     example:"A: 해마다 이 축제를 해요?\nB: 네, 해마다 10월에 열려요.",
     exampleSrc:"A: Do they hold this festival every year?\nB: Yes, it's held every year in October.",
     funFact:"마다 is a versatile particle: 날마다 (every day), 해마다 (every year), 사람마다 (every person). It turns any noun into 'every X.'"},

    {type:"teach", trg:"현대", src:"modern times, contemporary era", pos:"noun", gender:null,
     note:"Sino-Korean (現代). Also the name of Korea's biggest conglomerate.",
     example:"A: 현대 사회의 문제가 뭐예요?\nB: 스트레스가 현대인의 가장 큰 문제예요.",
     exampleSrc:"A: What is the problem of modern society?\nB: Stress is the biggest problem for modern people.",
     funFact:"Hyundai (현대) the car company literally means 'modernity.' It was named to symbolize Korea's drive toward a modern future."},

    {type:"teach", trg:"현재", src:"the present, currently", pos:"noun", gender:null,
     note:"Sino-Korean (現在). Formal word for 'now.' Used in reports and news.",
     example:"A: 현재 상황이 어때요?\nB: 현재로서는 괜찮아요.",
     exampleSrc:"A: What's the current situation?\nB: For now, it's okay.",
     funFact:"현재 is the formal version of 지금 (now). News always uses 현재: 현재 시각 (current time), 현재 날씨 (current weather)."},

    {type:"fb",
     s:"이 행사는 {1} 봄에 열려요.",
     a:["해마다"],
     opts:["해마다","한참","현재","이후"],
     hint:"This event happens on a yearly basis, repeating each spring.",
     sSrc:"This event is held {1} in spring."},

    {type:"teach", trg:"원래", src:"originally, by nature", pos:"adv", gender:null,
     note:"Sino-Korean (原來). Refers to the original state of something.",
     example:"A: 원래 계획이 뭐였어요?\nB: 원래는 서울에 가려고 했어요.",
     exampleSrc:"A: What was the original plan?\nB: Originally, we were going to go to Seoul.",
     funFact:"Koreans use 원래 to explain personality too: 저는 원래 조용한 사람이에요 (I'm quiet by nature). It means 'that is just how it is.'"},

    {type:"mc",
     q:"뉴스에서 '지금'을 공식적으로 표현하면?",
     opts:["이전","현재","원래","한참"],
     ans:"현재",
     hint:"This Sino-Korean word is the formal way to say 'now' in broadcasts and reports."}
  ]
};
export default LESSON_2;
