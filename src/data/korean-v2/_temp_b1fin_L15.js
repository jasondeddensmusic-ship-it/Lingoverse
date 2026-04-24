// Korean B1 Final Gap - Lesson 15: Decisions & Targeted Actions
const LESSON_15 = {
  id:"kov2_b1fin_l15", title:"결정과 행동", icon:"🎯", xp:15, board:true,
  steps:[
    {type:"intro", title:"Decisions & Targeted Actions",
     desc:"Learn action verbs for making decisions, demanding, permitting, enduring, and searching. These verbs power everyday Korean conversations about goals and choices.",
     goals:["Learn 20 action verbs for decisions and deliberate actions","Express demanding, permitting, and enduring","Use compound verbs with 찾아- for directed searching"]},

    {type:"teach", trg:"요구하다", src:"to demand, to require", pos:"verb", gender:null,
     note:"Sino-Korean (要求). 요 (要) = need, 구 (求) = seek.",
     example:"A: 직원들이 임금 인상을 요구하고 있어요.\nB: 노동조합에서 요구한 거예요?",
     exampleSrc:"A: The employees are demanding a wage increase.\nB: Did the labor union demand it?",
     funFact:"요구 사항 (requirements/demands) is common in both labor negotiations and software development. Same word, very different contexts."},

    {type:"teach", trg:"정하다", src:"to decide, to set, to determine", pos:"verb", gender:null,
     note:"Sino-Korean (定). Establishing something fixed: rules, dates, plans.",
     example:"A: 날짜를 정했어요?\nB: 네, 다음 주 토요일로 정했어요.",
     exampleSrc:"A: Did you set a date?\nB: Yes, we set it for next Saturday.",
     funFact:"정하다 implies making something definite. 규칙을 정하다 (set rules), 목표를 정하다 (set goals), 이름을 정하다 (choose a name)."},

    {type:"teach", trg:"정해지다", src:"to be decided, to be determined", pos:"verb", gender:null,
     note:"Passive of 정하다. Something gets decided without specifying who.",
     example:"A: 회의 장소가 정해졌어요?\nB: 아직 안 정해졌어요.",
     exampleSrc:"A: Has the meeting location been decided?\nB: It hasn't been decided yet.",
     funFact:"정해지다 is diplomatic: it avoids naming who decided. In Korean group culture, decisions often feel like they emerged collectively."},

    {type:"teach", trg:"적용하다", src:"to apply, to put into practice", pos:"verb", gender:null,
     note:"Sino-Korean (適用). Applying rules, methods, or technology.",
     example:"A: 새 규칙을 적용했어요?\nB: 네, 이번 달부터 적용했어요.",
     exampleSrc:"A: Did you apply the new rules?\nB: Yes, we applied them starting this month.",
     funFact:"적용 is used in tech (기술 적용), law (법 적용), and daily life (할인 적용 = discount applied). A versatile formal verb."},

    {type:"teach", trg:"포기하다", src:"to give up, to abandon", pos:"verb", gender:null,
     note:"Sino-Korean (抛棄). 포 (抛) = throw, 기 (棄) = abandon.",
     example:"A: 꿈을 포기하지 마세요.\nB: 네, 절대 포기 안 할게요.",
     exampleSrc:"A: Don't give up on your dreams.\nB: Okay, I will never give up.",
     funFact:"포기하지 마 (don't give up) is a rallying cry in Korean sports and life. The opposite philosophy is expressed in the slang 포기 = 포기가 빠르다 (quick to give up)."},

    {type:"fb",
     s:"어려워도 절대 {1} 마세요.",
     a:["포기하지"],
     opts:["포기하지","정하지","요구하지","적용하지"],
     hint:"This means to abandon or stop trying. The sentence says never do this.",
     sSrc:"Even if it's hard, never {1}."},

    {type:"teach", trg:"취하다", src:"to take, to adopt, to get drunk", pos:"verb", gender:null,
     note:"Sino-Korean (取/醉). Two meanings: take (取) or get drunk (醉).",
     example:"A: 어떤 조치를 취해야 해요?\nB: 빨리 대책을 취해야 해요.",
     exampleSrc:"A: What measures should we take?\nB: We need to take countermeasures quickly.",
     funFact:"조치를 취하다 (take measures) is formal. 술에 취하다 (get drunk) uses different hanja but the same pronunciation. Context is everything."},

    {type:"teach", trg:"허용하다", src:"to permit, to allow", pos:"verb", gender:null,
     note:"Sino-Korean (許容). 허 (許) = permit, 용 (容) = accept.",
     example:"A: 여기서 사진을 허용해요?\nB: 아니요, 사진은 안 돼요.",
     exampleSrc:"A: Do they permit photos here?\nB: No, photos are not allowed.",
     funFact:"허용 is the formal word for permission. Signs say 허용 or 금지 (prohibited). Less formal alternatives: 괜찮다, 해도 되다."},

    {type:"teach", trg:"참다", src:"to endure, to hold back, to bear", pos:"verb", gender:null,
     note:"Native Korean verb. Enduring pain, emotions, or urges.",
     example:"A: 아파도 참아야 해요?\nB: 많이 아프면 참지 말고 말하세요.",
     exampleSrc:"A: Should I endure even if it hurts?\nB: If it hurts a lot, don't endure it, tell someone.",
     funFact:"참다 is deeply cultural. Korean 인내 (patience/endurance) is considered a virtue. But modern Korea questions whether excessive 참기 is healthy."},

    {type:"teach", trg:"챙기다", src:"to pack, to take care of, to look after", pos:"verb", gender:null,
     note:"Native Korean verb. Gathering things or looking after someone.",
     example:"A: 짐 다 챙겼어요?\nB: 네, 다 챙겼어요. 출발해요!",
     exampleSrc:"A: Did you pack everything?\nB: Yes, I packed everything. Let's go!",
     funFact:"챙기다 shows care: 건강 챙기세요 (take care of your health), 밥 챙겨 먹어 (make sure you eat properly). It is a warm, caring verb."},

    {type:"match", pairs:[
      {trg:"포기하다", src:"to give up"},
      {trg:"참다", src:"to endure"},
      {trg:"챙기다", src:"to pack/look after"},
      {trg:"허용하다", src:"to permit"},
      {trg:"취하다", src:"to take/adopt"}
    ]},

    {type:"teach", trg:"찾아가다", src:"to go visit, to go find", pos:"verb", gender:null,
     note:"Compound: 찾아 (seeking) + 가다 (go). Going somewhere to find/visit.",
     example:"A: 그 식당을 찾아갔어요?\nB: 네, 지도 보고 찾아갔어요.",
     exampleSrc:"A: Did you go find that restaurant?\nB: Yes, I followed the map and found it.",
     funFact:"찾아가다 implies deliberate effort to reach a destination. It is more purposeful than just 가다 (go). You go with the intent to find."},

    {type:"teach", trg:"찾아내다", src:"to find out, to discover, to track down", pos:"verb", gender:null,
     note:"Compound: 찾아 (seeking) + 내다 (put out/accomplish). Successfully finding.",
     example:"A: 원인을 찾아냈어요?\nB: 네, 드디어 원인을 찾아냈어요!",
     exampleSrc:"A: Did you find out the cause?\nB: Yes, we finally discovered the cause!",
     funFact:"찾아내다 emphasizes the achievement of finding: it took effort, but you succeeded. It is more dramatic than simple 찾다 (to find)."},

    {type:"teach", trg:"찾아보다", src:"to look up, to search for", pos:"verb", gender:null,
     note:"Compound: 찾아 (seeking) + 보다 (see/try). Looking something up.",
     example:"A: 인터넷에서 찾아봤어요?\nB: 네, 찾아봤는데 정보가 없어요.",
     exampleSrc:"A: Did you look it up on the internet?\nB: Yes, I searched but there's no information.",
     funFact:"찾아보다 is the Korean equivalent of 'Google it': 인터넷에서 찾아봐 (look it up online). It implies a casual search attempt."},

    {type:"teach", trg:"찾아오다", src:"to come visit, to come find", pos:"verb", gender:null,
     note:"Compound: 찾아 (seeking) + 오다 (come). Coming to find/visit.",
     example:"A: 친구가 집으로 찾아왔어요.\nB: 약속 없이요? 깜짝이네요!",
     exampleSrc:"A: A friend came to visit my house.\nB: Without an appointment? What a surprise!",
     funFact:"찾아오다 implies movement toward the speaker. 봄이 찾아오다 (spring comes/arrives) is a poetic use, as if spring deliberately visits."},

    {type:"mc",
     q:"인터넷에서 정보를 검색하는 것을 뭐라고 해요?",
     opts:["찾아보다","찾아내다","찾아오다","찾아가다"],
     ans:"찾아보다",
     hint:"This compound verb means to look something up, like searching on the internet."},

    {type:"teach", trg:"집다", src:"to pick up, to grab", pos:"verb", gender:null,
     note:"Native Korean verb. Picking up a small object with fingers or chopsticks.",
     example:"A: 젓가락으로 콩을 집을 수 있어요?\nB: 어려워요! 계속 미끄러져요.",
     exampleSrc:"A: Can you pick up beans with chopsticks?\nB: It's hard! They keep slipping.",
     funFact:"집다 with chopsticks is a quintessential Korean skill. 콩을 젓가락으로 집기 was once used as a dexterity test."},

    {type:"teach", trg:"찌르다", src:"to stab, to poke, to sting", pos:"verb", gender:null,
     note:"Native Korean verb. Sharp physical contact.",
     example:"A: 손가락에 뭐가 찌르는 것 같아요.\nB: 소독부터 하세요.",
     exampleSrc:"A: Something seems to be pricking my finger.\nB: Disinfect it first.",
     funFact:"찌르다 is also figurative: 양심을 찌르다 (to prick one's conscience), 급소를 찌르다 (to hit a weak point). Sharp words can 찌르다 too."},

    {type:"teach", trg:"줍다", src:"to pick up (from the ground)", pos:"verb", gender:null,
     note:"Native Korean verb. Picking something up from the floor/ground.",
     example:"A: 쓰레기를 주워 주세요.\nB: 네, 이것 좀 줍고 갈게요.",
     exampleSrc:"A: Please pick up the trash.\nB: Okay, I'll pick this up and go.",
     funFact:"줍다 is irregular: 주워요 (not 줍어요). 쓰레기 줍기 (trash pickup) is a common volunteer activity in Korean communities."},

    {type:"teach", trg:"차리다", src:"to set (a table), to come to one's senses", pos:"verb", gender:null,
     note:"Native Korean verb. Preparing food or regaining awareness.",
     example:"A: 상을 차렸어요?\nB: 네, 맛있게 상을 차렸어요.",
     exampleSrc:"A: Did you set the table?\nB: Yes, I set the table nicely.",
     funFact:"상을 차리다 (set the table) is essential for Korean meals. 정신을 차리다 (come to one's senses) is the figurative meaning: snapping out of confusion."},

    {type:"teach", trg:"쳐다보다", src:"to stare at, to gaze at, to look up at", pos:"verb", gender:null,
     note:"Compound: 쳐다 (looking up/at) + 보다 (see). Sustained looking.",
     example:"A: 왜 자꾸 쳐다보세요?\nB: 아, 죄송해요. 생각하고 있었어요.",
     exampleSrc:"A: Why do you keep staring?\nB: Oh, sorry. I was thinking.",
     funFact:"쳐다보다 can be rude if prolonged. In Korea, sustained eye contact with strangers is uncommon. Being told 왜 쳐다봐 (why are you staring) is confrontational."},

    {type:"teach", trg:"향하다", src:"to head toward, to face, to be directed at", pos:"verb", gender:null,
     note:"Sino-Korean (向). Moving in the direction of something.",
     example:"A: 서울을 향해 출발했어요?\nB: 네, 지금 서울을 향해 가고 있어요.",
     exampleSrc:"A: Did you head toward Seoul?\nB: Yes, I'm heading toward Seoul now.",
     funFact:"향하다 is directional and purposeful: 미래를 향하다 (face the future), 목표를 향하다 (head toward a goal). It implies determination."},

    {type:"teach", trg:"지키다", src:"to protect, to keep, to guard", pos:"verb", gender:null,
     note:"Native Korean verb. Protecting rules, promises, or people.",
     example:"A: 약속을 꼭 지켜 주세요.\nB: 네, 반드시 지킬게요.",
     exampleSrc:"A: Please keep your promise.\nB: Yes, I'll definitely keep it.",
     funFact:"지키다 covers many kinds of protection: 약속을 지키다 (keep a promise), 법을 지키다 (obey the law), 가족을 지키다 (protect family)."},

    {type:"fb",
     s:"건강을 잘 {1}.",
     a:["챙기세요"],
     opts:["챙기세요","지키세요","참으세요","집으세요"],
     hint:"This caring verb means to look after or take care of something or someone.",
     sSrc:"Please take good care of your {1}."}
  ]
};
export default LESSON_15;
