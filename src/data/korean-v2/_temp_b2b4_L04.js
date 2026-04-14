// Korean B2 — Batch 4, Lesson 4: Economy and Planning
// Words: 경영하다, 경쟁력, 경제력, 경제학, 계곡, 계산기, 계좌, 계층, 계획하다, 고교, 고구마, 고궁, 고급스럽다, 고모부, 고무신, 고민하다, 고생하다, 고소하다, 고속, 고속도로

const LESSON_4 = {
  id:"kov2_b2b4_l4", title:"경제와 계획", icon:"📊", xp:15, board:true,
  steps:[
    {type:"intro", title:"경제와 계획",
     desc:"Explore vocabulary for business, economics, planning, and everyday Korean life. This lesson mixes formal economic terms with cultural words.",
     goals:["Master 20 words about economics, planning, and daily life","Understand Sino-Korean -력 (power/ability) compounds","Learn words for Korean food, family, and institutions"]},

    {type:"teach", trg:"경영하다", src:"to manage, to run (a business)", pos:"verb", gender:null,
     note:"Sino-Korean. 經 (pass through) + 營 (manage) + 하다.\nTo operate a business or organization.",
     example:"A: 부모님이 식당을 경영하세요.\nB: 대단하시네요, 장사가 잘 되세요?",
     exampleSrc:"A: My parents run a restaurant.\nB: That is impressive. Is business good?",
     funFact:"From Hanja 經營. 경영학 (business administration) is one of the most popular university majors in Korea."},

    {type:"teach", trg:"경쟁력", src:"competitiveness", pos:"noun", gender:null,
     note:"Sino-Korean. 競爭 (compete) + 力 (power).\nThe ability to compete effectively.",
     example:"A: 이 제품의 경쟁력이 뭐예요?\nB: 가격 대비 품질이 최고예요.",
     exampleSrc:"A: What is the competitiveness of this product?\nB: The quality relative to price is the best.",
     funFact:"From Hanja 競爭力. The -력 suffix creates 'ability/power' nouns: 능력, 체력, 집중력."},

    {type:"teach", trg:"경제력", src:"economic power", pos:"noun", gender:null,
     note:"Sino-Korean. 經濟 (economy) + 力 (power).\nFinancial strength of a person or nation.",
     example:"A: 한국의 경제력이 많이 성장했어요.\nB: 세계 10위 경제 대국이잖아요.",
     exampleSrc:"A: Korea's economic power has grown a lot.\nB: It is the world's 10th largest economy.",
     funFact:"From Hanja 經濟力. In dating culture, 경제력 is sometimes listed as a desirable partner quality."},

    {type:"teach", trg:"경제학", src:"economics (academic field)", pos:"noun", gender:null,
     note:"Sino-Korean. 經濟 (economy) + 學 (study).\nThe academic study of economies.",
     example:"A: 대학에서 경제학을 전공했어요.\nB: 어떤 분야에 관심이 있으세요?",
     exampleSrc:"A: I majored in economics at university.\nB: What field are you interested in?",
     funFact:"From Hanja 經濟學. The -학 suffix marks academic fields: 물리학, 심리학, 사회학."},

    {type:"teach", trg:"계곡", src:"valley, gorge", pos:"noun", gender:null,
     note:"Sino-Korean. 溪 (stream) + 谷 (valley).\nA narrow valley with a stream.",
     example:"A: 여름에 계곡에 놀러 갈까?\nB: 좋아! 물놀이하자.",
     exampleSrc:"A: Shall we go to a valley in summer?\nB: Great! Let us go play in the water.",
     funFact:"From Hanja 溪谷. Korean 계곡 trips are a beloved summer tradition, combining hiking with swimming in mountain streams."},

    {type:"mc",
     q:"'경쟁력'에서 '-력'의 의미는?",
     opts:["힘, 능력","사람","장소","시간"],
     ans:"힘, 능력",
     hint:"This Sino-Korean suffix from Hanja 力 means 'power' or 'ability' and appears in many compounds."},

    {type:"teach", trg:"계산기", src:"calculator", pos:"noun", gender:null,
     note:"Sino-Korean. 計算 (calculate) + 器 (device).\nA device for doing math.",
     example:"A: 계산기 좀 빌려줄 수 있어?\nB: 핸드폰 계산기 써도 돼.",
     exampleSrc:"A: Can you lend me a calculator?\nB: You can use the phone calculator.",
     funFact:"From Hanja 計算器. The -기 suffix marks devices and tools: 세탁기, 청소기, 건조기."},

    {type:"teach", trg:"계좌", src:"bank account", pos:"noun", gender:null,
     note:"Sino-Korean. 計 (count) + 座 (seat).\nA financial account at a bank.",
     example:"A: 새 계좌를 개설하고 싶어요.\nB: 신분증을 가져오셨나요?",
     exampleSrc:"A: I would like to open a new account.\nB: Did you bring your ID?",
     funFact:"From Hanja 計座. Korea is nearly cashless, with bank transfer via 계좌이체 being the most common payment method."},

    {type:"teach", trg:"계층", src:"class, stratum, layer", pos:"noun", gender:null,
     note:"Sino-Korean. 階 (stairs) + 層 (layer).\nA level or group in society.",
     example:"A: 소득 계층 간 격차가 커지고 있어요.\nB: 사회 문제로 심각해지고 있죠.",
     exampleSrc:"A: The gap between income classes is growing.\nB: It is becoming a serious social issue.",
     funFact:"From Hanja 階層. Literally 'stair layers.' Used in sociology: 사회 계층 (social class), 계층 이동 (social mobility)."},

    {type:"teach", trg:"계획하다", src:"to plan, to make plans", pos:"verb", gender:null,
     note:"Sino-Korean. 計 (calculate) + 劃 (draw lines) + 하다.\nTo design a course of action.",
     example:"A: 여행을 계획하고 있어요.\nB: 어디로 갈 거예요?",
     exampleSrc:"A: I am planning a trip.\nB: Where will you go?",
     funFact:"From Hanja 計劃. Koreans love planning: 계획표 (schedule chart) and 일정표 (itinerary) are common tools."},

    {type:"fb",
     s:"새 은행 {1}를 만들려면 신분증이 필요합니다.",
     a:["계좌"],
     opts:["계좌","계층","계곡","계산기"],
     hint:"This Sino-Korean noun refers to a financial account where you keep your money at a bank.",
     sSrc:"You need an ID to create a new bank {1}."},

    {type:"teach", trg:"고교", src:"high school (abbreviation)", pos:"noun", gender:null,
     note:"Sino-Korean. 高 (high) + 校 (school).\nShort form of 고등학교.",
     example:"A: 고교 시절이 그리워요.\nB: 저도요, 그때가 제일 즐거웠어요.",
     exampleSrc:"A: I miss my high school days.\nB: Me too, those were the most fun times.",
     funFact:"From Hanja 高校. Abbreviation of 고등학교. Similarly, 중학교 becomes 중교 and 대학교 becomes 대학."},

    {type:"teach", trg:"고구마", src:"sweet potato", pos:"noun", gender:null,
     note:"Native Korean word.\nA popular Korean snack and side dish.",
     example:"A: 겨울에 군고구마가 최고야!\nB: 맞아, 냄새만 맡아도 배고파져.",
     exampleSrc:"A: Roasted sweet potatoes are the best in winter!\nB: Right, just the smell makes me hungry.",
     funFact:"고구마 also means 'frustrating situation' in slang, because sweet potatoes get stuck in your throat like frustration."},

    {type:"teach", trg:"고궁", src:"ancient palace", pos:"noun", gender:null,
     note:"Sino-Korean. 古 (old) + 宮 (palace).\nA historic royal palace.",
     example:"A: 서울에서 고궁 투어를 했어요.\nB: 경복궁이 제일 인상 깊었어요?",
     exampleSrc:"A: I did an ancient palace tour in Seoul.\nB: Was Gyeongbokgung the most impressive?",
     funFact:"From Hanja 古宮. Seoul has five 고궁: Gyeongbokgung, Changdeokgung, Changgyeonggung, Deoksugung, and Gyeonghuigung."},

    {type:"teach", trg:"고급스럽다", src:"to look luxurious, to seem high-class", pos:"adj", gender:null,
     note:"고급 (high grade) + 스럽다 (seeming).\nAppearing elegant and expensive.",
     example:"A: 이 레스토랑이 정말 고급스러워 보여요.\nB: 음식도 맛있으니 한번 가 봐요.",
     exampleSrc:"A: This restaurant looks really luxurious.\nB: The food is also delicious, so try it.",
     funFact:"고급 alone means 'high grade.' Adding -스럽다 softens it to 'seems luxurious' rather than stating it as fact."},

    {type:"teach", trg:"고모부", src:"paternal aunt's husband", pos:"noun", gender:null,
     note:"고모 (paternal aunt) + 부 (夫, husband).\nYour father's sister's husband.",
     example:"A: 고모부가 의사세요?\nB: 네, 큰 병원에서 일하세요.",
     exampleSrc:"A: Is your paternal aunt's husband a doctor?\nB: Yes, he works at a large hospital.",
     funFact:"Korean family terms are extremely specific. 고모부 is only for father's side. Mother's sister's husband is 이모부."},

    {type:"mc",
     q:"'고구마'의 슬랭 의미는?",
     opts:["답답한 상황","맛있는 음식","추운 날씨","비싼 물건"],
     ans:"답답한 상황",
     hint:"Think about the feeling of a sweet potato getting stuck in your throat, causing frustration."},

    {type:"teach", trg:"고무신", src:"rubber shoes", pos:"noun", gender:null,
     note:"고무 (rubber) + 신 (shoes).\nTraditional Korean rubber shoes.",
     example:"A: 할머니가 고무신을 신고 밭에 가셨어.\nB: 시골에서는 아직 많이 신나 봐.",
     exampleSrc:"A: Grandmother went to the field wearing rubber shoes.\nB: It seems they still wear them a lot in the countryside.",
     funFact:"고무신 거꾸로 신다 (wearing rubber shoes backwards) is slang for a woman breaking up with her soldier boyfriend during his service."},

    {type:"teach", trg:"고민하다", src:"to worry about, to agonize over", pos:"verb", gender:null,
     note:"Sino-Korean. 苦 (bitter) + 悶 (troubled) + 하다.\nTo think hard about a difficult problem.",
     example:"A: 진로 때문에 고민하고 있어요.\nB: 상담 선생님과 이야기해 봐요.",
     exampleSrc:"A: I am agonizing over my career path.\nB: Try talking to a counselor.",
     funFact:"From Hanja 苦悶. 고민 상담 (worry consultation) is a popular genre on Korean internet forums and TV shows."},

    {type:"teach", trg:"고생하다", src:"to suffer, to go through hardship", pos:"verb", gender:null,
     note:"Sino-Korean. 苦 (bitter) + 生 (life) + 하다.\nTo endure difficulties.",
     example:"A: 부모님이 많이 고생하셨어요.\nB: 그래서 더 감사한 거죠.",
     exampleSrc:"A: My parents went through a lot of hardship.\nB: That is why I am even more grateful.",
     funFact:"From Hanja 苦生. 수고하셨습니다 and 고생하셨습니다 are common phrases to acknowledge someone's hard work."},

    {type:"teach", trg:"고소하다", src:"to be nutty/savory (flavor)", pos:"adj", gender:null,
     note:"Native Korean adjective.\nA pleasant roasted or nutty flavor.",
     example:"A: 이 참기름이 정말 고소해!\nB: 국산 참기름이라 그래.",
     exampleSrc:"A: This sesame oil is really nutty!\nB: It is because it is domestic sesame oil.",
     funFact:"고소하다 also means 'to file a lawsuit' (from Hanja 告訴). Context makes the meaning clear."},

    {type:"teach", trg:"고속", src:"high speed", pos:"noun", gender:null,
     note:"Sino-Korean. 高 (high) + 速 (speed).\nFast movement or rapid pace.",
     example:"A: 고속 인터넷이 필요해요.\nB: 광케이블을 신청하세요.",
     exampleSrc:"A: I need high-speed internet.\nB: Apply for fiber optic cable.",
     funFact:"From Hanja 高速. Korea consistently ranks among the top countries for 고속 인터넷 speed worldwide."},

    {type:"teach", trg:"고속도로", src:"highway, expressway", pos:"noun", gender:null,
     note:"고속 (high speed) + 도로 (road).\nA major road for fast travel.",
     example:"A: 고속도로가 막혀서 늦었어요.\nB: 명절에는 항상 그렇죠.",
     exampleSrc:"A: I was late because the highway was congested.\nB: It is always like that during holidays.",
     funFact:"Korea's first 고속도로 was the Gyeongbu Expressway (1970), connecting Seoul to Busan in just 4 hours."},

    {type:"fb",
     s:"참기름은 {1}한 맛이 특징이에요.",
     a:["고소"],
     opts:["고소","고속","고급","고생"],
     hint:"This native Korean adjective describes a pleasant nutty or roasted flavor.",
     sSrc:"Sesame oil is characterized by its {1} (nutty) flavor."},

    {type:"match", pairs:[
      {trg:"경영하다", src:"to manage a business"},
      {trg:"계획하다", src:"to plan"},
      {trg:"고민하다", src:"to worry about"},
      {trg:"고생하다", src:"to go through hardship"}
    ]}
  ]
};
export default LESSON_4;
