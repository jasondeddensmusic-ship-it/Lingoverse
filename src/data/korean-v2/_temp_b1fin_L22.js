// Korean B1 Final Gap - Lesson 22: Determiners, Adverbs & Final Words
const LESSON_22 = {
  id:"kov2_b1fin_l22", title:"수식어와 마무리", icon:"✨", xp:15, board:true,
  steps:[
    {type:"intro", title:"Determiners, Adverbs & Final Words",
     desc:"Complete your B1 vocabulary with determiners, key adverbs, and descriptive words. These small but mighty words are used constantly in natural Korean speech.",
     goals:["Learn 15 final B1 words including determiners and adverbs","Use Korean determiners like first, all, and a couple","Express common adverbs for frequency and manner"]},

    {type:"teach", trg:"첫", src:"first, initial", pos:"adj", gender:null,
     note:"Native Korean determiner. Placed before nouns: 첫 날, 첫 사랑.",
     example:"A: 첫 만남이 어땠어요?\nB: 첫 만남이 아주 좋았어요.",
     exampleSrc:"A: How was the first meeting?\nB: The first meeting was very nice.",
     funFact:"첫 carries emotional weight: 첫 사랑 (first love), 첫 눈 (first snow), 첫 월급 (first paycheck). Koreans treasure 'firsts' as special milestones."},

    {type:"teach", trg:"온", src:"all, whole, entire", pos:"adj", gender:null,
     note:"Native Korean determiner. Means 'all' or 'whole.' Different from 온도 (temperature).",
     example:"A: 온 세상이 하얘요.\nB: 네, 눈이 많이 왔어요.",
     exampleSrc:"A: The whole world is white.\nB: Yes, it snowed a lot.",
     funFact:"온 is poetic and emphatic: 온 마음 (whole heart), 온 세상 (whole world), 온 가족 (whole family). It adds completeness and warmth."},

    {type:"teach", trg:"한두", src:"one or two, a couple of", pos:"adj", gender:null,
     note:"Native Korean compound determiner. 한 (one) + 두 (two).",
     example:"A: 한두 번 해 봤어요?\nB: 네, 한두 번 정도 해 봤어요.",
     exampleSrc:"A: Have you tried it once or twice?\nB: Yes, I've tried it about once or twice.",
     funFact:"한두 is a common vague quantifier: 한두 시간 (an hour or two), 한두 사람 (one or two people). It softens numbers and sounds casual."},

    {type:"teach", trg:"영원하다", src:"eternal, everlasting, forever", pos:"adj", gender:null,
     note:"Sino-Korean (永遠). 영 (永) = eternal, 원 (遠) = far.",
     example:"A: 영원한 사랑이 있을까요?\nB: 노력하면 영원할 수 있어요.",
     exampleSrc:"A: Is there eternal love?\nB: If you work at it, it can be eternal.",
     funFact:"영원히 (forever) is a staple of Korean love songs and wedding vows. 영원한 친구 (eternal friend) and 영원한 사랑 (eternal love) are cherished ideals."},

    {type:"teach", trg:"이러하다", src:"to be like this, to be such", pos:"adj", gender:null,
     note:"Formal/literary demonstrative adjective. Shortened to 이런 in speech.",
     example:"A: 상황이 이러하니 어떻게 할까요?\nB: 이러한 상황에서는 조심해야 해요.",
     exampleSrc:"A: Given that the situation is like this, what shall we do?\nB: In such a situation, we need to be careful.",
     funFact:"이러하다 is the formal form of 이렇다 (to be like this). It appears in formal writing and speeches: 이러한 이유로 (for such a reason)."},

    {type:"mc",
     q:"'___ 사랑은 없다'에서 '영원히 계속되는'의 의미를 가진 단어는?",
     opts:["첫","온","영원한","이러한"],
     ans:"영원한",
     hint:"This adjective means lasting forever, without end."},

    {type:"teach", trg:"화려하다", src:"splendid, gorgeous, flashy", pos:"adj", gender:null,
     note:"Sino-Korean (華麗). 화 (華) = splendid, 려 (麗) = beautiful.",
     example:"A: 무대가 화려하네요!\nB: 네, 조명이 정말 화려해요.",
     exampleSrc:"A: The stage is gorgeous!\nB: Yes, the lighting is really splendid.",
     funFact:"화려하다 describes visual splendor: 화려한 옷 (flashy clothes), 화려한 경력 (impressive career). K-pop stages are known for being 화려하다."},

    {type:"teach", trg:"희다", src:"white, pale", pos:"adj", gender:null,
     note:"Native Korean adjective. The color white or paleness.",
     example:"A: 눈이 와서 세상이 하얘요.\nB: 네, 하얀 눈이 정말 예뻐요.",
     exampleSrc:"A: The world is white because of the snow.\nB: Yes, the white snow is really pretty.",
     funFact:"희다 is irregular: 하얀 (modifying form), 하얘요 (polite). 백설공주 (Snow White) uses 백 (白, white), but in everyday Korean 하얀 is more natural."},

    {type:"teach", trg:"온통", src:"entirely, all over, completely", pos:"adv", gender:null,
     note:"Native Korean adverb. Everything is covered or dominated by one thing.",
     example:"A: 바닥이 온통 물이에요!\nB: 누가 물을 쏟았나 봐요.",
     exampleSrc:"A: The floor is entirely covered in water!\nB: Someone must have spilled water.",
     funFact:"온통 emphasizes total coverage: 온통 빨간색 (entirely red), 방 온통 (the whole room). It is more dramatic than just 전부 (all)."},

    {type:"teach", trg:"우연히", src:"by chance, accidentally, coincidentally", pos:"adv", gender:null,
     note:"Sino-Korean (偶然). Something happening without plan or intention.",
     example:"A: 우연히 옛 친구를 만났어요.\nB: 정말요? 세상 참 좁네요!",
     exampleSrc:"A: I ran into an old friend by chance.\nB: Really? What a small world!",
     funFact:"우연 (coincidence) vs 운명 (fate) is a popular Korean philosophy debate. Many Korean dramas build entire plots around 우연한 만남 (chance encounters)."},

    {type:"fb",
     s:"거리에서 {1} 옛날 친구를 만났어요.",
     a:["우연히"],
     opts:["우연히","온통","흔히","자꾸"],
     hint:"This adverb means the meeting happened by pure coincidence, not planned.",
     sSrc:"I {1} met an old friend on the street."},

    {type:"teach", trg:"자꾸", src:"repeatedly, again and again, keep doing", pos:"adv", gender:null,
     note:"Native Korean adverb. Something happening over and over, often annoyingly.",
     example:"A: 왜 자꾸 실수해요?\nB: 죄송해요, 자꾸 같은 실수를 해요.",
     exampleSrc:"A: Why do you keep making mistakes?\nB: Sorry, I keep making the same mistake.",
     funFact:"자꾸 implies slight annoyance at repetition: 자꾸 생각나다 (it keeps coming to mind), 자꾸 웃음이 나다 (I keep laughing). It signals something hard to stop."},

    {type:"teach", trg:"잔뜩", src:"a lot, to the fullest, tightly", pos:"adv", gender:null,
     note:"Native Korean adverb. Intensely full or overloaded.",
     example:"A: 짐을 잔뜩 싸 왔네요.\nB: 네, 일주일 동안 쓸 거라서요.",
     exampleSrc:"A: You packed a lot of luggage.\nB: Yes, because I'll use it for a week.",
     funFact:"잔뜩 can be positive or negative: 기대를 잔뜩 하다 (be full of expectations), 긴장을 잔뜩 하다 (be very tense), 먹을 것을 잔뜩 사다 (buy lots of food)."},

    {type:"teach", trg:"조용히", src:"quietly, silently", pos:"adv", gender:null,
     note:"Derived from 조용하다 (quiet). Adverb form.",
     example:"A: 조용히 해 주세요.\nB: 네, 죄송합니다.",
     exampleSrc:"A: Please be quiet.\nB: Yes, I'm sorry.",
     funFact:"조용히 해 주세요 (please be quiet) is heard in libraries, theaters, and classrooms. Korean society values 조용함 (quietness) in public spaces."},

    {type:"teach", trg:"흔히", src:"commonly, frequently, often", pos:"adv", gender:null,
     note:"Derived from 흔하다 (common/frequent). Adverb form.",
     example:"A: 이런 실수를 흔히 해요?\nB: 네, 흔히 있는 실수예요.",
     exampleSrc:"A: Do people commonly make this kind of mistake?\nB: Yes, it's a common mistake.",
     funFact:"흔히 describes what is typical or widespread: 흔히 볼 수 있다 (commonly seen), 흔히 쓰는 표현 (commonly used expression). It normalizes experiences."},

    {type:"match", pairs:[
      {trg:"자꾸", src:"repeatedly/again and again"},
      {trg:"잔뜩", src:"a lot/tightly"},
      {trg:"조용히", src:"quietly"},
      {trg:"흔히", src:"commonly"},
      {trg:"우연히", src:"by chance"}
    ]},

    {type:"teach", trg:"한편", src:"on the other hand, meanwhile", pos:"noun", gender:null,
     note:"Sino-Korean (한 = one, 편 = side). A discourse connector for contrast.",
     example:"A: 서울은 비가 왔어요. 한편 부산은 맑았어요.\nB: 날씨가 많이 다르네요.",
     exampleSrc:"A: It rained in Seoul. Meanwhile, it was clear in Busan.\nB: The weather is very different.",
     funFact:"한편 is a TOPIK essay favorite for introducing a contrasting point. It works like 'on the other hand' or 'meanwhile' to balance an argument."},

    {type:"teach", trg:"태우다", src:"to burn, to give a ride, to tan", pos:"verb", gender:null,
     note:"Causative of 타다 (to burn/ride). Making something burn or putting someone in a vehicle.",
     example:"A: 쓰레기를 태워도 돼요?\nB: 아니요, 여기서 태우면 안 돼요.",
     exampleSrc:"A: Can I burn the trash?\nB: No, you can't burn it here.",
     funFact:"태우다 has three meanings: burn (쓰레기를 태우다), give a ride (차에 태우다), and tan (햇볕에 피부를 태우다). All involve 'subjecting to' something."},

    {type:"teach", trg:"이유", src:"reason, cause", pos:"noun", gender:null,
     note:"Sino-Korean (理由). 이 (理) = reason/logic, 유 (由) = from/cause.",
     example:"A: 이유가 뭐예요?\nB: 특별한 이유는 없어요.",
     exampleSrc:"A: What's the reason?\nB: There's no particular reason.",
     funFact:"이유 is one of the most frequently used Korean nouns. 이유 없이 (without reason) and 그 이유는 (the reason is) appear in almost every conversation."},

    {type:"teach", trg:"자", src:"now then, well (interjection); ruler", pos:"intj", gender:null,
     note:"Interjection to start an action or draw attention. Also means 'ruler' (尺).",
     example:"A: 자, 시작합시다!\nB: 네, 준비됐어요!",
     exampleSrc:"A: Now then, let's begin!\nB: Yes, I'm ready!",
     funFact:"자 is the Korean equivalent of 'okay, let's go!' Teachers, MCs, and group leaders say 자 to signal the start of something."},

    {type:"mc",
     q:"에세이에서 다른 관점을 소개할 때 쓰는 연결어는?",
     opts:["한편","자꾸","잔뜩","흔히"],
     ans:"한편",
     hint:"This discourse connector means 'on the other hand' or 'meanwhile.'"}
  ]
};
export default LESSON_22;
