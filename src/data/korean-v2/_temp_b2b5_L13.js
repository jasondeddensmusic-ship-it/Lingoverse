// Korean B2 — Batch 5, Lesson 13: Western World and Documents
// Words: 생활용품, 생활환경, 서구, 서너, 서늘하다, 서랍, 서류, 서명, 서명하다, 서민, 서부, 서서히, 서양인, 서적, 서클, 서투르다, 서툴다, 석, 석사, 선

const LESSON_13 = {
  id:"kov2_b2b5_l13", title:"서류와 서명", icon:"📋", xp:15, board:true,
  steps:[
    {type:"intro", title:"서류와 서명",
     desc:"Learn vocabulary about living supplies, the Western world, documents, and signatures. This lesson covers essential words for administrative tasks and everyday descriptions.",
     goals:["Master 20 words about documents, the West, and daily objects","Understand directional/geographic compounds with 서 (west)","Use formal vocabulary for official and academic contexts"]},

    {type:"teach", trg:"생활용품", src:"daily necessities, household goods", pos:"noun", gender:null,
     note:"생활 (life) + 용품 (supplies).\nItems needed for everyday living.",
     example:"A: 생활용품을 사러 마트에 가자.\nB: 좋아, 뭐가 필요해?",
     exampleSrc:"A: Let's go to the mart to buy daily necessities.\nB: Okay, what do we need?",
     funFact:"다이소 (Daiso) is Korea's most popular 생활용품 store, where most items cost 1,000-5,000 won."},

    {type:"teach", trg:"생활환경", src:"living environment", pos:"noun", gender:null,
     note:"생활 (life) + 환경 (environment).\nThe surroundings in which one lives.",
     example:"A: 생활환경이 건강에 큰 영향을 줘.\nB: 맞아, 깨끗한 환경이 중요해.",
     exampleSrc:"A: The living environment has a big impact on health.\nB: Right, a clean environment is important.",
     funFact:"Korean apartment complexes compete on 생활환경: parks, schools, transport access are key selling points."},

    {type:"teach", trg:"서구", src:"the West, Western countries", pos:"noun", gender:null,
     note:"Sino-Korean. 西 (west) + 歐 (Europe).\nWestern Europe and the broader Western world.",
     example:"A: 서구 문화가 한국에 많은 영향을 줬어.\nB: 음식, 패션, 음악 다 그렇지.",
     exampleSrc:"A: Western culture has greatly influenced Korea.\nB: Food, fashion, music, all of it.",
     funFact:"서구화 (Westernization) was a major topic in Korean discourse during the 20th century modernization period."},

    {type:"teach", trg:"서너", src:"three or four, a few", pos:"noun", gender:null,
     note:"서 (three, archaic) + 너 (four, archaic).\nApproximately three to four.",
     example:"A: 서너 명이 오면 충분해.\nB: 알겠어, 세 명만 부를게.",
     exampleSrc:"A: Three or four people will be enough.\nB: Got it, I will invite just three.",
     funFact:"Korean has approximate number pairs: 두세 (2-3), 서너 (3-4), 대여섯 (5-6), 예닐곱 (6-7)."},

    {type:"teach", trg:"서늘하다", src:"to be cool, to be chilly", pos:"adj", gender:null,
     note:"Native Korean adjective.\nPleasantly cool or slightly cold.",
     example:"A: 가을 바람이 서늘하다.\nB: 겉옷을 가져가는 게 좋겠다.",
     exampleSrc:"A: The autumn wind is cool.\nB: It would be good to bring a jacket.",
     funFact:"서늘하다 is pleasant coolness. 차갑다 is outright cold. 시원하다 is refreshingly cool. Each has a different feel."},

    {type:"teach", trg:"서랍", src:"drawer", pos:"noun", gender:null,
     note:"Native Korean word.\nA sliding compartment in furniture.",
     example:"A: 열쇠가 서랍에 있어.\nB: 어느 서랍? 위에? 아래?",
     exampleSrc:"A: The key is in the drawer.\nB: Which drawer? Top? Bottom?",
     funFact:"서랍장 is a chest of drawers. Korean apartments typically have built-in 서랍 in bedroom closets."},

    {type:"fb",
     s:"중요한 {1}는 책상 서랍에 보관해 두세요.",
     a:["서류"],
     opts:["서류","서적","서명","서랍"],
     hint:"Which word means official documents or paperwork that you would store safely in a drawer?",
     sSrc:"Please keep important {1} stored in the desk drawer."},

    {type:"teach", trg:"서류", src:"documents, paperwork", pos:"noun", gender:null,
     note:"Sino-Korean. 書 (writing) + 類 (category).\nOfficial papers and documents.",
     example:"A: 서류 준비 다 했어?\nB: 네, 신분증이랑 같이 가져갈게요.",
     exampleSrc:"A: Have you prepared all the documents?\nB: Yes, I will bring them along with my ID.",
     funFact:"Korean bureaucracy is known for 서류 requirements. Many processes are now going digital (전자 서류)."},

    {type:"teach", trg:"서명", src:"signature, signing", pos:"noun", gender:null,
     note:"Sino-Korean. 署 (sign) + 名 (name).\nOne's written name as confirmation.",
     example:"A: 여기에 서명해 주세요.\nB: 여기요? 알겠습니다.",
     exampleSrc:"A: Please sign here.\nB: Here? Understood.",
     funFact:"Korea is transitioning from 도장 (personal seal) to 서명 (signature) for official documents."},

    {type:"teach", trg:"서명하다", src:"to sign (a document)", pos:"verb", gender:null,
     note:"서명 + 하다.\nThe act of putting one's signature on something.",
     example:"A: 계약서에 서명하셨나요?\nB: 네, 방금 서명했습니다.",
     exampleSrc:"A: Did you sign the contract?\nB: Yes, I just signed it.",
     funFact:"전자 서명하다 (to sign digitally) is increasingly common in Korea's tech-savvy society."},

    {type:"teach", trg:"서민", src:"common people, ordinary citizens", pos:"noun", gender:null,
     note:"Sino-Korean. 庶 (common) + 民 (people).\nRegular citizens, not the elite.",
     example:"A: 서민 경제가 어려워지고 있어.\nB: 물가가 올라서 그래.",
     exampleSrc:"A: The economy for ordinary people is getting difficult.\nB: It is because prices are rising.",
     funFact:"서민 is a sympathetic term in Korean politics. Politicians always claim to champion 서민 interests."},

    {type:"teach", trg:"서부", src:"western part, the west", pos:"noun", gender:null,
     note:"Sino-Korean. 西 (west) + 部 (part).\nThe western region of an area.",
     example:"A: 서부 지역에 비가 올 예정이래.\nB: 우산을 챙겨야겠다.",
     exampleSrc:"A: Rain is expected in the western region, they say.\nB: I should bring an umbrella.",
     funFact:"서부 영화 (Western movie) uses this word for the American Old West genre, adapted into Korean."},

    {type:"teach", trg:"서서히", src:"gradually, slowly", pos:"adv", gender:null,
     note:"Native Korean adverb.\nChanging bit by bit over time.",
     example:"A: 날씨가 서서히 추워지고 있어.\nB: 겨울이 다가오는 거지.",
     exampleSrc:"A: The weather is gradually getting cold.\nB: Winter is approaching.",
     funFact:"서서히 implies natural, unhurried change. 갑자기 (suddenly) is its opposite in tempo."},

    {type:"mc",
     q:"계절이 천천히 바뀌는 것을 표현할 때 적절한 부사는?",
     opts:["서서히","갑자기","상당히","사실상"],
     ans:"서서히",
     hint:"Which adverb means gradually or slowly, describing a gentle, unhurried change over time?"},

    {type:"teach", trg:"서양인", src:"Westerner", pos:"noun", gender:null,
     note:"서양 (the West) + 인 (person).\nA person from Western countries.",
     example:"A: 서양인 관광객이 많이 늘었어.\nB: 한국 문화에 관심이 많아졌나 봐.",
     exampleSrc:"A: The number of Western tourists has increased a lot.\nB: Interest in Korean culture must have grown.",
     funFact:"The term 서양인 is neutral. In casual speech, 외국인 (foreigner) is more common regardless of origin."},

    {type:"teach", trg:"서적", src:"books, publications", pos:"noun", gender:null,
     note:"Sino-Korean. 書 (writing) + 籍 (register).\nFormal term for books.",
     example:"A: 이 서점에 고전 서적이 많아.\nB: 옛날 책을 읽는 걸 좋아하는구나.",
     exampleSrc:"A: This bookstore has many classic publications.\nB: You like reading old books.",
     funFact:"서적 is more formal than 책 (book). Used for academic and literary collections: 학술 서적 (academic books)."},

    {type:"teach", trg:"서클", src:"club, circle (university)", pos:"noun", gender:null,
     note:"Loanword from English 'circle.'\nA student activity group at university.",
     example:"A: 대학교에서 어떤 서클에 가입했어?\nB: 사진 서클에 들어갔어.",
     exampleSrc:"A: Which club did you join at university?\nB: I joined the photography club.",
     funFact:"Korean universities use both 서클 and 동아리 for clubs. 동아리 is the native Korean term and more common now."},

    {type:"teach", trg:"서투르다", src:"to be clumsy, to be unskilled", pos:"adj", gender:null,
     note:"Native Korean adjective.\nLacking skill or experience in something.",
     example:"A: 요리에 서투르지만 노력하고 있어.\nB: 연습하면 잘하게 될 거야.",
     exampleSrc:"A: I am clumsy at cooking but I am trying.\nB: With practice, you will get better.",
     funFact:"서투르다 and 서툴다 are variant forms of the same adjective. Both are correct and commonly used."},

    {type:"teach", trg:"서툴다", src:"to be clumsy, to be inexperienced", pos:"adj", gender:null,
     note:"Variant of 서투르다.\nMore commonly used in casual speech.",
     example:"A: 한국어가 아직 서툴어요.\nB: 아니에요, 잘하시는데요.",
     exampleSrc:"A: My Korean is still clumsy.\nB: No, you are doing well.",
     funFact:"Koreans appreciate the phrase 아직 서툴지만 (I am still clumsy but...) as a humble way to acknowledge improvement."},

    {type:"teach", trg:"석", src:"three (in counting, formal)", pos:"noun", gender:null,
     note:"Native Korean number, archaic.\nUsed in set phrases and old counting.",
     example:"A: 석 달 동안 준비했어.\nB: 오래 준비했구나.",
     exampleSrc:"A: I prepared for three months.\nB: You prepared for a long time.",
     funFact:"석 is the old Korean number for 3. 석 달 (three months) and 석 잔 (three cups) still use it."},

    {type:"teach", trg:"석사", src:"master's degree", pos:"noun", gender:null,
     note:"Sino-Korean. 碩 (great) + 士 (scholar).\nA graduate degree between bachelor's and doctorate.",
     example:"A: 석사 과정을 시작했어.\nB: 무슨 전공이야?",
     exampleSrc:"A: I started my master's program.\nB: What is your major?",
     funFact:"The Korean degree hierarchy: 학사 (bachelor's), 석사 (master's), 박사 (doctorate). 석사 takes about 2 years."},

    {type:"teach", trg:"선", src:"line, boundary", pos:"noun", gender:null,
     note:"Sino-Korean. 線 (line).\nA drawn or imaginary line.",
     example:"A: 이 선을 넘으면 안 돼.\nB: 알겠어, 조심할게.",
     exampleSrc:"A: You must not cross this line.\nB: Understood, I will be careful.",
     funFact:"선을 긋다 (to draw a line) means to set boundaries. 선을 넘다 (to cross the line) means going too far."},

    {type:"fb",
     s:"대학원에서 {1} 학위를 취득했습니다.",
     a:["석사"],
     opts:["석사","학사","박사","학생"],
     hint:"Which degree level comes between a bachelor's and a doctorate in the academic hierarchy?",
     sSrc:"I obtained a {1} degree from graduate school."},

    {type:"match", pairs:[
      {trg:"서류", src:"documents"},
      {trg:"서명", src:"signature"},
      {trg:"서서히", src:"gradually"},
      {trg:"석사", src:"master's degree"}
    ]}
  ]
};
export default LESSON_13;
