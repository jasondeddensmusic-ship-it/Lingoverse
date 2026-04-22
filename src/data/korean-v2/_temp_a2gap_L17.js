// Korean A2 Gap - Lesson 17: Sports, Leisure & Holidays
const LESSON_17 = {
  id:"kov2_a2gap_l17", title:"스포츠, 여가와 휴일", icon:"⛷️", xp:15, board:true,
  steps:[
    {type:"intro", title:"Sports, Leisure & Holidays",
     desc:"Learn 18 words for sports, creative hobbies, holidays, and time expressions. These are essential for talking about free time and Korean cultural celebrations.",
     goals:["Learn 18 sports, leisure, and holiday vocabulary words","Practice talking about hobbies and free time","Understand Korean holiday culture vocabulary"]},

    {type:"teach", trg:"스포츠", src:"sports", pos:"noun", gender:null,
     note:"Loanword from English 'sports.'\nKorean also uses native 운동 (exercise/sports).",
     example:"A: 무슨 스포츠를 좋아해요?\nB: 저는 축구를 좋아해요.",
     exampleSrc:"A: What sports do you like?\nB: I like soccer.",
     funFact:"Korean uses both 스포츠 (the industry/concept) and 운동 (the activity). You watch 스포츠 on TV but you do 운동 at the gym. The distinction mirrors English 'sports' vs. 'exercise.'"},

    {type:"teach", trg:"테니스", src:"tennis", pos:"noun", gender:null,
     note:"Loanword from English.\n테니스를 치다 = to play tennis (lit: hit tennis).",
     example:"A: 테니스 칠 줄 알아요?\nB: 네, 조금 칠 줄 알아요.",
     exampleSrc:"A: Do you know how to play tennis?\nB: Yes, I know how to play a little.",
     funFact:"테니스 uses 치다 (to hit) like most racket sports. Korea's tennis boom exploded after Chung Hyeon's 2018 Australian Open semifinal. Courts that were empty suddenly had waiting lists."},

    {type:"teach", trg:"스키", src:"skiing", pos:"noun", gender:null,
     note:"Loanword from English.\n스키를 타다 = to ski (lit: ride skiing).",
     example:"A: 스키를 타 봤어요?\nB: 아니요, 한 번도 안 타 봤어요.",
     exampleSrc:"A: Have you tried skiing?\nB: No, I've never tried it.",
     funFact:"Korea has major ski resorts in Gangwon Province. PyeongChang hosted the 2018 Winter Olympics. 스키장 (ski resort) trips are a classic Korean winter date activity."},

    {type:"teach", trg:"태권도", src:"taekwondo", pos:"noun", gender:null,
     note:"From hanja: 跆 (kick) + 拳 (fist) + 道 (way).\nKorea's national martial art.",
     example:"A: 태권도를 배우고 싶어요.\nB: 좋아요! 같이 배워요.",
     exampleSrc:"A: I want to learn taekwondo.\nB: Great! Let's learn together.",
     funFact:"태 (kick) + 권 (fist) + 도 (way) literally means 'the way of kicking and punching.' It became an Olympic sport in 2000. Every Korean school has taekwondo as part of physical education."},

    // Quiz block 1: first 4 words
    {type:"mc",
     q:"무슨 ___를 좋아해요?",
     opts:["스포츠","태권도","스키","테니스"],
     ans:"스포츠",
     hint:"Which general category word covers all athletic activities?"},

    {type:"fb",
     s:"태권도는 한국의 국가 {1}예요.",
     a:["스포츠"],
     opts:["스포츠","테니스","스키","태권도"],
     hint:"Which loanword means 'sports' as a general category?",
     sSrc:"Taekwondo is Korea's national {1}."},

    {type:"teach", trg:"비디오", src:"video", pos:"noun", gender:null,
     note:"Loanword from English.\n비디오를 보다 = to watch a video.",
     example:"A: 유튜브 비디오를 봤어요?\nB: 네, 정말 재미있었어요!",
     exampleSrc:"A: Did you watch the YouTube video?\nB: Yes, it was really fun!",
     funFact:"In the 1990s, 비디오 meant VHS tapes. Korean 비디오 가게 (video stores) were everywhere. Now it means any video content. The word survived the format change perfectly."},

    {type:"teach", trg:"그림", src:"picture, painting", pos:"noun", gender:null,
     note:"From 그리다 (to draw).\n그림을 그리다 = to draw a picture.",
     example:"A: 이 그림 누가 그렸어요?\nB: 제가 그렸어요!",
     exampleSrc:"A: Who drew this picture?\nB: I drew it!",
     funFact:"그림 is pure Korean, unlike the hanja-based 화 (畫, painting). Korean art museums distinguish: 그림 for general pictures and illustrations, 회화 for fine art paintings."},

    {type:"teach", trg:"하늘", src:"sky", pos:"noun", gender:null,
     note:"Pure Korean word. One of the most poetic words.\n하늘색 = sky blue (color).",
     example:"A: 오늘 하늘이 예뻐요!\nB: 네, 정말 파란 하늘이에요.",
     exampleSrc:"A: The sky is beautiful today!\nB: Yes, it's really a blue sky.",
     funFact:"하늘 also means 'heaven' in Korean. 하느님/하나님 (God) comes from 하늘 (sky/heaven) + 님 (respectful title). The sky and the divine are linguistically inseparable in Korean."},

    {type:"teach", trg:"장미", src:"rose", pos:"noun", gender:null,
     note:"From hanja 薔薇 (rose).\nThe most popular flower gift in Korea.",
     example:"A: 장미가 정말 예뻐요.\nB: 빨간 장미를 좋아해요?",
     exampleSrc:"A: The roses are really pretty.\nB: Do you like red roses?",
     funFact:"Korean flower language (꽃말) assigns meanings by rose color: 빨간 장미 (red) = love, 하얀 장미 (white) = innocence, 노란 장미 (yellow) = friendship. Giving yellow roses on a date is awkward."},

    // Quiz block 2: words 5-8
    {type:"match", pairs:[
      {trg:"비디오", src:"video"},
      {trg:"그림", src:"picture/painting"},
      {trg:"하늘", src:"sky"},
      {trg:"장미", src:"rose"}
    ]},

    {type:"fb",
     s:"오늘 {1}이 정말 파래요.",
     a:["하늘"],
     opts:["하늘","그림","장미","비디오"],
     hint:"Which word refers to what you see above you when you look up outdoors?",
     sSrc:"The {1} is really blue today."},

    {type:"teach", trg:"파티", src:"party", pos:"noun", gender:null,
     note:"Loanword from English.\n파티를 하다 = to have/throw a party.",
     example:"A: 생일 파티에 올 거예요?\nB: 물론이죠! 꼭 갈게요.",
     exampleSrc:"A: Are you coming to the birthday party?\nB: Of course! I'll definitely go.",
     funFact:"Traditional Korean celebrations were called 잔치 (feast/banquet), not 파티. 돌잔치 (first birthday feast) is still a major family event. 파티 is used for modern, Western-style gatherings."},

    {type:"teach", trg:"오랜만", src:"long time (short form)", pos:"noun", gender:null,
     note:"Shortened from 오래간만.\nUsed in the greeting: 오랜만이에요!",
     example:"A: 오랜만이에요!\nB: 네, 정말 오랜만이에요!",
     exampleSrc:"A: Long time no see!\nB: Yes, it's really been a long time!",
     funFact:"오랜만이에요 is one of the first phrases Korean learners memorize. The full form 오래간만 is more formal. Close friends drop it to just 오랜만! with an excited tone."},

    {type:"teach", trg:"오래간만", src:"long time no see (full form)", pos:"noun", gender:null,
     note:"Full form of 오랜만.\n오래 (long) + 간 (interval) + 만 (only after).",
     example:"A: 오래간만에 만났네요.\nB: 네, 1년 만이에요.",
     exampleSrc:"A: We're meeting after a long time.\nB: Yes, it's been a year.",
     funFact:"The structure breaks down to: 오래 (long time) + 간 (spacing/gap) + 만 (after). Korean is precise about time gaps. 1년 만에 (after one year), 3일 만에 (after three days) use the same 만 particle."},

    {type:"teach", trg:"휴일", src:"holiday, day off", pos:"noun", gender:null,
     note:"From hanja 休日 (rest + day).\n공휴일 = public holiday.",
     example:"A: 내일 휴일이에요?\nB: 네, 쉴 수 있어요!",
     exampleSrc:"A: Is tomorrow a holiday?\nB: Yes, we can rest!",
     funFact:"Korea has 15 public holidays (공휴일) per year. When a holiday falls on a weekend, the government introduced 대체 휴일 (substitute holiday) on Monday. This 'replacement rest day' system started in 2014."},

    // Quiz block 3: words 9-12
    {type:"mc",
     q:"오래간만에 친구를 ___.",
     opts:["했어요","만났어요","봤어요","쉬었어요"],
     ans:"만났어요",
     hint:"After a long time apart, what do you do when you see a friend?"},

    {type:"fb",
     s:"내일은 {1}이라서 쉴 수 있어요.",
     a:["휴일"],
     opts:["휴일","파티","오랜만","하늘"],
     hint:"Which hanja-based word means a day when you don't have to work?",
     sSrc:"Tomorrow is a {1} so we can rest."},

    {type:"teach", trg:"공휴일", src:"public holiday", pos:"noun", gender:null,
     note:"공 (public) + 휴일 (holiday).\nOfficial government-designated rest days.",
     example:"A: 다음 공휴일이 언제예요?\nB: 다음 주 월요일이에요.",
     exampleSrc:"A: When is the next public holiday?\nB: It's next Monday.",
     funFact:"Korea's biggest 공휴일 cluster is 추석 (Chuseok, harvest festival) and 설날 (Lunar New Year), each giving 3 days off. During these holidays, the entire country migrates to hometowns. Highways become parking lots."},

    {type:"teach", trg:"크리스마스", src:"Christmas", pos:"noun", gender:null,
     note:"Loanword from English.\nDecember 25 is an official public holiday in Korea.",
     example:"A: 크리스마스에 뭐 할 거예요?\nB: 가족이랑 저녁을 먹을 거예요.",
     exampleSrc:"A: What will you do on Christmas?\nB: I'll have dinner with family.",
     funFact:"Christmas in Korea is more like Valentine's Day: a couples' holiday. Young couples exchange gifts and eat cake. Fried chicken + cake on Christmas Eve is a distinctly Korean tradition."},

    {type:"teach", trg:"쓰레기", src:"trash, garbage", pos:"noun", gender:null,
     note:"Pure Korean word.\n쓰레기를 버리다 = to throw away trash.",
     example:"A: 쓰레기 좀 버려 주세요.\nB: 어디에 버려요?",
     exampleSrc:"A: Please throw away the trash.\nB: Where should I throw it?",
     funFact:"Korea has one of the world's strictest recycling systems. You must buy special 종량제 봉투 (volume-rate trash bags) and separate recyclables into 5+ categories. Fines apply for violations."},

    {type:"teach", trg:"휴지", src:"tissue, toilet paper", pos:"noun", gender:null,
     note:"From hanja 休紙 (waste + paper).\nCovers both tissues and toilet paper.",
     example:"A: 휴지 있어요?\nB: 네, 여기 있어요.",
     exampleSrc:"A: Do you have tissues?\nB: Yes, here you go.",
     funFact:"Giving 휴지 (toilet paper) as a housewarming gift is a Korean tradition. It symbolizes wishing that things 'roll smoothly' in the new home, like toilet paper unrolling. Practical and symbolic."},

    // Quiz block 4: words 13-18
    {type:"match", pairs:[
      {trg:"공휴일", src:"public holiday"},
      {trg:"크리스마스", src:"Christmas"},
      {trg:"쓰레기", src:"trash/garbage"},
      {trg:"휴지", src:"tissue/toilet paper"}
    ]},

    {type:"teach", trg:"옛날", src:"old days, long ago", pos:"noun", gender:null,
     note:"Pure Korean. 옛 (old/former) + 날 (day).\n옛날에 = once upon a time.",
     example:"A: 옛날에 여기가 어땠어요?\nB: 옛날에는 작은 마을이었어요.",
     exampleSrc:"A: What was this place like in the old days?\nB: In the old days, it was a small village.",
     funFact:"옛날 옛적에 (Once upon a time, long long ago) is how every Korean fairy tale begins. It is the exact equivalent of 'Once upon a time.' Every Korean child knows this opening phrase."},

    {type:"teach", trg:"팀", src:"team", pos:"noun", gender:null,
     note:"Loanword from English.\n팀원 = team member, 팀장 = team leader.",
     example:"A: 우리 팀이 이겼어요!\nB: 정말요? 축하해요!",
     exampleSrc:"A: Our team won!\nB: Really? Congratulations!",
     funFact:"Korean workplace culture revolves around 팀. Your 팀장 (team leader) is your direct boss. 팀 회식 (team dinner) is a bonding ritual where the boss usually pays. Refusing to attend is considered rude."},

    {type:"mc",
     q:"옛날 옛적에 작은 마을이 ___.",
     opts:["만났어요","버렸어요","있었어요","쉬었어요"],
     ans:"있었어요",
     hint:"Fairy tales begin by saying a place or thing existed long ago."},

    {type:"fb",
     s:"{1}를 분리수거 해야 해요.",
     a:["쓰레기"],
     opts:["쓰레기","휴지","팀","파티"],
     hint:"Which word means waste or garbage that needs to be sorted for recycling?",
     sSrc:"You have to sort the {1} for recycling."}
  ]
};
export default LESSON_17;
