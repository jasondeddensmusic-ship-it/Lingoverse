// Korean B2 — Batch 3, Lesson 20: Korean Food, Satisfaction, and Speech
// Words: 마음씨, 마이크, 마주치다, 마중, 마찰, 마크, 막걸리, 막내, 막상, 만두, 만만하다, 만세, 만점, 만족, 만족스럽다, 만족하다, 만화가, 말기, 말다, 말리다, 말씀드리다

const LESSON_20 = {
  id:"kov2_b2b3_l20", title:"만족과 말씀", icon:"🥟", xp:15, board:true,
  steps:[
    {type:"intro", title:"만족과 말씀",
     desc:"Complete this batch with vocabulary about character, Korean food culture, satisfaction, and polite speech. These words are essential for expressing personality and using honorifics naturally.",
     goals:["Master 20 words about personality, food, and polite expression","Understand the 만 (full/satisfy) word family","Use honorific speech patterns naturally"]},

    {type:"teach", trg:"마음씨", src:"disposition, nature, temperament", pos:"noun", gender:null,
     note:"마음 (mind/heart) + 씨 (seed/quality).\nA person's inner nature or character quality.",
     example:"A: 그 사람은 마음씨가 참 고와.\nB: 맞아, 항상 남을 도와주잖아.",
     exampleSrc:"A: That person has a really kind disposition.\nB: Right, they always help others.",
     funFact:"마음씨가 곱다 (to have a beautiful heart) is one of the highest compliments in Korean culture."},

    {type:"teach", trg:"마이크", src:"microphone", pos:"noun", gender:null,
     note:"Loanword from English 'mic/mike.'\nA device for amplifying voice.",
     example:"A: 마이크 볼륨 좀 높여 줘.\nB: 알겠어, 지금 조절할게.",
     exampleSrc:"A: Please turn up the microphone volume.\nB: OK, I will adjust it now.",
     funFact:"Korean noraebang (karaoke) culture means almost everyone knows how to handle a 마이크. It is a social essential."},

    {type:"teach", trg:"마주치다", src:"to run into, to come face to face with", pos:"verb", gender:null,
     note:"마주 (face to face) + 치다 (to bump).\nTo unexpectedly encounter someone.",
     example:"A: 길에서 옛 친구를 마주쳤어.\nB: 반가웠겠다!",
     exampleSrc:"A: I ran into an old friend on the street.\nB: That must have been nice!",
     funFact:"마주치다 implies a chance meeting. 눈이 마주치다 (eyes meet) describes the moment two people's gazes lock."},

    {type:"teach", trg:"마중", src:"going to meet/greet someone arriving", pos:"noun", gender:null,
     note:"Native Korean word.\nThe act of going to welcome someone at their arrival point.",
     example:"A: 공항에 마중 나갈까?\nB: 그래 줄 수 있어? 고마워!",
     exampleSrc:"A: Shall I come to meet you at the airport?\nB: Can you? Thank you!",
     funFact:"마중 나가다 (to go out to greet) is a warm Korean custom. The opposite: 배웅 (seeing someone off when they depart)."},

    {type:"teach", trg:"마찰", src:"friction, conflict", pos:"noun", gender:null,
     note:"Sino-Korean. 摩 (rub) + 擦 (scrape).\nPhysical friction or interpersonal conflict.",
     example:"A: 부서 간에 마찰이 있어.\nB: 대화로 해결해야지.",
     exampleSrc:"A: There is friction between departments.\nB: We need to resolve it through dialogue.",
     funFact:"From Hanja 摩擦. Used both for physics (마찰력 = friction force) and social conflict (마찰을 빚다 = to cause friction)."},

    {type:"mc",
     q:"'마중 나가다'의 뜻은?",
     opts:["도착하는 사람을 맞으러 가다","혼자 산책하러 가다","물건을 사러 가다","운동하러 가다"],
     ans:"도착하는 사람을 맞으러 가다",
     hint:"This expression means going to a place where someone is arriving to welcome them."},

    {type:"teach", trg:"마크", src:"mark, logo, symbol", pos:"noun", gender:null,
     note:"Loanword from English 'mark.'\nA distinguishing sign or brand symbol.",
     example:"A: 이 제품에 인증 마크가 있어?\nB: 응, 여기 붙어 있어.",
     exampleSrc:"A: Does this product have a certification mark?\nB: Yes, it is right here.",
     funFact:"상표 마크 (trademark), 인증 마크 (certification mark). Korean products display various quality certification marks."},

    {type:"teach", trg:"막걸리", src:"makgeolli (Korean rice wine)", pos:"noun", gender:null,
     note:"막 (roughly) + 걸리 (filtered).\nA traditional milky rice wine.",
     example:"A: 비 오는 날에 막걸리 한 잔 어때?\nB: 파전이랑 같이 먹으면 최고지!",
     exampleSrc:"A: How about a glass of makgeolli on a rainy day?\nB: It is the best with pajeon (green onion pancake)!",
     funFact:"막걸리 with 파전 on rainy days is a beloved Korean food pairing. The sound of rain supposedly matches the sizzling of pajeon."},

    {type:"teach", trg:"막내", src:"youngest child, youngest member", pos:"noun", gender:null,
     note:"막 (last/end) + 내 (inside).\nThe last-born child or youngest in a group.",
     example:"A: 너가 막내야?\nB: 응, 형이 두 명 있어.",
     exampleSrc:"A: Are you the youngest?\nB: Yes, I have two older brothers.",
     funFact:"In Korean group dynamics, the 막내 has specific duties: cleaning up, running errands, and being playfully teased."},

    {type:"teach", trg:"막상", src:"actually, when it comes down to it", pos:"adv", gender:null,
     note:"Native Korean adverb.\nExpresses a reality different from expectation.",
     example:"A: 막상 해 보니까 쉽더라.\nB: 걱정했던 것보다 나았구나.",
     exampleSrc:"A: When I actually tried it, it was easy.\nB: So it was better than you worried.",
     funFact:"막상 always implies a contrast: what you expected vs. what actually happened. 막상막하 means 'neck and neck.'"},

    {type:"teach", trg:"만두", src:"dumpling", pos:"noun", gender:null,
     note:"Sino-Korean. 饅 (steamed bread) + 頭 (head).\nA filled dough pocket, steamed or fried.",
     example:"A: 만두를 직접 만들어 볼까?\nB: 좋아! 김치만두를 만들자.",
     exampleSrc:"A: Shall we try making dumplings ourselves?\nB: Great! Let us make kimchi dumplings.",
     funFact:"From Hanja 饅頭. Korean 만두 varieties: 김치만두, 고기만두, 물만두 (boiled), 찐만두 (steamed), 군만두 (fried)."},

    {type:"fb",
     s:"비 오는 날에 파전과 {1}는 최고의 조합이다.",
     a:["막걸리"],
     opts:["막걸리","만두","마약","마요네즈"],
     hint:"This is a traditional Korean milky rice wine, the classic rainy-day drink.",
     sSrc:"Pajeon and {1} are the best combination on a rainy day."},

    {type:"teach", trg:"만만하다", src:"to be easy, to be a pushover, to be manageable", pos:"adj", gender:null,
     note:"Native Korean adjective.\nSomething or someone easy to deal with.",
     example:"A: 이 시험 만만하지 않아.\nB: 열심히 준비해야겠다.",
     exampleSrc:"A: This exam is no pushover.\nB: I need to prepare hard.",
     funFact:"만만하게 보다 (to look down on, to underestimate) is a warning phrase: 나를 만만하게 보지 마! (Do not underestimate me!)"},

    {type:"teach", trg:"만세", src:"hooray, long live; ten thousand years", pos:"noun", gender:null,
     note:"Sino-Korean. 萬 (ten thousand) + 歲 (years).\nA celebratory cheer or wish for longevity.",
     example:"A: 대한민국 만세!\nB: 독립 기념일이라 그런지 감동적이야.",
     exampleSrc:"A: Long live Korea!\nB: It is moving because it is Independence Day.",
     funFact:"From Hanja 萬歲. The March 1st Independence Movement of 1919 is called 삼일 만세 운동, when Koreans shouted 만세 for freedom."},

    {type:"teach", trg:"만점", src:"perfect score, full marks", pos:"noun", gender:null,
     note:"Sino-Korean. 滿 (full) + 點 (point).\nThe maximum possible score.",
     example:"A: 시험에서 만점을 받았어!\nB: 대단하다! 축하해!",
     exampleSrc:"A: I got a perfect score on the exam!\nB: Amazing! Congratulations!",
     funFact:"From Hanja 滿點. TOPIK만점 (TOPIK perfect score) and 수능 만점 (CSAT perfect score) are celebrated achievements."},

    {type:"teach", trg:"만족", src:"satisfaction, contentment", pos:"noun", gender:null,
     note:"Sino-Korean. 滿 (full) + 足 (sufficient).\nThe state of being fully content.",
     example:"A: 이번 결과에 만족해?\nB: 완벽하지는 않지만 만족해.",
     exampleSrc:"A: Are you satisfied with this result?\nB: It is not perfect but I am satisfied.",
     funFact:"From Hanja 滿足. 고객 만족 (customer satisfaction) is a key business metric. 만족도 (satisfaction level) is commonly measured."},

    {type:"teach", trg:"만족스럽다", src:"to be satisfactory, to be pleasing", pos:"adj", gender:null,
     note:"만족 (satisfaction) + 스럽다 (having the quality of).\nSomething that gives satisfaction.",
     example:"A: 결과가 만족스러워?\nB: 네, 매우 만족스러운 결과예요.",
     exampleSrc:"A: Are you happy with the result?\nB: Yes, it is a very satisfactory result.",
     funFact:"The -스럽다 suffix creates adjectives from nouns: 자연스럽다 (natural), 사랑스럽다 (lovable), 걱정스럽다 (worrisome)."},

    {type:"mc",
     q:"'만만하게 보지 마'의 의미는?",
     opts:["나를 무시하거나 과소평가하지 마라","나를 자주 봐 달라","나를 도와달라","나를 기억해 달라"],
     ans:"나를 무시하거나 과소평가하지 마라",
     hint:"This is a warning not to treat someone as if they are easy to deal with or unimportant."},

    {type:"teach", trg:"만족하다", src:"to be satisfied, to be content", pos:"verb", gender:null,
     note:"만족 (satisfaction) + 하다 (to do/be).\nTo feel contentment with something.",
     example:"A: 현재 생활에 만족하고 있어?\nB: 대체로 만족해, 감사한 마음이야.",
     exampleSrc:"A: Are you satisfied with your current life?\nB: Generally satisfied, I feel grateful.",
     funFact:"만족하다 can take the particle 에: 결과에 만족하다 (to be satisfied with the result). Very common TOPIK pattern."},

    {type:"teach", trg:"만화가", src:"cartoonist, manga/manhwa artist", pos:"noun", gender:null,
     note:"만화 (cartoon/comics) + 가 (家, professional).\nA person who draws comics.",
     example:"A: 유명한 만화가가 되고 싶어.\nB: 그림을 매일 연습해야 해.",
     exampleSrc:"A: I want to become a famous cartoonist.\nB: You need to practice drawing every day.",
     funFact:"From Hanja 漫畫家. Korea's webtoon industry has made 만화가 a lucrative profession, with global platforms like LINE Webtoon."},

    {type:"teach", trg:"말기", src:"terminal stage, end stage, last period", pos:"noun", gender:null,
     note:"Sino-Korean. 末 (end) + 期 (period).\nThe final phase of something.",
     example:"A: 조선 말기에 큰 변화가 있었어.\nB: 서양 문물이 들어오던 시기지.",
     exampleSrc:"A: There were big changes in the late Joseon period.\nB: It was the time when Western civilization was entering.",
     funFact:"From Hanja 末期. Also used medically: 말기 암 (terminal cancer). 초기 (early), 중기 (middle), 말기 (late) form a time trio."},

    {type:"teach", trg:"말다", src:"to stop doing, to cease; to roll up", pos:"verb", gender:null,
     note:"Native Korean verb with two meanings.\nTo desist from an action or to roll something.",
     example:"A: 그만 말아, 더 이상 하지 마.\nB: 알겠어, 멈출게.",
     exampleSrc:"A: Stop it, do not do it anymore.\nB: OK, I will stop.",
     funFact:"말다 in negation (지 말다) is one of the most essential grammar patterns: 하지 마 (do not do it)."},

    {type:"teach", trg:"말리다", src:"to stop someone, to dissuade; to dry", pos:"verb", gender:null,
     note:"Native Korean verb with two meanings.\nTo prevent someone from doing something, or to remove moisture.",
     example:"A: 친구가 위험한 일을 하려고 해서 말렸어.\nB: 잘했어, 그건 정말 위험해.",
     exampleSrc:"A: My friend was trying to do something dangerous so I stopped them.\nB: Good job, that is really dangerous.",
     funFact:"Two unrelated verbs: 말리다 (causative of 마르다: to dry) and 말리다 (to dissuade/stop someone). Context is key."},

    {type:"teach", trg:"말씀드리다", src:"to tell, to say (humble honorific)", pos:"verb", gender:null,
     note:"말씀 (words, honorific) + 드리다 (to give, humble).\nThe most polite way to say 'I tell you.'",
     example:"A: 한 가지 말씀드릴 것이 있습니다.\nB: 네, 말씀해 주세요.",
     exampleSrc:"A: There is one thing I would like to tell you.\nB: Yes, please go ahead.",
     funFact:"말씀드리다 humbles the speaker and elevates the listener. It is essential in Korean business and formal situations."},

    {type:"match", pairs:[
      {trg:"막걸리", src:"Korean rice wine"},
      {trg:"만점", src:"perfect score"},
      {trg:"만두", src:"dumpling"},
      {trg:"말씀드리다", src:"to say (humble)"}
    ]}
  ]
};
export default LESSON_20;
