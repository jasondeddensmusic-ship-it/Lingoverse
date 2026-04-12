// Korean A2 Gap - Lesson 9: Classroom Supplies & Study (15 words)
const LESSON_9 = {
  id:"kov2_a2gap_l9", title:"교실과 공부", icon:"📓", xp:15, board:true,
  steps:[
    {type:"intro", title:"Classroom Supplies & Study",
     desc:"Learn vocabulary for classroom objects, study activities, and language names. Essential for talking about your learning routine.",
     goals:["Name common classroom supplies in Korean","Use study-related verbs: practice, study, explain","Identify language names: Korean, Japanese, Chinese"]},

    // --- Teach block 1: Writing supplies ---
    {type:"teach", trg:"공책", src:"notebook", pos:"noun", gender:null,
     note:"Compound: 공 (empty) + 책 (book). A blank book for writing.",
     example:"A: 공책 있어요?\nB: 네, 여기 새 공책이에요.",
     exampleSrc:"A: Do you have a notebook?\nB: Yes, here's a new notebook.",
     funFact:"공 means 'empty' and 책 means 'book.' So a notebook is literally an 'empty book' waiting to be filled."},

    {type:"teach", trg:"노트", src:"note; notebook", pos:"noun", gender:null,
     note:"Loanword from English 'note.' Also used for notebooks.",
     example:"A: 노트에 적어 주세요.\nB: 네, 적을게요.",
     exampleSrc:"A: Please write it in the notebook.\nB: Okay, I'll write it down.",
     funFact:"Both 공책 and 노트 mean notebook. 공책 is more traditional, 노트 is casual and modern."},

    {type:"teach", trg:"볼펜", src:"ballpoint pen", pos:"noun", gender:null,
     note:"Compound: 볼 (ball, from English) + 펜 (pen, from English).",
     example:"A: 볼펜 빌려줄 수 있어요?\nB: 네, 파란색이에요.",
     exampleSrc:"A: Can you lend me a ballpoint pen?\nB: Yes, it's a blue one.",
     funFact:"A hybrid loanword combining English 'ball' and 'pen.' Korean also uses 연필 (pencil, native word)."},

    {type:"teach", trg:"종이", src:"paper", pos:"noun", gender:null,
     note:"Native Korean word for paper.",
     example:"A: 종이 한 장 주세요.\nB: 여기 있어요.",
     exampleSrc:"A: Please give me a sheet of paper.\nB: Here you go.",
     funFact:"The counter for paper is 장 (sheet). Korea invented metal movable type printing before Gutenberg."},

    {type:"teach", trg:"칠판", src:"blackboard; chalkboard", pos:"noun", gender:null,
     note:"Compound: 칠 (lacquer/paint) + 판 (board).",
     example:"A: 칠판 잘 보여요?\nB: 네, 글씨가 커요.",
     exampleSrc:"A: Can you see the blackboard well?\nB: Yes, the writing is big.",
     funFact:"Many Korean classrooms have switched to whiteboards or digital screens, but 칠판 remains the go-to word."},

    {type:"teach", trg:"지우개", src:"eraser", pos:"noun", gender:null,
     note:"From 지우다 (to erase) + 개 (tool suffix).",
     example:"A: 지우개 있어요?\nB: 네, 여기요.",
     exampleSrc:"A: Do you have an eraser?\nB: Yes, here.",
     funFact:"The suffix 개 turns verbs into tool nouns: 지우다 (erase) becomes 지우개, 열다 (open) becomes 열쇠 (key, irregular form)."},

    // --- Quiz block 1 ---
    {type:"mc",
     q:"'공책'에서 '공'은 무슨 뜻이에요?",
     opts:["좋은","빈, 비어 있는","큰","새로운"],
     ans:"빈, 비어 있는",
     hint:"Think about what a brand new notebook looks like: pages with nothing written on them yet."},

    {type:"fb",
     s:"선생님이 {1}에 글씨를 써요.",
     a:["칠판"],
     opts:["칠판","종이","공책","노트"],
     hint:"The large board at the front of a classroom where teachers write for everyone to see.",
     sSrc:"The teacher writes on the {1}."},

    {type:"match", pairs:[
      {trg:"볼펜", src:"ballpoint pen"},
      {trg:"종이", src:"paper"},
      {trg:"지우개", src:"eraser"},
      {trg:"공책", src:"notebook"}
    ]},

    // --- Teach block 2: Study verbs ---
    {type:"teach", trg:"연습", src:"practice", pos:"noun", gender:null,
     note:"From hanja 練 (train) + 習 (learn). Practice or drill.",
     example:"A: 연습 많이 했어요?\nB: 네, 매일 했어요.",
     exampleSrc:"A: Did you practice a lot?\nB: Yes, I practiced every day.",
     funFact:"Korean students live by 연습: piano 연습, 운동 연습, 발음 연습. Practice makes perfect is a Korean value."},

    {type:"teach", trg:"연습하다", src:"to practice", pos:"verb", gender:null,
     note:"연습 + 하다. Standard noun + 하다 verb pattern.",
     example:"A: 매일 한국어를 연습해요?\nB: 네, 30분씩 해요.",
     exampleSrc:"A: Do you practice Korean every day?\nB: Yes, for 30 minutes each day.",
     funFact:"The noun + 하다 pattern is one of Korean's most productive: 공부하다, 연습하다, 운동하다, 요리하다."},

    {type:"teach", trg:"공부하다", src:"to study", pos:"verb", gender:null,
     note:"공부 (study) + 하다 (to do). The most common study verb.",
     example:"A: 뭐 공부해요?\nB: 한국어를 공부해요.",
     exampleSrc:"A: What do you study?\nB: I study Korean.",
     funFact:"공부 from hanja 工 (work) + 夫 (man). Studying is considered the noblest 'work' in Confucian-influenced Korea."},

    {type:"teach", trg:"설명하다", src:"to explain", pos:"verb", gender:null,
     note:"설명 (explanation) + 하다. From hanja 說 (speak) + 明 (bright).",
     example:"A: 다시 설명해 주세요.\nB: 네, 천천히 할게요.",
     exampleSrc:"A: Please explain again.\nB: Okay, I'll go slowly.",
     funFact:"The hanja literally means 'to speak brightly,' making something clear. Used constantly in classrooms."},

    {type:"teach", trg:"잘하다", src:"to be good at; to do well", pos:"verb", gender:null,
     note:"잘 (well) + 하다 (to do). Opposite: 못하다 (to be bad at).",
     example:"A: 한국어 잘해요?\nB: 아직 잘 못해요.",
     exampleSrc:"A: Are you good at Korean?\nB: I'm not good at it yet.",
     funFact:"잘하다 is both a compliment and an aspiration. 잘했어요! (You did well!) is the standard Korean praise."},

    // --- Quiz block 2 ---
    {type:"mc",
     q:"'잘했어요!'는 어떤 뜻이에요?",
     opts:["미안하다는 말","인사하는 말","질문하는 말","칭찬하는 말"],
     ans:"칭찬하는 말",
     hint:"Teachers and parents say this when someone performs well. It expresses praise and encouragement."},

    {type:"fb",
     s:"매일 한국어를 {1}면 잘할 수 있어요.",
     a:["연습하"],
     opts:["연습하","공부하","설명하","잘하"],
     hint:"This verb means to drill or rehearse something repeatedly to improve your skills.",
     sSrc:"If you {1} Korean every day, you can become good at it."},

    // --- Teach block 3: Languages ---
    {type:"teach", trg:"한글", src:"Hangul (Korean alphabet)", pos:"noun", gender:null,
     note:"The Korean writing system. 한 (Korean) + 글 (writing).",
     example:"A: 한글 읽을 수 있어요?\nB: 네, 한글은 쉬워요!",
     exampleSrc:"A: Can you read Hangul?\nB: Yes, Hangul is easy!",
     funFact:"Created in 1443 by King Sejong the Great. Designed to be simple enough for common people to learn in one day."},

    {type:"teach", trg:"한국말", src:"Korean language (spoken)", pos:"noun", gender:null,
     note:"한국 (Korea) + 말 (speech). Casual term for Korean.",
     example:"A: 한국말 할 수 있어요?\nB: 조금 할 수 있어요.",
     exampleSrc:"A: Can you speak Korean?\nB: I can speak a little.",
     funFact:"한국말 emphasizes spoken Korean, while 한국어 (한국 + 어) is the more formal/academic term for the language."},

    {type:"teach", trg:"일본어", src:"Japanese language", pos:"noun", gender:null,
     note:"일본 (Japan) + 어 (language). Formal language name.",
     example:"A: 일본어도 공부해요?\nB: 아니요, 한국어만 해요.",
     exampleSrc:"A: Do you study Japanese too?\nB: No, only Korean.",
     funFact:"The 어 (語) suffix makes formal language names: 한국어, 일본어, 영어 (English), 중국어 (Chinese)."},

    {type:"teach", trg:"중국어", src:"Chinese language", pos:"noun", gender:null,
     note:"중국 (China) + 어 (language).",
     example:"A: 중국어 어려워요?\nB: 네, 성조가 어려워요.",
     exampleSrc:"A: Is Chinese difficult?\nB: Yes, the tones are difficult.",
     funFact:"Despite 60% of Korean words having Chinese roots, spoken Chinese and Korean are completely different language families."},

    // --- Quiz block 3 ---
    {type:"match", pairs:[
      {trg:"한글", src:"Korean alphabet"},
      {trg:"한국말", src:"Korean language"},
      {trg:"일본어", src:"Japanese language"},
      {trg:"중국어", src:"Chinese language"}
    ]},

    {type:"fb",
     s:"세종대왕이 {1}을 만들었어요.",
     a:["한글"],
     opts:["한글","한국말","한자","일본어"],
     hint:"The Korean writing system invented by King Sejong in 1443 for the common people.",
     sSrc:"King Sejong created {1}."},

    {type:"mc",
     q:"'한국어'와 '한국말'의 차이는 뭐예요?",
     opts:["같은 뜻이에요","한국어는 격식, 한국말은 일상","한국어는 글, 한국말은 한자","한국말은 일본어에요"],
     ans:"한국어는 격식, 한국말은 일상",
     hint:"One uses the Sino-Korean suffix 어 (formal), the other uses the native Korean word 말 (casual speech)."}
  ]
};
export default LESSON_9;
