// Korean B2. Batch 5, Lesson 16: Counting, World, and Laundry
// Words: 세, 세계관, 세다, 세련되다, 세로, 세미나, 세상에, 세월, 세제, 세탁, 세트, 섹시하다, 센터, 셈, 소개, 소개되다, 소규모, 소극적, 소나기, 소득

const LESSON_16 = {
  id:"kov2_b2b5_l16", title:"세상과 소득", icon:"🌍", xp:15, board:true,
  steps:[
    {type:"intro", title:"세상과 소득",
     desc:"Learn vocabulary about counting, worldviews, laundry, and income. This lesson covers everyday life words alongside more abstract concepts about society.",
     goals:["Master 20 words about world, counting, and daily life","Understand Sino-Korean compounds with 世 (world/generation)","Use income and introduction vocabulary in formal contexts"]},

    {type:"teach", trg:"세", src:"age (counter), three (before counters)", pos:"noun", gender:null,
     note:"Bound noun. Used for counting age or as number three.\n세 살 = three years old.",
     example:"A: 아이가 몇 세예요?\nB: 다섯 세예요.",
     exampleSrc:"A: How old is the child?\nB: Five years old.",
     funFact:"Korean age counting was recently simplified. 만 나이 (international age) became the legal standard in 2023."},

    {type:"teach", trg:"세계관", src:"worldview, world view", pos:"noun", gender:null,
     note:"세계 (world) + 관 (view).\nOne's philosophical perspective on the world.",
     example:"A: 그 작가의 세계관이 독특해.\nB: 소설에 잘 나타나 있지.",
     exampleSrc:"A: That author's worldview is unique.\nB: It shows well in the novels.",
     funFact:"K-pop groups now build elaborate 세계관 (universe/lore) for their music. BTS's and aespa's are famous examples."},

    {type:"teach", trg:"세다", src:"to count, to be strong", pos:"verb", gender:null,
     note:"Native Korean verb with two meanings.\nTo enumerate or to be powerful/strong.",
     example:"A: 돈을 다시 세 봐.\nB: 알겠어, 정확히 셀게.",
     exampleSrc:"A: Count the money again.\nB: Okay, I will count it accurately.",
     funFact:"세다 meaning 'strong' is used in: 힘이 세다 (to be strong), 성격이 세다 (to have a strong personality)."},

    {type:"teach", trg:"세련되다", src:"to be sophisticated, to be refined", pos:"adj", gender:null,
     note:"Sino-Korean. 洗練 (wash and refine).\nElegant and polished in style.",
     example:"A: 이 디자인이 세련됐다.\nB: 심플한 게 오히려 더 멋있어.",
     exampleSrc:"A: This design is sophisticated.\nB: Simple is actually more stylish.",
     funFact:"세련된 (sophisticated) is a high compliment in Korea, especially for fashion, interior design, and personal style."},

    {type:"teach", trg:"세로", src:"vertical, lengthwise", pos:"noun", gender:null,
     note:"Sino-Korean. 縱 concept expressed as 세로.\nThe vertical dimension.",
     example:"A: 세로로 놓을까, 가로로 놓을까?\nB: 세로가 더 안정적이야.",
     exampleSrc:"A: Should we place it vertically or horizontally?\nB: Vertical is more stable.",
     funFact:"가로 (horizontal) and 세로 (vertical) are always paired. Korean crossword puzzles use 가로/세로 for across/down."},

    {type:"teach", trg:"세미나", src:"seminar", pos:"noun", gender:null,
     note:"Loanword from English 'seminar.'\nAn academic or professional discussion session.",
     example:"A: 내일 세미나에 참석할 거야?\nB: 응, 주제가 흥미로워서.",
     exampleSrc:"A: Are you attending the seminar tomorrow?\nB: Yes, the topic is interesting.",
     funFact:"Korean universities hold 세미나 regularly. Graduate students present research and receive feedback from peers."},

    {type:"fb",
     s:"그 K-pop 그룹의 {1}은 정말 독특하다.",
     a:["세계관"],
     opts:["세계관","세련됨","세미나","세월"],
     hint:"Which word means worldview or universe, describing the unique fictional lore of a K-pop group?",
     sSrc:"That K-pop group's {1} is truly unique."},

    {type:"teach", trg:"세상에", src:"oh my, goodness (exclamation)", pos:"intj", gender:null,
     note:"세상 (world) + 에 (at).\nAn exclamation of surprise.",
     example:"A: 세상에, 이게 진짜야?\nB: 응, 나도 믿을 수가 없어.",
     exampleSrc:"A: Oh my, is this real?\nB: Yes, I can't believe it either.",
     funFact:"세상에 is a mild exclamation. Stronger versions include 세상에나 and 아이고 세상에."},

    {type:"teach", trg:"세월", src:"time, years (passing of time)", pos:"noun", gender:null,
     note:"Sino-Korean. 歲 (year) + 月 (month).\nThe passage of time over years.",
     example:"A: 세월이 참 빠르다.\nB: 벌써 10년이 지났어.",
     exampleSrc:"A: Time really passes quickly.\nB: Ten years have already gone by.",
     funFact:"세월이 약이다 (time is the medicine) is a Korean proverb meaning time heals all wounds."},

    {type:"teach", trg:"세제", src:"detergent, cleaning agent", pos:"noun", gender:null,
     note:"Sino-Korean. 洗 (wash) + 劑 (agent).\nA chemical substance for cleaning.",
     example:"A: 세제가 다 떨어졌어.\nB: 마트에서 사 와야겠다.",
     exampleSrc:"A: We ran out of detergent.\nB: I need to buy some from the mart.",
     funFact:"Korean 세제 brands like Spark and Persil are household staples. 친환경 세제 (eco-friendly detergent) is trending."},

    {type:"teach", trg:"세탁", src:"laundry, washing (clothes)", pos:"noun", gender:null,
     note:"Sino-Korean. 洗 (wash) + 濯 (rinse).\nThe process of cleaning clothes.",
     example:"A: 세탁물이 많이 쌓였어.\nB: 주말에 한꺼번에 하자.",
     exampleSrc:"A: A lot of laundry has piled up.\nB: Let's do it all at once on the weekend.",
     funFact:"세탁소 (laundromat/dry cleaner) is common in Korean neighborhoods. 드라이클리닝 is called 드라이 세탁."},

    {type:"teach", trg:"세트", src:"set", pos:"noun", gender:null,
     note:"Loanword from English 'set.'\nA group of items or a unit.",
     example:"A: 이 세트로 살까?\nB: 따로 사는 것보다 싸네.",
     exampleSrc:"A: Should we buy this set?\nB: It is cheaper than buying separately.",
     funFact:"Korean restaurants offer 세트 메뉴 (set menu) combining a main dish with sides and a drink at a discount."},

    {type:"teach", trg:"섹시하다", src:"to be sexy", pos:"adj", gender:null,
     note:"Loanword from English 'sexy' + 하다.\nAttractive in a sexual way.",
     example:"A: 그 배우가 정말 섹시하다.\nB: 연기도 잘하잖아.",
     exampleSrc:"A: That actor is really sexy.\nB: They are also good at acting.",
     funFact:"섹시 is used more casually in Korean pop culture than in English, often meaning 'cool' or 'attractive.'"},

    {type:"teach", trg:"센터", src:"center (facility)", pos:"noun", gender:null,
     note:"Loanword from English 'center.'\nA facility or hub for specific services.",
     example:"A: 건강 검진 센터에 예약했어.\nB: 잘했어, 정기 검진이 중요해.",
     exampleSrc:"A: I made an appointment at the health checkup center.\nB: Good, regular checkups are important.",
     funFact:"Korea has 센터 for everything: 콜 센터, 의료 센터, 문화 센터, 체육 센터."},

    {type:"teach", trg:"셈", src:"calculation, intention (bound noun)", pos:"noun", gender:null,
     note:"From 세다 (to count).\nUsed in patterns like -ㄴ 셈이다 (it amounts to).",
     example:"A: 공짜로 먹은 셈이네.\nB: 맞아, 할인이 너무 컸어.",
     exampleSrc:"A: It amounts to eating for free.\nB: Right, the discount was too big.",
     funFact:"-ㄴ 셈이다 (it amounts to, in effect) is a key TOPIK grammar pattern expressing equivalence."},

    {type:"mc",
     q:"'결국 손해 본 셈이다'에서 '셈'의 의미는?",
     opts:["계산, 결과적으로 ~한 것이다","세탁","세트","센터"],
     ans:"계산, 결과적으로 ~한 것이다",
     hint:"Which meaning of 셈 fits here? It relates to calculation or 'amounting to' a particular result."},

    {type:"teach", trg:"소개", src:"introduction", pos:"noun", gender:null,
     note:"Sino-Korean. 紹 (connect) + 介 (mediate).\nPresenting someone or something to others.",
     example:"A: 자기 소개를 해 주세요.\nB: 안녕하세요, 김민수입니다.",
     exampleSrc:"A: Please introduce yourself.\nB: Hello, I am Kim Minsu.",
     funFact:"소개팅 (blind date) combines 소개 (introduction) + 미팅 (meeting). It is a major way Koreans meet partners."},

    {type:"teach", trg:"소개되다", src:"to be introduced", pos:"verb", gender:null,
     note:"소개 + 되다 (passive).\nBeing presented to others.",
     example:"A: 이 제품이 처음 소개된 건 언제야?\nB: 작년 전시회에서 처음 소개됐어.",
     exampleSrc:"A: When was this product first introduced?\nB: It was first introduced at last year's exhibition.",
     funFact:"소개되다 is used for products, concepts, and people being presented to the public for the first time."},

    {type:"teach", trg:"소규모", src:"small-scale", pos:"noun", gender:null,
     note:"Sino-Korean. 小 (small) + 規模 (scale).\nSmall in size or scope.",
     example:"A: 소규모 모임을 열까?\nB: 좋아, 열 명 정도면 딱이야.",
     exampleSrc:"A: Should we hold a small-scale gathering?\nB: Good, about ten people would be perfect.",
     funFact:"소규모 vs 대규모 (large-scale). 소규모 사업 (small-scale business) is a growing sector in Korea."},

    {type:"teach", trg:"소극적", src:"passive, inactive", pos:"noun", gender:null,
     note:"Sino-Korean. 消極 (passive) + 的.\nLacking initiative or being hesitant to act.",
     example:"A: 왜 그렇게 소극적이야?\nB: 자신감이 좀 부족해서.",
     exampleSrc:"A: Why are you so passive?\nB: I am a bit lacking in confidence.",
     funFact:"소극적 (passive) vs 적극적 (active/proactive). These form a natural pair in describing personality and approach."},

    {type:"teach", trg:"소나기", src:"sudden rain shower", pos:"noun", gender:null,
     note:"Native Korean word.\nA brief, heavy rain that comes suddenly.",
     example:"A: 소나기가 올 것 같아.\nB: 우산 없는데 어쩌지?",
     exampleSrc:"A: It looks like a rain shower is coming.\nB: I don't have an umbrella, what should I do?",
     funFact:"'소나기' is also the title of a beloved Korean short story by Hwang Sun-won about childhood love and loss."},

    {type:"teach", trg:"소득", src:"income, earnings", pos:"noun", gender:null,
     note:"Sino-Korean. 所 (place) + 得 (gain).\nMoney earned from work or investments.",
     example:"A: 올해 소득이 작년보다 늘었어.\nB: 다행이다, 열심히 한 보람이 있네.",
     exampleSrc:"A: This year's income increased from last year.\nB: That is good, your hard work paid off.",
     funFact:"소득세 (income tax) and 국민 소득 (national income) are fundamental economic terms in Korean."},

    {type:"fb",
     s:"국민 {1}이 높아져야 생활수준도 올라간다.",
     a:["소득"],
     opts:["소득","소개","소규모","소나기"],
     hint:"Which noun means income or earnings, a key economic indicator that affects living standards?",
     sSrc:"The standard of living rises when national {1} increases."},

    {type:"match", pairs:[
      {trg:"세월", src:"passing of time"},
      {trg:"소개", src:"introduction"},
      {trg:"소득", src:"income"},
      {trg:"세련되다", src:"sophisticated"}
    ]}
  ]
};
export default LESSON_16;
