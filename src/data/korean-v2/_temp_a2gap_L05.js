// Korean A2 Gap - Lesson 5: Home & Household Items
// Temp file - to be merged into unit by main session

const LESSON_5 = {
  id:"kov2_a2gap_l5", title:"집과 생활용품", icon:"🏠", xp:15, board:true,
  steps:[
    {type:"intro", title:"집과 생활용품",
     desc:"Learn vocabulary for housing, furniture, and everyday household items you encounter at home and around the house.",
     goals:["Name types of housing and furniture","Identify common household objects and appliances","Talk about items you use daily at home"]},

    // --- Teach block 1: Housing & furniture ---
    {type:"teach", trg:"아파트", src:"apartment", pos:"noun", gender:null,
     note:"Loanword from English. The most common housing type in Korean cities.",
     example:"A: 어디에 살아요?\nB: 강남에 있는 아파트에 살아요.",
     exampleSrc:"A: Where do you live?\nB: I live in an apartment in Gangnam.",
     funFact:"Over 60% of South Koreans live in 아파트. Giant apartment complexes (아파트 단지) define Korean cityscapes. Your apartment complex often signals your social status."},

    {type:"teach", trg:"건물", src:"building", pos:"noun", gender:null,
     note:"Any structure or building. Sino-Korean word.",
     example:"A: 저 건물이 뭐예요?\nB: 병원이에요.",
     exampleSrc:"A: What is that building?\nB: It is a hospital.",
     funFact:"From Hanja 建物: 建 (build) + 物 (thing). The same 건 appears in 건설 (construction) and 건축 (architecture). Korean cities have rebuilt dramatically since the 1960s."},

    {type:"teach", trg:"책상", src:"desk", pos:"noun", gender:null,
     note:"A desk for studying or working. 책 (book) + 상 (table).",
     example:"A: 책상 위에 뭐가 있어요?\nB: 컴퓨터가 있어요.",
     exampleSrc:"A: What is on the desk?\nB: There is a computer.",
     funFact:"Literally 'book table.' Korean compound nouns are often transparent: 책상 (book-table = desk), 식탁 (food-table = dining table). Knowing the parts unlocks the meaning."},

    {type:"teach", trg:"식탁", src:"dining table", pos:"noun", gender:null,
     note:"A table for eating meals. 식 (food/meal) + 탁 (table).",
     example:"A: 식탁에서 같이 먹어요.\nB: 네, 좋아요.",
     exampleSrc:"A: Let's eat together at the dining table.\nB: Yes, sounds good.",
     funFact:"From Hanja 食卓: 食 (eat) + 卓 (table). Traditional Korean meals were served on a 밥상 (low floor table). Modern 식탁 (Western-height table) became standard in apartments."},

    {type:"teach", trg:"소파", src:"sofa", pos:"noun", gender:null,
     note:"Loanword from English. Living room furniture for sitting and relaxing.",
     example:"A: 소파에 앉으세요.\nB: 감사합니다.",
     exampleSrc:"A: Please sit on the sofa.\nB: Thank you.",
     funFact:"소파 entered Korean with Western-style apartments. Traditional Korean homes used floor cushions (방석). The shift from floor living to sofa living happened in just one generation."},

    {type:"teach", trg:"테이블", src:"table", pos:"noun", gender:null,
     note:"Loanword from English. A general-purpose table, often a coffee table.",
     example:"A: 테이블 위에 놓으세요.\nB: 네, 알겠어요.",
     exampleSrc:"A: Please put it on the table.\nB: Yes, understood.",
     funFact:"Korean has both 테이블 (loanword, usually for Western-style tables) and 탁자 (Sino-Korean, formal). Cafe culture uses 테이블, while formal writing might prefer 탁자."},

    // --- Quiz block 1 ---
    {type:"mc",
     q:"한국에서 가장 많은 사람이 사는 집은?",
     opts:["아파트","건물","호텔","학교"],
     ans:"아파트",
     hint:"Over 60% of Koreans live in this type of housing, common in large city complexes."},

    {type:"fb",
     s:"공부할 때 {1}에 앉아요.",
     a:["책상"],
     opts:["책상","식탁","소파","테이블"],
     hint:"This compound word literally means 'book table' and is where you study.",
     sSrc:"When studying, I sit at the {1}."},

    // --- Teach block 2: Appliances & objects ---
    {type:"teach", trg:"냉장고", src:"refrigerator", pos:"noun", gender:null,
     note:"Household appliance for keeping food cold. 냉장 (cold storage) + 고 (storage).",
     example:"A: 우유가 냉장고에 있어요?\nB: 네, 안에 있어요.",
     exampleSrc:"A: Is the milk in the refrigerator?\nB: Yes, it is inside.",
     funFact:"From Hanja 冷藏庫: 冷 (cold) + 藏 (store) + 庫 (warehouse). Samsung and LG are global refrigerator leaders, and Korean homes often have massive 양문형 (double-door) fridges."},

    {type:"teach", trg:"열쇠", src:"key", pos:"noun", gender:null,
     note:"A physical key for a lock. Also used figuratively.",
     example:"A: 열쇠 어디 있어요?\nB: 가방 안에 있어요.",
     exampleSrc:"A: Where is the key?\nB: It is in the bag.",
     funFact:"Pure Korean word from 열다 (to open) + 쇠 (metal/iron). Literally 'opening metal.' Modern Korean apartments use digital door locks (비밀번호), but 열쇠 remains common vocabulary."},

    {type:"teach", trg:"지갑", src:"wallet", pos:"noun", gender:null,
     note:"A small case for money and cards. Carried daily.",
     example:"A: 지갑을 잃어버렸어요!\nB: 어디에서요?",
     exampleSrc:"A: I lost my wallet!\nB: Where?",
     funFact:"From Hanja 紙匣: 紙 (paper) + 匣 (box). Literally a 'paper box' for bills. With Korea's cashless society, physical 지갑 are shrinking as phone payments dominate."},

    {type:"teach", trg:"시계", src:"watch; clock", pos:"noun", gender:null,
     note:"Any timepiece. 손목시계 (wristwatch), 벽시계 (wall clock).",
     example:"A: 시계가 몇 시예요?\nB: 두 시예요.",
     exampleSrc:"A: What time does the clock say?\nB: It is two o'clock.",
     funFact:"From Hanja 時計: 時 (time) + 計 (measure). The same 시 appears in 시간 (time/hour). Korea is famously punctual; 빨리빨리 (hurry hurry) culture makes 시계 essential."},

    {type:"teach", trg:"우산", src:"umbrella", pos:"noun", gender:null,
     note:"Carried for rain protection. A daily essential during monsoon season.",
     example:"A: 우산 가져왔어요?\nB: 아니요, 깜빡했어요.",
     exampleSrc:"A: Did you bring an umbrella?\nB: No, I forgot.",
     funFact:"From Hanja 雨傘: 雨 (rain) + 傘 (umbrella/parasol). Korean convenience stores sell cheap transparent umbrellas. During 장마 (monsoon season, June to July), umbrellas are everywhere."},

    {type:"teach", trg:"칼", src:"knife", pos:"noun", gender:null,
     note:"A cutting tool. Kitchen knife, pocket knife, or blade.",
     example:"A: 칼 좀 주세요.\nB: 여기요, 조심하세요.",
     exampleSrc:"A: Please give me a knife.\nB: Here, be careful.",
     funFact:"Pure Korean word. In cooking, Korean kitchens typically use a large rectangular 식칼 (kitchen knife) for all purposes, unlike the specialized Western knife sets."},

    // --- Quiz block 2 ---
    {type:"match", pairs:[
      {trg:"냉장고", src:"refrigerator"},
      {trg:"열쇠", src:"key"},
      {trg:"지갑", src:"wallet"},
      {trg:"우산", src:"umbrella"}
    ]},

    {type:"mc",
     q:"시간을 보려면 뭘 봐요?",
     opts:["시계","거울","달력","카메라"],
     ans:"시계",
     hint:"This device measures time and can be worn on your wrist or hung on a wall."},

    // --- Teach block 3: Electronics & media ---
    {type:"teach", trg:"카메라", src:"camera", pos:"noun", gender:null,
     note:"Loanword from English. Any photographic device.",
     example:"A: 카메라 가져왔어요?\nB: 네, 사진 찍을 거예요.",
     exampleSrc:"A: Did you bring a camera?\nB: Yes, I will take photos.",
     funFact:"Korea's selfie culture is legendary. 셀카 (selfie, from self + camera) was coined in Korea. Photo booths (인생네컷, 'four cuts of life') are hugely popular with young Koreans."},

    {type:"teach", trg:"텔레비전", src:"television", pos:"noun", gender:null,
     note:"Loanword from English. The full formal word for TV.",
     example:"A: 텔레비전 보고 있어요?\nB: 네, 뉴스 봐요.",
     exampleSrc:"A: Are you watching television?\nB: Yes, I am watching the news.",
     funFact:"The full word 텔레비전 is used in formal contexts, news, and writing. In daily speech, most Koreans say 티브이 (TV) instead. Both are understood everywhere."},

    {type:"teach", trg:"티브이", src:"TV (colloquial)", pos:"noun", gender:null,
     note:"Casual pronunciation of 'TV.' The everyday spoken form.",
     example:"A: 티브이 켜 주세요.\nB: 무슨 채널 볼 거예요?",
     exampleSrc:"A: Please turn on the TV.\nB: What channel will you watch?",
     funFact:"Korean loanwords often follow pronunciation rather than spelling: TV becomes 티브이 (ti-beu-i). Similarly, SNS (social media) is said as 에스엔에스 letter by letter."},

    {type:"teach", trg:"라디오", src:"radio", pos:"noun", gender:null,
     note:"Loanword from English. Still popular for music and talk shows.",
     example:"A: 라디오 들어요?\nB: 네, 아침마다 들어요.",
     exampleSrc:"A: Do you listen to the radio?\nB: Yes, I listen every morning.",
     funFact:"Korean radio culture is strong. Idol fans request songs on radio shows, and 라디오 스타 (Radio Star) is a long-running variety show. Radio bridges old and new media."},

    // --- Quiz block 3 ---
    {type:"fb",
     s:"아침에 일어나서 {1}를 켜요.",
     a:["티브이"],
     opts:["티브이","카메라","라디오","시계"],
     hint:"The casual Korean pronunciation of a three-letter English abbreviation for a screen at home.",
     sSrc:"I wake up in the morning and turn on the {1}."},

    {type:"mc",
     q:"사진을 찍고 싶을 때 필요한 것은?",
     opts:["카메라","라디오","텔레비전","소파"],
     ans:"카메라",
     hint:"This loanword device captures images and is essential for Korea's selfie culture."},

    // --- Teach block 4: Remaining items ---
    {type:"teach", trg:"잎", src:"leaf", pos:"noun", gender:null,
     note:"A single leaf from a plant or tree. Pure Korean word.",
     example:"A: 나무 잎이 빨개졌어요.\nB: 가을이 왔어요.",
     exampleSrc:"A: The tree leaves turned red.\nB: Autumn has come.",
     funFact:"잎 is used in 나뭇잎 (tree leaf, with linking ㅅ) and 꽃잎 (flower petal). Korean autumn leaf viewing (단풍놀이) is a beloved seasonal tradition, especially at 설악산."},

    {type:"teach", trg:"숟가락", src:"spoon", pos:"noun", gender:null,
     note:"An eating utensil. Koreans eat rice and soup with spoons.",
     example:"A: 숟가락 좀 주세요.\nB: 여기 있어요.",
     exampleSrc:"A: Please give me a spoon.\nB: Here it is.",
     funFact:"In Korean dining, the spoon (숟가락) is for rice and soup, chopsticks (젓가락) are for side dishes. Using both at the same time is considered poor manners. The pair is called 수저."},

    // --- Final quiz block ---
    {type:"match", pairs:[
      {trg:"아파트", src:"apartment"},
      {trg:"숟가락", src:"spoon"},
      {trg:"잎", src:"leaf"},
      {trg:"칼", src:"knife"}
    ]},

    {type:"mc",
     q:"밥을 먹을 때 사용하는 것은?",
     opts:["숟가락","열쇠","우산","칼"],
     ans:"숟가락",
     hint:"Koreans use this utensil specifically for eating rice and drinking soup at meals."}
  ]
};
export default LESSON_5;
