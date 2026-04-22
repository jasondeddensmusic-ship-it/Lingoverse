// Korean V2 B1 Gap Lesson 14. People, Family, and Social Groups
// 20 teach cards + interleaved quizzes. Max 30 steps.

const LESSON_14 = {
  id:"kov2_b1gap_l14", title:"사람과 만남", icon:"👥", xp:15, board:true,
  steps:[
    {type:"intro", title:"People, Family, and Social Groups",
     desc:"Korean society revolves around relationships and groups. Learn words for individuals, family roles, and how people come together, from formal gatherings to casual meetups.",
     goals:["Master 20 people and social vocabulary words","Learn honorific verbs for social contexts","Distinguish individual vs group concepts"]},

    // ── Teach 1-4: Individual and identity ──
    {type:"teach", trg:"개인", src:"individual", pos:"noun", gender:null,
     note:"Hanja: 個人 (single + person).\nUsed in formal contexts.",
     example:"A: 이건 개인 문제예요.\nB: 그래도 도움이 필요하면 말해요.\nA: 감사해요. 개인적으로 해결하고 싶어요.\nB: 알겠어요, 응원할게요.",
     exampleSrc:"A: This is a personal matter.\nB: Still, tell me if you need help.\nA: Thank you. I want to solve it personally.\nB: Understood, I'll support you.",
     funFact:"Korean culture balances 개인 (individual) and 단체 (group). The tension between them is a major cultural theme."},

    {type:"teach", trg:"개인적", src:"personal, private", pos:"noun", gender:null,
     note:"개인 + 적 (-tic, -al suffix).\n개인적으로 = personally.",
     example:"A: 개인적으로 어떻게 생각해요?\nB: 개인적으로는 찬성이에요.\nA: 공식적으로는요?\nB: 공식적으로는 아직 결정 안 됐어요.",
     exampleSrc:"A: What do you personally think?\nB: Personally, I'm in favor.\nA: And officially?\nB: Officially, it hasn't been decided yet.",
     funFact:"The -적 suffix converts nouns to quasi-adjectives: 개인적 (personal), 사회적 (social), 문화적 (cultural)."},

    {type:"teach", trg:"남성", src:"male, man (formal)", pos:"noun", gender:null,
     note:"Hanja: 男性 (male + nature).\nFormal word. Casual = 남자.",
     example:"A: 이 행사는 남성만 참여할 수 있어요?\nB: 아니요, 누구나 참여할 수 있어요.\nA: 남성과 여성 비율은 어때요?\nB: 거의 반반이에요.",
     exampleSrc:"A: Can only males participate in this event?\nB: No, anyone can participate.\nA: What's the male to female ratio?\nB: It's almost half and half.",
     funFact:"In forms and surveys, you will see 남성/여성 (male/female). In daily speech, 남자/여자 is far more common."},

    {type:"teach", trg:"노인", src:"elderly person", pos:"noun", gender:null,
     note:"Hanja: 老人 (old + person).\nRespectful term for seniors.",
     example:"A: 지하철에서 노인분께 자리를 양보했어요.\nB: 잘했어요. 어르신을 존경해야 해요.\nA: 그 분이 고마워하셨어요.\nB: 작은 배려가 큰 감동이 되죠.",
     exampleSrc:"A: I gave up my seat to an elderly person on the subway.\nB: Good job. We should respect elders.\nA: They were grateful.\nB: Small gestures of care create big impressions.",
     funFact:"Korean subway seats have designated 노약자석 (seats for elderly and weak). Sitting there as a young person is taboo."},

    // ── Quiz batch 1 ──
    {type:"mc",
     q:"___으로는 반대예요. 하지만 회사 입장은 달라요.",
     opts:["개인적","남성적","노인적","사회적"],
     ans:"개인적",
     hint:"Personally I disagree, but the company's position is different. Which word means personally?"},

    {type:"fb",
     s:"지하철에서 {1}에게 자리를 양보했어요.",
     a:["노인"],
     opts:["노인","남성","개인","모임"],
     hint:"I gave my seat to an older person on the subway. Which respectful term for seniors fits?",
     sSrc:"I gave up my seat to an elderly person on the subway."},

    // ── Teach 5-8: Family and social roles ──
    {type:"teach", trg:"며느리", src:"daughter-in-law", pos:"noun", gender:null,
     note:"Native Korean word.\nThe wife of one's son.",
     example:"A: 며느리가 요리를 잘해요.\nB: 정말요? 뭘 잘 만들어요?\nA: 한국 음식을 잘 만들어요.\nB: 좋은 며느리를 만났네요.",
     exampleSrc:"A: My daughter-in-law cooks well.\nB: Really? What does she make well?\nA: She makes Korean food well.\nB: You found a good daughter-in-law.",
     funFact:"The 며느리-시어머니 (daughter-in-law and mother-in-law) dynamic is a major theme in Korean dramas."},

    {type:"teach", trg:"고모", src:"paternal aunt", pos:"noun", gender:null,
     note:"Hanja: 姑母 (father's sister + mother).\nFather's sister specifically.",
     example:"A: 주말에 고모 집에 갈 거예요.\nB: 고모가 어디 사세요?\nA: 부산에 사세요.\nB: 부산이면 좀 멀죠?",
     exampleSrc:"A: I'm going to my paternal aunt's house this weekend.\nB: Where does she live?\nA: She lives in Busan.\nB: Busan is a bit far, isn't it?",
     funFact:"Korean has different words for every family member: 고모 (father's sister), 이모 (mother's sister), 큰엄마, 작은엄마, etc."},

    {type:"teach", trg:"녀석", src:"fellow, guy (casual)", pos:"noun", gender:null,
     note:"Informal, affectionate or mildly annoyed tone.\nBound noun, used with 이/그/저.",
     example:"A: 그 녀석 또 늦었어.\nB: 맨날 그래. 걔는 시간 개념이 없어.\nA: 그래도 착한 녀석이야.\nB: 맞아, 그건 인정해.",
     exampleSrc:"A: That guy is late again.\nB: He's always like that. He has no sense of time.\nA: But he's a good fellow.\nB: True, I'll give him that.",
     funFact:"녀석 can be affectionate (이 녀석! = you rascal!) or annoyed (그 녀석 = that guy), depending on tone."},

    {type:"teach", trg:"동기", src:"motive; classmate (same year)", pos:"noun", gender:null,
     note:"Hanja: 動機 (move + opportunity) for motive.\n同期 (same + period) for classmate.",
     example:"A: 대학교 동기를 만났어요.\nB: 오랜만이었어요?\nA: 네, 10년 만이에요.\nA: 동기들이랑 같이 밥 먹었어요.",
     exampleSrc:"A: I met a university classmate.\nB: Had it been a long time?\nA: Yes, 10 years.\nA: I ate with my classmates together.",
     funFact:"In Korean workplaces, 동기 (same-year hire) creates a special bond. You share the struggle of starting together."},

    // ── Quiz batch 2 ──
    {type:"match", pairs:[
      {trg:"며느리", src:"daughter-in-law"},
      {trg:"고모", src:"paternal aunt"},
      {trg:"녀석", src:"fellow, guy"},
      {trg:"동기", src:"motive; classmate"}
    ]},

    // ── Teach 9-12: Gathering concepts ──
    {type:"teach", trg:"만남", src:"meeting, encounter", pos:"noun", gender:null,
     note:"만나다 (to meet) + -ㅁ (noun form).\nThe act or occasion of meeting.",
     example:"A: 좋은 만남이었어요.\nB: 저도 즐거웠어요.\nA: 다음 만남은 언제예요?\nB: 다음 주 토요일 어때요?",
     exampleSrc:"A: It was a nice meeting.\nB: I enjoyed it too.\nA: When is our next meeting?\nB: How about next Saturday?",
     funFact:"Korean dating apps often use 만남 in their branding. 소개팅 = blind date, also a type of 만남."},

    {type:"teach", trg:"모임", src:"gathering, meetup", pos:"noun", gender:null,
     note:"모이다 (to gather) + -ㅁ (noun form).\nAny group meeting, from book clubs to family.",
     example:"A: 이번 주에 모임이 있어요?\nB: 네, 금요일에 동창 모임이 있어요.\nA: 어디에서 해요?\nB: 강남에서 해요. 같이 갈래요?",
     exampleSrc:"A: Do you have a gathering this week?\nB: Yes, there's an alumni meetup on Friday.\nA: Where is it?\nB: In Gangnam. Want to come along?",
     funFact:"모임 culture is huge in Korea: 동창 모임 (alumni), 독서 모임 (book club), 번개 모임 (flash meetup)."},

    {type:"teach", trg:"다수", src:"majority, most people", pos:"noun", gender:null,
     note:"Hanja: 多數 (many + number).\nOpposite: 소수 (minority).",
     example:"A: 다수가 찬성했어요.\nB: 몇 퍼센트예요?\nA: 80%가 찬성했어요.\nB: 압도적인 다수네요.",
     exampleSrc:"A: The majority agreed.\nB: What percentage?\nA: 80% agreed.\nB: That's an overwhelming majority.",
     funFact:"다수결 (majority rule) is the standard decision-making method in Korean organizations. 다수 + 決 (decide)."},

    {type:"teach", trg:"동시", src:"same time, simultaneously", pos:"noun", gender:null,
     note:"Hanja: 同時 (same + time).\n동시에 = at the same time.",
     example:"A: 두 가지를 동시에 할 수 있어요?\nB: 네, 동시에 하는 게 더 빨라요.\nA: 저는 한 가지씩 하는 게 좋아요.\nB: 사람마다 다르죠.",
     exampleSrc:"A: Can you do two things at the same time?\nB: Yes, doing them simultaneously is faster.\nA: I prefer doing one thing at a time.\nB: Everyone is different.",
     funFact:"The Korean expression 동시통역 means simultaneous interpretation, a highly respected profession in Korea."},

    // ── Quiz batch 3 ──
    {type:"fb",
     s:"금요일에 동창 {1}이 있어요.",
     a:["모임"],
     opts:["모임","만남","다수","동시"],
     hint:"There is an alumni gathering on Friday. Which noun means a group meetup?",
     sSrc:"There is an alumni gathering on Friday."},

    {type:"mc",
     q:"___가 찬성하면 그렇게 결정해요.",
     opts:["개인","다수","동시","모임"],
     ans:"다수",
     hint:"If the majority agrees, we decide that way. Which noun means the greater number of people?"},

    // ── Teach 13-16: Social action verbs ──
    {type:"teach", trg:"모시다", src:"to serve, to accompany (honorific)", pos:"verb", gender:null,
     note:"Honorific verb for accompanying or serving.\nUsed for elders and respected people.",
     example:"A: 어머니를 모시고 식당에 갔어요.\nB: 어디로 모셨어요?\nA: 한정식 집으로 모셨어요.\nB: 어머니가 좋아하셨겠네요.",
     exampleSrc:"A: I accompanied my mother to a restaurant.\nB: Where did you take her?\nA: I took her to a Korean set meal restaurant.\nB: She must have been pleased.",
     funFact:"모시다 is one of the key Korean honorific verbs. Using it shows deep respect for the person you serve."},

    {type:"teach", trg:"데리다", src:"to take along (a person)", pos:"verb", gender:null,
     note:"Used with 가다/오다: 데리고 가다 (take along),\n데리고 오다 (bring along). For people below you.",
     example:"A: 아이를 데리고 올 수 있어요?\nB: 네, 데리고 갈게요.\nA: 아이들도 환영이에요.\nB: 감사해요. 아이가 좋아할 거예요.",
     exampleSrc:"A: Can you bring the child along?\nB: Yes, I'll bring them.\nA: Children are welcome too.\nB: Thank you. The child will be happy.",
     funFact:"모시다 is for superiors (모시고 가다), 데리다 is for equals/juniors (데리고 가다). Mixing them up is a faux pas."},

    {type:"teach", trg:"돌보다", src:"to take care of, to look after", pos:"verb", gender:null,
     note:"돌 (turn) + 보다 (look).\nLooking around someone, watching over them.",
     example:"A: 누가 아이를 돌봐요?\nB: 할머니가 돌봐 주세요.\nA: 할머니가 좋아하세요?\nB: 네, 손주를 돌보는 걸 좋아하세요.",
     exampleSrc:"A: Who takes care of the child?\nB: Grandmother looks after them.\nA: Does she enjoy it?\nB: Yes, she likes taking care of her grandchild.",
     funFact:"돌봄 (caregiving) has become a major social issue in Korea's aging society. 돌봄 서비스 = care services."},

    {type:"teach", trg:"나누다", src:"to share, to divide", pos:"verb", gender:null,
     note:"Sharing food, stories, or dividing into parts.\n이야기를 나누다 = to share a conversation.",
     example:"A: 같이 나눠 먹을까요?\nB: 좋아요, 반씩 나눠요.\nA: 이야기도 나눠요.\nB: 네, 오랜만에 이야기 나누니까 좋아요.",
     exampleSrc:"A: Shall we share and eat together?\nB: Sure, let's split it in half.\nA: Let's share stories too.\nB: Yes, it's nice to share conversation after a long time.",
     funFact:"정 나누다 (to share affection/warmth) captures the Korean concept of 정, the deep emotional bond between people."},

    // ── Quiz batch 4 ──
    {type:"match", pairs:[
      {trg:"모시다", src:"to serve (honorific)"},
      {trg:"데리다", src:"to take along"},
      {trg:"돌보다", src:"to take care of"},
      {trg:"나누다", src:"to share, divide"}
    ]},

    // ── Teach 17-20: Final group ──
    {type:"teach", trg:"모으다", src:"to gather, to collect", pos:"verb", gender:null,
     note:"Transitive: YOU collect things together.\n돈을 모으다 = to save money.",
     example:"A: 취미가 뭐예요?\nB: 우표를 모으는 거예요.\nA: 많이 모았어요?\nB: 네, 500장 넘게 모았어요.",
     exampleSrc:"A: What's your hobby?\nB: Collecting stamps.\nA: Have you collected many?\nB: Yes, I've collected over 500.",
     funFact:"돈을 모으다 (to save money) is one of the first financial expressions Koreans learn as children."},

    {type:"teach", trg:"모이다", src:"to gather, to assemble", pos:"verb", gender:null,
     note:"Intransitive form of 모으다.\nPeople or things come together on their own.",
     example:"A: 사람들이 많이 모였네요.\nB: 네, 100명 넘게 모였어요.\nA: 왜 이렇게 모였어요?\nB: 축제 때문에 모인 거예요.",
     exampleSrc:"A: A lot of people have gathered.\nB: Yes, over 100 people gathered.\nA: Why did they gather like this?\nB: They gathered because of the festival.",
     funFact:"모으다 (you collect) vs 모이다 (they gather): another classic Korean transitive/intransitive pair."},

    {type:"teach", trg:"경험", src:"experience", pos:"noun", gender:null,
     note:"Hanja: 經驗 (pass through + test).\n경험이 있다/없다 = have/lack experience.",
     example:"A: 이런 경험이 있어요?\nB: 네, 비슷한 경험이 있어요.\nA: 그 경험이 도움이 될 거예요.\nB: 경험이 많으면 자신감이 생겨요.",
     exampleSrc:"A: Do you have this kind of experience?\nB: Yes, I have similar experience.\nA: That experience will be helpful.\nB: When you have a lot of experience, confidence builds.",
     funFact:"Korean resumes always have a 경험 section. Work experience, volunteer experience, and life experience all count."},

    {type:"teach", trg:"경험하다", src:"to experience", pos:"verb", gender:null,
     note:"경험 + 하다.\nActively going through something.",
     example:"A: 한국에서 특별한 걸 경험했어요?\nB: 네, 한복을 입어 봤어요.\nA: 어땠어요?\nB: 새로운 문화를 경험하니까 정말 좋았어요.",
     exampleSrc:"A: Did you experience anything special in Korea?\nB: Yes, I tried wearing hanbok.\nA: How was it?\nB: Experiencing a new culture was really great.",
     funFact:"체험하다 is a close synonym, but emphasizes hands-on, physical experience (like a cooking class or farm visit)."},

    // ── Final quiz batch ──
    {type:"mc",
     q:"어머니를 ___고 병원에 갔어요.",
     opts:["데리","돌보","모시","나누"],
     ans:"모시",
     hint:"I accompanied my mother to the hospital. Which honorific verb is used for elders?"},

    {type:"fb",
     s:"새로운 문화를 {1}는 것은 중요해요.",
     a:["경험하"],
     opts:["경험하","모이","모으","나누"],
     hint:"Going through new cultural situations is important. Which verb means to experience?",
     sSrc:"Experiencing new cultures is important."},

    {type:"mc",
     q:"축제 때문에 사람들이 많이 ___.",
     opts:["모았어요","나눴어요","돌봤어요","모였어요"],
     ans:"모였어요",
     hint:"People came together because of the festival. Which intransitive verb means to assemble?"}
  ]
};

export default LESSON_14;
