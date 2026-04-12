// Korean B1 Gap - Lesson 28: Economy, Trade and Finance
const LESSON_28 = {
  id:"kov2_b1gap_l28", title:"경제와 무역", icon:"💹", xp:15, board:true,
  steps:[
    {type:"intro", title:"Economy, Trade and Finance",
     desc:"Build your vocabulary for discussing business, trade, and personal finance in Korean. From international trade to everyday borrowing, these words appear in news, work, and daily life.",
     goals:["Learn 20 economy and finance words","Discuss trade, costs, and business topics","Distinguish similar-sounding financial verbs"]},

    // --- Teach 1-5 ---
    {type:"teach", trg:"무역", src:"trade, foreign trade", pos:"noun", gender:null,
     note:"Sino-Korean: 貿 (trade) + 易 (exchange). International buying and selling of goods.",
     example:"A: 한국은 무역이 중요한 나라예요.\nB: 수출이 많죠?\nA: 네, 반도체와 자동차를 수출해요.",
     exampleSrc:"A: Korea is a country where trade is important.\nB: There are lots of exports, right?\nA: Yes, they export semiconductors and cars.",
     funFact:"무역 회사 (trading company) was the backbone of Korea's economic miracle. Samsung and Hyundai both started as 무역 companies. Korea is the world's 6th largest trading nation."},

    {type:"teach", trg:"수입", src:"import", pos:"noun", gender:null,
     note:"Sino-Korean: 輸 (transport) + 入 (enter). Bringing goods into a country.",
     example:"A: 이 과일은 수입산이에요?\nB: 네, 태국에서 수입했어요.\nA: 그래서 좀 비싸네요.",
     exampleSrc:"A: Is this fruit imported?\nB: Yes, it was imported from Thailand.\nA: That's why it's a bit expensive.",
     funFact:"수입 has two meanings: import (輸入) and income (收入). Different hanja, same pronunciation. Context makes it clear: 수입품 (imported goods) vs. 월수입 (monthly income)."},

    {type:"teach", trg:"수출", src:"export", pos:"noun", gender:null,
     note:"Sino-Korean: 輸 (transport) + 出 (exit). Sending goods out to other countries.",
     example:"A: 한국의 주요 수출품이 뭐예요?\nB: 반도체, 자동차, 전자제품이에요.\nA: 전 세계로 수출하네요.",
     exampleSrc:"A: What are Korea's main exports?\nB: Semiconductors, cars, and electronics.\nA: They export to the whole world.",
     funFact:"수입 vs. 수출: 入 (enter) vs. 出 (exit) is the key difference. Korea's export-driven economy makes 수출 a word you hear daily in the news. 수출 강국 (export powerhouse) describes Korea."},

    {type:"teach", trg:"세금", src:"tax", pos:"noun", gender:null,
     note:"Sino-Korean: 稅 (tax) + 金 (money). Government-collected revenue from citizens.",
     example:"A: 세금을 얼마나 내요?\nB: 월급의 약 20%를 내요.\nA: 꽤 많네요.",
     exampleSrc:"A: How much tax do you pay?\nB: About 20% of my salary.\nA: That's quite a lot.",
     funFact:"소득세 (income tax), 부가세 (VAT), 재산세 (property tax) are all types of 세금. The Korean tax office is called 국세청 (National Tax Service). Tax season is every May."},

    {type:"teach", trg:"비용", src:"cost, expense", pos:"noun", gender:null,
     note:"Sino-Korean: 費 (spend) + 用 (use). The money required for something.",
     example:"A: 여행 비용이 얼마나 들었어요?\nB: 총 200만 원 들었어요.\nA: 생각보다 많이 들었네요.",
     exampleSrc:"A: How much did the travel cost?\nB: It cost 2 million won total.\nA: That's more than I expected.",
     funFact:"비용 vs. 가격: 비용 is the total cost/expense, while 가격 is the price of a specific item. 생활비용 (living expenses), 교통비용 (transportation costs), 의료비용 (medical costs)."},

    // --- Quiz batch 1 ---
    {type:"mc",
     q:"한국이 반도체를 다른 나라에 파는 것을 뭐라고 해요?",
     opts:["수입","수출","무역","세금"],
     ans:"수출",
     hint:"This word specifically means sending goods OUT of the country to sell abroad. The hanja includes 'exit.'"},

    {type:"fb",
     s:"매달 월급에서 {1}을 내야 해요.",
     a:["세금"],
     opts:["세금","비용","수입","무역"],
     hint:"The money the government collects from your salary. Every citizen pays this.",
     sSrc:"I have to pay {1} from my salary every month."},

    // --- Teach 6-10 ---
    {type:"teach", trg:"상품", src:"product, goods, merchandise", pos:"noun", gender:null,
     note:"Sino-Korean: 商 (commerce) + 品 (item). Items sold commercially.",
     example:"A: 이 상품이 인기 있어요?\nB: 네, 요즘 가장 잘 팔려요.\nA: 저도 하나 사고 싶어요.",
     exampleSrc:"A: Is this product popular?\nB: Yes, it's the best seller lately.\nA: I want to buy one too.",
     funFact:"상품권 (gift certificate), 상품 목록 (product catalog), 인기 상품 (popular product). In Korean department stores, 상품 is used rather than 제품 (manufactured product) for general merchandise."},

    {type:"teach", trg:"소비자", src:"consumer", pos:"noun", gender:null,
     note:"Sino-Korean: 消 (consume) + 費 (spend) + 者 (person). Someone who buys goods or services.",
     example:"A: 소비자의 권리를 알아야 해요.\nB: 환불도 받을 수 있어요?\nA: 네, 소비자 보호법이 있어요.",
     exampleSrc:"A: You need to know consumer rights.\nB: Can I also get a refund?\nA: Yes, there's a consumer protection law.",
     funFact:"소비자 보호원 (Consumer Protection Agency) handles complaints in Korea. The character breakdown is transparent: consume + spend + person = consumer. 생산자 (producer) is its opposite."},

    {type:"teach", trg:"사용", src:"use, usage", pos:"noun", gender:null,
     note:"Sino-Korean: 使 (make) + 用 (use). The act of using something.",
     example:"A: 휴대폰 사용 시간이 너무 길어요.\nB: 하루에 몇 시간이요?\nA: 5시간 넘어요.",
     exampleSrc:"A: My phone usage time is too long.\nB: How many hours a day?\nA: Over 5 hours.",
     funFact:"사용법 (usage method/instructions), 사용료 (usage fee), 사용 금지 (use prohibited). 사용 is everywhere in Korean signage and manuals. The word family is very productive."},

    {type:"teach", trg:"사용되다", src:"to be used", pos:"verb", gender:null,
     note:"Passive form of 사용하다. Something is being utilized.",
     example:"A: 이 기술이 어디에 사용돼요?\nB: 의료 분야에서 사용돼요.\nA: 정말 유용하네요.",
     exampleSrc:"A: Where is this technology used?\nB: It's used in the medical field.\nA: That's really useful.",
     funFact:"Korean passives with -되다 are very common in formal and written Korean: 사용되다 (be used), 발견되다 (be discovered), 제작되다 (be produced). They sound more formal than active voice."},

    {type:"teach", trg:"사용자", src:"user", pos:"noun", gender:null,
     note:"Sino-Korean: 使用 (use) + 者 (person). A person who uses something.",
     example:"A: 이 앱의 사용자가 몇 명이에요?\nB: 천만 명이 넘어요.\nA: 대단하네요!",
     exampleSrc:"A: How many users does this app have?\nB: Over 10 million.\nA: That's amazing!",
     funFact:"사용자 is the formal term. In tech, 유저 (from English 'user') is increasingly common in casual speech. 사용자 경험 (user experience, UX) is a hot field in Korean tech companies."},

    // --- Quiz batch 2 ---
    {type:"match", pairs:[
      {trg:"상품", src:"product, goods"},
      {trg:"소비자", src:"consumer"},
      {trg:"사용", src:"use, usage"},
      {trg:"사용자", src:"user"}
    ]},

    {type:"mc",
     q:"'이 기술이 의료에 사용돼요'에서 '사용되다'는?",
     opts:["사용을 시작하다","사용을 멈추다","다른 사람에 의해 쓰이다","사용할 수 없다"],
     ans:"다른 사람에 의해 쓰이다",
     hint:"This is the passive form of 'to use.' Something is being utilized by someone else."},

    // --- Teach 11-15 ---
    {type:"teach", trg:"사업", src:"business, enterprise", pos:"noun", gender:null,
     note:"Sino-Korean: 事 (matter) + 業 (industry). A business venture or company operations.",
     example:"A: 어떤 사업을 하세요?\nB: 온라인 쇼핑몰을 운영해요.\nA: 요즘 잘 되세요?",
     exampleSrc:"A: What business do you run?\nB: I run an online shopping mall.\nA: Is it going well these days?",
     funFact:"사업가 (businessperson), 사업자 (business operator), 사업 계획 (business plan). Starting a 사업 is a dream for many Koreans. 창업 (starting a business) culture is booming in Seoul."},

    {type:"teach", trg:"부동산", src:"real estate", pos:"noun", gender:null,
     note:"Sino-Korean: 不 (not) + 動 (move) + 產 (property). Property that cannot be moved.",
     example:"A: 부동산 가격이 너무 올랐어요.\nB: 서울은 특히 비싸죠?\nA: 집 사기가 정말 어려워요.",
     exampleSrc:"A: Real estate prices have risen too much.\nB: Seoul is especially expensive, right?\nA: It's really hard to buy a house.",
     funFact:"부동산 literally means 'immovable property.' Korean real estate culture is unique: 전세 (key money deposit) and 월세 (monthly rent) are the two main systems. 부동산 is a national obsession."},

    {type:"teach", trg:"신용", src:"credit, trust", pos:"noun", gender:null,
     note:"Sino-Korean: 信 (trust) + 用 (use). Creditworthiness or financial trust.",
     example:"A: 신용카드로 결제할 수 있어요?\nB: 네, 신용카드 돼요.\nA: 좋아요, 카드로 할게요.",
     exampleSrc:"A: Can I pay by credit card?\nB: Yes, credit cards are accepted.\nA: Great, I'll pay by card.",
     funFact:"신용카드 (credit card) is used everywhere in Korea, one of the most cashless societies. 신용등급 (credit rating) matters for loans. Korea's credit card usage rate is among the world's highest."},

    {type:"teach", trg:"보험", src:"insurance", pos:"noun", gender:null,
     note:"Sino-Korean: 保 (protect) + 險 (risk). Financial protection against risk.",
     example:"A: 보험에 가입했어요?\nB: 네, 건강 보험이랑 자동차 보험이요.\nA: 보험은 꼭 필요해요.",
     exampleSrc:"A: Did you sign up for insurance?\nB: Yes, health insurance and car insurance.\nA: Insurance is essential.",
     funFact:"건강보험 (health insurance) in Korea is national and mandatory. 국민건강보험 (National Health Insurance) covers all citizens. Korea's healthcare system is one of the most affordable in the developed world."},

    {type:"teach", trg:"벌다", src:"to earn (money)", pos:"verb", gender:null,
     note:"Native Korean verb. To earn money through work.",
     example:"A: 한 달에 얼마나 벌어요?\nB: 300만 원 정도 벌어요.\nA: 충분해요?",
     exampleSrc:"A: How much do you earn per month?\nB: I earn about 3 million won.\nA: Is it enough?",
     funFact:"돈을 벌다 (to earn money) is the standard phrase. 벌이 (earnings) is the noun form. 부업으로 돈을 벌다 (earn money through a side job) reflects Korea's growing gig economy culture."},

    // --- Quiz batch 3 ---
    {type:"fb",
     s:"{1} 가격이 너무 올라서 집을 못 사요.",
     a:["부동산"],
     opts:["부동산","보험","신용","사업"],
     hint:"The Sino-Korean term for property that cannot move: land and buildings. A hot topic in Korean society.",
     sSrc:"I can't buy a house because {1} prices have risen too much."},

    {type:"mc",
     q:"'돈을 벌다'에서 '벌다'의 뜻은?",
     opts:["돈을 쓰다","돈을 빌리다","돈을 받다","일해서 돈을 얻다"],
     ans:"일해서 돈을 얻다",
     hint:"This native Korean verb means to gain money through working. You receive wages for your labor."},

    // --- Teach 16-20 ---
    {type:"teach", trg:"빌다", src:"to pray, to beg", pos:"verb", gender:null,
     note:"Native Korean. To wish/pray for something or to beg someone. Not borrowing.",
     example:"A: 무엇을 빌었어요?\nB: 가족 건강을 빌었어요.\nA: 좋은 소원이네요.",
     exampleSrc:"A: What did you pray for?\nB: I prayed for my family's health.\nA: That's a good wish.",
     funFact:"빌다 vs. 빌리다: easily confused! 빌다 = pray/beg (no object borrowed). 빌리다 = borrow (an object is lent). At temples, you 빌다 (pray). At libraries, you 빌리다 (borrow)."},

    {type:"teach", trg:"빌리다", src:"to borrow, to rent", pos:"verb", gender:null,
     note:"Native Korean. To temporarily use something that belongs to someone else.",
     example:"A: 우산을 빌려도 돼요?\nB: 네, 내일 돌려주세요.\nA: 감사합니다!",
     exampleSrc:"A: May I borrow an umbrella?\nB: Yes, please return it tomorrow.\nA: Thank you!",
     funFact:"빌리다 works for borrowing and renting: 책을 빌리다 (borrow a book), 자전거를 빌리다 (rent a bicycle). The lender uses 빌려주다 (to lend). Korean verbs neatly split borrower and lender roles."},

    {type:"teach", trg:"부족", src:"shortage, lack", pos:"noun", gender:null,
     note:"Sino-Korean: 不 (not) + 足 (enough). An insufficient amount of something.",
     example:"A: 인력 부족이 심각해요.\nB: 직원을 더 뽑아야 해요.\nA: 채용 공고를 낼게요.",
     exampleSrc:"A: The labor shortage is serious.\nB: We need to hire more staff.\nA: I'll post a job listing.",
     funFact:"물 부족 (water shortage), 잠 부족 (sleep deprivation), 인력 부족 (labor shortage). 부족 attaches to many nouns to express 'not enough of X.' The hanja 不足 literally means 'not sufficient.'"},

    {type:"teach", trg:"부족하다", src:"to be insufficient, to be lacking", pos:"adj", gender:null,
     note:"Adjective form of 부족. Describes something as not enough.",
     example:"A: 시간이 부족해요.\nB: 일정을 조정할까요?\nA: 네, 마감을 늘려 주세요.",
     exampleSrc:"A: There's not enough time.\nB: Shall we adjust the schedule?\nA: Yes, please extend the deadline.",
     funFact:"부족하다 is humble: 제가 많이 부족합니다 (I am quite lacking) is a polite way to say 'I have much to learn.' Koreans use self-deprecation as a form of courtesy and modesty."},

    {type:"teach", trg:"벌어지다", src:"to happen, to widen, to occur", pos:"verb", gender:null,
     note:"Native Korean. Two meanings: events happening, or gaps widening.",
     example:"A: 무슨 일이 벌어진 거예요?\nB: 사고가 벌어졌어요.\nA: 다친 사람은 없어요?",
     exampleSrc:"A: What happened?\nB: An accident occurred.\nA: Is anyone hurt?",
     funFact:"벌어지다 has a dual nature: 사건이 벌어지다 (an incident occurs) and 격차가 벌어지다 (the gap widens). Both involve something opening up or unfolding. Context determines the meaning."},

    // --- Quiz batch 4 ---
    {type:"fb",
     s:"도서관에서 책을 {1} 수 있어요.",
     a:["빌릴"],
     opts:["빌릴","빌","벌","벌어질"],
     hint:"The verb for temporarily using something that belongs to someone else. You return it later.",
     sSrc:"You can {1} books from the library."},

    {type:"mc",
     q:"'시간이 부족하다'의 뜻은?",
     opts:["시간이 남다","시간이 충분하다","시간이 모자라다","시간이 길다"],
     ans:"시간이 모자라다",
     hint:"This adjective means there is not enough of something. The time available falls short of what is needed."},

    {type:"match", pairs:[
      {trg:"벌다", src:"to earn"},
      {trg:"빌다", src:"to pray, beg"},
      {trg:"빌리다", src:"to borrow"},
      {trg:"벌어지다", src:"to happen, widen"}
    ]}
  ]
};
export default LESSON_28;
