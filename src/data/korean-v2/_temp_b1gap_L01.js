// Korean B1 Gap - Lesson 1: Decisions, Causes, and Logical Connectors
const LESSON_1 = {
  id:"kov2_b1gap_l1", title:"결정과 이유", icon:"🔗", xp:15, board:true,
  steps:[
    {type:"intro", title:"Decisions, Causes, and Logical Connectors",
     desc:"Learn vocabulary for reasoning, making decisions, and connecting ideas logically. These words are essential for expressing cause and effect in Korean.",
     goals:["Master 20 words for decisions, reasons, and logical flow","Use connectors like therefore, moreover, and finally","Express purpose and possibility in Korean"]},

    // --- Teach 1-4 ---
    {type:"teach", trg:"결정", src:"decision", pos:"noun", gender:null,
     note:"Sino-Korean noun. Often paired with 하다 to make the verb 'to decide.'",
     example:"A: 결정을 내렸어요?\nB: 아직 고민 중이에요.\nA: 빨리 결정해야 해요.",
     exampleSrc:"A: Have you made a decision?\nB: I'm still thinking about it.\nA: You need to decide quickly.",
     funFact:"From hanja: 決 (decide) + 定 (fix/settle). The same 決 appears in 해결 (solution)."},

    {type:"teach", trg:"결정되다", src:"to be decided", pos:"verb", gender:null,
     note:"Passive form of 결정하다. The decision 'gets made' by itself.",
     example:"A: 회의 날짜가 결정됐어요?\nB: 네, 다음 주 월요일로 결정됐어요.\nA: 알겠습니다.",
     exampleSrc:"A: Has the meeting date been decided?\nB: Yes, it's been decided as next Monday.\nA: Understood.",
     funFact:"Korean passive verbs with -되다 are extremely common in formal/business contexts. They sound more objective than active forms."},

    {type:"teach", trg:"결정하다", src:"to decide", pos:"verb", gender:null,
     note:"Active verb. Subject makes the decision deliberately.",
     example:"A: 뭘 먹을지 결정했어?\nB: 응, 비빔밥 먹기로 결정했어.\nA: 좋은 선택이야!",
     exampleSrc:"A: Did you decide what to eat?\nB: Yeah, I decided to eat bibimbap.\nA: Good choice!",
     funFact:"The pattern V-기로 결정하다 means 'to decide to do V.' It is one of the most tested grammar points on TOPIK II."},

    {type:"teach", trg:"결국", src:"in the end, after all", pos:"adv", gender:null,
     note:"Used when a long process leads to a final outcome.",
     example:"A: 그 프로젝트 어떻게 됐어요?\nB: 결국 취소됐어요.\nA: 아, 아쉽네요.",
     exampleSrc:"A: What happened with that project?\nB: It was canceled in the end.\nA: Oh, that's too bad.",
     funFact:"From hanja: 結 (tie/conclude) + 局 (situation/game). Literally 'the concluded situation,' meaning the final outcome."},

    // --- Quiz batch 1 ---
    {type:"mc",
     q:"'결정'의 반대말에 가장 가까운 것은?",
     opts:["결국","취소","목적","경우"],
     ans:"취소",
     hint:"Think about what undoes a decision. It means cancellation."},

    {type:"fb",
     s:"회의 시간이 오후 3시로 {1}.",
     a:["결정됐어요"],
     opts:["결정됐어요","결정했어요","결국이에요","경우예요"],
     hint:"The meeting time was decided by others, not by you. Use the passive form.",
     sSrc:"The meeting time has been {1} as 3 PM."},

    // --- Teach 5-8 ---
    {type:"teach", trg:"경우", src:"case, situation", pos:"noun", gender:null,
     note:"Used for hypothetical or specific situations. Common in formal speech.",
     example:"A: 비가 오는 경우에 어떻게 해요?\nB: 실내에서 행사를 해요.\nA: 그런 경우가 많아요?",
     exampleSrc:"A: What do we do in case it rains?\nB: We hold the event indoors.\nA: Does that case happen often?",
     funFact:"From hanja: 境 (boundary) + 遇 (encounter). Literally 'encountering a boundary,' meaning a particular set of circumstances."},

    {type:"teach", trg:"가능성", src:"possibility", pos:"noun", gender:null,
     note:"Abstract noun. Often used with 이/가 있다/없다 (there is/isn't possibility).",
     example:"A: 합격할 가능성이 있을까요?\nB: 충분히 가능성이 있어요.\nA: 정말요? 자신감이 생겨요.",
     exampleSrc:"A: Is there a possibility of passing?\nB: There's definitely a possibility.\nA: Really? I'm gaining confidence.",
     funFact:"From hanja: 可 (possible) + 能 (ability) + 性 (nature). The same 可能 appears in Chinese and Japanese with the same meaning."},

    {type:"teach", trg:"가능하다", src:"to be possible", pos:"adj", gender:null,
     note:"Descriptive verb (adjective). Used as 가능한 before nouns.",
     example:"A: 내일까지 끝내는 게 가능해요?\nB: 좀 힘들지만 가능할 것 같아요.\nA: 부탁드려요.",
     exampleSrc:"A: Is it possible to finish by tomorrow?\nB: It's a bit tough, but I think it's possible.\nA: I'm counting on you.",
     funFact:"The negative form 불가능하다 (impossible) uses the hanja prefix 不 (not). Same pattern: 불편하다, 불안하다."},

    {type:"teach", trg:"만약", src:"if, in case", pos:"adv", gender:null,
     note:"Formal conditional marker. Often starts sentences before -(으)면.",
     example:"A: 만약 시간이 있으면 같이 갈래요?\nB: 만약 비가 안 오면 갈게요.\nA: 좋아요, 연락해요.",
     exampleSrc:"A: If you have time, want to go together?\nB: If it doesn't rain, I'll go.\nA: Sounds good, let's keep in touch.",
     funFact:"From hanja: 萬 (ten thousand) + 若 (if/like). Literally 'among ten thousand possibilities,' emphasizing the hypothetical nature."},

    // --- Quiz batch 2 ---
    {type:"match", pairs:[
      {trg:"결정", src:"decision"},
      {trg:"경우", src:"case, situation"},
      {trg:"가능성", src:"possibility"},
      {trg:"만약", src:"if, in case"}
    ]},

    {type:"mc",
     q:"만약 내일 비가 오면 ___.",
     opts:["결정이에요","가능성이에요","집에서 쉴 거예요","경우가 됐어요"],
     ans:"집에서 쉴 거예요",
     hint:"After a conditional clause with 만약...오면, you need a natural result clause."},

    // --- Teach 9-12 ---
    {type:"teach", trg:"만일", src:"in case, if (formal)", pos:"adv", gender:null,
     note:"More formal than 만약. Common in written Korean and official speech.",
     example:"A: 만일 문제가 생기면 연락 주세요.\nB: 네, 알겠습니다.\nA: 만일을 대비해서 준비합시다.",
     exampleSrc:"A: In case a problem arises, please contact us.\nB: Yes, understood.\nA: Let's prepare just in case.",
     funFact:"From hanja: 萬 (ten thousand) + 一 (one). Literally 'one in ten thousand,' meaning an unlikely but considered possibility."},

    {type:"teach", trg:"까닭", src:"reason, cause", pos:"noun", gender:null,
     note:"Native Korean word for 'reason.' Less formal than 이유.",
     example:"A: 무슨 까닭으로 늦었어요?\nB: 교통이 막혀서요.\nA: 아, 그런 까닭이었군요.",
     exampleSrc:"A: For what reason were you late?\nB: Because of traffic.\nA: Ah, so that was the reason.",
     funFact:"One of the few native Korean abstract nouns that survived Sino-Korean dominance. Most abstract vocabulary in Korean comes from Chinese characters."},

    {type:"teach", trg:"그러므로", src:"therefore", pos:"adv", gender:null,
     note:"Formal written connector. Links cause to conclusion.",
     example:"A: 비용이 너무 높아요. 그러므로 다른 방법을 찾아야 해요.\nB: 맞아요, 그러므로 회의가 필요해요.",
     exampleSrc:"A: The cost is too high. Therefore, we need to find another method.\nB: Right, therefore a meeting is necessary.",
     funFact:"Built from 그러 (like that) + 므로 (because/since). The casual equivalent is 그래서. Written vs. spoken registers differ sharply in Korean."},

    {type:"teach", trg:"또한", src:"also, moreover", pos:"adv", gender:null,
     note:"Formal additive connector. Adds information in written/formal speech.",
     example:"A: 이 제품은 품질이 좋아요. 또한 가격도 합리적이에요.\nB: 또한 디자인도 예쁘네요.",
     exampleSrc:"A: This product has good quality. Moreover, the price is reasonable.\nB: Also, the design is pretty.",
     funFact:"From hanja: 又 (again) + 한 (one/also). The casual version is just 또. Written Korean stacks these connectors frequently in essays."},

    // --- Quiz batch 3 ---
    {type:"fb",
     s:"비가 많이 왔습니다. {1} 행사가 취소됐습니다.",
     a:["그러므로"],
     opts:["그러므로","또한","결국","만약"],
     hint:"You need a formal cause-to-effect connector meaning 'therefore.'",
     sSrc:"It rained heavily. {1} the event was canceled."},

    {type:"mc",
     q:"'까닭'과 비슷한 뜻의 단어는?",
     opts:["결정","목적","뜻","이유"],
     ans:"이유",
     hint:"Both words mean 'reason,' but one is native Korean and the other is Sino-Korean."},

    // --- Teach 13-16 ---
    {type:"teach", trg:"게다가", src:"besides, moreover", pos:"adv", gender:null,
     note:"Adds extra information, often escalating. Used in both speech and writing.",
     example:"A: 오늘 너무 바빠요.\nB: 게다가 내일 시험도 있어요.\nA: 정말 힘들겠다.",
     exampleSrc:"A: I'm so busy today.\nB: Besides, there's an exam tomorrow too.\nA: That must be really tough.",
     funFact:"Literally 'on top of that' from the verb 거(것) + 에다가. It always adds something that makes the situation more intense, not less."},

    {type:"teach", trg:"더구나", src:"furthermore, what's more", pos:"adv", gender:null,
     note:"Stronger than 게다가. Emphasizes that the added info is surprising or extreme.",
     example:"A: 길이 막혀서 2시간 걸렸어요.\nB: 더구나 주차할 곳도 없었어요.\nA: 정말 최악이었겠네요.",
     exampleSrc:"A: Traffic was so bad it took 2 hours.\nB: Furthermore, there was nowhere to park either.\nA: That must have been the worst.",
     funFact:"From 더 (more) + 구나 (exclamatory ending). It carries an emotional 'can you believe it?' nuance that 게다가 lacks."},

    {type:"teach", trg:"또는", src:"or", pos:"adv", gender:null,
     note:"Formal 'or' for listing alternatives. Written style. Spoken: 아니면.",
     example:"A: 커피 또는 차를 드릴까요?\nB: 커피로 주세요.\nA: 설탕 또는 우유를 넣을까요?",
     exampleSrc:"A: Shall I get you coffee or tea?\nB: Coffee, please.\nA: Shall I add sugar or milk?",
     funFact:"From 또 (again/also) + 는 (topic marker). Literally 'as for also,' which evolved into 'or' as an alternative marker. The casual form 아니면 literally means 'if not.'"},

    {type:"teach", trg:"마찬가지", src:"same, likewise", pos:"noun", gender:null,
     note:"Used to express that two things share the same quality or situation.",
     example:"A: 저는 한국어를 공부해요.\nB: 저도 마찬가지예요.\nA: 마찬가지로 어렵죠?",
     exampleSrc:"A: I study Korean.\nB: Same here (likewise).\nA: It's difficult likewise, right?",
     funFact:"Pure Korean compound: 마찬 (the same kind) + 가지 (branch/type). One of the rare native Korean words that outcompetes Sino-Korean alternatives in everyday speech."},

    // --- Quiz batch 4 ---
    {type:"match", pairs:[
      {trg:"게다가", src:"besides, moreover"},
      {trg:"더구나", src:"furthermore"},
      {trg:"또는", src:"or"},
      {trg:"마찬가지", src:"same, likewise"}
    ]},

    {type:"fb",
     s:"오늘은 비가 와요. {1} 바람도 많이 불어요.",
     a:["게다가"],
     opts:["게다가","또는","마찬가지","결국"],
     hint:"You are adding a second bad weather condition on top of the first.",
     sSrc:"It's raining today. {1}, it's very windy."},

    // --- Teach 17-20 ---
    {type:"teach", trg:"마침내", src:"finally, at last", pos:"adv", gender:null,
     note:"Positive nuance. Used when a long-awaited result arrives.",
     example:"A: 3년 동안 준비했어요.\nB: 마침내 합격했어요!\nA: 축하해요! 정말 기뻤겠다.",
     exampleSrc:"A: I prepared for 3 years.\nB: I finally passed!\nA: Congratulations! You must have been so happy.",
     funFact:"Pure Korean: 마침 (just at that time) + 내 (within). Contrast with 끝내 which can be neutral or negative. 마침내 always sounds triumphant."},

    {type:"teach", trg:"끝내", src:"in the end, ultimately", pos:"adv", gender:null,
     note:"Can be positive or negative. From 끝 (end) + 내다 (to put out).",
     example:"A: 그 일을 끝내 해냈어요?\nB: 네, 끝내 완성했어요.\nA: 포기하지 않아서 다행이에요.",
     exampleSrc:"A: Did you finally get it done?\nB: Yes, I ultimately completed it.\nA: I'm glad you didn't give up.",
     funFact:"끝내다 as a verb means 'to finish/complete,' but 끝내 as an adverb means 'in the end.' Context determines meaning. Both come from 끝 (end)."},

    {type:"teach", trg:"뜻", src:"meaning, intention", pos:"noun", gender:null,
     note:"Native Korean. Used for both 'meaning of a word' and 'one's intention.'",
     example:"A: 이 단어의 뜻이 뭐예요?\nB: '행복'이라는 뜻이에요.\nA: 좋은 뜻이네요!",
     exampleSrc:"A: What's the meaning of this word?\nB: It means 'happiness.'\nA: That's a nice meaning!",
     funFact:"Native Korean word that predates Chinese influence. Korean has surprisingly few native abstract nouns; 뜻, 꿈 (dream), and 힘 (strength) are among the survivors."},

    {type:"teach", trg:"목적", src:"purpose, objective", pos:"noun", gender:null,
     note:"Sino-Korean. Often in the pattern 목적으로 (for the purpose of).",
     example:"A: 한국에 온 목적이 뭐예요?\nB: 한국어를 배우려는 목적으로 왔어요.\nA: 좋은 목적이에요!",
     exampleSrc:"A: What's your purpose for coming to Korea?\nB: I came for the purpose of learning Korean.\nA: That's a good purpose!",
     funFact:"From hanja: 目 (eye) + 的 (target). Literally 'what the eye aims at.' The same 的 appears in 목표 (goal/target)."},

    // --- Quiz batch 5 ---
    {type:"mc",
     q:"3년 동안 노력한 후에 _____ 성공했다.",
     opts:["또는","만약","마침내","게다가"],
     ans:"마침내",
     hint:"After years of effort, the positive outcome finally arrived. Which word conveys triumph?"},

    {type:"fb",
     s:"이 단어의 {1}을 알아요?",
     a:["뜻"],
     opts:["뜻","목적","결정","경우"],
     hint:"You are asking about the meaning or definition of a word, not its purpose.",
     sSrc:"Do you know the {1} of this word?"},

    {type:"mc",
     q:"'목적'과 '뜻'의 차이점으로 가장 맞는 것은?",
     opts:["목적은 의미, 뜻은 결과","목적은 목표, 뜻은 의미","둘 다 같은 뜻이다","목적은 이유, 뜻은 경우"],
     ans:"목적은 목표, 뜻은 의미",
     hint:"One relates to goals and objectives, the other to definitions and meanings."}
  ]
};
export default LESSON_1;
