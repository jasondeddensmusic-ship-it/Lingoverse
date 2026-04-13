// Korean B2 — Batch 3, Lesson 11: Nation and Society
// Words: 국물, 국민적, 국사, 국산, 국수, 국어, 국왕, 국적, 국제선, 국제적, 국제화, 국회, 군데, 군사, 굳다, 굳어지다, 굳히다, 굶다, 굽히다, 궁극적

const LESSON_11 = {
  id:"kov2_b2b3_l11", title:"국가와 국민", icon:"🏛️", xp:15, board:true,
  steps:[
    {type:"intro", title:"국가와 국민",
     desc:"Master vocabulary about national identity, governance, and determination. These words are essential for discussing politics, society, and current events.",
     goals:["Master 20 words about national institutions and resolve","Understand compounds with 국 (country) and 군 (military)","Express firmness and determination in Korean"]},

    {type:"teach", trg:"국물", src:"broth, soup stock", pos:"noun", gender:null,
     note:"국 (soup) + 물 (water).\nThe liquid base of Korean soups and stews.",
     example:"A: 이 국물 맛이 정말 좋다.\nB: 멸치로 우려낸 거야.",
     exampleSrc:"A: This broth tastes really good.\nB: It was made by simmering anchovies.",
     funFact:"The slang 국물도 없다 (there is no broth) means 'not a chance' or 'forget about it.'"},

    {type:"teach", trg:"국민적", src:"national (relating to the people)", pos:"noun", gender:null,
     note:"국민 (citizens) + 적 (的, suffix).\nRelating to the entire population of a nation.",
     example:"A: 이 문제는 국민적 관심사야.\nB: 뉴스에서 매일 다루고 있어.",
     exampleSrc:"A: This issue is a matter of national interest.\nB: The news covers it every day.",
     funFact:"국민적 영웅 (national hero) is a title reserved for figures like Admiral Yi Sun-sin or footballer Son Heung-min."},

    {type:"teach", trg:"국사", src:"national history", pos:"noun", gender:null,
     note:"Sino-Korean. 國 (country) + 史 (history).\nThe history of one's own nation.",
     example:"A: 국사 시험이 다음 주야.\nB: 조선 시대 부분을 열심히 공부해.",
     exampleSrc:"A: The national history exam is next week.\nB: Study the Joseon Dynasty section hard.",
     funFact:"From Hanja 國史. Korean national history education is considered vital for national identity and is a required subject."},

    {type:"teach", trg:"국산", src:"domestically made, domestic product", pos:"noun", gender:null,
     note:"Sino-Korean. 國 (country) + 産 (produce).\nMade within the country.",
     example:"A: 이 차는 국산이야 외제야?\nB: 국산이야, 현대 차야.",
     exampleSrc:"A: Is this car domestic or imported?\nB: It is domestic, a Hyundai.",
     funFact:"From Hanja 國産. 국산품 애용 (love domestic products) campaigns were huge in Korea during the 1970s-80s economic growth era."},

    {type:"teach", trg:"국수", src:"noodles", pos:"noun", gender:null,
     note:"Sino-Korean. 麵 was replaced by native usage.\nThin wheat or buckwheat noodles.",
     example:"A: 오늘 점심에 국수 먹을까?\nB: 좋아, 잔치국수가 먹고 싶어.",
     exampleSrc:"A: Shall we eat noodles for lunch today?\nB: Sure, I want to eat banquet noodles.",
     funFact:"At Korean weddings, guests ask 언제 국수 먹여 줄 거야? (When will you feed us noodles?) meaning 'When will you get married?'"},

    {type:"mc",
     q:"한국에서 '국수 먹여 줄 거야?'라는 질문의 실제 뜻은?",
     opts:["언제 결혼할 거냐는 의미","맛있는 음식을 만들어 달라는 의미","식당을 추천해 달라는 의미","요리를 배우고 싶다는 의미"],
     ans:"언제 결혼할 거냐는 의미",
     hint:"Noodles are traditionally served at Korean weddings, so this question is really about marriage."},

    {type:"teach", trg:"국어", src:"Korean language (as school subject)", pos:"noun", gender:null,
     note:"Sino-Korean. 國 (country) + 語 (language).\nThe national language, specifically as an academic subject.",
     example:"A: 국어 시간에 시를 배웠어.\nB: 어떤 시인의 작품이었어?",
     exampleSrc:"A: We learned poetry in Korean class.\nB: Which poet's work was it?",
     funFact:"From Hanja 國語. In school, 국어 covers Korean literature, grammar, and composition. Outside school, 한국어 is used instead."},

    {type:"teach", trg:"국왕", src:"king, monarch", pos:"noun", gender:null,
     note:"Sino-Korean. 國 (country) + 王 (king).\nThe ruler of a kingdom.",
     example:"A: 조선의 마지막 국왕은 누구야?\nB: 순종이야.",
     exampleSrc:"A: Who was the last king of Joseon?\nB: It was Sunjong.",
     funFact:"From Hanja 國王. Korea had a monarchy for over 4,000 years until the Joseon dynasty ended in 1910."},

    {type:"teach", trg:"국적", src:"nationality, citizenship", pos:"noun", gender:null,
     note:"Sino-Korean. 國 (country) + 籍 (register).\nOne's legal belonging to a nation.",
     example:"A: 국적이 어디세요?\nB: 한국 국적입니다.",
     exampleSrc:"A: What is your nationality?\nB: I have Korean nationality.",
     funFact:"From Hanja 國籍. Korea traditionally did not allow dual citizenship, but recent laws permit it in limited cases."},

    {type:"teach", trg:"국제선", src:"international flight/line", pos:"noun", gender:null,
     note:"국제 (international) + 선 (線, line).\nAirline routes between countries.",
     example:"A: 국제선 탑승구가 어디예요?\nB: 3층으로 올라가세요.",
     exampleSrc:"A: Where is the international departure gate?\nB: Please go up to the third floor.",
     funFact:"From Hanja 國際線. Incheon International Airport consistently ranks among the world's best for international service."},

    {type:"fb",
     s:"그 사람의 {1}은 미국이지만 한국에서 오래 살았다.",
     a:["국적"],
     opts:["국적","국사","국산","국어"],
     hint:"This word refers to the country where a person holds legal citizenship.",
     sSrc:"That person's {1} is American, but they have lived in Korea for a long time."},

    {type:"teach", trg:"국제적", src:"international", pos:"noun", gender:null,
     note:"국제 (international) + 적 (的, suffix).\nHaving worldwide scope or significance.",
     example:"A: 이 회의는 국제적으로 중요해.\nB: 많은 나라에서 참가하거든.",
     exampleSrc:"A: This conference is internationally important.\nB: Many countries are participating.",
     funFact:"국제적 명성 (international fame) is a phrase commonly used about Korean entertainment and technology achievements."},

    {type:"teach", trg:"국제화", src:"internationalization, globalization", pos:"noun", gender:null,
     note:"국제 (international) + 화 (化, -ization).\nThe process of becoming international.",
     example:"A: 한국 기업들의 국제화가 빠르게 진행되고 있어.\nB: 삼성, 현대가 대표적이지.",
     exampleSrc:"A: The internationalization of Korean companies is progressing rapidly.\nB: Samsung and Hyundai are representative examples.",
     funFact:"From Hanja 國際化. The -화 suffix works like English '-ization': 세계화 (globalization), 도시화 (urbanization)."},

    {type:"teach", trg:"국회", src:"National Assembly, parliament", pos:"noun", gender:null,
     note:"Sino-Korean. 國 (country) + 會 (meeting).\nThe legislative body of the nation.",
     example:"A: 국회에서 새 법안을 통과시켰어.\nB: 어떤 내용의 법이야?",
     exampleSrc:"A: The National Assembly passed a new bill.\nB: What is the law about?",
     funFact:"From Hanja 國會. Korea's National Assembly meets in Yeouido, Seoul. 국회의원 means a member of parliament."},

    {type:"teach", trg:"군데", src:"place (counter for locations)", pos:"noun", gender:null,
     note:"Native Korean bound noun.\nA counting unit for places or spots.",
     example:"A: 몇 군데를 방문했어?\nB: 세 군데를 다녀왔어.",
     exampleSrc:"A: How many places did you visit?\nB: I went to three places.",
     funFact:"군데 is one of Korean's many specific counters. Unlike 곳 (general place), 군데 specifically counts locations."},

    {type:"teach", trg:"군사", src:"military, military affairs", pos:"noun", gender:null,
     note:"Sino-Korean. 軍 (army) + 事 (affairs).\nRelating to armed forces and defense.",
     example:"A: 그 지역은 군사 시설이 있어.\nB: 그래서 민간인은 출입이 안 되는 거야.",
     exampleSrc:"A: That area has military facilities.\nB: That is why civilians cannot enter.",
     funFact:"From Hanja 軍事. Korea maintains one of the world's largest standing armies due to the ongoing division with the North."},

    {type:"mc",
     q:"'국회'의 역할로 맞는 것은?",
     opts:["법을 만들고 통과시키는 것","범죄자를 재판하는 것","군대를 지휘하는 것","외국과 무역하는 것"],
     ans:"법을 만들고 통과시키는 것",
     hint:"This institution is the legislative body, where elected representatives create and pass laws."},

    {type:"teach", trg:"굳다", src:"to be firm, to be hard, to solidify", pos:"adj", gender:null,
     note:"Native Korean adjective.\nDescribes something becoming solid or resolute.",
     example:"A: 시멘트가 굳었어.\nB: 이제 위에 올라가도 돼.",
     exampleSrc:"A: The cement has hardened.\nB: Now you can step on it.",
     funFact:"Also used figuratively: 결심이 굳다 (one's resolve is firm), 표정이 굳다 (expression stiffens)."},

    {type:"teach", trg:"굳어지다", src:"to become hardened, to solidify", pos:"verb", gender:null,
     note:"굳다 (firm) + 어지다 (become).\nThe gradual process of becoming solid.",
     example:"A: 풀이 마르면서 굳어졌어.\nB: 이제 떼기 힘들겠다.",
     exampleSrc:"A: The glue dried and hardened.\nB: It will be hard to remove now.",
     funFact:"편견이 굳어지다 (prejudices solidify) describes how stereotypes become entrenched over time."},

    {type:"teach", trg:"굳히다", src:"to harden, to strengthen, to firm up", pos:"verb", gender:null,
     note:"굳다 (firm) + 히다 (causative).\nTo make something firmer or more resolute.",
     example:"A: 결심을 굳히고 출발했어.\nB: 대단하다, 용기가 있네.",
     exampleSrc:"A: I firmed up my resolve and departed.\nB: Impressive, you have courage.",
     funFact:"The causative chain: 굳다 (be firm) > 굳어지다 (become firm) > 굳히다 (make firm). Korean marks these distinctions precisely."},

    {type:"teach", trg:"굶다", src:"to starve, to go hungry, to skip a meal", pos:"verb", gender:null,
     note:"Native Korean verb.\nTo go without food, voluntarily or not.",
     example:"A: 아침을 또 굶었어?\nB: 시간이 없어서 못 먹었어.",
     exampleSrc:"A: Did you skip breakfast again?\nB: I did not have time to eat.",
     funFact:"끼니를 굶다 (to skip a meal) is considered very unhealthy in Korean culture, where three meals daily is the standard."},

    {type:"teach", trg:"굽히다", src:"to bend, to bow, to yield", pos:"verb", gender:null,
     note:"굽다 (to be bent) + 히다 (causative).\nTo physically bend or metaphorically compromise.",
     example:"A: 허리를 굽히고 인사해야 해.\nB: 한국에서는 예의가 중요하니까.",
     exampleSrc:"A: You need to bow by bending your waist.\nB: Because politeness is important in Korea.",
     funFact:"소신을 굽히지 않다 (to not bend one's convictions) is admired in Korean culture as a sign of integrity."},

    {type:"teach", trg:"궁극적", src:"ultimate, final", pos:"noun", gender:null,
     note:"Sino-Korean. 窮 (extreme) + 極 (ultimate) + 的 (suffix).\nThe absolute final or ultimate state.",
     example:"A: 우리의 궁극적인 목표는 뭐야?\nB: 모든 학생이 행복한 학교를 만드는 거야.",
     exampleSrc:"A: What is our ultimate goal?\nB: To create a school where all students are happy.",
     funFact:"From Hanja 窮極的. A formal, literary word. 궁극적으로 (ultimately) is a favorite connector in academic writing."},

    {type:"match", pairs:[
      {trg:"국물", src:"broth"},
      {trg:"굶다", src:"to starve"},
      {trg:"군사", src:"military affairs"},
      {trg:"궁극적", src:"ultimate"}
    ]}
  ]
};
export default LESSON_11;
