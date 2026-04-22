// Korean B1 Final Gap - Lesson 5: Money & Commerce
const LESSON_5 = {
  id:"kov2_b1fin_l5", title:"돈과 거래", icon:"💰", xp:15, board:true,
  steps:[
    {type:"intro", title:"Money & Commerce",
     desc:"Build vocabulary for financial transactions, products, and economic activities. These words appear constantly in news, shopping, and business conversations.",
     goals:["Learn 20 words related to money, products, and commerce","Discuss fees, savings, and financial planning","Understand economic terms used in everyday Korean"]},

    {type:"teach", trg:"예금", src:"deposit, savings", pos:"noun", gender:null,
     note:"Sino-Korean (預金). 예 (預) = entrust, 금 (金) = money.",
     example:"A: 예금 이자가 얼마예요?\nB: 지금은 3%정도예요.",
     exampleSrc:"A: What's the deposit interest rate?\nB: It's about 3% right now.",
     funFact:"Korean banks distinguish 예금 (general deposits) from 적금 (installment savings). 적금 requires regular monthly deposits and pays higher interest."},

    {type:"teach", trg:"요금", src:"fee, fare, charge", pos:"noun", gender:null,
     note:"Sino-Korean (料金). Used for utility bills, fares, and service charges.",
     example:"A: 버스 요금이 올랐어요?\nB: 네, 다음 달부터 200원 올라요.",
     exampleSrc:"A: Did the bus fare go up?\nB: Yes, it goes up 200 won starting next month.",
     funFact:"Korea uses 요금 for almost every service: 전화 요금 (phone bill), 택시 요금 (taxi fare), 주차 요금 (parking fee), 입장 요금 (admission fee)."},

    {type:"teach", trg:"용돈", src:"pocket money, allowance", pos:"noun", gender:null,
     note:"Sino-Korean (用돈). 용 (用) = use + native Korean 돈 (money).",
     example:"A: 아이들한테 용돈을 얼마나 줘요?\nB: 한 달에 5만 원 줘요.",
     exampleSrc:"A: How much allowance do you give the kids?\nB: I give 50,000 won per month.",
     funFact:"During Chuseok and Seollal, Korean children receive 세뱃돈 (New Year's money) from relatives. It is similar to 용돈 but given only on holidays."},

    {type:"teach", trg:"현금", src:"cash", pos:"noun", gender:null,
     note:"Sino-Korean (現金). 현 (現) = present/real, 금 (金) = money.",
     example:"A: 현금으로 내도 돼요?\nB: 네, 현금이나 카드 다 돼요.",
     exampleSrc:"A: Can I pay with cash?\nB: Yes, both cash and card are fine.",
     funFact:"Korea is one of the most cashless societies. Most Koreans use cards or mobile pay. Asking for 현금 영수증 (cash receipt) gives you a tax deduction."},

    {type:"teach", trg:"임금", src:"wages, pay", pos:"noun", gender:null,
     note:"Sino-Korean (賃金). Also means 'king' with different hanja (壬金).",
     example:"A: 최저 임금이 올랐어요?\nB: 네, 올해 조금 올랐어요.",
     exampleSrc:"A: Did the minimum wage go up?\nB: Yes, it went up a bit this year.",
     funFact:"최저 임금 (minimum wage) is a hot topic in Korea. It is debated every year between labor groups and business associations."},

    {type:"mc",
     q:"택시를 탈 때 내는 돈을 뭐라고 해요?",
     opts:["요금","용돈","임금","예금"],
     ans:"요금",
     hint:"This word means the fare or charge for using a service like transportation."},

    {type:"teach", trg:"재산", src:"property, assets, wealth", pos:"noun", gender:null,
     note:"Sino-Korean (財産). 재 (財) = wealth, 산 (産) = produce.",
     example:"A: 부모님 재산이 많아요?\nB: 그건 좀 개인적인 질문이에요.",
     exampleSrc:"A: Do your parents have a lot of assets?\nB: That's a bit of a personal question.",
     funFact:"Asking about 재산 is taboo in Korean culture, yet real estate wealth is a constant social discussion. Housing prices are a national obsession."},

    {type:"teach", trg:"판매", src:"sale, selling", pos:"noun", gender:null,
     note:"Sino-Korean (販賣). Used in business and retail contexts.",
     example:"A: 이 제품은 판매 중이에요?\nB: 아니요, 판매가 끝났어요.",
     exampleSrc:"A: Is this product on sale?\nB: No, the sale has ended.",
     funFact:"판매원 (salesperson) is a common job title. Online 판매 (e-commerce) has exploded in Korea, with apps like Coupang dominating."},

    {type:"teach", trg:"제품", src:"product, goods", pos:"noun", gender:null,
     note:"Sino-Korean (製品). 제 (製) = make, 품 (品) = item.",
     example:"A: 이 제품 품질이 좋아요?\nB: 네, 한국 제품은 품질이 좋아요.",
     exampleSrc:"A: Is this product good quality?\nB: Yes, Korean products are good quality.",
     funFact:"한국 제품 (Korean products) are globally recognized for quality, from electronics (Samsung, LG) to cosmetics (K-beauty) to cars (Hyundai, Kia)."},

    {type:"teach", trg:"이익", src:"profit, benefit", pos:"noun", gender:null,
     note:"Sino-Korean (利益). Used for both financial profit and general benefit.",
     example:"A: 올해 이익이 늘었어요?\nB: 네, 작년보다 이익이 많아졌어요.",
     exampleSrc:"A: Did profits increase this year?\nB: Yes, profits grew compared to last year.",
     funFact:"이익 has a double meaning: financial profit and general advantage. 공익 (公益) means public interest, using the same 益 character."},

    {type:"fb",
     s:"이 {1}은 한국에서 만들었어요.",
     a:["제품"],
     opts:["제품","판매","이익","재산"],
     hint:"This word means a manufactured item or goods. Think about what was made in Korea.",
     sSrc:"This {1} was made in Korea."},

    {type:"teach", trg:"이용", src:"use, utilization", pos:"noun", gender:null,
     note:"Sino-Korean (利用). Often seen on signs: 이용 안내 (usage guide).",
     example:"A: 도서관 이용 시간이 어떻게 돼요?\nB: 아침 9시부터 저녁 9시까지예요.",
     exampleSrc:"A: What are the library hours of use?\nB: From 9 AM to 9 PM.",
     funFact:"Every Korean facility has 이용 규칙 (usage rules) posted. From gyms to saunas to parks, detailed rules guide proper 이용."},

    {type:"teach", trg:"이용되다", src:"to be used, to be utilized", pos:"verb", gender:null,
     note:"Passive form of 이용하다. Something gets used (by others).",
     example:"A: 이 건물은 어떻게 이용돼요?\nB: 문화 행사에 이용되고 있어요.",
     exampleSrc:"A: How is this building used?\nB: It's being used for cultural events.",
     funFact:"The passive 이용되다 is preferred in formal/academic Korean because it sounds more objective than the active 이용하다."},

    {type:"teach", trg:"이용하다", src:"to use, to utilize", pos:"verb", gender:null,
     note:"Active verb. The subject deliberately uses something.",
     example:"A: 대중교통을 이용해요?\nB: 네, 매일 지하철을 이용해요.",
     exampleSrc:"A: Do you use public transportation?\nB: Yes, I use the subway every day.",
     funFact:"이용하다 is more formal than 쓰다 or 사용하다. Service announcements always say 이용해 주셔서 감사합니다 (thank you for using our service)."},

    {type:"teach", trg:"제공하다", src:"to provide, to offer", pos:"verb", gender:null,
     note:"Sino-Korean (提供). Formal verb for supplying services or goods.",
     example:"A: 이 호텔은 조식을 제공해요?\nB: 네, 무료로 제공해요.",
     exampleSrc:"A: Does this hotel provide breakfast?\nB: Yes, it's provided for free.",
     funFact:"제공 appears on every Korean receipt and service description. 무료 제공 (free provision) and 정보 제공 (information provision) are common phrases."},

    {type:"teach", trg:"제한", src:"limit, restriction", pos:"noun", gender:null,
     note:"Sino-Korean (制限). 제 (制) = control, 한 (限) = limit.",
     example:"A: 속도 제한이 얼마예요?\nB: 시속 80킬로미터로 제한돼 있어요.",
     exampleSrc:"A: What's the speed limit?\nB: It's limited to 80 km/h.",
     funFact:"나이 제한 (age restriction) is strictly enforced in Korea. Alcohol, rated films, and PC bangs all have clear 제한 based on age."},

    {type:"match", pairs:[
      {trg:"이용하다", src:"to use/utilize"},
      {trg:"제공하다", src:"to provide"},
      {trg:"제한", src:"limit/restriction"},
      {trg:"판매", src:"sale/selling"},
      {trg:"이익", src:"profit/benefit"}
    ]},

    {type:"teach", trg:"예상", src:"expectation, forecast", pos:"noun", gender:null,
     note:"Sino-Korean (豫想). 예 (豫) = in advance, 상 (想) = think.",
     example:"A: 내일 날씨 예상이 어때요?\nB: 비가 올 거라고 예상해요.",
     exampleSrc:"A: What's the weather forecast for tomorrow?\nB: They expect it will rain.",
     funFact:"예상 is used in both weather and financial forecasts. Stock market 예상 (predictions) fill Korean business news every morning."},

    {type:"teach", trg:"예정", src:"plan, schedule", pos:"noun", gender:null,
     note:"Sino-Korean (豫定). Something scheduled or planned in advance.",
     example:"A: 회의가 언제 예정이에요?\nB: 오후 3시에 예정돼 있어요.",
     exampleSrc:"A: When is the meeting scheduled?\nB: It's scheduled for 3 PM.",
     funFact:"The grammar pattern V-을 예정이다 (plan to V) is one of the most useful B1 structures. It is more formal than V-려고 하다."},

    {type:"teach", trg:"활용하다", src:"to make use of, to apply", pos:"verb", gender:null,
     note:"Sino-Korean (活用). Implies creative or effective use of resources.",
     example:"A: 시간을 잘 활용하고 싶어요.\nB: 계획을 세워서 활용해 보세요.",
     exampleSrc:"A: I want to make good use of my time.\nB: Try making a plan and utilizing it.",
     funFact:"활용 implies using something to its full potential. It is a step beyond 이용 (use), suggesting strategic or clever application."},

    {type:"teach", trg:"확대되다", src:"to be expanded, to be enlarged", pos:"verb", gender:null,
     note:"Sino-Korean (擴大). Passive form: something gets expanded.",
     example:"A: 서비스 지역이 확대됐어요?\nB: 네, 전국으로 확대됐어요.",
     exampleSrc:"A: Has the service area been expanded?\nB: Yes, it's been expanded nationwide.",
     funFact:"News loves 확대: 피해가 확대되다 (damage expands), 수출이 확대되다 (exports expand). It signals growth or spread."},

    {type:"teach", trg:"확대하다", src:"to expand, to enlarge", pos:"verb", gender:null,
     note:"Active form. The subject deliberately expands something.",
     example:"A: 사업을 확대할 계획이에요?\nB: 네, 내년에 해외로 확대할 거예요.",
     exampleSrc:"A: Do you plan to expand the business?\nB: Yes, we'll expand overseas next year.",
     funFact:"확대 and 축소 (reduction) are opposites frequently paired in Korean business and news language."},

    {type:"teach", trg:"포함하다", src:"to include, to contain", pos:"verb", gender:null,
     note:"Sino-Korean (包含). 포 (包) = wrap, 함 (含) = contain.",
     example:"A: 가격에 세금이 포함돼요?\nB: 네, 세금이 포함된 가격이에요.",
     exampleSrc:"A: Is tax included in the price?\nB: Yes, it's a price that includes tax.",
     funFact:"세금 포함 (tax included) and 세금 별도 (tax separate) are crucial phrases when shopping or dining in Korea."},

    {type:"mc",
     q:"'사업을 더 크게 만들다'는 무슨 뜻이에요?",
     opts:["이용하다","확대하다","포함하다","제한하다"],
     ans:"확대하다",
     hint:"This verb means to make something bigger or broader in scope."}
  ]
};
export default LESSON_5;
