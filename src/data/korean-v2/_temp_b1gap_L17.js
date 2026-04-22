// Korean B1 Gap - Lesson 17: Time, Sequence, and Flow
const LESSON_17 = {
  id:"kov2_b1gap_l17", title:"시간과 흐름", icon:"⏳", xp:15, board:true,
  steps:[
    {type:"intro", title:"Time, Sequence, and Flow",
     desc:"Learn vocabulary for talking about time frames, sequences, and how events unfold. These words connect your sentences and help you tell stories in proper order.",
     goals:["Master 20 words for time and sequence","Express duration, frequency, and order","Use flow connectors for natural storytelling"]},

    // --- Teach 1-5 ---
    {type:"teach", trg:"과거", src:"the past", pos:"noun", gender:null,
     note:"Sino-Korean noun. Used for personal history and grammar (past tense).",
     example:"A: 과거에 무슨 일을 했어요?\nB: 과거에는 선생님이었어요.\nA: 아, 그랬군요!",
     exampleSrc:"A: What did you do in the past?\nB: In the past, I was a teacher.\nA: Oh, I see!",
     funFact:"From hanja 過 (pass) + 去 (go). Literally 'passed and gone.' In grammar class, 과거 시제 means 'past tense.'"},

    {type:"teach", trg:"년대", src:"decade, era", pos:"noun", gender:null,
     note:"Bound noun. Always attached to a number: 90년대 (the 90s), 2000년대.",
     example:"A: 이 노래 언제 나온 거예요?\nB: 90년대에 나왔어요.\nA: 오래된 노래네요!",
     exampleSrc:"A: When did this song come out?\nB: It came out in the 90s.\nA: It's an old song!",
     funFact:"Korean decades work just like English: 80년대 = the 80s, 2010년대 = the 2010s. Korean pop culture often references 90년대 nostalgia."},

    {type:"teach", trg:"년도", src:"the year (specific)", pos:"noun", gender:null,
     note:"Bound noun for specific years. 2024년도 means 'the year 2024.'",
     example:"A: 졸업 년도가 어떻게 돼요?\nB: 2020년도에 졸업했어요.\nA: 코로나 때였네요.",
     exampleSrc:"A: What year did you graduate?\nB: I graduated in the year 2020.\nA: That was during COVID.",
     funFact:"While 년 alone means 'year,' 년도 specifies a particular year. Government documents always use 년도: 2024년도 예산 (the 2024 budget)."},

    {type:"teach", trg:"간", src:"interval, period, between", pos:"noun", gender:null,
     note:"Bound noun attached to time words: 3일간 (for 3 days), 서울과 부산 간.",
     example:"A: 서울과 부산 간 거리가 얼마예요?\nB: 약 400킬로미터예요.\nA: KTX로 2시간 반이면 가요.",
     exampleSrc:"A: What's the distance between Seoul and Busan?\nB: About 400 kilometers.\nA: It takes 2.5 hours by KTX.",
     funFact:"From hanja 間 (between/interval). The same character appears in 시간 (time), 공간 (space), and 인간 (human, literally 'between people')."},

    {type:"teach", trg:"금방", src:"just now, in a moment", pos:"adv", gender:null,
     note:"Can mean 'a moment ago' or 'very soon.' Context determines direction.",
     example:"A: 밥 언제 돼요?\nB: 금방 될 거예요. 5분만 기다려요.\nA: 배고파서 빨리 먹고 싶어요.",
     exampleSrc:"A: When will the food be ready?\nB: It'll be ready in a moment. Just wait 5 minutes.\nA: I'm hungry and want to eat soon.",
     funFact:"From hanja 今 (now) + 方 (just). The dual meaning (just past AND just ahead) confuses learners, but Koreans switch effortlessly based on context."},

    // --- Quiz batch 1 ---
    {type:"mc",
     q:"'90년대 음악을 좋아해요'에서 '년대'는 무슨 뜻이에요?",
     opts:["그 시대","그 달","그 날","그 해"],
     ans:"그 시대",
     hint:"This bound noun refers to a ten-year period, like the nineties or eighties."},

    {type:"fb",
     s:"음식이 {1} 될 거예요. 조금만 기다려요.",
     a:["금방"],
     opts:["금방","내내","늘","겨우"],
     hint:"This adverb means 'very soon' or 'in just a moment.' The food is almost ready.",
     sSrc:"The food will be ready {1}. Just wait a little."},

    // --- Teach 6-10 ---
    {type:"teach", trg:"당장", src:"right away, immediately", pos:"noun", gender:null,
     note:"Stronger urgency than 금방 or 바로. Often used in demands or urgent situations.",
     example:"A: 이 문제를 당장 해결해야 해요.\nB: 알겠어요, 바로 시작할게요.\nA: 빨리 부탁해요.",
     exampleSrc:"A: We need to solve this problem right away.\nB: Understood, I'll start immediately.\nA: Please hurry.",
     funFact:"From hanja 當 (face/encounter) + 場 (place). Literally 'at this very spot,' conveying zero delay. 당장 is what bosses say when they mean NOW."},

    {type:"teach", trg:"그다음", src:"the next, after that", pos:"noun", gender:null,
     note:"Sequence connector. 그 (that) + 다음 (next). Links events in order.",
     example:"A: 먼저 뭘 해요?\nB: 먼저 씻고, 그다음에 밥 먹어요.\nA: 그다음에는요?",
     exampleSrc:"A: What do you do first?\nB: First I wash up, then I eat.\nA: And after that?",
     funFact:"Korean storytelling follows a strict sequence: 먼저 (first), 그다음 (next), 그리고 (and then), 마지막으로 (lastly). These connectors are tested on TOPIK."},

    {type:"teach", trg:"그대로", src:"as it is, unchanged", pos:"adv", gender:null,
     note:"그 (that) + 대로 (way/manner). Means keeping the current state.",
     example:"A: 이 보고서 수정할까요?\nB: 아니요, 그대로 두세요.\nA: 네, 알겠습니다.",
     exampleSrc:"A: Should I revise this report?\nB: No, leave it as it is.\nA: Understood.",
     funFact:"The particle 대로 means 'according to' or 'in the manner of.' 말한 대로 (as you said), 약속대로 (as promised), 생각대로 (as I thought)."},

    {type:"teach", trg:"나머지", src:"the rest, remainder", pos:"noun", gender:null,
     note:"From 나머지 (what remains). Used for leftover portions or remaining items.",
     example:"A: 이 일은 제가 할게요.\nB: 그러면 나머지는 제가 할게요.\nA: 같이 하면 금방 끝나겠네요.",
     exampleSrc:"A: I'll do this part.\nB: Then I'll do the rest.\nA: If we do it together, we'll finish quickly.",
     funFact:"In math class, 나머지 means 'remainder' in division: 7 divided by 3 is 2 remainder 1. Same word, same concept of 'what's left over.'"},

    {type:"teach", trg:"내내", src:"throughout, the entire time", pos:"adv", gender:null,
     note:"Emphasizes continuous duration. 하루 내내 = all day long.",
     example:"A: 주말에 뭐 했어요?\nB: 하루 내내 잠만 잤어요.\nA: 피곤했나 봐요.",
     exampleSrc:"A: What did you do on the weekend?\nB: I slept the entire day.\nA: You must have been tired.",
     funFact:"Can combine with any time word: 일년 내내 (all year), 밤 내내 (all night), 수업 내내 (throughout class). It stresses unbroken duration."},

    // --- Quiz batch 2 ---
    {type:"match", pairs:[
      {trg:"당장", src:"right away"},
      {trg:"그대로", src:"as it is"},
      {trg:"나머지", src:"the rest"},
      {trg:"내내", src:"throughout"}
    ]},

    {type:"mc",
     q:"'먼저 숙제를 하고, 그다음에 놀아요'에서 '그다음'의 역할은?",
     opts:["반대를 나타내요","순서를 나타내요","정도를 나타내요","이유를 말해요"],
     ans:"순서를 나타내요",
     hint:"This word connects two actions in chronological order. First one thing, then another."},

    // --- Teach 11-15 ---
    {type:"teach", trg:"마침", src:"just then, fortunately", pos:"adv", gender:null,
     note:"Happy coincidence. Something happened at just the right moment.",
     example:"A: 우산 없이 나왔는데 마침 비가 그쳤어요.\nB: 운이 좋았네요!\nA: 네, 정말 다행이에요.",
     exampleSrc:"A: I went out without an umbrella, but the rain stopped just then.\nB: You were lucky!\nA: Yes, what a relief.",
     funFact:"마침 carries a positive, 'what a happy coincidence' feeling. Compare with 마침내 (at last, finally) which emphasizes a long wait ending."},

    {type:"teach", trg:"따로", src:"separately, apart", pos:"adv", gender:null,
     note:"Indicates separation or doing things individually instead of together.",
     example:"A: 같이 갈까요?\nB: 아니요, 따로 가요.\nA: 그러면 거기서 만나요.",
     exampleSrc:"A: Shall we go together?\nB: No, let's go separately.\nA: Then let's meet there.",
     funFact:"따로따로 is the reduplicated form meaning 'each one separately.' Korean loves reduplication for emphasis: 가끔가끔, 하나하나, 따로따로."},

    {type:"teach", trg:"또다시", src:"once again, yet again", pos:"adv", gender:null,
     note:"또 (again) + 다시 (again). Double emphasis on repetition. Slight frustration possible.",
     example:"A: 또다시 같은 실수를 했어요.\nB: 이번에는 꼭 고치세요.\nA: 네, 노력할게요.",
     exampleSrc:"A: I made the same mistake once again.\nB: This time, definitely fix it.\nA: Yes, I'll try.",
     funFact:"Combining two 'again' words intensifies the feeling of repetition. It often implies the speaker is slightly frustrated that something keeps happening."},

    {type:"teach", trg:"늘", src:"always, all the time", pos:"adv", gender:null,
     note:"Native Korean word. More casual and warm than 항상.",
     example:"A: 왜 늘 웃고 있어요?\nB: 웃으면 기분이 좋아지니까요.\nA: 좋은 생각이에요.",
     exampleSrc:"A: Why are you always smiling?\nB: Because smiling makes me feel better.\nA: That's a nice way of thinking.",
     funFact:"While 항상 (always) is Sino-Korean and more formal, 늘 is pure Korean and feels warmer. Saying 늘 건강하세요 (always be healthy) sounds heartfelt."},

    {type:"teach", trg:"그냥", src:"just, simply, without reason", pos:"adv", gender:null,
     note:"Extremely common in spoken Korean. Can mean 'just because' or 'no particular reason.'",
     example:"A: 왜 전화했어?\nB: 그냥. 목소리가 듣고 싶었어.\nA: 고마워, 나도 반가워.",
     exampleSrc:"A: Why did you call?\nB: Just because. I wanted to hear your voice.\nA: Thanks, I'm glad too.",
     funFact:"그냥 is arguably the most-used filler in casual Korean. When asked 'why?' and you have no real reason, 그냥 is the perfect one-word answer."},

    // --- Quiz batch 3 ---
    {type:"fb",
     s:"우산을 가져왔는데 {1} 비가 그쳤어요.",
     a:["마침"],
     opts:["마침","따로","또다시","당장"],
     hint:"A happy coincidence adverb. The rain stopped at just the right moment.",
     sSrc:"I brought an umbrella, but {1} the rain stopped."},

    {type:"mc",
     q:"'그냥'을 가장 자연스럽게 사용한 문장은?",
     opts:["그냥 내일은 월요일이에요.","그냥 서울은 한국의 수도예요.","왜 샀어? 그냥 사고 싶었어.","그냥 열심히 공부해서 합격했어요."],
     ans:"왜 샀어? 그냥 사고 싶었어.",
     hint:"This word works best when there is no particular reason. Which answer implies a casual, reason-free action?"},

    // --- Teach 16-20 ---
    {type:"teach", trg:"그만", src:"that's enough, stop", pos:"adv", gender:null,
     note:"Used to signal stopping. 그만하다 = to stop doing something.",
     example:"A: 그만 먹어. 배 아플 거야.\nB: 알겠어, 그만 먹을게.\nA: 건강이 중요해.",
     exampleSrc:"A: Stop eating. You'll get a stomachache.\nB: Okay, I'll stop.\nA: Health is important.",
     funFact:"그만두다 means 'to quit' (a job or habit). 그만 by itself can end any action: 그만 울어 (stop crying), 그만 싸워 (stop fighting)."},

    {type:"teach", trg:"마음대로", src:"as one wishes, freely", pos:"adv", gender:null,
     note:"마음 (heart/mind) + 대로 (according to). Do as your heart dictates.",
     example:"A: 뭘 먹을까요?\nB: 마음대로 골라요.\nA: 그러면 피자 먹을래요!",
     exampleSrc:"A: What shall we eat?\nB: Choose as you wish.\nA: Then I want pizza!",
     funFact:"Can sound generous ('do as you like!') or frustrated ('fine, do whatever you want!'). Tone and context determine whether it is permission or resignation."},

    {type:"teach", trg:"근데", src:"but, by the way", pos:"adv", gender:null,
     note:"Casual contraction of 그런데. Extremely common topic-shifter in speech.",
     example:"A: 오늘 날씨 좋다!\nB: 근데 내일은 비 온대.\nA: 아, 그래?",
     exampleSrc:"A: The weather is nice today!\nB: But they say it'll rain tomorrow.\nA: Oh, really?",
     funFact:"그런데 > 근데 is one of Korean's most common contractions. In texting, it gets even shorter: 근데 > ㄱㄷ. Understanding casual contractions is key for TOPIK listening."},

    {type:"teach", trg:"내지", src:"or, to (range)", pos:"adv", gender:null,
     note:"Formal connector for ranges. 3내지 5 means '3 to 5.' Also means 'or.'",
     example:"A: 몇 명 정도 올까요?\nB: 20명 내지 30명 정도요.\nA: 그러면 큰 방을 예약할게요.",
     exampleSrc:"A: About how many people will come?\nB: About 20 to 30 people.\nA: Then I'll reserve a big room.",
     funFact:"From hanja 乃 (then) + 至 (reach). Used in formal writing and news. In conversation, Koreans prefer 에서 ... 까지 for ranges."},

    {type:"teach", trg:"겨우", src:"barely, only just", pos:"adv", gender:null,
     note:"Implies difficulty or a very small amount. The result was just barely achieved.",
     example:"A: 시험에 붙었어요?\nB: 네, 겨우 붙었어요.\nA: 그래도 합격이에요!",
     exampleSrc:"A: Did you pass the exam?\nB: Yes, I barely passed.\nA: Still, a pass is a pass!",
     funFact:"겨우 always implies effort or hardship. 겨우 도착했다 means 'I finally arrived (after much trouble).' It makes the listener appreciate how hard it was."},

    // --- Quiz batch 4 ---
    {type:"fb",
     s:"시험에 {1} 합격했어요. 1점 차이였어요.",
     a:["겨우"],
     opts:["겨우","늘","당장","마침"],
     hint:"An adverb for narrowly achieving something after difficulty. Just barely made it.",
     sSrc:"I {1} passed the exam. It was a 1-point difference."},

    {type:"match", pairs:[
      {trg:"그만", src:"stop, that's enough"},
      {trg:"근데", src:"but, by the way"},
      {trg:"마음대로", src:"as one wishes"},
      {trg:"내지", src:"or, to (range)"}
    ]}
  ]
};
export default LESSON_17;
