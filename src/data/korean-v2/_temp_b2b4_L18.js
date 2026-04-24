// Korean B2. Batch 4, Lesson 18: Endurance and Translation
// Words: 버티다, 번거롭다, 번역, 번역하다, 번지, 벌, 벌금, 벌떡, 벌레, 범위, 범인, 범죄, 법률, 법원, 법적, 법칙, 베개, 베다, 벤치, 벼

const LESSON_18 = {
  id:"kov2_b2b4_l18", title:"법률과 번역", icon:"⚖️", xp:15, board:true,
  steps:[
    {type:"intro", title:"법률과 번역",
     desc:"Learn words about law, translation, endurance, and nature. This lesson covers legal vocabulary, crime-related terms, and useful everyday words.",
     goals:["Master 20 words about law, crime, and translation","Understand 법- Hanja compounds (law, rule)","Use verbs for enduring, cutting, and jumping up"]},

    {type:"teach", trg:"버티다", src:"to endure, to hold out, to withstand", pos:"verb", gender:null,
     note:"Native Korean verb.\nTo resist giving in despite difficulty.",
     example:"A: 힘들어도 끝까지 버텨야 해.\nB: 알아, 포기 안 할 거야.",
     exampleSrc:"A: Even if it is hard, you have to hold out to the end.\nB: I know, I will not give up.",
     funFact:"버티다 implies stubbornly enduring. 참다 (to bear) is about controlling feelings, 버티다 is about not yielding."},

    {type:"teach", trg:"번거롭다", src:"to be bothersome, to be cumbersome", pos:"adj", gender:null,
     note:"Native Korean adjective.\nSomething that is needlessly complicated.",
     example:"A: 서류 준비가 번거로워요.\nB: 온라인으로 하면 더 편해요.",
     exampleSrc:"A: Preparing documents is cumbersome.\nB: It is more convenient to do it online.",
     funFact:"ㅂ-irregular: 번거롭다 becomes 번거로운 (modifying), 번거로워 (casual). Polite rejection: 번거로우시겠지만 (I know this is bothersome, but...)."},

    {type:"teach", trg:"번역", src:"translation", pos:"noun", gender:null,
     note:"Sino-Korean. 翻 (turn over) + 譯 (interpret).\nConverting text from one language to another.",
     example:"A: 이 책의 번역이 잘 되어 있어요.\nB: 번역가가 유명한 분이래요.",
     exampleSrc:"A: The translation of this book is well done.\nB: I heard the translator is a famous person.",
     funFact:"From Hanja 翻譯. 동시 번역 (simultaneous translation), 기계 번역 (machine translation), 오역 (mistranslation)."},

    {type:"teach", trg:"번역하다", src:"to translate", pos:"verb", gender:null,
     note:"번역 (translation) + 하다 (to do).\nTo convert text between languages.",
     example:"A: 이 문서를 영어로 번역해 주세요.\nB: 내일까지 해 드리겠습니다.",
     exampleSrc:"A: Please translate this document into English.\nB: I will have it done by tomorrow.",
     funFact:"Korean uses both 번역하다 (written translation) and 통역하다 (oral interpretation) as distinct skills."},

    {type:"teach", trg:"번지", src:"house number, address number", pos:"noun", gender:null,
     note:"Native Korean word.\nThe lot number in a Korean address.",
     example:"A: 이 집 번지가 몇 번이에요?\nB: 강남구 역삼동 123번지예요.",
     exampleSrc:"A: What is the house number of this place?\nB: It is 123 Yeoksam-dong, Gangnam-gu.",
     funFact:"Korea has two address systems: old 번지 (lot number) and new 도로명 (street name). Both are still used."},

    {type:"mc",
     q:"'번역하다'와 '통역하다'의 차이점은?",
     opts:["번역은 글, 통역은 말을 옮기는 것","의미가 완전히 같다","번역이 더 쉽다","통역은 컴퓨터로만 한다"],
     ans:"번역은 글, 통역은 말을 옮기는 것",
     hint:"One converts written text between languages, the other converts spoken words in real time."},

    {type:"teach", trg:"벌", src:"punishment; bee (insect); set/suit (counter)", pos:"noun", gender:null,
     note:"Multiple meanings.\n벌 (punishment), 벌 (bee), 벌 (counter for clothing sets).",
     example:"A: 옷 두 벌을 샀어.\nB: 어떤 옷이야?",
     exampleSrc:"A: I bought two sets of clothes.\nB: What kind of clothes?",
     funFact:"벌 as counter: 옷 한 벌 (one suit/set of clothes). Very different from 벌 (bee) or 벌 (punishment)."},

    {type:"teach", trg:"벌금", src:"fine, penalty (money)", pos:"noun", gender:null,
     note:"벌 (punishment) + 금 (金, money).\nMoney paid as punishment.",
     example:"A: 주차 위반으로 벌금을 냈어요.\nB: 얼마 냈어요?",
     exampleSrc:"A: I paid a fine for a parking violation.\nB: How much did you pay?",
     funFact:"Korean traffic fines: 속도 위반 벌금 (speeding fine), 주정차 위반 벌금 (parking fine). All payable online now."},

    {type:"teach", trg:"벌떡", src:"with a start, suddenly (getting up)", pos:"adv", gender:null,
     note:"Native Korean onomatopoeia.\nSuddenly rising or jumping up.",
     example:"A: 알람 소리에 벌떡 일어났어.\nB: 늦잠 잘 뻔했구나.",
     exampleSrc:"A: I jumped up at the alarm sound.\nB: You almost overslept.",
     funFact:"벌떡 describes sudden upward movement: 벌떡 일어나다 (jump up), 벌떡 서다 (stand up suddenly)."},

    {type:"teach", trg:"벌레", src:"insect, bug", pos:"noun", gender:null,
     note:"Native Korean word.\nA general term for small crawling insects.",
     example:"A: 방에 벌레가 있어!\nB: 어디? 잡아 줄게.",
     exampleSrc:"A: There is a bug in the room!\nB: Where? I will catch it.",
     funFact:"벌레 is general. Specific bugs: 바퀴벌레 (cockroach), 무당벌레 (ladybug), 반딧불이 (firefly, not -벌레)."},

    {type:"teach", trg:"범위", src:"scope, range, extent", pos:"noun", gender:null,
     note:"Sino-Korean. 範 (model) + 圍 (surround).\nThe boundaries of something.",
     example:"A: 시험 범위가 어디까지예요?\nB: 1과부터 5과까지예요.",
     exampleSrc:"A: What is the scope of the exam?\nB: From chapter 1 to chapter 5.",
     funFact:"From Hanja 範圍. Students' most asked question: 시험 범위 (exam scope). Also: 활동 범위 (range of activity)."},

    {type:"fb",
     s:"시험 {1}가 너무 넓어서 공부할 게 많아요.",
     a:["범위"],
     opts:["범위","범인","벌금","법률"],
     hint:"This Sino-Korean noun means the scope or range, often used for exam coverage.",
     sSrc:"The exam {1} is so wide that there is a lot to study."},

    {type:"teach", trg:"범인", src:"criminal, culprit", pos:"noun", gender:null,
     note:"Sino-Korean. 犯 (commit crime) + 人 (person).\nThe person who committed a crime.",
     example:"A: 경찰이 범인을 잡았대요.\nB: 다행이다, 무서웠거든.",
     exampleSrc:"A: The police caught the criminal.\nB: Thank goodness, I was scared.",
     funFact:"From Hanja 犯人. Used in crime dramas: 범인은 누구? (Who is the culprit?) is a classic question."},

    {type:"teach", trg:"범죄", src:"crime", pos:"noun", gender:null,
     note:"Sino-Korean. 犯 (commit) + 罪 (sin/crime).\nAn act that breaks the law.",
     example:"A: 범죄율이 낮아졌어요.\nB: 치안이 좋아진 덕분이에요.",
     exampleSrc:"A: The crime rate has decreased.\nB: It is thanks to improved public safety.",
     funFact:"From Hanja 犯罪. 사이버 범죄 (cybercrime), 범죄 예방 (crime prevention), 범죄 현장 (crime scene)."},

    {type:"teach", trg:"법률", src:"law, legislation", pos:"noun", gender:null,
     note:"Sino-Korean. 法 (law) + 律 (rule).\nOfficial rules enacted by government.",
     example:"A: 새 법률이 시행됐어요.\nB: 어떤 내용이에요?",
     exampleSrc:"A: A new law has been implemented.\nB: What is it about?",
     funFact:"From Hanja 法律. 법률가 (lawyer/jurist), 법률 상담 (legal consultation), 법률 위반 (legal violation)."},

    {type:"teach", trg:"법원", src:"court (of law)", pos:"noun", gender:null,
     note:"Sino-Korean. 法 (law) + 院 (institution).\nWhere legal cases are tried.",
     example:"A: 법원에 출석해야 해요.\nB: 변호사와 같이 가세요.",
     exampleSrc:"A: I have to appear in court.\nB: Go with a lawyer.",
     funFact:"From Hanja 法院. 대법원 (Supreme Court), 헌법재판소 (Constitutional Court), 가정법원 (Family Court)."},

    {type:"teach", trg:"법적", src:"legal (as modifier)", pos:"noun", gender:null,
     note:"Sino-Korean. 法 (law) + 的 (characteristic).\nRelating to the law.",
     example:"A: 법적 조치를 취할 수 있어요.\nB: 변호사와 상의해 보세요.",
     exampleSrc:"A: Legal action can be taken.\nB: Please consult with a lawyer.",
     funFact:"법적 효력 (legal effect), 법적 근거 (legal basis), 법적 책임 (legal responsibility). Very common in formal Korean."},

    {type:"teach", trg:"법칙", src:"law, rule, principle", pos:"noun", gender:null,
     note:"Sino-Korean. 法 (law) + 則 (rule).\nA fundamental rule or natural law.",
     example:"A: 뉴턴의 운동 법칙을 배웠어요.\nB: 물리학의 기본이죠.",
     exampleSrc:"A: I learned Newton's laws of motion.\nB: They are the basics of physics.",
     funFact:"법칙 is for natural/scientific laws: 만유인력의 법칙 (law of gravity). 법률 is for man-made laws."},

    {type:"mc",
     q:"'법률'과 '법칙'의 차이점은?",
     opts:["법률은 과학에서만 쓴다","법률은 사람이 만든 법, 법칙은 자연의 원리","둘 다 같은 뜻이다","법칙이 더 강한 법이다"],
     ans:"법률은 사람이 만든 법, 법칙은 자연의 원리",
     hint:"One is enacted by governments for society, the other describes natural or scientific principles."},

    {type:"teach", trg:"베개", src:"pillow", pos:"noun", gender:null,
     note:"Native Korean word.\nA cushion for resting one's head.",
     example:"A: 이 베개가 너무 높아.\nB: 낮은 베개로 바꿀까?",
     exampleSrc:"A: This pillow is too high.\nB: Shall we switch to a lower pillow?",
     funFact:"Korean proverbs: 베개를 높이 베고 자다 (sleep with a high pillow) means to sleep without worry."},

    {type:"teach", trg:"베다", src:"to cut (with a blade)", pos:"verb", gender:null,
     note:"Native Korean verb.\nTo cut or slice with something sharp.",
     example:"A: 종이에 손을 베었어.\nB: 반창고 줄까?",
     exampleSrc:"A: I cut my hand on paper.\nB: Shall I give you a bandage?",
     funFact:"베다 is for clean cuts: 칼로 베다 (cut with a knife), 종이에 베다 (paper cut). 자르다 (cut) is more general."},

    {type:"teach", trg:"벤치", src:"bench", pos:"noun", gender:null,
     note:"Loanword from English 'bench.'\nA long seat in a park or public area.",
     example:"A: 벤치에 앉아서 쉬자.\nB: 좋아, 경치도 좋네.",
     exampleSrc:"A: Let us sit on a bench and rest.\nB: Good, the view is nice too.",
     funFact:"In sports, 벤치 also refers to the bench where substitute players sit: 벤치 멤버 (bench player)."},

    {type:"teach", trg:"벼", src:"rice plant, rice paddy plant", pos:"noun", gender:null,
     note:"Native Korean word.\nThe plant that produces rice grains.",
     example:"A: 가을이 되면 벼가 황금색으로 변해.\nB: 수확의 계절이구나.",
     exampleSrc:"A: In autumn, rice plants turn golden.\nB: It is the season of harvest.",
     funFact:"벼 is the unhusked rice plant. 쌀 is husked rice. 밥 is cooked rice. Korean has distinct words for each stage."},

    {type:"fb",
     s:"경찰이 사건의 {1}을 체포했다.",
     a:["범인"],
     opts:["범인","범위","범죄","법칙"],
     hint:"This Sino-Korean word means the person who committed a crime, the culprit.",
     sSrc:"The police arrested the {1} of the case."},

    {type:"match", pairs:[
      {trg:"버티다", src:"to endure"},
      {trg:"번역", src:"translation"},
      {trg:"법원", src:"court of law"},
      {trg:"벼", src:"rice plant"}
    ]}
  ]
};
export default LESSON_18;
