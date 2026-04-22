// Korean B2. Batch 6, Lesson 18: Passion and Fruit
// Words: 연예인, 연인, 연장, 연주, 연출, 연출하다, 연하다, 연합, 연휴, 열기, 열매, 열정, 열중하다, 열흘, 엷다, 염려, 염려하다, 엽서, 엿보다, (note: filling with 연상하다 from prev gap)

const LESSON_18 = {
  id:"kov2_b2b6_l18", title:"열정과 열매", icon:"🎵", xp:15, board:true,
  steps:[
    {type:"intro", title:"열정과 열매",
     desc:"Learn words about entertainment, passion, fruit, and concern. This lesson covers 演 (perform), 熱 (heat/passion), and native Korean descriptive words.",
     goals:["Master 20 words about entertainment, passion, and worry","Understand 熱 compounds for heat and enthusiasm","Use performance and holiday vocabulary naturally"]},

    {type:"teach", trg:"연예인", src:"entertainer, celebrity", pos:"noun", gender:null,
     note:"Sino-Korean. 演藝 (performing arts) + 人 (person).\nA person in the entertainment industry.",
     example:"A: 좋아하는 연예인이 있어?\nB: BTS 멤버들을 좋아해.",
     exampleSrc:"A: Do you have a favorite celebrity?\nB: I like the BTS members.",
     funFact:"Korean 연예인 culture is massive. Entertainment agencies like HYBE and SM train trainees for years before debut."},

    {type:"teach", trg:"연인", src:"lover, romantic partner", pos:"noun", gender:null,
     note:"Sino-Korean. 戀 (love) + 人 (person).\nA person in a romantic relationship.",
     example:"A: 저 두 사람은 연인 사이야?\nB: 응, 작년부터 사귀고 있대.",
     exampleSrc:"A: Are those two a couple?\nB: Yes, they have been dating since last year.",
     funFact:"연인 is more literary and romantic than 애인. Korean dramas use 연인 for that poetic, fateful-love feeling."},

    {type:"teach", trg:"연장", src:"extension; tools", pos:"noun", gender:null,
     note:"Two hanja: 延長 (extension) or 連裝 (tools).\nExtending time, or hand tools for work.",
     example:"A: 계약 연장을 요청했어요.\nB: 결과가 어떻게 됐어요?",
     exampleSrc:"A: I requested a contract extension.\nB: How did it turn out?",
     funFact:"연장전 (延長戰, overtime/extra time) in Korean sports is literally 'extension battle.' Every K-League fan knows it."},

    {type:"teach", trg:"연주", src:"musical performance, playing an instrument", pos:"noun", gender:null,
     note:"Sino-Korean. 演 (perform) + 奏 (play music).\nPlaying music, especially live.",
     example:"A: 피아노 연주가 정말 아름다웠어.\nB: 맞아, 감동적이었어.",
     exampleSrc:"A: The piano performance was really beautiful.\nB: Right, it was moving.",
     funFact:"연주회 (recital/concert) is a formal music event. Seoul's Sejong Center hosts world-class 연주회."},

    {type:"teach", trg:"연출", src:"directing, production, staging", pos:"noun", gender:null,
     note:"Sino-Korean. 演 (perform) + 出 (bring out).\nThe creative direction of a performance.",
     example:"A: 이 영화의 연출이 훌륭해.\nB: 감독이 누구야?",
     exampleSrc:"A: The direction of this movie is excellent.\nB: Who is the director?",
     funFact:"연출가 (director) is the mastermind. In Korean theater, the 연출 is as important as the actors."},

    {type:"teach", trg:"연출하다", src:"to direct, to produce, to stage", pos:"verb", gender:null,
     note:"연출 + 하다 (to do).\nActively directing or creating a production.",
     example:"A: 누가 이번 공연을 연출했어?\nB: 유명한 연출가가 맡았어.",
     exampleSrc:"A: Who directed this performance?\nB: A famous director took charge.",
     funFact:"연출하다 is also used figuratively: 분위기를 연출하다 (to create an atmosphere) for restaurants or events."},

    {type:"mc",
     q:"'연주'와 '연출'의 차이는?",
     opts:["연주는 악기 연주, 연출은 무대 기획","연주가 더 크다","연출이 음악이다","차이가 없다"],
     ans:"연주는 악기 연주, 연출은 무대 기획",
     hint:"One is about playing instruments, the other about directing and staging a production."},

    {type:"teach", trg:"연하다", src:"to be soft, to be light (color), to be tender", pos:"adj", gender:null,
     note:"Sino-Korean. 軟 (soft) + 하다.\nSoft texture, light color, or younger in age.",
     example:"A: 이 고기가 정말 연하다.\nB: 좋은 고기를 쓴 것 같아.",
     exampleSrc:"A: This meat is really tender.\nB: They must have used good quality meat.",
     funFact:"연하 남자 (younger boyfriend) and 연상 여자 (older girlfriend) describe age-gap relationships in Korean."},

    {type:"teach", trg:"연합", src:"union, alliance, coalition", pos:"noun", gender:null,
     note:"Sino-Korean. 聯 (link) + 合 (join).\nMultiple groups joining together.",
     example:"A: 학생 연합에서 행사를 열었어.\nB: 많은 학교가 참여했어?",
     exampleSrc:"A: The student union held an event.\nB: Did many schools participate?",
     funFact:"연합뉴스 (Yonhap News) is Korea's largest news wire service. UN is called 국제연합 in Korean."},

    {type:"teach", trg:"연휴", src:"consecutive holidays, long weekend", pos:"noun", gender:null,
     note:"Sino-Korean. 連 (consecutive) + 休 (rest).\nMultiple days off in a row.",
     example:"A: 이번 연휴에 여행 갈 거야?\nB: 응, 제주도에 가려고.",
     exampleSrc:"A: Are you going on a trip this holiday weekend?\nB: Yes, I am planning to go to Jeju Island.",
     funFact:"Korean 연휴 often create 민족 대이동 (great national migration) as millions travel home for Chuseok or Seollal."},

    {type:"teach", trg:"열기", src:"heat, fervor, enthusiasm", pos:"noun", gender:null,
     note:"Sino-Korean. 熱 (heat) + 氣 (energy).\nPhysical heat or passionate excitement.",
     example:"A: 공연장의 열기가 대단했어.\nB: 팬들이 정말 열정적이었지.",
     exampleSrc:"A: The fervor at the concert venue was incredible.\nB: The fans were really passionate.",
     funFact:"K-pop concert 열기 is world-famous. Fans create synchronized light shows with their 응원봉 (lightsticks)."},

    {type:"teach", trg:"열매", src:"fruit (of a tree), result", pos:"noun", gender:null,
     note:"Native Korean noun.\nThe fruit produced by a plant, or results of effort.",
     example:"A: 드디어 노력의 열매를 맺었어.\nB: 축하해! 정말 잘했어.",
     exampleSrc:"A: I have finally reaped the fruits of my labor.\nB: Congratulations! You did really well.",
     funFact:"열매를 맺다 (to bear fruit) is used both literally and as a metaphor for achieving results in Korean."},

    {type:"teach", trg:"열정", src:"passion, enthusiasm", pos:"noun", gender:null,
     note:"Sino-Korean. 熱 (heat) + 情 (feeling).\nBurning enthusiasm for something.",
     example:"A: 그 선생님은 교육에 대한 열정이 있어.\nB: 그래서 학생들이 좋아하는 거야.",
     exampleSrc:"A: That teacher has passion for education.\nB: That is why the students like them.",
     funFact:"열정 페이 (passion pay) is a controversial Korean term for unpaid work justified by 'passion.' Young workers protest it."},

    {type:"fb",
     s:"그 가수는 무대 위에서 {1}적으로 노래했다.",
     a:["열정"],
     opts:["열정","열기","연출","연합"],
     hint:"The burning enthusiasm and passion that a singer shows while performing on stage.",
     sSrc:"The singer sang {1}ately on stage."},

    {type:"teach", trg:"열중하다", src:"to be absorbed in, to be engrossed", pos:"verb", gender:null,
     note:"Sino-Korean. 熱中 (heated center) + 하다.\nBeing deeply focused on something.",
     example:"A: 게임에 너무 열중하지 마.\nB: 알겠어, 적당히 할게.",
     exampleSrc:"A: Do not get too absorbed in games.\nB: Okay, I will do it in moderation.",
     funFact:"열중하다 can be positive (일에 열중하다, absorbed in work) or a warning (너무 열중하지 마, do not overdo it)."},

    {type:"teach", trg:"열흘", src:"ten days", pos:"noun", gender:null,
     note:"Native Korean number word.\nThe native Korean way to say ten days.",
     example:"A: 열흘 동안 여행을 갔다 왔어.\nB: 오래 갔다 왔네!",
     exampleSrc:"A: I went on a trip for ten days.\nB: You were gone a long time!",
     funFact:"Korean has native words for day counts: 하루 (1), 이틀 (2), 사흘 (3)... up to 열흘 (10). Beyond 10, Sino-Korean is used."},

    {type:"teach", trg:"엷다", src:"to be thin, to be faint, to be pale", pos:"adj", gender:null,
     note:"Native Korean adjective.\nThinness of layers, or faintness of color/smell.",
     example:"A: 안개가 엷게 끼었어.\nB: 조금 있으면 걷히겠지.",
     exampleSrc:"A: A thin fog has settled.\nB: It will probably clear soon.",
     funFact:"엷다 is more poetic than 얇다. It describes translucent thinness: 엷은 미소 (a faint smile), 엷은 안개 (thin mist)."},

    {type:"teach", trg:"염려", src:"worry, concern", pos:"noun", gender:null,
     note:"Sino-Korean. 念 (think) + 慮 (consider).\nAnxious concern about something.",
     example:"A: 염려 마세요, 잘 될 거예요.\nB: 감사합니다, 안심이 되네요.",
     exampleSrc:"A: Please do not worry, it will be fine.\nB: Thank you, that is reassuring.",
     funFact:"염려 is more formal than 걱정 (worry). 염려 마세요 sounds more polished than 걱정 마세요."},

    {type:"teach", trg:"염려하다", src:"to worry, to be concerned", pos:"verb", gender:null,
     note:"염려 + 하다 (to do).\nActively feeling worried about something.",
     example:"A: 부모님이 건강을 많이 염려하세요.\nB: 감사한 일이지.",
     exampleSrc:"A: My parents worry a lot about health.\nB: That is something to be grateful for.",
     funFact:"염려하다 is respectful. When talking about an elder's worrying, 염려하시다 is more appropriate than 걱정하시다."},

    {type:"teach", trg:"엽서", src:"postcard", pos:"noun", gender:null,
     note:"Sino-Korean. 葉 (leaf) + 書 (writing).\nA card sent by mail, often from travel.",
     example:"A: 여행 가서 엽서 보내 줘.\nB: 알겠어, 예쁜 거 골라서 보낼게.",
     exampleSrc:"A: Send me a postcard from your trip.\nB: Got it, I will pick a pretty one and send it.",
     funFact:"Despite digital communication, Korean tourists still love sending 엽서 from travel destinations as souvenirs."},

    {type:"teach", trg:"연상하다", src:"to associate, to be reminded of", pos:"verb", gender:null,
     note:"Sino-Korean. 聯想 (linked thought) + 하다.\nMentally connecting one thing to another.",
     example:"A: 이 노래를 들으면 학창 시절이 연상돼.\nB: 나도 그래.",
     exampleSrc:"A: When I hear this song, it reminds me of school days.\nB: Me too.",
     funFact:"연상 게임 (association game) is a popular Korean variety show segment where contestants link words quickly."},

    {type:"mc",
     q:"'노력의 열매'는 무슨 뜻인가요?",
     opts:["운동을 하는 것","노력한 결과","과일을 키우는 것","나무를 심는 것"],
     ans:"노력한 결과",
     hint:"열매 (fruit) is used metaphorically here. What do you harvest from hard work?"},

    {type:"match", pairs:[
      {trg:"열정", src:"passion"},
      {trg:"열중하다", src:"to be absorbed in"},
      {trg:"염려", src:"worry"},
      {trg:"연예인", src:"celebrity"}
    ]}
  ]
};

export default LESSON_18;
