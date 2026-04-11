// Unit 4 — 뭐 먹을래요?
// Food, Ordering, Wanting & Taste

export default {n:4,lang:"ko",srcLang:"en",track:"v2",title:"뭐 먹을래요?",sub:"Food, Ordering, Wanting & Taste",icon:"🍜",level:"A1.2",color:"#E74C3C",lessons:[
  {id:"kou4l1",title:"Korean Food Words",icon:"🍚",xp:20,board:true,steps:[
        {type:"intro",title:"Korean Food",desc:"밥\n→ rice / meal\n\nFood vocabulary. Every dish is a decodable compound.",goals:["Learn 8 core food words","Decode food compound names","Understand why 밥 is culturally central"]},
        {type:"teach",trg:"밥",src:"rice / meal",pos:"noun",gender:null,phonetic:"bap",note:"밥: rice AND meal AND food in general.\n\n밥 먹었어요? is how Koreans say 'How are you?'",example:"A: 밥 먹었어요? B: 네, 먹었어요!",exampleSrc:"A: Have you eaten? B: Yes, I have!",deepDive:{
          title:"밥 in Korean Culture",
          text:"Literally: 'Have you eaten rice?'\n\nKorean culture: food = care.\nAsking if someone ate = asking if they're OK."
        ,funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."}},
        {type:"teach",trg:"국",src:"soup",pos:"noun",gender:null,phonetic:"guk",note:"Soup (thin, light broth).\nDifferent from stew. Thinner broth.",example:"A: 국이 뜨거워요. B: 네, 조금 기다리세요.",exampleSrc:"A: The soup is hot. B: Yes, wait a moment.",funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."},
        {type:"teach",trg:"찌개",src:"stew",pos:"noun",gender:null,phonetic:"jji-gae",note:"찌개: stew (thick, hearty).\n김치찌개 means kimchi stew. A Korean staple.",example:"A: 뭐 좋아해요? B: 김치찌개를 좋아해요.",exampleSrc:"A: What do you like? B: I like kimchi stew.",funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."},
        {type:"teach",trg:"불고기",src:"bulgogi (grilled marinated meat)",pos:"noun",gender:null,phonetic:"bul-go-gi",note:"COMPOUND: 불 (fire) + 고기 (meat).\nLiterally: 'fire meat.'\n",example:"A: 뭐 먹고 싶어요? B: 불고기 먹고 싶어요.",exampleSrc:"A: What do you want to eat? B: I want to eat bulgogi.",deepDive:{title:"Using 불고기",text:"고기 alone means meat in general:\n소고기 (beef), 돼지고기 (pork), 닭고기 (chicken)",funFact:"Korean builds words by combining meaning blocks. Understanding the parts unlocks entire word families."}},
        {type:"mc",q:"국 means:",opts:["rice","bulgogi","side dish","soup"],ans:"soup",hint:"This word describes a brothy dish. Different from 찌개 (stew)."},
        {type:"teach",trg:"비빔밥",src:"bibimbap (mixed rice bowl)",pos:"noun",gender:null,phonetic:"bi-bim-bap",note:"COMPOUND: 비빔 (mixing) + 밥 (rice).\nLiterally: 'mixed rice.'\n",example:"A: 주문할게요. 비빔밥 하나 주세요. B: 네, 잠시만요.",exampleSrc:"A: I'll order. One bibimbap, please. B: Yes, just a moment.",deepDive:{title:"Using 비빔밥",text:"Rice + vegetables + fried egg + gochujang.\nMix everything vigorously before eating!\n비비다: to mix. 비빔: mixed.",funFact:"Korean builds words by combining meaning blocks. Understanding the parts unlocks entire word families."}},
        {type:"teach",trg:"김치찌개",src:"kimchi stew",pos:"noun",gender:null,phonetic:"gim-chi-jji-gae",note:"COMPOUND: 김치 + 찌개.\n찌개 reappears in: 된장찌개, 순두부찌개.\n",example:"A: 김치찌개가 맛있어요. B: 네, 정말 맛있어요!",exampleSrc:"A: The kimchi stew is delicious. B: Yes, really delicious!",deepDive:{title:"김치찌개 in Korean Culture",text:"김치찌개 is the most common home-cooked Korean dish.\nEvery Korean family has their own recipe.",funFact:"Korean builds words by combining meaning blocks. Understanding the parts unlocks entire word families."}},
        {type:"teach",trg:"냉면",src:"cold noodles",pos:"noun",gender:null,phonetic:"naeng-myeon",note:"COMPOUND: 냉 (cold/冷) + 면 (noodles/麵).\n\n냉: cold. Also in 냉장고 (refrigerator = cold+storage+box).",example:"A: 여름에 뭐 먹어요? B: 냉면 먹어요. 맛있어요!",exampleSrc:"A: What do you eat in summer? B: I eat cold noodles. They're delicious!",deepDive:{title:"Using 냉면",text:"면: noodles. Also in 라면 (ramen).\n\n평양냉면 vs 함흥냉면: two famous regional styles.",funFact:"Korean builds words by combining meaning blocks. Understanding the parts unlocks entire word families."}},
        {type:"mc",q:"김치찌개 means:",opts:["bibimbap","cold noodles","rice cake soup","kimchi stew"],ans:"kimchi stew",hint:"김치 (kimchi) + 찌개 (stew). A compound word."},
        {type:"teach",trg:"라면",src:"ramen / instant noodles",pos:"noun",gender:null,phonetic:"ra-myeon",note:"라면: ramen / instant noodles (Korean-style).\n\nKorea is the world's #1 per-capita ramen consumer.",example:"A: 라면 먹을래요? B: 네, 좋아요!",exampleSrc:"A: Do you want ramen? B: Yes, sounds good!",deepDive:{title:"Using 라면",text:"신라면, 불닭볶음면 are famous globally.\n\n면 again! Same building block as 냉면.",funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."}},
        {type:"teach",trg:"떡볶이",src:"spicy rice cakes",pos:"noun",gender:null,phonetic:"tteok-bo-kki",note:"COMPOUND: 떡 (rice cake) + 볶이 (stir-fried).\n\n볶이: stir-fried (from 볶다: to stir-fry)",example:"A: 떡볶이가 매워요? B: 네, 많이 매워요!",exampleSrc:"A: Is tteokbokki spicy? B: Yes, very spicy!",deepDive:{
          title:"떡볶이 in Korean Culture",
          text:"볶음밥: fried rice = 볶음 + 밥\n\n떡볶이 is Korea's #1 street food.\n떡 reappears in: 떡국 (rice cake soup, New Year's)"
        ,funFact:"Korean builds words by combining meaning blocks. Understanding the parts unlocks entire word families."}},
        {type:"tip",title:"🍚 밥 먹었어요?  -  More Than Food",deepDive:{
          title:"밥 먹었어요?  -  More Than Food",
          text:"It means: 'Are you doing OK? Are you taking care of yourself?'\n\nIf someone asks this:\n→ 네, 먹었어요. / 아직 안 먹었어요.\n   (Yes, I ate. / I haven't eaten yet.)\n\nRefusing a meal someone offers = refusing their care.\nAccepting food from an elder = accepting their love.\n\n밥 is not just food in Korean culture.\n밥 is intimacy, care, and connection."
        },text:"한국어 문화 TIP:\n\n밥 먹었어요? ('Have you eaten?')\n\nThis is how Koreans greet each other.\nIt's NOT literally asking about food."},
        {type:"mc",q:"불고기 means:",opts:["Mixed rice","Cold noodles","Fire meat","Kimchi stew"],ans:"Fire meat",hint:"불: fire, 고기: meat"},
        {type:"mc",q:"비빔밥 = 비빔 + 밥. 비빔 means:",opts:["Cold","Mixed","Spicy","Fried"],ans:"Mixed",hint:"비비다 = to mix; 비빔 = mixed"},
        {type:"mc",q:"냉면 = 냉 + 면. 냉 means:",opts:["Noodle","Rice","Cold","Hot"],ans:"Cold",hint:"냉 = cold. 냉장고 = refrigerator (cold-storage-box)"},
        {type:"mc",q:"밥 먹었어요? literally means 'have you eaten?' but is used as:",opts:["A dinner invitation","A greeting: are you doing OK?","Asking about food preferences","Ordering at a restaurant"],ans:"A greeting: are you doing OK?",hint:"Food = care in Korean culture"},
        {type:"fb",opts:["라면","냉면","밥","불고기"],hint:"Instant noodles",s:"___이 먹고 싶어요.\n(I want to eat ramen)",a:"라면"},
        {type:"fb",opts:["볶이","국","찌개","밥"],hint:"떡 + stir-fried = 떡...",s:"떡___이 매워요.\n(Rice cake ___ is spicy.)",a:"볶이"},
        {type:"match",pairs:[{trg:"밥",src:"rice/meal"},{trg:"불고기",src:"fire meat"},{trg:"비빔밥",src:"mixed rice bowl"},{trg:"김치찌개",src:"kimchi stew"}]},
        {type:"match",pairs:[{trg:"냉면",src:"cold noodles (cold+noodle)"},{trg:"라면",src:"ramen/instant noodles"},{trg:"떡볶이",src:"spicy rice cakes"},{trg:"찌개",src:"stew (shared, at center)"}]},
        {type:"drag_fill",hint:"I like Korean food. Bibimbap is delicious!",s:"저는 {1} 좋아해요. {2} 맛있어요!",blanks:{"1":"한국 음식","2":"비빔밥"},pool:["한국 음식","비빔밥","냉면","라면"]},
        {type:"mc",q:"면 appears in both 냉면 and 라면. 면 means:",opts:["Cold","Hot","Noodles","Soup"],ans:"Noodles",hint:"냉면 = cold noodles, 라면 = ramen"}
  ]},
  {id:"kou4l2",title:"주세요 & -(으)세요",icon:"🙏",xp:20,board:true,steps:[
        {type:"intro",title:"Please Give Me ___ / Please Do ___",desc:"주세요 / -(으)세요\n→ please give / please do\n\nTwo polite request patterns.",goals:["Order with 물을 주세요, 메뉴를 주세요","Use -(으)세요 for polite requests","Master restaurant ordering phrases"]},
        {type:"teach",trg:"주세요",src:"please give (me)",pos:"intj",gender:null,phonetic:"ju-se-yo",note:"주세요: please give.\n주다 (to give) → 주 + 세요 (polite request).\n\n물 주세요 = Water, please.",example:"A: 뭐 드릴까요? B: 물 주세요.",exampleSrc:"A: What can I get you? B: Water, please.",deepDive:{
          title:"Common 주세요 Phrases",
          text:"메뉴 주세요: Menu, please.\n물 주세요: Water, please.\n영수증 주세요: Receipt, please.\n계산서 주세요: Check, please.\n\n주세요 is one of the first words every visitor to Korea learns."
        ,funFact:"Korean has rich exclamations that express subtle emotions. Tone and context determine the exact feeling."}},
        {type:"mc",q:"물 주세요 means:",opts:["Water, please","I have water","Water exists","Where is water?"],ans:"Water, please",hint:"주세요 = please give me"},
        {type:"fb",opts:["를","을","는","이"],hint:"메뉴 ends in vowel → 를. You know this from the object marker lesson.",s:"메뉴___ 주세요.\n(Menu, please.)",a:"를"},
        {type:"fb",opts:["을","를","은","는"],hint:"불고기 ends in vowel ㅣ",s:"불고기___ 주세요.\n(Bulgogi, please.)",a:"를"},
        {type:"fb",opts:["을","를","은","이"],hint:"라면 ends in consonant ㄴ",s:"라면___ 주세요.\n(Ramen, please.)",a:"을"},
        {type:"teach",trg:"-(으)세요",src:"please do / polite request",pos:"intj",gender:null,phonetic:"-eu-se-yo",note:"Polite request or soft command.\n\nConsonant stem → add -으세요.\nVowel stem → add -세요.\n\n가다 → 가세요 (please go)\n읽다 → 읽으세요 (please read)\n앉다 → 앉으세요 (please sit)",example:"A: 어디에 앉아요? B: 여기 앉으세요.",exampleSrc:"A: Where do I sit? B: Please sit here.",deepDive:{
          title:"You Have Been Using This Since the First Lesson",
          text:"안녕하세요 = 안녕 + 하 + 세요: 'please be at peace.'\n가세요 = 가 + 세요: please go.\n주세요 = 주 + 세요: please give.\n\n-(으)세요 does TWO jobs:\n1. Polite request: 앉으세요 = please sit.\n2. Honorific present: 어머니가 가세요 = mother goes (respectful).\n\nFor now: use it for polite requests.\nThe honorific usage gets a full lesson in B1."
        ,funFact:"Korean has rich exclamations that express subtle emotions. Tone and context determine the exact feeling."}},
        {type:"tip",title:"📋 -(으)세요 Pattern",deepDive:{
          title:"Common -(으)세요 Phrases",
          text:"들어오세요: please come in.\n잠시만 기다리세요: please wait.\n조심하세요: please be careful.\n맛있게 드세요: enjoy your meal.\n\nKoreans use -(으)세요 constantly.\nSofter than English 'please', more like a gentle suggestion."
        },text:"Vowel stem → just add -세요:\n가다 → 가세요 (please go)\n보다 → 보세요 (please look)\n하다 → 하세요 (please do)\n\nConsonant stem → add -으세요:\n읽다 → 읽으세요 (please read)\n앉다 → 앉으세요 (please sit)\n닫다 → 닫으세요 (please close)"},
        {type:"mc",q:"앉다 + -(으)세요 = ?",opts:["앉세요","앉으세요","앉아세요","앉하세요"],ans:"앉으세요",hint:"Consonant stem (앉) → add 으세요"},
        {type:"mc",q:"가다 + -(으)세요 = ?",opts:["가으세요","가세요","갈세요","간세요"],ans:"가세요",hint:"Vowel stem (가) → just add 세요"},
        {type:"drag_fill",hint:"I eat rice and drink coffee  -  object markers on food nouns.",s:"저는 {1}을 먹고 {2}를 마셔요.",blanks:{"1":"밥","2":"커피"},pool:["밥","커피","물","라면"]},
        {type:"match",pairs:[{trg:"주세요",src:"please give"},{trg:"앉으세요",src:"please sit"},{trg:"가세요",src:"please go"},{trg:"읽으세요",src:"please read"}]},
        {type:"fb",opts:["드세요","먹세요","주세요","하세요"],hint:"Which honorific verb replaces 먹다 when showing respect?",s:"맛있게 ___.\n(Enjoy your meal.)",a:"드세요"}
  ]},
  {id:"kou4l3",title:"-고 싶어요",icon:"💭",xp:20,board:true,steps:[
        {type:"intro",title:"I Want To ___",desc:"먹고 싶어요\n→ I want to eat\n\nYour first verb chain.",goals:["Say 'I want to [verb]' with -고 싶어요","Build the pattern with 5+ verbs","Notice suffix stacking (train metaphor)"]},
        {type:"teach",trg:"-고 싶어요",src:"want to (do)",pos:"verb",gender:null,phonetic:"-go si-peo-yo",note:"Want to do something. Attach to any verb stem.\n\n먹다 → 먹고 싶어요 (want to eat)",example:"A: 뭐 먹고 싶어요? B: 불고기를 먹고 싶어요.",exampleSrc:"A: What do you want to eat? B: I want to eat bulgogi.",deepDive:{
          title:"Using -고 싶어요",
          text:"가다 → 가고 싶어요 (want to go)\n보다 → 보고 싶어요 (want to see)\n마시다 → 마시고 싶어요 (want to drink)\n하다 → 하고 싶어요 (want to do)\n\nStep 1: drop -다 from dictionary form\nStep 2: add -고 싶어요"
        ,funFact:"Korean verbs always come at the end of the sentence. The ending changes for politeness, tense, and mood."}},
        {type:"teach",trg:"고 싶지 않아요",src:"don't want to",pos:"intj",gender:null,phonetic:"-go sip-ji a-na-yo",note:"Negative: add negation before this pattern.\nTo negate: add negation after the want pattern.\n",example:"A: 매운 거 먹을래요? B: 아니요, 먹고 싶지 않아요.",exampleSrc:"A: Do you want spicy food? B: No, I don't want to.",deepDive:{title:"Using 고 싶지 않아요",text:"먹고 싶지 않아요: don't want to eat\n가고 싶지 않아요: don't want to go\n\nOr more casual: -고 싶지 않아요 → -고 싶어요 + 아니요",funFact:"Korean has rich exclamations that express subtle emotions. Tone and context determine the exact feeling."}},
        {type:"teach",trg:"뭐 먹고 싶어요?",src:"What do you want to eat?",pos:"intj",gender:null,phonetic:"mwo meok-go si-peo-yo?",note:"THE most common mealtime question in Korea:\n\n뭐 먹고 싶어요?\n→ What do you want to eat?",example:"A: 뭐 먹고 싶어요? B: 비빔밥 먹고 싶어요.",exampleSrc:"A: What do you want to eat? B: I want bibimbap.",deepDive:{title:"뭐 Questions",text:"뭐 할 거예요?\n→ What are you going to do?\n\n뭐가 좋아요?\n→ What do you like?\n\n뭐 = what (casual short form of 무엇)",funFact:"Korean has rich exclamations that express subtle emotions. Tone and context determine the exact feeling."}},
        {type:"mc",q:"-고 싶지 않아요 means:",opts:["want to","What do you want to eat?","don't want to","I'm eating"],ans:"don't want to",hint:"-고 싶다 = want to. Adding -지 않다 negates it."},
        {type:"teach",trg:"뭐",src:"what",pos:"noun",gender:null,phonetic:"mwo",note:"뭐 = what (casual spoken form of 무엇).\n\n뭐예요?\n→ What is it?",example:"A: 이거 뭐예요? B: 김치예요.",exampleSrc:"A: What is this? B: It's kimchi.",deepDive:{
          title:"뭐 Everywhere",
          text:"뭐 해요?\n→ What are you doing?\n\n뭐 먹어요?\n→ What are you eating?\n\n뭐가 좋아요?\n→ What do you like?\n\n뭐 is one of the most common words in Korean."
        ,funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."}},
        {type:"tip",title:"🚂 Verb Trains: Your First Glimpse",deepDive:{
          title:"How Korean Stacks Meaning on Verb Stems",
          text:"Korean builds meaning by STACKING pieces on the verb stem:\n\n먹고 싶지 않았어요.\n→ I didn't want to eat.\n(eat + connector + want + negative + past + polite)\n\nBy this system gets its formal name later.\nFor now: notice that each suffix adds one layer of meaning."
        },text:"Look at 먹고 싶어요 closely:\n\n먹 (eat) + 고 (connector) + 싶 (desire) + 어요 (polite)\n\n먹고 싶어요.\n→ I want to eat.\n"},
        {type:"mc",q:"'I want to go' in Korean:",opts:["가고 싶어요","먹고 싶어요","보고 싶어요","하고 싶어요"],ans:"가고 싶어요",hint:"가다 → stem 가 + 고 ___"},
        {type:"mc",q:"먹고 싶어요 has how many pieces?",opts:["One (fixed phrase)","Two (verb + ending)","Three","Four (stem+고+싶+어요)"],ans:"Four (stem+고+싶+어요)",hint:"먹 + 고 + 싶 + 어요 = 4 pieces"},
        {type:"mc",q:"'I don't want to go':",opts:["가고 싶어요","가고 싶지 않아요","가요 싶어요","안 가고 싶어요"],ans:"가고 싶지 않아요",hint:"Add 지 ___ to make the negative"},
        {type:"mc",q:"A: 뭐 먹고 싶어요? What is being asked?",opts:["How much food do you want?","What time do you want to eat?","What do you want to eat?","Have you eaten?"],ans:"What do you want to eat?",hint:"뭐 = what, 먹고 싶어요 = ___ to ___"},
        {type:"fb",opts:["가","먹","보","하"],hint:"가다: to go → stem is 가",s:"한국에 ___고 싶어요.\n(I want to go to Korea)",a:"가"},
        {type:"fb",opts:["싶어요","있어요","없어요","가요"],hint:"먹고 + ___= want to eat",s:"비빔밥을 먹고 ___.\n(I want to eat bibimbap)",a:"싶어요"},
        {type:"fb",opts:["않아요","아니에요","없어요","몰라요"],hint:"Negative: 고 싶지 + ___",s:"저는 매운 음식을 먹고 싶지 ___.\n(Negative: 고 싶지 + ___)",a:"않아요"},
        {type:"match",pairs:[{trg:"먹고 싶어요",src:"want to eat"},{trg:"가고 싶어요",src:"want to go"},{trg:"보고 싶어요",src:"want to see"},{trg:"마시고 싶어요",src:"want to drink"}]},
        {type:"drag_fill",hint:"What do you want to eat? I want to eat bulgogi.",s:"뭐 {1} 싶어요? 불고기를 먹고 {2}.",blanks:{"1":"먹고","2":"싶어요"},pool:["먹고","마시고","가고","싶어요","있어요"]},
        {type:"mc",q:"하고 싶어요 comes from which verb?",opts:["가다","있다","하다","보다"],ans:"하다",hint:"... → stem 하 + 고 싶어요"},
        {type:"mc",q:"'I want to watch a Korean drama':",opts:["드라마를 보고 싶어요","드라마를 가고 싶어요","드라마가 보고 싶어요","드라마를 보세요"],ans:"드라마를 보고 싶어요",hint:"보다 (to see) → 보고 ___, and ___ (object)"},
        {type:"teach",trg:"이야기하다",src:"to talk / to chat / to tell a story",pos:"verb",gender:null,phonetic:"i-ya-gi-ha-da",note:"이야기하다: to talk, to chat, to tell a story.\n이야기 (story/conversation) + 하다 (do).\n",example:"A: 뭐 해요? B: 친구하고 이야기해요.",exampleSrc:"A: What are you doing? B: I'm talking with a friend.",deepDive:{
          title:"Using 이야기하다",
          text:"친구하고 이야기해요: chatting with a friend.\n재미있는 이야기: fun/interesting story.\n\n말하다 vs 이야기하다:\n말하다: to speak/say (general)\n이야기하다: to talk/chat/tell stories (conversational)"
        ,funFact:"A 하다 verb — noun + 하다 (to do). This pattern creates hundreds of verbs from Sino-Korean nouns."}},
        {type:"mc",q:"친구하고 이야기해요 means:",opts:["I'm talking with a friend","I'm eating with a friend","I'm going with a friend","I'm studying with a friend"],ans:"I'm talking with a friend",hint:"이야기하다 = to talk/chat. 하고 = with."}
  ]},
  {id:"kou4l4",title:"맛 (Taste Words)",icon:"😋",xp:20,board:true,steps:[
        {type:"intro",title:"Delicious or Not?",desc:"맛있다\n→ to be delicious\n\nTaste words. Korean adjectives ARE verbs.",goals:["Use 맛있다 and 맛없다","Learn 6 taste descriptors","See Korean adjectives conjugated as verbs"]},
        {type:"teach",trg:"맛있다",src:"to be delicious",pos:"verb",gender:null,phonetic:"ma-sit-da",note:"COMPOUND: 맛 (taste) + 있다 (exist).\nLiterally: 'taste exists' = delicious.\n",example:"A: 이거 맛있어요? B: 네, 정말 맛있어요!",exampleSrc:"A: Is this delicious? B: Yes, really delicious!",deepDive:{title:"Using 맛있다",text:"맛있어요: polite present form.\n\n정말 맛있어요!: Really delicious!\n너무 맛있어요!: So delicious! (너무 means so or too much.",funFact:"Korean builds words by combining meaning blocks. Understanding the parts unlocks entire word families."}},
        {type:"teach",trg:"맛없다",src:"not tasty / bad-tasting",pos:"intj",gender:null,phonetic:"ma-deop-da",note:"COMPOUND: 맛 (taste) + 없다 (not exist).\nLiterally: 'taste doesn't exist' = tasteless/bad.\n",example:"A: 이 음식 어때요? B: 좀 맛없어요.",exampleSrc:"A: How is this food? B: It's not very tasty.",deepDive:{
          title:"Important Notes",
          text:"맛있다 ↔ 맛없다. Same LEGO logic.\n\nWarning: don't say this about food someone cooked!\n맛이 좀 특이해요 (the taste is a bit unique) is more polite."
        ,funFact:"Korean builds words by combining meaning blocks. Understanding the parts unlocks entire word families."}},
        {type:"teach",trg:"매워요",src:"it's spicy",pos:"noun",gender:null,phonetic:"mae-wo-yo",note:"맵다 → 매워요 (ㅂ-irregular).\nFull ㅂ-irregular pattern in a later lesson.",example:"A: 김치가 매워요? B: 네, 많이 매워요.",exampleSrc:"A: Is kimchi spicy? B: Yes, very spicy.",deepDive:{title:"Spice Levels",text:"안 매운 거 있어요?: Is there something not spicy?\n조금 매워요: It's a little spicy.\n많이 매워요: It's very spicy.",funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."}},
        {type:"mc",q:"맛없다 means:",opts:["delicious","it's spicy","bland","not tasty"],ans:"not tasty",hint:"맛 (taste) + 없다 (not exist). Taste does not exist."},
        {type:"teach",trg:"달다 → 달아요",src:"to be sweet",pos:"verb",gender:null,phonetic:"dal-da",note:"달다: to be sweet.\n달다 → 달아요 (regular).",example:"A: 이 케이크 어때요? B: 달아요. 맛있어요!",exampleSrc:"A: How is this cake? B: It's sweet. Delicious!",funFact:"Korean verbs always come at the end of the sentence. The ending changes for politeness, tense, and mood."},
        {type:"teach",trg:"쓰다 → 써요",src:"to be bitter",pos:"verb",gender:null,phonetic:"sseu-da",note:"쓰다: to be bitter.\n쓰다 also means to write / to use (different word).",example:"A: 이 약 어때요? B: 너무 써요!",exampleSrc:"A: How is this medicine? B: It's so bitter!",funFact:"Korean verbs always come at the end of the sentence. The ending changes for politeness, tense, and mood."},
        {type:"teach",trg:"짜다 → 짜요",src:"to be salty",pos:"verb",gender:null,phonetic:"jja-da",note:"짜다: to be salty.\n짜다 → 짜요 (regular).",example:"A: 국이 어때요? B: 좀 짜요.",exampleSrc:"A: How is the soup? B: It's a bit salty.",funFact:"Korean verbs always come at the end of the sentence. The ending changes for politeness, tense, and mood."},
        {type:"teach",trg:"음식",src:"food (general)",pos:"noun",gender:null,phonetic:"eum-sik",note:"SINO-KOREAN: 음 (eat/飮) + 식 (food/食).\n\n음식: food in general (any food).",example:"A: 한국 음식 좋아해요? B: 네, 맛있어요!",exampleSrc:"A: Do you like Korean food? B: Yes, it's delicious!",deepDive:{
          title:"Using 음식",
          text:"음식점: restaurant (food-eating-place).\n식사: meal (eat-food, more formal).\n\n음 reappears in: 음료 (beverage = drink+flow), 음악 (music)"
        ,funFact:"Korean builds words by combining meaning blocks. Understanding the parts unlocks entire word families."}},
        {type:"tip",title:"🌶️ Korean Food: The Five Tastes",deepDive:{
          title:"Salty, Sour, and Useful Restaurant Phrases",
          text:"짜다 → 짜요 = salty\n시다 → 셔요 = sour\n\n한국 음식은 매운 게 많아요 = Korean food is often spicy.\n\n매운맛 (spicy/매운): gochujang, kimchi\n\nHan-sik (한식/Korean food) uniquely combines all five.\n\nUseful restaurant vocab:\n맛이 어때요?\n→ How does it taste?\n\n맛있어요!\n→ Delicious!\n\n맛없어요.\n→ Not tasty.\n\n좀 달아요.\n→ It's a bit sweet.\n\n많이 매워요.\n→ It's very spicy."
        },text:"Five essential taste words:\n\n맵다 → 매워요 = spicy (ㅂ-irregular)\n달다 → 달아요 = sweet\n쓰다 → 써요 = bitter"},
        {type:"mc",q:"맛있다 decomposes into:",opts:["맛 (taste) + 있다 (exist)","맛 (food) + 있다 (have)","마 (eat) + 있다 (exist)","All one piece"],ans:"맛 (taste) + 있다 (exist)",hint:"___ + ___s = delicious"},
        {type:"tip",title:"🤫 Polite Alternatives to 맛없어요",deepDive:{
          title:"The Art of Indirect Korean",
          text:"Korean culture values indirectness.\nDirect criticism of food = loss of face for the cook.\n\nOther softening strategies:\n입에 안 맞아요.\n→ It doesn't suit my palate. (no blame on the food)\n\n좀 달아요.\n→ It's a bit sweet. (describing, not judging)\n\n맛이 독특해요.\n→ The flavor is distinctive.\n\nNever say: 맛없어요 or 진짜 맛없어요 about someone's cooking."
        },text:"Saying 맛없어요 to someone who cooked for you is RUDE.\n\nKoreans soften with 좀 (a bit) + a gentle word:\n\n맛이 좀 특이해요.\n→ The flavor is a bit unique.\n\n좀 = a bit (softener).\n특이하다 = to be unique/unusual."},
        {type:"mc",q:"'I don't want to say the food is bad'. Polite alternative to 맛없어요:",opts:["맛이 좀 특이해요","맛없어요","맛이 없어요","좀 먹어요"],ans:"맛이 좀 특이해요",hint:"좀 (softener) + 특이하다 (unique) = polite way out."},
        {type:"mc",q:"'This coffee is bitter':",opts:["이 커피가 달아요","이 커피가 매워요","이 커피가 써요","이 커피가 짜요"],ans:"이 커피가 써요",hint:"쓰다 → 써요: bitter"},
        {type:"mc",q:"음식 = 음 + 식. 음 means:",opts:["Food","Eat/drink","Taste","Korean"],ans:"Eat/drink",hint:"음 = drink/eat (음료 = beverage, 음악 = music)"},
        {type:"fb",opts:["달아요","써요","짜요","매워요"],hint:"Check the stem vowel: bright or dark?",s:"이 케이크가 ___.\n(This cake is sweet)",a:"달아요"},
        {type:"fb",opts:["맛있어요","맛없어요","달아요","매워요"],hint:"맛 (taste) : what ending attaches?",s:"이 음식은 너무 ___!\n(This food is so delicious!)",a:"맛있어요"},
        {type:"fb",opts:["매워요","달아요","짜요","써요"],hint:"맵다 is ㅂ-irregular. ㅂ becomes 우 before vowel endings. What form results?",s:"김치가 많이 ___.\n(Kimchi is very spicy)",a:"매워요"},
        {type:"match",pairs:[{trg:"맛있어요",src:"delicious"},{trg:"맛없어요",src:"not tasty"},{trg:"매워요",src:"spicy"},{trg:"달아요",src:"sweet"}]},
        {type:"teach",trg:"고소하다 → 고소해요",src:"to be nutty / savory",pos:"verb",gender:null,phonetic:"go-so-hae-yo",note:"고소하다: 하다 verb. Always → 고소해요.",example:"A: 이 참기름 어때요? B: 고소해요!",exampleSrc:"A: How is this sesame oil? B: It's savory!",funFact:"A 하다 verb — noun + 하다 (to do). This pattern creates hundreds of verbs from Sino-Korean nouns."},
        {type:"teach",trg:"새콤하다 → 새콤해요",src:"to be tangy / sour-sweet",pos:"verb",gender:null,phonetic:"sae-kom-hae-yo",note:"새콤하다: 하다 verb. Always → 새콤해요.",example:"A: 이 소스 맛있어요? B: 네, 새콤해요!",exampleSrc:"A: Is this sauce good? B: Yes, it's tangy!",funFact:"A 하다 verb — noun + 하다 (to do). This pattern creates hundreds of verbs from Sino-Korean nouns."},
        {type:"match",pairs:[{trg:"써요",src:"bitter"},{trg:"짜요",src:"salty"},{trg:"고소해요",src:"nutty/savory"},{trg:"새콤해요",src:"tangy/sour"}]},
        {type:"teach",trg:"그리고",src:"and / and then",pos:"noun",gender:null,phonetic:"geu-ri-go",note:"Connects two sentences.\n그리고 = and / and then / also.",example:"A: 아침에 뭐 해요? B: 커피 마셔요. 그리고 밥 먹어요.",exampleSrc:"A: What do you do in the morning? B: I drink coffee. And I eat rice.",funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."},
        {type:"drag_fill",hint:"Kimchi is spicy. And it's salty.",s:"이 김치는 {1}. 그리고 {2}.",blanks:{"1":"매워요","2":"짜요"},pool:["매워요","달아요","짜요","써요"]},
        {type:"mc",q:"음식점 = 음식 + 점. 점 means:",opts:["Taste","Food","Store/place","Eat"],ans:"Store/place",hint:"음식점 = food-place = restaurant. 점 = store/place."}
  ]},
  {id:"kou4l5",title:"Restaurant Dialogue",icon:"🍽️",xp:20,board:true,steps:[
        {type:"intro",title:"At a Korean Restaurant",desc:"Real restaurant interaction from arrival to paying.",goals:["Order food confidently","Use 여기요, 좀, 계산해 주세요","Navigate a full dining interaction"]},
        {type:"teach",trg:"여기요! / 저기요!",src:"Excuse me! (getting staff attention)",pos:"intj",gender:null,phonetic:"yeo-gi-yo / jeo-gi-yo",note:"저기요!\n→ Excuse me! (literally: hey, over there!)  -  standard call to staff.\n",example:"A: 저기요! 메뉴 주세요. B: 네, 잠시만요.",exampleSrc:"A: Excuse me! Menu, please. B: Yes, one moment.",deepDive:{title:"Using 여기요! / 저기요!",text:"여기요!\n→ Hey, over here! (also used, slightly less common)\n\n저기요 is the universal safe default.",funFact:"Korean has rich exclamations that express subtle emotions. Tone and context determine the exact feeling."}},
        {type:"teach",trg:"주문하다",src:"to order",pos:"verb",gender:null,phonetic:"ju-mun-ha-da",note:"주문: order (noun).\n주문하다: to order (verb).\n",example:"A: 주문할게요. 비빔밥 주세요. B: 네, 알겠습니다.",exampleSrc:"A: I'll order. Bibimbap, please. B: Yes, understood.",deepDive:{
          title:"Using 주문하다",
          text:"주문 받으세요?: 'Ready to take our order?'\n주문할게요: 'I'll order.' (proactive)\n\n주문이요: 'Order!' (calling for staff to take order)"
        ,funFact:"A 하다 verb — noun + 하다 (to do). This pattern creates hundreds of verbs from Sino-Korean nouns."}},
        {type:"teach",trg:"좀",src:"a bit / please (softener)",pos:"noun",gender:null,phonetic:"jom",note:"좀 = a bit. Softens any request.\n\n물 좀 주세요.\n→ Water, please. (softened)",example:"A: 커피나 차 드릴까요? B: 물 좀 주세요.",exampleSrc:"A: Coffee or tea? B: Could I have some water, please?",deepDive:{
          title:"좀 Makes You Sound Korean",
          text:"Without 좀: 주세요 = give me please (direct).\nWith 좀: 좀 주세요 = could I have... (softer).\n\n좀 makes you sound more natural. Use it constantly."
        ,funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."}},
        {type:"mc",q:"주문하다 means:",opts:["Excuse me!","a bit","to order","to pay"],ans:"to order",hint:"주문 (order) + 하다 (do). A 하다 compound for requesting food."},
        {type:"teach",trg:"계산",src:"bill / payment",pos:"noun",gender:null,phonetic:"gye-san",note:"계산: calculation/bill.\n계산해 주세요: 'Please do the calculation' = Check please.\n계산해 주실 수 있어요?: 'Could you take care of the bill?'",example:"A: 계산해 주세요. B: 카드로 할게요.",exampleSrc:"A: Check, please. B: I'll pay by card.",deepDive:{title:"계산 in Korean Culture",text:"계산서 주세요: 'Please give me the bill.'\n\nIn Korea: often pay at the counter, not tableside.",funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."}},
        {type:"teach",trg:"포장이요",src:"to go / takeaway",pos:"verb",gender:null,phonetic:"po-jang-i-yo",note:"포장: packaging/wrapping.\n포장이요 or 포장해 주세요: 'To go, please.'\n",example:"A: 여기서 드실 거예요? B: 아니요, 포장이요.",exampleSrc:"A: Will you eat here? B: No, to go please.",deepDive:{
          title:"포장이요 in Korean Culture",
          text:"먹고 갈게요: 'I'll eat here.'\n\nDelivery (배달) is HUGE in Korea  -  many Koreans\nnever enter the restaurant at all."
        ,funFact:"Korean verbs always come at the end of the sentence. The ending changes for politeness, tense, and mood."}},
        {type:"mc",q:"To get a waiter's attention:",opts:["감사합니다!","여기요! / 저기요!","주문이요","계산이요"],ans:"여기요! / 저기요!",hint:"___/___ = 'Excuse me!' to get attention"},
        {type:"mc",q:"주문할게요 means:",opts:["I'm leaving","The bill, please","I'll order now","One more, please"],ans:"I'll order now",hint:"주문하다 = to order; 할게요 = I will"},
        {type:"mc",q:"좀 in '물 좀 주세요' adds:",opts:["Urgency / pressure","Politeness / softness","Negation / denial","A question / inquiry"],ans:"Politeness / softness",hint:"좀 softens and polishes any request"},
        {type:"mc",q:"포장이요 means:",opts:["For here","To go","One more","All done"],ans:"To go",hint:"포장 = packaging/wrapping = takeaway/to-go"},
        {type:"fb",opts:["저기","여기","이기","거기"],hint:"...요: standard way to call a waiter",s:"___요! 주문할게요.\n(Calling the waiter, ready to order)",a:"저기"},
        {type:"fb",opts:["좀","매우","정말","너무"],hint:"좀 softens: 'bibimbap, please' (politely)",s:"비빔밥 ___ 주세요.\n(Soften the request: bibimbap please)",a:"좀"},
        {type:"fb",opts:["계산","주문","포장","메뉴"],hint:"... = bill/payment",s:"다 먹었어요. ___ 해 주세요.\n(We're done. Check please.)",a:"계산"},
        {type:"match",pairs:[{trg:"저기요!",src:"Excuse me! (to staff)"},{trg:"주문하다",src:"to order"},{trg:"좀",src:"softener (please/a bit)"},{trg:"계산",src:"bill/payment"}]},
        {type:"drag_fill",hint:"One bibimbap please. And some water too.",s:"저기요! 비빔밥 {1} 주세요. 그리고 물도 {2} 주세요.",blanks:{"1":"하나","2":"좀"},pool:["하나","두","좀","정말","계산"]},
        {type:"mc",q:"In Korea, how do you usually pay?",opts:["Always at the table","At the counter (usually)","Only by card","Only by cash"],ans:"At the counter (usually)",hint:"Korean restaurants typically pay at the ___, not tableside"},
        {type:"mc",q:"'Takeaway please' in Korean:",opts:["먹고 갈게요","포장이요","주문이요","계산이요"],ans:"포장이요",hint:"포장 = packaging/wrapping = to go"},
        {type:"mc",q:"계산해 주세요 literally means:",opts:["Please calculate this","I want the food here","Order for me please","One more dish please"],ans:"Please calculate this",hint:"계산 = calculation; 해 주세요 = please do for me"}
  ]},
  {id:"kou4l6",title:"반찬 Culture + 좀 더",icon:"🥢",xp:20,board:true,steps:[
        {type:"intro",title:"Side Dishes, Sharing, and the 빨리빨리 Spirit",desc:"Side dishes are free. Sharing is mandatory. Speed is expected.",goals:["Ask for more 반찬","Understand shared dish culture","Know Korean dining etiquette"]},
        {type:"teach",trg:"반찬",src:"side dishes",pos:"noun",gender:null,phonetic:"ban-chan",note:"반찬: side dishes (always plural).\n\nAlways FREE. Always refillable.",example:"A: 반찬이 맛있어요! B: 네, 더 드세요.",exampleSrc:"A: The side dishes are delicious! B: Yes, have more.",deepDive:{title:"Using 반찬",text:"Ask for more anytime:\n반찬 좀 더 주세요: More side dishes, please.\n\n더: more. 좀 더: a little more (politer).",funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."}},
        {type:"teach",trg:"좀 더",src:"a little more",pos:"intj",gender:null,phonetic:"jom deo",note:"더 = more.\n\n물 좀 더 주세요.\n→ A little more water, please.",example:"A: 물 좀 더 주세요. B: 네, 여기요.",exampleSrc:"A: A little more water, please. B: Yes, here you go.",deepDive:{title:"더 in Requests",text:"반찬 좀 더 주세요.\n→ More side dishes, please.\n\n조금만 더.\n→ Just a tiny bit more.\n\n더 attaches to any request.",funFact:"Korean has rich exclamations that express subtle emotions. Tone and context determine the exact feeling."}},
        {type:"teach",trg:"같이",src:"together",pos:"noun",gender:null,phonetic:"ga-chi",note:"같이: together.\n같이 먹어요!: 'Let's eat together!'\n같이 갈까요?: 'Shall we go together?'\n",example:"A: 같이 먹을까요? B: 네, 좋아요!",exampleSrc:"A: Shall we eat together? B: Yes, sounds good!",deepDive:{
          title:"같이 in Korean Culture",
          text:"Korean dining is fundamentally communal.\n개인 접시 ✗: no individual plates (usually)\n공유 접시 ✓: shared dishes at the center\n\n잘 먹겠습니다: said before eating\n잘 먹었습니다: said after eating (formal thanks for meal)"
        ,funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."}},
        {type:"mc",q:"좀 더 means:",opts:["a little more","side dishes","together","that's enough"],ans:"a little more",hint:"좀 = a little, 더 = more. Two small words combined."},
        {type:"teach",trg:"빨리빨리",src:"hurry hurry / quickly quickly",pos:"noun",gender:null,phonetic:"ppal-li ppal-li",note:"빨리빨리: 'hurry hurry!' / 'quickly quickly!'\n\nThis is a CORE Korean cultural concept.",example:"A: 한국은 빨라요? B: 네, 빨리빨리 문화예요.",exampleSrc:"A: Is Korea fast? B: Yes, it's the hurry-hurry culture.",deepDive:{
          title:"빨리빨리 in Korean Culture",
          text:"빨리빨리 culture = Korean speed culture:\n• Food arrives in 3-5 minutes (not 20)\n• Eating is fast (30-40 min max)\n• Turnover is expected\n• No lingering after the meal\n\n빨리: quickly / fast. Doubled for emphasis."
        ,funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."}},
        {type:"tip",title:"🥢 Korean Dining: The Rules",deepDive:{
          title:"Refills, Pre-Meal Phrases, and Who Pays",
          text:"Don't order 'my plate' and 'your plate.'\n\n반찬 무한 리필: Side dishes are FREE and refillable.\nAsking for more = completely normal.\n\n잘 먹겠습니다: Said BEFORE eating.\n잘 먹었습니다: Said AFTER eating.\n\n계산: Oldest/host usually pays.\nSplitting bills (더치페이) is becoming common among young people\nbut still unusual at formal meals.\n\n빨리빨리: Don't be surprised by how fast everything moves."
        },text:"Dining etiquette matters. What you need to know:\n\n어른 먼저: Elders eat first.\nDon't pick up chopsticks before the oldest person.\n\n공유: Everything is shared from the center."},
        {type:"mc",q:"반찬 at Korean restaurants are:",opts:["Expensive additions","Free and refillable","One serving only","Only for premium customers"],ans:"Free and refillable",hint:"반찬 무한 리필  -  unlimited ___ side dishes"},
        {type:"mc",q:"Who starts eating first?",opts:["The youngest","The hungriest","The oldest person","Whoever is ready"],ans:"The oldest person",hint:"어른 먼저: elders eat first  -  Korean age hierarchy"},
        {type:"mc",q:"'More side dishes, please':",opts:["반찬 조금 주세요","반찬 좀 더 주세요","반찬 없어요","반찬 맛없어요"],ans:"반찬 좀 더 주세요",hint:"좀 더 = a little more"},
        {type:"mc",q:"빨리빨리 refers to:",opts:["A dish name","Korean speed culture","A greeting","A type of restaurant"],ans:"Korean speed culture",hint:"빨리빨리 = hurry hurry  -  Korea's pace of doing things fast"},
        {type:"fb",opts:["먹겠","먹었","먹어","먹고"],hint:"Before eating: 잘 ...습니다",s:"잘 ___습니다.\n(Said before eating  -  formal)",a:"먹겠"},
        {type:"fb",opts:["좀","많이","조금도","너무"],hint:"좀 더 = a little more (polite softener)",s:"물 ___ 더 주세요.\n(A little more water please)",a:"좀"},
        {type:"match",pairs:[{trg:"반찬",src:"side dishes (free, refillable)"},{trg:"좀 더",src:"a little more"},{trg:"같이",src:"together"},{trg:"빨리빨리",src:"hurry hurry / speed culture"}]},
        {type:"drag_fill",hint:"Before eating, then ask for more side dishes",s:"잘 {1}습니다! {2} 좀 더 주세요.",blanks:{"1":"먹겠","2":"반찬"},pool:["먹겠","먹었","반찬","물","맛있어"]},
        {type:"mc",q:"잘 먹었습니다 is said:",opts:["Before starting to eat","While eating","After finishing eating","When ordering"],ans:"After finishing eating",hint:"먹었 is PAST tense  -  ___ the meal"},
        {type:"mc",q:"더치페이 means:",opts:["Korean specialty dish","Splitting the bill","A dessert","A type of chopstick"],ans:"Splitting the bill",hint:"더치페이 = Dutch pay = splitting bill (Konglish!)"}
  ]},
  {id:"kou4l7",title:"Market Shopping",icon:"🍎",xp:20,board:true,steps:[
        {type:"intro",title:"At the Market",desc:"과일 / 야채\n→ fruit / vegetables\n\nGrocery vocabulary in action.",goals:["Learn fruit and vegetable vocabulary","Use counters with food","Practice shopping dialogue"]},
        {type:"teach",trg:"과일",src:"fruit",pos:"part",gender:null,phonetic:"gwa-il",note:"과일: fruit (general term).\n\n수박 means watermelon. 수 (water) + 박 (gourd).",example:"A: 과일 좋아해요? B: 네, 많이 좋아해요!",exampleSrc:"A: Do you like fruit? B: Yes, I like it a lot!",deepDive:{title:"과일",text:"딸기: strawberry (note: double ㄸ = tense)\n포도: grape\n복숭아: peach\n망고: mango (Konglish)",funFact:"Korean particles attach to nouns to show their role in the sentence. The particle, not word order, determines meaning."}},
        {type:"teach",trg:"사과",src:"apple",pos:"intj",gender:null,phonetic:"sa-gwa",note:"사과: apple.\nCOMPOUND: 사 (four/fruit) + 과 (fruit).\nAlso means apology! Same spelling, completely different meaning..",example:"A: 사과 두 개 주세요. B: 네, 여기 있어요.",exampleSrc:"A: Two apples please. B: Yes, here you go.",funFact:"Korean builds words by combining meaning blocks. Understanding the parts unlocks entire word families."},
        {type:"teach",trg:"배",src:"pear",pos:"noun",gender:null,phonetic:"bae",note:"배: pear.\nAlso means stomach and boat. Three meanings, one word!",example:"A: 이 배 맛있어요? B: 네, 정말 달아요!",exampleSrc:"A: Is this pear delicious? B: Yes, really sweet!",funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."},
        {type:"teach",trg:"딸기",src:"strawberry",pos:"noun",gender:null,phonetic:"ttal-gi",note:"딸기: strawberry.\nVery popular in Korea. Season = winter/spring.",example:"A: 뭐 좋아해요? B: 딸기를 좋아해요.",exampleSrc:"A: What do you like? B: I like strawberries.",funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."},
        {type:"teach",trg:"채소",src:"vegetables",pos:"noun",gender:null,phonetic:"chae-so",note:"채소: vegetables (general term).\n\n양파: onion. 양 means foreign, 파 means green onion.",example:"A: 채소 좋아해요? B: 네, 많이 먹어요.",exampleSrc:"A: Do you like vegetables? B: Yes, I eat a lot.",deepDive:{
          title:"채소 in Korean Culture",
          text:"마늘: garlic (native Korean)\n당근: carrot (native Korean)\n오이: cucumber (native Korean)\n\nKorean cuisine uses garlic and onion in almost everything."
        ,funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."}},
        {type:"mc",q:"사과 means:",opts:["fruit","vegetables","apple","banana"],ans:"apple",hint:"This red/green fruit is one of Korea's most popular snacks."},
        {type:"teach",trg:"신선해요",src:"it's fresh",pos:"noun",gender:null,phonetic:"sin-seon-hae-yo",note:"신선하다: to be fresh.\n신선해요: it's fresh.\n",example:"A: 이 딸기 신선해요? B: 네, 오늘 왔어요.",exampleSrc:"A: Are these strawberries fresh? B: Yes, they came today.",deepDive:{
          title:"Using 신선해요",
          text:"신선: SINO-KOREAN: 신(new/新) + 선(fresh/鮮).\n신선한 채소: fresh vegetables\n신선하지 않아요: not fresh\n\n오늘 들어왔어요?: 'Did this arrive today?' (freshness check)"
        ,funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."}},
        {type:"teach",trg:"얼마예요?",src:"How much? (review)",pos:"noun",gender:null,phonetic:"eol-ma-ye-yo",note:"Review:\n얼마예요?: How much is it?\n이거 얼마예요?: How much is this?",example:"A: 딸기 한 팩에 얼마예요? B: 오천 원이에요.",exampleSrc:"A: How much for one pack of strawberries? B: Five thousand won.",deepDive:{title:"Using 얼마예요?",text:"딸기 한 팩에: for one pack of strawberries\n\n한 팩: one pack\n한 봉지: one bag\n한 kg: one kilogram",funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."}},
        {type:"mc",q:"'3 apples' with counter:",opts:["사과 삼 개","사과 세 개","세 사과 개","사과 셋"],ans:"사과 세 개",hint:"Noun + native number (contracted) + counter 개"},
        {type:"mc",q:"사과 has two meanings:",opts:["Fruit and flower","Apple and apology","Grape and melon","Orange and sorry"],ans:"Apple and apology",hint:"사과: ___ (fruit) AND ___ (I'm sorry)"},
        {type:"mc",q:"이거 얼마예요? means:",opts:["What is this?","How much is this?","Where is this from?","Is this fresh?"],ans:"How much is this?",hint:"얼마 = how much"},
        {type:"mc",q:"양파 = 양 + 파. 양 (洋) means:",opts:["Vegetable / plant","Korean / domestic","Foreign / Western","Green / natural"],ans:"Foreign / Western",hint:"양파 = Western green onion = onion (introduced from outside Korea)"},
        {type:"fb",opts:["팩","개","명","마리"],hint:"팩 = pack  -  container counter for packaged items",s:"딸기 두 ___ 주세요. (2 packs of strawberries)",a:"팩"},
        {type:"fb",opts:["신선해요","맛없어요","비싸요","없어요"],hint:"신선하다 is a 하다 adjective. 하다 → always 해요.",s:"이 사과가 ___.\n(These apples are fresh)",a:"신선해요"},
        {type:"fb",opts:["많이","조금","좀","빨리"],hint:"... = a lot, in large quantity",s:"채소를 ___ 먹어요.\n(I eat a lot of vegetables)",a:"많이"},
        {type:"match",pairs:[{trg:"사과",src:"apple (AND apology)"},{trg:"딸기",src:"strawberry"},{trg:"양파",src:"onion (Western green onion)"},{trg:"당근",src:"carrot"}]},
        {type:"drag_fill",hint:"Two apples and one pack of strawberries",s:"{1} 두 개하고 딸기 한 {2} 주세요.",blanks:{"1":"사과","2":"팩"},pool:["사과","딸기","개","팩","봉지"]},
        {type:"mc",q:"신선해요 = 신선하다 conjugated. 신선하다 comes from:",opts:["Native Korean","Konglish","Sino-Korean (신+선)","Japanese loanword"],ans:"Sino-Korean (신+선)",hint:"신 (new) + 선 (fresh) = fresh"},
        {type:"teach",trg:"사다 → 사요",src:"to buy → buys",pos:"verb",gender:null,phonetic:"sa-da → sa-yo",note:"사다: to buy.\n\n사다 → 사요\n→ Bright ㅏ merges with -아요.",example:"A: 어디에서 과일 사요? B: 시장에서 사요.",exampleSrc:"A: Where do you buy fruit? B: I buy it at the market.",deepDive:{
          title:"사다 in Daily Life",
          text:"뭐 사요? = What are you buying?\n어디에서 사요? = Where do you buy it?\n\nPast: 사다 → 샀어요 (ㅏ+ㅏ merge, same as 가다→갔어요).\n\n사다 also means 'to buy FOR someone':\n친구한테 커피를 사 줘요 = I buy coffee for a friend."
        ,funFact:"Korean verbs always come at the end of the sentence. The ending changes for politeness, tense, and mood."}},
        {type:"teach",trg:"비싸다 → 비싸요",src:"to be expensive → it's expensive",pos:"verb",gender:null,phonetic:"bi-ssa-da → bi-ssa-yo",note:"비싸다: to be expensive.\n\n비싸다 → 비싸요\n→ Bright ㅏ merges with -아요.",example:"A: 이거 얼마예요? B: 만 원이에요. A: 너무 비싸요!",exampleSrc:"A: How much is this? B: 10,000 won. A: Too expensive!",deepDive:{
          title:"Haggling at the Market",
          text:"비싸요! = It's expensive!\n좀 깎아 주세요 = Please give a discount.\n\n깎다 = to shave off / discount.\n좀 = a bit (softener).\n\nTraditional markets: haggling OK.\nConvenience stores: fixed prices."
        ,funFact:"Korean verbs always come at the end of the sentence. The ending changes for politeness, tense, and mood."}},
        {type:"teach",trg:"싸다 → 싸요",src:"to be cheap → it's cheap",pos:"verb",gender:null,phonetic:"ssa-da → ssa-yo",note:"싸다: to be cheap / inexpensive.\nOpposite of the expensive word.\n\n싸다 → 싸요\n→ Bright ㅏ merges with -아요.",example:"A: 이 가게 어때요? B: 좋아요, 싸요!",exampleSrc:"A: How is this store? B: It's good, it's cheap!",deepDive:{
          title:"Price Vocabulary",
          text:"비싸다 ↔ 싸다: expensive ↔ cheap.\n\n너무 비싸요: too expensive\n적당해요: reasonably priced\n\n가격: price. 가격이 얼마예요? = What's the price?"
        ,funFact:"Korean verbs always come at the end of the sentence. The ending changes for politeness, tense, and mood."}},
        {type:"mc",q:"비싸다 ↔ ___:",opts:["크다","작다","좋다","싸다"],ans:"싸다",hint:"Expensive ↔ cheap"},
        {type:"fb",opts:["비싸요","싸요","맛있어요","커요"],hint:"Too expensive → not buying",s:"이거 너무 ___! 안 사요.\n(Too expensive! Not buying.)",a:"비싸요"}
  ]},
  {id:"kou4l8",title:"Review and Quiz",icon:"📝",xp:30,board:true,steps:[
        {type:"intro",title:"Review: Food & Shopping",desc:"Review: food, object particle, wanting, taste, restaurant, shopping.",goals:["Review 을/를 object particle","Test -고 싶어요","Verify food compound knowledge"]},
        {type:"teach",trg:"Review Summary",src:"What you now know",pos:"part",gender:null,phonetic:"",note:"OBJECT PARTICLE: 을/를 (consonant/vowel)\nWANTING: want to (stem + desire ending)\nFOOD COMPOUNDS: all decoded with building blocks",example:"A: 뭐 먹고 싶어요? B: 비빔밥 먹고 싶어요. 맛있어요!",exampleSrc:"A: What do you want to eat? B: I want bibimbap. It's delicious!",deepDive:{title:"Cultural Note",text:"TASTE: 맛있다, 매워요, 달아요, 짜요, 써요\nCULTURE: 반찬, 빨리빨리, 어른 먼저",funFact:"Korean builds words by combining meaning blocks. Understanding the parts unlocks entire word families."}},
        {type:"mc",q:"밥을 먹어요. 을 tells you that 밥 is the:",opts:["Topic","Subject","Object","Location"],ans:"Object",hint:"을/를 marks what receives the verb action."},
        {type:"mc",q:"불고기 = 불 + 고기. 불 means:",opts:["Meat","Cold","Fire","Mixed"],ans:"Fire",hint:"불 = fire"},
        {type:"mc",q:"맛있다 = 맛 + 있다. 맛 means:",opts:["Food","Taste","Smell","Texture"],ans:"Taste",hint:"Taste + exist = delicious"},
        {type:"mc",q:"'I want to eat':",opts:["먹고 싶어요","먹어요","먹을래요","먹주세요"],ans:"먹고 싶어요",hint:"Stem + 고 ___"},
        {type:"mc",q:"You finish your 김치. The server brings more without asking. This is because 반찬 are:",opts:["Paid extras","Free and unlimited refills","One-time only","Only at expensive restaurants"],ans:"Free and unlimited refills",hint:"반찬 = ___ side dishes, always refillable."},
        {type:"mc",q:"커피___ 마셔요.\n(I drink coffee)",opts:["이","가","를","은"],ans:"를",hint:"Vowel ending or consonant ending?"},
        {type:"mc",q:"비빔밥___ 주세요.\n(Bibimbap, please)",opts:["이","가","을","은"],ans:"을",hint:"Check the last letter of 비빔밥: consonant ㅂ needs 을."},
        {type:"fb",opts:["싶어요","있어요","없어요","가요"],hint:"가고 + ___ = want to go",s:"한국에 가고 ___.\n(I want to go to Korea)",a:"싶어요"},
        {type:"fb",opts:["좀","많이","너무","빨리"],hint:"좀 = polite softener for requests",s:"물 ___ 주세요.\n(Water, please  -  with softener)",a:"좀"},
        {type:"fb",opts:["매워요","맵다","맛있어요","짜요"],hint:"맵다: ㅂ-irregular. Conjugated polite form: 매워요.",s:"이 음식이 ___.\n(This food is spicy  -  use conjugated form)",a:"매워요"},
        {type:"match",pairs:[{trg:"밥",src:"rice/meal"},{trg:"맛있어요",src:"delicious"},{trg:"매워요",src:"spicy"},{trg:"반찬",src:"free side dishes"}]},
        {type:"match",pairs:[{trg:"주세요",src:"please give me"},{trg:"좀 더",src:"a little more"},{trg:"계산",src:"bill/payment"},{trg:"포장이요",src:"to go/takeaway"}]},
        {type:"drag_fill",hint:"I want to eat bibimbap. Please give me water.",s:"{1}을 먹고 싶어요. {2}를 주세요.",blanks:{"1":"비빔밥","2":"물"},pool:["비빔밥","물","커피","사과"]},
        {type:"mc",q:"빨리빨리 culture means Korean service is:",opts:["Slow and careful","Fast and efficient","Formal and quiet","Expensive"],ans:"Fast and efficient",hint:"Speed is valued in Korean service culture"}
  ]}
]};
