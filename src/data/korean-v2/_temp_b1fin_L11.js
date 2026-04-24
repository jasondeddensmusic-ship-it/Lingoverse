// Korean B1 Final Gap - Lesson 11: Family & Youth
const LESSON_11 = {
  id:"kov2_b1fin_l11", title:"가족과 청춘", icon:"👨‍👩‍👧‍👦", xp:15, board:true,
  steps:[
    {type:"intro", title:"Family & Youth",
     desc:"Learn vocabulary for family relationships, youth, growing up, and daily home life. These words help discuss personal life, childhood, and domestic routines.",
     goals:["Learn 20 words about family, youth, and home life","Discuss growing up and family relationships","Describe everyday home activities and objects"]},

    {type:"teach", trg:"청년", src:"young adult, youth", pos:"noun", gender:null,
     note:"Sino-Korean (靑年). 청 (靑) = blue/green/young, 년 (年) = year.",
     example:"A: 청년 실업 문제가 심각해요?\nB: 네, 많은 청년들이 일자리를 찾고 있어요.",
     exampleSrc:"A: Is the youth unemployment problem serious?\nB: Yes, many young adults are looking for jobs.",
     funFact:"청년 refers to people roughly 19-34 years old. Korea has 청년 정책 (youth policies) specifically designed for this age group."},

    {type:"teach", trg:"청소년", src:"teenager, adolescent", pos:"noun", gender:null,
     note:"Sino-Korean (靑少年). 청 (靑) = young, 소 (少) = few/young, 년 (年) = year.",
     example:"A: 이 영화는 청소년 관람불가예요?\nB: 아니요, 청소년도 볼 수 있어요.",
     exampleSrc:"A: Is this movie restricted for teenagers?\nB: No, teenagers can watch it too.",
     funFact:"청소년 covers ages 13-18. Korea has strict 청소년 protection laws: no alcohol, no cigarettes, and curfews at internet cafes after midnight."},

    {type:"teach", trg:"젊은이", src:"young person, youth", pos:"noun", gender:null,
     note:"젊다 (young) + 은이 (person suffix). A young person in general.",
     example:"A: 요즘 젊은이들은 결혼을 늦게 해요.\nB: 맞아요, 옛날과 많이 달라요.",
     exampleSrc:"A: Young people these days marry late.\nB: Right, it's very different from the old days.",
     funFact:"젊은이 is often used by older speakers referring to the younger generation. It can carry a slight generational gap nuance."},

    {type:"teach", trg:"형님", src:"older brother (male's, honorific)", pos:"noun", gender:null,
     note:"형 (older brother) + 님 (honorific suffix). Respectful address.",
     example:"A: 형님, 오랜만이에요!\nB: 그래, 잘 지냈어?",
     exampleSrc:"A: Brother, it's been a long time!\nB: Yeah, have you been well?",
     funFact:"형님 is also used by men addressing older male friends respectfully, not just biological brothers. In Korean gangs (as seen in movies), 형님 is a loyalty term."},

    {type:"teach", trg:"형제", src:"brothers, siblings", pos:"noun", gender:null,
     note:"Sino-Korean (兄弟). 형 (兄) = elder brother, 제 (弟) = younger brother.",
     example:"A: 형제가 있어요?\nB: 네, 형이 한 명 있어요.",
     exampleSrc:"A: Do you have siblings?\nB: Yes, I have one older brother.",
     funFact:"형제 literally means brothers but is also used loosely for siblings in general. For sisters, 자매 (姉妹) is the specific term."},

    {type:"fb",
     s:"요즘 {1} 실업률이 높아요.",
     a:["청년"],
     opts:["청년","청소년","젊은이","형제"],
     hint:"This word specifically refers to young adults roughly 19-34 years old.",
     sSrc:"The {1} unemployment rate is high these days."},

    {type:"teach", trg:"친척", src:"relative, extended family", pos:"noun", gender:null,
     note:"Sino-Korean (親戚). Family members beyond the immediate household.",
     example:"A: 명절에 친척을 만나요?\nB: 네, 설날에 친척이 다 모여요.",
     exampleSrc:"A: Do you meet relatives on holidays?\nB: Yes, all relatives gather on Lunar New Year.",
     funFact:"Korean holidays like Seollal and Chuseok are 친척 gathering times. These reunions involve ancestral rites, special foods, and sometimes awkward questions from relatives."},

    {type:"teach", trg:"자식", src:"one's children, offspring", pos:"noun", gender:null,
     note:"Sino-Korean (子息). Parents' word for their own children.",
     example:"A: 자식이 몇 명이에요?\nB: 아들 하나, 딸 하나 있어요.",
     exampleSrc:"A: How many children do you have?\nB: I have one son and one daughter.",
     funFact:"자식 is used by parents talking about their own children. The saying 자식 이기는 부모 없다 means 'no parent can win against their child' (parents always give in)."},

    {type:"teach", trg:"이웃", src:"neighbor", pos:"noun", gender:null,
     note:"Native Korean noun. People living nearby.",
     example:"A: 이웃과 사이가 좋아요?\nB: 네, 우리 이웃은 친절해요.",
     exampleSrc:"A: Do you get along with your neighbors?\nB: Yes, our neighbors are kind.",
     funFact:"The Korean proverb 먼 친척보다 가까운 이웃이 낫다 means 'a nearby neighbor is better than a distant relative.' Community bonds matter."},

    {type:"teach", trg:"주부", src:"homemaker, housewife", pos:"noun", gender:null,
     note:"Sino-Korean (主婦). 주 (主) = main, 부 (婦) = woman/wife.",
     example:"A: 주부도 바쁘죠?\nB: 네, 하루 종일 할 일이 많아요.",
     exampleSrc:"A: Homemakers are busy too, right?\nB: Yes, there's a lot to do all day.",
     funFact:"전업 주부 (full-time homemaker) numbers are declining in Korea. Modern 주부 often combine homemaking with part-time work or online businesses."},

    {type:"teach", trg:"저희", src:"we, our (humble)", pos:"pron", gender:null,
     note:"Humble form of 우리. Used when speaking to superiors or in service.",
     example:"A: 저희 가게에 오신 것을 환영합니다.\nB: 감사합니다.",
     exampleSrc:"A: Welcome to our store.\nB: Thank you.",
     funFact:"저희 is the polite version of 우리 (we/our). Service staff always say 저희 가게, 저희 회사. Using 우리 in formal contexts would be too casual."},

    {type:"match", pairs:[
      {trg:"친척", src:"relative"},
      {trg:"자식", src:"one's children"},
      {trg:"이웃", src:"neighbor"},
      {trg:"주부", src:"homemaker"},
      {trg:"저희", src:"we (humble)"}
    ]},

    {type:"teach", trg:"자랑하다", src:"to boast, to show off, to be proud of", pos:"verb", gender:null,
     note:"Native Korean verb. Can be positive (pride) or negative (bragging).",
     example:"A: 아이가 상을 받았어요? 자랑스럽겠어요!\nB: 네, 정말 자랑스러워요.",
     exampleSrc:"A: Your child won a prize? You must be proud!\nB: Yes, I'm really proud.",
     funFact:"자랑 can be positive: 자랑스럽다 (proud of). But 자랑하다 (to brag) can be negative. Koreans value humility, so excessive 자랑 is frowned upon."},

    {type:"teach", trg:"자라다", src:"to grow up, to be raised", pos:"verb", gender:null,
     note:"Native Korean verb. Growing from young to adult, or plants growing.",
     example:"A: 어디에서 자랐어요?\nB: 부산에서 자랐어요.",
     exampleSrc:"A: Where did you grow up?\nB: I grew up in Busan.",
     funFact:"어디에서 자랐어요? (Where did you grow up?) is a common getting-to-know-you question in Korea. Your hometown shapes your dialect and identity."},

    {type:"teach", trg:"키우다", src:"to raise, to grow, to rear", pos:"verb", gender:null,
     note:"Causative of 크다 (to be big). Making something grow bigger.",
     example:"A: 강아지를 키워요?\nB: 네, 작은 강아지를 키우고 있어요.",
     exampleSrc:"A: Do you raise a dog?\nB: Yes, I'm raising a small puppy.",
     funFact:"키우다 works for children (아이를 키우다), pets (고양이를 키우다), and plants (화분을 키우다). It means nurturing something to grow."},

    {type:"teach", trg:"체육", src:"physical education, sports", pos:"noun", gender:null,
     note:"Sino-Korean (體育). 체 (體) = body, 육 (育) = nurture/education.",
     example:"A: 체육 시간에 뭐 해요?\nB: 오늘은 축구를 해요.",
     exampleSrc:"A: What do you do in PE class?\nB: Today we play soccer.",
     funFact:"체육 is a required subject in Korean schools. Korea excels in 체육: archery, taekwondo, short track speed skating, and baseball are national strengths."},

    {type:"teach", trg:"입구", src:"entrance, entry", pos:"noun", gender:null,
     note:"Sino-Korean (入口). 입 (入) = enter, 구 (口) = mouth/opening.",
     example:"A: 입구가 어디예요?\nB: 저쪽에 입구가 있어요.",
     exampleSrc:"A: Where is the entrance?\nB: The entrance is over there.",
     funFact:"입구 (entrance) and 출구 (exit) are an essential pair. Every Korean building, subway, and parking lot has clearly marked 입구 and 출구 signs."},

    {type:"mc",
     q:"건물에 들어가는 곳을 뭐라고 해요?",
     opts:["입구","주택","주변","출구"],
     ans:"입구",
     hint:"This word means the opening or doorway where you enter a place."},

    {type:"teach", trg:"주머니", src:"pocket", pos:"noun", gender:null,
     note:"Native Korean noun. The pocket of clothing.",
     example:"A: 열쇠가 주머니에 있어요?\nB: 잠깐만요, 주머니를 볼게요.",
     exampleSrc:"A: Are the keys in your pocket?\nB: Wait, I'll look in my pocket.",
     funFact:"주머니 사정 (pocket situation) is a colloquial way to say 'financial situation.' It is a casual, slightly humorous way to talk about money."},

    {type:"teach", trg:"주먹", src:"fist", pos:"noun", gender:null,
     note:"Native Korean noun. A closed hand.",
     example:"A: 주먹을 쥐고 있어요?\nB: 긴장해서 주먹을 쥐게 돼요.",
     exampleSrc:"A: Are you clenching your fists?\nB: I clench my fists because I'm nervous.",
     funFact:"주먹밥 (fist rice) is Korean rice balls, shaped by squeezing rice in your fist. It is a beloved comfort food and hiking snack."},

    {type:"teach", trg:"이불", src:"blanket, bedding, duvet", pos:"noun", gender:null,
     note:"Native Korean noun. The covering used for sleeping.",
     example:"A: 이불이 따뜻해요?\nB: 네, 겨울 이불이라서 아주 따뜻해요.",
     exampleSrc:"A: Is the blanket warm?\nB: Yes, it's a winter blanket so it's very warm.",
     funFact:"Korean 이불 culture includes seasonal changes: thin summer 이불 and thick winter 이불. Traditional Korean sleeping involves laying 이불 on heated ondol floors."},

    {type:"teach", trg:"잠들다", src:"to fall asleep", pos:"verb", gender:null,
     note:"Compound: 잠 (sleep) + 들다 (enter). Entering sleep.",
     example:"A: 아이가 잠들었어요?\nB: 네, 방금 잠들었어요.",
     exampleSrc:"A: Has the child fallen asleep?\nB: Yes, they just fell asleep.",
     funFact:"잠들다 is poetic: literally 'entering sleep.' It is also used euphemistically for death: 영원히 잠들다 (to sleep forever)."},

    {type:"teach", trg:"잠시", src:"a moment, briefly", pos:"noun", gender:null,
     note:"Sino-Korean (暫時). A short period of time.",
     example:"A: 잠시만 기다려 주세요.\nB: 네, 천천히 하세요.",
     exampleSrc:"A: Please wait a moment.\nB: Okay, take your time.",
     funFact:"잠시만요 (just a moment) is one of the most useful Korean phrases. It buys time politely in any situation."},

    {type:"fb",
     s:"아기가 {1}을 덮고 잠들었어요.",
     a:["이불"],
     opts:["이불","주머니","주먹","입구"],
     hint:"This is the warm covering you put over yourself when sleeping.",
     sSrc:"The baby covered up with a {1} and fell asleep."}
  ]
};
export default LESSON_11;
