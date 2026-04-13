// Korean B2 — Batch 2, Lesson 14: Diplomacy and Representation
// Words: 대사, 대상자, 대신하다, 대여섯, 대응, 대응하다, 대입, 대접, 대접하다, 대중교통, 대중적, 대처하다, 대체, 대체로, 대출, 대충, 대표하다, 대학교수, 대학원, 대합실

const LESSON_14 = {
  id:"kov2_b2b2_l14", title:"대응과 대표", icon:"🏛️", xp:15, board:true,
  steps:[
    {type:"intro", title:"대응과 대표",
     desc:"Learn words about response, representation, and public systems. These Sino-Korean compounds are core vocabulary for news, politics, and professional life.",
     goals:["Master 20 words with the 대 (big/represent) prefix","Understand formal response and action vocabulary","Build fluency with institutional and social terms"]},

    {type:"teach", trg:"대사", src:"ambassador; dialogue (in a play/film)", pos:"noun", gender:null,
     note:"Two Hanja: 大使 (ambassador) or 臺詞 (stage words).\nA high-ranking diplomat, or lines in a script.",
     example:"A: 영화에서 이 대사가 제일 유명해요.\nB: 맞아요, 많은 사람들이 따라 해요.",
     exampleSrc:"A: This dialogue is the most famous from the movie.\nB: Right, many people imitate it.",
     funFact:"대사관 (大使館, embassy) uses the ambassador meaning. 명대사 (famous line) uses the dialogue meaning."},

    {type:"teach", trg:"대상자", src:"subject, target person", pos:"noun", gender:null,
     note:"대상 (target/object) + 자 (person).\nA person who is the target of something.",
     example:"A: 이번 지원 대상자가 누구예요?\nB: 만 65세 이상의 시민입니다.",
     exampleSrc:"A: Who are the eligible recipients this time?\nB: Citizens aged 65 and over.",
     funFact:"대상자 is bureaucratic Korean: 조사 대상자 (investigation subject), 지원 대상자 (support recipient)."},

    {type:"teach", trg:"대신하다", src:"to substitute for, to replace", pos:"verb", gender:null,
     note:"대신 (instead) + 하다.\nTo take the place of someone or something.",
     example:"A: 제가 부장님을 대신해서 회의에 참석할게요.\nB: 감사합니다.",
     exampleSrc:"A: I will attend the meeting on behalf of the director.\nB: Thank you.",
     funFact:"대신 as an adverb (instead) is extremely common: 커피 대신 차를 마실게요 (I will have tea instead of coffee)."},

    {type:"teach", trg:"대여섯", src:"about five or six", pos:"noun", gender:null,
     note:"대 (approximately) + 여섯 (six).\nAn approximate number, around 5-6.",
     example:"A: 사과가 대여섯 개 남았어요.\nB: 충분하네요.",
     exampleSrc:"A: There are about five or six apples left.\nB: That is enough.",
     funFact:"Korean has built-in approximate numbers: 두세 (2-3), 서너 (3-4), 대여섯 (5-6), 예닐곱 (6-7)."},

    {type:"teach", trg:"대응", src:"response, countermeasure", pos:"noun", gender:null,
     note:"Sino-Korean. 對 (face) + 應 (respond).\nFacing a situation and responding to it.",
     example:"A: 정부의 대응이 빨랐어요.\nB: 이번에는 잘 대처했네요.",
     exampleSrc:"A: The government's response was fast.\nB: They handled it well this time.",
     funFact:"대응 is more strategic than 반응 (reaction). 대응 implies a planned response, 반응 is automatic."},

    {type:"teach", trg:"대응하다", src:"to respond to, to counter", pos:"verb", gender:null,
     note:"대응 (response) + 하다.\nTo take action in response to a situation.",
     example:"A: 위기에 어떻게 대응해야 하나요?\nB: 침착하게 계획을 세우세요.",
     exampleSrc:"A: How should we respond to the crisis?\nB: Calmly make a plan.",
     funFact:"위기에 대응하다 (respond to a crisis) is a key phrase in Korean leadership and management discourse."},

    {type:"mc",
     q:"'대응'과 '반응'의 차이는?",
     opts:["대응은 계획적이고 반응은 자동적이다","대응이 더 빠르다","반응이 더 전략적이다","차이가 없다"],
     ans:"대응은 계획적이고 반응은 자동적이다",
     hint:"One implies a strategic, planned response while the other is an automatic, immediate reaction."},

    {type:"teach", trg:"대입", src:"substitution; college entrance", pos:"noun", gender:null,
     note:"Sino-Korean. 代入 (substitute into) or 大入 (big entry).\nSubstituting a value, or entering university.",
     example:"A: 이 공식에 숫자를 대입해 보세요.\nB: x에 3을 대입하면 돼요?",
     exampleSrc:"A: Try substituting numbers into this formula.\nB: Should I substitute 3 for x?",
     funFact:"대입 시험 (college entrance exam) is life-defining in Korea. The 수능 (CSAT) determines university admission."},

    {type:"teach", trg:"대접", src:"treatment, hospitality", pos:"noun", gender:null,
     note:"Sino-Korean. 待 (treat) + 接 (receive).\nHow you treat or serve a guest.",
     example:"A: 손님 대접을 잘해야 해요.\nB: 음식을 많이 준비했어요.",
     exampleSrc:"A: We must treat the guests well.\nB: I prepared a lot of food.",
     funFact:"Korean hospitality culture revolves around 대접. Overfeeding guests is considered the highest form of 대접."},

    {type:"teach", trg:"대접하다", src:"to treat, to host, to serve", pos:"verb", gender:null,
     note:"대접 (hospitality) + 하다.\nTo provide hospitality or service to someone.",
     example:"A: 제가 오늘 점심 대접할게요.\nB: 정말요? 감사합니다!",
     exampleSrc:"A: I will treat you to lunch today.\nB: Really? Thank you!",
     funFact:"한턱내다 is casual for 'treat someone to a meal.' 대접하다 is more formal and covers broader hospitality."},

    {type:"teach", trg:"대중교통", src:"public transportation", pos:"noun", gender:null,
     note:"Sino-Korean. 大衆 (masses) + 交通 (traffic).\nTransport systems for the general public.",
     example:"A: 서울의 대중교통은 편리해요.\nB: 지하철이 특히 좋죠.",
     exampleSrc:"A: Public transportation in Seoul is convenient.\nB: The subway is especially good.",
     funFact:"Seoul's subway system is one of the world's best. 대중교통 covers buses, subway, and taxis."},

    {type:"teach", trg:"대중적", src:"popular, for the masses", pos:"noun", gender:null,
     note:"대중 (masses) + 적 (-like).\nAppealing to or intended for the general public.",
     example:"A: 이 노래는 대중적이에요.\nB: 누구나 좋아할 만한 곡이죠.",
     exampleSrc:"A: This song is popular with the masses.\nB: It is a song anyone would like.",
     funFact:"대중적 vs 마니아적 (niche). K-pop is designed to be maximally 대중적. Indie music is more 마니아적."},

    {type:"fb",
     s:"서울의 {1}은 정말 편리해요.",
     a:["대중교통"],
     opts:["대중교통","대학원","대합실","대도시"],
     hint:"The transport system used by the general public: buses, subway, etc.",
     sSrc:"Seoul's {1} is really convenient."},

    {type:"teach", trg:"대처하다", src:"to cope with, to deal with", pos:"verb", gender:null,
     note:"Sino-Korean. 對 (face) + 處 (place/handle) + 하다.\nTo handle or cope with a situation.",
     example:"A: 이런 상황에 어떻게 대처해요?\nB: 경험에서 배운 대로 해요.",
     exampleSrc:"A: How do you cope with this kind of situation?\nB: I do as I learned from experience.",
     funFact:"대처하다 focuses on coping/managing. 대응하다 focuses on responding/countering. Subtle but different."},

    {type:"teach", trg:"대체", src:"on earth, what the (emphasis); replacement", pos:"adv", gender:null,
     note:"Two uses: 1. Emphatic question word (大體).\n2. Replacement/substitution (代替).",
     example:"A: 대체 무슨 일이 있었던 거야?\nB: 긴 이야기야, 앉아서 들어.",
     exampleSrc:"A: What on earth happened?\nB: It is a long story. Sit down and listen.",
     funFact:"대체 in questions adds frustration/urgency. 도대체 is even stronger. 대체 에너지 uses the 'replacement' meaning."},

    {type:"teach", trg:"대체로", src:"on the whole, generally", pos:"adv", gender:null,
     note:"대체 (roughly, 大體) + 로 (by way of).\nLooking at the big picture, generally speaking.",
     example:"A: 결과가 대체로 좋았어요.\nB: 다행이네요.",
     exampleSrc:"A: The results were generally good.\nB: That is fortunate.",
     funFact:"대체로 is softer than 전반적으로 (overall). It leaves room for exceptions."},

    {type:"teach", trg:"대출", src:"loan, borrowing", pos:"noun", gender:null,
     note:"Sino-Korean. 貸 (lend) + 出 (out).\nBorrowing money or library books.",
     example:"A: 은행에서 대출을 받았어요.\nB: 이자율이 어떻게 돼요?",
     exampleSrc:"A: I got a loan from the bank.\nB: What is the interest rate?",
     funFact:"대출 covers bank loans and library borrowing. 도서 대출 (book checkout) and 주택 대출 (mortgage) are both 대출."},

    {type:"teach", trg:"대충", src:"roughly, carelessly, haphazardly", pos:"adv", gender:null,
     note:"Native Korean. Doing something without\ncare or precision.",
     example:"A: 대충 하지 말고 제대로 해.\nB: 알겠어, 다시 할게.",
     exampleSrc:"A: Do not do it carelessly. Do it properly.\nB: Okay, I will redo it.",
     funFact:"대충 has a negative nuance of carelessness. 대략/대강 are neutral approximations. Important distinction."},

    {type:"mc",
     q:"'대출'이 사용되는 곳 두 가지는?",
     opts:["은행과 도서관","병원과 학교","식당과 카페","공원과 극장"],
     ans:"은행과 도서관",
     hint:"You can borrow money from one place and borrow books from another. Both use this word."},

    {type:"teach", trg:"대표하다", src:"to represent", pos:"verb", gender:null,
     note:"대표 (representative) + 하다.\nTo stand for or symbolize something.",
     example:"A: 이 작품이 한국 문화를 대표해요.\nB: 세계적으로도 유명하죠.",
     exampleSrc:"A: This work represents Korean culture.\nB: It is famous worldwide too.",
     funFact:"대표 (representative) is also used for CEO in Korean: 대표이사. A very versatile Sino-Korean word."},

    {type:"teach", trg:"대학교수", src:"university professor", pos:"noun", gender:null,
     note:"대학 (university) + 교수 (professor).\nA professor at a university.",
     example:"A: 대학교수가 되고 싶어요.\nB: 박사 학위가 필요해요.",
     exampleSrc:"A: I want to become a university professor.\nB: You need a doctoral degree.",
     funFact:"In Korea, 교수님 is one of the most respected titles. Professors are addressed as 교수님, never by first name."},

    {type:"teach", trg:"대학원", src:"graduate school", pos:"noun", gender:null,
     note:"Sino-Korean. 大學 (university) + 院 (institution).\nPost-undergraduate academic institution.",
     example:"A: 대학원에 진학할 거예요?\nB: 네, 석사 과정을 할 거예요.",
     exampleSrc:"A: Will you go to graduate school?\nB: Yes, I will do a master's program.",
     funFact:"석사 (master's) and 박사 (doctoral) programs are both within 대학원. Korea has very high graduate enrollment."},

    {type:"teach", trg:"대합실", src:"waiting room (at a station)", pos:"noun", gender:null,
     note:"Sino-Korean. 待合 (wait together) + 室 (room).\nA room where travelers wait.",
     example:"A: 대합실에서 기다리세요.\nB: 버스가 곧 올 거예요.",
     exampleSrc:"A: Please wait in the waiting room.\nB: The bus will come soon.",
     funFact:"대합실 is specific to transportation hubs. 대기실 (waiting room) is more general, used in hospitals and offices."},

    {type:"match", pairs:[
      {trg:"대출", src:"loan"},
      {trg:"대학원", src:"graduate school"},
      {trg:"대중교통", src:"public transport"},
      {trg:"대접", src:"hospitality"},
      {trg:"대표하다", src:"to represent"}
    ]},

    {type:"fb",
     s:"이 작품은 한국 문화를 {1}.",
     a:["대표한다"],
     opts:["대표한다","대응한다","대처한다","대접한다"],
     hint:"To stand for, symbolize, or be the iconic example of something.",
     sSrc:"This work {1} Korean culture."}
  ]
};
export default LESSON_14;
