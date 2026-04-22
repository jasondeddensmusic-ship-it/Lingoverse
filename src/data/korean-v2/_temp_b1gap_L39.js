// Korean B1 Gap - Lesson 39: Measures, Numbers and Time
const LESSON_39 = {
  id:"kov2_b1gap_l39", title:"단위, 숫자, 시간", icon:"⏱️", xp:15, board:true,
  steps:[
    {type:"intro", title:"Measures, Numbers and Time",
     desc:"Learn the vocabulary for measurements, bound nouns that create counting patterns, and abstract time concepts. These words are essential for precision in Korean.",
     goals:["Learn bound nouns for counting and measuring","Master time-related abstract nouns","Use measurement vocabulary naturally"]},

    // --- Teach 1-5 ---
    {type:"teach", trg:"그램", src:"gram", pos:"noun", gender:null,
     note:"Loanword from English/French. Used with Sino-Korean numbers: 100그램 = 100 grams.",
     example:"A: 고기 500그램 주세요.\nB: 네, 여기 있습니다.",
     exampleSrc:"A: Give me 500 grams of meat, please.\nB: Yes, here you are.",
     funFact:"Korean uses metric exclusively. Loanword units like 그램, 킬로, 미터 take Sino-Korean numbers (일, 이, 삼), while native counters like 개, 명, 마리 take native numbers (하나, 둘, 셋)."},

    {type:"teach", trg:"밀리미터", src:"millimeter", pos:"noun", gender:null,
     note:"Loanword. Abbreviated as mm. 밀리 prefix for 1/1000. Used in weather, engineering.",
     example:"A: 오늘 비가 얼마나 왔어요?\nB: 30밀리미터 정도 왔대요.",
     exampleSrc:"A: How much rain fell today?\nB: They say about 30 millimeters.",
     funFact:"Korean weather reports measure rainfall in millimeters, not inches. 100밀리미터 of rain is considered heavy. Koreans are very metric-literate compared to countries that still use imperial."},

    {type:"teach", trg:"무렵", src:"around the time of, about (time)", pos:"noun", gender:null,
     note:"Bound noun. Always follows a modifier: 그 무렵 = around that time. Literary/formal.",
     example:"A: 대학교에 다닐 무렵에 뭘 했어요?\nB: 아르바이트를 많이 했어요.",
     exampleSrc:"A: What did you do around the time you were in college?\nB: I worked a lot of part-time jobs.",
     funFact:"무렵 is more literary than 즈음 or 때. It appears in novels and formal writing: 해질 무렵 (around sunset) sounds poetic. In casual speech, 때 is far more common."},

    {type:"teach", trg:"번째", src:"ordinal suffix (-th, -st, -nd)", pos:"noun", gender:null,
     note:"Bound noun attached to native Korean numbers. 첫 번째 = first, 두 번째 = second.",
     example:"A: 몇 번째 방문이에요?\nB: 세 번째예요. 여기 자주 와요.",
     exampleSrc:"A: Which visit number is this?\nB: The third. I come here often.",
     funFact:"번째 turns cardinal numbers into ordinals: 하나 > 한 번째 (though 첫 번째 is preferred for 'first'). English adds -th/-st/-nd, Korean simply adds 번째. Clean and regular."},

    {type:"teach", trg:"식", src:"style, manner, way of doing", pos:"noun", gender:null,
     note:"Sino-Korean (式). Bound noun. 한국식 = Korean-style. 자기만의 식 = one's own way.",
     example:"A: 한국식으로 먹어 볼까요?\nB: 좋아요. 어떻게 먹어요?",
     exampleSrc:"A: Shall we try eating Korean-style?\nB: Sure. How do we eat?",
     funFact:"From hanja 式 (style/formula). Incredibly productive: 미국식 (American-style), 일본식 (Japanese-style), 뷔페식 (buffet-style), 서양식 (Western-style). Also means 'ceremony': 결혼식 (wedding ceremony)."},

    // --- Quiz batch 1 ---
    {type:"mc",
     q:"한국에서 비의 양을 재는 단위는?",
     opts:["밀리미터","킬로그램","센티미터","그램"],
     ans:"밀리미터",
     hint:"Rainfall is measured in a very small unit of length, not weight. Think about the metric unit that is 1/1000 of a meter."},

    {type:"fb",
     s:"이번이 {1} 번째 한국 여행이에요.",
     a:["세"],
     opts:["세","삼","서","셋"],
     hint:"Ordinal expressions with 번째 use native Korean numbers, not Sino-Korean. The native number for 'three' before a counter.",
     sSrc:"This is my {1} trip to Korea."},

    // --- Teach 6-10 ---
    {type:"teach", trg:"뿐", src:"only, nothing but", pos:"noun", gender:null,
     note:"Bound noun. N + 뿐이다 = only N. V-ㄹ 뿐이다 = can only V. Restrictive emphasis.",
     example:"A: 남은 게 이것뿐이에요?\nB: 네, 이것뿐이에요. 죄송해요.",
     exampleSrc:"A: Is this all that's left?\nB: Yes, this is all. I'm sorry.",
     funFact:"뿐 is a powerful restrictor: 그것뿐만 아니라 means 'not only that but also,' which ironically expands rather than restricts. This pattern (뿐만 아니라) is a TOPIK staple."},

    {type:"teach", trg:"숫자", src:"number, figure, digit", pos:"noun", gender:null,
     note:"Sino-Korean (數字). 숫자를 세다 = to count numbers. 숫자가 크다 = the number is large.",
     example:"A: 이 숫자가 맞아요?\nB: 다시 확인해 볼게요.",
     exampleSrc:"A: Is this number correct?\nB: Let me check again.",
     funFact:"From hanja 數 (number) + 字 (character). Korean has number superstitions: 4 (사) sounds like 死 (death) so some buildings skip the 4th floor. 7 (칠) is considered lucky."},

    {type:"teach", trg:"양쪽", src:"both sides, both directions", pos:"noun", gender:null,
     note:"Sino-Korean. 양 (both, 兩) + 쪽 (side/direction). 양쪽 다 = both sides equally.",
     example:"A: 양쪽을 다 확인했어요?\nB: 네, 양쪽 다 괜찮아요.",
     exampleSrc:"A: Did you check both sides?\nB: Yes, both sides are fine.",
     funFact:"양쪽 is neutral and balanced: 양쪽 의견 (both sides' opinions), 양쪽 귀 (both ears). The 양 prefix appears in 양손 (both hands) and 양다리 (both legs, also slang for two-timing)."},

    {type:"teach", trg:"순간", src:"moment, instant", pos:"noun", gender:null,
     note:"Sino-Korean (瞬間). 그 순간 = that moment. 순간적으로 = momentarily.",
     example:"A: 그 순간 뭘 느꼈어요?\nB: 순간 시간이 멈춘 것 같았어요.",
     exampleSrc:"A: What did you feel at that moment?\nB: For a moment, it felt like time stopped.",
     funFact:"From hanja 瞬 (blink) + 間 (between). A 순간 is literally 'between blinks.' K-drama lovers know the phrase 그 순간 (at that moment), which marks dramatic turning points."},

    {type:"teach", trg:"시절", src:"period, days, era (of one's life)", pos:"noun", gender:null,
     note:"Sino-Korean (時節). Personal life period. 학생 시절 = student days. 어린 시절 = childhood.",
     example:"A: 학생 시절이 그리워요?\nB: 네, 그때가 가장 행복했어요.",
     exampleSrc:"A: Do you miss your student days?\nB: Yes, those were my happiest times.",
     funFact:"시절 is deeply nostalgic. It always refers to a past era of someone's life. 그 시절 (those days) carries emotional weight. 시대 is for historical eras, while 시절 is personal."},

    // --- Quiz batch 2 ---
    {type:"match", pairs:[
      {trg:"뿐", src:"only, nothing but"},
      {trg:"숫자", src:"number, figure"},
      {trg:"순간", src:"moment, instant"},
      {trg:"시절", src:"period, days (of life)"}
    ]},

    {type:"fb",
     s:"남은 시간이 이것{1}이에요.",
     a:["뿐"],
     opts:["뿐","만","밖에","식"],
     hint:"A bound noun that restricts meaning to 'only this and nothing more.' It attaches directly after a noun.",
     sSrc:"The remaining time is only this{1}."},

    // --- Teach 11-15 ---
    {type:"teach", trg:"방향", src:"direction, way, orientation", pos:"noun", gender:null,
     note:"Sino-Korean (方向). 방향을 바꾸다 = change direction. 방향 감각 = sense of direction.",
     example:"A: 이 방향이 맞아요?\nB: 아니요, 반대 방향이에요.",
     exampleSrc:"A: Is this the right direction?\nB: No, it's the opposite direction.",
     funFact:"From hanja 方 (direction/place) + 向 (face toward). 방향치 is slang for someone with zero sense of direction (치 = suffix for 'person afflicted by'). Very common self-deprecating term."},

    {type:"teach", trg:"부분", src:"part, portion, section", pos:"noun", gender:null,
     note:"Sino-Korean (部分). 대부분 = most/the majority. 일부분 = a portion.",
     example:"A: 어느 부분이 어려웠어요?\nB: 마지막 부분이 제일 어려웠어요.",
     exampleSrc:"A: Which part was difficult?\nB: The last part was the hardest.",
     funFact:"From hanja 部 (section) + 分 (divide). 대부분 (大部分, the greater part) is one of the most common words in Korean: 대부분의 사람들 = most people. Appears in every TOPIK level."},

    {type:"teach", trg:"문제점", src:"problem, issue, problematic point", pos:"noun", gender:null,
     note:"Sino-Korean (問題點). 문제 (problem) + 점 (point). More specific than just 문제.",
     example:"A: 이 계획의 문제점이 뭐예요?\nB: 예산이 부족한 점이에요.",
     exampleSrc:"A: What's the problem with this plan?\nB: The point about insufficient budget.",
     funFact:"문제 is a general 'problem,' while 문제점 specifies a particular problematic aspect. In presentations and reports, 문제점 및 해결 방안 (problems and solutions) is a standard heading."},

    {type:"teach", trg:"미래", src:"future", pos:"noun", gender:null,
     note:"Sino-Korean (未來). 미래에 = in the future. Opposite of 과거 (past).",
     example:"A: 미래에 뭐가 되고 싶어요?\nB: 미래에 좋은 선생님이 되고 싶어요.",
     exampleSrc:"A: What do you want to be in the future?\nB: I want to be a good teacher in the future.",
     funFact:"From hanja 未 (not yet) + 來 (come). The future literally 'has not yet come.' 미래 세대 (future generation) and 미래 지향적 (future-oriented) are common compounds in Korean media."},

    {type:"teach", trg:"사물", src:"things, objects, material things", pos:"noun", gender:null,
     note:"Sino-Korean (事物). Abstract/formal word for objects. 사물함 = locker. 사물놀이 = traditional percussion.",
     example:"A: 주변 사물을 잘 관찰하세요.\nB: 네, 자세히 보겠습니다.",
     exampleSrc:"A: Observe the surrounding objects carefully.\nB: Yes, I'll look closely.",
     funFact:"사물놀이 (SamulNori) is Korea's iconic four-instrument percussion performance, but 사물 here means 'four things' (四物), not the usual 事物. The four instruments represent rain, clouds, wind, and thunder."},

    // --- Quiz batch 3 ---
    {type:"mc",
     q:"'대부분'에서 '부분'의 뜻은?",
     opts:["전체","일부, 파트","문제","미래"],
     ans:"일부, 파트",
     hint:"대 means 'big/great,' and this word refers to a section or portion of something. Together they mean 'the majority.'"},

    {type:"fb",
     s:"{1}에 어떤 직업을 갖고 싶어요?",
     a:["미래"],
     opts:["미래","시절","순간","무렵"],
     hint:"A Sino-Korean noun meaning the time that has 'not yet come.' The opposite of 과거 (past).",
     sSrc:"What kind of job do you want to have in the {1}?"},

    // --- Teach 16-20 ---
    {type:"teach", trg:"술집", src:"bar, pub, drinking establishment", pos:"noun", gender:null,
     note:"술 (alcohol) + 집 (house/place). 술집에 가다 = go to a bar.",
     example:"A: 오늘 저녁에 술집 갈까요?\nB: 좋아요. 어디로 갈까요?",
     exampleSrc:"A: Shall we go to a bar this evening?\nB: Sure. Where shall we go?",
     funFact:"Korean drinking culture is central to social life. 술집 is the general term, while 호프 (from German Hof) means beer hall, 포차 is a casual tent bar, and 바 is an upscale lounge bar."},

    {type:"teach", trg:"스스로", src:"by oneself, on one's own", pos:"adv", gender:null,
     note:"Native Korean adverb. Emphasizes self-reliance. 스스로 결정하다 = decide for oneself.",
     example:"A: 숙제를 스스로 했어요?\nB: 네, 아무 도움 없이 스스로 했어요.",
     exampleSrc:"A: Did you do the homework by yourself?\nB: Yes, I did it by myself without any help.",
     funFact:"스스로 vs. 혼자: 혼자 means 'alone' (physical state), while 스스로 means 'by one's own initiative/effort.' You can be 혼자 but not acting 스스로 (e.g., following instructions while alone)."},

    {type:"teach", trg:"부처", src:"Buddha, Buddhist deity", pos:"noun", gender:null,
     note:"From Sanskrit 'Buddha' via Chinese 佛. 부처님 (honorific) is the standard respectful form.",
     example:"A: 이 절에 부처님 상이 크네요.\nB: 네, 500년 된 불상이래요.",
     exampleSrc:"A: The Buddha statue at this temple is big.\nB: Yes, they say the statue is 500 years old.",
     funFact:"Korean Buddhism has a 1,700-year history. 부처님 오신 날 (Buddha's Birthday, lunar April 8th) is a national holiday with lantern festivals. Even non-Buddhists enjoy the celebrations."},

    {type:"teach", trg:"별", src:"star; special, particular (determiner)", pos:"noun", gender:null,
     note:"As noun: 밤하늘의 별 = stars in the night sky. As determiner: 별 문제 없다 = no particular problem.",
     example:"A: 별 일 없죠?\nB: 네, 별 일 없어요. 잘 지내요.",
     exampleSrc:"A: Nothing special going on, right?\nB: No, nothing special. I'm doing well.",
     funFact:"별 as a determiner (usually with 없다/아니다) is extremely common in greetings: 별일 없으시죠? means 'Everything okay?' It downplays significance. As a noun, 별 means star and appears in romantic poetry."},

    {type:"teach", trg:"어떡하다", src:"what to do (contraction of 어떻게 하다)", pos:"verb", gender:null,
     note:"Casual contraction. 어떡해! = What do I do! 어떡하지? = What should I do?",
     example:"A: 지갑을 잃어버렸어요. 어떡해요?\nB: 경찰에 신고하세요.",
     exampleSrc:"A: I lost my wallet. What do I do?\nB: Report it to the police.",
     funFact:"어떡해 is one of the most emotional Korean exclamations. K-drama fans hear it constantly during crisis moments. The full form 어떻게 하다 is more composed, while 어떡하다 sounds panicked and urgent."},

    // --- Quiz batch 4 ---
    {type:"match", pairs:[
      {trg:"술집", src:"bar, pub"},
      {trg:"스스로", src:"by oneself"},
      {trg:"별", src:"star; special"},
      {trg:"어떡하다", src:"what to do"}
    ]},

    {type:"mc",
     q:"'별일 없으시죠?'는 어떤 상황에서 쓰나요?",
     opts:["문제가 있을 때","우주에 대해 이야기할 때","안부를 물을 때","별자리를 볼 때"],
     ans:"안부를 물을 때",
     hint:"In this greeting, 별 means 'particular/special' (not 'star'). It is a way of casually checking in on someone."},

    {type:"fb",
     s:"숙제를 아무 도움 없이 {1} 했어요.",
     a:["스스로"],
     opts:["스스로","혼자","같이","서로"],
     hint:"An adverb emphasizing self-reliance and initiative, not just being physically alone. Think 'by one's own effort.'",
     sSrc:"I did the homework {1} without any help."}
  ]
};
export default LESSON_39;
