// Korean B1 Final Gap - Lesson 6: Body & Physical Actions
const LESSON_6 = {
  id:"kov2_b1fin_l6", title:"몸과 움직임", icon:"🏃", xp:15, board:true,
  steps:[
    {type:"intro", title:"Body & Physical Actions",
     desc:"Learn vocabulary for body parts, physical movement, and measurements. These words help describe actions, sizes, and physical experiences in daily life.",
     goals:["Learn 20 words for body parts, movement, and measurement","Describe physical actions and spatial dimensions","Use measurement units in Korean"]},

    {type:"teach", trg:"이마", src:"forehead", pos:"noun", gender:null,
     note:"Native Korean noun. The area above the eyebrows.",
     example:"A: 이마에 땀이 나요.\nB: 더운가 봐요. 물 마셔요.",
     exampleSrc:"A: There's sweat on my forehead.\nB: You must be hot. Drink some water.",
     funFact:"In Korea, a broad forehead (넓은 이마) is considered a sign of intelligence and good fortune. Some celebrities are famous for their foreheads."},

    {type:"teach", trg:"입술", src:"lips", pos:"noun", gender:null,
     note:"Native Korean compound. 입 (mouth) + 술 (edge/fringe).",
     example:"A: 입술이 건조해요.\nB: 립밤 바르세요.",
     exampleSrc:"A: My lips are dry.\nB: Put on some lip balm.",
     funFact:"입술 literally means 'mouth fringe.' Korean beauty standards highly value 입술 shape, driving the massive lip product industry."},

    {type:"teach", trg:"혀", src:"tongue", pos:"noun", gender:null,
     note:"Native Korean noun. Both the body part and figuratively 'speech.'",
     example:"A: 뜨거운 거 먹고 혀를 데었어요.\nB: 조심하세요! 얼음 대 봐요.",
     exampleSrc:"A: I burned my tongue eating something hot.\nB: Be careful! Try putting ice on it.",
     funFact:"The idiom 혀를 내두르다 (to stick out one's tongue) means to be amazed or shocked. It is used when something is unbelievably impressive."},

    {type:"teach", trg:"온몸", src:"whole body, entire body", pos:"noun", gender:null,
     note:"Compound: 온 (all/whole) + 몸 (body).",
     example:"A: 운동 후에 온몸이 아파요.\nB: 스트레칭을 해야 해요.",
     exampleSrc:"A: My whole body hurts after exercising.\nB: You need to stretch.",
     funFact:"온몸 is used in many expressive phrases: 온몸이 떨리다 (whole body trembles), 온몸으로 느끼다 (feel with your whole body)."},

    {type:"teach", trg:"피", src:"blood", pos:"noun", gender:null,
     note:"Native Korean noun. Used literally and figuratively (bloodline, passion).",
     example:"A: 손가락에서 피가 나요!\nB: 반창고 줄까요?",
     exampleSrc:"A: Blood is coming from my finger!\nB: Shall I give you a bandage?",
     funFact:"피 has deep figurative meanings: 피가 끓다 (blood boils = passionate), 피는 못 속인다 (blood cannot deceive = like parent like child)."},

    {type:"mc",
     q:"'온몸'에서 '온'의 의미는?",
     opts:["따뜻한","전부","힘센","아픈"],
     ans:"전부",
     hint:"The prefix 온 here means 'all' or 'entire,' not 'warm.'"},

    {type:"teach", trg:"움직이다", src:"to move, to budge", pos:"verb", gender:null,
     note:"Native Korean verb. Any physical movement or motion.",
     example:"A: 움직이지 마세요!\nB: 왜요? 무슨 일이에요?",
     exampleSrc:"A: Don't move!\nB: Why? What's going on?",
     funFact:"움직이다 covers all movement: body parts, objects, even abstract things. 경제가 움직이다 (the economy moves) works too."},

    {type:"teach", trg:"올라오다", src:"to come up, to rise", pos:"verb", gender:null,
     note:"Compound verb: 올라 (go up) + 오다 (come). Movement upward toward speaker.",
     example:"A: 2층으로 올라오세요.\nB: 네, 지금 올라갈게요.",
     exampleSrc:"A: Come up to the second floor.\nB: Okay, I'll come up now.",
     funFact:"Korean distinguishes 올라가다 (go up, away from speaker) and 올라오다 (come up, toward speaker). The direction matters."},

    {type:"teach", trg:"옮기다", src:"to move (something), to transfer", pos:"verb", gender:null,
     note:"Native Korean verb. Moving objects from one place to another.",
     example:"A: 이 상자를 저쪽으로 옮겨 주세요.\nB: 네, 알겠습니다.",
     exampleSrc:"A: Please move this box over there.\nB: Okay, understood.",
     funFact:"옮기다 also means to spread/transmit: 병을 옮기다 (to spread disease), 소문을 옮기다 (to pass along rumors)."},

    {type:"teach", trg:"부딪치다", src:"to bump into, to collide with", pos:"verb", gender:null,
     note:"Native Korean verb. Physical collision or figurative confrontation.",
     example:"A: 문에 머리를 부딪쳤어요.\nB: 괜찮아요? 혹시 어지러워요?",
     exampleSrc:"A: I bumped my head on the door.\nB: Are you okay? Are you dizzy?",
     funFact:"부딪치다 works figuratively too: 현실에 부딪치다 (to face reality), 벽에 부딪치다 (to hit a wall = face obstacles)."},

    {type:"teach", trg:"차다", src:"to kick, to be full", pos:"verb", gender:null,
     note:"Native Korean verb with multiple meanings. Context determines which one.",
     example:"A: 공을 세게 찼어요!\nB: 와, 골이에요!",
     exampleSrc:"A: You kicked the ball hard!\nB: Wow, it's a goal!",
     funFact:"차다 has many meanings: kick (공을 차다), be full (배가 차다), be cold (바람이 차다), wear/put on (시계를 차다). A truly versatile word."},

    {type:"fb",
     s:"이 짐을 2층으로 {1} 주세요.",
     a:["옮겨"],
     opts:["옮겨","움직여","부딪쳐","차"],
     hint:"This verb means to transfer or relocate an object from one place to another.",
     sSrc:"Please {1} this luggage to the second floor."},

    {type:"teach", trg:"쥐다", src:"to grip, to hold tightly", pos:"verb", gender:null,
     note:"Native Korean verb. A firm, tight grip in the hand.",
     example:"A: 손에 뭘 쥐고 있어요?\nB: 열쇠를 쥐고 있어요.",
     exampleSrc:"A: What are you holding in your hand?\nB: I'm gripping the key.",
     funFact:"The idiom 주도권을 쥐다 means 'to hold the initiative.' In traditional martial arts, 쥐다 describes the proper fist grip."},

    {type:"teach", trg:"줄기", src:"stem, stalk, trunk", pos:"noun", gender:null,
     note:"Native Korean noun. The main structural part of a plant.",
     example:"A: 이 나무 줄기가 아주 두꺼워요.\nB: 네, 오래된 나무예요.",
     exampleSrc:"A: This tree trunk is very thick.\nB: Yes, it's an old tree.",
     funFact:"줄기 extends to figurative use: 눈물 줄기 (stream of tears), 빗줄기 (streams of rain). It implies a flowing line."},

    {type:"teach", trg:"줄", src:"line, string, row", pos:"noun", gender:null,
     note:"Native Korean noun. A line of people, a rope, or a row.",
     example:"A: 줄이 너무 길어요.\nB: 30분은 기다려야 할 것 같아요.",
     exampleSrc:"A: The line is so long.\nB: I think we'll have to wait 30 minutes.",
     funFact:"줄을 서다 (to stand in line) is essential Korean. Koreans are known for queuing patiently at popular restaurants and stores."},

    {type:"teach", trg:"폭", src:"width, breadth", pos:"noun", gender:null,
     note:"Sino-Korean (幅). Used for measuring width of roads, fabric, etc.",
     example:"A: 이 도로의 폭이 얼마예요?\nB: 폭이 약 10미터예요.",
     exampleSrc:"A: What's the width of this road?\nB: The width is about 10 meters.",
     funFact:"폭 also appears in 폭발 (explosion) and 폭풍 (storm), where it conveys 'force/intensity' rather than 'width.'"},

    {type:"teach", trg:"크기", src:"size", pos:"noun", gender:null,
     note:"Derived from 크다 (to be big) + 기 (nominalizer). How big something is.",
     example:"A: 이 옷 크기가 어때요?\nB: 좀 큰 것 같아요. 작은 크기 있어요?",
     exampleSrc:"A: How's the size of this clothing?\nB: It seems a bit big. Do you have a smaller size?",
     funFact:"Korean clothing sizes often use 프리 사이즈 (free size, one-size-fits-all), though actual sizing follows S/M/L or numbered systems."},

    {type:"match", pairs:[
      {trg:"폭", src:"width"},
      {trg:"크기", src:"size"},
      {trg:"줄", src:"line/row"},
      {trg:"줄기", src:"stem/stalk"},
      {trg:"쥐다", src:"to grip"}
    ]},

    {type:"teach", trg:"킬로그램", src:"kilogram", pos:"noun", gender:null,
     note:"Loanword from French/English. Written 킬로그램 or abbreviated kg.",
     example:"A: 몸무게가 몇 킬로그램이에요?\nB: 한국에서는 그런 질문 안 해요!",
     exampleSrc:"A: How many kilograms do you weigh?\nB: In Korea, we don't ask that kind of question!",
     funFact:"Korea uses the metric system exclusively. Asking someone's weight in 킬로그램 is considered rude, especially to women."},

    {type:"teach", trg:"킬로미터", src:"kilometer", pos:"noun", gender:null,
     note:"Loanword. Korea uses km for all distance measurements.",
     example:"A: 서울에서 부산까지 몇 킬로미터예요?\nB: 약 325킬로미터예요.",
     exampleSrc:"A: How many kilometers is it from Seoul to Busan?\nB: About 325 kilometers.",
     funFact:"The KTX high-speed train covers the 325 km Seoul-Busan route in about 2.5 hours. Before KTX, the same trip took over 4 hours."},

    {type:"teach", trg:"톤", src:"ton", pos:"noun", gender:null,
     note:"Loanword from English. Unit of weight (1,000 kg).",
     example:"A: 이 트럭은 몇 톤까지 실을 수 있어요?\nB: 5톤까지 가능해요.",
     exampleSrc:"A: How many tons can this truck carry?\nB: Up to 5 tons.",
     funFact:"In casual Korean, 톤 is also used for voice tone: 말투의 톤 (tone of speech). It is a versatile loanword."},

    {type:"teach", trg:"줄다", src:"to decrease, to shrink", pos:"verb", gender:null,
     note:"Native Korean verb. Intransitive: something gets smaller on its own.",
     example:"A: 인구가 줄고 있어요?\nB: 네, 출생률이 낮아서 인구가 줄고 있어요.",
     exampleSrc:"A: Is the population decreasing?\nB: Yes, the population is shrinking because of low birth rates.",
     funFact:"줄다 (decrease) and 늘다 (increase) are an essential pair. Korea's declining birth rate makes 인구가 줄다 a frequent news phrase."},

    {type:"mc",
     q:"인구가 점점 적어지는 것을 뭐라고 해요?",
     opts:["줄다","줄기","쥐다","크기"],
     ans:"줄다",
     hint:"This intransitive verb means something becomes less or shrinks over time."}
  ]
};
export default LESSON_6;
