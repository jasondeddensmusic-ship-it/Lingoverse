// Korean B2. Batch 5, Lesson 8: Society and Family
// Words: 사례, 사립, 사망, 사망하다, 사모님, 사무, 사무소, 사무직, 사방, 사상, 사생활, 사설, 사소하다, 사슴, 사실상, 사업가, 사업자, 사위, 사이사이, 사이좋다

const LESSON_8 = {
  id:"kov2_b2b5_l8", title:"사회와 사람들", icon:"🏢", xp:15, board:true,
  steps:[
    {type:"intro", title:"사회와 사람들",
     desc:"Learn vocabulary about cases, offices, death, family, and social life. This lesson covers formal and institutional vocabulary essential for news comprehension.",
     goals:["Master 20 words related to offices, society, and family","Understand Sino-Korean compounds with 事 (matter) and 死 (death)","Use formal vocabulary for professional and family contexts"]},

    {type:"teach", trg:"사례", src:"case, example, reward", pos:"noun", gender:null,
     note:"Sino-Korean. 事 (matter) + 例 (example).\nA specific instance or case study.",
     example:"A: 성공 사례를 분석해 봅시다.\nB: 좋은 생각이에요. 자료를 준비할게요.",
     exampleSrc:"A: Let's analyze success cases.\nB: Good idea. I will prepare the materials.",
     funFact:"사례 can also mean a reward or token of gratitude: 사례금 (reward money)."},

    {type:"teach", trg:"사립", src:"private (institution)", pos:"noun", gender:null,
     note:"Sino-Korean. 私 (private) + 立 (establish).\nEstablished by private entities, not the government.",
     example:"A: 사립 대학교에 다녀?\nB: 응, 등록금이 비싸지만 교육이 좋아.",
     exampleSrc:"A: Do you attend a private university?\nB: Yes, tuition is expensive but the education is good.",
     funFact:"The opposite is 국립 (national/public). Korea has many prestigious 사립 universities like Yonsei and Korea University."},

    {type:"teach", trg:"사망", src:"death, passing", pos:"noun", gender:null,
     note:"Sino-Korean. 死 (die) + 亡 (perish).\nFormal term for death.",
     example:"A: 교통사고로 사망자가 발생했대.\nB: 정말 안타깝다.",
     exampleSrc:"A: There were fatalities from a traffic accident, they say.\nB: That is truly unfortunate.",
     funFact:"사망 is the formal/news term. 죽음 (death) is the everyday word. 사망률 means mortality rate."},

    {type:"teach", trg:"사망하다", src:"to die, to pass away (formal)", pos:"verb", gender:null,
     note:"사망 + 하다.\nFormal verb for death, used in news and official reports.",
     example:"A: 환자가 병원에서 사망했습니다.\nB: 유가족에게 위로의 말씀을 전합니다.",
     exampleSrc:"A: The patient died at the hospital.\nB: We send our condolences to the bereaved family.",
     funFact:"Korean has many terms for dying: 죽다 (plain), 돌아가시다 (respectful), 사망하다 (formal/medical)."},

    {type:"teach", trg:"사모님", src:"madam, sir's wife (honorific)", pos:"noun", gender:null,
     note:"Sino-Korean. 師母 (teacher's mother) + 님 (honorific).\nA respectful term for someone's wife.",
     example:"A: 사모님, 안녕하세요?\nB: 어서 오세요, 잘 지냈어요?",
     exampleSrc:"A: Hello, madam.\nB: Welcome, have you been well?",
     funFact:"Originally used for a professor's wife. Now broadly used as a respectful address for any married woman."},

    {type:"fb",
     s:"교통사고로 두 명이 현장에서 {1}.",
     a:["사망했다"],
     opts:["사망했다","사과했다","사냥했다","사들였다"],
     hint:"Which formal verb means to die, typically used in news reports about accidents or incidents?",
     sSrc:"Two people {1} at the scene from a traffic accident."},

    {type:"teach", trg:"사무", src:"office work, clerical affairs", pos:"noun", gender:null,
     note:"Sino-Korean. 事 (matter) + 務 (duty).\nAdministrative or desk work.",
     example:"A: 사무 업무가 많아서 바빠.\nB: 보조 직원이 필요하겠다.",
     exampleSrc:"A: I am busy because there is a lot of office work.\nB: You probably need an assistant.",
     funFact:"사무 combines with many words: 사무실 (office), 사무직 (office worker), 사무용품 (office supplies)."},

    {type:"teach", trg:"사무소", src:"office, bureau", pos:"noun", gender:null,
     note:"사무 (office work) + 소 (place).\nA place where administrative work is done.",
     example:"A: 변호사 사무소가 어디에 있어요?\nB: 3층에 있어요.",
     exampleSrc:"A: Where is the law office?\nB: It is on the third floor.",
     funFact:"사무소 is used for professional offices (law, accounting). 사무실 is the general word for any office room."},

    {type:"teach", trg:"사무직", src:"office work, desk job", pos:"noun", gender:null,
     note:"사무 (office) + 직 (occupation).\nWhite-collar work done at a desk.",
     example:"A: 사무직이 체력적으로 쉬운 것 같지?\nB: 아니, 하루 종일 앉아 있으면 허리가 아파.",
     exampleSrc:"A: Office work seems physically easy, right?\nB: No, if you sit all day, your back hurts.",
     funFact:"Korean divides jobs into 사무직 (office/desk work) and 현장직 (field/hands-on work)."},

    {type:"teach", trg:"사방", src:"all directions, all sides", pos:"noun", gender:null,
     note:"Sino-Korean. 四 (four) + 方 (direction).\nEvery direction around.",
     example:"A: 사방이 산으로 둘러싸여 있어.\nB: 정말 자연이 아름다운 곳이다.",
     exampleSrc:"A: Mountains surround us on all sides.\nB: It is truly a place with beautiful nature.",
     funFact:"사방팔방 (all four and eight directions) is an intensified version meaning 'absolutely everywhere.'"},

    {type:"teach", trg:"사상", src:"ideology, thought system", pos:"noun", gender:null,
     note:"Sino-Korean. 思 (think) + 想 (imagine).\nA system of beliefs or philosophy.",
     example:"A: 동양 사상에 관심이 많아.\nB: 어떤 분야를 공부하고 있어?",
     exampleSrc:"A: I am very interested in Eastern philosophy.\nB: Which area are you studying?",
     funFact:"사상 can also mean 'casualties' with different Hanja (死傷): 사상자 (casualties in a disaster)."},

    {type:"teach", trg:"사생활", src:"private life, privacy", pos:"noun", gender:null,
     note:"Sino-Korean. 私生活 (private + life).\nOne's personal, non-public life.",
     example:"A: 유명인의 사생활도 존중해야 해.\nB: 맞아, 사생활 침해는 안 돼.",
     exampleSrc:"A: We should respect celebrities' private lives too.\nB: Right, invading privacy is wrong.",
     funFact:"사생활 보호 (privacy protection) is a growing concern in Korea with increasing surveillance and social media."},

    {type:"teach", trg:"사설", src:"editorial, private (as prefix)", pos:"noun", gender:null,
     note:"Sino-Korean. Two meanings: 社說 (editorial) or 私設 (privately established).\nNewspaper opinion piece or privately run.",
     example:"A: 오늘 신문 사설 읽어 봤어?\nB: 응, 교육 정책에 대한 내용이었어.",
     exampleSrc:"A: Did you read today's newspaper editorial?\nB: Yes, it was about education policy.",
     funFact:"Every major Korean newspaper has a daily 사설 section. 사설 학원 means a private academy (hagwon)."},

    {type:"mc",
     q:"신문에서 편집자의 의견을 담은 글을 무엇이라고 하는가?",
     opts:["사설","사례","사상","사생활"],
     ans:"사설",
     hint:"Which word means an editorial, the opinion piece in a newspaper that expresses the editor's view?"},

    {type:"teach", trg:"사소하다", src:"to be trivial, to be minor", pos:"adj", gender:null,
     note:"Sino-Korean. 些少 (small amount).\nSomething unimportant or negligible.",
     example:"A: 사소한 일로 싸우지 마.\nB: 맞아, 별거 아닌 일이었어.",
     exampleSrc:"A: Do not fight over trivial matters.\nB: Right, it was nothing important.",
     funFact:"사소한 것에서 행복을 찾다 (finding happiness in small things) is a popular life philosophy in Korea."},

    {type:"teach", trg:"사슴", src:"deer", pos:"noun", gender:null,
     note:"Native Korean word.\nThe forest animal with antlers.",
     example:"A: 산에서 사슴을 봤어!\nB: 진짜? 요즘은 보기 힘든데.",
     exampleSrc:"A: I saw a deer on the mountain!\nB: Really? They are hard to see these days.",
     funFact:"Jeju Island has a deer park (사슴 농장) where visitors can feed deer. It is a popular tourist spot."},

    {type:"teach", trg:"사실상", src:"in reality, practically, virtually", pos:"adv", gender:null,
     note:"사실 (fact) + 상 (on/above).\nIn practical terms, effectively.",
     example:"A: 그 계획은 사실상 실패한 거야.\nB: 공식적으로는 아직 진행 중이지만.",
     exampleSrc:"A: That plan has virtually failed.\nB: Officially it is still in progress, though.",
     funFact:"사실상 is a key news vocabulary word. It signals the gap between official statements and reality."},

    {type:"teach", trg:"사업가", src:"entrepreneur, businessperson", pos:"noun", gender:null,
     note:"사업 (business) + 가 (person suffix).\nSomeone who runs their own business.",
     example:"A: 성공한 사업가가 되고 싶어.\nB: 어떤 분야의 사업을 할 거야?",
     exampleSrc:"A: I want to become a successful entrepreneur.\nB: In what field will you do business?",
     funFact:"Korea's startup culture is booming. Young 사업가 are now celebrated, unlike the traditional corporate path."},

    {type:"teach", trg:"사업자", src:"business operator, business entity", pos:"noun", gender:null,
     note:"사업 (business) + 자 (person/entity).\nA registered business operator.",
     example:"A: 사업자 등록을 먼저 해야 해.\nB: 세무서에 가면 되지?",
     exampleSrc:"A: You need to do business registration first.\nB: I just go to the tax office, right?",
     funFact:"사업자 등록증 (business registration certificate) is essential in Korea. Without it, you cannot legally operate."},

    {type:"teach", trg:"사위", src:"son-in-law", pos:"noun", gender:null,
     note:"Native Korean word.\nA daughter's husband.",
     example:"A: 우리 사위가 참 착해.\nB: 딸이 좋은 사람을 만났네.",
     exampleSrc:"A: Our son-in-law is really kind.\nB: Your daughter met a good person.",
     funFact:"In Korean culture, the relationship with a 사위 is important. The phrase 사위 사랑은 장모 (son-in-law love is from mother-in-law) reflects this."},

    {type:"teach", trg:"사이사이", src:"in between, here and there", pos:"noun", gender:null,
     note:"사이 (between) doubled for emphasis.\nScattered throughout gaps or intervals.",
     example:"A: 건물 사이사이에 나무가 심어져 있어.\nB: 도시 녹화를 잘 했네.",
     exampleSrc:"A: Trees are planted here and there between the buildings.\nB: They did a good job of urban greening.",
     funFact:"Doubling words in Korean often intensifies: 사이사이 (throughout gaps), 틈틈이 (in spare moments)."},

    {type:"teach", trg:"사이좋다", src:"to be on good terms, to get along well", pos:"adj", gender:null,
     note:"사이 (relationship) + 좋다 (good).\nHaving a harmonious relationship.",
     example:"A: 너희 형제는 사이좋게 지내네.\nB: 어릴 때는 많이 싸웠는데.",
     exampleSrc:"A: You siblings get along well.\nB: We used to fight a lot when we were young.",
     funFact:"사이좋게 지내다 (to live on good terms) is what Korean parents always tell siblings to do."},

    {type:"fb",
     s:"두 나라는 오랫동안 {1} 지내왔다.",
     a:["사이좋게"],
     opts:["사이좋게","사소하게","사실상","사방에"],
     hint:"Which expression means 'on good terms,' describing a harmonious relationship between two countries?",
     sSrc:"The two countries have been getting along {1} for a long time."},

    {type:"match", pairs:[
      {trg:"사생활", src:"privacy"},
      {trg:"사실상", src:"virtually"},
      {trg:"사소하다", src:"to be trivial"},
      {trg:"사위", src:"son-in-law"}
    ]}
  ]
};
export default LESSON_8;
