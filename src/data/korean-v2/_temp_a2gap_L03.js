// Korean A2 Gap - Lesson 3: Emotions, Manners & Social Events
// Temp file - to be merged into unit by main session

const LESSON_3 = {
  id:"kov2_a2gap_l3", title:"감정과 예절", icon:"💝", xp:15, board:true,
  steps:[
    {type:"intro", title:"감정과 예절",
     desc:"Learn to express emotions, practice polite social phrases, and talk about social events like weddings and celebrations.",
     goals:["Express feelings like love, worry, and joy","Use apology and gratitude phrases at different formality levels","Discuss invitations, promises, and celebrations"]},

    // --- Teach block 1: Core emotions ---
    {type:"teach", trg:"기분", src:"feeling; mood", pos:"noun", gender:null,
     note:"Your emotional state or mood. Very common in daily conversation.",
     example:"A: 오늘 기분이 어때요?\nB: 기분이 좋아요!",
     exampleSrc:"A: How is your mood today?\nB: I feel good!",
     funFact:"From Hanja 氣分: 氣 (energy/spirit) + 分 (portion). Your mood is literally your 'portion of energy.' 기분이 좋다 (feel good) and 기분이 나쁘다 (feel bad) are essential phrases."},

    {type:"teach", trg:"사랑", src:"love", pos:"noun", gender:null,
     note:"Romantic love, family love, or deep affection.",
     example:"A: 사랑이 뭐예요?\nB: 마음이 따뜻한 거예요.",
     exampleSrc:"A: What is love?\nB: It is when your heart is warm.",
     funFact:"사랑 is pure Korean, not Sino-Korean. The phrase 사랑해요 is one of the first Korean expressions people worldwide learn. K-dramas made it globally famous."},

    {type:"teach", trg:"사랑하다", src:"to love", pos:"verb", gender:null,
     note:"The verb form. Conjugated: 사랑해요 (polite), 사랑합니다 (formal).",
     example:"A: 저는 우리 가족을 사랑해요.\nB: 저도요.",
     exampleSrc:"A: I love my family.\nB: Me too.",
     funFact:"Korean drama fans know the dramatic confession: '사랑합니다!' Koreans often express love through actions rather than words, so saying it aloud carries extra weight."},

    {type:"teach", trg:"즐겁다", src:"to be enjoyable; to be fun", pos:"adj", gender:null,
     note:"Describes something pleasant and fun. Conjugated: 즐거워요.",
     example:"A: 파티가 즐거웠어요?\nB: 네, 아주 즐거웠어요!",
     exampleSrc:"A: Was the party enjoyable?\nB: Yes, it was very enjoyable!",
     funFact:"Pure Korean adjective. 즐거운 시간 (enjoyable time) is a common phrase. The related word 즐기다 means 'to enjoy' as a deliberate action."},

    {type:"teach", trg:"울다", src:"to cry", pos:"verb", gender:null,
     note:"To shed tears. Can be from sadness, joy, or frustration.",
     example:"A: 왜 울어요?\nB: 영화가 슬퍼서요.",
     exampleSrc:"A: Why are you crying?\nB: Because the movie is sad.",
     funFact:"Korean has specific words for types of crying: 훌쩍훌쩍 (sniffling), 엉엉 (wailing), 찔끔 (tearing up). These sound-symbolic words (의태어) are uniquely expressive."},

    {type:"teach", trg:"웃다", src:"to laugh; to smile", pos:"verb", gender:null,
     note:"Covers both laughing and smiling. Context determines which.",
     example:"A: 왜 웃어요?\nB: 그 이야기가 재미있어요.",
     exampleSrc:"A: Why are you laughing?\nB: That story is funny.",
     funFact:"웃다 covers both 'laugh' and 'smile.' English separates them, but Korean uses one verb. 웃음 (laughter/smile) is the noun form. 웃는 얼굴 means 'smiling face.'"},

    // --- Quiz block 1 ---
    {type:"mc",
     q:"슬픈 영화를 보고 눈물이 나면?",
     opts:["울어요","웃어요","인사해요","축하해요"],
     ans:"울어요",
     hint:"When tears come from sadness, this is the verb for shedding them."},

    {type:"fb",
     s:"오늘 {1}이 좋아서 노래를 불러요.",
     a:["기분"],
     opts:["기분","사랑","걱정","실례"],
     hint:"This Sino-Korean word refers to your emotional state or current mood.",
     sSrc:"Today my {1} is good so I am singing."},

    // --- Teach block 2: Apologies & gratitude ---
    {type:"teach", trg:"고맙다", src:"to be thankful", pos:"adj", gender:null,
     note:"Pure Korean word for 'thank you.' Conjugated: 고마워요.",
     example:"A: 도와줘서 고마워요.\nB: 아니에요, 괜찮아요.",
     exampleSrc:"A: Thank you for helping me.\nB: No, it is fine.",
     funFact:"고맙다 is pure Korean, while 감사하다 is Sino-Korean. 고마워요 feels warmer and more personal. 감사합니다 is more formal. Both are correct; register differs."},

    {type:"teach", trg:"미안하다", src:"to be sorry", pos:"adj", gender:null,
     note:"Casual to polite apology. Conjugated: 미안해요.\nUsed among friends and peers.",
     example:"A: 늦어서 미안해요.\nB: 괜찮아요.",
     exampleSrc:"A: I am sorry for being late.\nB: It is okay.",
     funFact:"From Hanja 未安: 未 (not yet) + 安 (peaceful). Being sorry literally means 'not yet at peace.' Your heart is uneasy because you caused trouble."},

    {type:"teach", trg:"죄송하다", src:"to be sorry (formal)", pos:"adj", gender:null,
     note:"Formal apology. Conjugated: 죄송합니다.\nUsed with elders, strangers, and in business.",
     example:"A: 죄송합니다. 제가 실수했어요.\nB: 괜찮습니다.",
     exampleSrc:"A: I am very sorry. I made a mistake.\nB: It is fine.",
     funFact:"From Hanja 罪悚: 罪 (sin/crime) + 悚 (fearful). The literal meaning is 'I feel fearful of my wrongdoing.' It is much heavier than 미안하다."},

    {type:"teach", trg:"실례", src:"excuse; rudeness", pos:"noun", gender:null,
     note:"An impolite act. Often used before interrupting or asking a favor.",
     example:"A: 실례합니다, 화장실이 어디예요?\nB: 저쪽이에요.",
     exampleSrc:"A: Excuse me, where is the bathroom?\nB: It is over there.",
     funFact:"From Hanja 失禮: 失 (lose) + 禮 (manners). Literally 'losing manners.' Saying 실례합니다 acknowledges you are about to be slightly impolite."},

    {type:"teach", trg:"실례하다", src:"to excuse oneself; to be rude", pos:"verb", gender:null,
     note:"Verb form of 실례. 실례합니다 is the standard polite phrase.",
     example:"A: 실례하겠습니다. 먼저 가볼게요.\nB: 네, 안녕히 가세요.",
     exampleSrc:"A: I will excuse myself. I will go ahead.\nB: Yes, goodbye.",
     funFact:"실례하겠습니다 (I will excuse myself) is how you politely leave a gathering or interrupt someone. The future tense 겠 softens the action."},

    // --- Quiz block 2 ---
    {type:"mc",
     q:"선생님께 사과할 때 어떻게 말해요?",
     opts:["죄송합니다","미안해","고마워","실례"],
     ans:"죄송합니다",
     hint:"When apologizing to someone of higher status, use the more formal version."},

    {type:"match", pairs:[
      {trg:"고맙다", src:"to be thankful"},
      {trg:"미안하다", src:"to be sorry"},
      {trg:"죄송하다", src:"to be sorry (formal)"},
      {trg:"실례하다", src:"to excuse oneself"}
    ]},

    // --- Teach block 3: Social actions ---
    {type:"teach", trg:"인사하다", src:"to greet", pos:"verb", gender:null,
     note:"To greet someone or say goodbye. Covers all greeting actions.",
     example:"A: 선생님께 인사했어요?\nB: 네, 아까 했어요.",
     exampleSrc:"A: Did you greet the teacher?\nB: Yes, I did earlier.",
     funFact:"인사 (Hanja: 人事, human affairs) covers greetings AND farewells. In Korean culture, proper 인사 (including bowing) shows respect. Parents teach children to 인사 잘 해 (greet properly)."},

    {type:"teach", trg:"축하하다", src:"to congratulate", pos:"verb", gender:null,
     note:"To celebrate or congratulate someone. Conjugated: 축하해요.",
     example:"A: 생일 축하해요!\nB: 감사합니다!",
     exampleSrc:"A: Happy birthday!\nB: Thank you!",
     funFact:"축하 comes from Hanja 祝賀: 祝 (wish well) + 賀 (celebrate). The birthday song in Korea uses '생일 축하합니다' to the same tune as 'Happy Birthday.'"},

    {type:"teach", trg:"초대", src:"invitation", pos:"noun", gender:null,
     note:"A formal or casual invitation to an event.",
     example:"A: 초대해 주셔서 감사합니다.\nB: 와 주셔서 감사해요.",
     exampleSrc:"A: Thank you for inviting me.\nB: Thank you for coming.",
     funFact:"From Hanja 招待: 招 (beckon) + 待 (wait for). You beckon someone and wait for them. Korean weddings send formal 초대장 (invitation cards) to hundreds of guests."},

    {type:"teach", trg:"초대하다", src:"to invite", pos:"verb", gender:null,
     note:"Verb form of 초대. Conjugated: 초대해요, 초대합니다.",
     example:"A: 파티에 초대할 거예요?\nB: 네, 친구들을 초대할 거예요.",
     exampleSrc:"A: Will you invite people to the party?\nB: Yes, I will invite friends.",
     funFact:"When invited to a Korean home, bringing a small gift (fruit, cake) is expected. Showing up empty-handed is considered impolite. The invitation creates a social obligation."},

    {type:"teach", trg:"약속하다", src:"to promise; to make an appointment", pos:"verb", gender:null,
     note:"Covers both promises and scheduled meetings.\n약속 = promise/appointment.",
     example:"A: 내일 약속이 있어요?\nB: 네, 친구를 만나요.",
     exampleSrc:"A: Do you have an appointment tomorrow?\nB: Yes, I am meeting a friend.",
     funFact:"약속 (Hanja: 約束) means both 'promise' and 'appointment.' In Korean, a social plan IS a promise. Breaking 약속 damages trust more than in Western casual culture."},

    {type:"teach", trg:"걱정하다", src:"to worry", pos:"verb", gender:null,
     note:"To feel anxious about something. Conjugated: 걱정해요.",
     example:"A: 시험이 걱정돼요.\nB: 걱정하지 마세요. 잘할 거예요.",
     exampleSrc:"A: I am worried about the exam.\nB: Don't worry. You will do well.",
     funFact:"걱정하지 마세요 (Don't worry) is one of the most comforting phrases in Korean. The passive form 걱정되다 (to become worried) is also very common."},

    // --- Quiz block 3 ---
    {type:"fb",
     s:"생일 {1}해요!",
     a:["축하"],
     opts:["축하","초대","인사","약속"],
     hint:"The Sino-Korean word that means to wish well and celebrate someone's special day.",
     sSrc:"Happy birthday! (Literally: birthday {1}!)"},

    {type:"mc",
     q:"친구 집에 갈 때 '와 주세요'라고 하는 것은?",
     opts:["초대하다","약속하다","걱정하다","인사하다"],
     ans:"초대하다",
     hint:"When you ask someone to come to your place for an event, this is what you do."},

    // --- Teach block 4: Final words ---
    {type:"teach", trg:"친절하다", src:"to be kind", pos:"adj", gender:null,
     note:"Describes a kind, friendly person. Conjugated: 친절해요.",
     example:"A: 그 사람은 정말 친절해요.\nB: 맞아요, 항상 도와줘요.",
     exampleSrc:"A: That person is really kind.\nB: That's right, they always help.",
     funFact:"From Hanja 親切: 親 (close/intimate) + 切 (earnest). Being kind means being genuinely close and earnest. Korean service staff are often praised as 친절해요."},

    {type:"teach", trg:"결혼식", src:"wedding", pos:"noun", gender:null,
     note:"A wedding ceremony. 결혼 (marriage) + 식 (ceremony).",
     example:"A: 결혼식에 갈 거예요?\nB: 네, 토요일에요.",
     exampleSrc:"A: Are you going to the wedding?\nB: Yes, it is on Saturday.",
     funFact:"Korean weddings are fast (30 minutes) and practical. Guests give money in white envelopes (축의금). The amount depends on your relationship. It is a system of social reciprocity."},

    // --- Final quiz block ---
    {type:"mc",
     q:"결혼할 때 하는 행사는?",
     opts:["결혼식","초대","약속","인사"],
     ans:"결혼식",
     hint:"This compound noun combines 'marriage' with the suffix for 'ceremony.'"},

    {type:"match", pairs:[
      {trg:"사랑하다", src:"to love"},
      {trg:"걱정하다", src:"to worry"},
      {trg:"즐겁다", src:"to be enjoyable"},
      {trg:"친절하다", src:"to be kind"}
    ]}
  ]
};
export default LESSON_3;
