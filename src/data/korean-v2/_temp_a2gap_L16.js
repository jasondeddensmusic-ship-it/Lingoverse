// Korean A2 Gap - Lesson 16: Social Actions & Communication
const LESSON_16 = {
  id:"kov2_a2gap_l16", title:"사회적 행동과 소통", icon:"🗣️", xp:15, board:true,
  steps:[
    {type:"intro", title:"Social Actions & Communication",
     desc:"Learn 17 essential verbs and nouns for social interactions: talking, helping, singing, dancing, and the emotional verbs of losing, forgetting, and erasing.",
     goals:["Learn 17 social interaction words","Practice casual vs. formal speech patterns","Understand compound verb structures with 버리다"]},

    {type:"teach", trg:"얘기", src:"talk, story (casual)", pos:"noun", gender:null,
     note:"Shortened form of 이야기.\nUsed in casual speech constantly.",
     example:"A: 무슨 얘기예요?\nB: 재미있는 얘기가 있어요!",
     exampleSrc:"A: What's the talk about?\nB: I have an interesting story!",
     funFact:"얘기 is a contraction of 이야기, dropping the 이 and merging sounds. Korean loves these shortenings: 여기 from 이곳에, 거기 from 그곳에. Casual speech is all about economy."},

    {type:"teach", trg:"얘기하다", src:"to talk, to chat (casual)", pos:"verb", gender:null,
     note:"Casual version of 이야기하다.\nVery common in everyday conversation.",
     example:"A: 뭐에 대해 얘기했어요?\nB: 주말 계획에 대해 얘기했어요.",
     exampleSrc:"A: What did you talk about?\nB: We talked about weekend plans.",
     funFact:"In Korean workplace culture, 얘기 좀 하자 (Let's have a talk) from your boss can be either exciting news or terrifying, depending on tone. Context is everything."},

    {type:"teach", trg:"소개하다", src:"to introduce", pos:"verb", gender:null,
     note:"From hanja 紹介 (connect + mediate).\n자기소개 = self-introduction.",
     example:"A: 친구를 소개해 줄게요.\nB: 좋아요, 기대돼요!",
     exampleSrc:"A: I'll introduce my friend to you.\nB: Great, I'm looking forward to it!",
     funFact:"자기소개서 (self-introduction letter) is a cornerstone of Korean job applications. Unlike Western resumes, Koreans write personal narrative essays about their life philosophy and character."},

    {type:"teach", trg:"노래하다", src:"to sing", pos:"verb", gender:null,
     note:"노래 (song) + 하다 (to do).\nKoreans say 노래를 부르다 too (lit: call a song).",
     example:"A: 노래 잘하세요?\nB: 아니요, 노래를 못해요.",
     exampleSrc:"A: Are you good at singing?\nB: No, I can't sing well.",
     funFact:"Korea's noraebang (노래방, singing room) culture is unique. Friends rent private rooms to sing together. It's not about talent but about bonding. Even tone-deaf people go regularly."},

    // Quiz block 1: first 4 words
    {type:"mc",
     q:"친구에게 새로운 사람을 ___.",
     opts:["소개했어요","노래했어요","얘기했어요","소개예요"],
     ans:"소개했어요",
     hint:"Which verb means presenting one person to another for the first time?"},

    {type:"fb",
     s:"주말 계획에 대해 {1}.",
     a:["얘기했어요"],
     opts:["얘기했어요","소개했어요","노래했어요","얘기예요"],
     hint:"Which casual verb means having a conversation about something?",
     sSrc:"We {1} about weekend plans."},

    {type:"teach", trg:"춤", src:"dance", pos:"noun", gender:null,
     note:"Pure Korean word for dance.\n춤을 추다 = to dance (the standard expression).",
     example:"A: 춤을 좋아해요?\nB: 네, 춤추는 걸 좋아해요!",
     exampleSrc:"A: Do you like dance?\nB: Yes, I love dancing!",
     funFact:"Traditional Korean 춤 (dance) emphasizes flowing arm movements and slow grace, very different from Western dance. The 강강술래 circle dance is UNESCO intangible cultural heritage."},

    {type:"teach", trg:"춤추다", src:"to dance", pos:"verb", gender:null,
     note:"춤 (dance) + 추다 (to perform a dance).\nCan also say 춤을 추다.",
     example:"A: 같이 춤출까요?\nB: 좋아요, 춤춰요!",
     exampleSrc:"A: Shall we dance together?\nB: Sure, let's dance!",
     funFact:"K-pop made Korean dance culture global. 춤 실력 (dance skill) is now a serious evaluation criterion for K-pop trainees, alongside singing and visual appeal."},

    {type:"teach", trg:"잠자다", src:"to sleep", pos:"verb", gender:null,
     note:"잠 (sleep) + 자다 (to sleep).\nMore emphatic than plain 자다.",
     example:"A: 어젯밤에 잘 잠잤어요?\nB: 아니요, 잠을 못 잤어요.",
     exampleSrc:"A: Did you sleep well last night?\nB: No, I couldn't sleep.",
     funFact:"잠 appears in many compounds: 낮잠 (afternoon nap), 잠꼬대 (sleep talking), 잠버릇 (sleeping habit). Koreans consider 잠꼬대 hilarious and often tease friends about it."},

    {type:"teach", trg:"지내다", src:"to get along, to spend time", pos:"verb", gender:null,
     note:"Common greeting: 잘 지내요? = How are you?\nAlso: time period + 지내다 = spend time.",
     example:"A: 요즘 어떻게 지내요?\nB: 잘 지내요, 감사해요!",
     exampleSrc:"A: How have you been lately?\nB: I've been well, thank you!",
     funFact:"잘 지내요? is the real Korean 'How are you?' while 안녕하세요 is more of a hello. Close friends use 잘 지냈어? (past tense: Have you been well?) after not seeing each other."},

    // Quiz block 2: words 5-8
    {type:"match", pairs:[
      {trg:"춤", src:"dance (noun)"},
      {trg:"춤추다", src:"to dance"},
      {trg:"잠자다", src:"to sleep"},
      {trg:"지내다", src:"to get along/spend time"}
    ]},

    {type:"mc",
     q:"요즘 어떻게 ___?",
     opts:["잠자요","지내요","춤춰요","노래해요"],
     ans:"지내요",
     hint:"This is the standard Korean greeting asking about someone's recent life."},

    {type:"teach", trg:"싸우다", src:"to fight, to argue", pos:"verb", gender:null,
     note:"Covers physical fights and verbal arguments.\n싸움 = a fight (noun form).",
     example:"A: 또 싸웠어요?\nB: 네, 작은 일로 싸웠어요.",
     exampleSrc:"A: Did you fight again?\nB: Yes, we fought over something small.",
     funFact:"Korean dramas love the 싸우다 scene. The classic K-drama couple fight always happens in the rain. 싸우지 마! (Don't fight!) is one of the most-heard drama lines."},

    {type:"teach", trg:"도와주다", src:"to help (someone)", pos:"verb", gender:null,
     note:"돕다 (to help) + 아/어 주다 (do for someone).\nVery polite and common form.",
     example:"A: 좀 도와주세요!\nB: 네, 뭘 도와줄까요?",
     exampleSrc:"A: Please help me!\nB: Sure, what can I help you with?",
     funFact:"도와주세요! is the Korean emergency help phrase. The 주다 (give) ending adds warmth, it literally means 'give me help.' Without 주다, 도와요 sounds more demanding."},

    {type:"teach", trg:"잃다", src:"to lose", pos:"verb", gender:null,
     note:"Lose an object or abstract thing (hope, memory).\nIrregular: ㄹ drops before certain endings.",
     example:"A: 지갑을 잃었어요!\nB: 어디에서 잃었어요?",
     exampleSrc:"A: I lost my wallet!\nB: Where did you lose it?",
     funFact:"잃다 is a ㄹ-irregular verb: the ㄹ drops before ㄴ, ㅂ, ㅅ endings. So 잃는 becomes 잃는 but 잃어요 keeps the ㄹ sound. This pattern trips up many learners."},

    {type:"teach", trg:"잃어버리다", src:"to lose completely", pos:"verb", gender:null,
     note:"잃다 + 어버리다 (completive ending).\nImplies the loss is total and regrettable.",
     example:"A: 열쇠를 잃어버렸어요.\nB: 다시 찾아봐요!",
     exampleSrc:"A: I completely lost my keys.\nB: Try looking for them again!",
     funFact:"The 버리다 ending adds emotional finality. Compare: 잃었어요 (I lost it, maybe I'll find it) vs. 잃어버렸어요 (I lost it for good, it's gone). The emotional weight changes dramatically."},

    // Quiz block 3: words 9-12
    {type:"fb",
     s:"지갑을 {1}!",
     a:["잃어버렸어요"],
     opts:["잃어버렸어요","싸웠어요","도와줬어요","잃다요"],
     hint:"Which compound verb expresses completely losing a physical object?",
     sSrc:"I completely {1} my wallet!"},

    {type:"mc",
     q:"좀 ___ 주세요! 혼자 못 해요.",
     opts:["잃어","잠자","도와","싸워"],
     ans:"도와",
     hint:"You need someone's assistance because you cannot do it alone."},

    {type:"teach", trg:"잊어버리다", src:"to forget completely", pos:"verb", gender:null,
     note:"잊다 (to forget) + 어버리다.\nStronger than plain 잊다.",
     example:"A: 약속을 잊어버렸어요!\nB: 괜찮아요, 다음에 만나요.",
     exampleSrc:"A: I completely forgot the appointment!\nB: It's okay, let's meet next time.",
     funFact:"잊어버리다 vs. 잃어버리다: one letter difference (잊 vs. 잃) but very different meanings. 잊 = forget (mental), 잃 = lose (physical). Korean learners of Korean mix these up too."},

    {type:"teach", trg:"지우다", src:"to erase, to delete", pos:"verb", gender:null,
     note:"For erasing writing, deleting files, removing marks.\nCausative of 지다 (to disappear).",
     example:"A: 이 사진을 지울까요?\nB: 아니요, 지우지 마세요!",
     exampleSrc:"A: Shall I delete this photo?\nB: No, don't delete it!",
     funFact:"In the smartphone era, 지우다 became the verb for deleting messages and uninstalling apps. 카톡 지웠어? (Did you delete the KakaoTalk message?) is a common modern question."},

    {type:"teach", trg:"안다", src:"to know, to hug", pos:"verb", gender:null,
     note:"Two separate verbs sharing one form.\nContext always clarifies: 알다 = know, 안다 = hug.",
     example:"A: 아기를 안아 주세요.\nB: 네, 제가 안을게요.",
     exampleSrc:"A: Please hold the baby.\nB: Okay, I'll hold them.",
     funFact:"안다 (hug) and 알다 (know) share a form but have different conjugations. 안아요 (hugs) vs. 알아요 (knows). The 'hug' meaning is physical: wrapping arms around someone or holding in your arms."},

    {type:"teach", trg:"피아노", src:"piano", pos:"noun", gender:null,
     note:"Loanword from Italian/English.\n피아노를 치다 = to play piano (lit: hit piano).",
     example:"A: 피아노를 칠 수 있어요?\nB: 조금 칠 수 있어요.",
     exampleSrc:"A: Can you play the piano?\nB: I can play a little.",
     funFact:"Korean uses 치다 (to hit/strike) for piano, guitar, and drums. This reflects the physical action: you strike piano keys. But for wind instruments, you use 불다 (to blow)."},

    {type:"teach", trg:"그리다", src:"to draw, to paint", pos:"verb", gender:null,
     note:"Also means 'to miss someone': 그리워하다.\nSame root: picturing someone in your mind.",
     example:"A: 뭘 그리고 있어요?\nB: 강아지를 그리고 있어요.",
     exampleSrc:"A: What are you drawing?\nB: I'm drawing a puppy.",
     funFact:"그리다 (to draw) and 그립다 (to miss someone) share the same root: creating an image. Missing someone is literally 'drawing them in your mind.' This poetic connection is unique to Korean."},

    // Quiz block 4: words 13-17
    {type:"match", pairs:[
      {trg:"잊어버리다", src:"to forget completely"},
      {trg:"지우다", src:"to erase/delete"},
      {trg:"피아노", src:"piano"},
      {trg:"그리다", src:"to draw/paint"}
    ]},

    {type:"fb",
     s:"약속을 {1}!",
     a:["잊어버렸어요"],
     opts:["잊어버렸어요","잃어버렸어요","지웠어요","안았어요"],
     hint:"Which compound verb means you completely forgot a mental commitment?",
     sSrc:"I completely {1} the appointment!"},

    {type:"mc",
     q:"강아지를 ___ 있어요.",
     opts:["안고","치고","지우고","그리고"],
     ans:"그리고",
     hint:"Which verb means creating a picture or image with a pencil?"},

    {type:"mc",
     q:"피아노를 잘 ___?",
     opts:["쳐요","춰요","불어요","그려요"],
     ans:"쳐요",
     hint:"Korean uses a 'striking' verb for keyboard instruments."}
  ]
};
export default LESSON_16;
