// Korean B2 — Batch 5, Lesson 15: Installation, Religion, and Growth
// Words: 설치되다, 설치하다, 섭섭하다, 섭씨, 성, 성경, 성공적, 성당, 성립되다, 성립하다, 성명, 성별, 성숙하다, 성실하다, 성인, 성장, 성질, 성함

const LESSON_15 = {
  id:"kov2_b2b5_l15", title:"성장과 성실", icon:"📈", xp:15, board:true,
  steps:[
    {type:"intro", title:"성장과 성실",
     desc:"Learn vocabulary about installation, temperature, religion, character, and growth. This lesson covers words for personal development and social structures.",
     goals:["Master 18 words about personality, growth, and institutions","Understand Sino-Korean compounds with 成/性 (become/nature)","Use formal vocabulary for personal and institutional descriptions"]},

    {type:"teach", trg:"설치되다", src:"to be installed, to be set up", pos:"verb", gender:null,
     note:"설치 + 되다 (passive).\nEquipment or systems being put in place.",
     example:"A: CCTV가 곳곳에 설치되어 있어.\nB: 안전을 위해서 필요하지.",
     exampleSrc:"A: CCTV cameras are installed everywhere.\nB: They are needed for safety.",
     funFact:"Korea has one of the highest CCTV densities in the world. 설치되다 appears in many public safety announcements."},

    {type:"teach", trg:"설치하다", src:"to install, to set up", pos:"verb", gender:null,
     note:"설치 + 하다.\nActively putting equipment in place.",
     example:"A: 새 프로그램을 설치했어?\nB: 응, 방금 설치 완료했어.",
     exampleSrc:"A: Did you install the new program?\nB: Yes, I just finished installing it.",
     funFact:"In tech contexts, 설치하다 is used exactly like English 'install': 앱을 설치하다, 소프트웨어를 설치하다."},

    {type:"teach", trg:"섭섭하다", src:"to feel sad/disappointed (about parting)", pos:"adj", gender:null,
     note:"Native Korean adjective.\nA gentle sadness when something ends or someone leaves.",
     example:"A: 벌써 가야 해? 섭섭하다.\nB: 나도, 다음에 또 만나자.",
     exampleSrc:"A: Do you have to go already? I feel sad.\nB: Me too, let's meet again next time.",
     funFact:"섭섭하다 is a uniquely Korean emotion. Not quite 'sad' or 'disappointed' but a gentle sense of loss at parting."},

    {type:"teach", trg:"섭씨", src:"Celsius", pos:"noun", gender:null,
     note:"Sino-Korean. Transliteration of 'Celsius.'\nThe temperature measurement scale.",
     example:"A: 오늘 기온이 섭씨 35도야.\nB: 정말 덥다. 에어컨을 켜자.",
     exampleSrc:"A: Today's temperature is 35 degrees Celsius.\nB: It is really hot. Let's turn on the AC.",
     funFact:"Korea uses Celsius exclusively. 화씨 (Fahrenheit) is rarely used except in international scientific contexts."},

    {type:"teach", trg:"성", src:"surname, castle, gender", pos:"noun", gender:null,
     note:"Multiple Sino-Korean meanings.\n姓 (surname), 城 (castle), 性 (gender/nature).",
     example:"A: 성이 뭐예요?\nB: 김입니다.",
     exampleSrc:"A: What is your surname?\nB: It is Kim.",
     funFact:"Korea has only about 280 surnames. Kim (김), Lee (이), and Park (박) account for nearly 45% of the population."},

    {type:"teach", trg:"성경", src:"the Bible", pos:"noun", gender:null,
     note:"Sino-Korean. 聖 (holy) + 經 (scripture).\nThe Christian holy book.",
     example:"A: 성경을 읽어 본 적 있어?\nB: 응, 세계 문학으로서 읽었어.",
     exampleSrc:"A: Have you ever read the Bible?\nB: Yes, I read it as world literature.",
     funFact:"About 30% of South Koreans are Christian. 성경 is one of the most printed books in Korea."},

    {type:"fb",
     s:"이번 프로젝트는 매우 {1}이었다.",
     a:["성공적"],
     opts:["성공적","성실한","성숙한","성별의"],
     hint:"Which word means successful, describing a project that achieved excellent results?",
     sSrc:"This project was very {1}."},

    {type:"teach", trg:"성공적", src:"successful", pos:"noun", gender:null,
     note:"성공 (success) + 적 (suffix).\nAchieving the desired result.",
     example:"A: 행사가 성공적으로 끝났어.\nB: 다들 열심히 준비한 덕분이야.",
     exampleSrc:"A: The event ended successfully.\nB: It is thanks to everyone's hard preparation.",
     funFact:"성공적으로 (successfully) is the adverb form. 성공적인 사업 (successful business) uses the adjective form."},

    {type:"teach", trg:"성당", src:"Catholic church, cathedral", pos:"noun", gender:null,
     note:"Sino-Korean. 聖 (holy) + 堂 (hall).\nA place of Catholic worship.",
     example:"A: 일요일마다 성당에 다녀?\nB: 응, 미사에 참석하고 있어.",
     exampleSrc:"A: Do you go to church every Sunday?\nB: Yes, I attend Mass.",
     funFact:"성당 is specifically Catholic. 교회 is Protestant. This distinction matters in Korean religious vocabulary."},

    {type:"teach", trg:"성립되다", src:"to be established, to come into being", pos:"verb", gender:null,
     note:"성립 + 되다 (passive).\nSomething formally coming into existence.",
     example:"A: 계약이 성립됐어?\nB: 네, 양측이 합의했어요.",
     exampleSrc:"A: Was the contract established?\nB: Yes, both sides agreed.",
     funFact:"성립되다 is used for agreements, laws, and theories that come into formal existence."},

    {type:"teach", trg:"성립하다", src:"to be established, to hold true", pos:"verb", gender:null,
     note:"성립 + 하다.\nActive form: something holding true or being valid.",
     example:"A: 이 이론�� 성립하려면 증거가 필요해.\nB: 실험을 더 해 봐야겠다.",
     exampleSrc:"A: For this theory to hold, we need evidence.\nB: We should do more experiments.",
     funFact:"In math: 등식이 성립하다 (an equation holds true). In law: 범죄가 성립하다 (a crime is constituted)."},

    {type:"teach", trg:"성명", src:"full name, official statement", pos:"noun", gender:null,
     note:"Sino-Korean. 姓 (surname) + 名 (name), or 聲 (voice) + 明 (clear).\nTwo meanings: full name or public statement.",
     example:"A: 성명을 기입해 주세요.\nB: 한글로 쓸까요, 영어로 쓸까요?",
     exampleSrc:"A: Please fill in your full name.\nB: Should I write in Korean or English?",
     funFact:"성명서 (official statement) is issued by governments or organizations. 성함 is the honorific version of 성명."},

    {type:"teach", trg:"성별", src:"gender, sex", pos:"noun", gender:null,
     note:"Sino-Korean. 性 (nature/gender) + 別 (distinction).\nThe biological or social category.",
     example:"A: 성별에 따른 차별은 안 돼.\nB: 동의해, 모든 사람이 평등해야 해.",
     exampleSrc:"A: Discrimination based on gender is wrong.\nB: I agree, all people should be equal.",
     funFact:"성별 is the standard term on Korean forms. 성평등 (gender equality) is a growing social movement in Korea."},

    {type:"teach", trg:"성숙하다", src:"to be mature, to ripen", pos:"verb", gender:null,
     note:"Sino-Korean. 成 (become) + 熟 (ripe).\nReaching a state of maturity.",
     example:"A: 그 친구가 많이 성숙해졌어.\nB: 경험이 사람을 성숙하게 만들지.",
     exampleSrc:"A: That friend has matured a lot.\nB: Experience makes people mature.",
     funFact:"성숙한 사회 (a mature society) is an aspirational phrase in Korean civic discourse."},

    {type:"teach", trg:"성실하다", src:"to be sincere, to be diligent", pos:"adj", gender:null,
     note:"Sino-Korean. 誠 (sincere) + 實 (real).\nBeing genuinely hardworking and reliable.",
     example:"A: 그 사원은 정말 성실해.\nB: 맡은 일을 항상 잘 해내더라.",
     exampleSrc:"A: That employee is really diligent.\nB: They always complete their assigned work well.",
     funFact:"성실함 is one of the most valued qualities in Korean job references. 성실한 태도 (sincere attitude) is key."},

    {type:"mc",
     q:"항상 맡은 일을 책임감 있게 하는 사람을 어떻게 표현하는가?",
     opts:["성실하다","성숙하다","성공적이다","섭섭하다"],
     ans:"성실하다",
     hint:"Which adjective describes someone who is consistently sincere and diligent in fulfilling responsibilities?"},

    {type:"teach", trg:"성인", src:"adult", pos:"noun", gender:null,
     note:"Sino-Korean. 成 (become) + 人 (person).\nA person who has reached adulthood.",
     example:"A: 한국에서는 몇 살부터 성인이야?\nB: 만 19세부터야.",
     exampleSrc:"A: At what age are you an adult in Korea?\nB: From age 19.",
     funFact:"성인식 (coming of age ceremony) is held on the third Monday of May. 성인 also means 'saint' with different Hanja (聖人)."},

    {type:"teach", trg:"성장", src:"growth, development", pos:"noun", gender:null,
     note:"Sino-Korean. 成 (become) + 長 (long/grow).\nIncreasing in size, maturity, or development.",
     example:"A: 아이의 성장이 빠르다.\nB: 어느새 이만큼 컸네.",
     exampleSrc:"A: The child's growth is fast.\nB: Before we knew it, they grew this much.",
     funFact:"경제 성장 (economic growth) and 개인 성장 (personal growth) are both central Korean life concepts."},

    {type:"teach", trg:"성질", src:"temper, nature, character trait", pos:"noun", gender:null,
     note:"Sino-Korean. 性 (nature) + 質 (quality).\nOne's innate temperament.",
     example:"A: 성질이 급한 편이야?\nB: 응, 참을성이 좀 부족해.",
     exampleSrc:"A: Do you tend to have a quick temper?\nB: Yes, I am a bit lacking in patience.",
     funFact:"성질 부리다 (to throw a temper) describes someone losing their cool. It has a negative connotation."},

    {type:"teach", trg:"성함", src:"name (honorific)", pos:"noun", gender:null,
     note:"Sino-Korean. 姓 (surname) + 銜 (title).\nVery respectful way to ask someone's name.",
     example:"A: 성함이 어떻게 되세요?\nB: 김민수입니다.",
     exampleSrc:"A: What is your name?\nB: It is Kim Minsu.",
     funFact:"이름 (name) < 성명 (full name, formal) < 성함 (name, honorific). Service staff always use 성함."},

    {type:"fb",
     s:"고객님, {1}이 어떻게 되세요?",
     a:["성함"],
     opts:["성함","성명","성별","성질"],
     hint:"Which is the most respectful way to ask a customer's name in Korean service contexts?",
     sSrc:"May I ask your {1}, sir/madam?"},

    {type:"match", pairs:[
      {trg:"성장", src:"growth"},
      {trg:"성실하다", src:"to be sincere"},
      {trg:"성인", src:"adult"},
      {trg:"성함", src:"name (honorific)"}
    ]}
  ]
};
export default LESSON_15;
