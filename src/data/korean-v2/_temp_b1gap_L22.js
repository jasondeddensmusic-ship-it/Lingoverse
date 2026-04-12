// Korean B1 Gap - Lesson 22: Cooking and Food Preparation
const LESSON_22 = {
  id:"kov2_b1gap_l22", title:"요리와 재료", icon:"🍳", xp:15, board:true,
  steps:[
    {type:"intro", title:"Cooking and Food Preparation",
     desc:"Enter the Korean kitchen. Learn verbs for boiling, mixing, chopping, and soaking, plus essential ingredients from flour to garlic. Korean cooking vocabulary is precise and rewarding.",
     goals:["Learn 20 cooking verbs and ingredient nouns","Distinguish active and passive cooking verbs","Describe Korean cooking processes naturally"]},

    // --- Teach 1-5 ---
    {type:"teach", trg:"끓다", src:"to boil (intransitive)", pos:"verb", gender:null,
     note:"The liquid itself boils. Intransitive: 물이 끓다 (water boils).",
     example:"A: 물이 끓고 있어요?\nB: 네, 벌써 끓고 있어요.\nA: 그러면 라면을 넣으세요.",
     exampleSrc:"A: Is the water boiling?\nB: Yes, it's already boiling.\nA: Then put the ramen in.",
     funFact:"끓다 vs. 끓이다 is a classic intransitive/causative pair. The water boils by itself (끓다), but you make something boil (끓이다). This pattern appears throughout Korean cooking vocabulary."},

    {type:"teach", trg:"끓이다", src:"to boil (something)", pos:"verb", gender:null,
     note:"Causative of 끓다. You actively boil something: 국을 끓이다 (to make soup).",
     example:"A: 저녁에 뭐 만들어요?\nB: 된장찌개를 끓이고 있어요.\nA: 맛있겠다! 빨리 먹고 싶어요.",
     exampleSrc:"A: What are you making for dinner?\nB: I'm making doenjang-jjigae.\nA: Sounds delicious! I want to eat soon.",
     funFact:"In Korean homes, 국을 끓이다 (to boil soup) is a daily ritual. A meal without soup feels incomplete. The phrase 밥 먹었어? (have you eaten rice?) really means 'have you had a proper meal with soup?'"},

    {type:"teach", trg:"섞다", src:"to mix, to stir together", pos:"verb", gender:null,
     note:"Active mixing by a person. 재료를 섞다 (to mix ingredients).",
     example:"A: 반죽을 잘 섞어야 해요.\nB: 얼마나 섞어요?\nA: 덩어리가 없을 때까지요.",
     exampleSrc:"A: You need to mix the dough well.\nB: How long should I mix?\nA: Until there are no lumps.",
     funFact:"섞다 extends beyond cooking: 섞여 살다 (to live mixed together, about multicultural communities). 비빔밥 literally means 'mixed rice,' where 비비다 is a synonym of 섞다 for food."},

    {type:"teach", trg:"섞이다", src:"to be mixed, to blend", pos:"verb", gender:null,
     note:"Passive of 섞다. Things mix on their own: 색이 섞이다 (colors blend).",
     example:"A: 물감이 잘 섞였어요?\nB: 네, 예쁜 색이 나왔어요.\nA: 어떤 색이에요?",
     exampleSrc:"A: Did the paints mix well?\nB: Yes, a pretty color came out.\nA: What color is it?",
     funFact:"섞다/섞이다 is another active/passive pair like 끓다/끓이다. Korean is very precise about who causes the action. If ingredients blend naturally, use 섞이다. If you stir them, use 섞다."},

    {type:"teach", trg:"썰다", src:"to chop, to slice", pos:"verb", gender:null,
     note:"Cutting food into pieces. 채소를 썰다 (to chop vegetables).",
     example:"A: 양파를 잘게 썰어 주세요.\nB: 얼마나 잘게요?\nA: 아주 작게 썰어 주세요.",
     exampleSrc:"A: Please chop the onion finely.\nB: How finely?\nA: Please cut it very small.",
     funFact:"썰다 has slang power: 썰 풀다 (to spill a story) comes from 'slicing open' a tale. On Korean variety shows, 썰 means a juicy personal story that someone shares dramatically."},

    // --- Quiz batch 1 ---
    {type:"mc",
     q:"'된장찌개를 끓이고 있어요'에서 왜 '끓이다'를 써요?",
     opts:["찌개가 스스로 끓으니까","사람이 찌개를 만드니까","찌개가 이미 끓었으니까","끓다가 더 정중하니까"],
     ans:"사람이 찌개를 만드니까",
     hint:"Consider the difference between intransitive and causative. Someone is actively making the stew."},

    {type:"fb",
     s:"양파를 잘게 {1} 주세요.",
     a:["썰어"],
     opts:["썰어","끓여","섞어","썩어"],
     hint:"A cooking verb meaning to chop or slice. Used with a knife on vegetables.",
     sSrc:"Please {1} the onion finely."},

    // --- Teach 6-10 ---
    {type:"teach", trg:"담그다", src:"to soak, to immerse, to pickle", pos:"verb", gender:null,
     note:"Submerging in liquid. 김치를 담그다 (to make kimchi by pickling).",
     example:"A: 올해 김치를 담갔어요?\nB: 네, 지난주에 담갔어요.\nA: 맛있게 됐으면 좋겠어요.",
     exampleSrc:"A: Did you make kimchi this year?\nB: Yes, I pickled it last week.\nA: I hope it turned out delicious.",
     funFact:"김치를 담그다 is a cornerstone of Korean culture. 김장 (winter kimchi-making) is a UNESCO Intangible Cultural Heritage event where families gather to pickle hundreds of cabbages together."},

    {type:"teach", trg:"담다", src:"to put in, to serve (food)", pos:"verb", gender:null,
     note:"Placing food into a container or plate. 그릇에 담다 (to serve in a bowl).",
     example:"A: 밥을 그릇에 담아 주세요.\nB: 많이 담을까요?\nA: 적당히 담아 주세요.",
     exampleSrc:"A: Please serve rice in a bowl.\nB: Should I serve a lot?\nA: A moderate amount, please.",
     funFact:"담다 extends to emotions: 마음을 담다 (to put one's heart into something), 정성을 담다 (to put sincerity into). A gift 정성을 담아 (given with sincerity) means more than its price."},

    {type:"teach", trg:"담기다", src:"to be contained, to be held in", pos:"verb", gender:null,
     note:"Passive of 담다. Something is placed or contained: 사진에 담기다 (to be captured in a photo).",
     example:"A: 이 사진에 추억이 담겨 있어요.\nB: 정말 좋은 사진이에요.\nA: 함께한 시간이 담겼어요.",
     exampleSrc:"A: Memories are held in this photo.\nB: It's really a great photo.\nA: The time we spent together is captured in it.",
     funFact:"담기다 is poetic. 눈물이 담긴 편지 (a letter filled with tears), 사랑이 담긴 음식 (food containing love). Korean lyricists use 담기다 to express emotions held within objects."},

    {type:"teach", trg:"씹다", src:"to chew", pos:"verb", gender:null,
     note:"Physical chewing. Also slang for ignoring someone (씹다 = to 'chew off').",
     example:"A: 음식을 천천히 씹으세요.\nB: 왜요?\nA: 잘 씹어야 소화가 잘 돼요.",
     exampleSrc:"A: Chew your food slowly.\nB: Why?\nA: You digest better if you chew well.",
     funFact:"씹다 is internet slang for 'to ignore/leave on read.' If someone reads your message but does not reply, they 씹었다 (chewed you). A harsh modern extension of a simple cooking word."},

    {type:"teach", trg:"썩다", src:"to rot, to decay", pos:"verb", gender:null,
     note:"Decomposition of food or material. 과일이 썩다 (fruit rots).",
     example:"A: 이 사과가 썩었어요.\nB: 버리세요. 먹으면 안 돼요.\nA: 아까워요, 어제 샀는데.",
     exampleSrc:"A: This apple has rotted.\nB: Throw it away. You shouldn't eat it.\nA: What a waste, I just bought it yesterday.",
     funFact:"썩다 is used metaphorically: 속이 썩다 (insides rotting = feeling frustrated), 돈이 썩다 (money rotting = having too much unused money). Both expressions are very common in daily Korean."},

    // --- Quiz batch 2 ---
    {type:"match", pairs:[
      {trg:"담그다", src:"to soak, pickle"},
      {trg:"담다", src:"to put in, serve"},
      {trg:"씹다", src:"to chew"},
      {trg:"썩다", src:"to rot, decay"}
    ]},

    {type:"fb",
     s:"올해 김치를 {1}?",
     a:["담갔어요"],
     opts:["담갔어요","담았어요","섞었어요","썰었어요"],
     hint:"A verb meaning to soak or pickle. Kimchi-making involves submerging cabbage in seasoning.",
     sSrc:"Did you {1} kimchi this year?"},

    // --- Teach 11-15 ---
    {type:"teach", trg:"가루", src:"powder, flour (general)", pos:"noun", gender:null,
     note:"Any fine powder. 고춧가루 (chili powder), 밀가루 (wheat flour).",
     example:"A: 고춧가루를 얼마나 넣어요?\nB: 두 숟가락이면 돼요.\nA: 매운 거 좋아해서 세 숟가락 넣을게요.",
     exampleSrc:"A: How much chili powder should I add?\nB: Two spoonfuls is enough.\nA: I like spicy food, so I'll add three.",
     funFact:"가루 appears in many compounds: 빵가루 (breadcrumbs), 콩가루 (soybean powder), 세탁 가루 (laundry powder). 콩가루 집안 means a 'crumbling family' because soybean powder falls apart easily."},

    {type:"teach", trg:"밀가루", src:"wheat flour", pos:"noun", gender:null,
     note:"밀 (wheat) + 가루 (powder). The base for bread, noodles, and dumplings.",
     example:"A: 만두를 만들려면 밀가루가 필요해요.\nB: 얼마나 필요해요?\nA: 두 컵 정도요.",
     exampleSrc:"A: To make dumplings, you need flour.\nB: How much do you need?\nA: About two cups.",
     funFact:"Korea's love of 밀가루 food exploded after the Korean War when American wheat aid arrived. 칼국수 (knife-cut noodles), 수제비 (hand-torn dough soup), and 만두 (dumplings) all boomed in that era."},

    {type:"teach", trg:"고추", src:"chili pepper", pos:"noun", gender:null,
     note:"The pepper itself. 고춧가루 = chili powder. 고추장 = chili paste.",
     example:"A: 고추를 넣을까요?\nB: 네, 두 개만 넣으세요.\nA: 매워질 수 있어요!",
     exampleSrc:"A: Should I add chili peppers?\nB: Yes, just put in two.\nA: It might get spicy!",
     funFact:"고추 arrived in Korea from the Americas via Japan around the 1600s. Before that, Korean food was not particularly spicy. 고추 transformed the cuisine and made 김치 what it is today."},

    {type:"teach", trg:"마늘", src:"garlic", pos:"noun", gender:null,
     note:"Essential Korean ingredient. Used in nearly every savory dish.",
     example:"A: 한국 요리에 마늘이 많이 들어가요.\nB: 맞아요, 마늘 없이는 안 돼요.\nA: 마늘을 다져 주세요.",
     exampleSrc:"A: Korean cooking uses a lot of garlic.\nB: Right, it's impossible without garlic.\nA: Please mince the garlic.",
     funFact:"In Korean mythology, a bear ate nothing but garlic and mugwort for 100 days to become human (단군 신화). Korea is one of the world's largest garlic consumers per capita."},

    {type:"teach", trg:"달걀", src:"egg", pos:"noun", gender:null,
     note:"Also written 닭의 알 (chicken's egg). Shortened to 달걀.",
     example:"A: 달걀 몇 개 필요해요?\nB: 세 개면 충분해요.\nA: 프라이로 할까요?",
     exampleSrc:"A: How many eggs do you need?\nB: Three is enough.\nA: Shall we fry them?",
     funFact:"달걀 vs. 계란 (鷄卵): both mean egg. 달걀 is native Korean, 계란 is Sino-Korean. In daily speech both are used, but 달걀 feels slightly warmer and more traditional."},

    // --- Quiz batch 3 ---
    {type:"mc",
     q:"'고춧가루'는 무엇을 뜻해요?",
     opts:["고추로 만든 가루","마늘로 만든 가루","밀로 만든 가루","쌀로 만든 가루"],
     ans:"고추로 만든 가루",
     hint:"Break the compound apart: 고추 is the chili pepper, and 가루 means powder. Combine them."},

    {type:"fb",
     s:"만두를 만들려면 {1}가 필요해요.",
     a:["밀가루"],
     opts:["밀가루","고춧가루","마늘","달걀"],
     hint:"The wheat-based powder that forms the dough wrapper for dumplings.",
     sSrc:"To make dumplings, you need {1}."},

    // --- Teach 16-20 ---
    {type:"teach", trg:"쌀", src:"rice (uncooked)", pos:"noun", gender:null,
     note:"Raw rice grains. Once cooked, it becomes 밥. 쌀을 씻다 (to wash rice).",
     example:"A: 쌀이 충분히 있어요?\nB: 한 봉지 남았어요.\nA: 이번 주는 괜찮겠네요.",
     exampleSrc:"A: Do we have enough rice?\nB: One bag is left.\nA: That should be fine for this week.",
     funFact:"Korean distinguishes grain states precisely: 벼 (rice plant), 쌀 (uncooked grain), 밥 (cooked rice/meal). Having enough 쌀 was historically the measure of a family's wealth."},

    {type:"teach", trg:"식용유", src:"cooking oil", pos:"noun", gender:null,
     note:"Sino-Korean: 食用 (for eating) + 油 (oil). General vegetable cooking oil.",
     example:"A: 팬에 식용유를 두르세요.\nB: 얼마나요?\nA: 조금만 넣으면 돼요.",
     exampleSrc:"A: Coat the pan with cooking oil.\nB: How much?\nA: Just a little is fine.",
     funFact:"식용유 is Sino-Korean: 食 (food/eat), 用 (use), 油 (oil). Literally 'food-use oil.' Korean kitchens typically use 식용유 for frying and 참기름 (sesame oil) for flavoring."},

    {type:"teach", trg:"소스", src:"sauce", pos:"noun", gender:null,
     note:"English loanword. Used broadly for Western and fusion sauces.",
     example:"A: 어떤 소스를 넣을까요?\nB: 간장 소스가 좋겠어요.\nA: 알겠어요, 간장 소스로 할게요.",
     exampleSrc:"A: Which sauce should we add?\nB: Soy sauce would be good.\nA: Got it, I'll go with soy sauce.",
     funFact:"Native Korean has 장 (fermented paste/sauce): 간장 (soy sauce), 된장 (soybean paste), 고추장 (chili paste). 소스 is reserved for non-traditional sauces like ketchup, mayo, or fusion blends."},

    {type:"teach", trg:"소주", src:"soju", pos:"noun", gender:null,
     note:"Sino-Korean: 燒 (burn/distill) + 酒 (alcohol). Korea's iconic spirit.",
     example:"A: 소주 한 병 시킬까요?\nB: 좋아요! 안주도 시켜요.\nA: 치킨이 어때요?",
     exampleSrc:"A: Shall we order a bottle of soju?\nB: Sure! Let's order snacks too.\nA: How about chicken?",
     funFact:"소주 (燒酒, burned liquor) is the world's best-selling spirit by volume. 치맥 (chicken + beer) is famous, but 치소 (chicken + soju) is equally beloved. Koreans say 소주 한 잔 해요? as 'let's hang out.'"},

    {type:"teach", trg:"기름", src:"oil, grease", pos:"noun", gender:null,
     note:"General word for oil. 참기름 (sesame oil), 기름진 음식 (greasy food).",
     example:"A: 이 음식이 기름이 많아요.\nB: 기름진 음식은 좀 줄여야 해요.\nA: 맞아요, 건강을 위해서요.",
     exampleSrc:"A: This food has a lot of oil.\nB: We should cut down on greasy food.\nA: Right, for our health.",
     funFact:"기름 is native Korean, while 유 (油) is Sino-Korean for oil. 기름 is broader: 기름을 치다 (to oil/lubricate a machine). 참기름 (sesame oil) is considered the crown jewel of Korean flavoring."},

    // --- Quiz batch 4 ---
    {type:"fb",
     s:"팬에 {1}를 두르세요.",
     a:["식용유"],
     opts:["식용유","소주","소스","기름"],
     hint:"Sino-Korean compound meaning 'food-use oil.' The standard cooking oil you coat a pan with.",
     sSrc:"Coat the pan with {1}."},

    {type:"match", pairs:[
      {trg:"쌀", src:"rice (uncooked)"},
      {trg:"소주", src:"soju"},
      {trg:"기름", src:"oil, grease"},
      {trg:"소스", src:"sauce"}
    ]},

    {type:"mc",
     q:"'달걀'과 같은 뜻의 한자어는?",
     opts:["소주","계란","밀가루","식용유"],
     ans:"계란",
     hint:"A Sino-Korean word using the characters for chicken and egg. Both words mean the same thing.",
     }
  ]
};
export default LESSON_22;
