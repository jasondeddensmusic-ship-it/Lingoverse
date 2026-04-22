// Korean V2 B1 Gap Lesson 11. Speech, Communication, and Reference
// 20 teach cards + interleaved quizzes. Max 30 steps.

const LESSON_11 = {
  id:"kov2_b1gap_l11", title:"말과 소통", icon:"🗣️", xp:15, board:true,
  steps:[
    {type:"intro", title:"Speech, Communication, and Reference",
     desc:"Learn words for how we speak, express ideas, and refer to people. From emphasizing a point to telling a joke, these words power everyday Korean conversation.",
     goals:["Master 20 speech and communication words","Use verbs of expression and reference","Build natural dialogue with conversation markers"]},

    // ── Teach 1-4: Core speech verbs ──
    {type:"teach", trg:"강조하다", src:"to emphasize", pos:"verb", gender:null,
     note:"Hanja: 强調 (strong + tone).\nUsed in speeches and arguments.",
     example:"A: 선생님이 뭐라고 하셨어요?\nB: 시험 범위를 강조하셨어요.\nA: 어떤 부분을 강조하셨어요?\nB: 문법이 제일 중요하다고요.",
     exampleSrc:"A: What did the teacher say?\nB: She emphasized the exam scope.\nA: Which part did she emphasize?\nB: That grammar is the most important.",
     funFact:"Koreans often repeat a word twice to emphasize it: 진짜 진짜 (really really)."},

    {type:"teach", trg:"권하다", src:"to recommend", pos:"verb", gender:null,
     note:"Hanja: 勸 (advise, urge).\nStronger than 추천하다, more personal.",
     example:"A: 이 식당 어때요?\nB: 여기 불고기를 권해요.\nA: 다른 것도 괜찮아요?\nB: 네, 하지만 불고기가 제일 맛있어요.",
     exampleSrc:"A: How is this restaurant?\nB: I recommend the bulgogi here.\nA: Is anything else good too?\nB: Yes, but the bulgogi is the best.",
     funFact:"In Korean drinking culture, pouring a drink for someone is a way to 권하다 (recommend/urge) them to drink."},

    {type:"teach", trg:"떠들다", src:"to chatter, to be noisy", pos:"verb", gender:null,
     note:"Informal, slightly negative nuance.\nOften used by teachers scolding students.",
     example:"A: 교실이 너무 시끄러워요.\nB: 학생들이 계속 떠들어요.\nA: 선생님이 화내지 않아요?\nB: 벌써 두 번이나 조용히 하라고 했어요.",
     exampleSrc:"A: The classroom is so noisy.\nB: The students keep chattering.\nA: Doesn't the teacher get angry?\nB: She already told them to be quiet twice.",
     funFact:"The onomatopoeia 떠들떠들 imitates the sound of many people talking at once."},

    {type:"teach", trg:"끄덕이다", src:"to nod", pos:"verb", gender:null,
     note:"Physical gesture of agreement.\n끄덕끄덕 = nodding repeatedly.",
     example:"A: 이해했어요?\nB: 네. (끄덕끄덕)\nA: 그러면 다음 단계로 넘어갈게요.\nB: 좋아요, 계속하세요.",
     exampleSrc:"A: Did you understand?\nB: Yes. (nod nod)\nA: Then I will move on to the next step.\nB: Good, please continue.",
     funFact:"Korean body language: a slight nod means acknowledgment, while a deep bow shows respect."},

    // ── Quiz batch 1 ──
    {type:"mc",
     q:"선생님이 문법의 중요성을 ___하셨어요.",
     opts:["강조","권","떠들","끄덕이"],
     ans:"강조",
     hint:"The teacher stressed how important grammar is. Which verb means to stress or highlight?"},

    {type:"fb",
     s:"친구가 이 영화를 {1}서 같이 봤어요.",
     a:["권해"],
     opts:["권해","강조해","떠들어","끄덕여"],
     hint:"My friend suggested this movie and we watched it together. Which verb means to suggest?",
     sSrc:"My friend recommended this movie, so we watched it together."},

    // ── Teach 5-8: Nouns of communication ──
    {type:"teach", trg:"목소리", src:"voice", pos:"noun", gender:null,
     note:"Literally: 목 (throat) + 소리 (sound).\nCompound noun, very common.",
     example:"A: 전화 목소리가 좋네요.\nB: 감사해요. 원래 이런 목소리예요.\nA: 가수 같아요!\nB: 아, 노래는 잘 못해요.",
     exampleSrc:"A: Your phone voice sounds nice.\nB: Thank you. This is my natural voice.\nA: You sound like a singer!\nB: Oh, I'm not good at singing though.",
     funFact:"In Korean dramas, changing your 목소리 (voice) is a classic disguise trope."},

    {type:"teach", trg:"농담", src:"joke", pos:"noun", gender:null,
     note:"Hanja: 弄談 (play + talk).\n농담하다 = to joke.",
     example:"A: 왜 이렇게 웃어요?\nB: 친구가 재미있는 농담을 했어요.\nA: 어떤 농담이었어요?\nB: 말하면 재미없어요. 분위기가 중요해요.",
     exampleSrc:"A: Why are you laughing so much?\nB: My friend told a funny joke.\nA: What joke was it?\nB: If I tell you, it won't be funny. The atmosphere matters.",
     funFact:"아재개그 (ajae gag) means 'dad joke' in Korean. Very popular and intentionally corny."},

    {type:"teach", trg:"거짓말", src:"lie, falsehood", pos:"noun", gender:null,
     note:"거짓 (false) + 말 (words).\n거짓말하다 = to tell a lie.",
     example:"A: 정말이에요? 거짓말 아니에요?\nB: 거짓말 아니에요! 진짜예요.\nA: 믿기 어려운데요.\nB: 사진 보여줄까요?",
     exampleSrc:"A: Is it true? It's not a lie?\nB: It's not a lie! It's real.\nA: It's hard to believe.\nB: Shall I show you a photo?",
     funFact:"The children's game where you guess lies is called 거짓말 탐지기 (lie detector)."},

    {type:"teach", trg:"글쎄", src:"well..., hmm", pos:"intj", gender:null,
     note:"Hesitation marker. Shows uncertainty.\nUsed when you are not sure how to answer.",
     example:"A: 이번 시험 잘 봤어요?\nB: 글쎄요... 잘 모르겠어요.\nA: 어려웠어요?\nB: 글쎄, 어떤 문제는 쉬웠는데 어떤 건 어려웠어요.",
     exampleSrc:"A: Did you do well on the exam?\nB: Well... I'm not sure.\nA: Was it hard?\nB: Hmm, some questions were easy but some were hard.",
     funFact:"Adding -요 (글쎄요) makes it politer. Without -요 it sounds more casual or dismissive."},

    // ── Quiz batch 2 ──
    {type:"match", pairs:[
      {trg:"목소리", src:"voice"},
      {trg:"농담", src:"joke"},
      {trg:"거짓말", src:"lie"},
      {trg:"글쎄", src:"well..., hmm"}
    ]},

    // ── Teach 9-12: Expression and reference verbs ──
    {type:"teach", trg:"가리키다", src:"to point at, to indicate", pos:"verb", gender:null,
     note:"Physical pointing or abstract indication.\n손가락으로 가리키다 = point with a finger.",
     example:"A: 어디예요? 잘 모르겠어요.\nB: 저기요. 제가 가리키는 곳이요.\nA: 아, 저 건물이요?\nB: 네, 파란 간판을 가리키고 있어요.",
     exampleSrc:"A: Where is it? I'm not sure.\nB: Over there. Where I'm pointing.\nA: Oh, that building?\nB: Yes, I'm pointing at the blue sign.",
     funFact:"Pointing directly at people is considered rude in Korea. Use an open hand instead."},

    {type:"teach", trg:"나타내다", src:"to express, to represent", pos:"verb", gender:null,
     note:"Hanja: root from 表 (show, express).\nMore formal than 표현하다 in some contexts.",
     example:"A: 이 그림이 무엇을 나타내요?\nB: 한국의 봄을 나타내요.\nA: 색깔이 정말 예뻐요.\nB: 화가가 감정을 잘 나타냈어요.",
     exampleSrc:"A: What does this painting represent?\nB: It represents spring in Korea.\nA: The colors are really beautiful.\nB: The artist expressed emotions well.",
     funFact:"Korean uses different verbs for expressing emotions (나타내다) vs expressing in words (표현하다)."},

    {type:"teach", trg:"나타나다", src:"to appear, to show up", pos:"verb", gender:null,
     note:"Intransitive form of 나타내다.\nSomething appears on its own.",
     example:"A: 아까 갑자기 고양이가 나타났어요.\nB: 어디에서 나타났어요?\nA: 부엌에서요. 문이 닫혀 있었는데.\nB: 그 고양이 마술사인가 봐요.",
     exampleSrc:"A: A cat suddenly appeared earlier.\nB: Where did it appear?\nA: In the kitchen. The door was closed though.\nB: That cat must be a magician.",
     funFact:"In Korean fairy tales, 나타나다 is the classic verb for when a magical being shows up."},

    {type:"teach", trg:"대하다", src:"to face, to treat", pos:"verb", gender:null,
     note:"Hanja: 對 (facing, toward).\nUsed with -에 대해서 = about, regarding.",
     example:"A: 후배를 어떻게 대해요?\nB: 항상 친절하게 대해요.\nA: 그래서 인기가 많은 거예요.\nB: 사람을 잘 대하는 게 중요하다고 생각해요.",
     exampleSrc:"A: How do you treat your juniors?\nB: I always treat them kindly.\nA: That's why you're popular.\nB: I think it's important to treat people well.",
     funFact:"The expression -에 대해서 (regarding, about) is one of the most common Korean grammar patterns."},

    // ── Quiz batch 3 ──
    {type:"fb",
     s:"이 기호는 위험을 {1}.",
     a:["나타내요"],
     opts:["나타내요","나타나요","가리켜요","대해요"],
     hint:"This symbol represents danger. Which verb means to represent or express something?",
     sSrc:"This symbol represents danger."},

    {type:"mc",
     q:"갑자기 길에서 친구가 ___.",
     opts:["가리켰어요","나타났어요","대했어요","나타냈어요"],
     ans:"나타났어요",
     hint:"A friend showed up suddenly on the street. Which is the intransitive appear verb?"},

    // ── Teach 13-16: Pronouns and reference ──
    {type:"teach", trg:"맞서다", src:"to confront, to stand against", pos:"verb", gender:null,
     note:"맞 (face-to-face) + 서다 (stand).\nUsed for bravely opposing something.",
     example:"A: 불공평한 일이 있으면 어떻게 해요?\nB: 맞서야 한다고 생각해요.\nA: 무섭지 않아요?\nB: 무섭지만 그래도 맞서야 해요.",
     exampleSrc:"A: What do you do when something is unfair?\nB: I think you have to confront it.\nA: Aren't you scared?\nB: I'm scared, but I still have to stand against it.",
     funFact:"Korean history celebrates figures who 맞섰다 (stood against) injustice. The spirit of resistance is deeply valued."},

    {type:"teach", trg:"당신", src:"you (formal/literary)", pos:"pron", gender:null,
     note:"Very formal or literary 'you.'\nRarely used in casual conversation.",
     example:"A: 당신은 누구예요?\nB: 저는 새로 온 직원이에요.\nA: 아, 반갑습니다.\nB: 네, 잘 부탁드립니다.",
     exampleSrc:"A: Who are you?\nB: I am the new employee.\nA: Ah, nice to meet you.\nB: Yes, pleased to meet you.",
     funFact:"Between married couples, 당신 can be a term of endearment, like 'dear' or 'darling.'"},

    {type:"teach", trg:"너희", src:"you all (informal)", pos:"pron", gender:null,
     note:"Plural informal 'you.'\n너 (you, casual) + 희 (plural suffix).",
     example:"A: 너희 내일 뭐 해?\nB: 우리 영화 보러 가려고.\nA: 나도 같이 가도 돼?\nB: 당연하지! 같이 가자.",
     exampleSrc:"A: What are you all doing tomorrow?\nB: We're planning to go see a movie.\nA: Can I come too?\nB: Of course! Let's go together.",
     funFact:"In formal settings, use 여러분 instead. 너희 is only for people younger or very close to you."},

    {type:"teach", trg:"그런", src:"such, that kind of", pos:"adj", gender:null,
     note:"Shortened from 그러한.\nVery common demonstrative adjective.",
     example:"A: 그런 일이 있었어요?\nB: 네, 정말 놀라웠어요.\nA: 그런 경험은 처음이죠?\nB: 네, 그런 줄 몰랐어요.",
     exampleSrc:"A: That kind of thing happened?\nB: Yes, it was really surprising.\nA: It's your first such experience, right?\nB: Yes, I didn't know it would be like that.",
     funFact:"The 그 series: 그런 (such), 그렇게 (like that), 그래서 (so), 그러면 (then). All from the root 그러-."},

    // ── Quiz batch 4 ──
    {type:"match", pairs:[
      {trg:"당신", src:"you (formal)"},
      {trg:"너희", src:"you all (informal)"},
      {trg:"맞서다", src:"to confront"},
      {trg:"그런", src:"such, that kind of"}
    ]},

    {type:"fb",
     s:"{1} 일이 왜 생겼는지 모르겠어요.",
     a:["그런"],
     opts:["그런","당신","너희","맞서"],
     hint:"I don't know why that kind of thing happened. Which demonstrative means 'such' or 'that kind of'?",
     sSrc:"I don't know why such a thing happened."},

    // ── Teach 17-20: Finishing verbs ──
    {type:"teach", trg:"걔", src:"that kid (contraction)", pos:"pron", gender:null,
     note:"Contraction of 그 아이 (that child).\nVery casual, used among close friends.",
     example:"A: 걔 요즘 뭐 해?\nB: 걔 대학교 다녀.\nA: 진짜? 무슨 전공이야?\nB: 경영학이래.",
     exampleSrc:"A: What's that kid up to these days?\nB: She goes to university.\nA: Really? What's her major?\nB: She says it's business administration.",
     funFact:"Other contractions: 얘 = 이 아이 (this kid), 쟤 = 저 아이 (that kid over there)."},

    {type:"teach", trg:"그러하다", src:"to be so, to be like that", pos:"adj", gender:null,
     note:"Formal root of 그렇다.\nRarely used directly. Gives rise to 그런, 그래, 그렇게.",
     example:"A: 상황이 그러하니 이해해 주세요.\nB: 네, 알겠습니다.\nA: 사정이 그러해서 죄송합니다.\nB: 괜찮습니다. 충분히 이해합니다.",
     exampleSrc:"A: Since the situation is so, please understand.\nB: Yes, I understand.\nA: I'm sorry that circumstances are like this.\nB: It's okay. I fully understand.",
     funFact:"This formal root is mostly seen in written Korean. In speech, Koreans use 그렇다 or just 그래."},

    {type:"teach", trg:"마치다", src:"to finish, to complete", pos:"verb", gender:null,
     note:"More formal than 끝내다.\nUsed for completing tasks, courses, events.",
     example:"A: 수업 다 마쳤어요?\nB: 네, 방금 마쳤어요.\nA: 그러면 같이 밥 먹으러 갈까요?\nB: 좋아요! 배고팠어요.",
     exampleSrc:"A: Have you finished class?\nB: Yes, I just finished.\nA: Then shall we go eat together?\nB: Sounds good! I was hungry.",
     funFact:"At Korean school ceremonies, the principal says 이상으로 마치겠습니다 (I will conclude with this)."},

    {type:"teach", trg:"맞다", src:"to be correct, to be right", pos:"verb", gender:null,
     note:"Also means: to fit, to be hit.\nContext determines meaning.",
     example:"A: 이게 맞아요?\nB: 네, 맞아요.\nA: 진짜요? 확실해요?\nB: 네, 제가 확인했어요. 맞아요.",
     exampleSrc:"A: Is this correct?\nB: Yes, that's right.\nA: Really? Are you sure?\nB: Yes, I checked. It's correct.",
     funFact:"맞다 has many meanings: correct, to fit, to get hit, to receive. All share the root idea of 'meeting/matching.'"},

    // ── Final quiz batch ──
    {type:"fb",
     s:"이 답이 {1}? 확인해 주세요.",
     a:["맞아요"],
     opts:["맞아요","마쳤어요","나타났어요","권했어요"],
     hint:"Is this answer correct? Please check. Which word means to be right or correct?",
     sSrc:"Is this answer correct? Please check."},

    {type:"match", pairs:[
      {trg:"마치다", src:"to finish"},
      {trg:"강조하다", src:"to emphasize"},
      {trg:"거짓말", src:"lie"},
      {trg:"끄덕이다", src:"to nod"}
    ]}
  ]
};

export default LESSON_11;
