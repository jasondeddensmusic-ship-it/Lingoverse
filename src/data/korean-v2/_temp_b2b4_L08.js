// Korean B2 — Batch 4, Lesson 8: Names and Honor
// Words: 면적, 면하다, 멸치, 명단, 명령어, 명예, 명의, 명절, 명칭, 명함, 명확하다, 몇십, 모, 모금, 모기, 모레, 모범, 모색하다, 모여들다, 모조리

const LESSON_8 = {
  id:"kov2_b2b4_l8", title:"명예와 모범", icon:"🏅", xp:15, board:true,
  steps:[
    {type:"intro", title:"명예와 모범",
     desc:"Learn vocabulary for names, honor, searching, and gathering. This lesson covers Sino-Korean 명 (name/bright) compounds and words about collecting and exploring.",
     goals:["Master 20 words about names, honor, and gathering","Understand the 명- (name/bright) Hanja family","Use formal nouns for lists, titles, and holidays"]},

    {type:"teach", trg:"면적", src:"area, surface area", pos:"noun", gender:null,
     note:"Sino-Korean. 面 (surface) + 積 (accumulate).\nThe measured size of a surface.",
     example:"A: 이 아파트 면적이 얼마예요?\nB: 85제곱미터예요.",
     exampleSrc:"A: What is the area of this apartment?\nB: It is 85 square meters.",
     funFact:"From Hanja 面積. Korean real estate uses 평 (pyeong, about 3.3 sq meters) alongside 제곱미터 for area."},

    {type:"teach", trg:"면하다", src:"to avoid, to be exempt from", pos:"verb", gender:null,
     note:"Sino-Korean. 免 (exempt) + 하다.\nTo escape from an unpleasant situation.",
     example:"A: 큰 사고를 간신히 면했어요.\nB: 다행이네요, 정말 위험했겠어요.",
     exampleSrc:"A: We barely avoided a major accident.\nB: That is fortunate, it must have been really dangerous.",
     funFact:"From Hanja 免. Common in formal expressions: 책임을 면하다 (avoid responsibility), 처벌을 면하다 (avoid punishment)."},

    {type:"teach", trg:"멸치", src:"anchovy", pos:"noun", gender:null,
     note:"Native Korean word.\nSmall dried fish used for broth.",
     example:"A: 멸치로 국물을 내면 맛있어.\nB: 맞아, 한국 요리의 기본이지.",
     exampleSrc:"A: Making broth with anchovies is delicious.\nB: Right, it is a foundation of Korean cooking.",
     funFact:"멸치볶음 (stir-fried anchovies) is one of the most common 반찬 (side dishes) in Korean lunchboxes."},

    {type:"teach", trg:"명단", src:"name list, roster", pos:"noun", gender:null,
     note:"Sino-Korean. 名 (name) + 單 (single/list).\nAn official list of names.",
     example:"A: 참석자 명단을 확인해 주세요.\nB: 네, 30명 등록되어 있어요.",
     exampleSrc:"A: Please check the attendee list.\nB: Yes, 30 people are registered.",
     funFact:"From Hanja 名單. 블랙리스트 (blacklist) is also used in Korean, but 명단 is the formal native term."},

    {type:"teach", trg:"명령어", src:"command (computing)", pos:"noun", gender:null,
     note:"Sino-Korean. 命令 (command) + 語 (word).\nA command in programming or computing.",
     example:"A: 이 명령어를 입력하면 프로그램이 실행돼요.\nB: 어떤 명령어인데요?",
     exampleSrc:"A: If you enter this command, the program runs.\nB: What command is it?",
     funFact:"From Hanja 命令語. Korean IT vocabulary mixes Hanja-based terms with English loanwords like 커맨드."},

    {type:"mc",
     q:"'멸치'는 한국 요리에서 주로 어떻게 쓰이나요?",
     opts:["국물을 내는 데 사용한다","디저트 재료로 사용한다","음료를 만드는 데 사용한다","빵을 만드는 데 사용한다"],
     ans:"국물을 내는 데 사용한다",
     hint:"These tiny dried fish are a foundational ingredient in Korean cuisine, primarily used for making broth."},

    {type:"teach", trg:"명예", src:"honor, reputation", pos:"noun", gender:null,
     note:"Sino-Korean. 名 (name) + 譽 (praise).\nPrestige and respect from society.",
     example:"A: 가문의 명예를 지키는 게 중요했어요.\nB: 옛날에는 더 그랬죠.",
     exampleSrc:"A: Protecting the family's honor was important.\nB: It was even more so in the old days.",
     funFact:"From Hanja 名譽. 명예 교수 (professor emeritus) is a title of respect for retired professors."},

    {type:"teach", trg:"명의", src:"registered name, name on record", pos:"noun", gender:null,
     note:"Sino-Korean. 名 (name) + 義 (meaning/designation).\nThe person a contract or property is registered under.",
     example:"A: 이 차는 누구 명의로 되어 있어요?\nB: 아버지 명의예요.",
     exampleSrc:"A: Under whose name is this car registered?\nB: It is under my father's name.",
     funFact:"From Hanja 名義. Very important in Korean legal contexts: property, bank accounts, and contracts all require 명의."},

    {type:"teach", trg:"명절", src:"traditional holiday", pos:"noun", gender:null,
     note:"Sino-Korean. 名 (notable) + 節 (season/festival).\nA major traditional Korean holiday.",
     example:"A: 명절에는 가족들이 모여요.\nB: 올해는 모두 오실 수 있대요?",
     exampleSrc:"A: Families gather on traditional holidays.\nB: Can everyone come this year?",
     funFact:"Korea's biggest 명절 are Seollal (설날, Lunar New Year) and Chuseok (추석, harvest festival)."},

    {type:"teach", trg:"명칭", src:"name, title, designation", pos:"noun", gender:null,
     note:"Sino-Korean. 名 (name) + 稱 (call).\nThe official name of something.",
     example:"A: 이 건물의 공식 명칭이 뭐예요?\nB: '시민문화센터'예요.",
     exampleSrc:"A: What is the official name of this building?\nB: It is 'Citizen Cultural Center.'",
     funFact:"From Hanja 名稱. More formal than 이름 (name). Used for official titles of organizations and places."},

    {type:"teach", trg:"명함", src:"business card", pos:"noun", gender:null,
     note:"Sino-Korean. 名 (name) + 銜 (title).\nA card with your name and contact info.",
     example:"A: 명함 한 장 드려도 될까요?\nB: 네, 감사합니다. 여기 제 명함이에요.",
     exampleSrc:"A: May I give you my business card?\nB: Yes, thank you. Here is my card.",
     funFact:"In Korean business culture, 명함 are exchanged with both hands and a bow. Never write on someone's 명함."},

    {type:"fb",
     s:"{1}에는 온 가족이 함께 모입니다.",
     a:["명절"],
     opts:["명절","명단","명예","명칭"],
     hint:"This Sino-Korean word means a traditional holiday when families gather, like Chuseok or Seollal.",
     sSrc:"The whole family gathers together on {1}."},

    {type:"teach", trg:"명확하다", src:"to be clear, to be definite", pos:"adj", gender:null,
     note:"Sino-Korean. 明 (bright) + 確 (certain) + 하다.\nCompletely clear with no ambiguity.",
     example:"A: 지시 사항이 명확하지 않아요.\nB: 다시 한번 설명해 드릴게요.",
     exampleSrc:"A: The instructions are not clear.\nB: Let me explain once more.",
     funFact:"From Hanja 明確. 明 means 'bright' and 確 means 'certain,' so literally 'brightly certain.'"},

    {type:"teach", trg:"몇십", src:"several tens, tens of", pos:"noun", gender:null,
     note:"몇 (how many/several) + 십 (ten).\nAn indefinite number in the tens.",
     example:"A: 몇십 명이나 왔어요?\nB: 한 50명 정도 된 것 같아요.",
     exampleSrc:"A: How many tens of people came?\nB: I think about 50 people.",
     funFact:"Korean uses 몇- as a vague number prefix: 몇백 (hundreds), 몇천 (thousands), 몇만 (tens of thousands)."},

    {type:"teach", trg:"모", src:"a certain, some (determiner)", pos:"noun", gender:null,
     note:"Sino-Korean. 某 (certain).\nUsed when being vague about identity.",
     example:"A: 모 회사에서 연락이 왔어요.\nB: 어떤 회사인데요?",
     exampleSrc:"A: A certain company contacted me.\nB: Which company is it?",
     funFact:"From Hanja 某. Used in news to anonymize: 모 연예인 (a certain celebrity), 모 기업 (a certain company)."},

    {type:"teach", trg:"모금", src:"a sip; fundraising", pos:"noun", gender:null,
     note:"Two meanings.\n모금 as sip (bound noun for counting sips). 募金 (raise + money) = fundraising.",
     example:"A: 물 한 모금만 주세요.\nB: 여기요, 천천히 드세요.",
     exampleSrc:"A: Please give me just one sip of water.\nB: Here you go, drink slowly.",
     funFact:"As a bound noun, 한 모금 (one sip), 두 모금 (two sips). As fundraising: 모금 활동 (fundraising activities)."},

    {type:"teach", trg:"모기", src:"mosquito", pos:"noun", gender:null,
     note:"Native Korean word.\nA biting insect common in summer.",
     example:"A: 어젯밤에 모기 때문에 못 잤어.\nB: 모기장을 치거나 향을 피워 봐.",
     exampleSrc:"A: I could not sleep last night because of mosquitoes.\nB: Try putting up a mosquito net or burning incense.",
     funFact:"Korea has the expression 모기도 먹을 게 있어야 먹지 (even mosquitoes need something to bite), meaning you need resources."},

    {type:"mc",
     q:"명함을 교환할 때 한국 비즈니스 예절은?",
     opts:["두 손으로 주고받으며 인사한다","한 손으로 가볍게 건넨다","테이블 위에 놓아둔다","이메일로 보낸다"],
     ans:"두 손으로 주고받으며 인사한다",
     hint:"Korean business culture emphasizes respect. Think about how both hands show politeness."},

    {type:"teach", trg:"모레", src:"the day after tomorrow", pos:"noun", gender:null,
     note:"Native Korean word.\nTwo days from now.",
     example:"A: 모레 시간 있어?\nB: 모레는 괜찮아, 뭐 할 건데?",
     exampleSrc:"A: Are you free the day after tomorrow?\nB: The day after tomorrow works, what are you planning?",
     funFact:"Korean time words: 오늘 (today), 내일 (tomorrow), 모레 (day after tomorrow), 글피 (three days from now)."},

    {type:"teach", trg:"모범", src:"model, example, exemplary", pos:"noun", gender:null,
     note:"Sino-Korean. 模 (pattern) + 範 (model).\nA standard of good behavior.",
     example:"A: 그 학생은 모범이 되는 행동을 해요.\nB: 다른 학생들도 따라했으면 좋겠어요.",
     exampleSrc:"A: That student sets an exemplary example.\nB: I wish other students would follow suit.",
     funFact:"From Hanja 模範. 모범생 (model student), 모범 택시 (deluxe taxi), 모범 답안 (model answer)."},

    {type:"teach", trg:"모색하다", src:"to search for, to explore options", pos:"verb", gender:null,
     note:"Sino-Korean. 摸 (grope) + 索 (search) + 하다.\nTo carefully look for solutions.",
     example:"A: 새로운 사업 방향을 모색하고 있어요.\nB: 시장 조사부터 하는 게 좋겠어요.",
     exampleSrc:"A: We are exploring new business directions.\nB: It would be good to start with market research.",
     funFact:"From Hanja 摸索. Literally 'groping and searching.' More formal than 찾다 (to look for)."},

    {type:"teach", trg:"모여들다", src:"to flock, to gather together", pos:"verb", gender:null,
     note:"모이다 (gather) + 들다 (enter).\nPeople streaming in to one place.",
     example:"A: 사람들이 광장에 모여들고 있어요.\nB: 무슨 행사가 있나 봐요.",
     exampleSrc:"A: People are flocking to the plaza.\nB: There must be some event.",
     funFact:"모여들다 implies many individuals converging, while 모이다 (gather) is more neutral about the scale."},

    {type:"teach", trg:"모조리", src:"all, every single one, without exception", pos:"adv", gender:null,
     note:"Native Korean adverb.\nAbsolutely everything, nothing left out.",
     example:"A: 냉장고에 있는 음식을 모조리 먹었어?\nB: 미안, 배가 너무 고팠어.",
     exampleSrc:"A: Did you eat every single thing in the refrigerator?\nB: Sorry, I was very hungry.",
     funFact:"모조리 is more emphatic than 모두 (all). It stresses completeness: 모조리 사라졌다 (every last one vanished)."},

    {type:"fb",
     s:"해결 방법을 다각도로 {1}해야 합니다.",
     a:["모색"],
     opts:["모색","모범","모기","모금"],
     hint:"This formal Sino-Korean verb means to search for or explore possible solutions carefully.",
     sSrc:"We must {1} solutions from multiple angles."},

    {type:"match", pairs:[
      {trg:"명예", src:"honor"},
      {trg:"명함", src:"business card"},
      {trg:"명확하다", src:"to be clear"},
      {trg:"모조리", src:"every single one"}
    ]}
  ]
};
export default LESSON_8;
