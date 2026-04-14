// Korean B2 — Batch 5, Lesson 14: Elections and Persuasion
// Words: 선거, 선명하다, 선언하다, 선원, 선장, 선전, 선정하다, 선진, 선진국, 선풍기, 선호하다, 설거지, 설날, 설득하다, 설렁탕, 설립하다, 설명되다, 설문, 설사, 설치

const LESSON_14 = {
  id:"kov2_b2b5_l14", title:"선거와 설득", icon:"🗳️", xp:15, board:true,
  steps:[
    {type:"intro", title:"선거와 설득",
     desc:"Learn vocabulary about elections, declarations, advanced nations, and persuasion. This lesson covers civic, culinary, and institutional vocabulary at the B2 level.",
     goals:["Master 20 words about elections, institutions, and daily life","Understand Sino-Korean compounds with 先/選 (first/select)","Use formal vocabulary for civic and institutional contexts"]},

    {type:"teach", trg:"선거", src:"election", pos:"noun", gender:null,
     note:"Sino-Korean. 選 (select) + 擧 (raise).\nThe process of choosing leaders by vote.",
     example:"A: 다음 달에 선거가 있어.\nB: 투표하러 꼭 가야지.",
     exampleSrc:"A: There is an election next month.\nB: I must go to vote.",
     funFact:"Korea's presidential elections are held every 5 years. Voter turnout often exceeds 75%, among the highest globally."},

    {type:"teach", trg:"선명하다", src:"to be vivid, to be clear", pos:"adj", gender:null,
     note:"Sino-Korean. 鮮 (fresh) + 明 (bright).\nClearly visible or sharply defined.",
     example:"A: 이 사진은 색이 정말 선명하다.\nB: 새 카메라로 찍었거든.",
     exampleSrc:"A: The colors in this photo are really vivid.\nB: I took it with a new camera.",
     funFact:"선명한 화질 (vivid image quality) is a key selling point for Korean TV brands like Samsung and LG."},

    {type:"teach", trg:"선언하다", src:"to declare, to proclaim", pos:"verb", gender:null,
     note:"Sino-Korean. 宣 (proclaim) + 言 (speak) + 하다.\nFormally stating something publicly.",
     example:"A: 대통령이 비상사태를 선언했어.\nB: 무슨 일이 생긴 거야?",
     exampleSrc:"A: The president declared a state of emergency.\nB: What happened?",
     funFact:"독립 선언하다 (to declare independence). Korea's Independence Declaration of March 1, 1919 is a defining moment."},

    {type:"teach", trg:"선원", src:"sailor, crew member", pos:"noun", gender:null,
     note:"Sino-Korean. 船 (ship) + 員 (member).\nA person who works on a ship.",
     example:"A: 선원 생활이 힘들다고 들었어.\nB: 몇 달씩 바다에서 지내야 한대.",
     exampleSrc:"A: I heard life as a sailor is hard.\nB: They say you spend months at sea.",
     funFact:"Korea has a significant maritime industry. Busan is a major port, and many 선원 work on container ships."},

    {type:"teach", trg:"선장", src:"captain (of a ship)", pos:"noun", gender:null,
     note:"Sino-Korean. 船 (ship) + 長 (leader).\nThe commanding officer of a vessel.",
     example:"A: 선장이 승객의 안전을 책임져야 해.\nB: 당연하지, 그게 선장의 역할이야.",
     exampleSrc:"A: The captain must be responsible for passenger safety.\nB: Of course, that is the captain's role.",
     funFact:"The Sewol ferry disaster (2014) brought intense scrutiny on 선장 responsibilities in Korea."},

    {type:"fb",
     s:"다음 주에 {1}가 있으니 꼭 투표하세요.",
     a:["선거"],
     opts:["선거","선전","선풍기","선언"],
     hint:"Which word means election, the civic process where people vote to choose leaders?",
     sSrc:"There is an {1} next week, so please make sure to vote."},

    {type:"teach", trg:"선전", src:"propaganda, publicity, good performance", pos:"noun", gender:null,
     note:"Sino-Korean. 宣 (proclaim) + 傳 (transmit).\nSpreading information, or performing well.",
     example:"A: 한국 선수들이 올림픽에서 선전했어.\nB: 금메달도 많이 땄지?",
     exampleSrc:"A: Korean athletes performed well at the Olympics.\nB: They won many gold medals too, right?",
     funFact:"선전 means both propaganda (negative) and performing well (positive). 선전하다 in sports is always positive."},

    {type:"teach", trg:"선정하다", src:"to select, to designate", pos:"verb", gender:null,
     note:"Sino-Korean. 選 (select) + 定 (decide) + 하다.\nFormally choosing from candidates.",
     example:"A: 올해의 도서로 선정됐어.\nB: 축하해! 대단하다.",
     exampleSrc:"A: It was selected as the book of the year.\nB: Congratulations! That is impressive.",
     funFact:"선정 is used for formal selections: 우수 기업 선정 (excellent company selection), 후보 선정 (candidate selection)."},

    {type:"teach", trg:"선진", src:"advanced, developed", pos:"noun", gender:null,
     note:"Sino-Korean. 先 (first/ahead) + 進 (advance).\nBeing at the forefront of development.",
     example:"A: 선진 기술을 도입해야 해.\nB: 어떤 분야의 기술이야?",
     exampleSrc:"A: We need to introduce advanced technology.\nB: In what field?",
     funFact:"선진 is almost always used as a modifier: 선진국, 선진 기술, 선진 문화. It implies being ahead of others."},

    {type:"teach", trg:"선진국", src:"developed country, advanced nation", pos:"noun", gender:null,
     note:"선진 (advanced) + 국 (country).\nA country with high economic and social development.",
     example:"A: 한국은 선진국이 됐어.\nB: 경제, 기술, 문화 모두 발전했지.",
     exampleSrc:"A: Korea has become a developed country.\nB: The economy, technology, and culture have all developed.",
     funFact:"Korea was reclassified as a 선진국 by the UN in 2021, the first country to transition from 'developing.'"},

    {type:"teach", trg:"선풍기", src:"electric fan", pos:"noun", gender:null,
     note:"Sino-Korean. 旋風機 (rotating wind machine).\nAn electric fan for cooling.",
     example:"A: 선풍기를 틀어도 될까?\nB: 응, 너무 덥다.",
     exampleSrc:"A: Can I turn on the fan?\nB: Yes, it is too hot.",
     funFact:"Korea has the unique urban legend of 'fan death' (선풍기 사망설), the belief that sleeping with a fan on can be fatal."},

    {type:"teach", trg:"선호하다", src:"to prefer", pos:"verb", gender:null,
     note:"Sino-Korean. 選 (select) + 好 (like) + 하다.\nTo favor one thing over another.",
     example:"A: 어떤 음식을 선호하세요?\nB: 한식을 선호합니다.",
     exampleSrc:"A: What food do you prefer?\nB: I prefer Korean food.",
     funFact:"선호도 (preference level) is measured in Korean consumer surveys. 브랜드 선호도 means brand preference."},

    {type:"mc",
     q:"여러 가지 중에서 하나를 더 좋아하는 것을 표현하는 동사는?",
     opts:["선호하다","선전하다","선언하다","선정하다"],
     ans:"선호하다",
     hint:"Which verb means to prefer, combining the characters for 'select' and 'like'?"},

    {type:"teach", trg:"설거지", src:"dishwashing", pos:"noun", gender:null,
     note:"Native Korean word.\nThe task of washing dishes after meals.",
     example:"A: 설거지는 내가 할게.\nB: 고마워, 요리는 내가 했으니까.",
     exampleSrc:"A: I will do the dishes.\nB: Thanks, since I did the cooking.",
     funFact:"설거지 is one of the most common household chores. 식기세척기 (dishwasher) is gaining popularity in Korea."},

    {type:"teach", trg:"설날", src:"Lunar New Year", pos:"noun", gender:null,
     note:"설 (New Year) + 날 (day).\nThe most important traditional Korean holiday.",
     example:"A: 설날에 뭐 해?\nB: 가족들 만나서 세배하고 떡국 먹어.",
     exampleSrc:"A: What do you do on Lunar New Year?\nB: I meet family, do the New Year bow, and eat rice cake soup.",
     funFact:"설날 traditions: 세배 (bowing to elders), 세뱃돈 (New Year money), 떡국 (rice cake soup). It is a 3-day holiday."},

    {type:"teach", trg:"설득하다", src:"to persuade, to convince", pos:"verb", gender:null,
     note:"Sino-Korean. 說 (speak) + 得 (obtain) + 하다.\nConvincing someone through argument.",
     example:"A: 부모님을 설득하는 게 어려워.\nB: 논리적으로 말하면 들어 주실 거야.",
     exampleSrc:"A: It is hard to persuade my parents.\nB: If you speak logically, they will listen.",
     funFact:"설득력 (persuasive power) is highly valued in Korean culture. Good 설득력 is seen as a key leadership quality."},

    {type:"teach", trg:"설렁탕", src:"ox bone soup", pos:"noun", gender:null,
     note:"Native Korean word.\nA milky-white soup made by boiling beef bones for hours.",
     example:"A: 추운 날에는 설렁탕이 최고야.\nB: 맞아, 뜨끈한 국물이 몸을 녹여 줘.",
     exampleSrc:"A: On cold days, ox bone soup is the best.\nB: Right, the hot broth warms the body.",
     funFact:"설렁탕 is simmered for 10+ hours. Restaurants are known by their broth quality. You season it yourself at the table."},

    {type:"teach", trg:"설립하다", src:"to establish, to found", pos:"verb", gender:null,
     note:"Sino-Korean. 設 (set up) + 立 (stand) + 하다.\nFormally creating an institution or organization.",
     example:"A: 이 대학교는 1905년에 설립됐어.\nB: 역사가 깊은 학교구나.",
     exampleSrc:"A: This university was founded in 1905.\nB: It is a school with a deep history.",
     funFact:"설립자 (founder) is displayed prominently in Korean institutions. University founders are deeply revered."},

    {type:"teach", trg:"설명되다", src:"to be explained", pos:"verb", gender:null,
     note:"설명 (explanation) + 되다 (passive).\nSomething being clarified or made understandable.",
     example:"A: 이 현상은 과학적으로 설명될 수 있어.\nB: 어떻게 설명되는데?",
     exampleSrc:"A: This phenomenon can be explained scientifically.\nB: How is it explained?",
     funFact:"설명되다 is the passive of 설명하다 (to explain). The shift from active to passive is a key B2 grammar skill."},

    {type:"teach", trg:"설문", src:"survey, questionnaire", pos:"noun", gender:null,
     note:"Sino-Korean. 設 (set up) + 問 (question).\nA structured set of questions for research.",
     example:"A: 설문 조사에 참여해 주세요.\nB: 몇 분 정도 걸려요?",
     exampleSrc:"A: Please participate in the survey.\nB: How many minutes does it take?",
     funFact:"설문 조사 (survey research) is extremely common in Korea. Opinions on everything from food to politics are surveyed."},

    {type:"teach", trg:"설사", src:"even if, even though (conjunction)", pos:"adv", gender:null,
     note:"Sino-Korean. 設 (suppose) + 使 (make).\nA concessive conjunction meaning 'even if.'",
     example:"A: 설사 실패하더라도 후회하지 않을 거야.\nB: 그 마음이 중요해.",
     exampleSrc:"A: Even if I fail, I will not regret it.\nB: That attitude is what matters.",
     funFact:"설사 as a conjunction is formal/literary. Note: 설사 can also mean diarrhea (泄瀉) in medical context."},

    {type:"teach", trg:"설치", src:"installation, setting up", pos:"noun", gender:null,
     note:"Sino-Korean. 設 (set up) + 置 (place).\nThe act of putting equipment or systems in place.",
     example:"A: 에어컨 설치를 예약했어.\nB: 언제 오는 거야?",
     exampleSrc:"A: I made a reservation for air conditioner installation.\nB: When are they coming?",
     funFact:"설치 기사 (installation technician) is a common service profession. 앱 설치 means app installation."},

    {type:"fb",
     s:"부모님을 {1} 유학을 갈 수 있었다.",
     a:["설득해서"],
     opts:["설득해서","설명해서","설치해서","설립해서"],
     hint:"Which verb means to persuade or convince, describing how someone got permission to study abroad?",
     sSrc:"I was able to study abroad because I {1} my parents."},

    {type:"match", pairs:[
      {trg:"선거", src:"election"},
      {trg:"선진국", src:"developed country"},
      {trg:"설날", src:"Lunar New Year"},
      {trg:"설득하다", src:"to persuade"}
    ]}
  ]
};
export default LESSON_14;
