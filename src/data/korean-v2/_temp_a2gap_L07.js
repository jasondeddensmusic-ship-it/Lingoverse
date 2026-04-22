// Korean A2 Gap - Lesson 7: Food - Drinks, Fruits & Snacks (17 words)
const LESSON_7 = {
  id:"kov2_a2gap_l7", title:"음료와 과일", icon:"🍹", xp:15, board:true,
  steps:[
    {type:"intro", title:"Drinks, Fruits & Snacks",
     desc:"Explore Korean vocabulary for beverages, fruits, and popular snack foods. Order at a cafe or describe your favorites.",
     goals:["Name common drinks and fruits in Korean","Recognize loanwords adapted into Korean","Express fullness and hunger"]},

    // --- Teach block 1: Drinks ---
    {type:"teach", trg:"주스", src:"juice", pos:"noun", gender:null,
     note:"Loanword from English 'juice.' Pronounced 'ju-seu.'",
     example:"A: 주스 마실래요?\nB: 네, 오렌지 주스 주세요.",
     exampleSrc:"A: Want to drink juice?\nB: Yes, orange juice please.",
     funFact:"English loanword. Korean adds a vowel to final consonant clusters, so 'juice' becomes 주스 (ju-seu)."},

    {type:"teach", trg:"콜라", src:"cola", pos:"noun", gender:null,
     note:"Loanword from English 'cola.' Very common.",
     example:"A: 콜라 한 잔 주세요.\nB: 얼음 넣어 드릴까요?",
     exampleSrc:"A: One glass of cola, please.\nB: Shall I add ice?",
     funFact:"Coca-Cola entered Korea in the 1960s. 콜라 is now a generic term for any cola-type drink."},

    {type:"teach", trg:"맥주", src:"beer", pos:"noun", gender:null,
     note:"From hanja 麥 (barley) + 酒 (alcohol).",
     example:"A: 맥주 한 잔 할까요?\nB: 좋아요, 치킨도 시킬까요?",
     exampleSrc:"A: Shall we have a beer?\nB: Sure, shall we order chicken too?",
     funFact:"치맥 (chimaek) = 치킨 + 맥주 (chicken + beer). A beloved Korean cultural combo, especially after work."},

    {type:"teach", trg:"술", src:"alcohol; liquor", pos:"noun", gender:null,
     note:"General word for alcoholic drinks. Native Korean word.",
     example:"A: 술 마셔요?\nB: 가끔 마셔요.",
     exampleSrc:"A: Do you drink alcohol?\nB: I drink sometimes.",
     funFact:"Korean drinking culture has many rules: pour with two hands, turn away from elders when drinking."},

    // --- Quiz block 1 ---
    {type:"mc",
     q:"'치맥'은 무엇과 무엇이에요?",
     opts:["치킨과 맥주","치즈와 맥주","치킨과 막걸리","초콜릿과 맥주"],
     ans:"치킨과 맥주",
     hint:"A compound of two beloved Korean evening snack items: fried poultry and a barley drink."},

    {type:"fb",
     s:"오렌지 {1} 한 잔 주세요.",
     a:["주스"],
     opts:["주스","콜라","술","맥주"],
     hint:"This loanword from English refers to a squeezed fruit beverage.",
     sSrc:"One glass of orange {1}, please."},

    // --- Teach block 2: Fruits ---
    {type:"teach", trg:"오렌지", src:"orange", pos:"noun", gender:null,
     note:"Loanword from English 'orange.' Refers to the fruit.",
     example:"A: 오렌지 좋아해요?\nB: 네, 달고 맛있어요.",
     exampleSrc:"A: Do you like oranges?\nB: Yes, they're sweet and delicious.",
     funFact:"The native Korean word for the traditional citrus is 귤 (gyul), which is actually a tangerine/mandarin."},

    {type:"teach", trg:"바나나", src:"banana", pos:"noun", gender:null,
     note:"Loanword from English 'banana.'",
     example:"A: 바나나 몇 개 살까요?\nB: 한 송이 사요.",
     exampleSrc:"A: How many bananas shall we buy?\nB: Let's buy one bunch.",
     funFact:"Bananas were a luxury in Korea until the 1980s. Parents would buy one as a special treat for children."},

    {type:"teach", trg:"수박", src:"watermelon", pos:"noun", gender:null,
     note:"From hanja 水 (water) + native 박 (gourd).",
     example:"A: 여름에 뭐 좋아해요?\nB: 수박이 최고예요!",
     exampleSrc:"A: What do you like in summer?\nB: Watermelon is the best!",
     funFact:"수 comes from hanja for 'water' and 박 is a native word for 'gourd.' The ultimate Korean summer fruit."},

    {type:"teach", trg:"포도", src:"grape", pos:"noun", gender:null,
     note:"From hanja 葡萄 (grape). Sino-Korean word.",
     example:"A: 포도 먹을래요?\nB: 네, 씻어 주세요.",
     exampleSrc:"A: Want to eat grapes?\nB: Yes, please wash them.",
     funFact:"The Gyeongbuk region is famous for Korean grapes. 포도 also appears in 포도주 (grape wine)."},

    // --- Quiz block 2 ---
    {type:"match", pairs:[
      {trg:"오렌지", src:"orange"},
      {trg:"바나나", src:"banana"},
      {trg:"수박", src:"watermelon"},
      {trg:"포도", src:"grape"}
    ]},

    {type:"mc",
     q:"여름에 한국 사람들이 좋아하는 과일은?",
     opts:["바나나","수박","포도","오렌지"],
     ans:"수박",
     hint:"This large green fruit with red flesh is the ultimate refresher in hot Korean summers."},

    // --- Teach block 3: Snack foods ---
    {type:"teach", trg:"사탕", src:"candy", pos:"noun", gender:null,
     note:"Hard candy or sweets in general.",
     example:"A: 사탕 먹을래요?\nB: 네, 딸기맛 주세요.",
     exampleSrc:"A: Want some candy?\nB: Yes, strawberry flavor please.",
     funFact:"사탕 originally comes from 砂糖 (satang, sugar). The word shifted from meaning sugar itself to meaning candy."},

    {type:"teach", trg:"초콜릿", src:"chocolate", pos:"noun", gender:null,
     note:"Loanword from English 'chocolate.'",
     example:"A: 초콜릿 좋아해요?\nB: 네, 다크 초콜릿이 좋아요.",
     exampleSrc:"A: Do you like chocolate?\nB: Yes, I like dark chocolate.",
     funFact:"Valentine's Day in Korea: women give men chocolate. White Day (March 14): men give candy back."},

    {type:"teach", trg:"샌드위치", src:"sandwich", pos:"noun", gender:null,
     note:"Loanword from English 'sandwich.'",
     example:"A: 아침에 뭐 먹었어요?\nB: 샌드위치를 먹었어요.",
     exampleSrc:"A: What did you eat for breakfast?\nB: I ate a sandwich.",
     funFact:"Korean convenience store sandwiches (편의점 샌드위치) are famous for being fresh and surprisingly good."},

    {type:"teach", trg:"햄버거", src:"hamburger", pos:"noun", gender:null,
     note:"Loanword from English 'hamburger.'",
     example:"A: 햄버거 먹으러 갈까요?\nB: 좋아요, 감자튀김도 시켜요.",
     exampleSrc:"A: Shall we go eat hamburgers?\nB: Sure, let's order fries too.",
     funFact:"Korean burger chains like Lotteria have unique items such as kimchi burgers and bulgogi burgers."},

    {type:"teach", trg:"피자", src:"pizza", pos:"noun", gender:null,
     note:"Loanword from English/Italian 'pizza.'",
     example:"A: 오늘 저녁에 피자 시킬까요?\nB: 네, 불고기 피자요!",
     exampleSrc:"A: Shall we order pizza for dinner?\nB: Yes, bulgogi pizza!",
     funFact:"Korean pizza is famous for creative toppings: sweet potato mousse, corn, shrimp, and even honey."},

    // --- Quiz block 3 ---
    {type:"fb",
     s:"편의점에서 {1}를 샀어요. 빠르게 먹기 좋아요.",
     a:["샌드위치"],
     opts:["샌드위치","햄버거","피자","초콜릿"],
     hint:"A quick portable meal with bread, fillings, and no cooking needed. Sold at convenience stores.",
     sSrc:"I bought a {1} at the convenience store. It's good for eating quickly."},

    {type:"mc",
     q:"한국 피자의 특별한 점은 뭐예요?",
     opts:["이탈리아와 같아요","아주 작아요","토핑이 다양해요","치즈가 없어요"],
     ans:"토핑이 다양해요",
     hint:"Korean versions of this Italian dish are known for creative and unexpected toppings."},

    // --- Teach block 4: Menu & feelings ---
    {type:"teach", trg:"메뉴", src:"menu", pos:"noun", gender:null,
     note:"Loanword from English/French 'menu.'",
     example:"A: 메뉴 좀 볼게요.\nB: 여기 있어요. 천천히 보세요.",
     exampleSrc:"A: Let me see the menu.\nB: Here it is. Take your time.",
     funFact:"Many Korean restaurants display photo menus or plastic food models outside, making ordering easier."},

    {type:"teach", trg:"자장면", src:"jajangmyeon (black bean noodles)", pos:"noun", gender:null,
     note:"Korean-Chinese noodles in black bean sauce.",
     example:"A: 자장면 먹을래요?\nB: 네, 짬뽕도 시킬까요?",
     exampleSrc:"A: Want to eat jajangmyeon?\nB: Yes, shall we order jjamppong too?",
     funFact:"Korea's most popular delivery food. On Black Day (April 14), single people eat 자장면 together."},

    {type:"teach", trg:"배부르다", src:"to be full (stomach)", pos:"adj", gender:null,
     note:"Opposite of 배고프다. 배 (belly) + 부르다 (to be full).",
     example:"A: 더 먹을래요?\nB: 아니요, 배불러요!",
     exampleSrc:"A: Want to eat more?\nB: No, I'm full!",
     funFact:"배 means 'stomach/belly.' Paired with 부르다 (to be full/swollen). The opposite of 배고프다 (hungry)."},

    {type:"teach", trg:"고프다", src:"to be hungry; to be empty", pos:"adj", gender:null,
     note:"Archaic/literary form meaning 'empty.' Mostly in 배(가) 고프다.",
     example:"A: 배 안 고파요?\nB: 조금 고파요.",
     exampleSrc:"A: Aren't you hungry?\nB: I'm a little hungry.",
     funFact:"Almost never used alone. It survives primarily in the compound 배고프다 (belly-empty = hungry)."},

    // --- Quiz block 4 ---
    {type:"fb",
     s:"많이 먹었어요. 너무 {1}!",
     a:["배불러요"],
     opts:["배불러요","배고파요","고파요","메뉴"],
     hint:"You just ate a big meal and your stomach feels completely satisfied.",
     sSrc:"I ate a lot. I'm so {1}!"},

    {type:"match", pairs:[
      {trg:"맥주", src:"beer"},
      {trg:"술", src:"alcohol"},
      {trg:"자장면", src:"black bean noodles"},
      {trg:"메뉴", src:"menu"},
      {trg:"사탕", src:"candy"}
    ]}
  ]
};
export default LESSON_7;
