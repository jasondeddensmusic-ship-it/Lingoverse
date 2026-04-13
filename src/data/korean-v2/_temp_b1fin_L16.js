// Korean B1 Final Gap - Lesson 16: Progress & Achievement
const LESSON_16 = {
  id:"kov2_b1fin_l16", title:"진행과 성취", icon:"🏆", xp:15, board:true,
  steps:[
    {type:"intro", title:"Progress & Achievement",
     desc:"Learn verbs for processes, achievements, and life changes. These words describe how things progress, get accomplished, and how you move through life.",
     goals:["Learn 20 verbs about progress, achievement, and movement","Describe processes, victories, and life transitions","Express accomplishment and overcoming challenges"]},

    {type:"teach", trg:"진행되다", src:"to proceed, to be in progress", pos:"verb", gender:null,
     note:"Sino-Korean (進行). Passive: a process moves forward.",
     example:"A: 프로젝트가 잘 진행되고 있어요?\nB: 네, 순조롭게 진행되고 있어요.",
     exampleSrc:"A: Is the project proceeding well?\nB: Yes, it's proceeding smoothly.",
     funFact:"진행 중 (in progress) is displayed on screens, signs, and apps. When something is live or ongoing, 진행 중 signals active status."},

    {type:"teach", trg:"진행하다", src:"to proceed with, to conduct, to carry out", pos:"verb", gender:null,
     note:"Active form. Someone actively carries something forward.",
     example:"A: 회의를 진행할까요?\nB: 네, 시작합시다.",
     exampleSrc:"A: Shall we proceed with the meeting?\nB: Yes, let's begin.",
     funFact:"MC (masters of ceremony) are called 진행자 (facilitator) in Korean. They 진행 events, TV shows, and ceremonies."},

    {type:"teach", trg:"진출", src:"advance, entry into (a field/market)", pos:"noun", gender:null,
     note:"Sino-Korean (進出). 진 (進) = advance, 출 (出) = go out.",
     example:"A: 해외 시장에 진출했어요?\nB: 네, 작년에 일본에 진출했어요.",
     exampleSrc:"A: Did you enter the overseas market?\nB: Yes, we advanced into Japan last year.",
     funFact:"해외 진출 (overseas expansion) is a constant Korean business goal. K-pop groups celebrate 해외 진출 as a career milestone."},

    {type:"teach", trg:"일으키다", src:"to cause, to start, to raise up", pos:"verb", gender:null,
     note:"Causative of 일어나다. Making something happen or rise.",
     example:"A: 그 사건이 큰 논란을 일으켰어요.\nB: 네, 사회적으로 큰 문제가 됐어요.",
     exampleSrc:"A: That incident caused a big controversy.\nB: Yes, it became a major social issue.",
     funFact:"일으키다 works for both positive and negative: 혁명을 일으키다 (start a revolution), 문제를 일으키다 (cause a problem), 바람을 일으키다 (create a trend)."},

    {type:"teach", trg:"이루다", src:"to achieve, to accomplish, to form", pos:"verb", gender:null,
     note:"Native Korean verb. Bringing a goal or dream to fulfillment.",
     example:"A: 꿈을 이루었어요?\nB: 아직이요, 하지만 열심히 하고 있어요.",
     exampleSrc:"A: Did you achieve your dream?\nB: Not yet, but I'm working hard.",
     funFact:"꿈을 이루다 (achieve a dream) is one of Korean's most motivational phrases. Graduation speeches, songs, and slogans all use it."},

    {type:"mc",
     q:"꿈을 실현하는 것을 한국어로 뭐라고 해요?",
     opts:["이루다","일으키다","진행하다","진출"],
     ans:"이루다",
     hint:"This native Korean verb means to bring a goal or dream to successful completion."},

    {type:"teach", trg:"이루어지다", src:"to be achieved, to come true, to be formed", pos:"verb", gender:null,
     note:"Passive of 이루다. Something gets accomplished or comes together.",
     example:"A: 소원이 이루어졌어요?\nB: 네, 드디어 소원이 이루어졌어요!",
     exampleSrc:"A: Did your wish come true?\nB: Yes, my wish finally came true!",
     funFact:"소원이 이루어지다 (wish comes true) is said when blowing out birthday candles or visiting temples. It is Korea's version of 'make a wish.'"},

    {type:"teach", trg:"이뤄지다", src:"to be achieved, to come true (contracted)", pos:"verb", gender:null,
     note:"Contracted form of 이루어지다. Same meaning, shorter form.",
     example:"A: 협상이 이뤄졌어요?\nB: 네, 드디어 합의가 이뤄졌어요.",
     exampleSrc:"A: Has the negotiation been achieved?\nB: Yes, an agreement has finally been reached.",
     funFact:"이뤄지다 is the contracted spoken form of 이루어지다. In writing, both are acceptable. In speech, 이뤄지다 is more natural."},

    {type:"teach", trg:"이르다", src:"to reach, to arrive at; to be early", pos:"verb", gender:null,
     note:"Native Korean verb. Two meanings: to reach a point, or to be early.",
     example:"A: 합의에 이르렀어요?\nB: 네, 마침내 결론에 이르렀어요.",
     exampleSrc:"A: Did you reach an agreement?\nB: Yes, we finally reached a conclusion.",
     funFact:"이르다 is formal and literary. In the sense of 'early': 이른 아침 (early morning). In the sense of 'reach': 결론에 이르다 (reach a conclusion)."},

    {type:"teach", trg:"잘되다", src:"to go well, to turn out well", pos:"verb", gender:null,
     note:"Compound: 잘 (well) + 되다 (become). Things working out positively.",
     example:"A: 시험 잘됐어요?\nB: 네, 다행히 잘됐어요!",
     exampleSrc:"A: Did the exam go well?\nB: Yes, fortunately it went well!",
     funFact:"잘되다 is the optimistic counterpart of 잘못되다 (go wrong). Koreans wish each other 잘 되길 바라 (I hope it goes well for you)."},

    {type:"fb",
     s:"소원이 {1}!",
     a:["이루어졌어요"],
     opts:["이루어졌어요","일으켰어요","진행됐어요","잘됐어요"],
     hint:"This passive verb means a wish or dream has come true on its own.",
     sSrc:"The wish has {1}!"},

    {type:"teach", trg:"해결", src:"solution, resolution", pos:"noun", gender:null,
     note:"Sino-Korean (解決). 해 (解) = untie, 결 (決) = decide.",
     example:"A: 문제 해결 방법을 찾았어요?\nB: 아직 해결책을 찾고 있어요.",
     exampleSrc:"A: Did you find a way to solve the problem?\nB: I'm still looking for a solution.",
     funFact:"해결 literally means 'untying a knot and deciding.' Problems are seen as tangled knots that need careful unraveling in Korean thinking."},

    {type:"teach", trg:"해결하다", src:"to solve, to resolve", pos:"verb", gender:null,
     note:"Verb form of 해결. Actively solving problems.",
     example:"A: 이 문제를 어떻게 해결해요?\nB: 같이 의논해서 해결합시다.",
     exampleSrc:"A: How do we solve this problem?\nB: Let's discuss together and resolve it.",
     funFact:"문제 해결 능력 (problem-solving ability) is one of the most valued skills in Korean workplaces and on resumes."},

    {type:"teach", trg:"이동", src:"movement, transfer, relocation", pos:"noun", gender:null,
     note:"Sino-Korean (移動). 이 (移) = move, 동 (動) = motion.",
     example:"A: 이동 시간이 얼마나 걸려요?\nB: 약 30분 걸려요.",
     exampleSrc:"A: How long does the travel time take?\nB: It takes about 30 minutes.",
     funFact:"이동 수단 (means of transportation) includes 버스, 지하철, 택시. Korea's efficient 대중교통 (public transit) makes 이동 easy."},

    {type:"teach", trg:"이해", src:"understanding, comprehension", pos:"noun", gender:null,
     note:"Sino-Korean (理解). 이 (理) = reason, 해 (解) = untie/solve.",
     example:"A: 이해가 돼요?\nB: 네, 이제 이해했어요.",
     exampleSrc:"A: Do you understand?\nB: Yes, I understand now.",
     funFact:"이해 is both intellectual understanding and empathetic understanding. 이해심이 깊다 (deep understanding) describes an empathetic person."},

    {type:"teach", trg:"활동", src:"activity, action", pos:"noun", gender:null,
     note:"Sino-Korean (活動). 활 (活) = live/active, 동 (動) = move.",
     example:"A: 동아리 활동을 하고 있어요?\nB: 네, 봉사 활동을 하고 있어요.",
     exampleSrc:"A: Are you doing club activities?\nB: Yes, I'm doing volunteer activities.",
     funFact:"활동 covers a wide range: 경제 활동 (economic activity), 사회 활동 (social activity), SNS 활동 (social media activity). Korea tracks celebrity 활동 closely."},

    {type:"teach", trg:"활동하다", src:"to be active, to work (in a field)", pos:"verb", gender:null,
     note:"Verb form of 활동. Being actively engaged in something.",
     example:"A: 어떤 분야에서 활동하고 있어요?\nB: 음악 분야에서 활동하고 있어요.",
     exampleSrc:"A: What field are you active in?\nB: I'm active in the music field.",
     funFact:"K-pop idols' careers are described as 활동: 그룹 활동 (group activities), 솔로 활동 (solo activities). When they rest, it is called 휴식기 (rest period)."},

    {type:"match", pairs:[
      {trg:"해결하다", src:"to solve"},
      {trg:"이동", src:"movement/transfer"},
      {trg:"이해", src:"understanding"},
      {trg:"활동", src:"activity"},
      {trg:"진출", src:"advance/entry"}
    ]},

    {type:"teach", trg:"행동", src:"behavior, action, conduct", pos:"noun", gender:null,
     note:"Sino-Korean (行動). 행 (行) = go/do, 동 (動) = move.",
     example:"A: 그런 행동은 좋지 않아요.\nB: 알겠어요, 조심할게요.",
     exampleSrc:"A: That kind of behavior is not good.\nB: I understand, I'll be careful.",
     funFact:"행동 is judged socially in Korea. 예의 바른 행동 (polite behavior) is praised, while 무례한 행동 (rude behavior) is strongly criticized."},

    {type:"teach", trg:"행동하다", src:"to act, to behave", pos:"verb", gender:null,
     note:"Verb form of 행동. How one conducts oneself.",
     example:"A: 생각만 하지 말고 행동하세요!\nB: 맞아요, 이제 행동으로 옮길게요.",
     exampleSrc:"A: Don't just think, take action!\nB: Right, I'll put it into action now.",
     funFact:"행동으로 옮기다 (put into action) is a powerful motivational phrase. Korean culture values 행동 (action) over just 말 (words)."},

    {type:"teach", trg:"지나가다", src:"to pass by, to go past", pos:"verb", gender:null,
     note:"Compound: 지나 (passing) + 가다 (go). Movement past a point.",
     example:"A: 버스가 지나갔어요!\nB: 다음 버스를 기다려요.",
     exampleSrc:"A: The bus passed by!\nB: Let's wait for the next bus.",
     funFact:"시간이 지나가다 (time passes by) is a common reflective phrase. 지나가는 사람 (passerby) describes someone walking past."},

    {type:"teach", trg:"지나다", src:"to pass, to elapse, to go beyond", pos:"verb", gender:null,
     note:"Native Korean verb. Time or events passing.",
     example:"A: 시간이 빨리 지났어요.\nB: 네, 벌써 1년이 지났어요.",
     exampleSrc:"A: Time passed quickly.\nB: Yes, a whole year has already passed.",
     funFact:"지나다 is more about elapsed time, while 지나가다 emphasizes physical passing. 겨울이 지나다 (winter passes) vs 사람이 지나가다 (person passes by)."},

    {type:"teach", trg:"이기다", src:"to win, to beat, to overcome", pos:"verb", gender:null,
     note:"Native Korean verb. Defeating an opponent or overcoming difficulty.",
     example:"A: 어느 팀이 이겼어요?\nB: 한국 팀이 3대 1로 이겼어요!",
     exampleSrc:"A: Which team won?\nB: The Korean team won 3 to 1!",
     funFact:"이기다 works for both sports (경기에서 이기다) and life challenges (유혹을 이기다 = overcome temptation). Winning is highly celebrated in Korean culture."},

    {type:"mc",
     q:"'생각만 하지 말고 ___하세요!'에 알맞은 말은?",
     opts:["이해","행동","활동","해결"],
     ans:"행동",
     hint:"This word means taking action, doing something rather than just thinking."}
  ]
};
export default LESSON_16;
