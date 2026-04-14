// Korean B2 — Batch 4, Lesson 12: Beauty and Delay
// Words: 뭘, 뭣, 미, 미끄러지다, 미끄럽다, 미니, 미루다, 미만, 미사일, 미술관, 미스, 미역, 미용실, 미움, 미워하다, 미인, 미처, 미팅, 미혼, 민간

const LESSON_12 = {
  id:"kov2_b2b4_l12", title:"미루다와 미인", icon:"💅", xp:15, board:true,
  steps:[
    {type:"intro", title:"미루다와 미인",
     desc:"Learn words about beauty, delay, and various everyday concepts. This lesson covers 미- words from beauty to procrastination, plus useful conversational vocabulary.",
     goals:["Master 20 words about beauty, delay, and daily life","Understand 미- Hanja compounds (beauty, not-yet, un-)","Use casual pronouns and conversational expressions"]},

    {type:"teach", trg:"뭘", src:"what (casual object form)", pos:"intj", gender:null,
     note:"Contracted from 무엇을 (what + object).\nCasual spoken form.",
     example:"A: 뭘 먹을까?\nB: 아무거나 괜찮아.",
     exampleSrc:"A: What shall we eat?\nB: Anything is fine.",
     funFact:"Korean contractions: 무엇을 > 뭘, 무엇이 > 뭐가, 무엇 > 뭐. All used constantly in spoken Korean."},

    {type:"teach", trg:"뭣", src:"what (emphatic/dialectal)", pos:"pron", gender:null,
     note:"Variant of 무엇 (what).\nUsed in expressions and fixed phrases.",
     example:"A: 그게 뭣이 중요해?\nB: 그래도 알아 둬야지.",
     exampleSrc:"A: What importance does that have?\nB: Still, you should know it.",
     funFact:"뭣 appears in 뭣이 중헌디 (what is important), a famous line from the Korean movie 'My Love, My Bride.'"},

    {type:"teach", trg:"미", src:"beauty; not yet (prefix)", pos:"noun", gender:null,
     note:"Sino-Korean. 美 (beauty) or 未 (not yet).\nTwo different characters sharing this sound.",
     example:"A: 한국의 미에 대한 전시회가 있어요.\nB: 관심 있어, 같이 가자.",
     exampleSrc:"A: There is an exhibition about Korean beauty.\nB: I am interested, let us go together.",
     funFact:"미 as 美 (beauty): 미인, 미술. 미 as 未 (not yet): 미혼, 미만. Context determines which Hanja."},

    {type:"teach", trg:"미끄러지다", src:"to slip, to slide", pos:"verb", gender:null,
     note:"미끄럽다 (slippery) related verb.\nTo lose footing and slide.",
     example:"A: 빙판에서 미끄러질 뻔했어!\nB: 겨울에는 조심해야 해.",
     exampleSrc:"A: I almost slipped on the ice!\nB: You need to be careful in winter.",
     funFact:"미끄럼틀 (slide, playground equipment) uses the same root. Korean kids love 미끄럼틀 in parks."},

    {type:"teach", trg:"미끄럽다", src:"to be slippery", pos:"adj", gender:null,
     note:"Native Korean adjective.\nA surface that is hard to grip.",
     example:"A: 비 와서 길이 미끄러워.\nB: 천천히 걸어가자.",
     exampleSrc:"A: The road is slippery because of rain.\nB: Let us walk slowly.",
     funFact:"ㅂ-irregular: 미끄럽다 becomes 미끄러워 (casual), 미끄러운 (modifying). The ㅂ changes to 우."},

    {type:"mc",
     q:"'미'에 해당하는 한자 중 '아직 아닌'을 뜻하는 것은?",
     opts:["未","美","味","迷"],
     ans:"未",
     hint:"This character means 'not yet' and appears in words like 미혼 (unmarried) and 미만 (under/less than)."},

    {type:"teach", trg:"미니", src:"mini, miniature", pos:"noun", gender:null,
     note:"Loanword from English 'mini.'\nSmall-sized version of something.",
     example:"A: 미니 냉장고를 방에 놨어.\nB: 편리하겠다!",
     exampleSrc:"A: I put a mini refrigerator in my room.\nB: That must be convenient!",
     funFact:"미니스커트 (miniskirt), 미니밴 (minivan), 미니어처 (miniature) are all common Korean loanwords."},

    {type:"teach", trg:"미루다", src:"to postpone, to put off", pos:"verb", gender:null,
     note:"Native Korean verb.\nTo delay doing something.",
     example:"A: 숙제를 내일로 미루면 안 돼.\nB: 알아, 지금 시작할게.",
     exampleSrc:"A: You should not put off homework until tomorrow.\nB: I know, I will start now.",
     funFact:"미루다 is every procrastinator's verb. The saying 오늘 할 일을 내일로 미루지 마라 (do not put off today's work)."},

    {type:"teach", trg:"미만", src:"under, less than, below", pos:"noun", gender:null,
     note:"Sino-Korean. 未 (not yet) + 滿 (full).\nBelow a certain number or age.",
     example:"A: 18세 미만은 입장 불가입니다.\nB: 신분증을 보여 주셔야 해요.",
     exampleSrc:"A: Those under 18 cannot enter.\nB: You need to show your ID.",
     funFact:"From Hanja 未滿. The opposite is 이상 (以上, above/more than). 미만 is exclusive: 18세 미만 = 17 and under."},

    {type:"teach", trg:"미사일", src:"missile", pos:"noun", gender:null,
     note:"Loanword from English 'missile.'\nA weapon that flies to a target.",
     example:"A: 미사일 발사 소식을 들었어요?\nB: 네, 뉴스에서 봤어요.",
     exampleSrc:"A: Did you hear the news about the missile launch?\nB: Yes, I saw it on the news.",
     funFact:"미사일 is frequently in Korean news due to regional security. 탄도 미사일 (ballistic missile) is a key term."},

    {type:"teach", trg:"미술관", src:"art museum, art gallery", pos:"noun", gender:null,
     note:"Sino-Korean. 美術 (fine arts) + 館 (building).\nA building displaying artwork.",
     example:"A: 주말에 미술관에 갈까?\nB: 좋아, 어떤 전시를 하는데?",
     exampleSrc:"A: Shall we go to the art museum on the weekend?\nB: Sure, what exhibition is on?",
     funFact:"From Hanja 美術館. 국립현대미술관 (National Museum of Modern and Contemporary Art) is Korea's top art museum."},

    {type:"fb",
     s:"오늘 할 일을 내일로 {1}지 마세요.",
     a:["미루"],
     opts:["미루","미끄러","미워하","미루다"],
     hint:"This native Korean verb means to postpone or put off doing something.",
     sSrc:"Do not {1} today's tasks until tomorrow."},

    {type:"teach", trg:"미스", src:"miss (title); mistake", pos:"noun", gender:null,
     note:"Loanword from English 'miss.'\nA title for an unmarried woman, or an error.",
     example:"A: 미스 코리아 대회를 봤어?\nB: 올해는 안 봤어.",
     exampleSrc:"A: Did you watch the Miss Korea pageant?\nB: I did not watch it this year.",
     funFact:"미스 코리아 (Miss Korea) has been held since 1955. The term 미스 for 'miss' is becoming dated in modern Korean."},

    {type:"teach", trg:"미역", src:"seaweed (wakame)", pos:"noun", gender:null,
     note:"Native Korean word.\nEdible brown seaweed used in soup.",
     example:"A: 생일에 미역국을 먹었어?\nB: 당연하지, 엄마가 끓여 줬어.",
     exampleSrc:"A: Did you eat seaweed soup on your birthday?\nB: Of course, my mom made it for me.",
     funFact:"Eating 미역국 (seaweed soup) on birthdays is a Korean tradition. New mothers also eat it for recovery."},

    {type:"teach", trg:"미용실", src:"hair salon, beauty salon", pos:"noun", gender:null,
     note:"Sino-Korean. 美容 (beauty) + 室 (room).\nA place for haircuts and styling.",
     example:"A: 미용실에 예약했어?\nB: 응, 오후 3시에 갈 거야.",
     exampleSrc:"A: Did you make a reservation at the salon?\nB: Yes, I am going at 3 PM.",
     funFact:"From Hanja 美容室. Men's barbershops are 이발소, while 미용실 traditionally served women. Now both serve everyone."},

    {type:"teach", trg:"미움", src:"hatred, being hated", pos:"noun", gender:null,
     note:"밉다 (hateful) + ㅁ (nominalizer).\nThe feeling of hatred or dislike.",
     example:"A: 미움을 받는 건 힘든 일이야.\nB: 모든 사람을 만족시킬 수는 없어.",
     exampleSrc:"A: Being hated is a hard thing.\nB: You cannot satisfy everyone.",
     funFact:"The -ㅁ nominalizer creates emotion nouns: 사랑 > 사랑함, 미움, 기쁨 (joy), 슬픔 (sadness)."},

    {type:"teach", trg:"미워하다", src:"to hate, to dislike strongly", pos:"verb", gender:null,
     note:"밉다 (hateful) + 어하다 (feel).\nTo actively feel dislike toward someone.",
     example:"A: 나를 미워하지 마.\nB: 미워하는 게 아니라 실망한 거야.",
     exampleSrc:"A: Do not hate me.\nB: I do not hate you, I am just disappointed.",
     funFact:"미워하다 (to hate someone) vs. 밉다 (to be hateful/dislikable). The -어하다 suffix externalizes the feeling."},

    {type:"teach", trg:"미인", src:"a beauty, a beautiful woman", pos:"noun", gender:null,
     note:"Sino-Korean. 美 (beauty) + 人 (person).\nA person of great beauty.",
     example:"A: 그녀는 정말 미인이네요.\nB: 성격도 좋아서 인기가 많아요.",
     exampleSrc:"A: She is truly a beauty.\nB: She is popular because she has a good personality too.",
     funFact:"From Hanja 美人. Traditional Korean beauty ideals included pale skin and a small mouth: 미인의 조건."},

    {type:"mc",
     q:"한국에서 생일에 꼭 먹는 음식은?",
     opts:["미역국","갈비탕","된장찌개","삼계탕"],
     ans:"미역국",
     hint:"This seaweed soup is a must-eat birthday food in Korean tradition, also given to new mothers."},

    {type:"teach", trg:"미처", src:"(not) yet, (not) in time", pos:"adv", gender:null,
     note:"Native Korean adverb.\nAlways used with negation: could not manage to.",
     example:"A: 미처 확인하지 못했어요.\nB: 괜찮아요, 지금이라도 봐 주세요.",
     exampleSrc:"A: I could not check it in time.\nB: It is OK, please look at it now.",
     funFact:"미처 MUST be followed by a negative: 미처 몰랐다 (did not realize in time), 미처 준비 못했다 (could not prepare in time)."},

    {type:"teach", trg:"미팅", src:"group blind date; meeting", pos:"noun", gender:null,
     note:"Loanword from English 'meeting.'\nIn Korean, usually means a group blind date.",
     example:"A: 내일 미팅 나가기로 했어.\nB: 재미있겠다! 몇 대 몇이야?",
     exampleSrc:"A: I decided to go on a group date tomorrow.\nB: Sounds fun! How many people on each side?",
     funFact:"In Korean, 미팅 primarily means a group blind date (3:3 or 4:4), not a business meeting. 회의 is for work meetings."},

    {type:"teach", trg:"미혼", src:"unmarried, single", pos:"noun", gender:null,
     note:"Sino-Korean. 未 (not yet) + 婚 (marriage).\nNot yet married.",
     example:"A: 아직 미혼이세요?\nB: 네, 아직 결혼 계획은 없어요.",
     exampleSrc:"A: Are you still unmarried?\nB: Yes, I have no marriage plans yet.",
     funFact:"From Hanja 未婚. The opposite is 기혼 (既婚, already married). 미혼 carries no negative connotation."},

    {type:"teach", trg:"민간", src:"civilian, private sector", pos:"noun", gender:null,
     note:"Sino-Korean. 民 (people) + 間 (among).\nThe non-government, non-military sector.",
     example:"A: 민간 기업의 참여가 필요해요.\nB: 정부와 민간이 협력해야죠.",
     exampleSrc:"A: Participation from private companies is needed.\nB: The government and private sector should cooperate.",
     funFact:"From Hanja 民間. 민간인 (civilian), 민간 요법 (folk remedy), 민간 투자 (private investment)."},

    {type:"fb",
     s:"그녀는 {1}이지만 결혼에 관심이 없다.",
     a:["미혼"],
     opts:["미혼","미인","미움","민간"],
     hint:"This Sino-Korean word means 'not yet married' and describes someone's unmarried status.",
     sSrc:"She is {1} but has no interest in marriage."},

    {type:"match", pairs:[
      {trg:"미루다", src:"to postpone"},
      {trg:"미역", src:"seaweed"},
      {trg:"미처", src:"(not) yet, (not) in time"},
      {trg:"미혼", src:"unmarried"}
    ]}
  ]
};
export default LESSON_12;
