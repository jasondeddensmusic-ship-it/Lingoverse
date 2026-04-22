// Korean A2 Gap - Lesson 6: Food - Meals, Meat & Staples (19 words)
const LESSON_6 = {
  id:"kov2_a2gap_l6", title:"식사와 고기", icon:"🍖", xp:15, board:true,
  steps:[
    {type:"intro", title:"Meals, Meat & Staples",
     desc:"Learn essential food vocabulary for Korean meals, including meats, staples, and mealtime expressions.",
     goals:["Name common meats and staple foods in Korean","Use mealtime expressions like 'Have you eaten?'","Distinguish 식사 (formal meal) from casual eating"]},

    // --- Teach block 1: Meal basics ---
    {type:"teach", trg:"식사", src:"meal", pos:"noun", gender:null,
     note:"Formal word for a meal. Used in polite speech.",
     example:"A: 식사 준비됐어요?\nB: 네, 거의 다 됐어요.",
     exampleSrc:"A: Is the meal ready?\nB: Yes, it's almost done.",
     funFact:"From hanja: 食 (eat) + 事 (matter). Koreans greet each other with '식사하셨어요?' (Have you eaten?)."},

    {type:"teach", trg:"식사하다", src:"to eat a meal", pos:"verb", gender:null,
     note:"Formal verb for dining. Polite form: 식사하세요.",
     example:"A: 같이 식사할까요?\nB: 좋아요, 뭐 먹을까요?",
     exampleSrc:"A: Shall we eat together?\nB: Sounds good, what shall we eat?",
     funFact:"Using 식사하다 instead of 먹다 shows respect. It is standard in business and formal settings."},

    {type:"teach", trg:"아침", src:"morning; breakfast", pos:"noun", gender:null,
     note:"Means both 'morning' and 'breakfast' depending on context.",
     example:"A: 아침 먹었어요?\nB: 아니요, 시간이 없었어요.",
     exampleSrc:"A: Did you eat breakfast?\nB: No, I didn't have time.",
     funFact:"Korean mealtimes are named by time of day: 아침 (morning), 점심 (midday), 저녁 (evening)."},

    {type:"teach", trg:"점심", src:"lunch", pos:"noun", gender:null,
     note:"Midday meal. Often the biggest meal at work.",
     example:"A: 점심 뭐 먹을 거예요?\nB: 김치찌개 먹고 싶어요.",
     exampleSrc:"A: What will you eat for lunch?\nB: I want to eat kimchi stew.",
     funFact:"From hanja: 點 (point) + 心 (heart). Literally 'touching the heart' at midday."},

    {type:"teach", trg:"점심시간", src:"lunchtime", pos:"noun", gender:null,
     note:"Compound: 점심 (lunch) + 시간 (time).",
     example:"A: 점심시간이에요!\nB: 어디서 먹을까요?",
     exampleSrc:"A: It's lunchtime!\nB: Where shall we eat?",
     funFact:"Korean office lunchtime is typically 12:00 to 1:00 PM. Eating alone was once considered unusual."},

    {type:"teach", trg:"저녁", src:"evening; dinner", pos:"noun", gender:null,
     note:"Means both 'evening' and 'dinner' by context.",
     example:"A: 저녁 같이 먹을래요?\nB: 네, 7시에 만나요.",
     exampleSrc:"A: Want to eat dinner together?\nB: Yes, let's meet at 7.",
     funFact:"저녁 can mean the time of day or the meal. '저녁 먹다' = eat dinner, '저녁에' = in the evening."},

    // --- Quiz block 1 ---
    {type:"mc",
     q:"'식사하셨어요?'는 무슨 뜻이에요?",
     opts:["밥을 먹었느냐는 인사","날씨를 물어보는 말","어디 가느냐는 말","이름을 물어보는 말"],
     ans:"밥을 먹었느냐는 인사",
     hint:"This phrase uses the formal word for dining and is a common Korean greeting."},

    {type:"fb",
     s:"{1} 뭐 먹을 거예요?",
     a:["점심"],
     opts:["점심","저녁","아침","식사"],
     hint:"The midday meal, often eaten with coworkers at the office.",
     sSrc:"What will you eat for {1}?"},

    {type:"match", pairs:[
      {trg:"아침", src:"breakfast"},
      {trg:"점심", src:"lunch"},
      {trg:"저녁", src:"dinner"},
      {trg:"식사", src:"meal"}
    ]},

    // --- Teach block 2: Meats ---
    {type:"teach", trg:"닭", src:"chicken (animal)", pos:"noun", gender:null,
     note:"The bird itself. For the meat, use 닭고기.",
     example:"A: 닭이 몇 마리 있어요?\nB: 다섯 마리 있어요.",
     exampleSrc:"A: How many chickens are there?\nB: There are five.",
     funFact:"Native Korean word. The counter 마리 is used for animals, while 명 is for people."},

    {type:"teach", trg:"닭고기", src:"chicken meat", pos:"noun", gender:null,
     note:"Compound: 닭 (chicken) + 고기 (meat).",
     example:"A: 닭고기 좋아해요?\nB: 네, 치킨을 자주 먹어요.",
     exampleSrc:"A: Do you like chicken meat?\nB: Yes, I often eat fried chicken.",
     funFact:"Korea's fried chicken (치킨) culture is massive. Chicken + beer is called 치맥 (치킨 + 맥주)."},

    {type:"teach", trg:"쇠고기", src:"beef", pos:"noun", gender:null,
     note:"Compound: 쇠 (cattle) + 고기 (meat).",
     example:"A: 쇠고기 얼마예요?\nB: 100그램에 5,000원이에요.",
     exampleSrc:"A: How much is the beef?\nB: It's 5,000 won per 100 grams.",
     funFact:"Korean beef (한우, hanwoo) is a premium product, often given as a holiday gift set."},

    {type:"teach", trg:"돼지고기", src:"pork", pos:"noun", gender:null,
     note:"Compound: 돼지 (pig) + 고기 (meat).",
     example:"A: 삼겹살은 돼지고기예요?\nB: 네, 돼지 배 부분이에요.",
     exampleSrc:"A: Is samgyeopsal pork?\nB: Yes, it's the belly part of a pig.",
     funFact:"Samgyeopsal (삼겹살, three-layer meat) is Korea's most popular BBQ cut. Eaten with soju."},

    {type:"teach", trg:"갈비", src:"ribs; galbi", pos:"noun", gender:null,
     note:"Beef or pork ribs, marinated and grilled.",
     example:"A: 갈비 먹으러 갈까요?\nB: 좋아요! 소갈비로 할까요?",
     exampleSrc:"A: Shall we go eat galbi?\nB: Sure! Shall we have beef ribs?",
     funFact:"Galbi is marinated in soy sauce, garlic, sugar, and pear juice. LA galbi was invented by Korean immigrants."},

    // --- Quiz block 2 ---
    {type:"mc",
     q:"삼겹살은 무슨 고기예요?",
     opts:["닭고기","돼지고기","생선","쇠고기"],
     ans:"돼지고기",
     hint:"This BBQ favorite comes from the belly of a farm animal that says 'oink.'"},

    {type:"fb",
     s:"한우는 한국의 유명한 {1}예요.",
     a:["쇠고기"],
     opts:["쇠고기","돼지고기","닭고기","갈비"],
     hint:"Premium Korean cattle meat, often given as a gift set during holidays.",
     sSrc:"Hanwoo is Korea's famous {1}."},

    // --- Teach block 3: Staples & extras ---
    {type:"teach", trg:"생선", src:"fish (for eating)", pos:"noun", gender:null,
     note:"Fish as food. Living fish in water is 물고기.",
     example:"A: 생선 좋아해요?\nB: 네, 고등어를 좋아해요.",
     exampleSrc:"A: Do you like fish?\nB: Yes, I like mackerel.",
     funFact:"Korean distinguishes 생선 (edible fish) from 물고기 (fish in water). 생 means 'raw/fresh.'"},

    {type:"teach", trg:"소금", src:"salt", pos:"noun", gender:null,
     note:"Essential seasoning. Used heavily in kimchi making.",
     example:"A: 소금 좀 주세요.\nB: 여기 있어요.",
     exampleSrc:"A: Please give me some salt.\nB: Here you go.",
     funFact:"From 소 (cow) + 금 (gold). Salt was once as valuable as gold. Central to kimchi fermentation."},

    {type:"teach", trg:"설탕", src:"sugar", pos:"noun", gender:null,
     note:"Granulated sugar. From hanja 雪 (snow) + 糖 (candy).",
     example:"A: 커피에 설탕 넣을까요?\nB: 아니요, 괜찮아요.",
     exampleSrc:"A: Shall I put sugar in your coffee?\nB: No, I'm fine.",
     funFact:"The hanja literally means 'snow candy' because white sugar looked like snow to early Koreans."},

    {type:"teach", trg:"빵", src:"bread", pos:"noun", gender:null,
     note:"Borrowed from Portuguese 'pao' via Japanese 'pan.'",
     example:"A: 아침에 빵 먹었어요?\nB: 네, 식빵을 먹었어요.",
     exampleSrc:"A: Did you eat bread for breakfast?\nB: Yes, I had white bread.",
     funFact:"Borrowed from Portuguese 'pao' through Japan. Korean bakeries (빵집) are hugely popular."},

    // --- Quiz block 3 ---
    {type:"mc",
     q:"물고기와 생선의 차이는 뭐예요?",
     opts:["같은 뜻이에요","생선은 큰 것, 물고기는 작은 것","생선은 먹는 것, 물고기는 살아 있는 것","물고기는 먹는 것, 생선은 살아 있는 것"],
     ans:"생선은 먹는 것, 물고기는 살아 있는 것",
     hint:"One word is for the dinner plate, the other swims freely in rivers and oceans."},

    {type:"fb",
     s:"김치를 만들 때 {1}이 많이 필요해요.",
     a:["소금"],
     opts:["소금","설탕","빵","생선"],
     hint:"This white seasoning is essential for fermenting vegetables. Think of preservation.",
     sSrc:"You need a lot of {1} when making kimchi."},

    // --- Teach block 4: Final words ---
    {type:"teach", trg:"우유", src:"milk", pos:"noun", gender:null,
     note:"Cow's milk. From hanja 牛 (cow) + 乳 (milk).",
     example:"A: 우유 있어요?\nB: 냉장고에 있어요.",
     exampleSrc:"A: Do you have milk?\nB: It's in the fridge.",
     funFact:"From hanja meaning 'cow milk.' Korea's banana milk (바나나맛 우유) is an iconic convenience store drink."},

    {type:"teach", trg:"과자", src:"snack; cookie; cracker", pos:"noun", gender:null,
     note:"General term for snacks and baked treats.",
     example:"A: 과자 좀 먹을래요?\nB: 네, 감사해요!",
     exampleSrc:"A: Want to have some snacks?\nB: Yes, thank you!",
     funFact:"From hanja 菓 (fruit) + 子 (small thing). Originally meant fruit-based sweets, now covers all snacks."},

    {type:"teach", trg:"잡수시다", src:"to eat (honorific)", pos:"verb", gender:null,
     note:"Honorific of 먹다. Used when speaking about elders.",
     example:"A: 할머니, 많이 잡수세요.\nB: 고마워, 잘 먹을게.",
     exampleSrc:"A: Grandmother, please eat a lot.\nB: Thank you, I'll eat well.",
     funFact:"One of Korean's special honorific verbs. 먹다 becomes 잡수시다 or 드시다 for respected people."},

    {type:"teach", trg:"배고프다", src:"to be hungry", pos:"adj", gender:null,
     note:"Literally 'stomach is empty.' Adjective in Korean grammar.",
     example:"A: 배고파요?\nB: 네, 정말 배고파요!",
     exampleSrc:"A: Are you hungry?\nB: Yes, I'm really hungry!",
     funFact:"배 means 'stomach/belly.' 고프다 means 'to be empty.' So being hungry is literally 'belly-empty.'"},

    // --- Quiz block 4 ---
    {type:"mc",
     q:"할머니께 '많이 드세요' 대신 뭐라고 해요?",
     opts:["많이 먹어","많이 마셔요","많이 드려요","많이 잡수세요"],
     ans:"많이 잡수세요",
     hint:"This is the highest honorific form of 'to eat,' reserved for elders you deeply respect."},

    {type:"fb",
     s:"아, {1}! 빨리 밥 먹자!",
     a:["배고파"],
     opts:["배고파","과자","우유","잡수세요"],
     hint:"This expression means your stomach feels empty and you need food soon.",
     sSrc:"Ah, I'm {1}! Let's eat quickly!"},

    {type:"match", pairs:[
      {trg:"우유", src:"milk"},
      {trg:"빵", src:"bread"},
      {trg:"소금", src:"salt"},
      {trg:"설탕", src:"sugar"},
      {trg:"과자", src:"snack"}
    ]}
  ]
};
export default LESSON_6;
