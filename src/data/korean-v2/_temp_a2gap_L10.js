// Korean A2 Gap - Lesson 10: Shopping, Goods & Clothing (17 words)
const LESSON_10 = {
  id:"kov2_a2gap_l10", title:"쇼핑과 옷", icon:"🛍️", xp:15, board:true,
  steps:[
    {type:"intro", title:"Shopping, Goods & Clothing",
     desc:"Learn vocabulary for Korean stores, shopping items, clothing, and gift-giving. Navigate markets and department stores with confidence.",
     goals:["Name different types of stores in Korean","Talk about prices, items, and necessities","Describe traditional and modern clothing"]},

    // --- Teach block 1: Store types ---
    {type:"teach", trg:"시장", src:"market", pos:"noun", gender:null,
     note:"Traditional open market. From hanja 市 (city) + 場 (place).",
     example:"A: 시장에 갈까요?\nB: 좋아요, 과일 사러 가요.",
     exampleSrc:"A: Shall we go to the market?\nB: Sure, let's go buy fruit.",
     funFact:"Korea's traditional markets (전통시장) are vibrant places with street food, fresh produce, and cheap clothes."},

    {type:"teach", trg:"가게", src:"store; shop", pos:"noun", gender:null,
     note:"Small shop or store. Native Korean word.",
     example:"A: 이 가게 뭐 팔아요?\nB: 빵을 팔아요.",
     exampleSrc:"A: What does this shop sell?\nB: They sell bread.",
     funFact:"가게 is a native Korean word. It refers to smaller shops, while 매장 (from hanja) is used for larger retail stores."},

    {type:"teach", trg:"백화점", src:"department store", pos:"noun", gender:null,
     note:"From hanja 百 (hundred) + 貨 (goods) + 店 (store).",
     example:"A: 백화점에서 뭐 샀어요?\nB: 구두를 샀어요.",
     exampleSrc:"A: What did you buy at the department store?\nB: I bought dress shoes.",
     funFact:"Literally 'hundred goods store.' Korean department stores have famous basement food halls (지하 식품관)."},

    {type:"teach", trg:"슈퍼마켓", src:"supermarket", pos:"noun", gender:null,
     note:"Loanword from English 'supermarket.' Often shortened to 슈퍼.",
     example:"A: 슈퍼마켓 어디 있어요?\nB: 길 건너편에 있어요.",
     exampleSrc:"A: Where is the supermarket?\nB: It's across the street.",
     funFact:"Many Koreans say just 슈퍼 (syupeo) for convenience. Large chains like E-Mart and Homeplus are called 대형마트."},

    {type:"teach", trg:"서점", src:"bookstore", pos:"noun", gender:null,
     note:"From hanja 書 (book) + 店 (store).",
     example:"A: 서점에 가고 싶어요.\nB: 교보문고 어때요?",
     exampleSrc:"A: I want to go to a bookstore.\nB: How about Kyobo Bookstore?",
     funFact:"Kyobo Bookstore (교보문고) in Gwanghwamun is one of the largest bookstores in Korea, a cultural landmark."},

    // --- Quiz block 1 ---
    {type:"mc",
     q:"'백화점'은 어떤 곳이에요?",
     opts:["큰 가게, 여러 가지를 파는 곳","음식을 파는 시장","작은 과일 가게","책을 파는 곳"],
     ans:"큰 가게, 여러 가지를 파는 곳",
     hint:"The hanja literally means 'hundred goods store,' selling many different types of products."},

    {type:"fb",
     s:"과일은 {1}에서 사요. 싸고 신선해요.",
     a:["시장"],
     opts:["시장","백화점","서점","가게"],
     hint:"A traditional open-air marketplace where vendors sell fresh produce at good prices.",
     sSrc:"I buy fruit at the {1}. It's cheap and fresh."},

    {type:"match", pairs:[
      {trg:"시장", src:"market"},
      {trg:"백화점", src:"department store"},
      {trg:"서점", src:"bookstore"},
      {trg:"슈퍼마켓", src:"supermarket"}
    ]},

    // --- Teach block 2: Items & price ---
    {type:"teach", trg:"값", src:"price; value", pos:"noun", gender:null,
     note:"Native Korean word for price. Also means 'worth.'",
     example:"A: 이것 값이 얼마예요?\nB: 만 원이에요.",
     exampleSrc:"A: What's the price of this?\nB: It's 10,000 won.",
     funFact:"값 is native Korean. The Sino-Korean word is 가격 (價格). 값 is used more in casual conversation."},

    {type:"teach", trg:"물건", src:"thing; item; goods", pos:"noun", gender:null,
     note:"From hanja 物 (thing) + 件 (matter). Physical objects.",
     example:"A: 무슨 물건을 찾으세요?\nB: 선물할 물건이요.",
     exampleSrc:"A: What item are you looking for?\nB: Something for a gift.",
     funFact:"물건 specifically means a physical object or goods. For abstract 'things,' Korean uses 것 or 일."},

    {type:"teach", trg:"구경", src:"sightseeing; looking around", pos:"noun", gender:null,
     note:"From hanja 口 (mouth) + 景 (view). Window-shopping or browsing.",
     example:"A: 뭐 사러 왔어요?\nB: 아니요, 그냥 구경하러 왔어요.",
     exampleSrc:"A: Did you come to buy something?\nB: No, I just came to look around.",
     funFact:"구경하다 is a quintessentially Korean activity: browsing markets, festivals, or shops without buying. No pressure."},

    {type:"teach", trg:"잡지", src:"magazine", pos:"noun", gender:null,
     note:"From hanja 雜 (mixed) + 誌 (record). A periodical.",
     example:"A: 무슨 잡지 읽어요?\nB: 패션 잡지를 좋아해요.",
     exampleSrc:"A: What magazines do you read?\nB: I like fashion magazines.",
     funFact:"Literally 'mixed records.' Korean fashion and beauty magazines are very influential in Asian pop culture."},

    {type:"teach", trg:"편지", src:"letter (mail)", pos:"noun", gender:null,
     note:"From hanja 便 (convenience) + 紙 (paper). Written correspondence.",
     example:"A: 편지 받았어요?\nB: 네, 친구한테서 왔어요.",
     exampleSrc:"A: Did you receive a letter?\nB: Yes, it came from a friend.",
     funFact:"Despite the digital age, handwritten letters remain meaningful in Korea. Idols receive thousands of fan letters."},

    // --- Quiz block 2 ---
    {type:"mc",
     q:"'구경하러 왔어요'는 무슨 뜻이에요?",
     opts:["공부하러 왔어요","보러 왔어요","사러 왔어요","먹으러 왔어요"],
     ans:"보러 왔어요",
     hint:"This means you came just to browse and look around, not to make a purchase."},

    {type:"fb",
     s:"이 {1}이 너무 비싸요. 다른 가게에 가요.",
     a:["물건"],
     opts:["물건","편지","잡지","값"],
     hint:"A general word for a physical item or product that you might buy in a store.",
     sSrc:"This {1} is too expensive. Let's go to another store."},

    // --- Teach block 3: Clothing & gifts ---
    {type:"teach", trg:"양복", src:"suit; Western-style clothes", pos:"noun", gender:null,
     note:"From hanja 洋 (Western) + 服 (clothes). A business suit.",
     example:"A: 양복 입어야 해요?\nB: 네, 회의가 있어요.",
     exampleSrc:"A: Do I have to wear a suit?\nB: Yes, there's a meeting.",
     funFact:"양 (洋) means 'Western/ocean.' 양복 = Western clothes, 양식 = Western food, 양말 = socks (Western stockings)."},

    {type:"teach", trg:"한복", src:"hanbok (Korean traditional clothes)", pos:"noun", gender:null,
     note:"한 (Korean) + 복 (clothes). Traditional Korean attire.",
     example:"A: 한복 입어 봤어요?\nB: 네, 설날에 입었어요.",
     exampleSrc:"A: Have you tried wearing hanbok?\nB: Yes, I wore it on New Year's Day.",
     funFact:"Modern hanbok rental shops in Seoul let tourists dress up and visit palaces for free. A huge Instagram trend."},

    {type:"teach", trg:"선물", src:"gift; present", pos:"noun", gender:null,
     note:"From hanja 膳 (food offering) + 物 (thing). A gift.",
     example:"A: 생일 선물 뭐 줄까요?\nB: 꽃이 좋을 것 같아요.",
     exampleSrc:"A: What shall I give as a birthday gift?\nB: I think flowers would be nice.",
     funFact:"Gift-giving is deeply embedded in Korean culture. Holiday gift sets (선물세트) of spam, tuna, or fruit are standard."},

    {type:"teach", trg:"선물하다", src:"to give a gift", pos:"verb", gender:null,
     note:"선물 + 하다. To give something as a present.",
     example:"A: 뭐 선물할 거예요?\nB: 책을 선물할 거예요.",
     exampleSrc:"A: What will you give as a gift?\nB: I'll give a book.",
     funFact:"In Korean, you can also say 선물을 주다 (give a gift), but 선물하다 is more concise and natural."},

    // --- Quiz block 3 ---
    {type:"mc",
     q:"'양복'에서 '양'은 무슨 뜻이에요?",
     opts:["좋은","동양, 동쪽","서양, 서쪽","한국"],
     ans:"서양, 서쪽",
     hint:"This hanja character refers to the Western world or the ocean. Think of where suits originated."},

    {type:"fb",
     s:"설날에 {1}을 입어요. 아주 예뻐요!",
     a:["한복"],
     opts:["한복","양복","선물","편지"],
     hint:"The traditional Korean outfit worn on special holidays and celebrations.",
     sSrc:"We wear {1} on New Year's Day. It's very beautiful!"},

    // --- Teach block 4: Using & needing ---
    {type:"teach", trg:"사용하다", src:"to use", pos:"verb", gender:null,
     note:"From hanja 使 (cause) + 用 (use) + 하다. Formal 'use.'",
     example:"A: 이 컴퓨터 사용해도 돼요?\nB: 네, 사용하세요.",
     exampleSrc:"A: May I use this computer?\nB: Yes, go ahead and use it.",
     funFact:"사용하다 is the formal/written form. In casual speech, Koreans often use 쓰다 (to use/write) instead."},

    {type:"teach", trg:"필요", src:"need; necessity", pos:"noun", gender:null,
     note:"From hanja 必 (certainly) + 要 (need). Necessity.",
     example:"A: 뭐가 필요해요?\nB: 펜이 필요해요.",
     exampleSrc:"A: What do you need?\nB: I need a pen.",
     funFact:"Often used as 필요(가) 있다 (there is a need) or 필요(가) 없다 (there is no need). Very common pattern."},

    {type:"teach", trg:"필요하다", src:"to be necessary; to need", pos:"adj", gender:null,
     note:"필요 + 하다. Functions as an adjective in Korean grammar.",
     example:"A: 우산이 필요해요?\nB: 네, 비가 올 것 같아요.",
     exampleSrc:"A: Do you need an umbrella?\nB: Yes, it looks like it will rain.",
     funFact:"Although translated as 'to need,' 필요하다 is grammatically a descriptive verb (adjective) in Korean."},

    // --- Quiz block 4 ---
    {type:"fb",
     s:"한국어 사전이 {1}해요. 어디서 살 수 있어요?",
     a:["필요"],
     opts:["필요","사용","선물","구경"],
     hint:"You are expressing that you require something and want to know where to get it.",
     sSrc:"I {1} a Korean dictionary. Where can I buy one?"},

    {type:"match", pairs:[
      {trg:"양복", src:"suit"},
      {trg:"한복", src:"hanbok"},
      {trg:"선물", src:"gift"},
      {trg:"값", src:"price"},
      {trg:"구경", src:"looking around"}
    ]},

    {type:"mc",
     q:"일상에서 '사용하다' 대신 뭐라고 해요?",
     opts:["하다","먹다","보다","쓰다"],
     ans:"쓰다",
     hint:"In casual daily speech, Koreans use a shorter native word that also means 'to write.'"}
  ]
};
export default LESSON_10;
