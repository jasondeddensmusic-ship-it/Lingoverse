// Korean B1 Gap - Lesson 35: Society, Citizens and the World
const LESSON_35 = {
  id:"kov2_b1gap_l35", title:"사회, 시민과 세상", icon:"🌍", xp:15, board:true,
  steps:[
    {type:"intro", title:"Society, Citizens and the World",
     desc:"Learn vocabulary for social structures, family roles, and the broader world. These words appear in news, textbooks, and everyday discussions about society and identity.",
     goals:["Learn 20 words for society, citizens, and the world","Understand family and gender vocabulary","Explore religious and cultural terms"]},

    // --- Teach 1-5 ---
    {type:"teach", trg:"시민", src:"citizen", pos:"noun", gender:null,
     note:"Sino-Korean. 시 (city, 市) + 민 (people, 民).\nOriginally 'city people,' now means citizen broadly.",
     example:"A: 시민들이 공원 청소를 했어요.\nB: 좋은 시민 의식이네요.\nA: 우리도 참여할까요?",
     exampleSrc:"A: The citizens cleaned up the park.\nB: That's good civic spirit.\nA: Shall we participate too?",
     funFact:"From hanja 市民. 시민 운동 (citizens' movement) played a crucial role in Korean democratization during the 1980s. 시민권 (citizenship rights) and 시민 사회 (civil society) are standard political vocabulary."},

    {type:"teach", trg:"민족", src:"ethnic group, nation, people", pos:"noun", gender:null,
     note:"Sino-Korean. 민 (people, 民) + 족 (clan/tribe, 族).\nRefers to an ethnic or cultural group.",
     example:"A: 한민족은 어떤 민족이에요?\nB: 5천 년의 역사를 가진 민족이에요.\nA: 오랜 역사가 있군요.",
     exampleSrc:"A: What kind of people are the Korean nation?\nB: A people with 5,000 years of history.\nA: That's a long history.",
     funFact:"From hanja 民族. 한민족 (the Korean people/nation) is a deeply emotional term. 단일 민족 (single ethnic nation) was a core part of Korean identity, though modern Korea is becoming increasingly multicultural."},

    {type:"teach", trg:"사회적", src:"social", pos:"noun", gender:null,
     note:"Sino-Korean. 사회 (society) + 적 (suffix, -like/of).\nFunctions as a modifier: 사회적 문제 = social problem.",
     example:"A: 이건 사회적 문제예요.\nB: 개인의 문제가 아니라고요?\nA: 네, 사회 전체가 관심을 가져야 해요.",
     exampleSrc:"A: This is a social problem.\nB: You're saying it's not an individual problem?\nA: Right, the whole society needs to pay attention.",
     funFact:"The suffix -적 (的) turns nouns into modifiers. 사회 (society) becomes 사회적 (social), 역사 (history) becomes 역사적 (historical). This is one of the most productive suffixes in Sino-Korean."},

    {type:"teach", trg:"법", src:"law", pos:"noun", gender:null,
     note:"Sino-Korean. 법 (法) = law, method, rule.\n법을 지키다 = to obey the law.",
     example:"A: 이 법이 왜 필요해요?\nB: 시민의 안전을 위해서요.\nA: 모든 사람이 법을 지켜야 해요.",
     exampleSrc:"A: Why is this law necessary?\nB: For the safety of citizens.\nA: Everyone must obey the law.",
     funFact:"법 (法) is extremely productive: 방법 (method), 문법 (grammar), 헌법 (constitution), 법원 (court), 법률 (legislation). Knowing this single hanja unlocks dozens of compound words."},

    {type:"teach", trg:"안전", src:"safety, security", pos:"noun", gender:null,
     note:"Sino-Korean. 안 (peace, 安) + 전 (complete, 全).\n안전벨트 = seatbelt. 안전 제일 = safety first.",
     example:"A: 안전이 가장 중요해요.\nB: 맞아요. 안전 규칙을 지켜야 해요.\nA: 안전벨트를 꼭 매세요.",
     exampleSrc:"A: Safety is the most important thing.\nB: Right. We must follow safety rules.\nA: Always wear your seatbelt.",
     funFact:"From hanja 安全, 'peace + complete.' 안전 제일 (safety first) signs are everywhere in Korea: construction sites, factories, and schools. 식품 안전 (food safety) is a major public concern."},

    // --- Quiz batch 1 ---
    {type:"mc",
     q:"'시민'의 원래 한자 뜻은?",
     opts:["나라 사람","도시 사람","농촌 사람","바다 사람"],
     ans:"도시 사람",
     hint:"The first hanja character means 'city' or 'market.' Combined with 'people,' it originally described urban residents before expanding to mean citizen in general."},

    {type:"fb",
     s:"{1}이 가장 중요해요. 규칙을 지켜야 해요.",
     a:["안전"],
     opts:["안전","법","시민","민족"],
     hint:"This Sino-Korean noun combines 'peace' and 'complete.' It refers to being free from danger or harm.",
     sSrc:"{1} is the most important thing. We must follow the rules."},

    // --- Teach 6-10 ---
    {type:"teach", trg:"안전하다", src:"to be safe, secure", pos:"adj", gender:null,
     note:"Adjective form of 안전.\n이 길은 안전하다 = this road is safe.",
     example:"A: 여기가 안전해요?\nB: 네, 이 동네는 매우 안전해요.\nA: 밤에도 안전해요?",
     exampleSrc:"A: Is it safe here?\nB: Yes, this neighborhood is very safe.\nA: Is it safe at night too?",
     funFact:"안전하다 is what parents, travelers, and safety inspectors ask about constantly. 안전한 곳 (a safe place), 안전한 음식 (safe food), 안전한 여행 (a safe trip). It is one of the most reassuring words in Korean."},

    {type:"teach", trg:"세계", src:"world", pos:"noun", gender:null,
     note:"Sino-Korean. 세 (generation, 世) + 계 (boundary, 界).\n세계 여행 = world travel.",
     example:"A: 세계에서 가장 큰 나라가 어디에요?\nB: 러시아예요.\nA: 한번 가 보고 싶어요.",
     exampleSrc:"A: What is the biggest country in the world?\nB: It's Russia.\nA: I'd like to visit someday.",
     funFact:"From hanja 世界, 'generation boundary.' 세계 and 세상 both mean 'world' but differ: 세계 is geographic/political (세계 지도, world map), while 세상 is experiential/philosophical (세상에!, oh my!)."},

    {type:"teach", trg:"세계적", src:"worldwide, world-class", pos:"noun", gender:null,
     note:"세계 + 적 (-like). Functions as a modifier.\n세계적으로 유명하다 = to be world-famous.",
     example:"A: 이 가수는 세계적으로 유명해요.\nB: 맞아요. 전 세계에서 인기가 많아요.\nA: 한국의 자랑이에요.",
     exampleSrc:"A: This singer is world-famous.\nB: Right. They're popular all over the world.\nA: They're the pride of Korea.",
     funFact:"세계적 is the standard way to say 'world-class' or 'internationally recognized.' BTS, Samsung, and Korean cinema are all described as 세계적 in Korean media. It is a label of great national pride."},

    {type:"teach", trg:"세기", src:"century", pos:"noun", gender:null,
     note:"Sino-Korean. 세 (generation, 世) + 기 (period, 紀).\n21세기 = 21st century.",
     example:"A: 21세기의 가장 큰 변화가 뭐예요?\nB: 인터넷이라고 생각해요.\nA: 맞아요. 세상이 많이 바뀌었어요.",
     exampleSrc:"A: What is the biggest change of the 21st century?\nB: I think it's the internet.\nA: Right. The world has changed a lot.",
     funFact:"From hanja 世紀. Korean uses Sino-Korean numbers with 세기: 이십일세기 (21st century). The expression 세기의 발견 (discovery of the century) describes groundbreaking achievements."},

    {type:"teach", trg:"세상", src:"world, life", pos:"noun", gender:null,
     note:"Sino-Korean origin but feels native. 세 (generation, 世) + 상 (above, 上).\nMore personal and emotional than 세계.",
     example:"A: 세상에 이런 일이!\nB: 믿을 수 없죠?\nA: 세상은 정말 넓어요.",
     exampleSrc:"A: Such a thing in this world!\nB: Unbelievable, right?\nA: The world is really vast.",
     funFact:"세상에! (Oh my! / Unbelievable!) is one of the most common Korean exclamations. 세상 feels warmer and more personal than 세계: 아름다운 세상 (beautiful world), 새로운 세상 (new world). Song titles love 세상."},

    // --- Quiz batch 2 ---
    {type:"match", pairs:[
      {trg:"세계", src:"world (geographic)"},
      {trg:"세상", src:"world (personal)"},
      {trg:"세기", src:"century"},
      {trg:"세계적", src:"worldwide"}
    ]},

    {type:"mc",
     q:"'세상에!'는 어떤 상황에서 써요?",
     opts:["인사할 때","놀랐을 때","사과할 때","부탁할 때"],
     ans:"놀랐을 때",
     hint:"This exclamation is used when encountering something shocking or unbelievable. It literally references 'this world' to express disbelief."},

    // --- Teach 11-15 ---
    {type:"teach", trg:"여성", src:"woman, female", pos:"noun", gender:null,
     note:"Sino-Korean. 여 (woman, 女) + 성 (gender, 性).\nFormal word for woman. 여성 인권 = women's rights.",
     example:"A: 여성의 사회 참여가 늘었어요.\nB: 네, 여성 리더가 많아졌어요.\nA: 좋은 변화예요.",
     exampleSrc:"A: Women's participation in society has increased.\nB: Yes, there are more female leaders.\nA: That's a positive change.",
     funFact:"여성 is the formal, respectful term. 여자 (woman/girl) is neutral-casual. In formal writing and news, 여성 is preferred. 여성부 was Korea's Ministry of Gender Equality (now Ministry of Gender Equality and Family)."},

    {type:"teach", trg:"소녀", src:"girl, young girl", pos:"noun", gender:null,
     note:"Sino-Korean. 소 (small, 少) + 녀 (woman, 女).\nA young female, typically a teenager.",
     example:"A: 이 소녀가 그림을 잘 그려요.\nB: 나이가 어린데 대단해요.\nA: 미래가 기대돼요.",
     exampleSrc:"A: This girl draws really well.\nB: She's young, but impressive.\nA: I look forward to her future.",
     funFact:"From hanja 少女. 소녀시대 (Girls' Generation) brought this word to worldwide fame as a K-pop group name. In literature, 소녀 has a poetic, innocent quality."},

    {type:"teach", trg:"소년", src:"boy, young boy", pos:"noun", gender:null,
     note:"Sino-Korean. 소 (small, 少) + 년 (year/person, 年).\nA young male, typically a teenager.",
     example:"A: 이 소년은 피아노를 잘 쳐요.\nB: 몇 살이에요?\nA: 열두 살이에요.",
     exampleSrc:"A: This boy plays the piano well.\nB: How old is he?\nA: He's twelve years old.",
     funFact:"From hanja 少年. 방탄소년단 (BTS, Bulletproof Boy Scouts) uses 소년 in their name. 소년법 (Juvenile Protection Act) and 소년원 (juvenile detention center) use the legal sense of 'minor.'"},

    {type:"teach", trg:"아가씨", src:"young lady, miss", pos:"noun", gender:null,
     note:"Native Korean honorific. Used for young unmarried women.\nCan sound old-fashioned depending on context.",
     example:"A: 저기 아가씨, 이것 좀 도와주세요.\nB: 네, 뭘 도와드릴까요?\nA: 이 짐 좀 옮겨 주세요.",
     exampleSrc:"A: Excuse me, miss, could you help me with this?\nB: Yes, what can I help you with?\nA: Please help me move this luggage.",
     funFact:"아가씨 is becoming less common as young women may find it patronizing. In restaurants, 저기요 (excuse me) has largely replaced 아가씨. However, it remains standard in historical dramas and literature."},

    {type:"teach", trg:"가정", src:"family, household, home", pos:"noun", gender:null,
     note:"Sino-Korean. 가 (house, 家) + 정 (court, 庭).\nMore formal than 집 (house). 가정교육 = home education.",
     example:"A: 가정이 화목한 게 중요해요.\nB: 맞아요. 가정이 행복해야 해요.\nA: 가정의 달이 5월이에요.",
     exampleSrc:"A: Having a harmonious family is important.\nB: Right. The family should be happy.\nA: May is the month of family.",
     funFact:"From hanja 家庭. May is 가정의 달 (Family Month) in Korea, packed with 어린이날 (Children's Day, May 5), 어버이날 (Parents' Day, May 8), and 스승의 날 (Teachers' Day, May 15)."},

    // --- Quiz batch 3 ---
    {type:"fb",
     s:"{1}의 사회 참여가 많이 늘었어요.",
     a:["여성"],
     opts:["여성","소녀","소년","아가씨"],
     hint:"This is the formal Sino-Korean term for women. It is preferred in news, academic writing, and discussions about gender equality.",
     sSrc:"{1}'s participation in society has increased a lot."},

    {type:"mc",
     q:"한국에서 5월을 뭐라고 불러요?",
     opts:["사랑의 달","세계의 달","가정의 달","안전의 달"],
     ans:"가정의 달",
     hint:"May in Korea is dedicated to family celebrations. Children's Day, Parents' Day, and Teachers' Day all fall in this month."},

    // --- Teach 16-20 ---
    {type:"teach", trg:"식구", src:"family member", pos:"noun", gender:null,
     note:"Sino-Korean. 식 (eat, 食) + 구 (mouth, 口).\nLiterally: 'eating mouth.' People who eat together = family.",
     example:"A: 식구가 몇 명이에요?\nB: 네 명이에요. 부모님하고 동생이요.\nA: 다 같이 밥을 먹어요?",
     exampleSrc:"A: How many family members do you have?\nB: Four. My parents and my younger sibling.\nA: Do you all eat together?",
     funFact:"From hanja 食口, 'eat mouth.' The etymology reveals Korean family culture: family means people who share meals. 식구 is warmer and more intimate than the formal 가족 (family), implying daily togetherness."},

    {type:"teach", trg:"신부", src:"bride, Catholic priest", pos:"noun", gender:null,
     note:"Two different words with same pronunciation.\n新婦 (new woman) = bride. 神父 (god father) = priest.",
     example:"A: 신부가 정말 아름다워요.\nB: 네, 웨딩드레스가 잘 어울려요.\nA: 축하드려요!",
     exampleSrc:"A: The bride is really beautiful.\nB: Yes, the wedding dress suits her well.\nA: Congratulations!",
     funFact:"신부 is a fascinating homophone: 新婦 (bride, new woman) and 神父 (Catholic priest, god father) sound identical. Context always clarifies: a wedding means bride, a church means priest. Korean has many such homophones due to hanja."},

    {type:"teach", trg:"불교", src:"Buddhism", pos:"noun", gender:null,
     note:"Sino-Korean. 불 (Buddha, 佛) + 교 (teaching, 敎).\nThe teachings of the Buddha.",
     example:"A: 한국에서 불교가 오래됐어요?\nB: 네, 1,700년의 역사가 있어요.\nA: 절이 많은 이유가 그거군요.",
     exampleSrc:"A: Has Buddhism been in Korea for a long time?\nB: Yes, it has 1,700 years of history.\nA: That's why there are so many temples.",
     funFact:"From hanja 佛敎. Buddhism arrived in Korea in 372 AD. Korean Buddhist temples (절) are cultural treasures: 불국사, 해인사, 조계사. About 16% of South Koreans identify as Buddhist."},

    {type:"teach", trg:"스님", src:"Buddhist monk", pos:"noun", gender:null,
     note:"Native Korean honorific. 스 (teacher) + 님 (honorific suffix).\nRespectful term for Buddhist monks and nuns.",
     example:"A: 스님, 차 한잔 드세요.\nB: 감사합니다. 좋은 차네요.\nA: 절에서 만든 차예요.",
     exampleSrc:"A: Monk, please have a cup of tea.\nB: Thank you. It's good tea.\nA: It's tea made at the temple.",
     funFact:"스님 is the respectful address for both male and female Buddhist monastics. Temple stay (템플스테이) programs let visitors experience monastic life. 스님 are known for their calm wisdom and mindful lifestyle."},

    {type:"teach", trg:"신", src:"god, deity", pos:"noun", gender:null,
     note:"Sino-Korean. 신 (神) = god, spirit, divine.\n신화 = mythology. 신성하다 = to be sacred.",
     example:"A: 옛날 사람들은 여러 신을 믿었어요.\nB: 어떤 신이 있었어요?\nA: 산신, 바다 신 등이 있었어요.",
     exampleSrc:"A: People in ancient times believed in many gods.\nB: What kinds of gods were there?\nA: There were mountain gods, sea gods, and so on.",
     funFact:"From hanja 神. Korean folk religion includes 산신 (mountain god), 용왕 (Dragon King), and 삼신할머니 (grandmother spirit of birth). 신 also appears in 신비 (mystery), 신기하다 (to be amazing), and 신성하다 (to be sacred)."},

    // --- Quiz batch 4 ---
    {type:"match", pairs:[
      {trg:"식구", src:"family member"},
      {trg:"불교", src:"Buddhism"},
      {trg:"스님", src:"Buddhist monk"},
      {trg:"신", src:"god"}
    ]},

    {type:"fb",
     s:"{1}가 정말 아름다워요. 웨딩드레스가 잘 어울려요.",
     a:["신부"],
     opts:["신부","아가씨","소녀","여성"],
     hint:"This word is a Sino-Korean homophone with two meanings. In a wedding context, it refers to the woman getting married.",
     sSrc:"The {1} is really beautiful. The wedding dress suits her well."},

    // --- Tip card ---
    {type:"tip", title:"The -적 Suffix: Making Modifiers",
     text:"The suffix -적 (的) turns Sino-Korean nouns into modifiers (like adding '-al' or '-ic' in English):\n\n사회 (society) > 사회적 (social)\n세계 (world) > 세계적 (worldwide)\n역사 (history) > 역사적 (historical)\n과학 (science) > 과학적 (scientific)\n\nThese words function like adjectives but are technically nouns. They modify other nouns directly: 사회적 문제 (social problem).",
     deepDive:{title:"Using -적 with Particles",
      text:"-적 words can take particles and function flexibly. 사회적으로 (socially, with -으로), 세계적인 (worldwide, with -인 for attributive). The pattern noun + 적 + 으로 creates adverbs: 역사적으로 (historically), 과학적으로 (scientifically). This is one of the most productive word-building patterns in academic Korean."}},

    // --- Final quiz ---
    {type:"mc",
     q:"'식구'의 한자 뜻은?",
     opts:["집 사람","같이 사는 사람","먹는 입","가까운 사람"],
     ans:"먹는 입",
     hint:"The two hanja characters mean 'eat' and 'mouth.' The word comes from the idea that family members are the people who share meals together."},

    {type:"fb",
     s:"한국에서 {1}는 1,700년의 역사가 있어요.",
     a:["불교"],
     opts:["불교","법","민족","안전"],
     hint:"This Sino-Korean noun refers to a major world religion founded on the teachings of the Buddha. It arrived in Korea in the 4th century.",
     sSrc:"{1} has 1,700 years of history in Korea."}
  ]
};

export default LESSON_35;
