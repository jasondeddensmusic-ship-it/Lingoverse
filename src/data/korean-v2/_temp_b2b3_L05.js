// Korean B2. Batch 3, Lesson 5: Education and Development
// Words: 강북, 강사, 강수량, 강요하다, 강의, 강의하다, 강조, 강화하다, 갖가지, 갖추다, 같이하다, 갚다, 개개인, 개구리, 개국, 개나리, 개다, 개미, 개발되다, 개방

const LESSON_5 = {
  id:"kov2_b2b3_l5", title:"강의와 개발", icon:"🎓", xp:15, board:true,
  steps:[
    {type:"intro", title:"강의와 개발",
     desc:"Learn words about lectures, coercion, and development. This lesson bridges the academic 강- family with the 개- opening and development vocabulary.",
     goals:["Master 20 words for education, nature, and development","Understand the 하다 verb pattern with Sino-Korean nouns","Use formal academic vocabulary with confidence"]},

    {type:"teach", trg:"강북", src:"Gangbuk (north of the river)", pos:"noun", gender:null,
     note:"Sino-Korean. 江 (river) + 北 (north).\nNorth of the Han River in Seoul.",
     example:"A: 강북에서 강남까지 얼마나 걸려?\nB: 지하철로 한 시간쯤 걸려.",
     exampleSrc:"A: How long does it take from Gangbuk to Gangnam?\nB: About an hour by subway.",
     funFact:"강북 contains historic Seoul (경복궁, 인사동) while 강남 is the modern business district. Koreans often identify by which side they live on."},

    {type:"teach", trg:"강사", src:"instructor, lecturer", pos:"noun", gender:null,
     note:"Sino-Korean. 講 (lecture) + 師 (teacher).\nA person who gives lectures or lessons.",
     example:"A: 요가 강사가 정말 잘 가르쳐.\nB: 다음에 나도 같이 갈게.",
     exampleSrc:"A: The yoga instructor teaches really well.\nB: I will go with you next time.",
     funFact:"In Korean universities, 강사 (lecturer) is a rank below 교수 (professor). Many 강사 teach at multiple schools."},

    {type:"teach", trg:"강수량", src:"precipitation, rainfall", pos:"noun", gender:null,
     note:"Sino-Korean. 降 (fall) + 水 (water) + 量 (amount).\nThe measured amount of rain or snow.",
     example:"A: 올해 강수량이 예년보다 적어요.\nB: 가뭄이 걱정되네요.",
     exampleSrc:"A: This year's precipitation is less than average.\nB: I am worried about drought.",
     funFact:"Korea's monsoon season (장마) typically brings about 30% of the annual 강수량 in just three weeks."},

    {type:"teach", trg:"강요하다", src:"to force, to coerce", pos:"verb", gender:null,
     note:"Sino-Korean. 強 (strong) + 要 (demand) + 하다.\nTo pressure someone against their will.",
     example:"A: 다른 사람에게 자기 생각을 강요하면 안 돼.\nB: 맞아, 서로 존중해야지.",
     exampleSrc:"A: You should not force your opinions on others.\nB: Right, we need to respect each other.",
     funFact:"강요죄 (coercion crime) is a legal term in Korean law, reflecting how seriously forced compliance is taken."},

    {type:"mc",
     q:"'강요하다'는 어떤 의미인가요?",
     opts:["억지로 시키는 것","부드럽게 부탁하는 것","함께 즐기는 것","조용히 기다리는 것"],
     ans:"억지로 시키는 것",
     hint:"This verb involves making someone do something against their will, by force or pressure."},

    {type:"teach", trg:"강의", src:"lecture, class session", pos:"noun", gender:null,
     note:"Sino-Korean. 講 (lecture) + 義 (meaning).\nA formal teaching session.",
     example:"A: 오늘 강의가 몇 시에 끝나?\nB: 다섯 시에 끝나.",
     exampleSrc:"A: What time does your lecture end today?\nB: It ends at five.",
     funFact:"From Hanja 講義. 온라인 강의 (online lecture) became standard in Korea during 2020, and many prefer it since."},

    {type:"teach", trg:"강의하다", src:"to lecture, to give a lecture", pos:"verb", gender:null,
     note:"강의 + 하다. To deliver an academic talk.\nUsed for professors and experts.",
     example:"A: 김 교수님이 내일 특별 강의를 하신대.\nB: 무슨 주제예요?",
     exampleSrc:"A: Professor Kim will give a special lecture tomorrow.\nB: What is the topic?",
     funFact:"In Korean academic culture, being invited to 강의하다 at another university is a mark of prestige and expertise."},

    {type:"teach", trg:"강조", src:"emphasis, stress", pos:"noun", gender:null,
     note:"Sino-Korean. 強 (strong) + 調 (tone).\nMaking something stand out as important.",
     example:"A: 선생님이 이 부분을 특히 강조했어.\nB: 시험에 나올 수도 있겠다.",
     exampleSrc:"A: The teacher especially emphasized this part.\nB: It might come up on the exam.",
     funFact:"From Hanja 強調. In Korean writing, emphasis is shown with spacing or bold text, not italics (Korean has no italic tradition)."},

    {type:"teach", trg:"강화하다", src:"to strengthen, to reinforce", pos:"verb", gender:null,
     note:"Sino-Korean. 強 (strong) + 化 (change) + 하다.\nTo make something stronger or tighter.",
     example:"A: 보안을 강화해야 해요.\nB: 비밀번호를 더 복잡하게 바꿀게요.",
     exampleSrc:"A: We need to strengthen security.\nB: I will change the password to something more complex.",
     funFact:"강화도 (Ganghwa Island) shares the same characters. The island was historically fortified against invasions."},

    {type:"fb",
     s:"선생님은 이 문법 규칙의 중요성을 여러 번 {1}했다.",
     a:["강조"],
     opts:["강조","강의","강요","강화"],
     hint:"This noun means putting special stress or emphasis on something important.",
     sSrc:"The teacher {1} the importance of this grammar rule several times."},

    {type:"teach", trg:"갖가지", src:"all kinds of, various", pos:"noun", gender:null,
     note:"갖 (all) + 가지 (kind).\nA wide variety of different things.",
     example:"A: 시장에 갖가지 과일이 있어.\nB: 우리 좀 사 가자.",
     exampleSrc:"A: There are all kinds of fruits at the market.\nB: Let us buy some.",
     funFact:"Interchangeable with 가지각색 (of every type and color) and 각양각색 (every shape and color), all meaning great variety."},

    {type:"teach", trg:"갖추다", src:"to equip, to be equipped with", pos:"verb", gender:null,
     note:"Native Korean verb.\nTo have all necessary items or qualities ready.",
     example:"A: 이 호텔은 시설을 잘 갖추고 있어요.\nB: 그래서 인기가 많은 거예요.",
     exampleSrc:"A: This hotel is well-equipped with facilities.\nB: That is why it is so popular.",
     funFact:"갖추다 implies completeness: 조건을 갖추다 (meet conditions), 자격을 갖추다 (be qualified), 품위를 갖추다 (maintain dignity)."},

    {type:"teach", trg:"같이하다", src:"to do together, to share an activity", pos:"verb", gender:null,
     note:"같이 (together) + 하다 (do).\nTo participate in something with others.",
     example:"A: 저녁 같이할래?\nB: 좋아, 뭐 먹을까?",
     exampleSrc:"A: Want to have dinner together?\nB: Sure, what should we eat?",
     funFact:"같이하다 is more casual than 함께하다 (to be together), which has a warmer, more poetic nuance."},

    {type:"teach", trg:"갚다", src:"to repay, to pay back", pos:"verb", gender:null,
     note:"Native Korean verb.\nTo return money or a favor owed.",
     example:"A: 빌린 돈 언제 갚을 거야?\nB: 다음 달까지 꼭 갚을게.",
     exampleSrc:"A: When are you going to pay back the money you borrowed?\nB: I will definitely pay it back by next month.",
     funFact:"Also used figuratively: 은혜를 갚다 (repay a kindness), 원수를 갚다 (take revenge). Emotional debts count too."},

    {type:"mc",
     q:"'갖추다'의 뜻으로 알맞은 것은?",
     opts:["큰 소리로 말하다","필요한 것을 모두 준비하다","물건을 버리다","천천히 걷다"],
     ans:"필요한 것을 모두 준비하다",
     hint:"This verb means having everything ready and in place, like equipping or preparing fully."},

    {type:"teach", trg:"개개인", src:"each individual", pos:"noun", gender:null,
     note:"개개 (each and every) + 인 (人, person).\nEvery single person considered separately.",
     example:"A: 개개인의 의견을 존중해야 합니다.\nB: 동의합니다. 모든 사람이 중요하죠.",
     exampleSrc:"A: We must respect each individual's opinion.\nB: I agree. Every person matters.",
     funFact:"개개인 reduplicates 개 (individual) for emphasis. Korean loves reduplication: 사람사람 (each person), 집집 (each house)."},

    {type:"teach", trg:"개구리", src:"frog", pos:"noun", gender:null,
     note:"Native Korean word.\nAn amphibian that jumps and croaks.",
     example:"A: 봄에 개구리 소리가 들려.\nB: 시골에서는 밤마다 들을 수 있어.",
     exampleSrc:"A: I can hear frogs in spring.\nB: In the countryside, you can hear them every night.",
     funFact:"The proverb 우물 안 개구리 (frog in a well) describes someone with a narrow worldview, used across East Asia."},

    {type:"teach", trg:"개국", src:"(counter) countries; founding of a nation", pos:"noun", gender:null,
     note:"Sino-Korean. 個 (counter) + 國 (country)\nor 開 (open) + 國 (country).",
     example:"A: 이 회사는 몇 개국에 진출했어요?\nB: 스무 개국 이상이에요.",
     exampleSrc:"A: How many countries has this company expanded to?\nB: More than twenty countries.",
     funFact:"As a counter, 개국 counts nations: 5개국 (5 countries). As a noun, 개국 (建國/開國) means founding a nation."},

    {type:"teach", trg:"개나리", src:"forsythia (flower)", pos:"noun", gender:null,
     note:"Native Korean word.\nA bright yellow spring flower.",
     example:"A: 개나리가 벌써 피었네!\nB: 진짜 봄이 왔구나.",
     exampleSrc:"A: The forsythia is already blooming!\nB: Spring has truly arrived.",
     funFact:"개나리 is one of Korea's iconic spring flowers, blooming in early April. It lines highways and riverbanks across the country."},

    {type:"teach", trg:"개다", src:"to clear up (weather); to fold (clothes)", pos:"verb", gender:null,
     note:"Native Korean verb with two meanings.\nWeather clearing or folding fabric.",
     example:"A: 비가 그치고 하늘이 개었어.\nB: 드디어 빨래를 널 수 있겠다.",
     exampleSrc:"A: The rain stopped and the sky cleared up.\nB: Finally I can hang the laundry.",
     funFact:"Same word, different uses: 날이 개다 (weather clears), 이불을 개다 (fold a blanket). Context is everything."},

    {type:"teach", trg:"개미", src:"ant", pos:"noun", gender:null,
     note:"Native Korean word.\nA small insect known for hard work.",
     example:"A: 개미처럼 열심히 일했더니 성공했어.\nB: 노력은 배신하지 않지.",
     exampleSrc:"A: I succeeded by working as hard as an ant.\nB: Hard work never betrays you.",
     funFact:"개미 투자자 (ant investor) describes small retail investors in the Korean stock market, working hard with little capital."},

    {type:"teach", trg:"개발되다", src:"to be developed", pos:"verb", gender:null,
     note:"개발 (development) + 되다 (passive).\nSomething undergoes development.",
     example:"A: 이 지역이 최근 많이 개발되었어요.\nB: 아파트가 많이 들어섰네요.",
     exampleSrc:"A: This area has been developed a lot recently.\nB: Many apartments have been built.",
     funFact:"Korea's rapid development transformed farming villages into cities in decades. 개발 is tied to national identity."},

    {type:"teach", trg:"개방", src:"opening, liberalization", pos:"noun", gender:null,
     note:"Sino-Korean. 開 (open) + 放 (release).\nMaking something accessible to all.",
     example:"A: 이 공원은 24시간 개방이에요?\nB: 아니요, 밤 10시에 닫아요.",
     exampleSrc:"A: Is this park open 24 hours?\nB: No, it closes at 10 PM.",
     funFact:"From Hanja 開放. 시장 개방 (market opening) was a pivotal economic policy in Korea's modernization journey."},

    {type:"match", pairs:[
      {trg:"강의", src:"lecture"},
      {trg:"개발되다", src:"to be developed"},
      {trg:"갚다", src:"to repay"},
      {trg:"개방", src:"opening"}
    ]}
  ]
};
export default LESSON_5;
