// Korean B1 Final Gap - Lesson 3: Arts & Entertainment
const LESSON_3 = {
  id:"kov2_b1fin_l3", title:"예술과 문화생활", icon:"🎭", xp:15, board:true,
  steps:[
    {type:"intro", title:"Arts & Entertainment",
     desc:"Explore vocabulary for the arts, performances, festivals, and creative expression. Korea's entertainment industry is world-famous, and these words will help you discuss it.",
     goals:["Learn 20 words for arts, events, and creative work","Discuss festivals, competitions, and cultural life","Express praise and creative appreciation"]},

    {type:"teach", trg:"예술", src:"art, the arts", pos:"noun", gender:null,
     note:"Sino-Korean (藝術). Covers all fine arts, music, and performance.",
     example:"A: 어떤 예술을 좋아해요?\nB: 저는 현대 예술을 좋아해요.",
     exampleSrc:"A: What kind of art do you like?\nB: I like contemporary art.",
     funFact:"From hanja 藝 (skill/craft) + 術 (technique). The same characters are used in Japanese (geijutsu) and Chinese (yishu)."},

    {type:"teach", trg:"예술가", src:"artist", pos:"noun", gender:null,
     note:"Sino-Korean (藝術家). 가 (家) = specialist in a field.",
     example:"A: 그 예술가의 작품을 봤어요?\nB: 네, 정말 감동적이었어요.",
     exampleSrc:"A: Did you see that artist's work?\nB: Yes, it was really moving.",
     funFact:"Korea's most famous 예술가 include Nam June Paik (video art pioneer) and Kim Whanki (abstract painter). Both are globally recognized."},

    {type:"teach", trg:"작가", src:"writer, author, artist", pos:"noun", gender:null,
     note:"Sino-Korean (作家). Can mean writer or visual artist depending on context.",
     example:"A: 좋아하는 작가가 있어요?\nB: 한강 작가를 좋아해요. 소설이 아름다워요.",
     exampleSrc:"A: Do you have a favorite writer?\nB: I like author Han Kang. Her novels are beautiful.",
     funFact:"In Korean art galleries, painters are also called 작가. So a 작가 can be a novelist, a painter, or even a sculptor."},

    {type:"teach", trg:"촬영", src:"filming, photography, shooting", pos:"noun", gender:null,
     note:"Sino-Korean (撮影). Used for both photo and video recording.",
     example:"A: 영화 촬영이 여기서 있었어요?\nB: 네, 유명한 영화 촬영지예요.",
     exampleSrc:"A: Was a movie filmed here?\nB: Yes, it's a famous filming location.",
     funFact:"촬영 금지 (no photography) signs are everywhere in Korea: museums, concerts, military zones. Always check before snapping photos."},

    {type:"teach", trg:"탤런트", src:"TV actor/actress", pos:"noun", gender:null,
     note:"Loanword from English 'talent.' In Korea, specifically means TV drama actor.",
     example:"A: 그 탤런트가 새 드라마에 나와요?\nB: 네, 다음 달에 시작해요.",
     exampleSrc:"A: Is that actor appearing in a new drama?\nB: Yes, it starts next month.",
     funFact:"In Korea, 탤런트 specifically means TV drama actor, distinct from 영화배우 (film actor). The division between TV and film talent was historically rigid."},

    {type:"mc",
     q:"사진이나 영화를 찍는 것을 뭐라고 해요?",
     opts:["촬영","예술","작가","탤런트"],
     ans:"촬영",
     hint:"This Sino-Korean word covers both photography and video recording."},

    {type:"teach", trg:"팬", src:"fan, supporter", pos:"noun", gender:null,
     note:"Loanword from English. Used for fans of celebrities, sports teams, etc.",
     example:"A: 그 가수의 팬이에요?\nB: 네, 오래된 팬이에요. 콘서트도 자주 가요.",
     exampleSrc:"A: Are you a fan of that singer?\nB: Yes, I'm a longtime fan. I go to concerts often.",
     funFact:"Korean fan culture is intense. Organized fan clubs have official names, colors, and coordinated support projects for their idols."},

    {type:"teach", trg:"올림픽", src:"Olympics", pos:"noun", gender:null,
     note:"Loanword from English. Korea has hosted both summer and winter games.",
     example:"A: 한국에서 올림픽이 열린 적 있어요?\nB: 네, 1988년 서울 올림픽이 유명해요.",
     exampleSrc:"A: Has the Olympics ever been held in Korea?\nB: Yes, the 1988 Seoul Olympics is famous.",
     funFact:"The 1988 Seoul Olympics transformed Korea's global image. It was followed by the 2018 Pyeongchang Winter Olympics, making Korea a dual host."},

    {type:"teach", trg:"축제", src:"festival", pos:"noun", gender:null,
     note:"Sino-Korean (祝祭). 축 (祝) = celebrate, 제 (祭) = ritual/festival.",
     example:"A: 이번 주말에 축제가 있어요?\nB: 네, 벚꽃 축제가 열려요.",
     exampleSrc:"A: Is there a festival this weekend?\nB: Yes, a cherry blossom festival is being held.",
     funFact:"Korea has hundreds of regional festivals: 보령 머드 축제 (Boryeong Mud Festival), 진해 벚꽃 축제 (Jinhae Cherry Blossom Festival), and more."},

    {type:"teach", trg:"행사", src:"event, ceremony", pos:"noun", gender:null,
     note:"Sino-Korean (行事). More formal than 축제. Official events and ceremonies.",
     example:"A: 회사 행사에 참석해야 해요?\nB: 네, 중요한 행사라서 꼭 가야 해요.",
     exampleSrc:"A: Do I have to attend the company event?\nB: Yes, it's an important event so you must go.",
     funFact:"In Korean offices, 행사 can range from year-end parties to team-building trips. Attendance is often socially mandatory."},

    {type:"fb",
     s:"매년 봄에 벚꽃 {1}가 열려요.",
     a:["축제"],
     opts:["축제","행사","촬영","예술"],
     hint:"This word means a celebratory gathering or festival, often with food and performances.",
     sSrc:"A cherry blossom {1} is held every spring."},

    {type:"teach", trg:"우승", src:"victory, championship", pos:"noun", gender:null,
     note:"Sino-Korean (優勝). 우 (優) = excellent, 승 (勝) = win.",
     example:"A: 어느 팀이 우승했어요?\nB: 한국 팀이 우승했어요!",
     exampleSrc:"A: Which team won the championship?\nB: The Korean team won!",
     funFact:"When Korea's national team achieves 우승, the streets of Seoul fill with red-shirted fans celebrating. The 2002 World Cup is the most legendary example."},

    {type:"teach", trg:"이미지", src:"image, impression", pos:"noun", gender:null,
     note:"Loanword from English. Used for both visual images and reputations.",
     example:"A: 이 회사의 이미지가 좋아요?\nB: 네, 친환경 이미지가 강해요.",
     exampleSrc:"A: Does this company have a good image?\nB: Yes, it has a strong eco-friendly image.",
     funFact:"In Korea, 이미지 management is crucial for celebrities and companies alike. A single scandal can destroy years of careful 이미지 building."},

    {type:"teach", trg:"연기", src:"acting, performance", pos:"noun", gender:null,
     note:"Sino-Korean (演技). Also means 'smoke' with different hanja (煙氣).",
     example:"A: 그 배우의 연기가 어때요?\nB: 연기가 정말 자연스러워요.",
     exampleSrc:"A: How is that actor's acting?\nB: The acting is really natural.",
     funFact:"연기 has two completely different meanings: acting (演技) and smoke (煙氣). Context always makes the meaning clear."},

    {type:"teach", trg:"풍경", src:"scenery, landscape", pos:"noun", gender:null,
     note:"Sino-Korean (風景). 풍 (風) = wind, 경 (景) = view/scene.",
     example:"A: 이곳의 풍경이 아름답네요.\nB: 네, 가을 풍경이 특히 좋아요.",
     exampleSrc:"A: The scenery here is beautiful.\nB: Yes, the autumn scenery is especially nice.",
     funFact:"Literally 'wind-view,' suggesting a landscape you feel with all senses. Korean painters have captured 풍경 for centuries in traditional ink wash paintings."},

    {type:"teach", trg:"표현하다", src:"to express, to represent", pos:"verb", gender:null,
     note:"Sino-Korean (表現). Expressing feelings, ideas, or artistic vision.",
     example:"A: 감정을 잘 표현해요?\nB: 아니요, 표현하는 게 어려워요.",
     exampleSrc:"A: Do you express your emotions well?\nB: No, expressing them is difficult for me.",
     funFact:"Korean culture traditionally valued restraint over expression. The phrase 표현력이 좋다 (good at expressing) is a genuine compliment."},

    {type:"match", pairs:[
      {trg:"우승", src:"championship/victory"},
      {trg:"연기", src:"acting"},
      {trg:"풍경", src:"scenery"},
      {trg:"표현하다", src:"to express"},
      {trg:"이미지", src:"image/impression"}
    ]},

    {type:"teach", trg:"칭찬", src:"praise, compliment", pos:"noun", gender:null,
     note:"Sino-Korean (稱讚). Often paired with 하다 (to praise) or 받다 (to receive).",
     example:"A: 선생님한테 칭찬 받았어요?\nB: 네, 발표를 잘했다고 칭찬해 주셨어요.",
     exampleSrc:"A: Did you receive praise from the teacher?\nB: Yes, the teacher praised me for doing the presentation well.",
     funFact:"The Korean saying 칭찬은 고래도 춤추게 한다 means 'praise makes even a whale dance.' It highlights how powerful encouragement can be."},

    {type:"teach", trg:"훌륭하다", src:"excellent, magnificent, outstanding", pos:"adj", gender:null,
     note:"Native Korean adjective. Strong praise for quality or character.",
     example:"A: 공연이 어땠어요?\nB: 정말 훌륭했어요! 감동받았어요.",
     exampleSrc:"A: How was the performance?\nB: It was truly excellent! I was moved.",
     funFact:"훌륭하다 is a high-level compliment in Korean. It is often used for people of exceptional character: 훌륭한 사람 (an outstanding person)."},

    {type:"teach", trg:"표정", src:"facial expression", pos:"noun", gender:null,
     note:"Sino-Korean (表情). 표 (表) = surface/show, 정 (情) = emotion.",
     example:"A: 왜 그런 표정이에요?\nB: 아, 아무것도 아니에요. 그냥 피곤해요.",
     exampleSrc:"A: Why that facial expression?\nB: Oh, it's nothing. I'm just tired.",
     funFact:"In Korean dramas, actors are praised for their 표정 연기 (expression acting). The ability to convey emotion through subtle facial changes is highly valued."},

    {type:"teach", trg:"추억", src:"memory, remembrance (fond)", pos:"noun", gender:null,
     note:"Sino-Korean (追憶). 추 (追) = chase, 억 (憶) = remember.",
     example:"A: 학교 시절 추억이 있어요?\nB: 네, 친구들과의 추억이 많아요.",
     exampleSrc:"A: Do you have memories from school days?\nB: Yes, I have many memories with friends.",
     funFact:"추억 always implies warm, nostalgic memories. For neutral or bad memories, Koreans use 기억 (memory) instead."},

    {type:"teach", trg:"참가하다", src:"to participate, to take part", pos:"verb", gender:null,
     note:"Sino-Korean (參加). Formal version of 참여하다.",
     example:"A: 마라톤에 참가할 거예요?\nB: 네, 올해 처음 참가해요.",
     exampleSrc:"A: Will you participate in the marathon?\nB: Yes, this is my first time participating.",
     funFact:"참가 and 참여 both mean participate, but 참가 emphasizes joining an event while 참여 emphasizes active involvement in a process."},

    {type:"mc",
     q:"'칭찬은 고래도 춤추게 한다'는 무슨 뜻이에요?",
     opts:["고래가 춤을 잘 춘다","칭찬의 힘이 크다","춤을 배워야 한다","고래를 좋아해야 한다"],
     ans:"칭찬의 힘이 크다",
     hint:"This proverb is about the powerful effect of giving compliments to others."}
  ]
};
export default LESSON_3;
