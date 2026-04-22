// Korean B2. Batch 6, Lesson 17: Connections and Performance
// Words: 연간, 연결, 연관, 연구실, 연구원, 연극, 연기되다, 연기자, 연기하다, 연두색, 연락, 연락처, 연락하다, 연령, 연말, 연상하다, 연설, 연속, 연애, (note: 역사학 in prev)

const LESSON_17 = {
  id:"kov2_b2b6_l17", title:"연결과 연기", icon:"🎭", xp:15, board:true,
  steps:[
    {type:"intro", title:"연결과 연기",
     desc:"Learn words about connections, performance, contact, and time periods. Many use the 連 (connect) and 演 (perform) hanja roots.",
     goals:["Master 20 words about connections, acting, and communication","Understand 連 compounds for linking and continuity","Use 演 compounds for performance and speech"]},

    {type:"teach", trg:"연간", src:"annual, yearly, per year", pos:"noun", gender:null,
     note:"Sino-Korean. 年 (year) + 間 (period).\nCovering or lasting one year.",
     example:"A: 연간 매출이 얼마예요?\nB: 약 50억 원이요.",
     exampleSrc:"A: What is the annual revenue?\nB: About 5 billion won.",
     funFact:"연간 is used in formal/business contexts. Casual speech uses 일 년에 (per year) or 매년 (every year)."},

    {type:"teach", trg:"연결", src:"connection, linking", pos:"noun", gender:null,
     note:"Sino-Korean. 連 (connect) + 結 (tie).\nJoining two things together.",
     example:"A: 인터넷 연결이 안 돼.\nB: 와이파이를 다시 켜 봐.",
     exampleSrc:"A: The internet connection is not working.\nB: Try turning the wifi back on.",
     funFact:"연결 is everywhere in tech Korean: 블루투스 연결 (Bluetooth connection), USB 연결, 네트워크 연결."},

    {type:"teach", trg:"연관", src:"connection, relation", pos:"noun", gender:null,
     note:"Sino-Korean. 連 (connect) + 關 (relate).\nA relationship or association between things.",
     example:"A: 이 두 사건은 연관이 있어.\nB: 어떤 연관인데?",
     exampleSrc:"A: These two incidents are connected.\nB: What kind of connection?",
     funFact:"연관 검색어 (related search terms) appear when you search on Korean portal sites like Naver."},

    {type:"teach", trg:"연구실", src:"research lab, professor's office", pos:"noun", gender:null,
     note:"Sino-Korean. 硏究 (research) + 室 (room).\nA room for academic research.",
     example:"A: 교수님 연구실이 어디예요?\nB: 3층 끝에 있어요.",
     exampleSrc:"A: Where is the professor's office?\nB: It is at the end of the third floor.",
     funFact:"In Korean universities, 연구실 is where graduate students spend most of their time working under professors."},

    {type:"teach", trg:"연구원", src:"researcher, research institute", pos:"noun", gender:null,
     note:"Sino-Korean. 硏究 (research) + 員 (member).\nA person who conducts research, or an institute.",
     example:"A: 연구원으로 일하고 있어요.\nB: 어떤 분야를 연구하세요?",
     exampleSrc:"A: I work as a researcher.\nB: What field do you research?",
     funFact:"Korean government-funded 연구원 (research institutes) like KAIST and KIST are top employers for scientists."},

    {type:"mc",
     q:"'연극'과 '영화'의 가장 큰 차이는?",
     opts:["무대에서 직접 공연한다","배우가 출연한다","대본이 있다","관객이 본다"],
     ans:"무대에서 직접 공연한다",
     hint:"The key difference is that one happens live on stage, while the other is filmed and shown on screen."},

    {type:"teach", trg:"연극", src:"theater, stage play", pos:"noun", gender:null,
     note:"Sino-Korean. 演 (perform) + 劇 (drama).\nLive dramatic performance on stage.",
     example:"A: 이번 주에 연극 보러 갈래?\nB: 좋아! 뭐 하는데?",
     exampleSrc:"A: Do you want to go see a play this week?\nB: Sure! What is showing?",
     funFact:"Daehangno (대학로) in Seoul is Korea's theater district, with hundreds of small 연극 venues."},

    {type:"teach", trg:"연기되다", src:"to be postponed, to be delayed", pos:"verb", gender:null,
     note:"Sino-Korean. 延期 (postpone) + 되다 (passive).\nAn event being moved to a later time.",
     example:"A: 회의가 내일로 연기됐대.\nB: 다행이다, 오늘 바빴거든.",
     exampleSrc:"A: They say the meeting was postponed to tomorrow.\nB: That is good, I was busy today.",
     funFact:"연기 means both 'postponement' (延期) and 'acting' (演技). Context and hanja distinguish them completely."},

    {type:"teach", trg:"연기자", src:"actor, performer", pos:"noun", gender:null,
     note:"Sino-Korean. 演技 (acting) + 者 (person).\nSomeone who acts in plays, films, or TV.",
     example:"A: 좋아하는 연기자가 누구야?\nB: 송강호 배우를 좋아해.",
     exampleSrc:"A: Who is your favorite actor?\nB: I like actor Song Kang-ho.",
     funFact:"연기자 is more formal than 배우 (actor). Award shows use 연기상 (acting award) and 연기대상 (grand prize)."},

    {type:"teach", trg:"연기하다", src:"to act, to perform; to postpone", pos:"verb", gender:null,
     note:"Two different meanings from different hanja.\n演技하다 (to act) vs 延期하다 (to postpone).",
     example:"A: 이 장면에서는 슬프게 연기해야 해.\nB: 알겠어, 한번 해 볼게.",
     exampleSrc:"A: In this scene, you need to act sadly.\nB: Got it, let me try.",
     funFact:"Korean actors say 연기를 하다 not 연기하다 in casual speech. The noun + 하다 split is common with Sino-Korean verbs."},

    {type:"teach", trg:"연두색", src:"yellow-green, light green", pos:"noun", gender:null,
     note:"연두 (tender bean) + 색 (color).\nThe fresh green of new spring leaves.",
     example:"A: 이 연두색 셔츠 어때?\nB: 봄에 입기 좋겠다.",
     exampleSrc:"A: How about this yellow-green shirt?\nB: It would be nice to wear in spring.",
     funFact:"연두색 is associated with new beginnings in Korea. Spring fashion often features this fresh, hopeful color."},

    {type:"teach", trg:"연락", src:"contact, communication", pos:"noun", gender:null,
     note:"Sino-Korean. 連 (connect) + 絡 (link).\nGetting in touch with someone.",
     example:"A: 연락 주셔서 감사합니다.\nB: 아니에요, 중요한 일이라서요.",
     exampleSrc:"A: Thank you for contacting me.\nB: Not at all, it was an important matter.",
     funFact:"연락처 (contact info) exchange is a key social ritual in Korea. KakaoTalk IDs have replaced phone numbers."},

    {type:"teach", trg:"연락처", src:"contact information", pos:"noun", gender:null,
     note:"연락 (contact) + 처 (place/point).\nPhone number, email, or messaging ID.",
     example:"A: 연락처를 알려 주시겠어요?\nB: 네, 카카오톡 아이디 드릴게요.",
     exampleSrc:"A: Could you give me your contact information?\nB: Yes, I will give you my KakaoTalk ID.",
     funFact:"In Korea, asking for 연락처 is the standard way to start professional and personal networking."},

    {type:"teach", trg:"연락하다", src:"to contact, to get in touch", pos:"verb", gender:null,
     note:"연락 + 하다 (to do).\nActively reaching out to someone.",
     example:"A: 나중에 연락할게.\nB: 응, 기다릴게.",
     exampleSrc:"A: I will contact you later.\nB: Okay, I will wait.",
     funFact:"연락할게 (I will contact you) vs 연락해 줘 (contact me). Korean carefully marks who initiates communication."},

    {type:"fb",
     s:"비가 와서 야외 행사가 다음 주로 {1}.",
     a:["연기됐어요"],
     opts:["연기됐어요","연결됐어요","연락됐어요","연관됐어요"],
     hint:"When an event is moved to a later date because of bad weather. Not cancelled, just pushed back.",
     sSrc:"Because of rain, the outdoor event was {1} to next week."},

    {type:"teach", trg:"연령", src:"age (formal)", pos:"noun", gender:null,
     note:"Sino-Korean. 年 (year) + 齡 (age).\nFormal term for a person's age.",
     example:"A: 지원 연령 제한이 있나요?\nB: 만 18세 이상이어야 합니다.",
     exampleSrc:"A: Is there an age limit for application?\nB: You must be at least 18 years old.",
     funFact:"연령 is formal, unlike 나이 (age, casual). Job postings use 연령 제한 (age restriction) for eligibility."},

    {type:"teach", trg:"연말", src:"year-end, end of year", pos:"noun", gender:null,
     note:"Sino-Korean. 年 (year) + 末 (end).\nThe closing period of a calendar year.",
     example:"A: 연말에 뭐 할 계획이야?\nB: 가족들이랑 모여서 저녁 먹을 거야.",
     exampleSrc:"A: What are your plans for year-end?\nB: I will gather with family for dinner.",
     funFact:"연말 in Korea means 송년회 (year-end parties) everywhere. Companies, friend groups, and families all celebrate."},

    {type:"teach", trg:"연설", src:"speech, address", pos:"noun", gender:null,
     note:"Sino-Korean. 演 (perform) + 說 (speak).\nA formal public speech.",
     example:"A: 대통령의 연설을 봤어?\nB: 응, 인상적이었어.",
     exampleSrc:"A: Did you watch the president's speech?\nB: Yes, it was impressive.",
     funFact:"연설 vs 발표: 연설 is a formal address to an audience, while 발표 is a presentation or announcement."},

    {type:"teach", trg:"연속", src:"consecutive, in a row", pos:"noun", gender:null,
     note:"Sino-Korean. 連 (connect) + 續 (continue).\nFollowing one after another without a break.",
     example:"A: 3연속 우승을 했어!\nB: 대단하다!",
     exampleSrc:"A: They won three times in a row!\nB: Amazing!",
     funFact:"Korean sports media loves 연속: N연승 (N consecutive wins), 연속 출장 (consecutive appearances)."},

    {type:"teach", trg:"연애", src:"romantic relationship, dating", pos:"noun", gender:null,
     note:"Sino-Korean. 戀 (love) + 愛 (love).\nThe state of being in a romantic relationship.",
     example:"A: 요즘 연애 중이야?\nB: 아니, 요즘은 혼자가 편해.",
     exampleSrc:"A: Are you seeing someone these days?\nB: No, being alone is comfortable these days.",
     funFact:"연애, 결혼, 출산 (dating, marriage, childbirth) are the 'three things' young Koreans are giving up on (삼포세대)."},

    {type:"mc",
     q:"'연기되다'와 '연기하다'가 같은 뜻일 때는?",
     opts:["연결할 때","일정을 미룰 때","무대에서 공연할 때","연락할 때"],
     ans:"일정을 미룰 때",
     hint:"Both words can mean postponing when they use the 延期 hanja, not the acting (演技) hanja."},

    {type:"match", pairs:[
      {trg:"연결", src:"connection"},
      {trg:"연극", src:"theater play"},
      {trg:"연설", src:"speech"},
      {trg:"연애", src:"dating"}
    ]}
  ]
};

export default LESSON_17;
