// Korean B2 — Batch 5, Lesson 10: Life, Awards, and Commerce
// Words: 살인, 살피다, 삶, 삶다, 삼가다, 삼국, 삼다, 삼촌, 삼키다, 상, 상관, 상관없다, 상관없이, 상금, 상담, 상당, 상당수, 상당하다, 상당히, 상대성

const LESSON_10 = {
  id:"kov2_b2b5_l10", title:"삶과 상", icon:"🏆", xp:15, board:true,
  steps:[
    {type:"intro", title:"삶과 상",
     desc:"Learn vocabulary about murder, life, cooking, family, and awards. This lesson covers essential words for discussing daily life, Korean history, and evaluation.",
     goals:["Master 20 words about life, family, and considerable things","Understand the versatile word 상 and its compounds","Use 상당 compounds for expressing degree and quantity"]},

    {type:"teach", trg:"살인", src:"murder, homicide", pos:"noun", gender:null,
     note:"Sino-Korean. 殺 (kill) + 人 (person).\nThe act of killing a person.",
     example:"A: 살인 사건이 뉴스에 나왔어.\nB: 요즘 치안이 걱정이야.",
     exampleSrc:"A: A murder case was on the news.\nB: I am worried about public safety these days.",
     funFact:"Korea has one of the lowest murder rates in the world, but 살인 미스터리 (murder mystery) dramas are hugely popular."},

    {type:"teach", trg:"살피다", src:"to examine, to look into, to check on", pos:"verb", gender:null,
     note:"Native Korean verb.\nTo carefully observe or investigate.",
     example:"A: 주변을 살피고 나서 움직여.\nB: 알겠어, 조심할게.",
     exampleSrc:"A: Check your surroundings before moving.\nB: Got it, I will be careful.",
     funFact:"살피다 implies careful, attentive observation. 눈치를 살피다 means to read the room or gauge others' moods."},

    {type:"teach", trg:"삶", src:"life, existence", pos:"noun", gender:null,
     note:"Native Korean word. From 살다 (to live).\nThe noun form meaning one's entire life.",
     example:"A: 삶이란 무엇일까?\nB: 철학적인 질문이네.",
     exampleSrc:"A: What is life?\nB: That is a philosophical question.",
     funFact:"삶 and 생활 both mean 'life' but 삶 is more philosophical/existential while 생활 is everyday life."},

    {type:"teach", trg:"삶다", src:"to boil (food)", pos:"verb", gender:null,
     note:"Native Korean verb.\nCooking by immersing in boiling water.",
     example:"A: 달걀을 몇 분 동안 삶아야 해?\nB: 완숙은 12분 정도.",
     exampleSrc:"A: How many minutes should I boil the eggs?\nB: About 12 minutes for hard-boiled.",
     funFact:"Korean cuisine boils many foods: 삶은 달걀 (boiled egg), 삶은 돼지고기 (boiled pork, for bossam)."},

    {type:"teach", trg:"삼가다", src:"to refrain from, to be cautious about", pos:"verb", gender:null,
     note:"Native Korean verb.\nTo hold back or avoid doing something inappropriate.",
     example:"A: 음주 운전을 삼가야 합니다.\nB: 당연하죠, 택시를 탈게요.",
     exampleSrc:"A: You must refrain from drunk driving.\nB: Of course, I will take a taxi.",
     funFact:"삼가다 is very formal. Signs say 흡연을 삼가 주세요 (please refrain from smoking)."},

    {type:"fb",
     s:"병원 안에서는 통화를 {1} 주세요.",
     a:["삼가"],
     opts:["삼가","살펴","삼켜","삶아"],
     hint:"Which verb means to refrain from or avoid, used in polite requests about unwanted behavior?",
     sSrc:"Please {1} from making phone calls inside the hospital."},

    {type:"teach", trg:"삼국", src:"Three Kingdoms", pos:"noun", gender:null,
     note:"Sino-Korean. 三 (three) + 國 (country).\nThe Three Kingdoms period of Korean history.",
     example:"A: 삼국 시대에 대해 공부하고 있어.\nB: 고구려, 백제, 신라 맞지?",
     exampleSrc:"A: I am studying the Three Kingdoms period.\nB: Goguryeo, Baekje, and Silla, right?",
     funFact:"The 삼국 시대 (57 BC - 668 AD) is one of the most romanticized periods in Korean history and popular in dramas."},

    {type:"teach", trg:"삼다", src:"to make into, to take as, to regard as", pos:"verb", gender:null,
     note:"Native Korean verb.\nTo establish or regard something/someone in a role.",
     example:"A: 이 일을 목표로 삼았어.\nB: 좋은 목표네, 응원할게.",
     exampleSrc:"A: I set this work as my goal.\nB: That is a good goal, I will cheer you on.",
     funFact:"을/를 목표로 삼다 (to take as a goal) and 을/를 본보기로 삼다 (to take as a model) are common patterns."},

    {type:"teach", trg:"삼촌", src:"uncle (father's unmarried brother)", pos:"noun", gender:null,
     note:"Sino-Korean. 三 (three) + 寸 (degree).\nThree degrees of family separation.",
     example:"A: 삼촌이 이번 주에 놀러 온대.\nB: 오랜만이다! 반갑겠다.",
     exampleSrc:"A: Uncle is coming to visit this week.\nB: It has been a while! That will be nice.",
     funFact:"Korean family terms are precise: 삼촌 (father's unmarried brother), 큰아버지 (father's older brother), 외삼촌 (mother's brother)."},

    {type:"teach", trg:"삼키다", src:"to swallow", pos:"verb", gender:null,
     note:"Native Korean verb.\nTo move food or liquid down the throat.",
     example:"A: 약을 삼키기가 힘들어.\nB: 물을 많이 마시면서 삼켜 봐.",
     exampleSrc:"A: It is hard to swallow the medicine.\nB: Try swallowing it with lots of water.",
     funFact:"눈물을 삼키다 (to swallow tears) means to hold back crying. A very expressive Korean idiom."},

    {type:"teach", trg:"상", src:"prize, award, table", pos:"noun", gender:null,
     note:"Sino-Korean. 賞 (prize) or 床 (table).\nMultiple meanings depending on context.",
     example:"A: 대회에서 상을 받았어!\nB: 축하해! 무슨 상이야?",
     exampleSrc:"A: I won a prize at the competition!\nB: Congratulations! What prize?",
     funFact:"상 means both 'award' (賞) and 'table' (床). 상을 차리다 means to set the table for a meal."},

    {type:"teach", trg:"상관", src:"connection, relevance, superior officer", pos:"noun", gender:null,
     note:"Sino-Korean. 相 (mutual) + 關 (relate).\nA relationship or connection between things.",
     example:"A: 이 문제와 상관이 있어?\nB: 아니, 전혀 상관없어.",
     exampleSrc:"A: Is this related to the problem?\nB: No, it has nothing to do with it.",
     funFact:"In the military, 상관 means a superior officer. In everyday use, it means connection or relevance."},

    {type:"teach", trg:"상관없다", src:"to not matter, to be irrelevant", pos:"adj", gender:null,
     note:"상관 + 없다 (not exist).\nHaving no connection or relevance.",
     example:"A: 나이가 상관없어?\nB: 응, 능력이 더 중요해.",
     exampleSrc:"A: Does age not matter?\nB: No, ability is more important.",
     funFact:"상관없어 (it does not matter) is one of the most frequently used casual expressions in Korean."},

    {type:"teach", trg:"상관없이", src:"regardless of, irrespective of", pos:"adv", gender:null,
     note:"상관없다 + 이 (adverb form).\nWithout regard to something.",
     example:"A: 날씨에 상관없이 경기는 진행됩니다.\nB: 비가 와도 하는 거예요?",
     exampleSrc:"A: The game proceeds regardless of the weather.\nB: Even if it rains?",
     funFact:"에 상관없이 is a formal pattern for 'regardless of.' It appears frequently in rules and announcements."},

    {type:"mc",
     q:"'성별에 _____ 누구나 지원할 수 있다'에 들어갈 말은?",
     opts:["상관없이","상당히","상관이","상금을"],
     ans:"상관없이",
     hint:"Which adverb means 'regardless of,' indicating that gender does not affect eligibility?"},

    {type:"teach", trg:"상금", src:"prize money, cash prize", pos:"noun", gender:null,
     note:"Sino-Korean. 賞 (prize) + 金 (money).\nMonetary reward for winning.",
     example:"A: 상금이 얼마야?\nB: 1등은 천만 원이래.",
     exampleSrc:"A: How much is the prize money?\nB: First place is ten million won, they say.",
     funFact:"Korean variety shows offer 상금 for competition segments. The amount is usually shown dramatically on screen."},

    {type:"teach", trg:"상담", src:"consultation, counseling", pos:"noun", gender:null,
     note:"Sino-Korean. 相 (mutual) + 談 (talk).\nA professional discussion for advice.",
     example:"A: 진로 상담을 받고 싶어.\nB: 학교 상담실에 가 봐.",
     exampleSrc:"A: I want to get career counseling.\nB: Try going to the school counseling office.",
     funFact:"상담사 (counselor) is a growing profession in Korea. 심리 상담 (psychological counseling) is increasingly accepted."},

    {type:"teach", trg:"상당", src:"considerable, substantial", pos:"noun", gender:null,
     note:"Sino-Korean. 相 (mutual) + 當 (appropriate).\nA degree that is notably large or significant.",
     example:"A: 상당한 노력이 필요해.\nB: 알아, 각오하고 있어.",
     exampleSrc:"A: Considerable effort is needed.\nB: I know, I am prepared.",
     funFact:"상당 appears in many forms: 상당하다 (adjective), 상당히 (adverb), 상당수 (a considerable number)."},

    {type:"teach", trg:"상당수", src:"a considerable number, a fair amount", pos:"noun", gender:null,
     note:"상당 + 수 (number).\nA significant portion of a total.",
     example:"A: 상당수의 학생들이 반대했어.\nB: 얼마나 많은 학생이?",
     exampleSrc:"A: A considerable number of students opposed it.\nB: How many students?",
     funFact:"상당수 is favored in news writing over vague terms like 많은 (many). It implies a noteworthy proportion."},

    {type:"teach", trg:"상당하다", src:"to be considerable, to be substantial", pos:"adj", gender:null,
     note:"상당 + 하다.\nReaching a notable degree or level.",
     example:"A: 피해가 상당하다고 들었어.\nB: 복구에 시간이 많이 걸리겠다.",
     exampleSrc:"A: I heard the damage is considerable.\nB: Recovery will take a long time.",
     funFact:"상당하다 is more formal and precise than 많다 (many/much). It is preferred in academic and news writing."},

    {type:"teach", trg:"상당히", src:"considerably, quite, fairly", pos:"adv", gender:null,
     note:"상당하다 + 히 (adverb suffix).\nTo a notable degree.",
     example:"A: 이 문제는 상당히 어려워.\nB: 전문가의 도움이 필요하겠다.",
     exampleSrc:"A: This problem is quite difficult.\nB: We will need expert help.",
     funFact:"상당히 is more formal than 꽤 (quite) and stronger than 좀 (somewhat). It sits between 약간 and 매우."},

    {type:"teach", trg:"상대성", src:"relativity", pos:"noun", gender:null,
     note:"Sino-Korean. 相對性 (mutual opposing nature).\nThe quality of being relative, not absolute.",
     example:"A: 아인슈타인의 상대성 이론을 알아?\nB: 이름만 알지, 내용은 어려워.",
     exampleSrc:"A: Do you know Einstein's theory of relativity?\nB: I only know the name, the content is difficult.",
     funFact:"상대성 이론 (theory of relativity) is one of the few scientific terms that even non-scientists know in Korea."},

    {type:"fb",
     s:"이번 태풍으로 인한 피해가 {1} 것으로 보인다.",
     a:["상당한"],
     opts:["상당한","상관없는","사소한","불필요한"],
     hint:"Which adjective means considerable or substantial, describing notably large damage from a typhoon?",
     sSrc:"The damage from this typhoon appears to be {1}."},

    {type:"match", pairs:[
      {trg:"삶", src:"life"},
      {trg:"상담", src:"counseling"},
      {trg:"상금", src:"prize money"},
      {trg:"삼촌", src:"uncle"}
    ]}
  ]
};
export default LESSON_10;
